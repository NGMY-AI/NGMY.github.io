((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,N,P,A0,S,Aa,L,H,E,T,Ab,Q,Ac,U,Ad,Ae,A1,Af,Ag,R,M,A2,A3,Ah,A4,A5,A6,Ai,Aj,A7,Ak,Al,A8,Am,G,An,Ao,Ap,A9,Aq,V,O,Ar,As,W,At,X,Y,F,Au,K,I,Z,C={
bEQ(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bEQ=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vE(null,""),$async$bEQ)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.ni(b1)
s=A.bZ(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dt(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cU(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.L)(h),++d){a0=h[d]
f.push(A.H(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.X.aq(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.r8(t,a1,B.hS,"book",E.Gg),$async$bEQ)
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
for(j=J.a6(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cB
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=H.a2S(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEQ,v)},
ahp(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ahp=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vE(null,""),$async$ahp)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.ni(b6)
s=x.S
r=A.d5(c1,0,A.dC(4,"count",s),A.T(c1).c)
q=H.a2F(new A.N(r,new C.fJP(),r.$ti.k("N<ak.E,n>")).aG(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fJO(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.X.aq(b7,null)+"\nAllowed values: style one of "+B.d.aG(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ahp)
case 6:l=c5
k=H.QV(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.aoX(s,D.dAA,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
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
a4=B.d.dt(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.L)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.H(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.X.aq(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ahp)
case 10:l=c5
k=l==null?null:H.QV(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.de(a8,d),a5=J.aW(a2.a),a2=a2.$ti,a7=new A.ld(a5,a2.k("ld<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gS(a5))
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
p=A.cH(new A.bd(h,s),new C.fJQ(),s.k("M.E"),p)
p=H.a2F(A.pw(p,3,A.a7(p).k("M.E")).aG(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cy<1>")
b4=A.C(new A.cy(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a2S(s,b9),$async$ahp)
case 13:b5=c5
for(s=J.a6(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aoX(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahp,v)},
hzJ(d,e,f){return A.ck(null,B.w.j(0.65),!1,null,new C.fTh(e,f),d,null,!0,!0,x.g2)},
aoX:function aoX(d,e,f){this.a=d
this.b=e
this.c=f},
fJP:function fJP(){},
fJO:function fJO(d){this.a=d},
fJQ:function fJQ(){},
fTh:function fTh(d,e){this.a=d
this.b=e},
bCE(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bCE=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b3(b1,new C.fxL())){u=null
w=1
break}t=B.d.d_(b1,new C.fxM())
s=$.S()
r=new A.p2()
q=A.z9(r,D.aQs)
p=A.I()
p.r=B.c.gp(0)
q.aP(D.aQs,p)
o=A.I()
o.r=B.N.gp(0)
o.c=3.6
o.b=B.a9
o.d=B.by
o.e=B.dQ
n=new C.fxR(t)
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
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aI(a3,o)}else{p=A.a([],x.v)
a3=new A.aF(s.r,B.ag,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.L)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.aY(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aI(a3,o)}w=4
return A.b(r.ni().xe(520,160),$async$bCE)
case 4:w=3
return A.b(b3.hx(B.ha),$async$bCE)
case 3:b0=b3
u=b0==null?null:J.eS(B.dK.gaS(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCE,v)},
fHv(d){return C.idR(d)},
idR(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fHv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bi1()
n=d.x!=null&&d.zh(null).length===0
if(d.x!=null)t=n?D.A1:D.Jo
else t=d.gUf()?D.Jo:D.aLm
w=3
return A.b(C.bCE(d.ax),$async$fHv)
case 3:s=f
p.a=null
if(s!=null)p.a=A.anD(s)
r=A.a4N(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aLm}else{p.c=C.x3(q,!0)
p.b=n?D.A1:D.Jo}r.a3K(A.h2H(new C.fHx(p,d,new C.fHy(),t,n,o),null,D.bDS,B.wS))
u=r.jD(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHv,v)},
fO9(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fO9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fHv(d),$async$fO9)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.au(q,0,40)
u=Ag.H1(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fO9,v)},
fxL:function fxL(){},
fxM:function fxM(){},
fxR:function fxR(d){this.a=d},
fHy:function fHy(){},
fHx:function fHx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fHw:function fHw(){},
fTK(d,e){var w=0,v=A.j(x.H)
var $async$fTK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ck(null,B.w.j(0.55),!0,null,new C.fTO(new A.cx(null,x.eF),e),d,null,!0,!0,x.H),$async$fTK)
case 2:return A.h(null,v)}})
return A.i($async$fTK,v)},
bFi(d,e,f,g){return C.ilr(d,e,f,g)},
ilr(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bFi=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gak(e.split(",")):e
r=B.cF.aO(t)}catch(q){r=null}if(r==null||r.length===0){d.K(x.q).f.U(D.ffs)
w=1
break}w=3
return A.b(A.ck(null,null,!0,null,new C.fTG(g,r,f),d,null,!0,!0,x.H),$async$bFi)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bFi,v)},
fTP(d,e){var w=0,v=A.j(x.H)
var $async$fTP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ck(null,null,!0,null,new C.fTS(new A.cx(null,x.eF),e),d,null,!0,!0,x.H),$async$fTP)
case 2:return A.h(null,v)}})
return A.i($async$fTP,v)},
aZV:function aZV(d,e){this.c=d
this.a=e},
c6L:function c6L(){},
bc8:function bc8(d,e){this.b=d
this.a=e},
fTO:function fTO(d,e){this.a=d
this.b=e},
fTL:function fTL(d){this.a=d},
fTM:function fTM(d,e,f){this.a=d
this.b=e
this.c=f},
fTN:function fTN(d,e){this.a=d
this.b=e},
fTG:function fTG(d,e,f){this.a=d
this.b=e
this.c=f},
fTE:function fTE(d){this.a=d},
fTF:function fTF(d,e,f){this.a=d
this.b=e
this.c=f},
fTS:function fTS(d,e){this.a=d
this.b=e},
fTQ:function fTQ(d){this.a=d},
fTR:function fTR(d,e,f){this.a=d
this.b=e
this.c=f},
fC4(d,e){var w=0,v=A.j(x.y),u,t
var $async$fC4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2q(d),$async$fC4)
case 3:t=g
J.nG(t,new C.fC5(e))
u=A.ai3(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fC4,v)},
fC5:function fC5(d){this.a=d},
ap8:function ap8(d,e,f){this.c=d
this.d=e
this.a=f},
aDR:function aDR(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dMY:function dMY(d,e){this.a=d
this.b=e},
dMJ:function dMJ(d,e){this.a=d
this.b=e},
dMM:function dMM(d,e,f){this.a=d
this.b=e
this.c=f},
dML:function dML(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dMK:function dMK(d,e){this.a=d
this.b=e},
dMN:function dMN(d,e){this.a=d
this.b=e},
dMH:function dMH(){},
dMI:function dMI(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dMG:function dMG(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dMr:function dMr(d){this.a=d},
dMs:function dMs(d,e,f){this.a=d
this.b=e
this.c=f},
dMt:function dMt(d,e){this.a=d
this.b=e},
dMq:function dMq(d){this.a=d},
dMy:function dMy(d,e){this.a=d
this.b=e},
dMp:function dMp(d){this.a=d},
dMz:function dMz(d,e,f){this.a=d
this.b=e
this.c=f},
dMA:function dMA(d,e,f){this.a=d
this.b=e
this.c=f},
dMo:function dMo(d,e){this.a=d
this.b=e},
dMB:function dMB(d,e,f){this.a=d
this.b=e
this.c=f},
dMn:function dMn(d,e){this.a=d
this.b=e},
dMC:function dMC(d,e){this.a=d
this.b=e},
dMm:function dMm(d){this.a=d},
dMD:function dMD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dMk:function dMk(){},
dMe:function dMe(d){this.a=d},
dMf:function dMf(d){this.a=d},
dMl:function dMl(d,e){this.a=d
this.b=e},
dME:function dME(d,e){this.a=d
this.b=e},
dMj:function dMj(d){this.a=d},
dMF:function dMF(d){this.a=d},
dMi:function dMi(){},
dMu:function dMu(d,e){this.a=d
this.b=e},
dMh:function dMh(d){this.a=d},
dMv:function dMv(d,e,f){this.a=d
this.b=e
this.c=f},
dMg:function dMg(d,e){this.a=d
this.b=e},
dMd:function dMd(d,e){this.a=d
this.b=e},
dMw:function dMw(d){this.a=d},
dMx:function dMx(d,e,f){this.a=d
this.b=e
this.c=f},
dN0:function dN0(){},
dN1:function dN1(d,e){this.a=d
this.b=e},
dMZ:function dMZ(d){this.a=d},
dN_:function dN_(d){this.a=d},
dMV:function dMV(d,e){this.a=d
this.b=e},
dMW:function dMW(d){this.a=d},
dMO:function dMO(d,e,f){this.a=d
this.b=e
this.c=f},
dMP:function dMP(d,e,f){this.a=d
this.b=e
this.c=f},
dMQ:function dMQ(d,e,f){this.a=d
this.b=e
this.c=f},
dMR:function dMR(d,e,f){this.a=d
this.b=e
this.c=f},
dMS:function dMS(d,e,f){this.a=d
this.b=e
this.c=f},
dMT:function dMT(d,e,f){this.a=d
this.b=e
this.c=f},
dMU:function dMU(d,e,f){this.a=d
this.b=e
this.c=f},
dN2:function dN2(){},
dN3:function dN3(){},
dN4:function dN4(){},
dN5:function dN5(d){this.a=d},
dMX:function dMX(d,e){this.a=d
this.b=e},
hvK(d){return B.d.dN(D.a3T,new C.fCJ(d),new C.fCK())},
uD:function uD(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fCJ:function fCJ(d){this.a=d},
fCK:function fCK(){},
ala:function ala(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aVG:function aVG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Tb:function Tb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfL:function bfL(){this.d=$
this.c=this.a=null},
dcK:function dcK(d,e){this.a=d
this.b=e},
dcI:function dcI(d,e){this.a=d
this.b=e},
dcJ:function dcJ(){},
dcL:function dcL(d,e){this.a=d
this.b=e},
hgh(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bk(J.k(u==null?"":u))
return new C.nq(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
Lb(d,e){return C.ict(d,e)},
ict(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Lb=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Lb)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aS(J.r(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.X.aM(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.de(p,x.f)
o=A.cH(o,new C.fF5(),o.$ti.k("M.E"),x.B)
n=A.a7(o).k("Z<M.E>")
o=A.C(new A.Z(o,new C.fF6(),n),n.k("M.E"))
B.d.aZ(o,new C.fF7())
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
Bb(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Bb=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$Bb)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fSn(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.ar("String","ngmy_family_book_v1_"+s+"_"+e,B.X.aq(r,null)),$async$Bb)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Bb,v)},
aRK(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aRK=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Lb(d,e),$async$aRK)
case 2:u=h
t=J.cE(u)
s=t.bh(u,new C.h_J(f))
if(s===-1)t.c6(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Bb(d,e,u),$async$aRK)
case 3:return A.h(null,v)}})
return A.i($async$aRK,v)},
bD7(d,e,f){var w=0,v=A.j(x.H),u
var $async$bD7=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Lb(d,e),$async$bD7)
case 2:u=h
J.nG(u,new C.fBX(f))
w=3
return A.b(C.Bb(d,e,u),$async$bD7)
case 3:return A.h(null,v)}})
return A.i($async$bD7,v)},
bDm(d,e){return C.ics(d,e)},
ics(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bDm=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bDm)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aS(J.r(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.O_
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
if(D.Dm.aj(0,o.h(0,"foil")))j=A.cQ(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aK(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.E(i==null?25:i,18,36)
h=B.d.t(D.a5x,o.h(0,"position"))?A.cQ(o.h(0,"position")):"middle"
g=B.d.t(D.a4U,o.h(0,"frame"))?A.cQ(o.h(0,"frame")):"double"
f=B.d.t(D.a4Q,o.h(0,"texture"))?A.cQ(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.t(D.d2J,o.h(0,"header"))?A.cQ(o.h(0,"header")):"classic"
o=new C.HY(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.O_
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.O_
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bDm,v)},
S0(d,e,f){return C.ikY(d,e,f)},
ikY(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$S0=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$S0)
case 7:r=h
w=8
return A.b(r.ar("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.X.aq(f.ah(),null)),$async$S0)
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
return A.i($async$S0,v)},
Rt(d,e){return C.icu(d,e)},
icu(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Rt=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Rt)
case 7:r=g
q=r.tD("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Lb(d,e),$async$Rt)
case 8:if(!j.cL(g)){n=B.a.i(d.toLowerCase())
m=J.lE(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Rt)
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
return A.i($async$Rt,v)},
agK(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$agK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rt(d,e),$async$agK)
case 3:s=g
r=J.a6(s)
if(r.gL(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gL(s):"main"
r.M(s,t)
w=5
return A.b(A.az(),$async$agK)
case 5:w=4
return A.b(g.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$agK)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agK,v)},
a33(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a33=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Rt(d,e),$async$a33)
case 2:s=h
J.hu(s,f)
w=3
return A.b(A.az(),$async$a33)
case 3:u=h
w=4
return A.b(u.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a33)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a33)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a33)
case 6:return A.h(null,v)}})
return A.i($async$a33,v)},
nq:function nq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fF5:function fF5(){},
fF6:function fF6(){},
fF7:function fF7(){},
fSn:function fSn(){},
h_J:function h_J(d){this.a=d},
fBX:function fBX(d){this.a=d},
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
bQe:function bQe(d){this.a=d},
ilg(d,e,f,g,h,i,j){return A.a5(d,!1).cc(A.eh(new C.fSW(j,i,f,e,h,g),!0,null,x.H))},
Rp(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Rp=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rt(h,g),$async$Rp)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.K(x.q).f.U(D.aSy)
u=!1
w=1
break}w=4
return A.b(C.hzJ(d,f,e),$async$Rp)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.agK(h,g),$async$Rp)
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
return A.b(C.Bb(h,r,p),$async$Rp)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.S0(h,r,new C.HY("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Rp)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Rp,v)},
fSW:function fSW(d,e,f,g,h,i){var _=this
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
aAR:function aAR(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
ddp:function ddp(d){this.a=d},
ddo:function ddo(d,e){this.a=d
this.b=e},
ddd:function ddd(d,e){this.a=d
this.b=e},
dda:function dda(d,e){this.a=d
this.b=e},
dcM:function dcM(d){this.a=d},
dcN:function dcN(d,e){this.a=d
this.b=e},
dde:function dde(d){this.a=d},
dcV:function dcV(d){this.a=d},
dcT:function dcT(d){this.a=d},
dcU:function dcU(d){this.a=d},
dcW:function dcW(d){this.a=d},
ddb:function ddb(d){this.a=d},
ddc:function ddc(){},
dcR:function dcR(d){this.a=d},
dcS:function dcS(d,e){this.a=d
this.b=e},
dcX:function dcX(d){this.a=d},
dcY:function dcY(d,e){this.a=d
this.b=e},
ddn:function ddn(d){this.a=d},
ddm:function ddm(d,e){this.a=d
this.b=e},
ddl:function ddl(d){this.a=d},
dd7:function dd7(d){this.a=d},
dd6:function dd6(d){this.a=d},
dd8:function dd8(d){this.a=d},
dcO:function dcO(d,e){this.a=d
this.b=e},
dd9:function dd9(d,e){this.a=d
this.b=e},
dd0:function dd0(d){this.a=d},
dd1:function dd1(d){this.a=d},
dd_:function dd_(){},
dd2:function dd2(d){this.a=d},
dd3:function dd3(d){this.a=d},
dd4:function dd4(d,e){this.a=d
this.b=e},
dd5:function dd5(d,e,f){this.a=d
this.b=e
this.c=f},
dcZ:function dcZ(d,e){this.a=d
this.b=e},
ddg:function ddg(d){this.a=d},
ddf:function ddf(){},
ddh:function ddh(d){this.a=d},
ddi:function ddi(d){this.a=d},
ddj:function ddj(d){this.a=d},
ddk:function ddk(d,e){this.a=d
this.b=e},
dcP:function dcP(d){this.a=d},
dcQ:function dcQ(d){this.a=d},
ZR:function ZR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bg9:function bg9(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dfa:function dfa(d){this.a=d},
dfb:function dfb(d){this.a=d},
df9:function df9(d){this.a=d},
dfc:function dfc(d){this.a=d},
df8:function df8(d){this.a=d},
dfd:function dfd(d){this.a=d},
df7:function df7(d){this.a=d},
dfe:function dfe(d,e){this.a=d
this.b=e},
df6:function df6(d,e){this.a=d
this.b=e},
dff:function dff(d,e){this.a=d
this.b=e},
ZP:function ZP(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
af6:function af6(d,e,f){this.a=d
this.b=e
this.c=f},
aAU:function aAU(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
ddE:function ddE(d,e){this.a=d
this.b=e},
ddD:function ddD(d,e){this.a=d
this.b=e},
ddI:function ddI(d){this.a=d},
ddH:function ddH(d,e){this.a=d
this.b=e},
ddF:function ddF(d){this.a=d},
ddG:function ddG(d){this.a=d},
ddJ:function ddJ(d){this.a=d},
ddK:function ddK(d){this.a=d},
ddC:function ddC(d,e){this.a=d
this.b=e},
ddB:function ddB(d,e){this.a=d
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
cLZ:function cLZ(d){this.a=d},
cM_:function cM_(){},
cM0:function cM0(d){this.a=d},
bdl:function bdl(d,e,f){this.b=d
this.c=e
this.a=f},
bdc:function bdc(d,e){this.b=d
this.a=e},
uE:function uE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Zn:function Zn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdj:function bdj(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d4y:function d4y(d,e,f){this.a=d
this.b=e
this.c=f},
d4x:function d4x(d,e){this.a=d
this.b=e},
d4X:function d4X(d){this.a=d},
d4K:function d4K(){},
d4Y:function d4Y(d){this.a=d},
d4J:function d4J(){},
d4Z:function d4Z(d,e){this.a=d
this.b=e},
d4I:function d4I(d,e){this.a=d
this.b=e},
d5_:function d5_(d,e){this.a=d
this.b=e},
d4H:function d4H(d,e){this.a=d
this.b=e},
d50:function d50(d){this.a=d},
d4G:function d4G(){},
d51:function d51(d,e){this.a=d
this.b=e},
d4F:function d4F(d,e){this.a=d
this.b=e},
d52:function d52(d){this.a=d},
d4S:function d4S(d,e){this.a=d
this.b=e},
d53:function d53(d){this.a=d},
d54:function d54(d){this.a=d},
d56:function d56(d){this.a=d},
d57:function d57(d){this.a=d},
d4R:function d4R(d,e){this.a=d
this.b=e},
d58:function d58(d,e){this.a=d
this.b=e},
aHT:function aHT(d){this.a=d},
biI:function biI(d){this.a=d},
bbw:function bbw(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
alb:function alb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a14:function a14(d,e){this.a=d
this.b=e},
alc:function alc(d,e,f,g,h,i){var _=this
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
_.a8$=i
_.c=_.a=null},
bQo:function bQo(d){this.a=d},
bQi:function bQi(d){this.a=d},
bQh:function bQh(d,e){this.a=d
this.b=e},
bQr:function bQr(d){this.a=d},
bQj:function bQj(d){this.a=d},
bQk:function bQk(d){this.a=d},
bQn:function bQn(d){this.a=d},
bQm:function bQm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQp:function bQp(d,e){this.a=d
this.b=e},
bQq:function bQq(){},
bQl:function bQl(d){this.a=d},
bQf:function bQf(d,e){this.a=d
this.b=e},
bQg:function bQg(d){this.a=d},
boh:function boh(d,e){this.b=d
this.a=e},
aAS:function aAS(){},
iw(d,e){var w
$.S()
w=A.I()
w.b=B.a9
w.c=e
w.r=d.gp(0)
w.d=B.by
w.e=B.dQ
return w},
bCG(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.a
J.bl(j.save())
j.translate(e.a,e.b)
d.p9(0,a0?-f:f,f)
w=A.bK(B.ic,8,36)
v=B.w.j(0.3)
u=$.S()
t=A.I()
t.r=v.gp(0)
d.dQ(w,t)
w=a1===D.Wu
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.bo(D.elP,new A.t(-4+v,-2),C.iw(q,5))
d.bo(D.ejp,new A.t(4-v,-2),C.iw(q,5))}else{t=A.bK(B.Je,14,40)
p=A.I()
p.r=v.gp(0)
d.dQ(t,p)}v=u.r
u=x.v
o=new A.aF(v,B.ag,k,k,A.a([],u))
t=-64-r
o.D(new A.aY(-11,t))
o.D(new A.c5(-15,-40,-14,a3?-12:-18))
o.D(new A.aq(14,a3?-12:-18))
o.D(new A.c5(15,-40,11,t))
o.D(new A.bt())
t=A.I()
t.r=w.gp(0)
d.aI(o,t)
u=new A.aF(v,B.ag,k,k,A.a([],u))
u.D(new A.aY(-12,-50-r))
v=-46-r
u.D(new A.aq(12,v))
u.D(new A.aq(12.5,-42-r))
u.D(new A.aq(-12.5,v))
u.D(new A.bt())
v=A.I()
v.r=h.c.gp(0)
d.aI(u,v)
A:{if(D.abY===a1){w=Math.sin(g*3.4)
break A}if(D.abZ===a1){w=Math.sin(g*7.5)
break A}w=s
break A}if(a1===D.abY){n=-52+w*14
d.bo(new A.t(10,n-22),new A.t(10,n+44),C.iw(F.Fs,3.4))
d.bo(D.em5,new A.t(9,n),C.iw(q,4))
d.bo(D.ejP,new A.t(10,n),C.iw(q,4))}else if(a1===D.abZ){d.bo(D.ekV,new A.t(-8,-26-Math.max(0,w)*6),C.iw(q,4))
d.bo(D.ehT,new A.t(8,-26-Math.max(0,-w)*6),C.iw(q,4))}else{w=s*3
v=-38-r
d.bo(D.ekZ,new A.t(-12-w,v),C.iw(q,4))
d.bo(D.aKp,new A.t(12+w,v),C.iw(q,4))}w=A.I()
w.r=q.gp(0)
d.aP(D.f2S,w)
m=new A.t(0,-77-r)
w=A.bK(m,22,19)
v=A.I()
v.r=q.gp(0)
d.dQ(w,v)
w=h.y
if(w!=null){v=A.bK(m.a7(0,I.va),15,24)
u=A.I()
u.r=w.gp(0)
d.dQ(v,u)
u=m.a7(0,D.ehO)
v=A.I()
v.r=w.gp(0)
d.ad(u,4,v)}else{w=A.bK(m.a7(0,B.t4),23,20)
v=h.d
u=A.I()
u.r=v.gp(0)
d.e4(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.bo(m.a7(0,D.em3),m.a7(0,D.ekT),C.iw(v,2.2))
d.bo(m.a7(0,D.ejO),m.a7(0,D.ehL),C.iw(v,2.2))}if(w===4){w=m.a7(0,D.em7)
u=A.I()
u.r=v.gp(0)
d.ad(w,6,u)
u=m.a7(0,D.ejQ)
w=A.I()
w.r=v.gp(0)
d.ad(u,6,w)}}w=m.a7(0,D.ekG)
v=A.I()
v.r=B.i2.gp(0)
d.ad(w,0.9,v)
v=m.a7(0,D.eku)
w=A.I()
w.r=B.i2.gp(0)
d.ad(v,0.9,w)
if(i){l=m.a7(0,I.a7s)
w=A.bK(l,21,22)
v=A.I()
v.r=D.lx.gp(0)
d.dQ(w,v)
v=A.bK(l.a7(0,I.aKm),5,12)
w=A.I()
w.r=D.bdS.gp(0)
d.dQ(v,w)
d.bo(l.a7(0,D.em_),l.a7(0,I.aKJ),C.iw(B.cI,1.4))
d.bo(D.aKp,new A.t(15,-88-r),C.iw(q,3.6))}j.restore()},
hur(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.a
J.bl(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bW(0,f)
v=A.bK(B.dC,18,96)
u=B.w.j(0.28)
$.S()
t=A.I()
t.r=u.gp(0)
d.dQ(v,t)
t=A.bK(B.dC,11,70)
v=B.w.j(0.2)
u=A.I()
u.r=v.gp(0)
d.dQ(t,u)
d.lr(D.aQw,A.I())
C.i0U(d,g,h,i,j)
s=(k==null?D.a7x:k).a-w>=0?1:-1
w=A.I()
w.a=B.Lp
w.sam(A.jx(new A.t(s*70,-60),new A.t(-s*70,-60),A.a([D.ahe.j(0.5),D.ahe.j(0.12),D.bl7.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aP(D.aQw,w)
r.restore()
r.restore()},
i0U(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a3.a,a1=A.ar(a0,B.w,0.28)
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
s=A.br(D.f2T,B.t8)
p=$.S()
o=A.I()
o.r=u.gp(0)
a2.az(s,o)
o=A.br(D.f2O,B.hF)
s=A.ar(v,B.w,0.18)
s.toString
n=A.I()
n.r=s.gp(0)
a2.az(o,n)
n=A.br(D.f31,B.hF)
o=A.ar(v,B.w,0.1)
o.toString
s=A.I()
s.r=o.gp(0)
a2.az(n,s)
s=A.I()
s.r=a0.gp(0)
a2.dQ(D.f2V,s)
s=A.I()
s.r=a0.gp(0)
a2.dQ(D.f1E,s)
s=a2.a
J.bl(s.save())
s.translate(a4.w,0)
J.bl(s.save())
a2.p9(0,q,q*(1+t*0.012))
o=a3.f
m=o&&!a3.r?25:28
n=x.v
l=new A.aF(p.r,B.ag,d,d,A.a([],n))
p=-m
k=p+2
l.D(new A.aY(k,-58))
l.D(new A.c5(p-3,-62,p,-52))
l.D(new A.aq(p+4,-14))
l.D(new A.aq(m-4,-14))
l.D(new A.aq(m,-52))
l.D(new A.c5(m+3,-62,m-2,-58))
l.D(new A.c5(0,-70,k,-58))
l.D(new A.bt())
k=A.I()
k.r=v.gp(0)
a2.aI(l,k)
J.bl(s.save())
a2.mK(0,l)
switch(a3.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.d9o[j]
i=new A.ao(B.O,B.M,B.S,B.T,B.R)
i.b=B.a9
i.c=5
i.r=k.gp(0)
i.d=B.by
i.e=B.dQ
h=i.G()
s.drawLine.apply(s,[-34+u,-64,14+u,-14,h])
h.delete()}break
case 2:for(k=a3.c,g=-56;g<-14;g+=11)for(f=-26+B.o.F(B.o.ao(g,11),2)*6;f<28;f+=12){i=k.j(0.85)
$.S()
e=new A.ao(B.O,B.M,B.S,B.T,B.R)
e.r=i.gp(0)
h=e.G()
s.drawCircle(f,g,3.6,h)
h.delete()
e=new A.ao(B.O,B.M,B.S,B.T,B.R)
e.r=u.gp(0)
h=e.G()
s.drawCircle(f,g,1.6,h)
h.delete()}break
case 3:for(u=a3.c,f=-28;f<30;f+=8){k=u.j(0.7)
i=new A.ao(B.O,B.M,B.S,B.T,B.R)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.by
i.e=B.dQ
h=i.G()
s.drawLine.apply(s,[f,-64,f,-14,h])
h.delete()}for(g=-60;g<-14;g+=8){k=u.j(0.7)
i=new A.ao(B.O,B.M,B.S,B.T,B.R)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.by
i.e=B.dQ
h=i.G()
s.drawLine.apply(s,[-30,g,30,g,h])
h.delete()}break
default:a2.bo(D.elu,D.eiw,C.iw(a3.c.j(0.9),3))}a2.bo(D.em0,D.el0,C.iw(B.w.j(0.18),1.6))
a2.bo(D.ehS,I.aKr,C.iw(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.S()
i=A.I()
i.r=u.gp(0)
a2.aP(D.f1A,i)
s.restore()
i=A.I()
i.r=a1.gp(0)
a2.aP(D.f1O,i)
n=new A.aF(k.r,B.ag,d,d,A.a([],n))
n.D(new A.aY(-9,-66))
n.D(new A.c5(0,-57,9,-66))
n.D(new A.c5(0,-60,-9,-66))
k=A.I()
k.r=a0.gp(0)
a2.aI(n,k)
if(a3.e!==1)u=a3.r&&!o
else u=!0
if(u)a2.e4(D.f1X,0.1,2.941592653589793,!1,C.iw(a3.c,2.2))
s.restore()
u=-56*q
o=a4.Q
if(o==null)o=D.a7B
n=25*q
k=23*q
i=9*q
C.hqE(a2,new A.t(p*q+2,u),o,n,k,-1,v,a0,i)
o=a4.as
p=o==null?D.DP:o
C.hqE(a2,new A.t(m*q-2,u),p,n,k,1,v,a0,i)
if(a4.at){a2.bo(D.ejh,D.ejd,C.iw(D.ai9,4))
a2.bo(D.ejf,D.ejb,C.iw(D.FS.j(0.7),1.4))
u=A.I()
u.r=B.cI.gp(0)
a2.ad(D.eje,5,u)}s.restore()
u=a4.w
p=a4.e
o=a4.r
J.bl(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a2.il(0,a4.f)
a2.bW(0,r)
C.i0R(a2,a3,a4,a5,a6,a0,a1,w)
s.restore()},
hqE(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aE(0,e),r=s.gcC(),q=r===0?B.ic:s.eV(0,r),p=B.k.E(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.t(o,w)
if(o*i<0)v=new A.t(-o,-w)
u=e.a7(0,q.aK(0,n)).a7(0,v.aK(0,m))
t=e.a7(0,q.aK(0,p))
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
d.dQ(o,w)
w=-l
w=t.a7(0,new A.t(i*w*0.45,w*0.1))
o=A.I()
o.r=k.gp(0)
d.ad(w,l*0.28,o)},
i0R(c3,c4,c5,c6,c7,c8,c9,d0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null,c1=c4.d,c2=c4.e
if(c2===3||c2===4){w=A.bK(B.v9,40,38)
$.S()
v=A.I()
v.r=c1.gp(0)
c3.dQ(w,v)}if(c2===4){$.S()
w=A.I()
w.r=c1.gp(0)
c3.ad(D.ela,9.5,w)
w=A.I()
w.r=c1.gp(0)
c3.ad(D.ei6,9.5,w)}w=A.bK(D.emn,10,6)
v=$.S()
u=A.I()
u.r=c9.gp(0)
c3.dQ(w,u)
u=A.bK(D.ekD,10,6)
w=A.I()
w.r=c9.gp(0)
c3.dQ(u,w)
v=v.r
w=x.v
t=new A.aF(v,B.ag,c0,c0,A.a([],w))
t.D(new A.aY(0,-20))
t.D(new A.kN(13,-20,17,-9,16,2))
t.D(new A.kN(15,13,8,20,0,20))
t.D(new A.kN(-8,20,-15,13,-16,2))
t.D(new A.kN(-17,-9,-13,-20,0,-20))
t.D(new A.bt())
u=A.I()
u.sam(A.tt(D.elR,28,A.a([d0,c8,c9],x.O),A.a([0,0.55,1],x.n),B.x,c0,c0,0))
c3.aI(t,u)
u=c4.r
if(u){s=C.iw(c9.j(0.5),0.8)
c3.e4(D.f33,3.455751918948773,2.5132741228718345,!1,s)
c3.e4(D.f1H,3.455751918948773,2.5132741228718345,!1,s)
c3.bo(D.el7,D.ekW,s)
c3.bo(D.ei2,D.ehV,s)
c3.e4(D.f1W,2.2,1.4,!1,s)
c3.e4(D.f1F,-0.4,1.4,!1,s)}switch(c2){case 0:for(r=c3.a,q=0;q<16;++q){p=3.141592653589793*(1.02+0.96*q/15)
o=Math.cos(p)
n=Math.sin(p)
m=new A.ao(B.O,B.M,B.S,B.T,B.R)
m.r=c1.gp(0)
l=m.G()
r.drawCircle(o*14.5,-3+n*17.5,4.3,l)
l.delete()}r=A.I()
r.r=c1.gp(0)
c3.e4(D.f29,3.141592653589793,3.141592653589793,!0,r)
break
case 1:r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aY(-15,-11))
r.D(new A.c5(0,-30,15,-11))
r.D(new A.aq(13,-6))
r.D(new A.c5(0,-12,-13,-6))
r.D(new A.bt())
o=A.I()
o.r=c4.c.gp(0)
c3.aI(r,o)
c3.bo(D.ekX,D.ehW,C.iw(G.na,1.4))
o=A.I()
o.r=c1.gp(0)
c3.ad(D.eld,3,o)
o=A.I()
o.r=c1.gp(0)
c3.ad(D.ei7,3,o)
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aY(-13,6))
o.D(new A.c5(-12,22,0,26))
o.D(new A.c5(12,22,13,6))
o.D(new A.c5(8,13,0,12))
o.D(new A.c5(-8,13,-13,6))
o.D(new A.bt())
r=A.I()
r.r=B.iy.gp(0)
c3.aI(o,r)
r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aY(-7,8))
r.D(new A.c5(0,6,7,8))
r.D(new A.c5(0,10.5,-7,8))
o=A.I()
o.r=B.bO.gp(0)
c3.aI(r,o)
break
case 2:k=c4.y
if(k==null)k=c4.b
r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aY(-17,-4))
r.D(new A.c5(-20,-27,0,-29))
r.D(new A.c5(20,-27,17,-4))
r.D(new A.c5(0,-14,-17,-4))
r.D(new A.bt())
o=A.I()
o.r=k.gp(0)
c3.aI(r,o)
o=A.ar(k,B.w,0.3)
o.toString
c3.e4(D.f2g,3.4,2.5,!1,C.iw(o,1.4))
o=A.ar(k,B.c,0.3)
o.toString
c3.e4(D.f23,3.6,2.2,!1,C.iw(o,1.2))
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aY(11,-22))
o.D(new A.c5(27,-34,25,-19))
o.D(new A.c5(18,-18,11,-22))
r=A.ar(k,B.c,0.1)
r.toString
n=A.I()
n.r=r.gp(0)
c3.aI(o,n)
n=new A.aF(v,B.ag,c0,c0,A.a([],w))
n.D(new A.aY(11,-22))
n.D(new A.c5(24,-12,27,-26))
n.D(new A.c5(18,-22,11,-22))
o=A.ar(k,B.w,0.2)
o.toString
r=A.I()
r.r=o.gp(0)
c3.aI(n,r)
r=A.I()
r.r=c4.c.gp(0)
c3.ad(D.ehX,3,r)
break
case 3:r=A.I()
r.r=c1.gp(0)
c3.e4(D.f2d,3.204424506661589,3.015928947446201,!0,r)
for(r=c3.a,q=-3;q<=3;++q){o=A.ar(c1,B.c,0.18)
o.toString
n=new A.ao(B.O,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=0.9
n.r=o.gp(0)
n.d=B.by
n.e=B.dQ
l=n.G()
r.drawLine.apply(r,[q*3.6,-19+Math.abs(q)*0.8,q*4.6,-4,l])
l.delete()}for(o=c4.c,j=0;j<2;++j){i=D.dnn[j]
n=new A.ao(B.O,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=4.5
n.r=c1.gp(0)
n.d=B.by
n.e=B.dQ
l=n.G()
r.drawLine.apply(r,[i,0,i*1.12,22,l])
l.delete()
for(h=0;h<3;++h){n=new A.ao(B.O,B.M,B.S,B.T,B.R)
n.r=o.gp(0)
l=n.G()
r.drawCircle(i*(1+h*0.04),7+h*6.5,1.8,l)
l.delete()}}break
case 4:r=A.I()
r.r=c1.gp(0)
c3.e4(D.f2c,3.204424506661589,3.015928947446201,!0,r)
r=A.ar(c1,B.c,0.25)
r.toString
c3.bo(I.a7s,I.a7r,C.iw(r,1))
break
default:r=A.I()
r.r=c1.gp(0)
c3.e4(D.f1I,3.267256359733385,2.8902652413026098,!0,r)}g=B.k.E(c5.b,0,1)*0.4+0.1
r=A.bK(D.em9,5,8)
o=D.aez.j(g)
n=A.I()
n.r=o.gp(0)
c3.dQ(r,n)
n=A.bK(D.ekP,5,8)
r=D.aez.j(g)
o=A.I()
o.r=r.gp(0)
c3.dQ(n,o)
f=c5.e*2.4
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aY(f-0.6,-2))
o.D(new A.c5(f-3.4,6,f-2.6,7.4))
o.D(new A.c5(f,8.8,f+2.6,7.4))
c3.aI(o,C.iw(c9.j(0.75),1.1))
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
for(r=c3.a,o=d<0.15,n=c4.f,m=d>0.12,a0=2.5*d,a1=a0*2,a2=a0*2.2,j=0;j<2;++j){a3=F.hq[j]
a4=c5.e
a5=a3>0?0.7:1
a6=a3*6.4+a4*2*a5
if(m){a4=Math.max(0.6,a1)
a5=A.bK(new A.t(a6,-3),a4,7)
a7=new A.ao(B.O,B.M,B.S,B.T,B.R)
a7.r=B.c.j(0.96).gp(0)
l=a7.G()
r.drawOval(A.bG(a5),l)
l.delete()
a8=a6+c5.y*1.5
a9=-3+c5.z*0.7
J.bl(r.save())
a5=A.a([],w)
a7=new A.aF(v,B.ag,c0,c0,a5)
a5.push(new A.jL(A.bK(new A.t(a6,-3),a4,7)))
a4=a7.gbu().a.snapshot()
a4=a7.e=new A.cd(a4)
r.clipPath(a4.a,$.nF(),!0)
a4=new A.ao(B.O,B.M,B.S,B.T,B.R)
a4.r=D.bhC.gp(0)
l=a4.G()
r.drawCircle(a8,a9,2.1,l)
l.delete()
a4=new A.ao(B.O,B.M,B.S,B.T,B.R)
a4.r=B.w.gp(0)
l=a4.G()
r.drawCircle(a8,a9,1.05,l)
l.delete()
a4=new A.ao(B.O,B.M,B.S,B.T,B.R)
a4.r=B.c.gp(0)
l=a4.G()
r.drawCircle(a8-0.7,a9-0.7,0.55,l)
l.delete()
r.restore()}a4=n?D.Yp:c9.j(0.9)
a5=n?1.5:1.1
b0=new A.ao(B.O,B.M,B.S,B.T,B.R)
b0.b=B.a9
b0.c=a5
b0.r=a4.gp(0)
b0.d=B.by
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
if(u)b2=B.e2
else{b2=A.ar(c1,B.w,0.2)
b2.toString}b3=new A.ao(B.O,B.M,B.S,B.T,B.R)
b3.b=B.a9
b3.c=1.7
b3.r=b2.gp(0)
b3.d=B.by
b3.e=B.dQ
l=b3.G()
r.drawLine.apply(r,[a6-a5,b1-a7+0.4,a6+a5,b1-0.6-a4,l])
l.delete()}b4=B.k.E(c5.a,0,1)
if(n)b5=D.brm
else{u=A.ar(c9,D.bl9,0.6)
u.toString
b5=u}b6=c5.b
if(b4>0.06){b7=5+B.k.E(b6,0,1)*2.2
b8=1.2+b4*6.5
b9=new A.aF(v,B.ag,c0,c0,A.a([],w))
w=-b7
b9.D(new A.aY(w,11.5))
b9.D(new A.c5(0,11.5+b8*0.2-c5.b*1.5,b7,11.5))
b9.D(new A.c5(0,11.5+b8*1.5+c5.b*1.5,w,11.5))
b9.D(new A.bt())
v=A.I()
v.r=D.bkt.gp(0)
c3.aI(b9,v)
J.bl(r.save())
c3.mK(0,b9)
v=B.c.j(0.95)
u=A.I()
u.r=v.gp(0)
c3.aP(new A.a3(w,11,w+b7*2,13.2),u)
u=A.bK(new A.t(0,11.5+b8*1.1),b8*0.9,b7*1.4)
w=A.I()
w.r=D.brr.gp(0)
c3.dQ(u,w)
r.restore()
c3.aI(b9,C.iw(b5,1.1))}else{u=new A.aF(v,B.ag,c0,c0,A.a([],w))
r=11.5-b6*0.8
u.D(new A.aY(-5.2,r))
u.D(new A.c5(0,13.1+b6*2.8,5.2,r))
c3.aI(u,C.iw(b5,1.5))
if(b6>0.6){w=new A.aF(v,B.ag,c0,c0,A.a([],w))
w.D(new A.aY(-4.6,11.8))
w.D(new A.c5(0,15.1+b6*1.4,4.6,11.8))
w.D(new A.c5(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.I()
u.r=v.gp(0)
c3.aI(w,u)}}if(c5.b>0.2){c3.e4(D.f1V,-1.2,2.2,!1,C.iw(c9.j(0.5),0.8))
c3.e4(D.f1K,2.141592653589793,2.2,!1,C.iw(c9.j(0.5),0.8))}if(n&&c2!==2){c2=c4.c
w=A.I()
w.r=c2.gp(0)
c3.ad(D.ekw,1.7,w)
w=A.I()
w.r=c2.gp(0)
c3.ad(D.eks,1.7,w)}},
i6l(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.S(),e=new A.p2(),d=A.z9(e,g),a0=a4.a,a1=a4.b,a2=Math.min(a0/450,a1/900),a3=A.I()
a3.sam(A.jx(B.I,new A.t(0,a1*0.46),D.d6d,D.cYT,B.x,g))
d.aP(new A.a3(0,0,0+a0,0+a1),a3)
a3=d.a
J.bl(a3.save())
a3.translate((a0-450*a2)/2,(a1-900*a2)/2)
d.bW(0,a2)
w=new A.e6()
w.cX(8)
for(v=0;v<120;++v){a0=w.ag()
a1=w.ag()
u=w.ag()
t=new A.ao(B.O,B.M,B.S,B.T,B.R)
t.r=B.c.j(0.2+w.ag()*0.5).gp(0)
s=t.G()
a3.drawCircle(a0*450*1.4-90,a1*330-40,0.5+u*0.9,s)
s.delete()}J.bl(a3.save())
a3.translate(200,120)
d.il(0,-0.5)
a0=A.I()
a1=x.O
a0.sam(A.tt(B.I,230,A.a([D.bgo,B.L],a1),g,B.x,g,g,0))
d.dQ(D.f2q,a0)
a3.restore()
a0=A.I()
a0.sam(A.tt(D.a7A,58,A.a([D.bjx,B.L],a1),g,B.x,g,g,0))
d.ad(D.a7A,58,a0)
a0=A.I()
a0.r=D.bf6.gp(0)
d.ad(D.a7A,24,a0)
a0=A.I()
a0.r=D.YM.gp(0)
d.ad(D.eiR,5,a0)
a0=A.I()
a0.r=D.YM.gp(0)
d.ad(D.eiV,3.4,a0)
a0=A.I()
a0.r=D.YM.gp(0)
d.ad(D.eiU,2.4,a0)
for(a0=x.v,r=0;r<3;++r,f=u){u=A.a([],a0)
q=new A.aF(f.r,B.ag,g,g,u)
u.push(new A.aY(-60,420))
for(f=372+r*12,t=60+r*20,p=r*2,o=14-r*3,n=-60;n<=510;n+=8){m=new A.aq(n,f+Math.sin(n/t+p)*o+Math.sin(n/23+r)*3)
u.push(m)
l=q.f
if(l!=null)m.bx(l)
m=q.e
if(m!=null)m.a.delete()
q.e=null}f=new A.aq(510,470)
u.push(f)
t=q.f
if(t!=null)f.bx(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.aq(-60,470)
u.push(f)
t=q.f
if(t!=null)f.bx(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.bt()
u.push(f)
u=q.f
if(u!=null)f.bx(u)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=[D.bdG,D.bfG,D.bls][r]
u=$.S()
t=new A.ao(B.O,B.M,B.S,B.T,B.R)
t.r=f.gp(0)
s=t.G()
f=q.e
a3.drawPath((f==null?q.e=new A.cd(q.gbu().a.snapshot()):f).a,s)
s.delete()}for(k=0;k<4;++k){n=D.csV[k]
j=384+B.o.F(n,11)
f=n-2
a0=j-24
u=new A.ao(B.O,B.M,B.S,B.T,B.R)
u.b=B.a9
u.c=2.4
u.r=D.Z1.gp(0)
u.d=B.by
u.e=B.dQ
s=u.G()
a3.drawLine.apply(a3,[n,j,f,a0,s])
s.delete()
f=A.bK(new A.t(f,j-27),11,46)
u=new A.ao(B.O,B.M,B.S,B.T,B.R)
u.r=D.Z1.gp(0)
s=u.G()
a3.drawOval(A.bG(f),s)
s.delete()
a0=A.bK(new A.t(n-12,a0),8,24)
f=new A.ao(B.O,B.M,B.S,B.T,B.R)
f.r=D.Z1.gp(0)
s=f.G()
a3.drawOval(A.bG(a0),s)
s.delete()}for(v=0;v<9;++v){f=B.o.F(v,3)
a0=B.o.F(v,4)
u=new A.ao(B.O,B.M,B.S,B.T,B.R)
u.r=D.bf9.j(0.8).gp(0)
s=u.G()
a3.drawCircle(20+v*52+f*7,400+a0*5,1.2,s)
s.delete()}f=A.I()
f.sam(A.jx(D.ehu,D.ehw,D.d_L,B.D7,B.x,g))
d.aP(new A.a3(-200,412,650,1300),f)
i=new A.e6()
i.cX(21)
for(v=0;v<260;++v){f=i.ag()
j=420+i.ag()*480
a0=i.ag()
u=j/900+0.4
u=A.bK(new A.t(f*450,j),1+i.ag()*2*u,1.5+a0*4*u)
f=i.h6()?B.c:B.w
a0=new A.ao(B.O,B.M,B.S,B.T,B.R)
a0.r=f.j(0.06+i.ag()*0.06).gp(0)
s=a0.G()
a3.drawOval(A.bG(u),s)
s.delete()}J.bl(a3.save())
a3.translate(225,590)
d.p9(0,1,0.34)
f=A.I()
f.sam(A.tt(B.I,250,A.a([D.bmk,D.bg1,D.boa],a1),A.a([0,0.8,1],x.n),B.x,g,g,0))
d.ad(B.I,250,f)
a3.restore()
for(v=0;v<40;++v){n=i.ag()*450
j=640+i.ag()*260
f=i.ag()
a0=A.ar(D.agV,D.beE,i.ag())
a0.toString
for(f=j-(6+f*10),h=-1;h<=1;++h){$.S()
a1=new A.ao(B.O,B.M,B.S,B.T,B.R)
a1.b=B.a9
a1.c=1.3
a1.r=a0.gp(0)
a1.d=B.by
a1.e=B.dQ
s=a1.G()
a3.drawLine.apply(a3,[n+h*2,j,n+h*5,f+Math.abs(h)*3,s])
s.delete()}}C.i_a(d)
for(k=0;k<3;++k)C.i2l(d,D.az_[k])
C.i2a(d,D.eiL)
for(n=118;n<190;n+=11){f=B.o.F(n,3)
a0=B.o.F(n,4)
$.S()
a1=new A.ao(B.O,B.M,B.S,B.T,B.R)
a1.b=B.a9
a1.c=2.4
a1.r=D.YY.gp(0)
a1.d=B.by
a1.e=B.dQ
s=a1.G()
a3.drawLine.apply(a3,[n,452+f,n+1,436+a0,s])
s.delete()}d.bo(D.ehU,D.eib,C.iw(D.bfn,1.6))
a3.restore()
return e.ni()},
i_a(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.S().r,e=x.v,d=new A.aF(f,B.ag,g,g,A.a([],e))
d.D(new A.aY(358,462))
d.D(new A.kN(354,422,370,382,374,332))
d.D(new A.aq(410,332))
d.D(new A.kN(416,382,432,422,428,462))
d.D(new A.bt())
w=A.I()
w.sam(A.jx(new A.t(354,0),new A.t(430,0),D.dtx,U.zt,B.x,g))
a0.aI(d,w)
v=new A.e6()
v.cX(4)
for(w=a0.a,u=0;u<30;++u){t=364+v.ag()*56
s=462-v.ag()*126
r=v.ag()
q=v.ag()
p=B.w.j(0.18)
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.b=B.a9
o.c=1.1
o.r=p.gp(0)
o.d=B.by
o.e=B.dQ
n=o.G()
w.drawLine.apply(w,[t,s,t+r*3-1.5,s+8+q*12,n])
n.delete()}for(m=0;m<6;++m){l=D.daL[m]
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
j.push(new A.c5(o,k,r,p))
q=new A.ao(B.O,B.M,B.S,B.T,B.R)
q.b=B.a9
q.c=8
q.r=D.afj.gp(0)
q.d=B.by
q.e=B.dQ
n=q.G()
q=i.gbu().a.snapshot()
w.drawPath((i.e=new A.cd(q)).a,n)
n.delete()
for(h=0;h<6;++h){q=v.ag()
o=v.ag()
k=v.ag()
j=new A.ao(B.O,B.M,B.S,B.T,B.R)
j.r=A.ar(D.bff,D.blr,v.ag()).j(0.92).gp(0)
n=j.G()
w.drawCircle(r+(q*36-18),p+(o*18-14),8+k*7,n)
n.delete()}r+=0
q=new A.ao(B.O,B.M,B.S,B.T,B.R)
q.b=B.a9
q.c=1.2
q.r=D.YY.gp(0)
q.d=B.by
q.e=B.dQ
n=q.G()
w.drawLine.apply(w,[r,p+8,r,p+22,n])
n.delete()
p=A.bK(new A.t(r,p+28),13,7)
r=new A.ao(B.O,B.M,B.S,B.T,B.R)
r.r=D.bmC.gp(0)
n=r.G()
w.drawOval(A.bG(p),n)
n.delete()}},
i2l(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b4.a,a5=b4.b,a6=b4.c,a7=b4.d,a8=a6*0.5,a9=A.bK(new A.t(a4,a5+2),a8,a6*2.8),b0=B.w.j(0.3),b1=$.S(),b2=A.I()
b2.r=b0.gp(0)
b3.dQ(a9,b2)
b1=b1.r
b2=x.v
w=new A.aF(b1,B.ag,a3,a3,A.a([],b2))
a9=a4-a6
b0=a5-a7
w.D(new A.aY(a9,b0))
w.D(new A.aq(a9,a5))
v=a4+a6
w.D(new A.c5(a4,a5+a6*0.22,v,a5))
w.D(new A.aq(v,b0))
w.D(new A.bt())
u=A.I()
u.sam(A.jx(new A.t(a9,0),new A.t(v,0),D.daR,U.zt,B.x,a3))
b3.aI(w,u)
t=new A.e6()
t.cX(B.o.V(a4*7))
v=b3.a
J.bl(v.save())
b3.mK(0,w)
for(s=0;s<40;++s){r=a9+t.ag()*a6*2
q=b0+t.ag()*a7
u=t.ag()
p=t.ag()
o=B.w.j(0.14)
n=new A.ao(B.O,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=1
n.r=o.gp(0)
n.d=B.by
n.e=B.dQ
m=n.G()
v.drawLine.apply(v,[r,q,r+4+u*5,q+p*2-1,m])
m.delete()}u=b0+5
p=a6*2
o=D.agR.j(0.75)
n=A.I()
n.r=o.gp(0)
b3.aP(new A.a3(a9,u,a9+p,u+7),n)
for(u=a6/5,o=b0+12,n=b0+20,l=a9+2,k=0;k<B.k.bf(u);++k){j=l+k*10
i=A.a([],b2)
h=new A.aF(b1,B.ag,a3,a3,i)
i.push(new A.aY(j,o))
i.push(new A.aq(j+5,n))
i.push(new A.aq(j+10,o))
i.push(new A.bt())
i=new A.ao(B.O,B.M,B.S,B.T,B.R)
i.r=D.lx.j(0.85).gp(0)
m=i.G()
i=h.gbu().a.snapshot()
v.drawPath((h.e=new A.cd(i)).a,m)
m.delete()}u=A.a([],b2)
g=new A.aF(b1,B.ag,a3,a3,u)
b1=a5-8
g.D(new A.aY(a9,b1))
for(p/=6,k=0;k<=B.k.bf(p);++k){o=(k&1)===0?0:-5
o=new A.aq(a9+k*6,b1+o)
u.push(o)
n=g.f
if(n!=null)o.bx(n)
o=g.e
if(o!=null)o.a.delete()
g.e=null}b3.aI(g,C.iw(D.agR.j(0.7),1.6))
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
b1.D(new A.c5(p,a5-a7*0.82,o,i))
b1.D(new A.aq(o,l))
b1.D(new A.bt())
l=A.I()
l.r=D.ah1.gp(0)
b3.aI(b1,l)
l=A.I()
l.r=D.ah1.gp(0)
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
f.D(new A.c5(a4-a8,n,a4,u))
f.D(new A.c5(a4+a8,n,p,i))
f.D(new A.c5(a4,b0+a6*0.34,o,i))
f.D(new A.bt())
b0=A.I()
n=a6*1.4
b0.sam(A.jx(new A.t(a4-n,0),new A.t(a4+n,0),D.deg,U.zt,B.x,a3))
b3.aI(f,b0)
J.bl(v.save())
b3.mK(0,f)
for(a8=p-o,s=0;s<70;++s){e=s/69
b0=Math.sin(e*3.141592653589793)
p=t.ag()
n=(t.h6()?B.w:D.beN).j(0.16)
h=new A.ao(B.O,B.M,B.S,B.T,B.R)
h.b=B.a9
h.c=0.9
h.r=n.gp(0)
h.d=B.by
h.e=B.dQ
m=h.G()
v.drawLine.apply(v,[a4+(p-0.5)*3,u,o+a8*e,i+b0*a6*0.3,m])
m.delete()}for(k=1;k<5;++k){d=u+l*k/4.6
a0=b1*k/4.6
b0=A.a([],b2)
p=new A.aF(a9,B.ag,a3,a3,b0)
n=d+2
b0.push(new A.aY(a4-a0,n))
b0.push(new A.c5(a4,d+7+k*1.5,a4+a0,n))
b0=B.w.j(0.22)
n=new A.ao(B.O,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=1.2
n.r=b0.gp(0)
n.d=B.by
n.e=B.dQ
m=n.G()
b0=p.gbu().a.snapshot()
v.drawPath((p.e=new A.cd(b0)).a,m)
m.delete()}v.restore()
for(s=0;s<46;++s){e=s/45
a1=o+a8*e
a2=i+Math.sin(e*3.141592653589793)*a6*0.3
b0=t.ag()
b1=t.ag()
p=new A.ao(B.O,B.M,B.S,B.T,B.R)
p.b=B.a9
p.c=1.1
p.r=D.blO.gp(0)
p.d=B.by
p.e=B.dQ
m=p.G()
v.drawLine.apply(v,[a1,a2,a1+(b0-0.5)*2,a2+3+b1*4,m])
m.delete()}a8=new A.aF(a9,B.ag,a3,a3,A.a([],b2))
a9=u+4
a8.D(new A.aY(a4-2.5,a9))
a8.D(new A.aq(a4,u-7))
a8.D(new A.aq(a4+2.5,a9))
a8.D(new A.bt())
a9=A.I()
a9.r=D.bi5.gp(0)
b3.aI(a8,a9)},
i2a(d,e){var w,v,u,t,s,r,q,p,o
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=d.a,r=0;r<2;++r){q=w+D.dnk[r]
$.S()
p=new A.ao(B.O,B.M,B.S,B.T,B.R)
p.b=B.a9
p.c=3
p.r=D.YY.gp(0)
p.d=B.by
p.e=B.dQ
o=p.G()
s.drawLine.apply(s,[q,u,q,t,o])
o.delete()}u=A.bK(e.a7(0,I.aKl),24,36)
t=$.S()
s=A.I()
s.r=D.bqD.gp(0)
d.dQ(u,s)
t=new A.aF(t.r,B.ag,null,null,A.a([],x.v))
s=w-24
u=v-30
t.D(new A.aY(s,u))
t.D(new A.aq(w,v-54))
t.D(new A.aq(w+24,u))
t.D(new A.c5(w,v-24,s,u))
t.D(new A.bt())
u=A.I()
u.r=D.afZ.gp(0)
d.aI(t,u)},
i1v(d){switch(B.o.F(d,8)){case 0:return D.aZC
case 1:return D.aZA
case 2:return D.aZz
case 3:return D.aZy
case 4:return D.aZB
case 5:return D.aZD
case 6:return D.hoY
default:return D.hoX}},
RY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.boi()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a7B:j
w.as=k==null?D.DP:k
C.hur(d,e,p,C.i1v(m),w,s,m,l)},
hvP(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bS2:function bS2(){var _=this
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
t3:function t3(d,e,f,g,h,i,j,k,l,m){var _=this
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
boi:function boi(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
alu:function alu(){this.b=this.a=null},
aVL:function aVL(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bRV:function bRV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRW:function bRW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRX:function bRX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRY:function bRY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRZ:function bRZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bS_:function bS_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bS0:function bS0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bS1:function bS1(){},
bRU:function bRU(d){this.a=d},
aff:function aff(d,e){this.a=d
this.b=e},
add:function add(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Mv(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bQE(s)
s.bzO(d)
return s},
GB(d,e,f,g,h,i,j){var w,v=A.T(g).k("Z<1>")
v=A.df(new A.Z(g,new C.fqB(f),v),v.k("M.E"))
w=A.C(v,A.a7(v).k("cs.E"))
B.d.e_(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.d5(w,0,A.dC(3,"count",x.S),A.T(w).c))
B.d.e_(v,d)
return new C.ln(e,v,B.d.cp(v,f),h,i,"tree",j)},
imP(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.U(c0,x.cg),c2=new C.h_A(c1),c3=x.s,c4=A.a([],c3)
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
if(h===D.wd)g="father"
else g=h===D.oi?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Z(t,new C.h_C(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.GB(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Z(w,new C.h_D(i,m),p),o)
B.d.e_(d,c6)
c2.$2(b4,new C.ln("True or false: "+h+" is the "+g+" of "+l+".",D.aA2,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.ln("True or false: "+B.a.i(B.d.gI(d).b)+" is the "+g+" of "+l+".",D.aA2,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.FQ(m)
h=a0.length
if(h!==0){a1=a0[c6.ap(h)]
h=B.a.i(a1.b)
f=A.C(new A.Z(t,new C.h_E(l,a0,c5),v),s)
e=a1.c
if(e===D.wd)e="son"
else e=e===D.oi?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.GB(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.eD([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mr(a5,a5.r,f.k("mr<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.GB(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gI(a0).b)
f=A.a([],c3)
for(e=A.T(a0),a2=e.k("jd<1>"),a3=new A.jd(a0,1,b3,a2),a3.oc(a0,1,b3,e.c),a3=new A.bT(a3,a3.gL(0),a2.k("bT<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.GB(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gI(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gI(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.aqA(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Z(t,new C.h_F(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.GB(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Z(t,new C.h_G(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wd
if(e)a2=b7
else a2=f===D.oi?b8:b9
if(e)f=b7
else f=f===D.oi?b8:b9
c2.$2("grand",C.GB(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aLV(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.ap(k)].b)
j=A.C(new A.Z(t,new C.h_H(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.GB(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cLw)
h=l+" was born in "+k
c2.$2("place",C.GB(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.d0N)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.GB(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.L)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.GB(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jK(b1,b3,b3)
c2.$2("year",C.GB(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bDi(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Mv(d),l=new A.e6()
l.cX(f)
w=C.imP(m,l,g)
for(v=new A.du(w,w.r,w.e);v.C();)J.heq(v.d,l)
v=A.a7(w).k("cy<1>")
u=A.C(new A.cy(w,v),v.k("M.E"))
B.d.e_(u,l)
t=A.a([],x.J)
s=A.aX(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.b3(u,new C.fDf(n,w))))break
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
if(v<e){v=A.C(D.ay0,x.df)
B.d.e_(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.L)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.huy(o,l))}}else if(!g&&v>3){o=C.huy(D.ay0[l.ap(14)],l)
t[t.length-1-l.ap(3)]=o}return t},
huy(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.e_(w,e)
return new C.ln(d.a,w,B.d.cp(w,v),d.d,d.e,d.f,d.r)},
hzh(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Mv(a2),a1=new A.e6()
a1.cX(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
if(a0.FQ(q).length>=2)u.push(q)}B.d.e_(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.L)(u),++r){n=u[r]
m=a0.FQ(n)
l=A.T(m)
k=new A.jd(m,0,5,l.k("jd<1>"))
k.oc(m,0,5,l.c)
j=k.dn(0)
if(new A.N(j,new C.fRq(),A.T(j).k("N<1,G>")).fK(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.L)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.L)(j),++i)g.push(C.aRv(a0,j[i]))
w.push(new C.att("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.U(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
J.cc(e.c3(0,a0.am0(q),new C.fRr()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cy<1>")
d=A.C(new A.cy(e,t),t.k("M.E"))
B.d.ff(d)
v=A.a([],v)
for(u=A.d5(d,0,A.dC(5,"count",u),A.T(d).c),t=u.$ti,u=new A.bT(u,u.gL(0),t.k("bT<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cE(s)
m.e_(s,a1)
v.push(m.gI(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.L)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.L)(v),++r)s.push(C.aRv(a0,v[r]))
w.push(new C.att("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aPZ(d){return B.d.anq(D.aAw,new C.fzH(d))},
id_(d){return A.p7(new A.Z(D.aAw,new C.fG0(d),x.av))},
bRs(d){return C.hID(d)},
hID(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bRs=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bRs)
case 7:r=f
q=B.a.i(d)
q=A.ev(J.r(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bRs,v)},
Bw(d,e){return C.hIA(d,e)},
hIA(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$Bw=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$Bw)
case 7:r=g
p=B.a.i(d)
o=A.ev(J.r(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.ar("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$Bw)
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
return A.i($async$Bw,v)},
bRr(d,e,f){return C.hIB(d,e,f)},
hIB(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bRr=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bRr)
case 7:r=h
q=B.a.i(d)
q=A.ev(J.r(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bRr,v)},
Bx(d,e,f,g){return C.hIC(d,e,f,g)},
hIC(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$Bx=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$Bx)
case 7:r=i
p=B.a.i(d)
o=A.ev(J.r(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.ar("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$Bx)
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
return A.i($async$Bx,v)},
bFz(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h1A(d,e,f,g){return new C.ak9(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hGJ(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aW(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cv)
while(u.C())w.push(J.k(u.gS(u)))
u=x.N
w=A.d5(w,0,A.dC(4,"count",x.S),u).dn(0)
B.d.v(w,A.bZ(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aK(d.h(0,"c"))
v=v==null?null:B.k.N(v)
v=B.o.E(v==null?0:v,0,3)
u=A.aK(d.h(0,"s"))
u=u==null?null:B.k.N(u)
return C.h1A(w,v,B.o.E(u==null?20:u,5,60),t)},
hfu(d){var w,v,u,t,s,r,q=J.a6(d),p=q.h(d,"id")
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
if(u.b(r))v.push(C.hGJ(A.a2(r,t,s)))}return new C.Mf(p,w,v)},
h9T(d){var w,v=A.a([],x.c)
for(w=J.aW(d.z);w.C();)v.push(C.hfu(w.gS(w)))
return v},
aRv(d,e){var w=e.c===D.oi
if(d.am0(e)===0&&d.FQ(e).length!==0)return w?0:1
if(d.FQ(e).length!==0||d.aqA(e)!=null)return w?2:3
return w?4:5},
hAn(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Mv(a4),a3=new A.e6()
a3.cX(a5)
w=A.a([],x.dT)
v=a2.b
u=A.C(v,x.P)
B.d.e_(u,a3)
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
g=a2.aqA(m)
f=a2.aLV(m)
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
if(k===D.wd)k="father"
else k=k===D.oi?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gI(h).b)+".")}if(j!=null){k=j.c
if(k===D.wd)k="father"
else k=k===D.oi?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e_(l,a3)
B.d.aZ(l,new C.h0_())
d=B.a.i(m.b)
a0=A.C(new A.Z(s,new C.h00(d),o),n)
B.d.e_(a0,a3)
k=A.a([d],t)
i=A.T(a0)
a1=new A.jd(a0,0,3,i.k("jd<1>"))
a1.oc(a0,0,3,i.c)
B.d.v(k,a1)
B.d.e_(k,a3)
a1=C.aRv(a2,m)
i=new A.jd(l,0,4,p)
i.oc(l,0,4,r)
w.push(new C.b9N(d,a1,i.dn(0),k))
if(w.length>=5)break}return w},
hs6(d){return B.a.t(d,"married to")||B.a.t(d," of ")||B.a.a0(d,"My ")?1:0},
hzt(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Mv(a4),a3=new A.e6()
a3.cX(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
if(a2.FQ(q).length>=2)u.push(q)}B.d.e_(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.L)(u),++r){l=u[r]
k=a2.FQ(l)
j=A.T(k)
i=new A.jd(k,0,4,j.k("jd<1>"))
i.oc(k,0,4,j.c)
h=i.dn(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.L)(t),++g){q=t[g]
if(q.a!==j&&!B.d.b3(h,new C.fRW(q))&&q.d!==j)i.push(q)}B.d.e_(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.jd(i,0,k,m)
j.oc(i,0,k,n)
f=j.dn(0)
j=B.a.i(l.b)
k=C.aRv(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.L)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.L)(h),++g)e.push(C.aRv(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.L)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.L)(f),++g)a0.push(C.aRv(a2,f[g]))
w.push(new C.a9l(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
ln:function ln(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bQE:function bQE(d){this.b=d
this.c=$},
bQF:function bQF(){},
bQG:function bQG(d){this.a=d},
fqB:function fqB(d){this.a=d},
h_A:function h_A(d){this.a=d},
h_B:function h_B(){},
h_C:function h_C(d){this.a=d},
h_D:function h_D(d,e){this.a=d
this.b=e},
h_E:function h_E(d,e,f){this.a=d
this.b=e
this.c=f},
h_z:function h_z(d,e){this.a=d
this.b=e},
h_F:function h_F(d){this.a=d},
h_G:function h_G(d){this.a=d},
h_H:function h_H(d,e,f){this.a=d
this.b=e
this.c=f},
h_y:function h_y(d,e){this.a=d
this.b=e},
fDf:function fDf(d,e){this.a=d
this.b=e},
att:function att(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fRq:function fRq(){},
fRr:function fRr(){},
zh:function zh(d,e,f){this.a=d
this.b=e
this.c=f},
fzH:function fzH(d){this.a=d},
fG0:function fG0(d){this.a=d},
ak9:function ak9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLE:function bLE(){},
Mf:function Mf(d,e,f){this.a=d
this.b=e
this.c=f},
b9N:function b9N(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h0_:function h0_(){},
h00:function h00(d){this.a=d},
a9l:function a9l(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fRW:function fRW(d){this.a=d},
bh0:function bh0(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
afd:function afd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
ajo:function ajo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ajp:function ajp(d,e,f,g,h){var _=this
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
_.a8$=h
_.c=_.a=null},
bJO:function bJO(d){this.a=d},
bJJ:function bJJ(){},
bJP:function bJP(){},
bJH:function bJH(){},
bJI:function bJI(){},
bJN:function bJN(d){this.a=d},
bJK:function bJK(d,e){this.a=d
this.b=e},
bJM:function bJM(d,e){this.a=d
this.b=e},
bJL:function bJL(d,e){this.a=d
this.b=e},
bJG:function bJG(d){this.a=d},
bc9:function bc9(d,e){this.b=d
this.a=e},
Q8:function Q8(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAQ:function aAQ(d,e,f){this.b=d
this.c=e
this.a=f},
azg:function azg(d,e,f){this.a=d
this.b=e
this.c=f},
au4:function au4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
au5:function au5(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.cN$=e
_.b7$=f
_.c=_.a=null},
cnG:function cnG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cnH:function cnH(d){this.a=d},
cnF:function cnF(d){this.a=d},
cnI:function cnI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cnJ:function cnJ(){},
cnK:function cnK(d,e){this.a=d
this.b=e},
cnL:function cnL(){},
cnM:function cnM(d){this.a=d},
cnC:function cnC(d){this.a=d},
cnD:function cnD(d,e){this.a=d
this.b=e},
cnE:function cnE(d,e,f){this.a=d
this.b=e
this.c=f},
cnx:function cnx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cnz:function cnz(d,e){this.a=d
this.b=e},
cnA:function cnA(d,e){this.a=d
this.b=e},
cny:function cny(d,e){this.a=d
this.b=e},
cnw:function cnw(){},
cnB:function cnB(){},
bbF:function bbF(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cN2:function cN2(){},
ay0:function ay0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ay1:function ay1(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cCA:function cCA(d){this.a=d},
cCz:function cCz(d){this.a=d},
cCI:function cCI(d,e){this.a=d
this.b=e},
cCJ:function cCJ(d,e){this.a=d
this.b=e},
cCK:function cCK(d){this.a=d},
cCH:function cCH(d){this.a=d},
cCL:function cCL(d){this.a=d},
cCM:function cCM(d,e){this.a=d
this.b=e},
cCN:function cCN(){},
cCO:function cCO(d){this.a=d},
cCC:function cCC(d){this.a=d},
cCD:function cCD(d,e){this.a=d
this.b=e},
cCB:function cCB(d,e){this.a=d
this.b=e},
cCE:function cCE(){},
cCF:function cCF(){},
cCG:function cCG(d,e){this.a=d
this.b=e},
az1:function az1(){},
aGg:function aGg(){},
h7L(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bqA((w-450*u)/2,(v-900*u)/2,u)},
af1:function af1(){},
f3k:function f3k(d){this.a=d},
aK4:function aK4(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fdq:function fdq(d){this.a=d},
alk:function alk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
all:function all(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.pZ$=f
_.LI$=g
_.amx$=h
_.bw$=i
_.a8$=j
_.c=_.a=null},
bRq:function bRq(d){this.a=d},
bRp:function bRp(){},
bRn:function bRn(d){this.a=d},
bRl:function bRl(){},
bRm:function bRm(d){this.a=d},
bRi:function bRi(d,e){this.a=d
this.b=e},
bRj:function bRj(){},
bRk:function bRk(d){this.a=d},
bRo:function bRo(d,e){this.a=d
this.b=e},
bRh:function bRh(d){this.a=d},
bsg:function bsg(d,e){this.b=d
this.a=e},
f3l:function f3l(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f3m:function f3m(d,e,f){this.a=d
this.b=e
this.c=f},
f3n:function f3n(d,e,f){this.a=d
this.b=e
this.c=f},
f3o:function f3o(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3p:function f3p(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f3q:function f3q(){},
ali:function ali(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alj:function alj(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.pZ$=f
_.LI$=g
_.amx$=h
_.bw$=i
_.a8$=j
_.c=_.a=null},
bR3:function bR3(){},
bRe:function bRe(d,e){this.a=d
this.b=e},
bRf:function bRf(d){this.a=d},
bRg:function bRg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRa:function bRa(){},
bR9:function bR9(d,e){this.a=d
this.b=e},
bRb:function bRb(d,e){this.a=d
this.b=e},
bRc:function bRc(){},
bRd:function bRd(d){this.a=d},
bR5:function bR5(d){this.a=d},
bR6:function bR6(d){this.a=d},
bR7:function bR7(d){this.a=d},
bR4:function bR4(d,e){this.a=d
this.b=e},
bR8:function bR8(d){this.a=d},
biQ:function biQ(d,e){this.b=d
this.a=e},
dol:function dol(){},
a1n:function a1n(d,e){this.a=d
this.b=e},
ale:function ale(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alf:function alf(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.pZ$=e
_.LI$=f
_.amx$=g
_.bw$=h
_.a8$=i
_.c=_.a=null},
bQQ:function bQQ(d){this.a=d},
bQP:function bQP(){},
bQO:function bQO(){},
bQI:function bQI(){},
bQJ:function bQJ(){},
bQN:function bQN(d,e,f){this.a=d
this.b=e
this.c=f},
bQM:function bQM(d){this.a=d},
bQK:function bQK(d,e){this.a=d
this.b=e},
bQL:function bQL(d){this.a=d},
bif:function bif(d,e){this.b=d
this.a=e},
aAT:function aAT(){},
bfN:function bfN(){},
aAV:function aAV(){},
bfO:function bfO(){},
aAW:function aAW(){},
bfP:function bfP(){},
ul(d,e,f,g,h){var w,v,u=null,t=A.m(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.j4,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.v(v,A.a([A.X(g,h,u,u,u,20),B.ad],w))
v.push(A.d(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.p(u,A.B(v,B.m,u,B.e,B.P,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.n),u,u,u,u,B.NJ,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a3)},
hgi(d,e,f,g,h,i,j){return new C.alg(i,h,d,j,e,f,g,null)},
a5S:function a5S(d,e){this.c=d
this.a=e},
bin:function bin(d){this.a=d},
tr:function tr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bQH:function bQH(d){this.a=d},
I_:function I_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Vy:function Vy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bl8:function bl8(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
dZ8:function dZ8(d,e){this.a=d
this.b=e},
dZ9:function dZ9(d){this.a=d},
dZa:function dZa(d,e){this.a=d
this.b=e},
dZ6:function dZ6(d){this.a=d},
dZ7:function dZ7(d){this.a=d},
dZ5:function dZ5(d){this.a=d},
dZ3:function dZ3(d){this.a=d},
dZ4:function dZ4(d){this.a=d},
dZ2:function dZ2(d,e){this.a=d
this.b=e},
dZb:function dZb(d){this.a=d},
dZc:function dZc(d,e){this.a=d
this.b=e},
dZd:function dZd(d,e){this.a=d
this.b=e},
dZe:function dZe(d,e){this.a=d
this.b=e},
dZh:function dZh(d,e){this.a=d
this.b=e},
dZi:function dZi(d,e){this.a=d
this.b=e},
dZj:function dZj(d,e){this.a=d
this.b=e},
dZk:function dZk(d,e){this.a=d
this.b=e},
dZl:function dZl(d,e){this.a=d
this.b=e},
dZm:function dZm(d,e,f){this.a=d
this.b=e
this.c=f},
dZn:function dZn(d,e){this.a=d
this.b=e},
dZo:function dZo(d,e){this.a=d
this.b=e},
dZf:function dZf(d){this.a=d},
dZg:function dZg(d){this.a=d},
a_e:function a_e(d,e){this.a=d
this.b=e},
alg:function alg(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
alh:function alh(d){var _=this
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
bR1:function bR1(d){this.a=d},
bR2:function bR2(d){this.a=d},
bR0:function bR0(d){this.a=d},
bQS:function bQS(d){this.a=d},
bQT:function bQT(d){this.a=d},
bQR:function bQR(d){this.a=d},
bQY:function bQY(d,e,f){this.a=d
this.b=e
this.c=f},
bQZ:function bQZ(d){this.a=d},
bQV:function bQV(d,e){this.a=d
this.b=e},
bQW:function bQW(d,e,f){this.a=d
this.b=e
this.c=f},
bR_:function bR_(){},
bQX:function bQX(d,e){this.a=d
this.b=e},
bQU:function bQU(d){this.a=d},
Tc:function Tc(d,e){this.c=d
this.a=e},
ald:function ald(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bQs:function bQs(d){this.a=d},
bQt:function bQt(d){this.a=d},
bQD:function bQD(){},
bQC:function bQC(d,e,f){this.a=d
this.b=e
this.c=f},
bQx:function bQx(d,e){this.a=d
this.b=e},
bQw:function bQw(d,e){this.a=d
this.b=e},
bQy:function bQy(d){this.a=d},
bQz:function bQz(d,e){this.a=d
this.b=e},
bQA:function bQA(d,e){this.a=d
this.b=e},
bQv:function bQv(d,e){this.a=d
this.b=e},
bQB:function bQB(d,e,f){this.a=d
this.b=e
this.c=f},
bQu:function bQu(d,e){this.a=d
this.b=e},
ibr(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aig(a6),a5=a4.length
if(a5===0)return""
w=A.U(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bC(new A.V(Date.now(),0,!1))
s=new C.fCN(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("Z<1>"),q=q.k("cO<1,n>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.yG)m.push(l===D.wd?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.jK(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jK(h,a2,a2)-A.jK(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.C(new A.cO(new A.Z(a4,new C.fCL(u,f),p),new C.fCM(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aG(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aG(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.au(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
ibs(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aig(a0),d=e.length
if(d===0)return""
w=x.N
v=A.U(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fCS(v,e)
q=new C.fCQ(v)
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
for(l=B.d.gaf(e),k=new A.f2(l,new C.fCR(p,m));k.C();t=f){j=l.gS(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.aj(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aG(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hXC(d,e,f,g){var w,v,u=C.ibt(d,e)
if(u<=0||f.length<=u)return new A.aeF(!1,D.D8,f)
if(g.t(0,e.a))return new A.aeF(!1,D.D8,f)
w=A.T(f).c
v=A.d5(f,0,A.dC(u,"count",x.S),w).dn(0)
return new A.aeF(!0,A.d5(f,u,null,w).dn(0),v)},
hXD(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aig(d3),d2=d1.length
if(d2===0)return D.hm3
w=x.N
v=A.U(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.c3(0,t.a,new C.ddR(t))}s=new C.de7(v)
d2=x.dy
r=A.U(w,d2)
q=new C.de_(r)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.ddZ(r)
l=A.U(w,x.do)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cc(l.c3(0,k,new C.ddS()),o)}h=new C.ddY(s)
g=new C.ddX(l,r)
p=v.$ti.k("bd<2>")
o=p.k("Z<M.E>")
f=A.C(new A.Z(new A.bd(v,p),new C.ddT(h),o),o.k("M.E"))
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
a9=new C.de5(new C.de1(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.U(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.du(v,v.r,v.e),j=a2.galu(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.eD([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.M(0,i))break}if(h.$1(b0)&&a2.aj(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.p7(J.dJ(i==null?B.Y:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.U(w,x.dO)
b5=A.a([],x.M)
b6=A.U(w,d2)
b7=new C.ddQ(a2,new C.de6(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.L)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.du(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cy<1>")
d2=A.C(new A.cy(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.Ga(o,new A.t(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Kp(c5.a,new A.t(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cy<1>")
d2=A.C(new A.cy(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bQ(0,new C.ddU(c6,b4))
for(d2=new A.cD(a4,a4.$ti.k("cD<1,2>")).gaf(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aW(c7.b);j.C();){i=j.gS(j)
if(b6.aj(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.t(d0,b4.h(0,i).b.b))}}for(j=B.d.gaf(b5),i=new A.f2(j,new C.ddV(c8));i.C();)o.push(j.gS(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.ddW())
c6.push(new C.aK_(new A.t(c9,b4.h(0,c8).b.b+112),B.I,!1,o))}return new C.bfT(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hvd(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(d)
return w==null?null:w.b[1]},
hpm(d,e,f,g,h,i,j,k,l,m,n){return new C.a_r(k,f,j,e,l,n,m,d,g,h,i,null)},
aCS(d,e,f,g,h,i,j){return new C.bjG(i,d,e,f,j,h,g,null)},
aqh:function aqh(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEp:function aEp(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e_O:function e_O(d){this.a=d},
e_N:function e_N(d){this.a=d},
e_Q:function e_Q(d,e){this.a=d
this.b=e},
e_R:function e_R(d,e){this.a=d
this.b=e},
e_S:function e_S(d){this.a=d},
e_M:function e_M(d,e){this.a=d
this.b=e},
e_P:function e_P(d){this.a=d},
e_U:function e_U(d){this.a=d},
e_T:function e_T(d,e){this.a=d
this.b=e},
aqb:function aqb(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEm:function aEm(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e_e:function e_e(d){this.a=d},
e_c:function e_c(d){this.a=d},
e_d:function e_d(d){this.a=d},
e_f:function e_f(d,e){this.a=d
this.b=e},
e_9:function e_9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZB:function dZB(d){this.a=d},
dZC:function dZC(d,e){this.a=d
this.b=e},
dZT:function dZT(d){this.a=d},
dZR:function dZR(d){this.a=d},
dZS:function dZS(d,e){this.a=d
this.b=e},
dZU:function dZU(d){this.a=d},
dZV:function dZV(d,e){this.a=d
this.b=e},
e_8:function e_8(d,e){this.a=d
this.b=e},
dZQ:function dZQ(d){this.a=d},
dZP:function dZP(d){this.a=d},
dZO:function dZO(d,e){this.a=d
this.b=e},
e_5:function e_5(){},
e_6:function e_6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e_4:function e_4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dZZ:function dZZ(d){this.a=d},
e__:function e__(d,e,f){this.a=d
this.b=e
this.c=f},
dZY:function dZY(d,e){this.a=d
this.b=e},
e_0:function e_0(d,e){this.a=d
this.b=e},
dZW:function dZW(d,e){this.a=d
this.b=e},
dZX:function dZX(){},
e_1:function e_1(d,e){this.a=d
this.b=e},
e_2:function e_2(d){this.a=d},
e_3:function e_3(d,e){this.a=d
this.b=e},
e_7:function e_7(d,e){this.a=d
this.b=e},
dZp:function dZp(d,e){this.a=d
this.b=e},
dZq:function dZq(d,e){this.a=d
this.b=e},
e_h:function e_h(d,e,f){this.a=d
this.b=e
this.c=f},
e_b:function e_b(d,e,f){this.a=d
this.b=e
this.c=f},
e_a:function e_a(d){this.a=d},
dZr:function dZr(d){this.a=d},
dZs:function dZs(d){this.a=d},
dZt:function dZt(){},
dZu:function dZu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZy:function dZy(d,e){this.a=d
this.b=e},
dZx:function dZx(d,e){this.a=d
this.b=e},
dZw:function dZw(d){this.a=d},
dZz:function dZz(d,e){this.a=d
this.b=e},
dZv:function dZv(d){this.a=d},
e_g:function e_g(d){this.a=d},
dZL:function dZL(){},
dZM:function dZM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZK:function dZK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZG:function dZG(d,e,f){this.a=d
this.b=e
this.c=f},
dZF:function dZF(d,e,f){this.a=d
this.b=e
this.c=f},
dZD:function dZD(d,e){this.a=d
this.b=e},
dZH:function dZH(d){this.a=d},
dZI:function dZI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZE:function dZE(d,e){this.a=d
this.b=e},
dZJ:function dZJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZN:function dZN(d,e){this.a=d
this.b=e},
e_o:function e_o(){},
e_p:function e_p(d,e){this.a=d
this.b=e},
e_q:function e_q(d){this.a=d},
e_r:function e_r(d,e){this.a=d
this.b=e},
e_k:function e_k(d){this.a=d},
e_i:function e_i(d,e){this.a=d
this.b=e},
e_l:function e_l(d,e){this.a=d
this.b=e},
e_m:function e_m(d,e){this.a=d
this.b=e},
e_n:function e_n(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e_s:function e_s(d){this.a=d},
e_j:function e_j(d){this.a=d},
dZA:function dZA(d){this.a=d},
bfR:function bfR(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ddO:function ddO(d){this.a=d},
ddN:function ddN(d,e){this.a=d
this.b=e},
ddP:function ddP(d){this.a=d},
ddM:function ddM(d,e){this.a=d
this.b=e},
fCN:function fCN(d,e){this.a=d
this.b=e},
fCO:function fCO(d){this.a=d},
fCP:function fCP(){},
fCL:function fCL(d,e){this.a=d
this.b=e},
fCM:function fCM(){},
fCS:function fCS(d,e){this.a=d
this.b=e},
fCT:function fCT(d){this.a=d},
fCU:function fCU(){},
fCQ:function fCQ(d){this.a=d},
fCR:function fCR(d,e){this.a=d
this.b=e},
Kp:function Kp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ga:function Ga(d,e){this.a=d
this.b=e},
bfT:function bfT(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ddR:function ddR(d){this.a=d},
de7:function de7(d){this.a=d},
de_:function de_(d){this.a=d},
de0:function de0(){},
ddZ:function ddZ(d){this.a=d},
ddS:function ddS(){},
ddY:function ddY(d){this.a=d},
ddX:function ddX(d,e){this.a=d
this.b=e},
ddT:function ddT(d){this.a=d},
de1:function de1(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
de2:function de2(d){this.a=d},
de3:function de3(d){this.a=d},
de4:function de4(){},
de5:function de5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
de6:function de6(){},
ddQ:function ddQ(d,e,f,g,h,i,j,k,l,m){var _=this
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
ddU:function ddU(d,e){this.a=d
this.b=e},
ddV:function ddV(d){this.a=d},
ddW:function ddW(){},
aK_:function aK_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bfU:function bfU(d,e){this.b=d
this.a=e},
de8:function de8(){},
de9:function de9(d){this.a=d},
dea:function dea(d){this.a=d},
deb:function deb(){},
bjH:function bjH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beW:function beW(d,e){this.b=d
this.a=e},
bxC:function bxC(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fje:function fje(d){this.a=d},
bn0:function bn0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eU8:function eU8(d){this.a=d},
eU7:function eU7(d,e){this.a=d
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
aCQ:function aCQ(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
du0:function du0(d,e){this.a=d
this.b=e},
du_:function du_(d){this.a=d},
dtY:function dtY(d){this.a=d},
dtZ:function dtZ(d){this.a=d},
du9:function du9(d){this.a=d},
dua:function dua(d){this.a=d},
du8:function du8(d,e){this.a=d
this.b=e},
dub:function dub(){},
due:function due(d){this.a=d},
du7:function du7(d,e){this.a=d
this.b=e},
dud:function dud(){},
duf:function duf(d){this.a=d},
du6:function du6(d,e){this.a=d
this.b=e},
dug:function dug(d){this.a=d},
du5:function du5(d){this.a=d},
duh:function duh(d){this.a=d},
du4:function du4(d){this.a=d},
dui:function dui(d){this.a=d},
du3:function du3(d){this.a=d},
duj:function duj(d){this.a=d},
du2:function du2(d){this.a=d},
duk:function duk(d){this.a=d},
du1:function du1(d,e){this.a=d
this.b=e},
duc:function duc(d){this.a=d},
adz:function adz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjG:function bjG(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ady:function ady(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bjF:function bjF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dul:function dul(d){this.a=d},
dum:function dum(d,e){this.a=d
this.b=e},
aCR:function aCR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJ1:function aJ1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
adA:function adA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
duv:function duv(d){this.a=d},
G6:function G6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hkg(d){var w=d.T,v=x.N
return w.jm(w,new C.cdi(),v,v)},
hP7(d){var w=d.bD
if(w>=0)return w
return 5},
hki(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hkg(d).h(0,v)
if(w==null||w.length===0)return null
return A.bk(w)},
hkh(d,e){var w=C.hki(d,e)
if(w!=null&&w.ce(new A.V(Date.now(),0,!1)))return!0
return!1},
hP8(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hkg(d),w,w)
u=C.hki(d,e)
t=u!=null&&u.ce(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bS(A.dy(30,0,0,0,0,0).a).a9().ae())
d.T=v},
b0m(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b0m=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lu(t,B.J8),$async$b0m)
case 3:if(l){u=!0
w=1
break}u=A.l7(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.J8,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0m,v)},
cdi:function cdi(){},
hP5(){var w,v=$.oh(),u=J.e0(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ap(32)]
return"FT"+B.d.hn(u)},
IT(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$IT=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$IT)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_family_tree_backup_codes_v1",null,!1,B.bL),$async$IT)
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
a7A(d){return C.hP6(d)},
hP6(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a7A=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$a7A)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hN("ngmy_family_tree_backup_codes_v1",A.H(["codes",d,"savedAt",new A.V(Date.now(),0,!1).a9().ae()],x.N,x.z),!1,!1,B.cG,null),$async$a7A)
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
return A.i($async$a7A,v)},
cdh(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cdh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.IT(),$async$cdh)
case 3:t=m.k0(f),t=t.gaf(t),s=x.f
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
return A.i($async$cdh,v)},
NQ(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$NQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cdh(d),$async$NQ)
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
o=A.dO(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).a9().ae())
r.n(s,t,o)
w=9
return A.b(C.a7A(s),$async$NQ)
case 9:case 8:u=t
w=1
break
case 5:n=C.hP5()
w=10
return A.b(C.IT(),$async$NQ)
case 10:s=f
J.aJ(s,n,A.H(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).a9().ae(),"updatedAt",new A.V(Date.now(),0,!1).a9().ae()],x.N,x.K))
w=11
return A.b(C.a7A(s),$async$NQ)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$NQ,v)},
b0l(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b0l=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.IT(),$async$b0l)
case 3:t=f
for(s=J.dn(t),r=s.gdW(t),r=r.dn(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.r(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a7A(t),$async$b0l)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b0l,v)},
a7B(d,e,f){var w=0,v=A.j(x.H),u
var $async$a7B=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aqg(d,e),$async$a7B)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.NQ(d),$async$a7B)
case 7:w=4
break
case 5:w=8
return A.b(C.b0l(d),$async$a7B)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a7B,v)},
aqa(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aqa=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aqg(f,e),$async$aqa)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c8(),$async$aqa)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.IT(),$async$aqa)
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
return A.i($async$aqa,v)},
b0k(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b0k=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c8(),$async$b0k)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.IT(),$async$b0k)
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
return A.i($async$b0k,v)},
hP9(){var w,v=$.oh(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ap(32)]
return"FT"+B.d.hn(u)},
aqd(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aqd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$aqd)
case 3:if(!g){u=null
w=1
break}t=C.hP9()
w=4
return A.b(A.Vz(),$async$aqd)
case 4:s=g
r=B.dO.aO(B.X.aq(d.f_(),null))
r=B.cJ.gcu().aO(r)
q=e?999:2
J.aJ(s,t,A.H(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).a9().ae()],x.N,x.K))
w=5
return A.b(A.a7C(s),$async$aqd)
case 5:p=e?999:2
u=new A.a0D("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqd,v)},
aqc(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aqc=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Vz(),$async$aqc)
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
return A.b(C.b0k(J.k(l==null?"":l),j),$async$aqc)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.ch.cB(0,B.cF.aO(t))
s=C.hkj(r)}catch(f){q=A.ab(f)
$.am.$1("[family tree qr stash] decode: "+A.w(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dO(A.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a9().ae())
o.n(p,g,l)}w=5
return A.b(A.a7C(p),$async$aqc)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqc,v)},
hkj(d){var w,v,u,t,s=null
try{w=B.X.aM(0,d,s)
if(!x.f.b(w))return s
u=J.r(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hPb(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
h3L(d){var w=0,v=A.j(x.m),u,t,s
var $async$h3L=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aqc(t[1])
w=1
break}u=null
w=1
break}u=C.hkj(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h3L,v)},
hPb(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.de(v,x.f)
u=A.cH(u,new C.cdk(),u.$ti.k("M.E"),x.k)
t=A.a7(u).k("Z<M.E>")
s=A.C(new A.Z(u,new C.cdl(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bk(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.U(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.k0(p),t=t.gaf(t),o=x.B;t.C();){n=t.gS(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.de(l,u)
n=A.cH(n,new C.cdm(),n.$ti.k("M.E"),o)
k=A.a7(n).k("Z<M.E>")
j=A.C(new A.Z(n,new C.cdn(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aqe(h,w,s,r,q)},
aqg(d,e){var w=0,v=A.j(x.y),u,t
var $async$aqg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.NH(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.B0(d),$async$aqg)
case 3:u=t.cL(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqg,v)},
cdt(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cdt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.B0(d),$async$cdt)
case 3:t=s.b6(f,new C.cdu(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.cdv())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cdt,v)},
VA(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$VA=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aqg(e,d),$async$VA)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.NQ(e),$async$VA)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.B0(e),$async$VA)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dJ(r,new C.cdr(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a6(r)
if(t.gan(r)){u=null
w=1
break}t=t.dH(r,new C.cds(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.U(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Lb(e,o),$async$VA)
case 14:n=i
if(J.cL(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.aqe(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$VA,v)},
b0p(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b0p=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.VA(d,e,f,g),$async$b0p)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.GR(A.Kl(q.f_(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0p,v)},
b0o(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b0o=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.VA(d,e,f,g),$async$b0o)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aqd(r,f),$async$b0o)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aH1(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0o,v)},
VB(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$VB=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h3L(a0),$async$VB)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aqa(g.a,d,e,f,s,r),$async$VB)
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
return A.b(C.bCY(e,j),$async$VB)
case 12:case 11:w=13
return A.b(C.ai1(e,j,s),$async$VB)
case 13:h=n.h(0,i)
w=h!=null&&J.cL(h)?14:15
break
case 14:w=16
return A.b(C.Bb(e,i,h),$async$VB)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bqG(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$VB,v)},
aqe:function aqe(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cdp:function cdp(){},
cdq:function cdq(){},
cdo:function cdo(){},
cdk:function cdk(){},
cdl:function cdl(){},
cdm:function cdm(){},
cdn:function cdn(){},
cdu:function cdu(){},
cdv:function cdv(){},
cdr:function cdr(d){this.a=d},
cds:function cds(d){this.a=d},
hcp(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f8(null,x.H)
return A.hH(d,new C.aqf(w,e,g,i,f,h,null),!0,null,x.H)},
ddL(d,e,f,g,h,i,j,k){return new C.bfQ(i,e,k,j,g,f,h,d,null)},
aqf:function aqf(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEo:function aEo(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e_B:function e_B(d){this.a=d},
e_C:function e_C(d,e,f){this.a=d
this.b=e
this.c=f},
e_G:function e_G(d,e){this.a=d
this.b=e},
e_H:function e_H(d){this.a=d},
e_y:function e_y(d){this.a=d},
e_z:function e_z(d,e){this.a=d
this.b=e},
e_A:function e_A(d,e){this.a=d
this.b=e},
e_F:function e_F(d){this.a=d},
e_E:function e_E(d,e){this.a=d
this.b=e},
e_D:function e_D(){},
e_J:function e_J(d){this.a=d},
e_K:function e_K(d,e){this.a=d
this.b=e},
e_I:function e_I(d,e){this.a=d
this.b=e},
dec:function dec(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bfS:function bfS(d,e,f){this.d=d
this.e=e
this.a=f},
acP:function acP(d,e,f){this.c=d
this.d=e
this.a=f},
bfQ:function bfQ(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bfV:function bfV(d,e,f,g,h){var _=this
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
aEn:function aEn(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e_t:function e_t(d,e){this.a=d
this.b=e},
e_u:function e_u(d){this.a=d},
e_v:function e_v(d){this.a=d},
e_w:function e_w(d){this.a=d},
e_x:function e_x(d){this.a=d},
a_N:function a_N(d){this.a=d},
bl9:function bl9(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e_L:function e_L(d,e){this.a=d
this.b=e},
aZU(d,e){return new C.aZT(d,e,null)},
aZT:function aZT(d,e,f){this.c=d
this.d=e
this.a=f},
idW(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b5(d,11)},
ilq(d){return A.bV(B.L,null,new C.fTo(new C.u7(A.Q(d).ax.a===B.J)),d,!0,!0,!0,null,!1,!1,x.N)},
hmd(d,e){return new C.ath(e,d,null)},
aRp(d,e,f,g,h,i,j){var w=C.idW(i)
if(w!=null)return A.bx(e,new A.a4(j,f,new C.a6G(w,!0,null),null),B.ap)
return N.aQL(e,B.bY,f,g,h,i,j)},
lQ:function lQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6G:function a6G(d,e,f){this.c=d
this.d=e
this.a=f},
bkQ:function bkQ(d,e){var _=this
_.e=_.d=$
_.cN$=d
_.b7$=e
_.c=_.a=null},
dM5:function dM5(d){this.a=d},
dM6:function dM6(){},
dM7:function dM7(d,e){this.a=d
this.b=e},
bkP:function bkP(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fTo:function fTo(d){this.a=d},
fTn:function fTn(d,e){this.a=d
this.b=e},
fTm:function fTm(d,e){this.a=d
this.b=e},
fTl:function fTl(d,e){this.a=d
this.b=e},
ath:function ath(d,e,f){this.c=d
this.d=e
this.a=f},
clY:function clY(d,e){this.a=d
this.b=e},
aMs:function aMs(){},
ilb(d){var w=null
return A.ck(w,w,!0,w,new C.fSL(),d,w,!0,!0,x.e2)},
imm(d,e,f,g,h){var w=null
return A.ck(w,w,!0,w,new C.h_g(h,g,f,e),d,w,!0,!0,x.N)},
ild(d,e){var w=null
return A.ck(w,w,!0,w,new C.fSQ(e),d,w,!0,!0,x.dY)},
ilc(d){var w=null
return A.ck(w,w,!0,w,new C.fSP(),d,w,!0,!0,x.c5)},
aUq:function aUq(d,e){this.a=d
this.b=e},
aUp:function aUp(d){this.a=d},
aSn:function aSn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fSL:function fSL(){},
h_g:function h_g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fSQ:function fSQ(d){this.a=d},
fSP:function fSP(){},
Zp:function Zp(d,e){this.c=d
this.a=e},
azA:function azA(){var _=this
_.d=$
_.c=_.a=_.e=null},
d5k:function d5k(d){this.a=d},
d5l:function d5l(d){this.a=d},
d5j:function d5j(d,e){this.a=d
this.b=e},
d5m:function d5m(d){this.a=d},
d5n:function d5n(d){this.a=d},
Zo:function Zo(d){this.a=d},
azz:function azz(){this.d=$
this.c=this.a=null},
d5g:function d5g(d){this.a=d},
d5h:function d5h(d){this.a=d},
d5i:function d5i(d){this.a=d},
YW:function YW(d){this.a=d},
ayf:function ayf(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cDL:function cDL(){},
cDR:function cDR(d){this.a=d},
cDS:function cDS(d){this.a=d},
cDT:function cDT(d){this.a=d},
cDQ:function cDQ(){},
cDU:function cDU(d){this.a=d},
cDV:function cDV(d){this.a=d},
cDP:function cDP(){},
cDW:function cDW(d,e){this.a=d
this.b=e},
cDO:function cDO(d,e){this.a=d
this.b=e},
cDM:function cDM(d,e){this.a=d
this.b=e},
cDX:function cDX(d){this.a=d},
cDN:function cDN(){},
cDY:function cDY(d){this.a=d},
a1z:function a1z(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bxs:function bxs(){this.d=$
this.c=this.a=null},
fiy:function fiy(d,e){this.a=d
this.b=e},
fiz:function fiz(d){this.a=d},
fiA:function fiA(d,e){this.a=d
this.b=e},
abT:function abT(d,e){this.a=d
this.b=e},
FW:function FW(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bxq:function bxq(d,e){var _=this
_.d=$
_.bw$=d
_.a8$=e
_.c=_.a=null},
fiw:function fiw(d,e){this.a=d
this.b=e},
ay8:function ay8(d,e){this.c=d
this.a=e},
bxr:function bxr(d,e){var _=this
_.d=$
_.bw$=d
_.a8$=e
_.c=_.a=null},
fix:function fix(d){this.a=d},
bxp:function bxp(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aOy:function aOy(){},
aOz:function aOz(){},
bEW(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bf(u),s=B.o.E(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oV(B.o.u(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fRd(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.U,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aX(B.o.u(s),2,"0")
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Yh(A.cS(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aR0(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aR0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hX().l4(85,1280,B.eL),$async$aR0)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fl(),$async$aR0)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hmc()
w=9
return A.b(C.clX(q,r),$async$aR0)
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
return A.i($async$aR0,v)},
aRn(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aRn=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.clU(g)
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
return A.b($.S().M0(p,!0,null,i).d9(0,B.fY),$async$aRn)
case 9:n=a1
w=10
return A.b(n.lM(),$async$aRn)
case 10:m=a1
w=11
return A.b(J.a3g(m).hx(B.ha),$async$aRn)
case 11:l=a1
J.a3g(m).q()
if(l==null){w=8
break}i=J.eS(B.dK.gaS(l))
k="data:image/png;base64,"+B.cJ.gcu().aO(i)
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
return A.i($async$aRn,v)},
fRd:function fRd(){},
u7:function u7(d){this.a=d},
atg:function atg(d,e,f){this.c=d
this.d=e
this.a=f},
aFS:function aFS(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eRi:function eRi(d,e){this.a=d
this.b=e},
eR9:function eR9(d){this.a=d},
eRa:function eRa(d){this.a=d},
eRg:function eRg(d,e){this.a=d
this.b=e},
eRf:function eRf(d,e){this.a=d
this.b=e},
eRc:function eRc(d,e){this.a=d
this.b=e},
eRb:function eRb(d,e){this.a=d
this.b=e},
eRd:function eRd(d){this.a=d},
eRe:function eRe(d,e){this.a=d
this.b=e},
eRh:function eRh(d,e){this.a=d
this.b=e},
eR4:function eR4(d,e){this.a=d
this.b=e},
eR8:function eR8(d){this.a=d},
eR7:function eR7(d,e){this.a=d
this.b=e},
eR6:function eR6(d){this.a=d},
eRj:function eRj(d,e){this.a=d
this.b=e},
eRk:function eRk(d,e){this.a=d
this.b=e},
eR5:function eR5(d,e){this.a=d
this.b=e},
hz5(d,e,f){var w="thumbnailPath",v=e.ah()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.H(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).a9().ae(),"project",v],x.N,x.z)},
fRe(d,e,f){var w=0,v=A.j(x.N),u
var $async$fRe=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.X.aq(C.hz5(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fRe,v)},
bEY(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bEY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fRe(!0,d,e),$async$bEY)
case 4:w=3
return A.b(r.ate(g,d,e.a),$async$bEY)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dO.aO(B.X.aq(C.hz5(d,e,null),null))
u="NGMY_WS:"+B.kB.gcu().aO(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEY,v)},
hqK(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hc3(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d2(s,"NGMYWSSYNC2|"))return!0
if(J.d2(s,"NGMY_WS:"))return!0
if(J.f1(s,t))return!0
if(J.d2(s,"{"))try{w=B.X.aM(0,s,null)
if(x.f.b(w)){v=J.r(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
ij3(d){var w,v,u,t=C.hqK(d)
if(t==null)return null
if(C.hc3(t))return t
w=B.a.cp(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b5(t,w))
if(C.hc3(v))return v}u=B.a.cp(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b5(t,u))
if(C.hc3(v))return v}return null},
hc2(d){var w,v,u,t,s,r=null,q=B.a.i(d)
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
t=C.h6p(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bEX(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bEX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.atd(t[1]),$async$bEX)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hc2(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hc2(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEX,v)},
hc1(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.ly(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bEt(){var w=0,v=A.j(x.o),u,t
var $async$bEt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.H2(),$async$bEt)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hc2(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEt,v)},
hA6(d,e,f,g){return A.bV(B.L,null,new C.h_6(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h_6:function h_6(d,e,f){this.a=d
this.b=e
this.c=f},
adV:function adV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eRm:function eRm(d,e){this.a=d
this.b=e},
eRn:function eRn(d,e){this.a=d
this.b=e},
eRo:function eRo(d,e){this.a=d
this.b=e},
eRp:function eRp(d,e){this.a=d
this.b=e},
eRl:function eRl(d){this.a=d},
ata:function ata(d,e,f){this.c=d
this.d=e
this.a=f},
bmw:function bmw(){var _=this
_.c=_.a=_.e=_.d=null},
eR_:function eR_(d,e){this.a=d
this.b=e},
eR0:function eR0(d){this.a=d},
eR1:function eR1(d){this.a=d},
atf:function atf(d){this.a=d},
aFR:function aFR(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eR3:function eR3(d){this.a=d},
eR2:function eR2(d){this.a=d},
hSp(d,e,f,g,h){return new C.Ou(h,g,d,e,f,null)},
aKN:function aKN(d,e){this.a=d
this.b=e},
Ou:function Ou(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFT:function aFT(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eRM:function eRM(){},
eRI:function eRI(d,e){this.a=d
this.b=e},
eRJ:function eRJ(d){this.a=d},
eRt:function eRt(d){this.a=d},
eRr:function eRr(d){this.a=d},
eRs:function eRs(d){this.a=d},
eRC:function eRC(d,e){this.a=d
this.b=e},
eRz:function eRz(d,e){this.a=d
this.b=e},
eRA:function eRA(d,e){this.a=d
this.b=e},
eRB:function eRB(d,e,f){this.a=d
this.b=e
this.c=f},
eRx:function eRx(d,e,f){this.a=d
this.b=e
this.c=f},
eRv:function eRv(d){this.a=d},
eRw:function eRw(d){this.a=d},
eRy:function eRy(d){this.a=d},
eRP:function eRP(d){this.a=d},
eRO:function eRO(d){this.a=d},
eRQ:function eRQ(d){this.a=d},
eRN:function eRN(d){this.a=d},
eRq:function eRq(d){this.a=d},
eRu:function eRu(d,e){this.a=d
this.b=e},
eRL:function eRL(d,e){this.a=d
this.b=e},
eRK:function eRK(d,e){this.a=d
this.b=e},
eRF:function eRF(d){this.a=d},
eRG:function eRG(d){this.a=d},
eRH:function eRH(d,e){this.a=d
this.b=e},
eRE:function eRE(d,e){this.a=d
this.b=e},
eRD:function eRD(d,e,f){this.a=d
this.b=e
this.c=f},
bzf:function bzf(){},
AQ(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ags(d,e,f){return C.i7l(d,e,f)},
i7l(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ags=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.ar("String",e,f),$async$ags)
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
return A.i($async$ags,v)},
agr(d,e){return C.i7k(d,e)},
i7k(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$agr=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$agr)
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
return A.i($async$agr,v)},
i65(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Tf(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bBX(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bBX=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b3C(q),$async$bBX)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aRn(q,!1),$async$bBX)
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
return A.i($async$bBX,v)},
hG2(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aK(d.h(0,"price")),o=p==null?null:p
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
h6p(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.de(s,x.f)
w=A.cH(w,new C.cD7(),w.$ti.k("M.E"),x.Q)
v=A.a7(w).k("Z<M.E>")
r=A.C(new A.Z(w,new C.cD8(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bk(J.k(t==null?"":t))
return new C.ly(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
ibn(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wd
case"female":case"f":return D.oi
default:return D.yG}},
hvL(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hgj(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ibn(v==null?j:J.k(v))
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
return new C.hW(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ibp(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.O0
case"viewer":return D.kM
default:return D.ul}},
ibq(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
GS(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aQ7(d,e){return B.a.i(e.toLowerCase())===C.GS(d,e)&&d.y!==D.kM},
um(d,e){var w,v=d.y
if(v===D.kM)return!1
w=B.a.i(e.toLowerCase())
if(w===C.GS(d,e))return!0
if(v===D.O0)return!0
v=d.e
return new A.N(v,A.hc8(),A.T(v).k("N<1,n>")).t(0,w)},
iaQ(d){return J.dJ(d,new C.fBN()).gL(0)},
h_Q(d){var w=0,v=A.j(x.y),u,t
var $async$h_Q=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.B0(d),$async$h_Q)
case 3:u=t.rb(f,new C.h_R(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h_Q,v)},
bCY(d,e){var w=0,v=A.j(x.H),u,t
var $async$bCY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.B0(d),$async$bCY)
case 3:t=g
if(J.rb(t,new C.fzG(e))){w=1
break}if(C.iaQ(t)>=2)throw A.W(A.be("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bCY,v)},
aln(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.de(h,x.f)
w=A.cH(w,new C.bRt(),w.$ti.k("M.E"),x.P)
v=A.a7(w).k("Z<M.E>")
g=A.C(new A.Z(w,new C.bRu(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b6(u,new C.bRv(),x.N)
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
n=C.ibp(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aW(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cv)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gS(f)
if(l.b(i))m.push(A.a2(i,k,j))}return new C.kP(w,v,s,!r,t,g,q,p,o,n,m)},
hvV(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.au(v,0,8)},
Dd(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$Dd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.RX(d),$async$Dd)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$Dd)
case 4:t=f
w=5
return A.b(t.a6T(0),$async$Dd)
case 5:w=6
return A.b(C.fqc(t,l),$async$Dd)
case 6:s=f
if(J.cL(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a6(q)
o=A.aS(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hrk(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oU(l,n),$async$Dd)
case 11:u=n
w=1
break
case 10:case 8:m=A.aS(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hrk(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oU(l,n),$async$Dd)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Dd,v)},
fqc(d,e){return C.i3u(d,e)},
i3u(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fqc=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a6(a3)
a5=A.aS(a4.h(a3,"ngmy_worksheets_index_v3_"+C.AQ(a9)))
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
break}m=A.aS(a4.h(a3,"ngmy_worksheet_item_v3_"+C.AQ(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.X.aM(0,m,null)
if(!a0.b(l)){w=7
break}k=C.h6p(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aS(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.AQ(a9)+"_"+n))
i=C.i65(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b3C(h),$async$fqc)
case 17:g=b1
if(g!=null){i=i.Tf(g)
p=!0}case 16:J.cc(q,i)
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
case 8:J.S8(q,new C.fqd())
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
return A.i($async$fqc,v)},
bDp(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bDp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.RX(d),$async$bDp)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Dd(r),$async$bDp)
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
return A.i($async$bDp,v)},
hrk(d){var w,v,u,t
try{w=B.X.aM(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.de(w,x.f)
v=A.cH(v,new C.fm2(),v.$ti.k("M.E"),x.fA)
u=A.a7(v).k("Z<M.E>")
v=A.C(new A.Z(v,new C.fm3(),u),u.k("M.E"))
B.d.aZ(v,new C.fm4())
return v}catch(t){v=A.a([],x.D)
return v}},
oU(d,e){return C.il1(d,e)},
il1(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oU=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.RX(b2),$async$oU)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$oU)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.AQ(a8)
p=A.aS(J.r(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.X.aM(0,p,null)),new C.fSC(),a2).fK(0)
a2=J.b6(b3,new C.fSD(),a2).bZ(0,new C.fSE())
n=A.df(a2,a2.$ti.k("M.E"))
a2=o,a2=A.en(a2,a2.r,A.a7(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f1(n,m)?17:18
break
case 17:a5=C.AQ(a8)
l=A.aS(J.r(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a8T(l),$async$oU)
case 19:t=21
a5=C.AQ(a8)
k=A.aS(J.r(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.X.aM(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.r(j,"thumbnailPath")
w=28
return A.b(C.a8T(a5==null?null:J.k(a5)),$async$oU)
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
return A.b(C.agr(r,"ngmy_worksheet_item_v3_"+C.AQ(a8)+"_"+m),$async$oU)
case 29:w=30
return A.b(C.agr(r,"ngmy_worksheet_thumb_v3_"+C.AQ(a8)+"_"+m),$async$oU)
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
case 14:case 10:a2=J.cE(b3),a3=a2.gaf(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gS(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bBX(h),$async$oU)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ags(r,"ngmy_worksheet_thumb_v3_"+C.AQ(a8)+"_"+a4,f),$async$oU)
case 40:g=i.Tf(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.agr(r,"ngmy_worksheet_thumb_v3_"+C.AQ(a8)+"_"+a4),$async$oU)
case 41:g=i.Tf(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.agr(r,"ngmy_worksheet_thumb_v3_"+C.AQ(a8)+"_"+a4),$async$oU)
case 42:case 34:a4=i.a
w=43
return A.b(C.ags(r,"ngmy_worksheet_item_v3_"+C.AQ(a8)+"_"+a4,B.X.aq(g.ah(),null)),$async$oU)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.cc(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ags(r,"ngmy_worksheets_index_v3_"+C.AQ(a8),B.X.aq(q,null)),$async$oU)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eO(b3,new C.fSF(q))
a4=a3.$ti.k("cO<1,a8<n,@>>")
a7=A.C(new A.cO(a3,new C.fSG(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ags(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.X.aq(a0,null)),$async$oU)
case 45:w=46
return A.b(J.hF8(r),$async$oU)
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
return A.b(C.Dd(d),$async$LB)
case 3:t=g
s=J.cE(t)
r=s.bh(t,new C.h_P(e))
if(r===-1)s.c6(t,0,e)
else s.n(t,r,e)
u=C.oU(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$LB,v)},
bDb(d,e){var w=0,v=A.j(x.H),u
var $async$bDb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Dd(d),$async$bDb)
case 2:u=g
J.nG(u,new C.fCg(e))
w=3
return A.b(C.oU(d,u),$async$bDb)
case 3:return A.h(null,v)}})
return A.i($async$bDb,v)},
GU(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$GU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$GU)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aS(J.r(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.X.aM(0,i,null)
if(x.j.b(t)){j=J.de(t,x.f)
j=A.cH(j,new C.fFb(),j.$ti.k("M.E"),x.k)
s=A.a7(j).k("Z<M.E>")
r=A.C(new A.Z(j,new C.fFc(),s),s.k("M.E"))
B.d.aZ(r,new C.fFd())
k=r}}catch(h){}w=4
return A.b(C.fmN(d),$async$GU)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.i3R(k,p,d)
j=A.T(o)
s=j.k("N<1,a8<n,@>>")
s=A.C(new A.N(o,new C.fFe(),s),s.k("ak.E"))
n=B.X.aq(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.R8(d,o),$async$GU)
case 7:case 6:j=j.k("Z<1>")
m=A.C(new A.Z(o,new C.fFf(d),j),j.k("M.E"))
if(m.length!==0)C.aPR(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$GU,v)},
fSo(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fSo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.R8(d,e),$async$fSo)
case 3:t=J.dJ(e,new C.fSp(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aPR(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fSo,v)},
a39(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a39=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a39)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aS(J.r(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.X.aM(0,l,null)
if(x.j.b(u)){m=J.de(u,x.f)
m=A.cH(m,new C.h_K(),m.$ti.k("M.E"),x.k)
t=A.a7(m).k("Z<M.E>")
s=A.C(new A.Z(m,new C.h_L(),t),t.k("M.E"))
o=s}}catch(k){}q=J.qy(o,new C.h_M(e))
if(B.a.i(e.x).length===0&&C.um(e,d)){m=B.a.i(d.toLowerCase())
p=e.aFa(e.y===D.kM?D.kM:D.ul,m)}else p=e
if(q===-1)J.pO(o,0,p)
else J.aJ(o,q,p)
w=3
return A.b(C.R8(d,o),$async$a39)
case 3:w=C.um(p,d)?4:5
break
case 4:w=6
return A.b(C.aPQ(C.GS(p,d),p),$async$a39)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a39,v)},
aQ3(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aQ3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.GU(d),$async$aQ3)
case 2:u=g
t=J.cE(u)
s=A.p7(t.eO(u,new C.fBY(e)))
t.bs(u,new C.fBZ(e))
w=3
return A.b(C.R8(d,u),$async$aQ3)
case 3:w=s!=null&&C.aQ7(s,d)?4:5
break
case 4:w=6
return A.b(C.fm6(e),$async$aQ3)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aQ3,v)},
aig(d){var w=d.f,v=A.T(w).k("Z<1>")
w=A.C(new A.Z(w,new C.h_V(),v),v.k("M.E"))
return w},
h9H(d,e){var w,v=d.f,u=A.p7(new A.Z(v,new C.fBs(e),A.T(v).k("Z<1>")))
v=C.aig(d)
w=A.T(v).k("Z<1>")
v=A.C(new A.Z(v,new C.fBt(e,u),w),w.k("M.E"))
B.d.aZ(v,new C.fBu())
return v},
ibt(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hAa(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bh(C.h9H(d,u),new C.h_h(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
id0(d,e){var w
if(e==null||e.length===0)return 1
w=C.h9H(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fG1(),A.T(w).k("N<1,G>")).f4(0,B.xE)+1},
ikV(d){var w,v=C.aig(d)
if(v.length===0)return null
w=new A.Z(v,new C.fSi(),A.T(v).k("Z<1>"))
if(!w.gan(0))return w.gI(0)
return B.d.gI(v)},
ibo(d){return A.H(["id",d.a,"name",d.b,"gender",C.hvL(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
icW(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.U(a0,x.P)
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
n=n!==D.yG?n:q.c
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
d=q.aF5(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.L)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cMZ(a1,w,a3.d,a2.y,s,a0,v)},
B0(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$B0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$B0)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aS(J.r(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.X.aM(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.de(t,x.f)
p=A.cH(p,new C.fF8(),p.$ti.k("M.E"),x.k)
s=A.a7(p).k("Z<M.E>")
p=A.C(new A.Z(p,new C.fF9(),s),s.k("M.E"))
B.d.aZ(p,new C.fFa())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$B0,v)},
ai1(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ai1=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.ul:D.kM
a7=C.GS(b2,b3)
w=2
return A.b(C.B0(b1),$async$ai1)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.bh(a8,new C.fSd(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bCY(b1,b2),$async$ai1)
case 5:case 4:if(b0===-1){u=b2.aFa(a6,a7)
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
i=i!==D.yG?i:l.c
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
s.n(0,m,l.aF5(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bd<2>")
s=A.C(new A.bd(s,k),k.k("M.E"))
k=a5?D.ul:D.kM
u=t.cN0(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.R8(b1,a8),$async$ai1)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aPQ(B.a.i(b3.toLowerCase()),u),$async$ai1)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ai1,v)},
hrJ(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).a9().ae(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("N<1,a8<n,@>>"),k=A.C(new A.N(m,C.hze(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.H(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.H(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a9().ae(),"updatedAt",o],r,x.K),"createdAt",s.a9().ae(),"updatedAt",o],r,x.z)},
hrK(d,e){var w=new A.V(Date.now(),0,!1).a9().ae(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("N<1,a8<n,@>>")
u=A.C(new A.N(u,C.hze(),t),t.k("ak.E"))
return A.H(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a9().ae(),"updatedAt",w],x.N,x.z)},
i1l(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a6(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.aln(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hc8(),A.T(j).k("N<1,n>")).bZ(0,new C.fmA())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.ul
else s=B.d.t(t,u)?D.O0:D.kM
return w.aFa(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.aln(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.de(q,h)
h=A.cH(h,new C.fmB(),h.$ti.k("M.E"),x.P)
p=A.a7(h).k("Z<M.E>")
o=A.C(new A.Z(h,new C.fmC(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.fmD(),x.N).bZ(0,new C.fmE())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.ul
else s=B.d.t(t,u)?D.O0:D.kM
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
return new C.kP(h,r,p,!m,t,o,l,j,v,s,B.ca)},
fmN(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fmN=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fmR()
h=x.N
g=x.z
w=7
return A.b(A.iV(A.a([A.lD("family_trees","*",null,A.H(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bL),r.$2(A.lD("family_trees","*",A.H(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bL),"collaborator"),r.$2(A.lD("family_trees","*",null,A.H(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bL),"public")],x.cl),x.fO),$async$fmN)
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
h=A.cH(new A.bd(l,h),new C.fmO(a0),h.k("M.E"),x.k)
l=A.a7(h).k("Z<M.E>")
l=A.C(new A.Z(h,new C.fmP(),l),l.k("M.E"))
B.d.aZ(l,new C.fmQ())
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
return A.i($async$fmN,v)},
i3R(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a6(e)
if(j.gan(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dH(e,new C.fqU(),v).bZ(0,new C.fqV())
t=A.df(u,u.$ti.k("M.E"))
s=A.U(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.GS(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kM){m=q.e
m=!new A.N(m,A.hc8(),A.T(m).k("N<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gaf(e);j.C();){v=j.gS(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.icW(l,v)
o=C.GS(k,w)
p=v.d
s.n(0,u,o===w?k.bdL(p,D.ul):k.bdL(p,v.y))}j=s.$ti.k("bd<2>")
j=A.C(new A.bd(s,j),j.k("M.E"))
B.d.aZ(j,new C.fqW())
return j},
R8(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$R8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$R8)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.ftN(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.ar("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.X.aq(s,null)),$async$R8)
case 3:return A.h(null,v)}})
return A.i($async$R8,v)},
aPQ(d,e){return C.i99(d,e)},
i99(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aPQ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.m8("family_trees",A.a([C.hrJ(e,d)],p),null,B.cG),$async$aPQ)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.m8("family_trees",A.a([C.hrK(e,d)],p),null,B.cG),$async$aPQ)
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
return A.i($async$aPQ,v)},
aPR(d,e){return C.i9a(d,e)},
i9a(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aPR=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("N<1,a8<n,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fz_(d),n),m)
r=l
w=7
return A.b(A.m8("family_trees",r,null,B.cG),$async$aPR)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fz0(d),n),m)
p=k
w=8
return A.b(A.m8("family_trees",p,null,B.cG),$async$aPR)
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
return A.i($async$aPR,v)},
fm6(d){return C.i0E(d)},
i0E(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fm6=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Rx("family_trees",A.H(["id",d],x.N,x.z),null,B.cG),$async$fm6)
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
return A.i($async$fm6,v)},
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
cDa:function cDa(){},
cD9:function cD9(){},
cD7:function cD7(){},
cD8:function cD8(){},
HZ:function HZ(d,e){this.a=d
this.b=e},
hW:function hW(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
alm:function alm(d,e){this.a=d
this.b=e},
fBN:function fBN(){},
h_R:function h_R(d){this.a=d},
fzG:function fzG(d){this.a=d},
kP:function kP(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bRx:function bRx(){},
bRw:function bRw(){},
bRt:function bRt(){},
bRu:function bRu(){},
bRv:function bRv(){},
fqd:function fqd(){},
fm2:function fm2(){},
fm3:function fm3(){},
fm4:function fm4(){},
fSC:function fSC(){},
fSD:function fSD(){},
fSE:function fSE(){},
fSF:function fSF(d){this.a=d},
fSG:function fSG(){},
h_P:function h_P(d){this.a=d},
fCg:function fCg(d){this.a=d},
fFb:function fFb(){},
fFc:function fFc(){},
fFd:function fFd(){},
fFe:function fFe(){},
fFf:function fFf(d){this.a=d},
fSp:function fSp(d){this.a=d},
h_K:function h_K(){},
h_L:function h_L(){},
h_M:function h_M(d){this.a=d},
fBY:function fBY(d){this.a=d},
fBZ:function fBZ(d){this.a=d},
h_V:function h_V(){},
fBs:function fBs(d){this.a=d},
fBt:function fBt(d,e){this.a=d
this.b=e},
fBu:function fBu(){},
h_h:function h_h(d){this.a=d},
fG1:function fG1(){},
fSi:function fSi(){},
fF8:function fF8(){},
fF9:function fF9(){},
fFa:function fFa(){},
fSd:function fSd(d){this.a=d},
fmA:function fmA(){},
fmB:function fmB(){},
fmC:function fmC(){},
fmD:function fmD(){},
fmE:function fmE(){},
fmR:function fmR(){},
fmS:function fmS(d){this.a=d},
fmO:function fmO(d){this.a=d},
fmP:function fmP(){},
fmQ:function fmQ(){},
fqU:function fqU(){},
fqV:function fqV(){},
fqW:function fqW(){},
ftN:function ftN(){},
fz_:function fz_(d){this.a=d},
fz0:function fz0(d){this.a=d},
cDb:function cDb(d,e){this.a=d
this.b=e},
cDc:function cDc(d,e){this.a=d
this.b=e},
aHY:function aHY(d,e,f){this.a=d
this.b=e
this.c=f},
ba_:function ba_(){this.b=this.a=0},
b9Z:function b9Z(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bxt:function bxt(){},
x3(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcg()+"/"+w.gcw()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.aX(B.o.u(w.gnn()),2,"0")+":"+B.a.aX(B.o.u(w.gGv()),2,"0")},
hSm(){var w,v=$.oh(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ap(32)]
return"WS"+B.d.hn(u)},
atb(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$atb=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$atb)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bL),$async$atb)
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
return A.i($async$atb,v)},
atc(d){return C.hSn(d)},
hSn(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$atc=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$atc)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hN("ngmy_worksheet_project_qr_stashes_v1",A.H(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).a9().ae()],x.N,x.z),!1,!1,B.cG,null),$async$atc)
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
return A.i($async$atc,v)},
ate(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$ate=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$ate)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hSm()
w=4
return A.b(C.atb(),$async$ate)
case 4:r=h
q=B.a.i(e)
p=B.dO.aO(t)
J.aJ(r,s,A.H(["ownerEmail",q,"projectId",f,"payload",B.cJ.gcu().aO(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).a9().ae()],x.N,x.K))
w=5
return A.b(C.atc(r),$async$ate)
case 5:u=new A.a0D("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ate,v)},
atd(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$atd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c8(),$async$atd)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.atb(),$async$atd)
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
m=A.dO(A.a2(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a9().ae())
p.n(q,i,m)}w=5
return A.b(C.atc(q),$async$atd)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$atd,v)},
hmc(){var w=new A.V(Date.now(),0,!1).a9()
return"wst_"+(1000*w.a+w.b)+"_"+B.cL.ap(999999)},
hSo(d){var w,v,u,t,s,r,q
try{w=A.agT(d)
if(w==null)return d
v=w
if(J.LG(v)>960||J.LF(v)>960){s=v
r=J.LG(v)>=J.LF(v)?960:null
v=A.agS(s,J.LF(v)>J.LG(v)?960:null,B.Pm,r)}s=v
u=A.amL(82).TC(s,B.zi)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cn(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
clX(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$clX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hSo(e)
$.clT.n(0,s,t)
u=C.bF_(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$clX,v)},
b3C(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b3C=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d2(l,"data:image")){u=null
w=1
break}t=4
r=J.f1(l,",")?B.d.gak(J.lG(l,",")):l
q=B.cF.aO(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hmc()
w=7
return A.b(C.clX(p,q),$async$b3C)
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
return A.i($async$b3C,v)},
clU(d){var w=0,v=A.j(x.T),u,t,s
var $async$clU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.clW(s),$async$clU)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cJ.gcu().aO(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$clU,v)},
a8T(d){var w=0,v=A.j(x.H),u,t
var $async$a8T=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hz6(d)
if(t==null){w=1
break}$.clT.W(0,t)
w=3
return A.b(C.bEZ(t),$async$a8T)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8T,v)},
bF_(d,e){return C.ij6(d,e)},
ij6(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bF_=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aOL
w=7
return A.b(n==null?$.aOL=N.h8E():n,$async$bF_)
case 7:r=g
q=new Uint8Array(A.cn(e))
p=J.mY(r,"thumbs","readwrite")
B.j3.ms(J.mX(p,"thumbs"),q,l)
w=8
return A.b(J.pN(p),$async$bF_)
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
return A.i($async$bF_,v)},
bEZ(d){return C.ij4(d)},
ij4(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bEZ=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aOL
w=7
return A.b(o==null?$.aOL=N.h8E():o,$async$bEZ)
case 7:r=f
q=J.mY(r,"thumbs","readwrite")
B.j3.G2(J.mX(q,"thumbs"),m)
w=8
return A.b(J.pN(q),$async$bEZ)
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
return A.i($async$bEZ,v)}},D,Av,Aw,A_,Ax,Ay
J=c[1]
A=c[0]
B=c[2]
N=c[61]
P=c[257]
A0=c[163]
S=c[60]
Aa=c[232]
L=c[212]
H=c[35]
E=c[222]
T=c[122]
Ab=c[235]
Q=c[106]
Ac=c[135]
U=c[228]
Ad=c[117]
Ae=c[198]
A1=c[119]
Af=c[231]
Ag=c[43]
R=c[230]
M=c[91]
A2=c[87]
A3=c[169]
Ah=c[130]
A4=c[172]
A5=c[251]
A6=c[199]
Ai=c[190]
Aj=c[202]
A7=c[197]
Ak=c[254]
Al=c[73]
A8=c[256]
Am=c[79]
G=c[255]
An=c[134]
Ao=c[259]
Ap=c[121]
A9=c[216]
Aq=c[34]
V=c[120]
O=c[192]
Ar=c[203]
As=c[126]
W=c[258]
At=c[155]
X=c[244]
Y=c[42]
F=c[97]
Au=c[33]
K=c[105]
I=c[139]
Z=c[77]
C=a.updateHolder(c[7],C)
D=c[250]
Av=c[78]
Aw=c[210]
A_=c[253]
Ax=c[252]
Ay=c[64]
C.aoX.prototype={}
C.aZV.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bi1(),f=h.x!=null&&h.zh(i).length===0
if(h.x!=null)w=f?B.b1:B.bB
else w=h.gUf()?B.bB:B.dZ
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.J(D.bmD,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.f4k,B.f,i,i,new A.o(B.b1.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h5,i,i,i),B.W,D.fzx,B.au,A.d(C.x3(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fvd,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,D.b56,i,i,i,i,B.a_D,i,i,i)
q=A.m(16)
p=A.J(B.aN,B.r,1)
o=A.J(B.b1.j(0.28),B.r,1)
n=A.haH(h.d)
o=A.p(B.A,C.aZU(A.fIm(h.e,n),30),B.f,i,i,new A.o(B.m1,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fqj,B.K,i,i)
m=A.m(14)
l=A.J(B.aN,B.r,1)
q=A.p(i,A.x(A.a([o,B.Q,n,B.bF,D.fzQ,B.ae,A.p(i,A.x(A.a([D.fPP,B.bF,A.d(A.B2(h.c),i,i,i,i,i,i,D.fl1,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fg,i,i,1/0)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,O.akM,i,i,i)
p=A.m(16)
m=A.J(B.aN,B.r,1)
l=j.aRZ("Original due",C.x3(h.r,!1))
n=j.aRZ("Current due",C.x3(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.W,A.p(i,A.x(A.a([l,B.Q,n,B.W,A.p(i,A.d(h.gaM5(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.BP,i,i,1/0),B.W,j.ci1(),B.Q,j.c5f(g,f)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bg,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.J(B.aN,B.r,1)
B.d.v(p,A.a([B.W,A.p(i,A.x(A.a([D.fAO,B.au,A.d(q,i,i,i,i,i,i,D.fpx,i,i,i)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bg,i,i,1/0)],s))}if(h.gaGQ()){q=A.m(14)
o=A.J(B.cq,B.r,1.6)
B.d.v(p,A.a([B.W,A.p(i,A.x(A.a([D.fR9,B.Q,A.bx(A.m(12),A.ec(new A.a4(1/0,88,A.b4(i,i,i,new A.Wl(h.ax,B.N,D.f8D,!0,3.5,i),B.aw),i),B.c,!0),B.ap)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Go,i,i,i)],s))}p.push(B.aB)
p.push(D.fJ3)
return A.p(i,A.x(A.a([r,new A.D(B.a_r,A.x(p,B.ak,i,B.e,B.i,0,B.p),i)],s),B.ak,i,B.e,B.P,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aRZ(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.aan,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fm4,w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
ci1(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aa4(B.dZ,u,"Not paid yet")
w=t.zh(null).length
v=w===0?B.b1:B.bB
return this.aa4(v,u,C.x3(t.x,!0))},
c5f(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aa4(B.b1,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aa4(B.b1,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.aan,u,u,u)
v=A.T(d).k("N<1,h3>")
v=A.C(new A.N(d,new C.c6L(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bY(B.bG,v,B.br,u,6,6)],x.p),B.E,u,B.e,B.i,0,B.p)},
aa4(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.aan,w,w,w),1),new A.dr(1,B.cn,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dV,w,w),w)],x.p),B.E,w,B.e,B.i,0,w,w)}}
C.bc8.prototype={
a3(d,e){new A.Wl(this.b,B.N,e,!0,3.5,null).a3(d,e)},
av(d){return d.b!==this.b}}
C.ap8.prototype={
R(){return new C.aDR(A.a([],x.bp))},
ge2(){return this.c}}
C.aDR.prototype={
Z(){this.a2()
this.J2()},
J2(){var w=0,v=A.j(x.H),u,t=this,s
var $async$J2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2q(t.a.c),$async$J2)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dMY(t,s))
case 1:return A.h(u,v)}})
return A.i($async$J2,v)},
aTW(d,e){var w,v=null,u=this.a.d.a,t=u?B.N:B.aP,s=A.l(v,v,u?B.bu:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bu:B.bn).j(0.22)
w=A.m(10)
return A.bs(v,new A.b5(4,r,new A.ay(u,1,B.r,-1)),v,B.bg,v,v,v,v,!0,new A.b5(4,w,new A.ay((this.a.d.a?B.bu:B.bn).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b5(4,A.m(10),D.b2L),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aTV(d){return this.aTW(d,null)},
PP(d){return this.clE(d)},
clE(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PP=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.HG:B.eL
w=7
return A.b(new A.hX().Cj(72,900,900,n),$async$PP)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fl(),$async$PP)
case 8:p=f
n=B.cJ.gcu().aO(p)
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
return A.i($async$PP,v)},
b1U(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.N:B.aP,o=A.m(10),n=A.J((q?B.bu:B.bn).j(0.18),B.r,1)
if(d)q=B.cQ
else q=s.a.d.a?B.bu:B.bn
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.av,r,r,r,r,r,r,r,r,12.5,r,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cQ
else u=s.a.d.a?B.bu:B.bn
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.i,0,B.p),1)
v=A.fx(r,r,r,r,r,r,r,r,r,r,r,B.cQ,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cc)
q=A.a([q,B.ad,u,A.bN(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cx,s.a.d.a?B.bu:B.bn,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cc))
return A.p(r,A.B(q,B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jz,D.bzk,r,r,r)},
Dk(d){return this.bBT(d)},
bBS(){return this.Dk(null)},
bBT(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dk=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ax()
r=new A.au(new A.ba(a4,B.b4,B.aO),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jn(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.ac(p,2)}o=new A.au(new A.ba(a4,B.b4,B.aO),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.ba(a4,B.b4,B.aO),s)
if(a3){a4=new A.V(Date.now(),0,!1).bS(6048e8)
m=A.c3(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)}else{a4=a5.f
m=A.c3(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bp(a4,!0,x.cT)
i=a3?null:A.haH(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wN?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i2(B.w.j(0.55),!0,"Dismiss",a4,new C.dMH(),new C.dMI(a2,t,a5,r,new C.dMJ(a2,t),o,n,j),B.eH,!0,x.y),$async$Dk)
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
break}if(f.length===0||e<=0){t.c.K(x.q).f.U(D.ff8)
w=1
break}a0=a2.d
if(a0==null){t.c.K(x.q).f.U(D.fdO)
w=1
break}a1=A.fIm(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wN?"male":"female"
w=7
return A.b(A.aif(a3,A.hiU(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$Dk)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wN?"male":"female"
a5.e=a1
a3=a5.ax
B.d.aa(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c3(a3.gck(),a3.gcg(),a3.gcw(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c3(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)))a5.cPh(a2.a)
w=8
return A.b(A.aif(t.a.c,a5),$async$Dk)
case 8:case 5:w=9
return A.b(t.J2(),$async$Dk)
case 9:case 1:return A.h(u,v)}})
return A.i($async$Dk,v)},
aUz(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cQ.j(0.14)
else w=this.a.d.a?B.N:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cQ
else s=(this.a.d.a?B.bu:B.bn).j(0.2)
s=A.J(s,B.r,g?1.5:1)
r=C.aZU(d,18)
if(g)q=B.cQ
else q=this.a.d.a?B.aP:B.av
return A.aI(!1,B.a2,!0,v,A.aO(!1,u,!0,A.p(p,A.B(A.a([r,B.bm,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b9,B.i,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
SA(d){return this.cDt(d)},
cDt(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$SA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i2(B.w.j(0.55),!0,"Dismiss",s,new C.dN0(),new C.dN1(t,d),B.h4,!0,x.y),$async$SA)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aif(t.a.c,d),$async$SA)
case 7:w=8
return A.b(t.J2(),$async$SA)
case 8:case 1:return A.h(u,v)}})
return A.i($async$SA,v)},
PO(d,e){return this.bMK(0,e)},
bMK(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.li(s,"Cancel","Delete",e.b+" \xb7 "+A.B2(e.c)+" will be removed from this device.","Delete this debt?"),$async$PO)
case 3:if(!g){w=1
break}w=4
return A.b(C.fC4(t.a.c,e.a),$async$PO)
case 4:w=5
return A.b(t.J2(),$async$PO)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PO,v)},
afN(d){return this.cfs(d)},
cfs(d){var w=0,v=A.j(x.H),u=this,t
var $async$afN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bV(B.L,null,new C.dMV(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$afN)
case 2:return A.h(null,v)}})
return A.i($async$afN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.eo_
w=J.dJ(m.d,new C.dN2())
v=A.C(w,w.$ti.k("M.E"))
w=J.dJ(m.d,new C.dN3())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cI(v,0,new C.dN4())
w=A.m(18)
s=m.a.d.a
r=s?D.cyr:D.aBx
q=A.J(s?B.cQ.j(0.35):B.cQ.j(0.18),B.r,1)
s=A.p(l,D.c_l,B.f,l,l,new A.o(B.cQ.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.as,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.av,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aI(!1,B.a2,!0,A.m(12),A.aO(!1,A.m(12),!0,D.enl,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dN5(m),l,l,l,l,l,l,l),B.f,B.cQ,0,l,l,l,l,l,B.ai)],p),B.m,l,B.e,B.i,0,l,l)
o=A.E(m.czC("Open",""+v.length),1)
n=v.length===0?"$0.00":A.B2(t)
r=A.a([A.p(l,A.x(A.a([s,B.ae,A.B(A.a([o,B.ad,A.E(m.b81(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a9(B.ay,B.aE,B.x,r,l,l),B.n),l,l,l,l,B.akJ,l,l,l),B.aB],p)
if(J.ct(m.d)){w=m.a.d.a
s=w?B.e4:B.c
q=A.m(18)
o=A.J((w?B.bu:B.bn).j(0.12),B.r,1)
n=A.p(l,D.bV9,B.f,l,l,new A.o(B.cQ.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.av,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.p(l,A.x(A.a([n,B.ae,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bn,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.m,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bBV,l,l,1/0))}else{w=m.gckV()
s=A.C(new A.N(v,w,A.T(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bDB,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bn,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.N(u,w,A.T(u).k("N<1,v>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.ak,l,B.e,B.i,0,B.p)},
b81(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.J((v.a.d.a?B.bu:B.bn).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bu:B.bn,u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cQ
else w=v.a.d.a?B.aP:B.av
return A.p(u,A.x(A.a([q,B.bF,A.d(f,u,1,B.a1,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.i,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eB,u,u,u)},
czC(d,e){return this.b81(!1,d,e)},
ckW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zh(j).length,h=d.bhf()
if(d.x!=null){w=d.zh(j).length
v=w===0?B.cQ:B.bB}else if(d.gUf())v=B.bB
else{if(h)w=B.cQ
else w=k.a.d.a?B.bu:B.bn
v=w}if(d.x!=null){w=d.zh(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.x3(u,!1)}else{u.toString
t="Paid "+C.x3(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.x3(w,!1)+" \xb7 "+i+" missed":"Due "+C.x3(w,!1)}w=k.a.d.a?B.e4:B.c
u=A.m(18)
if(d.gUf()&&d.x==null)s=B.bB.j(0.35)
else s=(k.a.d.a?B.bu:B.bn).j(0.12)
s=A.J(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cH,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bo:B.m1
o=A.J(d.gUf()&&d.x==null?B.bB.j(0.45):B.cQ.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.haH(d.d)
o=A.p(B.A,A.db(C.aZU(A.fIm(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.av
m=x.p
n=A.a([new A.dr(1,B.cn,A.d(p,j,1,B.a1,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaGQ())B.d.v(n,A.a([B.eg,A.X(B.Os,B.cQ.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.B(n,B.m,j,B.e,B.i,0,j,j),B.cS,A.d(t,j,1,B.a1,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.U,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.i,0,B.p),1)
n=A.B2(d.c)
l=k.a.d.a?B.aP:B.av
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aI(!1,B.a2,!0,j,A.aO(!1,q,!0,new A.D(A5.akw,A.B(A.a([o,B.bc,p,B.ad,A.x(A.a([n,B.bF,A.X(B.eE,(k.a.d.a?B.bu:B.bn).j(0.5),j,j,j,18)],m),B.dI,j,B.e,B.i,0,B.p)],m),B.m,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dMX(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d1,j,j,j,j)}}
C.uD.prototype={}
C.ala.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bj
u=v?B.E:B.m
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.J(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cy,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.J(r.j(0.6),B.r,1)
n.push(A.aA(a0,A.p(a0,A.X(B.cx,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a3))
m=v?B.a5:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iG,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.axH,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.GF,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eO(m,A.B(l,B.m,a0,B.e,B.P,0,a0,a0),B.f,B.e3)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.byv,A.d(v,a0,1,B.a1,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cD:B.bp,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fC,A.x(a2,u,a0,B.e,B.P,0,B.p),a0),1))
n.push(D.f9r)
a2=A.a([A.B(n,B.m,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.w4,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a9(B.a5,B.a8,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lG,A.x(a2,B.m,a0,B.e,B.P,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.J(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hl,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a9(B.ay,B.aE,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bzN,a0,a0,a0,a0)}}
C.aVG.prototype={
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
o=A.a([A.B(l,B.m,q,B.e,B.i,0,q,q),B.cS,n],m)
if(p.z)o.push(new A.D(B.uc,n,q))
return new A.D(B.d1,A.x(o,B.m,q,B.e,B.P,0,B.p),q)}}
C.Tb.prototype={
R(){return new C.bfL()}}
C.bfL.prototype={
gc0a(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aG(d,n,x.w).w,l=x.p,k=A.a([D.enV,D.eo0],l)
for(w=0;w<8;++w){v=D.a3T[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Hs:B.Cw
q=t===s
r=A.X(r,q?B.eG:B.bU,n,n,n,17)
q=q?B.c:B.ac
r=A.a([r,B.bm,new A.y(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ad,new A.by(1,B.ba,new A.y(v.c,n,B.Ao,n,n,n,n,B.a1,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ay(B.eG,2,B.r,-1)
s=new A.o(n,n,new A.bH(p,p,p,p),new A.bh(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aA(n,new A.D(B.eJ,A.x(A.a([new A.D(B.mK,new A.ca(B.aM,B.e,B.i,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.BG(!0,new C.ala(v,q.d,q.e,new C.dcJ(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dcK(o,v),n,n,n,n,n,n,!1,B.a3))}k.push(new A.D(D.bA7,A.bI(D.fWG,n,new C.dcL(o,d),A.bo(B.b7,n,n,n,n,B.oK,n,n,new A.b8(A.m(16),B.a0),n,n,n)),n))
return A.bn(!0,new A.cT(new A.aZ(0,1/0,0,m.a.b*0.9),A.cl(k,n,n,D.bEt,n,n,B.ah,!0),n),!0,!1,B.af,!0,!0)}}
C.nq.prototype={
ah(){var w=this
return A.H(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a9().ae()],x.N,x.z)},
bdX(d,e,f){return new C.nq(this.a,e,d,f)}}
C.HY.prototype={
wB(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.HY(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aEZ(d){var w=null
return this.wB(w,w,w,w,w,d,w,w,w,w,w,w)},
cKX(d){var w=null
return this.wB(w,w,w,w,d,w,w,w,w,w,w,w)},
bdV(d,e,f){var w=null
return this.wB(d,w,w,w,w,w,w,w,e,w,f,w)},
cLB(d){var w=null
return this.wB(w,w,w,w,w,w,d,w,w,w,w,w)},
cLK(d){var w=null
return this.wB(w,w,w,w,w,w,w,w,w,d,w,w)},
cKV(d){var w=null
return this.wB(w,w,w,d,w,w,w,w,w,w,w,w)},
cLM(d){var w=null
return this.wB(w,w,w,w,w,w,w,w,w,w,w,d)},
cKS(d){var w=null
return this.wB(w,w,d,w,w,w,w,w,w,w,w,w)},
cKN(d){var w=null
return this.wB(w,d,w,w,w,w,w,w,w,w,w,w)},
FV(d){var w=null
return this.wB(w,w,w,w,w,w,w,d,w,w,w,w)},
cLU(d,e,f,g,h,i,j,k,l,m,n){return this.wB(d,e,f,g,null,h,i,j,k,l,m,n)},
ah(){var w=this
return A.H(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cIu(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bQe(d),k=A.aK(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aK(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cQ(d.h(0,n))).length!==0?B.a.i(A.cQ(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cQ(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Dm.gev(D.Dm))
s=i==null?o:B.k.E(i,18,36)
r=l.$2("position",D.a5x)
q=l.$2("frame",D.a4U)
l=l.$2("texture",D.a4Q)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cQ(d.h(0,"author"))):o
return this.cLU(p,u,t,q,r,A.r5(d.h(0,"ribbon"))?A.Gu(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.ZN.prototype={
R(){return new C.aAR(A.a([],x.I),D.O_)},
ge2(){return this.c}}
C.aAR.prototype={
Z(){var w,v=this
v.a2()
v.f=A.zW(0,1)
w=$.ax()
v.z=new A.au(B.at,w)
v.Q=new A.au(B.at,w)
v.lc()
w=v.a
C.bDm(w.c,w.d).bJ(new C.ddp(v),x.fL)},
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
lc(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Lb(s.c,s.d),$async$lc)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.ddd(t,r))
t.awH()
case 1:return A.h(u,v)}})
return A.i($async$lc,v)},
gath(){var w,v=this
if(!J.ct(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.r(v.d,v.r)},
awH(){var w,v,u=this.gath(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saY(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saY(0,w==null?"":w)},
cdT(d){this.m(new C.dda(this,d))
this.awH()},
NL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$NL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nq(B.o.u(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aRK(r.c,r.d,s),$async$NL)
case 3:w=4
return A.b(t.lc(),$async$NL)
case 4:if(t.c==null||J.ct(t.d)){w=1
break}q=J.qy(t.d,new C.dcM(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dcN(t,p))
t.awH()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.Bi(p+1,B.cu,B.kJ),$async$NL)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$NL,v)},
AZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gath()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aRK(o.c,o.d,new C.nq(s,r,q,new A.V(p,0,!1))),$async$AZ)
case 3:w=4
return A.b(t.lc(),$async$AZ)
case 4:if(t.c==null){w=1
break}t.m(new C.dde(t))
case 1:return A.h(u,v)}})
return A.i($async$AZ,v)},
Op(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Op=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gath()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dcV(r),s,null,!0,!0,x.y),$async$Op)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bD7(s.c,s.d,r.a),$async$Op)
case 4:t.m(new C.dcW(t))
w=5
return A.b(t.lc(),$async$Op)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Ui(B.o.E(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Op,v)},
yE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AZ(),$async$yE)
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
A.a5(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hzJ(s,r.x,r.r),$async$yE)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Lb(s.c,s.d),$async$yE)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.M(l,new C.nq(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Bb(r.c,r.d,l),$async$yE)
case 11:w=12
return A.b(t.lc(),$async$yE)
case 12:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yE,v)},
a18(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a18=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AZ(),$async$a18)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyC(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dN(D.zr,new C.ddb(t),new C.ddc())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mK("Our Family",o,"",""))
for(o=J.aW(t.d);o.C();){n=o.gS(o)
p.push(new H.mK(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hcl(o,new H.rB(s,r,"",p,new H.uT(q.d,null,null,null,null,"","","")),null),$async$a18)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a18,v)},
O8(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$O8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AZ(),$async$O8)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bV(D.afx,null,new C.dcR(t),s,!0,!0,!0,K.a8B,!1,!1,x.N),$async$O8)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cKX(r)
t.m(new C.dcS(t,q))
s=t.a
w=7
return A.b(C.S0(s.c,s.d,q),$async$O8)
case 7:case 1:return A.h(u,v)}})
return A.i($async$O8,v)},
XB(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(D.afx,null,new C.dcX(t),r,!0,!0,!0,K.a8B,!1,!1,x.e),$async$XB)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dcY(t,s))
r=t.a
w=4
return A.b(C.S0(r.c,r.d,s),$async$XB)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.Bi(0,B.dU,B.nq)
case 1:return A.h(u,v)}})
return A.i($async$XB,v)},
bSi(d){var w=d.bU(),v=B.a.aX(B.o.u(w.gcg()),2,"0"),u=B.a.aX(B.o.u(w.gcw()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gyC(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c_o()
if(r.e)w=D.aee
else if(J.ct(r.d)){w=r.y
v=r.gyC(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fko,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a4(q,330,new A.D(X.alM,new C.Z4(w,v,0,q),q),q),B.bx,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kF.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.p(q,D.f47,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dH.j(0.45),B.I,18)],x.V),E.wE,B.n),q,q,q,q,B.NJ,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcHx(),q,q,q,q,q,q,!1,B.a3))
w.push(B.W)
w.push(A.hs(D.bRj,D.fW7,r.gaNP(),q))
B.d.v(u,w)}w=A.as(A.ch(A.x(u,B.m,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.eu,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kF.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.U,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dS:B.AW
u=A.x(A.a([new A.D(D.bBb,w,q),A.E(A.Jj(v,new C.ddn(r),J.ad(r.d)+1,q,r.gcdS(),u,B.aM),1),r.bEN()],x.p),B.m,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c6(q,D.Yp,new A.an(B.a_,q,B.b3,B.t,A.a([D.aP_,A.bn(!0,A.x(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
c_o(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cL(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Kh(B.e5,"AI",h.gbCF(),!0))
if(h.a.f)f.push(new C.Kh(B.ma,"Cover",h.gbNj(),!1))
if(h.a.f)f.push(new C.Kh(B.wz,"Header",h.gbIj(),!1))
if(J.cL(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Kh(B.uD,"Print",h.gcmY(),!1))
if(h.a.f&&J.cL(h.d)&&h.r>=0){v=h.w
u=v?B.hA:B.j_
t=v?"Save":"Edit"
f.push(new C.Kh(u,t,v?h.gctf():new C.dd7(h),!1))}if(h.a.f)f.push(new C.Kh(B.hQ,"Add page",h.gaNP(),!1))
v=C.hvK(h.y.Q)
u=h.gyC(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.dD7
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.ke.j(0.5),1,B.r,-1)
j=A.p(g,A.X(l.a,D.kF,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bH(i,i,i,i),new A.bh(k,k,k,k),g,new A.a9(B.a5,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kF.j(0.85)
p.push(new A.by(1,B.ba,A.aA(B.c6,A.x(A.a([k,B.bF,new A.y(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.P,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a3),g))}return new C.ala(v,u,t+" \xb7 "+s+" "+r,new C.dd8(h),A.B(p,B.m,g,B.e,B.i,0,g,g),g)},
A0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$A0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AZ(),$async$A0)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aW(t.d);r.C();){q=r.gS(r)
s.push(q.b+" "+q.c)}p=H.a2F(B.d.aG(s," "))
s=t.c
s.toString
w=6
return A.b(A.ck(null,null,!0,null,new C.dcO(t,p),s,null,!0,!0,x.N),$async$A0)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.yE(),$async$A0)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.DX(),$async$A0)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Fx("Swahili (Kiswahili)",!0),$async$A0)
case 18:w=16
break
case 17:w=19
return A.b(t.cE4(o==="sw"?"Swahili (Kiswahili)":"English"),$async$A0)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$A0,v)},
Zw(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.J(E.ke.j(0.3),B.r,1),r=x.p
return new A.D(B.ct,A.aO(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.wE,B.a6),w,42,w,w,w,w,w,42),B.bc,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A2.Kg,w,w,w),A.d(g,w,w,w,w,w,w,B.Ap,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1)],r),B.m,w,B.e,B.i,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dd9(d,h),w,w,w,w,w,w,w),w)},
DX(){return this.bRN()},
bRN(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$DX=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dd0(r),a7,null,!0,!0,x.ei),$async$DX)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eC("Working on it\u2026",$.ax())
a6.a=!0
a7=r.c
a7.toString
A.ck(null,null,!1,null,new C.dd1(o),a7,null,!0,!0,x.H).fp(new C.dd2(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.L)(d),++a1){k=d[a1]
J.cc(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ah()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.zr[a1]
J.cc(j,i.a)}w=8
return A.b(C.ahp(a0,a7,new C.dd3(o),d,l,e,j),$async$DX)
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
if(l!=null&&a6.a)A.a5(l,!0).eN()
l=o
l.si7($.ax())
J.aSb(l,0)
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
a7=j.bdX(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.r(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Bb(j.c,j.d,l),$async$DX)
case 11:w=12
return A.b(r.lc(),$async$DX)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.zr[a1].a)
a5=l.cIu(j,12,a7)
l=r.a
w=15
return A.b(C.S0(l.c,l.d,a5),$async$DX)
case 15:if(r.c!=null)r.m(new C.dd4(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.Bi(0,B.dU,B.nq)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.K(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b3(a3?A.cxn("Undo",new C.dd5(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.eq,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DX,v)},
Fx(d,e){return this.cE5(d,e)},
cE4(d){return this.Fx(d,!1)},
cE5(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fx=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eC("Starting\u2026",$.ax())
f.a=!0
k=r.c
k.toString
A.ck(null,null,!1,null,new C.ddg(a0),k,null,!0,!0,x.H).fp(new C.ddh(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.cc(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a2S(m,new C.ddi(a0)),$async$Fx)
case 10:w=8
break
case 9:w=11
return A.b(C.bEQ(new C.ddj(a0),m,a2),$async$Fx)
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
if(o!=null&&f.a)A.a5(o,!0).eN()
o=a0
o.si7($.ax())
J.aSb(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.K(x.q).f
k=q
o.U(A.b3(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.r(d,g)
j=J.r(p,g)
o.push(k.bdX(J.r(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Bb(k.c,k.d,o),$async$Fx)
case 12:w=13
return A.b(r.lc(),$async$Fx)
case 13:o=r.c
if(o==null){w=1
break}o=o.K(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(A.cxn("Undo",new C.ddk(r,d),null),null,null,null,null,B.t,null,k,null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fx,v)},
bEN(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dcP(v):u
r=A.aH(u,u,u,u,A.X(D.bMZ,s?D.kF:B.aX,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cL(v.d)&&!v.w&&v.r>=0)s=A.hs(A.X(B.wi,B.G1,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.G1,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbMU(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kF.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.as(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dcQ(v):u
return A.bn(!0,new A.D(D.bB_,A.B(A.a([r,s,A.aH(u,u,u,u,A.X(B.eE,t<J.ad(v.d)?D.kF:B.aX,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.i,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.ZR.prototype={
R(){return new C.bg9(new A.au(B.at,$.ax()))}}
C.bg9.prototype={
ga2h(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.T$=$.ax()
w.P$=0
this.a1()},
gbQq(){var w,v=this.ga2h()
A:{if("cover"===v){w=D.d4G
break A}if("book"===v){w=D.d04
break A}w=D.dvB
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.ke.j(0.5),n=x.p,m=A.B(A.a([D.dD8,B.as,D.bGB,A.aH(q,q,q,q,B.lh,q,q,q,new C.dfa(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.i,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.ju(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.dfb(r),r.ga2h()==="page",q,q,q,q))
if(r.a.d)l.push(A.ju(q,q,q,D.fQF,q,new C.dfc(r),r.ga2h()==="book",q,q,q,q))
l.push(A.ju(q,q,q,D.fDu,q,new C.dfd(r),r.ga2h()==="cover",q,q,q,q))
l=A.bY(B.bG,l,B.br,q,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.Y,!1,q,!0,B.t,q,A.aN(),r.d,q,q,q,q,q,2,A.bs(q,new A.b5(4,A.m(16),B.a0),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kx,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.aa,q,q,q,q,q,q,q,q,q,q,q,B.df,!0,B.a4,q,B.an,q,q,q,q)
w=A.a([],n)
for(v=r.gbQq(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mZ(q,B.c.j(0.08),new A.y(s,q,B.Kd,q,q,q,q,q,q,q,q,q),B.hc,new C.dfe(r,s),q,q,q,q))}return A.eT(q,E.Br,A.ch(A.x(A.a([m,B.W,D.fTZ,B.am,l,B.ae,k,B.Q,A.bY(B.bG,w,B.br,q,6,6),B.aB,A.di(D.bRg,D.fUM,new C.dff(r,d),A.bo(B.b7,q,q,q,q,B.oK,q,q,new A.b8(A.m(16),B.a0),q,q,q)),B.au,D.fOU],n),B.E,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.fm,q,q,B.ah),q,q,q,D.alt,B.d8,q,new A.b8(p,new A.ay(o,1.4,B.r,-1)),q)}}
C.ZP.prototype={
R(){return new C.aAU(A.a([],x.gA))},
ge2(){return this.c}}
C.af6.prototype={}
C.aAU.prototype={
Z(){this.a2()
this.lc()},
lc(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Rt(p.c,p.d),$async$lc)
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
return A.b(C.bDm(r.c,q),$async$lc)
case 6:j=e
i=J
w=7
return A.b(C.Lb(t.a.c,q),$async$lc)
case 7:m.push(new l.af6(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.ddE(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lc,v)},
b9i(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Qz(d,e){return this.cfq(0,e)},
cfq(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Qz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a5(s,!1).cc(A.eh(new C.ddD(u,e),!0,null,x.y)),$async$Qz)
case 2:t=g
w=3
return A.b(u.lc(),$async$Qz)
case 3:if(t===!0&&u.c!=null)u.c.K(x.q).f.U(D.aSC)
return A.h(null,v)}})
return A.i($async$Qz,v)},
FA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$FA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.K(x.q).f.U(D.aSy)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.agK(s.c,s.d),$async$FA)
case 5:q=e
w=6
return A.b(t.lc(),$async$FA)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Qz(0,B.d.fZ(t.d,new C.ddI(q))),$async$FA)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Rp(p,s.f,r,n,o),$async$FA)
case 10:m=e
w=11
return A.b(t.lc(),$async$FA)
case 11:if(m&&t.c!=null)t.c.K(x.q).f.U(D.aSC)
case 1:return A.h(u,v)}})
return A.i($async$FA,v)},
Q1(d,e){return this.cqX(0,e)},
cqX(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Q1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.ddH(t,e),s,null,!0,!0,x.y),$async$Q1)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a33(s.c,s.d,e.a),$async$Q1)
case 4:w=5
return A.b(t.lc(),$async$Q1)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Q1,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bEQ(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.J(E.ke.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fI(0.7142857142857143,A.p(n,A.x(A.a([D.dD9,B.ae,D.emX,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kF.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b9,B.i,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcHt(),n,n,n,n,n,n,!1,B.a3))}w=A.m(22)
v=A.J(E.ke.j(0.85),B.r,1.6)
s=A.aA(n,A.p(n,D.bZ8,B.f,n,n,new A.o(B.w.j(0.3),n,A.J(E.ke.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ddJ(d),n,n,n,n,n,n,!1,B.a3)
r=A.m(14)
q=B.w.j(0.3)
p=A.J(E.ke.j(0.5),B.r,1)
w=A.p(n,A.B(A.a([s,B.bc,D.bGZ,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fjo,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h5,n,n,n)],l),B.m,n,B.e,B.i,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.c44,B.n),n,n,n,Ax.Nt,D.bz_,n,n,n)
if(o.e)k=D.aee
else k=k.length===0?D.bah:A.cu(new C.ddK(k))
return A.c6(n,D.Yp,new A.an(B.a_,n,B.b3,B.t,A.a([D.aP_,A.bn(!0,A.x(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bEQ(d){var w,v,u=this,t=null,s=u.b9i(d),r=d.c,q=x.p,p=A.a([A.bS(0,A.eO(B.A,new A.a4(300,420,new C.Z4(d.b,s,r,t),t),B.f,B.dz),0,0,0)],q)
if(u.a.e)p.push(A.ap(t,A.aA(t,A.p(t,D.bYs,B.f,t,t,new A.o(B.w.j(0.55),t,A.J(B.aX,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ddB(u,d),t,t,t,t,t,t,!1,B.a3),t,t,t,6,6,t))
w=A.d(s,t,1,B.a1,t,t,t,D.fiZ,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.x(A.a([new A.fI(0.7142857142857143,new A.an(B.a_,t,B.ab,B.t,p,t),t),B.Q,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kF.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ddC(u,d),t,t,t,t,t,t,!1,B.a3)}}
C.Kh.prototype={}
C.Z4.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dN(D.zr,new C.cLZ(m),new C.cM_()),j=m.c,i=D.Dm.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mh:B.b9
v=new C.cM0(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.ejF,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b4(l,l,l,new C.bdl(j.x,h,l),B.aw),0,0,0),A.ap(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.a5,B.a8,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cN(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bh(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.alN,8,0.85,2.2),v.$4(D.bDU,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.alN,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.D(D.bDQ,A.b4(l,l,l,new C.bdc(h,l),B.aw),l),0,0,0))
r=A.X(D.aAu[B.o.E(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a1,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.axH,l,l),B.K,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.ae,p,B.ae,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aQ,A.d(r,l,2,B.a1,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.D(D.bEk,A.x(o,B.m,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ap(l,A.b4(l,l,l,new C.aHT(l),D.f8w),l,l,l,46,0,l))
return A.p(l,A.bx(D.acQ,new A.an(B.a_,l,B.ab,B.t,t,l),B.ap),B.f,l,l,new A.o(l,l,l,D.acQ,i,new A.a9(B.ay,B.aE,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bdl.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.e6()
f.cX(11)
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
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.ag()
l=f.ag()
k=f.ag()
$.S()
j=new A.ao(B.O,B.M,B.S,B.T,B.R)
j.r=t.j(0.25+f.ag()*0.5).gp(0)
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
j.push(new A.bt())
k=new A.ao(B.O,B.M,B.S,B.T,B.R)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.G()
k=h.gbu().a.snapshot()
o.drawPath((h.e=new A.cd(k)).a,r)
r.delete()}break
default:$.S()
w=A.I()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.ag()
m=f.ag()
l=f.ag()
r=w.G()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.S()
g=A.I()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.ag()
m=f.ag()
l=f.ag()
r=g.G()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
av(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bdc.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.S(),k=A.I(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.a9
k.c=2.4
k.d=B.by
for(w=e.a,v=e.b,v=[D.eZC,new A.cw([w,0,-1,1]),new A.cw([0,v,1,-1]),new A.cw([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
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
s=n.gbu().a.snapshot()
w.drawPath((n.e=new A.cd(s)).a,m)
m.delete()
s=new A.ao(B.O,B.M,B.S,B.T,B.R)
s.r=j.j(0.9).gp(0)
m=s.G()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
av(d){return!d.b.A(0,this.b)}}
C.uE.prototype={}
C.Zn.prototype={
R(){return new C.bdj()}}
C.bdj.prototype={
goe(){var w=this.d
return w===$?this.d=this.a.c:w},
gyC(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.ba(w.b,B.b4,B.aO),$.ax())}return v},
gaC6(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.ba(w.c,B.b4,B.aO),$.ax())}return v},
garQ(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.ba(w.y,B.b4,B.aO),$.ax())}return v},
q(){var w=this,v=w.gyC(0),u=v.T$=$.ax()
v.P$=0
v=w.gaC6()
v.T$=u
v.P$=0
v=w.garQ()
v.T$=u
v.P$=0
w.a1()},
ast(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.ju(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.d4y(this,f,u),e===u,s,s,s,s))}return A.bY(B.bG,r,B.br,s,6,8)},
ay9(d){var w=null,v=B.c.j(0.07)
return A.bs(w,new A.b5(4,A.m(14),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.mp,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goe(),a0=f.gyC(0),a1=a0.a.a,a2=f.gaC6(),a3=a2.a.a,a4=f.garQ(),a5=d.bdV(a4.a.a,a3,a1)
a1=x.w
a3=A.aG(a6,e,a1).w
a1=A.aG(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a4(190,260,A.eO(B.A,new A.a4(270,370,new C.Z4(a5,d,f.a.e,e),e),B.f,B.dz),e),e,e,e)
a0=A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),a0,e,e,e,e,e,2,f.ay9("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d4X(f),e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a4,e,B.an,e,e,e,e)
a2=A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),a2,e,e,e,e,e,2,f.ay9("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d4Y(f),e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a4,e,B.an,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.zr[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aX
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bH(o,o,o,o),e,e,new A.a9(B.ay,B.aE,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aC
v.push(A.aA(e,A.x(A.a([p,B.cS,new A.y(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.U,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d4Z(f,t),e,e,e,e,e,e,!1,B.a3))}v=A.bY(B.bG,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b7.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eG:B.L,2,B.r,-1)
q.push(A.aA(e,A.p(e,A.X(D.aAu[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bH(o,o,o,o),new A.bh(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d5_(f,n),e,e,e,e,e,e,!1,B.a3))}q=A.bY(B.bG,q,B.br,e,8,8)
a4=A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),a4,e,e,e,e,e,2,f.ay9("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d50(f),e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a4,e,B.an,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vs,e,e,e)
m=A.a([],w)
for(l=D.Dm.gdW(D.Dm),l=l.gaf(l);l.C();){k=l.gS(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eG:B.aX
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bH(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aC
m.push(A.aA(e,A.x(A.a([j,B.bF,new A.y(i,e,new A.F(!0,h,e,e,e,e,10,B.U,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d51(f,k),e,e,e,e,e,e,!1,B.a3))}m=A.bY(B.bG,m,B.br,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vs,e,e,e)
k=f.goe()
return new A.D(new A.P(0,0,0,a3.f.d),A.bn(!0,new A.cT(new A.aZ(0,1/0,0,a1.a.b*0.92),A.cl(A.a([D.fOm,B.ae,d,B.aQ,a0,B.W,a2,B.aB,D.fUy,B.Q,v,B.aB,D.fOv,B.Q,q,B.aB,a4,B.aB,p,B.Q,m,B.aB,l,A.kR(e,9,""+B.k.V(f.goe().f),36,18,new C.d52(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vs,e,e,e),B.am,f.ast(D.a5x,f.goe().r,new C.d53(f),D.dyN),B.ae,A.d("BORDER",e,e,e,e,e,e,M.vs,e,e,e),B.am,f.ast(D.a4U,f.goe().w,new C.d54(f),D.dyT),B.ae,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vs,e,e,e),B.am,f.ast(D.a4Q,f.goe().x,new C.d56(f),D.dAn),B.am,A.iN(e,B.b7,e,B.af,e,new C.d57(f),e,e,e,D.fIA,f.goe().z),B.bx,A.bI(D.fN4,e,new C.d58(f,a6),A.bo(B.b7,e,e,e,e,B.oK,e,e,new A.b8(A.m(16),B.a0),e,e,e))],w),e,e,A_.alj,e,e,B.ah,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aHT.prototype={
a3(d,e){var w,v,u,t=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
t.D(new A.aY(0,0))
w=e.a
t.D(new A.aq(w,0))
v=e.b
t.D(new A.aq(w,v))
t.D(new A.aq(w/2,v-12))
t.D(new A.aq(0,v))
t.D(new A.bt())
u=A.I()
u.sam(D.c4L.aA(0,new A.a3(0,0,0+w,0+v)))
d.aI(t,u)},
av(d){return!1}}
C.biI.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.S()
w=A.I()
w.sam(D.c3L.aA(0,new A.a3(0,0,a3,a4)))
a5.aP(new A.a3(0,0,a3,a4),w)
v=B.k.dc(a2/112)
u=new A.e6()
u.cX(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.ag()*20
l=56+u.ag()*40
k=D.d4F[u.ap(9)]
j=u.ap(14)
J.bl(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a3(n,j,n+m,j+l)
h=A.br(i,B.hr)
g=new A.ao(B.O,B.M,B.S,B.T,B.R)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sam(new A.a9(B.a5,B.a8,B.x,A.a([f,k,e],t),a0,a0).aA(0,i))
d=g.G()
w.drawRRect(A.e7(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.ao(B.O,B.M,B.S,B.T,B.R)
e.r=E.ke.j(0.55).gp(0)
d=e.G()
w.drawRect(A.bG(new A.a3(h,j,g,j+2)),d)
d.delete()
j=new A.ao(B.O,B.M,B.S,B.T,B.R)
j.r=E.ke.j(0.4).gp(0)
d=j.G()
w.drawRect(A.bG(new A.a3(h,q,g,p)),d)
d.delete()
w.restore()
j=u.ap(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ao(B.O,B.M,B.S,B.T,B.R)
p.sam(D.c36.aA(0,new A.a3(0,r,a3,q)))
d=p.G()
w.drawRect(A.bG(new A.a3(0,r,a3,q)),d)
d.delete()
p=new A.ao(B.O,B.M,B.S,B.T,B.R)
p.r=B.w.j(0.5).gp(0)
p.z=B.kQ
d=p.G()
w.drawRect(A.bG(new A.a3(0,q,a3,q+14)),d)
d.delete()}w=A.I()
w.r=D.be1.j(0.72).gp(0)
a5.aP(new A.a3(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.I()
a4.sam(new A.c_(B.A,0.5,B.x,a0,0,A.a([D.bm8.j(0.22),B.L],t),a0,a0).aA(0,A.bX(new A.t(w,a2),a1)))
a5.ad(new A.t(w,a2),a1,a4)},
av(d){return!1}}
C.bbw.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cN(14,w*2,v*2.2,v*2,o,o,new A.l1(new A.o(A.ar(D.kF,D.br6,w/4),o,new A.bH(B.a0,new A.ay(B.w.j(0.12),1,B.r,-1),B.a0,B.a0),B.Lr,o,o,B.n),B.bh,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aKB,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.ke.j(0.6),o,o,new A.bh(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.m,o,B.qG,B.i,0,B.p),B.f,o,o,new A.o(o,o,o,D.b2t,u,D.c4J,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.ds,18)],v)
t=A.ap(o,A.b4(o,o,o,new C.aHT(o),D.f8r),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aVG(p.y,r,L.iU,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),p.r,o,o,o,o,o,2,A.bs(o,B.eF,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.iU.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,D.fxC,!0,B.a4,o,B.an,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.iU.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.W,A.E(A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),p.w,o,o,o,o,o,2,A.bs(o,B.eF,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.iU.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.aj,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,D.fog,!0,B.a4,B.Ai,B.an,o,o,o,o),1)],m),B.ak,o,B.e,B.i,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fxu,o,o,o),B.au,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.iU.j(0.5),o,o,o,o,o,o,o,o,11,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.Q,A.B(A.a([A.E(A.p(o,o,B.f,D.FL.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fC,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.FL.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.FL.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.i,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.iU.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Yh(A.cS(A.a([A.cS(o,o,o,o,o,o,o,o,o,D.frt,B.a.au(k,0,1)),A.cS(o,o,o,o,o,o,o,o,o,o,B.a.b5(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.iU.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ch(A.x(n,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.i4,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.iU.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bx(B.Lr,new A.an(B.a_,o,B.ab,B.t,A.a([t,new A.D(D.bDm,A.x(s,B.ak,o,B.e,B.i,0,B.p),o),A.ap(0,A.c4(o,new A.o(o,o,o,o,o,new A.a9(B.a5,B.a8,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bh),o,o,0,o,0,22)],m),o),B.ap),B.f,o,o,new A.o(o,o,o,B.Lr,v,D.c5g,B.n),o,o,o,o,o,o,o,o),1)],m),B.ak,o,B.e,B.i,0,o,o))
return new A.an(B.a_,o,B.ab,B.t,l,o)}}
C.alb.prototype={
R(){return new C.alc(new A.eC(0,$.ax()),new C.bS2(),new C.alu(),D.hta,null,null)},
gcZ(){return this.d}}
C.a14.prototype={
a6(){return"_Step."+this.b}}
C.alc.prototype={
gC5(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDi(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gha(d){var w,v=this,u=v.e
if(u===$){w=C.Mv(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gTB(){var w=this.gha(0)
return w.gyX()==null?"Babu":B.a.i(w.gyX().b)},
Z(){var w,v=this
v.a2()
w=v.gha(0).gyX()
w=w==null?null:w.c
v.r.b=w===D.oi
w=v.pS(new C.bQo(v))
w.h8(0)
v.x!==$&&A.aQ()
v.x=w
v.a2e("Come closer, my children. I am "+v.gTB()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
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
w.buk()},
a2e(d){var w=this,v=w.y
if(v!=null)v.a4(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dh(D.ajW,new C.bQi(w))},
bqL(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a4(0)
v.m(new C.bQr(v))},
adv(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bqE(){return this.b8Q()},
b8Q(){var w=this,v=w.gC5()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bQj(w))
w.a2e(u)
v=w.z
if(v!=null)v.a4(0)
w.z=A.cG(B.m3,new C.bQk(w))},
cIB(){var w=this
w.m(new C.bQn(w))
w.a2e(w.gC5()[w.as].a)},
KL(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.ac_)return
w=p.gC5()
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
q.cX(v*7+d)
p.m(new C.bQm(p,d,u,q))
p.a2e(u?D.dk7[q.ap(4)]+" "+w[p.as].d:D.dgN[q.ap(3)]+" "+w[p.as].d)},
kI(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gC5()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bFz(t.at,t.ay,p)
t.m(new C.bQp(t,s))
t.a2e(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.Bw(t.a.d,s),$async$kI)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.Bx(r.d,r.c.a,"fire",t.at*10),$async$kI)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bQq())
w=1
break
case 4:++t.as
t.b8Q()
case 1:return A.h(u,v)}})
return A.i($async$kI,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c6(v,D.Xy,new A.an(B.a_,v,B.ab,B.t,A.a([A.bS(0,new A.er(A.b4(v,v,v,new C.aVL(u,w.r,w.w,u),B.aw),v),0,0,0),A.bn(!0,A.x(A.a([w.c9Q(0),B.b2,w.bPC()],t),B.m,v,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],t),v),v,!1,!1,v,v)},
c9Q(d){var w,v,u,t=this,s=null,r=A.aH(s,s,s,s,B.Pi,s,s,s,new C.bQl(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gC5().length;++w){v=t.as
if(w<v||t.Q===D.b_3)v=B.cI
else v=w===v?B.c:B.aX
u=new A.aP(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bh(u,u,u,u),s,s,B.n),s,7,s,D.byJ,s,s,s,22))}p=A.E(A.x(A.a([D.fFm,A.B(p,B.m,s,B.e,B.i,0,s,s)],q),B.E,s,B.e,B.i,0,B.p),1)
v=A.m(14)
u=A.J(B.fs,B.r,1)
return new A.D(D.bEx,A.B(A.a([r,p,A.p(s,A.d("\ud83d\udd25 "+B.k.V(t.cy*100)+"%",s,s,s,s,s,s,B.iu,s,s,s),B.f,s,s,new A.o(B.aS,s,u,v,s,s,B.n),s,s,s,s,B.h5,s,s,s)],q),B.m,s,B.e,B.i,0,s,s),s)},
bPC(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.gha(0).gyX()
if(h==null)w=1
else w=h.c===D.oi?0:1
v=j.dx
u=j.db
t=D.q5.j(0.96)
s=A.m(22)
r=A.J(B.cI,B.r,3)
q=A.b4(i,i,i,new C.boh(w,i),B.aw)
p=A.d(j.Q===D.ac_?j.gTB()+" asks":"Elder "+j.gTB(),i,i,i,i,i,i,D.aTO,i,i,i)
o=j.db
o=B.a.au(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.c6,A.B(A.a([new A.a4(62,62,q,i),B.as,A.E(A.x(A.a([p,B.bF,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aU2,i,i,i)],n),B.E,i,B.e,B.i,0,B.p),1)],n),B.E,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbqK(),i,i,i,i,i,i,!1,B.a3)
switch(j.Q.a){case 0:v=A.as(j.a9E("Sit down by the fire",j.gbqD()),i,i,i)
break
case 1:v=A.as(j.a9E("Ask me, Elder",j.gcIA()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gC5()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ay(D.lx,2.5,B.r,-1)
v.push(A.aA(i,A.p(i,new A.y(u[m],i,D.aTZ,i,B.K,i,i,i,i,i,i,i),B.f,i,D.ads,new A.o(D.aiR,i,new A.bH(l,l,l,l),new A.bh(q,q,q,q),i,i,B.n),i,i,i,i,V.w7,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bQf(j,m),i,i,i,i,i,i,!1,B.a3))}v=A.bY(B.bG,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.kn:Ak.aoL
u=A.X(u,v?B.ej:D.lx,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.l(i,i,v?B.ej:D.lx,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gC5().length?"Finish":"Next story"
v=A.B(A.a([u,B.ad,q,j.a9E(v,j.gq9(j))],n),B.m,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gC5().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aUh,i,i,i)],n)
u=j.cx
if(u>0){u=C.aPZ(u)
q=C.aPZ(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.aap,i,i,i))}v.push(B.Q)
v.push(j.a9E("Back to the games",new C.bQg(j)))
v=A.x(v,B.m,i,B.e,B.i,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.W,v],n),B.E,i,B.e,B.P,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aC0,i,B.n),i,i,i,B.BQ,B.bg,i,i,i)},
a9E(d,e){var w=null,v=A.m(16),u=A.J(B.cI,B.r,2)
return A.aA(w,A.p(w,A.d(d,w,w,w,w,w,w,A2.Kg,w,w,w),B.f,w,w,new A.o(D.lx,w,u,v,w,w,B.n),w,w,w,w,D.bCf,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a3)}}
C.boh.prototype={
a3(d,e){Y.fRy(d,e.ek(B.I),e.gdE()*0.45,this.b,0,0.4)},
av(d){return d.b!==this.b}}
C.aAS.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.bS2.prototype={}
C.t3.prototype={}
C.boi.prototype={}
C.alu.prototype={
Mj(d){var w,v=this
if(v.a==null||!J.A(v.b,d)){w=v.a
if(w!=null)w.q()
v.a=C.i6l(d)
v.b=d}w=v.a
w.toString
return w},
q(){var w=this.a
return w==null?null:w.q()}}
C.aVL.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.b.a,k=n.c,j=d.a,i=n.d.Mj(e).b
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
n.cyf(d,l)
n.bOd(d,l)
n.cGo(d,l,k)
u=0.8+0.2*Math.sin(l*8)*Math.sin(l*3.7)+k.w*0.4
J.bl(j.save())
j.translate(225,580)
d.p9(0,1,0.42)
t=240*(0.6+0.5*k.w)
$.S()
s=A.I()
r=x.O
q=x.n
s.sam(A.tt(B.I,t,A.a([D.bpX.j(0.55*u),F.MM.j(0.2*u),B.L],r),A.a([0,0.5,1],q),B.x,m,m,0))
d.ad(B.I,t,s)
j.restore()
p=A.a([new A.z(528,new C.bRV(n,d,l,k)),new A.z(540,new C.bRW(n,d,l,k)),new A.z(546,new C.bRX(n,d,l,k)),new A.z(574,new C.bRY(n,d,l,k)),new A.z(612,new C.bRZ(n,d,l,k)),new A.z(650,new C.bS_(n,d,l,k)),new A.z(656,new C.bS0(n,d,l,k))],x.E)
B.d.aZ(p,new C.bS1())
for(o=0;o<7;++o)p[o].b.$0()
n.bF8(d,l,k)
n.bRL(d,l)
j.restore()
$.S()
j=A.I()
j.sam(A.tt(new A.t(i/2,w*0.6),e.ganz()*0.75,A.a([B.L,D.bdW],r),A.a([0.55,1],q),B.x,m,m,0))
d.aP(new A.a3(0,0,0+i,0+w),j)},
av(d){return d.c!==this.c||d.d!==this.d},
cyf(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e6()
g.cX(3)
for(w=d.a,v=0;v<36;++v){u=g.ag()
t=g.ag()
s=Math.sin(e*(1.5+g.ag()*2)+v)
r=g.ag()
s=B.c.j(0.25+0.7*(0.5+0.5*s))
$.S()
q=new A.ao(B.O,B.M,B.S,B.T,B.R)
q.r=s.gp(0)
p=q.G()
w.drawCircle(u*450,20+t*300,0.8+r*1.1,p)
p.delete()}o=B.k.F(e,17)/1.2
if(o<1){n=new A.t(60+o*220,70+o*90)
d.bo(n,n.aE(0,D.ejc),C.iw(B.c.j((1-o)*0.9),1.6))}for(u=e*0.035,t=e*9,s=x.v,m=0;m<3;++m){l=B.k.F(u+m*0.05,1)
r=-20+l*500
q=120+Math.sin(l*9+m)*14+m*12
k=Math.sin(t+m*2)
j=$.S()
i=A.a([],s)
j=new A.aF(j.r,B.ag,null,null,i)
k=q+k*4
i.push(new A.aY(r-6,k))
h=q-3
i.push(new A.c5(r-2,h,r,q))
i.push(new A.c5(r+2,h,r+6,k))
r=new A.ao(B.O,B.M,B.S,B.T,B.R)
r.b=B.a9
r.c=1.6
r.r=D.bgE.gp(0)
r.d=B.by
r.e=B.dQ
p=r.G()
r=j.gbu().a.snapshot()
w.drawPath((j.e=new A.cd(r)).a,p)
p.delete()}},
bOd(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=0.75+0.25*Math.sin(a0*9)*Math.sin(a0*5.3)
for(w=a0*0.12,v=d.a,u=0.78*e,t=0.7*e,s=0;s<3;++s){r=D.az_[s]
q=r.a
p=r.c
o=q+p*0.1
n=r.b
m=r.d
l=n-m*0.38
k=A.bK(new A.t(o,l),m*0.74,p*0.5)
j=Ac.FV.j(u)
$.S()
i=new A.ao(B.O,B.M,B.S,B.T,B.R)
i.r=j.gp(0)
h=i.G()
v.drawOval(A.bG(k),h)
h.delete()
p=A.bK(new A.t(o+0,l+m*0.1),m*0.4,p*0.28)
l=new A.ao(B.O,B.M,B.S,B.T,B.R)
l.r=Q.xN.j(t).gp(0)
h=l.G()
v.drawOval(A.bG(p),h)
h.delete()
for(p=q*0.01,m=n-m-r.e*0.9,g=0;g<5;++g){f=B.k.F(w+g/5+p,1)
o=Math.sin(f*6+g)
n=new A.ao(B.O,B.M,B.S,B.T,B.R)
n.r=D.agi.j(0.16*(1-f)).gp(0)
h=n.G()
v.drawCircle(q+o*6+f*18,m-f*70,4+f*12,h)
h.delete()}}},
cGo(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
C.bCG(d,D.ej8,0.9,a0,D.hp_,!1,!1,D.abY,1,!1)
w=$.S().r
v=x.v
u=new A.aF(w,B.ag,e,e,A.a([],v))
u.D(new A.aY(52,470))
u.D(new A.aq(50,486))
u.D(new A.aq(66,486))
u.D(new A.aq(64,470))
u.D(new A.bt())
t=A.I()
t.r=D.ai9.gp(0)
d.aI(u,t)
C.bCG(d,D.eja,0.95,a0,D.hoV,!1,!1,D.abZ,1,!0)
t=new A.aF(w,B.ag,e,e,A.a([],v))
t.D(new A.aY(417,510))
t.D(new A.c5(431,532,445,510))
t.D(new A.aq(441,548))
t.D(new A.c5(431,553,421,548))
t.D(new A.bt())
u=A.I()
u.r=F.Fs.gp(0)
d.aI(t,u)
u=A.bK(D.ej9,8,28)
t=A.I()
t.r=D.bsb.gp(0)
d.dQ(u,t)
C.bCG(d,new A.t(-30+B.k.F(a0/26,1)*510,492),0.82,a0,D.hp0,!0,!1,D.Wu,1,!1)
t=B.k.F(a0/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.dQ(A.bK(new A.t(s+q*16,r-6),16,11),C.iw(D.ai0,1.8))
u=q<0
C.bCG(d,new A.t(s-q*6,r),0.62,a0,D.hp2,!1,u,D.Wu,2.2,!1)
C.bCG(d,new A.t(s-q*32,r+4),0.58,a0+1,D.hoZ,!1,u,D.Wu,2.2,!1)
this.bUr(d,D.eiO,a0)
for(u=d.a,t=a0*0.5,p=a0*4,o=0;o<3;++o){n=88+o*17+Math.sin(t+o)*6
m=520+B.o.F(o,2)*6
l=Math.max(0,Math.sin(p+o*2))*4
k=A.bK(new A.t(n,m),8,11)
j=o===1
i=j?D.ahW:D.aix
h=new A.ao(B.O,B.M,B.S,B.T,B.R)
h.r=i.gp(0)
g=h.G()
u.drawOval(A.bG(k),g)
g.delete()
k=j?D.ahW:D.aix
j=new A.ao(B.O,B.M,B.S,B.T,B.R)
j.r=k.gp(0)
g=j.G()
u.drawCircle(n+5,m+(-3+l),2.6,g)
g.delete()
j=new A.ao(B.O,B.M,B.S,B.T,B.R)
j.b=B.a9
j.c=1
j.r=B.aA.gp(0)
j.d=B.by
j.e=B.dQ
g=j.G()
u.drawLine.apply(u,[n+7.5,m+(-2+l),n+10,m+(-1.5+l),g])
g.delete()
n+=-1
j=new A.ao(B.O,B.M,B.S,B.T,B.R)
j.b=B.a9
j.c=1
j.r=B.aA.gp(0)
j.d=B.by
j.e=B.dQ
g=j.G()
u.drawLine.apply(u,[n,m+4,n,m+8,g])
g.delete()}f=a0<a1.f
u=A.bK(D.a7v,15+Math.sin(a0*2)*0.8,40)
t=A.I()
t.r=D.agE.gp(0)
d.dQ(u,t)
u=A.bK(D.a7v.a7(0,new A.t(-14,f?-9:-2)),12,15)
t=A.I()
t.r=D.biG.gp(0)
d.dQ(u,t)
t=new A.aF(w,B.ag,e,e,A.a([],v))
t.D(new A.aY(130,592-(f?16:6)))
t.D(new A.aq(134,592-(f?22:9)))
t.D(new A.aq(138,592-(f?16:6)))
t.D(new A.bt())
u=A.I()
u.r=D.biQ.gp(0)
d.aI(t,u)
u=D.a7v.a7(0,new A.t(-17,f?-9:-2))
t=A.I()
t.r=B.i2.gp(0)
d.ad(u,1.1,t)
v=new A.aF(w,B.ag,e,e,A.a([],v))
v.D(new A.aY(168,590))
w=Math.sin(a0*8)
v.D(new A.c5(180,588+w*(f?6:0),178,595))
d.aI(v,C.iw(D.agE,3.5))},
bUr(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=Math.max(0,Math.sin(f*0.6))*9,j=e.a7(0,new A.t(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=j.a,u=j.b,t=u+3,s=f*2,r=u+16,q=d.a,p=0;p<4;++p){o=w[p]
n=Math.sin(s+o)
$.S()
m=new A.ao(B.O,B.M,B.S,B.T,B.R)
m.b=B.a9
m.c=2
m.r=D.XJ.gp(0)
m.d=B.by
m.e=B.dQ
l=m.G()
q.drawLine.apply(q,[v+o,t,v+(o+n*1.5),r,l])
l.delete()}w=A.bK(j,17,32)
s=$.S()
r=A.I()
r.r=D.Fq.gp(0)
d.dQ(w,r)
r=A.bK(j.a7(0,D.eie),7,26)
w=A.ar(D.Fq,B.w,0.12)
w.toString
q=A.I()
q.r=w.gp(0)
d.dQ(r,q)
s=new A.aF(s.r,B.ag,null,null,A.a([],x.v))
s.D(new A.aY(v+13,u-3))
s.D(new A.aq(v+22,u-8+k))
s.D(new A.aq(v+20,u+k-0.5))
s.D(new A.aq(v+12,t))
s.D(new A.bt())
t=A.I()
t.r=D.Fq.gp(0)
d.aI(s,t)
t=A.bK(j.a7(0,new A.t(24,-7+k)),9,12)
s=A.I()
s.r=D.Fq.gp(0)
d.dQ(t,s)
s=-11+k
d.bo(j.a7(0,new A.t(22,s)),j.a7(0,new A.t(21,-17+k)),C.iw(D.XJ,1.6))
d.bo(j.a7(0,new A.t(26,s)),j.a7(0,new A.t(28,-16+k)),C.iw(D.XJ,1.6))
s=j.a7(0,new A.t(26,-8+k))
t=A.I()
t.r=B.w.gp(0)
d.ad(s,0.9,t)
d.bo(j.a7(0,new A.t(26,-3+k)),j.a7(0,new A.t(26,1+k)),C.iw(D.blv,1.4))
d.bo(j.a7(0,D.elb),j.a7(0,new A.t(-19,-7+Math.sin(f*7)*2)),C.iw(D.Fq,2.4))},
bRJ(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
for(w=a5.a,v=0;v<14;++v){u=v*3.141592653589793*2/14
t=Math.cos(u)
s=Math.sin(u)
if(Math.sin(u)<0){t=A.bK(new A.t(225+t*36,574+(s*13+6)),8,11)
$.S()
s=new A.ao(B.O,B.M,B.S,B.T,B.R)
s.r=D.bqT.gp(0)
r=s.G()
w.drawOval(A.bG(t),r)
r.delete()}}t=A.bK(D.a7x.a7(0,B.cy),17,52)
$.S()
s=A.I()
s.r=D.bdv.gp(0)
a5.dQ(t,s)
s=A.bK(D.a7x.a7(0,B.cy),12,44)
t=D.bh1.j(0.6+0.3*Math.sin(a6*6))
q=A.I()
q.r=t.gp(0)
a5.dQ(s,q)
for(p=0;p<3;++p){u=D.dgg[p]
t=225+Math.cos(u)*3
s=Math.cos(u)
q=Math.sin(u)
o=Math.cos(u)
n=Math.sin(u)
m=new A.ao(B.O,B.M,B.S,B.T,B.R)
m.b=B.a9
m.c=7
m.r=D.FE.gp(0)
m.d=B.by
m.e=B.dQ
r=m.G()
w.drawLine.apply(w,[t+s*24,579+q*4,t-o*24,579-n*4,r])
r.delete()
n=Math.cos(u)
o=Math.sin(u)
q=Math.cos(u)
s=Math.sin(u)
m=D.B9.j(0.6)
l=new A.ao(B.O,B.M,B.S,B.T,B.R)
l.b=B.a9
l.c=2
l.r=m.gp(0)
l.d=B.by
l.e=B.dQ
r=l.G()
w.drawLine.apply(w,[t+n*24,579+(o*4-2),t-q*24,579-(s*4+2),r])
r.delete()}k=46+80*a7.w
j=[D.eW5,D.eWC,D.eXD,D.eXV,D.eXB]
for(t=a6*8,s=a6*15,q=a6*3.3,o=x.v,i=0;i<3;++i){h=[1,0.72,0.42][i]
g=[D.bok,D.bkS,D.bql][i]
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
e.push(new A.kN(a1-a2*1.1,578-d*0.45,l-a2*0.2,578-d*0.7,a1+a0,578-d))
e.push(new A.kN(l+a2*0.3,578-d*0.65,a1+a2*1.15,578-d*0.4,a1+a2,578))
e.push(new A.bt())
l=new A.ao(B.O,B.M,B.S,B.T,B.R)
l.r=g.j(n?0.9:0.95).gp(0)
r=l.G()
l=a3.gbu().a.snapshot()
w.drawPath((a3.e=new A.cd(l)).a,r)
r.delete()}}for(t=a6*1.5,v=0;v<22;++v){a4=B.k.F(a6*(0.35+B.o.F(v,5)*0.06)+v/22,1)
s=Math.sin(v*1.9+t)
q=a7.w
o=B.o.F(v,3)
n=G.aiv.j((1-a4)*0.9)
$.S()
m=new A.ao(B.O,B.M,B.S,B.T,B.R)
m.r=n.gp(0)
r=m.G()
w.drawCircle(225+s*(10+a4*26),564-a4*(110+80*q),1.2+o*0.6,r)
r.delete()}for(t=a6*0.1,s=574-k,v=0;v<6;++v){a4=B.k.F(t+v/6,1)
q=Math.sin(a4*5+v)
o=D.agi.j(0.1*(1-a4))
$.S()
n=new A.ao(B.O,B.M,B.S,B.T,B.R)
n.r=o.gp(0)
r=n.G()
w.drawCircle(225+q*16+a4*12,s-a4*120,7+a4*20,r)
r.delete()}},
bRL(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=d.a,r=0;r<16;++r){q=B.k.F(r*83+Math.sin(w+r)*40+v,450)
p=420+B.o.F(r*37,300)+Math.sin(u+r*2)*26
o=Math.max(0,Math.sin(t+r*1.7))
n=D.bsj.j(0.18*o)
$.S()
m=new A.ao(B.O,B.M,B.S,B.T,B.R)
m.r=n.gp(0)
l=m.G()
s.drawCircle(q,p,5,l)
l.delete()
m=new A.ao(B.O,B.M,B.S,B.T,B.R)
m.r=D.bmd.j(0.9*o).gp(0)
l=m.G()
s.drawCircle(q,p,1.4,l)
l.delete()}},
c3p(d,e){switch(d){case 0:return e.b?D.hoW:D.aZC
case 1:return e.b?D.hp1:D.aZA
case 2:return D.aZz
case 3:return D.aZy
case 4:return D.aZB
default:return D.aZD}},
aCk(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
QS(d,e,f,g){var w,v=this,u=D.a51[e],t=v.c3p(e,g),s=new C.boi(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a51[e],l=e===0
m=B.k.E(((l?D.aKu:D.aKz).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a7B
s.as=D.DP
if(l){s.a=o?v.aCk(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.t(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.t(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.DP
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.eim
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.ejJ
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
s.Q=D.em6
s.as=D.aKM}if(e===2&&g.x!=null&&f<g.y){s.a=v.aCk(f,5)
s.b=0.4
s.as=new A.t(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aCk(f,e*3)
s.b=0.5
s.c=0.4}}C.hur(d,u.a,u.b*1.2,t,s,f,e,null)},
bF8(d,e,f){var w=new C.bRU(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gda(d){return this.c}}
C.aff.prototype={
a6(){return"_Stand."+this.b}}
C.add.prototype={}
C.ln.prototype={}
C.bQE.prototype={
bzO(d){var w,v,u,t,s=A.U(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
FQ(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aZ(r,new C.bQF())
return r},
aqA(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aLV(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.L)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
am0(d){var w,v,u=A.aX(x.N),t=d,s=0
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
gyX(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aZ(w,new C.bQG(this))
return B.d.gI(w)}}
C.att.prototype={}
C.zh.prototype={}
C.ak9.prototype={
gaEE(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Z(w,new C.bLE(),A.T(w).k("Z<1>")).gL(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ah(){var w=this
return A.H(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.Mf.prototype={
gaoK(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
if(t.gaEE(0))s.push(t)}return s},
ah(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.L)(w),++s){r=w[s]
p.push(A.H(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.H(["id",this.a,"title",q,"qs",p],u,t)},
cZA(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaoK(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.L)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.ln(B.a.i(s.a),p,B.d.cp(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.b9N.prototype={}
C.a9l.prototype={}
C.bh0.prototype={}
C.afd.prototype={}
C.ajo.prototype={
R(){return new C.ajp(B.bC,A.a([],x.cC),A.a([],x.e4),null,null)},
gcZ(){return this.d}}
C.ajp.prototype={
gMC(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDi(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gb9b(){var w,v=this,u=v.e
if(u===$){w=v.pS(v.gc9S())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
Z(){this.a2()
this.gb9b().h8(0)},
q(){this.gb9b().q()
this.buf()},
h8(d){this.m(new C.bJO(this))},
c9T(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fw(0,v)
if(w.c!=null)w.m(new C.bJJ())},
b7x(){var w,v,u,t=this,s=t.r
B.d.aa(s)
w=t.gMC()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bh0(u,(u+0.5)/v,w[t.x].b[u]))},
fw(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bs(w,new C.bJP())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c6e()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMC()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.k.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.as1(v,0.8,B.cI)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.as1(m.cy,0.8,G.na)
m.aYe("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.as1(q,0.88,D.lx)
p=m.gMC()[m.x]
n=p.c
if(u===n){m.aYe("The right gourd fell! It was "+p.b[n]+".")
return}}}},
as1(d,e,f){var w,v,u,t=new A.e6()
t.cX(B.k.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ag()*3.141592653589793*2
w.push(new C.afd(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aYe(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Q2()}},
c6e(){var w=this
if(w.x+1>=w.gMC().length){w.Q2()
return}++w.x
w.b7x()},
Q2(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Q2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMC().length
r=C.bFz(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bJH())
w=2
return A.b(C.Bw(u.a.d,r),$async$Q2)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.Bx(t.d,t.c.a,"catch",u.z),$async$Q2)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bJI())
return A.h(null,v)}})
return A.i($async$Q2,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.c9R()
else w=v.ch?v.c9U():A.as(new A.D(B.eu,A.x(A.a([D.aVc,B.Q,D.fH_,B.W,D.fN9,B.dT,C.ul("Play",v.geX(v),B.cI,B.hn,D.fr)],x.p),B.m,u,B.e,B.P,0,B.p),u),u,u,u)
return new C.tr("Calabash Catch",w,B.f1,u)},
c9U(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hB:B.Hb
p.push(A.X(u,v?B.ax:B.bU,r,r,r,22))}p.push(B.b2)
v=s.x
u=s.gMC()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aTM,r,r,r))
p.push(B.bc)
v=A.m(14)
p.push(A.p(r,A.d(""+s.z,r,r,r,r,r,r,B.iu,r,r,r),B.f,r,r,new A.o(B.bz,r,r,v,r,r,B.n),r,r,r,r,B.Gp,r,r,r))
p=A.B(p,B.m,r,B.e,B.i,0,r,r)
v=A.m(18)
t=A.J(B.cI,B.r,3)
return A.x(A.a([new A.D(D.bA2,p,r),A.p(r,A.d(u[s.x].a,r,r,r,r,r,r,D.frl,B.K,r,r),B.f,r,r,new A.o(D.q5,r,t,v,r,r,B.n),r,r,r,B.eZ,B.bg,r,r,1/0),B.am,A.E(A.cu(new C.bJN(s)),1)],q),B.m,r,B.e,B.i,0,B.p)},
c9R(){var w=this,v=null,u=A.as(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.pH,v,v,v),v,v,v),t=A.as(A.d(""+w.Q+" of "+w.gMC().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.UU,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cl(A.a([D.bb_,u,t,B.aQ,new C.I_(s,r,w.cx,v),B.aQ,A.as(C.ul("Back to the games",new C.bJG(w),B.cI,B.km,D.fr),v,v,v)],x.p),v,v,B.aa,v,v,B.ah,!1)}}
C.bc9.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a6.a,a1=a6.b,a2=0+a0,a3=$.S(),a4=A.I()
a4.sam(A.jx(B.I,new A.t(0,a1),D.cZI,G.azh,B.x,d))
a5.aP(new A.a3(0,0,a2,0+a1),a4)
a4=A.I()
a4.r=G.MQ.gp(0)
a5.ad(new A.t(a0*0.82,a1*0.16),22,a4)
a4=x.v
w=A.a([],a4)
v=new A.aF(a3.r,B.ag,d,d,w)
a3=a1*0.7
v.D(new A.aY(0,a3))
for(u=0;u<=a0;u+=6){t=new A.aq(u,a3+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.bx(s)
t=v.e
if(t!=null)t.a.delete()
v.e=null}v.D(new A.aq(a0,a1))
v.D(new A.aq(0,a1))
a3=$.S()
w=A.I()
w.r=D.bhV.gp(0)
a5.aI(v,w)
r=a0*0.12
a3=new A.aF(a3.r,B.ag,d,d,A.a([],a4))
w=a1*0.86
a3.D(new A.aY(r-26,w))
t=a1*0.5
s=a1*0.34
a3.D(new A.c5(r-14,t,r-10,s))
a3.D(new A.aq(r+10,s))
a3.D(new A.c5(r+14,t,r+26,w))
a3.D(new A.bt())
w=A.I()
w.r=D.afm.gp(0)
a5.aI(a3,w)
for(a3=a1*0.36,w=a1*0.24,t=a5.a,s=a1*0.22,q=0;q<4;++q){p=D.ckB[q]
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=D.afm.gp(0)
o.c=7
o.d=B.by
n=o.G()
t.drawLine.apply(t,[r,a3,r+p*46,w,n])
n.delete()
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=D.aeG.gp(0)
n=o.G()
t.drawCircle(r+p*50,s,18,n)
n.delete()}a3=a1*0.88
w=A.I()
w.r=D.biO.gp(0)
a5.aP(new A.a3(0,a3,a2,a3+a1*0.12),w)
for(a2=a1*0.9,a3=a2-8,m=0;m<18;++m){w=a0*m/17
s=new A.ao(B.O,B.M,B.S,B.T,B.R)
s.r=D.agV.gp(0)
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
k=new A.ao(B.O,B.M,B.S,B.T,B.R)
k.r=D.lx.j(0.6).gp(0)
n=k.G()
t.drawOval(A.bG(o),n)
n.delete()
continue}o=Math.sin(a2.dx*2+o)
J.bl(t.save())
t.translate(u,k*a1)
t.rotate(o*0.1*180/3.141592653589793,0,0)
$.S()
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=D.ag2.gp(0)
n=o.G()
t.drawCircle(0,-34,14,n)
n.delete()
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=D.bno.gp(0)
o.c=4
o.d=B.by
n=o.G()
t.drawLine.apply(t,[0,-46,2,-56,n])
n.delete()
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.sam(A.tt(D.ekU,46,D.d75,B.D5,B.x,d,d,0))
n=o.G()
t.drawCircle(0,0,34,n)
n.delete()
o=A.bK(D.el_,8,12)
k=new A.ao(B.O,B.M,B.S,B.T,B.R)
k.r=B.c.j(0.35).gp(0)
n=k.G()
t.drawOval(A.bG(o),n)
n.delete()
j=new A.iG(new A.es(l.c,d,d,B.cK,d,d,d,d,d,d,D.fpc),B.K,B.bX,new A.je(1),d,d,3,d,B.bV,d)
j.o_(62)
o=j.b
k=Math.max(40,o.c+10)
o=o.a.c
i=A.br(A.bK(B.cH,o.gba(o)+8,k),B.fE)
k=new A.ao(B.O,B.M,B.S,B.T,B.R)
k.r=D.q5.gp(0)
n=k.G()
t.drawRRect(A.e7(i),n)
n.delete()
k=new A.ao(B.O,B.M,B.S,B.T,B.R)
k.r=D.lx.gp(0)
k.b=B.a9
k.c=1.5
n=k.G()
t.drawRRect(A.e7(i),n)
n.delete()
k=j.b
o=k.c
k=k.a.c
j.a3(a5,new A.t(-o/2,4-k.gba(k)/2))
t.restore()}h=a2.cy*a0
a3=a2.dx
w=Math.sin(a3*4)
Y.AY(a5,new A.t(h,a1*0.93),a1*0.3,a3,!0,Math.abs(a2.db-a2.cy)*40*Math.abs(Math.sin(a2.dx*18)),2,B.dH,F.mF,!1,(w+1)/2)
g=A.bK(new A.t(h,a1*0.8),a1*0.07,a0*0.24)
a4=new A.aF($.S().r,B.ag,d,d,A.a([],a4))
w=g.a
a3=g.b
a4.D(new A.aY(w,a3))
s=g.c
a4.D(new A.aq(s,a3))
o=g.d
a4.D(new A.aq(s-8,o))
a4.D(new A.c5(g.gbL().a,o+8,w+8,o))
a4.D(new A.bt())
k=A.I()
k.r=D.Yv.gp(0)
a5.aI(a4,k)
for(a4=s-w,m=1;m<6;++m){s=w+a4*m/6
k=new A.ao(B.O,B.M,B.S,B.T,B.R)
k.r=D.B9.gp(0)
k.c=1.4
n=k.G()
t.drawLine.apply(t,[s,a3,s+(m-3)*2,o,n])
n.delete()}s=a3+(o-a3)*0.35
o=A.I()
o.r=G.na.gp(0)
a5.aP(new A.a3(w,s,w+a4,s+5),o)
w-=2
a3-=4
o=A.I()
o.r=D.bi_.gp(0)
a5.dQ(new A.a3(w,a3,w+(a4+4),a3+8),o)
for(a3=a2.w,a4=a3.length,q=0;q<a3.length;a3.length===a4||(0,A.L)(a3),++q){f=a3[q]
w=f.a
s=f.b
o=f.f
k=new A.ao(B.O,B.M,B.S,B.T,B.R)
k.r=f.e.j(B.k.E(o,0,1)).gp(0)
n=k.G()
t.drawCircle(w*a0,s*a1,3*o+1,n)
n.delete()}e=a2.dx-a2.go
if(e>=0&&e<1.2){a3=a2.fy
j=A.fy(d,d,d,d,A.cS(d,d,d,d,d,d,d,d,d,A.l(d,d,B.cI.j(1-e/1.2),d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,K.D_,d,d),"+"+a3),B.a4,B.bX,d,B.dA,B.bV)
j.eg()
j.a3(a5,new A.t(a2.id*a0-j.b.c/2,a1*0.72-e*60))}},
av(d){return!0}}
C.Q8.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aAQ(w.c,w.f,v),B.aw),s=A.m(10),r=A.J(B.bE,B.r,1.4)
return new A.a4(u+22,v,A.x(A.a([new A.a4(u,u,t,v),B.cS,A.p(v,A.d(w.d,v,1,B.a1,v,v,v,D.fhS,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.n),v,v,v,v,B.mL,v,v,v)],x.p),B.m,v,B.e,B.P,0,B.p),v)},
gY(d){return this.e}}
C.aAQ.prototype={
a3(d,e){var w=e.ek(B.I),v=e.gdE(),u=this.c?0.8:0
return Y.fRy(d,w,v*0.44,this.b,0,u)},
av(d){return d.b!==this.b||d.c!==this.c}}
C.azg.prototype={}
C.au4.prototype={
R(){return new C.au5(A.U(x.S,x.cq),null,null)},
gcZ(){return this.d}}
C.au5.prototype={
gkO(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hzt(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaEr(){var w=this.z
return w===$?this.z=this.X4(0):w},
giY(){var w,v=this.Q
if(v===$){w=this.gkO()
w=w.length===0?0:w[0].c.length
v=this.Q=A.bZ(w,-1,!1,x.S)}return v},
X4(d){var w,v,u,t,s=this.gkO()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.azg(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.azg(v[t],u[t],-1))
v=new A.e6()
v.cX(this.a.e*31+d)
B.d.e_(s,v)
return s},
q(){var w,v,u
for(w=this.as,w=new A.du(w,w.r,w.e);w.C();){v=w.d
v.r.q()
v.r=null
u=v.eL$
u.b=!1
B.d.aa(u.a)
u=u.gom()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dT$.a.aa(0)
v.qp()}this.buI()},
cOD(d,e){var w,v,u,t,s,r=this
if(d>=r.giY().length||r.giY()[d]!==-1||B.d.t(r.giY(),e))return
w=r.gaEr()[e]
v=r.gkO()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cnG(r,e,w,v))
A.cG(B.lD,new C.cnH(r))
return}++r.r
u=A.bm(null,B.hy,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.q()
t.n(0,d,u)
r.m(new C.cnI(r,d,e,w,v))
u.cq(0)},
kI(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkO()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cI(n,0,new C.cnJ())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cnK(t,r))
w=5
return A.b(C.Bw(t.a.d,r),$async$kI)
case 5:t.x=f
o=t.a
w=6
return A.b(C.Bx(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kI)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cnL())
w=1
break
case 4:for(o=t.as,n=new A.du(o,o.r,o.e);n.C();){q=n.d
q.r.q()
q.r=null
p=q.eL$
p.b=!1
B.d.aa(p.a)
p=p.gom()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dT$.a.aa(0)
q.qp()}o.aa(0)
t.m(new C.cnM(t))
case 1:return A.h(u,v)}})
return A.i($async$kI,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.as(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.pH,p,p,p),p,p,p)
v=r.f
v=A.as(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.UU,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tr(q,A.cl(A.a([D.aec,w,v,B.aQ,new C.I_(u,t,r.ch,p),B.aQ,A.as(C.ul("Back to the games",new C.cnC(d),B.cI,B.km,D.fr),p,p,p)],x.p),p,p,B.aa,p,p,B.ah,!1),B.f1,p)}w=r.gkO()
v=r.e
s=w[v]
return new C.tr(q,new A.D(B.uf,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aTH,B.K,p,p),A.E(A.cu(new C.cnD(r,s)),1)],x.p),B.m,p,B.e,B.i,0,B.p),p),B.f1,p)}}
C.bbF.prototype={
a3(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2=y.B,b3=b0.d,b4=new A.Z(b3,new C.cN2(),A.T(b3).k("Z<1>")).gL(0),b5=b0.b,b6=b5.a7(0,B.Jd)
$.S()
w=A.I()
w.r=D.ly.j(0.18+0.1*b4).gp(0)
b7.ad(b6,70+b4*10,w)
w=b8.a
b6=b8.b
v=b5.a7(0,D.eht)
u=A.I()
u.r=B.ob.j(0.5).gp(0)
u.c=10
u.d=B.by
b7.bo(new A.t(w/2,b6*0.98),v,u)
for(v=b0.c,u=b5.a,b5=b5.b,t=b5+90,s=x.v,b5+=46,r=x.dc,q=x.U,p=b7.a,o=0;o<v.length;++o){n=v[o]
m=n.a+0
l=B.dU.aw(0,B.k.E(b3[o],0,1))
k=$.S().r
j=A.a([],s)
i=new A.aF(k,B.ag,b1,b1,j)
j.push(new A.aY(u,b5))
j.push(new A.c5((u+m)/2,t,m,n.b+-46))
if(l<1)for(n=new A.aF(k,B.ag,b1,b1,A.bp(j,!0,r)),m=A.a([],q),h=new A.rm(n,!1,m);h.C();){g=h.c
if(g===0||h.f)A.b9(A.jD(b2));--g
f=new A.Bu(h,g)
e=0
for(;;){h.ie()
d=m[g].b
d===$&&A.c()
if(!(e<d.a.length()))break
h.ie()
d=m[g].b
d===$&&A.c()
d=Math.min(d.a.length(),e+7)
d=new A.aF(k,n.b,b1,new A.cw([f,e,d,!0]),A.a([],s))
$.S()
a0=new A.ao(B.O,B.M,B.S,B.T,B.R)
a0.r=B.aX.gp(0)
a0.b=B.a9
a0.c=3
a1=a0.G()
a0=d.gbu().a.snapshot()
p.drawPath((d.e=new A.cd(a0)).a,a1)
a1.delete()
e+=14}}if(l>0)for(n=new A.aF(k,i.b,i.c,b1,A.bp(j,!0,r)),m=A.a([],q),j=new A.rm(n,!1,m),h=l>0.4,g=9-3*l,d=11*l,a0=6*l;j.C();){a2=j.c
if(a2===0||j.f)A.b9(A.jD(b2));--a2
j.ie()
a3=m[a2].b
a3===$&&A.c()
a3=a3.a.length()
a3=new A.aF(k,n.b,b1,new A.cw([new A.Bu(j,a2),0,a3*l,!0]),A.a([],s))
$.S()
a4=new A.ao(B.O,B.M,B.S,B.T,B.R)
a4.r=D.FS.gp(0)
a4.b=B.a9
a4.c=g
a4.d=B.by
a1=a4.G()
a4=a3.gbu().a.snapshot()
p.drawPath((a3.e=new A.cd(a4)).a,a1)
a1.delete()
j.ie()
a3=m[a2].b
a3===$&&A.c()
a3=a3.a.length()
j.ie()
a5=m[a2].Hd(a3*l)
if(h)for(a2=a5.a,a3=a2.a,a2=a2.b,a6=0;a6<4;++a6){a7=a6*1.6+o
a4=A.bK(new A.t(a3+Math.cos(a7)*14,a2+Math.sin(a7)*10),a0,d)
a8=new A.ao(B.O,B.M,B.S,B.T,B.R)
a8.r=B.be.gp(0)
a1=a8.G()
p.drawOval(A.bG(a4),a1)
a1.delete()}}}if(b0.e)for(b3=b6*0.3,o=0;o<6;++o){a9=new A.iG(D.fhl,B.a4,B.bX,new A.je(1),b1,b1,b1,b1,B.bV,b1)
a9.eg()
a9.a3(b7,new A.t(w*(0.15+o*0.14),b3-B.o.F(o,3)*14))}},
av(d){return!0}}
C.ay0.prototype={
R(){return new C.ay1(A.aX(x.S))},
gcZ(){return this.d}}
C.ay1.prototype={
gkO(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hAn(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
Z(){this.a2()
this.b7G()},
q(){var w=this.ch
if(w!=null)w.a4(0)
this.a1()},
b7G(){var w=this.ch
if(w!=null)w.a4(0)
this.ch=A.dh(B.rz,new C.cCA(this))},
boq(d){var w,v=this
if(v.as||v.z.t(0,d))return
w=v.gkO()[v.e]
if(w.e[d]===w.b)v.m(new C.cCI(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cCJ(v,d))
A.cG(B.iY,new C.cCK(v))}},
cU6(){var w=this
if(!w.as&&w.f<w.gkO()[w.e].d.length)w.m(new C.cCL(w))},
kI(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkO()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a4(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.m(new C.cCM(t,s))
w=5
return A.b(C.Bw(t.a.d,s),$async$kI)
case 5:t.y=f
q=t.a
w=6
return A.b(C.Bx(q.d,q.c.a,"who",t.r),$async$kI)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cCN())
w=1
break
case 4:t.m(new C.cCO(t))
t.b7G()
case 1:return A.h(u,v)}})
return A.i($async$kI,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.as(A.d(""+a0.w+" of "+a0.gkO().length+" guessed",a2,a2,a2,a2,a2,a2,B.pH,a2,a2,a2),a2,a2,a2)
v=A.as(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.UU,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tr(a1,A.cl(A.a([D.bbb,w,v,B.aQ,new C.I_(u,t,a0.ax,a2),B.aQ,A.as(C.ul("Back to the games",new C.cCC(a3),B.cI,B.km,D.fr),a2,a2,a2)],x.p),a2,a2,B.aa,a2,a2,B.ah,!1),B.f1,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkO()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.Kp,B.K,a2,a2),B.W,A.as(A.lx(new C.cCD(a0,r),a2,B.b5,B.hy,a2,a2,new A.bq(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ay(B.cI,2,B.r,-1)
k=o+1
w.push(new A.qX(new A.bq(0,1,u),new C.cCE(),A.p(a2,new A.ca(B.aM,B.e,B.i,B.m,a2,B.p,a2,0,A.a([new A.qz(new A.y(""+k,a2,B.nN,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.lx,a2,12,a2),B.as,new A.by(1,B.ba,new A.y(v[n].d[o],a2,D.ftV,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.q5,a2,new A.bH(l,l,l,l),new A.bh(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.ct,B.bg,a2,a2,a2),B.b5,B.iY,a2,new A.bR("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.as(A.bN(!1,D.fUY,a2,a2,!0,a2,a2,a2,a0.gcU5(),a2,a2),a2,a2,a2))
w.push(B.Q)
if(a0.as){u=D.ly.j(0.2)
q=A.m(16)
p=A.J(D.ly,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fx,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.x(A.a([m,B.W,C.ul(v,a0.gq9(a0),B.cI,B.jB,D.fr)],t),B.m,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bD,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.t(0,o)?B.dr:B.cI.j(0.2)
g=new A.aP(16,16)
l=new A.ay(n.t(0,o)?B.fb:B.cI,2,B.r,-1)
f=v[a0.e].e[o]
e=n.t(0,o)?B.bU:B.c
d=n.t(0,o)?B.x0:a2
t.push(new A.qX(new A.bq(0,i,u),new C.cCF(),A.aA(a2,A.p(a2,new A.y(f,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),a2,B.K,a2,a2,a2,a2,a2,a2,a2),B.f,a2,D.adk,new A.o(h,a2,new A.bH(l,l,l,l),new A.bh(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.ji,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cCG(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a3),B.b5,B.m5,a2,new A.bR("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bY(B.fI,t,B.br,a2,10,10))}return new C.tr(a1,A.cl(w,a2,a2,B.akV,a2,a2,B.ah,!1),B.f1,a2)}}
C.az1.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.aGg.prototype={
aV(){this.b1()
this.b0()
this.dK()},
q(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdF())
w.b7$=null
w.a1()}}
C.af1.prototype={
aqc(d){},
aqE(){var w=this,v=w.pS(new C.f3k(w))
v.h8(0)
w.LI$!==$&&A.aQ()
w.LI$=v}}
C.aK4.prototype={
gbkT(d){var w=this.c
return B.a.au(w,0,Math.min(this.d,w.length))},
VD(d){var w=this,v=w.b
if(v!=null)v.a4(0)
w.c=d
w.d=0
w.b=A.dh(D.ajW,new C.fdq(w))},
bqJ(d){var w=this,v=w.b
if(v!=null)v.a4(0)
w.d=w.c.length
w.a.$0()},
q(){var w=this.b
return w==null?null:w.a4(0)}}
C.alk.prototype={
R(){return new C.all(new C.alu(),A.a([],x.t),new A.eC(0,$.ax()),$,0,null,null)},
gcZ(){return this.d}}
C.all.prototype={
gMA(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDi(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gha(d){var w,v=this,u=v.e
if(u===$){w=C.Mv(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqg(){var w=this.r
return w===$?this.r=new C.aK4(new C.bRq(this)):w},
gap1(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMA()[v].c)u.push(1)
return u.length},
gbkb(){var w=this.gha(0)
return w.gyX()==null?"Elder":B.a.i(w.gyX().b)},
Z(){this.a2()
this.aqE()},
q(){var w,v=this
v.gqg().q()
v.f.q()
w=v.LI$
w===$&&A.c()
w.q()
w=v.pZ$
w.T$=$.ax()
w.P$=0
v.bun()},
cIL(){var w=this
w.m(new C.bRn(w))
w.gqg().VD(w.gMA()[w.x].a)},
KL(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqg()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.pZ$.a
v.ax=u
v.ay=u+1
v.m(new C.bRl())
A.cG(B.hy,new C.bRm(v))},
bom(){var w=this.gap1(0)/this.gMA().length*100
if(w>=90)return D.eT4
if(w>=75)return D.eR6
if(w>=60)return D.eHP
if(w>=45)return D.eLd
return D.eCe},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.crq()
w=A.bS(0,new A.er(A.b4(m,m,m,new C.bsg(n,n.pZ$),B.aw),m),0,0,0)
if(!n.Q){v=D.q5.j(0.96)
u=A.m(20)
t=A.J(B.cI,B.r,3)
u=A.p(m,A.x(A.a([A.d("Elder "+n.gbkb()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aUB,B.K,m,m),B.W,C.ul("Start the test",n.gBs(),B.cI,B.j_,D.fr)],x.p),B.m,m,B.e,B.P,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.n),m,m,m,m,B.bD,m,m,m)
v=u}else{v=n.x
u=n.gMA()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aUD,m,m,m)
if(n.Q){t=n.gqg()
t=t.d<t.c.length}else t=!1
if(t)u=D.f9R
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ay(D.B9,4,B.r,-1)
s.push(A.aA(m,A.p(m,new A.y(q[r],m,D.fl4,m,B.K,m,m,m,m,m,m,m),B.f,m,D.adk,new A.o(D.be0,m,new A.bH(o,o,o,o),new A.bh(p,p,p,p),m,m,B.n),m,m,m,m,B.NA,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bRo(n,r),m,m,m,m,m,m,!1,B.a3))}u=A.bY(B.fI,s,B.br,new A.bR("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.p_(u,B.mG,A.qs(),B.b5,B.b5,A.L7())],x.p),B.m,m,B.e,B.P,0,B.p)
v=u}return new C.tr("Village School",new A.an(B.a_,m,B.ab,B.t,A.a([w,A.ap(10,v,m,m,10,10,m,m)],x.p),m),B.f1,m)},
crq(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bom(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMA()[v].c)g.push(v)
u=A.m(22)
t=A.J(B.cI,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fpv,B.K,i,i)
r=A.d("Signed by Elder "+j.gbkb(),i,i,i,i,i,i,D.fo8,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.ftg,i,i,i),D.eu9],q)
o=A.d(h.b,i,i,i,i,i,i,D.fv7,i,i,i)
n=j.gap1(0)
m=j.gMA()
u=A.p(i,A.x(A.a([D.fGi,B.au,s,r,B.W,new A.an(B.A,i,B.ab,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.aap,i,i,i),B.Q,D.arB],q),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(D.q5,i,t,u,i,i,B.n),i,i,i,i,B.fm,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.I_(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aQ,D.fW1,B.Q],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.L)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ay(B.bz,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.x(A.a([new A.y(p.a,i,B.fS,i,i,i,i,i,i,i,i,i),B.au,new A.y("You said: "+p.b[w[v]],i,D.fqF,i,i,i,i,i,i,i,i,i),new A.y(p.d,i,D.fsT,i,i,i,i,i,i,i,i,i)],q),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.dr,i,new A.bH(k,k,k,k),new A.bh(r,r,r,r),i,i,B.n),i,i,i,B.ct,B.bg,i,i,i))}B.d.v(s,u)}s.push(B.aB)
s.push(A.as(C.ul("Back to the games",new C.bRh(j),B.cI,B.km,D.fr),i,i,i))
return new C.tr("Village School",A.cl(s,i,i,B.bQ,i,i,B.ah,!1),B.f1,i)}}
C.bsg.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.b,e=f.pZ$.a,d=a1.a,a0=f.f.Mj(a2).b
a0===$&&A.c()
a0=a0.a
a0===$&&A.c()
a0=a0.a
a0.toString
d.drawPicture(a0)
w=C.h7L(a2)
J.bl(d.save())
d.translate(w.a,w.b)
a1.bW(0,w.c)
if(f.Q){a0=f.gqg()
v=a0.d<a0.c.length}else v=!1
for(u=0;u<2;++u){a0=D.cU2[u]-6
$.S()
t=new A.ao(B.O,B.M,B.S,B.T,B.R)
t.r=D.FE.gp(0)
s=t.G()
d.drawRect(A.bG(new A.a3(a0,340,a0+12,450)),s)
s.delete()}a0=A.br(D.a8u.cr(10),B.hU)
$.S()
t=A.I()
t.r=D.B9.gp(0)
a1.az(a0,t)
t=A.br(D.a8u,B.hH)
a0=A.I()
a0.sam(A.jx(new A.t(30,96),new A.t(420,346),D.dcm,g,B.x,g))
a1.az(t,a0)
r=new A.e6()
r.cX(2)
for(q=0;q<18;++q){a0=r.ag()
t=r.ag()
p=r.ag()
p=A.bK(new A.t(30+a0*390,96+t*250),8+r.ag()*14,30+p*60)
t=new A.ao(B.O,B.M,B.S,B.T,B.R)
t.r=B.c.j(0.025).gp(0)
s=t.G()
d.drawOval(A.bG(p),s)
s.delete()}a0=A.I()
a0.r=K.ahI.gp(0)
a1.aP(new A.a3(30,354,420,362),a0)
a0=A.I()
a0.r=B.aP.gp(0)
a1.aP(D.f1J,a0)
a0=A.I()
a0.r=B.bM.gp(0)
a1.aP(D.f1N,a0)
a0=A.br(D.f1D,B.hG)
t=A.I()
t.r=D.Yv.gp(0)
a1.az(a0,t)
o=B.k.E((e-f.ax)/0.7,0,1)
if(f.Q){a0=f.gqg().gbkT(0)
n=A.fy(g,g,7,g,A.cS(g,g,g,g,g,g,g,g,g,D.fxm,a0+(v?"|":"")),B.a4,B.bX,g,B.dA,B.bV)
n.o_(346)
J.bl(d.save())
a0=A.bG(D.a8u)
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
a0.r=D.bt3.gp(0)
a1.az(t,a0)}}else{n=A.fy(g,g,g,g,D.fhB,B.K,B.bX,g,B.dA,B.bV)
n.o_(340)
n.a3(a1,new A.t(55,176))}if(v)for(a0=e*1.2,t=e*3,q=0;q<8;++q){m=B.k.F(a0+q/8,1)
p=B.o.F(f.gqg().d*9,310)
l=Math.sin(q+t)
k=new A.ao(B.O,B.M,B.S,B.T,B.R)
k.r=B.c.j(0.7*(1-m)).gp(0)
s=k.G()
d.drawCircle(70+p+l*6,166+m*70,1.6,s)
s.delete()}a0=f.gha(0).gyX()
j=(a0==null?g:a0.c)===D.oi?1:0
i=e<f.ay
h=A.a([new A.z(470,new C.f3l(e,a1,j,v,i,D.eiy)),new A.z(520,new C.f3m(a1,e,v)),new A.z(575,new C.f3n(a1,e,v)),new A.z(585,new C.f3o(this,a1,e,v)),new A.z(615,new C.f3p(this,v,a1,e,i))],x.E)
B.d.aZ(h,new C.f3q())
for(u=0;u<5;++u)h[u].b.$0()
d.restore()},
c9V(d,e){var w,v,u,t,s,r,q,p=$.S(),o=A.a([],x.v),n=new A.aF(p.r,B.ag,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.aY(r,q)
o.push(r)
q=n.f
if(q!=null)r.bx(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new A.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.bx(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.D(new A.bt())
return n},
av(d){return!1}}
C.ali.prototype={
R(){return new C.alj(new C.alu(),A.U(x.S,x.i),new A.eC(0,$.ax()),$,0,null,null)},
gcZ(){return this.d}}
C.alj.prototype={
gkO(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hzh(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
giY(){var w=this.z
return w===$?this.z=this.Fn(0):w},
gaKw(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.Fn(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cp(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.Fn(0):r).length);++v}s.Q=w
r=w}return r},
Fn(d){var w,v,u,t,s=this.gkO()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e0(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e6()
u.cX(this.a.e+d*7)
B.d.e_(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f4(u,new C.bR3())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a2()
this.aqE()},
q(){var w,v=this
v.e.q()
w=v.LI$
w===$&&A.c()
w.q()
w=v.pZ$
w.T$=$.ax()
w.P$=0
v.bum()},
aqc(d){var w,v,u,t,s,r=this,q=r.giY().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cp(u===$?r.z=r.Fn(0):u,v)
s=r.gaKw()
s[v]=s[v]+(450*(t+0.5)/q-r.gaKw()[v])*Math.min(1,w)}},
cZg(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.giY().length)return
w=v.y
if(w===-1){v.m(new C.bRe(v,d))
return}if(w===d){v.m(new C.bRf(v))
return}v.m(new C.bRg(v,B.d.cp(v.giY(),v.y),d,B.d.cp(v.giY(),d)))},
cJq(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.Fn(0):u).length))break
t=s.gkO()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.Fn(0):u)[v]]===v);++v}s.m(new C.bR9(s,B.d.d_(w,new C.bRa())))},
kI(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkO().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bRb(t,s))
w=5
return A.b(C.Bw(t.a.d,s),$async$kI)
case 5:t.x=f
q=t.a
w=6
return A.b(C.Bx(q.d,q.c.a,"lineup",t.r*10),$async$kI)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bRc())
w=1
break
case 4:t.m(new C.bRd(t))
case 1:return A.h(u,v)}})
return A.i($async$kI,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.as(A.d(""+l.r+" of "+l.gkO().length+" lines right",k,k,k,k,k,k,B.pH,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tr("Line Up",A.cl(A.a([D.aec,w,B.aQ,new C.I_(v,u,l.ch,k),B.aQ,A.as(C.ul("Back to the games",new C.bR5(d),B.cI,B.km,D.fr),k,k,k)],x.p),k,k,B.aa,k,k,B.ah,!1),B.f1,k)}w=A.a([],x.t)
for(t=0;v=l.gkO(),t<v[l.f].d.length;++t)w.push(t)
B.d.aZ(w,new C.bR6(l))
u=A.bS(0,A.cu(new C.bR7(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aUD,k,k,k)
s=v[s]
q=x.p
s=A.ap(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fpW,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fs7,B.K,k,k)],q),B.m,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.m(16)
n=l.ax
m=A.J(n?D.ly:G.na,B.r,2)
r.push(A.p(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bR8(l),x.cM).aG(0,", then ")+".",k,k,k,k,k,k,D.fuh,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.n),k,k,k,B.d1,B.bg,k,k,1/0))}if(!l.at)r.push(C.ul("That is my line!",l.gcJp(l),B.cI,B.hA,D.fr))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.ul(w,l.gq9(l),B.cI,B.jB,D.fr))}return new C.tr("Line Up",new A.an(B.a_,k,B.ab,B.t,A.a([u,s,A.ap(12,A.x(r,B.m,k,B.e,B.P,0,B.p),k,k,12,12,k,k)],q),k),B.f1,k)}}
C.biQ.prototype={
a3(c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.pZ$.a,c6=c8.a,c7=c4.e.Mj(c9).b
c7===$&&A.c()
c7=c7.a
c7===$&&A.c()
c7=c7.a
c7.toString
c6.drawPicture(c7)
w=C.h7L(c9)
J.bl(c6.save())
c6.translate(w.a,w.b)
c8.bW(0,w.c)
v=c4.giY().length
c7=$.S().r
u=x.v
t=new A.aF(c7,B.ag,c3,c3,A.a([],u))
t.D(new A.aY(10,470))
t.D(new A.c5(225,500,440,470))
s=A.I()
s.r=D.Yv.gp(0)
s.b=B.a9
s.c=4
c8.aI(t,s)
for(s=c5*3,r=0;r<12;++r){q=30+r*36
p=470+30*Math.sin(3.141592653589793*(q-10)/430)*0.95
o=Math.sin(s+r)
n=A.a([],u)
m=new A.aF(c7,B.ag,c3,c3,n)
n.push(new A.aY(q,p))
n.push(new A.aq(q+16,p+6+o*3))
n.push(new A.aq(q,p+20))
n.push(new A.bt())
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=[B.cI,G.na,D.ly,B.aJ][B.o.F(r,4)].gp(0)
l=o.G()
o=m.gbu().a.snapshot()
c6.drawPath((m.e=new A.cd(o)).a,l)
l.delete()}this.b_S(c8,"OLDEST",D.ejy,B.cI)
this.b_S(c8,"YOUNGEST",D.ej_,B.be)
c7=A.br(D.f1x,B.fE)
u=A.I()
u.r=D.FE.gp(0)
c8.az(c7,u)
u=A.br(D.f1w,B.hH)
c7=A.I()
c7.r=D.B9.gp(0)
c8.az(u,c7)
k=c5<c4.CW
j=c5<c4.cx
i=v>=5?0.92:1.12
c7=A.a([],x.t)
for(h=0;h<v;++h)c7.push(h)
B.d.aZ(c7,new C.dol())
for(u=c7.length,s=440/v-8,o=c5*10,n=!k,m=c4.as,g=c5*9,f=c5*8,e=c5*12,d=0;d<c7.length;c7.length===u||(0,A.L)(c7),++d){h=c7[d]
a0=c4.z
a1=B.d.cp(a0===$?c4.z=c4.Fn(0):a0,h)
q=c4.gaKw()[h]
a2=c4.y===h
a3=a2?Math.abs(Math.sin(g))*10:0
a4=m.h(0,h)
if(a4!=null&&c5<a4)a3+=Math.sin((1-(a4-c5)/0.5)*3.141592653589793)*14
a5=c4.at&&c4.gkO()[c4.f].e[h]===a1
a6=c4.at&&!c4.ax&&!a5
a7=c4.gkO()
a8=a7[c4.f].c
a9=a8.length>h?a8[h]:h
if(n)b0=c4.at&&a5
else b0=!0
b1=Math.max(0,Math.sin(o+h))
if(a2){$.S()
a8=new A.ao(B.O,B.M,B.S,B.T,B.R)
a8.r=B.cI.j(0.22+0.1*Math.sin(f)).gp(0)
l=a8.G()
c6.drawCircle(q,520,54,l)
l.delete()}a8=D.dg4[B.o.F(a9,6)]
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
else b8=a2?D.elE:c3
if(b0)b9=new A.t(3+b1*8,-56)
else if(j&&a6)b9=D.aKM
else b9=a2?new A.t(30,-104+Math.sin(f)*5):c3
C.RY(c8,new A.t(q,612),b7,b4,(225-q)/225*0.5,-0.3,b8,b9,D.Jf,a8,b3,0,i,b2,b5,c5,b6)
a7=a7[c4.f].d[h]
c0=new A.iG(new A.es(a7,c3,c3,B.cK,c3,c3,c3,c3,c3,c3,D.fnF),B.a4,B.bX,new A.je(1),"\u2026",c3,1,c3,B.bV,c3)
c0.o_(s)
c1=A.br(A.bK(new A.t(q,650),24,c0.b.c+16),B.fE)
$.S()
a7=new A.ao(B.O,B.M,B.S,B.T,B.R)
if(a5)a8=B.ip
else a8=a6?B.ru:D.q5
a7.r=a8.gp(0)
l=a7.G()
c6.drawRRect(A.e7(c1),l)
l.delete()
a7=new A.ao(B.O,B.M,B.S,B.T,B.R)
if(a5)a8=D.ly
else a8=a6?G.na:D.lx
a7.r=a8.gp(0)
a7.b=B.a9
a7.c=2
l=a7.G()
c6.drawRRect(A.e7(c1),l)
l.delete()
a7=c0.b
a8=a7.c
a7=a7.a.c
c0.a3(c8,new A.t(q-a8/2,650-a7.gba(a7)/2))
c2=new A.iG(new A.es(""+(a1+1),c3,c3,B.cK,c3,c3,c3,c3,c3,c3,D.fnY),B.a4,B.bX,new A.je(1),c3,c3,c3,c3,B.bV,c3)
c2.eg()
c2.a3(c8,new A.t(q-c2.b.c/2,668))}if(k)for(c4=c5*2,c7=c5*120,u=c5*4,r=0;r<26;++r){q=B.k.F(r*53+Math.sin(c4+r)*20,450)
s=B.k.F(c7+r*37,420)
J.bl(c6.save())
c6.translate(q,140+s)
c6.rotate((u+r)*180/3.141592653589793,0,0)
s=A.bK(B.I,4,8)
$.S()
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=[B.cI,G.na,D.ly,B.aJ,B.c][B.o.F(r,5)].gp(0)
l=o.G()
c6.drawRect(A.bG(s),l)
l.delete()
c6.restore()}c6.restore()},
b_S(d,e,f,g){var w,v,u=null,t=A.fy(u,u,u,u,A.cS(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,K.D_,u,u),e),B.a4,B.bX,u,B.dA,B.bV)
t.eg()
w=t.b
v=w.c
w=w.a.c
t.a3(d,f.aE(0,new A.t(v/2,w.gba(w)/2)))},
av(d){return!1}}
C.a1n.prototype={
a6(){return"_Trip."+this.b}}
C.ale.prototype={
R(){return new C.alf(D.Wz,new A.eC(0,$.ax()),$,0,null,null)},
gcZ(){return this.d}}
C.alf.prototype={
gD6(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDi(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gha(d){var w,v=this,u=v.e
if(u===$){w=C.Mv(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqg(){var w=this.f
return w===$?this.f=new C.aK4(new C.bQQ(this)):w},
gTB(){var w=this.gha(0)
return w.gyX()==null?"Grandma":B.a.i(w.gyX().b)},
Z(){this.a2()
this.aqE()},
q(){var w,v=this
v.gqg().q()
w=v.LI$
w===$&&A.c()
w.q()
w=v.pZ$
w.T$=$.ax()
w.P$=0
v.bul()},
aqc(d){var w,v,u,t=this
if(t.r!==D.ac9)return
w=B.dw.aw(0,B.k.E((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gD6()
if(v+1>=u.length){t.r=D.aca
t.WA()}else{++t.w
t.ay=!1
t.r=D.WA
t.gqg().VD(u[t.w].a)}if(t.c!=null)t.m(new C.bQO())}},
WA(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$WA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqg().VD("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gD6().length
r=C.bFz(t,u.z,s)
u.as=r
w=2
return A.b(C.Bw(u.a.d,r),$async$WA)
case 2:u.at=e
s=u.a
w=3
return A.b(C.Bx(s.d,s.c.a,"journey",u.x*10),$async$WA)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bQI())
return A.h(null,v)}})
return A.i($async$WA,v)},
bpD(){this.aT5()},
aT5(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.ac9
if(w.c!=null)w.m(new C.bQJ())},
KL(d){var w,v,u,t,s=this
if(s.r!==D.WA)return
w=s.gD6()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bQN(s,d,v))
u=s.gqg()
t=s.w
u.VD(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cOC(){if(this.r!==D.AI)return
this.aT5()},
B(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.er(A.b4(s,s,s,new C.bif(t,t.pZ$),B.aw),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gD6().length;++w){v=t.w
if(w<v||t.r===D.aca)v=B.cI
else v=w===v?B.c:B.aX
u=new A.aP(4,4)
p.push(new A.by(1,B.ba,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bh(u,u,u,u),s,s,B.n),s,7,s,B.yx,s,s,s,s),s))}p.push(B.bm)
p.push(D.fHT)
return new C.tr("Safari Journey",new A.an(B.a_,s,B.ab,B.t,A.a([r,A.ap(s,A.B(p,B.m,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ap(10,t.cj6(),s,s,10,10,s,s)],q),s),B.f1,s)},
cj6(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bQM(o),l=D.q5.j(0.96),k=A.m(22),j=A.J(B.cI,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTB()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aUB,B.K,n,n),B.W,C.ul("Start the journey",o.gbpC(),B.cI,D.bNg,D.fr)],x.p),B.m,n,B.e,B.P,0,B.p)
break
case 3:w=D.baK
break
case 1:w=o.w
v=o.gD6()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ay(D.lx,2.5,B.r,-1)
t.push(A.aA(n,A.p(n,new A.y(r[s],n,D.aTZ,n,B.K,n,n,n,n,n,n,n),B.f,n,D.ads,new A.o(D.aiR,n,new A.bH(p,p,p,p),new A.bh(q,q,q,q),n,n,B.n),n,n,n,n,V.w7,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bQK(o,s),n,n,n,n,n,n,!1,B.a3))}w=A.x(A.a([w,B.Q,A.bY(B.bG,t,B.br,n,8,8)],u),B.E,n,B.e,B.P,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gD6().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.Q,new A.bM(B.a8,n,n,C.ul(v,o.gcOB(),B.cI,B.jB,D.fr),n)],x.p),B.E,n,B.e,B.P,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTB()),B.Q,A.d(""+o.x+" of "+o.gD6().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aUh,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aPZ(v)
u=C.aPZ(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.aap,n,n,n))}w.push(B.Q)
w.push(A.as(C.ul("Back to the games",new C.bQL(o),B.cI,B.km,D.fr),n,n,n))
w=A.x(w,B.E,n,B.e,B.P,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aC0,n,B.n),n,n,n,n,B.bg,n,n,n)}}
C.bif.prototype={
a3(d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=this.b,c7=c6.pZ$.a,c8=d6.a,c9=d6.b,d0=c6.CW,d1=c6.gD6(),d2=B.k.E(d0/(520*(d1.length+1)),0,1),d3=c6.r===D.ac9,d4=c9*0.5
d0=A.ar(D.bft,D.bpE,d2)
d0.toString
w=A.ar(D.XL,G.agy,d2)
w.toString
v=A.ar(B.tO,D.bo6,d2)
v.toString
$.S()
u=A.I()
t=x.O
u.sam(A.jx(B.I,new A.t(0,d4),A.a([d0,w,v],t),G.a3w,B.x,c5))
d5.aP(new A.a3(0,0,0+c8,0+c9),u)
s=new A.t(c8*(0.15+0.7*d2),d4*(0.28+0.45*d2*d2))
u=A.I()
u.sam(A.tt(s,60,A.a([D.bou,B.L],t),c5,B.x,c5,c5,0))
d5.ad(s,60,u)
u=A.I()
u.r=B.XW.gp(0)
d5.ad(s,22,u)
for(d0=d5.a,w=c7*4,v=c8+240,u=c9*0.06,r=0;r<5;++r){q=B.k.F(r*190-c6.CW*0.06-w,v)-120
p=u+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dvc[o]
$.S()
m=new A.ao(B.O,B.M,B.S,B.T,B.R)
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
if(a1!=null)a0.bx(a1)
a0=g.e
if(a0!=null)a0.a.delete()
g.e=null}i=new A.aq(c8,u)
h.push(i)
h=g.f
if(h!=null)i.bx(h)
i=g.e
if(i!=null)i.a.delete()
g.e=null
$.S()
i=new A.ao(B.O,B.M,B.S,B.T,B.R)
i.r=A.ar(j===0?D.be2:D.bsx,D.biV,v).gp(0)
l=i.G()
i=g.e
d0.drawPath((i==null?g.e=new A.cd(g.gbu().a.snapshot()):i).a,l)
l.delete()}for(v=d4+2,r=0;r<8;++r)this.c9W(d5,new A.t(B.k.F(B.k.F(r*300-c6.CW*0.5,2400)+2400,2400)-150,v),(r&1)===0,d2)
$.S()
v=A.I()
u=A.ar(D.ai0,D.FS,d2)
u.toString
v.sam(A.jx(new A.t(0,d4),new A.t(0,c9),A.a([u,D.bow],t),c5,B.x,c5))
d5.aP(new A.a3(0,d4,c8,c9),v)
a2=c9*0.56
a3=c9*0.66
v=A.I()
v.r=D.bid.gp(0)
d5.aP(new A.a3(0,a2,c8,a3),v)
v=A.I()
v.r=D.bsd.gp(0)
d5.aP(new A.a3(0,a2-3,c8,a2),v)
for(q=-B.k.F(c6.CW,70),v=(a2+a3)/2-2,u=v+4;q<c8;q+=70){t=new A.ao(B.O,B.M,B.S,B.T,B.R)
t.r=K.Mc.gp(0)
l=t.G()
d0.drawRect(A.bG(new A.a3(q,v,q+36,u)),l)
l.delete()}for(v=a2-6,u=v-36,t=u+36,m=v-34,i=c8*0.62,h=c8+160,f=c7*3,e=c7*6,d=v+40,a0=v-20,a1=a0+20,a4=v-56,a5=a4+56,a6=v-66,a7=a6+20,a8=v-72,r=0;a9=d1.length,r<=a9;r=b0){b0=r+1
q=i+b0*520-c6.CW
if(q<-160||q>h)continue
a9=r===a9
b1=q+40
b2=b1-26
b3=$.S()
b4=new A.ao(B.O,B.M,B.S,B.T,B.R)
b4.r=D.bdI.gp(0)
l=b4.G()
d0.drawRect(A.bG(new A.a3(b2,u,b2+52,t)),l)
l.delete()
b2=A.a([],k)
b3=new A.aF(b3.r,B.ag,c5,c5,b2)
b2.push(new A.aY(b1-36,m))
b2.push(new A.aq(b1,a8))
b2.push(new A.aq(b1+36,m))
b2.push(new A.bt())
b2=new A.ao(B.O,B.M,B.S,B.T,B.R)
b2.r=D.bqu.gp(0)
l=b2.G()
b2=b3.gbu().a.snapshot()
d0.drawPath((b3.e=new A.cd(b2)).a,l)
l.delete()
b2=b1-6
b3=new A.ao(B.O,B.M,B.S,B.T,B.R)
b3.r=D.fr.gp(0)
l=b3.G()
d0.drawRect(A.bG(new A.a3(b2,a0,b2+12,a1)),l)
l.delete()
b5=q-36
b2=b5-2
b3=new A.ao(B.O,B.M,B.S,B.T,B.R)
b3.r=D.FE.gp(0)
l=b3.G()
d0.drawRect(A.bG(new A.a3(b2,a4,b2+4,a5)),l)
l.delete()
b2=b5-30
b6=A.br(new A.a3(b2,a6,b2+60,a7),B.ie)
b2=new A.ao(B.O,B.M,B.S,B.T,B.R)
b2.r=D.bty.gp(0)
l=b2.G()
d0.drawRRect(A.e7(b6),l)
l.delete()
b2=new A.ao(B.O,B.M,B.S,B.T,B.R)
b2.r=D.B9.gp(0)
b2.b=B.a9
b2.c=2
l=b2.G()
d0.drawRRect(A.e7(b6),l)
l.delete()
b7=a9?"HOME":"STOP "+b0
b8=new A.iG(new A.es(b7,c5,c5,B.cK,c5,c5,c5,c5,c5,c5,D.fm9),B.a4,B.bX,new A.je(1),c5,c5,c5,c5,B.bV,c5)
b8.eg()
b2=b8.b
b3=b2.c
b2=b2.a.c
b8.a3(d5,new A.t(b5-b3/2,a4-b2.gba(b2)/2))
if(a9)b9=c6.r===D.aca
else if(r===c6.w){b2=c6.r
b2=b2===D.WA||b2===D.AI
b9=b2}else b9=!1
if(a9){b2=c6.gha(0).gyX()
c0=(b2==null?c5:b2.c)===D.oi?1:0}else c0=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b2=c6.gqg()
c1=b2.d<b2.c.length&&b9
c2=b9&&c6.r===D.AI
b2=c1?C.hvP(c7,r):0
if(c2)b3=c6.ax?1:-0.3
else b3=a9&&b9?1:0.4
b4=b9&&c6.r===D.WA?0.4:0
c3=c2&&c6.ax?0.5:0
if(a9&&b9)a9=new A.t(40,-110+Math.sin(e)*10)
else a9=c1?new A.t(44+Math.sin(f)*8,-66+Math.sin(w)*10):c5
C.RY(d5,new A.t(q+4,d),0,b4,-0.8,-0.2,c5,a9,new A.t(q-200,v),c0,b2,0,0.85,b3,c3,c7+r,-0.3)}d1=c8*0.28
this.bGw(d5,new A.t(d1,a3-6),c7,d3,d6)
if(d3)for(v=c7*1.6,u=d1-90,t=a3-10,r=0;r<7;++r){c4=B.k.F(v+r/7,1)
$.S()
m=new A.ao(B.O,B.M,B.S,B.T,B.R)
m.r=D.brK.j(0.5*(1-c4)).gp(0)
l=m.G()
d0.drawCircle(u-c4*70,t-c4*18,6+c4*16,l)
l.delete()}if(c6.ay&&c6.r!==D.Wz)for(v=c7*1.2,u=d1+62,t=a3-40,r=0;r<5;++r){c4=B.k.F(v+r/5,1)
m=Math.sin(r+w)
$.S()
k=new A.ao(B.O,B.M,B.S,B.T,B.R)
k.r=B.c.j(0.5*(1-c4)).gp(0)
l=k.G()
d0.drawCircle(u+m*5,t-c4*50,4+c4*10,l)
l.delete()}if(c6.r===D.AI&&c6.ax){b8=A.fy(c5,c5,c5,c5,A.cS(c5,c5,c5,c5,c5,c5,c5,c5,c5,A.l(c5,c5,B.cI,c5,c5,c5,c5,c5,c5,c5,c5,24,c5,c5,B.u,c5,c5,!0,c5,c5,c5,c5,c5,A8.Ic,c5,c5),"BEEP BEEP!"),B.a4,B.bX,c5,B.dA,B.bV)
b8.eg()
b8.a3(d5,new A.t(d1-b8.b.c/2+40,a2-96-Math.abs(Math.sin(c7*9))*6))}},
c9W(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=A.ar(D.bo0,D.bhy,g)
m.toString
if(f){w=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
v=e.a
u=e.b
w.D(new A.aY(v-16,u))
t=u-36
s=u-56
w.D(new A.c5(v-9,t,v-7,s))
w.D(new A.aq(v+7,s))
w.D(new A.c5(v+9,t,v+16,u))
w.D(new A.bt())
t=A.I()
t.r=D.YV.gp(0)
d.aI(w,t)
for(w=v+0,t=u+-54,s=u+-72,r=d.a,u+=-76,q=0;q<4;++q){p=D.cY0[q]
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=D.YV.gp(0)
o.c=4
o.d=B.by
n=o.G()
r.drawLine.apply(r,[w,t,v+p*24,s,n])
n.delete()
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=m.gp(0)
n=o.G()
r.drawCircle(v+p*26,u,10,n)
n.delete()}}else{w=e.a7(0,D.elB)
$.S()
v=A.I()
v.r=D.bdK.gp(0)
v.c=4
d.bo(e,w,v)
v=A.bK(e.a7(0,D.elC),16,60)
w=A.I()
w.r=m.gp(0)
d.dQ(v,w)}},
bGw(a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6?Math.sin(a5*22)*1.6:Math.sin(a5*2)*0.4,a0=this.b,a1=a0.ay&&a0.r!==D.Wz?0.045:0,a2=a3.a
J.bl(a2.save())
a2.translate(a4.a,a4.b+d)
a3.il(0,a1)
for(w=0;w<2;++w){v=D.dnF[w]
u=a0.ay&&a0.r!==D.Wz&&v>0
J.bl(a2.save())
a2.translate(v,-4+(u?4:0))
t=u?15:18
$.S()
s=new A.ao(B.O,B.M,B.S,B.T,B.R)
s.r=D.bsp.gp(0)
r=s.G()
a2.drawCircle(0,0,t,r)
r.delete()
a2.rotate(a0.CW/18*180/3.141592653589793,0,0)
t=new A.ao(B.O,B.M,B.S,B.T,B.R)
t.r=D.bkY.gp(0)
r=t.G()
a2.drawCircle(0,0,9,r)
r.delete()
for(q=0;q<4;++q){t=q*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
p=new A.ao(B.O,B.M,B.S,B.T,B.R)
p.r=B.bn.gp(0)
p.c=2
r=p.G()
a2.drawLine.apply(a2,[0,0,s*9,t*9,r])
r.delete()}a2.restore()}o=A.tQ(D.f1U,B.fE,B.fE,B.id,B.hF)
$.S()
t=A.I()
t.sam(A.jx(D.ehH,B.a7q,D.ddH,G.a3w,B.x,e))
a3.az(o,t)
for(n=0;n<20;++n){t=-100+n*10
s=new A.ao(B.O,B.M,B.S,B.T,B.R)
s.r=D.d7R[B.o.F(n,4)].gp(0)
r=s.G()
a2.drawRect(A.bG(new A.a3(t,-26,t+10,-19)),r)
r.delete()}m=a0.r===D.AI&&a0.ax
l=[2,3,4,5]
for(t=a5*10,n=0;n<4;++n){s=-88+n*38
p=s+32
k=new A.a3(s,-66,p,-36)
J.bl(a2.save())
a2.clipRRect(A.e7(A.br(k,B.mX)),$.nF(),!0)
j=new A.ao(B.O,B.M,B.S,B.T,B.R)
j.r=D.XL.gp(0)
r=j.G()
a2.drawRect(A.bG(k),r)
r.delete()
j=l[n]
i=m?1:0.35
h=m?0.5:0
g=a0.ay&&a0.r===D.AI?1:0
f=m?Math.max(0,Math.sin(t+n))*6:0
C.RY(a3,new A.t(s+(p-s)/2,-10),f,g,0.5,-0.2,e,e,D.aKD,j,h,0,0.4,i,0,a5,0)
a2.restore()
i=A.br(k,B.mX)
h=new A.ao(B.O,B.M,B.S,B.T,B.R)
h.r=D.aiV.gp(0)
h.b=B.a9
h.c=2
r=h.G()
a2.drawRRect(A.e7(i),r)
r.delete()}a0=A.br(D.TT,B.mX)
t=A.I()
t.r=D.XL.gp(0)
a3.az(a0,t)
J.bl(a2.save())
a2.clipRRect(A.e7(A.br(D.TT,B.mX)),$.nF(),!0)
C.RY(a3,new A.t(D.TT.gbL().a,-10),0,0,0.7,-0.1,e,e,D.aKD,6,0,0,0.4,0.5,0,a5,0)
a2.restore()
t=A.br(D.TT,B.mX)
a0=A.I()
a0.r=D.aiV.gp(0)
a0.b=B.a9
a0.c=2
a3.az(t,a0)
a0=A.I()
a0.r=An.FT.gp(0)
a3.ad(D.ejM,4,a0)
a0=A.I()
a0.r=D.FE.gp(0)
a3.aP(D.f32,a0)
for(w=0;w<3;++w){v=D.dnH[w]
a0=A.br(new A.a3(v,-96,v+28,-79),B.ie)
t=new A.ao(B.O,B.M,B.S,B.T,B.R)
t.r=D.FS.gp(0)
r=t.G()
a2.drawRRect(A.e7(a0),r)
r.delete()}a2.restore()},
av(d){return!1}}
C.aAT.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.bfN.prototype={}
C.aAV.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.bfO.prototype={}
C.aAW.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.bfP.prototype={}
C.a5S.prototype={
B(d){var w=null
return new A.a4(1/0,this.c,A.b4(w,w,w,new C.bin(w),B.aw),w)}}
C.bin.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=d.a,s=e*0.15,r=f/2,q=e/2,p=f*0.8,o=e*0.85,n=x.v,f*=0.2,m=0,l=0;l<w;l+=e){k=D.dlB[B.o.F(m,6)]
j=$.S()
i=new A.ao(B.O,B.M,B.S,B.T,B.R)
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
i.push(new A.bt())
j=new A.ao(B.O,B.M,B.S,B.T,B.R)
j.r=B.c.j(0.85).gp(0)
h=j.G()
j=g.gbu().a.snapshot()
t.drawPath((g.e=new A.cd(j)).a,h)
h.delete()}++m}},
av(d){return!1}}
C.tr.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aH(w,w,w,w,B.Pi,w,w,w,new C.bQH(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a1,w,w,w,D.fjs,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c6(w,D.Xy,A.p(w,A.bn(!0,A.x(A.a([D.c1L,new A.D(D.bEB,A.B(u,B.m,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.m,w,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),B.f,w,w,D.b6b,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.I_.prototype={
B(d){var w=null,v=this.d,u=C.aPZ(v),t=C.id_(v),s=B.c.j(0.08),r=A.m(18),q=A.J(B.cI.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.flV,w,w,w)],x.p)
if(this.e)p.push(D.eo2)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.fS,w,w,w))
if(t!=null)p.push(new A.D(B.ud,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.Ap,w,w,w),w))
return A.p(w,A.x(p,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bD,w,w,w)}}
C.Vy.prototype={
R(){return new C.bl8(A.U(x.N,x.S),B.o.F(Date.now(),1e5))},
cVu(d){return this.f.$1(d)},
ge2(){return this.d}}
C.bl8.prototype={
gSB(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a2()
this.Pg()},
Pg(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Pg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bRs(u.a.d),$async$Pg)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dbM[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bRr(p,(o===$?u.d=q.c:o).a,r),$async$Pg)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.dZ8(u,n))
return A.h(null,v)}})
return A.i($async$Pg,v)},
ue(d){return this.cm7(d)},
cm7(d){var w=0,v=A.j(x.H),u=this,t
var $async$ue=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a5(t,!1).cc(A.eh(new C.dZ9(d),!1,null,x.H)),$async$ue)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Pg()
return A.h(null,v)}})
return A.i($async$ue,v)},
gb56(){var w,v,u,t=C.Mv(this.gSB()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)s.push(B.a.i(w[u].b))
return s},
a27(d){return this.ctk(d)},
ctk(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a27=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.L)(d),++s)r.push(d[s].ah())
w=2
return A.b(u.a.cVu(r),$async$a27)
case 2:if(u.c!=null)u.m(new C.dZa(u,r))
return A.h(null,v)}})
return A.i($async$a27,v)},
Oz(d){return this.bP8(d)},
bP8(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Oz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.h9T(t.gSB())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.Mf("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a5(s,!1).cc(A.eh(new C.dZ6(q),!1,null,r)),$async$Oz)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.L)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bh(j,new C.dZ7(p))
o=s.length
B.d.c6(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a27(A.d5(s,0,A.dC(2,"count",x.S),r).dn(0)),$async$Oz)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Oz,v)},
Xw(d,e){return this.bML(0,e)},
bML(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Xw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.ck(null,null,!0,null,new C.dZ5(e),o,null,!0,!0,x.y),$async$Xw)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.h9T(u.gSB()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.L)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a27(o),$async$Xw)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Xw,v)},
a9M(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.dZ2(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.m(20)
u=A.J(B.aX,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cy,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.UP,p,p,p),B.b2],s)
q=A.m(10)
r.push(A.p(p,A.d(i,p,p,p,p,p,p,D.fkl,p,p,p),B.f,p,p,new A.o(B.hx,p,p,q,p,p,B.n),p,p,p,p,B.C1,p,p,p))
return A.aA(p,A.db(A.p(p,A.x(A.a([A.B(r,B.m,p,B.e,B.i,0,p,p),B.b2,A.d(e,p,2,p,p,p,p,D.fs1,p,p,p),B.cS,A.d(f,p,3,B.a1,p,p,p,D.fl2,p,p,p)],s),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a9(B.ay,B.aE,B.x,w,p,p),B.n),p,p,p,p,B.yp,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a3)},
X_(d,e,f,g,h,i){return this.a9M(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Mv(s.gSB()),p=s.gSB(),o=C.aPZ(s.e),n=C.h9T(p),m=s.a.e&&J.ad(p.z)<2,l=new C.dZb(s),k=C.hzh(p,1).length,j=C.hzt(p,1).length,i=C.hAn(p,1).length,h=B.c.j(0.07),g=A.m(20),f=A.J(B.cI.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,I.aae,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fpz,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.B(A.a([e,B.bc,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,I.aaa,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.pH,r,r,r),D.fO8],a1),B.m,r,B.e,B.i,0,B.p)],a1),B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.n),r,r,r,r,B.bD,r,r,r)
f=s.X_("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aD,new C.dZc(s,p),l.$1("kahoot"))
h=s.X_("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lx,new C.dZd(s,p),l.$1("fire"))
a0=s.X_("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.By,new C.dZe(s,p),l.$1("catch"))
j=j!==0?new C.dZh(s,p):r
j=s.a9M("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hg,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.dZi(s,p):r
i=s.a9M("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.l2,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.X_("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.eP,new C.dZj(s,p),l.$1("journey"))
k=k!==0?new C.dZk(s,p):r
k=A.a([g,B.aQ,D.fS6,B.Q,A.kQ(0.98,A.a([f,h,a0,j,i,e,s.a9M("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.ej,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.X_("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d0,new C.dZl(s,p),l.$1("school"))],a1),2,12,12,r,B.dS,!0),B.d4,A.B(A.a([D.bGk,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fkp,r,r,r)],a1),B.m,r,B.e,B.i,0,r,r),B.Q],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.L)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ay(B.aX,1,B.r,-1)
g=B.a.i(v.b)
if(g.length===0)g="Untitled game"
g=A.a([D.fyX,B.bc,new A.by(1,B.ba,A.x(A.a([new A.y(g,r,B.ht,r,r,r,r,B.a1,r,1,r,r),new A.y(""+v.gaoK(0).length+" questions \xb7 Kahoot style",r,B.Ap,r,r,r,r,r,r,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),r)],a1)
if(v.gaoK(0).length>=2){f=D.ly.j(0.2)
t=new A.ay(D.ly,1,B.r,-1)
g.push(A.aA(r,A.p(r,A.X(B.hn,D.ly,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dZm(s,v,p),r,r,r,r,r,r,!1,B.a3))}if(s.a.e){f=B.cI.j(0.2)
t=new A.ay(B.cI,1,B.r,-1)
f=A.aA(r,A.p(r,A.X(B.j_,B.cI,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dZn(s,v),r,r,r,r,r,r,!1,B.a3)
e=B.fb.j(0.2)
t=new A.ay(B.fb,1,B.r,-1)
B.d.v(g,A.a([B.bm,f,B.bm,A.aA(r,A.p(r,A.X(B.eb,B.fb,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dZo(s,v),r,r,r,r,r,r,!1,B.a3)],a1))}k.push(A.p(r,new A.ca(B.aM,B.e,B.i,B.m,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bH(u,u,u,u),new A.bh(h,h,h,h),r,r,B.n),r,r,r,B.d1,B.bg,r,r,r))}if(s.a.e){j=m?new C.dZf(s):new C.dZg(a2)
i=A.m(18)
h=A.J(m?B.cI:B.aX,B.r,2)
g=m?B.cI.j(0.12):B.dr
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.p(r,A.as(A.d(f,r,r,r,r,r,r,A.l(r,r,m?B.cI:B.aC,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.No,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a3))}else if(i===0)k.push(D.fT2)
k.push(B.aB)
k.push(D.arB)
return new C.tr("Family Games \xb7 "+p.b,A.cl(k,r,r,D.bAC,r,r,B.ah,!1),B.f1,r)}}
C.a_e.prototype={
a6(){return"_KPhase."+this.b}}
C.alg.prototype={
R(){return new C.alh(D.aZt)},
gcZ(){return this.e}}
C.alh.prototype={
q(){var w=this.at
if(w!=null)w.a4(0)
w=this.ax
if(w!=null)w.a4(0)
this.a1()},
h8(d){var w,v=this
v.m(new C.bR1(v))
w=v.at
if(w!=null)w.a4(0)
v.at=A.dh(B.fB,new C.bR2(v))},
aOK(){var w=this,v=w.ax
if(v!=null)v.a4(0)
w.m(new C.bQS(w))
v=w.at
if(v!=null)v.a4(0)
w.at=A.dh(B.fu,new C.bQT(w))},
KL(d){var w
if(this.d!==D.abE)return
w=this.at
if(w!=null)w.a4(0)
this.b52(d)},
b52(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.k.V(500+500*B.k.E(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bQY(u,v,d))
u=v.ax
if(u!=null)u.a4(0)
v.ax=A.cG(B.rz,v.gkz(v))},
cI6(d){var w=this
if(w.d!==D.W7)return
if(w.e+1>=w.a.w.length)w.Yh()
else{w.m(new C.bQZ(w))
w.aOK()}},
Yh(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Yh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a4(0)
p=u.x
t=u.a.w.length
s=C.bFz(p,u.w,t)
u.m(new C.bQV(u,s))
w=2
return A.b(C.Bw(u.a.e,s),$async$Yh)
case 2:r=e
t=u.a
w=3
return A.b(C.Bx(t.e,t.f,t.r,u.f),$async$Yh)
case 3:q=e
if(u.c!=null)u.m(new C.bQW(u,r,q))
return A.h(null,v)}})
return A.i($async$Yh,v)},
cIT(){var w,v,u,t,s=this,r=s.a,q=new A.e6()
q.cX(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b7("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.e_(r,q)
for(r=A.d5(r,0,A.dC(4,"count",x.S),A.T(r).c),u=r.$ti,r=new A.bT(r,r.gL(0),u.k("bT<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b7(t,B.k.V(w*(0.35+q.ag()*0.5)),!1))}B.d.aZ(v,new C.bR_())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.aZt===r){w=A.a([D.fOx,B.W,A.d(s,t,t,t,t,t,t,B.Ks,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fkx,t,t,t))
w.push(B.aB)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.x8,B.K,t,t))
w.push(B.dT)
w.push(C.ul("Play",u.geX(u),B.cI,B.hn,D.fr))
w=A.as(new A.D(B.eu,A.x(w,B.m,t,B.e,B.P,0,B.p),t),t,t,t)
break A}if(D.aZu===r){w=A.as(A.d(""+u.z,t,t,t,t,t,t,D.fsx,t,t,t),t,t,t)
break A}if(D.abE===r||D.W7===r){w=u.coJ()
break A}if(D.aZv===r){w=u.c9X()
break A}w=t}return new C.tr(s,w,B.f1,t)},
coJ(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.W7,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aTM,j,j,j),B.b2],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.Kp,j,j,j))
g.push(B.as)
f=A.m(14)
g.push(A.p(j,A.d(""+k.f,j,j,j,j,j,j,B.iu,j,j,j),B.f,j,j,new A.o(B.bz,j,j,f,j,j,B.n),j,j,j,j,B.Gp,j,j,j))
g=A.B(g,B.m,j,B.e,B.i,0,j,j)
f=A.m(6)
w=i?0:B.k.E(k.as/k.a.w[k.e].r,0,1)
f=A.bx(f,A.kj(B.bz,j,k.as<5?B.fb:B.cI,9,j,w,j),B.ap)
w=A.m(22)
v=A.J(B.cI,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.l(j,j,e?D.ly:G.na,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.Q,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fjB,B.K,j,j)],h),B.m,j,B.e,B.P,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fuF,B.K,j,j)
w=A.E(A.p(j,A.as(u,j,j,j),B.f,j,j,new A.o(D.q5,j,v,w,j,j,B.n),j,j,j,j,B.fm,j,j,1/0),3)
v=A.a([],h)
for(u=k.gkz(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bQX(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aBF[o]
m=new A.aP(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([new A.y(D.aBY[o],j,D.flw,j,j,j,j,j,j,j,j,j),B.as,new A.by(1,B.ba,new A.y(r[t],j,D.fku,j,j,j,j,B.a1,j,3,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.aq7)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bUE)
v.push(A.aA(j,new A.Sf(A.p(j,new A.ca(B.aM,B.e,B.i,B.m,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bH(l,l,l,l),new A.bh(m,m,m,m),W.aA4,j,B.n),j,j,j,j,B.eZ,j,j,j),p,B.b5,B.a2,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a3))}h=A.a([g,B.am,f,B.ae,w,B.ae,A.E(A.kQ(1.45,v,2,10,10,j,B.dS,!1),4)],h)
if(i)h.push(D.eni)
return new A.D(B.a_r,A.x(h,B.m,j,B.e,B.i,0,B.p),j)},
c9X(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cIT(),m=x.p,l=A.a([D.ba1,A.as(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.pH,o,o,o),o,o,o),A.as(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.UU,o,o,o),o,o,o),B.aQ],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cI.j(0.25):B.dr
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cI:B.bz,1,B.r,-1)
q=w<3?D.ddY[w]:""+(w+1)
s=s?B.u:B.U
l.push(A.p(o,new A.ca(B.aM,B.e,B.i,B.m,o,B.p,o,0,A.a([new A.a4(34,o,new A.y(q,o,B.n1,o,o,o,o,o,o,o,o,o),o),new A.by(1,B.ba,new A.y(t.a,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new A.y(""+t.b,o,B.iu,o,o,o,o,o,o,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bH(r,r,r,r),new A.bh(u,u,u,u),o,o,B.n),o,o,o,B.ct,B.eS,o,o,o))}l.push(B.W)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.I_(m,v,p.CW,o))
l.push(B.aQ)
l.push(A.as(C.ul("Back to the games",new C.bQU(p),B.cI,B.km,D.fr),o,o,o))
return A.cl(l,o,o,B.fm,o,o,B.ah,!1)}}
C.Tc.prototype={
R(){return new C.ald(A.U(x.de,x.er))}}
C.ald.prototype={
gCK(){var w,v=this,u=v.d
if(u===$){w=C.hfu(v.a.c.ah())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
gl5(d){var w,v,u=this,t=u.e
if(t===$){w=u.gCK().b
v=$.ax()
u.e!==$&&A.bF()
t=u.e=new A.au(new A.ba(w,B.b4,B.aO),v)}return t},
ccA(d){return this.f.c3(0,d,new C.bQs(d))},
Z(){this.a2()
var w=this.gCK().c
if(w.length===0)w.push(C.h1A(null,0,20,""))},
q(){var w,v,u=this.gl5(0)
u.T$=$.ax()
u.P$=0
for(u=this.f,u=new A.du(u,u.r,u.e);u.C();)for(w=J.aW(u.d);w.C();){v=w.gS(w)
v.T$=$.ax()
v.P$=0}this.a1()},
cHX(){if(this.gCK().c.length>=12)return
this.m(new C.bQt(this))},
jD(d){var w,v,u=this,t=u.gCK()
t.b=B.a.i(u.gl5(0).a.a)
w=t.gaoK(0)
if(t.b.length===0||w.length<2){u.c.K(x.q).f.U(D.fcz)
return}v=t.c
B.d.aa(v)
B.d.v(v,w)
v=u.c
v.toString
A.a5(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bQD(),r=x.p,q=A.a([A.bN(!1,D.fDS,t,t,!0,t,t,t,u.gbow(u),t,t)],r),p=A.a([D.fSE,B.ae,A.aM(t,B.Y,!1,t,!0,B.t,t,A.aN(),u.gl5(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.aj,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.aa,t,t,t,t,t,t,t,t,t,t,t,B.fS,!0,B.a4,t,B.an,t,t,t,t),B.aB],r)
for(w=0;v=u.gCK().c.length,w<v;++w)B.d.v(p,A.a([new A.ff(new C.bQC(u,w,s),t)],r))
if(v<12)p.push(A.as(C.ul("\uff0b Add a question",u.gcHW(),B.aX,t,B.c),t,t,t))
return new C.tr("Make your game",A.cl(p,t,t,D.bAz,t,t,B.ah,!1),q,t)}}
C.aqh.prototype={
R(){return new C.aEp(A.a([],x._))},
bv(){return this.r.$0()},
qa(){return this.w.$0()},
ge2(){return this.c}}
C.aEp.prototype={
Z(){var w,v
this.a2()
this.w9()
w=this.a
v=w.c
if(v.length!==0)C.a7B(v,w.e,w.d.w)},
w_(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$w_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hcp(r,t.e,!1,s.w,new C.e_O(u),null,s),$async$w_)
case 2:w=3
return A.b(u.w9(),$async$w_)
case 3:return A.h(null,v)}})
return A.i($async$w_,v)},
a0h(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0h=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hcp(r,t.e,!0,s.w,new C.e_N(u),null,s),$async$a0h)
case 2:w=3
return A.b(u.w9(),$async$a0h)
case 3:return A.h(null,v)}})
return A.i($async$a0h,v)},
w9(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$w9=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.B0(q.a.c),$async$w9)
case 7:p=e
if(q.c!=null)n=q.e||J.cL(p)
else n=!1
if(n)q.m(new C.e_Q(q,p))
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
return A.b(C.GU(q.a.c).d9(0,B.qe),$async$w9)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e_R(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e_S(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$w9,v)},
OV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$OV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.K(s).f.U(D.fc9)
w=3
return A.b(C.GU(t.a.c),$async$OV)
case 3:r=e
w=4
return A.b(C.fSo(t.a.c,r),$async$OV)
case 4:q=e
w=5
return A.b(C.GU(t.a.c),$async$OV)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e_M(t,p))
o=t.c.K(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(null,null,null,q?B.dE:B.cW,null,B.t,null,s,null,B.mI,null,null,null,null,null,null,null,null,null,null))
t.a.qa()
case 1:return A.h(u,v)}})
return A.i($async$OV,v)},
Ie(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ie=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ilc(l),$async$Ie)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hP7(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b0m(q,p.e,l,"Each family tree costs $"+B.k.ac(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Ie)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hvV(r)
o=Date.now()
n=t.a.c
m=new C.kP(l,r.toUpperCase(),p,!0,B.Y,D.D8,new A.V(o,0,!1),0,n,D.ul,B.ca)
w=5
return A.b(C.a39(n,m),$async$Ie)
case 5:w=6
return A.b(t.w9(),$async$Ie)
case 6:t.a.bv()
t.a.qa()
if(t.c==null){w=1
break}t.EJ(m)
case 1:return A.h(u,v)}})
return A.i($async$Ie,v)},
EJ(d){return this.cht(d)},
cht(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$EJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.B0(u.a.c),$async$EJ)
case 2:n=l.p7(k.dJ(f,new C.e_P(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hH(m,new C.aqb(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$EJ)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a39(u.a.c,o),$async$EJ)
case 6:case 5:w=7
return A.b(u.w9(),$async$EJ)
case 7:u.a.qa()
return A.h(null,v)}})
return A.i($async$EJ,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.J,o=new C.u7(p)
if(r.e)return A.as(A.n0(q,p?B.bu:B.bn,q,q,q,q,q,q,q,q),q,q,q)
if(J.ct(r.d)){w=p?B.e4:B.c
v=A.m(15)
u=A.aI(!1,B.a2,!0,q,A.aO(!1,q,!0,A.p(q,D.bSk,B.f,q,q,new A.o(B.aW.j(0.12),q,A.J(B.aW,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cO,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcgx(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.FW(A.p(q,A.x(A.a([u,B.aQ,t,B.Q,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bn,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.dT,A.bI(D.fVS,q,r.gaRV(),A.bo(B.bP,q,q,q,q,q,Aw.a_Q,q,new A.b8(A.m(12),B.a0),q,q,q))],x.p),B.m,q,B.e,B.i,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bDi,q,q,1/0),15,B.af,1.05,D.abq,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b2],v)
if(J.cL(r.d))w.push(A.aH(q,q,q,q,A.X(B.za,B.aW,q,q,q,q),q,q,q,new C.e_U(r),q,q,q,q,"Sync family trees with database",q))
if(J.cL(r.d))w.push(A.aH(q,q,q,q,A.X(B.z5,B.aW,q,q,q,q),q,q,q,r.gags(),q,q,q,q,"Transfer / backup file",q))
w.push(A.di(E.ar1,D.fBe,r.gaRV(),A.bo(B.bP,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ae)
u.push(new C.FW(r.cEb(J.r(r.d,s),o),14,B.af,1,D.abq,q))
B.d.v(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.m,q,B.e,B.i,0,B.p)],v),B.E,q,B.e,B.i,0,B.p)},
cEb(d,e){var w=null,v=e.a,u=v?B.e4:B.c,t=A.m(14),s=A.J((v?B.ea:B.bO).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.en,10)],x.V),q=A.m(14),p=A.p(w,D.bRo,B.f,w,w,new A.o(B.aW.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gapF(),m=d.d?"":" \xb7 Public",l=d.y===D.kM?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bF,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.i,0,B.p),1)
return A.p(w,A.aI(!1,B.a2,!0,w,A.aO(!1,q,!0,new A.D(B.bD,A.B(A.a([p,B.bc,l,A.X(B.Oc,v?B.bu:B.bn,w,w,w,w)],k),B.m,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e_T(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aqb.prototype={
R(){return new C.aEm(A.a([],x._),A.aX(x.N),A.b97())},
bv(){return this.r.$0()},
ge2(){return this.c}}
C.aEm.prototype={
Z(){var w,v,u=this
u.a2()
u.d=u.a.w
u.adb()
w=u.a
v=w.c
if(v.length!==0)C.a7B(v,w.e,w.d.w)},
q(){var w=this.w
w.T$=$.ax()
w.P$=0
this.a1()},
a3g(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3g=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.y5("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.e_e(r),s,null,!0,!0,x.y),$async$a3g)
case 3:if(e!==!0||t.c==null){w=1
break}t.JM()
t.m(new C.e_f(t,r))
w=4
return A.b(t.u9(),$async$a3g)
case 4:t.a.bv()
t.y5(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3g,v)},
ctW(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aV.x1$.push(new C.e_9(w,f,d,e))},
aUa(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.ds()
u.eh(w,v,0,1)
u.jZ(q,q,1,1)
this.w.sp(0,u)},
bbC(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eL(new Float64Array(16))
q.e7(r)
w=q.CP()
v=B.k.E(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.ds()
t.eh(r,u,0,1)
t.jZ(v,v,1,1)
t.eh(-r,-u,0,1)
t.iT(0,q)
s.sp(0,t)},
adb(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.B0(u.a.c),$async$adb)
case 2:t=s.p7(r.dJ(e,new C.dZB(u)))
if(t!=null&&u.c!=null)u.m(new C.dZC(u,t))
return A.h(null,v)}})
return A.i($async$adb,v)},
y5(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
w_(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$w_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hcp(o,t,!1,r,new C.dZT(u),q.a,s),$async$w_)
case 2:n=A
m=J
w=3
return A.b(C.GU(u.a.c),$async$w_)
case 3:p=n.p7(m.dJ(e,new C.dZU(u)))
if(p!=null&&u.c!=null)u.m(new C.dZV(u,p))
return A.h(null,v)}})
return A.i($async$w_,v)},
JM(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cz(w,0)},
u9(){var w=0,v=A.j(x.H),u=this,t,s
var $async$u9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a39(t,s),$async$u9)
case 2:return A.h(null,v)}})
return A.i($async$u9,v)},
a1N(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a1N=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.um(q,t.a.c)){t.y5("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.imm(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a1N)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.JM()
t.m(new C.e_8(t,r))
w=4
return A.b(t.u9(),$async$a1N)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1N,v)},
b1K(){var w=this.c
w.toString
A.a5(w,!1).cc(A.eh(new C.dZQ(this),!1,null,x.H))},
a0v(){return this.chv()},
chv(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0v=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.um(m,t.a.c)){t.y5("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.Q(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Z(s,new C.e_5(),A.T(s).k("Z<1>")).gL(0)
s=A.eD([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("cs.E"))
B.d.ff(p)
s=t.c
s.toString
w=3
return A.b(A.bV(B.L,null,new C.e_6(n,t,new C.u7(m.ax.a===B.J),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a0v)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.JM()
t.m(new C.e_7(t,o))
w=6
return A.b(t.u9(),$async$a0v)
case 6:case 5:if(o.a&&t.c!=null)t.b1K()
case 1:return A.h(u,v)}})
return A.i($async$a0v,v)},
Wn(d){return this.bBQ(d)},
bBQ(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.um(r,t.a.c)){t.y5("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dZp(t,d),r,null,!0,!0,x.P),$async$Wn)
case 3:s=f
if(s==null){w=1
break}t.JM()
t.m(new C.dZq(t,s))
w=4
return A.b(t.u9(),$async$Wn)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wn,v)},
a3C(d){return this.cGm(d)},
cGm(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a3C=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.Q(s)
t=u.c
t.toString
w=2
return A.b(A.ck(null,null,!0,null,new C.e_h(u,d,new C.u7(s.ax.a===B.J)),t,null,!0,!0,x.H),$async$a3C)
case 2:return A.h(null,v)}})
return A.i($async$a3C,v)},
cdN(d){var w=this,v=w.d
v===$&&A.c()
if(C.um(v,w.a.c))w.OA(d)
else w.a3C(d)},
aiW(d,e){return this.cxU(d,e)},
cxU(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aiW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.Q(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ck(null,null,!0,null,new C.e_b(new C.u7(r.ax.a===B.J),d,e),s,null,!0,!0,x.H),$async$aiW)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aiW,v)},
Ij(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ij=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kM?3:5
break
case 3:w=6
return A.b(C.h_Q(t.a.c),$async$Ij)
case 6:s=e
o=t.a
r=C.hkh(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.aiW(!s,!r),$async$Ij)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aQ7(o,t.a.c)){t.y5("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.li(o,"Cancel","Remove",q.y===D.kM?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Ij)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aQ3(t.a.c,t.d.a),$async$Ij)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.iX(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Ij,v)},
aaH(d){return this.bN1(d)},
bN1(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$aaH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.um(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b3(s,new C.dZr(p))){o=A.T(s)
p.a=A.p7(new A.cO(new A.Z(s,new C.dZs(d),o.k("Z<1>")),new C.dZt(),o.k("cO<1,n>")))}q=p.a
if(q==null)q=d.d
t.JM()
t.m(new C.dZu(t,s,d,q))
w=3
return A.b(t.u9(),$async$aaH)
case 3:t.y5(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$aaH,v)},
OA(d){return this.bPc(d)},
bPc(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.um(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a3C(d),$async$OA)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ck(null,null,!0,null,new C.dZy(t,d),r,null,!0,!0,x.P),$async$OA)
case 6:s=f
if(s==null){w=1
break}t.JM()
t.m(new C.dZz(t,s))
w=7
return A.b(t.u9(),$async$OA)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OA,v)},
cEB(){var w=this,v=w.d
v===$&&A.c()
if(!C.um(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e_g(w))
w.u9()},
Zi(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aQ7(n,t.a.c)){t.y5("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.Q(n)
s=$.ax()
r=new A.au(B.at,s)
q=t.d.e
p=A.bp(new A.N(q,t.gccf(),A.T(q).k("N<1,n>")).bZ(0,new C.dZL()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dZM(t,new C.u7(n.ax.a===B.J),p,r),q,null,!0,!0,x.y),$async$Zi)
case 3:o=e
r.T$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.JM()
t.m(new C.dZN(t,p))
w=4
return A.b(t.u9(),$async$Zi)
case 4:t.y5("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Zi,v)},
ccg(d){return B.a.i(d.toLowerCase())},
cgh(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.um(v,w)
t=r.d
s=C.ibs(t)
C.ilg(q,t.b,u,C.ibr(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.J,m=new C.u7(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Z(l,new C.e_o(),A.T(l).k("Z<1>")).gL(0)
l=n?B.c2:B.iy
v=A.X(B.a11,n?B.bu:B.bn,o,o,o,18)
u=x.p
v=A.a([new A.D(B.BS,A.aO(!1,o,!0,new A.D(B.hz,A.B(A.a([v,B.bm,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bn,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.P,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e_p(p,d),o,o,o,o,o,o,o),o),new A.D(B.nu,p.c_p(m),o)],u)
if(p.d.y===D.kM){t=B.rX.j(0.15)
s=A.m(12)
r=A.J(B.rX.j(0.45),B.r,1)
q=C.GS(p.d,p.a.c)
v.push(new A.D(B.ys,A.p(o,A.B(A.a([D.bWL,B.as,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.ir,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b2],u)
if(C.um(p.d,p.a.c)&&p.e.length!==0)u.push(new C.G6("Undo",B.pi,p.gcEA(),m,o,o))
u.push(new C.G6("Family Book",D.bM7,p.gcgg(),m,B.tP,o))
u.push(new C.G6("Family games",B.oq,p.gcgs(),m,B.aD,o))
if(C.um(p.d,p.a.c))u.push(new C.G6("Display settings",B.CE,p.gchu(),m,B.b1,o))
u.push(new C.G6("Sync",B.z5,p.gags(),m,o,o))
t=p.d
if(t.y===D.kM||C.aQ7(t,p.a.c)){t=p.d.y===D.kM?"Remove shared tree":"Delete tree"
u.push(new C.G6(t,B.eb,p.gbNb(),m,B.fb,o))}if(C.um(p.d,p.a.c))u.push(new C.G6("Add member",B.wt,new C.e_q(p),m,B.bP,o))
v.push(new A.D(A_.akW,A.B(u,B.m,o,B.e,B.i,0,o,o),o))
if(p.d.gapF()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cu(new C.e_r(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?O.a15:A7.Od,o,o,o,o,o)
v.push(A.as(A.hs(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e_s(p),o),o,o,o))}return A.c6(o,l,A.bn(!0,A.x(v,B.E,o,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
c_p(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fM.j(0.35),B.ds,18)],x.V)
u=A.m(22)
t=A.ap(-26,A.X(B.z0,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aI(!1,B.a2,!0,m,A.aO(!1,m,!0,A.p(m,D.bZT,B.f,m,m,new A.o(B.c.j(0.16),m,A.J(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cO,!0,m,m,m,m,m,m,m,m,m,m,m,n.gags(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.d(r.b,m,1,B.a1,m,m,m,D.fmx,m,m,m)
r=r.gapF()
p=n.d.gapF()===1?"member":"members"
o=x.p
p=A.a([s,B.bc,A.E(A.x(A.a([q,B.bF,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a7,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.i,0,B.p),1)],o)
if(C.um(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bWY,m,m,m,n.gcrf(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.jC:B.mP
r=r?"Private":"Public"
r=A.E(n.aw4(q,"Privacy",r,n.a.d.w?n.gcDx():m),1)
q=A.E(n.aw4(B.z6,"Tree code",n.d.c,new C.dZA(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ae,A.B(A.a([r,B.ad,q,B.ad,A.E(n.aw4(D.bNN,"Collaborators",p,n.gc44()),1)],o),B.m,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.kM){s=B.c.j(0.15)
B.d.v(p,A.a([B.Q,A.aI(!1,B.a2,!0,A.m(999),A.aO(!1,A.m(999),!0,new A.D(B.h6,A.B(A.a([A.X(B.pj,B.c,m,m,m,14),B.eg,A.d("View only",m,m,m,m,m,m,B.aTS,m,m,m)],o),B.m,m,B.e,B.P,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.p(m,A.bx(u,new A.an(B.a_,m,B.ab,B.t,A.a([t,new A.D(B.Gs,A.x(p,B.E,m,B.e,B.i,0,B.p),m)],o),m),B.ap),B.f,m,m,new A.o(m,m,m,w,v,D.c3c,B.n),m,m,m,m,m,m,m,1/0)},
aw4(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aI(!1,B.a2,!0,A.m(14),A.aO(!1,A.m(14),!0,new A.D(I.am5,A.x(A.a([A.X(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.a1,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.vm,A.d(f,w,1,B.a1,w,w,w,Ap.Am,w,w,w)],x.p),B.m,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bfR.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gan(r)&&s.c.length===0)return B.bJ
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bfU(s,t),new A.av(w,v))],x.p)
r=r.gdW(r)
B.d.v(u,r.dH(r,new C.ddO(this),x.l))
r=s.c
B.d.v(u,new A.N(r,new C.ddP(this),A.T(r).k("N<1,v>")))
return new A.D(B.uh,new A.a4(w,v,new A.an(B.a_,t,B.ab,B.f,u,t),t),t)}}
C.Kp.prototype={}
C.Ga.prototype={}
C.bfT.prototype={
gbjZ(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aK_.prototype={}
C.bfU.prototype={
bOQ(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.S()
v=A.I()
v.r=B.bE.j(0.75).gp(0)
v.c=2
v.d=B.by
d.bo(new A.t(n,w),new A.t(m,w),v)
u=(n+m)/2
t=new A.aF(q.r,B.ag,null,null,A.a([],x.v))
q=w+5.5
t.D(new A.aY(u,q))
s=w-1.1
r=w-8.8
t.D(new A.kN(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.D(new A.kN(u+4.95,r,u+9.9,s,u,q))
t.D(new A.bt())
q=A.I()
q.r=B.c.gp(0)
d.ad(new A.t(u,w),9,q)
q=A.I()
q.r=B.bE.gp(0)
d.aI(t,q)},
bOO(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.de8())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.b3(a0,new C.de9(f))
t=new A.N(a0,new C.dea(f),A.T(a0).k("N<1,K>")).bZ(0,new C.deb()).cI(0,1/0,B.vJ)
w=f.a
d.bo(f,new A.t(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.L)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.G()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.mW(m)
i=Math.min(10,l/2)
l=$.S()
h=A.a([],q)
g=new A.aF(l.r,B.ag,null,null,h)
h.push(new A.aY(w,v-i))
l=j*i
h.push(new A.c5(w,v,w+l,v))
h.push(new A.aq(n-l,v))
h.push(new A.c5(n,v,n,v+i))
h.push(new A.aq(n,o.b))
k=e.G()
n=g.gbu().a.snapshot()
r.drawPath((g.e=new A.cd(n)).a,k)
k.delete()}},
a3(d,e){var w,v,u,t,s,r,q,p,o
$.S()
w=A.I()
w.r=B.bP.j(0.75).gp(0)
w.c=2.2
w.b=B.a9
w.d=B.by
w.e=B.dQ
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.L)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bOO(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.G()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bOQ(d,w,q.a,q.b)}},
av(d){return d.b!==this.b}}
C.bjH.prototype={
gc9Z(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aCd
switch(w.c.a){case 0:return D.cWJ
case 1:return D.d7L
case 2:return D.dpw}},
gca1(){var w=this.c,v=C.hvd(w.w),u=C.hvd(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.J,q=t.gc9Z(),p=t.c,o=N.bE8(p.f),n=t.gca1(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gak(q).j(0.35),B.cH,10)],m),k=r?B.av:B.c,j=A.J(r?B.av:B.c,B.r,2)
if(o!=null)w=A.tv(B.A,s,B.ci,B.bY,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gak(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gak(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a9(B.a5,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hV(w,B.ap),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a9(B.ay,B.aE,B.x,q,s,s),B.a6),s,56,s,s,B.GI,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.J(r?B.av:B.c,B.r,1.5)
l.push(A.ap(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fx4,s,s,s),B.f,s,s,new A.o(B.cf,s,w,j,s,s,B.n),s,s,s,s,D.bFg,s,s,s),s,s,s,-6,-4,s))}k=r?B.cr:B.c
j=A.m(8)
w=A.J(B.d.gI(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dC,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cr,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bn,s,s,s,s,s,s,s,s,7.5,s,s,B.a7,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a4(84,112,A.x(A.a([new A.an(B.a_,s,B.ab,B.f,l,s),B.au,A.p(s,A.x(p,B.m,s,B.e,B.P,0,B.p),B.f,s,D.b4n,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bFr,s,s,s)],v),B.m,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a3)}}
C.beW.prototype={
a3(d,e){var w,v,u,t,s,r,q
$.S()
w=A.I()
v=this.b
u=v?B.c:D.bhb
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.G()
t.drawCircle(r,s,1,q)
q.delete()}},
av(d){return d.b!==this.b}}
C.bxC.prototype={
B(d){var w=this,v=null,u=new C.fje(w),t=w.c,s=t?B.cr:B.c,r=A.m(12),q=u.$3(B.hQ,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bz:B.fj,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.wv,"Zoom out",w.e)
return A.aI(!1,B.a2,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bz:B.fj,v,v,v,1,v,v,v,v,v,22),u.$3(B.aoz,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.P,0,B.p),B.f,s,4,v,B.dm,v,v,v,B.ai)}}
C.bn0.prototype={
B(d){var w=this,v=null,u=B.bP.j(0.15),t=A.J(B.bP,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.p(v,A.x(A.a([A.X(s?O.a15:A7.Od,B.bP,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.ftc,v,v,v)],r),B.m,v,B.b9,B.i,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a3)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fr2,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.N(s,new C.eU8(w),A.T(s).k("N<1,v>")))
B.d.v(u,t)}return new A.a4(84,v,A.x(u,B.m,v,B.e,B.i,0,B.p),v)}}
C.a_r.prototype={
R(){return new C.aCQ()},
bv(){return this.Q.$0()},
ge2(){return this.w}}
C.aCQ.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a2()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ax()
r.d!==$&&A.aQ()
r.d=new A.au(new A.ba(t,B.b4,B.aO),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.au(new A.ba(t,B.b4,B.aO),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.au(new A.ba(t,B.b4,B.aO),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.au(new A.ba(t,B.b4,B.aO),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.au(new A.ba(t,B.b4,B.aO),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.au(new A.ba(t,B.b4,B.aO),s)
t=u?q:v.c
r.y=t==null?D.yG:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.id0(w.r,w.f)
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
Q3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Q3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hkh(p.y,p.w)
w=3
return A.b(A.lu(t.a.w,B.J8),$async$Q3)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b0m(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Q3)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hP8(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(Ay.H3(78,800),$async$Q3)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.du0(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Q3,v)},
ca0(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hW(B.o.u(1000*Date.now()),w,D.yG,null,null,null,"","","","","",1,!1,0)
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
s=v.aF5(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a5(k,!1).O(s)},
aai(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aai=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.du_(r),s,null,!0,!0,x.y),$async$aai)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a5(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aai,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===B.J,i=new C.u7(j),h=l.a.e,g=A.T(h).k("Z<1>"),f=A.C(new A.Z(h,new C.du9(l),g),g.k("M.E"))
h=j?B.e4:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bDF,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ap(k,A.he(A.aO(!1,k,!0,new A.D(B.m8,A.X(B.eb,B.p6,k,k,k,17),k),B.cO,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbJO(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jO:B.jf
t=N.bE8(l.as)
if(l.as==null)s=A.X(B.pc,j?B.bu:B.bn,k,k,k,40)
else s=k
s=A.as(A.aA(k,new A.an(B.a_,k,B.ab,B.t,A.a([A.ha(u,t,s,k,42),A.ap(0,A.ha(B.bP,k,D.bQs,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc9Y(),k,k,k,k,k,k,!1,B.a3),k,k,k)
t=l.d
t===$&&A.c()
t=C.aCS(t,"Full name",B.mM,1,1,i,B.mn)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.W,new C.bjF(i,u,new C.dua(l),k)],v),B.m,k,B.e,B.i,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bx2],q)
o=l.a.e
B.d.v(p,new A.N(o,new C.dub(),A.T(o).k("N<1,eJ<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bx4],q)
B.d.v(q,new A.N(f,new C.dud(),A.T(f).k("N<1,eJ<n?>>")))
o=A.x(A.a([t,B.am,new C.ady(i,r,"Who is their parent?",p,new C.due(l),k,o),B.aB,n,B.am,new C.ady(i,m,"Who is their spouse / partner?",q,new C.duf(l),k,o)],v),B.ak,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.c()
q=C.aCS(q,"Birth date",D.anC,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aCS(m,"Birth place",B.a1k,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aCS(n,"Date of death (if deceased)",D.apP,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aCS(p,"Occupation",B.a2v,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ab,B.t,w,k),B.aB,s,B.bx,new C.adz(i,"Identity",u,k),B.ae,new C.adz(i,"Family links",o,k),B.ae,new C.adz(i,"Life details",A.x(A.a([q,B.W,m,B.W,n,B.W,p,B.W,C.aCS(r,"Notes",B.lc,5,3,i,k)],v),B.m,k,B.e,B.i,0,B.p),k),B.ae,new C.aCR(i,"Child order",l.chJ(l.at),new C.dug(l),new C.duh(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.h9H(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dui(l):k
B.d.v(r,A.a([B.W,new C.aCR(i,"Visible in tree",u,w,new C.duj(l),k)],v))}r.push(B.W)
w=j?B.jO:B.jf
u=A.m(14)
t=A.J(j?B.ea:B.bO,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iN(k,B.bP,k,B.af,k,new C.duk(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,O.akA,k,k,k))
r.push(B.bx)
w=j?B.aP:B.av
j=j?B.ea:B.bO
r.push(A.B(A.a([A.E(A.dT(B.nO,new C.duc(d),A.dj(k,k,k,k,k,k,k,k,k,w,k,k,B.cm,k,new A.b8(A.m(14),B.a0),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bc,A.E(A.bI(D.f4h,k,l.gca_(),A.bo(B.aW,k,k,0,B.c,k,B.cm,k,new A.b8(A.m(14),B.a0),k,k,k)),2)],v),B.m,k,B.e,B.i,0,k,k))
r.push(B.au)
return A.ep(B.f1,k,B.af,h,new A.a4(420,k,A.ch(A.x(r,B.ak,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),k),D.alp,k,B.akN,new A.b8(g,B.a0),k,k)},
chJ(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.adz.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jO:B.jf,s=A.m(16)
return A.x(A.a([new A.D(D.alQ,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.J(v?B.ea:B.bO,B.r,1),s,w,w,B.n),w,w,w,w,B.bg,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)}}
C.bjG.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e4:B.c,r=A.m(12),q=A.J((t?B.ea:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.an
w=A.l(u,u,t?B.aP:B.av,u,u,u,u,u,u,u,u,14,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.Y,!1,u,!0,B.t,u,A.aN(),v.d,u,u,u,u,u,2,A.bs(u,B.eF,u,B.w5,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bu:B.bn,u,u,u,u,u,u,u,u,u,u,u,B.cA,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bP,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.aj,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.aa,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.ady.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e4:B.c,s=A.m(12),r=A.J((u?B.ea:B.bO).j(0.85),B.r,1),q=A.X(B.rJ,u?B.bu:B.bn,v,v,v,v),p=A.l(v,v,u?B.aP:B.av,v,v,v,v,v,v,v,v,14,v,v,B.a7,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e4:B.c
return A.p(v,new A.DY(A.a4P(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bn,v,v,v,v,v,v,v,v,v,v,v,B.cA,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kk,v,v,v)}}
C.bjF.prototype={
B(d){var w=new C.dul(this)
return A.B(A.a([w.$3(D.wd,"Male",B.OV),B.ad,w.$3(D.oi,"Female",B.OH),B.ad,w.$3(D.yG,"Other",B.ny)],x.p),B.m,null,B.e,B.i,0,null,null)}}
C.aCR.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jO:B.jf,r=A.m(14),q=A.J(t?B.ea:B.bO,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.av,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bn,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.i,0,B.p),1),new C.aJ1(u,B.wv,w.f,v),B.bm,new C.aJ1(u,B.hQ,w.r,v)],o),B.m,v,B.e,B.i,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eB,v,v,v)}}
C.aJ1.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bP.j(0.12)
else w=s.c.a?B.e4:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bP
else t=(s.c.a?B.bu:B.bn).j(0.4)
return A.aI(!1,B.a2,!0,v,A.aO(!1,u,!0,new A.a4(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.adA.prototype={
bSV(d){switch(d.a){case 0:return B.bP
case 1:return B.bE
case 2:return B.cY}},
bSW(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aYD(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
Am(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e4:B.c
u=A.m(12)
t=A.J((w?B.ea:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bP,p,p,p,18),B.as],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bn,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.av,p,p,p,p,p,p,p,p,14,p,p,B.U,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.i,0,B.p),1))
return A.p(p,A.B(r,B.E,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.ct,B.yo,p,p,1/0)},
aeT(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jO:B.jf,s=A.m(16),r=A.J(v?B.ea:B.bO,B.r,1)
return A.x(A.a([new A.D(D.alQ,u,w),A.p(w,A.x(e,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hAa(r,q),o=q.c,n=t.bSV(o),m=N.bE8(q.f),l=t.e.a,k=l?B.e4:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kM?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bu:B.bn,s,s,s,s,s,s,s,s,12,s,s,B.a7,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.J(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.I,12)],x.V)
u=n.j(0.12)
l=A.as(A.p(s,A.ha(u,m,m==null?A.X(B.pc,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.ev,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.J(n.j(0.45),B.r,1)
v=A.as(A.p(s,A.d(t.bSW(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mJ,s,s,s),s,s,s)
u=x.p
i=A.a([t.Am("Full name",i,B.mM)],u)
if(p>0)i.push(t.Am("Child order","#"+p,B.ON))
r=A.a([h,B.au,r,B.aQ,l,B.W,v,B.bx,t.aeT("Identity",i),B.ae,t.aeT("Life details",A.a([t.Am("Birth date",q.w,D.anC),t.Am("Birth place",q.x,B.a1k),t.Am("Date of death",q.y,D.apP),t.Am("Occupation",q.z,B.a2v)],u)),B.ae,t.aeT("Family links",A.a([t.Am("1. Parent",t.aYD(q.d),B.GW),t.Am("2. Spouse",t.aYD(q.e),B.Hb)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ae,t.aeT("Notes",A.a([t.Am("Notes",q,B.lc)],u))],u))
r.push(B.bx)
r.push(A.bI(B.Ky,s,new C.duv(d),A.bo(B.aW,s,s,s,s,s,B.cm,s,new A.b8(A.m(14),B.a0),s,s,s)))
return A.eT(s,k,new A.cT(B.lV,A.ch(A.x(r,B.ak,s,B.e,B.P,0,B.p),B.t,s,B.y,s,B.w9,s,s,B.ah),s),s,s,s,B.Gv,B.d8,s,new A.b8(j,B.a0),s)}}
C.G6.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bn
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uk,A.he(A.aI(!1,B.a2,!0,A.m(8),A.aO(!1,A.m(8),!0,new A.a4(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u),u)}}
C.aqe.prototype={
f_(){var w,v,u=this,t=x.N,s=A.U(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a9().ae())
w=u.c
v=A.T(w).k("N<1,a8<n,@>>")
w=A.C(new A.N(w,new C.cdp(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jm(w,new C.cdq(),t,x.fO))
return s}}
C.aqf.prototype={
R(){return new C.aEo(A.a([],x.bF))},
gcZ(){return this.c}}
C.aEo.prototype={
Z(){this.a2()
this.JT()},
JT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$JT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cdt(t.a.c),$async$JT)
case 3:r=e
w=4
return A.b(C.B0(t.a.c),$async$JT)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rb(q,new C.e_B(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e_C(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$JT,v)},
yD(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
KD(d,e){return this.cH2(d,e)},
cH2(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$KD=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e_G(q,e))
t=3
w=6
return A.b(d.$0(),$async$KD)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e_H(q))
$.eX.my()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$KD,v)},
Y5(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pn(r,s.c,s.e),$async$Y5)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KD(new C.e_y(t),"Preparing download\u2026"),$async$Y5)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y5,v)},
Y9(d){return this.bQQ(d)},
bQQ(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pn(r,s.c,s.e),$async$Y9)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.KD(new C.e_z(t,d),"Preparing file\u2026"),$async$Y9)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y9,v)},
agP(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$agP=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xw.ca().Mv(B.RS,B.um,!0),$async$agP)
case 7:r=e
o=r
q=o==null?null:J.fu(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aG.gan(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jF(o,0,null)
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
case 6:u=A.H2()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agP,v)},
YM(d){return this.c0k(d)},
c0k(d){var w=0,v=A.j(x.H),u=this
var $async$YM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.KD(new C.e_A(u,d),"Restoring family trees\u2026"),$async$YM)
case 2:return A.h(null,v)}})
return A.i($async$YM,v)},
YL(){var w=0,v=A.j(x.H),u,t=this,s
var $async$YL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.agP(),$async$YL)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.YM(s),$async$YL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YL,v)},
a2F(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2F=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pn(r,s.c,s.e),$async$a2F)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KD(new C.e_F(t),"Creating QR code\u2026"),$async$a2F)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2F,v)},
a2g(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2g=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.De()){t.yD("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).cc(A.eh(new C.e_D(),!0,null,x.N)),$async$a2g)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.YM(r),$async$a2g)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2g,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===B.J,n=o?B.Bg:B.iy,m=o?D.aj0:B.aP,l=o?B.aK:B.bO,k=o?B.aP:B.av,j=new C.dec(n,m,l,k,o?B.bK:B.bn)
l=A.aH(p,p,p,p,A.X(B.eK,k,p,p,p,20),p,p,p,new C.e_J(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eI(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.ddL(!0,B.jE,B.aJ,B.aJ,q.r?p:q.gcxI(),j,s,"Show restore QR"),1),B.as],u))}s=q.e
r=q.r?p:q.gctR()
t.push(A.E(C.ddL(!s,B.jj,B.b7,B.bq,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.ddL(!1,B.hR,B.aW,B.bP,q.r?p:q.gbQJ(),j,"Photos & books included","Download all trees"),1),B.as],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.ddL(!1,R.z7,B.aA,B.aT,q.r?p:q.gc0h(),j,s,"Upload backup file"),1))
l=A.a([new C.bfS(v,l,p),B.kV,new C.acP(j,"QR restore",p),B.W,t,B.d4,new C.acP(j,"Backup files",p),B.W,A.B(r,B.m,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kV,new C.acP(j,"One tree",p),B.W],u)
B.d.v(v,J.b6(q.d,new C.e_K(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cl(l,p,p,B.a_N,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.J(B.aW.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.ds,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ap(24,A.bn(!0,A.p(p,A.B(A.a([O.aSi,B.bc,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.U,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.BY,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c6(w,n,new A.an(B.a_,p,B.ab,B.t,l,p),p,!1,!1,p,p)}}
C.dec.prototype={}
C.bfS.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aW.j(0.32),B.kt,28)],x.V)
t=A.ap(p,A.X(B.uH,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.a_,p,B.ab,B.t,A.a([t,new A.D(B.aa,A.B(A.a([A.p(p,D.bZp,B.f,p,p,new A.o(s,p,A.J(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oL,A.E(A.x(A.a([D.fCd,B.Q,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.i,0,B.p),1)],q),B.E,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.c6r,B.n),p,p,p,p,p,p,p,p)}}
C.acP.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aW,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ad,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)}}
C.bfQ.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aJ.j(0.4):m.c
k=A.J(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aJ.j(0.1),B.cH,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.J(t.j(0.35),B.r,1)
return A.aI(!1,B.a2,!0,q,A.aO(!1,o,!0,A.eK(A.db(new A.D(E.a_p,A.x(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.rG,q,q,q),B.ae,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bF,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cA,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.i,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bfV.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.J(s.c,B.r,1),q=B.aW.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aI(!1,B.a2,!0,v,A.aO(!1,u,!0,A.eK(new A.D(B.eS,A.B(A.a([A.p(v,D.bYE,B.f,v,v,new A.o(q,v,A.J(B.aW.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.rG,v,v,v),B.bc,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.i,0,B.p),1),A.X(B.hR,o,v,v,v,20)],n),B.m,v,B.e,B.i,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a_M.prototype={
R(){return new C.aEn()},
gcZ(){return this.c}}
C.aEn.prototype={
Z(){this.a2()
this.a9Q()},
a9Q(){var w=0,v=A.j(x.H),u=this,t
var $async$a9Q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b30(u.a.c,B.DM),$async$a9Q)
case 2:t=e
if(u.c!=null)u.m(new C.e_t(u,t))
return A.h(null,v)}})
return A.i($async$a9Q,v)},
aid(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aid=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e_u(q))
t=4
p=A.hlY(q.a.d,B.DM)
if(p==null){n=A.be("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.asy(n.e,m,l,B.DM,p,n.f),$async$aid)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e_v(q))
q.c.K(x.q).f.U(D.fdm)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(B.a.em(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e_w(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aid,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.J,o=p?B.jv:B.q6,n=p?B.ix:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eI(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fSy,q,q,q,1,q,!0)
w=A.m(24)
v=A.J(B.aW.j(0.35),B.r,1)
u=A.q3(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aW,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.Q,u,B.bx,t,B.Q,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.al,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.m,q,B.b9,B.i,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.aa,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ac:B.bs,q,q,q,q,q,q,q,q,q,q,q,B.U,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gctz()
if(u)u=B.K0
else u=A.X(r.e===!0?B.hA:B.anB,q,q,q,q,q)
w=A.a([w,B.ae,v,B.ae,new A.a4(1/0,q,A.ex(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ce,q,q,q),t,A.dj(q,q,q,q,q,q,q,q,q,B.aW,q,B.h0,q,q,q,new A.ay(B.aW.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i4,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aC:B.al,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.W)
w.push(new A.a4(1/0,q,A.bI(B.At,q,new C.e_x(d),A.bo(B.aW,q,q,q,q,B.h0,q,q,q,q,q,q)),q))
return A.c6(m,o,new A.D(B.aa,A.x(w,B.m,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a_N.prototype={
R(){return new C.bl9(A.zA(B.yd,B.nU,B.uP))}}
C.bl9.prototype={
q(){this.d.q()
this.a1()},
B(d){var w=null
return A.c6(A.eI(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fKn,w,w,w,1,w,!0),B.w,A.zz(this.d,B.bY,new C.e_L(this,d)),w,!1,!1,w,w)}}
C.aZT.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Rl,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lQ.prototype={}
C.a6G.prototype={
R(){return new C.bkQ(null,null)}}
C.bkQ.prototype={
Z(){var w=this,v=null
w.a2()
w.d=A.bm(v,B.rz,v,1,v,w)
w.e=A.bm(v,B.qd,v,1,v,w)
w.a.toString
w.d.cL(0)
w.e.cL(0)},
bz(d){var w,v,u=this
u.bH(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cL(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cL(0)},
q(){var w=this.d
w===$&&A.c()
w.q()
w=this.e
w===$&&A.c()
w.q()
this.bxc()},
B(d){var w,v,u=this,t=B.d.dN(D.a5n,new C.dM5(u),new C.dM6())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cAb(A.cb(new A.h8(A.a([w,v],x.dS)),new C.dM7(u,t),null),!0)}}
C.bkP.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b2a(d,e)
break
case"house":p.ma(d,e,D.dcI)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdE()
$.S()
t=A.I()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ad(new A.t(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mg(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.B5(d,e,12)
p.yf(d,e,B.l4,5,14)
break
case"grocery":p.cis(d,e)
break
case"calculator":p.ci9(d,e)
break
case"lumber":p.ciA(d,e)
break
case"kitchen":p.civ(d,e)
break
case"landscape":p.ma(d,e,D.ddi)
s=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.D(new A.aY(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.D(new A.c5(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.D(new A.c5(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.D(new A.aq(t,w))
s.D(new A.aq(0,w))
s.D(new A.bt())
w=A.I()
w.r=B.ej.j(0.85).gp(0)
d.aI(s,w)
p.B5(d,e,8)
p.yf(d,e,B.ip,4,18)
break
case"plumbing":p.ciJ(d,e)
break
case"electrical":p.ma(d,e,D.doK)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.S()
u=A.I()
u.r=B.c.j(q*0.12).gp(0)
d.aP(new A.a3(0,0,0+e.a,0+e.b),u)
p.mg(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mg(d,e,B.m_.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.B5(d,e,10)
break
case"store":p.ciT(d,e)
break
case"paint_remodel":p.ciE(d,e)
break
case"roofing":p.ciL(d,e)
break
case"warehouse":p.cj_(d,e)
break
case"vehicles":p.ciY(d,e)
break
case"farm":p.cim(d,e)
break
case"restaurant":p.ciK(d,e)
break
case"tools":p.ciW(d,e)
break
case"wallet":p.ciZ(d,e)
break
case"concrete":p.cif(d,e)
break
case"blueprint":p.ci7(d,e)
break
default:p.b2a(d,e)}},
ma(d,e,f){var w,v=new A.a3(0,0,0+e.a,0+e.b)
$.S()
w=A.I()
w.sam(new A.a9(B.ay,B.aE,B.x,f,null,null).aA(0,v))
d.aP(v,w)},
mg(d,e,f,g,h){var w,v,u,t,s,r,q=new A.t(e.a/2,e.b/2),p=e.gdE()/2-h
$.S()
w=A.I()
w.b=B.a9
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bX(q,p)
r=w.G()
v.drawArc.apply(v,[A.bG(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
yf(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdE()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.S()
q=new A.ao(B.O,B.M,B.S,B.T,B.R)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.G()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
B5(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.S()
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.G()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b2a(d,e){var w,v=this
v.ma(d,e,D.dn2)
w=v.c
v.mg(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mg(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bOK(d,e,B.i_,w)
v.yf(d,e,B.c.j(0.7),6,8)},
bOK(d,e,f,g){var w,v,u,t,s,r,q,p
$.S()
w=A.I()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.G()
s.drawRect(A.bG(new A.a3(16,q,t,q+3)),p)
p.delete()}},
cis(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.ma(d,e,D.cs4)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.ao(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.S()
l=new A.ao(B.O,B.M,B.S,B.T,B.R)
l.r=D.daV[B.o.F(s,4)].j(0.85).gp(0)
k=l.G()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.mg(d,e,B.c.j(0.35),w,16)
j.yf(d,e,B.ip,5,12)},
ci9(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.ma(d,e,D.csc)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdE()
$.S()
q=A.I()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ad(new A.t(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fy(g,g,g,g,g,B.a4,B.bX,g,B.dA,B.bV)
for(o=0;o<6;++o){n=v+o*0.9
r=D.df1[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saY(0,new A.es(r,g,g,B.cK,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eg()
p.a3(d,new A.t(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ao(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cse[o]
l=B.kD.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saY(0,new A.es(m,g,g,B.cK,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eg()
p.a3(d,new A.t(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ao(o,3)*0.38)+Math.sin(n)*6))}h.mg(d,e,B.c.j(0.35),w*1.5,14)
h.mg(d,e,B.eG.j(0.55),-v*3.141592653589793*2,8)
h.mg(d,e,B.xY.j(0.4),r*2.8,22)
h.yf(d,e,B.pW,8,10)
h.B5(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.S()
r=new A.ao(B.O,B.M,B.S,B.T,B.R)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.G()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
ciA(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.ma(d,e,W.azm)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.br(new A.a3(20,q,u,q+10),B.hG)
$.S()
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=A.ar(B.fU,B.o_,(r+1)/2).gp(0)
n=o.G()
t.drawRRect(A.e7(p),n)
n.delete()}m.mg(d,e,B.fU.j(0.35),w,15)
m.B5(d,e,8)},
civ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.ma(d,e,D.dbp)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.F(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.F(r*0.13,0.7)
$.S()
l=new A.ao(B.O,B.M,B.S,B.T,B.R)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.G()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.mg(d,e,B.bM.j(0.4),-w*3.141592653589793*2.2,11)
j.yf(d,e,B.pT,4,14)},
ciJ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.ma(d,e,D.d_G)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.S()
n=new A.ao(B.O,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.G()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.yf(d,e,B.p4,6,12)
l.mg(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
ciT(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.ma(d,e,D.cFQ)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.br(new A.a3(q,14,q+u,22),B.ie)
$.S()
p=new A.ao(B.O,B.M,B.S,B.T,B.R)
p.r=A.ar(B.fe,B.bM,(r+1)/2).gp(0)
o=p.G()
t.drawRRect(A.e7(q),o)
o.delete()}n.mg(d,e,B.c.j(0.3),w,16)
n.B5(d,e,8)
n.yf(d,e,B.vQ,5,13)},
ciE(d,e){var w,v,u,t,s,r,q,p,o
this.ma(d,e,D.d5Y)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.br(new A.a3(q,p,q+8,p+(18+r*22)),B.hH)
$.S()
q=new A.ao(B.O,B.M,B.S,B.T,B.R)
q.r=[B.il,B.du,B.bM,B.ep][s].j(0.85).gp(0)
o=q.G()
t.drawRRect(A.e7(p),o)
o.delete()}this.mg(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
ciL(d,e){var w,v,u,t,s,r,q,p,o
this.ma(d,e,D.d3k)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.S()
p=new A.ao(B.O,B.M,B.S,B.T,B.R)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.G()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.yf(d,e,B.cq,7,11)},
cj_(d,e){var w,v,u,t,s,r,q,p,o,n
this.ma(d,e,D.cIz)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.br(new A.a3(p,o,p+(t-r*8),o+16),B.hG)
$.S()
p=new A.ao(B.O,B.M,B.S,B.T,B.R)
p.r=A.ar(B.cq,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.G()
s.drawRRect(A.e7(o),n)
n.delete()}this.mg(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
ciY(d,e){var w,v,u,t,s,r,q,p,o
this.ma(d,e,D.dsS)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.br(new A.a3(r,q,r+28,q+8),B.hG)
$.S()
p=new A.ao(B.O,B.M,B.S,B.T,B.R)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.G()
t.drawRRect(A.e7(q),o)
o.delete()}this.B5(d,e,6)},
cim(d,e){var w,v,u,t,s,r,q,p,o,n
this.ma(d,e,D.d9Y)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.S()
s=A.I()
s.r=B.m_.j(0.75).gp(0)
d.ad(new A.t(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=B.hg.j(0.85).gp(0)
o.c=3
n=o.G()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.mg(d,e,B.m_.j(0.35),w,14)},
ciK(d,e){var w,v,u,t,s,r,q,p,o=this
o.ma(d,e,D.dcx)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.bK(new A.t(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.S()
q=new A.ao(B.O,B.M,B.S,B.T,B.R)
q.r=B.c.j(0.22).gp(0)
p=q.G()
t.drawOval(A.bG(r),p)
p.delete()}o.yf(d,e,B.pT,5,16)
o.B5(d,e,7)},
ciW(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.ma(d,e,D.dqh)
w=m.c
v=w*3.141592653589793
m.mg(d,e,B.o_.j(0.55),v*3,10)
m.mg(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.S()
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=B.o_.j(0.8).gp(0)
n=o.G()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
ciZ(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.ma(d,e,D.dty)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.br(new A.a3(p,o,p+36,o+22),B.ie)
$.S()
p=new A.ao(B.O,B.M,B.S,B.T,B.R)
p.r=A.ar(B.ip,B.m_,q).gp(0)
n=p.G()
s.drawRRect(A.e7(o),n)
n.delete()}m.B5(d,e,9)
m.mg(d,e,B.c.j(0.4),w*2.2,12)},
cif(d,e){var w,v,u,t,s,r,q,p,o,n
this.ma(d,e,D.dhV)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bX(new A.t(v,u),34)
$.S()
s=A.I()
s.b=B.a9
s.c=5
s.r=B.c.j(0.45).gp(0)
d.e4(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=B.bO.j(0.85).gp(0)
n=o.G()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
ci7(d,e){var w,v,u,t,s,r,q,p
this.ma(d,e,D.ddD)
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
u.r=B.du.j(0.45).gp(0)
d.aP(new A.a3(0,p,0+v,p+6),u)
this.mg(d,e,B.l4.j(0.45),-t*3.141592653589793*2,11)},
av(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.ath.prototype={
a_T(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_T=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aR0(),$async$a_T)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a8T(s),$async$a_T)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a_T,v)},
agQ(d){return this.clg(d)},
clg(d){var w=0,v=A.j(x.H),u=this,t
var $async$agQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.ilq(d),$async$agQ)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$agQ,v)},
B(d){var w,v,u,t=null,s=A.Q(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.J?B.jO:B.jf
w=x.p
v=A.a([C.aRp(!0,B.r9,1/0,B.qq,t,r,1/0)],w)
if(!q){u=A.a([B.L,B.w.j(0.35)],x.O)
v.push(A.c4(new A.bM(B.b0,t,t,new A.D(B.w1,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.U,t,t,!0,t,t,t,t,t,B.aAk,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a9(B.b0,B.b6,B.x,u,t,t),B.n),B.bh))}v.push(A.ap(8,A.B(A.a([A.E(A.di(D.bSd,D.fys,new C.clY(this,d),A.bo(B.aW,t,t,t,B.c,t,B.jV,t,t,t,t,B.cc)),1),B.ad,A.E(A.ex(D.c_F,D.fNx,this.gccd(),A.dj(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jV,t,t,D.b2V,t,t,t,B.cc)),1)],w),B.m,t,B.e,B.i,0,t,t),t,t,8,8,t,t))
return new A.fI(1.7777777777777777,A.aI(!1,B.a2,!0,B.r9,new A.an(B.a_,t,B.b3,B.t,v,t),B.ap,s,0,t,t,t,t,t,B.ai),t)}}
C.aMs.prototype={
aV(){this.b1()
this.b0()
this.dK()},
q(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdF())
w.b7$=null
w.a1()}}
C.aUq.prototype={}
C.aUp.prototype={}
C.aSn.prototype={}
C.Zp.prototype={
R(){return new C.azA()}}
C.azA.prototype={
Z(){var w,v,u=this
u.a2()
u.a.toString
w=new A.ba("",B.b4,B.aO)
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(w,v)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.ax()
w.P$=0
this.a1()},
Kt(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.K(x.q).f.U(D.fdR)
return}t=u.c
t.toString
v=u.e
A.a5(t,!1).O(new C.aUq(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.Q(d).ax.a===B.J,l=m?B.e4:B.c,k=A.m(20),j=A.p(n,D.c_k,B.f,n,n,new A.o(B.aW.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.av,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bF,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bn,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.i,0,B.p),1)
j=A.B(A.a([j,B.bc,i,A.aH(n,n,n,n,A.X(B.cx,m?B.bu:B.bn,n,n,n,n),n,n,n,new C.d5k(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.i,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bn,n,n,n,n,n,n,n,n,12,n,n,B.U,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bn,n,n,n,n,n,n,n,n,11,n,n,B.cA,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hmd(new C.d5l(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.av,n,n,n,n,n,n,n,n,n,n,n,B.a7,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jO:B.jf
r=A.m(12)
q=A.m(12)
p=m?B.ea:B.bO
t=A.aM(n,B.Y,!0,n,!0,B.t,n,A.aN(),u,n,n,n,n,n,2,A.bs(n,new A.b5(4,r,B.dk),n,n,n,n,n,n,!0,new A.b5(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d5m(o),n,!1,n,n,!1,n,!0,n,B.aa,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,A0.K7,n,n,n,n)
u=m?B.aP:B.av
m=m?B.ea:B.bO
return A.eT(n,l,new A.cT(B.lV,A.ch(A.x(A.a([j,B.aQ,i,B.au,w,B.Q,v,B.aQ,t,B.bx,A.B(A.a([A.E(A.dT(B.di,new C.d5n(d),A.dj(n,n,n,n,n,n,n,n,n,u,n,n,B.cm,n,new A.b8(A.m(12),B.a0),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.as,A.E(A.bI(D.fNM,n,o.ga3_(),A.bo(B.aW,n,n,n,B.c,n,B.cm,n,new A.b8(A.m(12),B.a0),n,n,n)),1)],h),B.m,n,B.e,B.i,0,n,n)],h),B.E,n,B.e,B.P,0,B.p),B.t,n,B.y,n,B.BZ,n,n,B.ah),n),n,n,n,A6.C_,B.d8,n,new A.b8(k,B.a0),n)}}
C.Zo.prototype={
R(){return new C.azz()}}
C.azz.prototype={
Z(){this.a2()
var w=$.ax()
this.d!==$&&A.aQ()
this.d=new A.au(B.at,w)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.ax()
w.P$=0
this.a1()},
Kt(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.K(x.q).f.U(D.fbu)
return}v=this.c
v.toString
A.a5(v,!1).O(new C.aUp(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.Q(d).ax.a===B.J,o=p?B.e4:B.c,n=A.m(20),m=A.p(q,D.bWQ,B.f,q,q,new A.o(B.bP.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bF,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bn,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.i,0,B.p),1)
m=A.B(A.a([m,B.bc,l,A.aH(q,q,q,q,A.X(B.cx,p?B.bu:B.bn,q,q,q,q),q,q,q,new C.d5g(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.i,0,q,q)
l=B.aW.j(p?0.12:0.08)
w=A.m(12)
v=A.J(B.aW.j(0.25),B.r,1)
u=A.X(B.ann,B.aW.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.as,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.i,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bD,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,q,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jO:B.jf
t=A.m(12)
s=A.m(12)
r=p?B.ea:B.bO
v=A.aM(q,B.Y,!0,q,!0,B.t,q,A.aN(),w,q,q,q,q,q,2,A.bs(q,new A.b5(4,t,B.dk),q,q,q,q,q,q,!0,new A.b5(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d5h(this),q,!1,q,q,!1,q,!0,q,B.aa,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.kW,q,q,q,q)
w=p?B.aP:B.av
p=p?B.ea:B.bO
return A.eT(q,o,new A.cT(B.lV,A.ch(A.x(A.a([m,B.aQ,l,B.aB,v,B.bx,A.B(A.a([A.E(A.dT(B.di,new C.d5i(d),A.dj(q,q,q,q,q,q,q,q,q,w,q,q,B.cm,q,new A.b8(A.m(12),B.a0),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.as,A.E(A.bI(D.fUP,q,this.ga3_(),A.bo(B.bP,q,q,q,B.c,q,B.cm,q,new A.b8(A.m(12),B.a0),q,q,q)),1)],k),B.m,q,B.e,B.i,0,q,q)],k),B.E,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.BZ,q,q,B.ah),q),q,q,q,A6.C_,B.d8,q,new A.b8(n,B.a0),q)}}
C.YW.prototype={
R(){return new C.ayf()}}
C.ayf.prototype={
Z(){var w,v=this
v.a2()
w=$.ax()
v.d!==$&&A.aQ()
v.d=new A.au(B.at,w)
v.e!==$&&A.aQ()
v.e=new A.au(new A.ba("1",B.b4,B.aO),w)
v.f!==$&&A.aQ()
v.f=new A.au(B.at,w)
v.r!==$&&A.aQ()
v.r=new A.au(B.at,w)},
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
gJO(){var w,v=this.e
v===$&&A.c()
w=A.d4(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gak_(){var w=this.f
w===$&&A.c()
w=A.d4(B.a.i(w.a.a))
return w==null?0:w},
gb4Y(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aPB(d){var w,v=B.k.E(this.gJO()+d,0.25,999999),u=B.k.jn(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.ac(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.saY(0,u)
this.m(new C.cDL())},
ayK(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aW,w,w,w,20):w,u=d.a,t=u?B.jO:B.jf,s=A.m(14),r=A.m(14)
u=u?B.ea:B.bO
return A.bs(w,new A.b5(4,s,B.dk),w,B.bD,w,w,w,w,!0,new A.b5(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b5(4,A.m(14),B.acW),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cce(d,e,f){return this.ayK(d,e,f,null)},
Kt(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gak_()<=0){s.c.K(x.q).f.U(D.ffJ)
return}r=s.c
r.toString
v=s.gJO()
u=s.gak_()
t=s.gb4Y()
A.a5(r,!1).O(new C.aSn(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.J,m=new C.u7(n),l=n?B.e4:B.c,k=A.m(24),j=x.O,i=A.a([B.aW.j(0.22),B.bP.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bQ8,B.f,o,o,new A.o(o,o,A.J(B.aW.j(0.35),B.r,1),h,o,new A.a9(B.a5,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bF,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.cA,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1)
i=A.B(A.a([i,B.bc,h,A.aH(o,o,o,o,A.X(B.cx,n?B.bu:B.bn,o,o,o,o),o,o,o,new C.cDR(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.Y,!0,o,!0,B.t,o,A.aN(),h,o,o,o,o,o,2,p.ayK(m,"Item name (optional)","Lumber, paint, labor\u2026",B.OU),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,A0.K7,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jO:B.jf
t=A.m(14)
s=A.J(n?B.ea:B.bO,B.r,1)
r=A.aH(o,o,o,o,A.X(B.wv,n?B.aP:B.av,o,o,o,20),o,o,o,new C.cDS(p),o,o,o,o,o,B.cc)
q=p.e
q===$&&A.c()
q=A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),q,o,o,o,o,o,2,D.c1e,B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.e1,o,o,o,1,o,o,!1,"\u2022",o,new C.cDT(p),o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.an,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a4(52,o,q,o),A.aH(o,o,o,o,A.X(B.hQ,n?B.aP:B.av,o,o,o,20),o,o,o,new C.cDU(p),o,o,o,o,o,B.cc)],w),B.m,o,B.e,B.P,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,16,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.as,A.E(A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),t,o,o,o,o,o,2,p.ayK(m,"Amount","0.00",B.i5),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.e1,o,o,o,1,o,o,!1,"\u2022",o,new C.cDV(p),o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.an,o,o,o,o),1)],w),B.E,o,B.e,B.i,0,o,o)
t=x.gv
u=A.C(new A.N(D.d6t,new C.cDW(p,m),t),t.k("ak.E"))
i=A.a([i,B.bx,v,B.aB,h,B.Q,s,B.ae,A.bY(B.bG,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.W,A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),h,o,o,o,o,o,2,p.cce(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cDX(p),o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.kW,o,o,o,o)],w))}i.push(B.aQ)
h=B.aW.j(n?0.18:0.1)
j=A.a([h,B.bP.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.J(B.aW.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bn,o,o,o,o,o,o,o,o,11,o,o,B.U,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJO()===B.k.jn(p.gJO())?B.k.N(p.gJO()):p.gJO()
s=p.gb4Y()
r=A.B2(p.gak_())
i.push(A.p(o,A.B(A.a([A.E(A.x(A.a([u,B.au,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1),C.bEW(p.gJO()*p.gak_(),B.b1,!1,B.u)],w),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a9(B.a5,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.ji,o,o,o))
i.push(B.bx)
j=A.m(14)
h=n?B.ea:B.bO
h=A.dj(o,o,o,o,o,o,o,o,o,o,o,o,B.cm,o,new A.b8(j,B.a0),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dT(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cDY(d),h),1),B.as,A.E(A.di(D.aqU,D.fQI,p.ga3_(),A.bo(B.aW,o,o,0,B.c,o,B.cm,o,new A.b8(A.m(14),B.a0),o,o,o)),2)],w),B.m,o,B.e,B.i,0,o,o))
return A.eT(o,l,new A.cT(A5.adl,A.ch(A.x(i,B.ak,o,B.e,B.P,0,B.p),B.t,o,B.y,o,Aj.rF,o,o,B.ah),o),o,o,o,B.ND,B.d8,o,new A.b8(k,B.a0),o)}}
C.a1z.prototype={
R(){return new C.bxs()}}
C.bxs.prototype={
Z(){var w,v,u=this
u.a2()
w=u.a.e
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,B.b4,B.aO),v)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.ax()
w.P$=0
this.a1()},
B(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.J,q=r?B.e4:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.av,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jO:B.jf
v=A.aM(s,B.Y,!0,s,!0,B.t,s,A.aN(),w,s,s,s,s,s,2,A.bs(s,new A.b5(4,A.m(12),B.dk),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fiy(t,d),s,!1,s,s,!1,s,!0,s,B.aa,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.an,s,s,s,s)
u=A.E(A.dT(B.di,new C.fiz(d),s),1)
r=A.bo(B.bP,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eT(s,q,new A.D(B.BZ,A.x(A.a([o,B.aB,v,B.aQ,A.B(A.a([u,B.as,A.E(A.bI(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fiA(t,d),r),1)],w),B.m,s,B.e,B.i,0,s,s)],w),B.m,s,B.e,B.P,0,B.p),s),s,s,s,s,B.d8,s,new A.b8(p,B.a0),s)}}
C.abT.prototype={
a6(){return"WorksheetFrameStyle."+this.b}}
C.FW.prototype={
R(){return new C.bxq(null,null)}}
C.bxq.prototype={
Z(){var w,v=this
v.a2()
w=A.bm(null,D.bxC,null,1,null,v)
w.cL(0)
v.d!==$&&A.aQ()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bzv()},
gbB0(){switch(this.a.r.a){case 1:return A.a([B.aW,B.bP,B.b1],x.O)
case 2:return A.a([B.bv,B.aW,B.b1],x.O)
case 3:return A.a([B.aJ,B.cf,B.kf],x.O)
case 4:return A.a([B.hh,B.bP,B.fi],x.O)
case 0:return A.a([B.aW,B.bP,B.b1],x.O)}},
B(d){var w=A.Q(d),v=this.d
v===$&&A.c()
return new A.er(A.cb(v,new C.fiw(this,new C.u7(w.ax.a===B.J)),null),null)}}
C.ay8.prototype={
R(){return new C.bxr(null,null)}}
C.bxr.prototype={
Z(){var w,v=this
v.a2()
w=A.bm(null,B.no,null,1,null,v)
w.cL(0)
v.d!==$&&A.aQ()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bzw()},
B(d){var w=this.d
w===$&&A.c()
return A.cb(w,new C.fix(this),null)}}
C.bxp.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.br(new A.a3(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
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
d.aI(u,w)
w=A.xu(u)
t=A.a([],x.U)
w=new A.rm(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b9(A.jD(y.B));--r
q=new A.Bu(w,r)
w.ie()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aT2(d,q,r,o,0,0.2,4.2,0.92)
p.aT2(d,q,r,s,0.52,0.11,3.2,0.58)}},
aT2(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hIg(e.a.a,e,t,t+f*i,!0),r=A.bDh(s.gbu().a.getBounds())
$.S()
w=A.I()
w.b=B.a9
w.c=j
w.d=B.by
w.f=!0
v=this.f
u=k*this.e
w.sam(new A.a9(B.a5,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.I8,null).aA(0,r))
d.aI(s,w)},
av(d){return d.b!==this.b||d.d!==this.d}}
C.aOy.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.aOz.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.u7.prototype={}
C.atg.prototype={
R(){return new C.aFS()},
ge2(){return this.c}}
C.aFS.prototype={
Z(){var w=this
w.a2()
w.d=w.a.d
w.ahG()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.LB(w,v)
this.a1()},
ahG(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ahG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bDp(t.c,t.d.a),$async$ahG)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eRi(u,s))
return A.h(null,v)}})
return A.i($async$ahG,v)},
Qu(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Qu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eR9(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.LB(t,s),$async$Qu)
case 2:if(u.c!=null)u.m(new C.eRa(u))
return A.h(null,v)}})
return A.i($async$Qu,v)},
R0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$R0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.Q(p)
s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.eRg(t,new C.u7(p.ax.a===B.J)),s,null,!0,!0,x.T),$async$R0)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a8T(q),$async$R0)
case 6:case 5:t.m(new C.eRh(t,r))
w=7
return A.b(t.Qu(),$async$R0)
case 7:case 1:return A.h(u,v)}})
return A.i($async$R0,v)},
Wh(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.ilb(r),$async$Wh)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eR4(t,new C.rg(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Qu(),$async$Wh)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wh,v)},
chj(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hA6(t,new C.eR8(u),w,v)},
abC(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bH(new A.ay(v,2.5,B.r,-1),B.a0,B.a0,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b2H,w,w,B.n),w,22,w,w,w,w,w,22)},
aaG(d){return this.bMZ(d)},
bMZ(d){var w=0,v=A.j(x.H),u=this
var $async$aaG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eR7(u,d))
w=2
return A.b(u.Qu(),$async$aaG)
case 2:return A.h(null,v)}})
return A.i($async$aaG,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.Q(a2).ax.a===B.J,e=f?B.c2:B.iy,d=A.m(8),a0=A.X(Z.a12,f?B.bu:B.bn,g,g,g,16),a1=x.p
a0=A.aO(!1,d,!0,new A.D(B.GC,A.B(A.a([a0,B.bm,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bn,g,g,g,g,g,g,g,g,g,g,g,B.a7,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.P,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eRj(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.a_,g,B.b3,B.t,A.a([A.bx(A.m(22),C.aRp(!0,A.m(22),1/0,B.qq,g,d,1/0),B.ap),A.ap(10,A.di(D.bUN,D.fT6,h.gb2T(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.h7,g,new A.b8(A.m(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aW.j(f?0.5:0.38),B.eU,22),new A.ac(-4,B.G,B.bP.j(0.2),B.I,32)],w)
u=A.m(17)
t=A.J(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.I,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bx(s,new A.an(B.a_,g,B.b3,B.t,A.a([C.aRp(!0,A.m(16),1/0,B.Oo,g,r.c,1/0),A.c4(g,new A.o(g,g,g,g,g,new A.a9(B.b0,B.b6,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bh),A.ap(g,h.abC(!0),g,g,8,g,8,g),A.ap(g,A.cAW(h.abC(!0),!0,!1),g,g,g,8,8,g),A.ap(8,A.cAW(h.abC(!1),!1,!0),g,g,8,g,g,g),A.ap(8,A.cAW(h.abC(!1),!0,!0),g,g,g,8,g,g),A.ap(10,A.di(D.bQJ,D.fMt,h.gb2T(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.h7,g,new A.b8(A.m(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.c2W,B.n),g,g,g,g,B.m8,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.bdq,B.o3,B.h3],u):A.a([B.b1,B.aW,B.bP],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aW.j(f?0.45:0.35),B.eU,24)],t)
r=A.m(22)
p=A.ap(g,A.X(B.jY,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.J(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h5,g,g,g)],a1),B.m,g,B.e,B.i,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bEW(h.d.gxg(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.Q,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cA,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.i,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.J(B.hj.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aJ.j(0.28),B.cH,14)],t)
j=B.aJ.j(0.22)
i=A.m(10)
u=A.p(g,A.bx(r,new A.an(B.a_,g,B.ab,B.t,A.a([p,new A.D(D.bCq,A.B(A.a([o,B.as,A.aI(!1,B.a2,!0,g,A.aO(!1,n,!0,A.eK(new A.D(V.w7,A.x(A.a([A.p(g,D.aqu,B.f,g,g,new A.o(j,g,A.J(B.aJ.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.ck,g,g,g),B.fG,D.fBh],a1),B.m,g,B.e,B.P,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gchi(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.m,g,B.e,B.i,0,g,g),g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,g,v,s,new A.a9(B.ay,B.aE,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fI(1.7777777777777777,d,g),B.aQ,w,B.Q,u,B.bx,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b2,A.di(Av.a2T,D.fz7,h.gbBt(),A.bo(B.aW,g,g,g,B.c,g,B.ir,g,new A.b8(A.m(12),B.a0),g,g,g))],a1),B.m,g,B.e,B.i,0,g,g),B.ae],a1)
w=h.d.d
if(w.length===0){w=f?B.e4:B.c
v=A.m(14)
u=A.J(f?B.ea:B.bO,B.r,1)
t=A.X(B.a1n,f?B.bu:B.bn,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,g,g,g,B.U,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.W,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bn,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.m,g,B.e,B.i,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.ql,g,g,1/0))}else B.d.v(d,new A.N(w,new C.eRk(h,new C.u7(f)),A.T(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.BO,A.as(A.n0(g,f?B.bu:B.bn,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c6(g,e,A.bn(!0,A.x(A.a([new A.D(B.BS,a0,g),A.E(A.ch(A.x(d,B.E,g,B.e,B.i,0,B.p),B.t,g,B.y,g,E.yv,g,g,B.ah),1)],a1),B.E,g,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bF9(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e4:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cH,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.b5r,u,u,u,u,u,u,u,5),l=B.aW.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.X(s?B.i6:B.ho,B.b1,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bJ
else{k=x.p
t=A.a([A.d(t,u,2,B.a1,u,u,u,A.l(u,u,r?B.aP:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcXy()
v=A.B2(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bu:B.bn,u,u,u,u,u,u,u,u,12,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.b9,B.P,0,B.p)}t=A.E(t,1)
k=A.a([B.aW.j(0.14),B.bP.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bEW(d.c*d.d,B.b1,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a9(B.a5,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.h7,u,u,u)
w=x.p
return A.p(u,A.bx(n,new A.Em(A.B(A.a([m,A.E(new A.D(B.akt,A.B(A.a([l,B.bc,t,B.ad,k,A.aH(u,u,u,u,A.X(B.cx,(r?B.bu:B.bn).j(0.75),u,u,u,20),u,u,u,new C.eR5(this,d),u,u,u,u,u,B.cc)],w),B.m,u,B.e,B.i,0,u,u),u),1)],w),B.ak,u,B.e,B.i,0,u,u),u),B.ap),B.f,u,D.b4j,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d1,u,u,u,u)}}
C.adV.prototype={
EE(d){return this.bOm(d)},
bOm(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$EE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pn(d,o,!1),$async$EE)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).O(null)
w=4
return A.b(A.bP(Ai.BM,null,x.H),$async$EE)
case 4:s=t.d
w=5
return A.b(C.fRe(!0,o,s),$async$EE)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.GR(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$EE)
case 6:p=f
w=7
return A.b(A.pm(o,!1),$async$EE)
case 7:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$EE,v)},
a_V(d){return this.cxJ(d)},
cxJ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_V=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pn(d,s,!1),$async$a_V)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).O(null)
A.hH(d,new C.ata(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pm(s,!1),$async$a_V)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_V,v)},
Qv(d){return this.ctM(d)},
ctM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Qv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).O(null)
w=3
return A.b(A.hH(d,D.aK2,!0,"NgmyWorksheetProjectScan",x.N),$async$Qv)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bEX(s),$async$Qv)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.K(x.q).f.U(D.feR)
w=1
break}q=C.hc1(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dV(p,x.H),$async$Qv)
case 5:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Qv,v)},
a_W(d){return this.cFT(d)},
cFT(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_W=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).O(null)
w=3
return A.b(C.bEt(),$async$a_W)
case 3:s=f
if(s==null){w=1
break}r=C.hc1(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dV(q,x.H),$async$a_W)
case 4:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_W,v)},
B(d){var w=this,v=null,u=A.Q(d).ax.a===B.J,t=new C.u7(u),s=w.d.d.length,r=u?B.e4:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kt,36)],x.V),o=x.p
return A.bn(!0,new A.D(B.w6,A.p(v,A.x(A.a([w.cwi(d,t,s),new A.D(D.bBP,A.x(A.a([w.b5U(t,"QR restore"),B.W,A.B(A.a([w.b0T(t,!0,B.jE,B.aJ,B.aJ,new C.eRm(w,d),"Show to scan","QR code"),B.as,w.ayL(t,B.jj,B.b7,B.bq,new C.eRn(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.i,0,v,v),B.d4,w.b5U(t,"Backup files"),B.W,A.B(A.a([w.ayL(t,B.hR,B.aW,B.bP,new C.eRo(w,d),"Full copy","Backup file"),B.as,w.ayL(t,R.z7,B.aA,B.aT,new C.eRp(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.i,0,v,v)],o),B.E,v,B.e,B.i,0,B.p),v)],o),B.m,v,B.e,B.P,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
cwi(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f8,B.cQ,B.fM],k):A.a([B.b1,B.aW,B.bP],k)
w=A.ap(l,A.X(B.uH,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kK,l,l,l,36),l,l,l)
u=A.m(14)
t=A.J(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cH,12)],x.V)
r=this.d
s=A.p(l,C.aRp(!0,A.m(13),64,D.bM0,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a1,l,l,l,K.aal,l,l,l)
r=C.bEW(r.gxg(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.J(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.a_,l,B.ab,B.t,A.a([w,new A.D(D.bCc,A.x(A.a([v,A.B(A.a([s,B.es,A.E(A.x(A.a([u,B.au,t,B.Q,A.B(A.a([r,B.ad,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fP,l,l,l)],m),B.m,l,B.e,B.i,0,l,l)],m),B.E,l,B.e,B.i,0,B.p),1),A.aH(l,l,l,l,A.X(B.cx,B.c.j(0.85),l,l,l,l),l,l,l,new C.eRl(d),l,l,l,A.nP(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aS6,l,l,l,l),l,l)],m),B.E,l,B.e,B.i,0,l,l)],m),B.m,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.ay,B.aE,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b5U(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aW,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ad,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bu:B.bn,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
b0T(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.aj0:B.aP
if(e)w=B.aJ.j(o?0.45:0.35)
else{w=o?B.ea:B.bO
w=w.j(o?0.8:1)}w=A.J(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aJ.j(0.12),B.cH,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.J(h.j(0.35),B.r,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.rG,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.av,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aI(!1,B.a2,!0,r,A.aO(!1,q,!0,A.eK(new A.D(E.a_p,A.x(A.a([t,B.ae,u,B.bF,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bu:B.bn,r,r,r,r,r,r,r,r,11,r,r,B.cA,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
ayL(d,e,f,g,h,i,j){return this.b0T(d,!1,e,f,g,h,i,j)}}
C.ata.prototype={
R(){return new C.bmw()}}
C.bmw.prototype={
Z(){this.a2()
this.afA()},
afA(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$afA=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bEY(p.c,p.d),$async$afA)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eR_(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eR0(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afA,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.Q(d).ax.a===B.J,f=g?B.Bg:B.iy,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eK,g?B.ac:B.al,h,h,h,18),h,h,h,new C.eR1(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.N,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.Ag],u),B.m,h,B.e,B.i,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.f8,B.cQ,B.fM],s):A.a([B.b1,B.aW,B.bP],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aW.j(g?0.4:0.3),B.eU,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.de,B.K,h,h)
p=C.bEW(p.gxg(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.am,A.B(A.a([p,B.ad,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fP,h,h,h)],u),B.m,h,B.b9,B.i,0,h,h)],u),B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a9(B.ay,B.aE,B.x,s,h,h),B.n),h,h,h,h,E.a_M,h,h,1/0)
t=g?D.boo:B.c
q=A.m(24)
p=A.J(w?B.aJ.j(0.4):B.aW.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.ds,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.UN,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.enm)
else{m=A.m(20)
l=A.J(B.aN,B.r,1)
o.push(A.p(h,A.q3(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aQ)
n=w?B.aJ:B.aW
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.J((w?B.aJ:B.aW).j(0.35),B.r,1)
k=w?B.OC:B.P8
k=A.X(k,w?B.aJ:B.aW,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.as,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ac:B.al,h,h,h,h,h,h,h,h,12,h,h,B.a7,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.i,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.ir,h,h,h))
return A.c6(h,f,A.bn(!0,A.x(A.a([new A.D(Af.NP,e,h),A.E(A.ch(A.x(A.a([s,B.aQ,A.p(h,A.x(o,B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.uj,h,h,1/0)],u),B.m,h,B.e,B.i,0,B.p),B.t,h,B.y,h,E.alB,h,h,B.ah),1)],u),B.m,h,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.atf.prototype={
R(){return new C.aFR(A.zA(B.N6,B.nU,B.uP))}}
C.aFR.prototype={
q(){this.d.q()
this.a1()},
aNA(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iX(w,d)},
cd7(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.ij3(t)
if(s!=null){this.aNA(s)
return}r=C.hqK(t)
if(r!=null)q=A.cU(r,p,0)
else q=!1
if(q){this.aNA(B.a.i(B.a.b5(r,B.a.cp(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eI(A.a([A.aH(t,t,t,t,A.X(u.f?B.uv:Aa.OJ,t,t,t,t,t),t,t,t,new C.eR3(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Bg,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fMm,t,t,t,1,t,!0),q=A.zz(u.d,B.bY,u.gcd6()),p=A.m(28)
p=A.as(A.p(t,t,B.f,t,t,new A.o(t,t,A.J(B.aW,B.r,3),p,A.a([new A.ac(2,B.G,B.aW.j(0.35),B.I,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c6(r,B.w,new A.an(B.a_,t,B.b3,B.t,A.a([q,p,A.ap(32,A.p(t,D.fL7,B.f,t,t,new A.o(w,t,A.J(B.aW.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.ji,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aKN.prototype={
a6(){return"_WorksheetTab."+this.b}}
C.Ou.prototype={
R(){return new C.aFT(D.acd,A.a([],x.D))},
bv(){return this.r.$0()},
ge2(){return this.c}}
C.aFT.prototype={
gcDJ(){return J.bG5(this.e,0,new C.eRM())},
Z(){this.a2()
$.aV.c1$.push(this)
this.vZ()},
q(){$.aV.hS(this)
this.a1()},
jh(d){if(d===B.fK)this.vZ()},
vZ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vZ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Dd(q.a.c).d9(0,B.jU),$async$vZ)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eRI(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eRJ(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vZ,v)},
Id(d){return this.bL6(d)},
bL5(){return this.Id(null)},
bL6(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Id=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ild(l,d),$async$Id)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.ly(l,r,q,D.di8,new A.V(Date.now(),0,!1))
w=4
return A.b(C.LB(t.a.c,p),$async$Id)
case 4:o=f
w=5
return A.b(t.vZ(),$async$Id)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.K(x.q).f.U(D.fbY)
w=1
break}n=J.aW(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gS(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.K(q).f.U(D.fdL)
else n.K(q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.EI(m)
case 1:return A.h(u,v)}})
return A.i($async$Id,v)},
EI(d){return this.ch4(d)},
ch4(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$EI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hH(s,new C.atg(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$EI)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.LB(u.a.c,t),$async$EI)
case 5:case 4:w=6
return A.b(u.vZ(),$async$EI)
case 6:return A.h(null,v)}})
return A.i($async$EI,v)},
vM(d){return this.c0m(d)},
c0m(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bEt(),$async$vM)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hH(r,D.aK2,!0,"NgmyWorksheetProjectScan",x.N),$async$vM)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bEX(q),$async$vM)
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
break}p=C.hc1(s)
w=15
return A.b(C.LB(t.a.c,p),$async$vM)
case 15:o=f
w=16
return A.b(t.vZ(),$async$vM)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.K(x.q).f.U(D.fdQ)
w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.EI(p)
case 1:return A.h(u,v)}})
return A.i($async$vM,v)},
Oc(d){return this.bJL(d)},
bJL(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Oc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ck(null,null,!0,null,new C.eRt(d),s,null,!0,!0,x.y),$async$Oc)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oU(t.a.c,A.a([],x.D)),$async$Oc)
case 6:w=7
return A.b(t.vZ(),$async$Oc)
case 7:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.fc2)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Oc,v)},
chh(d){var w=this.c
w.toString
A.bV(B.L,null,new C.eRC(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b6v(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jO
else w=B.c
v=A.m(16)
u=A.J(p?B.ea:B.bO,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.av,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aI(!1,B.a2,!0,r,A.aO(!1,q,!0,A.p(r,A.x(A.a([s,B.ae,t,B.bF,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bu:B.bn,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.w5,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a0q(d,e){return this.ch5(d,e)},
ch5(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0q=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(B.L,null,new C.eRx(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a0q)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hA6(r,new C.eRy(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Oe(d,e),$async$a0q)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0q,v)},
b3v(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.ax
else t=h.a?B.aP:B.av
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bu:B.bn,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.i,0,B.p),1)
return A.aI(!1,B.a2,!0,u,A.aO(!1,u,!0,new A.D(B.BY,A.B(A.a([s,B.bc,t,A.X(B.eE,w?B.bu:B.bn,u,u,u,u)],v),B.m,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
co_(d,e,f,g,h,i){return this.b3v(!1,d,e,f,g,h,i)},
Oe(d,e){return this.bJV(d,e)},
bJV(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Oe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.li(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Oe)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bDb(t.a.c,d.a),$async$Oe)
case 6:w=7
return A.b(t.vZ(),$async$Oe)
case 7:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Oe,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===B.J,n=new C.u7(o),m=o?B.c2:B.iy
if(q.f)o=D.bbe
else{w=q.bEg(n)
v=q.c_q(n)
u=q.gbBn()
if(o)t=B.jO
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ae,v,B.aQ,new C.FW(A.p(p,A.B(A.a([q.aCi(P.On,"Projects",n,D.acd),q.aCi(B.wk,"Cashier",n,D.b_r),q.aCi(B.GW,"Family Tree",n,D.hvd)],r),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ev,0.95,u,p),B.bx],r)
w=q.d
if(w===D.acd){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.av,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b2,new C.ay8(q.gaRP(),p)],r),B.m,p,B.e,B.i,0,p,p),B.aB,q.co1(n)],r))}else{o=q.a
if(w===D.b_r)u.push(new C.ap8(o.c,n,p))
else{w=q.r
u.push(new C.aqh(o.c,o.d,o.e,o.f,new C.eRP(q),new C.eRQ(q),new A.bR(w,x.b4)))}}o=A.ch(A.x(u,B.E,p,B.e,B.i,0,B.p),B.t,p,B.y,p,Al.NI,p,p,B.ah)}return A.c6(p,m,A.bn(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bEg(d){var w=null,v=A.m(8),u=d.a,t=A.X(Z.a12,u?B.bu:B.bn,w,w,w,16)
return A.aO(!1,v,!0,new A.D(B.kL,A.B(A.a([t,B.bm,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bu:B.bn,w,w,w,w,w,w,w,w,14,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eRq(this),w,w,w,w,w,w,w)},
gbBn(){switch(this.d.a){case 0:return D.abp
case 1:return D.hka
case 2:return D.abq}},
c_q(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aW.j(0.35),B.cy,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bWG,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bc,D.bGH,A.aI(!1,B.a2,!0,w,A.aO(!1,A.m(12),!0,A.p(w,D.bU5,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eRu(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.E,w,B.e,B.i,0,w,w),r=B.b1.j(0.55),q=A.m(12)
return new C.FW(A.p(w,A.x(A.a([new A.D(E.a_v,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.B2(this.gcDJ()),w,w,w,w,w,w,D.fvm,w,w,w)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.uf,B.ji,w,w,1/0)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(B.aW,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.hk9,w)},
aCi(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aW:B.L,q=A.m(12),p=t?A.J(B.c.j(0.55),B.r,2):A.J(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aW.j(0.42),B.cH,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bn
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bn
return A.E(A.aI(!1,B.a2,!0,u,A.aO(!1,s,!0,A.cY(u,A.B(A.a([w,B.eg,new A.dr(1,B.cn,A.d(e,u,1,B.a1,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b9,B.i,0,u,u),u,u,B.cu,new A.o(r,u,p,q,o,u,B.n),B.iE,u,u,u,u,B.GD,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eRL(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
co1(d){var w,v,u,t,s,r,q=this,p=null
if(J.ct(q.e)){w=d.a
v=w?B.e4:B.c
u=A.m(15)
t=A.p(p,D.bUb,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aW.j(0.5),B.eU,28)],x.V),D.c5q,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.av,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.FW(A.p(p,A.x(A.a([t,B.d4,s,B.Q,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bn,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.dT,A.B(A.a([A.E(q.aTo(B.jj,"Scan QR",new C.eRF(q),d),1),B.as,A.E(q.aTo(R.z7,"Upload file",new C.eRG(q),d),1)],r),B.m,p,B.e,B.i,0,p,p),B.aB,A.bI(D.fWN,p,q.gaRP(),A.bo(B.aW,p,p,p,B.c,B.h0,p,p,new A.b8(A.m(12),B.a0),p,p,p))],r),B.m,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bDh,1.05,D.abp,p)}w=J.b6(q.e,new C.eRH(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.FW(A.x(w,B.m,p,B.e,B.i,0,B.p),16,B.bT,1,D.abp,p)},
aTo(d,e,f,g){var w=null,v=B.aW.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.J(B.aW.j(0.45),B.r,1)
return A.aI(!1,B.a2,!0,u,A.aO(!1,t,!0,A.p(w,A.x(A.a([A.X(d,B.b1,w,w,w,26),B.Q,A.d(e,w,w,w,w,w,w,D.ftE,B.K,w,w)],x.p),B.m,w,B.e,B.P,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.akm,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
co0(d,e){var w,v,u=null,t=e.a,s=t?B.e4:B.c,r=A.m(14),q=A.J(t?B.ea:B.bO,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.en,10)],x.V),o=A.m(14),n=t?B.bu:B.bn
n=A.bx(B.WR,new A.fI(1.7777777777777777,C.aRp(!0,B.fL,1/0,P.On,n,d.c,1/0),u),B.ap)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.B2(d.gxg()),u,u,u,u,u,u,D.frC,u,u,u)],w),B.E,u,B.e,B.i,0,B.p),1)
return A.p(u,A.aI(!1,B.a2,!0,u,A.aO(!1,o,!0,A.x(A.a([n,new A.D(B.bD,A.B(A.a([v,A.aH(u,u,u,u,A.X(Am.a24,t?B.bu:B.bn,u,u,u,u),u,u,u,new C.eRD(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.i,0,u,u),u)],w),B.E,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eRE(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.ed,u,u,u,1/0)}}
C.bzf.prototype={}
C.rg.prototype={
ah(){var w=this,v=w.c,u=w.d
return A.H(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcXy(){var w,v,u,t,s=this.c
if(s===B.k.jn(s))w=B.o.u(B.k.N(s))
else{v=B.k.ac(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.ly.prototype={
gxg(){return B.d.cI(this.d,0,new C.cDa())},
ah(){var w=this,v=w.d,u=A.T(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.cD9(),u),u.k("ak.E"))
return A.H(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ae()],x.N,x.z)},
bdM(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.ly(w.a,w.b,v,u,w.e)},
bdu(d){return this.bdM(d,null)},
Tf(d){return this.bdM(null,d)}}
C.HZ.prototype={
a6(){return"FamilyGender."+this.b}}
C.hW.prototype={
ah(){var w=this
return A.H(["id",w.a,"name",w.b,"gender",C.hvL(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aF5(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hW(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.alm.prototype={
a6(){return"FamilyTreeAccessRole."+this.b}}
C.kP.prototype={
gapF(){var w=this.f
return new A.Z(w,new C.bRx(),A.T(w).k("Z<1>")).gL(0)},
ah(){var w=this,v=w.f,u=A.T(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.bRw(),u),u.k("ak.E"))
return A.H(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ae(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ibq(w.y),"games",w.z],x.N,x.z)},
wD(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kP(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bdL(d,e){var w=null
return this.wD(w,w,w,d,e,w,w,w,w)},
cMZ(d,e,f,g,h,i,j){return this.wD(d,e,null,f,g,h,i,j,null)},
aFa(d,e){var w=null
return this.wD(w,w,w,w,d,w,w,e,w)},
cN0(d,e,f,g,h,i,j,k){return this.wD(d,e,null,f,g,h,i,j,k)},
cLt(d){var w=null
return this.wD(w,w,w,w,w,w,w,d,w)},
cLR(d){var w=null
return this.wD(w,w,w,w,w,w,w,w,d)},
bdo(d){var w=null
return this.wD(w,w,d,w,w,w,w,w,w)},
aEW(d){var w=null
return this.wD(w,w,w,w,w,d,w,w,w)},
cMv(d,e,f){var w=null
return this.wD(w,d,w,w,e,w,w,f,w)},
cLg(d){var w=null
return this.wD(w,w,w,d,w,w,w,w,w)},
cM3(d,e){var w=null
return this.wD(d,w,w,w,w,w,e,w,w)}}
C.cDb.prototype={
a6(){return"WrapAlignment."+this.b}}
C.cDc.prototype={
a6(){return"WrapCrossAlignment."+this.b}}
C.aHY.prototype={}
C.ba_.prototype={
bx(d){this.a=d.a
this.b=d.b},
cV(d){var w=new C.ba_()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b0(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b9Z.prototype={
gwv(){return!0},
gGg(){return this.z.b<this.b.length},
aV1(d){switch(0){case 0:return d.a.c}},
aUJ(d){switch(0){case 0:return d.a.d}},
bTP(d,e){switch(0){case 0:return new A.hS(d,e)}},
bTc(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hc(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iL(0,0,B.o.E(0,b5.a,b5.b),B.o.E(0,b5.c,b5.d))
return}w=A.HK(b4)
switch(0){case 0:v=b5.b
u=new A.kL(0,v,0,1/0)
t=w===B.UE
break}s=A.a([],x.gZ)
r=A.U(x.gF,x.S)
for(b3=b1.z,q=B.d.fM(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.L)(q),++h){g=q[h]
g.hc(b4,u,!0)
f=b1.aV1(g)
f.toString
e=b1.aUJ(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aHY(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aHY(k,j,i))}d=s.length
switch(0){case 0:q=b5.cA(new A.hS(m,l))
a0=q.a
a1=q.b
b1.a=new A.iL(0,0,a0,a1)
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
for(q=B.d.fM(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.L)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aV1(g)
e=b1.aUJ(g)
e.toString
a9=b1.bTc(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bTP(a6,a3+a9)
b0=g.a
g.a=new A.iL(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h7(d){var w,v,u,t,s,r=this
r.lu(d)
w=d.b
w.io()
v=A.ds()
u=r.a
v.eh(u.a,u.b,0,1)
w.pc(0,v)
for(u=r.z,u=B.d.dt(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].h7(d)
w.ns(0)},
GK(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
io(){return this.z}}
C.bxt.prototype={}
var z=a.updateTypes(["aB<~>()","R(hW)","~()","R(kP)","R(nq)","a8<n,@>(kP)","G(kP,kP)","G(hW,hW)","n(hW)","kP(a8<@,@>)","R(ly)","nq(a8<@,@>)","a8<n,@>(nq)","R(uE)","uE()","G(hW)","ai<hW>()","R(zh)","a_r(Y)","n?(hW)","eJ<n?>(hW)","aB<~>(ly)","R(rg)","a8<n,@>(hW)","hW(a8<@,@>)","G(ly,ly)","R(afd)","~(bb)","v(ow)","G(G,a9l)","R(qB<G>)","~(qB<G>)","Tc(Y)","R(Mf)","R(uD)","~(hW)","n(n)","Vy(Y)","Tb(Y)","adA(Y)","Zn(Y)","hW(hW)","cN(bA<n,Ga>)","cN(Kp)","ZR(Y)","G?(hW)","hW()","R(Kp)","D(hW)","~(HZ)","ZN(Y)","v(HZ,n,a0)","R(af6)","bA<n,ai<a8<n,@>>>(n,ai<nq>)","ZP(Y)","+count,id,name(G,n,n)(kP)","n(kP)","a_M(Y)","a_N(Y)","R(lQ)","lQ()","YW(Y)","a1z(Y)","Zp(Y)","Zo(Y)","~(G)","~(n,ln?)","v(rg)","adV(Y)","~(md)","aB<~>([n?])","K(K,ly)","v(ly)","K(K,rg)","a8<n,@>(rg)","rg(a8<@,@>)","ai<ln>()","uD()","n(V)","ly(a8<@,@>)","cv(HY)","n(ly)","a8<n,@>(ly)","G(nq,nq)","kP(a8<n,@>)","kP(kP)"])
C.fJP.prototype={
$1(d){return d.a+" "+d.b},
$S:128}
C.fJO.prototype={
bmV(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.r8(s,d,B.hS,"book",E.Gg),$async$$1)
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
$1(d){return this.bmV(d)},
$S:316}
C.fJQ.prototype={
$1(d){return d.b},
$S:128}
C.fTh.prototype={
$1(d){var w=null
return A.eT(w,B.L,new H.PS(this.a,this.b,w),w,w,0,B.a_q,B.d8,w,w,w)},
$S:49}
C.fxL.prototype={
$1(d){return d!=null},
$S:221}
C.fxM.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:221}
C.fxR.prototype={
$1(d){if(this.a)return new A.t(d.a*520,d.b*160)
return d},
$S:168}
C.fHy.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fd(d,w,w,w,A.hd(w,B.t6,w,w,w,w,w,w,w,B.dx,w,w,10.5,w,B.ew,w,!0,w,w,w,w),w),u=f?B.ew:B.we
return new A.o_(D.byG,A.aa9(A.a([new A.fX(130,w,v),new A.zg(1,B.GP,A.fd(e,w,w,w,A.hd(w,g==null?D.epL:g,w,w,w,w,w,w,w,B.dx,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.y9,B.lM))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1937}
C.fHx.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vO(999)
f=A.xl(A.lL(h,A.fd("Cashier",h,h,h,A.hd(h,D.A1,h,h,h,h,h,h,h,B.dx,h,h,10,h,B.ew,h,!0,h,h,h,h),h),h,new A.kM(D.epC,h,f,B.hV,h),h,h,D.bzb,h))
w=A.xl(A.fd("Debt receipt",h,h,h,A.hd(h,h,h,h,h,h,h,h,h,B.dx,h,h,22,h,B.ew,h,!0,h,h,h,h),h))
v=A.xl(A.fd(C.x3(new A.V(Date.now(),0,!1),!0),h,h,h,D.a9T,h))
u=A.vO(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fd(s,h,h,h,A.hd(h,h,h,h,h,h,h,h,h,B.dx,h,h,14,h,B.ew,h,!0,h,h,h,h),h)
r=A.fd("Person who owes",h,h,h,D.a9T,h)
q=A.vO(10)
p=x.Z
u=A.lL(h,A.za(A.a([s,new A.fX(h,2,h),r,new A.fX(h,10,h),A.lL(h,A.za(A.a([A.fd("Amount owed",h,h,h,D.a9T,h),new A.fX(h,2,h),A.fd(A.B2(t.c),h,h,h,A.hd(h,D.A1,h,h,h,h,h,h,h,B.dx,h,h,20,h,B.ew,h,!0,h,h,h,h),h)],p),B.rw,B.lM),h,new A.kM(B.pv,h,q,B.hV,h),h,h,D.bym,1/0)],p),B.rw,B.lM),h,new A.kM(E.aLn,h,u,B.hV,h),h,h,D.bAi,1/0)
q=new A.nI(D.epF,0.9,B.l_)
r=A.vO(12)
s=i.c
o=s.$2("Original due",C.x3(t.r,!1))
n=s.$2("Current due",C.x3(t.f,!1))
m=i.d
l=new A.nI(m,1.1,B.l_)
k=A.vO(8)
j=i.a
k=A.a([o,n,new A.fX(h,6,h),A.lL(h,A.xl(A.fd(t.gaM5(),h,h,h,A.hd(h,m,h,h,h,h,h,h,h,B.dx,h,h,11,h,B.ew,h,!0,0.5,h,h,h),h)),h,new A.kM(h,new A.pQ(l,l,l,l),k,B.hV,h),h,h,D.bzj,1/0),new A.fX(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.A1))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.A1))
else{n=A.fd("Missed days ("+n+")",h,h,h,A.hd(h,B.t6,h,h,h,h,h,h,h,B.dx,h,h,10.5,h,B.ew,h,!0,h,h,h,h),h)
m=A.T(o).k("N<1,SM>")
o=A.C(new A.N(o,new C.fHw(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fX(h,4,h),n,new A.fX(h,6,h),new C.b9Z(5,5,new C.ba_(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fX(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fX(h,8,h),w,new A.fX(h,3,h),v,new A.fX(h,16,h),u,new A.fX(h,10,h),A.lL(h,A.za(k,B.y9,B.lM),h,new A.kM(h,new A.pQ(q,q,q,q),r,B.hV,h),h,h,B.akx,1/0)],p)
w=j.a
if(w!=null){v=new A.nI(B.Jn,1,B.l_)
B.d.v(f,A.a([new A.fX(h,16,h),A.fd("Debtor signature",h,h,h,A.hd(h,B.t6,h,h,h,h,h,h,h,B.dx,h,h,10,h,B.ew,h,!0,h,h,h,h),h),new A.fX(h,6,h),A.lL(h,new A.Ig(w,B.X0,h,h),h,new A.kM(h,new A.pQ(v,v,v,v),A.vO(6),B.hV,h),82,h,B.NN,1/0)],p))}f.push(new A.fX(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fd(w,h,h,h,D.fk5,h))
f.push(new A.fX(h,18,h))
f.push(A.xl(A.fd("NGMY.ORG",h,h,h,A.hd(h,D.A1,h,h,h,h,h,h,h,B.dx,h,h,14,h,B.ew,h,!0,1.8,h,h,h),h)))
return f},
$S:425}
C.fHw.prototype={
$1(d){var w=null,v=new A.nI(D.Jo,0.7,B.l_),u=A.vO(999)
return A.lL(w,A.fd(C.x3(d,!1),w,w,w,A.hd(w,D.Jo,w,w,w,w,w,w,w,B.dx,w,w,9.5,w,B.ew,w,!0,w,w,w,w),w),w,new A.kM(w,new A.pQ(v,v,v,v),u,B.hV,w),w,w,D.bEI,w)},
$S:1938}
C.c6L.prototype={
$1(d){var w=null,v=B.bB.j(0.08),u=A.m(999),t=A.J(B.bB.j(0.28),B.r,1)
return A.p(w,A.d(C.x3(d,!1),w,w,w,w,w,w,D.fr6,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eJ,w,w,w)},
$S:1939}
C.fTO.prototype={
$1(d){var w=null,v=A.aG(d,B.bZ,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bXC,w,w,w,new C.fTL(d),w,w,w,w,w,B.cc),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eT(w,B.L,new A.cT(new A.aZ(0,380,0,v.a.b*0.9),A.aI(!1,B.a2,!0,u,new A.D(B.a_e,A.x(A.a([new A.bM(B.a8,w,w,t,w),new A.dr(1,B.cn,A.ch(A.x(A.a([new A.er(new C.aZV(r,w),s),B.W,A.B(A.a([A.E(A.ex(B.zf,D.fT1,new C.fTM(s,r,d),A.dj(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fg,w,new A.b8(A.m(14),B.a0),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ad,A.E(A.di(B.a2J,D.fPq,new C.fTN(r,d),A.bo(B.b1,w,w,w,B.c,w,B.fg,w,new A.b8(A.m(14),B.a0),w,w,w)),1)],p),B.m,w,B.e,B.i,0,w,w)],p),B.m,w,B.e,B.P,0,B.p),B.t,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.P,0,B.p),w),B.f,B.av,0,w,w,w,w,w,B.ai),w),w,w,0,Ar.a_E,B.d8,w,w,w)},
$S:49}
C.fTL.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fTM.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aV.al$.x.h(0,t.a)
m=m==null?null:m.gbd()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m7(2.5),$async$$0)
case 4:w=3
return A.b(e.hx(B.ha),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eS(B.dK.gaS(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.au(o,0,32)
w=5
return A.b(A.tb(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fTN.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fO9(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.K(x.q).f
s.U(A.b3(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fTG.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eT(w,B.av,A.x(A.a([new A.D(D.bA6,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.n3,w,w,w),1),A.aH(w,w,w,w,B.lh,w,w,w,new C.fTE(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),w),new A.dr(1,B.cn,new A.D(B.eZ,A.bx(A.m(14),A.fT(t,B.A,w,w,B.ci,B.dz,!1,w,!1,w,w),B.ap),w),w),new A.D(B.Nr,new A.a4(1/0,w,A.di(B.ou,D.aVl,new C.fTF(t,this.c,d),A.bo(B.b1,w,w,w,B.c,w,w,w,new A.b8(A.m(14),B.a0),w,w,w)),w),w)],u),B.m,w,B.e,B.P,0,B.p),w,w,w,B.NE,B.d8,w,new A.b8(v,B.a0),w)},
$S:49}
C.fTE.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fTF.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.tb(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fTS.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eT(w,B.av,new A.D(D.bAe,A.x(A.a([A.B(A.a([D.bFM,A.aH(w,w,w,w,B.lh,w,w,w,new C.fTQ(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),B.Q,new A.er(A.bx(A.m(14),A.p(w,A.b4(w,w,w,new C.bc8(s.ax,w),B.aw),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.ae,new A.a4(1/0,w,A.di(B.ou,D.aVl,new C.fTR(t,s,d),A.bo(B.b1,w,w,w,B.c,w,w,w,new A.b8(A.m(14),B.a0),w,w,w)),w)],u),B.m,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d8,w,new A.b8(v,B.a0),w)},
$S:49}
C.fTQ.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fTR.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aV.al$.x.h(0,t.a)
n=n==null?null:n.gbd()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m7(2.5),$async$$0)
case 4:w=3
return A.b(e.hx(B.ha),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.au(p,0,32)
r=J.eS(B.dK.gaS(s))
w=5
return A.b(A.tb(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fC5.prototype={
$1(d){return d.a===this.a},
$S:250}
C.dMY.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dMJ.prototype={
bm8(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e4:B.c
s=u.a
w=2
return A.b(A.bV(t,null,new C.dMM(s,q,e),p,!0,!0,!1,B.JF,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dMN(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bm8(d,e)},
$S:1940}
C.dMM.prototype={
$1(d){var w,v=null,u=this.c===B.wN,t=u?D.dp0:D.dky
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.av,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bn(!0,new A.D(O.al3,A.x(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bu:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae,A.io(!0,v,v,B.y,D.faE,new C.dML(this.a,w,t,d),t.length,v,B.dS,B.ah,!0)],x.p),B.ak,v,B.e,B.P,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:27}
C.dML.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cQ.j(0.14)
else w=t.b.a.d.a?B.N:B.aP
v=A.m(14)
if(q)u=B.cQ
else u=(t.b.a.d.a?B.bu:B.bn).j(0.16)
u=A.J(u,B.r,q?1.6:1)
return A.aO(!1,p,!0,A.p(B.A,C.aZU(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dMK(t.d,r),s,s,s,s,s,s,s)},
$S:197}
C.dMK.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.dMN.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dMH.prototype={
$3(d,e,f){return B.bJ},
$C:"$3",
$R:3,
$S:91}
C.dMI.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cK(B.cu,e,v)
return new A.d1(e,!1,A.iu(B.A,A.as(A.aI(!1,B.a2,!0,v,new A.e2(new C.dMG(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bg(t,new A.bq(0.96,1,u),u.k("bg<bO.T>"))),v)},
$S:33}
C.dMG.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aG(d,B.bZ,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e4:B.c,f=A.m(14),e=A.J((h?B.bu:B.bn).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.B(A.a([w,A.aO(!1,v,!0,new A.D(B.ev,A.X(B.cx,i.a.d.a?B.bu:B.bn,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dMr(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.i,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aTV("Name")
r=l.a
q=r.d==null?k:new C.dMs(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bo:B.m1
n=A.J(B.cQ.j(0.35),B.r,1)
m=r.d
t=A.aM(k,B.Y,h,k,!0,B.t,k,A.aN(),w,k,k,k,k,k,2,s.bdE(new A.D(B.fv,A.aO(!1,p,!0,A.p(B.A,C.aZU(m==null?"\ud83d\udc64":A.fIm(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.ck,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aa,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.kW,k,B.a9I,k,k)
v=A.a([v,B.ae,t,B.Q,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bn,k,k,k,k,k,k,k,k,11.5,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aUz("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dMt(r,a0),r.d===B.wN),1),B.ad,A.E(i.aUz("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dMy(r,a0),r.d===B.a6w),1)],u),B.m,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.Q,new A.bM(B.a5,k,k,A.hs(D.bVV,D.fRj,new C.dMz(r,l.e,a0),A.fx(k,k,k,k,k,k,k,k,k,k,k,B.cQ,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cc)),k)],u))
v.push(B.W)
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uH(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.Y,!1,k,!0,B.t,k,A.aN(),l.f,k,k,k,k,k,2,i.aTW("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.aj,k,k,s,k,k,B.e1,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aa,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.W)
t=i.a.d.a
s=t?B.N:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.J((t?B.bu:B.bn).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.x3(r.a,!1)
v.push(A.aI(!1,B.a2,!0,q,A.aO(!1,p,!0,A.p(k,A.B(A.a([A.E(A.x(A.a([t,B.bF,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.i,0,B.p),1),D.bSD],u),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bg,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dMA(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.v(v,A.a([B.Q,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.W)
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.Y,!1,k,!0,B.t,k,A.aN(),l.r,k,k,k,k,k,2,i.aTV("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aa,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.ae)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b1U(r.b.length!==0,B.mM,new C.dMB(r,i,a0),new C.dMC(r,a0),"Upload from gallery","ID photo"))
v.push(i.b1U(r.c.length!==0,D.bLZ,new C.dMD(r,i,d,a0),new C.dME(r,a0),"Camera or gallery","Selfie"))
v.push(B.Q)
t=l.w
v.push(new Aq.a7Z("Signature (optional)",t,new C.dMF(a0),new C.dMu(a0,t),new C.dMv(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bu:B.bn
s=(i?B.bu:B.bn).j(0.28)
s=A.E(A.dT(E.aVe,new C.dMw(d),A.dj(k,k,k,k,k,k,k,k,k,t,k,k,B.rC,k,new A.b8(A.m(10),B.a0),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bo(B.cQ,k,k,k,B.c,k,B.rC,k,new A.b8(A.m(10),B.a0),k,k,k)
v.push(A.B(A.a([s,B.ad,A.E(A.bI(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vp,k,k,k),k,new C.dMx(r,w,d),t),1)],u),B.m,k,B.e,B.i,0,k,k))
return A.p(k,A.ch(A.x(v,B.ak,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aZ(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.rE,B.ji,k,k,360)},
$S:164}
C.dMr.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dMs.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dMt.prototype={
$0(){return this.b.$1(new C.dMq(this.a))},
$S:0}
C.dMq.prototype={
$0(){var w=this.a
w.d=B.wN
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dMy.prototype={
$0(){return this.b.$1(new C.dMp(this.a))},
$S:0}
C.dMp.prototype={
$0(){var w=this.a
w.d=B.a6w
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dMz.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dMA.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.x7(null,u.b,A.c3(2020,1,1,0,0,0,0,0),null,s,A.c3(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dMo(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dMo.prototype={
$0(){var w=this.b
return this.a.a=A.c3(w.gck(),w.gcg(),w.gcw(),0,0,0,0,0)},
$S:0}
C.dMB.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.PP(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dMn(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dMn.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dMC.prototype={
$0(){return this.b.$1(new C.dMm(this.a))},
$S:0}
C.dMm.prototype={
$0(){return this.a.b=""},
$S:0}
C.dMD.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e4:B.c
w=3
return A.b(A.bV(q,null,new C.dMk(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.PP(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dMl(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dMk.prototype={
$1(d){var w=null
return A.bn(!0,A.x(A.a([A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.aql,w,w,w,w,new C.dMe(d),!1,w,w,w,w,w,w,w,D.fHs,w,w,w),A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.aqj,w,w,w,w,new C.dMf(d),!1,w,w,w,w,w,w,w,D.fOs,w,w,w)],x.p),B.m,w,B.e,B.P,0,B.p),!0,!1,B.af,!0,!0)},
$S:27}
C.dMe.prototype={
$0(){A.a5(this.a,!1).O("camera")
return null},
$S:0}
C.dMf.prototype={
$0(){A.a5(this.a,!1).O("gallery")
return null},
$S:0}
C.dMl.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dME.prototype={
$0(){return this.b.$1(new C.dMj(this.a))},
$S:0}
C.dMj.prototype={
$0(){return this.a.c=""},
$S:0}
C.dMF.prototype={
$0(){return this.a.$1(new C.dMi())},
$S:0}
C.dMi.prototype={
$0(){},
$S:0}
C.dMu.prototype={
$0(){return this.a.$1(new C.dMh(this.b))},
$S:0}
C.dMh.prototype={
$0(){return B.d.aa(this.a)},
$S:0}
C.dMv.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ai8(u.a,null,null,new C.dMg(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dMg.prototype={
$4(d,e,f,g){this.a.$1(new C.dMd(this.b,d))},
$S:435}
C.dMd.prototype={
$0(){var w=this.a
B.d.aa(w)
B.d.v(w,this.b)},
$S:0}
C.dMw.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dMx.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.K(x.q).f.U(D.ffI)
return}if(w.a.d==null){w.c.K(x.q).f.U(D.fcB)
return}A.a5(w.c,!1).O(!0)},
$S:0}
C.dN0.prototype={
$3(d,e,f){return B.bJ},
$C:"$3",
$R:3,
$S:91}
C.dN1.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e4:B.c,n=A.m(14),m=A.J((p?B.bu:B.bn).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.av,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.B2(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bu:B.bn,r,r,r,r,r,r,r,r,13,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zh(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.zh(r).length>0?B.bB:B.cQ,r,r,r,r,r,r,r,r,12,r,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bn
t=(q?B.bu:B.bn).j(0.28)
s=x.p
return new A.d1(e,!1,A.as(A.aI(!1,B.a2,!0,r,A.p(r,A.x(A.a([p,B.Q,v,u,B.aB,A.B(A.a([A.E(A.dT(B.nO,new C.dMZ(d),A.dj(r,r,r,r,r,r,r,r,r,w,r,r,B.jV,r,new A.b8(A.m(10),B.a0),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ad,A.E(A.bI(D.fOS,r,new C.dN_(d),A.bo(B.cQ,r,r,r,B.c,r,B.jV,r,new A.b8(A.m(10),B.a0),r,r,r)),1)],s),B.m,r,B.e,B.i,0,r,r)],s),B.ak,r,B.e,B.P,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.C0,E.a_v,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:33}
C.dMZ.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dN_.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dMV.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dMW(r),p=r.a.d.a,o=p?B.e4:B.c,n=A.m(14),m=A.J((p?B.bu:B.bn).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a1,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.av,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.B2(l.c),s,s,s,s,s,s,D.fsG,s,s,s)],p),B.m,s,B.e,B.i,0,s,s)
w=A.iI((r.a.d.a?B.bu:B.bn).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a1n,"View receipt",new C.dMO(r,d,l))
u=l.x!=null
t=u?B.pi:B.qt
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bAb,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dMP(r,d,l)),q.$3$icon$label$onTap(B.Cc,"Edit",new C.dMQ(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mM,"View / download ID",new C.dMR(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bLY,"View / download selfie",new C.dMS(r,d,l)))
if(l.gaGQ())p.push(q.$3$icon$label$onTap(Ae.a2z,"View / download signature",new C.dMT(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bB,B.eb,"Delete",new C.dMU(r,d,l)))
p.push(B.au)
return A.bn(!0,new A.D(B.uf,A.p(s,A.x(p,B.m,s,B.e,B.P,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:27}
C.dMW.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.av
else w=d
return A.aO(!1,v,!0,new A.D(B.eS,A.B(A.a([A.X(e,w,v,v,v,20),B.bc,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1941}
C.dMO.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fTK(w,this.c)},
$S:0}
C.dMP.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.SA(this.c)},
$S:0}
C.dMQ.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.Dk(this.c)},
$S:0}
C.dMR.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bFi(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dMS.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bFi(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dMT.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fTP(w,this.c)},
$S:0}
C.dMU.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.PO(0,this.c)},
$S:0}
C.dN2.prototype={
$1(d){return d.x==null},
$S:250}
C.dN3.prototype={
$1(d){return d.x!=null},
$S:250}
C.dN4.prototype={
$2(d,e){return d+e.c},
$S:1942}
C.dN5.prototype={
$0(){return this.a.bBS()},
$S:0}
C.dMX.prototype={
$0(){return this.a.afN(this.b)},
$S:0}
C.fCJ.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fCK.prototype={
$0(){return B.d.gI(D.a3T)},
$S:z+77}
C.dcK.prototype={
$0(){var w=this.a
return w.m(new C.dcI(w,this.b))},
$S:0}
C.dcI.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dcJ.prototype={
$0(){},
$S:0}
C.dcL.prototype={
$0(){var w=this.a.gc0a()
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.fF5.prototype={
$1(d){return C.hgh(A.a2(d,x.N,x.z))},
$S:z+11}
C.fF6.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fF7.prototype={
$2(d,e){var w=A.ce(d.a,null),v=A.ce(e.a,null)
if(w!=null&&v!=null)return B.o.aN(w,v)
return d.d.aN(0,e.d)},
$S:z+83}
C.fSn.prototype={
$1(d){return d.ah()},
$S:z+12}
C.h_J.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fBX.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bQe.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f1(e,v)?v:null},
$S:1943}
C.fSW.prototype={
$1(d){var w=this
return new C.ZP(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.ddp.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ddo(w,d))},
$S:z+80}
C.ddo.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.ddd.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cL(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dda.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dcM.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dcN.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dde.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dcV.prototype={
$1(d){var w=null,v=A.Q(d).ax.a===B.J,u=v?B.e4:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bn,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ep(A.a([A.bN(!1,B.di,w,w,!0,w,w,w,new C.dcT(d),w,w),A.bI(B.xa,w,new C.dcU(d),A.bo(B.nc,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.dcT.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dcU.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dcW.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.E(w.r-1,-1,999)},
$S:0}
C.ddb.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.ddc.prototype={
$0(){return B.d.gI(D.zr)},
$S:z+14}
C.dcR.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyC(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Tb(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dcS.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcX.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Zn(v,u,J.ad(w.d),null)},
$S:z+40}
C.dcY.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.ddn.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aA(s,new C.Z4(r.y,r.gyC(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ddl(r),s,s,s,s,s,s,!1,B.a3)
else{w=e-1
v=J.r(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bbw(v,e,w,u,t,r.gbSh(),C.hvK(r.y.Q),r.gyC(0),s)
w=t}return A.cb(q,new C.ddm(r,e),new A.D(B.a_w,w,s))},
$S:1944}
C.ddm.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd2(t).ay){t=this.b
u=x.cy.a(B.d.gd2(u.f.f)).gv6(0)
w=t-(u==null?t:u)}else w=0
v=B.k.E(w,-1,0)
u=A.ds()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fJ(v*3.141592653589793*0.5)
return A.fz(B.a5,A.db(e,B.k.E(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.ddl.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aHX(B.qb,B.iX)},
$S:0}
C.dd7.prototype={
$0(){var w=this.a
return w.m(new C.dd6(w))},
$S:0}
C.dd6.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dd8.prototype={
$0(){var w=this.a.c
w.toString
A.a5(w,!1).O(null)
return null},
$S:0}
C.dcO.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.ke.j(0.5),r=x.p,q=A.a([D.fG3,B.ae],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ct(p.d)?"Write this book":"Write a new book"
q.push(p.Zw(d,B.e5,w,J.ct(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Zw(d,I.aoe,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cL(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.ct,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kF.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.ct,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kF.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Zw(d,X.apk,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Zw(d,B.qA,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Zw(d,B.qA,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eT(u,E.Br,A.bn(!0,new A.D(Ad.yt,A.x(q,B.E,u,B.e,B.P,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.alt,B.d8,u,new A.b8(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:49}
C.dd9.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.dd0.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cL(w.d)
return new C.ZR(v,J.cL(w.d),w.r+1,null)},
$S:z+44}
C.dd1.prototype={
$1(d){var w=null
return A.oC(!1,A.ep(w,w,w,E.Br,new A.jX(this.a,new C.dd_(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:325}
C.dd_.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a9n,B.oL,A.E(A.d(e,w,w,w,w,w,w,B.jp,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:746}
C.dd2.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dd3.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:200}
C.dd4.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dd5.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Bb(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.S0(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dcZ(s,t))
w=4
return A.b(s.lc(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dcZ.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.ddg.prototype={
$1(d){var w=null
return A.oC(!1,A.ep(w,w,w,E.Br,new A.jX(this.a,new C.ddf(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:325}
C.ddf.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a9n,B.oL,A.E(A.d(e,w,w,w,w,w,w,B.jp,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:746}
C.ddh.prototype={
$0(){return this.a.a=!1},
$S:51}
C.ddi.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:200}
C.ddj.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:200}
C.ddk.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Bb(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lc(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dcP.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bj8(B.qb,A4.Nf)},
$S:0}
C.dcQ.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aHX(B.qb,A4.Nf)},
$S:0}
C.dfa.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dfb.prototype={
$1(d){var w=this.a
return w.m(new C.df9(w))},
$S:9}
C.df9.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dfc.prototype={
$1(d){var w=this.a
return w.m(new C.df8(w))},
$S:9}
C.df8.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dfd.prototype={
$1(d){var w=this.a
return w.m(new C.df7(w))},
$S:9}
C.df7.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dfe.prototype={
$0(){var w=this.a
return w.m(new C.df6(w,this.b))},
$S:0}
C.df6.prototype={
$0(){var w=this.b
this.a.d.saY(0,w)
return w},
$S:0}
C.dff.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2h()
A.a5(this.b,!1).O(new A.bqm(w,v))},
$S:0}
C.ddE.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.ddD.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.ZN(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.ddI.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.ddH.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b9i(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hc,v,v,v)
return A.ep(A.a([A.bN(!1,B.di,v,v,!0,v,v,v,new C.ddF(d),v,v),A.bI(B.xa,v,new C.ddG(d),A.bo(B.nc,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Br,w,v,v,v,v,D.fEP,v)},
$S:19}
C.ddF.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.ddG.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.ddJ.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.ddK.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a4(s,t,w[u],t))
return A.ch(A.bY(B.bG,r,B.br,t,18,14),B.t,t,B.y,t,D.bB9,t,t,B.ah)},
$S:283}
C.ddC.prototype={
$0(){return this.a.Qz(0,this.b)},
$S:0}
C.ddB.prototype={
$0(){return this.a.Q1(0,this.b)},
$S:0}
C.cLZ.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cM_.prototype={
$0(){return B.d.gI(D.zr)},
$S:z+14}
C.cM0.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bS(0,new A.D(d,A.c4(w,new A.o(w,w,A.J(this.a.j(f),B.r,g),v,w,w,B.n),B.bh),w),0,0,0)},
$S:1946}
C.d4y.prototype={
$1(d){return this.a.m(new C.d4x(this.b,this.c))},
$S:9}
C.d4x.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d4X.prototype={
$1(d){return this.a.m(new C.d4K())},
$S:2}
C.d4K.prototype={
$0(){},
$S:0}
C.d4Y.prototype={
$1(d){return this.a.m(new C.d4J())},
$S:2}
C.d4J.prototype={
$0(){},
$S:0}
C.d4Z.prototype={
$0(){var w=this.a
return w.m(new C.d4I(w,this.b))},
$S:0}
C.d4I.prototype={
$0(){var w=this.a
return w.d=w.goe().FV(this.b.a)},
$S:0}
C.d5_.prototype={
$0(){var w=this.a
return w.m(new C.d4H(w,this.b))},
$S:0}
C.d4H.prototype={
$0(){var w=this.a
return w.d=w.goe().cKN(this.b)},
$S:0}
C.d50.prototype={
$1(d){return this.a.m(new C.d4G())},
$S:2}
C.d4G.prototype={
$0(){},
$S:0}
C.d51.prototype={
$0(){var w=this.a
return w.m(new C.d4F(w,this.b))},
$S:0}
C.d4F.prototype={
$0(){var w=this.a
return w.d=w.goe().cKS(this.b.a)},
$S:0}
C.d52.prototype={
$1(d){var w=this.a
return w.m(new C.d4S(w,d))},
$S:6}
C.d4S.prototype={
$0(){var w=this.a
return w.d=w.goe().cLM(this.b)},
$S:0}
C.d53.prototype={
$1(d){var w=this.a
return w.d=w.goe().aEZ(d)},
$S:2}
C.d54.prototype={
$1(d){var w=this.a
return w.d=w.goe().cKV(d)},
$S:2}
C.d56.prototype={
$1(d){var w=this.a
return w.d=w.goe().cLK(d)},
$S:2}
C.d57.prototype={
$1(d){var w=this.a
return w.m(new C.d4R(w,d))},
$S:9}
C.d4R.prototype={
$0(){var w=this.a
return w.d=w.goe().cLB(this.b)},
$S:0}
C.d58.prototype={
$0(){var w=this.a,v=w.goe(),u=B.a.i(w.gyC(0).a.a),t=B.a.i(w.gaC6().a.a)
u=v.bdV(B.a.i(w.garQ().a.a),t,u)
A.a5(this.b,!1).O(u)
return null},
$S:0}
C.bQo.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:8}
C.bQi.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bQh(w,d))},
$S:11}
C.bQh.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a4(0)}},
$S:0}
C.bQr.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bQj.prototype={
$0(){var w=this.a
w.Q=D.b_2
w.adv(1)
w.r.x=null},
$S:0}
C.bQk.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b_2)return
w=new A.e6()
w.cX(u.as*13+u.a.e)
v=u.r
v.Q=3+w.ap(3)
v.z=D.d0e[w.ap(6)]
v.as=u.f.a+2.6},
$S:0}
C.bQn.prototype={
$0(){var w=this.a
w.Q=D.ac_
w.adv(2)
w.r.z=null},
$S:0}
C.bQm.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.htb
t.adv(3)
w=t.r
w.d=s
w.x="I say: "+t.gC5()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.ap(3)
w.z=s?D.d6E[v.ap(4)]:D.drs[v.ap(3)]
w.as=t.a+2.8},
$S:0}
C.bQp.prototype={
$0(){var w=this.a
w.Q=D.b_3
w.CW=this.b
w.cy=1
w.adv(4)
w.r.f=w.f.a+5},
$S:0}
C.bQq.prototype={
$0(){},
$S:0}
C.bQl.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).ik()},
$S:0}
C.bQf.prototype={
$0(){return this.a.KL(this.b)},
$S:0}
C.bQg.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).ik()},
$S:0}
C.bRV.prototype={
$0(){var w=this
return w.a.QS(w.b,0,w.c,w.d)},
$S:0}
C.bRW.prototype={
$0(){var w=this
return w.a.QS(w.b,3,w.c,w.d)},
$S:0}
C.bRX.prototype={
$0(){var w=this
return w.a.QS(w.b,1,w.c,w.d)},
$S:0}
C.bRY.prototype={
$0(){var w=this
return w.a.bRJ(w.b,w.c,w.d)},
$S:0}
C.bRZ.prototype={
$0(){var w=this
return w.a.QS(w.b,4,w.c,w.d)},
$S:0}
C.bS_.prototype={
$0(){var w=this
return w.a.QS(w.b,2,w.c,w.d)},
$S:0}
C.bS0.prototype={
$0(){var w=this
return w.a.QS(w.b,5,w.c,w.d)},
$S:0}
C.bS1.prototype={
$2(d,e){return B.k.aN(d.a,e.a)},
$S:747}
C.bRU.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a51[d],p=q.a.a7(0,new A.t(0,-q.b*1.2*124)),o=A.fy(r,r,3,r,A.cS(r,r,r,r,r,r,r,r,r,D.fjM,e),B.a4,B.bX,r,B.dA,B.bV)
o.o_(130)
w=o.b.a.c
w=p.aE(0,new A.t(0,w.gba(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.br(A.bK(w,v.gba(v)+12,u+18),B.hU)
u=this.a
v=t.eP(B.dC)
w=$.S()
s=A.I()
s.r=B.dm.gp(0)
u.az(v,s)
s=A.I()
s.r=D.q5.gp(0)
u.az(t,s)
w=new A.aF(w.r,B.ag,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.D(new A.aY(s-5,v))
w.D(new A.aq(s+1,p.b+1))
w.D(new A.aq(s+6,v))
w.D(new A.bt())
v=A.I()
v.r=D.q5.gp(0)
u.aI(w,v)
o.a3(u,new A.t(t.a+9,t.b+6))},
$S:748}
C.bQF.prototype={
$2(d,e){return B.o.aN(d.Q,e.Q)},
$S:z+7}
C.bQG.prototype={
$2(d,e){var w=this.a,v=B.o.aN(w.am0(d),w.am0(e))
if(v!==0)return v
return B.o.aN(d.Q,e.Q)},
$S:z+7}
C.fqB.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h_A.prototype={
$2(d,e){if(e!=null)J.cc(this.a.c3(0,d,new C.h_B()),e)},
$S:z+66}
C.h_B.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.h_C.prototype={
$1(d){return d!==this.a},
$S:3}
C.h_D.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h_E.prototype={
$1(d){return d!==this.a&&!B.d.b3(this.b,new C.h_z(this.c,d))},
$S:3}
C.h_z.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h_F.prototype={
$1(d){return d!==this.a},
$S:3}
C.h_G.prototype={
$1(d){return d!==this.a},
$S:3}
C.h_H.prototype={
$1(d){return d!==this.a&&!B.d.b3(this.b,new C.h_y(this.c,d))},
$S:3}
C.h_y.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fDf.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fRq.prototype={
$1(d){return d.Q},
$S:z+15}
C.fRr.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fzH.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fG0.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bLE.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h0_.prototype={
$2(d,e){return B.o.aN(C.hs6(d),C.hs6(e))},
$S:210}
C.h00.prototype={
$1(d){return d!==this.a},
$S:3}
C.fRW.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bJO.prototype={
$0(){var w=this.a
w.ch=!0
w.b7x()},
$S:0}
C.bJJ.prototype={
$0(){},
$S:0}
C.bJP.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bJH.prototype={
$0(){},
$S:0}
C.bJI.prototype={
$0(){},
$S:0}
C.bJN.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b4(u,u,u,new C.bc9(t,u),B.aw),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.m(14)
s.push(A.ap(u,A.p(u,A.d(t.dy,u,u,u,u,u,u,D.fri,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.n),u,u,u,u,B.bT,u,u,u),u,u,14,14,6,u))}return A.aA(B.c6,new A.an(B.a_,u,B.ab,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bJK(t,e),u,u,u,u,u,u,u,new C.bJL(t,e),u,u,u,u,u,u,u,u,u,new C.bJM(t,e),u,u,u,u,!1,B.a3)},
$S:36}
C.bJK.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:18}
C.bJM.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:22}
C.bJL.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:18}
C.bJG.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).ik()},
$S:0}
C.cnG.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cnH.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cnF(w))},
$S:0}
C.cnF.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cnI.prototype={
$0(){var w=this,v=w.a
v.giY()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cnJ.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cnK.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cnL.prototype={
$0(){},
$S:0}
C.cnM.prototype={
$0(){var w=this.a
w.z=w.X4(++w.e)
w.Q=A.bZ(w.gkO()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cnC.prototype={
$0(){return A.a5(this.a,!1).ik()},
$S:0}
C.cnD.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.giY().length,e=i/2,d=new C.cnE(i,f,h),a0=g.as,a1=A.a7(a0).k("bd<2>")
a0=A.C(new A.bd(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.cb(new A.h8(a0),new C.cnx(g,new A.t(e,56),f,d),j),0,0,0)
a1=this.b
w=g.giY().length!==0&&!B.d.t(g.giY(),-1)
v=x.p
e=A.a([a0,A.ap(j,new C.Q8(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cN(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.Mm(new C.cny(g,u),new C.cnz(g,u),new C.cnA(g,u),j,j,new A.bR("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ap(j,A.d(a1,j,j,j,j,j,j,A.l(j,j,B.a.t(a1,"not a child")?B.fb:B.be,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.giY().length!==0&&!B.d.t(g.giY(),-1)){a0=g.e+1>=g.gkO().length?"See my result":"Next family"
g=A.as(C.ul(a0,g.gq9(g),B.cI,B.jB,D.fr),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.X4(0):s).length))break
if(!B.d.t(g.giY(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.X4(0)
o=s}else o=s
n=s[u]
n=A.ee(B.A,new C.Q8(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.X4(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.qX(new A.bq(0,p,t),new C.cnB(),new S.DX(u,j,new C.Q8(l.b,k,62,!1,j),new A.kB(0.25,new C.Q8(m.b,k,62,!1,j),j),new A.k6(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a2,j,j),B.I,S.hvF(),!0,!0,j,j,j,j,j,j,!1,B.iH,j,new A.bR("chip-"+r,a0),w),B.b5,B.iY,j,new A.bR("t"+r+"-"+q,a0),v))}++u}g=A.bY(B.fI,a1,B.br,j,6,8)}e.push(A.ap(0,g,j,j,0,0,j,j))
return new A.an(B.a_,j,B.ab,B.t,e,j)},
$S:66}
C.cnE.prototype={
$1(d){return new A.t(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:735}
C.cnx.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.giY().length!==0&&!B.d.t(t.giY(),-1)
return A.b4(p,p,p,new C.bbF(q.b,o,v,w,p),B.aw)},
$S:59}
C.cnz.prototype={
$1(d){return this.a.giY()[this.b]===-1},
$S:z+30}
C.cnA.prototype={
$1(d){return this.a.cOD(this.b,d.a)},
$S:z+31}
C.cny.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.giY()[t]!==-1,r=A.m(18),q=e.length!==0?B.cI.j(0.3):B.L
if(s)w=v
else w=A.J(e.length!==0?B.cI:B.jQ,B.r,2)
u=s?A.lx(new C.cnw(),A.as(new C.Q8(u.gaEr()[u.giY()[t]].b,u.gaEr()[u.giY()[t]].a,62,!1,v),v,v,v),B.lv,B.iY,v,v,new A.bq(0.3,1,x.X),x.i):D.b9R
return A.cY(v,u,v,v,B.b5,new A.o(q,v,w,r,v,v,B.n),B.a2,v,100,v,v,v,v,v,88)},
$S:1949}
C.cnw.prototype={
$3(d,e,f){return A.ee(B.A,f,e,null,null)},
$S:112}
C.cnB.prototype={
$3(d,e,f){return A.dR(f,new A.t(Math.sin(e*24)*8*(1-e),0))},
$S:112}
C.cN2.prototype={
$1(d){return d>=1},
$S:120}
C.cCA.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkO()[w.e].d.length)w.m(new C.cCz(w))},
$S:11}
C.cCz.prototype={
$0(){return this.a.f++},
$S:0}
C.cCI.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cCJ.prototype={
$0(){var w=this.a,v=this.b
w.z.M(0,v)
w.Q=v},
$S:0}
C.cCK.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cCH(w))},
$S:0}
C.cCH.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cCL.prototype={
$0(){return this.a.f++},
$S:0}
C.cCM.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cCN.prototype={
$0(){},
$S:0}
C.cCO.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.aa(0)
w.as=!1
w.ay=0},
$S:0}
C.cCC.prototype={
$0(){return A.a5(this.a,!1).ik()},
$S:0}
C.cCD.prototype={
$3(d,e,f){var w=null
return A.lx(new C.cCB(this.a,e),w,B.b5,B.hy,w,w,new A.bq(w,this.b,x.X),x.i)},
$S:1950}
C.cCB.prototype={
$3(d,e,f){var w,v,u=null,t=this.a,s=B.cI.j(t.as?0.6:0.15)
s=A.a([new A.ac(0,B.G,s,B.I,t.as?40:18)],x.V)
w=B.w.j(e)
v=this.b
v=A.TK(v,v,B.Vu)
return A.p(u,A.hV(new A.Bm(new A.xt(w,B.Lp,u,B.Xu),H.bW8(A.b4(u,u,u,new C.aAQ(t.gkO()[t.e].c,t.as,u),B.aw),v),u),B.ap),B.f,u,u,new A.o(u,u,u,u,s,u,B.a6),u,190,u,u,u,u,u,190)},
$S:1951}
C.cCE.prototype={
$3(d,e,f){return A.db(A.dR(f,new A.t(0,14*(1-e))),e)},
$S:100}
C.cCF.prototype={
$3(d,e,f){return A.dR(f,new A.t(Math.sin(e*22)*8*(1-e),0))},
$S:112}
C.cCG.prototype={
$0(){return this.a.boq(this.b)},
$S:0}
C.f3k.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.amx$)
v.amx$=w
v.pZ$.sp(0,w)
v.aqc(u)},
$S:8}
C.fdq.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a4(0)
w.a.$0()},
$S:11}
C.bRq.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bRp())},
$S:0}
C.bRp.prototype={
$0(){},
$S:0}
C.bRn.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bRl.prototype={
$0(){},
$S:0}
C.bRm.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMA()
w=s+1>=r.length?3:5
break
case 3:q=C.bFz(p.gap1(0),0,r.length)
p.m(new C.bRi(p,q))
o=p
w=6
return A.b(C.Bw(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.Bx(s.d,s.c.a,"school",p.gap1(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bRj())
w=4
break
case 5:p.m(new C.bRk(p))
p.gqg().VD(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bRi.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bRj.prototype={
$0(){},
$S:0}
C.bRk.prototype={
$0(){return this.a.x++},
$S:0}
C.bRo.prototype={
$0(){return this.a.KL(this.b)},
$S:0}
C.bRh.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).ik()},
$S:0}
C.f3l.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.t(t,s),q=v.b,p=v.d,o=p?C.hvP(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.DP
C.RY(q,D.eiZ,0,0.2,-0.6,-0.2,null,w,D.ehK,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a7(0,new A.t(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.S()
p=A.I()
p.r=D.FS.gp(0)
p.c=3
p.d=B.by
q.bo(new A.t(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f3m.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.RY(this.a,D.ei3,0,u,0.7,-0.5,null,null,D.Jf,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f3n.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.RY(this.a,D.ejL,0,0,0.8,-0.5,null,null,D.Jf,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f3o.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.RY(w.b,D.eiT,0,v,-0.8,-0.5,null,null,D.Jf,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f3p.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.t(34,-122+Math.sin(w*5)*5)
else v=v?D.eiX:D.DP
C.RY(p,D.ein,0,t,0,-0.6,null,v,D.Jf,3,0,s,1.3,u,0,w,0)
q=q.c9V(new A.t(222,455),9)
$.S()
w=A.I()
w.r=B.cI.gp(0)
p.aI(q,w)},
$S:0}
C.f3q.prototype={
$2(d,e){return B.k.aN(d.a,e.a)},
$S:747}
C.bR3.prototype={
$2(d,e){return d+e},
$S:67}
C.bRe.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bRf.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bRg.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.giY()[u.b]=s
t.giY()[u.d]=t.y
w=t.as
v=t.pZ$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bRa.prototype={
$1(d){return d},
$S:117}
C.bR9.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.pZ$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bRb.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bRc.prototype={
$0(){},
$S:0}
C.bRd.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.Fn(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.cp(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.aa(0)},
$S:0}
C.bR5.prototype={
$0(){return A.a5(this.a,!1).ik()},
$S:0}
C.bR6.prototype={
$2(d,e){var w=this.a
w=w.gkO()[w.f].e
return B.o.aN(w[d],w[e])},
$S:67}
C.bR7.prototype={
$2(d,e){var w=null,v=C.h7L(new A.av(A.aR(1/0,e.a,e.b),A.aR(1/0,e.c,e.d))),u=this.a
return A.aA(B.c6,new A.er(A.b4(w,w,w,new C.biQ(u,u.pZ$),B.aw),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bR4(u,v),w,w,w,w,!1,B.a3)},
$S:36}
C.bR4.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.giY().length
u=B.o.E(B.k.bf((t.a-s.a)/r/450*v),0,v-1)
w.cZg(w.giY()[u])}},
$S:22}
C.bR8.prototype={
$1(d){var w=this.a
return w.gkO()[w.f].d[d]},
$S:72}
C.dol.prototype={
$2(d,e){return 0},
$S:67}
C.bQQ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bQP())},
$S:0}
C.bQP.prototype={
$0(){},
$S:0}
C.bQO.prototype={
$0(){},
$S:0}
C.bQI.prototype={
$0(){},
$S:0}
C.bQJ.prototype={
$0(){},
$S:0}
C.bQN.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.AI},
$S:0}
C.bQM.prototype={
$1(d){var w=null,v=this.a.gqg(),u=A.d(d,w,w,w,w,w,w,D.aTO,w,w,w),t=v.gbkT(0)
return A.aA(B.c6,A.x(A.a([u,B.bF,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aU2,w,w,w)],x.p),B.E,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbqI(v),w,w,w,w,w,w,!1,B.a3)},
$S:136}
C.bQK.prototype={
$0(){return this.a.KL(this.b)},
$S:0}
C.bQL.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).ik()},
$S:0}
C.bQH.prototype={
$0(){return A.a5(this.a,!1).ik()},
$S:0}
C.dZ8.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dZ9.prototype={
$1(d){return this.a},
$S:39}
C.dZa.prototype={
$0(){var w=this.a
return w.d=w.gSB().bdo(this.b)},
$S:0}
C.dZ6.prototype={
$1(d){return new C.Tc(this.a,null)},
$S:z+32}
C.dZ7.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.dZ5.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hc,w,w,w)
return A.ep(A.a([A.bN(!1,E.aVo,w,w,!0,w,w,w,new C.dZ3(d),w,w),A.bN(!1,D.fMl,w,w,!0,w,w,w,new C.dZ4(d),w,w)],x.p),w,w,D.fr,v,w,w,w,w,D.fz0,w)},
$S:19}
C.dZ3.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dZ4.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dZ2.prototype={
$0(){var w=null,v=this.a.c.K(x.q).f,u=this.b
return v.U(A.b3(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dZb.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:14}
C.dZc.prototype={
$0(){var w=this.a,v=this.b,u=C.bDi(v,10,w.r,!1)
return w.ue(C.hgi(w.a.d,"kahoot",u,w.gb56(),v.b,"Family Kahoot",v.a))},
$S:0}
C.dZd.prototype={
$0(){var w=this.a
return w.ue(new C.alb(this.b,w.a.d,w.r,null))},
$S:0}
C.dZe.prototype={
$0(){var w=this.a
return w.ue(new C.ajo(this.b,w.a.d,w.r,null))},
$S:0}
C.dZh.prototype={
$0(){var w=this.a
return w.ue(new C.au4(this.b,w.a.d,w.r,null))},
$S:0}
C.dZi.prototype={
$0(){var w=this.a
return w.ue(new C.ay0(this.b,w.a.d,w.r,null))},
$S:0}
C.dZj.prototype={
$0(){var w=this.a
return w.ue(new C.ale(this.b,w.a.d,w.r,null))},
$S:0}
C.dZk.prototype={
$0(){var w=this.a
return w.ue(new C.ali(this.b,w.a.d,w.r,null))},
$S:0}
C.dZl.prototype={
$0(){var w=this.a
return w.ue(new C.alk(this.b,w.a.d,w.r,null))},
$S:0}
C.dZm.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.cZA()
return v.ue(C.hgi(v.a.d,"creator_"+u.a,w,v.gb56(),"A game by the family",t,this.c.a))},
$S:0}
C.dZn.prototype={
$0(){return this.a.Oz(this.b)},
$S:0}
C.dZo.prototype={
$0(){return this.a.Xw(0,this.b)},
$S:0}
C.dZf.prototype={
$0(){return this.a.Oz(null)},
$S:0}
C.dZg.prototype={
$0(){return this.a.K(x.q).f.U(D.fcH)},
$S:0}
C.bR1.prototype={
$0(){var w=this.a
w.d=D.aZu
w.z=3},
$S:0}
C.bR2.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a4(0)
w.aOK()}else w.m(new C.bR0(w))},
$S:11}
C.bR0.prototype={
$0(){return this.a.z--},
$S:0}
C.bQS.prototype={
$0(){var w=this.a
w.d=D.abE
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bQT.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bQR(w))
if(w.as<=0){d.a4(0)
w.b52(-1)}},
$S:11}
C.bQR.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bQY.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.W7},
$S:0}
C.bQZ.prototype={
$0(){return this.a.e++},
$S:0}
C.bQV.prototype={
$0(){var w=this.a
w.d=D.aZv
w.ay=this.b},
$S:0}
C.bQW.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bR_.prototype={
$2(d,e){return B.o.aN(e.b,d.b)},
$S:1952}
C.bQX.prototype={
$0(){return this.a.KL(this.b)},
$S:0}
C.bQU.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).ik()},
$S:0}
C.bQs.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ax()
s=A.a([new A.au(new A.ba(s,B.b4,B.aO),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.L)(t),++v){u=t[v]
s.push(new A.au(new A.ba(u,B.b4,B.aO),r))}return s},
$S:1953}
C.bQt.prototype={
$0(){return this.a.gCK().c.push(C.h1A(null,0,20,""))},
$S:0}
C.bQD.prototype={
$1(d){var w=null
return A.bs(w,new A.b5(4,A.m(12),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dr,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.V2,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:251}
C.bQC.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gCK().c,m=this.b,l=n[m],k=o.ccA(l),j=B.c.j(0.06),i=A.m(18),h=A.J(B.aX,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.Kp,p,p,p),B.b2],g)
if(n.length>1)f.push(A.aH(p,p,p,p,B.aq6,p,p,p,new C.bQx(o,m),p,p,p,p,p,p))
n=J.a6(k)
m=this.c
f=A.a([A.B(f,B.m,p,B.e,B.i,0,p,p),A.aM(p,B.Y,!1,p,!0,B.t,p,A.aN(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.aj,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bQy(l),p,p,p,!1,p,p,!1,p,!0,p,B.aa,p,p,p,p,p,p,p,p,p,p,p,B.df,!0,B.a4,p,B.an,p,p,p,p),B.Q],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aBY[v]
t=D.aBF[v]
s=v+1
f.push(new A.D(B.eI,new A.ca(B.aM,B.e,B.i,B.m,p,B.p,p,0,A.a([new A.y(u,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p),B.ad,new A.by(1,B.ba,A.aM(p,B.Y,!1,p,!0,B.t,p,A.aN(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.aj,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bQz(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.aa,p,p,p,p,p,p,p,p,p,p,p,B.df,!0,B.a4,p,B.an,p,p,p,p),p),new Au.OQ(v,l.c,new C.bQA(o,l),p,!1,D.ly,p,p,p,p,p,!1,!1,p,K.aZT,p,p,p,p,p,w)],g),p),p))}f.push(D.fEu)
f.push(B.am)
n=A.a([D.fy5,B.ad],g)
for(r=0;r<3;++r){q=D.caF[r]
n.push(new A.D(B.fv,A.ju(p,p,p,new A.y(""+q+"s",p,p,p,p,p,p,p,p,p,p,p),p,new C.bQB(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.B(n,B.m,p,B.e,B.i,0,p,p))
return A.p(p,A.x(f,B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.kK,B.bg,p,p,p)},
$S:149}
C.bQx.prototype={
$0(){var w=this.a
return w.m(new C.bQw(w,this.b))},
$S:0}
C.bQw.prototype={
$0(){return B.d.cz(this.a.gCK().c,this.b)},
$S:0}
C.bQy.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bQz.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bQA.prototype={
$1(d){return this.a.m(new C.bQv(this.b,d))},
$S:159}
C.bQv.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bQB.prototype={
$1(d){return this.a.m(new C.bQu(this.b,this.c))},
$S:9}
C.bQu.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e_O.prototype={
$0(){var w=this.a
w.w9()
w.a.bv()
w.a.qa()},
$S:0}
C.e_N.prototype={
$0(){var w=this.a
w.w9()
w.a.bv()
w.a.qa()},
$S:0}
C.e_Q.prototype={
$0(){var w=this,v=w.b
if(J.cL(v)||J.ct(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e_R.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e_S.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e_M.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e_P.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e_U.prototype={
$0(){this.a.OV()
return null},
$S:0}
C.e_T.prototype={
$0(){return this.a.EJ(this.b)},
$S:0}
C.e_e.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bN(!1,B.di,w,w,!0,w,w,w,new C.e_c(d),w,w),r=A.bo(B.bP,w,w,w,w,w,w,w,w,w,w,w)
return A.ep(A.a([s,A.bI(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e_d(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.e_c.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.e_d.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.e_f.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cLg(this.b)},
$S:0}
C.e_9.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aUa(w.b,w.c,w.d)},
$S:8}
C.dZB.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.dZC.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dZT.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.GU(t.a.c),$async$$0)
case 2:s=r.p7(q.dJ(e,new C.dZR(t)))
if(s!=null&&t.c!=null)t.m(new C.dZS(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dZR.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.dZS.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dZU.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.dZV.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e_8.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cM3(C.hvV(w),w)},
$S:0}
C.dZQ.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.Vy(u,w,C.aQ7(u,w),new C.dZP(v),null)},
$S:z+37}
C.dZP.prototype={
$1(d){return this.bmf(d)},
bmf(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.dZO(s,d))
w=3
return A.b(s.u9(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:491}
C.dZO.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bdo(this.b)},
$S:0}
C.e_5.prototype={
$1(d){return d.as},
$S:z+1}
C.e_6.prototype={
$1(d){var w=this
return new A.e2(new C.e_4(w.a,w.b,w.c,w.d,w.e),null)},
$S:21}
C.e_4.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.e4:B.c,h=A.m(26),g=A.J(B.bP.j(0.5),B.r,1.5),f=A.p(k,D.bQP,B.f,k,k,new A.o(B.bP.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a1,k,k,k,A.l(k,k,j?B.bu:B.bn,k,k,k,k,k,k,k,k,12.5,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.i,0,B.p),1)
f=A.B(A.a([f,B.bc,a0,A.aH(k,k,k,k,A.X(B.cx,j?B.bu:B.bn,k,k,k,k),k,k,k,new C.dZZ(a1),k,k,k,k,k,k)],w),B.m,k,B.e,B.i,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.L)(v),++s){r=v[s]
q=t.a===r?B.bP:B.bP.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ay(B.bP,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bP
a0.push(A.aA(k,A.cY(k,new A.y(m,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k),k,k,B.b5,new A.o(q,k,new A.bH(n,n,n,n),new A.bh(p,p,p,p),k,k,B.n),B.h4,k,k,k,k,B.BU,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e__(t,a2,r),k,k,k,k,k,k,!1,B.a3))}a0=A.bY(B.bG,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c1K,new A.D(D.bBy,f,k),new A.D(D.bBp,e,k),new A.D(B.rE,a0,k),new A.D(X.alu,A.d(v,k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bn,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(A3.anY,j?B.bu:B.bn,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bBr,A.B(A.a([a0,B.as,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.b8i(k,B.bP,k,k,!1,B.y,k,k,k,k,k,k,new C.e_0(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.m,k,B.e,B.i,0,k,k),k))}f.push(B.aB)
j=A.m(20)
e=A.a([new A.ac(0,B.G,B.aD.j(0.35),B.j4,12)],x.V)
f.push(A.aA(k,A.p(k,A.B(A.a([D.fyr,B.bc,D.bFJ,D.bRv],w),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.c5t,B.n),k,k,k,B.hO,B.bD,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e_1(t,a1),k,k,k,k,k,k,!1,B.a3))
f.push(new A.D(B.w9,A.B(A.a([A.E(A.dT(B.di,new C.e_2(a1),k),1),B.as,A.E(A.bI(M.aVO,k,new C.e_3(t,a1),A.bo(B.bP,k,k,k,k,k,B.cm,k,k,k,k,k)),1)],w),B.m,k,B.e,B.i,0,k,k),k))
return A.bn(!0,A.p(k,A.ch(A.x(f,B.E,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.ap,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.BQ,k,k,k,k),!0,!1,B.af,!0,!0)},
$S:86}
C.dZZ.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.e__.prototype={
$0(){return this.b.$1(new C.dZY(this.a,this.c))},
$S:0}
C.dZY.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e_0.prototype={
$1(d){var w=this.a
w.m(new C.dZW(w,d))
this.b.$1(new C.dZX())},
$S:9}
C.dZW.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dZX.prototype={
$0(){},
$S:0}
C.e_1.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).O(new A.aGS(!0,w))
return null},
$S:0}
C.e_2.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.e_3.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).O(new A.aGS(!1,w))
return null},
$S:0}
C.e_7.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cLR(this.b.b)
w.r.aa(0)},
$S:0}
C.dZp.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aig(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hpm(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.dZq.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aEW(w)},
$S:0}
C.e_h.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.adA(this.b,w,this.c,null)},
$S:z+39}
C.e_b.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e4:B.c,t=A.m(20),s=A.X(B.lJ,B.aW,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bn,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ae,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.m,w,B.e,B.P,0,B.p)
return A.ep(A.a([A.bI(D.fQ3,w,new C.e_a(d),A.bo(B.aW,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.b8(t,B.a0),r,w)},
$S:19}
C.e_a.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dZr.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dZs.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dZt.prototype={
$1(d){return d.a},
$S:z+8}
C.dZu.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.L)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hW(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aEW(w)},
$S:0}
C.dZy.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aig(q)
w=A.T(q).k("Z<1>")
q=A.C(new A.Z(q,new C.dZw(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hpm(v.e,null,r,v.f,v.r,new C.dZx(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.dZx.prototype={
$0(){return this.a.aaH(this.b)},
$S:0}
C.dZw.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dZz.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("N<1,hW>")
w=A.C(new A.N(w,new C.dZv(this.b),v),v.k("ak.E"))
u.d=t.aEW(w)},
$S:0}
C.dZv.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e_g.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dZL.prototype={
$1(d){return d.length!==0},
$S:3}
C.dZM.prototype={
$1(d){var w=this
return new A.e2(new C.dZK(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dZK.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e4:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.av,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.N(o,new C.dZG(u,e,o),A.T(o).k("N<1,v>")))
p.push(B.Q)
u=w.d
p.push(A.aM(v,B.Y,!1,v,!0,B.t,v,A.aN(),u,v,v,v,v,v,2,A.bs(v,new A.b5(4,A.m(12),B.dk),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.aj,v,v,v,v,v,B.mo,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.aa,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.an,v,v,v,v))
p=A.x(p,B.ak,v,B.e,B.P,0,B.p)
t=w.a
return A.ep(A.a([A.bN(!1,B.di,v,v,!0,v,v,v,new C.dZH(d),v,v),A.bI(B.KA,v,new C.dZI(t,u,o,e),A.bo(B.bP,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.fCS,v,new C.dZJ(t,u,o,d),A.bo(B.aW,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a4(360,v,p,v),v,v,v,v,r,v)},
$S:177}
C.dZG.prototype={
$1(d){var w=null
return A.dG(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bZz,w,w,w,new C.dZF(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1954}
C.dZF.prototype={
$0(){return this.a.$1(new C.dZD(this.b,this.c))},
$S:0}
C.dZD.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dZH.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dZI.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dZE(w.c,u))
v.bP(0,B.cb)}},
$S:0}
C.dZE.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dZJ.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a5(w.d,!1).O(!0)},
$S:0}
C.dZN.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cMv(this.b,D.ul,C.GS(v,w.a.c))},
$S:0}
C.e_o.prototype={
$1(d){return d.as},
$S:z+1}
C.e_p.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iX(this.b,w)},
$S:0}
C.e_q.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.ikV(v)
return w.Wn(v==null?null:v.a)},
$S:0}
C.e_r.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hXD(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aR(1/0,e.a,e.b)
s=A.aR(1/0,e.c,e.d)
l.ctW(new A.av(u,t),v.gbjZ(),new A.av(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cZa:D.cXn
q=A.J(s?B.dr:D.bhw,B.r,1)
p=A.m(22)
o=A.bS(0,A.b4(m,m,m,new C.beW(s,m),B.aw),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bx(p,new A.an(B.a_,m,B.ab,B.t,A.a([o,A.bS(0,A.uO(new A.P(n,n,n,n),new A.a4(u,t,new C.bfR(l.d,v,l.f,w,new C.e_k(l),l.gcdM(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ap(10,new C.bxC(s,new C.e_l(l,e),new C.e_m(l,e),new C.e_n(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.f,m,m,new A.o(m,m,q,k,m,new A.a9(B.b0,B.b6,B.x,r,m,m),B.n),m,m,m,A_.akB,m,m,m,m)},
$S:229}
C.e_k.prototype={
$1(d){var w=this.a
w.m(new C.e_i(w,d))},
$S:2}
C.e_i.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.M(0,v)},
$S:0}
C.e_l.prototype={
$0(){var w=this.b
return this.a.bbC(1.25,new A.av(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.e_m.prototype={
$0(){var w=this.b
return this.a.bbC(0.8,new A.av(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.e_n.prototype={
$0(){var w=this,v=w.b
return w.a.aUa(new A.av(A.aR(1/0,v.a,v.b),A.aR(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbjZ())},
$S:0}
C.e_s.prototype={
$0(){var w=this.a
return w.m(new C.e_j(w))},
$S:0}
C.e_j.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dZA.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fJ(new A.fD(s.c)),$async$$0)
case 2:t.y5("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ddO.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ap(w,new C.bjH(u,C.hAa(v.c,u),new C.ddN(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.ddN.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.ddP.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ap(w,new C.bn0(d.d,d.c,u.f.t(0,d.a),new C.ddM(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.ddM.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fCN.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.p7(new A.cO(new A.Z(v,new C.fCO(d),w.k("Z<1>")),new C.fCP(),w.k("cO<1,n>")))},
$S:z+19}
C.fCO.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fCP.prototype={
$1(d){return d.a},
$S:z+8}
C.fCL.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fCM.prototype={
$1(d){return d.b},
$S:z+8}
C.fCS.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.p7(new A.cO(new A.Z(v,new C.fCT(d),w.k("Z<1>")),new C.fCU(),w.k("cO<1,n>")))},
$S:z+19}
C.fCT.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fCU.prototype={
$1(d){return d.a},
$S:z+8}
C.fCQ.prototype={
$1(d){var w,v=A.eD([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.aj(0,w)&&v.M(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fCR.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.ddR.prototype={
$0(){return this.a},
$S:z+46}
C.de7.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.aj(0,d)},
$S:266}
C.de_.prototype={
$2(d,e){var w=this.a.c3(0,d,new C.de0()),v=J.a6(w)
if(!v.t(w,e))v.M(w,e)},
$S:115}
C.de0.prototype={
$0(){return A.a([],x.s)},
$S:749}
C.ddZ.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f1(w,e)
return w===!0},
$S:331}
C.ddS.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.ddY.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.ddX.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.M(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aW(v==null?D.D8:v)
u=1
while(v.C())u+=s.$2(v.gS(v).a,e)
v=s.b.h(0,d)
v=J.aW(v==null?B.Y:v)
while(v.C()){t=v.gS(v)
if(e.t(0,t))continue
e.M(0,t)
t=w.h(0,t)
t=J.aW(t==null?D.D8:t)
while(t.C())u+=s.$2(t.gS(t).a,e)}return u},
$S:1956}
C.ddT.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.de1.prototype={
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
t=J.aW(t==null?D.D8:t)
while(t.C()){r=t.gS(t)
if(r.a!==a9&&!B.d.b3(w,new C.de2(r)))w.push(r)}}B.d.bs(w,new C.de3(a8))
B.d.aZ(w,new C.de4())
q=C.hXC(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.ePM],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bq6(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1957}
C.de2.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.de3.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.de4.prototype={
$2(d,e){return B.o.aN(d.Q,e.Q)},
$S:z+7}
C.de5.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a6(n),v=o.c,u=-1/0,t=0;t<w.gL(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bd(v,A.a7(v).k("bd<2>")).cI(0,0,B.pO)+88-w.gI(n).a}else u=0
for(w=J.a6(n),v=o.c,t=0;t<w.gL(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:677}
C.de6.prototype={
$1(d){return 16+d*156},
$S:236}
C.ddQ.prototype={
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
t.n(0,d,new C.Ga(r,new A.t(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.Ga(s,new A.t(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.Ga(s,new A.t(e,v)))}t=o.r.h(0,d)
t=J.aW(t==null?B.Y:t)
s=o.w
while(t.C()){r=t.gS(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Kp(d,new A.t(e+t,w),s,s.length))}},
$S:200}
C.ddU.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aK_(new A.t(v.a,v.b+28),new A.t(w.a,w.b+28),!0,null))},
$S:115}
C.ddV.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.ddW.prototype={
$2(d,e){return B.k.aN(d.a,e.a)},
$S:750}
C.de8.prototype={
$2(d,e){return B.k.aN(d.a,e.a)},
$S:750}
C.de9.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:447}
C.dea.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:201}
C.deb.prototype={
$1(d){return d>=0.5},
$S:120}
C.fje.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.he(A.aO(!1,v,!0,new A.a4(38,38,A.X(d,this.a.c?B.c:B.cr,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1959}
C.eU8.prototype={
$1(d){var w=null,v=A.m(8),u=B.bP.j(0.12),t=A.m(8)
return new A.D(B.nr,A.aO(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.foa,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.NM,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eU7(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eU7.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.du0.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.du_.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nL,B.K,w,w)
return A.ep(A.a([A.bN(!1,B.di,w,w,!0,w,w,w,new C.dtY(d),w,w),A.bN(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mA,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dtZ(d),w,w)],x.p),B.b9,B.BR,w,u,D.bCs,w,D.bEp,new A.b8(v,B.a0),w,w)},
$S:19}
C.dtY.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dtZ.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.du9.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dua.prototype={
$1(d){var w=this.a
return w.m(new C.du8(w,d))},
$S:z+49}
C.du8.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dub.prototype={
$1(d){var w=null
return A.qC(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.due.prototype={
$1(d){var w=this.a
return w.m(new C.du7(w,d))},
$S:35}
C.du7.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dud.prototype={
$1(d){var w=null
return A.qC(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.duf.prototype={
$1(d){var w=this.a
return w.m(new C.du6(w,d))},
$S:35}
C.du6.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dug.prototype={
$0(){var w=this.a
return w.m(new C.du5(w))},
$S:0}
C.du5.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.duh.prototype={
$0(){var w=this.a
return w.m(new C.du4(w))},
$S:0}
C.du4.prototype={
$0(){return++this.a.at},
$S:0}
C.dui.prototype={
$0(){var w=this.a
return w.m(new C.du3(w))},
$S:0}
C.du3.prototype={
$0(){return--this.a.ax},
$S:0}
C.duj.prototype={
$0(){var w=this.a
return w.m(new C.du2(w))},
$S:0}
C.du2.prototype={
$0(){return++this.a.ax},
$S:0}
C.duk.prototype={
$1(d){var w=this.a
return w.m(new C.du1(w,d))},
$S:9}
C.du1.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.duc.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dul.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bP.j(0.18)
else w=q.c.a?B.e4:B.c
v=A.m(12)
if(p)u=B.bP
else u=(q.c.a?B.ea:B.bO).j(0.85)
u=A.J(u,B.r,p?1.5:1)
if(p)t=B.bP
else t=q.c.a?B.bu:B.bn
t=A.X(f,t,r,r,r,18)
if(p)s=B.bP
else s=q.c.a?B.bu:B.bn
return A.E(A.aI(!1,B.a2,!0,r,A.aO(!1,o,!0,A.cY(r,A.x(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.i,0,B.p),r,r,B.b5,new A.o(w,r,u,v,r,r,B.n),B.eH,r,r,r,r,B.jV,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dum(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dum.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.duv.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cdi.prototype={
$2(d,e){return new A.bA(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:96}
C.cdp.prototype={
$1(d){return d.ah()},
$S:z+5}
C.cdq.prototype={
$2(d,e){var w=J.b6(e,new C.cdo(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bA(d,w,x.d2)},
$S:z+53}
C.cdo.prototype={
$1(d){return d.ah()},
$S:z+12}
C.cdk.prototype={
$1(d){return C.aln(A.a2(d,x.N,x.z))},
$S:z+9}
C.cdl.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cdm.prototype={
$1(d){return C.hgh(A.a2(d,x.N,x.z))},
$S:z+11}
C.cdn.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cdu.prototype={
$1(d){return new A.aH3(d.f.length,d.a,d.b)},
$S:z+55}
C.cdv.prototype={
$2(d,e){return B.a.aN(d.c,e.c)},
$S:608}
C.cdr.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cds.prototype={
$1(d){return d.cLt(C.GS(d,this.a))},
$S:z+85}
C.e_B.prototype={
$1(d){return C.um(d,this.a.a.c)},
$S:z+3}
C.e_C.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e_G.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e_H.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e_y.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0p(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yD("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pm(r.c,r.e),$async$$0)
case 4:s.yD(p)
w=5
return A.b(s.JT(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e_z.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0p(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yD("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pm(r.c,r.e),$async$$0)
case 4:s.yD(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e_A.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.VB(n.d,m,n.e,r.b),$async$$0)
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
return A.b(o.JT(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.yD(B.a.em(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e_F.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0o(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yD("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a5(r,!1).cc(A.eh(new C.e_E(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pm(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e_E.prototype={
$1(d){var w=this.b
return new C.a_M(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e_D.prototype={
$1(d){return D.hpG},
$S:z+58}
C.e_J.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.e_K.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e_I(w,d)
return new A.D(B.d1,new C.bfV(this.b,d.c,d.a,w,null),null)},
$S:1960}
C.e_I.prototype={
$0(){return this.a.Y9(this.b.b)},
$S:0}
C.e_t.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e_u.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e_v.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e_w.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e_x.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.e_L.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cU(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a5(this.b,!1).O(s)
return}},
$S:178}
C.dM5.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dM6.prototype={
$0(){return B.d.gI(D.a5n)},
$S:z+60}
C.dM7.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.as(A.X(this.b.d,B.c.j(0.95),w,w,D.d4R,44),w,w,w),w,w,new C.bkP(u,t,v,w),B.aw)},
$S:59}
C.fTo.prototype={
$1(d){return A.p5(new C.fTn(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:135}
C.fTn.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e4:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.t5,24)],x.V),o=r?B.ea:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aW.j(0.25),B.bP.j(0.18)],x.O)
w=A.p(t,D.bTT,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a9(B.a5,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.av,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.W,o,new A.D(E.alz,A.B(A.a([w,B.bc,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bu:B.bn,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.i,0,B.p),1)],u),B.m,t,B.e,B.i,0,t,t),t),A.E(A.io(!0,t,e,B.y,D.faM,new C.fTm(this.b,s),20,B.al7,t,B.ah,!1),1)],u),B.m,t,B.e,B.i,0,B.p),B.f,t,t,new A.o(q,t,t,B.kZ,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:121}
C.fTm.prototype={
$2(d,e){var w=null,v=D.a5n[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.J(s?B.ea:B.bO,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.en,8)],x.V),p=A.m(15),o=A.E(new C.a6G(v.a,!0,w),1),n=s?B.jO:B.jf,m=A.d(v.b,w,1,B.a1,w,w,w,A.l(w,w,s?B.aP:B.av,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aI(!1,B.a2,!0,w,A.aO(!1,u,!0,A.eK(A.bx(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a1,w,w,w,A.l(w,w,s?B.bu:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.l9,w,w,w)],l),B.ak,w,B.e,B.i,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fTl(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:79}
C.fTl.prototype={
$0(){A.a5(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.clY.prototype={
$0(){return this.a.agQ(this.b)},
$S:0}
C.fSL.prototype={
$1(d){return D.hky},
$S:z+61}
C.h_g.prototype={
$1(d){var w=this
return new C.a1z(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fSQ.prototype={
$1(d){return new C.Zp(this.a,null)},
$S:z+63}
C.fSP.prototype={
$1(d){return D.hlx},
$S:z+64}
C.d5k.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d5l.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d5j(w,d))},
$S:35}
C.d5j.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d5m.prototype={
$1(d){return this.a.Kt()},
$S:2}
C.d5n.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d5g.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d5h.prototype={
$1(d){return this.a.Kt()},
$S:2}
C.d5i.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cDL.prototype={
$0(){},
$S:0}
C.cDR.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cDS.prototype={
$0(){return this.a.aPB(-1)},
$S:0}
C.cDT.prototype={
$1(d){return this.a.m(new C.cDQ())},
$S:2}
C.cDQ.prototype={
$0(){},
$S:0}
C.cDU.prototype={
$0(){return this.a.aPB(1)},
$S:0}
C.cDV.prototype={
$1(d){return this.a.m(new C.cDP())},
$S:2}
C.cDP.prototype={
$0(){},
$S:0}
C.cDW.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aW.j(0.2)
if(s)v=B.aW
else v=this.b.a?B.ea:B.bO
return A.uG(u,u,B.b1,r,u,new C.cDO(t,d),B.yx,s,w,u,new A.ay(v,1,B.r,-1),B.cc)},
$S:1961}
C.cDO.prototype={
$1(d){var w=this.a
return w.m(new C.cDM(w,this.b))},
$S:9}
C.cDM.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cDX.prototype={
$1(d){return this.a.m(new C.cDN())},
$S:2}
C.cDN.prototype={
$0(){},
$S:0}
C.cDY.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fiy.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a5(this.b,!1).O(w)},
$S:2}
C.fiz.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fiA.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a5(this.b,!1).O(w)},
$S:0}
C.fiw.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbB0()
w=w.e
s=A.m(B.o.E(v-1,0,v))
return A.b4(new A.D(D.bEo,new A.er(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bxp(p,v,this.b.a,u,t,r),r,r,B.aw)},
$S:59}
C.fix.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dw.aw(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.ar(B.aW,B.bP,w)
s.toString
s=A.a([B.b1,s,B.aW],x.O)
return A.aI(!1,B.a2,!0,p,A.aO(!1,v,!0,A.eK(D.enA,r,new A.o(r,r,A.J(B.c.j(0.4),B.r,1.5),u,r,new A.a9(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:139}
C.fRd.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:74}
C.eRi.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eR9.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eRa.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eRg.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e2(new C.eRf(w,this.b),null)},
$S:21}
C.eRf.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e4:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eT(w,u,new A.D(B.alr,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bn,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ae,C.hmd(new C.eRc(r,e),r.a),B.aB,A.B(A.a([A.E(A.dT(B.di,new C.eRd(d),w),1),B.as,A.E(A.bI(B.Vn,w,new C.eRe(r,d),A.bo(B.aW,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.i,0,w,w)],q),B.ak,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d8,w,new A.b8(t,B.a0),w)},
$S:99}
C.eRc.prototype={
$1(d){return this.b.$1(new C.eRb(this.a,d))},
$S:35}
C.eRb.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eRd.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eRe.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.eRh.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Tf(this.b)},
$S:0}
C.eR4.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bdu(w)},
$S:0}
C.eR8.prototype={
$1(d){return this.bmC(d)},
bmC(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LB(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iX(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eR7.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("Z<1>")
w=A.C(new A.Z(w,new C.eR6(this.b),v),v.k("M.E"))
u.d=t.bdu(w)},
$S:0}
C.eR6.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eRj.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iX(this.b,w)},
$S:0}
C.eRk.prototype={
$1(d){return this.a.bF9(d,this.b)},
$S:z+67}
C.eR5.prototype={
$0(){return this.a.aaG(this.b)},
$S:0}
C.h_6.prototype={
$1(d){return new C.adV(this.a,this.b,this.c,null)},
$S:z+68}
C.eRm.prototype={
$0(){return this.a.a_V(this.b)},
$S:0}
C.eRn.prototype={
$0(){return this.a.Qv(this.b)},
$S:0}
C.eRo.prototype={
$0(){return this.a.EE(this.b)},
$S:0}
C.eRp.prototype={
$0(){return this.a.a_W(this.b)},
$S:0}
C.eRl.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eR_.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eR0.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eR1.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eR3.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qf(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eR2(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eR2.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eRM.prototype={
$2(d,e){return d+e.gxg()},
$S:z+71}
C.eRI.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eRJ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eRt.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e4:B.c,s=A.m(24),r=A.p(v,D.bUl,B.f,v,v,new A.o(B.ax.j(u?0.18:0.08),v,A.J(B.ax.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.av,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aP:B.av
u=u?B.ea:B.bO
w=x.p
return A.eT(v,t,new A.D(B.yw,A.x(A.a([r,B.aQ,q,B.Q,p,B.d4,A.B(A.a([A.E(A.dT(B.nO,new C.eRr(d),A.dj(v,v,v,v,v,v,v,v,v,o,v,v,B.fg,v,new A.b8(A.m(14),B.a0),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.as,A.E(A.bI(D.fTW,v,new C.eRs(d),A.bo(B.ax,v,v,v,v,v,B.fg,v,new A.b8(A.m(14),B.a0),v,v,v)),1)],w),B.m,v,B.e,B.i,0,v,v)],w),B.m,v,B.e,B.P,0,B.p),v),v,v,v,v,B.d8,v,new A.b8(s,B.a0),v)},
$S:49}
C.eRr.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.eRs.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eRC.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e4:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.h_,28)],x.V),g=k?D.dbX:B.a4J,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.f4l,B.au,new A.bM(B.a5,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cA,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.i,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a9(B.ay,B.aE,B.x,g,m,m),B.n),m,m,m,m,E.alw,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b6v(B.b7,B.jj,new C.eRz(v,d),l,"Camera import","Scan QR"),1),B.as,A.E(v.b6v(B.cw,R.z7,new C.eRA(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.i,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.ax.j(k?0.14:0.06)
q=A.m(16)
p=A.J(B.ax.j(0.28),B.r,1)
o=A.p(m,D.bTH,B.f,m,m,new A.o(B.ax.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.av,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bn,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.i,0,B.p),1)
return A.bn(!0,new A.D(B.w6,A.p(m,A.x(A.a([g,new A.D(B.als,A.x(A.a([w,B.W,u,B.bx,t,B.W,A.aI(!1,B.a2,!0,m,A.aO(!1,s,!0,A.p(m,A.B(A.a([o,B.bc,n,A.X(B.eE,k?B.bu:B.bn,m,m,m,m)],f),B.m,m,B.e,B.i,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bD,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eRB(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.E,m,B.e,B.i,0,B.p),m)],f),B.m,m,B.e,B.P,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:27}
C.eRz.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.vM("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eRA.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.vM("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eRB.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.Oc(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eRx.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e4:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eU,24)],x.V),k=o?B.ea:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bu:B.bn
u=A.bx(w,new A.a4(48,48,C.aRp(!0,A.m(12),48,P.On,u,v.c,48),q),B.ap)
w=A.d(v.b,q,1,B.a1,q,q,q,A.l(q,q,o?B.aP:B.av,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.B2(v.gxg())
s=x.p
r=this.a
return A.bn(!0,new A.D(B.w6,A.p(q,A.x(A.a([B.W,k,new A.D(D.alp,A.B(A.a([u,B.bc,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bu:B.bn,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.i,0,B.p),1)],s),B.m,q,B.e,B.i,0,q,q),q),B.BH,r.co_(B.uH,B.aW,new C.eRv(d),p,"QR code or backup file","Transfer project"),r.b3v(!0,B.eb,B.ax,new C.eRw(d),p,"Remove from this device","Delete project"),B.W],s),B.m,q,B.e,B.P,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:27}
C.eRv.prototype={
$0(){A.a5(this.a,!1).O("transfer")
return null},
$S:0}
C.eRw.prototype={
$0(){A.a5(this.a,!1).O("delete")
return null},
$S:0}
C.eRy.prototype={
$1(d){return this.bmD(d)},
bmD(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.LB(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vZ(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eRP.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eRO(w))},
$S:0}
C.eRO.prototype={
$0(){return this.a.r++},
$S:0}
C.eRQ.prototype={
$0(){var w=this.a
return w.m(new C.eRN(w))},
$S:0}
C.eRN.prototype={
$0(){return this.a.r++},
$S:0}
C.eRq.prototype={
$0(){var w=this.a.c
w.toString
return A.iX(w,null)},
$S:0}
C.eRu.prototype={
$0(){return this.a.chh(this.b)},
$S:0}
C.eRL.prototype={
$0(){var w=this.a
return w.m(new C.eRK(w,this.b))},
$S:0}
C.eRK.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eRF.prototype={
$0(){return this.a.vM("scan")},
$S:0}
C.eRG.prototype={
$0(){return this.a.vM("file")},
$S:0}
C.eRH.prototype={
$1(d){return this.a.co0(d,this.b)},
$S:z+72}
C.eRE.prototype={
$0(){return this.a.EI(this.b)},
$S:0}
C.eRD.prototype={
$0(){return this.a.a0q(this.b,this.c)},
$S:0}
C.cDa.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cD9.prototype={
$1(d){return d.ah()},
$S:z+74}
C.cD7.prototype={
$1(d){return C.hG2(A.a2(d,x.N,x.z))},
$S:z+75}
C.cD8.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fBN.prototype={
$1(d){return d.y===D.kM},
$S:z+3}
C.h_R.prototype={
$1(d){return C.aQ7(d,this.a)},
$S:z+3}
C.fzG.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bRx.prototype={
$1(d){return!d.as},
$S:z+1}
C.bRw.prototype={
$1(d){return d.ah()},
$S:z+23}
C.bRt.prototype={
$1(d){return C.hgj(A.a2(d,x.N,x.z))},
$S:z+24}
C.bRu.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bRv.prototype={
$1(d){return J.k(d)},
$S:17}
C.fqd.prototype={
$2(d,e){return e.e.aN(0,d.e)},
$S:z+25}
C.fm2.prototype={
$1(d){return C.h6p(A.a2(d,x.N,x.z))},
$S:z+79}
C.fm3.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fm4.prototype={
$2(d,e){return e.e.aN(0,d.e)},
$S:z+25}
C.fSC.prototype={
$1(d){return J.k(d)},
$S:17}
C.fSD.prototype={
$1(d){return d.a},
$S:z+81}
C.fSE.prototype={
$1(d){return d.length!==0},
$S:3}
C.fSF.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+10}
C.fSG.prototype={
$1(d){return d.Tf(null).ah()},
$S:z+82}
C.h_P.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fCg.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fFb.prototype={
$1(d){return C.aln(A.a2(d,x.N,x.z))},
$S:z+9}
C.fFc.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fFd.prototype={
$2(d,e){return e.r.aN(0,d.r)},
$S:z+6}
C.fFe.prototype={
$1(d){return d.ah()},
$S:z+5}
C.fFf.prototype={
$1(d){return C.um(d,this.a)},
$S:z+3}
C.fSp.prototype={
$1(d){return C.um(d,this.a)},
$S:z+3}
C.h_K.prototype={
$1(d){return C.aln(A.a2(d,x.N,x.z))},
$S:z+9}
C.h_L.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h_M.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fBY.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fBZ.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h_V.prototype={
$1(d){return!d.as},
$S:z+1}
C.fBs.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fBt.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fBu.prototype={
$2(d,e){return B.o.aN(d.Q,e.Q)},
$S:z+7}
C.h_h.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fG1.prototype={
$1(d){return d.Q},
$S:z+15}
C.fSi.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fF8.prototype={
$1(d){return C.aln(A.a2(d,x.N,x.z))},
$S:z+9}
C.fF9.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fFa.prototype={
$2(d,e){return e.r.aN(0,d.r)},
$S:z+6}
C.fSd.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fmA.prototype={
$1(d){return d.length!==0},
$S:3}
C.fmB.prototype={
$1(d){return C.hgj(A.a2(d,x.N,x.z))},
$S:z+24}
C.fmC.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fmD.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fmE.prototype={
$1(d){return d.length!==0},
$S:3}
C.fmR.prototype={
$2(d,e){return d.eK(new C.fmS(e))},
$S:1962}
C.fmS.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.ca},
$S:1963}
C.fmO.prototype={
$1(d){return C.i1l(d,this.a)},
$S:z+84}
C.fmP.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fmQ.prototype={
$2(d,e){return e.r.aN(0,d.r)},
$S:z+6}
C.fqU.prototype={
$1(d){return d.a},
$S:z+56}
C.fqV.prototype={
$1(d){return d.length!==0},
$S:3}
C.fqW.prototype={
$2(d,e){return e.r.aN(0,d.r)},
$S:z+6}
C.ftN.prototype={
$1(d){return d.ah()},
$S:z+5}
C.fz_.prototype={
$1(d){return C.hrJ(d,C.GS(d,this.a))},
$S:z+5}
C.fz0.prototype={
$1(d){return C.hrK(d,C.GS(d,this.a))},
$S:z+5};(function aliases(){var w=C.aAS.prototype
w.buk=w.q
w=C.az1.prototype
w.buf=w.q
w=C.aGg.prototype
w.buI=w.q
w=C.aAT.prototype
w.bul=w.q
w=C.aAV.prototype
w.bum=w.q
w=C.aAW.prototype
w.bun=w.q
w=C.aMs.prototype
w.bxc=w.q
w=C.aOy.prototype
w.bzv=w.q
w=C.aOz.prototype
w.bzw=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aDR.prototype,"gckV","ckW",28)
var r
w(r=C.aAR.prototype,"gcdS","cdT",65)
v(r,"gaNP","NL",0)
v(r,"gctf","AZ",0)
v(r,"gbMU","Op",0)
v(r,"gcHx","yE",0)
v(r,"gcmY","a18",0)
v(r,"gbIj","O8",0)
v(r,"gbNj","XB",0)
w(r,"gbSh","bSi",78)
v(r,"gbCF","A0",0)
v(C.aAU.prototype,"gcHt","FA",0)
v(r=C.alc.prototype,"gbqK","bqL",2)
v(r,"gbqD","bqE",2)
v(r,"gcIA","cIB",2)
u(r,"gq9","kI",0)
u(r=C.ajp.prototype,"geX","h8",2)
w(r,"gc9S","c9T",27)
u(C.au5.prototype,"gq9","kI",0)
v(r=C.ay1.prototype,"gcU5","cU6",2)
u(r,"gq9","kI",0)
u(C.aK4.prototype,"gbqI","bqJ",2)
v(C.all.prototype,"gBs","cIL",2)
u(r=C.alj.prototype,"gcJp","cJq",2)
u(r,"gq9","kI",0)
v(r=C.alf.prototype,"gbpC","bpD",2)
v(r,"gcOB","cOC",2)
u(r=C.alh.prototype,"geX","h8",2)
u(r,"gkz","cI6",2)
v(r=C.ald.prototype,"gcHW","cHX",2)
u(r,"gbow","jD",2)
v(r=C.aEp.prototype,"gags","w_",0)
v(r,"gcgx","a0h",0)
v(r,"gaRV","Ie",0)
v(r=C.aEm.prototype,"gcDx","a3g",0)
v(r,"gags","w_",0)
v(r,"gcrf","a1N",0)
v(r,"gcgs","b1K",2)
v(r,"gchu","a0v",0)
w(r,"gcdM","cdN",35)
v(r,"gbNb","Ij",0)
v(r,"gcEA","cEB",2)
v(r,"gc44","Zi",0)
w(r,"gccf","ccg",36)
v(r,"gcgg","cgh",2)
v(r=C.aCQ.prototype,"gc9Y","Q3",0)
v(r,"gca_","ca0",2)
v(r,"gbJO","aai",0)
v(r=C.aEo.prototype,"gbQJ","Y5",0)
v(r,"gc0h","YL",0)
v(r,"gcxI","a2F",0)
v(r,"gctR","a2g",0)
v(C.aEn.prototype,"gctz","aid",0)
v(C.ath.prototype,"gccd","a_T",0)
v(C.azA.prototype,"ga3_","Kt",2)
v(C.azz.prototype,"ga3_","Kt",2)
v(C.ayf.prototype,"ga3_","Kt",2)
v(r=C.aFS.prototype,"gb2T","R0",0)
v(r,"gbBt","Wh",0)
v(r,"gchi","chj",2)
w(C.aFR.prototype,"gcd6","cd7",69)
t(C.aFT.prototype,"gaRP",0,0,null,["$1","$0"],["Id","bL5"],70,0,0)
s(C,"hze","ibo",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aD,[C.aoX,C.uD,C.nq,C.HY,C.af6,C.Kh,C.uE,C.bS2,C.t3,C.boi,C.alu,C.add,C.ln,C.bQE,C.att,C.zh,C.ak9,C.Mf,C.b9N,C.a9l,C.bh0,C.afd,C.azg,C.af1,C.aK4,C.Kp,C.Ga,C.bfT,C.aK_,C.aqe,C.dec,C.lQ,C.aUq,C.aUp,C.aSn,C.u7,C.rg,C.ly,C.hW,C.kP,C.aHY])
u(A.hy,[C.fJP,C.fJO,C.fJQ,C.fTh,C.fxL,C.fxM,C.fxR,C.fHy,C.fHx,C.fHw,C.c6L,C.fTO,C.fTG,C.fTS,C.fC5,C.dMM,C.dMH,C.dMI,C.dMk,C.dMg,C.dN0,C.dN1,C.dMV,C.dMW,C.dN2,C.dN3,C.fCJ,C.fF5,C.fF6,C.fSn,C.h_J,C.fBX,C.fSW,C.ddp,C.dcM,C.dcV,C.ddb,C.dcR,C.dcX,C.dcO,C.dd0,C.dd1,C.dd_,C.ddg,C.ddf,C.dfb,C.dfc,C.dfd,C.ddD,C.ddI,C.ddH,C.cLZ,C.cM0,C.d4y,C.d4X,C.d4Y,C.d50,C.d52,C.d53,C.d54,C.d56,C.d57,C.bQo,C.bQi,C.fqB,C.h_C,C.h_D,C.h_E,C.h_z,C.h_F,C.h_G,C.h_H,C.h_y,C.fDf,C.fRq,C.fzH,C.fG0,C.bLE,C.h00,C.fRW,C.bJP,C.bJK,C.bJM,C.bJL,C.cnE,C.cnz,C.cnA,C.cny,C.cnw,C.cnB,C.cN2,C.cCA,C.cCD,C.cCB,C.cCE,C.cCF,C.f3k,C.fdq,C.bRa,C.bR4,C.bR8,C.bQM,C.dZ9,C.dZ6,C.dZ7,C.dZ5,C.dZb,C.bR2,C.bQT,C.bQD,C.bQC,C.bQy,C.bQz,C.bQA,C.bQB,C.e_P,C.e_e,C.e_9,C.dZB,C.dZR,C.dZU,C.dZQ,C.dZP,C.e_5,C.e_6,C.e_0,C.dZp,C.e_h,C.e_b,C.dZr,C.dZs,C.dZt,C.dZy,C.dZw,C.dZv,C.dZL,C.dZM,C.dZG,C.e_o,C.e_k,C.ddO,C.ddP,C.fCN,C.fCO,C.fCP,C.fCL,C.fCM,C.fCS,C.fCT,C.fCU,C.fCQ,C.fCR,C.de7,C.ddY,C.ddT,C.de2,C.de3,C.de6,C.ddV,C.de9,C.dea,C.deb,C.fje,C.eU8,C.du_,C.du9,C.dua,C.dub,C.due,C.dud,C.duf,C.duk,C.dul,C.cdp,C.cdo,C.cdk,C.cdl,C.cdm,C.cdn,C.cdu,C.cdr,C.cds,C.e_B,C.e_E,C.e_D,C.e_K,C.e_L,C.dM5,C.fTo,C.fSL,C.h_g,C.fSQ,C.fSP,C.d5l,C.d5m,C.d5h,C.cDT,C.cDV,C.cDW,C.cDO,C.cDX,C.fiy,C.fRd,C.eRg,C.eRc,C.eR8,C.eR6,C.eRk,C.h_6,C.eRt,C.eRC,C.eRx,C.eRy,C.eRH,C.cD9,C.cD7,C.cD8,C.fBN,C.h_R,C.fzG,C.bRx,C.bRw,C.bRt,C.bRu,C.bRv,C.fm2,C.fm3,C.fSC,C.fSD,C.fSE,C.fSF,C.fSG,C.h_P,C.fCg,C.fFb,C.fFc,C.fFe,C.fFf,C.fSp,C.h_K,C.h_L,C.h_M,C.fBY,C.fBZ,C.h_V,C.fBs,C.fBt,C.h_h,C.fG1,C.fSi,C.fF8,C.fF9,C.fSd,C.fmA,C.fmB,C.fmC,C.fmD,C.fmE,C.fmS,C.fmO,C.fmP,C.fqU,C.fqV,C.ftN,C.fz_,C.fz0])
u(A.aw,[C.aZV,C.ala,C.aVG,C.Z4,C.bbw,C.Q8,C.a5S,C.tr,C.I_,C.bfR,C.bjH,C.bxC,C.bn0,C.adz,C.bjG,C.ady,C.bjF,C.aCR,C.aJ1,C.adA,C.G6,C.bfS,C.acP,C.bfQ,C.bfV,C.aZT,C.ath,C.adV])
u(A.mf,[C.bc8,C.bdl,C.bdc,C.aHT,C.biI,C.boh,C.aVL,C.bc9,C.aAQ,C.bbF,C.bsg,C.biQ,C.bif,C.bin,C.bfU,C.beW,C.bkP,C.bxp])
u(A.iH,[C.fTL,C.fTM,C.fTN,C.fTE,C.fTF,C.fTQ,C.fTR,C.dMY,C.dMK,C.dMN,C.dMr,C.dMs,C.dMt,C.dMq,C.dMy,C.dMp,C.dMz,C.dMA,C.dMo,C.dMB,C.dMn,C.dMC,C.dMm,C.dMD,C.dMe,C.dMf,C.dMl,C.dME,C.dMj,C.dMF,C.dMi,C.dMu,C.dMh,C.dMv,C.dMd,C.dMw,C.dMx,C.dMZ,C.dN_,C.dMO,C.dMP,C.dMQ,C.dMR,C.dMS,C.dMT,C.dMU,C.dN5,C.dMX,C.fCK,C.dcK,C.dcI,C.dcJ,C.dcL,C.ddo,C.ddd,C.dda,C.dcN,C.dde,C.dcT,C.dcU,C.dcW,C.ddc,C.dcS,C.dcY,C.ddl,C.dd7,C.dd6,C.dd8,C.dd9,C.dd2,C.dd4,C.dd5,C.dcZ,C.ddh,C.ddk,C.dcP,C.dcQ,C.dfa,C.df9,C.df8,C.df7,C.dfe,C.df6,C.dff,C.ddE,C.ddF,C.ddG,C.ddJ,C.ddC,C.ddB,C.cM_,C.d4x,C.d4K,C.d4J,C.d4Z,C.d4I,C.d5_,C.d4H,C.d4G,C.d51,C.d4F,C.d4S,C.d4R,C.d58,C.bQh,C.bQr,C.bQj,C.bQk,C.bQn,C.bQm,C.bQp,C.bQq,C.bQl,C.bQf,C.bQg,C.bRV,C.bRW,C.bRX,C.bRY,C.bRZ,C.bS_,C.bS0,C.h_B,C.fRr,C.bJO,C.bJJ,C.bJH,C.bJI,C.bJG,C.cnG,C.cnH,C.cnF,C.cnI,C.cnK,C.cnL,C.cnM,C.cnC,C.cCz,C.cCI,C.cCJ,C.cCK,C.cCH,C.cCL,C.cCM,C.cCN,C.cCO,C.cCC,C.cCG,C.bRq,C.bRp,C.bRn,C.bRl,C.bRm,C.bRi,C.bRj,C.bRk,C.bRo,C.bRh,C.f3l,C.f3m,C.f3n,C.f3o,C.f3p,C.bRe,C.bRf,C.bRg,C.bR9,C.bRb,C.bRc,C.bRd,C.bR5,C.bQQ,C.bQP,C.bQO,C.bQI,C.bQJ,C.bQN,C.bQK,C.bQL,C.bQH,C.dZ8,C.dZa,C.dZ3,C.dZ4,C.dZ2,C.dZc,C.dZd,C.dZe,C.dZh,C.dZi,C.dZj,C.dZk,C.dZl,C.dZm,C.dZn,C.dZo,C.dZf,C.dZg,C.bR1,C.bR0,C.bQS,C.bQR,C.bQY,C.bQZ,C.bQV,C.bQW,C.bQX,C.bQU,C.bQs,C.bQt,C.bQx,C.bQw,C.bQv,C.bQu,C.e_O,C.e_N,C.e_Q,C.e_R,C.e_S,C.e_M,C.e_U,C.e_T,C.e_c,C.e_d,C.e_f,C.dZC,C.dZT,C.dZS,C.dZV,C.e_8,C.dZO,C.dZZ,C.e__,C.dZY,C.dZW,C.dZX,C.e_1,C.e_2,C.e_3,C.e_7,C.dZq,C.e_a,C.dZu,C.dZx,C.dZz,C.e_g,C.dZF,C.dZD,C.dZH,C.dZI,C.dZE,C.dZJ,C.dZN,C.e_p,C.e_q,C.e_i,C.e_l,C.e_m,C.e_n,C.e_s,C.e_j,C.dZA,C.ddN,C.ddM,C.ddR,C.de0,C.ddS,C.eU7,C.du0,C.dtY,C.dtZ,C.du8,C.du7,C.du6,C.dug,C.du5,C.duh,C.du4,C.dui,C.du3,C.duj,C.du2,C.du1,C.duc,C.dum,C.duv,C.e_C,C.e_G,C.e_H,C.e_y,C.e_z,C.e_A,C.e_F,C.e_J,C.e_I,C.e_t,C.e_u,C.e_v,C.e_w,C.e_x,C.dM6,C.fTl,C.clY,C.d5k,C.d5j,C.d5n,C.d5g,C.d5i,C.cDL,C.cDR,C.cDS,C.cDQ,C.cDU,C.cDP,C.cDM,C.cDN,C.cDY,C.fiz,C.fiA,C.eRi,C.eR9,C.eRa,C.eRb,C.eRd,C.eRe,C.eRh,C.eR4,C.eR7,C.eRj,C.eR5,C.eRm,C.eRn,C.eRo,C.eRp,C.eRl,C.eR_,C.eR0,C.eR1,C.eR3,C.eR2,C.eRI,C.eRJ,C.eRr,C.eRs,C.eRz,C.eRA,C.eRB,C.eRv,C.eRw,C.eRP,C.eRO,C.eRQ,C.eRN,C.eRq,C.eRu,C.eRL,C.eRK,C.eRF,C.eRG,C.eRE,C.eRD])
u(A.af,[C.ap8,C.Tb,C.ZN,C.ZR,C.ZP,C.Zn,C.alb,C.ajo,C.au4,C.ay0,C.alk,C.ali,C.ale,C.Vy,C.alg,C.Tc,C.aqh,C.aqb,C.a_r,C.aqf,C.a_M,C.a_N,C.a6G,C.Zp,C.Zo,C.YW,C.a1z,C.FW,C.ay8,C.atg,C.ata,C.atf,C.Ou])
u(A.ah,[C.aDR,C.bfL,C.aAR,C.bg9,C.aAU,C.bdj,C.aAS,C.az1,C.aGg,C.ay1,C.aAW,C.aAV,C.aAT,C.bl8,C.alh,C.ald,C.aEp,C.aEm,C.aCQ,C.aEo,C.aEn,C.bl9,C.aMs,C.azA,C.azz,C.ayf,C.bxs,C.aOy,C.aOz,C.aFS,C.bmw,C.aFR,C.bzf])
u(A.jv,[C.dMJ,C.dML,C.dMG,C.dN4,C.fF7,C.bQe,C.ddn,C.ddm,C.dd3,C.ddi,C.ddj,C.ddK,C.bS1,C.bRU,C.bQF,C.bQG,C.h_A,C.h0_,C.bJN,C.cnJ,C.cnD,C.cnx,C.f3q,C.bR3,C.bR6,C.bR7,C.dol,C.bR_,C.e_4,C.dZK,C.e_r,C.de_,C.ddZ,C.ddX,C.de1,C.de4,C.de5,C.ddQ,C.ddU,C.ddW,C.de8,C.cdi,C.cdq,C.cdv,C.dM7,C.fTn,C.fTm,C.fiw,C.fix,C.eRf,C.eRM,C.cDa,C.fqd,C.fm4,C.fFd,C.fBu,C.fFa,C.fmR,C.fmQ,C.fqW])
u(A.lA,[C.a14,C.aff,C.a1n,C.a_e,C.abT,C.aKN,C.HZ,C.alm,C.cDb,C.cDc])
t(C.alc,C.aAS)
t(C.ajp,C.az1)
t(C.au5,C.aGg)
t(C.bfP,C.aAW)
t(C.all,C.bfP)
t(C.bfO,C.aAV)
t(C.alj,C.bfO)
t(C.bfN,C.aAT)
t(C.alf,C.bfN)
t(C.bkQ,C.aMs)
t(C.bxq,C.aOy)
t(C.bxr,C.aOz)
t(C.aFT,C.bzf)
t(C.ba_,A.b9O)
t(C.bxt,A.a6l)
t(C.b9Z,C.bxt)
w(C.aAS,A.cg)
w(C.az1,A.cg)
w(C.aGg,A.eQ)
w(C.aAT,A.cg)
v(C.bfN,C.af1)
w(C.aAV,A.cg)
v(C.bfO,C.af1)
w(C.aAW,A.cg)
v(C.bfP,C.af1)
w(C.aMs,A.eQ)
w(C.aOy,A.cg)
w(C.aOz,A.cg)
v(C.bzf,A.eE)
v(C.bxt,A.jc)})()
A.j0(b.typeUniverse,JSON.parse('{"aZV":{"aw":[],"v":[]},"bc8":{"aC":[]},"ap8":{"af":[],"v":[]},"aDR":{"ah":["ap8"]},"Tb":{"af":[],"v":[]},"ala":{"aw":[],"v":[]},"aVG":{"aw":[],"v":[]},"bfL":{"ah":["Tb"]},"ZN":{"af":[],"v":[]},"ZR":{"af":[],"v":[]},"ZP":{"af":[],"v":[]},"Zn":{"af":[],"v":[]},"aAR":{"ah":["ZN"]},"bg9":{"ah":["ZR"]},"aAU":{"ah":["ZP"]},"Z4":{"aw":[],"v":[]},"bdl":{"aC":[]},"bdc":{"aC":[]},"bdj":{"ah":["Zn"]},"aHT":{"aC":[]},"biI":{"aC":[]},"bbw":{"aw":[],"v":[]},"alb":{"af":[],"v":[]},"alc":{"ah":["alb"]},"boh":{"aC":[]},"aVL":{"aC":[]},"ajo":{"af":[],"v":[]},"au4":{"af":[],"v":[]},"ay0":{"af":[],"v":[]},"ajp":{"ah":["ajo"]},"bc9":{"aC":[]},"Q8":{"aw":[],"v":[]},"aAQ":{"aC":[]},"au5":{"ah":["au4"]},"bbF":{"aC":[]},"ay1":{"ah":["ay0"]},"alk":{"af":[],"v":[]},"ali":{"af":[],"v":[]},"ale":{"af":[],"v":[]},"all":{"ah":["alk"]},"bsg":{"aC":[]},"alj":{"ah":["ali"]},"biQ":{"aC":[]},"alf":{"ah":["ale"]},"bif":{"aC":[]},"Vy":{"af":[],"v":[]},"alg":{"af":[],"v":[]},"Tc":{"af":[],"v":[]},"a5S":{"aw":[],"v":[]},"bin":{"aC":[]},"tr":{"aw":[],"v":[]},"I_":{"aw":[],"v":[]},"bl8":{"ah":["Vy"]},"alh":{"ah":["alg"]},"ald":{"ah":["Tc"]},"aqh":{"af":[],"v":[]},"aqb":{"af":[],"v":[]},"a_r":{"af":[],"v":[]},"adA":{"aw":[],"v":[]},"aEp":{"ah":["aqh"]},"aEm":{"ah":["aqb"]},"bfR":{"aw":[],"v":[]},"bfU":{"aC":[]},"bjH":{"aw":[],"v":[]},"beW":{"aC":[]},"bxC":{"aw":[],"v":[]},"bn0":{"aw":[],"v":[]},"aCQ":{"ah":["a_r"]},"adz":{"aw":[],"v":[]},"bjG":{"aw":[],"v":[]},"ady":{"aw":[],"v":[]},"bjF":{"aw":[],"v":[]},"aCR":{"aw":[],"v":[]},"aJ1":{"aw":[],"v":[]},"G6":{"aw":[],"v":[]},"aqf":{"af":[],"v":[]},"a_M":{"af":[],"v":[]},"a_N":{"af":[],"v":[]},"aEo":{"ah":["aqf"]},"bfS":{"aw":[],"v":[]},"acP":{"aw":[],"v":[]},"bfQ":{"aw":[],"v":[]},"bfV":{"aw":[],"v":[]},"aEn":{"ah":["a_M"]},"bl9":{"ah":["a_N"]},"aZT":{"aw":[],"v":[]},"a6G":{"af":[],"v":[]},"bkQ":{"ah":["a6G"]},"bkP":{"aC":[]},"ath":{"aw":[],"v":[]},"Zp":{"af":[],"v":[]},"Zo":{"af":[],"v":[]},"YW":{"af":[],"v":[]},"a1z":{"af":[],"v":[]},"azA":{"ah":["Zp"]},"azz":{"ah":["Zo"]},"ayf":{"ah":["YW"]},"bxs":{"ah":["a1z"]},"FW":{"af":[],"v":[]},"ay8":{"af":[],"v":[]},"bxq":{"ah":["FW"]},"bxr":{"ah":["ay8"]},"bxp":{"aC":[]},"atg":{"af":[],"v":[]},"aFS":{"ah":["atg"]},"adV":{"aw":[],"v":[]},"ata":{"af":[],"v":[]},"atf":{"af":[],"v":[]},"bmw":{"ah":["ata"]},"aFR":{"ah":["atf"]},"Ou":{"af":[],"v":[]},"aFT":{"ah":["Ou"],"eE":[]},"b9Z":{"jc":[],"fj":[]}}'))
A.CW(b.typeUniverse,JSON.parse('{"af1":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.at
return{e2:w("aSn"),cq:w("mb"),Q:w("rg"),r:w("bu<n,n>"),c5:w("aUp"),dY:w("aUq"),fH:w("Mf"),de:w("ak9"),dN:w("Mm<G>"),gc:w("DX<G>"),A:w("eJ<n?>"),e:w("HY"),B:w("nq"),P:w("hW"),df:w("ln"),k:w("kP"),x:w("aB<~>"),U:w("O<Sl>"),V:w("O<ac>"),C:w("O<rg>"),O:w("O<u>"),c:w("O<Mf>"),b:w("O<ak9>"),ac:w("O<eJ<n?>>"),I:w("O<nq>"),u:w("O<hW>"),J:w("O<ln>"),_:w("O<kP>"),cl:w("O<aB<ai<a8<n,@>>>>"),R:w("O<ns>"),eU:w("O<ai<+(K,K)>>"),ez:w("O<a8<n,aD>>"),gE:w("O<a8<n,n>>"),Y:w("O<a8<n,@>>"),fD:w("O<mK>"),bp:w("O<ow>"),g:w("O<t>"),ar:w("O<att>"),v:w("O<fV>"),gy:w("O<a9l>"),L:w("O<+(n,n)>"),G:w("O<+(K,K)>"),E:w("O<+(K,~())>"),bd:w("O<+(n,G,R)>"),bF:w("O<+count,id,name(G,n,n)>"),F:w("O<cW>"),s:w("O<n>"),cF:w("O<au>"),aS:w("O<j_>"),dT:w("O<b9N>"),p:w("O<v>"),Z:w("O<fj>"),D:w("O<ly>"),h:w("O<azg>"),cC:w("O<bh0>"),fp:w("O<Kh>"),M:w("O<Kp>"),gZ:w("O<aHY>"),gA:w("O<af6>"),e4:w("O<afd>"),dE:w("O<aK_>"),f7:w("O<R>"),n:w("O<K>"),t:w("O<G>"),dS:w("O<aC?>"),d4:w("O<n?>"),eF:w("cx<ah<af>>"),d:w("ai<nq>"),do:w("ai<hW>"),cg:w("ai<ln>"),ax:w("ai<kP>"),fO:w("ai<a8<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(G,n,n)>"),dy:w("ai<n>"),er:w("ai<au>"),gk:w("ai<ly>"),j:w("ai<@>"),fK:w("bA<n,n>"),d2:w("bA<n,ai<a8<n,@>>>"),a:w("a8<n,@>"),f:w("a8<@,@>"),gv:w("N<n,I0>"),cM:w("N<G,n>"),w:w("iB"),g2:w("rB"),bV:w("aoX"),fL:w("cv"),K:w("aD"),dc:w("fV"),fo:w("OQ<G>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(R,G)"),d9:w("+dx,hidden(K,ai<hW>)"),cs:w("+count,id,name(G,n,n)"),N:w("n"),fT:w("jd<hW>"),ec:w("jd<n>"),gW:w("qX<K>"),X:w("bq<K>"),bW:w("dL"),W:w("bR<n>"),b4:w("bR<G>"),cI:w("jX<n>"),av:w("Z<zh>"),cc:w("Z<n>"),l:w("v"),gF:w("fj"),fA:w("ly"),dO:w("Ga"),bw:w("ady<n?>"),cy:w("Kr"),q:w("mt"),y:w("R"),i:w("K"),z:w("@"),S:w("G"),eK:w("ai<kP>?"),m:w("aqe?"),cT:w("t?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,G)?"),he:w("+qrPayload,token,usesRemaining(n,n,G)?"),gG:w("+members,trees,viewOnly(G,G,R)?"),az:w("qb?"),T:w("n?"),aD:w("dL?"),o:w("ly?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b2t=new A.bh(B.fE,B.bH,B.fE,B.bH)
D.acQ=new A.bh(B.fE,B.id,B.fE,B.id)
D.b2H=new A.bh(B.ie,B.bH,B.bH,B.bH)
D.b2L=new A.ay(B.cQ,1.4,B.r,-1)
D.b2V=new A.ay(B.ac,1,B.r,-1)
D.adk=new A.aZ(140,1/0,0,1/0)
D.b4j=new A.aZ(0,1/0,64,1/0)
D.b4n=new A.aZ(0,84,0,1/0)
D.ads=new A.aZ(130,1/0,0,1/0)
D.aBx=w([B.m1,B.rt,B.c],x.O)
D.c4y=new A.a9(B.ay,B.aE,B.x,D.aBx,null,null)
D.b56=new A.o(null,null,null,null,null,D.c4y,B.n)
D.dbo=w([B.aW,B.bP],x.O)
D.c6G=new A.a9(B.b0,B.b6,B.x,D.dbo,null,null)
D.b5r=new A.o(null,null,null,null,null,D.c6G,B.n)
D.Xy=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fr=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dfg=w([B.dv,D.Xy,D.fr],x.O)
D.c3K=new A.a9(B.b0,B.b6,B.x,D.dfg,null,null)
D.b6b=new A.o(null,null,null,null,null,D.c3K,B.n)
D.flt=new A.F(!0,B.bU,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWr=new A.y("?",null,D.flt,null,null,null,null,null,null,null,null,null)
D.b9R=new A.cf(B.A,null,null,D.fWr,null)
D.Vf=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEB=new A.y("\ud83c\udf33",null,D.Vf,null,null,null,null,null,null,null,null,null)
D.aec=new A.cf(B.A,null,null,D.fEB,null)
D.fHc=new A.y("\ud83c\udfc6",null,At.Ke,null,null,null,null,null,null,null,null,null)
D.ba1=new A.cf(B.A,null,null,D.fHc,null)
D.bbT=new A.fl(null,null,null,null,null,E.ke,null,null,null,null)
D.aee=new A.cf(B.A,null,null,D.bbT,null)
D.kF=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fm1=new A.F(!0,D.kF,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGh=new A.y("No books on the shelf yet.",null,D.fm1,null,null,null,null,null,null,null,null,null)
D.enB=new A.D(B.nw,D.fGh,null)
D.bah=new A.cf(B.A,null,null,D.enB,null)
D.fsZ=new A.F(!0,D.fr,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXm=new A.y("\ud83d\ude8c  On the road\u2026",null,D.fsZ,null,null,null,null,null,null,null,null,null)
D.eob=new A.D(B.ck,D.fXm,null)
D.baK=new A.cf(B.A,null,null,D.eob,null)
D.aVc=new A.y("\ud83e\uddfa",null,D.Vf,null,null,null,null,null,null,null,null,null)
D.bb_=new A.cf(B.A,null,null,D.aVc,null)
D.fJF=new A.y("\ud83c\udfad",null,D.Vf,null,null,null,null,null,null,null,null,null)
D.bbb=new A.cf(B.A,null,null,D.fJF,null)
D.bbe=new A.cf(B.A,null,null,A9.Xo,null)
D.aez=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.aeG=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bdq=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bdv=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bdG=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bdI=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bdK=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bdS=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lx=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bdW=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.be0=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.be1=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.be2=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.ly=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.beE=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.B9=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.beN=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bf6=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bf9=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bff=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bfn=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.afj=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bft=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.XJ=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.afm=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bfG=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.XL=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bg1=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.afx=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bgo=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bgE=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bh1=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bhb=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.Fq=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bhw=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bhy=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bhC=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.afZ=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bhV=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bi_=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bi5=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.ag2=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bid=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.biG=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.biO=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.biQ=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.biV=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.agi=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bjx=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.agE=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bkt=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.agR=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bkS=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.FE=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bkY=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bl7=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bl9=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.agV=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.blr=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bls=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.blv=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ah1=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.Yp=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.blO=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bm8=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bmd=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.ahe=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bmk=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.Yv=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bmC=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bmD=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.FL=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bno=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bo0=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bo6=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.boa=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.q5=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bok=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.boo=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bou=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bow=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.ahW=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.ai0=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.FS=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.YM=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.ai9=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bpE=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bpX=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bql=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bqu=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.aix=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.YV=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bqD=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bqT=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.YY=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.br6=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.brm=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.Z1=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.brr=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.aiR=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.aiV=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.brK=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.aj0=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bsb=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bsd=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bsj=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bsp=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bsx=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bt3=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bty=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fAw=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bx2=new A.eJ(null,D.fAw,B.f6,null,x.A)
D.fJw=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.bx4=new A.eJ(null,D.fJw,B.f6,null,x.A)
D.ajW=new A.bb(3e4)
D.bxC=new A.bb(38e5)
D.bym=new A.ik(0,10,0,10)
D.byv=new A.P(0,1,0,0)
D.byG=new A.ik(0,4,0,4)
D.byJ=new A.P(0,4,5,0)
D.bz_=new A.P(10,10,14,10)
D.bzb=new A.ik(10,4,10,4)
D.bzj=new A.ik(10,8,10,8)
D.bzk=new A.P(10,8,8,8)
D.bzN=new A.P(12,6,12,2)
D.bA2=new A.P(14,0,14,6)
D.bA6=new A.P(14,10,6,6)
D.bA7=new A.P(14,12,14,0)
D.bAb=new A.P(14,12,14,8)
D.bAe=new A.P(14,12,8,14)
D.bAi=new A.ik(14,14,14,14)
D.bAz=new A.P(14,6,14,40)
D.bAC=new A.P(14,8,14,30)
D.bB_=new A.P(16,2,16,10)
D.bB9=new A.P(16,6,16,30)
D.bBb=new A.P(16,6,16,8)
D.bBp=new A.P(18,10,18,4)
D.bBr=new A.P(18,12,18,0)
D.bBy=new A.P(18,14,12,4)
D.alp=new A.P(18,16,18,8)
D.bBP=new A.P(18,20,18,22)
D.alt=new A.P(18,24,18,24)
D.bBV=new A.P(18,30,18,30)
D.bCc=new A.P(20,10,12,20)
D.bCf=new A.P(20,11,20,11)
D.bCq=new A.P(20,18,16,18)
D.bCs=new A.P(20,18,20,6)
D.bDh=new A.P(24,32,24,28)
D.bDi=new A.P(24,36,24,32)
D.bDm=new A.P(26,26,24,14)
D.bDB=new A.P(2,4,2,8)
D.bDF=new A.P(30,0,30,0)
D.bDQ=new A.P(38,22,22,22)
D.alN=new A.P(40,24,24,24)
D.bDS=new A.ik(40,40,40,40)
D.bDU=new A.P(46,30,30,30)
D.alQ=new A.P(4,0,0,8)
D.bEk=new A.P(56,40,40,40)
D.bEo=new A.P(1.25,1.25,1.25,1.25)
D.bEp=new A.P(60,0,60,0)
D.bEt=new A.P(6,14,6,16)
D.bEx=new A.P(6,4,12,0)
D.bEB=new A.P(6,6,10,2)
D.bEI=new A.ik(7,3,7,3)
D.bFg=new A.P(5,1.5,5,1.5)
D.bFr=new A.P(6,2.5,6,2.5)
D.fRC=new A.y("Family Games",null,B.k8,null,null,null,null,null,null,null,null,null)
D.fz8=new A.y("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,I.aaa,null,null,null,null,null,null,null,null,null)
D.cFy=w([D.fRC,D.fz8],x.p)
D.buA=new A.fk(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.cFy,null)
D.bFJ=new A.by(1,B.ba,D.buA,null)
D.fVY=new A.y("Signature",null,B.n3,null,null,null,null,null,null,null,null,null)
D.bFM=new A.by(1,B.ba,D.fVY,null)
D.fOd=new A.y("MADE BY THE ONE WHO PLANTED THE TREE",null,T.tm,null,null,null,null,null,null,null,null,null)
D.bGk=new A.by(1,B.ba,D.fOd,null)
D.fT4=new A.y("Tell the AI what to fix",null,B.de,null,null,null,null,null,null,null,null,null)
D.bGB=new A.by(1,B.ba,D.fT4,null)
D.ftL=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fV2=new A.y("Worksheets",null,D.ftL,null,null,null,null,null,null,null,null,null)
D.ftW=new A.F(!0,E.af2,null,null,null,null,13,B.cA,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTU=new A.y("Track your project spending",null,D.ftW,null,null,null,null,null,null,null,null,null)
D.d2T=w([D.fV2,B.au,D.fTU],x.p)
D.buc=new A.fk(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.d2T,null)
D.bGH=new A.by(1,B.ba,D.buc,null)
D.foM=new A.F(!0,E.ke,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzH=new A.y("FAMILY LIBRARY",null,D.foM,null,null,null,null,null,null,null,null,null)
D.bGZ=new A.by(1,B.ba,D.fzH,null)
D.O_=new C.HY("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wd=new C.HZ(0,"male")
D.oi=new C.HZ(1,"female")
D.yG=new C.HZ(2,"unknown")
D.ul=new C.alm(0,"owner")
D.O0=new C.alm(1,"editor")
D.kM=new C.alm(2,"viewer")
D.anC=new A.a0(61199,"MaterialIcons",!1)
D.bLY=new A.a0(61504,"MaterialIcons",!1)
D.bLZ=new A.a0(61505,"MaterialIcons",!1)
D.bM0=new A.a0(61587,"MaterialIcons",!1)
D.bM7=new A.a0(61890,"MaterialIcons",!1)
D.bMZ=new A.a0(63034,"MaterialIcons",!0)
D.bNg=new A.a0(63153,"MaterialIcons",!1)
D.bNN=new A.a0(63429,"MaterialIcons",!1)
D.apP=new A.a0(984520,"MaterialIcons",!1)
D.bMw=new A.a0(62776,"MaterialIcons",!1)
D.bQ8=new A.ae(D.bMw,26,B.b1,null,null,null)
D.bKW=new A.a0(57648,"MaterialIcons",!1)
D.bQs=new A.ae(D.bKW,14,B.c,null,null,null)
D.bQJ=new A.ae(B.GY,17,null,null,null,null)
D.bQP=new A.ae(B.a1t,null,B.bP,null,null,null)
D.bRg=new A.ae(E.a1z,null,null,null,null,null)
D.bRj=new A.ae(B.j_,18,E.ke,null,null,null)
D.a1j=new A.a0(62044,"MaterialIcons",!1)
D.bRo=new A.ae(D.a1j,null,B.aW,null,null,null)
D.bRv=new A.ae(B.yT,18,B.c,null,null,null)
D.bSd=new A.ae(B.e5,16,null,null,null,null)
D.bSk=new A.ae(D.a1j,32,B.aW,null,null,null)
D.bSD=new A.ae(E.anD,18,B.cQ,null,null,null)
D.bTH=new A.ae(B.H9,22,B.ax,null,null,null)
D.bTT=new A.ae(B.e5,22,B.b1,null,null,null)
D.bU5=new A.ae(Z.a1o,22,B.c,null,null,null)
D.bUb=new A.ae(B.uw,52,B.c,null,null,null)
D.bUl=new A.ae(B.H9,30,B.ax,null,null,null)
D.bUE=new A.ae(B.a1E,null,B.c,null,null,null)
D.aqu=new A.ae(B.uH,22,B.c,null,null,null)
D.bUN=new A.ae(B.e5,17,null,null,null,null)
D.bV9=new A.ae(B.wt,26,B.cQ,null,null,null)
D.bVV=new A.ae(B.a1M,16,null,null,null,null)
D.bWG=new A.ae(B.uw,24,B.c,null,null,null)
D.bWL=new A.ae(B.Ot,20,B.rX,null,null,null)
D.bWQ=new A.ae(B.GW,null,B.bP,null,null,null)
D.bWY=new A.ae(B.j_,18,B.c,null,null,null)
D.bXC=new A.ae(B.cx,22,B.ac,null,null,null)
D.bYs=new A.ae(B.eb,16,B.ac,null,null,null)
D.bYE=new A.ae(D.a1j,20,B.aW,null,null,null)
D.aqU=new A.ae(B.hA,20,null,null,null,null)
D.bZ8=new A.ae(B.cx,18,D.kF,null,null,null)
D.bZp=new A.ae(B.z0,28,B.c,null,null,null)
D.bZz=new A.ae(B.Oj,null,B.fb,null,null,null)
D.bZT=new A.ae(B.z0,24,B.c,null,null,null)
D.c_k=new A.ae(B.uw,null,B.aW,null,null,null)
D.c_l=new A.ae(B.jY,20,B.cQ,null,null,null)
D.c_F=new A.ae(B.GY,16,null,null,null,null)
D.c1e=new A.e8(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jV,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eF,!0,null,null,null,null)
D.arB=new C.a5S(10,null)
D.c1K=new C.a5S(12,null)
D.c1L=new C.a5S(14,null)
D.djg=w([B.bv,B.aW,B.fi,B.b1],x.O)
D.c2W=new A.a9(B.ay,B.aE,B.x,D.djg,null,null)
D.bna=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bt9=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d_q=w([D.bna,D.bt9],x.O)
D.c36=new A.a9(B.b0,B.b6,B.x,D.d_q,null,null)
D.ddl=w([B.f8,B.fM,B.fi],x.O)
D.c3c=new A.a9(B.ay,B.aE,B.x,D.ddl,null,null)
D.ahL=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.be3=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d1B=w([D.ahL,D.be3],x.O)
D.c3L=new A.a9(B.b0,B.b6,B.x,D.d1B,null,null)
D.bhL=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aAP=w([D.bhL,D.ahL],x.O)
D.c44=new A.a9(B.ay,B.aE,B.x,D.aAP,null,null)
D.agz=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bkk=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dcr=w([D.agz,D.bkk],x.O)
D.c4J=new A.a9(B.a5,B.a8,B.x,D.dcr,null,null)
D.dqg=w([B.bB,B.nh],x.O)
D.c4L=new A.a9(B.b0,B.b6,B.x,D.dqg,null,null)
D.bn5=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.drc=w([D.bn5,D.kF,D.kF,K.YL],x.O)
D.dtI=w([0,0.07,0.9,1],x.n)
D.c5g=new A.a9(B.a5,B.a8,B.x,D.drc,D.dtI,null)
D.c5q=new A.a9(B.ay,B.aE,B.x,B.S3,null,null)
D.cYh=w([B.aD,D.lx],x.O)
D.c5t=new A.a9(B.a5,B.a8,B.x,D.cYh,null,null)
D.dpQ=w([B.b1,B.aW,B.bP],x.O)
D.c6r=new A.a9(B.ay,B.aE,B.x,D.dpQ,null,null)
D.caF=w([10,20,30],x.t)
D.ckB=w([-1,-0.4,0.3,1],x.n)
D.cs4=w([B.bv,B.b1,B.f8],x.O)
D.csc=w([B.bq,B.aD,B.jt],x.O)
D.cse=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.csV=w([30,140,262,360],x.n)
D.blB=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cyr=w([D.blB,E.ahp],x.O)
D.eic=new A.t(1,2)
D.f6T=new A.cW(B.aS,D.eic,3)
D.axH=w([D.f6T],x.F)
D.cFQ=w([B.hf,B.cf,B.fe],x.O)
D.cIz=w([B.bK,B.bs,B.bo],x.O)
D.bHx=new C.uD("classic","Classic leather","Gold-edged brown leather",D.aAP,E.ke,E.ke,"\u2766",B.K,!0,!1,!1,!1)
D.bda=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bs1=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d4A=w([D.bda,D.bs1],x.O)
D.aht=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bHs=new C.uD("ornate","Ornate gold","Double gold border and flourishes",D.d4A,D.aht,D.aht,"\u2726",B.K,!0,!0,!0,!1)
D.bhk=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bnW=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.cXb=w([D.bhk,D.bnW],x.O)
D.bHr=new C.uD("parchment","Parchment","Old paper with dark ink",D.cXb,D.FL,L.iU,"\u2767",B.K,!0,!1,!1,!0)
D.aeI=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bqh=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.do4=w([D.aeI,D.bqh],x.O)
D.bl4=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bpz=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bHu=new C.uD("minimal","Clean paper","Plain and elegant, like a printed book",D.do4,D.bl4,D.bpz,"",B.K,!0,!0,!1,!0)
D.bHw=new C.uD("midnight","Midnight","Deep blue with silver stars",I.aB7,B.cq,B.bN,"\u2727",B.K,!0,!0,!1,!1)
D.bHq=new C.uD("emerald","Emerald library","Green cloth, title on the left",W.ay5,E.ke,B.fU,"\u25c6",B.bj,!0,!1,!1,!1)
D.bqL=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dm2=w([B.ek,D.bqL],x.O)
D.bmj=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bnv=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bHv=new C.uD("rose","Rose vintage","Burgundy with rose-gold lettering",D.dm2,D.bmj,D.bnv,"\u2740",B.K,!0,!1,!0,!1)
D.dqO=w([B.cr,F.ni],x.O)
D.bHt=new C.uD("modern","Modern","Dark, bold, left-aligned",D.dqO,B.aJ,B.c,"",B.bj,!1,!0,!1,!1)
D.a3T=w([D.bHx,D.bHs,D.bHr,D.bHu,D.bHw,D.bHq,D.bHv,D.bHt],A.at("O<uD>"))
D.cLw=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dqB=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bHI=new C.ln('What does "Ubuntu" mean?',D.dqB,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.cYX=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bHL=new C.ln("In Swahili, what do we call a grandmother?",D.cYX,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.cYO=w(["Babu","Mama","Baba","Dada"],x.s)
D.bHG=new C.ln("In Swahili, what do we call a grandfather?",D.cYO,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d_1=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bHK=new C.ln("What is a sister called in Swahili?",D.d_1,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d41=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bHH=new C.ln("What is a brother called in Swahili?",D.d41,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.cYN=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bHS=new C.ln("Which word means father in Swahili?",D.cYN,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.drJ=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bHR=new C.ln('"Umoja ni nguvu" means...',D.drJ,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.doM=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bHT=new C.ln('"Haba na haba hujaza kibaba" teaches us...',D.doM,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d1J=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bHQ=new C.ln('The African saying "It takes a village to raise a child" means...',D.d1J,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.ds2=w(["The elders","The market","The river","The drum"],x.s)
D.bHM=new C.ln("Who is the traditional keeper of the family stories?",D.ds2,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cPG=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bHJ=new C.ln("Why do families sit round the fire at night?",D.cPG,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dqQ=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bHO=new C.ln('What does "Harambee" mean?',D.dqQ,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.d6O=w(["An elder","A baby","A market","A cow"],x.s)
D.bHN=new C.ln('"Mzee" is a respectful word for...',D.d6O,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dlU=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bHP=new C.ln('What does "Shikamoo" show?',D.dlU,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.ay0=w([D.bHI,D.bHL,D.bHG,D.bHK,D.bHH,D.bHS,D.bHR,D.bHT,D.bHQ,D.bHM,D.bHJ,D.bHO,D.bHN,D.bHP],x.J)
D.cU2=w([90,360],x.n)
D.cWJ=w([B.bP,B.bl],x.O)
D.bmV=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.cXn=w([D.aeI,D.bmV],x.O)
D.cY0=w([-1,-0.3,0.4,1],x.n)
D.cYT=w([0,0.45,0.72,0.92,1],x.n)
D.bhg=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.cZa=w([D.bhg,B.dd],x.O)
D.bf1=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.aja=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.cZI=w([B.dv,D.bf1,D.aja],x.O)
D.d_G=w([B.b8,B.jc,B.p_],x.O)
D.bhN=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bpq=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.beI=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d_L=w([D.bhN,D.bpq,D.beI],x.O)
D.d04=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d0e=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hmP=new C.add(78,424,48,44,56)
D.hmN=new C.add(214,396,34,34,42)
D.hmO=new C.add(442,452,56,50,64)
D.az_=w([D.hmP,D.hmN,D.hmO],A.at("O<add>"))
D.d0N=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bdY=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bjw=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dtE=w([D.agz,D.bdY,D.bjw],x.O)
D.bHy=new C.uE("leather","Leather",D.dtE,"vintage")
D.d7Q=w([B.d7,B.Mi,Ab.XY],x.O)
D.bHF=new C.uE("midnight","Midnight",D.d7Q,"starry")
D.d_H=w([B.ej,B.dY,B.l6],x.O)
D.bHE=new C.uE("forest","Forest",D.d_H,"story")
D.dvF=w([B.el,B.ek,B.jP],x.O)
D.bHB=new C.uE("burgundy","Burgundy",D.dvF,"royal")
D.cI7=w([B.aD,B.o9,B.nV],x.O)
D.bHC=new C.uE("royal","Royal",D.cI7,"royal")
D.d2e=w([B.bs,B.cr,F.ni],x.O)
D.bHz=new C.uE("charcoal","Charcoal",D.d2e,"geo")
D.dtN=w([B.cd,B.dH,B.xZ],x.O)
D.bHD=new C.uE("sunset","Sunset",D.dtN,"sunset")
D.duu=w([B.jc,B.FM,B.Y_],x.O)
D.bHA=new C.uE("ocean","Ocean",D.duu,"band")
D.zr=w([D.bHy,D.bHF,D.bHE,D.bHB,D.bHC,D.bHz,D.bHD,D.bHA],A.at("O<uE>"))
D.d2J=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d3k=w([B.al,B.aK,B.N],x.O)
D.d4F=w([B.ek,B.dY,B.d7,B.fV,B.y1,B.cQ,B.kh,B.e9,B.d0],x.O)
D.d4G=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.f6U=new A.cW(B.dm,B.dC,8)
D.d4R=w([D.f6U],x.F)
D.d5Y=w([B.c_,B.dH,B.kd],x.O)
D.bfV=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bjO=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bnR=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.d6d=w([D.bfV,G.ahT,D.bjO,D.bnR,D.aja],x.O)
D.d6t=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d6E=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bdl=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bja=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.d75=w([D.bdl,D.ag2,D.bja],x.O)
D.d7L=w([B.c_,B.hw],x.O)
D.d7R=w([G.na,B.i2,G.aeT,B.cI],x.O)
D.d9o=w([B.cI,G.na,B.i2,D.ly,B.cI],x.O)
D.d9Y=w([B.aT,B.vT,B.xO],x.O)
D.aA2=w(["True","False"],x.s)
D.eFl=new A.z(-0.65,0.6)
D.eRY=new A.z(-0.2,0.95)
D.eT2=new A.z(0.25,0.95)
D.eIP=new A.z(0.7,0.6)
D.eTC=new A.z(1,0.1)
D.daL=w([As.TS,D.eFl,D.eRY,D.eT2,D.eIP,D.eTC],x.G)
D.blP=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.brU=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bgT=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.daR=w([D.blP,D.brU,D.bgT],x.O)
D.daV=w([B.bM,B.c0,B.du,B.aT],x.O)
D.dbp=w([B.hZ,B.cd,B.tQ],x.O)
D.dbM=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dbX=w([B.f8,B.cQ],x.O)
D.bne=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dcm=w([D.bne,D.aeG],x.O)
D.dcx=w([B.cM,B.fs,B.hN],x.O)
D.dcI=w([B.aJ,B.bl,B.d7],x.O)
D.ddi=w([B.ep,B.cT,B.dY],x.O)
D.ddD=w([B.dF,B.d7,B.Mi],x.O)
D.ddH=w([B.bt,B.lZ,B.d0],x.O)
D.ddY=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bmu=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bkO=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.deg=w([D.bmu,D.afZ,D.bkO],x.O)
D.df1=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dg4=w([1,0,7,6,3,2],x.t)
D.a4Q=w(["leather","linen","plain","stars","rays"],x.s)
D.dgg=w([0.5,2,3.6],x.n)
D.dgN=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bPQ=new A.a0(985219,"MaterialIcons",!1)
D.bPl=new A.a0(983781,"MaterialIcons",!1)
D.aAu=w([B.a1t,B.hB,B.lI,B.i7,D.bPQ,B.Hk,B.qs,D.bPl,I.apD,B.Cv,B.qu,B.mN],A.at("O<a0>"))
D.a4U=w(["double","single","corners","none"],x.s)
D.bHn=new C.zh("Little Seed","\ud83c\udf31",0)
D.bHp=new C.zh("Young Listener","\ud83d\udc42",40)
D.bHo=new C.zh("Storyteller","\ud83e\ude98",120)
D.bHm=new C.zh("Village Pride","\ud83c\udfe1",300)
D.bHk=new C.zh("Keeper of Roots","\ud83c\udf33",700)
D.bHl=new C.zh("Elder of the Fire","\ud83d\udd25",1500)
D.aAw=w([D.bHn,D.bHp,D.bHo,D.bHm,D.bHk,D.bHl],A.at("O<zh>"))
D.dhV=w([B.dn,B.bn,B.e9],x.O)
D.di8=w([],x.C)
D.D8=w([],x.u)
D.aKz=new A.t(225,528)
D.eH0=new A.z(D.aKz,1)
D.eiY=new A.t(350,548)
D.eNg=new A.z(D.eiY,0.95)
D.aKu=new A.t(158,656)
D.eN9=new A.z(D.aKu,1.12)
D.ejK=new A.t(92,544)
D.eCz=new A.z(D.ejK,0.93)
D.ej0=new A.t(398,614)
D.eJb=new A.z(D.ej0,1.04)
D.eiP=new A.t(318,662)
D.ey2=new A.z(D.eiP,1.1)
D.a51=w([D.eH0,D.eNg,D.eN9,D.eCz,D.eJb,D.ey2],A.at("O<+(t,K)>"))
D.dk7=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dky=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dlB=w([B.cI,G.na,B.i2,D.ly,B.cI,B.i2],x.O)
D.dn2=w([B.aA,B.fs,B.fV],x.O)
D.dnk=w([-12,12],x.n)
D.dnn=w([-17,17],x.n)
D.dnF=w([-70,58],x.n)
D.dnH=w([-70,-30,20],x.n)
D.doK=w([B.bt,B.lZ,B.YW],x.O)
D.dp0=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dIJ=new C.lQ("construction","Construction","Jobsite & builds",B.yV)
D.dIQ=new C.lQ("house","Home Build","Houses & rooms",B.wo)
D.dIG=new C.lQ("grocery","Grocery","Store & pantry",B.a2l)
D.dIF=new C.lQ("calculator","Calculations","Math & estimates",B.OA)
D.dIO=new C.lQ("lumber","Materials","Lumber & supplies",B.OT)
D.dIC=new C.lQ("kitchen","Kitchen","Remodel & meals",A3.aoQ)
D.bPj=new A.a0(983756,"MaterialIcons",!1)
D.dIH=new C.lQ("landscape","Landscaping","Yard & garden",D.bPj)
D.dIB=new C.lQ("plumbing","Plumbing","Pipes & water",B.pm)
D.dIR=new C.lQ("electrical","Electrical","Wiring & power",B.hm)
D.dIz=new C.lQ("store","Retail Shop","Daily business",B.ld)
D.dIA=new C.lQ("paint_remodel","Paint & Remodel","Colors & walls",Ah.a1T)
D.bOK=new A.a0(983311,"MaterialIcons",!1)
D.dIN=new C.lQ("roofing","Roofing","Roofs & exteriors",D.bOK)
D.bPw=new A.a0(983986,"MaterialIcons",!1)
D.dIy=new C.lQ("warehouse","Warehouse","Storage & stock",D.bPw)
D.dIL=new C.lQ("vehicles","Vehicles","Fleet & transport",B.Hl)
D.bMy=new A.a0(62785,"MaterialIcons",!1)
D.dIE=new C.lQ("farm","Farm","Crops & livestock",D.bMy)
D.dID=new C.lQ("restaurant","Restaurant","Food & catering",B.wx)
D.dIK=new C.lQ("tools","Tools","Workshop gear",B.Hg)
D.dIP=new C.lQ("wallet","Cash & Wallet","Quick spending",B.jY)
D.bNI=new A.a0(63395,"MaterialIcons",!1)
D.dIM=new C.lQ("concrete","Concrete","Foundation work",D.bNI)
D.dII=new C.lQ("blueprint","Blueprint","Plans & design",Ao.ao7)
D.a5n=w([D.dIJ,D.dIQ,D.dIG,D.dIF,D.dIO,D.dIC,D.dIH,D.dIB,D.dIR,D.dIz,D.dIA,D.dIN,D.dIy,D.dIL,D.dIE,D.dID,D.dIK,D.dIP,D.dIM,D.dII],A.at("O<lQ>"))
D.dpw=w([B.bu,B.bn],x.O)
D.dqh=w([B.iw,B.o2,B.dP],x.O)
D.agL=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.ahH=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bl8=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bcT=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aBF=w([D.agL,D.ahH,D.bl8,D.bcT],x.O)
D.drs=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a5x=w(["top","middle","bottom"],x.s)
D.dsS=w([B.cp,B.bl,B.d7],x.O)
D.aBY=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b6E=new A.ac(0,B.G,B.aS,B.I,14)
D.aC0=w([D.b6E],x.V)
D.bk2=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dtx=w([D.afj,D.YV,D.bk2],x.O)
D.dty=w([B.be,B.cT,B.dY],x.O)
D.eix=new A.t(24,-8)
D.ejg=new A.t(48,0)
D.eit=new A.t(24,6)
D.dvc=w([B.I,D.eix,D.ejg,D.eit],x.g)
D.dvB=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.eff={top:0,middle:1,bottom:2}
D.dyN=new A.bu(D.eff,["Top","Middle","Bottom"],x.r)
D.eeT={double:0,single:1,corners:2,none:3}
D.dyT=new A.bu(D.eeT,["Double line","One line","Corners","None"],x.r)
D.efZ={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dAn=new A.bu(D.efZ,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dAA=new A.bu(B.hT,[],A.at("bu<G,+(n,n)>"))
D.ef8={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Dm=new A.bu(D.ef8,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.at("bu<n,G>"))
D.dD7=new H.Nl(32,null)
D.dD8=new H.Nl(40,null)
D.dD9=new H.Nl(46,null)
D.aK2=new C.atf(null)
D.eht=new A.t(0,40)
D.ehu=new A.t(0,412)
D.ehw=new A.t(0,900)
D.ehH=new A.t(0,-74)
D.ehK=new A.t(100,300)
D.ehL=new A.t(10,14)
D.ehO=new A.t(10,-10)
D.ehS=new A.t(10,-46)
D.ehT=new A.t(10,-58)
D.ehU=new A.t(116,442)
D.ehV=new A.t(11,-1)
D.ehW=new A.t(11,-10)
D.ehX=new A.t(11,-21)
D.aKp=new A.t(11,-60)
D.ei2=new A.t(14,-2)
D.ei3=new A.t(150,520)
D.a7v=new A.t(150,592)
D.ei6=new A.t(15,-15)
D.ei7=new A.t(16,-1)
D.eib=new A.t(190,444)
D.eie=new A.t(1,5)
D.eim=new A.t(21,-78)
D.ein=new A.t(222,615)
D.Jf=new A.t(225,300)
D.a7x=new A.t(225,574)
D.eiw=new A.t(24,-52)
D.eiy=new A.t(250,210)
D.aKD=new A.t(300,0)
D.eiL=new A.t(300,440)
D.eiO=new A.t(318,476)
D.eiR=new A.t(324,144)
D.a7A=new A.t(332,150)
D.eiT=new A.t(335,585)
D.eiU=new A.t(338,140)
D.eiV=new A.t(340,158)
D.eiX=new A.t(34,-60)
D.DP=new A.t(36,-24)
D.eiZ=new A.t(372,470)
D.ej_=new A.t(390,455)
D.ej8=new A.t(42,468)
D.ej9=new A.t(431,510)
D.eja=new A.t(431,520)
D.ejb=new A.t(45,-92)
D.ejc=new A.t(46,20)
D.ejd=new A.t(46,-92)
D.eje=new A.t(46,-94)
D.ejf=new A.t(47,-4)
D.ejh=new A.t(48,-4)
D.ejp=new A.t(4,-26)
D.ejy=new A.t(60,455)
D.ejF=new A.t(8,14)
D.ejJ=new A.t(8,-76)
D.ejL=new A.t(95,575)
D.ejM=new A.t(98,-24)
D.ejO=new A.t(9,-2)
D.ejP=new A.t(9,-58)
D.aKM=new A.t(9,-79)
D.ejQ=new A.t(9,-9)
D.eks=new A.t(16.5,8)
D.eku=new A.t(3.2,0)
D.ekw=new A.t(-16.5,8)
D.ekD=new A.t(16.5,2)
D.ekG=new A.t(-3.2,0)
D.ekP=new A.t(9.5,6)
D.ekT=new A.t(-10,14)
D.ekU=new A.t(-10,-12)
D.ekV=new A.t(-10,-58)
D.ekW=new A.t(-11,-1)
D.ekX=new A.t(-11,-10)
D.ekZ=new A.t(-11,-60)
D.el_=new A.t(-12,-14)
D.el0=new A.t(-12,-16)
D.el7=new A.t(-14,-2)
D.ela=new A.t(-15,-15)
D.elb=new A.t(-15,-3)
D.eld=new A.t(-16,-1)
D.elu=new A.t(-24,-52)
D.elB=new A.t(-2,-34)
D.elC=new A.t(-2,-38)
D.elE=new A.t(-30,-100)
D.a7B=new A.t(-36,-24)
D.elP=new A.t(-4,-26)
D.elR=new A.t(-4,-6)
D.em_=new A.t(-8,-3)
D.em0=new A.t(-8,-48)
D.em3=new A.t(-9,-2)
D.em5=new A.t(-9,-58)
D.em6=new A.t(-9,-79)
D.em7=new A.t(-9,-9)
D.em9=new A.t(-9.5,6)
D.emn=new A.t(-16.5,2)
D.fGU=new A.y("Write a new book",null,B.ht,null,B.K,null,null,null,null,null,null,null)
D.emX=new A.D(B.kk,D.fGU,null)
D.fVw=new A.y("Tap to go on",null,B.vo,null,null,null,null,null,null,null,null,null)
D.eni=new A.D(B.l7,D.fVw,null)
D.aq2=new A.ae(B.hQ,18,B.c,null,null,null)
D.fA2=new A.y("Add",null,B.lq,null,null,null,null,null,null,null,null,null)
D.db8=w([D.aq2,B.qU,D.fA2],x.p)
D.f4s=new A.ca(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.db8,null)
D.enl=new A.D(B.nt,D.f4s,null)
D.enm=new A.D(E.aki,A9.Xo,null)
D.ftG=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDa=new A.y("New Project",null,D.ftG,null,null,null,null,null,null,null,null,null)
D.dfo=w([D.aq2,B.ad,D.fDa],x.p)
D.f4v=new A.ca(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.dfo,null)
D.enA=new A.D(B.ir,D.f4v,null)
D.fFH=new A.y("Choose your header",null,A1.tj,null,null,null,null,null,null,null,null,null)
D.enV=new A.D(B.hO,D.fFH,null)
D.bc7=new A.fl(2.2,null,null,null,null,B.cQ,null,null,null,null)
D.f9L=new A.a4(22,22,D.bc7,null)
D.bac=new A.cf(B.A,null,null,D.f9L,null)
D.eo_=new A.D(B.a_a,D.bac,null)
D.bAs=new A.P(14,2,14,6)
D.fTD=new A.y("The top of your book. Tap a design to see it.",null,Q.tk,null,null,null,null,null,null,null,null,null)
D.eo0=new A.D(D.bAs,D.fTD,null)
D.fEQ=new A.y("\ud83c\udfc6 A new record!",null,B.fS,null,null,null,null,null,null,null,null,null)
D.eo2=new A.D(B.l7,D.fEQ,null)
D.epC=new A.iY(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.epF=new A.iY(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aLm=new A.iY(1,0.9607843137254902,0.48627450980392156,0)
D.Jo=new A.iY(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.A1=new A.iY(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.epL=new A.iY(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hoT=new C.biI(null)
D.bvm=new A.mA(D.hoT,null,B.aw,null,null)
D.aP_=new A.cN(0,0,0,0,null,null,D.bvm,null)
D.fA4=new A.y("\ud83c\udfc5",null,B.a9O,null,null,null,null,null,null,null,null,null)
D.eu9=new A.cN(null,0,-34,null,null,null,D.fA4,null)
D.eCe=new A.z("E","Sit by the fire again")
D.eHP=new A.z("C","Good Learner")
D.eLd=new A.z("D","Still Growing")
D.ePM=new A.z(-42,42)
D.eR6=new A.z("B","Faithful Listener")
D.eT4=new A.z("A","Keeper of the Family")
D.eW5=new A.b7(-17,0.7,0)
D.eWC=new A.b7(-8,0.95,1.3)
D.eXB=new A.b7(18,0.65,5.2)
D.eXD=new A.b7(0,1.15,2.6)
D.eXV=new A.b7(9,0.9,3.9)
D.eZC=new A.cw([0,0,1,1])
D.aQs=new A.a3(0,0,520,160)
D.f1w=new A.a3(10,612,440,618)
D.f1x=new A.a3(10,612,440,628)
D.f1A=new A.a3(14,-64,34,-12)
D.f1D=new A.a3(300,336,350,348)
D.a8u=new A.a3(30,96,420,346)
D.f1E=new A.a3(30,-9,46,1)
D.f1F=new A.a3(4,2,11,14)
D.f1H=new A.a3(-8,-12.5,8,-7)
D.f1I=new A.a3(-16.5,-21,16.5,1)
D.f1J=new A.a3(60,342,88,348)
D.TT=new A.a3(66,-66,94,-36)
D.f1K=new A.a3(6,8,10,14)
D.f1N=new A.a3(95,343,115,348)
D.f1O=new A.a3(-6.5,-74,6.5,-58)
D.f1U=new A.a3(-100,-74,100,-12)
D.f1V=new A.a3(-10,8,-6,14)
D.f1W=new A.a3(-11,2,-4,14)
D.f1X=new A.a3(-11,-70,11,-56)
D.f23=new A.a3(-13,-24,13,-4)
D.f29=new A.a3(-15,-21,15,0)
D.f2c=new A.a3(-16,-21,16,1)
D.f2d=new A.a3(-16,-21,16,2)
D.f2g=new A.a3(-16,-26,16,-6)
D.f2q=new A.a3(-230,-26,230,26)
D.f2O=new A.a3(-38,-26,12,-6)
D.f2S=new A.a3(-3,-70,3,-63)
D.f2T=new A.a3(-44,-22,44,0)
D.f2V=new A.a3(-46,-9,-30,1)
D.aQw=new A.a3(-80,-190,80,20)
D.f31=new A.a3(-8,-26,40,-6)
D.f32=new A.a3(-98,-80,92,-75)
D.f33=new A.a3(-9,-15,9,-9)
D.fTb=new A.y("Let the AI write it from your tree",null,B.iu,null,B.K,null,null,null,null,null,null,null)
D.bIp=new A.dr(1,B.cn,D.fTb,null)
D.d7K=w([E.a2R,B.ad,D.bIp],x.p)
D.f47=new A.ca(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.d7K,null)
D.fzI=new A.y("Save member",null,B.ce,null,null,null,null,null,null,null,null,null)
D.dnp=w([D.aqU,B.ad,D.fzI],x.p)
D.f4h=new A.ca(B.aM,B.b9,B.i,B.m,null,B.p,null,0,D.dnp,null)
D.bTZ=new A.ae(B.i6,14,B.b1,null,null,null)
D.fnk=new A.F(!0,B.b1,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDA=new A.y("Cashier",null,D.fnk,null,null,null,null,null,null,null,null,null)
D.dfV=w([D.bTZ,B.bm,D.fDA],x.p)
D.f4k=new A.ca(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.dfV,null)
D.fzJ=new A.y("Transfer & settings",null,B.de,null,null,null,null,null,null,null,null,null)
D.bGr=new A.by(1,B.ba,D.fzJ,null)
D.d_a=w([D.aqu,B.as,D.bGr],x.p)
D.f4l=new A.ca(B.aM,B.e,B.i,B.m,null,B.p,null,0,D.d_a,null)
D.f8r=new A.av(16,40)
D.f8w=new A.av(22,64)
D.f8D=new A.av(280,88)
D.f9r=new A.a4(30,null,null,null)
D.fyP=new A.y("The teacher is writing\u2026",null,B.Al,null,null,null,null,null,null,null,null,null)
D.bbl=new A.cf(B.A,null,null,D.fyP,null)
D.hiW=new A.bR("w",x.W)
D.f9R=new A.a4(null,56,D.bbl,D.hiW)
D.faE=new A.hK(5,8,8,1,null)
D.faM=new A.hK(2,12,12,1.05,null)
D.fDg=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fbu=new A.b2(D.fDg,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fDv=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aSy=new A.b2(D.fDv,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fLS=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fbY=new A.b2(D.fLS,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fWz=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fc2=new A.b2(D.fWz,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fFF=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fc9=new A.b2(D.fFF,null,null,null,null,null,null,null,null,null,null,null,null,B.fY,!1,null,null,null,B.t,null)
D.fTQ=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aSC=new A.b2(D.fTQ,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fFD=new A.y("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fcz=new A.b2(D.fFD,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fAl=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fcB=new A.b2(D.fAl,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fJk=new A.y("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fcH=new A.b2(D.fJk,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fXj=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fdm=new A.b2(D.fXj,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fS5=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fdL=new A.b2(D.fS5,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fWD=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fdO=new A.b2(D.fWD,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fNw=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fdQ=new A.b2(D.fNw,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fHw=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fdR=new A.b2(D.fHw,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fHx=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.feR=new A.b2(D.fHx,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fDi=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.ff8=new A.b2(D.fDi,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fFh=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.ffs=new A.b2(D.fFh,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fMZ=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.ffI=new A.b2(D.fMZ,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fIl=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.ffJ=new A.b2(D.fIl,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fsn=new A.F(!0,B.bE,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhl=new A.es("\u2665",null,null,B.cK,null,null,null,null,null,null,D.fsn)
D.fpC=new A.F(!0,B.aP,null,null,null,null,28,B.U,B.cD,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhB=new A.es("Today: how well do you know the family?",null,null,B.cK,null,null,null,null,null,null,D.fpC)
D.fhS=new A.F(!0,B.pS,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiZ=new A.F(!0,D.kF,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjo=new A.F(!0,D.kF,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjs=new A.F(!0,B.cI,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjB=new A.F(!0,D.fr,null,null,null,null,15,B.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjM=new A.F(!0,D.fr,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk5=new A.rW(!0,B.t6,null,null,null,null,B.dx,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkl=new A.F(!0,B.cI,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fko=new A.F(!0,D.kF,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkp=new A.F(!0,B.cI,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fku=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkx=new A.F(!0,B.cI,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl1=new A.F(!0,B.b1,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl2=new A.F(!0,B.ac,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl4=new A.F(!0,B.aP,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flw=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTM=new A.F(!0,B.aR,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTO=new A.F(!0,D.lx,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flV=new A.F(!0,B.cI,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a9T=new A.rW(!0,B.To,null,null,null,null,B.dx,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.UU=new A.F(!0,B.cI,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm4=new A.F(!0,B.N,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm9=new A.F(!0,D.fr,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmx=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnF=new A.F(!0,D.fr,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTZ=new A.F(!0,D.fr,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnY=new A.F(!0,B.ac,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo8=new A.F(!0,D.fr,null,null,null,null,null,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foa=new A.F(!0,null,null,null,null,null,8,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fog=new A.F(!0,L.iU,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aU2=new A.F(!0,D.fr,null,null,null,null,14.5,B.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpc=new A.F(!0,D.fr,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpv=new A.F(!0,D.fr,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpx=new A.F(!0,B.N,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpz=new A.F(!0,B.cI,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpW=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A8.Ic,null,null,null)
D.aUh=new A.F(!0,D.fr,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqj=new A.F(!0,B.N,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqF=new A.F(!0,B.fb,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr2=new A.F(!0,B.bP,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr6=new A.F(!0,B.bB,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fri=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frl=new A.F(!0,D.fr,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frt=new A.F(!0,D.FL,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frC=new A.F(!0,B.b1,null,null,null,null,13,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs1=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs7=new A.F(!0,B.ac,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.D_,null,null,null)
D.fsx=new A.F(!0,B.cI,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsG=new A.F(!0,B.cQ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsT=new A.F(!0,D.ly,null,null,null,null,13,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUB=new A.F(!0,D.fr,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Kp=new A.F(!0,B.cI,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUD=new A.F(!0,B.cI,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.D_,null,null,null)
D.ftc=new A.F(!0,B.bP,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftg=new A.F(!0,G.na,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftE=new A.F(!0,B.b1,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftV=new A.F(!0,D.fr,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuh=new A.F(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuF=new A.F(!0,D.fr,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv7=new A.F(!0,D.fr,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvd=new A.F(!0,B.al,null,null,null,null,11.5,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvm=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aan=new A.F(!0,B.al,null,null,null,null,12,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aap=new A.F(!0,D.lx,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx4=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxm=new A.F(!0,B.aP,null,null,null,null,27,B.U,B.cD,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxu=new A.F(!0,L.iU,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxC=new A.F(!0,L.iU,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy5=new A.y("Time:",null,B.hc,null,null,null,null,null,null,null,null,null)
D.fyr=new A.y("\ud83c\udfae",null,I.aae,null,null,null,null,null,null,null,null,null)
D.fys=new A.y("Themes",null,B.pB,null,null,null,null,null,null,null,null,null)
D.fyX=new A.y("\ud83c\udfb2",null,B.x6,null,null,null,null,null,null,null,null,null)
D.fz0=new A.y("Delete this game?",null,B.iu,null,null,null,null,null,null,null,null,null)
D.fz7=new A.y("Add Item",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fnT=new A.F(!0,B.N,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzx=new A.y("Debt receipt",null,D.fnT,null,B.K,null,null,null,null,null,null,null)
D.aUR=new A.F(!0,B.al,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzQ=new A.y("Person who owes",null,D.aUR,null,null,null,null,null,null,null,null,null)
D.fAO=new A.y("Notes",null,B.aa1,null,null,null,null,null,null,null,null,null)
D.fBe=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fmO=new A.F(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBh=new A.y("Share",null,D.fmO,null,null,null,null,null,null,null,null,null)
D.fCd=new A.y("Move your family trees",null,K.aal,null,null,null,null,null,null,null,null,null)
D.fCS=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fDu=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fDS=new A.y("SAVE",null,D.Kp,null,null,null,null,null,null,null,null,null)
D.fEu=new A.y("The round button is the right answer.",null,Q.Em,null,null,null,null,null,null,null,null,null)
D.fEP=new A.y("Remove this book?",null,B.fS,null,null,null,null,null,null,null,null,null)
D.ftB=new A.F(!0,B.cI,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.D_,null,null,null)
D.fFm=new A.y("Fireside Stories",null,D.ftB,null,null,null,null,null,null,null,null,null)
D.aVl=new A.y("Download",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fG3=new A.y("What should the AI do?",null,B.de,null,null,null,null,null,null,null,null,null)
D.fms=new A.F(!0,D.lx,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGi=new A.y("REPORT CARD",null,D.fms,null,null,null,null,null,null,null,null,null)
D.fH_=new A.y("Calabash Catch",null,B.Ks,null,null,null,null,null,null,null,null,null)
D.fHs=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fHT=new A.y("\ud83c\udfe1",null,B.El,null,null,null,null,null,null,null,null,null)
D.fIA=new A.y("Ribbon bookmark",null,B.jp,null,null,null,null,null,null,null,null,null)
D.fv6=new A.F(!0,B.b1,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ3=new A.y("NGMY.ORG",null,D.fv6,null,B.K,null,null,null,null,null,null,null)
D.fKn=new A.y("Scan family tree QR",null,B.cz,null,null,null,null,null,null,null,null,null)
D.frm=new A.F(!0,B.c,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL7=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.frm,null,B.K,null,null,null,null,null,null,null)
D.fMl=new A.y("Delete",null,B.UN,null,null,null,null,null,null,null,null,null)
D.fMm=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fMt=new A.y("Thumbnail",null,B.pB,null,null,null,null,null,null,null,null,null)
D.fN4=new A.y("Save the cover",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fN9=new A.y("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.x8,null,B.K,null,null,null,null,null,null,null)
D.fNx=new A.y("Your photos",null,B.pB,null,null,null,null,null,null,null,null,null)
D.fNM=new A.y("Create Project",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fO8=new A.y("\u2b50 stars",null,B.V0,null,null,null,null,null,null,null,null,null)
D.fOm=new A.y("Design your cover",null,A1.tj,null,null,null,null,null,null,null,null,null)
D.fOs=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fOv=new A.y("PICTURE",null,M.vs,null,null,null,null,null,null,null,null,null)
D.fOx=new A.y("\ud83c\udfaf",null,D.Vf,null,null,null,null,null,null,null,null,null)
D.fOS=new A.y("Paid",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fOU=new A.y("You can undo it right after.",null,Q.Em,null,null,null,null,null,null,null,null,null)
D.fPq=new A.y("Print",null,B.vp,null,null,null,null,null,null,null,null,null)
D.fPP=new A.y("Amount owed",null,D.aUR,null,null,null,null,null,null,null,null,null)
D.fQ3=new A.y("Got it",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fQF=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fQI=new A.y("Add to budget",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fR9=new A.y("Debtor signature",null,B.aa1,null,null,null,null,null,null,null,null,null)
D.fRj=new A.y("Change icon",null,B.aa0,null,null,null,null,null,null,null,null,null)
D.fS6=new A.y("MADE BY THE SYSTEM, FROM YOUR TREE",null,T.tm,null,null,null,null,null,null,null,null,null)
D.fSy=new A.y("Family tree QR",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fSE=new A.y("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.Ve,null,null,null,null,null,null,null,null,null)
D.fT1=new A.y("Download",null,B.vp,null,null,null,null,null,null,null,null,null)
D.fT2=new A.y("The person who planted this tree has not made a game yet.",null,B.x5,null,null,null,null,null,null,null,null,null)
D.fT6=new A.y("Change",null,B.pB,null,null,null,null,null,null,null,null,null)
D.fTW=new A.y("Clear all",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fTZ=new A.y("WHAT SHOULD IT CHANGE?",null,M.vs,null,null,null,null,null,null,null,null,null)
D.fUy=new A.y("COLOUR",null,M.vs,null,null,null,null,null,null,null,null,null)
D.fUM=new A.y("Do it",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fUP=new A.y("Create Tree",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fUY=new A.y("Give me another clue",null,D.Kp,null,null,null,null,null,null,null,null,null)
D.fVS=new A.y("Create Family Tree",null,B.f4,null,null,null,null,null,null,null,null,null)
D.fW1=new A.y("THE TEACHER EXPLAINS THESE",null,T.tm,null,null,null,null,null,null,null,null,null)
D.fhR=new A.F(!0,E.ke,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fW7=new A.y("Write the first page myself",null,D.fhR,null,null,null,null,null,null,null,null,null)
D.fWG=new A.y("Use this header",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fWN=new A.y("Create Project",null,E.aUy,null,null,null,null,null,null,null,null,null)
D.hk9=new C.abT(1,"header")
D.abp=new C.abT(2,"projects")
D.hka=new C.abT(3,"cashier")
D.abq=new C.abT(4,"familyTree")
D.hxz=new C.cDb(0,"start")
D.hxA=new C.cDc(0,"start")
D.hky=new C.YW(null)
D.hlx=new C.Zo(null)
D.dAx=new A.bu(B.hT,[],A.at("bu<n,Ga>"))
D.diw=w([],x.dE)
D.dix=w([],x.M)
D.hm3=new C.bfT(D.dAx,D.diw,D.dix,0,0,null,null)
D.aZt=new C.a_e(0,"intro")
D.aZu=new C.a_e(1,"countdown")
D.abE=new C.a_e(2,"ask")
D.W7=new C.a_e(3,"reveal")
D.aZv=new C.a_e(4,"end")
D.hoV=new C.t3(F.FW,D.ly,B.cI,F.lz,5,!1,!1,!1,0,null)
D.hoW=new C.t3(F.FW,B.el,B.cI,B.bO,2,!0,!0,!1,2,B.cI)
D.hoX=new C.t3(B.ob,B.cQ,B.cI,F.lz,2,!0,!1,!1,2,B.aA)
D.hoY=new C.t3(F.FW,B.dF,B.cI,F.lz,5,!1,!1,!1,1,null)
D.hoZ=new C.t3(F.Z7,D.ahH,B.cI,F.lz,4,!0,!1,!0,0,null)
D.aZy=new C.t3(F.Z7,B.dH,B.cI,F.lz,3,!0,!1,!0,2,null)
D.aZz=new C.t3(F.mF,D.ly,B.c,F.lz,0,!1,!1,!0,0,null)
D.aZA=new C.t3(B.ob,B.aD,B.cI,B.bO,2,!0,!0,!1,2,B.dH)
D.aZB=new C.t3(B.ob,G.na,B.i2,F.lz,5,!1,!1,!0,3,null)
D.hp_=new C.t3(B.ob,B.dH,B.cI,F.lz,0,!0,!1,!1,0,B.aD)
D.aZC=new C.t3(F.FW,B.el,B.cI,B.bO,1,!1,!0,!1,1,null)
D.aZD=new C.t3(F.Fs,B.aA,B.aD,F.lz,4,!0,!1,!0,2,null)
D.hp0=new C.t3(F.mF,B.aA,B.el,F.lz,3,!0,!1,!1,0,null)
D.hp1=new C.t3(B.ob,B.dF,B.cI,B.bO,1,!1,!0,!1,1,null)
D.hp2=new C.t3(F.Fs,D.agL,B.c,F.lz,5,!1,!1,!0,0,null)
D.hpG=new C.a_N(null)
D.hxI=new C.aff(0,"still")
D.Wu=new C.aff(1,"walk")
D.abY=new C.aff(2,"pound")
D.abZ=new C.aff(3,"drum")
D.hta=new C.a14(0,"greet")
D.b_2=new C.a14(1,"teach")
D.ac_=new C.a14(2,"ask")
D.htb=new C.a14(3,"feedback")
D.b_3=new C.a14(4,"end")
D.Wz=new C.a1n(0,"intro")
D.WA=new C.a1n(1,"asking")
D.AI=new C.a1n(2,"reacting")
D.ac9=new C.a1n(3,"driving")
D.aca=new C.a1n(4,"arrived")
D.acd=new C.aKN(0,"projects")
D.b_r=new C.aKN(1,"cashier")
D.hvd=new C.aKN(2,"familyTree")})()};
(a=>{a["v02plP+ZrOoDJKaS2QM5KKWCDIo="]=a.current})($__dart_deferred_initializers__);