((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,H,S,E,I,C={
bGV(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bGV=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vW(null,""),$async$bGV)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nk(b1)
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
f.push(A.J(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.W.av(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.rk(t,a1,B.i2,"book",B.H7),$async$bGV)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=A.RH(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.M6(l)?y.k:y.y)
for(j=J.a8(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a1(r.a(j.h(a2,a7)),q,p):B.cF
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=A.a41(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGV,v)},
ait(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ait=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vW(null,""),$async$ait)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nk(b6)
s=x.S
r=A.cT(c1,0,A.dA(4,"count",s),A.T(c1).c)
q=A.a3M(new A.N(r,new C.fRJ(),r.$ti.k("N<ak.E,q>")).aN(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fRI(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.W.av(b7,null)+"\nAllowed values: style one of "+B.d.aN(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ait)
case 6:l=c5
k=A.RH(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.aqd(s,D.dJL,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.t
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.W("There is no page to change.")
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
return A.b(m.$1(f+B.W.av(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ait)
case 10:l=c5
k=l==null?null:A.RH(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.de(a8,d),a5=J.aT(a2.a),a2=a2.$ti,a7=new A.kM(a5,a2.k("kM<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gP(a5))
b0=J.a8(a9)
b1=A.aI(b0.h(a9,"index"))
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
p=A.cF(new A.b8(h,s),new C.fRK(),s.k("M.E"),p)
p=A.a3M(A.pJ(p,3,A.a4(p).k("M.E")).aN(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cr<1>")
b4=A.B(new A.cr(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(A.a41(s,b9),$async$ait)
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
return A.i($async$ait,v)},
hKl(d,e,f){return A.cg(null,B.w.j(0.65),!1,null,new C.h0T(e,f),d,null,!0,!0,x.g2)},
aqd:function aqd(d,e,f){this.a=d
this.b=e
this.c=f},
fRJ:function fRJ(){},
fRI:function fRI(d){this.a=d},
fRK:function fRK(){},
h0T:function h0T(d,e){this.a=d
this.b=e},
bEB(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bEB=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aS(b1,new C.fEL())){u=null
w=1
break}t=B.d.cA(b1,new C.fEM())
s=$.R()
r=new A.oD(new A.od())
q=A.w5(r,D.aTj)
p=A.L()
p.r=B.c.gp(0)
q.aD(D.aTj,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.ab
o.d=B.bG
o.e=B.dQ
n=new C.fER(t)
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
s=$.R()
p=A.a([],x.v)
a3=new A.aG(s.r,B.ai,null,null,p)
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
a3=new A.aG(s.r,B.ai,null,null,p)
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
return A.b(r.n0().tT(520,160),$async$bEB)
case 4:w=3
return A.b(b3.hc(B.he),$async$bEB)
case 3:b0=b3
u=b0==null?null:J.eM(B.dD.gaT(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEB,v)},
fPo(d){return C.ip0(d)},
ip0(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fPo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bku()
n=d.x!=null&&d.zS(null).length===0
if(d.x!=null)t=n?D.AJ:D.K9
else t=d.gUW()?D.K9:D.aO9
w=3
return A.b(C.bEB(d.ax),$async$fPo)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aoQ(s)
r=A.a5L(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aO9}else{p.c=C.xp(q,!0)
p.b=n?D.AJ:D.K9}r.a4A(A.hbE(new C.fPq(p,d,new C.fPr(),t,n,o),null,D.bJk,B.xs))
u=r.jH(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fPo,v)},
fWj(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fWj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fPo(d),$async$fWj)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aB(q,0,40)
u=A.Hz(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fWj,v)},
fEL:function fEL(){},
fEM:function fEM(){},
fER:function fER(d){this.a=d},
fPr:function fPr(){},
fPq:function fPq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fPp:function fPp(){},
h1l(d,e){var w=0,v=A.j(x.H)
var $async$h1l=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,B.w.j(0.55),!0,null,new C.h1p(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$h1l)
case 2:return A.h(null,v)}})
return A.i($async$h1l,v)},
bHn(d,e,f,g){return C.iwL(d,e,f,g)},
iwL(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bHn=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cD.aK(t)}catch(q){r=null}if(r==null||r.length===0){d.K(x.q).f.U(D.fvs)
w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.h1h(g,r,f),d,null,!0,!0,x.H),$async$bHn)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bHn,v)},
h1q(d,e){var w=0,v=A.j(x.H)
var $async$h1q=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,null,!0,null,new C.h1t(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$h1q)
case 2:return A.h(null,v)}})
return A.i($async$h1q,v)},
b0A:function b0A(d,e){this.c=d
this.a=e},
c9o:function c9o(){},
bdR:function bdR(d,e){this.b=d
this.a=e},
h1p:function h1p(d,e){this.a=d
this.b=e},
h1m:function h1m(d){this.a=d},
h1n:function h1n(d,e,f){this.a=d
this.b=e
this.c=f},
h1o:function h1o(d,e){this.a=d
this.b=e},
h1h:function h1h(d,e,f){this.a=d
this.b=e
this.c=f},
h1f:function h1f(d){this.a=d},
h1g:function h1g(d,e,f){this.a=d
this.b=e
this.c=f},
h1t:function h1t(d,e){this.a=d
this.b=e},
h1r:function h1r(d){this.a=d},
h1s:function h1s(d,e,f){this.a=d
this.b=e
this.c=f},
fJE(d,e){var w=0,v=A.j(x.y),u,t
var $async$fJE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3w(d),$async$fJE)
case 3:t=g
J.mW(t,new C.fJF(e))
u=A.aj6(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fJE,v)},
fJF:function fJF(d){this.a=d},
aqq:function aqq(d,e,f){this.c=d
this.d=e
this.a=f},
aFg:function aFg(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dSm:function dSm(d,e){this.a=d
this.b=e},
dS7:function dS7(d,e){this.a=d
this.b=e},
dSa:function dSa(d,e,f){this.a=d
this.b=e
this.c=f},
dS9:function dS9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dS8:function dS8(d,e){this.a=d
this.b=e},
dSb:function dSb(d,e){this.a=d
this.b=e},
dS5:function dS5(){},
dS6:function dS6(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dS4:function dS4(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dRQ:function dRQ(d){this.a=d},
dRR:function dRR(d,e,f){this.a=d
this.b=e
this.c=f},
dRS:function dRS(d,e){this.a=d
this.b=e},
dRP:function dRP(d){this.a=d},
dRX:function dRX(d,e){this.a=d
this.b=e},
dRO:function dRO(d){this.a=d},
dRY:function dRY(d,e,f){this.a=d
this.b=e
this.c=f},
dRZ:function dRZ(d,e,f){this.a=d
this.b=e
this.c=f},
dRN:function dRN(d,e){this.a=d
this.b=e},
dS_:function dS_(d,e,f){this.a=d
this.b=e
this.c=f},
dRM:function dRM(d,e){this.a=d
this.b=e},
dS0:function dS0(d,e){this.a=d
this.b=e},
dRL:function dRL(d){this.a=d},
dS1:function dS1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRJ:function dRJ(){},
dRD:function dRD(d){this.a=d},
dRE:function dRE(d){this.a=d},
dRK:function dRK(d,e){this.a=d
this.b=e},
dS2:function dS2(d,e){this.a=d
this.b=e},
dRI:function dRI(d){this.a=d},
dS3:function dS3(d){this.a=d},
dRH:function dRH(){},
dRT:function dRT(d,e){this.a=d
this.b=e},
dRG:function dRG(d){this.a=d},
dRU:function dRU(d,e,f){this.a=d
this.b=e
this.c=f},
dRF:function dRF(d,e){this.a=d
this.b=e},
dRC:function dRC(d,e){this.a=d
this.b=e},
dRV:function dRV(d){this.a=d},
dRW:function dRW(d,e,f){this.a=d
this.b=e
this.c=f},
dSp:function dSp(){},
dSq:function dSq(d,e){this.a=d
this.b=e},
dSn:function dSn(d){this.a=d},
dSo:function dSo(d){this.a=d},
dSj:function dSj(d,e){this.a=d
this.b=e},
dSk:function dSk(d){this.a=d},
dSc:function dSc(d,e,f){this.a=d
this.b=e
this.c=f},
dSd:function dSd(d,e,f){this.a=d
this.b=e
this.c=f},
dSe:function dSe(d,e,f){this.a=d
this.b=e
this.c=f},
dSf:function dSf(d,e,f){this.a=d
this.b=e
this.c=f},
dSg:function dSg(d,e,f){this.a=d
this.b=e
this.c=f},
dSh:function dSh(d,e,f){this.a=d
this.b=e
this.c=f},
dSi:function dSi(d,e,f){this.a=d
this.b=e
this.c=f},
dSr:function dSr(){},
dSs:function dSs(){},
dSt:function dSt(){},
dSu:function dSu(d){this.a=d},
dSl:function dSl(d,e){this.a=d
this.b=e},
hFR(d){return B.d.dM(D.a5I,new C.fKq(d),new C.fKr())},
uS:function uS(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fKq:function fKq(d){this.a=d},
fKr:function fKr(){},
amr:function amr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aXi:function aXi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ue:function Ue(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bht:function bht(){this.d=$
this.c=this.a=null},
di2:function di2(d,e){this.a=d
this.b=e},
di0:function di0(d,e){this.a=d
this.b=e},
di1:function di1(){},
di3:function di3(d,e){this.a=d
this.b=e},
hpS(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bj(J.k(u==null?"":u))
return new C.nt(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LS(d,e){return C.inH(d,e)},
inH(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LS=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$LS)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aW(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.W.aP(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.de(p,x.f)
o=A.cF(o,new C.fMY(),o.$ti.k("M.E"),x.B)
n=A.a4(o).k("Y<M.E>")
o=A.B(new A.Y(o,new C.fMZ(),n),n.k("M.E"))
B.d.b0(o,new C.fN_())
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
return A.i($async$LS,v)},
Bw(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Bw=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$Bw)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b9(f,new C.h_X(),x.a)
r=A.B(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aG("String","ngmy_family_book_v1_"+s+"_"+e,B.W.av(r,null)),$async$Bw)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Bw,v)},
aTp(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aTp=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LS(d,e),$async$aTp)
case 2:u=h
t=J.cE(u)
s=t.bk(u,new C.h8C(f))
if(s===-1)t.ca(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Bw(d,e,u),$async$aTp)
case 3:return A.h(null,v)}})
return A.i($async$aTp,v)},
bF5(d,e,f){var w=0,v=A.j(x.H),u
var $async$bF5=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LS(d,e),$async$bF5)
case 2:u=h
J.mW(u,new C.fJw(f))
w=3
return A.b(C.Bw(d,e,u),$async$bF5)
case 3:return A.h(null,v)}})
return A.i($async$bF5,v)},
bFl(d,e){return C.inG(d,e)},
inG(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bFl=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bFl)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aW(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Pg
w=1
break}p=B.W.aP(0,q,null)
if(x.f.b(p)){o=A.a1(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aI(o.h(0,"emblem"))
k=k==null?null:B.h.M(k)
if(k==null)k=0
if(D.Ef.an(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aI(o.h(0,"titleSize"))
if(i==null)i=null
i=B.h.D(i==null?25:i,18,36)
h=B.d.q(D.a7q,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.q(D.a6K,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.q(D.a6G,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.dac,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.Ix(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Pg
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Pg
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bFl,v)},
SR(d,e,f){return C.iwg(d,e,f)},
iwg(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$SR=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$SR)
case 7:r=h
w=8
return A.b(r.aG("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.W.av(f.aj(),null)),$async$SR)
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
return A.i($async$SR,v)},
Sh(d,e){return C.inI(d,e)},
inI(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Sh=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Sh)
case 7:r=g
q=r.rE("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.LS(d,e),$async$Sh)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.lo(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aG("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Sh)
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
return A.i($async$Sh,v)},
ahN(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ahN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sh(d,e),$async$ahN)
case 3:s=g
r=J.a8(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.I(s,t)
w=5
return A.b(A.az(),$async$ahN)
case 5:w=4
return A.b(g.aG("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ahN)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahN,v)},
a4d(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a4d=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Sh(d,e),$async$a4d)
case 2:s=h
J.fN(s,f)
w=3
return A.b(A.az(),$async$a4d)
case 3:u=h
w=4
return A.b(u.aG("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a4d)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4d)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4d)
case 6:return A.h(null,v)}})
return A.i($async$a4d,v)},
nt:function nt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fMY:function fMY(){},
fMZ:function fMZ(){},
fN_:function fN_(){},
h_X:function h_X(){},
h8C:function h8C(d){this.a=d},
fJw:function fJw(d){this.a=d},
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
bSJ:function bSJ(d){this.a=d},
iwA(d,e,f,g,h,i,j){return A.a6(d,!1).cf(A.eg(new C.h0x(j,i,f,e,h,g),!0,null,x.H))},
Sd(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Sd=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sh(h,g),$async$Sd)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.K(x.q).f.U(D.aVH)
u=!1
w=1
break}w=4
return A.b(C.hKl(d,f,e),$async$Sd)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ahN(h,g),$async$Sd)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nt(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.Bw(h,r,p),$async$Sd)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.SR(h,r,new C.Ix("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Sd)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Sd,v)},
h0x:function h0x(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_R:function a_R(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aCe:function aCe(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
diI:function diI(d){this.a=d},
diH:function diH(d,e){this.a=d
this.b=e},
diw:function diw(d,e){this.a=d
this.b=e},
dit:function dit(d,e){this.a=d
this.b=e},
di4:function di4(d){this.a=d},
di5:function di5(d,e){this.a=d
this.b=e},
dix:function dix(d){this.a=d},
did:function did(d){this.a=d},
dib:function dib(d){this.a=d},
dic:function dic(d){this.a=d},
die:function die(d){this.a=d},
diu:function diu(d){this.a=d},
div:function div(){},
di9:function di9(d){this.a=d},
dia:function dia(d,e){this.a=d
this.b=e},
dif:function dif(d){this.a=d},
dig:function dig(d,e){this.a=d
this.b=e},
diG:function diG(d){this.a=d},
diF:function diF(d,e){this.a=d
this.b=e},
diE:function diE(d){this.a=d},
diq:function diq(d){this.a=d},
dip:function dip(d){this.a=d},
dir:function dir(d){this.a=d},
di6:function di6(d,e){this.a=d
this.b=e},
dis:function dis(d,e){this.a=d
this.b=e},
dij:function dij(d){this.a=d},
dik:function dik(d){this.a=d},
dii:function dii(){},
dil:function dil(d){this.a=d},
dim:function dim(d){this.a=d},
din:function din(d,e){this.a=d
this.b=e},
dio:function dio(d,e,f){this.a=d
this.b=e
this.c=f},
dih:function dih(d,e){this.a=d
this.b=e},
diz:function diz(d){this.a=d},
diy:function diy(){},
diA:function diA(d){this.a=d},
diB:function diB(d){this.a=d},
diC:function diC(d){this.a=d},
diD:function diD(d,e){this.a=d
this.b=e},
di7:function di7(d){this.a=d},
di8:function di8(d){this.a=d},
a_V:function a_V(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhS:function bhS(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dku:function dku(d){this.a=d},
dkv:function dkv(d){this.a=d},
dkt:function dkt(d){this.a=d},
dkw:function dkw(d){this.a=d},
dks:function dks(d){this.a=d},
dkx:function dkx(d){this.a=d},
dkr:function dkr(d){this.a=d},
dky:function dky(d,e){this.a=d
this.b=e},
dkq:function dkq(d,e){this.a=d
this.b=e},
dkz:function dkz(d,e){this.a=d
this.b=e},
a_T:function a_T(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
age:function age(d,e,f){this.a=d
this.b=e
this.c=f},
aCh:function aCh(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
diX:function diX(d,e){this.a=d
this.b=e},
diW:function diW(d,e){this.a=d
this.b=e},
dj0:function dj0(d){this.a=d},
dj_:function dj_(d,e){this.a=d
this.b=e},
diY:function diY(d){this.a=d},
diZ:function diZ(d){this.a=d},
dj1:function dj1(d){this.a=d},
dj2:function dj2(d){this.a=d},
diV:function diV(d,e){this.a=d
this.b=e},
diU:function diU(d,e){this.a=d
this.b=e},
KV:function KV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_7:function a_7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cR2:function cR2(d){this.a=d},
cR3:function cR3(){},
cR4:function cR4(d){this.a=d},
bf3:function bf3(d,e,f){this.b=d
this.c=e
this.a=f},
beV:function beV(d,e){this.b=d
this.a=e},
uT:function uT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_r:function a_r(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bf1:function bf1(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d9P:function d9P(d,e,f){this.a=d
this.b=e
this.c=f},
d9O:function d9O(d,e){this.a=d
this.b=e},
dad:function dad(d){this.a=d},
da0:function da0(){},
dae:function dae(d){this.a=d},
da_:function da_(){},
daf:function daf(d,e){this.a=d
this.b=e},
d9Z:function d9Z(d,e){this.a=d
this.b=e},
dag:function dag(d,e){this.a=d
this.b=e},
d9Y:function d9Y(d,e){this.a=d
this.b=e},
dah:function dah(d){this.a=d},
d9X:function d9X(){},
dai:function dai(d,e){this.a=d
this.b=e},
d9W:function d9W(d,e){this.a=d
this.b=e},
daj:function daj(d){this.a=d},
da8:function da8(d,e){this.a=d
this.b=e},
dak:function dak(d){this.a=d},
dal:function dal(d){this.a=d},
dan:function dan(d){this.a=d},
dao:function dao(d){this.a=d},
da7:function da7(d,e){this.a=d
this.b=e},
dap:function dap(d,e){this.a=d
this.b=e},
aJm:function aJm(d){this.a=d},
bkp:function bkp(d){this.a=d},
bdd:function bdd(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
ams:function ams(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a26:function a26(d,e){this.a=d
this.b=e},
amt:function amt(d,e,f,g,h,i){var _=this
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
bST:function bST(d){this.a=d},
bSN:function bSN(d){this.a=d},
bSM:function bSM(d,e){this.a=d
this.b=e},
bSW:function bSW(d){this.a=d},
bSO:function bSO(d){this.a=d},
bSP:function bSP(d){this.a=d},
bSS:function bSS(d){this.a=d},
bSR:function bSR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSU:function bSU(d,e){this.a=d
this.b=e},
bSV:function bSV(){},
bSQ:function bSQ(d){this.a=d},
bSK:function bSK(d,e){this.a=d
this.b=e},
bSL:function bSL(d){this.a=d},
bq0:function bq0(d,e){this.b=d
this.a=e},
aCf:function aCf(){},
iF(d,e){var w
$.R()
w=A.L()
w.b=B.ab
w.c=e
w.r=d.gp(0)
w.d=B.bG
w.e=B.dQ
return w},
bED(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.br(j.save())
j.translate(e.a,e.b)
d.nN(0,a0?-f:f,f)
w=A.bX(B.ht,8,36)
v=B.w.j(0.3)
u=$.R()
t=A.L()
t.r=v.gp(0)
d.c1(w,t)
w=a1===D.XR
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.exI,new A.r(-4+v,-2),C.iF(q,5))
d.ah(D.evl,new A.r(4-v,-2),C.iF(q,5))}else{t=A.bX(B.K0,14,40)
p=A.L()
p.r=v.gp(0)
d.c1(t,p)}v=u.r
u=x.v
o=new A.aG(v,B.ai,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.ce(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.ce(15,-40,11,t))
o.E(new A.bx())
t=A.L()
t.r=w.gp(0)
d.af(o,t)
u=new A.aG(v,B.ai,k,k,A.a([],u))
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
break}if(a1===D.b2F){n=-52+w*14
d.ah(new A.r(10,n-22),new A.r(10,n+44),C.iF(B.Gi,3.4))
d.ah(D.exZ,new A.r(9,n),C.iF(q,4))
d.ah(D.evM,new A.r(10,n),C.iF(q,4))}else if(a1===D.b2G){d.ah(D.ewP,new A.r(-8,-26-Math.max(0,w)*6),C.iF(q,4))
d.ah(D.etO,new A.r(8,-26-Math.max(0,-w)*6),C.iF(q,4))}else{w=s*3
v=-38-r
d.ah(D.ewT,new A.r(-12-w,v),C.iF(q,4))
d.ah(D.aN9,new A.r(12+w,v),C.iF(q,4))}w=A.L()
w.r=q.gp(0)
d.aD(D.fih,w)
m=new A.r(0,-77-r)
w=A.bX(m,22,19)
v=A.L()
v.r=q.gp(0)
d.c1(w,v)
w=h.y
if(w!=null){v=A.bX(m.a5(0,B.vJ),15,24)
u=A.L()
u.r=w.gp(0)
d.c1(v,u)
u=m.a5(0,D.etI)
v=A.L()
v.r=w.gp(0)
d.O(u,4,v)}else{w=A.bX(m.a5(0,B.tM),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cQ(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a5(0,D.exX),m.a5(0,D.ewN),C.iF(v,2.2))
d.ah(m.a5(0,D.evL),m.a5(0,D.etF),C.iF(v,2.2))}if(w===4){w=m.a5(0,D.ey0)
u=A.L()
u.r=v.gp(0)
d.O(w,6,u)
u=m.a5(0,D.evN)
w=A.L()
w.r=v.gp(0)
d.O(u,6,w)}}w=m.a5(0,D.ewC)
v=A.L()
v.r=B.id.gp(0)
d.O(w,0.9,v)
v=m.a5(0,D.ewr)
w=A.L()
w.r=B.id.gp(0)
d.O(v,0.9,w)
if(i){l=m.a5(0,B.a9y)
w=A.bX(l,21,22)
v=A.L()
v.r=D.lG.gp(0)
d.c1(w,v)
v=A.bX(l.a5(0,B.aN6),5,12)
w=A.L()
w.r=D.bi6.gp(0)
d.c1(v,w)
d.ah(l.a5(0,D.exT),l.a5(0,B.aNu),C.iF(B.cV,1.4))
d.ah(D.aN9,new A.r(15,-88-r),C.iF(q,3.6))}j.restore()},
hEu(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.br(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bV(0,f)
v=A.bX(B.dM,18,96)
u=B.w.j(0.28)
$.R()
t=A.L()
t.r=u.gp(0)
d.c1(v,t)
t=A.bX(B.dM,11,70)
v=B.w.j(0.2)
u=A.L()
u.r=v.gp(0)
d.c1(t,u)
d.lC(D.aTn,A.L())
C.icf(d,g,h,i,j)
s=(k==null?D.a9D:k).a-w>=0?1:-1
w=A.L()
w.a=B.Mn
w.sam(A.jz(new A.r(s*70,-60),new A.r(-s*70,-60),A.a([D.ajz.j(0.5),D.ajz.j(0.12),D.bpL.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aD(D.aTn,w)
r.restore()
r.restore()},
icf(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.w,0.28)
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
s=A.bw(D.fii,B.tR)
p=$.R()
o=A.L()
o.r=u.gp(0)
a1.aq(s,o)
o=A.bw(D.fid,B.hW)
s=A.ap(v,B.w,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.aq(o,n)
n=A.bw(D.fir,B.hW)
o=A.ap(v,B.w,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.aq(n,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.fik,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.fh3,s)
s=a1.c
J.br(s.save())
s.translate(a3.w,0)
J.br(s.save())
a1.nN(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aG(p.r,B.ai,e,e,A.a([],n))
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
J.br(s.save())
a1.mz(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dhg[j]
i=new A.ar(B.S,B.Q,B.V,B.X,B.T)
i.b=B.ab
i.c=5
i.r=k.gp(0)
i.d=B.bG
i.e=B.dQ
a1.ah(new A.r(-34+u,-64),new A.r(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.ar(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.R()
f=new A.ar(B.S,B.Q,B.V,B.X,B.T)
f.r=i.gp(0)
a1.O(new A.r(g,h),3.6,f)
f=new A.ar(B.S,B.Q,B.V,B.X,B.T)
f.r=u.gp(0)
a1.O(new A.r(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ar(B.S,B.Q,B.V,B.X,B.T)
i.b=B.ab
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dQ
a1.ah(new A.r(g,-64),new A.r(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ar(B.S,B.Q,B.V,B.X,B.T)
i.b=B.ab
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dQ
a1.ah(new A.r(-30,h),new A.r(30,h),i)}break
default:a1.ah(D.exl,D.eut,C.iF(a2.c.j(0.9),3))}a1.ah(D.exU,D.ewV,C.iF(B.w.j(0.18),1.6))
a1.ah(D.etN,B.aNb,C.iF(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.R()
i=A.L()
i.r=u.gp(0)
a1.aD(D.fh_,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.aD(D.fhd,i)
n=new A.aG(k.r,B.ai,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.ce(0,-57,9,-66))
n.E(new A.ce(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cQ(D.fhm,0.1,2.941592653589793,!1,C.iF(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a9I
n=25*q
k=23*q
i=9*q
C.hAs(a1,new A.r(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.EH:o
C.hAs(a1,new A.r(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.evd,D.ev9,C.iF(D.aky,4))
a1.ah(D.evb,D.ev7,C.iF(D.GJ.j(0.7),1.4))
u=A.L()
u.r=B.cV.gp(0)
a1.O(D.eva,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.br(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jr(0,a3.f)
a1.bV(0,r)
C.ica(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hAs(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aJ(0,e),r=s.gcJ(),q=r===0?B.ht:s.eW(0,r),p=B.h.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.r(o,w)
if(o*i<0)v=new A.r(-o,-w)
u=e.a5(0,q.aM(0,n)).a5(0,v.aM(0,m))
t=e.a5(0,q.aM(0,p))
d.ah(e,u,C.iF(j,l))
o=A.ap(j,B.w,0.2)
o.toString
d.ah(e,u,C.iF(o,l*0.35))
d.ah(u,t,C.iF(k,l*0.78))
o=A.ap(k,B.w,0.22)
o.toString
d.ah(u,t,C.iF(o,l*0.22))
$.R()
o=A.L()
o.r=j.gp(0)
d.O(u,l*0.55,o)
o=A.bX(t,l*1.15,l)
w=A.L()
w.r=k.gp(0)
d.c1(o,w)
w=-l
w=t.a5(0,new A.r(i*w*0.45,w*0.1))
o=A.L()
o.r=k.gp(0)
d.O(w,l*0.28,o)},
ica(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bX(B.vI,40,38)
$.R()
v=A.L()
v.r=c0.gp(0)
c2.c1(w,v)}if(c1===4){$.R()
w=A.L()
w.r=c0.gp(0)
c2.O(D.ex2,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.O(D.eu3,9.5,w)}w=A.bX(D.eyf,10,6)
v=$.R()
u=A.L()
u.r=c8.gp(0)
c2.c1(w,u)
u=A.bX(D.ewz,10,6)
w=A.L()
w.r=c8.gp(0)
c2.c1(u,w)
v=v.r
w=x.v
t=new A.aG(v,B.ai,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.hV(13,-20,17,-9,16,2))
t.E(new A.hV(15,13,8,20,0,20))
t.E(new A.hV(-8,20,-15,13,-16,2))
t.E(new A.hV(-17,-9,-13,-20,0,-20))
t.E(new A.bx())
u=A.L()
u.sam(A.wg(D.exK,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iF(c8.j(0.5),0.8)
c2.cQ(D.fit,3.455751918948773,2.5132741228718345,!1,s)
c2.cQ(D.fh6,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.ex_,B.aND,s)
c2.ah(D.eu_,D.etR,s)
c2.cQ(D.fhl,2.2,1.4,!1,s)
c2.cQ(D.fh4,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.S,B.Q,B.V,B.X,B.T)
n.r=c0.gp(0)
c2.O(new A.r(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fhA,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aG(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.ce(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.ce(0,-12,-13,-6))
p.E(new A.bx())
o=A.L()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.ewR,D.etS,C.iF(B.np,1.4))
o=A.L()
o.r=c0.gp(0)
c2.O(D.ex5,3,o)
o=A.L()
o.r=c0.gp(0)
c2.O(D.eu4,3,o)
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.ce(-12,22,0,26))
o.E(new A.ce(12,22,13,6))
o.E(new A.ce(8,13,0,12))
o.E(new A.ce(-8,13,-13,6))
o.E(new A.bx())
p=A.L()
p.r=B.hM.gp(0)
c2.af(o,p)
p=new A.aG(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.ce(0,6,7,8))
p.E(new A.ce(0,10.5,-7,8))
o=A.L()
o.r=B.bO.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aG(v,B.ai,b9,b9,A.a([],w))
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
c2.cQ(D.fhH,3.4,2.5,!1,C.iF(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cQ(D.fht,3.6,2.2,!1,C.iF(o,1.2))
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.ce(27,-34,25,-19))
o.E(new A.ce(18,-18,11,-22))
p=A.ap(m,B.c,0.1)
p.toString
n=A.L()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aG(v,B.ai,b9,b9,A.a([],w))
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
c2.O(D.etT,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fhE,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.ar(B.S,B.Q,B.V,B.X,B.T)
o.b=B.ab
o.c=0.9
o.r=p.gp(0)
o.d=B.bG
o.e=B.dQ
c2.ah(new A.r(r*3.6,-19+Math.abs(r)*0.8),new A.r(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=E.aDR[l]
o=new A.ar(B.S,B.Q,B.V,B.X,B.T)
o.b=B.ab
o.c=4.5
o.r=c0.gp(0)
o.d=B.bG
o.e=B.dQ
c2.ah(new A.r(k,0),new A.r(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ar(B.S,B.Q,B.V,B.X,B.T)
o.r=p.gp(0)
c2.O(new A.r(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fhD,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(B.a9y,B.a9x,C.iF(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fh7,3.267256359733385,2.8902652413026098,!0,p)}i=B.h.D(c4.b,0,1)*0.4+0.1
p=A.bX(D.ey2,5,8)
o=D.agO.j(i)
n=A.L()
n.r=o.gp(0)
c2.c1(p,n)
n=A.bX(D.ewK,5,8)
p=D.agO.j(i)
o=A.L()
o.r=p.gp(0)
c2.c1(n,o)
h=c4.e*2.4
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.ce(h-3.4,6,h-2.6,7.4))
o.E(new A.ce(h,8.8,h+2.6,7.4))
c2.af(o,C.iF(c8.j(0.75),1.1))
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
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=B.hf[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bX(new A.r(a5,-3),a3,7)
a6=new A.ar(B.S,B.Q,B.V,B.X,B.T)
a6.r=B.c.j(0.96).gp(0)
c2.c1(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.br(d.save())
a6=A.a([],w)
a4=new A.aG(v,B.ai,b9,b9,a6)
a6.push(new A.jt(A.bX(new A.r(a5,-3),a3,7)))
a4.ab()
a3=a4.e
if(a3==null)a3=a4.e=new A.Eg(a4.glg().a.snapshot())
d.clipPath(a3.a,$.my(),!0)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.T)
a3.r=D.bm1.gp(0)
c2.O(new A.r(a7,a8),2.1,a3)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.T)
a3.r=B.w.gp(0)
c2.O(new A.r(a7,a8),1.05,a3)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.T)
a3.r=B.c.gp(0)
c2.O(new A.r(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.a_3:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ar(B.S,B.Q,B.V,B.X,B.T)
a9.b=B.ab
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
if(u)b1=B.dN
else{b1=A.ap(c0,B.w,0.2)
b1.toString}b2=new A.ar(B.S,B.Q,B.V,B.X,B.T)
b2.b=B.ab
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bG
b2.e=B.dQ
c2.ah(new A.r(a5-a4,b0-a6+0.4),new A.r(a5+a4,b0-0.6-a3),b2)}b3=B.h.D(c4.a,0,1)
if(o)b4=D.bww
else{u=A.ap(c8,D.bpN,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.h.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aG(v,B.ai,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.ce(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.ce(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bx())
v=A.L()
v.r=D.bp4.gp(0)
c2.af(b8,v)
J.br(d.save())
c2.mz(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.aD(new A.a3(w,11,w+b6*2,13.2),u)
u=A.bX(new A.r(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.bwB.gp(0)
c2.c1(u,w)
d.restore()
c2.af(b8,C.iF(b4,1.1))}else{u=new A.aG(v,B.ai,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.ce(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iF(b4,1.5))
if(b5>0.6){w=new A.aG(v,B.ai,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.ce(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.ce(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.L()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cQ(D.fhk,-1.2,2.2,!1,C.iF(c8.j(0.5),0.8))
c2.cQ(D.fh9,2.141592653589793,2.2,!1,C.iF(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.O(D.ews,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.O(D.ewp,1.7,w)}},
ihF(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.R(),f=new A.oD(new A.od()),e=A.w5(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.sam(A.jz(B.J,new A.r(0,a0*0.46),D.ddY,D.d54,B.x,h))
e.aD(new A.a3(0,0,0+d,0+a0),a2)
a2=e.c
J.br(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bV(0,a1)
w=new A.e_()
w.cU(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ar(B.S,B.Q,B.V,B.X,B.T)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.O(new A.r(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.br(a2.save())
a2.translate(200,120)
e.jr(0,-0.5)
d=A.L()
a0=x.O
d.sam(A.wg(B.J,230,A.a([D.bkG,B.L],a0),h,B.x,h,h,0))
e.c1(D.fhP,d)
a2.restore()
d=A.L()
d.sam(A.wg(D.a9G,58,A.a([D.bo5,B.L],a0),h,B.x,h,h,0))
e.O(D.a9G,58,d)
d=A.L()
d.r=D.bjo.gp(0)
e.O(D.a9G,24,d)
d=A.L()
d.r=D.a_u.gp(0)
e.O(D.euN,5,d)
d=A.L()
d.r=D.a_u.gp(0)
e.O(D.euR,3.4,d)
d=A.L()
d.r=D.a_u.gp(0)
e.O(D.euQ,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aG(g.r,B.ai,h,h,u)
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
g=[D.bhV,D.bjX,D.bq6][s]
u=$.R()
t=new A.ar(B.S,B.Q,B.V,B.X,B.T)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.czA[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.S,B.Q,B.V,B.X,B.T)
u.b=B.ab
u.c=2.4
u.r=D.a_Q.gp(0)
u.d=B.bG
u.e=B.dQ
e.ah(new A.r(o,k),new A.r(g,d),u)
g=A.bX(new A.r(g,k-27),11,46)
u=new A.ar(B.S,B.Q,B.V,B.X,B.T)
u.r=D.a_Q.gp(0)
e.c1(g,u)
d=A.bX(new A.r(o-12,d),8,24)
u=new A.ar(B.S,B.Q,B.V,B.X,B.T)
u.r=D.a_Q.gp(0)
e.c1(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ar(B.S,B.Q,B.V,B.X,B.T)
u.r=D.bjr.j(0.8).gp(0)
e.O(new A.r(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.sam(A.jz(D.etm,D.etp,D.d76,B.xh,B.x,h))
e.aD(new A.a3(-200,412,650,1300),g)
j=new A.e_()
j.cU(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bX(new A.r(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h4()?B.c:B.w
d=new A.ar(B.S,B.Q,B.V,B.X,B.T)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.c1(u,d)}J.br(a2.save())
a2.translate(225,590)
e.nN(0,1,0.34)
g=A.L()
g.sam(A.wg(B.J,250,A.a([D.br6,D.bkh,D.bt3],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.O(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.ajf,D.biW,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.R()
a0=new A.ar(B.S,B.Q,B.V,B.X,B.T)
a0.b=B.ab
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bG
a0.e=B.dQ
e.ah(new A.r(o+i*2,k),new A.r(o+i*5,g+Math.abs(i)*3),a0)}}C.iaq(e)
for(l=0;l<3;++l)C.idD(e,D.aBD[l])
C.ids(e,D.euH)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.R()
a0=new A.ar(B.S,B.Q,B.V,B.X,B.T)
a0.b=B.ab
a0.c=2.4
a0.r=D.a_M.gp(0)
a0.d=B.bG
a0.e=B.dQ
e.ah(new A.r(o,452+g),new A.r(o+1,436+d),a0)}e.ah(D.etP,D.eu7,C.iF(D.bjF,1.6))
a2.restore()
return f.n0()},
iaq(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.R().r,g=x.v,f=new A.aG(h,B.ai,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.hV(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.hV(416,382,432,422,428,462))
f.E(new A.bx())
w=A.L()
w.sam(A.jz(new A.r(354,0),new A.r(430,0),D.dCm,B.mp,B.x,i))
d.af(f,w)
v=new A.e_()
v.cU(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.w.j(0.18)
p=new A.ar(B.S,B.Q,B.V,B.X,B.T)
p.b=B.ab
p.c=1.1
p.r=q.gp(0)
p.d=B.bG
p.e=B.dQ
d.ah(new A.r(t,s),new A.r(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.diG[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aG(h,B.ai,i,i,l)
l.push(new A.aZ(r,336))
k.ab()
r=new A.ce(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.ak(p)
k.ab()
r=new A.ar(B.S,B.Q,B.V,B.X,B.T)
r.b=B.ab
r.c=8
r.r=D.ahA.gp(0)
r.d=B.bG
r.e=B.dQ
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ar(B.S,B.Q,B.V,B.X,B.T)
l.r=A.ap(D.bjx,D.bq4,v.ai()).j(0.92).gp(0)
d.O(new A.r(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.S,B.Q,B.V,B.X,B.T)
r.b=B.ab
r.c=1.2
r.r=D.a_M.gp(0)
r.d=B.bG
r.e=B.dQ
d.ah(new A.r(w,q+8),new A.r(w,q+22),r)
q=A.bX(new A.r(w,q+28),13,7)
w=new A.ar(B.S,B.Q,B.V,B.X,B.T)
w.r=D.brt.gp(0)
d.c1(q,w)}},
idD(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bX(new A.r(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.R(),b3=A.L()
b3.r=b1.gp(0)
b4.c1(b0,b3)
b2=b2.r
b3=x.v
w=new A.aG(b2,B.ai,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.aZ(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.ce(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bx())
u=A.L()
u.sam(A.jz(new A.r(b0,0),new A.r(v,0),D.diM,B.mp,B.x,a4))
b4.af(w,u)
t=new A.e_()
t.cU(B.o.S(a5*7))
v=b4.c
J.br(v.save())
b4.mz(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.w.j(0.14)
n=new A.ar(B.S,B.Q,B.V,B.X,B.T)
n.b=B.ab
n.c=1
n.r=o.gp(0)
n.d=B.bG
n.e=B.dQ
b4.ah(new A.r(r,q),new A.r(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ajb.j(0.75)
n=A.L()
n.r=o.gp(0)
b4.aD(new A.a3(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.h.bg(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aG(b2,B.ai,a4,a4,j)
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
j=new A.ar(B.S,B.Q,B.V,B.X,B.T)
j.r=D.lG.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aG(b2,B.ai,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.h.bg(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.ak(n)
f.ab()}b4.af(f,C.iF(D.ajb.j(0.7),1.6))
v.restore()
b0=$.R().r
b2=new A.aG(b0,B.ai,a4,a4,A.a([],b3))
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
m.r=D.ajn.gp(0)
b4.af(b2,m)
m=A.L()
m.r=D.ajn.gp(0)
b4.O(new A.r(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aG(b0,B.ai,a4,a4,A.a([],b3))
e.E(new A.aZ(o,j))
n=b1-m*0.55
e.E(new A.ce(a5-a9,n,a5,u))
e.E(new A.ce(a5+a9,n,p,j))
e.E(new A.ce(a5,b1+a7*0.34,o,j))
e.E(new A.bx())
b1=A.L()
n=a7*1.4
b1.sam(A.jz(new A.r(a5-n,0),new A.r(a5+n,0),D.dmn,B.mp,B.x,a4))
b4.af(e,b1)
J.br(v.save())
b4.mz(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h4()?B.w:D.bj4).j(0.16)
i=new A.ar(B.S,B.Q,B.V,B.X,B.T)
i.b=B.ab
i.c=0.9
i.r=n.gp(0)
i.d=B.bG
i.e=B.dQ
b4.ah(new A.r(a5+(p-0.5)*3,u),new A.r(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aG(b0,B.ai,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.ab()
n=new A.ce(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.ak(b1)
p.ab()
b1=B.w.j(0.22)
n=new A.ar(B.S,B.Q,B.V,B.X,B.T)
n.b=B.ab
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
v=new A.ar(B.S,B.Q,B.V,B.X,B.T)
v.b=B.ab
v.c=1.1
v.r=D.bqy.gp(0)
v.d=B.bG
v.e=B.dQ
b4.ah(new A.r(a2,a3),new A.r(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aG(b0,B.ai,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bx())
b0=A.L()
b0.r=D.bmw.gp(0)
b4.af(a9,b0)},
ids(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+E.aDO[s]
$.R()
q=new A.ar(B.S,B.Q,B.V,B.X,B.T)
q.b=B.ab
q.c=3
q.r=D.a_M.gp(0)
q.d=B.bG
q.e=B.dQ
d.ah(new A.r(r,u),new A.r(r,t),q)}u=A.bX(e.a5(0,B.aN5),24,36)
t=$.R()
r=A.L()
r.r=D.bvI.gp(0)
d.c1(u,r)
t=new A.aG(t.r,B.ai,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.ce(w,v-24,r,u))
t.E(new A.bx())
u=A.L()
u.r=D.aih.gp(0)
d.af(t,u)},
icP(d){switch(B.o.F(d,8)){case 0:return D.b2d
case 1:return D.b2b
case 2:return D.b2a
case 3:return D.b29
case 4:return D.b2c
case 5:return D.b2e
case 6:return D.hIH
default:return D.hIG}},
SP(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bq1()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a9I:j
w.as=k==null?D.EH:k
C.hEu(d,e,p,C.icP(m),w,s,m,l)},
hFX(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bUx:function bUx(){var _=this
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
te:function te(d,e,f,g,h,i,j,k,l,m){var _=this
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
bq1:function bq1(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
amL:function amL(){this.b=this.a=null},
aXn:function aXn(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bUp:function bUp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUq:function bUq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUr:function bUr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUs:function bUs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUt:function bUt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUu:function bUu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUv:function bUv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUw:function bUw(){},
bUo:function bUo(d){this.a=d},
agn:function agn(d,e){this.a=d
this.b=e},
aek:function aek(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Nd(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bT8(s)
s.bCz(d)
return s},
H9(d,e,f,g,h,i,j){var w,v=A.T(g).k("Y<1>")
v=A.d_(new A.Y(g,new C.fxw(f),v),v.k("M.E"))
w=A.B(v,A.a4(v).k("cj.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cT(w,0,A.dA(3,"count",x.S),A.T(w).c))
B.d.e0(v,d)
return new C.ls(e,v,B.d.cj(v,f),h,i,"tree",j)},
iyd(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.S(c0,x.cg),c2=new C.h8s(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jA(c4,c0)
t=A.B(c4,A.a4(c4).k("cj.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jA(c4,c0)
r=A.B(c4,A.a4(c4).k("cj.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jA(c4,c0)
q=A.B(c4,A.a4(c4).k("cj.E"))
for(c4=w.length,v=A.T(t).k("Y<1>"),s=v.k("M.E"),p=A.T(w).k("Y<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.I)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.wO)g="father"
else g=h===D.oB?"mother":"parent"
h=B.a.i(i.b)
f=A.B(new A.Y(t,new C.h8u(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.H9(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.B(new A.Y(w,new C.h8v(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.ls("True or false: "+h+" is the "+g+" of "+l+".",D.aCF,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.ls("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aCF,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Gj(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.B(new A.Y(t,new C.h8w(l,a0,c5),v),s)
e=a1.c
if(e===D.wO)e="son"
else e=e===D.oB?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.H9(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.ew([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mq(a5,a5.r,f.k("mq<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.H9(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.T(a0),a2=e.k("iD<1>"),a3=new A.iD(a0,1,b3,a2),a3.ne(a0,1,b3,e.c),a3=new A.bR(a3,a3.gJ(0),a2.k("bR<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.H9(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.arZ(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.B(new A.Y(t,new C.h8x(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.H9(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.B(new A.Y(t,new C.h8y(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wO
if(e)a2=b7
else a2=f===D.oB?b8:b9
if(e)f=b7
else f=f===D.oB?b8:b9
c2.$2("grand",C.H9(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aNF(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.B(new A.Y(t,new C.h8z(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.H9(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.B(r,c0)
B.d.u(j,D.cSr)
h=l+" was born in "+k
c2.$2("place",C.H9(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.B(q,c0)
B.d.u(j,D.d8b)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.H9(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.H9(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.j_(b1,b3,b3)
c2.$2("year",C.H9(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bFh(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Nd(d),l=new A.e_()
l.cU(f)
w=C.iyd(m,l,g)
for(v=new A.dp(w,w.r,w.e);v.C();)J.hnX(v.d,l)
v=A.a4(w).k("cr<1>")
u=A.B(new A.cr(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aS(u,new C.fL3(n,w))))break
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
if(v<e){v=A.B(D.aAE,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hEB(o,l))}}else if(!g&&v>3){o=C.hEB(D.aAE[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hEB(d,e){var w=d.b,v=w[d.c]
w=A.B(w,x.N)
B.d.e0(w,e)
return new C.ls(d.a,w,B.d.cj(w,v),d.d,d.e,d.f,d.r)},
hJW(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Nd(a2),a1=new A.e_()
a1.cU(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.Gj(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.Gj(n)
l=A.T(m)
k=new A.iD(m,0,5,l.k("iD<1>"))
k.ne(m,0,5,l.c)
j=k.dq(0)
if(new A.N(j,new C.fZR(),A.T(j).k("N<1,H>")).fF(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aT9(a0,j[i]))
w.push(new C.auS("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.S(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.c4(e.c_(0,a0.an5(q),new C.fZS()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cr<1>")
d=A.B(new A.cr(e,t),t.k("M.E"))
B.d.ff(d)
v=A.a([],v)
for(u=A.cT(d,0,A.dA(5,"count",u),A.T(d).c),t=u.$ti,u=new A.bR(u,u.gJ(0),t.k("bR<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cE(s)
m.e0(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aT9(a0,v[r]))
w.push(new C.auS("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aRD(d){return B.d.aoz(D.aDa,new C.fGS(d))},
io8(d){return A.nw(new A.Y(D.aDa,new C.fNU(d),x.av))},
bTX(d){return C.hTC(d)},
hTC(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bTX=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bTX)
case 7:r=f
q=B.a.i(d)
q=A.er(J.t(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bTX,v)},
BT(d,e){return C.hTz(d,e)},
hTz(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$BT=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BT)
case 7:r=g
p=B.a.i(d)
o=A.er(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aG("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$BT)
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
bTW(d,e,f){return C.hTA(d,e,f)},
hTA(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bTW=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bTW)
case 7:r=h
q=B.a.i(d)
q=A.er(J.t(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bTW,v)},
BU(d,e,f,g){return C.hTB(d,e,f,g)},
hTB(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$BU=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BU)
case 7:r=i
p=B.a.i(d)
o=A.er(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aG("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$BU)
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
bHB(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
haw(d,e,f,g){return new C.alj(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hRG(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aT(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cu)
while(u.C())w.push(J.k(u.gP(u)))
u=x.N
w=A.cT(w,0,A.dA(4,"count",x.S),u).dq(0)
B.d.u(w,A.c1(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aI(d.h(0,"c"))
v=v==null?null:B.h.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aI(d.h(0,"s"))
u=u==null?null:B.h.M(u)
return C.haw(w,v,B.o.D(u==null?20:u,5,60),t)},
hp5(d){var w,v,u,t,s,r,q=J.a8(d),p=q.h(d,"id")
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
if(u.b(r))v.push(C.hRG(A.a1(r,t,s)))}return new C.MY(p,w,v)},
hj5(d){var w,v=A.a([],x.c)
for(w=J.aT(d.z);w.C();)v.push(C.hp5(w.gP(w)))
return v},
aT9(d,e){var w=e.c===D.oB
if(d.an5(e)===0&&d.Gj(e).length!==0)return w?0:1
if(d.Gj(e).length!==0||d.arZ(e)!=null)return w?2:3
return w?4:5},
hL_(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nd(a4),a3=new A.e_()
a3.cU(a5)
w=A.a([],x.dT)
v=a2.b
u=A.B(v,x.P)
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
j=i.h(0,k)}h=a2.Gj(m)
g=a2.arZ(m)
f=a2.aNF(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.wO)k="father"
else k=k===D.oB?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.wO)k="father"
else k=k===D.oB?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.b0(l,new C.h8T())
d=B.a.i(m.b)
a0=A.B(new A.Y(s,new C.h8U(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.T(a0)
a1=new A.iD(a0,0,3,i.k("iD<1>"))
a1.ne(a0,0,3,i.c)
B.d.u(k,a1)
B.d.e0(k,a3)
a1=C.aT9(a2,m)
i=new A.iD(l,0,4,p)
i.ne(l,0,4,r)
w.push(new C.bbp(d,a1,i.dq(0),k))
if(w.length>=5)break}return w},
hC_(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.X(d,"My ")?1:0},
hK5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nd(a4),a3=new A.e_()
a3.cU(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.Gj(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.Gj(l)
j=A.T(k)
i=new A.iD(k,0,4,j.k("iD<1>"))
i.ne(k,0,4,j.c)
h=i.dq(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aS(h,new C.h_t(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iD(i,0,k,m)
j.ne(i,0,k,n)
f=j.dq(0)
j=B.a.i(l.b)
k=C.aT9(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aT9(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aT9(a2,f[g]))
w.push(new C.aan(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
ls:function ls(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bT8:function bT8(d){this.b=d
this.c=$},
bT9:function bT9(){},
bTa:function bTa(d){this.a=d},
fxw:function fxw(d){this.a=d},
h8s:function h8s(d){this.a=d},
h8t:function h8t(){},
h8u:function h8u(d){this.a=d},
h8v:function h8v(d,e){this.a=d
this.b=e},
h8w:function h8w(d,e,f){this.a=d
this.b=e
this.c=f},
h8r:function h8r(d,e){this.a=d
this.b=e},
h8x:function h8x(d){this.a=d},
h8y:function h8y(d){this.a=d},
h8z:function h8z(d,e,f){this.a=d
this.b=e
this.c=f},
h8q:function h8q(d,e){this.a=d
this.b=e},
fL3:function fL3(d,e){this.a=d
this.b=e},
auS:function auS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fZR:function fZR(){},
fZS:function fZS(){},
zC:function zC(d,e,f){this.a=d
this.b=e
this.c=f},
fGS:function fGS(d){this.a=d},
fNU:function fNU(d){this.a=d},
alj:function alj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bNW:function bNW(){},
MY:function MY(d,e,f){this.a=d
this.b=e
this.c=f},
bbp:function bbp(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h8T:function h8T(){},
h8U:function h8U(d){this.a=d},
aan:function aan(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h_t:function h_t(d){this.a=d},
biI:function biI(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
agl:function agl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
akC:function akC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
akD:function akD(d,e,f,g,h){var _=this
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
bM4:function bM4(d){this.a=d},
bM_:function bM_(){},
bM5:function bM5(){},
bLY:function bLY(){},
bLZ:function bLZ(){},
bM3:function bM3(d){this.a=d},
bM0:function bM0(d,e){this.a=d
this.b=e},
bM2:function bM2(d,e){this.a=d
this.b=e},
bM1:function bM1(d,e){this.a=d
this.b=e},
bLX:function bLX(d){this.a=d},
bdT:function bdT(d,e){this.b=d
this.a=e},
QV:function QV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCd:function aCd(d,e,f){this.b=d
this.c=e
this.a=f},
aAG:function aAG(d,e,f){this.a=d
this.b=e
this.c=f},
avv:function avv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
avw:function avw(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.cO$=e
_.ba$=f
_.c=_.a=null},
cs_:function cs_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cs0:function cs0(d){this.a=d},
crZ:function crZ(d){this.a=d},
cs1:function cs1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cs2:function cs2(){},
cs3:function cs3(d,e){this.a=d
this.b=e},
cs4:function cs4(){},
cs5:function cs5(d){this.a=d},
crW:function crW(d){this.a=d},
crX:function crX(d,e){this.a=d
this.b=e},
crY:function crY(d,e,f){this.a=d
this.b=e
this.c=f},
crR:function crR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
crT:function crT(d,e){this.a=d
this.b=e},
crU:function crU(d,e){this.a=d
this.b=e},
crS:function crS(d,e){this.a=d
this.b=e},
crQ:function crQ(){},
crV:function crV(){},
bdm:function bdm(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cS6:function cS6(){},
azr:function azr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azs:function azs(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cGZ:function cGZ(d){this.a=d},
cGY:function cGY(d){this.a=d},
cH6:function cH6(d,e){this.a=d
this.b=e},
cH7:function cH7(d,e){this.a=d
this.b=e},
cH8:function cH8(d){this.a=d},
cH5:function cH5(d){this.a=d},
cH9:function cH9(d){this.a=d},
cHa:function cHa(d,e){this.a=d
this.b=e},
cHb:function cHb(){},
cHc:function cHc(d){this.a=d},
cH0:function cH0(d){this.a=d},
cH1:function cH1(d,e){this.a=d
this.b=e},
cH_:function cH_(d,e){this.a=d
this.b=e},
cH2:function cH2(){},
cH3:function cH3(){},
cH4:function cH4(d,e){this.a=d
this.b=e},
aAq:function aAq(){},
aHJ:function aHJ(){},
hgJ(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bsn((w-450*u)/2,(v-900*u)/2,u)},
ag9:function ag9(){},
f9S:function f9S(d){this.a=d},
aLz:function aLz(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fk6:function fk6(d){this.a=d},
amB:function amB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amC:function amC(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qg$=f
_.Mf$=g
_.anC$=h
_.bw$=i
_.a9$=j
_.c=_.a=null},
bTV:function bTV(d){this.a=d},
bTU:function bTU(){},
bTS:function bTS(d){this.a=d},
bTQ:function bTQ(){},
bTR:function bTR(d){this.a=d},
bTN:function bTN(d,e){this.a=d
this.b=e},
bTO:function bTO(){},
bTP:function bTP(d){this.a=d},
bTT:function bTT(d,e){this.a=d
this.b=e},
bTM:function bTM(d){this.a=d},
bu6:function bu6(d,e){this.b=d
this.a=e},
f9T:function f9T(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f9U:function f9U(d,e,f){this.a=d
this.b=e
this.c=f},
f9V:function f9V(d,e,f){this.a=d
this.b=e
this.c=f},
f9W:function f9W(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9X:function f9X(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f9Y:function f9Y(){},
amz:function amz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amA:function amA(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qg$=f
_.Mf$=g
_.anC$=h
_.bw$=i
_.a9$=j
_.c=_.a=null},
bTy:function bTy(){},
bTJ:function bTJ(d,e){this.a=d
this.b=e},
bTK:function bTK(d){this.a=d},
bTL:function bTL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTF:function bTF(){},
bTE:function bTE(d,e){this.a=d
this.b=e},
bTG:function bTG(d,e){this.a=d
this.b=e},
bTH:function bTH(){},
bTI:function bTI(d){this.a=d},
bTA:function bTA(d){this.a=d},
bTB:function bTB(d){this.a=d},
bTC:function bTC(d){this.a=d},
bTz:function bTz(d,e){this.a=d
this.b=e},
bTD:function bTD(d){this.a=d},
bkx:function bkx(d,e){this.b=d
this.a=e},
dtE:function dtE(){},
a2p:function a2p(d,e){this.a=d
this.b=e},
amv:function amv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amw:function amw(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qg$=e
_.Mf$=f
_.anC$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
bTk:function bTk(d){this.a=d},
bTj:function bTj(){},
bTi:function bTi(){},
bTc:function bTc(){},
bTd:function bTd(){},
bTh:function bTh(d,e,f){this.a=d
this.b=e
this.c=f},
bTg:function bTg(d){this.a=d},
bTe:function bTe(d,e){this.a=d
this.b=e},
bTf:function bTf(d){this.a=d},
bjY:function bjY(d,e){this.b=d
this.a=e},
aCg:function aCg(){},
bhv:function bhv(){},
aCi:function aCi(){},
bhw:function bhw(){},
aCj:function aCj(){},
bhx:function bhx(){},
uw(d,e,f,g,h){var w,v,u=null,t=A.l(18),s=A.a([],x.V)
s.push(new A.ab(0,B.G,f.j(0.4),B.i4,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.X(g,h,u,u,u,20),B.ae],w))
v.push(A.d(d,u,u,u,u,u,u,A.m(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.ay(u,A.o(u,A.A(v,B.l,u,B.e,B.N,0,u,u),B.f,u,u,new A.n(f,u,u,t,s,u,B.n),u,u,u,u,B.OU,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hpT(d,e,f,g,h,i,j){return new C.amx(i,h,d,j,e,f,g,null)},
a6U:function a6U(d,e){this.c=d
this.a=e},
bk4:function bk4(d){this.a=d},
tE:function tE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bTb:function bTb(d){this.a=d},
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
bmS:function bmS(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e3Y:function e3Y(d,e){this.a=d
this.b=e},
e3Z:function e3Z(d){this.a=d},
e4_:function e4_(d,e){this.a=d
this.b=e},
e3W:function e3W(d){this.a=d},
e3X:function e3X(d){this.a=d},
e3V:function e3V(d){this.a=d},
e3T:function e3T(d){this.a=d},
e3U:function e3U(d){this.a=d},
e3S:function e3S(d,e){this.a=d
this.b=e},
e40:function e40(d){this.a=d},
e41:function e41(d,e){this.a=d
this.b=e},
e42:function e42(d,e){this.a=d
this.b=e},
e43:function e43(d,e){this.a=d
this.b=e},
e46:function e46(d,e){this.a=d
this.b=e},
e47:function e47(d,e){this.a=d
this.b=e},
e48:function e48(d,e){this.a=d
this.b=e},
e49:function e49(d,e){this.a=d
this.b=e},
e4a:function e4a(d,e){this.a=d
this.b=e},
e4b:function e4b(d,e,f){this.a=d
this.b=e
this.c=f},
e4c:function e4c(d,e){this.a=d
this.b=e},
e4d:function e4d(d,e){this.a=d
this.b=e},
e44:function e44(d){this.a=d},
e45:function e45(d){this.a=d},
a0i:function a0i(d,e){this.a=d
this.b=e},
amx:function amx(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
amy:function amy(d){var _=this
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
bTw:function bTw(d){this.a=d},
bTx:function bTx(d){this.a=d},
bTv:function bTv(d){this.a=d},
bTm:function bTm(d){this.a=d},
bTn:function bTn(d){this.a=d},
bTl:function bTl(d){this.a=d},
bTs:function bTs(d,e,f){this.a=d
this.b=e
this.c=f},
bTt:function bTt(d){this.a=d},
bTp:function bTp(d,e){this.a=d
this.b=e},
bTq:function bTq(d,e,f){this.a=d
this.b=e
this.c=f},
bTu:function bTu(){},
bTr:function bTr(d,e){this.a=d
this.b=e},
bTo:function bTo(d){this.a=d},
Uf:function Uf(d,e){this.c=d
this.a=e},
amu:function amu(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bSX:function bSX(d){this.a=d},
bSY:function bSY(d){this.a=d},
bT7:function bT7(){},
bT6:function bT6(d,e,f){this.a=d
this.b=e
this.c=f},
bT1:function bT1(d,e){this.a=d
this.b=e},
bT0:function bT0(d,e){this.a=d
this.b=e},
bT2:function bT2(d){this.a=d},
bT3:function bT3(d,e){this.a=d
this.b=e},
bT4:function bT4(d,e){this.a=d
this.b=e},
bT_:function bT_(d,e){this.a=d
this.b=e},
bT5:function bT5(d,e,f){this.a=d
this.b=e
this.c=f},
bSZ:function bSZ(d,e){this.a=d
this.b=e},
imE(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ajm(a6),a5=a4.length
if(a5===0)return""
w=A.S(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.V(Date.now(),0,!1))
s=new C.fKu(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("Y<1>"),q=q.k("cM<1,q>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.zh)m.push(l===D.wO?"male":"female")
l=u.w
k=A.af(a3,!0,!1,!1,!1).cF(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.af(a3,!0,!1,!1,!1).cF(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.j_(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.j_(h,a2,a2)-A.j_(j,a2,a2))+" years")
l=B.a.i(u.z)
if(l.length!==0)m.push("work: "+l)
f=s.$1(u)
if(f!=null)m.push("married to "+w.h(0,f).b)
e=u.d
if(e!=null&&w.an(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.B(new A.cM(new A.Y(a4,new C.fKs(u,f),p),new C.fKt(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aN(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aN(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aB(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
imF(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ajm(a0),d=e.length
if(d===0)return""
w=x.N
v=A.S(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fKz(v,e)
q=new C.fKx(v)
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
if(d!=null&&v.an(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.an(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("b8<2>")
d=A.d_(new A.b8(p,d),d.k("M.E"))
n=A.B(d,A.a4(d).k("cj.E"))
B.d.ff(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eL(l,new C.fKy(p,m));k.C();t=f){j=l.gP(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.an(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aN(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i7R(d,e,f,g){var w,v,u=C.imG(d,e)
if(u<=0||f.length<=u)return new A.afO(!1,D.E_,f)
if(g.q(0,e.a))return new A.afO(!1,D.E_,f)
w=A.T(f).c
v=A.cT(f,0,A.dA(u,"count",x.S),w).dq(0)
return new A.afO(!0,A.cT(f,u,null,w).dq(0),v)},
i7S(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ajm(d3),d2=d1.length
if(d2===0)return D.hFT
w=x.N
v=A.S(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c_(0,t.a,new C.dj9(t))}s=new C.djq(v)
d2=x.dy
r=A.S(w,d2)
q=new C.dji(r)
for(p=new A.dp(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.djh(r)
l=A.S(w,x.do)
for(p=new A.dp(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c4(l.c_(0,k,new C.dja()),o)}h=new C.djg(s)
g=new C.djf(l,r)
p=v.$ti.k("b8<2>")
o=p.k("Y<M.E>")
f=A.B(new A.Y(new A.b8(v,p),new C.djb(h),o),o.k("M.E"))
e=f.length===0?new A.b8(v,p).gH(0):B.d.gH(f)
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
a9=new C.djo(new C.djk(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.S(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dp(v,v.r,v.e),j=a2.gamB(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.ew([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.I(0,i))break}if(h.$1(b0)&&a2.an(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nw(J.dH(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.S(w,x.dO)
b5=A.a([],x.M)
b6=A.S(w,d2)
b7=new C.dj8(a2,new C.djp(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.I)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.dp(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cr<1>")
d2=A.B(new A.cr(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.GJ(o,new A.r(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.L1(c5.a,new A.r(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cr<1>")
d2=A.B(new A.cr(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bO(0,new C.djc(c6,b4))
for(d2=new A.cd(a4,a4.$ti.k("cd<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aT(c7.b);j.C();){i=j.gP(j)
if(b6.an(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.r(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eL(j,new C.djd(c8));i.C();)o.push(j.gP(0).b)
if(o.length===0)continue
B.d.b0(o,new C.dje())
c6.push(new C.aLu(new A.r(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bhB(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hFi(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(d)
return w==null?null:w.b[1]},
hz9(d,e,f,g,h,i,j,k,l,m,n){return new C.a0v(k,f,j,e,l,n,m,d,g,h,i,null)},
aEh(d,e,f,g,h,i,j){return new C.bln(i,d,e,f,j,h,g,null)},
arF:function arF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFQ:function aFQ(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e5D:function e5D(d){this.a=d},
e5C:function e5C(d){this.a=d},
e5F:function e5F(d,e){this.a=d
this.b=e},
e5G:function e5G(d,e){this.a=d
this.b=e},
e5H:function e5H(d){this.a=d},
e5B:function e5B(d,e){this.a=d
this.b=e},
e5E:function e5E(d){this.a=d},
e5J:function e5J(d){this.a=d},
e5I:function e5I(d,e){this.a=d
this.b=e},
arz:function arz(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFN:function aFN(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e53:function e53(d){this.a=d},
e51:function e51(d){this.a=d},
e52:function e52(d){this.a=d},
e54:function e54(d,e){this.a=d
this.b=e},
e4Z:function e4Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4q:function e4q(d){this.a=d},
e4r:function e4r(d,e){this.a=d
this.b=e},
e4I:function e4I(d){this.a=d},
e4G:function e4G(d){this.a=d},
e4H:function e4H(d,e){this.a=d
this.b=e},
e4J:function e4J(d){this.a=d},
e4K:function e4K(d,e){this.a=d
this.b=e},
e4Y:function e4Y(d,e){this.a=d
this.b=e},
e4F:function e4F(d){this.a=d},
e4E:function e4E(d){this.a=d},
e4D:function e4D(d,e){this.a=d
this.b=e},
e4V:function e4V(){},
e4W:function e4W(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e4U:function e4U(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e4O:function e4O(d){this.a=d},
e4P:function e4P(d,e,f){this.a=d
this.b=e
this.c=f},
e4N:function e4N(d,e){this.a=d
this.b=e},
e4Q:function e4Q(d,e){this.a=d
this.b=e},
e4L:function e4L(d,e){this.a=d
this.b=e},
e4M:function e4M(){},
e4R:function e4R(d,e){this.a=d
this.b=e},
e4S:function e4S(d){this.a=d},
e4T:function e4T(d,e){this.a=d
this.b=e},
e4X:function e4X(d,e){this.a=d
this.b=e},
e4e:function e4e(d,e){this.a=d
this.b=e},
e4f:function e4f(d,e){this.a=d
this.b=e},
e56:function e56(d,e,f){this.a=d
this.b=e
this.c=f},
e50:function e50(d,e,f){this.a=d
this.b=e
this.c=f},
e5_:function e5_(d){this.a=d},
e4g:function e4g(d){this.a=d},
e4h:function e4h(d){this.a=d},
e4i:function e4i(){},
e4j:function e4j(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4n:function e4n(d,e){this.a=d
this.b=e},
e4m:function e4m(d,e){this.a=d
this.b=e},
e4l:function e4l(d){this.a=d},
e4o:function e4o(d,e){this.a=d
this.b=e},
e4k:function e4k(d){this.a=d},
e55:function e55(d){this.a=d},
e4A:function e4A(){},
e4B:function e4B(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4z:function e4z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4v:function e4v(d,e,f){this.a=d
this.b=e
this.c=f},
e4u:function e4u(d,e,f){this.a=d
this.b=e
this.c=f},
e4s:function e4s(d,e){this.a=d
this.b=e},
e4w:function e4w(d){this.a=d},
e4x:function e4x(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4t:function e4t(d,e){this.a=d
this.b=e},
e4y:function e4y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4C:function e4C(d,e){this.a=d
this.b=e},
e5d:function e5d(){},
e5e:function e5e(d,e){this.a=d
this.b=e},
e5f:function e5f(d){this.a=d},
e5g:function e5g(d,e){this.a=d
this.b=e},
e59:function e59(d){this.a=d},
e57:function e57(d,e){this.a=d
this.b=e},
e5a:function e5a(d,e){this.a=d
this.b=e},
e5b:function e5b(d,e){this.a=d
this.b=e},
e5c:function e5c(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e5h:function e5h(d){this.a=d},
e58:function e58(d){this.a=d},
e4p:function e4p(d){this.a=d},
bhz:function bhz(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dj6:function dj6(d){this.a=d},
dj5:function dj5(d,e){this.a=d
this.b=e},
dj7:function dj7(d){this.a=d},
dj4:function dj4(d,e){this.a=d
this.b=e},
fKu:function fKu(d,e){this.a=d
this.b=e},
fKv:function fKv(d){this.a=d},
fKw:function fKw(){},
fKs:function fKs(d,e){this.a=d
this.b=e},
fKt:function fKt(){},
fKz:function fKz(d,e){this.a=d
this.b=e},
fKA:function fKA(d){this.a=d},
fKB:function fKB(){},
fKx:function fKx(d){this.a=d},
fKy:function fKy(d,e){this.a=d
this.b=e},
L1:function L1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GJ:function GJ(d,e){this.a=d
this.b=e},
bhB:function bhB(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dj9:function dj9(d){this.a=d},
djq:function djq(d){this.a=d},
dji:function dji(d){this.a=d},
djj:function djj(){},
djh:function djh(d){this.a=d},
dja:function dja(){},
djg:function djg(d){this.a=d},
djf:function djf(d,e){this.a=d
this.b=e},
djb:function djb(d){this.a=d},
djk:function djk(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
djl:function djl(d){this.a=d},
djm:function djm(d){this.a=d},
djn:function djn(){},
djo:function djo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
djp:function djp(){},
dj8:function dj8(d,e,f,g,h,i,j,k,l,m){var _=this
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
djc:function djc(d,e){this.a=d
this.b=e},
djd:function djd(d){this.a=d},
dje:function dje(){},
aLu:function aLu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bhC:function bhC(d,e){this.b=d
this.a=e},
djr:function djr(){},
djs:function djs(d){this.a=d},
djt:function djt(d){this.a=d},
dju:function dju(){},
blo:function blo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgD:function bgD(d,e){this.b=d
this.a=e},
bzu:function bzu(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fpI:function fpI(d){this.a=d},
boK:function boK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
f_D:function f_D(d){this.a=d},
f_C:function f_C(d,e){this.a=d
this.b=e},
a0v:function a0v(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aEf:function aEf(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dzn:function dzn(d,e){this.a=d
this.b=e},
dzm:function dzm(d){this.a=d},
dzk:function dzk(d){this.a=d},
dzl:function dzl(d){this.a=d},
dzw:function dzw(d){this.a=d},
dzx:function dzx(d){this.a=d},
dzv:function dzv(d,e){this.a=d
this.b=e},
dzy:function dzy(){},
dzB:function dzB(d){this.a=d},
dzu:function dzu(d,e){this.a=d
this.b=e},
dzA:function dzA(){},
dzC:function dzC(d){this.a=d},
dzt:function dzt(d,e){this.a=d
this.b=e},
dzD:function dzD(d){this.a=d},
dzs:function dzs(d){this.a=d},
dzE:function dzE(d){this.a=d},
dzr:function dzr(d){this.a=d},
dzF:function dzF(d){this.a=d},
dzq:function dzq(d){this.a=d},
dzG:function dzG(d){this.a=d},
dzp:function dzp(d){this.a=d},
dzH:function dzH(d){this.a=d},
dzo:function dzo(d,e){this.a=d
this.b=e},
dzz:function dzz(d){this.a=d},
aeH:function aeH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bln:function bln(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aeG:function aeG(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
blm:function blm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dzI:function dzI(d){this.a=d},
dzJ:function dzJ(d,e){this.a=d
this.b=e},
aEg:function aEg(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aKw:function aKw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeI:function aeI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dzS:function dzS(d){this.a=d},
GF:function GF(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
htW(d){var w=d.V,v=x.N
return w.jq(w,new C.cgs(),v,v)},
i_d(d){var w=d.bI
if(w>=0)return w
return 5},
htY(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.htW(d).h(0,v)
if(w==null||w.length===0)return null
return A.bj(w)},
htX(d,e){var w=C.htY(d,e)
if(w!=null&&w.cb(new A.V(Date.now(),0,!1)))return!0
return!1},
i_e(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.htW(d),w,w)
u=C.htY(d,e)
t=u!=null&&u.cb(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bR(A.dx(30,0,0,0,0,0).a).aa().ag())
d.V=v},
b22(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b22=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.ly(t,B.JV),$async$b22)
case 3:if(l){u=!0
w=1
break}u=A.lf(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.JV,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b22,v)},
cgs:function cgs(){},
i_b(){var w,v=$.ov(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hh(u)},
Jv(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Jv=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$Jv)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$Jv)
case 8:r=e
if(r==null){u=A.S(x.N,x.z)
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
p=A.aa(m)
$.am.$1("[family tree sync codes] load: "+A.w(p))
w=7
break
case 4:w=2
break
case 7:u=A.S(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Jv,v)},
a8C(d){return C.i_c(d)},
i_c(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8C=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$a8C)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hQ("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cR,null),$async$a8C)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.aa(p)
$.am.$1("[family tree sync codes] save: "+A.w(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a8C,v)},
cgr(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cgr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Jv(),$async$cgr)
case 3:t=m.ia(f),t=t.gae(t),s=x.f
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
return A.i($async$cgr,v)},
Ou(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Ou=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cgr(d),$async$Ou)
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
o=A.dI(A.a1(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a8C(s),$async$Ou)
case 9:case 8:u=t
w=1
break
case 5:n=C.i_b()
w=10
return A.b(C.Jv(),$async$Ou)
case 10:s=f
J.aJ(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a8C(s),$async$Ou)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ou,v)},
b21(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b21=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Jv(),$async$b21)
case 3:t=f
for(s=J.dr(t),r=s.gdQ(t),r=r.dq(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8C(t),$async$b21)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b21,v)},
a8D(d,e,f){var w=0,v=A.j(x.H),u
var $async$a8D=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.arE(d,e),$async$a8D)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Ou(d),$async$a8D)
case 7:w=4
break
case 5:w=8
return A.b(C.b21(d),$async$a8D)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a8D,v)},
ary(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$ary=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.arE(f,e),$async$ary)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c9(),$async$ary)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Jv(),$async$ary)
case 7:q=o.t(k,t)
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
return A.i($async$ary,v)},
b20(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b20=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c9(),$async$b20)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Jv(),$async$b20)
case 4:t=q.t(g,r)
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
return A.i($async$b20,v)},
i_f(){var w,v=$.ov(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hh(u)},
arB(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$arB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$arB)
case 3:if(!g){u=null
w=1
break}t=C.i_f()
w=4
return A.b(A.WB(),$async$arB)
case 4:s=g
r=B.dW.aK(B.W.av(d.f2(),null))
r=B.cL.gco().aK(r)
q=e?999:2
J.aJ(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a8E(s),$async$arB)
case 5:p=e?999:2
u=new A.a1F("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arB,v)},
arA(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$arA=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.WB(),$async$arA)
case 3:p=a0
o=J.a8(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a8(n)
l=A.aI(m.h(n,"usesRemaining"))
k=l==null?null:B.h.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b20(J.k(l==null?"":l),j),$async$arA)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cb.cE(0,B.cD.aK(t))
s=C.htZ(r)}catch(f){q=A.aa(f)
$.am.$1("[family tree qr stash] decode: "+A.w(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dI(A.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a8E(p),$async$arA)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arA,v)},
htZ(d){var w,v,u,t,s=null
try{w=B.W.aP(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.i_h(A.a1(w,x.N,x.z))
return u}catch(t){v=A.aa(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
hcH(d){var w=0,v=A.j(x.m),u,t,s
var $async$hcH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.X(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.arA(t[1])
w=1
break}u=null
w=1
break}u=C.htZ(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hcH,v)},
i_h(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.de(v,x.f)
u=A.cF(u,new C.cgu(),u.$ti.k("M.E"),x.k)
t=A.a4(u).k("Y<M.E>")
s=A.B(new A.Y(u,new C.cgv(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bj(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.S(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.ia(p),t=t.gae(t),o=x.B;t.C();){n=t.gP(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.de(l,u)
n=A.cF(n,new C.cgw(),n.$ti.k("M.E"),o)
k=A.a4(n).k("Y<M.E>")
j=A.B(new A.Y(n,new C.cgx(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.arC(h,w,s,r,q)},
arE(d,e){var w=0,v=A.j(x.y),u,t
var $async$arE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Om(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bl(d),$async$arE)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arE,v)},
cgD(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cgD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bl(d),$async$cgD)
case 3:t=s.b9(f,new C.cgE(),x.cs)
t=A.B(t,t.$ti.k("ak.E"))
B.d.b0(t,new C.cgF())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cgD,v)},
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
return A.b(C.arE(e,d),$async$WC)
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
return A.b(C.Bl(e),$async$WC)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.cgB(g))
r=A.B(t,t.$ti.k("M.E"))}t=J.a8(r)
if(t.gau(r)){u=null
w=1
break}t=t.dO(r,new C.cgC(e),x.k)
r=A.B(t,t.$ti.k("ak.E"))
q=A.S(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.LS(e,o),$async$WC)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.arC(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WC,v)},
b25(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b25=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WC(d,e,f,g),$async$b25)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Ho(A.KY(q.f2(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b25,v)},
b24(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b24=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WC(d,e,f,g),$async$b24)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.arB(r,f),$async$b24)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aIw(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b24,v)},
WD(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$WD=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.hcH(a0),$async$WD)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.X(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.ary(g.a,d,e,f,s,r),$async$WD)
case 6:if(!a2){if(r)throw A.W(A.bb("This backup expired or the sender's tree is no longer available."))
throw A.W(A.bb("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bEW(e,j),$async$WD)
case 12:case 11:w=13
return A.b(C.aj4(e,j,s),$async$WD)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.Bw(e,i,h),$async$WD)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bst(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WD,v)},
arC:function arC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cgz:function cgz(){},
cgA:function cgA(){},
cgy:function cgy(){},
cgu:function cgu(){},
cgv:function cgv(){},
cgw:function cgw(){},
cgx:function cgx(){},
cgE:function cgE(){},
cgF:function cgF(){},
cgB:function cgB(d){this.a=d},
cgC:function cgC(d){this.a=d},
hlV(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f3(null,x.H)
return A.hE(d,new C.arD(w,e,g,i,f,h,null),!0,null,x.H)},
dj3(d,e,f,g,h,i,j,k){return new C.bhy(i,e,k,j,g,f,h,d,null)},
arD:function arD(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFP:function aFP(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e5q:function e5q(d){this.a=d},
e5r:function e5r(d,e,f){this.a=d
this.b=e
this.c=f},
e5v:function e5v(d,e){this.a=d
this.b=e},
e5w:function e5w(d){this.a=d},
e5n:function e5n(d){this.a=d},
e5o:function e5o(d,e){this.a=d
this.b=e},
e5p:function e5p(d,e){this.a=d
this.b=e},
e5u:function e5u(d){this.a=d},
e5t:function e5t(d,e){this.a=d
this.b=e},
e5s:function e5s(){},
e5y:function e5y(d){this.a=d},
e5z:function e5z(d,e){this.a=d
this.b=e},
e5x:function e5x(d,e){this.a=d
this.b=e},
djv:function djv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bhA:function bhA(d,e,f){this.d=d
this.e=e
this.a=f},
adX:function adX(d,e,f){this.c=d
this.d=e
this.a=f},
bhy:function bhy(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bhD:function bhD(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0P:function a0P(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFO:function aFO(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e5i:function e5i(d,e){this.a=d
this.b=e},
e5j:function e5j(d){this.a=d},
e5k:function e5k(d){this.a=d},
e5l:function e5l(d){this.a=d},
e5m:function e5m(d){this.a=d},
a0Q:function a0Q(d){this.a=d},
bmT:function bmT(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e5A:function e5A(d,e){this.a=d
this.b=e},
b0z(d,e){return new C.b0y(d,e,null)},
b0y:function b0y(d,e,f){this.c=d
this.d=e
this.a=f},
ip5(d){if(!(d!=null&&B.a.X(d,"ngmy:thumb:")))return null
return B.a.aY(d,11)},
iwK(d){return A.bU(B.L,null,new C.h1_(new C.ui(A.O(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hvZ(d,e){return new C.auG(e,d,null)},
aT3(d,e,f,g,h,i,j){var w=C.ip5(i)
if(w!=null)return A.bv(e,new A.a5(j,f,new C.a7F(w,!0,null),null),B.aq)
return A.aSn(e,B.bY,f,g,h,i,j)},
lR:function lR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7F:function a7F(d,e,f){this.c=d
this.d=e
this.a=f},
bmx:function bmx(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.ba$=e
_.c=_.a=null},
dRu:function dRu(d){this.a=d},
dRv:function dRv(){},
dRw:function dRw(d,e){this.a=d
this.b=e},
bmw:function bmw(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
h1_:function h1_(d){this.a=d},
h0Z:function h0Z(d,e){this.a=d
this.b=e},
h0Y:function h0Y(d,e){this.a=d
this.b=e},
h0X:function h0X(d,e){this.a=d
this.b=e},
auG:function auG(d,e,f){this.c=d
this.d=e
this.a=f},
cqh:function cqh(d,e){this.a=d
this.b=e},
aNW:function aNW(){},
iwv(d){var w=null
return A.cg(w,w,!0,w,new C.h0n(),d,w,!0,!0,x.e2)},
ixJ(d,e,f,g,h){var w=null
return A.cg(w,w,!0,w,new C.h8a(h,g,f,e),d,w,!0,!0,x.N)},
iwx(d,e){var w=null
return A.cg(w,w,!0,w,new C.h0r(e),d,w,!0,!0,x.dY)},
iww(d){var w=null
return A.cg(w,w,!0,w,new C.h0q(),d,w,!0,!0,x.c5)},
aW0:function aW0(d,e){this.a=d
this.b=e},
aW_:function aW_(d){this.a=d},
aU1:function aU1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h0n:function h0n(){},
h8a:function h8a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h0r:function h0r(d){this.a=d},
h0q:function h0q(){},
a_t:function a_t(d,e){this.c=d
this.a=e},
aAZ:function aAZ(){var _=this
_.d=$
_.c=_.a=_.e=null},
daB:function daB(d){this.a=d},
daC:function daC(d){this.a=d},
daA:function daA(d,e){this.a=d
this.b=e},
daD:function daD(d){this.a=d},
daE:function daE(d){this.a=d},
a_s:function a_s(d){this.a=d},
aAY:function aAY(){this.d=$
this.c=this.a=null},
dax:function dax(d){this.a=d},
day:function day(d){this.a=d},
daz:function daz(d){this.a=d},
ZZ:function ZZ(d){this.a=d},
azE:function azE(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cIF:function cIF(){},
cIL:function cIL(d){this.a=d},
cIM:function cIM(d){this.a=d},
cIN:function cIN(d){this.a=d},
cIK:function cIK(){},
cIO:function cIO(d){this.a=d},
cIP:function cIP(d){this.a=d},
cIJ:function cIJ(){},
cIQ:function cIQ(d,e){this.a=d
this.b=e},
cII:function cII(d,e){this.a=d
this.b=e},
cIG:function cIG(d,e){this.a=d
this.b=e},
cIR:function cIR(d){this.a=d},
cIH:function cIH(){},
cIS:function cIS(d){this.a=d},
a2C:function a2C(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bzm:function bzm(){this.d=$
this.c=this.a=null},
fpd:function fpd(d,e){this.a=d
this.b=e},
fpe:function fpe(d){this.a=d},
fpf:function fpf(d,e){this.a=d
this.b=e},
acZ:function acZ(d,e){this.a=d
this.b=e},
Gt:function Gt(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bzk:function bzk(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
fpb:function fpb(d,e){this.a=d
this.b=e},
azx:function azx(d,e){this.c=d
this.a=e},
bzl:function bzl(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
fpc:function fpc(d){this.a=d},
bzj:function bzj(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aQ3:function aQ3(){},
aQ4:function aQ4(){},
bH1(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.h.bg(u),s=B.o.D(B.h.S((u-t)*100),0,99),r=d<0?"-":"",q=A.ot(B.o.v(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fZE(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cR(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cR(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cR(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b1(B.o.v(s),2,"0")
n.push(A.cR(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Zm(A.cR(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aSF(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aSF=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.i6().la(85,1280,B.eR),$async$aSF)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fs(),$async$aSF)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hvY()
w=9
return A.b(C.cqg(q,r),$async$aSF)
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
o=A.aa(l)
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
return A.i($async$aSF,v)},
aT1(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aT1=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.X(g,"ngmy:ws-thumb:")
if(i){u=C.cqd(g)
w=1
break}if(!B.a.X(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cD.aK(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.Hp(p,!0,null,o).dc(0,B.h2),$async$aT1)
case 9:n=a1
w=10
return A.b(n.le(),$async$aT1)
case 10:m=a1
w=11
return A.b(m.b.hc(B.he),$async$aT1)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eM(B.dD.gaT(l))
k="data:image/png;base64,"+B.cL.gco().aK(i)
if(J.ad(k)<=r){u=k
w=1
break}o=B.h.S(o*0.72)
w=7
break
case 8:t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.aa(f)
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
return A.i($async$aT1,v)},
fZE:function fZE(){},
ui:function ui(d){this.a=d},
auF:function auF(d,e,f){this.c=d
this.d=e
this.a=f},
aHk:function aHk(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eXN:function eXN(d,e){this.a=d
this.b=e},
eXE:function eXE(d){this.a=d},
eXF:function eXF(d){this.a=d},
eXL:function eXL(d,e){this.a=d
this.b=e},
eXK:function eXK(d,e){this.a=d
this.b=e},
eXH:function eXH(d,e){this.a=d
this.b=e},
eXG:function eXG(d,e){this.a=d
this.b=e},
eXI:function eXI(d){this.a=d},
eXJ:function eXJ(d,e){this.a=d
this.b=e},
eXM:function eXM(d,e){this.a=d
this.b=e},
eXz:function eXz(d,e){this.a=d
this.b=e},
eXD:function eXD(d){this.a=d},
eXC:function eXC(d,e){this.a=d
this.b=e},
eXB:function eXB(d){this.a=d},
eXO:function eXO(d,e){this.a=d
this.b=e},
eXP:function eXP(d,e){this.a=d
this.b=e},
eXA:function eXA(d,e){this.a=d
this.b=e},
hJz(d,e,f){var w="thumbnailPath",v=e.aj()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
fZF(d,e,f){var w=0,v=A.j(x.N),u
var $async$fZF=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.W.av(C.hJz(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fZF,v)},
bH3(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bH3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fZF(!0,d,e),$async$bH3)
case 4:w=3
return A.b(r.auD(g,d,e.a),$async$bH3)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dW.aK(B.W.av(C.hJz(d,e,null),null))
u="NGMY_WS:"+B.kN.gco().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bH3,v)},
hAy(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hlt(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d2(s,"NGMYWSSYNC2|"))return!0
if(J.d2(s,"NGMY_WS:"))return!0
if(J.eC(s,t))return!0
if(J.d2(s,"{"))try{w=B.W.aP(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
iuw(d){var w,v,u,t=C.hAy(d)
if(t==null)return null
if(C.hlt(t))return t
w=B.a.cj(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aY(t,w))
if(C.hlt(v))return v}u=B.a.cj(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aY(t,u))
if(C.hlt(v))return v}return null},
hls(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d2(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d2(q,"NGMY_WS:")){v=B.cb.cE(0,B.cD.aK(J.mX(q,8)))
w=t.a(B.W.aP(0,v,r))}else w=t.a(B.W.aP(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hfl(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bH2(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bH2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.X(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.auC(t[1]),$async$bH2)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hls(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hls(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bH2,v)},
hlr(d){var w=B.o.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lC(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bGv(){var w=0,v=A.j(x.o),u,t
var $async$bGv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.HA(),$async$bGv)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hls(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGv,v)},
hKJ(d,e,f,g){return A.bU(B.L,null,new C.h7Y(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h7Y:function h7Y(d,e,f){this.a=d
this.b=e
this.c=f},
af2:function af2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eXR:function eXR(d,e){this.a=d
this.b=e},
eXS:function eXS(d,e){this.a=d
this.b=e},
eXT:function eXT(d,e){this.a=d
this.b=e},
eXU:function eXU(d,e){this.a=d
this.b=e},
eXQ:function eXQ(d){this.a=d},
auz:function auz(d,e,f){this.c=d
this.d=e
this.a=f},
bof:function bof(){var _=this
_.c=_.a=_.e=_.d=null},
eXu:function eXu(d,e){this.a=d
this.b=e},
eXv:function eXv(d){this.a=d},
eXw:function eXw(d){this.a=d},
auE:function auE(d){this.a=d},
aHj:function aHj(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eXy:function eXy(d){this.a=d},
eXx:function eXx(d){this.a=d},
i2y(d,e,f,g,h){return new C.P8(h,g,d,e,f,null)},
aMg:function aMg(d,e){this.a=d
this.b=e},
P8:function P8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHl:function aHl(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eYg:function eYg(){},
eYc:function eYc(d,e){this.a=d
this.b=e},
eYd:function eYd(d){this.a=d},
eXY:function eXY(d){this.a=d},
eXW:function eXW(d){this.a=d},
eXX:function eXX(d){this.a=d},
eY6:function eY6(d,e){this.a=d
this.b=e},
eY3:function eY3(d,e){this.a=d
this.b=e},
eY4:function eY4(d,e){this.a=d
this.b=e},
eY5:function eY5(d,e,f){this.a=d
this.b=e
this.c=f},
eY1:function eY1(d,e,f){this.a=d
this.b=e
this.c=f},
eY_:function eY_(d){this.a=d},
eY0:function eY0(d){this.a=d},
eY2:function eY2(d){this.a=d},
eYj:function eYj(d){this.a=d},
eYi:function eYi(d){this.a=d},
eYk:function eYk(d){this.a=d},
eYh:function eYh(d){this.a=d},
eXV:function eXV(d){this.a=d},
eXZ:function eXZ(d,e){this.a=d
this.b=e},
eYf:function eYf(d,e){this.a=d
this.b=e},
eYe:function eYe(d,e){this.a=d
this.b=e},
eY9:function eY9(d){this.a=d},
eYa:function eYa(d){this.a=d},
eYb:function eYb(d,e){this.a=d
this.b=e},
eY8:function eY8(d,e){this.a=d
this.b=e},
eY7:function eY7(d,e,f){this.a=d
this.b=e
this.c=f},
bB7:function bB7(){},
B8(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ahB(d,e,f){return C.iiB(d,e,f)},
iiB(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ahB=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aG("String",e,f),$async$ahB)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.aa(o)
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
return A.i($async$ahB,v)},
ahA(d,e){return C.iiA(d,e)},
iiA(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ahA=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ahA)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.aa(q)
$.am.$1("[worksheets] remove failed for "+e+": "+A.w(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$ahA,v)},
ihq(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.TV(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bDS(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bDS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
if(q.length===0){u=null
w=1
break}t=B.a.X(q,"ngmy:thumb:")
if(!t)t=B.a.X(q,"ngmy:ws-thumb:")
else t=!0
if(t){u=q
w=1
break}w=B.a.X(q,"data:image")?3:4
break
case 3:w=5
return A.b(C.b5k(q),$async$bDS)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aT1(q,!1),$async$bDS)
case 6:r=f
if(r!=null&&B.a.X(r,"data:image")&&r.length<=12e4){u=r
w=1
break}u=null
w=1
break
case 4:u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDS,v)},
hQW(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aI(d.h(0,"price")),o=p==null?null:p
if(o==null)o=0
w=A.aI(d.h(0,"quantity"))
if(w==null)w=null
v=A.aI(d.h(0,"unitPrice"))
if(v==null)v=null
if(w!=null&&v!=null){p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
u=J.k(u==null?"":u)
t=w<=0?1:w
s=d.h(0,r)
if(B.a.i(J.k(s==null?q:s)).length===0)s=q
else{s=d.h(0,r)
s=J.k(s==null?q:s)}return new C.rt(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rt(p,J.k(u==null?"":u),1,o,q)},
hfl(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.de(s,x.f)
w=A.cF(w,new C.cHX(),w.$ti.k("M.E"),x.Q)
v=A.a4(w).k("Y<M.E>")
r=A.B(new A.Y(w,new C.cHY(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bj(J.k(t==null?"":t))
return new C.lC(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
imA(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wO
case"female":case"f":return D.oB
default:return D.zh}},
hFS(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hpU(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.imA(v==null?j:J.k(v))
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
m=A.aI(d.h(0,"birthOrder"))
m=m==null?j:B.h.M(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aI(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.h.M(k)
return new C.i5(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
imC(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Ph
case"viewer":return D.kZ
default:return D.uV}},
imD(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Hq(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aRI(d,e){return B.a.i(e.toLowerCase())===C.Hq(d,e)&&d.y!==D.kZ},
ux(d,e){var w,v=d.y
if(v===D.kZ)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Hq(d,e))return!0
if(v===D.Ph)return!0
v=d.e
return new A.N(v,A.hlz(),A.T(v).k("N<1,q>")).q(0,w)},
ilX(d){return J.dH(d,new C.fJm()).gJ(0)},
h8J(d){var w=0,v=A.j(x.y),u,t
var $async$h8J=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bl(d),$async$h8J)
case 3:u=t.ro(f,new C.h8K(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h8J,v)},
bEW(d,e){var w=0,v=A.j(x.H),u,t
var $async$bEW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bl(d),$async$bEW)
case 3:t=g
if(J.ro(t,new C.fGR(e))){w=1
break}if(C.ilX(t)>=2)throw A.W(A.bb("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bEW,v)},
amE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.de(h,x.f)
w=A.cF(w,new C.bTY(),w.$ti.k("M.E"),x.P)
v=A.a4(w).k("Y<M.E>")
g=A.B(new A.Y(w,new C.bTZ(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b9(u,new C.bU_(),x.N)
t=A.B(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.z(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bj(J.k(q==null?"":q))
if(q==null)q=new A.V(Date.now(),0,!1)
p=A.aI(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.h.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.imC(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aT(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cu)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gP(f)
if(l.b(i))m.push(A.a1(i,k,j))}return new C.kZ(w,v,s,!r,t,g,q,p,o,n,m)},
hG6(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aB(v,0,8)},
DI(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SO(d),$async$DI)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$DI)
case 4:t=f
w=5
return A.b(t.a7G(0),$async$DI)
case 5:w=6
return A.b(C.fx6(t,l),$async$DI)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gY(B.a.i(l.toLowerCase()))
q=t.a
p=J.a8(q)
o=A.aW(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hB9(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.p9(l,n),$async$DI)
case 11:u=n
w=1
break
case 10:case 8:m=A.aW(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gY(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hB9(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.p9(l,n),$async$DI)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DI,v)},
fx6(d,e){return C.ieM(d,e)},
ieM(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fx6=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a8(a3)
a5=A.aW(a4.h(a3,"ngmy_worksheets_index_v3_"+C.B8(a9)))
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
break}m=A.aW(a4.h(a3,"ngmy_worksheet_item_v3_"+C.B8(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.W.aP(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hfl(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aW(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.B8(a9)+"_"+n))
i=C.ihq(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.X(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b5k(h),$async$fx6)
case 17:g=b1
if(g!=null){i=i.TV(g)
p=!0}case 16:J.c4(q,i)
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
case 8:J.SX(q,new C.fx7())
if(p&&J.ad(q)!==0)C.p9(a9,q)
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
return A.i($async$fx6,v)},
bFp(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bFp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SO(d),$async$bFp)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DI(r),$async$bFp)
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
return A.i($async$bFp,v)},
hB9(d){var w,v,u,t
try{w=B.W.aP(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.de(w,x.f)
v=A.cF(v,new C.fsF(),v.$ti.k("M.E"),x.fA)
u=A.a4(v).k("Y<M.E>")
v=A.B(new A.Y(v,new C.fsG(),u),u.k("M.E"))
B.d.b0(v,new C.fsH())
return v}catch(t){v=A.a([],x.D)
return v}},
p9(d,e){return C.iwk(d,e)},
iwk(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$p9=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.SO(b2),$async$p9)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$p9)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.B8(a8)
p=A.aW(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b9(x.j.a(B.W.aP(0,p,null)),new C.h0b(),a2).fF(0)
a2=J.b9(b3,new C.h0c(),a2).c0(0,new C.h0d())
n=A.d_(a2,a2.$ti.k("M.E"))
a2=o,a2=A.dZ(a2,a2.r,A.a4(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eC(n,m)?17:18
break
case 17:a5=C.B8(a8)
l=A.aW(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a9Y(l),$async$p9)
case 19:t=21
a5=C.B8(a8)
k=A.aW(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.W.aP(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.a9Y(a5==null?null:J.k(a5)),$async$p9)
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
return A.b(C.ahA(r,"ngmy_worksheet_item_v3_"+C.B8(a8)+"_"+m),$async$p9)
case 29:w=30
return A.b(C.ahA(r,"ngmy_worksheet_thumb_v3_"+C.B8(a8)+"_"+m),$async$p9)
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
return A.b(C.bDS(h),$async$p9)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ahB(r,"ngmy_worksheet_thumb_v3_"+C.B8(a8)+"_"+a4,f),$async$p9)
case 40:g=i.TV(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ahA(r,"ngmy_worksheet_thumb_v3_"+C.B8(a8)+"_"+a4),$async$p9)
case 41:g=i.TV(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ahA(r,"ngmy_worksheet_thumb_v3_"+C.B8(a8)+"_"+a4),$async$p9)
case 42:case 34:a4=i.a
w=43
return A.b(C.ahB(r,"ngmy_worksheet_item_v3_"+C.B8(a8)+"_"+a4,B.W.av(g.aj(),null)),$async$p9)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.c4(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ahB(r,"ngmy_worksheets_index_v3_"+C.B8(a8),B.W.av(q,null)),$async$p9)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eO(b3,new C.h0e(q))
a4=a3.$ti.k("cM<1,ac<q,@>>")
a7=A.B(new A.cM(a3,new C.h0f(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ahB(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gY(B.a.i(a8.toLowerCase()))),B.W.av(a0,null)),$async$p9)
case 45:w=46
return A.b(J.hQ0(r),$async$p9)
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
a1=A.aa(b1)
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
return A.i($async$p9,v)},
Mk(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Mk=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DI(d),$async$Mk)
case 3:t=g
s=J.cE(t)
r=s.bk(t,new C.h8I(e))
if(r===-1)s.ca(t,0,e)
else s.n(t,r,e)
u=C.p9(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Mk,v)},
bFb(d,e){var w=0,v=A.j(x.H),u
var $async$bFb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DI(d),$async$bFb)
case 2:u=g
J.mW(u,new C.fJQ(e))
w=3
return A.b(C.p9(d,u),$async$bFb)
case 3:return A.h(null,v)}})
return A.i($async$bFb,v)},
Hs(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Hs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Hs)
case 3:l=f
k=A.a([],x._)
j=B.a.gY(B.a.i(d.toLowerCase()))
i=A.aW(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.W.aP(0,i,null)
if(x.j.b(t)){j=J.de(t,x.f)
j=A.cF(j,new C.fN3(),j.$ti.k("M.E"),x.k)
s=A.a4(j).k("Y<M.E>")
r=A.B(new A.Y(j,new C.fN4(),s),s.k("M.E"))
B.d.b0(r,new C.fN5())
k=r}}catch(h){}w=4
return A.b(C.ftq(d),$async$Hs)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.if8(k,p,d)
j=A.T(o)
s=j.k("N<1,ac<q,@>>")
s=A.B(new A.N(o,new C.fN6(),s),s.k("ak.E"))
n=B.W.av(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.RV(d,o),$async$Hs)
case 7:case 6:j=j.k("Y<1>")
m=A.B(new A.Y(o,new C.fN7(d),j),j.k("M.E"))
if(m.length!==0)C.aRu(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Hs,v)},
h_Y(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$h_Y=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RV(d,e),$async$h_Y)
case 3:t=J.dH(e,new C.h_Z(d))
s=A.B(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aRu(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h_Y,v)},
a4i(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a4i=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a4i)
case 2:n=g
m=B.a.gY(B.a.i(d.toLowerCase()))
l=A.aW(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.W.aP(0,l,null)
if(x.j.b(u)){m=J.de(u,x.f)
m=A.cF(m,new C.h8D(),m.$ti.k("M.E"),x.k)
t=A.a4(m).k("Y<M.E>")
s=A.B(new A.Y(m,new C.h8E(),t),t.k("M.E"))
o=s}}catch(k){}q=J.oz(o,new C.h8F(e))
if(B.a.i(e.x).length===0&&C.ux(e,d)){m=B.a.i(d.toLowerCase())
p=e.aGJ(e.y===D.kZ?D.kZ:D.uV,m)}else p=e
if(q===-1)J.mV(o,0,p)
else J.aJ(o,q,p)
w=3
return A.b(C.RV(d,o),$async$a4i)
case 3:w=C.ux(p,d)?4:5
break
case 4:w=6
return A.b(C.aRt(C.Hq(p,d),p),$async$a4i)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a4i,v)},
aRG(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aRG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Hs(d),$async$aRG)
case 2:u=g
t=J.cE(u)
s=A.nw(t.eO(u,new C.fJx(e)))
t.bq(u,new C.fJy(e))
w=3
return A.b(C.RV(d,u),$async$aRG)
case 3:w=s!=null&&C.aRI(s,d)?4:5
break
case 4:w=6
return A.b(C.fsJ(e),$async$aRG)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aRG,v)},
ajm(d){var w=d.f,v=A.T(w).k("Y<1>")
w=A.B(new A.Y(w,new C.h8O(),v),v.k("M.E"))
return w},
hiU(d,e){var w,v=d.f,u=A.nw(new A.Y(v,new C.fJ1(e),A.T(v).k("Y<1>")))
v=C.ajm(d)
w=A.T(v).k("Y<1>")
v=A.B(new A.Y(v,new C.fJ2(e,u),w),w.k("M.E"))
B.d.b0(v,new C.fJ3())
return v},
imG(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hKN(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bk(C.hiU(d,u),new C.h8b(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
io9(d,e){var w
if(e==null||e.length===0)return 1
w=C.hiU(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fNV(),A.T(w).k("N<1,H>")).f1(0,B.yd)+1},
iwd(d){var w,v=C.ajm(d)
if(v.length===0)return null
w=new A.Y(v,new C.h_S(),A.T(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
imB(d){return A.J(["id",d.a,"name",d.b,"gender",C.hFS(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
io4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.S(a0,x.P)
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
n=n!==D.zh?n:q.c
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
d=q.aGE(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cRc(a1,w,a3.d,a2.y,s,a0,v)},
Bl(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Bl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Bl)
case 3:q=f
p=B.a.gY(B.a.i(d.toLowerCase()))
o=A.aW(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.W.aP(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.de(t,x.f)
p=A.cF(p,new C.fN0(),p.$ti.k("M.E"),x.k)
s=A.a4(p).k("Y<M.E>")
p=A.B(new A.Y(p,new C.fN1(),s),s.k("M.E"))
B.d.b0(p,new C.fN2())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bl,v)},
aj4(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aj4=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.uV:D.kZ
a7=C.Hq(b2,b3)
w=2
return A.b(C.Bl(b1),$async$aj4)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.bk(a8,new C.h_N(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bEW(b1,b2),$async$aj4)
case 5:case 4:if(b0===-1){u=b2.aGJ(a6,a7)
a9.ca(a8,0,u)}else{t=a9.h(a8,b0)
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
i=i!==D.zh?i:l.c
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
s.n(0,m,l.aGE(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b8<2>")
s=A.B(new A.b8(s,k),k.k("M.E"))
k=a5?D.uV:D.kZ
u=t.cRe(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.RV(b1,a8),$async$aj4)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aRt(B.a.i(b3.toLowerCase()),u),$async$aj4)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aj4,v)},
hBz(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("N<1,ac<q,@>>"),k=A.B(new A.N(m,C.hJT(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hBA(d,e){var w=new A.V(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("N<1,ac<q,@>>")
u=A.B(new A.N(u,C.hJT(),t),t.k("ak.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
icG(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a8(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.amE(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hlz(),A.T(j).k("N<1,q>")).c0(0,new C.ftd())
t=A.B(j,j.$ti.k("M.E"))
if(u===v)s=D.uV
else s=B.d.q(t,u)?D.Ph:D.kZ
return w.aGJ(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.amE(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.de(q,h)
h=A.cF(h,new C.fte(),h.$ti.k("M.E"),x.P)
p=A.a4(h).k("Y<M.E>")
o=A.B(new A.Y(h,new C.ftf(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b9(n,new C.ftg(),x.N).c0(0,new C.fth())
t=A.B(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.uV
else s=B.d.q(t,u)?D.Ph:D.kZ
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.z(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bj(J.k(l==null?"":l))
if(l==null)l=new A.V(Date.now(),0,!1)
j=A.aI(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.h.M(j)
if(j==null)j=0
return new C.kZ(h,r,p,!m,t,o,l,j,v,s,B.cg)},
ftq(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$ftq=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.ftu()
h=x.N
g=x.z
w=7
return A.b(A.ic(A.a([A.lF("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.lF("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.lF("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$ftq)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.S(h,g)
h=A.B(p,g)
l=h
J.h1(l,o)
J.h1(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aJ(m,j,k)}l=m
h=A.a4(l).k("b8<2>")
h=A.cF(new A.b8(l,h),new C.ftr(a0),h.k("M.E"),x.k)
l=A.a4(h).k("Y<M.E>")
l=A.B(new A.Y(h,new C.fts(),l),l.k("M.E"))
B.d.b0(l,new C.ftt())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.aa(a1)
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
return A.i($async$ftq,v)},
if8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a8(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dO(e,new C.fxP(),v).c0(0,new C.fxQ())
t=A.d_(u,u.$ti.k("M.E"))
s=A.S(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Hq(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kZ){m=q.e
m=!new A.N(m,A.hlz(),A.T(m).k("N<1,q>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gP(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.io4(l,v)
o=C.Hq(k,w)
p=v.d
s.n(0,u,o===w?k.bga(p,D.uV):k.bga(p,v.y))}j=s.$ti.k("b8<2>")
j=A.B(new A.b8(s,j),j.k("M.E"))
B.d.b0(j,new C.fxR())
return j},
RV(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$RV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$RV)
case 2:u=g
t=B.a.gY(B.a.i(d.toLowerCase()))
s=J.b9(e,new C.fAP(),x.a)
s=A.B(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aG("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.W.av(s,null)),$async$RV)
case 3:return A.h(null,v)}})
return A.i($async$RV,v)},
aRt(d,e){return C.iko(d,e)},
iko(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aRt=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.m7("family_trees",A.a([C.hBz(e,d)],p),null,B.cR),$async$aRt)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.m7("family_trees",A.a([C.hBA(e,d)],p),null,B.cR),$async$aRt)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.aa(n)
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
return A.i($async$aRt,v)},
aRu(d,e){return C.ikp(d,e)},
ikp(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aRu=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("N<1,ac<q,@>>")
m=n.k("ak.E")
l=A.B(new A.N(e,new C.fG5(d),n),m)
r=l
w=7
return A.b(A.m7("family_trees",r,null,B.cR),$async$aRu)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.N(e,new C.fG6(d),n),m)
p=k
w=8
return A.b(A.m7("family_trees",p,null,B.cR),$async$aRu)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.aa(i)
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
return A.i($async$aRu,v)},
fsJ(d){return C.ibV(d)},
ibV(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fsJ=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Sl("family_trees",A.J(["id",d],x.N,x.z),null,B.cR),$async$fsJ)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.aa(p)
$.am.$1("[family_trees] delete error: "+A.w(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fsJ,v)},
rt:function rt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lC:function lC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cI_:function cI_(){},
cHZ:function cHZ(){},
cHX:function cHX(){},
cHY:function cHY(){},
Iy:function Iy(d,e){this.a=d
this.b=e},
i5:function i5(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
amD:function amD(d,e){this.a=d
this.b=e},
fJm:function fJm(){},
h8K:function h8K(d){this.a=d},
fGR:function fGR(d){this.a=d},
kZ:function kZ(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bU1:function bU1(){},
bU0:function bU0(){},
bTY:function bTY(){},
bTZ:function bTZ(){},
bU_:function bU_(){},
fx7:function fx7(){},
fsF:function fsF(){},
fsG:function fsG(){},
fsH:function fsH(){},
h0b:function h0b(){},
h0c:function h0c(){},
h0d:function h0d(){},
h0e:function h0e(d){this.a=d},
h0f:function h0f(){},
h8I:function h8I(d){this.a=d},
fJQ:function fJQ(d){this.a=d},
fN3:function fN3(){},
fN4:function fN4(){},
fN5:function fN5(){},
fN6:function fN6(){},
fN7:function fN7(d){this.a=d},
h_Z:function h_Z(d){this.a=d},
h8D:function h8D(){},
h8E:function h8E(){},
h8F:function h8F(d){this.a=d},
fJx:function fJx(d){this.a=d},
fJy:function fJy(d){this.a=d},
h8O:function h8O(){},
fJ1:function fJ1(d){this.a=d},
fJ2:function fJ2(d,e){this.a=d
this.b=e},
fJ3:function fJ3(){},
h8b:function h8b(d){this.a=d},
fNV:function fNV(){},
h_S:function h_S(){},
fN0:function fN0(){},
fN1:function fN1(){},
fN2:function fN2(){},
h_N:function h_N(d){this.a=d},
ftd:function ftd(){},
fte:function fte(){},
ftf:function ftf(){},
ftg:function ftg(){},
fth:function fth(){},
ftu:function ftu(){},
ftv:function ftv(d){this.a=d},
ftr:function ftr(d){this.a=d},
fts:function fts(){},
ftt:function ftt(){},
fxP:function fxP(){},
fxQ:function fxQ(){},
fxR:function fxR(){},
fAP:function fAP(){},
fG5:function fG5(d){this.a=d},
fG6:function fG6(d){this.a=d},
cI0:function cI0(d,e){this.a=d
this.b=e},
cI1:function cI1(d,e){this.a=d
this.b=e},
aJs:function aJs(d,e,f){this.a=d
this.b=e
this.c=f},
bbD:function bbD(){this.b=this.a=0},
bbC:function bbC(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bzn:function bzn(){},
xp(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gce()+"/"+w.gcv()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.b1(B.o.v(w.gnC()),2,"0")+":"+B.a.b1(B.o.v(w.gGY()),2,"0")},
ilt(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
J.br(a4.save())
a4.translate(a6.a,a6.b-b0)
w=A.bX(new A.r(0,b0+a7*0.005),a7*0.06,a7*0.45)
v=B.w.j(0.22)
$.R()
u=A.L()
u.r=v.gp(0)
a5.c1(w,u)
for(w=a7*0.05,v=-a7,u=v*0.24,t=a7*0.1,s=u+a7*0.2,r=a7*0.04,q=a7*0.065,p=v*0.05,o=a7*0.14,n=p+w,m=a7*0.025,l=0;l<2;++l){k=B.hf[l]*a7*0.075
j=k-w
j=A.bw(new A.a3(j,u,j+t,s),new A.aP(r,r))
i=new A.ar(B.S,B.Q,B.V,B.X,B.T)
i.r=B.dh.gp(0)
a5.aq(j,i)
k-=q
k=A.bw(new A.a3(k,p,k+o,n),new A.aP(m,m))
i=new A.ar(B.S,B.Q,B.V,B.X,B.T)
i.r=B.c.gp(0)
a5.aq(k,i)}w=v*0.16
u=v*0.52
t=a7*0.32
s=w+t
q=a7*0.09
h=A.bw(new A.a3(w,u,s,u+t),new A.aP(q,q))
q=A.L()
q.r=b2.gp(0)
a5.aq(h,q)
q=v*0.27
t=a7*0.02
t=A.bw(new A.a3(w,q,s,q+a7*0.045),new A.aP(t,t))
q=B.c.j(0.35)
s=A.L()
s.r=q.gp(0)
a5.aq(t,s)
s=v*0.47
g=new A.r(v*0.15,s)
f=new A.r(a7*0.15,s)
s=v*0.06
t=a7*0.07
a5.ah(g,g.a5(0,new A.r(s,a7*0.17)),A.ahz(B.rZ,t))
s=g.a5(0,new A.r(s,a7*0.18))
q=A.L()
q.r=B.rZ.gp(0)
a5.O(s,r,q)
e=-2.5+b3*0.5
d=f.a5(0,new A.r(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,A.ahz(B.rZ,t))
w=A.L()
w.r=B.rZ.gp(0)
a5.O(d,r,w)
v*=0.7
a0=new A.r(0,v)
a1=a7*0.22
if(b1===1){w=a0.a5(0,new A.r(0,-a1*0.12))
u=A.L()
u.r=B.m8.gp(0)
a5.O(w,a1*1.18,u)}w=A.L()
w.r=B.rZ.gp(0)
a5.O(a0,a1,w)
if(b1===0){w=A.bW(a0,a1)
u=A.L()
u.r=B.m8.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.bW(a0,a1)
u=A.L()
u.r=B.m8.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a1*0.3,u=a1*0.2,l=0;l<2;++l){a2=B.hf[l]
t=new A.ar(B.S,B.Q,B.V,B.X,B.T)
t.r=B.m8.gp(0)
a5.O(new A.r(0+a2*a1*1.05,w),u,t)}}a3=B.h.F(a8*0.8,3)>2.85
for(w=v+a1*0.42,u=a1*0.12,t=a1*0.25,s=a8*0.7,r=a1*0.13,v+=a1*0.05,q=-a1*0.15,p=v+0,o=a1*0.15,l=0;l<2;++l){n=B.hf[l]*a1
m=0+n*0.4
if(a3){k=new A.ar(B.S,B.Q,B.V,B.X,B.T)
k.b=B.ab
k.c=1.6
k.r=B.bq.gp(0)
k.d=B.bG
a5.ah(new A.r(m+q,p),new A.r(m+o,p),k)}else{k=new A.ar(B.S,B.Q,B.V,B.X,B.T)
k.r=B.c.gp(0)
a5.O(new A.r(m,v),t,k)
k=Math.sin(s)
j=new A.ar(B.S,B.Q,B.V,B.X,B.T)
j.r=B.w.gp(0)
a5.O(new A.r(m+k*a1*0.06,p),r,j)}m=new A.ar(B.S,B.Q,B.V,B.X,B.T)
m.r=B.hO.j(0.5).gp(0)
a5.O(new A.r(0+n*0.62,w),u,m)}a5.cQ(A.bX(a0.a5(0,new A.r(0,a1*0.5)).aJ(0,new A.r(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,A.ahz(B.bq,1.8))
a4.restore()},
i2v(){var w,v=$.ov(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.hh(u)},
auA(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$auA=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$auA)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$auA)
case 8:r=e
if(r==null){u=A.S(x.N,x.z)
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
p=A.aa(m)
$.am.$1("[worksheet qr stash] load: "+A.w(p))
w=7
break
case 4:w=2
break
case 7:u=A.S(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$auA,v)},
auB(d){return C.i2w(d)},
i2w(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$auB=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$auB)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hQ("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cR,null),$async$auB)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.aa(p)
$.am.$1("[worksheet qr stash] save: "+A.w(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$auB,v)},
auD(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$auD=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$auD)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.i2v()
w=4
return A.b(C.auA(),$async$auD)
case 4:r=h
q=B.a.i(e)
p=B.dW.aK(t)
J.aJ(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cL.gco().aK(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.auB(r),$async$auD)
case 5:u=new A.a1F("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auD,v)},
auC(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$auC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c9(),$async$auC)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.auA(),$async$auC)
case 4:q=f
p=J.a8(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a8(o)
m=A.aI(n.h(o,"usesRemaining"))
l=m==null?null:B.h.M(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.cb.cE(0,B.cD.aK(t))}catch(h){r=A.aa(h)
$.am.$1("[worksheet qr stash] decode: "+A.w(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dI(A.a1(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.auB(q),$async$auC)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auC,v)},
hvY(){var w=new A.V(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cT.aw(999999)},
i2x(d){var w,v,u,t,s,r,q
try{w=A.Bj(d)
if(w==null)return d
v=w
if(J.Mq(v)>960||J.Mp(v)>960){s=v
r=J.Mq(v)>=J.Mp(v)?960:null
v=A.Sf(s,J.Mp(v)>J.Mq(v)?960:null,B.Is,r)}s=v
u=A.IV(82).zx(s,B.r_)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cc(u))
return s}catch(q){t=A.aa(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
cqg(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cqg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.i2x(e)
$.cqc.n(0,s,t)
u=C.bH5(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cqg,v)},
b5k(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b5k=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d2(l,"data:image")){u=null
w=1
break}t=4
r=J.eC(l,",")?B.d.gal(J.lI(l,",")):l
q=B.cD.aK(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hvY()
w=7
return A.b(C.cqg(p,q),$async$b5k)
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
n=A.aa(k)
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
return A.i($async$b5k,v)},
cqd(d){var w=0,v=A.j(x.T),u,t,s
var $async$cqd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.X(s,"data:image")){u=s
w=1
break}w=3
return A.b(A.cqf(s),$async$cqd)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cL.gco().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cqd,v)},
a9Y(d){var w=0,v=A.j(x.H),u,t
var $async$a9Y=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=A.hJA(d)
if(t==null){w=1
break}$.cqc.W(0,t)
w=3
return A.b(C.bH4(t),$async$a9Y)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9Y,v)},
bH5(d,e){return C.iuz(d,e)},
iuz(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bH5=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aQi
w=7
return A.b(n==null?$.aQi=A.hhK():n,$async$bH5)
case 7:r=g
q=new Uint8Array(A.cc(e))
p=J.mc(r,"thumbs","readwrite")
B.iG.mj(J.mb(p,"thumbs"),q,l)
w=8
return A.b(J.oy(p),$async$bH5)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.aa(k)
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
return A.i($async$bH5,v)},
bH4(d){return C.iux(d)},
iux(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bH4=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aQi
w=7
return A.b(o==null?$.aQi=A.hhK():o,$async$bH4)
case 7:r=f
q=J.mc(r,"thumbs","readwrite")
B.iG.Gw(J.mb(q,"thumbs"),m)
w=8
return A.b(J.oy(q),$async$bH4)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.aa(l)
$.am.$1("[worksheet-thumb idb delete] "+A.w(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bH4,v)}},D,M,T,U,V,F,W,N,O,P,X,Q,Y,R,Z,K,G,A_,A0,L
J=c[1]
A=c[0]
B=c[2]
H=c[96]
S=c[23]
E=c[50]
I=c[37]
C=a.updateHolder(c[4],C)
D=c[100]
M=c[81]
T=c[101]
U=c[76]
V=c[84]
F=c[45]
W=c[66]
N=c[58]
O=c[67]
P=c[80]
X=c[102]
Q=c[103]
Y=c[38]
R=c[90]
Z=c[24]
K=c[55]
G=c[78]
A_=c[85]
A0=c[57]
L=c[104]
C.aqd.prototype={}
C.b0A.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bku(),f=h.x!=null&&h.zS(i).length===0
if(h.x!=null)w=f?B.b3:B.bC
else w=h.gUW()?B.bC:B.e5
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.l(22)
t=A.K(D.bru,B.r,1)
s=x.p
r=A.o(i,A.x(A.a([A.o(i,D.fjL,B.f,i,i,new A.n(B.b3.j(0.12),i,i,A.l(999),i,i,B.n),i,i,i,i,B.hn,i,i,i),B.U,D.fPU,B.aw,A.d(C.xp(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fLu,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,D.b94,i,i,i,i,B.OQ,i,i,i)
q=A.l(16)
p=A.K(B.bm,B.r,1)
o=A.K(B.b3.j(0.28),B.r,1)
n=A.hk0(h.d)
o=A.o(B.A,C.b0z(A.fQg(h.e,n),30),B.f,i,i,new A.n(B.mb,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fGq,B.K,i,i)
m=A.l(14)
l=A.K(B.bm,B.r,1)
q=A.o(i,A.x(A.a([o,B.P,n,B.bF,D.fQc,B.af,A.o(i,A.x(A.a([D.h5s,B.bF,A.d(A.Bn(h.c),i,i,i,i,i,i,D.fB1,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fh,i,i,1/0)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.aS,i,p,q,i,i,B.n),i,i,i,i,G.an9,i,i,i)
p=A.l(16)
m=A.K(B.bm,B.r,1)
l=j.aTS("Original due",C.xp(h.r,!1))
n=j.aTS("Current due",C.xp(h.f,!1))
o=w.j(0.1)
k=A.l(12)
p=A.a([q,B.U,A.o(i,A.x(A.a([l,B.P,n,B.U,A.o(i,A.d(h.gaNQ(),i,i,i,i,i,i,A.m(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.n(o,i,i,k,i,i,B.n),i,i,i,i,B.CB,i,i,1/0),B.U,j.clT(),B.P,j.c8r(g,f)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bl,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.l(14)
n=A.K(B.bm,B.r,1)
B.d.u(p,A.a([B.U,A.o(i,A.x(A.a([D.fRa,B.aw,A.d(q,i,i,i,i,i,i,D.fFD,i,i,i)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.aS,i,n,o,i,i,B.n),i,i,i,i,B.bl,i,i,1/0)],s))}if(h.gaIp()){q=A.l(14)
o=A.K(B.cA,B.r,1.6)
B.d.u(p,A.a([B.U,A.o(i,A.x(A.a([D.h6L,B.P,A.bv(A.l(12),A.ec(new A.a5(1/0,88,A.b3(i,i,i,new A.Xq(h.ax,B.a_,D.foz,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.c,i,o,q,i,i,B.n),i,i,i,i,B.CD,i,i,i)],s))}p.push(B.aB)
p.push(D.fZA)
return A.o(i,A.x(A.a([r,new A.D(B.a1j,A.x(p,B.al,i,B.e,B.i,0,B.p),i)],s),B.al,i,B.e,B.N,0,B.p),B.aq,i,i,new A.n(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aTS(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.acA,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fC4,w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
clT(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aaW(B.e5,u,"Not paid yet")
w=t.zS(null).length
v=w===0?B.b3:B.bC
return this.aaW(v,u,C.xp(t.x,!0))},
c8r(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aaW(B.b3,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aaW(B.b3,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.acA,u,u,u)
v=A.T(d).k("N<1,h8>")
v=A.B(new A.N(d,new C.c9o(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.c_(B.bI,v,B.br,u,6,6)],x.p),B.E,u,B.e,B.i,0,B.p)},
aaW(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.acA,w,w,w),1),new A.df(1,B.cl,A.d(f,w,w,w,w,w,w,A.m(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e2,w,w),w)],x.p),B.E,w,B.e,B.i,0,w,w)}}
C.bdR.prototype={
a4(d,e){new A.Xq(this.b,B.a_,e,!0,3.5,null).a4(d,e)},
aE(d){return d.b!==this.b}}
C.aqq.prototype={
T(){return new C.aFg(A.a([],x.bp))},
ge3(){return this.c}}
C.aFg.prototype={
Z(){this.a3()
this.Jx()},
Jx(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Jx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3w(t.a.c),$async$Jx)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dSm(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Jx,v)},
aVQ(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.m(v,v,u?B.bu:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.l(10)
u=(this.a.d.a?B.bu:B.bh).j(0.22)
w=A.l(10)
return A.bA(v,new A.b6(4,r,new A.ax(u,1,B.r,-1)),v,B.bl,v,v,v,v,!0,new A.b6(4,w,new A.ax((this.a.d.a?B.bu:B.bh).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.l(10),D.b6I),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aVP(d){return this.aVQ(d,null)},
Qr(d){return this.cpB(d)},
cpB(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qr=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Ir:B.eR
w=7
return A.b(new A.i6().CZ(72,900,900,n),$async$Qr)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fs(),$async$Qr)
case 8:p=f
n=B.cL.gco().aK(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.aa(l)
n=r.c
if(n!=null)n.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Qr,v)},
b47(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.l(10),n=A.K((q?B.bu:B.bh).j(0.18),B.r,1)
if(d)q=B.cX
else q=s.a.d.a?B.bu:B.bh
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.m(r,r,s.a.d.a?B.aS:B.av,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cX
else u=s.a.d.a?B.bu:B.bh
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.m(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.i,0,B.p),1)
v=A.fr(r,r,r,r,r,r,r,r,r,r,r,B.cX,r,r,r,r,r,r,r,r,r,r,r,r,r,B.ci)
q=A.a([q,B.ae,u,A.bP(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cB,s.a.d.a?B.bu:B.bh,r,r,r,18),r,r,r,g,r,r,r,r,r,B.ci))
return A.o(r,A.A(q,B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.n(p,r,n,o,r,r,B.n),r,r,r,B.jK,D.bEG,r,r,r)},
DR(d){return this.bEI(d)},
bEH(){return this.DR(null)},
bEI(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DR=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.at(new A.bc(a4,B.b7,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.h.fL(a4)
p=a5.c
a4=a4===q?B.o.v(B.h.M(p)):B.h.ad(p,2)}o=new A.at(new A.bc(a4,B.b7,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.at(new A.bc(a4,B.b7,B.aP),s)
if(a3){a4=new A.V(Date.now(),0,!1).bR(6048e8)
m=A.c0(a4.gck(),a4.gce(),a4.gcv(),0,0,0,0,0)}else{a4=a5.f
m=A.c0(a4.gck(),a4.gce(),a4.gcv(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bs(a4,!0,x.cT)
i=a3?null:A.hk0(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xn?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",a4,new C.dS5(),new C.dS6(a2,t,a5,r,new C.dS7(a2,t),o,n,j),B.eH,!0,x.y),$async$DR)
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
break}if(f.length===0||e<=0){t.c.K(x.q).f.U(D.fv8)
w=1
break}a0=a2.d
if(a0==null){t.c.K(x.q).f.U(D.ftN)
w=1
break}a1=A.fQg(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xn?"male":"female"
w=7
return A.b(A.ajl(a3,A.hsz(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DR)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xn?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c0(a3.gck(),a3.gce(),a3.gcv(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c0(a4.gck(),a4.gce(),a4.gcv(),0,0,0,0,0)))a5.cTA(a2.a)
w=8
return A.b(A.ajl(t.a.c,a5),$async$DR)
case 8:case 5:w=9
return A.b(t.Jx(),$async$DR)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DR,v)},
aWv(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cX.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.l(12)
u=A.l(12)
t=A.l(12)
if(g)s=B.cX
else s=(this.a.d.a?B.bu:B.bh).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b0z(d,18)
if(g)q=B.cX
else q=this.a.d.a?B.aS:B.av
return A.aE(!1,B.a3,!0,v,A.aM(!1,u,!0,A.o(p,A.A(A.a([r,B.bn,A.d(e,p,p,p,p,p,p,A.m(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.b9,B.i,0,p,p),B.f,p,p,new A.n(p,p,s,t,p,p,B.n),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.aj)},
Td(d){return this.cHy(d)},
cHy(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Td=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",s,new C.dSp(),new C.dSq(t,d),B.ha,!0,x.y),$async$Td)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.ajl(t.a.c,d),$async$Td)
case 7:w=8
return A.b(t.Jx(),$async$Td)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Td,v)},
Qq(d,e){return this.bPG(0,e)},
bPG(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lm(s,"Cancel","Delete",e.b+" \xb7 "+A.Bn(e.c)+" will be removed from this device.","Delete this debt?"),$async$Qq)
case 3:if(!g){w=1
break}w=4
return A.b(C.fJE(t.a.c,e.a),$async$Qq)
case 4:w=5
return A.b(t.Jx(),$async$Qq)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qq,v)},
agN(d){return this.cjj(d)},
cjj(d){var w=0,v=A.j(x.H),u=this,t
var $async$agN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.L,null,new C.dSj(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$agN)
case 2:return A.h(null,v)}})
return A.i($async$agN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.ezS
w=J.dH(m.d,new C.dSr())
v=A.B(w,w.$ti.k("M.E"))
w=J.dH(m.d,new C.dSs())
u=A.B(w,w.$ti.k("M.E"))
t=B.d.cC(v,0,new C.dSt())
w=A.l(18)
s=m.a.d.a
r=s?D.cF8:D.aEb
q=A.K(s?B.cX.j(0.35):B.cX.j(0.18),B.r,1)
s=A.o(l,D.c5F,B.f,l,l,new A.n(B.cX.j(m.a.d.a?0.28:0.14),l,l,A.l(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.as,A.E(A.d("Cashier",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.av,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aE(!1,B.a3,!0,A.l(12),A.aM(!1,A.l(12),!0,D.ezd,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dSu(m),l,l,l,l,l,l,l),B.f,B.cX,0,l,l,l,l,l,B.aj)],p),B.l,l,B.e,B.i,0,l,l)
o=A.E(m.cDA("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bn(t)
r=A.a([A.o(l,A.x(A.a([s,B.af,A.A(A.a([o,B.ae,A.E(m.baj(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.n(l,l,q,w,l,new A.a7(B.ay,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.an6,l,l,l),B.aB],p)
if(J.ct(m.d)){w=m.a.d.a
s=w?B.ef:B.c
q=A.l(18)
o=A.K((w?B.bu:B.bh).j(0.12),B.r,1)
n=A.o(l,D.c0f,B.f,l,l,new A.n(B.cX.j(0.12),l,l,A.l(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.av,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.o(l,A.x(A.a([n,B.af,w,B.aw,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bu:B.bh,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.i,0,B.p),B.f,l,l,new A.n(s,l,o,q,l,l,B.n),l,l,l,l,D.bHn,l,l,1/0))}else{w=m.gcoQ()
s=A.B(new A.N(v,w,A.T(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bJ3,A.d("Paid",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bu:B.bh,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.N(u,w,A.T(u).k("N<1,v>")))
B.d.u(s,q)}B.d.u(r,s)}return A.x(r,B.al,l,B.e,B.i,0,B.p)},
baj(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.l(14),r=A.K((v.a.d.a?B.bu:B.bh).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.m(u,u,v.a.d.a?B.bu:B.bh,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cX
else w=v.a.d.a?B.aS:B.av
return A.o(u,A.x(A.a([q,B.bF,A.d(f,u,1,B.a2,u,u,u,A.m(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.i,0,B.p),B.f,u,u,new A.n(t,u,r,s,u,u,B.n),u,u,u,u,B.ez,u,u,u)},
cDA(d,e){return this.baj(!1,d,e)},
coR(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zS(j).length,h=d.bjK()
if(d.x!=null){w=d.zS(j).length
v=w===0?B.cX:B.bC}else if(d.gUW())v=B.bC
else{if(h)w=B.cX
else w=k.a.d.a?B.bu:B.bh
v=w}if(d.x!=null){w=d.zS(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xp(u,!1)}else{u.toString
t="Paid "+C.xp(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xp(w,!1)+" \xb7 "+i+" missed":"Due "+C.xp(w,!1)}w=k.a.d.a?B.ef:B.c
u=A.l(18)
if(d.gUW()&&d.x==null)s=B.bC.j(0.35)
else s=(k.a.d.a?B.bu:B.bh).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ab(0,B.G,B.w.j(0.04),B.cM,12)],x.V)
q=A.l(18)
p=k.a.d.a?B.bs:B.mb
o=A.K(d.gUW()&&d.x==null?B.bC.j(0.45):B.cX.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hk0(d.d)
o=A.o(B.A,A.d0(C.b0z(A.fQg(d.e,m),24),n),B.f,j,j,new A.n(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.av
m=x.p
n=A.a([new A.df(1,B.cl,A.d(p,j,1,B.a2,j,j,j,A.m(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaIp())B.d.u(n,A.a([B.e7,A.X(B.PI,B.cX.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.i,0,j,j),B.cS,A.d(t,j,1,B.a2,j,j,j,A.m(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.i,0,B.p),1)
n=A.Bn(d.c)
l=k.a.d.a?B.aS:B.av
n=A.d(n,j,j,j,j,j,j,A.m(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.o(j,A.aE(!1,B.a3,!0,j,A.aM(!1,q,!0,new A.D(T.amV,A.A(A.a([o,B.bc,p,B.ae,A.x(A.a([n,B.bF,A.X(B.eI,(k.a.d.a?B.bu:B.bh).j(0.5),j,j,j,18)],m),B.dO,j,B.e,B.i,0,B.p)],m),B.l,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dSl(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.aj),B.f,j,j,new A.n(w,j,s,u,r,j,B.n),j,j,j,B.da,j,j,j,j)}}
C.uS.prototype={}
C.amr.prototype={
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
n.push(A.ay(a0,A.o(a0,A.X(B.cB,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.n(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
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
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.m(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aAj,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.Ht,A.d(k,a0,a0,a0,a0,a0,a0,A.m(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.du(B.dI,m,B.f,A.A(l,B.l,a0,B.e,B.N,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bDS,A.d(v,a0,1,B.a2,a0,a0,a0,A.m(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cK:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fv,A.x(a2,u,a0,B.e,B.N,0,B.p),a0),1))
n.push(D.fpn)
a2=A.a([A.A(n,B.l,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.D(B.wE,A.o(a0,a0,B.f,a0,a0,new A.n(a0,a0,a0,a0,a0,new A.a7(B.a5,B.a9,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lS,A.x(a2,B.l,a0,B.e,B.N,0,B.p),a0)
if(a1.z){a2=A.l(t?9:19)
e=A.o(a0,e,B.f,a0,a0,new A.n(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hB,a0,a0,a0,a0)}return A.o(a0,e,B.f,a0,a0,new A.n(a0,a0,q,s,p,new A.a7(B.ay,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bFb,a0,a0,a0,a0)}}
C.aXi.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.o(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.m(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.b6?B.b6:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.m(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bo:B.cK,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.m(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.i,0,q,q),B.cS,n],m)
if(p.z)o.push(new A.D(B.uM,n,q))
return new A.D(B.da,A.x(o,B.l,q,B.e,B.N,0,B.p),q)}}
C.Ue.prototype={
T(){return new C.bht()}}
C.bht.prototype={
gc3c(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aD(d,n,x.w).w,l=x.p,k=A.a([D.ezN,D.ezT],l)
for(w=0;w<8;++w){v=D.a5I[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.If:B.zI
q=t===s
r=A.X(r,q?B.ey:B.bV,n,n,n,17)
q=q?B.c:B.aa
r=A.a([r,B.bn,A.d(v.b,n,n,n,n,n,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.ae,new A.bz(1,B.bd,A.d(v.c,n,1,B.a2,n,n,n,B.B6,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ax(B.ey,2,B.r,-1)
s=new A.n(n,n,new A.bG(p,p,p,p),new A.be(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.ay(n,new A.D(B.eQ,A.x(A.a([new A.D(B.n2,new A.c8(B.aM,B.e,B.i,B.l,n,B.p,n,0,r,n),n),A.o(n,new A.dn(!0,new C.amr(v,q.d,q.e,new C.di1(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.di2(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bFy,A.bJ(D.hci,n,new C.di3(o,d),A.bp(B.b8,n,n,n,n,B.p3,n,n,new A.ba(A.l(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cN(new A.aY(0,1/0,0,m.a.b*0.9),A.cv(k,n,n,D.bJX,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nt.prototype={
aj(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bgm(d,e,f){return new C.nt(this.a,e,d,f)}}
C.Ix.prototype={
x7(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Ix(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aGx(d){var w=null
return this.x7(w,w,w,w,w,d,w,w,w,w,w,w)},
cPb(d){var w=null
return this.x7(w,w,w,w,d,w,w,w,w,w,w,w)},
bgk(d,e,f){var w=null
return this.x7(d,w,w,w,w,w,w,w,e,w,f,w)},
cPQ(d){var w=null
return this.x7(w,w,w,w,w,w,d,w,w,w,w,w)},
cPZ(d){var w=null
return this.x7(w,w,w,w,w,w,w,w,w,d,w,w)},
cP9(d){var w=null
return this.x7(w,w,w,d,w,w,w,w,w,w,w,w)},
cQ0(d){var w=null
return this.x7(w,w,w,w,w,w,w,w,w,w,w,d)},
cP6(d){var w=null
return this.x7(w,w,d,w,w,w,w,w,w,w,w,w)},
cP1(d){var w=null
return this.x7(w,d,w,w,w,w,w,w,w,w,w,w)},
Go(d){var w=null
return this.x7(w,w,w,w,w,w,w,d,w,w,w,w)},
cQ8(d,e,f,g,h,i,j,k,l,m,n){return this.x7(d,e,f,g,null,h,i,j,k,l,m,n)},
aj(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cMG(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bSJ(d),k=A.aI(d.h(0,"emblem")),j=k==null?o:B.h.M(k),i=A.aI(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Ef.gew(D.Ef))
s=i==null?o:B.h.D(i,18,36)
r=l.$2("position",D.a7q)
q=l.$2("frame",D.a6K)
l=l.$2("texture",D.a6G)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cQ8(p,u,t,q,r,A.ri(d.h(0,"ribbon"))?A.H2(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_R.prototype={
T(){return new C.aCe(A.a([],x.I),D.Pg)},
ge3(){return this.c}}
C.aCe.prototype={
Z(){var w,v=this
v.a3()
v.f=A.Ag(0,1)
w=$.aw()
v.z=new A.at(B.ax,w)
v.Q=new A.at(B.ax,w)
v.lj()
w=v.a
C.bFl(w.c,w.d).bG(new C.diI(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.c()
u.t()
u=v.z
u===$&&A.c()
w=$.aw()
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
return A.b(C.LS(s.c,s.d),$async$lj)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.diw(t,r))
t.ayd()
case 1:return A.h(u,v)}})
return A.i($async$lj,v)},
gauM(){var w,v=this
if(!J.ct(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
ayd(){var w,v,u=this.gauM(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.sb4(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.sb4(0,w==null?"":w)},
chI(d){this.m(new C.dit(this,d))
this.ayd()},
Oj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Oj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nt(B.o.v(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aTp(r.c,r.d,s),$async$Oj)
case 3:w=4
return A.b(t.lj(),$async$Oj)
case 4:if(t.c==null||J.ct(t.d)){w=1
break}q=J.oz(t.d,new C.di4(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.di5(t,p))
t.ayd()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.BX(p+1,B.ck,B.kW),$async$Oj)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Oj,v)},
BB(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$BB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gauM()
s=s==null?null:s.a
if(s==null)s=B.o.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aTp(o.c,o.d,new C.nt(s,r,q,new A.V(p,0,!1))),$async$BB)
case 3:w=4
return A.b(t.lj(),$async$BB)
case 4:if(t.c==null){w=1
break}t.m(new C.dix(t))
case 1:return A.h(u,v)}})
return A.i($async$BB,v)},
P0(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$P0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gauM()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.did(r),s,null,!0,!0,x.y),$async$P0)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bF5(s.c,s.d,r.a),$async$P0)
case 4:t.m(new C.die(t))
w=5
return A.b(t.lj(),$async$P0)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.UZ(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$P0,v)},
zd(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$zd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BB(),$async$zd)
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
return A.b(C.Sd(s,r.r,o,p,q),$async$zd)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hKl(s,r.x,r.r),$async$zd)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LS(s.c,s.d),$async$zd)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.nt(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Bw(r.c,r.d,l),$async$zd)
case 11:w=12
return A.b(t.lj(),$async$zd)
case 12:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$zd,v)},
a20(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a20=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BB(),$async$a20)
case 5:case 4:if(t.c==null){w=1
break}s=t.gzb(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dM(D.A7,new C.diu(t),new C.div())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new A.o2("Our Family",o,"",""))
for(o=J.aT(t.d);o.C();){n=o.gP(o)
p.push(new A.o2(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(A.hlR(o,new A.tP(s,r,"",p,new A.v8(q.d,null,null,null,null,"","","")),null),$async$a20)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a20,v)},
OJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$OJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BB(),$async$OJ)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.ahP,null,new C.di9(t),s,!0,!0,!0,E.aaJ,!1,!1,x.N),$async$OJ)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cPb(r)
t.m(new C.dia(t,q))
s=t.a
w=7
return A.b(C.SR(s.c,s.d,q),$async$OJ)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OJ,v)},
Yf(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.ahP,null,new C.dif(t),r,!0,!0,!0,E.aaJ,!1,!1,x.e),$async$Yf)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dig(t,s))
r=t.a
w=4
return A.b(C.SR(r.c,r.d,s),$async$Yf)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.BX(0,B.e6,B.n0)
case 1:return A.h(u,v)}})
return A.i($async$Yf,v)},
bVn(d){var w=d.bU(),v=B.a.b1(B.o.v(w.gce()),2,"0"),u=B.a.b1(B.o.v(w.gcv()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gzb(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c2q()
if(r.e)w=D.agu
else if(J.ct(r.d)){w=r.y
v=r.gzb(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fAn,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(H.aod,new C.a_7(w,v,0,q),q),q),B.bx,t,B.am,A.d(u,q,q,q,q,q,q,A.m(q,q,D.kR.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.ay(q,A.o(q,D.fjx,B.f,q,q,new A.n(q,q,q,A.l(18),A.a([new A.ab(0,B.G,B.dS.j(0.45),B.J,18)],x.V),B.xe,B.n),q,q,q,q,B.OU,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcLH(),q,q,q,q,q,q,!1,B.a4))
w.push(B.U)
w.push(A.ht(D.bXj,D.hbL,r.gaPw(),q))
B.d.u(u,w)}w=A.as(A.cb(A.x(u,B.l,q,B.e,B.N,0,B.p),B.t,q,B.y,q,q,B.eA,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.m(q,q,D.kR.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.e0:B.BI
u=A.x(A.a([new A.D(D.bGD,w,q),A.E(A.JV(v,new C.diG(r),J.ad(r.d)+1,q,r.gchH(),u,B.aM),1),r.bHC()],x.p),B.l,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c5(q,D.a_3,new A.an(B.a0,q,B.b1,B.t,A.a([D.aRN,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c2q(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KV(B.e9,"AI",h.gbFu(),!0))
if(h.a.f)f.push(new C.KV(B.lU,"Cover",h.gbQf(),!1))
if(h.a.f)f.push(new C.KV(B.x6,"Header",h.gbLc(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KV(B.vc,"Print",h.gcqV(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.hc:B.jb
t=v?"Save":"Edit"
f.push(new C.KV(u,t,v?h.gcxf():new C.diq(h),!1))}if(h.a.f)f.push(new C.KV(B.i0,"Add page",h.gaPw(),!1))
v=C.hFR(h.y.Q)
u=h.gzb(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dO3
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ax(B.kx.j(0.5),1,B.r,-1)
j=A.o(g,A.X(l.a,D.kR,g,g,g,17),B.f,g,g,new A.n(g,g,new A.bG(i,i,i,i),new A.be(k,k,k,k),g,new A.a7(B.a5,B.a9,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kR.j(0.85)
p.push(new A.bz(1,B.bd,A.ay(B.c_,A.x(A.a([k,B.bF,A.d(l.b,g,1,g,g,g,g,new A.F(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.N,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.amr(v,u,t+" \xb7 "+s+" "+r,new C.dir(h),A.A(p,B.l,g,B.e,B.i,0,g,g),g)},
Ax(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ax=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BB(),$async$Ax)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aT(t.d);r.C();){q=r.gP(r)
s.push(q.b+" "+q.c)}p=A.a3M(B.d.aN(s," "))
s=t.c
s.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.di6(t,p),s,null,!0,!0,x.N),$async$Ax)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.zd(),$async$Ax)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Eq(),$async$Ax)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.G1("Swahili (Kiswahili)",!0),$async$Ax)
case 18:w=16
break
case 17:w=19
return A.b(t.cIa(o==="sw"?"Swahili (Kiswahili)":"English"),$async$Ax)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$Ax,v)},
a_e(d,e,f,g,h){var w=null,v=A.l(16),u=B.c.j(0.07),t=A.l(16),s=A.K(B.kx.j(0.3),B.r,1),r=x.p
return new A.D(B.cy,A.aM(!1,v,!0,A.o(w,A.A(A.a([A.o(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.n(w,w,w,w,w,B.xe,B.a6),w,42,w,w,w,w,w,42),B.bc,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,B.Le,w,w,w),A.d(g,w,w,w,w,w,w,B.Fa,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1)],r),B.l,w,B.e,B.i,0,w,w),B.f,w,w,new A.n(u,w,s,t,w,w,B.n),w,w,w,w,B.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dis(d,h),w,w,w,w,w,w,w),w)},
Eq(){return this.bUR()},
bUR(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Eq=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dij(r),a7,null,!0,!0,x.ei),$async$Eq)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eF("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.cg(null,null,!1,null,new C.dik(o),a7,null,!0,!0,x.H).fw(new C.dil(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.I)(d),++a1){k=d[a1]
J.c4(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.aj()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.A7[a1]
J.c4(j,i.a)}w=8
return A.b(C.ait(a0,a7,new C.dim(o),d,l,e,j),$async$Eq)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.aa(a8)
n=A.w(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a6(l,!0).eb()
l=o
l.sii($.aw())
J.aTS(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.K(x.q).f
j=n
l.U(A.b2(null,null,null,null,null,B.t,null,A.d(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcn(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.an(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bgm(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Bw(j.c,j.d,l),$async$Eq)
case 11:w=12
return A.b(r.lj(),$async$Eq)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.A7[a1].a)
a5=l.cMG(j,12,a7)
l=r.a
w=15
return A.b(C.SR(l.c,l.d,a5),$async$Eq)
case 15:if(r.c!=null)r.m(new C.din(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.BX(0,B.e6,B.n0)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.K(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b2(a3?A.cBN("Undo",new C.dio(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ei,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Eq,v)},
G1(d,e){return this.cIb(d,e)},
cIa(d){return this.G1(d,!1)},
cIb(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$G1=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eF("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.cg(null,null,!1,null,new C.diz(a0),k,null,!0,!0,x.H).fw(new C.diA(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.c4(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(A.a41(m,new C.diB(a0)),$async$G1)
case 10:w=8
break
case 9:w=11
return A.b(C.bGV(new C.diC(a0),m,a2),$async$G1)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.aa(a1)
q=A.w(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a6(o,!0).eb()
o=a0
o.sii($.aw())
J.aTS(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.K(x.q).f
k=q
o.U(A.b2(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bgm(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Bw(k.c,k.d,o),$async$G1)
case 12:w=13
return A.b(r.lj(),$async$G1)
case 13:o=r.c
if(o==null){w=1
break}o=o.K(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.X(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(A.cBN("Undo",new C.diD(r,d),null),null,null,null,null,B.t,null,k,null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$G1,v)},
bHC(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.di7(v):u
r=A.aH(u,u,u,u,A.X(D.bSX,s?D.kR:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.ht(A.X(B.wT,B.GT,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.m(u,u,B.GT,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbPQ(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.m(u,u,D.kR.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.as(s,u,u,u),1)
w=t<J.ad(v.d)?new C.di8(v):u
return A.bm(!0,new A.D(D.bGs,A.A(A.a([r,s,A.aH(u,u,u,u,A.X(B.eI,t<J.ad(v.d)?D.kR:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.i,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a_V.prototype={
T(){return new C.bhS(new A.at(B.ax,$.aw()))}}
C.bhS.prototype={
ga37(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.V$=$.aw()
w.R$=0
this.a2()},
gbTs(){switch(this.ga37()){case"cover":var w=D.dck
break
case"book":w=D.d7r
break
default:w=D.dEw
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.l(26),n=B.kx.j(0.5),m=x.p,l=A.A(A.a([D.dO4,B.as,D.bMa,A.aH(p,p,p,p,B.lt,p,p,p,new C.dku(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.i,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jw(p,p,p,A.d("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dkv(q),q.ga37()==="page",p,p,p,p))
if(q.a.d)k.push(A.jw(p,p,p,D.h6i,p,new C.dkw(q),q.ga37()==="book",p,p,p,p))
k.push(A.jw(p,p,p,D.fTW,p,new C.dkx(q),q.ga37()==="cover",p,p,p,p))
k=A.c_(B.bI,k,B.br,p,6,8)
j=B.c.j(0.07)
j=A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bA(p,new A.b6(4,A.l(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kr,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a7,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbTs(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.d(s,p,p,p,p,p,p,B.Lb,p,p,p)
w.push(A.mY(p,B.c.j(0.08),r,B.hu,new C.dky(q,s),p,p,p,p))}return A.eI(p,B.Cf,A.cb(A.x(A.a([l,B.U,D.h9C,B.am,k,B.af,j,B.P,A.c_(B.bI,w,B.br,p,6,6),B.aB,A.db(D.bXg,p,D.hao,new C.dkz(q,d),A.bp(B.b8,p,p,p,p,B.p3,p,p,new A.ba(A.l(16),B.a1),p,p,p)),B.aw,D.h4u],m),B.E,p,B.e,B.N,0,B.p),B.t,p,B.y,p,p,B.fu,p,p,B.ah),p,p,p,B.OR,p,B.d7,p,new A.ba(o,new A.ax(n,1.4,B.r,-1)),p)}}
C.a_T.prototype={
T(){return new C.aCh(A.a([],x.gA))},
ge3(){return this.c}}
C.age.prototype={}
C.aCh.prototype={
Z(){this.a3()
this.lj()},
lj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Sh(p.c,p.d),$async$lj)
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
return A.b(C.bFl(r.c,q),$async$lj)
case 6:j=e
i=J
w=7
return A.b(C.LS(t.a.c,q),$async$lj)
case 7:m.push(new l.age(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.diX(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lj,v)},
bbB(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Re(d,e){return this.cjg(0,e)},
cjg(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Re=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).cf(A.eg(new C.diW(u,e),!0,null,x.y)),$async$Re)
case 2:t=g
w=3
return A.b(u.lj(),$async$Re)
case 3:if(t===!0&&u.c!=null)u.c.K(x.q).f.U(D.aVM)
return A.h(null,v)}})
return A.i($async$Re,v)},
G3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$G3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.K(x.q).f.U(D.aVH)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ahN(s.c,s.d),$async$G3)
case 5:q=e
w=6
return A.b(t.lj(),$async$G3)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Re(0,B.d.fb(t.d,new C.dj0(q))),$async$G3)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Sd(p,s.f,r,n,o),$async$G3)
case 10:m=e
w=11
return A.b(t.lj(),$async$G3)
case 11:if(m&&t.c!=null)t.c.K(x.q).f.U(D.aVM)
case 1:return A.h(u,v)}})
return A.i($async$G3,v)},
QF(d,e){return this.cuX(0,e)},
cuX(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$QF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dj_(t,e),s,null,!0,!0,x.y),$async$QF)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a4d(s.c,s.d,e.a),$async$QF)
case 4:w=5
return A.b(t.lj(),$async$QF)
case 5:case 1:return A.h(u,v)}})
return A.i($async$QF,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bHF(w[u]))
if(m){t=6-o.d.length
w=A.l(18)
v=B.c.j(0.05)
s=A.K(B.kx.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.ay(n,new A.fG(0.7142857142857143,A.o(n,A.x(A.a([D.dO5,B.af,D.eyP,B.aw,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.m(n,n,D.kR.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.b9,B.i,0,B.p),B.f,n,n,new A.n(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcLD(),n,n,n,n,n,n,!1,B.a4))}w=A.l(22)
v=A.K(B.kx.j(0.85),B.r,1.6)
s=A.ay(n,A.o(n,D.c4o,B.f,n,n,new A.n(B.w.j(0.3),n,A.K(B.kx.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dj1(d),n,n,n,n,n,n,!1,B.a4)
r=A.l(14)
q=B.w.j(0.3)
p=A.K(B.kx.j(0.5),B.r,1)
w=A.o(n,A.A(A.a([s,B.bc,D.bMz,A.o(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fzn,n,n,n),B.f,n,n,new A.n(q,n,p,r,n,n,B.n),n,n,n,n,B.hn,n,n,n)],l),B.l,n,B.e,B.i,0,n,n),B.f,n,n,new A.n(n,n,v,w,n,D.car,B.n),n,n,n,B.OD,D.bEl,n,n,n)
if(o.e)k=D.agu
else k=k.length===0?D.bes:A.ci(new C.dj2(k))
return A.c5(n,D.a_3,new A.an(B.a0,n,B.b1,B.t,A.a([D.aRN,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bHF(d){var w,v,u=this,t=null,s=u.bbB(d),r=d.c,q=x.p,p=A.a([A.bS(0,new A.du(B.dB,B.A,B.f,new A.a5(300,420,new C.a_7(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.ay(t,A.o(t,D.c3G,B.f,t,t,new A.n(B.w.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.diU(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.fz0,t,t,t)
v=r===1?"page":"pages"
return A.ay(t,A.x(A.a([new A.fG(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.m(t,t,D.kR.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.diV(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KV.prototype={}
C.a_7.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dM(D.A7,new C.cR2(m),new C.cR3()),j=m.c,i=D.Ef.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mt:B.b9
v=new C.cR4(h)
i=A.a([new A.ab(0,B.G,B.w.j(0.6),D.evC,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b3(l,l,l,new C.bf3(j.x,h,l),B.az),0,0,0),A.ao(0,A.o(l,l,B.f,l,l,new A.n(l,l,l,l,l,new A.a7(B.a5,B.a9,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cK(8,40+s*46,l,l,l,l,A.o(l,l,B.f,l,l,new A.n(h.j(0.7),l,l,new A.be(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.aoe,8,0.85,2.2),v.$4(D.bJm,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aoe,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.D(D.bJi,A.b3(l,l,l,new C.beV(h,l),B.az),l),0,0,0))
r=A.X(D.aD8[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.m(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aAj,l,l),B.K,l,l)
p=A.o(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.af,p,B.af,A.d(o,l,l,l,l,l,l,A.m(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cK,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.m(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.D(D.bJO,A.x(o,B.l,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aJm(l),D.fos),l,l,l,46,0,l))
return A.o(l,A.bv(D.af6,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.n(l,l,l,D.af6,i,new A.a7(B.ay,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bf3.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e_()
g.cU(11)
switch(this.b){case"plain":return
case"linen":$.R()
w=A.L()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.r(0,t),new A.r(u,t),w)
$.R()
s=A.L()
s.r=B.c.j(0.05).gp(0)
s.c=1
for(r=0;r<u;r+=4)d.ah(new A.r(r,0),new A.r(r,v),s)
break
case"stars":for(v=e.a,u=e.b,q=this.c,p=0;p<70;++p){o=g.ai()
n=g.ai()
m=g.ai()
$.R()
l=new A.ar(B.S,B.Q,B.V,B.X,B.T)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.O(new A.r(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.R()
l=A.a([],n)
j=new A.aG(m.r,B.ai,null,null,l)
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
m=new A.ar(B.S,B.Q,B.V,B.X,B.T)
m.r=o.j((p&1)===0?0.09:0.03).gp(0)
d.af(j,m)}break
default:$.R()
w=A.L()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.R()
h=A.L()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aE(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.beV.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.R(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.ab
j.c=2.4
j.d=B.bG
for(w=e.a,v=e.b,v=[D.fbp,new A.b7([w,0,-1,1]),new A.b7([0,v,1,-1]),new A.b7([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aG(k,B.ai,null,null,s)
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
s=new A.ar(B.S,B.Q,B.V,B.X,B.T)
s.r=i.j(0.9).gp(0)
d.O(new A.r(r+p*9,q+o*9),3,s)}},
aE(d){return!d.b.A(0,this.b)}}
C.uT.prototype={}
C.a_r.prototype={
T(){return new C.bf1()}}
C.bf1.prototype={
goz(){var w=this.d
return w===$?this.d=this.a.c:w},
gzb(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.at(new A.bc(w.b,B.b7,B.aP),$.aw())}return v},
gaDI(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.at(new A.bc(w.c,B.b7,B.aP),$.aw())}return v},
gatj(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.at(new A.bc(w.y,B.b7,B.aP),$.aw())}return v},
t(){var w=this,v=w.gzb(0),u=v.V$=$.aw()
v.R$=0
v=w.gaDI()
v.V$=u
v.R$=0
v=w.gatj()
v.V$=u
v.R$=0
w.a2()},
atX(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jw(s,s,s,A.d(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.d9P(this,f,u),e===u,s,s,s,s))}return A.c_(B.bI,r,B.br,s,6,8)},
azH(d){var w=null,v=B.c.j(0.07)
return A.bA(w,new A.b6(4,A.l(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lZ,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goz(),a0=f.gzb(0),a1=a0.a.a,a2=f.gaDI(),a3=a2.a.a,a4=f.gatj(),a5=d.bgk(a4.a.a,a3,a1)
a1=x.w
a3=A.aD(a6,e,a1).w
a1=A.aD(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a5(190,260,new A.du(B.dB,B.A,B.f,new A.a5(270,370,new C.a_7(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.azH("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dad(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a7,e,B.ao,e,e,e,e)
a2=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.azH("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dae(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a7,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.A7[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.ax(p,q?3:1,B.r,-1)
p=A.o(e,e,B.f,e,e,new A.n(e,e,new A.bG(o,o,o,o),e,e,new A.a7(B.ay,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aF
v.push(A.ay(e,A.x(A.a([p,B.cS,A.d(t.b,e,e,e,e,e,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.daf(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.c_(B.bI,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b8.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ax((s===$?f.d=f.a.c:s).d===n?B.ey:B.L,2,B.r,-1)
q.push(A.ay(e,A.o(e,A.X(D.aD8[n],B.c,e,e,e,24),B.f,e,e,new A.n(p,e,new A.bG(o,o,o,o),new A.be(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dag(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.c_(B.bI,q,B.br,e,8,8)
a4=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.azH("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dah(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a7,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,F.vV,e,e,e)
m=A.a([],w)
for(l=D.Ef.gdQ(D.Ef),l=l.gae(l);l.C();){k=l.gP(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ey:B.aT
g=r.e===i
o=new A.ax(h,g?3:1,B.r,-1)
j=A.o(e,e,B.f,e,e,new A.n(j,e,new A.bG(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aF
m.push(A.ay(e,A.x(A.a([j,B.bF,A.d(i,e,e,e,e,e,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dai(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.c_(B.bI,m,B.br,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,F.vV,e,e,e)
k=f.goz()
return new A.D(new A.P(0,0,0,a3.f.d),A.bm(!0,new A.cN(new A.aY(0,1/0,0,a1.a.b*0.92),A.cv(A.a([D.h3V,B.af,d,B.aO,a0,B.U,a2,B.aB,D.ha9,B.P,v,B.aB,D.h43,B.P,q,B.aB,a4,B.aB,p,B.P,m,B.aB,l,A.l0(e,9,""+B.h.S(f.goz().f),36,18,new C.daj(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,F.vV,e,e,e),B.am,f.atX(D.a7q,f.goz().r,new C.dak(f),D.dHO),B.af,A.d("BORDER",e,e,e,e,e,e,F.vV,e,e,e),B.am,f.atX(D.a6K,f.goz().w,new C.dal(f),D.dHU),B.af,A.d("COVER MATERIAL",e,e,e,e,e,e,F.vV,e,e,e),B.am,f.atX(D.a6G,f.goz().x,new C.dan(f),D.dJz),B.am,A.iV(e,B.b8,e,B.ag,e,new C.dao(f),e,e,e,D.fZ4,f.goz().z),B.bx,A.bJ(D.h2D,e,new C.dap(f,a6),A.bp(B.b8,e,e,e,e,B.p3,e,e,new A.ba(A.l(16),B.a1),e,e,e))],w),e,e,B.anJ,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aJm.prototype={
a4(d,e){var w,v,u,t=new A.aG($.R().r,B.ai,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bx())
u=A.L()
u.sam(D.cb8.az(0,new A.a3(0,0,0+w,0+v)))
d.af(t,u)},
aE(d){return!1}}
C.bkp.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.R()
w=A.L()
w.sam(D.ca7.az(0,new A.a3(0,0,a2,a3)))
a4.aD(new A.a3(0,0,a2,a3),w)
v=B.h.cD(a1/112)
u=new A.e_()
u.cU(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.dcj[u.aw(9)]
j=u.aw(14)
J.br(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a3(n,j,n+m,j+l)
h=A.bw(i,B.hH)
g=new A.ar(B.S,B.Q,B.V,B.X,B.T)
f=A.ap(k,B.c,0.12)
f.toString
e=A.ap(k,B.w,0.45)
e.toString
g.sam(new A.a7(B.a5,B.a9,B.x,A.a([f,k,e],w),d,d).az(0,i))
a4.aq(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ar(B.S,B.Q,B.V,B.X,B.T)
e.r=B.kx.j(0.55).gp(0)
a4.aD(new A.a3(g,j,h,j+2),e)
e=new A.ar(B.S,B.Q,B.V,B.X,B.T)
e.r=B.kx.j(0.4).gp(0)
a4.aD(new A.a3(g,q,h,p),e)
t.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ar(B.S,B.Q,B.V,B.X,B.T)
p.sam(D.c9q.az(0,new A.a3(0,r,a2,q)))
a4.aD(new A.a3(0,r,a2,q),p)
p=new A.ar(B.S,B.Q,B.V,B.X,B.T)
p.r=B.w.j(0.5).gp(0)
p.y=B.kY
a4.aD(new A.a3(0,q,a2,q+14),p)}t=A.L()
t.r=D.bih.j(0.72).gp(0)
a4.aD(new A.a3(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.sam(new A.bT(B.A,0.5,B.x,d,0,A.a([D.bqV.j(0.22),B.L],w),d,d).az(0,A.bW(new A.r(t,a1),a0)))
a4.O(new A.r(t,a1),a0,a3)},
aE(d){return!1}}
C.bdd.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cK(14,w*2,v*2.2,v*2,o,o,new A.bN(new A.n(A.ap(D.kR,D.bwf,w/4),o,new A.bG(B.a1,new A.ax(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.Mp,o,o,B.n),B.bk,o,o),o))}v=x.V
u=A.a([new A.ab(0,B.G,B.w.j(0.35),B.aNm,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.o(o,o,B.f,o,o,new A.n(B.kx.j(0.6),o,o,new A.be(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.o(o,A.x(t,B.l,o,B.r3,B.i,0,B.p),B.f,o,o,new A.n(o,o,o,D.b6p,u,D.cb6,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ab(0,B.G,B.w.j(0.4),B.dn,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aJm(o),D.fom),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aXi(p.y,r,B.j6,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bA(o,B.eN,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,B.j6.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fNX,!0,B.a7,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,B.j6.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.U,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bA(o,B.eN,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,B.j6.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fEm,!0,B.a7,B.B1,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fNP,o,o,o),B.aw,A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,B.j6.j(0.5),o,o,o,o,o,o,o,o,11,B.cK,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.E(A.o(o,o,B.f,D.GD.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fv,A.d("\u2766",o,o,o,o,o,o,A.m(o,o,D.GD.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.o(o,o,B.f,D.GD.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.i,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.m(o,o,B.j6.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Zm(A.cR(A.a([A.cR(o,o,o,o,o,o,o,o,o,D.fHB,B.a.aB(k,0,1)),A.cR(o,o,o,o,o,o,o,o,o,o,B.a.aY(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.m(o,o,B.j6.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cb(A.x(n,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.ih,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.m(o,o,B.j6.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.o(o,A.bv(B.Mp,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bIP,A.x(s,B.al,o,B.e,B.i,0,B.p),o),A.ao(0,new A.bN(new A.n(o,o,o,o,o,new A.a7(B.a5,B.a9,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bk,o,o),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.n(o,o,o,B.Mp,v,D.cbE,B.n),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.ams.prototype={
T(){return new C.amt(new A.eF(0,$.aw()),new C.bUx(),new C.amL(),D.hN4,null,null)},
gd1(){return this.d}}
C.a26.prototype={
a7(){return"_Step."+this.b}}
C.amt.prototype={
gCK(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFh(w.c,6,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghe(d){var w,v=this,u=v.e
if(u===$){w=C.Nd(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gUf(){var w=this.ghe(0)
return w.gzv()==null?"Babu":B.a.i(w.gzv().b)},
Z(){var w,v=this
v.a3()
w=v.ghe(0).gzv()
w=w==null?null:w.c
v.r.b=w===D.oB
w=v.q9(new C.bST(v))
w.fX(0)
v.x!==$&&A.aQ()
v.x=w
v.a34("Come closer, my children. I am "+v.gUf()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.c()
v.t()
v=w.y
if(v!=null)v.a1(0)
v=w.z
if(v!=null)v.a1(0)
w.w.t()
v=w.f
v.V$=$.aw()
v.R$=0
w.bx1()},
a34(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dh(B.a0M,new C.bSN(w))},
bto(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.m(new C.bSW(v))},
aen(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
btg(){return this.bb8()},
bb8(){var w=this,v=w.gCK()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bSO(w))
w.a34(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cy(B.me,new C.bSP(w))},
cMN(){var w=this
w.m(new C.bSS(w))
w.a34(w.gCK()[w.as].a)},
Lo(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.aec)return
w=p.gCK()
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
t.r=s.a+1.5}q=new A.e_()
q.cU(v*7+d)
p.m(new C.bSR(p,d,u,q))
p.a34(u?D.dss[q.aw(4)]+" "+w[p.as].d:D.dp_[q.aw(3)]+" "+w[p.as].d)},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCK()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bHB(t.at,t.ay,p)
t.m(new C.bSU(t,s))
t.a34(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BT(t.a.d,s),$async$kO)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BU(r.d,r.c.a,"fire",t.at*10),$async$kO)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bSV())
w=1
break
case 4:++t.as
t.bb8()
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c5(v,D.Z2,new A.an(B.a0,v,B.ad,B.t,A.a([A.bS(0,new A.e5(A.b3(v,v,v,new C.aXn(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.cdh(0),B.b4,w.bSC()],t),B.l,v,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cdh(d){var w,v,u,t=this,s=null,r=A.aH(s,s,s,s,B.QD,s,s,s,new C.bSQ(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCK().length;++w){v=t.as
if(w<v||t.Q===D.b2I)v=B.cV
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(A.o(s,s,B.f,s,s,new A.n(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,D.bE5,s,s,s,22))}p=A.E(A.x(A.a([D.fVO,A.A(p,B.l,s,B.e,B.i,0,s,s)],q),B.E,s,B.e,B.i,0,B.p),1)
v=A.l(14)
u=A.K(B.fL,B.r,1)
return new A.D(D.bK0,A.A(A.a([r,p,A.o(s,A.d("\ud83d\udd25 "+B.h.S(t.cy*100)+"%",s,s,s,s,s,s,B.iI,s,s,s),B.f,s,s,new A.n(B.b5,s,u,v,s,s,B.n),s,s,s,s,B.hn,s,s,s)],q),B.l,s,B.e,B.i,0,s,s),s)},
bSC(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghe(0).gzv()
if(h==null)w=1
else w=h.c===D.oB?0:1
v=j.dx
u=j.db
t=D.qr.j(0.96)
s=A.l(22)
r=A.K(B.cV,B.r,3)
q=A.b3(i,i,i,new C.bq0(w,i),B.az)
p=A.d(j.Q===D.aec?j.gUf()+" asks":"Elder "+j.gUf(),i,i,i,i,i,i,D.aX1,i,i,i)
o=j.db
o=B.a.aB(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.ay(B.c_,A.A(A.a([new A.a5(62,62,q,i),B.as,A.E(A.x(A.a([p,B.bF,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aXf,i,i,i)],n),B.E,i,B.e,B.i,0,B.p),1)],n),B.E,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbtn(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.as(j.aau("Sit down by the fire",j.gbtf()),i,i,i)
break
case 1:v=A.as(j.aau("Ask me, Elder",j.gcMM()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCK()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ax(D.lG,2.5,B.r,-1)
v.push(A.ay(i,A.o(i,A.d(u[m],i,i,i,i,i,i,D.aXb,B.K,i,i),B.f,i,D.afJ,new A.n(D.alf,i,new A.bG(l,l,l,l),new A.be(q,q,q,q),i,i,B.n),i,i,i,i,K.wG,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bSK(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.c_(B.bI,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.kd:X.ard
u=A.X(u,v?B.ep:D.lG,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.m(i,i,v?B.ep:D.lG,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCK().length?"Finish":"Next story"
v=A.A(A.a([u,B.ae,q,j.aau(v,j.gqt(j))],n),B.l,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCK().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aXt,i,i,i)],n)
u=j.cx
if(u>0){u=C.aRD(u)
q=C.aRD(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.acD,i,i,i))}v.push(B.P)
v.push(j.aau("Back to the games",new C.bSL(j)))
v=A.x(v,B.l,i,B.e,B.i,0,B.p)
break
default:v=i}return A.o(i,A.x(A.a([o,B.U,v],n),B.E,i,B.e,B.N,0,B.p),B.f,i,i,new A.n(t,i,r,s,D.aEH,i,B.n),i,i,i,B.yX,B.bl,i,i,i)},
aau(d,e){var w=null,v=A.l(16),u=A.K(B.cV,B.r,2)
return A.ay(w,A.o(w,A.d(d,w,w,w,w,w,w,B.Le,w,w,w),B.f,w,w,new A.n(D.lG,w,u,v,w,w,B.n),w,w,w,w,D.bHI,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bq0.prototype={
a4(d,e){A.hlA(d,e.ej(B.J),e.gdj()*0.45,this.b,0,0.4)},
aE(d){return d.b!==this.b}}
C.aCf.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.bUx.prototype={}
C.te.prototype={}
C.bq1.prototype={}
C.amL.prototype={
MR(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.ihF(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aXn.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.GE(l.d.MR(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.br(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bV(0,u)
l.cCd(d,j)
l.bR9(d,j)
l.cKy(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.br(t.save())
t.translate(225,580)
d.nN(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.R()
q=A.L()
p=x.O
o=x.n
q.sam(A.wg(B.J,r,A.a([D.buW.j(0.55*s),B.NT.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.O(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bUp(l,d,j,i)),new A.y(540,new C.bUq(l,d,j,i)),new A.y(546,new C.bUr(l,d,j,i)),new A.y(574,new C.bUs(l,d,j,i)),new A.y(612,new C.bUt(l,d,j,i)),new A.y(650,new C.bUu(l,d,j,i)),new A.y(656,new C.bUv(l,d,j,i))],x.E)
B.d.b0(n,new C.bUw())
for(m=0;m<7;++m)n[m].b.$0()
l.bHY(d,j,i)
l.bUP(d,j)
t.restore()
$.R()
t=A.L()
t.sam(A.wg(new A.r(w/2,v*0.6),e.gaoI()*0.75,A.a([B.L,D.bia],p),A.a([0.55,1],o),B.x,k,k,0))
d.aD(new A.a3(0,0,0+w,0+v),t)},
aE(d){return d.c!==this.c||d.d!==this.d},
cCd(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e_()
h.cU(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.R()
r=new A.ar(B.S,B.Q,B.V,B.X,B.T)
r.r=t.gp(0)
d.O(new A.r(v*450,20+u*300),0.8+s*1.1,r)}q=B.h.F(e,17)/1.2
if(q<1){p=new A.r(60+q*220,70+q*90)
d.ah(p,p.aJ(0,D.ev8),C.iF(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.h.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.R()
k=A.a([],t)
l=new A.aG(l.r,B.ai,null,null,k)
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
s=new A.ar(B.S,B.Q,B.V,B.X,B.T)
s.b=B.ab
s.c=1.6
s.r=D.bkW.gp(0)
s.d=B.bG
s.e=B.dQ
d.af(l,s)}},
bR9(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aBD[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bX(new A.r(p,m),n*0.74,q*0.5)
k=B.yI.j(v)
$.R()
j=new A.ar(B.S,B.Q,B.V,B.X,B.T)
j.r=k.gp(0)
d.c1(l,j)
q=A.bX(new A.r(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ar(B.S,B.Q,B.V,B.X,B.T)
m.r=B.wk.j(u).gp(0)
d.c1(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.h.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ar(B.S,B.Q,B.V,B.X,B.T)
o.r=D.aiB.j(0.16*(1-h)).gp(0)
d.O(new A.r(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cKy(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bED(d,D.ev4,0.9,e,D.hIJ,!1,!1,D.b2F,1,!1)
w=$.R().r
v=x.v
u=new A.aG(w,B.ai,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bx())
t=A.L()
t.r=D.aky.gp(0)
d.af(u,t)
C.bED(d,D.ev6,0.95,e,D.hIE,!1,!1,D.b2G,1,!0)
t=new A.aG(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.ce(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.ce(431,553,421,548))
t.E(new A.bx())
u=A.L()
u.r=B.Gi.gp(0)
d.af(t,u)
u=A.bX(D.ev5,8,28)
t=A.L()
t.r=D.bxm.gp(0)
d.c1(u,t)
C.bED(d,new A.r(-30+B.h.F(e/26,1)*510,492),0.82,e,D.hIK,!0,!1,D.XR,1,!1)
t=B.h.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c1(A.bX(new A.r(s+q*16,r-6),16,11),C.iF(D.akp,1.8))
u=q<0
C.bED(d,new A.r(s-q*6,r),0.62,e,D.hIM,!1,u,D.XR,2.2,!1)
C.bED(d,new A.r(s-q*32,r+4),0.58,e+1,D.hII,!1,u,D.XR,2.2,!1)
this.bXy(d,D.euK,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bX(new A.r(o,n),8,11)
k=p===1
j=k?D.akl:D.akY
i=new A.ar(B.S,B.Q,B.V,B.X,B.T)
i.r=j.gp(0)
d.c1(l,i)
l=k?D.akl:D.akY
k=new A.ar(B.S,B.Q,B.V,B.X,B.T)
k.r=l.gp(0)
d.O(new A.r(o+5,n+(-3+m)),2.6,k)
k=new A.ar(B.S,B.Q,B.V,B.X,B.T)
k.b=B.ab
k.c=1
k.r=B.at.gp(0)
k.d=B.bG
k.e=B.dQ
d.ah(new A.r(o+7.5,n+(-2+m)),new A.r(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ar(B.S,B.Q,B.V,B.X,B.T)
k.b=B.ab
k.c=1
k.r=B.at.gp(0)
k.d=B.bG
k.e=B.dQ
d.ah(new A.r(o,n+4),new A.r(o,n+8),k)}h=e<f.f
u=A.bX(D.a9B,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.aj_.gp(0)
d.c1(u,t)
u=A.bX(D.a9B.a5(0,new A.r(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.bn8.gp(0)
d.c1(u,t)
t=new A.aG(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bx())
u=A.L()
u.r=D.bnl.gp(0)
d.af(t,u)
u=D.a9B.a5(0,new A.r(-17,h?-9:-2))
t=A.L()
t.r=B.id.gp(0)
d.O(u,1.1,t)
v=new A.aG(w,B.ai,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.ce(180,588+w*(h?6:0),178,595))
d.af(v,C.iF(D.aj_,3.5))},
bXy(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a5(0,new A.r(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.R()
m=new A.ar(B.S,B.Q,B.V,B.X,B.T)
m.b=B.ab
m.c=2
m.r=D.Zg.gp(0)
m.d=B.bG
m.e=B.dQ
d.ah(new A.r(u+o,s),new A.r(u+(o+n*1.5),q),m)}w=A.bX(k,17,32)
v=$.R()
r=A.L()
r.r=D.Gg.gp(0)
d.c1(w,r)
r=A.bX(k.a5(0,D.eua),7,26)
w=A.ap(D.Gg,B.w,0.12)
w.toString
q=A.L()
q.r=w.gp(0)
d.c1(r,q)
v=new A.aG(v.r,B.ai,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bx())
s=A.L()
s.r=D.Gg.gp(0)
d.af(v,s)
s=A.bX(k.a5(0,new A.r(24,-7+l)),9,12)
v=A.L()
v.r=D.Gg.gp(0)
d.c1(s,v)
v=-11+l
d.ah(k.a5(0,new A.r(22,v)),k.a5(0,new A.r(21,-17+l)),C.iF(D.Zg,1.6))
d.ah(k.a5(0,new A.r(26,v)),k.a5(0,new A.r(28,-16+l)),C.iF(D.Zg,1.6))
v=k.a5(0,new A.r(26,-8+l))
s=A.L()
s.r=B.w.gp(0)
d.O(v,0.9,s)
d.ah(k.a5(0,new A.r(26,-3+l)),k.a5(0,new A.r(26,1+l)),C.iF(D.bq9,1.4))
d.ah(k.a5(0,D.ex3),k.a5(0,new A.r(-19,-7+Math.sin(f*7)*2)),C.iF(D.Gg,2.4))},
bUN(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bX(new A.r(225+u*36,574+(t*13+6)),8,11)
$.R()
t=new A.ar(B.S,B.Q,B.V,B.X,B.T)
t.r=D.bvZ.gp(0)
a6.c1(u,t)}}u=A.bX(D.a9D.a5(0,B.cz),17,52)
$.R()
t=A.L()
t.r=D.bhJ.gp(0)
a6.c1(u,t)
t=A.bX(D.a9D.a5(0,B.cz),12,44)
u=D.bll.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.c1(t,s)
for(r=0;r<3;++r){v=D.dor[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ar(B.S,B.Q,B.V,B.X,B.T)
o.b=B.ab
o.c=7
o.r=D.Gu.gp(0)
o.d=B.bG
o.e=B.dQ
a6.ah(new A.r(u+t*24,579+s*4),new A.r(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.BV.j(0.6)
n=new A.ar(B.S,B.Q,B.V,B.X,B.T)
n.b=B.ab
n.c=2
n.r=t.gp(0)
n.d=B.bG
n.e=B.dQ
a6.ah(new A.r(u+o*24,579+(p*4-2)),new A.r(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.f7v,D.f83,D.f99,D.f9u,D.f97]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bte,D.bpu,D.bvo][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.R()
f=A.a([],q)
a2=new A.aG(g.r,B.ai,null,null,f)
f.push(new A.aZ(a0-a1,578))
a2.ab()
g=a0+d*0.6
a3=new A.hV(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.ak(a4)
a2.ab()
g=new A.hV(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.ak(a3)
a2.ab()
g=new A.bx()
f.push(g)
f=a2.f
if(f!=null)g.ak(f)
a2.ab()
g=new A.ar(B.S,B.Q,B.V,B.X,B.T)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.h.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=B.akW.j((1-a5)*0.9)
$.R()
o=new A.ar(B.S,B.Q,B.V,B.X,B.T)
o.r=p.gp(0)
a6.O(new A.r(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.h.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.aiB.j(0.1*(1-a5))
$.R()
p=new A.ar(B.S,B.Q,B.V,B.X,B.T)
p.r=q.gp(0)
a6.O(new A.r(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bUP(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.h.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bxx.j(0.18*p)
$.R()
n=new A.ar(B.S,B.Q,B.V,B.X,B.T)
n.r=o.gp(0)
d.O(new A.r(r,q),5,n)
n=new A.ar(B.S,B.Q,B.V,B.X,B.T)
n.r=D.br_.j(0.9*p).gp(0)
d.O(new A.r(r,q),1.4,n)}},
c6B(d,e){switch(d){case 0:return e.b?D.hIF:D.b2d
case 1:return e.b?D.hIL:D.b2b
case 2:return D.b2a
case 3:return D.b29
case 4:return D.b2c
default:return D.b2e}},
aDW(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
Rx(d,e,f,g){var w,v=this,u=D.a6S[e],t=v.c6B(e,g),s=new C.bq1(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a6S[e],l=e===0
m=B.h.D(((l?D.aNe:D.aNk).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a9I
s.as=D.EH
if(l){s.a=o?v.aDW(f,0):0
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.eui
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.evG
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
s.Q=D.ey_
s.as=D.aNx}if(e===2&&g.x!=null&&f<g.y){s.a=v.aDW(f,5)
s.b=0.4
s.as=new A.r(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aDW(f,e*3)
s.b=0.5
s.c=0.4}}C.hEu(d,u.a,u.b*1.2,t,s,f,e,null)},
bHY(d,e,f){var w=new C.bUo(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd3(d){return this.c}}
C.agn.prototype={
a7(){return"_Stand."+this.b}}
C.aek.prototype={}
C.ls.prototype={}
C.bT8.prototype={
bCz(d){var w,v,u,t,s=A.S(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
Gj(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b0(r,new C.bT9())
return r},
arZ(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aNF(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
an5(d){var w,v,u=A.aR(x.N),t=d,s=0
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
gzv(){var w=this.b
if(w.length===0)return null
w=A.B(w,x.P)
B.d.b0(w,new C.bTa(this))
return B.d.gH(w)}}
C.auS.prototype={}
C.zC.prototype={}
C.alj.prototype={
gCg(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bNW(),A.T(w).k("Y<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
aj(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.MY.prototype={
gaq0(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gCg(0))s.push(t)}return s},
aj(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d33(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaq0(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.ls(B.a.i(s.a),p,B.d.cj(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bbp.prototype={}
C.aan.prototype={}
C.biI.prototype={}
C.agl.prototype={}
C.akC.prototype={
T(){return new C.akD(B.bD,A.a([],x.cC),A.a([],x.e4),null,null)},
gd1(){return this.d}}
C.akD.prototype={
gN7(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFh(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gbbu(){var w,v=this,u=v.e
if(u===$){w=v.q9(v.gcdj())
v.e!==$&&A.bE()
v.e=w
u=w}return u},
Z(){this.a3()
this.gbbu().fX(0)},
t(){this.gbbu().t()
this.bwX()},
fX(d){this.m(new C.bM4(this))},
cdk(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fH(0,v)
if(w.c!=null)w.m(new C.bM_())},
b9P(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gN7()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.biI(u,(u+0.5)/v,w[t.x].b[u]))},
fH(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bq(w,new C.bM5())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c9r()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gN7()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.h.S((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.atv(v,0.8,B.cV)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.atv(m.cy,0.8,B.np)
m.b_f("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.atv(q,0.88,D.lG)
p=m.gN7()[m.x]
n=p.c
if(u===n){m.b_f("The right gourd fell! It was "+p.b[n]+".")
return}}}},
atv(d,e,f){var w,v,u,t=new A.e_()
t.cU(B.h.S(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.agl(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b_f(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.QG()}},
c9r(){var w=this
if(w.x+1>=w.gN7().length){w.QG()
return}++w.x
w.b9P()},
QG(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$QG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gN7().length
r=C.bHB(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bLY())
w=2
return A.b(C.BT(u.a.d,r),$async$QG)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BU(t.d,t.c.a,"catch",u.z),$async$QG)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bLZ())
return A.h(null,v)}})
return A.i($async$QG,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cdi()
else w=v.ch?v.cdl():A.as(new A.D(B.eA,A.x(A.a([D.aYq,B.P,D.fXv,B.U,D.h2I,B.e3,C.uw("Play",v.geY(v),B.cV,B.hd,D.fC)],x.p),B.l,u,B.e,B.N,0,B.p),u),u,u,u)
return new C.tE("Calabash Catch",w,B.f7,u)},
cdl(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hF:B.HZ
p.push(A.X(u,v?B.aA:B.bV,r,r,r,22))}p.push(B.b4)
v=s.x
u=s.gN7()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aX0,r,r,r))
p.push(B.bc)
v=A.l(14)
p.push(A.o(r,A.d(""+s.z,r,r,r,r,r,r,B.iI,r,r,r),B.f,r,r,new A.n(B.bw,r,r,v,r,r,B.n),r,r,r,r,B.CE,r,r,r))
p=A.A(p,B.l,r,B.e,B.i,0,r,r)
v=A.l(18)
t=A.K(B.cV,B.r,3)
return A.x(A.a([new A.D(D.bFt,p,r),A.o(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fHt,B.K,r,r),B.f,r,r,new A.n(D.qr,r,t,v,r,r,B.n),r,r,r,B.f2,B.bl,r,r,1/0),B.am,A.E(A.ci(new C.bM3(s)),1)],q),B.l,r,B.e,B.i,0,B.p)},
cdi(){var w=this,v=null,u=A.as(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.q2,v,v,v),v,v,v),t=A.as(A.d(""+w.Q+" of "+w.gN7().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Wc,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cv(A.a([D.bf9,u,t,B.aO,new C.Iz(s,r,w.cx,v),B.aO,A.as(C.uw("Back to the games",new C.bLX(w),B.cV,B.kc,D.fC),v,v,v)],x.p),v,v,B.ac,v,v,B.ah,!1)}}
C.bdT.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.R(),a3=A.L()
a3.sam(A.jz(B.J,new A.r(0,a0),D.d5Z,B.aBU,B.x,e))
a4.aD(new A.a3(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=B.NX.gp(0)
a4.O(new A.r(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aG(a2.r,B.ai,e,e,w)
a2=a0*0.7
v.E(new A.aZ(0,a2))
for(u=0;u<=d;u+=6){t=new A.aq(u,a2+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.ak(s)
v.ab()}v.E(new A.aq(d,a0))
v.E(new A.aq(0,a0))
a2=$.R()
w=A.L()
w.r=D.bmj.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aG(a2.r,B.ai,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.ce(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.ce(r+14,t,r+26,w))
a2.E(new A.bx())
w=A.L()
w.r=D.ahD.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.crc[q]
s=new A.ar(B.S,B.Q,B.V,B.X,B.T)
s.r=D.ahD.gp(0)
s.c=7
s.d=B.bG
a4.ah(new A.r(r,a2),new A.r(r+p*46,w),s)
s=new A.ar(B.S,B.Q,B.V,B.X,B.T)
s.r=D.agV.gp(0)
a4.O(new A.r(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.bni.gp(0)
a4.aD(new A.a3(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ar(B.S,B.Q,B.V,B.X,B.T)
t.r=D.ajf.gp(0)
t.c=2
a4.ah(new A.r(w,a1),new A.r(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bX(new A.r(u,s),12,54)
$.R()
l=new A.ar(B.S,B.Q,B.V,B.X,B.T)
l.r=D.lG.j(0.6).gp(0)
a4.c1(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.br(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.R()
m=new A.ar(B.S,B.Q,B.V,B.X,B.T)
m.r=D.ail.gp(0)
a4.O(D.ety,14,m)
m=new A.ar(B.S,B.Q,B.V,B.X,B.T)
m.r=D.bsh.gp(0)
m.c=4
m.d=B.bG
a4.ah(D.etz,D.euG,m)
m=new A.ar(B.S,B.Q,B.V,B.X,B.T)
m.sam(new A.amc(D.ewO,46,D.deS,B.vn,B.x,e,e,0))
a4.O(B.J,34,m)
m=A.bX(D.ewU,8,12)
l=new A.ar(B.S,B.Q,B.V,B.X,B.T)
l.r=B.c.j(0.35).gp(0)
a4.c1(m,l)
k=new A.jM(new A.ev(n.c,e,e,B.cN,e,e,e,e,e,e,D.fFi),B.K,B.c0,new A.ji(1),e,e,3,e,B.c1,e,B.cx)
k.nE(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bw(A.bX(B.cM,m.gb9(m)+8,l),B.fR)
l=new A.ar(B.S,B.Q,B.V,B.X,B.T)
l.r=D.qr.gp(0)
a4.aq(j,l)
l=new A.ar(B.S,B.Q,B.V,B.X,B.T)
l.r=D.lG.gp(0)
l.b=B.ab
l.c=1.5
a4.aq(j,l)
l=k.b
m=l.c
l=l.a.c
k.a4(a4,new A.r(-m/2,4-l.gb9(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
C.ilt(a4,new A.r(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dS,(w+1)/2)
h=A.bX(new A.r(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aG($.R().r,B.ai,e,e,A.a([],a3))
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
m.r=D.a_9.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ar(B.S,B.Q,B.V,B.X,B.T)
m.r=D.BV.gp(0)
m.c=1.4
a4.ah(new A.r(t,a2),new A.r(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=B.np.gp(0)
a4.aD(new A.a3(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.bmp.gp(0)
a4.c1(new A.a3(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ar(B.S,B.Q,B.V,B.X,B.T)
m.r=g.e.j(B.h.D(s,0,1)).gp(0)
a4.O(new A.r(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.fz(e,B.cx,e,e,e,A.cR(e,e,e,e,e,e,e,e,e,A.m(e,e,B.cV.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,E.DS,e,e),"+"+a2),B.a7,B.c0,e,B.dJ,B.c1)
k.ep()
k.a4(a4,new A.r(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aE(d){return!0}}
C.QV.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b3(v,v,v,new C.aCd(w.c,w.f,v),B.az),s=A.l(10),r=A.K(B.bE,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cS,A.o(v,A.d(w.d,v,1,B.a2,v,v,v,D.fxP,v,v,v),B.f,v,v,new A.n(B.c,v,r,s,v,v,B.n),v,v,v,v,B.n3,v,v,v)],x.p),B.l,v,B.e,B.N,0,B.p),v)},
ga_(d){return this.e}}
C.aCd.prototype={
a4(d,e){var w=e.ej(B.J),v=e.gdj(),u=this.c?0.8:0
return A.hlA(d,w,v*0.44,this.b,0,u)},
aE(d){return d.b!==this.b||d.c!==this.c}}
C.aAG.prototype={}
C.avv.prototype={
T(){return new C.avw(A.S(x.S,x.cq),null,null)},
gd1(){return this.d}}
C.avw.prototype={
gkT(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hK5(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gaG_(){var w=this.z
return w===$?this.z=this.XJ(0):w},
gj2(){var w,v=this.Q
if(v===$){w=this.gkT()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c1(w,-1,!1,x.S)}return v},
XJ(d){var w,v,u,t,s=this.gkT()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aAG(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aAG(v[t],u[t],-1))
v=new A.e_()
v.cU(this.a.e*31+d)
B.d.e0(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.dp(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eN$
u.b=!1
B.d.a8(u.a)
u=u.goG()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dV$.a.a8(0)
v.qK()}this.bxp()},
cST(d,e){var w,v,u,t,s,r=this
if(d>=r.gj2().length||r.gj2()[d]!==-1||B.d.q(r.gj2(),e))return
w=r.gaG_()[e]
v=r.gkT()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cs_(r,e,w,v))
A.cy(B.lN,new C.cs0(r))
return}++r.r
u=A.bo(null,B.hz,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.cs1(r,d,e,w,v))
u.cs(0)},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkT()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cC(n,0,new C.cs2())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cs3(t,r))
w=5
return A.b(C.BT(t.a.d,r),$async$kO)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BU(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kO)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cs4())
w=1
break
case 4:for(o=t.as,n=new A.dp(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eN$
p.b=!1
B.d.a8(p.a)
p=p.goG()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dV$.a.a8(0)
q.qK()}o.a8(0)
t.m(new C.cs5(t))
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.as(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.q2,p,p,p),p,p,p)
v=r.f
v=A.as(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Wc,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tE(q,A.cv(A.a([D.agt,w,v,B.aO,new C.Iz(u,t,r.ch,p),B.aO,A.as(C.uw("Back to the games",new C.crW(d),B.cV,B.kc,D.fC),p,p,p)],x.p),p,p,B.ac,p,p,B.ah,!1),B.f7,p)}w=r.gkT()
v=r.e
s=w[v]
return new C.tE(q,new A.D(B.t9,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,B.aWW,B.K,p,p),A.E(A.ci(new C.crX(r,s)),1)],x.p),B.l,p,B.e,B.i,0,B.p),p),B.f7,p)}}
C.bdm.prototype={
a4(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cS6(),A.T(b2).k("Y<1>")).gJ(0),b4=a9.b,b5=b4.a5(0,B.K_)
$.R()
w=A.L()
w.r=D.lH.j(0.18+0.1*b3).gp(0)
b6.O(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a5(0,D.etl)
u=A.L()
u.r=B.qt.j(0.5).gp(0)
u.c=10
u.d=B.bG
b6.ah(new A.r(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.e6.aA(0,B.h.D(b2[p],0,1))
l=$.R().r
k=A.a([],s)
j=new A.aG(l,B.ai,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ab()
o=new A.ce((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.ak(n)
j.ab()
if(m<1)for(o=new A.aG(l,j.b,j.c,b0,A.bs(k,!0,r)),n=A.a([],q),i=new A.uR(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bi(A.jH(b1));--h
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
$.R()
a1=new A.ar(B.S,B.Q,B.V,B.X,B.T)
a1.r=B.aT.gp(0)
a1.b=B.ab
a1.c=3
b6.af(new A.aG(l,d,b0,new A.b7([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aG(l,j.b,j.c,b0,A.bs(k,!0,r)),n=A.a([],q),k=new A.uR(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bi(A.jH(b1));--a0
k.jP()
a1=n[a0].b
a1===$&&A.c()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.R()
a4=new A.ar(B.S,B.Q,B.V,B.X,B.T)
a4.r=D.GJ.gp(0)
a4.b=B.ab
a4.c=h
a4.d=B.bG
b6.af(new A.aG(l,a2,b0,new A.b7([new A.BQ(k,a0),0,a1*m,!0]),a3),a4)
k.jP()
a4=n[a0].b
a4===$&&A.c()
a4=a4.a.length()
k.jP()
a5=n[a0].W9(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bX(new A.r(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.T)
a3.r=B.be.gp(0)
b6.c1(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.jM(D.fxi,B.a7,B.c0,new A.ji(1),b0,b0,b0,b0,B.c1,b0,B.cx)
a8.ep()
a8.a4(b6,new A.r(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aE(d){return!0}}
C.azr.prototype={
T(){return new C.azs(A.aR(x.S))},
gd1(){return this.d}}
C.azs.prototype={
gkT(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hL_(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
Z(){this.a3()
this.b9Y()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a2()},
b9Y(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.dh(B.t4,new C.cGZ(this))},
bqZ(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkT()[v.e]
if(w.e[d]===w.b)v.m(new C.cH6(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cH7(v,d))
A.cy(B.iR,new C.cH8(v))}},
cYm(){var w=this
if(!w.as&&w.f<w.gkT()[w.e].d.length)w.m(new C.cH9(w))},
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
t.m(new C.cHa(t,s))
w=5
return A.b(C.BT(t.a.d,s),$async$kO)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BU(q.d,q.c.a,"who",t.r),$async$kO)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cHb())
w=1
break
case 4:t.m(new C.cHc(t))
t.b9Y()
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.as(A.d(""+a0.w+" of "+a0.gkT().length+" guessed",a2,a2,a2,a2,a2,a2,B.q2,a2,a2,a2),a2,a2,a2)
v=A.as(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Wc,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tE(a1,A.cv(A.a([D.bfk,w,v,B.aO,new C.Iz(u,t,a0.ax,a2),B.aO,A.as(C.uw("Back to the games",new C.cH0(a3),B.cV,B.kc,D.fC),a2,a2,a2)],x.p),a2,a2,B.ac,a2,a2,B.ah,!1),B.f7,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkT()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.Lk,B.K,a2,a2),B.U,A.as(A.lB(new C.cH1(a0,r),a2,B.b0,B.hz,a2,a2,new A.bt(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ax(B.cV,2,B.r,-1)
k=o+1
w.push(new A.ra(new A.bt(0,1,u),new C.cH2(),A.o(a2,new A.c8(B.aM,B.e,B.i,B.l,a2,B.p,a2,0,A.a([new A.qI(A.d(""+k,a2,a2,a2,a2,a2,a2,B.o6,a2,a2,a2),D.lG,a2,12,a2),B.as,new A.bz(1,B.bd,A.d(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fK7,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.n(D.qr,a2,new A.bG(l,l,l,l),new A.be(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cy,B.bl,a2,a2,a2),B.b0,B.iR,a2,new A.bl("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.as(A.bP(!1,D.haB,a2,a2,!0,a2,a2,a2,a0.gcYl(),a2,a2),a2,a2,a2))
w.push(B.P)
if(a0.as){u=D.lH.j(0.2)
q=A.l(16)
p=A.K(D.lH,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fS,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.o(a2,A.x(A.a([m,B.U,C.uw(v,a0.gqt(a0),B.cV,B.jt,D.fC)],t),B.l,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.n(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bH,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dp:B.cV.j(0.2)
g=new A.aP(16,16)
l=new A.ax(n.q(0,o)?B.fi:B.cV,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bV:B.c
d=n.q(0,o)?B.xD:a2
t.push(new A.ra(new A.bt(0,i,u),new C.cH3(),A.ay(a2,A.o(a2,A.d(f,a2,a2,a2,a2,a2,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.afC,new A.n(h,a2,new A.bG(l,l,l,l),new A.be(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jr,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cH4(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b0,B.mf,a2,new A.bl("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.c_(B.fU,t,B.br,a2,10,10))}return new C.tE(a1,A.cv(w,a2,a2,B.ani,a2,a2,B.ah,!1),B.f7,a2)}}
C.aAq.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.aHJ.prototype={
aX(){this.b8()
this.b6()
this.dJ()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdD())
w.ba$=null
w.a2()}}
C.ag9.prototype={
arx(d){},
as2(){var w=this,v=w.q9(new C.f9S(w))
v.fX(0)
w.Mf$!==$&&A.aQ()
w.Mf$=v}}
C.aLz.prototype={
gbno(d){var w=this.c
return B.a.aB(w,0,Math.min(this.d,w.length))},
Wh(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.dh(B.a0M,new C.fk6(w))},
btm(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.amB.prototype={
T(){return new C.amC(new C.amL(),A.a([],x.t),new A.eF(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.amC.prototype={
gN5(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFh(w.c,10,w.e,!0)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghe(d){var w,v=this,u=v.e
if(u===$){w=C.Nd(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqB(){var w=this.r
return w===$?this.r=new C.aLz(new C.bTV(this)):w},
gaqm(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gN5()[v].c)u.push(1)
return u.length},
gbmI(){var w=this.ghe(0)
return w.gzv()==null?"Elder":B.a.i(w.gzv().b)},
Z(){this.a3()
this.as2()},
t(){var w,v=this
v.gqB().t()
v.f.t()
w=v.Mf$
w===$&&A.c()
w.t()
w=v.qg$
w.V$=$.aw()
w.R$=0
v.bx4()},
cMZ(){var w=this
w.m(new C.bTS(w))
w.gqB().Wh(w.gN5()[w.x].a)},
Lo(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqB()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qg$.a
v.ax=u
v.ay=u+1
v.m(new C.bTQ())
A.cy(B.hz,new C.bTR(v))},
bqV(){var w=this.gaqm(0)/this.gN5().length*100
if(w>=90)return D.f4m
if(w>=75)return D.f2m
if(w>=60)return D.eTY
if(w>=45)return D.eXo
return D.eOm},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cvq()
w=A.bS(0,new A.e5(A.b3(m,m,m,new C.bu6(n,n.qg$),B.az),m),0,0,0)
if(!n.Q){v=D.qr.j(0.96)
u=A.l(20)
t=A.K(B.cV,B.r,3)
u=A.o(m,A.x(A.a([A.d("Elder "+n.gbmI()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aXQ,B.K,m,m),B.U,C.uw("Start the test",n.gC6(),B.cV,B.jb,D.fC)],x.p),B.l,m,B.e,B.N,0,B.p),B.f,m,m,new A.n(v,m,t,u,m,m,B.n),m,m,m,m,B.bH,m,m,m)
v=u}else{v=n.x
u=n.gN5()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aXS,m,m,m)
if(n.Q){t=n.gqB()
t=t.d<t.c.length}else t=!1
if(t)u=D.fpM
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ax(D.BV,4,B.r,-1)
s.push(A.ay(m,A.o(m,A.d(q[r],m,m,m,m,m,m,D.fB4,B.K,m,m),B.f,m,D.afC,new A.n(D.bif,m,new A.bG(o,o,o,o),new A.be(p,p,p,p),m,m,B.n),m,m,m,m,B.OK,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bTT(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.c_(B.fU,s,B.br,new A.bl("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.oB(u,B.n_,A.pV(),B.b0,B.b0,A.LP())],x.p),B.l,m,B.e,B.N,0,B.p)
v=u}return new C.tE("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.f7,m)},
cvq(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bqV(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gN5()[v].c)g.push(v)
u=A.l(22)
t=A.K(B.cV,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fFB,B.K,i,i)
r=A.d("Signed by Elder "+j.gbmI(),i,i,i,i,i,i,D.fEe,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fJs,i,i,i),D.eG1],q)
o=A.d(h.b,i,i,i,i,i,i,D.fLp,i,i,i)
n=j.gaqm(0)
m=j.gN5()
u=A.o(i,A.x(A.a([D.fWJ,B.aw,s,r,B.U,new A.an(B.A,i,B.ad,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.acD,i,i,i),B.P,D.au9],q),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(D.qr,i,t,u,i,i,B.n),i,i,i,i,B.fu,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.Iz(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aO,D.hbF,B.P],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ax(B.bw,1,B.r,-1)
p=m[v]
u.push(A.o(i,A.x(A.a([A.d(p.a,i,i,i,i,i,i,B.h6,i,i,i),B.aw,A.d("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fGM,i,i,i),A.d(p.d,i,i,i,i,i,i,D.fJ3,i,i,i)],q),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.dp,i,new A.bG(k,k,k,k),new A.be(r,r,r,r),i,i,B.n),i,i,i,B.cy,B.bl,i,i,i))}B.d.u(s,u)}s.push(B.aB)
s.push(A.as(C.uw("Back to the games",new C.bTM(j),B.cV,B.kc,D.fC),i,i,i))
return new C.tE("Village School",A.cv(s,i,i,B.bT,i,i,B.ah,!1),B.f7,i)}}
C.bu6.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qg$.a
a0.GE(e.f.MR(a1))
w=C.hgJ(a1)
v=a0.c
J.br(v.save())
v.translate(w.a,w.b)
a0.bV(0,w.c)
if(e.Q){u=e.gqB()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.d08[s]-6
$.R()
r=new A.ar(B.S,B.Q,B.V,B.X,B.T)
r.r=D.Gu.gp(0)
a0.aD(new A.a3(u,340,u+12,450),r)}u=A.bw(D.aaC.cr(10),B.i5)
$.R()
r=A.L()
r.r=D.BV.gp(0)
a0.aq(u,r)
r=A.bw(D.aaC,B.is)
u=A.L()
u.sam(A.jz(new A.r(30,96),new A.r(420,346),D.dko,f,B.x,f))
a0.aq(r,u)
q=new A.e_()
q.cU(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bX(new A.r(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ar(B.S,B.Q,B.V,B.X,B.T)
r.r=B.c.j(0.025).gp(0)
a0.c1(o,r)}u=A.L()
u.r=E.ak5.gp(0)
a0.aD(new A.a3(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.aD(D.fh8,u)
u=A.L()
u.r=B.bL.gp(0)
a0.aD(D.fhc,u)
u=A.bw(D.fh2,B.hg)
r=A.L()
r.r=D.a_9.gp(0)
a0.aq(u,r)
n=B.h.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqB().gbno(0)
m=A.fz(f,B.cx,f,7,f,A.cR(f,f,f,f,f,f,f,f,f,D.fNI,u+(t?"|":"")),B.a7,B.c0,f,B.dJ,B.c1)
m.nE(346)
J.br(v.save())
u=A.i3(D.aaC)
r=$.ma()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.i3(new A.a3(30+390*n,96,420,346)),r[1],!0)
m.a4(a0,new A.r(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bw(new A.a3(u,r,u+40,r+90),B.fR)
u=A.L()
u.r=D.byq.gp(0)
a0.aq(r,u)}}else{m=A.fz(f,B.cx,f,f,f,D.fxy,B.K,B.c0,f,B.dJ,B.c1)
m.nE(340)
m.a4(a0,new A.r(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.h.F(u+p/8,1)
o=B.o.F(e.gqB().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.S,B.Q,B.V,B.X,B.T)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.O(new A.r(70+o+k*6,166+l*70),1.6,j)}u=e.ghe(0).gzv()
i=(u==null?f:u.c)===D.oB?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.f9T(d,a0,i,t,h,D.euv)),new A.y(520,new C.f9U(a0,d,t)),new A.y(575,new C.f9V(a0,d,t)),new A.y(585,new C.f9W(this,a0,d,t)),new A.y(615,new C.f9X(this,t,a0,d,h))],x.E)
B.d.b0(g,new C.f9Y())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cdm(d,e){var w,v,u,t,s,r,q,p=$.R(),o=A.a([],x.v),n=new A.aG(p.r,B.ai,null,null,o)
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
C.amz.prototype={
T(){return new C.amA(new C.amL(),A.S(x.S,x.i),new A.eF(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.amA.prototype={
gkT(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hJW(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gj2(){var w=this.z
return w===$?this.z=this.FS(0):w},
gaMf(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FS(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cj(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FS(0):r).length);++v}s.Q=w
r=w}return r},
FS(d){var w,v,u,t,s=this.gkT()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e3(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e_()
u.cU(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f1(u,new C.bTy())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a3()
this.as2()},
t(){var w,v=this
v.e.t()
w=v.Mf$
w===$&&A.c()
w.t()
w=v.qg$
w.V$=$.aw()
w.R$=0
v.bx3()},
arx(d){var w,v,u,t,s,r=this,q=r.gj2().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cj(u===$?r.z=r.FS(0):u,v)
s=r.gaMf()
s[v]=s[v]+(450*(t+0.5)/q-r.gaMf()[v])*Math.min(1,w)}},
d2J(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj2().length)return
w=v.y
if(w===-1){v.m(new C.bTJ(v,d))
return}if(w===d){v.m(new C.bTK(v))
return}v.m(new C.bTL(v,B.d.cj(v.gj2(),v.y),d,B.d.cj(v.gj2(),d)))},
cNG(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FS(0):u).length))break
t=s.gkT()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FS(0):u)[v]]===v);++v}s.m(new C.bTE(s,B.d.cA(w,new C.bTF())))},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkT().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bTG(t,s))
w=5
return A.b(C.BT(t.a.d,s),$async$kO)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BU(q.d,q.c.a,"lineup",t.r*10),$async$kO)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bTH())
w=1
break
case 4:t.m(new C.bTI(t))
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.as(A.d(""+l.r+" of "+l.gkT().length+" lines right",k,k,k,k,k,k,B.q2,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tE("Line Up",A.cv(A.a([D.agt,w,B.aO,new C.Iz(v,u,l.ch,k),B.aO,A.as(C.uw("Back to the games",new C.bTA(d),B.cV,B.kc,D.fC),k,k,k)],x.p),k,k,B.ac,k,k,B.ah,!1),B.f7,k)}w=A.a([],x.t)
for(t=0;v=l.gkT(),t<v[l.f].d.length;++t)w.push(t)
B.d.b0(w,new C.bTB(l))
u=A.bS(0,A.ci(new C.bTC(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aXS,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fG2,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fIi,B.K,k,k)],q),B.l,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.l(16)
n=l.ax
m=A.K(n?D.lH:B.np,B.r,2)
r.push(A.o(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bTD(l),x.cM).aN(0,", then ")+".",k,k,k,k,k,k,D.fKv,k,k,k),B.f,k,k,new A.n(p,k,m,o,k,k,B.n),k,k,k,B.da,B.bl,k,k,1/0))}if(!l.at)r.push(C.uw("That is my line!",l.gcNF(l),B.cV,B.hc,D.fC))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uw(w,l.gqt(l),B.cV,B.jt,D.fC))}return new C.tE("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ao(12,A.x(r,B.l,k,B.e,B.N,0,B.p),k,k,12,12,k,k)],q),k),B.f7,k)}}
C.bkx.prototype={
a4(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qg$.a
c7.GE(c5.e.MR(c8))
w=C.hgJ(c8)
v=c7.c
J.br(v.save())
v.translate(w.a,w.b)
c7.bV(0,w.c)
u=c5.gj2().length
t=$.R().r
s=x.v
r=new A.aG(t,B.ai,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.ce(225,500,440,470))
q=A.L()
q.r=D.a_9.gp(0)
q.b=B.ab
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aG(t,B.ai,c4,c4,l)
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
m=new A.ar(B.S,B.Q,B.V,B.X,B.T)
m.r=[B.cV,B.np,D.lH,B.aH][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b20(c7,"OLDEST",D.evt,B.cV)
this.b20(c7,"YOUNGEST",D.euW,B.be)
t=A.bw(D.fgX,B.fR)
s=A.L()
s.r=D.Gu.gp(0)
c7.aq(t,s)
s=A.bw(D.fgW,B.is)
t=A.L()
t.r=D.BV.gp(0)
c7.aq(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b0(t,new C.dtE())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.cj(a1===$?c5.z=c5.FS(0):a1,f)
o=c5.gaMf()[f]
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
if(a3){$.R()
a9=new A.ar(B.S,B.Q,B.V,B.X,B.T)
a9.r=B.cV.j(0.22+0.1*Math.sin(e)).gp(0)
c7.O(new A.r(o,520),54,a9)}a9=D.dof[B.o.F(b0,6)]
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
else b9=a3?D.exx:c4
if(b1)c0=new A.r(3+b2*8,-56)
else if(h&&a7)c0=D.aNx
else c0=a3?new A.r(30,-104+Math.sin(e)*5):c4
C.SP(c7,new A.r(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.K1,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.jM(new A.ev(a8,c4,c4,B.cN,c4,c4,c4,c4,c4,c4,D.fDJ),B.a7,B.c0,new A.ji(1),"\u2026",c4,1,c4,B.c1,c4,B.cx)
c1.nE(q)
c2=A.bw(A.bX(new A.r(o,650),24,c1.b.c+16),B.fR)
$.R()
a8=new A.ar(B.S,B.Q,B.V,B.X,B.T)
if(a6)a9=B.iB
else a9=a7?B.rY:D.qr
a8.r=a9.gp(0)
c7.aq(c2,a8)
a8=new A.ar(B.S,B.Q,B.V,B.X,B.T)
if(a6)a9=D.lH
else a9=a7?B.np:D.lG
a8.r=a9.gp(0)
a8.b=B.ab
a8.c=2
c7.aq(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a4(c7,new A.r(o-a9/2,650-a8.gb9(a8)/2))
c3=new A.jM(new A.ev(""+(a2+1),c4,c4,B.cN,c4,c4,c4,c4,c4,c4,D.fE2),B.a7,B.c0,new A.ji(1),c4,c4,c4,c4,B.c1,c4,B.cx)
c3.ep()
c3.a4(c7,new A.r(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.h.F(p*53+Math.sin(c5+p)*20,450)
q=B.h.F(t+p*37,420)
J.br(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bX(B.J,4,8)
$.R()
m=new A.ar(B.S,B.Q,B.V,B.X,B.T)
m.r=[B.cV,B.np,D.lH,B.aH,B.c][B.o.F(p,5)].gp(0)
c7.aD(q,m)
v.restore()}v.restore()},
b20(d,e,f,g){var w,v,u=null,t=A.fz(u,B.cx,u,u,u,A.cR(u,u,u,u,u,u,u,u,u,A.m(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,E.DS,u,u),e),B.a7,B.c0,u,B.dJ,B.c1)
t.ep()
w=t.b
v=w.c
w=w.a.c
t.a4(d,f.aJ(0,new A.r(v/2,w.gb9(w)/2)))},
aE(d){return!1}}
C.a2p.prototype={
a7(){return"_Trip."+this.b}}
C.amv.prototype={
T(){return new C.amw(D.XX,new A.eF(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.amw.prototype={
gDE(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFh(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghe(d){var w,v=this,u=v.e
if(u===$){w=C.Nd(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqB(){var w=this.f
return w===$?this.f=new C.aLz(new C.bTk(this)):w},
gUf(){var w=this.ghe(0)
return w.gzv()==null?"Grandma":B.a.i(w.gzv().b)},
Z(){this.a3()
this.as2()},
t(){var w,v=this
v.gqB().t()
w=v.Mf$
w===$&&A.c()
w.t()
w=v.qg$
w.V$=$.aw()
w.R$=0
v.bx2()},
arx(d){var w,v,u,t=this
if(t.r!==D.aeo)return
w=B.dK.aA(0,B.h.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDE()
if(v+1>=u.length){t.r=D.aep
t.Xe()}else{++t.w
t.ay=!1
t.r=D.XY
t.gqB().Wh(u[t.w].a)}if(t.c!=null)t.m(new C.bTi())}},
Xe(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Xe=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqB().Wh("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDE().length
r=C.bHB(t,u.z,s)
u.as=r
w=2
return A.b(C.BT(u.a.d,r),$async$Xe)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BU(s.d,s.c.a,"journey",u.x*10),$async$Xe)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bTc())
return A.h(null,v)}})
return A.i($async$Xe,v)},
bse(){this.aV_()},
aV_(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.aeo
if(w.c!=null)w.m(new C.bTd())},
Lo(d){var w,v,u,t,s=this
if(s.r!==D.XY)return
w=s.gDE()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bTh(s,d,v))
u=s.gqB()
t=s.w
u.Wh(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cSS(){if(this.r!==D.Bs)return
this.aV_()},
B(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.e5(A.b3(s,s,s,new C.bjY(t,t.qg$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDE().length;++w){v=t.w
if(w<v||t.r===D.aep)v=B.cV
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(new A.bz(1,B.bd,A.o(s,s,B.f,s,s,new A.n(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,B.wM,s,s,s,s),s))}p.push(B.bn)
p.push(D.fYn)
return new C.tE("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ao(10,t.cn1(),s,s,10,10,s,s)],q),s),B.f7,s)},
cn1(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bTg(o),l=D.qr.j(0.96),k=A.l(22),j=A.K(B.cV,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gUf()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aXQ,B.K,n,n),B.U,C.uw("Start the journey",o.gbsd(),B.cV,D.bTe,D.fC)],x.p),B.l,n,B.e,B.N,0,B.p)
break
case 3:w=D.beV
break
case 1:w=o.w
v=o.gDE()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ax(D.lG,2.5,B.r,-1)
t.push(A.ay(n,A.o(n,A.d(r[s],n,n,n,n,n,n,D.aXb,B.K,n,n),B.f,n,D.afJ,new A.n(D.alf,n,new A.bG(p,p,p,p),new A.be(q,q,q,q),n,n,B.n),n,n,n,n,K.wG,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bTe(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.P,A.c_(B.bI,t,B.br,n,8,8)],u),B.E,n,B.e,B.N,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDE().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.P,new A.bK(B.a9,n,n,C.uw(v,o.gcSR(),B.cV,B.jt,D.fC),n)],x.p),B.E,n,B.e,B.N,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gUf()),B.P,A.d(""+o.x+" of "+o.gDE().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aXt,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aRD(v)
u=C.aRD(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.acD,n,n,n))}w.push(B.P)
w.push(A.as(C.uw("Back to the games",new C.bTf(o),B.cV,B.kc,D.fC),n,n,n))
w=A.x(w,B.E,n,B.e,B.N,0,B.p)
break
default:w=n}return A.o(n,w,B.f,n,n,new A.n(l,n,j,k,D.aEH,n,B.n),n,n,n,n,B.bl,n,n,n)}}
C.bjY.prototype={
a4(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qg$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDE(),d0=B.h.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.aeo,d2=c7*0.5
c8=A.ap(D.bjM,D.buE,d0)
c8.toString
w=A.ap(D.Zi,B.aiR,d0)
w.toString
v=A.ap(B.us,D.bt_,d0)
v.toString
$.R()
u=A.L()
t=x.O
u.sam(A.jz(B.J,new A.r(0,d2),A.a([c8,w,v],t),B.a5l,B.x,c3))
d3.aD(new A.a3(0,0,0+c6,0+c7),u)
s=new A.r(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.sam(A.wg(s,60,A.a([D.bto,B.L],t),c3,B.x,c3,c3,0))
d3.O(s,60,u)
u=A.L()
u.r=B.Zw.gp(0)
d3.O(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.h.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dE6[o]
$.R()
u=new A.ar(B.S,B.Q,B.V,B.X,B.T)
u.r=B.c.j(0.75).gp(0)
d3.O(new A.r(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.R()
j=A.a([],m)
i=new A.aG(k.r,B.ai,c3,c3,j)
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
$.R()
k=new A.ar(B.S,B.Q,B.V,B.X,B.T)
k.r=A.ap(l===0?D.bii:D.bxP,D.bnr,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cdn(d3,new A.r(B.h.F(B.h.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.R()
w=A.L()
v=A.ap(D.akp,D.GJ,d0)
v.toString
w.sam(A.jz(new A.r(0,d2),new A.r(0,c7),A.a([v,D.btq],t),c3,B.x,c3))
d3.aD(new A.a3(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.bmF.gp(0)
d3.aD(new A.a3(0,a0,c6,a1),w)
w=A.L()
w.r=D.bxq.gp(0)
d3.aD(new A.a3(0,a0-3,c6,a0),w)
for(q=-B.h.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.S,B.Q,B.V,B.X,B.T)
u.r=E.Nf.gp(0)
d3.aD(new A.a3(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.R()
b2=new A.ar(B.S,B.Q,B.V,B.X,B.T)
b2.r=D.bhX.gp(0)
d3.aD(new A.a3(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aG(b1.r,B.ai,c3,c3,b2)
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
b0=new A.ar(B.S,B.Q,B.V,B.X,B.T)
b0.r=D.bvx.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ar(B.S,B.Q,B.V,B.X,B.T)
b1.r=D.fC.gp(0)
d3.aD(new A.a3(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ar(B.S,B.Q,B.V,B.X,B.T)
b0.r=D.Gu.gp(0)
d3.aD(new A.a3(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bw(new A.a3(b0,a4,b0+60,a5),B.jy)
b0=new A.ar(B.S,B.Q,B.V,B.X,B.T)
b0.r=D.byW.gp(0)
d3.aq(b5,b0)
b0=new A.ar(B.S,B.Q,B.V,B.X,B.T)
b0.r=D.BV.gp(0)
b0.b=B.ab
b0.c=2
d3.aq(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.jM(new A.ev(b6,c3,c3,B.cN,c3,c3,c3,c3,c3,c3,D.fC9),B.a7,B.c0,new A.ji(1),c3,c3,c3,c3,B.c1,c3,B.cx)
b7.ep()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a4(d3,new A.r(b4-b1/2,a2-b0.gb9(b0)/2))
if(a7)b8=c4.r===D.aep
else if(r===c4.w){b0=c4.r
b0=b0===D.XY||b0===D.Bs
b8=b0}else b8=!1
if(a7){b0=c4.ghe(0).gzv()
b9=(b0==null?c3:b0.c)===D.oB?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqB()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.Bs
b0=c0?C.hFX(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.XY?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.r(40,-110+Math.sin(g)*10)
else a7=c0?new A.r(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.SP(d3,new A.r(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.r(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bJl(d3,new A.r(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.h.F(w+r/7,1)
$.R()
t=new A.ar(B.S,B.Q,B.V,B.X,B.T)
t.r=D.bwU.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.XX)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.h.F(w+r/5,1)
t=Math.sin(r+c8)
$.R()
m=new A.ar(B.S,B.Q,B.V,B.X,B.T)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.Bs&&c4.ax){b7=A.fz(c3,B.cx,c3,c3,c3,A.cR(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.m(c3,c3,B.cV,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,Q.J1,c3,c3),"BEEP BEEP!"),B.a7,B.c0,c3,B.dJ,B.c1)
b7.ep()
b7.a4(d3,new A.r(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cdn(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.bsU,D.blY,g)
o.toString
if(f){w=new A.aG($.R().r,B.ai,null,null,A.a([],x.v))
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
t.r=D.a_G.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d4a[r]
p=new A.ar(B.S,B.Q,B.V,B.X,B.T)
p.r=D.a_G.gp(0)
p.c=4
p.d=B.bG
d.ah(new A.r(w,t),new A.r(v+q*24,s),p)
p=new A.ar(B.S,B.Q,B.V,B.X,B.T)
p.r=o.gp(0)
d.O(new A.r(v+q*26,u),10,p)}}else{w=e.a5(0,D.exu)
$.R()
v=A.L()
v.r=D.bhZ.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bX(e.a5(0,D.exv),16,60)
w=A.L()
w.r=o.gp(0)
d.c1(v,w)}},
bJl(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.XX?0.045:0,a1=a2.c
J.br(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jr(0,a0)
for(w=0;w<2;++w){v=D.dw7[w]
u=d.ay&&d.r!==D.XX&&v>0
J.br(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.R()
s=new A.ar(B.S,B.Q,B.V,B.X,B.T)
s.r=D.bxG.gp(0)
a2.O(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.S,B.Q,B.V,B.X,B.T)
s.r=D.bpB.gp(0)
a2.O(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.S,B.Q,B.V,B.X,B.T)
q.r=B.bh.gp(0)
q.c=2
a2.ah(B.J,new A.r(s*9,t*9),q)}a1.restore()}p=A.r_(D.fhj,B.fR,B.fR,B.ir,B.hW)
$.R()
t=A.L()
t.sam(A.jz(D.etB,B.a9w,D.dlL,B.a5l,B.x,f))
a2.aq(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.S,B.Q,B.V,B.X,B.T)
s.r=D.dfD[B.o.F(o,4)].gp(0)
a2.aD(new A.a3(t,-26,t+10,-19),s)}n=d.r===D.Bs&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a3(s,-66,q,-36)
J.br(a1.save())
a1.clipRRect(A.mU(A.bw(l,B.pT)),$.my(),!0)
k=new A.ar(B.S,B.Q,B.V,B.X,B.T)
k.r=D.Zi.gp(0)
a2.aD(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.Bs?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.SP(a2,new A.r(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aNo,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bw(l,B.pT)
i=new A.ar(B.S,B.Q,B.V,B.X,B.T)
i.r=D.alh.gp(0)
i.b=B.ab
i.c=2
a2.aq(j,i)}d=A.bw(D.Vj,B.pT)
t=A.L()
t.r=D.Zi.gp(0)
a2.aq(d,t)
J.br(a1.save())
a1.clipRRect(A.mU(A.bw(D.Vj,B.pT)),$.my(),!0)
C.SP(a2,new A.r(D.Vj.gbE().a,-10),0,0,0.7,-0.1,f,f,D.aNo,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bw(D.Vj,B.pT)
d=A.L()
d.r=D.alh.gp(0)
d.b=B.ab
d.c=2
a2.aq(t,d)
d=A.L()
d.r=B.Cj.gp(0)
a2.O(D.evJ,4,d)
d=A.L()
d.r=D.Gu.gp(0)
a2.aD(D.fis,d)
for(w=0;w<3;++w){v=D.dw9[w]
d=A.bw(new A.a3(v,-96,v+28,-79),B.jy)
t=new A.ar(B.S,B.Q,B.V,B.X,B.T)
t.r=D.GJ.gp(0)
a2.aq(d,t)}a1.restore()},
aE(d){return!1}}
C.aCg.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.bhv.prototype={}
C.aCi.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.bhw.prototype={}
C.aCj.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.bhx.prototype={}
C.a6U.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b3(w,w,w,new C.bk4(w),B.az),w)}}
C.bk4.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.du1[B.o.F(n,6)]
k=$.R()
j=new A.ar(B.S,B.Q,B.V,B.X,B.T)
j.r=l.gp(0)
d.aD(new A.a3(m,0,m+v,u),j)
if(B.o.F(n,3)===0){j=A.a([],o)
i=new A.aG(k.r,B.ai,null,null,j)
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
k=new A.ar(B.S,B.Q,B.V,B.X,B.T)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aE(d){return!1}}
C.tE.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aH(w,w,w,w,B.QD,w,w,w,new C.bTb(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.fzr,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c5(w,D.Z2,A.o(w,A.bm(!0,A.x(A.a([D.c84,new A.D(D.bK4,A.A(u,B.l,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.baa,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.Iz.prototype={
B(d){var w=null,v=this.d,u=C.aRD(v),t=C.io8(v),s=B.c.j(0.08),r=A.l(18),q=A.K(B.cV.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fBV,w,w,w)],x.p)
if(this.e)p.push(D.ezV)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.h6,w,w,w))
if(t!=null)p.push(new A.D(B.uN,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.Fa,w,w,w),w))
return A.o(w,A.x(p,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.n(s,w,q,r,w,w,B.n),w,w,w,w,B.bH,w,w,w)}}
C.WA.prototype={
T(){return new C.bmS(A.S(x.N,x.S),B.o.F(Date.now(),1e5))},
cZL(d){return this.f.$1(d)},
ge3(){return this.d}}
C.bmS.prototype={
gTf(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a3()
this.PR()},
PR(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$PR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bTX(u.a.d),$async$PR)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.djM[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bTW(p,(o===$?u.d=q.c:o).a,r),$async$PR)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e3Y(u,n))
return A.h(null,v)}})
return A.i($async$PR,v)},
uH(d){return this.cq5(d)},
cq5(d){var w=0,v=A.j(x.H),u=this,t
var $async$uH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a6(t,!1).cf(A.eg(new C.e3Z(d),!1,null,x.H)),$async$uH)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.PR()
return A.h(null,v)}})
return A.i($async$uH,v)},
gb7m(){var w,v,u,t=C.Nd(this.gTf()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2Y(d){return this.cxk(d)},
cxk(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2Y=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].aj())
w=2
return A.b(u.a.cZL(r),$async$a2Y)
case 2:if(u.c!=null)u.m(new C.e4_(u,r))
return A.h(null,v)}})
return A.i($async$a2Y,v)},
Pa(d){return this.bS8(d)},
bS8(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Pa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hj5(t.gTf())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.MY("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a6(s,!1).cf(A.eg(new C.e3W(q),!1,null,r)),$async$Pa)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bk(j,new C.e3X(p))
o=s.length
B.d.ca(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2Y(A.cT(s,0,A.dA(2,"count",x.S),r).dq(0)),$async$Pa)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Pa,v)},
Ya(d,e){return this.bPH(0,e)},
bPH(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Ya=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cg(null,null,!0,null,new C.e3V(e),o,null,!0,!0,x.y),$async$Ya)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hj5(u.gTf()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2Y(o),$async$Ya)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Ya,v)},
aaC(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e3S(this,j):h
o=o?0.55:1
w=A.ap(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.l(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.ab(0,B.G,g.j(0.35),B.cz,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.W7,p,p,p),B.b4],s)
q=A.l(10)
r.push(A.o(p,A.d(i,p,p,p,p,p,p,D.fAk,p,p,p),B.f,p,p,new A.n(B.hQ,p,p,q,p,p,B.n),p,p,p,p,B.za,p,p,p))
return A.ay(p,A.d0(A.o(p,A.x(A.a([A.A(r,B.l,p,B.e,B.i,0,p,p),B.b4,A.d(e,p,2,p,p,p,p,D.fIb,p,p,p),B.cS,A.d(f,p,3,B.a2,p,p,p,D.fB2,p,p,p)],s),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.n(p,p,u,v,t,new A.a7(B.ay,B.aC,B.x,w,p,p),B.n),p,p,p,p,B.z1,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
XE(d,e,f,g,h,i){return this.aaC(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Nd(s.gTf()),p=s.gTf(),o=C.aRD(s.e),n=C.hj5(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e40(s),k=C.hJW(p,1).length,j=C.hK5(p,1).length,i=C.hL_(p,1).length,h=B.c.j(0.07),g=A.l(20),f=A.K(B.cV.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,B.acq,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fFF,r,r,r),a0=q.b.length,a1=x.p
g=A.o(r,A.A(A.a([e,B.bc,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.Wp,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.q2,r,r,r),D.h3H],a1),B.l,r,B.e,B.i,0,B.p)],a1),B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.n(h,r,f,g,r,r,B.n),r,r,r,r,B.bH,r,r,r)
f=s.XE("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aD,new C.e41(s,p),l.$1("kahoot"))
h=s.XE("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lG,new C.e42(s,p),l.$1("fire"))
a0=s.XE("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.wu,new C.e43(s,p),l.$1("catch"))
j=j!==0?new C.e46(s,p):r
j=s.aaC("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hN,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e47(s,p):r
i=s.aaC("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lF,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.XE("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.fn,new C.e48(s,p),l.$1("journey"))
k=k!==0?new C.e49(s,p):r
k=A.a([g,B.aO,D.h7J,B.P,A.l_(0.98,A.a([f,h,a0,j,i,e,s.aaC("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.ep,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.XE("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d6,new C.e4a(s,p),l.$1("school"))],a1),2,12,12,r,B.e0,!0),B.db,A.A(A.a([D.bLU,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fAo,r,r,r)],a1),B.l,r,B.e,B.i,0,r,r),B.P],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ax(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fPi,B.bc,new A.bz(1,B.bd,A.x(A.a([A.d(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hi,r,r,r),A.d(""+v.gaq0(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.Fa,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),r)],a1)
if(v.gaq0(0).length>=2){f=D.lH.j(0.2)
t=new A.ax(D.lH,1,B.r,-1)
g.push(A.ay(r,A.o(r,A.X(B.hd,D.lH,r,r,r,20),B.f,r,r,new A.n(f,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e4b(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cV.j(0.2)
t=new A.ax(B.cV,1,B.r,-1)
f=A.ay(r,A.o(r,A.X(B.jb,B.cV,r,r,r,20),B.f,r,r,new A.n(f,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e4c(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fi.j(0.2)
t=new A.ax(B.fi,1,B.r,-1)
B.d.u(g,A.a([B.bn,f,B.bn,A.ay(r,A.o(r,A.X(B.ej,B.fi,r,r,r,20),B.f,r,r,new A.n(e,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e4d(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.o(r,new A.c8(B.aM,B.e,B.i,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.n(i,r,new A.bG(u,u,u,u),new A.be(h,h,h,h),r,r,B.n),r,r,r,B.da,B.bl,r,r,r))}if(s.a.e){j=m?new C.e44(s):new C.e45(a2)
i=A.l(18)
h=A.K(m?B.cV:B.aT,B.r,2)
g=m?B.cV.j(0.12):B.dp
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.ay(r,A.o(r,A.as(A.d(f,r,r,r,r,r,r,A.m(r,r,m?B.cV:B.aF,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.n(g,r,h,i,r,r,B.n),r,r,r,r,B.Oy,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.h8F)
k.push(B.aB)
k.push(D.au9)
return new C.tE("Family Games \xb7 "+p.b,A.cv(k,r,r,D.bG4,r,r,B.ah,!1),B.f7,r)}}
C.a0i.prototype={
a7(){return"_KPhase."+this.b}}
C.amx.prototype={
T(){return new C.amy(D.b24)},
gd1(){return this.e}}
C.amy.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a2()},
fX(d){var w,v=this
v.m(new C.bTw(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.dh(B.fM,new C.bTx(v))},
aQt(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new C.bTm(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.dh(B.fg,new C.bTn(w))},
Lo(d){var w
if(this.d!==D.adT)return
w=this.at
if(w!=null)w.a1(0)
this.b7i(d)},
b7i(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.h.S(500+500*B.h.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bTs(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cy(B.t4,v.giC(v))},
cMi(d){var w=this
if(w.d!==D.Xu)return
if(w.e+1>=w.a.w.length)w.YX()
else{w.m(new C.bTt(w))
w.aQt()}},
YX(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$YX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bHB(p,u.w,t)
u.m(new C.bTp(u,s))
w=2
return A.b(C.BT(u.a.e,s),$async$YX)
case 2:r=e
t=u.a
w=3
return A.b(C.BU(t.e,t.f,t.r,u.f),$async$YX)
case 3:q=e
if(u.c!=null)u.m(new C.bTq(u,r,q))
return A.h(null,v)}})
return A.i($async$YX,v)},
cN7(){var w,v,u,t,s=this,r=s.a,q=new A.e_()
q.cU(r.w.length*31+B.a.gY(r.f))
w=s.a.w.length*900
v=A.a([new A.b4("You",s.f,!0)],x.bd)
r=A.B(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cT(r,0,A.dA(4,"count",x.S),A.T(r).c),u=r.$ti,r=new A.bR(r,r.gJ(0),u.k("bR<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b4(t,B.h.S(w*(0.35+q.ai()*0.5)),!1))}B.d.b0(v,new C.bTu())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b24===r){w=A.a([D.h45,B.U,A.d(s,t,t,t,t,t,t,B.Wz,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fAw,t,t,t))
w.push(B.aB)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.Bc,B.K,t,t))
w.push(B.e3)
w.push(C.uw("Play",u.geY(u),B.cV,B.hd,D.fC))
w=A.as(new A.D(B.eA,A.x(w,B.l,t,B.e,B.N,0,B.p),t),t,t,t)
break A}if(D.b25===r){w=A.as(A.d(""+u.z,t,t,t,t,t,t,D.fIJ,t,t,t),t,t,t)
break A}if(D.adT===r||D.Xu===r){w=u.csI()
break A}if(D.b26===r){w=u.cdo()
break A}w=t}return new C.tE(s,w,B.f7,t)},
csI(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.Xu,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aX0,j,j,j),B.b4],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.Lk,j,j,j))
g.push(B.as)
f=A.l(14)
g.push(A.o(j,A.d(""+k.f,j,j,j,j,j,j,B.iI,j,j,j),B.f,j,j,new A.n(B.bw,j,j,f,j,j,B.n),j,j,j,j,B.CE,j,j,j))
g=A.A(g,B.l,j,B.e,B.i,0,j,j)
f=A.l(6)
w=i?0:B.h.D(k.as/k.a.w[k.e].r,0,1)
f=A.bv(f,A.kc(B.bw,j,k.as<5?B.fi:B.cV,9,j,w,j),B.aq)
w=A.l(22)
v=A.K(B.cV,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.m(j,j,e?D.lH:B.np,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.P,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fzA,B.K,j,j)],h),B.l,j,B.e,B.N,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fKU,B.K,j,j)
w=A.E(A.o(j,A.as(u,j,j,j),B.f,j,j,new A.n(D.qr,j,v,w,j,j,B.n),j,j,j,j,B.fu,j,j,1/0),3)
v=A.a([],h)
for(u=k.giC(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bTr(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aEj[o]
m=new A.aP(16,16)
l=new A.ax(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.d(D.aED[o],j,j,j,j,j,j,D.fBv,j,j,j),B.as,new A.bz(1,B.bd,A.d(r[t],j,3,B.a2,j,j,j,D.fAt,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(B.asD)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.c_J)
v.push(A.ay(j,new A.T4(A.o(j,new A.c8(B.aM,B.e,B.i,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.n(n,j,new A.bG(l,l,l,l),new A.be(m,m,m,m),L.aCH,j,B.n),j,j,j,j,B.f2,j,j,j),p,B.b0,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.af,w,B.af,A.E(A.l_(1.45,v,2,10,10,j,B.e0,!1),4)],h)
if(i)h.push(D.eza)
return new A.D(B.a1j,A.x(h,B.l,j,B.e,B.i,0,B.p),j)},
cdo(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cN7(),m=x.p,l=A.a([D.beb,A.as(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.q2,o,o,o),o,o,o),A.as(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Wc,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cV.j(0.25):B.dp
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ax(s?B.cV:B.bw,1,B.r,-1)
q=A.d(w<3?D.dm1[w]:""+(w+1),o,o,o,o,o,o,B.mC,o,o,o)
s=s?B.u:B.O
l.push(A.o(o,new A.c8(B.aM,B.e,B.i,B.l,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.bz(1,B.bd,A.d(t.a,o,o,o,o,o,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.d(""+t.b,o,o,o,o,o,o,B.iI,o,o,o)],m),o),B.f,o,o,new A.n(v,o,new A.bG(r,r,r,r),new A.be(u,u,u,u),o,o,B.n),o,o,o,B.cy,B.eX,o,o,o))}l.push(B.U)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.Iz(m,v,p.CW,o))
l.push(B.aO)
l.push(A.as(C.uw("Back to the games",new C.bTo(p),B.cV,B.kc,D.fC),o,o,o))
return A.cv(l,o,o,B.fu,o,o,B.ah,!1)}}
C.Uf.prototype={
T(){return new C.amu(A.S(x.de,x.er))}}
C.amu.prototype={
gDj(){var w,v=this,u=v.d
if(u===$){w=C.hp5(v.a.c.aj())
v.d!==$&&A.bE()
v.d=w
u=w}return u},
glY(d){var w,v,u=this,t=u.e
if(t===$){w=u.gDj().b
v=$.aw()
u.e!==$&&A.bE()
t=u.e=new A.at(new A.bc(w,B.b7,B.aP),v)}return t},
cgp(d){return this.f.c_(0,d,new C.bSX(d))},
Z(){this.a3()
var w=this.gDj().c
if(w.length===0)w.push(C.haw(null,0,20,""))},
t(){var w,v,u=this.glY(0)
u.V$=$.aw()
u.R$=0
for(u=this.f,u=new A.dp(u,u.r,u.e);u.C();)for(w=J.aT(u.d);w.C();){v=w.gP(w)
v.V$=$.aw()
v.R$=0}this.a2()},
cM8(){if(this.gDj().c.length>=12)return
this.m(new C.bSY(this))},
jH(d){var w,v,u=this,t=u.gDj()
t.b=B.a.i(u.glY(0).a.a)
w=t.gaq0(0)
if(t.b.length===0||w.length<2){u.c.K(x.q).f.U(D.fsw)
return}v=t.c
B.d.a8(v)
B.d.u(v,w)
v=u.c
v.toString
A.a6(v,!1).N(t)},
B(d){var w,v,u=this,t=null,s=new C.bT7(),r=x.p,q=A.a([A.bP(!1,D.fUj,t,t,!0,t,t,t,u.gbr5(u),t,t)],r),p=A.a([D.h8g,B.af,A.aN(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glY(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ac,t,t,t,t,t,t,t,t,t,t,t,B.h6,!0,B.a7,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gDj().c.length,w<v;++w)B.d.u(p,A.a([new A.fh(new C.bT6(u,w,s),t)],r))
if(v<12)p.push(A.as(C.uw("\uff0b Add a question",u.gcM7(),B.aT,t,B.c),t,t,t))
return new C.tE("Make your game",A.cv(p,t,t,D.bG1,t,t,B.ah,!1),q,t)}}
C.arF.prototype={
T(){return new C.aFQ(A.a([],x._))},
bv(){return this.r.$0()},
qu(){return this.w.$0()},
ge3(){return this.c}}
C.aFQ.prototype={
Z(){var w,v
this.a3()
this.wD()
w=this.a
v=w.c
if(v.length!==0)C.a8D(v,w.e,w.d.w)},
wt(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hlV(r,t.e,!1,s.w,new C.e5D(u),null,s),$async$wt)
case 2:w=3
return A.b(u.wD(),$async$wt)
case 3:return A.h(null,v)}})
return A.i($async$wt,v)},
a1a(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a1a=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hlV(r,t.e,!0,s.w,new C.e5C(u),null,s),$async$a1a)
case 2:w=3
return A.b(u.wD(),$async$a1a)
case 3:return A.h(null,v)}})
return A.i($async$a1a,v)},
wD(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wD=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bl(q.a.c),$async$wD)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.e5F(q,p))
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
return A.b(C.Hs(q.a.c).dc(0,B.qE),$async$wD)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e5G(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e5H(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wD,v)},
Pw(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Pw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.K(s).f.U(D.fs6)
w=3
return A.b(C.Hs(t.a.c),$async$Pw)
case 3:r=e
w=4
return A.b(C.h_Y(t.a.c,r),$async$Pw)
case 4:q=e
w=5
return A.b(C.Hs(t.a.c),$async$Pw)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e5B(t,p))
o=t.c.K(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(null,null,null,q?B.dL:B.d3,null,B.t,null,s,null,B.lM,null,null,null,null,null,null,null,null,null,null))
t.a.qu()
case 1:return A.h(u,v)}})
return A.i($async$Pw,v)},
IG(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iww(l),$async$IG)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.i_d(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b22(q,p.e,l,"Each family tree costs $"+B.h.ad(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$IG)
case 4:if(!e||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
p=C.hG6(r)
o=Date.now()
n=t.a.c
m=new C.kZ(l,r.toUpperCase(),p,!0,B.Z,D.E_,new A.V(o,0,!1),0,n,D.uV,B.cg)
w=5
return A.b(C.a4i(n,m),$async$IG)
case 5:w=6
return A.b(t.wD(),$async$IG)
case 6:t.a.bv()
t.a.qu()
if(t.c==null){w=1
break}t.Fb(m)
case 1:return A.h(u,v)}})
return A.i($async$IG,v)},
Fb(d){return this.clk(d)},
clk(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Fb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bl(u.a.c),$async$Fb)
case 2:n=l.nw(k.dH(f,new C.e5E(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hE(m,new C.arz(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Fb)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a4i(u.a.c,o),$async$Fb)
case 6:case 5:w=7
return A.b(u.wD(),$async$Fb)
case 7:u.a.qu()
return A.h(null,v)}})
return A.i($async$Fb,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.O(d).ax.a===B.I,o=new C.ui(p)
if(r.e)return A.as(A.n_(q,p?B.bu:B.bh,q,q,q,q,q,q,q,q),q,q,q)
if(J.ct(r.d)){w=p?B.ef:B.c
v=A.l(15)
u=A.aE(!1,B.a3,!0,q,A.aM(!1,q,!0,A.o(q,D.bYk,B.f,q,q,new A.n(B.aV.j(0.12),q,A.K(B.aV,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cU,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcko(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Gt(A.o(q,A.x(A.a([u,B.aO,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.m(q,q,p?B.bu:B.bh,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.e3,A.bJ(D.hbv,q,r.gaTN(),A.bp(B.bQ,q,q,q,q,q,B.a1H,q,new A.ba(A.l(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.i,0,B.p),B.f,q,q,new A.n(w,q,q,v,q,q,B.n),q,q,q,q,D.bIM,q,q,1/0),15,B.ag,1.05,D.adG,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b4],v)
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.X(B.zR,B.aV,q,q,q,q),q,q,q,new C.e5J(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.X(B.zN,B.aV,q,q,q,q),q,q,q,r.gahs(),q,q,q,q,"Transfer / backup file",q))
w.push(A.db(B.aty,q,D.fRB,r.gaTN(),A.bp(B.bQ,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.Gt(r.cIh(J.t(r.d,s),o),14,B.ag,1,D.adG,q))
B.d.u(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.l,q,B.e,B.i,0,B.p)],v),B.E,q,B.e,B.i,0,B.p)},
cIh(d,e){var w=null,v=e.a,u=v?B.ef:B.c,t=A.l(14),s=A.K((v?B.eh:B.bO).j(0.55),B.r,1),r=A.a([new A.ab(0,B.G,B.w.j(v?0.35:0.08),B.et,10)],x.V),q=A.l(14),p=A.o(w,D.bXp,B.f,w,w,new A.n(B.aV.j(0.15),w,w,A.l(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gar0(),m=d.d?"":" \xb7 Public",l=d.y===D.kZ?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bF,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.i,0,B.p),1)
return A.o(w,A.aE(!1,B.a3,!0,w,A.aM(!1,q,!0,new A.D(B.bH,A.A(A.a([p,B.bc,l,A.X(B.Pt,v?B.bu:B.bh,w,w,w,w)],k),B.l,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e5I(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj),B.f,w,w,new A.n(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.arz.prototype={
T(){return new C.aFN(A.a([],x._),A.aR(x.N),A.baO())},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aFN.prototype={
Z(){var w,v,u=this
u.a3()
u.d=u.a.w
u.ae4()
w=u.a
v=w.c
if(v.length!==0)C.a8D(v,w.e,w.d.w)},
t(){var w=this.w
w.V$=$.aw()
w.R$=0
this.a2()},
a47(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a47=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yE("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e53(r),s,null,!0,!0,x.y),$async$a47)
case 3:if(e!==!0||t.c==null){w=1
break}t.Kk()
t.m(new C.e54(t,r))
w=4
return A.b(t.uD(),$async$a47)
case 4:t.a.bv()
t.yE(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a47,v)},
cxU(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.x1$.push(new C.e4Z(w,f,d,e))},
aW5(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.ds()
u.ec(w,v,0,1)
u.k8(q,q,1,1)
this.w.sp(0,u)},
bdY(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eN(new Float64Array(16))
q.e6(r)
w=q.Do()
v=B.h.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.ds()
t.ec(r,u,0,1)
t.k8(v,v,1,1)
t.ec(-r,-u,0,1)
t.iZ(0,q)
s.sp(0,t)},
ae4(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ae4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bl(u.a.c),$async$ae4)
case 2:t=s.nw(r.dH(e,new C.e4q(u)))
if(t!=null&&u.c!=null)u.m(new C.e4r(u,t))
return A.h(null,v)}})
return A.i($async$ae4,v)},
yE(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
wt(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hlV(o,t,!1,r,new C.e4I(u),q.a,s),$async$wt)
case 2:n=A
m=J
w=3
return A.b(C.Hs(u.a.c),$async$wt)
case 3:p=n.nw(m.dH(e,new C.e4J(u)))
if(p!=null&&u.c!=null)u.m(new C.e4K(u,p))
return A.h(null,v)}})
return A.i($async$wt,v)},
Kk(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cH(w,0)},
uD(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a4i(t,s),$async$uD)
case 2:return A.h(null,v)}})
return A.i($async$uD,v)},
a2F(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a2F=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.ux(q,t.a.c)){t.yE("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.ixJ(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a2F)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Kk()
t.m(new C.e4Y(t,r))
w=4
return A.b(t.uD(),$async$a2F)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2F,v)},
b3Y(){var w=this.c
w.toString
A.a6(w,!1).cf(A.eg(new C.e4F(this),!1,null,x.H))},
a1n(){return this.clm()},
clm(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a1n=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.ux(m,t.a.c)){t.yE("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.O(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e4V(),A.T(s).k("Y<1>")).gJ(0)
s=A.ew([0,2,3,4,5,6,8,r],x.S)
p=A.B(s,s.$ti.k("cj.E"))
B.d.ff(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.L,null,new C.e4W(n,t,new C.ui(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a1n)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Kk()
t.m(new C.e4X(t,o))
w=6
return A.b(t.uD(),$async$a1n)
case 6:case 5:if(o.a&&t.c!=null)t.b3Y()
case 1:return A.h(u,v)}})
return A.i($async$a1n,v)},
WY(d){return this.bEF(d)},
bEF(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.ux(r,t.a.c)){t.yE("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e4e(t,d),r,null,!0,!0,x.P),$async$WY)
case 3:s=f
if(s==null){w=1
break}t.Kk()
t.m(new C.e4f(t,s))
w=4
return A.b(t.uD(),$async$WY)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WY,v)},
a4s(d){return this.cKw(d)},
cKw(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a4s=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.O(s)
t=u.c
t.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.e56(u,d,new C.ui(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a4s)
case 2:return A.h(null,v)}})
return A.i($async$a4s,v)},
chC(d){var w=this,v=w.d
v===$&&A.c()
if(C.ux(v,w.a.c))w.Pb(d)
else w.a4s(d)},
ajY(d,e){return this.cBS(d,e)},
cBS(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ajY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.O(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.e50(new C.ui(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ajY)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ajY,v)},
IL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kZ?3:5
break
case 3:w=6
return A.b(C.h8J(t.a.c),$async$IL)
case 6:s=e
o=t.a
r=C.htX(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ajY(!s,!r),$async$IL)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aRI(o,t.a.c)){t.yE("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lm(o,"Cancel","Remove",q.y===D.kZ?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$IL)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aRG(t.a.c,t.d.a),$async$IL)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.j3(o,null)
case 1:return A.h(u,v)}})
return A.i($async$IL,v)},
aby(d){return this.bPY(d)},
bPY(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$aby=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.ux(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aS(s,new C.e4g(p))){o=A.T(s)
p.a=A.nw(new A.cM(new A.Y(s,new C.e4h(d),o.k("Y<1>")),new C.e4i(),o.k("cM<1,q>")))}q=p.a
if(q==null)q=d.d
t.Kk()
t.m(new C.e4j(t,s,d,q))
w=3
return A.b(t.uD(),$async$aby)
case 3:t.yE(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$aby,v)},
Pb(d){return this.bSc(d)},
bSc(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Pb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.ux(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a4s(d),$async$Pb)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.e4n(t,d),r,null,!0,!0,x.P),$async$Pb)
case 6:s=f
if(s==null){w=1
break}t.Kk()
t.m(new C.e4o(t,s))
w=7
return A.b(t.uD(),$async$Pb)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Pb,v)},
cIH(){var w=this,v=w.d
v===$&&A.c()
if(!C.ux(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e55(w))
w.uD()},
a_1(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aRI(n,t.a.c)){t.yE("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.O(n)
s=$.aw()
r=new A.at(B.ax,s)
q=t.d.e
p=A.bs(new A.N(q,t.gcg5(),A.T(q).k("N<1,q>")).c0(0,new C.e4A()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e4B(t,new C.ui(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$a_1)
case 3:o=e
r.V$=s
r.R$=0
if(o!==!0||t.c==null){w=1
break}t.Kk()
t.m(new C.e4C(t,p))
w=4
return A.b(t.uD(),$async$a_1)
case 4:t.yE("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$a_1,v)},
cg6(d){return B.a.i(d.toLowerCase())},
ck8(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.ux(v,w)
t=r.d
s=C.imF(t)
C.iwA(q,t.b,u,C.imE(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.ui(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.e5d(),A.T(l).k("Y<1>")).gJ(0)
l=n?B.c6:B.hM
v=A.X(B.a2R,n?B.bu:B.bh,o,o,o,18)
u=x.p
v=A.a([new A.D(B.CF,A.aM(!1,o,!0,new A.D(B.hA,A.A(A.a([v,B.bn,A.d("Back to Family Trees",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.N,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e5e(p,d),o,o,o,o,o,o,o),o),new A.D(B.nI,p.c2r(m),o)],u)
if(p.d.y===D.kZ){t=B.tD.j(0.15)
s=A.l(12)
r=A.K(B.tD.j(0.45),B.r,1)
q=C.Hq(p.d,p.a.c)
v.push(new A.D(B.z4,A.o(o,A.A(A.a([D.c1T,B.as,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.n(t,o,r,s,o,o,B.n),o,o,o,o,B.hR,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b4],u)
if(C.ux(p.d,p.a.c)&&p.e.length!==0)u.push(new C.GF("Undo",B.pC,p.gcIG(),m,o,o))
u.push(new C.GF("Family Book",D.bS3,p.gck7(),m,B.ut,o))
u.push(new C.GF("Family games",B.nO,p.gckj(),m,B.aD,o))
if(C.ux(p.d,p.a.c))u.push(new C.GF("Display settings",B.Dx,p.gcll(),m,B.b3,o))
u.push(new C.GF("Sync",B.zN,p.gahs(),m,o,o))
t=p.d
if(t.y===D.kZ||C.aRI(t,p.a.c)){t=p.d.y===D.kZ?"Remove shared tree":"Delete tree"
u.push(new C.GF(t,B.ej,p.gbQ7(),m,B.fi,o))}if(C.ux(p.d,p.a.c))u.push(new C.GF("Add member",B.x0,new C.e5f(p),m,B.bQ,o))
v.push(new A.D(B.anj,A.A(u,B.l,o,B.e,B.i,0,o,o),o))
if(p.d.gar0()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.ci(new C.e5g(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?G.a2V:P.Pu,o,o,o,o,o)
v.push(A.as(A.ht(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e5h(p),o),o,o,o))}return A.c5(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c2r(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.l(22)
v=A.a([new A.ab(0,B.G,B.fX.j(0.35),B.dn,18)],x.V)
u=A.l(22)
t=A.ao(-26,A.X(B.zE,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aE(!1,B.a3,!0,m,A.aM(!1,m,!0,A.o(m,D.c5c,B.f,m,m,new A.n(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cU,!0,m,m,m,m,m,m,m,m,m,m,m,n.gahs(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.fCy,m,m,m)
r=r.gar0()
p=n.d.gar0()===1?"member":"members"
o=x.p
p=A.a([s,B.bc,A.E(A.x(A.a([q,B.bF,A.d(""+r+" "+p,m,m,m,m,m,m,A.m(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.i,0,B.p),1)],o)
if(C.ux(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.c26,m,m,m,n.gcvf(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.jL:B.n5
r=r?"Private":"Public"
r=A.E(n.axz(q,"Privacy",r,n.a.d.w?n.gcHC():m),1)
q=A.E(n.axz(B.x5,"Tree code",n.d.c,new C.e4p(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.ae,q,B.ae,A.E(n.axz(D.bTM,"Collaborators",p,n.gc7h()),1)],o),B.l,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.kZ){s=B.c.j(0.15)
B.d.u(p,A.a([B.P,A.aE(!1,B.a3,!0,A.l(999),A.aM(!1,A.l(999),!0,new A.D(B.ho,A.A(A.a([A.X(B.nP,B.c,m,m,m,14),B.e7,A.d("View only",m,m,m,m,m,m,B.aX5,m,m,m)],o),B.l,m,B.e,B.N,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.aj)],o))}return A.o(m,A.bv(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.Hi,A.x(p,B.E,m,B.e,B.i,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.n(m,m,m,w,v,D.c9w,B.n),m,m,m,m,m,m,m,1/0)},
axz(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aE(!1,B.a3,!0,A.l(14),A.aM(!1,A.l(14),!0,new A.D(B.aoy,A.x(A.a([A.X(d,B.c,w,w,w,18),B.aw,A.d(e,w,1,B.a2,w,w,w,A.m(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.rj,A.d(f,w,1,B.a2,w,w,w,B.xF,w,w,w)],x.p),B.l,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)}}
C.bhz.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bM
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bhC(s,t),new A.au(w,v))],x.p)
r=r.gdQ(r)
B.d.u(u,r.dO(r,new C.dj6(this),x.l))
r=s.c
B.d.u(u,new A.N(r,new C.dj7(this),A.T(r).k("N<1,v>")))
return new A.D(B.uR,new A.a5(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.L1.prototype={}
C.GJ.prototype={}
C.bhB.prototype={
gbmu(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aLu.prototype={}
C.bhC.prototype={
bRO(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.R()
v=A.L()
v.r=B.bE.j(0.75).gp(0)
v.c=2
v.d=B.bG
d.ah(new A.r(n,w),new A.r(m,w),v)
u=(n+m)/2
t=new A.aG(q.r,B.ai,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.hV(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.hV(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bx())
q=A.L()
q.r=B.c.gp(0)
d.O(new A.r(u,w),9,q)
q=A.L()
q.r=B.bE.gp(0)
d.af(t,q)},
bRL(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b0(a0,new C.djr())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aS(a0,new C.djs(f))
t=new A.N(a0,new C.djt(f),A.T(a0).k("N<1,G>")).c0(0,new C.dju()).cC(0,1/0,B.rz)
w=f.a
d.ah(f,new A.r(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.r(o,v),p,e)
continue}l=J.lG(n)
k=Math.min(10,m/2)
m=$.R()
j=A.a([],r)
i=new A.aG(m.r,B.ai,null,null,j)
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
$.R()
w=A.L()
w.r=B.bQ.j(0.75).gp(0)
w.c=2.2
w.b=B.ab
w.d=B.bG
w.e=B.dQ
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bRL(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bRO(d,w,r.a,r.b)}},
aE(d){return d.b!==this.b}}
C.blo.prototype={
gcdq(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aEU
switch(w.c.a){case 0:return D.d2P
case 1:return D.dfx
case 2:return D.dy3}},
gcdt(){var w=this.c,v=C.hFi(w.w),u=C.hFi(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.O(d).ax.a===B.I,q=t.gcdq(),p=t.c,o=A.bGa(p.f),n=t.gcdt(),m=x.V,l=A.a([new A.ab(0,B.G,B.d.gal(q).j(0.35),B.cM,10)],m),k=r?B.av:B.c,j=A.K(r?B.av:B.c,B.r,2)
if(o!=null)w=A.tH(B.A,s,B.cn,B.bY,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.o(B.A,A.d(v,s,s,s,s,s,s,A.m(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.n(s,s,s,s,s,new A.a7(B.a5,B.a9,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.o(s,A.o(s,A.i4(w,B.aq),B.f,s,s,new A.n(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.n(s,s,s,s,l,new A.a7(B.ay,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.CU,s,s,56)],v)
k=t.d
if(k>0){j=A.l(10)
w=A.K(r?B.av:B.c,B.r,1.5)
l.push(A.ao(s,A.o(s,A.d(""+k,s,s,s,s,s,s,D.fNo,s,s,s),B.f,s,s,new A.n(B.cj,s,w,j,s,s,B.n),s,s,s,s,D.bKI,s,s,s),s,s,s,-6,-4,s))}k=r?B.ct:B.c
j=A.l(8)
w=A.K(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ab(0,B.G,B.w.j(r?0.3:0.06),B.dM,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.m(s,s,r?B.c:B.ct,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.m(s,s,r?B.aR:B.bh,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.ay(s,new A.a5(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.aw,A.o(s,A.x(p,B.l,s,B.e,B.N,0,B.p),B.f,s,D.b8j,new A.n(k,s,w,j,m,s,B.n),s,s,s,s,D.bKT,s,s,s)],v),B.l,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bgD.prototype={
a4(d,e){var w,v,u,t,s
$.R()
w=A.L()
v=this.b
u=v?B.c:D.blw
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.O(new A.r(s,t),1,w)},
aE(d){return d.b!==this.b}}
C.bzu.prototype={
B(d){var w=this,v=null,u=new C.fpI(w),t=w.c,s=t?B.ct:B.c,r=A.l(12),q=u.$3(B.i0,"Zoom in",w.d),p=A.o(v,v,B.f,t?B.bw:B.fr,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.x2,"Zoom out",w.e)
return A.aE(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.o(v,v,B.f,t?B.bw:B.fr,v,v,v,1,v,v,v,v,v,22),u.$3(B.ar0,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.N,0,B.p),B.f,s,4,v,B.dC,v,v,v,B.aj)}}
C.boK.prototype={
B(d){var w=this,v=null,u=B.bQ.j(0.15),t=A.K(B.bQ,B.r,2),s=w.e,r=x.p
t=A.ay(v,A.o(v,A.x(A.a([A.X(s?G.a2V:P.Pu,B.bQ,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fJo,v,v,v)],r),B.l,v,B.b9,B.i,0,B.p),B.f,v,v,new A.n(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fH9,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.u(t,new A.N(s,new C.f_D(w),A.T(s).k("N<1,v>")))
B.d.u(u,t)}return new A.a5(84,v,A.x(u,B.l,v,B.e,B.i,0,B.p),v)}}
C.a0v.prototype={
T(){return new C.aEf()},
bv(){return this.Q.$0()},
ge3(){return this.w}}
C.aEf.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a3()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aQ()
r.d=new A.at(new A.bc(t,B.b7,B.aP),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.at(new A.bc(t,B.b7,B.aP),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.at(new A.bc(t,B.b7,B.aP),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.at(new A.bc(t,B.b7,B.aP),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.at(new A.bc(t,B.b7,B.aP),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.at(new A.bc(t,B.b7,B.aP),s)
t=u?q:v.c
r.y=t==null?D.zh:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.io9(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.V$=$.aw()
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
QH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$QH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.htX(p.y,p.w)
w=3
return A.b(A.ly(t.a.w,B.JV),$async$QH)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b22(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$QH)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.i_e(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(A.DM(78,800),$async$QH)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dzn(t,q))
case 1:return A.h(u,v)}})
return A.i($async$QH,v)},
cds(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.i5(B.o.v(1000*Date.now()),w,D.zh,null,null,null,"","","","","",1,!1,0)
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
s=v.aGE(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).N(s)},
ab9(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ab9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dzm(r),s,null,!0,!0,x.y),$async$ab9)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$ab9,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.O(d).ax.a===B.I,i=new C.ui(j),h=l.a.e,g=A.T(h).k("Y<1>"),f=A.B(new A.Y(h,new C.dzw(l),g),g.k("M.E"))
h=j?B.ef:B.c
g=A.l(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bJ7,A.d(w,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hd(A.aM(!1,k,!0,new A.D(B.lR,A.X(B.ej,B.pp,k,k,k,17),k),B.cU,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbMH(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jZ:B.iA
t=A.bGa(l.as)
if(l.as==null)s=A.X(B.pw,j?B.bu:B.bh,k,k,k,40)
else s=k
s=A.as(A.ay(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.hg(u,t,s,k,42),A.ao(0,A.hg(B.bQ,k,D.bWt,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcdp(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aEh(t,"Full name",B.mi,1,1,i,B.mA)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.U,new C.blm(i,u,new C.dzx(l),k)],v),B.l,k,B.e,B.i,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bCr],q)
o=l.a.e
B.d.u(p,new A.N(o,new C.dzy(),A.T(o).k("N<1,eS<q?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bCt],q)
B.d.u(q,new A.N(f,new C.dzA(),A.T(f).k("N<1,eS<q?>>")))
o=A.x(A.a([t,B.am,new C.aeG(i,r,"Who is their parent?",p,new C.dzB(l),k,o),B.aB,n,B.am,new C.aeG(i,m,"Who is their spouse / partner?",q,new C.dzC(l),k,o)],v),B.al,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.c()
q=C.aEh(q,"Birth date",D.aqb,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aEh(m,"Birth place",B.a3a,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aEh(n,"Date of death (if deceased)",D.asg,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aEh(p,"Occupation",B.Qt,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ad,B.t,w,k),B.aB,s,B.bx,new C.aeH(i,"Identity",u,k),B.af,new C.aeH(i,"Family links",o,k),B.af,new C.aeH(i,"Life details",A.x(A.a([q,B.U,m,B.U,n,B.U,p,B.U,C.aEh(r,"Notes",B.l0,5,3,i,k)],v),B.l,k,B.e,B.i,0,B.p),k),B.af,new C.aEg(i,"Child order",l.clA(l.at),new C.dzD(l),new C.dzE(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hiU(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dzF(l):k
B.d.u(r,A.a([B.U,new C.aEg(i,"Visible in tree",u,w,new C.dzG(l),k)],v))}r.push(B.U)
w=j?B.jZ:B.iA
u=A.l(14)
t=A.K(j?B.eh:B.bO,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.o(k,A.iV(k,B.bQ,k,B.ag,k,new C.dzH(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.n(w,k,t,u,k,k,B.n),k,k,k,k,G.amZ,k,k,k))
r.push(B.bx)
w=j?B.aS:B.av
j=j?B.eh:B.bO
r.push(A.A(A.a([A.E(A.dV(B.o8,new C.dzz(d),A.dj(k,k,k,k,k,k,k,k,k,w,k,k,B.co,k,new A.ba(A.l(14),B.a1),new A.ax(j,1,B.r,-1),k,k,k,k)),1),B.bc,A.E(A.bJ(D.fjH,k,l.gcdr(),A.bp(B.aV,k,k,0,B.c,k,B.co,k,new A.ba(A.l(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.i,0,k,k))
r.push(B.aw)
return A.en(B.f7,k,B.ag,h,new A.a5(420,k,A.cb(A.x(r,B.al,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.anR,k,B.ana,new A.ba(g,B.a1),k,k)},
clA(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aeH.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jZ:B.iA,s=A.l(16)
return A.x(A.a([new A.D(B.a1L,u,w),A.o(w,this.e,B.f,w,w,new A.n(t,w,A.K(v?B.eh:B.bO,B.r,1),s,w,w,B.n),w,w,w,w,B.bl,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)}}
C.bln.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.ef:B.c,r=A.l(12),q=A.K((t?B.eh:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.m(u,u,t?B.aS:B.av,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.o(u,A.aN(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bA(u,B.eN,u,B.ta,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.m(u,u,t?B.bu:B.bh,u,u,u,u,u,u,u,u,u,u,u,B.cE,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bQ,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ac,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a7,u,p,u,u,u,u),B.f,u,u,new A.n(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aeG.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.ef:B.c,s=A.l(12),r=A.K((u?B.eh:B.bO).j(0.85),B.r,1),q=A.X(B.tl,u?B.bu:B.bh,v,v,v,v),p=A.m(v,v,u?B.aS:B.av,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.ef:B.c
return A.o(v,new A.Ew(A.a5O(v,o,A.d(w.f,v,v,v,v,v,v,A.m(v,v,u?B.bu:B.bh,v,v,v,v,v,v,v,v,v,v,v,B.cE,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.n(t,v,r,s,v,v,B.n),v,v,v,v,B.kX,v,v,v)}}
C.blm.prototype={
B(d){var w=new C.dzI(this)
return A.A(A.a([w.$3(D.wO,"Male",B.Qe),B.ae,w.$3(D.oB,"Female",B.Q0),B.ae,w.$3(D.zh,"Other",B.nM)],x.p),B.l,null,B.e,B.i,0,null,null)}}
C.aEg.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jZ:B.iA,r=A.l(14),q=A.K(t?B.eh:B.bO,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.m(v,v,t?B.aS:B.av,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.o(v,A.A(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bh,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.i,0,B.p),1),new C.aKw(u,B.x2,w.f,v),B.bn,new C.aKw(u,B.i0,w.r,v)],o),B.l,v,B.e,B.i,0,v,v),B.f,v,v,new A.n(s,v,q,r,v,v,B.n),v,v,v,v,B.ez,v,v,v)}}
C.aKw.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bQ.j(0.12)
else w=s.c.a?B.ef:B.c
v=A.l(10)
u=A.l(10)
if(p)t=B.bQ
else t=(s.c.a?B.bu:B.bh).j(0.4)
return A.aE(!1,B.a3,!0,v,A.aM(!1,u,!0,new A.a5(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.aj)}}
C.aeI.prototype={
bW_(d){switch(d.a){case 0:return B.bQ
case 1:return B.bE
case 2:return B.cC}},
bW0(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b_D(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AU(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.ef:B.c
u=A.l(12)
t=A.K((w?B.eh:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.X(f,B.bQ,p,p,p,18),B.as],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.m(p,p,w?B.bu:B.bh,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.aw,A.d(o,p,p,p,p,p,p,A.m(p,p,w?B.aS:B.av,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.i,0,B.p),1))
return A.o(p,A.A(r,B.E,p,B.e,B.i,0,p,p),B.f,p,p,new A.n(v,p,t,u,p,p,B.n),p,p,p,B.cy,B.z0,p,p,1/0)},
afO(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jZ:B.iA,s=A.l(16),r=A.K(v?B.eh:B.bO,B.r,1)
return A.x(A.a([new A.D(B.a1L,u,w),A.o(w,A.x(e,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.n(t,w,r,s,w,w,B.n),w,w,w,w,B.bS,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hKN(r,q),o=q.c,n=t.bW_(o),m=A.bGa(q.f),l=t.e.a,k=l?B.ef:B.c,j=A.l(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.m(s,s,l?B.aS:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kZ?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.m(s,s,l?B.bu:B.bh,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.ab(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.as(A.o(s,A.hg(u,m,m==null?A.X(B.pw,n,s,s,s,48):s,s,52),B.f,s,s,new A.n(s,s,w,s,v,s,B.a6),s,s,s,s,B.eC,s,s,s),s,s,s)
w=n.j(0.14)
v=A.l(20)
u=A.K(n.j(0.45),B.r,1)
v=A.as(A.o(s,A.d(t.bW0(o),s,s,s,s,s,s,A.m(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.n(w,s,u,v,s,s,B.n),s,s,s,s,B.lP,s,s,s),s,s,s)
u=x.p
i=A.a([t.AU("Full name",i,B.mi)],u)
if(p>0)i.push(t.AU("Child order","#"+p,B.Q6))
r=A.a([h,B.aw,r,B.aO,l,B.U,v,B.bx,t.afO("Identity",i),B.af,t.afO("Life details",A.a([t.AU("Birth date",q.w,D.aqb),t.AU("Birth place",q.x,B.a3a),t.AU("Date of death",q.y,D.asg),t.AU("Occupation",q.z,B.Qt)],u)),B.af,t.afO("Family links",A.a([t.AU("1. Parent",t.b_D(q.d),B.HJ),t.AU("2. Spouse",t.b_D(q.e),B.HZ)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.afO("Notes",A.a([t.AU("Notes",q,B.l0)],u))],u))
r.push(B.bx)
r.push(A.bJ(B.Ls,s,new C.dzS(d),A.bp(B.aV,s,s,s,s,s,B.co,s,new A.ba(A.l(14),B.a1),s,s,s)))
return A.eI(s,k,new A.cN(B.m5,A.cb(A.x(r,B.al,s,B.e,B.N,0,B.p),B.t,s,B.y,s,s,B.wI,s,s,B.ah),s),s,s,s,B.Hl,s,B.d7,s,new A.ba(j,B.a1),s)}}
C.GF.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bh
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uT,A.hd(A.aE(!1,B.a3,!0,A.l(8),A.aM(!1,A.l(8),!0,new A.a5(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.aj),u,v.c,u,u),u)}}
C.arC.prototype={
f2(){var w,v,u=this,t=x.N,s=A.S(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.T(w).k("N<1,ac<q,@>>")
w=A.B(new A.N(w,new C.cgz(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jq(w,new C.cgA(),t,x.fO))
return s}}
C.arD.prototype={
T(){return new C.aFP(A.a([],x.bF))},
gd1(){return this.c}}
C.aFP.prototype={
Z(){this.a3()
this.Kr()},
Kr(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Kr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cgD(t.a.c),$async$Kr)
case 3:r=e
w=4
return A.b(C.Bl(t.a.c),$async$Kr)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.ro(q,new C.e5q(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e5r(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Kr,v)},
zc(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
Lf(d,e){return this.cLc(d,e)},
cLc(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Lf=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e5v(q,e))
t=3
w=6
return A.b(d.$0(),$async$Lf)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e5w(q))
$.eX.mK()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Lf,v)},
YL(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pB(r,s.c,s.e),$async$YL)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lf(new C.e5n(t),"Preparing download\u2026"),$async$YL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YL,v)},
YP(d){return this.bTS(d)},
bTS(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pB(r,s.c,s.e),$async$YP)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Lf(new C.e5o(t,d),"Preparing file\u2026"),$async$YP)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YP,v)},
ahP(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ahP=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xS.cq().N0(B.Tf,B.uW,!0),$async$ahP)
case 7:r=e
o=r
q=o==null?null:J.fl(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jJ(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.aa(m)
$.am.$1("[family tree sync pick] file_picker: "+A.w(p))
w=6
break
case 3:w=2
break
case 6:u=A.HA()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahP,v)},
Zs(d){return this.c3m(d)},
c3m(d){var w=0,v=A.j(x.H),u=this
var $async$Zs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Lf(new C.e5p(u,d),"Restoring family trees\u2026"),$async$Zs)
case 2:return A.h(null,v)}})
return A.i($async$Zs,v)},
Zr(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Zr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ahP(),$async$Zr)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Zs(s),$async$Zr)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zr,v)},
a3v(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3v=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pB(r,s.c,s.e),$async$a3v)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lf(new C.e5u(t),"Creating QR code\u2026"),$async$a3v)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3v,v)},
a36(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a36=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DJ()){t.zc("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).cf(A.eg(new C.e5s(),!0,null,x.N)),$async$a36)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Zs(r),$async$a36)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a36,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.O(d).ax.a===B.I,n=o?B.C5:B.hM,m=o?D.alo:B.aS,l=o?B.aL:B.bO,k=o?B.aS:B.av,j=new C.djv(n,m,l,k,o?B.bP:B.bh)
l=A.aH(p,p,p,p,A.X(B.eK,k,p,p,p,20),p,p,p,new C.e5y(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eR(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.dj3(!0,B.ju,B.aH,B.aH,q.r?p:q.gcBG(),j,s,"Show restore QR"),1),B.as],u))}s=q.e
r=q.r?p:q.gcxP()
t.push(A.E(C.dj3(!s,B.jv,B.b8,B.bi,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.dj3(!1,B.hE,B.aV,B.bQ,q.r?p:q.gbTL(),j,"Photos & books included","Download all trees"),1),B.as],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dj3(!1,B.zO,B.at,B.aQ,q.r?p:q.gc3j(),j,s,"Upload backup file"),1))
l=A.a([new C.bhA(v,l,p),B.lb,new C.adX(j,"QR restore",p),B.U,t,B.db,new C.adX(j,"Backup files",p),B.U,A.A(r,B.l,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.lb,new C.adX(j,"One tree",p),B.U],u)
B.d.u(v,J.b9(q.d,new C.e5z(q,j),x.l))
B.d.u(l,v)}l=A.a([A.cv(l,p,p,B.a1D,p,p,B.ah,!1)],u)
if(q.r){v=A.l(18)
t=A.K(B.aV.j(0.35),B.r,1)
s=A.a([new A.ab(0,B.G,B.w.j(o?0.3:0.1),B.dn,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.o(p,A.A(A.a([G.aVp,B.bc,A.E(A.d(r,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.i,0,p,p),B.f,p,p,new A.n(m,p,t,v,s,p,B.n),p,p,p,p,B.CM,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c5(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.djv.prototype={}
C.bhA.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.l(24)
u=A.a([new A.ab(0,B.G,B.aV.j(0.32),B.kG,28)],x.V)
t=A.ao(p,A.X(B.vg,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.l(18)
q=x.p
return A.o(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ac,A.A(A.a([A.o(p,D.c4G,B.f,p,p,new A.n(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.p4,A.E(A.x(A.a([D.fSE,B.P,A.d(w,p,p,p,p,p,p,A.m(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.i,0,B.p),1)],q),B.E,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.n(p,p,p,v,u,D.ccT,B.n),p,p,p,p,p,p,p,p)}}
C.adX.prototype={
B(d){var w=null
return A.A(A.a([A.o(w,w,B.f,w,w,new A.n(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ae,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)}}
C.bhy.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.l(18),n=A.l(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.ab(0,B.G,B.aH.j(0.1),B.cM,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.l(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aE(!1,B.a3,!0,q,A.aM(!1,o,!0,A.eE(A.d0(new A.D(B.a1h,A.x(A.a([A.o(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.n(v,q,s,u,q,q,B.n),q,q,q,q,B.te,q,q,q),B.af,A.d(r.e,q,q,q,q,q,q,A.m(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bF,A.d(r.f,q,q,q,q,q,q,A.m(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cE,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.i,0,B.p),q),w),q,new A.n(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)}}
C.bhD.prototype={
B(d){var w=this,v=null,u=A.l(18),t=A.l(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aV.j(0.14),p=A.l(12),o=s.e,n=x.p
return A.aE(!1,B.a3,!0,v,A.aM(!1,u,!0,A.eE(new A.D(B.eX,A.A(A.a([A.o(v,D.c3S,B.f,v,v,new A.n(q,v,A.K(B.aV.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.te,v,v,v),B.bc,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.m(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.m(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.i,0,B.p),1),A.X(B.hE,o,v,v,v,20)],n),B.l,v,B.e,B.i,0,v,v),v),v,new A.n(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.aj)}}
C.a0P.prototype={
T(){return new C.aFO()},
gd1(){return this.c}}
C.aFO.prototype={
Z(){this.a3()
this.aaH()},
aaH(){var w=0,v=A.j(x.H),u=this,t
var $async$aaH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b4I(u.a.c,B.EE),$async$aaH)
case 2:t=e
if(u.c!=null)u.m(new C.e5i(u,t))
return A.h(null,v)}})
return A.i($async$aaH,v)},
ajg(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ajg=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e5j(q))
t=4
p=A.hvJ(q.a.d,B.EE)
if(p==null){n=A.bb("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.atV(n.e,m,l,B.EE,p,n.f),$async$ajg)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e5k(q))
q.c.K(x.q).f.U(D.ftk)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.aa(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.d(B.a.ek(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e5l(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ajg,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.O(d).ax.a===B.I,o=p?B.ny:B.qs,n=p?B.iK:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eR(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.h8a,q,q,q,1,q,!0)
w=A.l(24)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.qf(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.m(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.o(q,A.x(A.a([B.P,u,B.bx,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.m(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.b9,B.i,0,B.p),B.f,q,q,new A.n(n,q,v,w,q,q,B.n),q,q,q,q,B.ac,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.m(q,q,p?B.aa:B.bz,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcxy()
if(u)u=B.KT
else u=A.X(r.e===!0?B.hc:B.aqa,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a5(1/0,q,A.eq(u,q,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ce,q,q,q),t,A.dj(q,q,q,q,q,q,q,q,q,B.aV,q,B.hh,q,q,q,new A.ax(B.aV.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.ih,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.m(q,q,p?B.aF:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.U)
w.push(new A.a5(1/0,q,A.bJ(B.Bd,q,new C.e5m(d),A.bp(B.aV,q,q,q,q,B.hh,q,q,q,q,q,q)),q))
return A.c5(m,o,new A.D(B.ac,A.x(w,B.l,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a0Q.prototype={
T(){return new C.bmT(A.zV(B.yP,B.oe,B.vo))}}
C.bmT.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return A.c5(A.eR(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h_T,w,w,w,1,w,!0),B.w,A.zU(this.d,B.bY,new C.e5A(this,d)),w,!1,!1,w,w)}}
C.b0y.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.m(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.SK,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lR.prototype={}
C.a7F.prototype={
T(){return new C.bmx(null,null)}}
C.bmx.prototype={
Z(){var w=this,v=null
w.a3()
w.d=A.bo(v,B.t4,v,1,v,w)
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
this.bzT()},
B(d){var w,v,u=this,t=B.d.dM(D.a7g,new C.dRu(u),new C.dRv())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cEz(A.c6(new A.he(A.a([w,v],x.dS)),new C.dRw(u,t),null),!0)}}
C.bmw.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b4o(d,e)
break
case"house":p.mo(d,e,D.dkM)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdj()
$.R()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.O(new A.r(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mu(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.BI(d,e,12)
p.yO(d,e,B.lk,5,14)
break
case"grocery":p.cmk(d,e)
break
case"calculator":p.cm1(d,e)
break
case"lumber":p.cmt(d,e)
break
case"kitchen":p.cmn(d,e)
break
case"landscape":p.mo(d,e,D.dln)
s=new A.aG($.R().r,B.ai,null,null,A.a([],x.v))
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
p.BI(d,e,8)
p.yO(d,e,B.iB,4,18)
break
case"plumbing":p.cmD(d,e)
break
case"electrical":p.mo(d,e,D.dxd)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.R()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aD(new A.a3(0,0,0+e.a,0+e.b),u)
p.mu(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mu(d,e,B.or.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.BI(d,e,10)
break
case"store":p.cmN(d,e)
break
case"paint_remodel":p.cmy(d,e)
break
case"roofing":p.cmF(d,e)
break
case"warehouse":p.cmU(d,e)
break
case"vehicles":p.cmS(d,e)
break
case"farm":p.cme(d,e)
break
case"restaurant":p.cmE(d,e)
break
case"tools":p.cmQ(d,e)
break
case"wallet":p.cmT(d,e)
break
case"concrete":p.cm7(d,e)
break
case"blueprint":p.cm_(d,e)
break
default:p.b4o(d,e)}},
mo(d,e,f){var w,v=new A.a3(0,0,0+e.a,0+e.b)
$.R()
w=A.L()
w.sam(new A.a7(B.ay,B.aC,B.x,f,null,null).az(0,v))
d.aD(v,w)},
mu(d,e,f,g,h){var w,v,u,t=new A.r(e.a/2,e.b/2),s=e.gdj()/2-h
$.R()
w=A.L()
w.b=B.ab
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cQ(A.bW(t,s),u,u+0.1439896632895322-u,!1,w)}},
yO(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdj()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.R()
r=new A.ar(B.S,B.Q,B.V,B.X,B.T)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.O(new A.r(q+t*o,p+s*o),3.5,r)}},
BI(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.h.F(t*0.17,0.9)
q=B.h.F(t*0.23,0.85)
$.R()
p=new A.ar(B.S,B.Q,B.V,B.X,B.T)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.O(new A.r(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b4o(d,e){var w,v=this
v.mo(d,e,D.dvs)
w=v.c
v.mu(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mu(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bRH(d,e,B.hP,w)
v.yO(d,e,B.c.j(0.7),6,8)},
bRH(d,e,f,g){var w,v,u,t,s,r
$.R()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aD(new A.a3(16,r,t,r+3),w)}},
cmk(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mo(d,e,D.cyI)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.ar(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.R()
m=new A.ar(B.S,B.Q,B.V,B.X,B.T)
m.r=D.diR[B.o.F(t,4)].j(0.85).gp(0)
d.O(new A.r(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mu(d,e,B.c.j(0.35),w,16)
l.yO(d,e,B.iB,5,12)},
cm1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mo(d,e,D.cyQ)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdj()
$.R()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.O(new A.r(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fz(h,B.cx,h,h,h,h,B.a7,B.c0,h,B.dJ,B.c1)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dnc[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb4(0,new A.ev(r,h,h,B.cN,h,h,h,h,h,h,new A.F(!0,q,h,h,h,h,14+m*4,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.ep()
p.a4(d,new A.r(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ar(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cyS[o]
l=B.kP.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb4(0,new A.ev(m,h,h,B.cN,h,h,h,h,h,h,new A.F(!0,l,h,h,h,h,12+k*3,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.ep()
p.a4(d,new A.r(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ar(o,3)*0.38)+Math.sin(n)*6))}i.mu(d,e,B.c.j(0.35),w*1.5,14)
i.mu(d,e,B.ey.j(0.55),-v*3.141592653589793*2,8)
i.mu(d,e,B.on.j(0.4),r*2.8,22)
i.yO(d,e,B.pk,8,10)
i.BI(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.h.F(w+o*0.22,0.9)
$.R()
v=new A.ar(B.S,B.Q,B.V,B.X,B.T)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.r(12,j),new A.r(t,j),v)}},
cmt(d,e){var w,v,u,t,s,r,q,p,o=this
o.mo(d,e,L.aC_)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bw(new A.a3(20,r,u,r+10),B.hg)
$.R()
p=new A.ar(B.S,B.Q,B.V,B.X,B.T)
p.r=A.ap(B.fZ,B.oh,(s+1)/2).gp(0)
d.aq(q,p)}o.mu(d,e,B.fZ.j(0.35),w,15)
o.BI(d,e,8)},
cmn(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mo(d,e,D.djn)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.h.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.h.F(s*0.13,0.7)
$.R()
m=new A.ar(B.S,B.Q,B.V,B.X,B.T)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.O(new A.r(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mu(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
l.yO(d,e,B.qg,4,14)},
cmD(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mo(d,e,D.d71)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.h.F(s,0.12)
$.R()
o=new A.ar(B.S,B.Q,B.V,B.X,B.T)
o.b=B.ab
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.O(new A.r(w,u),q*(0.12+r*0.14+p),o)}n.yO(d,e,B.po,6,12)
n.mu(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cmN(d,e){var w,v,u,t,s,r,q,p=this
p.mo(d,e,D.cME)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bw(new A.a3(r,14,r+u,22),B.jy)
$.R()
q=new A.ar(B.S,B.Q,B.V,B.X,B.T)
q.r=A.ap(B.fB,B.bL,(s+1)/2).gp(0)
d.aq(r,q)}p.mu(d,e,B.c.j(0.3),w,16)
p.BI(d,e,8)
p.yO(d,e,B.wp,5,13)},
cmy(d,e){var w,v,u,t,s,r,q
this.mo(d,e,D.ddG)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.h.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bw(new A.a3(r,q,r+8,q+(18+s*22)),B.is)
$.R()
r=new A.ar(B.S,B.Q,B.V,B.X,B.T)
r.r=[B.iy,B.dy,B.bL,B.ew][t].j(0.85).gp(0)
d.aq(q,r)}this.mu(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cmF(d,e){var w,v,u,t,s,r,q
this.mo(d,e,D.daU)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.h.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.R()
q=new A.ar(B.S,B.Q,B.V,B.X,B.T)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.r(u*(0.1+r),s),new A.r(u*(0.18+r),s+10),q)}this.yO(d,e,B.cA,7,11)},
cmU(d,e){var w,v,u,t,s,r,q,p
this.mo(d,e,D.cPq)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bw(new A.a3(q,p,q+(t-s*8),p+16),B.hg)
$.R()
q=new A.ar(B.S,B.Q,B.V,B.X,B.T)
q.r=A.ap(B.cA,B.aS,(Math.sin(r)+1)/2).gp(0)
d.aq(p,q)}this.mu(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cmS(d,e){var w,v,u,t,s,r,q
this.mo(d,e,D.dBD)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.h.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bw(new A.a3(s,r,s+28,r+8),B.hg)
$.R()
q=new A.ar(B.S,B.Q,B.V,B.X,B.T)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.aq(r,q)}this.BI(d,e,6)},
cme(d,e){var w,v,u,t,s,r,q,p
this.mo(d,e,D.dhU)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.R()
s=A.L()
s.r=B.or.j(0.75).gp(0)
d.O(new A.r(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ar(B.S,B.Q,B.V,B.X,B.T)
p.r=B.hN.j(0.85).gp(0)
p.c=3
d.ah(new A.r(q,v),new A.r(q+s*6,t),p)}this.mu(d,e,B.or.j(0.35),w,14)},
cmE(d,e){var w,v,u,t,s,r,q=this
q.mo(d,e,D.dkA)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bX(new A.r(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.R()
r=new A.ar(B.S,B.Q,B.V,B.X,B.T)
r.r=B.c.j(0.22).gp(0)
d.c1(s,r)}q.yO(d,e,B.qg,5,16)
q.BI(d,e,7)},
cmQ(d,e){var w,v,u,t,s,r,q,p,o=this
o.mo(d,e,D.dyT)
w=o.c
v=w*3.141592653589793
o.mu(d,e,B.oh.j(0.55),v*3,10)
o.mu(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.R()
p=new A.ar(B.S,B.Q,B.V,B.X,B.T)
p.r=B.oh.j(0.8).gp(0)
d.O(new A.r(v+r*34,u+q*22),4,p)}},
cmT(d,e){var w,v,u,t,s,r,q,p,o=this
o.mo(d,e,D.dCn)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bw(new A.a3(q,p,q+36,p+22),B.jy)
$.R()
q=new A.ar(B.S,B.Q,B.V,B.X,B.T)
q.r=A.ap(B.iB,B.or,r).gp(0)
d.aq(p,q)}o.BI(d,e,9)
o.mu(d,e,B.c.j(0.4),w*2.2,12)},
cm7(d,e){var w,v,u,t,s,r,q,p
this.mo(d,e,D.dqa)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bW(new A.r(v,u),34)
$.R()
s=A.L()
s.b=B.ab
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cQ(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ar(B.S,B.Q,B.V,B.X,B.T)
p.r=B.bO.j(0.85).gp(0)
d.O(new A.r(v+t*34,u+s*34),3,p)}},
cm_(d,e){var w,v,u,t,s,r,q
this.mo(d,e,D.dlH)
$.R()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.r(t,0),new A.r(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.r(0,s),new A.r(v,s),w)
r=this.c
q=u*B.h.F(r*0.85,1)
$.R()
u=A.L()
u.r=B.dy.j(0.45).gp(0)
d.aD(new A.a3(0,q,0+v,q+6),u)
this.mu(d,e,B.lk.j(0.45),-r*3.141592653589793*2,11)},
aE(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.auG.prototype={
a0M(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0M=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aSF(),$async$a0M)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a9Y(s),$async$a0M)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0M,v)},
ahQ(d){return this.cpc(d)},
cpc(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iwK(d),$async$ahQ)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ahQ,v)},
B(d){var w,v,u=null,t=A.O(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.jZ:B.iA
w=x.p
v=A.a([C.aT3(!0,B.rw,1/0,B.qP,u,s,1/0)],w)
if(!r)v.push(new A.bN(new A.n(u,u,u,u,u,new A.a7(B.aY,B.b2,B.x,A.a([B.L,B.w.j(0.35)],x.O),u,u),B.n),B.bk,new A.bK(B.aY,u,u,new A.D(B.t7,A.d("Pick a theme or your own photo",u,u,u,u,u,u,A.m(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,B.aCZ,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.db(D.bYd,u,D.fON,new C.cqh(this,d),A.bp(B.aV,u,u,u,B.c,u,B.k6,u,u,u,u,B.ci)),1),B.ae,A.E(A.eq(D.c5Z,u,D.h34,this.gcg3(),A.dj(u,u,B.w.j(0.35),u,u,u,u,u,u,B.c,u,u,B.k6,u,u,D.b6S,u,u,u,B.ci)),1)],w),B.l,u,B.e,B.i,0,u,u),u,u,8,8,u,u))
return new A.fG(1.7777777777777777,A.aE(!1,B.a3,!0,B.rw,new A.an(B.a0,u,B.b1,B.t,v,u),B.aq,t,0,u,u,u,u,u,B.aj),u)}}
C.aNW.prototype={
aX(){this.b8()
this.b6()
this.dJ()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdD())
w.ba$=null
w.a2()}}
C.aW0.prototype={}
C.aW_.prototype={}
C.aU1.prototype={}
C.a_t.prototype={
T(){return new C.aAZ()}}
C.aAZ.prototype={
Z(){var w,v,u=this
u.a3()
u.a.toString
w=new A.bc("",B.b7,B.aP)
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.at(w,v)},
t(){var w=this.d
w===$&&A.c()
w.V$=$.aw()
w.R$=0
this.a2()},
L4(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.K(x.q).f.U(D.ftQ)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).N(new C.aW0(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.O(d).ax.a===B.I,l=m?B.ef:B.c,k=A.l(20),j=A.o(n,D.c5E,B.f,n,n,new A.n(B.aV.j(0.15),n,n,A.l(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.m(n,n,m?B.aS:B.av,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bF,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bh,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.i,0,B.p),1)
j=A.A(A.a([j,B.bc,i,A.aH(n,n,n,n,A.X(B.cB,m?B.bu:B.bh,n,n,n,n),n,n,n,new C.daB(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.i,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bh,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bh,n,n,n,n,n,n,n,n,11,n,n,B.cE,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hvZ(new C.daC(o),o.e)
u=o.d
u===$&&A.c()
t=A.m(n,n,m?B.aS:B.av,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jZ:B.iA
r=A.l(12)
q=A.l(12)
p=m?B.eh:B.bO
t=A.aN(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bA(n,new A.b6(4,r,B.du),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ax(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.daD(o),n,!1,n,n,!1,n,!0,n,B.ac,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a7,n,B.L1,n,n,n,n)
u=m?B.aS:B.av
m=m?B.eh:B.bO
return A.eI(n,l,new A.cN(B.m5,A.cb(A.x(A.a([j,B.aO,i,B.aw,w,B.P,v,B.aO,t,B.bx,A.A(A.a([A.E(A.dV(B.ds,new C.daE(d),A.dj(n,n,n,n,n,n,n,n,n,u,n,n,B.co,n,new A.ba(A.l(12),B.a1),new A.ax(m,1,B.r,-1),n,n,n,n)),1),B.as,A.E(A.bJ(D.h3k,n,o.ga3R(),A.bp(B.aV,n,n,n,B.c,n,B.co,n,new A.ba(A.l(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.i,0,n,n)],h),B.E,n,B.e,B.N,0,B.p),B.t,n,B.y,n,n,B.CO,n,n,B.ah),n),n,n,n,M.CP,n,B.d7,n,new A.ba(k,B.a1),n)}}
C.a_s.prototype={
T(){return new C.aAY()}}
C.aAY.prototype={
Z(){this.a3()
var w=$.aw()
this.d!==$&&A.aQ()
this.d=new A.at(B.ax,w)},
t(){var w=this.d
w===$&&A.c()
w.V$=$.aw()
w.R$=0
this.a2()},
L4(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.K(x.q).f.U(D.frr)
return}v=this.c
v.toString
A.a6(v,!1).N(new C.aW_(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.O(d).ax.a===B.I,o=p?B.ef:B.c,n=A.l(20),m=A.o(q,D.c1Y,B.f,q,q,new A.n(B.bQ.j(0.15),q,q,A.l(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bF,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.m(q,q,p?B.bu:B.bh,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.i,0,B.p),1)
m=A.A(A.a([m,B.bc,l,A.aH(q,q,q,q,A.X(B.cB,p?B.bu:B.bh,q,q,q,q),q,q,q,new C.dax(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.i,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.l(12)
v=A.K(B.aV.j(0.25),B.r,1)
u=A.X(B.apX,B.aV.j(0.9),q,q,q,18)
l=A.o(q,A.A(A.a([u,B.as,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.i,0,q,q),B.f,q,q,new A.n(l,q,v,w,q,q,B.n),q,q,q,q,B.bH,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jZ:B.iA
t=A.l(12)
s=A.l(12)
r=p?B.eh:B.bO
v=A.aN(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bA(q,new A.b6(4,t,B.du),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ax(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.day(this),q,!1,q,q,!1,q,!0,q,B.ac,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a7,q,B.lc,q,q,q,q)
w=p?B.aS:B.av
p=p?B.eh:B.bO
return A.eI(q,o,new A.cN(B.m5,A.cb(A.x(A.a([m,B.aO,l,B.aB,v,B.bx,A.A(A.a([A.E(A.dV(B.ds,new C.daz(d),A.dj(q,q,q,q,q,q,q,q,q,w,q,q,B.co,q,new A.ba(A.l(12),B.a1),new A.ax(p,1,B.r,-1),q,q,q,q)),1),B.as,A.E(A.bJ(D.har,q,this.ga3R(),A.bp(B.bQ,q,q,q,B.c,q,B.co,q,new A.ba(A.l(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.i,0,q,q)],k),B.E,q,B.e,B.N,0,B.p),B.t,q,B.y,q,q,B.CO,q,q,B.ah),q),q,q,q,M.CP,q,B.d7,q,new A.ba(n,B.a1),q)}}
C.ZZ.prototype={
T(){return new C.azE()}}
C.azE.prototype={
Z(){var w,v=this
v.a3()
w=$.aw()
v.d!==$&&A.aQ()
v.d=new A.at(B.ax,w)
v.e!==$&&A.aQ()
v.e=new A.at(new A.bc("1",B.b7,B.aP),w)
v.f!==$&&A.aQ()
v.f=new A.at(B.ax,w)
v.r!==$&&A.aQ()
v.r=new A.at(B.ax,w)},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.V$=$.aw()
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
gKm(){var w,v=this.e
v===$&&A.c()
w=A.cX(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gal0(){var w=this.f
w===$&&A.c()
w=A.cX(B.a.i(w.a.a))
return w==null?0:w},
gb7d(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aRl(d){var w,v=B.h.D(this.gKm()+d,0.25,999999),u=B.h.fL(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.v(B.h.M(v))
else{u=B.h.ad(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb4(0,u)
this.m(new C.cIF())},
aAj(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jZ:B.iA,s=A.l(14),r=A.l(14)
u=u?B.eh:B.bO
return A.bA(w,new A.b6(4,s,B.du),w,B.bH,w,w,w,w,!0,new A.b6(4,r,new A.ax(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.l(14),B.afc),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cg4(d,e,f){return this.aAj(d,e,f,null)},
L4(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gal0()<=0){s.c.K(x.q).f.U(D.fvK)
return}r=s.c
r.toString
v=s.gKm()
u=s.gal0()
t=s.gb7d()
A.a6(r,!1).N(new C.aU1(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.ui(n),l=n?B.ef:B.c,k=A.l(24),j=x.O,i=A.a([B.aV.j(0.22),B.bQ.j(0.14)],j),h=A.l(14)
i=A.o(o,D.bW9,B.f,o,o,new A.n(o,o,A.K(B.aV.j(0.35),B.r,1),h,o,new A.a7(B.a5,B.a9,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bF,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.cE,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1)
i=A.A(A.a([i,B.bc,h,A.aH(o,o,o,o,A.X(B.cB,n?B.bu:B.bh,o,o,o,o),o,o,o,new C.cIL(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.aAj(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Qc),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.L1,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jZ:B.iA
t=A.l(14)
s=A.K(n?B.eh:B.bO,B.r,1)
r=A.aH(o,o,o,o,A.X(B.x2,n?B.aS:B.av,o,o,o,20),o,o,o,new C.cIM(p),o,o,o,o,o,B.ci)
q=p.e
q===$&&A.c()
q=A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c7x,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.eb,o,o,o,1,o,o,!1,"\u2022",o,new C.cIN(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.o(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aH(o,o,o,o,A.X(B.i0,n?B.aS:B.av,o,o,o,20),o,o,o,new C.cIO(p),o,o,o,o,o,B.ci)],w),B.l,o,B.e,B.N,0,o,o),B.f,o,o,new A.n(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.as,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.aAj(m,"Amount","0.00",B.hD),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.eb,o,o,o,1,o,o,!1,"\u2022",o,new C.cIP(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a7,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.i,0,o,o)
t=x.gv
u=A.B(new A.N(D.dee,new C.cIQ(p,m),t),t.k("ak.E"))
i=A.a([i,B.bx,v,B.aB,h,B.P,s,B.af,A.c_(B.bI,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.U,A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.cg4(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cIR(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.lc,o,o,o,o)],w))}i.push(B.aO)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bQ.j(n?0.12:0.06)],j)
h=A.l(16)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gKm()===B.h.fL(p.gKm())?B.h.M(p.gKm()):p.gKm()
s=p.gb7d()
r=A.Bn(p.gal0())
i.push(A.o(o,A.A(A.a([A.E(A.x(A.a([u,B.aw,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1),C.bH1(p.gKm()*p.gal0(),B.b3,!1,B.u)],w),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.n(o,o,v,h,o,new A.a7(B.a5,B.a9,B.x,j,o,o),B.n),o,o,o,o,B.jr,o,o,o))
i.push(B.bx)
j=A.l(14)
h=n?B.eh:B.bO
h=A.dj(o,o,o,o,o,o,o,o,o,o,o,o,B.co,o,new A.ba(j,B.a1),new A.ax(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dV(A.d("Cancel",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cIS(d),h),1),B.as,A.E(A.db(D.atq,o,D.h6l,p.ga3R(),A.bp(B.aV,o,o,0,B.c,o,B.co,o,new A.ba(A.l(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.i,0,o,o))
return A.eI(o,l,new A.cN(B.Ms,A.cb(A.x(i,B.al,o,B.e,B.N,0,B.p),B.t,o,B.y,o,o,V.tc,o,o,B.ah),o),o,o,o,B.ON,o,B.d7,o,new A.ba(k,B.a1),o)}}
C.a2C.prototype={
T(){return new C.bzm()}}
C.bzm.prototype={
Z(){var w,v,u=this
u.a3()
w=u.a.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.at(new A.bc(w,B.b7,B.aP),v)},
t(){var w=this.d
w===$&&A.c()
w.V$=$.aw()
w.R$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.O(d).ax.a===B.I,q=r?B.ef:B.c,p=A.l(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.m(s,s,r?B.aS:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.m(s,s,r?B.aS:B.av,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jZ:B.iA
v=A.aN(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bA(s,new A.b6(4,A.l(12),B.du),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fpd(t,d),s,!1,s,s,!1,s,!0,s,B.ac,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a7,s,B.ao,s,s,s,s)
u=A.E(A.dV(B.ds,new C.fpe(d),s),1)
r=A.bp(B.bQ,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eI(s,q,new A.D(B.CO,A.x(A.a([o,B.aB,v,B.aO,A.A(A.a([u,B.as,A.E(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fpf(t,d),r),1)],w),B.l,s,B.e,B.i,0,s,s)],w),B.l,s,B.e,B.N,0,B.p),s),s,s,s,s,s,B.d7,s,new A.ba(p,B.a1),s)}}
C.acZ.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.Gt.prototype={
T(){return new C.bzk(null,null)}}
C.bzk.prototype={
Z(){var w,v=this
v.a3()
w=A.bo(null,D.bD_,null,1,null,v)
w.cK(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bCd()},
gbDP(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bQ,B.b3],x.O)
case 2:return A.a([B.bv,B.aV,B.b3],x.O)
case 3:return A.a([B.aH,B.cj,B.jG],x.O)
case 4:return A.a([B.fK,B.bQ,B.fq],x.O)
case 0:return A.a([B.aV,B.bQ,B.b3],x.O)}},
B(d){var w=A.O(d),v=this.d
v===$&&A.c()
return new A.e5(A.c6(v,new C.fpb(this,new C.ui(w.ax.a===B.I)),null),null)}}
C.azx.prototype={
T(){return new C.bzl(null,null)}}
C.bzl.prototype={
Z(){var w,v=this
v.a3()
w=A.bo(null,B.nD,null,1,null,v)
w.cK(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bCe()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.fpc(this),null)}}
C.bzj.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bw(new A.a3(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aG($.R().r,B.ai,null,null,A.a([],x.v))
u.E(new A.j9(v))
w=A.L()
w.b=B.ab
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aq(v,w)
w=A.L()
w.b=B.ab
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.BP(u)
t=A.a([],x.U)
w=new A.uR(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bi(A.jH(y.B));--r
q=new A.BQ(w,r)
w.jP()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aUX(d,q,r,o,0,0.2,4.2,0.92)
p.aUX(d,q,r,s,0.52,0.11,3.2,0.58)}},
aUX(d,e,f,g,h,i,j,k){var w,v,u,t=B.h.F(g+h,1)*f,s=A.hTf(e.a.a,e,t,t+f*i,!0),r=A.ai2(s.glg().a.getBounds())
$.R()
w=A.L()
w.b=B.ab
w.c=j
w.d=B.bG
w.f=!0
v=this.f
u=k*this.e
w.sam(new A.a7(B.a5,B.a9,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.IV,null).az(0,r))
d.af(s,w)},
aE(d){return d.b!==this.b||d.d!==this.d}}
C.aQ3.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.aQ4.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.ui.prototype={}
C.auF.prototype={
T(){return new C.aHk()},
ge3(){return this.c}}
C.aHk.prototype={
Z(){var w=this
w.a3()
w.d=w.a.d
w.aiH()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Mk(w,v)
this.a2()},
aiH(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aiH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bFp(t.c,t.d.a),$async$aiH)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eXN(u,s))
return A.h(null,v)}})
return A.i($async$aiH,v)},
R9(){var w=0,v=A.j(x.H),u=this,t,s
var $async$R9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eXE(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Mk(t,s),$async$R9)
case 2:if(u.c!=null)u.m(new C.eXF(u))
return A.h(null,v)}})
return A.i($async$R9,v)},
RH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$RH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.O(p)
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.eXL(t,new C.ui(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$RH)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a9Y(q),$async$RH)
case 6:case 5:t.m(new C.eXM(t,r))
w=7
return A.b(t.R9(),$async$RH)
case 7:case 1:return A.h(u,v)}})
return A.i($async$RH,v)},
WS(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iwv(r),$async$WS)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eXz(t,new C.rt(B.o.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.R9(),$async$WS)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WS,v)},
cla(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hKJ(t,new C.eXD(u),w,v)},
acv(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.o(w,w,B.f,w,w,new A.n(w,w,new A.bG(new A.ax(v,2.5,B.r,-1),B.a1,B.a1,new A.ax(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b6E,w,w,B.n),w,22,w,w,w,w,w,22)},
abx(d){return this.bPV(d)},
bPV(d){var w=0,v=A.j(x.H),u=this
var $async$abx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eXC(u,d))
w=2
return A.b(u.R9(),$async$abx)
case 2:return A.h(null,v)}})
return A.i($async$abx,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.O(a2).ax.a===B.I,e=f?B.c6:B.hM,d=A.l(8),a0=A.X(I.a2S,f?B.bu:B.bh,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.D(B.Hr,A.A(A.a([a0,B.bn,A.d("Back to Projects",g,g,g,g,g,g,A.m(g,g,f?B.bu:B.bh,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.N,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eXO(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.X(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b1,B.t,A.a([A.bv(A.l(22),C.aT3(!0,A.l(22),1/0,B.qP,g,d,1/0),B.aq),A.ao(10,A.db(D.c_S,g,D.h8J,h.gb58(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.hp,g,new A.ba(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.l(22)
w=x.V
v=A.a([new A.ab(0,B.G,B.aV.j(f?0.5:0.38),B.eS,22),new A.ab(-4,B.G,B.bQ.j(0.2),B.J,32)],w)
u=A.l(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ab(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.l(16)
r=h.d
v=A.o(g,A.o(g,A.bv(s,new A.an(B.a0,g,B.b1,B.t,A.a([C.aT3(!0,A.l(16),1/0,B.PF,g,r.c,1/0),new A.bN(new A.n(g,g,g,g,g,new A.a7(B.aY,B.b2,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bk,g,g),A.ao(g,h.acv(!0),g,g,8,g,8,g),A.ao(g,A.cFj(h.acv(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cFj(h.acv(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cFj(h.acv(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.db(D.bWL,g,D.h23,h.gb58(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.hp,g,new A.ba(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.n(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.n(g,g,g,d,v,D.c9e,B.n),g,g,g,g,B.lR,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.l(22)
u=x.O
u=f?A.a([D.bhE,B.ol,B.hm],u):A.a([B.b3,B.aV,B.bQ],u)
t=x.V
s=A.a([new A.ab(0,B.G,B.aV.j(f?0.45:0.35),B.eS,24)],t)
r=A.l(22)
p=A.ao(g,A.X(B.js,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.l(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.o(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.m(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.n(o,g,m,n,g,g,B.n),g,g,g,g,B.hn,g,g,g)],a1),B.l,g,B.e,B.i,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.m(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bH1(h.d.gxN(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.m(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cE,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.i,0,B.p),1)
n=A.l(14)
m=A.l(14)
l=B.c.j(0.12)
k=A.K(B.h9.j(0.75),B.r,1.6)
t=A.a([new A.ab(0,B.G,B.aH.j(0.28),B.cM,14)],t)
j=B.aH.j(0.22)
i=A.l(10)
u=A.o(g,A.bv(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bHU,A.A(A.a([o,B.as,A.aE(!1,B.a3,!0,g,A.aM(!1,n,!0,A.eE(new A.D(K.wG,A.x(A.a([A.o(g,D.at_,B.f,g,g,new A.n(j,g,A.K(B.aH.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cq,g,g,g),B.fE,D.fRD],a1),B.l,g,B.e,B.N,0,B.p),g),g,new A.n(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcl9(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.aj)],a1),B.l,g,B.e,B.i,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.n(g,g,g,v,s,new A.a7(B.ay,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fG(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bx,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b4,A.db(B.a4J,g,D.fPt,h.gbEi(),A.bp(B.aV,g,g,g,B.c,g,B.hR,g,new A.ba(A.l(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.i,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.ef:B.c
v=A.l(14)
u=A.K(f?B.eh:B.bO,B.r,1)
t=A.X(B.a3d,f?B.bu:B.bh,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.o(g,A.x(A.a([t,B.U,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.m(g,g,f?B.bu:B.bh,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.i,0,B.p),B.f,g,g,new A.n(w,g,u,v,g,g,B.n),g,g,g,g,B.qL,g,g,1/0))}else B.d.u(d,new A.N(w,new C.eXP(h,new C.ui(f)),A.T(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.yV,A.as(A.n_(g,f?B.bu:B.bh,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c5(g,e,A.bm(!0,A.x(A.a([new A.D(B.CF,a0,g),A.E(A.cb(A.x(d,B.E,g,B.e,B.i,0,B.p),B.t,g,B.y,g,g,B.z7,g,g,B.ah),1)],a1),B.E,g,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bHZ(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.ef:B.c,p=A.l(16),o=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.cM,12)],x.V),n=A.l(16),m=A.o(u,u,B.f,u,u,D.b9p,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.l(12)
l=A.o(u,A.X(s?B.ij:B.h3,B.b3,u,u,u,20),B.f,u,u,new A.n(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bM
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.m(u,u,r?B.aS:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd0S()
v=A.Bn(d.d)
B.d.u(t,A.a([B.aw,A.d(w+" "+v,u,u,u,u,u,u,A.m(u,u,r?B.bu:B.bh,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.b9,B.N,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bQ.j(0.1)],x.O)
w=A.l(12)
k=A.o(u,C.bH1(d.c*d.d,B.b3,!1,B.u),B.f,u,u,new A.n(u,u,u,w,u,new A.a7(B.a5,B.a9,B.x,k,u,u),B.n),u,u,u,u,B.hp,u,u,u)
w=x.p
return A.o(u,A.bv(n,new A.EV(A.A(A.a([m,A.E(new A.D(B.amS,A.A(A.a([l,B.bc,t,B.ae,k,A.aH(u,u,u,u,A.X(B.cB,(r?B.bu:B.bh).j(0.75),u,u,u,20),u,u,u,new C.eXA(this,d),u,u,u,u,u,B.ci)],w),B.l,u,B.e,B.i,0,u,u),u),1)],w),B.al,u,B.e,B.i,0,u,u),u),B.aq),B.f,u,D.b8f,new A.n(q,u,u,p,o,u,B.n),u,u,u,B.da,u,u,u,u)}}
C.af2.prototype={
F6(d){return this.bRi(d)},
bRi(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$F6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pB(d,o,!1),$async$F6)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).N(null)
w=4
return A.b(A.bO(U.Cz,null,x.H),$async$F6)
case 4:s=t.d
w=5
return A.b(C.fZF(!0,o,s),$async$F6)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Ho(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$F6)
case 6:p=f
w=7
return A.b(A.pA(o,!1),$async$F6)
case 7:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$F6,v)},
a0O(d){return this.cBH(d)},
cBH(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0O=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pB(d,s,!1),$async$a0O)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).N(null)
A.hE(d,new C.auz(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pA(s,!1),$async$a0O)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0O,v)},
Ra(d){return this.cxK(d)},
cxK(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ra=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).N(null)
w=3
return A.b(A.hE(d,D.aMN,!0,"NgmyWorksheetProjectScan",x.N),$async$Ra)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bH2(s),$async$Ra)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.K(x.q).f.U(D.fuR)
w=1
break}q=C.hlr(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dL(p,x.H),$async$Ra)
case 5:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Ra,v)},
a0P(d){return this.cK2(d)},
cK2(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0P=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).N(null)
w=3
return A.b(C.bGv(),$async$a0P)
case 3:s=f
if(s==null){w=1
break}r=C.hlr(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dL(q,x.H),$async$a0P)
case 4:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0P,v)},
B(d){var w=this,v=null,u=A.O(d).ax.a===B.I,t=new C.ui(u),s=w.d.d.length,r=u?B.ef:B.c,q=A.l(28),p=A.a([new A.ab(0,B.G,B.w.j(u?0.35:0.08),B.kG,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wF,A.o(v,A.x(A.a([w.cAg(d,t,s),new A.D(D.bHh,A.x(A.a([w.b88(t,"QR restore"),B.U,A.A(A.a([w.b37(t,!0,B.ju,B.aH,B.aH,new C.eXR(w,d),"Show to scan","QR code"),B.as,w.aAk(t,B.jv,B.b8,B.bi,new C.eXS(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.i,0,v,v),B.db,w.b88(t,"Backup files"),B.U,A.A(A.a([w.aAk(t,B.hE,B.aV,B.bQ,new C.eXT(w,d),"Full copy","Backup file"),B.as,w.aAk(t,B.zO,B.at,B.aQ,new C.eXU(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.i,0,v,v)],o),B.E,v,B.e,B.i,0,B.p),v)],o),B.l,v,B.e,B.N,0,B.p),B.aq,v,v,new A.n(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cAg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.fe,B.cX,B.fX],k):A.a([B.b3,B.aV,B.bQ],k)
w=A.ao(l,A.X(B.vg,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.o(l,l,B.f,l,l,new A.n(B.c.j(0.35),l,l,A.l(4),l,l,B.n),l,4,l,B.kB,l,l,l,36),l,l,l)
u=A.l(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ab(0,B.G,B.w.j(0.2),B.cM,12)],x.V)
r=this.d
s=A.o(l,C.aT3(!0,A.l(13),64,D.bRX,l,r.c,64),B.aq,l,l,new A.n(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.m(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,E.acx,l,l,l)
r=C.bH1(r.gxN(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.l(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.o(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bHF,A.x(A.a([v,A.A(A.a([s,B.eu,A.E(A.x(A.a([u,B.aw,t,B.P,A.A(A.a([r,B.ae,A.o(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.m(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.n(q,l,o,p,l,l,B.n),l,l,l,l,B.fN,l,l,l)],m),B.l,l,B.e,B.i,0,l,l)],m),B.E,l,B.e,B.i,0,B.p),1),A.aH(l,l,l,l,A.X(B.cB,B.c.j(0.85),l,l,l,l),l,l,l,new C.eXQ(d),l,l,l,A.n4(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,B.aVc,l,l,l,l),l,l)],m),B.E,l,B.e,B.i,0,l,l)],m),B.l,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.n(l,l,l,l,l,new A.a7(B.ay,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b88(d,e){var w=null,v=A.o(w,w,B.f,w,w,new A.n(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ae,A.d(e.toUpperCase(),w,w,w,w,w,w,A.m(w,w,d.a?B.bu:B.bh,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
b37(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.l(18),p=A.l(18),o=d.a,n=o?D.alo:B.aS
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.eh:B.bO
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.ab(0,B.G,B.aH.j(0.12),B.cM,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.l(12)
s=A.K(h.j(0.35),B.r,1)
t=A.o(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.n(u,r,s,t,r,r,B.n),r,r,r,r,B.te,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.m(r,r,o?B.aS:B.av,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aE(!1,B.a3,!0,r,A.aM(!1,q,!0,A.eE(new A.D(B.a1h,A.x(A.a([t,B.af,u,B.bF,A.d(j,r,r,r,r,r,r,A.m(r,r,o?B.bu:B.bh,r,r,r,r,r,r,r,r,11,r,r,B.cE,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r),r,new A.n(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
aAk(d,e,f,g,h,i,j){return this.b37(d,!1,e,f,g,h,i,j)}}
C.auz.prototype={
T(){return new C.bof()}}
C.bof.prototype={
Z(){this.a3()
this.agA()},
agA(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$agA=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bH3(p.c,p.d),$async$agA)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eXu(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eXv(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agA,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.O(d).ax.a===B.I,f=g?B.C5:B.hM,e=i.d
e=e==null?h:B.a.X(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eK,g?B.aa:B.an,h,h,h,18),h,h,h,new C.eXw(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.m(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.tY],u),B.l,h,B.e,B.i,0,h,h)
t=A.l(24)
s=x.O
s=g?A.a([B.fe,B.cX,B.fX],s):A.a([B.b3,B.aV,B.bQ],s)
r=x.V
q=A.a([new A.ab(0,B.G,B.aV.j(g?0.4:0.3),B.eS,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dl,B.K,h,h)
p=C.bH1(p.gxN(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.l(20)
l=v===1?"item":"items"
s=A.o(h,A.x(A.a([o,B.am,A.A(A.a([p,B.ae,A.o(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.m(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.n(n,h,h,m,h,h,B.n),h,h,h,h,B.fN,h,h,h)],u),B.l,h,B.b9,B.i,0,h,h)],u),B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.n(h,h,h,t,q,new A.a7(B.ay,B.aC,B.x,s,h,h),B.n),h,h,h,h,B.a1C,h,h,1/0)
t=g?D.bti:B.c
q=A.l(24)
p=A.K(w?B.aH.j(0.4):B.aV.j(0.3),B.r,1)
r=A.a([new A.ab(0,B.G,B.w.j(g?0.25:0.06),B.dn,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.W6,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eze)
else{m=A.l(20)
l=A.K(B.bm,B.r,1)
o.push(A.o(h,A.qf(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.n(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bT,h,h,h))}}o.push(B.aO)
n=w?B.aH:B.aV
n=n.j(g?0.15:0.1)
m=A.l(12)
l=A.K((w?B.aH:B.aV).j(0.35),B.r,1)
k=w?B.PV:B.Qs
k=A.X(k,w?B.aH:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.o(h,A.A(A.a([k,B.as,A.E(A.d(j,h,h,h,h,h,h,A.m(h,h,g?B.aa:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.i,0,h,h),B.f,h,h,new A.n(n,h,l,m,h,h,B.n),h,h,h,h,B.hR,h,h,h))
return A.c5(h,f,A.bm(!0,A.x(A.a([new A.D(B.P0,e,h),A.E(A.cb(A.x(A.a([s,B.aO,A.o(h,A.x(o,B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.n(t,h,p,q,r,h,B.n),h,h,h,h,B.uS,h,h,1/0)],u),B.l,h,B.e,B.i,0,B.p),B.t,h,B.y,h,h,B.ao1,h,h,B.ah),1)],u),B.l,h,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.auE.prototype={
T(){return new C.aHj(A.zV(B.Of,B.oe,B.vo))}}
C.aHj.prototype={
t(){this.d.t()
this.a2()},
aPi(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j3(w,d)},
cgX(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.iuw(t)
if(s!=null){this.aPi(s)
return}r=C.hAy(t)
if(r!=null)q=A.cS(r,p,0)
else q=!1
if(q){this.aPi(B.a.i(B.a.aY(r,B.a.cj(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eR(A.a([A.aH(t,t,t,t,A.X(u.f?B.v3:B.Q2,t,t,t,t,t),t,t,t,new C.eXy(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.C5,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.h1W,t,t,t,1,t,!0),q=A.zU(u.d,B.bY,u.gcgW()),p=A.l(28)
p=A.as(A.o(t,t,B.f,t,t,new A.n(t,t,A.K(B.aV,B.r,3),p,A.a([new A.ab(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.l(16)
return A.c5(r,B.w,new A.an(B.a0,t,B.b1,B.t,A.a([q,p,A.ao(32,A.o(t,D.h0G,B.f,t,t,new A.n(w,t,A.K(B.aV.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jr,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aMg.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.P8.prototype={
T(){return new C.aHl(D.aex,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aHl.prototype={
gcHQ(){return J.bIc(this.e,0,new C.eYg())},
Z(){this.a3()
$.aU.bZ$.push(this)
this.ws()},
t(){$.aU.hZ(this)
this.a2()},
jo(d){if(d===B.fW)this.ws()},
ws(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$ws=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DI(q.a.c).dc(0,B.k5),$async$ws)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eYc(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eYd(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ws,v)},
IF(d){return this.bO1(d)},
bO0(){return this.IF(null)},
bO1(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iwx(l,d),$async$IF)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
r=s.a
q=s.b
p=new C.lC(l,r,q,D.dqq,new A.V(Date.now(),0,!1))
w=4
return A.b(C.Mk(t.a.c,p),$async$IF)
case 4:o=f
w=5
return A.b(t.ws(),$async$IF)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.K(x.q).f.U(D.frV)
w=1
break}n=J.aT(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gP(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.K(q).f.U(D.ftK)
else n.K(q).f.U(A.b2(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.Fa(m)
case 1:return A.h(u,v)}})
return A.i($async$IF,v)},
Fa(d){return this.ckW(d)},
ckW(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Fa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hE(s,new C.auF(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$Fa)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Mk(u.a.c,t),$async$Fa)
case 5:case 4:w=6
return A.b(u.ws(),$async$Fa)
case 6:return A.h(null,v)}})
return A.i($async$Fa,v)},
wd(d){return this.c3o(d)},
c3o(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$wd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bGv(),$async$wd)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hE(r,D.aMN,!0,"NgmyWorksheetProjectScan",x.N),$async$wd)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bH2(q),$async$wd)
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
r.U(A.b2(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hlr(s)
w=15
return A.b(C.Mk(t.a.c,p),$async$wd)
case 15:o=f
w=16
return A.b(t.ws(),$async$wd)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.K(x.q).f.U(D.ftP)
w=1
break}r.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.Fa(p)
case 1:return A.h(u,v)}})
return A.i($async$wd,v)},
ON(d){return this.bME(d)},
bME(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$ON=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cg(null,null,!0,null,new C.eXY(d),s,null,!0,!0,x.y),$async$ON)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.p9(t.a.c,A.a([],x.D)),$async$ON)
case 6:w=7
return A.b(t.ws(),$async$ON)
case 7:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.fs_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ON,v)},
cl8(d){var w=this.c
w.toString
A.bU(B.L,null,new C.eY6(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b8L(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.l(16),p=g.a
if(p)w=B.jZ
else w=B.c
v=A.l(16)
u=A.K(p?B.eh:B.bO,B.r,1)
t=d.j(0.14)
s=A.l(12)
s=A.o(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.n(t,r,r,s,r,r,B.n),r,r,r,r,B.bS,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.m(r,r,p?B.aS:B.av,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aE(!1,B.a3,!0,r,A.aM(!1,q,!0,A.o(r,A.x(A.a([s,B.af,t,B.bF,A.d(h,r,r,r,r,r,r,A.m(r,r,p?B.bu:B.bh,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.n(w,r,u,v,r,r,B.n),r,r,r,r,B.ta,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
a1i(d,e){return this.ckX(d,e)},
ckX(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1i=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.L,null,new C.eY1(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a1i)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hKJ(r,new C.eY2(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.OP(d,e),$async$a1i)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1i,v)},
b5L(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.l(12)
s=A.o(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.n(t,u,u,s,u,u,B.n),u,u,u,u,B.bS,u,u,u)
if(d)t=B.aA
else t=h.a?B.aS:B.av
t=A.d(j,u,u,u,u,u,u,A.m(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.m(u,u,w?B.bu:B.bh,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.i,0,B.p),1)
return A.aE(!1,B.a3,!0,u,A.aM(!1,u,!0,new A.D(B.CM,A.A(A.a([s,B.bc,t,A.X(B.eI,w?B.bu:B.bh,u,u,u,u)],v),B.l,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj)},
crX(d,e,f,g,h,i){return this.b5L(!1,d,e,f,g,h,i)},
OP(d,e){return this.bMO(d,e)},
bMO(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lm(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$OP)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bFb(t.a.c,d.a),$async$OP)
case 6:w=7
return A.b(t.ws(),$async$OP)
case 7:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$OP,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.ui(n),l=n?B.c6:B.hM
if(p.f)n=D.bfn
else{w=A.aD(d,B.dE,x.w).w
v=p.bH5(m)
u=p.c2s(m)
t=p.gbEb()
if(n)s=B.jZ
else s=B.c
r=A.l(13)
q=x.p
t=A.a([v,B.af,u,B.aO,new C.Gt(A.o(o,A.A(A.a([p.aDU(B.PE,"Projects",m,D.aex),p.aDU(B.uY,"Cashier",m,D.b37),p.aDU(B.HJ,"Family Tree",m,D.hPa)],q),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.n(s,o,o,r,o,o,B.n),o,o,o,o,o,o,o,o),14,B.eC,0.95,t,o),B.bx],q)
v=p.d
if(v===D.aex){v=J.ad(p.e)
B.d.u(t,A.a([A.A(A.a([A.d("Projects ("+v+")",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b4,new C.azx(p.gaTI(),o)],q),B.l,o,B.e,B.i,0,o,o),B.aB,p.crZ(m)],q))}else{n=p.a
if(v===D.b37)t.push(new C.aqq(n.c,m,o))
else{v=p.r
t.push(new C.arF(n.c,n.d,n.e,n.f,new C.eYj(p),new C.eYk(p),new A.bl(v,x.b4)))}}n=A.cb(A.x(t,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,new A.P(20,w.r.b+8,20,32),o,o,B.ah)}return A.c5(o,l,A.bm(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bH5(d){var w=null,v=A.l(8),u=d.a,t=A.X(I.a2S,u?B.bu:B.bh,w,w,w,16)
return A.aM(!1,v,!0,new A.D(B.k7,A.A(A.a([t,B.bn,A.d("Back to Profile",w,w,w,w,w,w,A.m(w,w,u?B.bu:B.bh,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.N,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eXV(this),w,w,w,w,w,w,w)},
gbEb(){switch(this.d.a){case 0:return D.adF
case 1:return D.hE0
case 2:return D.adG}},
c2s(d){var w=null,v=A.l(15),u=A.a([new A.ab(0,B.G,B.aV.j(0.35),B.cz,16)],x.V),t=x.p,s=A.A(A.a([A.o(w,D.c1O,B.f,w,w,new A.n(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bc,D.bMg,A.aE(!1,B.a3,!0,w,A.aM(!1,A.l(12),!0,A.o(w,D.c_8,B.f,w,w,new A.n(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eXZ(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)],t),B.E,w,B.e,B.i,0,w,w),r=B.b3.j(0.55),q=A.l(12)
return new C.Gt(A.o(w,A.x(A.a([new A.D(B.Hk,s,w),A.o(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.m(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aw,A.d(A.Bn(this.gcHQ()),w,w,w,w,w,w,D.fLE,w,w,w)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.n(r,w,w,q,w,w,B.n),w,w,w,B.t9,B.jr,w,w,1/0)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.n(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hE_,w)},
aDU(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.l(12),r=t?B.aV:B.L,q=A.l(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.ab(0.5,B.G,B.aV.j(0.42),B.cM,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bh
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bh
return A.E(A.aE(!1,B.a3,!0,u,A.aM(!1,s,!0,A.cU(u,A.A(A.a([w,B.e7,new A.df(1,B.cl,A.d(e,u,1,B.a2,u,u,u,A.m(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.b9,B.i,0,u,u),u,u,B.ck,new A.n(r,u,p,q,o,u,B.n),B.iQ,u,u,u,u,B.Hs,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eYf(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),1)},
crZ(d){var w,v,u,t,s,r,q=this,p=null
if(J.ct(q.e)){w=d.a
v=w?B.ef:B.c
u=A.l(15)
t=A.o(p,D.c_f,B.f,p,p,new A.n(p,p,p,p,A.a([new A.ab(2,B.G,B.aV.j(0.5),B.eS,28)],x.V),D.cbN,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.m(p,p,w?B.aS:B.av,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Gt(A.o(p,A.x(A.a([t,B.db,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.m(p,p,w?B.bu:B.bh,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.e3,A.A(A.a([A.E(q.aVi(B.jv,"Scan QR",new C.eY9(q),d),1),B.as,A.E(q.aVi(B.zO,"Upload file",new C.eYa(q),d),1)],r),B.l,p,B.e,B.i,0,p,p),B.aB,A.bJ(D.hcp,p,q.gaTI(),A.bp(B.aV,p,p,p,B.c,B.hh,p,p,new A.ba(A.l(12),B.a1),p,p,p))],r),B.l,p,B.e,B.i,0,B.p),B.f,p,p,new A.n(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bIL,1.05,D.adF,p)}w=J.b9(q.e,new C.eYb(q,d),x.l)
w=A.B(w,w.$ti.k("ak.E"))
return new C.Gt(A.x(w,B.l,p,B.e,B.i,0,B.p),16,B.bS,1,D.adF,p)},
aVi(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.l(12),t=A.l(12),s=A.l(12),r=A.K(B.aV.j(0.45),B.r,1)
return A.aE(!1,B.a3,!0,u,A.aM(!1,t,!0,A.o(w,A.x(A.a([A.X(d,B.b3,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.fJQ,B.K,w,w)],x.p),B.l,w,B.e,B.N,0,B.p),B.f,w,w,new A.n(w,w,r,s,w,w,B.n),w,w,w,w,B.a15,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)},
crY(d,e){var w,v,u=null,t=e.a,s=t?B.ef:B.c,r=A.l(14),q=A.K(t?B.eh:B.bO,B.r,1),p=A.a([new A.ab(0,B.G,B.w.j(t?0.35:0.08),B.et,10)],x.V),o=A.l(14),n=t?B.bu:B.bh
n=A.bv(B.Yf,new A.fG(1.7777777777777777,C.aT3(!0,B.fj,1/0,B.PE,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.m(u,u,t?B.aS:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.aw,A.d(""+d.d.length+" budget items \xb7 "+A.Bn(d.gxN()),u,u,u,u,u,u,D.fHN,u,u,u)],w),B.E,u,B.e,B.i,0,B.p),1)
return A.o(u,A.aE(!1,B.a3,!0,u,A.aM(!1,o,!0,A.x(A.a([n,new A.D(B.bH,A.A(A.a([v,A.aH(u,u,u,u,A.X(Y.a3X,t?B.bu:B.bh,u,u,u,u),u,u,u,new C.eY7(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.i,0,u,u),u)],w),B.E,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eY8(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),B.f,u,u,new A.n(s,u,q,r,p,u,B.n),u,u,u,B.el,u,u,u,1/0)}}
C.bB7.prototype={}
C.rt.prototype={
aj(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd0S(){var w,v,u,t,s=this.c
if(s===B.h.fL(s))w=B.o.v(B.h.M(s))
else{v=B.h.ad(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lC.prototype={
gxN(){return B.d.cC(this.d,0,new C.cI_())},
aj(){var w=this,v=w.d,u=A.T(v).k("N<1,ac<q,@>>")
v=A.B(new A.N(v,new C.cHZ(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bgb(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lC(w.a,w.b,v,u,w.e)},
bfU(d){return this.bgb(d,null)},
TV(d){return this.bgb(null,d)}}
C.Iy.prototype={
a7(){return"FamilyGender."+this.b}}
C.i5.prototype={
aj(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hFS(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aGE(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.i5(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.amD.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.kZ.prototype={
gar0(){var w=this.f
return new A.Y(w,new C.bU1(),A.T(w).k("Y<1>")).gJ(0)},
aj(){var w=this,v=w.f,u=A.T(v).k("N<1,ac<q,@>>")
v=A.B(new A.N(v,new C.bU0(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.imD(w.y),"games",w.z],x.N,x.z)},
x9(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kZ(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bga(d,e){var w=null
return this.x9(w,w,w,d,e,w,w,w,w)},
cRc(d,e,f,g,h,i,j){return this.x9(d,e,null,f,g,h,i,j,null)},
aGJ(d,e){var w=null
return this.x9(w,w,w,w,d,w,w,e,w)},
cRe(d,e,f,g,h,i,j,k){return this.x9(d,e,null,f,g,h,i,j,k)},
cPI(d){var w=null
return this.x9(w,w,w,w,w,w,w,d,w)},
cQ5(d){var w=null
return this.x9(w,w,w,w,w,w,w,w,d)},
bfO(d){var w=null
return this.x9(w,w,d,w,w,w,w,w,w)},
aGu(d){var w=null
return this.x9(w,w,w,w,w,d,w,w,w)},
cQK(d,e,f){var w=null
return this.x9(w,d,w,w,e,w,w,f,w)},
cPv(d){var w=null
return this.x9(w,w,w,d,w,w,w,w,w)},
cQh(d,e){var w=null
return this.x9(d,w,w,w,w,w,e,w,w)}}
C.cI0.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cI1.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aJs.prototype={}
C.bbD.prototype={
ak(d){this.a=d.a
this.b=d.b},
cZ(d){var w=new C.bbD()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b5(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bbC.prototype={
gx_(){return!0},
gGK(){return this.z.b<this.b.length},
aWZ(d){switch(0){case 0:return d.a.c}},
aWF(d){switch(0){case 0:return d.a.d}},
bWU(d,e){switch(0){case 0:return new A.i_(d,e)}},
bWh(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hi(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iT(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Ih(b4)
switch(0){case 0:v=b5.b
u=new A.kV(0,v,0,1/0)
t=w===B.VZ
break}s=A.a([],x.gZ)
r=A.S(x.gF,x.S)
for(b3=b1.z,q=B.d.fN(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hi(b4,u,!0)
f=b1.aWZ(g)
f.toString
e=b1.aWF(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJs(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJs(k,j,i))}d=s.length
switch(0){case 0:q=b5.cB(new A.i_(m,l))
a0=q.a
a1=q.b
b1.a=new A.iT(0,0,a0,a1)
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
a8=b1.aWZ(g)
e=b1.aWF(g)
e.toString
a9=b1.bWh(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bWU(a6,a3+a9)
b0=g.a
g.a=new A.iT(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fV(d){var w,v,u,t,s,r=this
r.lF(d)
w=d.b
w.iy()
v=A.ds()
u=r.a
v.ec(u.a,u.b,0,1)
w.px(0,v)
for(u=r.z,u=B.d.du(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].fV(d)
w.nI(0)},
Hg(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
iy(){return this.z}}
C.bzn.prototype={}
var z=a.updateTypes(["aB<~>()","Q(i5)","~()","Q(kZ)","Q(nt)","ac<q,@>(kZ)","H(kZ,kZ)","H(i5,i5)","q(i5)","kZ(ac<@,@>)","Q(lC)","nt(ac<@,@>)","ac<q,@>(nt)","Q(uT)","uT()","H(i5)","ai<i5>()","Q(zC)","a0v(Z)","q?(i5)","eS<q?>(i5)","aB<~>(lC)","Q(rt)","ac<q,@>(i5)","i5(ac<@,@>)","H(lC,lC)","~(bf)","v(oM)","Q(agl)","H(H,aan)","Uf(Z)","Q(MY)","Q(uS)","~(i5)","q(q)","WA(Z)","Ue(Z)","aeI(Z)","a_r(Z)","i5(i5)","cK(bC<q,GJ>)","cK(L1)","a_V(Z)","H?(i5)","i5()","Q(L1)","D(i5)","~(Iy)","a_R(Z)","v(Iy,q,a_)","Q(age)","bC<q,ai<ac<q,@>>>(q,ai<nt>)","a_T(Z)","+count,id,name(H,q,q)(kZ)","kZ(kZ)","q(kZ)","a0Q(Z)","Q(lR)","lR()","ZZ(Z)","a2C(Z)","a_t(Z)","a_s(Z)","~(H)","~(q,ls?)","v(rt)","af2(Z)","~(nQ)","aB<~>([q?])","G(G,lC)","v(lC)","G(G,rt)","ac<q,@>(rt)","rt(ac<@,@>)","ai<ls>()","uS()","q(V)","lC(ac<@,@>)","cw(Ix)","q(lC)","ac<q,@>(lC)","H(nt,nt)","kZ(ac<q,@>)","a0P(Z)"])
C.fRJ.prototype={
$1(d){return d.a+" "+d.b},
$S:132}
C.fRI.prototype={
bpv(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rk(s,d,B.i2,"book",B.H7),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.M6(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bpv(d)},
$S:257}
C.fRK.prototype={
$1(d){return d.b},
$S:132}
C.h0T.prototype={
$1(d){var w=null
return A.eI(w,B.L,new A.QC(this.a,this.b,w),w,w,0,B.a1i,w,B.d7,w,w,w)},
$S:46}
C.fEL.prototype={
$1(d){return d!=null},
$S:240}
C.fEM.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:240}
C.fER.prototype={
$1(d){if(this.a)return new A.r(d.a*520,d.b*160)
return d},
$S:172}
C.fPr.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fe(d,w,w,w,A.hi(w,B.tP,w,w,w,w,w,w,w,B.dF,w,w,10.5,w,B.eD,w,!0,w,w,w,w),w),u=f?B.eD:B.wP
return new A.ob(D.bE2,A.abd(A.a([new A.h0(130,w,v),new A.zB(1,B.HC,A.fe(e,w,w,w,A.hi(w,g==null?D.eBC:g,w,w,w,w,w,w,w,B.dF,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.yM,B.lX))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:2275}
C.fPq.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.w3(999)
f=A.xJ(A.lM(h,A.fe("Cashier",h,h,h,A.hi(h,D.AJ,h,h,h,h,h,h,h,B.dF,h,h,10,h,B.eD,h,!0,h,h,h,h),h),h,new A.kW(D.eBt,h,f,B.i7,h),h,h,D.bEw,h))
w=A.xJ(A.fe("Debt receipt",h,h,h,A.hi(h,h,h,h,h,h,h,h,h,B.dF,h,h,22,h,B.eD,h,!0,h,h,h,h),h))
v=A.xJ(A.fe(C.xp(new A.V(Date.now(),0,!1),!0),h,h,h,D.ac4,h))
u=A.w3(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fe(s,h,h,h,A.hi(h,h,h,h,h,h,h,h,h,B.dF,h,h,14,h,B.eD,h,!0,h,h,h,h),h)
r=A.fe("Person who owes",h,h,h,D.ac4,h)
q=A.w3(10)
p=x.Z
u=A.lM(h,A.zt(A.a([s,new A.h0(h,2,h),r,new A.h0(h,10,h),A.lM(h,A.zt(A.a([A.fe("Amount owed",h,h,h,D.ac4,h),new A.h0(h,2,h),A.fe(A.Bn(t.c),h,h,h,A.hi(h,D.AJ,h,h,h,h,h,h,h,B.dF,h,h,20,h,B.eD,h,!0,h,h,h,h),h)],p),B.t0,B.lX),h,new A.kW(B.pQ,h,q,B.i7,h),h,h,D.bDJ,1/0)],p),B.t0,B.lX),h,new A.kW(B.aOa,h,u,B.i7,h),h,h,D.bFJ,1/0)
q=new A.nS(D.eBw,0.9,B.lg)
r=A.w3(12)
s=i.c
o=s.$2("Original due",C.xp(t.r,!1))
n=s.$2("Current due",C.xp(t.f,!1))
m=i.d
l=new A.nS(m,1.1,B.lg)
k=A.w3(8)
j=i.a
k=A.a([o,n,new A.h0(h,6,h),A.lM(h,A.xJ(A.fe(t.gaNQ(),h,h,h,A.hi(h,m,h,h,h,h,h,h,h,B.dF,h,h,11,h,B.eD,h,!0,0.5,h,h,h),h)),h,new A.kW(h,new A.q2(l,l,l,l),k,B.i7,h),h,h,D.bEF,1/0),new A.h0(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.AJ))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.AJ))
else{n=A.fe("Missed days ("+n+")",h,h,h,A.hi(h,B.tP,h,h,h,h,h,h,h,B.dF,h,h,10.5,h,B.eD,h,!0,h,h,h,h),h)
m=A.T(o).k("N<1,TO>")
o=A.B(new A.N(o,new C.fPp(),m),m.k("ak.E"))
B.d.u(k,A.a([new A.h0(h,4,h),n,new A.h0(h,6,h),new C.bbC(5,5,new C.bbD(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.h0(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.h0(h,8,h),w,new A.h0(h,3,h),v,new A.h0(h,16,h),u,new A.h0(h,10,h),A.lM(h,A.zt(k,B.yM,B.lX),h,new A.kW(h,new A.q2(q,q,q,q),r,B.i7,h),h,h,B.amW,1/0)],p)
w=j.a
if(w!=null){v=new A.nS(B.K8,1,B.lg)
B.d.u(f,A.a([new A.h0(h,16,h),A.fe("Debtor signature",h,h,h,A.hi(h,B.tP,h,h,h,h,h,h,h,B.dF,h,h,10,h,B.eD,h,!0,h,h,h,h),h),new A.h0(h,6,h),A.lM(h,new A.IQ(w,B.Ys,h,h),h,new A.kW(h,new A.q2(v,v,v,v),A.w3(6),B.i7,h),82,h,B.OY,1/0)],p))}f.push(new A.h0(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fe(w,h,h,h,D.fA4,h))
f.push(new A.h0(h,18,h))
f.push(A.xJ(A.fe("NGMY.ORG",h,h,h,A.hi(h,D.AJ,h,h,h,h,h,h,h,B.dF,h,h,14,h,B.eD,h,!0,1.8,h,h,h),h)))
return f},
$S:386}
C.fPp.prototype={
$1(d){var w=null,v=new A.nS(D.K9,0.7,B.lg),u=A.w3(999)
return A.lM(w,A.fe(C.xp(d,!1),w,w,w,A.hi(w,D.K9,w,w,w,w,w,w,w,B.dF,w,w,9.5,w,B.eD,w,!0,w,w,w,w),w),w,new A.kW(w,new A.q2(v,v,v,v),u,B.i7,w),w,w,D.bKb,w)},
$S:2276}
C.c9o.prototype={
$1(d){var w=null,v=B.bC.j(0.08),u=A.l(999),t=A.K(B.bC.j(0.28),B.r,1)
return A.o(w,A.d(C.xp(d,!1),w,w,w,w,w,w,D.fHe,w,w,w),B.f,w,w,new A.n(v,w,t,u,w,w,B.n),w,w,w,w,B.eQ,w,w,w)},
$S:2277}
C.h1p.prototype={
$1(d){var w=null,v=A.aD(d,B.bX,x.w).w,u=A.l(26),t=A.aH(w,w,w,w,D.c2N,w,w,w,new C.h1m(d),w,w,w,w,w,B.ci),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eI(w,B.L,new A.cN(new A.aY(0,380,0,v.a.b*0.9),A.aE(!1,B.a3,!0,u,new A.D(B.a16,A.x(A.a([new A.bK(B.a9,w,w,t,w),new A.df(1,B.cl,A.cb(A.x(A.a([new A.e5(new C.b0A(r,w),s),B.U,A.A(A.a([A.E(A.eq(B.zW,w,D.h8E,new C.h1n(s,r,d),A.dj(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fh,w,new A.ba(A.l(14),B.a1),new A.ax(q,1,B.r,-1),w,w,w,w)),1),B.ae,A.E(A.db(B.a4z,w,D.h52,new C.h1o(r,d),A.bp(B.b3,w,w,w,B.c,w,B.fh,w,new A.ba(A.l(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.i,0,w,w)],p),B.l,w,B.e,B.N,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.N,0,B.p),w),B.f,B.av,0,w,w,w,w,w,B.aj),w),w,w,0,A_.a1u,w,B.d7,w,w,w)},
$S:46}
C.h1m.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h1n.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.ap$.x.h(0,t.a)
m=m==null?null:m.gbf()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lz(2.5),$async$$0)
case 4:w=3
return A.b(e.hc(B.he),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eM(B.dD.gaT(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aB(o,0,32)
w=5
return A.b(A.rn(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.h1o.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fWj(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.K(x.q).f
s.U(A.b2(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h1h.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.b
return A.eI(w,B.av,A.x(A.a([new A.D(D.bFx,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nf,w,w,w),1),A.aH(w,w,w,w,B.lt,w,w,w,new C.h1f(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),w),new A.df(1,B.cl,new A.D(B.f2,A.bv(A.l(14),A.fY(t,B.A,w,w,B.cn,B.dB,!1,w,!1,w,w),B.aq),w),w),new A.D(B.OB,new A.a5(1/0,w,A.db(B.nR,w,D.aYz,new C.h1g(t,this.c,d),A.bp(B.b3,w,w,w,B.c,w,w,w,new A.ba(A.l(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.N,0,B.p),w,w,w,B.OO,w,B.d7,w,new A.ba(v,B.a1),w)},
$S:46}
C.h1f.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h1g.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rn(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h1t.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.a,s=this.b
return A.eI(w,B.av,new A.D(D.bFF,A.x(A.a([A.A(A.a([D.bLm,A.aH(w,w,w,w,B.lt,w,w,w,new C.h1r(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),B.P,new A.e5(A.bv(A.l(14),A.o(w,A.b3(w,w,w,new C.bdR(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a5(1/0,w,A.db(B.nR,w,D.aYz,new C.h1s(t,s,d),A.bp(B.b3,w,w,w,B.c,w,w,w,new A.ba(A.l(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.N,0,B.p),w),w,w,w,w,w,B.d7,w,new A.ba(v,B.a1),w)},
$S:46}
C.h1r.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h1s.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.ap$.x.h(0,t.a)
n=n==null?null:n.gbf()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lz(2.5),$async$$0)
case 4:w=3
return A.b(e.hc(B.he),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aB(p,0,32)
r=J.eM(B.dD.gaT(s))
w=5
return A.b(A.rn(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fJF.prototype={
$1(d){return d.a===this.a},
$S:273}
C.dSm.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dS7.prototype={
boI(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.ef:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dSa(s,q,e),p,!0,!0,!1,B.Ks,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dSb(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.boI(d,e)},
$S:2278}
C.dSa.prototype={
$1(d){var w,v=null,u=this.c===B.xn,t=u?D.dxv:D.dsX
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.aS:B.av,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(G.ans,A.x(A.a([u,B.aw,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.bu:B.bh,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.iA(!0,v,v,B.y,D.fqz,new C.dS9(this.a,w,t,d),t.length,v,B.e0,B.ah,!0)],x.p),B.al,v,B.e,B.N,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:27}
C.dS9.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.l(14)
if(q)w=B.cX.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.l(14)
if(q)u=B.cX
else u=(t.b.a.d.a?B.bu:B.bh).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.o(B.A,C.b0z(r,26),B.f,s,s,new A.n(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dS8(t.d,r),s,s,s,s,s,s,s)},
$S:194}
C.dS8.prototype={
$0(){A.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.dSb.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dS5.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:91}
C.dS6.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cG(B.ck,e,v)
return new A.d3(e,!1,A.is(B.A,A.as(A.aE(!1,B.a3,!0,v,new A.e0(new C.dS4(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.aj),v,v,v),v,new A.bh(t,new A.bt(0.96,1,u),u.k("bh<bQ.T>"))),v)},
$S:34}
C.dS4.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aD(d,B.bX,x.w).w,i=l.b,h=i.a.d.a,g=h?B.ef:B.c,f=A.l(14),e=A.K((h?B.bu:B.bh).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.l(8)
u=x.p
v=A.A(A.a([w,A.aM(!1,v,!0,new A.D(B.eC,A.X(B.cB,i.a.d.a?B.bu:B.bh,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dRQ(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.i,0,k,k)
w=l.d
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aVP("Name")
r=l.a
q=r.d==null?k:new C.dRR(r,l.e,a0)
p=A.l(20)
o=i.a.d.a?B.bs:B.mb
n=A.K(B.cX.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bg3(new A.D(B.f1,A.aM(!1,p,!0,A.o(B.A,C.b0z(m==null?"\ud83d\udc64":A.fQg(r.e,m),18),B.f,k,k,new A.n(o,k,n,k,k,k,B.a6),k,34,k,B.cq,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.lc,k,B.abU,k,k)
v=A.a([v,B.af,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.A(A.a([A.E(i.aWv("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dRS(r,a0),r.d===B.xn),1),B.ae,A.E(i.aWv("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dRX(r,a0),r.d===B.a8r),1)],u),B.l,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.P,new A.bK(B.a5,k,k,A.ht(D.c11,D.h6V,new C.dRY(r,l.e,a0),A.fr(k,k,k,k,k,k,k,k,k,k,k,B.cX,k,k,k,k,k,k,k,k,k,k,k,k,k,B.ci)),k)],u))
v.push(B.U)
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uW(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aVQ("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.eb,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.U)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.l(10)
p=A.l(10)
o=A.l(10)
n=A.K((t?B.bu:B.bh).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xp(r.a,!1)
v.push(A.aE(!1,B.a3,!0,q,A.aM(!1,p,!0,A.o(k,A.A(A.a([A.E(A.x(A.a([t,B.bF,A.d(m,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.i,0,B.p),1),D.bYD],u),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.n(k,k,n,o,k,k,B.n),k,k,k,k,B.bl,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dRZ(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.aj))
if(!h)B.d.u(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.U)
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aVP("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b47(r.b.length!==0,B.mi,new C.dS_(r,i,a0),new C.dS0(r,a0),"Upload from gallery","ID photo"))
v.push(i.b47(r.c.length!==0,D.bRV,new C.dS1(r,i,d,a0),new C.dS2(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Z.a92("Signature (optional)",t,new C.dS3(a0),new C.dRT(a0,t),new C.dRU(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bu:B.bh
s=(i?B.bu:B.bh).j(0.28)
s=A.E(A.dV(B.aYs,new C.dRV(d),A.dj(k,k,k,k,k,k,k,k,k,t,k,k,B.qJ,k,new A.ba(A.l(10),B.a1),new A.ax(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cX,k,k,k,B.c,k,B.qJ,k,new A.ba(A.l(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.ae,A.E(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vT,k,k,k),k,new C.dRW(r,w,d),t),1)],u),B.l,k,B.e,B.i,0,k,k))
return A.o(k,A.cb(A.x(v,B.al,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.n(g,k,e,f,k,k,B.n),k,k,k,B.tb,B.jr,k,k,360)},
$S:186}
C.dRQ.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dRR.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dRS.prototype={
$0(){return this.b.$1(new C.dRP(this.a))},
$S:0}
C.dRP.prototype={
$0(){var w=this.a
w.d=B.xn
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dRX.prototype={
$0(){return this.b.$1(new C.dRO(this.a))},
$S:0}
C.dRO.prototype={
$0(){var w=this.a
w.d=B.a8r
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dRY.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dRZ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.vY(null,u.b,A.c0(2020,1,1,0,0,0,0,0),null,s,A.c0(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dRN(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRN.prototype={
$0(){var w=this.b
return this.a.a=A.c0(w.gck(),w.gce(),w.gcv(),0,0,0,0,0)},
$S:0}
C.dS_.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Qr(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dRM(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRM.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dS0.prototype={
$0(){return this.b.$1(new C.dRL(this.a))},
$S:0}
C.dRL.prototype={
$0(){return this.a.b=""},
$S:0}
C.dS1.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.ef:B.c
w=3
return A.b(A.bU(q,null,new C.dRJ(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Qr(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dRK(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRJ.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,B.asR,w,w,w,w,new C.dRD(d),!1,w,w,w,w,w,w,w,D.fXX,w,w,w),A.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,B.asP,w,w,w,w,new C.dRE(d),!1,w,w,w,w,w,w,w,D.h40,w,w,w)],x.p),B.l,w,B.e,B.N,0,B.p),!0,!1,B.ag,!0,!0)},
$S:27}
C.dRD.prototype={
$0(){A.a6(this.a,!1).N("camera")
return null},
$S:0}
C.dRE.prototype={
$0(){A.a6(this.a,!1).N("gallery")
return null},
$S:0}
C.dRK.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dS2.prototype={
$0(){return this.b.$1(new C.dRI(this.a))},
$S:0}
C.dRI.prototype={
$0(){return this.a.c=""},
$S:0}
C.dS3.prototype={
$0(){return this.a.$1(new C.dRH())},
$S:0}
C.dRH.prototype={
$0(){},
$S:0}
C.dRT.prototype={
$0(){return this.a.$1(new C.dRG(this.b))},
$S:0}
C.dRG.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dRU.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ajb(u.a,null,null,new C.dRF(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRF.prototype={
$4(d,e,f,g){this.a.$1(new C.dRC(this.b,d))},
$S:469}
C.dRC.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.u(w,this.b)},
$S:0}
C.dRV.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dRW.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.K(x.q).f.U(D.fvJ)
return}if(w.a.d==null){w.c.K(x.q).f.U(D.fsy)
return}A.a6(w.c,!1).N(!0)},
$S:0}
C.dSp.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:91}
C.dSq.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.ef:B.c,n=A.l(14),m=A.K((p?B.bu:B.bh).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.aS:B.av,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bn(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.bu:B.bh,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zS(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.m(r,r,w.zS(r).length>0?B.bC:B.cX,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bh
t=(q?B.bu:B.bh).j(0.28)
s=x.p
return new A.d3(e,!1,A.as(A.aE(!1,B.a3,!0,r,A.o(r,A.x(A.a([p,B.P,v,u,B.aB,A.A(A.a([A.E(A.dV(B.o8,new C.dSn(d),A.dj(r,r,r,r,r,r,r,r,r,w,r,r,B.k6,r,new A.ba(A.l(10),B.a1),new A.ax(t,1,B.r,-1),r,r,r,r)),1),B.ae,A.E(A.bJ(D.h4s,r,new C.dSo(d),A.bp(B.cX,r,r,r,B.c,r,B.k6,r,new A.ba(A.l(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.i,0,r,r)],s),B.al,r,B.e,B.N,0,B.p),B.f,r,r,new A.n(o,r,m,n,r,r,B.n),r,r,r,B.CQ,B.Hk,r,r,300),B.f,B.L,0,r,r,r,r,r,B.aj),r,r,r),r)},
$S:34}
C.dSn.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dSo.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dSj.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dSk(r),p=r.a.d.a,o=p?B.ef:B.c,n=A.l(14),m=A.K((p?B.bu:B.bh).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.m(s,s,r.a.d.a?B.aS:B.av,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Bn(l.c),s,s,s,s,s,s,D.fIR,s,s,s)],p),B.l,s,B.e,B.i,0,s,s)
w=A.iR((r.a.d.a?B.bu:B.bh).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a3d,"View receipt",new C.dSc(r,d,l))
u=l.x!=null
t=u?B.pC:B.qS
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bFC,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dSd(r,d,l)),q.$3$icon$label$onTap(B.D4,"Edit",new C.dSe(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mi,"View / download ID",new C.dSf(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bRU,"View / download selfie",new C.dSg(r,d,l)))
if(l.gaIp())p.push(q.$3$icon$label$onTap(B.a4p,"View / download signature",new C.dSh(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bC,B.ej,"Delete",new C.dSi(r,d,l)))
p.push(B.aw)
return A.bm(!0,new A.D(B.t9,A.o(s,A.x(p,B.l,s,B.e,B.N,0,B.p),B.f,s,s,new A.n(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:27}
C.dSk.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.av
else w=d
return A.aM(!1,v,!0,new A.D(B.eX,A.A(A.a([A.X(e,w,v,v,v,20),B.bc,A.d(f,v,v,v,v,v,v,A.m(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:2279}
C.dSc.prototype={
$0(){A.a6(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h1l(w,this.c)},
$S:0}
C.dSd.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.Td(this.c)},
$S:0}
C.dSe.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.DR(this.c)},
$S:0}
C.dSf.prototype={
$0(){var w,v,u
A.a6(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bHn(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dSg.prototype={
$0(){var w,v,u
A.a6(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bHn(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dSh.prototype={
$0(){A.a6(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h1q(w,this.c)},
$S:0}
C.dSi.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.Qq(0,this.c)},
$S:0}
C.dSr.prototype={
$1(d){return d.x==null},
$S:273}
C.dSs.prototype={
$1(d){return d.x!=null},
$S:273}
C.dSt.prototype={
$2(d,e){return d+e.c},
$S:2280}
C.dSu.prototype={
$0(){return this.a.bEH()},
$S:0}
C.dSl.prototype={
$0(){return this.a.agN(this.b)},
$S:0}
C.fKq.prototype={
$1(d){return d.a===this.a},
$S:z+32}
C.fKr.prototype={
$0(){return B.d.gH(D.a5I)},
$S:z+75}
C.di2.prototype={
$0(){var w=this.a
return w.m(new C.di0(w,this.b))},
$S:0}
C.di0.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.di1.prototype={
$0(){},
$S:0}
C.di3.prototype={
$0(){var w=this.a.gc3c()
A.a6(this.b,!1).N(w)
return null},
$S:0}
C.fMY.prototype={
$1(d){return C.hpS(A.a1(d,x.N,x.z))},
$S:z+11}
C.fMZ.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fN_.prototype={
$2(d,e){var w=A.ca(d.a,null),v=A.ca(e.a,null)
if(w!=null&&v!=null)return B.o.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+81}
C.h_X.prototype={
$1(d){return d.aj()},
$S:z+12}
C.h8C.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fJw.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bSJ.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eC(e,v)?v:null},
$S:2281}
C.h0x.prototype={
$1(d){var w=this
return new C.a_T(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+52}
C.diI.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.diH(w,d))},
$S:z+78}
C.diH.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.diw.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dit.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.di4.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.di5.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dix.prototype={
$0(){return this.a.w=!1},
$S:0}
C.did.prototype={
$1(d){var w=null,v=A.O(d).ax.a===B.I,u=v?B.ef:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.en(A.a([A.bP(!1,B.ds,w,w,!0,w,w,w,new C.dib(d),w,w),A.bJ(B.xN,w,new C.dic(d),A.bp(B.nq,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dib.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dic.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.die.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.diu.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.div.prototype={
$0(){return B.d.gH(D.A7)},
$S:z+14}
C.di9.prototype={
$1(d){var w=this.a,v=w.y,u=w.gzb(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Ue(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+36}
C.dia.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dif.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_r(v,u,J.ad(w.d),null)},
$S:z+38}
C.dig.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.diG.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.ay(s,new C.a_7(r.y,r.gzb(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.diE(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bdd(v,e,w,u,t,r.gbVm(),C.hFR(r.y.Q),r.gzb(0),s)
w=t}return A.c6(q,new C.diF(r,e),new A.D(B.a1n,w,s))},
$S:2282}
C.diF.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd7(t).ay){t=this.b
u=x.cy.a(B.d.gd7(u.f.f)).gvw(0)
w=t-(u==null?t:u)}else w=0
v=B.h.D(w,-1,0)
u=A.ds()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fE(v*3.141592653589793*0.5)
return A.fA(B.a5,A.d0(e,B.h.D(1+v*0.5,0,1)),null,u,!0)},
$S:44}
C.diE.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJB(B.qB,B.iD)},
$S:0}
C.diq.prototype={
$0(){var w=this.a
return w.m(new C.dip(w))},
$S:0}
C.dip.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dir.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).N(null)
return null},
$S:0}
C.di6.prototype={
$1(d){var w,v,u=null,t=A.l(26),s=B.kx.j(0.5),r=x.p,q=A.a([D.fWu,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ct(p.d)?"Write this book":"Write a new book"
q.push(p.a_e(d,B.e9,w,J.ct(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a_e(d,B.aqN,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cy,A.d("Your book is in English.",u,u,u,u,u,u,A.m(u,u,D.kR.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cy,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.m(u,u,D.kR.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a_e(d,H.arK,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a_e(d,B.oM,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a_e(d,B.oM,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eI(u,B.Cf,A.bm(!0,new A.D(B.z5,A.x(q,B.E,u,B.e,B.N,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.OR,u,B.d7,u,new A.ba(t,new A.ax(s,1.4,B.r,-1)),u)},
$S:46}
C.dis.prototype={
$0(){A.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.dij.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.a_V(v,J.cJ(w.d),w.r+1,null)},
$S:z+42}
C.dik.prototype={
$1(d){var w=null
return A.oQ(!1,A.en(w,w,w,B.Cf,new A.kj(this.a,new C.dii(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:313}
C.dii.prototype={
$3(d,e,f){var w=null
return A.A(A.a([B.aby,B.p4,A.E(A.d(e,w,w,w,w,w,w,B.jC,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:843}
C.dil.prototype={
$0(){return this.a.a=!1},
$S:52}
C.dim.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:208}
C.din.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dio.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Bw(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.SR(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dih(s,t))
w=4
return A.b(s.lj(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dih.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.diz.prototype={
$1(d){var w=null
return A.oQ(!1,A.en(w,w,w,B.Cf,new A.kj(this.a,new C.diy(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:313}
C.diy.prototype={
$3(d,e,f){var w=null
return A.A(A.a([B.aby,B.p4,A.E(A.d(e,w,w,w,w,w,w,B.jC,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:843}
C.diA.prototype={
$0(){return this.a.a=!1},
$S:52}
C.diB.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:208}
C.diC.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:208}
C.diD.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Bw(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lj(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.di7.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.blD(B.qB,O.Op)},
$S:0}
C.di8.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJB(B.qB,O.Op)},
$S:0}
C.dku.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dkv.prototype={
$1(d){var w=this.a
return w.m(new C.dkt(w))},
$S:9}
C.dkt.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dkw.prototype={
$1(d){var w=this.a
return w.m(new C.dks(w))},
$S:9}
C.dks.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dkx.prototype={
$1(d){var w=this.a
return w.m(new C.dkr(w))},
$S:9}
C.dkr.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dky.prototype={
$0(){var w=this.a
return w.m(new C.dkq(w,this.b))},
$S:0}
C.dkq.prototype={
$0(){var w=this.b
this.a.d.sb4(0,w)
return w},
$S:0}
C.dkz.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga37()
A.a6(this.b,!1).N(new A.bs7(w,v))},
$S:0}
C.diX.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.diW.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_R(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+48}
C.dj0.prototype={
$1(d){return d.a===this.a},
$S:z+50}
C.dj_.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bbB(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hu,v,v,v)
return A.en(A.a([A.bP(!1,B.ds,v,v,!0,v,v,v,new C.diY(d),v,v),A.bJ(B.xN,v,new C.diZ(d),A.bp(B.nq,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,B.Cf,w,v,v,v,v,D.fVg,v)},
$S:18}
C.diY.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.diZ.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dj1.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dj2.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.cb(A.c_(B.bI,r,B.br,t,18,14),B.t,t,B.y,t,t,D.bGB,t,t,B.ah)},
$S:302}
C.diV.prototype={
$0(){return this.a.Re(0,this.b)},
$S:0}
C.diU.prototype={
$0(){return this.a.QF(0,this.b)},
$S:0}
C.cR2.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cR3.prototype={
$0(){return B.d.gH(D.A7)},
$S:z+14}
C.cR4.prototype={
$4(d,e,f,g){var w=null,v=A.l(e)
return A.bS(0,new A.D(d,new A.bN(new A.n(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.n),B.bk,w,w),w),0,0,0)},
$S:2284}
C.d9P.prototype={
$1(d){return this.a.m(new C.d9O(this.b,this.c))},
$S:9}
C.d9O.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.dad.prototype={
$1(d){return this.a.m(new C.da0())},
$S:2}
C.da0.prototype={
$0(){},
$S:0}
C.dae.prototype={
$1(d){return this.a.m(new C.da_())},
$S:2}
C.da_.prototype={
$0(){},
$S:0}
C.daf.prototype={
$0(){var w=this.a
return w.m(new C.d9Z(w,this.b))},
$S:0}
C.d9Z.prototype={
$0(){var w=this.a
return w.d=w.goz().Go(this.b.a)},
$S:0}
C.dag.prototype={
$0(){var w=this.a
return w.m(new C.d9Y(w,this.b))},
$S:0}
C.d9Y.prototype={
$0(){var w=this.a
return w.d=w.goz().cP1(this.b)},
$S:0}
C.dah.prototype={
$1(d){return this.a.m(new C.d9X())},
$S:2}
C.d9X.prototype={
$0(){},
$S:0}
C.dai.prototype={
$0(){var w=this.a
return w.m(new C.d9W(w,this.b))},
$S:0}
C.d9W.prototype={
$0(){var w=this.a
return w.d=w.goz().cP6(this.b.a)},
$S:0}
C.daj.prototype={
$1(d){var w=this.a
return w.m(new C.da8(w,d))},
$S:6}
C.da8.prototype={
$0(){var w=this.a
return w.d=w.goz().cQ0(this.b)},
$S:0}
C.dak.prototype={
$1(d){var w=this.a
return w.d=w.goz().aGx(d)},
$S:2}
C.dal.prototype={
$1(d){var w=this.a
return w.d=w.goz().cP9(d)},
$S:2}
C.dan.prototype={
$1(d){var w=this.a
return w.d=w.goz().cPZ(d)},
$S:2}
C.dao.prototype={
$1(d){var w=this.a
return w.m(new C.da7(w,d))},
$S:9}
C.da7.prototype={
$0(){var w=this.a
return w.d=w.goz().cPQ(this.b)},
$S:0}
C.dap.prototype={
$0(){var w=this.a,v=w.goz(),u=B.a.i(w.gzb(0).a.a),t=B.a.i(w.gaDI().a.a)
u=v.bgk(B.a.i(w.gatj().a.a),t,u)
A.a6(this.b,!1).N(u)
return null},
$S:0}
C.bST.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bSN.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bSM(w,d))},
$S:12}
C.bSM.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bSW.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bSO.prototype={
$0(){var w=this.a
w.Q=D.b2H
w.aen(1)
w.r.x=null},
$S:0}
C.bSP.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b2H)return
w=new A.e_()
w.cU(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.d7C[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bSS.prototype={
$0(){var w=this.a
w.Q=D.aec
w.aen(2)
w.r.z=null},
$S:0}
C.bSR.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hN5
t.aen(3)
w=t.r
w.d=s
w.x="I say: "+t.gCK()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.dep[v.aw(4)]:D.dA6[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bSU.prototype={
$0(){var w=this.a
w.Q=D.b2I
w.CW=this.b
w.cy=1
w.aen(4)
w.r.f=w.f.a+5},
$S:0}
C.bSV.prototype={
$0(){},
$S:0}
C.bSQ.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bSK.prototype={
$0(){return this.a.Lo(this.b)},
$S:0}
C.bSL.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bUp.prototype={
$0(){var w=this
return w.a.Rx(w.b,0,w.c,w.d)},
$S:0}
C.bUq.prototype={
$0(){var w=this
return w.a.Rx(w.b,3,w.c,w.d)},
$S:0}
C.bUr.prototype={
$0(){var w=this
return w.a.Rx(w.b,1,w.c,w.d)},
$S:0}
C.bUs.prototype={
$0(){var w=this
return w.a.bUN(w.b,w.c,w.d)},
$S:0}
C.bUt.prototype={
$0(){var w=this
return w.a.Rx(w.b,4,w.c,w.d)},
$S:0}
C.bUu.prototype={
$0(){var w=this
return w.a.Rx(w.b,2,w.c,w.d)},
$S:0}
C.bUv.prototype={
$0(){var w=this
return w.a.Rx(w.b,5,w.c,w.d)},
$S:0}
C.bUw.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:844}
C.bUo.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a6S[d],p=q.a.a5(0,new A.r(0,-q.b*1.2*124)),o=A.fz(r,B.cx,r,3,r,A.cR(r,r,r,r,r,r,r,r,r,D.fzL,e),B.a7,B.c0,r,B.dJ,B.c1)
o.nE(130)
w=o.b.a.c
w=p.aJ(0,new A.r(0,w.gb9(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bw(A.bX(w,v.gb9(v)+12,u+18),B.i5)
u=this.a
v=t.eD(B.dM)
w=$.R()
s=A.L()
s.r=B.dC.gp(0)
u.aq(v,s)
s=A.L()
s.r=D.qr.gp(0)
u.aq(t,s)
w=new A.aG(w.r,B.ai,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bx())
v=A.L()
v.r=D.qr.gp(0)
u.af(w,v)
o.a4(u,new A.r(t.a+9,t.b+6))},
$S:779}
C.bT9.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.bTa.prototype={
$2(d,e){var w=this.a,v=B.o.aQ(w.an5(d),w.an5(e))
if(v!==0)return v
return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.fxw.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h8s.prototype={
$2(d,e){if(e!=null)J.c4(this.a.c_(0,d,new C.h8t()),e)},
$S:z+64}
C.h8t.prototype={
$0(){return A.a([],x.J)},
$S:z+74}
C.h8u.prototype={
$1(d){return d!==this.a},
$S:3}
C.h8v.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h8w.prototype={
$1(d){return d!==this.a&&!B.d.aS(this.b,new C.h8r(this.c,d))},
$S:3}
C.h8r.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h8x.prototype={
$1(d){return d!==this.a},
$S:3}
C.h8y.prototype={
$1(d){return d!==this.a},
$S:3}
C.h8z.prototype={
$1(d){return d!==this.a&&!B.d.aS(this.b,new C.h8q(this.c,d))},
$S:3}
C.h8q.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fL3.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fZR.prototype={
$1(d){return d.Q},
$S:z+15}
C.fZS.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fGS.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fNU.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bNW.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h8T.prototype={
$2(d,e){return B.o.aQ(C.hC_(d),C.hC_(e))},
$S:251}
C.h8U.prototype={
$1(d){return d!==this.a},
$S:3}
C.h_t.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bM4.prototype={
$0(){var w=this.a
w.ch=!0
w.b9P()},
$S:0}
C.bM_.prototype={
$0(){},
$S:0}
C.bM5.prototype={
$1(d){return d.f<=0},
$S:z+28}
C.bLY.prototype={
$0(){},
$S:0}
C.bLZ.prototype={
$0(){},
$S:0}
C.bM3.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b3(u,u,u,new C.bdT(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.l(14)
s.push(A.ao(u,A.o(u,A.d(t.dy,u,u,u,u,u,u,D.fHq,B.K,u,u),B.f,u,u,new A.n(w,u,u,v,u,u,B.n),u,u,u,u,B.bS,u,u,u),u,u,14,14,6,u))}return A.ay(B.c_,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bM0(t,e),u,u,u,u,u,u,u,new C.bM1(t,e),u,u,u,u,u,u,u,u,u,new C.bM2(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bM0.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bM2.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:23}
C.bM1.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bLX.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.cs_.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cs0.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.crZ(w))},
$S:0}
C.crZ.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cs1.prototype={
$0(){var w=this,v=w.a
v.gj2()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cs2.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cs3.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cs4.prototype={
$0(){},
$S:0}
C.cs5.prototype={
$0(){var w=this.a
w.z=w.XJ(++w.e)
w.Q=A.c1(w.gkT()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.crW.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.crX.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj2().length,e=i/2,d=new C.crY(i,f,h),a0=g.as,a1=A.a4(a0).k("b8<2>")
a0=A.B(new A.b8(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.c6(new A.he(a0),new C.crR(g,new A.r(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj2().length!==0&&!B.d.q(g.gj2(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.QV(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cK(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new A.N5(new C.crS(g,u),new C.crT(g,u),new C.crU(g,u),j,j,new A.bl("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.d(a1,j,j,j,j,j,j,A.m(j,j,B.a.q(a1,"not a child")?B.fi:B.be,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj2().length!==0&&!B.d.q(g.gj2(),-1)){a0=g.e+1>=g.gkT().length?"See my result":"Next family"
g=A.as(C.uw(a0,g.gqt(g),B.cV,B.jt,D.fC),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.XJ(0):s).length))break
if(!B.d.q(g.gj2(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.XJ(0)
o=s}else o=s
n=s[u]
n=A.e1(B.A,new C.QV(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.XJ(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.ra(new A.bt(0,p,t),new C.crV(),new A.Ev(u,j,new C.QV(l.b,k,62,!1,j),new A.kJ(0.25,new C.QV(m.b,k,62,!1,j),j),new A.kd(n,B.aj,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,A.hFJ(),!0,!0,j,j,j,j,j,j,!1,B.iT,j,new A.bl("chip-"+r,a0),w),B.b0,B.iR,j,new A.bl("t"+r+"-"+q,a0),v))}++u}g=A.c_(B.fU,a1,B.br,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:69}
C.crY.prototype={
$1(d){return new A.r(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:840}
C.crR.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gj2().length!==0&&!B.d.q(t.gj2(),-1)
return A.b3(p,p,p,new C.bdm(q.b,o,v,w,p),B.az)},
$S:59}
C.crT.prototype={
$1(d){return this.a.gj2()[this.b]===-1},
$S:2286}
C.crU.prototype={
$1(d){return this.a.cST(this.b,d.a)},
$S:2287}
C.crS.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj2()[t]!==-1,r=A.l(18),q=e.length!==0?B.cV.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.cV:B.k0,B.r,2)
u=s?A.lB(new C.crQ(),A.as(new C.QV(u.gaG_()[u.gj2()[t]].b,u.gaG_()[u.gj2()[t]].a,62,!1,v),v,v,v),B.nk,B.iR,v,v,new A.bt(0.3,1,x.X),x.i):D.be0
return A.cU(v,u,v,v,B.b0,new A.n(q,v,w,r,v,v,B.n),B.a3,v,100,v,v,v,v,v,88)},
$S:2288}
C.crQ.prototype={
$3(d,e,f){return A.e1(B.A,f,e,null,null)},
$S:117}
C.crV.prototype={
$3(d,e,f){return A.dO(f,new A.r(Math.sin(e*24)*8*(1-e),0))},
$S:117}
C.cS6.prototype={
$1(d){return d>=1},
$S:121}
C.cGZ.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkT()[w.e].d.length)w.m(new C.cGY(w))},
$S:12}
C.cGY.prototype={
$0(){return this.a.f++},
$S:0}
C.cH6.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cH7.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cH8.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cH5(w))},
$S:0}
C.cH5.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cH9.prototype={
$0(){return this.a.f++},
$S:0}
C.cHa.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cHb.prototype={
$0(){},
$S:0}
C.cHc.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cH0.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.cH1.prototype={
$3(d,e,f){var w=null
return A.lB(new C.cH_(this.a,e),w,B.b0,B.hz,w,w,new A.bt(w,this.b,x.X),x.i)},
$S:2289}
C.cH_.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cV.j(u.as?0.6:0.15)
t=A.a([new A.ab(0,B.G,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.o(v,A.i4(new A.BG(new A.uQ(B.w.j(e),B.Mn,v,B.YV),A.bYG(A.b3(v,v,v,new C.aCd(u.gkT()[u.e].c,u.as,v),B.az),new A.EA(w,w,B.WO)),v),B.aq),B.f,v,v,new A.n(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:2290}
C.cH2.prototype={
$3(d,e,f){return A.d0(A.dO(f,new A.r(0,14*(1-e))),e)},
$S:107}
C.cH3.prototype={
$3(d,e,f){return A.dO(f,new A.r(Math.sin(e*22)*8*(1-e),0))},
$S:117}
C.cH4.prototype={
$0(){return this.a.bqZ(this.b)},
$S:0}
C.f9S.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.anC$)
v.anC$=w
v.qg$.sp(0,w)
v.arx(u)},
$S:7}
C.fk6.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:12}
C.bTV.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bTU())},
$S:0}
C.bTU.prototype={
$0(){},
$S:0}
C.bTS.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bTQ.prototype={
$0(){},
$S:0}
C.bTR.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gN5()
w=s+1>=r.length?3:5
break
case 3:q=C.bHB(p.gaqm(0),0,r.length)
p.m(new C.bTN(p,q))
o=p
w=6
return A.b(C.BT(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BU(s.d,s.c.a,"school",p.gaqm(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bTO())
w=4
break
case 5:p.m(new C.bTP(p))
p.gqB().Wh(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bTN.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bTO.prototype={
$0(){},
$S:0}
C.bTP.prototype={
$0(){return this.a.x++},
$S:0}
C.bTT.prototype={
$0(){return this.a.Lo(this.b)},
$S:0}
C.bTM.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.f9T.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.r(t,s),q=v.b,p=v.d,o=p?C.hFX(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.EH
C.SP(q,D.euV,0,0.2,-0.6,-0.2,null,w,D.etE,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a5(0,new A.r(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.R()
p=A.L()
p.r=D.GJ.gp(0)
p.c=3
p.d=B.bG
q.ah(new A.r(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f9U.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.SP(this.a,D.eu0,0,u,0.7,-0.5,null,null,D.K1,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f9V.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.SP(this.a,D.evI,0,0,0.8,-0.5,null,null,D.K1,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f9W.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.SP(w.b,D.euP,0,v,-0.8,-0.5,null,null,D.K1,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f9X.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.r(34,-122+Math.sin(w*5)*5)
else v=v?D.euT:D.EH
C.SP(p,D.euj,0,t,0,-0.6,null,v,D.K1,3,0,s,1.3,u,0,w,0)
q=q.cdm(new A.r(222,455),9)
$.R()
w=A.L()
w.r=B.cV.gp(0)
p.af(q,w)},
$S:0}
C.f9Y.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:844}
C.bTy.prototype={
$2(d,e){return d+e},
$S:68}
C.bTJ.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bTK.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bTL.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj2()[u.b]=s
t.gj2()[u.d]=t.y
w=t.as
v=t.qg$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bTF.prototype={
$1(d){return d},
$S:103}
C.bTE.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qg$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bTG.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bTH.prototype={
$0(){},
$S:0}
C.bTI.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FS(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.cj(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a8(0)},
$S:0}
C.bTA.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.bTB.prototype={
$2(d,e){var w=this.a
w=w.gkT()[w.f].e
return B.o.aQ(w[d],w[e])},
$S:68}
C.bTC.prototype={
$2(d,e){var w=null,v=C.hgJ(new A.au(A.aS(1/0,e.a,e.b),A.aS(1/0,e.c,e.d))),u=this.a
return A.ay(B.c_,new A.e5(A.b3(w,w,w,new C.bkx(u,u.qg$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bTz(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bTz.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj2().length
u=B.o.D(B.h.bg((t.a-s.a)/r/450*v),0,v-1)
w.d2J(w.gj2()[u])}},
$S:23}
C.bTD.prototype={
$1(d){var w=this.a
return w.gkT()[w.f].d[d]},
$S:82}
C.dtE.prototype={
$2(d,e){return 0},
$S:68}
C.bTk.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bTj())},
$S:0}
C.bTj.prototype={
$0(){},
$S:0}
C.bTi.prototype={
$0(){},
$S:0}
C.bTc.prototype={
$0(){},
$S:0}
C.bTd.prototype={
$0(){},
$S:0}
C.bTh.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.Bs},
$S:0}
C.bTg.prototype={
$1(d){var w=null,v=this.a.gqB(),u=A.d(d,w,w,w,w,w,w,D.aX1,w,w,w),t=v.gbno(0)
return A.ay(B.c_,A.x(A.a([u,B.bF,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aXf,w,w,w)],x.p),B.E,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbtl(v),w,w,w,w,w,w,!1,B.a4)},
$S:149}
C.bTe.prototype={
$0(){return this.a.Lo(this.b)},
$S:0}
C.bTf.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bTb.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.e3Y.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e3Z.prototype={
$1(d){return this.a},
$S:39}
C.e4_.prototype={
$0(){var w=this.a
return w.d=w.gTf().bfO(this.b)},
$S:0}
C.e3W.prototype={
$1(d){return new C.Uf(this.a,null)},
$S:z+30}
C.e3X.prototype={
$1(d){return d.a===this.a.a},
$S:z+31}
C.e3V.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hu,w,w,w)
return A.en(A.a([A.bP(!1,B.aYC,w,w,!0,w,w,w,new C.e3T(d),w,w),A.bP(!1,D.h1V,w,w,!0,w,w,w,new C.e3U(d),w,w)],x.p),w,w,D.fC,v,w,w,w,w,D.fPm,w)},
$S:18}
C.e3T.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e3U.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.e3S.prototype={
$0(){var w=null,v=this.a.c.K(x.q).f,u=this.b
return v.U(A.b2(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e40.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:13}
C.e41.prototype={
$0(){var w=this.a,v=this.b,u=C.bFh(v,10,w.r,!1)
return w.uH(C.hpT(w.a.d,"kahoot",u,w.gb7m(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e42.prototype={
$0(){var w=this.a
return w.uH(new C.ams(this.b,w.a.d,w.r,null))},
$S:0}
C.e43.prototype={
$0(){var w=this.a
return w.uH(new C.akC(this.b,w.a.d,w.r,null))},
$S:0}
C.e46.prototype={
$0(){var w=this.a
return w.uH(new C.avv(this.b,w.a.d,w.r,null))},
$S:0}
C.e47.prototype={
$0(){var w=this.a
return w.uH(new C.azr(this.b,w.a.d,w.r,null))},
$S:0}
C.e48.prototype={
$0(){var w=this.a
return w.uH(new C.amv(this.b,w.a.d,w.r,null))},
$S:0}
C.e49.prototype={
$0(){var w=this.a
return w.uH(new C.amz(this.b,w.a.d,w.r,null))},
$S:0}
C.e4a.prototype={
$0(){var w=this.a
return w.uH(new C.amB(this.b,w.a.d,w.r,null))},
$S:0}
C.e4b.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d33()
return v.uH(C.hpT(v.a.d,"creator_"+u.a,w,v.gb7m(),"A game by the family",t,this.c.a))},
$S:0}
C.e4c.prototype={
$0(){return this.a.Pa(this.b)},
$S:0}
C.e4d.prototype={
$0(){return this.a.Ya(0,this.b)},
$S:0}
C.e44.prototype={
$0(){return this.a.Pa(null)},
$S:0}
C.e45.prototype={
$0(){return this.a.K(x.q).f.U(D.fsE)},
$S:0}
C.bTw.prototype={
$0(){var w=this.a
w.d=D.b25
w.z=3},
$S:0}
C.bTx.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aQt()}else w.m(new C.bTv(w))},
$S:12}
C.bTv.prototype={
$0(){return this.a.z--},
$S:0}
C.bTm.prototype={
$0(){var w=this.a
w.d=D.adT
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bTn.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bTl(w))
if(w.as<=0){d.a1(0)
w.b7i(-1)}},
$S:12}
C.bTl.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bTs.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.Xu},
$S:0}
C.bTt.prototype={
$0(){return this.a.e++},
$S:0}
C.bTp.prototype={
$0(){var w=this.a
w.d=D.b26
w.ay=this.b},
$S:0}
C.bTq.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bTu.prototype={
$2(d,e){return B.o.aQ(e.b,d.b)},
$S:2291}
C.bTr.prototype={
$0(){return this.a.Lo(this.b)},
$S:0}
C.bTo.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bSX.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.aw()
s=A.a([new A.at(new A.bc(s,B.b7,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.at(new A.bc(u,B.b7,B.aP),r))}return s},
$S:2292}
C.bSY.prototype={
$0(){return this.a.gDj().c.push(C.haw(null,0,20,""))},
$S:0}
C.bT7.prototype={
$1(d){var w=null
return A.bA(w,new A.b6(4,A.l(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dp,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.Fd,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:264}
C.bT6.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gDj().c,m=this.b,l=n[m],k=o.cgp(l),j=B.c.j(0.06),i=A.l(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.Lk,p,p,p),B.b4],g)
if(n.length>1)f.push(A.aH(p,p,p,p,B.asC,p,p,p,new C.bT1(o,m),p,p,p,p,p,p))
n=J.a8(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.i,0,p,p),A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bT2(l),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a7,p,B.ao,p,p,p,p),B.P],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aED[v]
t=D.aEj[v]
s=v+1
f.push(new A.D(B.eP,new A.c8(B.aM,B.e,B.i,B.l,p,B.p,p,0,A.a([A.d(u,p,p,p,p,p,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.ae,new A.bz(1,B.bd,A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bT3(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a7,p,B.ao,p,p,p,p),p),new S.Pw(v,l.c,new C.bT4(o,l),p,!1,D.lH,p,p,p,p,p,!1,!1,p,E.b2v,p,p,p,p,p,w)],g),p),p))}f.push(D.fUW)
f.push(B.am)
n=A.a([D.fOq,B.ae],g)
for(r=0;r<3;++r){q=D.che[r]
n.push(new A.D(B.f1,A.jw(p,p,p,A.d(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bT5(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.i,0,p,p))
return A.o(p,A.x(f,B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.n(j,p,h,i,p,p,B.n),p,p,p,B.kB,B.bl,p,p,p)},
$S:163}
C.bT1.prototype={
$0(){var w=this.a
return w.m(new C.bT0(w,this.b))},
$S:0}
C.bT0.prototype={
$0(){return B.d.cH(this.a.gDj().c,this.b)},
$S:0}
C.bT2.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bT3.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bT4.prototype={
$1(d){return this.a.m(new C.bT_(this.b,d))},
$S:156}
C.bT_.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bT5.prototype={
$1(d){return this.a.m(new C.bSZ(this.b,this.c))},
$S:9}
C.bSZ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e5D.prototype={
$0(){var w=this.a
w.wD()
w.a.bv()
w.a.qu()},
$S:0}
C.e5C.prototype={
$0(){var w=this.a
w.wD()
w.a.bv()
w.a.qu()},
$S:0}
C.e5F.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.ct(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e5G.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e5H.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e5B.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e5E.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e5J.prototype={
$0(){this.a.Pw()
return null},
$S:0}
C.e5I.prototype={
$0(){return this.a.Fb(this.b)},
$S:0}
C.e53.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bP(!1,B.ds,w,w,!0,w,w,w,new C.e51(d),w,w),r=A.bp(B.bQ,w,w,w,w,w,w,w,w,w,w,w)
return A.en(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e52(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e51.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e52.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.e54.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cPv(this.b)},
$S:0}
C.e4Z.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aW5(w.b,w.c,w.d)},
$S:7}
C.e4q.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e4r.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e4I.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Hs(t.a.c),$async$$0)
case 2:s=r.nw(q.dH(e,new C.e4G(t)))
if(s!=null&&t.c!=null)t.m(new C.e4H(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e4G.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e4H.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e4J.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e4K.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e4Y.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cQh(C.hG6(w),w)},
$S:0}
C.e4F.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.WA(u,w,C.aRI(u,w),new C.e4E(v),null)},
$S:z+35}
C.e4E.prototype={
$1(d){return this.boP(d)},
boP(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e4D(s,d))
w=3
return A.b(s.uD(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:570}
C.e4D.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bfO(this.b)},
$S:0}
C.e4V.prototype={
$1(d){return d.as},
$S:z+1}
C.e4W.prototype={
$1(d){var w=this
return new A.e0(new C.e4U(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e4U.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.ef:B.c,h=A.l(26),g=A.K(B.bQ.j(0.5),B.r,1.5),f=A.o(k,D.bWR,B.f,k,k,new A.n(B.bQ.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.i,0,B.p),1)
f=A.A(A.a([f,B.bc,a0,A.aH(k,k,k,k,A.X(B.cB,j?B.bu:B.bh,k,k,k,k),k,k,k,new C.e4O(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.i,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bQ:B.bQ.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ax(B.bQ,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bQ
a0.push(A.ay(k,A.cU(k,A.d(m,k,k,k,k,k,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b0,new A.n(q,k,new A.bG(n,n,n,n),new A.be(p,p,p,p),k,k,B.n),B.ha,k,k,k,k,B.CH,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e4P(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.c_(B.bI,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c83,new A.D(D.bH0,f,k),new A.D(D.bGS,e,k),new A.D(B.tb,a0,k),new A.D(H.anV,A.d(v,k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(W.aqx,j?B.bu:B.bh,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bGU,A.A(A.a([a0,B.as,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.ay9(k,B.bQ,k,k,!1,B.y,k,k,k,k,k,k,new C.e4Q(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.i,0,k,k),k))}f.push(B.aB)
j=A.l(20)
e=A.a([new A.ab(0,B.G,B.aD.j(0.35),B.i4,12)],x.V)
f.push(A.ay(k,A.o(k,A.A(A.a([D.fOM,B.bc,D.bLj,D.bXw],w),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.n(k,k,k,j,e,D.cbQ,B.n),k,k,k,B.i_,B.bH,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e4R(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.wI,A.A(A.a([A.E(A.dV(B.ds,new C.e4S(a1),k),1),B.as,A.E(A.bJ(F.aZ2,k,new C.e4T(t,a1),A.bp(B.bQ,k,k,k,k,k,B.co,k,k,k,k,k)),1)],w),B.l,k,B.e,B.i,0,k,k),k))
return A.bm(!0,A.o(k,A.cb(A.x(f,B.E,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.aq,k,k,new A.n(i,k,g,h,k,k,B.n),k,k,k,B.yX,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:92}
C.e4O.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e4P.prototype={
$0(){return this.b.$1(new C.e4N(this.a,this.c))},
$S:0}
C.e4N.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e4Q.prototype={
$1(d){var w=this.a
w.m(new C.e4L(w,d))
this.b.$1(new C.e4M())},
$S:9}
C.e4L.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e4M.prototype={
$0(){},
$S:0}
C.e4R.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(new A.aIm(!0,w))
return null},
$S:0}
C.e4S.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e4T.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(new A.aIm(!1,w))
return null},
$S:0}
C.e4X.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cQ5(this.b.b)
w.r.a8(0)},
$S:0}
C.e4e.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ajm(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hz9(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e4f.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aGu(w)},
$S:0}
C.e56.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aeI(this.b,w,this.c,null)},
$S:z+37}
C.e50.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.ef:B.c,t=A.l(20),s=A.X(B.l_,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.N,0,B.p)
return A.en(A.a([A.bJ(D.h5H,w,new C.e5_(d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.ba(t,B.a1),r,w)},
$S:18}
C.e5_.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e4g.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e4h.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e4i.prototype={
$1(d){return d.a},
$S:z+8}
C.e4j.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.i5(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aGu(w)},
$S:0}
C.e4n.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ajm(q)
w=A.T(q).k("Y<1>")
q=A.B(new A.Y(q,new C.e4l(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hz9(v.e,null,r,v.f,v.r,new C.e4m(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e4m.prototype={
$0(){return this.a.aby(this.b)},
$S:0}
C.e4l.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e4o.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("N<1,i5>")
w=A.B(new A.N(w,new C.e4k(this.b),v),v.k("ak.E"))
u.d=t.aGu(w)},
$S:0}
C.e4k.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+39}
C.e55.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e4A.prototype={
$1(d){return d.length!==0},
$S:3}
C.e4B.prototype={
$1(d){var w=this
return new A.e0(new C.e4z(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e4z.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.ef:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.m(v,v,t?B.aS:B.av,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bh,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.N(o,new C.e4v(u,e,o),A.T(o).k("N<1,v>")))
p.push(B.P)
u=w.d
p.push(A.aN(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(12),B.du),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mB,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a7,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.N,0,B.p)
t=w.a
return A.en(A.a([A.bP(!1,B.ds,v,v,!0,v,v,v,new C.e4w(d),v,v),A.bJ(B.Lu,v,new C.e4x(t,u,o,e),A.bp(B.bQ,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.fTi,v,new C.e4y(t,u,o,d),A.bp(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:249}
C.e4v.prototype={
$1(d){var w=null
return A.dJ(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.m(w,w,this.a.a?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.c4S,w,w,w,new C.e4u(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:2293}
C.e4u.prototype={
$0(){return this.a.$1(new C.e4s(this.b,this.c))},
$S:0}
C.e4s.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e4w.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e4x.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e4t(w.c,u))
v.bP(0,B.ch)}},
$S:0}
C.e4t.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e4y.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).N(!0)},
$S:0}
C.e4C.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cQK(this.b,D.uV,C.Hq(v,w.a.c))},
$S:0}
C.e5d.prototype={
$1(d){return d.as},
$S:z+1}
C.e5e.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j3(this.b,w)},
$S:0}
C.e5f.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.iwd(v)
return w.WY(v==null?null:v.a)},
$S:0}
C.e5g.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.i7S(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcn(k)){k=A.aS(1/0,e.a,e.b)
s=A.aS(1/0,e.c,e.d)
l.cxU(new A.au(u,t),v.gbmu(),new A.au(k,s))}k=A.l(22)
s=this.b.a
r=s?D.d5n:D.d3t
q=A.K(s?B.dp:D.blV,B.r,1)
p=A.l(22)
o=A.bS(0,A.b3(m,m,m,new C.bgD(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.o(m,A.bv(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bS(0,A.v2(new A.P(n,n,n,n),new A.a5(u,t,new C.bhz(l.d,v,l.f,w,new C.e59(l),l.gchB(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bzu(s,new C.e5a(l,e),new C.e5b(l,e),new C.e5c(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.n(m,m,q,k,m,new A.a7(B.aY,B.b2,B.x,r,m,m),B.n),m,m,m,B.an_,m,m,m,m)},
$S:171}
C.e59.prototype={
$1(d){var w=this.a
w.m(new C.e57(w,d))},
$S:2}
C.e57.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.I(0,v)},
$S:0}
C.e5a.prototype={
$0(){var w=this.b
return this.a.bdY(1.25,new A.au(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e5b.prototype={
$0(){var w=this.b
return this.a.bdY(0.8,new A.au(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e5c.prototype={
$0(){var w=this,v=w.b
return w.a.aW5(new A.au(A.aS(1/0,v.a,v.b),A.aS(1/0,v.c,v.d)),new A.au(w.c,w.d),w.e.gbmu())},
$S:0}
C.e5h.prototype={
$0(){var w=this.a
return w.m(new C.e58(w))},
$S:0}
C.e58.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e4p.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fH(new A.fx(s.c)),$async$$0)
case 2:t.yE("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dj6.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.blo(u,C.hKN(v.c,u),new C.dj5(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+40}
C.dj5.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dj7.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.boK(d.d,d.c,u.f.q(0,d.a),new C.dj4(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+41}
C.dj4.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fKu.prototype={
$1(d){var w,v=d.e
if(this.a.an(0,v))return v
v=this.b
w=A.T(v)
return A.nw(new A.cM(new A.Y(v,new C.fKv(d),w.k("Y<1>")),new C.fKw(),w.k("cM<1,q>")))},
$S:z+19}
C.fKv.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fKw.prototype={
$1(d){return d.a},
$S:z+8}
C.fKs.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fKt.prototype={
$1(d){return d.b},
$S:z+8}
C.fKz.prototype={
$1(d){var w,v=d.e
if(this.a.an(0,v))return v
v=this.b
w=A.T(v)
return A.nw(new A.cM(new A.Y(v,new C.fKA(d),w.k("Y<1>")),new C.fKB(),w.k("cM<1,q>")))},
$S:z+19}
C.fKA.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fKB.prototype={
$1(d){return d.a},
$S:z+8}
C.fKx.prototype={
$1(d){var w,v=A.ew([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.an(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+43}
C.fKy.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dj9.prototype={
$0(){return this.a},
$S:z+44}
C.djq.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.an(0,d)},
$S:220}
C.dji.prototype={
$2(d,e){var w=this.a.c_(0,d,new C.djj()),v=J.a8(w)
if(!v.q(w,e))v.I(w,e)},
$S:120}
C.djj.prototype={
$0(){return A.a([],x.s)},
$S:845}
C.djh.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eC(w,e)
return w===!0},
$S:261}
C.dja.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.djg.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.djf.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.I(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aT(v==null?D.E_:v)
u=1
while(v.C())u+=s.$2(v.gP(v).a,e)
v=s.b.h(0,d)
v=J.aT(v==null?B.Z:v)
while(v.C()){t=v.gP(v)
if(e.q(0,t))continue
e.I(0,t)
t=w.h(0,t)
t=J.aT(t==null?D.E_:t)
while(t.C())u+=s.$2(t.gP(t).a,e)}return u},
$S:2295}
C.djb.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.djk.prototype={
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
t=J.aT(t==null?D.E_:t)
while(t.C()){r=t.gP(t)
if(r.a!==a9&&!B.d.aS(w,new C.djl(r)))w.push(r)}}B.d.bq(w,new C.djm(a8))
B.d.b0(w,new C.djn())
q=C.i7R(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.f1_],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.brR(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:2296}
C.djl.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.djm.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.djn.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.djo.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a8(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b8(v,A.a4(v).k("b8<2>")).cC(0,0,B.qb)+88-w.gH(n).a}else u=0
for(w=J.a8(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:805}
C.djp.prototype={
$1(d){return 16+d*156},
$S:181}
C.dj8.prototype={
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
t.n(0,d,new C.GJ(r,new A.r(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.GJ(s,new A.r(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.GJ(s,new A.r(e,v)))}t=o.r.h(0,d)
t=J.aT(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gP(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.L1(d,new A.r(e+t,w),s,s.length))}},
$S:208}
C.djc.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aLu(new A.r(v.a,v.b+28),new A.r(w.a,w.b+28),!0,null))},
$S:120}
C.djd.prototype={
$1(d){return d.a===this.a},
$S:z+45}
C.dje.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:846}
C.djr.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:846}
C.djs.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:505}
C.djt.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:201}
C.dju.prototype={
$1(d){return d>=0.5},
$S:121}
C.fpI.prototype={
$3(d,e,f){var w=null,v=A.l(10)
return A.hd(A.aM(!1,v,!0,new A.a5(38,38,A.X(d,this.a.c?B.c:B.ct,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:2298}
C.f_D.prototype={
$1(d){var w=null,v=A.l(8),u=B.bQ.j(0.12),t=A.l(8)
return new A.D(B.nE,A.aM(!1,v,!0,A.o(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fEg,B.K,w,w),B.f,w,w,new A.n(u,w,w,t,w,w,B.n),w,w,w,w,B.OX,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f_C(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+46}
C.f_C.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dzn.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dzm.prototype={
$1(d){var w=null,v=A.l(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.o5,B.K,w,w)
return A.en(A.a([A.bP(!1,B.ds,w,w,!0,w,w,w,new C.dzk(d),w,w),A.bP(!1,A.d("Delete",w,w,w,w,w,w,A.m(w,w,B.mU,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dzl(d),w,w)],x.p),B.b9,B.CC,w,u,D.bHW,w,D.bJT,new A.ba(v,B.a1),w,w)},
$S:18}
C.dzk.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dzl.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dzw.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dzx.prototype={
$1(d){var w=this.a
return w.m(new C.dzv(w,d))},
$S:z+47}
C.dzv.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dzy.prototype={
$1(d){var w=null
return A.qM(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dzB.prototype={
$1(d){var w=this.a
return w.m(new C.dzu(w,d))},
$S:35}
C.dzu.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dzA.prototype={
$1(d){var w=null
return A.qM(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dzC.prototype={
$1(d){var w=this.a
return w.m(new C.dzt(w,d))},
$S:35}
C.dzt.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dzD.prototype={
$0(){var w=this.a
return w.m(new C.dzs(w))},
$S:0}
C.dzs.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dzE.prototype={
$0(){var w=this.a
return w.m(new C.dzr(w))},
$S:0}
C.dzr.prototype={
$0(){return++this.a.at},
$S:0}
C.dzF.prototype={
$0(){var w=this.a
return w.m(new C.dzq(w))},
$S:0}
C.dzq.prototype={
$0(){return--this.a.ax},
$S:0}
C.dzG.prototype={
$0(){var w=this.a
return w.m(new C.dzp(w))},
$S:0}
C.dzp.prototype={
$0(){return++this.a.ax},
$S:0}
C.dzH.prototype={
$1(d){var w=this.a
return w.m(new C.dzo(w,d))},
$S:9}
C.dzo.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dzz.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dzI.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.l(12)
if(p)w=B.bQ.j(0.18)
else w=q.c.a?B.ef:B.c
v=A.l(12)
if(p)u=B.bQ
else u=(q.c.a?B.eh:B.bO).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bQ
else t=q.c.a?B.bu:B.bh
t=A.X(f,t,r,r,r,18)
if(p)s=B.bQ
else s=q.c.a?B.bu:B.bh
return A.E(A.aE(!1,B.a3,!0,r,A.aM(!1,o,!0,A.cU(r,A.x(A.a([t,B.aw,A.d(e,r,r,r,r,r,r,A.m(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.i,0,B.p),r,r,B.b0,new A.n(w,r,u,v,r,r,B.n),B.eH,r,r,r,r,B.k6,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dzJ(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
$S:z+49}
C.dzJ.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dzS.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cgs.prototype={
$2(d,e){return new A.bC(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:104}
C.cgz.prototype={
$1(d){return d.aj()},
$S:z+5}
C.cgA.prototype={
$2(d,e){var w=J.b9(e,new C.cgy(),x.a)
w=A.B(w,w.$ti.k("ak.E"))
return new A.bC(d,w,x.d2)},
$S:z+51}
C.cgy.prototype={
$1(d){return d.aj()},
$S:z+12}
C.cgu.prototype={
$1(d){return C.amE(A.a1(d,x.N,x.z))},
$S:z+9}
C.cgv.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cgw.prototype={
$1(d){return C.hpS(A.a1(d,x.N,x.z))},
$S:z+11}
C.cgx.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cgE.prototype={
$1(d){return new A.aIy(d.f.length,d.a,d.b)},
$S:z+53}
C.cgF.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:697}
C.cgB.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cgC.prototype={
$1(d){return d.cPI(C.Hq(d,this.a))},
$S:z+54}
C.e5q.prototype={
$1(d){return C.ux(d,this.a.a.c)},
$S:z+3}
C.e5r.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e5v.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e5w.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e5n.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b25(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zc("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pA(r.c,r.e),$async$$0)
case 4:s.zc(p)
w=5
return A.b(s.Kr(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e5o.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b25(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zc("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pA(r.c,r.e),$async$$0)
case 4:s.zc(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e5p.prototype={
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
break}if(q==null){o.zc("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.zc("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.zc("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Kr(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.aa(j)
o=r.a
if(o.c==null){w=1
break}o.zc(B.a.ek(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e5u.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b24(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.zc("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).cf(A.eg(new C.e5t(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pA(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e5t.prototype={
$1(d){var w=this.b
return new C.a0P(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+83}
C.e5s.prototype={
$1(d){return D.hJp},
$S:z+56}
C.e5y.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e5z.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e5x(w,d)
return new A.D(B.da,new C.bhD(this.b,d.c,d.a,w,null),null)},
$S:2299}
C.e5x.prototype={
$0(){return this.a.YP(this.b.b)},
$S:0}
C.e5i.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e5j.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e5k.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e5l.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e5m.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e5A.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.X(s,"NGMYFTSYNC2"))t=!A.cS(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a6(this.b,!1).N(s)
return}},
$S:166}
C.dRu.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+57}
C.dRv.prototype={
$0(){return B.d.gH(D.a7g)},
$S:z+58}
C.dRw.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.as(A.X(this.b.d,B.c.j(0.95),w,w,D.dcv,44),w,w,w),w,w,new C.bmw(u,t,v,w),B.az)},
$S:59}
C.h1_.prototype={
$1(d){return A.pj(new C.h0Z(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:148}
C.h0Z.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.ef:B.c,p=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.tN,24)],x.V),o=r?B.eh:B.bO
o=A.o(t,t,B.f,t,t,new A.n(o,t,t,A.l(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bQ.j(0.18)],x.O)
w=A.o(t,D.bZW,B.f,t,t,new A.n(t,t,t,A.l(12),t,new A.a7(B.a5,B.a9,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.m(t,t,r?B.aS:B.av,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.o(t,A.x(A.a([B.U,o,new A.D(B.anZ,A.A(A.a([w,B.bc,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.m(t,t,r?B.bu:B.bh,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.i,0,B.p),1)],u),B.l,t,B.e,B.i,0,t,t),t),A.E(A.iA(!0,t,e,B.y,D.fqH,new C.h0Y(this.b,s),20,B.anw,t,B.ah,!1),1)],u),B.l,t,B.e,B.i,0,B.p),B.f,t,t,new A.n(q,t,t,B.lf,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:126}
C.h0Y.prototype={
$2(d,e){var w=null,v=D.a7g[e],u=A.l(16),t=A.l(16),s=this.b.a,r=A.K(s?B.eh:B.bO,B.r,1),q=A.a([new A.ab(0,B.G,B.w.j(s?0.35:0.08),B.et,8)],x.V),p=A.l(15),o=A.E(new C.a7F(v.a,!0,w),1),n=s?B.jZ:B.iA,m=A.d(v.b,w,1,B.a2,w,w,w,A.m(w,w,s?B.aS:B.av,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aE(!1,B.a3,!0,w,A.aM(!1,u,!0,A.eE(A.bv(p,A.x(A.a([o,A.o(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.m(w,w,s?B.bu:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.k8,w,w,w)],l),B.al,w,B.e,B.i,0,B.p),B.aq),w,new A.n(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.h0X(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)},
$S:85}
C.h0X.prototype={
$0(){A.a6(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cqh.prototype={
$0(){return this.a.ahQ(this.b)},
$S:0}
C.h0n.prototype={
$1(d){return D.hEd},
$S:z+59}
C.h8a.prototype={
$1(d){var w=this
return new C.a2C(w.a,w.b,w.c,w.d,null)},
$S:z+60}
C.h0r.prototype={
$1(d){return new C.a_t(this.a,null)},
$S:z+61}
C.h0q.prototype={
$1(d){return D.hFe},
$S:z+62}
C.daB.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.daC.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.daA(w,d))},
$S:35}
C.daA.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.daD.prototype={
$1(d){return this.a.L4()},
$S:2}
C.daE.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dax.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.day.prototype={
$1(d){return this.a.L4()},
$S:2}
C.daz.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cIF.prototype={
$0(){},
$S:0}
C.cIL.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cIM.prototype={
$0(){return this.a.aRl(-1)},
$S:0}
C.cIN.prototype={
$1(d){return this.a.m(new C.cIK())},
$S:2}
C.cIK.prototype={
$0(){},
$S:0}
C.cIO.prototype={
$0(){return this.a.aRl(1)},
$S:0}
C.cIP.prototype={
$1(d){return this.a.m(new C.cIJ())},
$S:2}
C.cIJ.prototype={
$0(){},
$S:0}
C.cIQ.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.m(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.eh:B.bO
return A.uV(u,u,B.b3,r,u,new C.cII(t,d),B.wM,s,w,u,new A.ax(v,1,B.r,-1),B.ci)},
$S:2300}
C.cII.prototype={
$1(d){var w=this.a
return w.m(new C.cIG(w,this.b))},
$S:9}
C.cIG.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cIR.prototype={
$1(d){return this.a.m(new C.cIH())},
$S:2}
C.cIH.prototype={
$0(){},
$S:0}
C.cIS.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.fpd.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).N(w)},
$S:2}
C.fpe.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.fpf.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).N(w)},
$S:0}
C.fpb.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbDP()
w=w.e
s=A.l(B.o.D(v-1,0,v))
return A.b3(new A.D(D.bJS,new A.e5(A.o(r,q.a.c,B.f,r,r,new A.n(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bzj(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:59}
C.fpc.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dK.aA(0,p)
p=A.l(12)
q=q.a.c
v=A.l(12)
u=A.l(12)
t=w*2.4
s=A.ap(B.aV,B.bQ,w)
s.toString
s=A.a([B.b3,s,B.aV],x.O)
return A.aE(!1,B.a3,!0,p,A.aM(!1,v,!0,A.eE(D.ezs,r,new A.n(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a7(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
$S:143}
C.fZE.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:63}
C.eXN.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eXE.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eXF.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eXL.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e0(new C.eXK(w,this.b),null)},
$S:20}
C.eXK.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.ef:B.c,t=A.l(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eI(w,u,new A.D(B.anT,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hvZ(new C.eXH(r,e),r.a),B.aB,A.A(A.a([A.E(A.dV(B.ds,new C.eXI(d),w),1),B.as,A.E(A.bJ(B.WI,w,new C.eXJ(r,d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.i,0,w,w)],q),B.al,w,B.e,B.N,0,B.p),w),w,w,w,w,w,B.d7,w,new A.ba(t,B.a1),w)},
$S:108}
C.eXH.prototype={
$1(d){return this.b.$1(new C.eXG(this.a,d))},
$S:35}
C.eXG.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eXI.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eXJ.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(w)
return null},
$S:0}
C.eXM.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.TV(this.b)},
$S:0}
C.eXz.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.bfU(w)},
$S:0}
C.eXD.prototype={
$1(d){return this.bpb(d)},
bpb(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Mk(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j3(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eXC.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("Y<1>")
w=A.B(new A.Y(w,new C.eXB(this.b),v),v.k("M.E"))
u.d=t.bfU(w)},
$S:0}
C.eXB.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eXO.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j3(this.b,w)},
$S:0}
C.eXP.prototype={
$1(d){return this.a.bHZ(d,this.b)},
$S:z+65}
C.eXA.prototype={
$0(){return this.a.abx(this.b)},
$S:0}
C.h7Y.prototype={
$1(d){return new C.af2(this.a,this.b,this.c,null)},
$S:z+66}
C.eXR.prototype={
$0(){return this.a.a0O(this.b)},
$S:0}
C.eXS.prototype={
$0(){return this.a.Ra(this.b)},
$S:0}
C.eXT.prototype={
$0(){return this.a.F6(this.b)},
$S:0}
C.eXU.prototype={
$0(){return this.a.a0P(this.b)},
$S:0}
C.eXQ.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eXu.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eXv.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eXw.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eXy.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qA(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eXx(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eXx.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eYg.prototype={
$2(d,e){return d+e.gxN()},
$S:z+69}
C.eYc.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eYd.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eXY.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.ef:B.c,s=A.l(24),r=A.o(v,D.c_p,B.f,v,v,new A.n(B.aA.j(u?0.18:0.08),v,A.K(B.aA.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.m(v,v,u?B.aS:B.av,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.m(v,v,u?B.bu:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.av
u=u?B.eh:B.bO
w=x.p
return A.eI(v,t,new A.D(B.wL,A.x(A.a([r,B.aO,q,B.P,p,B.db,A.A(A.a([A.E(A.dV(B.o8,new C.eXW(d),A.dj(v,v,v,v,v,v,v,v,v,o,v,v,B.fh,v,new A.ba(A.l(14),B.a1),new A.ax(u,1,B.r,-1),v,v,v,v)),1),B.as,A.E(A.bJ(D.h9z,v,new C.eXX(d),A.bp(B.aA,v,v,v,v,v,B.fh,v,new A.ba(A.l(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.i,0,v,v)],w),B.l,v,B.e,B.N,0,B.p),v),v,v,v,v,v,B.d7,v,new A.ba(s,B.a1),v)},
$S:46}
C.eXW.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.eXX.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.eY6.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.ef:B.c,i=A.l(28),h=A.a([new A.ab(0,B.G,B.w.j(k?0.35:0.08),B.fQ,28)],x.V),g=k?D.djX:B.a6z,f=x.p
g=A.o(m,A.x(A.a([A.o(m,m,B.f,m,m,new A.n(B.c.j(0.45),m,m,A.l(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.fjM,B.aw,new A.bK(B.a5,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.m(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cE,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.i,0,B.p),B.f,m,m,new A.n(m,m,m,m,m,new A.a7(B.ay,B.aC,B.x,g,m,m),B.n),m,m,m,m,B.anX,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bh,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b8L(B.b8,B.jv,new C.eY3(v,d),l,"Camera import","Scan QR"),1),B.as,A.E(v.b8L(B.cH,B.zO,new C.eY4(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.i,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bh,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.l(16)
r=B.aA.j(k?0.14:0.06)
q=A.l(16)
p=A.K(B.aA.j(0.28),B.r,1)
o=A.o(m,D.bZJ,B.f,m,m,new A.n(B.aA.j(0.12),m,m,A.l(12),m,m,B.n),m,m,m,m,B.bS,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.m(m,m,k?B.aS:B.av,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bh,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.i,0,B.p),1)
return A.bm(!0,new A.D(B.wF,A.o(m,A.x(A.a([g,new A.D(B.anU,A.x(A.a([w,B.U,u,B.bx,t,B.U,A.aE(!1,B.a3,!0,m,A.aM(!1,s,!0,A.o(m,A.A(A.a([o,B.bc,n,A.X(B.eI,k?B.bu:B.bh,m,m,m,m)],f),B.l,m,B.e,B.i,0,m,m),B.f,m,m,new A.n(r,m,p,q,m,m,B.n),m,m,m,m,B.bH,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eY5(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)],f),B.E,m,B.e,B.i,0,B.p),m)],f),B.l,m,B.e,B.N,0,B.p),B.aq,m,m,new A.n(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:27}
C.eY3.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.wd("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eY4.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.wd("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eY5.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.ON(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eY1.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.ef:B.c,m=A.l(24),l=A.a([new A.ab(0,B.G,B.w.j(o?0.35:0.08),B.eS,24)],x.V),k=o?B.eh:B.bO
k=A.o(q,q,B.f,q,q,new A.n(k,q,q,A.l(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.l(12)
v=this.c
u=o?B.bu:B.bh
u=A.bv(w,new A.a5(48,48,C.aT3(!0,A.l(12),48,B.PE,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.m(q,q,o?B.aS:B.av,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bn(v.gxN())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wF,A.o(q,A.x(A.a([B.U,k,new A.D(D.anR,A.A(A.a([u,B.bc,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.m(q,q,o?B.bu:B.bh,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.i,0,B.p),1)],s),B.l,q,B.e,B.i,0,q,q),q),B.Cu,r.crX(B.vg,B.aV,new C.eY_(d),p,"QR code or backup file","Transfer project"),r.b5L(!0,B.ej,B.aA,new C.eY0(d),p,"Remove from this device","Delete project"),B.U],s),B.l,q,B.e,B.N,0,B.p),B.f,q,q,new A.n(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:27}
C.eY_.prototype={
$0(){A.a6(this.a,!1).N("transfer")
return null},
$S:0}
C.eY0.prototype={
$0(){A.a6(this.a,!1).N("delete")
return null},
$S:0}
C.eY2.prototype={
$1(d){return this.bpc(d)},
bpc(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Mk(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.ws(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eYj.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eYi(w))},
$S:0}
C.eYi.prototype={
$0(){return this.a.r++},
$S:0}
C.eYk.prototype={
$0(){var w=this.a
return w.m(new C.eYh(w))},
$S:0}
C.eYh.prototype={
$0(){return this.a.r++},
$S:0}
C.eXV.prototype={
$0(){var w=this.a.c
w.toString
return A.j3(w,null)},
$S:0}
C.eXZ.prototype={
$0(){return this.a.cl8(this.b)},
$S:0}
C.eYf.prototype={
$0(){var w=this.a
return w.m(new C.eYe(w,this.b))},
$S:0}
C.eYe.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eY9.prototype={
$0(){return this.a.wd("scan")},
$S:0}
C.eYa.prototype={
$0(){return this.a.wd("file")},
$S:0}
C.eYb.prototype={
$1(d){return this.a.crY(d,this.b)},
$S:z+70}
C.eY8.prototype={
$0(){return this.a.Fa(this.b)},
$S:0}
C.eY7.prototype={
$0(){return this.a.a1i(this.b,this.c)},
$S:0}
C.cI_.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+71}
C.cHZ.prototype={
$1(d){return d.aj()},
$S:z+72}
C.cHX.prototype={
$1(d){return C.hQW(A.a1(d,x.N,x.z))},
$S:z+73}
C.cHY.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fJm.prototype={
$1(d){return d.y===D.kZ},
$S:z+3}
C.h8K.prototype={
$1(d){return C.aRI(d,this.a)},
$S:z+3}
C.fGR.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bU1.prototype={
$1(d){return!d.as},
$S:z+1}
C.bU0.prototype={
$1(d){return d.aj()},
$S:z+23}
C.bTY.prototype={
$1(d){return C.hpU(A.a1(d,x.N,x.z))},
$S:z+24}
C.bTZ.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bU_.prototype={
$1(d){return J.k(d)},
$S:16}
C.fx7.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fsF.prototype={
$1(d){return C.hfl(A.a1(d,x.N,x.z))},
$S:z+77}
C.fsG.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fsH.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.h0b.prototype={
$1(d){return J.k(d)},
$S:16}
C.h0c.prototype={
$1(d){return d.a},
$S:z+79}
C.h0d.prototype={
$1(d){return d.length!==0},
$S:3}
C.h0e.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.h0f.prototype={
$1(d){return d.TV(null).aj()},
$S:z+80}
C.h8I.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fJQ.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fN3.prototype={
$1(d){return C.amE(A.a1(d,x.N,x.z))},
$S:z+9}
C.fN4.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fN5.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fN6.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fN7.prototype={
$1(d){return C.ux(d,this.a)},
$S:z+3}
C.h_Z.prototype={
$1(d){return C.ux(d,this.a)},
$S:z+3}
C.h8D.prototype={
$1(d){return C.amE(A.a1(d,x.N,x.z))},
$S:z+9}
C.h8E.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h8F.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fJx.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fJy.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h8O.prototype={
$1(d){return!d.as},
$S:z+1}
C.fJ1.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fJ2.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fJ3.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.h8b.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fNV.prototype={
$1(d){return d.Q},
$S:z+15}
C.h_S.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fN0.prototype={
$1(d){return C.amE(A.a1(d,x.N,x.z))},
$S:z+9}
C.fN1.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fN2.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.h_N.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.ftd.prototype={
$1(d){return d.length!==0},
$S:3}
C.fte.prototype={
$1(d){return C.hpU(A.a1(d,x.N,x.z))},
$S:z+24}
C.ftf.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.ftg.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:16}
C.fth.prototype={
$1(d){return d.length!==0},
$S:3}
C.ftu.prototype={
$2(d,e){return d.eF(new C.ftv(e))},
$S:2301}
C.ftv.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.cg},
$S:2302}
C.ftr.prototype={
$1(d){return C.icG(d,this.a)},
$S:z+82}
C.fts.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.ftt.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fxP.prototype={
$1(d){return d.a},
$S:z+55}
C.fxQ.prototype={
$1(d){return d.length!==0},
$S:3}
C.fxR.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fAP.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fG5.prototype={
$1(d){return C.hBz(d,C.Hq(d,this.a))},
$S:z+5}
C.fG6.prototype={
$1(d){return C.hBA(d,C.Hq(d,this.a))},
$S:z+5};(function aliases(){var w=C.aCf.prototype
w.bx1=w.t
w=C.aAq.prototype
w.bwX=w.t
w=C.aHJ.prototype
w.bxp=w.t
w=C.aCg.prototype
w.bx2=w.t
w=C.aCi.prototype
w.bx3=w.t
w=C.aCj.prototype
w.bx4=w.t
w=C.aNW.prototype
w.bzT=w.t
w=C.aQ3.prototype
w.bCd=w.t
w=C.aQ4.prototype
w.bCe=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aFg.prototype,"gcoQ","coR",27)
var r
w(r=C.aCe.prototype,"gchH","chI",63)
v(r,"gaPw","Oj",0)
v(r,"gcxf","BB",0)
v(r,"gbPQ","P0",0)
v(r,"gcLH","zd",0)
v(r,"gcqV","a20",0)
v(r,"gbLc","OJ",0)
v(r,"gbQf","Yf",0)
w(r,"gbVm","bVn",76)
v(r,"gbFu","Ax",0)
v(C.aCh.prototype,"gcLD","G3",0)
v(r=C.amt.prototype,"gbtn","bto",2)
v(r,"gbtf","btg",2)
v(r,"gcMM","cMN",2)
u(r,"gqt","kO",0)
u(r=C.akD.prototype,"geY","fX",2)
w(r,"gcdj","cdk",26)
u(C.avw.prototype,"gqt","kO",0)
v(r=C.azs.prototype,"gcYl","cYm",2)
u(r,"gqt","kO",0)
u(C.aLz.prototype,"gbtl","btm",2)
v(C.amC.prototype,"gC6","cMZ",2)
u(r=C.amA.prototype,"gcNF","cNG",2)
u(r,"gqt","kO",0)
v(r=C.amw.prototype,"gbsd","bse",2)
v(r,"gcSR","cSS",2)
u(r=C.amy.prototype,"geY","fX",2)
u(r,"giC","cMi",2)
v(r=C.amu.prototype,"gcM7","cM8",2)
u(r,"gbr5","jH",2)
v(r=C.aFQ.prototype,"gahs","wt",0)
v(r,"gcko","a1a",0)
v(r,"gaTN","IG",0)
v(r=C.aFN.prototype,"gcHC","a47",0)
v(r,"gahs","wt",0)
v(r,"gcvf","a2F",0)
v(r,"gckj","b3Y",2)
v(r,"gcll","a1n",0)
w(r,"gchB","chC",33)
v(r,"gbQ7","IL",0)
v(r,"gcIG","cIH",2)
v(r,"gc7h","a_1",0)
w(r,"gcg5","cg6",34)
v(r,"gck7","ck8",2)
v(r=C.aEf.prototype,"gcdp","QH",0)
v(r,"gcdr","cds",2)
v(r,"gbMH","ab9",0)
v(r=C.aFP.prototype,"gbTL","YL",0)
v(r,"gc3j","Zr",0)
v(r,"gcBG","a3v",0)
v(r,"gcxP","a36",0)
v(C.aFO.prototype,"gcxy","ajg",0)
v(C.auG.prototype,"gcg3","a0M",0)
v(C.aAZ.prototype,"ga3R","L4",2)
v(C.aAY.prototype,"ga3R","L4",2)
v(C.azE.prototype,"ga3R","L4",2)
v(r=C.aHk.prototype,"gb58","RH",0)
v(r,"gbEi","WS",0)
v(r,"gcl9","cla",2)
w(C.aHj.prototype,"gcgW","cgX",67)
t(C.aHl.prototype,"gaTI",0,0,null,["$1","$0"],["IF","bO0"],68,0,0)
s(C,"hJT","imB",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aK,[C.aqd,C.uS,C.nt,C.Ix,C.age,C.KV,C.uT,C.bUx,C.te,C.bq1,C.amL,C.aek,C.ls,C.bT8,C.auS,C.zC,C.alj,C.MY,C.bbp,C.aan,C.biI,C.agl,C.aAG,C.ag9,C.aLz,C.L1,C.GJ,C.bhB,C.aLu,C.arC,C.djv,C.lR,C.aW0,C.aW_,C.aU1,C.ui,C.rt,C.lC,C.i5,C.kZ,C.aJs])
u(A.kX,[C.fRJ,C.fRI,C.fRK,C.h0T,C.fEL,C.fEM,C.fER,C.fPr,C.fPq,C.fPp,C.c9o,C.h1p,C.h1h,C.h1t,C.fJF,C.dSa,C.dS5,C.dS6,C.dRJ,C.dRF,C.dSp,C.dSq,C.dSj,C.dSk,C.dSr,C.dSs,C.fKq,C.fMY,C.fMZ,C.h_X,C.h8C,C.fJw,C.h0x,C.diI,C.di4,C.did,C.diu,C.di9,C.dif,C.di6,C.dij,C.dik,C.dii,C.diz,C.diy,C.dkv,C.dkw,C.dkx,C.diW,C.dj0,C.dj_,C.cR2,C.cR4,C.d9P,C.dad,C.dae,C.dah,C.daj,C.dak,C.dal,C.dan,C.dao,C.bST,C.bSN,C.fxw,C.h8u,C.h8v,C.h8w,C.h8r,C.h8x,C.h8y,C.h8z,C.h8q,C.fL3,C.fZR,C.fGS,C.fNU,C.bNW,C.h8U,C.h_t,C.bM5,C.bM0,C.bM2,C.bM1,C.crY,C.crT,C.crU,C.crS,C.crQ,C.crV,C.cS6,C.cGZ,C.cH1,C.cH_,C.cH2,C.cH3,C.f9S,C.fk6,C.bTF,C.bTz,C.bTD,C.bTg,C.e3Z,C.e3W,C.e3X,C.e3V,C.e40,C.bTx,C.bTn,C.bT7,C.bT6,C.bT2,C.bT3,C.bT4,C.bT5,C.e5E,C.e53,C.e4Z,C.e4q,C.e4G,C.e4J,C.e4F,C.e4E,C.e4V,C.e4W,C.e4Q,C.e4e,C.e56,C.e50,C.e4g,C.e4h,C.e4i,C.e4n,C.e4l,C.e4k,C.e4A,C.e4B,C.e4v,C.e5d,C.e59,C.dj6,C.dj7,C.fKu,C.fKv,C.fKw,C.fKs,C.fKt,C.fKz,C.fKA,C.fKB,C.fKx,C.fKy,C.djq,C.djg,C.djb,C.djl,C.djm,C.djp,C.djd,C.djs,C.djt,C.dju,C.fpI,C.f_D,C.dzm,C.dzw,C.dzx,C.dzy,C.dzB,C.dzA,C.dzC,C.dzH,C.dzI,C.cgz,C.cgy,C.cgu,C.cgv,C.cgw,C.cgx,C.cgE,C.cgB,C.cgC,C.e5q,C.e5t,C.e5s,C.e5z,C.e5A,C.dRu,C.h1_,C.h0n,C.h8a,C.h0r,C.h0q,C.daC,C.daD,C.day,C.cIN,C.cIP,C.cIQ,C.cII,C.cIR,C.fpd,C.fZE,C.eXL,C.eXH,C.eXD,C.eXB,C.eXP,C.h7Y,C.eXY,C.eY6,C.eY1,C.eY2,C.eYb,C.cHZ,C.cHX,C.cHY,C.fJm,C.h8K,C.fGR,C.bU1,C.bU0,C.bTY,C.bTZ,C.bU_,C.fsF,C.fsG,C.h0b,C.h0c,C.h0d,C.h0e,C.h0f,C.h8I,C.fJQ,C.fN3,C.fN4,C.fN6,C.fN7,C.h_Z,C.h8D,C.h8E,C.h8F,C.fJx,C.fJy,C.h8O,C.fJ1,C.fJ2,C.h8b,C.fNV,C.h_S,C.fN0,C.fN1,C.h_N,C.ftd,C.fte,C.ftf,C.ftg,C.fth,C.ftv,C.ftr,C.fts,C.fxP,C.fxQ,C.fAP,C.fG5,C.fG6])
u(A.av,[C.b0A,C.amr,C.aXi,C.a_7,C.bdd,C.QV,C.a6U,C.tE,C.Iz,C.bhz,C.blo,C.bzu,C.boK,C.aeH,C.bln,C.aeG,C.blm,C.aEg,C.aKw,C.aeI,C.GF,C.bhA,C.adX,C.bhy,C.bhD,C.b0y,C.auG,C.af2])
u(A.qJ,[C.bdR,C.bf3,C.beV,C.aJm,C.bkp,C.bq0,C.aXn,C.bdT,C.aCd,C.bdm,C.bu6,C.bkx,C.bjY,C.bk4,C.bhC,C.bgD,C.bmw,C.bzj])
u(A.np,[C.h1m,C.h1n,C.h1o,C.h1f,C.h1g,C.h1r,C.h1s,C.dSm,C.dS8,C.dSb,C.dRQ,C.dRR,C.dRS,C.dRP,C.dRX,C.dRO,C.dRY,C.dRZ,C.dRN,C.dS_,C.dRM,C.dS0,C.dRL,C.dS1,C.dRD,C.dRE,C.dRK,C.dS2,C.dRI,C.dS3,C.dRH,C.dRT,C.dRG,C.dRU,C.dRC,C.dRV,C.dRW,C.dSn,C.dSo,C.dSc,C.dSd,C.dSe,C.dSf,C.dSg,C.dSh,C.dSi,C.dSu,C.dSl,C.fKr,C.di2,C.di0,C.di1,C.di3,C.diH,C.diw,C.dit,C.di5,C.dix,C.dib,C.dic,C.die,C.div,C.dia,C.dig,C.diE,C.diq,C.dip,C.dir,C.dis,C.dil,C.din,C.dio,C.dih,C.diA,C.diD,C.di7,C.di8,C.dku,C.dkt,C.dks,C.dkr,C.dky,C.dkq,C.dkz,C.diX,C.diY,C.diZ,C.dj1,C.diV,C.diU,C.cR3,C.d9O,C.da0,C.da_,C.daf,C.d9Z,C.dag,C.d9Y,C.d9X,C.dai,C.d9W,C.da8,C.da7,C.dap,C.bSM,C.bSW,C.bSO,C.bSP,C.bSS,C.bSR,C.bSU,C.bSV,C.bSQ,C.bSK,C.bSL,C.bUp,C.bUq,C.bUr,C.bUs,C.bUt,C.bUu,C.bUv,C.h8t,C.fZS,C.bM4,C.bM_,C.bLY,C.bLZ,C.bLX,C.cs_,C.cs0,C.crZ,C.cs1,C.cs3,C.cs4,C.cs5,C.crW,C.cGY,C.cH6,C.cH7,C.cH8,C.cH5,C.cH9,C.cHa,C.cHb,C.cHc,C.cH0,C.cH4,C.bTV,C.bTU,C.bTS,C.bTQ,C.bTR,C.bTN,C.bTO,C.bTP,C.bTT,C.bTM,C.f9T,C.f9U,C.f9V,C.f9W,C.f9X,C.bTJ,C.bTK,C.bTL,C.bTE,C.bTG,C.bTH,C.bTI,C.bTA,C.bTk,C.bTj,C.bTi,C.bTc,C.bTd,C.bTh,C.bTe,C.bTf,C.bTb,C.e3Y,C.e4_,C.e3T,C.e3U,C.e3S,C.e41,C.e42,C.e43,C.e46,C.e47,C.e48,C.e49,C.e4a,C.e4b,C.e4c,C.e4d,C.e44,C.e45,C.bTw,C.bTv,C.bTm,C.bTl,C.bTs,C.bTt,C.bTp,C.bTq,C.bTr,C.bTo,C.bSX,C.bSY,C.bT1,C.bT0,C.bT_,C.bSZ,C.e5D,C.e5C,C.e5F,C.e5G,C.e5H,C.e5B,C.e5J,C.e5I,C.e51,C.e52,C.e54,C.e4r,C.e4I,C.e4H,C.e4K,C.e4Y,C.e4D,C.e4O,C.e4P,C.e4N,C.e4L,C.e4M,C.e4R,C.e4S,C.e4T,C.e4X,C.e4f,C.e5_,C.e4j,C.e4m,C.e4o,C.e55,C.e4u,C.e4s,C.e4w,C.e4x,C.e4t,C.e4y,C.e4C,C.e5e,C.e5f,C.e57,C.e5a,C.e5b,C.e5c,C.e5h,C.e58,C.e4p,C.dj5,C.dj4,C.dj9,C.djj,C.dja,C.f_C,C.dzn,C.dzk,C.dzl,C.dzv,C.dzu,C.dzt,C.dzD,C.dzs,C.dzE,C.dzr,C.dzF,C.dzq,C.dzG,C.dzp,C.dzo,C.dzz,C.dzJ,C.dzS,C.e5r,C.e5v,C.e5w,C.e5n,C.e5o,C.e5p,C.e5u,C.e5y,C.e5x,C.e5i,C.e5j,C.e5k,C.e5l,C.e5m,C.dRv,C.h0X,C.cqh,C.daB,C.daA,C.daE,C.dax,C.daz,C.cIF,C.cIL,C.cIM,C.cIK,C.cIO,C.cIJ,C.cIG,C.cIH,C.cIS,C.fpe,C.fpf,C.eXN,C.eXE,C.eXF,C.eXG,C.eXI,C.eXJ,C.eXM,C.eXz,C.eXC,C.eXO,C.eXA,C.eXR,C.eXS,C.eXT,C.eXU,C.eXQ,C.eXu,C.eXv,C.eXw,C.eXy,C.eXx,C.eYc,C.eYd,C.eXW,C.eXX,C.eY3,C.eY4,C.eY5,C.eY_,C.eY0,C.eYj,C.eYi,C.eYk,C.eYh,C.eXV,C.eXZ,C.eYf,C.eYe,C.eY9,C.eYa,C.eY8,C.eY7])
u(A.ag,[C.aqq,C.Ue,C.a_R,C.a_V,C.a_T,C.a_r,C.ams,C.akC,C.avv,C.azr,C.amB,C.amz,C.amv,C.WA,C.amx,C.Uf,C.arF,C.arz,C.a0v,C.arD,C.a0P,C.a0Q,C.a7F,C.a_t,C.a_s,C.ZZ,C.a2C,C.Gt,C.azx,C.auF,C.auz,C.auE,C.P8])
u(A.ah,[C.aFg,C.bht,C.aCe,C.bhS,C.aCh,C.bf1,C.aCf,C.aAq,C.aHJ,C.azs,C.aCj,C.aCi,C.aCg,C.bmS,C.amy,C.amu,C.aFQ,C.aFN,C.aEf,C.aFP,C.aFO,C.bmT,C.aNW,C.aAZ,C.aAY,C.azE,C.bzm,C.aQ3,C.aQ4,C.aHk,C.bof,C.aHj,C.bB7])
u(A.n0,[C.dS7,C.dS9,C.dS4,C.dSt,C.fN_,C.bSJ,C.diG,C.diF,C.dim,C.diB,C.diC,C.dj2,C.bUw,C.bUo,C.bT9,C.bTa,C.h8s,C.h8T,C.bM3,C.cs2,C.crX,C.crR,C.f9Y,C.bTy,C.bTB,C.bTC,C.dtE,C.bTu,C.e4U,C.e4z,C.e5g,C.dji,C.djh,C.djf,C.djk,C.djn,C.djo,C.dj8,C.djc,C.dje,C.djr,C.cgs,C.cgA,C.cgF,C.dRw,C.h0Z,C.h0Y,C.fpb,C.fpc,C.eXK,C.eYg,C.cI_,C.fx7,C.fsH,C.fN5,C.fJ3,C.fN2,C.ftu,C.ftt,C.fxR])
u(A.qw,[C.a26,C.agn,C.a2p,C.a0i,C.acZ,C.aMg,C.Iy,C.amD,C.cI0,C.cI1])
t(C.amt,C.aCf)
t(C.akD,C.aAq)
t(C.avw,C.aHJ)
t(C.bhx,C.aCj)
t(C.amC,C.bhx)
t(C.bhw,C.aCi)
t(C.amA,C.bhw)
t(C.bhv,C.aCg)
t(C.amw,C.bhv)
t(C.bmx,C.aNW)
t(C.bzk,C.aQ3)
t(C.bzl,C.aQ4)
t(C.aHl,C.bB7)
t(C.bbD,A.bbq)
t(C.bzn,A.ap5)
t(C.bbC,C.bzn)
w(C.aCf,A.cf)
w(C.aAq,A.cf)
w(C.aHJ,A.eP)
w(C.aCg,A.cf)
v(C.bhv,C.ag9)
w(C.aCi,A.cf)
v(C.bhw,C.ag9)
w(C.aCj,A.cf)
v(C.bhx,C.ag9)
w(C.aNW,A.eP)
w(C.aQ3,A.cf)
w(C.aQ4,A.cf)
v(C.bB7,A.eG)
v(C.bzn,A.jh)})()
A.p4(b.typeUniverse,JSON.parse('{"b0A":{"av":[],"v":[]},"bdR":{"aA":[]},"aqq":{"ag":[],"v":[]},"aFg":{"ah":["aqq"]},"Ue":{"ag":[],"v":[]},"amr":{"av":[],"v":[]},"aXi":{"av":[],"v":[]},"bht":{"ah":["Ue"]},"a_R":{"ag":[],"v":[]},"a_V":{"ag":[],"v":[]},"a_T":{"ag":[],"v":[]},"a_r":{"ag":[],"v":[]},"aCe":{"ah":["a_R"]},"bhS":{"ah":["a_V"]},"aCh":{"ah":["a_T"]},"a_7":{"av":[],"v":[]},"bf3":{"aA":[]},"beV":{"aA":[]},"bf1":{"ah":["a_r"]},"aJm":{"aA":[]},"bkp":{"aA":[]},"bdd":{"av":[],"v":[]},"ams":{"ag":[],"v":[]},"amt":{"ah":["ams"]},"bq0":{"aA":[]},"aXn":{"aA":[]},"akC":{"ag":[],"v":[]},"avv":{"ag":[],"v":[]},"azr":{"ag":[],"v":[]},"akD":{"ah":["akC"]},"bdT":{"aA":[]},"QV":{"av":[],"v":[]},"aCd":{"aA":[]},"avw":{"ah":["avv"]},"bdm":{"aA":[]},"azs":{"ah":["azr"]},"amB":{"ag":[],"v":[]},"amz":{"ag":[],"v":[]},"amv":{"ag":[],"v":[]},"amC":{"ah":["amB"]},"bu6":{"aA":[]},"amA":{"ah":["amz"]},"bkx":{"aA":[]},"amw":{"ah":["amv"]},"bjY":{"aA":[]},"WA":{"ag":[],"v":[]},"amx":{"ag":[],"v":[]},"Uf":{"ag":[],"v":[]},"a6U":{"av":[],"v":[]},"bk4":{"aA":[]},"tE":{"av":[],"v":[]},"Iz":{"av":[],"v":[]},"bmS":{"ah":["WA"]},"amy":{"ah":["amx"]},"amu":{"ah":["Uf"]},"arF":{"ag":[],"v":[]},"arz":{"ag":[],"v":[]},"a0v":{"ag":[],"v":[]},"aeI":{"av":[],"v":[]},"aFQ":{"ah":["arF"]},"aFN":{"ah":["arz"]},"bhz":{"av":[],"v":[]},"bhC":{"aA":[]},"blo":{"av":[],"v":[]},"bgD":{"aA":[]},"bzu":{"av":[],"v":[]},"boK":{"av":[],"v":[]},"aEf":{"ah":["a0v"]},"aeH":{"av":[],"v":[]},"bln":{"av":[],"v":[]},"aeG":{"av":[],"v":[]},"blm":{"av":[],"v":[]},"aEg":{"av":[],"v":[]},"aKw":{"av":[],"v":[]},"GF":{"av":[],"v":[]},"arD":{"ag":[],"v":[]},"a0P":{"ag":[],"v":[]},"a0Q":{"ag":[],"v":[]},"aFP":{"ah":["arD"]},"bhA":{"av":[],"v":[]},"adX":{"av":[],"v":[]},"bhy":{"av":[],"v":[]},"bhD":{"av":[],"v":[]},"aFO":{"ah":["a0P"]},"bmT":{"ah":["a0Q"]},"b0y":{"av":[],"v":[]},"a7F":{"ag":[],"v":[]},"bmx":{"ah":["a7F"]},"bmw":{"aA":[]},"auG":{"av":[],"v":[]},"a_t":{"ag":[],"v":[]},"a_s":{"ag":[],"v":[]},"ZZ":{"ag":[],"v":[]},"a2C":{"ag":[],"v":[]},"aAZ":{"ah":["a_t"]},"aAY":{"ah":["a_s"]},"azE":{"ah":["ZZ"]},"bzm":{"ah":["a2C"]},"Gt":{"ag":[],"v":[]},"azx":{"ag":[],"v":[]},"bzk":{"ah":["Gt"]},"bzl":{"ah":["azx"]},"bzj":{"aA":[]},"auF":{"ag":[],"v":[]},"aHk":{"ah":["auF"]},"af2":{"av":[],"v":[]},"auz":{"ag":[],"v":[]},"auE":{"ag":[],"v":[]},"bof":{"ah":["auz"]},"aHj":{"ah":["auE"]},"P8":{"ag":[],"v":[]},"aHl":{"ah":["P8"],"eG":[]},"bbC":{"jh":[],"fp":[]}}'))
A.a2q(b.typeUniverse,JSON.parse('{"ag9":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.aF
return{e2:w("aU1"),cq:w("me"),Q:w("rt"),r:w("bq<q,q>"),c5:w("aW_"),dY:w("aW0"),fH:w("MY"),de:w("alj"),dN:w("N5<H>"),gc:w("Ev<H>"),A:w("eS<q?>"),e:w("Ix"),B:w("nt"),P:w("i5"),df:w("ls"),k:w("kZ"),x:w("aB<~>"),U:w("U<aUM>"),V:w("U<ab>"),C:w("U<rt>"),O:w("U<u>"),c:w("U<MY>"),b:w("U<alj>"),ac:w("U<eS<q?>>"),I:w("U<nt>"),u:w("U<i5>"),J:w("U<ls>"),_:w("U<kZ>"),cl:w("U<aB<ai<ac<q,@>>>>"),R:w("U<o0>"),eU:w("U<ai<+(G,G)>>"),ez:w("U<ac<q,aK>>"),gE:w("U<ac<q,q>>"),Y:w("U<ac<q,@>>"),fD:w("U<o2>"),bp:w("U<oM>"),g:w("U<r>"),ar:w("U<auS>"),v:w("U<hZ>"),gy:w("U<aan>"),L:w("U<+(q,q)>"),G:w("U<+(G,G)>"),E:w("U<+(G,~())>"),bd:w("U<+(q,H,Q)>"),bF:w("U<+count,id,name(H,q,q)>"),F:w("U<d6>"),s:w("U<q>"),cF:w("U<at>"),aS:w("U<jL>"),dT:w("U<bbp>"),p:w("U<v>"),Z:w("U<fp>"),D:w("U<lC>"),h:w("U<aAG>"),cC:w("U<biI>"),fp:w("U<KV>"),M:w("U<L1>"),gZ:w("U<aJs>"),gA:w("U<age>"),e4:w("U<agl>"),dE:w("U<aLu>"),f7:w("U<Q>"),n:w("U<G>"),t:w("U<H>"),dS:w("U<aA?>"),d4:w("U<q?>"),eF:w("cB<ah<ag>>"),d:w("ai<nt>"),do:w("ai<i5>"),cg:w("ai<ls>"),ax:w("ai<kZ>"),fO:w("ai<ac<q,@>>"),cz:w("ai<+(q,q)>"),bC:w("ai<+count,id,name(H,q,q)>"),dy:w("ai<q>"),er:w("ai<at>"),gk:w("ai<lC>"),j:w("ai<@>"),fK:w("bC<q,q>"),d2:w("bC<q,ai<ac<q,@>>>"),a:w("ac<q,@>"),f:w("ac<@,@>"),gv:w("N<q,IA>"),cM:w("N<H,q>"),w:w("kF"),g2:w("tP"),bV:w("aqd"),fL:w("cw"),K:w("aK"),dc:w("hZ"),fo:w("Pw<H>"),fz:w("+(q,q)"),ei:w("+scope,text(q,q)"),bn:w("+games,limit(Q,H)"),d9:w("+dx,hidden(G,ai<i5>)"),cs:w("+count,id,name(H,q,q)"),N:w("q"),fT:w("iD<i5>"),ec:w("iD<q>"),gW:w("ra<G>"),X:w("bt<G>"),bW:w("e8"),W:w("bl<q>"),b4:w("bl<H>"),cI:w("kj<q>"),av:w("Y<zC>"),cc:w("Y<q>"),l:w("v"),gF:w("fp"),fA:w("lC"),dO:w("GJ"),bw:w("aeG<q?>"),cy:w("L3"),q:w("pP"),y:w("Q"),i:w("G"),z:w("@"),S:w("H"),eK:w("ai<kZ>?"),m:w("arC?"),cT:w("r?"),h5:w("+(q,q)?"),eo:w("+code,qrPayload,usesRemaining(q,q,H)?"),he:w("+qrPayload,token,usesRemaining(q,q,H)?"),gG:w("+members,trees,viewOnly(H,H,Q)?"),az:w("qm?"),T:w("q?"),aD:w("e8?"),o:w("lC?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b6p=new A.be(B.fR,B.bJ,B.fR,B.bJ)
D.af6=new A.be(B.fR,B.ir,B.fR,B.ir)
D.b6E=new A.be(B.jy,B.bJ,B.bJ,B.bJ)
D.b6I=new A.ax(B.cX,1.4,B.r,-1)
D.b6S=new A.ax(B.aa,1,B.r,-1)
D.afC=new A.aY(140,1/0,0,1/0)
D.b8f=new A.aY(0,1/0,64,1/0)
D.b8j=new A.aY(0,84,0,1/0)
D.afJ=new A.aY(130,1/0,0,1/0)
D.aEb=w([B.mb,B.rX,B.c],x.O)
D.caW=new A.a7(B.ay,B.aC,B.x,D.aEb,null,null)
D.b94=new A.n(null,null,null,null,null,D.caW,B.n)
D.djm=w([B.aV,B.bQ],x.O)
D.cd5=new A.a7(B.aY,B.b2,B.x,D.djm,null,null)
D.b9p=new A.n(null,null,null,null,null,D.cd5,B.n)
D.Z2=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fC=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dns=w([B.dA,D.Z2,D.fC],x.O)
D.ca6=new A.a7(B.aY,B.b2,B.x,D.dns,null,null)
D.baa=new A.n(null,null,null,null,null,D.ca6,B.n)
D.fBt=new A.F(!0,B.bV,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hc3=new A.C("?",null,D.fBt,null,null,null,null,null,null,null,null,null)
D.be0=new A.cl(B.A,null,null,D.hc3,null)
D.Wy=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fV2=new A.C("\ud83c\udf33",null,D.Wy,null,null,null,null,null,null,null,null,null)
D.agt=new A.cl(B.A,null,null,D.fV2,null)
D.fXI=new A.C("\ud83c\udfc6",null,B.Lc,null,null,null,null,null,null,null,null,null)
D.beb=new A.cl(B.A,null,null,D.fXI,null)
D.bg1=new A.fm(null,null,null,null,null,B.kx,null,null,null,null)
D.agu=new A.cl(B.A,null,null,D.bg1,null)
D.kR=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fC1=new A.F(!0,D.kR,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWI=new A.C("No books on the shelf yet.",null,D.fC1,null,null,null,null,null,null,null,null,null)
D.ezt=new A.D(B.nK,D.fWI,null)
D.bes=new A.cl(B.A,null,null,D.ezt,null)
D.fJa=new A.F(!0,D.fC,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hcZ=new A.C("\ud83d\ude8c  On the road\u2026",null,D.fJa,null,null,null,null,null,null,null,null,null)
D.eA2=new A.D(B.cq,D.hcZ,null)
D.beV=new A.cl(B.A,null,null,D.eA2,null)
D.aYq=new A.C("\ud83e\uddfa",null,D.Wy,null,null,null,null,null,null,null,null,null)
D.bf9=new A.cl(B.A,null,null,D.aYq,null)
D.h_b=new A.C("\ud83c\udfad",null,D.Wy,null,null,null,null,null,null,null,null,null)
D.bfk=new A.cl(B.A,null,null,D.h_b,null)
D.bfn=new A.cl(B.A,null,null,R.YP,null)
D.agO=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.agV=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bhE=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bhJ=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bhV=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bhX=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bhZ=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bi6=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lG=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bia=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bif=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bih=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bii=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lH=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.biW=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.BV=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bj4=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bjo=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bjr=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bjx=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bjF=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.ahA=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bjM=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Zg=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.ahD=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bjX=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Zi=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bkh=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.ahP=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bkG=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bkW=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bll=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.blw=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.Gg=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.blV=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.blY=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bm1=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.aih=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bmj=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bmp=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bmw=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.ail=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bmF=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bn8=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bni=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bnl=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bnr=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.aiB=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bo5=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.aj_=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bp4=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ajb=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bpu=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.Gu=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bpB=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bpL=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bpN=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ajf=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bq4=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bq6=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bq9=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ajn=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.a_3=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bqy=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bqV=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.br_=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.ajz=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.br6=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.a_9=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.brt=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bru=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.GD=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bsh=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bsU=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bt_=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bt3=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qr=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bte=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bti=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bto=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.btq=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.akl=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.akp=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.GJ=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a_u=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.aky=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.buE=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.buW=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bvo=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bvx=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.akY=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a_G=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bvI=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bvZ=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a_M=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bwf=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bww=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a_Q=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bwB=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.alf=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.alh=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bwU=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.alo=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bxm=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bxq=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bxx=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bxG=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bxP=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.byq=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.byW=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fQS=new A.C("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bCr=new A.eS(null,D.fQS,B.fc,null,x.A)
D.h_2=new A.C("None",null,null,null,null,null,null,null,null,null,null,null)
D.bCt=new A.eS(null,D.h_2,B.fc,null,x.A)
D.bD_=new A.bf(38e5)
D.bDJ=new A.iy(0,10,0,10)
D.bDS=new A.P(0,1,0,0)
D.bE2=new A.iy(0,4,0,4)
D.bE5=new A.P(0,4,5,0)
D.bEl=new A.P(10,10,14,10)
D.bEw=new A.iy(10,4,10,4)
D.bEF=new A.iy(10,8,10,8)
D.bEG=new A.P(10,8,8,8)
D.bFb=new A.P(12,6,12,2)
D.bFt=new A.P(14,0,14,6)
D.bFx=new A.P(14,10,6,6)
D.bFy=new A.P(14,12,14,0)
D.bFC=new A.P(14,12,14,8)
D.bFF=new A.P(14,12,8,14)
D.bFJ=new A.iy(14,14,14,14)
D.bG1=new A.P(14,6,14,40)
D.bG4=new A.P(14,8,14,30)
D.bGs=new A.P(16,2,16,10)
D.bGB=new A.P(16,6,16,30)
D.bGD=new A.P(16,6,16,8)
D.bGS=new A.P(18,10,18,4)
D.bGU=new A.P(18,12,18,0)
D.bH0=new A.P(18,14,12,4)
D.anR=new A.P(18,16,18,8)
D.bHh=new A.P(18,20,18,22)
D.bHn=new A.P(18,30,18,30)
D.bHF=new A.P(20,10,12,20)
D.bHI=new A.P(20,11,20,11)
D.bHU=new A.P(20,18,16,18)
D.bHW=new A.P(20,18,20,6)
D.bIL=new A.P(24,32,24,28)
D.bIM=new A.P(24,36,24,32)
D.bIP=new A.P(26,26,24,14)
D.bJ3=new A.P(2,4,2,8)
D.bJ7=new A.P(30,0,30,0)
D.bJi=new A.P(38,22,22,22)
D.aoe=new A.P(40,24,24,24)
D.bJk=new A.iy(40,40,40,40)
D.bJm=new A.P(46,30,30,30)
D.bJO=new A.P(56,40,40,40)
D.bJS=new A.P(1.25,1.25,1.25,1.25)
D.bJT=new A.P(60,0,60,0)
D.bJX=new A.P(6,14,6,16)
D.bK0=new A.P(6,4,12,0)
D.bK4=new A.P(6,6,10,2)
D.bKb=new A.iy(7,3,7,3)
D.bKI=new A.P(5,1.5,5,1.5)
D.bKT=new A.P(6,2.5,6,2.5)
D.h7e=new A.C("Family Games",null,B.jR,null,null,null,null,null,null,null,null,null)
D.fPu=new A.C("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.Wp,null,null,null,null,null,null,null,null,null)
D.cMm=w([D.h7e,D.fPu],x.p)
D.bzV=new A.fo(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.cMm,null)
D.bLj=new A.bz(1,B.bd,D.bzV,null)
D.hbB=new A.C("Signature",null,B.nf,null,null,null,null,null,null,null,null,null)
D.bLm=new A.bz(1,B.bd,D.hbB,null)
D.h3M=new A.C("MADE BY THE ONE WHO PLANTED THE TREE",null,B.u4,null,null,null,null,null,null,null,null,null)
D.bLU=new A.bz(1,B.bd,D.h3M,null)
D.h8H=new A.C("Tell the AI what to fix",null,B.dl,null,null,null,null,null,null,null,null,null)
D.bMa=new A.bz(1,B.bd,D.h8H,null)
D.fJX=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.haG=new A.C("Worksheets",null,D.fJX,null,null,null,null,null,null,null,null,null)
D.fK8=new A.F(!0,B.ahj,null,null,null,null,13,B.cE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h9x=new A.C("Track your project spending",null,D.fK8,null,null,null,null,null,null,null,null,null)
D.dao=w([D.haG,B.aw,D.h9x],x.p)
D.bzy=new A.fo(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.dao,null)
D.bMg=new A.bz(1,B.bd,D.bzy,null)
D.fES=new A.F(!0,B.kx,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQ3=new A.C("FAMILY LIBRARY",null,D.fES,null,null,null,null,null,null,null,null,null)
D.bMz=new A.bz(1,B.bd,D.fQ3,null)
D.Pg=new C.Ix("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wO=new C.Iy(0,"male")
D.oB=new C.Iy(1,"female")
D.zh=new C.Iy(2,"unknown")
D.uV=new C.amD(0,"owner")
D.Ph=new C.amD(1,"editor")
D.kZ=new C.amD(2,"viewer")
D.aqb=new A.a_(61199,"MaterialIcons",!1)
D.bRU=new A.a_(61504,"MaterialIcons",!1)
D.bRV=new A.a_(61505,"MaterialIcons",!1)
D.bRX=new A.a_(61587,"MaterialIcons",!1)
D.bS3=new A.a_(61890,"MaterialIcons",!1)
D.bSX=new A.a_(63034,"MaterialIcons",!0)
D.bTe=new A.a_(63153,"MaterialIcons",!1)
D.bTM=new A.a_(63429,"MaterialIcons",!1)
D.asg=new A.a_(984520,"MaterialIcons",!1)
D.bSs=new A.a_(62776,"MaterialIcons",!1)
D.bW9=new A.ae(D.bSs,26,B.b3,null,null,null)
D.bQS=new A.a_(57648,"MaterialIcons",!1)
D.bWt=new A.ae(D.bQS,14,B.c,null,null,null)
D.bWL=new A.ae(B.HL,17,null,null,null,null)
D.bWR=new A.ae(B.PM,null,B.bQ,null,null,null)
D.bXg=new A.ae(B.a3p,null,null,null,null,null)
D.bXj=new A.ae(B.jb,18,B.kx,null,null,null)
D.a39=new A.a_(62044,"MaterialIcons",!1)
D.bXp=new A.ae(D.a39,null,B.aV,null,null,null)
D.bXw=new A.ae(B.zu,18,B.c,null,null,null)
D.bYd=new A.ae(B.e9,16,null,null,null,null)
D.bYk=new A.ae(D.a39,32,B.aV,null,null,null)
D.bYD=new A.ae(B.aqc,18,B.cX,null,null,null)
D.bZJ=new A.ae(B.HW,22,B.aA,null,null,null)
D.bZW=new A.ae(B.e9,22,B.b3,null,null,null)
D.c_8=new A.ae(I.a3e,22,B.c,null,null,null)
D.c_f=new A.ae(B.v4,52,B.c,null,null,null)
D.c_p=new A.ae(B.HW,30,B.aA,null,null,null)
D.c_J=new A.ae(B.a3t,null,B.c,null,null,null)
D.at_=new A.ae(B.vg,22,B.c,null,null,null)
D.c_S=new A.ae(B.e9,17,null,null,null,null)
D.c0f=new A.ae(B.x0,26,B.cX,null,null,null)
D.c11=new A.ae(B.a3F,16,null,null,null,null)
D.c1O=new A.ae(B.v4,24,B.c,null,null,null)
D.c1T=new A.ae(B.PK,20,B.tD,null,null,null)
D.c1Y=new A.ae(B.HJ,null,B.bQ,null,null,null)
D.c26=new A.ae(B.jb,18,B.c,null,null,null)
D.c2N=new A.ae(B.cB,22,B.aa,null,null,null)
D.c3G=new A.ae(B.ej,16,B.aa,null,null,null)
D.c3S=new A.ae(D.a39,20,B.aV,null,null,null)
D.atq=new A.ae(B.hc,20,null,null,null,null)
D.c4o=new A.ae(B.cB,18,D.kR,null,null,null)
D.c4G=new A.ae(B.zE,28,B.c,null,null,null)
D.c4S=new A.ae(B.PA,null,B.fi,null,null,null)
D.c5c=new A.ae(B.zE,24,B.c,null,null,null)
D.c5E=new A.ae(B.v4,null,B.aV,null,null,null)
D.c5F=new A.ae(B.js,20,B.cX,null,null,null)
D.c5Z=new A.ae(B.HL,16,null,null,null,null)
D.c7x=new A.e7(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.k6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eN,!0,null,null,null,null)
D.au9=new C.a6U(10,null)
D.c83=new C.a6U(12,null)
D.c84=new C.a6U(14,null)
D.drA=w([B.bv,B.aV,B.fq,B.b3],x.O)
D.c9e=new A.a7(B.ay,B.aC,B.x,D.drA,null,null)
D.bs3=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.byx=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d6L=w([D.bs3,D.byx],x.O)
D.c9q=new A.a7(B.aY,B.b2,B.x,D.d6L,null,null)
D.dlq=w([B.fe,B.fX,B.fq],x.O)
D.c9w=new A.a7(B.ay,B.aC,B.x,D.dlq,null,null)
D.ak9=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bij=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d9_=w([D.ak9,D.bij],x.O)
D.ca7=new A.a7(B.aY,B.b2,B.x,D.d9_,null,null)
D.bma=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aDs=w([D.bma,D.ak9],x.O)
D.car=new A.a7(B.ay,B.aC,B.x,D.aDs,null,null)
D.aiS=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.boW=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dkt=w([D.aiS,D.boW],x.O)
D.cb6=new A.a7(B.a5,B.a9,B.x,D.dkt,null,null)
D.dyS=w([B.bC,B.nw],x.O)
D.cb8=new A.a7(B.aY,B.b2,B.x,D.dyS,null,null)
D.brZ=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dzQ=w([D.brZ,D.kR,D.kR,E.NI],x.O)
D.dCx=w([0,0.07,0.9,1],x.n)
D.cbE=new A.a7(B.a5,B.a9,B.x,D.dzQ,D.dCx,null)
D.cbN=new A.a7(B.ay,B.aC,B.x,B.Tu,null,null)
D.d4r=w([B.aD,D.lG],x.O)
D.cbQ=new A.a7(B.a5,B.a9,B.x,D.d4r,null,null)
D.dyp=w([B.b3,B.aV,B.bQ],x.O)
D.ccT=new A.a7(B.ay,B.aC,B.x,D.dyp,null,null)
D.che=w([10,20,30],x.t)
D.crc=w([-1,-0.4,0.3,1],x.n)
D.cyI=w([B.bv,B.b3,B.fe],x.O)
D.cyQ=w([B.bi,B.aD,B.kw],x.O)
D.cyS=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.czA=w([30,140,262,360],x.n)
D.bqf=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cF8=w([D.bqf,B.ajJ],x.O)
D.eu8=new A.r(1,2)
D.fmO=new A.d6(B.b5,D.eu8,3)
D.aAj=w([D.fmO],x.F)
D.cME=w([B.h8,B.cj,B.fB],x.O)
D.cPq=w([B.bP,B.bz,B.bs],x.O)
D.bNp=new C.uS("classic","Classic leather","Gold-edged brown leather",D.aDs,B.kx,B.kx,"\u2766",B.K,!0,!1,!1,!1)
D.bho=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bxc=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.dce=w([D.bho,D.bxc],x.O)
D.ajM=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bNk=new C.uS("ornate","Ornate gold","Double gold border and flourishes",D.dce,D.ajM,D.ajM,"\u2726",B.K,!0,!0,!0,!1)
D.blH=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bsO=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d3h=w([D.blH,D.bsO],x.O)
D.bNj=new C.uS("parchment","Parchment","Old paper with dark ink",D.d3h,D.GD,B.j6,"\u2767",B.K,!0,!1,!1,!0)
D.agX=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bvl=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dwx=w([D.agX,D.bvl],x.O)
D.bpI=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.buy=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bNm=new C.uS("minimal","Clean paper","Plain and elegant, like a printed book",D.dwx,D.bpI,D.buy,"",B.K,!0,!0,!1,!0)
D.bNo=new C.uS("midnight","Midnight","Deep blue with silver stars",B.aDM,B.cA,B.cf,"\u2727",B.K,!0,!0,!1,!1)
D.bNi=new C.uS("emerald","Emerald library","Green cloth, title on the left",L.aAJ,B.kx,B.fZ,"\u25c6",B.b6,!0,!1,!1,!1)
D.bvR=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.duv=w([B.eq,D.bvR],x.O)
D.br5=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bsm=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bNn=new C.uS("rose","Rose vintage","Burgundy with rose-gold lettering",D.duv,D.br5,D.bsm,"\u2740",B.K,!0,!1,!0,!1)
D.dzq=w([B.ct,B.mX],x.O)
D.bNl=new C.uS("modern","Modern","Dark, bold, left-aligned",D.dzq,B.aH,B.c,"",B.b6,!1,!0,!1,!1)
D.a5I=w([D.bNp,D.bNk,D.bNj,D.bNm,D.bNo,D.bNi,D.bNn,D.bNl],A.aF("U<uS>"))
D.cSr=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dzd=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bNA=new C.ls('What does "Ubuntu" mean?',D.dzd,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d58=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bND=new C.ls("In Swahili, what do we call a grandmother?",D.d58,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d5_=w(["Babu","Mama","Baba","Dada"],x.s)
D.bNy=new C.ls("In Swahili, what do we call a grandfather?",D.d5_,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d6l=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bNC=new C.ls("What is a sister called in Swahili?",D.d6l,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.dbE=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bNz=new C.ls("What is a brother called in Swahili?",D.dbE,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d4Z=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bNK=new C.ls("Which word means father in Swahili?",D.d4Z,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dAr=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bNJ=new C.ls('"Umoja ni nguvu" means...',D.dAr,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dxg=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bNL=new C.ls('"Haba na haba hujaza kibaba" teaches us...',D.dxg,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d98=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bNI=new C.ls('The African saying "It takes a village to raise a child" means...',D.d98,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dAL=w(["The elders","The market","The river","The drum"],x.s)
D.bNE=new C.ls("Who is the traditional keeper of the family stories?",D.dAL,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cWI=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bNB=new C.ls("Why do families sit round the fire at night?",D.cWI,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dzs=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bNG=new C.ls('What does "Harambee" mean?',D.dzs,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.dez=w(["An elder","A baby","A market","A cow"],x.s)
D.bNF=new C.ls('"Mzee" is a respectful word for...',D.dez,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dul=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bNH=new C.ls('What does "Shikamoo" show?',D.dul,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aAE=w([D.bNA,D.bND,D.bNy,D.bNC,D.bNz,D.bNK,D.bNJ,D.bNL,D.bNI,D.bNE,D.bNB,D.bNG,D.bNF,D.bNH],x.J)
D.d08=w([90,360],x.n)
D.d2P=w([B.bQ,B.bp],x.O)
D.brM=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d3t=w([D.agX,D.brM],x.O)
D.d4a=w([-1,-0.3,0.4,1],x.n)
D.d54=w([0,0.45,0.72,0.92,1],x.n)
D.blD=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d5n=w([D.blD,B.bA],x.O)
D.bjj=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.aly=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d5Z=w([B.dA,D.bjj,D.aly],x.O)
D.d71=w([B.ba,B.jl,B.pi],x.O)
D.bmc=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bup=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bj_=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d76=w([D.bmc,D.bup,D.bj_],x.O)
D.d7r=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d7C=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hGA=new C.aek(78,424,48,44,56)
D.hGy=new C.aek(214,396,34,34,42)
D.hGz=new C.aek(442,452,56,50,64)
D.aBD=w([D.hGA,D.hGy,D.hGz],A.aF("U<aek>"))
D.d8b=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bic=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bo4=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dCt=w([D.aiS,D.bic,D.bo4],x.O)
D.bNq=new C.uT("leather","Leather",D.dCt,"vintage")
D.dfC=w([B.dh,B.Gs,B.Zy],x.O)
D.bNx=new C.uT("midnight","Midnight",D.dfC,"starry")
D.d72=w([B.ep,B.ec,B.ll],x.O)
D.bNw=new C.uT("forest","Forest",D.d72,"story")
D.dEA=w([B.er,B.eq,B.kz],x.O)
D.bNt=new C.uT("burgundy","Burgundy",D.dEA,"royal")
D.cOZ=w([B.aD,B.mS,B.nn],x.O)
D.bNu=new C.uT("royal","Royal",D.cOZ,"royal")
D.d9F=w([B.bz,B.ct,B.mX],x.O)
D.bNr=new C.uT("charcoal","Charcoal",D.d9F,"geo")
D.dCC=w([B.c9,B.dS,B.yx],x.O)
D.bNv=new C.uT("sunset","Sunset",D.dCC,"sunset")
D.dDo=w([B.jl,B.yA,B.ZC],x.O)
D.bNs=new C.uT("ocean","Ocean",D.dDo,"band")
D.A7=w([D.bNq,D.bNx,D.bNw,D.bNt,D.bNu,D.bNr,D.bNv,D.bNs],A.aF("U<uT>"))
D.dac=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.daU=w([B.an,B.aL,B.a_],x.O)
D.dcj=w([B.eq,B.ec,B.dh,B.iM,B.yC,B.cX,B.k1,B.cQ,B.d6],x.O)
D.dck=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fmP=new A.d6(B.dC,B.dM,8)
D.dcv=w([D.fmP],x.F)
D.ddG=w([B.c4,B.dS,B.jX],x.O)
D.bka=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bon=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bsJ=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.ddY=w([D.bka,B.aki,D.bon,D.bsJ,D.aly],x.O)
D.dee=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.dep=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bhA=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bnI=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.deS=w([D.bhA,D.ail,D.bnI],x.O)
D.dfx=w([B.c4,B.hL],x.O)
D.dfD=w([B.np,B.id,B.ah8,B.cV],x.O)
D.dhg=w([B.cV,B.np,B.id,D.lH,B.cV],x.O)
D.dhU=w([B.aQ,B.yy,B.yo],x.O)
D.aCF=w(["True","False"],x.s)
D.eRt=new A.y(-0.65,0.6)
D.f3d=new A.y(-0.2,0.95)
D.f4k=new A.y(0.25,0.95)
D.eUY=new A.y(0.7,0.6)
D.f4U=new A.y(1,0.1)
D.diG=w([A0.Vi,D.eRt,D.f3d,D.f4k,D.eUY,D.f4U],x.G)
D.bqz=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bx4=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bla=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.diM=w([D.bqz,D.bx4,D.bla],x.O)
D.diR=w([B.bL,B.bZ,B.dy,B.aQ],x.O)
D.djn=w([B.hO,B.c9,B.uu],x.O)
D.djM=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.djX=w([B.fe,B.cX],x.O)
D.bs7=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dko=w([D.bs7,D.agV],x.O)
D.dkA=w([B.cP,B.fL,B.h_],x.O)
D.dkM=w([B.aH,B.bp,B.dh],x.O)
D.dln=w([B.ew,B.dq,B.ec],x.O)
D.dlH=w([B.dY,B.dh,B.Gs],x.O)
D.dlL=w([B.bt,B.mP,B.d6],x.O)
D.dm1=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.brk=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bpq=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dmn=w([D.brk,D.aih,D.bpq],x.O)
D.dnc=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dof=w([1,0,7,6,3,2],x.t)
D.a6G=w(["leather","linen","plain","stars","rays"],x.s)
D.dor=w([0.5,2,3.6],x.n)
D.dp_=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bVs=new A.a_(983781,"MaterialIcons",!1)
D.aD8=w([B.PM,B.hF,B.kD,B.i1,B.aso,B.I7,B.qR,D.bVs,B.as1,B.Dp,B.qU,B.mk],A.aF("U<a_>"))
D.a6K=w(["double","single","corners","none"],x.s)
D.bNf=new C.zC("Little Seed","\ud83c\udf31",0)
D.bNh=new C.zC("Young Listener","\ud83d\udc42",40)
D.bNg=new C.zC("Storyteller","\ud83e\ude98",120)
D.bNe=new C.zC("Village Pride","\ud83c\udfe1",300)
D.bNc=new C.zC("Keeper of Roots","\ud83c\udf33",700)
D.bNd=new C.zC("Elder of the Fire","\ud83d\udd25",1500)
D.aDa=w([D.bNf,D.bNh,D.bNg,D.bNe,D.bNc,D.bNd],A.aF("U<zC>"))
D.dqa=w([B.cW,B.bh,B.cQ],x.O)
D.dqq=w([],x.C)
D.E_=w([],x.u)
D.aNk=new A.r(225,528)
D.eT9=new A.y(D.aNk,1)
D.euU=new A.r(350,548)
D.eZq=new A.y(D.euU,0.95)
D.aNe=new A.r(158,656)
D.eZj=new A.y(D.aNe,1.12)
D.evH=new A.r(92,544)
D.eOI=new A.y(D.evH,0.93)
D.euX=new A.r(398,614)
D.eVk=new A.y(D.euX,1.04)
D.euL=new A.r(318,662)
D.eK2=new A.y(D.euL,1.1)
D.a6S=w([D.eT9,D.eZq,D.eZj,D.eOI,D.eVk,D.eK2],A.aF("U<+(r,G)>"))
D.dss=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dsX=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.du1=w([B.cV,B.np,B.id,D.lH,B.cV,B.id],x.O)
D.dvs=w([B.at,B.fL,B.iM],x.O)
D.dw7=w([-70,58],x.n)
D.dw9=w([-70,-30,20],x.n)
D.dxd=w([B.bt,B.mP,B.a_H],x.O)
D.dxv=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dTF=new C.lR("construction","Construction","Jobsite & builds",B.qT)
D.dTM=new C.lR("house","Home Build","Houses & rooms",B.v6)
D.dTC=new C.lR("grocery","Grocery","Store & pantry",B.a4d)
D.dTB=new C.lR("calculator","Calculations","Math & estimates",B.PS)
D.dTK=new C.lR("lumber","Materials","Lumber & supplies",B.I4)
D.dTy=new C.lR("kitchen","Kitchen","Remodel & meals",N.Qb)
D.bVq=new A.a_(983756,"MaterialIcons",!1)
D.dTD=new C.lR("landscape","Landscaping","Yard & garden",D.bVq)
D.dTx=new C.lR("plumbing","Plumbing","Pipes & water",B.pF)
D.dTN=new C.lR("electrical","Electrical","Wiring & power",B.hq)
D.dTv=new C.lR("store","Retail Shop","Daily business",B.kg)
D.dTw=new C.lR("paint_remodel","Paint & Remodel","Colors & walls",N.Q7)
D.bUN=new A.a_(983311,"MaterialIcons",!1)
D.dTJ=new C.lR("roofing","Roofing","Roofs & exteriors",D.bUN)
D.bVB=new A.a_(983986,"MaterialIcons",!1)
D.dTu=new C.lR("warehouse","Warehouse","Storage & stock",D.bVB)
D.dTH=new C.lR("vehicles","Vehicles","Fleet & transport",B.Dl)
D.bSu=new A.a_(62785,"MaterialIcons",!1)
D.dTA=new C.lR("farm","Farm","Crops & livestock",D.bSu)
D.dTz=new C.lR("restaurant","Restaurant","Food & catering",B.ve)
D.dTG=new C.lR("tools","Tools","Workshop gear",B.Dh)
D.dTL=new C.lR("wallet","Cash & Wallet","Quick spending",B.js)
D.dTI=new C.lR("concrete","Concrete","Foundation work",B.ar8)
D.dTE=new C.lR("blueprint","Blueprint","Plans & design",B.aqG)
D.a7g=w([D.dTF,D.dTM,D.dTC,D.dTB,D.dTK,D.dTy,D.dTD,D.dTx,D.dTN,D.dTv,D.dTw,D.dTJ,D.dTu,D.dTH,D.dTA,D.dTz,D.dTG,D.dTL,D.dTI,D.dTE],A.aF("U<lR>"))
D.dy3=w([B.bu,B.bh],x.O)
D.dyT=w([B.ix,B.oj,B.dX],x.O)
D.aj5=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.ak4=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bpM=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bh3=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aEj=w([D.aj5,D.ak4,D.bpM,D.bh3],x.O)
D.dA6=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a7q=w(["top","middle","bottom"],x.s)
D.dBD=w([B.cs,B.bp,B.dh],x.O)
D.aED=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.baE=new A.ab(0,B.G,B.b5,B.J,14)
D.aEH=w([D.baE],x.V)
D.boC=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dCm=w([D.ahA,D.a_G,D.boC],x.O)
D.dCn=w([B.be,B.dq,B.ec],x.O)
D.euu=new A.r(24,-8)
D.evc=new A.r(48,0)
D.euq=new A.r(24,6)
D.dE6=w([B.J,D.euu,D.evc,D.euq],x.g)
D.dEw=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.eqX={top:0,middle:1,bottom:2}
D.dHO=new A.bq(D.eqX,["Top","Middle","Bottom"],x.r)
D.eqw={double:0,single:1,corners:2,none:3}
D.dHU=new A.bq(D.eqw,["Double line","One line","Corners","None"],x.r)
D.erL={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dJz=new A.bq(D.erL,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dJL=new A.bq(B.i3,[],A.aF("bq<H,+(q,q)>"))
D.eqO={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Ef=new A.bq(D.eqO,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.aF("bq<q,H>"))
D.dO3=new A.O0(32,null)
D.dO4=new A.O0(40,null)
D.dO5=new A.O0(46,null)
D.aMN=new C.auE(null)
D.etl=new A.r(0,40)
D.etm=new A.r(0,412)
D.etp=new A.r(0,900)
D.ety=new A.r(0,-34)
D.etz=new A.r(0,-46)
D.etB=new A.r(0,-74)
D.etE=new A.r(100,300)
D.etF=new A.r(10,14)
D.etI=new A.r(10,-10)
D.etN=new A.r(10,-46)
D.etO=new A.r(10,-58)
D.etP=new A.r(116,442)
D.etR=new A.r(11,-1)
D.etS=new A.r(11,-10)
D.etT=new A.r(11,-21)
D.aN9=new A.r(11,-60)
D.eu_=new A.r(14,-2)
D.eu0=new A.r(150,520)
D.a9B=new A.r(150,592)
D.eu3=new A.r(15,-15)
D.eu4=new A.r(16,-1)
D.eu7=new A.r(190,444)
D.eua=new A.r(1,5)
D.eui=new A.r(21,-78)
D.euj=new A.r(222,615)
D.K1=new A.r(225,300)
D.a9D=new A.r(225,574)
D.eut=new A.r(24,-52)
D.euv=new A.r(250,210)
D.euG=new A.r(2,-56)
D.aNo=new A.r(300,0)
D.euH=new A.r(300,440)
D.euK=new A.r(318,476)
D.euN=new A.r(324,144)
D.a9G=new A.r(332,150)
D.euP=new A.r(335,585)
D.euQ=new A.r(338,140)
D.euR=new A.r(340,158)
D.euT=new A.r(34,-60)
D.EH=new A.r(36,-24)
D.euV=new A.r(372,470)
D.euW=new A.r(390,455)
D.ev4=new A.r(42,468)
D.ev5=new A.r(431,510)
D.ev6=new A.r(431,520)
D.ev7=new A.r(45,-92)
D.ev8=new A.r(46,20)
D.ev9=new A.r(46,-92)
D.eva=new A.r(46,-94)
D.evb=new A.r(47,-4)
D.evd=new A.r(48,-4)
D.evl=new A.r(4,-26)
D.evt=new A.r(60,455)
D.evC=new A.r(8,14)
D.evG=new A.r(8,-76)
D.evI=new A.r(95,575)
D.evJ=new A.r(98,-24)
D.evL=new A.r(9,-2)
D.evM=new A.r(9,-58)
D.aNx=new A.r(9,-79)
D.evN=new A.r(9,-9)
D.ewp=new A.r(16.5,8)
D.ewr=new A.r(3.2,0)
D.ews=new A.r(-16.5,8)
D.ewz=new A.r(16.5,2)
D.ewC=new A.r(-3.2,0)
D.ewK=new A.r(9.5,6)
D.ewN=new A.r(-10,14)
D.ewO=new A.r(-10,-12)
D.ewP=new A.r(-10,-58)
D.ewR=new A.r(-11,-10)
D.ewT=new A.r(-11,-60)
D.ewU=new A.r(-12,-14)
D.ewV=new A.r(-12,-16)
D.ex_=new A.r(-14,-2)
D.ex2=new A.r(-15,-15)
D.ex3=new A.r(-15,-3)
D.ex5=new A.r(-16,-1)
D.exl=new A.r(-24,-52)
D.exu=new A.r(-2,-34)
D.exv=new A.r(-2,-38)
D.exx=new A.r(-30,-100)
D.a9I=new A.r(-36,-24)
D.exI=new A.r(-4,-26)
D.exK=new A.r(-4,-6)
D.exT=new A.r(-8,-3)
D.exU=new A.r(-8,-48)
D.exX=new A.r(-9,-2)
D.exZ=new A.r(-9,-58)
D.ey_=new A.r(-9,-79)
D.ey0=new A.r(-9,-9)
D.ey2=new A.r(-9.5,6)
D.eyf=new A.r(-16.5,2)
D.fXo=new A.C("Write a new book",null,B.hi,null,B.K,null,null,null,null,null,null,null)
D.eyP=new A.D(B.kX,D.fXo,null)
D.hb9=new A.C("Tap to go on",null,B.vS,null,null,null,null,null,null,null,null,null)
D.eza=new A.D(B.ln,D.hb9,null)
D.asy=new A.ae(B.i0,18,B.c,null,null,null)
D.fQo=new A.C("Add",null,B.kJ,null,null,null,null,null,null,null,null,null)
D.dj4=w([D.asy,B.rg,D.fQo],x.p)
D.fjT=new A.c8(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.dj4,null)
D.ezd=new A.D(B.nH,D.fjT,null)
D.eze=new A.D(B.amH,R.YP,null)
D.fJS=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTB=new A.C("New Project",null,D.fJS,null,null,null,null,null,null,null,null,null)
D.dnA=w([D.asy,B.ae,D.fTB],x.p)
D.fjW=new A.c8(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.dnA,null)
D.ezs=new A.D(B.hR,D.fjW,null)
D.fW7=new A.C("Choose your header",null,B.u1,null,null,null,null,null,null,null,null,null)
D.ezN=new A.D(B.i_,D.fW7,null)
D.bgh=new A.fm(2.2,null,null,null,null,B.cX,null,null,null,null)
D.fpI=new A.a5(22,22,D.bgh,null)
D.ben=new A.cl(B.A,null,null,D.fpI,null)
D.ezS=new A.D(B.a12,D.ben,null)
D.bFU=new A.P(14,2,14,6)
D.h9g=new A.C("The top of your book. Tap a design to see it.",null,B.u2,null,null,null,null,null,null,null,null,null)
D.ezT=new A.D(D.bFU,D.h9g,null)
D.fVh=new A.C("\ud83c\udfc6 A new record!",null,B.h6,null,null,null,null,null,null,null,null,null)
D.ezV=new A.D(B.ln,D.fVh,null)
D.eBt=new A.jf(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eBw=new A.jf(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aO9=new A.jf(1,0.9607843137254902,0.48627450980392156,0)
D.K9=new A.jf(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.AJ=new A.jf(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eBC=new A.jf(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hIC=new C.bkp(null)
D.bAH=new A.mA(D.hIC,null,B.az,null,null)
D.aRN=new A.cK(0,0,0,0,null,null,D.bAH,null)
D.fQq=new A.C("\ud83c\udfc5",null,B.ac_,null,null,null,null,null,null,null,null,null)
D.eG1=new A.cK(null,0,-34,null,null,null,D.fQq,null)
D.eOm=new A.y("E","Sit by the fire again")
D.eTY=new A.y("C","Good Learner")
D.eXo=new A.y("D","Still Growing")
D.f1_=new A.y(-42,42)
D.f2m=new A.y("B","Faithful Listener")
D.f4m=new A.y("A","Keeper of the Family")
D.f7v=new A.b4(-17,0.7,0)
D.f83=new A.b4(-8,0.95,1.3)
D.f97=new A.b4(18,0.65,5.2)
D.f99=new A.b4(0,1.15,2.6)
D.f9u=new A.b4(9,0.9,3.9)
D.fbp=new A.b7([0,0,1,1])
D.aTj=new A.a3(0,0,520,160)
D.fgW=new A.a3(10,612,440,618)
D.fgX=new A.a3(10,612,440,628)
D.fh_=new A.a3(14,-64,34,-12)
D.fh2=new A.a3(300,336,350,348)
D.aaC=new A.a3(30,96,420,346)
D.fh3=new A.a3(30,-9,46,1)
D.fh4=new A.a3(4,2,11,14)
D.fh6=new A.a3(-8,-12.5,8,-7)
D.fh7=new A.a3(-16.5,-21,16.5,1)
D.fh8=new A.a3(60,342,88,348)
D.Vj=new A.a3(66,-66,94,-36)
D.fh9=new A.a3(6,8,10,14)
D.fhc=new A.a3(95,343,115,348)
D.fhd=new A.a3(-6.5,-74,6.5,-58)
D.fhj=new A.a3(-100,-74,100,-12)
D.fhk=new A.a3(-10,8,-6,14)
D.fhl=new A.a3(-11,2,-4,14)
D.fhm=new A.a3(-11,-70,11,-56)
D.fht=new A.a3(-13,-24,13,-4)
D.fhA=new A.a3(-15,-21,15,0)
D.fhD=new A.a3(-16,-21,16,1)
D.fhE=new A.a3(-16,-21,16,2)
D.fhH=new A.a3(-16,-26,16,-6)
D.fhP=new A.a3(-230,-26,230,26)
D.fid=new A.a3(-38,-26,12,-6)
D.fih=new A.a3(-3,-70,3,-63)
D.fii=new A.a3(-44,-22,44,0)
D.fik=new A.a3(-46,-9,-30,1)
D.aTn=new A.a3(-80,-190,80,20)
D.fir=new A.a3(-8,-26,40,-6)
D.fis=new A.a3(-98,-80,92,-75)
D.fit=new A.a3(-9,-15,9,-9)
D.h8O=new A.C("Let the AI write it from your tree",null,B.iI,null,B.K,null,null,null,null,null,null,null)
D.bOk=new A.df(1,B.cl,D.h8O,null)
D.dfw=w([B.a4H,B.ae,D.bOk],x.p)
D.fjx=new A.c8(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.dfw,null)
D.fQ4=new A.C("Save member",null,B.ce,null,null,null,null,null,null,null,null,null)
D.dvS=w([D.atq,B.ae,D.fQ4],x.p)
D.fjH=new A.c8(B.aM,B.b9,B.i,B.l,null,B.p,null,0,D.dvS,null)
D.c_1=new A.ae(B.ij,14,B.b3,null,null,null)
D.fDo=new A.F(!0,B.b3,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fU1=new A.C("Cashier",null,D.fDo,null,null,null,null,null,null,null,null,null)
D.do6=w([D.c_1,B.bn,D.fU1],x.p)
D.fjL=new A.c8(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.do6,null)
D.fQ5=new A.C("Transfer & settings",null,B.dl,null,null,null,null,null,null,null,null,null)
D.bM0=new A.bz(1,B.bd,D.fQ5,null)
D.d6u=w([D.at_,B.as,D.bM0],x.p)
D.fjM=new A.c8(B.aM,B.e,B.i,B.l,null,B.p,null,0,D.d6u,null)
D.fom=new A.au(16,40)
D.fos=new A.au(22,64)
D.foz=new A.au(280,88)
D.fpn=new A.a5(30,null,null,null)
D.fPa=new A.C("The teacher is writing\u2026",null,B.B4,null,null,null,null,null,null,null,null,null)
D.bft=new A.cl(B.A,null,null,D.fPa,null)
D.hCw=new A.bl("w",x.W)
D.fpM=new A.a5(null,56,D.bft,D.hCw)
D.fqz=new A.hN(5,8,8,1,null)
D.fqH=new A.hN(2,12,12,1.05,null)
D.fTH=new A.C("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.frr=new A.b0(D.fTH,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fTX=new A.C("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aVH=new A.b0(D.fTX,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h1r=new A.C("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.frV=new A.b0(D.h1r,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hcb=new A.C("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fs_=new A.b0(D.hcb,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fW5=new A.C("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fs6=new A.b0(D.fW5,null,null,null,null,null,null,null,null,null,null,null,null,B.h2,!1,null,null,null,B.t,null)
D.h9t=new A.C("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aVM=new A.b0(D.h9t,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fW3=new A.C("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fsw=new A.b0(D.fW3,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fQH=new A.C("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fsy=new A.b0(D.fQH,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fZR=new A.C("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fsE=new A.b0(D.fZR,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hcW=new A.C("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.ftk=new A.b0(D.hcW,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h7I=new A.C("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.ftK=new A.b0(D.h7I,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hcf=new A.C("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.ftN=new A.b0(D.hcf,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h33=new A.C("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ftP=new A.b0(D.h33,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fY0=new A.C("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.ftQ=new A.b0(D.fY0,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fY1=new A.C("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fuR=new A.b0(D.fY1,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fTJ=new A.C("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fv8=new A.b0(D.fTJ,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fVJ=new A.C("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fvs=new A.b0(D.fVJ,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h2y=new A.C("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fvJ=new A.b0(D.h2y,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fYQ=new A.C("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fvK=new A.b0(D.fYQ,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fIy=new A.F(!0,B.bE,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxi=new A.ev("\u2665",null,null,B.cN,null,null,null,null,null,null,D.fIy)
D.fFI=new A.F(!0,B.aS,null,null,null,null,28,B.O,B.cK,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxy=new A.ev("Today: how well do you know the family?",null,null,B.cN,null,null,null,null,null,null,D.fFI)
D.fxP=new A.F(!0,B.qf,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz0=new A.F(!0,D.kR,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzn=new A.F(!0,D.kR,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzr=new A.F(!0,B.cV,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzA=new A.F(!0,D.fC,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzL=new A.F(!0,D.fC,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA4=new A.t6(!0,B.tP,null,null,null,null,B.dF,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAk=new A.F(!0,B.cV,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAn=new A.F(!0,D.kR,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAo=new A.F(!0,B.cV,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAt=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAw=new A.F(!0,B.cV,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB1=new A.F(!0,B.b3,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB2=new A.F(!0,B.aa,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB4=new A.F(!0,B.aS,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBv=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aX0=new A.F(!0,B.aR,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aX1=new A.F(!0,D.lG,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBV=new A.F(!0,B.cV,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ac4=new A.t6(!0,B.UQ,null,null,null,null,B.dF,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Wc=new A.F(!0,B.cV,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC4=new A.F(!0,B.a_,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC9=new A.F(!0,D.fC,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCy=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDJ=new A.F(!0,D.fC,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXb=new A.F(!0,D.fC,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fE2=new A.F(!0,B.aa,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEe=new A.F(!0,D.fC,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEg=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEm=new A.F(!0,B.j6,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXf=new A.F(!0,D.fC,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFi=new A.F(!0,D.fC,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFB=new A.F(!0,D.fC,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFD=new A.F(!0,B.a_,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFF=new A.F(!0,B.cV,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fG2=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,Q.J1,null,null,null)
D.aXt=new A.F(!0,D.fC,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGq=new A.F(!0,B.a_,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGM=new A.F(!0,B.fi,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH9=new A.F(!0,B.bQ,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHe=new A.F(!0,B.bC,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHq=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHt=new A.F(!0,D.fC,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHB=new A.F(!0,D.GD,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHN=new A.F(!0,B.b3,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIb=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIi=new A.F(!0,B.aa,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.DS,null,null,null)
D.fIJ=new A.F(!0,B.cV,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIR=new A.F(!0,B.cX,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ3=new A.F(!0,D.lH,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXQ=new A.F(!0,D.fC,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Lk=new A.F(!0,B.cV,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXS=new A.F(!0,B.cV,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.DS,null,null,null)
D.fJo=new A.F(!0,B.bQ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJs=new A.F(!0,B.np,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJQ=new A.F(!0,B.b3,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK7=new A.F(!0,D.fC,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKv=new A.F(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKU=new A.F(!0,D.fC,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLp=new A.F(!0,D.fC,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLu=new A.F(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLE=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acA=new A.F(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acD=new A.F(!0,D.lG,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNo=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNI=new A.F(!0,B.aS,null,null,null,null,27,B.O,B.cK,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNP=new A.F(!0,B.j6,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNX=new A.F(!0,B.j6,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOq=new A.C("Time:",null,B.hu,null,null,null,null,null,null,null,null,null)
D.fOM=new A.C("\ud83c\udfae",null,B.acq,null,null,null,null,null,null,null,null,null)
D.fON=new A.C("Themes",null,B.pX,null,null,null,null,null,null,null,null,null)
D.fPi=new A.C("\ud83c\udfb2",null,B.xL,null,null,null,null,null,null,null,null,null)
D.fPm=new A.C("Delete this game?",null,B.iI,null,null,null,null,null,null,null,null,null)
D.fPt=new A.C("Add Item",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fDX=new A.F(!0,B.a_,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPU=new A.C("Debt receipt",null,D.fDX,null,B.K,null,null,null,null,null,null,null)
D.aY5=new A.F(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQc=new A.C("Person who owes",null,D.aY5,null,null,null,null,null,null,null,null,null)
D.fRa=new A.C("Notes",null,B.ace,null,null,null,null,null,null,null,null,null)
D.fRB=new A.C("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fCQ=new A.F(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRD=new A.C("Share",null,D.fCQ,null,null,null,null,null,null,null,null,null)
D.fSE=new A.C("Move your family trees",null,E.acx,null,null,null,null,null,null,null,null,null)
D.fTi=new A.C("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fTW=new A.C("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fUj=new A.C("SAVE",null,D.Lk,null,null,null,null,null,null,null,null,null)
D.fUW=new A.C("The round button is the right answer.",null,B.B8,null,null,null,null,null,null,null,null,null)
D.fVg=new A.C("Remove this book?",null,B.h6,null,null,null,null,null,null,null,null,null)
D.fJN=new A.F(!0,B.cV,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.DS,null,null,null)
D.fVO=new A.C("Fireside Stories",null,D.fJN,null,null,null,null,null,null,null,null,null)
D.aYz=new A.C("Download",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fWu=new A.C("What should the AI do?",null,B.dl,null,null,null,null,null,null,null,null,null)
D.fCt=new A.F(!0,D.lG,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWJ=new A.C("REPORT CARD",null,D.fCt,null,null,null,null,null,null,null,null,null)
D.fXv=new A.C("Calabash Catch",null,B.Wz,null,null,null,null,null,null,null,null,null)
D.fXX=new A.C("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fYn=new A.C("\ud83c\udfe1",null,B.Fc,null,null,null,null,null,null,null,null,null)
D.fZ4=new A.C("Ribbon bookmark",null,B.jC,null,null,null,null,null,null,null,null,null)
D.fLo=new A.F(!0,B.b3,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZA=new A.C("NGMY.ORG",null,D.fLo,null,B.K,null,null,null,null,null,null,null)
D.h_T=new A.C("Scan family tree QR",null,B.cG,null,null,null,null,null,null,null,null,null)
D.fHu=new A.F(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0G=new A.C("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fHu,null,B.K,null,null,null,null,null,null,null)
D.h1V=new A.C("Delete",null,B.W6,null,null,null,null,null,null,null,null,null)
D.h1W=new A.C("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.h23=new A.C("Thumbnail",null,B.pX,null,null,null,null,null,null,null,null,null)
D.h2D=new A.C("Save the cover",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h2I=new A.C("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.Bc,null,B.K,null,null,null,null,null,null,null)
D.h34=new A.C("Your photos",null,B.pX,null,null,null,null,null,null,null,null,null)
D.h3k=new A.C("Create Project",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h3H=new A.C("\u2b50 stars",null,B.Wk,null,null,null,null,null,null,null,null,null)
D.h3V=new A.C("Design your cover",null,B.u1,null,null,null,null,null,null,null,null,null)
D.h40=new A.C("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.h43=new A.C("PICTURE",null,F.vV,null,null,null,null,null,null,null,null,null)
D.h45=new A.C("\ud83c\udfaf",null,D.Wy,null,null,null,null,null,null,null,null,null)
D.h4s=new A.C("Paid",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h4u=new A.C("You can undo it right after.",null,B.B8,null,null,null,null,null,null,null,null,null)
D.h52=new A.C("Print",null,B.vT,null,null,null,null,null,null,null,null,null)
D.h5s=new A.C("Amount owed",null,D.aY5,null,null,null,null,null,null,null,null,null)
D.h5H=new A.C("Got it",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h6i=new A.C("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.h6l=new A.C("Add to budget",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h6L=new A.C("Debtor signature",null,B.ace,null,null,null,null,null,null,null,null,null)
D.h6V=new A.C("Change icon",null,B.acd,null,null,null,null,null,null,null,null,null)
D.h7J=new A.C("MADE BY THE SYSTEM, FROM YOUR TREE",null,B.u4,null,null,null,null,null,null,null,null,null)
D.h8a=new A.C("Family tree QR",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h8g=new A.C("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.Wx,null,null,null,null,null,null,null,null,null)
D.h8E=new A.C("Download",null,B.vT,null,null,null,null,null,null,null,null,null)
D.h8F=new A.C("The person who planted this tree has not made a game yet.",null,B.Ba,null,null,null,null,null,null,null,null,null)
D.h8J=new A.C("Change",null,B.pX,null,null,null,null,null,null,null,null,null)
D.h9z=new A.C("Clear all",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h9C=new A.C("WHAT SHOULD IT CHANGE?",null,F.vV,null,null,null,null,null,null,null,null,null)
D.ha9=new A.C("COLOUR",null,F.vV,null,null,null,null,null,null,null,null,null)
D.hao=new A.C("Do it",null,B.cG,null,null,null,null,null,null,null,null,null)
D.har=new A.C("Create Tree",null,B.ce,null,null,null,null,null,null,null,null,null)
D.haB=new A.C("Give me another clue",null,D.Lk,null,null,null,null,null,null,null,null,null)
D.hbv=new A.C("Create Family Tree",null,B.fa,null,null,null,null,null,null,null,null,null)
D.hbF=new A.C("THE TEACHER EXPLAINS THESE",null,B.u4,null,null,null,null,null,null,null,null,null)
D.fxO=new A.F(!0,B.kx,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hbL=new A.C("Write the first page myself",null,D.fxO,null,null,null,null,null,null,null,null,null)
D.hci=new A.C("Use this header",null,B.cG,null,null,null,null,null,null,null,null,null)
D.hcp=new A.C("Create Project",null,B.aXM,null,null,null,null,null,null,null,null,null)
D.hE_=new C.acZ(1,"header")
D.adF=new C.acZ(2,"projects")
D.hE0=new C.acZ(3,"cashier")
D.adG=new C.acZ(4,"familyTree")
D.hRt=new C.cI0(0,"start")
D.hRu=new C.cI1(0,"start")
D.hEd=new C.ZZ(null)
D.hFe=new C.a_s(null)
D.dJI=new A.bq(B.i3,[],A.aF("bq<q,GJ>"))
D.dqP=w([],x.dE)
D.dqQ=w([],x.M)
D.hFT=new C.bhB(D.dJI,D.dqP,D.dqQ,0,0,null,null)
D.b24=new C.a0i(0,"intro")
D.b25=new C.a0i(1,"countdown")
D.adT=new C.a0i(2,"ask")
D.Xu=new C.a0i(3,"reveal")
D.b26=new C.a0i(4,"end")
D.hIE=new C.te(B.GM,D.lH,B.cV,B.m8,5,!1,!1,!1,0,null)
D.hIF=new C.te(B.GM,B.er,B.cV,B.bO,2,!0,!0,!1,2,B.cV)
D.hIG=new C.te(B.qt,B.cX,B.cV,B.m8,2,!0,!1,!1,2,B.at)
D.hIH=new C.te(B.GM,B.dY,B.cV,B.m8,5,!1,!1,!1,1,null)
D.hII=new C.te(B.a_X,D.ak4,B.cV,B.m8,4,!0,!1,!0,0,null)
D.b29=new C.te(B.a_X,B.dS,B.cV,B.m8,3,!0,!1,!0,2,null)
D.b2a=new C.te(B.rZ,D.lH,B.c,B.m8,0,!1,!1,!0,0,null)
D.b2b=new C.te(B.qt,B.aD,B.cV,B.bO,2,!0,!0,!1,2,B.dS)
D.b2c=new C.te(B.qt,B.np,B.id,B.m8,5,!1,!1,!0,3,null)
D.hIJ=new C.te(B.qt,B.dS,B.cV,B.m8,0,!0,!1,!1,0,B.aD)
D.b2d=new C.te(B.GM,B.er,B.cV,B.bO,1,!1,!0,!1,1,null)
D.b2e=new C.te(B.Gi,B.at,B.aD,B.m8,4,!0,!1,!0,2,null)
D.hIK=new C.te(B.rZ,B.at,B.er,B.m8,3,!0,!1,!1,0,null)
D.hIL=new C.te(B.qt,B.dY,B.cV,B.bO,1,!1,!0,!1,1,null)
D.hIM=new C.te(B.Gi,D.aj5,B.c,B.m8,5,!1,!1,!0,0,null)
D.hJp=new C.a0Q(null)
D.hRC=new C.agn(0,"still")
D.XR=new C.agn(1,"walk")
D.b2F=new C.agn(2,"pound")
D.b2G=new C.agn(3,"drum")
D.hN4=new C.a26(0,"greet")
D.b2H=new C.a26(1,"teach")
D.aec=new C.a26(2,"ask")
D.hN5=new C.a26(3,"feedback")
D.b2I=new C.a26(4,"end")
D.XX=new C.a2p(0,"intro")
D.XY=new C.a2p(1,"asking")
D.Bs=new C.a2p(2,"reacting")
D.aeo=new C.a2p(3,"driving")
D.aep=new C.a2p(4,"arrived")
D.aex=new C.aMg(0,"projects")
D.b37=new C.aMg(1,"cashier")
D.hPa=new C.aMg(2,"familyTree")})()};
(a=>{a["s0Ij/7cEV52NUEZ0dIZFY7Jz4zA="]=a.current})($__dart_deferred_initializers__);