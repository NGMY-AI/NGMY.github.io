((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,P,A_,S,A8,L,H,E,T,A9,Q,Aa,Ab,Ac,A0,Ad,Ae,R,Af,A1,Ag,Ah,Ai,M,A2,Aj,A3,A4,A5,Ak,A6,Al,G,Am,An,Ao,A7,Ap,U,O,Aq,V,Ar,As,W,X,F,At,I,K,Y,C={
bFM(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bFM=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vW(null,""),$async$bFM)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nm(b1)
s=A.c0(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dt(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cS(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.J)(h),++d){a0=h[d]
f.push(A.I(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.X.aw(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.rh(t,a1,B.i3,"book",E.GG),$async$bFM)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.RA(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.LY(l)?y.k:y.y)
for(j=J.a7(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cD
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a3J(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFM,v)},
aib(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aib=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vW(null,""),$async$aib)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nm(b6)
s=x.S
r=A.cW(c1,0,A.dA(4,"count",s),A.U(c1).c)
q=H.a3v(new A.N(r,new C.fOF(),r.$ti.k("N<ak.E,n>")).aO(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fOE(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.X.aw(b7,null)+"\nAllowed values: style one of "+B.d.aO(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aib)
case 6:l=c5
k=H.RA(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.apK(s,D.dEG,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
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
a4=B.d.dt(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.J)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.I(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.X.aw(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aib)
case 10:l=c5
k=l==null?null:H.RA(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.dd(a8,d),a5=J.aT(a2.a),a2=a2.$ti,a7=new A.kK(a5,a2.k("kK<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
b0=J.a7(a9)
b1=A.aJ(b0.h(a9,"index"))
i=b1==null?null:B.i.M(b1)
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
case 9:if(h.a!==0){s=h.$ti.k("b7<2>")
p=A.cF(new A.b7(h,s),new C.fOG(),s.k("M.E"),p)
p=H.a3v(A.pJ(p,3,A.a4(p).k("M.E")).aO(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cx<1>")
b4=A.C(new A.cx(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.J)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a3J(s,b9),$async$aib)
case 13:b5=c5
for(s=J.a7(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.apK(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aib,v)},
hFD(d,e,f){return A.cg(null,B.w.j(0.65),!1,null,new C.fYe(e,f),d,null,!0,!0,x.g2)},
apK:function apK(d,e,f){this.a=d
this.b=e
this.c=f},
fOF:function fOF(){},
fOE:function fOE(d){this.a=d},
fOG:function fOG(){},
fYe:function fYe(d,e){this.a=d
this.b=e},
bDA(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bDA=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aV(b1,new C.fBM())){u=null
w=1
break}t=B.d.cE(b1,new C.fBN())
s=$.R()
r=new A.q0(new A.pC())
q=A.zx(r,D.aRN)
p=A.K()
p.r=B.c.gp(0)
q.aq(D.aRN,p)
o=A.K()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.a9
o.d=B.bu
o.e=B.dT
n=new C.fBS(t)
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
s=$.R()
p=A.a([],x.v)
a3=new A.aG(s.r,B.ai,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.J)(b1),++i){h=b1[i]
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
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.J)(b1),++i){h=b1[i]
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
return A.b(r.o3().xG(520,160),$async$bDA)
case 4:w=3
return A.b(b3.hr(B.hl),$async$bDA)
case 3:b0=b3
u=b0==null?null:J.eT(B.dQ.gaU(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDA,v)},
fMl(d){return C.ikO(d)},
ikO(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fMl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bjB()
n=d.x!=null&&d.zL(null).length===0
if(d.x!=null)t=n?D.Ar:D.JL
else t=d.gUB()?D.JL:D.aMF
w=3
return A.b(C.bDA(d.ax),$async$fMl)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aop(s)
r=A.a5v(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aMF}else{p.c=C.xn(q,!0)
p.b=n?D.Ar:D.JL}r.a45(A.h7Q(new C.fMn(p,d,new C.fMo(),t,n,o),null,D.bGH,B.xb))
u=r.jI(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fMl,v)},
fT2(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fT2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fMl(d),$async$fT2)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aB(q,0,40)
u=Ae.Hw(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fT2,v)},
fBM:function fBM(){},
fBN:function fBN(){},
fBS:function fBS(d){this.a=d},
fMo:function fMo(){},
fMn:function fMn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fMm:function fMm(){},
fYH(d,e){var w=0,v=A.j(x.H)
var $async$fYH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,B.w.j(0.55),!0,null,new C.fYL(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fYH)
case 2:return A.h(null,v)}})
return A.i($async$fYH,v)},
bGd(d,e,f,g){return C.it0(d,e,f,g)},
it0(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bGd=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gan(e.split(",")):e
r=B.cK.aN(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.T(D.fln)
w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.fYD(g,r,f),d,null,!0,!0,x.H),$async$bGd)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bGd,v)},
fYM(d,e){var w=0,v=A.j(x.H)
var $async$fYM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,null,!0,null,new C.fYP(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fYM)
case 2:return A.h(null,v)}})
return A.i($async$fYM,v)},
b_O:function b_O(d,e){this.c=d
this.a=e},
c7Z:function c7Z(){},
bcZ:function bcZ(d,e){this.b=d
this.a=e},
fYL:function fYL(d,e){this.a=d
this.b=e},
fYI:function fYI(d){this.a=d},
fYJ:function fYJ(d,e,f){this.a=d
this.b=e
this.c=f},
fYK:function fYK(d,e){this.a=d
this.b=e},
fYD:function fYD(d,e,f){this.a=d
this.b=e
this.c=f},
fYB:function fYB(d){this.a=d},
fYC:function fYC(d,e,f){this.a=d
this.b=e
this.c=f},
fYP:function fYP(d,e){this.a=d
this.b=e},
fYN:function fYN(d){this.a=d},
fYO:function fYO(d,e,f){this.a=d
this.b=e
this.c=f},
fGF(d,e){var w=0,v=A.j(x.y),u,t
var $async$fGF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3g(d),$async$fGF)
case 3:t=g
J.nT(t,new C.fGG(e))
u=A.aiP(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGF,v)},
fGG:function fGG(d){this.a=d},
apW:function apW(d,e,f){this.c=d
this.d=e
this.a=f},
aED:function aED(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dQk:function dQk(d,e){this.a=d
this.b=e},
dQ5:function dQ5(d,e){this.a=d
this.b=e},
dQ8:function dQ8(d,e,f){this.a=d
this.b=e
this.c=f},
dQ7:function dQ7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQ6:function dQ6(d,e){this.a=d
this.b=e},
dQ9:function dQ9(d,e){this.a=d
this.b=e},
dQ3:function dQ3(){},
dQ4:function dQ4(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dQ2:function dQ2(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dPO:function dPO(d){this.a=d},
dPP:function dPP(d,e,f){this.a=d
this.b=e
this.c=f},
dPQ:function dPQ(d,e){this.a=d
this.b=e},
dPN:function dPN(d){this.a=d},
dPV:function dPV(d,e){this.a=d
this.b=e},
dPM:function dPM(d){this.a=d},
dPW:function dPW(d,e,f){this.a=d
this.b=e
this.c=f},
dPX:function dPX(d,e,f){this.a=d
this.b=e
this.c=f},
dPL:function dPL(d,e){this.a=d
this.b=e},
dPY:function dPY(d,e,f){this.a=d
this.b=e
this.c=f},
dPK:function dPK(d,e){this.a=d
this.b=e},
dPZ:function dPZ(d,e){this.a=d
this.b=e},
dPJ:function dPJ(d){this.a=d},
dQ_:function dQ_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPH:function dPH(){},
dPB:function dPB(d){this.a=d},
dPC:function dPC(d){this.a=d},
dPI:function dPI(d,e){this.a=d
this.b=e},
dQ0:function dQ0(d,e){this.a=d
this.b=e},
dPG:function dPG(d){this.a=d},
dQ1:function dQ1(d){this.a=d},
dPF:function dPF(){},
dPR:function dPR(d,e){this.a=d
this.b=e},
dPE:function dPE(d){this.a=d},
dPS:function dPS(d,e,f){this.a=d
this.b=e
this.c=f},
dPD:function dPD(d,e){this.a=d
this.b=e},
dPA:function dPA(d,e){this.a=d
this.b=e},
dPT:function dPT(d){this.a=d},
dPU:function dPU(d,e,f){this.a=d
this.b=e
this.c=f},
dQn:function dQn(){},
dQo:function dQo(d,e){this.a=d
this.b=e},
dQl:function dQl(d){this.a=d},
dQm:function dQm(d){this.a=d},
dQh:function dQh(d,e){this.a=d
this.b=e},
dQi:function dQi(d){this.a=d},
dQa:function dQa(d,e,f){this.a=d
this.b=e
this.c=f},
dQb:function dQb(d,e,f){this.a=d
this.b=e
this.c=f},
dQc:function dQc(d,e,f){this.a=d
this.b=e
this.c=f},
dQd:function dQd(d,e,f){this.a=d
this.b=e
this.c=f},
dQe:function dQe(d,e,f){this.a=d
this.b=e
this.c=f},
dQf:function dQf(d,e,f){this.a=d
this.b=e
this.c=f},
dQg:function dQg(d,e,f){this.a=d
this.b=e
this.c=f},
dQp:function dQp(){},
dQq:function dQq(){},
dQr:function dQr(){},
dQs:function dQs(d){this.a=d},
dQj:function dQj(d,e){this.a=d
this.b=e},
hBu(d){return B.d.dP(D.a4Q,new C.fHr(d),new C.fHs())},
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
fHr:function fHr(d){this.a=d},
fHs:function fHs(){},
am0:function am0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aWw:function aWw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
U4:function U4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgB:function bgB(){this.d=$
this.c=this.a=null},
dg0:function dg0(d,e){this.a=d
this.b=e},
dfZ:function dfZ(d,e){this.a=d
this.b=e},
dg_:function dg_(){},
dg1:function dg1(d,e){this.a=d
this.b=e},
hlL(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bh(J.k(u==null?"":u))
return new C.nw(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LK(d,e){return C.ijo(d,e)},
ijo(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LK=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$LK)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.X.aQ(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.dd(p,x.f)
o=A.cF(o,new C.fJW(),o.$ti.k("M.E"),x.B)
n=A.a4(o).k("Y<M.E>")
o=A.C(new A.Y(o,new C.fJX(),n),n.k("M.E"))
B.d.aZ(o,new C.fJY())
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
return A.i($async$LK,v)},
BB(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$BB=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aA(),$async$BB)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b8(f,new C.fXi(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aC("String","ngmy_family_book_v1_"+s+"_"+e,B.X.aw(r,null)),$async$BB)
case 4:case 1:return A.h(u,v)}})
return A.i($async$BB,v)},
aSB(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aSB=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LK(d,e),$async$aSB)
case 2:u=h
t=J.cC(u)
s=t.bj(u,new C.h4P(f))
if(s===-1)t.c9(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.BB(d,e,u),$async$aSB)
case 3:return A.h(null,v)}})
return A.i($async$aSB,v)},
bE2(d,e,f){var w=0,v=A.j(x.H),u
var $async$bE2=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LK(d,e),$async$bE2)
case 2:u=h
J.nT(u,new C.fGx(f))
w=3
return A.b(C.BB(d,e,u),$async$bE2)
case 3:return A.h(null,v)}})
return A.i($async$bE2,v)},
bEh(d,e){return C.ijn(d,e)},
ijn(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bEh=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bEh)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.OF
w=1
break}p=B.X.aQ(0,q,null)
if(x.f.b(p)){o=A.a2(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aJ(o.h(0,"emblem"))
k=k==null?null:B.i.M(k)
if(k==null)k=0
if(D.DQ.al(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.i.D(i==null?25:i,18,36)
h=B.d.q(D.a6x,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.q(D.a5S,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.q(D.a5O,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.d6q,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.Iv(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.OF
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.OF
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bEh,v)},
SH(d,e,f){return C.isw(d,e,f)},
isw(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$SH=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aA(),$async$SH)
case 7:r=h
w=8
return A.b(r.aC("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.X.aw(f.aj(),null)),$async$SH)
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
S9(d,e){return C.ijp(d,e)},
ijp(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$S9=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$S9)
case 7:r=g
q=r.tT("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.LK(d,e),$async$S9)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.lJ(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
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
ahv(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ahv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.S9(d,e),$async$ahv)
case 3:s=g
r=J.a7(s)
if(r.gI(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gI(s):"main"
r.J(s,t)
w=5
return A.b(A.aA(),$async$ahv)
case 5:w=4
return A.b(g.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ahv)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahv,v)},
a3X(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a3X=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.S9(d,e),$async$a3X)
case 2:s=h
J.h9(s,f)
w=3
return A.b(A.aA(),$async$a3X)
case 3:u=h
w=4
return A.b(u.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a3X)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3X)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3X)
case 6:return A.h(null,v)}})
return A.i($async$a3X,v)},
nw:function nw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fJW:function fJW(){},
fJX:function fJX(){},
fJY:function fJY(){},
fXi:function fXi(){},
h4P:function h4P(d){this.a=d},
fGx:function fGx(d){this.a=d},
Iv:function Iv(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bRp:function bRp(d){this.a=d},
isQ(d,e,f,g,h,i,j){return A.a6(d,!1).ce(A.ec(new C.fXT(j,i,f,e,h,g),!0,null,x.H))},
S4(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$S4=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.S9(h,g),$async$S4)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.T(D.aU7)
u=!1
w=1
break}w=4
return A.b(C.hFD(d,f,e),$async$S4)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ahv(h,g),$async$S4)
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
return A.b(C.BB(h,r,p),$async$S4)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.SH(h,r,new C.Iv("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$S4)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$S4,v)},
fXT:function fXT(d,e,f,g,h,i){var _=this
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
aBC:function aBC(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dgG:function dgG(d){this.a=d},
dgF:function dgF(d,e){this.a=d
this.b=e},
dgu:function dgu(d,e){this.a=d
this.b=e},
dgr:function dgr(d,e){this.a=d
this.b=e},
dg2:function dg2(d){this.a=d},
dg3:function dg3(d,e){this.a=d
this.b=e},
dgv:function dgv(d){this.a=d},
dgb:function dgb(d){this.a=d},
dg9:function dg9(d){this.a=d},
dga:function dga(d){this.a=d},
dgc:function dgc(d){this.a=d},
dgs:function dgs(d){this.a=d},
dgt:function dgt(){},
dg7:function dg7(d){this.a=d},
dg8:function dg8(d,e){this.a=d
this.b=e},
dgd:function dgd(d){this.a=d},
dge:function dge(d,e){this.a=d
this.b=e},
dgE:function dgE(d){this.a=d},
dgD:function dgD(d,e){this.a=d
this.b=e},
dgC:function dgC(d){this.a=d},
dgo:function dgo(d){this.a=d},
dgn:function dgn(d){this.a=d},
dgp:function dgp(d){this.a=d},
dg4:function dg4(d,e){this.a=d
this.b=e},
dgq:function dgq(d,e){this.a=d
this.b=e},
dgh:function dgh(d){this.a=d},
dgi:function dgi(d){this.a=d},
dgg:function dgg(){},
dgj:function dgj(d){this.a=d},
dgk:function dgk(d){this.a=d},
dgl:function dgl(d,e){this.a=d
this.b=e},
dgm:function dgm(d,e,f){this.a=d
this.b=e
this.c=f},
dgf:function dgf(d,e){this.a=d
this.b=e},
dgx:function dgx(d){this.a=d},
dgw:function dgw(){},
dgy:function dgy(d){this.a=d},
dgz:function dgz(d){this.a=d},
dgA:function dgA(d){this.a=d},
dgB:function dgB(d,e){this.a=d
this.b=e},
dg5:function dg5(d){this.a=d},
dg6:function dg6(d){this.a=d},
a_I:function a_I(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bh_:function bh_(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dis:function dis(d){this.a=d},
dit:function dit(d){this.a=d},
dir:function dir(d){this.a=d},
diu:function diu(d){this.a=d},
diq:function diq(d){this.a=d},
div:function div(d){this.a=d},
dip:function dip(d){this.a=d},
diw:function diw(d,e){this.a=d
this.b=e},
dio:function dio(d,e){this.a=d
this.b=e},
dix:function dix(d,e){this.a=d
this.b=e},
a_G:function a_G(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
afY:function afY(d,e,f){this.a=d
this.b=e
this.c=f},
aBF:function aBF(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dgV:function dgV(d,e){this.a=d
this.b=e},
dgU:function dgU(d,e){this.a=d
this.b=e},
dgZ:function dgZ(d){this.a=d},
dgY:function dgY(d,e){this.a=d
this.b=e},
dgW:function dgW(d){this.a=d},
dgX:function dgX(d){this.a=d},
dh_:function dh_(d){this.a=d},
dh0:function dh0(d){this.a=d},
dgT:function dgT(d,e){this.a=d
this.b=e},
dgS:function dgS(d,e){this.a=d
this.b=e},
KS:function KS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ZW:function ZW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cPe:function cPe(d){this.a=d},
cPf:function cPf(){},
cPg:function cPg(d){this.a=d},
bec:function bec(d,e,f){this.b=d
this.c=e
this.a=f},
be3:function be3(d,e){this.b=d
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
bea:function bea(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d7S:function d7S(d,e,f){this.a=d
this.b=e
this.c=f},
d7R:function d7R(d,e){this.a=d
this.b=e},
d8g:function d8g(d){this.a=d},
d83:function d83(){},
d8h:function d8h(d){this.a=d},
d82:function d82(){},
d8i:function d8i(d,e){this.a=d
this.b=e},
d81:function d81(d,e){this.a=d
this.b=e},
d8j:function d8j(d,e){this.a=d
this.b=e},
d80:function d80(d,e){this.a=d
this.b=e},
d8k:function d8k(d){this.a=d},
d8_:function d8_(){},
d8l:function d8l(d,e){this.a=d
this.b=e},
d7Z:function d7Z(d,e){this.a=d
this.b=e},
d8m:function d8m(d){this.a=d},
d8b:function d8b(d,e){this.a=d
this.b=e},
d8n:function d8n(d){this.a=d},
d8o:function d8o(d){this.a=d},
d8q:function d8q(d){this.a=d},
d8r:function d8r(d){this.a=d},
d8a:function d8a(d,e){this.a=d
this.b=e},
d8s:function d8s(d,e){this.a=d
this.b=e},
aID:function aID(d){this.a=d},
bjx:function bjx(d){this.a=d},
bcl:function bcl(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
am1:function am1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a1U:function a1U(d,e){this.a=d
this.b=e},
am2:function am2(d,e,f,g,h,i){var _=this
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
bRz:function bRz(d){this.a=d},
bRt:function bRt(d){this.a=d},
bRs:function bRs(d,e){this.a=d
this.b=e},
bRC:function bRC(d){this.a=d},
bRu:function bRu(d){this.a=d},
bRv:function bRv(d){this.a=d},
bRy:function bRy(d){this.a=d},
bRx:function bRx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRA:function bRA(d,e){this.a=d
this.b=e},
bRB:function bRB(){},
bRw:function bRw(d){this.a=d},
bRq:function bRq(d,e){this.a=d
this.b=e},
bRr:function bRr(d){this.a=d},
bp8:function bp8(d,e){this.b=d
this.a=e},
aBD:function aBD(){},
iw(d,e){var w
$.R()
w=A.K()
w.b=B.a9
w.c=e
w.r=d.gp(0)
w.d=B.bu
w.e=B.dT
return w},
bDC(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bo(j.save())
j.translate(e.a,e.b)
d.pk(0,a0?-f:f,f)
w=A.bs(B.i5,8,36)
v=B.w.j(0.3)
u=$.R()
t=A.K()
t.r=v.gp(0)
d.bZ(w,t)
w=a1===D.X8
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eqD,new A.o(-4+v,-2),C.iw(q,5))
d.ah(D.eod,new A.o(4-v,-2),C.iw(q,5))}else{t=A.bs(B.JB,14,40)
p=A.K()
p.r=v.gp(0)
d.bZ(t,p)}v=u.r
u=x.v
o=new A.aG(v,B.ai,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.c6(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.c6(15,-40,11,t))
o.E(new A.bu())
t=A.K()
t.r=w.gp(0)
d.af(o,t)
u=new A.aG(v,B.ai,k,k,A.a([],u))
u.E(new A.aZ(-12,-50-r))
v=-46-r
u.E(new A.aq(12,v))
u.E(new A.aq(12.5,-42-r))
u.E(new A.aq(-12.5,v))
u.E(new A.bu())
v=A.K()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b14){n=-52+w*14
d.ah(new A.o(10,n-22),new A.o(10,n+44),C.iw(F.FT,3.4))
d.ah(D.eqV,new A.o(9,n),C.iw(q,4))
d.ah(D.eoC,new A.o(10,n),C.iw(q,4))}else if(a1===D.b15){d.ah(D.epI,new A.o(-8,-26-Math.max(0,w)*6),C.iw(q,4))
d.ah(D.emG,new A.o(8,-26-Math.max(0,-w)*6),C.iw(q,4))}else{w=s*3
v=-38-r
d.ah(D.epN,new A.o(-12-w,v),C.iw(q,4))
d.ah(D.aLH,new A.o(12+w,v),C.iw(q,4))}w=A.K()
w.r=q.gp(0)
d.aq(D.f8h,w)
m=new A.o(0,-77-r)
w=A.bs(m,22,19)
v=A.K()
v.r=q.gp(0)
d.bZ(w,v)
w=h.y
if(w!=null){v=A.bs(m.a2(0,K.vs),15,24)
u=A.K()
u.r=w.gp(0)
d.bZ(v,u)
u=m.a2(0,D.emA)
v=A.K()
v.r=w.gp(0)
d.N(u,4,v)}else{w=A.bs(m.a2(0,B.tt),23,20)
v=h.d
u=A.K()
u.r=v.gp(0)
d.cC(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a2(0,D.eqT),m.a2(0,D.epG),C.iw(v,2.2))
d.ah(m.a2(0,D.eoB),m.a2(0,D.emx),C.iw(v,2.2))}if(w===4){w=m.a2(0,D.eqX)
u=A.K()
u.r=v.gp(0)
d.N(w,6,u)
u=m.a2(0,D.eoD)
w=A.K()
w.r=v.gp(0)
d.N(u,6,w)}}w=m.a2(0,D.ept)
v=A.K()
v.r=B.ig.gp(0)
d.N(w,0.9,v)
v=m.a2(0,D.eph)
w=A.K()
w.r=B.ig.gp(0)
d.N(v,0.9,w)
if(i){l=m.a2(0,K.a8t)
w=A.bs(l,21,22)
v=A.K()
v.r=D.lC.gp(0)
d.bZ(w,v)
v=A.bs(l.a2(0,K.aLE),5,12)
w=A.K()
w.r=D.bgh.gp(0)
d.bZ(v,w)
d.ah(l.a2(0,D.eqP),l.a2(0,K.aM0),C.iw(B.cP,1.4))
d.ah(D.aLH,new A.o(15,-88-r),C.iw(q,3.6))}j.restore()},
hA5(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bo(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bU(0,f)
v=A.bs(B.dI,18,96)
u=B.w.j(0.28)
$.R()
t=A.K()
t.r=u.gp(0)
d.bZ(v,t)
t=A.bs(B.dI,11,70)
v=B.w.j(0.2)
u=A.K()
u.r=v.gp(0)
d.bZ(t,u)
d.ly(D.aRR,A.K())
C.i7F(d,g,h,i,j)
s=(k==null?D.a8z:k).a-w>=0?1:-1
w=A.K()
w.a=B.LR
w.sav(A.jA(new A.o(s*70,-60),new A.o(-s*70,-60),A.a([D.aij.j(0.5),D.aij.j(0.12),D.bnB.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aq(D.aRR,w)
r.restore()
r.restore()},
i7F(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ar(d,B.w,0.28)
a0.toString
w=A.ar(d,B.c,0.16)
w.toString
v=a2.b
u=A.ar(v,B.w,0.32)
u.toString
t=Math.sin(a4*1.9+a5)*0.8
s=a2.w
r=s?1.06:1
q=s?0.86:1
s=A.bn(D.f8i,B.tx)
p=$.R()
o=A.K()
o.r=u.gp(0)
a1.am(s,o)
o=A.bn(D.f8d,B.hS)
s=A.ar(v,B.w,0.18)
s.toString
n=A.K()
n.r=s.gp(0)
a1.am(o,n)
n=A.bn(D.f8r,B.hS)
o=A.ar(v,B.w,0.1)
o.toString
s=A.K()
s.r=o.gp(0)
a1.am(n,s)
s=A.K()
s.r=d.gp(0)
a1.bZ(D.f8k,s)
s=A.K()
s.r=d.gp(0)
a1.bZ(D.f73,s)
s=a1.c
J.bo(s.save())
s.translate(a3.w,0)
J.bo(s.save())
a1.pk(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aG(p.r,B.ai,e,e,A.a([],n))
p=-m
k=p+2
l.E(new A.aZ(k,-58))
l.E(new A.c6(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.c6(m+3,-62,m-2,-58))
l.E(new A.c6(0,-70,k,-58))
l.E(new A.bu())
k=A.K()
k.r=v.gp(0)
a1.af(l,k)
J.bo(s.save())
a1.mT(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dda[j]
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=5
i.r=k.gp(0)
i.d=B.bu
i.e=B.dT
a1.ah(new A.o(-34+u,-64),new A.o(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.ar(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.R()
f=new A.ao(B.O,B.M,B.R,B.S,B.Q)
f.r=i.gp(0)
a1.N(new A.o(g,h),3.6,f)
f=new A.ao(B.O,B.M,B.R,B.S,B.Q)
f.r=u.gp(0)
a1.N(new A.o(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bu
i.e=B.dT
a1.ah(new A.o(g,-64),new A.o(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bu
i.e=B.dT
a1.ah(new A.o(-30,h),new A.o(30,h),i)}break
default:a1.ah(D.eqi,D.enl,C.iw(a2.c.j(0.9),3))}a1.ah(D.eqQ,D.epP,C.iw(B.w.j(0.18),1.6))
a1.ah(D.emF,K.aLJ,C.iw(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.R()
i=A.K()
i.r=u.gp(0)
a1.aq(D.f7_,i)
s.restore()
i=A.K()
i.r=a0.gp(0)
a1.aq(D.f7d,i)
n=new A.aG(k.r,B.ai,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.c6(0,-57,9,-66))
n.E(new A.c6(0,-60,-9,-66))
k=A.K()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cC(D.f7m,0.1,2.941592653589793,!1,C.iw(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a8D
n=25*q
k=23*q
i=9*q
C.hwl(a1,new A.o(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.Eg:o
C.hwl(a1,new A.o(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.eo5,D.eo1,C.iw(D.aji,4))
a1.ah(D.eo3,D.eo_,C.iw(D.Gg.j(0.7),1.4))
u=A.K()
u.r=B.cP.gp(0)
a1.N(D.eo2,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bo(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.hW(0,a3.f)
a1.bU(0,r)
C.i7C(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hwl(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aK(0,e),r=s.gcK(),q=r===0?B.i5:s.eW(0,r),p=B.i.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.o(o,w)
if(o*i<0)v=new A.o(-o,-w)
u=e.a2(0,q.aM(0,n)).a2(0,v.aM(0,m))
t=e.a2(0,q.aM(0,p))
d.ah(e,u,C.iw(j,l))
o=A.ar(j,B.w,0.2)
o.toString
d.ah(e,u,C.iw(o,l*0.35))
d.ah(u,t,C.iw(k,l*0.78))
o=A.ar(k,B.w,0.22)
o.toString
d.ah(u,t,C.iw(o,l*0.22))
$.R()
o=A.K()
o.r=j.gp(0)
d.N(u,l*0.55,o)
o=A.bs(t,l*1.15,l)
w=A.K()
w.r=k.gp(0)
d.bZ(o,w)
w=-l
w=t.a2(0,new A.o(i*w*0.45,w*0.1))
o=A.K()
o.r=k.gp(0)
d.N(w,l*0.28,o)},
i7C(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bs(B.vr,40,38)
$.R()
v=A.K()
v.r=c0.gp(0)
c2.bZ(w,v)}if(c1===4){$.R()
w=A.K()
w.r=c0.gp(0)
c2.N(D.epZ,9.5,w)
w=A.K()
w.r=c0.gp(0)
c2.N(D.emW,9.5,w)}w=A.bs(D.erc,10,6)
v=$.R()
u=A.K()
u.r=c8.gp(0)
c2.bZ(w,u)
u=A.bs(D.epq,10,6)
w=A.K()
w.r=c8.gp(0)
c2.bZ(u,w)
v=v.r
w=x.v
t=new A.aG(v,B.ai,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.km(13,-20,17,-9,16,2))
t.E(new A.km(15,13,8,20,0,20))
t.E(new A.km(-8,20,-15,13,-16,2))
t.E(new A.km(-17,-9,-13,-20,0,-20))
t.E(new A.bu())
u=A.K()
u.sav(A.wf(D.eqF,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iw(c8.j(0.5),0.8)
c2.cC(D.f8t,3.455751918948773,2.5132741228718345,!1,s)
c2.cC(D.f76,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.epW,D.epK,s)
c2.ah(D.emS,D.emJ,s)
c2.cC(D.f7l,2.2,1.4,!1,s)
c2.cC(D.f74,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.r=c0.gp(0)
c2.N(new A.o(p*14.5,-3+o*17.5),4.3,n)}p=A.K()
p.r=c0.gp(0)
c2.cC(D.f7z,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aG(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.c6(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.c6(0,-12,-13,-6))
p.E(new A.bu())
o=A.K()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.epL,D.emK,C.iw(G.nq,1.4))
o=A.K()
o.r=c0.gp(0)
c2.N(D.eq1,3,o)
o=A.K()
o.r=c0.gp(0)
c2.N(D.emX,3,o)
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.c6(-12,22,0,26))
o.E(new A.c6(12,22,13,6))
o.E(new A.c6(8,13,0,12))
o.E(new A.c6(-8,13,-13,6))
o.E(new A.bu())
p=A.K()
p.r=B.iJ.gp(0)
c2.af(o,p)
p=new A.aG(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.c6(0,6,7,8))
p.E(new A.c6(0,10.5,-7,8))
o=A.K()
o.r=B.bP.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aG(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-17,-4))
p.E(new A.c6(-20,-27,0,-29))
p.E(new A.c6(20,-27,17,-4))
p.E(new A.c6(0,-14,-17,-4))
p.E(new A.bu())
o=A.K()
o.r=m.gp(0)
c2.af(p,o)
o=A.ar(m,B.w,0.3)
o.toString
c2.cC(D.f7G,3.4,2.5,!1,C.iw(o,1.4))
o=A.ar(m,B.c,0.3)
o.toString
c2.cC(D.f7t,3.6,2.2,!1,C.iw(o,1.2))
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.c6(27,-34,25,-19))
o.E(new A.c6(18,-18,11,-22))
p=A.ar(m,B.c,0.1)
p.toString
n=A.K()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aG(v,B.ai,b9,b9,A.a([],w))
n.E(new A.aZ(11,-22))
n.E(new A.c6(24,-12,27,-26))
n.E(new A.c6(18,-22,11,-22))
o=A.ar(m,B.w,0.2)
o.toString
p=A.K()
p.r=o.gp(0)
c2.af(n,p)
p=A.K()
p.r=c3.c.gp(0)
c2.N(D.emL,3,p)
break
case 3:p=A.K()
p.r=c0.gp(0)
c2.cC(D.f7D,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ar(c0,B.c,0.18)
p.toString
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=0.9
o.r=p.gp(0)
o.d=B.bu
o.e=B.dT
c2.ah(new A.o(r*3.6,-19+Math.abs(r)*0.8),new A.o(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aCr[l]
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=4.5
o.r=c0.gp(0)
o.d=B.bu
o.e=B.dT
c2.ah(new A.o(k,0),new A.o(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.r=p.gp(0)
c2.N(new A.o(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.K()
p.r=c0.gp(0)
c2.cC(D.f7C,3.204424506661589,3.015928947446201,!0,p)
p=A.ar(c0,B.c,0.25)
p.toString
c2.ah(K.a8t,K.a8s,C.iw(p,1))
break
default:p=A.K()
p.r=c0.gp(0)
c2.cC(D.f77,3.267256359733385,2.8902652413026098,!0,p)}i=B.i.D(c4.b,0,1)*0.4+0.1
p=A.bs(D.eqZ,5,8)
o=D.afB.j(i)
n=A.K()
n.r=o.gp(0)
c2.bZ(p,n)
n=A.bs(D.epC,5,8)
p=D.afB.j(i)
o=A.K()
o.r=p.gp(0)
c2.bZ(n,o)
h=c4.e*2.4
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.c6(h-3.4,6,h-2.6,7.4))
o.E(new A.c6(h,8.8,h+2.6,7.4))
c2.af(o,C.iw(c8.j(0.75),1.1))
o=A.K()
o.r=c8.gp(0)
c2.N(new A.o(h-1.5,7.2),0.7,o)
o=A.K()
o.r=c8.gp(0)
c2.N(new A.o(h+1.5,7.2),0.7,o)
g=B.i.F(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.fN[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bs(new A.o(a5,-3),a3,7)
a6=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a6.r=B.c.j(0.96).gp(0)
c2.bZ(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.bo(d.save())
a6=A.a([],w)
a4=new A.aG(v,B.ai,b9,b9,a6)
a6.push(new A.jS(A.bs(new A.o(a5,-3),a3,7)))
a4.ab()
a3=a4.e
if(a3==null)a3=a4.e=new A.Ea(a4.glX().a.snapshot())
d.clipPath(a3.a,$.np(),!0)
a3=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a3.r=D.bk3.gp(0)
c2.N(new A.o(a7,a8),2.1,a3)
a3=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a3.r=B.w.gp(0)
c2.N(new A.o(a7,a8),1.05,a3)
a3=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a3.r=B.c.gp(0)
c2.N(new A.o(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.Zc:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a9.b=B.a9
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bu
a9.e=B.dT
a3=p?0.8:0
c2.cC(A.bs(new A.o(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.ec
else{b1=A.ar(c0,B.w,0.2)
b1.toString}b2=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b2.b=B.a9
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bu
b2.e=B.dT
c2.ah(new A.o(a5-a4,b0-a6+0.4),new A.o(a5+a4,b0-0.6-a3),b2)}b3=B.i.D(c4.a,0,1)
if(o)b4=D.bu1
else{u=A.ar(c8,D.bnD,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.i.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aG(v,B.ai,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.c6(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.c6(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bu())
v=A.K()
v.r=D.bmX.gp(0)
c2.af(b8,v)
J.bo(d.save())
c2.mT(0,b8)
v=B.c.j(0.95)
u=A.K()
u.r=v.gp(0)
c2.aq(new A.a1(w,11,w+b6*2,13.2),u)
u=A.bs(new A.o(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.K()
w.r=D.bu6.gp(0)
c2.bZ(u,w)
d.restore()
c2.af(b8,C.iw(b4,1.1))}else{u=new A.aG(v,B.ai,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.c6(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iw(b4,1.5))
if(b5>0.6){w=new A.aG(v,B.ai,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.c6(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.c6(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.K()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cC(D.f7k,-1.2,2.2,!1,C.iw(c8.j(0.5),0.8))
c2.cC(D.f79,2.141592653589793,2.2,!1,C.iw(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.K()
w.r=c1.gp(0)
c2.N(D.epj,1.7,w)
w=A.K()
w.r=c1.gp(0)
c2.N(D.epf,1.7,w)}},
ide(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.R(),f=new A.q0(new A.pC()),e=A.zx(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.K()
a2.sav(A.jA(B.H,new A.o(0,a0*0.46),D.d9V,D.d1r,B.x,h))
e.aq(new A.a1(0,0,0+d,0+a0),a2)
a2=e.c
J.bo(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bU(0,a1)
w=new A.e5()
w.d_(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.N(new A.o(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bo(a2.save())
a2.translate(200,120)
e.hW(0,-0.5)
d=A.K()
a0=x.O
d.sav(A.wf(B.H,230,A.a([D.biN,B.L],a0),h,B.x,h,h,0))
e.bZ(D.f7Q,d)
a2.restore()
d=A.K()
d.sav(A.wf(D.a8C,58,A.a([D.bm_,B.L],a0),h,B.x,h,h,0))
e.N(D.a8C,58,d)
d=A.K()
d.r=D.bhv.gp(0)
e.N(D.a8C,24,d)
d=A.K()
d.r=D.ZD.gp(0)
e.N(D.enF,5,d)
d=A.K()
d.r=D.ZD.gp(0)
e.N(D.enJ,3.4,d)
d=A.K()
d.r=D.ZD.gp(0)
e.N(D.enI,2.4,d)
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
g=new A.bu()
u.push(g)
u=r.f
if(u!=null)g.ak(u)
r.ab()
g=[D.bg4,D.bi4,D.bnX][s]
u=$.R()
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cwl[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.b=B.a9
u.c=2.4
u.r=D.ZW.gp(0)
u.d=B.bu
u.e=B.dT
e.ah(new A.o(o,k),new A.o(g,d),u)
g=A.bs(new A.o(g,k-27),11,46)
u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.r=D.ZW.gp(0)
e.bZ(g,u)
d=A.bs(new A.o(o-12,d),8,24)
u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.r=D.ZW.gp(0)
e.bZ(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.r=D.bhy.j(0.8).gp(0)
e.N(new A.o(20+v*52+g*7,400+d*5),1.2,u)}g=A.K()
g.sav(A.jA(D.eme,D.emg,D.d3o,B.zX,B.x,h))
e.aq(new A.a1(-200,412,650,1300),g)
j=new A.e5()
j.d_(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bs(new A.o(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h8()?B.c:B.w
d=new A.ao(B.O,B.M,B.R,B.S,B.Q)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.bZ(u,d)}J.bo(a2.save())
a2.translate(225,590)
e.pk(0,1,0.34)
g=A.K()
g.sav(A.wf(B.H,250,A.a([D.boT,D.bio,D.bqM],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.N(B.H,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ar(D.ai0,D.bh2,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.R()
a0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a0.b=B.a9
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bu
a0.e=B.dT
e.ah(new A.o(o+i*2,k),new A.o(o+i*5,g+Math.abs(i)*3),a0)}}C.i5K(e)
for(l=0;l<3;++l)C.i9c(e,D.aAf[l])
C.i91(e,D.enz)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.R()
a0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a0.b=B.a9
a0.c=2.4
a0.r=D.ZR.gp(0)
a0.d=B.bu
a0.e=B.dT
e.ah(new A.o(o,452+g),new A.o(o+1,436+d),a0)}e.ah(D.emH,D.en0,C.iw(D.bhM,1.6))
a2.restore()
return f.o3()},
i5K(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.R().r,g=x.v,f=new A.aG(h,B.ai,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.km(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.km(416,382,432,422,428,462))
f.E(new A.bu())
w=A.K()
w.sav(A.jA(new A.o(354,0),new A.o(430,0),D.dxA,B.nM,B.x,i))
d.af(f,w)
v=new A.e5()
v.d_(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.w.j(0.18)
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.b=B.a9
p.c=1.1
p.r=q.gp(0)
p.d=B.bu
p.e=B.dT
d.ah(new A.o(t,s),new A.o(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dex[o]
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
r=new A.c6(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.ak(p)
k.ab()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.b=B.a9
r.c=8
r.r=D.agj.gp(0)
r.d=B.bu
r.e=B.dT
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
l.r=A.ar(D.bhE,D.bnW,v.ai()).j(0.92).gp(0)
d.N(new A.o(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.b=B.a9
r.c=1.2
r.r=D.ZR.gp(0)
r.d=B.bu
r.e=B.dT
d.ah(new A.o(w,q+8),new A.o(w,q+22),r)
q=A.bs(new A.o(w,q+28),13,7)
w=new A.ao(B.O,B.M,B.R,B.S,B.Q)
w.r=D.bpb.gp(0)
d.bZ(q,w)}},
i9c(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bs(new A.o(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.R(),b3=A.K()
b3.r=b1.gp(0)
b4.bZ(b0,b3)
b2=b2.r
b3=x.v
w=new A.aG(b2,B.ai,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.aZ(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.c6(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bu())
u=A.K()
u.sav(A.jA(new A.o(b0,0),new A.o(v,0),D.deD,B.nM,B.x,a4))
b4.af(w,u)
t=new A.e5()
t.d_(B.o.V(a5*7))
v=b4.c
J.bo(v.save())
b4.mT(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.w.j(0.14)
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.b=B.a9
n.c=1
n.r=o.gp(0)
n.d=B.bu
n.e=B.dT
b4.ah(new A.o(r,q),new A.o(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ahW.j(0.75)
n=A.K()
n.r=o.gp(0)
b4.aq(new A.a1(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.i.bh(u);++l){k=m+l*10
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
h=new A.bu()
j.push(h)
j=i.f
if(j!=null)h.ak(j)
i.ab()
j=new A.ao(B.O,B.M,B.R,B.S,B.Q)
j.r=D.lC.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aG(b2,B.ai,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.i.bh(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.ak(n)
f.ab()}b4.af(f,C.iw(D.ahW.j(0.7),1.6))
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
b2.E(new A.c6(p,a6-a8*0.82,o,j))
b2.E(new A.aq(o,m))
b2.E(new A.bu())
m=A.K()
m.r=D.ai8.gp(0)
b4.af(b2,m)
m=A.K()
m.r=D.ai8.gp(0)
b4.N(new A.o(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aG(b0,B.ai,a4,a4,A.a([],b3))
e.E(new A.aZ(o,j))
n=b1-m*0.55
e.E(new A.c6(a5-a9,n,a5,u))
e.E(new A.c6(a5+a9,n,p,j))
e.E(new A.c6(a5,b1+a7*0.34,o,j))
e.E(new A.bu())
b1=A.K()
n=a7*1.4
b1.sav(A.jA(new A.o(a5-n,0),new A.o(a5+n,0),D.di8,B.nM,B.x,a4))
b4.af(e,b1)
J.bo(v.save())
b4.mT(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h8()?B.w:D.bhb).j(0.16)
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=0.9
i.r=n.gp(0)
i.d=B.bu
i.e=B.dT
b4.ah(new A.o(a5+(p-0.5)*3,u),new A.o(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aG(b0,B.ai,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.ab()
n=new A.c6(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.ak(b1)
p.ab()
b1=B.w.j(0.22)
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.b=B.a9
n.c=1.2
n.r=b1.gp(0)
n.d=B.bu
n.e=B.dT
b4.af(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.ai()
b2=t.ai()
v=new A.ao(B.O,B.M,B.R,B.S,B.Q)
v.b=B.a9
v.c=1.1
v.r=D.bom.gp(0)
v.d=B.bu
v.e=B.dT
b4.ah(new A.o(a2,a3),new A.o(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aG(b0,B.ai,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bu())
b0=A.K()
b0.r=D.bkz.gp(0)
b4.af(a9,b0)},
i91(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aCo[s]
$.R()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.b=B.a9
q.c=3
q.r=D.ZR.gp(0)
q.d=B.bu
q.e=B.dT
d.ah(new A.o(r,u),new A.o(r,t),q)}u=A.bs(e.a2(0,K.aLD),24,36)
t=$.R()
r=A.K()
r.r=D.btf.gp(0)
d.bZ(u,r)
t=new A.aG(t.r,B.ai,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.c6(w,v-24,r,u))
t.E(new A.bu())
u=A.K()
u.r=D.ah_.gp(0)
d.af(t,u)},
i8j(d){switch(B.o.F(d,8)){case 0:return D.b0D
case 1:return D.b0B
case 2:return D.b0A
case 3:return D.b0z
case 4:return D.b0C
case 5:return D.b0E
case 6:return D.hxL
default:return D.hxK}},
SF(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bp9()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a8D:j
w.as=k==null?D.Eg:k
C.hA5(d,e,p,C.i8j(m),w,s,m,l)},
hBA(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bTd:function bTd(){var _=this
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
bp9:function bp9(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
amk:function amk(){this.b=this.a=null},
aWB:function aWB(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bT5:function bT5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT6:function bT6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT7:function bT7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT8:function bT8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT9:function bT9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTa:function bTa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTb:function bTb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTc:function bTc(){},
bT4:function bT4(d){this.a=d},
ag6:function ag6(d,e){this.a=d
this.b=e},
ae4:function ae4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
N5(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bRP(s)
s.bBE(d)
return s},
H5(d,e,f,g,h,i,j){var w,v=A.U(g).k("Y<1>")
v=A.d2(new A.Y(g,new C.fuy(f),v),v.k("M.E"))
w=A.C(v,A.a4(v).k("ci.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.cW(w,0,A.dA(3,"count",x.S),A.U(w).c))
B.d.e0(v,d)
return new C.lr(e,v,B.d.co(v,f),h,i,"tree",j)},
ius(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.T(c0,x.cg),c2=new C.h4G(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jB(c4,c0)
t=A.C(c4,A.a4(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jB(c4,c0)
r=A.C(c4,A.a4(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jB(c4,c0)
q=A.C(c4,A.a4(c4).k("ci.E"))
for(c4=w.length,v=A.U(t).k("Y<1>"),s=v.k("M.E"),p=A.U(w).k("Y<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.J)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.wx)g="father"
else g=h===D.ox?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Y(t,new C.h4I(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.H5(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Y(w,new C.h4J(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.lr("True or false: "+h+" is the "+g+" of "+l+".",D.aBg,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lr("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aBg,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Ga(m)
h=a0.length
if(h!==0){a1=a0[c6.az(h)]
h=B.a.i(a1.b)
f=A.C(new A.Y(t,new C.h4K(l,a0,c5),v),s)
e=a1.c
if(e===D.wx)e="son"
else e=e===D.ox?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.H5(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.eA([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mA(a5,a5.r,f.k("mA<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.H5(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.U(a0),a2=e.k("iu<1>"),a3=new A.iu(a0,1,b3,a2),a3.n8(a0,1,b3,e.c),a3=new A.bR(a3,a3.gI(0),a2.k("bR<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.H5(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.arq(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Y(t,new C.h4L(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.H5(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Y(t,new C.h4M(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wx
if(e)a2=b7
else a2=f===D.ox?b8:b9
if(e)f=b7
else f=f===D.ox?b8:b9
c2.$2("grand",C.H5(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aN4(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.az(k)].b)
j=A.C(new A.Y(t,new C.h4N(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.H5(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cP2)
h=l+" was born in "+k
c2.$2("place",C.H5(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.d4r)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.H5(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.J)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.H5(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.iX(b1,b3,b3)
c2.$2("year",C.H5(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bEd(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.N5(d),l=new A.e5()
l.d_(f)
w=C.ius(m,l,g)
for(v=new A.dq(w,w.r,w.e);v.C();)J.hjQ(v.d,l)
v=A.a4(w).k("cx<1>")
u=A.C(new A.cx(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aV(u,new C.fI2(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.J)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ad(p)>n.a){p=w.h(0,q)
p.toString
p=s.J(0,J.t(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.t(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.C(D.azh,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.J)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hAc(o,l))}}else if(!g&&v>3){o=C.hAc(D.azh[l.az(14)],l)
t[t.length-1-l.az(3)]=o}return t},
hAc(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.e0(w,e)
return new C.lr(d.a,w,B.d.co(w,v),d.d,d.e,d.f,d.r)},
hFb(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.N5(a2),a1=new A.e5()
a1.d_(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
if(a0.Ga(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.J)(u),++r){n=u[r]
m=a0.Ga(n)
l=A.U(m)
k=new A.iu(m,0,5,l.k("iu<1>"))
k.n8(m,0,5,l.c)
j=k.dn(0)
if(new A.N(j,new C.fWj(),A.U(j).k("N<1,H>")).fM(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.J)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.J)(j),++i)g.push(C.aSn(a0,j[i]))
w.push(new C.aui("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.T(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
J.c7(e.c3(0,a0.amz(q),new C.fWk()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cx<1>")
d=A.C(new A.cx(e,t),t.k("M.E"))
B.d.fj(d)
v=A.a([],v)
for(u=A.cW(d,0,A.dA(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bR(u,u.gI(0),t.k("bR<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cC(s)
m.e0(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.J)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.J)(v),++r)s.push(C.aSn(a0,v[r]))
w.push(new C.aui("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aQT(d){return B.d.ao1(D.aBL,new C.fDT(d))},
ijW(d){return A.nA(new A.Y(D.aBL,new C.fKR(d),x.av))},
bSD(d){return C.hOR(d)},
hOR(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bSD=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bSD)
case 7:r=f
q=B.a.i(d)
q=A.el(J.t(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bSD,v)},
BU(d,e){return C.hOO(d,e)},
hOO(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$BU=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$BU)
case 7:r=g
p=B.a.i(d)
o=A.el(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aC("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$BU)
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
return A.i($async$BU,v)},
bSC(d,e,f){return C.hOP(d,e,f)},
hOP(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bSC=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bSC)
case 7:r=h
q=B.a.i(d)
q=A.el(J.t(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bSC,v)},
BV(d,e,f,g){return C.hOQ(d,e,f,g)},
hOQ(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$BV=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$BV)
case 7:r=i
p=B.a.i(d)
o=A.el(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aC("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$BV)
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
return A.i($async$BV,v)},
bGt(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h6J(d,e,f,g){return new C.akW(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hMV(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aT(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cr)
while(u.C())w.push(J.k(u.gR(u)))
u=x.N
w=A.cW(w,0,A.dA(4,"count",x.S),u).dn(0)
B.d.v(w,A.c0(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aJ(d.h(0,"c"))
v=v==null?null:B.i.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aJ(d.h(0,"s"))
u=u==null?null:B.i.M(u)
return C.h6J(w,v,B.o.D(u==null?20:u,5,60),t)},
hkZ(d){var w,v,u,t,s,r,q=J.a7(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aT(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cr)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gR(q)
if(u.b(r))v.push(C.hMV(A.a2(r,t,s)))}return new C.MP(p,w,v)},
hfb(d){var w,v=A.a([],x.c)
for(w=J.aT(d.z);w.C();)v.push(C.hkZ(w.gR(w)))
return v},
aSn(d,e){var w=e.c===D.ox
if(d.amz(e)===0&&d.Ga(e).length!==0)return w?0:1
if(d.Ga(e).length!==0||d.arq(e)!=null)return w?2:3
return w?4:5},
hGh(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.N5(a4),a3=new A.e5()
a3.d_(a5)
w=A.a([],x.dT)
v=a2.b
u=A.C(v,x.P)
B.d.e0(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.J)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("M.E"),q=0;q<u.length;u.length===v||(0,A.J)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.c()
j=i.h(0,k)}h=a2.Ga(m)
g=a2.arq(m)
f=a2.aN4(m)
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
if(k===D.wx)k="father"
else k=k===D.ox?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.wx)k="father"
else k=k===D.ox?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.aZ(l,new C.h55())
d=B.a.i(m.b)
a0=A.C(new A.Y(s,new C.h56(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.iu(a0,0,3,i.k("iu<1>"))
a1.n8(a0,0,3,i.c)
B.d.v(k,a1)
B.d.e0(k,a3)
a1=C.aSn(a2,m)
i=new A.iu(l,0,4,p)
i.n8(l,0,4,r)
w.push(new C.baA(d,a1,i.dn(0),k))
if(w.length>=5)break}return w},
hxO(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.a_(d,"My ")?1:0},
hFn(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.N5(a4),a3=new A.e5()
a3.d_(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
if(a2.Ga(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.J)(u),++r){l=u[r]
k=a2.Ga(l)
j=A.U(k)
i=new A.iu(k,0,4,j.k("iu<1>"))
i.n8(k,0,4,j.c)
h=i.dn(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.J)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aV(h,new C.fWP(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iu(i,0,k,m)
j.n8(i,0,k,n)
f=j.dn(0)
j=B.a.i(l.b)
k=C.aSn(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.J)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.J)(h),++g)e.push(C.aSn(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.J)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.J)(f),++g)a0.push(C.aSn(a2,f[g]))
w.push(new C.aa9(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lr:function lr(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bRP:function bRP(d){this.b=d
this.c=$},
bRQ:function bRQ(){},
bRR:function bRR(d){this.a=d},
fuy:function fuy(d){this.a=d},
h4G:function h4G(d){this.a=d},
h4H:function h4H(){},
h4I:function h4I(d){this.a=d},
h4J:function h4J(d,e){this.a=d
this.b=e},
h4K:function h4K(d,e,f){this.a=d
this.b=e
this.c=f},
h4F:function h4F(d,e){this.a=d
this.b=e},
h4L:function h4L(d){this.a=d},
h4M:function h4M(d){this.a=d},
h4N:function h4N(d,e,f){this.a=d
this.b=e
this.c=f},
h4E:function h4E(d,e){this.a=d
this.b=e},
fI2:function fI2(d,e){this.a=d
this.b=e},
aui:function aui(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fWj:function fWj(){},
fWk:function fWk(){},
zG:function zG(d,e,f){this.a=d
this.b=e
this.c=f},
fDT:function fDT(d){this.a=d},
fKR:function fKR(d){this.a=d},
akW:function akW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bMD:function bMD(){},
MP:function MP(d,e,f){this.a=d
this.b=e
this.c=f},
baA:function baA(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h55:function h55(){},
h56:function h56(d){this.a=d},
aa9:function aa9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fWP:function fWP(d){this.a=d},
bhQ:function bhQ(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
ag4:function ag4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
ake:function ake(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
akf:function akf(d,e,f,g,h){var _=this
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
bKN:function bKN(d){this.a=d},
bKI:function bKI(){},
bKO:function bKO(){},
bKG:function bKG(){},
bKH:function bKH(){},
bKM:function bKM(d){this.a=d},
bKJ:function bKJ(d,e){this.a=d
this.b=e},
bKL:function bKL(d,e){this.a=d
this.b=e},
bKK:function bKK(d,e){this.a=d
this.b=e},
bKF:function bKF(d){this.a=d},
bd0:function bd0(d,e){this.b=d
this.a=e},
QM:function QM(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBB:function aBB(d,e,f){this.b=d
this.c=e
this.a=f},
aA5:function aA5(d,e,f){this.a=d
this.b=e
this.c=f},
auU:function auU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
auV:function auV(d,e,f){var _=this
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
cqh:function cqh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqi:function cqi(d){this.a=d},
cqg:function cqg(d){this.a=d},
cqj:function cqj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cqk:function cqk(){},
cql:function cql(d,e){this.a=d
this.b=e},
cqm:function cqm(){},
cqn:function cqn(d){this.a=d},
cqd:function cqd(d){this.a=d},
cqe:function cqe(d,e){this.a=d
this.b=e},
cqf:function cqf(d,e,f){this.a=d
this.b=e
this.c=f},
cq8:function cq8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqa:function cqa(d,e){this.a=d
this.b=e},
cqb:function cqb(d,e){this.a=d
this.b=e},
cq9:function cq9(d,e){this.a=d
this.b=e},
cq7:function cq7(){},
cqc:function cqc(){},
bcu:function bcu(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cQi:function cQi(){},
ayR:function ayR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ayS:function ayS(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cFf:function cFf(d){this.a=d},
cFe:function cFe(d){this.a=d},
cFn:function cFn(d,e){this.a=d
this.b=e},
cFo:function cFo(d,e){this.a=d
this.b=e},
cFp:function cFp(d){this.a=d},
cFm:function cFm(d){this.a=d},
cFq:function cFq(d){this.a=d},
cFr:function cFr(d,e){this.a=d
this.b=e},
cFs:function cFs(){},
cFt:function cFt(d){this.a=d},
cFh:function cFh(d){this.a=d},
cFi:function cFi(d,e){this.a=d
this.b=e},
cFg:function cFg(d,e){this.a=d
this.b=e},
cFj:function cFj(){},
cFk:function cFk(){},
cFl:function cFl(d,e){this.a=d
this.b=e},
azR:function azR(){},
aH2:function aH2(){},
hcV(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.brv((w-450*u)/2,(v-900*u)/2,u)},
afT:function afT(){},
f76:function f76(d){this.a=d},
aKQ:function aKQ(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fhg:function fhg(d){this.a=d},
ama:function ama(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amb:function amb(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.q9$=f
_.LX$=g
_.an5$=h
_.bx$=i
_.a9$=j
_.c=_.a=null},
bSB:function bSB(d){this.a=d},
bSA:function bSA(){},
bSy:function bSy(d){this.a=d},
bSw:function bSw(){},
bSx:function bSx(d){this.a=d},
bSt:function bSt(d,e){this.a=d
this.b=e},
bSu:function bSu(){},
bSv:function bSv(d){this.a=d},
bSz:function bSz(d,e){this.a=d
this.b=e},
bSs:function bSs(d){this.a=d},
btb:function btb(d,e){this.b=d
this.a=e},
f77:function f77(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f78:function f78(d,e,f){this.a=d
this.b=e
this.c=f},
f79:function f79(d,e,f){this.a=d
this.b=e
this.c=f},
f7a:function f7a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7b:function f7b(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f7c:function f7c(){},
am8:function am8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
am9:function am9(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.q9$=f
_.LX$=g
_.an5$=h
_.bx$=i
_.a9$=j
_.c=_.a=null},
bSe:function bSe(){},
bSp:function bSp(d,e){this.a=d
this.b=e},
bSq:function bSq(d){this.a=d},
bSr:function bSr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSl:function bSl(){},
bSk:function bSk(d,e){this.a=d
this.b=e},
bSm:function bSm(d,e){this.a=d
this.b=e},
bSn:function bSn(){},
bSo:function bSo(d){this.a=d},
bSg:function bSg(d){this.a=d},
bSh:function bSh(d){this.a=d},
bSi:function bSi(d){this.a=d},
bSf:function bSf(d,e){this.a=d
this.b=e},
bSj:function bSj(d){this.a=d},
bjF:function bjF(d,e){this.b=d
this.a=e},
drD:function drD(){},
a2c:function a2c(d,e){this.a=d
this.b=e},
am4:function am4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
am5:function am5(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.q9$=e
_.LX$=f
_.an5$=g
_.bx$=h
_.a9$=i
_.c=_.a=null},
bS0:function bS0(d){this.a=d},
bS_:function bS_(){},
bRZ:function bRZ(){},
bRT:function bRT(){},
bRU:function bRU(){},
bRY:function bRY(d,e,f){this.a=d
this.b=e
this.c=f},
bRX:function bRX(d){this.a=d},
bRV:function bRV(d,e){this.a=d
this.b=e},
bRW:function bRW(d){this.a=d},
bj5:function bj5(d,e){this.b=d
this.a=e},
aBE:function aBE(){},
bgD:function bgD(){},
aBG:function aBG(){},
bgE:function bgE(){},
aBH:function aBH(){},
bgF:function bgF(){},
ux(d,e,f,g,h){var w,v,u=null,t=A.l(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.iD,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.v(v,A.a([A.X(g,h,u,u,u,20),B.ae],w))
v.push(A.d(d,u,u,u,u,u,u,A.m(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.az(u,A.r(u,A.A(v,B.l,u,B.e,B.P,0,u,u),B.f,u,u,new A.p(f,u,u,t,s,u,B.n),u,u,u,u,B.Ok,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hlM(d,e,f,g,h,i,j){return new C.am6(i,h,d,j,e,f,g,null)},
a6E:function a6E(d,e){this.c=d
this.a=e},
bjc:function bjc(d){this.a=d},
tH:function tH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bRS:function bRS(d){this.a=d},
Ix:function Ix(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Wq:function Wq(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bm_:function bm_(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e1L:function e1L(d,e){this.a=d
this.b=e},
e1M:function e1M(d){this.a=d},
e1N:function e1N(d,e){this.a=d
this.b=e},
e1J:function e1J(d){this.a=d},
e1K:function e1K(d){this.a=d},
e1I:function e1I(d){this.a=d},
e1G:function e1G(d){this.a=d},
e1H:function e1H(d){this.a=d},
e1F:function e1F(d,e){this.a=d
this.b=e},
e1O:function e1O(d){this.a=d},
e1P:function e1P(d,e){this.a=d
this.b=e},
e1Q:function e1Q(d,e){this.a=d
this.b=e},
e1R:function e1R(d,e){this.a=d
this.b=e},
e1U:function e1U(d,e){this.a=d
this.b=e},
e1V:function e1V(d,e){this.a=d
this.b=e},
e1W:function e1W(d,e){this.a=d
this.b=e},
e1X:function e1X(d,e){this.a=d
this.b=e},
e1Y:function e1Y(d,e){this.a=d
this.b=e},
e1Z:function e1Z(d,e,f){this.a=d
this.b=e
this.c=f},
e2_:function e2_(d,e){this.a=d
this.b=e},
e20:function e20(d,e){this.a=d
this.b=e},
e1S:function e1S(d){this.a=d},
e1T:function e1T(d){this.a=d},
a05:function a05(d,e){this.a=d
this.b=e},
am6:function am6(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
am7:function am7(d){var _=this
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
bSc:function bSc(d){this.a=d},
bSd:function bSd(d){this.a=d},
bSb:function bSb(d){this.a=d},
bS2:function bS2(d){this.a=d},
bS3:function bS3(d){this.a=d},
bS1:function bS1(d){this.a=d},
bS8:function bS8(d,e,f){this.a=d
this.b=e
this.c=f},
bS9:function bS9(d){this.a=d},
bS5:function bS5(d,e){this.a=d
this.b=e},
bS6:function bS6(d,e,f){this.a=d
this.b=e
this.c=f},
bSa:function bSa(){},
bS7:function bS7(d,e){this.a=d
this.b=e},
bS4:function bS4(d){this.a=d},
U5:function U5(d,e){this.c=d
this.a=e},
am3:function am3(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bRD:function bRD(d){this.a=d},
bRE:function bRE(d){this.a=d},
bRO:function bRO(){},
bRN:function bRN(d,e,f){this.a=d
this.b=e
this.c=f},
bRI:function bRI(d,e){this.a=d
this.b=e},
bRH:function bRH(d,e){this.a=d
this.b=e},
bRJ:function bRJ(d){this.a=d},
bRK:function bRK(d,e){this.a=d
this.b=e},
bRL:function bRL(d,e){this.a=d
this.b=e},
bRG:function bRG(d,e){this.a=d
this.b=e},
bRM:function bRM(d,e,f){this.a=d
this.b=e
this.c=f},
bRF:function bRF(d,e){this.a=d
this.b=e},
iim(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aj2(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.V(Date.now(),0,!1))
s=new C.fHv(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("Y<1>"),q=q.k("cM<1,n>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.z1)m.push(l===D.wx?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.iX(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.iX(h,a2,a2)-A.iX(j,a2,a2))+" years")
l=B.a.i(u.z)
if(l.length!==0)m.push("work: "+l)
f=s.$1(u)
if(f!=null)m.push("married to "+w.h(0,f).b)
e=u.d
if(e!=null&&w.al(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.C(new A.cM(new A.Y(a4,new C.fHt(u,f),p),new C.fHu(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aO(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aO(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aB(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
iin(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aj2(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.J)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fHA(v,e)
q=new C.fHy(v)
p=A.T(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.J)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.J)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.J)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.al(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.al(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("b7<2>")
d=A.d2(new A.b7(p,d),d.k("M.E"))
n=A.C(d,A.a4(d).k("ci.E"))
B.d.fj(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.J)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eG(l,new C.fHz(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.al(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aO(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i35(d,e,f,g){var w,v,u=C.iio(d,e)
if(u<=0||f.length<=u)return new A.afx(!1,D.DD,f)
if(g.q(0,e.a))return new A.afx(!1,D.DD,f)
w=A.U(f).c
v=A.cW(f,0,A.dA(u,"count",x.S),w).dn(0)
return new A.afx(!0,A.cW(f,u,null,w).dn(0),v)},
i36(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aj2(d3),d2=d1.length
if(d2===0)return D.huQ
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.J)(d1),++u){t=d1[u]
v.c3(0,t.a,new C.dh7(t))}s=new C.dho(v)
d2=x.dy
r=A.T(w,d2)
q=new C.dhg(r)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dhf(r)
l=A.T(w,x.do)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c7(l.c3(0,k,new C.dh8()),o)}h=new C.dhe(s)
g=new C.dhd(l,r)
p=v.$ti.k("b7<2>")
o=p.k("Y<M.E>")
f=A.C(new A.Y(new A.b7(v,p),new C.dh9(h),o),o.k("M.E"))
e=f.length===0?new A.b7(v,p).gH(0):B.d.gH(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.J)(f),++u){t=f[u]
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
a9=new C.dhm(new C.dhi(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dq(v,v.r,v.e),j=a2.gam4(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.eA([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.J(0,i))break}if(h.$1(b0)&&a2.al(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nA(J.dI(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.dO)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.dh6(a2,new C.dhn(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.J)(a8),++u){b8=a8[u]
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
d2=b4.$ti.k("cx<1>")
d2=A.C(new A.cx(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.J)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.GF(o,new A.o(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.KZ(c5.a,new A.o(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cx<1>")
d2=A.C(new A.cx(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.J)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bO(0,new C.dha(c6,b4))
for(d2=new A.cb(a4,a4.$ti.k("cb<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aT(c7.b);j.C();){i=j.gR(j)
if(b6.al(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.o(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eG(j,new C.dhb(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.dhc())
c6.push(new C.aKL(new A.o(c9,b4.h(0,c8).b.b+112),B.H,!1,o))}return new C.bgJ(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hAV(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(d)
return w==null?null:w.b[1]},
hv2(d,e,f,g,h,i,j,k,l,m,n){return new C.a0i(k,f,j,e,l,n,m,d,g,h,i,null)},
aDE(d,e,f,g,h,i,j){return new C.bkv(i,d,e,f,j,h,g,null)},
ar8:function ar8(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFb:function aFb(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e3q:function e3q(d){this.a=d},
e3p:function e3p(d){this.a=d},
e3s:function e3s(d,e){this.a=d
this.b=e},
e3t:function e3t(d,e){this.a=d
this.b=e},
e3u:function e3u(d){this.a=d},
e3o:function e3o(d,e){this.a=d
this.b=e},
e3r:function e3r(d){this.a=d},
e3w:function e3w(d){this.a=d},
e3v:function e3v(d,e){this.a=d
this.b=e},
ar2:function ar2(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aF8:function aF8(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e2R:function e2R(d){this.a=d},
e2P:function e2P(d){this.a=d},
e2Q:function e2Q(d){this.a=d},
e2S:function e2S(d,e){this.a=d
this.b=e},
e2M:function e2M(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2d:function e2d(d){this.a=d},
e2e:function e2e(d,e){this.a=d
this.b=e},
e2v:function e2v(d){this.a=d},
e2t:function e2t(d){this.a=d},
e2u:function e2u(d,e){this.a=d
this.b=e},
e2w:function e2w(d){this.a=d},
e2x:function e2x(d,e){this.a=d
this.b=e},
e2L:function e2L(d,e){this.a=d
this.b=e},
e2s:function e2s(d){this.a=d},
e2r:function e2r(d){this.a=d},
e2q:function e2q(d,e){this.a=d
this.b=e},
e2I:function e2I(){},
e2J:function e2J(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e2H:function e2H(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e2B:function e2B(d){this.a=d},
e2C:function e2C(d,e,f){this.a=d
this.b=e
this.c=f},
e2A:function e2A(d,e){this.a=d
this.b=e},
e2D:function e2D(d,e){this.a=d
this.b=e},
e2y:function e2y(d,e){this.a=d
this.b=e},
e2z:function e2z(){},
e2E:function e2E(d,e){this.a=d
this.b=e},
e2F:function e2F(d){this.a=d},
e2G:function e2G(d,e){this.a=d
this.b=e},
e2K:function e2K(d,e){this.a=d
this.b=e},
e21:function e21(d,e){this.a=d
this.b=e},
e22:function e22(d,e){this.a=d
this.b=e},
e2U:function e2U(d,e,f){this.a=d
this.b=e
this.c=f},
e2O:function e2O(d,e,f){this.a=d
this.b=e
this.c=f},
e2N:function e2N(d){this.a=d},
e23:function e23(d){this.a=d},
e24:function e24(d){this.a=d},
e25:function e25(){},
e26:function e26(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2a:function e2a(d,e){this.a=d
this.b=e},
e29:function e29(d,e){this.a=d
this.b=e},
e28:function e28(d){this.a=d},
e2b:function e2b(d,e){this.a=d
this.b=e},
e27:function e27(d){this.a=d},
e2T:function e2T(d){this.a=d},
e2n:function e2n(){},
e2o:function e2o(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2m:function e2m(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2i:function e2i(d,e,f){this.a=d
this.b=e
this.c=f},
e2h:function e2h(d,e,f){this.a=d
this.b=e
this.c=f},
e2f:function e2f(d,e){this.a=d
this.b=e},
e2j:function e2j(d){this.a=d},
e2k:function e2k(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2g:function e2g(d,e){this.a=d
this.b=e},
e2l:function e2l(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2p:function e2p(d,e){this.a=d
this.b=e},
e30:function e30(){},
e31:function e31(d,e){this.a=d
this.b=e},
e32:function e32(d){this.a=d},
e33:function e33(d,e){this.a=d
this.b=e},
e2X:function e2X(d){this.a=d},
e2V:function e2V(d,e){this.a=d
this.b=e},
e2Y:function e2Y(d,e){this.a=d
this.b=e},
e2Z:function e2Z(d,e){this.a=d
this.b=e},
e3_:function e3_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e34:function e34(d){this.a=d},
e2W:function e2W(d){this.a=d},
e2c:function e2c(d){this.a=d},
bgH:function bgH(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dh4:function dh4(d){this.a=d},
dh3:function dh3(d,e){this.a=d
this.b=e},
dh5:function dh5(d){this.a=d},
dh2:function dh2(d,e){this.a=d
this.b=e},
fHv:function fHv(d,e){this.a=d
this.b=e},
fHw:function fHw(d){this.a=d},
fHx:function fHx(){},
fHt:function fHt(d,e){this.a=d
this.b=e},
fHu:function fHu(){},
fHA:function fHA(d,e){this.a=d
this.b=e},
fHB:function fHB(d){this.a=d},
fHC:function fHC(){},
fHy:function fHy(d){this.a=d},
fHz:function fHz(d,e){this.a=d
this.b=e},
KZ:function KZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GF:function GF(d,e){this.a=d
this.b=e},
bgJ:function bgJ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dh7:function dh7(d){this.a=d},
dho:function dho(d){this.a=d},
dhg:function dhg(d){this.a=d},
dhh:function dhh(){},
dhf:function dhf(d){this.a=d},
dh8:function dh8(){},
dhe:function dhe(d){this.a=d},
dhd:function dhd(d,e){this.a=d
this.b=e},
dh9:function dh9(d){this.a=d},
dhi:function dhi(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dhj:function dhj(d){this.a=d},
dhk:function dhk(d){this.a=d},
dhl:function dhl(){},
dhm:function dhm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dhn:function dhn(){},
dh6:function dh6(d,e,f,g,h,i,j,k,l,m){var _=this
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
dha:function dha(d,e){this.a=d
this.b=e},
dhb:function dhb(d){this.a=d},
dhc:function dhc(){},
aKL:function aKL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgK:function bgK(d,e){this.b=d
this.a=e},
dhp:function dhp(){},
dhq:function dhq(d){this.a=d},
dhr:function dhr(d){this.a=d},
dhs:function dhs(){},
bkw:function bkw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfM:function bfM(d,e){this.b=d
this.a=e},
byx:function byx(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fmR:function fmR(d){this.a=d},
bnS:function bnS(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eXT:function eXT(d){this.a=d},
eXS:function eXS(d,e){this.a=d
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
aDC:function aDC(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dxl:function dxl(d,e){this.a=d
this.b=e},
dxk:function dxk(d){this.a=d},
dxi:function dxi(d){this.a=d},
dxj:function dxj(d){this.a=d},
dxu:function dxu(d){this.a=d},
dxv:function dxv(d){this.a=d},
dxt:function dxt(d,e){this.a=d
this.b=e},
dxw:function dxw(){},
dxz:function dxz(d){this.a=d},
dxs:function dxs(d,e){this.a=d
this.b=e},
dxy:function dxy(){},
dxA:function dxA(d){this.a=d},
dxr:function dxr(d,e){this.a=d
this.b=e},
dxB:function dxB(d){this.a=d},
dxq:function dxq(d){this.a=d},
dxC:function dxC(d){this.a=d},
dxp:function dxp(d){this.a=d},
dxD:function dxD(d){this.a=d},
dxo:function dxo(d){this.a=d},
dxE:function dxE(d){this.a=d},
dxn:function dxn(d){this.a=d},
dxF:function dxF(d){this.a=d},
dxm:function dxm(d,e){this.a=d
this.b=e},
dxx:function dxx(d){this.a=d},
aeq:function aeq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bkv:function bkv(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aep:function aep(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bku:function bku(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dxG:function dxG(d){this.a=d},
dxH:function dxH(d,e){this.a=d
this.b=e},
aDD:function aDD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJN:function aJN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aer:function aer(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dxQ:function dxQ(d){this.a=d},
GB:function GB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hpR(d){var w=d.U,v=x.N
return w.jr(w,new C.cf_(),v,v)},
hVt(d){var w=d.bF
if(w>=0)return w
return 5},
hpT(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hpR(d).h(0,v)
if(w==null||w.length===0)return null
return A.bh(w)},
hpS(d,e){var w=C.hpT(d,e)
if(w!=null&&w.ca(new A.V(Date.now(),0,!1)))return!0
return!1},
hVu(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hpR(d),w,w)
u=C.hpT(d,e)
t=u!=null&&u.ca(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bR(A.dw(30,0,0,0,0,0).a).aa().ag())
d.U=v},
b1f(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b1f=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.ly(t,B.Jv),$async$b1f)
case 3:if(l){u=!0
w=1
break}u=A.ld(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Jv,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1f,v)},
cf_:function cf_(){},
hVr(){var w,v=$.os(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"FT"+B.d.he(u)},
Jt(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Jt=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$Jt)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_family_tree_backup_codes_v1",null,!1,B.bO),$async$Jt)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.t(r,"codes")
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
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Jt,v)},
a8l(d){return C.hVs(d)},
hVs(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8l=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$a8l)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hK("ngmy_family_tree_backup_codes_v1",A.I(["codes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cN,null),$async$a8l)
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
return A.i($async$a8l,v)},
ceZ(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$ceZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Jt(),$async$ceZ)
case 3:t=m.i1(f),t=t.gae(t),s=x.f
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
return A.i($async$ceZ,v)},
On(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$On=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.ceZ(d),$async$On)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Jt(),$async$On)
case 6:s=f
r=J.a7(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dO(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a8l(s),$async$On)
case 9:case 8:u=t
w=1
break
case 5:n=C.hVr()
w=10
return A.b(C.Jt(),$async$On)
case 10:s=f
J.aK(s,n,A.I(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a8l(s),$async$On)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$On,v)},
b1e(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b1e=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Jt(),$async$b1e)
case 3:t=f
for(s=J.dp(t),r=s.gdO(t),r=r.dn(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.J)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8l(t),$async$b1e)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b1e,v)},
a8m(d,e,f){var w=0,v=A.j(x.H),u
var $async$a8m=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.ar7(d,e),$async$a8m)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.On(d),$async$a8m)
case 7:w=4
break
case 5:w=8
return A.b(C.b1e(d),$async$a8m)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a8m,v)},
ar1(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$ar1=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.ar7(f,e),$async$ar1)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c9(),$async$ar1)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Jt(),$async$ar1)
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
return A.i($async$ar1,v)},
b1d(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b1d=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c9(),$async$b1d)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Jt(),$async$b1d)
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
return A.i($async$b1d,v)},
hVv(){var w,v=$.os(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"FT"+B.d.he(u)},
ar4(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$ar4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$ar4)
case 3:if(!g){u=null
w=1
break}t=C.hVv()
w=4
return A.b(A.Wr(),$async$ar4)
case 4:s=g
r=B.dV.aN(B.X.aw(d.f3(),null))
r=B.cR.gcu().aN(r)
q=e?999:2
J.aK(s,t,A.I(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a8n(s),$async$ar4)
case 5:p=e?999:2
u=new A.a1s("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ar4,v)},
ar3(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$ar3=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Wr(),$async$ar3)
case 3:p=a0
o=J.a7(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a7(n)
l=A.aJ(m.h(n,"usesRemaining"))
k=l==null?null:B.i.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b1d(J.k(l==null?"":l),j),$async$ar3)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.ca.cJ(0,B.cK.aN(t))
s=C.hpU(r)}catch(f){q=A.ab(f)
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
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a8n(p),$async$ar3)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ar3,v)},
hpU(d){var w,v,u,t,s=null
try{w=B.X.aQ(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hVx(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
h8S(d){var w=0,v=A.j(x.m),u,t,s
var $async$h8S=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.ar3(t[1])
w=1
break}u=null
w=1
break}u=C.hpU(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h8S,v)},
hVx(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.dd(v,x.f)
u=A.cF(u,new C.cf1(),u.$ti.k("M.E"),x.k)
t=A.a4(u).k("Y<M.E>")
s=A.C(new A.Y(u,new C.cf2(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bh(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.T(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.i1(p),t=t.gae(t),o=x.B;t.C();){n=t.gR(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.dd(l,u)
n=A.cF(n,new C.cf3(),n.$ti.k("M.E"),o)
k=A.a4(n).k("Y<M.E>")
j=A.C(new A.Y(n,new C.cf4(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.ar5(h,w,s,r,q)},
ar7(d,e){var w=0,v=A.j(x.y),u,t
var $async$ar7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Oe(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bq(d),$async$ar7)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ar7,v)},
cfa(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cfa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bq(d),$async$cfa)
case 3:t=s.b8(f,new C.cfb(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.cfc())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfa,v)},
Ws(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Ws=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.ar7(e,d),$async$Ws)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.On(e),$async$Ws)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Bq(e),$async$Ws)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dI(r,new C.cf8(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a7(r)
if(t.gau(r)){u=null
w=1
break}t=t.dM(r,new C.cf9(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.LK(e,o),$async$Ws)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.J)(r),++p
w=11
break
case 13:u=new C.ar5(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ws,v)},
b1i(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b1i=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ws(d,e,f,g),$async$b1i)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Hk(A.KV(q.f3(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1i,v)},
b1h(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b1h=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ws(d,e,f,g),$async$b1h)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.ar4(r,f),$async$b1h)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aHN(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1h,v)},
Wt(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wt=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h8S(a0),$async$Wt)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.ar1(g.a,d,e,f,s,r),$async$Wt)
case 6:if(!a2){if(r)throw A.W(A.bc("This backup expired or the sender's tree is no longer available."))
throw A.W(A.bc("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bDU(e,j),$async$Wt)
case 12:case 11:w=13
return A.b(C.aiN(e,j,s),$async$Wt)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.BB(e,i,h),$async$Wt)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.J)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.brB(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Wt,v)},
ar5:function ar5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cf6:function cf6(){},
cf7:function cf7(){},
cf5:function cf5(){},
cf1:function cf1(){},
cf2:function cf2(){},
cf3:function cf3(){},
cf4:function cf4(){},
cfb:function cfb(){},
cfc:function cfc(){},
cf8:function cf8(d){this.a=d},
cf9:function cf9(d){this.a=d},
hhO(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f3(null,x.H)
return A.hy(d,new C.ar6(w,e,g,i,f,h,null),!0,null,x.H)},
dh1(d,e,f,g,h,i,j,k){return new C.bgG(i,e,k,j,g,f,h,d,null)},
ar6:function ar6(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFa:function aFa(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e3d:function e3d(d){this.a=d},
e3e:function e3e(d,e,f){this.a=d
this.b=e
this.c=f},
e3i:function e3i(d,e){this.a=d
this.b=e},
e3j:function e3j(d){this.a=d},
e3a:function e3a(d){this.a=d},
e3b:function e3b(d,e){this.a=d
this.b=e},
e3c:function e3c(d,e){this.a=d
this.b=e},
e3h:function e3h(d){this.a=d},
e3g:function e3g(d,e){this.a=d
this.b=e},
e3f:function e3f(){},
e3l:function e3l(d){this.a=d},
e3m:function e3m(d,e){this.a=d
this.b=e},
e3k:function e3k(d,e){this.a=d
this.b=e},
dht:function dht(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bgI:function bgI(d,e,f){this.d=d
this.e=e
this.a=f},
adG:function adG(d,e,f){this.c=d
this.d=e
this.a=f},
bgG:function bgG(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bgL:function bgL(d,e,f,g,h){var _=this
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
aF9:function aF9(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e35:function e35(d,e){this.a=d
this.b=e},
e36:function e36(d){this.a=d},
e37:function e37(d){this.a=d},
e38:function e38(d){this.a=d},
e39:function e39(d){this.a=d},
a0D:function a0D(d){this.a=d},
bm0:function bm0(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e3n:function e3n(d,e){this.a=d
this.b=e},
b_N(d,e){return new C.b_M(d,e,null)},
b_M:function b_M(d,e,f){this.c=d
this.d=e
this.a=f},
ikT(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.b2(d,11)},
it_(d){return A.bU(B.L,null,new C.fYl(new C.uj(A.Q(d).ax.a===B.J)),d,!0,!0,!0,null,!1,!1,x.N)},
hrS(d,e){return new C.au6(e,d,null)},
aSg(d,e,f,g,h,i,j){var w=C.ikT(i)
if(w!=null)return A.bx(e,new A.a5(j,f,new C.a7q(w,!0,null),null),B.aq)
return N.aRD(e,B.c_,f,g,h,i,j)},
lW:function lW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7q:function a7q(d,e,f){this.c=d
this.d=e
this.a=f},
blE:function blE(d,e){var _=this
_.e=_.d=$
_.cQ$=d
_.b7$=e
_.c=_.a=null},
dPs:function dPs(d){this.a=d},
dPt:function dPt(){},
dPu:function dPu(d,e){this.a=d
this.b=e},
blD:function blD(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fYl:function fYl(d){this.a=d},
fYk:function fYk(d,e){this.a=d
this.b=e},
fYj:function fYj(d,e){this.a=d
this.b=e},
fYi:function fYi(d,e){this.a=d
this.b=e},
au6:function au6(d,e,f){this.c=d
this.d=e
this.a=f},
coz:function coz(d,e){this.a=d
this.b=e},
aNc:function aNc(){},
isL(d){var w=null
return A.cg(w,w,!0,w,new C.fXJ(),d,w,!0,!0,x.e2)},
itZ(d,e,f,g,h){var w=null
return A.cg(w,w,!0,w,new C.h4n(h,g,f,e),d,w,!0,!0,x.N)},
isN(d,e){var w=null
return A.cg(w,w,!0,w,new C.fXN(e),d,w,!0,!0,x.dY)},
isM(d){var w=null
return A.cg(w,w,!0,w,new C.fXM(),d,w,!0,!0,x.c5)},
aVc:function aVc(d,e){this.a=d
this.b=e},
aVb:function aVb(d){this.a=d},
aTe:function aTe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fXJ:function fXJ(){},
h4n:function h4n(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fXN:function fXN(d){this.a=d},
fXM:function fXM(){},
a_g:function a_g(d,e){this.c=d
this.a=e},
aAm:function aAm(){var _=this
_.d=$
_.c=_.a=_.e=null},
d8E:function d8E(d){this.a=d},
d8F:function d8F(d){this.a=d},
d8D:function d8D(d,e){this.a=d
this.b=e},
d8G:function d8G(d){this.a=d},
d8H:function d8H(d){this.a=d},
a_f:function a_f(d){this.a=d},
aAl:function aAl(){this.d=$
this.c=this.a=null},
d8A:function d8A(d){this.a=d},
d8B:function d8B(d){this.a=d},
d8C:function d8C(d){this.a=d},
ZN:function ZN(d){this.a=d},
az4:function az4(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cGW:function cGW(){},
cH1:function cH1(d){this.a=d},
cH2:function cH2(d){this.a=d},
cH3:function cH3(d){this.a=d},
cH0:function cH0(){},
cH4:function cH4(d){this.a=d},
cH5:function cH5(d){this.a=d},
cH_:function cH_(){},
cH6:function cH6(d,e){this.a=d
this.b=e},
cGZ:function cGZ(d,e){this.a=d
this.b=e},
cGX:function cGX(d,e){this.a=d
this.b=e},
cH7:function cH7(d){this.a=d},
cGY:function cGY(){},
cH8:function cH8(d){this.a=d},
a2o:function a2o(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
byp:function byp(){this.d=$
this.c=this.a=null},
fmm:function fmm(d,e){this.a=d
this.b=e},
fmn:function fmn(d){this.a=d},
fmo:function fmo(d,e){this.a=d
this.b=e},
acJ:function acJ(d,e){this.a=d
this.b=e},
Gp:function Gp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
byn:function byn(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
fmk:function fmk(d,e){this.a=d
this.b=e},
ayY:function ayY(d,e){this.c=d
this.a=e},
byo:function byo(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
fml:function fml(d){this.a=d},
bym:function bym(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aPk:function aPk(){},
aPl:function aPl(){},
bFS(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.i.bh(u),s=B.o.D(B.i.V((u-t)*100),0,99),r=d<0?"-":"",q=A.p7(B.o.u(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fW6(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.U,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b_(B.o.u(s),2,"0")
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Za(A.cQ(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aRT(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aRT=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hX().l8(85,1280,B.eP),$async$aRT)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fq(),$async$aRT)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hrR()
w=9
return A.b(C.coy(q,r),$async$aRT)
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
return A.i($async$aRT,v)},
aSe(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aSe=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.cov(g)
w=1
break}if(!B.a.a_(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gan(g.split(",")):g
p=B.cK.aN(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.Hl(p,!0,null,o).dh(0,B.h6),$async$aSe)
case 9:n=a1
w=10
return A.b(n.lc(),$async$aSe)
case 10:m=a1
w=11
return A.b(m.b.hr(B.hl),$async$aSe)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eT(B.dQ.gaU(l))
k="data:image/png;base64,"+B.cR.gcu().aN(i)
if(J.ad(k)<=r){u=k
w=1
break}o=B.i.V(o*0.72)
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
return A.i($async$aSe,v)},
fW6:function fW6(){},
uj:function uj(d){this.a=d},
au5:function au5(d,e,f){this.c=d
this.d=e
this.a=f},
aGE:function aGE(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eV2:function eV2(d,e){this.a=d
this.b=e},
eUU:function eUU(d){this.a=d},
eUV:function eUV(d){this.a=d},
eV0:function eV0(d,e){this.a=d
this.b=e},
eV_:function eV_(d,e){this.a=d
this.b=e},
eUX:function eUX(d,e){this.a=d
this.b=e},
eUW:function eUW(d,e){this.a=d
this.b=e},
eUY:function eUY(d){this.a=d},
eUZ:function eUZ(d,e){this.a=d
this.b=e},
eV1:function eV1(d,e){this.a=d
this.b=e},
eUP:function eUP(d,e){this.a=d
this.b=e},
eUT:function eUT(d){this.a=d},
eUS:function eUS(d,e){this.a=d
this.b=e},
eUR:function eUR(d){this.a=d},
eV3:function eV3(d,e){this.a=d
this.b=e},
eV4:function eV4(d,e){this.a=d
this.b=e},
eUQ:function eUQ(d,e){this.a=d
this.b=e},
hF_(d,e,f){var w="thumbnailPath",v=e.aj()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.I(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
fW7(d,e,f){var w=0,v=A.j(x.N),u
var $async$fW7=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.X.aw(C.hF_(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fW7,v)},
bFU(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bFU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fW7(!0,d,e),$async$bFU)
case 4:w=3
return A.b(r.au3(g,d,e.a),$async$bFU)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dV.aN(B.X.aw(C.hF_(d,e,null),null))
u="NGMY_WS:"+B.kJ.gcu().aN(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFU,v)},
hwr(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hhp(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d5(s,"NGMYWSSYNC2|"))return!0
if(J.d5(s,"NGMY_WS:"))return!0
if(J.eH(s,t))return!0
if(J.d5(s,"{"))try{w=B.X.aQ(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
iq4(d){var w,v,u,t=C.hwr(d)
if(t==null)return null
if(C.hhp(t))return t
w=B.a.co(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b2(t,w))
if(C.hhp(v))return v}u=B.a.co(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b2(t,u))
if(C.hhp(v))return v}return null},
hho(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d5(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d5(q,"NGMY_WS:")){v=B.ca.cJ(0,B.cK.aN(J.nq(q,8)))
w=t.a(B.X.aQ(0,v,r))}else w=t.a(B.X.aQ(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hbv(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bFT(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bFT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.au2(t[1]),$async$bFT)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hho(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hho(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFT,v)},
hhn(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lC(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bFp(){var w=0,v=A.j(x.o),u,t
var $async$bFp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Hx(),$async$bFp)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hho(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFp,v)},
hG0(d,e,f,g){return A.bU(B.L,null,new C.h4a(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h4a:function h4a(d,e,f){this.a=d
this.b=e
this.c=f},
aeM:function aeM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eV6:function eV6(d,e){this.a=d
this.b=e},
eV7:function eV7(d,e){this.a=d
this.b=e},
eV8:function eV8(d,e){this.a=d
this.b=e},
eV9:function eV9(d,e){this.a=d
this.b=e},
eV5:function eV5(d){this.a=d},
au_:function au_(d,e,f){this.c=d
this.d=e
this.a=f},
bnn:function bnn(){var _=this
_.c=_.a=_.e=_.d=null},
eUK:function eUK(d,e){this.a=d
this.b=e},
eUL:function eUL(d){this.a=d},
eUM:function eUM(d){this.a=d},
au4:function au4(d){this.a=d},
aGD:function aGD(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eUO:function eUO(d){this.a=d},
eUN:function eUN(d){this.a=d},
hYM(d,e,f,g,h){return new C.P3(h,g,d,e,f,null)},
aLx:function aLx(d,e){this.a=d
this.b=e},
P3:function P3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGF:function aGF(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eVw:function eVw(){},
eVs:function eVs(d,e){this.a=d
this.b=e},
eVt:function eVt(d){this.a=d},
eVd:function eVd(d){this.a=d},
eVb:function eVb(d){this.a=d},
eVc:function eVc(d){this.a=d},
eVm:function eVm(d,e){this.a=d
this.b=e},
eVj:function eVj(d,e){this.a=d
this.b=e},
eVk:function eVk(d,e){this.a=d
this.b=e},
eVl:function eVl(d,e,f){this.a=d
this.b=e
this.c=f},
eVh:function eVh(d,e,f){this.a=d
this.b=e
this.c=f},
eVf:function eVf(d){this.a=d},
eVg:function eVg(d){this.a=d},
eVi:function eVi(d){this.a=d},
eVz:function eVz(d){this.a=d},
eVy:function eVy(d){this.a=d},
eVA:function eVA(d){this.a=d},
eVx:function eVx(d){this.a=d},
eVa:function eVa(d){this.a=d},
eVe:function eVe(d,e){this.a=d
this.b=e},
eVv:function eVv(d,e){this.a=d
this.b=e},
eVu:function eVu(d,e){this.a=d
this.b=e},
eVp:function eVp(d){this.a=d},
eVq:function eVq(d){this.a=d},
eVr:function eVr(d,e){this.a=d
this.b=e},
eVo:function eVo(d,e){this.a=d
this.b=e},
eVn:function eVn(d,e,f){this.a=d
this.b=e
this.c=f},
bAa:function bAa(){},
Bd(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ahh(d,e,f){return C.iea(d,e,f)},
iea(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ahh=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aC("String",e,f),$async$ahh)
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
return A.i($async$ahh,v)},
ahg(d,e){return C.ie9(d,e)},
ie9(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ahg=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ahg)
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
return A.i($async$ahg,v)},
id_(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Tz(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bCT(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bCT=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b4v(q),$async$bCT)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aSe(q,!1),$async$bCT)
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
return A.i($async$bCT,v)},
hMa(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
hbv(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.dd(s,x.f)
w=A.cF(w,new C.cGd(),w.$ti.k("M.E"),x.Q)
v=A.a4(w).k("Y<M.E>")
r=A.C(new A.Y(w,new C.cGe(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bh(J.k(t==null?"":t))
return new C.lC(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
iii(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wx
case"female":case"f":return D.ox
default:return D.z1}},
hBv(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hlN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.iii(v==null?j:J.k(v))
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
return new C.hW(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
iik(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.OG
case"viewer":return D.kV
default:return D.uE}},
iil(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Hm(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aR_(d,e){return B.a.i(e.toLowerCase())===C.Hm(d,e)&&d.y!==D.kV},
uy(d,e){var w,v=d.y
if(v===D.kV)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Hm(d,e))return!0
if(v===D.OG)return!0
v=d.e
return new A.N(v,A.hhu(),A.U(v).k("N<1,n>")).q(0,w)},
ihF(d){return J.dI(d,new C.fGn()).gI(0)},
h4W(d){var w=0,v=A.j(x.y),u,t
var $async$h4W=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bq(d),$async$h4W)
case 3:u=t.rl(f,new C.h4X(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h4W,v)},
bDU(d,e){var w=0,v=A.j(x.H),u,t
var $async$bDU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bq(d),$async$bDU)
case 3:t=g
if(J.rl(t,new C.fDS(e))){w=1
break}if(C.ihF(t)>=2)throw A.W(A.bc("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bDU,v)},
amd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.dd(h,x.f)
w=A.cF(w,new C.bSE(),w.$ti.k("M.E"),x.P)
v=A.a4(w).k("Y<M.E>")
g=A.C(new A.Y(w,new C.bSF(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b8(u,new C.bSG(),x.N)
t=A.C(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.z(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bh(J.k(q==null?"":q))
if(q==null)q=new A.V(Date.now(),0,!1)
p=A.aJ(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.i.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.iik(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aT(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cr)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gR(f)
if(l.b(i))m.push(A.a2(i,k,j))}return new C.kV(w,v,s,!r,t,g,q,p,o,n,m)},
hBK(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aB(v,0,8)},
DD(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SE(d),$async$DD)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aA(),$async$DD)
case 4:t=f
w=5
return A.b(t.a7d(0),$async$DD)
case 5:w=6
return A.b(C.fu8(t,l),$async$DD)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a7(q)
o=A.aV(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hx1(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.p6(l,n),$async$DD)
case 11:u=n
w=1
break
case 10:case 8:m=A.aV(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hx1(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.p6(l,n),$async$DD)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DD,v)},
fu8(d,e){return C.iam(d,e)},
iam(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fu8=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a7(a3)
a5=A.aV(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Bd(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.X.aQ(0,a5,null)
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
break}m=A.aV(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Bd(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.X.aQ(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hbv(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aV(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Bd(a9)+"_"+n))
i=C.id_(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b4v(h),$async$fu8)
case 17:g=b1
if(g!=null){i=i.Tz(g)
p=!0}case 16:J.c7(q,i)
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
case 8:J.SN(q,new C.fu9())
if(p&&J.ad(q)!==0)C.p6(a9,q)
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
return A.i($async$fu8,v)},
bEl(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bEl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SE(d),$async$bEl)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DD(r),$async$bEl)
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
return A.i($async$bEl,v)},
hx1(d){var w,v,u,t
try{w=B.X.aQ(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.dd(w,x.f)
v=A.cF(v,new C.fpV(),v.$ti.k("M.E"),x.fA)
u=A.a4(v).k("Y<M.E>")
v=A.C(new A.Y(v,new C.fpW(),u),u.k("M.E"))
B.d.aZ(v,new C.fpX())
return v}catch(t){v=A.a([],x.D)
return v}},
p6(d,e){return C.isA(d,e)},
isA(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$p6=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.SE(b2),$async$p6)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aA(),$async$p6)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Bd(a8)
p=A.aV(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b8(x.j.a(B.X.aQ(0,p,null)),new C.fXx(),a2).fM(0)
a2=J.b8(b3,new C.fXy(),a2).bY(0,new C.fXz())
n=A.d2(a2,a2.$ti.k("M.E"))
a2=o,a2=A.dZ(a2,a2.r,A.a4(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eH(n,m)?17:18
break
case 17:a5=C.Bd(a8)
l=A.aV(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a9H(l),$async$p6)
case 19:t=21
a5=C.Bd(a8)
k=A.aV(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.X.aQ(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.a9H(a5==null?null:J.k(a5)),$async$p6)
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
return A.b(C.ahg(r,"ngmy_worksheet_item_v3_"+C.Bd(a8)+"_"+m),$async$p6)
case 29:w=30
return A.b(C.ahg(r,"ngmy_worksheet_thumb_v3_"+C.Bd(a8)+"_"+m),$async$p6)
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
case 14:case 10:a2=J.cC(b3),a3=a2.gae(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gR(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bCT(h),$async$p6)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ahh(r,"ngmy_worksheet_thumb_v3_"+C.Bd(a8)+"_"+a4,f),$async$p6)
case 40:g=i.Tz(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ahg(r,"ngmy_worksheet_thumb_v3_"+C.Bd(a8)+"_"+a4),$async$p6)
case 41:g=i.Tz(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ahg(r,"ngmy_worksheet_thumb_v3_"+C.Bd(a8)+"_"+a4),$async$p6)
case 42:case 34:a4=i.a
w=43
return A.b(C.ahh(r,"ngmy_worksheet_item_v3_"+C.Bd(a8)+"_"+a4,B.X.aw(g.aj(),null)),$async$p6)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.c7(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ahh(r,"ngmy_worksheets_index_v3_"+C.Bd(a8),B.X.aw(q,null)),$async$p6)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eP(b3,new C.fXA(q))
a4=a3.$ti.k("cM<1,a9<n,@>>")
a7=A.C(new A.cM(a3,new C.fXB(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ahh(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.X.aw(a0,null)),$async$p6)
case 45:w=46
return A.b(J.hLg(r),$async$p6)
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
return A.i($async$p6,v)},
M9(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$M9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DD(d),$async$M9)
case 3:t=g
s=J.cC(t)
r=s.bj(t,new C.h4V(e))
if(r===-1)s.c9(t,0,e)
else s.n(t,r,e)
u=C.p6(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$M9,v)},
bE6(d,e){var w=0,v=A.j(x.H),u
var $async$bE6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DD(d),$async$bE6)
case 2:u=g
J.nT(u,new C.fGR(e))
w=3
return A.b(C.p6(d,u),$async$bE6)
case 3:return A.h(null,v)}})
return A.i($async$bE6,v)},
Ho(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ho=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Ho)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aV(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.X.aQ(0,i,null)
if(x.j.b(t)){j=J.dd(t,x.f)
j=A.cF(j,new C.fK1(),j.$ti.k("M.E"),x.k)
s=A.a4(j).k("Y<M.E>")
r=A.C(new A.Y(j,new C.fK2(),s),s.k("M.E"))
B.d.aZ(r,new C.fK3())
k=r}}catch(h){}w=4
return A.b(C.fqI(d),$async$Ho)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.iaK(k,p,d)
j=A.U(o)
s=j.k("N<1,a9<n,@>>")
s=A.C(new A.N(o,new C.fK4(),s),s.k("ak.E"))
n=B.X.aw(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.RO(d,o),$async$Ho)
case 7:case 6:j=j.k("Y<1>")
m=A.C(new A.Y(o,new C.fK5(d),j),j.k("M.E"))
if(m.length!==0)C.aQK(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ho,v)},
fXj(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fXj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RO(d,e),$async$fXj)
case 3:t=J.dI(e,new C.fXk(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aQK(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fXj,v)},
a42(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a42=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aA(),$async$a42)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aV(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.X.aQ(0,l,null)
if(x.j.b(u)){m=J.dd(u,x.f)
m=A.cF(m,new C.h4Q(),m.$ti.k("M.E"),x.k)
t=A.a4(m).k("Y<M.E>")
s=A.C(new A.Y(m,new C.h4R(),t),t.k("M.E"))
o=s}}catch(k){}q=J.ow(o,new C.h4S(e))
if(B.a.i(e.x).length===0&&C.uy(e,d)){m=B.a.i(d.toLowerCase())
p=e.aG8(e.y===D.kV?D.kV:D.uE,m)}else p=e
if(q===-1)J.n2(o,0,p)
else J.aK(o,q,p)
w=3
return A.b(C.RO(d,o),$async$a42)
case 3:w=C.uy(p,d)?4:5
break
case 4:w=6
return A.b(C.aQJ(C.Hm(p,d),p),$async$a42)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a42,v)},
aQW(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aQW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Ho(d),$async$aQW)
case 2:u=g
t=J.cC(u)
s=A.nA(t.eP(u,new C.fGy(e)))
t.br(u,new C.fGz(e))
w=3
return A.b(C.RO(d,u),$async$aQW)
case 3:w=s!=null&&C.aR_(s,d)?4:5
break
case 4:w=6
return A.b(C.fpZ(e),$async$aQW)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aQW,v)},
aj2(d){var w=d.f,v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.h50(),v),v.k("M.E"))
return w},
hf_(d,e){var w,v=d.f,u=A.nA(new A.Y(v,new C.fG2(e),A.U(v).k("Y<1>")))
v=C.aj2(d)
w=A.U(v).k("Y<1>")
v=A.C(new A.Y(v,new C.fG3(e,u),w),w.k("M.E"))
B.d.aZ(v,new C.fG4())
return v},
iio(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hG4(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bj(C.hf_(d,u),new C.h4o(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
ijX(d,e){var w
if(e==null||e.length===0)return 1
w=C.hf_(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fKS(),A.U(w).k("N<1,H>")).f1(0,B.xU)+1},
ist(d){var w,v=C.aj2(d)
if(v.length===0)return null
w=new A.Y(v,new C.fXd(),A.U(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
iij(d){return A.I(["id",d.a,"name",d.b,"gender",C.hBv(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
ijR(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aR(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.J)(a0),++u){q=a0[u]
p=q.a
r.J(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.z1?n:q.c
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
d=q.aG3(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.J)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cPJ(a1,w,a3.d,a2.y,s,a0,v)},
Bq(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Bq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Bq)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aV(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.X.aQ(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.dd(t,x.f)
p=A.cF(p,new C.fJZ(),p.$ti.k("M.E"),x.k)
s=A.a4(p).k("Y<M.E>")
p=A.C(new A.Y(p,new C.fK_(),s),s.k("M.E"))
B.d.aZ(p,new C.fK0())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bq,v)},
aiN(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aiN=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.uE:D.kV
a7=C.Hm(b2,b3)
w=2
return A.b(C.Bq(b1),$async$aiN)
case 2:a8=b5
a9=J.cC(a8)
b0=a9.bj(a8,new C.fX8(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bDU(b1,b2),$async$aiN)
case 5:case 4:if(b0===-1){u=b2.aG8(a6,a7)
a9.c9(a8,0,u)}else{t=a9.h(a8,b0)
s=A.T(x.N,x.P)
for(r=t.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.J)(r),++p){o=r[p]
s.n(0,o.a,o)}for(r=b2.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.J)(r),++p){n=r[p]
m=n.a
l=s.h(0,m)
if(l==null)s.n(0,m,n)
else{k=n.f
j=k==null?null:B.a.i(k)
k=n.b
k=k.length!==0?k:l.b
i=n.c
i=i!==D.z1?i:l.c
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
s.n(0,m,l.aG3(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b7<2>")
s=A.C(new A.b7(s,k),k.k("M.E"))
k=a5?D.uE:D.kV
u=t.cPL(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.RO(b1,a8),$async$aiN)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aQJ(B.a.i(b3.toLowerCase()),u),$async$aiN)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aiN,v)},
hxq(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("N<1,a9<n,@>>"),k=A.C(new A.N(m,C.hF8(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.I(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.I(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hxr(d,e){var w=new A.V(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("N<1,a9<n,@>>")
u=A.C(new A.N(u,C.hF8(),t),t.k("ak.E"))
return A.I(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
i8a(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a7(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.amd(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hhu(),A.U(j).k("N<1,n>")).bY(0,new C.fqv())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.uE
else s=B.d.q(t,u)?D.OG:D.kV
return w.aG8(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.amd(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.dd(q,h)
h=A.cF(h,new C.fqw(),h.$ti.k("M.E"),x.P)
p=A.a4(h).k("Y<M.E>")
o=A.C(new A.Y(h,new C.fqx(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b8(n,new C.fqy(),x.N).bY(0,new C.fqz())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.uE
else s=B.d.q(t,u)?D.OG:D.kV
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.z(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bh(J.k(l==null?"":l))
if(l==null)l=new A.V(Date.now(),0,!1)
j=A.aJ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.i.M(j)
if(j==null)j=0
return new C.kV(h,r,p,!m,t,o,l,j,v,s,B.ce)},
fqI(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fqI=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fqM()
h=x.N
g=x.z
w=7
return A.b(A.iB(A.a([A.lH("family_trees","*",null,A.I(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bO),r.$2(A.lH("family_trees","*",A.I(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bO),"collaborator"),r.$2(A.lH("family_trees","*",null,A.I(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bO),"public")],x.cl),x.fO),$async$fqI)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.T(h,g)
h=A.C(p,g)
l=h
J.fW(l,o)
J.fW(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.J)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aK(m,j,k)}l=m
h=A.a4(l).k("b7<2>")
h=A.cF(new A.b7(l,h),new C.fqJ(a0),h.k("M.E"),x.k)
l=A.a4(h).k("Y<M.E>")
l=A.C(new A.Y(h,new C.fqK(),l),l.k("M.E"))
B.d.aZ(l,new C.fqL())
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
return A.i($async$fqI,v)},
iaK(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a7(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dM(e,new C.fuR(),v).bY(0,new C.fuS())
t=A.d2(u,u.$ti.k("M.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.J)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Hm(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kV){m=q.e
m=!new A.N(m,A.hhu(),A.U(m).k("N<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.ijR(l,v)
o=C.Hm(k,w)
p=v.d
s.n(0,u,o===w?k.bfh(p,D.uE):k.bfh(p,v.y))}j=s.$ti.k("b7<2>")
j=A.C(new A.b7(s,j),j.k("M.E"))
B.d.aZ(j,new C.fuT())
return j},
RO(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$RO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$RO)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b8(e,new C.fxR(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aC("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.X.aw(s,null)),$async$RO)
case 3:return A.h(null,v)}})
return A.i($async$RO,v)},
aQJ(d,e){return C.ig3(d,e)},
ig3(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aQJ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.me("family_trees",A.a([C.hxq(e,d)],p),null,B.cN),$async$aQJ)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.me("family_trees",A.a([C.hxr(e,d)],p),null,B.cN),$async$aQJ)
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
return A.i($async$aQJ,v)},
aQK(d,e){return C.ig4(d,e)},
ig4(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aQK=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("N<1,a9<n,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fD7(d),n),m)
r=l
w=7
return A.b(A.me("family_trees",r,null,B.cN),$async$aQK)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fD8(d),n),m)
p=k
w=8
return A.b(A.me("family_trees",p,null,B.cN),$async$aQK)
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
return A.i($async$aQK,v)},
fpZ(d){return C.i7o(d)},
i7o(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fpZ=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Sd("family_trees",A.I(["id",d],x.N,x.z),null,B.cN),$async$fpZ)
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
return A.i($async$fpZ,v)},
rq:function rq(d,e,f,g,h){var _=this
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
cGg:function cGg(){},
cGf:function cGf(){},
cGd:function cGd(){},
cGe:function cGe(){},
Iw:function Iw(d,e){this.a=d
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
amc:function amc(d,e){this.a=d
this.b=e},
fGn:function fGn(){},
h4X:function h4X(d){this.a=d},
fDS:function fDS(d){this.a=d},
kV:function kV(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bSI:function bSI(){},
bSH:function bSH(){},
bSE:function bSE(){},
bSF:function bSF(){},
bSG:function bSG(){},
fu9:function fu9(){},
fpV:function fpV(){},
fpW:function fpW(){},
fpX:function fpX(){},
fXx:function fXx(){},
fXy:function fXy(){},
fXz:function fXz(){},
fXA:function fXA(d){this.a=d},
fXB:function fXB(){},
h4V:function h4V(d){this.a=d},
fGR:function fGR(d){this.a=d},
fK1:function fK1(){},
fK2:function fK2(){},
fK3:function fK3(){},
fK4:function fK4(){},
fK5:function fK5(d){this.a=d},
fXk:function fXk(d){this.a=d},
h4Q:function h4Q(){},
h4R:function h4R(){},
h4S:function h4S(d){this.a=d},
fGy:function fGy(d){this.a=d},
fGz:function fGz(d){this.a=d},
h50:function h50(){},
fG2:function fG2(d){this.a=d},
fG3:function fG3(d,e){this.a=d
this.b=e},
fG4:function fG4(){},
h4o:function h4o(d){this.a=d},
fKS:function fKS(){},
fXd:function fXd(){},
fJZ:function fJZ(){},
fK_:function fK_(){},
fK0:function fK0(){},
fX8:function fX8(d){this.a=d},
fqv:function fqv(){},
fqw:function fqw(){},
fqx:function fqx(){},
fqy:function fqy(){},
fqz:function fqz(){},
fqM:function fqM(){},
fqN:function fqN(d){this.a=d},
fqJ:function fqJ(d){this.a=d},
fqK:function fqK(){},
fqL:function fqL(){},
fuR:function fuR(){},
fuS:function fuS(){},
fuT:function fuT(){},
fxR:function fxR(){},
fD7:function fD7(d){this.a=d},
fD8:function fD8(d){this.a=d},
cGh:function cGh(d,e){this.a=d
this.b=e},
cGi:function cGi(d,e){this.a=d
this.b=e},
aIJ:function aIJ(d,e,f){this.a=d
this.b=e
this.c=f},
baN:function baN(){this.b=this.a=0},
baM:function baM(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
byq:function byq(){},
xn(d,e){var w,v
if(d==null)return""
w=d.bT()
v=""+w.gcg()+"/"+w.gcz()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.b_(B.o.u(w.gnv()),2,"0")+":"+B.a.b_(B.o.u(w.gGN()),2,"0")},
hYJ(){var w,v=$.os(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"WS"+B.d.he(u)},
au0(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$au0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$au0)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bO),$async$au0)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.t(r,"stashes")
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
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$au0,v)},
au1(d){return C.hYK(d)},
hYK(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$au1=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$au1)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hK("ngmy_worksheet_project_qr_stashes_v1",A.I(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cN,null),$async$au1)
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
return A.i($async$au1,v)},
au3(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$au3=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$au3)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hYJ()
w=4
return A.b(C.au0(),$async$au3)
case 4:r=h
q=B.a.i(e)
p=B.dV.aN(t)
J.aK(r,s,A.I(["ownerEmail",q,"projectId",f,"payload",B.cR.gcu().aN(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.au1(r),$async$au3)
case 5:u=new A.a1s("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$au3,v)},
au2(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$au2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c9(),$async$au2)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.au0(),$async$au2)
case 4:q=f
p=J.a7(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a7(o)
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
try{s=B.ca.cJ(0,B.cK.aN(t))}catch(h){r=A.ab(h)
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
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.au1(q),$async$au2)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$au2,v)},
hrR(){var w=new A.V(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cO.az(999999)},
hYL(d){var w,v,u,t,s,r,q
try{w=A.ahH(d)
if(w==null)return d
v=w
if(J.Mf(v)>960||J.Me(v)>960){s=v
r=J.Mf(v)>=J.Me(v)?960:null
v=A.ahE(s,J.Me(v)>J.Mf(v)?960:null,B.Q3,r)}s=v
u=A.any(82).TW(s,B.zG)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cd(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
coy(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$coy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hYL(e)
$.cou.n(0,s,t)
u=C.bFW(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$coy,v)},
b4v(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b4v=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d5(l,"data:image")){u=null
w=1
break}t=4
r=J.eH(l,",")?B.d.gan(J.lM(l,",")):l
q=B.cK.aN(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hrR()
w=7
return A.b(C.coy(p,q),$async$b4v)
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
return A.i($async$b4v,v)},
cov(d){var w=0,v=A.j(x.T),u,t,s
var $async$cov=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.cox(s),$async$cov)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cR.gcu().aN(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cov,v)},
a9H(d){var w=0,v=A.j(x.H),u,t
var $async$a9H=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hF0(d)
if(t==null){w=1
break}$.cou.W(0,t)
w=3
return A.b(C.bFV(t),$async$a9H)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9H,v)},
bFW(d,e){return C.iq7(d,e)},
iq7(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bFW=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aPy
w=7
return A.b(n==null?$.aPy=N.hdP():n,$async$bFW)
case 7:r=g
q=new Uint8Array(A.cd(e))
p=J.mj(r,"thumbs","readwrite")
B.iC.md(J.mi(p,"thumbs"),q,l)
w=8
return A.b(J.ov(p),$async$bFW)
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
return A.i($async$bFW,v)},
bFV(d){return C.iq5(d)},
iq5(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bFV=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aPy
w=7
return A.b(o==null?$.aPy=N.hdP():o,$async$bFV)
case 7:r=f
q=J.mj(r,"thumbs","readwrite")
B.iC.Gn(J.mi(q,"thumbs"),m)
w=8
return A.b(J.ov(q),$async$bFV)
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
return A.i($async$bFV,v)}},D,Au,Av,Z,Aw,Ax,N
J=c[1]
A=c[0]
B=c[2]
P=c[259]
A_=c[166]
S=c[60]
A8=c[234]
L=c[215]
H=c[35]
E=c[225]
T=c[122]
A9=c[237]
Q=c[106]
Aa=c[137]
Ab=c[117]
Ac=c[201]
A0=c[119]
Ad=c[233]
Ae=c[44]
R=c[232]
Af=c[125]
A1=c[202]
Ag=c[253]
Ah=c[192]
Ai=c[205]
M=c[91]
A2=c[87]
Aj=c[172]
A3=c[132]
A4=c[175]
A5=c[200]
Ak=c[256]
A6=c[258]
Al=c[79]
G=c[257]
Am=c[136]
An=c[261]
Ao=c[121]
A7=c[219]
Ap=c[34]
U=c[120]
O=c[195]
Aq=c[206]
V=c[260]
Ar=c[157]
As=c[128]
W=c[246]
X=c[43]
F=c[97]
At=c[33]
I=c[105]
K=c[141]
Y=c[77]
C=a.updateHolder(c[7],C)
D=c[252]
Au=c[78]
Av=c[213]
Z=c[255]
Aw=c[254]
Ax=c[64]
N=c[61]
C.apK.prototype={}
C.b_O.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bjB(),f=h.x!=null&&h.zL(i).length===0
if(h.x!=null)w=f?B.b2:B.bD
else w=h.gUB()?B.bD:B.e_
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.l(22)
t=A.L(D.bpc,B.r,1)
s=x.p
r=A.r(i,A.x(A.a([A.r(i,D.f9M,B.f,i,i,new A.p(B.b2.j(0.12),i,i,A.l(999),i,i,B.n),i,i,i,i,B.hf,i,i,i),B.W,D.fFJ,B.ax,A.d(C.xn(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fBq,i,i,i)],s),B.l,i,B.e,B.j,0,B.p),B.f,i,i,D.b7r,i,i,i,i,B.a0A,i,i,i)
q=A.l(16)
p=A.L(B.bh,B.r,1)
o=A.L(B.b2.j(0.28),B.r,1)
n=A.hg2(h.d)
o=A.r(B.A,C.b_N(A.fNc(h.e,n),30),B.f,i,i,new A.p(B.m7,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fwo,B.K,i,i)
m=A.l(14)
l=A.L(B.bh,B.r,1)
q=A.r(i,A.x(A.a([o,B.T,n,B.bG,D.fG1,B.af,A.r(i,A.x(A.a([D.fWe,B.bG,A.d(A.Bs(h.c),i,i,i,i,i,i,D.fr_,i,i,i)],s),B.l,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fh,i,i,1/0)],s),B.l,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.aS,i,p,q,i,i,B.n),i,i,i,i,O.alR,i,i,i)
p=A.l(16)
m=A.L(B.bh,B.r,1)
l=j.aTd("Original due",C.xn(h.r,!1))
n=j.aTd("Current due",C.xn(h.f,!1))
o=w.j(0.1)
k=A.l(12)
p=A.a([q,B.W,A.r(i,A.x(A.a([l,B.T,n,B.W,A.r(i,A.d(h.gaNf(),i,i,i,i,i,i,A.m(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.p(o,i,i,k,i,i,B.n),i,i,i,i,B.Cg,i,i,1/0),B.W,j.ckA(),B.T,j.c7m(g,f)],s),B.l,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bg,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.l(14)
n=A.L(B.bh,B.r,1)
B.d.v(p,A.a([B.W,A.r(i,A.x(A.a([D.fGZ,B.ax,A.d(q,i,i,i,i,i,i,D.fvB,i,i,i)],s),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.aS,i,n,o,i,i,B.n),i,i,i,i,B.bg,i,i,1/0)],s))}if(h.gaHP()){q=A.l(14)
o=A.L(B.cv,B.r,1.6)
B.d.v(p,A.a([B.W,A.r(i,A.x(A.a([D.fXz,B.T,A.bx(A.l(12),A.e9(new A.a5(1/0,88,A.b2(i,i,i,new A.Xe(h.ax,B.a_,D.few,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.c,i,o,q,i,i,B.n),i,i,i,i,B.GO,i,i,i)],s))}p.push(B.aB)
p.push(D.fPm)
return A.r(i,A.x(A.a([r,new A.D(B.a0p,A.x(p,B.al,i,B.e,B.j,0,B.p),i)],s),B.al,i,B.e,B.P,0,B.p),B.aq,i,i,new A.p(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aTd(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.abs,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fs4,w,w,w)],x.p),B.l,w,B.e,B.j,0,w,w)},
ckA(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aas(B.e_,u,"Not paid yet")
w=t.zL(null).length
v=w===0?B.b2:B.bD
return this.aas(v,u,C.xn(t.x,!0))},
c7m(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aas(B.b2,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aas(B.b2,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.abs,u,u,u)
v=A.U(d).k("N<1,h2>")
v=A.C(new A.N(d,new C.c7Z(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bW(B.bH,v,B.bs,u,6,6)],x.p),B.E,u,B.e,B.j,0,B.p)},
aas(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.abs,w,w,w),1),new A.dl(1,B.cn,A.d(f,w,w,w,w,w,w,A.m(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e2,w,w),w)],x.p),B.E,w,B.e,B.j,0,w,w)}}
C.bcZ.prototype={
a5(d,e){new A.Xe(this.b,B.a_,e,!0,3.5,null).a5(d,e)},
aD(d){return d.b!==this.b}}
C.apW.prototype={
S(){return new C.aED(A.a([],x.bp))},
ge3(){return this.c}}
C.aED.prototype={
Y(){this.a4()
this.Jj()},
Jj(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Jj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3g(t.a.c),$async$Jj)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dQk(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Jj,v)},
aVb(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.m(v,v,u?B.bv:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.l(10)
u=(this.a.d.a?B.bv:B.bo).j(0.22)
w=A.l(10)
return A.bt(v,new A.b6(4,r,new A.ay(u,1,B.r,-1)),v,B.bg,v,v,v,v,!0,new A.b6(4,w,new A.ay((this.a.d.a?B.bv:B.bo).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.l(10),D.b54),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aVa(d){return this.aVb(d,null)},
Q3(d){return this.cod(d)},
cod(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Q3=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.I3:B.eP
w=7
return A.b(new A.hX().CL(72,900,900,n),$async$Q3)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fq(),$async$Q3)
case 8:p=f
n=B.cR.gcu().aN(p)
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
if(n!=null)n.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Q3,v)},
b3j(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.l(10),n=A.L((q?B.bv:B.bo).j(0.18),B.r,1)
if(d)q=B.cH
else q=s.a.d.a?B.bv:B.bo
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.m(r,r,s.a.d.a?B.aS:B.as,r,r,r,r,r,r,r,r,12.5,r,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cH
else u=s.a.d.a?B.bv:B.bo
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.m(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.j,0,B.p),1)
v=A.fv(r,r,r,r,r,r,r,r,r,r,r,B.cH,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cg)
q=A.a([q,B.ae,u,A.bO(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aI(r,r,r,r,A.X(B.cz,s.a.d.a?B.bv:B.bo,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cg))
return A.r(r,A.A(q,B.l,r,B.e,B.j,0,r,r),B.f,r,r,new A.p(p,r,n,o,r,r,B.n),r,r,r,B.jG,D.bC8,r,r,r)},
DH(d){return this.bDN(d)},
bDM(){return this.DH(null)},
bDN(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DH=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.au(new A.ba(a4,B.b6,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.i.iH(a4)
p=a5.c
a4=a4===q?B.o.u(B.i.M(p)):B.i.ad(p,2)}o=new A.au(new A.ba(a4,B.b6,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.ba(a4,B.b6,B.aP),s)
if(a3){a4=new A.V(Date.now(),0,!1).bR(6048e8)
m=A.c2(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)}else{a4=a5.f
m=A.c2(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bq(a4,!0,x.cT)
i=a3?null:A.hg2(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.x6?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hL(B.w.j(0.55),!0,"Dismiss",a4,new C.dQ3(),new C.dQ4(a2,t,a5,r,new C.dQ5(a2,t),o,n,j),B.eK,!0,x.y),$async$DH)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cX(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.U$=s
r.P$=0
o.U$=s
o.P$=0
n.U$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.L(x.q).f.T(D.fl3)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.T(D.fjI)
w=1
break}a1=A.fNc(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.x6?"male":"female"
w=7
return A.b(A.aj1(a3,A.hot(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DH)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.x6?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c2(a3.gcl(),a3.gcg(),a3.gcz(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c2(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)))a5.cS5(a2.a)
w=8
return A.b(A.aj1(t.a.c,a5),$async$DH)
case 8:case 5:w=9
return A.b(t.Jj(),$async$DH)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DH,v)},
aVR(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cH.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.l(12)
u=A.l(12)
t=A.l(12)
if(g)s=B.cH
else s=(this.a.d.a?B.bv:B.bo).j(0.2)
s=A.L(s,B.r,g?1.5:1)
r=C.b_N(d,18)
if(g)q=B.cH
else q=this.a.d.a?B.aS:B.as
return A.aH(!1,B.a3,!0,v,A.aP(!1,u,!0,A.r(p,A.A(A.a([r,B.bm,A.d(e,p,p,p,p,p,p,A.m(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.ba,B.j,0,p,p),B.f,p,p,new A.p(p,p,s,t,p,p,B.n),p,p,p,p,B.bV,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.aj)},
ST(d){return this.cG3(d)},
cG3(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$ST=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hL(B.w.j(0.55),!0,"Dismiss",s,new C.dQn(),new C.dQo(t,d),B.h5,!0,x.y),$async$ST)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aj1(t.a.c,d),$async$ST)
case 7:w=8
return A.b(t.Jj(),$async$ST)
case 8:case 1:return A.h(u,v)}})
return A.i($async$ST,v)},
Q2(d,e){return this.bOH(0,e)},
bOH(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Q2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ln(s,"Cancel","Delete",e.b+" \xb7 "+A.Bs(e.c)+" will be removed from this device.","Delete this debt?"),$async$Q2)
case 3:if(!g){w=1
break}w=4
return A.b(C.fGF(t.a.c,e.a),$async$Q2)
case 4:w=5
return A.b(t.Jj(),$async$Q2)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Q2,v)},
agf(d){return this.ci_(d)},
ci_(d){var w=0,v=A.j(x.H),u=this,t
var $async$agf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.L,null,new C.dQh(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$agf)
case 2:return A.h(null,v)}})
return A.i($async$agf,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.esQ
w=J.dI(m.d,new C.dQp())
v=A.C(w,w.$ti.k("M.E"))
w=J.dI(m.d,new C.dQq())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cG(v,0,new C.dQr())
w=A.l(18)
s=m.a.d.a
r=s?D.cBU:D.aCN
q=A.L(s?B.cH.j(0.35):B.cH.j(0.18),B.r,1)
s=A.r(l,D.c2M,B.f,l,l,new A.p(B.cH.j(m.a.d.a?0.28:0.14),l,l,A.l(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.au,A.E(A.d("Cashier",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.as,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aH(!1,B.a3,!0,A.l(12),A.aP(!1,A.l(12),!0,D.esa,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dQs(m),l,l,l,l,l,l,l),B.f,B.cH,0,l,l,l,l,l,B.aj)],p),B.l,l,B.e,B.j,0,l,l)
o=A.E(m.cC9("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bs(t)
r=A.a([A.r(l,A.x(A.a([s,B.af,A.A(A.a([o,B.ae,A.E(m.b9t(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.j,0,l,l)],p),B.E,l,B.e,B.j,0,B.p),B.f,l,l,new A.p(l,l,q,w,l,new A.a8(B.aA,B.aF,B.x,r,l,l),B.n),l,l,l,l,B.alO,l,l,l),B.aB],p)
if(J.cs(m.d)){w=m.a.d.a
s=w?B.eg:B.c
q=A.l(18)
o=A.L((w?B.bv:B.bo).j(0.12),B.r,1)
n=A.r(l,D.bYt,B.f,l,l,new A.p(B.cH.j(0.12),l,l,A.l(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.as,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.r(l,A.x(A.a([n,B.af,w,B.ax,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bv:B.bo,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.j,0,B.p),B.f,l,l,new A.p(s,l,o,q,l,l,B.n),l,l,l,l,D.bEL,l,l,1/0))}else{w=m.gcnu()
s=A.C(new A.N(v,w,A.U(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bGq,A.d("Paid",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bv:B.bo,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.N(u,w,A.U(u).k("N<1,v>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.al,l,B.e,B.j,0,B.p)},
b9t(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.l(14),r=A.L((v.a.d.a?B.bv:B.bo).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.m(u,u,v.a.d.a?B.bv:B.bo,u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cH
else w=v.a.d.a?B.aS:B.as
return A.r(u,A.x(A.a([q,B.bG,A.d(f,u,1,B.a2,u,u,u,A.m(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.j,0,B.p),B.f,u,u,new A.p(t,u,r,s,u,u,B.n),u,u,u,u,B.eA,u,u,u)},
cC9(d,e){return this.b9t(!1,d,e)},
cnv(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zL(j).length,h=d.biR()
if(d.x!=null){w=d.zL(j).length
v=w===0?B.cH:B.bD}else if(d.gUB())v=B.bD
else{if(h)w=B.cH
else w=k.a.d.a?B.bv:B.bo
v=w}if(d.x!=null){w=d.zL(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xn(u,!1)}else{u.toString
t="Paid "+C.xn(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xn(w,!1)+" \xb7 "+i+" missed":"Due "+C.xn(w,!1)}w=k.a.d.a?B.eg:B.c
u=A.l(18)
if(d.gUB()&&d.x==null)s=B.bD.j(0.35)
else s=(k.a.d.a?B.bv:B.bo).j(0.12)
s=A.L(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.l(18)
p=k.a.d.a?B.br:B.m7
o=A.L(d.gUB()&&d.x==null?B.bD.j(0.45):B.cH.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hg2(d.d)
o=A.r(B.A,A.d3(C.b_N(A.fNc(d.e,m),24),n),B.f,j,j,new A.p(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.as
m=x.p
n=A.a([new A.dl(1,B.cn,A.d(p,j,1,B.a2,j,j,j,A.m(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaHP())B.d.v(n,A.a([B.e7,A.X(B.P7,B.cH.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.j,0,j,j),B.cQ,A.d(t,j,1,B.a2,j,j,j,A.m(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.U,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.j,0,B.p),1)
n=A.Bs(d.c)
l=k.a.d.a?B.aS:B.as
n=A.d(n,j,j,j,j,j,j,A.m(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.r(j,A.aH(!1,B.a3,!0,j,A.aP(!1,q,!0,new A.D(Ag.alC,A.A(A.a([o,B.bc,p,B.ae,A.x(A.a([n,B.bG,A.X(B.eI,(k.a.d.a?B.bv:B.bo).j(0.5),j,j,j,18)],m),B.dO,j,B.e,B.j,0,B.p)],m),B.l,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dQj(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.aj),B.f,j,j,new A.p(w,j,s,u,r,j,B.n),j,j,j,B.d6,j,j,j,j)}}
C.uT.prototype={}
C.am0.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bn
u=v?B.E:B.l
t=a1.as
s=A.l(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.L(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cC,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.L(r.j(0.6),B.r,1)
n.push(A.az(a0,A.r(a0,A.X(B.cz,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.p(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a7:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iQ,A.d(k,a0,a0,a0,a0,a0,a0,A.m(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.m(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.ayY,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.H3,A.d(k,a0,a0,a0,a0,a0,a0,A.m(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.ev(m,A.A(l,B.l,a0,B.e,B.P,0,a0,a0),B.f,B.e5)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bBj,A.d(v,a0,1,B.a2,a0,a0,a0,A.m(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cI:B.bt,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fK,A.x(a2,u,a0,B.e,B.P,0,B.p),a0),1))
n.push(D.ffk)
a2=A.a([A.A(n,B.l,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.wn,A.r(a0,a0,B.f,a0,a0,new A.p(a0,a0,a0,a0,a0,new A.a8(B.a7,B.aa,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lM,A.x(a2,B.l,a0,B.e,B.P,0,B.p),a0)
if(a1.z){a2=A.l(t?9:19)
e=A.r(a0,e,B.f,a0,a0,new A.p(a0,a0,A.L(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hy,a0,a0,a0,a0)}return A.r(a0,e,B.f,a0,a0,new A.p(a0,a0,q,s,p,new A.a8(B.aA,B.aF,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bCC,a0,a0,a0,a0)}}
C.aWw.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.r(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.m(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bn?B.bn:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.m(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bt:B.cI,q,B.U,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.m(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.j,0,q,q),B.cQ,n],m)
if(p.z)o.push(new A.D(B.uv,n,q))
return new A.D(B.d6,A.x(o,B.l,q,B.e,B.P,0,B.p),q)}}
C.U4.prototype={
S(){return new C.bgB()}}
C.bgB.prototype={
gc2c(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aF(d,n,x.w).w,l=x.p,k=A.a([D.esL,D.esR],l)
for(w=0;w<8;++w){v=D.a4Q[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.HQ:B.zp
q=t===s
r=A.X(r,q?B.eH:B.bW,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.bm,A.d(v.b,n,n,n,n,n,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.ae,new A.bz(1,B.bb,A.d(v.c,n,1,B.a2,n,n,n,B.AQ,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aN(24,24)
p=new A.ay(B.eH,2,B.r,-1)
s=new A.p(n,n,new A.bH(p,p,p,p),new A.be(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.az(n,new A.D(B.eL,A.x(A.a([new A.D(B.n_,new A.c8(B.aL,B.e,B.j,B.l,n,B.p,n,0,r,n),n),A.r(n,new A.du(!0,new C.am0(v,q.d,q.e,new C.dg_(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dg0(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bCY,A.bJ(D.h24,n,new C.dg1(o,d),A.bp(B.b7,n,n,n,n,B.oZ,n,n,new A.b9(A.l(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cP(new A.aY(0,1/0,0,m.a.b*0.9),A.cl(k,n,n,D.bHj,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nw.prototype={
aj(){var w=this
return A.I(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bft(d,e,f){return new C.nw(this.a,e,d,f)}}
C.Iv.prototype={
wZ(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Iv(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aFX(d){var w=null
return this.wZ(w,w,w,w,w,d,w,w,w,w,w,w)},
cNI(d){var w=null
return this.wZ(w,w,w,w,d,w,w,w,w,w,w,w)},
bfr(d,e,f){var w=null
return this.wZ(d,w,w,w,w,w,w,w,e,w,f,w)},
cOm(d){var w=null
return this.wZ(w,w,w,w,w,w,d,w,w,w,w,w)},
cOv(d){var w=null
return this.wZ(w,w,w,w,w,w,w,w,w,d,w,w)},
cNG(d){var w=null
return this.wZ(w,w,w,d,w,w,w,w,w,w,w,w)},
cOx(d){var w=null
return this.wZ(w,w,w,w,w,w,w,w,w,w,w,d)},
cND(d){var w=null
return this.wZ(w,w,d,w,w,w,w,w,w,w,w,w)},
cNy(d){var w=null
return this.wZ(w,d,w,w,w,w,w,w,w,w,w,w)},
Gf(d){var w=null
return this.wZ(w,w,w,w,w,w,w,d,w,w,w,w)},
cOF(d,e,f,g,h,i,j,k,l,m,n){return this.wZ(d,e,f,g,null,h,i,j,k,l,m,n)},
aj(){var w=this
return A.I(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cLc(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bRp(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.i.M(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.DQ.gev(D.DQ))
s=i==null?o:B.i.D(i,18,36)
r=l.$2("position",D.a6x)
q=l.$2("frame",D.a5S)
l=l.$2("texture",D.a5O)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cOF(p,u,t,q,r,A.re(d.h(0,"ribbon"))?A.GZ(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_E.prototype={
S(){return new C.aBC(A.a([],x.I),D.OF)},
ge3(){return this.c}}
C.aBC.prototype={
Y(){var w,v=this
v.a4()
v.f=A.Ai(0,1)
w=$.aw()
v.z=new A.au(B.aw,w)
v.Q=new A.au(B.aw,w)
v.lh()
w=v.a
C.bEh(w.c,w.d).bG(new C.dgG(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.c()
u.t()
u=v.z
u===$&&A.c()
w=$.aw()
u.U$=w
u.P$=0
u=v.Q
u===$&&A.c()
u.U$=w
u.P$=0
v.a3()},
lh(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LK(s.c,s.d),$async$lh)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dgu(t,r))
t.axF()
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
gaue(){var w,v=this
if(!J.cs(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
axF(){var w,v,u=this.gaue(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
cgp(d){this.m(new C.dgr(this,d))
this.axF()},
NZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$NZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nw(B.o.u(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aSB(r.c,r.d,s),$async$NZ)
case 3:w=4
return A.b(t.lh(),$async$NZ)
case 4:if(t.c==null||J.cs(t.d)){w=1
break}q=J.ow(t.d,new C.dg2(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dg3(t,p))
t.axF()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.BK(p+1,B.cx,B.kS),$async$NZ)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$NZ,v)},
Bq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Bq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaue()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aSB(o.c,o.d,new C.nw(s,r,q,new A.V(p,0,!1))),$async$Bq)
case 3:w=4
return A.b(t.lh(),$async$Bq)
case 4:if(t.c==null){w=1
break}t.m(new C.dgv(t))
case 1:return A.h(u,v)}})
return A.i($async$Bq,v)},
OF(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaue()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dgb(r),s,null,!0,!0,x.y),$async$OF)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bE2(s.c,s.d,r.a),$async$OF)
case 4:t.m(new C.dgc(t))
w=5
return A.b(t.lh(),$async$OF)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.UE(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$OF,v)},
z7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$z7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bq(),$async$z7)
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
return A.b(C.S4(s,r.r,o,p,q),$async$z7)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hFD(s,r.x,r.r),$async$z7)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LK(s.c,s.d),$async$z7)
case 10:l=e
for(s=n.d,r=J.cC(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.J(l,new C.nw(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.BB(r.c,r.d,l),$async$z7)
case 11:w=12
return A.b(t.lh(),$async$z7)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$z7,v)},
a1u(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1u=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bq(),$async$a1u)
case 5:case 4:if(t.c==null){w=1
break}s=t.gz5(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dP(D.zR,new C.dgs(t),new C.dgt())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mS("Our Family",o,"",""))
for(o=J.aT(t.d);o.C();){n=o.gR(o)
p.push(new H.mS(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hhK(o,new H.rP(s,r,"",p,new H.v8(q.d,null,null,null,null,"","","")),null),$async$a1u)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a1u,v)},
On(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$On=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bq(),$async$On)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.agy,null,new C.dg7(t),s,!0,!0,!0,I.a9E,!1,!1,x.N),$async$On)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cNI(r)
t.m(new C.dg8(t,q))
s=t.a
w=7
return A.b(C.SH(s.c,s.d,q),$async$On)
case 7:case 1:return A.h(u,v)}})
return A.i($async$On,v)},
XS(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.agy,null,new C.dgd(t),r,!0,!0,!0,I.a9E,!1,!1,x.e),$async$XS)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dge(t,s))
r=t.a
w=4
return A.b(C.SH(r.c,r.d,s),$async$XS)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.BK(0,B.dK,B.mW)
case 1:return A.h(u,v)}})
return A.i($async$XS,v)},
bUn(d){var w=d.bT(),v=B.a.b_(B.o.u(w.gcg()),2,"0"),u=B.a.b_(B.o.u(w.gcz()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gz5(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c1q()
if(r.e)w=D.afg
else if(J.cs(r.d)){w=r.y
v=r.gz5(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fql,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(W.amV,new C.ZW(w,v,0,q),q),q),B.bz,t,B.am,A.d(u,q,q,q,q,q,q,A.m(q,q,D.kO.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bz],s)
if(B.a.i(r.a.x).length!==0)w.push(A.az(q,A.r(q,D.f9x,B.f,q,q,new A.p(q,q,q,A.l(18),A.a([new A.ac(0,B.G,B.dN.j(0.45),B.H,18)],x.V),E.wZ,B.n),q,q,q,q,B.Ok,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcKd(),q,q,q,q,q,q,!1,B.a4))
w.push(B.W)
w.push(A.ho(D.bUB,D.h1x,r.gaOV(),q))
B.d.v(u,w)}w=A.at(A.ce(A.x(u,B.l,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.ey,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.m(q,q,D.kO.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.U,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dZ:B.Br
u=A.x(A.a([new A.D(D.bE1,w,q),A.E(A.JU(v,new C.dgE(r),J.ad(r.d)+1,q,r.gcgo(),u,B.aL),1),r.bGH()],x.p),B.l,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c4(q,D.Zc,new A.an(B.a0,q,B.b1,B.t,A.a([D.aQi,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c1q(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KS(B.ed,"AI",h.gbEz(),!0))
if(h.a.f)f.push(new C.KS(B.mj,"Cover",h.gbPg(),!1))
if(h.a.f)f.push(new C.KS(B.wS,"Header",h.gbKf(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KS(B.uV,"Print",h.gcpx(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.hM:B.j6
t=v?"Save":"Edit"
f.push(new C.KS(u,t,v?h.gcvQ():new C.dgo(h),!1))}if(h.a.f)f.push(new C.KS(B.i0,"Add page",h.gaOV(),!1))
v=C.hBu(h.y.Q)
u=h.gz5(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.J)(f),++m){l=f[m]
if(l.d)k=D.dHn
else{k=new A.aN(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.kr.j(0.5),1,B.r,-1)
j=A.r(g,A.X(l.a,D.kO,g,g,g,17),B.f,g,g,new A.p(g,g,new A.bH(i,i,i,i),new A.be(k,k,k,k),g,new A.a8(B.a7,B.aa,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kO.j(0.85)
p.push(new A.bz(1,B.bb,A.az(B.c4,A.x(A.a([k,B.bG,A.d(l.b,g,1,g,g,g,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.P,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.am0(v,u,t+" \xb7 "+s+" "+r,new C.dgp(h),A.A(p,B.l,g,B.e,B.j,0,g,g),g)},
Ap(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ap=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bq(),$async$Ap)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aT(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=H.a3v(B.d.aO(s," "))
s=t.c
s.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.dg4(t,p),s,null,!0,!0,x.N),$async$Ap)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.z7(),$async$Ap)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Eh(),$async$Ap)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.FT("Swahili (Kiswahili)",!0),$async$Ap)
case 18:w=16
break
case 17:w=19
return A.b(t.cGH(o==="sw"?"Swahili (Kiswahili)":"English"),$async$Ap)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$Ap,v)},
ZP(d,e,f,g,h){var w=null,v=A.l(16),u=B.c.j(0.07),t=A.l(16),s=A.L(E.kr.j(0.3),B.r,1),r=x.p
return new A.D(B.cy,A.aP(!1,v,!0,A.r(w,A.A(A.a([A.r(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.p(w,w,w,w,w,E.wZ,B.a6),w,42,w,w,w,w,w,42),B.bc,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A2.KK,w,w,w),A.d(g,w,w,w,w,w,w,B.AR,w,w,w)],r),B.E,w,B.e,B.j,0,B.p),1)],r),B.l,w,B.e,B.j,0,w,w),B.f,w,w,new A.p(u,w,s,t,w,w,B.n),w,w,w,w,B.bg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dgq(d,h),w,w,w,w,w,w,w),w)},
Eh(){return this.bTR()},
bTR(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Eh=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dgh(r),a7,null,!0,!0,x.ei),$async$Eh)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eB("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.cg(null,null,!1,null,new C.dgi(o),a7,null,!0,!0,x.H).fv(new C.dgj(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.J)(d),++a1){k=d[a1]
J.c7(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.aj()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.zR[a1]
J.c7(j,i.a)}w=8
return A.b(C.aib(a0,a7,new C.dgk(o),d,l,e,j),$async$Eh)
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
if(l!=null&&a6.a)A.a6(l,!0).eA()
l=o
l.sic($.aw())
J.aT3(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.L(x.q).f
j=n
l.T(A.b3(null,null,null,null,null,B.t,null,A.d(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcm(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.al(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bft(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.BB(j.c,j.d,l),$async$Eh)
case 11:w=12
return A.b(r.lh(),$async$Eh)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.zR[a1].a)
a5=l.cLc(j,12,a7)
l=r.a
w=15
return A.b(C.SH(l.c,l.d,a5),$async$Eh)
case 15:if(r.c!=null)r.m(new C.dgl(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.BK(0,B.dK,B.mW)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b3(a3?A.cA2("Undo",new C.dgm(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.em,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Eh,v)},
FT(d,e){return this.cGI(d,e)},
cGH(d){return this.FT(d,!1)},
cGI(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$FT=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eB("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.cg(null,null,!1,null,new C.dgx(a0),k,null,!0,!0,x.H).fv(new C.dgy(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.J)(k),++i){n=k[i]
J.c7(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a3J(m,new C.dgz(a0)),$async$FT)
case 10:w=8
break
case 9:w=11
return A.b(C.bFM(new C.dgA(a0),m,a2),$async$FT)
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
if(o!=null&&f.a)A.a6(o,!0).eA()
o=a0
o.sic($.aw())
J.aT3(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.T(A.b3(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bft(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.BB(k.c,k.d,o),$async$FT)
case 12:w=13
return A.b(r.lh(),$async$FT)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a_(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b3(A.cA2("Undo",new C.dgB(r,d),null),null,null,null,null,B.t,null,k,null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$FT,v)},
bGH(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dg5(v):u
r=A.aI(u,u,u,u,A.X(D.bQh,s?D.kO:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.ho(A.X(B.wC,B.Gr,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.m(u,u,B.Gr,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbOR(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.m(u,u,D.kO.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dg6(v):u
return A.bm(!0,new A.D(D.bDR,A.A(A.a([r,s,A.aI(u,u,u,u,A.X(B.eI,t<J.ad(v.d)?D.kO:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.j,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a_I.prototype={
S(){return new C.bh_(new A.au(B.aw,$.aw()))}}
C.bh_.prototype={
ga2C(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a3()},
gbSs(){switch(this.ga2C()){case"cover":var w=D.d8n
break
case"book":w=D.d3J
break
default:w=D.dzE
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.l(26),n=E.kr.j(0.5),m=x.p,l=A.A(A.a([D.dHo,B.au,D.bJy,A.aI(p,p,p,p,B.lq,p,p,p,new C.dis(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.j,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jx(p,p,p,A.d("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dit(q),q.ga2C()==="page",p,p,p,p))
if(q.a.d)k.push(A.jx(p,p,p,D.fX4,p,new C.diu(q),q.ga2C()==="book",p,p,p,p))
k.push(A.jx(p,p,p,D.fJI,p,new C.div(q),q.ga2C()==="cover",p,p,p,p))
k=A.bW(B.bH,k,B.bs,p,6,8)
j=B.c.j(0.07)
j=A.aM(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bt(p,new A.b6(4,A.l(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kk,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.di,!0,B.a5,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbSs(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.d(s,p,p,p,p,p,p,B.KH,p,p,p)
w.push(A.n3(p,B.c.j(0.08),r,B.hn,new C.diw(q,s),p,p,p,p))}return A.eP(p,E.BW,A.ce(A.x(A.a([l,B.W,D.h_o,B.am,k,B.af,j,B.T,A.bW(B.bH,w,B.bs,p,6,6),B.aB,A.dh(D.bUy,D.h0a,new C.dix(q,d),A.bp(B.b7,p,p,p,p,B.oZ,p,p,new A.b9(A.l(16),B.a1),p,p,p)),B.ax,D.fVi],m),B.E,p,B.e,B.P,0,B.p),B.t,p,B.y,p,B.ft,p,p,B.ah),p,p,p,I.a0D,B.d8,p,new A.b9(o,new A.ay(n,1.4,B.r,-1)),p)}}
C.a_G.prototype={
S(){return new C.aBF(A.a([],x.gA))},
ge3(){return this.c}}
C.afY.prototype={}
C.aBF.prototype={
Y(){this.a4()
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
return A.b(C.bEh(r.c,q),$async$lh)
case 6:j=e
i=J
w=7
return A.b(C.LK(t.a.c,q),$async$lh)
case 7:m.push(new l.afY(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dgV(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
baK(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
QQ(d,e){return this.chX(0,e)},
chX(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$QQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).ce(A.ec(new C.dgU(u,e),!0,null,x.y)),$async$QQ)
case 2:t=g
w=3
return A.b(u.lh(),$async$QQ)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.T(D.aUb)
return A.h(null,v)}})
return A.i($async$QQ,v)},
FV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$FV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.T(D.aU7)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ahv(s.c,s.d),$async$FV)
case 5:q=e
w=6
return A.b(t.lh(),$async$FV)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.QQ(0,B.d.fg(t.d,new C.dgZ(q))),$async$FV)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.S4(p,s.f,r,n,o),$async$FV)
case 10:m=e
w=11
return A.b(t.lh(),$async$FV)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.T(D.aUb)
case 1:return A.h(u,v)}})
return A.i($async$FV,v)},
Qh(d,e){return this.cty(0,e)},
cty(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dgY(t,e),s,null,!0,!0,x.y),$async$Qh)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a3X(s.c,s.d,e.a),$async$Qh)
case 4:w=5
return A.b(t.lh(),$async$Qh)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qh,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)k.push(o.bGK(w[u]))
if(m){t=6-o.d.length
w=A.l(18)
v=B.c.j(0.05)
s=A.L(E.kr.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.az(n,new A.fH(0.7142857142857143,A.r(n,A.x(A.a([D.dHp,B.af,D.erM,B.ax,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.m(n,n,D.kO.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.ba,B.j,0,B.p),B.f,n,n,new A.p(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcK9(),n,n,n,n,n,n,!1,B.a4))}w=A.l(22)
v=A.L(E.kr.j(0.85),B.r,1.6)
s=A.az(n,A.r(n,D.c1x,B.f,n,n,new A.p(B.w.j(0.3),n,A.L(E.kr.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dh_(d),n,n,n,n,n,n,!1,B.a4)
r=A.l(14)
q=B.w.j(0.3)
p=A.L(E.kr.j(0.5),B.r,1)
w=A.r(n,A.A(A.a([s,B.bc,D.bJX,A.r(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fpl,n,n,n),B.f,n,n,new A.p(q,n,p,r,n,n,B.n),n,n,n,n,B.hf,n,n,n)],l),B.l,n,B.e,B.j,0,n,n),B.f,n,n,new A.p(n,n,v,w,n,D.c7s,B.n),n,n,n,Aw.O5,D.bBO,n,n,n)
if(o.e)k=D.afg
else k=k.length===0?D.bcF:A.cq(new C.dh0(k))
return A.c4(n,D.Zc,new A.an(B.a0,n,B.b1,B.t,A.a([D.aQi,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bGK(d){var w,v,u=this,t=null,s=u.baK(d),r=d.c,q=x.p,p=A.a([A.bS(0,A.ev(B.A,new A.a5(300,420,new C.ZW(d.b,s,r,t),t),B.f,B.dD),0,0,0)],q)
if(u.a.e)p.push(A.ap(t,A.az(t,A.r(t,D.c0P,B.f,t,t,new A.p(B.w.j(0.55),t,A.L(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dgS(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.foX,t,t,t)
v=r===1?"page":"pages"
return A.az(t,A.x(A.a([new A.fH(0.7142857142857143,new A.an(B.a0,t,B.ac,B.t,p,t),t),B.T,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.m(t,t,D.kO.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dgT(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KS.prototype={}
C.ZW.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dP(D.zR,new C.cPe(m),new C.cPf()),j=m.c,i=D.DQ.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mr:B.ba
v=new C.cPg(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.eos,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b2(l,l,l,new C.bec(j.x,h,l),B.az),0,0,0),A.ap(0,A.r(l,l,B.f,l,l,new A.p(l,l,l,l,l,new A.a8(B.a7,B.aa,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aN(3,3)
t.push(new A.cK(8,40+s*46,l,l,l,l,A.r(l,l,B.f,l,l,new A.p(h.j(0.7),l,l,new A.be(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.amW,8,0.85,2.2),v.$4(D.bGJ,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.amW,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.D(D.bGF,A.b2(l,l,l,new C.be3(h,l),B.az),l),0,0,0))
r=A.X(D.aBJ[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.m(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.ayY,l,l),B.K,l,l)
p=A.r(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.af,p,B.af,A.d(o,l,l,l,l,l,l,A.m(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cI,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.m(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.D(D.bHa,A.x(o,B.l,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ap(l,A.b2(l,l,l,new C.aID(l),D.fep),l,l,l,46,0,l))
return A.r(l,A.bx(D.adV,new A.an(B.a0,l,B.ac,B.t,t,l),B.aq),B.f,l,l,new A.p(l,l,l,D.adV,i,new A.a8(B.aA,B.aF,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bec.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e5()
g.d_(11)
switch(this.b){case"plain":return
case"linen":$.R()
w=A.K()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.o(0,t),new A.o(u,t),w)
$.R()
s=A.K()
s.r=B.c.j(0.05).gp(0)
s.c=1
for(r=0;r<u;r+=4)d.ah(new A.o(r,0),new A.o(r,v),s)
break
case"stars":for(v=e.a,u=e.b,q=this.c,p=0;p<70;++p){o=g.ai()
n=g.ai()
m=g.ai()
$.R()
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.N(new A.o(o*v,n*u),0.6+m*1.6,l)}break
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
m=new A.bu()
l.push(m)
l=j.f
if(l!=null)m.ak(l)
j.ab()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=o.j((p&1)===0?0.09:0.03).gp(0)
d.af(j,m)}break
default:$.R()
w=A.K()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.N(new A.o(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.R()
h=A.K()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.N(new A.o(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aD(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.be3.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.R(),j=A.K(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.a9
j.c=2.4
j.d=B.bu
for(w=e.a,v=e.b,v=[D.f41,new A.cu([w,0,-1,1]),new A.cu([0,v,1,-1]),new A.cu([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
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
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.r=i.j(0.9).gp(0)
d.N(new A.o(r+p*9,q+o*9),3,s)}},
aD(d){return!d.b.A(0,this.b)}}
C.uU.prototype={}
C.a_e.prototype={
S(){return new C.bea()}}
C.bea.prototype={
gor(){var w=this.d
return w===$?this.d=this.a.c:w},
gz5(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.ba(w.b,B.b6,B.aP),$.aw())}return v},
gaD9(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.ba(w.c,B.b6,B.aP),$.aw())}return v},
gasM(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.ba(w.y,B.b6,B.aP),$.aw())}return v},
t(){var w=this,v=w.gz5(0),u=v.U$=$.aw()
v.P$=0
v=w.gaD9()
v.U$=u
v.P$=0
v=w.gasM()
v.U$=u
v.P$=0
w.a3()},
atp(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jx(s,s,s,A.d(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.d7S(this,f,u),e===u,s,s,s,s))}return A.bW(B.bH,r,B.bs,s,6,8)},
az9(d){var w=null,v=B.c.j(0.07)
return A.bt(w,new A.b6(4,A.l(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lW,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gor(),a0=f.gz5(0),a1=a0.a.a,a2=f.gaD9(),a3=a2.a.a,a4=f.gasM(),a5=d.bfr(a4.a.a,a3,a1)
a1=x.w
a3=A.aF(a6,e,a1).w
a1=A.aF(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a5(190,260,A.ev(B.A,new A.a5(270,370,new C.ZW(a5,d,f.a.e,e),e),B.f,B.dD),e),e,e,e)
a0=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.az9("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8g(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.ao,e,e,e,e)
a2=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.az9("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8h(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.zR[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.r(e,e,B.f,e,e,new A.p(e,e,new A.bH(o,o,o,o),e,e,new A.a8(B.aA,B.aF,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aD
v.push(A.az(e,A.x(A.a([p,B.cQ,A.d(t.b,e,e,e,e,e,e,new A.F(!0,q,e,e,e,e,10.5,B.U,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8i(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bW(B.bH,v,B.bs,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b7.j(0.35):B.c.j(0.07)
m=new A.aN(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eH:B.L,2,B.r,-1)
q.push(A.az(e,A.r(e,A.X(D.aBJ[n],B.c,e,e,e,24),B.f,e,e,new A.p(p,e,new A.bH(o,o,o,o),new A.be(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8j(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bW(B.bH,q,B.bs,e,8,8)
a4=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.az9("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8k(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vI,e,e,e)
m=A.a([],w)
for(l=D.DQ.gdO(D.DQ),l=l.gae(l);l.C();){k=l.gR(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eH:B.aT
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.r(e,e,B.f,e,e,new A.p(j,e,new A.bH(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aD
m.push(A.az(e,A.x(A.a([j,B.bG,A.d(i,e,e,e,e,e,e,new A.F(!0,h,e,e,e,e,10,B.U,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8l(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bW(B.bH,m,B.bs,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vI,e,e,e)
k=f.gor()
return new A.D(new A.S(0,0,0,a3.f.d),A.bm(!0,new A.cP(new A.aY(0,1/0,0,a1.a.b*0.92),A.cl(A.a([D.fUK,B.af,d,B.aO,a0,B.W,a2,B.aB,D.h_X,B.T,v,B.aB,D.fUT,B.T,q,B.aB,a4,B.aB,p,B.T,m,B.aB,l,A.kX(e,9,""+B.i.V(f.gor().f),36,18,new C.d8m(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vI,e,e,e),B.am,f.atp(D.a6x,f.gor().r,new C.d8n(f),D.dCT),B.af,A.d("BORDER",e,e,e,e,e,e,M.vI,e,e,e),B.am,f.atp(D.a5S,f.gor().w,new C.d8o(f),D.dCZ),B.af,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vI,e,e,e),B.am,f.atp(D.a5O,f.gor().x,new C.d8q(f),D.dEu),B.am,A.iQ(e,B.b7,e,B.ag,e,new C.d8r(f),e,e,e,D.fOS,f.gor().z),B.bz,A.bJ(D.fTo,e,new C.d8s(f,a6),A.bp(B.b7,e,e,e,e,B.oZ,e,e,new A.b9(A.l(16),B.a1),e,e,e))],w),e,e,Z.amq,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aID.prototype={
a5(d,e){var w,v,u,t=new A.aG($.R().r,B.ai,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bu())
u=A.K()
u.sav(D.c87.aJ(0,new A.a1(0,0,0+w,0+v)))
d.af(t,u)},
aD(d){return!1}}
C.bjx.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.R()
w=A.K()
w.sav(D.c78.aJ(0,new A.a1(0,0,a2,a3)))
a4.aq(new A.a1(0,0,a2,a3),w)
v=B.i.cD(a1/112)
u=new A.e5()
u.d_(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.d8m[u.az(9)]
j=u.az(14)
J.bo(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a1(n,j,n+m,j+l)
h=A.bn(i,B.hC)
g=new A.ao(B.O,B.M,B.R,B.S,B.Q)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sav(new A.a8(B.a7,B.aa,B.x,A.a([f,k,e],w),d,d).aJ(0,i))
a4.am(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ao(B.O,B.M,B.R,B.S,B.Q)
e.r=E.kr.j(0.55).gp(0)
a4.aq(new A.a1(g,j,h,j+2),e)
e=new A.ao(B.O,B.M,B.R,B.S,B.Q)
e.r=E.kr.j(0.4).gp(0)
a4.aq(new A.a1(g,q,h,p),e)
t.restore()
j=u.az(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.sav(D.c6w.aJ(0,new A.a1(0,r,a2,q)))
a4.aq(new A.a1(0,r,a2,q),p)
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=B.w.j(0.5).gp(0)
p.y=B.kU
a4.aq(new A.a1(0,q,a2,q+14),p)}t=A.K()
t.r=D.bgr.j(0.72).gp(0)
a4.aq(new A.a1(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.K()
a3.sav(new A.bY(B.A,0.5,B.x,d,0,A.a([D.boH.j(0.22),B.L],w),d,d).aJ(0,A.bZ(new A.o(t,a1),a0)))
a4.N(new A.o(t,a1),a0,a3)},
aD(d){return!1}}
C.bcl.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cK(14,w*2,v*2.2,v*2,o,o,new A.bN(new A.p(A.ar(D.kO,D.btM,w/4),o,new A.bH(B.a1,new A.ay(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.LT,o,o,B.n),B.bi,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aLT,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aN(2,2)
t.push(A.r(o,o,B.f,o,o,new A.p(E.kr.j(0.6),o,o,new A.be(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.r(o,A.x(t,B.l,o,B.qX,B.j,0,B.p),B.f,o,o,new A.p(o,o,o,D.b4N,u,D.c85,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dq,18)],v)
t=A.ap(o,A.b2(o,o,o,new C.aID(o),D.fek),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aWw(p.y,r,L.j2,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bt(o,B.eN,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,L.j2.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,D.fDO,!0,B.a5,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,L.j2.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.W,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bt(o,B.eN,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,L.j2.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,D.fuk,!0,B.a5,B.AK,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fDG,o,o,o),B.ax,A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,L.j2.j(0.5),o,o,o,o,o,o,o,o,11,B.cI,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.T,A.A(A.a([A.E(A.r(o,o,B.f,D.Ga.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fK,A.d("\u2766",o,o,o,o,o,o,A.m(o,o,D.Ga.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.r(o,o,B.f,D.Ga.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.j,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.m(o,o,L.j2.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Za(A.cQ(A.a([A.cQ(o,o,o,o,o,o,o,o,o,D.fxz,B.a.aB(k,0,1)),A.cQ(o,o,o,o,o,o,o,o,o,o,B.a.b2(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.m(o,o,L.j2.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ce(A.x(n,B.E,o,B.e,B.j,0,B.p),B.t,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hZ,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.m(o,o,L.j2.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.r(o,A.bx(B.LT,new A.an(B.a0,o,B.ac,B.t,A.a([t,new A.D(D.bGb,A.x(s,B.al,o,B.e,B.j,0,B.p),o),A.ap(0,new A.bN(new A.p(o,o,o,o,o,new A.a8(B.a7,B.aa,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bi,o,o),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.p(o,o,o,B.LT,v,D.c8C,B.n),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.j,0,o,o))
return new A.an(B.a0,o,B.ac,B.t,l,o)}}
C.am1.prototype={
S(){return new C.am2(new A.eB(0,$.aw()),new C.bTd(),new C.amk(),D.hCt,null,null)},
gd1(){return this.d}}
C.a1U.prototype={
a7(){return"_Step."+this.b}}
C.am2.prototype={
gCx(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEd(w.c,6,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N5(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gTV(){var w=this.ghb(0)
return w.gzq()==null?"Babu":B.a.i(w.gzq().b)},
Y(){var w,v=this
v.a4()
w=v.ghb(0).gzq()
w=w==null?null:w.c
v.r.b=w===D.ox
w=v.q0(new C.bRz(v))
w.fX(0)
v.x!==$&&A.aQ()
v.x=w
v.a2z("Come closer, my children. I am "+v.gTV()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.c()
v.t()
v=w.y
if(v!=null)v.a1(0)
v=w.z
if(v!=null)v.a1(0)
w.w.t()
v=w.f
v.U$=$.aw()
v.P$=0
w.bw6()},
a2z(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.df(D.al0,new C.bRt(w))},
bst(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.m(new C.bRC(v))},
adU(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bsl(){return this.bah()},
bah(){var w=this,v=w.gCx()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bRu(w))
w.a2z(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cy(B.ma,new C.bRv(w))},
cLj(){var w=this
w.m(new C.bRy(w))
w.a2z(w.gCx()[w.as].a)},
L5(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.ad5)return
w=p.gCx()
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
t.r=s.a+1.5}q=new A.e5()
q.d_(v*7+d)
p.m(new C.bRx(p,d,u,q))
p.a2z(u?D.do9[q.az(4)]+" "+w[p.as].d:D.dkJ[q.az(3)]+" "+w[p.as].d)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCx()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bGt(t.at,t.ay,p)
t.m(new C.bRA(t,s))
t.a2z(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BU(t.a.d,s),$async$kN)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BV(r.d,r.c.a,"fire",t.at*10),$async$kN)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bRB())
w=1
break
case 4:++t.as
t.bah()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c4(v,D.Yi,new A.an(B.a0,v,B.ac,B.t,A.a([A.bS(0,new A.en(A.b2(v,v,v,new C.aWB(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.cc_(0),B.b3,w.bRC()],t),B.l,v,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cc_(d){var w,v,u,t=this,s=null,r=A.aI(s,s,s,s,B.Q_,s,s,s,new C.bRw(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCx().length;++w){v=t.as
if(w<v||t.Q===D.b17)v=B.cP
else v=w===v?B.c:B.aT
u=new A.aN(4,4)
p.push(A.r(s,s,B.f,s,s,new A.p(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,D.bBx,s,s,s,22))}p=A.E(A.x(A.a([D.fLB,A.A(p,B.l,s,B.e,B.j,0,s,s)],q),B.E,s,B.e,B.j,0,B.p),1)
v=A.l(14)
u=A.L(B.fq,B.r,1)
return new A.D(D.bHn,A.A(A.a([r,p,A.r(s,A.d("\ud83d\udd25 "+B.i.V(t.cy*100)+"%",s,s,s,s,s,s,B.iF,s,s,s),B.f,s,s,new A.p(B.aU,s,u,v,s,s,B.n),s,s,s,s,B.hf,s,s,s)],q),B.l,s,B.e,B.j,0,s,s),s)},
bRC(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghb(0).gzq()
if(h==null)w=1
else w=h.c===D.ox?0:1
v=j.dx
u=j.db
t=D.qm.j(0.96)
s=A.l(22)
r=A.L(B.cP,B.r,3)
q=A.b2(i,i,i,new C.bp8(w,i),B.az)
p=A.d(j.Q===D.ad5?j.gTV()+" asks":"Elder "+j.gTV(),i,i,i,i,i,i,D.aVp,i,i,i)
o=j.db
o=B.a.aB(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.az(B.c4,A.A(A.a([new A.a5(62,62,q,i),B.au,A.E(A.x(A.a([p,B.bG,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aVD,i,i,i)],n),B.E,i,B.e,B.j,0,B.p),1)],n),B.E,i,B.e,B.j,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbss(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.aa0("Sit down by the fire",j.gbsk()),i,i,i)
break
case 1:v=A.at(j.aa0("Ask me, Elder",j.gcLi()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCx()[j.as].b,m<u.length;++m){q=new A.aN(14,14)
l=new A.ay(D.lC,2.5,B.r,-1)
v.push(A.az(i,A.r(i,A.d(u[m],i,i,i,i,i,i,D.aVz,B.K,i,i),B.f,i,D.aew,new A.p(D.ak_,i,new A.bH(l,l,l,l),new A.be(q,q,q,q),i,i,B.n),i,i,i,i,U.wq,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bRq(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bW(B.bH,v,B.bs,i,8,8)
break
case 3:v=j.fr
u=v?B.k8:Ak.apY
u=A.X(u,v?B.er:D.lC,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.m(i,i,v?B.er:D.lC,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCx().length?"Finish":"Next story"
v=A.A(A.a([u,B.ae,q,j.aa0(v,j.gqn(j))],n),B.l,i,B.e,B.j,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCx().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aVS,i,i,i)],n)
u=j.cx
if(u>0){u=C.aQT(u)
q=C.aQT(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.abu,i,i,i))}v.push(B.T)
v.push(j.aa0("Back to the games",new C.bRr(j)))
v=A.x(v,B.l,i,B.e,B.j,0,B.p)
break
default:v=i}return A.r(i,A.x(A.a([o,B.W,v],n),B.E,i,B.e,B.P,0,B.p),B.f,i,i,new A.p(t,i,r,s,D.aDi,i,B.n),i,i,i,B.yG,B.bg,i,i,i)},
aa0(d,e){var w=null,v=A.l(16),u=A.L(B.cP,B.r,2)
return A.az(w,A.r(w,A.d(d,w,w,w,w,w,w,A2.KK,w,w,w),B.f,w,w,new A.p(D.lC,w,u,v,w,w,B.n),w,w,w,w,D.bF4,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bp8.prototype={
a5(d,e){X.fWr(d,e.ei(B.H),e.gdA()*0.45,this.b,0,0.4)},
aD(d){return d.b!==this.b}}
C.aBD.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bTd.prototype={}
C.tg.prototype={}
C.bp9.prototype={}
C.amk.prototype={
Mx(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.ide(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aWB.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.zp(l.d.Mx(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bo(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bU(0,u)
l.cAN(d,j)
l.bQa(d,j)
l.cJ4(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bo(t.save())
t.translate(225,580)
d.pk(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.R()
q=A.K()
p=x.O
o=x.n
q.sav(A.wf(B.H,r,A.a([D.bsy.j(0.55*s),F.Nm.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.N(B.H,r,q)
t.restore()
n=A.a([new A.y(528,new C.bT5(l,d,j,i)),new A.y(540,new C.bT6(l,d,j,i)),new A.y(546,new C.bT7(l,d,j,i)),new A.y(574,new C.bT8(l,d,j,i)),new A.y(612,new C.bT9(l,d,j,i)),new A.y(650,new C.bTa(l,d,j,i)),new A.y(656,new C.bTb(l,d,j,i))],x.E)
B.d.aZ(n,new C.bTc())
for(m=0;m<7;++m)n[m].b.$0()
l.bH2(d,j,i)
l.bTP(d,j)
t.restore()
$.R()
t=A.K()
t.sav(A.wf(new A.o(w/2,v*0.6),e.gaoa()*0.75,A.a([B.L,D.bgl],p),A.a([0.55,1],o),B.x,k,k,0))
d.aq(new A.a1(0,0,0+w,0+v),t)},
aD(d){return d.c!==this.c||d.d!==this.d},
cAN(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e5()
h.d_(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.R()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=t.gp(0)
d.N(new A.o(v*450,20+u*300),0.8+s*1.1,r)}q=B.i.F(e,17)/1.2
if(q<1){p=new A.o(60+q*220,70+q*90)
d.ah(p,p.aK(0,D.eo0),C.iw(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.i.F(v+o*0.05,1)
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
r=new A.c6(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.ak(i)
l.ab()
s=new A.c6(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.ak(r)
l.ab()
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.b=B.a9
s.c=1.6
s.r=D.bj2.gp(0)
s.d=B.bu
s.e=B.dT
d.af(l,s)}},
bQa(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aAf[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bs(new A.o(p,m),n*0.74,q*0.5)
k=Aa.yr.j(v)
$.R()
j=new A.ao(B.O,B.M,B.R,B.S,B.Q)
j.r=k.gp(0)
d.bZ(l,j)
q=A.bs(new A.o(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=Q.y4.j(u).gp(0)
d.bZ(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.i.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.r=D.ahj.j(0.16*(1-h)).gp(0)
d.N(new A.o(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cJ4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bDC(d,D.enX,0.9,e,D.hxN,!1,!1,D.b14,1,!1)
w=$.R().r
v=x.v
u=new A.aG(w,B.ai,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bu())
t=A.K()
t.r=D.aji.gp(0)
d.af(u,t)
C.bDC(d,D.enZ,0.95,e,D.hxI,!1,!1,D.b15,1,!0)
t=new A.aG(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.c6(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.c6(431,553,421,548))
t.E(new A.bu())
u=A.K()
u.r=F.FT.gp(0)
d.af(t,u)
u=A.bs(D.enY,8,28)
t=A.K()
t.r=D.buR.gp(0)
d.bZ(u,t)
C.bDC(d,new A.o(-30+B.i.F(e/26,1)*510,492),0.82,e,D.hxO,!0,!1,D.X8,1,!1)
t=B.i.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.bZ(A.bs(new A.o(s+q*16,r-6),16,11),C.iw(D.aj9,1.8))
u=q<0
C.bDC(d,new A.o(s-q*6,r),0.62,e,D.hxQ,!1,u,D.X8,2.2,!1)
C.bDC(d,new A.o(s-q*32,r+4),0.58,e+1,D.hxM,!1,u,D.X8,2.2,!1)
this.bWy(d,D.enC,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bs(new A.o(o,n),8,11)
k=p===1
j=k?D.aj5:D.ajI
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.r=j.gp(0)
d.bZ(l,i)
l=k?D.aj5:D.ajI
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.r=l.gp(0)
d.N(new A.o(o+5,n+(-3+m)),2.6,k)
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.b=B.a9
k.c=1
k.r=B.av.gp(0)
k.d=B.bu
k.e=B.dT
d.ah(new A.o(o+7.5,n+(-2+m)),new A.o(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.b=B.a9
k.c=1
k.r=B.av.gp(0)
k.d=B.bu
k.e=B.dT
d.ah(new A.o(o,n+4),new A.o(o,n+8),k)}h=e<f.f
u=A.bs(D.a8w,15+Math.sin(e*2)*0.8,40)
t=A.K()
t.r=D.ahI.gp(0)
d.bZ(u,t)
u=A.bs(D.a8w.a2(0,new A.o(-14,h?-9:-2)),12,15)
t=A.K()
t.r=D.bl8.gp(0)
d.bZ(u,t)
t=new A.aG(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bu())
u=A.K()
u.r=D.bli.gp(0)
d.af(t,u)
u=D.a8w.a2(0,new A.o(-17,h?-9:-2))
t=A.K()
t.r=B.ig.gp(0)
d.N(u,1.1,t)
v=new A.aG(w,B.ai,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.c6(180,588+w*(h?6:0),178,595))
d.af(v,C.iw(D.ahI,3.5))},
bWy(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a2(0,new A.o(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.R()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.b=B.a9
m.c=2
m.r=D.Yu.gp(0)
m.d=B.bu
m.e=B.dT
d.ah(new A.o(u+o,s),new A.o(u+(o+n*1.5),q),m)}w=A.bs(k,17,32)
v=$.R()
r=A.K()
r.r=D.FR.gp(0)
d.bZ(w,r)
r=A.bs(k.a2(0,D.en3),7,26)
w=A.ar(D.FR,B.w,0.12)
w.toString
q=A.K()
q.r=w.gp(0)
d.bZ(r,q)
v=new A.aG(v.r,B.ai,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bu())
s=A.K()
s.r=D.FR.gp(0)
d.af(v,s)
s=A.bs(k.a2(0,new A.o(24,-7+l)),9,12)
v=A.K()
v.r=D.FR.gp(0)
d.bZ(s,v)
v=-11+l
d.ah(k.a2(0,new A.o(22,v)),k.a2(0,new A.o(21,-17+l)),C.iw(D.Yu,1.6))
d.ah(k.a2(0,new A.o(26,v)),k.a2(0,new A.o(28,-16+l)),C.iw(D.Yu,1.6))
v=k.a2(0,new A.o(26,-8+l))
s=A.K()
s.r=B.w.gp(0)
d.N(v,0.9,s)
d.ah(k.a2(0,new A.o(26,-3+l)),k.a2(0,new A.o(26,1+l)),C.iw(D.bo_,1.4))
d.ah(k.a2(0,D.eq_),k.a2(0,new A.o(-19,-7+Math.sin(f*7)*2)),C.iw(D.FR,2.4))},
bTN(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bs(new A.o(225+u*36,574+(t*13+6)),8,11)
$.R()
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=D.btx.gp(0)
a6.bZ(u,t)}}u=A.bs(D.a8z.a2(0,B.cC),17,52)
$.R()
t=A.K()
t.r=D.bfT.gp(0)
a6.bZ(u,t)
t=A.bs(D.a8z.a2(0,B.cC),12,44)
u=D.bjr.j(0.6+0.3*Math.sin(a7*6))
s=A.K()
s.r=u.gp(0)
a6.bZ(t,s)
for(r=0;r<3;++r){v=D.dkb[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=7
o.r=D.G3.gp(0)
o.d=B.bu
o.e=B.dT
a6.ah(new A.o(u+t*24,579+s*4),new A.o(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.BE.j(0.6)
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.b=B.a9
n.c=2
n.r=t.gp(0)
n.d=B.bu
n.e=B.dT
a6.ah(new A.o(u+o*24,579+(p*4-2)),new A.o(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.f08,D.f0I,D.f1N,D.f27,D.f1L]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bqX,D.bnl,D.bsY][k]
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
a3=new A.km(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.ak(a4)
a2.ab()
g=new A.km(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.ak(a3)
a2.ab()
g=new A.bu()
f.push(g)
f=a2.f
if(f!=null)g.ak(f)
a2.ab()
g=new A.ao(B.O,B.M,B.R,B.S,B.Q)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.i.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=G.ajG.j((1-a5)*0.9)
$.R()
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.r=p.gp(0)
a6.N(new A.o(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.i.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.ahj.j(0.1*(1-a5))
$.R()
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=q.gp(0)
a6.N(new A.o(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bTP(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.i.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bv0.j(0.18*p)
$.R()
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.r=o.gp(0)
d.N(new A.o(r,q),5,n)
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.r=D.boM.j(0.9*p).gp(0)
d.N(new A.o(r,q),1.4,n)}},
c5w(d,e){switch(d){case 0:return e.b?D.hxJ:D.b0D
case 1:return e.b?D.hxP:D.b0B
case 2:return D.b0A
case 3:return D.b0z
case 4:return D.b0C
default:return D.b0E}},
aDn(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
R9(d,e,f,g){var w,v=this,u=D.a6_[e],t=v.c5w(e,g),s=new C.bp9(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a6_[e],l=e===0
m=B.i.D(((l?D.aLM:D.aLR).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a8D
s.as=D.Eg
if(l){s.a=o?v.aDn(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.o(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.o(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.Eg
if(g.a===3&&!g.d)s.e=m+Math.sin(r*6)*0.35*Math.max(0,1-r/1.8)
if(q){s.a=0.5
s.b=1
p=f*9
s.Q=new A.o(-4-Math.max(0,Math.sin(p))*7,-58)
p=s.as=new A.o(4+Math.max(0,Math.sin(p))*7,-58)}if(!q)p=!(o&&p.b<-50)
else p=!1
s.at=p}else if(e===1){s.b=0.35
if(o)s.r=Math.sin(f*2.4+1)*1.6
if(q){s.b=1
s.a=0.35+0.35*Math.max(0,Math.sin(f*13))
s.d=0.7
p=f*8
s.Q=new A.o(-4-Math.max(0,Math.sin(p))*7,-56)
s.as=new A.o(4+Math.max(0,Math.sin(p))*7,-56)
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.enb
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.eow
if(e===4)s.as=new A.o(36,-128+Math.sin(f*5)*4)}if(q){s.b=1
s.a=0.45+0.4*Math.max(0,Math.sin(f*12+e))
s.d=0.5
p=Math.max(0,Math.sin(f*9+e*1.3))*9
s.x=p
m=Math.max(0,Math.sin(f*10+e))*8
p=-56-p*0.3
s.Q=new A.o(-3-m,p)
s.as=new A.o(3+m,p)}else if(f<p){s.a=0.55
s.b=-0.1
s.c=1
s.Q=D.eqW
s.as=D.aM3}if(e===2&&g.x!=null&&f<g.y){s.a=v.aDn(f,5)
s.b=0.4
s.as=new A.o(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aDn(f,e*3)
s.b=0.5
s.c=0.4}}C.hA5(d,u.a,u.b*1.2,t,s,f,e,null)},
bH2(d,e,f){var w=new C.bT4(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd6(d){return this.c}}
C.ag6.prototype={
a7(){return"_Stand."+this.b}}
C.ae4.prototype={}
C.lr.prototype={}
C.bRP.prototype={
bBE(d){var w,v,u,t,s=A.T(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
Ga(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aZ(r,new C.bRQ())
return r},
arq(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aN4(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.J)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
amz(d){var w,v,u=A.aR(x.N),t=d,s=0
for(;;){w=t.d
if(w!=null){v=this.c
v===$&&A.c()
v=v.h(0,w)!=null&&u.J(0,t.a)}else v=!1
if(!v)break
v=this.c
v===$&&A.c()
w=v.h(0,w)
w.toString;++s
t=w}return s},
gzq(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aZ(w,new C.bRR(this))
return B.d.gH(w)}}
C.aui.prototype={}
C.zG.prototype={}
C.akW.prototype={
gC3(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bMD(),A.U(w).k("Y<1>")).gI(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
aj(){var w=this
return A.I(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.MP.prototype={
gaps(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
if(t.gC3(0))s.push(t)}return s},
aj(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.J)(w),++s){r=w[s]
p.push(A.I(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.I(["id",this.a,"title",q,"qs",p],u,t)},
d1y(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaps(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.J)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lr(B.a.i(s.a),p,B.d.co(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.baA.prototype={}
C.aa9.prototype={}
C.bhQ.prototype={}
C.ag4.prototype={}
C.ake.prototype={
S(){return new C.akf(B.bF,A.a([],x.cC),A.a([],x.e4),null,null)},
gd1(){return this.d}}
C.akf.prototype={
gMO(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEd(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gbaD(){var w,v=this,u=v.e
if(u===$){w=v.q0(v.gcc1())
v.e!==$&&A.bE()
v.e=w
u=w}return u},
Y(){this.a4()
this.gbaD().fX(0)},
t(){this.gbaD().t()
this.bw1()},
fX(d){this.m(new C.bKN(this))},
cc2(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fH(0,v)
if(w.c!=null)w.m(new C.bKI())},
b8Z(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gMO()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bhQ(u,(u+0.5)/v,w[t.x].b[u]))},
fH(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.br(w,new C.bKO())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c8m()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMO()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.i.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.asY(v,0.8,B.cP)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.asY(m.cy,0.8,G.nq)
m.aZB("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.asY(q,0.88,D.lC)
p=m.gMO()[m.x]
n=p.c
if(u===n){m.aZB("The right gourd fell! It was "+p.b[n]+".")
return}}}},
asY(d,e,f){var w,v,u,t=new A.e5()
t.d_(B.i.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.ag4(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aZB(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Qi()}},
c8m(){var w=this
if(w.x+1>=w.gMO().length){w.Qi()
return}++w.x
w.b8Z()},
Qi(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Qi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMO().length
r=C.bGt(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bKG())
w=2
return A.b(C.BU(u.a.d,r),$async$Qi)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BV(t.d,t.c.a,"catch",u.z),$async$Qi)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bKH())
return A.h(null,v)}})
return A.i($async$Qi,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cc0()
else w=v.ch?v.cc3():A.at(new A.D(B.ey,A.x(A.a([D.aWP,B.T,D.fNh,B.W,D.fTt,B.e1,C.ux("Play",v.geY(v),B.cP,B.hj,D.fA)],x.p),B.l,u,B.e,B.P,0,B.p),u),u,u,u)
return new C.tH("Calabash Catch",w,B.f7,u)},
cc3(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hN:B.HA
p.push(A.X(u,v?B.ay:B.bW,r,r,r,22))}p.push(B.b3)
v=s.x
u=s.gMO()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aVo,r,r,r))
p.push(B.bc)
v=A.l(14)
p.push(A.r(r,A.d(""+s.z,r,r,r,r,r,r,B.iF,r,r,r),B.f,r,r,new A.p(B.bA,r,r,v,r,r,B.n),r,r,r,r,B.Ci,r,r,r))
p=A.A(p,B.l,r,B.e,B.j,0,r,r)
v=A.l(18)
t=A.L(B.cP,B.r,3)
return A.x(A.a([new A.D(D.bCT,p,r),A.r(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fxr,B.K,r,r),B.f,r,r,new A.p(D.qm,r,t,v,r,r,B.n),r,r,r,B.f4,B.bg,r,r,1/0),B.am,A.E(A.cq(new C.bKM(s)),1)],q),B.l,r,B.e,B.j,0,B.p)},
cc0(){var w=this,v=null,u=A.at(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.q_,v,v,v),v,v,v),t=A.at(A.d(""+w.Q+" of "+w.gMO().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Vv,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cl(A.a([D.bdm,u,t,B.aO,new C.Ix(s,r,w.cx,v),B.aO,A.at(C.ux("Back to the games",new C.bKF(w),B.cP,B.k7,D.fA),v,v,v)],x.p),v,v,B.ad,v,v,B.ah,!1)}}
C.bd0.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.R(),a3=A.K()
a3.sav(A.jA(B.H,new A.o(0,a0),D.d2h,G.aAx,B.x,e))
a4.aq(new A.a1(0,0,a1,0+a0),a3)
a3=A.K()
a3.r=G.Nq.gp(0)
a4.N(new A.o(d*0.82,a0*0.16),22,a3)
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
w=A.K()
w.r=D.bkn.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aG(a2.r,B.ai,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.c6(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.c6(r+14,t,r+26,w))
a2.E(new A.bu())
w=A.K()
w.r=D.agm.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.co1[q]
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.r=D.agm.gp(0)
s.c=7
s.d=B.bu
a4.ah(new A.o(r,a2),new A.o(r+p*46,w),s)
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.r=D.afI.gp(0)
a4.N(new A.o(r+p*50,t),18,s)}a2=a0*0.88
w=A.K()
w.r=D.blg.gp(0)
a4.aq(new A.a1(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=D.ai0.gp(0)
t.c=2
a4.ah(new A.o(w,a1),new A.o(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.J)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bs(new A.o(u,s),12,54)
$.R()
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
l.r=D.lC.j(0.6).gp(0)
a4.bZ(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bo(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.R()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=D.ah3.gp(0)
a4.N(D.emq,14,m)
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=D.bpZ.gp(0)
m.c=4
m.d=B.bu
a4.ah(D.emr,D.eny,m)
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.sav(new A.alN(D.epH,46,D.daQ,B.DA,B.x,e,e,0))
a4.N(B.H,34,m)
m=A.bs(D.epO,8,12)
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
l.r=B.c.j(0.35).gp(0)
a4.bZ(m,l)
k=new A.iH(new A.eo(n.c,e,e,B.cL,e,e,e,e,e,e,D.fvg),B.K,B.bX,new A.jh(1),e,e,3,e,B.bY,e,B.ct)
k.o8(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bn(A.bs(B.cJ,m.gba(m)+8,l),B.fP)
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
l.r=D.qm.gp(0)
a4.am(j,l)
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
l.r=D.lC.gp(0)
l.b=B.a9
l.c=1.5
a4.am(j,l)
l=k.b
m=l.c
l=l.a.c
k.a5(a4,new A.o(-m/2,4-l.gba(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
X.Bn(a4,new A.o(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dN,F.mU,!1,(w+1)/2)
h=A.bs(new A.o(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aG($.R().r,B.ai,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.c6(h.gbw().a,s+8,w+8,s))
a3.E(new A.bu())
m=A.K()
m.r=D.Zj.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=D.BE.gp(0)
m.c=1.4
a4.ah(new A.o(t,a2),new A.o(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.K()
s.r=G.nq.gp(0)
a4.aq(new A.a1(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.K()
s.r=D.bkt.gp(0)
a4.bZ(new A.a1(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.J)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=g.e.j(B.i.D(s,0,1)).gp(0)
a4.N(new A.o(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.fq(e,B.ct,e,e,e,A.cQ(e,e,e,e,e,e,e,e,e,A.m(e,e,B.cP.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.Du,e,e),"+"+a2),B.a5,B.bX,e,B.dB,B.bY)
k.e5()
k.a5(a4,new A.o(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aD(d){return!0}}
C.QM.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b2(v,v,v,new C.aBB(w.c,w.f,v),B.az),s=A.l(10),r=A.L(B.bE,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cQ,A.r(v,A.d(w.d,v,1,B.a2,v,v,v,D.fnN,v,v,v),B.f,v,v,new A.p(B.c,v,r,s,v,v,B.n),v,v,v,v,B.n0,v,v,v)],x.p),B.l,v,B.e,B.P,0,B.p),v)},
gZ(d){return this.e}}
C.aBB.prototype={
a5(d,e){var w=e.ei(B.H),v=e.gdA(),u=this.c?0.8:0
return X.fWr(d,w,v*0.44,this.b,0,u)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aA5.prototype={}
C.auU.prototype={
S(){return new C.auV(A.T(x.S,x.cq),null,null)},
gd1(){return this.d}}
C.auV.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hFn(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gaFp(){var w=this.z
return w===$?this.z=this.Xl(0):w},
gj1(){var w,v=this.Q
if(v===$){w=this.gkS()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c0(w,-1,!1,x.S)}return v},
Xl(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aA5(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aA5(v[t],u[t],-1))
v=new A.e5()
v.d_(this.a.e*31+d)
B.d.e0(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.dq(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eO$
u.b=!1
B.d.a8(u.a)
u=u.goy()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dV$.a.a8(0)
v.qE()}this.bwu()},
cRp(d,e){var w,v,u,t,s,r=this
if(d>=r.gj1().length||r.gj1()[d]!==-1||B.d.q(r.gj1(),e))return
w=r.gaFp()[e]
v=r.gkS()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cqh(r,e,w,v))
A.cy(B.lI,new C.cqi(r))
return}++r.r
u=A.bl(null,B.hI,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.cqj(r,d,e,w,v))
u.cr(0)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkS()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cG(n,0,new C.cqk())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cql(t,r))
w=5
return A.b(C.BU(t.a.d,r),$async$kN)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BV(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cqm())
w=1
break
case 4:for(o=t.as,n=new A.dq(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eO$
p.b=!1
B.d.a8(p.a)
p=p.goy()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dV$.a.a8(0)
q.qE()}o.a8(0)
t.m(new C.cqn(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.q_,p,p,p),p,p,p)
v=r.f
v=A.at(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Vv,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tH(q,A.cl(A.a([D.afe,w,v,B.aO,new C.Ix(u,t,r.ch,p),B.aO,A.at(C.ux("Back to the games",new C.cqd(d),B.cP,B.k7,D.fA),p,p,p)],x.p),p,p,B.ad,p,p,B.ah,!1),B.f7,p)}w=r.gkS()
v=r.e
s=w[v]
return new C.tH(q,new A.D(B.uy,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aVj,B.K,p,p),A.E(A.cq(new C.cqe(r,s)),1)],x.p),B.l,p,B.e,B.j,0,B.p),p),B.f7,p)}}
C.bcu.prototype={
a5(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cQi(),A.U(b2).k("Y<1>")).gI(0),b4=a9.b,b5=b4.a2(0,B.JA)
$.R()
w=A.K()
w.r=D.lD.j(0.18+0.1*b3).gp(0)
b6.N(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a2(0,D.emd)
u=A.K()
u.r=B.on.j(0.5).gp(0)
u.c=10
u.d=B.bu
b6.ah(new A.o(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.dK.aA(0,B.i.D(b2[p],0,1))
l=$.R().r
k=A.a([],s)
j=new A.aG(l,B.ai,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ab()
o=new A.c6((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.ak(n)
j.ab()
if(m<1)for(o=new A.aG(l,j.b,j.c,b0,A.bq(k,!0,r)),n=A.a([],q),i=new A.ry(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bj(A.jI(b1));--h
g=new A.BS(i,h)
f=0
for(;;){i.iy()
e=n[h].b
e===$&&A.c()
if(!(f<e.a.length()))break
i.iy()
e=n[h].b
e===$&&A.c()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.R()
a1=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a1.r=B.aT.gp(0)
a1.b=B.a9
a1.c=3
b6.af(new A.aG(l,d,b0,new A.cu([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aG(l,j.b,j.c,b0,A.bq(k,!0,r)),n=A.a([],q),k=new A.ry(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bj(A.jI(b1));--a0
k.iy()
a1=n[a0].b
a1===$&&A.c()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.R()
a4=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a4.r=D.Gg.gp(0)
a4.b=B.a9
a4.c=h
a4.d=B.bu
b6.af(new A.aG(l,a2,b0,new A.cu([new A.BS(k,a0),0,a1*m,!0]),a3),a4)
k.iy()
a4=n[a0].b
a4===$&&A.c()
a4=a4.a.length()
k.iy()
a5=n[a0].Di(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bs(new A.o(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a3.r=B.b5.gp(0)
b6.bZ(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iH(D.fng,B.a5,B.bX,new A.jh(1),b0,b0,b0,b0,B.bY,b0,B.ct)
a8.e5()
a8.a5(b6,new A.o(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aD(d){return!0}}
C.ayR.prototype={
S(){return new C.ayS(A.aR(x.S))},
gd1(){return this.d}}
C.ayS.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hGh(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
Y(){this.a4()
this.b97()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a3()},
b97(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.df(B.rV,new C.cFf(this))},
bq3(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkS()[v.e]
if(w.e[d]===w.b)v.m(new C.cFn(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cFo(v,d))
A.cy(B.iP,new C.cFp(v))}},
cWS(){var w=this
if(!w.as&&w.f<w.gkS()[w.e].d.length)w.m(new C.cFq(w))},
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
t.m(new C.cFr(t,s))
w=5
return A.b(C.BU(t.a.d,s),$async$kN)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BV(q.d,q.c.a,"who",t.r),$async$kN)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cFs())
w=1
break
case 4:t.m(new C.cFt(t))
t.b97()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.d(""+a0.w+" of "+a0.gkS().length+" guessed",a2,a2,a2,a2,a2,a2,B.q_,a2,a2,a2),a2,a2,a2)
v=A.at(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Vv,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tH(a1,A.cl(A.a([D.bdy,w,v,B.aO,new C.Ix(u,t,a0.ax,a2),B.aO,A.at(C.ux("Back to the games",new C.cFh(a3),B.cP,B.k7,D.fA),a2,a2,a2)],x.p),a2,a2,B.ad,a2,a2,B.ah,!1),B.f7,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkS()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.KS,B.K,a2,a2),B.W,A.at(A.lB(new C.cFi(a0,r),a2,B.b0,B.hI,a2,a2,new A.br(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aN(16,16)
l=new A.ay(B.cP,2,B.r,-1)
k=o+1
w.push(new A.r6(new A.br(0,1,u),new C.cFj(),A.r(a2,new A.c8(B.aL,B.e,B.j,B.l,a2,B.p,a2,0,A.a([new A.qG(A.d(""+k,a2,a2,a2,a2,a2,a2,B.o0,a2,a2,a2),D.lC,a2,12,a2),B.au,new A.bz(1,B.bb,A.d(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fA4,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.p(D.qm,a2,new A.bH(l,l,l,l),new A.be(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cy,B.bg,a2,a2,a2),B.b0,B.iP,a2,new A.bC("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bO(!1,D.h0n,a2,a2,!0,a2,a2,a2,a0.gcWR(),a2,a2),a2,a2,a2))
w.push(B.T)
if(a0.as){u=D.lD.j(0.2)
q=A.l(16)
p=A.L(D.lD,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fR,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.r(a2,A.x(A.a([m,B.W,C.ux(v,a0.gqn(a0),B.cP,B.jI,D.fA)],t),B.l,a2,B.e,B.j,0,B.p),B.f,a2,a2,new A.p(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bI,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dn:B.cP.j(0.2)
g=new A.aN(16,16)
l=new A.ay(n.q(0,o)?B.fi:B.cP,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bW:B.c
d=n.q(0,o)?B.xk:a2
t.push(new A.r6(new A.br(0,i,u),new C.cFk(),A.az(a2,A.r(a2,A.d(f,a2,a2,a2,a2,a2,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.aep,new A.p(h,a2,new A.bH(l,l,l,l),new A.be(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jq,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cFl(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b0,B.mc,a2,new A.bC("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bW(B.fU,t,B.bs,a2,10,10))}return new C.tH(a1,A.cl(w,a2,a2,B.am_,a2,a2,B.ah,!1),B.f7,a2)}}
C.azR.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aH2.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.afT.prototype={
aqY(d){},
aru(){var w=this,v=w.q0(new C.f76(w))
v.fX(0)
w.LX$!==$&&A.aQ()
w.LX$=v}}
C.aKQ.prototype={
gbmv(d){var w=this.c
return B.a.aB(w,0,Math.min(this.d,w.length))},
VV(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.df(D.al0,new C.fhg(w))},
bsr(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.ama.prototype={
S(){return new C.amb(new C.amk(),A.a([],x.t),new A.eB(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.amb.prototype={
gMM(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEd(w.c,10,w.e,!0)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N5(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqv(){var w=this.r
return w===$?this.r=new C.aKQ(new C.bSB(this)):w},
gapO(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMM()[v].c)u.push(1)
return u.length},
gblP(){var w=this.ghb(0)
return w.gzq()==null?"Elder":B.a.i(w.gzq().b)},
Y(){this.a4()
this.aru()},
t(){var w,v=this
v.gqv().t()
v.f.t()
w=v.LX$
w===$&&A.c()
w.t()
w=v.q9$
w.U$=$.aw()
w.P$=0
v.bw9()},
cLv(){var w=this
w.m(new C.bSy(w))
w.gqv().VV(w.gMM()[w.x].a)},
L5(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqv()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.q9$.a
v.ax=u
v.ay=u+1
v.m(new C.bSw())
A.cy(B.hI,new C.bSx(v))},
bq_(){var w=this.gapO(0)/this.gMM().length*100
if(w>=90)return D.eXZ
if(w>=75)return D.eW0
if(w>=60)return D.eMG
if(w>=45)return D.eQ6
return D.eH5},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cu1()
w=A.bS(0,new A.en(A.b2(m,m,m,new C.btb(n,n.q9$),B.az),m),0,0,0)
if(!n.Q){v=D.qm.j(0.96)
u=A.l(20)
t=A.L(B.cP,B.r,3)
u=A.r(m,A.x(A.a([A.d("Elder "+n.gblP()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aWc,B.K,m,m),B.W,C.ux("Start the test",n.gBU(),B.cP,B.j6,D.fA)],x.p),B.l,m,B.e,B.P,0,B.p),B.f,m,m,new A.p(v,m,t,u,m,m,B.n),m,m,m,m,B.bI,m,m,m)
v=u}else{v=n.x
u=n.gMM()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aWe,m,m,m)
if(n.Q){t=n.gqv()
t=t.d<t.c.length}else t=!1
if(t)u=D.ffK
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aN(10,10)
o=new A.ay(D.BE,4,B.r,-1)
s.push(A.az(m,A.r(m,A.d(q[r],m,m,m,m,m,m,D.fr2,B.K,m,m),B.f,m,D.aep,new A.p(D.bgq,m,new A.bH(o,o,o,o),new A.be(p,p,p,p),m,m,B.n),m,m,m,m,B.Oc,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bSz(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bW(B.fU,s,B.bs,new A.bC("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.oy(u,B.mV,A.pU(),B.b0,B.b0,A.LH())],x.p),B.l,m,B.e,B.P,0,B.p)
v=u}return new C.tH("Village School",new A.an(B.a0,m,B.ac,B.t,A.a([w,A.ap(10,v,m,m,10,10,m,m)],x.p),m),B.f7,m)},
cu1(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bq_(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMM()[v].c)g.push(v)
u=A.l(22)
t=A.L(B.cP,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fvz,B.K,i,i)
r=A.d("Signed by Elder "+j.gblP(),i,i,i,i,i,i,D.fuc,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fzp,i,i,i),D.ez0],q)
o=A.d(h.b,i,i,i,i,i,i,D.fBl,i,i,i)
n=j.gapO(0)
m=j.gMM()
u=A.r(i,A.x(A.a([D.fMw,B.ax,s,r,B.W,new A.an(B.A,i,B.ac,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.abu,i,i,i),B.T,D.asP],q),B.l,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(D.qm,i,t,u,i,i,B.n),i,i,i,i,B.ft,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.Ix(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aO,D.h1r,B.T],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.J)(g),++l){v=g[l]
r=new A.aN(14,14)
k=new A.ay(B.bA,1,B.r,-1)
p=m[v]
u.push(A.r(i,A.x(A.a([A.d(p.a,i,i,i,i,i,i,B.h1,i,i,i),B.ax,A.d("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fwK,i,i,i),A.d(p.d,i,i,i,i,i,i,D.fz1,i,i,i)],q),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.dn,i,new A.bH(k,k,k,k),new A.be(r,r,r,r),i,i,B.n),i,i,i,B.cy,B.bg,i,i,i))}B.d.v(s,u)}s.push(B.aB)
s.push(A.at(C.ux("Back to the games",new C.bSs(j),B.cP,B.k7,D.fA),i,i,i))
return new C.tH("Village School",A.cl(s,i,i,B.bQ,i,i,B.ah,!1),B.f7,i)}}
C.btb.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.q9$.a
a0.zp(e.f.Mx(a1))
w=C.hcV(a1)
v=a0.c
J.bo(v.save())
v.translate(w.a,w.b)
a0.bU(0,w.c)
if(e.Q){u=e.gqv()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.cXB[s]-6
$.R()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=D.G3.gp(0)
a0.aq(new A.a1(u,340,u+12,450),r)}u=A.bn(D.a9x.cn(10),B.i6)
$.R()
r=A.K()
r.r=D.BE.gp(0)
a0.am(u,r)
r=A.bn(D.a9x,B.hU)
u=A.K()
u.sav(A.jA(new A.o(30,96),new A.o(420,346),D.dga,f,B.x,f))
a0.am(r,u)
q=new A.e5()
q.d_(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bs(new A.o(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=B.c.j(0.025).gp(0)
a0.bZ(o,r)}u=A.K()
u.r=I.aiQ.gp(0)
a0.aq(new A.a1(30,354,420,362),u)
u=A.K()
u.r=B.aS.gp(0)
a0.aq(D.f78,u)
u=A.K()
u.r=B.bM.gp(0)
a0.aq(D.f7c,u)
u=A.bn(D.f72,B.hT)
r=A.K()
r.r=D.Zj.gp(0)
a0.am(u,r)
n=B.i.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqv().gbmv(0)
m=A.fq(f,B.ct,f,7,f,A.cQ(f,f,f,f,f,f,f,f,f,D.fDz,u+(t?"|":"")),B.a5,B.bX,f,B.dB,B.bY)
m.o8(346)
J.bo(v.save())
u=A.hU(D.a9x)
r=$.mh()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hU(new A.a1(30+390*n,96,420,346)),r[1],!0)
m.a5(a0,new A.o(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bn(new A.a1(u,r,u+40,r+90),B.fP)
u=A.K()
u.r=D.bvO.gp(0)
a0.am(r,u)}}else{m=A.fq(f,B.ct,f,f,f,D.fnw,B.K,B.bX,f,B.dB,B.bY)
m.o8(340)
m.a5(a0,new A.o(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.i.F(u+p/8,1)
o=B.o.F(e.gqv().d*9,310)
k=Math.sin(p+r)
j=new A.ao(B.O,B.M,B.R,B.S,B.Q)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.N(new A.o(70+o+k*6,166+l*70),1.6,j)}u=e.ghb(0).gzq()
i=(u==null?f:u.c)===D.ox?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.f77(d,a0,i,t,h,D.enn)),new A.y(520,new C.f78(a0,d,t)),new A.y(575,new C.f79(a0,d,t)),new A.y(585,new C.f7a(this,a0,d,t)),new A.y(615,new C.f7b(this,t,a0,d,h))],x.E)
B.d.aZ(g,new C.f7c())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cc4(d,e){var w,v,u,t,s,r,q,p=$.R(),o=A.a([],x.v),n=new A.aG(p.r,B.ai,null,null,o)
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
n.ab()}}n.E(new A.bu())
return n},
aD(d){return!1}}
C.am8.prototype={
S(){return new C.am9(new C.amk(),A.T(x.S,x.i),new A.eB(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.am9.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hFb(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gj1(){var w=this.z
return w===$?this.z=this.FJ(0):w},
gaLF(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FJ(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.co(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FJ(0):r).length);++v}s.Q=w
r=w}return r},
FJ(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e3(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e5()
u.d_(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f1(u,new C.bSe())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Y(){this.a4()
this.aru()},
t(){var w,v=this
v.e.t()
w=v.LX$
w===$&&A.c()
w.t()
w=v.q9$
w.U$=$.aw()
w.P$=0
v.bw8()},
aqY(d){var w,v,u,t,s,r=this,q=r.gj1().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.co(u===$?r.z=r.FJ(0):u,v)
s=r.gaLF()
s[v]=s[v]+(450*(t+0.5)/q-r.gaLF()[v])*Math.min(1,w)}},
d1d(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj1().length)return
w=v.y
if(w===-1){v.m(new C.bSp(v,d))
return}if(w===d){v.m(new C.bSq(v))
return}v.m(new C.bSr(v,B.d.co(v.gj1(),v.y),d,B.d.co(v.gj1(),d)))},
cMc(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FJ(0):u).length))break
t=s.gkS()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FJ(0):u)[v]]===v);++v}s.m(new C.bSk(s,B.d.cE(w,new C.bSl())))},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkS().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bSm(t,s))
w=5
return A.b(C.BU(t.a.d,s),$async$kN)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BV(q.d,q.c.a,"lineup",t.r*10),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bSn())
w=1
break
case 4:t.m(new C.bSo(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.d(""+l.r+" of "+l.gkS().length+" lines right",k,k,k,k,k,k,B.q_,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tH("Line Up",A.cl(A.a([D.afe,w,B.aO,new C.Ix(v,u,l.ch,k),B.aO,A.at(C.ux("Back to the games",new C.bSg(d),B.cP,B.k7,D.fA),k,k,k)],x.p),k,k,B.ad,k,k,B.ah,!1),B.f7,k)}w=A.a([],x.t)
for(t=0;v=l.gkS(),t<v[l.f].d.length;++t)w.push(t)
B.d.aZ(w,new C.bSh(l))
u=A.bS(0,A.cq(new C.bSi(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aWe,k,k,k)
s=v[s]
q=x.p
s=A.ap(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fw0,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fyf,B.K,k,k)],q),B.l,k,B.e,B.j,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.l(16)
n=l.ax
m=A.L(n?D.lD:G.nq,B.r,2)
r.push(A.r(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bSj(l),x.cM).aO(0,", then ")+".",k,k,k,k,k,k,D.fAr,k,k,k),B.f,k,k,new A.p(p,k,m,o,k,k,B.n),k,k,k,B.d6,B.bg,k,k,1/0))}if(!l.at)r.push(C.ux("That is my line!",l.gcMb(l),B.cP,B.hM,D.fA))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.ux(w,l.gqn(l),B.cP,B.jI,D.fA))}return new C.tH("Line Up",new A.an(B.a0,k,B.ac,B.t,A.a([u,s,A.ap(12,A.x(r,B.l,k,B.e,B.P,0,B.p),k,k,12,12,k,k)],q),k),B.f7,k)}}
C.bjF.prototype={
a5(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.q9$.a
c7.zp(c5.e.Mx(c8))
w=C.hcV(c8)
v=c7.c
J.bo(v.save())
v.translate(w.a,w.b)
c7.bU(0,w.c)
u=c5.gj1().length
t=$.R().r
s=x.v
r=new A.aG(t,B.ai,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.c6(225,500,440,470))
q=A.K()
q.r=D.Zj.gp(0)
q.b=B.a9
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
m=new A.bu()
l.push(m)
l=k.f
if(l!=null)m.ak(l)
k.ab()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=[B.cP,G.nq,D.lD,B.aH][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b1d(c7,"OLDEST",D.eol,B.cP)
this.b1d(c7,"YOUNGEST",D.enO,B.b5)
t=A.bn(D.f6X,B.fP)
s=A.K()
s.r=D.G3.gp(0)
c7.am(t,s)
s=A.bn(D.f6W,B.hU)
t=A.K()
t.r=D.BE.gp(0)
c7.am(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.aZ(t,new C.drD())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.J)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.co(a1===$?c5.z=c5.FJ(0):a1,f)
o=c5.gaLF()[f]
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
a9=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a9.r=B.cP.j(0.22+0.1*Math.sin(e)).gp(0)
c7.N(new A.o(o,520),54,a9)}a9=D.dk_[B.o.F(b0,6)]
if(b1)b3=1
else b3=a7?-0.4:0.35
if(b1)b4=0.4+0.4*b2
else b4=h&&a7?0.5:0
if(h&&a7)b5=1
else b5=a3?0.6:0
b6=b1?0.5:0
b7=a7?Math.sin(d)*0.5:0
b8=b1?a4+b2*8:a4
if(b1)b9=new A.o(-3-b2*8,-56)
else b9=a3?D.eqs:c4
if(b1)c0=new A.o(3+b2*8,-56)
else if(h&&a7)c0=D.aM3
else c0=a3?new A.o(30,-104+Math.sin(e)*5):c4
C.SF(c7,new A.o(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.JC,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iH(new A.eo(a8,c4,c4,B.cL,c4,c4,c4,c4,c4,c4,D.ftI),B.a5,B.bX,new A.jh(1),"\u2026",c4,1,c4,B.bY,c4,B.ct)
c1.o8(q)
c2=A.bn(A.bs(new A.o(o,650),24,c1.b.c+16),B.fP)
$.R()
a8=new A.ao(B.O,B.M,B.R,B.S,B.Q)
if(a6)a9=B.id
else a9=a7?B.rP:D.qm
a8.r=a9.gp(0)
c7.am(c2,a8)
a8=new A.ao(B.O,B.M,B.R,B.S,B.Q)
if(a6)a9=D.lD
else a9=a7?G.nq:D.lC
a8.r=a9.gp(0)
a8.b=B.a9
a8.c=2
c7.am(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a5(c7,new A.o(o-a9/2,650-a8.gba(a8)/2))
c3=new A.iH(new A.eo(""+(a2+1),c4,c4,B.cL,c4,c4,c4,c4,c4,c4,D.fu1),B.a5,B.bX,new A.jh(1),c4,c4,c4,c4,B.bY,c4,B.ct)
c3.e5()
c3.a5(c7,new A.o(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.i.F(p*53+Math.sin(c5+p)*20,450)
q=B.i.F(t+p*37,420)
J.bo(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bs(B.H,4,8)
$.R()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=[B.cP,G.nq,D.lD,B.aH,B.c][B.o.F(p,5)].gp(0)
c7.aq(q,m)
v.restore()}v.restore()},
b1d(d,e,f,g){var w,v,u=null,t=A.fq(u,B.ct,u,u,u,A.cQ(u,u,u,u,u,u,u,u,u,A.m(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.Du,u,u),e),B.a5,B.bX,u,B.dB,B.bY)
t.e5()
w=t.b
v=w.c
w=w.a.c
t.a5(d,f.aK(0,new A.o(v/2,w.gba(w)/2)))},
aD(d){return!1}}
C.a2c.prototype={
a7(){return"_Trip."+this.b}}
C.am4.prototype={
S(){return new C.am5(D.Xd,new A.eB(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.am5.prototype={
gDu(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEd(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N5(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqv(){var w=this.f
return w===$?this.f=new C.aKQ(new C.bS0(this)):w},
gTV(){var w=this.ghb(0)
return w.gzq()==null?"Grandma":B.a.i(w.gzq().b)},
Y(){this.a4()
this.aru()},
t(){var w,v=this
v.gqv().t()
w=v.LX$
w===$&&A.c()
w.t()
w=v.q9$
w.U$=$.aw()
w.P$=0
v.bw7()},
aqY(d){var w,v,u,t=this
if(t.r!==D.adf)return
w=B.dE.aA(0,B.i.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDu()
if(v+1>=u.length){t.r=D.adg
t.WR()}else{++t.w
t.ay=!1
t.r=D.Xe
t.gqv().VV(u[t.w].a)}if(t.c!=null)t.m(new C.bRZ())}},
WR(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$WR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqv().VV("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDu().length
r=C.bGt(t,u.z,s)
u.as=r
w=2
return A.b(C.BU(u.a.d,r),$async$WR)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BV(s.d,s.c.a,"journey",u.x*10),$async$WR)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bRT())
return A.h(null,v)}})
return A.i($async$WR,v)},
brj(){this.aUl()},
aUl(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.adf
if(w.c!=null)w.m(new C.bRU())},
L5(d){var w,v,u,t,s=this
if(s.r!==D.Xe)return
w=s.gDu()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bRY(s,d,v))
u=s.gqv()
t=s.w
u.VV(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cRo(){if(this.r!==D.Bc)return
this.aUl()},
B(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.en(A.b2(s,s,s,new C.bj5(t,t.q9$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDu().length;++w){v=t.w
if(w<v||t.r===D.adg)v=B.cP
else v=w===v?B.c:B.aT
u=new A.aN(4,4)
p.push(new A.bz(1,B.bb,A.r(s,s,B.f,s,s,new A.p(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,B.wu,s,s,s,s),s))}p.push(B.bm)
p.push(D.fOa)
return new C.tH("Safari Journey",new A.an(B.a0,s,B.ac,B.t,A.a([r,A.ap(s,A.A(p,B.l,s,B.e,B.j,0,s,s),s,s,12,12,2,s),A.ap(10,t.clF(),s,s,10,10,s,s)],q),s),B.f7,s)},
clF(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bRX(o),l=D.qm.j(0.96),k=A.l(22),j=A.L(B.cP,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTV()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aWc,B.K,n,n),B.W,C.ux("Start the journey",o.gbri(),B.cP,D.bQz,D.fA)],x.p),B.l,n,B.e,B.P,0,B.p)
break
case 3:w=D.bd7
break
case 1:w=o.w
v=o.gDu()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aN(14,14)
p=new A.ay(D.lC,2.5,B.r,-1)
t.push(A.az(n,A.r(n,A.d(r[s],n,n,n,n,n,n,D.aVz,B.K,n,n),B.f,n,D.aew,new A.p(D.ak_,n,new A.bH(p,p,p,p),new A.be(q,q,q,q),n,n,B.n),n,n,n,n,U.wq,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bRV(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.T,A.bW(B.bH,t,B.bs,n,8,8)],u),B.E,n,B.e,B.P,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDu().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.T,new A.bL(B.aa,n,n,C.ux(v,o.gcRn(),B.cP,B.jI,D.fA),n)],x.p),B.E,n,B.e,B.P,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTV()),B.T,A.d(""+o.x+" of "+o.gDu().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aVS,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aQT(v)
u=C.aQT(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.abu,n,n,n))}w.push(B.T)
w.push(A.at(C.ux("Back to the games",new C.bRW(o),B.cP,B.k7,D.fA),n,n,n))
w=A.x(w,B.E,n,B.e,B.P,0,B.p)
break
default:w=n}return A.r(n,w,B.f,n,n,new A.p(l,n,j,k,D.aDi,n,B.n),n,n,n,n,B.bg,n,n,n)}}
C.bj5.prototype={
a5(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.q9$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDu(),d0=B.i.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.adf,d2=c7*0.5
c8=A.ar(D.bhT,D.bsf,d0)
c8.toString
w=A.ar(D.Yw,G.ahA,d0)
w.toString
v=A.ar(B.ua,D.bqI,d0)
v.toString
$.R()
u=A.K()
t=x.O
u.sav(A.jA(B.H,new A.o(0,d2),A.a([c8,w,v],t),G.a4t,B.x,c3))
d3.aq(new A.a1(0,0,0+c6,0+c7),u)
s=new A.o(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.K()
u.sav(A.wf(s,60,A.a([D.br6,B.L],t),c3,B.x,c3,c3,0))
d3.N(s,60,u)
u=A.K()
u.r=B.YI.gp(0)
d3.N(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.i.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dzf[o]
$.R()
u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.r=B.c.j(0.75).gp(0)
d3.N(new A.o(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.R()
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
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.r=A.ar(l===0?D.bgs:D.bve,D.bln,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cc5(d3,new A.o(B.i.F(B.i.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.R()
w=A.K()
v=A.ar(D.aj9,D.Gg,d0)
v.toString
w.sav(A.jA(new A.o(0,d2),new A.o(0,c7),A.a([v,D.br8],t),c3,B.x,c3))
d3.aq(new A.a1(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.K()
w.r=D.bkH.gp(0)
d3.aq(new A.a1(0,a0,c6,a1),w)
w=A.K()
w.r=D.buV.gp(0)
d3.aq(new A.a1(0,a0-3,c6,a0),w)
for(q=-B.i.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.r=I.MJ.gp(0)
d3.aq(new A.a1(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.R()
b2=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b2.r=D.bg7.gp(0)
d3.aq(new A.a1(b0,v,b0+52,u),b2)
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
b0=new A.bu()
b2.push(b0)
b2=b1.f
if(b2!=null)b0.ak(b2)
b1.ab()
b0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b0.r=D.bt6.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b1.r=D.fA.gp(0)
d3.aq(new A.a1(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b0.r=D.G3.gp(0)
d3.aq(new A.a1(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bn(new A.a1(b0,a4,b0+60,a5),B.iE)
b0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b0.r=D.bwj.gp(0)
d3.am(b5,b0)
b0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b0.r=D.BE.gp(0)
b0.b=B.a9
b0.c=2
d3.am(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iH(new A.eo(b6,c3,c3,B.cL,c3,c3,c3,c3,c3,c3,D.fs9),B.a5,B.bX,new A.jh(1),c3,c3,c3,c3,B.bY,c3,B.ct)
b7.e5()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a5(d3,new A.o(b4-b1/2,a2-b0.gba(b0)/2))
if(a7)b8=c4.r===D.adg
else if(r===c4.w){b0=c4.r
b0=b0===D.Xe||b0===D.Bc
b8=b0}else b8=!1
if(a7){b0=c4.ghb(0).gzq()
b9=(b0==null?c3:b0.c)===D.ox?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqv()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.Bc
b0=c0?C.hBA(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.Xe?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.o(40,-110+Math.sin(g)*10)
else a7=c0?new A.o(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.SF(d3,new A.o(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.o(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bIq(d3,new A.o(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.i.F(w+r/7,1)
$.R()
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=D.bup.j(0.5*(1-c2)).gp(0)
d3.N(new A.o(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.Xd)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.i.F(w+r/5,1)
t=Math.sin(r+c8)
$.R()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.N(new A.o(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.Bc&&c4.ax){b7=A.fq(c3,B.ct,c3,c3,c3,A.cQ(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.m(c3,c3,B.cP,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A6.IC,c3,c3),"BEEP BEEP!"),B.a5,B.bX,c3,B.dB,B.bY)
b7.e5()
b7.a5(d3,new A.o(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cc5(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ar(D.bqC,D.bk_,g)
o.toString
if(f){w=new A.aG($.R().r,B.ai,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.aZ(v-16,u))
t=u-36
s=u-56
w.E(new A.c6(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.c6(v+9,t,v+16,u))
w.E(new A.bu())
t=A.K()
t.r=D.ZN.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d0z[r]
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=D.ZN.gp(0)
p.c=4
p.d=B.bu
d.ah(new A.o(w,t),new A.o(v+q*24,s),p)
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=o.gp(0)
d.N(new A.o(v+q*26,u),10,p)}}else{w=e.a2(0,D.eqp)
$.R()
v=A.K()
v.r=D.bg9.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bs(e.a2(0,D.eqq),16,60)
w=A.K()
w.r=o.gp(0)
d.bZ(v,w)}},
bIq(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.Xd?0.045:0,a1=a2.c
J.bo(a1.save())
a1.translate(a3.a,a3.b+e)
a2.hW(0,a0)
for(w=0;w<2;++w){v=D.drE[w]
u=d.ay&&d.r!==D.Xd&&v>0
J.bo(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.R()
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.r=D.bv6.gp(0)
a2.N(B.H,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.r=D.bnr.gp(0)
a2.N(B.H,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=B.bo.gp(0)
q.c=2
a2.ah(B.H,new A.o(s*9,t*9),q)}a1.restore()}p=A.u4(D.f7j,B.fP,B.fP,B.ip,B.hS)
$.R()
t=A.K()
t.sav(A.jA(D.emt,B.a8r,D.dhx,G.a4t,B.x,f))
a2.am(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.r=D.dbA[B.o.F(o,4)].gp(0)
a2.aq(new A.a1(t,-26,t+10,-19),s)}n=d.r===D.Bc&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a1(s,-66,q,-36)
J.bo(a1.save())
a1.clipRRect(A.nR(A.bn(l,B.mw)),$.np(),!0)
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.r=D.Yw.gp(0)
a2.aq(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.Bc?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.SF(a2,new A.o(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aLV,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bn(l,B.mw)
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.r=D.ak1.gp(0)
i.b=B.a9
i.c=2
a2.am(j,i)}d=A.bn(D.UB,B.mw)
t=A.K()
t.r=D.Yw.gp(0)
a2.am(d,t)
J.bo(a1.save())
a1.clipRRect(A.nR(A.bn(D.UB,B.mw)),$.np(),!0)
C.SF(a2,new A.o(D.UB.gbw().a,-10),0,0,0.7,-0.1,f,f,D.aLV,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bn(D.UB,B.mw)
d=A.K()
d.r=D.ak1.gp(0)
d.b=B.a9
d.c=2
a2.am(t,d)
d=A.K()
d.r=Am.Gh.gp(0)
a2.N(D.eoz,4,d)
d=A.K()
d.r=D.G3.gp(0)
a2.aq(D.f8s,d)
for(w=0;w<3;++w){v=D.drG[w]
d=A.bn(new A.a1(v,-96,v+28,-79),B.iE)
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=D.Gg.gp(0)
a2.am(d,t)}a1.restore()},
aD(d){return!1}}
C.aBE.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bgD.prototype={}
C.aBG.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bgE.prototype={}
C.aBH.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bgF.prototype={}
C.a6E.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b2(w,w,w,new C.bjc(w),B.az),w)}}
C.bjc.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dpD[B.o.F(n,6)]
k=$.R()
j=new A.ao(B.O,B.M,B.R,B.S,B.Q)
j.r=l.gp(0)
d.aq(new A.a1(m,0,m+v,u),j)
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
k=new A.bu()
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aD(d){return!1}}
C.tH.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aI(w,w,w,w,B.Q_,w,w,w,new C.bRS(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.fpp,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c4(w,D.Yi,A.r(w,A.bm(!0,A.x(A.a([D.c5a,new A.D(D.bHr,A.A(u,B.l,w,B.e,B.j,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.b8w,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.Ix.prototype={
B(d){var w=null,v=this.d,u=C.aQT(v),t=C.ijW(v),s=B.c.j(0.08),r=A.l(18),q=A.L(B.cP.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.frV,w,w,w)],x.p)
if(this.e)p.push(D.esT)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.h1,w,w,w))
if(t!=null)p.push(new A.D(B.uw,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.AR,w,w,w),w))
return A.r(w,A.x(p,B.l,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(s,w,q,r,w,w,B.n),w,w,w,w,B.bI,w,w,w)}}
C.Wq.prototype={
S(){return new C.bm_(A.T(x.N,x.S),B.o.F(Date.now(),1e5))},
cYg(d){return this.f.$1(d)},
ge3(){return this.d}}
C.bm_.prototype={
gSU(){var w=this.d
return w===$?this.d=this.a.c:w},
Y(){this.a4()
this.Pv()},
Pv(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Pv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bSD(u.a.d),$async$Pv)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dfz[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bSC(p,(o===$?u.d=q.c:o).a,r),$async$Pv)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e1L(u,n))
return A.h(null,v)}})
return A.i($async$Pv,v)},
uA(d){return this.coI(d)},
coI(d){var w=0,v=A.j(x.H),u=this,t
var $async$uA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a6(t,!1).ce(A.ec(new C.e1M(d),!1,null,x.H)),$async$uA)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Pv()
return A.h(null,v)}})
return A.i($async$uA,v)},
gb6w(){var w,v,u,t=C.N5(this.gSU()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2s(d){return this.cvV(d)},
cvV(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2s=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.J)(d),++s)r.push(d[s].aj())
w=2
return A.b(u.a.cYg(r),$async$a2s)
case 2:if(u.c!=null)u.m(new C.e1N(u,r))
return A.h(null,v)}})
return A.i($async$a2s,v)},
OP(d){return this.bR8(d)},
bR8(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$OP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hfb(t.gSU())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.MP("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a6(s,!1).ce(A.ec(new C.e1J(q),!1,null,r)),$async$OP)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.J)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bj(j,new C.e1K(p))
o=s.length
B.d.c9(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2s(A.cW(s,0,A.dA(2,"count",x.S),r).dn(0)),$async$OP)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OP,v)},
XN(d,e){return this.bOI(0,e)},
bOI(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$XN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cg(null,null,!0,null,new C.e1I(e),o,null,!0,!0,x.y),$async$XN)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hfb(u.gSU()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.J)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2s(o),$async$XN)
case 5:case 3:return A.h(null,v)}})
return A.i($async$XN,v)},
aa8(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e1F(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.l(20)
u=A.L(B.aT,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cC,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.Vq,p,p,p),B.b3],s)
q=A.l(10)
r.push(A.r(p,A.d(i,p,p,p,p,p,p,D.fqi,p,p,p),B.f,p,p,new A.p(B.hx,p,p,q,p,p,B.n),p,p,p,p,B.Cu,p,p,p))
return A.az(p,A.d3(A.r(p,A.x(A.a([A.A(r,B.l,p,B.e,B.j,0,p,p),B.b3,A.d(e,p,2,p,p,p,p,D.fy8,p,p,p),B.cQ,A.d(f,p,3,B.a2,p,p,p,D.fr0,p,p,p)],s),B.E,p,B.e,B.j,0,B.p),B.f,p,p,new A.p(p,p,u,v,t,new A.a8(B.aA,B.aF,B.x,w,p,p),B.n),p,p,p,p,B.yL,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
Xg(d,e,f,g,h,i){return this.aa8(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.N5(s.gSU()),p=s.gSU(),o=C.aQT(s.e),n=C.hfb(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e1O(s),k=C.hFb(p,1).length,j=C.hFn(p,1).length,i=C.hGh(p,1).length,h=B.c.j(0.07),g=A.l(20),f=A.L(B.cP.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,K.abj,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fvD,r,r,r),a0=q.b.length,a1=x.p
g=A.r(r,A.A(A.a([e,B.bc,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.VI,r,r,r)],a1),B.E,r,B.e,B.j,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.q_,r,r,r),D.fUw],a1),B.l,r,B.e,B.j,0,B.p)],a1),B.l,r,B.e,B.j,0,r,r),B.f,r,r,new A.p(h,r,f,g,r,r,B.n),r,r,r,r,B.bI,r,r,r)
f=s.Xg("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aE,new C.e1P(s,p),l.$1("kahoot"))
h=s.Xg("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lC,new C.e1Q(s,p),l.$1("fire"))
a0=s.Xg("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.wd,new C.e1R(s,p),l.$1("catch"))
j=j!==0?new C.e1U(s,p):r
j=s.aa8("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.ht,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e1V(s,p):r
i=s.aa8("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.kL,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.Xg("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.eZ,new C.e1W(s,p),l.$1("journey"))
k=k!==0?new C.e1X(s,p):r
k=A.a([g,B.aO,D.fYw,B.T,A.kW(0.98,A.a([f,h,a0,j,i,e,s.aa8("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.er,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.Xg("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d_,new C.e1Y(s,p),l.$1("school"))],a1),2,12,12,r,B.dZ,!0),B.d9,A.A(A.a([D.bJg,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fqm,r,r,r)],a1),B.l,r,B.e,B.j,0,r,r),B.T],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.J)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aN(18,18)
u=new A.ay(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fF7,B.bc,new A.bz(1,B.bb,A.x(A.a([A.d(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hp,r,r,r),A.d(""+v.gaps(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.AR,r,r,r)],a1),B.E,r,B.e,B.j,0,B.p),r)],a1)
if(v.gaps(0).length>=2){f=D.lD.j(0.2)
t=new A.ay(D.lD,1,B.r,-1)
g.push(A.az(r,A.r(r,A.X(B.hj,D.lD,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1Z(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cP.j(0.2)
t=new A.ay(B.cP,1,B.r,-1)
f=A.az(r,A.r(r,A.X(B.j6,B.cP,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e2_(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fi.j(0.2)
t=new A.ay(B.fi,1,B.r,-1)
B.d.v(g,A.a([B.bm,f,B.bm,A.az(r,A.r(r,A.X(B.ej,B.fi,r,r,r,20),B.f,r,r,new A.p(e,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e20(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.r(r,new A.c8(B.aL,B.e,B.j,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.p(i,r,new A.bH(u,u,u,u),new A.be(h,h,h,h),r,r,B.n),r,r,r,B.d6,B.bg,r,r,r))}if(s.a.e){j=m?new C.e1S(s):new C.e1T(a2)
i=A.l(18)
h=A.L(m?B.cP:B.aT,B.r,2)
g=m?B.cP.j(0.12):B.dn
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.az(r,A.r(r,A.at(A.d(f,r,r,r,r,r,r,A.m(r,r,m?B.cP:B.aD,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.p(g,r,h,i,r,r,B.n),r,r,r,r,B.O0,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.fZs)
k.push(B.aB)
k.push(D.asP)
return new C.tH("Family Games \xb7 "+p.b,A.cl(k,r,r,D.bDt,r,r,B.ah,!1),B.f7,r)}}
C.a05.prototype={
a7(){return"_KPhase."+this.b}}
C.am6.prototype={
S(){return new C.am7(D.b0u)},
gd1(){return this.e}}
C.am7.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a3()},
fX(d){var w,v=this
v.m(new C.bSc(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.df(B.fJ,new C.bSd(v))},
aPR(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new C.bS2(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.df(B.fg,new C.bS3(w))},
L5(d){var w
if(this.d!==D.acM)return
w=this.at
if(w!=null)w.a1(0)
this.b6s(d)},
b6s(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.i.V(500+500*B.i.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bS8(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cy(B.rV,v.gix(v))},
cKP(d){var w=this
if(w.d!==D.WM)return
if(w.e+1>=w.a.w.length)w.Yy()
else{w.m(new C.bS9(w))
w.aPR()}},
Yy(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Yy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bGt(p,u.w,t)
u.m(new C.bS5(u,s))
w=2
return A.b(C.BU(u.a.e,s),$async$Yy)
case 2:r=e
t=u.a
w=3
return A.b(C.BV(t.e,t.f,t.r,u.f),$async$Yy)
case 3:q=e
if(u.c!=null)u.m(new C.bS6(u,r,q))
return A.h(null,v)}})
return A.i($async$Yy,v)},
cLE(){var w,v,u,t,s=this,r=s.a,q=new A.e5()
q.d_(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b5("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cW(r,0,A.dA(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bR(r,r.gI(0),u.k("bR<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b5(t,B.i.V(w*(0.35+q.ai()*0.5)),!1))}B.d.aZ(v,new C.bSa())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b0u===r){w=A.a([D.fUV,B.W,A.d(s,t,t,t,t,t,t,B.KV,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fqu,t,t,t))
w.push(B.aB)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.AX,B.K,t,t))
w.push(B.e1)
w.push(C.ux("Play",u.geY(u),B.cP,B.hj,D.fA))
w=A.at(new A.D(B.ey,A.x(w,B.l,t,B.e,B.P,0,B.p),t),t,t,t)
break A}if(D.b0v===r){w=A.at(A.d(""+u.z,t,t,t,t,t,t,D.fyG,t,t,t),t,t,t)
break A}if(D.acM===r||D.WM===r){w=u.crj()
break A}if(D.b0w===r){w=u.cc6()
break A}w=t}return new C.tH(s,w,B.f7,t)},
crj(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.WM,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aVo,j,j,j),B.b3],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.KS,j,j,j))
g.push(B.au)
f=A.l(14)
g.push(A.r(j,A.d(""+k.f,j,j,j,j,j,j,B.iF,j,j,j),B.f,j,j,new A.p(B.bA,j,j,f,j,j,B.n),j,j,j,j,B.Ci,j,j,j))
g=A.A(g,B.l,j,B.e,B.j,0,j,j)
f=A.l(6)
w=i?0:B.i.D(k.as/k.a.w[k.e].r,0,1)
f=A.bx(f,A.kq(B.bA,j,k.as<5?B.fi:B.cP,9,j,w,j),B.aq)
w=A.l(22)
v=A.L(B.cP,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.m(j,j,e?D.lD:G.nq,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.T,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fpy,B.K,j,j)],h),B.l,j,B.e,B.P,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fAQ,B.K,j,j)
w=A.E(A.r(j,A.at(u,j,j,j),B.f,j,j,new A.p(D.qm,j,v,w,j,j,B.n),j,j,j,j,B.ft,j,j,1/0),3)
v=A.a([],h)
for(u=k.gix(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bS7(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aCV[o]
m=new A.aN(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.d(D.aDf[o],j,j,j,j,j,j,D.fru,j,j,j),B.au,new A.bz(1,B.bb,A.d(r[t],j,3,B.a2,j,j,j,D.fqr,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.ark)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bXW)
v.push(A.az(j,new A.SV(A.r(j,new A.c8(B.aL,B.e,B.j,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.p(n,j,new A.bH(l,l,l,l),new A.be(m,m,m,m),V.aBi,j,B.n),j,j,j,j,B.f4,j,j,j),p,B.b0,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.af,w,B.af,A.E(A.kW(1.45,v,2,10,10,j,B.dZ,!1),4)],h)
if(i)h.push(D.es7)
return new A.D(B.a0p,A.x(h,B.l,j,B.e,B.j,0,B.p),j)},
cc6(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cLE(),m=x.p,l=A.a([D.bcp,A.at(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.q_,o,o,o),o,o,o),A.at(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Vv,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cP.j(0.25):B.dn
u=new A.aN(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cP:B.bA,1,B.r,-1)
q=A.d(w<3?D.dhP[w]:""+(w+1),o,o,o,o,o,o,B.nf,o,o,o)
s=s?B.u:B.U
l.push(A.r(o,new A.c8(B.aL,B.e,B.j,B.l,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.bz(1,B.bb,A.d(t.a,o,o,o,o,o,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.d(""+t.b,o,o,o,o,o,o,B.iF,o,o,o)],m),o),B.f,o,o,new A.p(v,o,new A.bH(r,r,r,r),new A.be(u,u,u,u),o,o,B.n),o,o,o,B.cy,B.f_,o,o,o))}l.push(B.W)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.Ix(m,v,p.CW,o))
l.push(B.aO)
l.push(A.at(C.ux("Back to the games",new C.bS4(p),B.cP,B.k7,D.fA),o,o,o))
return A.cl(l,o,o,B.ft,o,o,B.ah,!1)}}
C.U5.prototype={
S(){return new C.am3(A.T(x.de,x.er))}}
C.am3.prototype={
gD7(){var w,v=this,u=v.d
if(u===$){w=C.hkZ(v.a.c.aj())
v.d!==$&&A.bE()
v.d=w
u=w}return u},
glS(d){var w,v,u=this,t=u.e
if(t===$){w=u.gD7().b
v=$.aw()
u.e!==$&&A.bE()
t=u.e=new A.au(new A.ba(w,B.b6,B.aP),v)}return t},
cf6(d){return this.f.c3(0,d,new C.bRD(d))},
Y(){this.a4()
var w=this.gD7().c
if(w.length===0)w.push(C.h6J(null,0,20,""))},
t(){var w,v,u=this.glS(0)
u.U$=$.aw()
u.P$=0
for(u=this.f,u=new A.dq(u,u.r,u.e);u.C();)for(w=J.aT(u.d);w.C();){v=w.gR(w)
v.U$=$.aw()
v.P$=0}this.a3()},
cKF(){if(this.gD7().c.length>=12)return
this.m(new C.bRE(this))},
jI(d){var w,v,u=this,t=u.gD7()
t.b=B.a.i(u.glS(0).a.a)
w=t.gaps(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.T(D.fis)
return}v=t.c
B.d.a8(v)
B.d.v(v,w)
v=u.c
v.toString
A.a6(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bRO(),r=x.p,q=A.a([A.bO(!1,D.fK5,t,t,!0,t,t,t,u.gbqa(u),t,t)],r),p=A.a([D.fZ3,B.af,A.aM(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glS(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ad,t,t,t,t,t,t,t,t,t,t,t,B.h1,!0,B.a5,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gD7().c.length,w<v;++w)B.d.v(p,A.a([new A.ff(new C.bRN(u,w,s),t)],r))
if(v<12)p.push(A.at(C.ux("\uff0b Add a question",u.gcKE(),B.aT,t,B.c),t,t,t))
return new C.tH("Make your game",A.cl(p,t,t,D.bDq,t,t,B.ah,!1),q,t)}}
C.ar8.prototype={
S(){return new C.aFb(A.a([],x._))},
bv(){return this.r.$0()},
qo(){return this.w.$0()},
ge3(){return this.c}}
C.aFb.prototype={
Y(){var w,v
this.a4()
this.ww()
w=this.a
v=w.c
if(v.length!==0)C.a8m(v,w.e,w.d.w)},
wm(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hhO(r,t.e,!1,s.w,new C.e3q(u),null,s),$async$wm)
case 2:w=3
return A.b(u.ww(),$async$wm)
case 3:return A.h(null,v)}})
return A.i($async$wm,v)},
a0E(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0E=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hhO(r,t.e,!0,s.w,new C.e3p(u),null,s),$async$a0E)
case 2:w=3
return A.b(u.ww(),$async$a0E)
case 3:return A.h(null,v)}})
return A.i($async$a0E,v)},
ww(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$ww=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bq(q.a.c),$async$ww)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.e3s(q,p))
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
return A.b(C.Ho(q.a.c).dh(0,B.qy),$async$ww)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e3t(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e3u(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ww,v)},
Pa(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Pa=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.T(D.fi2)
w=3
return A.b(C.Ho(t.a.c),$async$Pa)
case 3:r=e
w=4
return A.b(C.fXj(t.a.c,r),$async$Pa)
case 4:q=e
w=5
return A.b(C.Ho(t.a.c),$async$Pa)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e3o(t,p))
o=t.c.L(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b3(null,null,null,q?B.dL:B.cZ,null,B.t,null,s,null,B.mY,null,null,null,null,null,null,null,null,null,null))
t.a.qo()
case 1:return A.h(u,v)}})
return A.i($async$Pa,v)},
Iv(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Iv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.isM(l),$async$Iv)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hVt(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b1f(q,p.e,l,"Each family tree costs $"+B.i.ad(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Iv)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hBK(r)
o=Date.now()
n=t.a.c
m=new C.kV(l,r.toUpperCase(),p,!0,B.Z,D.DD,new A.V(o,0,!1),0,n,D.uE,B.ce)
w=5
return A.b(C.a42(n,m),$async$Iv)
case 5:w=6
return A.b(t.ww(),$async$Iv)
case 6:t.a.bv()
t.a.qo()
if(t.c==null){w=1
break}t.F3(m)
case 1:return A.h(u,v)}})
return A.i($async$Iv,v)},
F3(d){return this.ck1(d)},
ck1(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$F3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bq(u.a.c),$async$F3)
case 2:n=l.nA(k.dI(f,new C.e3r(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hy(m,new C.ar2(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$F3)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a42(u.a.c,o),$async$F3)
case 6:case 5:w=7
return A.b(u.ww(),$async$F3)
case 7:u.a.qo()
return A.h(null,v)}})
return A.i($async$F3,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.J,o=new C.uj(p)
if(r.e)return A.at(A.n5(q,p?B.bv:B.bo,q,q,q,q,q,q,q,q),q,q,q)
if(J.cs(r.d)){w=p?B.eg:B.c
v=A.l(15)
u=A.aH(!1,B.a3,!0,q,A.aP(!1,q,!0,A.r(q,D.bVB,B.f,q,q,new A.p(B.aW.j(0.12),q,A.L(B.aW,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cT,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcj5(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.as,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Gp(A.r(q,A.x(A.a([u,B.aO,t,B.T,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.m(q,q,p?B.bv:B.bo,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.e1,A.bJ(D.h1h,q,r.gaT8(),A.bp(B.bR,q,q,q,q,q,Av.a0O,q,new A.b9(A.l(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.j,0,B.p),B.f,q,q,new A.p(w,q,q,v,q,q,B.n),q,q,q,q,D.bG7,q,q,1/0),15,B.ag,1.05,D.acy,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.as,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b3],v)
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.X(B.zz,B.aW,q,q,q,q),q,q,q,new C.e3w(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.X(B.zt,B.aW,q,q,q,q),q,q,q,r.gagV(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dh(E.ase,D.fHp,r.gaT8(),A.bp(B.bR,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.Gp(r.cGO(J.t(r.d,s),o),14,B.ag,1,D.acy,q))
B.d.v(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.l,q,B.e,B.j,0,B.p)],v),B.E,q,B.e,B.j,0,B.p)},
cGO(d,e){var w=null,v=e.a,u=v?B.eg:B.c,t=A.l(14),s=A.L((v?B.ei:B.bP).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.ev,10)],x.V),q=A.l(14),p=A.r(w,D.bUG,B.f,w,w,new A.p(B.aW.j(0.15),w,w,A.l(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.m(w,w,v?B.aS:B.as,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaqs(),m=d.d?"":" \xb7 Public",l=d.y===D.kV?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bG,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.m(w,w,v?B.bv:B.bo,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.j,0,B.p),1)
return A.r(w,A.aH(!1,B.a3,!0,w,A.aP(!1,q,!0,new A.D(B.bI,A.A(A.a([p,B.bc,l,A.X(B.OS,v?B.bv:B.bo,w,w,w,w)],k),B.l,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e3v(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj),B.f,w,w,new A.p(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.ar2.prototype={
S(){return new C.aF8(A.a([],x._),A.aR(x.N),A.b9Y())},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aF8.prototype={
Y(){var w,v,u=this
u.a4()
u.d=u.a.w
u.adB()
w=u.a
v=w.c
if(v.length!==0)C.a8m(v,w.e,w.d.w)},
t(){var w=this.w
w.U$=$.aw()
w.P$=0
this.a3()},
a3C(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3C=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yy("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e2R(r),s,null,!0,!0,x.y),$async$a3C)
case 3:if(e!==!0||t.c==null){w=1
break}t.K3()
t.m(new C.e2S(t,r))
w=4
return A.b(t.uw(),$async$a3C)
case 4:t.a.bv()
t.yy(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3C,v)},
cwu(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.e2M(w,f,d,e))},
aVr(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dr()
u.ej(w,v,0,1)
u.k5(q,q,1,1)
this.w.sp(0,u)},
bd4(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eK(new Float64Array(16))
q.e7(r)
w=q.Dc()
v=B.i.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dr()
t.ej(r,u,0,1)
t.k5(v,v,1,1)
t.ej(-r,-u,0,1)
t.iY(0,q)
s.sp(0,t)},
adB(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bq(u.a.c),$async$adB)
case 2:t=s.nA(r.dI(e,new C.e2d(u)))
if(t!=null&&u.c!=null)u.m(new C.e2e(u,t))
return A.h(null,v)}})
return A.i($async$adB,v)},
yy(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
wm(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hhO(o,t,!1,r,new C.e2v(u),q.a,s),$async$wm)
case 2:n=A
m=J
w=3
return A.b(C.Ho(u.a.c),$async$wm)
case 3:p=n.nA(m.dI(e,new C.e2w(u)))
if(p!=null&&u.c!=null)u.m(new C.e2x(u,p))
return A.h(null,v)}})
return A.i($async$wm,v)},
K3(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cH(w,0)},
uw(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a42(t,s),$async$uw)
case 2:return A.h(null,v)}})
return A.i($async$uw,v)},
a28(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a28=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uy(q,t.a.c)){t.yy("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.itZ(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a28)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.K3()
t.m(new C.e2L(t,r))
w=4
return A.b(t.uw(),$async$a28)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a28,v)},
b39(){var w=this.c
w.toString
A.a6(w,!1).ce(A.ec(new C.e2s(this),!1,null,x.H))},
a0S(){return this.ck3()},
ck3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0S=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.uy(m,t.a.c)){t.yy("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.Q(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e2I(),A.U(s).k("Y<1>")).gI(0)
s=A.eA([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("ci.E"))
B.d.fj(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.L,null,new C.e2J(n,t,new C.uj(m.ax.a===B.J),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a0S)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.K3()
t.m(new C.e2K(t,o))
w=6
return A.b(t.uw(),$async$a0S)
case 6:case 5:if(o.a&&t.c!=null)t.b39()
case 1:return A.h(u,v)}})
return A.i($async$a0S,v)},
WB(d){return this.bDK(d)},
bDK(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uy(r,t.a.c)){t.yy("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e21(t,d),r,null,!0,!0,x.P),$async$WB)
case 3:s=f
if(s==null){w=1
break}t.K3()
t.m(new C.e22(t,s))
w=4
return A.b(t.uw(),$async$WB)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WB,v)},
a3Y(d){return this.cJ2(d)},
cJ2(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a3Y=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.Q(s)
t=u.c
t.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.e2U(u,d,new C.uj(s.ax.a===B.J)),t,null,!0,!0,x.H),$async$a3Y)
case 2:return A.h(null,v)}})
return A.i($async$a3Y,v)},
cgj(d){var w=this,v=w.d
v===$&&A.c()
if(C.uy(v,w.a.c))w.OQ(d)
else w.a3Y(d)},
ajq(d,e){return this.cAr(d,e)},
cAr(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ajq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.Q(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.e2O(new C.uj(r.ax.a===B.J),d,e),s,null,!0,!0,x.H),$async$ajq)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ajq,v)},
IA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kV?3:5
break
case 3:w=6
return A.b(C.h4W(t.a.c),$async$IA)
case 6:s=e
o=t.a
r=C.hpS(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ajq(!s,!r),$async$IA)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aR_(o,t.a.c)){t.yy("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.ln(o,"Cancel","Remove",q.y===D.kV?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$IA)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aQW(t.a.c,t.d.a),$async$IA)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.j1(o,null)
case 1:return A.h(u,v)}})
return A.i($async$IA,v)},
ab4(d){return this.bOZ(d)},
bOZ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ab4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uy(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aV(s,new C.e23(p))){o=A.U(s)
p.a=A.nA(new A.cM(new A.Y(s,new C.e24(d),o.k("Y<1>")),new C.e25(),o.k("cM<1,n>")))}q=p.a
if(q==null)q=d.d
t.K3()
t.m(new C.e26(t,s,d,q))
w=3
return A.b(t.uw(),$async$ab4)
case 3:t.yy(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$ab4,v)},
OQ(d){return this.bRc(d)},
bRc(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uy(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a3Y(d),$async$OQ)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.e2a(t,d),r,null,!0,!0,x.P),$async$OQ)
case 6:s=f
if(s==null){w=1
break}t.K3()
t.m(new C.e2b(t,s))
w=7
return A.b(t.uw(),$async$OQ)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OQ,v)},
cHd(){var w=this,v=w.d
v===$&&A.c()
if(!C.uy(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e2T(w))
w.uw()},
ZB(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aR_(n,t.a.c)){t.yy("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.Q(n)
s=$.aw()
r=new A.au(B.aw,s)
q=t.d.e
p=A.bq(new A.N(q,t.gceN(),A.U(q).k("N<1,n>")).bY(0,new C.e2n()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e2o(t,new C.uj(n.ax.a===B.J),p,r),q,null,!0,!0,x.y),$async$ZB)
case 3:o=e
r.U$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.K3()
t.m(new C.e2p(t,p))
w=4
return A.b(t.uw(),$async$ZB)
case 4:t.yy("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$ZB,v)},
ceO(d){return B.a.i(d.toLowerCase())},
ciQ(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uy(v,w)
t=r.d
s=C.iin(t)
C.isQ(q,t.b,u,C.iim(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.J,m=new C.uj(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.e30(),A.U(l).k("Y<1>")).gI(0)
l=n?B.c2:B.iJ
v=A.X(B.a1Z,n?B.bv:B.bo,o,o,o,18)
u=x.p
v=A.a([new A.D(B.Cj,A.aP(!1,o,!0,new A.D(B.hJ,A.A(A.a([v,B.bm,A.d("Back to Family Trees",o,o,o,o,o,o,A.m(o,o,n?B.bv:B.bo,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.P,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e31(p,d),o,o,o,o,o,o,o),o),new A.D(B.nH,p.c1r(m),o)],u)
if(p.d.y===D.kV){t=B.tl.j(0.15)
s=A.l(12)
r=A.L(B.tl.j(0.45),B.r,1)
q=C.Hm(p.d,p.a.c)
v.push(new A.D(B.yO,A.r(o,A.A(A.a([D.c_4,B.au,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.j,0,o,o),B.f,o,o,new A.p(t,o,r,s,o,o,B.n),o,o,o,o,B.hK,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b3],u)
if(C.uy(p.d,p.a.c)&&p.e.length!==0)u.push(new C.GB("Undo",B.pB,p.gcHc(),m,o,o))
u.push(new C.GB("Family Book",D.bPp,p.gciP(),m,B.ub,o))
u.push(new C.GB("Family games",B.oF,p.gcj0(),m,B.aE,o))
if(C.uy(p.d,p.a.c))u.push(new C.GB("Display settings",B.Db,p.gck2(),m,B.b2,o))
u.push(new C.GB("Sync",B.zt,p.gagV(),m,o,o))
t=p.d
if(t.y===D.kV||C.aR_(t,p.a.c)){t=p.d.y===D.kV?"Remove shared tree":"Delete tree"
u.push(new C.GB(t,B.ej,p.gbP8(),m,B.fi,o))}if(C.uy(p.d,p.a.c))u.push(new C.GB("Add member",B.wN,new C.e32(p),m,B.bR,o))
v.push(new A.D(Z.am0,A.A(u,B.l,o,B.e,B.j,0,o,o),o))
if(p.d.gaqs()===0){u=A.at(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.m(o,o,n?B.bv:B.bo,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cq(new C.e33(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?O.a22:A5.OT,o,o,o,o,o)
v.push(A.at(A.ho(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e34(p),o),o,o,o))}return A.c4(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c1r(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.l(22)
v=A.a([new A.ac(0,B.G,B.fX.j(0.35),B.dq,18)],x.V)
u=A.l(22)
t=A.ap(-26,A.X(B.zm,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aH(!1,B.a3,!0,m,A.aP(!1,m,!0,A.r(m,D.c2j,B.f,m,m,new A.p(B.c.j(0.16),m,A.L(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cT,!0,m,m,m,m,m,m,m,m,m,m,m,n.gagV(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.fsx,m,m,m)
r=r.gaqs()
p=n.d.gaqs()===1?"member":"members"
o=x.p
p=A.a([s,B.bc,A.E(A.x(A.a([q,B.bG,A.d(""+r+" "+p,m,m,m,m,m,m,A.m(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.j,0,B.p),1)],o)
if(C.uy(n.d,n.a.c))p.push(A.aI(m,m,m,m,D.c_i,m,m,m,n.gctR(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jJ:B.n4
r=r?"Private":"Public"
r=A.E(n.ax0(q,"Privacy",r,n.a.d.w?n.gcG7():m),1)
q=A.E(n.ax0(B.zu,"Tree code",n.d.c,new C.e2c(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.ae,q,B.ae,A.E(n.ax0(D.bR5,"Collaborators",p,n.gc6b()),1)],o),B.l,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kV){s=B.c.j(0.15)
B.d.v(p,A.a([B.T,A.aH(!1,B.a3,!0,A.l(999),A.aP(!1,A.l(999),!0,new A.D(B.hg,A.A(A.a([A.X(B.pC,B.c,m,m,m,14),B.e7,A.d("View only",m,m,m,m,m,m,B.aVt,m,m,m)],o),B.l,m,B.e,B.P,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.aj)],o))}return A.r(m,A.bx(u,new A.an(B.a0,m,B.ac,B.t,A.a([t,new A.D(B.GR,A.x(p,B.E,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.p(m,m,m,w,v,D.c6B,B.n),m,m,m,m,m,m,m,1/0)},
ax0(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aH(!1,B.a3,!0,A.l(14),A.aP(!1,A.l(14),!0,new A.D(K.and,A.x(A.a([A.X(d,B.c,w,w,w,18),B.ax,A.d(e,w,1,B.a2,w,w,w,A.m(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.vC,A.d(f,w,1,B.a2,w,w,w,Ao.AO,w,w,w)],x.p),B.l,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)}}
C.bgH.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bN
w=s.d
v=s.e
u=A.a([A.b2(t,t,t,new C.bgK(s,t),new A.av(w,v))],x.p)
r=r.gdO(r)
B.d.v(u,r.dM(r,new C.dh4(this),x.l))
r=s.c
B.d.v(u,new A.N(r,new C.dh5(this),A.U(r).k("N<1,v>")))
return new A.D(B.uA,new A.a5(w,v,new A.an(B.a0,t,B.ac,B.f,u,t),t),t)}}
C.KZ.prototype={}
C.GF.prototype={}
C.bgJ.prototype={
gblB(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aKL.prototype={}
C.bgK.prototype={
bQO(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.R()
v=A.K()
v.r=B.bE.j(0.75).gp(0)
v.c=2
v.d=B.bu
d.ah(new A.o(n,w),new A.o(m,w),v)
u=(n+m)/2
t=new A.aG(q.r,B.ai,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.km(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.km(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bu())
q=A.K()
q.r=B.c.gp(0)
d.N(new A.o(u,w),9,q)
q=A.K()
q.r=B.bE.gp(0)
d.af(t,q)},
bQL(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.dhp())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aV(a0,new C.dhq(f))
t=new A.N(a0,new C.dhr(f),A.U(a0).k("N<1,G>")).bY(0,new C.dhs()).cG(0,1/0,B.rs)
w=f.a
d.ah(f,new A.o(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.J)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.o(o,v),p,e)
continue}l=J.lK(n)
k=Math.min(10,m/2)
m=$.R()
j=A.a([],r)
i=new A.aG(m.r,B.ai,null,null,j)
j.push(new A.aZ(w,v-k))
i.ab()
m=l*k
h=new A.c6(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.ak(h)
i.ab()
m=new A.c6(o,v,o,v+k)
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
a5(d,e){var w,v,u,t,s,r
$.R()
w=A.K()
w.r=B.bR.j(0.75).gp(0)
w.c=2.2
w.b=B.a9
w.d=B.bu
w.e=B.dT
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.J)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bQL(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.J)(v),++t){r=v[t]
if(r.c)this.bQO(d,w,r.a,r.b)}},
aD(d){return d.b!==this.b}}
C.bkw.prototype={
gcc8(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aDv
switch(w.c.a){case 0:return D.d_i
case 1:return D.dbu
case 2:return D.dtv}},
gccb(){var w=this.c,v=C.hAV(w.w),u=C.hAV(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.J,q=t.gcc8(),p=t.c,o=N.bF4(p.f),n=t.gccb(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gan(q).j(0.35),B.cJ,10)],m),k=r?B.as:B.c,j=A.L(r?B.as:B.c,B.r,2)
if(o!=null)w=A.tL(B.A,s,B.ck,B.c_,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gan(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.r(B.A,A.d(v,s,s,s,s,s,s,A.m(s,s,B.d.gan(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(s,s,s,s,s,new A.a8(B.a7,B.aa,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.r(s,A.r(s,A.hV(w,B.aq),B.f,s,s,new A.p(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.p(s,s,s,s,l,new A.a8(B.aA,B.aF,B.x,q,s,s),B.a6),s,56,s,s,B.H5,s,s,56)],v)
k=t.d
if(k>0){j=A.l(10)
w=A.L(r?B.as:B.c,B.r,1.5)
l.push(A.ap(s,A.r(s,A.d(""+k,s,s,s,s,s,s,D.fDh,s,s,s),B.f,s,s,new A.p(B.ch,s,w,j,s,s,B.n),s,s,s,s,D.bI5,s,s,s),s,s,s,-6,-4,s))}k=r?B.cs:B.c
j=A.l(8)
w=A.L(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dI,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.m(s,s,r?B.c:B.cs,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.m(s,s,r?B.aR:B.bo,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.az(s,new A.a5(84,112,A.x(A.a([new A.an(B.a0,s,B.ac,B.f,l,s),B.ax,A.r(s,A.x(p,B.l,s,B.e,B.P,0,B.p),B.f,s,D.b6H,new A.p(k,s,w,j,m,s,B.n),s,s,s,s,D.bIg,s,s,s)],v),B.l,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bfM.prototype={
a5(d,e){var w,v,u,t,s
$.R()
w=A.K()
v=this.b
u=v?B.c:D.bjC
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.N(new A.o(s,t),1,w)},
aD(d){return d.b!==this.b}}
C.byx.prototype={
B(d){var w=this,v=null,u=new C.fmR(w),t=w.c,s=t?B.cs:B.c,r=A.l(12),q=u.$3(B.i0,"Zoom in",w.d),p=A.r(v,v,B.f,t?B.bA:B.fr,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.wP,"Zoom out",w.e)
return A.aH(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.r(v,v,B.f,t?B.bA:B.fr,v,v,v,1,v,v,v,v,v,22),u.$3(B.apM,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.P,0,B.p),B.f,s,4,v,B.dv,v,v,v,B.aj)}}
C.bnS.prototype={
B(d){var w=this,v=null,u=B.bR.j(0.15),t=A.L(B.bR,B.r,2),s=w.e,r=x.p
t=A.az(v,A.r(v,A.x(A.a([A.X(s?O.a22:A5.OT,B.bR,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fzl,v,v,v)],r),B.l,v,B.ba,B.j,0,B.p),B.f,v,v,new A.p(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fx7,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.N(s,new C.eXT(w),A.U(s).k("N<1,v>")))
B.d.v(u,t)}return new A.a5(84,v,A.x(u,B.l,v,B.e,B.j,0,B.p),v)}}
C.a0i.prototype={
S(){return new C.aDC()},
bv(){return this.Q.$0()},
ge3(){return this.w}}
C.aDC.prototype={
Y(){var w,v,u,t,s,r=this,q=null
r.a4()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
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
r.y=t==null?D.z1:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.ijX(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.U$=$.aw()
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
v.a3()},
Qj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Qj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hpS(p.y,p.w)
w=3
return A.b(A.ly(t.a.w,B.Jv),$async$Qj)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b1f(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Qj)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hVu(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(Ax.Hy(78,800),$async$Qj)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dxl(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Qj,v)},
cca(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hW(B.o.u(1000*Date.now()),w,D.z1,null,null,null,"","","","","",1,!1,0)
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
s=v.aG3(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).O(s)},
aaG(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aaG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dxk(r),s,null,!0,!0,x.y),$async$aaG)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aaG,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===B.J,i=new C.uj(j),h=l.a.e,g=A.U(h).k("Y<1>"),f=A.C(new A.Y(h,new C.dxu(l),g),g.k("M.E"))
h=j?B.eg:B.c
g=A.l(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bGu,A.d(w,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.as,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ap(k,A.h6(A.aP(!1,k,!0,new A.D(B.mf,A.X(B.ej,B.pk,k,k,k,17),k),B.cT,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbLK(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jX:B.jm
t=N.bF4(l.as)
if(l.as==null)s=A.X(B.ps,j?B.bv:B.bo,k,k,k,40)
else s=k
s=A.at(A.az(k,new A.an(B.a0,k,B.ac,B.t,A.a([A.ha(u,t,s,k,42),A.ap(0,A.ha(B.bR,k,D.bTK,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcc7(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aDE(t,"Full name",B.n1,1,1,i,B.mz)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.W,new C.bku(i,u,new C.dxv(l),k)],v),B.l,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.m(k,k,j?B.bv:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bzS],q)
o=l.a.e
B.d.v(p,new A.N(o,new C.dxw(),A.U(o).k("N<1,eJ<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.m(k,k,j?B.bv:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bzU],q)
B.d.v(q,new A.N(f,new C.dxy(),A.U(f).k("N<1,eJ<n?>>")))
o=A.x(A.a([t,B.am,new C.aep(i,r,"Who is their parent?",p,new C.dxz(l),k,o),B.aB,n,B.am,new C.aep(i,m,"Who is their spouse / partner?",q,new C.dxA(l),k,o)],v),B.al,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aDE(q,"Birth date",D.aoS,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aDE(m,"Birth place",B.a2h,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aDE(n,"Date of death (if deceased)",D.ar_,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aDE(p,"Occupation",B.a3s,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ac,B.t,w,k),B.aB,s,B.bz,new C.aeq(i,"Identity",u,k),B.af,new C.aeq(i,"Family links",o,k),B.af,new C.aeq(i,"Life details",A.x(A.a([q,B.W,m,B.W,n,B.W,p,B.W,C.aDE(r,"Notes",B.ll,5,3,i,k)],v),B.l,k,B.e,B.j,0,B.p),k),B.af,new C.aDD(i,"Child order",l.ckh(l.at),new C.dxB(l),new C.dxC(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hf_(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dxD(l):k
B.d.v(r,A.a([B.W,new C.aDD(i,"Visible in tree",u,w,new C.dxE(l),k)],v))}r.push(B.W)
w=j?B.jX:B.jm
u=A.l(14)
t=A.L(j?B.ei:B.bP,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.as,k,k,k,k,k,k,k,k,14,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.r(k,A.iQ(k,B.bR,k,B.ag,k,new C.dxF(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.m(k,k,j?B.bv:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.p(w,k,t,u,k,k,B.n),k,k,k,k,O.alG,k,k,k))
r.push(B.bz)
w=j?B.aS:B.as
j=j?B.ei:B.bP
r.push(A.A(A.a([A.E(A.dU(B.o1,new C.dxx(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.cq,k,new A.b9(A.l(14),B.a1),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bc,A.E(A.bJ(D.f9I,k,l.gcc9(),A.bp(B.aW,k,k,0,B.c,k,B.cq,k,new A.b9(A.l(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.j,0,k,k))
r.push(B.ax)
return A.eg(B.f7,k,B.ag,h,new A.a5(420,k,A.ce(A.x(r,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),k),D.amx,k,B.alS,new A.b9(g,B.a1),k,k)},
ckh(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aeq.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bv:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jX:B.jm,s=A.l(16)
return A.x(A.a([new A.D(B.a0T,u,w),A.r(w,this.e,B.f,w,w,new A.p(t,w,A.L(v?B.ei:B.bP,B.r,1),s,w,w,B.n),w,w,w,w,B.bg,w,w,1/0)],x.p),B.E,w,B.e,B.j,0,B.p)}}
C.bkv.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.eg:B.c,r=A.l(12),q=A.L((t?B.ei:B.bP).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.m(u,u,t?B.aS:B.as,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.r(u,A.aM(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bt(u,B.eN,u,B.wo,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.m(u,u,t?B.bv:B.bo,u,u,u,u,u,u,u,u,u,u,u,B.cB,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bR,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ad,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.p(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aep.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.eg:B.c,s=A.l(12),r=A.L((u?B.ei:B.bP).j(0.85),B.r,1),q=A.X(B.t6,u?B.bv:B.bo,v,v,v,v),p=A.m(v,v,u?B.aS:B.as,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.eg:B.c
return A.r(v,new A.Eq(A.a5y(v,o,A.d(w.f,v,v,v,v,v,v,A.m(v,v,u?B.bv:B.bo,v,v,v,v,v,v,v,v,v,v,v,B.cB,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.p(t,v,r,s,v,v,B.n),v,v,v,v,B.kx,v,v,v)}}
C.bku.prototype={
B(d){var w=new C.dxG(this)
return A.A(A.a([w.$3(D.wx,"Male",B.PD),B.ae,w.$3(D.ox,"Female",B.Pn),B.ae,w.$3(D.z1,"Other",B.nL)],x.p),B.l,null,B.e,B.j,0,null,null)}}
C.aDD.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jX:B.jm,r=A.l(14),q=A.L(t?B.ei:B.bP,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.m(v,v,t?B.aS:B.as,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.r(v,A.A(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.m(v,v,t?B.bv:B.bo,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.j,0,B.p),1),new C.aJN(u,B.wP,w.f,v),B.bm,new C.aJN(u,B.i0,w.r,v)],o),B.l,v,B.e,B.j,0,v,v),B.f,v,v,new A.p(s,v,q,r,v,v,B.n),v,v,v,v,B.eA,v,v,v)}}
C.aJN.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bR.j(0.12)
else w=s.c.a?B.eg:B.c
v=A.l(10)
u=A.l(10)
if(p)t=B.bR
else t=(s.c.a?B.bv:B.bo).j(0.4)
return A.aH(!1,B.a3,!0,v,A.aP(!1,u,!0,new A.a5(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.aj)}}
C.aer.prototype={
bV_(d){switch(d.a){case 0:return B.bR
case 1:return B.bE
case 2:return B.d1}},
bV0(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aZZ(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AM(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.eg:B.c
u=A.l(12)
t=A.L((w?B.ei:B.bP).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bR,p,p,p,18),B.au],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.m(p,p,w?B.bv:B.bo,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.ax,A.d(o,p,p,p,p,p,p,A.m(p,p,w?B.aS:B.as,p,p,p,p,p,p,p,p,14,p,p,B.U,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.j,0,B.p),1))
return A.r(p,A.A(r,B.E,p,B.e,B.j,0,p,p),B.f,p,p,new A.p(v,p,t,u,p,p,B.n),p,p,p,B.cy,B.yK,p,p,1/0)},
afh(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bv:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jX:B.jm,s=A.l(16),r=A.L(v?B.ei:B.bP,B.r,1)
return A.x(A.a([new A.D(B.a0T,u,w),A.r(w,A.x(e,B.l,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(t,w,r,s,w,w,B.n),w,w,w,w,B.bV,w,w,1/0)],x.p),B.E,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hG4(r,q),o=q.c,n=t.bV_(o),m=N.bF4(q.f),l=t.e.a,k=l?B.eg:B.c,j=A.l(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.m(s,s,l?B.aS:B.as,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kV?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.m(s,s,l?B.bv:B.bo,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.L(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.H,12)],x.V)
u=n.j(0.12)
l=A.at(A.r(s,A.ha(u,m,m==null?A.X(B.ps,n,s,s,s,48):s,s,52),B.f,s,s,new A.p(s,s,w,s,v,s,B.a6),s,s,s,s,B.eB,s,s,s),s,s,s)
w=n.j(0.14)
v=A.l(20)
u=A.L(n.j(0.45),B.r,1)
v=A.at(A.r(s,A.d(t.bV0(o),s,s,s,s,s,s,A.m(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(w,s,u,v,s,s,B.n),s,s,s,s,B.md,s,s,s),s,s,s)
u=x.p
i=A.a([t.AM("Full name",i,B.n1)],u)
if(p>0)i.push(t.AM("Child order","#"+p,B.Pt))
r=A.a([h,B.ax,r,B.aO,l,B.W,v,B.bz,t.afh("Identity",i),B.af,t.afh("Life details",A.a([t.AM("Birth date",q.w,D.aoS),t.AM("Birth place",q.x,B.a2h),t.AM("Date of death",q.y,D.ar_),t.AM("Occupation",q.z,B.a3s)],u)),B.af,t.afh("Family links",A.a([t.AM("1. Parent",t.aZZ(q.d),B.Hl),t.AM("2. Spouse",t.aZZ(q.e),B.HA)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.af,t.afh("Notes",A.a([t.AM("Notes",q,B.ll)],u))],u))
r.push(B.bz)
r.push(A.bJ(B.L0,s,new C.dxQ(d),A.bp(B.aW,s,s,s,s,s,B.cq,s,new A.b9(A.l(14),B.a1),s,s,s)))
return A.eP(s,k,new A.cP(B.m1,A.ce(A.x(r,B.al,s,B.e,B.P,0,B.p),B.t,s,B.y,s,B.yR,s,s,B.ah),s),s,s,s,B.GU,B.d8,s,new A.b9(j,B.a1),s)}}
C.GB.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bv:B.bo
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uC,A.h6(A.aH(!1,B.a3,!0,A.l(8),A.aP(!1,A.l(8),!0,new A.a5(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.aj),u,v.c,u,u),u)}}
C.ar5.prototype={
f3(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.U(w).k("N<1,a9<n,@>>")
w=A.C(new A.N(w,new C.cf6(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jr(w,new C.cf7(),t,x.fO))
return s}}
C.ar6.prototype={
S(){return new C.aFa(A.a([],x.bF))},
gd1(){return this.c}}
C.aFa.prototype={
Y(){this.a4()
this.Ka()},
Ka(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ka=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cfa(t.a.c),$async$Ka)
case 3:r=e
w=4
return A.b(C.Bq(t.a.c),$async$Ka)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rl(q,new C.e3d(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e3e(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Ka,v)},
z6(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
KY(d,e){return this.cJJ(d,e)},
cJJ(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$KY=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e3i(q,e))
t=3
w=6
return A.b(d.$0(),$async$KY)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e3j(q))
$.eX.mE()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$KY,v)},
Ym(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ym=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.py(r,s.c,s.e),$async$Ym)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KY(new C.e3a(t),"Preparing download\u2026"),$async$Ym)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ym,v)},
Yq(d){return this.bSS(d)},
bSS(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.py(r,s.c,s.e),$async$Yq)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.KY(new C.e3b(t,d),"Preparing file\u2026"),$async$Yq)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yq,v)},
ahh(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ahh=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xQ.cq().MH(B.SA,B.uF,!0),$async$ahh)
case 7:r=e
o=r
q=o==null?null:J.fs(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jK(o,0,null)
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
case 6:u=A.Hx()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahh,v)},
Z3(d){return this.c2m(d)},
c2m(d){var w=0,v=A.j(x.H),u=this
var $async$Z3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.KY(new C.e3c(u,d),"Restoring family trees\u2026"),$async$Z3)
case 2:return A.h(null,v)}})
return A.i($async$Z3,v)},
Z2(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Z2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ahh(),$async$Z2)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Z3(s),$async$Z2)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Z2,v)},
a3_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.py(r,s.c,s.e),$async$a3_)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KY(new C.e3h(t),"Creating QR code\u2026"),$async$a3_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3_,v)},
a2B(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2B=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DE()){t.z6("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).ce(A.ec(new C.e3f(),!0,null,x.N)),$async$a2B)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Z3(r),$async$a2B)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2B,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===B.J,n=o?B.BM:B.iJ,m=o?D.ak7:B.aS,l=o?B.aM:B.bP,k=o?B.aS:B.as,j=new C.dht(n,m,l,k,o?B.bL:B.bo)
l=A.aI(p,p,p,p,A.X(B.eM,k,p,p,p,20),p,p,p,new C.e3l(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eI(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.dh1(!0,B.jL,B.aH,B.aH,q.r?p:q.gcAf(),j,s,"Show restore QR"),1),B.au],u))}s=q.e
r=q.r?p:q.gcwp()
t.push(A.E(C.dh1(!s,B.js,B.b7,B.bq,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.dh1(!1,B.i2,B.aW,B.bR,q.r?p:q.gbSL(),j,"Photos & books included","Download all trees"),1),B.au],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dh1(!1,R.zv,B.av,B.aQ,q.r?p:q.gc2j(),j,s,"Upload backup file"),1))
l=A.a([new C.bgI(v,l,p),B.l2,new C.adG(j,"QR restore",p),B.W,t,B.d9,new C.adG(j,"Backup files",p),B.W,A.A(r,B.l,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.l2,new C.adG(j,"One tree",p),B.W],u)
B.d.v(v,J.b8(q.d,new C.e3m(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cl(l,p,p,B.a0L,p,p,B.ah,!1)],u)
if(q.r){v=A.l(18)
t=A.L(B.aW.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dq,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ap(24,A.bm(!0,A.r(p,A.A(A.a([O.aTR,B.bc,A.E(A.d(r,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.U,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.j,0,p,p),B.f,p,p,new A.p(m,p,t,v,s,p,B.n),p,p,p,p,B.Cq,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c4(w,n,new A.an(B.a0,p,B.ac,B.t,l,p),p,!1,!1,p,p)}}
C.dht.prototype={}
C.bgI.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.l(24)
u=A.a([new A.ac(0,B.G,B.aW.j(0.32),B.kD,28)],x.V)
t=A.ap(p,A.X(B.v_,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.l(18)
q=x.p
return A.r(p,new A.an(B.a0,p,B.ac,B.t,A.a([t,new A.D(B.ad,A.A(A.a([A.r(p,D.c1O,B.f,p,p,new A.p(s,p,A.L(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.p_,A.E(A.x(A.a([D.fIq,B.T,A.d(w,p,p,p,p,p,p,A.m(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.j,0,B.p),1)],q),B.E,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.p(p,p,p,v,u,D.c9N,B.n),p,p,p,p,p,p,p,p)}}
C.adG.prototype={
B(d){var w=null
return A.A(A.a([A.r(w,w,B.f,w,w,new A.p(B.aW,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ae,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.j,0,w,w)}}
C.bgG.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.l(18),n=A.l(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.L(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aH.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.l(12)
t=r.r
s=A.L(t.j(0.35),B.r,1)
return A.aH(!1,B.a3,!0,q,A.aP(!1,o,!0,A.ez(A.d3(new A.D(E.a0n,A.x(A.a([A.r(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.p(v,q,s,u,q,q,B.n),q,q,q,q,B.t2,q,q,q),B.af,A.d(r.e,q,q,q,q,q,q,A.m(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bG,A.d(r.f,q,q,q,q,q,q,A.m(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cB,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.j,0,B.p),q),w),q,new A.p(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)}}
C.bgL.prototype={
B(d){var w=this,v=null,u=A.l(18),t=A.l(18),s=w.c,r=A.L(s.c,B.r,1),q=B.aW.j(0.14),p=A.l(12),o=s.e,n=x.p
return A.aH(!1,B.a3,!0,v,A.aP(!1,u,!0,A.ez(new A.D(B.f_,A.A(A.a([A.r(v,D.c10,B.f,v,v,new A.p(q,v,A.L(B.aW.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.t2,v,v,v),B.bc,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.m(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.m(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.j,0,B.p),1),A.X(B.i2,o,v,v,v,20)],n),B.l,v,B.e,B.j,0,v,v),v),v,new A.p(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.aj)}}
C.a0C.prototype={
S(){return new C.aF9()},
gd1(){return this.c}}
C.aF9.prototype={
Y(){this.a4()
this.aad()},
aad(){var w=0,v=A.j(x.H),u=this,t
var $async$aad=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b3U(u.a.c,B.Ed),$async$aad)
case 2:t=e
if(u.c!=null)u.m(new C.e35(u,t))
return A.h(null,v)}})
return A.i($async$aad,v)},
aiJ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aiJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e36(q))
t=4
p=A.hrC(q.a.d,B.Ed)
if(p==null){n=A.bc("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.atl(n.e,m,l,B.Ed,p,n.f),$async$aiJ)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e37(q))
q.c.L(x.q).f.T(D.fjf)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d(B.a.en(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e38(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aiJ,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.J,o=p?B.nA:B.qn,n=p?B.iI:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eI(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fYY,q,q,q,1,q,!0)
w=A.l(24)
v=A.L(B.aW.j(0.35),B.r,1)
u=A.qc(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.m(q,q,B.aW,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.r(q,A.x(A.a([B.T,u,B.bz,t,B.T,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.m(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.ba,B.j,0,B.p),B.f,q,q,new A.p(n,q,v,w,q,q,B.n),q,q,q,q,B.ad,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.m(q,q,p?B.ab:B.bw,q,q,q,q,q,q,q,q,q,q,q,B.U,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcw8()
if(u)u=B.Kr
else u=A.X(r.e===!0?B.hM:B.aoR,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a5(1/0,q,A.es(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ci,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aW,q,B.h9,q,q,q,new A.ay(B.aW.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hZ,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.m(q,q,p?B.aD:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.W)
w.push(new A.a5(1/0,q,A.bJ(B.AY,q,new C.e39(d),A.bp(B.aW,q,q,q,q,B.h9,q,q,q,q,q,q)),q))
return A.c4(m,o,new A.D(B.ad,A.x(w,B.l,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.a0D.prototype={
S(){return new C.bm0(A.zY(B.yz,B.o7,B.v7))}}
C.bm0.prototype={
t(){this.d.t()
this.a3()},
B(d){var w=null
return A.c4(A.eI(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fQF,w,w,w,1,w,!0),B.w,A.zX(this.d,B.c_,new C.e3n(this,d)),w,!1,!1,w,w)}}
C.b_M.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.m(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.S4,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lW.prototype={}
C.a7q.prototype={
S(){return new C.blE(null,null)}}
C.blE.prototype={
Y(){var w=this,v=null
w.a4()
w.d=A.bl(v,B.rV,v,1,v,w)
w.e=A.bl(v,B.or,v,1,v,w)
w.a.toString
w.d.cL(0)
w.e.cL(0)},
bz(d){var w,v,u=this
u.bJ(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cL(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cL(0)},
t(){var w=this.d
w===$&&A.c()
w.t()
w=this.e
w===$&&A.c()
w.t()
this.byY()},
B(d){var w,v,u=this,t=B.d.dP(D.a6m,new C.dPs(u),new C.dPt())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cCP(A.c5(new A.h7(A.a([w,v],x.dS)),new C.dPu(u,t),null),!0)}}
C.blD.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b3A(d,e)
break
case"house":p.mj(d,e,D.dgx)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdA()
$.R()
t=A.K()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.N(new A.o(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mp(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Bx(d,e,12)
p.yI(d,e,B.ld,5,14)
break
case"grocery":p.cl0(d,e)
break
case"calculator":p.ckI(d,e)
break
case"lumber":p.cl8(d,e)
break
case"kitchen":p.cl3(d,e)
break
case"landscape":p.mj(d,e,D.dh9)
s=new A.aG($.R().r,B.ai,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.c6(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.c6(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.bu())
w=A.K()
w.r=B.er.j(0.85).gp(0)
d.af(s,w)
p.Bx(d,e,8)
p.yI(d,e,B.id,4,18)
break
case"plumbing":p.clh(d,e)
break
case"electrical":p.mj(d,e,D.dsI)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.R()
u=A.K()
u.r=B.c.j(q*0.12).gp(0)
d.aq(new A.a1(0,0,0+e.a,0+e.b),u)
p.mp(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mp(d,e,B.m5.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Bx(d,e,10)
break
case"store":p.clr(d,e)
break
case"paint_remodel":p.clc(d,e)
break
case"roofing":p.clj(d,e)
break
case"warehouse":p.cly(d,e)
break
case"vehicles":p.clw(d,e)
break
case"farm":p.ckV(d,e)
break
case"restaurant":p.cli(d,e)
break
case"tools":p.clu(d,e)
break
case"wallet":p.clx(d,e)
break
case"concrete":p.ckO(d,e)
break
case"blueprint":p.ckG(d,e)
break
default:p.b3A(d,e)}},
mj(d,e,f){var w,v=new A.a1(0,0,0+e.a,0+e.b)
$.R()
w=A.K()
w.sav(new A.a8(B.aA,B.aF,B.x,f,null,null).aJ(0,v))
d.aq(v,w)},
mp(d,e,f,g,h){var w,v,u,t=new A.o(e.a/2,e.b/2),s=e.gdA()/2-h
$.R()
w=A.K()
w.b=B.a9
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cC(A.bZ(t,s),u,u+0.1439896632895322-u,!1,w)}},
yI(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdA()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.R()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.N(new A.o(q+t*o,p+s*o),3.5,r)}},
Bx(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.i.F(t*0.17,0.9)
q=B.i.F(t*0.23,0.85)
$.R()
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.N(new A.o(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b3A(d,e){var w,v=this
v.mj(d,e,D.dr2)
w=v.c
v.mp(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mp(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bQH(d,e,B.hH,w)
v.yI(d,e,B.c.j(0.7),6,8)},
bQH(d,e,f,g){var w,v,u,t,s,r
$.R()
w=A.K()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aq(new A.a1(16,r,t,r+3),w)}},
cl0(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mj(d,e,D.cvt)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.ar(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.R()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=D.deH[B.o.F(t,4)].j(0.85).gp(0)
d.N(new A.o(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mp(d,e,B.c.j(0.35),w,16)
l.yI(d,e,B.id,5,12)},
ckI(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mj(d,e,D.cvC)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdA()
$.R()
q=A.K()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.N(new A.o(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fq(h,B.ct,h,h,h,h,B.a5,B.bX,h,B.dB,B.bY)
for(o=0;o<6;++o){n=v+o*0.9
r=D.diX[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb1(0,new A.eo(r,h,h,B.cL,h,h,h,h,h,h,new A.F(!0,q,h,h,h,h,14+m*4,B.I,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a5(d,new A.o(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ar(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cvE[o]
l=B.kM.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb1(0,new A.eo(m,h,h,B.cL,h,h,h,h,h,h,new A.F(!0,l,h,h,h,h,12+k*3,B.I,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a5(d,new A.o(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ar(o,3)*0.38)+Math.sin(n)*6))}i.mp(d,e,B.c.j(0.35),w*1.5,14)
i.mp(d,e,B.eH.j(0.55),-v*3.141592653589793*2,8)
i.mp(d,e,B.ye.j(0.4),r*2.8,22)
i.yI(d,e,B.qe,8,10)
i.Bx(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.i.F(w+o*0.22,0.9)
$.R()
v=new A.ao(B.O,B.M,B.R,B.S,B.Q)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.o(12,j),new A.o(t,j),v)}},
cl8(d,e){var w,v,u,t,s,r,q,p,o=this
o.mj(d,e,V.aAC)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bn(new A.a1(20,r,u,r+10),B.hT)
$.R()
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=A.ar(B.fz,B.oc,(s+1)/2).gp(0)
d.am(q,p)}o.mp(d,e,B.fz.j(0.35),w,15)
o.Bx(d,e,8)},
cl3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mj(d,e,D.dfb)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.i.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.i.F(s*0.13,0.7)
$.R()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.N(new A.o(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mp(d,e,B.bM.j(0.4),-w*3.141592653589793*2.2,11)
l.yI(d,e,B.qb,4,14)},
clh(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mj(d,e,D.d3j)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.i.F(s,0.12)
$.R()
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.N(new A.o(w,u),q*(0.12+r*0.14+p),o)}n.yI(d,e,B.pj,6,12)
n.mp(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
clr(d,e){var w,v,u,t,s,r,q,p=this
p.mj(d,e,D.cJl)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bn(new A.a1(r,14,r+u,22),B.iE)
$.R()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=A.ar(B.fo,B.bM,(s+1)/2).gp(0)
d.am(r,q)}p.mp(d,e,B.c.j(0.3),w,16)
p.Bx(d,e,8)
p.yI(d,e,B.w6,5,13)},
clc(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.d9F)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.i.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bn(new A.a1(r,q,r+8,q+(18+s*22)),B.hU)
$.R()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=[B.iu,B.dl,B.bM,B.es][t].j(0.85).gp(0)
d.am(q,r)}this.mp(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
clj(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.d71)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.i.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.R()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.o(u*(0.1+r),s),new A.o(u*(0.18+r),s+10),q)}this.yI(d,e,B.cv,7,11)},
cly(d,e){var w,v,u,t,s,r,q,p
this.mj(d,e,D.cM5)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bn(new A.a1(q,p,q+(t-s*8),p+16),B.hT)
$.R()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=A.ar(B.cv,B.aS,(Math.sin(r)+1)/2).gp(0)
d.am(p,q)}this.mp(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
clw(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.dwV)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.i.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bn(new A.a1(s,r,s+28,r+8),B.hT)
$.R()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.am(r,q)}this.Bx(d,e,6)},
ckV(d,e){var w,v,u,t,s,r,q,p
this.mj(d,e,D.ddM)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.R()
s=A.K()
s.r=B.m5.j(0.75).gp(0)
d.N(new A.o(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=B.ht.j(0.85).gp(0)
p.c=3
d.ah(new A.o(q,v),new A.o(q+s*6,t),p)}this.mp(d,e,B.m5.j(0.35),w,14)},
cli(d,e){var w,v,u,t,s,r,q=this
q.mj(d,e,D.dgl)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bs(new A.o(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.R()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=B.c.j(0.22).gp(0)
d.bZ(s,r)}q.yI(d,e,B.qb,5,16)
q.Bx(d,e,7)},
clu(d,e){var w,v,u,t,s,r,q,p,o=this
o.mj(d,e,D.dui)
w=o.c
v=w*3.141592653589793
o.mp(d,e,B.oc.j(0.55),v*3,10)
o.mp(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.R()
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=B.oc.j(0.8).gp(0)
d.N(new A.o(v+r*34,u+q*22),4,p)}},
clx(d,e){var w,v,u,t,s,r,q,p,o=this
o.mj(d,e,D.dxB)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bn(new A.a1(q,p,q+36,p+22),B.iE)
$.R()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=A.ar(B.id,B.m5,r).gp(0)
d.am(p,q)}o.Bx(d,e,9)
o.mp(d,e,B.c.j(0.4),w*2.2,12)},
ckO(d,e){var w,v,u,t,s,r,q,p
this.mj(d,e,D.dlS)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bZ(new A.o(v,u),34)
$.R()
s=A.K()
s.b=B.a9
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cC(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=B.bP.j(0.85).gp(0)
d.N(new A.o(v+t*34,u+s*34),3,p)}},
ckG(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.dht)
$.R()
w=A.K()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.o(t,0),new A.o(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.o(0,s),new A.o(v,s),w)
r=this.c
q=u*B.i.F(r*0.85,1)
$.R()
u=A.K()
u.r=B.dl.j(0.45).gp(0)
d.aq(new A.a1(0,q,0+v,q+6),u)
this.mp(d,e,B.ld.j(0.45),-r*3.141592653589793*2,11)},
aD(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.au6.prototype={
a0f(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0f=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aRT(),$async$a0f)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a9H(s),$async$a0f)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0f,v)},
ahi(d){return this.cnQ(d)},
cnQ(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.it_(d),$async$ahi)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ahi,v)},
B(d){var w,v,u=null,t=A.Q(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.J?B.jX:B.jm
w=x.p
v=A.a([C.aSg(!0,B.rp,1/0,B.qJ,u,s,1/0)],w)
if(!r)v.push(new A.bN(new A.p(u,u,u,u,u,new A.a8(B.b4,B.b8,B.x,A.a([B.L,B.w.j(0.35)],x.O),u,u),B.n),B.bi,new A.bL(B.b4,u,u,new A.D(B.rY,A.d("Pick a theme or your own photo",u,u,u,u,u,u,A.m(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,B.aBz,u,u),u,u,u),u),u),u))
v.push(A.ap(8,A.A(A.a([A.E(A.dh(D.bVu,D.fED,new C.coz(this,d),A.bp(B.aW,u,u,u,B.c,u,B.k3,u,u,u,u,B.cg)),1),B.ae,A.E(A.es(D.c35,D.fTT,this.gceL(),A.di(u,u,B.w.j(0.35),u,u,u,u,u,u,B.c,u,u,B.k3,u,u,D.b5e,u,u,u,B.cg)),1)],w),B.l,u,B.e,B.j,0,u,u),u,u,8,8,u,u))
return new A.fH(1.7777777777777777,A.aH(!1,B.a3,!0,B.rp,new A.an(B.a0,u,B.b1,B.t,v,u),B.aq,t,0,u,u,u,u,u,B.aj),u)}}
C.aNc.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.aVc.prototype={}
C.aVb.prototype={}
C.aTe.prototype={}
C.a_g.prototype={
S(){return new C.aAm()}}
C.aAm.prototype={
Y(){var w,v,u=this
u.a4()
u.a.toString
w=new A.ba("",B.b6,B.aP)
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.aw()
w.P$=0
this.a3()},
KO(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.T(D.fjL)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).O(new C.aVc(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.Q(d).ax.a===B.J,l=m?B.eg:B.c,k=A.l(20),j=A.r(n,D.c2L,B.f,n,n,new A.p(B.aW.j(0.15),n,n,A.l(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.m(n,n,m?B.aS:B.as,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bG,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.m(n,n,m?B.bv:B.bo,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.bc,i,A.aI(n,n,n,n,A.X(B.cz,m?B.bv:B.bo,n,n,n,n),n,n,n,new C.d8E(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.m(n,n,m?B.bv:B.bo,n,n,n,n,n,n,n,n,12,n,n,B.U,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.m(n,n,m?B.bv:B.bo,n,n,n,n,n,n,n,n,11,n,n,B.cB,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hrS(new C.d8F(o),o.e)
u=o.d
u===$&&A.c()
t=A.m(n,n,m?B.aS:B.as,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jX:B.jm
r=A.l(12)
q=A.l(12)
p=m?B.ei:B.bP
t=A.aM(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bt(n,new A.b6(4,r,B.dt),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d8G(o),n,!1,n,n,!1,n,!0,n,B.ad,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,A_.Kz,n,n,n,n)
u=m?B.aS:B.as
m=m?B.ei:B.bP
return A.eP(n,l,new A.cP(B.m1,A.ce(A.x(A.a([j,B.aO,i,B.ax,w,B.T,v,B.aO,t,B.bz,A.A(A.a([A.E(A.dU(B.dr,new C.d8H(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.cq,n,new A.b9(A.l(12),B.a1),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.au,A.E(A.bJ(D.fU8,n,o.ga3l(),A.bp(B.aW,n,n,n,B.c,n,B.cq,n,new A.b9(A.l(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.j,0,n,n)],h),B.E,n,B.e,B.P,0,B.p),B.t,n,B.y,n,B.Cr,n,n,B.ah),n),n,n,n,A1.Cs,B.d8,n,new A.b9(k,B.a1),n)}}
C.a_f.prototype={
S(){return new C.aAl()}}
C.aAl.prototype={
Y(){this.a4()
var w=$.aw()
this.d!==$&&A.aQ()
this.d=new A.au(B.aw,w)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.aw()
w.P$=0
this.a3()},
KO(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.T(D.fhn)
return}v=this.c
v.toString
A.a6(v,!1).O(new C.aVb(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.Q(d).ax.a===B.J,o=p?B.eg:B.c,n=A.l(20),m=A.r(q,D.c_9,B.f,q,q,new A.p(B.bR.j(0.15),q,q,A.l(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.as,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bG,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.m(q,q,p?B.bv:B.bo,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.bc,l,A.aI(q,q,q,q,A.X(B.cz,p?B.bv:B.bo,q,q,q,q),q,q,q,new C.d8A(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.j,0,q,q)
l=B.aW.j(p?0.12:0.08)
w=A.l(12)
v=A.L(B.aW.j(0.25),B.r,1)
u=A.X(B.aoD,B.aW.j(0.9),q,q,q,18)
l=A.r(q,A.A(A.a([u,B.au,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.as,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.j,0,q,q),B.f,q,q,new A.p(l,q,v,w,q,q,B.n),q,q,q,q,B.bI,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.m(q,q,p?B.aS:B.as,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jX:B.jm
t=A.l(12)
s=A.l(12)
r=p?B.ei:B.bP
v=A.aM(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bt(q,new A.b6(4,t,B.dt),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d8B(this),q,!1,q,q,!1,q,!0,q,B.ad,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.l3,q,q,q,q)
w=p?B.aS:B.as
p=p?B.ei:B.bP
return A.eP(q,o,new A.cP(B.m1,A.ce(A.x(A.a([m,B.aO,l,B.aB,v,B.bz,A.A(A.a([A.E(A.dU(B.dr,new C.d8C(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.cq,q,new A.b9(A.l(12),B.a1),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.au,A.E(A.bJ(D.h0d,q,this.ga3l(),A.bp(B.bR,q,q,q,B.c,q,B.cq,q,new A.b9(A.l(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.j,0,q,q)],k),B.E,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.Cr,q,q,B.ah),q),q,q,q,A1.Cs,B.d8,q,new A.b9(n,B.a1),q)}}
C.ZN.prototype={
S(){return new C.az4()}}
C.az4.prototype={
Y(){var w,v=this
v.a4()
w=$.aw()
v.d!==$&&A.aQ()
v.d=new A.au(B.aw,w)
v.e!==$&&A.aQ()
v.e=new A.au(new A.ba("1",B.b6,B.aP),w)
v.f!==$&&A.aQ()
v.f=new A.au(B.aw,w)
v.r!==$&&A.aQ()
v.r=new A.au(B.aw,w)},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.U$=$.aw()
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
v.a3()},
gK5(){var w,v=this.e
v===$&&A.c()
w=A.cX(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gakt(){var w=this.f
w===$&&A.c()
w=A.cX(B.a.i(w.a.a))
return w==null?0:w},
gb6n(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aQJ(d){var w,v=B.i.D(this.gK5()+d,0.25,999999),u=B.i.iH(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.i.M(v))
else{u=B.i.ad(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb1(0,u)
this.m(new C.cGW())},
azM(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aW,w,w,w,20):w,u=d.a,t=u?B.jX:B.jm,s=A.l(14),r=A.l(14)
u=u?B.ei:B.bP
return A.bt(w,new A.b6(4,s,B.dt),w,B.bI,w,w,w,w,!0,new A.b6(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.l(14),B.ae0),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
ceM(d,e,f){return this.azM(d,e,f,null)},
KO(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gakt()<=0){s.c.L(x.q).f.T(D.flF)
return}r=s.c
r.toString
v=s.gK5()
u=s.gakt()
t=s.gb6n()
A.a6(r,!1).O(new C.aTe(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.J,m=new C.uj(n),l=n?B.eg:B.c,k=A.l(24),j=x.O,i=A.a([B.aW.j(0.22),B.bR.j(0.14)],j),h=A.l(14)
i=A.r(o,D.bTq,B.f,o,o,new A.p(o,o,A.L(B.aW.j(0.35),B.r,1),h,o,new A.a8(B.a7,B.aa,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bG,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.m(o,o,n?B.bv:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.cB,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.bc,h,A.aI(o,o,o,o,A.X(B.cz,n?B.bv:B.bo,o,o,o,o),o,o,o,new C.cH1(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.azM(m,"Item name (optional)","Lumber, paint, labor\u2026",B.PB),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,A_.Kz,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.m(o,o,n?B.bv:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jX:B.jm
t=A.l(14)
s=A.L(n?B.ei:B.bP,B.r,1)
r=A.aI(o,o,o,o,A.X(B.wP,n?B.aS:B.as,o,o,o,20),o,o,o,new C.cH2(p),o,o,o,o,o,B.cg)
q=p.e
q===$&&A.c()
q=A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c4E,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.eb,o,o,o,1,o,o,!1,"\u2022",o,new C.cH3(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.r(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aI(o,o,o,o,A.X(B.i0,n?B.aS:B.as,o,o,o,20),o,o,o,new C.cH4(p),o,o,o,o,o,B.cg)],w),B.l,o,B.e,B.P,0,o,o),B.f,o,o,new A.p(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,16,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.au,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.azM(m,"Amount","0.00",B.i1),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.eb,o,o,o,1,o,o,!1,"\u2022",o,new C.cH5(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.j,0,o,o)
t=x.gv
u=A.C(new A.N(D.dab,new C.cH6(p,m),t),t.k("ak.E"))
i=A.a([i,B.bz,v,B.aB,h,B.T,s,B.af,A.bW(B.bH,u,B.bs,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.W,A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.ceM(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cH7(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.l3,o,o,o,o)],w))}i.push(B.aO)
h=B.aW.j(n?0.18:0.1)
j=A.a([h,B.bR.j(n?0.12:0.06)],j)
h=A.l(16)
v=A.L(B.aW.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.m(o,o,n?B.bv:B.bo,o,o,o,o,o,o,o,o,11,o,o,B.U,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gK5()===B.i.iH(p.gK5())?B.i.M(p.gK5()):p.gK5()
s=p.gb6n()
r=A.Bs(p.gakt())
i.push(A.r(o,A.A(A.a([A.E(A.x(A.a([u,B.ax,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.m(o,o,n?B.bv:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.j,0,B.p),1),C.bFS(p.gK5()*p.gakt(),B.b2,!1,B.u)],w),B.l,o,B.e,B.j,0,o,o),B.f,o,o,new A.p(o,o,v,h,o,new A.a8(B.a7,B.aa,B.x,j,o,o),B.n),o,o,o,o,B.jq,o,o,o))
i.push(B.bz)
j=A.l(14)
h=n?B.ei:B.bP
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.cq,o,new A.b9(j,B.a1),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dU(A.d("Cancel",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,o,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cH8(d),h),1),B.au,A.E(A.dh(D.as6,D.fX7,p.ga3l(),A.bp(B.aW,o,o,0,B.c,o,B.cq,o,new A.b9(A.l(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.j,0,o,o))
return A.eP(o,l,new A.cP(Af.XB,A.ce(A.x(i,B.al,o,B.e,B.P,0,B.p),B.t,o,B.y,o,Ai.t0,o,o,B.ah),o),o,o,o,B.Of,B.d8,o,new A.b9(k,B.a1),o)}}
C.a2o.prototype={
S(){return new C.byp()}}
C.byp.prototype={
Y(){var w,v,u=this
u.a4()
w=u.a.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,B.b6,B.aP),v)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.aw()
w.P$=0
this.a3()},
B(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.J,q=r?B.eg:B.c,p=A.l(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.m(s,s,r?B.aS:B.as,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.m(s,s,r?B.aS:B.as,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jX:B.jm
v=A.aM(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bt(s,new A.b6(4,A.l(12),B.dt),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fmm(t,d),s,!1,s,s,!1,s,!0,s,B.ad,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.ao,s,s,s,s)
u=A.E(A.dU(B.dr,new C.fmn(d),s),1)
r=A.bp(B.bR,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eP(s,q,new A.D(B.Cr,A.x(A.a([o,B.aB,v,B.aO,A.A(A.a([u,B.au,A.E(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fmo(t,d),r),1)],w),B.l,s,B.e,B.j,0,s,s)],w),B.l,s,B.e,B.P,0,B.p),s),s,s,s,s,B.d8,s,new A.b9(p,B.a1),s)}}
C.acJ.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.Gp.prototype={
S(){return new C.byn(null,null)}}
C.byn.prototype={
Y(){var w,v=this
v.a4()
w=A.bl(null,D.bAr,null,1,null,v)
w.cL(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBi()},
gbCU(){switch(this.a.r.a){case 1:return A.a([B.aW,B.bR,B.b2],x.O)
case 2:return A.a([B.bx,B.aW,B.b2],x.O)
case 3:return A.a([B.aH,B.ch,B.jY],x.O)
case 4:return A.a([B.hu,B.bR,B.fp],x.O)
case 0:return A.a([B.aW,B.bR,B.b2],x.O)}},
B(d){var w=A.Q(d),v=this.d
v===$&&A.c()
return new A.en(A.c5(v,new C.fmk(this,new C.uj(w.ax.a===B.J)),null),null)}}
C.ayY.prototype={
S(){return new C.byo(null,null)}}
C.byo.prototype={
Y(){var w,v=this
v.a4()
w=A.bl(null,B.nE,null,1,null,v)
w.cL(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBj()},
B(d){var w=this.d
w===$&&A.c()
return A.c5(w,new C.fml(this),null)}}
C.bym.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bn(new A.a1(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aN(w,w))
u=new A.aG($.R().r,B.ai,null,null,A.a([],x.v))
u.E(new A.j8(v))
w=A.K()
w.b=B.a9
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.am(v,w)
w=A.K()
w.b=B.a9
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.xN(u)
t=A.a([],x.U)
w=new A.ry(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bj(A.jI(y.B));--r
q=new A.BS(w,r)
w.iy()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aUi(d,q,r,o,0,0.2,4.2,0.92)
p.aUi(d,q,r,s,0.52,0.11,3.2,0.58)}},
aUi(d,e,f,g,h,i,j,k){var w,v,u,t=B.i.F(g+h,1)*f,s=A.hOu(e.a.a,e,t,t+f*i,!0),r=A.bEc(s.glX().a.getBounds())
$.R()
w=A.K()
w.b=B.a9
w.c=j
w.d=B.bu
w.f=!0
v=this.f
u=k*this.e
w.sav(new A.a8(B.a7,B.aa,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Ix,null).aJ(0,r))
d.af(s,w)},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.aPk.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aPl.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.uj.prototype={}
C.au5.prototype={
S(){return new C.aGE()},
ge3(){return this.c}}
C.aGE.prototype={
Y(){var w=this
w.a4()
w.d=w.a.d
w.ai8()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.M9(w,v)
this.a3()},
ai8(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ai8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bEl(t.c,t.d.a),$async$ai8)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eV2(u,s))
return A.h(null,v)}})
return A.i($async$ai8,v)},
QL(){var w=0,v=A.j(x.H),u=this,t,s
var $async$QL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eUU(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.M9(t,s),$async$QL)
case 2:if(u.c!=null)u.m(new C.eUV(u))
return A.h(null,v)}})
return A.i($async$QL,v)},
Ri(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ri=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.Q(p)
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.eV0(t,new C.uj(p.ax.a===B.J)),s,null,!0,!0,x.T),$async$Ri)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a9H(q),$async$Ri)
case 6:case 5:t.m(new C.eV1(t,r))
w=7
return A.b(t.QL(),$async$Ri)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ri,v)},
Wv(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.isL(r),$async$Wv)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eUP(t,new C.rq(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.QL(),$async$Wv)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wv,v)},
cjS(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hG0(t,new C.eUT(u),w,v)},
ac1(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.r(w,w,B.f,w,w,new A.p(w,w,new A.bH(new A.ay(v,2.5,B.r,-1),B.a1,B.a1,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b50,w,w,B.n),w,22,w,w,w,w,w,22)},
ab3(d){return this.bOW(d)},
bOW(d){var w=0,v=A.j(x.H),u=this
var $async$ab3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eUS(u,d))
w=2
return A.b(u.QL(),$async$ab3)
case 2:return A.h(null,v)}})
return A.i($async$ab3,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.Q(a2).ax.a===B.J,e=f?B.c2:B.iJ,d=A.l(8),a0=A.X(Y.a2_,f?B.bv:B.bo,g,g,g,16),a1=x.p
a0=A.aP(!1,d,!0,new A.D(B.H0,A.A(A.a([a0,B.bm,A.d("Back to Projects",g,g,g,g,g,g,A.m(g,g,f?B.bv:B.bo,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.P,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eV3(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b1,B.t,A.a([A.bx(A.l(22),C.aSg(!0,A.l(22),1/0,B.qJ,g,d,1/0),B.aq),A.ap(10,A.dh(D.bY4,D.fZw,h.gb4j(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.hh,g,new A.b9(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.l(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aW.j(f?0.5:0.38),B.eQ,22),new A.ac(-4,B.G,B.bR.j(0.2),B.H,32)],w)
u=A.l(17)
t=A.L(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.H,10)],w)
s=A.l(16)
r=h.d
v=A.r(g,A.r(g,A.bx(s,new A.an(B.a0,g,B.b1,B.t,A.a([C.aSg(!0,A.l(16),1/0,B.P3,g,r.c,1/0),new A.bN(new A.p(g,g,g,g,g,new A.a8(B.b4,B.b8,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bi,g,g),A.ap(g,h.ac1(!0),g,g,8,g,8,g),A.ap(g,A.cDz(h.ac1(!0),!0,!1),g,g,g,8,8,g),A.ap(8,A.cDz(h.ac1(!1),!1,!0),g,g,8,g,g,g),A.ap(8,A.cDz(h.ac1(!1),!0,!0),g,g,g,8,g,g),A.ap(10,A.dh(D.bU1,D.fSO,h.gb4j(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.hh,g,new A.b9(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.p(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.p(g,g,g,d,v,D.c6l,B.n),g,g,g,g,B.mf,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.m(g,g,f?B.aS:B.as,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.l(22)
u=x.O
u=f?A.a([D.bfO,B.oh,B.he],u):A.a([B.b2,B.aW,B.bR],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aW.j(f?0.45:0.35),B.eQ,24)],t)
r=A.l(22)
p=A.ap(g,A.X(B.jH,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.l(20)
m=A.L(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.r(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.m(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.p(o,g,m,n,g,g,B.n),g,g,g,g,B.hf,g,g,g)],a1),B.l,g,B.e,B.j,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.m(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bFS(h.d.gxI(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.T,A.d("Sum of all budget line items",g,g,g,g,g,g,A.m(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cB,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.j,0,B.p),1)
n=A.l(14)
m=A.l(14)
l=B.c.j(0.12)
k=A.L(B.hw.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aH.j(0.28),B.cJ,14)],t)
j=B.aH.j(0.22)
i=A.l(10)
u=A.r(g,A.bx(r,new A.an(B.a0,g,B.ac,B.t,A.a([p,new A.D(D.bFg,A.A(A.a([o,B.au,A.aH(!1,B.a3,!0,g,A.aP(!1,n,!0,A.ez(new A.D(U.wq,A.x(A.a([A.r(g,D.arH,B.f,g,g,new A.p(j,g,A.L(B.aH.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cm,g,g,g),B.fD,D.fHs],a1),B.l,g,B.e,B.P,0,B.p),g),g,new A.p(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcjR(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.aj)],a1),B.l,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.p(g,g,g,v,s,new A.a8(B.aA,B.aF,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fH(1.7777777777777777,d,g),B.aO,w,B.T,u,B.bz,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.as,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b3,A.dh(Au.a3Q,D.fFi,h.gbDn(),A.bp(B.aW,g,g,g,B.c,g,B.hK,g,new A.b9(A.l(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.j,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.eg:B.c
v=A.l(14)
u=A.L(f?B.ei:B.bP,B.r,1)
t=A.X(B.a2k,f?B.bv:B.bo,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.as,g,g,g,g,g,g,g,g,g,g,g,B.U,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.r(g,A.x(A.a([t,B.W,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.m(g,g,f?B.bv:B.bo,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.j,0,B.p),B.f,g,g,new A.p(w,g,u,v,g,g,B.n),g,g,g,g,B.qF,g,g,1/0))}else B.d.v(d,new A.N(w,new C.eV4(h,new C.uj(f)),A.U(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.Cf,A.at(A.n5(g,f?B.bv:B.bo,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c4(g,e,A.bm(!0,A.x(A.a([new A.D(B.Cj,a0,g),A.E(A.ce(A.x(d,B.E,g,B.e,B.j,0,B.p),B.t,g,B.y,g,E.yS,g,g,B.ah),1)],a1),B.E,g,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bH3(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.eg:B.c,p=A.l(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.l(16),m=A.r(u,u,B.f,u,u,D.b7M,u,u,u,u,u,u,u,5),l=B.aW.j(r?0.22:0.12),k=A.l(12)
l=A.r(u,A.X(s?B.ii:B.hA,B.b2,u,u,u,20),B.f,u,u,new A.p(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bN
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.m(u,u,r?B.aS:B.as,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd_n()
v=A.Bs(d.d)
B.d.v(t,A.a([B.ax,A.d(w+" "+v,u,u,u,u,u,u,A.m(u,u,r?B.bv:B.bo,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.ba,B.P,0,B.p)}t=A.E(t,1)
k=A.a([B.aW.j(0.14),B.bR.j(0.1)],x.O)
w=A.l(12)
k=A.r(u,C.bFS(d.c*d.d,B.b2,!1,B.u),B.f,u,u,new A.p(u,u,u,w,u,new A.a8(B.a7,B.aa,B.x,k,u,u),B.n),u,u,u,u,B.hh,u,u,u)
w=x.p
return A.r(u,A.bx(n,new A.EP(A.A(A.a([m,A.E(new A.D(B.alz,A.A(A.a([l,B.bc,t,B.ae,k,A.aI(u,u,u,u,A.X(B.cz,(r?B.bv:B.bo).j(0.75),u,u,u,20),u,u,u,new C.eUQ(this,d),u,u,u,u,u,B.cg)],w),B.l,u,B.e,B.j,0,u,u),u),1)],w),B.al,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.b6D,new A.p(q,u,u,p,o,u,B.n),u,u,u,B.d6,u,u,u,u)}}
C.aeM.prototype={
EZ(d){return this.bQj(d)},
bQj(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$EZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.py(d,o,!1),$async$EZ)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
w=4
return A.b(A.bQ(Ah.Cd,null,x.H),$async$EZ)
case 4:s=t.d
w=5
return A.b(C.fW7(!0,o,s),$async$EZ)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Hk(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$EZ)
case 6:p=f
w=7
return A.b(A.px(o,!1),$async$EZ)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$EZ,v)},
a0h(d){return this.cAg(d)},
cAg(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0h=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.py(d,s,!1),$async$a0h)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
A.hy(d,new C.au_(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.px(s,!1),$async$a0h)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0h,v)},
QM(d){return this.cwk(d)},
cwk(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(A.hy(d,D.aLj,!0,"NgmyWorksheetProjectScan",x.N),$async$QM)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bFT(s),$async$QM)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.T(D.fkM)
w=1
break}q=C.hhn(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dL(p,x.H),$async$QM)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$QM,v)},
a0i(d){return this.cIz(d)},
cIz(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0i=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(C.bFp(),$async$a0i)
case 3:s=f
if(s==null){w=1
break}r=C.hhn(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dL(q,x.H),$async$a0i)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0i,v)},
B(d){var w=this,v=null,u=A.Q(d).ax.a===B.J,t=new C.uj(u),s=w.d.d.length,r=u?B.eg:B.c,q=A.l(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kD,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wp,A.r(v,A.x(A.a([w.cyQ(d,t,s),new A.D(D.bEF,A.x(A.a([w.b7i(t,"QR restore"),B.W,A.A(A.a([w.b2i(t,!0,B.jL,B.aH,B.aH,new C.eV6(w,d),"Show to scan","QR code"),B.au,w.azN(t,B.js,B.b7,B.bq,new C.eV7(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.j,0,v,v),B.d9,w.b7i(t,"Backup files"),B.W,A.A(A.a([w.azN(t,B.i2,B.aW,B.bR,new C.eV8(w,d),"Full copy","Backup file"),B.au,w.azN(t,R.zv,B.av,B.aQ,new C.eV9(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.j,0,v,v)],o),B.E,v,B.e,B.j,0,B.p),v)],o),B.l,v,B.e,B.P,0,B.p),B.aq,v,v,new A.p(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cyQ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eX,B.cH,B.fX],k):A.a([B.b2,B.aW,B.bR],k)
w=A.ap(l,A.X(B.v_,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.r(l,l,B.f,l,l,new A.p(B.c.j(0.35),l,l,A.l(4),l,l,B.n),l,4,l,B.kw,l,l,l,36),l,l,l)
u=A.l(14)
t=A.L(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.r(l,C.aSg(!0,A.l(13),64,D.bPi,l,r.c,64),B.aq,l,l,new A.p(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.m(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,I.abq,l,l,l)
r=C.bFS(r.gxI(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.l(20)
o=A.L(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.r(l,new A.an(B.a0,l,B.ac,B.t,A.a([w,new A.D(D.bF1,A.x(A.a([v,A.A(A.a([s,B.ew,A.E(A.x(A.a([u,B.ax,t,B.T,A.A(A.a([r,B.ae,A.r(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.m(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.p(q,l,o,p,l,l,B.n),l,l,l,l,B.fL,l,l,l)],m),B.l,l,B.e,B.j,0,l,l)],m),B.E,l,B.e,B.j,0,B.p),1),A.aI(l,l,l,l,A.X(B.cz,B.c.j(0.85),l,l,l,l),l,l,l,new C.eV5(d),l,l,l,A.o1(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aTF,l,l,l,l),l,l)],m),B.E,l,B.e,B.j,0,l,l)],m),B.l,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.p(l,l,l,l,l,new A.a8(B.aA,B.aF,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b7i(d,e){var w=null,v=A.r(w,w,B.f,w,w,new A.p(B.aW,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ae,A.d(e.toUpperCase(),w,w,w,w,w,w,A.m(w,w,d.a?B.bv:B.bo,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.j,0,w,w)},
b2i(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.l(18),p=A.l(18),o=d.a,n=o?D.ak7:B.aS
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.ei:B.bP
w=w.j(o?0.8:1)}w=A.L(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aH.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.l(12)
s=A.L(h.j(0.35),B.r,1)
t=A.r(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.p(u,r,s,t,r,r,B.n),r,r,r,r,B.t2,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.m(r,r,o?B.aS:B.as,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aH(!1,B.a3,!0,r,A.aP(!1,q,!0,A.ez(new A.D(E.a0n,A.x(A.a([t,B.af,u,B.bG,A.d(j,r,r,r,r,r,r,A.m(r,r,o?B.bv:B.bo,r,r,r,r,r,r,r,r,11,r,r,B.cB,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.j,0,B.p),r),r,new A.p(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
azN(d,e,f,g,h,i,j){return this.b2i(d,!1,e,f,g,h,i,j)}}
C.au_.prototype={
S(){return new C.bnn()}}
C.bnn.prototype={
Y(){this.a4()
this.ag2()},
ag2(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ag2=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bFU(p.c,p.d),$async$ag2)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eUK(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eUL(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ag2,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.Q(d).ax.a===B.J,f=g?B.BM:B.iJ,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aI(h,h,h,h,A.X(B.eM,g?B.ab:B.an,h,h,h,18),h,h,h,new C.eUM(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.m(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.tE],u),B.l,h,B.e,B.j,0,h,h)
t=A.l(24)
s=x.O
s=g?A.a([B.eX,B.cH,B.fX],s):A.a([B.b2,B.aW,B.bR],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aW.j(g?0.4:0.3),B.eQ,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dm,B.K,h,h)
p=C.bFS(p.gxI(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.l(20)
l=v===1?"item":"items"
s=A.r(h,A.x(A.a([o,B.am,A.A(A.a([p,B.ae,A.r(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.m(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.p(n,h,h,m,h,h,B.n),h,h,h,h,B.fL,h,h,h)],u),B.l,h,B.ba,B.j,0,h,h)],u),B.l,h,B.e,B.j,0,B.p),B.f,h,h,new A.p(h,h,h,t,q,new A.a8(B.aA,B.aF,B.x,s,h,h),B.n),h,h,h,h,E.a0K,h,h,1/0)
t=g?D.br0:B.c
q=A.l(24)
p=A.L(w?B.aH.j(0.4):B.aW.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dq,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.Vp,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.esb)
else{m=A.l(20)
l=A.L(B.bh,B.r,1)
o.push(A.r(h,A.qc(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.p(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aO)
n=w?B.aH:B.aW
n=n.j(g?0.15:0.1)
m=A.l(12)
l=A.L((w?B.aH:B.aW).j(0.35),B.r,1)
k=w?B.Ph:B.PQ
k=A.X(k,w?B.aH:B.aW,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.r(h,A.A(A.a([k,B.au,A.E(A.d(j,h,h,h,h,h,h,A.m(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.j,0,h,h),B.f,h,h,new A.p(n,h,l,m,h,h,B.n),h,h,h,h,B.hK,h,h,h))
return A.c4(h,f,A.bm(!0,A.x(A.a([new A.D(Ad.Oq,e,h),A.E(A.ce(A.x(A.a([s,B.aO,A.r(h,A.x(o,B.l,h,B.e,B.j,0,B.p),B.f,h,h,new A.p(t,h,p,q,r,h,B.n),h,h,h,h,B.uB,h,h,1/0)],u),B.l,h,B.e,B.j,0,B.p),B.t,h,B.y,h,E.amI,h,h,B.ah),1)],u),B.l,h,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.au4.prototype={
S(){return new C.aGD(A.zY(B.NJ,B.o7,B.v7))}}
C.aGD.prototype={
t(){this.d.t()
this.a3()},
aOH(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j1(w,d)},
cfE(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s=C.iq4(t)
if(s!=null){this.aOH(s)
return}r=C.hwr(t)
if(r!=null)q=A.cS(r,p,0)
else q=!1
if(q){this.aOH(B.a.i(B.a.b2(r,B.a.co(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eI(A.a([A.aI(t,t,t,t,A.X(u.f?B.uO:A8.Pp,t,t,t,t,t),t,t,t,new C.eUO(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.BM,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fSG,t,t,t,1,t,!0),q=A.zX(u.d,B.c_,u.gcfD()),p=A.l(28)
p=A.at(A.r(t,t,B.f,t,t,new A.p(t,t,A.L(B.aW,B.r,3),p,A.a([new A.ac(2,B.G,B.aW.j(0.35),B.H,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.l(16)
return A.c4(r,B.w,new A.an(B.a0,t,B.b1,B.t,A.a([q,p,A.ap(32,A.r(t,D.fRr,B.f,t,t,new A.p(w,t,A.L(B.aW.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jq,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aLx.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.P3.prototype={
S(){return new C.aGF(D.adj,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aGF.prototype={
gcGl(){return J.bH1(this.e,0,new C.eVw())},
Y(){this.a4()
$.aW.c1$.push(this)
this.wl()},
t(){$.aW.hV(this)
this.a3()},
jm(d){if(d===B.fW)this.wl()},
wl(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wl=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DD(q.a.c).dh(0,B.k2),$async$wl)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eVs(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eVt(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wl,v)},
Iu(d){return this.bN3(d)},
bN2(){return this.Iu(null)},
bN3(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Iu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.isN(l,d),$async$Iu)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lC(l,r,q,D.dm7,new A.V(Date.now(),0,!1))
w=4
return A.b(C.M9(t.a.c,p),$async$Iu)
case 4:o=f
w=5
return A.b(t.wl(),$async$Iu)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.T(D.fhR)
w=1
break}n=J.aT(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.T(D.fjF)
else n.L(q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.F2(m)
case 1:return A.h(u,v)}})
return A.i($async$Iu,v)},
F2(d){return this.cjD(d)},
cjD(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$F2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hy(s,new C.au5(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$F2)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.M9(u.a.c,t),$async$F2)
case 5:case 4:w=6
return A.b(u.wl(),$async$F2)
case 6:return A.h(null,v)}})
return A.i($async$F2,v)},
w6(d){return this.c2o(d)},
c2o(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$w6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bFp(),$async$w6)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hy(r,D.aLj,!0,"NgmyWorksheetProjectScan",x.N),$async$w6)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bFT(q),$async$w6)
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
r.T(A.b3(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hhn(s)
w=15
return A.b(C.M9(t.a.c,p),$async$w6)
case 15:o=f
w=16
return A.b(t.wl(),$async$w6)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.T(D.fjK)
w=1
break}r.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.F2(p)
case 1:return A.h(u,v)}})
return A.i($async$w6,v)},
Or(d){return this.bLH(d)},
bLH(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Or=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cg(null,null,!0,null,new C.eVd(d),s,null,!0,!0,x.y),$async$Or)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.p6(t.a.c,A.a([],x.D)),$async$Or)
case 6:w=7
return A.b(t.wl(),$async$Or)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fhW)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Or,v)},
cjQ(d){var w=this.c
w.toString
A.bU(B.L,null,new C.eVm(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b7V(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.l(16),p=g.a
if(p)w=B.jX
else w=B.c
v=A.l(16)
u=A.L(p?B.ei:B.bP,B.r,1)
t=d.j(0.14)
s=A.l(12)
s=A.r(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.p(t,r,r,s,r,r,B.n),r,r,r,r,B.bV,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.m(r,r,p?B.aS:B.as,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aH(!1,B.a3,!0,r,A.aP(!1,q,!0,A.r(r,A.x(A.a([s,B.af,t,B.bG,A.d(h,r,r,r,r,r,r,A.m(r,r,p?B.bv:B.bo,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.j,0,B.p),B.f,r,r,new A.p(w,r,u,v,r,r,B.n),r,r,r,r,B.wo,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
a0N(d,e){return this.cjE(d,e)},
cjE(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0N=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.L,null,new C.eVh(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a0N)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hG0(r,new C.eVi(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Ot(d,e),$async$a0N)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0N,v)},
b4W(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.l(12)
s=A.r(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.p(t,u,u,s,u,u,B.n),u,u,u,u,B.bV,u,u,u)
if(d)t=B.ay
else t=h.a?B.aS:B.as
t=A.d(j,u,u,u,u,u,u,A.m(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.m(u,u,w?B.bv:B.bo,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.j,0,B.p),1)
return A.aH(!1,B.a3,!0,u,A.aP(!1,u,!0,new A.D(B.Cq,A.A(A.a([s,B.bc,t,A.X(B.eI,w?B.bv:B.bo,u,u,u,u)],v),B.l,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj)},
cqz(d,e,f,g,h,i){return this.b4W(!1,d,e,f,g,h,i)},
Ot(d,e){return this.bLR(d,e)},
bLR(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ot=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.ln(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Ot)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bE6(t.a.c,d.a),$async$Ot)
case 6:w=7
return A.b(t.wl(),$async$Ot)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ot,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.J,m=new C.uj(n),l=n?B.c2:B.iJ
if(p.f)n=D.bdB
else{w=A.aF(d,B.dR,x.w).w
v=p.bGa(m)
u=p.c1s(m)
t=p.gbDg()
if(n)s=B.jX
else s=B.c
r=A.l(13)
q=x.p
t=A.a([v,B.af,u,B.aO,new C.Gp(A.r(o,A.A(A.a([p.aDl(P.P2,"Projects",m,D.adj),p.aDl(B.wE,"Cashier",m,D.b1v),p.aDl(B.Hl,"Family Tree",m,D.hEv)],q),B.l,o,B.e,B.j,0,o,o),B.f,o,o,new A.p(s,o,o,r,o,o,B.n),o,o,o,o,o,o,o,o),14,B.eB,0.95,t,o),B.bz],q)
v=p.d
if(v===D.adj){v=J.ad(p.e)
B.d.v(t,A.a([A.A(A.a([A.d("Projects ("+v+")",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,16,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b3,new C.ayY(p.gaT3(),o)],q),B.l,o,B.e,B.j,0,o,o),B.aB,p.cqB(m)],q))}else{n=p.a
if(v===D.b1v)t.push(new C.apW(n.c,m,o))
else{v=p.r
t.push(new C.ar8(n.c,n.d,n.e,n.f,new C.eVz(p),new C.eVA(p),new A.bC(v,x.b4)))}}n=A.ce(A.x(t,B.E,o,B.e,B.j,0,B.p),B.t,o,B.y,o,new A.S(20,w.r.b+8,20,32),o,o,B.ah)}return A.c4(o,l,A.bm(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bGa(d){var w=null,v=A.l(8),u=d.a,t=A.X(Y.a2_,u?B.bv:B.bo,w,w,w,16)
return A.aP(!1,v,!0,new A.D(B.kT,A.A(A.a([t,B.bm,A.d("Back to Profile",w,w,w,w,w,w,A.m(w,w,u?B.bv:B.bo,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eVa(this),w,w,w,w,w,w,w)},
gbDg(){switch(this.d.a){case 0:return D.acx
case 1:return D.hsV
case 2:return D.acy}},
c1s(d){var w=null,v=A.l(15),u=A.a([new A.ac(0,B.G,B.aW.j(0.35),B.cC,16)],x.V),t=x.p,s=A.A(A.a([A.r(w,D.c__,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bc,D.bJE,A.aH(!1,B.a3,!0,w,A.aP(!1,A.l(12),!0,A.r(w,D.bXn,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eVe(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)],t),B.E,w,B.e,B.j,0,w,w),r=B.b2.j(0.55),q=A.l(12)
return new C.Gp(A.r(w,A.x(A.a([new A.D(B.GT,s,w),A.r(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.m(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ax,A.d(A.Bs(this.gcGl()),w,w,w,w,w,w,D.fBz,w,w,w)],t),B.E,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(r,w,w,q,w,w,B.n),w,w,w,B.uy,B.jq,w,w,1/0)],t),B.E,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(B.aW,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hsU,w)},
aDl(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.l(12),r=t?B.aW:B.L,q=A.l(12),p=t?A.L(B.c.j(0.55),B.r,2):A.L(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aW.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bv:B.bo
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bv:B.bo
return A.E(A.aH(!1,B.a3,!0,u,A.aP(!1,s,!0,A.cT(u,A.A(A.a([w,B.e7,new A.dl(1,B.cn,A.d(e,u,1,B.a2,u,u,u,A.m(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.ba,B.j,0,u,u),u,u,B.cx,new A.p(r,u,p,q,o,u,B.n),B.iO,u,u,u,u,B.H1,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eVv(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),1)},
cqB(d){var w,v,u,t,s,r,q=this,p=null
if(J.cs(q.e)){w=d.a
v=w?B.eg:B.c
u=A.l(15)
t=A.r(p,D.bXt,B.f,p,p,new A.p(p,p,p,p,A.a([new A.ac(2,B.G,B.aW.j(0.5),B.eQ,28)],x.V),D.c8L,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.m(p,p,w?B.aS:B.as,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Gp(A.r(p,A.x(A.a([t,B.d9,s,B.T,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.m(p,p,w?B.bv:B.bo,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.e1,A.A(A.a([A.E(q.aUE(B.js,"Scan QR",new C.eVp(q),d),1),B.au,A.E(q.aUE(R.zv,"Upload file",new C.eVq(q),d),1)],r),B.l,p,B.e,B.j,0,p,p),B.aB,A.bJ(D.h2b,p,q.gaT3(),A.bp(B.aW,p,p,p,B.c,B.h9,p,p,new A.b9(A.l(12),B.a1),p,p,p))],r),B.l,p,B.e,B.j,0,B.p),B.f,p,p,new A.p(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bG6,1.05,D.acx,p)}w=J.b8(q.e,new C.eVr(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Gp(A.x(w,B.l,p,B.e,B.j,0,B.p),16,B.bV,1,D.acx,p)},
aUE(d,e,f,g){var w=null,v=B.aW.j(g.a?0.18:0.1),u=A.l(12),t=A.l(12),s=A.l(12),r=A.L(B.aW.j(0.45),B.r,1)
return A.aH(!1,B.a3,!0,u,A.aP(!1,t,!0,A.r(w,A.x(A.a([A.X(d,B.b2,w,w,w,26),B.T,A.d(e,w,w,w,w,w,w,D.fzN,B.K,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),B.f,w,w,new A.p(w,w,r,s,w,w,B.n),w,w,w,w,B.als,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)},
cqA(d,e){var w,v,u=null,t=e.a,s=t?B.eg:B.c,r=A.l(14),q=A.L(t?B.ei:B.bP,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.ev,10)],x.V),o=A.l(14),n=t?B.bv:B.bo
n=A.bx(B.Xv,new A.fH(1.7777777777777777,C.aSg(!0,B.fk,1/0,P.P2,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.m(u,u,t?B.aS:B.as,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.ax,A.d(""+d.d.length+" budget items \xb7 "+A.Bs(d.gxI()),u,u,u,u,u,u,D.fxK,u,u,u)],w),B.E,u,B.e,B.j,0,B.p),1)
return A.r(u,A.aH(!1,B.a3,!0,u,A.aP(!1,o,!0,A.x(A.a([n,new A.D(B.bI,A.A(A.a([v,A.aI(u,u,u,u,A.X(Al.a31,t?B.bv:B.bo,u,u,u,u),u,u,u,new C.eVn(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.j,0,u,u),u)],w),B.E,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eVo(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),B.f,u,u,new A.p(s,u,q,r,p,u,B.n),u,u,u,B.en,u,u,u,1/0)}}
C.bAa.prototype={}
C.rq.prototype={
aj(){var w=this,v=w.c,u=w.d
return A.I(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd_n(){var w,v,u,t,s=this.c
if(s===B.i.iH(s))w=B.o.u(B.i.M(s))
else{v=B.i.ad(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lC.prototype={
gxI(){return B.d.cG(this.d,0,new C.cGg())},
aj(){var w=this,v=w.d,u=A.U(v).k("N<1,a9<n,@>>")
v=A.C(new A.N(v,new C.cGf(),u),u.k("ak.E"))
return A.I(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bfi(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lC(w.a,w.b,v,u,w.e)},
bf0(d){return this.bfi(d,null)},
Tz(d){return this.bfi(null,d)}}
C.Iw.prototype={
a7(){return"FamilyGender."+this.b}}
C.hW.prototype={
aj(){var w=this
return A.I(["id",w.a,"name",w.b,"gender",C.hBv(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aG3(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hW(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.amc.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.kV.prototype={
gaqs(){var w=this.f
return new A.Y(w,new C.bSI(),A.U(w).k("Y<1>")).gI(0)},
aj(){var w=this,v=w.f,u=A.U(v).k("N<1,a9<n,@>>")
v=A.C(new A.N(v,new C.bSH(),u),u.k("ak.E"))
return A.I(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.iil(w.y),"games",w.z],x.N,x.z)},
x0(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kV(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bfh(d,e){var w=null
return this.x0(w,w,w,d,e,w,w,w,w)},
cPJ(d,e,f,g,h,i,j){return this.x0(d,e,null,f,g,h,i,j,null)},
aG8(d,e){var w=null
return this.x0(w,w,w,w,d,w,w,e,w)},
cPL(d,e,f,g,h,i,j,k){return this.x0(d,e,null,f,g,h,i,j,k)},
cOe(d){var w=null
return this.x0(w,w,w,w,w,w,w,d,w)},
cOC(d){var w=null
return this.x0(w,w,w,w,w,w,w,w,d)},
beV(d){var w=null
return this.x0(w,w,d,w,w,w,w,w,w)},
aFU(d){var w=null
return this.x0(w,w,w,w,w,d,w,w,w)},
cPg(d,e,f){var w=null
return this.x0(w,d,w,w,e,w,w,f,w)},
cO1(d){var w=null
return this.x0(w,w,w,d,w,w,w,w,w)},
cOO(d,e){var w=null
return this.x0(d,w,w,w,w,w,e,w,w)}}
C.cGh.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cGi.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aIJ.prototype={}
C.baN.prototype={
ak(d){this.a=d.a
this.b=d.b},
cY(d){var w=new C.baN()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b4(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.baM.prototype={
gwT(){return!0},
gGz(){return this.z.b<this.b.length},
aWk(d){switch(0){case 0:return d.a.c}},
aW0(d){switch(0){case 0:return d.a.d}},
bVU(d,e){switch(0){case 0:return new A.hR(d,e)}},
bVh(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hf(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iO(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Ig(b4)
switch(0){case 0:v=b5.b
u=new A.kS(0,v,0,1/0)
t=w===B.Vg
break}s=A.a([],x.gZ)
r=A.T(x.gF,x.S)
for(b3=b1.z,q=B.d.fO(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.J)(q),++h){g=q[h]
g.hf(b4,u,!0)
f=b1.aWk(g)
f.toString
e=b1.aW0(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIJ(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIJ(k,j,i))}d=s.length
switch(0){case 0:q=b5.cB(new A.hR(m,l))
a0=q.a
a1=q.b
b1.a=new A.iO(0,0,a0,a1)
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
for(q=B.d.fO(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.J)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aWk(g)
e=b1.aW0(g)
e.toString
a9=b1.bVh(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bVU(a6,a3+a9)
b0=g.a
g.a=new A.iO(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fV(d){var w,v,u,t,s,r=this
r.lB(d)
w=d.b
w.is()
v=A.dr()
u=r.a
v.ej(u.a,u.b,0,1)
w.pn(0,v)
for(u=r.z,u=B.d.dt(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.J)(u),++s)u[s].fV(d)
w.nA(0)},
H4(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
is(){return this.z}}
C.byq.prototype={}
var z=a.updateTypes(["aB<~>()","P(hW)","~()","P(kV)","P(nw)","a9<n,@>(kV)","H(kV,kV)","H(hW,hW)","n(hW)","kV(a9<@,@>)","P(lC)","nw(a9<@,@>)","a9<n,@>(nw)","P(uU)","uU()","H(hW)","ai<hW>()","P(zG)","a0i(Z)","n?(hW)","eJ<n?>(hW)","aB<~>(lC)","P(rq)","a9<n,@>(hW)","hW(a9<@,@>)","H(lC,lC)","P(ag4)","~(bd)","v(oJ)","H(H,aa9)","P(qI<H>)","~(qI<H>)","U5(Z)","P(MP)","P(uT)","~(hW)","n(n)","Wq(Z)","U4(Z)","aer(Z)","a_e(Z)","hW(hW)","cK(bA<n,GF>)","cK(KZ)","a_I(Z)","H?(hW)","hW()","P(KZ)","D(hW)","~(Iw)","a_E(Z)","v(Iw,n,a0)","P(afY)","bA<n,ai<a9<n,@>>>(n,ai<nw>)","a_G(Z)","+count,id,name(H,n,n)(kV)","n(kV)","a0C(Z)","a0D(Z)","P(lW)","lW()","ZN(Z)","a2o(Z)","a_g(Z)","a_f(Z)","~(H)","~(n,lr?)","v(rq)","aeM(Z)","~(ml)","aB<~>([n?])","G(G,lC)","v(lC)","G(G,rq)","a9<n,@>(rq)","rq(a9<@,@>)","ai<lr>()","uT()","n(V)","lC(a9<@,@>)","ct(Iv)","n(lC)","a9<n,@>(lC)","H(nw,nw)","kV(a9<n,@>)","kV(kV)"])
C.fOF.prototype={
$1(d){return d.a+" "+d.b},
$S:125}
C.fOE.prototype={
boz(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rh(s,d,B.i3,"book",E.GG),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.LY(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.boz(d)},
$S:319}
C.fOG.prototype={
$1(d){return d.b},
$S:125}
C.fYe.prototype={
$1(d){var w=null
return A.eP(w,B.L,new H.Qu(this.a,this.b,w),w,w,0,B.a0o,B.d8,w,w,w)},
$S:47}
C.fBM.prototype={
$1(d){return d!=null},
$S:220}
C.fBN.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:220}
C.fBS.prototype={
$1(d){if(this.a)return new A.o(d.a*520,d.b*160)
return d},
$S:179}
C.fMo.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fc(d,w,w,w,A.hc(w,B.tv,w,w,w,w,w,w,w,B.dF,w,w,10.5,w,B.eC,w,!0,w,w,w,w),w),u=f?B.eC:B.wy
return new A.ob(D.bBu,A.aaZ(A.a([new A.fV(130,w,v),new A.zF(1,B.He,A.fc(e,w,w,w,A.hc(w,g==null?D.euB:g,w,w,w,w,w,w,w,B.dF,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.yw,B.lS))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1959}
C.fMn.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.w3(999)
f=A.xF(A.lR(h,A.fc("Cashier",h,h,h,A.hc(h,D.Ar,h,h,h,h,h,h,h,B.dF,h,h,10,h,B.eC,h,!0,h,h,h,h),h),h,new A.kT(D.eus,h,f,B.i8,h),h,h,D.bC_,h))
w=A.xF(A.fc("Debt receipt",h,h,h,A.hc(h,h,h,h,h,h,h,h,h,B.dF,h,h,22,h,B.eC,h,!0,h,h,h,h),h))
v=A.xF(A.fc(C.xn(new A.V(Date.now(),0,!1),!0),h,h,h,D.ab_,h))
u=A.w3(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fc(s,h,h,h,A.hc(h,h,h,h,h,h,h,h,h,B.dF,h,h,14,h,B.eC,h,!0,h,h,h,h),h)
r=A.fc("Person who owes",h,h,h,D.ab_,h)
q=A.w3(10)
p=x.Z
u=A.lR(h,A.zy(A.a([s,new A.fV(h,2,h),r,new A.fV(h,10,h),A.lR(h,A.zy(A.a([A.fc("Amount owed",h,h,h,D.ab_,h),new A.fV(h,2,h),A.fc(A.Bs(t.c),h,h,h,A.hc(h,D.Ar,h,h,h,h,h,h,h,B.dF,h,h,20,h,B.eC,h,!0,h,h,h,h),h)],p),B.rR,B.lS),h,new A.kT(B.pP,h,q,B.i8,h),h,h,D.bBa,1/0)],p),B.rR,B.lS),h,new A.kT(E.aMG,h,u,B.i8,h),h,h,D.bD8,1/0)
q=new A.nV(D.euv,0.9,B.l8)
r=A.w3(12)
s=i.c
o=s.$2("Original due",C.xn(t.r,!1))
n=s.$2("Current due",C.xn(t.f,!1))
m=i.d
l=new A.nV(m,1.1,B.l8)
k=A.w3(8)
j=i.a
k=A.a([o,n,new A.fV(h,6,h),A.lR(h,A.xF(A.fc(t.gaNf(),h,h,h,A.hc(h,m,h,h,h,h,h,h,h,B.dF,h,h,11,h,B.eC,h,!0,0.5,h,h,h),h)),h,new A.kT(h,new A.q_(l,l,l,l),k,B.i8,h),h,h,D.bC7,1/0),new A.fV(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.Ar))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.Ar))
else{n=A.fc("Missed days ("+n+")",h,h,h,A.hc(h,B.tv,h,h,h,h,h,h,h,B.dF,h,h,10.5,h,B.eC,h,!0,h,h,h,h),h)
m=A.U(o).k("N<1,TE>")
o=A.C(new A.N(o,new C.fMm(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fV(h,4,h),n,new A.fV(h,6,h),new C.baM(5,5,new C.baN(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fV(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fV(h,8,h),w,new A.fV(h,3,h),v,new A.fV(h,16,h),u,new A.fV(h,10,h),A.lR(h,A.zy(k,B.yw,B.lS),h,new A.kT(h,new A.q_(q,q,q,q),r,B.i8,h),h,h,B.alD,1/0)],p)
w=j.a
if(w!=null){v=new A.nV(B.JK,1,B.l8)
B.d.v(f,A.a([new A.fV(h,16,h),A.fc("Debtor signature",h,h,h,A.hc(h,B.tv,h,h,h,h,h,h,h,B.dF,h,h,10,h,B.eC,h,!0,h,h,h,h),h),new A.fV(h,6,h),A.lR(h,new A.IQ(w,B.XI,h,h),h,new A.kT(h,new A.q_(v,v,v,v),A.w3(6),B.i8,h),82,h,B.Oo,1/0)],p))}f.push(new A.fV(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fc(w,h,h,h,D.fq2,h))
f.push(new A.fV(h,18,h))
f.push(A.xF(A.fc("NGMY.ORG",h,h,h,A.hc(h,D.Ar,h,h,h,h,h,h,h,B.dF,h,h,14,h,B.eC,h,!0,1.8,h,h,h),h)))
return f},
$S:408}
C.fMm.prototype={
$1(d){var w=null,v=new A.nV(D.JL,0.7,B.l8),u=A.w3(999)
return A.lR(w,A.fc(C.xn(d,!1),w,w,w,A.hc(w,D.JL,w,w,w,w,w,w,w,B.dF,w,w,9.5,w,B.eC,w,!0,w,w,w,w),w),w,new A.kT(w,new A.q_(v,v,v,v),u,B.i8,w),w,w,D.bHy,w)},
$S:1960}
C.c7Z.prototype={
$1(d){var w=null,v=B.bD.j(0.08),u=A.l(999),t=A.L(B.bD.j(0.28),B.r,1)
return A.r(w,A.d(C.xn(d,!1),w,w,w,w,w,w,D.fxc,w,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.eL,w,w,w)},
$S:1961}
C.fYL.prototype={
$1(d){var w=null,v=A.aF(d,B.c1,x.w).w,u=A.l(26),t=A.aI(w,w,w,w,D.c_Y,w,w,w,new C.fYI(d),w,w,w,w,w,B.cg),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eP(w,B.L,new A.cP(new A.aY(0,380,0,v.a.b*0.9),A.aH(!1,B.a3,!0,u,new A.D(B.a0b,A.x(A.a([new A.bL(B.aa,w,w,t,w),new A.dl(1,B.cn,A.ce(A.x(A.a([new A.en(new C.b_O(r,w),s),B.W,A.A(A.a([A.E(A.es(B.zE,D.fZr,new C.fYJ(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fh,w,new A.b9(A.l(14),B.a1),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ae,A.E(A.dh(B.a3G,D.fVQ,new C.fYK(r,d),A.bp(B.b2,w,w,w,B.c,w,B.fh,w,new A.b9(A.l(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.j,0,w,w)],p),B.l,w,B.e,B.P,0,B.p),B.t,w,B.y,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.P,0,B.p),w),B.f,B.as,0,w,w,w,w,w,B.aj),w),w,w,0,Aq.a0B,B.d8,w,w,w)},
$S:47}
C.fYI.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fYJ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.ap$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.mg(2.5),$async$$0)
case 4:w=3
return A.b(e.hr(B.hl),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eT(B.dQ.gaU(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aB(o,0,32)
w=5
return A.b(A.tq(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fYK.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fT2(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.T(A.b3(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fYD.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.b
return A.eP(w,B.as,A.x(A.a([new A.D(D.bCX,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nh,w,w,w),1),A.aI(w,w,w,w,B.lq,w,w,w,new C.fYB(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.j,0,w,w),w),new A.dl(1,B.cn,new A.D(B.f4,A.bx(A.l(14),A.fR(t,B.A,w,w,B.ck,B.dD,!1,w,!1,w,w),B.aq),w),w),new A.D(B.O3,new A.a5(1/0,w,A.dh(B.oJ,D.aWY,new C.fYC(t,this.c,d),A.bp(B.b2,w,w,w,B.c,w,w,w,new A.b9(A.l(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.P,0,B.p),w,w,w,B.Og,B.d8,w,new A.b9(v,B.a1),w)},
$S:47}
C.fYB.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fYC.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.tq(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fYP.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.a,s=this.b
return A.eP(w,B.as,new A.D(D.bD4,A.x(A.a([A.A(A.a([D.bIJ,A.aI(w,w,w,w,B.lq,w,w,w,new C.fYN(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.j,0,w,w),B.T,new A.en(A.bx(A.l(14),A.r(w,A.b2(w,w,w,new C.bcZ(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a5(1/0,w,A.dh(B.oJ,D.aWY,new C.fYO(t,s,d),A.bp(B.b2,w,w,w,B.c,w,w,w,new A.b9(A.l(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d8,w,new A.b9(v,B.a1),w)},
$S:47}
C.fYN.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fYO.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.ap$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.mg(2.5),$async$$0)
case 4:w=3
return A.b(e.hr(B.hl),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aB(p,0,32)
r=J.eT(B.dQ.gaU(s))
w=5
return A.b(A.tq(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fGG.prototype={
$1(d){return d.a===this.a},
$S:254}
C.dQk.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dQ5.prototype={
bnN(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.eg:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dQ8(s,q,e),p,!0,!0,!1,B.K1,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dQ9(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bnN(d,e)},
$S:1962}
C.dQ8.prototype={
$1(d){var w,v=null,u=this.c===B.x6,t=u?D.dsZ:D.doB
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.aS:B.as,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(O.am9,A.x(A.a([u,B.ax,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.bv:B.bo,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.ip(!0,v,v,B.y,D.fgx,new C.dQ7(this.a,w,t,d),t.length,v,B.dZ,B.ah,!0)],x.p),B.al,v,B.e,B.P,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:27}
C.dQ7.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.l(14)
if(q)w=B.cH.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.l(14)
if(q)u=B.cH
else u=(t.b.a.d.a?B.bv:B.bo).j(0.16)
u=A.L(u,B.r,q?1.6:1)
return A.aP(!1,p,!0,A.r(B.A,C.b_N(r,26),B.f,s,s,new A.p(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dQ6(t.d,r),s,s,s,s,s,s,s)},
$S:194}
C.dQ6.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dQ9.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dQ3.prototype={
$3(d,e,f){return B.bN},
$C:"$3",
$R:3,
$S:86}
C.dQ4.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cG(B.cx,e,v)
return new A.d1(e,!1,A.ig(B.A,A.at(A.aH(!1,B.a3,!0,v,new A.dY(new C.dQ2(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.aj),v,v,v),v,new A.bg(t,new A.br(0.96,1,u),u.k("bg<bP.T>"))),v)},
$S:33}
C.dQ2.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aF(d,B.c1,x.w).w,i=l.b,h=i.a.d.a,g=h?B.eg:B.c,f=A.l(14),e=A.L((h?B.bv:B.bo).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.l(8)
u=x.p
v=A.A(A.a([w,A.aP(!1,v,!0,new A.D(B.eB,A.X(B.cz,i.a.d.a?B.bv:B.bo,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dPO(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.j,0,k,k)
w=l.d
t=A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aVa("Name")
r=l.a
q=r.d==null?k:new C.dPP(r,l.e,a0)
p=A.l(20)
o=i.a.d.a?B.br:B.m7
n=A.L(B.cH.j(0.35),B.r,1)
m=r.d
t=A.aM(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bfa(new A.D(B.fC,A.aP(!1,p,!0,A.r(B.A,C.b_N(m==null?"\ud83d\udc64":A.fNc(r.e,m),18),B.f,k,k,new A.p(o,k,n,k,k,k,B.a6),k,34,k,B.cm,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.l3,k,B.aaP,k,k)
v=A.a([v,B.af,t,B.T,A.d("Gender (required)",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bv:B.bo,k,k,k,k,k,k,k,k,11.5,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.A(A.a([A.E(i.aVR("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dPQ(r,a0),r.d===B.x6),1),B.ae,A.E(i.aVR("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dPV(r,a0),r.d===B.a7w),1)],u),B.l,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.T,new A.bL(B.a7,k,k,A.ho(D.bZe,D.fXJ,new C.dPW(r,l.e,a0),A.fv(k,k,k,k,k,k,k,k,k,k,k,B.cH,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cg)),k)],u))
v.push(B.W)
t=A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uX(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aVb("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.eb,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.W)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.l(10)
p=A.l(10)
o=A.l(10)
n=A.L((t?B.bv:B.bo).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bv:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xn(r.a,!1)
v.push(A.aH(!1,B.a3,!0,q,A.aP(!1,p,!0,A.r(k,A.A(A.a([A.E(A.x(A.a([t,B.bG,A.d(m,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,14,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.j,0,B.p),1),D.bVU],u),B.l,k,B.e,B.j,0,k,k),B.f,k,k,new A.p(k,k,n,o,k,k,B.n),k,k,k,k,B.bg,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dPX(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.aj))
if(!h)B.d.v(v,A.a([B.T,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bv:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.W)
t=A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aVa("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bv:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b3j(r.b.length!==0,B.n1,new C.dPY(r,i,a0),new C.dPZ(r,a0),"Upload from gallery","ID photo"))
v.push(i.b3j(r.c.length!==0,D.bPg,new C.dQ_(r,i,d,a0),new C.dQ0(r,a0),"Camera or gallery","Selfie"))
v.push(B.T)
t=l.w
v.push(new Ap.a8N("Signature (optional)",t,new C.dQ1(a0),new C.dPR(a0,t),new C.dPS(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bv:B.bo
s=(i?B.bv:B.bo).j(0.28)
s=A.E(A.dU(E.aWR,new C.dPT(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.qD,k,new A.b9(A.l(10),B.a1),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cH,k,k,k,B.c,k,B.qD,k,new A.b9(A.l(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.ae,A.E(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vF,k,k,k),k,new C.dPU(r,w,d),t),1)],u),B.l,k,B.e,B.j,0,k,k))
return A.r(k,A.ce(A.x(v,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.p(g,k,e,f,k,k,B.n),k,k,k,B.t_,B.jq,k,k,360)},
$S:163}
C.dPO.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dPP.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dPQ.prototype={
$0(){return this.b.$1(new C.dPN(this.a))},
$S:0}
C.dPN.prototype={
$0(){var w=this.a
w.d=B.x6
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dPV.prototype={
$0(){return this.b.$1(new C.dPM(this.a))},
$S:0}
C.dPM.prototype={
$0(){var w=this.a
w.d=B.a7w
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dPW.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dPX.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xs(null,u.b,A.c2(2020,1,1,0,0,0,0,0),null,s,A.c2(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dPL(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPL.prototype={
$0(){var w=this.b
return this.a.a=A.c2(w.gcl(),w.gcg(),w.gcz(),0,0,0,0,0)},
$S:0}
C.dPY.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Q3(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dPK(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPK.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dPZ.prototype={
$0(){return this.b.$1(new C.dPJ(this.a))},
$S:0}
C.dPJ.prototype={
$0(){return this.a.b=""},
$S:0}
C.dQ_.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.eg:B.c
w=3
return A.b(A.bU(q,null,new C.dPH(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Q3(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dPI(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPH.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.ary,w,w,w,w,new C.dPB(d),!1,w,w,w,w,w,w,w,D.fNJ,w,w,w),A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.arw,w,w,w,w,new C.dPC(d),!1,w,w,w,w,w,w,w,D.fUQ,w,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),!0,!1,B.ag,!0,!0)},
$S:27}
C.dPB.prototype={
$0(){A.a6(this.a,!1).O("camera")
return null},
$S:0}
C.dPC.prototype={
$0(){A.a6(this.a,!1).O("gallery")
return null},
$S:0}
C.dPI.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dQ0.prototype={
$0(){return this.b.$1(new C.dPG(this.a))},
$S:0}
C.dPG.prototype={
$0(){return this.a.c=""},
$S:0}
C.dQ1.prototype={
$0(){return this.a.$1(new C.dPF())},
$S:0}
C.dPF.prototype={
$0(){},
$S:0}
C.dPR.prototype={
$0(){return this.a.$1(new C.dPE(this.b))},
$S:0}
C.dPE.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dPS.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aiU(u.a,null,null,new C.dPD(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPD.prototype={
$4(d,e,f,g){this.a.$1(new C.dPA(this.b,d))},
$S:460}
C.dPA.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dPT.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dPU.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.T(D.flE)
return}if(w.a.d==null){w.c.L(x.q).f.T(D.fiu)
return}A.a6(w.c,!1).O(!0)},
$S:0}
C.dQn.prototype={
$3(d,e,f){return B.bN},
$C:"$3",
$R:3,
$S:86}
C.dQo.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.eg:B.c,n=A.l(14),m=A.L((p?B.bv:B.bo).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.aS:B.as,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bs(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.bv:B.bo,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zL(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.m(r,r,w.zL(r).length>0?B.bD:B.cH,r,r,r,r,r,r,r,r,12,r,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bv:B.bo
t=(q?B.bv:B.bo).j(0.28)
s=x.p
return new A.d1(e,!1,A.at(A.aH(!1,B.a3,!0,r,A.r(r,A.x(A.a([p,B.T,v,u,B.aB,A.A(A.a([A.E(A.dU(B.o1,new C.dQl(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.k3,r,new A.b9(A.l(10),B.a1),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ae,A.E(A.bJ(D.fVg,r,new C.dQm(d),A.bp(B.cH,r,r,r,B.c,r,B.k3,r,new A.b9(A.l(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.j,0,r,r)],s),B.al,r,B.e,B.P,0,B.p),B.f,r,r,new A.p(o,r,m,n,r,r,B.n),r,r,r,B.Ct,B.GT,r,r,300),B.f,B.L,0,r,r,r,r,r,B.aj),r,r,r),r)},
$S:33}
C.dQl.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dQm.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dQh.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dQi(r),p=r.a.d.a,o=p?B.eg:B.c,n=A.l(14),m=A.L((p?B.bv:B.bo).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.m(s,s,r.a.d.a?B.aS:B.as,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Bs(l.c),s,s,s,s,s,s,D.fyP,s,s,s)],p),B.l,s,B.e,B.j,0,s,s)
w=A.iK((r.a.d.a?B.bv:B.bo).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a2k,"View receipt",new C.dQa(r,d,l))
u=l.x!=null
t=u?B.pB:B.qM
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bD1,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dQb(r,d,l)),q.$3$icon$label$onTap(B.CH,"Edit",new C.dQc(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.n1,"View / download ID",new C.dQd(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bPf,"View / download selfie",new C.dQe(r,d,l)))
if(l.gaHP())p.push(q.$3$icon$label$onTap(Ac.a3w,"View / download signature",new C.dQf(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bD,B.ej,"Delete",new C.dQg(r,d,l)))
p.push(B.ax)
return A.bm(!0,new A.D(B.uy,A.r(s,A.x(p,B.l,s,B.e,B.P,0,B.p),B.f,s,s,new A.p(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:27}
C.dQi.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.as
else w=d
return A.aP(!1,v,!0,new A.D(B.f_,A.A(A.a([A.X(e,w,v,v,v,20),B.bc,A.d(f,v,v,v,v,v,v,A.m(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1963}
C.dQa.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fYH(w,this.c)},
$S:0}
C.dQb.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.ST(this.c)},
$S:0}
C.dQc.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.DH(this.c)},
$S:0}
C.dQd.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bGd(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dQe.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bGd(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dQf.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fYM(w,this.c)},
$S:0}
C.dQg.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.Q2(0,this.c)},
$S:0}
C.dQp.prototype={
$1(d){return d.x==null},
$S:254}
C.dQq.prototype={
$1(d){return d.x!=null},
$S:254}
C.dQr.prototype={
$2(d,e){return d+e.c},
$S:1964}
C.dQs.prototype={
$0(){return this.a.bDM()},
$S:0}
C.dQj.prototype={
$0(){return this.a.agf(this.b)},
$S:0}
C.fHr.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fHs.prototype={
$0(){return B.d.gH(D.a4Q)},
$S:z+77}
C.dg0.prototype={
$0(){var w=this.a
return w.m(new C.dfZ(w,this.b))},
$S:0}
C.dfZ.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dg_.prototype={
$0(){},
$S:0}
C.dg1.prototype={
$0(){var w=this.a.gc2c()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.fJW.prototype={
$1(d){return C.hlL(A.a2(d,x.N,x.z))},
$S:z+11}
C.fJX.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fJY.prototype={
$2(d,e){var w=A.ca(d.a,null),v=A.ca(e.a,null)
if(w!=null&&v!=null)return B.o.aS(w,v)
return d.d.aS(0,e.d)},
$S:z+83}
C.fXi.prototype={
$1(d){return d.aj()},
$S:z+12}
C.h4P.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fGx.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bRp.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eH(e,v)?v:null},
$S:1965}
C.fXT.prototype={
$1(d){var w=this
return new C.a_G(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dgG.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dgF(w,d))},
$S:z+80}
C.dgF.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgu.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dgr.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dg2.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dg3.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dgv.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dgb.prototype={
$1(d){var w=null,v=A.Q(d).ax.a===B.J,u=v?B.eg:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.as,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.m(w,w,v?B.bv:B.bo,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eg(A.a([A.bO(!1,B.dr,w,w,!0,w,w,w,new C.dg9(d),w,w),A.bJ(B.xs,w,new C.dga(d),A.bp(B.nr,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dg9.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dga.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dgc.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.dgs.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dgt.prototype={
$0(){return B.d.gH(D.zR)},
$S:z+14}
C.dg7.prototype={
$1(d){var w=this.a,v=w.y,u=w.gz5(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.U4(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dg8.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgd.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_e(v,u,J.ad(w.d),null)},
$S:z+40}
C.dge.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgE.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.az(s,new C.ZW(r.y,r.gz5(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dgC(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bcl(v,e,w,u,t,r.gbUm(),C.hBu(r.y.Q),r.gz5(0),s)
w=t}return A.c5(q,new C.dgD(r,e),new A.D(B.a0t,w,s))},
$S:1966}
C.dgD.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd5(t).ay){t=this.b
u=x.cy.a(B.d.gd5(u.f.f)).gvp(0)
w=t-(u==null?t:u)}else w=0
v=B.i.D(w,-1,0)
u=A.dr()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fL(v*3.141592653589793*0.5)
return A.fz(B.a7,A.d3(e,B.i.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.dgC.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJ0(B.qv,B.iy)},
$S:0}
C.dgo.prototype={
$0(){var w=this.a
return w.m(new C.dgn(w))},
$S:0}
C.dgn.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dgp.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).O(null)
return null},
$S:0}
C.dg4.prototype={
$1(d){var w,v,u=null,t=A.l(26),s=E.kr.j(0.5),r=x.p,q=A.a([D.fMh,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cs(p.d)?"Write this book":"Write a new book"
q.push(p.ZP(d,B.ed,w,J.cs(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.ZP(d,K.apt,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cy,A.d("Your book is in English.",u,u,u,u,u,u,A.m(u,u,D.kO.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cy,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.m(u,u,D.kO.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.ZP(d,W.aqw,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.ZP(d,B.qR,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.ZP(d,B.qR,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eP(u,E.BW,A.bm(!0,new A.D(Ab.yP,A.x(q,B.E,u,B.e,B.P,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,I.a0D,B.d8,u,new A.b9(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:47}
C.dgq.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dgh.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.a_I(v,J.cJ(w.d),w.r+1,null)},
$S:z+44}
C.dgi.prototype={
$1(d){var w=null
return A.oO(!1,A.eg(w,w,w,E.BW,new A.k4(this.a,new C.dgg(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:326}
C.dgg.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aau,B.p_,A.E(A.d(e,w,w,w,w,w,w,B.jy,w,w,w),1)],x.p),B.l,w,B.e,B.j,0,w,w)},
$S:752}
C.dgj.prototype={
$0(){return this.a.a=!1},
$S:50}
C.dgk.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:204}
C.dgl.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgm.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.BB(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.SH(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dgf(s,t))
w=4
return A.b(s.lh(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dgf.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgx.prototype={
$1(d){var w=null
return A.oO(!1,A.eg(w,w,w,E.BW,new A.k4(this.a,new C.dgw(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:326}
C.dgw.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aau,B.p_,A.E(A.d(e,w,w,w,w,w,w,B.jy,w,w,w),1)],x.p),B.l,w,B.e,B.j,0,w,w)},
$S:752}
C.dgy.prototype={
$0(){return this.a.a=!1},
$S:50}
C.dgz.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:204}
C.dgA.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:204}
C.dgB.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.BB(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lh(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dg5.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bkK(B.qv,A4.NS)},
$S:0}
C.dg6.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJ0(B.qv,A4.NS)},
$S:0}
C.dis.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dit.prototype={
$1(d){var w=this.a
return w.m(new C.dir(w))},
$S:9}
C.dir.prototype={
$0(){return this.a.e="page"},
$S:0}
C.diu.prototype={
$1(d){var w=this.a
return w.m(new C.diq(w))},
$S:9}
C.diq.prototype={
$0(){return this.a.e="book"},
$S:0}
C.div.prototype={
$1(d){var w=this.a
return w.m(new C.dip(w))},
$S:9}
C.dip.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.diw.prototype={
$0(){var w=this.a
return w.m(new C.dio(w,this.b))},
$S:0}
C.dio.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.dix.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2C()
A.a6(this.b,!1).O(new A.brf(w,v))},
$S:0}
C.dgV.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dgU.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_E(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dgZ.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dgY.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.baK(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hn,v,v,v)
return A.eg(A.a([A.bO(!1,B.dr,v,v,!0,v,v,v,new C.dgW(d),v,v),A.bJ(B.xs,v,new C.dgX(d),A.bp(B.nr,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.BW,w,v,v,v,v,D.fL3,v)},
$S:18}
C.dgW.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dgX.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dh_.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dh0.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.ce(A.bW(B.bH,r,B.bs,t,18,14),B.t,t,B.y,t,D.bE_,t,t,B.ah)},
$S:325}
C.dgT.prototype={
$0(){return this.a.QQ(0,this.b)},
$S:0}
C.dgS.prototype={
$0(){return this.a.Qh(0,this.b)},
$S:0}
C.cPe.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cPf.prototype={
$0(){return B.d.gH(D.zR)},
$S:z+14}
C.cPg.prototype={
$4(d,e,f,g){var w=null,v=A.l(e)
return A.bS(0,new A.D(d,new A.bN(new A.p(w,w,A.L(this.a.j(f),B.r,g),v,w,w,B.n),B.bi,w,w),w),0,0,0)},
$S:1968}
C.d7S.prototype={
$1(d){return this.a.m(new C.d7R(this.b,this.c))},
$S:9}
C.d7R.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d8g.prototype={
$1(d){return this.a.m(new C.d83())},
$S:2}
C.d83.prototype={
$0(){},
$S:0}
C.d8h.prototype={
$1(d){return this.a.m(new C.d82())},
$S:2}
C.d82.prototype={
$0(){},
$S:0}
C.d8i.prototype={
$0(){var w=this.a
return w.m(new C.d81(w,this.b))},
$S:0}
C.d81.prototype={
$0(){var w=this.a
return w.d=w.gor().Gf(this.b.a)},
$S:0}
C.d8j.prototype={
$0(){var w=this.a
return w.m(new C.d80(w,this.b))},
$S:0}
C.d80.prototype={
$0(){var w=this.a
return w.d=w.gor().cNy(this.b)},
$S:0}
C.d8k.prototype={
$1(d){return this.a.m(new C.d8_())},
$S:2}
C.d8_.prototype={
$0(){},
$S:0}
C.d8l.prototype={
$0(){var w=this.a
return w.m(new C.d7Z(w,this.b))},
$S:0}
C.d7Z.prototype={
$0(){var w=this.a
return w.d=w.gor().cND(this.b.a)},
$S:0}
C.d8m.prototype={
$1(d){var w=this.a
return w.m(new C.d8b(w,d))},
$S:6}
C.d8b.prototype={
$0(){var w=this.a
return w.d=w.gor().cOx(this.b)},
$S:0}
C.d8n.prototype={
$1(d){var w=this.a
return w.d=w.gor().aFX(d)},
$S:2}
C.d8o.prototype={
$1(d){var w=this.a
return w.d=w.gor().cNG(d)},
$S:2}
C.d8q.prototype={
$1(d){var w=this.a
return w.d=w.gor().cOv(d)},
$S:2}
C.d8r.prototype={
$1(d){var w=this.a
return w.m(new C.d8a(w,d))},
$S:9}
C.d8a.prototype={
$0(){var w=this.a
return w.d=w.gor().cOm(this.b)},
$S:0}
C.d8s.prototype={
$0(){var w=this.a,v=w.gor(),u=B.a.i(w.gz5(0).a.a),t=B.a.i(w.gaD9().a.a)
u=v.bfr(B.a.i(w.gasM().a.a),t,u)
A.a6(this.b,!1).O(u)
return null},
$S:0}
C.bRz.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bRt.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bRs(w,d))},
$S:11}
C.bRs.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bRC.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bRu.prototype={
$0(){var w=this.a
w.Q=D.b16
w.adU(1)
w.r.x=null},
$S:0}
C.bRv.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b16)return
w=new A.e5()
w.d_(u.as*13+u.a.e)
v=u.r
v.Q=3+w.az(3)
v.z=D.d3T[w.az(6)]
v.as=u.f.a+2.6},
$S:0}
C.bRy.prototype={
$0(){var w=this.a
w.Q=D.ad5
w.adU(2)
w.r.z=null},
$S:0}
C.bRx.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hCu
t.adU(3)
w=t.r
w.d=s
w.x="I say: "+t.gCx()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.az(3)
w.z=s?D.dan[v.az(4)]:D.dvu[v.az(3)]
w.as=t.a+2.8},
$S:0}
C.bRA.prototype={
$0(){var w=this.a
w.Q=D.b17
w.CW=this.b
w.cy=1
w.adU(4)
w.r.f=w.f.a+5},
$S:0}
C.bRB.prototype={
$0(){},
$S:0}
C.bRw.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bRq.prototype={
$0(){return this.a.L5(this.b)},
$S:0}
C.bRr.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bT5.prototype={
$0(){var w=this
return w.a.R9(w.b,0,w.c,w.d)},
$S:0}
C.bT6.prototype={
$0(){var w=this
return w.a.R9(w.b,3,w.c,w.d)},
$S:0}
C.bT7.prototype={
$0(){var w=this
return w.a.R9(w.b,1,w.c,w.d)},
$S:0}
C.bT8.prototype={
$0(){var w=this
return w.a.bTN(w.b,w.c,w.d)},
$S:0}
C.bT9.prototype={
$0(){var w=this
return w.a.R9(w.b,4,w.c,w.d)},
$S:0}
C.bTa.prototype={
$0(){var w=this
return w.a.R9(w.b,2,w.c,w.d)},
$S:0}
C.bTb.prototype={
$0(){var w=this
return w.a.R9(w.b,5,w.c,w.d)},
$S:0}
C.bTc.prototype={
$2(d,e){return B.i.aS(d.a,e.a)},
$S:753}
C.bT4.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a6_[d],p=q.a.a2(0,new A.o(0,-q.b*1.2*124)),o=A.fq(r,B.ct,r,3,r,A.cQ(r,r,r,r,r,r,r,r,r,D.fpJ,e),B.a5,B.bX,r,B.dB,B.bY)
o.o8(130)
w=o.b.a.c
w=p.aK(0,new A.o(0,w.gba(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bn(A.bs(w,v.gba(v)+12,u+18),B.i6)
u=this.a
v=t.eQ(B.dI)
w=$.R()
s=A.K()
s.r=B.dv.gp(0)
u.am(v,s)
s=A.K()
s.r=D.qm.gp(0)
u.am(t,s)
w=new A.aG(w.r,B.ai,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bu())
v=A.K()
v.r=D.qm.gp(0)
u.af(w,v)
o.a5(u,new A.o(t.a+9,t.b+6))},
$S:754}
C.bRQ.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.bRR.prototype={
$2(d,e){var w=this.a,v=B.o.aS(w.amz(d),w.amz(e))
if(v!==0)return v
return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.fuy.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h4G.prototype={
$2(d,e){if(e!=null)J.c7(this.a.c3(0,d,new C.h4H()),e)},
$S:z+66}
C.h4H.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.h4I.prototype={
$1(d){return d!==this.a},
$S:3}
C.h4J.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h4K.prototype={
$1(d){return d!==this.a&&!B.d.aV(this.b,new C.h4F(this.c,d))},
$S:3}
C.h4F.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h4L.prototype={
$1(d){return d!==this.a},
$S:3}
C.h4M.prototype={
$1(d){return d!==this.a},
$S:3}
C.h4N.prototype={
$1(d){return d!==this.a&&!B.d.aV(this.b,new C.h4E(this.c,d))},
$S:3}
C.h4E.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fI2.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fWj.prototype={
$1(d){return d.Q},
$S:z+15}
C.fWk.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fDT.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fKR.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bMD.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h55.prototype={
$2(d,e){return B.o.aS(C.hxO(d),C.hxO(e))},
$S:210}
C.h56.prototype={
$1(d){return d!==this.a},
$S:3}
C.fWP.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bKN.prototype={
$0(){var w=this.a
w.ch=!0
w.b8Z()},
$S:0}
C.bKI.prototype={
$0(){},
$S:0}
C.bKO.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bKG.prototype={
$0(){},
$S:0}
C.bKH.prototype={
$0(){},
$S:0}
C.bKM.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b2(u,u,u,new C.bd0(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.l(14)
s.push(A.ap(u,A.r(u,A.d(t.dy,u,u,u,u,u,u,D.fxo,B.K,u,u),B.f,u,u,new A.p(w,u,u,v,u,u,B.n),u,u,u,u,B.bV,u,u,u),u,u,14,14,6,u))}return A.az(B.c4,new A.an(B.a0,u,B.ac,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bKJ(t,e),u,u,u,u,u,u,u,new C.bKK(t,e),u,u,u,u,u,u,u,u,u,new C.bKL(t,e),u,u,u,u,!1,B.a4)},
$S:37}
C.bKJ.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bKL.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:22}
C.bKK.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bKF.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.cqh.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cqi.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cqg(w))},
$S:0}
C.cqg.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cqj.prototype={
$0(){var w=this,v=w.a
v.gj1()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cqk.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cql.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cqm.prototype={
$0(){},
$S:0}
C.cqn.prototype={
$0(){var w=this.a
w.z=w.Xl(++w.e)
w.Q=A.c0(w.gkS()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cqd.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.cqe.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj1().length,e=i/2,d=new C.cqf(i,f,h),a0=g.as,a1=A.a4(a0).k("b7<2>")
a0=A.C(new A.b7(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.c5(new A.h7(a0),new C.cq8(g,new A.o(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj1().length!==0&&!B.d.q(g.gj1(),-1)
v=x.p
e=A.a([a0,A.ap(j,new C.QM(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cK(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.MX(new C.cq9(g,u),new C.cqa(g,u),new C.cqb(g,u),j,j,new A.bC("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ap(j,A.d(a1,j,j,j,j,j,j,A.m(j,j,B.a.q(a1,"not a child")?B.fi:B.b5,j,j,j,j,j,j,j,j,13,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj1().length!==0&&!B.d.q(g.gj1(),-1)){a0=g.e+1>=g.gkS().length?"See my result":"Next family"
g=A.at(C.ux(a0,g.gqn(g),B.cP,B.jI,D.fA),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.Xl(0):s).length))break
if(!B.d.q(g.gj1(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.Xl(0)
o=s}else o=s
n=s[u]
n=A.e1(B.A,new C.QM(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.Xl(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.r6(new A.br(0,p,t),new C.cqc(),new S.Ep(u,j,new C.QM(l.b,k,62,!1,j),new A.kH(0.25,new C.QM(m.b,k,62,!1,j),j),new A.kb(n,B.aj,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.H,S.hBm(),!0,!0,j,j,j,j,j,j,!1,B.iR,j,new A.bC("chip-"+r,a0),w),B.b0,B.iP,j,new A.bC("t"+r+"-"+q,a0),v))}++u}g=A.bW(B.fU,a1,B.bs,j,6,8)}e.push(A.ap(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ac,B.t,e,j)},
$S:66}
C.cqf.prototype={
$1(d){return new A.o(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:741}
C.cq8.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gj1().length!==0&&!B.d.q(t.gj1(),-1)
return A.b2(p,p,p,new C.bcu(q.b,o,v,w,p),B.az)},
$S:55}
C.cqa.prototype={
$1(d){return this.a.gj1()[this.b]===-1},
$S:z+30}
C.cqb.prototype={
$1(d){return this.a.cRp(this.b,d.a)},
$S:z+31}
C.cq9.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj1()[t]!==-1,r=A.l(18),q=e.length!==0?B.cP.j(0.3):B.L
if(s)w=v
else w=A.L(e.length!==0?B.cP:B.k_,B.r,2)
u=s?A.lB(new C.cq7(),A.at(new C.QM(u.gaFp()[u.gj1()[t]].b,u.gaFp()[u.gj1()[t]].a,62,!1,v),v,v,v),B.l9,B.iP,v,v,new A.br(0.3,1,x.X),x.i):D.bce
return A.cT(v,u,v,v,B.b0,new A.p(q,v,w,r,v,v,B.n),B.a3,v,100,v,v,v,v,v,88)},
$S:1971}
C.cq7.prototype={
$3(d,e,f){return A.e1(B.A,f,e,null,null)},
$S:112}
C.cqc.prototype={
$3(d,e,f){return A.dN(f,new A.o(Math.sin(e*24)*8*(1-e),0))},
$S:112}
C.cQi.prototype={
$1(d){return d>=1},
$S:119}
C.cFf.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkS()[w.e].d.length)w.m(new C.cFe(w))},
$S:11}
C.cFe.prototype={
$0(){return this.a.f++},
$S:0}
C.cFn.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cFo.prototype={
$0(){var w=this.a,v=this.b
w.z.J(0,v)
w.Q=v},
$S:0}
C.cFp.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cFm(w))},
$S:0}
C.cFm.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cFq.prototype={
$0(){return this.a.f++},
$S:0}
C.cFr.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cFs.prototype={
$0(){},
$S:0}
C.cFt.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cFh.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.cFi.prototype={
$3(d,e,f){var w=null
return A.lB(new C.cFg(this.a,e),w,B.b0,B.hI,w,w,new A.br(w,this.b,x.X),x.i)},
$S:1972}
C.cFg.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cP.j(u.as?0.6:0.15)
t=A.a([new A.ac(0,B.G,t,B.H,u.as?40:18)],x.V)
w=this.b
return A.r(v,A.hV(new A.BJ(new A.uS(B.w.j(e),B.LR,v,B.Yc),H.bXh(A.b2(v,v,v,new C.aBB(u.gkS()[u.e].c,u.as,v),B.az),new A.Eu(w,w,B.W6)),v),B.aq),B.f,v,v,new A.p(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:1973}
C.cFj.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.o(0,14*(1-e))),e)},
$S:101}
C.cFk.prototype={
$3(d,e,f){return A.dN(f,new A.o(Math.sin(e*22)*8*(1-e),0))},
$S:112}
C.cFl.prototype={
$0(){return this.a.bq3(this.b)},
$S:0}
C.f76.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.an5$)
v.an5$=w
v.q9$.sp(0,w)
v.aqY(u)},
$S:7}
C.fhg.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:11}
C.bSB.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bSA())},
$S:0}
C.bSA.prototype={
$0(){},
$S:0}
C.bSy.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bSw.prototype={
$0(){},
$S:0}
C.bSx.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMM()
w=s+1>=r.length?3:5
break
case 3:q=C.bGt(p.gapO(0),0,r.length)
p.m(new C.bSt(p,q))
o=p
w=6
return A.b(C.BU(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BV(s.d,s.c.a,"school",p.gapO(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bSu())
w=4
break
case 5:p.m(new C.bSv(p))
p.gqv().VV(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bSt.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bSu.prototype={
$0(){},
$S:0}
C.bSv.prototype={
$0(){return this.a.x++},
$S:0}
C.bSz.prototype={
$0(){return this.a.L5(this.b)},
$S:0}
C.bSs.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.f77.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.o(t,s),q=v.b,p=v.d,o=p?C.hBA(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.Eg
C.SF(q,D.enN,0,0.2,-0.6,-0.2,null,w,D.emw,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a2(0,new A.o(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.R()
p=A.K()
p.r=D.Gg.gp(0)
p.c=3
p.d=B.bu
q.ah(new A.o(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f78.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.SF(this.a,D.emT,0,u,0.7,-0.5,null,null,D.JC,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f79.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.SF(this.a,D.eoy,0,0,0.8,-0.5,null,null,D.JC,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f7a.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.SF(w.b,D.enH,0,v,-0.8,-0.5,null,null,D.JC,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f7b.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.o(34,-122+Math.sin(w*5)*5)
else v=v?D.enL:D.Eg
C.SF(p,D.enc,0,t,0,-0.6,null,v,D.JC,3,0,s,1.3,u,0,w,0)
q=q.cc4(new A.o(222,455),9)
$.R()
w=A.K()
w.r=B.cP.gp(0)
p.af(q,w)},
$S:0}
C.f7c.prototype={
$2(d,e){return B.i.aS(d.a,e.a)},
$S:753}
C.bSe.prototype={
$2(d,e){return d+e},
$S:62}
C.bSp.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bSq.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bSr.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj1()[u.b]=s
t.gj1()[u.d]=t.y
w=t.as
v=t.q9$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bSl.prototype={
$1(d){return d},
$S:96}
C.bSk.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.q9$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bSm.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bSn.prototype={
$0(){},
$S:0}
C.bSo.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FJ(++s.f)
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
C.bSg.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.bSh.prototype={
$2(d,e){var w=this.a
w=w.gkS()[w.f].e
return B.o.aS(w[d],w[e])},
$S:62}
C.bSi.prototype={
$2(d,e){var w=null,v=C.hcV(new A.av(A.aS(1/0,e.a,e.b),A.aS(1/0,e.c,e.d))),u=this.a
return A.az(B.c4,new A.en(A.b2(w,w,w,new C.bjF(u,u.q9$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bSf(u,v),w,w,w,w,!1,B.a4)},
$S:37}
C.bSf.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj1().length
u=B.o.D(B.i.bh((t.a-s.a)/r/450*v),0,v-1)
w.d1d(w.gj1()[u])}},
$S:22}
C.bSj.prototype={
$1(d){var w=this.a
return w.gkS()[w.f].d[d]},
$S:77}
C.drD.prototype={
$2(d,e){return 0},
$S:62}
C.bS0.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bS_())},
$S:0}
C.bS_.prototype={
$0(){},
$S:0}
C.bRZ.prototype={
$0(){},
$S:0}
C.bRT.prototype={
$0(){},
$S:0}
C.bRU.prototype={
$0(){},
$S:0}
C.bRY.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.Bc},
$S:0}
C.bRX.prototype={
$1(d){var w=null,v=this.a.gqv(),u=A.d(d,w,w,w,w,w,w,D.aVp,w,w,w),t=v.gbmv(0)
return A.az(B.c4,A.x(A.a([u,B.bG,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aVD,w,w,w)],x.p),B.E,w,B.e,B.j,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbsq(v),w,w,w,w,w,w,!1,B.a4)},
$S:140}
C.bRV.prototype={
$0(){return this.a.L5(this.b)},
$S:0}
C.bRW.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bRS.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.e1L.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e1M.prototype={
$1(d){return this.a},
$S:39}
C.e1N.prototype={
$0(){var w=this.a
return w.d=w.gSU().beV(this.b)},
$S:0}
C.e1J.prototype={
$1(d){return new C.U5(this.a,null)},
$S:z+32}
C.e1K.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e1I.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hn,w,w,w)
return A.eg(A.a([A.bO(!1,E.aX0,w,w,!0,w,w,w,new C.e1G(d),w,w),A.bO(!1,D.fSF,w,w,!0,w,w,w,new C.e1H(d),w,w)],x.p),w,w,D.fA,v,w,w,w,w,D.fFb,w)},
$S:18}
C.e1G.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e1H.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e1F.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.T(A.b3(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e1O.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:14}
C.e1P.prototype={
$0(){var w=this.a,v=this.b,u=C.bEd(v,10,w.r,!1)
return w.uA(C.hlM(w.a.d,"kahoot",u,w.gb6w(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e1Q.prototype={
$0(){var w=this.a
return w.uA(new C.am1(this.b,w.a.d,w.r,null))},
$S:0}
C.e1R.prototype={
$0(){var w=this.a
return w.uA(new C.ake(this.b,w.a.d,w.r,null))},
$S:0}
C.e1U.prototype={
$0(){var w=this.a
return w.uA(new C.auU(this.b,w.a.d,w.r,null))},
$S:0}
C.e1V.prototype={
$0(){var w=this.a
return w.uA(new C.ayR(this.b,w.a.d,w.r,null))},
$S:0}
C.e1W.prototype={
$0(){var w=this.a
return w.uA(new C.am4(this.b,w.a.d,w.r,null))},
$S:0}
C.e1X.prototype={
$0(){var w=this.a
return w.uA(new C.am8(this.b,w.a.d,w.r,null))},
$S:0}
C.e1Y.prototype={
$0(){var w=this.a
return w.uA(new C.ama(this.b,w.a.d,w.r,null))},
$S:0}
C.e1Z.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d1y()
return v.uA(C.hlM(v.a.d,"creator_"+u.a,w,v.gb6w(),"A game by the family",t,this.c.a))},
$S:0}
C.e2_.prototype={
$0(){return this.a.OP(this.b)},
$S:0}
C.e20.prototype={
$0(){return this.a.XN(0,this.b)},
$S:0}
C.e1S.prototype={
$0(){return this.a.OP(null)},
$S:0}
C.e1T.prototype={
$0(){return this.a.L(x.q).f.T(D.fiA)},
$S:0}
C.bSc.prototype={
$0(){var w=this.a
w.d=D.b0v
w.z=3},
$S:0}
C.bSd.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aPR()}else w.m(new C.bSb(w))},
$S:11}
C.bSb.prototype={
$0(){return this.a.z--},
$S:0}
C.bS2.prototype={
$0(){var w=this.a
w.d=D.acM
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bS3.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bS1(w))
if(w.as<=0){d.a1(0)
w.b6s(-1)}},
$S:11}
C.bS1.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bS8.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.WM},
$S:0}
C.bS9.prototype={
$0(){return this.a.e++},
$S:0}
C.bS5.prototype={
$0(){var w=this.a
w.d=D.b0w
w.ay=this.b},
$S:0}
C.bS6.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bSa.prototype={
$2(d,e){return B.o.aS(e.b,d.b)},
$S:1974}
C.bS7.prototype={
$0(){return this.a.L5(this.b)},
$S:0}
C.bS4.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bRD.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.aw()
s=A.a([new A.au(new A.ba(s,B.b6,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.J)(t),++v){u=t[v]
s.push(new A.au(new A.ba(u,B.b6,B.aP),r))}return s},
$S:1975}
C.bRE.prototype={
$0(){return this.a.gD7().c.push(C.h6J(null,0,20,""))},
$S:0}
C.bRO.prototype={
$1(d){var w=null
return A.bt(w,new A.b6(4,A.l(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dn,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.VF,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:258}
C.bRN.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gD7().c,m=this.b,l=n[m],k=o.cf6(l),j=B.c.j(0.06),i=A.l(18),h=A.L(B.aT,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.KS,p,p,p),B.b3],g)
if(n.length>1)f.push(A.aI(p,p,p,p,B.arj,p,p,p,new C.bRI(o,m),p,p,p,p,p,p))
n=J.a7(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.j,0,p,p),A.aM(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bRJ(l),p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.di,!0,B.a5,p,B.ao,p,p,p,p),B.T],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aDf[v]
t=D.aCV[v]
s=v+1
f.push(new A.D(B.eO,new A.c8(B.aL,B.e,B.j,B.l,p,B.p,p,0,A.a([A.d(u,p,p,p,p,p,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.ae,new A.bz(1,B.bb,A.aM(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bRK(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.di,!0,B.a5,p,B.ao,p,p,p,p),p),new At.Pp(v,l.c,new C.bRL(o,l),p,!1,D.lD,p,p,p,p,p,!1,!1,p,I.b0V,p,p,p,p,p,w)],g),p),p))}f.push(D.fKJ)
f.push(B.am)
n=A.a([D.fEh,B.ae],g)
for(r=0;r<3;++r){q=D.ce5[r]
n.push(new A.D(B.fC,A.jx(p,p,p,A.d(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bRM(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.j,0,p,p))
return A.r(p,A.x(f,B.E,p,B.e,B.j,0,B.p),B.f,p,p,new A.p(j,p,h,i,p,p,B.n),p,p,p,B.kw,B.bg,p,p,p)},
$S:155}
C.bRI.prototype={
$0(){var w=this.a
return w.m(new C.bRH(w,this.b))},
$S:0}
C.bRH.prototype={
$0(){return B.d.cH(this.a.gD7().c,this.b)},
$S:0}
C.bRJ.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bRK.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bRL.prototype={
$1(d){return this.a.m(new C.bRG(this.b,d))},
$S:150}
C.bRG.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bRM.prototype={
$1(d){return this.a.m(new C.bRF(this.b,this.c))},
$S:9}
C.bRF.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3q.prototype={
$0(){var w=this.a
w.ww()
w.a.bv()
w.a.qo()},
$S:0}
C.e3p.prototype={
$0(){var w=this.a
w.ww()
w.a.bv()
w.a.qo()},
$S:0}
C.e3s.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.cs(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e3t.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3u.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e3o.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e3r.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e3w.prototype={
$0(){this.a.Pa()
return null},
$S:0}
C.e3v.prototype={
$0(){return this.a.F3(this.b)},
$S:0}
C.e2R.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bO(!1,B.dr,w,w,!0,w,w,w,new C.e2P(d),w,w),r=A.bp(B.bR,w,w,w,w,w,w,w,w,w,w,w)
return A.eg(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e2Q(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e2P.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e2Q.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e2S.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cO1(this.b)},
$S:0}
C.e2M.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aVr(w.b,w.c,w.d)},
$S:7}
C.e2d.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e2e.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2v.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Ho(t.a.c),$async$$0)
case 2:s=r.nA(q.dI(e,new C.e2t(t)))
if(s!=null&&t.c!=null)t.m(new C.e2u(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e2t.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e2u.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2w.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e2x.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2L.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cOO(C.hBK(w),w)},
$S:0}
C.e2s.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.Wq(u,w,C.aR_(u,w),new C.e2r(v),null)},
$S:z+37}
C.e2r.prototype={
$1(d){return this.bnU(d)},
bnU(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e2q(s,d))
w=3
return A.b(s.uw(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:484}
C.e2q.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.beV(this.b)},
$S:0}
C.e2I.prototype={
$1(d){return d.as},
$S:z+1}
C.e2J.prototype={
$1(d){var w=this
return new A.dY(new C.e2H(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e2H.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.eg:B.c,h=A.l(26),g=A.L(B.bR.j(0.5),B.r,1.5),f=A.r(k,D.bU7,B.f,k,k,new A.p(B.bR.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.as,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.m(k,k,j?B.bv:B.bo,k,k,k,k,k,k,k,k,12.5,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.j,0,B.p),1)
f=A.A(A.a([f,B.bc,a0,A.aI(k,k,k,k,A.X(B.cz,j?B.bv:B.bo,k,k,k,k),k,k,k,new C.e2B(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.j,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.m(k,k,j?B.bv:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.J)(v),++s){r=v[s]
q=t.a===r?B.bR:B.bR.j(0.1)
p=new A.aN(20,20)
o=t.a===r
n=new A.ay(B.bR,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bR
a0.push(A.az(k,A.cT(k,A.d(m,k,k,k,k,k,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b0,new A.p(q,k,new A.bH(n,n,n,n),new A.be(p,p,p,p),k,k,B.n),B.h5,k,k,k,k,B.Cl,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e2C(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bW(B.bH,a0,B.bs,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c59,new A.D(D.bEp,f,k),new A.D(D.bEg,e,k),new A.D(B.t_,a0,k),new A.D(W.amB,A.d(v,k,k,k,k,k,k,A.m(k,k,j?B.bv:B.bo,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(Aj.apd,j?B.bv:B.bo,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bEi,A.A(A.a([a0,B.au,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.as,k,k,k,k,k,k,k,k,k,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.b98(k,B.bR,k,k,!1,B.y,k,k,k,k,k,k,new C.e2D(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.j,0,k,k),k))}f.push(B.aB)
j=A.l(20)
e=A.a([new A.ac(0,B.G,B.aE.j(0.35),B.iD,12)],x.V)
f.push(A.az(k,A.r(k,A.A(A.a([D.fEC,B.bc,D.bIG,D.bUN],w),B.l,k,B.e,B.j,0,k,k),B.f,k,k,new A.p(k,k,k,j,e,D.c8O,B.n),k,k,k,B.i_,B.bI,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e2E(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.yR,A.A(A.a([A.E(A.dU(B.dr,new C.e2F(a1),k),1),B.au,A.E(A.bJ(M.aXs,k,new C.e2G(t,a1),A.bp(B.bR,k,k,k,k,k,B.cq,k,k,k,k,k)),1)],w),B.l,k,B.e,B.j,0,k,k),k))
return A.bm(!0,A.r(k,A.ce(A.x(f,B.E,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.aq,k,k,new A.p(i,k,g,h,k,k,B.n),k,k,k,B.yG,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:89}
C.e2B.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e2C.prototype={
$0(){return this.b.$1(new C.e2A(this.a,this.c))},
$S:0}
C.e2A.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e2D.prototype={
$1(d){var w=this.a
w.m(new C.e2y(w,d))
this.b.$1(new C.e2z())},
$S:9}
C.e2y.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e2z.prototype={
$0(){},
$S:0}
C.e2E.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(new A.aHD(!0,w))
return null},
$S:0}
C.e2F.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e2G.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(new A.aHD(!1,w))
return null},
$S:0}
C.e2K.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cOC(this.b.b)
w.r.a8(0)},
$S:0}
C.e21.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aj2(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hv2(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e22.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aFU(w)},
$S:0}
C.e2U.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aer(this.b,w,this.c,null)},
$S:z+39}
C.e2O.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.eg:B.c,t=A.l(20),s=A.X(B.lP,B.aW,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.as,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.m(w,w,v?B.bv:B.bo,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.af,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.m(w,w,v?B.bv:B.bo,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.P,0,B.p)
return A.eg(A.a([A.bJ(D.fWt,w,new C.e2N(d),A.bp(B.aW,w,w,w,w,w,w,w,w,w,w,w))],o),B.ba,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e2N.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e23.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e24.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e25.prototype={
$1(d){return d.a},
$S:z+8}
C.e26.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.J)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hW(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aFU(w)},
$S:0}
C.e2a.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aj2(q)
w=A.U(q).k("Y<1>")
q=A.C(new A.Y(q,new C.e28(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hv2(v.e,null,r,v.f,v.r,new C.e29(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e29.prototype={
$0(){return this.a.ab4(this.b)},
$S:0}
C.e28.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e2b.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("N<1,hW>")
w=A.C(new A.N(w,new C.e27(this.b),v),v.k("ak.E"))
u.d=t.aFU(w)},
$S:0}
C.e27.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e2T.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e2n.prototype={
$1(d){return d.length!==0},
$S:3}
C.e2o.prototype={
$1(d){var w=this
return new A.dY(new C.e2m(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e2m.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.eg:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.m(v,v,t?B.aS:B.as,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.m(v,v,t?B.bv:B.bo,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.m(v,v,t?B.bv:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.N(o,new C.e2i(u,e,o),A.U(o).k("N<1,v>")))
p.push(B.T)
u=w.d
p.push(A.aM(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.l(12),B.dt),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mA,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.P,0,B.p)
t=w.a
return A.eg(A.a([A.bO(!1,B.dr,v,v,!0,v,v,v,new C.e2j(d),v,v),A.bJ(B.L2,v,new C.e2k(t,u,o,e),A.bp(B.bR,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.fJ5,v,new C.e2l(t,u,o,d),A.bp(B.aW,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:205}
C.e2i.prototype={
$1(d){var w=null
return A.dG(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.m(w,w,this.a.a?B.aS:B.as,w,w,w,w,w,w,w,w,w,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aI(w,w,w,w,D.c1Z,w,w,w,new C.e2h(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1976}
C.e2h.prototype={
$0(){return this.a.$1(new C.e2f(this.b,this.c))},
$S:0}
C.e2f.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e2j.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e2k.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e2g(w.c,u))
v.bP(0,B.cf)}},
$S:0}
C.e2g.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e2l.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).O(!0)},
$S:0}
C.e2p.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cPg(this.b,D.uE,C.Hm(v,w.a.c))},
$S:0}
C.e30.prototype={
$1(d){return d.as},
$S:z+1}
C.e31.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j1(this.b,w)},
$S:0}
C.e32.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.ist(v)
return w.WB(v==null?null:v.a)},
$S:0}
C.e33.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.i36(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aS(1/0,e.a,e.b)
s=A.aS(1/0,e.c,e.d)
l.cwu(new A.av(u,t),v.gblB(),new A.av(k,s))}k=A.l(22)
s=this.b.a
r=s?D.d1J:D.d_X
q=A.L(s?B.dn:D.bjY,B.r,1)
p=A.l(22)
o=A.bS(0,A.b2(m,m,m,new C.bfM(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.r(m,A.bx(p,new A.an(B.a0,m,B.ac,B.t,A.a([o,A.bS(0,A.v2(new A.S(n,n,n,n),new A.a5(u,t,new C.bgH(l.d,v,l.f,w,new C.e2X(l),l.gcgi(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ap(10,new C.byx(s,new C.e2Y(l,e),new C.e2Z(l,e),new C.e3_(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.p(m,m,q,k,m,new A.a8(B.b4,B.b8,B.x,r,m,m),B.n),m,m,m,Z.alH,m,m,m,m)},
$S:161}
C.e2X.prototype={
$1(d){var w=this.a
w.m(new C.e2V(w,d))},
$S:2}
C.e2V.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.J(0,v)},
$S:0}
C.e2Y.prototype={
$0(){var w=this.b
return this.a.bd4(1.25,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e2Z.prototype={
$0(){var w=this.b
return this.a.bd4(0.8,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e3_.prototype={
$0(){var w=this,v=w.b
return w.a.aVr(new A.av(A.aS(1/0,v.a,v.b),A.aS(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gblB())},
$S:0}
C.e34.prototype={
$0(){var w=this.a
return w.m(new C.e2W(w))},
$S:0}
C.e2W.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e2c.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fF(new A.fx(s.c)),$async$$0)
case 2:t.yy("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dh4.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ap(w,new C.bkw(u,C.hG4(v.c,u),new C.dh3(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dh3.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dh5.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ap(w,new C.bnS(d.d,d.c,u.f.q(0,d.a),new C.dh2(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dh2.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fHv.prototype={
$1(d){var w,v=d.e
if(this.a.al(0,v))return v
v=this.b
w=A.U(v)
return A.nA(new A.cM(new A.Y(v,new C.fHw(d),w.k("Y<1>")),new C.fHx(),w.k("cM<1,n>")))},
$S:z+19}
C.fHw.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fHx.prototype={
$1(d){return d.a},
$S:z+8}
C.fHt.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fHu.prototype={
$1(d){return d.b},
$S:z+8}
C.fHA.prototype={
$1(d){var w,v=d.e
if(this.a.al(0,v))return v
v=this.b
w=A.U(v)
return A.nA(new A.cM(new A.Y(v,new C.fHB(d),w.k("Y<1>")),new C.fHC(),w.k("cM<1,n>")))},
$S:z+19}
C.fHB.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fHC.prototype={
$1(d){return d.a},
$S:z+8}
C.fHy.prototype={
$1(d){var w,v=A.eA([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.al(0,w)&&v.J(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fHz.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dh7.prototype={
$0(){return this.a},
$S:z+46}
C.dho.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.al(0,d)},
$S:268}
C.dhg.prototype={
$2(d,e){var w=this.a.c3(0,d,new C.dhh()),v=J.a7(w)
if(!v.q(w,e))v.J(w,e)},
$S:118}
C.dhh.prototype={
$0(){return A.a([],x.s)},
$S:755}
C.dhf.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eH(w,e)
return w===!0},
$S:297}
C.dh8.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dhe.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dhd.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.J(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aT(v==null?D.DD:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aT(v==null?B.Z:v)
while(v.C()){t=v.gR(v)
if(e.q(0,t))continue
e.J(0,t)
t=w.h(0,t)
t=J.aT(t==null?D.DD:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1978}
C.dh9.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dhi.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.J(0,a9)
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
if(u){a8.J(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aT(t==null?D.DD:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.aV(w,new C.dhj(r)))w.push(r)}}B.d.br(w,new C.dhk(a8))
B.d.aZ(w,new C.dhl())
q=C.i35(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.J)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eUG],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.J)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.y(-p,p)],x.G)
a8=x.n
k=A.a([],a8)
j=A.a([],a8)
for(a8=n.length,m=0;m<n.length;n.length===a8||(0,A.J)(n),++m){i=n[m]
if(k.length!==0){h=Math.min(j.length,i.length)
for(g=-1/0,f=0;f<h;++f){e=f===0?22:44
g=Math.max(g,j[f]+e-i[f].a)}}else g=0
k.push(g)
for(f=0;f<i.length;++f){d=g+i[f].b
if(f<j.length)j[f]=Math.max(j[f],d)
else j.push(d)}}a0=(B.d.gH(k)+B.d.gan(k))/2
a1=A.a([new A.y(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.br_(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1979}
C.dhj.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dhk.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dhl.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.dhm.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a7(n),v=o.c,u=-1/0,t=0;t<w.gI(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b7(v,A.a4(v).k("b7<2>")).cG(0,0,B.q6)+88-w.gH(n).a}else u=0
for(w=J.a7(n),v=o.c,t=0;t<w.gI(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:666}
C.dhn.prototype={
$1(d){return 16+d*156},
$S:172}
C.dh6.prototype={
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
t.n(0,d,new C.GF(r,new A.o(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.GF(s,new A.o(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.GF(s,new A.o(e,v)))}t=o.r.h(0,d)
t=J.aT(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gR(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.KZ(d,new A.o(e+t,w),s,s.length))}},
$S:204}
C.dha.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aKL(new A.o(v.a,v.b+28),new A.o(w.a,w.b+28),!0,null))},
$S:118}
C.dhb.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dhc.prototype={
$2(d,e){return B.i.aS(d.a,e.a)},
$S:756}
C.dhp.prototype={
$2(d,e){return B.i.aS(d.a,e.a)},
$S:756}
C.dhq.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:474}
C.dhr.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:186}
C.dhs.prototype={
$1(d){return d>=0.5},
$S:119}
C.fmR.prototype={
$3(d,e,f){var w=null,v=A.l(10)
return A.h6(A.aP(!1,v,!0,new A.a5(38,38,A.X(d,this.a.c?B.c:B.cs,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1981}
C.eXT.prototype={
$1(d){var w=null,v=A.l(8),u=B.bR.j(0.12),t=A.l(8)
return new A.D(B.mZ,A.aP(!1,v,!0,A.r(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fue,B.K,w,w),B.f,w,w,new A.p(u,w,w,t,w,w,B.n),w,w,w,w,B.On,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eXS(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eXS.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dxl.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dxk.prototype={
$1(d){var w=null,v=A.l(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.o_,B.K,w,w)
return A.eg(A.a([A.bO(!1,B.dr,w,w,!0,w,w,w,new C.dxi(d),w,w),A.bO(!1,A.d("Delete",w,w,w,w,w,w,A.m(w,w,B.mO,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dxj(d),w,w)],x.p),B.ba,B.Ch,w,u,D.bFi,w,D.bHf,new A.b9(v,B.a1),w,w)},
$S:18}
C.dxi.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dxj.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dxu.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dxv.prototype={
$1(d){var w=this.a
return w.m(new C.dxt(w,d))},
$S:z+49}
C.dxt.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dxw.prototype={
$1(d){var w=null
return A.qJ(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dxz.prototype={
$1(d){var w=this.a
return w.m(new C.dxs(w,d))},
$S:35}
C.dxs.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dxy.prototype={
$1(d){var w=null
return A.qJ(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dxA.prototype={
$1(d){var w=this.a
return w.m(new C.dxr(w,d))},
$S:35}
C.dxr.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dxB.prototype={
$0(){var w=this.a
return w.m(new C.dxq(w))},
$S:0}
C.dxq.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dxC.prototype={
$0(){var w=this.a
return w.m(new C.dxp(w))},
$S:0}
C.dxp.prototype={
$0(){return++this.a.at},
$S:0}
C.dxD.prototype={
$0(){var w=this.a
return w.m(new C.dxo(w))},
$S:0}
C.dxo.prototype={
$0(){return--this.a.ax},
$S:0}
C.dxE.prototype={
$0(){var w=this.a
return w.m(new C.dxn(w))},
$S:0}
C.dxn.prototype={
$0(){return++this.a.ax},
$S:0}
C.dxF.prototype={
$1(d){var w=this.a
return w.m(new C.dxm(w,d))},
$S:9}
C.dxm.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dxx.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dxG.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.l(12)
if(p)w=B.bR.j(0.18)
else w=q.c.a?B.eg:B.c
v=A.l(12)
if(p)u=B.bR
else u=(q.c.a?B.ei:B.bP).j(0.85)
u=A.L(u,B.r,p?1.5:1)
if(p)t=B.bR
else t=q.c.a?B.bv:B.bo
t=A.X(f,t,r,r,r,18)
if(p)s=B.bR
else s=q.c.a?B.bv:B.bo
return A.E(A.aH(!1,B.a3,!0,r,A.aP(!1,o,!0,A.cT(r,A.x(A.a([t,B.ax,A.d(e,r,r,r,r,r,r,A.m(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.j,0,B.p),r,r,B.b0,new A.p(w,r,u,v,r,r,B.n),B.eK,r,r,r,r,B.k3,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dxH(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
$S:z+51}
C.dxH.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dxQ.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cf_.prototype={
$2(d,e){return new A.bA(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:95}
C.cf6.prototype={
$1(d){return d.aj()},
$S:z+5}
C.cf7.prototype={
$2(d,e){var w=J.b8(e,new C.cf5(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bA(d,w,x.d2)},
$S:z+53}
C.cf5.prototype={
$1(d){return d.aj()},
$S:z+12}
C.cf1.prototype={
$1(d){return C.amd(A.a2(d,x.N,x.z))},
$S:z+9}
C.cf2.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cf3.prototype={
$1(d){return C.hlL(A.a2(d,x.N,x.z))},
$S:z+11}
C.cf4.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cfb.prototype={
$1(d){return new A.aHP(d.f.length,d.a,d.b)},
$S:z+55}
C.cfc.prototype={
$2(d,e){return B.a.aS(d.c,e.c)},
$S:572}
C.cf8.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cf9.prototype={
$1(d){return d.cOe(C.Hm(d,this.a))},
$S:z+85}
C.e3d.prototype={
$1(d){return C.uy(d,this.a.a.c)},
$S:z+3}
C.e3e.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e3i.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e3j.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e3a.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1i(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z6("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.px(r.c,r.e),$async$$0)
case 4:s.z6(p)
w=5
return A.b(s.Ka(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3b.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1i(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z6("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.px(r.c,r.e),$async$$0)
case 4:s.z6(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3c.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Wt(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.z6("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.z6("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.z6("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Ka(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.z6(B.a.en(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e3h.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1h(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.z6("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).ce(A.ec(new C.e3g(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.px(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3g.prototype={
$1(d){var w=this.b
return new C.a0C(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e3f.prototype={
$1(d){return D.hyt},
$S:z+58}
C.e3l.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e3m.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e3k(w,d)
return new A.D(B.d6,new C.bgL(this.b,d.c,d.a,w,null),null)},
$S:1982}
C.e3k.prototype={
$0(){return this.a.Yq(this.b.b)},
$S:0}
C.e35.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e36.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e37.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e38.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e39.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e3n.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a_(s,"NGMYFTSYNC2"))t=!A.cS(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a6(this.b,!1).O(s)
return}},
$S:190}
C.dPs.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dPt.prototype={
$0(){return B.d.gH(D.a6m)},
$S:z+60}
C.dPu.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b2(A.at(A.X(this.b.d,B.c.j(0.95),w,w,D.d8y,44),w,w,w),w,w,new C.blD(u,t,v,w),B.az)},
$S:55}
C.fYl.prototype={
$1(d){return A.ph(new C.fYk(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:139}
C.fYk.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.eg:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.tu,24)],x.V),o=r?B.ei:B.bP
o=A.r(t,t,B.f,t,t,new A.p(o,t,t,A.l(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aW.j(0.25),B.bR.j(0.18)],x.O)
w=A.r(t,D.bXa,B.f,t,t,new A.p(t,t,t,A.l(12),t,new A.a8(B.a7,B.aa,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.m(t,t,r?B.aS:B.as,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.r(t,A.x(A.a([B.W,o,new A.D(E.amF,A.A(A.a([w,B.bc,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.m(t,t,r?B.bv:B.bo,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.j,0,B.p),1)],u),B.l,t,B.e,B.j,0,t,t),t),A.E(A.ip(!0,t,e,B.y,D.fgF,new C.fYj(this.b,s),20,B.amd,t,B.ah,!1),1)],u),B.l,t,B.e,B.j,0,B.p),B.f,t,t,new A.p(q,t,t,B.l7,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:122}
C.fYj.prototype={
$2(d,e){var w=null,v=D.a6m[e],u=A.l(16),t=A.l(16),s=this.b.a,r=A.L(s?B.ei:B.bP,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.ev,8)],x.V),p=A.l(15),o=A.E(new C.a7q(v.a,!0,w),1),n=s?B.jX:B.jm,m=A.d(v.b,w,1,B.a2,w,w,w,A.m(w,w,s?B.aS:B.as,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aH(!1,B.a3,!0,w,A.aP(!1,u,!0,A.ez(A.bx(p,A.x(A.a([o,A.r(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.m(w,w,s?B.bv:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.k4,w,w,w)],l),B.al,w,B.e,B.j,0,B.p),B.aq),w,new A.p(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fYi(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)},
$S:80}
C.fYi.prototype={
$0(){A.a6(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.coz.prototype={
$0(){return this.a.ahi(this.b)},
$S:0}
C.fXJ.prototype={
$1(d){return D.hti},
$S:z+61}
C.h4n.prototype={
$1(d){var w=this
return new C.a2o(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fXN.prototype={
$1(d){return new C.a_g(this.a,null)},
$S:z+63}
C.fXM.prototype={
$1(d){return D.huj},
$S:z+64}
C.d8E.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d8F.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d8D(w,d))},
$S:35}
C.d8D.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d8G.prototype={
$1(d){return this.a.KO()},
$S:2}
C.d8H.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d8A.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d8B.prototype={
$1(d){return this.a.KO()},
$S:2}
C.d8C.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cGW.prototype={
$0(){},
$S:0}
C.cH1.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cH2.prototype={
$0(){return this.a.aQJ(-1)},
$S:0}
C.cH3.prototype={
$1(d){return this.a.m(new C.cH0())},
$S:2}
C.cH0.prototype={
$0(){},
$S:0}
C.cH4.prototype={
$0(){return this.a.aQJ(1)},
$S:0}
C.cH5.prototype={
$1(d){return this.a.m(new C.cH_())},
$S:2}
C.cH_.prototype={
$0(){},
$S:0}
C.cH6.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.m(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aW.j(0.2)
if(s)v=B.aW
else v=this.b.a?B.ei:B.bP
return A.uW(u,u,B.b2,r,u,new C.cGZ(t,d),B.wu,s,w,u,new A.ay(v,1,B.r,-1),B.cg)},
$S:1983}
C.cGZ.prototype={
$1(d){var w=this.a
return w.m(new C.cGX(w,this.b))},
$S:9}
C.cGX.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cH7.prototype={
$1(d){return this.a.m(new C.cGY())},
$S:2}
C.cGY.prototype={
$0(){},
$S:0}
C.cH8.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fmm.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).O(w)},
$S:2}
C.fmn.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fmo.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).O(w)},
$S:0}
C.fmk.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbCU()
w=w.e
s=A.l(B.o.D(v-1,0,v))
return A.b2(new A.D(D.bHe,new A.en(A.r(r,q.a.c,B.f,r,r,new A.p(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bym(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:55}
C.fml.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dE.aA(0,p)
p=A.l(12)
q=q.a.c
v=A.l(12)
u=A.l(12)
t=w*2.4
s=A.ar(B.aW,B.bR,w)
s.toString
s=A.a([B.b2,s,B.aW],x.O)
return A.aH(!1,B.a3,!0,p,A.aP(!1,v,!0,A.ez(D.esp,r,new A.p(r,r,A.L(B.c.j(0.4),B.r,1.5),u,r,new A.a8(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
$S:145}
C.fW6.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:60}
C.eV2.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eUU.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eUV.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eV0.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.dY(new C.eV_(w,this.b),null)},
$S:20}
C.eV_.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.eg:B.c,t=A.l(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.as,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eP(w,u,new A.D(B.amz,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.m(w,w,v?B.bv:B.bo,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hrS(new C.eUX(r,e),r.a),B.aB,A.A(A.a([A.E(A.dU(B.dr,new C.eUY(d),w),1),B.au,A.E(A.bJ(B.W_,w,new C.eUZ(r,d),A.bp(B.aW,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.j,0,w,w)],q),B.al,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d8,w,new A.b9(t,B.a1),w)},
$S:103}
C.eUX.prototype={
$1(d){return this.b.$1(new C.eUW(this.a,d))},
$S:35}
C.eUW.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eUY.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eUZ.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.eV1.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Tz(this.b)},
$S:0}
C.eUP.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bf0(w)},
$S:0}
C.eUT.prototype={
$1(d){return this.bog(d)},
bog(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.M9(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j1(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eUS.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.eUR(this.b),v),v.k("M.E"))
u.d=t.bf0(w)},
$S:0}
C.eUR.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eV3.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j1(this.b,w)},
$S:0}
C.eV4.prototype={
$1(d){return this.a.bH3(d,this.b)},
$S:z+67}
C.eUQ.prototype={
$0(){return this.a.ab3(this.b)},
$S:0}
C.h4a.prototype={
$1(d){return new C.aeM(this.a,this.b,this.c,null)},
$S:z+68}
C.eV6.prototype={
$0(){return this.a.a0h(this.b)},
$S:0}
C.eV7.prototype={
$0(){return this.a.QM(this.b)},
$S:0}
C.eV8.prototype={
$0(){return this.a.EZ(this.b)},
$S:0}
C.eV9.prototype={
$0(){return this.a.a0i(this.b)},
$S:0}
C.eV5.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eUK.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eUL.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eUM.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eUO.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qu(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eUN(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eUN.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eVw.prototype={
$2(d,e){return d+e.gxI()},
$S:z+71}
C.eVs.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eVt.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eVd.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.eg:B.c,s=A.l(24),r=A.r(v,D.bXD,B.f,v,v,new A.p(B.ay.j(u?0.18:0.08),v,A.L(B.ay.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.m(v,v,u?B.aS:B.as,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.m(v,v,u?B.bv:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.as
u=u?B.ei:B.bP
w=x.p
return A.eP(v,t,new A.D(B.yT,A.x(A.a([r,B.aO,q,B.T,p,B.d9,A.A(A.a([A.E(A.dU(B.o1,new C.eVb(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.fh,v,new A.b9(A.l(14),B.a1),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.au,A.E(A.bJ(D.h_l,v,new C.eVc(d),A.bp(B.ay,v,v,v,v,v,B.fh,v,new A.b9(A.l(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.j,0,v,v)],w),B.l,v,B.e,B.P,0,B.p),v),v,v,v,v,B.d8,v,new A.b9(s,B.a1),v)},
$S:47}
C.eVb.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eVc.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eVm.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.eg:B.c,i=A.l(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.h8,28)],x.V),g=k?D.dfL:B.a5H,f=x.p
g=A.r(m,A.x(A.a([A.r(m,m,B.f,m,m,new A.p(B.c.j(0.45),m,m,A.l(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.f9N,B.ax,new A.bL(B.a7,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.m(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cB,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.j,0,B.p),B.f,m,m,new A.p(m,m,m,m,m,new A.a8(B.aA,B.aF,B.x,g,m,m),B.n),m,m,m,m,E.amD,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.m(m,m,k?B.bv:B.bo,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b7V(B.b7,B.js,new C.eVj(v,d),l,"Camera import","Scan QR"),1),B.au,A.E(v.b7V(B.cA,R.zv,new C.eVk(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.m(m,m,k?B.bv:B.bo,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.l(16)
r=B.ay.j(k?0.14:0.06)
q=A.l(16)
p=A.L(B.ay.j(0.28),B.r,1)
o=A.r(m,D.bWZ,B.f,m,m,new A.p(B.ay.j(0.12),m,m,A.l(12),m,m,B.n),m,m,m,m,B.bV,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.m(m,m,k?B.aS:B.as,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.m(m,m,k?B.bv:B.bo,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.j,0,B.p),1)
return A.bm(!0,new A.D(B.wp,A.r(m,A.x(A.a([g,new A.D(B.amA,A.x(A.a([w,B.W,u,B.bz,t,B.W,A.aH(!1,B.a3,!0,m,A.aP(!1,s,!0,A.r(m,A.A(A.a([o,B.bc,n,A.X(B.eI,k?B.bv:B.bo,m,m,m,m)],f),B.l,m,B.e,B.j,0,m,m),B.f,m,m,new A.p(r,m,p,q,m,m,B.n),m,m,m,m,B.bI,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eVl(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)],f),B.E,m,B.e,B.j,0,B.p),m)],f),B.l,m,B.e,B.P,0,B.p),B.aq,m,m,new A.p(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:27}
C.eVj.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.w6("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVk.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.w6("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVl.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.Or(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVh.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.eg:B.c,m=A.l(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eQ,24)],x.V),k=o?B.ei:B.bP
k=A.r(q,q,B.f,q,q,new A.p(k,q,q,A.l(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.l(12)
v=this.c
u=o?B.bv:B.bo
u=A.bx(w,new A.a5(48,48,C.aSg(!0,A.l(12),48,P.P2,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.m(q,q,o?B.aS:B.as,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bs(v.gxI())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wp,A.r(q,A.x(A.a([B.W,k,new A.D(D.amx,A.A(A.a([u,B.bc,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.m(q,q,o?B.bv:B.bo,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.j,0,B.p),1)],s),B.l,q,B.e,B.j,0,q,q),q),B.C8,r.cqz(B.v_,B.aW,new C.eVf(d),p,"QR code or backup file","Transfer project"),r.b4W(!0,B.ej,B.ay,new C.eVg(d),p,"Remove from this device","Delete project"),B.W],s),B.l,q,B.e,B.P,0,B.p),B.f,q,q,new A.p(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:27}
C.eVf.prototype={
$0(){A.a6(this.a,!1).O("transfer")
return null},
$S:0}
C.eVg.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
C.eVi.prototype={
$1(d){return this.boh(d)},
boh(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.M9(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wl(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eVz.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eVy(w))},
$S:0}
C.eVy.prototype={
$0(){return this.a.r++},
$S:0}
C.eVA.prototype={
$0(){var w=this.a
return w.m(new C.eVx(w))},
$S:0}
C.eVx.prototype={
$0(){return this.a.r++},
$S:0}
C.eVa.prototype={
$0(){var w=this.a.c
w.toString
return A.j1(w,null)},
$S:0}
C.eVe.prototype={
$0(){return this.a.cjQ(this.b)},
$S:0}
C.eVv.prototype={
$0(){var w=this.a
return w.m(new C.eVu(w,this.b))},
$S:0}
C.eVu.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eVp.prototype={
$0(){return this.a.w6("scan")},
$S:0}
C.eVq.prototype={
$0(){return this.a.w6("file")},
$S:0}
C.eVr.prototype={
$1(d){return this.a.cqA(d,this.b)},
$S:z+72}
C.eVo.prototype={
$0(){return this.a.F2(this.b)},
$S:0}
C.eVn.prototype={
$0(){return this.a.a0N(this.b,this.c)},
$S:0}
C.cGg.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cGf.prototype={
$1(d){return d.aj()},
$S:z+74}
C.cGd.prototype={
$1(d){return C.hMa(A.a2(d,x.N,x.z))},
$S:z+75}
C.cGe.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fGn.prototype={
$1(d){return d.y===D.kV},
$S:z+3}
C.h4X.prototype={
$1(d){return C.aR_(d,this.a)},
$S:z+3}
C.fDS.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bSI.prototype={
$1(d){return!d.as},
$S:z+1}
C.bSH.prototype={
$1(d){return d.aj()},
$S:z+23}
C.bSE.prototype={
$1(d){return C.hlN(A.a2(d,x.N,x.z))},
$S:z+24}
C.bSF.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bSG.prototype={
$1(d){return J.k(d)},
$S:17}
C.fu9.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fpV.prototype={
$1(d){return C.hbv(A.a2(d,x.N,x.z))},
$S:z+79}
C.fpW.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fpX.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fXx.prototype={
$1(d){return J.k(d)},
$S:17}
C.fXy.prototype={
$1(d){return d.a},
$S:z+81}
C.fXz.prototype={
$1(d){return d.length!==0},
$S:3}
C.fXA.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.fXB.prototype={
$1(d){return d.Tz(null).aj()},
$S:z+82}
C.h4V.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fGR.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fK1.prototype={
$1(d){return C.amd(A.a2(d,x.N,x.z))},
$S:z+9}
C.fK2.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fK3.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fK4.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fK5.prototype={
$1(d){return C.uy(d,this.a)},
$S:z+3}
C.fXk.prototype={
$1(d){return C.uy(d,this.a)},
$S:z+3}
C.h4Q.prototype={
$1(d){return C.amd(A.a2(d,x.N,x.z))},
$S:z+9}
C.h4R.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h4S.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fGy.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fGz.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h50.prototype={
$1(d){return!d.as},
$S:z+1}
C.fG2.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fG3.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fG4.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.h4o.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fKS.prototype={
$1(d){return d.Q},
$S:z+15}
C.fXd.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fJZ.prototype={
$1(d){return C.amd(A.a2(d,x.N,x.z))},
$S:z+9}
C.fK_.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fK0.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fX8.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fqv.prototype={
$1(d){return d.length!==0},
$S:3}
C.fqw.prototype={
$1(d){return C.hlN(A.a2(d,x.N,x.z))},
$S:z+24}
C.fqx.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fqy.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fqz.prototype={
$1(d){return d.length!==0},
$S:3}
C.fqM.prototype={
$2(d,e){return d.eB(new C.fqN(e))},
$S:1984}
C.fqN.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.ce},
$S:1985}
C.fqJ.prototype={
$1(d){return C.i8a(d,this.a)},
$S:z+84}
C.fqK.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fqL.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fuR.prototype={
$1(d){return d.a},
$S:z+56}
C.fuS.prototype={
$1(d){return d.length!==0},
$S:3}
C.fuT.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fxR.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fD7.prototype={
$1(d){return C.hxq(d,C.Hm(d,this.a))},
$S:z+5}
C.fD8.prototype={
$1(d){return C.hxr(d,C.Hm(d,this.a))},
$S:z+5};(function aliases(){var w=C.aBD.prototype
w.bw6=w.t
w=C.azR.prototype
w.bw1=w.t
w=C.aH2.prototype
w.bwu=w.t
w=C.aBE.prototype
w.bw7=w.t
w=C.aBG.prototype
w.bw8=w.t
w=C.aBH.prototype
w.bw9=w.t
w=C.aNc.prototype
w.byY=w.t
w=C.aPk.prototype
w.bBi=w.t
w=C.aPl.prototype
w.bBj=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aED.prototype,"gcnu","cnv",28)
var r
w(r=C.aBC.prototype,"gcgo","cgp",65)
v(r,"gaOV","NZ",0)
v(r,"gcvQ","Bq",0)
v(r,"gbOR","OF",0)
v(r,"gcKd","z7",0)
v(r,"gcpx","a1u",0)
v(r,"gbKf","On",0)
v(r,"gbPg","XS",0)
w(r,"gbUm","bUn",78)
v(r,"gbEz","Ap",0)
v(C.aBF.prototype,"gcK9","FV",0)
v(r=C.am2.prototype,"gbss","bst",2)
v(r,"gbsk","bsl",2)
v(r,"gcLi","cLj",2)
u(r,"gqn","kN",0)
u(r=C.akf.prototype,"geY","fX",2)
w(r,"gcc1","cc2",27)
u(C.auV.prototype,"gqn","kN",0)
v(r=C.ayS.prototype,"gcWR","cWS",2)
u(r,"gqn","kN",0)
u(C.aKQ.prototype,"gbsq","bsr",2)
v(C.amb.prototype,"gBU","cLv",2)
u(r=C.am9.prototype,"gcMb","cMc",2)
u(r,"gqn","kN",0)
v(r=C.am5.prototype,"gbri","brj",2)
v(r,"gcRn","cRo",2)
u(r=C.am7.prototype,"geY","fX",2)
u(r,"gix","cKP",2)
v(r=C.am3.prototype,"gcKE","cKF",2)
u(r,"gbqa","jI",2)
v(r=C.aFb.prototype,"gagV","wm",0)
v(r,"gcj5","a0E",0)
v(r,"gaT8","Iv",0)
v(r=C.aF8.prototype,"gcG7","a3C",0)
v(r,"gagV","wm",0)
v(r,"gctR","a28",0)
v(r,"gcj0","b39",2)
v(r,"gck2","a0S",0)
w(r,"gcgi","cgj",35)
v(r,"gbP8","IA",0)
v(r,"gcHc","cHd",2)
v(r,"gc6b","ZB",0)
w(r,"gceN","ceO",36)
v(r,"gciP","ciQ",2)
v(r=C.aDC.prototype,"gcc7","Qj",0)
v(r,"gcc9","cca",2)
v(r,"gbLK","aaG",0)
v(r=C.aFa.prototype,"gbSL","Ym",0)
v(r,"gc2j","Z2",0)
v(r,"gcAf","a3_",0)
v(r,"gcwp","a2B",0)
v(C.aF9.prototype,"gcw8","aiJ",0)
v(C.au6.prototype,"gceL","a0f",0)
v(C.aAm.prototype,"ga3l","KO",2)
v(C.aAl.prototype,"ga3l","KO",2)
v(C.az4.prototype,"ga3l","KO",2)
v(r=C.aGE.prototype,"gb4j","Ri",0)
v(r,"gbDn","Wv",0)
v(r,"gcjR","cjS",2)
w(C.aGD.prototype,"gcfD","cfE",69)
t(C.aGF.prototype,"gaT3",0,0,null,["$1","$0"],["Iu","bN2"],70,0,0)
s(C,"hF8","iij",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aE,[C.apK,C.uT,C.nw,C.Iv,C.afY,C.KS,C.uU,C.bTd,C.tg,C.bp9,C.amk,C.ae4,C.lr,C.bRP,C.aui,C.zG,C.akW,C.MP,C.baA,C.aa9,C.bhQ,C.ag4,C.aA5,C.afT,C.aKQ,C.KZ,C.GF,C.bgJ,C.aKL,C.ar5,C.dht,C.lW,C.aVc,C.aVb,C.aTe,C.uj,C.rq,C.lC,C.hW,C.kV,C.aIJ])
u(A.ht,[C.fOF,C.fOE,C.fOG,C.fYe,C.fBM,C.fBN,C.fBS,C.fMo,C.fMn,C.fMm,C.c7Z,C.fYL,C.fYD,C.fYP,C.fGG,C.dQ8,C.dQ3,C.dQ4,C.dPH,C.dPD,C.dQn,C.dQo,C.dQh,C.dQi,C.dQp,C.dQq,C.fHr,C.fJW,C.fJX,C.fXi,C.h4P,C.fGx,C.fXT,C.dgG,C.dg2,C.dgb,C.dgs,C.dg7,C.dgd,C.dg4,C.dgh,C.dgi,C.dgg,C.dgx,C.dgw,C.dit,C.diu,C.div,C.dgU,C.dgZ,C.dgY,C.cPe,C.cPg,C.d7S,C.d8g,C.d8h,C.d8k,C.d8m,C.d8n,C.d8o,C.d8q,C.d8r,C.bRz,C.bRt,C.fuy,C.h4I,C.h4J,C.h4K,C.h4F,C.h4L,C.h4M,C.h4N,C.h4E,C.fI2,C.fWj,C.fDT,C.fKR,C.bMD,C.h56,C.fWP,C.bKO,C.bKJ,C.bKL,C.bKK,C.cqf,C.cqa,C.cqb,C.cq9,C.cq7,C.cqc,C.cQi,C.cFf,C.cFi,C.cFg,C.cFj,C.cFk,C.f76,C.fhg,C.bSl,C.bSf,C.bSj,C.bRX,C.e1M,C.e1J,C.e1K,C.e1I,C.e1O,C.bSd,C.bS3,C.bRO,C.bRN,C.bRJ,C.bRK,C.bRL,C.bRM,C.e3r,C.e2R,C.e2M,C.e2d,C.e2t,C.e2w,C.e2s,C.e2r,C.e2I,C.e2J,C.e2D,C.e21,C.e2U,C.e2O,C.e23,C.e24,C.e25,C.e2a,C.e28,C.e27,C.e2n,C.e2o,C.e2i,C.e30,C.e2X,C.dh4,C.dh5,C.fHv,C.fHw,C.fHx,C.fHt,C.fHu,C.fHA,C.fHB,C.fHC,C.fHy,C.fHz,C.dho,C.dhe,C.dh9,C.dhj,C.dhk,C.dhn,C.dhb,C.dhq,C.dhr,C.dhs,C.fmR,C.eXT,C.dxk,C.dxu,C.dxv,C.dxw,C.dxz,C.dxy,C.dxA,C.dxF,C.dxG,C.cf6,C.cf5,C.cf1,C.cf2,C.cf3,C.cf4,C.cfb,C.cf8,C.cf9,C.e3d,C.e3g,C.e3f,C.e3m,C.e3n,C.dPs,C.fYl,C.fXJ,C.h4n,C.fXN,C.fXM,C.d8F,C.d8G,C.d8B,C.cH3,C.cH5,C.cH6,C.cGZ,C.cH7,C.fmm,C.fW6,C.eV0,C.eUX,C.eUT,C.eUR,C.eV4,C.h4a,C.eVd,C.eVm,C.eVh,C.eVi,C.eVr,C.cGf,C.cGd,C.cGe,C.fGn,C.h4X,C.fDS,C.bSI,C.bSH,C.bSE,C.bSF,C.bSG,C.fpV,C.fpW,C.fXx,C.fXy,C.fXz,C.fXA,C.fXB,C.h4V,C.fGR,C.fK1,C.fK2,C.fK4,C.fK5,C.fXk,C.h4Q,C.h4R,C.h4S,C.fGy,C.fGz,C.h50,C.fG2,C.fG3,C.h4o,C.fKS,C.fXd,C.fJZ,C.fK_,C.fX8,C.fqv,C.fqw,C.fqx,C.fqy,C.fqz,C.fqN,C.fqJ,C.fqK,C.fuR,C.fuS,C.fxR,C.fD7,C.fD8])
u(A.ax,[C.b_O,C.am0,C.aWw,C.ZW,C.bcl,C.QM,C.a6E,C.tH,C.Ix,C.bgH,C.bkw,C.byx,C.bnS,C.aeq,C.bkv,C.aep,C.bku,C.aDD,C.aJN,C.aer,C.GB,C.bgI,C.adG,C.bgG,C.bgL,C.b_M,C.au6,C.aeM])
u(A.mn,[C.bcZ,C.bec,C.be3,C.aID,C.bjx,C.bp8,C.aWB,C.bd0,C.aBB,C.bcu,C.btb,C.bjF,C.bj5,C.bjc,C.bgK,C.bfM,C.blD,C.bym])
u(A.iJ,[C.fYI,C.fYJ,C.fYK,C.fYB,C.fYC,C.fYN,C.fYO,C.dQk,C.dQ6,C.dQ9,C.dPO,C.dPP,C.dPQ,C.dPN,C.dPV,C.dPM,C.dPW,C.dPX,C.dPL,C.dPY,C.dPK,C.dPZ,C.dPJ,C.dQ_,C.dPB,C.dPC,C.dPI,C.dQ0,C.dPG,C.dQ1,C.dPF,C.dPR,C.dPE,C.dPS,C.dPA,C.dPT,C.dPU,C.dQl,C.dQm,C.dQa,C.dQb,C.dQc,C.dQd,C.dQe,C.dQf,C.dQg,C.dQs,C.dQj,C.fHs,C.dg0,C.dfZ,C.dg_,C.dg1,C.dgF,C.dgu,C.dgr,C.dg3,C.dgv,C.dg9,C.dga,C.dgc,C.dgt,C.dg8,C.dge,C.dgC,C.dgo,C.dgn,C.dgp,C.dgq,C.dgj,C.dgl,C.dgm,C.dgf,C.dgy,C.dgB,C.dg5,C.dg6,C.dis,C.dir,C.diq,C.dip,C.diw,C.dio,C.dix,C.dgV,C.dgW,C.dgX,C.dh_,C.dgT,C.dgS,C.cPf,C.d7R,C.d83,C.d82,C.d8i,C.d81,C.d8j,C.d80,C.d8_,C.d8l,C.d7Z,C.d8b,C.d8a,C.d8s,C.bRs,C.bRC,C.bRu,C.bRv,C.bRy,C.bRx,C.bRA,C.bRB,C.bRw,C.bRq,C.bRr,C.bT5,C.bT6,C.bT7,C.bT8,C.bT9,C.bTa,C.bTb,C.h4H,C.fWk,C.bKN,C.bKI,C.bKG,C.bKH,C.bKF,C.cqh,C.cqi,C.cqg,C.cqj,C.cql,C.cqm,C.cqn,C.cqd,C.cFe,C.cFn,C.cFo,C.cFp,C.cFm,C.cFq,C.cFr,C.cFs,C.cFt,C.cFh,C.cFl,C.bSB,C.bSA,C.bSy,C.bSw,C.bSx,C.bSt,C.bSu,C.bSv,C.bSz,C.bSs,C.f77,C.f78,C.f79,C.f7a,C.f7b,C.bSp,C.bSq,C.bSr,C.bSk,C.bSm,C.bSn,C.bSo,C.bSg,C.bS0,C.bS_,C.bRZ,C.bRT,C.bRU,C.bRY,C.bRV,C.bRW,C.bRS,C.e1L,C.e1N,C.e1G,C.e1H,C.e1F,C.e1P,C.e1Q,C.e1R,C.e1U,C.e1V,C.e1W,C.e1X,C.e1Y,C.e1Z,C.e2_,C.e20,C.e1S,C.e1T,C.bSc,C.bSb,C.bS2,C.bS1,C.bS8,C.bS9,C.bS5,C.bS6,C.bS7,C.bS4,C.bRD,C.bRE,C.bRI,C.bRH,C.bRG,C.bRF,C.e3q,C.e3p,C.e3s,C.e3t,C.e3u,C.e3o,C.e3w,C.e3v,C.e2P,C.e2Q,C.e2S,C.e2e,C.e2v,C.e2u,C.e2x,C.e2L,C.e2q,C.e2B,C.e2C,C.e2A,C.e2y,C.e2z,C.e2E,C.e2F,C.e2G,C.e2K,C.e22,C.e2N,C.e26,C.e29,C.e2b,C.e2T,C.e2h,C.e2f,C.e2j,C.e2k,C.e2g,C.e2l,C.e2p,C.e31,C.e32,C.e2V,C.e2Y,C.e2Z,C.e3_,C.e34,C.e2W,C.e2c,C.dh3,C.dh2,C.dh7,C.dhh,C.dh8,C.eXS,C.dxl,C.dxi,C.dxj,C.dxt,C.dxs,C.dxr,C.dxB,C.dxq,C.dxC,C.dxp,C.dxD,C.dxo,C.dxE,C.dxn,C.dxm,C.dxx,C.dxH,C.dxQ,C.e3e,C.e3i,C.e3j,C.e3a,C.e3b,C.e3c,C.e3h,C.e3l,C.e3k,C.e35,C.e36,C.e37,C.e38,C.e39,C.dPt,C.fYi,C.coz,C.d8E,C.d8D,C.d8H,C.d8A,C.d8C,C.cGW,C.cH1,C.cH2,C.cH0,C.cH4,C.cH_,C.cGX,C.cGY,C.cH8,C.fmn,C.fmo,C.eV2,C.eUU,C.eUV,C.eUW,C.eUY,C.eUZ,C.eV1,C.eUP,C.eUS,C.eV3,C.eUQ,C.eV6,C.eV7,C.eV8,C.eV9,C.eV5,C.eUK,C.eUL,C.eUM,C.eUO,C.eUN,C.eVs,C.eVt,C.eVb,C.eVc,C.eVj,C.eVk,C.eVl,C.eVf,C.eVg,C.eVz,C.eVy,C.eVA,C.eVx,C.eVa,C.eVe,C.eVv,C.eVu,C.eVp,C.eVq,C.eVo,C.eVn])
u(A.af,[C.apW,C.U4,C.a_E,C.a_I,C.a_G,C.a_e,C.am1,C.ake,C.auU,C.ayR,C.ama,C.am8,C.am4,C.Wq,C.am6,C.U5,C.ar8,C.ar2,C.a0i,C.ar6,C.a0C,C.a0D,C.a7q,C.a_g,C.a_f,C.ZN,C.a2o,C.Gp,C.ayY,C.au5,C.au_,C.au4,C.P3])
u(A.ah,[C.aED,C.bgB,C.aBC,C.bh_,C.aBF,C.bea,C.aBD,C.azR,C.aH2,C.ayS,C.aBH,C.aBG,C.aBE,C.bm_,C.am7,C.am3,C.aFb,C.aF8,C.aDC,C.aFa,C.aF9,C.bm0,C.aNc,C.aAm,C.aAl,C.az4,C.byp,C.aPk,C.aPl,C.aGE,C.bnn,C.aGD,C.bAa])
u(A.jy,[C.dQ5,C.dQ7,C.dQ2,C.dQr,C.fJY,C.bRp,C.dgE,C.dgD,C.dgk,C.dgz,C.dgA,C.dh0,C.bTc,C.bT4,C.bRQ,C.bRR,C.h4G,C.h55,C.bKM,C.cqk,C.cqe,C.cq8,C.f7c,C.bSe,C.bSh,C.bSi,C.drD,C.bSa,C.e2H,C.e2m,C.e33,C.dhg,C.dhf,C.dhd,C.dhi,C.dhl,C.dhm,C.dh6,C.dha,C.dhc,C.dhp,C.cf_,C.cf7,C.cfc,C.dPu,C.fYk,C.fYj,C.fmk,C.fml,C.eV_,C.eVw,C.cGg,C.fu9,C.fpX,C.fK3,C.fG4,C.fK0,C.fqM,C.fqL,C.fuT])
u(A.lD,[C.a1U,C.ag6,C.a2c,C.a05,C.acJ,C.aLx,C.Iw,C.amc,C.cGh,C.cGi])
t(C.am2,C.aBD)
t(C.akf,C.azR)
t(C.auV,C.aH2)
t(C.bgF,C.aBH)
t(C.amb,C.bgF)
t(C.bgE,C.aBG)
t(C.am9,C.bgE)
t(C.bgD,C.aBE)
t(C.am5,C.bgD)
t(C.blE,C.aNc)
t(C.byn,C.aPk)
t(C.byo,C.aPl)
t(C.aGF,C.bAa)
t(C.baN,A.baB)
t(C.byq,A.a75)
t(C.baM,C.byq)
w(C.aBD,A.cc)
w(C.azR,A.cc)
w(C.aH2,A.eM)
w(C.aBE,A.cc)
v(C.bgD,C.afT)
w(C.aBG,A.cc)
v(C.bgE,C.afT)
w(C.aBH,A.cc)
v(C.bgF,C.afT)
w(C.aNc,A.eM)
w(C.aPk,A.cc)
w(C.aPl,A.cc)
v(C.bAa,A.eC)
v(C.byq,A.jg)})()
A.iT(b.typeUniverse,JSON.parse('{"b_O":{"ax":[],"v":[]},"bcZ":{"aC":[]},"apW":{"af":[],"v":[]},"aED":{"ah":["apW"]},"U4":{"af":[],"v":[]},"am0":{"ax":[],"v":[]},"aWw":{"ax":[],"v":[]},"bgB":{"ah":["U4"]},"a_E":{"af":[],"v":[]},"a_I":{"af":[],"v":[]},"a_G":{"af":[],"v":[]},"a_e":{"af":[],"v":[]},"aBC":{"ah":["a_E"]},"bh_":{"ah":["a_I"]},"aBF":{"ah":["a_G"]},"ZW":{"ax":[],"v":[]},"bec":{"aC":[]},"be3":{"aC":[]},"bea":{"ah":["a_e"]},"aID":{"aC":[]},"bjx":{"aC":[]},"bcl":{"ax":[],"v":[]},"am1":{"af":[],"v":[]},"am2":{"ah":["am1"]},"bp8":{"aC":[]},"aWB":{"aC":[]},"ake":{"af":[],"v":[]},"auU":{"af":[],"v":[]},"ayR":{"af":[],"v":[]},"akf":{"ah":["ake"]},"bd0":{"aC":[]},"QM":{"ax":[],"v":[]},"aBB":{"aC":[]},"auV":{"ah":["auU"]},"bcu":{"aC":[]},"ayS":{"ah":["ayR"]},"ama":{"af":[],"v":[]},"am8":{"af":[],"v":[]},"am4":{"af":[],"v":[]},"amb":{"ah":["ama"]},"btb":{"aC":[]},"am9":{"ah":["am8"]},"bjF":{"aC":[]},"am5":{"ah":["am4"]},"bj5":{"aC":[]},"Wq":{"af":[],"v":[]},"am6":{"af":[],"v":[]},"U5":{"af":[],"v":[]},"a6E":{"ax":[],"v":[]},"bjc":{"aC":[]},"tH":{"ax":[],"v":[]},"Ix":{"ax":[],"v":[]},"bm_":{"ah":["Wq"]},"am7":{"ah":["am6"]},"am3":{"ah":["U5"]},"ar8":{"af":[],"v":[]},"ar2":{"af":[],"v":[]},"a0i":{"af":[],"v":[]},"aer":{"ax":[],"v":[]},"aFb":{"ah":["ar8"]},"aF8":{"ah":["ar2"]},"bgH":{"ax":[],"v":[]},"bgK":{"aC":[]},"bkw":{"ax":[],"v":[]},"bfM":{"aC":[]},"byx":{"ax":[],"v":[]},"bnS":{"ax":[],"v":[]},"aDC":{"ah":["a0i"]},"aeq":{"ax":[],"v":[]},"bkv":{"ax":[],"v":[]},"aep":{"ax":[],"v":[]},"bku":{"ax":[],"v":[]},"aDD":{"ax":[],"v":[]},"aJN":{"ax":[],"v":[]},"GB":{"ax":[],"v":[]},"ar6":{"af":[],"v":[]},"a0C":{"af":[],"v":[]},"a0D":{"af":[],"v":[]},"aFa":{"ah":["ar6"]},"bgI":{"ax":[],"v":[]},"adG":{"ax":[],"v":[]},"bgG":{"ax":[],"v":[]},"bgL":{"ax":[],"v":[]},"aF9":{"ah":["a0C"]},"bm0":{"ah":["a0D"]},"b_M":{"ax":[],"v":[]},"a7q":{"af":[],"v":[]},"blE":{"ah":["a7q"]},"blD":{"aC":[]},"au6":{"ax":[],"v":[]},"a_g":{"af":[],"v":[]},"a_f":{"af":[],"v":[]},"ZN":{"af":[],"v":[]},"a2o":{"af":[],"v":[]},"aAm":{"ah":["a_g"]},"aAl":{"ah":["a_f"]},"az4":{"ah":["ZN"]},"byp":{"ah":["a2o"]},"Gp":{"af":[],"v":[]},"ayY":{"af":[],"v":[]},"byn":{"ah":["Gp"]},"byo":{"ah":["ayY"]},"bym":{"aC":[]},"au5":{"af":[],"v":[]},"aGE":{"ah":["au5"]},"aeM":{"ax":[],"v":[]},"au_":{"af":[],"v":[]},"au4":{"af":[],"v":[]},"bnn":{"ah":["au_"]},"aGD":{"ah":["au4"]},"P3":{"af":[],"v":[]},"aGF":{"ah":["P3"],"eC":[]},"baM":{"jg":[],"fi":[]}}'))
A.Dl(b.typeUniverse,JSON.parse('{"afT":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.as
return{e2:w("aTe"),cq:w("mk"),Q:w("rq"),r:w("bv<n,n>"),c5:w("aVb"),dY:w("aVc"),fH:w("MP"),de:w("akW"),dN:w("MX<H>"),gc:w("Ep<H>"),A:w("eJ<n?>"),e:w("Iv"),B:w("nw"),P:w("hW"),df:w("lr"),k:w("kV"),x:w("aB<~>"),U:w("O<T1>"),V:w("O<ac>"),C:w("O<rq>"),O:w("O<u>"),c:w("O<MP>"),b:w("O<akW>"),ac:w("O<eJ<n?>>"),I:w("O<nw>"),u:w("O<hW>"),J:w("O<lr>"),_:w("O<kV>"),cl:w("O<aB<ai<a9<n,@>>>>"),R:w("O<nz>"),eU:w("O<ai<+(G,G)>>"),ez:w("O<a9<n,aE>>"),gE:w("O<a9<n,n>>"),Y:w("O<a9<n,@>>"),fD:w("O<mS>"),bp:w("O<oJ>"),g:w("O<o>"),ar:w("O<aui>"),v:w("O<fT>"),gy:w("O<aa9>"),L:w("O<+(n,n)>"),G:w("O<+(G,G)>"),E:w("O<+(G,~())>"),bd:w("O<+(n,H,P)>"),bF:w("O<+count,id,name(H,n,n)>"),F:w("O<cU>"),s:w("O<n>"),cF:w("O<au>"),aS:w("O<j4>"),dT:w("O<baA>"),p:w("O<v>"),Z:w("O<fi>"),D:w("O<lC>"),h:w("O<aA5>"),cC:w("O<bhQ>"),fp:w("O<KS>"),M:w("O<KZ>"),gZ:w("O<aIJ>"),gA:w("O<afY>"),e4:w("O<ag4>"),dE:w("O<aKL>"),f7:w("O<P>"),n:w("O<G>"),t:w("O<H>"),dS:w("O<aC?>"),d4:w("O<n?>"),eF:w("cw<ah<af>>"),d:w("ai<nw>"),do:w("ai<hW>"),cg:w("ai<lr>"),ax:w("ai<kV>"),fO:w("ai<a9<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),dy:w("ai<n>"),er:w("ai<au>"),gk:w("ai<lC>"),j:w("ai<@>"),fK:w("bA<n,n>"),d2:w("bA<n,ai<a9<n,@>>>"),a:w("a9<n,@>"),f:w("a9<@,@>"),gv:w("N<n,Iy>"),cM:w("N<H,n>"),w:w("iC"),g2:w("rP"),bV:w("apK"),fL:w("ct"),K:w("aE"),dc:w("fT"),fo:w("Pp<H>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(P,H)"),d9:w("+dx,hidden(G,ai<hW>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),fT:w("iu<hW>"),ec:w("iu<n>"),gW:w("r6<G>"),X:w("br<G>"),bW:w("dK"),W:w("bC<n>"),b4:w("bC<H>"),cI:w("k4<n>"),av:w("Y<zG>"),cc:w("Y<n>"),l:w("v"),gF:w("fi"),fA:w("lC"),dO:w("GF"),bw:w("aep<n?>"),cy:w("L0"),q:w("mC"),y:w("P"),i:w("G"),z:w("@"),S:w("H"),eK:w("ai<kV>?"),m:w("ar5?"),cT:w("o?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),he:w("+qrPayload,token,usesRemaining(n,n,H)?"),gG:w("+members,trees,viewOnly(H,H,P)?"),az:w("qk?"),T:w("n?"),aD:w("dK?"),o:w("lC?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b4N=new A.be(B.fP,B.bJ,B.fP,B.bJ)
D.adV=new A.be(B.fP,B.ip,B.fP,B.ip)
D.b50=new A.be(B.iE,B.bJ,B.bJ,B.bJ)
D.b54=new A.ay(B.cH,1.4,B.r,-1)
D.b5e=new A.ay(B.ab,1,B.r,-1)
D.aep=new A.aY(140,1/0,0,1/0)
D.b6D=new A.aY(0,1/0,64,1/0)
D.b6H=new A.aY(0,84,0,1/0)
D.aew=new A.aY(130,1/0,0,1/0)
D.aCN=w([B.m7,B.rO,B.c],x.O)
D.c7V=new A.a8(B.aA,B.aF,B.x,D.aCN,null,null)
D.b7r=new A.p(null,null,null,null,null,D.c7V,B.n)
D.dfa=w([B.aW,B.bR],x.O)
D.ca1=new A.a8(B.b4,B.b8,B.x,D.dfa,null,null)
D.b7M=new A.p(null,null,null,null,null,D.ca1,B.n)
D.Yi=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fA=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.djb=w([B.dz,D.Yi,D.fA],x.O)
D.c77=new A.a8(B.b4,B.b8,B.x,D.djb,null,null)
D.b8w=new A.p(null,null,null,null,null,D.c77,B.n)
D.frr=new A.F(!0,B.bW,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1Q=new A.B("?",null,D.frr,null,null,null,null,null,null,null,null,null)
D.bce=new A.ch(B.A,null,null,D.h1Q,null)
D.VS=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKQ=new A.B("\ud83c\udf33",null,D.VS,null,null,null,null,null,null,null,null,null)
D.afe=new A.ch(B.A,null,null,D.fKQ,null)
D.fNu=new A.B("\ud83c\udfc6",null,Ar.KI,null,null,null,null,null,null,null,null,null)
D.bcp=new A.ch(B.A,null,null,D.fNu,null)
D.bef=new A.fk(null,null,null,null,null,E.kr,null,null,null,null)
D.afg=new A.ch(B.A,null,null,D.bef,null)
D.kO=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fs1=new A.F(!0,D.kO,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMv=new A.B("No books on the shelf yet.",null,D.fs1,null,null,null,null,null,null,null,null,null)
D.esq=new A.D(B.nJ,D.fMv,null)
D.bcF=new A.ch(B.A,null,null,D.esq,null)
D.fz7=new A.F(!0,D.fA,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2L=new A.B("\ud83d\ude8c  On the road\u2026",null,D.fz7,null,null,null,null,null,null,null,null,null)
D.et1=new A.D(B.cm,D.h2L,null)
D.bd7=new A.ch(B.A,null,null,D.et1,null)
D.aWP=new A.B("\ud83e\uddfa",null,D.VS,null,null,null,null,null,null,null,null,null)
D.bdm=new A.ch(B.A,null,null,D.aWP,null)
D.fPY=new A.B("\ud83c\udfad",null,D.VS,null,null,null,null,null,null,null,null,null)
D.bdy=new A.ch(B.A,null,null,D.fPY,null)
D.bdB=new A.ch(B.A,null,null,A7.Y6,null)
D.afB=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.afI=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bfO=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bfT=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bg4=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bg7=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bg9=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bgh=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lC=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bgl=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bgq=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bgr=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bgs=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lD=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bh2=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.BE=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bhb=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bhv=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bhy=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bhE=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bhM=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.agj=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bhT=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Yu=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.agm=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bi4=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Yw=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bio=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.agy=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.biN=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bj2=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bjr=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bjC=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.FR=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bjY=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bk_=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bk3=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.ah_=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bkn=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bkt=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bkz=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.ah3=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bkH=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bl8=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.blg=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bli=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bln=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ahj=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bm_=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ahI=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bmX=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ahW=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bnl=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.G3=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bnr=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bnB=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bnD=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ai0=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bnW=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bnX=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bo_=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ai8=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.Zc=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bom=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.boH=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.boM=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.aij=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.boT=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.Zj=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bpb=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bpc=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.Ga=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bpZ=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bqC=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bqI=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bqM=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qm=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bqX=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.br0=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.br6=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.br8=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.aj5=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.aj9=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.Gg=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.ZD=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.aji=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bsf=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bsy=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bsY=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bt6=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.ajI=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.ZN=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.btf=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.btx=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.ZR=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.btM=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bu1=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.ZW=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bu6=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.ak_=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.ak1=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bup=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.ak7=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.buR=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.buV=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bv0=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bv6=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bve=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bvO=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bwj=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fGH=new A.B("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bzS=new A.eJ(null,D.fGH,B.fd,null,x.A)
D.fPP=new A.B("None",null,null,null,null,null,null,null,null,null,null,null)
D.bzU=new A.eJ(null,D.fPP,B.fd,null,x.A)
D.al0=new A.bd(3e4)
D.bAr=new A.bd(38e5)
D.bBa=new A.im(0,10,0,10)
D.bBj=new A.S(0,1,0,0)
D.bBu=new A.im(0,4,0,4)
D.bBx=new A.S(0,4,5,0)
D.bBO=new A.S(10,10,14,10)
D.bC_=new A.im(10,4,10,4)
D.bC7=new A.im(10,8,10,8)
D.bC8=new A.S(10,8,8,8)
D.bCC=new A.S(12,6,12,2)
D.bCT=new A.S(14,0,14,6)
D.bCX=new A.S(14,10,6,6)
D.bCY=new A.S(14,12,14,0)
D.bD1=new A.S(14,12,14,8)
D.bD4=new A.S(14,12,8,14)
D.bD8=new A.im(14,14,14,14)
D.bDq=new A.S(14,6,14,40)
D.bDt=new A.S(14,8,14,30)
D.bDR=new A.S(16,2,16,10)
D.bE_=new A.S(16,6,16,30)
D.bE1=new A.S(16,6,16,8)
D.bEg=new A.S(18,10,18,4)
D.bEi=new A.S(18,12,18,0)
D.bEp=new A.S(18,14,12,4)
D.amx=new A.S(18,16,18,8)
D.bEF=new A.S(18,20,18,22)
D.bEL=new A.S(18,30,18,30)
D.bF1=new A.S(20,10,12,20)
D.bF4=new A.S(20,11,20,11)
D.bFg=new A.S(20,18,16,18)
D.bFi=new A.S(20,18,20,6)
D.bG6=new A.S(24,32,24,28)
D.bG7=new A.S(24,36,24,32)
D.bGb=new A.S(26,26,24,14)
D.bGq=new A.S(2,4,2,8)
D.bGu=new A.S(30,0,30,0)
D.bGF=new A.S(38,22,22,22)
D.amW=new A.S(40,24,24,24)
D.bGH=new A.im(40,40,40,40)
D.bGJ=new A.S(46,30,30,30)
D.bHa=new A.S(56,40,40,40)
D.bHe=new A.S(1.25,1.25,1.25,1.25)
D.bHf=new A.S(60,0,60,0)
D.bHj=new A.S(6,14,6,16)
D.bHn=new A.S(6,4,12,0)
D.bHr=new A.S(6,6,10,2)
D.bHy=new A.im(7,3,7,3)
D.bI5=new A.S(5,1.5,5,1.5)
D.bIg=new A.S(6,2.5,6,2.5)
D.fY1=new A.B("Family Games",null,B.jQ,null,null,null,null,null,null,null,null,null)
D.fFj=new A.B("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.VI,null,null,null,null,null,null,null,null,null)
D.cJ3=w([D.fY1,D.fFj],x.p)
D.bxl=new A.fj(B.ah,B.e,B.j,B.E,null,B.p,null,0,D.cJ3,null)
D.bIG=new A.bz(1,B.bb,D.bxl,null)
D.h1n=new A.B("Signature",null,B.nh,null,null,null,null,null,null,null,null,null)
D.bIJ=new A.bz(1,B.bb,D.h1n,null)
D.fUB=new A.B("MADE BY THE ONE WHO PLANTED THE TREE",null,T.tL,null,null,null,null,null,null,null,null,null)
D.bJg=new A.bz(1,B.bb,D.fUB,null)
D.fZu=new A.B("Tell the AI what to fix",null,B.dm,null,null,null,null,null,null,null,null,null)
D.bJy=new A.bz(1,B.bb,D.fZu,null)
D.fzU=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0s=new A.B("Worksheets",null,D.fzU,null,null,null,null,null,null,null,null,null)
D.fA5=new A.F(!0,E.ag3,null,null,null,null,13,B.cB,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_j=new A.B("Track your project spending",null,D.fA5,null,null,null,null,null,null,null,null,null)
D.d6A=w([D.h0s,B.ax,D.h_j],x.p)
D.bwZ=new A.fj(B.ah,B.e,B.j,B.E,null,B.p,null,0,D.d6A,null)
D.bJE=new A.bz(1,B.bb,D.bwZ,null)
D.fuQ=new A.F(!0,E.kr,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFT=new A.B("FAMILY LIBRARY",null,D.fuQ,null,null,null,null,null,null,null,null,null)
D.bJX=new A.bz(1,B.bb,D.fFT,null)
D.OF=new C.Iv("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wx=new C.Iw(0,"male")
D.ox=new C.Iw(1,"female")
D.z1=new C.Iw(2,"unknown")
D.uE=new C.amc(0,"owner")
D.OG=new C.amc(1,"editor")
D.kV=new C.amc(2,"viewer")
D.aoS=new A.a0(61199,"MaterialIcons",!1)
D.bPf=new A.a0(61504,"MaterialIcons",!1)
D.bPg=new A.a0(61505,"MaterialIcons",!1)
D.bPi=new A.a0(61587,"MaterialIcons",!1)
D.bPp=new A.a0(61890,"MaterialIcons",!1)
D.bQh=new A.a0(63034,"MaterialIcons",!0)
D.bQz=new A.a0(63153,"MaterialIcons",!1)
D.bR5=new A.a0(63429,"MaterialIcons",!1)
D.ar_=new A.a0(984520,"MaterialIcons",!1)
D.bPO=new A.a0(62776,"MaterialIcons",!1)
D.bTq=new A.ae(D.bPO,26,B.b2,null,null,null)
D.bOd=new A.a0(57648,"MaterialIcons",!1)
D.bTK=new A.ae(D.bOd,14,B.c,null,null,null)
D.bU1=new A.ae(B.Hn,17,null,null,null,null)
D.bU7=new A.ae(B.a2p,null,B.bR,null,null,null)
D.bUy=new A.ae(E.a2x,null,null,null,null,null)
D.bUB=new A.ae(B.j6,18,E.kr,null,null,null)
D.a2g=new A.a0(62044,"MaterialIcons",!1)
D.bUG=new A.ae(D.a2g,null,B.aW,null,null,null)
D.bUN=new A.ae(B.ze,18,B.c,null,null,null)
D.bVu=new A.ae(B.ed,16,null,null,null,null)
D.bVB=new A.ae(D.a2g,32,B.aW,null,null,null)
D.bVU=new A.ae(E.aoT,18,B.cH,null,null,null)
D.bWZ=new A.ae(B.Hy,22,B.ay,null,null,null)
D.bXa=new A.ae(B.ed,22,B.b2,null,null,null)
D.bXn=new A.ae(Y.a2l,22,B.c,null,null,null)
D.bXt=new A.ae(B.uP,52,B.c,null,null,null)
D.bXD=new A.ae(B.Hy,30,B.ay,null,null,null)
D.bXW=new A.ae(B.a2C,null,B.c,null,null,null)
D.arH=new A.ae(B.v_,22,B.c,null,null,null)
D.bY4=new A.ae(B.ed,17,null,null,null,null)
D.bYt=new A.ae(B.wN,26,B.cH,null,null,null)
D.bZe=new A.ae(B.a2K,16,null,null,null,null)
D.c__=new A.ae(B.uP,24,B.c,null,null,null)
D.c_4=new A.ae(B.P9,20,B.tl,null,null,null)
D.c_9=new A.ae(B.Hl,null,B.bR,null,null,null)
D.c_i=new A.ae(B.j6,18,B.c,null,null,null)
D.c_Y=new A.ae(B.cz,22,B.ab,null,null,null)
D.c0P=new A.ae(B.ej,16,B.ab,null,null,null)
D.c10=new A.ae(D.a2g,20,B.aW,null,null,null)
D.as6=new A.ae(B.hM,20,null,null,null,null)
D.c1x=new A.ae(B.cz,18,D.kO,null,null,null)
D.c1O=new A.ae(B.zm,28,B.c,null,null,null)
D.c1Z=new A.ae(B.OZ,null,B.fi,null,null,null)
D.c2j=new A.ae(B.zm,24,B.c,null,null,null)
D.c2L=new A.ae(B.uP,null,B.aW,null,null,null)
D.c2M=new A.ae(B.jH,20,B.cH,null,null,null)
D.c35=new A.ae(B.Hn,16,null,null,null,null)
D.c4E=new A.e6(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.k3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eN,!0,null,null,null,null)
D.asP=new C.a6E(10,null)
D.c59=new C.a6E(12,null)
D.c5a=new C.a6E(14,null)
D.dni=w([B.bx,B.aW,B.fp,B.b2],x.O)
D.c6l=new A.a8(B.aA,B.aF,B.x,D.dni,null,null)
D.bpL=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bvV=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d33=w([D.bpL,D.bvV],x.O)
D.c6w=new A.a8(B.b4,B.b8,B.x,D.d33,null,null)
D.dhc=w([B.eX,B.fX,B.fp],x.O)
D.c6B=new A.a8(B.aA,B.aF,B.x,D.dhc,null,null)
D.aiU=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bgt=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d5h=w([D.aiU,D.bgt],x.O)
D.c78=new A.a8(B.b4,B.b8,B.x,D.d5h,null,null)
D.bkd=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aC2=w([D.bkd,D.aiU],x.O)
D.c7s=new A.a8(B.aA,B.aF,B.x,D.aC2,null,null)
D.ahB=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bmO=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dgf=w([D.ahB,D.bmO],x.O)
D.c85=new A.a8(B.a7,B.aa,B.x,D.dgf,null,null)
D.duh=w([B.bD,B.mP],x.O)
D.c87=new A.a8(B.b4,B.b8,B.x,D.duh,null,null)
D.bpG=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dvd=w([D.bpG,D.kO,D.kO,I.Na],x.O)
D.dxL=w([0,0.07,0.9,1],x.n)
D.c8C=new A.a8(B.a7,B.aa,B.x,D.dvd,D.dxL,null)
D.c8L=new A.a8(B.aA,B.aF,B.x,B.SN,null,null)
D.d0Q=w([B.aE,D.lC],x.O)
D.c8O=new A.a8(B.a7,B.aa,B.x,D.d0Q,null,null)
D.dtQ=w([B.b2,B.aW,B.bR],x.O)
D.c9N=new A.a8(B.aA,B.aF,B.x,D.dtQ,null,null)
D.ce5=w([10,20,30],x.t)
D.co1=w([-1,-0.4,0.3,1],x.n)
D.cvt=w([B.bx,B.b2,B.eX],x.O)
D.cvC=w([B.bq,B.aE,B.kq],x.O)
D.cvE=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cwl=w([30,140,262,360],x.n)
D.bo5=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cBU=w([D.bo5,E.ais],x.O)
D.en1=new A.o(1,2)
D.fcM=new A.cU(B.aU,D.en1,3)
D.ayY=w([D.fcM],x.F)
D.cJl=w([B.hs,B.ch,B.fo],x.O)
D.cM5=w([B.bL,B.bw,B.br],x.O)
D.bKN=new C.uT("classic","Classic leather","Gold-edged brown leather",D.aC2,E.kr,E.kr,"\u2766",B.K,!0,!1,!1,!1)
D.bfy=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.buH=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d8h=w([D.bfy,D.buH],x.O)
D.aix=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bKI=new C.uT("ornate","Ornate gold","Double gold border and flourishes",D.d8h,D.aix,D.aix,"\u2726",B.K,!0,!0,!0,!1)
D.bjM=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bqw=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d_L=w([D.bjM,D.bqw],x.O)
D.bKH=new C.uT("parchment","Parchment","Old paper with dark ink",D.d_L,D.Ga,L.j2,"\u2767",B.K,!0,!1,!1,!0)
D.afK=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bsV=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.ds2=w([D.afK,D.bsV],x.O)
D.bny=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bsa=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bKK=new C.uT("minimal","Clean paper","Plain and elegant, like a printed book",D.ds2,D.bny,D.bsa,"",B.K,!0,!0,!1,!0)
D.bKM=new C.uT("midnight","Midnight","Deep blue with silver stars",K.aCm,B.cv,B.cc,"\u2727",B.K,!0,!0,!1,!1)
D.bKG=new C.uT("emerald","Emerald library","Green cloth, title on the left",V.azm,E.kr,B.fz,"\u25c6",B.bn,!0,!1,!1,!1)
D.btp=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dq3=w([B.el,D.btp],x.O)
D.boS=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bq4=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bKL=new C.uT("rose","Rose vintage","Burgundy with rose-gold lettering",D.dq3,D.boS,D.bq4,"\u2740",B.K,!0,!1,!0,!1)
D.duO=w([B.cs,F.ny],x.O)
D.bKJ=new C.uT("modern","Modern","Dark, bold, left-aligned",D.duO,B.aH,B.c,"",B.bn,!1,!0,!1,!1)
D.a4Q=w([D.bKN,D.bKI,D.bKH,D.bKK,D.bKM,D.bKG,D.bKL,D.bKJ],A.as("O<uT>"))
D.cP2=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.duC=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bKY=new C.lr('What does "Ubuntu" mean?',D.duC,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d1v=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bL0=new C.lr("In Swahili, what do we call a grandmother?",D.d1v,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d1m=w(["Babu","Mama","Baba","Dada"],x.s)
D.bKW=new C.lr("In Swahili, what do we call a grandfather?",D.d1m,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d2E=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bL_=new C.lr("What is a sister called in Swahili?",D.d2E,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d7J=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bKX=new C.lr("What is a brother called in Swahili?",D.d7J,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d1l=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bL7=new C.lr("Which word means father in Swahili?",D.d1l,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dvO=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bL6=new C.lr('"Umoja ni nguvu" means...',D.dvO,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dsK=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bL8=new C.lr('"Haba na haba hujaza kibaba" teaches us...',D.dsK,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d5p=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bL5=new C.lr('The African saying "It takes a village to raise a child" means...',D.d5p,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dw7=w(["The elders","The market","The river","The drum"],x.s)
D.bL1=new C.lr("Who is the traditional keeper of the family stories?",D.dw7,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cTd=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bKZ=new C.lr("Why do families sit round the fire at night?",D.cTd,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.duQ=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bL3=new C.lr('What does "Harambee" mean?',D.duQ,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.day=w(["An elder","A baby","A market","A cow"],x.s)
D.bL2=new C.lr('"Mzee" is a respectful word for...',D.day,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dpV=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bL4=new C.lr('What does "Shikamoo" show?',D.dpV,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.azh=w([D.bKY,D.bL0,D.bKW,D.bL_,D.bKX,D.bL7,D.bL6,D.bL8,D.bL5,D.bL1,D.bKZ,D.bL3,D.bL2,D.bL4],x.J)
D.cXB=w([90,360],x.n)
D.d_i=w([B.bR,B.bl],x.O)
D.bpu=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d_X=w([D.afK,D.bpu],x.O)
D.d0z=w([-1,-0.3,0.4,1],x.n)
D.d1r=w([0,0.45,0.72,0.92,1],x.n)
D.bjI=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d1J=w([D.bjI,B.bB],x.O)
D.bhq=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.akg=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d2h=w([B.dz,D.bhq,D.akg],x.O)
D.d3j=w([B.b9,B.jj,B.pd],x.O)
D.bkf=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bs1=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bh6=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d3o=w([D.bkf,D.bs1,D.bh6],x.O)
D.d3J=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d3T=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hvx=new C.ae4(78,424,48,44,56)
D.hvv=new C.ae4(214,396,34,34,42)
D.hvw=new C.ae4(442,452,56,50,64)
D.aAf=w([D.hvx,D.hvv,D.hvw],A.as("O<ae4>"))
D.d4r=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bgn=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.blZ=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dxH=w([D.ahB,D.bgn,D.blZ],x.O)
D.bKO=new C.uU("leather","Leather",D.dxH,"vintage")
D.dbz=w([B.d7,B.G1,A9.YK],x.O)
D.bKV=new C.uU("midnight","Midnight",D.dbz,"starry")
D.d3k=w([B.er,B.e9,B.lf],x.O)
D.bKU=new C.uU("forest","Forest",D.d3k,"story")
D.dzI=w([B.et,B.el,B.kt],x.O)
D.bKR=new C.uU("burgundy","Burgundy",D.dzI,"royal")
D.cLE=w([B.aE,B.ol,B.o8],x.O)
D.bKS=new C.uU("royal","Royal",D.cLE,"royal")
D.d5V=w([B.bw,B.cs,F.ny],x.O)
D.bKP=new C.uU("charcoal","Charcoal",D.d5V,"geo")
D.dxQ=w([B.c6,B.dN,B.yh],x.O)
D.bKT=new C.uU("sunset","Sunset",D.dxQ,"sunset")
D.dyx=w([B.jj,B.Gb,B.YN],x.O)
D.bKQ=new C.uU("ocean","Ocean",D.dyx,"band")
D.zR=w([D.bKO,D.bKV,D.bKU,D.bKR,D.bKS,D.bKP,D.bKT,D.bKQ],A.as("O<uU>"))
D.d6q=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d71=w([B.an,B.aM,B.a_],x.O)
D.d8m=w([B.el,B.e9,B.d7,B.hd,B.yl,B.cH,B.ku,B.e6,B.d_],x.O)
D.d8n=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fcN=new A.cU(B.dv,B.dI,8)
D.d8y=w([D.fcN],x.F)
D.d9F=w([B.bT,B.dN,B.kp],x.O)
D.bii=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bmg=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bqr=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.d9V=w([D.bii,G.aj2,D.bmg,D.bqr,D.akg],x.O)
D.dab=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.dan=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bfJ=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.blD=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.daQ=w([D.bfJ,D.ah3,D.blD],x.O)
D.dbu=w([B.bT,B.hG],x.O)
D.dbA=w([G.nq,B.ig,G.afV,B.cP],x.O)
D.dda=w([B.cP,G.nq,B.ig,D.lD,B.cP],x.O)
D.ddM=w([B.aQ,B.w7,B.y5],x.O)
D.aBg=w(["True","False"],x.s)
D.eKc=new A.y(-0.65,0.6)
D.eWS=new A.y(-0.2,0.95)
D.eXX=new A.y(0.25,0.95)
D.eNG=new A.y(0.7,0.6)
D.eYw=new A.y(1,0.1)
D.dex=w([As.UA,D.eKc,D.eWS,D.eXX,D.eNG,D.eYw],x.G)
D.bon=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.buz=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bji=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.deD=w([D.bon,D.buz,D.bji],x.O)
D.deH=w([B.bM,B.c0,B.dl,B.aQ],x.O)
D.dfb=w([B.hY,B.c6,B.rF],x.O)
D.dfz=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dfL=w([B.eX,B.cH],x.O)
D.bpP=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dga=w([D.bpP,D.afI],x.O)
D.dgl=w([B.cG,B.fq,B.fH],x.O)
D.dgx=w([B.aH,B.bl,B.d7],x.O)
D.dh9=w([B.es,B.cY,B.e9],x.O)
D.dht=w([B.dM,B.d7,B.G1],x.O)
D.dhx=w([B.bj,B.mK,B.d_],x.O)
D.dhP=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bp2=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bnh=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.di8=w([D.bp2,D.ah_,D.bnh],x.O)
D.diX=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dk_=w([1,0,7,6,3,2],x.t)
D.a5O=w(["leather","linen","plain","stars","rays"],x.s)
D.dkb=w([0.5,2,3.6],x.n)
D.dkJ=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bT7=new A.a0(985219,"MaterialIcons",!1)
D.bSF=new A.a0(983781,"MaterialIcons",!1)
D.aBJ=w([B.a2p,B.hN,B.lO,B.ij,D.bT7,B.HI,B.qL,D.bSF,K.aqO,B.D2,B.qN,B.n2],A.as("O<a0>"))
D.a5S=w(["double","single","corners","none"],x.s)
D.bKD=new C.zG("Little Seed","\ud83c\udf31",0)
D.bKF=new C.zG("Young Listener","\ud83d\udc42",40)
D.bKE=new C.zG("Storyteller","\ud83e\ude98",120)
D.bKC=new C.zG("Village Pride","\ud83c\udfe1",300)
D.bKA=new C.zG("Keeper of Roots","\ud83c\udf33",700)
D.bKB=new C.zG("Elder of the Fire","\ud83d\udd25",1500)
D.aBL=w([D.bKD,D.bKF,D.bKE,D.bKC,D.bKA,D.bKB],A.as("O<zG>"))
D.dlS=w([B.dc,B.bo,B.e6],x.O)
D.dm7=w([],x.C)
D.DD=w([],x.u)
D.aLR=new A.o(225,528)
D.eLS=new A.y(D.aLR,1)
D.enM=new A.o(350,548)
D.eS9=new A.y(D.enM,0.95)
D.aLM=new A.o(158,656)
D.eS2=new A.y(D.aLM,1.12)
D.eox=new A.o(92,544)
D.eHq=new A.y(D.eox,0.93)
D.enP=new A.o(398,614)
D.eO2=new A.y(D.enP,1.04)
D.enD=new A.o(318,662)
D.eCT=new A.y(D.enD,1.1)
D.a6_=w([D.eLS,D.eS9,D.eS2,D.eHq,D.eO2,D.eCT],A.as("O<+(o,G)>"))
D.do9=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.doB=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dpD=w([B.cP,G.nq,B.ig,D.lD,B.cP,B.ig],x.O)
D.dr2=w([B.av,B.fq,B.hd],x.O)
D.drE=w([-70,58],x.n)
D.drG=w([-70,-30,20],x.n)
D.dsI=w([B.bj,B.mK,B.Gm],x.O)
D.dsZ=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dMZ=new C.lW("construction","Construction","Jobsite & builds",B.uM)
D.dN5=new C.lW("house","Home Build","Houses & rooms",B.wI)
D.dMW=new C.lW("grocery","Grocery","Store & pantry",B.a3j)
D.dMV=new C.lW("calculator","Calculations","Math & estimates",B.Pf)
D.dN3=new C.lW("lumber","Materials","Lumber & supplies",B.Pz)
D.dMS=new C.lW("kitchen","Kitchen","Remodel & meals",A3.PA)
D.bSD=new A.a0(983756,"MaterialIcons",!1)
D.dMX=new C.lW("landscape","Landscaping","Yard & garden",D.bSD)
D.dMR=new C.lW("plumbing","Plumbing","Pipes & water",B.pF)
D.dN6=new C.lW("electrical","Electrical","Wiring & power",B.hz)
D.dMP=new C.lW("store","Retail Shop","Daily business",B.lm)
D.dMQ=new C.lW("paint_remodel","Paint & Remodel","Colors & walls",A3.Pu)
D.bS2=new A.a0(983311,"MaterialIcons",!1)
D.dN2=new C.lW("roofing","Roofing","Roofs & exteriors",D.bS2)
D.bSQ=new A.a0(983986,"MaterialIcons",!1)
D.dMO=new C.lW("warehouse","Warehouse","Storage & stock",D.bSQ)
D.dN0=new C.lW("vehicles","Vehicles","Fleet & transport",B.HJ)
D.bPQ=new A.a0(62785,"MaterialIcons",!1)
D.dMU=new C.lW("farm","Farm","Crops & livestock",D.bPQ)
D.dMT=new C.lW("restaurant","Restaurant","Food & catering",B.uX)
D.dN_=new C.lW("tools","Tools","Workshop gear",B.HF)
D.dN4=new C.lW("wallet","Cash & Wallet","Quick spending",B.jH)
D.bR0=new A.a0(63395,"MaterialIcons",!1)
D.dN1=new C.lW("concrete","Concrete","Foundation work",D.bR0)
D.dMY=new C.lW("blueprint","Blueprint","Plans & design",An.apm)
D.a6m=w([D.dMZ,D.dN5,D.dMW,D.dMV,D.dN3,D.dMS,D.dMX,D.dMR,D.dN6,D.dMP,D.dMQ,D.dN2,D.dMO,D.dN0,D.dMU,D.dMT,D.dN_,D.dN4,D.dN1,D.dMY],A.as("O<lW>"))
D.dtv=w([B.bv,B.bo],x.O)
D.dui=w([B.iH,B.of,B.dW],x.O)
D.ahQ=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.aiP=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bnC=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bff=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aCV=w([D.ahQ,D.aiP,D.bnC,D.bff],x.O)
D.dvu=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a6x=w(["top","middle","bottom"],x.s)
D.dwV=w([B.cp,B.bl,B.d7],x.O)
D.aDf=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b90=new A.ac(0,B.G,B.aU,B.H,14)
D.aDi=w([D.b90],x.V)
D.bmw=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dxA=w([D.agj,D.ZN,D.bmw],x.O)
D.dxB=w([B.b5,B.cY,B.e9],x.O)
D.enm=new A.o(24,-8)
D.eo4=new A.o(48,0)
D.eni=new A.o(24,6)
D.dzf=w([B.H,D.enm,D.eo4,D.eni],x.g)
D.dzE=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.ejS={top:0,middle:1,bottom:2}
D.dCT=new A.bv(D.ejS,["Top","Middle","Bottom"],x.r)
D.ejs={double:0,single:1,corners:2,none:3}
D.dCZ=new A.bv(D.ejs,["Double line","One line","Corners","None"],x.r)
D.ekI={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dEu=new A.bv(D.ekI,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dEG=new A.bv(B.i4,[],A.as("bv<H,+(n,n)>"))
D.ejK={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.DQ=new A.bv(D.ejK,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.as("bv<n,H>"))
D.dHn=new H.NT(32,null)
D.dHo=new H.NT(40,null)
D.dHp=new H.NT(46,null)
D.aLj=new C.au4(null)
D.emd=new A.o(0,40)
D.eme=new A.o(0,412)
D.emg=new A.o(0,900)
D.emq=new A.o(0,-34)
D.emr=new A.o(0,-46)
D.emt=new A.o(0,-74)
D.emw=new A.o(100,300)
D.emx=new A.o(10,14)
D.emA=new A.o(10,-10)
D.emF=new A.o(10,-46)
D.emG=new A.o(10,-58)
D.emH=new A.o(116,442)
D.emJ=new A.o(11,-1)
D.emK=new A.o(11,-10)
D.emL=new A.o(11,-21)
D.aLH=new A.o(11,-60)
D.emS=new A.o(14,-2)
D.emT=new A.o(150,520)
D.a8w=new A.o(150,592)
D.emW=new A.o(15,-15)
D.emX=new A.o(16,-1)
D.en0=new A.o(190,444)
D.en3=new A.o(1,5)
D.enb=new A.o(21,-78)
D.enc=new A.o(222,615)
D.JC=new A.o(225,300)
D.a8z=new A.o(225,574)
D.enl=new A.o(24,-52)
D.enn=new A.o(250,210)
D.eny=new A.o(2,-56)
D.aLV=new A.o(300,0)
D.enz=new A.o(300,440)
D.enC=new A.o(318,476)
D.enF=new A.o(324,144)
D.a8C=new A.o(332,150)
D.enH=new A.o(335,585)
D.enI=new A.o(338,140)
D.enJ=new A.o(340,158)
D.enL=new A.o(34,-60)
D.Eg=new A.o(36,-24)
D.enN=new A.o(372,470)
D.enO=new A.o(390,455)
D.enX=new A.o(42,468)
D.enY=new A.o(431,510)
D.enZ=new A.o(431,520)
D.eo_=new A.o(45,-92)
D.eo0=new A.o(46,20)
D.eo1=new A.o(46,-92)
D.eo2=new A.o(46,-94)
D.eo3=new A.o(47,-4)
D.eo5=new A.o(48,-4)
D.eod=new A.o(4,-26)
D.eol=new A.o(60,455)
D.eos=new A.o(8,14)
D.eow=new A.o(8,-76)
D.eoy=new A.o(95,575)
D.eoz=new A.o(98,-24)
D.eoB=new A.o(9,-2)
D.eoC=new A.o(9,-58)
D.aM3=new A.o(9,-79)
D.eoD=new A.o(9,-9)
D.epf=new A.o(16.5,8)
D.eph=new A.o(3.2,0)
D.epj=new A.o(-16.5,8)
D.epq=new A.o(16.5,2)
D.ept=new A.o(-3.2,0)
D.epC=new A.o(9.5,6)
D.epG=new A.o(-10,14)
D.epH=new A.o(-10,-12)
D.epI=new A.o(-10,-58)
D.epK=new A.o(-11,-1)
D.epL=new A.o(-11,-10)
D.epN=new A.o(-11,-60)
D.epO=new A.o(-12,-14)
D.epP=new A.o(-12,-16)
D.epW=new A.o(-14,-2)
D.epZ=new A.o(-15,-15)
D.eq_=new A.o(-15,-3)
D.eq1=new A.o(-16,-1)
D.eqi=new A.o(-24,-52)
D.eqp=new A.o(-2,-34)
D.eqq=new A.o(-2,-38)
D.eqs=new A.o(-30,-100)
D.a8D=new A.o(-36,-24)
D.eqD=new A.o(-4,-26)
D.eqF=new A.o(-4,-6)
D.eqP=new A.o(-8,-3)
D.eqQ=new A.o(-8,-48)
D.eqT=new A.o(-9,-2)
D.eqV=new A.o(-9,-58)
D.eqW=new A.o(-9,-79)
D.eqX=new A.o(-9,-9)
D.eqZ=new A.o(-9.5,6)
D.erc=new A.o(-16.5,2)
D.fNa=new A.B("Write a new book",null,B.hp,null,B.K,null,null,null,null,null,null,null)
D.erM=new A.D(B.kx,D.fNa,null)
D.h0W=new A.B("Tap to go on",null,B.vE,null,null,null,null,null,null,null,null,null)
D.es7=new A.D(B.lh,D.h0W,null)
D.arf=new A.ae(B.i0,18,B.c,null,null,null)
D.fGd=new A.B("Add",null,B.l4,null,null,null,null,null,null,null,null,null)
D.deV=w([D.arf,B.r9,D.fGd],x.p)
D.f9U=new A.c8(B.aL,B.e,B.P,B.l,null,B.p,null,0,D.deV,null)
D.esa=new A.D(B.nG,D.f9U,null)
D.esb=new A.D(E.alo,A7.Y6,null)
D.fzP=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJo=new A.B("New Project",null,D.fzP,null,null,null,null,null,null,null,null,null)
D.djj=w([D.arf,B.ae,D.fJo],x.p)
D.f9X=new A.c8(B.aL,B.e,B.P,B.l,null,B.p,null,0,D.djj,null)
D.esp=new A.D(B.hK,D.f9X,null)
D.fLV=new A.B("Choose your header",null,A0.vD,null,null,null,null,null,null,null,null,null)
D.esL=new A.D(B.i_,D.fLV,null)
D.beu=new A.fk(2.2,null,null,null,null,B.cH,null,null,null,null)
D.ffE=new A.a5(22,22,D.beu,null)
D.bcA=new A.ch(B.A,null,null,D.ffE,null)
D.esQ=new A.D(B.a07,D.bcA,null)
D.bDi=new A.S(14,2,14,6)
D.h_2=new A.B("The top of your book. Tap a design to see it.",null,Q.tJ,null,null,null,null,null,null,null,null,null)
D.esR=new A.D(D.bDi,D.h_2,null)
D.fL4=new A.B("\ud83c\udfc6 A new record!",null,B.h1,null,null,null,null,null,null,null,null,null)
D.esT=new A.D(B.lh,D.fL4,null)
D.eus=new A.j2(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.euv=new A.j2(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aMF=new A.j2(1,0.9607843137254902,0.48627450980392156,0)
D.JL=new A.j2(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.Ar=new A.j2(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.euB=new A.j2(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hxG=new C.bjx(null)
D.by7=new A.mJ(D.hxG,null,B.az,null,null)
D.aQi=new A.cK(0,0,0,0,null,null,D.by7,null)
D.fGf=new A.B("\ud83c\udfc5",null,B.aaV,null,null,null,null,null,null,null,null,null)
D.ez0=new A.cK(null,0,-34,null,null,null,D.fGf,null)
D.eH5=new A.y("E","Sit by the fire again")
D.eMG=new A.y("C","Good Learner")
D.eQ6=new A.y("D","Still Growing")
D.eUG=new A.y(-42,42)
D.eW0=new A.y("B","Faithful Listener")
D.eXZ=new A.y("A","Keeper of the Family")
D.f08=new A.b5(-17,0.7,0)
D.f0I=new A.b5(-8,0.95,1.3)
D.f1L=new A.b5(18,0.65,5.2)
D.f1N=new A.b5(0,1.15,2.6)
D.f27=new A.b5(9,0.9,3.9)
D.f41=new A.cu([0,0,1,1])
D.aRN=new A.a1(0,0,520,160)
D.f6W=new A.a1(10,612,440,618)
D.f6X=new A.a1(10,612,440,628)
D.f7_=new A.a1(14,-64,34,-12)
D.f72=new A.a1(300,336,350,348)
D.a9x=new A.a1(30,96,420,346)
D.f73=new A.a1(30,-9,46,1)
D.f74=new A.a1(4,2,11,14)
D.f76=new A.a1(-8,-12.5,8,-7)
D.f77=new A.a1(-16.5,-21,16.5,1)
D.f78=new A.a1(60,342,88,348)
D.UB=new A.a1(66,-66,94,-36)
D.f79=new A.a1(6,8,10,14)
D.f7c=new A.a1(95,343,115,348)
D.f7d=new A.a1(-6.5,-74,6.5,-58)
D.f7j=new A.a1(-100,-74,100,-12)
D.f7k=new A.a1(-10,8,-6,14)
D.f7l=new A.a1(-11,2,-4,14)
D.f7m=new A.a1(-11,-70,11,-56)
D.f7t=new A.a1(-13,-24,13,-4)
D.f7z=new A.a1(-15,-21,15,0)
D.f7C=new A.a1(-16,-21,16,1)
D.f7D=new A.a1(-16,-21,16,2)
D.f7G=new A.a1(-16,-26,16,-6)
D.f7Q=new A.a1(-230,-26,230,26)
D.f8d=new A.a1(-38,-26,12,-6)
D.f8h=new A.a1(-3,-70,3,-63)
D.f8i=new A.a1(-44,-22,44,0)
D.f8k=new A.a1(-46,-9,-30,1)
D.aRR=new A.a1(-80,-190,80,20)
D.f8r=new A.a1(-8,-26,40,-6)
D.f8s=new A.a1(-98,-80,92,-75)
D.f8t=new A.a1(-9,-15,9,-9)
D.fZB=new A.B("Let the AI write it from your tree",null,B.iF,null,B.K,null,null,null,null,null,null,null)
D.bLG=new A.dl(1,B.cn,D.fZB,null)
D.dbt=w([E.a3O,B.ae,D.bLG],x.p)
D.f9x=new A.c8(B.aL,B.e,B.P,B.l,null,B.p,null,0,D.dbt,null)
D.fFU=new A.B("Save member",null,B.ci,null,null,null,null,null,null,null,null,null)
D.dro=w([D.as6,B.ae,D.fFU],x.p)
D.f9I=new A.c8(B.aL,B.ba,B.j,B.l,null,B.p,null,0,D.dro,null)
D.bXg=new A.ae(B.ii,14,B.b2,null,null,null)
D.ftm=new A.F(!0,B.b2,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJO=new A.B("Cashier",null,D.ftm,null,null,null,null,null,null,null,null,null)
D.djQ=w([D.bXg,B.bm,D.fJO],x.p)
D.f9M=new A.c8(B.aL,B.e,B.P,B.l,null,B.p,null,0,D.djQ,null)
D.fFV=new A.B("Transfer & settings",null,B.dm,null,null,null,null,null,null,null,null,null)
D.bJn=new A.bz(1,B.bb,D.fFV,null)
D.d2N=w([D.arH,B.au,D.bJn],x.p)
D.f9N=new A.c8(B.aL,B.e,B.j,B.l,null,B.p,null,0,D.d2N,null)
D.fek=new A.av(16,40)
D.fep=new A.av(22,64)
D.few=new A.av(280,88)
D.ffk=new A.a5(30,null,null,null)
D.fEZ=new A.B("The teacher is writing\u2026",null,B.AN,null,null,null,null,null,null,null,null,null)
D.bdI=new A.ch(B.A,null,null,D.fEZ,null)
D.hrz=new A.bC("w",x.W)
D.ffK=new A.a5(null,56,D.bdI,D.hrz)
D.fgx=new A.hH(5,8,8,1,null)
D.fgF=new A.hH(2,12,12,1.05,null)
D.fJu=new A.B("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fhn=new A.b0(D.fJu,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fJJ=new A.B("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aU7=new A.b0(D.fJJ,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fSb=new A.B("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fhR=new A.b0(D.fSb,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h1Y=new A.B("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fhW=new A.b0(D.h1Y,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fLT=new A.B("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fi2=new A.b0(D.fLT,null,null,null,null,null,null,null,null,null,null,null,null,B.h6,!1,null,null,null,B.t,null)
D.h_f=new A.B("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aUb=new A.b0(D.h_f,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fLR=new A.B("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fis=new A.b0(D.fLR,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fGw=new A.B("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fiu=new A.b0(D.fGw,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fPD=new A.B("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fiA=new A.b0(D.fPD,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h2I=new A.B("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fjf=new A.b0(D.h2I,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fYv=new A.B("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fjF=new A.b0(D.fYv,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h21=new A.B("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fjI=new A.b0(D.h21,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fTS=new A.B("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fjK=new A.b0(D.fTS,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fNN=new A.B("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fjL=new A.b0(D.fNN,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fNO=new A.B("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fkM=new A.b0(D.fNO,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fJw=new A.B("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fl3=new A.b0(D.fJw,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fLw=new A.B("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fln=new A.b0(D.fLw,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fTi=new A.B("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.flE=new A.b0(D.fTi,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fOD=new A.B("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.flF=new A.b0(D.fOD,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fyv=new A.F(!0,B.bE,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fng=new A.eo("\u2665",null,null,B.cL,null,null,null,null,null,null,D.fyv)
D.fvG=new A.F(!0,B.aS,null,null,null,null,28,B.U,B.cI,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnw=new A.eo("Today: how well do you know the family?",null,null,B.cL,null,null,null,null,null,null,D.fvG)
D.fnN=new A.F(!0,B.qa,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foX=new A.F(!0,D.kO,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpl=new A.F(!0,D.kO,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpp=new A.F(!0,B.cP,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpy=new A.F(!0,D.fA,null,null,null,null,15,B.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpJ=new A.F(!0,D.fA,null,null,null,null,13,B.I,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq2=new A.t8(!0,B.tv,null,null,null,null,B.dF,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqi=new A.F(!0,B.cP,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fql=new A.F(!0,D.kO,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqm=new A.F(!0,B.cP,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqr=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqu=new A.F(!0,B.cP,null,null,null,null,15,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr_=new A.F(!0,B.b2,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr0=new A.F(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr2=new A.F(!0,B.aS,null,null,null,null,15.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fru=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVo=new A.F(!0,B.aR,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVp=new A.F(!0,D.lC,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frV=new A.F(!0,B.cP,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ab_=new A.t8(!0,B.U6,null,null,null,null,B.dF,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Vv=new A.F(!0,B.cP,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs4=new A.F(!0,B.a_,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs9=new A.F(!0,D.fA,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsx=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftI=new A.F(!0,D.fA,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVz=new A.F(!0,D.fA,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu1=new A.F(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuc=new A.F(!0,D.fA,null,null,null,null,null,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fue=new A.F(!0,null,null,null,null,null,8,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuk=new A.F(!0,L.j2,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVD=new A.F(!0,D.fA,null,null,null,null,14.5,B.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvg=new A.F(!0,D.fA,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvz=new A.F(!0,D.fA,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvB=new A.F(!0,B.a_,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvD=new A.F(!0,B.cP,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw0=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A6.IC,null,null,null)
D.aVS=new A.F(!0,D.fA,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwo=new A.F(!0,B.a_,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwK=new A.F(!0,B.fi,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx7=new A.F(!0,B.bR,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxc=new A.F(!0,B.bD,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxo=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxr=new A.F(!0,D.fA,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxz=new A.F(!0,D.Ga,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxK=new A.F(!0,B.b2,null,null,null,null,13,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy8=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyf=new A.F(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Du,null,null,null)
D.fyG=new A.F(!0,B.cP,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyP=new A.F(!0,B.cH,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz1=new A.F(!0,D.lD,null,null,null,null,13,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWc=new A.F(!0,D.fA,null,null,null,null,null,B.I,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KS=new A.F(!0,B.cP,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWe=new A.F(!0,B.cP,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Du,null,null,null)
D.fzl=new A.F(!0,B.bR,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzp=new A.F(!0,G.nq,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzN=new A.F(!0,B.b2,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA4=new A.F(!0,D.fA,null,null,null,null,15,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAr=new A.F(!0,B.c,null,null,null,null,null,B.I,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAQ=new A.F(!0,D.fA,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBl=new A.F(!0,D.fA,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBq=new A.F(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBz=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abs=new A.F(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abu=new A.F(!0,D.lC,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDh=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDz=new A.F(!0,B.aS,null,null,null,null,27,B.U,B.cI,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDG=new A.F(!0,L.j2,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDO=new A.F(!0,L.j2,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEh=new A.B("Time:",null,B.hn,null,null,null,null,null,null,null,null,null)
D.fEC=new A.B("\ud83c\udfae",null,K.abj,null,null,null,null,null,null,null,null,null)
D.fED=new A.B("Themes",null,B.pU,null,null,null,null,null,null,null,null,null)
D.fF7=new A.B("\ud83c\udfb2",null,B.xq,null,null,null,null,null,null,null,null,null)
D.fFb=new A.B("Delete this game?",null,B.iF,null,null,null,null,null,null,null,null,null)
D.fFi=new A.B("Add Item",null,B.ci,null,null,null,null,null,null,null,null,null)
D.ftW=new A.F(!0,B.a_,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFJ=new A.B("Debt receipt",null,D.ftW,null,B.K,null,null,null,null,null,null,null)
D.aWs=new A.F(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fG1=new A.B("Person who owes",null,D.aWs,null,null,null,null,null,null,null,null,null)
D.fGZ=new A.B("Notes",null,B.ab7,null,null,null,null,null,null,null,null,null)
D.fHp=new A.B("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fsO=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHs=new A.B("Share",null,D.fsO,null,null,null,null,null,null,null,null,null)
D.fIq=new A.B("Move your family trees",null,I.abq,null,null,null,null,null,null,null,null,null)
D.fJ5=new A.B("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fJI=new A.B("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fK5=new A.B("SAVE",null,D.KS,null,null,null,null,null,null,null,null,null)
D.fKJ=new A.B("The round button is the right answer.",null,Q.xn,null,null,null,null,null,null,null,null,null)
D.fL3=new A.B("Remove this book?",null,B.h1,null,null,null,null,null,null,null,null,null)
D.fzK=new A.F(!0,B.cP,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Du,null,null,null)
D.fLB=new A.B("Fireside Stories",null,D.fzK,null,null,null,null,null,null,null,null,null)
D.aWY=new A.B("Download",null,B.ci,null,null,null,null,null,null,null,null,null)
D.fMh=new A.B("What should the AI do?",null,B.dm,null,null,null,null,null,null,null,null,null)
D.fss=new A.F(!0,D.lC,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMw=new A.B("REPORT CARD",null,D.fss,null,null,null,null,null,null,null,null,null)
D.fNh=new A.B("Calabash Catch",null,B.KV,null,null,null,null,null,null,null,null,null)
D.fNJ=new A.B("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fOa=new A.B("\ud83c\udfe1",null,B.EN,null,null,null,null,null,null,null,null,null)
D.fOS=new A.B("Ribbon bookmark",null,B.jy,null,null,null,null,null,null,null,null,null)
D.fBk=new A.F(!0,B.b2,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPm=new A.B("NGMY.ORG",null,D.fBk,null,B.K,null,null,null,null,null,null,null)
D.fQF=new A.B("Scan family tree QR",null,B.cE,null,null,null,null,null,null,null,null,null)
D.fxs=new A.F(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRr=new A.B("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fxs,null,B.K,null,null,null,null,null,null,null)
D.fSF=new A.B("Delete",null,B.Vp,null,null,null,null,null,null,null,null,null)
D.fSG=new A.B("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fSO=new A.B("Thumbnail",null,B.pU,null,null,null,null,null,null,null,null,null)
D.fTo=new A.B("Save the cover",null,B.cE,null,null,null,null,null,null,null,null,null)
D.fTt=new A.B("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.AX,null,B.K,null,null,null,null,null,null,null)
D.fTT=new A.B("Your photos",null,B.pU,null,null,null,null,null,null,null,null,null)
D.fU8=new A.B("Create Project",null,B.ci,null,null,null,null,null,null,null,null,null)
D.fUw=new A.B("\u2b50 stars",null,B.VD,null,null,null,null,null,null,null,null,null)
D.fUK=new A.B("Design your cover",null,A0.vD,null,null,null,null,null,null,null,null,null)
D.fUQ=new A.B("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fUT=new A.B("PICTURE",null,M.vI,null,null,null,null,null,null,null,null,null)
D.fUV=new A.B("\ud83c\udfaf",null,D.VS,null,null,null,null,null,null,null,null,null)
D.fVg=new A.B("Paid",null,B.ci,null,null,null,null,null,null,null,null,null)
D.fVi=new A.B("You can undo it right after.",null,Q.xn,null,null,null,null,null,null,null,null,null)
D.fVQ=new A.B("Print",null,B.vF,null,null,null,null,null,null,null,null,null)
D.fWe=new A.B("Amount owed",null,D.aWs,null,null,null,null,null,null,null,null,null)
D.fWt=new A.B("Got it",null,B.ci,null,null,null,null,null,null,null,null,null)
D.fX4=new A.B("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fX7=new A.B("Add to budget",null,B.ci,null,null,null,null,null,null,null,null,null)
D.fXz=new A.B("Debtor signature",null,B.ab7,null,null,null,null,null,null,null,null,null)
D.fXJ=new A.B("Change icon",null,B.ab6,null,null,null,null,null,null,null,null,null)
D.fYw=new A.B("MADE BY THE SYSTEM, FROM YOUR TREE",null,T.tL,null,null,null,null,null,null,null,null,null)
D.fYY=new A.B("Family tree QR",null,B.cE,null,null,null,null,null,null,null,null,null)
D.fZ3=new A.B("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.VR,null,null,null,null,null,null,null,null,null)
D.fZr=new A.B("Download",null,B.vF,null,null,null,null,null,null,null,null,null)
D.fZs=new A.B("The person who planted this tree has not made a game yet.",null,B.AW,null,null,null,null,null,null,null,null,null)
D.fZw=new A.B("Change",null,B.pU,null,null,null,null,null,null,null,null,null)
D.h_l=new A.B("Clear all",null,B.ci,null,null,null,null,null,null,null,null,null)
D.h_o=new A.B("WHAT SHOULD IT CHANGE?",null,M.vI,null,null,null,null,null,null,null,null,null)
D.h_X=new A.B("COLOUR",null,M.vI,null,null,null,null,null,null,null,null,null)
D.h0a=new A.B("Do it",null,B.cE,null,null,null,null,null,null,null,null,null)
D.h0d=new A.B("Create Tree",null,B.ci,null,null,null,null,null,null,null,null,null)
D.h0n=new A.B("Give me another clue",null,D.KS,null,null,null,null,null,null,null,null,null)
D.h1h=new A.B("Create Family Tree",null,B.fb,null,null,null,null,null,null,null,null,null)
D.h1r=new A.B("THE TEACHER EXPLAINS THESE",null,T.tL,null,null,null,null,null,null,null,null,null)
D.fnM=new A.F(!0,E.kr,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1x=new A.B("Write the first page myself",null,D.fnM,null,null,null,null,null,null,null,null,null)
D.h24=new A.B("Use this header",null,B.cE,null,null,null,null,null,null,null,null,null)
D.h2b=new A.B("Create Project",null,E.aW9,null,null,null,null,null,null,null,null,null)
D.hsU=new C.acJ(1,"header")
D.acx=new C.acJ(2,"projects")
D.hsV=new C.acJ(3,"cashier")
D.acy=new C.acJ(4,"familyTree")
D.hGC=new C.cGh(0,"start")
D.hGD=new C.cGi(0,"start")
D.hti=new C.ZN(null)
D.huj=new C.a_f(null)
D.dED=new A.bv(B.i4,[],A.as("bv<n,GF>"))
D.dmw=w([],x.dE)
D.dmx=w([],x.M)
D.huQ=new C.bgJ(D.dED,D.dmw,D.dmx,0,0,null,null)
D.b0u=new C.a05(0,"intro")
D.b0v=new C.a05(1,"countdown")
D.acM=new C.a05(2,"ask")
D.WM=new C.a05(3,"reveal")
D.b0w=new C.a05(4,"end")
D.hxI=new C.tg(F.Gj,D.lD,B.cP,F.lE,5,!1,!1,!1,0,null)
D.hxJ=new C.tg(F.Gj,B.et,B.cP,B.bP,2,!0,!0,!1,2,B.cP)
D.hxK=new C.tg(B.on,B.cH,B.cP,F.lE,2,!0,!1,!1,2,B.av)
D.hxL=new C.tg(F.Gj,B.dM,B.cP,F.lE,5,!1,!1,!1,1,null)
D.hxM=new C.tg(F.a_2,D.aiP,B.cP,F.lE,4,!0,!1,!0,0,null)
D.b0z=new C.tg(F.a_2,B.dN,B.cP,F.lE,3,!0,!1,!0,2,null)
D.b0A=new C.tg(F.mU,D.lD,B.c,F.lE,0,!1,!1,!0,0,null)
D.b0B=new C.tg(B.on,B.aE,B.cP,B.bP,2,!0,!0,!1,2,B.dN)
D.b0C=new C.tg(B.on,G.nq,B.ig,F.lE,5,!1,!1,!0,3,null)
D.hxN=new C.tg(B.on,B.dN,B.cP,F.lE,0,!0,!1,!1,0,B.aE)
D.b0D=new C.tg(F.Gj,B.et,B.cP,B.bP,1,!1,!0,!1,1,null)
D.b0E=new C.tg(F.FT,B.av,B.aE,F.lE,4,!0,!1,!0,2,null)
D.hxO=new C.tg(F.mU,B.av,B.et,F.lE,3,!0,!1,!1,0,null)
D.hxP=new C.tg(B.on,B.dM,B.cP,B.bP,1,!1,!0,!1,1,null)
D.hxQ=new C.tg(F.FT,D.ahQ,B.c,F.lE,5,!1,!1,!0,0,null)
D.hyt=new C.a0D(null)
D.hGL=new C.ag6(0,"still")
D.X8=new C.ag6(1,"walk")
D.b14=new C.ag6(2,"pound")
D.b15=new C.ag6(3,"drum")
D.hCt=new C.a1U(0,"greet")
D.b16=new C.a1U(1,"teach")
D.ad5=new C.a1U(2,"ask")
D.hCu=new C.a1U(3,"feedback")
D.b17=new C.a1U(4,"end")
D.Xd=new C.a2c(0,"intro")
D.Xe=new C.a2c(1,"asking")
D.Bc=new C.a2c(2,"reacting")
D.adf=new C.a2c(3,"driving")
D.adg=new C.a2c(4,"arrived")
D.adj=new C.aLx(0,"projects")
D.b1v=new C.aLx(1,"cashier")
D.hEv=new C.aLx(2,"familyTree")})()};
(a=>{a["33asjz4+wKb/KNpe4dqLviOwcUk="]=a.current})($__dart_deferred_initializers__);