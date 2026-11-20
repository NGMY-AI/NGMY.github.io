((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,H,S,E,I,C={
bGR(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bGR=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vX(null,""),$async$bGR)
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
return A.b(A.rk(t,a1,B.i2,"book",B.H7),$async$bGR)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=A.RH(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.M5(l)?y.k:y.y)
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=A.a40(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGR,v)},
ais(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ais=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vX(null,""),$async$ais)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nk(b6)
s=x.S
r=A.cT(c1,0,A.dA(4,"count",s),A.T(c1).c)
q=A.a3M(new A.N(r,new C.fRA(),r.$ti.k("N<ak.E,q>")).aN(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fRz(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.W.av(b7,null)+"\nAllowed values: style one of "+B.d.aN(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ais)
case 6:l=c5
k=A.RH(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.aqd(s,D.dJh,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
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
return A.b(m.$1(f+B.W.av(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ais)
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
p=A.cF(new A.b8(h,s),new C.fRB(),s.k("M.E"),p)
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
return A.b(A.a40(s,b9),$async$ais)
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
return A.i($async$ais,v)},
hKe(d,e,f){return A.cg(null,B.w.j(0.65),!1,null,new C.h0N(e,f),d,null,!0,!0,x.g2)},
aqd:function aqd(d,e,f){this.a=d
this.b=e
this.c=f},
fRA:function fRA(){},
fRz:function fRz(d){this.a=d},
fRB:function fRB(){},
h0N:function h0N(d,e){this.a=d
this.b=e},
bEy(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bEy=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aS(b1,new C.fEC())){u=null
w=1
break}t=B.d.cA(b1,new C.fED())
s=$.R()
r=new A.ph(new A.oO())
q=A.w6(r,D.aTh)
p=A.L()
p.r=B.c.gp(0)
q.aD(D.aTh,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.ab
o.d=B.bG
o.e=B.dQ
n=new C.fEI(t)
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
return A.b(r.nw().vJ(520,160),$async$bEy)
case 4:w=3
return A.b(b3.hk(B.he),$async$bEy)
case 3:b0=b3
u=b0==null?null:J.eQ(B.dF.gaU(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEy,v)},
fPf(d){return C.ioU(d)},
ioU(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fPf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bkq()
n=d.x!=null&&d.zT(null).length===0
if(d.x!=null)t=n?D.AI:D.K9
else t=d.gUX()?D.K9:D.aO7
w=3
return A.b(C.bEy(d.ax),$async$fPf)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aoQ(s)
r=A.a5K(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aO7}else{p.c=C.xo(q,!0)
p.b=n?D.AI:D.K9}r.a4A(A.hby(new C.fPh(p,d,new C.fPi(),t,n,o),null,D.bJi,B.xt))
u=r.jG(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fPf,v)},
fWb(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fWb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fPf(d),$async$fWb)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aB(q,0,40)
u=A.Hz(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fWb,v)},
fEC:function fEC(){},
fED:function fED(){},
fEI:function fEI(d){this.a=d},
fPi:function fPi(){},
fPh:function fPh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fPg:function fPg(){},
h1f(d,e){var w=0,v=A.j(x.H)
var $async$h1f=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,B.w.j(0.55),!0,null,new C.h1j(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$h1f)
case 2:return A.h(null,v)}})
return A.i($async$h1f,v)},
bHj(d,e,f,g){return C.iwE(d,e,f,g)},
iwE(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bHj=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cD.aK(t)}catch(q){r=null}if(r==null||r.length===0){d.K(x.q).f.U(D.fuZ)
w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.h1b(g,r,f),d,null,!0,!0,x.H),$async$bHj)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bHj,v)},
h1k(d,e){var w=0,v=A.j(x.H)
var $async$h1k=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,null,!0,null,new C.h1n(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$h1k)
case 2:return A.h(null,v)}})
return A.i($async$h1k,v)},
b0y:function b0y(d,e){this.c=d
this.a=e},
c9i:function c9i(){},
bdO:function bdO(d,e){this.b=d
this.a=e},
h1j:function h1j(d,e){this.a=d
this.b=e},
h1g:function h1g(d){this.a=d},
h1h:function h1h(d,e,f){this.a=d
this.b=e
this.c=f},
h1i:function h1i(d,e){this.a=d
this.b=e},
h1b:function h1b(d,e,f){this.a=d
this.b=e
this.c=f},
h19:function h19(d){this.a=d},
h1a:function h1a(d,e,f){this.a=d
this.b=e
this.c=f},
h1n:function h1n(d,e){this.a=d
this.b=e},
h1l:function h1l(d){this.a=d},
h1m:function h1m(d,e,f){this.a=d
this.b=e
this.c=f},
fJv(d,e){var w=0,v=A.j(x.y),u,t
var $async$fJv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3w(d),$async$fJv)
case 3:t=g
J.mW(t,new C.fJw(e))
u=A.aj6(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fJv,v)},
fJw:function fJw(d){this.a=d},
aqq:function aqq(d,e,f){this.c=d
this.d=e
this.a=f},
aFg:function aFg(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dSd:function dSd(d,e){this.a=d
this.b=e},
dRZ:function dRZ(d,e){this.a=d
this.b=e},
dS1:function dS1(d,e,f){this.a=d
this.b=e
this.c=f},
dS0:function dS0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dS_:function dS_(d,e){this.a=d
this.b=e},
dS2:function dS2(d,e){this.a=d
this.b=e},
dRX:function dRX(){},
dRY:function dRY(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dRW:function dRW(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dRH:function dRH(d){this.a=d},
dRI:function dRI(d,e,f){this.a=d
this.b=e
this.c=f},
dRJ:function dRJ(d,e){this.a=d
this.b=e},
dRG:function dRG(d){this.a=d},
dRO:function dRO(d,e){this.a=d
this.b=e},
dRF:function dRF(d){this.a=d},
dRP:function dRP(d,e,f){this.a=d
this.b=e
this.c=f},
dRQ:function dRQ(d,e,f){this.a=d
this.b=e
this.c=f},
dRE:function dRE(d,e){this.a=d
this.b=e},
dRR:function dRR(d,e,f){this.a=d
this.b=e
this.c=f},
dRD:function dRD(d,e){this.a=d
this.b=e},
dRS:function dRS(d,e){this.a=d
this.b=e},
dRC:function dRC(d){this.a=d},
dRT:function dRT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRA:function dRA(){},
dRu:function dRu(d){this.a=d},
dRv:function dRv(d){this.a=d},
dRB:function dRB(d,e){this.a=d
this.b=e},
dRU:function dRU(d,e){this.a=d
this.b=e},
dRz:function dRz(d){this.a=d},
dRV:function dRV(d){this.a=d},
dRy:function dRy(){},
dRK:function dRK(d,e){this.a=d
this.b=e},
dRx:function dRx(d){this.a=d},
dRL:function dRL(d,e,f){this.a=d
this.b=e
this.c=f},
dRw:function dRw(d,e){this.a=d
this.b=e},
dRt:function dRt(d,e){this.a=d
this.b=e},
dRM:function dRM(d){this.a=d},
dRN:function dRN(d,e,f){this.a=d
this.b=e
this.c=f},
dSg:function dSg(){},
dSh:function dSh(d,e){this.a=d
this.b=e},
dSe:function dSe(d){this.a=d},
dSf:function dSf(d){this.a=d},
dSa:function dSa(d,e){this.a=d
this.b=e},
dSb:function dSb(d){this.a=d},
dS3:function dS3(d,e,f){this.a=d
this.b=e
this.c=f},
dS4:function dS4(d,e,f){this.a=d
this.b=e
this.c=f},
dS5:function dS5(d,e,f){this.a=d
this.b=e
this.c=f},
dS6:function dS6(d,e,f){this.a=d
this.b=e
this.c=f},
dS7:function dS7(d,e,f){this.a=d
this.b=e
this.c=f},
dS8:function dS8(d,e,f){this.a=d
this.b=e
this.c=f},
dS9:function dS9(d,e,f){this.a=d
this.b=e
this.c=f},
dSi:function dSi(){},
dSj:function dSj(){},
dSk:function dSk(){},
dSl:function dSl(d){this.a=d},
dSc:function dSc(d,e){this.a=d
this.b=e},
hFK(d){return B.d.dM(D.a5H,new C.fKh(d),new C.fKi())},
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
fKh:function fKh(d){this.a=d},
fKi:function fKi(){},
amr:function amr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aXg:function aXg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ue:function Ue(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhq:function bhq(){this.d=$
this.c=this.a=null},
dhU:function dhU(d,e){this.a=d
this.b=e},
dhS:function dhS(d,e){this.a=d
this.b=e},
dhT:function dhT(){},
dhV:function dhV(d,e){this.a=d
this.b=e},
hpL(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bj(J.k(u==null?"":u))
return new C.nt(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LR(d,e){return C.inA(d,e)},
inA(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LR=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$LR)
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
o=A.cF(o,new C.fMP(),o.$ti.k("M.E"),x.B)
n=A.a4(o).k("Y<M.E>")
o=A.B(new A.Y(o,new C.fMQ(),n),n.k("M.E"))
B.d.b0(o,new C.fMR())
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
Bw(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Bw=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$Bw)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b9(f,new C.h_R(),x.a)
r=A.B(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aG("String","ngmy_family_book_v1_"+s+"_"+e,B.W.av(r,null)),$async$Bw)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Bw,v)},
aTo(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aTo=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LR(d,e),$async$aTo)
case 2:u=h
t=J.cE(u)
s=t.bk(u,new C.h8w(f))
if(s===-1)t.ca(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Bw(d,e,u),$async$aTo)
case 3:return A.h(null,v)}})
return A.i($async$aTo,v)},
bF2(d,e,f){var w=0,v=A.j(x.H),u
var $async$bF2=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LR(d,e),$async$bF2)
case 2:u=h
J.mW(u,new C.fJn(f))
w=3
return A.b(C.Bw(d,e,u),$async$bF2)
case 3:return A.h(null,v)}})
return A.i($async$bF2,v)},
bFi(d,e){return C.inz(d,e)},
inz(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bFi=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bFi)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aW(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Pf
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
h=B.d.q(D.a7p,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.q(D.a6J,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.q(D.a6F,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.da4,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.Ix(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Pf
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Pf
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bFi,v)},
SR(d,e,f){return C.iw9(d,e,f)},
iw9(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
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
Sh(d,e){return C.inB(d,e)},
inB(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Sh=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Sh)
case 7:r=g
q=r.rD("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.LR(d,e),$async$Sh)
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
ahM(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ahM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sh(d,e),$async$ahM)
case 3:s=g
r=J.a8(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.I(s,t)
w=5
return A.b(A.az(),$async$ahM)
case 5:w=4
return A.b(g.aG("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ahM)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahM,v)},
a4c(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a4c=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Sh(d,e),$async$a4c)
case 2:s=h
J.fN(s,f)
w=3
return A.b(A.az(),$async$a4c)
case 3:u=h
w=4
return A.b(u.aG("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a4c)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4c)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4c)
case 6:return A.h(null,v)}})
return A.i($async$a4c,v)},
nt:function nt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fMP:function fMP(){},
fMQ:function fMQ(){},
fMR:function fMR(){},
h_R:function h_R(){},
h8w:function h8w(d){this.a=d},
fJn:function fJn(d){this.a=d},
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
bSF:function bSF(d){this.a=d},
iwt(d,e,f,g,h,i,j){return A.a6(d,!1).cf(A.ef(new C.h0r(j,i,f,e,h,g),!0,null,x.H))},
Sd(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Sd=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sh(h,g),$async$Sd)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.K(x.q).f.U(D.aVF)
u=!1
w=1
break}w=4
return A.b(C.hKe(d,f,e),$async$Sd)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ahM(h,g),$async$Sd)
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
h0r:function h0r(d,e,f,g,h,i){var _=this
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
diz:function diz(d){this.a=d},
diy:function diy(d,e){this.a=d
this.b=e},
din:function din(d,e){this.a=d
this.b=e},
dik:function dik(d,e){this.a=d
this.b=e},
dhW:function dhW(d){this.a=d},
dhX:function dhX(d,e){this.a=d
this.b=e},
dio:function dio(d){this.a=d},
di4:function di4(d){this.a=d},
di2:function di2(d){this.a=d},
di3:function di3(d){this.a=d},
di5:function di5(d){this.a=d},
dil:function dil(d){this.a=d},
dim:function dim(){},
di0:function di0(d){this.a=d},
di1:function di1(d,e){this.a=d
this.b=e},
di6:function di6(d){this.a=d},
di7:function di7(d,e){this.a=d
this.b=e},
dix:function dix(d){this.a=d},
diw:function diw(d,e){this.a=d
this.b=e},
div:function div(d){this.a=d},
dih:function dih(d){this.a=d},
dig:function dig(d){this.a=d},
dii:function dii(d){this.a=d},
dhY:function dhY(d,e){this.a=d
this.b=e},
dij:function dij(d,e){this.a=d
this.b=e},
dia:function dia(d){this.a=d},
dib:function dib(d){this.a=d},
di9:function di9(){},
dic:function dic(d){this.a=d},
did:function did(d){this.a=d},
die:function die(d,e){this.a=d
this.b=e},
dif:function dif(d,e,f){this.a=d
this.b=e
this.c=f},
di8:function di8(d,e){this.a=d
this.b=e},
diq:function diq(d){this.a=d},
dip:function dip(){},
dir:function dir(d){this.a=d},
dis:function dis(d){this.a=d},
dit:function dit(d){this.a=d},
diu:function diu(d,e){this.a=d
this.b=e},
dhZ:function dhZ(d){this.a=d},
di_:function di_(d){this.a=d},
a_V:function a_V(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhP:function bhP(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dkl:function dkl(d){this.a=d},
dkm:function dkm(d){this.a=d},
dkk:function dkk(d){this.a=d},
dkn:function dkn(d){this.a=d},
dkj:function dkj(d){this.a=d},
dko:function dko(d){this.a=d},
dki:function dki(d){this.a=d},
dkp:function dkp(d,e){this.a=d
this.b=e},
dkh:function dkh(d,e){this.a=d
this.b=e},
dkq:function dkq(d,e){this.a=d
this.b=e},
a_T:function a_T(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
agd:function agd(d,e,f){this.a=d
this.b=e
this.c=f},
aCh:function aCh(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
diO:function diO(d,e){this.a=d
this.b=e},
diN:function diN(d,e){this.a=d
this.b=e},
diS:function diS(d){this.a=d},
diR:function diR(d,e){this.a=d
this.b=e},
diP:function diP(d){this.a=d},
diQ:function diQ(d){this.a=d},
diT:function diT(d){this.a=d},
diU:function diU(d){this.a=d},
diM:function diM(d,e){this.a=d
this.b=e},
diL:function diL(d,e){this.a=d
this.b=e},
KU:function KU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_7:function a_7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cQU:function cQU(d){this.a=d},
cQV:function cQV(){},
cQW:function cQW(d){this.a=d},
bf0:function bf0(d,e,f){this.b=d
this.c=e
this.a=f},
beS:function beS(d,e){this.b=d
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
beZ:function beZ(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d9G:function d9G(d,e,f){this.a=d
this.b=e
this.c=f},
d9F:function d9F(d,e){this.a=d
this.b=e},
da4:function da4(d){this.a=d},
d9S:function d9S(){},
da5:function da5(d){this.a=d},
d9R:function d9R(){},
da6:function da6(d,e){this.a=d
this.b=e},
d9Q:function d9Q(d,e){this.a=d
this.b=e},
da7:function da7(d,e){this.a=d
this.b=e},
d9P:function d9P(d,e){this.a=d
this.b=e},
da8:function da8(d){this.a=d},
d9O:function d9O(){},
da9:function da9(d,e){this.a=d
this.b=e},
d9N:function d9N(d,e){this.a=d
this.b=e},
daa:function daa(d){this.a=d},
da_:function da_(d,e){this.a=d
this.b=e},
dab:function dab(d){this.a=d},
dac:function dac(d){this.a=d},
dae:function dae(d){this.a=d},
daf:function daf(d){this.a=d},
d9Z:function d9Z(d,e){this.a=d
this.b=e},
dag:function dag(d,e){this.a=d
this.b=e},
aJm:function aJm(d){this.a=d},
bkm:function bkm(d){this.a=d},
bda:function bda(d,e,f,g,h,i,j,k,l){var _=this
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
_.bv$=h
_.a9$=i
_.c=_.a=null},
bSP:function bSP(d){this.a=d},
bSJ:function bSJ(d){this.a=d},
bSI:function bSI(d,e){this.a=d
this.b=e},
bSS:function bSS(d){this.a=d},
bSK:function bSK(d){this.a=d},
bSL:function bSL(d){this.a=d},
bSO:function bSO(d){this.a=d},
bSN:function bSN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSQ:function bSQ(d,e){this.a=d
this.b=e},
bSR:function bSR(){},
bSM:function bSM(d){this.a=d},
bSG:function bSG(d,e){this.a=d
this.b=e},
bSH:function bSH(d){this.a=d},
bpY:function bpY(d,e){this.b=d
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
bEA(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.br(j.save())
j.translate(e.a,e.b)
d.nM(0,a0?-f:f,f)
w=A.bX(B.ht,8,36)
v=B.w.j(0.3)
u=$.R()
t=A.L()
t.r=v.gp(0)
d.c1(w,t)
w=a1===D.XQ
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.exe,new A.r(-4+v,-2),C.iF(q,5))
d.ah(D.euS,new A.r(4-v,-2),C.iF(q,5))}else{t=A.bX(B.K0,14,40)
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
break}if(a1===D.b2D){n=-52+w*14
d.ah(new A.r(10,n-22),new A.r(10,n+44),C.iF(B.Gi,3.4))
d.ah(D.exv,new A.r(9,n),C.iF(q,4))
d.ah(D.evi,new A.r(10,n),C.iF(q,4))}else if(a1===D.b2E){d.ah(D.ewl,new A.r(-8,-26-Math.max(0,w)*6),C.iF(q,4))
d.ah(D.etk,new A.r(8,-26-Math.max(0,-w)*6),C.iF(q,4))}else{w=s*3
v=-38-r
d.ah(D.ewp,new A.r(-12-w,v),C.iF(q,4))
d.ah(D.aN7,new A.r(12+w,v),C.iF(q,4))}w=A.L()
w.r=q.gp(0)
d.aD(D.fhO,w)
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
u=m.a5(0,D.ete)
v=A.L()
v.r=w.gp(0)
d.O(u,4,v)}else{w=A.bX(m.a5(0,B.tM),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cQ(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a5(0,D.ext),m.a5(0,D.ewj),C.iF(v,2.2))
d.ah(m.a5(0,D.evh),m.a5(0,D.etb),C.iF(v,2.2))}if(w===4){w=m.a5(0,D.exx)
u=A.L()
u.r=v.gp(0)
d.O(w,6,u)
u=m.a5(0,D.evj)
w=A.L()
w.r=v.gp(0)
d.O(u,6,w)}}w=m.a5(0,D.ew8)
v=A.L()
v.r=B.id.gp(0)
d.O(w,0.9,v)
v=m.a5(0,D.evY)
w=A.L()
w.r=B.id.gp(0)
d.O(v,0.9,w)
if(i){l=m.a5(0,B.a9x)
w=A.bX(l,21,22)
v=A.L()
v.r=D.lG.gp(0)
d.c1(w,v)
v=A.bX(l.a5(0,B.aN4),5,12)
w=A.L()
w.r=D.bi4.gp(0)
d.c1(v,w)
d.ah(l.a5(0,D.exp),l.a5(0,B.aNs),C.iF(B.cV,1.4))
d.ah(D.aN7,new A.r(15,-88-r),C.iF(q,3.6))}j.restore()},
hEo(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
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
d.lB(D.aTl,A.L())
C.ic8(d,g,h,i,j)
s=(k==null?D.a9C:k).a-w>=0?1:-1
w=A.L()
w.a=B.Mm
w.sam(A.jz(new A.r(s*70,-60),new A.r(-s*70,-60),A.a([D.ajy.j(0.5),D.ajy.j(0.12),D.bpJ.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aD(D.aTl,w)
r.restore()
r.restore()},
ic8(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.w,0.28)
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
s=A.bw(D.fhP,B.tR)
p=$.R()
o=A.L()
o.r=u.gp(0)
a1.aq(s,o)
o=A.bw(D.fhK,B.hW)
s=A.ap(v,B.w,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.aq(o,n)
n=A.bw(D.fhY,B.hW)
o=A.ap(v,B.w,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.aq(n,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.fhR,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.fgA,s)
s=a1.c
J.br(s.save())
s.translate(a3.w,0)
J.br(s.save())
a1.nM(0,q,q*(1+t*0.012))
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
k=D.dh3[j]
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
default:a1.ah(D.ewS,D.eu_,C.iF(a2.c.j(0.9),3))}a1.ah(D.exq,D.ewr,C.iF(B.w.j(0.18),1.6))
a1.ah(D.etj,B.aN9,C.iF(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.R()
i=A.L()
i.r=u.gp(0)
a1.aD(D.fgw,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.aD(D.fgK,i)
n=new A.aG(k.r,B.ai,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.ce(0,-57,9,-66))
n.E(new A.ce(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cQ(D.fgT,0.1,2.941592653589793,!1,C.iF(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a9H
n=25*q
k=23*q
i=9*q
C.hAm(a1,new A.r(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.EH:o
C.hAm(a1,new A.r(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.euK,D.euG,C.iF(D.akx,4))
a1.ah(D.euI,D.euE,C.iF(D.GJ.j(0.7),1.4))
u=A.L()
u.r=B.cV.gp(0)
a1.O(D.euH,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.br(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jq(0,a3.f)
a1.bV(0,r)
C.ic3(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hAm(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aJ(0,e),r=s.gcJ(),q=r===0?B.ht:s.eV(0,r),p=B.h.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
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
ic3(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bX(B.vI,40,38)
$.R()
v=A.L()
v.r=c0.gp(0)
c2.c1(w,v)}if(c1===4){$.R()
w=A.L()
w.r=c0.gp(0)
c2.O(D.ewz,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.O(D.etA,9.5,w)}w=A.bX(D.exM,10,6)
v=$.R()
u=A.L()
u.r=c8.gp(0)
c2.c1(w,u)
u=A.bX(D.ew5,10,6)
w=A.L()
w.r=c8.gp(0)
c2.c1(u,w)
v=v.r
w=x.v
t=new A.aG(v,B.ai,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.hU(13,-20,17,-9,16,2))
t.E(new A.hU(15,13,8,20,0,20))
t.E(new A.hU(-8,20,-15,13,-16,2))
t.E(new A.hU(-17,-9,-13,-20,0,-20))
t.E(new A.bx())
u=A.L()
u.sam(A.wh(D.exg,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iF(c8.j(0.5),0.8)
c2.cQ(D.fi_,3.455751918948773,2.5132741228718345,!1,s)
c2.cQ(D.fgD,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.eww,B.aNB,s)
c2.ah(D.etw,D.etn,s)
c2.cQ(D.fgS,2.2,1.4,!1,s)
c2.cQ(D.fgB,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.S,B.Q,B.V,B.X,B.T)
n.r=c0.gp(0)
c2.O(new A.r(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fh6,3.141592653589793,3.141592653589793,!0,p)
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
c2.ah(D.ewn,D.eto,C.iF(B.np,1.4))
o=A.L()
o.r=c0.gp(0)
c2.O(D.ewC,3,o)
o=A.L()
o.r=c0.gp(0)
c2.O(D.etB,3,o)
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
c2.cQ(D.fhd,3.4,2.5,!1,C.iF(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cQ(D.fh_,3.6,2.2,!1,C.iF(o,1.2))
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
c2.O(D.etp,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fha,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.ar(B.S,B.Q,B.V,B.X,B.T)
o.b=B.ab
o.c=0.9
o.r=p.gp(0)
o.d=B.bG
o.e=B.dQ
c2.ah(new A.r(r*3.6,-19+Math.abs(r)*0.8),new A.r(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=E.aDP[l]
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
c2.cQ(D.fh9,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(B.a9x,B.a9w,C.iF(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fgE,3.267256359733385,2.8902652413026098,!0,p)}i=B.h.D(c4.b,0,1)*0.4+0.1
p=A.bX(D.exz,5,8)
o=D.agN.j(i)
n=A.L()
n.r=o.gp(0)
c2.c1(p,n)
n=A.bX(D.ewg,5,8)
p=D.agN.j(i)
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
if(a3==null)a3=a4.e=new A.Eg(a4.gle().a.snapshot())
d.clipPath(a3.a,$.my(),!0)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.T)
a3.r=D.bm_.gp(0)
c2.O(new A.r(a7,a8),2.1,a3)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.T)
a3.r=B.w.gp(0)
c2.O(new A.r(a7,a8),1.05,a3)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.T)
a3.r=B.c.gp(0)
c2.O(new A.r(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.a_2:c8.j(0.9)
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
if(o)b4=D.bwu
else{u=A.ap(c8,D.bpL,0.6)
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
v.r=D.bp2.gp(0)
c2.af(b8,v)
J.br(d.save())
c2.mz(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.aD(new A.a3(w,11,w+b6*2,13.2),u)
u=A.bX(new A.r(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.bwz.gp(0)
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
c2.af(w,u)}}if(c4.b>0.2){c2.cQ(D.fgR,-1.2,2.2,!1,C.iF(c8.j(0.5),0.8))
c2.cQ(D.fgG,2.141592653589793,2.2,!1,C.iF(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.O(D.evZ,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.O(D.evW,1.7,w)}},
ihy(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.R(),f=new A.ph(new A.oO()),e=A.w6(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.sam(A.jz(B.J,new A.r(0,a0*0.46),D.ddN,D.d51,B.x,h))
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
e.jq(0,-0.5)
d=A.L()
a0=x.O
d.sam(A.wh(B.J,230,A.a([D.bkE,B.L],a0),h,B.x,h,h,0))
e.c1(D.fhl,d)
a2.restore()
d=A.L()
d.sam(A.wh(D.a9F,58,A.a([D.bo3,B.L],a0),h,B.x,h,h,0))
e.O(D.a9F,58,d)
d=A.L()
d.r=D.bjm.gp(0)
e.O(D.a9F,24,d)
d=A.L()
d.r=D.a_t.gp(0)
e.O(D.euj,5,d)
d=A.L()
d.r=D.a_t.gp(0)
e.O(D.eun,3.4,d)
d=A.L()
d.r=D.a_t.gp(0)
e.O(D.eum,2.4,d)
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
g=[D.bhT,D.bjV,D.bq4][s]
u=$.R()
t=new A.ar(B.S,B.Q,B.V,B.X,B.T)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.czy[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.S,B.Q,B.V,B.X,B.T)
u.b=B.ab
u.c=2.4
u.r=D.a_P.gp(0)
u.d=B.bG
u.e=B.dQ
e.ah(new A.r(o,k),new A.r(g,d),u)
g=A.bX(new A.r(g,k-27),11,46)
u=new A.ar(B.S,B.Q,B.V,B.X,B.T)
u.r=D.a_P.gp(0)
e.c1(g,u)
d=A.bX(new A.r(o-12,d),8,24)
u=new A.ar(B.S,B.Q,B.V,B.X,B.T)
u.r=D.a_P.gp(0)
e.c1(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ar(B.S,B.Q,B.V,B.X,B.T)
u.r=D.bjp.j(0.8).gp(0)
e.O(new A.r(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.sam(A.jz(D.esT,D.esW,D.d71,B.xh,B.x,h))
e.aD(new A.a3(-200,412,650,1300),g)
j=new A.e_()
j.cU(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bX(new A.r(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h5()?B.c:B.w
d=new A.ar(B.S,B.Q,B.V,B.X,B.T)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.c1(u,d)}J.br(a2.save())
a2.translate(225,590)
e.nM(0,1,0.34)
g=A.L()
g.sam(A.wh(B.J,250,A.a([D.br4,D.bkf,D.bt1],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.O(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.aje,D.biU,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.R()
a0=new A.ar(B.S,B.Q,B.V,B.X,B.T)
a0.b=B.ab
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bG
a0.e=B.dQ
e.ah(new A.r(o+i*2,k),new A.r(o+i*5,g+Math.abs(i)*3),a0)}}C.iaj(e)
for(l=0;l<3;++l)C.idw(e,D.aBB[l])
C.idl(e,D.eud)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.R()
a0=new A.ar(B.S,B.Q,B.V,B.X,B.T)
a0.b=B.ab
a0.c=2.4
a0.r=D.a_L.gp(0)
a0.d=B.bG
a0.e=B.dQ
e.ah(new A.r(o,452+g),new A.r(o+1,436+d),a0)}e.ah(D.etl,D.etE,C.iF(D.bjD,1.6))
a2.restore()
return f.nw()},
iaj(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.R().r,g=x.v,f=new A.aG(h,B.ai,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.hU(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.hU(416,382,432,422,428,462))
f.E(new A.bx())
w=A.L()
w.sam(A.jz(new A.r(354,0),new A.r(430,0),D.dBX,B.mp,B.x,i))
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
d.ah(new A.r(t,s),new A.r(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dit[o]
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
r.r=D.ahz.gp(0)
r.d=B.bG
r.e=B.dQ
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ar(B.S,B.Q,B.V,B.X,B.T)
l.r=A.ap(D.bjv,D.bq2,v.ai()).j(0.92).gp(0)
d.O(new A.r(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.S,B.Q,B.V,B.X,B.T)
r.b=B.ab
r.c=1.2
r.r=D.a_L.gp(0)
r.d=B.bG
r.e=B.dQ
d.ah(new A.r(w,q+8),new A.r(w,q+22),r)
q=A.bX(new A.r(w,q+28),13,7)
w=new A.ar(B.S,B.Q,B.V,B.X,B.T)
w.r=D.brr.gp(0)
d.c1(q,w)}},
idw(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bX(new A.r(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.R(),b3=A.L()
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
u.sam(A.jz(new A.r(b0,0),new A.r(v,0),D.diz,B.mp,B.x,a4))
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
o=D.aja.j(0.75)
n=A.L()
n.r=o.gp(0)
b4.aD(new A.a3(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.h.bf(u);++l){k=m+l*10
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
for(p/=6,l=0;l<=B.h.bf(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.ak(n)
f.ab()}b4.af(f,C.iF(D.aja.j(0.7),1.6))
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
m.r=D.ajm.gp(0)
b4.af(b2,m)
m=A.L()
m.r=D.ajm.gp(0)
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
b1.sam(A.jz(new A.r(a5-n,0),new A.r(a5+n,0),D.dm5,B.mp,B.x,a4))
b4.af(e,b1)
J.br(v.save())
b4.mz(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h5()?B.w:D.bj2).j(0.16)
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
v.r=D.bqw.gp(0)
v.d=B.bG
v.e=B.dQ
b4.ah(new A.r(a2,a3),new A.r(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aG(b0,B.ai,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bx())
b0=A.L()
b0.r=D.bmu.gp(0)
b4.af(a9,b0)},
idl(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+E.aDM[s]
$.R()
q=new A.ar(B.S,B.Q,B.V,B.X,B.T)
q.b=B.ab
q.c=3
q.r=D.a_L.gp(0)
q.d=B.bG
q.e=B.dQ
d.ah(new A.r(r,u),new A.r(r,t),q)}u=A.bX(e.a5(0,B.aN3),24,36)
t=$.R()
r=A.L()
r.r=D.bvG.gp(0)
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
u.r=D.aig.gp(0)
d.af(t,u)},
icI(d){switch(B.o.F(d,8)){case 0:return D.b2b
case 1:return D.b29
case 2:return D.b28
case 3:return D.b27
case 4:return D.b2a
case 5:return D.b2c
case 6:return D.hId
default:return D.hIc}},
SP(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bpZ()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a9H:j
w.as=k==null?D.EH:k
C.hEo(d,e,p,C.icI(m),w,s,m,l)},
hFQ(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bUt:function bUt(){var _=this
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
bpZ:function bpZ(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
amL:function amL(){this.b=this.a=null},
aXl:function aXl(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bUl:function bUl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUm:function bUm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUn:function bUn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUo:function bUo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
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
bUs:function bUs(){},
bUk:function bUk(d){this.a=d},
agm:function agm(d,e){this.a=d
this.b=e},
aej:function aej(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Nc(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bT4(s)
s.bCu(d)
return s},
H9(d,e,f,g,h,i,j){var w,v=A.T(g).k("Y<1>")
v=A.d_(new A.Y(g,new C.fxn(f),v),v.k("M.E"))
w=A.B(v,A.a4(v).k("cj.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cT(w,0,A.dA(3,"count",x.S),A.T(w).c))
B.d.e0(v,d)
return new C.ls(e,v,B.d.cj(v,f),h,i,"tree",j)},
iy6(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.S(c0,x.cg),c2=new C.h8m(c1),c3=x.s,c4=A.a([],c3)
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
f=A.B(new A.Y(t,new C.h8o(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.H9(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.B(new A.Y(w,new C.h8p(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.ls("True or false: "+h+" is the "+g+" of "+l+".",D.aCD,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.ls("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aCD,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Gk(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.B(new A.Y(t,new C.h8q(l,a0,c5),v),s)
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
for(e=A.T(a0),a2=e.k("iD<1>"),a3=new A.iD(a0,1,b3,a2),a3.nb(a0,1,b3,e.c),a3=new A.bR(a3,a3.gJ(0),a2.k("bR<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.H9(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.as_(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.B(new A.Y(t,new C.h8r(l),v),s)
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
j=A.B(new A.Y(t,new C.h8s(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wO
if(e)a2=b7
else a2=f===D.oB?b8:b9
if(e)f=b7
else f=f===D.oB?b8:b9
c2.$2("grand",C.H9(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aNE(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.B(new A.Y(t,new C.h8t(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.H9(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.B(r,c0)
B.d.u(j,D.cSp)
h=l+" was born in "+k
c2.$2("place",C.H9(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.B(q,c0)
B.d.u(j,D.d84)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.H9(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.H9(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.j_(b1,b3,b3)
c2.$2("year",C.H9(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bFe(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Nc(d),l=new A.e_()
l.cU(f)
w=C.iy6(m,l,g)
for(v=new A.dp(w,w.r,w.e);v.C();)J.hnQ(v.d,l)
v=A.a4(w).k("cr<1>")
u=A.B(new A.cr(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aS(u,new C.fKV(n,w))))break
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
if(v<e){v=A.B(D.aAC,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hEv(o,l))}}else if(!g&&v>3){o=C.hEv(D.aAC[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hEv(d,e){var w=d.b,v=w[d.c]
w=A.B(w,x.N)
B.d.e0(w,e)
return new C.ls(d.a,w,B.d.cj(w,v),d.d,d.e,d.f,d.r)},
hJO(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Nc(a2),a1=new A.e_()
a1.cU(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.Gk(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.Gk(n)
l=A.T(m)
k=new A.iD(m,0,5,l.k("iD<1>"))
k.nb(m,0,5,l.c)
j=k.dq(0)
if(new A.N(j,new C.fZL(),A.T(j).k("N<1,H>")).fF(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aT8(a0,j[i]))
w.push(new C.auS("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.S(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.c4(e.c_(0,a0.an7(q),new C.fZM()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cr<1>")
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
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aT8(a0,v[r]))
w.push(new C.auS("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aRD(d){return B.d.aoB(D.aD8,new C.fGJ(d))},
io1(d){return A.nw(new A.Y(D.aD8,new C.fNL(d),x.av))},
bTT(d){return C.hTv(d)},
hTv(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bTT=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bTT)
case 7:r=f
q=B.a.i(d)
q=A.eq(J.t(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bTT,v)},
BT(d,e){return C.hTs(d,e)},
hTs(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$BT=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BT)
case 7:r=g
p=B.a.i(d)
o=A.eq(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
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
bTS(d,e,f){return C.hTt(d,e,f)},
hTt(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bTS=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bTS)
case 7:r=h
q=B.a.i(d)
q=A.eq(J.t(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bTS,v)},
BU(d,e,f,g){return C.hTu(d,e,f,g)},
hTu(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$BU=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BU)
case 7:r=i
p=B.a.i(d)
o=A.eq(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
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
bHx(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
haq(d,e,f,g){return new C.alj(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hRz(d){var w,v,u,t=d.h(0,"q")
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
return C.haq(w,v,B.o.D(u==null?20:u,5,60),t)},
hoZ(d){var w,v,u,t,s,r,q=J.a8(d),p=q.h(d,"id")
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
if(u.b(r))v.push(C.hRz(A.a1(r,t,s)))}return new C.MX(p,w,v)},
hiZ(d){var w,v=A.a([],x.c)
for(w=J.aT(d.z);w.C();)v.push(C.hoZ(w.gP(w)))
return v},
aT8(d,e){var w=e.c===D.oB
if(d.an7(e)===0&&d.Gk(e).length!==0)return w?0:1
if(d.Gk(e).length!==0||d.as_(e)!=null)return w?2:3
return w?4:5},
hKT(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nc(a4),a3=new A.e_()
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
j=i.h(0,k)}h=a2.Gk(m)
g=a2.as_(m)
f=a2.aNE(m)
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
B.d.b0(l,new C.h8N())
d=B.a.i(m.b)
a0=A.B(new A.Y(s,new C.h8O(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.T(a0)
a1=new A.iD(a0,0,3,i.k("iD<1>"))
a1.nb(a0,0,3,i.c)
B.d.u(k,a1)
B.d.e0(k,a3)
a1=C.aT8(a2,m)
i=new A.iD(l,0,4,p)
i.nb(l,0,4,r)
w.push(new C.bbn(d,a1,i.dq(0),k))
if(w.length>=5)break}return w},
hBU(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.X(d,"My ")?1:0},
hJZ(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nc(a4),a3=new A.e_()
a3.cU(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.Gk(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.Gk(l)
j=A.T(k)
i=new A.iD(k,0,4,j.k("iD<1>"))
i.nb(k,0,4,j.c)
h=i.dq(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aS(h,new C.h_n(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iD(i,0,k,m)
j.nb(i,0,k,n)
f=j.dq(0)
j=B.a.i(l.b)
k=C.aT8(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aT8(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aT8(a2,f[g]))
w.push(new C.aam(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
ls:function ls(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bT4:function bT4(d){this.b=d
this.c=$},
bT5:function bT5(){},
bT6:function bT6(d){this.a=d},
fxn:function fxn(d){this.a=d},
h8m:function h8m(d){this.a=d},
h8n:function h8n(){},
h8o:function h8o(d){this.a=d},
h8p:function h8p(d,e){this.a=d
this.b=e},
h8q:function h8q(d,e,f){this.a=d
this.b=e
this.c=f},
h8l:function h8l(d,e){this.a=d
this.b=e},
h8r:function h8r(d){this.a=d},
h8s:function h8s(d){this.a=d},
h8t:function h8t(d,e,f){this.a=d
this.b=e
this.c=f},
h8k:function h8k(d,e){this.a=d
this.b=e},
fKV:function fKV(d,e){this.a=d
this.b=e},
auS:function auS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fZL:function fZL(){},
fZM:function fZM(){},
zC:function zC(d,e,f){this.a=d
this.b=e
this.c=f},
fGJ:function fGJ(d){this.a=d},
fNL:function fNL(d){this.a=d},
alj:function alj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bNS:function bNS(){},
MX:function MX(d,e,f){this.a=d
this.b=e
this.c=f},
bbn:function bbn(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h8N:function h8N(){},
h8O:function h8O(d){this.a=d},
aam:function aam(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h_n:function h_n(d){this.a=d},
biF:function biF(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
agk:function agk(d,e,f,g,h){var _=this
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
_.bv$=g
_.a9$=h
_.c=_.a=null},
bM0:function bM0(d){this.a=d},
bLW:function bLW(){},
bM1:function bM1(){},
bLU:function bLU(){},
bLV:function bLV(){},
bM_:function bM_(d){this.a=d},
bLX:function bLX(d,e){this.a=d
this.b=e},
bLZ:function bLZ(d,e){this.a=d
this.b=e},
bLY:function bLY(d,e){this.a=d
this.b=e},
bLT:function bLT(d){this.a=d},
bdQ:function bdQ(d,e){this.b=d
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
crR:function crR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
crS:function crS(d){this.a=d},
crQ:function crQ(d){this.a=d},
crT:function crT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
crU:function crU(){},
crV:function crV(d,e){this.a=d
this.b=e},
crW:function crW(){},
crX:function crX(d){this.a=d},
crN:function crN(d){this.a=d},
crO:function crO(d,e){this.a=d
this.b=e},
crP:function crP(d,e,f){this.a=d
this.b=e
this.c=f},
crI:function crI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
crK:function crK(d,e){this.a=d
this.b=e},
crL:function crL(d,e){this.a=d
this.b=e},
crJ:function crJ(d,e){this.a=d
this.b=e},
crH:function crH(){},
crM:function crM(){},
bdj:function bdj(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cRY:function cRY(){},
azs:function azs(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azt:function azt(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cGP:function cGP(d){this.a=d},
cGO:function cGO(d){this.a=d},
cGX:function cGX(d,e){this.a=d
this.b=e},
cGY:function cGY(d,e){this.a=d
this.b=e},
cGZ:function cGZ(d){this.a=d},
cGW:function cGW(d){this.a=d},
cH_:function cH_(d){this.a=d},
cH0:function cH0(d,e){this.a=d
this.b=e},
cH1:function cH1(){},
cH2:function cH2(d){this.a=d},
cGR:function cGR(d){this.a=d},
cGS:function cGS(d,e){this.a=d
this.b=e},
cGQ:function cGQ(d,e){this.a=d
this.b=e},
cGT:function cGT(){},
cGU:function cGU(){},
cGV:function cGV(d,e){this.a=d
this.b=e},
aAq:function aAq(){},
aHJ:function aHJ(){},
hgC(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bsk((w-450*u)/2,(v-900*u)/2,u)},
ag8:function ag8(){},
f9J:function f9J(d){this.a=d},
aLz:function aLz(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fjY:function fjY(d){this.a=d},
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
_.qh$=f
_.Mg$=g
_.anE$=h
_.bv$=i
_.a9$=j
_.c=_.a=null},
bTR:function bTR(d){this.a=d},
bTQ:function bTQ(){},
bTO:function bTO(d){this.a=d},
bTM:function bTM(){},
bTN:function bTN(d){this.a=d},
bTJ:function bTJ(d,e){this.a=d
this.b=e},
bTK:function bTK(){},
bTL:function bTL(d){this.a=d},
bTP:function bTP(d,e){this.a=d
this.b=e},
bTI:function bTI(d){this.a=d},
bu3:function bu3(d,e){this.b=d
this.a=e},
f9K:function f9K(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f9L:function f9L(d,e,f){this.a=d
this.b=e
this.c=f},
f9M:function f9M(d,e,f){this.a=d
this.b=e
this.c=f},
f9N:function f9N(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9O:function f9O(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f9P:function f9P(){},
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
_.qh$=f
_.Mg$=g
_.anE$=h
_.bv$=i
_.a9$=j
_.c=_.a=null},
bTu:function bTu(){},
bTF:function bTF(d,e){this.a=d
this.b=e},
bTG:function bTG(d){this.a=d},
bTH:function bTH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTB:function bTB(){},
bTA:function bTA(d,e){this.a=d
this.b=e},
bTC:function bTC(d,e){this.a=d
this.b=e},
bTD:function bTD(){},
bTE:function bTE(d){this.a=d},
bTw:function bTw(d){this.a=d},
bTx:function bTx(d){this.a=d},
bTy:function bTy(d){this.a=d},
bTv:function bTv(d,e){this.a=d
this.b=e},
bTz:function bTz(d){this.a=d},
bku:function bku(d,e){this.b=d
this.a=e},
dtv:function dtv(){},
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
_.qh$=e
_.Mg$=f
_.anE$=g
_.bv$=h
_.a9$=i
_.c=_.a=null},
bTg:function bTg(d){this.a=d},
bTf:function bTf(){},
bTe:function bTe(){},
bT8:function bT8(){},
bT9:function bT9(){},
bTd:function bTd(d,e,f){this.a=d
this.b=e
this.c=f},
bTc:function bTc(d){this.a=d},
bTa:function bTa(d,e){this.a=d
this.b=e},
bTb:function bTb(d){this.a=d},
bjV:function bjV(d,e){this.b=d
this.a=e},
aCg:function aCg(){},
bhs:function bhs(){},
aCi:function aCi(){},
bht:function bht(){},
aCj:function aCj(){},
bhu:function bhu(){},
uw(d,e,f,g,h){var w,v,u=null,t=A.l(18),s=A.a([],x.V)
s.push(new A.ab(0,B.G,f.j(0.4),B.i4,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.X(g,h,u,u,u,20),B.ae],w))
v.push(A.d(d,u,u,u,u,u,u,A.m(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.ay(u,A.o(u,A.A(v,B.l,u,B.e,B.N,0,u,u),B.f,u,u,new A.n(f,u,u,t,s,u,B.n),u,u,u,u,B.OT,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hpM(d,e,f,g,h,i,j){return new C.amx(i,h,d,j,e,f,g,null)},
a6T:function a6T(d,e){this.c=d
this.a=e},
bk1:function bk1(d){this.a=d},
tE:function tE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bT7:function bT7(d){this.a=d},
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
bmP:function bmP(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e3P:function e3P(d,e){this.a=d
this.b=e},
e3Q:function e3Q(d){this.a=d},
e3R:function e3R(d,e){this.a=d
this.b=e},
e3N:function e3N(d){this.a=d},
e3O:function e3O(d){this.a=d},
e3M:function e3M(d){this.a=d},
e3K:function e3K(d){this.a=d},
e3L:function e3L(d){this.a=d},
e3J:function e3J(d,e){this.a=d
this.b=e},
e3S:function e3S(d){this.a=d},
e3T:function e3T(d,e){this.a=d
this.b=e},
e3U:function e3U(d,e){this.a=d
this.b=e},
e3V:function e3V(d,e){this.a=d
this.b=e},
e3Y:function e3Y(d,e){this.a=d
this.b=e},
e3Z:function e3Z(d,e){this.a=d
this.b=e},
e4_:function e4_(d,e){this.a=d
this.b=e},
e40:function e40(d,e){this.a=d
this.b=e},
e41:function e41(d,e){this.a=d
this.b=e},
e42:function e42(d,e,f){this.a=d
this.b=e
this.c=f},
e43:function e43(d,e){this.a=d
this.b=e},
e44:function e44(d,e){this.a=d
this.b=e},
e3W:function e3W(d){this.a=d},
e3X:function e3X(d){this.a=d},
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
bTs:function bTs(d){this.a=d},
bTt:function bTt(d){this.a=d},
bTr:function bTr(d){this.a=d},
bTi:function bTi(d){this.a=d},
bTj:function bTj(d){this.a=d},
bTh:function bTh(d){this.a=d},
bTo:function bTo(d,e,f){this.a=d
this.b=e
this.c=f},
bTp:function bTp(d){this.a=d},
bTl:function bTl(d,e){this.a=d
this.b=e},
bTm:function bTm(d,e,f){this.a=d
this.b=e
this.c=f},
bTq:function bTq(){},
bTn:function bTn(d,e){this.a=d
this.b=e},
bTk:function bTk(d){this.a=d},
Uf:function Uf(d,e){this.c=d
this.a=e},
amu:function amu(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bST:function bST(d){this.a=d},
bSU:function bSU(d){this.a=d},
bT3:function bT3(){},
bT2:function bT2(d,e,f){this.a=d
this.b=e
this.c=f},
bSY:function bSY(d,e){this.a=d
this.b=e},
bSX:function bSX(d,e){this.a=d
this.b=e},
bSZ:function bSZ(d){this.a=d},
bT_:function bT_(d,e){this.a=d
this.b=e},
bT0:function bT0(d,e){this.a=d
this.b=e},
bSW:function bSW(d,e){this.a=d
this.b=e},
bT1:function bT1(d,e,f){this.a=d
this.b=e
this.c=f},
bSV:function bSV(d,e){this.a=d
this.b=e},
imx(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ajm(a6),a5=a4.length
if(a5===0)return""
w=A.S(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.V(Date.now(),0,!1))
s=new C.fKl(w,a4)
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
m.push("child of "+l+k)}a0=A.B(new A.cM(new A.Y(a4,new C.fKj(u,f),p),new C.fKk(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aN(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aN(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aB(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
imy(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ajm(a0),d=e.length
if(d===0)return""
w=x.N
v=A.S(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fKq(v,e)
q=new C.fKo(v)
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
for(l=B.d.gae(e),k=new A.eL(l,new C.fKp(p,m));k.C();t=f){j=l.gP(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.an(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aN(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i7K(d,e,f,g){var w,v,u=C.imz(d,e)
if(u<=0||f.length<=u)return new A.afN(!1,D.E_,f)
if(g.q(0,e.a))return new A.afN(!1,D.E_,f)
w=A.T(f).c
v=A.cT(f,0,A.dA(u,"count",x.S),w).dq(0)
return new A.afN(!0,A.cT(f,u,null,w).dq(0),v)},
i7L(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ajm(d3),d2=d1.length
if(d2===0)return D.hFp
w=x.N
v=A.S(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c_(0,t.a,new C.dj0(t))}s=new C.djh(v)
d2=x.dy
r=A.S(w,d2)
q=new C.dj9(r)
for(p=new A.dp(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dj8(r)
l=A.S(w,x.do)
for(p=new A.dp(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c4(l.c_(0,k,new C.dj1()),o)}h=new C.dj7(s)
g=new C.dj6(l,r)
p=v.$ti.k("b8<2>")
o=p.k("Y<M.E>")
f=A.B(new A.Y(new A.b8(v,p),new C.dj2(h),o),o.k("M.E"))
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
a9=new C.djf(new C.djb(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.S(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dp(v,v.r,v.e),j=a2.gamD(a2);o.C();){b0=o.d
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
b7=new C.dj_(a2,new C.djg(),b6,a3,b4,v,a4,a5,a6,b5)
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
b5[c4]=new C.L0(c5.a,new A.r(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cr<1>")
d2=A.B(new A.cr(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bO(0,new C.dj3(c6,b4))
for(d2=new A.cd(a4,a4.$ti.k("cd<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aT(c7.b);j.C();){i=j.gP(j)
if(b6.an(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.r(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eL(j,new C.dj4(c8));i.C();)o.push(j.gP(0).b)
if(o.length===0)continue
B.d.b0(o,new C.dj5())
c6.push(new C.aLu(new A.r(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bhy(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hFc(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(d)
return w==null?null:w.b[1]},
hz3(d,e,f,g,h,i,j,k,l,m,n){return new C.a0v(k,f,j,e,l,n,m,d,g,h,i,null)},
aEh(d,e,f,g,h,i,j){return new C.blk(i,d,e,f,j,h,g,null)},
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
e5u:function e5u(d){this.a=d},
e5t:function e5t(d){this.a=d},
e5w:function e5w(d,e){this.a=d
this.b=e},
e5x:function e5x(d,e){this.a=d
this.b=e},
e5y:function e5y(d){this.a=d},
e5s:function e5s(d,e){this.a=d
this.b=e},
e5v:function e5v(d){this.a=d},
e5A:function e5A(d){this.a=d},
e5z:function e5z(d,e){this.a=d
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
e4V:function e4V(d){this.a=d},
e4T:function e4T(d){this.a=d},
e4U:function e4U(d){this.a=d},
e4W:function e4W(d,e){this.a=d
this.b=e},
e4Q:function e4Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4h:function e4h(d){this.a=d},
e4i:function e4i(d,e){this.a=d
this.b=e},
e4z:function e4z(d){this.a=d},
e4x:function e4x(d){this.a=d},
e4y:function e4y(d,e){this.a=d
this.b=e},
e4A:function e4A(d){this.a=d},
e4B:function e4B(d,e){this.a=d
this.b=e},
e4P:function e4P(d,e){this.a=d
this.b=e},
e4w:function e4w(d){this.a=d},
e4v:function e4v(d){this.a=d},
e4u:function e4u(d,e){this.a=d
this.b=e},
e4M:function e4M(){},
e4N:function e4N(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e4L:function e4L(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e4F:function e4F(d){this.a=d},
e4G:function e4G(d,e,f){this.a=d
this.b=e
this.c=f},
e4E:function e4E(d,e){this.a=d
this.b=e},
e4H:function e4H(d,e){this.a=d
this.b=e},
e4C:function e4C(d,e){this.a=d
this.b=e},
e4D:function e4D(){},
e4I:function e4I(d,e){this.a=d
this.b=e},
e4J:function e4J(d){this.a=d},
e4K:function e4K(d,e){this.a=d
this.b=e},
e4O:function e4O(d,e){this.a=d
this.b=e},
e45:function e45(d,e){this.a=d
this.b=e},
e46:function e46(d,e){this.a=d
this.b=e},
e4Y:function e4Y(d,e,f){this.a=d
this.b=e
this.c=f},
e4S:function e4S(d,e,f){this.a=d
this.b=e
this.c=f},
e4R:function e4R(d){this.a=d},
e47:function e47(d){this.a=d},
e48:function e48(d){this.a=d},
e49:function e49(){},
e4a:function e4a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4e:function e4e(d,e){this.a=d
this.b=e},
e4d:function e4d(d,e){this.a=d
this.b=e},
e4c:function e4c(d){this.a=d},
e4f:function e4f(d,e){this.a=d
this.b=e},
e4b:function e4b(d){this.a=d},
e4X:function e4X(d){this.a=d},
e4r:function e4r(){},
e4s:function e4s(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4q:function e4q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4m:function e4m(d,e,f){this.a=d
this.b=e
this.c=f},
e4l:function e4l(d,e,f){this.a=d
this.b=e
this.c=f},
e4j:function e4j(d,e){this.a=d
this.b=e},
e4n:function e4n(d){this.a=d},
e4o:function e4o(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4k:function e4k(d,e){this.a=d
this.b=e},
e4p:function e4p(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4t:function e4t(d,e){this.a=d
this.b=e},
e54:function e54(){},
e55:function e55(d,e){this.a=d
this.b=e},
e56:function e56(d){this.a=d},
e57:function e57(d,e){this.a=d
this.b=e},
e50:function e50(d){this.a=d},
e4Z:function e4Z(d,e){this.a=d
this.b=e},
e51:function e51(d,e){this.a=d
this.b=e},
e52:function e52(d,e){this.a=d
this.b=e},
e53:function e53(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e58:function e58(d){this.a=d},
e5_:function e5_(d){this.a=d},
e4g:function e4g(d){this.a=d},
bhw:function bhw(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
diY:function diY(d){this.a=d},
diX:function diX(d,e){this.a=d
this.b=e},
diZ:function diZ(d){this.a=d},
diW:function diW(d,e){this.a=d
this.b=e},
fKl:function fKl(d,e){this.a=d
this.b=e},
fKm:function fKm(d){this.a=d},
fKn:function fKn(){},
fKj:function fKj(d,e){this.a=d
this.b=e},
fKk:function fKk(){},
fKq:function fKq(d,e){this.a=d
this.b=e},
fKr:function fKr(d){this.a=d},
fKs:function fKs(){},
fKo:function fKo(d){this.a=d},
fKp:function fKp(d,e){this.a=d
this.b=e},
L0:function L0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GJ:function GJ(d,e){this.a=d
this.b=e},
bhy:function bhy(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dj0:function dj0(d){this.a=d},
djh:function djh(d){this.a=d},
dj9:function dj9(d){this.a=d},
dja:function dja(){},
dj8:function dj8(d){this.a=d},
dj1:function dj1(){},
dj7:function dj7(d){this.a=d},
dj6:function dj6(d,e){this.a=d
this.b=e},
dj2:function dj2(d){this.a=d},
djb:function djb(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
djc:function djc(d){this.a=d},
djd:function djd(d){this.a=d},
dje:function dje(){},
djf:function djf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
djg:function djg(){},
dj_:function dj_(d,e,f,g,h,i,j,k,l,m){var _=this
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
dj3:function dj3(d,e){this.a=d
this.b=e},
dj4:function dj4(d){this.a=d},
dj5:function dj5(){},
aLu:function aLu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bhz:function bhz(d,e){this.b=d
this.a=e},
dji:function dji(){},
djj:function djj(d){this.a=d},
djk:function djk(d){this.a=d},
djl:function djl(){},
bll:function bll(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgA:function bgA(d,e){this.b=d
this.a=e},
bzr:function bzr(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fpz:function fpz(d){this.a=d},
boH:function boH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
f_u:function f_u(d){this.a=d},
f_t:function f_t(d,e){this.a=d
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
dze:function dze(d,e){this.a=d
this.b=e},
dzd:function dzd(d){this.a=d},
dzb:function dzb(d){this.a=d},
dzc:function dzc(d){this.a=d},
dzn:function dzn(d){this.a=d},
dzo:function dzo(d){this.a=d},
dzm:function dzm(d,e){this.a=d
this.b=e},
dzp:function dzp(){},
dzs:function dzs(d){this.a=d},
dzl:function dzl(d,e){this.a=d
this.b=e},
dzr:function dzr(){},
dzt:function dzt(d){this.a=d},
dzk:function dzk(d,e){this.a=d
this.b=e},
dzu:function dzu(d){this.a=d},
dzj:function dzj(d){this.a=d},
dzv:function dzv(d){this.a=d},
dzi:function dzi(d){this.a=d},
dzw:function dzw(d){this.a=d},
dzh:function dzh(d){this.a=d},
dzx:function dzx(d){this.a=d},
dzg:function dzg(d){this.a=d},
dzy:function dzy(d){this.a=d},
dzf:function dzf(d,e){this.a=d
this.b=e},
dzq:function dzq(d){this.a=d},
aeG:function aeG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
blk:function blk(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aeF:function aeF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
blj:function blj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dzz:function dzz(d){this.a=d},
dzA:function dzA(d,e){this.a=d
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
aeH:function aeH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dzJ:function dzJ(d){this.a=d},
GF:function GF(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
htQ(d){var w=d.V,v=x.N
return w.jp(w,new C.cgm(),v,v)},
i_6(d){var w=d.bH
if(w>=0)return w
return 5},
htS(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.htQ(d).h(0,v)
if(w==null||w.length===0)return null
return A.bj(w)},
htR(d,e){var w=C.htS(d,e)
if(w!=null&&w.cb(new A.V(Date.now(),0,!1)))return!0
return!1},
i_7(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.htQ(d),w,w)
u=C.htS(d,e)
t=u!=null&&u.cb(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bR(A.dx(30,0,0,0,0,0).a).aa().ag())
d.V=v},
b20(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b20=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.ly(t,B.JV),$async$b20)
case 3:if(l){u=!0
w=1
break}u=A.lf(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.JV,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b20,v)},
cgm:function cgm(){},
i_4(){var w,v=$.ou(),u=J.e4(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hh(u)},
Ju(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Ju=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ca(),$async$Ju)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$Ju)
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
return A.i($async$Ju,v)},
a8B(d){return C.i_5(d)},
i_5(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8B=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ca(),$async$a8B)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hP("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cR,null),$async$a8B)
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
return A.i($async$a8B,v)},
cgl(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cgl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Ju(),$async$cgl)
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
return A.i($async$cgl,v)},
Ou(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Ou=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cgl(d),$async$Ou)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Ju(),$async$Ou)
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
return A.b(C.a8B(s),$async$Ou)
case 9:case 8:u=t
w=1
break
case 5:n=C.i_4()
w=10
return A.b(C.Ju(),$async$Ou)
case 10:s=f
J.aJ(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a8B(s),$async$Ou)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ou,v)},
b2_(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b2_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Ju(),$async$b2_)
case 3:t=f
for(s=J.dr(t),r=s.gdQ(t),r=r.dq(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8B(t),$async$b2_)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b2_,v)},
a8C(d,e,f){var w=0,v=A.j(x.H),u
var $async$a8C=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.arE(d,e),$async$a8C)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Ou(d),$async$a8C)
case 7:w=4
break
case 5:w=8
return A.b(C.b2_(d),$async$a8C)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a8C,v)},
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
return A.b(A.ca(),$async$ary)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Ju(),$async$ary)
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
b1Z(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b1Z=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.ca(),$async$b1Z)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Ju(),$async$b1Z)
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
return A.i($async$b1Z,v)},
i_8(){var w,v=$.ou(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hh(u)},
arB(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$arB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ca(),$async$arB)
case 3:if(!g){u=null
w=1
break}t=C.i_8()
w=4
return A.b(A.WB(),$async$arB)
case 4:s=g
r=B.dV.aK(B.W.av(d.f1(),null))
r=B.cL.gco().aK(r)
q=e?999:2
J.aJ(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a8D(s),$async$arB)
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
return A.b(C.b1Z(J.k(l==null?"":l),j),$async$arA)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cb.cE(0,B.cD.aK(t))
s=C.htT(r)}catch(f){q=A.aa(f)
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
return A.b(A.a8D(p),$async$arA)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arA,v)},
htT(d){var w,v,u,t,s=null
try{w=B.W.aP(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.i_a(A.a1(w,x.N,x.z))
return u}catch(t){v=A.aa(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
hcA(d){var w=0,v=A.j(x.m),u,t,s
var $async$hcA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.X(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.arA(t[1])
w=1
break}u=null
w=1
break}u=C.htT(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hcA,v)},
i_a(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.de(v,x.f)
u=A.cF(u,new C.cgo(),u.$ti.k("M.E"),x.k)
t=A.a4(u).k("Y<M.E>")
s=A.B(new A.Y(u,new C.cgp(),t),t.k("M.E"))}else s=A.a([],x._)
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
n=A.cF(n,new C.cgq(),n.$ti.k("M.E"),o)
k=A.a4(n).k("Y<M.E>")
j=A.B(new A.Y(n,new C.cgr(),k),k.k("M.E"))
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
cgx(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cgx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bl(d),$async$cgx)
case 3:t=s.b9(f,new C.cgy(),x.cs)
t=A.B(t,t.$ti.k("ak.E"))
B.d.b0(t,new C.cgz())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cgx,v)},
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
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.cgv(g))
r=A.B(t,t.$ti.k("M.E"))}t=J.a8(r)
if(t.gau(r)){u=null
w=1
break}t=t.dO(r,new C.cgw(e),x.k)
r=A.B(t,t.$ti.k("ak.E"))
q=A.S(x.N,x.d)
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
case 13:u=new C.arC(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WC,v)},
b23(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b23=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WC(d,e,f,g),$async$b23)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Ho(A.KX(q.f1(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b23,v)},
b22(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b22=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WC(d,e,f,g),$async$b22)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.arB(r,f),$async$b22)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aIw(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b22,v)},
WD(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$WD=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.hcA(a0),$async$WD)
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
return A.b(C.bET(e,j),$async$WD)
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
break}u=new A.bsq(l,m,q)
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
cgt:function cgt(){},
cgu:function cgu(){},
cgs:function cgs(){},
cgo:function cgo(){},
cgp:function cgp(){},
cgq:function cgq(){},
cgr:function cgr(){},
cgy:function cgy(){},
cgz:function cgz(){},
cgv:function cgv(d){this.a=d},
cgw:function cgw(d){this.a=d},
hlO(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f3(null,x.H)
return A.hE(d,new C.arD(w,e,g,i,f,h,null),!0,null,x.H)},
diV(d,e,f,g,h,i,j,k){return new C.bhv(i,e,k,j,g,f,h,d,null)},
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
e5h:function e5h(d){this.a=d},
e5i:function e5i(d,e,f){this.a=d
this.b=e
this.c=f},
e5m:function e5m(d,e){this.a=d
this.b=e},
e5n:function e5n(d){this.a=d},
e5e:function e5e(d){this.a=d},
e5f:function e5f(d,e){this.a=d
this.b=e},
e5g:function e5g(d,e){this.a=d
this.b=e},
e5l:function e5l(d){this.a=d},
e5k:function e5k(d,e){this.a=d
this.b=e},
e5j:function e5j(){},
e5p:function e5p(d){this.a=d},
e5q:function e5q(d,e){this.a=d
this.b=e},
e5o:function e5o(d,e){this.a=d
this.b=e},
djm:function djm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bhx:function bhx(d,e,f){this.d=d
this.e=e
this.a=f},
adW:function adW(d,e,f){this.c=d
this.d=e
this.a=f},
bhv:function bhv(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bhA:function bhA(d,e,f,g,h){var _=this
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
e59:function e59(d,e){this.a=d
this.b=e},
e5a:function e5a(d){this.a=d},
e5b:function e5b(d){this.a=d},
e5c:function e5c(d){this.a=d},
e5d:function e5d(d){this.a=d},
a0Q:function a0Q(d){this.a=d},
bmQ:function bmQ(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e5r:function e5r(d,e){this.a=d
this.b=e},
b0x(d,e){return new C.b0w(d,e,null)},
b0w:function b0w(d,e,f){this.c=d
this.d=e
this.a=f},
ioZ(d){if(!(d!=null&&B.a.X(d,"ngmy:thumb:")))return null
return B.a.aY(d,11)},
iwD(d){return A.bU(B.L,null,new C.h0U(new C.ui(A.O(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hvT(d,e){return new C.auG(e,d,null)},
aT2(d,e,f,g,h,i,j){var w=C.ioZ(i)
if(w!=null)return A.bv(e,new A.a5(j,f,new C.a7E(w,!0,null),null),B.aq)
return A.aSn(e,B.bX,f,g,h,i,j)},
lR:function lR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7E:function a7E(d,e,f){this.c=d
this.d=e
this.a=f},
bmu:function bmu(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.ba$=e
_.c=_.a=null},
dRl:function dRl(d){this.a=d},
dRm:function dRm(){},
dRn:function dRn(d,e){this.a=d
this.b=e},
bmt:function bmt(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
h0U:function h0U(d){this.a=d},
h0T:function h0T(d,e){this.a=d
this.b=e},
h0S:function h0S(d,e){this.a=d
this.b=e},
h0R:function h0R(d,e){this.a=d
this.b=e},
auG:function auG(d,e,f){this.c=d
this.d=e
this.a=f},
cq8:function cq8(d,e){this.a=d
this.b=e},
aNW:function aNW(){},
iwo(d){var w=null
return A.cg(w,w,!0,w,new C.h0h(),d,w,!0,!0,x.e2)},
ixC(d,e,f,g,h){var w=null
return A.cg(w,w,!0,w,new C.h84(h,g,f,e),d,w,!0,!0,x.N)},
iwq(d,e){var w=null
return A.cg(w,w,!0,w,new C.h0l(e),d,w,!0,!0,x.dY)},
iwp(d){var w=null
return A.cg(w,w,!0,w,new C.h0k(),d,w,!0,!0,x.c5)},
aW_:function aW_(d,e){this.a=d
this.b=e},
aVZ:function aVZ(d){this.a=d},
aU0:function aU0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h0h:function h0h(){},
h84:function h84(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h0l:function h0l(d){this.a=d},
h0k:function h0k(){},
a_t:function a_t(d,e){this.c=d
this.a=e},
aAZ:function aAZ(){var _=this
_.d=$
_.c=_.a=_.e=null},
das:function das(d){this.a=d},
dat:function dat(d){this.a=d},
dar:function dar(d,e){this.a=d
this.b=e},
dau:function dau(d){this.a=d},
dav:function dav(d){this.a=d},
a_s:function a_s(d){this.a=d},
aAY:function aAY(){this.d=$
this.c=this.a=null},
dao:function dao(d){this.a=d},
dap:function dap(d){this.a=d},
daq:function daq(d){this.a=d},
ZZ:function ZZ(d){this.a=d},
azF:function azF(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cIw:function cIw(){},
cIC:function cIC(d){this.a=d},
cID:function cID(d){this.a=d},
cIE:function cIE(d){this.a=d},
cIB:function cIB(){},
cIF:function cIF(d){this.a=d},
cIG:function cIG(d){this.a=d},
cIA:function cIA(){},
cIH:function cIH(d,e){this.a=d
this.b=e},
cIz:function cIz(d,e){this.a=d
this.b=e},
cIx:function cIx(d,e){this.a=d
this.b=e},
cII:function cII(d){this.a=d},
cIy:function cIy(){},
cIJ:function cIJ(d){this.a=d},
a2C:function a2C(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bzj:function bzj(){this.d=$
this.c=this.a=null},
fp4:function fp4(d,e){this.a=d
this.b=e},
fp5:function fp5(d){this.a=d},
fp6:function fp6(d,e){this.a=d
this.b=e},
acX:function acX(d,e){this.a=d
this.b=e},
Gt:function Gt(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bzh:function bzh(d,e){var _=this
_.d=$
_.bv$=d
_.a9$=e
_.c=_.a=null},
fp2:function fp2(d,e){this.a=d
this.b=e},
azy:function azy(d,e){this.c=d
this.a=e},
bzi:function bzi(d,e){var _=this
_.d=$
_.bv$=d
_.a9$=e
_.c=_.a=null},
fp3:function fp3(d){this.a=d},
bzg:function bzg(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aQ3:function aQ3(){},
aQ4:function aQ4(){},
bGY(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.h.bf(u),s=B.o.D(B.h.S((u-t)*100),0,99),r=d<0?"-":"",q=A.os(B.o.v(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fZy(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cR(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cR(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cR(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b1(B.o.v(s),2,"0")
n.push(A.cR(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Zm(A.cR(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aSF(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aSF=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.i6().l8(85,1280,B.eR),$async$aSF)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fs(),$async$aSF)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hvS()
w=9
return A.b(C.cq7(q,r),$async$aSF)
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
aT0(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aT0=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.X(g,"ngmy:ws-thumb:")
if(i){u=C.cq4(g)
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
return A.b(A.Hp(p,!0,null,o).dc(0,B.h1),$async$aT0)
case 9:n=a1
w=10
return A.b(n.lc(),$async$aT0)
case 10:m=a1
w=11
return A.b(m.b.hk(B.he),$async$aT0)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eQ(B.dF.gaU(l))
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
return A.i($async$aT0,v)},
fZy:function fZy(){},
ui:function ui(d){this.a=d},
auF:function auF(d,e,f){this.c=d
this.d=e
this.a=f},
aHk:function aHk(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eXE:function eXE(d,e){this.a=d
this.b=e},
eXv:function eXv(d){this.a=d},
eXw:function eXw(d){this.a=d},
eXC:function eXC(d,e){this.a=d
this.b=e},
eXB:function eXB(d,e){this.a=d
this.b=e},
eXy:function eXy(d,e){this.a=d
this.b=e},
eXx:function eXx(d,e){this.a=d
this.b=e},
eXz:function eXz(d){this.a=d},
eXA:function eXA(d,e){this.a=d
this.b=e},
eXD:function eXD(d,e){this.a=d
this.b=e},
eXq:function eXq(d,e){this.a=d
this.b=e},
eXu:function eXu(d){this.a=d},
eXt:function eXt(d,e){this.a=d
this.b=e},
eXs:function eXs(d){this.a=d},
eXF:function eXF(d,e){this.a=d
this.b=e},
eXG:function eXG(d,e){this.a=d
this.b=e},
eXr:function eXr(d,e){this.a=d
this.b=e},
hJr(d,e,f){var w="thumbnailPath",v=e.aj()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
fZz(d,e,f){var w=0,v=A.j(x.N),u
var $async$fZz=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.W.av(C.hJr(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fZz,v)},
bH_(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bH_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fZz(!0,d,e),$async$bH_)
case 4:w=3
return A.b(r.auD(g,d,e.a),$async$bH_)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dV.aK(B.W.av(C.hJr(d,e,null),null))
u="NGMY_WS:"+B.kN.gco().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bH_,v)},
hAs(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hln(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d2(s,"NGMYWSSYNC2|"))return!0
if(J.d2(s,"NGMY_WS:"))return!0
if(J.eC(s,t))return!0
if(J.d2(s,"{"))try{w=B.W.aP(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
iup(d){var w,v,u,t=C.hAs(d)
if(t==null)return null
if(C.hln(t))return t
w=B.a.cj(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aY(t,w))
if(C.hln(v))return v}u=B.a.cj(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aY(t,u))
if(C.hln(v))return v}return null},
hlm(d){var w,v,u,t,s,r=null,q=B.a.i(d)
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
t=C.hfe(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bGZ(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bGZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.X(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.auC(t[1]),$async$bGZ)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hlm(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hlm(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGZ,v)},
hll(d){var w=B.o.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lC(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bGs(){var w=0,v=A.j(x.o),u,t
var $async$bGs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.HA(),$async$bGs)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hlm(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGs,v)},
hKC(d,e,f,g){return A.bU(B.L,null,new C.h7S(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h7S:function h7S(d,e,f){this.a=d
this.b=e
this.c=f},
af1:function af1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eXI:function eXI(d,e){this.a=d
this.b=e},
eXJ:function eXJ(d,e){this.a=d
this.b=e},
eXK:function eXK(d,e){this.a=d
this.b=e},
eXL:function eXL(d,e){this.a=d
this.b=e},
eXH:function eXH(d){this.a=d},
auz:function auz(d,e,f){this.c=d
this.d=e
this.a=f},
boc:function boc(){var _=this
_.c=_.a=_.e=_.d=null},
eXl:function eXl(d,e){this.a=d
this.b=e},
eXm:function eXm(d){this.a=d},
eXn:function eXn(d){this.a=d},
auE:function auE(d){this.a=d},
aHj:function aHj(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eXp:function eXp(d){this.a=d},
eXo:function eXo(d){this.a=d},
i2r(d,e,f,g,h){return new C.P8(h,g,d,e,f,null)},
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
eY7:function eY7(){},
eY3:function eY3(d,e){this.a=d
this.b=e},
eY4:function eY4(d){this.a=d},
eXP:function eXP(d){this.a=d},
eXN:function eXN(d){this.a=d},
eXO:function eXO(d){this.a=d},
eXY:function eXY(d,e){this.a=d
this.b=e},
eXV:function eXV(d,e){this.a=d
this.b=e},
eXW:function eXW(d,e){this.a=d
this.b=e},
eXX:function eXX(d,e,f){this.a=d
this.b=e
this.c=f},
eXT:function eXT(d,e,f){this.a=d
this.b=e
this.c=f},
eXR:function eXR(d){this.a=d},
eXS:function eXS(d){this.a=d},
eXU:function eXU(d){this.a=d},
eYa:function eYa(d){this.a=d},
eY9:function eY9(d){this.a=d},
eYb:function eYb(d){this.a=d},
eY8:function eY8(d){this.a=d},
eXM:function eXM(d){this.a=d},
eXQ:function eXQ(d,e){this.a=d
this.b=e},
eY6:function eY6(d,e){this.a=d
this.b=e},
eY5:function eY5(d,e){this.a=d
this.b=e},
eY0:function eY0(d){this.a=d},
eY1:function eY1(d){this.a=d},
eY2:function eY2(d,e){this.a=d
this.b=e},
eY_:function eY_(d,e){this.a=d
this.b=e},
eXZ:function eXZ(d,e,f){this.a=d
this.b=e
this.c=f},
bB4:function bB4(){},
B8(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ahA(d,e,f){return C.iiu(d,e,f)},
iiu(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ahA=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aG("String",e,f),$async$ahA)
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
return A.i($async$ahA,v)},
ahz(d,e){return C.iit(d,e)},
iit(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ahz=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ahz)
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
return A.i($async$ahz,v)},
ihj(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.TW(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bDP(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bDP=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b5i(q),$async$bDP)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aT0(q,!1),$async$bDP)
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
return A.i($async$bDP,v)},
hQP(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aI(d.h(0,"price")),o=p==null?null:p
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
hfe(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.de(s,x.f)
w=A.cF(w,new C.cHN(),w.$ti.k("M.E"),x.Q)
v=A.a4(w).k("Y<M.E>")
r=A.B(new A.Y(w,new C.cHO(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bj(J.k(t==null?"":t))
return new C.lC(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
imt(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wO
case"female":case"f":return D.oB
default:return D.zh}},
hFL(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hpN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.imt(v==null?j:J.k(v))
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
imv(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Pg
case"viewer":return D.kZ
default:return D.uV}},
imw(d){switch(d.a){case 1:return"editor"
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
if(v===D.Pg)return!0
v=d.e
return new A.N(v,A.hlt(),A.T(v).k("N<1,q>")).q(0,w)},
ilQ(d){return J.dH(d,new C.fJd()).gJ(0)},
h8D(d){var w=0,v=A.j(x.y),u,t
var $async$h8D=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bl(d),$async$h8D)
case 3:u=t.ro(f,new C.h8E(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h8D,v)},
bET(d,e){var w=0,v=A.j(x.H),u,t
var $async$bET=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bl(d),$async$bET)
case 3:t=g
if(J.ro(t,new C.fGI(e))){w=1
break}if(C.ilQ(t)>=2)throw A.W(A.bb("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bET,v)},
amE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.de(h,x.f)
w=A.cF(w,new C.bTU(),w.$ti.k("M.E"),x.P)
v=A.a4(w).k("Y<M.E>")
g=A.B(new A.Y(w,new C.bTV(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b9(u,new C.bTW(),x.N)
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
n=C.imv(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aT(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cu)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gP(f)
if(l.b(i))m.push(A.a1(i,k,j))}return new C.kZ(w,v,s,!r,t,g,q,p,o,n,m)},
hG_(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
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
return A.b(t.a7H(0),$async$DI)
case 5:w=6
return A.b(C.fwY(t,l),$async$DI)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gY(B.a.i(l.toLowerCase()))
q=t.a
p=J.a8(q)
o=A.aW(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hB3(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.p8(l,n),$async$DI)
case 11:u=n
w=1
break
case 10:case 8:m=A.aW(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gY(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hB3(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.p8(l,n),$async$DI)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DI,v)},
fwY(d,e){return C.ieF(d,e)},
ieF(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fwY=A.e(function(b0,b1){if(b0===1){s.push(b1)
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
break}k=C.hfe(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aW(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.B8(a9)+"_"+n))
i=C.ihj(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.X(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b5i(h),$async$fwY)
case 17:g=b1
if(g!=null){i=i.TW(g)
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
case 8:J.SX(q,new C.fwZ())
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
return A.i($async$fwY,v)},
bFm(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bFm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SO(d),$async$bFm)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DI(r),$async$bFm)
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
return A.i($async$bFm,v)},
hB3(d){var w,v,u,t
try{w=B.W.aP(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.de(w,x.f)
v=A.cF(v,new C.fsw(),v.$ti.k("M.E"),x.fA)
u=A.a4(v).k("Y<M.E>")
v=A.B(new A.Y(v,new C.fsx(),u),u.k("M.E"))
B.d.b0(v,new C.fsy())
return v}catch(t){v=A.a([],x.D)
return v}},
p8(d,e){return C.iwd(d,e)},
iwd(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$p8=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.SO(b2),$async$p8)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$p8)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.B8(a8)
p=A.aW(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b9(x.j.a(B.W.aP(0,p,null)),new C.h05(),a2).fF(0)
a2=J.b9(b3,new C.h06(),a2).c0(0,new C.h07())
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
return A.b(C.a9X(l),$async$p8)
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
return A.b(C.a9X(a5==null?null:J.k(a5)),$async$p8)
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
return A.b(C.ahz(r,"ngmy_worksheet_item_v3_"+C.B8(a8)+"_"+m),$async$p8)
case 29:w=30
return A.b(C.ahz(r,"ngmy_worksheet_thumb_v3_"+C.B8(a8)+"_"+m),$async$p8)
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
return A.b(C.bDP(h),$async$p8)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ahA(r,"ngmy_worksheet_thumb_v3_"+C.B8(a8)+"_"+a4,f),$async$p8)
case 40:g=i.TW(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ahz(r,"ngmy_worksheet_thumb_v3_"+C.B8(a8)+"_"+a4),$async$p8)
case 41:g=i.TW(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ahz(r,"ngmy_worksheet_thumb_v3_"+C.B8(a8)+"_"+a4),$async$p8)
case 42:case 34:a4=i.a
w=43
return A.b(C.ahA(r,"ngmy_worksheet_item_v3_"+C.B8(a8)+"_"+a4,B.W.av(g.aj(),null)),$async$p8)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.c4(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ahA(r,"ngmy_worksheets_index_v3_"+C.B8(a8),B.W.av(q,null)),$async$p8)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eN(b3,new C.h08(q))
a4=a3.$ti.k("cM<1,ac<q,@>>")
a7=A.B(new A.cM(a3,new C.h09(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ahA(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gY(B.a.i(a8.toLowerCase()))),B.W.av(a0,null)),$async$p8)
case 45:w=46
return A.b(J.hPU(r),$async$p8)
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
return A.i($async$p8,v)},
Mj(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Mj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DI(d),$async$Mj)
case 3:t=g
s=J.cE(t)
r=s.bk(t,new C.h8C(e))
if(r===-1)s.ca(t,0,e)
else s.n(t,r,e)
u=C.p8(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Mj,v)},
bF8(d,e){var w=0,v=A.j(x.H),u
var $async$bF8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DI(d),$async$bF8)
case 2:u=g
J.mW(u,new C.fJH(e))
w=3
return A.b(C.p8(d,u),$async$bF8)
case 3:return A.h(null,v)}})
return A.i($async$bF8,v)},
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
j=A.cF(j,new C.fMV(),j.$ti.k("M.E"),x.k)
s=A.a4(j).k("Y<M.E>")
r=A.B(new A.Y(j,new C.fMW(),s),s.k("M.E"))
B.d.b0(r,new C.fMX())
k=r}}catch(h){}w=4
return A.b(C.fth(d),$async$Hs)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.if1(k,p,d)
j=A.T(o)
s=j.k("N<1,ac<q,@>>")
s=A.B(new A.N(o,new C.fMY(),s),s.k("ak.E"))
n=B.W.av(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.RV(d,o),$async$Hs)
case 7:case 6:j=j.k("Y<1>")
m=A.B(new A.Y(o,new C.fMZ(d),j),j.k("M.E"))
if(m.length!==0)C.aRu(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Hs,v)},
h_S(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$h_S=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RV(d,e),$async$h_S)
case 3:t=J.dH(e,new C.h_T(d))
s=A.B(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aRu(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h_S,v)},
a4h(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a4h=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a4h)
case 2:n=g
m=B.a.gY(B.a.i(d.toLowerCase()))
l=A.aW(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.W.aP(0,l,null)
if(x.j.b(u)){m=J.de(u,x.f)
m=A.cF(m,new C.h8x(),m.$ti.k("M.E"),x.k)
t=A.a4(m).k("Y<M.E>")
s=A.B(new A.Y(m,new C.h8y(),t),t.k("M.E"))
o=s}}catch(k){}q=J.oy(o,new C.h8z(e))
if(B.a.i(e.x).length===0&&C.ux(e,d)){m=B.a.i(d.toLowerCase())
p=e.aGJ(e.y===D.kZ?D.kZ:D.uV,m)}else p=e
if(q===-1)J.mV(o,0,p)
else J.aJ(o,q,p)
w=3
return A.b(C.RV(d,o),$async$a4h)
case 3:w=C.ux(p,d)?4:5
break
case 4:w=6
return A.b(C.aRt(C.Hq(p,d),p),$async$a4h)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a4h,v)},
aRG(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aRG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Hs(d),$async$aRG)
case 2:u=g
t=J.cE(u)
s=A.nw(t.eN(u,new C.fJo(e)))
t.bq(u,new C.fJp(e))
w=3
return A.b(C.RV(d,u),$async$aRG)
case 3:w=s!=null&&C.aRI(s,d)?4:5
break
case 4:w=6
return A.b(C.fsA(e),$async$aRG)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aRG,v)},
ajm(d){var w=d.f,v=A.T(w).k("Y<1>")
w=A.B(new A.Y(w,new C.h8I(),v),v.k("M.E"))
return w},
hiN(d,e){var w,v=d.f,u=A.nw(new A.Y(v,new C.fIT(e),A.T(v).k("Y<1>")))
v=C.ajm(d)
w=A.T(v).k("Y<1>")
v=A.B(new A.Y(v,new C.fIU(e,u),w),w.k("M.E"))
B.d.b0(v,new C.fIV())
return v},
imz(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hKG(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bk(C.hiN(d,u),new C.h85(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
io2(d,e){var w
if(e==null||e.length===0)return 1
w=C.hiN(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fNM(),A.T(w).k("N<1,H>")).f0(0,B.yd)+1},
iw6(d){var w,v=C.ajm(d)
if(v.length===0)return null
w=new A.Y(v,new C.h_M(),A.T(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
imu(d){return A.J(["id",d.a,"name",d.b,"gender",C.hFL(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
inY(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.S(a0,x.P)
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
return a2.cR6(a1,w,a3.d,a2.y,s,a0,v)},
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
p=A.cF(p,new C.fMS(),p.$ti.k("M.E"),x.k)
s=A.a4(p).k("Y<M.E>")
p=A.B(new A.Y(p,new C.fMT(),s),s.k("M.E"))
B.d.b0(p,new C.fMU())
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
b0=a9.bk(a8,new C.h_H(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bET(b1,b2),$async$aj4)
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
u=t.cR8(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.RV(b1,a8),$async$aj4)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aRt(B.a.i(b3.toLowerCase()),u),$async$aj4)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aj4,v)},
hBt(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("N<1,ac<q,@>>"),k=A.B(new A.N(m,C.hJL(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hBu(d,e){var w=new A.V(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("N<1,ac<q,@>>")
u=A.B(new A.N(u,C.hJL(),t),t.k("ak.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
icz(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a8(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.amE(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hlt(),A.T(j).k("N<1,q>")).c0(0,new C.ft4())
t=A.B(j,j.$ti.k("M.E"))
if(u===v)s=D.uV
else s=B.d.q(t,u)?D.Pg:D.kZ
return w.aGJ(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.amE(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.de(q,h)
h=A.cF(h,new C.ft5(),h.$ti.k("M.E"),x.P)
p=A.a4(h).k("Y<M.E>")
o=A.B(new A.Y(h,new C.ft6(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b9(n,new C.ft7(),x.N).c0(0,new C.ft8())
t=A.B(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.uV
else s=B.d.q(t,u)?D.Pg:D.kZ
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
fth(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fth=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.ftl()
h=x.N
g=x.z
w=7
return A.b(A.ic(A.a([A.lF("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.lF("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.lF("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fth)
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
h=A.cF(new A.b8(l,h),new C.fti(a0),h.k("M.E"),x.k)
l=A.a4(h).k("Y<M.E>")
l=A.B(new A.Y(h,new C.ftj(),l),l.k("M.E"))
B.d.b0(l,new C.ftk())
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
return A.i($async$fth,v)},
if1(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a8(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dO(e,new C.fxG(),v).c0(0,new C.fxH())
t=A.d_(u,u.$ti.k("M.E"))
s=A.S(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Hq(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kZ){m=q.e
m=!new A.N(m,A.hlt(),A.T(m).k("N<1,q>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gP(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.inY(l,v)
o=C.Hq(k,w)
p=v.d
s.n(0,u,o===w?k.bg5(p,D.uV):k.bg5(p,v.y))}j=s.$ti.k("b8<2>")
j=A.B(new A.b8(s,j),j.k("M.E"))
B.d.b0(j,new C.fxI())
return j},
RV(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$RV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$RV)
case 2:u=g
t=B.a.gY(B.a.i(d.toLowerCase()))
s=J.b9(e,new C.fAG(),x.a)
s=A.B(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aG("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.W.av(s,null)),$async$RV)
case 3:return A.h(null,v)}})
return A.i($async$RV,v)},
aRt(d,e){return C.ikh(d,e)},
ikh(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aRt=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.m7("family_trees",A.a([C.hBt(e,d)],p),null,B.cR),$async$aRt)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.m7("family_trees",A.a([C.hBu(e,d)],p),null,B.cR),$async$aRt)
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
aRu(d,e){return C.iki(d,e)},
iki(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aRu=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("N<1,ac<q,@>>")
m=n.k("ak.E")
l=A.B(new A.N(e,new C.fFX(d),n),m)
r=l
w=7
return A.b(A.m7("family_trees",r,null,B.cR),$async$aRu)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.N(e,new C.fFY(d),n),m)
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
fsA(d){return C.ibO(d)},
ibO(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fsA=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Sl("family_trees",A.J(["id",d],x.N,x.z),null,B.cR),$async$fsA)
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
return A.i($async$fsA,v)},
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
cHQ:function cHQ(){},
cHP:function cHP(){},
cHN:function cHN(){},
cHO:function cHO(){},
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
fJd:function fJd(){},
h8E:function h8E(d){this.a=d},
fGI:function fGI(d){this.a=d},
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
bTY:function bTY(){},
bTX:function bTX(){},
bTU:function bTU(){},
bTV:function bTV(){},
bTW:function bTW(){},
fwZ:function fwZ(){},
fsw:function fsw(){},
fsx:function fsx(){},
fsy:function fsy(){},
h05:function h05(){},
h06:function h06(){},
h07:function h07(){},
h08:function h08(d){this.a=d},
h09:function h09(){},
h8C:function h8C(d){this.a=d},
fJH:function fJH(d){this.a=d},
fMV:function fMV(){},
fMW:function fMW(){},
fMX:function fMX(){},
fMY:function fMY(){},
fMZ:function fMZ(d){this.a=d},
h_T:function h_T(d){this.a=d},
h8x:function h8x(){},
h8y:function h8y(){},
h8z:function h8z(d){this.a=d},
fJo:function fJo(d){this.a=d},
fJp:function fJp(d){this.a=d},
h8I:function h8I(){},
fIT:function fIT(d){this.a=d},
fIU:function fIU(d,e){this.a=d
this.b=e},
fIV:function fIV(){},
h85:function h85(d){this.a=d},
fNM:function fNM(){},
h_M:function h_M(){},
fMS:function fMS(){},
fMT:function fMT(){},
fMU:function fMU(){},
h_H:function h_H(d){this.a=d},
ft4:function ft4(){},
ft5:function ft5(){},
ft6:function ft6(){},
ft7:function ft7(){},
ft8:function ft8(){},
ftl:function ftl(){},
ftm:function ftm(d){this.a=d},
fti:function fti(d){this.a=d},
ftj:function ftj(){},
ftk:function ftk(){},
fxG:function fxG(){},
fxH:function fxH(){},
fxI:function fxI(){},
fAG:function fAG(){},
fFX:function fFX(d){this.a=d},
fFY:function fFY(d){this.a=d},
cHR:function cHR(d,e){this.a=d
this.b=e},
cHS:function cHS(d,e){this.a=d
this.b=e},
aJs:function aJs(d,e,f){this.a=d
this.b=e
this.c=f},
bbB:function bbB(){this.b=this.a=0},
bbA:function bbA(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bzk:function bzk(){},
xo(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gce()+"/"+w.gcv()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.b1(B.o.v(w.gnB()),2,"0")+":"+B.a.b1(B.o.v(w.gGY()),2,"0")},
ilm(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
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
a5.ah(g,g.a5(0,new A.r(s,a7*0.17)),A.ahy(B.rZ,t))
s=g.a5(0,new A.r(s,a7*0.18))
q=A.L()
q.r=B.rZ.gp(0)
a5.O(s,r,q)
e=-2.5+b3*0.5
d=f.a5(0,new A.r(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,A.ahy(B.rZ,t))
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
a5.O(new A.r(0+n*0.62,w),u,m)}a5.cQ(A.bX(a0.a5(0,new A.r(0,a1*0.5)).aJ(0,new A.r(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,A.ahy(B.bq,1.8))
a4.restore()},
i2o(){var w,v=$.ou(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.hh(u)},
auA(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$auA=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ca(),$async$auA)
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
auB(d){return C.i2p(d)},
i2p(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$auB=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ca(),$async$auB)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hP("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cR,null),$async$auB)
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
return A.b(A.ca(),$async$auD)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.i2o()
w=4
return A.b(C.auA(),$async$auD)
case 4:r=h
q=B.a.i(e)
p=B.dV.aK(t)
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
return A.b(A.ca(),$async$auC)
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
hvS(){var w=new A.V(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cT.aw(999999)},
i2q(d){var w,v,u,t,s,r,q
try{w=A.Bj(d)
if(w==null)return d
v=w
if(J.Mp(v)>960||J.Mo(v)>960){s=v
r=J.Mp(v)>=J.Mo(v)?960:null
v=A.Sf(s,J.Mo(v)>J.Mp(v)?960:null,B.Is,r)}s=v
u=A.IU(82).zy(s,B.r_)
if(J.ad(u)===0)return d
s=new Uint8Array(A.c9(u))
return s}catch(q){t=A.aa(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
cq7(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cq7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.i2q(e)
$.cq3.n(0,s,t)
u=C.bH1(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cq7,v)},
b5i(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b5i=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d2(l,"data:image")){u=null
w=1
break}t=4
r=J.eC(l,",")?B.d.gal(J.lI(l,",")):l
q=B.cD.aK(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hvS()
w=7
return A.b(C.cq7(p,q),$async$b5i)
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
return A.i($async$b5i,v)},
cq4(d){var w=0,v=A.j(x.T),u,t,s
var $async$cq4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.X(s,"data:image")){u=s
w=1
break}w=3
return A.b(A.cq6(s),$async$cq4)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cL.gco().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cq4,v)},
a9X(d){var w=0,v=A.j(x.H),u,t
var $async$a9X=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=A.hJs(d)
if(t==null){w=1
break}$.cq3.W(0,t)
w=3
return A.b(C.bH0(t),$async$a9X)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9X,v)},
bH1(d,e){return C.ius(d,e)},
ius(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bH1=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aQi
w=7
return A.b(n==null?$.aQi=A.hhD():n,$async$bH1)
case 7:r=g
q=new Uint8Array(A.c9(e))
p=J.mc(r,"thumbs","readwrite")
B.iG.mi(J.mb(p,"thumbs"),q,l)
w=8
return A.b(J.ox(p),$async$bH1)
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
return A.i($async$bH1,v)},
bH0(d){return C.iuq(d)},
iuq(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bH0=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aQi
w=7
return A.b(o==null?$.aQi=A.hhD():o,$async$bH0)
case 7:r=f
q=J.mc(r,"thumbs","readwrite")
B.iG.Gx(J.mb(q,"thumbs"),m)
w=8
return A.b(J.ox(q),$async$bH0)
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
return A.i($async$bH0,v)}},D,M,T,U,V,F,W,N,O,P,X,Q,Y,R,Z,K,G,A_,A0,L
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
C.b0y.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bkq(),f=h.x!=null&&h.zT(i).length===0
if(h.x!=null)w=f?B.b3:B.bC
else w=h.gUX()?B.bC:B.e5
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.l(22)
t=A.K(D.brs,B.r,1)
s=x.p
r=A.o(i,A.x(A.a([A.o(i,D.fjh,B.f,i,i,new A.n(B.b3.j(0.12),i,i,A.l(999),i,i,B.n),i,i,i,i,B.hn,i,i,i),B.U,D.fPq,B.aw,A.d(C.xo(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fL0,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,D.b92,i,i,i,i,B.OP,i,i,i)
q=A.l(16)
p=A.K(B.bm,B.r,1)
o=A.K(B.b3.j(0.28),B.r,1)
n=A.hjU(h.d)
o=A.o(B.A,C.b0x(A.fQ7(h.e,n),30),B.f,i,i,new A.n(B.mb,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fFX,B.K,i,i)
m=A.l(14)
l=A.K(B.bm,B.r,1)
q=A.o(i,A.x(A.a([o,B.P,n,B.bF,D.fPJ,B.af,A.o(i,A.x(A.a([D.h4Y,B.bF,A.d(A.Bn(h.c),i,i,i,i,i,i,D.fAy,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fh,i,i,1/0)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.aS,i,p,q,i,i,B.n),i,i,i,i,G.an7,i,i,i)
p=A.l(16)
m=A.K(B.bm,B.r,1)
l=j.aTR("Original due",C.xo(h.r,!1))
n=j.aTR("Current due",C.xo(h.f,!1))
o=w.j(0.1)
k=A.l(12)
p=A.a([q,B.U,A.o(i,A.x(A.a([l,B.P,n,B.U,A.o(i,A.d(h.gaNP(),i,i,i,i,i,i,A.m(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.n(o,i,i,k,i,i,B.n),i,i,i,i,B.CB,i,i,1/0),B.U,j.clN(),B.P,j.c8l(g,f)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bl,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.l(14)
n=A.K(B.bm,B.r,1)
B.d.u(p,A.a([B.U,A.o(i,A.x(A.a([D.fQH,B.aw,A.d(q,i,i,i,i,i,i,D.fF9,i,i,i)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.aS,i,n,o,i,i,B.n),i,i,i,i,B.bl,i,i,1/0)],s))}if(h.gaIp()){q=A.l(14)
o=A.K(B.cA,B.r,1.6)
B.d.u(p,A.a([B.U,A.o(i,A.x(A.a([D.h6g,B.P,A.bv(A.l(12),A.eb(new A.a5(1/0,88,A.b3(i,i,i,new A.Xq(h.ax,B.a_,D.fo4,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.c,i,o,q,i,i,B.n),i,i,i,i,B.CD,i,i,i)],s))}p.push(B.aB)
p.push(D.fZ5)
return A.o(i,A.x(A.a([r,new A.D(B.a1i,A.x(p,B.al,i,B.e,B.i,0,B.p),i)],s),B.al,i,B.e,B.N,0,B.p),B.aq,i,i,new A.n(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aTR(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.acz,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fBB,w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
clN(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aaY(B.e5,u,"Not paid yet")
w=t.zT(null).length
v=w===0?B.b3:B.bC
return this.aaY(v,u,C.xo(t.x,!0))},
c8l(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aaY(B.b3,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aaY(B.b3,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.acz,u,u,u)
v=A.T(d).k("N<1,h8>")
v=A.B(new A.N(d,new C.c9i(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.c_(B.bI,v,B.br,u,6,6)],x.p),B.E,u,B.e,B.i,0,B.p)},
aaY(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.acz,w,w,w),1),new A.df(1,B.cl,A.d(f,w,w,w,w,w,w,A.m(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e2,w,w),w)],x.p),B.E,w,B.e,B.i,0,w,w)}}
C.bdO.prototype={
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
break}t.m(new C.dSd(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Jx,v)},
aVP(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.m(v,v,u?B.bu:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.l(10)
u=(this.a.d.a?B.bu:B.bh).j(0.22)
w=A.l(10)
return A.bA(v,new A.b6(4,r,new A.ax(u,1,B.r,-1)),v,B.bl,v,v,v,v,!0,new A.b6(4,w,new A.ax((this.a.d.a?B.bu:B.bh).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.l(10),D.b6G),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aVO(d){return this.aVP(d,null)},
Qs(d){return this.cpv(d)},
cpv(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qs=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Ir:B.eR
w=7
return A.b(new A.i6().D_(72,900,900,n),$async$Qs)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fs(),$async$Qs)
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
return A.i($async$Qs,v)},
b44(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.l(10),n=A.K((q?B.bu:B.bh).j(0.18),B.r,1)
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
return A.o(r,A.A(q,B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.n(p,r,n,o,r,r,B.n),r,r,r,B.jK,D.bEE,r,r,r)},
DS(d){return this.bED(d)},
bEC(){return this.DS(null)},
bED(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DS=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
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
i=a3?null:A.hjU(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xo?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hQ(B.w.j(0.55),!0,"Dismiss",a4,new C.dRX(),new C.dRY(a2,t,a5,r,new C.dRZ(a2,t),o,n,j),B.eH,!0,x.y),$async$DS)
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
break}if(f.length===0||e<=0){t.c.K(x.q).f.U(D.fuF)
w=1
break}a0=a2.d
if(a0==null){t.c.K(x.q).f.U(D.ftj)
w=1
break}a1=A.fQ7(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xo?"male":"female"
w=7
return A.b(A.ajl(a3,A.hst(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DS)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xo?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c0(a3.gck(),a3.gce(),a3.gcv(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c0(a4.gck(),a4.gce(),a4.gcv(),0,0,0,0,0)))a5.cTt(a2.a)
w=8
return A.b(A.ajl(t.a.c,a5),$async$DS)
case 8:case 5:w=9
return A.b(t.Jx(),$async$DS)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DS,v)},
aWu(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cX.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.l(12)
u=A.l(12)
t=A.l(12)
if(g)s=B.cX
else s=(this.a.d.a?B.bu:B.bh).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b0x(d,18)
if(g)q=B.cX
else q=this.a.d.a?B.aS:B.av
return A.aE(!1,B.a3,!0,v,A.aM(!1,u,!0,A.o(p,A.A(A.a([r,B.bn,A.d(e,p,p,p,p,p,p,A.m(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.b9,B.i,0,p,p),B.f,p,p,new A.n(p,p,s,t,p,p,B.n),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.aj)},
Te(d){return this.cHs(d)},
cHs(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Te=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hQ(B.w.j(0.55),!0,"Dismiss",s,new C.dSg(),new C.dSh(t,d),B.ha,!0,x.y),$async$Te)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.ajl(t.a.c,d),$async$Te)
case 7:w=8
return A.b(t.Jx(),$async$Te)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Te,v)},
Qr(d,e){return this.bPB(0,e)},
bPB(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lm(s,"Cancel","Delete",e.b+" \xb7 "+A.Bn(e.c)+" will be removed from this device.","Delete this debt?"),$async$Qr)
case 3:if(!g){w=1
break}w=4
return A.b(C.fJv(t.a.c,e.a),$async$Qr)
case 4:w=5
return A.b(t.Jx(),$async$Qr)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qr,v)},
agP(d){return this.cjd(d)},
cjd(d){var w=0,v=A.j(x.H),u=this,t
var $async$agP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.L,null,new C.dSa(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$agP)
case 2:return A.h(null,v)}})
return A.i($async$agP,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.ezo
w=J.dH(m.d,new C.dSi())
v=A.B(w,w.$ti.k("M.E"))
w=J.dH(m.d,new C.dSj())
u=A.B(w,w.$ti.k("M.E"))
t=B.d.cC(v,0,new C.dSk())
w=A.l(18)
s=m.a.d.a
r=s?D.cF8:D.aE9
q=A.K(s?B.cX.j(0.35):B.cX.j(0.18),B.r,1)
s=A.o(l,D.c5D,B.f,l,l,new A.n(B.cX.j(m.a.d.a?0.28:0.14),l,l,A.l(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.as,A.E(A.d("Cashier",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.av,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aE(!1,B.a3,!0,A.l(12),A.aM(!1,A.l(12),!0,D.eyK,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dSl(m),l,l,l,l,l,l,l),B.f,B.cX,0,l,l,l,l,l,B.aj)],p),B.l,l,B.e,B.i,0,l,l)
o=A.E(m.cDu("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bn(t)
r=A.a([A.o(l,A.x(A.a([s,B.af,A.A(A.a([o,B.ae,A.E(m.bag(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.n(l,l,q,w,l,new A.a7(B.ay,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.an4,l,l,l),B.aB],p)
if(J.ct(m.d)){w=m.a.d.a
s=w?B.ef:B.c
q=A.l(18)
o=A.K((w?B.bu:B.bh).j(0.12),B.r,1)
n=A.o(l,D.c0d,B.f,l,l,new A.n(B.cX.j(0.12),l,l,A.l(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.av,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.o(l,A.x(A.a([n,B.af,w,B.aw,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bu:B.bh,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.i,0,B.p),B.f,l,l,new A.n(s,l,o,q,l,l,B.n),l,l,l,l,D.bHl,l,l,1/0))}else{w=m.gcoK()
s=A.B(new A.N(v,w,A.T(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bJ1,A.d("Paid",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bu:B.bh,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.N(u,w,A.T(u).k("N<1,v>")))
B.d.u(s,q)}B.d.u(r,s)}return A.x(r,B.al,l,B.e,B.i,0,B.p)},
bag(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.l(14),r=A.K((v.a.d.a?B.bu:B.bh).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.m(u,u,v.a.d.a?B.bu:B.bh,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cX
else w=v.a.d.a?B.aS:B.av
return A.o(u,A.x(A.a([q,B.bF,A.d(f,u,1,B.a2,u,u,u,A.m(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.i,0,B.p),B.f,u,u,new A.n(t,u,r,s,u,u,B.n),u,u,u,u,B.ez,u,u,u)},
cDu(d,e){return this.bag(!1,d,e)},
coL(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zT(j).length,h=d.bjG()
if(d.x!=null){w=d.zT(j).length
v=w===0?B.cX:B.bC}else if(d.gUX())v=B.bC
else{if(h)w=B.cX
else w=k.a.d.a?B.bu:B.bh
v=w}if(d.x!=null){w=d.zT(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xo(u,!1)}else{u.toString
t="Paid "+C.xo(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xo(w,!1)+" \xb7 "+i+" missed":"Due "+C.xo(w,!1)}w=k.a.d.a?B.ef:B.c
u=A.l(18)
if(d.gUX()&&d.x==null)s=B.bC.j(0.35)
else s=(k.a.d.a?B.bu:B.bh).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ab(0,B.G,B.w.j(0.04),B.cM,12)],x.V)
q=A.l(18)
p=k.a.d.a?B.bs:B.mb
o=A.K(d.gUX()&&d.x==null?B.bC.j(0.45):B.cX.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hjU(d.d)
o=A.o(B.A,A.d0(C.b0x(A.fQ7(d.e,m),24),n),B.f,j,j,new A.n(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.av
m=x.p
n=A.a([new A.df(1,B.cl,A.d(p,j,1,B.a2,j,j,j,A.m(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaIp())B.d.u(n,A.a([B.e7,A.X(B.PH,B.cX.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.i,0,j,j),B.cS,A.d(t,j,1,B.a2,j,j,j,A.m(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.i,0,B.p),1)
n=A.Bn(d.c)
l=k.a.d.a?B.aS:B.av
n=A.d(n,j,j,j,j,j,j,A.m(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.o(j,A.aE(!1,B.a3,!0,j,A.aM(!1,q,!0,new A.D(T.amT,A.A(A.a([o,B.bc,p,B.ae,A.x(A.a([n,B.bF,A.X(B.eI,(k.a.d.a?B.bu:B.bh).j(0.5),j,j,j,18)],m),B.dO,j,B.e,B.i,0,B.p)],m),B.l,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dSc(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.aj),B.f,j,j,new A.n(w,j,s,u,r,j,B.n),j,j,j,B.da,j,j,j,j)}}
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
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.m(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aAh,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.Ht,A.d(k,a0,a0,a0,a0,a0,a0,A.m(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.du(B.dI,m,B.f,A.A(l,B.l,a0,B.e,B.N,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bDQ,A.d(v,a0,1,B.a2,a0,a0,a0,A.m(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cK:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fv,A.x(a2,u,a0,B.e,B.N,0,B.p),a0),1))
n.push(D.foU)
a2=A.a([A.A(n,B.l,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.D(B.wE,A.o(a0,a0,B.f,a0,a0,new A.n(a0,a0,a0,a0,a0,new A.a7(B.a5,B.a9,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lS,A.x(a2,B.l,a0,B.e,B.N,0,B.p),a0)
if(a1.z){a2=A.l(t?9:19)
e=A.o(a0,e,B.f,a0,a0,new A.n(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hB,a0,a0,a0,a0)}return A.o(a0,e,B.f,a0,a0,new A.n(a0,a0,q,s,p,new A.a7(B.ay,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bF9,a0,a0,a0,a0)}}
C.aXg.prototype={
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
T(){return new C.bhq()}}
C.bhq.prototype={
gc35(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aD(d,n,x.w).w,l=x.p,k=A.a([D.ezj,D.ezp],l)
for(w=0;w<8;++w){v=D.a5H[w]
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
k.push(A.ay(n,new A.D(B.eQ,A.x(A.a([new A.D(B.n2,new A.c8(B.aM,B.e,B.i,B.l,n,B.p,n,0,r,n),n),A.o(n,new A.dn(!0,new C.amr(v,q.d,q.e,new C.dhT(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dhU(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bFw,A.bJ(D.hbP,n,new C.dhV(o,d),A.bp(B.b8,n,n,n,n,B.p3,n,n,new A.ba(A.l(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cN(new A.aY(0,1/0,0,m.a.b*0.9),A.cv(k,n,n,D.bJV,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nt.prototype={
aj(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bgh(d,e,f){return new C.nt(this.a,e,d,f)}}
C.Ix.prototype={
x8(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Ix(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aGx(d){var w=null
return this.x8(w,w,w,w,w,d,w,w,w,w,w,w)},
cP5(d){var w=null
return this.x8(w,w,w,w,d,w,w,w,w,w,w,w)},
bgf(d,e,f){var w=null
return this.x8(d,w,w,w,w,w,w,w,e,w,f,w)},
cPK(d){var w=null
return this.x8(w,w,w,w,w,w,d,w,w,w,w,w)},
cPT(d){var w=null
return this.x8(w,w,w,w,w,w,w,w,w,d,w,w)},
cP3(d){var w=null
return this.x8(w,w,w,d,w,w,w,w,w,w,w,w)},
cPV(d){var w=null
return this.x8(w,w,w,w,w,w,w,w,w,w,w,d)},
cP0(d){var w=null
return this.x8(w,w,d,w,w,w,w,w,w,w,w,w)},
cOW(d){var w=null
return this.x8(w,d,w,w,w,w,w,w,w,w,w,w)},
Gp(d){var w=null
return this.x8(w,w,w,w,w,w,w,d,w,w,w,w)},
cQ2(d,e,f,g,h,i,j,k,l,m,n){return this.x8(d,e,f,g,null,h,i,j,k,l,m,n)},
aj(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cMz(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bSF(d),k=A.aI(d.h(0,"emblem")),j=k==null?o:B.h.M(k),i=A.aI(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Ef.gew(D.Ef))
s=i==null?o:B.h.D(i,18,36)
r=l.$2("position",D.a7p)
q=l.$2("frame",D.a6J)
l=l.$2("texture",D.a6F)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cQ2(p,u,t,q,r,A.ri(d.h(0,"ribbon"))?A.H2(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_R.prototype={
T(){return new C.aCe(A.a([],x.I),D.Pf)},
ge3(){return this.c}}
C.aCe.prototype={
Z(){var w,v=this
v.a3()
v.f=A.Ag(0,1)
w=$.aw()
v.z=new A.at(B.ax,w)
v.Q=new A.at(B.ax,w)
v.lh()
w=v.a
C.bFi(w.c,w.d).bF(new C.diz(v),x.fL)},
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
lh(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LR(s.c,s.d),$async$lh)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.din(t,r))
t.aye()
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
gauN(){var w,v=this
if(!J.ct(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
aye(){var w,v,u=this.gauN(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.sb4(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.sb4(0,w==null?"":w)},
chC(d){this.m(new C.dik(this,d))
this.aye()},
Ok(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ok=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nt(B.o.v(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aTo(r.c,r.d,s),$async$Ok)
case 3:w=4
return A.b(t.lh(),$async$Ok)
case 4:if(t.c==null||J.ct(t.d)){w=1
break}q=J.oy(t.d,new C.dhW(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dhX(t,p))
t.aye()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.BY(p+1,B.ck,B.kW),$async$Ok)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Ok,v)},
BC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$BC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gauN()
s=s==null?null:s.a
if(s==null)s=B.o.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aTo(o.c,o.d,new C.nt(s,r,q,new A.V(p,0,!1))),$async$BC)
case 3:w=4
return A.b(t.lh(),$async$BC)
case 4:if(t.c==null){w=1
break}t.m(new C.dio(t))
case 1:return A.h(u,v)}})
return A.i($async$BC,v)},
P1(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$P1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gauN()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.di4(r),s,null,!0,!0,x.y),$async$P1)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bF2(s.c,s.d,r.a),$async$P1)
case 4:t.m(new C.di5(t))
w=5
return A.b(t.lh(),$async$P1)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.V_(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$P1,v)},
ze(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$ze=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BC(),$async$ze)
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
return A.b(C.Sd(s,r.r,o,p,q),$async$ze)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hKe(s,r.x,r.r),$async$ze)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LR(s.c,s.d),$async$ze)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.nt(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Bw(r.c,r.d,l),$async$ze)
case 11:w=12
return A.b(t.lh(),$async$ze)
case 12:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$ze,v)},
a20(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a20=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BC(),$async$a20)
case 5:case 4:if(t.c==null){w=1
break}s=t.gzc(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dM(D.A7,new C.dil(t),new C.dim())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new A.o2("Our Family",o,"",""))
for(o=J.aT(t.d);o.C();){n=o.gP(o)
p.push(new A.o2(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(A.hlK(o,new A.tP(s,r,"",p,new A.v8(q.d,null,null,null,null,"","","")),null),$async$a20)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a20,v)},
OK(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$OK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BC(),$async$OK)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.ahO,null,new C.di0(t),s,!0,!0,!0,E.aaI,!1,!1,x.N),$async$OK)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cP5(r)
t.m(new C.di1(t,q))
s=t.a
w=7
return A.b(C.SR(s.c,s.d,q),$async$OK)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OK,v)},
Yg(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.ahO,null,new C.di6(t),r,!0,!0,!0,E.aaI,!1,!1,x.e),$async$Yg)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.di7(t,s))
r=t.a
w=4
return A.b(C.SR(r.c,r.d,s),$async$Yg)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.BY(0,B.e6,B.n0)
case 1:return A.h(u,v)}})
return A.i($async$Yg,v)},
bVg(d){var w=d.bU(),v=B.a.b1(B.o.v(w.gce()),2,"0"),u=B.a.b1(B.o.v(w.gcv()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gzc(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c2j()
if(r.e)w=D.agt
else if(J.ct(r.d)){w=r.y
v=r.gzc(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fzU,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(H.aob,new C.a_7(w,v,0,q),q),q),B.bx,t,B.am,A.d(u,q,q,q,q,q,q,A.m(q,q,D.kR.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.ay(q,A.o(q,D.fj3,B.f,q,q,new A.n(q,q,q,A.l(18),A.a([new A.ab(0,B.G,B.dS.j(0.45),B.J,18)],x.V),B.xe,B.n),q,q,q,q,B.OT,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcLB(),q,q,q,q,q,q,!1,B.a4))
w.push(B.U)
w.push(A.ht(D.bXh,D.hbh,r.gaPw(),q))
B.d.u(u,w)}w=A.as(A.cc(A.x(u,B.l,q,B.e,B.N,0,B.p),B.t,q,B.y,q,q,B.eA,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.m(q,q,D.kR.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.e0:B.BI
u=A.x(A.a([new A.D(D.bGB,w,q),A.E(A.JU(v,new C.dix(r),J.ad(r.d)+1,q,r.gchB(),u,B.aM),1),r.bHx()],x.p),B.l,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c5(q,D.a_2,new A.an(B.a0,q,B.b1,B.t,A.a([D.aRL,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c2j(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KU(B.e9,"AI",h.gbFp(),!0))
if(h.a.f)f.push(new C.KU(B.lU,"Cover",h.gbQa(),!1))
if(h.a.f)f.push(new C.KU(B.x6,"Header",h.gbL7(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KU(B.vc,"Print",h.gcqP(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.hc:B.jc
t=v?"Save":"Edit"
f.push(new C.KU(u,t,v?h.gcx9():new C.dih(h),!1))}if(h.a.f)f.push(new C.KU(B.i0,"Add page",h.gaPw(),!1))
v=C.hFK(h.y.Q)
u=h.gzc(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dNA
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ax(B.kx.j(0.5),1,B.r,-1)
j=A.o(g,A.X(l.a,D.kR,g,g,g,17),B.f,g,g,new A.n(g,g,new A.bG(i,i,i,i),new A.be(k,k,k,k),g,new A.a7(B.a5,B.a9,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kR.j(0.85)
p.push(new A.bz(1,B.bd,A.ay(B.c_,A.x(A.a([k,B.bF,A.d(l.b,g,1,g,g,g,g,new A.F(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.N,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.amr(v,u,t+" \xb7 "+s+" "+r,new C.dii(h),A.A(p,B.l,g,B.e,B.i,0,g,g),g)},
Ay(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ay=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BC(),$async$Ay)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aT(t.d);r.C();){q=r.gP(r)
s.push(q.b+" "+q.c)}p=A.a3M(B.d.aN(s," "))
s=t.c
s.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.dhY(t,p),s,null,!0,!0,x.N),$async$Ay)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.ze(),$async$Ay)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Er(),$async$Ay)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.G2("Swahili (Kiswahili)",!0),$async$Ay)
case 18:w=16
break
case 17:w=19
return A.b(t.cI4(o==="sw"?"Swahili (Kiswahili)":"English"),$async$Ay)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$Ay,v)},
a_e(d,e,f,g,h){var w=null,v=A.l(16),u=B.c.j(0.07),t=A.l(16),s=A.K(B.kx.j(0.3),B.r,1),r=x.p
return new A.D(B.cy,A.aM(!1,v,!0,A.o(w,A.A(A.a([A.o(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.n(w,w,w,w,w,B.xe,B.a6),w,42,w,w,w,w,w,42),B.bc,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,B.Ld,w,w,w),A.d(g,w,w,w,w,w,w,B.Fa,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1)],r),B.l,w,B.e,B.i,0,w,w),B.f,w,w,new A.n(u,w,s,t,w,w,B.n),w,w,w,w,B.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dij(d,h),w,w,w,w,w,w,w),w)},
Er(){return this.bUK()},
bUK(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Er=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dia(r),a7,null,!0,!0,x.ei),$async$Er)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eF("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.cg(null,null,!1,null,new C.dib(o),a7,null,!0,!0,x.H).fw(new C.dic(a6))
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
return A.b(C.ais(a0,a7,new C.did(o),d,l,e,j),$async$Er)
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
J.aTR(l,0)
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
a7=j.bgh(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Bw(j.c,j.d,l),$async$Er)
case 11:w=12
return A.b(r.lh(),$async$Er)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.A7[a1].a)
a5=l.cMz(j,12,a7)
l=r.a
w=15
return A.b(C.SR(l.c,l.d,a5),$async$Er)
case 15:if(r.c!=null)r.m(new C.die(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.BY(0,B.e6,B.n0)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.K(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b2(a3?A.cBD("Undo",new C.dif(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ei,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Er,v)},
G2(d,e){return this.cI5(d,e)},
cI4(d){return this.G2(d,!1)},
cI5(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$G2=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eF("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.cg(null,null,!1,null,new C.diq(a0),k,null,!0,!0,x.H).fw(new C.dir(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.c4(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(A.a40(m,new C.dis(a0)),$async$G2)
case 10:w=8
break
case 9:w=11
return A.b(C.bGR(new C.dit(a0),m,a2),$async$G2)
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
J.aTR(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.K(x.q).f
k=q
o.U(A.b2(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bgh(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Bw(k.c,k.d,o),$async$G2)
case 12:w=13
return A.b(r.lh(),$async$G2)
case 13:o=r.c
if(o==null){w=1
break}o=o.K(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.X(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(A.cBD("Undo",new C.diu(r,d),null),null,null,null,null,B.t,null,k,null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$G2,v)},
bHx(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dhZ(v):u
r=A.aH(u,u,u,u,A.X(D.bSV,s?D.kR:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.ht(A.X(B.wT,B.GT,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.m(u,u,B.GT,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbPL(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.m(u,u,D.kR.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.as(s,u,u,u),1)
w=t<J.ad(v.d)?new C.di_(v):u
return A.bm(!0,new A.D(D.bGq,A.A(A.a([r,s,A.aH(u,u,u,u,A.X(B.eI,t<J.ad(v.d)?D.kR:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.i,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a_V.prototype={
T(){return new C.bhP(new A.at(B.ax,$.aw()))}}
C.bhP.prototype={
ga37(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.V$=$.aw()
w.R$=0
this.a2()},
gbTl(){switch(this.ga37()){case"cover":var w=D.dc9
break
case"book":w=D.d7m
break
default:w=D.dE5
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.l(26),n=B.kx.j(0.5),m=x.p,l=A.A(A.a([D.dNB,B.as,D.bM8,A.aH(p,p,p,p,B.lt,p,p,p,new C.dkl(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.i,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jw(p,p,p,A.d("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dkm(q),q.ga37()==="page",p,p,p,p))
if(q.a.d)k.push(A.jw(p,p,p,D.h5O,p,new C.dkn(q),q.ga37()==="book",p,p,p,p))
k.push(A.jw(p,p,p,D.fTs,p,new C.dko(q),q.ga37()==="cover",p,p,p,p))
k=A.c_(B.bI,k,B.br,p,6,8)
j=B.c.j(0.07)
j=A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bA(p,new A.b6(4,A.l(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kr,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a7,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbTl(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.d(s,p,p,p,p,p,p,B.La,p,p,p)
w.push(A.mY(p,B.c.j(0.08),r,B.hu,new C.dkp(q,s),p,p,p,p))}return A.eI(p,B.Cf,A.cc(A.x(A.a([l,B.U,D.h97,B.am,k,B.af,j,B.P,A.c_(B.bI,w,B.br,p,6,6),B.aB,A.db(D.bXe,p,D.h9U,new C.dkq(q,d),A.bp(B.b8,p,p,p,p,B.p3,p,p,new A.ba(A.l(16),B.a1),p,p,p)),B.aw,D.h4_],m),B.E,p,B.e,B.N,0,B.p),B.t,p,B.y,p,p,B.fu,p,p,B.ah),p,p,p,B.OQ,p,B.d7,p,new A.ba(o,new A.ax(n,1.4,B.r,-1)),p)}}
C.a_T.prototype={
T(){return new C.aCh(A.a([],x.gA))},
ge3(){return this.c}}
C.agd.prototype={}
C.aCh.prototype={
Z(){this.a3()
this.lh()},
lh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Sh(p.c,p.d),$async$lh)
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
return A.b(C.bFi(r.c,q),$async$lh)
case 6:j=e
i=J
w=7
return A.b(C.LR(t.a.c,q),$async$lh)
case 7:m.push(new l.agd(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.diO(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
bby(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Rf(d,e){return this.cja(0,e)},
cja(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Rf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).cf(A.ef(new C.diN(u,e),!0,null,x.y)),$async$Rf)
case 2:t=g
w=3
return A.b(u.lh(),$async$Rf)
case 3:if(t===!0&&u.c!=null)u.c.K(x.q).f.U(D.aVK)
return A.h(null,v)}})
return A.i($async$Rf,v)},
G4(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$G4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.K(x.q).f.U(D.aVF)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ahM(s.c,s.d),$async$G4)
case 5:q=e
w=6
return A.b(t.lh(),$async$G4)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Rf(0,B.d.fb(t.d,new C.diS(q))),$async$G4)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Sd(p,s.f,r,n,o),$async$G4)
case 10:m=e
w=11
return A.b(t.lh(),$async$G4)
case 11:if(m&&t.c!=null)t.c.K(x.q).f.U(D.aVK)
case 1:return A.h(u,v)}})
return A.i($async$G4,v)},
QG(d,e){return this.cuR(0,e)},
cuR(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$QG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.diR(t,e),s,null,!0,!0,x.y),$async$QG)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a4c(s.c,s.d,e.a),$async$QG)
case 4:w=5
return A.b(t.lh(),$async$QG)
case 5:case 1:return A.h(u,v)}})
return A.i($async$QG,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bHA(w[u]))
if(m){t=6-o.d.length
w=A.l(18)
v=B.c.j(0.05)
s=A.K(B.kx.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.ay(n,new A.fG(0.7142857142857143,A.o(n,A.x(A.a([D.dNC,B.af,D.eyl,B.aw,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.m(n,n,D.kR.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.b9,B.i,0,B.p),B.f,n,n,new A.n(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcLx(),n,n,n,n,n,n,!1,B.a4))}w=A.l(22)
v=A.K(B.kx.j(0.85),B.r,1.6)
s=A.ay(n,A.o(n,D.c4m,B.f,n,n,new A.n(B.w.j(0.3),n,A.K(B.kx.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.diT(d),n,n,n,n,n,n,!1,B.a4)
r=A.l(14)
q=B.w.j(0.3)
p=A.K(B.kx.j(0.5),B.r,1)
w=A.o(n,A.A(A.a([s,B.bc,D.bMx,A.o(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fyU,n,n,n),B.f,n,n,new A.n(q,n,p,r,n,n,B.n),n,n,n,n,B.hn,n,n,n)],l),B.l,n,B.e,B.i,0,n,n),B.f,n,n,new A.n(n,n,v,w,n,D.cap,B.n),n,n,n,B.OC,D.bEj,n,n,n)
if(o.e)k=D.agt
else k=k.length===0?D.beq:A.ci(new C.diU(k))
return A.c5(n,D.a_2,new A.an(B.a0,n,B.b1,B.t,A.a([D.aRL,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bHA(d){var w,v,u=this,t=null,s=u.bby(d),r=d.c,q=x.p,p=A.a([A.bS(0,new A.du(B.dB,B.A,B.f,new A.a5(300,420,new C.a_7(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.ay(t,A.o(t,D.c3E,B.f,t,t,new A.n(B.w.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.diL(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.fyx,t,t,t)
v=r===1?"page":"pages"
return A.ay(t,A.x(A.a([new A.fG(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.m(t,t,D.kR.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.diM(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KU.prototype={}
C.a_7.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dM(D.A7,new C.cQU(m),new C.cQV()),j=m.c,i=D.Ef.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mt:B.b9
v=new C.cQW(h)
i=A.a([new A.ab(0,B.G,B.w.j(0.6),D.ev8,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b3(l,l,l,new C.bf0(j.x,h,l),B.az),0,0,0),A.ao(0,A.o(l,l,B.f,l,l,new A.n(l,l,l,l,l,new A.a7(B.a5,B.a9,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cK(8,40+s*46,l,l,l,l,A.o(l,l,B.f,l,l,new A.n(h.j(0.7),l,l,new A.be(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.aoc,8,0.85,2.2),v.$4(D.bJk,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aoc,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.D(D.bJg,A.b3(l,l,l,new C.beS(h,l),B.az),l),0,0,0))
r=A.X(D.aD6[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.m(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aAh,l,l),B.K,l,l)
p=A.o(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.af,p,B.af,A.d(o,l,l,l,l,l,l,A.m(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cK,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.m(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.D(D.bJM,A.x(o,B.l,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aJm(l),D.fnY),l,l,l,46,0,l))
return A.o(l,A.bv(D.af5,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.n(l,l,l,D.af5,i,new A.a7(B.ay,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bf0.prototype={
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
C.beS.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.R(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.ab
j.c=2.4
j.d=B.bG
for(w=e.a,v=e.b,v=[D.faW,new A.b7([w,0,-1,1]),new A.b7([0,v,1,-1]),new A.b7([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
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
T(){return new C.beZ()}}
C.beZ.prototype={
goC(){var w=this.d
return w===$?this.d=this.a.c:w},
gzc(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.at(new A.bc(w.b,B.b7,B.aP),$.aw())}return v},
gaDJ(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.at(new A.bc(w.c,B.b7,B.aP),$.aw())}return v},
gatk(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.at(new A.bc(w.y,B.b7,B.aP),$.aw())}return v},
t(){var w=this,v=w.gzc(0),u=v.V$=$.aw()
v.R$=0
v=w.gaDJ()
v.V$=u
v.R$=0
v=w.gatk()
v.V$=u
v.R$=0
w.a2()},
atY(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jw(s,s,s,A.d(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.d9G(this,f,u),e===u,s,s,s,s))}return A.c_(B.bI,r,B.br,s,6,8)},
azI(d){var w=null,v=B.c.j(0.07)
return A.bA(w,new A.b6(4,A.l(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lZ,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goC(),a0=f.gzc(0),a1=a0.a.a,a2=f.gaDJ(),a3=a2.a.a,a4=f.gatk(),a5=d.bgf(a4.a.a,a3,a1)
a1=x.w
a3=A.aD(a6,e,a1).w
a1=A.aD(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a5(190,260,new A.du(B.dB,B.A,B.f,new A.a5(270,370,new C.a_7(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.azI("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.da4(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a7,e,B.ao,e,e,e,e)
a2=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.azI("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.da5(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a7,e,B.ao,e,e,e,e)
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
v.push(A.ay(e,A.x(A.a([p,B.cS,A.d(t.b,e,e,e,e,e,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.da6(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.c_(B.bI,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b8.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ax((s===$?f.d=f.a.c:s).d===n?B.ey:B.L,2,B.r,-1)
q.push(A.ay(e,A.o(e,A.X(D.aD6[n],B.c,e,e,e,24),B.f,e,e,new A.n(p,e,new A.bG(o,o,o,o),new A.be(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.da7(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.c_(B.bI,q,B.br,e,8,8)
a4=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.azI("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.da8(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a7,e,B.ao,e,e,e,e)
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
m.push(A.ay(e,A.x(A.a([j,B.bF,A.d(i,e,e,e,e,e,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.da9(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.c_(B.bI,m,B.br,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,F.vV,e,e,e)
k=f.goC()
return new A.D(new A.P(0,0,0,a3.f.d),A.bm(!0,new A.cN(new A.aY(0,1/0,0,a1.a.b*0.92),A.cv(A.a([D.h3q,B.af,d,B.aO,a0,B.U,a2,B.aB,D.h9F,B.P,v,B.aB,D.h3z,B.P,q,B.aB,a4,B.aB,p,B.P,m,B.aB,l,A.l0(e,9,""+B.h.S(f.goC().f),36,18,new C.daa(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,F.vV,e,e,e),B.am,f.atY(D.a7p,f.goC().r,new C.dab(f),D.dHk),B.af,A.d("BORDER",e,e,e,e,e,e,F.vV,e,e,e),B.am,f.atY(D.a6J,f.goC().w,new C.dac(f),D.dHq),B.af,A.d("COVER MATERIAL",e,e,e,e,e,e,F.vV,e,e,e),B.am,f.atY(D.a6F,f.goC().x,new C.dae(f),D.dJ5),B.am,A.iV(e,B.b8,e,B.ag,e,new C.daf(f),e,e,e,D.fYB,f.goC().z),B.bx,A.bJ(D.h27,e,new C.dag(f,a6),A.bp(B.b8,e,e,e,e,B.p3,e,e,new A.ba(A.l(16),B.a1),e,e,e))],w),e,e,B.anH,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
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
u.sam(D.cb6.az(0,new A.a3(0,0,0+w,0+v)))
d.af(t,u)},
aE(d){return!1}}
C.bkm.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.R()
w=A.L()
w.sam(D.ca5.az(0,new A.a3(0,0,a2,a3)))
a4.aD(new A.a3(0,0,a2,a3),w)
v=B.h.cD(a1/112)
u=new A.e_()
u.cU(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.dc8[u.aw(9)]
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
p.sam(D.c9o.az(0,new A.a3(0,r,a2,q)))
a4.aD(new A.a3(0,r,a2,q),p)
p=new A.ar(B.S,B.Q,B.V,B.X,B.T)
p.r=B.w.j(0.5).gp(0)
p.y=B.kY
a4.aD(new A.a3(0,q,a2,q+14),p)}t=A.L()
t.r=D.bif.j(0.72).gp(0)
a4.aD(new A.a3(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.sam(new A.bT(B.A,0.5,B.x,d,0,A.a([D.bqT.j(0.22),B.L],w),d,d).az(0,A.bW(new A.r(t,a1),a0)))
a4.O(new A.r(t,a1),a0,a3)},
aE(d){return!1}}
C.bda.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cK(14,w*2,v*2.2,v*2,o,o,new A.bN(new A.n(A.ap(D.kR,D.bwd,w/4),o,new A.bG(B.a1,new A.ax(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.Mo,o,o,B.n),B.bk,o,o),o))}v=x.V
u=A.a([new A.ab(0,B.G,B.w.j(0.35),B.aNk,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.o(o,o,B.f,o,o,new A.n(B.kx.j(0.6),o,o,new A.be(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.o(o,A.x(t,B.l,o,B.r3,B.i,0,B.p),B.f,o,o,new A.n(o,o,o,D.b6n,u,D.cb4,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ab(0,B.G,B.w.j(0.4),B.dn,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aJm(o),D.fnT),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aXg(p.y,r,B.j7,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bA(o,B.eN,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,B.j7.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fNt,!0,B.a7,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,B.j7.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.U,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bA(o,B.eN,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,B.j7.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fDT,!0,B.a7,B.B1,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fNl,o,o,o),B.aw,A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,B.j7.j(0.5),o,o,o,o,o,o,o,o,11,B.cK,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.E(A.o(o,o,B.f,D.GD.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fv,A.d("\u2766",o,o,o,o,o,o,A.m(o,o,D.GD.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.o(o,o,B.f,D.GD.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.i,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.m(o,o,B.j7.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Zm(A.cR(A.a([A.cR(o,o,o,o,o,o,o,o,o,D.fH7,B.a.aB(k,0,1)),A.cR(o,o,o,o,o,o,o,o,o,o,B.a.aY(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.m(o,o,B.j7.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cc(A.x(n,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.ih,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.m(o,o,B.j7.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.o(o,A.bv(B.Mo,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bIN,A.x(s,B.al,o,B.e,B.i,0,B.p),o),A.ao(0,new A.bN(new A.n(o,o,o,o,o,new A.a7(B.a5,B.a9,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bk,o,o),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.n(o,o,o,B.Mo,v,D.cbC,B.n),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.ams.prototype={
T(){return new C.amt(new A.eF(0,$.aw()),new C.bUt(),new C.amL(),D.hMB,null,null)},
gd1(){return this.d}}
C.a26.prototype={
a7(){return"_Step."+this.b}}
C.amt.prototype={
gCL(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFe(w.c,6,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghe(d){var w,v=this,u=v.e
if(u===$){w=C.Nc(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gUg(){var w=this.ghe(0)
return w.gzw()==null?"Babu":B.a.i(w.gzw().b)},
Z(){var w,v=this
v.a3()
w=v.ghe(0).gzw()
w=w==null?null:w.c
v.r.b=w===D.oB
w=v.qa(new C.bSP(v))
w.fY(0)
v.x!==$&&A.aQ()
v.x=w
v.a34("Come closer, my children. I am "+v.gUg()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
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
w.bwX()},
a34(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dh(B.a0L,new C.bSJ(w))},
btj(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.m(new C.bSS(v))},
aep(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
btb(){return this.bb5()},
bb5(){var w=this,v=w.gCL()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bSK(w))
w.a34(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cy(B.me,new C.bSL(w))},
cMG(){var w=this
w.m(new C.bSO(w))
w.a34(w.gCL()[w.as].a)},
Lp(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.aeb)return
w=p.gCL()
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
p.m(new C.bSN(p,d,u,q))
p.a34(u?D.ds8[q.aw(4)]+" "+w[p.as].d:D.doI[q.aw(3)]+" "+w[p.as].d)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCL()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bHx(t.at,t.ay,p)
t.m(new C.bSQ(t,s))
t.a34(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BT(t.a.d,s),$async$kN)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BU(r.d,r.c.a,"fire",t.at*10),$async$kN)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bSR())
w=1
break
case 4:++t.as
t.bb5()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c5(v,D.Z1,new A.an(B.a0,v,B.ad,B.t,A.a([A.bS(0,new A.e6(A.b3(v,v,v,new C.aXl(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.cdb(0),B.b4,w.bSw()],t),B.l,v,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cdb(d){var w,v,u,t=this,s=null,r=A.aH(s,s,s,s,B.QC,s,s,s,new C.bSM(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCL().length;++w){v=t.as
if(w<v||t.Q===D.b2G)v=B.cV
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(A.o(s,s,B.f,s,s,new A.n(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,D.bE3,s,s,s,22))}p=A.E(A.x(A.a([D.fVk,A.A(p,B.l,s,B.e,B.i,0,s,s)],q),B.E,s,B.e,B.i,0,B.p),1)
v=A.l(14)
u=A.K(B.fL,B.r,1)
return new A.D(D.bJZ,A.A(A.a([r,p,A.o(s,A.d("\ud83d\udd25 "+B.h.S(t.cy*100)+"%",s,s,s,s,s,s,B.iI,s,s,s),B.f,s,s,new A.n(B.b5,s,u,v,s,s,B.n),s,s,s,s,B.hn,s,s,s)],q),B.l,s,B.e,B.i,0,s,s),s)},
bSw(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghe(0).gzw()
if(h==null)w=1
else w=h.c===D.oB?0:1
v=j.dx
u=j.db
t=D.qr.j(0.96)
s=A.l(22)
r=A.K(B.cV,B.r,3)
q=A.b3(i,i,i,new C.bpY(w,i),B.az)
p=A.d(j.Q===D.aeb?j.gUg()+" asks":"Elder "+j.gUg(),i,i,i,i,i,i,D.aX_,i,i,i)
o=j.db
o=B.a.aB(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.ay(B.c_,A.A(A.a([new A.a5(62,62,q,i),B.as,A.E(A.x(A.a([p,B.bF,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aXd,i,i,i)],n),B.E,i,B.e,B.i,0,B.p),1)],n),B.E,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbti(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.as(j.aaw("Sit down by the fire",j.gbta()),i,i,i)
break
case 1:v=A.as(j.aaw("Ask me, Elder",j.gcMF()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCL()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ax(D.lG,2.5,B.r,-1)
v.push(A.ay(i,A.o(i,A.d(u[m],i,i,i,i,i,i,D.aX9,B.K,i,i),B.f,i,D.afI,new A.n(D.ale,i,new A.bG(l,l,l,l),new A.be(q,q,q,q),i,i,B.n),i,i,i,i,K.wG,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bSG(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.c_(B.bI,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.kd:X.arb
u=A.X(u,v?B.ep:D.lG,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.m(i,i,v?B.ep:D.lG,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCL().length?"Finish":"Next story"
v=A.A(A.a([u,B.ae,q,j.aaw(v,j.gqt(j))],n),B.l,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCL().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aXr,i,i,i)],n)
u=j.cx
if(u>0){u=C.aRD(u)
q=C.aRD(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.acC,i,i,i))}v.push(B.P)
v.push(j.aaw("Back to the games",new C.bSH(j)))
v=A.x(v,B.l,i,B.e,B.i,0,B.p)
break
default:v=i}return A.o(i,A.x(A.a([o,B.U,v],n),B.E,i,B.e,B.N,0,B.p),B.f,i,i,new A.n(t,i,r,s,D.aEF,i,B.n),i,i,i,B.yX,B.bl,i,i,i)},
aaw(d,e){var w=null,v=A.l(16),u=A.K(B.cV,B.r,2)
return A.ay(w,A.o(w,A.d(d,w,w,w,w,w,w,B.Ld,w,w,w),B.f,w,w,new A.n(D.lG,w,u,v,w,w,B.n),w,w,w,w,D.bHG,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bpY.prototype={
a4(d,e){A.hlu(d,e.ej(B.J),e.gdj()*0.45,this.b,0,0.4)},
aE(d){return d.b!==this.b}}
C.aCf.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bC()}}
C.bUt.prototype={}
C.te.prototype={}
C.bpZ.prototype={}
C.amL.prototype={
MS(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.ihy(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aXl.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.GE(l.d.MS(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.br(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bV(0,u)
l.cC7(d,j)
l.bR4(d,j)
l.cKs(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.br(t.save())
t.translate(225,580)
d.nM(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.R()
q=A.L()
p=x.O
o=x.n
q.sam(A.wh(B.J,r,A.a([D.buU.j(0.55*s),B.NS.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.O(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bUl(l,d,j,i)),new A.y(540,new C.bUm(l,d,j,i)),new A.y(546,new C.bUn(l,d,j,i)),new A.y(574,new C.bUo(l,d,j,i)),new A.y(612,new C.bUp(l,d,j,i)),new A.y(650,new C.bUq(l,d,j,i)),new A.y(656,new C.bUr(l,d,j,i))],x.E)
B.d.b0(n,new C.bUs())
for(m=0;m<7;++m)n[m].b.$0()
l.bHT(d,j,i)
l.bUI(d,j)
t.restore()
$.R()
t=A.L()
t.sam(A.wh(new A.r(w/2,v*0.6),e.gaoK()*0.75,A.a([B.L,D.bi8],p),A.a([0.55,1],o),B.x,k,k,0))
d.aD(new A.a3(0,0,0+w,0+v),t)},
aE(d){return d.c!==this.c||d.d!==this.d},
cC7(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e_()
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
d.ah(p,p.aJ(0,D.euF),C.iF(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.h.F(v+o*0.05,1)
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
s.r=D.bkU.gp(0)
s.d=B.bG
s.e=B.dQ
d.af(l,s)}},
bR4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aBB[t]
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
o.r=D.aiA.j(0.16*(1-h)).gp(0)
d.O(new A.r(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cKs(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bEA(d,D.euB,0.9,e,D.hIf,!1,!1,D.b2D,1,!1)
w=$.R().r
v=x.v
u=new A.aG(w,B.ai,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bx())
t=A.L()
t.r=D.akx.gp(0)
d.af(u,t)
C.bEA(d,D.euD,0.95,e,D.hIa,!1,!1,D.b2E,1,!0)
t=new A.aG(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.ce(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.ce(431,553,421,548))
t.E(new A.bx())
u=A.L()
u.r=B.Gi.gp(0)
d.af(t,u)
u=A.bX(D.euC,8,28)
t=A.L()
t.r=D.bxk.gp(0)
d.c1(u,t)
C.bEA(d,new A.r(-30+B.h.F(e/26,1)*510,492),0.82,e,D.hIg,!0,!1,D.XQ,1,!1)
t=B.h.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c1(A.bX(new A.r(s+q*16,r-6),16,11),C.iF(D.ako,1.8))
u=q<0
C.bEA(d,new A.r(s-q*6,r),0.62,e,D.hIi,!1,u,D.XQ,2.2,!1)
C.bEA(d,new A.r(s-q*32,r+4),0.58,e+1,D.hIe,!1,u,D.XQ,2.2,!1)
this.bXr(d,D.eug,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bX(new A.r(o,n),8,11)
k=p===1
j=k?D.akk:D.akX
i=new A.ar(B.S,B.Q,B.V,B.X,B.T)
i.r=j.gp(0)
d.c1(l,i)
l=k?D.akk:D.akX
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
u=A.bX(D.a9A,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.aiZ.gp(0)
d.c1(u,t)
u=A.bX(D.a9A.a5(0,new A.r(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.bn6.gp(0)
d.c1(u,t)
t=new A.aG(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bx())
u=A.L()
u.r=D.bnj.gp(0)
d.af(t,u)
u=D.a9A.a5(0,new A.r(-17,h?-9:-2))
t=A.L()
t.r=B.id.gp(0)
d.O(u,1.1,t)
v=new A.aG(w,B.ai,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.ce(180,588+w*(h?6:0),178,595))
d.af(v,C.iF(D.aiZ,3.5))},
bXr(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a5(0,new A.r(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.R()
m=new A.ar(B.S,B.Q,B.V,B.X,B.T)
m.b=B.ab
m.c=2
m.r=D.Zf.gp(0)
m.d=B.bG
m.e=B.dQ
d.ah(new A.r(u+o,s),new A.r(u+(o+n*1.5),q),m)}w=A.bX(k,17,32)
v=$.R()
r=A.L()
r.r=D.Gg.gp(0)
d.c1(w,r)
r=A.bX(k.a5(0,D.etH),7,26)
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
d.ah(k.a5(0,new A.r(22,v)),k.a5(0,new A.r(21,-17+l)),C.iF(D.Zf,1.6))
d.ah(k.a5(0,new A.r(26,v)),k.a5(0,new A.r(28,-16+l)),C.iF(D.Zf,1.6))
v=k.a5(0,new A.r(26,-8+l))
s=A.L()
s.r=B.w.gp(0)
d.O(v,0.9,s)
d.ah(k.a5(0,new A.r(26,-3+l)),k.a5(0,new A.r(26,1+l)),C.iF(D.bq7,1.4))
d.ah(k.a5(0,D.ewA),k.a5(0,new A.r(-19,-7+Math.sin(f*7)*2)),C.iF(D.Gg,2.4))},
bUG(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bX(new A.r(225+u*36,574+(t*13+6)),8,11)
$.R()
t=new A.ar(B.S,B.Q,B.V,B.X,B.T)
t.r=D.bvX.gp(0)
a6.c1(u,t)}}u=A.bX(D.a9C.a5(0,B.cz),17,52)
$.R()
t=A.L()
t.r=D.bhH.gp(0)
a6.c1(u,t)
t=A.bX(D.a9C.a5(0,B.cz),12,44)
u=D.blj.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.c1(t,s)
for(r=0;r<3;++r){v=D.do9[r]
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
l=[D.f71,D.f7A,D.f8G,D.f90,D.f8E]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.btc,D.bps,D.bvm][k]
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
a3=new A.hU(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.ak(a4)
a2.ab()
g=new A.hU(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
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
p=B.akV.j((1-a5)*0.9)
$.R()
o=new A.ar(B.S,B.Q,B.V,B.X,B.T)
o.r=p.gp(0)
a6.O(new A.r(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.h.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.aiA.j(0.1*(1-a5))
$.R()
p=new A.ar(B.S,B.Q,B.V,B.X,B.T)
p.r=q.gp(0)
a6.O(new A.r(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bUI(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.h.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bxv.j(0.18*p)
$.R()
n=new A.ar(B.S,B.Q,B.V,B.X,B.T)
n.r=o.gp(0)
d.O(new A.r(r,q),5,n)
n=new A.ar(B.S,B.Q,B.V,B.X,B.T)
n.r=D.bqY.j(0.9*p).gp(0)
d.O(new A.r(r,q),1.4,n)}},
c6u(d,e){switch(d){case 0:return e.b?D.hIb:D.b2b
case 1:return e.b?D.hIh:D.b29
case 2:return D.b28
case 3:return D.b27
case 4:return D.b2a
default:return D.b2c}},
aDX(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
Ry(d,e,f,g){var w,v=this,u=D.a6R[e],t=v.c6u(e,g),s=new C.bpZ(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a6R[e],l=e===0
m=B.h.D(((l?D.aNc:D.aNi).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a9H
s.as=D.EH
if(l){s.a=o?v.aDX(f,0):0
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.etP
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.evc
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
s.Q=D.exw
s.as=D.aNv}if(e===2&&g.x!=null&&f<g.y){s.a=v.aDX(f,5)
s.b=0.4
s.as=new A.r(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aDX(f,e*3)
s.b=0.5
s.c=0.4}}C.hEo(d,u.a,u.b*1.2,t,s,f,e,null)},
bHT(d,e,f){var w=new C.bUk(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd3(d){return this.c}}
C.agm.prototype={
a7(){return"_Stand."+this.b}}
C.aej.prototype={}
C.ls.prototype={}
C.bT4.prototype={
bCu(d){var w,v,u,t,s=A.S(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
Gk(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b0(r,new C.bT5())
return r},
as_(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aNE(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
an7(d){var w,v,u=A.aR(x.N),t=d,s=0
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
gzw(){var w=this.b
if(w.length===0)return null
w=A.B(w,x.P)
B.d.b0(w,new C.bT6(this))
return B.d.gH(w)}}
C.auS.prototype={}
C.zC.prototype={}
C.alj.prototype={
gCh(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bNS(),A.T(w).k("Y<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
aj(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.MX.prototype={
gaq2(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gCh(0))s.push(t)}return s},
aj(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d2Y(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaq2(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.ls(B.a.i(s.a),p,B.d.cj(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bbn.prototype={}
C.aam.prototype={}
C.biF.prototype={}
C.agk.prototype={}
C.akC.prototype={
T(){return new C.akD(B.bD,A.a([],x.cC),A.a([],x.e4),null,null)},
gd1(){return this.d}}
C.akD.prototype={
gN8(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFe(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gbbr(){var w,v=this,u=v.e
if(u===$){w=v.qa(v.gcdd())
v.e!==$&&A.bE()
v.e=w
u=w}return u},
Z(){this.a3()
this.gbbr().fY(0)},
t(){this.gbbr().t()
this.bwS()},
fY(d){this.m(new C.bM0(this))},
cde(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fH(0,v)
if(w.c!=null)w.m(new C.bLW())},
b9M(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gN8()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.biF(u,(u+0.5)/v,w[t.x].b[u]))},
fH(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bq(w,new C.bM1())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c9l()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gN8()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.h.S((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.atw(v,0.8,B.cV)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.atw(m.cy,0.8,B.np)
m.b_c("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.atw(q,0.88,D.lG)
p=m.gN8()[m.x]
n=p.c
if(u===n){m.b_c("The right gourd fell! It was "+p.b[n]+".")
return}}}},
atw(d,e,f){var w,v,u,t=new A.e_()
t.cU(B.h.S(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.agk(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b_c(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.QH()}},
c9l(){var w=this
if(w.x+1>=w.gN8().length){w.QH()
return}++w.x
w.b9M()},
QH(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$QH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gN8().length
r=C.bHx(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bLU())
w=2
return A.b(C.BT(u.a.d,r),$async$QH)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BU(t.d,t.c.a,"catch",u.z),$async$QH)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bLV())
return A.h(null,v)}})
return A.i($async$QH,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cdc()
else w=v.ch?v.cdf():A.as(new A.D(B.eA,A.x(A.a([D.aYo,B.P,D.fX1,B.U,D.h2c,B.e3,C.uw("Play",v.geX(v),B.cV,B.hd,D.fC)],x.p),B.l,u,B.e,B.N,0,B.p),u),u,u,u)
return new C.tE("Calabash Catch",w,B.f7,u)},
cdf(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hF:B.HZ
p.push(A.X(u,v?B.aA:B.bV,r,r,r,22))}p.push(B.b4)
v=s.x
u=s.gN8()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aWZ,r,r,r))
p.push(B.bc)
v=A.l(14)
p.push(A.o(r,A.d(""+s.z,r,r,r,r,r,r,B.iI,r,r,r),B.f,r,r,new A.n(B.bw,r,r,v,r,r,B.n),r,r,r,r,B.CE,r,r,r))
p=A.A(p,B.l,r,B.e,B.i,0,r,r)
v=A.l(18)
t=A.K(B.cV,B.r,3)
return A.x(A.a([new A.D(D.bFr,p,r),A.o(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fH_,B.K,r,r),B.f,r,r,new A.n(D.qr,r,t,v,r,r,B.n),r,r,r,B.f2,B.bl,r,r,1/0),B.am,A.E(A.ci(new C.bM_(s)),1)],q),B.l,r,B.e,B.i,0,B.p)},
cdc(){var w=this,v=null,u=A.as(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.q2,v,v,v),v,v,v),t=A.as(A.d(""+w.Q+" of "+w.gN8().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Wb,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cv(A.a([D.bf7,u,t,B.aO,new C.Iz(s,r,w.cx,v),B.aO,A.as(C.uw("Back to the games",new C.bLT(w),B.cV,B.kc,D.fC),v,v,v)],x.p),v,v,B.ac,v,v,B.ah,!1)}}
C.bdQ.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.R(),a3=A.L()
a3.sam(A.jz(B.J,new A.r(0,a0),D.d5V,B.aBS,B.x,e))
a4.aD(new A.a3(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=B.NW.gp(0)
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
w.r=D.bmh.gp(0)
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
w.r=D.ahC.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cra[q]
s=new A.ar(B.S,B.Q,B.V,B.X,B.T)
s.r=D.ahC.gp(0)
s.c=7
s.d=B.bG
a4.ah(new A.r(r,a2),new A.r(r+p*46,w),s)
s=new A.ar(B.S,B.Q,B.V,B.X,B.T)
s.r=D.agU.gp(0)
a4.O(new A.r(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.bng.gp(0)
a4.aD(new A.a3(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ar(B.S,B.Q,B.V,B.X,B.T)
t.r=D.aje.gp(0)
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
m.r=D.aik.gp(0)
a4.O(D.et4,14,m)
m=new A.ar(B.S,B.Q,B.V,B.X,B.T)
m.r=D.bsf.gp(0)
m.c=4
m.d=B.bG
a4.ah(D.et5,D.euc,m)
m=new A.ar(B.S,B.Q,B.V,B.X,B.T)
m.sam(new A.amc(D.ewk,46,D.deG,B.vn,B.x,e,e,0))
a4.O(B.J,34,m)
m=A.bX(D.ewq,8,12)
l=new A.ar(B.S,B.Q,B.V,B.X,B.T)
l.r=B.c.j(0.35).gp(0)
a4.c1(m,l)
k=new A.jM(new A.eu(n.c,e,e,B.cN,e,e,e,e,e,e,D.fEP),B.K,B.c0,new A.ji(1),e,e,3,e,B.c1,e,B.cx)
k.nD(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bw(A.bX(B.cM,m.gb9(m)+8,l),B.fQ)
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
C.ilm(a4,new A.r(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dS,(w+1)/2)
h=A.bX(new A.r(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aG($.R().r,B.ai,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.ce(h.gbD().a,s+8,w+8,s))
a3.E(new A.bx())
m=A.L()
m.r=D.a_8.gp(0)
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
s.r=D.bmn.gp(0)
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
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cS,A.o(v,A.d(w.d,v,1,B.a2,v,v,v,D.fxl,v,v,v),B.f,v,v,new A.n(B.c,v,r,s,v,v,B.n),v,v,v,v,B.n3,v,v,v)],x.p),B.l,v,B.e,B.N,0,B.p),v)},
ga_(d){return this.e}}
C.aCd.prototype={
a4(d,e){var w=e.ej(B.J),v=e.gdj(),u=this.c?0.8:0
return A.hlu(d,w,v*0.44,this.b,0,u)},
aE(d){return d.b!==this.b||d.c!==this.c}}
C.aAG.prototype={}
C.avv.prototype={
T(){return new C.avw(A.S(x.S,x.cq),null,null)},
gd1(){return this.d}}
C.avw.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hJZ(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gaG_(){var w=this.z
return w===$?this.z=this.XK(0):w},
gj1(){var w,v=this.Q
if(v===$){w=this.gkS()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c1(w,-1,!1,x.S)}return v},
XK(d){var w,v,u,t,s=this.gkS()
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
u=v.eM$
u.b=!1
B.d.a8(u.a)
u=u.goJ()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dV$.a.a8(0)
v.qK()}this.bxk()},
cSM(d,e){var w,v,u,t,s,r=this
if(d>=r.gj1().length||r.gj1()[d]!==-1||B.d.q(r.gj1(),e))return
w=r.gaG_()[e]
v=r.gkS()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.crR(r,e,w,v))
A.cy(B.lN,new C.crS(r))
return}++r.r
u=A.bo(null,B.hz,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.crT(r,d,e,w,v))
u.cs(0)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkS()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cC(n,0,new C.crU())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.crV(t,r))
w=5
return A.b(C.BT(t.a.d,r),$async$kN)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BU(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.crW())
w=1
break
case 4:for(o=t.as,n=new A.dp(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eM$
p.b=!1
B.d.a8(p.a)
p=p.goJ()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dV$.a.a8(0)
q.qK()}o.a8(0)
t.m(new C.crX(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.as(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.q2,p,p,p),p,p,p)
v=r.f
v=A.as(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Wb,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tE(q,A.cv(A.a([D.ags,w,v,B.aO,new C.Iz(u,t,r.ch,p),B.aO,A.as(C.uw("Back to the games",new C.crN(d),B.cV,B.kc,D.fC),p,p,p)],x.p),p,p,B.ac,p,p,B.ah,!1),B.f7,p)}w=r.gkS()
v=r.e
s=w[v]
return new C.tE(q,new A.D(B.t9,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,B.aWU,B.K,p,p),A.E(A.ci(new C.crO(r,s)),1)],x.p),B.l,p,B.e,B.i,0,B.p),p),B.f7,p)}}
C.bdj.prototype={
a4(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cRY(),A.T(b2).k("Y<1>")).gJ(0),b4=a9.b,b5=b4.a5(0,B.K_)
$.R()
w=A.L()
w.r=D.lH.j(0.18+0.1*b3).gp(0)
b6.O(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a5(0,D.esS)
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
for(;;){i.jO()
e=n[h].b
e===$&&A.c()
if(!(f<e.a.length()))break
i.jO()
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
k.jO()
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
k.jO()
a4=n[a0].b
a4===$&&A.c()
a4=a4.a.length()
k.jO()
a5=n[a0].Wa(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bX(new A.r(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.T)
a3.r=B.be.gp(0)
b6.c1(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.jM(D.fwP,B.a7,B.c0,new A.ji(1),b0,b0,b0,b0,B.c1,b0,B.cx)
a8.ep()
a8.a4(b6,new A.r(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aE(d){return!0}}
C.azs.prototype={
T(){return new C.azt(A.aR(x.S))},
gd1(){return this.d}}
C.azt.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hKT(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
Z(){this.a3()
this.b9V()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a2()},
b9V(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.dh(B.t4,new C.cGP(this))},
bqU(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkS()[v.e]
if(w.e[d]===w.b)v.m(new C.cGX(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cGY(v,d))
A.cy(B.iR,new C.cGZ(v))}},
cYg(){var w=this
if(!w.as&&w.f<w.gkS()[w.e].d.length)w.m(new C.cH_(w))},
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
t.m(new C.cH0(t,s))
w=5
return A.b(C.BT(t.a.d,s),$async$kN)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BU(q.d,q.c.a,"who",t.r),$async$kN)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cH1())
w=1
break
case 4:t.m(new C.cH2(t))
t.b9V()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.as(A.d(""+a0.w+" of "+a0.gkS().length+" guessed",a2,a2,a2,a2,a2,a2,B.q2,a2,a2,a2),a2,a2,a2)
v=A.as(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Wb,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tE(a1,A.cv(A.a([D.bfi,w,v,B.aO,new C.Iz(u,t,a0.ax,a2),B.aO,A.as(C.uw("Back to the games",new C.cGR(a3),B.cV,B.kc,D.fC),a2,a2,a2)],x.p),a2,a2,B.ac,a2,a2,B.ah,!1),B.f7,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkS()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.Lj,B.K,a2,a2),B.U,A.as(A.lB(new C.cGS(a0,r),a2,B.b0,B.hz,a2,a2,new A.bt(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ax(B.cV,2,B.r,-1)
k=o+1
w.push(new A.ra(new A.bt(0,1,u),new C.cGT(),A.o(a2,new A.c8(B.aM,B.e,B.i,B.l,a2,B.p,a2,0,A.a([new A.qI(A.d(""+k,a2,a2,a2,a2,a2,a2,B.o6,a2,a2,a2),D.lG,a2,12,a2),B.as,new A.bz(1,B.bd,A.d(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fJE,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.n(D.qr,a2,new A.bG(l,l,l,l),new A.be(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cy,B.bl,a2,a2,a2),B.b0,B.iR,a2,new A.bl("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.as(A.bP(!1,D.ha7,a2,a2,!0,a2,a2,a2,a0.gcYf(),a2,a2),a2,a2,a2))
w.push(B.P)
if(a0.as){u=D.lH.j(0.2)
q=A.l(16)
p=A.K(D.lH,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fR,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.o(a2,A.x(A.a([m,B.U,C.uw(v,a0.gqt(a0),B.cV,B.ju,D.fC)],t),B.l,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.n(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bH,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dp:B.cV.j(0.2)
g=new A.aP(16,16)
l=new A.ax(n.q(0,o)?B.fi:B.cV,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bV:B.c
d=n.q(0,o)?B.xD:a2
t.push(new A.ra(new A.bt(0,i,u),new C.cGU(),A.ay(a2,A.o(a2,A.d(f,a2,a2,a2,a2,a2,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.afB,new A.n(h,a2,new A.bG(l,l,l,l),new A.be(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.js,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cGV(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b0,B.mf,a2,new A.bl("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.c_(B.fT,t,B.br,a2,10,10))}return new C.tE(a1,A.cv(w,a2,a2,B.ang,a2,a2,B.ah,!1),B.f7,a2)}}
C.aAq.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bC()}}
C.aHJ.prototype={
aX(){this.b8()
this.b5()
this.dJ()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdC())
w.ba$=null
w.a2()}}
C.ag8.prototype={
ary(d){},
as3(){var w=this,v=w.qa(new C.f9J(w))
v.fY(0)
w.Mg$!==$&&A.aQ()
w.Mg$=v}}
C.aLz.prototype={
gbnk(d){var w=this.c
return B.a.aB(w,0,Math.min(this.d,w.length))},
Wi(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.dh(B.a0L,new C.fjY(w))},
bth(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.amB.prototype={
T(){return new C.amC(new C.amL(),A.a([],x.t),new A.eF(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.amC.prototype={
gN6(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFe(w.c,10,w.e,!0)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghe(d){var w,v=this,u=v.e
if(u===$){w=C.Nc(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqB(){var w=this.r
return w===$?this.r=new C.aLz(new C.bTR(this)):w},
gaqo(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gN6()[v].c)u.push(1)
return u.length},
gbmE(){var w=this.ghe(0)
return w.gzw()==null?"Elder":B.a.i(w.gzw().b)},
Z(){this.a3()
this.as3()},
t(){var w,v=this
v.gqB().t()
v.f.t()
w=v.Mg$
w===$&&A.c()
w.t()
w=v.qh$
w.V$=$.aw()
w.R$=0
v.bx_()},
cMS(){var w=this
w.m(new C.bTO(w))
w.gqB().Wi(w.gN6()[w.x].a)},
Lp(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqB()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qh$.a
v.ax=u
v.ay=u+1
v.m(new C.bTM())
A.cy(B.hz,new C.bTN(v))},
bqQ(){var w=this.gaqo(0)/this.gN6().length*100
if(w>=90)return D.f3T
if(w>=75)return D.f1T
if(w>=60)return D.eTu
if(w>=45)return D.eWV
return D.eNT},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cvk()
w=A.bS(0,new A.e6(A.b3(m,m,m,new C.bu3(n,n.qh$),B.az),m),0,0,0)
if(!n.Q){v=D.qr.j(0.96)
u=A.l(20)
t=A.K(B.cV,B.r,3)
u=A.o(m,A.x(A.a([A.d("Elder "+n.gbmE()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aXO,B.K,m,m),B.U,C.uw("Start the test",n.gC7(),B.cV,B.jc,D.fC)],x.p),B.l,m,B.e,B.N,0,B.p),B.f,m,m,new A.n(v,m,t,u,m,m,B.n),m,m,m,m,B.bH,m,m,m)
v=u}else{v=n.x
u=n.gN6()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aXQ,m,m,m)
if(n.Q){t=n.gqB()
t=t.d<t.c.length}else t=!1
if(t)u=D.fpi
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ax(D.BV,4,B.r,-1)
s.push(A.ay(m,A.o(m,A.d(q[r],m,m,m,m,m,m,D.fAB,B.K,m,m),B.f,m,D.afB,new A.n(D.bid,m,new A.bG(o,o,o,o),new A.be(p,p,p,p),m,m,B.n),m,m,m,m,B.OJ,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bTP(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.c_(B.fT,s,B.br,new A.bl("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.oA(u,B.n_,A.pV(),B.b0,B.b0,A.LO())],x.p),B.l,m,B.e,B.N,0,B.p)
v=u}return new C.tE("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.f7,m)},
cvk(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bqQ(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gN6()[v].c)g.push(v)
u=A.l(22)
t=A.K(B.cV,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fF7,B.K,i,i)
r=A.d("Signed by Elder "+j.gbmE(),i,i,i,i,i,i,D.fDL,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fIZ,i,i,i),D.eFy],q)
o=A.d(h.b,i,i,i,i,i,i,D.fKW,i,i,i)
n=j.gaqo(0)
m=j.gN6()
u=A.o(i,A.x(A.a([D.fWf,B.aw,s,r,B.U,new A.an(B.A,i,B.ad,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.acC,i,i,i),B.P,D.au7],q),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(D.qr,i,t,u,i,i,B.n),i,i,i,i,B.fu,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.Iz(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aO,D.hbb,B.P],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ax(B.bw,1,B.r,-1)
p=m[v]
u.push(A.o(i,A.x(A.a([A.d(p.a,i,i,i,i,i,i,B.h6,i,i,i),B.aw,A.d("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fGi,i,i,i),A.d(p.d,i,i,i,i,i,i,D.fIA,i,i,i)],q),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.dp,i,new A.bG(k,k,k,k),new A.be(r,r,r,r),i,i,B.n),i,i,i,B.cy,B.bl,i,i,i))}B.d.u(s,u)}s.push(B.aB)
s.push(A.as(C.uw("Back to the games",new C.bTI(j),B.cV,B.kc,D.fC),i,i,i))
return new C.tE("Village School",A.cv(s,i,i,B.bT,i,i,B.ah,!1),B.f7,i)}}
C.bu3.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qh$.a
a0.GE(e.f.MS(a1))
w=C.hgC(a1)
v=a0.c
J.br(v.save())
v.translate(w.a,w.b)
a0.bV(0,w.c)
if(e.Q){u=e.gqB()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.d04[s]-6
$.R()
r=new A.ar(B.S,B.Q,B.V,B.X,B.T)
r.r=D.Gu.gp(0)
a0.aD(new A.a3(u,340,u+12,450),r)}u=A.bw(D.aaB.cr(10),B.i5)
$.R()
r=A.L()
r.r=D.BV.gp(0)
a0.aq(u,r)
r=A.bw(D.aaB,B.is)
u=A.L()
u.sam(A.jz(new A.r(30,96),new A.r(420,346),D.dk9,f,B.x,f))
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
u.r=E.ak4.gp(0)
a0.aD(new A.a3(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.aD(D.fgF,u)
u=A.L()
u.r=B.bL.gp(0)
a0.aD(D.fgJ,u)
u=A.bw(D.fgz,B.hg)
r=A.L()
r.r=D.a_8.gp(0)
a0.aq(u,r)
n=B.h.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqB().gbnk(0)
m=A.fz(f,B.cx,f,7,f,A.cR(f,f,f,f,f,f,f,f,f,D.fNe,u+(t?"|":"")),B.a7,B.c0,f,B.dJ,B.c1)
m.nD(346)
J.br(v.save())
u=A.i3(D.aaB)
r=$.ma()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.i3(new A.a3(30+390*n,96,420,346)),r[1],!0)
m.a4(a0,new A.r(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bw(new A.a3(u,r,u+40,r+90),B.fQ)
u=A.L()
u.r=D.byo.gp(0)
a0.aq(r,u)}}else{m=A.fz(f,B.cx,f,f,f,D.fx4,B.K,B.c0,f,B.dJ,B.c1)
m.nD(340)
m.a4(a0,new A.r(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.h.F(u+p/8,1)
o=B.o.F(e.gqB().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.S,B.Q,B.V,B.X,B.T)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.O(new A.r(70+o+k*6,166+l*70),1.6,j)}u=e.ghe(0).gzw()
i=(u==null?f:u.c)===D.oB?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.f9K(d,a0,i,t,h,D.eu1)),new A.y(520,new C.f9L(a0,d,t)),new A.y(575,new C.f9M(a0,d,t)),new A.y(585,new C.f9N(this,a0,d,t)),new A.y(615,new C.f9O(this,t,a0,d,h))],x.E)
B.d.b0(g,new C.f9P())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cdg(d,e){var w,v,u,t,s,r,q,p=$.R(),o=A.a([],x.v),n=new A.aG(p.r,B.ai,null,null,o)
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
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hJO(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gj1(){var w=this.z
return w===$?this.z=this.FT(0):w},
gaMf(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FT(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cj(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FT(0):r).length);++v}s.Q=w
r=w}return r},
FT(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e4(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e_()
u.cU(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f0(u,new C.bTu())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a3()
this.as3()},
t(){var w,v=this
v.e.t()
w=v.Mg$
w===$&&A.c()
w.t()
w=v.qh$
w.V$=$.aw()
w.R$=0
v.bwZ()},
ary(d){var w,v,u,t,s,r=this,q=r.gj1().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cj(u===$?r.z=r.FT(0):u,v)
s=r.gaMf()
s[v]=s[v]+(450*(t+0.5)/q-r.gaMf()[v])*Math.min(1,w)}},
d2D(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj1().length)return
w=v.y
if(w===-1){v.m(new C.bTF(v,d))
return}if(w===d){v.m(new C.bTG(v))
return}v.m(new C.bTH(v,B.d.cj(v.gj1(),v.y),d,B.d.cj(v.gj1(),d)))},
cNA(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FT(0):u).length))break
t=s.gkS()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FT(0):u)[v]]===v);++v}s.m(new C.bTA(s,B.d.cA(w,new C.bTB())))},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkS().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bTC(t,s))
w=5
return A.b(C.BT(t.a.d,s),$async$kN)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BU(q.d,q.c.a,"lineup",t.r*10),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bTD())
w=1
break
case 4:t.m(new C.bTE(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.as(A.d(""+l.r+" of "+l.gkS().length+" lines right",k,k,k,k,k,k,B.q2,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tE("Line Up",A.cv(A.a([D.ags,w,B.aO,new C.Iz(v,u,l.ch,k),B.aO,A.as(C.uw("Back to the games",new C.bTw(d),B.cV,B.kc,D.fC),k,k,k)],x.p),k,k,B.ac,k,k,B.ah,!1),B.f7,k)}w=A.a([],x.t)
for(t=0;v=l.gkS(),t<v[l.f].d.length;++t)w.push(t)
B.d.b0(w,new C.bTx(l))
u=A.bS(0,A.ci(new C.bTy(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aXQ,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fFz,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fHP,B.K,k,k)],q),B.l,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.l(16)
n=l.ax
m=A.K(n?D.lH:B.np,B.r,2)
r.push(A.o(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bTz(l),x.cM).aN(0,", then ")+".",k,k,k,k,k,k,D.fK1,k,k,k),B.f,k,k,new A.n(p,k,m,o,k,k,B.n),k,k,k,B.da,B.bl,k,k,1/0))}if(!l.at)r.push(C.uw("That is my line!",l.gcNz(l),B.cV,B.hc,D.fC))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uw(w,l.gqt(l),B.cV,B.ju,D.fC))}return new C.tE("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ao(12,A.x(r,B.l,k,B.e,B.N,0,B.p),k,k,12,12,k,k)],q),k),B.f7,k)}}
C.bku.prototype={
a4(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qh$.a
c7.GE(c5.e.MS(c8))
w=C.hgC(c8)
v=c7.c
J.br(v.save())
v.translate(w.a,w.b)
c7.bV(0,w.c)
u=c5.gj1().length
t=$.R().r
s=x.v
r=new A.aG(t,B.ai,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.ce(225,500,440,470))
q=A.L()
q.r=D.a_8.gp(0)
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
c7.af(k,m)}this.b1Y(c7,"OLDEST",D.ev_,B.cV)
this.b1Y(c7,"YOUNGEST",D.eus,B.be)
t=A.bw(D.fgt,B.fQ)
s=A.L()
s.r=D.Gu.gp(0)
c7.aq(t,s)
s=A.bw(D.fgs,B.is)
t=A.L()
t.r=D.BV.gp(0)
c7.aq(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b0(t,new C.dtv())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.cj(a1===$?c5.z=c5.FT(0):a1,f)
o=c5.gaMf()[f]
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
if(a3){$.R()
a9=new A.ar(B.S,B.Q,B.V,B.X,B.T)
a9.r=B.cV.j(0.22+0.1*Math.sin(e)).gp(0)
c7.O(new A.r(o,520),54,a9)}a9=D.dnZ[B.o.F(b0,6)]
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
else b9=a3?D.ex3:c4
if(b1)c0=new A.r(3+b2*8,-56)
else if(h&&a7)c0=D.aNv
else c0=a3?new A.r(30,-104+Math.sin(e)*5):c4
C.SP(c7,new A.r(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.K1,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.jM(new A.eu(a8,c4,c4,B.cN,c4,c4,c4,c4,c4,c4,D.fDf),B.a7,B.c0,new A.ji(1),"\u2026",c4,1,c4,B.c1,c4,B.cx)
c1.nD(q)
c2=A.bw(A.bX(new A.r(o,650),24,c1.b.c+16),B.fQ)
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
c3=new A.jM(new A.eu(""+(a2+1),c4,c4,B.cN,c4,c4,c4,c4,c4,c4,D.fDz),B.a7,B.c0,new A.ji(1),c4,c4,c4,c4,B.c1,c4,B.cx)
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
b1Y(d,e,f,g){var w,v,u=null,t=A.fz(u,B.cx,u,u,u,A.cR(u,u,u,u,u,u,u,u,u,A.m(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,E.DS,u,u),e),B.a7,B.c0,u,B.dJ,B.c1)
t.ep()
w=t.b
v=w.c
w=w.a.c
t.a4(d,f.aJ(0,new A.r(v/2,w.gb9(w)/2)))},
aE(d){return!1}}
C.a2p.prototype={
a7(){return"_Trip."+this.b}}
C.amv.prototype={
T(){return new C.amw(D.XW,new A.eF(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.amw.prototype={
gDF(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFe(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghe(d){var w,v=this,u=v.e
if(u===$){w=C.Nc(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqB(){var w=this.f
return w===$?this.f=new C.aLz(new C.bTg(this)):w},
gUg(){var w=this.ghe(0)
return w.gzw()==null?"Grandma":B.a.i(w.gzw().b)},
Z(){this.a3()
this.as3()},
t(){var w,v=this
v.gqB().t()
w=v.Mg$
w===$&&A.c()
w.t()
w=v.qh$
w.V$=$.aw()
w.R$=0
v.bwY()},
ary(d){var w,v,u,t=this
if(t.r!==D.aen)return
w=B.dK.aA(0,B.h.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDF()
if(v+1>=u.length){t.r=D.aeo
t.Xf()}else{++t.w
t.ay=!1
t.r=D.XX
t.gqB().Wi(u[t.w].a)}if(t.c!=null)t.m(new C.bTe())}},
Xf(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Xf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqB().Wi("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDF().length
r=C.bHx(t,u.z,s)
u.as=r
w=2
return A.b(C.BT(u.a.d,r),$async$Xf)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BU(s.d,s.c.a,"journey",u.x*10),$async$Xf)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bT8())
return A.h(null,v)}})
return A.i($async$Xf,v)},
bs9(){this.aUZ()},
aUZ(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.aen
if(w.c!=null)w.m(new C.bT9())},
Lp(d){var w,v,u,t,s=this
if(s.r!==D.XX)return
w=s.gDF()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bTd(s,d,v))
u=s.gqB()
t=s.w
u.Wi(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cSL(){if(this.r!==D.Bs)return
this.aUZ()},
B(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.e6(A.b3(s,s,s,new C.bjV(t,t.qh$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDF().length;++w){v=t.w
if(w<v||t.r===D.aeo)v=B.cV
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(new A.bz(1,B.bd,A.o(s,s,B.f,s,s,new A.n(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,B.wM,s,s,s,s),s))}p.push(B.bn)
p.push(D.fXU)
return new C.tE("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ao(10,t.cmW(),s,s,10,10,s,s)],q),s),B.f7,s)},
cmW(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bTc(o),l=D.qr.j(0.96),k=A.l(22),j=A.K(B.cV,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gUg()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aXO,B.K,n,n),B.U,C.uw("Start the journey",o.gbs8(),B.cV,D.bTc,D.fC)],x.p),B.l,n,B.e,B.N,0,B.p)
break
case 3:w=D.beT
break
case 1:w=o.w
v=o.gDF()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ax(D.lG,2.5,B.r,-1)
t.push(A.ay(n,A.o(n,A.d(r[s],n,n,n,n,n,n,D.aX9,B.K,n,n),B.f,n,D.afI,new A.n(D.ale,n,new A.bG(p,p,p,p),new A.be(q,q,q,q),n,n,B.n),n,n,n,n,K.wG,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bTa(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.P,A.c_(B.bI,t,B.br,n,8,8)],u),B.E,n,B.e,B.N,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDF().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.P,new A.bK(B.a9,n,n,C.uw(v,o.gcSK(),B.cV,B.ju,D.fC),n)],x.p),B.E,n,B.e,B.N,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gUg()),B.P,A.d(""+o.x+" of "+o.gDF().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aXr,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aRD(v)
u=C.aRD(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.acC,n,n,n))}w.push(B.P)
w.push(A.as(C.uw("Back to the games",new C.bTb(o),B.cV,B.kc,D.fC),n,n,n))
w=A.x(w,B.E,n,B.e,B.N,0,B.p)
break
default:w=n}return A.o(n,w,B.f,n,n,new A.n(l,n,j,k,D.aEF,n,B.n),n,n,n,n,B.bl,n,n,n)}}
C.bjV.prototype={
a4(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qh$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDF(),d0=B.h.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.aen,d2=c7*0.5
c8=A.ap(D.bjK,D.buC,d0)
c8.toString
w=A.ap(D.Zh,B.aiQ,d0)
w.toString
v=A.ap(B.us,D.bsY,d0)
v.toString
$.R()
u=A.L()
t=x.O
u.sam(A.jz(B.J,new A.r(0,d2),A.a([c8,w,v],t),B.a5k,B.x,c3))
d3.aD(new A.a3(0,0,0+c6,0+c7),u)
s=new A.r(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.sam(A.wh(s,60,A.a([D.btm,B.L],t),c3,B.x,c3,c3,0))
d3.O(s,60,u)
u=A.L()
u.r=B.Zv.gp(0)
d3.O(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.h.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dDH[o]
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
k.r=A.ap(l===0?D.big:D.bxN,D.bnp,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cdh(d3,new A.r(B.h.F(B.h.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.R()
w=A.L()
v=A.ap(D.ako,D.GJ,d0)
v.toString
w.sam(A.jz(new A.r(0,d2),new A.r(0,c7),A.a([v,D.bto],t),c3,B.x,c3))
d3.aD(new A.a3(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.bmD.gp(0)
d3.aD(new A.a3(0,a0,c6,a1),w)
w=A.L()
w.r=D.bxo.gp(0)
d3.aD(new A.a3(0,a0-3,c6,a0),w)
for(q=-B.h.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.S,B.Q,B.V,B.X,B.T)
u.r=E.Ne.gp(0)
d3.aD(new A.a3(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.R()
b2=new A.ar(B.S,B.Q,B.V,B.X,B.T)
b2.r=D.bhV.gp(0)
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
b0.r=D.bvv.gp(0)
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
b0.r=D.byU.gp(0)
d3.aq(b5,b0)
b0=new A.ar(B.S,B.Q,B.V,B.X,B.T)
b0.r=D.BV.gp(0)
b0.b=B.ab
b0.c=2
d3.aq(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.jM(new A.eu(b6,c3,c3,B.cN,c3,c3,c3,c3,c3,c3,D.fBG),B.a7,B.c0,new A.ji(1),c3,c3,c3,c3,B.c1,c3,B.cx)
b7.ep()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a4(d3,new A.r(b4-b1/2,a2-b0.gb9(b0)/2))
if(a7)b8=c4.r===D.aeo
else if(r===c4.w){b0=c4.r
b0=b0===D.XX||b0===D.Bs
b8=b0}else b8=!1
if(a7){b0=c4.ghe(0).gzw()
b9=(b0==null?c3:b0.c)===D.oB?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqB()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.Bs
b0=c0?C.hFQ(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.XX?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.r(40,-110+Math.sin(g)*10)
else a7=c0?new A.r(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.SP(d3,new A.r(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.r(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bJg(d3,new A.r(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.h.F(w+r/7,1)
$.R()
t=new A.ar(B.S,B.Q,B.V,B.X,B.T)
t.r=D.bwS.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.XW)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.h.F(w+r/5,1)
t=Math.sin(r+c8)
$.R()
m=new A.ar(B.S,B.Q,B.V,B.X,B.T)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.Bs&&c4.ax){b7=A.fz(c3,B.cx,c3,c3,c3,A.cR(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.m(c3,c3,B.cV,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,Q.J1,c3,c3),"BEEP BEEP!"),B.a7,B.c0,c3,B.dJ,B.c1)
b7.ep()
b7.a4(d3,new A.r(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cdh(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.bsS,D.blW,g)
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
t.r=D.a_F.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d47[r]
p=new A.ar(B.S,B.Q,B.V,B.X,B.T)
p.r=D.a_F.gp(0)
p.c=4
p.d=B.bG
d.ah(new A.r(w,t),new A.r(v+q*24,s),p)
p=new A.ar(B.S,B.Q,B.V,B.X,B.T)
p.r=o.gp(0)
d.O(new A.r(v+q*26,u),10,p)}}else{w=e.a5(0,D.ex0)
$.R()
v=A.L()
v.r=D.bhX.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bX(e.a5(0,D.ex1),16,60)
w=A.L()
w.r=o.gp(0)
d.c1(v,w)}},
bJg(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.XW?0.045:0,a1=a2.c
J.br(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jq(0,a0)
for(w=0;w<2;++w){v=D.dvN[w]
u=d.ay&&d.r!==D.XW&&v>0
J.br(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.R()
s=new A.ar(B.S,B.Q,B.V,B.X,B.T)
s.r=D.bxE.gp(0)
a2.O(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.S,B.Q,B.V,B.X,B.T)
s.r=D.bpz.gp(0)
a2.O(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.S,B.Q,B.V,B.X,B.T)
q.r=B.bh.gp(0)
q.c=2
a2.ah(B.J,new A.r(s*9,t*9),q)}a1.restore()}p=A.r_(D.fgQ,B.fQ,B.fQ,B.ir,B.hW)
$.R()
t=A.L()
t.sam(A.jz(D.et7,B.a9v,D.dlu,B.a5k,B.x,f))
a2.aq(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.S,B.Q,B.V,B.X,B.T)
s.r=D.dfr[B.o.F(o,4)].gp(0)
a2.aD(new A.a3(t,-26,t+10,-19),s)}n=d.r===D.Bs&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a3(s,-66,q,-36)
J.br(a1.save())
a1.clipRRect(A.mU(A.bw(l,B.pT)),$.my(),!0)
k=new A.ar(B.S,B.Q,B.V,B.X,B.T)
k.r=D.Zh.gp(0)
a2.aD(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.Bs?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.SP(a2,new A.r(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aNm,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bw(l,B.pT)
i=new A.ar(B.S,B.Q,B.V,B.X,B.T)
i.r=D.alg.gp(0)
i.b=B.ab
i.c=2
a2.aq(j,i)}d=A.bw(D.Vh,B.pT)
t=A.L()
t.r=D.Zh.gp(0)
a2.aq(d,t)
J.br(a1.save())
a1.clipRRect(A.mU(A.bw(D.Vh,B.pT)),$.my(),!0)
C.SP(a2,new A.r(D.Vh.gbD().a,-10),0,0,0.7,-0.1,f,f,D.aNm,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bw(D.Vh,B.pT)
d=A.L()
d.r=D.alg.gp(0)
d.b=B.ab
d.c=2
a2.aq(t,d)
d=A.L()
d.r=B.Cj.gp(0)
a2.O(D.evf,4,d)
d=A.L()
d.r=D.Gu.gp(0)
a2.aD(D.fhZ,d)
for(w=0;w<3;++w){v=D.dvP[w]
d=A.bw(new A.a3(v,-96,v+28,-79),B.jy)
t=new A.ar(B.S,B.Q,B.V,B.X,B.T)
t.r=D.GJ.gp(0)
a2.aq(d,t)}a1.restore()},
aE(d){return!1}}
C.aCg.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bC()}}
C.bhs.prototype={}
C.aCi.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bC()}}
C.bht.prototype={}
C.aCj.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bC()}}
C.bhu.prototype={}
C.a6T.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b3(w,w,w,new C.bk1(w),B.az),w)}}
C.bk1.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dtI[B.o.F(n,6)]
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
B(d){var w=null,v=x.p,u=A.a([A.aH(w,w,w,w,B.QC,w,w,w,new C.bT7(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.fyY,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c5(w,D.Z1,A.o(w,A.bm(!0,A.x(A.a([D.c82,new A.D(D.bK2,A.A(u,B.l,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.ba8,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.Iz.prototype={
B(d){var w=null,v=this.d,u=C.aRD(v),t=C.io1(v),s=B.c.j(0.08),r=A.l(18),q=A.K(B.cV.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fBr,w,w,w)],x.p)
if(this.e)p.push(D.ezr)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.h6,w,w,w))
if(t!=null)p.push(new A.D(B.uN,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.Fa,w,w,w),w))
return A.o(w,A.x(p,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.n(s,w,q,r,w,w,B.n),w,w,w,w,B.bH,w,w,w)}}
C.WA.prototype={
T(){return new C.bmP(A.S(x.N,x.S),B.o.F(Date.now(),1e5))},
cZF(d){return this.f.$1(d)},
ge3(){return this.d}}
C.bmP.prototype={
gTg(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a3()
this.PS()},
PS(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$PS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bTT(u.a.d),$async$PS)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.djy[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bTS(p,(o===$?u.d=q.c:o).a,r),$async$PS)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e3P(u,n))
return A.h(null,v)}})
return A.i($async$PS,v)},
uG(d){return this.cq_(d)},
cq_(d){var w=0,v=A.j(x.H),u=this,t
var $async$uG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a6(t,!1).cf(A.ef(new C.e3Q(d),!1,null,x.H)),$async$uG)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.PS()
return A.h(null,v)}})
return A.i($async$uG,v)},
gb7j(){var w,v,u,t=C.Nc(this.gTg()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2Y(d){return this.cxe(d)},
cxe(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2Y=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].aj())
w=2
return A.b(u.a.cZF(r),$async$a2Y)
case 2:if(u.c!=null)u.m(new C.e3R(u,r))
return A.h(null,v)}})
return A.i($async$a2Y,v)},
Pb(d){return this.bS2(d)},
bS2(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Pb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hiZ(t.gTg())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.MX("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a6(s,!1).cf(A.ef(new C.e3N(q),!1,null,r)),$async$Pb)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bk(j,new C.e3O(p))
o=s.length
B.d.ca(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2Y(A.cT(s,0,A.dA(2,"count",x.S),r).dq(0)),$async$Pb)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Pb,v)},
Yb(d,e){return this.bPC(0,e)},
bPC(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Yb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cg(null,null,!0,null,new C.e3M(e),o,null,!0,!0,x.y),$async$Yb)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hiZ(u.gTg()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2Y(o),$async$Yb)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Yb,v)},
aaE(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e3J(this,j):h
o=o?0.55:1
w=A.ap(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.l(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.ab(0,B.G,g.j(0.35),B.cz,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.W6,p,p,p),B.b4],s)
q=A.l(10)
r.push(A.o(p,A.d(i,p,p,p,p,p,p,D.fzR,p,p,p),B.f,p,p,new A.n(B.hQ,p,p,q,p,p,B.n),p,p,p,p,B.za,p,p,p))
return A.ay(p,A.d0(A.o(p,A.x(A.a([A.A(r,B.l,p,B.e,B.i,0,p,p),B.b4,A.d(e,p,2,p,p,p,p,D.fHI,p,p,p),B.cS,A.d(f,p,3,B.a2,p,p,p,D.fAz,p,p,p)],s),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.n(p,p,u,v,t,new A.a7(B.ay,B.aC,B.x,w,p,p),B.n),p,p,p,p,B.z1,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
XF(d,e,f,g,h,i){return this.aaE(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Nc(s.gTg()),p=s.gTg(),o=C.aRD(s.e),n=C.hiZ(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e3S(s),k=C.hJO(p,1).length,j=C.hJZ(p,1).length,i=C.hKT(p,1).length,h=B.c.j(0.07),g=A.l(20),f=A.K(B.cV.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,B.acp,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fFb,r,r,r),a0=q.b.length,a1=x.p
g=A.o(r,A.A(A.a([e,B.bc,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.Wo,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.q2,r,r,r),D.h3c],a1),B.l,r,B.e,B.i,0,B.p)],a1),B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.n(h,r,f,g,r,r,B.n),r,r,r,r,B.bH,r,r,r)
f=s.XF("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aD,new C.e3T(s,p),l.$1("kahoot"))
h=s.XF("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lG,new C.e3U(s,p),l.$1("fire"))
a0=s.XF("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.wu,new C.e3V(s,p),l.$1("catch"))
j=j!==0?new C.e3Y(s,p):r
j=s.aaE("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hN,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e3Z(s,p):r
i=s.aaE("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lF,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.XF("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.fn,new C.e4_(s,p),l.$1("journey"))
k=k!==0?new C.e40(s,p):r
k=A.a([g,B.aO,D.h7e,B.P,A.l_(0.98,A.a([f,h,a0,j,i,e,s.aaE("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.ep,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.XF("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d6,new C.e41(s,p),l.$1("school"))],a1),2,12,12,r,B.e0,!0),B.db,A.A(A.a([D.bLS,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fzV,r,r,r)],a1),B.l,r,B.e,B.i,0,r,r),B.P],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ax(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fOP,B.bc,new A.bz(1,B.bd,A.x(A.a([A.d(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hi,r,r,r),A.d(""+v.gaq2(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.Fa,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),r)],a1)
if(v.gaq2(0).length>=2){f=D.lH.j(0.2)
t=new A.ax(D.lH,1,B.r,-1)
g.push(A.ay(r,A.o(r,A.X(B.hd,D.lH,r,r,r,20),B.f,r,r,new A.n(f,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e42(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cV.j(0.2)
t=new A.ax(B.cV,1,B.r,-1)
f=A.ay(r,A.o(r,A.X(B.jc,B.cV,r,r,r,20),B.f,r,r,new A.n(f,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e43(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fi.j(0.2)
t=new A.ax(B.fi,1,B.r,-1)
B.d.u(g,A.a([B.bn,f,B.bn,A.ay(r,A.o(r,A.X(B.ej,B.fi,r,r,r,20),B.f,r,r,new A.n(e,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e44(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.o(r,new A.c8(B.aM,B.e,B.i,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.n(i,r,new A.bG(u,u,u,u),new A.be(h,h,h,h),r,r,B.n),r,r,r,B.da,B.bl,r,r,r))}if(s.a.e){j=m?new C.e3W(s):new C.e3X(a2)
i=A.l(18)
h=A.K(m?B.cV:B.aT,B.r,2)
g=m?B.cV.j(0.12):B.dp
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.ay(r,A.o(r,A.as(A.d(f,r,r,r,r,r,r,A.m(r,r,m?B.cV:B.aF,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.n(g,r,h,i,r,r,B.n),r,r,r,r,B.Ox,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.h8a)
k.push(B.aB)
k.push(D.au7)
return new C.tE("Family Games \xb7 "+p.b,A.cv(k,r,r,D.bG2,r,r,B.ah,!1),B.f7,r)}}
C.a0i.prototype={
a7(){return"_KPhase."+this.b}}
C.amx.prototype={
T(){return new C.amy(D.b22)},
gd1(){return this.e}}
C.amy.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a2()},
fY(d){var w,v=this
v.m(new C.bTs(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.dh(B.fM,new C.bTt(v))},
aQs(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new C.bTi(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.dh(B.fg,new C.bTj(w))},
Lp(d){var w
if(this.d!==D.adS)return
w=this.at
if(w!=null)w.a1(0)
this.b7f(d)},
b7f(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.h.S(500+500*B.h.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bTo(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cy(B.t4,v.giC(v))},
cMb(d){var w=this
if(w.d!==D.Xt)return
if(w.e+1>=w.a.w.length)w.YY()
else{w.m(new C.bTp(w))
w.aQs()}},
YY(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$YY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bHx(p,u.w,t)
u.m(new C.bTl(u,s))
w=2
return A.b(C.BT(u.a.e,s),$async$YY)
case 2:r=e
t=u.a
w=3
return A.b(C.BU(t.e,t.f,t.r,u.f),$async$YY)
case 3:q=e
if(u.c!=null)u.m(new C.bTm(u,r,q))
return A.h(null,v)}})
return A.i($async$YY,v)},
cN0(){var w,v,u,t,s=this,r=s.a,q=new A.e_()
q.cU(r.w.length*31+B.a.gY(r.f))
w=s.a.w.length*900
v=A.a([new A.b4("You",s.f,!0)],x.bd)
r=A.B(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cT(r,0,A.dA(4,"count",x.S),A.T(r).c),u=r.$ti,r=new A.bR(r,r.gJ(0),u.k("bR<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b4(t,B.h.S(w*(0.35+q.ai()*0.5)),!1))}B.d.b0(v,new C.bTq())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b22===r){w=A.a([D.h3B,B.U,A.d(s,t,t,t,t,t,t,B.Wy,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fA2,t,t,t))
w.push(B.aB)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.Bc,B.K,t,t))
w.push(B.e3)
w.push(C.uw("Play",u.geX(u),B.cV,B.hd,D.fC))
w=A.as(new A.D(B.eA,A.x(w,B.l,t,B.e,B.N,0,B.p),t),t,t,t)
break A}if(D.b23===r){w=A.as(A.d(""+u.z,t,t,t,t,t,t,D.fIf,t,t,t),t,t,t)
break A}if(D.adS===r||D.Xt===r){w=u.csC()
break A}if(D.b24===r){w=u.cdi()
break A}w=t}return new C.tE(s,w,B.f7,t)},
csC(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.Xt,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aWZ,j,j,j),B.b4],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.Lj,j,j,j))
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
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.m(j,j,e?D.lH:B.np,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.P,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fz6,B.K,j,j)],h),B.l,j,B.e,B.N,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fKq,B.K,j,j)
w=A.E(A.o(j,A.as(u,j,j,j),B.f,j,j,new A.n(D.qr,j,v,w,j,j,B.n),j,j,j,j,B.fu,j,j,1/0),3)
v=A.a([],h)
for(u=k.giC(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bTn(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aEh[o]
m=new A.aP(16,16)
l=new A.ax(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.d(D.aEB[o],j,j,j,j,j,j,D.fB1,j,j,j),B.as,new A.bz(1,B.bd,A.d(r[t],j,3,B.a2,j,j,j,D.fA_,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(B.asB)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.c_H)
v.push(A.ay(j,new A.T4(A.o(j,new A.c8(B.aM,B.e,B.i,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.n(n,j,new A.bG(l,l,l,l),new A.be(m,m,m,m),L.aCF,j,B.n),j,j,j,j,B.f2,j,j,j),p,B.b0,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.af,w,B.af,A.E(A.l_(1.45,v,2,10,10,j,B.e0,!1),4)],h)
if(i)h.push(D.eyH)
return new A.D(B.a1i,A.x(h,B.l,j,B.e,B.i,0,B.p),j)},
cdi(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cN0(),m=x.p,l=A.a([D.be9,A.as(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.q2,o,o,o),o,o,o),A.as(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Wb,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cV.j(0.25):B.dp
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ax(s?B.cV:B.bw,1,B.r,-1)
q=A.d(w<3?D.dlL[w]:""+(w+1),o,o,o,o,o,o,B.mC,o,o,o)
s=s?B.u:B.O
l.push(A.o(o,new A.c8(B.aM,B.e,B.i,B.l,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.bz(1,B.bd,A.d(t.a,o,o,o,o,o,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.d(""+t.b,o,o,o,o,o,o,B.iI,o,o,o)],m),o),B.f,o,o,new A.n(v,o,new A.bG(r,r,r,r),new A.be(u,u,u,u),o,o,B.n),o,o,o,B.cy,B.eX,o,o,o))}l.push(B.U)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.Iz(m,v,p.CW,o))
l.push(B.aO)
l.push(A.as(C.uw("Back to the games",new C.bTk(p),B.cV,B.kc,D.fC),o,o,o))
return A.cv(l,o,o,B.fu,o,o,B.ah,!1)}}
C.Uf.prototype={
T(){return new C.amu(A.S(x.de,x.er))}}
C.amu.prototype={
gDk(){var w,v=this,u=v.d
if(u===$){w=C.hoZ(v.a.c.aj())
v.d!==$&&A.bE()
v.d=w
u=w}return u},
glX(d){var w,v,u=this,t=u.e
if(t===$){w=u.gDk().b
v=$.aw()
u.e!==$&&A.bE()
t=u.e=new A.at(new A.bc(w,B.b7,B.aP),v)}return t},
cgj(d){return this.f.c_(0,d,new C.bST(d))},
Z(){this.a3()
var w=this.gDk().c
if(w.length===0)w.push(C.haq(null,0,20,""))},
t(){var w,v,u=this.glX(0)
u.V$=$.aw()
u.R$=0
for(u=this.f,u=new A.dp(u,u.r,u.e);u.C();)for(w=J.aT(u.d);w.C();){v=w.gP(w)
v.V$=$.aw()
v.R$=0}this.a2()},
cM1(){if(this.gDk().c.length>=12)return
this.m(new C.bSU(this))},
jG(d){var w,v,u=this,t=u.gDk()
t.b=B.a.i(u.glX(0).a.a)
w=t.gaq2(0)
if(t.b.length===0||w.length<2){u.c.K(x.q).f.U(D.fs2)
return}v=t.c
B.d.a8(v)
B.d.u(v,w)
v=u.c
v.toString
A.a6(v,!1).N(t)},
B(d){var w,v,u=this,t=null,s=new C.bT3(),r=x.p,q=A.a([A.bP(!1,D.fTQ,t,t,!0,t,t,t,u.gbr0(u),t,t)],r),p=A.a([D.h7M,B.af,A.aN(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glX(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ac,t,t,t,t,t,t,t,t,t,t,t,B.h6,!0,B.a7,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gDk().c.length,w<v;++w)B.d.u(p,A.a([new A.fh(new C.bT2(u,w,s),t)],r))
if(v<12)p.push(A.as(C.uw("\uff0b Add a question",u.gcM0(),B.aT,t,B.c),t,t,t))
return new C.tE("Make your game",A.cv(p,t,t,D.bG_,t,t,B.ah,!1),q,t)}}
C.arF.prototype={
T(){return new C.aFQ(A.a([],x._))},
bu(){return this.r.$0()},
qu(){return this.w.$0()},
ge3(){return this.c}}
C.aFQ.prototype={
Z(){var w,v
this.a3()
this.wE()
w=this.a
v=w.c
if(v.length!==0)C.a8C(v,w.e,w.d.w)},
wu(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hlO(r,t.e,!1,s.w,new C.e5u(u),null,s),$async$wu)
case 2:w=3
return A.b(u.wE(),$async$wu)
case 3:return A.h(null,v)}})
return A.i($async$wu,v)},
a1a(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a1a=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hlO(r,t.e,!0,s.w,new C.e5t(u),null,s),$async$a1a)
case 2:w=3
return A.b(u.wE(),$async$a1a)
case 3:return A.h(null,v)}})
return A.i($async$a1a,v)},
wE(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wE=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bl(q.a.c),$async$wE)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.e5w(q,p))
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
return A.b(C.Hs(q.a.c).dc(0,B.qE),$async$wE)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e5x(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e5y(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wE,v)},
Px(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Px=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.K(s).f.U(D.frD)
w=3
return A.b(C.Hs(t.a.c),$async$Px)
case 3:r=e
w=4
return A.b(C.h_S(t.a.c,r),$async$Px)
case 4:q=e
w=5
return A.b(C.Hs(t.a.c),$async$Px)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e5s(t,p))
o=t.c.K(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(null,null,null,q?B.dL:B.d3,null,B.t,null,s,null,B.lM,null,null,null,null,null,null,null,null,null,null))
t.a.qu()
case 1:return A.h(u,v)}})
return A.i($async$Px,v)},
IG(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iwp(l),$async$IG)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.i_6(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b20(q,p.e,l,"Each family tree costs $"+B.h.ad(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$IG)
case 4:if(!e||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
p=C.hG_(r)
o=Date.now()
n=t.a.c
m=new C.kZ(l,r.toUpperCase(),p,!0,B.Z,D.E_,new A.V(o,0,!1),0,n,D.uV,B.cg)
w=5
return A.b(C.a4h(n,m),$async$IG)
case 5:w=6
return A.b(t.wE(),$async$IG)
case 6:t.a.bu()
t.a.qu()
if(t.c==null){w=1
break}t.Fc(m)
case 1:return A.h(u,v)}})
return A.i($async$IG,v)},
Fc(d){return this.cle(d)},
cle(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Fc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bl(u.a.c),$async$Fc)
case 2:n=l.nw(k.dH(f,new C.e5v(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hE(m,new C.arz(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Fc)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a4h(u.a.c,o),$async$Fc)
case 6:case 5:w=7
return A.b(u.wE(),$async$Fc)
case 7:u.a.qu()
return A.h(null,v)}})
return A.i($async$Fc,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.O(d).ax.a===B.I,o=new C.ui(p)
if(r.e)return A.as(A.n_(q,p?B.bu:B.bh,q,q,q,q,q,q,q,q),q,q,q)
if(J.ct(r.d)){w=p?B.ef:B.c
v=A.l(15)
u=A.aE(!1,B.a3,!0,q,A.aM(!1,q,!0,A.o(q,D.bYi,B.f,q,q,new A.n(B.aV.j(0.12),q,A.K(B.aV,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cU,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcki(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Gt(A.o(q,A.x(A.a([u,B.aO,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.m(q,q,p?B.bu:B.bh,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.e3,A.bJ(D.hb1,q,r.gaTM(),A.bp(B.bQ,q,q,q,q,q,B.a1G,q,new A.ba(A.l(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.i,0,B.p),B.f,q,q,new A.n(w,q,q,v,q,q,B.n),q,q,q,q,D.bIK,q,q,1/0),15,B.ag,1.05,D.adF,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b4],v)
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.X(B.zR,B.aV,q,q,q,q),q,q,q,new C.e5A(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.X(B.zN,B.aV,q,q,q,q),q,q,q,r.gahu(),q,q,q,q,"Transfer / backup file",q))
w.push(A.db(B.atw,q,D.fR7,r.gaTM(),A.bp(B.bQ,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.Gt(r.cIb(J.t(r.d,s),o),14,B.ag,1,D.adF,q))
B.d.u(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.l,q,B.e,B.i,0,B.p)],v),B.E,q,B.e,B.i,0,B.p)},
cIb(d,e){var w=null,v=e.a,u=v?B.ef:B.c,t=A.l(14),s=A.K((v?B.eh:B.bO).j(0.55),B.r,1),r=A.a([new A.ab(0,B.G,B.w.j(v?0.35:0.08),B.et,10)],x.V),q=A.l(14),p=A.o(w,D.bXn,B.f,w,w,new A.n(B.aV.j(0.15),w,w,A.l(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gar1(),m=d.d?"":" \xb7 Public",l=d.y===D.kZ?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bF,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.i,0,B.p),1)
return A.o(w,A.aE(!1,B.a3,!0,w,A.aM(!1,q,!0,new A.D(B.bH,A.A(A.a([p,B.bc,l,A.X(B.Ps,v?B.bu:B.bh,w,w,w,w)],k),B.l,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e5z(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj),B.f,w,w,new A.n(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.arz.prototype={
T(){return new C.aFN(A.a([],x._),A.aR(x.N),A.baM())},
bu(){return this.r.$0()},
ge3(){return this.c}}
C.aFN.prototype={
Z(){var w,v,u=this
u.a3()
u.d=u.a.w
u.ae6()
w=u.a
v=w.c
if(v.length!==0)C.a8C(v,w.e,w.d.w)},
t(){var w=this.w
w.V$=$.aw()
w.R$=0
this.a2()},
a47(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a47=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yF("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e4V(r),s,null,!0,!0,x.y),$async$a47)
case 3:if(e!==!0||t.c==null){w=1
break}t.Kk()
t.m(new C.e4W(t,r))
w=4
return A.b(t.uC(),$async$a47)
case 4:t.a.bu()
t.yF(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a47,v)},
cxO(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.x1$.push(new C.e4Q(w,f,d,e))},
aW4(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.ds()
u.ec(w,v,0,1)
u.k7(q,q,1,1)
this.w.sp(0,u)},
bdS(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eM(new Float64Array(16))
q.e6(r)
w=q.Dp()
v=B.h.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.ds()
t.ec(r,u,0,1)
t.k7(v,v,1,1)
t.ec(-r,-u,0,1)
t.iZ(0,q)
s.sp(0,t)},
ae6(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ae6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bl(u.a.c),$async$ae6)
case 2:t=s.nw(r.dH(e,new C.e4h(u)))
if(t!=null&&u.c!=null)u.m(new C.e4i(u,t))
return A.h(null,v)}})
return A.i($async$ae6,v)},
yF(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
wu(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hlO(o,t,!1,r,new C.e4z(u),q.a,s),$async$wu)
case 2:n=A
m=J
w=3
return A.b(C.Hs(u.a.c),$async$wu)
case 3:p=n.nw(m.dH(e,new C.e4A(u)))
if(p!=null&&u.c!=null)u.m(new C.e4B(u,p))
return A.h(null,v)}})
return A.i($async$wu,v)},
Kk(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cH(w,0)},
uC(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a4h(t,s),$async$uC)
case 2:return A.h(null,v)}})
return A.i($async$uC,v)},
a2F(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a2F=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.ux(q,t.a.c)){t.yF("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.ixC(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a2F)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Kk()
t.m(new C.e4P(t,r))
w=4
return A.b(t.uC(),$async$a2F)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2F,v)},
b3V(){var w=this.c
w.toString
A.a6(w,!1).cf(A.ef(new C.e4w(this),!1,null,x.H))},
a1n(){return this.clg()},
clg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a1n=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.ux(m,t.a.c)){t.yF("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.O(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e4M(),A.T(s).k("Y<1>")).gJ(0)
s=A.ew([0,2,3,4,5,6,8,r],x.S)
p=A.B(s,s.$ti.k("cj.E"))
B.d.ff(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.L,null,new C.e4N(n,t,new C.ui(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a1n)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Kk()
t.m(new C.e4O(t,o))
w=6
return A.b(t.uC(),$async$a1n)
case 6:case 5:if(o.a&&t.c!=null)t.b3V()
case 1:return A.h(u,v)}})
return A.i($async$a1n,v)},
WZ(d){return this.bEA(d)},
bEA(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.ux(r,t.a.c)){t.yF("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e45(t,d),r,null,!0,!0,x.P),$async$WZ)
case 3:s=f
if(s==null){w=1
break}t.Kk()
t.m(new C.e46(t,s))
w=4
return A.b(t.uC(),$async$WZ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WZ,v)},
a4s(d){return this.cKq(d)},
cKq(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a4s=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.O(s)
t=u.c
t.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.e4Y(u,d,new C.ui(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a4s)
case 2:return A.h(null,v)}})
return A.i($async$a4s,v)},
chw(d){var w=this,v=w.d
v===$&&A.c()
if(C.ux(v,w.a.c))w.Pc(d)
else w.a4s(d)},
ak_(d,e){return this.cBM(d,e)},
cBM(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ak_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.O(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.e4S(new C.ui(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ak_)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ak_,v)},
IL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kZ?3:5
break
case 3:w=6
return A.b(C.h8D(t.a.c),$async$IL)
case 6:s=e
o=t.a
r=C.htR(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ak_(!s,!r),$async$IL)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aRI(o,t.a.c)){t.yF("Only the tree creator can delete this family tree.")
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
case 11:t.a.bu()
o=t.c
if(o==null){w=1
break}A.j3(o,null)
case 1:return A.h(u,v)}})
return A.i($async$IL,v)},
abA(d){return this.bPT(d)},
bPT(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$abA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.ux(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aS(s,new C.e47(p))){o=A.T(s)
p.a=A.nw(new A.cM(new A.Y(s,new C.e48(d),o.k("Y<1>")),new C.e49(),o.k("cM<1,q>")))}q=p.a
if(q==null)q=d.d
t.Kk()
t.m(new C.e4a(t,s,d,q))
w=3
return A.b(t.uC(),$async$abA)
case 3:t.yF(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$abA,v)},
Pc(d){return this.bS6(d)},
bS6(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Pc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.ux(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a4s(d),$async$Pc)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.e4e(t,d),r,null,!0,!0,x.P),$async$Pc)
case 6:s=f
if(s==null){w=1
break}t.Kk()
t.m(new C.e4f(t,s))
w=7
return A.b(t.uC(),$async$Pc)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Pc,v)},
cIB(){var w=this,v=w.d
v===$&&A.c()
if(!C.ux(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e4X(w))
w.uC()},
a_1(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aRI(n,t.a.c)){t.yF("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.O(n)
s=$.aw()
r=new A.at(B.ax,s)
q=t.d.e
p=A.bs(new A.N(q,t.gcg_(),A.T(q).k("N<1,q>")).c0(0,new C.e4r()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e4s(t,new C.ui(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$a_1)
case 3:o=e
r.V$=s
r.R$=0
if(o!==!0||t.c==null){w=1
break}t.Kk()
t.m(new C.e4t(t,p))
w=4
return A.b(t.uC(),$async$a_1)
case 4:t.yF("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$a_1,v)},
cg0(d){return B.a.i(d.toLowerCase())},
ck2(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.ux(v,w)
t=r.d
s=C.imy(t)
C.iwt(q,t.b,u,C.imx(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.ui(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.e54(),A.T(l).k("Y<1>")).gJ(0)
l=n?B.c6:B.hM
v=A.X(B.a2Q,n?B.bu:B.bh,o,o,o,18)
u=x.p
v=A.a([new A.D(B.CF,A.aM(!1,o,!0,new A.D(B.hA,A.A(A.a([v,B.bn,A.d("Back to Family Trees",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.N,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e55(p,d),o,o,o,o,o,o,o),o),new A.D(B.nI,p.c2k(m),o)],u)
if(p.d.y===D.kZ){t=B.tD.j(0.15)
s=A.l(12)
r=A.K(B.tD.j(0.45),B.r,1)
q=C.Hq(p.d,p.a.c)
v.push(new A.D(B.z4,A.o(o,A.A(A.a([D.c1R,B.as,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.n(t,o,r,s,o,o,B.n),o,o,o,o,B.hR,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b4],u)
if(C.ux(p.d,p.a.c)&&p.e.length!==0)u.push(new C.GF("Undo",B.pC,p.gcIA(),m,o,o))
u.push(new C.GF("Family Book",D.bS1,p.gck1(),m,B.ut,o))
u.push(new C.GF("Family games",B.nO,p.gckd(),m,B.aD,o))
if(C.ux(p.d,p.a.c))u.push(new C.GF("Display settings",B.Dx,p.gclf(),m,B.b3,o))
u.push(new C.GF("Sync",B.zN,p.gahu(),m,o,o))
t=p.d
if(t.y===D.kZ||C.aRI(t,p.a.c)){t=p.d.y===D.kZ?"Remove shared tree":"Delete tree"
u.push(new C.GF(t,B.ej,p.gbQ2(),m,B.fi,o))}if(C.ux(p.d,p.a.c))u.push(new C.GF("Add member",B.x0,new C.e56(p),m,B.bQ,o))
v.push(new A.D(B.anh,A.A(u,B.l,o,B.e,B.i,0,o,o),o))
if(p.d.gar1()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.ci(new C.e57(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?G.a2U:P.Pt,o,o,o,o,o)
v.push(A.as(A.ht(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e58(p),o),o,o,o))}return A.c5(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c2k(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.l(22)
v=A.a([new A.ab(0,B.G,B.fW.j(0.35),B.dn,18)],x.V)
u=A.l(22)
t=A.ao(-26,A.X(B.zE,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aE(!1,B.a3,!0,m,A.aM(!1,m,!0,A.o(m,D.c5a,B.f,m,m,new A.n(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cU,!0,m,m,m,m,m,m,m,m,m,m,m,n.gahu(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.fC4,m,m,m)
r=r.gar1()
p=n.d.gar1()===1?"member":"members"
o=x.p
p=A.a([s,B.bc,A.E(A.x(A.a([q,B.bF,A.d(""+r+" "+p,m,m,m,m,m,m,A.m(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.i,0,B.p),1)],o)
if(C.ux(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.c24,m,m,m,n.gcv9(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.jL:B.n5
r=r?"Private":"Public"
r=A.E(n.axA(q,"Privacy",r,n.a.d.w?n.gcHw():m),1)
q=A.E(n.axA(B.x5,"Tree code",n.d.c,new C.e4g(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.ae,q,B.ae,A.E(n.axA(D.bTK,"Collaborators",p,n.gc7b()),1)],o),B.l,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.kZ){s=B.c.j(0.15)
B.d.u(p,A.a([B.P,A.aE(!1,B.a3,!0,A.l(999),A.aM(!1,A.l(999),!0,new A.D(B.ho,A.A(A.a([A.X(B.nP,B.c,m,m,m,14),B.e7,A.d("View only",m,m,m,m,m,m,B.aX3,m,m,m)],o),B.l,m,B.e,B.N,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.aj)],o))}return A.o(m,A.bv(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.Hi,A.x(p,B.E,m,B.e,B.i,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.n(m,m,m,w,v,D.c9u,B.n),m,m,m,m,m,m,m,1/0)},
axA(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aE(!1,B.a3,!0,A.l(14),A.aM(!1,A.l(14),!0,new A.D(B.aow,A.x(A.a([A.X(d,B.c,w,w,w,18),B.aw,A.d(e,w,1,B.a2,w,w,w,A.m(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.rj,A.d(f,w,1,B.a2,w,w,w,B.xF,w,w,w)],x.p),B.l,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)}}
C.bhw.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bM
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bhz(s,t),new A.au(w,v))],x.p)
r=r.gdQ(r)
B.d.u(u,r.dO(r,new C.diY(this),x.l))
r=s.c
B.d.u(u,new A.N(r,new C.diZ(this),A.T(r).k("N<1,v>")))
return new A.D(B.uR,new A.a5(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.L0.prototype={}
C.GJ.prototype={}
C.bhy.prototype={
gbmq(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aLu.prototype={}
C.bhz.prototype={
bRI(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
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
t.E(new A.hU(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.hU(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bx())
q=A.L()
q.r=B.c.gp(0)
d.O(new A.r(u,w),9,q)
q=A.L()
q.r=B.bE.gp(0)
d.af(t,q)},
bRF(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b0(a0,new C.dji())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aS(a0,new C.djj(f))
t=new A.N(a0,new C.djk(f),A.T(a0).k("N<1,G>")).c0(0,new C.djl()).cC(0,1/0,B.rz)
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
if(s!=null&&s.length!==0)this.bRF(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bRI(d,w,r.a,r.b)}},
aE(d){return d.b!==this.b}}
C.bll.prototype={
gcdk(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aES
switch(w.c.a){case 0:return D.d2L
case 1:return D.dfl
case 2:return D.dxI}},
gcdn(){var w=this.c,v=C.hFc(w.w),u=C.hFc(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.O(d).ax.a===B.I,q=t.gcdk(),p=t.c,o=A.bG7(p.f),n=t.gcdn(),m=x.V,l=A.a([new A.ab(0,B.G,B.d.gal(q).j(0.35),B.cM,10)],m),k=r?B.av:B.c,j=A.K(r?B.av:B.c,B.r,2)
if(o!=null)w=A.tH(B.A,s,B.cn,B.bX,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.o(B.A,A.d(v,s,s,s,s,s,s,A.m(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.n(s,s,s,s,s,new A.a7(B.a5,B.a9,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.o(s,A.o(s,A.i4(w,B.aq),B.f,s,s,new A.n(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.n(s,s,s,s,l,new A.a7(B.ay,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.CU,s,s,56)],v)
k=t.d
if(k>0){j=A.l(10)
w=A.K(r?B.av:B.c,B.r,1.5)
l.push(A.ao(s,A.o(s,A.d(""+k,s,s,s,s,s,s,D.fMV,s,s,s),B.f,s,s,new A.n(B.cj,s,w,j,s,s,B.n),s,s,s,s,D.bKG,s,s,s),s,s,s,-6,-4,s))}k=r?B.ct:B.c
j=A.l(8)
w=A.K(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ab(0,B.G,B.w.j(r?0.3:0.06),B.dM,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.m(s,s,r?B.c:B.ct,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.m(s,s,r?B.aR:B.bh,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.ay(s,new A.a5(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.aw,A.o(s,A.x(p,B.l,s,B.e,B.N,0,B.p),B.f,s,D.b8h,new A.n(k,s,w,j,m,s,B.n),s,s,s,s,D.bKR,s,s,s)],v),B.l,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bgA.prototype={
a4(d,e){var w,v,u,t,s
$.R()
w=A.L()
v=this.b
u=v?B.c:D.blu
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.O(new A.r(s,t),1,w)},
aE(d){return d.b!==this.b}}
C.bzr.prototype={
B(d){var w=this,v=null,u=new C.fpz(w),t=w.c,s=t?B.ct:B.c,r=A.l(12),q=u.$3(B.i0,"Zoom in",w.d),p=A.o(v,v,B.f,t?B.bw:B.fr,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.x2,"Zoom out",w.e)
return A.aE(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.o(v,v,B.f,t?B.bw:B.fr,v,v,v,1,v,v,v,v,v,22),u.$3(B.aqZ,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.N,0,B.p),B.f,s,4,v,B.dC,v,v,v,B.aj)}}
C.boH.prototype={
B(d){var w=this,v=null,u=B.bQ.j(0.15),t=A.K(B.bQ,B.r,2),s=w.e,r=x.p
t=A.ay(v,A.o(v,A.x(A.a([A.X(s?G.a2U:P.Pt,B.bQ,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fIV,v,v,v)],r),B.l,v,B.b9,B.i,0,B.p),B.f,v,v,new A.n(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fGG,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.u(t,new A.N(s,new C.f_u(w),A.T(s).k("N<1,v>")))
B.d.u(u,t)}return new A.a5(84,v,A.x(u,B.l,v,B.e,B.i,0,B.p),v)}}
C.a0v.prototype={
T(){return new C.aEf()},
bu(){return this.Q.$0()},
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
if(t==null)w=C.io2(w.r,w.f)
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
QI(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$QI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.htR(p.y,p.w)
w=3
return A.b(A.ly(t.a.w,B.JV),$async$QI)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b20(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$QI)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.i_7(p.y,p.w)
t.a.bu()
case 5:w=7
return A.b(A.DM(78,800),$async$QI)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dze(t,q))
case 1:return A.h(u,v)}})
return A.i($async$QI,v)},
cdm(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
abb(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$abb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dzd(r),s,null,!0,!0,x.y),$async$abb)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$abb,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.O(d).ax.a===B.I,i=new C.ui(j),h=l.a.e,g=A.T(h).k("Y<1>"),f=A.B(new A.Y(h,new C.dzn(l),g),g.k("M.E"))
h=j?B.ef:B.c
g=A.l(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bJ5,A.d(w,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hd(A.aM(!1,k,!0,new A.D(B.lR,A.X(B.ej,B.pp,k,k,k,17),k),B.cU,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbMC(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jZ:B.iA
t=A.bG7(l.as)
if(l.as==null)s=A.X(B.pw,j?B.bu:B.bh,k,k,k,40)
else s=k
s=A.as(A.ay(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.hg(u,t,s,k,42),A.ao(0,A.hg(B.bQ,k,D.bWr,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcdj(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aEh(t,"Full name",B.mi,1,1,i,B.mA)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.U,new C.blj(i,u,new C.dzo(l),k)],v),B.l,k,B.e,B.i,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bCp],q)
o=l.a.e
B.d.u(p,new A.N(o,new C.dzp(),A.T(o).k("N<1,eS<q?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bCr],q)
B.d.u(q,new A.N(f,new C.dzr(),A.T(f).k("N<1,eS<q?>>")))
o=A.x(A.a([t,B.am,new C.aeF(i,r,"Who is their parent?",p,new C.dzs(l),k,o),B.aB,n,B.am,new C.aeF(i,m,"Who is their spouse / partner?",q,new C.dzt(l),k,o)],v),B.al,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.c()
q=C.aEh(q,"Birth date",D.aq9,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aEh(m,"Birth place",B.a39,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aEh(n,"Date of death (if deceased)",D.ase,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aEh(p,"Occupation",B.Qs,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ad,B.t,w,k),B.aB,s,B.bx,new C.aeG(i,"Identity",u,k),B.af,new C.aeG(i,"Family links",o,k),B.af,new C.aeG(i,"Life details",A.x(A.a([q,B.U,m,B.U,n,B.U,p,B.U,C.aEh(r,"Notes",B.l0,5,3,i,k)],v),B.l,k,B.e,B.i,0,B.p),k),B.af,new C.aEg(i,"Child order",l.clu(l.at),new C.dzu(l),new C.dzv(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hiN(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dzw(l):k
B.d.u(r,A.a([B.U,new C.aEg(i,"Visible in tree",u,w,new C.dzx(l),k)],v))}r.push(B.U)
w=j?B.jZ:B.iA
u=A.l(14)
t=A.K(j?B.eh:B.bO,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.o(k,A.iV(k,B.bQ,k,B.ag,k,new C.dzy(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.n(w,k,t,u,k,k,B.n),k,k,k,k,G.amX,k,k,k))
r.push(B.bx)
w=j?B.aS:B.av
j=j?B.eh:B.bO
r.push(A.A(A.a([A.E(A.dU(B.o8,new C.dzq(d),A.dj(k,k,k,k,k,k,k,k,k,w,k,k,B.co,k,new A.ba(A.l(14),B.a1),new A.ax(j,1,B.r,-1),k,k,k,k)),1),B.bc,A.E(A.bJ(D.fjd,k,l.gcdl(),A.bp(B.aV,k,k,0,B.c,k,B.co,k,new A.ba(A.l(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.i,0,k,k))
r.push(B.aw)
return A.en(B.f7,k,B.ag,h,new A.a5(420,k,A.cc(A.x(r,B.al,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.anP,k,B.an8,new A.ba(g,B.a1),k,k)},
clu(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aeG.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jZ:B.iA,s=A.l(16)
return A.x(A.a([new A.D(B.a1K,u,w),A.o(w,this.e,B.f,w,w,new A.n(t,w,A.K(v?B.eh:B.bO,B.r,1),s,w,w,B.n),w,w,w,w,B.bl,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)}}
C.blk.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.ef:B.c,r=A.l(12),q=A.K((t?B.eh:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.m(u,u,t?B.aS:B.av,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.o(u,A.aN(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bA(u,B.eN,u,B.ta,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.m(u,u,t?B.bu:B.bh,u,u,u,u,u,u,u,u,u,u,u,B.cE,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bQ,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ac,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a7,u,p,u,u,u,u),B.f,u,u,new A.n(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aeF.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.ef:B.c,s=A.l(12),r=A.K((u?B.eh:B.bO).j(0.85),B.r,1),q=A.X(B.tl,u?B.bu:B.bh,v,v,v,v),p=A.m(v,v,u?B.aS:B.av,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.ef:B.c
return A.o(v,new A.Ew(A.a5N(v,o,A.d(w.f,v,v,v,v,v,v,A.m(v,v,u?B.bu:B.bh,v,v,v,v,v,v,v,v,v,v,v,B.cE,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.n(t,v,r,s,v,v,B.n),v,v,v,v,B.kX,v,v,v)}}
C.blj.prototype={
B(d){var w=new C.dzz(this)
return A.A(A.a([w.$3(D.wO,"Male",B.Qd),B.ae,w.$3(D.oB,"Female",B.Q_),B.ae,w.$3(D.zh,"Other",B.nM)],x.p),B.l,null,B.e,B.i,0,null,null)}}
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
C.aeH.prototype={
bVT(d){switch(d.a){case 0:return B.bQ
case 1:return B.bE
case 2:return B.cC}},
bVU(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b_A(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AV(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
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
afQ(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jZ:B.iA,s=A.l(16),r=A.K(v?B.eh:B.bO,B.r,1)
return A.x(A.a([new A.D(B.a1K,u,w),A.o(w,A.x(e,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.n(t,w,r,s,w,w,B.n),w,w,w,w,B.bS,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hKG(r,q),o=q.c,n=t.bVT(o),m=A.bG7(q.f),l=t.e.a,k=l?B.ef:B.c,j=A.l(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.m(s,s,l?B.aS:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kZ?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.m(s,s,l?B.bu:B.bh,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.ab(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.as(A.o(s,A.hg(u,m,m==null?A.X(B.pw,n,s,s,s,48):s,s,52),B.f,s,s,new A.n(s,s,w,s,v,s,B.a6),s,s,s,s,B.eC,s,s,s),s,s,s)
w=n.j(0.14)
v=A.l(20)
u=A.K(n.j(0.45),B.r,1)
v=A.as(A.o(s,A.d(t.bVU(o),s,s,s,s,s,s,A.m(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.n(w,s,u,v,s,s,B.n),s,s,s,s,B.lP,s,s,s),s,s,s)
u=x.p
i=A.a([t.AV("Full name",i,B.mi)],u)
if(p>0)i.push(t.AV("Child order","#"+p,B.Q5))
r=A.a([h,B.aw,r,B.aO,l,B.U,v,B.bx,t.afQ("Identity",i),B.af,t.afQ("Life details",A.a([t.AV("Birth date",q.w,D.aq9),t.AV("Birth place",q.x,B.a39),t.AV("Date of death",q.y,D.ase),t.AV("Occupation",q.z,B.Qs)],u)),B.af,t.afQ("Family links",A.a([t.AV("1. Parent",t.b_A(q.d),B.HJ),t.AV("2. Spouse",t.b_A(q.e),B.HZ)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.afQ("Notes",A.a([t.AV("Notes",q,B.l0)],u))],u))
r.push(B.bx)
r.push(A.bJ(B.Lr,s,new C.dzJ(d),A.bp(B.aV,s,s,s,s,s,B.co,s,new A.ba(A.l(14),B.a1),s,s,s)))
return A.eI(s,k,new A.cN(B.m5,A.cc(A.x(r,B.al,s,B.e,B.N,0,B.p),B.t,s,B.y,s,s,B.wI,s,s,B.ah),s),s,s,s,B.Hl,s,B.d7,s,new A.ba(j,B.a1),s)}}
C.GF.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bh
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uT,A.hd(A.aE(!1,B.a3,!0,A.l(8),A.aM(!1,A.l(8),!0,new A.a5(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.aj),u,v.c,u,u),u)}}
C.arC.prototype={
f1(){var w,v,u=this,t=x.N,s=A.S(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.T(w).k("N<1,ac<q,@>>")
w=A.B(new A.N(w,new C.cgt(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jp(w,new C.cgu(),t,x.fO))
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
return A.b(C.cgx(t.a.c),$async$Kr)
case 3:r=e
w=4
return A.b(C.Bl(t.a.c),$async$Kr)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.ro(q,new C.e5h(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e5i(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Kr,v)},
zd(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
Lg(d,e){return this.cL6(d,e)},
cL6(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Lg=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e5m(q,e))
t=3
w=6
return A.b(d.$0(),$async$Lg)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e5n(q))
$.eX.mK()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Lg,v)},
YM(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pB(r,s.c,s.e),$async$YM)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lg(new C.e5e(t),"Preparing download\u2026"),$async$YM)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YM,v)},
YQ(d){return this.bTL(d)},
bTL(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pB(r,s.c,s.e),$async$YQ)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Lg(new C.e5f(t,d),"Preparing file\u2026"),$async$YQ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YQ,v)},
ahR(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ahR=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xR.cq().N1(B.Td,B.uW,!0),$async$ahR)
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
return A.i($async$ahR,v)},
Zs(d){return this.c3f(d)},
c3f(d){var w=0,v=A.j(x.H),u=this
var $async$Zs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Lg(new C.e5g(u,d),"Restoring family trees\u2026"),$async$Zs)
case 2:return A.h(null,v)}})
return A.i($async$Zs,v)},
Zr(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Zr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ahR(),$async$Zr)
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
return A.b(t.Lg(new C.e5l(t),"Creating QR code\u2026"),$async$a3v)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3v,v)},
a36(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a36=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DJ()){t.zd("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).cf(A.ef(new C.e5j(),!0,null,x.N)),$async$a36)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Zs(r),$async$a36)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a36,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.O(d).ax.a===B.I,n=o?B.C5:B.hM,m=o?D.aln:B.aS,l=o?B.aL:B.bO,k=o?B.aS:B.av,j=new C.djm(n,m,l,k,o?B.bP:B.bh)
l=A.aH(p,p,p,p,A.X(B.eK,k,p,p,p,20),p,p,p,new C.e5p(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eR(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.diV(!0,B.jv,B.aH,B.aH,q.r?p:q.gcBA(),j,s,"Show restore QR"),1),B.as],u))}s=q.e
r=q.r?p:q.gcxJ()
t.push(A.E(C.diV(!s,B.jw,B.b8,B.bi,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.diV(!1,B.hE,B.aV,B.bQ,q.r?p:q.gbTE(),j,"Photos & books included","Download all trees"),1),B.as],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.diV(!1,B.zO,B.at,B.aQ,q.r?p:q.gc3c(),j,s,"Upload backup file"),1))
l=A.a([new C.bhx(v,l,p),B.lb,new C.adW(j,"QR restore",p),B.U,t,B.db,new C.adW(j,"Backup files",p),B.U,A.A(r,B.l,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.lb,new C.adW(j,"One tree",p),B.U],u)
B.d.u(v,J.b9(q.d,new C.e5q(q,j),x.l))
B.d.u(l,v)}l=A.a([A.cv(l,p,p,B.a1C,p,p,B.ah,!1)],u)
if(q.r){v=A.l(18)
t=A.K(B.aV.j(0.35),B.r,1)
s=A.a([new A.ab(0,B.G,B.w.j(o?0.3:0.1),B.dn,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.o(p,A.A(A.a([G.aVn,B.bc,A.E(A.d(r,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.i,0,p,p),B.f,p,p,new A.n(m,p,t,v,s,p,B.n),p,p,p,p,B.CM,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c5(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.djm.prototype={}
C.bhx.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.l(24)
u=A.a([new A.ab(0,B.G,B.aV.j(0.32),B.kG,28)],x.V)
t=A.ao(p,A.X(B.vg,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.l(18)
q=x.p
return A.o(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ac,A.A(A.a([A.o(p,D.c4E,B.f,p,p,new A.n(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.p4,A.E(A.x(A.a([D.fSa,B.P,A.d(w,p,p,p,p,p,p,A.m(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.i,0,B.p),1)],q),B.E,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.n(p,p,p,v,u,D.ccR,B.n),p,p,p,p,p,p,p,p)}}
C.adW.prototype={
B(d){var w=null
return A.A(A.a([A.o(w,w,B.f,w,w,new A.n(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ae,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)}}
C.bhv.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.l(18),n=A.l(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.ab(0,B.G,B.aH.j(0.1),B.cM,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.l(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aE(!1,B.a3,!0,q,A.aM(!1,o,!0,A.eE(A.d0(new A.D(B.a1g,A.x(A.a([A.o(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.n(v,q,s,u,q,q,B.n),q,q,q,q,B.te,q,q,q),B.af,A.d(r.e,q,q,q,q,q,q,A.m(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bF,A.d(r.f,q,q,q,q,q,q,A.m(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cE,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.i,0,B.p),q),w),q,new A.n(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)}}
C.bhA.prototype={
B(d){var w=this,v=null,u=A.l(18),t=A.l(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aV.j(0.14),p=A.l(12),o=s.e,n=x.p
return A.aE(!1,B.a3,!0,v,A.aM(!1,u,!0,A.eE(new A.D(B.eX,A.A(A.a([A.o(v,D.c3Q,B.f,v,v,new A.n(q,v,A.K(B.aV.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.te,v,v,v),B.bc,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.m(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.m(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.i,0,B.p),1),A.X(B.hE,o,v,v,v,20)],n),B.l,v,B.e,B.i,0,v,v),v),v,new A.n(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.aj)}}
C.a0P.prototype={
T(){return new C.aFO()},
gd1(){return this.c}}
C.aFO.prototype={
Z(){this.a3()
this.aaJ()},
aaJ(){var w=0,v=A.j(x.H),u=this,t
var $async$aaJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b4G(u.a.c,B.EE),$async$aaJ)
case 2:t=e
if(u.c!=null)u.m(new C.e59(u,t))
return A.h(null,v)}})
return A.i($async$aaJ,v)},
aji(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aji=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e5a(q))
t=4
p=A.hvD(q.a.d,B.EE)
if(p==null){n=A.bb("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.atV(n.e,m,l,B.EE,p,n.f),$async$aji)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e5b(q))
q.c.K(x.q).f.U(D.fsR)
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
if(q.c!=null)q.m(new C.e5c(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aji,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.O(d).ax.a===B.I,o=p?B.ny:B.qs,n=p?B.iK:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eR(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.h7G,q,q,q,1,q,!0)
w=A.l(24)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.qf(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.m(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.o(q,A.x(A.a([B.P,u,B.bx,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.m(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.b9,B.i,0,B.p),B.f,q,q,new A.n(n,q,v,w,q,q,B.n),q,q,q,q,B.ac,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.m(q,q,p?B.aa:B.bz,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcxs()
if(u)u=B.KS
else u=A.X(r.e===!0?B.hc:B.aq8,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a5(1/0,q,A.ep(u,q,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ce,q,q,q),t,A.dj(q,q,q,q,q,q,q,q,q,B.aV,q,B.hh,q,q,q,new A.ax(B.aV.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.ih,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.m(q,q,p?B.aF:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.U)
w.push(new A.a5(1/0,q,A.bJ(B.Bd,q,new C.e5d(d),A.bp(B.aV,q,q,q,q,B.hh,q,q,q,q,q,q)),q))
return A.c5(m,o,new A.D(B.ac,A.x(w,B.l,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a0Q.prototype={
T(){return new C.bmQ(A.zV(B.yP,B.oe,B.vo))}}
C.bmQ.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return A.c5(A.eR(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h_o,w,w,w,1,w,!0),B.w,A.zU(this.d,B.bX,new C.e5r(this,d)),w,!1,!1,w,w)}}
C.b0w.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.m(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.SI,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lR.prototype={}
C.a7E.prototype={
T(){return new C.bmu(null,null)}}
C.bmu.prototype={
Z(){var w=this,v=null
w.a3()
w.d=A.bo(v,B.t4,v,1,v,w)
w.e=A.bo(v,B.nC,v,1,v,w)
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
this.bzO()},
B(d){var w,v,u=this,t=B.d.dM(D.a7f,new C.dRl(u),new C.dRm())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cEp(A.c6(new A.he(A.a([w,v],x.dS)),new C.dRn(u,t),null),!0)}}
C.bmt.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b4l(d,e)
break
case"house":p.mo(d,e,D.dkx)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdj()
$.R()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.O(new A.r(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mu(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.BJ(d,e,12)
p.yP(d,e,B.lk,5,14)
break
case"grocery":p.cme(d,e)
break
case"calculator":p.clW(d,e)
break
case"lumber":p.cmm(d,e)
break
case"kitchen":p.cmh(d,e)
break
case"landscape":p.mo(d,e,D.dl6)
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
p.BJ(d,e,8)
p.yP(d,e,B.iB,4,18)
break
case"plumbing":p.cmx(d,e)
break
case"electrical":p.mo(d,e,D.dwS)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.R()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aD(new A.a3(0,0,0+e.a,0+e.b),u)
p.mu(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mu(d,e,B.or.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.BJ(d,e,10)
break
case"store":p.cmH(d,e)
break
case"paint_remodel":p.cms(d,e)
break
case"roofing":p.cmz(d,e)
break
case"warehouse":p.cmO(d,e)
break
case"vehicles":p.cmM(d,e)
break
case"farm":p.cm8(d,e)
break
case"restaurant":p.cmy(d,e)
break
case"tools":p.cmK(d,e)
break
case"wallet":p.cmN(d,e)
break
case"concrete":p.cm1(d,e)
break
case"blueprint":p.clU(d,e)
break
default:p.b4l(d,e)}},
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
yP(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdj()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.R()
r=new A.ar(B.S,B.Q,B.V,B.X,B.T)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.O(new A.r(q+t*o,p+s*o),3.5,r)}},
BJ(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.h.F(t*0.17,0.9)
q=B.h.F(t*0.23,0.85)
$.R()
p=new A.ar(B.S,B.Q,B.V,B.X,B.T)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.O(new A.r(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b4l(d,e){var w,v=this
v.mo(d,e,D.dv7)
w=v.c
v.mu(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mu(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bRB(d,e,B.hP,w)
v.yP(d,e,B.c.j(0.7),6,8)},
bRB(d,e,f,g){var w,v,u,t,s,r
$.R()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aD(new A.a3(16,r,t,r+3),w)}},
cme(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mo(d,e,D.cyG)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.ar(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.R()
m=new A.ar(B.S,B.Q,B.V,B.X,B.T)
m.r=D.diE[B.o.F(t,4)].j(0.85).gp(0)
d.O(new A.r(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mu(d,e,B.c.j(0.35),w,16)
l.yP(d,e,B.iB,5,12)},
clW(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mo(d,e,D.cyO)
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
r=D.dmV[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb4(0,new A.eu(r,h,h,B.cN,h,h,h,h,h,h,new A.F(!0,q,h,h,h,h,14+m*4,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.ep()
p.a4(d,new A.r(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ar(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cyQ[o]
l=B.kP.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb4(0,new A.eu(m,h,h,B.cN,h,h,h,h,h,h,new A.F(!0,l,h,h,h,h,12+k*3,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.ep()
p.a4(d,new A.r(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ar(o,3)*0.38)+Math.sin(n)*6))}i.mu(d,e,B.c.j(0.35),w*1.5,14)
i.mu(d,e,B.ey.j(0.55),-v*3.141592653589793*2,8)
i.mu(d,e,B.on.j(0.4),r*2.8,22)
i.yP(d,e,B.pk,8,10)
i.BJ(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.h.F(w+o*0.22,0.9)
$.R()
v=new A.ar(B.S,B.Q,B.V,B.X,B.T)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.r(12,j),new A.r(t,j),v)}},
cmm(d,e){var w,v,u,t,s,r,q,p,o=this
o.mo(d,e,L.aBY)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bw(new A.a3(20,r,u,r+10),B.hg)
$.R()
p=new A.ar(B.S,B.Q,B.V,B.X,B.T)
p.r=A.ap(B.fY,B.oh,(s+1)/2).gp(0)
d.aq(q,p)}o.mu(d,e,B.fY.j(0.35),w,15)
o.BJ(d,e,8)},
cmh(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mo(d,e,D.dja)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.h.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.h.F(s*0.13,0.7)
$.R()
m=new A.ar(B.S,B.Q,B.V,B.X,B.T)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.O(new A.r(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mu(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
l.yP(d,e,B.qg,4,14)},
cmx(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mo(d,e,D.d6X)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.h.F(s,0.12)
$.R()
o=new A.ar(B.S,B.Q,B.V,B.X,B.T)
o.b=B.ab
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.O(new A.r(w,u),q*(0.12+r*0.14+p),o)}n.yP(d,e,B.po,6,12)
n.mu(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cmH(d,e){var w,v,u,t,s,r,q,p=this
p.mo(d,e,D.cMC)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bw(new A.a3(r,14,r+u,22),B.jy)
$.R()
q=new A.ar(B.S,B.Q,B.V,B.X,B.T)
q.r=A.ap(B.fB,B.bL,(s+1)/2).gp(0)
d.aq(r,q)}p.mu(d,e,B.c.j(0.3),w,16)
p.BJ(d,e,8)
p.yP(d,e,B.wp,5,13)},
cms(d,e){var w,v,u,t,s,r,q
this.mo(d,e,D.ddv)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.h.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bw(new A.a3(r,q,r+8,q+(18+s*22)),B.is)
$.R()
r=new A.ar(B.S,B.Q,B.V,B.X,B.T)
r.r=[B.iy,B.dy,B.bL,B.ew][t].j(0.85).gp(0)
d.aq(q,r)}this.mu(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cmz(d,e){var w,v,u,t,s,r,q
this.mo(d,e,D.daL)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.h.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.R()
q=new A.ar(B.S,B.Q,B.V,B.X,B.T)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.r(u*(0.1+r),s),new A.r(u*(0.18+r),s+10),q)}this.yP(d,e,B.cA,7,11)},
cmO(d,e){var w,v,u,t,s,r,q,p
this.mo(d,e,D.cPo)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bw(new A.a3(q,p,q+(t-s*8),p+16),B.hg)
$.R()
q=new A.ar(B.S,B.Q,B.V,B.X,B.T)
q.r=A.ap(B.cA,B.aS,(Math.sin(r)+1)/2).gp(0)
d.aq(p,q)}this.mu(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cmM(d,e){var w,v,u,t,s,r,q
this.mo(d,e,D.dBe)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.h.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bw(new A.a3(s,r,s+28,r+8),B.hg)
$.R()
q=new A.ar(B.S,B.Q,B.V,B.X,B.T)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.aq(r,q)}this.BJ(d,e,6)},
cm8(d,e){var w,v,u,t,s,r,q,p
this.mo(d,e,D.dhH)
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
cmy(d,e){var w,v,u,t,s,r,q=this
q.mo(d,e,D.dkl)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bX(new A.r(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.R()
r=new A.ar(B.S,B.Q,B.V,B.X,B.T)
r.r=B.c.j(0.22).gp(0)
d.c1(s,r)}q.yP(d,e,B.qg,5,16)
q.BJ(d,e,7)},
cmK(d,e){var w,v,u,t,s,r,q,p,o=this
o.mo(d,e,D.dyx)
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
cmN(d,e){var w,v,u,t,s,r,q,p,o=this
o.mo(d,e,D.dBY)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bw(new A.a3(q,p,q+36,p+22),B.jy)
$.R()
q=new A.ar(B.S,B.Q,B.V,B.X,B.T)
q.r=A.ap(B.iB,B.or,r).gp(0)
d.aq(p,q)}o.BJ(d,e,9)
o.mu(d,e,B.c.j(0.4),w*2.2,12)},
cm1(d,e){var w,v,u,t,s,r,q,p
this.mo(d,e,D.dpS)
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
clU(d,e){var w,v,u,t,s,r,q
this.mo(d,e,D.dlq)
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
return A.b(C.a9X(s),$async$a0M)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0M,v)},
ahS(d){return this.cp6(d)},
cp6(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iwD(d),$async$ahS)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ahS,v)},
B(d){var w,v,u=null,t=A.O(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.jZ:B.iA
w=x.p
v=A.a([C.aT2(!0,B.rw,1/0,B.qP,u,s,1/0)],w)
if(!r)v.push(new A.bN(new A.n(u,u,u,u,u,new A.a7(B.aY,B.b2,B.x,A.a([B.L,B.w.j(0.35)],x.O),u,u),B.n),B.bk,new A.bK(B.aY,u,u,new A.D(B.t7,A.d("Pick a theme or your own photo",u,u,u,u,u,u,A.m(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,B.aCX,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.db(D.bYb,u,D.fOj,new C.cq8(this,d),A.bp(B.aV,u,u,u,B.c,u,B.k6,u,u,u,u,B.ci)),1),B.ae,A.E(A.ep(D.c5X,u,D.h2A,this.gcfY(),A.dj(u,u,B.w.j(0.35),u,u,u,u,u,u,B.c,u,u,B.k6,u,u,D.b6Q,u,u,u,B.ci)),1)],w),B.l,u,B.e,B.i,0,u,u),u,u,8,8,u,u))
return new A.fG(1.7777777777777777,A.aE(!1,B.a3,!0,B.rw,new A.an(B.a0,u,B.b1,B.t,v,u),B.aq,t,0,u,u,u,u,u,B.aj),u)}}
C.aNW.prototype={
aX(){this.b8()
this.b5()
this.dJ()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdC())
w.ba$=null
w.a2()}}
C.aW_.prototype={}
C.aVZ.prototype={}
C.aU0.prototype={}
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
if(w.length===0){u.c.K(x.q).f.U(D.ftm)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).N(new C.aW_(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.O(d).ax.a===B.I,l=m?B.ef:B.c,k=A.l(20),j=A.o(n,D.c5C,B.f,n,n,new A.n(B.aV.j(0.15),n,n,A.l(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.m(n,n,m?B.aS:B.av,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bF,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bh,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.i,0,B.p),1)
j=A.A(A.a([j,B.bc,i,A.aH(n,n,n,n,A.X(B.cB,m?B.bu:B.bh,n,n,n,n),n,n,n,new C.das(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.i,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bh,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bh,n,n,n,n,n,n,n,n,11,n,n,B.cE,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hvT(new C.dat(o),o.e)
u=o.d
u===$&&A.c()
t=A.m(n,n,m?B.aS:B.av,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jZ:B.iA
r=A.l(12)
q=A.l(12)
p=m?B.eh:B.bO
t=A.aN(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bA(n,new A.b6(4,r,B.du),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ax(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.dau(o),n,!1,n,n,!1,n,!0,n,B.ac,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a7,n,B.L0,n,n,n,n)
u=m?B.aS:B.av
m=m?B.eh:B.bO
return A.eI(n,l,new A.cN(B.m5,A.cc(A.x(A.a([j,B.aO,i,B.aw,w,B.P,v,B.aO,t,B.bx,A.A(A.a([A.E(A.dU(B.ds,new C.dav(d),A.dj(n,n,n,n,n,n,n,n,n,u,n,n,B.co,n,new A.ba(A.l(12),B.a1),new A.ax(m,1,B.r,-1),n,n,n,n)),1),B.as,A.E(A.bJ(D.h2Q,n,o.ga3R(),A.bp(B.aV,n,n,n,B.c,n,B.co,n,new A.ba(A.l(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.i,0,n,n)],h),B.E,n,B.e,B.N,0,B.p),B.t,n,B.y,n,n,B.CO,n,n,B.ah),n),n,n,n,M.CP,n,B.d7,n,new A.ba(k,B.a1),n)}}
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
if(w.length===0){this.c.K(x.q).f.U(D.fqY)
return}v=this.c
v.toString
A.a6(v,!1).N(new C.aVZ(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.O(d).ax.a===B.I,o=p?B.ef:B.c,n=A.l(20),m=A.o(q,D.c1W,B.f,q,q,new A.n(B.bQ.j(0.15),q,q,A.l(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bF,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.m(q,q,p?B.bu:B.bh,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.i,0,B.p),1)
m=A.A(A.a([m,B.bc,l,A.aH(q,q,q,q,A.X(B.cB,p?B.bu:B.bh,q,q,q,q),q,q,q,new C.dao(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.i,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.l(12)
v=A.K(B.aV.j(0.25),B.r,1)
u=A.X(B.apV,B.aV.j(0.9),q,q,q,18)
l=A.o(q,A.A(A.a([u,B.as,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.i,0,q,q),B.f,q,q,new A.n(l,q,v,w,q,q,B.n),q,q,q,q,B.bH,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jZ:B.iA
t=A.l(12)
s=A.l(12)
r=p?B.eh:B.bO
v=A.aN(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bA(q,new A.b6(4,t,B.du),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ax(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.dap(this),q,!1,q,q,!1,q,!0,q,B.ac,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a7,q,B.lc,q,q,q,q)
w=p?B.aS:B.av
p=p?B.eh:B.bO
return A.eI(q,o,new A.cN(B.m5,A.cc(A.x(A.a([m,B.aO,l,B.aB,v,B.bx,A.A(A.a([A.E(A.dU(B.ds,new C.daq(d),A.dj(q,q,q,q,q,q,q,q,q,w,q,q,B.co,q,new A.ba(A.l(12),B.a1),new A.ax(p,1,B.r,-1),q,q,q,q)),1),B.as,A.E(A.bJ(D.h9Y,q,this.ga3R(),A.bp(B.bQ,q,q,q,B.c,q,B.co,q,new A.ba(A.l(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.i,0,q,q)],k),B.E,q,B.e,B.N,0,B.p),B.t,q,B.y,q,q,B.CO,q,q,B.ah),q),q,q,q,M.CP,q,B.d7,q,new A.ba(n,B.a1),q)}}
C.ZZ.prototype={
T(){return new C.azF()}}
C.azF.prototype={
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
gal2(){var w=this.f
w===$&&A.c()
w=A.cX(B.a.i(w.a.a))
return w==null?0:w},
gb7a(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aRk(d){var w,v=B.h.D(this.gKm()+d,0.25,999999),u=B.h.fL(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.v(B.h.M(v))
else{u=B.h.ad(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb4(0,u)
this.m(new C.cIw())},
aAk(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jZ:B.iA,s=A.l(14),r=A.l(14)
u=u?B.eh:B.bO
return A.bA(w,new A.b6(4,s,B.du),w,B.bH,w,w,w,w,!0,new A.b6(4,r,new A.ax(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.l(14),B.afb),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cfZ(d,e,f){return this.aAk(d,e,f,null)},
L4(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gal2()<=0){s.c.K(x.q).f.U(D.fvg)
return}r=s.c
r.toString
v=s.gKm()
u=s.gal2()
t=s.gb7a()
A.a6(r,!1).N(new C.aU0(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.ui(n),l=n?B.ef:B.c,k=A.l(24),j=x.O,i=A.a([B.aV.j(0.22),B.bQ.j(0.14)],j),h=A.l(14)
i=A.o(o,D.bW7,B.f,o,o,new A.n(o,o,A.K(B.aV.j(0.35),B.r,1),h,o,new A.a7(B.a5,B.a9,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bF,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.cE,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1)
i=A.A(A.a([i,B.bc,h,A.aH(o,o,o,o,A.X(B.cB,n?B.bu:B.bh,o,o,o,o),o,o,o,new C.cIC(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.aAk(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Qb),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.L0,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jZ:B.iA
t=A.l(14)
s=A.K(n?B.eh:B.bO,B.r,1)
r=A.aH(o,o,o,o,A.X(B.x2,n?B.aS:B.av,o,o,o,20),o,o,o,new C.cID(p),o,o,o,o,o,B.ci)
q=p.e
q===$&&A.c()
q=A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c7v,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.eb,o,o,o,1,o,o,!1,"\u2022",o,new C.cIE(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.o(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aH(o,o,o,o,A.X(B.i0,n?B.aS:B.av,o,o,o,20),o,o,o,new C.cIF(p),o,o,o,o,o,B.ci)],w),B.l,o,B.e,B.N,0,o,o),B.f,o,o,new A.n(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.as,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.aAk(m,"Amount","0.00",B.hD),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.eb,o,o,o,1,o,o,!1,"\u2022",o,new C.cIG(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a7,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.i,0,o,o)
t=x.gv
u=A.B(new A.N(D.de3,new C.cIH(p,m),t),t.k("ak.E"))
i=A.a([i,B.bx,v,B.aB,h,B.P,s,B.af,A.c_(B.bI,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.U,A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.cfZ(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cII(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.lc,o,o,o,o)],w))}i.push(B.aO)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bQ.j(n?0.12:0.06)],j)
h=A.l(16)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gKm()===B.h.fL(p.gKm())?B.h.M(p.gKm()):p.gKm()
s=p.gb7a()
r=A.Bn(p.gal2())
i.push(A.o(o,A.A(A.a([A.E(A.x(A.a([u,B.aw,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1),C.bGY(p.gKm()*p.gal2(),B.b3,!1,B.u)],w),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.n(o,o,v,h,o,new A.a7(B.a5,B.a9,B.x,j,o,o),B.n),o,o,o,o,B.js,o,o,o))
i.push(B.bx)
j=A.l(14)
h=n?B.eh:B.bO
h=A.dj(o,o,o,o,o,o,o,o,o,o,o,o,B.co,o,new A.ba(j,B.a1),new A.ax(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dU(A.d("Cancel",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cIJ(d),h),1),B.as,A.E(A.db(D.ato,o,D.h5R,p.ga3R(),A.bp(B.aV,o,o,0,B.c,o,B.co,o,new A.ba(A.l(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.i,0,o,o))
return A.eI(o,l,new A.cN(B.Mr,A.cc(A.x(i,B.al,o,B.e,B.N,0,B.p),B.t,o,B.y,o,o,V.tc,o,o,B.ah),o),o,o,o,B.OM,o,B.d7,o,new A.ba(k,B.a1),o)}}
C.a2C.prototype={
T(){return new C.bzj()}}
C.bzj.prototype={
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
v=A.aN(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bA(s,new A.b6(4,A.l(12),B.du),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fp4(t,d),s,!1,s,s,!1,s,!0,s,B.ac,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a7,s,B.ao,s,s,s,s)
u=A.E(A.dU(B.ds,new C.fp5(d),s),1)
r=A.bp(B.bQ,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eI(s,q,new A.D(B.CO,A.x(A.a([o,B.aB,v,B.aO,A.A(A.a([u,B.as,A.E(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fp6(t,d),r),1)],w),B.l,s,B.e,B.i,0,s,s)],w),B.l,s,B.e,B.N,0,B.p),s),s,s,s,s,s,B.d7,s,new A.ba(p,B.a1),s)}}
C.acX.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.Gt.prototype={
T(){return new C.bzh(null,null)}}
C.bzh.prototype={
Z(){var w,v=this
v.a3()
w=A.bo(null,D.bCY,null,1,null,v)
w.cK(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bC8()},
gbDK(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bQ,B.b3],x.O)
case 2:return A.a([B.bv,B.aV,B.b3],x.O)
case 3:return A.a([B.aH,B.cj,B.jG],x.O)
case 4:return A.a([B.fK,B.bQ,B.fq],x.O)
case 0:return A.a([B.aV,B.bQ,B.b3],x.O)}},
B(d){var w=A.O(d),v=this.d
v===$&&A.c()
return new A.e6(A.c6(v,new C.fp2(this,new C.ui(w.ax.a===B.I)),null),null)}}
C.azy.prototype={
T(){return new C.bzi(null,null)}}
C.bzi.prototype={
Z(){var w,v=this
v.a3()
w=A.bo(null,B.nD,null,1,null,v)
w.cK(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bC9()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.fp3(this),null)}}
C.bzg.prototype={
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
w.jO()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aUW(d,q,r,o,0,0.2,4.2,0.92)
p.aUW(d,q,r,s,0.52,0.11,3.2,0.58)}},
aUW(d,e,f,g,h,i,j,k){var w,v,u,t=B.h.F(g+h,1)*f,s=A.hT8(e.a.a,e,t,t+f*i,!0),r=A.ai1(s.gle().a.getBounds())
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
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bC()}}
C.aQ4.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bC()}}
C.ui.prototype={}
C.auF.prototype={
T(){return new C.aHk()},
ge3(){return this.c}}
C.aHk.prototype={
Z(){var w=this
w.a3()
w.d=w.a.d
w.aiJ()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Mj(w,v)
this.a2()},
aiJ(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aiJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bFm(t.c,t.d.a),$async$aiJ)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eXE(u,s))
return A.h(null,v)}})
return A.i($async$aiJ,v)},
Ra(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Ra=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eXv(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Mj(t,s),$async$Ra)
case 2:if(u.c!=null)u.m(new C.eXw(u))
return A.h(null,v)}})
return A.i($async$Ra,v)},
RI(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$RI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.O(p)
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.eXC(t,new C.ui(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$RI)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a9X(q),$async$RI)
case 6:case 5:t.m(new C.eXD(t,r))
w=7
return A.b(t.Ra(),$async$RI)
case 7:case 1:return A.h(u,v)}})
return A.i($async$RI,v)},
WT(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iwo(r),$async$WT)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eXq(t,new C.rt(B.o.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Ra(),$async$WT)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WT,v)},
cl4(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hKC(t,new C.eXu(u),w,v)},
acx(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.o(w,w,B.f,w,w,new A.n(w,w,new A.bG(new A.ax(v,2.5,B.r,-1),B.a1,B.a1,new A.ax(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b6C,w,w,B.n),w,22,w,w,w,w,w,22)},
abz(d){return this.bPQ(d)},
bPQ(d){var w=0,v=A.j(x.H),u=this
var $async$abz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eXt(u,d))
w=2
return A.b(u.Ra(),$async$abz)
case 2:return A.h(null,v)}})
return A.i($async$abz,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.O(a2).ax.a===B.I,e=f?B.c6:B.hM,d=A.l(8),a0=A.X(I.a2R,f?B.bu:B.bh,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.D(B.Hr,A.A(A.a([a0,B.bn,A.d("Back to Projects",g,g,g,g,g,g,A.m(g,g,f?B.bu:B.bh,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.N,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eXF(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.X(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b1,B.t,A.a([A.bv(A.l(22),C.aT2(!0,A.l(22),1/0,B.qP,g,d,1/0),B.aq),A.ao(10,A.db(D.c_Q,g,D.h8e,h.gb55(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.hp,g,new A.ba(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.l(22)
w=x.V
v=A.a([new A.ab(0,B.G,B.aV.j(f?0.5:0.38),B.eS,22),new A.ab(-4,B.G,B.bQ.j(0.2),B.J,32)],w)
u=A.l(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ab(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.l(16)
r=h.d
v=A.o(g,A.o(g,A.bv(s,new A.an(B.a0,g,B.b1,B.t,A.a([C.aT2(!0,A.l(16),1/0,B.PE,g,r.c,1/0),new A.bN(new A.n(g,g,g,g,g,new A.a7(B.aY,B.b2,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bk,g,g),A.ao(g,h.acx(!0),g,g,8,g,8,g),A.ao(g,A.cF9(h.acx(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cF9(h.acx(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cF9(h.acx(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.db(D.bWJ,g,D.h1y,h.gb55(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.hp,g,new A.ba(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.n(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.n(g,g,g,d,v,D.c9c,B.n),g,g,g,g,B.lR,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.l(22)
u=x.O
u=f?A.a([D.bhC,B.ol,B.hm],u):A.a([B.b3,B.aV,B.bQ],u)
t=x.V
s=A.a([new A.ab(0,B.G,B.aV.j(f?0.45:0.35),B.eS,24)],t)
r=A.l(22)
p=A.ao(g,A.X(B.jt,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.l(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.o(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.m(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.n(o,g,m,n,g,g,B.n),g,g,g,g,B.hn,g,g,g)],a1),B.l,g,B.e,B.i,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.m(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bGY(h.d.gxO(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.m(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cE,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.i,0,B.p),1)
n=A.l(14)
m=A.l(14)
l=B.c.j(0.12)
k=A.K(B.h9.j(0.75),B.r,1.6)
t=A.a([new A.ab(0,B.G,B.aH.j(0.28),B.cM,14)],t)
j=B.aH.j(0.22)
i=A.l(10)
u=A.o(g,A.bv(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bHS,A.A(A.a([o,B.as,A.aE(!1,B.a3,!0,g,A.aM(!1,n,!0,A.eE(new A.D(K.wG,A.x(A.a([A.o(g,D.asY,B.f,g,g,new A.n(j,g,A.K(B.aH.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cq,g,g,g),B.fE,D.fR9],a1),B.l,g,B.e,B.N,0,B.p),g),g,new A.n(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcl3(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.aj)],a1),B.l,g,B.e,B.i,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.n(g,g,g,v,s,new A.a7(B.ay,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fG(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bx,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b4,A.db(B.a4I,g,D.fP_,h.gbEd(),A.bp(B.aV,g,g,g,B.c,g,B.hR,g,new A.ba(A.l(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.i,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.ef:B.c
v=A.l(14)
u=A.K(f?B.eh:B.bO,B.r,1)
t=A.X(B.a3c,f?B.bu:B.bh,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.o(g,A.x(A.a([t,B.U,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.m(g,g,f?B.bu:B.bh,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.i,0,B.p),B.f,g,g,new A.n(w,g,u,v,g,g,B.n),g,g,g,g,B.qL,g,g,1/0))}else B.d.u(d,new A.N(w,new C.eXG(h,new C.ui(f)),A.T(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.yV,A.as(A.n_(g,f?B.bu:B.bh,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c5(g,e,A.bm(!0,A.x(A.a([new A.D(B.CF,a0,g),A.E(A.cc(A.x(d,B.E,g,B.e,B.i,0,B.p),B.t,g,B.y,g,g,B.z7,g,g,B.ah),1)],a1),B.E,g,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bHU(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.ef:B.c,p=A.l(16),o=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.cM,12)],x.V),n=A.l(16),m=A.o(u,u,B.f,u,u,D.b9n,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.l(12)
l=A.o(u,A.X(s?B.ij:B.h3,B.b3,u,u,u,20),B.f,u,u,new A.n(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bM
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.m(u,u,r?B.aS:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd0M()
v=A.Bn(d.d)
B.d.u(t,A.a([B.aw,A.d(w+" "+v,u,u,u,u,u,u,A.m(u,u,r?B.bu:B.bh,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.b9,B.N,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bQ.j(0.1)],x.O)
w=A.l(12)
k=A.o(u,C.bGY(d.c*d.d,B.b3,!1,B.u),B.f,u,u,new A.n(u,u,u,w,u,new A.a7(B.a5,B.a9,B.x,k,u,u),B.n),u,u,u,u,B.hp,u,u,u)
w=x.p
return A.o(u,A.bv(n,new A.EV(A.A(A.a([m,A.E(new A.D(B.amQ,A.A(A.a([l,B.bc,t,B.ae,k,A.aH(u,u,u,u,A.X(B.cB,(r?B.bu:B.bh).j(0.75),u,u,u,20),u,u,u,new C.eXr(this,d),u,u,u,u,u,B.ci)],w),B.l,u,B.e,B.i,0,u,u),u),1)],w),B.al,u,B.e,B.i,0,u,u),u),B.aq),B.f,u,D.b8d,new A.n(q,u,u,p,o,u,B.n),u,u,u,B.da,u,u,u,u)}}
C.af1.prototype={
F7(d){return this.bRd(d)},
bRd(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$F7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pB(d,o,!1),$async$F7)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).N(null)
w=4
return A.b(A.bO(U.Cz,null,x.H),$async$F7)
case 4:s=t.d
w=5
return A.b(C.fZz(!0,o,s),$async$F7)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Ho(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$F7)
case 6:p=f
w=7
return A.b(A.pA(o,!1),$async$F7)
case 7:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$F7,v)},
a0O(d){return this.cBB(d)},
cBB(d){var w=0,v=A.j(x.H),u,t=this,s
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
Rb(d){return this.cxE(d)},
cxE(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Rb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).N(null)
w=3
return A.b(A.hE(d,D.aML,!0,"NgmyWorksheetProjectScan",x.N),$async$Rb)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bGZ(s),$async$Rb)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.K(x.q).f.U(D.fun)
w=1
break}q=C.hll(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dL(p,x.H),$async$Rb)
case 5:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Rb,v)},
a0P(d){return this.cJX(d)},
cJX(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0P=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).N(null)
w=3
return A.b(C.bGs(),$async$a0P)
case 3:s=f
if(s==null){w=1
break}r=C.hll(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dL(q,x.H),$async$a0P)
case 4:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0P,v)},
B(d){var w=this,v=null,u=A.O(d).ax.a===B.I,t=new C.ui(u),s=w.d.d.length,r=u?B.ef:B.c,q=A.l(28),p=A.a([new A.ab(0,B.G,B.w.j(u?0.35:0.08),B.kG,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wF,A.o(v,A.x(A.a([w.cAa(d,t,s),new A.D(D.bHf,A.x(A.a([w.b85(t,"QR restore"),B.U,A.A(A.a([w.b34(t,!0,B.jv,B.aH,B.aH,new C.eXI(w,d),"Show to scan","QR code"),B.as,w.aAl(t,B.jw,B.b8,B.bi,new C.eXJ(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.i,0,v,v),B.db,w.b85(t,"Backup files"),B.U,A.A(A.a([w.aAl(t,B.hE,B.aV,B.bQ,new C.eXK(w,d),"Full copy","Backup file"),B.as,w.aAl(t,B.zO,B.at,B.aQ,new C.eXL(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.i,0,v,v)],o),B.E,v,B.e,B.i,0,B.p),v)],o),B.l,v,B.e,B.N,0,B.p),B.aq,v,v,new A.n(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cAa(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.fe,B.cX,B.fW],k):A.a([B.b3,B.aV,B.bQ],k)
w=A.ao(l,A.X(B.vg,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.o(l,l,B.f,l,l,new A.n(B.c.j(0.35),l,l,A.l(4),l,l,B.n),l,4,l,B.kB,l,l,l,36),l,l,l)
u=A.l(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ab(0,B.G,B.w.j(0.2),B.cM,12)],x.V)
r=this.d
s=A.o(l,C.aT2(!0,A.l(13),64,D.bRV,l,r.c,64),B.aq,l,l,new A.n(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.m(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,E.acw,l,l,l)
r=C.bGY(r.gxO(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.l(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.o(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bHD,A.x(A.a([v,A.A(A.a([s,B.eu,A.E(A.x(A.a([u,B.aw,t,B.P,A.A(A.a([r,B.ae,A.o(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.m(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.n(q,l,o,p,l,l,B.n),l,l,l,l,B.fN,l,l,l)],m),B.l,l,B.e,B.i,0,l,l)],m),B.E,l,B.e,B.i,0,B.p),1),A.aH(l,l,l,l,A.X(B.cB,B.c.j(0.85),l,l,l,l),l,l,l,new C.eXH(d),l,l,l,A.n4(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,B.aVa,l,l,l,l),l,l)],m),B.E,l,B.e,B.i,0,l,l)],m),B.l,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.n(l,l,l,l,l,new A.a7(B.ay,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b85(d,e){var w=null,v=A.o(w,w,B.f,w,w,new A.n(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ae,A.d(e.toUpperCase(),w,w,w,w,w,w,A.m(w,w,d.a?B.bu:B.bh,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
b34(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.l(18),p=A.l(18),o=d.a,n=o?D.aln:B.aS
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.eh:B.bO
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.ab(0,B.G,B.aH.j(0.12),B.cM,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.l(12)
s=A.K(h.j(0.35),B.r,1)
t=A.o(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.n(u,r,s,t,r,r,B.n),r,r,r,r,B.te,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.m(r,r,o?B.aS:B.av,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aE(!1,B.a3,!0,r,A.aM(!1,q,!0,A.eE(new A.D(B.a1g,A.x(A.a([t,B.af,u,B.bF,A.d(j,r,r,r,r,r,r,A.m(r,r,o?B.bu:B.bh,r,r,r,r,r,r,r,r,11,r,r,B.cE,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r),r,new A.n(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
aAl(d,e,f,g,h,i,j){return this.b34(d,!1,e,f,g,h,i,j)}}
C.auz.prototype={
T(){return new C.boc()}}
C.boc.prototype={
Z(){this.a3()
this.agC()},
agC(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$agC=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bH_(p.c,p.d),$async$agC)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eXl(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eXm(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agC,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.O(d).ax.a===B.I,f=g?B.C5:B.hM,e=i.d
e=e==null?h:B.a.X(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eK,g?B.aa:B.an,h,h,h,18),h,h,h,new C.eXn(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.m(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.tY],u),B.l,h,B.e,B.i,0,h,h)
t=A.l(24)
s=x.O
s=g?A.a([B.fe,B.cX,B.fW],s):A.a([B.b3,B.aV,B.bQ],s)
r=x.V
q=A.a([new A.ab(0,B.G,B.aV.j(g?0.4:0.3),B.eS,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dl,B.K,h,h)
p=C.bGY(p.gxO(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.l(20)
l=v===1?"item":"items"
s=A.o(h,A.x(A.a([o,B.am,A.A(A.a([p,B.ae,A.o(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.m(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.n(n,h,h,m,h,h,B.n),h,h,h,h,B.fN,h,h,h)],u),B.l,h,B.b9,B.i,0,h,h)],u),B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.n(h,h,h,t,q,new A.a7(B.ay,B.aC,B.x,s,h,h),B.n),h,h,h,h,B.a1B,h,h,1/0)
t=g?D.btg:B.c
q=A.l(24)
p=A.K(w?B.aH.j(0.4):B.aV.j(0.3),B.r,1)
r=A.a([new A.ab(0,B.G,B.w.j(g?0.25:0.06),B.dn,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.W5,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eyL)
else{m=A.l(20)
l=A.K(B.bm,B.r,1)
o.push(A.o(h,A.qf(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.n(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bT,h,h,h))}}o.push(B.aO)
n=w?B.aH:B.aV
n=n.j(g?0.15:0.1)
m=A.l(12)
l=A.K((w?B.aH:B.aV).j(0.35),B.r,1)
k=w?B.PU:B.Qr
k=A.X(k,w?B.aH:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.o(h,A.A(A.a([k,B.as,A.E(A.d(j,h,h,h,h,h,h,A.m(h,h,g?B.aa:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.i,0,h,h),B.f,h,h,new A.n(n,h,l,m,h,h,B.n),h,h,h,h,B.hR,h,h,h))
return A.c5(h,f,A.bm(!0,A.x(A.a([new A.D(B.P_,e,h),A.E(A.cc(A.x(A.a([s,B.aO,A.o(h,A.x(o,B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.n(t,h,p,q,r,h,B.n),h,h,h,h,B.uS,h,h,1/0)],u),B.l,h,B.e,B.i,0,B.p),B.t,h,B.y,h,h,B.ao_,h,h,B.ah),1)],u),B.l,h,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.auE.prototype={
T(){return new C.aHj(A.zV(B.Oe,B.oe,B.vo))}}
C.aHj.prototype={
t(){this.d.t()
this.a2()},
aPi(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j3(w,d)},
cgR(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.iup(t)
if(s!=null){this.aPi(s)
return}r=C.hAs(t)
if(r!=null)q=A.cS(r,p,0)
else q=!1
if(q){this.aPi(B.a.i(B.a.aY(r,B.a.cj(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eR(A.a([A.aH(t,t,t,t,A.X(u.f?B.v3:B.Q1,t,t,t,t,t),t,t,t,new C.eXp(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.C5,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.h1q,t,t,t,1,t,!0),q=A.zU(u.d,B.bX,u.gcgQ()),p=A.l(28)
p=A.as(A.o(t,t,B.f,t,t,new A.n(t,t,A.K(B.aV,B.r,3),p,A.a([new A.ab(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.l(16)
return A.c5(r,B.w,new A.an(B.a0,t,B.b1,B.t,A.a([q,p,A.ao(32,A.o(t,D.h0b,B.f,t,t,new A.n(w,t,A.K(B.aV.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.js,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aMg.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.P8.prototype={
T(){return new C.aHl(D.aew,A.a([],x.D))},
bu(){return this.r.$0()},
ge3(){return this.c}}
C.aHl.prototype={
gcHK(){return J.bI8(this.e,0,new C.eY7())},
Z(){this.a3()
$.aU.bZ$.push(this)
this.wt()},
t(){$.aU.hZ(this)
this.a2()},
jn(d){if(d===B.fV)this.wt()},
wt(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wt=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DI(q.a.c).dc(0,B.k5),$async$wt)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eY3(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eY4(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wt,v)},
IF(d){return this.bNX(d)},
bNW(){return this.IF(null)},
bNX(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iwq(l,d),$async$IF)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
r=s.a
q=s.b
p=new C.lC(l,r,q,D.dq7,new A.V(Date.now(),0,!1))
w=4
return A.b(C.Mj(t.a.c,p),$async$IF)
case 4:o=f
w=5
return A.b(t.wt(),$async$IF)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.K(x.q).f.U(D.frr)
w=1
break}n=J.aT(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gP(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.K(q).f.U(D.ftg)
else n.K(q).f.U(A.b2(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.Fb(m)
case 1:return A.h(u,v)}})
return A.i($async$IF,v)},
Fb(d){return this.ckQ(d)},
ckQ(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Fb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hE(s,new C.auF(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$Fb)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Mj(u.a.c,t),$async$Fb)
case 5:case 4:w=6
return A.b(u.wt(),$async$Fb)
case 6:return A.h(null,v)}})
return A.i($async$Fb,v)},
we(d){return this.c3h(d)},
c3h(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$we=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bGs(),$async$we)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hE(r,D.aML,!0,"NgmyWorksheetProjectScan",x.N),$async$we)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bGZ(q),$async$we)
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
break}p=C.hll(s)
w=15
return A.b(C.Mj(t.a.c,p),$async$we)
case 15:o=f
w=16
return A.b(t.wt(),$async$we)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.K(x.q).f.U(D.ftl)
w=1
break}r.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.Fb(p)
case 1:return A.h(u,v)}})
return A.i($async$we,v)},
OO(d){return this.bMz(d)},
bMz(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$OO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cg(null,null,!0,null,new C.eXP(d),s,null,!0,!0,x.y),$async$OO)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.p8(t.a.c,A.a([],x.D)),$async$OO)
case 6:w=7
return A.b(t.wt(),$async$OO)
case 7:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.frw)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OO,v)},
cl2(d){var w=this.c
w.toString
A.bU(B.L,null,new C.eXY(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b8I(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.l(16),p=g.a
if(p)w=B.jZ
else w=B.c
v=A.l(16)
u=A.K(p?B.eh:B.bO,B.r,1)
t=d.j(0.14)
s=A.l(12)
s=A.o(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.n(t,r,r,s,r,r,B.n),r,r,r,r,B.bS,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.m(r,r,p?B.aS:B.av,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aE(!1,B.a3,!0,r,A.aM(!1,q,!0,A.o(r,A.x(A.a([s,B.af,t,B.bF,A.d(h,r,r,r,r,r,r,A.m(r,r,p?B.bu:B.bh,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.n(w,r,u,v,r,r,B.n),r,r,r,r,B.ta,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
a1i(d,e){return this.ckR(d,e)},
ckR(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1i=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.L,null,new C.eXT(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a1i)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hKC(r,new C.eXU(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.OQ(d,e),$async$a1i)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1i,v)},
b5I(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.l(12)
s=A.o(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.n(t,u,u,s,u,u,B.n),u,u,u,u,B.bS,u,u,u)
if(d)t=B.aA
else t=h.a?B.aS:B.av
t=A.d(j,u,u,u,u,u,u,A.m(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.m(u,u,w?B.bu:B.bh,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.i,0,B.p),1)
return A.aE(!1,B.a3,!0,u,A.aM(!1,u,!0,new A.D(B.CM,A.A(A.a([s,B.bc,t,A.X(B.eI,w?B.bu:B.bh,u,u,u,u)],v),B.l,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj)},
crR(d,e,f,g,h,i){return this.b5I(!1,d,e,f,g,h,i)},
OQ(d,e){return this.bMJ(d,e)},
bMJ(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lm(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$OQ)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bF8(t.a.c,d.a),$async$OQ)
case 6:w=7
return A.b(t.wt(),$async$OQ)
case 7:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$OQ,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.ui(n),l=n?B.c6:B.hM
if(p.f)n=D.bfl
else{w=A.aD(d,B.dD,x.w).w
v=p.bH0(m)
u=p.c2l(m)
t=p.gbE6()
if(n)s=B.jZ
else s=B.c
r=A.l(13)
q=x.p
t=A.a([v,B.af,u,B.aO,new C.Gt(A.o(o,A.A(A.a([p.aDV(B.PD,"Projects",m,D.aew),p.aDV(B.uY,"Cashier",m,D.b35),p.aDV(B.HJ,"Family Tree",m,D.hOH)],q),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.n(s,o,o,r,o,o,B.n),o,o,o,o,o,o,o,o),14,B.eC,0.95,t,o),B.bx],q)
v=p.d
if(v===D.aew){v=J.ad(p.e)
B.d.u(t,A.a([A.A(A.a([A.d("Projects ("+v+")",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b4,new C.azy(p.gaTH(),o)],q),B.l,o,B.e,B.i,0,o,o),B.aB,p.crT(m)],q))}else{n=p.a
if(v===D.b35)t.push(new C.aqq(n.c,m,o))
else{v=p.r
t.push(new C.arF(n.c,n.d,n.e,n.f,new C.eYa(p),new C.eYb(p),new A.bl(v,x.b4)))}}n=A.cc(A.x(t,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,new A.P(20,w.r.b+8,20,32),o,o,B.ah)}return A.c5(o,l,A.bm(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bH0(d){var w=null,v=A.l(8),u=d.a,t=A.X(I.a2R,u?B.bu:B.bh,w,w,w,16)
return A.aM(!1,v,!0,new A.D(B.k7,A.A(A.a([t,B.bn,A.d("Back to Profile",w,w,w,w,w,w,A.m(w,w,u?B.bu:B.bh,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.N,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eXM(this),w,w,w,w,w,w,w)},
gbE6(){switch(this.d.a){case 0:return D.adE
case 1:return D.hDx
case 2:return D.adF}},
c2l(d){var w=null,v=A.l(15),u=A.a([new A.ab(0,B.G,B.aV.j(0.35),B.cz,16)],x.V),t=x.p,s=A.A(A.a([A.o(w,D.c1M,B.f,w,w,new A.n(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bc,D.bMe,A.aE(!1,B.a3,!0,w,A.aM(!1,A.l(12),!0,A.o(w,D.c_6,B.f,w,w,new A.n(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eXQ(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)],t),B.E,w,B.e,B.i,0,w,w),r=B.b3.j(0.55),q=A.l(12)
return new C.Gt(A.o(w,A.x(A.a([new A.D(B.Hk,s,w),A.o(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.m(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aw,A.d(A.Bn(this.gcHK()),w,w,w,w,w,w,D.fLa,w,w,w)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.n(r,w,w,q,w,w,B.n),w,w,w,B.t9,B.js,w,w,1/0)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.n(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hDw,w)},
aDV(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.l(12),r=t?B.aV:B.L,q=A.l(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.ab(0.5,B.G,B.aV.j(0.42),B.cM,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bh
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bh
return A.E(A.aE(!1,B.a3,!0,u,A.aM(!1,s,!0,A.cU(u,A.A(A.a([w,B.e7,new A.df(1,B.cl,A.d(e,u,1,B.a2,u,u,u,A.m(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.b9,B.i,0,u,u),u,u,B.ck,new A.n(r,u,p,q,o,u,B.n),B.iQ,u,u,u,u,B.Hs,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eY6(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),1)},
crT(d){var w,v,u,t,s,r,q=this,p=null
if(J.ct(q.e)){w=d.a
v=w?B.ef:B.c
u=A.l(15)
t=A.o(p,D.c_d,B.f,p,p,new A.n(p,p,p,p,A.a([new A.ab(2,B.G,B.aV.j(0.5),B.eS,28)],x.V),D.cbL,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.m(p,p,w?B.aS:B.av,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Gt(A.o(p,A.x(A.a([t,B.db,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.m(p,p,w?B.bu:B.bh,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.e3,A.A(A.a([A.E(q.aVh(B.jw,"Scan QR",new C.eY0(q),d),1),B.as,A.E(q.aVh(B.zO,"Upload file",new C.eY1(q),d),1)],r),B.l,p,B.e,B.i,0,p,p),B.aB,A.bJ(D.hbW,p,q.gaTH(),A.bp(B.aV,p,p,p,B.c,B.hh,p,p,new A.ba(A.l(12),B.a1),p,p,p))],r),B.l,p,B.e,B.i,0,B.p),B.f,p,p,new A.n(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bIJ,1.05,D.adE,p)}w=J.b9(q.e,new C.eY2(q,d),x.l)
w=A.B(w,w.$ti.k("ak.E"))
return new C.Gt(A.x(w,B.l,p,B.e,B.i,0,B.p),16,B.bS,1,D.adE,p)},
aVh(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.l(12),t=A.l(12),s=A.l(12),r=A.K(B.aV.j(0.45),B.r,1)
return A.aE(!1,B.a3,!0,u,A.aM(!1,t,!0,A.o(w,A.x(A.a([A.X(d,B.b3,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.fJm,B.K,w,w)],x.p),B.l,w,B.e,B.N,0,B.p),B.f,w,w,new A.n(w,w,r,s,w,w,B.n),w,w,w,w,B.a14,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)},
crS(d,e){var w,v,u=null,t=e.a,s=t?B.ef:B.c,r=A.l(14),q=A.K(t?B.eh:B.bO,B.r,1),p=A.a([new A.ab(0,B.G,B.w.j(t?0.35:0.08),B.et,10)],x.V),o=A.l(14),n=t?B.bu:B.bh
n=A.bv(B.Ye,new A.fG(1.7777777777777777,C.aT2(!0,B.fj,1/0,B.PD,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.m(u,u,t?B.aS:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.aw,A.d(""+d.d.length+" budget items \xb7 "+A.Bn(d.gxO()),u,u,u,u,u,u,D.fHj,u,u,u)],w),B.E,u,B.e,B.i,0,B.p),1)
return A.o(u,A.aE(!1,B.a3,!0,u,A.aM(!1,o,!0,A.x(A.a([n,new A.D(B.bH,A.A(A.a([v,A.aH(u,u,u,u,A.X(Y.a3W,t?B.bu:B.bh,u,u,u,u),u,u,u,new C.eXZ(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.i,0,u,u),u)],w),B.E,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eY_(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),B.f,u,u,new A.n(s,u,q,r,p,u,B.n),u,u,u,B.el,u,u,u,1/0)}}
C.bB4.prototype={}
C.rt.prototype={
aj(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd0M(){var w,v,u,t,s=this.c
if(s===B.h.fL(s))w=B.o.v(B.h.M(s))
else{v=B.h.ad(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lC.prototype={
gxO(){return B.d.cC(this.d,0,new C.cHQ())},
aj(){var w=this,v=w.d,u=A.T(v).k("N<1,ac<q,@>>")
v=A.B(new A.N(v,new C.cHP(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bg6(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lC(w.a,w.b,v,u,w.e)},
bfP(d){return this.bg6(d,null)},
TW(d){return this.bg6(null,d)}}
C.Iy.prototype={
a7(){return"FamilyGender."+this.b}}
C.i5.prototype={
aj(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hFL(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aGE(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.i5(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.amD.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.kZ.prototype={
gar1(){var w=this.f
return new A.Y(w,new C.bTY(),A.T(w).k("Y<1>")).gJ(0)},
aj(){var w=this,v=w.f,u=A.T(v).k("N<1,ac<q,@>>")
v=A.B(new A.N(v,new C.bTX(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.imw(w.y),"games",w.z],x.N,x.z)},
xa(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kZ(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bg5(d,e){var w=null
return this.xa(w,w,w,d,e,w,w,w,w)},
cR6(d,e,f,g,h,i,j){return this.xa(d,e,null,f,g,h,i,j,null)},
aGJ(d,e){var w=null
return this.xa(w,w,w,w,d,w,w,e,w)},
cR8(d,e,f,g,h,i,j,k){return this.xa(d,e,null,f,g,h,i,j,k)},
cPC(d){var w=null
return this.xa(w,w,w,w,w,w,w,d,w)},
cQ_(d){var w=null
return this.xa(w,w,w,w,w,w,w,w,d)},
bfJ(d){var w=null
return this.xa(w,w,d,w,w,w,w,w,w)},
aGu(d){var w=null
return this.xa(w,w,w,w,w,d,w,w,w)},
cQE(d,e,f){var w=null
return this.xa(w,d,w,w,e,w,w,f,w)},
cPp(d){var w=null
return this.xa(w,w,w,d,w,w,w,w,w)},
cQb(d,e){var w=null
return this.xa(d,w,w,w,w,w,e,w,w)}}
C.cHR.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cHS.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aJs.prototype={}
C.bbB.prototype={
ak(d){this.a=d.a
this.b=d.b},
cZ(d){var w=new C.bbB()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b5(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bbA.prototype={
gx0(){return!0},
gGK(){return this.z.b<this.b.length},
aWY(d){switch(0){case 0:return d.a.c}},
aWE(d){switch(0){case 0:return d.a.d}},
bWN(d,e){switch(0){case 0:return new A.hZ(d,e)}},
bWa(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hi(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iT(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Ih(b4)
switch(0){case 0:v=b5.b
u=new A.kV(0,v,0,1/0)
t=w===B.VY
break}s=A.a([],x.gZ)
r=A.S(x.gF,x.S)
for(b3=b1.z,q=B.d.fN(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hi(b4,u,!0)
f=b1.aWY(g)
f.toString
e=b1.aWE(g)
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
switch(0){case 0:q=b5.cB(new A.hZ(m,l))
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
a8=b1.aWY(g)
e=b1.aWE(g)
e.toString
a9=b1.bWa(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bWN(a6,a3+a9)
b0=g.a
g.a=new A.iT(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fW(d){var w,v,u,t,s,r=this
r.lE(d)
w=d.b
w.iy()
v=A.ds()
u=r.a
v.ec(u.a,u.b,0,1)
w.px(0,v)
for(u=r.z,u=B.d.du(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].fW(d)
w.nH(0)},
Hg(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
iy(){return this.z}}
C.bzk.prototype={}
var z=a.updateTypes(["aA<~>()","Q(i5)","~()","Q(kZ)","Q(nt)","ac<q,@>(kZ)","H(kZ,kZ)","H(i5,i5)","q(i5)","kZ(ac<@,@>)","Q(lC)","nt(ac<@,@>)","ac<q,@>(nt)","Q(uT)","uT()","H(i5)","ai<i5>()","Q(zC)","a0v(Z)","q?(i5)","eS<q?>(i5)","aA<~>(lC)","Q(rt)","ac<q,@>(i5)","i5(ac<@,@>)","H(lC,lC)","~(bf)","v(oK)","Q(agk)","H(H,aam)","Uf(Z)","Q(MX)","Q(uS)","~(i5)","q(q)","WA(Z)","Ue(Z)","aeH(Z)","a_r(Z)","i5(i5)","cK(bC<q,GJ>)","cK(L0)","a_V(Z)","H?(i5)","i5()","Q(L0)","D(i5)","~(Iy)","a_R(Z)","v(Iy,q,a_)","Q(agd)","bC<q,ai<ac<q,@>>>(q,ai<nt>)","a_T(Z)","+count,id,name(H,q,q)(kZ)","kZ(kZ)","q(kZ)","a0Q(Z)","Q(lR)","lR()","ZZ(Z)","a2C(Z)","a_t(Z)","a_s(Z)","~(H)","~(q,ls?)","v(rt)","af1(Z)","~(nQ)","aA<~>([q?])","G(G,lC)","v(lC)","G(G,rt)","ac<q,@>(rt)","rt(ac<@,@>)","ai<ls>()","uS()","q(V)","lC(ac<@,@>)","cw(Ix)","q(lC)","ac<q,@>(lC)","H(nt,nt)","kZ(ac<q,@>)","a0P(Z)"])
C.fRA.prototype={
$1(d){return d.a+" "+d.b},
$S:132}
C.fRz.prototype={
bpp(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
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
case 5:throw A.W(r!=null&&A.M5(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bpp(d)},
$S:257}
C.fRB.prototype={
$1(d){return d.b},
$S:132}
C.h0N.prototype={
$1(d){var w=null
return A.eI(w,B.L,new A.QC(this.a,this.b,w),w,w,0,B.a1h,w,B.d7,w,w,w)},
$S:46}
C.fEC.prototype={
$1(d){return d!=null},
$S:240}
C.fED.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:240}
C.fEI.prototype={
$1(d){if(this.a)return new A.r(d.a*520,d.b*160)
return d},
$S:172}
C.fPi.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fe(d,w,w,w,A.hi(w,B.tP,w,w,w,w,w,w,w,B.dE,w,w,10.5,w,B.eD,w,!0,w,w,w,w),w),u=f?B.eD:B.wP
return new A.ob(D.bE0,A.abc(A.a([new A.h0(130,w,v),new A.zB(1,B.HC,A.fe(e,w,w,w,A.hi(w,g==null?D.eB8:g,w,w,w,w,w,w,w,B.dE,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.yM,B.lX))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:2276}
C.fPh.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.w4(999)
f=A.xI(A.lM(h,A.fe("Cashier",h,h,h,A.hi(h,D.AI,h,h,h,h,h,h,h,B.dE,h,h,10,h,B.eD,h,!0,h,h,h,h),h),h,new A.kW(D.eB_,h,f,B.i7,h),h,h,D.bEu,h))
w=A.xI(A.fe("Debt receipt",h,h,h,A.hi(h,h,h,h,h,h,h,h,h,B.dE,h,h,22,h,B.eD,h,!0,h,h,h,h),h))
v=A.xI(A.fe(C.xo(new A.V(Date.now(),0,!1),!0),h,h,h,D.ac3,h))
u=A.w4(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fe(s,h,h,h,A.hi(h,h,h,h,h,h,h,h,h,B.dE,h,h,14,h,B.eD,h,!0,h,h,h,h),h)
r=A.fe("Person who owes",h,h,h,D.ac3,h)
q=A.w4(10)
p=x.Z
u=A.lM(h,A.zt(A.a([s,new A.h0(h,2,h),r,new A.h0(h,10,h),A.lM(h,A.zt(A.a([A.fe("Amount owed",h,h,h,D.ac3,h),new A.h0(h,2,h),A.fe(A.Bn(t.c),h,h,h,A.hi(h,D.AI,h,h,h,h,h,h,h,B.dE,h,h,20,h,B.eD,h,!0,h,h,h,h),h)],p),B.t0,B.lX),h,new A.kW(B.pQ,h,q,B.i7,h),h,h,D.bDH,1/0)],p),B.t0,B.lX),h,new A.kW(B.aO8,h,u,B.i7,h),h,h,D.bFH,1/0)
q=new A.nS(D.eB2,0.9,B.lg)
r=A.w4(12)
s=i.c
o=s.$2("Original due",C.xo(t.r,!1))
n=s.$2("Current due",C.xo(t.f,!1))
m=i.d
l=new A.nS(m,1.1,B.lg)
k=A.w4(8)
j=i.a
k=A.a([o,n,new A.h0(h,6,h),A.lM(h,A.xI(A.fe(t.gaNP(),h,h,h,A.hi(h,m,h,h,h,h,h,h,h,B.dE,h,h,11,h,B.eD,h,!0,0.5,h,h,h),h)),h,new A.kW(h,new A.q2(l,l,l,l),k,B.i7,h),h,h,D.bED,1/0),new A.h0(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.AI))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.AI))
else{n=A.fe("Missed days ("+n+")",h,h,h,A.hi(h,B.tP,h,h,h,h,h,h,h,B.dE,h,h,10.5,h,B.eD,h,!0,h,h,h,h),h)
m=A.T(o).k("N<1,TO>")
o=A.B(new A.N(o,new C.fPg(),m),m.k("ak.E"))
B.d.u(k,A.a([new A.h0(h,4,h),n,new A.h0(h,6,h),new C.bbA(5,5,new C.bbB(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.h0(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.h0(h,8,h),w,new A.h0(h,3,h),v,new A.h0(h,16,h),u,new A.h0(h,10,h),A.lM(h,A.zt(k,B.yM,B.lX),h,new A.kW(h,new A.q2(q,q,q,q),r,B.i7,h),h,h,B.amU,1/0)],p)
w=j.a
if(w!=null){v=new A.nS(B.K8,1,B.lg)
B.d.u(f,A.a([new A.h0(h,16,h),A.fe("Debtor signature",h,h,h,A.hi(h,B.tP,h,h,h,h,h,h,h,B.dE,h,h,10,h,B.eD,h,!0,h,h,h,h),h),new A.h0(h,6,h),A.lM(h,new A.IP(w,B.Yr,h,h),h,new A.kW(h,new A.q2(v,v,v,v),A.w4(6),B.i7,h),82,h,B.OX,1/0)],p))}f.push(new A.h0(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fe(w,h,h,h,D.fzB,h))
f.push(new A.h0(h,18,h))
f.push(A.xI(A.fe("NGMY.ORG",h,h,h,A.hi(h,D.AI,h,h,h,h,h,h,h,B.dE,h,h,14,h,B.eD,h,!0,1.8,h,h,h),h)))
return f},
$S:386}
C.fPg.prototype={
$1(d){var w=null,v=new A.nS(D.K9,0.7,B.lg),u=A.w4(999)
return A.lM(w,A.fe(C.xo(d,!1),w,w,w,A.hi(w,D.K9,w,w,w,w,w,w,w,B.dE,w,w,9.5,w,B.eD,w,!0,w,w,w,w),w),w,new A.kW(w,new A.q2(v,v,v,v),u,B.i7,w),w,w,D.bK9,w)},
$S:2277}
C.c9i.prototype={
$1(d){var w=null,v=B.bC.j(0.08),u=A.l(999),t=A.K(B.bC.j(0.28),B.r,1)
return A.o(w,A.d(C.xo(d,!1),w,w,w,w,w,w,D.fGL,w,w,w),B.f,w,w,new A.n(v,w,t,u,w,w,B.n),w,w,w,w,B.eQ,w,w,w)},
$S:2278}
C.h1j.prototype={
$1(d){var w=null,v=A.aD(d,B.bW,x.w).w,u=A.l(26),t=A.aH(w,w,w,w,D.c2L,w,w,w,new C.h1g(d),w,w,w,w,w,B.ci),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eI(w,B.L,new A.cN(new A.aY(0,380,0,v.a.b*0.9),A.aE(!1,B.a3,!0,u,new A.D(B.a15,A.x(A.a([new A.bK(B.a9,w,w,t,w),new A.df(1,B.cl,A.cc(A.x(A.a([new A.e6(new C.b0y(r,w),s),B.U,A.A(A.a([A.E(A.ep(B.zW,w,D.h89,new C.h1h(s,r,d),A.dj(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fh,w,new A.ba(A.l(14),B.a1),new A.ax(q,1,B.r,-1),w,w,w,w)),1),B.ae,A.E(A.db(B.a4y,w,D.h4y,new C.h1i(r,d),A.bp(B.b3,w,w,w,B.c,w,B.fh,w,new A.ba(A.l(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.i,0,w,w)],p),B.l,w,B.e,B.N,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.N,0,B.p),w),B.f,B.av,0,w,w,w,w,w,B.aj),w),w,w,0,A_.a1t,w,B.d7,w,w,w)},
$S:46}
C.h1g.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h1h.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.ap$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lx(2.5),$async$$0)
case 4:w=3
return A.b(e.hk(B.he),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eQ(B.dF.gaU(s))
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
C.h1i.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fWb(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.K(x.q).f
s.U(A.b2(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h1b.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.b
return A.eI(w,B.av,A.x(A.a([new A.D(D.bFv,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nf,w,w,w),1),A.aH(w,w,w,w,B.lt,w,w,w,new C.h19(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),w),new A.df(1,B.cl,new A.D(B.f2,A.bv(A.l(14),A.fY(t,B.A,w,w,B.cn,B.dB,!1,w,!1,w,w),B.aq),w),w),new A.D(B.OA,new A.a5(1/0,w,A.db(B.nR,w,D.aYx,new C.h1a(t,this.c,d),A.bp(B.b3,w,w,w,B.c,w,w,w,new A.ba(A.l(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.N,0,B.p),w,w,w,B.ON,w,B.d7,w,new A.ba(v,B.a1),w)},
$S:46}
C.h19.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h1a.prototype={
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
C.h1n.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.a,s=this.b
return A.eI(w,B.av,new A.D(D.bFD,A.x(A.a([A.A(A.a([D.bLk,A.aH(w,w,w,w,B.lt,w,w,w,new C.h1l(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),B.P,new A.e6(A.bv(A.l(14),A.o(w,A.b3(w,w,w,new C.bdO(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a5(1/0,w,A.db(B.nR,w,D.aYx,new C.h1m(t,s,d),A.bp(B.b3,w,w,w,B.c,w,w,w,new A.ba(A.l(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.N,0,B.p),w),w,w,w,w,w,B.d7,w,new A.ba(v,B.a1),w)},
$S:46}
C.h1l.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h1m.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.ap$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lx(2.5),$async$$0)
case 4:w=3
return A.b(e.hk(B.he),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aB(p,0,32)
r=J.eQ(B.dF.gaU(s))
w=5
return A.b(A.rn(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fJw.prototype={
$1(d){return d.a===this.a},
$S:273}
C.dSd.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dRZ.prototype={
boC(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.ef:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dS1(s,q,e),p,!0,!0,!1,B.Ks,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dS2(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.boC(d,e)},
$S:2279}
C.dS1.prototype={
$1(d){var w,v=null,u=this.c===B.xo,t=u?D.dx9:D.dsD
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.aS:B.av,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(G.anq,A.x(A.a([u,B.aw,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.bu:B.bh,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.iA(!0,v,v,B.y,D.fq5,new C.dS0(this.a,w,t,d),t.length,v,B.e0,B.ah,!0)],x.p),B.al,v,B.e,B.N,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:28}
C.dS0.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.l(14)
if(q)w=B.cX.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.l(14)
if(q)u=B.cX
else u=(t.b.a.d.a?B.bu:B.bh).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.o(B.A,C.b0x(r,26),B.f,s,s,new A.n(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dS_(t.d,r),s,s,s,s,s,s,s)},
$S:194}
C.dS_.prototype={
$0(){A.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.dS2.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dRX.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:91}
C.dRY.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cG(B.ck,e,v)
return new A.d3(e,!1,A.is(B.A,A.as(A.aE(!1,B.a3,!0,v,new A.e0(new C.dRW(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.aj),v,v,v),v,new A.bh(t,new A.bt(0.96,1,u),u.k("bh<bQ.T>"))),v)},
$S:34}
C.dRW.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aD(d,B.bW,x.w).w,i=l.b,h=i.a.d.a,g=h?B.ef:B.c,f=A.l(14),e=A.K((h?B.bu:B.bh).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.l(8)
u=x.p
v=A.A(A.a([w,A.aM(!1,v,!0,new A.D(B.eC,A.X(B.cB,i.a.d.a?B.bu:B.bh,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dRH(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.i,0,k,k)
w=l.d
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aVO("Name")
r=l.a
q=r.d==null?k:new C.dRI(r,l.e,a0)
p=A.l(20)
o=i.a.d.a?B.bs:B.mb
n=A.K(B.cX.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bfZ(new A.D(B.f1,A.aM(!1,p,!0,A.o(B.A,C.b0x(m==null?"\ud83d\udc64":A.fQ7(r.e,m),18),B.f,k,k,new A.n(o,k,n,k,k,k,B.a6),k,34,k,B.cq,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.lc,k,B.abT,k,k)
v=A.a([v,B.af,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.A(A.a([A.E(i.aWu("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dRJ(r,a0),r.d===B.xo),1),B.ae,A.E(i.aWu("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dRO(r,a0),r.d===B.a8q),1)],u),B.l,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.P,new A.bK(B.a5,k,k,A.ht(D.c1_,D.h6q,new C.dRP(r,l.e,a0),A.fr(k,k,k,k,k,k,k,k,k,k,k,B.cX,k,k,k,k,k,k,k,k,k,k,k,k,k,B.ci)),k)],u))
v.push(B.U)
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uW(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aVP("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.eb,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.U)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.l(10)
p=A.l(10)
o=A.l(10)
n=A.K((t?B.bu:B.bh).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xo(r.a,!1)
v.push(A.aE(!1,B.a3,!0,q,A.aM(!1,p,!0,A.o(k,A.A(A.a([A.E(A.x(A.a([t,B.bF,A.d(m,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.i,0,B.p),1),D.bYB],u),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.n(k,k,n,o,k,k,B.n),k,k,k,k,B.bl,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dRQ(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.aj))
if(!h)B.d.u(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.U)
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aVO("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b44(r.b.length!==0,B.mi,new C.dRR(r,i,a0),new C.dRS(r,a0),"Upload from gallery","ID photo"))
v.push(i.b44(r.c.length!==0,D.bRT,new C.dRT(r,i,d,a0),new C.dRU(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Z.a91("Signature (optional)",t,new C.dRV(a0),new C.dRK(a0,t),new C.dRL(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bu:B.bh
s=(i?B.bu:B.bh).j(0.28)
s=A.E(A.dU(B.aYq,new C.dRM(d),A.dj(k,k,k,k,k,k,k,k,k,t,k,k,B.qJ,k,new A.ba(A.l(10),B.a1),new A.ax(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cX,k,k,k,B.c,k,B.qJ,k,new A.ba(A.l(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.ae,A.E(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vT,k,k,k),k,new C.dRN(r,w,d),t),1)],u),B.l,k,B.e,B.i,0,k,k))
return A.o(k,A.cc(A.x(v,B.al,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.n(g,k,e,f,k,k,B.n),k,k,k,B.tb,B.js,k,k,360)},
$S:186}
C.dRH.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dRI.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dRJ.prototype={
$0(){return this.b.$1(new C.dRG(this.a))},
$S:0}
C.dRG.prototype={
$0(){var w=this.a
w.d=B.xo
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dRO.prototype={
$0(){return this.b.$1(new C.dRF(this.a))},
$S:0}
C.dRF.prototype={
$0(){var w=this.a
w.d=B.a8q
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dRP.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dRQ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.vZ(null,u.b,A.c0(2020,1,1,0,0,0,0,0),null,s,A.c0(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dRE(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRE.prototype={
$0(){var w=this.b
return this.a.a=A.c0(w.gck(),w.gce(),w.gcv(),0,0,0,0,0)},
$S:0}
C.dRR.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Qs(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dRD(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRD.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dRS.prototype={
$0(){return this.b.$1(new C.dRC(this.a))},
$S:0}
C.dRC.prototype={
$0(){return this.a.b=""},
$S:0}
C.dRT.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.ef:B.c
w=3
return A.b(A.bU(q,null,new C.dRA(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Qs(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dRB(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRA.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,B.asP,w,w,w,w,new C.dRu(d),!1,w,w,w,w,w,w,w,D.fXt,w,w,w),A.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,B.asN,w,w,w,w,new C.dRv(d),!1,w,w,w,w,w,w,w,D.h3w,w,w,w)],x.p),B.l,w,B.e,B.N,0,B.p),!0,!1,B.ag,!0,!0)},
$S:28}
C.dRu.prototype={
$0(){A.a6(this.a,!1).N("camera")
return null},
$S:0}
C.dRv.prototype={
$0(){A.a6(this.a,!1).N("gallery")
return null},
$S:0}
C.dRB.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dRU.prototype={
$0(){return this.b.$1(new C.dRz(this.a))},
$S:0}
C.dRz.prototype={
$0(){return this.a.c=""},
$S:0}
C.dRV.prototype={
$0(){return this.a.$1(new C.dRy())},
$S:0}
C.dRy.prototype={
$0(){},
$S:0}
C.dRK.prototype={
$0(){return this.a.$1(new C.dRx(this.b))},
$S:0}
C.dRx.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dRL.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ajb(u.a,null,null,new C.dRw(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRw.prototype={
$4(d,e,f,g){this.a.$1(new C.dRt(this.b,d))},
$S:469}
C.dRt.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.u(w,this.b)},
$S:0}
C.dRM.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dRN.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.K(x.q).f.U(D.fvf)
return}if(w.a.d==null){w.c.K(x.q).f.U(D.fs4)
return}A.a6(w.c,!1).N(!0)},
$S:0}
C.dSg.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:91}
C.dSh.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.ef:B.c,n=A.l(14),m=A.K((p?B.bu:B.bh).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.aS:B.av,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bn(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.bu:B.bh,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zT(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.m(r,r,w.zT(r).length>0?B.bC:B.cX,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bh
t=(q?B.bu:B.bh).j(0.28)
s=x.p
return new A.d3(e,!1,A.as(A.aE(!1,B.a3,!0,r,A.o(r,A.x(A.a([p,B.P,v,u,B.aB,A.A(A.a([A.E(A.dU(B.o8,new C.dSe(d),A.dj(r,r,r,r,r,r,r,r,r,w,r,r,B.k6,r,new A.ba(A.l(10),B.a1),new A.ax(t,1,B.r,-1),r,r,r,r)),1),B.ae,A.E(A.bJ(D.h3Y,r,new C.dSf(d),A.bp(B.cX,r,r,r,B.c,r,B.k6,r,new A.ba(A.l(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.i,0,r,r)],s),B.al,r,B.e,B.N,0,B.p),B.f,r,r,new A.n(o,r,m,n,r,r,B.n),r,r,r,B.CQ,B.Hk,r,r,300),B.f,B.L,0,r,r,r,r,r,B.aj),r,r,r),r)},
$S:34}
C.dSe.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dSf.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dSa.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dSb(r),p=r.a.d.a,o=p?B.ef:B.c,n=A.l(14),m=A.K((p?B.bu:B.bh).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.m(s,s,r.a.d.a?B.aS:B.av,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Bn(l.c),s,s,s,s,s,s,D.fIn,s,s,s)],p),B.l,s,B.e,B.i,0,s,s)
w=A.iR((r.a.d.a?B.bu:B.bh).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a3c,"View receipt",new C.dS3(r,d,l))
u=l.x!=null
t=u?B.pC:B.qS
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bFA,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dS4(r,d,l)),q.$3$icon$label$onTap(B.D4,"Edit",new C.dS5(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mi,"View / download ID",new C.dS6(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bRS,"View / download selfie",new C.dS7(r,d,l)))
if(l.gaIp())p.push(q.$3$icon$label$onTap(B.a4o,"View / download signature",new C.dS8(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bC,B.ej,"Delete",new C.dS9(r,d,l)))
p.push(B.aw)
return A.bm(!0,new A.D(B.t9,A.o(s,A.x(p,B.l,s,B.e,B.N,0,B.p),B.f,s,s,new A.n(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:28}
C.dSb.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.av
else w=d
return A.aM(!1,v,!0,new A.D(B.eX,A.A(A.a([A.X(e,w,v,v,v,20),B.bc,A.d(f,v,v,v,v,v,v,A.m(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:2280}
C.dS3.prototype={
$0(){A.a6(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h1f(w,this.c)},
$S:0}
C.dS4.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.Te(this.c)},
$S:0}
C.dS5.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.DS(this.c)},
$S:0}
C.dS6.prototype={
$0(){var w,v,u
A.a6(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bHj(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dS7.prototype={
$0(){var w,v,u
A.a6(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bHj(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dS8.prototype={
$0(){A.a6(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h1k(w,this.c)},
$S:0}
C.dS9.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.Qr(0,this.c)},
$S:0}
C.dSi.prototype={
$1(d){return d.x==null},
$S:273}
C.dSj.prototype={
$1(d){return d.x!=null},
$S:273}
C.dSk.prototype={
$2(d,e){return d+e.c},
$S:2281}
C.dSl.prototype={
$0(){return this.a.bEC()},
$S:0}
C.dSc.prototype={
$0(){return this.a.agP(this.b)},
$S:0}
C.fKh.prototype={
$1(d){return d.a===this.a},
$S:z+32}
C.fKi.prototype={
$0(){return B.d.gH(D.a5H)},
$S:z+75}
C.dhU.prototype={
$0(){var w=this.a
return w.m(new C.dhS(w,this.b))},
$S:0}
C.dhS.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dhT.prototype={
$0(){},
$S:0}
C.dhV.prototype={
$0(){var w=this.a.gc35()
A.a6(this.b,!1).N(w)
return null},
$S:0}
C.fMP.prototype={
$1(d){return C.hpL(A.a1(d,x.N,x.z))},
$S:z+11}
C.fMQ.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fMR.prototype={
$2(d,e){var w=A.cb(d.a,null),v=A.cb(e.a,null)
if(w!=null&&v!=null)return B.o.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+81}
C.h_R.prototype={
$1(d){return d.aj()},
$S:z+12}
C.h8w.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fJn.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bSF.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eC(e,v)?v:null},
$S:2282}
C.h0r.prototype={
$1(d){var w=this
return new C.a_T(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+52}
C.diz.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.diy(w,d))},
$S:z+78}
C.diy.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.din.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dik.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dhW.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dhX.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dio.prototype={
$0(){return this.a.w=!1},
$S:0}
C.di4.prototype={
$1(d){var w=null,v=A.O(d).ax.a===B.I,u=v?B.ef:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.en(A.a([A.bP(!1,B.ds,w,w,!0,w,w,w,new C.di2(d),w,w),A.bJ(B.xN,w,new C.di3(d),A.bp(B.nq,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.di2.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.di3.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.di5.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.dil.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dim.prototype={
$0(){return B.d.gH(D.A7)},
$S:z+14}
C.di0.prototype={
$1(d){var w=this.a,v=w.y,u=w.gzc(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Ue(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+36}
C.di1.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.di6.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_r(v,u,J.ad(w.d),null)},
$S:z+38}
C.di7.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dix.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.ay(s,new C.a_7(r.y,r.gzc(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.div(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bda(v,e,w,u,t,r.gbVf(),C.hFK(r.y.Q),r.gzc(0),s)
w=t}return A.c6(q,new C.diw(r,e),new A.D(B.a1m,w,s))},
$S:2283}
C.diw.prototype={
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
C.div.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJB(B.qB,B.iD)},
$S:0}
C.dih.prototype={
$0(){var w=this.a
return w.m(new C.dig(w))},
$S:0}
C.dig.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dii.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).N(null)
return null},
$S:0}
C.dhY.prototype={
$1(d){var w,v,u=null,t=A.l(26),s=B.kx.j(0.5),r=x.p,q=A.a([D.fW0,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ct(p.d)?"Write this book":"Write a new book"
q.push(p.a_e(d,B.e9,w,J.ct(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a_e(d,B.aqL,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cy,A.d("Your book is in English.",u,u,u,u,u,u,A.m(u,u,D.kR.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cy,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.m(u,u,D.kR.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a_e(d,H.arI,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a_e(d,B.oM,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a_e(d,B.oM,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eI(u,B.Cf,A.bm(!0,new A.D(B.z5,A.x(q,B.E,u,B.e,B.N,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.OQ,u,B.d7,u,new A.ba(t,new A.ax(s,1.4,B.r,-1)),u)},
$S:46}
C.dij.prototype={
$0(){A.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.dia.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.a_V(v,J.cJ(w.d),w.r+1,null)},
$S:z+42}
C.dib.prototype={
$1(d){var w=null
return A.oP(!1,A.en(w,w,w,B.Cf,new A.kj(this.a,new C.di9(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:313}
C.di9.prototype={
$3(d,e,f){var w=null
return A.A(A.a([B.abx,B.p4,A.E(A.d(e,w,w,w,w,w,w,B.jC,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:843}
C.dic.prototype={
$0(){return this.a.a=!1},
$S:52}
C.did.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:208}
C.die.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dif.prototype={
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
case 3:if(s.c!=null)s.m(new C.di8(s,t))
w=4
return A.b(s.lh(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.di8.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.diq.prototype={
$1(d){var w=null
return A.oP(!1,A.en(w,w,w,B.Cf,new A.kj(this.a,new C.dip(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:313}
C.dip.prototype={
$3(d,e,f){var w=null
return A.A(A.a([B.abx,B.p4,A.E(A.d(e,w,w,w,w,w,w,B.jC,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:843}
C.dir.prototype={
$0(){return this.a.a=!1},
$S:52}
C.dis.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:208}
C.dit.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:208}
C.diu.prototype={
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
C.dhZ.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.blz(B.qB,O.Oo)},
$S:0}
C.di_.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJB(B.qB,O.Oo)},
$S:0}
C.dkl.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dkm.prototype={
$1(d){var w=this.a
return w.m(new C.dkk(w))},
$S:9}
C.dkk.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dkn.prototype={
$1(d){var w=this.a
return w.m(new C.dkj(w))},
$S:9}
C.dkj.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dko.prototype={
$1(d){var w=this.a
return w.m(new C.dki(w))},
$S:9}
C.dki.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dkp.prototype={
$0(){var w=this.a
return w.m(new C.dkh(w,this.b))},
$S:0}
C.dkh.prototype={
$0(){var w=this.b
this.a.d.sb4(0,w)
return w},
$S:0}
C.dkq.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga37()
A.a6(this.b,!1).N(new A.bs4(w,v))},
$S:0}
C.diO.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.diN.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_R(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+48}
C.diS.prototype={
$1(d){return d.a===this.a},
$S:z+50}
C.diR.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bby(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hu,v,v,v)
return A.en(A.a([A.bP(!1,B.ds,v,v,!0,v,v,v,new C.diP(d),v,v),A.bJ(B.xN,v,new C.diQ(d),A.bp(B.nq,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,B.Cf,w,v,v,v,v,D.fUN,v)},
$S:18}
C.diP.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.diQ.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.diT.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.diU.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.cc(A.c_(B.bI,r,B.br,t,18,14),B.t,t,B.y,t,t,D.bGz,t,t,B.ah)},
$S:302}
C.diM.prototype={
$0(){return this.a.Rf(0,this.b)},
$S:0}
C.diL.prototype={
$0(){return this.a.QG(0,this.b)},
$S:0}
C.cQU.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cQV.prototype={
$0(){return B.d.gH(D.A7)},
$S:z+14}
C.cQW.prototype={
$4(d,e,f,g){var w=null,v=A.l(e)
return A.bS(0,new A.D(d,new A.bN(new A.n(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.n),B.bk,w,w),w),0,0,0)},
$S:2285}
C.d9G.prototype={
$1(d){return this.a.m(new C.d9F(this.b,this.c))},
$S:9}
C.d9F.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.da4.prototype={
$1(d){return this.a.m(new C.d9S())},
$S:2}
C.d9S.prototype={
$0(){},
$S:0}
C.da5.prototype={
$1(d){return this.a.m(new C.d9R())},
$S:2}
C.d9R.prototype={
$0(){},
$S:0}
C.da6.prototype={
$0(){var w=this.a
return w.m(new C.d9Q(w,this.b))},
$S:0}
C.d9Q.prototype={
$0(){var w=this.a
return w.d=w.goC().Gp(this.b.a)},
$S:0}
C.da7.prototype={
$0(){var w=this.a
return w.m(new C.d9P(w,this.b))},
$S:0}
C.d9P.prototype={
$0(){var w=this.a
return w.d=w.goC().cOW(this.b)},
$S:0}
C.da8.prototype={
$1(d){return this.a.m(new C.d9O())},
$S:2}
C.d9O.prototype={
$0(){},
$S:0}
C.da9.prototype={
$0(){var w=this.a
return w.m(new C.d9N(w,this.b))},
$S:0}
C.d9N.prototype={
$0(){var w=this.a
return w.d=w.goC().cP0(this.b.a)},
$S:0}
C.daa.prototype={
$1(d){var w=this.a
return w.m(new C.da_(w,d))},
$S:6}
C.da_.prototype={
$0(){var w=this.a
return w.d=w.goC().cPV(this.b)},
$S:0}
C.dab.prototype={
$1(d){var w=this.a
return w.d=w.goC().aGx(d)},
$S:2}
C.dac.prototype={
$1(d){var w=this.a
return w.d=w.goC().cP3(d)},
$S:2}
C.dae.prototype={
$1(d){var w=this.a
return w.d=w.goC().cPT(d)},
$S:2}
C.daf.prototype={
$1(d){var w=this.a
return w.m(new C.d9Z(w,d))},
$S:9}
C.d9Z.prototype={
$0(){var w=this.a
return w.d=w.goC().cPK(this.b)},
$S:0}
C.dag.prototype={
$0(){var w=this.a,v=w.goC(),u=B.a.i(w.gzc(0).a.a),t=B.a.i(w.gaDJ().a.a)
u=v.bgf(B.a.i(w.gatk().a.a),t,u)
A.a6(this.b,!1).N(u)
return null},
$S:0}
C.bSP.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bSJ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bSI(w,d))},
$S:12}
C.bSI.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bSS.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bSK.prototype={
$0(){var w=this.a
w.Q=D.b2F
w.aep(1)
w.r.x=null},
$S:0}
C.bSL.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b2F)return
w=new A.e_()
w.cU(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.d7w[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bSO.prototype={
$0(){var w=this.a
w.Q=D.aeb
w.aep(2)
w.r.z=null},
$S:0}
C.bSN.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hMC
t.aep(3)
w=t.r
w.d=s
w.x="I say: "+t.gCL()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.dee[v.aw(4)]:D.dzK[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bSQ.prototype={
$0(){var w=this.a
w.Q=D.b2G
w.CW=this.b
w.cy=1
w.aep(4)
w.r.f=w.f.a+5},
$S:0}
C.bSR.prototype={
$0(){},
$S:0}
C.bSM.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bSG.prototype={
$0(){return this.a.Lp(this.b)},
$S:0}
C.bSH.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bUl.prototype={
$0(){var w=this
return w.a.Ry(w.b,0,w.c,w.d)},
$S:0}
C.bUm.prototype={
$0(){var w=this
return w.a.Ry(w.b,3,w.c,w.d)},
$S:0}
C.bUn.prototype={
$0(){var w=this
return w.a.Ry(w.b,1,w.c,w.d)},
$S:0}
C.bUo.prototype={
$0(){var w=this
return w.a.bUG(w.b,w.c,w.d)},
$S:0}
C.bUp.prototype={
$0(){var w=this
return w.a.Ry(w.b,4,w.c,w.d)},
$S:0}
C.bUq.prototype={
$0(){var w=this
return w.a.Ry(w.b,2,w.c,w.d)},
$S:0}
C.bUr.prototype={
$0(){var w=this
return w.a.Ry(w.b,5,w.c,w.d)},
$S:0}
C.bUs.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:844}
C.bUk.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a6R[d],p=q.a.a5(0,new A.r(0,-q.b*1.2*124)),o=A.fz(r,B.cx,r,3,r,A.cR(r,r,r,r,r,r,r,r,r,D.fzh,e),B.a7,B.c0,r,B.dJ,B.c1)
o.nD(130)
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
C.bT5.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.bT6.prototype={
$2(d,e){var w=this.a,v=B.o.aQ(w.an7(d),w.an7(e))
if(v!==0)return v
return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.fxn.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h8m.prototype={
$2(d,e){if(e!=null)J.c4(this.a.c_(0,d,new C.h8n()),e)},
$S:z+64}
C.h8n.prototype={
$0(){return A.a([],x.J)},
$S:z+74}
C.h8o.prototype={
$1(d){return d!==this.a},
$S:3}
C.h8p.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h8q.prototype={
$1(d){return d!==this.a&&!B.d.aS(this.b,new C.h8l(this.c,d))},
$S:3}
C.h8l.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h8r.prototype={
$1(d){return d!==this.a},
$S:3}
C.h8s.prototype={
$1(d){return d!==this.a},
$S:3}
C.h8t.prototype={
$1(d){return d!==this.a&&!B.d.aS(this.b,new C.h8k(this.c,d))},
$S:3}
C.h8k.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fKV.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fZL.prototype={
$1(d){return d.Q},
$S:z+15}
C.fZM.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fGJ.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fNL.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bNS.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h8N.prototype={
$2(d,e){return B.o.aQ(C.hBU(d),C.hBU(e))},
$S:251}
C.h8O.prototype={
$1(d){return d!==this.a},
$S:3}
C.h_n.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bM0.prototype={
$0(){var w=this.a
w.ch=!0
w.b9M()},
$S:0}
C.bLW.prototype={
$0(){},
$S:0}
C.bM1.prototype={
$1(d){return d.f<=0},
$S:z+28}
C.bLU.prototype={
$0(){},
$S:0}
C.bLV.prototype={
$0(){},
$S:0}
C.bM_.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b3(u,u,u,new C.bdQ(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.l(14)
s.push(A.ao(u,A.o(u,A.d(t.dy,u,u,u,u,u,u,D.fGX,B.K,u,u),B.f,u,u,new A.n(w,u,u,v,u,u,B.n),u,u,u,u,B.bS,u,u,u),u,u,14,14,6,u))}return A.ay(B.c_,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bLX(t,e),u,u,u,u,u,u,u,new C.bLY(t,e),u,u,u,u,u,u,u,u,u,new C.bLZ(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bLX.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bLZ.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:23}
C.bLY.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bLT.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.crR.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.crS.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.crQ(w))},
$S:0}
C.crQ.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.crT.prototype={
$0(){var w=this,v=w.a
v.gj1()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.crU.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.crV.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.crW.prototype={
$0(){},
$S:0}
C.crX.prototype={
$0(){var w=this.a
w.z=w.XK(++w.e)
w.Q=A.c1(w.gkS()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.crN.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.crO.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj1().length,e=i/2,d=new C.crP(i,f,h),a0=g.as,a1=A.a4(a0).k("b8<2>")
a0=A.B(new A.b8(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.c6(new A.he(a0),new C.crI(g,new A.r(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj1().length!==0&&!B.d.q(g.gj1(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.QV(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cK(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new A.N4(new C.crJ(g,u),new C.crK(g,u),new C.crL(g,u),j,j,new A.bl("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.d(a1,j,j,j,j,j,j,A.m(j,j,B.a.q(a1,"not a child")?B.fi:B.be,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj1().length!==0&&!B.d.q(g.gj1(),-1)){a0=g.e+1>=g.gkS().length?"See my result":"Next family"
g=A.as(C.uw(a0,g.gqt(g),B.cV,B.ju,D.fC),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.XK(0):s).length))break
if(!B.d.q(g.gj1(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.XK(0)
o=s}else o=s
n=s[u]
n=A.e1(B.A,new C.QV(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.XK(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.ra(new A.bt(0,p,t),new C.crM(),new A.Ev(u,j,new C.QV(l.b,k,62,!1,j),new A.kJ(0.25,new C.QV(m.b,k,62,!1,j),j),new A.kd(n,B.aj,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,A.hFC(),!0,!0,j,j,j,j,j,j,!1,B.iT,j,new A.bl("chip-"+r,a0),w),B.b0,B.iR,j,new A.bl("t"+r+"-"+q,a0),v))}++u}g=A.c_(B.fT,a1,B.br,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:69}
C.crP.prototype={
$1(d){return new A.r(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:840}
C.crI.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gj1().length!==0&&!B.d.q(t.gj1(),-1)
return A.b3(p,p,p,new C.bdj(q.b,o,v,w,p),B.az)},
$S:59}
C.crK.prototype={
$1(d){return this.a.gj1()[this.b]===-1},
$S:2287}
C.crL.prototype={
$1(d){return this.a.cSM(this.b,d.a)},
$S:2288}
C.crJ.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj1()[t]!==-1,r=A.l(18),q=e.length!==0?B.cV.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.cV:B.k0,B.r,2)
u=s?A.lB(new C.crH(),A.as(new C.QV(u.gaG_()[u.gj1()[t]].b,u.gaG_()[u.gj1()[t]].a,62,!1,v),v,v,v),B.nk,B.iR,v,v,new A.bt(0.3,1,x.X),x.i):D.bdZ
return A.cU(v,u,v,v,B.b0,new A.n(q,v,w,r,v,v,B.n),B.a3,v,100,v,v,v,v,v,88)},
$S:2289}
C.crH.prototype={
$3(d,e,f){return A.e1(B.A,f,e,null,null)},
$S:117}
C.crM.prototype={
$3(d,e,f){return A.dO(f,new A.r(Math.sin(e*24)*8*(1-e),0))},
$S:117}
C.cRY.prototype={
$1(d){return d>=1},
$S:121}
C.cGP.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkS()[w.e].d.length)w.m(new C.cGO(w))},
$S:12}
C.cGO.prototype={
$0(){return this.a.f++},
$S:0}
C.cGX.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cGY.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cGZ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cGW(w))},
$S:0}
C.cGW.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cH_.prototype={
$0(){return this.a.f++},
$S:0}
C.cH0.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cH1.prototype={
$0(){},
$S:0}
C.cH2.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cGR.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.cGS.prototype={
$3(d,e,f){var w=null
return A.lB(new C.cGQ(this.a,e),w,B.b0,B.hz,w,w,new A.bt(w,this.b,x.X),x.i)},
$S:2290}
C.cGQ.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cV.j(u.as?0.6:0.15)
t=A.a([new A.ab(0,B.G,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.o(v,A.i4(new A.BG(new A.uQ(B.w.j(e),B.Mm,v,B.YU),A.bYA(A.b3(v,v,v,new C.aCd(u.gkS()[u.e].c,u.as,v),B.az),new A.EA(w,w,B.WN)),v),B.aq),B.f,v,v,new A.n(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:2291}
C.cGT.prototype={
$3(d,e,f){return A.d0(A.dO(f,new A.r(0,14*(1-e))),e)},
$S:107}
C.cGU.prototype={
$3(d,e,f){return A.dO(f,new A.r(Math.sin(e*22)*8*(1-e),0))},
$S:117}
C.cGV.prototype={
$0(){return this.a.bqU(this.b)},
$S:0}
C.f9J.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.anE$)
v.anE$=w
v.qh$.sp(0,w)
v.ary(u)},
$S:7}
C.fjY.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:12}
C.bTR.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bTQ())},
$S:0}
C.bTQ.prototype={
$0(){},
$S:0}
C.bTO.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bTM.prototype={
$0(){},
$S:0}
C.bTN.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gN6()
w=s+1>=r.length?3:5
break
case 3:q=C.bHx(p.gaqo(0),0,r.length)
p.m(new C.bTJ(p,q))
o=p
w=6
return A.b(C.BT(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BU(s.d,s.c.a,"school",p.gaqo(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bTK())
w=4
break
case 5:p.m(new C.bTL(p))
p.gqB().Wi(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bTJ.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bTK.prototype={
$0(){},
$S:0}
C.bTL.prototype={
$0(){return this.a.x++},
$S:0}
C.bTP.prototype={
$0(){return this.a.Lp(this.b)},
$S:0}
C.bTI.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.f9K.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.r(t,s),q=v.b,p=v.d,o=p?C.hFQ(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.EH
C.SP(q,D.eur,0,0.2,-0.6,-0.2,null,w,D.eta,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a5(0,new A.r(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.R()
p=A.L()
p.r=D.GJ.gp(0)
p.c=3
p.d=B.bG
q.ah(new A.r(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f9L.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.SP(this.a,D.etx,0,u,0.7,-0.5,null,null,D.K1,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f9M.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.SP(this.a,D.eve,0,0,0.8,-0.5,null,null,D.K1,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f9N.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.SP(w.b,D.eul,0,v,-0.8,-0.5,null,null,D.K1,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f9O.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.r(34,-122+Math.sin(w*5)*5)
else v=v?D.eup:D.EH
C.SP(p,D.etQ,0,t,0,-0.6,null,v,D.K1,3,0,s,1.3,u,0,w,0)
q=q.cdg(new A.r(222,455),9)
$.R()
w=A.L()
w.r=B.cV.gp(0)
p.af(q,w)},
$S:0}
C.f9P.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:844}
C.bTu.prototype={
$2(d,e){return d+e},
$S:68}
C.bTF.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bTG.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bTH.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj1()[u.b]=s
t.gj1()[u.d]=t.y
w=t.as
v=t.qh$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bTB.prototype={
$1(d){return d},
$S:103}
C.bTA.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qh$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bTC.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bTD.prototype={
$0(){},
$S:0}
C.bTE.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FT(++s.f)
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
C.bTw.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.bTx.prototype={
$2(d,e){var w=this.a
w=w.gkS()[w.f].e
return B.o.aQ(w[d],w[e])},
$S:68}
C.bTy.prototype={
$2(d,e){var w=null,v=C.hgC(new A.au(A.aS(1/0,e.a,e.b),A.aS(1/0,e.c,e.d))),u=this.a
return A.ay(B.c_,new A.e6(A.b3(w,w,w,new C.bku(u,u.qh$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bTv(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bTv.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj1().length
u=B.o.D(B.h.bf((t.a-s.a)/r/450*v),0,v-1)
w.d2D(w.gj1()[u])}},
$S:23}
C.bTz.prototype={
$1(d){var w=this.a
return w.gkS()[w.f].d[d]},
$S:82}
C.dtv.prototype={
$2(d,e){return 0},
$S:68}
C.bTg.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bTf())},
$S:0}
C.bTf.prototype={
$0(){},
$S:0}
C.bTe.prototype={
$0(){},
$S:0}
C.bT8.prototype={
$0(){},
$S:0}
C.bT9.prototype={
$0(){},
$S:0}
C.bTd.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.Bs},
$S:0}
C.bTc.prototype={
$1(d){var w=null,v=this.a.gqB(),u=A.d(d,w,w,w,w,w,w,D.aX_,w,w,w),t=v.gbnk(0)
return A.ay(B.c_,A.x(A.a([u,B.bF,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aXd,w,w,w)],x.p),B.E,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbtg(v),w,w,w,w,w,w,!1,B.a4)},
$S:149}
C.bTa.prototype={
$0(){return this.a.Lp(this.b)},
$S:0}
C.bTb.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bT7.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.e3P.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e3Q.prototype={
$1(d){return this.a},
$S:39}
C.e3R.prototype={
$0(){var w=this.a
return w.d=w.gTg().bfJ(this.b)},
$S:0}
C.e3N.prototype={
$1(d){return new C.Uf(this.a,null)},
$S:z+30}
C.e3O.prototype={
$1(d){return d.a===this.a.a},
$S:z+31}
C.e3M.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hu,w,w,w)
return A.en(A.a([A.bP(!1,B.aYA,w,w,!0,w,w,w,new C.e3K(d),w,w),A.bP(!1,D.h1p,w,w,!0,w,w,w,new C.e3L(d),w,w)],x.p),w,w,D.fC,v,w,w,w,w,D.fOT,w)},
$S:18}
C.e3K.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e3L.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.e3J.prototype={
$0(){var w=null,v=this.a.c.K(x.q).f,u=this.b
return v.U(A.b2(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e3S.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:13}
C.e3T.prototype={
$0(){var w=this.a,v=this.b,u=C.bFe(v,10,w.r,!1)
return w.uG(C.hpM(w.a.d,"kahoot",u,w.gb7j(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e3U.prototype={
$0(){var w=this.a
return w.uG(new C.ams(this.b,w.a.d,w.r,null))},
$S:0}
C.e3V.prototype={
$0(){var w=this.a
return w.uG(new C.akC(this.b,w.a.d,w.r,null))},
$S:0}
C.e3Y.prototype={
$0(){var w=this.a
return w.uG(new C.avv(this.b,w.a.d,w.r,null))},
$S:0}
C.e3Z.prototype={
$0(){var w=this.a
return w.uG(new C.azs(this.b,w.a.d,w.r,null))},
$S:0}
C.e4_.prototype={
$0(){var w=this.a
return w.uG(new C.amv(this.b,w.a.d,w.r,null))},
$S:0}
C.e40.prototype={
$0(){var w=this.a
return w.uG(new C.amz(this.b,w.a.d,w.r,null))},
$S:0}
C.e41.prototype={
$0(){var w=this.a
return w.uG(new C.amB(this.b,w.a.d,w.r,null))},
$S:0}
C.e42.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d2Y()
return v.uG(C.hpM(v.a.d,"creator_"+u.a,w,v.gb7j(),"A game by the family",t,this.c.a))},
$S:0}
C.e43.prototype={
$0(){return this.a.Pb(this.b)},
$S:0}
C.e44.prototype={
$0(){return this.a.Yb(0,this.b)},
$S:0}
C.e3W.prototype={
$0(){return this.a.Pb(null)},
$S:0}
C.e3X.prototype={
$0(){return this.a.K(x.q).f.U(D.fsa)},
$S:0}
C.bTs.prototype={
$0(){var w=this.a
w.d=D.b23
w.z=3},
$S:0}
C.bTt.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aQs()}else w.m(new C.bTr(w))},
$S:12}
C.bTr.prototype={
$0(){return this.a.z--},
$S:0}
C.bTi.prototype={
$0(){var w=this.a
w.d=D.adS
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bTj.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bTh(w))
if(w.as<=0){d.a1(0)
w.b7f(-1)}},
$S:12}
C.bTh.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bTo.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.Xt},
$S:0}
C.bTp.prototype={
$0(){return this.a.e++},
$S:0}
C.bTl.prototype={
$0(){var w=this.a
w.d=D.b24
w.ay=this.b},
$S:0}
C.bTm.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bTq.prototype={
$2(d,e){return B.o.aQ(e.b,d.b)},
$S:2292}
C.bTn.prototype={
$0(){return this.a.Lp(this.b)},
$S:0}
C.bTk.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bST.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.aw()
s=A.a([new A.at(new A.bc(s,B.b7,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.at(new A.bc(u,B.b7,B.aP),r))}return s},
$S:2293}
C.bSU.prototype={
$0(){return this.a.gDk().c.push(C.haq(null,0,20,""))},
$S:0}
C.bT3.prototype={
$1(d){var w=null
return A.bA(w,new A.b6(4,A.l(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dp,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.Fd,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:264}
C.bT2.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gDk().c,m=this.b,l=n[m],k=o.cgj(l),j=B.c.j(0.06),i=A.l(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.Lj,p,p,p),B.b4],g)
if(n.length>1)f.push(A.aH(p,p,p,p,B.asA,p,p,p,new C.bSY(o,m),p,p,p,p,p,p))
n=J.a8(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.i,0,p,p),A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bSZ(l),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a7,p,B.ao,p,p,p,p),B.P],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aEB[v]
t=D.aEh[v]
s=v+1
f.push(new A.D(B.eP,new A.c8(B.aM,B.e,B.i,B.l,p,B.p,p,0,A.a([A.d(u,p,p,p,p,p,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.ae,new A.bz(1,B.bd,A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bT_(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a7,p,B.ao,p,p,p,p),p),new S.Pw(v,l.c,new C.bT0(o,l),p,!1,D.lH,p,p,p,p,p,!1,!1,p,E.b2t,p,p,p,p,p,w)],g),p),p))}f.push(D.fUs)
f.push(B.am)
n=A.a([D.fNX,B.ae],g)
for(r=0;r<3;++r){q=D.chc[r]
n.push(new A.D(B.f1,A.jw(p,p,p,A.d(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bT1(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.i,0,p,p))
return A.o(p,A.x(f,B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.n(j,p,h,i,p,p,B.n),p,p,p,B.kB,B.bl,p,p,p)},
$S:163}
C.bSY.prototype={
$0(){var w=this.a
return w.m(new C.bSX(w,this.b))},
$S:0}
C.bSX.prototype={
$0(){return B.d.cH(this.a.gDk().c,this.b)},
$S:0}
C.bSZ.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bT_.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bT0.prototype={
$1(d){return this.a.m(new C.bSW(this.b,d))},
$S:156}
C.bSW.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bT1.prototype={
$1(d){return this.a.m(new C.bSV(this.b,this.c))},
$S:9}
C.bSV.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e5u.prototype={
$0(){var w=this.a
w.wE()
w.a.bu()
w.a.qu()},
$S:0}
C.e5t.prototype={
$0(){var w=this.a
w.wE()
w.a.bu()
w.a.qu()},
$S:0}
C.e5w.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.ct(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e5x.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e5y.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e5s.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e5v.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e5A.prototype={
$0(){this.a.Px()
return null},
$S:0}
C.e5z.prototype={
$0(){return this.a.Fc(this.b)},
$S:0}
C.e4V.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bP(!1,B.ds,w,w,!0,w,w,w,new C.e4T(d),w,w),r=A.bp(B.bQ,w,w,w,w,w,w,w,w,w,w,w)
return A.en(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e4U(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e4T.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e4U.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.e4W.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cPp(this.b)},
$S:0}
C.e4Q.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aW4(w.b,w.c,w.d)},
$S:7}
C.e4h.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e4i.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e4z.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Hs(t.a.c),$async$$0)
case 2:s=r.nw(q.dH(e,new C.e4x(t)))
if(s!=null&&t.c!=null)t.m(new C.e4y(t,s))
t.a.bu()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e4x.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e4y.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e4A.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e4B.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e4P.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cQb(C.hG_(w),w)},
$S:0}
C.e4w.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.WA(u,w,C.aRI(u,w),new C.e4v(v),null)},
$S:z+35}
C.e4v.prototype={
$1(d){return this.boJ(d)},
boJ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e4u(s,d))
w=3
return A.b(s.uC(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:570}
C.e4u.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bfJ(this.b)},
$S:0}
C.e4M.prototype={
$1(d){return d.as},
$S:z+1}
C.e4N.prototype={
$1(d){var w=this
return new A.e0(new C.e4L(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e4L.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.ef:B.c,h=A.l(26),g=A.K(B.bQ.j(0.5),B.r,1.5),f=A.o(k,D.bWP,B.f,k,k,new A.n(B.bQ.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.i,0,B.p),1)
f=A.A(A.a([f,B.bc,a0,A.aH(k,k,k,k,A.X(B.cB,j?B.bu:B.bh,k,k,k,k),k,k,k,new C.e4F(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.i,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bQ:B.bQ.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ax(B.bQ,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bQ
a0.push(A.ay(k,A.cU(k,A.d(m,k,k,k,k,k,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b0,new A.n(q,k,new A.bG(n,n,n,n),new A.be(p,p,p,p),k,k,B.n),B.ha,k,k,k,k,B.CH,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e4G(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.c_(B.bI,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c81,new A.D(D.bGZ,f,k),new A.D(D.bGQ,e,k),new A.D(B.tb,a0,k),new A.D(H.anT,A.d(v,k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(W.aqv,j?B.bu:B.bh,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bGS,A.A(A.a([a0,B.as,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.aya(k,B.bQ,k,k,!1,B.y,k,k,k,k,k,k,new C.e4H(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.i,0,k,k),k))}f.push(B.aB)
j=A.l(20)
e=A.a([new A.ab(0,B.G,B.aD.j(0.35),B.i4,12)],x.V)
f.push(A.ay(k,A.o(k,A.A(A.a([D.fOi,B.bc,D.bLh,D.bXu],w),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.n(k,k,k,j,e,D.cbO,B.n),k,k,k,B.i_,B.bH,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e4I(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.wI,A.A(A.a([A.E(A.dU(B.ds,new C.e4J(a1),k),1),B.as,A.E(A.bJ(F.aZ0,k,new C.e4K(t,a1),A.bp(B.bQ,k,k,k,k,k,B.co,k,k,k,k,k)),1)],w),B.l,k,B.e,B.i,0,k,k),k))
return A.bm(!0,A.o(k,A.cc(A.x(f,B.E,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.aq,k,k,new A.n(i,k,g,h,k,k,B.n),k,k,k,B.yX,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:92}
C.e4F.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e4G.prototype={
$0(){return this.b.$1(new C.e4E(this.a,this.c))},
$S:0}
C.e4E.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e4H.prototype={
$1(d){var w=this.a
w.m(new C.e4C(w,d))
this.b.$1(new C.e4D())},
$S:9}
C.e4C.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e4D.prototype={
$0(){},
$S:0}
C.e4I.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(new A.aIm(!0,w))
return null},
$S:0}
C.e4J.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e4K.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(new A.aIm(!1,w))
return null},
$S:0}
C.e4O.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cQ_(this.b.b)
w.r.a8(0)},
$S:0}
C.e45.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ajm(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hz3(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e46.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aGu(w)},
$S:0}
C.e4Y.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aeH(this.b,w,this.c,null)},
$S:z+37}
C.e4S.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.ef:B.c,t=A.l(20),s=A.X(B.l_,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.N,0,B.p)
return A.en(A.a([A.bJ(D.h5c,w,new C.e4R(d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.ba(t,B.a1),r,w)},
$S:18}
C.e4R.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e47.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e48.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e49.prototype={
$1(d){return d.a},
$S:z+8}
C.e4a.prototype={
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
C.e4e.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ajm(q)
w=A.T(q).k("Y<1>")
q=A.B(new A.Y(q,new C.e4c(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hz3(v.e,null,r,v.f,v.r,new C.e4d(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e4d.prototype={
$0(){return this.a.abA(this.b)},
$S:0}
C.e4c.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e4f.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("N<1,i5>")
w=A.B(new A.N(w,new C.e4b(this.b),v),v.k("ak.E"))
u.d=t.aGu(w)},
$S:0}
C.e4b.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+39}
C.e4X.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e4r.prototype={
$1(d){return d.length!==0},
$S:3}
C.e4s.prototype={
$1(d){var w=this
return new A.e0(new C.e4q(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e4q.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.ef:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.m(v,v,t?B.aS:B.av,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bh,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.N(o,new C.e4m(u,e,o),A.T(o).k("N<1,v>")))
p.push(B.P)
u=w.d
p.push(A.aN(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(12),B.du),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mB,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a7,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.N,0,B.p)
t=w.a
return A.en(A.a([A.bP(!1,B.ds,v,v,!0,v,v,v,new C.e4n(d),v,v),A.bJ(B.Lt,v,new C.e4o(t,u,o,e),A.bp(B.bQ,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.fSP,v,new C.e4p(t,u,o,d),A.bp(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:249}
C.e4m.prototype={
$1(d){var w=null
return A.dJ(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.m(w,w,this.a.a?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.c4Q,w,w,w,new C.e4l(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:2294}
C.e4l.prototype={
$0(){return this.a.$1(new C.e4j(this.b,this.c))},
$S:0}
C.e4j.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e4n.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e4o.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e4k(w.c,u))
v.bP(0,B.ch)}},
$S:0}
C.e4k.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e4p.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).N(!0)},
$S:0}
C.e4t.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cQE(this.b,D.uV,C.Hq(v,w.a.c))},
$S:0}
C.e54.prototype={
$1(d){return d.as},
$S:z+1}
C.e55.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j3(this.b,w)},
$S:0}
C.e56.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.iw6(v)
return w.WZ(v==null?null:v.a)},
$S:0}
C.e57.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.i7L(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcn(k)){k=A.aS(1/0,e.a,e.b)
s=A.aS(1/0,e.c,e.d)
l.cxO(new A.au(u,t),v.gbmq(),new A.au(k,s))}k=A.l(22)
s=this.b.a
r=s?D.d5j:D.d3q
q=A.K(s?B.dp:D.blT,B.r,1)
p=A.l(22)
o=A.bS(0,A.b3(m,m,m,new C.bgA(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.o(m,A.bv(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bS(0,A.v2(new A.P(n,n,n,n),new A.a5(u,t,new C.bhw(l.d,v,l.f,w,new C.e50(l),l.gchv(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bzr(s,new C.e51(l,e),new C.e52(l,e),new C.e53(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.n(m,m,q,k,m,new A.a7(B.aY,B.b2,B.x,r,m,m),B.n),m,m,m,B.amY,m,m,m,m)},
$S:171}
C.e50.prototype={
$1(d){var w=this.a
w.m(new C.e4Z(w,d))},
$S:2}
C.e4Z.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.I(0,v)},
$S:0}
C.e51.prototype={
$0(){var w=this.b
return this.a.bdS(1.25,new A.au(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e52.prototype={
$0(){var w=this.b
return this.a.bdS(0.8,new A.au(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e53.prototype={
$0(){var w=this,v=w.b
return w.a.aW4(new A.au(A.aS(1/0,v.a,v.b),A.aS(1/0,v.c,v.d)),new A.au(w.c,w.d),w.e.gbmq())},
$S:0}
C.e58.prototype={
$0(){var w=this.a
return w.m(new C.e5_(w))},
$S:0}
C.e5_.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e4g.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fH(new A.fx(s.c)),$async$$0)
case 2:t.yF("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.diY.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bll(u,C.hKG(v.c,u),new C.diX(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+40}
C.diX.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.diZ.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.boH(d.d,d.c,u.f.q(0,d.a),new C.diW(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+41}
C.diW.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fKl.prototype={
$1(d){var w,v=d.e
if(this.a.an(0,v))return v
v=this.b
w=A.T(v)
return A.nw(new A.cM(new A.Y(v,new C.fKm(d),w.k("Y<1>")),new C.fKn(),w.k("cM<1,q>")))},
$S:z+19}
C.fKm.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fKn.prototype={
$1(d){return d.a},
$S:z+8}
C.fKj.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fKk.prototype={
$1(d){return d.b},
$S:z+8}
C.fKq.prototype={
$1(d){var w,v=d.e
if(this.a.an(0,v))return v
v=this.b
w=A.T(v)
return A.nw(new A.cM(new A.Y(v,new C.fKr(d),w.k("Y<1>")),new C.fKs(),w.k("cM<1,q>")))},
$S:z+19}
C.fKr.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fKs.prototype={
$1(d){return d.a},
$S:z+8}
C.fKo.prototype={
$1(d){var w,v=A.ew([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.an(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+43}
C.fKp.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dj0.prototype={
$0(){return this.a},
$S:z+44}
C.djh.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.an(0,d)},
$S:220}
C.dj9.prototype={
$2(d,e){var w=this.a.c_(0,d,new C.dja()),v=J.a8(w)
if(!v.q(w,e))v.I(w,e)},
$S:120}
C.dja.prototype={
$0(){return A.a([],x.s)},
$S:845}
C.dj8.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eC(w,e)
return w===!0},
$S:261}
C.dj1.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dj7.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dj6.prototype={
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
$S:2296}
C.dj2.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.djb.prototype={
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
if(r.a!==a9&&!B.d.aS(w,new C.djc(r)))w.push(r)}}B.d.bq(w,new C.djd(a8))
B.d.b0(w,new C.dje())
q=C.i7K(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.f0w],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.brO(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:2297}
C.djc.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.djd.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dje.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.djf.prototype={
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
C.djg.prototype={
$1(d){return 16+d*156},
$S:181}
C.dj_.prototype={
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
o.y.push(new C.L0(d,new A.r(e+t,w),s,s.length))}},
$S:208}
C.dj3.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aLu(new A.r(v.a,v.b+28),new A.r(w.a,w.b+28),!0,null))},
$S:120}
C.dj4.prototype={
$1(d){return d.a===this.a},
$S:z+45}
C.dj5.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:846}
C.dji.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:846}
C.djj.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:505}
C.djk.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:201}
C.djl.prototype={
$1(d){return d>=0.5},
$S:121}
C.fpz.prototype={
$3(d,e,f){var w=null,v=A.l(10)
return A.hd(A.aM(!1,v,!0,new A.a5(38,38,A.X(d,this.a.c?B.c:B.ct,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:2299}
C.f_u.prototype={
$1(d){var w=null,v=A.l(8),u=B.bQ.j(0.12),t=A.l(8)
return new A.D(B.nE,A.aM(!1,v,!0,A.o(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fDN,B.K,w,w),B.f,w,w,new A.n(u,w,w,t,w,w,B.n),w,w,w,w,B.OW,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f_t(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+46}
C.f_t.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dze.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dzd.prototype={
$1(d){var w=null,v=A.l(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.o5,B.K,w,w)
return A.en(A.a([A.bP(!1,B.ds,w,w,!0,w,w,w,new C.dzb(d),w,w),A.bP(!1,A.d("Delete",w,w,w,w,w,w,A.m(w,w,B.mU,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dzc(d),w,w)],x.p),B.b9,B.CC,w,u,D.bHU,w,D.bJR,new A.ba(v,B.a1),w,w)},
$S:18}
C.dzb.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dzc.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dzn.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dzo.prototype={
$1(d){var w=this.a
return w.m(new C.dzm(w,d))},
$S:z+47}
C.dzm.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dzp.prototype={
$1(d){var w=null
return A.qM(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dzs.prototype={
$1(d){var w=this.a
return w.m(new C.dzl(w,d))},
$S:35}
C.dzl.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dzr.prototype={
$1(d){var w=null
return A.qM(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dzt.prototype={
$1(d){var w=this.a
return w.m(new C.dzk(w,d))},
$S:35}
C.dzk.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dzu.prototype={
$0(){var w=this.a
return w.m(new C.dzj(w))},
$S:0}
C.dzj.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dzv.prototype={
$0(){var w=this.a
return w.m(new C.dzi(w))},
$S:0}
C.dzi.prototype={
$0(){return++this.a.at},
$S:0}
C.dzw.prototype={
$0(){var w=this.a
return w.m(new C.dzh(w))},
$S:0}
C.dzh.prototype={
$0(){return--this.a.ax},
$S:0}
C.dzx.prototype={
$0(){var w=this.a
return w.m(new C.dzg(w))},
$S:0}
C.dzg.prototype={
$0(){return++this.a.ax},
$S:0}
C.dzy.prototype={
$1(d){var w=this.a
return w.m(new C.dzf(w,d))},
$S:9}
C.dzf.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dzq.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dzz.prototype={
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
return A.E(A.aE(!1,B.a3,!0,r,A.aM(!1,o,!0,A.cU(r,A.x(A.a([t,B.aw,A.d(e,r,r,r,r,r,r,A.m(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.i,0,B.p),r,r,B.b0,new A.n(w,r,u,v,r,r,B.n),B.eH,r,r,r,r,B.k6,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dzA(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
$S:z+49}
C.dzA.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dzJ.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cgm.prototype={
$2(d,e){return new A.bC(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:104}
C.cgt.prototype={
$1(d){return d.aj()},
$S:z+5}
C.cgu.prototype={
$2(d,e){var w=J.b9(e,new C.cgs(),x.a)
w=A.B(w,w.$ti.k("ak.E"))
return new A.bC(d,w,x.d2)},
$S:z+51}
C.cgs.prototype={
$1(d){return d.aj()},
$S:z+12}
C.cgo.prototype={
$1(d){return C.amE(A.a1(d,x.N,x.z))},
$S:z+9}
C.cgp.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cgq.prototype={
$1(d){return C.hpL(A.a1(d,x.N,x.z))},
$S:z+11}
C.cgr.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cgy.prototype={
$1(d){return new A.aIy(d.f.length,d.a,d.b)},
$S:z+53}
C.cgz.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:697}
C.cgv.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cgw.prototype={
$1(d){return d.cPC(C.Hq(d,this.a))},
$S:z+54}
C.e5h.prototype={
$1(d){return C.ux(d,this.a.a.c)},
$S:z+3}
C.e5i.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e5m.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e5n.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e5e.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b23(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zd("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pA(r.c,r.e),$async$$0)
case 4:s.zd(p)
w=5
return A.b(s.Kr(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e5f.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b23(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zd("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pA(r.c,r.e),$async$$0)
case 4:s.zd(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e5g.prototype={
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
break}if(q==null){o.zd("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.zd("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.zd("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Kr(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.aa(j)
o=r.a
if(o.c==null){w=1
break}o.zd(B.a.ek(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e5l.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b22(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.zd("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).cf(A.ef(new C.e5k(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pA(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e5k.prototype={
$1(d){var w=this.b
return new C.a0P(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+83}
C.e5j.prototype={
$1(d){return D.hIW},
$S:z+56}
C.e5p.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e5q.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e5o(w,d)
return new A.D(B.da,new C.bhA(this.b,d.c,d.a,w,null),null)},
$S:2300}
C.e5o.prototype={
$0(){return this.a.YQ(this.b.b)},
$S:0}
C.e59.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e5a.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e5b.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e5c.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e5d.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e5r.prototype={
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
C.dRl.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+57}
C.dRm.prototype={
$0(){return B.d.gH(D.a7f)},
$S:z+58}
C.dRn.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.as(A.X(this.b.d,B.c.j(0.95),w,w,D.dck,44),w,w,w),w,w,new C.bmt(u,t,v,w),B.az)},
$S:59}
C.h0U.prototype={
$1(d){return A.pj(new C.h0T(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:148}
C.h0T.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.ef:B.c,p=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.tN,24)],x.V),o=r?B.eh:B.bO
o=A.o(t,t,B.f,t,t,new A.n(o,t,t,A.l(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bQ.j(0.18)],x.O)
w=A.o(t,D.bZU,B.f,t,t,new A.n(t,t,t,A.l(12),t,new A.a7(B.a5,B.a9,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.m(t,t,r?B.aS:B.av,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.o(t,A.x(A.a([B.U,o,new A.D(B.anX,A.A(A.a([w,B.bc,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.m(t,t,r?B.bu:B.bh,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.i,0,B.p),1)],u),B.l,t,B.e,B.i,0,t,t),t),A.E(A.iA(!0,t,e,B.y,D.fqd,new C.h0S(this.b,s),20,B.anu,t,B.ah,!1),1)],u),B.l,t,B.e,B.i,0,B.p),B.f,t,t,new A.n(q,t,t,B.lf,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:126}
C.h0S.prototype={
$2(d,e){var w=null,v=D.a7f[e],u=A.l(16),t=A.l(16),s=this.b.a,r=A.K(s?B.eh:B.bO,B.r,1),q=A.a([new A.ab(0,B.G,B.w.j(s?0.35:0.08),B.et,8)],x.V),p=A.l(15),o=A.E(new C.a7E(v.a,!0,w),1),n=s?B.jZ:B.iA,m=A.d(v.b,w,1,B.a2,w,w,w,A.m(w,w,s?B.aS:B.av,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aE(!1,B.a3,!0,w,A.aM(!1,u,!0,A.eE(A.bv(p,A.x(A.a([o,A.o(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.m(w,w,s?B.bu:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.k8,w,w,w)],l),B.al,w,B.e,B.i,0,B.p),B.aq),w,new A.n(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.h0R(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)},
$S:85}
C.h0R.prototype={
$0(){A.a6(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cq8.prototype={
$0(){return this.a.ahS(this.b)},
$S:0}
C.h0h.prototype={
$1(d){return D.hDK},
$S:z+59}
C.h84.prototype={
$1(d){var w=this
return new C.a2C(w.a,w.b,w.c,w.d,null)},
$S:z+60}
C.h0l.prototype={
$1(d){return new C.a_t(this.a,null)},
$S:z+61}
C.h0k.prototype={
$1(d){return D.hEL},
$S:z+62}
C.das.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dat.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dar(w,d))},
$S:35}
C.dar.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dau.prototype={
$1(d){return this.a.L4()},
$S:2}
C.dav.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dao.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dap.prototype={
$1(d){return this.a.L4()},
$S:2}
C.daq.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cIw.prototype={
$0(){},
$S:0}
C.cIC.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cID.prototype={
$0(){return this.a.aRk(-1)},
$S:0}
C.cIE.prototype={
$1(d){return this.a.m(new C.cIB())},
$S:2}
C.cIB.prototype={
$0(){},
$S:0}
C.cIF.prototype={
$0(){return this.a.aRk(1)},
$S:0}
C.cIG.prototype={
$1(d){return this.a.m(new C.cIA())},
$S:2}
C.cIA.prototype={
$0(){},
$S:0}
C.cIH.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.m(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.eh:B.bO
return A.uV(u,u,B.b3,r,u,new C.cIz(t,d),B.wM,s,w,u,new A.ax(v,1,B.r,-1),B.ci)},
$S:2301}
C.cIz.prototype={
$1(d){var w=this.a
return w.m(new C.cIx(w,this.b))},
$S:9}
C.cIx.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cII.prototype={
$1(d){return this.a.m(new C.cIy())},
$S:2}
C.cIy.prototype={
$0(){},
$S:0}
C.cIJ.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.fp4.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).N(w)},
$S:2}
C.fp5.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.fp6.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).N(w)},
$S:0}
C.fp2.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbDK()
w=w.e
s=A.l(B.o.D(v-1,0,v))
return A.b3(new A.D(D.bJQ,new A.e6(A.o(r,q.a.c,B.f,r,r,new A.n(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bzg(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:59}
C.fp3.prototype={
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
return A.aE(!1,B.a3,!0,p,A.aM(!1,v,!0,A.eE(D.eyZ,r,new A.n(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a7(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
$S:143}
C.fZy.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:63}
C.eXE.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eXv.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eXw.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eXC.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e0(new C.eXB(w,this.b),null)},
$S:20}
C.eXB.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.ef:B.c,t=A.l(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eI(w,u,new A.D(B.anR,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hvT(new C.eXy(r,e),r.a),B.aB,A.A(A.a([A.E(A.dU(B.ds,new C.eXz(d),w),1),B.as,A.E(A.bJ(B.WH,w,new C.eXA(r,d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.i,0,w,w)],q),B.al,w,B.e,B.N,0,B.p),w),w,w,w,w,w,B.d7,w,new A.ba(t,B.a1),w)},
$S:108}
C.eXy.prototype={
$1(d){return this.b.$1(new C.eXx(this.a,d))},
$S:35}
C.eXx.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eXz.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eXA.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(w)
return null},
$S:0}
C.eXD.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.TW(this.b)},
$S:0}
C.eXq.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.bfP(w)},
$S:0}
C.eXu.prototype={
$1(d){return this.bp5(d)},
bp5(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Mj(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j3(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eXt.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("Y<1>")
w=A.B(new A.Y(w,new C.eXs(this.b),v),v.k("M.E"))
u.d=t.bfP(w)},
$S:0}
C.eXs.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eXF.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j3(this.b,w)},
$S:0}
C.eXG.prototype={
$1(d){return this.a.bHU(d,this.b)},
$S:z+65}
C.eXr.prototype={
$0(){return this.a.abz(this.b)},
$S:0}
C.h7S.prototype={
$1(d){return new C.af1(this.a,this.b,this.c,null)},
$S:z+66}
C.eXI.prototype={
$0(){return this.a.a0O(this.b)},
$S:0}
C.eXJ.prototype={
$0(){return this.a.Rb(this.b)},
$S:0}
C.eXK.prototype={
$0(){return this.a.F7(this.b)},
$S:0}
C.eXL.prototype={
$0(){return this.a.a0P(this.b)},
$S:0}
C.eXH.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eXl.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eXm.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eXn.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eXp.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qA(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eXo(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eXo.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eY7.prototype={
$2(d,e){return d+e.gxO()},
$S:z+69}
C.eY3.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eY4.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eXP.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.ef:B.c,s=A.l(24),r=A.o(v,D.c_n,B.f,v,v,new A.n(B.aA.j(u?0.18:0.08),v,A.K(B.aA.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.m(v,v,u?B.aS:B.av,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.m(v,v,u?B.bu:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.av
u=u?B.eh:B.bO
w=x.p
return A.eI(v,t,new A.D(B.wL,A.x(A.a([r,B.aO,q,B.P,p,B.db,A.A(A.a([A.E(A.dU(B.o8,new C.eXN(d),A.dj(v,v,v,v,v,v,v,v,v,o,v,v,B.fh,v,new A.ba(A.l(14),B.a1),new A.ax(u,1,B.r,-1),v,v,v,v)),1),B.as,A.E(A.bJ(D.h94,v,new C.eXO(d),A.bp(B.aA,v,v,v,v,v,B.fh,v,new A.ba(A.l(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.i,0,v,v)],w),B.l,v,B.e,B.N,0,B.p),v),v,v,v,v,v,B.d7,v,new A.ba(s,B.a1),v)},
$S:46}
C.eXN.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.eXO.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.eXY.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.ef:B.c,i=A.l(28),h=A.a([new A.ab(0,B.G,B.w.j(k?0.35:0.08),B.fP,28)],x.V),g=k?D.djJ:B.a6y,f=x.p
g=A.o(m,A.x(A.a([A.o(m,m,B.f,m,m,new A.n(B.c.j(0.45),m,m,A.l(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.fji,B.aw,new A.bK(B.a5,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.m(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cE,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.i,0,B.p),B.f,m,m,new A.n(m,m,m,m,m,new A.a7(B.ay,B.aC,B.x,g,m,m),B.n),m,m,m,m,B.anV,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bh,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b8I(B.b8,B.jw,new C.eXV(v,d),l,"Camera import","Scan QR"),1),B.as,A.E(v.b8I(B.cH,B.zO,new C.eXW(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.i,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bh,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.l(16)
r=B.aA.j(k?0.14:0.06)
q=A.l(16)
p=A.K(B.aA.j(0.28),B.r,1)
o=A.o(m,D.bZH,B.f,m,m,new A.n(B.aA.j(0.12),m,m,A.l(12),m,m,B.n),m,m,m,m,B.bS,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.m(m,m,k?B.aS:B.av,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bh,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.i,0,B.p),1)
return A.bm(!0,new A.D(B.wF,A.o(m,A.x(A.a([g,new A.D(B.anS,A.x(A.a([w,B.U,u,B.bx,t,B.U,A.aE(!1,B.a3,!0,m,A.aM(!1,s,!0,A.o(m,A.A(A.a([o,B.bc,n,A.X(B.eI,k?B.bu:B.bh,m,m,m,m)],f),B.l,m,B.e,B.i,0,m,m),B.f,m,m,new A.n(r,m,p,q,m,m,B.n),m,m,m,m,B.bH,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eXX(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)],f),B.E,m,B.e,B.i,0,B.p),m)],f),B.l,m,B.e,B.N,0,B.p),B.aq,m,m,new A.n(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:28}
C.eXV.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.we("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eXW.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.we("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eXX.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.OO(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eXT.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.ef:B.c,m=A.l(24),l=A.a([new A.ab(0,B.G,B.w.j(o?0.35:0.08),B.eS,24)],x.V),k=o?B.eh:B.bO
k=A.o(q,q,B.f,q,q,new A.n(k,q,q,A.l(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.l(12)
v=this.c
u=o?B.bu:B.bh
u=A.bv(w,new A.a5(48,48,C.aT2(!0,A.l(12),48,B.PD,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.m(q,q,o?B.aS:B.av,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bn(v.gxO())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wF,A.o(q,A.x(A.a([B.U,k,new A.D(D.anP,A.A(A.a([u,B.bc,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.m(q,q,o?B.bu:B.bh,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.i,0,B.p),1)],s),B.l,q,B.e,B.i,0,q,q),q),B.Cu,r.crR(B.vg,B.aV,new C.eXR(d),p,"QR code or backup file","Transfer project"),r.b5I(!0,B.ej,B.aA,new C.eXS(d),p,"Remove from this device","Delete project"),B.U],s),B.l,q,B.e,B.N,0,B.p),B.f,q,q,new A.n(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:28}
C.eXR.prototype={
$0(){A.a6(this.a,!1).N("transfer")
return null},
$S:0}
C.eXS.prototype={
$0(){A.a6(this.a,!1).N("delete")
return null},
$S:0}
C.eXU.prototype={
$1(d){return this.bp6(d)},
bp6(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Mj(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wt(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eYa.prototype={
$0(){var w=this.a
w.a.bu()
w.m(new C.eY9(w))},
$S:0}
C.eY9.prototype={
$0(){return this.a.r++},
$S:0}
C.eYb.prototype={
$0(){var w=this.a
return w.m(new C.eY8(w))},
$S:0}
C.eY8.prototype={
$0(){return this.a.r++},
$S:0}
C.eXM.prototype={
$0(){var w=this.a.c
w.toString
return A.j3(w,null)},
$S:0}
C.eXQ.prototype={
$0(){return this.a.cl2(this.b)},
$S:0}
C.eY6.prototype={
$0(){var w=this.a
return w.m(new C.eY5(w,this.b))},
$S:0}
C.eY5.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eY0.prototype={
$0(){return this.a.we("scan")},
$S:0}
C.eY1.prototype={
$0(){return this.a.we("file")},
$S:0}
C.eY2.prototype={
$1(d){return this.a.crS(d,this.b)},
$S:z+70}
C.eY_.prototype={
$0(){return this.a.Fb(this.b)},
$S:0}
C.eXZ.prototype={
$0(){return this.a.a1i(this.b,this.c)},
$S:0}
C.cHQ.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+71}
C.cHP.prototype={
$1(d){return d.aj()},
$S:z+72}
C.cHN.prototype={
$1(d){return C.hQP(A.a1(d,x.N,x.z))},
$S:z+73}
C.cHO.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fJd.prototype={
$1(d){return d.y===D.kZ},
$S:z+3}
C.h8E.prototype={
$1(d){return C.aRI(d,this.a)},
$S:z+3}
C.fGI.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bTY.prototype={
$1(d){return!d.as},
$S:z+1}
C.bTX.prototype={
$1(d){return d.aj()},
$S:z+23}
C.bTU.prototype={
$1(d){return C.hpN(A.a1(d,x.N,x.z))},
$S:z+24}
C.bTV.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bTW.prototype={
$1(d){return J.k(d)},
$S:16}
C.fwZ.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fsw.prototype={
$1(d){return C.hfe(A.a1(d,x.N,x.z))},
$S:z+77}
C.fsx.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fsy.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.h05.prototype={
$1(d){return J.k(d)},
$S:16}
C.h06.prototype={
$1(d){return d.a},
$S:z+79}
C.h07.prototype={
$1(d){return d.length!==0},
$S:3}
C.h08.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.h09.prototype={
$1(d){return d.TW(null).aj()},
$S:z+80}
C.h8C.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fJH.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fMV.prototype={
$1(d){return C.amE(A.a1(d,x.N,x.z))},
$S:z+9}
C.fMW.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fMX.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fMY.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fMZ.prototype={
$1(d){return C.ux(d,this.a)},
$S:z+3}
C.h_T.prototype={
$1(d){return C.ux(d,this.a)},
$S:z+3}
C.h8x.prototype={
$1(d){return C.amE(A.a1(d,x.N,x.z))},
$S:z+9}
C.h8y.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h8z.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fJo.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fJp.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h8I.prototype={
$1(d){return!d.as},
$S:z+1}
C.fIT.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fIU.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fIV.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.h85.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fNM.prototype={
$1(d){return d.Q},
$S:z+15}
C.h_M.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fMS.prototype={
$1(d){return C.amE(A.a1(d,x.N,x.z))},
$S:z+9}
C.fMT.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fMU.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.h_H.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.ft4.prototype={
$1(d){return d.length!==0},
$S:3}
C.ft5.prototype={
$1(d){return C.hpN(A.a1(d,x.N,x.z))},
$S:z+24}
C.ft6.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.ft7.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:16}
C.ft8.prototype={
$1(d){return d.length!==0},
$S:3}
C.ftl.prototype={
$2(d,e){return d.eF(new C.ftm(e))},
$S:2302}
C.ftm.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.cg},
$S:2303}
C.fti.prototype={
$1(d){return C.icz(d,this.a)},
$S:z+82}
C.ftj.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.ftk.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fxG.prototype={
$1(d){return d.a},
$S:z+55}
C.fxH.prototype={
$1(d){return d.length!==0},
$S:3}
C.fxI.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fAG.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fFX.prototype={
$1(d){return C.hBt(d,C.Hq(d,this.a))},
$S:z+5}
C.fFY.prototype={
$1(d){return C.hBu(d,C.Hq(d,this.a))},
$S:z+5};(function aliases(){var w=C.aCf.prototype
w.bwX=w.t
w=C.aAq.prototype
w.bwS=w.t
w=C.aHJ.prototype
w.bxk=w.t
w=C.aCg.prototype
w.bwY=w.t
w=C.aCi.prototype
w.bwZ=w.t
w=C.aCj.prototype
w.bx_=w.t
w=C.aNW.prototype
w.bzO=w.t
w=C.aQ3.prototype
w.bC8=w.t
w=C.aQ4.prototype
w.bC9=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aFg.prototype,"gcoK","coL",27)
var r
w(r=C.aCe.prototype,"gchB","chC",63)
v(r,"gaPw","Ok",0)
v(r,"gcx9","BC",0)
v(r,"gbPL","P1",0)
v(r,"gcLB","ze",0)
v(r,"gcqP","a20",0)
v(r,"gbL7","OK",0)
v(r,"gbQa","Yg",0)
w(r,"gbVf","bVg",76)
v(r,"gbFp","Ay",0)
v(C.aCh.prototype,"gcLx","G4",0)
v(r=C.amt.prototype,"gbti","btj",2)
v(r,"gbta","btb",2)
v(r,"gcMF","cMG",2)
u(r,"gqt","kN",0)
u(r=C.akD.prototype,"geX","fY",2)
w(r,"gcdd","cde",26)
u(C.avw.prototype,"gqt","kN",0)
v(r=C.azt.prototype,"gcYf","cYg",2)
u(r,"gqt","kN",0)
u(C.aLz.prototype,"gbtg","bth",2)
v(C.amC.prototype,"gC7","cMS",2)
u(r=C.amA.prototype,"gcNz","cNA",2)
u(r,"gqt","kN",0)
v(r=C.amw.prototype,"gbs8","bs9",2)
v(r,"gcSK","cSL",2)
u(r=C.amy.prototype,"geX","fY",2)
u(r,"giC","cMb",2)
v(r=C.amu.prototype,"gcM0","cM1",2)
u(r,"gbr0","jG",2)
v(r=C.aFQ.prototype,"gahu","wu",0)
v(r,"gcki","a1a",0)
v(r,"gaTM","IG",0)
v(r=C.aFN.prototype,"gcHw","a47",0)
v(r,"gahu","wu",0)
v(r,"gcv9","a2F",0)
v(r,"gckd","b3V",2)
v(r,"gclf","a1n",0)
w(r,"gchv","chw",33)
v(r,"gbQ2","IL",0)
v(r,"gcIA","cIB",2)
v(r,"gc7b","a_1",0)
w(r,"gcg_","cg0",34)
v(r,"gck1","ck2",2)
v(r=C.aEf.prototype,"gcdj","QI",0)
v(r,"gcdl","cdm",2)
v(r,"gbMC","abb",0)
v(r=C.aFP.prototype,"gbTE","YM",0)
v(r,"gc3c","Zr",0)
v(r,"gcBA","a3v",0)
v(r,"gcxJ","a36",0)
v(C.aFO.prototype,"gcxs","aji",0)
v(C.auG.prototype,"gcfY","a0M",0)
v(C.aAZ.prototype,"ga3R","L4",2)
v(C.aAY.prototype,"ga3R","L4",2)
v(C.azF.prototype,"ga3R","L4",2)
v(r=C.aHk.prototype,"gb55","RI",0)
v(r,"gbEd","WT",0)
v(r,"gcl3","cl4",2)
w(C.aHj.prototype,"gcgQ","cgR",67)
t(C.aHl.prototype,"gaTH",0,0,null,["$1","$0"],["IF","bNW"],68,0,0)
s(C,"hJL","imu",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aK,[C.aqd,C.uS,C.nt,C.Ix,C.agd,C.KU,C.uT,C.bUt,C.te,C.bpZ,C.amL,C.aej,C.ls,C.bT4,C.auS,C.zC,C.alj,C.MX,C.bbn,C.aam,C.biF,C.agk,C.aAG,C.ag8,C.aLz,C.L0,C.GJ,C.bhy,C.aLu,C.arC,C.djm,C.lR,C.aW_,C.aVZ,C.aU0,C.ui,C.rt,C.lC,C.i5,C.kZ,C.aJs])
u(A.kX,[C.fRA,C.fRz,C.fRB,C.h0N,C.fEC,C.fED,C.fEI,C.fPi,C.fPh,C.fPg,C.c9i,C.h1j,C.h1b,C.h1n,C.fJw,C.dS1,C.dRX,C.dRY,C.dRA,C.dRw,C.dSg,C.dSh,C.dSa,C.dSb,C.dSi,C.dSj,C.fKh,C.fMP,C.fMQ,C.h_R,C.h8w,C.fJn,C.h0r,C.diz,C.dhW,C.di4,C.dil,C.di0,C.di6,C.dhY,C.dia,C.dib,C.di9,C.diq,C.dip,C.dkm,C.dkn,C.dko,C.diN,C.diS,C.diR,C.cQU,C.cQW,C.d9G,C.da4,C.da5,C.da8,C.daa,C.dab,C.dac,C.dae,C.daf,C.bSP,C.bSJ,C.fxn,C.h8o,C.h8p,C.h8q,C.h8l,C.h8r,C.h8s,C.h8t,C.h8k,C.fKV,C.fZL,C.fGJ,C.fNL,C.bNS,C.h8O,C.h_n,C.bM1,C.bLX,C.bLZ,C.bLY,C.crP,C.crK,C.crL,C.crJ,C.crH,C.crM,C.cRY,C.cGP,C.cGS,C.cGQ,C.cGT,C.cGU,C.f9J,C.fjY,C.bTB,C.bTv,C.bTz,C.bTc,C.e3Q,C.e3N,C.e3O,C.e3M,C.e3S,C.bTt,C.bTj,C.bT3,C.bT2,C.bSZ,C.bT_,C.bT0,C.bT1,C.e5v,C.e4V,C.e4Q,C.e4h,C.e4x,C.e4A,C.e4w,C.e4v,C.e4M,C.e4N,C.e4H,C.e45,C.e4Y,C.e4S,C.e47,C.e48,C.e49,C.e4e,C.e4c,C.e4b,C.e4r,C.e4s,C.e4m,C.e54,C.e50,C.diY,C.diZ,C.fKl,C.fKm,C.fKn,C.fKj,C.fKk,C.fKq,C.fKr,C.fKs,C.fKo,C.fKp,C.djh,C.dj7,C.dj2,C.djc,C.djd,C.djg,C.dj4,C.djj,C.djk,C.djl,C.fpz,C.f_u,C.dzd,C.dzn,C.dzo,C.dzp,C.dzs,C.dzr,C.dzt,C.dzy,C.dzz,C.cgt,C.cgs,C.cgo,C.cgp,C.cgq,C.cgr,C.cgy,C.cgv,C.cgw,C.e5h,C.e5k,C.e5j,C.e5q,C.e5r,C.dRl,C.h0U,C.h0h,C.h84,C.h0l,C.h0k,C.dat,C.dau,C.dap,C.cIE,C.cIG,C.cIH,C.cIz,C.cII,C.fp4,C.fZy,C.eXC,C.eXy,C.eXu,C.eXs,C.eXG,C.h7S,C.eXP,C.eXY,C.eXT,C.eXU,C.eY2,C.cHP,C.cHN,C.cHO,C.fJd,C.h8E,C.fGI,C.bTY,C.bTX,C.bTU,C.bTV,C.bTW,C.fsw,C.fsx,C.h05,C.h06,C.h07,C.h08,C.h09,C.h8C,C.fJH,C.fMV,C.fMW,C.fMY,C.fMZ,C.h_T,C.h8x,C.h8y,C.h8z,C.fJo,C.fJp,C.h8I,C.fIT,C.fIU,C.h85,C.fNM,C.h_M,C.fMS,C.fMT,C.h_H,C.ft4,C.ft5,C.ft6,C.ft7,C.ft8,C.ftm,C.fti,C.ftj,C.fxG,C.fxH,C.fAG,C.fFX,C.fFY])
u(A.av,[C.b0y,C.amr,C.aXg,C.a_7,C.bda,C.QV,C.a6T,C.tE,C.Iz,C.bhw,C.bll,C.bzr,C.boH,C.aeG,C.blk,C.aeF,C.blj,C.aEg,C.aKw,C.aeH,C.GF,C.bhx,C.adW,C.bhv,C.bhA,C.b0w,C.auG,C.af1])
u(A.qJ,[C.bdO,C.bf0,C.beS,C.aJm,C.bkm,C.bpY,C.aXl,C.bdQ,C.aCd,C.bdj,C.bu3,C.bku,C.bjV,C.bk1,C.bhz,C.bgA,C.bmt,C.bzg])
u(A.np,[C.h1g,C.h1h,C.h1i,C.h19,C.h1a,C.h1l,C.h1m,C.dSd,C.dS_,C.dS2,C.dRH,C.dRI,C.dRJ,C.dRG,C.dRO,C.dRF,C.dRP,C.dRQ,C.dRE,C.dRR,C.dRD,C.dRS,C.dRC,C.dRT,C.dRu,C.dRv,C.dRB,C.dRU,C.dRz,C.dRV,C.dRy,C.dRK,C.dRx,C.dRL,C.dRt,C.dRM,C.dRN,C.dSe,C.dSf,C.dS3,C.dS4,C.dS5,C.dS6,C.dS7,C.dS8,C.dS9,C.dSl,C.dSc,C.fKi,C.dhU,C.dhS,C.dhT,C.dhV,C.diy,C.din,C.dik,C.dhX,C.dio,C.di2,C.di3,C.di5,C.dim,C.di1,C.di7,C.div,C.dih,C.dig,C.dii,C.dij,C.dic,C.die,C.dif,C.di8,C.dir,C.diu,C.dhZ,C.di_,C.dkl,C.dkk,C.dkj,C.dki,C.dkp,C.dkh,C.dkq,C.diO,C.diP,C.diQ,C.diT,C.diM,C.diL,C.cQV,C.d9F,C.d9S,C.d9R,C.da6,C.d9Q,C.da7,C.d9P,C.d9O,C.da9,C.d9N,C.da_,C.d9Z,C.dag,C.bSI,C.bSS,C.bSK,C.bSL,C.bSO,C.bSN,C.bSQ,C.bSR,C.bSM,C.bSG,C.bSH,C.bUl,C.bUm,C.bUn,C.bUo,C.bUp,C.bUq,C.bUr,C.h8n,C.fZM,C.bM0,C.bLW,C.bLU,C.bLV,C.bLT,C.crR,C.crS,C.crQ,C.crT,C.crV,C.crW,C.crX,C.crN,C.cGO,C.cGX,C.cGY,C.cGZ,C.cGW,C.cH_,C.cH0,C.cH1,C.cH2,C.cGR,C.cGV,C.bTR,C.bTQ,C.bTO,C.bTM,C.bTN,C.bTJ,C.bTK,C.bTL,C.bTP,C.bTI,C.f9K,C.f9L,C.f9M,C.f9N,C.f9O,C.bTF,C.bTG,C.bTH,C.bTA,C.bTC,C.bTD,C.bTE,C.bTw,C.bTg,C.bTf,C.bTe,C.bT8,C.bT9,C.bTd,C.bTa,C.bTb,C.bT7,C.e3P,C.e3R,C.e3K,C.e3L,C.e3J,C.e3T,C.e3U,C.e3V,C.e3Y,C.e3Z,C.e4_,C.e40,C.e41,C.e42,C.e43,C.e44,C.e3W,C.e3X,C.bTs,C.bTr,C.bTi,C.bTh,C.bTo,C.bTp,C.bTl,C.bTm,C.bTn,C.bTk,C.bST,C.bSU,C.bSY,C.bSX,C.bSW,C.bSV,C.e5u,C.e5t,C.e5w,C.e5x,C.e5y,C.e5s,C.e5A,C.e5z,C.e4T,C.e4U,C.e4W,C.e4i,C.e4z,C.e4y,C.e4B,C.e4P,C.e4u,C.e4F,C.e4G,C.e4E,C.e4C,C.e4D,C.e4I,C.e4J,C.e4K,C.e4O,C.e46,C.e4R,C.e4a,C.e4d,C.e4f,C.e4X,C.e4l,C.e4j,C.e4n,C.e4o,C.e4k,C.e4p,C.e4t,C.e55,C.e56,C.e4Z,C.e51,C.e52,C.e53,C.e58,C.e5_,C.e4g,C.diX,C.diW,C.dj0,C.dja,C.dj1,C.f_t,C.dze,C.dzb,C.dzc,C.dzm,C.dzl,C.dzk,C.dzu,C.dzj,C.dzv,C.dzi,C.dzw,C.dzh,C.dzx,C.dzg,C.dzf,C.dzq,C.dzA,C.dzJ,C.e5i,C.e5m,C.e5n,C.e5e,C.e5f,C.e5g,C.e5l,C.e5p,C.e5o,C.e59,C.e5a,C.e5b,C.e5c,C.e5d,C.dRm,C.h0R,C.cq8,C.das,C.dar,C.dav,C.dao,C.daq,C.cIw,C.cIC,C.cID,C.cIB,C.cIF,C.cIA,C.cIx,C.cIy,C.cIJ,C.fp5,C.fp6,C.eXE,C.eXv,C.eXw,C.eXx,C.eXz,C.eXA,C.eXD,C.eXq,C.eXt,C.eXF,C.eXr,C.eXI,C.eXJ,C.eXK,C.eXL,C.eXH,C.eXl,C.eXm,C.eXn,C.eXp,C.eXo,C.eY3,C.eY4,C.eXN,C.eXO,C.eXV,C.eXW,C.eXX,C.eXR,C.eXS,C.eYa,C.eY9,C.eYb,C.eY8,C.eXM,C.eXQ,C.eY6,C.eY5,C.eY0,C.eY1,C.eY_,C.eXZ])
u(A.ag,[C.aqq,C.Ue,C.a_R,C.a_V,C.a_T,C.a_r,C.ams,C.akC,C.avv,C.azs,C.amB,C.amz,C.amv,C.WA,C.amx,C.Uf,C.arF,C.arz,C.a0v,C.arD,C.a0P,C.a0Q,C.a7E,C.a_t,C.a_s,C.ZZ,C.a2C,C.Gt,C.azy,C.auF,C.auz,C.auE,C.P8])
u(A.ah,[C.aFg,C.bhq,C.aCe,C.bhP,C.aCh,C.beZ,C.aCf,C.aAq,C.aHJ,C.azt,C.aCj,C.aCi,C.aCg,C.bmP,C.amy,C.amu,C.aFQ,C.aFN,C.aEf,C.aFP,C.aFO,C.bmQ,C.aNW,C.aAZ,C.aAY,C.azF,C.bzj,C.aQ3,C.aQ4,C.aHk,C.boc,C.aHj,C.bB4])
u(A.n0,[C.dRZ,C.dS0,C.dRW,C.dSk,C.fMR,C.bSF,C.dix,C.diw,C.did,C.dis,C.dit,C.diU,C.bUs,C.bUk,C.bT5,C.bT6,C.h8m,C.h8N,C.bM_,C.crU,C.crO,C.crI,C.f9P,C.bTu,C.bTx,C.bTy,C.dtv,C.bTq,C.e4L,C.e4q,C.e57,C.dj9,C.dj8,C.dj6,C.djb,C.dje,C.djf,C.dj_,C.dj3,C.dj5,C.dji,C.cgm,C.cgu,C.cgz,C.dRn,C.h0T,C.h0S,C.fp2,C.fp3,C.eXB,C.eY7,C.cHQ,C.fwZ,C.fsy,C.fMX,C.fIV,C.fMU,C.ftl,C.ftk,C.fxI])
u(A.qw,[C.a26,C.agm,C.a2p,C.a0i,C.acX,C.aMg,C.Iy,C.amD,C.cHR,C.cHS])
t(C.amt,C.aCf)
t(C.akD,C.aAq)
t(C.avw,C.aHJ)
t(C.bhu,C.aCj)
t(C.amC,C.bhu)
t(C.bht,C.aCi)
t(C.amA,C.bht)
t(C.bhs,C.aCg)
t(C.amw,C.bhs)
t(C.bmu,C.aNW)
t(C.bzh,C.aQ3)
t(C.bzi,C.aQ4)
t(C.aHl,C.bB4)
t(C.bbB,A.bbo)
t(C.bzk,A.ap5)
t(C.bbA,C.bzk)
w(C.aCf,A.cf)
w(C.aAq,A.cf)
w(C.aHJ,A.eO)
w(C.aCg,A.cf)
v(C.bhs,C.ag8)
w(C.aCi,A.cf)
v(C.bht,C.ag8)
w(C.aCj,A.cf)
v(C.bhu,C.ag8)
w(C.aNW,A.eO)
w(C.aQ3,A.cf)
w(C.aQ4,A.cf)
v(C.bB4,A.eG)
v(C.bzk,A.jh)})()
A.p3(b.typeUniverse,JSON.parse('{"b0y":{"av":[],"v":[]},"bdO":{"aB":[]},"aqq":{"ag":[],"v":[]},"aFg":{"ah":["aqq"]},"Ue":{"ag":[],"v":[]},"amr":{"av":[],"v":[]},"aXg":{"av":[],"v":[]},"bhq":{"ah":["Ue"]},"a_R":{"ag":[],"v":[]},"a_V":{"ag":[],"v":[]},"a_T":{"ag":[],"v":[]},"a_r":{"ag":[],"v":[]},"aCe":{"ah":["a_R"]},"bhP":{"ah":["a_V"]},"aCh":{"ah":["a_T"]},"a_7":{"av":[],"v":[]},"bf0":{"aB":[]},"beS":{"aB":[]},"beZ":{"ah":["a_r"]},"aJm":{"aB":[]},"bkm":{"aB":[]},"bda":{"av":[],"v":[]},"ams":{"ag":[],"v":[]},"amt":{"ah":["ams"]},"bpY":{"aB":[]},"aXl":{"aB":[]},"akC":{"ag":[],"v":[]},"avv":{"ag":[],"v":[]},"azs":{"ag":[],"v":[]},"akD":{"ah":["akC"]},"bdQ":{"aB":[]},"QV":{"av":[],"v":[]},"aCd":{"aB":[]},"avw":{"ah":["avv"]},"bdj":{"aB":[]},"azt":{"ah":["azs"]},"amB":{"ag":[],"v":[]},"amz":{"ag":[],"v":[]},"amv":{"ag":[],"v":[]},"amC":{"ah":["amB"]},"bu3":{"aB":[]},"amA":{"ah":["amz"]},"bku":{"aB":[]},"amw":{"ah":["amv"]},"bjV":{"aB":[]},"WA":{"ag":[],"v":[]},"amx":{"ag":[],"v":[]},"Uf":{"ag":[],"v":[]},"a6T":{"av":[],"v":[]},"bk1":{"aB":[]},"tE":{"av":[],"v":[]},"Iz":{"av":[],"v":[]},"bmP":{"ah":["WA"]},"amy":{"ah":["amx"]},"amu":{"ah":["Uf"]},"arF":{"ag":[],"v":[]},"arz":{"ag":[],"v":[]},"a0v":{"ag":[],"v":[]},"aeH":{"av":[],"v":[]},"aFQ":{"ah":["arF"]},"aFN":{"ah":["arz"]},"bhw":{"av":[],"v":[]},"bhz":{"aB":[]},"bll":{"av":[],"v":[]},"bgA":{"aB":[]},"bzr":{"av":[],"v":[]},"boH":{"av":[],"v":[]},"aEf":{"ah":["a0v"]},"aeG":{"av":[],"v":[]},"blk":{"av":[],"v":[]},"aeF":{"av":[],"v":[]},"blj":{"av":[],"v":[]},"aEg":{"av":[],"v":[]},"aKw":{"av":[],"v":[]},"GF":{"av":[],"v":[]},"arD":{"ag":[],"v":[]},"a0P":{"ag":[],"v":[]},"a0Q":{"ag":[],"v":[]},"aFP":{"ah":["arD"]},"bhx":{"av":[],"v":[]},"adW":{"av":[],"v":[]},"bhv":{"av":[],"v":[]},"bhA":{"av":[],"v":[]},"aFO":{"ah":["a0P"]},"bmQ":{"ah":["a0Q"]},"b0w":{"av":[],"v":[]},"a7E":{"ag":[],"v":[]},"bmu":{"ah":["a7E"]},"bmt":{"aB":[]},"auG":{"av":[],"v":[]},"a_t":{"ag":[],"v":[]},"a_s":{"ag":[],"v":[]},"ZZ":{"ag":[],"v":[]},"a2C":{"ag":[],"v":[]},"aAZ":{"ah":["a_t"]},"aAY":{"ah":["a_s"]},"azF":{"ah":["ZZ"]},"bzj":{"ah":["a2C"]},"Gt":{"ag":[],"v":[]},"azy":{"ag":[],"v":[]},"bzh":{"ah":["Gt"]},"bzi":{"ah":["azy"]},"bzg":{"aB":[]},"auF":{"ag":[],"v":[]},"aHk":{"ah":["auF"]},"af1":{"av":[],"v":[]},"auz":{"ag":[],"v":[]},"auE":{"ag":[],"v":[]},"boc":{"ah":["auz"]},"aHj":{"ah":["auE"]},"P8":{"ag":[],"v":[]},"aHl":{"ah":["P8"],"eG":[]},"bbA":{"jh":[],"fp":[]}}'))
A.a2q(b.typeUniverse,JSON.parse('{"ag8":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.aF
return{e2:w("aU0"),cq:w("me"),Q:w("rt"),r:w("bq<q,q>"),c5:w("aVZ"),dY:w("aW_"),fH:w("MX"),de:w("alj"),dN:w("N4<H>"),gc:w("Ev<H>"),A:w("eS<q?>"),e:w("Ix"),B:w("nt"),P:w("i5"),df:w("ls"),k:w("kZ"),x:w("aA<~>"),U:w("U<aUL>"),V:w("U<ab>"),C:w("U<rt>"),O:w("U<u>"),c:w("U<MX>"),b:w("U<alj>"),ac:w("U<eS<q?>>"),I:w("U<nt>"),u:w("U<i5>"),J:w("U<ls>"),_:w("U<kZ>"),cl:w("U<aA<ai<ac<q,@>>>>"),R:w("U<o0>"),eU:w("U<ai<+(G,G)>>"),ez:w("U<ac<q,aK>>"),gE:w("U<ac<q,q>>"),Y:w("U<ac<q,@>>"),fD:w("U<o2>"),bp:w("U<oK>"),g:w("U<r>"),ar:w("U<auS>"),v:w("U<hY>"),gy:w("U<aam>"),L:w("U<+(q,q)>"),G:w("U<+(G,G)>"),E:w("U<+(G,~())>"),bd:w("U<+(q,H,Q)>"),bF:w("U<+count,id,name(H,q,q)>"),F:w("U<d6>"),s:w("U<q>"),cF:w("U<at>"),aS:w("U<jL>"),dT:w("U<bbn>"),p:w("U<v>"),Z:w("U<fp>"),D:w("U<lC>"),h:w("U<aAG>"),cC:w("U<biF>"),fp:w("U<KU>"),M:w("U<L0>"),gZ:w("U<aJs>"),gA:w("U<agd>"),e4:w("U<agk>"),dE:w("U<aLu>"),f7:w("U<Q>"),n:w("U<G>"),t:w("U<H>"),dS:w("U<aB?>"),d4:w("U<q?>"),eF:w("cB<ah<ag>>"),d:w("ai<nt>"),do:w("ai<i5>"),cg:w("ai<ls>"),ax:w("ai<kZ>"),fO:w("ai<ac<q,@>>"),cz:w("ai<+(q,q)>"),bC:w("ai<+count,id,name(H,q,q)>"),dy:w("ai<q>"),er:w("ai<at>"),gk:w("ai<lC>"),j:w("ai<@>"),fK:w("bC<q,q>"),d2:w("bC<q,ai<ac<q,@>>>"),a:w("ac<q,@>"),f:w("ac<@,@>"),gv:w("N<q,IA>"),cM:w("N<H,q>"),w:w("kF"),g2:w("tP"),bV:w("aqd"),fL:w("cw"),K:w("aK"),dc:w("hY"),fo:w("Pw<H>"),fz:w("+(q,q)"),ei:w("+scope,text(q,q)"),bn:w("+games,limit(Q,H)"),d9:w("+dx,hidden(G,ai<i5>)"),cs:w("+count,id,name(H,q,q)"),N:w("q"),fT:w("iD<i5>"),ec:w("iD<q>"),gW:w("ra<G>"),X:w("bt<G>"),bW:w("e2"),W:w("bl<q>"),b4:w("bl<H>"),cI:w("kj<q>"),av:w("Y<zC>"),cc:w("Y<q>"),l:w("v"),gF:w("fp"),fA:w("lC"),dO:w("GJ"),bw:w("aeF<q?>"),cy:w("L2"),q:w("pP"),y:w("Q"),i:w("G"),z:w("@"),S:w("H"),eK:w("ai<kZ>?"),m:w("arC?"),cT:w("r?"),h5:w("+(q,q)?"),eo:w("+code,qrPayload,usesRemaining(q,q,H)?"),he:w("+qrPayload,token,usesRemaining(q,q,H)?"),gG:w("+members,trees,viewOnly(H,H,Q)?"),az:w("qm?"),T:w("q?"),aD:w("e2?"),o:w("lC?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b6n=new A.be(B.fQ,B.bJ,B.fQ,B.bJ)
D.af5=new A.be(B.fQ,B.ir,B.fQ,B.ir)
D.b6C=new A.be(B.jy,B.bJ,B.bJ,B.bJ)
D.b6G=new A.ax(B.cX,1.4,B.r,-1)
D.b6Q=new A.ax(B.aa,1,B.r,-1)
D.afB=new A.aY(140,1/0,0,1/0)
D.b8d=new A.aY(0,1/0,64,1/0)
D.b8h=new A.aY(0,84,0,1/0)
D.afI=new A.aY(130,1/0,0,1/0)
D.aE9=w([B.mb,B.rX,B.c],x.O)
D.caU=new A.a7(B.ay,B.aC,B.x,D.aE9,null,null)
D.b92=new A.n(null,null,null,null,null,D.caU,B.n)
D.dj9=w([B.aV,B.bQ],x.O)
D.cd3=new A.a7(B.aY,B.b2,B.x,D.dj9,null,null)
D.b9n=new A.n(null,null,null,null,null,D.cd3,B.n)
D.Z1=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fC=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dnb=w([B.dA,D.Z1,D.fC],x.O)
D.ca4=new A.a7(B.aY,B.b2,B.x,D.dnb,null,null)
D.ba8=new A.n(null,null,null,null,null,D.ca4,B.n)
D.fB_=new A.F(!0,B.bV,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hbA=new A.C("?",null,D.fB_,null,null,null,null,null,null,null,null,null)
D.bdZ=new A.cl(B.A,null,null,D.hbA,null)
D.Wx=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUz=new A.C("\ud83c\udf33",null,D.Wx,null,null,null,null,null,null,null,null,null)
D.ags=new A.cl(B.A,null,null,D.fUz,null)
D.fXe=new A.C("\ud83c\udfc6",null,B.Lb,null,null,null,null,null,null,null,null,null)
D.be9=new A.cl(B.A,null,null,D.fXe,null)
D.bg_=new A.fm(null,null,null,null,null,B.kx,null,null,null,null)
D.agt=new A.cl(B.A,null,null,D.bg_,null)
D.kR=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fBy=new A.F(!0,D.kR,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWe=new A.C("No books on the shelf yet.",null,D.fBy,null,null,null,null,null,null,null,null,null)
D.ez_=new A.D(B.nK,D.fWe,null)
D.beq=new A.cl(B.A,null,null,D.ez_,null)
D.fIH=new A.F(!0,D.fC,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hcv=new A.C("\ud83d\ude8c  On the road\u2026",null,D.fIH,null,null,null,null,null,null,null,null,null)
D.ezz=new A.D(B.cq,D.hcv,null)
D.beT=new A.cl(B.A,null,null,D.ezz,null)
D.aYo=new A.C("\ud83e\uddfa",null,D.Wx,null,null,null,null,null,null,null,null,null)
D.bf7=new A.cl(B.A,null,null,D.aYo,null)
D.fZH=new A.C("\ud83c\udfad",null,D.Wx,null,null,null,null,null,null,null,null,null)
D.bfi=new A.cl(B.A,null,null,D.fZH,null)
D.bfl=new A.cl(B.A,null,null,R.YO,null)
D.agN=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.agU=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bhC=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bhH=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bhT=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bhV=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bhX=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bi4=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lG=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bi8=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bid=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bif=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.big=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lH=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.biU=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.BV=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bj2=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bjm=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bjp=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bjv=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bjD=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.ahz=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bjK=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Zf=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.ahC=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bjV=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Zh=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bkf=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.ahO=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bkE=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bkU=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.blj=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.blu=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.Gg=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.blT=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.blW=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bm_=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.aig=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bmh=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bmn=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bmu=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.aik=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bmD=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bn6=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bng=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bnj=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bnp=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.aiA=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bo3=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.aiZ=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bp2=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.aja=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bps=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.Gu=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bpz=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bpJ=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bpL=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.aje=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bq2=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bq4=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bq7=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ajm=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.a_2=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bqw=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bqT=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bqY=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.ajy=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.br4=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.a_8=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.brr=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.brs=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.GD=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bsf=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bsS=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bsY=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bt1=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qr=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.btc=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.btg=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.btm=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bto=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.akk=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.ako=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.GJ=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a_t=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.akx=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.buC=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.buU=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bvm=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bvv=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.akX=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a_F=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bvG=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bvX=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a_L=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bwd=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bwu=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a_P=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bwz=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.ale=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.alg=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bwS=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.aln=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bxk=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bxo=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bxv=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bxE=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bxN=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.byo=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.byU=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fQo=new A.C("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bCp=new A.eS(null,D.fQo,B.fc,null,x.A)
D.fZy=new A.C("None",null,null,null,null,null,null,null,null,null,null,null)
D.bCr=new A.eS(null,D.fZy,B.fc,null,x.A)
D.bCY=new A.bf(38e5)
D.bDH=new A.iy(0,10,0,10)
D.bDQ=new A.P(0,1,0,0)
D.bE0=new A.iy(0,4,0,4)
D.bE3=new A.P(0,4,5,0)
D.bEj=new A.P(10,10,14,10)
D.bEu=new A.iy(10,4,10,4)
D.bED=new A.iy(10,8,10,8)
D.bEE=new A.P(10,8,8,8)
D.bF9=new A.P(12,6,12,2)
D.bFr=new A.P(14,0,14,6)
D.bFv=new A.P(14,10,6,6)
D.bFw=new A.P(14,12,14,0)
D.bFA=new A.P(14,12,14,8)
D.bFD=new A.P(14,12,8,14)
D.bFH=new A.iy(14,14,14,14)
D.bG_=new A.P(14,6,14,40)
D.bG2=new A.P(14,8,14,30)
D.bGq=new A.P(16,2,16,10)
D.bGz=new A.P(16,6,16,30)
D.bGB=new A.P(16,6,16,8)
D.bGQ=new A.P(18,10,18,4)
D.bGS=new A.P(18,12,18,0)
D.bGZ=new A.P(18,14,12,4)
D.anP=new A.P(18,16,18,8)
D.bHf=new A.P(18,20,18,22)
D.bHl=new A.P(18,30,18,30)
D.bHD=new A.P(20,10,12,20)
D.bHG=new A.P(20,11,20,11)
D.bHS=new A.P(20,18,16,18)
D.bHU=new A.P(20,18,20,6)
D.bIJ=new A.P(24,32,24,28)
D.bIK=new A.P(24,36,24,32)
D.bIN=new A.P(26,26,24,14)
D.bJ1=new A.P(2,4,2,8)
D.bJ5=new A.P(30,0,30,0)
D.bJg=new A.P(38,22,22,22)
D.aoc=new A.P(40,24,24,24)
D.bJi=new A.iy(40,40,40,40)
D.bJk=new A.P(46,30,30,30)
D.bJM=new A.P(56,40,40,40)
D.bJQ=new A.P(1.25,1.25,1.25,1.25)
D.bJR=new A.P(60,0,60,0)
D.bJV=new A.P(6,14,6,16)
D.bJZ=new A.P(6,4,12,0)
D.bK2=new A.P(6,6,10,2)
D.bK9=new A.iy(7,3,7,3)
D.bKG=new A.P(5,1.5,5,1.5)
D.bKR=new A.P(6,2.5,6,2.5)
D.h6K=new A.C("Family Games",null,B.jR,null,null,null,null,null,null,null,null,null)
D.fP0=new A.C("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.Wo,null,null,null,null,null,null,null,null,null)
D.cMm=w([D.h6K,D.fP0],x.p)
D.bzT=new A.fo(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.cMm,null)
D.bLh=new A.bz(1,B.bd,D.bzT,null)
D.hb7=new A.C("Signature",null,B.nf,null,null,null,null,null,null,null,null,null)
D.bLk=new A.bz(1,B.bd,D.hb7,null)
D.h3h=new A.C("MADE BY THE ONE WHO PLANTED THE TREE",null,B.u4,null,null,null,null,null,null,null,null,null)
D.bLS=new A.bz(1,B.bd,D.h3h,null)
D.h8c=new A.C("Tell the AI what to fix",null,B.dl,null,null,null,null,null,null,null,null,null)
D.bM8=new A.bz(1,B.bd,D.h8c,null)
D.fJt=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hac=new A.C("Worksheets",null,D.fJt,null,null,null,null,null,null,null,null,null)
D.fJF=new A.F(!0,B.ahi,null,null,null,null,13,B.cE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h92=new A.C("Track your project spending",null,D.fJF,null,null,null,null,null,null,null,null,null)
D.dag=w([D.hac,B.aw,D.h92],x.p)
D.bzw=new A.fo(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.dag,null)
D.bMe=new A.bz(1,B.bd,D.bzw,null)
D.fEo=new A.F(!0,B.kx,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPA=new A.C("FAMILY LIBRARY",null,D.fEo,null,null,null,null,null,null,null,null,null)
D.bMx=new A.bz(1,B.bd,D.fPA,null)
D.Pf=new C.Ix("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wO=new C.Iy(0,"male")
D.oB=new C.Iy(1,"female")
D.zh=new C.Iy(2,"unknown")
D.uV=new C.amD(0,"owner")
D.Pg=new C.amD(1,"editor")
D.kZ=new C.amD(2,"viewer")
D.aq9=new A.a_(61199,"MaterialIcons",!1)
D.bRS=new A.a_(61504,"MaterialIcons",!1)
D.bRT=new A.a_(61505,"MaterialIcons",!1)
D.bRV=new A.a_(61587,"MaterialIcons",!1)
D.bS1=new A.a_(61890,"MaterialIcons",!1)
D.bSV=new A.a_(63034,"MaterialIcons",!0)
D.bTc=new A.a_(63153,"MaterialIcons",!1)
D.bTK=new A.a_(63429,"MaterialIcons",!1)
D.ase=new A.a_(984520,"MaterialIcons",!1)
D.bSq=new A.a_(62776,"MaterialIcons",!1)
D.bW7=new A.ae(D.bSq,26,B.b3,null,null,null)
D.bQQ=new A.a_(57648,"MaterialIcons",!1)
D.bWr=new A.ae(D.bQQ,14,B.c,null,null,null)
D.bWJ=new A.ae(B.HL,17,null,null,null,null)
D.bWP=new A.ae(B.PL,null,B.bQ,null,null,null)
D.bXe=new A.ae(B.a3o,null,null,null,null,null)
D.bXh=new A.ae(B.jc,18,B.kx,null,null,null)
D.a38=new A.a_(62044,"MaterialIcons",!1)
D.bXn=new A.ae(D.a38,null,B.aV,null,null,null)
D.bXu=new A.ae(B.zu,18,B.c,null,null,null)
D.bYb=new A.ae(B.e9,16,null,null,null,null)
D.bYi=new A.ae(D.a38,32,B.aV,null,null,null)
D.bYB=new A.ae(B.aqa,18,B.cX,null,null,null)
D.bZH=new A.ae(B.HW,22,B.aA,null,null,null)
D.bZU=new A.ae(B.e9,22,B.b3,null,null,null)
D.c_6=new A.ae(I.a3d,22,B.c,null,null,null)
D.c_d=new A.ae(B.v4,52,B.c,null,null,null)
D.c_n=new A.ae(B.HW,30,B.aA,null,null,null)
D.c_H=new A.ae(B.a3s,null,B.c,null,null,null)
D.asY=new A.ae(B.vg,22,B.c,null,null,null)
D.c_Q=new A.ae(B.e9,17,null,null,null,null)
D.c0d=new A.ae(B.x0,26,B.cX,null,null,null)
D.c1_=new A.ae(B.a3E,16,null,null,null,null)
D.c1M=new A.ae(B.v4,24,B.c,null,null,null)
D.c1R=new A.ae(B.PJ,20,B.tD,null,null,null)
D.c1W=new A.ae(B.HJ,null,B.bQ,null,null,null)
D.c24=new A.ae(B.jc,18,B.c,null,null,null)
D.c2L=new A.ae(B.cB,22,B.aa,null,null,null)
D.c3E=new A.ae(B.ej,16,B.aa,null,null,null)
D.c3Q=new A.ae(D.a38,20,B.aV,null,null,null)
D.ato=new A.ae(B.hc,20,null,null,null,null)
D.c4m=new A.ae(B.cB,18,D.kR,null,null,null)
D.c4E=new A.ae(B.zE,28,B.c,null,null,null)
D.c4Q=new A.ae(B.Pz,null,B.fi,null,null,null)
D.c5a=new A.ae(B.zE,24,B.c,null,null,null)
D.c5C=new A.ae(B.v4,null,B.aV,null,null,null)
D.c5D=new A.ae(B.jt,20,B.cX,null,null,null)
D.c5X=new A.ae(B.HL,16,null,null,null,null)
D.c7v=new A.e8(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.k6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eN,!0,null,null,null,null)
D.au7=new C.a6T(10,null)
D.c81=new C.a6T(12,null)
D.c82=new C.a6T(14,null)
D.drh=w([B.bv,B.aV,B.fq,B.b3],x.O)
D.c9c=new A.a7(B.ay,B.aC,B.x,D.drh,null,null)
D.bs1=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.byv=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d6G=w([D.bs1,D.byv],x.O)
D.c9o=new A.a7(B.aY,B.b2,B.x,D.d6G,null,null)
D.dl9=w([B.fe,B.fW,B.fq],x.O)
D.c9u=new A.a7(B.ay,B.aC,B.x,D.dl9,null,null)
D.ak8=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bih=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d8S=w([D.ak8,D.bih],x.O)
D.ca5=new A.a7(B.aY,B.b2,B.x,D.d8S,null,null)
D.bm8=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aDq=w([D.bm8,D.ak8],x.O)
D.cap=new A.a7(B.ay,B.aC,B.x,D.aDq,null,null)
D.aiR=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.boU=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dke=w([D.aiR,D.boU],x.O)
D.cb4=new A.a7(B.a5,B.a9,B.x,D.dke,null,null)
D.dyw=w([B.bC,B.nw],x.O)
D.cb6=new A.a7(B.aY,B.b2,B.x,D.dyw,null,null)
D.brX=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dzt=w([D.brX,D.kR,D.kR,E.NH],x.O)
D.dC7=w([0,0.07,0.9,1],x.n)
D.cbC=new A.a7(B.a5,B.a9,B.x,D.dzt,D.dC7,null)
D.cbL=new A.a7(B.ay,B.aC,B.x,B.Ts,null,null)
D.d4o=w([B.aD,D.lG],x.O)
D.cbO=new A.a7(B.a5,B.a9,B.x,D.d4o,null,null)
D.dy3=w([B.b3,B.aV,B.bQ],x.O)
D.ccR=new A.a7(B.ay,B.aC,B.x,D.dy3,null,null)
D.chc=w([10,20,30],x.t)
D.cra=w([-1,-0.4,0.3,1],x.n)
D.cyG=w([B.bv,B.b3,B.fe],x.O)
D.cyO=w([B.bi,B.aD,B.kw],x.O)
D.cyQ=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.czy=w([30,140,262,360],x.n)
D.bqd=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cF8=w([D.bqd,B.ajI],x.O)
D.etF=new A.r(1,2)
D.fmk=new A.d6(B.b5,D.etF,3)
D.aAh=w([D.fmk],x.F)
D.cMC=w([B.h8,B.cj,B.fB],x.O)
D.cPo=w([B.bP,B.bz,B.bs],x.O)
D.bNn=new C.uS("classic","Classic leather","Gold-edged brown leather",D.aDq,B.kx,B.kx,"\u2766",B.K,!0,!1,!1,!1)
D.bhm=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bxa=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.dc3=w([D.bhm,D.bxa],x.O)
D.ajL=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bNi=new C.uS("ornate","Ornate gold","Double gold border and flourishes",D.dc3,D.ajL,D.ajL,"\u2726",B.K,!0,!0,!0,!1)
D.blF=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bsM=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d3e=w([D.blF,D.bsM],x.O)
D.bNh=new C.uS("parchment","Parchment","Old paper with dark ink",D.d3e,D.GD,B.j7,"\u2767",B.K,!0,!1,!1,!0)
D.agW=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bvj=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dwc=w([D.agW,D.bvj],x.O)
D.bpG=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.buw=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bNk=new C.uS("minimal","Clean paper","Plain and elegant, like a printed book",D.dwc,D.bpG,D.buw,"",B.K,!0,!0,!1,!0)
D.bNm=new C.uS("midnight","Midnight","Deep blue with silver stars",B.aDK,B.cA,B.cf,"\u2727",B.K,!0,!0,!1,!1)
D.bNg=new C.uS("emerald","Emerald library","Green cloth, title on the left",L.aAH,B.kx,B.fY,"\u25c6",B.b6,!0,!1,!1,!1)
D.bvP=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dub=w([B.eq,D.bvP],x.O)
D.br3=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bsk=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bNl=new C.uS("rose","Rose vintage","Burgundy with rose-gold lettering",D.dub,D.br3,D.bsk,"\u2740",B.K,!0,!1,!0,!1)
D.dz4=w([B.ct,B.mX],x.O)
D.bNj=new C.uS("modern","Modern","Dark, bold, left-aligned",D.dz4,B.aH,B.c,"",B.b6,!1,!0,!1,!1)
D.a5H=w([D.bNn,D.bNi,D.bNh,D.bNk,D.bNm,D.bNg,D.bNl,D.bNj],A.aF("U<uS>"))
D.cSp=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dyS=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bNy=new C.ls('What does "Ubuntu" mean?',D.dyS,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d54=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bNB=new C.ls("In Swahili, what do we call a grandmother?",D.d54,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d4X=w(["Babu","Mama","Baba","Dada"],x.s)
D.bNw=new C.ls("In Swahili, what do we call a grandfather?",D.d4X,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d6h=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bNA=new C.ls("What is a sister called in Swahili?",D.d6h,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.dbv=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bNx=new C.ls("What is a brother called in Swahili?",D.dbv,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d4W=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bNI=new C.ls("Which word means father in Swahili?",D.d4W,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dA3=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bNH=new C.ls('"Umoja ni nguvu" means...',D.dA3,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dwV=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bNJ=new C.ls('"Haba na haba hujaza kibaba" teaches us...',D.dwV,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d90=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bNG=new C.ls('The African saying "It takes a village to raise a child" means...',D.d90,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dAm=w(["The elders","The market","The river","The drum"],x.s)
D.bNC=new C.ls("Who is the traditional keeper of the family stories?",D.dAm,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cWG=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bNz=new C.ls("Why do families sit round the fire at night?",D.cWG,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dz6=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bNE=new C.ls('What does "Harambee" mean?',D.dz6,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.deo=w(["An elder","A baby","A market","A cow"],x.s)
D.bND=new C.ls('"Mzee" is a respectful word for...',D.deo,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.du1=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bNF=new C.ls('What does "Shikamoo" show?',D.du1,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aAC=w([D.bNy,D.bNB,D.bNw,D.bNA,D.bNx,D.bNI,D.bNH,D.bNJ,D.bNG,D.bNC,D.bNz,D.bNE,D.bND,D.bNF],x.J)
D.d04=w([90,360],x.n)
D.d2L=w([B.bQ,B.bp],x.O)
D.brK=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d3q=w([D.agW,D.brK],x.O)
D.d47=w([-1,-0.3,0.4,1],x.n)
D.d51=w([0,0.45,0.72,0.92,1],x.n)
D.blB=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d5j=w([D.blB,B.bA],x.O)
D.bjh=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.alx=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d5V=w([B.dA,D.bjh,D.alx],x.O)
D.d6X=w([B.ba,B.jm,B.pi],x.O)
D.bma=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bun=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.biY=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d71=w([D.bma,D.bun,D.biY],x.O)
D.d7m=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d7w=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hG6=new C.aej(78,424,48,44,56)
D.hG4=new C.aej(214,396,34,34,42)
D.hG5=new C.aej(442,452,56,50,64)
D.aBB=w([D.hG6,D.hG4,D.hG5],A.aF("U<aej>"))
D.d84=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bia=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bo2=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dC3=w([D.aiR,D.bia,D.bo2],x.O)
D.bNo=new C.uT("leather","Leather",D.dC3,"vintage")
D.dfq=w([B.dh,B.Gs,B.Zx],x.O)
D.bNv=new C.uT("midnight","Midnight",D.dfq,"starry")
D.d6Y=w([B.ep,B.ec,B.ll],x.O)
D.bNu=new C.uT("forest","Forest",D.d6Y,"story")
D.dE9=w([B.er,B.eq,B.kz],x.O)
D.bNr=new C.uT("burgundy","Burgundy",D.dE9,"royal")
D.cOX=w([B.aD,B.mS,B.nn],x.O)
D.bNs=new C.uT("royal","Royal",D.cOX,"royal")
D.d9x=w([B.bz,B.ct,B.mX],x.O)
D.bNp=new C.uT("charcoal","Charcoal",D.d9x,"geo")
D.dCc=w([B.c9,B.dS,B.yx],x.O)
D.bNt=new C.uT("sunset","Sunset",D.dCc,"sunset")
D.dCZ=w([B.jm,B.yA,B.ZB],x.O)
D.bNq=new C.uT("ocean","Ocean",D.dCZ,"band")
D.A7=w([D.bNo,D.bNv,D.bNu,D.bNr,D.bNs,D.bNp,D.bNt,D.bNq],A.aF("U<uT>"))
D.da4=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.daL=w([B.an,B.aL,B.a_],x.O)
D.dc8=w([B.eq,B.ec,B.dh,B.iM,B.yC,B.cX,B.k1,B.cQ,B.d6],x.O)
D.dc9=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fml=new A.d6(B.dC,B.dM,8)
D.dck=w([D.fml],x.F)
D.ddv=w([B.c4,B.dS,B.jX],x.O)
D.bk8=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bol=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bsH=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.ddN=w([D.bk8,B.akh,D.bol,D.bsH,D.alx],x.O)
D.de3=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.dee=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bhy=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bnG=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.deG=w([D.bhy,D.aik,D.bnG],x.O)
D.dfl=w([B.c4,B.hL],x.O)
D.dfr=w([B.np,B.id,B.ah7,B.cV],x.O)
D.dh3=w([B.cV,B.np,B.id,D.lH,B.cV],x.O)
D.dhH=w([B.aQ,B.yy,B.yo],x.O)
D.aCD=w(["True","False"],x.s)
D.eR_=new A.y(-0.65,0.6)
D.f2K=new A.y(-0.2,0.95)
D.f3R=new A.y(0.25,0.95)
D.eUu=new A.y(0.7,0.6)
D.f4q=new A.y(1,0.1)
D.dit=w([A0.Vg,D.eR_,D.f2K,D.f3R,D.eUu,D.f4q],x.G)
D.bqx=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bx2=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bl8=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.diz=w([D.bqx,D.bx2,D.bl8],x.O)
D.diE=w([B.bL,B.bY,B.dy,B.aQ],x.O)
D.dja=w([B.hO,B.c9,B.uu],x.O)
D.djy=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.djJ=w([B.fe,B.cX],x.O)
D.bs5=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dk9=w([D.bs5,D.agU],x.O)
D.dkl=w([B.cP,B.fL,B.fZ],x.O)
D.dkx=w([B.aH,B.bp,B.dh],x.O)
D.dl6=w([B.ew,B.dq,B.ec],x.O)
D.dlq=w([B.dX,B.dh,B.Gs],x.O)
D.dlu=w([B.bt,B.mP,B.d6],x.O)
D.dlL=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bri=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bpo=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dm5=w([D.bri,D.aig,D.bpo],x.O)
D.dmV=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dnZ=w([1,0,7,6,3,2],x.t)
D.a6F=w(["leather","linen","plain","stars","rays"],x.s)
D.do9=w([0.5,2,3.6],x.n)
D.doI=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bVq=new A.a_(983781,"MaterialIcons",!1)
D.aD6=w([B.PL,B.hF,B.kD,B.i1,B.asm,B.I7,B.qR,D.bVq,B.as_,B.Dp,B.qU,B.mk],A.aF("U<a_>"))
D.a6J=w(["double","single","corners","none"],x.s)
D.bNd=new C.zC("Little Seed","\ud83c\udf31",0)
D.bNf=new C.zC("Young Listener","\ud83d\udc42",40)
D.bNe=new C.zC("Storyteller","\ud83e\ude98",120)
D.bNc=new C.zC("Village Pride","\ud83c\udfe1",300)
D.bNa=new C.zC("Keeper of Roots","\ud83c\udf33",700)
D.bNb=new C.zC("Elder of the Fire","\ud83d\udd25",1500)
D.aD8=w([D.bNd,D.bNf,D.bNe,D.bNc,D.bNa,D.bNb],A.aF("U<zC>"))
D.dpS=w([B.cW,B.bh,B.cQ],x.O)
D.dq7=w([],x.C)
D.E_=w([],x.u)
D.aNi=new A.r(225,528)
D.eSG=new A.y(D.aNi,1)
D.euq=new A.r(350,548)
D.eYX=new A.y(D.euq,0.95)
D.aNc=new A.r(158,656)
D.eYQ=new A.y(D.aNc,1.12)
D.evd=new A.r(92,544)
D.eOe=new A.y(D.evd,0.93)
D.eut=new A.r(398,614)
D.eUR=new A.y(D.eut,1.04)
D.euh=new A.r(318,662)
D.eJz=new A.y(D.euh,1.1)
D.a6R=w([D.eSG,D.eYX,D.eYQ,D.eOe,D.eUR,D.eJz],A.aF("U<+(r,G)>"))
D.ds8=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dsD=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dtI=w([B.cV,B.np,B.id,D.lH,B.cV,B.id],x.O)
D.dv7=w([B.at,B.fL,B.iM],x.O)
D.dvN=w([-70,58],x.n)
D.dvP=w([-70,-30,20],x.n)
D.dwS=w([B.bt,B.mP,B.a_G],x.O)
D.dx9=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dTb=new C.lR("construction","Construction","Jobsite & builds",B.qT)
D.dTi=new C.lR("house","Home Build","Houses & rooms",B.v6)
D.dT8=new C.lR("grocery","Grocery","Store & pantry",B.a4c)
D.dT7=new C.lR("calculator","Calculations","Math & estimates",B.PR)
D.dTg=new C.lR("lumber","Materials","Lumber & supplies",B.I4)
D.dT4=new C.lR("kitchen","Kitchen","Remodel & meals",N.Qa)
D.bVo=new A.a_(983756,"MaterialIcons",!1)
D.dT9=new C.lR("landscape","Landscaping","Yard & garden",D.bVo)
D.dT3=new C.lR("plumbing","Plumbing","Pipes & water",B.pF)
D.dTj=new C.lR("electrical","Electrical","Wiring & power",B.hq)
D.dT1=new C.lR("store","Retail Shop","Daily business",B.kg)
D.dT2=new C.lR("paint_remodel","Paint & Remodel","Colors & walls",N.Q6)
D.bUL=new A.a_(983311,"MaterialIcons",!1)
D.dTf=new C.lR("roofing","Roofing","Roofs & exteriors",D.bUL)
D.bVz=new A.a_(983986,"MaterialIcons",!1)
D.dT0=new C.lR("warehouse","Warehouse","Storage & stock",D.bVz)
D.dTd=new C.lR("vehicles","Vehicles","Fleet & transport",B.Dl)
D.bSs=new A.a_(62785,"MaterialIcons",!1)
D.dT6=new C.lR("farm","Farm","Crops & livestock",D.bSs)
D.dT5=new C.lR("restaurant","Restaurant","Food & catering",B.ve)
D.dTc=new C.lR("tools","Tools","Workshop gear",B.Dh)
D.dTh=new C.lR("wallet","Cash & Wallet","Quick spending",B.jt)
D.dTe=new C.lR("concrete","Concrete","Foundation work",B.ar6)
D.dTa=new C.lR("blueprint","Blueprint","Plans & design",B.aqE)
D.a7f=w([D.dTb,D.dTi,D.dT8,D.dT7,D.dTg,D.dT4,D.dT9,D.dT3,D.dTj,D.dT1,D.dT2,D.dTf,D.dT0,D.dTd,D.dT6,D.dT5,D.dTc,D.dTh,D.dTe,D.dTa],A.aF("U<lR>"))
D.dxI=w([B.bu,B.bh],x.O)
D.dyx=w([B.ix,B.oj,B.dW],x.O)
D.aj4=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.ak3=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bpK=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bh1=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aEh=w([D.aj4,D.ak3,D.bpK,D.bh1],x.O)
D.dzK=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a7p=w(["top","middle","bottom"],x.s)
D.dBe=w([B.cs,B.bp,B.dh],x.O)
D.aEB=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.baC=new A.ab(0,B.G,B.b5,B.J,14)
D.aEF=w([D.baC],x.V)
D.boA=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dBX=w([D.ahz,D.a_F,D.boA],x.O)
D.dBY=w([B.be,B.dq,B.ec],x.O)
D.eu0=new A.r(24,-8)
D.euJ=new A.r(48,0)
D.etX=new A.r(24,6)
D.dDH=w([B.J,D.eu0,D.euJ,D.etX],x.g)
D.dE5=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.eqt={top:0,middle:1,bottom:2}
D.dHk=new A.bq(D.eqt,["Top","Middle","Bottom"],x.r)
D.eq2={double:0,single:1,corners:2,none:3}
D.dHq=new A.bq(D.eq2,["Double line","One line","Corners","None"],x.r)
D.erh={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dJ5=new A.bq(D.erh,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dJh=new A.bq(B.i3,[],A.aF("bq<H,+(q,q)>"))
D.eqk={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Ef=new A.bq(D.eqk,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.aF("bq<q,H>"))
D.dNA=new A.O0(32,null)
D.dNB=new A.O0(40,null)
D.dNC=new A.O0(46,null)
D.aML=new C.auE(null)
D.esS=new A.r(0,40)
D.esT=new A.r(0,412)
D.esW=new A.r(0,900)
D.et4=new A.r(0,-34)
D.et5=new A.r(0,-46)
D.et7=new A.r(0,-74)
D.eta=new A.r(100,300)
D.etb=new A.r(10,14)
D.ete=new A.r(10,-10)
D.etj=new A.r(10,-46)
D.etk=new A.r(10,-58)
D.etl=new A.r(116,442)
D.etn=new A.r(11,-1)
D.eto=new A.r(11,-10)
D.etp=new A.r(11,-21)
D.aN7=new A.r(11,-60)
D.etw=new A.r(14,-2)
D.etx=new A.r(150,520)
D.a9A=new A.r(150,592)
D.etA=new A.r(15,-15)
D.etB=new A.r(16,-1)
D.etE=new A.r(190,444)
D.etH=new A.r(1,5)
D.etP=new A.r(21,-78)
D.etQ=new A.r(222,615)
D.K1=new A.r(225,300)
D.a9C=new A.r(225,574)
D.eu_=new A.r(24,-52)
D.eu1=new A.r(250,210)
D.euc=new A.r(2,-56)
D.aNm=new A.r(300,0)
D.eud=new A.r(300,440)
D.eug=new A.r(318,476)
D.euj=new A.r(324,144)
D.a9F=new A.r(332,150)
D.eul=new A.r(335,585)
D.eum=new A.r(338,140)
D.eun=new A.r(340,158)
D.eup=new A.r(34,-60)
D.EH=new A.r(36,-24)
D.eur=new A.r(372,470)
D.eus=new A.r(390,455)
D.euB=new A.r(42,468)
D.euC=new A.r(431,510)
D.euD=new A.r(431,520)
D.euE=new A.r(45,-92)
D.euF=new A.r(46,20)
D.euG=new A.r(46,-92)
D.euH=new A.r(46,-94)
D.euI=new A.r(47,-4)
D.euK=new A.r(48,-4)
D.euS=new A.r(4,-26)
D.ev_=new A.r(60,455)
D.ev8=new A.r(8,14)
D.evc=new A.r(8,-76)
D.eve=new A.r(95,575)
D.evf=new A.r(98,-24)
D.evh=new A.r(9,-2)
D.evi=new A.r(9,-58)
D.aNv=new A.r(9,-79)
D.evj=new A.r(9,-9)
D.evW=new A.r(16.5,8)
D.evY=new A.r(3.2,0)
D.evZ=new A.r(-16.5,8)
D.ew5=new A.r(16.5,2)
D.ew8=new A.r(-3.2,0)
D.ewg=new A.r(9.5,6)
D.ewj=new A.r(-10,14)
D.ewk=new A.r(-10,-12)
D.ewl=new A.r(-10,-58)
D.ewn=new A.r(-11,-10)
D.ewp=new A.r(-11,-60)
D.ewq=new A.r(-12,-14)
D.ewr=new A.r(-12,-16)
D.eww=new A.r(-14,-2)
D.ewz=new A.r(-15,-15)
D.ewA=new A.r(-15,-3)
D.ewC=new A.r(-16,-1)
D.ewS=new A.r(-24,-52)
D.ex0=new A.r(-2,-34)
D.ex1=new A.r(-2,-38)
D.ex3=new A.r(-30,-100)
D.a9H=new A.r(-36,-24)
D.exe=new A.r(-4,-26)
D.exg=new A.r(-4,-6)
D.exp=new A.r(-8,-3)
D.exq=new A.r(-8,-48)
D.ext=new A.r(-9,-2)
D.exv=new A.r(-9,-58)
D.exw=new A.r(-9,-79)
D.exx=new A.r(-9,-9)
D.exz=new A.r(-9.5,6)
D.exM=new A.r(-16.5,2)
D.fWV=new A.C("Write a new book",null,B.hi,null,B.K,null,null,null,null,null,null,null)
D.eyl=new A.D(B.kX,D.fWV,null)
D.haG=new A.C("Tap to go on",null,B.vS,null,null,null,null,null,null,null,null,null)
D.eyH=new A.D(B.ln,D.haG,null)
D.asw=new A.ae(B.i0,18,B.c,null,null,null)
D.fPV=new A.C("Add",null,B.kJ,null,null,null,null,null,null,null,null,null)
D.diS=w([D.asw,B.rg,D.fPV],x.p)
D.fjp=new A.c8(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.diS,null)
D.eyK=new A.D(B.nH,D.fjp,null)
D.eyL=new A.D(B.amF,R.YO,null)
D.fJo=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fT7=new A.C("New Project",null,D.fJo,null,null,null,null,null,null,null,null,null)
D.dnj=w([D.asw,B.ae,D.fT7],x.p)
D.fjs=new A.c8(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.dnj,null)
D.eyZ=new A.D(B.hR,D.fjs,null)
D.fVE=new A.C("Choose your header",null,B.u1,null,null,null,null,null,null,null,null,null)
D.ezj=new A.D(B.i_,D.fVE,null)
D.bgf=new A.fm(2.2,null,null,null,null,B.cX,null,null,null,null)
D.fpe=new A.a5(22,22,D.bgf,null)
D.bel=new A.cl(B.A,null,null,D.fpe,null)
D.ezo=new A.D(B.a11,D.bel,null)
D.bFS=new A.P(14,2,14,6)
D.h8M=new A.C("The top of your book. Tap a design to see it.",null,B.u2,null,null,null,null,null,null,null,null,null)
D.ezp=new A.D(D.bFS,D.h8M,null)
D.fUO=new A.C("\ud83c\udfc6 A new record!",null,B.h6,null,null,null,null,null,null,null,null,null)
D.ezr=new A.D(B.ln,D.fUO,null)
D.eB_=new A.jf(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eB2=new A.jf(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aO7=new A.jf(1,0.9607843137254902,0.48627450980392156,0)
D.K9=new A.jf(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.AI=new A.jf(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eB8=new A.jf(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hI8=new C.bkm(null)
D.bAF=new A.mA(D.hI8,null,B.az,null,null)
D.aRL=new A.cK(0,0,0,0,null,null,D.bAF,null)
D.fPX=new A.C("\ud83c\udfc5",null,B.abZ,null,null,null,null,null,null,null,null,null)
D.eFy=new A.cK(null,0,-34,null,null,null,D.fPX,null)
D.eNT=new A.y("E","Sit by the fire again")
D.eTu=new A.y("C","Good Learner")
D.eWV=new A.y("D","Still Growing")
D.f0w=new A.y(-42,42)
D.f1T=new A.y("B","Faithful Listener")
D.f3T=new A.y("A","Keeper of the Family")
D.f71=new A.b4(-17,0.7,0)
D.f7A=new A.b4(-8,0.95,1.3)
D.f8E=new A.b4(18,0.65,5.2)
D.f8G=new A.b4(0,1.15,2.6)
D.f90=new A.b4(9,0.9,3.9)
D.faW=new A.b7([0,0,1,1])
D.aTh=new A.a3(0,0,520,160)
D.fgs=new A.a3(10,612,440,618)
D.fgt=new A.a3(10,612,440,628)
D.fgw=new A.a3(14,-64,34,-12)
D.fgz=new A.a3(300,336,350,348)
D.aaB=new A.a3(30,96,420,346)
D.fgA=new A.a3(30,-9,46,1)
D.fgB=new A.a3(4,2,11,14)
D.fgD=new A.a3(-8,-12.5,8,-7)
D.fgE=new A.a3(-16.5,-21,16.5,1)
D.fgF=new A.a3(60,342,88,348)
D.Vh=new A.a3(66,-66,94,-36)
D.fgG=new A.a3(6,8,10,14)
D.fgJ=new A.a3(95,343,115,348)
D.fgK=new A.a3(-6.5,-74,6.5,-58)
D.fgQ=new A.a3(-100,-74,100,-12)
D.fgR=new A.a3(-10,8,-6,14)
D.fgS=new A.a3(-11,2,-4,14)
D.fgT=new A.a3(-11,-70,11,-56)
D.fh_=new A.a3(-13,-24,13,-4)
D.fh6=new A.a3(-15,-21,15,0)
D.fh9=new A.a3(-16,-21,16,1)
D.fha=new A.a3(-16,-21,16,2)
D.fhd=new A.a3(-16,-26,16,-6)
D.fhl=new A.a3(-230,-26,230,26)
D.fhK=new A.a3(-38,-26,12,-6)
D.fhO=new A.a3(-3,-70,3,-63)
D.fhP=new A.a3(-44,-22,44,0)
D.fhR=new A.a3(-46,-9,-30,1)
D.aTl=new A.a3(-80,-190,80,20)
D.fhY=new A.a3(-8,-26,40,-6)
D.fhZ=new A.a3(-98,-80,92,-75)
D.fi_=new A.a3(-9,-15,9,-9)
D.h8j=new A.C("Let the AI write it from your tree",null,B.iI,null,B.K,null,null,null,null,null,null,null)
D.bOi=new A.df(1,B.cl,D.h8j,null)
D.dfk=w([B.a4G,B.ae,D.bOi],x.p)
D.fj3=new A.c8(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.dfk,null)
D.fPB=new A.C("Save member",null,B.ce,null,null,null,null,null,null,null,null,null)
D.dvx=w([D.ato,B.ae,D.fPB],x.p)
D.fjd=new A.c8(B.aM,B.b9,B.i,B.l,null,B.p,null,0,D.dvx,null)
D.c__=new A.ae(B.ij,14,B.b3,null,null,null)
D.fCV=new A.F(!0,B.b3,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTy=new A.C("Cashier",null,D.fCV,null,null,null,null,null,null,null,null,null)
D.dnQ=w([D.c__,B.bn,D.fTy],x.p)
D.fjh=new A.c8(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.dnQ,null)
D.fPC=new A.C("Transfer & settings",null,B.dl,null,null,null,null,null,null,null,null,null)
D.bLZ=new A.bz(1,B.bd,D.fPC,null)
D.d6q=w([D.asY,B.as,D.bLZ],x.p)
D.fji=new A.c8(B.aM,B.e,B.i,B.l,null,B.p,null,0,D.d6q,null)
D.fnT=new A.au(16,40)
D.fnY=new A.au(22,64)
D.fo4=new A.au(280,88)
D.foU=new A.a5(30,null,null,null)
D.fOH=new A.C("The teacher is writing\u2026",null,B.B4,null,null,null,null,null,null,null,null,null)
D.bfr=new A.cl(B.A,null,null,D.fOH,null)
D.hC2=new A.bl("w",x.W)
D.fpi=new A.a5(null,56,D.bfr,D.hC2)
D.fq5=new A.hM(5,8,8,1,null)
D.fqd=new A.hM(2,12,12,1.05,null)
D.fTd=new A.C("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fqY=new A.b0(D.fTd,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fTt=new A.C("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aVF=new A.b0(D.fTt,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h0W=new A.C("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.frr=new A.b0(D.h0W,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hbI=new A.C("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.frw=new A.b0(D.hbI,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fVC=new A.C("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.frD=new A.b0(D.fVC,null,null,null,null,null,null,null,null,null,null,null,null,B.h1,!1,null,null,null,B.t,null)
D.h8Z=new A.C("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aVK=new A.b0(D.h8Z,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fVA=new A.C("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fs2=new A.b0(D.fVA,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fQd=new A.C("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fs4=new A.b0(D.fQd,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fZm=new A.C("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fsa=new A.b0(D.fZm,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hcs=new A.C("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fsR=new A.b0(D.hcs,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h7d=new A.C("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.ftg=new A.b0(D.h7d,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hbM=new A.C("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.ftj=new A.b0(D.hbM,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h2z=new A.C("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ftl=new A.b0(D.h2z,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fXx=new A.C("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.ftm=new A.b0(D.fXx,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fXy=new A.C("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fun=new A.b0(D.fXy,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fTf=new A.C("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fuF=new A.b0(D.fTf,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fVf=new A.C("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fuZ=new A.b0(D.fVf,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h22=new A.C("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fvf=new A.b0(D.h22,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fYm=new A.C("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fvg=new A.b0(D.fYm,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fI4=new A.F(!0,B.bE,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwP=new A.eu("\u2665",null,null,B.cN,null,null,null,null,null,null,D.fI4)
D.fFe=new A.F(!0,B.aS,null,null,null,null,28,B.O,B.cK,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx4=new A.eu("Today: how well do you know the family?",null,null,B.cN,null,null,null,null,null,null,D.fFe)
D.fxl=new A.F(!0,B.qf,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyx=new A.F(!0,D.kR,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyU=new A.F(!0,D.kR,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyY=new A.F(!0,B.cV,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz6=new A.F(!0,D.fC,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzh=new A.F(!0,D.fC,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzB=new A.t6(!0,B.tP,null,null,null,null,B.dE,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzR=new A.F(!0,B.cV,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzU=new A.F(!0,D.kR,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzV=new A.F(!0,B.cV,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA_=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA2=new A.F(!0,B.cV,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAy=new A.F(!0,B.b3,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAz=new A.F(!0,B.aa,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAB=new A.F(!0,B.aS,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB1=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWZ=new A.F(!0,B.aR,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aX_=new A.F(!0,D.lG,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBr=new A.F(!0,B.cV,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ac3=new A.t6(!0,B.UO,null,null,null,null,B.dE,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Wb=new A.F(!0,B.cV,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBB=new A.F(!0,B.a_,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBG=new A.F(!0,D.fC,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC4=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDf=new A.F(!0,D.fC,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aX9=new A.F(!0,D.fC,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDz=new A.F(!0,B.aa,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDL=new A.F(!0,D.fC,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDN=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDT=new A.F(!0,B.j7,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXd=new A.F(!0,D.fC,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEP=new A.F(!0,D.fC,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF7=new A.F(!0,D.fC,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF9=new A.F(!0,B.a_,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFb=new A.F(!0,B.cV,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFz=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,Q.J1,null,null,null)
D.aXr=new A.F(!0,D.fC,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFX=new A.F(!0,B.a_,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGi=new A.F(!0,B.fi,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGG=new A.F(!0,B.bQ,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGL=new A.F(!0,B.bC,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGX=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH_=new A.F(!0,D.fC,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH7=new A.F(!0,D.GD,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHj=new A.F(!0,B.b3,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHI=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHP=new A.F(!0,B.aa,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.DS,null,null,null)
D.fIf=new A.F(!0,B.cV,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIn=new A.F(!0,B.cX,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIA=new A.F(!0,D.lH,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXO=new A.F(!0,D.fC,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Lj=new A.F(!0,B.cV,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXQ=new A.F(!0,B.cV,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.DS,null,null,null)
D.fIV=new A.F(!0,B.bQ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIZ=new A.F(!0,B.np,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJm=new A.F(!0,B.b3,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJE=new A.F(!0,D.fC,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK1=new A.F(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKq=new A.F(!0,D.fC,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKW=new A.F(!0,D.fC,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL0=new A.F(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLa=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acz=new A.F(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acC=new A.F(!0,D.lG,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMV=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNe=new A.F(!0,B.aS,null,null,null,null,27,B.O,B.cK,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNl=new A.F(!0,B.j7,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNt=new A.F(!0,B.j7,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNX=new A.C("Time:",null,B.hu,null,null,null,null,null,null,null,null,null)
D.fOi=new A.C("\ud83c\udfae",null,B.acp,null,null,null,null,null,null,null,null,null)
D.fOj=new A.C("Themes",null,B.pX,null,null,null,null,null,null,null,null,null)
D.fOP=new A.C("\ud83c\udfb2",null,B.xL,null,null,null,null,null,null,null,null,null)
D.fOT=new A.C("Delete this game?",null,B.iI,null,null,null,null,null,null,null,null,null)
D.fP_=new A.C("Add Item",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fDt=new A.F(!0,B.a_,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPq=new A.C("Debt receipt",null,D.fDt,null,B.K,null,null,null,null,null,null,null)
D.aY3=new A.F(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPJ=new A.C("Person who owes",null,D.aY3,null,null,null,null,null,null,null,null,null)
D.fQH=new A.C("Notes",null,B.acd,null,null,null,null,null,null,null,null,null)
D.fR7=new A.C("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fCm=new A.F(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR9=new A.C("Share",null,D.fCm,null,null,null,null,null,null,null,null,null)
D.fSa=new A.C("Move your family trees",null,E.acw,null,null,null,null,null,null,null,null,null)
D.fSP=new A.C("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fTs=new A.C("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fTQ=new A.C("SAVE",null,D.Lj,null,null,null,null,null,null,null,null,null)
D.fUs=new A.C("The round button is the right answer.",null,B.B8,null,null,null,null,null,null,null,null,null)
D.fUN=new A.C("Remove this book?",null,B.h6,null,null,null,null,null,null,null,null,null)
D.fJj=new A.F(!0,B.cV,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.DS,null,null,null)
D.fVk=new A.C("Fireside Stories",null,D.fJj,null,null,null,null,null,null,null,null,null)
D.aYx=new A.C("Download",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fW0=new A.C("What should the AI do?",null,B.dl,null,null,null,null,null,null,null,null,null)
D.fC_=new A.F(!0,D.lG,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWf=new A.C("REPORT CARD",null,D.fC_,null,null,null,null,null,null,null,null,null)
D.fX1=new A.C("Calabash Catch",null,B.Wy,null,null,null,null,null,null,null,null,null)
D.fXt=new A.C("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fXU=new A.C("\ud83c\udfe1",null,B.Fc,null,null,null,null,null,null,null,null,null)
D.fYB=new A.C("Ribbon bookmark",null,B.jC,null,null,null,null,null,null,null,null,null)
D.fKV=new A.F(!0,B.b3,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZ5=new A.C("NGMY.ORG",null,D.fKV,null,B.K,null,null,null,null,null,null,null)
D.h_o=new A.C("Scan family tree QR",null,B.cG,null,null,null,null,null,null,null,null,null)
D.fH0=new A.F(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0b=new A.C("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fH0,null,B.K,null,null,null,null,null,null,null)
D.h1p=new A.C("Delete",null,B.W5,null,null,null,null,null,null,null,null,null)
D.h1q=new A.C("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.h1y=new A.C("Thumbnail",null,B.pX,null,null,null,null,null,null,null,null,null)
D.h27=new A.C("Save the cover",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h2c=new A.C("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.Bc,null,B.K,null,null,null,null,null,null,null)
D.h2A=new A.C("Your photos",null,B.pX,null,null,null,null,null,null,null,null,null)
D.h2Q=new A.C("Create Project",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h3c=new A.C("\u2b50 stars",null,B.Wj,null,null,null,null,null,null,null,null,null)
D.h3q=new A.C("Design your cover",null,B.u1,null,null,null,null,null,null,null,null,null)
D.h3w=new A.C("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.h3z=new A.C("PICTURE",null,F.vV,null,null,null,null,null,null,null,null,null)
D.h3B=new A.C("\ud83c\udfaf",null,D.Wx,null,null,null,null,null,null,null,null,null)
D.h3Y=new A.C("Paid",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h4_=new A.C("You can undo it right after.",null,B.B8,null,null,null,null,null,null,null,null,null)
D.h4y=new A.C("Print",null,B.vT,null,null,null,null,null,null,null,null,null)
D.h4Y=new A.C("Amount owed",null,D.aY3,null,null,null,null,null,null,null,null,null)
D.h5c=new A.C("Got it",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h5O=new A.C("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.h5R=new A.C("Add to budget",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h6g=new A.C("Debtor signature",null,B.acd,null,null,null,null,null,null,null,null,null)
D.h6q=new A.C("Change icon",null,B.acc,null,null,null,null,null,null,null,null,null)
D.h7e=new A.C("MADE BY THE SYSTEM, FROM YOUR TREE",null,B.u4,null,null,null,null,null,null,null,null,null)
D.h7G=new A.C("Family tree QR",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h7M=new A.C("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.Ww,null,null,null,null,null,null,null,null,null)
D.h89=new A.C("Download",null,B.vT,null,null,null,null,null,null,null,null,null)
D.h8a=new A.C("The person who planted this tree has not made a game yet.",null,B.Ba,null,null,null,null,null,null,null,null,null)
D.h8e=new A.C("Change",null,B.pX,null,null,null,null,null,null,null,null,null)
D.h94=new A.C("Clear all",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h97=new A.C("WHAT SHOULD IT CHANGE?",null,F.vV,null,null,null,null,null,null,null,null,null)
D.h9F=new A.C("COLOUR",null,F.vV,null,null,null,null,null,null,null,null,null)
D.h9U=new A.C("Do it",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h9Y=new A.C("Create Tree",null,B.ce,null,null,null,null,null,null,null,null,null)
D.ha7=new A.C("Give me another clue",null,D.Lj,null,null,null,null,null,null,null,null,null)
D.hb1=new A.C("Create Family Tree",null,B.fa,null,null,null,null,null,null,null,null,null)
D.hbb=new A.C("THE TEACHER EXPLAINS THESE",null,B.u4,null,null,null,null,null,null,null,null,null)
D.fxk=new A.F(!0,B.kx,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hbh=new A.C("Write the first page myself",null,D.fxk,null,null,null,null,null,null,null,null,null)
D.hbP=new A.C("Use this header",null,B.cG,null,null,null,null,null,null,null,null,null)
D.hbW=new A.C("Create Project",null,B.aXK,null,null,null,null,null,null,null,null,null)
D.hDw=new C.acX(1,"header")
D.adE=new C.acX(2,"projects")
D.hDx=new C.acX(3,"cashier")
D.adF=new C.acX(4,"familyTree")
D.hQY=new C.cHR(0,"start")
D.hQZ=new C.cHS(0,"start")
D.hDK=new C.ZZ(null)
D.hEL=new C.a_s(null)
D.dJe=new A.bq(B.i3,[],A.aF("bq<q,GJ>"))
D.dqw=w([],x.dE)
D.dqx=w([],x.M)
D.hFp=new C.bhy(D.dJe,D.dqw,D.dqx,0,0,null,null)
D.b22=new C.a0i(0,"intro")
D.b23=new C.a0i(1,"countdown")
D.adS=new C.a0i(2,"ask")
D.Xt=new C.a0i(3,"reveal")
D.b24=new C.a0i(4,"end")
D.hIa=new C.te(B.GM,D.lH,B.cV,B.m8,5,!1,!1,!1,0,null)
D.hIb=new C.te(B.GM,B.er,B.cV,B.bO,2,!0,!0,!1,2,B.cV)
D.hIc=new C.te(B.qt,B.cX,B.cV,B.m8,2,!0,!1,!1,2,B.at)
D.hId=new C.te(B.GM,B.dX,B.cV,B.m8,5,!1,!1,!1,1,null)
D.hIe=new C.te(B.a_W,D.ak3,B.cV,B.m8,4,!0,!1,!0,0,null)
D.b27=new C.te(B.a_W,B.dS,B.cV,B.m8,3,!0,!1,!0,2,null)
D.b28=new C.te(B.rZ,D.lH,B.c,B.m8,0,!1,!1,!0,0,null)
D.b29=new C.te(B.qt,B.aD,B.cV,B.bO,2,!0,!0,!1,2,B.dS)
D.b2a=new C.te(B.qt,B.np,B.id,B.m8,5,!1,!1,!0,3,null)
D.hIf=new C.te(B.qt,B.dS,B.cV,B.m8,0,!0,!1,!1,0,B.aD)
D.b2b=new C.te(B.GM,B.er,B.cV,B.bO,1,!1,!0,!1,1,null)
D.b2c=new C.te(B.Gi,B.at,B.aD,B.m8,4,!0,!1,!0,2,null)
D.hIg=new C.te(B.rZ,B.at,B.er,B.m8,3,!0,!1,!1,0,null)
D.hIh=new C.te(B.qt,B.dX,B.cV,B.bO,1,!1,!0,!1,1,null)
D.hIi=new C.te(B.Gi,D.aj4,B.c,B.m8,5,!1,!1,!0,0,null)
D.hIW=new C.a0Q(null)
D.hR6=new C.agm(0,"still")
D.XQ=new C.agm(1,"walk")
D.b2D=new C.agm(2,"pound")
D.b2E=new C.agm(3,"drum")
D.hMB=new C.a26(0,"greet")
D.b2F=new C.a26(1,"teach")
D.aeb=new C.a26(2,"ask")
D.hMC=new C.a26(3,"feedback")
D.b2G=new C.a26(4,"end")
D.XW=new C.a2p(0,"intro")
D.XX=new C.a2p(1,"asking")
D.Bs=new C.a2p(2,"reacting")
D.aen=new C.a2p(3,"driving")
D.aeo=new C.a2p(4,"arrived")
D.aew=new C.aMg(0,"projects")
D.b35=new C.aMg(1,"cashier")
D.hOH=new C.aMg(2,"familyTree")})()};
(a=>{a["vRD6laEjesgAoqs4Cy8xiX5ZzP0="]=a.current})($__dart_deferred_initializers__);