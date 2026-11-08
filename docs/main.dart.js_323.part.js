((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A7,P,Y,R,A8,I,G,E,S,A9,O,Aa,Ab,Z,Ac,Ad,Q,K,A_,A0,Ae,A1,A2,A3,Af,Ag,A4,Ah,Ai,Aj,A5,Ak,Al,A6,M,Am,An,T,Ao,U,V,F,Ap,N,H,W,C={
bD6(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bD6=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vr(null,""),$async$bD6)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.n9(b1)
s=A.c2(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.ds(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cU(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.M)(h),++d){a0=h[d]
f.push(A.G(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.T.ao(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.r0(t,a1,B.hK,"book",E.FD),$async$bD6)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=G.QG(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.Le(l)?y.k:y.y)
for(j=J.a4(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cz
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=G.a2v(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bD6,v)},
ah2(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ah2=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vr(null,""),$async$ah2)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.n9(b6)
s=x.S
r=A.d1(c1,0,A.dB(4,"count",s),A.S(c1).c)
q=G.a2i(new A.N(r,new C.fCz(),r.$ti.k("N<ak.E,n>")).aG(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fCy(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.T.ao(b7,null)+"\nAllowed values: style one of "+B.d.aG(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ah2)
case 6:l=c5
k=G.QG(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.aou(s,D.duR,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
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
a4=B.d.ds(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.M)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.G(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.T.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ah2)
case 10:l=c5
k=l==null?null:G.QG(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.dc(a8,d),a5=J.aV(a2.a),a2=a2.$ti,a7=new A.l6(a5,a2.k("l6<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
b0=J.a4(a9)
b1=A.aK(b0.h(a9,"index"))
i=b1==null?null:B.k.O(b1)
if(i==null||!B.d.q(a4,i))continue
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
case 9:if(h.a!==0){s=h.$ti.k("bc<2>")
p=A.cF(new A.bc(h,s),new C.fCA(),s.k("J.E"),p)
p=G.a2i(A.pn(p,3,A.a6(p).k("J.E")).aG(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.C(new A.cu(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.M)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(G.a2v(s,b9),$async$ah2)
case 13:b5=c5
for(s=J.a4(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aou(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ah2,v)},
hsa(d,e,f){return A.cf(null,B.w.j(0.65),!1,null,new C.fLX(e,f),d,null,!0,!0,x.g2)},
aou:function aou(d,e,f){this.a=d
this.b=e
this.c=f},
fCz:function fCz(){},
fCy:function fCy(d){this.a=d},
fCA:function fCA(){},
fLX:function fLX(d,e){this.a=d
this.b=e},
bAY(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bAY=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b3(b1,new C.fqC())){u=null
w=1
break}t=B.d.d9(b1,new C.fqD())
s=$.V()
r=new A.pI()
q=A.z1(r,D.aO0)
p=A.K()
p.r=B.c.gp(0)
q.aU(D.aO0,p)
o=A.K()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ac
o.d=B.bG
o.e=B.dS
n=new C.fqI(t)
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
s=$.V()
p=A.a([],x.v)
a3=new A.aI(s.r,B.ai,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.M)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.b0(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aJ(a3,o)}else{p=A.a([],x.v)
a3=new A.aI(s.r,B.ai,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.M)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.b0(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aJ(a3,o)}w=4
return A.b(r.nS().zp(520,160),$async$bAY)
case 4:w=3
return A.b(b3.hw(B.h7),$async$bAY)
case 3:b0=b3
u=b0==null?null:J.eV(B.dF.gaQ(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAY,v)},
fAf(d){return C.i6_(d)},
i6_(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fAf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bgH()
n=d.x!=null&&d.z5(null).length===0
if(d.x!=null)t=n?D.zJ:D.IJ
else t=d.gTT()?D.IJ:D.aJ0
w=3
return A.b(C.bAY(d.ax),$async$fAf)
case 3:s=f
p.a=null
if(s!=null)p.a=A.anc(s)
r=A.a4s(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aJ0}else{p.c=C.wS(q,!0)
p.b=n?D.zJ:D.IJ}r.a3g(A.fWo(new C.fAh(p,d,new C.fAi(),t,n,o),null,D.bAc,B.wC))
u=r.ju(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fAf,v)},
fGU(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fGU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fAf(d),$async$fGU)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=Ad.GQ(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGU,v)},
fqC:function fqC(){},
fqD:function fqD(){},
fqI:function fqI(d){this.a=d},
fAi:function fAi(){},
fAh:function fAh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fAg:function fAg(){},
fMp(d,e){var w=0,v=A.j(x.H)
var $async$fMp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,B.w.j(0.55),!0,null,new C.fMt(new A.cz(null,x.eF),e),d,null,!0,!0,x.H),$async$fMp)
case 2:return A.h(null,v)}})
return A.i($async$fMp,v)},
bDz(d,e,f,g){return C.idy(d,e,f,g)},
idy(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bDz=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cF.aM(t)}catch(q){r=null}if(r==null||r.length===0){d.J(x.q).f.S(D.f6H)
w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.fMl(g,r,f),d,null,!0,!0,x.H),$async$bDz)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bDz,v)},
fMu(d,e){var w=0,v=A.j(x.H)
var $async$fMu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,null,!0,null,new C.fMx(new A.cz(null,x.eF),e),d,null,!0,!0,x.H),$async$fMu)
case 2:return A.h(null,v)}})
return A.i($async$fMu,v)},
aYR:function aYR(d,e){this.c=d
this.a=e},
c4L:function c4L(){},
bb1:function bb1(d,e){this.b=d
this.a=e},
fMt:function fMt(d,e){this.a=d
this.b=e},
fMq:function fMq(d){this.a=d},
fMr:function fMr(d,e,f){this.a=d
this.b=e
this.c=f},
fMs:function fMs(d,e){this.a=d
this.b=e},
fMl:function fMl(d,e,f){this.a=d
this.b=e
this.c=f},
fMj:function fMj(d){this.a=d},
fMk:function fMk(d,e,f){this.a=d
this.b=e
this.c=f},
fMx:function fMx(d,e){this.a=d
this.b=e},
fMv:function fMv(d){this.a=d},
fMw:function fMw(d,e,f){this.a=d
this.b=e
this.c=f},
fuW(d,e){var w=0,v=A.j(x.y),u,t
var $async$fuW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a23(d),$async$fuW)
case 3:t=g
J.nx(t,new C.fuX(e))
u=A.ahH(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fuW,v)},
fuX:function fuX(d){this.a=d},
aoG:function aoG(d,e,f){this.c=d
this.d=e
this.a=f},
aD6:function aD6(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dJi:function dJi(d,e){this.a=d
this.b=e},
dJ3:function dJ3(d,e){this.a=d
this.b=e},
dJ6:function dJ6(d,e,f){this.a=d
this.b=e
this.c=f},
dJ5:function dJ5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJ4:function dJ4(d,e){this.a=d
this.b=e},
dJ7:function dJ7(d,e){this.a=d
this.b=e},
dJ1:function dJ1(){},
dJ2:function dJ2(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dJ0:function dJ0(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dIM:function dIM(d){this.a=d},
dIN:function dIN(d,e,f){this.a=d
this.b=e
this.c=f},
dIO:function dIO(d,e){this.a=d
this.b=e},
dIL:function dIL(d){this.a=d},
dIT:function dIT(d,e){this.a=d
this.b=e},
dIK:function dIK(d){this.a=d},
dIU:function dIU(d,e,f){this.a=d
this.b=e
this.c=f},
dIV:function dIV(d,e,f){this.a=d
this.b=e
this.c=f},
dIJ:function dIJ(d,e){this.a=d
this.b=e},
dIW:function dIW(d,e,f){this.a=d
this.b=e
this.c=f},
dII:function dII(d,e){this.a=d
this.b=e},
dIX:function dIX(d,e){this.a=d
this.b=e},
dIH:function dIH(d){this.a=d},
dIY:function dIY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dIF:function dIF(){},
dIz:function dIz(d){this.a=d},
dIA:function dIA(d){this.a=d},
dIG:function dIG(d,e){this.a=d
this.b=e},
dIZ:function dIZ(d,e){this.a=d
this.b=e},
dIE:function dIE(d){this.a=d},
dJ_:function dJ_(d){this.a=d},
dID:function dID(){},
dIP:function dIP(d,e){this.a=d
this.b=e},
dIC:function dIC(d){this.a=d},
dIQ:function dIQ(d,e,f){this.a=d
this.b=e
this.c=f},
dIB:function dIB(d,e){this.a=d
this.b=e},
dIy:function dIy(d,e){this.a=d
this.b=e},
dIR:function dIR(d){this.a=d},
dIS:function dIS(d,e,f){this.a=d
this.b=e
this.c=f},
dJl:function dJl(){},
dJm:function dJm(d,e){this.a=d
this.b=e},
dJj:function dJj(d){this.a=d},
dJk:function dJk(d){this.a=d},
dJf:function dJf(d,e){this.a=d
this.b=e},
dJg:function dJg(d){this.a=d},
dJ8:function dJ8(d,e,f){this.a=d
this.b=e
this.c=f},
dJ9:function dJ9(d,e,f){this.a=d
this.b=e
this.c=f},
dJa:function dJa(d,e,f){this.a=d
this.b=e
this.c=f},
dJb:function dJb(d,e,f){this.a=d
this.b=e
this.c=f},
dJc:function dJc(d,e,f){this.a=d
this.b=e
this.c=f},
dJd:function dJd(d,e,f){this.a=d
this.b=e
this.c=f},
dJe:function dJe(d,e,f){this.a=d
this.b=e
this.c=f},
dJn:function dJn(){},
dJo:function dJo(){},
dJp:function dJp(){},
dJq:function dJq(d){this.a=d},
dJh:function dJh(d,e){this.a=d
this.b=e},
hof(d){return B.d.dM(D.a2O,new C.fvA(d),new C.fvB())},
um:function um(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fvA:function fvA(d){this.a=d},
fvB:function fvB(){},
akO:function akO(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aUA:function aUA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
SW:function SW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beE:function beE(){this.d=$
this.c=this.a=null},
d9s:function d9s(d,e){this.a=d
this.b=e},
d9q:function d9q(d,e){this.a=d
this.b=e},
d9r:function d9r(){},
d9t:function d9t(d,e){this.a=d
this.b=e},
h8S(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.nj(t,w,v,u==null?new A.U(Date.now(),0,!1):u)},
L0(d,e){return C.i4C(d,e)},
i4C(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$L0=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$L0)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.T.aN(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.dc(p,x.f)
o=A.cF(o,new C.fxR(),o.$ti.k("J.E"),x.B)
n=A.a6(o).k("Z<J.E>")
o=A.C(new A.Z(o,new C.fxS(),n),n.k("J.E"))
B.d.aV(o,new C.fxT())
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
return A.i($async$L0,v)},
B5(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$B5=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$B5)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fL2(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aq("String","ngmy_family_book_v1_"+s+"_"+e,B.T.ao(r,null)),$async$B5)
case 4:case 1:return A.h(u,v)}})
return A.i($async$B5,v)},
aQH(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aQH=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.L0(d,e),$async$aQH)
case 2:u=h
t=J.cD(u)
s=t.bg(u,new C.fTo(f))
if(s===-1)t.c8(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.B5(d,e,u),$async$aQH)
case 3:return A.h(null,v)}})
return A.i($async$aQH,v)},
bBq(d,e,f){var w=0,v=A.j(x.H),u
var $async$bBq=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.L0(d,e),$async$bBq)
case 2:u=h
J.nx(u,new C.fuO(f))
w=3
return A.b(C.B5(d,e,u),$async$bBq)
case 3:return A.h(null,v)}})
return A.i($async$bBq,v)},
bBD(d,e){return C.i4B(d,e)},
i4B(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bBD=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bBD)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.No
w=1
break}p=B.T.aN(0,q,null)
if(x.f.b(p)){o=A.a2(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aK(o.h(0,"emblem"))
k=k==null?null:B.k.O(k)
if(k==null)k=0
if(D.CW.ai(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aK(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.E(i==null?25:i,18,36)
h=B.d.q(D.a4p,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.q(D.a3O,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.q(D.a3K,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.q(D.cZb,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.HP(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.No
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.No
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bBD,v)},
RK(d,e,f){return C.id4(d,e,f)},
id4(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$RK=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$RK)
case 7:r=h
w=8
return A.b(r.aq("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.T.ao(f.ag(),null)),$async$RK)
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
return A.i($async$RK,v)},
Rd(d,e){return C.i4D(d,e)},
i4D(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Rd=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Rd)
case 7:r=g
q=r.tq("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.L0(d,e),$async$Rd)
case 8:if(!j.cK(g)){n=B.a.i(d.toLowerCase())
m=J.lx(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Rd)
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
return A.i($async$Rd,v)},
agm(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$agm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rd(d,e),$async$agm)
case 3:s=g
r=J.a4(s)
if(r.gL(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gL(s):"main"
r.M(s,t)
w=5
return A.b(A.az(),$async$agm)
case 5:w=4
return A.b(g.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$agm)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agm,v)},
a2H(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a2H=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Rd(d,e),$async$a2H)
case 2:s=h
J.hy(s,f)
w=3
return A.b(A.az(),$async$a2H)
case 3:u=h
w=4
return A.b(u.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a2H)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2H)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2H)
case 6:return A.h(null,v)}})
return A.i($async$a2H,v)},
nj:function nj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fxR:function fxR(){},
fxS:function fxS(){},
fxT:function fxT(){},
fL2:function fL2(){},
fTo:function fTo(d){this.a=d},
fuO:function fuO(d){this.a=d},
HP:function HP(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bOC:function bOC(d){this.a=d},
idn(d,e,f,g,h,i,j){return A.a3(d,!1).cg(A.e_(new C.fLB(j,i,f,e,h,g),!0,null,x.H))},
Ra(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Ra=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rd(h,g),$async$Ra)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.J(x.q).f.S(D.aQ7)
u=!1
w=1
break}w=4
return A.b(C.hsa(d,f,e),$async$Ra)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.agm(h,g),$async$Ra)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nj(""+(q+n),l,B.a.i(m.b),new A.U(Date.now(),0,!1)))}w=6
return A.b(C.B5(h,r,p),$async$Ra)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.RK(h,r,new C.HP("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Ra)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ra,v)},
fLB:function fLB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Zs:function Zs(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aA9:function aA9(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
da7:function da7(d){this.a=d},
da6:function da6(d,e){this.a=d
this.b=e},
d9W:function d9W(d,e){this.a=d
this.b=e},
d9T:function d9T(d,e){this.a=d
this.b=e},
d9u:function d9u(d){this.a=d},
d9v:function d9v(d,e){this.a=d
this.b=e},
d9X:function d9X(d){this.a=d},
d9D:function d9D(d){this.a=d},
d9B:function d9B(d){this.a=d},
d9C:function d9C(d){this.a=d},
d9E:function d9E(d){this.a=d},
d9U:function d9U(d){this.a=d},
d9V:function d9V(){},
d9z:function d9z(d){this.a=d},
d9A:function d9A(d,e){this.a=d
this.b=e},
d9F:function d9F(d){this.a=d},
d9G:function d9G(d,e){this.a=d
this.b=e},
da5:function da5(d){this.a=d},
da4:function da4(d,e){this.a=d
this.b=e},
da3:function da3(d){this.a=d},
d9Q:function d9Q(d){this.a=d},
d9P:function d9P(d){this.a=d},
d9R:function d9R(d){this.a=d},
d9w:function d9w(d,e){this.a=d
this.b=e},
d9S:function d9S(d,e){this.a=d
this.b=e},
d9J:function d9J(d){this.a=d},
d9K:function d9K(d){this.a=d},
d9I:function d9I(){},
d9L:function d9L(d){this.a=d},
d9M:function d9M(d){this.a=d},
d9N:function d9N(d,e){this.a=d
this.b=e},
d9O:function d9O(d,e,f){this.a=d
this.b=e
this.c=f},
d9H:function d9H(d,e){this.a=d
this.b=e},
d9Z:function d9Z(d){this.a=d},
d9Y:function d9Y(){},
da_:function da_(d){this.a=d},
da0:function da0(d){this.a=d},
da1:function da1(d){this.a=d},
da2:function da2(d,e){this.a=d
this.b=e},
d9x:function d9x(d){this.a=d},
d9y:function d9y(d){this.a=d},
Zw:function Zw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beZ:function beZ(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dbS:function dbS(d){this.a=d},
dbT:function dbT(d){this.a=d},
dbR:function dbR(d){this.a=d},
dbU:function dbU(d){this.a=d},
dbQ:function dbQ(d){this.a=d},
dbV:function dbV(d){this.a=d},
dbP:function dbP(d){this.a=d},
dbW:function dbW(d,e){this.a=d
this.b=e},
dbO:function dbO(d,e){this.a=d
this.b=e},
dbX:function dbX(d,e){this.a=d
this.b=e},
Zu:function Zu(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aeJ:function aeJ(d,e,f){this.a=d
this.b=e
this.c=f},
aAb:function aAb(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dam:function dam(d,e){this.a=d
this.b=e},
dal:function dal(d,e){this.a=d
this.b=e},
daq:function daq(d){this.a=d},
dap:function dap(d,e){this.a=d
this.b=e},
dan:function dan(d){this.a=d},
dao:function dao(d){this.a=d},
dar:function dar(d){this.a=d},
das:function das(d){this.a=d},
dak:function dak(d,e){this.a=d
this.b=e},
daj:function daj(d,e){this.a=d
this.b=e},
K7:function K7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
YK:function YK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cIS:function cIS(d){this.a=d},
cIT:function cIT(){},
cIU:function cIU(d){this.a=d},
bce:function bce(d,e,f){this.b=d
this.c=e
this.a=f},
bc5:function bc5(d,e){this.b=d
this.a=e},
un:function un(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Z2:function Z2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcc:function bcc(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d1r:function d1r(d,e,f){this.a=d
this.b=e
this.c=f},
d1q:function d1q(d,e){this.a=d
this.b=e},
d1Q:function d1Q(d){this.a=d},
d1D:function d1D(){},
d1R:function d1R(d){this.a=d},
d1C:function d1C(){},
d1S:function d1S(d,e){this.a=d
this.b=e},
d1B:function d1B(d,e){this.a=d
this.b=e},
d1T:function d1T(d,e){this.a=d
this.b=e},
d1A:function d1A(d,e){this.a=d
this.b=e},
d1U:function d1U(d){this.a=d},
d1z:function d1z(){},
d1V:function d1V(d,e){this.a=d
this.b=e},
d1y:function d1y(d,e){this.a=d
this.b=e},
d1W:function d1W(d){this.a=d},
d1L:function d1L(d,e){this.a=d
this.b=e},
d1X:function d1X(d){this.a=d},
d1Y:function d1Y(d){this.a=d},
d2_:function d2_(d){this.a=d},
d20:function d20(d){this.a=d},
d1K:function d1K(d,e){this.a=d
this.b=e},
d21:function d21(d,e){this.a=d
this.b=e},
aH6:function aH6(d){this.a=d},
bht:function bht(d){this.a=d},
bap:function bap(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
akP:function akP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a0J:function a0J(d,e){this.a=d
this.b=e},
akQ:function akQ(d,e,f,g,h,i){var _=this
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
_.aa$=i
_.c=_.a=null},
bOM:function bOM(d){this.a=d},
bOG:function bOG(d){this.a=d},
bOF:function bOF(d,e){this.a=d
this.b=e},
bOP:function bOP(d){this.a=d},
bOH:function bOH(d){this.a=d},
bOI:function bOI(d){this.a=d},
bOL:function bOL(d){this.a=d},
bOK:function bOK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bON:function bON(d,e){this.a=d
this.b=e},
bOO:function bOO(){},
bOJ:function bOJ(d){this.a=d},
bOD:function bOD(d,e){this.a=d
this.b=e},
bOE:function bOE(d){this.a=d},
bmQ:function bmQ(d,e){this.b=d
this.a=e},
aAa:function aAa(){},
is(d,e){var w
$.V()
w=A.K()
w.b=B.ac
w.c=e
w.r=d.gp(0)
w.d=B.bG
w.e=B.dS
return w},
bB_(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.a
J.bq(j.save())
j.translate(e.a,e.b)
d.p_(0,a0?-f:f,f)
w=A.bN(B.i0,8,36)
v=B.w.j(0.3)
u=$.V()
t=A.K()
t.r=v.gp(0)
d.dX(w,t)
w=a1===D.VG
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.br(D.efr,new A.t(-4+v,-2),C.is(q,5))
d.br(D.ed6,new A.t(4-v,-2),C.is(q,5))}else{t=A.bN(B.IA,14,40)
p=A.K()
p.r=v.gp(0)
d.dX(t,p)}v=u.r
u=x.v
o=new A.aI(v,B.ai,k,k,A.a([],u))
t=-64-r
o.D(new A.b0(-11,t))
o.D(new A.c8(-15,-40,-14,a3?-12:-18))
o.D(new A.ap(14,a3?-12:-18))
o.D(new A.c8(15,-40,11,t))
o.D(new A.bv())
t=A.K()
t.r=w.gp(0)
d.aJ(o,t)
u=new A.aI(v,B.ai,k,k,A.a([],u))
u.D(new A.b0(-12,-50-r))
v=-46-r
u.D(new A.ap(12,v))
u.D(new A.ap(12.5,-42-r))
u.D(new A.ap(-12.5,v))
u.D(new A.bv())
v=A.K()
v.r=h.c.gp(0)
d.aJ(u,v)
A:{if(D.aaD===a1){w=Math.sin(g*3.4)
break A}if(D.aaE===a1){w=Math.sin(g*7.5)
break A}w=s
break A}if(a1===D.aaD){n=-52+w*14
d.br(new A.t(10,n-22),new A.t(10,n+44),C.is(F.EV,3.4))
d.br(D.efI,new A.t(9,n),C.is(q,4))
d.br(D.edt,new A.t(10,n),C.is(q,4))}else if(a1===D.aaE){d.br(D.eeA,new A.t(-8,-26-Math.max(0,w)*6),C.is(q,4))
d.br(D.ebK,new A.t(8,-26-Math.max(0,-w)*6),C.is(q,4))}else{w=s*3
v=-38-r
d.br(D.eeE,new A.t(-12-w,v),C.is(q,4))
d.br(D.aI3,new A.t(12+w,v),C.is(q,4))}w=A.K()
w.r=q.gp(0)
d.aU(D.eVg,w)
m=new A.t(0,-77-r)
w=A.bN(m,22,19)
v=A.K()
v.r=q.gp(0)
d.dX(w,v)
w=h.y
if(w!=null){v=A.bN(m.a9(0,H.uT),15,24)
u=A.K()
u.r=w.gp(0)
d.dX(v,u)
u=m.a9(0,D.ebF)
v=A.K()
v.r=w.gp(0)
d.ae(u,4,v)}else{w=A.bN(m.a9(0,B.rM),23,20)
v=h.d
u=A.K()
u.r=v.gp(0)
d.e2(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.br(m.a9(0,D.efG),m.a9(0,D.eey),C.is(v,2.2))
d.br(m.a9(0,D.eds),m.a9(0,D.ebC),C.is(v,2.2))}if(w===4){w=m.a9(0,D.efK)
u=A.K()
u.r=v.gp(0)
d.ae(w,6,u)
u=m.a9(0,D.edv)
w=A.K()
w.r=v.gp(0)
d.ae(u,6,w)}}w=m.a9(0,D.eel)
v=A.K()
v.r=B.j8.gp(0)
d.ae(w,0.9,v)
v=m.a9(0,D.ee9)
w=A.K()
w.r=B.j8.gp(0)
d.ae(v,0.9,w)
if(i){l=m.a9(0,H.a6h)
w=A.bN(l,21,22)
v=A.K()
v.r=D.lr.gp(0)
d.dX(w,v)
v=A.bN(l.a9(0,H.aI0),5,12)
w=A.K()
w.r=D.baY.gp(0)
d.dX(v,w)
d.br(l.a9(0,D.efC),l.a9(0,H.aIn),C.is(B.d4,1.4))
d.br(D.aI3,new A.t(15,-88-r),C.is(q,3.6))}j.restore()},
hUe(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a3.a,a1=A.ar(a0,B.w,0.28)
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
s=A.bz(D.eVh,B.rQ)
p=$.V()
o=A.K()
o.r=u.gp(0)
a2.aD(s,o)
o=A.bz(D.eVc,B.ii)
s=A.ar(v,B.w,0.18)
s.toString
n=A.K()
n.r=s.gp(0)
a2.aD(o,n)
n=A.bz(D.eVq,B.ii)
o=A.ar(v,B.w,0.1)
o.toString
s=A.K()
s.r=o.gp(0)
a2.aD(n,s)
s=A.K()
s.r=a0.gp(0)
a2.dX(D.eVj,s)
s=A.K()
s.r=a0.gp(0)
a2.dX(D.eU5,s)
s=a2.a
J.bq(s.save())
s.translate(a4.w,0)
J.bq(s.save())
a2.p_(0,q,q*(1+t*0.012))
o=a3.f
m=o&&!a3.r?25:28
n=x.v
l=new A.aI(p.r,B.ai,d,d,A.a([],n))
p=-m
k=p+2
l.D(new A.b0(k,-58))
l.D(new A.c8(p-3,-62,p,-52))
l.D(new A.ap(p+4,-14))
l.D(new A.ap(m-4,-14))
l.D(new A.ap(m,-52))
l.D(new A.c8(m+3,-62,m-2,-58))
l.D(new A.c8(0,-70,k,-58))
l.D(new A.bv())
k=A.K()
k.r=v.gp(0)
a2.aJ(l,k)
J.bq(s.save())
a2.mE(0,l)
switch(a3.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.d4A[j]
i=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
i.b=B.ac
i.c=5
i.r=k.gp(0)
i.d=B.bG
i.e=B.dS
h=i.H()
s.drawLine.apply(s,[-34+u,-64,14+u,-14,h])
h.delete()}break
case 2:for(k=a3.c,g=-56;g<-14;g+=11)for(f=-26+B.o.F(B.o.an(g,11),2)*6;f<28;f+=12){i=k.j(0.85)
$.V()
e=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
e.r=i.gp(0)
h=e.H()
s.drawCircle(f,g,3.6,h)
h.delete()
e=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
e.r=u.gp(0)
h=e.H()
s.drawCircle(f,g,1.6,h)
h.delete()}break
case 3:for(u=a3.c,f=-28;f<30;f+=8){k=u.j(0.7)
i=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
i.b=B.ac
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dS
h=i.H()
s.drawLine.apply(s,[f,-64,f,-14,h])
h.delete()}for(g=-60;g<-14;g+=8){k=u.j(0.7)
i=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
i.b=B.ac
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dS
h=i.H()
s.drawLine.apply(s,[-30,g,30,g,h])
h.delete()}break
default:a2.br(D.ef9,D.eck,C.is(a3.c.j(0.9),3))}a2.br(D.efD,D.eeG,C.is(B.w.j(0.18),1.6))
a2.br(D.ebJ,H.aI5,C.is(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.V()
i=A.K()
i.r=u.gp(0)
a2.aU(D.eU2,i)
s.restore()
i=A.K()
i.r=a1.gp(0)
a2.aU(D.eUd,i)
n=new A.aI(k.r,B.ai,d,d,A.a([],n))
n.D(new A.b0(-9,-66))
n.D(new A.c8(0,-57,9,-66))
n.D(new A.c8(0,-60,-9,-66))
k=A.K()
k.r=a0.gp(0)
a2.aJ(n,k)
if(a3.e!==1)u=a3.r&&!o
else u=!0
if(u)a2.e2(D.eUl,0.1,2.941592653589793,!1,C.is(a3.c,2.2))
s.restore()
u=-56*q
o=a4.Q
if(o==null)o=D.aIA
n=25*q
k=23*q
i=9*q
C.hjh(a2,new A.t(p*q+2,u),o,n,k,-1,v,a0,i)
o=a4.as
p=o==null?D.a6p:o
C.hjh(a2,new A.t(m*q-2,u),p,n,k,1,v,a0,i)
if(a4.at){a2.br(D.ecZ,D.ecW,C.is(D.agt,4))
a2.br(D.ecY,D.ecU,C.is(D.agr.j(0.7),1.4))
u=A.K()
u.r=B.d4.gp(0)
a2.ae(D.ecX,5,u)}s.restore()
u=a4.w
p=a4.e
o=a4.r
J.bq(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a2.j_(0,a4.f)
a2.bX(0,r)
C.hUb(a2,a3,a4,a5,a6,a0,a1,w)
s.restore()},
hjh(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aF(0,e),r=s.gcH(),q=r===0?B.i0:s.eQ(0,r),p=B.k.E(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.t(o,w)
if(o*i<0)v=new A.t(-o,-w)
u=e.a9(0,q.aI(0,n)).a9(0,v.aI(0,m))
t=e.a9(0,q.aI(0,p))
d.br(e,u,C.is(j,l))
o=A.ar(j,B.w,0.2)
o.toString
d.br(e,u,C.is(o,l*0.35))
d.br(u,t,C.is(k,l*0.78))
o=A.ar(k,B.w,0.22)
o.toString
d.br(u,t,C.is(o,l*0.22))
$.V()
o=A.K()
o.r=j.gp(0)
d.ae(u,l*0.55,o)
o=A.bN(t,l*1.15,l)
w=A.K()
w.r=k.gp(0)
d.dX(o,w)
w=-l
w=t.a9(0,new A.t(i*w*0.45,w*0.1))
o=A.K()
o.r=k.gp(0)
d.ae(w,l*0.28,o)},
hUb(c3,c4,c5,c6,c7,c8,c9,d0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null,c1=c4.d,c2=c4.e
if(c2===3||c2===4){w=A.bN(B.uS,40,38)
$.V()
v=A.K()
v.r=c1.gp(0)
c3.dX(w,v)}if(c2===4){$.V()
w=A.K()
w.r=c1.gp(0)
c3.ae(D.eeQ,9.5,w)
w=A.K()
w.r=c1.gp(0)
c3.ae(D.ebX,9.5,w)}w=A.bN(D.eg_,10,6)
v=$.V()
u=A.K()
u.r=c9.gp(0)
c3.dX(w,u)
u=A.bN(D.eei,10,6)
w=A.K()
w.r=c9.gp(0)
c3.dX(u,w)
v=v.r
w=x.v
t=new A.aI(v,B.ai,c0,c0,A.a([],w))
t.D(new A.b0(0,-20))
t.D(new A.lD(13,-20,17,-9,16,2))
t.D(new A.lD(15,13,8,20,0,20))
t.D(new A.lD(-8,20,-15,13,-16,2))
t.D(new A.lD(-17,-9,-13,-20,0,-20))
t.D(new A.bv())
u=A.K()
u.sar(A.Bv(D.eft,28,A.a([d0,c8,c9],x.O),A.a([0,0.55,1],x.n),B.x,c0,c0,0))
c3.aJ(t,u)
u=c4.r
if(u){s=C.is(c9.j(0.5),0.8)
c3.e2(D.eVr,3.455751918948773,2.5132741228718345,!1,s)
c3.e2(D.eU8,3.455751918948773,2.5132741228718345,!1,s)
c3.br(D.eeN,D.eeB,s)
c3.br(D.ebU,D.ebM,s)
c3.e2(D.eUk,2.2,1.4,!1,s)
c3.e2(D.eU6,-0.4,1.4,!1,s)}switch(c2){case 0:for(r=c3.a,q=0;q<16;++q){p=3.141592653589793*(1.02+0.96*q/15)
o=Math.cos(p)
n=Math.sin(p)
m=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
m.r=c1.gp(0)
l=m.H()
r.drawCircle(o*14.5,-3+n*17.5,4.3,l)
l.delete()}r=A.K()
r.r=c1.gp(0)
c3.e2(D.eUy,3.141592653589793,3.141592653589793,!0,r)
break
case 1:r=new A.aI(v,B.ai,c0,c0,A.a([],w))
r.D(new A.b0(-15,-11))
r.D(new A.c8(0,-30,15,-11))
r.D(new A.ap(13,-6))
r.D(new A.c8(0,-12,-13,-6))
r.D(new A.bv())
o=A.K()
o.r=c4.c.gp(0)
c3.aJ(r,o)
c3.br(D.eeC,D.ebN,C.is(D.pH,1.4))
o=A.K()
o.r=c1.gp(0)
c3.ae(D.eeT,3,o)
o=A.K()
o.r=c1.gp(0)
c3.ae(D.ebY,3,o)
o=new A.aI(v,B.ai,c0,c0,A.a([],w))
o.D(new A.b0(-13,6))
o.D(new A.c8(-12,22,0,26))
o.D(new A.c8(12,22,13,6))
o.D(new A.c8(8,13,0,12))
o.D(new A.c8(-8,13,-13,6))
o.D(new A.bv())
r=A.K()
r.r=B.ip.gp(0)
c3.aJ(o,r)
r=new A.aI(v,B.ai,c0,c0,A.a([],w))
r.D(new A.b0(-7,8))
r.D(new A.c8(0,6,7,8))
r.D(new A.c8(0,10.5,-7,8))
o=A.K()
o.r=B.bO.gp(0)
c3.aJ(r,o)
break
case 2:k=c4.y
if(k==null)k=c4.b
r=new A.aI(v,B.ai,c0,c0,A.a([],w))
r.D(new A.b0(-17,-4))
r.D(new A.c8(-20,-27,0,-29))
r.D(new A.c8(20,-27,17,-4))
r.D(new A.c8(0,-14,-17,-4))
r.D(new A.bv())
o=A.K()
o.r=k.gp(0)
c3.aJ(r,o)
o=A.ar(k,B.w,0.3)
o.toString
c3.e2(D.eUF,3.4,2.5,!1,C.is(o,1.4))
o=A.ar(k,B.c,0.3)
o.toString
c3.e2(D.eUs,3.6,2.2,!1,C.is(o,1.2))
o=new A.aI(v,B.ai,c0,c0,A.a([],w))
o.D(new A.b0(11,-22))
o.D(new A.c8(27,-34,25,-19))
o.D(new A.c8(18,-18,11,-22))
r=A.ar(k,B.c,0.1)
r.toString
n=A.K()
n.r=r.gp(0)
c3.aJ(o,n)
n=new A.aI(v,B.ai,c0,c0,A.a([],w))
n.D(new A.b0(11,-22))
n.D(new A.c8(24,-12,27,-26))
n.D(new A.c8(18,-22,11,-22))
o=A.ar(k,B.w,0.2)
o.toString
r=A.K()
r.r=o.gp(0)
c3.aJ(n,r)
r=A.K()
r.r=c4.c.gp(0)
c3.ae(D.ebO,3,r)
break
case 3:r=A.K()
r.r=c1.gp(0)
c3.e2(D.eUC,3.204424506661589,3.015928947446201,!0,r)
for(r=c3.a,q=-3;q<=3;++q){o=A.ar(c1,B.c,0.18)
o.toString
n=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
n.b=B.ac
n.c=0.9
n.r=o.gp(0)
n.d=B.bG
n.e=B.dS
l=n.H()
r.drawLine.apply(r,[q*3.6,-19+Math.abs(q)*0.8,q*4.6,-4,l])
l.delete()}for(o=c4.c,j=0;j<2;++j){i=D.di0[j]
n=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
n.b=B.ac
n.c=4.5
n.r=c1.gp(0)
n.d=B.bG
n.e=B.dS
l=n.H()
r.drawLine.apply(r,[i,0,i*1.12,22,l])
l.delete()
for(h=0;h<3;++h){n=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
n.r=o.gp(0)
l=n.H()
r.drawCircle(i*(1+h*0.04),7+h*6.5,1.8,l)
l.delete()}}break
case 4:r=A.K()
r.r=c1.gp(0)
c3.e2(D.eUB,3.204424506661589,3.015928947446201,!0,r)
r=A.ar(c1,B.c,0.25)
r.toString
c3.br(H.a6h,H.a6g,C.is(r,1))
break
default:r=A.K()
r.r=c1.gp(0)
c3.e2(D.eU9,3.267256359733385,2.8902652413026098,!0,r)}g=B.k.E(c5.b,0,1)*0.4+0.1
r=A.bN(D.efM,5,8)
o=D.ad9.j(g)
n=A.K()
n.r=o.gp(0)
c3.dX(r,n)
n=A.bN(D.eeu,5,8)
r=D.ad9.j(g)
o=A.K()
o.r=r.gp(0)
c3.dX(n,o)
f=c5.e*2.4
o=new A.aI(v,B.ai,c0,c0,A.a([],w))
o.D(new A.b0(f-0.6,-2))
o.D(new A.c8(f-3.4,6,f-2.6,7.4))
o.D(new A.c8(f,8.8,f+2.6,7.4))
c3.aJ(o,C.is(c9.j(0.75),1.1))
o=A.K()
o.r=c9.gp(0)
c3.ae(new A.t(f-1.5,7.2),0.7,o)
o=A.K()
o.r=c9.gp(0)
c3.ae(new A.t(f+1.5,7.2),0.7,o)
e=B.k.F(c6*0.33+c7*0.37,1)>0.965?1:0
r=c5.d
o=c5.c>0.8?1.25:1
d=(1-e)*(1-r*0.6)*o
for(r=c3.a,o=d<0.15,n=c4.f,m=d>0.12,a0=2.5*d,a1=a0*2,a2=a0*2.2,j=0;j<2;++j){a3=F.je[j]
a4=c5.e
a5=a3>0?0.7:1
a6=a3*6.4+a4*2*a5
if(m){a4=Math.max(0.6,a1)
a5=A.bN(new A.t(a6,-3),a4,7)
a7=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
a7.r=B.c.j(0.96).gp(0)
l=a7.H()
r.drawOval(A.bQ(a5),l)
l.delete()
a8=a6+c5.y*1.5
a9=-3+c5.z*0.7
J.bq(r.save())
a5=A.a([],w)
a7=new A.aI(v,B.ai,c0,c0,a5)
a5.push(new A.jC(A.bN(new A.t(a6,-3),a4,7)))
a4=a7.gbB().a.snapshot()
a4=a7.e=new A.cv(a4)
r.clipPath(a4.a,$.oR(),!0)
a4=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
a4.r=D.bet.gp(0)
l=a4.H()
r.drawCircle(a8,a9,2.1,l)
l.delete()
a4=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
a4.r=B.w.gp(0)
l=a4.H()
r.drawCircle(a8,a9,1.05,l)
l.delete()
a4=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
a4.r=B.c.gp(0)
l=a4.H()
r.drawCircle(a8-0.7,a9-0.7,0.55,l)
l.delete()
r.restore()}a4=n?D.XA:c9.j(0.9)
a5=n?1.5:1.1
b0=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
b0.b=B.ac
b0.c=a5
b0.r=a4.gp(0)
b0.d=B.bG
b0.e=B.dS
a4=o?0.8:0
a4=A.bN(new A.t(a6,-3+a4),Math.max(1.2,a2),7.3500000000000005)
l=b0.H()
r.drawArc.apply(r,[A.bQ(a4),189,162,!1,l])
l.delete()
a4=c5.c
b1=-9.2-a4*2.2
a5=a3*3.6
a7=a4<0?-a4*1.6:0
a4=a4>0?a4*0.6:0
if(u)b2=B.e2
else{b2=A.ar(c1,B.w,0.2)
b2.toString}b3=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
b3.b=B.ac
b3.c=1.7
b3.r=b2.gp(0)
b3.d=B.bG
b3.e=B.dS
l=b3.H()
r.drawLine.apply(r,[a6-a5,b1-a7+0.4,a6+a5,b1-0.6-a4,l])
l.delete()}b4=B.k.E(c5.a,0,1)
if(n)b5=D.bnR
else{u=A.ar(c9,D.bhQ,0.6)
u.toString
b5=u}b6=c5.b
if(b4>0.06){b7=5+B.k.E(b6,0,1)*2.2
b8=1.2+b4*6.5
b9=new A.aI(v,B.ai,c0,c0,A.a([],w))
w=-b7
b9.D(new A.b0(w,11.5))
b9.D(new A.c8(0,11.5+b8*0.2-c5.b*1.5,b7,11.5))
b9.D(new A.c8(0,11.5+b8*1.5+c5.b*1.5,w,11.5))
b9.D(new A.bv())
v=A.K()
v.r=D.bhd.gp(0)
c3.aJ(b9,v)
J.bq(r.save())
c3.mE(0,b9)
v=B.c.j(0.95)
u=A.K()
u.r=v.gp(0)
c3.aU(new A.a5(w,11,w+b7*2,13.2),u)
u=A.bN(new A.t(0,11.5+b8*1.1),b8*0.9,b7*1.4)
w=A.K()
w.r=D.bnW.gp(0)
c3.dX(u,w)
r.restore()
c3.aJ(b9,C.is(b5,1.1))}else{u=new A.aI(v,B.ai,c0,c0,A.a([],w))
r=11.5-b6*0.8
u.D(new A.b0(-5.2,r))
u.D(new A.c8(0,13.1+b6*2.8,5.2,r))
c3.aJ(u,C.is(b5,1.5))
if(b6>0.6){w=new A.aI(v,B.ai,c0,c0,A.a([],w))
w.D(new A.b0(-4.6,11.8))
w.D(new A.c8(0,15.1+b6*1.4,4.6,11.8))
w.D(new A.c8(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.K()
u.r=v.gp(0)
c3.aJ(w,u)}}if(c5.b>0.2){c3.e2(D.eUj,-1.2,2.2,!1,C.is(c9.j(0.5),0.8))
c3.e2(D.eUa,2.141592653589793,2.2,!1,C.is(c9.j(0.5),0.8))}if(n&&c2!==2){c2=c4.c
w=A.K()
w.r=c2.gp(0)
c3.ae(D.eeb,1.7,w)
w=A.K()
w.r=c2.gp(0)
c3.ae(D.ee7,1.7,w)}},
hZy(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.V(),e=new A.pI(),d=A.z1(e,g),a0=a4.a,a1=a4.b,a2=Math.min(a0/450,a1/900),a3=A.K()
a3.sar(A.mb(B.J,new A.t(0,a1*0.46),D.d1v,D.cUA,B.x,g))
d.aU(new A.a5(0,0,0+a0,0+a1),a3)
a3=d.a
J.bq(a3.save())
a3.translate((a0-450*a2)/2,(a1-900*a2)/2)
d.bX(0,a2)
w=new A.eb()
w.d5(8)
for(v=0;v<120;++v){a0=w.aj()
a1=w.aj()
u=w.aj()
t=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
t.r=B.c.j(0.2+w.aj()*0.5).gp(0)
s=t.H()
a3.drawCircle(a0*450*1.4-90,a1*330-40,0.5+u*0.9,s)
s.delete()}J.bq(a3.save())
a3.translate(200,120)
d.j_(0,-0.5)
a0=A.K()
a1=x.O
a0.sar(A.Bv(B.J,230,A.a([D.bdj,B.K],a1),g,B.x,g,g,0))
d.dX(D.eUP,a0)
a3.restore()
a0=A.K()
a0.sar(A.Bv(D.a6o,58,A.a([D.bgk,B.K],a1),g,B.x,g,g,0))
d.ae(D.a6o,58,a0)
a0=A.K()
a0.r=D.bc5.gp(0)
d.ae(D.a6o,24,a0)
a0=A.K()
a0.r=D.XW.gp(0)
d.ae(D.ecD,5,a0)
a0=A.K()
a0.r=D.XW.gp(0)
d.ae(D.ecG,3.4,a0)
a0=A.K()
a0.r=D.XW.gp(0)
d.ae(D.ecF,2.4,a0)
for(a0=x.v,r=0;r<3;++r,f=u){u=A.a([],a0)
q=new A.aI(f.r,B.ai,g,g,u)
u.push(new A.b0(-60,420))
for(f=372+r*12,t=60+r*20,p=r*2,o=14-r*3,n=-60;n<=510;n+=8){m=new A.ap(n,f+Math.sin(n/t+p)*o+Math.sin(n/23+r)*3)
u.push(m)
l=q.f
if(l!=null)m.by(l)
m=q.e
if(m!=null)m.a.delete()
q.e=null}f=new A.ap(510,470)
u.push(f)
t=q.f
if(t!=null)f.by(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.ap(-60,470)
u.push(f)
t=q.f
if(t!=null)f.by(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.bv()
u.push(f)
u=q.f
if(u!=null)f.by(u)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=[D.baP,D.bcD,D.bi8][r]
u=$.V()
t=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
t.r=f.gp(0)
s=t.H()
f=q.e
a3.drawPath((f==null?q.e=new A.cv(q.gbB().a.snapshot()):f).a,s)
s.delete()}for(k=0;k<4;++k){n=D.coV[k]
j=384+B.o.F(n,11)
f=n-2
a0=j-24
u=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
u.b=B.ac
u.c=2.4
u.r=D.Yc.gp(0)
u.d=B.bG
u.e=B.dS
s=u.H()
a3.drawLine.apply(a3,[n,j,f,a0,s])
s.delete()
f=A.bN(new A.t(f,j-27),11,46)
u=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
u.r=D.Yc.gp(0)
s=u.H()
a3.drawOval(A.bQ(f),s)
s.delete()
a0=A.bN(new A.t(n-12,a0),8,24)
f=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
f.r=D.Yc.gp(0)
s=f.H()
a3.drawOval(A.bQ(a0),s)
s.delete()}for(v=0;v<9;++v){f=B.o.F(v,3)
a0=B.o.F(v,4)
u=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
u.r=D.bc8.j(0.8).gp(0)
s=u.H()
a3.drawCircle(20+v*52+f*7,400+a0*5,1.2,s)
s.delete()}f=A.K()
f.sar(A.mb(D.ebn,D.ebp,D.cWs,B.HC,B.x,g))
d.aU(new A.a5(-200,412,650,1300),f)
i=new A.eb()
i.d5(21)
for(v=0;v<260;++v){f=i.aj()
j=420+i.aj()*480
a0=i.aj()
u=j/900+0.4
u=A.bN(new A.t(f*450,j),1+i.aj()*2*u,1.5+a0*4*u)
f=i.he()?B.c:B.w
a0=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
a0.r=f.j(0.06+i.aj()*0.06).gp(0)
s=a0.H()
a3.drawOval(A.bQ(u),s)
s.delete()}J.bq(a3.save())
a3.translate(225,590)
d.p_(0,1,0.34)
f=A.K()
f.sar(A.Bv(B.J,250,A.a([D.biY,D.bcY,D.bkL],a1),A.a([0,0.8,1],x.n),B.x,g,g,0))
d.ae(B.J,250,f)
a3.restore()
for(v=0;v<40;++v){n=i.aj()*450
j=640+i.aj()*260
f=i.aj()
a0=A.ar(D.afm,D.bbD,i.aj())
a0.toString
for(f=j-(6+f*10),h=-1;h<=1;++h){$.V()
a1=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
a1.b=B.ac
a1.c=1.3
a1.r=a0.gp(0)
a1.d=B.bG
a1.e=B.dS
s=a1.H()
a3.drawLine.apply(a3,[n+h*2,j,n+h*5,f+Math.abs(h)*3,s])
s.delete()}}C.hSy(d)
for(k=0;k<3;++k)C.hVD(d,D.awV[k])
C.hVs(d,D.ecx)
for(n=118;n<190;n+=11){f=B.o.F(n,3)
a0=B.o.F(n,4)
$.V()
a1=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
a1.b=B.ac
a1.c=2.4
a1.r=D.Y8.gp(0)
a1.d=B.bG
a1.e=B.dS
s=a1.H()
a3.drawLine.apply(a3,[n,452+f,n+1,436+a0,s])
s.delete()}d.br(D.ebL,D.ec1,C.is(D.bcl,1.6))
a3.restore()
return e.nS()},
hSy(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.V().r,e=x.v,d=new A.aI(f,B.ai,g,g,A.a([],e))
d.D(new A.b0(358,462))
d.D(new A.lD(354,422,370,382,374,332))
d.D(new A.ap(410,332))
d.D(new A.lD(416,382,432,422,428,462))
d.D(new A.bv())
w=A.K()
w.sar(A.mb(new A.t(354,0),new A.t(430,0),D.dnT,E.QA,B.x,g))
a0.aJ(d,w)
v=new A.eb()
v.d5(4)
for(w=a0.a,u=0;u<30;++u){t=364+v.aj()*56
s=462-v.aj()*126
r=v.aj()
q=v.aj()
p=B.w.j(0.18)
o=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
o.b=B.ac
o.c=1.1
o.r=p.gp(0)
o.d=B.bG
o.e=B.dS
n=o.H()
w.drawLine.apply(w,[t,s,t+r*3-1.5,s+8+q*12,n])
n.delete()}for(m=0;m<6;++m){l=D.d5U[m]
r=l.a
q=392+r*12
p=-l.b
o=q+r*52
k=336+(p*46-8)
r=o+r*42
p=k+(p*34+4)
j=A.a([],e)
i=new A.aI(f,B.ai,g,g,j)
j.push(new A.b0(q,336))
j.push(new A.c8(o,k,r,p))
q=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
q.b=B.ac
q.c=8
q.r=D.adP.gp(0)
q.d=B.bG
q.e=B.dS
n=q.H()
q=i.gbB().a.snapshot()
w.drawPath((i.e=new A.cv(q)).a,n)
n.delete()
for(h=0;h<6;++h){q=v.aj()
o=v.aj()
k=v.aj()
j=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
j.r=A.ar(D.bce,D.bi7,v.aj()).j(0.92).gp(0)
n=j.H()
w.drawCircle(r+(q*36-18),p+(o*18-14),8+k*7,n)
n.delete()}r+=0
q=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
q.b=B.ac
q.c=1.2
q.r=D.Y8.gp(0)
q.d=B.bG
q.e=B.dS
n=q.H()
w.drawLine.apply(w,[r,p+8,r,p+22,n])
n.delete()
p=A.bN(new A.t(r,p+28),13,7)
r=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
r.r=D.bjg.gp(0)
n=r.H()
w.drawOval(A.bQ(p),n)
n.delete()}},
hVD(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b4.a,a5=b4.b,a6=b4.c,a7=b4.d,a8=a6*0.5,a9=A.bN(new A.t(a4,a5+2),a8,a6*2.8),b0=B.w.j(0.3),b1=$.V(),b2=A.K()
b2.r=b0.gp(0)
b3.dX(a9,b2)
b1=b1.r
b2=x.v
w=new A.aI(b1,B.ai,a3,a3,A.a([],b2))
a9=a4-a6
b0=a5-a7
w.D(new A.b0(a9,b0))
w.D(new A.ap(a9,a5))
v=a4+a6
w.D(new A.c8(a4,a5+a6*0.22,v,a5))
w.D(new A.ap(v,b0))
w.D(new A.bv())
u=A.K()
u.sar(A.mb(new A.t(a9,0),new A.t(v,0),D.d6_,E.QA,B.x,a3))
b3.aJ(w,u)
t=new A.eb()
t.d5(B.o.V(a4*7))
v=b3.a
J.bq(v.save())
b3.mE(0,w)
for(s=0;s<40;++s){r=a9+t.aj()*a6*2
q=b0+t.aj()*a7
u=t.aj()
p=t.aj()
o=B.w.j(0.14)
n=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
n.b=B.ac
n.c=1
n.r=o.gp(0)
n.d=B.bG
n.e=B.dS
m=n.H()
v.drawLine.apply(v,[r,q,r+4+u*5,q+p*2-1,m])
m.delete()}u=b0+5
p=a6*2
o=D.afi.j(0.75)
n=A.K()
n.r=o.gp(0)
b3.aU(new A.a5(a9,u,a9+p,u+7),n)
for(u=a6/5,o=b0+12,n=b0+20,l=a9+2,k=0;k<B.k.bm(u);++k){j=l+k*10
i=A.a([],b2)
h=new A.aI(b1,B.ai,a3,a3,i)
i.push(new A.b0(j,o))
i.push(new A.ap(j+5,n))
i.push(new A.ap(j+10,o))
i.push(new A.bv())
i=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
i.r=D.lr.j(0.85).gp(0)
m=i.H()
i=h.gbB().a.snapshot()
v.drawPath((h.e=new A.cv(i)).a,m)
m.delete()}u=A.a([],b2)
g=new A.aI(b1,B.ai,a3,a3,u)
b1=a5-8
g.D(new A.b0(a9,b1))
for(p/=6,k=0;k<=B.k.bm(p);++k){o=(k&1)===0?0:-5
o=new A.ap(a9+k*6,b1+o)
u.push(o)
n=g.f
if(n!=null)o.by(n)
o=g.e
if(o!=null)o.a.delete()
g.e=null}b3.aJ(g,C.is(D.afi.j(0.7),1.6))
v.restore()
a9=$.V().r
b1=new A.aI(a9,B.ai,a3,a3,A.a([],b2))
u=a6*0.1
p=a4+u
o=a6*0.28
n=p-o
l=a5+1
b1.D(new A.b0(n,l))
i=a5-a7*0.55
b1.D(new A.ap(n,i))
o=p+o
b1.D(new A.c8(p,a5-a7*0.82,o,i))
b1.D(new A.ap(o,l))
b1.D(new A.bv())
l=A.K()
l.r=D.aft.gp(0)
b3.aJ(b1,l)
l=A.K()
l.r=D.aft.gp(0)
b3.ae(new A.t(a4-a6*0.62,a5-a7*0.5),u,l)
l=b4.e
u=b0-l
b1=a6*1.38
o=a4-b1
i=b0+4
p=a4+b1
f=new A.aI(a9,B.ai,a3,a3,A.a([],b2))
f.D(new A.b0(o,i))
n=b0-l*0.55
f.D(new A.c8(a4-a8,n,a4,u))
f.D(new A.c8(a4+a8,n,p,i))
f.D(new A.c8(a4,b0+a6*0.34,o,i))
f.D(new A.bv())
b0=A.K()
n=a6*1.4
b0.sar(A.mb(new A.t(a4-n,0),new A.t(a4+n,0),D.d9c,E.QA,B.x,a3))
b3.aJ(f,b0)
J.bq(v.save())
b3.mE(0,f)
for(a8=p-o,s=0;s<70;++s){e=s/69
b0=Math.sin(e*3.141592653589793)
p=t.aj()
n=(t.he()?B.w:D.bbM).j(0.16)
h=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
h.b=B.ac
h.c=0.9
h.r=n.gp(0)
h.d=B.bG
h.e=B.dS
m=h.H()
v.drawLine.apply(v,[a4+(p-0.5)*3,u,o+a8*e,i+b0*a6*0.3,m])
m.delete()}for(k=1;k<5;++k){d=u+l*k/4.6
a0=b1*k/4.6
b0=A.a([],b2)
p=new A.aI(a9,B.ai,a3,a3,b0)
n=d+2
b0.push(new A.b0(a4-a0,n))
b0.push(new A.c8(a4,d+7+k*1.5,a4+a0,n))
b0=B.w.j(0.22)
n=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
n.b=B.ac
n.c=1.2
n.r=b0.gp(0)
n.d=B.bG
n.e=B.dS
m=n.H()
b0=p.gbB().a.snapshot()
v.drawPath((p.e=new A.cv(b0)).a,m)
m.delete()}v.restore()
for(s=0;s<46;++s){e=s/45
a1=o+a8*e
a2=i+Math.sin(e*3.141592653589793)*a6*0.3
b0=t.aj()
b1=t.aj()
p=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
p.b=B.ac
p.c=1.1
p.r=D.biu.gp(0)
p.d=B.bG
p.e=B.dS
m=p.H()
v.drawLine.apply(v,[a1,a2,a1+(b0-0.5)*2,a2+3+b1*4,m])
m.delete()}a8=new A.aI(a9,B.ai,a3,a3,A.a([],b2))
a9=u+4
a8.D(new A.b0(a4-2.5,a9))
a8.D(new A.ap(a4,u-7))
a8.D(new A.ap(a4+2.5,a9))
a8.D(new A.bv())
a9=A.K()
a9.r=D.beX.gp(0)
b3.aJ(a8,a9)},
hVs(d,e){var w,v,u,t,s,r,q,p,o
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=d.a,r=0;r<2;++r){q=w+D.dhY[r]
$.V()
p=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
p.b=B.ac
p.c=3
p.r=D.Y8.gp(0)
p.d=B.bG
p.e=B.dS
o=p.H()
s.drawLine.apply(s,[q,u,q,t,o])
o.delete()}u=A.bN(e.a9(0,H.aI_),24,36)
t=$.V()
s=A.K()
s.r=D.bn6.gp(0)
d.dX(u,s)
t=new A.aI(t.r,B.ai,null,null,A.a([],x.v))
s=w-24
u=v-30
t.D(new A.b0(s,u))
t.D(new A.ap(w,v-54))
t.D(new A.ap(w+24,u))
t.D(new A.c8(w,v-24,s,u))
t.D(new A.bv())
u=A.K()
u.r=D.aer.gp(0)
d.aJ(t,u)},
bQ0:function bQ0(){var _=this
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
vd:function vd(d,e,f,g,h,i,j,k,l,m){var _=this
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
eQt:function eQt(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
bQ_:function bQ_(){this.b=this.a=null},
aUF:function aUF(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bPS:function bPS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPT:function bPT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPU:function bPU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPV:function bPV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPW:function bPW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPX:function bPX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPY:function bPY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPZ:function bPZ(){},
bPR:function bPR(d){this.a=d},
aeS:function aeS(d,e){this.a=d
this.b=e},
acR:function acR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
SY(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bP1(s)
s.by6(d)
return s},
Gp(d,e,f,g,h,i,j){var w,v=A.S(g).k("Z<1>")
v=A.de(new A.Z(g,new C.fjT(f),v),v.k("J.E"))
w=A.C(v,A.a6(v).k("cr.E"))
B.d.dO(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.d1(w,0,A.dB(3,"count",x.S),A.S(w).c))
B.d.dO(v,d)
return new C.lg(e,v,B.d.cD(v,f),h,i,"tree",j)},
ieV(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.T(c0,x.cg),c2=new C.fTf(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.k_(c4,c0)
t=A.C(c4,A.a6(c4).k("cr.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.k_(c4,c0)
r=A.C(c4,A.a6(c4).k("cr.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.k_(c4,c0)
q=A.C(c4,A.a6(c4).k("cr.E"))
for(c4=w.length,v=A.S(t).k("Z<1>"),s=v.k("J.E"),p=A.S(w).k("Z<1>"),o=p.k("J.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.M)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.rj)g="father"
else g=h===D.mG?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Z(t,new C.fTh(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.Gp(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Z(w,new C.fTi(i,m),p),o)
B.d.dO(d,c6)
c2.$2(b4,new C.lg("True or false: "+h+" is the "+g+" of "+l+".",D.axU,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lg("True or false: "+B.a.i(B.d.gI(d).b)+" is the "+g+" of "+l+".",D.axU,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Bq(m)
h=a0.length
if(h!==0){a1=a0[c6.au(h)]
h=B.a.i(a1.b)
f=A.C(new A.Z(t,new C.fTj(l,a0,c5),v),s)
e=a1.c
if(e===D.rj)e="son"
else e=e===D.mG?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.Gp(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.ey([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mk(a5,a5.r,f.k("mk<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.Gp(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gI(a0).b)
f=A.a([],c3)
for(e=A.S(a0),a2=e.k("jw<1>"),a3=new A.jw(a0,1,b3,a2),a3.pd(a0,1,b3,e.c),a3=new A.bS(a3,a3.gL(0),a2.k("bS<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.Gp(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gI(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gI(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.a7Z(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Z(t,new C.fTk(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.Gp(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Z(t,new C.fTl(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.rj
if(e)a2=b7
else a2=f===D.mG?b8:b9
if(e)f=b7
else f=f===D.mG?b8:b9
c2.$2("grand",C.Gp(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aKW(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.au(k)].b)
j=A.C(new A.Z(t,new C.fTm(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.Gp(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cHp)
h=l+" was born in "+k
c2.$2("place",C.Gp(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.cXp)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.Gp(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.M)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.Gp(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cA(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jS(b1,b3,b3)
c2.$2("year",C.Gp(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
fw7(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.SY(d),l=new A.eb()
l.d5(f)
w=C.ieV(m,l,g)
for(v=new A.dr(w,w.r,w.e);v.C();)J.h70(v.d,l)
v=A.a6(w).k("cu<1>")
u=A.C(new A.cu(w,v),v.k("J.E"))
B.d.dO(u,l)
t=A.a([],x.J)
s=A.aX(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.b3(u,new C.fw8(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.M)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ad(p)>n.a){p=w.h(0,q)
p.toString
p=s.M(0,J.q(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.q(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.C(D.avZ,x.df)
B.d.dO(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.M)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hn5(o,l))}}else if(!g&&v>3){o=C.hn5(D.avZ[l.au(14)],l)
t[t.length-1-l.au(3)]=o}return t},
hn5(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.dO(w,e)
return new C.lg(d.a,w,B.d.cD(w,v),d.d,d.e,d.f,d.r)},
hoR(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="daughter",e=C.SY(a0),d=new A.eb()
d.d5(a1)
w=A.a([],x.gl)
v=A.aX(x.N)
u=A.C(e.b,x.P)
B.d.dO(u,d)
for(t=u.length,s=x.U,r=x.s,q=0;q<u.length;u.length===t||(0,A.M)(u),++q){p=u[q]
o=B.a.i(p.b)
n=A.a([],r)
m=p.d
if(m==null)l=null
else{k=e.c
k===$&&A.c()
l=k.h(0,m)}if(l!=null){m=p.c
k=m===D.rj
if(k)j="son"
else j=m===D.mG?f:"child"
j=j[0]
if(k)m="son"
else m=m===D.mG?f:"child"
n.push(j.toUpperCase()+B.a.b4(m,1)+" of "+B.a.i(l.b))}i=e.Bq(p)
if(i.length!==0){m=p.c
k=m===D.rj
if(k)j="father"
else j=m===D.mG?"mother":"parent"
j=j[0]
if(k)m="father"
else m=m===D.mG?"mother":"parent"
n.push(j.toUpperCase()+B.a.b4(m,1)+" of "+B.a.i(B.d.gI(i).b))}h=e.a7Z(p)
if(h!=null)n.push("Married to "+B.a.i(h.b))
m=B.a.i(p.z)
if(m.length!==0)n.push("Works as "+m)
m=B.a.i(p.x)
if(m.length!==0)n.push("Born in "+m)
B.d.dO(n,d)
g=A.p_(new A.Z(n,new C.fyH(v),s))
if(g==null)continue
v.M(0,g)
w.push(new C.aXx(p.a,o,g))
if(w.length>=6)break}return w},
hrL(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.SY(a0),d=new A.eb()
d.d5(a1)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=e.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.M)(t),++r){q=t[r]
if(e.Bq(q).length>=2)u.push(q)}B.d.dO(u,d)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.M)(u),++r){n=u[r]
m=e.Bq(n)
l=A.S(m)
k=new A.jw(m,0,5,l.k("jw<1>"))
k.pd(m,0,5,l.c)
j=k.dm(0)
if(new A.N(j,new C.fK9(),A.S(j).k("N<1,H>")).fH(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.M)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
w.push(new C.asR("The children of "+m,"Tap them from the oldest to the youngest.",l,k))
if(w.length>=4)return w}u=x.S
g=A.T(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.M)(t),++r){q=t[r]
J.cc(g.c4(0,e.aln(q),new C.fKa()),q)}if(g.a>=2&&w.length<4){t=g.$ti.k("cu<1>")
f=A.C(new A.cu(g,t),t.k("J.E"))
B.d.fc(f)
v=A.a([],v)
for(u=A.d1(f,0,A.dB(5,"count",u),A.S(f).c),t=u.$ti,u=new A.bS(u,u.gL(0),t.k("bS<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=g.h(0,s==null?t.a(s):s)
s.toString
m=J.cD(s)
m.dO(s,d)
v.push(m.gI(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.M)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
w.push(new C.asR("Which generation comes first?","Tap them from the eldest generation to the youngest.",u,t))}return w},
fsy(d){return B.d.amM(D.aym,new C.fsz(d))},
i58(d){return A.p_(new A.Z(D.aym,new C.fyL(d),x.av))},
bPj(d){return C.hB2(d)},
hB2(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bPj=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bPj)
case 7:r=f
q=B.a.i(d)
q=A.ew(J.q(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bPj,v)},
Bq(d,e){return C.hB_(d,e)},
hB_(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$Bq=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$Bq)
case 7:r=g
p=B.a.i(d)
o=A.ew(J.q(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aq("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$Bq)
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
return A.i($async$Bq,v)},
bPi(d,e,f){return C.hB0(d,e,f)},
hB0(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bPi=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bPi)
case 7:r=h
q=B.a.i(d)
q=A.ew(J.q(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bPi,v)},
Br(d,e,f,g){return C.hB1(d,e,f,g)},
hB1(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$Br=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$Br)
case 7:r=i
p=B.a.i(d)
o=A.ew(J.q(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aq("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$Br)
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
return A.i($async$Br,v)},
fSZ(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
fVf(d,e,f,g){return new C.ajL(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hz8(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aV(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cy)
while(u.C())w.push(J.k(u.gR(u)))
u=x.N
w=A.d1(w,0,A.dB(4,"count",x.S),u).dm(0)
B.d.v(w,A.c2(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aK(d.h(0,"c"))
v=v==null?null:B.k.O(v)
v=B.o.E(v==null?0:v,0,3)
u=A.aK(d.h(0,"s"))
u=u==null?null:B.k.O(u)
return C.fVf(w,v,B.o.E(u==null?20:u,5,60),t)},
h84(d){var w,v,u,t,s,r,q=J.a4(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aV(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cy)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gR(q)
if(u.b(r))v.push(C.hz8(A.a2(r,t,s)))}return new C.M4(p,w,v)},
h2v(d){var w,v=A.a([],x.c)
for(w=J.aV(d.z);w.C();)v.push(C.h84(w.gR(w)))
return v},
fKC(d,e){var w=e.c===D.mG
if(d.aln(e)===0&&d.Bq(e).length!==0)return w?0:1
if(d.Bq(e).length!==0||d.a7Z(e)!=null)return w?2:3
return w?4:5},
hsP(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.SY(a4),a3=new A.eb()
a3.d5(a5)
w=A.a([],x.dT)
v=a2.b
u=A.C(v,x.P)
B.d.dO(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.M)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.U,n=o.k("J.E"),q=0;q<u.length;u.length===v||(0,A.M)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.c()
j=i.h(0,k)}h=a2.Bq(m)
g=a2.a7Z(m)
f=a2.aKW(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cA(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.rj)k="father"
else k=k===D.mG?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gI(h).b)+".")}if(j!=null){k=j.c
if(k===D.rj)k="father"
else k=k===D.mG?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.dO(l,a3)
B.d.aV(l,new C.fTF())
d=B.a.i(m.b)
a0=A.C(new A.Z(s,new C.fTG(d),o),n)
B.d.dO(a0,a3)
k=A.a([d],t)
i=A.S(a0)
a1=new A.jw(a0,0,3,i.k("jw<1>"))
a1.pd(a0,0,3,i.c)
B.d.v(k,a1)
B.d.dO(k,a3)
a1=C.fKC(a2,m)
i=new A.jw(l,0,4,p)
i.pd(l,0,4,r)
w.push(new C.b8H(d,a1,i.dm(0),k))
if(w.length>=5)break}return w},
hkI(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.a0(d,"My ")?1:0},
hrV(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.SY(a4),a3=new A.eb()
a3.d5(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.M)(t),++r){q=t[r]
if(a2.Bq(q).length>=2)u.push(q)}B.d.dO(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.M)(u),++r){l=u[r]
k=a2.Bq(l)
j=A.S(k)
i=new A.jw(k,0,4,j.k("jw<1>"))
i.pd(k,0,4,j.c)
h=i.dm(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.M)(t),++g){q=t[g]
if(q.a!==j&&!B.d.b3(h,new C.fKz(q))&&q.d!==j)i.push(q)}B.d.dO(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.jw(i,0,k,m)
j.pd(i,0,k,n)
f=j.dm(0)
j=B.a.i(l.b)
k=C.fKC(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.M)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.M)(h),++g)e.push(C.fKC(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.M)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.M)(f),++g)a0.push(C.fKC(a2,f[g]))
w.push(new C.a90(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lg:function lg(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bP1:function bP1(d){this.b=d
this.c=$},
bP2:function bP2(){},
bP3:function bP3(d){this.a=d},
fjT:function fjT(d){this.a=d},
fTf:function fTf(d){this.a=d},
fTg:function fTg(){},
fTh:function fTh(d){this.a=d},
fTi:function fTi(d,e){this.a=d
this.b=e},
fTj:function fTj(d,e,f){this.a=d
this.b=e
this.c=f},
fTe:function fTe(d,e){this.a=d
this.b=e},
fTk:function fTk(d){this.a=d},
fTl:function fTl(d){this.a=d},
fTm:function fTm(d,e,f){this.a=d
this.b=e
this.c=f},
fTd:function fTd(d,e){this.a=d
this.b=e},
fw8:function fw8(d,e){this.a=d
this.b=e},
aXx:function aXx(d,e,f){this.a=d
this.b=e
this.c=f},
fyH:function fyH(d){this.a=d},
asR:function asR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fK9:function fK9(){},
fKa:function fKa(){},
z9:function z9(d,e,f){this.a=d
this.b=e
this.c=f},
fsz:function fsz(d){this.a=d},
fyL:function fyL(d){this.a=d},
ajL:function ajL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bJR:function bJR(){},
M4:function M4(d,e,f){this.a=d
this.b=e
this.c=f},
b8H:function b8H(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
fTF:function fTF(){},
fTG:function fTG(d){this.a=d},
a90:function a90(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fKz:function fKz(d){this.a=d},
bfP:function bfP(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
aeQ:function aeQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
aj_:function aj_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aj0:function aj0(d,e,f,g,h){var _=this
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
_.aa$=h
_.c=_.a=null},
bI4:function bI4(d){this.a=d},
bI_:function bI_(){},
bI5:function bI5(){},
bHY:function bHY(){},
bHZ:function bHZ(){},
bI3:function bI3(d){this.a=d},
bI0:function bI0(d,e){this.a=d
this.b=e},
bI2:function bI2(d,e){this.a=d
this.b=e},
bI1:function bI1(d,e){this.a=d
this.b=e},
bHX:function bHX(d){this.a=d},
bb2:function bb2(d,e){this.b=d
this.a=e},
PV:function PV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aA8:function aA8(d,e,f){this.b=d
this.c=e
this.a=f},
ayz:function ayz(d,e,f){this.a=d
this.b=e
this.c=f},
atq:function atq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
atr:function atr(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.cO$=e
_.b2$=f
_.c=_.a=null},
ckB:function ckB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ckC:function ckC(d){this.a=d},
ckA:function ckA(d){this.a=d},
ckD:function ckD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ckE:function ckE(){},
ckF:function ckF(d,e){this.a=d
this.b=e},
ckG:function ckG(){},
ckH:function ckH(d){this.a=d},
ckx:function ckx(d){this.a=d},
cky:function cky(d,e){this.a=d
this.b=e},
ckz:function ckz(d,e,f){this.a=d
this.b=e
this.c=f},
cks:function cks(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cku:function cku(d,e){this.a=d
this.b=e},
ckv:function ckv(d,e){this.a=d
this.b=e},
ckt:function ckt(d,e){this.a=d
this.b=e},
ckr:function ckr(){},
ckw:function ckw(){},
bay:function bay(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cJW:function cJW(){},
axk:function axk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
axl:function axl(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
czv:function czv(d){this.a=d},
czu:function czu(d){this.a=d},
czD:function czD(d,e){this.a=d
this.b=e},
czE:function czE(d,e){this.a=d
this.b=e},
czF:function czF(d){this.a=d},
czC:function czC(d){this.a=d},
czG:function czG(d){this.a=d},
czH:function czH(d,e){this.a=d
this.b=e},
czI:function czI(){},
czJ:function czJ(d){this.a=d},
czx:function czx(d){this.a=d},
czy:function czy(d,e){this.a=d
this.b=e},
czw:function czw(d,e){this.a=d
this.b=e},
czz:function czz(){},
czA:function czA(){},
czB:function czB(d,e){this.a=d
this.b=e},
ayk:function ayk(){},
aFu:function aFu(){},
wM(d,e,f,g,h){var w,v,u=null,t=e==null,s=t?B.bz:f,r=A.m(18),q=A.a([],x.V)
if(!t)q.push(new A.ac(0,B.G,f.j(0.4),B.iW,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.v(v,A.a([A.X(g,t?B.bU:h,u,u,u,20),B.ab],w))
v.push(A.d(d,u,u,u,u,u,u,A.l(u,u,t?B.bU:h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aB(u,A.p(u,A.B(v,B.m,u,B.e,B.P,0,u,u),B.f,u,u,new A.o(s,u,u,r,q,u,B.n),u,u,u,u,B.N7,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
h8T(d,e,f,g,h,i,j){return new C.akS(i,h,d,j,e,f,g,null)},
a5v:function a5v(d,e){this.c=d
this.a=e},
bh9:function bh9(d){this.a=d},
uo:function uo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bP4:function bP4(d){this.a=d},
DV:function DV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Vj:function Vj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjN:function bjN(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
dV8:function dV8(d,e){this.a=d
this.b=e},
dV9:function dV9(d){this.a=d},
dVa:function dVa(d,e){this.a=d
this.b=e},
dV6:function dV6(d){this.a=d},
dV7:function dV7(d){this.a=d},
dV5:function dV5(d){this.a=d},
dV3:function dV3(d){this.a=d},
dV4:function dV4(d){this.a=d},
dV2:function dV2(d,e){this.a=d
this.b=e},
dVb:function dVb(d){this.a=d},
dVc:function dVc(d,e){this.a=d
this.b=e},
dVd:function dVd(d,e){this.a=d
this.b=e},
dVe:function dVe(d,e){this.a=d
this.b=e},
dVh:function dVh(d,e){this.a=d
this.b=e},
dVi:function dVi(d,e){this.a=d
this.b=e},
dVj:function dVj(d,e){this.a=d
this.b=e},
dVk:function dVk(d,e){this.a=d
this.b=e},
dVl:function dVl(d,e){this.a=d
this.b=e},
dVm:function dVm(d,e,f){this.a=d
this.b=e
this.c=f},
dVn:function dVn(d,e){this.a=d
this.b=e},
dVo:function dVo(d,e){this.a=d
this.b=e},
dVf:function dVf(d){this.a=d},
dVg:function dVg(d){this.a=d},
ZU:function ZU(d,e){this.a=d
this.b=e},
akS:function akS(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
akT:function akT(d){var _=this
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
bPg:function bPg(d){this.a=d},
bPh:function bPh(d){this.a=d},
bPf:function bPf(d){this.a=d},
bP6:function bP6(d){this.a=d},
bP7:function bP7(d){this.a=d},
bP5:function bP5(d){this.a=d},
bPc:function bPc(d,e,f){this.a=d
this.b=e
this.c=f},
bPd:function bPd(d){this.a=d},
bP9:function bP9(d,e){this.a=d
this.b=e},
bPa:function bPa(d,e,f){this.a=d
this.b=e
this.c=f},
bPe:function bPe(){},
bPb:function bPb(d,e){this.a=d
this.b=e},
bP8:function bP8(d){this.a=d},
akU:function akU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
akV:function akV(d){var _=this
_.d=$
_.e=d
_.f=0
_.r=-1
_.x=_.w=0
_.z=_.y=!1
_.c=_.a=null},
bPm:function bPm(d,e){this.a=d
this.b=e},
bPn:function bPn(d,e){this.a=d
this.b=e},
bPo:function bPo(){},
bPp:function bPp(d){this.a=d},
bPk:function bPk(d,e){this.a=d
this.b=e},
bPl:function bPl(d){this.a=d},
azP:function azP(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.e=_.d=!1},
ana:function ana(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aXw:function aXw(d){var _=this
_.e=_.d=$
_.x=_.w=_.r=_.f=0
_.Q=_.z=_.y=!1
_.as=d
_.c=_.a=null},
bZc:function bZc(d,e){this.a=d
this.b=e},
bZd:function bZd(d,e,f){this.a=d
this.b=e
this.c=f},
bZe:function bZe(d){this.a=d},
bZb:function bZb(d){this.a=d},
bZ8:function bZ8(d,e){this.a=d
this.b=e},
bZ9:function bZ9(){},
bZa:function bZa(d){this.a=d},
bZ7:function bZ7(d,e){this.a=d
this.b=e},
bZ6:function bZ6(d){this.a=d},
be9:function be9(d){this.a=d},
akt:function akt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aku:function aku(d){var _=this
_.d=$
_.w=_.r=_.f=_.e=0
_.x=d
_.y=$
_.at=_.as=_.Q=_.z=!1
_.c=_.a=null},
bMS:function bMS(){},
bN0:function bN0(d,e){this.a=d
this.b=e},
bN1:function bN1(d,e){this.a=d
this.b=e},
bN_:function bN_(d){this.a=d},
bMX:function bMX(d,e){this.a=d
this.b=e},
bMY:function bMY(){},
bMZ:function bMZ(d){this.a=d},
bMT:function bMT(d){this.a=d},
bMU:function bMU(d){this.a=d},
bMV:function bMV(d,e){this.a=d
this.b=e},
bMW:function bMW(d){this.a=d},
SX:function SX(d,e){this.c=d
this.a=e},
akR:function akR(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bOQ:function bOQ(d){this.a=d},
bOR:function bOR(d){this.a=d},
bP0:function bP0(){},
bP_:function bP_(d,e,f){this.a=d
this.b=e
this.c=f},
bOV:function bOV(d,e){this.a=d
this.b=e},
bOU:function bOU(d,e){this.a=d
this.b=e},
bOW:function bOW(d){this.a=d},
bOX:function bOX(d,e){this.a=d
this.b=e},
bOY:function bOY(d,e){this.a=d
this.b=e},
bOT:function bOT(d,e){this.a=d
this.b=e},
bOZ:function bOZ(d,e,f){this.a=d
this.b=e
this.c=f},
bOS:function bOS(d,e){this.a=d
this.b=e},
i3A(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ahU(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.M)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bC(new A.U(Date.now(),0,!1))
s=new C.fvE(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.S(a4),p=q.k("Z<1>"),q=q.k("cQ<1,n>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.M)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.yn)m.push(l===D.rj?"male":"female")
l=u.w
k=A.af(a3,!0,!1,!1,!1).cA(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.af(a3,!0,!1,!1,!1).cA(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jS(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jS(h,a2,a2)-A.jS(j,a2,a2))+" years")
l=B.a.i(u.z)
if(l.length!==0)m.push("work: "+l)
f=s.$1(u)
if(f!=null)m.push("married to "+w.h(0,f).b)
e=u.d
if(e!=null&&w.ai(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.C(new A.cQ(new A.Z(a4,new C.fvC(u,f),p),new C.fvD(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aG(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aG(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
i3B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ahU(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.M)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fvJ(v,e)
q=new C.fvH(v)
p=A.T(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.M)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.M)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.M)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.ai(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.ai(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("bc<2>")
d=A.de(new A.bc(p,d),d.k("J.E"))
n=A.C(d,A.a6(d).k("cr.E"))
B.d.fc(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.M)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gaf(e),k=new A.f5(l,new C.fvI(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ai(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aG(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hQ0(d,e,f,g){var w,v,u=C.i3C(d,e)
if(u<=0||f.length<=u)return new A.aej(!1,D.CK,f)
if(g.q(0,e.a))return new A.aej(!1,D.CK,f)
w=A.S(f).c
v=A.d1(f,0,A.dB(u,"count",x.S),w).dm(0)
return new A.aej(!0,A.d1(f,u,null,w).dm(0),v)},
hQ1(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ahU(d3),d2=d1.length
if(d2===0)return D.hb0
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.M)(d1),++u){t=d1[u]
v.c4(0,t.a,new C.daz(t))}s=new C.daQ(v)
d2=x.dy
r=A.T(w,d2)
q=new C.daI(r)
for(p=new A.dr(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.daH(r)
l=A.T(w,x.do)
for(p=new A.dr(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cc(l.c4(0,k,new C.daA()),o)}h=new C.daG(s)
g=new C.daF(l,r)
p=v.$ti.k("bc<2>")
o=p.k("Z<J.E>")
f=A.C(new A.Z(new A.bc(v,p),new C.daB(h),o),o.k("J.E"))
e=f.length===0?new A.bc(v,p).gI(0):B.d.gI(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.M)(f),++u){t=f[u]
a0=g.$2(t.a,A.aX(w))
if(a0>d){d=a0
e=t}}a1=A.aX(w)
p=x.S
a2=A.T(w,p)
a3=A.T(w,w)
a4=A.T(w,d2)
d2=x.i
a5=A.T(w,d2)
a6=A.T(w,x.d9)
a7=A.T(w,d2)
a8=A.a([],x.s)
a9=new C.daO(new C.daK(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dr(v,v.r,v.e),j=a2.gakR(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.ey([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.M(0,i))break}if(h.$1(b0)&&a2.ai(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.p_(J.dG(i==null?B.X:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.cc)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.day(a2,new C.daP(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.M)(a8),++u){b8=a8[u]
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
d2=b4.$ti.k("cu<1>")
d2=A.C(new A.cu(b4,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.M)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.FY(o,new A.t(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Kf(c5.a,new A.t(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.C(new A.cu(b6,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.M)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bQ(0,new C.daC(c6,b4))
for(d2=new A.cH(a4,a4.$ti.k("cH<1,2>")).gaf(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gR(j)
if(b6.ai(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.t(d0,b4.h(0,i).b.b))}}for(j=B.d.gaf(b5),i=new A.f5(j,new C.daD(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.aV(o,new C.daE())
c6.push(new C.aJc(new A.t(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.beJ(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hnK(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cA(d)
return w==null?null:w.b[1]},
hi_(d,e,f,g,h,i,j,k,l,m,n){return new C.a_6(k,f,j,e,l,n,m,d,g,h,i,null)},
aC7(d,e,f,g,h,i,j){return new C.bin(i,d,e,f,j,h,g,null)},
apO:function apO(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aDF:function aDF(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dWO:function dWO(d){this.a=d},
dWN:function dWN(d){this.a=d},
dWQ:function dWQ(d,e){this.a=d
this.b=e},
dWR:function dWR(d,e){this.a=d
this.b=e},
dWS:function dWS(d){this.a=d},
dWM:function dWM(d,e){this.a=d
this.b=e},
dWP:function dWP(d){this.a=d},
dWU:function dWU(d){this.a=d},
dWT:function dWT(d,e){this.a=d
this.b=e},
apI:function apI(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aDC:function aDC(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dWe:function dWe(d){this.a=d},
dWc:function dWc(d){this.a=d},
dWd:function dWd(d){this.a=d},
dWf:function dWf(d,e){this.a=d
this.b=e},
dW9:function dW9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dVB:function dVB(d){this.a=d},
dVC:function dVC(d,e){this.a=d
this.b=e},
dVT:function dVT(d){this.a=d},
dVR:function dVR(d){this.a=d},
dVS:function dVS(d,e){this.a=d
this.b=e},
dVU:function dVU(d){this.a=d},
dVV:function dVV(d,e){this.a=d
this.b=e},
dW8:function dW8(d,e){this.a=d
this.b=e},
dVQ:function dVQ(d){this.a=d},
dVP:function dVP(d){this.a=d},
dVO:function dVO(d,e){this.a=d
this.b=e},
dW5:function dW5(){},
dW6:function dW6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dW4:function dW4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dVZ:function dVZ(d){this.a=d},
dW_:function dW_(d,e,f){this.a=d
this.b=e
this.c=f},
dVY:function dVY(d,e){this.a=d
this.b=e},
dW0:function dW0(d,e){this.a=d
this.b=e},
dVW:function dVW(d,e){this.a=d
this.b=e},
dVX:function dVX(){},
dW1:function dW1(d,e){this.a=d
this.b=e},
dW2:function dW2(d){this.a=d},
dW3:function dW3(d,e){this.a=d
this.b=e},
dW7:function dW7(d,e){this.a=d
this.b=e},
dVp:function dVp(d,e){this.a=d
this.b=e},
dVq:function dVq(d,e){this.a=d
this.b=e},
dWh:function dWh(d,e,f){this.a=d
this.b=e
this.c=f},
dWb:function dWb(d,e,f){this.a=d
this.b=e
this.c=f},
dWa:function dWa(d){this.a=d},
dVr:function dVr(d){this.a=d},
dVs:function dVs(d){this.a=d},
dVt:function dVt(){},
dVu:function dVu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dVy:function dVy(d,e){this.a=d
this.b=e},
dVx:function dVx(d,e){this.a=d
this.b=e},
dVw:function dVw(d){this.a=d},
dVz:function dVz(d,e){this.a=d
this.b=e},
dVv:function dVv(d){this.a=d},
dWg:function dWg(d){this.a=d},
dVL:function dVL(){},
dVM:function dVM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dVK:function dVK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dVG:function dVG(d,e,f){this.a=d
this.b=e
this.c=f},
dVF:function dVF(d,e,f){this.a=d
this.b=e
this.c=f},
dVD:function dVD(d,e){this.a=d
this.b=e},
dVH:function dVH(d){this.a=d},
dVI:function dVI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dVE:function dVE(d,e){this.a=d
this.b=e},
dVJ:function dVJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dVN:function dVN(d,e){this.a=d
this.b=e},
dWo:function dWo(){},
dWp:function dWp(d,e){this.a=d
this.b=e},
dWq:function dWq(d){this.a=d},
dWr:function dWr(d,e){this.a=d
this.b=e},
dWk:function dWk(d){this.a=d},
dWi:function dWi(d,e){this.a=d
this.b=e},
dWl:function dWl(d,e){this.a=d
this.b=e},
dWm:function dWm(d,e){this.a=d
this.b=e},
dWn:function dWn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dWs:function dWs(d){this.a=d},
dWj:function dWj(d){this.a=d},
dVA:function dVA(d){this.a=d},
beH:function beH(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
daw:function daw(d){this.a=d},
dav:function dav(d,e){this.a=d
this.b=e},
dax:function dax(d){this.a=d},
dau:function dau(d,e){this.a=d
this.b=e},
fvE:function fvE(d,e){this.a=d
this.b=e},
fvF:function fvF(d){this.a=d},
fvG:function fvG(){},
fvC:function fvC(d,e){this.a=d
this.b=e},
fvD:function fvD(){},
fvJ:function fvJ(d,e){this.a=d
this.b=e},
fvK:function fvK(d){this.a=d},
fvL:function fvL(){},
fvH:function fvH(d){this.a=d},
fvI:function fvI(d,e){this.a=d
this.b=e},
Kf:function Kf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
FY:function FY(d,e){this.a=d
this.b=e},
beJ:function beJ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
daz:function daz(d){this.a=d},
daQ:function daQ(d){this.a=d},
daI:function daI(d){this.a=d},
daJ:function daJ(){},
daH:function daH(d){this.a=d},
daA:function daA(){},
daG:function daG(d){this.a=d},
daF:function daF(d,e){this.a=d
this.b=e},
daB:function daB(d){this.a=d},
daK:function daK(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
daL:function daL(d){this.a=d},
daM:function daM(d){this.a=d},
daN:function daN(){},
daO:function daO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
daP:function daP(){},
day:function day(d,e,f,g,h,i,j,k,l,m){var _=this
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
daC:function daC(d,e){this.a=d
this.b=e},
daD:function daD(d){this.a=d},
daE:function daE(){},
aJc:function aJc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
beK:function beK(d,e){this.b=d
this.a=e},
daR:function daR(){},
daS:function daS(d){this.a=d},
daT:function daT(d){this.a=d},
daU:function daU(){},
bio:function bio(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdO:function bdO(d,e){this.b=d
this.a=e},
bw2:function bw2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fcA:function fcA(d){this.a=d},
blB:function blB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eOj:function eOj(d){this.a=d},
eOi:function eOi(d,e){this.a=d
this.b=e},
a_6:function a_6(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aC5:function aC5(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dqE:function dqE(d,e){this.a=d
this.b=e},
dqD:function dqD(d){this.a=d},
dqB:function dqB(d){this.a=d},
dqC:function dqC(d){this.a=d},
dqN:function dqN(d){this.a=d},
dqO:function dqO(d){this.a=d},
dqM:function dqM(d,e){this.a=d
this.b=e},
dqP:function dqP(){},
dqS:function dqS(d){this.a=d},
dqL:function dqL(d,e){this.a=d
this.b=e},
dqR:function dqR(){},
dqT:function dqT(d){this.a=d},
dqK:function dqK(d,e){this.a=d
this.b=e},
dqU:function dqU(d){this.a=d},
dqJ:function dqJ(d){this.a=d},
dqV:function dqV(d){this.a=d},
dqI:function dqI(d){this.a=d},
dqW:function dqW(d){this.a=d},
dqH:function dqH(d){this.a=d},
dqX:function dqX(d){this.a=d},
dqG:function dqG(d){this.a=d},
dqY:function dqY(d){this.a=d},
dqF:function dqF(d,e){this.a=d
this.b=e},
dqQ:function dqQ(d){this.a=d},
adc:function adc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bin:function bin(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
adb:function adb(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bim:function bim(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dqZ:function dqZ(d){this.a=d},
dr_:function dr_(d,e){this.a=d
this.b=e},
aC6:function aC6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIe:function aIe(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
add:function add(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dr8:function dr8(d){this.a=d},
FU:function FU(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hcR(d){var w=d.T,v=x.N
return w.jc(w,new C.cbi(),v,v)},
hHx(d){var w=d.bz
if(w>=0)return w
return 5},
hcT(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hcR(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
hcS(d,e){var w=C.hcT(d,e)
if(w!=null&&w.cd(new A.U(Date.now(),0,!1)))return!0
return!1},
hHy(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hcR(d),w,w)
u=C.hcT(d,e)
t=u!=null&&u.cd(new A.U(Date.now(),0,!1))?u:new A.U(Date.now(),0,!1)
v.n(0,s,t.bS(A.dE(30,0,0,0,0,0).a).a7().ad())
d.T=v},
b_i(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b_i=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lp(t,B.Iu),$async$b_i)
case 3:if(l){u=!0
w=1
break}u=A.kZ(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Iu,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_i,v)},
cbi:function cbi(){},
hHv(){var w,v=$.pD(),u=J.e4(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.au(32)]
return"FT"+B.d.hv(u)},
IJ(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$IJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c6(),$async$IJ)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_family_tree_backup_codes_v1",null,!1,B.bK),$async$IJ)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.q(r,"codes")
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
return A.i($async$IJ,v)},
a7e(d){return C.hHw(d)},
hHw(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a7e=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c6(),$async$a7e)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hI("ngmy_family_tree_backup_codes_v1",A.G(["codes",d,"savedAt",new A.U(Date.now(),0,!1).a7().ad()],x.N,x.z),!1,!1,B.cG,null),$async$a7e)
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
return A.i($async$a7e,v)},
cbh(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cbh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.IJ(),$async$cbh)
case 3:t=m.jV(f),t=t.gaf(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gR(t)
q=r.b
if(s.b(q)){p=J.a4(q)
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
return A.i($async$cbh,v)},
ND(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$ND=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cbh(d),$async$ND)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.IJ(),$async$ND)
case 6:s=f
r=J.a4(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dP(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.U(Date.now(),0,!1).a7().ad())
r.n(s,t,o)
w=9
return A.b(C.a7e(s),$async$ND)
case 9:case 8:u=t
w=1
break
case 5:n=C.hHv()
w=10
return A.b(C.IJ(),$async$ND)
case 10:s=f
J.aG(s,n,A.G(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.U(Date.now(),0,!1).a7().ad(),"updatedAt",new A.U(Date.now(),0,!1).a7().ad()],x.N,x.K))
w=11
return A.b(C.a7e(s),$async$ND)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ND,v)},
b_h(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b_h=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.IJ(),$async$b_h)
case 3:t=f
for(s=J.dn(t),r=s.gdT(t),r=r.dm(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.M)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a7e(t),$async$b_h)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b_h,v)},
a7f(d,e,f){var w=0,v=A.j(x.H),u
var $async$a7f=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.apN(d,e),$async$a7f)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.ND(d),$async$a7f)
case 7:w=4
break
case 5:w=8
return A.b(C.b_h(d),$async$a7f)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a7f,v)},
apH(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$apH=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.apN(f,e),$async$apH)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c6(),$async$apH)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.IJ(),$async$apH)
case 7:q=o.q(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a4(q)
if(!J.A(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apH,v)},
b_g(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b_g=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c6(),$async$b_g)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.IJ(),$async$b_g)
case 4:t=q.q(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a4(t)
if(!J.A(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_g,v)},
hHz(){var w,v=$.pD(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.au(32)]
return"FT"+B.d.hv(u)},
apK(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$apK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c6(),$async$apK)
case 3:if(!g){u=null
w=1
break}t=C.hHz()
w=4
return A.b(A.Vk(),$async$apK)
case 4:s=g
r=B.dI.aM(B.T.ao(d.eX(),null))
r=B.cI.gcs().aM(r)
q=e?999:2
J.aG(s,t,A.G(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.U(Date.now(),0,!1).a7().ad()],x.N,x.K))
w=5
return A.b(A.a7g(s),$async$apK)
case 5:p=e?999:2
u=new A.a0h("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apK,v)},
apJ(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$apJ=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Vk(),$async$apJ)
case 3:p=a0
o=J.a4(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a4(n)
l=A.aK(m.h(n,"usesRemaining"))
k=l==null?null:B.k.O(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b_g(J.k(l==null?"":l),j),$async$apJ)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cg.cz(0,B.cF.aM(t))
s=C.hcU(r)}catch(f){q=A.ab(f)
$.am.$1("[family tree qr stash] decode: "+A.w(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dP(A.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.U(Date.now(),0,!1).a7().ad())
o.n(p,g,l)}w=5
return A.b(A.a7g(p),$async$apJ)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apJ,v)},
hcU(d){var w,v,u,t,s=null
try{w=B.T.aN(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hHB(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
fXs(d){var w=0,v=A.j(x.m),u,t,s
var $async$fXs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.apJ(t[1])
w=1
break}u=null
w=1
break}u=C.hcU(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fXs,v)},
hHB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.dc(v,x.f)
u=A.cF(u,new C.cbk(),u.$ti.k("J.E"),x.k)
t=A.a6(u).k("Z<J.E>")
s=A.C(new A.Z(u,new C.cbl(),t),t.k("J.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.U(Date.now(),0,!1)
q=A.T(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jV(p),t=t.gaf(t),o=x.B;t.C();){n=t.gR(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.dc(l,u)
n=A.cF(n,new C.cbm(),n.$ti.k("J.E"),o)
k=A.a6(n).k("Z<J.E>")
j=A.C(new A.Z(n,new C.cbn(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.apL(h,w,s,r,q)},
apN(d,e){var w=0,v=A.j(x.y),u,t
var $async$apN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Nu(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.AV(d),$async$apN)
case 3:u=t.cK(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apN,v)},
cbt(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cbt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.AV(d),$async$cbt)
case 3:t=s.b6(f,new C.cbu(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aV(t,new C.cbv())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cbt,v)},
Vl(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Vl=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.apN(e,d),$async$Vl)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.ND(e),$async$Vl)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.AV(e),$async$Vl)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dG(r,new C.cbr(g))
r=A.C(t,t.$ti.k("J.E"))}t=J.a4(r)
if(t.gam(r)){u=null
w=1
break}t=t.dF(r,new C.cbs(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.L0(e,o),$async$Vl)
case 14:n=i
if(J.cK(n))q.n(0,o,n)
case 12:r.length===t||(0,A.M)(r),++p
w=11
break
case 13:u=new C.apL(s,B.a.i(e.toLowerCase()),r,new A.U(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Vl,v)},
b_l(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b_l=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Vl(d,e,f,g),$async$b_l)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.GF(A.Kb(q.eX(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_l,v)},
b_k(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b_k=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Vl(d,e,f,g),$async$b_k)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.apK(r,f),$async$b_k)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aGf(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_k,v)},
Vm(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Vm=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fXs(a0),$async$Vm)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.apH(g.a,d,e,f,s,r),$async$Vm)
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
return A.b(C.bBg(e,j),$async$Vm)
case 12:case 11:w=13
return A.b(C.ahF(e,j,s),$async$Vm)
case 13:h=n.h(0,i)
w=h!=null&&J.cK(h)?14:15
break
case 14:w=16
return A.b(C.B5(e,i,h),$async$Vm)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.M)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bpc(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Vm,v)},
apL:function apL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cbp:function cbp(){},
cbq:function cbq(){},
cbo:function cbo(){},
cbk:function cbk(){},
cbl:function cbl(){},
cbm:function cbm(){},
cbn:function cbn(){},
cbu:function cbu(){},
cbv:function cbv(){},
cbr:function cbr(d){this.a=d},
cbs:function cbs(d){this.a=d},
h50(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f8(null,x.H)
return A.hE(d,new C.apM(w,e,g,i,f,h,null),!0,null,x.H)},
dat(d,e,f,g,h,i,j,k){return new C.beG(i,e,k,j,g,f,h,d,null)},
apM:function apM(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aDE:function aDE(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dWB:function dWB(d){this.a=d},
dWC:function dWC(d,e,f){this.a=d
this.b=e
this.c=f},
dWG:function dWG(d,e){this.a=d
this.b=e},
dWH:function dWH(d){this.a=d},
dWy:function dWy(d){this.a=d},
dWz:function dWz(d,e){this.a=d
this.b=e},
dWA:function dWA(d,e){this.a=d
this.b=e},
dWF:function dWF(d){this.a=d},
dWE:function dWE(d,e){this.a=d
this.b=e},
dWD:function dWD(){},
dWJ:function dWJ(d){this.a=d},
dWK:function dWK(d,e){this.a=d
this.b=e},
dWI:function dWI(d,e){this.a=d
this.b=e},
daV:function daV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
beI:function beI(d,e,f){this.d=d
this.e=e
this.a=f},
act:function act(d,e,f){this.c=d
this.d=e
this.a=f},
beG:function beG(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
beL:function beL(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_r:function a_r(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDD:function aDD(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dWt:function dWt(d,e){this.a=d
this.b=e},
dWu:function dWu(d){this.a=d},
dWv:function dWv(d){this.a=d},
dWw:function dWw(d){this.a=d},
dWx:function dWx(d){this.a=d},
a_s:function a_s(d){this.a=d},
bjO:function bjO(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dWL:function dWL(d,e){this.a=d
this.b=e},
aYQ(d,e){return new C.aYP(d,e,null)},
aYP:function aYP(d,e,f){this.c=d
this.d=e
this.a=f},
i64(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b4(d,11)},
idx(d){return A.bT(B.K,null,new C.fM3(new C.tV(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
heO(d,e){return new C.asF(e,d,null)},
aQn(d,e,f,g,h,i,j){var w=C.i64(i)
if(w!=null)return A.bx(e,new A.a7(j,f,new C.a6k(w,!0,null),null),B.aq)
return L.aPK(e,B.bW,f,g,h,i,j)},
lI:function lI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6k:function a6k(d,e,f){this.c=d
this.d=e
this.a=f},
bjv:function bjv(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b2$=e
_.c=_.a=null},
dIq:function dIq(d){this.a=d},
dIr:function dIr(){},
dIs:function dIs(d,e){this.a=d
this.b=e},
bju:function bju(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fM3:function fM3(d){this.a=d},
fM2:function fM2(d,e){this.a=d
this.b=e},
fM1:function fM1(d,e){this.a=d
this.b=e},
fM0:function fM0(d,e){this.a=d
this.b=e},
asF:function asF(d,e,f){this.c=d
this.d=e
this.a=f},
ciY:function ciY(d,e){this.a=d
this.b=e},
aLx:function aLx(){},
idi(d){var w=null
return A.cf(w,w,!0,w,new C.fLq(),d,w,!0,!0,x.e2)},
ies(d,e,f,g,h){var w=null
return A.cf(w,w,!0,w,new C.fSV(h,g,f,e),d,w,!0,!0,x.N)},
idk(d,e){var w=null
return A.cf(w,w,!0,w,new C.fLv(e),d,w,!0,!0,x.dY)},
idj(d){var w=null
return A.cf(w,w,!0,w,new C.fLu(),d,w,!0,!0,x.c5)},
aTm:function aTm(d,e){this.a=d
this.b=e},
aTl:function aTl(d){this.a=d},
aRk:function aRk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fLq:function fLq(){},
fSV:function fSV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fLv:function fLv(d){this.a=d},
fLu:function fLu(){},
Z4:function Z4(d,e){this.c=d
this.a=e},
ayT:function ayT(){var _=this
_.d=$
_.c=_.a=_.e=null},
d2d:function d2d(d){this.a=d},
d2e:function d2e(d){this.a=d},
d2c:function d2c(d,e){this.a=d
this.b=e},
d2f:function d2f(d){this.a=d},
d2g:function d2g(d){this.a=d},
Z3:function Z3(d){this.a=d},
ayS:function ayS(){this.d=$
this.c=this.a=null},
d29:function d29(d){this.a=d},
d2a:function d2a(d){this.a=d},
d2b:function d2b(d){this.a=d},
YB:function YB(d){this.a=d},
axz:function axz(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cAF:function cAF(){},
cAL:function cAL(d){this.a=d},
cAM:function cAM(d){this.a=d},
cAN:function cAN(d){this.a=d},
cAK:function cAK(){},
cAO:function cAO(d){this.a=d},
cAP:function cAP(d){this.a=d},
cAJ:function cAJ(){},
cAQ:function cAQ(d,e){this.a=d
this.b=e},
cAI:function cAI(d,e){this.a=d
this.b=e},
cAG:function cAG(d,e){this.a=d
this.b=e},
cAR:function cAR(d){this.a=d},
cAH:function cAH(){},
cAS:function cAS(d){this.a=d},
a1c:function a1c(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bvT:function bvT(){this.d=$
this.c=this.a=null},
fbV:function fbV(d,e){this.a=d
this.b=e},
fbW:function fbW(d){this.a=d},
fbX:function fbX(d,e){this.a=d
this.b=e},
aby:function aby(d,e){this.a=d
this.b=e},
FK:function FK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bvR:function bvR(d,e){var _=this
_.d=$
_.bx$=d
_.aa$=e
_.c=_.a=null},
fbT:function fbT(d,e){this.a=d
this.b=e},
axs:function axs(d,e){this.c=d
this.a=e},
bvS:function bvS(d,e){var _=this
_.d=$
_.bx$=d
_.aa$=e
_.c=_.a=null},
fbU:function fbU(d){this.a=d},
bvQ:function bvQ(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aNz:function aNz(){},
aNA:function aNA(){},
bDc(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bm(u),s=B.o.E(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oO(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fJX(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cX(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cX(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cX(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aZ(B.o.u(s),2,"0")
n.push(A.cX(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Y0(A.cX(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aQ_(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aQ_=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hV().kW(85,1280,B.eJ),$async$aQ_)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fj(),$async$aQ_)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.heN()
w=9
return A.b(C.ciX(q,r),$async$aQ_)
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
return A.i($async$aQ_,v)},
aQl(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aQl=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.ciU(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cF.aM(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.V().LJ(p,!0,null,i).da(0,B.fT),$async$aQl)
case 9:n=a1
w=10
return A.b(n.lG(),$async$aQl)
case 10:m=a1
w=11
return A.b(J.a2U(m).hw(B.h7),$async$aQl)
case 11:l=a1
J.a2U(m).t()
if(l==null){w=8
break}i=J.eV(B.dF.gaQ(l))
k="data:image/png;base64,"+B.cI.gcs().aM(i)
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
return A.i($async$aQl,v)},
fJX:function fJX(){},
tV:function tV(d){this.a=d},
asE:function asE(d,e,f){this.c=d
this.d=e
this.a=f},
aF5:function aF5(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eLt:function eLt(d,e){this.a=d
this.b=e},
eLk:function eLk(d){this.a=d},
eLl:function eLl(d){this.a=d},
eLr:function eLr(d,e){this.a=d
this.b=e},
eLq:function eLq(d,e){this.a=d
this.b=e},
eLn:function eLn(d,e){this.a=d
this.b=e},
eLm:function eLm(d,e){this.a=d
this.b=e},
eLo:function eLo(d){this.a=d},
eLp:function eLp(d,e){this.a=d
this.b=e},
eLs:function eLs(d,e){this.a=d
this.b=e},
eLf:function eLf(d,e){this.a=d
this.b=e},
eLj:function eLj(d){this.a=d},
eLi:function eLi(d,e){this.a=d
this.b=e},
eLh:function eLh(d){this.a=d},
eLu:function eLu(d,e){this.a=d
this.b=e},
eLv:function eLv(d,e){this.a=d
this.b=e},
eLg:function eLg(d,e){this.a=d
this.b=e},
hrz(d,e,f){var w="thumbnailPath",v=e.ag()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.G(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.U(Date.now(),0,!1).a7().ad(),"project",v],x.N,x.z)},
fJY(d,e,f){var w=0,v=A.j(x.N),u
var $async$fJY=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.T.ao(C.hrz(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fJY,v)},
bDe(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bDe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fJY(!0,d,e),$async$bDe)
case 4:w=3
return A.b(r.asC(g,d,e.a),$async$bDe)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dI.aM(B.T.ao(C.hrz(d,e,null),null))
u="NGMY_WS:"+B.ks.gcs().aM(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDe,v)},
hjn(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
h4G(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d2(s,"NGMYWSSYNC2|"))return!0
if(J.d2(s,"NGMY_WS:"))return!0
if(J.f_(s,t))return!0
if(J.d2(s,"{"))try{w=B.T.aN(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
ibb(d){var w,v,u,t=C.hjn(d)
if(t==null)return null
if(C.h4G(t))return t
w=B.a.cD(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b4(t,w))
if(C.h4G(v))return v}u=B.a.cD(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b4(t,u))
if(C.h4G(v))return v}return null},
h4F(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d2(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d2(q,"NGMY_WS:")){v=B.cg.cz(0,B.cF.aM(J.nd(q,8)))
w=t.a(B.T.aN(0,v,r))}else w=t.a(B.T.aN(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.h_5(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bDd(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bDd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.asB(t[1]),$async$bDd)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.h4F(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.h4F(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDd,v)},
h4E(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lq(w,v,d.c,d.d,new A.U(Date.now(),0,!1))},
bCK(){var w=0,v=A.j(x.o),u,t
var $async$bCK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.GR(),$async$bCK)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.h4F(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCK,v)},
hsy(d,e,f,g){return A.bT(B.K,null,new C.fSL(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fSL:function fSL(d,e,f){this.a=d
this.b=e
this.c=f},
ady:function ady(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eLx:function eLx(d,e){this.a=d
this.b=e},
eLy:function eLy(d,e){this.a=d
this.b=e},
eLz:function eLz(d,e){this.a=d
this.b=e},
eLA:function eLA(d,e){this.a=d
this.b=e},
eLw:function eLw(d){this.a=d},
asy:function asy(d,e,f){this.c=d
this.d=e
this.a=f},
bl6:function bl6(){var _=this
_.c=_.a=_.e=_.d=null},
eLa:function eLa(d,e){this.a=d
this.b=e},
eLb:function eLb(d){this.a=d},
eLc:function eLc(d){this.a=d},
asD:function asD(d){this.a=d},
aF4:function aF4(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eLe:function eLe(d){this.a=d},
eLd:function eLd(d){this.a=d},
hKO(d,e,f,g,h){return new C.Oh(h,g,d,e,f,null)},
aJU:function aJU(d,e){this.a=d
this.b=e},
Oh:function Oh(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aF6:function aF6(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eLX:function eLX(){},
eLT:function eLT(d,e){this.a=d
this.b=e},
eLU:function eLU(d){this.a=d},
eLE:function eLE(d){this.a=d},
eLC:function eLC(d){this.a=d},
eLD:function eLD(d){this.a=d},
eLN:function eLN(d,e){this.a=d
this.b=e},
eLK:function eLK(d,e){this.a=d
this.b=e},
eLL:function eLL(d,e){this.a=d
this.b=e},
eLM:function eLM(d,e,f){this.a=d
this.b=e
this.c=f},
eLI:function eLI(d,e,f){this.a=d
this.b=e
this.c=f},
eLG:function eLG(d){this.a=d},
eLH:function eLH(d){this.a=d},
eLJ:function eLJ(d){this.a=d},
eM_:function eM_(d){this.a=d},
eLZ:function eLZ(d){this.a=d},
eM0:function eM0(d){this.a=d},
eLY:function eLY(d){this.a=d},
eLB:function eLB(d){this.a=d},
eLF:function eLF(d,e){this.a=d
this.b=e},
eLW:function eLW(d,e){this.a=d
this.b=e},
eLV:function eLV(d,e){this.a=d
this.b=e},
eLQ:function eLQ(d){this.a=d},
eLR:function eLR(d){this.a=d},
eLS:function eLS(d,e){this.a=d
this.b=e},
eLP:function eLP(d,e){this.a=d
this.b=e},
eLO:function eLO(d,e,f){this.a=d
this.b=e
this.c=f},
bxz:function bxz(){},
AK(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ag4(d,e,f){return C.i_y(d,e,f)},
i_y(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ag4=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aq("String",e,f),$async$ag4)
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
return A.i($async$ag4,v)},
ag3(d,e){return C.i_x(d,e)},
i_x(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ag3=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ag3)
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
return A.i($async$ag3,v)},
hZi(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.ST(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bAg(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bAg=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b2y(q),$async$bAg)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aQl(q,!1),$async$bAg)
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
return A.i($async$bAg,v)},
hyt(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aK(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.r8(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.r8(p,J.k(u==null?"":u),1,o,q)},
h_5(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.dc(s,x.f)
w=A.cF(w,new C.cA2(),w.$ti.k("J.E"),x.Q)
v=A.a6(w).k("Z<J.E>")
r=A.C(new A.Z(w,new C.cA3(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lq(w,v,u,r,t==null?new A.U(Date.now(),0,!1):t)},
i3w(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.rj
case"female":case"f":return D.mG
default:return D.yn}},
hog(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h8U(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.i3w(v==null?j:J.k(v))
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
m=m==null?j:B.k.O(m)
if(m==null)m=1
l=J.A(d.h(0,"hidden"),!0)
k=A.aK(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.O(k)
return new C.hU(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
i3y(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Np
case"viewer":return D.kE
default:return D.u4}},
i3z(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
GG(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aP6(d,e){return B.a.i(e.toLowerCase())===C.GG(d,e)&&d.y!==D.kE},
u6(d,e){var w,v=d.y
if(v===D.kE)return!1
w=B.a.i(e.toLowerCase())
if(w===C.GG(d,e))return!0
if(v===D.Np)return!0
v=d.e
return new A.N(v,A.h4L(),A.S(v).k("N<1,n>")).q(0,w)},
i2Z(d){return J.dG(d,new C.fuE()).gL(0)},
fTv(d){var w=0,v=A.j(x.y),u,t
var $async$fTv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.AV(d),$async$fTv)
case 3:u=t.r3(f,new C.fTw(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fTv,v)},
bBg(d,e){var w=0,v=A.j(x.H),u,t
var $async$bBg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.AV(d),$async$bBg)
case 3:t=g
if(J.r3(t,new C.fsx(e))){w=1
break}if(C.i2Z(t)>=2)throw A.W(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bBg,v)},
akX(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.dc(h,x.f)
w=A.cF(w,new C.bPq(),w.$ti.k("J.E"),x.P)
v=A.a6(w).k("Z<J.E>")
g=A.C(new A.Z(w,new C.bPr(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b6(u,new C.bPs(),x.N)
t=A.C(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.A(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bi(J.k(q==null?"":q))
if(q==null)q=new A.U(Date.now(),0,!1)
p=A.aK(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.k.O(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.i3y(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aV(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cy)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gR(f)
if(l.b(i))m.push(A.a2(i,k,j))}return new C.kJ(w,v,s,!r,t,g,q,p,o,n,m)},
hop(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
D3(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$D3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.RH(d),$async$D3)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$D3)
case 4:t=f
w=5
return A.b(t.a6m(0),$async$D3)
case 5:w=6
return A.b(C.fju(t,l),$async$D3)
case 6:s=f
if(J.cK(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a4(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hjX(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oN(l,n),$async$D3)
case 11:u=n
w=1
break
case 10:case 8:m=A.aU(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hjX(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oN(l,n),$async$D3)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$D3,v)},
fju(d,e){return C.hWL(d,e)},
hWL(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fju=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a4(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.AK(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.T.aN(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aV(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gR(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.AK(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.T.aN(0,m,null)
if(!a0.b(l)){w=7
break}k=C.h_5(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.AK(a9)+"_"+n))
i=C.hZi(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b2y(h),$async$fju)
case 17:g=b1
if(g!=null){i=i.ST(g)
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
case 8:J.RS(q,new C.fjv())
if(p&&J.ad(q)!==0)C.oN(a9,q)
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
return A.i($async$fju,v)},
bBG(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bBG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.RH(d),$async$bBG)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.D3(r),$async$bBG)
case 4:t=p.aV(g)
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
return A.i($async$bBG,v)},
hjX(d){var w,v,u,t
try{w=B.T.aN(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.dc(w,x.f)
v=A.cF(v,new C.ffm(),v.$ti.k("J.E"),x.fA)
u=A.a6(v).k("Z<J.E>")
v=A.C(new A.Z(v,new C.ffn(),u),u.k("J.E"))
B.d.aV(v,new C.ffo())
return v}catch(t){v=A.a([],x.D)
return v}},
oN(d,e){return C.id8(d,e)},
id8(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oN=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.RH(b2),$async$oN)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$oN)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.AK(a8)
p=A.aU(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.T.aN(0,p,null)),new C.fLh(),a2).fH(0)
a2=J.b6(b3,new C.fLi(),a2).c0(0,new C.fLj())
n=A.de(a2,a2.$ti.k("J.E"))
a2=o,a2=A.en(a2,a2.r,A.a6(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f_(n,m)?17:18
break
case 17:a5=C.AK(a8)
l=A.aU(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a8y(l),$async$oN)
case 19:t=21
a5=C.AK(a8)
k=A.aU(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.T.aN(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a8y(a5==null?null:J.k(a5)),$async$oN)
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
return A.b(C.ag3(r,"ngmy_worksheet_item_v3_"+C.AK(a8)+"_"+m),$async$oN)
case 29:w=30
return A.b(C.ag3(r,"ngmy_worksheet_thumb_v3_"+C.AK(a8)+"_"+m),$async$oN)
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
case 14:case 10:a2=J.cD(b3),a3=a2.gaf(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gR(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bAg(h),$async$oN)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ag4(r,"ngmy_worksheet_thumb_v3_"+C.AK(a8)+"_"+a4,f),$async$oN)
case 40:g=i.ST(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ag3(r,"ngmy_worksheet_thumb_v3_"+C.AK(a8)+"_"+a4),$async$oN)
case 41:g=i.ST(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ag3(r,"ngmy_worksheet_thumb_v3_"+C.AK(a8)+"_"+a4),$async$oN)
case 42:case 34:a4=i.a
w=43
return A.b(C.ag4(r,"ngmy_worksheet_item_v3_"+C.AK(a8)+"_"+a4,B.T.ao(g.ag(),null)),$async$oN)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.cc(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ag4(r,"ngmy_worksheets_index_v3_"+C.AK(a8),B.T.ao(q,null)),$async$oN)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eV(b3,new C.fLk(q))
a4=a3.$ti.k("cQ<1,a8<n,@>>")
a7=A.C(new A.cQ(a3,new C.fLl(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.ag4(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.T.ao(a0,null)),$async$oN)
case 45:w=46
return A.b(J.hxz(r),$async$oN)
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
return A.i($async$oN,v)},
Lq(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Lq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.D3(d),$async$Lq)
case 3:t=g
s=J.cD(t)
r=s.bg(t,new C.fTu(e))
if(r===-1)s.c8(t,0,e)
else s.n(t,r,e)
u=C.oN(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Lq,v)},
bBu(d,e){var w=0,v=A.j(x.H),u
var $async$bBu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.D3(d),$async$bBu)
case 2:u=g
J.nx(u,new C.fv7(e))
w=3
return A.b(C.oN(d,u),$async$bBu)
case 3:return A.h(null,v)}})
return A.i($async$bBu,v)},
GI(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$GI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$GI)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.T.aN(0,i,null)
if(x.j.b(t)){j=J.dc(t,x.f)
j=A.cF(j,new C.fxX(),j.$ti.k("J.E"),x.k)
s=A.a6(j).k("Z<J.E>")
r=A.C(new A.Z(j,new C.fxY(),s),s.k("J.E"))
B.d.aV(r,new C.fxZ())
k=r}}catch(h){}w=4
return A.b(C.fg6(d),$async$GI)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hX7(k,p,d)
j=A.S(o)
s=j.k("N<1,a8<n,@>>")
s=A.C(new A.N(o,new C.fy_(),s),s.k("ak.E"))
n=B.T.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.QU(d,o),$async$GI)
case 7:case 6:j=j.k("Z<1>")
m=A.C(new A.Z(o,new C.fy0(d),j),j.k("J.E"))
if(m.length!==0)C.aOS(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$GI,v)},
fL3(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fL3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QU(d,e),$async$fL3)
case 3:t=J.dG(e,new C.fL4(d))
s=A.C(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aOS(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fL3,v)},
a2N(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a2N=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a2N)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.T.aN(0,l,null)
if(x.j.b(u)){m=J.dc(u,x.f)
m=A.cF(m,new C.fTp(),m.$ti.k("J.E"),x.k)
t=A.a6(m).k("Z<J.E>")
s=A.C(new A.Z(m,new C.fTq(),t),t.k("J.E"))
o=s}}catch(k){}q=J.qp(o,new C.fTr(e))
if(B.a.i(e.x).length===0&&C.u6(e,d)){m=B.a.i(d.toLowerCase())
p=e.aEi(e.y===D.kE?D.kE:D.u4,m)}else p=e
if(q===-1)J.pG(o,0,p)
else J.aG(o,q,p)
w=3
return A.b(C.QU(d,o),$async$a2N)
case 3:w=C.u6(p,d)?4:5
break
case 4:w=6
return A.b(C.aOR(C.GG(p,d),p),$async$a2N)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a2N,v)},
aP2(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aP2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.GI(d),$async$aP2)
case 2:u=g
t=J.cD(u)
s=A.p_(t.eV(u,new C.fuP(e)))
t.bt(u,new C.fuQ(e))
w=3
return A.b(C.QU(d,u),$async$aP2)
case 3:w=s!=null&&C.aP6(s,d)?4:5
break
case 4:w=6
return A.b(C.ffq(e),$async$aP2)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aP2,v)},
ahU(d){var w=d.f,v=A.S(w).k("Z<1>")
w=A.C(new A.Z(w,new C.fTA(),v),v.k("J.E"))
return w},
h2j(d,e){var w,v=d.f,u=A.p_(new A.Z(v,new C.fuj(e),A.S(v).k("Z<1>")))
v=C.ahU(d)
w=A.S(v).k("Z<1>")
v=A.C(new A.Z(v,new C.fuk(e,u),w),w.k("J.E"))
B.d.aV(v,new C.ful())
return v},
i3C(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hsC(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bg(C.h2j(d,u),new C.fSW(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
i59(d,e){var w
if(e==null||e.length===0)return 1
w=C.h2j(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fyM(),A.S(w).k("N<1,H>")).f9(0,B.AC)+1},
id1(d){var w,v=C.ahU(d)
if(v.length===0)return null
w=new A.Z(v,new C.fKY(),A.S(v).k("Z<1>"))
if(!w.gam(0))return w.gI(0)
return B.d.gI(v)},
i3x(d){return A.G(["id",d.a,"name",d.b,"gender",C.hog(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
i54(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aX(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.M)(a0),++u){q=a0[u]
p=q.a
r.M(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.yn?n:q.c
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
d=q.aEd(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.M)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cKE(a1,w,a3.d,a2.y,s,a0,v)},
AV(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$AV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$AV)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aU(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.T.aN(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.dc(t,x.f)
p=A.cF(p,new C.fxU(),p.$ti.k("J.E"),x.k)
s=A.a6(p).k("Z<J.E>")
p=A.C(new A.Z(p,new C.fxV(),s),s.k("J.E"))
B.d.aV(p,new C.fxW())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$AV,v)},
ahF(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ahF=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.u4:D.kE
a7=C.GG(b2,b3)
w=2
return A.b(C.AV(b1),$async$ahF)
case 2:a8=b5
a9=J.cD(a8)
b0=a9.bg(a8,new C.fKT(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bBg(b1,b2),$async$ahF)
case 5:case 4:if(b0===-1){u=b2.aEi(a6,a7)
a9.c8(a8,0,u)}else{t=a9.h(a8,b0)
s=A.T(x.N,x.P)
for(r=t.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.M)(r),++p){o=r[p]
s.n(0,o.a,o)}for(r=b2.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.M)(r),++p){n=r[p]
m=n.a
l=s.h(0,m)
if(l==null)s.n(0,m,n)
else{k=n.f
j=k==null?null:B.a.i(k)
k=n.b
k=k.length!==0?k:l.b
i=n.c
i=i!==D.yn?i:l.c
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
s.n(0,m,l.aEd(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.C(new A.bc(s,k),k.k("J.E"))
k=a5?D.u4:D.kE
u=t.cKG(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.QU(b1,a8),$async$ahF)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aOR(B.a.i(b3.toLowerCase()),u),$async$ahF)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ahF,v)},
hkl(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.U(Date.now(),0,!1).a7().ad(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.S(m).k("N<1,a8<n,@>>"),k=A.C(new A.N(m,C.hrI(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.G(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.G(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a7().ad(),"updatedAt",o],r,x.K),"createdAt",s.a7().ad(),"updatedAt",o],r,x.z)},
hkm(d,e){var w=new A.U(Date.now(),0,!1).a7().ad(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.S(u).k("N<1,a8<n,@>>")
u=A.C(new A.N(u,C.hrI(),t),t.k("ak.E"))
return A.G(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a7().ad(),"updatedAt",w],x.N,x.z)},
hUG(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a4(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.akX(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.h4L(),A.S(j).k("N<1,n>")).c0(0,new C.ffU())
t=A.C(j,j.$ti.k("J.E"))
if(u===v)s=D.u4
else s=B.d.q(t,u)?D.Np:D.kE
return w.aEi(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.akX(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.dc(q,h)
h=A.cF(h,new C.ffV(),h.$ti.k("J.E"),x.P)
p=A.a6(h).k("Z<J.E>")
o=A.C(new A.Z(h,new C.ffW(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.ffX(),x.N).c0(0,new C.ffY())
t=A.C(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.u4
else s=B.d.q(t,u)?D.Np:D.kE
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.A(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bi(J.k(l==null?"":l))
if(l==null)l=new A.U(Date.now(),0,!1)
j=A.aK(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.O(j)
if(j==null)j=0
return new C.kJ(h,r,p,!m,t,o,l,j,v,s,B.c6)},
fg6(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fg6=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fga()
h=x.N
g=x.z
w=7
return A.b(A.iP(A.a([A.lw("family_trees","*",null,A.G(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bK),r.$2(A.lw("family_trees","*",A.G(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bK),"collaborator"),r.$2(A.lw("family_trees","*",null,A.G(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bK),"public")],x.cl),x.fO),$async$fg6)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.T(h,g)
h=A.C(p,g)
l=h
J.h6(l,o)
J.h6(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.M)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aG(m,j,k)}l=m
h=A.a6(l).k("bc<2>")
h=A.cF(new A.bc(l,h),new C.fg7(a0),h.k("J.E"),x.k)
l=A.a6(h).k("Z<J.E>")
l=A.C(new A.Z(h,new C.fg8(),l),l.k("J.E"))
B.d.aV(l,new C.fg9())
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
return A.i($async$fg6,v)},
hX7(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a4(e)
if(j.gam(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dF(e,new C.fkb(),v).c0(0,new C.fkc())
t=A.de(u,u.$ti.k("J.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.M)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.GG(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kE){m=q.e
m=!new A.N(m,A.h4L(),A.S(m).k("N<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gaf(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.i54(l,v)
o=C.GG(k,w)
p=v.d
s.n(0,u,o===w?k.bcl(p,D.u4):k.bcl(p,v.y))}j=s.$ti.k("bc<2>")
j=A.C(new A.bc(s,j),j.k("J.E"))
B.d.aV(j,new C.fkd())
return j},
QU(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$QU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$QU)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fmT(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aq("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.T.ao(s,null)),$async$QU)
case 3:return A.h(null,v)}})
return A.i($async$QU,v)},
aOR(d,e){return C.i1l(d,e)},
i1l(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aOR=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.m1("family_trees",A.a([C.hkl(e,d)],p),null,B.cG),$async$aOR)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.m1("family_trees",A.a([C.hkm(e,d)],p),null,B.cG),$async$aOR)
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
return A.i($async$aOR,v)},
aOS(d,e){return C.i1m(d,e)},
i1m(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aOS=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.S(e).k("N<1,a8<n,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.frR(d),n),m)
r=l
w=7
return A.b(A.m1("family_trees",r,null,B.cG),$async$aOS)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.frS(d),n),m)
p=k
w=8
return A.b(A.m1("family_trees",p,null,B.cG),$async$aOS)
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
return A.i($async$aOS,v)},
ffq(d){return C.hTZ(d)},
hTZ(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$ffq=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Rh("family_trees",A.G(["id",d],x.N,x.z),null,B.cG),$async$ffq)
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
return A.i($async$ffq,v)},
r8:function r8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lq:function lq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cA5:function cA5(){},
cA4:function cA4(){},
cA2:function cA2(){},
cA3:function cA3(){},
HQ:function HQ(d,e){this.a=d
this.b=e},
hU:function hU(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
akW:function akW(d,e){this.a=d
this.b=e},
fuE:function fuE(){},
fTw:function fTw(d){this.a=d},
fsx:function fsx(d){this.a=d},
kJ:function kJ(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bPu:function bPu(){},
bPt:function bPt(){},
bPq:function bPq(){},
bPr:function bPr(){},
bPs:function bPs(){},
fjv:function fjv(){},
ffm:function ffm(){},
ffn:function ffn(){},
ffo:function ffo(){},
fLh:function fLh(){},
fLi:function fLi(){},
fLj:function fLj(){},
fLk:function fLk(d){this.a=d},
fLl:function fLl(){},
fTu:function fTu(d){this.a=d},
fv7:function fv7(d){this.a=d},
fxX:function fxX(){},
fxY:function fxY(){},
fxZ:function fxZ(){},
fy_:function fy_(){},
fy0:function fy0(d){this.a=d},
fL4:function fL4(d){this.a=d},
fTp:function fTp(){},
fTq:function fTq(){},
fTr:function fTr(d){this.a=d},
fuP:function fuP(d){this.a=d},
fuQ:function fuQ(d){this.a=d},
fTA:function fTA(){},
fuj:function fuj(d){this.a=d},
fuk:function fuk(d,e){this.a=d
this.b=e},
ful:function ful(){},
fSW:function fSW(d){this.a=d},
fyM:function fyM(){},
fKY:function fKY(){},
fxU:function fxU(){},
fxV:function fxV(){},
fxW:function fxW(){},
fKT:function fKT(d){this.a=d},
ffU:function ffU(){},
ffV:function ffV(){},
ffW:function ffW(){},
ffX:function ffX(){},
ffY:function ffY(){},
fga:function fga(){},
fgb:function fgb(d){this.a=d},
fg7:function fg7(d){this.a=d},
fg8:function fg8(){},
fg9:function fg9(){},
fkb:function fkb(){},
fkc:function fkc(){},
fkd:function fkd(){},
fmT:function fmT(){},
frR:function frR(d){this.a=d},
frS:function frS(d){this.a=d},
cA6:function cA6(d,e){this.a=d
this.b=e},
cA7:function cA7(d,e){this.a=d
this.b=e},
aHb:function aHb(d,e,f){this.a=d
this.b=e
this.c=f},
b8U:function b8U(){this.b=this.a=0},
b8T:function b8T(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bvU:function bvU(){},
wS(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcf()+"/"+w.gcv()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.aZ(B.o.u(w.gnh()),2,"0")+":"+B.a.aZ(B.o.u(w.gGl()),2,"0")},
hKL(){var w,v=$.pD(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.au(32)]
return"WS"+B.d.hv(u)},
asz(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$asz=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c6(),$async$asz)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bK),$async$asz)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
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
return A.i($async$asz,v)},
asA(d){return C.hKM(d)},
hKM(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$asA=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c6(),$async$asA)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hI("ngmy_worksheet_project_qr_stashes_v1",A.G(["stashes",d,"savedAt",new A.U(Date.now(),0,!1).a7().ad()],x.N,x.z),!1,!1,B.cG,null),$async$asA)
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
return A.i($async$asA,v)},
asC(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$asC=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c6(),$async$asC)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hKL()
w=4
return A.b(C.asz(),$async$asC)
case 4:r=h
q=B.a.i(e)
p=B.dI.aM(t)
J.aG(r,s,A.G(["ownerEmail",q,"projectId",f,"payload",B.cI.gcs().aM(p),"usesRemaining",25,"createdAt",new A.U(Date.now(),0,!1).a7().ad()],x.N,x.K))
w=5
return A.b(C.asA(r),$async$asC)
case 5:u=new A.a0h("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asC,v)},
asB(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$asB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c6(),$async$asB)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.asz(),$async$asB)
case 4:q=f
p=J.a4(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a4(o)
m=A.aK(n.h(o,"usesRemaining"))
l=m==null?null:B.k.O(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.cg.cz(0,B.cF.aM(t))}catch(h){r=A.ab(h)
$.am.$1("[worksheet qr stash] decode: "+A.w(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dP(A.a2(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.U(Date.now(),0,!1).a7().ad())
p.n(q,i,m)}w=5
return A.b(C.asA(q),$async$asB)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asB,v)},
heN(){var w=new A.U(Date.now(),0,!1).a7()
return"wst_"+(1000*w.a+w.b)+"_"+B.cW.au(999999)},
hKN(d){var w,v,u,t,s,r,q
try{w=A.agu(d)
if(w==null)return d
v=w
if(J.Lw(v)>960||J.Lv(v)>960){s=v
r=J.Lw(v)>=J.Lv(v)?960:null
v=A.agt(s,J.Lv(v)>J.Lw(v)?960:null,B.OH,r)}s=v
u=A.amj(82).Tf(s,B.z0)
if(J.ad(u)===0)return d
s=new Uint8Array(A.ch(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
ciX(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$ciX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hKN(e)
$.ciT.n(0,s,t)
u=C.bDg(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ciX,v)},
b2y(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b2y=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d2(l,"data:image")){u=null
w=1
break}t=4
r=J.f_(l,",")?B.d.gal(J.ly(l,",")):l
q=B.cF.aM(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.heN()
w=7
return A.b(C.ciX(p,q),$async$b2y)
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
return A.i($async$b2y,v)},
ciU(d){var w=0,v=A.j(x.T),u,t,s
var $async$ciU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(L.ciW(s),$async$ciU)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cI.gcs().aM(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ciU,v)},
a8y(d){var w=0,v=A.j(x.H),u,t
var $async$a8y=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=L.hrA(d)
if(t==null){w=1
break}$.ciT.W(0,t)
w=3
return A.b(C.bDf(t),$async$a8y)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8y,v)},
bDg(d,e){return C.ibe(d,e)},
ibe(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bDg=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aNM
w=7
return A.b(n==null?$.aNM=L.h1g():n,$async$bDg)
case 7:r=g
q=new Uint8Array(A.ch(e))
p=J.mO(r,"thumbs","readwrite")
B.iV.mm(J.mN(p,"thumbs"),q,l)
w=8
return A.b(J.pF(p),$async$bDg)
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
return A.i($async$bDg,v)},
bDf(d){return C.ibc(d)},
ibc(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bDf=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aNM
w=7
return A.b(o==null?$.aNM=L.h1g():o,$async$bDf)
case 7:r=f
q=J.mO(r,"thumbs","readwrite")
B.iV.FS(J.mN(q,"thumbs"),m)
w=8
return A.b(J.pF(q),$async$bDf)
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
return A.i($async$bDf,v)}},D,Aq,Ar,X,As,At,L
J=c[1]
A=c[0]
B=c[2]
A7=c[81]
P=c[241]
Y=c[155]
R=c[56]
A8=c[224]
I=c[205]
G=c[32]
E=c[215]
S=c[117]
A9=c[227]
O=c[105]
Aa=c[114]
Ab=c[192]
Z=c[115]
Ac=c[223]
Ad=c[39]
Q=c[222]
K=c[89]
A_=c[84]
A0=c[161]
Ae=c[125]
A1=c[164]
A2=c[237]
A3=c[193]
Af=c[184]
Ag=c[196]
A4=c[191]
Ah=c[240]
Ai=c[69]
Aj=c[75]
A5=c[209]
Ak=c[243]
Al=c[31]
A6=c[116]
M=c[186]
Am=c[197]
An=c[121]
T=c[242]
Ao=c[148]
U=c[233]
V=c[38]
F=c[98]
Ap=c[30]
N=c[104]
H=c[131]
W=c[73]
C=a.updateHolder(c[6],C)
D=c[236]
Aq=c[74]
Ar=c[203]
X=c[239]
As=c[238]
At=c[60]
L=c[57]
C.aou.prototype={}
C.aYR.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bgH(),f=h.x!=null&&h.z5(i).length===0
if(h.x!=null)w=f?B.b_:B.bx
else w=h.gTT()?B.bx:B.dV
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.bjh,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.eWH,B.f,i,i,new A.o(B.b_.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h3,i,i,i),B.R,D.fqn,B.av,A.d(C.wS(new A.U(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fm7,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.b2k,i,i,i,i,B.ZI,i,i,i)
q=A.m(16)
p=A.I(B.aM,B.r,1)
o=A.I(B.b_.j(0.28),B.r,1)
n=A.h3j(h.d)
o=A.p(B.A,C.aYQ(A.fB6(h.e,n),30),B.f,i,i,new A.o(B.lY,i,o,i,i,i,B.a5),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fhm,B.L,i,i)
m=A.m(14)
l=A.I(B.aM,B.r,1)
q=A.p(i,A.x(A.a([o,B.N,n,B.bC,D.fqF,B.ad,A.p(i,A.x(A.a([D.fGq,B.bC,A.d(A.AX(h.c),i,i,i,i,i,i,D.fcb,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fb,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,M.aiV,i,i,i)
p=A.m(16)
m=A.I(B.aM,B.r,1)
l=j.aQY("Original due",C.wS(h.r,!1))
n=j.aQY("Current due",C.wS(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.R,A.p(i,A.x(A.a([l,B.N,n,B.R,A.p(i,A.d(h.gaL6(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.Br,i,i,1/0),B.R,j.cfX(),B.N,j.c3k(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bh,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aM,B.r,1)
B.d.v(p,A.a([B.R,A.p(i,A.x(A.a([D.frC,B.av,A.d(q,i,i,i,i,i,i,D.fgD,i,i,i)],s),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bh,i,i,1/0)],s))}if(h.gaFV()){q=A.m(14)
o=A.I(B.cr,B.r,1.6)
B.d.v(p,A.a([B.R,A.p(i,A.x(A.a([D.fHK,B.N,A.bx(A.m(12),A.em(new A.a7(1/0,88,A.b4(i,i,i,new A.W6(h.ax,B.M,D.f_V,!0,3.5,i),B.ax),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.FJ,i,i,i)],s))}p.push(B.aA)
p.push(D.fzK)
return A.p(i,A.x(A.a([r,new A.D(B.MU,A.x(p,B.aj,i,B.e,B.j,0,B.p),i)],s),B.aj,i,B.e,B.P,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aQY(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.a97,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fde,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
cfX(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a9A(B.dV,u,"Not paid yet")
w=t.z5(null).length
v=w===0?B.b_:B.bx
return this.a9A(v,u,C.wS(t.x,!0))},
c3k(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a9A(B.b_,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a9A(B.b_,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a97,u,u,u)
v=A.S(d).k("N<1,h_>")
v=A.C(new A.N(d,new C.c4L(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bW(B.bD,v,B.bq,6,6)],x.p),B.E,u,B.e,B.j,0,B.p)},
a9A(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.a97,w,w,w),1),new A.ds(1,B.cn,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dT,w,w),w)],x.p),B.E,w,B.e,B.j,0,w,w)}}
C.bb1.prototype={
a5(d,e){new A.W6(this.b,B.M,e,!0,3.5,null).a5(d,e)},
av(d){return d.b!==this.b}}
C.aoG.prototype={
U(){return new C.aD6(A.a([],x.bp))},
ge_(){return this.c}}
C.aD6.prototype={
a_(){this.a2()
this.IQ()},
IQ(){var w=0,v=A.j(x.H),u,t=this,s
var $async$IQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a23(t.a.c),$async$IQ)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dJi(t,s))
case 1:return A.h(u,v)}})
return A.i($async$IQ,v)},
aSU(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aP,s=A.l(v,v,u?B.br:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.br:B.bl).j(0.22)
w=A.m(10)
return A.bs(v,new A.b5(4,r,new A.ay(u,1,B.r,-1)),v,B.bh,v,v,v,v,!0,new A.b5(4,w,new A.ay((this.a.d.a?B.br:B.bl).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b5(4,A.m(10),D.b_W),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aST(d){return this.aSU(d,null)},
Pw(d){return this.cjz(d)},
cjz(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pw=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.H1:B.eJ
w=7
return A.b(new A.hV().Ca(72,900,900,n),$async$Pw)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fj(),$async$Pw)
case 8:p=f
n=B.cI.gcs().aM(p)
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
if(n!=null)n.J(x.q).f.S(A.b3(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Pw,v)},
b0w(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aP,o=A.m(10),n=A.I((q?B.br:B.bl).j(0.18),B.r,1)
if(d)q=B.cN
else q=s.a.d.a?B.br:B.bl
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.au,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cN
else u=s.a.d.a?B.br:B.bl
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.j,0,B.p),1)
v=A.fx(r,r,r,r,r,r,r,r,r,r,r,B.cN,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cd)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aJ(r,r,r,r,A.X(B.cx,s.a.d.a?B.br:B.bl,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cd))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jN,D.bvJ,r,r,r)},
Da(d){return this.bAa(d)},
bA9(){return this.Da(null)},
bAa(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Da=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ax()
r=new A.as(new A.bb(a4,B.b4,B.aO),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.je(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.O(p)):B.k.ac(p,2)}o=new A.as(new A.bb(a4,B.b4,B.aO),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.as(new A.bb(a4,B.b4,B.aO),s)
if(a3){a4=new A.U(Date.now(),0,!1).bS(6048e8)
m=A.c3(a4.gck(),a4.gcf(),a4.gcv(),0,0,0,0,0)}else{a4=a5.f
m=A.c3(a4.gck(),a4.gcf(),a4.gcv(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bo(a4,!0,x.cT)
i=a3?null:A.h3j(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wx?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i0(B.w.j(0.55),!0,"Dismiss",a4,new C.dJ1(),new C.dJ2(a2,t,a5,r,new C.dJ3(a2,t),o,n,j),B.eM,!0,x.y),$async$Da)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d7(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.T$=s
r.P$=0
o.T$=s
o.P$=0
n.T$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.J(x.q).f.S(D.f6n)
w=1
break}a0=a2.d
if(a0==null){t.c.J(x.q).f.S(D.f52)
w=1
break}a1=A.fB6(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wx?"male":"female"
w=7
return A.b(A.ahT(a3,A.hbu(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$Da)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wx?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c3(a3.gck(),a3.gcf(),a3.gcv(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c3(a4.gck(),a4.gcf(),a4.gcv(),0,0,0,0,0)))a5.cMP(a2.a)
w=8
return A.b(A.ahT(t.a.c,a5),$async$Da)
case 8:case 5:w=9
return A.b(t.IQ(),$async$Da)
case 9:case 1:return A.h(u,v)}})
return A.i($async$Da,v)},
aTx(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cN.j(0.14)
else w=this.a.d.a?B.M:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cN
else s=(this.a.d.a?B.br:B.bl).j(0.2)
s=A.I(s,B.r,g?1.5:1)
r=C.aYQ(d,18)
if(g)q=B.cN
else q=this.a.d.a?B.aP:B.au
return A.aF(!1,B.a1,!0,v,A.aM(!1,u,!0,A.p(p,A.B(A.a([r,B.bo,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b8,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ah)},
Sd(d){return this.cBi(d)},
cBi(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Sd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i0(B.w.j(0.55),!0,"Dismiss",s,new C.dJl(),new C.dJm(t,d),B.ho,!0,x.y),$async$Sd)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.U(s,0,!1)
case 4:w=7
return A.b(A.ahT(t.a.c,d),$async$Sd)
case 7:w=8
return A.b(t.IQ(),$async$Sd)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Sd,v)},
Pv(d,e){return this.bKZ(0,e)},
bKZ(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Pv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lb(s,"Cancel","Delete",e.b+" \xb7 "+A.AX(e.c)+" will be removed from this device.","Delete this debt?"),$async$Pv)
case 3:if(!g){w=1
break}w=4
return A.b(C.fuW(t.a.c,e.a),$async$Pv)
case 4:w=5
return A.b(t.IQ(),$async$Pv)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Pv,v)},
afb(d){return this.cdn(d)},
cdn(d){var w=0,v=A.j(x.H),u=this,t
var $async$afb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bT(B.K,null,new C.dJf(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$afb)
case 2:return A.h(null,v)}})
return A.i($async$afb,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.ehy
w=J.dG(m.d,new C.dJn())
v=A.C(w,w.$ti.k("J.E"))
w=J.dG(m.d,new C.dJo())
u=A.C(w,w.$ti.k("J.E"))
t=B.d.cL(v,0,new C.dJp())
w=A.m(18)
s=m.a.d.a
r=s?D.cuq:D.azn
q=A.I(s?B.cN.j(0.35):B.cN.j(0.18),B.r,1)
s=A.p(l,D.bWo,B.f,l,l,new A.o(B.cN.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.as,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.au,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a1,!0,A.m(12),A.aM(!1,A.m(12),!0,D.egW,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dJq(m),l,l,l,l,l,l,l),B.f,B.cN,0,l,l,l,l,l,B.ah)],p),B.m,l,B.e,B.j,0,l,l)
o=A.E(m.cxt("Open",""+v.length),1)
n=v.length===0?"$0.00":A.AX(t)
r=A.a([A.p(l,A.x(A.a([s,B.ad,A.B(A.a([o,B.ab,A.E(m.b6F(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.E,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a9(B.ay,B.aD,B.x,r,l,l),B.n),l,l,l,l,B.aiS,l,l,l),B.aA],p)
if(J.cp(m.d)){w=m.a.d.a
s=w?B.e1:B.c
q=A.m(18)
o=A.I((w?B.br:B.bl).j(0.12),B.r,1)
n=A.p(l,D.bRg,B.f,l,l,new A.o(B.cN.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.au,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.x(A.a([n,B.ad,w,B.av,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.br:B.bl,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.byf,l,l,1/0))}else{w=m.gciQ()
s=A.C(new A.N(v,w,A.S(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bzW,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.br:B.bl,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.N(u,w,A.S(u).k("N<1,v>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.aj,l,B.e,B.j,0,B.p)},
b6F(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.br:B.bl).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.br:B.bl,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cN
else w=v.a.d.a?B.aP:B.au
return A.p(u,A.x(A.a([q,B.bC,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ex,u,u,u)},
cxt(d,e){return this.b6F(!1,d,e)},
ciR(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.z5(j).length,h=d.bfV()
if(d.x!=null){w=d.z5(j).length
v=w===0?B.cN:B.bx}else if(d.gTT())v=B.bx
else{if(h)w=B.cN
else w=k.a.d.a?B.br:B.bl
v=w}if(d.x!=null){w=d.z5(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wS(u,!1)}else{u.toString
t="Paid "+C.wS(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wS(w,!1)+" \xb7 "+i+" missed":"Due "+C.wS(w,!1)}w=k.a.d.a?B.e1:B.c
u=A.m(18)
if(d.gTT()&&d.x==null)s=B.bx.j(0.35)
else s=(k.a.d.a?B.br:B.bl).j(0.12)
s=A.I(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cH,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bn:B.lY
o=A.I(d.gTT()&&d.x==null?B.bx.j(0.45):B.cN.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.h3j(d.d)
o=A.p(B.A,A.d6(C.aYQ(A.fB6(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a5),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.au
m=x.p
n=A.a([new A.ds(1,B.cn,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaFV())B.d.v(n,A.a([B.ej,A.X(B.NQ,B.cN.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.cK,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.j,0,B.p),1)
n=A.AX(d.c)
l=k.a.d.a?B.aP:B.au
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aF(!1,B.a1,!0,j,A.aM(!1,q,!0,new A.D(A2.aiE,A.B(A.a([o,B.ba,p,B.ab,A.x(A.a([n,B.bC,A.X(B.eD,(k.a.d.a?B.br:B.bl).j(0.5),j,j,j,18)],m),B.dE,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dJh(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ah),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d1,j,j,j,j)}}
C.um.prototype={}
C.akO.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bi
u=v?B.E:B.m
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.I(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cv,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.I(r.j(0.6),B.r,1)
n.push(A.aB(a0,A.p(a0,A.X(B.cx,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a5),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.it,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.avE,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.G_,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eQ(m,A.B(l,B.m,a0,B.e,B.P,0,a0,a0),B.f,B.e0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.buW,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cE:B.bp,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fx,A.x(a2,u,a0,B.e,B.P,0,B.p),a0),1))
n.push(D.f0I)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.vQ,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a9(B.a3,B.a8,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lA,A.x(a2,B.m,a0,B.e,B.P,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hp,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a9(B.ay,B.aD,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bw9,a0,a0,a0,a0)}}
C.aUA.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bi?B.bi:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bp:B.cE,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.j,0,q,q),B.cK,n],m)
if(p.z)o.push(new A.D(B.tW,n,q))
return new A.D(B.d1,A.x(o,B.m,q,B.e,B.P,0,B.p),q)}}
C.SW.prototype={
U(){return new C.beE()}}
C.beE.prototype={
gbZi(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aH(d,n,x.w).w,l=x.p,k=A.a([D.eht,D.ehz],l)
for(w=0;w<8;++w){v=D.a2O[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.GL:B.Cb
q=t===s
r=A.X(r,q?B.eF:B.bU,n,n,n,17)
q=q?B.c:B.ae
r=A.a([r,B.bo,new A.y(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bA(1,B.bd,new A.y(v.c,n,A7.DO,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aQ(24,24)
p=new A.ay(B.eF,2,B.r,-1)
s=new A.o(n,n,new A.bI(p,p,p,p),new A.bk(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aB(n,new A.D(B.eH,A.x(A.a([new A.D(B.mE,new A.cb(B.aN,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.E5(!0,new C.akO(v,q.d,q.e,new C.d9r(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d9s(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bwt,A.bH(D.fNb,new C.d9t(o,d),A.bp(B.b5,n,n,n,n,B.os,n,n,new A.b7(A.m(16),B.a0),n,n,n)),n))
return A.bm(!0,new A.cT(new A.aY(0,1/0,0,m.a.b*0.9),A.cq(k,n,D.bAN,n,n,B.ag,!0),n),!0,!1,B.af,!0,!0)}}
C.nj.prototype={
ag(){var w=this
return A.G(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a7().ad()],x.N,x.z)},
bcx(d,e,f){return new C.nj(this.a,e,d,f)}}
C.HP.prototype={
wq(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.HP(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aE7(d){var w=null
return this.wq(w,w,w,w,w,d,w,w,w,w,w,w)},
cIC(d){var w=null
return this.wq(w,w,w,w,d,w,w,w,w,w,w,w)},
bcv(d,e,f){var w=null
return this.wq(d,w,w,w,w,w,w,w,e,w,f,w)},
cJg(d){var w=null
return this.wq(w,w,w,w,w,w,d,w,w,w,w,w)},
cJp(d){var w=null
return this.wq(w,w,w,w,w,w,w,w,w,d,w,w)},
cIA(d){var w=null
return this.wq(w,w,w,d,w,w,w,w,w,w,w,w)},
cJr(d){var w=null
return this.wq(w,w,w,w,w,w,w,w,w,w,w,d)},
cIx(d){var w=null
return this.wq(w,w,d,w,w,w,w,w,w,w,w,w)},
cIs(d){var w=null
return this.wq(w,d,w,w,w,w,w,w,w,w,w,w)},
FK(d){var w=null
return this.wq(w,w,w,w,w,w,w,d,w,w,w,w)},
cJz(d,e,f,g,h,i,j,k,l,m,n){return this.wq(d,e,f,g,null,h,i,j,k,l,m,n)},
ag(){var w=this
return A.G(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cGb(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bOC(d),k=A.aK(d.h(0,"emblem")),j=k==null?o:B.k.O(k),i=A.aK(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.CW.ges(D.CW))
s=i==null?o:B.k.E(i,18,36)
r=l.$2("position",D.a4p)
q=l.$2("frame",D.a3O)
l=l.$2("texture",D.a3K)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cJz(p,u,t,q,r,A.qY(d.h(0,"ribbon"))?A.Gi(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Zs.prototype={
U(){return new C.aA9(A.a([],x.I),D.No)},
ge_(){return this.c}}
C.aA9.prototype={
a_(){var w,v=this
v.a2()
v.f=A.zO(0,1)
w=$.ax()
v.z=new A.as(B.at,w)
v.Q=new A.as(B.at,w)
v.l3()
w=v.a
C.bBD(w.c,w.d).bL(new C.da7(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.c()
u.t()
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
l3(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$l3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.L0(s.c,s.d),$async$l3)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d9W(t,r))
t.avX()
case 1:return A.h(u,v)}})
return A.i($async$l3,v)},
gasy(){var w,v=this
if(!J.cp(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
avX(){var w,v,u=this.gasy(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saX(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saX(0,w==null?"":w)},
cbO(d){this.m(new C.d9T(this,d))
this.avX()},
Ns(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ns=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nj(B.o.u(1000*Date.now()),"Untitled page","",new A.U(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aQH(r.c,r.d,s),$async$Ns)
case 3:w=4
return A.b(t.l3(),$async$Ns)
case 4:if(t.c==null||J.cp(t.d)){w=1
break}q=J.qp(t.d,new C.d9u(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d9v(t,p))
t.avX()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.B9(p+1,B.cu,B.kC),$async$Ns)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Ns,v)},
AP(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gasy()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aQH(o.c,o.d,new C.nj(s,r,q,new A.U(p,0,!1))),$async$AP)
case 3:w=4
return A.b(t.l3(),$async$AP)
case 4:if(t.c==null){w=1
break}t.m(new C.d9X(t))
case 1:return A.h(u,v)}})
return A.i($async$AP,v)},
O6(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$O6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gasy()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.d9D(r),s,null,!0,!0,x.y),$async$O6)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bBq(s.c,s.d,r.a),$async$O6)
case 4:t.m(new C.d9E(t))
w=5
return A.b(t.l3(),$async$O6)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.TW(B.o.E(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$O6,v)},
yt(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AP(),$async$yt)
case 5:case 4:if(t.c==null){w=1
break}w=J.cK(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.Ra(s,r.r,o,p,q),$async$yt)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a3(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hsa(s,r.x,r.r),$async$yt)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.L0(s.c,s.d),$async$yt)
case 10:l=e
for(s=n.d,r=J.cD(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.M(l,new C.nj(""+(m+k),q,B.a.i(j.b),new A.U(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.B5(r.c,r.d,l),$async$yt)
case 11:w=12
return A.b(t.l3(),$async$yt)
case 12:r=t.c
if(r==null){w=1
break}r.J(x.q).f.S(A.b3(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yt,v)},
a0D(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0D=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AP(),$async$a0D)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyr(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dM(D.z9,new C.d9U(t),new C.d9V())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new G.mA("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gR(o)
p.push(new G.mA(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(G.h4X(o,new G.rs(s,r,"",p,new G.uF(q.d,null,null,null,null,"","","")),null),$async$a0D)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a0D,v)},
NQ(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$NQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AP(),$async$NQ)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bT(D.ae2,null,new C.d9z(t),s,!0,!0,!0,N.a7p,!1,!1,x.N),$async$NQ)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cIC(r)
t.m(new C.d9A(t,q))
s=t.a
w=7
return A.b(C.RK(s.c,s.d,q),$async$NQ)
case 7:case 1:return A.h(u,v)}})
return A.i($async$NQ,v)},
X9(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(D.ae2,null,new C.d9F(t),r,!0,!0,!0,N.a7p,!1,!1,x.e),$async$X9)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d9G(t,s))
r=t.a
w=4
return A.b(C.RK(r.c,r.d,s),$async$X9)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.B9(0,B.dZ,B.nj)
case 1:return A.h(u,v)}})
return A.i($async$X9,v)},
bQt(d){var w=d.bU(),v=B.a.aZ(B.o.u(w.gcf()),2,"0"),u=B.a.aZ(B.o.u(w.gcv()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gyr(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bYy()
if(r.e)w=D.acP
else if(J.cp(r.d)){w=r.y
v=r.gyr(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fbz,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.D(U.ajU,new C.YK(w,v,0,q),q),q),B.bv,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kw.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bv],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aB(q,A.p(q,D.eWu,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dD.j(0.45),B.J,18)],x.V),E.wn,B.n),q,q,q,q,B.N7,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcFg(),q,q,q,q,q,q,!1,B.a4))
w.push(B.R)
w.push(A.hp(D.bNt,D.fMD,r.gaMQ(),q))
B.d.v(u,w)}w=A.at(A.cd(A.x(u,B.m,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.ey,q,q,B.ag),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kw.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dQ:B.AA
u=A.x(A.a([new A.D(D.bxw,w,q),A.E(A.J9(v,new C.da5(r),J.ad(r.d)+1,q,r.gcbN(),u,B.aN),1),r.bD3()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c5(q,D.XA,new A.an(B.a_,q,B.b1,B.t,A.a([D.aME,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bYy(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cK(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.K7(B.e3,"AI",h.gbAX(),!0))
if(h.a.f)f.push(new C.K7(B.nq,"Cover",h.gbLy(),!1))
if(h.a.f)f.push(new C.K7(B.yQ,"Header",h.gbGz(),!1))
if(J.cK(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.K7(B.un,"Print",h.gckS(),!1))
if(h.a.f&&J.cK(h.d)&&h.r>=0){v=h.w
u=v?B.hI:B.jb
t=v?"Save":"Edit"
f.push(new C.K7(u,t,v?h.gcr9():new C.d9Q(h),!1))}if(h.a.f)f.push(new C.K7(B.hH,"Add page",h.gaMQ(),!1))
v=C.hof(h.y.Q)
u=h.gyr(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.M)(f),++m){l=f[m]
if(l.d)k=D.dxn
else{k=new A.aQ(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.k6.j(0.5),1,B.r,-1)
j=A.p(g,A.X(l.a,D.kw,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bI(i,i,i,i),new A.bk(k,k,k,k),g,new A.a9(B.a3,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kw.j(0.85)
p.push(new A.bA(1,B.bd,A.aB(B.cc,A.x(A.a([k,B.bC,new A.y(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.P,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.akO(v,u,t+" \xb7 "+s+" "+r,new C.d9R(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
zS(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AP(),$async$zS)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=G.a2i(B.d.aG(s," "))
s=t.c
s.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.d9w(t,p),s,null,!0,!0,x.N),$async$zS)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.yt(),$async$zS)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.DN(),$async$zS)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Fm("Swahili (Kiswahili)",!0),$async$zS)
case 18:w=16
break
case 17:w=19
return A.b(t.cBU(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zS)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zS,v)},
Z2(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(E.k6.j(0.3),B.r,1),r=x.p
return new A.D(B.ct,A.aM(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.wn,B.a5),w,42,w,w,w,w,w,42),B.ba,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A_.JD,w,w,w),A.d(g,w,w,w,w,w,w,B.A3,w,w,w)],r),B.E,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bh,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d9S(d,h),w,w,w,w,w,w,w),w)},
DN(){return this.bPY()},
bPY(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$DN=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.d9J(r),a7,null,!0,!0,x.ei),$async$DN)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eJ("Working on it\u2026",$.ax())
a6.a=!0
a7=r.c
a7.toString
A.cf(null,null,!1,null,new C.d9K(o),a7,null,!0,!0,x.H).fn(new C.d9L(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.M)(d),++a1){k=d[a1]
J.cc(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ag()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.z9[a1]
J.cc(j,i.a)}w=8
return A.b(C.ah2(a0,a7,new C.d9M(o),d,l,e,j),$async$DN)
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
if(l!=null&&a6.a)A.a3(l,!0).eJ()
l=o
l.si3($.ax())
J.aR8(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.J(x.q).f
j=n
l.S(A.b3(null,null,null,null,null,B.t,null,A.d(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcm(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.ai(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.bcx(m.b.h(0,a4).b,a7,new A.U(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.B5(j.c,j.d,l),$async$DN)
case 11:w=12
return A.b(r.l3(),$async$DN)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.z9[a1].a)
a5=l.cGb(j,12,a7)
l=r.a
w=15
return A.b(C.RK(l.c,l.d,a5),$async$DN)
case 15:if(r.c!=null)r.m(new C.d9N(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.B9(0,B.dZ,B.nj)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.J(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.S(A.b3(a3?A.cui("Undo",new C.d9O(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.em,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DN,v)},
Fm(d,e){return this.cBV(d,e)},
cBU(d){return this.Fm(d,!1)},
cBV(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fm=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eJ("Starting\u2026",$.ax())
f.a=!0
k=r.c
k.toString
A.cf(null,null,!1,null,new C.d9Z(a0),k,null,!0,!0,x.H).fn(new C.da_(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.M)(k),++i){n=k[i]
J.cc(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(G.a2v(m,new C.da0(a0)),$async$Fm)
case 10:w=8
break
case 9:w=11
return A.b(C.bD6(new C.da1(a0),m,a2),$async$Fm)
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
if(o!=null&&f.a)A.a3(o,!0).eJ()
o=a0
o.si3($.ax())
J.aR8(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.J(x.q).f
k=q
o.S(A.b3(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.bcx(J.q(p,g).b,j.a,new A.U(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.B5(k.c,k.d,o),$async$Fm)
case 12:w=13
return A.b(r.l3(),$async$Fm)
case 13:o=r.c
if(o==null){w=1
break}o=o.J(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.S(A.b3(A.cui("Undo",new C.da2(r,d),null),null,null,null,null,B.t,null,k,null,B.V,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fm,v)},
bD3(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d9x(v):u
r=A.aJ(u,u,u,u,A.X(D.bJf,s?D.kw:B.aZ,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cK(v.d)&&!v.w&&v.r>=0)s=A.hp(A.X(B.w2,B.Fn,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Fn,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbL8(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kw.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d9y(v):u
return A.bm(!0,new A.D(D.bxj,A.B(A.a([r,s,A.aJ(u,u,u,u,A.X(B.eD,t<J.ad(v.d)?D.kw:B.aZ,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.Zw.prototype={
U(){return new C.beZ(new A.as(B.at,$.ax()))}}
C.beZ.prototype={
ga1M(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.T$=$.ax()
w.P$=0
this.a1()},
gbOD(){var w,v=this.ga1M()
A:{if("cover"===v){w=D.d02
break A}if("book"===v){w=D.cWL
break A}w=D.dpU
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.k6.j(0.5),n=x.p,m=A.B(A.a([D.dxo,B.as,D.bCT,A.aJ(q,q,q,q,B.lc,q,q,q,new C.dbS(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.j0(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.dbT(r),r.ga1M()==="page",q,q,q,q))
if(r.a.d)l.push(A.j0(q,q,q,D.fHf,q,new C.dbU(r),r.ga1M()==="book",q,q,q,q))
l.push(A.j0(q,q,q,D.fue,q,new C.dbV(r),r.ga1M()==="cover",q,q,q,q))
l=A.bW(B.bD,l,B.bq,6,8)
k=B.c.j(0.07)
k=A.aN(q,B.X,!1,q,!0,B.t,q,A.aO(),r.d,q,q,q,q,q,2,A.bs(q,new A.b5(4,A.m(16),B.a0),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kP,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.df,!0,B.a6,q,B.ao,q,q,q,q)
w=A.a([],n)
for(v=r.gbOD(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mP(q,B.c.j(0.08),new A.y(s,q,B.JA,q,q,q,q,q,q,q,q,q),B.h9,new C.dbW(r,s),q,q,q,q))}return A.eP(q,E.B5,A.cd(A.x(A.a([m,B.R,D.fKx,B.am,l,B.ad,k,B.N,A.bW(B.bD,w,B.bq,6,6),B.aA,A.dq(D.bNq,D.fLj,new C.dbX(r,d),A.bp(B.b5,q,q,q,q,B.os,q,q,new A.b7(A.m(16),B.a0),q,q,q)),B.av,D.fFu],n),B.E,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.fc,q,q,B.ag),q,q,q,D.ajB,B.d5,q,new A.b7(p,new A.ay(o,1.4,B.r,-1)),q)}}
C.Zu.prototype={
U(){return new C.aAb(A.a([],x.h))},
ge_(){return this.c}}
C.aeJ.prototype={}
C.aAb.prototype={
a_(){this.a2()
this.l3()},
l3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$l3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Rd(p.c,p.d),$async$l3)
case 3:o=e
n=A.a([],x.h)
p=J.aV(o)
case 4:if(!p.C()){w=5
break}s=p.gR(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bBD(r.c,q),$async$l3)
case 6:j=e
i=J
w=7
return A.b(C.L0(t.a.c,q),$async$l3)
case 7:m.push(new l.aeJ(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dam(t,n))
case 1:return A.h(u,v)}})
return A.i($async$l3,v)},
b7W(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Qd(d,e){return this.cdl(0,e)},
cdl(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Qd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a3(s,!1).cg(A.e_(new C.dal(u,e),!0,null,x.y)),$async$Qd)
case 2:t=g
w=3
return A.b(u.l3(),$async$Qd)
case 3:if(t===!0&&u.c!=null)u.c.J(x.q).f.S(D.aQb)
return A.h(null,v)}})
return A.i($async$Qd,v)},
Fp(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Fp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.J(x.q).f.S(D.aQ7)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.agm(s.c,s.d),$async$Fp)
case 5:q=e
w=6
return A.b(t.l3(),$async$Fp)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Qd(0,B.d.h_(t.d,new C.daq(q))),$async$Fp)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Ra(p,s.f,r,n,o),$async$Fp)
case 10:m=e
w=11
return A.b(t.l3(),$async$Fp)
case 11:if(m&&t.c!=null)t.c.J(x.q).f.S(D.aQb)
case 1:return A.h(u,v)}})
return A.i($async$Fp,v)},
PH(d,e){return this.coR(0,e)},
coR(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dap(t,e),s,null,!0,!0,x.y),$async$PH)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a2H(s.c,s.d,e.a),$async$PH)
case 4:w=5
return A.b(t.l3(),$async$PH)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PH,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)k.push(o.bD6(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(E.k6.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aB(n,new A.fL(0.7142857142857143,A.p(n,A.x(A.a([D.dxp,B.ad,D.egz,B.av,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kw.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b8,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcFc(),n,n,n,n,n,n,!1,B.a4))}w=A.m(22)
v=A.I(E.k6.j(0.85),B.r,1.6)
s=A.aB(n,A.p(n,D.bVc,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.k6.j(0.6),B.r,1),n,n,n,B.a5),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dar(d),n,n,n,n,n,n,!1,B.a4)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.k6.j(0.5),B.r,1)
w=A.p(n,A.B(A.a([s,B.ba,D.bDg,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.faz,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h3,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.c05,B.n),n,n,n,As.MS,D.bvo,n,n,n)
if(o.e)k=D.acP
else k=k.length===0?D.b7r:A.cC(new C.das(k))
return A.c5(n,D.XA,new A.an(B.a_,n,B.b1,B.t,A.a([D.aME,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bD6(d){var w,v,u=this,t=null,s=u.b7W(d),r=d.c,q=x.p,p=A.a([A.bU(0,A.eQ(B.A,new A.a7(300,420,new C.YK(d.b,s,r,t),t),B.f,B.dy),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aB(t,A.p(t,D.bUw,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.aZ,B.r,1),t,t,t,B.a5),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.daj(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.fa8,t,t,t)
v=r===1?"page":"pages"
return A.aB(t,A.x(A.a([new A.fL(0.7142857142857143,new A.an(B.a_,t,B.aa,B.t,p,t),t),B.N,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kw.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dak(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.K7.prototype={}
C.YK.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dM(D.z9,new C.cIS(m),new C.cIT()),j=m.c,i=D.CW.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mO:B.b8
v=new C.cIU(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.edl,28)],x.V)
u=x.p
t=A.a([A.bU(0,A.b4(l,l,l,new C.bce(j.x,h,l),B.ax),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.a3,B.a8,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aQ(3,3)
t.push(new A.cN(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bk(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.ajV,8,0.85,2.2),v.$4(D.bAe,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.ajV,8,0.85,2.4))
else if(r==="corners")t.push(A.bU(0,new A.D(D.bAa,A.b4(l,l,l,new C.bc5(h,l),B.ax),l),0,0,0))
r=A.X(D.ayl[B.o.E(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.avE,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.ad,p,B.ad,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cE,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aL,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bU(0,new A.D(D.bAF,A.x(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aH6(l),D.f_O),l,l,l,46,0,l))
return A.p(l,A.bx(D.abt,new A.an(B.a_,l,B.aa,B.t,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.abt,i,new A.a9(B.ay,B.aD,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bce.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eb()
f.d5(11)
switch(this.b){case"plain":return
case"linen":$.V()
w=A.K()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.H()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.V()
q=A.K()
q.r=B.c.j(0.05).gp(0)
q.c=1
for(p=0;p<u;p+=4){r=q.H()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.aj()
l=f.aj()
k=f.aj()
$.V()
j=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
j.r=t.j(0.25+f.aj()*0.5).gp(0)
r=j.H()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.V()
j=A.a([],l)
h=new A.aI(k.r,B.ai,null,null,j)
j.push(new A.b0(v,t))
k=i-0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bv())
k=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.H()
k=h.gbB().a.snapshot()
o.drawPath((h.e=new A.cv(k)).a,r)
r.delete()}break
default:$.V()
w=A.K()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.aj()
m=f.aj()
l=f.aj()
r=w.H()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.V()
g=A.K()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.aj()
m=f.aj()
l=f.aj()
r=g.H()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
av(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bc5.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.V(),k=A.K(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ac
k.c=2.4
k.d=B.bG
for(w=e.a,v=e.b,v=[D.eRa,new A.cw([w,0,-1,1]),new A.cw([0,v,1,-1]),new A.cw([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aI(l,B.ai,null,null,s)
s.push(new A.b0(r+p*34,q))
s.push(new A.ap(r,q))
s.push(new A.ap(r,q+o*34))
m=k.H()
s=n.gbB().a.snapshot()
w.drawPath((n.e=new A.cv(s)).a,m)
m.delete()
s=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
s.r=j.j(0.9).gp(0)
m=s.H()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
av(d){return!d.b.A(0,this.b)}}
C.un.prototype={}
C.Z2.prototype={
U(){return new C.bcc()}}
C.bcc.prototype={
goa(){var w=this.d
return w===$?this.d=this.a.c:w},
gyr(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.as(new A.bb(w.b,B.b4,B.aO),$.ax())}return v},
gaBg(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.as(new A.bb(w.c,B.b4,B.aO),$.ax())}return v},
gar5(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.as(new A.bb(w.y,B.b4,B.aO),$.ax())}return v},
t(){var w=this,v=w.gyr(0),u=v.T$=$.ax()
v.P$=0
v=w.gaBg()
v.T$=u
v.P$=0
v=w.gar5()
v.T$=u
v.P$=0
w.a1()},
arK(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.j0(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.d1r(this,f,u),e===u,s,s,s,s))}return A.bW(B.bD,r,B.bq,6,8)},
axn(d){var w=null,v=B.c.j(0.07)
return A.bs(w,new A.b5(4,A.m(14),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lM,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goa(),a0=f.gyr(0),a1=a0.a.a,a2=f.gaBg(),a3=a2.a.a,a4=f.gar5(),a5=d.bcv(a4.a.a,a3,a1)
a1=x.w
a3=A.aH(a6,e,a1).w
a1=A.aH(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a7(190,260,A.eQ(B.A,new A.a7(270,370,new C.YK(a5,d,f.a.e,e),e),B.f,B.dy),e),e,e,e)
a0=A.aN(e,B.X,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.axn("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d1Q(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a6,e,B.ao,e,e,e,e)
a2=A.aN(e,B.X,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.axn("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d1R(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a6,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.z9[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aZ
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bI(o,o,o,o),e,e,new A.a9(B.ay,B.aD,B.x,t.c,e,e),B.a5),e,46,e,e,e,e,e,46)
q=q?B.c:B.aB
v.push(A.aB(e,A.x(A.a([p,B.cK,new A.y(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d1S(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bW(B.bD,v,B.bq,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b5.j(0.35):B.c.j(0.07)
m=new A.aQ(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eF:B.K,2,B.r,-1)
q.push(A.aB(e,A.p(e,A.X(D.ayl[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bI(o,o,o,o),new A.bk(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d1T(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bW(B.bD,q,B.bq,8,8)
a4=A.aN(e,B.X,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.axn("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d1U(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a6,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,K.vc,e,e,e)
m=A.a([],w)
for(l=D.CW.gdT(D.CW),l=l.gaf(l);l.C();){k=l.gR(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eF:B.aZ
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bI(o,o,o,o),e,e,e,B.a5),e,34,e,e,e,e,e,34)
h=g?B.c:B.aB
m.push(A.aB(e,A.x(A.a([j,B.bC,new A.y(i,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d1V(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bW(B.bD,m,B.bq,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,K.vc,e,e,e)
k=f.goa()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bm(!0,new A.cT(new A.aY(0,1/0,0,a1.a.b*0.92),A.cq(A.a([D.fEX,B.ad,d,B.aL,a0,B.R,a2,B.aA,D.fL5,B.N,v,B.aA,D.fF5,B.N,q,B.aA,a4,B.aA,p,B.N,m,B.aA,l,A.l4(e,9,""+B.k.V(f.goa().f),36,18,new C.d1W(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,K.vc,e,e,e),B.am,f.arK(D.a4p,f.goa().r,new C.d1X(f),D.dt5),B.ad,A.d("BORDER",e,e,e,e,e,e,K.vc,e,e,e),B.am,f.arK(D.a3O,f.goa().w,new C.d1Y(f),D.dtb),B.ad,A.d("COVER MATERIAL",e,e,e,e,e,e,K.vc,e,e,e),B.am,f.arK(D.a3K,f.goa().x,new C.d2_(f),D.duE),B.am,A.iI(e,B.b5,e,B.af,e,new C.d20(f),e,e,e,D.fzh,f.goa().z),B.bv,A.bH(D.fDH,new C.d21(f,a6),A.bp(B.b5,e,e,e,e,B.os,e,e,new A.b7(A.m(16),B.a0),e,e,e))],w),e,X.ajr,e,e,B.ag,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aH6.prototype={
a5(d,e){var w,v,u,t=new A.aI($.V().r,B.ai,null,null,A.a([],x.v))
t.D(new A.b0(0,0))
w=e.a
t.D(new A.ap(w,0))
v=e.b
t.D(new A.ap(w,v))
t.D(new A.ap(w/2,v-12))
t.D(new A.ap(0,v))
t.D(new A.bv())
u=A.K()
u.sar(D.c0M.aA(0,new A.a5(0,0,0+w,0+v)))
d.aJ(t,u)},
av(d){return!1}}
C.bht.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.V()
w=A.K()
w.sar(D.c_M.aA(0,new A.a5(0,0,a3,a4)))
a5.aU(new A.a5(0,0,a3,a4),w)
v=B.k.dk(a2/112)
u=new A.eb()
u.d5(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.d01[u.au(9)]
j=u.au(14)
J.bq(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a5(n,j,n+m,j+l)
h=A.bz(i,B.hi)
g=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sar(new A.a9(B.a3,B.a8,B.x,A.a([f,k,e],t),a0,a0).aA(0,i))
d=g.H()
w.drawRRect(A.eL(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
e.r=E.k6.j(0.55).gp(0)
d=e.H()
w.drawRect(A.bQ(new A.a5(h,j,g,j+2)),d)
d.delete()
j=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
j.r=E.k6.j(0.4).gp(0)
d=j.H()
w.drawRect(A.bQ(new A.a5(h,q,g,p)),d)
d.delete()
w.restore()
j=u.au(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
p.sar(D.c_8.aA(0,new A.a5(0,r,a3,q)))
d=p.H()
w.drawRect(A.bQ(new A.a5(0,r,a3,q)),d)
d.delete()
p=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
p.r=B.w.j(0.5).gp(0)
p.z=B.lI
d=p.H()
w.drawRect(A.bQ(new A.a5(0,q,a3,q+14)),d)
d.delete()}w=A.K()
w.r=D.bb5.j(0.72).gp(0)
a5.aU(new A.a5(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.K()
a4.sar(new A.c0(B.A,0.5,B.x,a0,0,A.a([D.biO.j(0.22),B.K],t),a0,a0).aA(0,A.bX(new A.t(w,a2),a1)))
a5.ae(new A.t(w,a2),a1,a4)},
av(d){return!1}}
C.bap.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cN(14,w*2,v*2.2,v*2,o,o,new A.kU(new A.o(A.ar(D.kw,D.bnA,w/4),o,new A.bI(B.a0,new A.ay(B.w.j(0.12),1,B.r,-1),B.a0,B.a0),B.KP,o,o,B.n),B.bf,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aIg,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aQ(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.k6.j(0.6),o,o,new A.bk(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.m,o,B.rD,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.b_F,u,D.c0K,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dq,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aH6(o),D.f_J),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aUA(p.y,r,I.iJ,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aN(o,B.X,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bs(o,B.eE,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,I.iJ.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.fot,!0,B.a6,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,I.iJ.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.R,A.E(A.aN(o,B.X,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bs(o,B.eE,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,I.iJ.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.ffm,!0,B.a6,B.zZ,B.ao,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fok,o,o,o),B.av,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,I.iJ.j(0.5),o,o,o,o,o,o,o,o,11,B.cE,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.N,A.B(A.a([A.E(A.p(o,o,B.f,D.Fd.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fx,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.Fd.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.Fd.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aA],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,I.iJ.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Y0(A.cX(A.a([A.cX(o,o,o,o,o,o,o,o,o,D.fiw,B.a.ap(k,0,1)),A.cX(o,o,o,o,o,o,o,o,o,o,B.a.b4(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,I.iJ.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.x(n,B.E,o,B.e,B.j,0,B.p),B.t,o,B.y,o,o,o,o,B.ag)}s.push(A.E(n,1))
s.push(new A.D(B.ic,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,I.iJ.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bx(B.KP,new A.an(B.a_,o,B.aa,B.t,A.a([t,new A.D(D.bzH,A.x(s,B.aj,o,B.e,B.j,0,B.p),o),A.ao(0,A.c1(o,new A.o(o,o,o,o,o,new A.a9(B.a3,B.a8,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bf),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.KP,v,D.c1h,B.n),o,o,o,o,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,o,o))
return new A.an(B.a_,o,B.aa,B.t,l,o)}}
C.akP.prototype={
U(){return new C.akQ(new A.eJ(0,$.ax()),new C.bQ0(),new C.bQ_(),D.hhF,null,null)},
gcZ(){return this.d}}
C.a0J.prototype={
a4(){return"_Step."+this.b}}
C.akQ.prototype={
gBZ(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.fw7(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghX(d){var w,v=this,u=v.e
if(u===$){w=C.SY(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gaEY(){var w=this.ghX(0)
return w.galE()==null?"Babu":B.a.i(w.galE().b)},
a_(){var w,v=this
v.a2()
w=v.ghX(0).galE()
w=w==null?null:w.c
v.r.b=w===D.mG
w=v.rU(new C.bOM(v))
w.hj(0)
v.x!==$&&A.aP()
v.x=w
v.a1J("Come closer, my children. I am "+v.gaEY()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.c()
v.t()
v=w.y
if(v!=null)v.a3(0)
v=w.z
if(v!=null)v.a3(0)
v=w.w.a
if(v!=null)v.t()
v=w.f
v.T$=$.ax()
v.P$=0
w.bsN()},
a1J(d){var w=this,v=w.y
if(v!=null)v.a3(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dm(D.bu_,new C.bOG(w))},
bpe(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a3(0)
v.m(new C.bOP(v))},
acZ(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bp9(){return this.b7t()},
b7t(){var w=this,v=w.gBZ()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bOH(w))
w.a1J(u)
v=w.z
if(v!=null)v.a3(0)
w.z=A.cL(B.m_,new C.bOI(w))},
cGi(){var w=this
w.m(new C.bOL(w))
w.a1J(w.gBZ()[w.as].a)},
aCX(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.aaF)return
w=p.gBZ()
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
t.r=s.a+1.5}q=new A.eb()
q.d5(v*7+d)
p.m(new C.bOK(p,d,u,q))
p.a1J(u?D.deR[q.au(4)]+" "+w[p.as].d:D.dbD[q.au(3)]+" "+w[p.as].d)},
jd(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$jd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gBZ()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.fSZ(t.at,t.ay,p)
t.m(new C.bON(t,s))
t.a1J(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.Bq(t.a.d,s),$async$jd)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.Br(r.d,r.c.a,"fire",t.at*10),$async$jd)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bOO())
w=1
break
case 4:++t.as
t.b7t()
case 1:return A.h(u,v)}})
return A.i($async$jd,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c5(v,D.WI,new A.an(B.a_,v,B.aa,B.t,A.a([A.bU(0,new A.eG(A.b4(v,v,v,new C.aUF(u,w.r,w.w,u),B.ax),v),0,0,0),A.bm(!0,A.x(A.a([w.c7V(0),B.b0,w.bNS()],t),B.m,v,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],t),v),v,!1,!1,v,v)},
c7V(d){var w,v,u,t=this,s=null,r=A.aJ(s,s,s,s,B.OE,s,s,s,new C.bOJ(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gBZ().length;++w){v=t.as
if(w<v||t.Q===D.aXj)v=B.d4
else v=w===v?B.c:B.aZ
u=new A.aQ(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bk(u,u,u,u),s,s,B.n),s,7,s,D.bv8,s,s,s,22))}p=A.E(A.x(A.a([D.fw4,A.B(p,B.m,s,B.e,B.j,0,s,s)],q),B.E,s,B.e,B.j,0,B.p),1)
v=A.m(14)
u=A.I(B.fu,B.r,1)
return new A.D(D.bAR,A.B(A.a([r,p,A.p(s,A.d("\ud83d\udd25 "+B.k.V(t.cy*100)+"%",s,s,s,s,s,s,B.iE,s,s,s),B.f,s,s,new A.o(B.aW,s,u,v,s,s,B.n),s,s,s,s,B.h3,s,s,s)],q),B.m,s,B.e,B.j,0,s,s),s)},
bNS(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghX(0).galE()
if(h==null)w=1
else w=h.c===D.mG?0:1
v=j.dx
u=j.db
t=D.r3.j(0.96)
s=A.m(22)
r=A.I(B.d4,B.r,3)
q=A.b4(i,i,i,new C.bmQ(w,i),B.ax)
p=A.d(j.Q===D.aaF?j.gaEY()+" asks":"Elder "+j.gaEY(),i,i,i,i,i,i,D.fcJ,i,i,i)
o=j.db
o=B.a.ap(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aB(B.cc,A.B(A.a([new A.a7(62,62,q,i),B.as,A.E(A.x(A.a([p,B.bC,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.ffv,i,i,i)],n),B.E,i,B.e,B.j,0,B.p),1)],n),B.E,i,B.e,B.j,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbpd(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.a99("Sit down by the fire",j.gbp8()),i,i,i)
break
case 1:v=A.at(j.a99("Ask me, Elder",j.gcGh()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gBZ()[j.as].b,m<u.length;++m){q=new A.aQ(14,14)
l=new A.ay(D.lr,2.5,B.r,-1)
v.push(A.aB(i,A.p(i,new A.y(u[m],i,D.feU,i,B.L,i,i,i,i,i,i,i),B.f,i,D.b1P,new A.o(D.bo0,i,new A.bI(l,l,l,l),new A.bk(q,q,q,q),i,i,B.n),i,i,i,i,A6.y6,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bOD(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bW(B.bD,v,B.bq,8,8)
break
case 3:v=j.fr
u=v?B.l5:Ah.amN
u=A.X(u,v?B.eh:D.lr,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.l(i,i,v?B.eh:D.lr,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gBZ().length?"Finish":"Next story"
v=A.B(A.a([u,B.ab,q,j.a99(v,j.gnX(j))],n),B.m,i,B.e,B.j,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gBZ().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.fhb,i,i,i)],n)
u=j.cx
if(u>0){u=C.fsy(u)
q=C.fsy(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.aSD,i,i,i))}v.push(B.N)
v.push(j.a99("Back to the games",new C.bOE(j)))
v=A.x(v,B.m,i,B.e,B.j,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.R,v],n),B.E,i,B.e,B.P,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.dnx,i,B.n),i,i,i,B.Bs,B.bh,i,i,i)},
a99(d,e){var w=null,v=A.m(16),u=A.I(B.d4,B.r,2)
return A.aB(w,A.p(w,A.d(d,w,w,w,w,w,w,A_.JD,w,w,w),B.f,w,w,new A.o(D.lr,w,u,v,w,w,B.n),w,w,w,w,D.byA,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bmQ.prototype={
a5(d,e){V.fKh(d,e.eg(B.J),e.gdB()*0.45,this.b,0,0.4)},
av(d){return d.b!==this.b}}
C.aAa.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bQ0.prototype={}
C.vd.prototype={}
C.eQt.prototype={}
C.bQ_.prototype={}
C.aUF.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b.a,j=m.c,i=m.d
if(i.a==null||!J.A(i.b,e)){w=i.a
if(w!=null)w.t()
i.a=C.hZy(e)
i.b=e}w=d.a
i=i.a.b
i===$&&A.c()
i=i.a
i===$&&A.c()
i=i.a
i.toString
w.drawPicture(i)
i=e.a
v=e.b
u=Math.min(i/450,v/900)
J.bq(w.save())
w.translate((i-450*u)/2,(v-900*u)/2)
d.bX(0,u)
m.cw8(d,k)
m.bMs(d,k)
m.cEb(d,k,j)
t=0.8+0.2*Math.sin(k*8)*Math.sin(k*3.7)+j.w*0.4
J.bq(w.save())
w.translate(225,580)
d.p_(0,1,0.42)
s=240*(0.6+0.5*j.w)
$.V()
r=A.K()
q=x.O
p=x.n
r.sar(A.Bv(B.J,s,A.a([D.bmr.j(0.55*t),F.Ma.j(0.2*t),B.K],q),A.a([0,0.5,1],p),B.x,l,l,0))
d.ae(B.J,s,r)
w.restore()
o=A.a([new A.z(528,new C.bPS(m,d,k,j)),new A.z(540,new C.bPT(m,d,k,j)),new A.z(546,new C.bPU(m,d,k,j)),new A.z(574,new C.bPV(m,d,k,j)),new A.z(612,new C.bPW(m,d,k,j)),new A.z(650,new C.bPX(m,d,k,j)),new A.z(656,new C.bPY(m,d,k,j))],x.bi)
B.d.aV(o,new C.bPZ())
for(n=0;n<7;++n)o[n].b.$0()
m.bDp(d,k,j)
m.bPW(d,k)
w.restore()
$.V()
w=A.K()
w.sar(A.Bv(new A.t(i/2,v*0.6),e.gamV()*0.75,A.a([B.K,D.bb0],q),A.a([0.55,1],p),B.x,l,l,0))
d.aU(new A.a5(0,0,0+i,0+v),w)},
av(d){return d.c!==this.c||d.d!==this.d},
cw8(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.eb()
g.d5(3)
for(w=d.a,v=0;v<36;++v){u=g.aj()
t=g.aj()
s=Math.sin(e*(1.5+g.aj()*2)+v)
r=g.aj()
s=B.c.j(0.25+0.7*(0.5+0.5*s))
$.V()
q=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
q.r=s.gp(0)
p=q.H()
w.drawCircle(u*450,20+t*300,0.8+r*1.1,p)
p.delete()}o=B.k.F(e,17)/1.2
if(o<1){n=new A.t(60+o*220,70+o*90)
d.br(n,n.aF(0,D.ecV),C.is(B.c.j((1-o)*0.9),1.6))}for(u=e*0.035,t=e*9,s=x.v,m=0;m<3;++m){l=B.k.F(u+m*0.05,1)
r=-20+l*500
q=120+Math.sin(l*9+m)*14+m*12
k=Math.sin(t+m*2)
j=$.V()
i=A.a([],s)
j=new A.aI(j.r,B.ai,null,null,i)
k=q+k*4
i.push(new A.b0(r-6,k))
h=q-3
i.push(new A.c8(r-2,h,r,q))
i.push(new A.c8(r+2,h,r+6,k))
r=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
r.b=B.ac
r.c=1.6
r.r=D.bdz.gp(0)
r.d=B.bG
r.e=B.dS
p=r.H()
r=j.gbB().a.snapshot()
w.drawPath((j.e=new A.cv(r)).a,p)
p.delete()}},
bMs(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=0.75+0.25*Math.sin(a0*9)*Math.sin(a0*5.3)
for(w=a0*0.12,v=d.a,u=0.78*e,t=0.7*e,s=0;s<3;++s){r=D.awV[s]
q=r.a
p=r.c
o=q+p*0.1
n=r.b
m=r.d
l=n-m*0.38
k=A.bN(new A.t(o,l),m*0.74,p*0.5)
j=O.M2.j(u)
$.V()
i=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
i.r=j.gp(0)
h=i.H()
v.drawOval(A.bQ(k),h)
h.delete()
p=A.bN(new A.t(o+0,l+m*0.1),m*0.4,p*0.28)
l=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
l.r=O.AR.j(t).gp(0)
h=l.H()
v.drawOval(A.bQ(p),h)
h.delete()
for(p=q*0.01,m=n-m-r.e*0.9,g=0;g<5;++g){f=B.k.F(w+g/5+p,1)
o=Math.sin(f*6+g)
n=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
n.r=D.aeJ.j(0.16*(1-f)).gp(0)
h=n.H()
v.drawCircle(q+o*6+f*18,m-f*70,4+f*12,h)
h.delete()}}},
cEb(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
C.bB_(d,D.ecR,0.9,a0,D.hdK,!1,!1,D.aaD,1,!1)
w=$.V().r
v=x.v
u=new A.aI(w,B.ai,e,e,A.a([],v))
u.D(new A.b0(52,470))
u.D(new A.ap(50,486))
u.D(new A.ap(66,486))
u.D(new A.ap(64,470))
u.D(new A.bv())
t=A.K()
t.r=D.agt.gp(0)
d.aJ(u,t)
C.bB_(d,D.ecT,0.95,a0,D.hdD,!1,!1,D.aaE,1,!0)
t=new A.aI(w,B.ai,e,e,A.a([],v))
t.D(new A.b0(417,510))
t.D(new A.c8(431,532,445,510))
t.D(new A.ap(441,548))
t.D(new A.c8(431,553,421,548))
t.D(new A.bv())
u=A.K()
u.r=F.EV.gp(0)
d.aJ(t,u)
u=A.bN(D.ecS,8,28)
t=A.K()
t.r=D.boG.gp(0)
d.dX(u,t)
C.bB_(d,new A.t(-30+B.k.F(a0/26,1)*510,492),0.82,a0,D.hdN,!0,!1,D.VG,1,!1)
t=B.k.F(a0/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.dX(A.bN(new A.t(s+q*16,r-6),16,11),C.is(D.blh,1.8))
u=q<0
C.bB_(d,new A.t(s-q*6,r),0.62,a0,D.hdP,!1,u,D.VG,2.2,!1)
C.bB_(d,new A.t(s-q*32,r+4),0.58,a0+1,D.hdF,!1,u,D.VG,2.2,!1)
this.bSB(d,D.ecA,a0)
for(u=d.a,t=a0*0.5,p=a0*4,o=0;o<3;++o){n=88+o*17+Math.sin(t+o)*6
m=520+B.o.F(o,2)*6
l=Math.max(0,Math.sin(p+o*2))*4
k=A.bN(new A.t(n,m),8,11)
j=o===1
i=j?D.agh:D.agP
h=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
h.r=i.gp(0)
g=h.H()
u.drawOval(A.bQ(k),g)
g.delete()
k=j?D.agh:D.agP
j=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
j.r=k.gp(0)
g=j.H()
u.drawCircle(n+5,m+(-3+l),2.6,g)
g.delete()
j=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
j.b=B.ac
j.c=1
j.r=B.aE.gp(0)
j.d=B.bG
j.e=B.dS
g=j.H()
u.drawLine.apply(u,[n+7.5,m+(-2+l),n+10,m+(-1.5+l),g])
g.delete()
n+=-1
j=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
j.b=B.ac
j.c=1
j.r=B.aE.gp(0)
j.d=B.bG
j.e=B.dS
g=j.H()
u.drawLine.apply(u,[n,m+4,n,m+8,g])
g.delete()}f=a0<a1.f
u=A.bN(D.a6k,15+Math.sin(a0*2)*0.8,40)
t=A.K()
t.r=D.af5.gp(0)
d.dX(u,t)
u=A.bN(D.a6k.a9(0,new A.t(-14,f?-9:-2)),12,15)
t=A.K()
t.r=D.bfv.gp(0)
d.dX(u,t)
t=new A.aI(w,B.ai,e,e,A.a([],v))
t.D(new A.b0(130,592-(f?16:6)))
t.D(new A.ap(134,592-(f?22:9)))
t.D(new A.ap(138,592-(f?16:6)))
t.D(new A.bv())
u=A.K()
u.r=D.bfE.gp(0)
d.aJ(t,u)
u=D.a6k.a9(0,new A.t(-17,f?-9:-2))
t=A.K()
t.r=B.j8.gp(0)
d.ae(u,1.1,t)
v=new A.aI(w,B.ai,e,e,A.a([],v))
v.D(new A.b0(168,590))
w=Math.sin(a0*8)
v.D(new A.c8(180,588+w*(f?6:0),178,595))
d.aJ(v,C.is(D.af5,3.5))},
bSB(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=Math.max(0,Math.sin(f*0.6))*9,j=e.a9(0,new A.t(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=j.a,u=j.b,t=u+3,s=f*2,r=u+16,q=d.a,p=0;p<4;++p){o=w[p]
n=Math.sin(s+o)
$.V()
m=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
m.b=B.ac
m.c=2
m.r=D.WT.gp(0)
m.d=B.bG
m.e=B.dS
l=m.H()
q.drawLine.apply(q,[v+o,t,v+(o+n*1.5),r,l])
l.delete()}w=A.bN(j,17,32)
s=$.V()
r=A.K()
r.r=D.EU.gp(0)
d.dX(w,r)
r=A.bN(j.a9(0,D.ec4),7,26)
w=A.ar(D.EU,B.w,0.12)
w.toString
q=A.K()
q.r=w.gp(0)
d.dX(r,q)
s=new A.aI(s.r,B.ai,null,null,A.a([],x.v))
s.D(new A.b0(v+13,u-3))
s.D(new A.ap(v+22,u-8+k))
s.D(new A.ap(v+20,u+k-0.5))
s.D(new A.ap(v+12,t))
s.D(new A.bv())
t=A.K()
t.r=D.EU.gp(0)
d.aJ(s,t)
t=A.bN(j.a9(0,new A.t(24,-7+k)),9,12)
s=A.K()
s.r=D.EU.gp(0)
d.dX(t,s)
s=-11+k
d.br(j.a9(0,new A.t(22,s)),j.a9(0,new A.t(21,-17+k)),C.is(D.WT,1.6))
d.br(j.a9(0,new A.t(26,s)),j.a9(0,new A.t(28,-16+k)),C.is(D.WT,1.6))
s=j.a9(0,new A.t(26,-8+k))
t=A.K()
t.r=B.w.gp(0)
d.ae(s,0.9,t)
d.br(j.a9(0,new A.t(26,-3+k)),j.a9(0,new A.t(26,1+k)),C.is(D.bib,1.4))
d.br(j.a9(0,D.eeR),j.a9(0,new A.t(-19,-7+Math.sin(f*7)*2)),C.is(D.EU,2.4))},
bPU(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
for(w=a5.a,v=0;v<14;++v){u=v*3.141592653589793*2/14
t=Math.cos(u)
s=Math.sin(u)
if(Math.sin(u)<0){t=A.bN(new A.t(225+t*36,574+(s*13+6)),8,11)
$.V()
s=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
s.r=D.bnm.gp(0)
r=s.H()
w.drawOval(A.bQ(t),r)
r.delete()}}t=A.bN(D.aIe.a9(0,B.cv),17,52)
$.V()
s=A.K()
s.r=D.baE.gp(0)
a5.dX(t,s)
s=A.bN(D.aIe.a9(0,B.cv),12,44)
t=D.bdW.j(0.6+0.3*Math.sin(a6*6))
q=A.K()
q.r=t.gp(0)
a5.dX(s,q)
for(p=0;p<3;++p){u=D.db7[p]
t=225+Math.cos(u)*3
s=Math.cos(u)
q=Math.sin(u)
o=Math.cos(u)
n=Math.sin(u)
m=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
m.b=B.ac
m.c=7
m.r=D.bhF.gp(0)
m.d=B.bG
m.e=B.dS
r=m.H()
w.drawLine.apply(w,[t+s*24,579+q*4,t-o*24,579-n*4,r])
r.delete()
n=Math.cos(u)
o=Math.sin(u)
q=Math.cos(u)
s=Math.sin(u)
m=D.adH.j(0.6)
l=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
l.b=B.ac
l.c=2
l.r=m.gp(0)
l.d=B.bG
l.e=B.dS
r=l.H()
w.drawLine.apply(w,[t+n*24,579+(o*4-2),t-q*24,579-(s*4+2),r])
r.delete()}k=46+80*a7.w
j=[D.eO4,D.eOw,D.ePo,D.ePF,D.ePm]
for(t=a6*8,s=a6*15,q=a6*3.3,o=x.v,i=0;i<3;++i){h=[1,0.72,0.42][i]
g=[D.bkV,D.bhz,D.bmP][i]
for(n=i===0,m=1-i*0.15,p=0;p<5;++p){f=j[p]
l=f.b
e=f.c
d=k*l*h*(0.9+0.12*Math.sin(t+e)+0.06*Math.sin(s+e*2))
a0=Math.sin(q+e)*5*(d/k)
a1=225+f.a*m
a2=(12+8*a7.w)*l*h
l=$.V()
e=A.a([],o)
a3=new A.aI(l.r,B.ai,null,null,e)
e.push(new A.b0(a1-a2,578))
l=a1+a0*0.6
e.push(new A.lD(a1-a2*1.1,578-d*0.45,l-a2*0.2,578-d*0.7,a1+a0,578-d))
e.push(new A.lD(l+a2*0.3,578-d*0.65,a1+a2*1.15,578-d*0.4,a1+a2,578))
e.push(new A.bv())
l=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
l.r=g.j(n?0.9:0.95).gp(0)
r=l.H()
l=a3.gbB().a.snapshot()
w.drawPath((a3.e=new A.cv(l)).a,r)
r.delete()}}for(t=a6*1.5,v=0;v<22;++v){a4=B.k.F(a6*(0.35+B.o.F(v,5)*0.06)+v/22,1)
s=Math.sin(v*1.9+t)
q=a7.w
o=B.o.F(v,3)
n=D.bmY.j((1-a4)*0.9)
$.V()
m=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
m.r=n.gp(0)
r=m.H()
w.drawCircle(225+s*(10+a4*26),564-a4*(110+80*q),1.2+o*0.6,r)
r.delete()}for(t=a6*0.1,s=574-k,v=0;v<6;++v){a4=B.k.F(t+v/6,1)
q=Math.sin(a4*5+v)
o=D.aeJ.j(0.1*(1-a4))
$.V()
n=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
n.r=o.gp(0)
r=n.H()
w.drawCircle(225+q*16+a4*12,s-a4*120,7+a4*20,r)
r.delete()}},
bPW(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=d.a,r=0;r<16;++r){q=B.k.F(r*83+Math.sin(w+r)*40+v,450)
p=420+B.o.F(r*37,300)+Math.sin(u+r*2)*26
o=Math.max(0,Math.sin(t+r*1.7))
n=D.boN.j(0.18*o)
$.V()
m=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
m.r=n.gp(0)
l=m.H()
s.drawCircle(q,p,5,l)
l.delete()
m=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
m.r=D.biT.j(0.9*o).gp(0)
l=m.H()
s.drawCircle(q,p,1.4,l)
l.delete()}},
c1u(d,e){switch(d){case 0:return e.b?D.hdE:D.hdL
case 1:return e.b?D.hdO:D.hdI
case 2:return D.hdH
case 3:return D.hdG
case 4:return D.hdJ
default:return D.hdM}},
aBu(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
Qw(d,e,f,g){var w,v,u,t=this,s=D.a3W[e],r=t.c1u(e,g),q=new C.eQt(),p=f-g.e,o=f<g.f,n=g.r,m=g.c,l=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,k=D.a3W[e],j=e===0
k=B.k.E(((j?D.aI8:D.aId).a-k.a.a)/160,-1,1)*0.8+l*0.25
q.y=k
q.z=j?0.35:-0.3+l*0.2
k=q.e=k*0.55
q.Q=D.aIA
q.as=D.a6p
w=0
if(j){q.a=m?t.aBu(f,0):0
n=g.a
j=n===3&&g.d?0.7:0
v=n===4?0.8:0
q.b=0.3+j+v
q.c=n===2?0.5:0.1
q.f=l*0.05
if(m){q.r=Math.sin(f*4.2)*1.4
n=new A.t(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
q.as=n
q.Q=new A.t(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else n=D.a6p
if(g.a===3&&!g.d)q.e=k+Math.sin(p*6)*0.35*Math.max(0,1-p/1.8)
if(o){q.a=0.5
q.b=1
n=f*9
q.Q=new A.t(-4-Math.max(0,Math.sin(n))*7,-58)
n=q.as=new A.t(4+Math.max(0,Math.sin(n))*7,-58)}if(!o)n=!(m&&n.b<-50)
else n=!1
q.at=n
n=w}else if(e===1){q.b=0.35
if(m)q.r=Math.sin(f*2.4+1)*1.6
if(o){q.b=1
q.a=0.35+0.35*Math.max(0,Math.sin(f*13))
q.d=0.7
n=f*8
q.Q=new A.t(-4-Math.max(0,Math.sin(n))*7,-56)
q.as=new A.t(4+Math.max(0,Math.sin(n))*7,-56)
n=Math.max(0,Math.sin(n))*3
q.x=n}else{if(g.a===3&&!g.d){q.as=D.ecc
q.e=k+Math.sin(p*5)*0.2*Math.max(0,1-p/2)
q.b=-0.2}n=w}}else{q.b=0.3+0.1*Math.sin(f*0.5+e)
q.w=2+(m?Math.sin(f*1.6+e)*1.6:0)
if(m)q.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){q.c=0.6
q.w=4
if(e===2)q.as=D.edp
if(e===4)q.as=new A.t(36,-128+Math.sin(f*5)*4)}if(o){q.b=1
q.a=0.45+0.4*Math.max(0,Math.sin(f*12+e))
q.d=0.5
n=q.x=Math.max(0,Math.sin(f*9+e*1.3))*9
k=Math.max(0,Math.sin(f*10+e))*8
j=-56-n*0.3
q.Q=new A.t(-3-k,j)
q.as=new A.t(3+k,j)}else{if(f<n){q.a=0.55
q.b=-0.1
q.c=1
q.Q=D.efJ
q.as=D.edu}n=w}if(e===2&&g.x!=null&&f<g.y){q.a=t.aBu(f,5)
q.b=0.4
q.as=new A.t(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){q.a=t.aBu(f,e*3)
q.b=0.5
q.c=0.4}}k=s.a
j=s.b*1.2
w=d.a
J.bq(w.save())
v=k.a
w.translate(v,k.b-n*j)
d.bX(0,j)
j=A.bN(B.dz,18,96)
n=B.w.j(0.28)
$.V()
k=A.K()
k.r=n.gp(0)
d.dX(j,k)
k=A.bN(B.dz,11,70)
j=B.w.j(0.2)
n=A.K()
n.r=j.gp(0)
d.dX(k,n)
d.lj(D.aO4,A.K())
C.hUe(d,r,q,f,e)
u=225-v>=0?1:-1
n=A.K()
n.a=B.KN
n.sar(A.mb(new A.t(u*70,-60),new A.t(-u*70,-60),A.a([D.afE.j(0.5),D.afE.j(0.12),D.bhO.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aU(D.aO4,n)
w.restore()
w.restore()},
bDp(d,e,f){var w=new C.bPR(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gdc(d){return this.c}}
C.aeS.prototype={
a4(){return"_Stand."+this.b}}
C.acR.prototype={}
C.lg.prototype={}
C.bP1.prototype={
by6(d){var w,v,u,t,s=A.T(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aP()
this.c=s},
Bq(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.M)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aV(r,new C.bP2())
return r},
a7Z(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aKW(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.M)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
aln(d){var w,v,u=A.aX(x.N),t=d,s=0
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
galE(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aV(w,new C.bP3(this))
return B.d.gI(w)}}
C.aXx.prototype={}
C.asR.prototype={}
C.z9.prototype={}
C.ajL.prototype={
gaDN(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Z(w,new C.bJR(),A.S(w).k("Z<1>")).gL(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ag(){var w=this
return A.G(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.M4.prototype={
gao4(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
if(t.gaDN(0))s.push(t)}return s},
ag(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.M)(w),++s){r=w[s]
p.push(A.G(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.G(["id",this.a,"title",q,"qs",p],u,t)},
cX_(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gao4(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.M)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.M)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lg(B.a.i(s.a),p,B.d.cD(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.b8H.prototype={}
C.a90.prototype={}
C.bfP.prototype={}
C.aeQ.prototype={}
C.aj_.prototype={
U(){return new C.aj0(B.bE,A.a([],x.cC),A.a([],x.e4),null,null)},
gcZ(){return this.d}}
C.aj0.prototype={
gMh(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.fw7(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gb7P(){var w,v=this,u=v.e
if(u===$){w=v.rU(v.gc7X())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
a_(){this.a2()
this.gb7P().hj(0)},
t(){this.gb7P().t()
this.bsI()},
hj(d){this.m(new C.bI4(this))},
c7Y(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.ft(0,v)
if(w.c!=null)w.m(new C.bI_())},
b6c(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gMh()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bfP(u,(u+0.5)/v,w[t.x].b[u]))},
ft(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bt(w,new C.bI5())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c4j()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.M)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMh()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.k.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.ari(v,0.8,B.d4)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.ari(m.cy,0.8,D.pH)
m.aX5("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.ari(q,0.88,D.lr)
p=m.gMh()[m.x]
n=p.c
if(u===n){m.aX5("The right gourd fell! It was "+p.b[n]+".")
return}}}},
ari(d,e,f){var w,v,u,t=new A.eb()
t.d5(B.k.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.aj()*3.141592653589793*2
w.push(new C.aeQ(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aX5(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.PI()}},
c4j(){var w=this
if(w.x+1>=w.gMh().length){w.PI()
return}++w.x
w.b6c()},
PI(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$PI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMh().length
r=C.fSZ(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bHY())
w=2
return A.b(C.Bq(u.a.d,r),$async$PI)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.Br(t.d,t.c.a,"catch",u.z),$async$PI)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bHZ())
return A.h(null,v)}})
return A.i($async$PI,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.c7W()
else w=v.ch?v.c7Z():A.at(new A.D(B.ey,A.x(A.a([D.aSK,B.N,D.fxG,B.R,D.fDL,B.dW,C.wM("Play",v.geT(v),B.d4,B.id,D.fG)],x.p),B.m,u,B.e,B.P,0,B.p),u),u,u,u)
return new C.uo("Calabash Catch",w,B.fV,u)},
c7Z(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hV:B.Gu
p.push(A.X(u,v?B.aw:B.bU,r,r,r,22))}p.push(B.b0)
v=s.x
u=s.gMh()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aRn,r,r,r))
p.push(B.ba)
v=A.m(14)
p.push(A.p(r,A.d(""+s.z,r,r,r,r,r,r,B.iE,r,r,r),B.f,r,r,new A.o(B.bz,r,r,v,r,r,B.n),r,r,r,r,B.FK,r,r,r))
p=A.B(p,B.m,r,B.e,B.j,0,r,r)
v=A.m(18)
t=A.I(B.d4,B.r,3)
return A.x(A.a([new A.D(D.bwo,p,r),A.p(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fio,B.L,r,r),B.f,r,r,new A.o(D.r3,r,t,v,r,r,B.n),r,r,r,B.fI,B.bh,r,r,1/0),B.am,A.E(A.cC(new C.bI3(s)),1)],q),B.m,r,B.e,B.j,0,B.p)},
c7W(){var w=this,v=null,u=A.at(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.oC,v,v,v),v,v,v),t=A.at(A.d(""+w.Q+" of "+w.gMh().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Jz,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cq(A.a([D.b88,u,t,B.aL,new C.DV(s,r,w.cx,v),B.aL,A.at(C.wM("Back to the games",new C.bHX(w),B.d4,B.l4,D.fG),v,v,v)],x.p),v,B.a9,v,v,B.ag,!1)}}
C.bb2.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a6.a,a1=a6.b,a2=0+a0,a3=$.V(),a4=A.K()
a4.sar(A.mb(B.J,new A.t(0,a1),D.cVp,H.axa,B.x,d))
a5.aU(new A.a5(0,0,a2,0+a1),a4)
a4=A.K()
a4.r=D.boV.gp(0)
a5.ae(new A.t(a0*0.82,a1*0.16),22,a4)
a4=x.v
w=A.a([],a4)
v=new A.aI(a3.r,B.ai,d,d,w)
a3=a1*0.7
v.D(new A.b0(0,a3))
for(u=0;u<=a0;u+=6){t=new A.ap(u,a3+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.by(s)
t=v.e
if(t!=null)t.a.delete()
v.e=null}v.D(new A.ap(a0,a1))
v.D(new A.ap(0,a1))
a3=$.V()
w=A.K()
w.r=D.beM.gp(0)
a5.aJ(v,w)
r=a0*0.12
a3=new A.aI(a3.r,B.ai,d,d,A.a([],a4))
w=a1*0.86
a3.D(new A.b0(r-26,w))
t=a1*0.5
s=a1*0.34
a3.D(new A.c8(r-14,t,r-10,s))
a3.D(new A.ap(r+10,s))
a3.D(new A.c8(r+14,t,r+26,w))
a3.D(new A.bv())
w=A.K()
w.r=D.adS.gp(0)
a5.aJ(a3,w)
for(a3=a1*0.36,w=a1*0.24,t=a5.a,s=a1*0.22,q=0;q<4;++q){p=D.cgC[q]
o=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
o.r=D.adS.gp(0)
o.c=7
o.d=B.bG
n=o.H()
t.drawLine.apply(t,[r,a3,r+p*46,w,n])
n.delete()
o=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
o.r=D.bal.gp(0)
n=o.H()
t.drawCircle(r+p*50,s,18,n)
n.delete()}a3=a1*0.88
w=A.K()
w.r=D.bfC.gp(0)
a5.aU(new A.a5(0,a3,a2,a3+a1*0.12),w)
for(a2=a1*0.9,a3=a2-8,m=0;m<18;++m){w=a0*m/17
s=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
s.r=D.afm.gp(0)
s.c=2
n=s.H()
t.drawLine.apply(t,[w,a2,w+3,a3,n])
n.delete()}for(a2=this.b,a3=a2.r,w=a3.length,s=a1*0.89,q=0;q<a3.length;a3.length===w||(0,A.M)(a3),++q){l=a3[q]
if(l.e)continue
o=l.a
u=(l.b+Math.sin(a2.dx*1.7+o)*0.012)*a0
k=l.d
if(l.f){o=A.bN(new A.t(u,s),12,54)
$.V()
k=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
k.r=D.lr.j(0.6).gp(0)
n=k.H()
t.drawOval(A.bQ(o),n)
n.delete()
continue}o=Math.sin(a2.dx*2+o)
J.bq(t.save())
t.translate(u,k*a1)
t.rotate(o*0.1*180/3.141592653589793,0,0)
$.V()
o=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
o.r=D.aeu.gp(0)
n=o.H()
t.drawCircle(0,-34,14,n)
n.delete()
o=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
o.r=D.bk0.gp(0)
o.c=4
o.d=B.bG
n=o.H()
t.drawLine.apply(t,[0,-46,2,-56,n])
n.delete()
o=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
o.sar(A.Bv(D.eez,46,D.d2k,B.CI,B.x,d,d,0))
n=o.H()
t.drawCircle(0,0,34,n)
n.delete()
o=A.bN(D.eeF,8,12)
k=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
k.r=B.c.j(0.35).gp(0)
n=k.H()
t.drawOval(A.bQ(o),n)
n.delete()
j=new A.kz(new A.eH(l.c,d,d,B.cY,d,d,d,d,d,d,D.fgi),B.L,B.c5,new A.km(1),d,d,3,d,B.c4,d)
j.qR(62)
o=j.b
k=Math.max(40,o.c+10)
o=o.a.c
i=A.bz(A.bN(B.cH,o.gbc(o)+8,k),B.hu)
k=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
k.r=D.r3.gp(0)
n=k.H()
t.drawRRect(A.eL(i),n)
n.delete()
k=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
k.r=D.lr.gp(0)
k.b=B.ac
k.c=1.5
n=k.H()
t.drawRRect(A.eL(i),n)
n.delete()
k=j.b
o=k.c
k=k.a.c
j.a5(a5,new A.t(-o/2,4-k.gbc(k)/2))
t.restore()}h=a2.cy*a0
a3=a2.dx
w=Math.sin(a3*4)
V.AS(a5,new A.t(h,a1*0.93),a1*0.3,a3,!0,Math.abs(a2.db-a2.cy)*40*Math.abs(Math.sin(a2.dx*18)),2,B.dD,F.mx,!1,(w+1)/2)
g=A.bN(new A.t(h,a1*0.8),a1*0.07,a0*0.24)
a4=new A.aI($.V().r,B.ai,d,d,A.a([],a4))
w=g.a
a3=g.b
a4.D(new A.b0(w,a3))
s=g.c
a4.D(new A.ap(s,a3))
o=g.d
a4.D(new A.ap(s-8,o))
a4.D(new A.c8(g.gbN().a,o+8,w+8,o))
a4.D(new A.bv())
k=A.K()
k.r=D.bja.gp(0)
a5.aJ(a4,k)
for(a4=s-w,m=1;m<6;++m){s=w+a4*m/6
k=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
k.r=D.adH.gp(0)
k.c=1.4
n=k.H()
t.drawLine.apply(t,[s,a3,s+(m-3)*2,o,n])
n.delete()}s=a3+(o-a3)*0.35
o=A.K()
o.r=D.pH.gp(0)
a5.aU(new A.a5(w,s,w+a4,s+5),o)
w-=2
a3-=4
o=A.K()
o.r=D.beR.gp(0)
a5.dX(new A.a5(w,a3,w+(a4+4),a3+8),o)
for(a3=a2.w,a4=a3.length,q=0;q<a3.length;a3.length===a4||(0,A.M)(a3),++q){f=a3[q]
w=f.a
s=f.b
o=f.f
k=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
k.r=f.e.j(B.k.E(o,0,1)).gp(0)
n=k.H()
t.drawCircle(w*a0,s*a1,3*o+1,n)
n.delete()}e=a2.dx-a2.go
if(e>=0&&e<1.2){a3=a2.fy
j=A.fS(d,d,d,d,A.cX(d,d,d,d,d,d,d,d,d,A.l(d,d,B.d4.j(1-e/1.2),d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,N.a3a,d,d),"+"+a3),B.a6,B.c5,d,B.dP,B.c4)
j.eI()
j.a5(a5,new A.t(a2.id*a0-j.b.c/2,a1*0.72-e*60))}},
av(d){return!0}}
C.PV.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aA8(w.c,w.f,v),B.ax),s=A.m(10),r=A.I(B.bA,B.r,1.4)
return new A.a7(u+22,v,A.x(A.a([new A.a7(u,u,t,v),B.cK,A.p(v,A.d(w.d,v,1,B.a2,v,v,v,D.f95,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.n),v,v,v,v,B.mF,v,v,v)],x.p),B.m,v,B.e,B.P,0,B.p),v)},
gY(d){return this.e}}
C.aA8.prototype={
a5(d,e){var w=e.eg(B.J),v=e.gdB(),u=this.c?0.8:0
return V.fKh(d,w,v*0.44,this.b,0,u)},
av(d){return d.b!==this.b||d.c!==this.c}}
C.ayz.prototype={}
C.atq.prototype={
U(){return new C.atr(A.T(x.S,x.cq),null,null)},
gcZ(){return this.d}}
C.atr.prototype={
glY(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hrV(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaDA(){var w=this.z
return w===$?this.z=this.WD(0):w},
gm4(){var w,v=this.Q
if(v===$){w=this.glY()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c2(w,-1,!1,x.S)}return v},
WD(d){var w,v,u,t,s=this.glY()
if(d>=s.length)return A.a([],x.Z)
w=s[d]
s=A.a([],x.Z)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.ayz(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.ayz(v[t],u[t],-1))
v=new A.eb()
v.d5(this.a.e*31+d)
B.d.dO(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.dr(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eF$
u.b=!1
B.d.a8(u.a)
u=u.gog()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dR$.a.a8(0)
v.qh()}this.bt6()},
cMd(d,e){var w,v,u,t,s,r=this
if(d>=r.gm4().length||r.gm4()[d]!==-1||B.d.q(r.gm4(),e))return
w=r.gaDA()[e]
v=r.glY()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.ckB(r,e,w,v))
A.cL(B.lx,new C.ckC(r))
return}++r.r
u=A.bl(null,B.hD,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.ckD(r,d,e,w,v))
u.cp(0)},
jd(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$jd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.glY()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cL(n,0,new C.ckE())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.ckF(t,r))
w=5
return A.b(C.Bq(t.a.d,r),$async$jd)
case 5:t.x=f
o=t.a
w=6
return A.b(C.Br(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$jd)
case 6:t.ch=f
if(t.c!=null)t.m(new C.ckG())
w=1
break
case 4:for(o=t.as,n=new A.dr(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eF$
p.b=!1
B.d.a8(p.a)
p=p.gog()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dR$.a.a8(0)
q.qh()}o.a8(0)
t.m(new C.ckH(t))
case 1:return A.h(u,v)}})
return A.i($async$jd,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.oC,p,p,p),p,p,p)
v=r.f
v=A.at(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Jz,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.uo(q,A.cq(A.a([D.acN,w,v,B.aL,new C.DV(u,t,r.ch,p),B.aL,A.at(C.wM("Back to the games",new C.ckx(d),B.d4,B.l4,D.fG),p,p,p)],x.p),p,B.a9,p,p,B.ag,!1),B.fV,p)}w=r.glY()
v=r.e
s=w[v]
return new C.uo(q,new A.D(B.tZ,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aRi,B.L,p,p),A.E(A.cC(new C.cky(r,s)),1)],x.p),B.m,p,B.e,B.j,0,B.p),p),B.fV,p)}}
C.bay.prototype={
a5(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2=y.B,b3=b0.d,b4=new A.Z(b3,new C.cJW(),A.S(b3).k("Z<1>")).gL(0),b5=b0.b,b6=b5.a9(0,B.Iz)
$.V()
w=A.K()
w.r=D.kW.j(0.18+0.1*b4).gp(0)
b7.ae(b6,70+b4*10,w)
w=b8.a
b6=b8.b
v=b5.a9(0,D.ebm)
u=A.K()
u.r=B.oS.j(0.5).gp(0)
u.c=10
u.d=B.bG
b7.br(new A.t(w/2,b6*0.98),v,u)
for(v=b0.c,u=b5.a,b5=b5.b,t=b5+90,s=x.v,b5+=46,r=x.dc,q=x.W,p=b7.a,o=0;o<v.length;++o){n=v[o]
m=n.a+0
l=B.dZ.aw(0,B.k.E(b3[o],0,1))
k=$.V().r
j=A.a([],s)
i=new A.aI(k,B.ai,b1,b1,j)
j.push(new A.b0(u,b5))
j.push(new A.c8((u+m)/2,t,m,n.b+-46))
if(l<1)for(n=new A.aI(k,B.ai,b1,b1,A.bo(j,!0,r)),m=A.a([],q),h=new A.tk(n,!1,m);h.C();){g=h.c
if(g===0||h.f)A.b8(A.jt(b2));--g
f=new A.Bo(h,g)
e=0
for(;;){h.ii()
d=m[g].b
d===$&&A.c()
if(!(e<d.a.length()))break
h.ii()
d=m[g].b
d===$&&A.c()
d=Math.min(d.a.length(),e+7)
d=new A.aI(k,n.b,b1,new A.cw([f,e,d,!0]),A.a([],s))
$.V()
a0=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
a0.r=B.aZ.gp(0)
a0.b=B.ac
a0.c=3
a1=a0.H()
a0=d.gbB().a.snapshot()
p.drawPath((d.e=new A.cv(a0)).a,a1)
a1.delete()
e+=14}}if(l>0)for(n=new A.aI(k,i.b,i.c,b1,A.bo(j,!0,r)),m=A.a([],q),j=new A.tk(n,!1,m),h=l>0.4,g=9-3*l,d=11*l,a0=6*l;j.C();){a2=j.c
if(a2===0||j.f)A.b8(A.jt(b2));--a2
j.ii()
a3=m[a2].b
a3===$&&A.c()
a3=a3.a.length()
a3=new A.aI(k,n.b,b1,new A.cw([new A.Bo(j,a2),0,a3*l,!0]),A.a([],s))
$.V()
a4=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
a4.r=D.agr.gp(0)
a4.b=B.ac
a4.c=g
a4.d=B.bG
a1=a4.H()
a4=a3.gbB().a.snapshot()
p.drawPath((a3.e=new A.cv(a4)).a,a1)
a1.delete()
j.ii()
a3=m[a2].b
a3===$&&A.c()
a3=a3.a.length()
j.ii()
a5=m[a2].H2(a3*l)
if(h)for(a2=a5.a,a3=a2.a,a2=a2.b,a6=0;a6<4;++a6){a7=a6*1.6+o
a4=A.bN(new A.t(a3+Math.cos(a7)*14,a2+Math.sin(a7)*10),a0,d)
a8=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
a8.r=B.bm.gp(0)
a1=a8.H()
p.drawOval(A.bQ(a4),a1)
a1.delete()}}}if(b0.e)for(b3=b6*0.3,o=0;o<6;++o){a9=new A.kz(D.f8B,B.a6,B.c5,new A.km(1),b1,b1,b1,b1,B.c4,b1)
a9.eI()
a9.a5(b7,new A.t(w*(0.15+o*0.14),b3-B.o.F(o,3)*14))}},
av(d){return!0}}
C.axk.prototype={
U(){return new C.axl(A.aX(x.S))},
gcZ(){return this.d}}
C.axl.prototype={
glY(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hsP(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
a_(){this.a2()
this.b6l()},
t(){var w=this.ch
if(w!=null)w.a3(0)
this.a1()},
b6l(){var w=this.ch
if(w!=null)w.a3(0)
this.ch=A.dm(B.q4,new C.czv(this))},
bn2(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.glY()[v.e]
if(w.e[d]===w.b)v.m(new C.czD(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.czE(v,d))
A.cL(B.j9,new C.czF(v))}},
cRC(){var w=this
if(!w.as&&w.f<w.glY()[w.e].d.length)w.m(new C.czG(w))},
jd(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$jd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.glY()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a3(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.m(new C.czH(t,s))
w=5
return A.b(C.Bq(t.a.d,s),$async$jd)
case 5:t.y=f
q=t.a
w=6
return A.b(C.Br(q.d,q.c.a,"who",t.r),$async$jd)
case 6:t.ax=f
if(t.c!=null)t.m(new C.czI())
w=1
break
case 4:t.m(new C.czJ(t))
t.b6l()
case 1:return A.h(u,v)}})
return A.i($async$jd,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.d(""+a0.w+" of "+a0.glY().length+" guessed",a2,a2,a2,a2,a2,a2,B.oC,a2,a2,a2),a2,a2,a2)
v=A.at(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Jz,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.uo(a1,A.cq(A.a([D.b8l,w,v,B.aL,new C.DV(u,t,a0.ax,a2),B.aL,A.at(C.wM("Back to the games",new C.czx(a3),B.d4,B.l4,D.fG),a2,a2,a2)],x.p),a2,B.a9,a2,a2,B.ag,!1),B.fV,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.glY()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.A6,B.L,a2,a2),B.R,A.at(A.l5(new C.czy(a0,r),a2,B.b7,B.hD,a2,a2,new A.bn(a2,s,u),x.i),a2,a2,a2),B.aA],t)
for(q=x.gj,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aQ(16,16)
l=new A.ay(B.d4,2,B.r,-1)
k=o+1
w.push(new A.qP(new A.bn(0,1,u),new C.czz(),A.p(a2,new A.cb(B.aN,B.e,B.j,B.m,a2,B.p,a2,0,A.a([new A.oW(new A.y(""+k,a2,B.nE,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.lr,a2,12,a2),B.as,new A.bA(1,B.bd,new A.y(v[n].d[o],a2,D.fkS,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.r3,a2,new A.bI(l,l,l,l),new A.bk(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.ct,B.bh,a2,a2,a2),B.b7,B.j9,a2,new A.cs("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bK(!1,D.fLv,a2,a2,!0,a2,a2,a0.gcRB(),a2,a2),a2,a2,a2))
w.push(B.N)
if(a0.as){u=D.kW.j(0.2)
q=A.m(16)
p=A.I(D.kW,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fr,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.x(A.a([m,B.R,C.wM(v,a0.gnX(a0),B.d4,B.jP,D.fG)],t),B.m,a2,B.e,B.j,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bB,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.ds:B.d4.j(0.2)
g=new A.aQ(16,16)
l=new A.ay(n.q(0,o)?B.f7:B.d4,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bU:B.c
d=n.q(0,o)?B.wM:a2
t.push(new A.qP(new A.bn(0,i,u),new C.czA(),A.aB(a2,A.p(a2,new A.y(f,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),a2,B.L,a2,a2,a2,a2,a2,a2,a2),B.f,a2,D.b1n,new A.o(h,a2,new A.bI(l,l,l,l),new A.bk(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.ja,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.czB(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b7,B.mz,a2,new A.cs("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bW(B.fA,t,B.bq,10,10))}return new C.uo(a1,A.cq(w,a2,B.aj3,a2,a2,B.ag,!1),B.fV,a2)}}
C.ayk.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.aFu.prototype={
aW(){this.b6()
this.b5()
this.dH()},
t(){var w=this,v=w.b2$
if(v!=null)v.a6(0,w.gdD())
w.b2$=null
w.a1()}}
C.a5v.prototype={
B(d){var w=null
return new A.a7(1/0,this.c,A.b4(w,w,w,new C.bh9(w),B.ax),w)}}
C.bh9.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=d.a,s=e*0.15,r=f/2,q=e/2,p=f*0.8,o=e*0.85,n=x.v,f*=0.2,m=0,l=0;l<w;l+=e){k=D.dgj[B.o.F(m,6)]
j=$.V()
i=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
i.r=k.gp(0)
h=i.H()
t.drawRect(A.bQ(new A.a5(l,0,l+v,u)),h)
h.delete()
if(B.o.F(m,3)===0){i=A.a([],n)
g=new A.aI(j.r,B.ai,null,null,i)
j=l+q
i.push(new A.b0(j,f))
i.push(new A.ap(l+o,r))
i.push(new A.ap(j,p))
i.push(new A.ap(l+s,r))
i.push(new A.bv())
j=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
j.r=B.c.j(0.85).gp(0)
h=j.H()
j=g.gbB().a.snapshot()
t.drawPath((g.e=new A.cv(j)).a,h)
h.delete()}++m}},
av(d){return!1}}
C.uo.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aJ(w,w,w,w,B.OE,w,w,w,new C.bP4(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.faD,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c5(w,D.WI,A.p(w,A.bm(!0,A.x(A.a([D.bYM,new A.D(D.bAU,A.B(u,B.m,w,B.e,B.j,0,w,w),w),A.E(this.d,1)],v),B.m,w,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),B.f,w,w,D.b3p,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.DV.prototype={
B(d){var w=null,v=this.d,u=C.fsy(v),t=C.i58(v),s=B.c.j(0.08),r=A.m(18),q=A.I(B.d4.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fd4,w,w,w)],x.p)
if(this.e)p.push(D.ehA)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.fO,w,w,w))
if(t!=null)p.push(new A.D(B.tX,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.A3,w,w,w),w))
return A.p(w,A.x(p,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bB,w,w,w)}}
C.Vj.prototype={
U(){return new C.bjN(A.T(x.N,x.S),B.o.F(Date.now(),1e5))},
cSZ(d){return this.f.$1(d)},
ge_(){return this.d}}
C.bjN.prototype={
gSe(){var w=this.d
return w===$?this.d=this.a.c:w},
a_(){this.a2()
this.OY()},
OY(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$OY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bPj(u.a.d),$async$OY)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dfa[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bPi(p,(o===$?u.d=q.c:o).a,r),$async$OY)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.dV8(u,n))
return A.h(null,v)}})
return A.i($async$OY,v)},
u0(d){return this.ck2(d)},
ck2(d){var w=0,v=A.j(x.H),u=this,t
var $async$u0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a3(t,!1).cg(A.e_(new C.dV9(d),!1,null,x.H)),$async$u0)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.OY()
return A.h(null,v)}})
return A.i($async$u0,v)},
gb3L(){var w,v,u,t=C.SY(this.gSe()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)s.push(B.a.i(w[u].b))
return s},
a1C(d){return this.cre(d)},
cre(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a1C=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.M)(d),++s)r.push(d[s].ag())
w=2
return A.b(u.a.cSZ(r),$async$a1C)
case 2:if(u.c!=null)u.m(new C.dVa(u,r))
return A.h(null,v)}})
return A.i($async$a1C,v)},
Og(d){return this.bNo(d)},
bNo(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Og=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.h2v(t.gSe())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.M4("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a3(s,!1).cg(A.e_(new C.dV6(q),!1,null,r)),$async$Og)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.M)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bg(j,new C.dV7(p))
o=s.length
B.d.c8(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a1C(A.d1(s,0,A.dB(2,"count",x.S),r).dm(0)),$async$Og)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Og,v)},
X4(d,e){return this.bL_(0,e)},
bL_(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$X4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cf(null,null,!0,null,new C.dV5(e),o,null,!0,!0,x.y),$async$X4)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.h2v(u.gSe()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.M)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a1C(o),$async$X4)
case 5:case 3:return A.h(null,v)}})
return A.i($async$X4,v)},
Wy(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.dV2(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.m(20)
u=A.I(B.aZ,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cv,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.U6,p,p,p),B.b0],s)
q=A.m(10)
r.push(A.p(p,A.d(i,p,p,p,p,p,p,D.fbw,p,p,p),B.f,p,p,new A.o(B.ia,p,p,q,p,p,B.n),p,p,p,p,B.BF,p,p,p))
return A.aB(p,A.d6(A.p(p,A.x(A.a([A.B(r,B.m,p,B.e,B.j,0,p,p),B.b0,A.d(e,p,2,p,p,p,p,D.fj4,p,p,p),B.cK,A.d(f,p,3,B.a2,p,p,p,D.fcc,p,p,p)],s),B.E,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a9(B.ay,B.aD,B.x,w,p,p),B.n),p,p,p,p,B.y5,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
a9h(d,e,f,g,h,i){return this.Wy(d,e,f,g,h,i,null)},
B(a3){var w,v,u,t,s=this,r=null,q=C.SY(s.gSe()),p=s.gSe(),o=C.fsy(s.e),n=C.h2v(p),m=s.a.e&&J.ad(p.z)<2,l=new C.dVb(s),k=C.hrL(p,1).length,j=C.hoR(p,1).length,i=C.hrV(p,1).length,h=C.hsP(p,1).length,g=B.c.j(0.07),f=A.m(20),e=A.I(B.d4.j(0.5),B.r,1),d=A.d(o.b,r,r,r,r,r,r,H.a9_,r,r,r),a0=A.d(o.a,r,r,r,r,r,r,D.fgE,r,r,r),a1=q.b.length,a2=x.p
f=A.p(r,A.B(A.a([d,B.ba,A.E(A.x(A.a([a0,A.d(a1>=3?"The games are made from the "+a1+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,H.a8X,r,r,r)],a2),B.E,r,B.e,B.j,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.oC,r,r,r),D.fEK],a2),B.m,r,B.e,B.j,0,B.p)],a2),B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(g,r,e,f,r,r,B.n),r,r,r,r,B.bB,r,r,r)
e=s.a9h("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aC,new C.dVc(s,p),l.$1("kahoot"))
g=s.a9h("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lr,new C.dVd(s,p),l.$1("fire"))
a1=s.a9h("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.Ba,new C.dVe(s,p),l.$1("catch"))
i=i!==0?new C.dVh(s,p):r
i=s.Wy("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hc,i,l.$1("plant"),"Add a parent with two children, and one more person.")
h=h!==0?new C.dVi(s,p):r
h=s.Wy("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lq,h,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
j=j>=3?new C.dVj(s,p):r
j=s.Wy("\ud83e\ude98","Memory Drums","Flip the drums and match every person with the clue about them.",B.cN,j,l.$1("memory"),"Add at least 3 people with parents, children, spouses, jobs or birthplaces.")
k=k!==0?new C.dVk(s,p):r
k=A.a([f,B.aL,D.fIF,B.N,A.kK(0.98,A.a([e,g,a1,i,h,j,s.Wy("\ud83c\udf33","Elder Order","Who is older? Put the children and the generations in the right order.",B.eh,k,l.$1("order"),"Add a parent with two children, or a family with more than one generation."),s.a9h("\ud83d\udcdc","Family Test","A real test of 10 questions with a grade and a certificate at the end.",B.d9,new C.dVl(s,p),l.$1("test"))],a2),2,12,12,r,B.dQ,!0),B.d6,A.B(A.a([D.bCC,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fbA,r,r,r)],a2),B.m,r,B.e,B.j,0,r,r),B.N],a2)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.M)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aQ(18,18)
u=new A.ay(B.aZ,1,B.r,-1)
g=B.a.i(v.b)
if(g.length===0)g="Untitled game"
g=A.a([D.fpM,B.ba,new A.bA(1,B.bd,A.x(A.a([new A.y(g,r,B.hx,r,r,r,r,B.a2,r,1,r,r),new A.y(""+v.gao4(0).length+" questions \xb7 Kahoot style",r,B.A3,r,r,r,r,r,r,r,r,r)],a2),B.E,r,B.e,B.j,0,B.p),r)],a2)
if(v.gao4(0).length>=2){f=D.kW.j(0.2)
t=new A.ay(D.kW,1,B.r,-1)
g.push(A.aB(r,A.p(r,A.X(B.id,D.kW,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bI(t,t,t,t),r,r,r,B.a5),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dVm(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.d4.j(0.2)
t=new A.ay(B.d4,1,B.r,-1)
f=A.aB(r,A.p(r,A.X(B.jb,B.d4,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bI(t,t,t,t),r,r,r,B.a5),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dVn(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.f7.j(0.2)
t=new A.ay(B.f7,1,B.r,-1)
B.d.v(g,A.a([B.bo,f,B.bo,A.aB(r,A.p(r,A.X(B.ec,B.f7,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bI(t,t,t,t),r,r,r,B.a5),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dVo(s,v),r,r,r,r,r,r,!1,B.a4)],a2))}k.push(A.p(r,new A.cb(B.aN,B.e,B.j,B.m,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bI(u,u,u,u),new A.bk(h,h,h,h),r,r,B.n),r,r,r,B.d1,B.bh,r,r,r))}if(s.a.e){j=m?new C.dVf(s):new C.dVg(a3)
i=A.m(18)
h=A.I(m?B.d4:B.aZ,B.r,2)
g=m?B.d4.j(0.12):B.ds
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aB(r,A.p(r,A.at(A.d(f,r,r,r,r,r,r,A.l(r,r,m?B.d4:B.aB,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.MM,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.fJB)
k.push(B.aA)
k.push(D.apz)
return new C.uo("Family Games \xb7 "+p.b,A.cq(k,r,D.bwX,r,r,B.ag,!1),B.fV,r)}}
C.ZU.prototype={
a4(){return"_KPhase."+this.b}}
C.akS.prototype={
U(){return new C.akT(D.aWP)},
gcZ(){return this.e}}
C.akT.prototype={
t(){var w=this.at
if(w!=null)w.a3(0)
w=this.ax
if(w!=null)w.a3(0)
this.a1()},
hj(d){var w,v=this
v.m(new C.bPg(v))
w=v.at
if(w!=null)w.a3(0)
v.at=A.dm(B.fS,new C.bPh(v))},
aNJ(){var w=this,v=w.ax
if(v!=null)v.a3(0)
w.m(new C.bP6(w))
v=w.at
if(v!=null)v.a3(0)
w.at=A.dm(B.fp,new C.bP7(w))},
aCX(d){var w
if(this.d!==D.aaj)return
w=this.at
if(w!=null)w.a3(0)
this.b3H(d)},
b3H(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.k.V(500+500*B.k.E(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bPc(u,v,d))
u=v.ax
if(u!=null)u.a3(0)
v.ax=A.cL(B.q4,v.gks(v))},
cFP(d){var w=this
if(w.d!==D.Vj)return
if(w.e+1>=w.a.w.length)w.XP()
else{w.m(new C.bPd(w))
w.aNJ()}},
XP(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$XP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a3(0)
p=u.x
t=u.a.w.length
s=C.fSZ(p,u.w,t)
u.m(new C.bP9(u,s))
w=2
return A.b(C.Bq(u.a.e,s),$async$XP)
case 2:r=e
t=u.a
w=3
return A.b(C.Br(t.e,t.f,t.r,u.f),$async$XP)
case 3:q=e
if(u.c!=null)u.m(new C.bPa(u,r,q))
return A.h(null,v)}})
return A.i($async$XP,v)},
cGz(){var w,v,u,t,s=this,r=s.a,q=new A.eb()
q.d5(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.bj("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.dO(r,q)
for(r=A.d1(r,0,A.dB(4,"count",x.S),A.S(r).c),u=r.$ti,r=new A.bS(r,r.gL(0),u.k("bS<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.bj(t,B.k.V(w*(0.35+q.aj()*0.5)),!1))}B.d.aV(v,new C.bPe())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.aWP===r){w=A.a([D.fF7,B.R,A.d(s,t,t,t,t,t,t,B.JQ,B.L,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fbI,t,t,t))
w.push(B.aA)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.wS,B.L,t,t))
w.push(B.dW)
w.push(C.wM("Play",u.geT(u),B.d4,B.id,D.fG))
w=A.at(new A.D(B.ey,A.x(w,B.m,t,B.e,B.P,0,B.p),t),t,t,t)
break A}if(D.aWQ===r){w=A.at(A.d(""+u.z,t,t,t,t,t,t,D.fjx,t,t,t),t,t,t)
break A}if(D.aaj===r||D.Vj===r){w=u.cmE()
break A}if(D.aWR===r){w=u.c8_()
break A}w=t}return new C.uo(s,w,B.fV,t)},
cmE(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.Vj,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aRn,j,j,j),B.b0],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.A6,j,j,j))
g.push(B.as)
f=A.m(14)
g.push(A.p(j,A.d(""+k.f,j,j,j,j,j,j,B.iE,j,j,j),B.f,j,j,new A.o(B.bz,j,j,f,j,j,B.n),j,j,j,j,B.FK,j,j,j))
g=A.B(g,B.m,j,B.e,B.j,0,j,j)
f=A.m(6)
w=i?0:B.k.E(k.as/k.a.w[k.e].r,0,1)
f=A.bx(f,A.lk(B.bz,j,k.as<5?B.f7:B.d4,9,j,w,j),B.aq)
w=A.m(22)
v=A.I(B.d4,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.l(j,j,e?D.kW:D.pH,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.N,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.faM,B.L,j,j)],h),B.m,j,B.e,B.P,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.flz,B.L,j,j)
w=A.E(A.p(j,A.at(u,j,j,j),B.f,j,j,new A.o(D.r3,j,v,w,j,j,B.n),j,j,j,j,B.fc,j,j,1/0),3)
v=A.a([],h)
for(u=k.gks(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bPb(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.azu[o]
m=new A.aQ(16,16)
l=new A.ay(i&&t===s.c?B.c:B.K,4,B.r,-1)
r=A.a([new A.y(D.azI[o],j,D.fcG,j,j,j,j,j,j,j,j,j),B.as,new A.bA(1,B.bd,new A.y(r[t],j,D.fbF,j,j,j,j,B.a2,j,3,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.ao8)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bQN)
v.push(A.aB(j,new A.RZ(A.p(j,new A.cb(B.aN,B.e,B.j,B.m,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bI(l,l,l,l),new A.bk(m,m,m,m),T.axW,j,B.n),j,j,j,j,B.fI,j,j,j),p,B.b7,B.a1,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.ad,w,B.ad,A.E(A.kK(1.45,v,2,10,10,j,B.dQ,!1),4)],h)
if(i)h.push(D.egT)
return new A.D(B.MU,A.x(h,B.m,j,B.e,B.j,0,B.p),j)},
c8_(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cGz(),m=x.p,l=A.a([D.b7b,A.at(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.oC,o,o,o),o,o,o),A.at(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Jz,o,o,o),o,o,o),B.aL],m)
for(w=0;w<n.length;++w){v=n[w].c?B.d4.j(0.25):B.ds
u=new A.aQ(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.d4:B.bz,1,B.r,-1)
q=w<3?D.d8V[w]:""+(w+1)
s=s?B.u:B.O
l.push(A.p(o,new A.cb(B.aN,B.e,B.j,B.m,o,B.p,o,0,A.a([new A.a7(34,o,new A.y(q,o,B.mh,o,o,o,o,o,o,o,o,o),o),new A.bA(1,B.bd,new A.y(t.a,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new A.y(""+t.b,o,B.iE,o,o,o,o,o,o,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bI(r,r,r,r),new A.bk(u,u,u,u),o,o,B.n),o,o,o,B.ct,B.eP,o,o,o))}l.push(B.R)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.DV(m,v,p.CW,o))
l.push(B.aL)
l.push(A.at(C.wM("Back to the games",new C.bP8(p),B.d4,B.l4,D.fG),o,o,o))
return A.cq(l,o,B.fc,o,o,B.ag,!1)}}
C.akU.prototype={
U(){return new C.akV(A.a([],x.t))},
gcZ(){return this.d}}
C.akV.prototype={
gUj(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.fw7(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaol(d){var w,v,u=A.a([],x.t)
for(w=this.e,v=0;v<w.length;++v)if(w[v]===this.gUj()[v].c)u.push(1)
return u.length},
cHc(d){return this.m(new C.bPm(this,d))},
jd(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$jd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=t.r
if(q<0){w=1
break}t.e.push(q)
q=t.f
s=t.gUj()
w=q+1>=s.length?3:5
break
case 3:r=C.fSZ(t.gaol(0),0,s.length)
t.m(new C.bPn(t,r))
w=6
return A.b(C.Bq(t.a.d,r),$async$jd)
case 6:t.x=f
q=t.a
w=7
return A.b(C.Br(q.d,q.c.a,"test",t.gaol(0)*10),$async$jd)
case 7:t.z=f
if(t.c!=null)t.m(new C.bPo())
w=4
break
case 5:t.m(new C.bPp(t))
case 4:case 1:return A.h(u,v)}})
return A.i($async$jd,v)},
bn0(){var w=this.gaol(0)/this.gUj().length*100
if(w>=90)return D.eLb
if(w>=75)return D.eJn
if(w>=60)return D.eAt
if(w>=45)return D.eDJ
return D.ev3},
B(d){var w=this,v=w.a.c,u=w.y?w.cq2():w.ch1()
return new C.uo("Family Test \xb7 "+v.b,u,B.fV,null)},
ch1(){var w,v,u,t,s,r,q,p=this,o=null,n=p.gUj(),m=p.f,l=n[m],k=n.length,j=A.d("Question "+(m+1)+" of "+k,o,o,o,o,o,o,D.A6,o,o,o)
k=A.bx(A.m(6),A.lk(B.bz,o,D.kW,8,o,m/k,o),B.aq)
m=A.m(18)
w=A.I(B.d4,B.r,2)
v=x.p
m=A.a([j,B.am,k,B.aL,A.p(o,A.d(l.a,o,o,o,o,o,o,D.fmi,o,o,o),B.f,o,o,new A.o(D.r3,o,w,m,o,o,B.n),o,o,o,o,B.fc,o,o,1/0),B.aA],v)
for(k=l.b,u=0;u<k.length;++u){j=p.r===u?B.d4.j(0.25):B.ds
w=new A.aQ(14,14)
t=p.r===u
s=t?B.d4:B.aZ
r=new A.ay(s,t?2.5:1,B.r,-1)
t=t?B.d4:B.aZ
s=A.l1(65+u)
q=p.r===u?D.fG:B.c
m.push(A.aB(o,A.p(o,new A.cb(B.aN,B.e,B.j,B.m,o,B.p,o,0,A.a([new A.oW(new A.y(s,o,new A.F(!0,q,o,o,o,o,o,B.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),t,o,14,o),B.ba,new A.bA(1,B.bd,new A.y(k[u],o,D.fic,o,o,o,o,o,o,o,o,o),o)],v),o),B.f,o,o,new A.o(j,o,new A.bI(r,r,r,r),new A.bk(w,w,w,w),o,o,B.n),o,o,o,B.d1,B.bB,o,o,o),B.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.bPk(p,u),o,o,o,o,o,o,!1,B.a4))}m.push(B.b0)
n=p.f+1>=n.length?"Hand in the test":"Next question"
m.push(A.at(C.wM(n,p.r<0?o:p.gnX(p),B.d4,B.jP,D.fG),o,o,o))
return new A.D(D.bxt,A.x(m,B.E,o,B.e,B.j,0,B.p),o)},
cq2(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.bn0(),h=A.a([],x.t)
for(w=k.e,v=0;v<w.length;++v)if(w[v]!==k.gUj()[v].c)h.push(v)
u=A.m(22)
t=A.I(B.d4,B.r,4)
s=A.d(k.a.c.b,j,j,j,j,j,j,D.fgB,B.L,j,j)
r=A.d(i.a,j,j,j,j,j,j,D.faj,j,j,j)
q=A.d(i.b,j,j,j,j,j,j,D.fm1,j,j,j)
p=k.gaol(0)
o=k.gUj()
n=x.p
u=A.p(j,A.x(A.a([D.fDZ,B.av,s,D.fzf,B.R,r,q,B.am,A.d(""+p+" of "+o.length+" right",j,j,j,j,j,j,D.aSD,j,j,j),B.N,D.apz],n),B.m,j,B.e,B.j,0,B.p),B.f,j,j,new A.o(D.r3,j,t,u,j,j,B.n),j,j,j,j,B.fc,j,j,j)
t=k.w
s=k.x
if(s===0)s=t
s=A.a([u,B.aA,new C.DV(t,s,k.z,j)],n)
if(h.length!==0){u=A.a([B.aL,D.fyS,B.N],n)
for(t=h.length,m=0;m<h.length;h.length===t||(0,A.M)(h),++m){v=h[m]
r=new A.aQ(14,14)
l=new A.ay(B.bz,1,B.r,-1)
q=o[v]
u.push(A.p(j,A.x(A.a([new A.y(q.a,j,B.fO,j,j,j,j,j,j,j,j,j),B.av,new A.y("You said: "+q.b[w[v]],j,D.fhI,j,j,j,j,j,j,j,j,j),new A.y(q.d,j,D.fjT,j,j,j,j,j,j,j,j,j)],n),B.E,j,B.e,B.j,0,B.p),B.f,j,j,new A.o(B.ds,j,new A.bI(l,l,l,l),new A.bk(r,r,r,r),j,j,B.n),j,j,j,B.ct,B.bh,j,j,j))}B.d.v(s,u)}s.push(B.aA)
s.push(A.at(C.wM("Back to the games",new C.bPl(k),B.d4,B.l4,D.fG),j,j,j))
return A.cq(s,j,B.bQ,j,j,B.ag,!1)}}
C.azP.prototype={}
C.ana.prototype={
U(){return new C.aXw(A.a([],x.t))},
gcZ(){return this.d}}
C.aXw.prototype={
gaHN(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hoR(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gSD(){var w,v=this,u=v.e
if(u===$){w=v.bK_()
v.e!==$&&A.bF()
v.e=w
u=w}return u},
bK_(){var w,v,u,t,s,r=x.cy,q=A.a([],r)
for(w=this.gaHN(),v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
s=t.a
B.d.v(q,A.a([new C.azP(s,t.b,!0),new C.azP(s,t.c,!1)],r))}r=new A.eb()
r.d5(this.a.e)
B.d.dO(q,r)
return q},
cNl(d){var w,v,u,t,s=this
if(!s.y){w=s.gSD()[d]
w=w.d||w.e}else w=!0
if(w)return
s.m(new C.bZc(s,d))
w=s.as
if(w.length===2){++s.f
v=s.gSD()
u=v[w[0]]
t=v[w[1]]
if(u.a===t.a&&u.c!==t.c){s.m(new C.bZd(s,u,t))
if(s.r===s.gaHN().length)s.a3a()}else{s.y=!0
A.cL(B.aic,new C.bZe(s))}}},
a3a(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$a3a=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.f
r=u.gaHN().length
q=u.r
s=s<=r*2+2?15:0
t=q*5+s
u.m(new C.bZ8(u,t))
w=2
return A.b(C.Bq(u.a.d,t),$async$a3a)
case 2:u.x=e
s=u.a
w=3
return A.b(C.Br(s.d,s.c.a,"memory",Math.max(1,200-u.f*5)),$async$a3a)
case 3:u.Q=e
if(u.c!=null)u.m(new C.bZ9())
return A.h(null,v)}})
return A.i($async$a3a,v)},
B(d){var w,v,u=this,t=null,s=u.z,r=""+u.f
if(s){s=A.at(A.d(r+" moves",t,t,t,t,t,t,D.Jz,t,t,t),t,t,t)
r=u.w
w=u.x
if(w===0)w=r
w=A.cq(A.a([D.b7Q,D.b8d,s,B.aL,new C.DV(r,w,u.Q,t),B.aL,A.at(C.wM("Back to the games",new C.bZa(d),B.d4,B.l4,D.fG),t,t,t)],x.p),t,B.a9,t,t,B.ag,!1)
s=w}else{s=A.d("Match each person with the clue about them \xb7 "+r+" moves",t,t,t,t,t,t,B.A5,B.L,t,t)
r=x.p
w=A.a([],r)
for(v=0;v<u.gSD().length;++v)w.push(u.bNl(v))
s=new A.D(B.MU,A.x(A.a([s,B.R,A.E(A.kK(0.8,w,3,10,10,t,t,!1),1)],r),B.m,t,B.e,B.j,0,B.p),t)}return new C.uo("Memory Drums",s,B.fV,t)},
bNl(d){var w=null,v=this.gSD()[d],u=v.d||v.e?1:0
return A.aB(w,A.l5(new C.bZ6(v),w,B.b7,B.jw,w,w,new A.bn(w,u,x.X),x.i),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bZ7(this,d),w,w,w,w,w,w,!1,B.a4)}}
C.be9.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
$.V()
w=A.K()
w.r=B.d4.j(0.5).gp(0)
w.b=B.ac
w.c=2
for(v=e.b,u=d.a,t=e.a,s=x.v,r=10;r<v;r+=18){q=$.V()
p=A.a([],s)
o=new A.aI(q.r,B.ai,null,null,p)
p.push(new A.b0(0,r))
for(n=0;n<t;n+=12){q=(B.o.an(n,12)&1)===0?-5:5
q=new A.ap(n+6,r+q)
p.push(q)
m=o.f
if(m!=null)q.by(m)
q=o.e
if(q!=null)q.a.delete()
o.e=null}l=w.H()
q=o.e
u.drawPath((q==null?o.e=new A.cv(o.gbB().a.snapshot()):q).a,l)
l.delete()}},
av(d){return!1}}
C.akt.prototype={
U(){return new C.aku(A.a([],x.t))},
gcZ(){return this.d}}
C.aku.prototype={
glY(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hrL(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
b5M(d){var w,v,u,t,s=this.glY()
if(d>=s.length)return A.a([],x.t)
w=s[d].c.length
s=J.e4(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.eb()
u.d5(this.a.e+d)
B.d.dO(s,u)
if(s.length>1){u=A.a([],x.t)
for(v=0;v<s.length;++v)u.push(s[v]===v?1:0)
u=B.d.f9(u,new C.bMS())===s.length}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
cWF(d){var w,v,u,t,s,r,q,p,o=this
if(o.z||B.d.q(o.x,d))return
o.m(new C.bN0(o,d))
w=o.x.length
v=o.glY()
if(w===v[o.e].c.length){u={}
w=A.a([],x.t)
for(t=o.x,s=t.length,r=0;r<t.length;t.length===s||(0,A.M)(t),++r){q=t[r]
w.push(v[o.e].d[q])}u.a=!0
for(p=1;p<w.length;++p)if(w[p]<w[p-1])u.a=!1
o.m(new C.bN1(u,o))}},
jP(d){return this.m(new C.bN_(this))},
jd(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$jd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.glY().length
w=r+1>=q?3:4
break
case 3:r=t.f
q=r===q?15:0
s=r*10+q
t.m(new C.bMX(t,s))
w=5
return A.b(C.Bq(t.a.d,s),$async$jd)
case 5:t.w=f
q=t.a
w=6
return A.b(C.Br(q.d,q.c.a,"order",t.f*10),$async$jd)
case 6:t.at=f
if(t.c!=null)t.m(new C.bMY())
w=1
break
case 4:t.m(new C.bMZ(t))
case 1:return A.h(u,v)}})
return A.i($async$jd,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Elder Order",a2=null
if(a0.as){w=A.at(A.d(""+a0.f+" of "+a0.glY().length+" rounds right",a2,a2,a2,a2,a2,a2,B.oC,a2,a2,a2),a2,a2,a2)
v=a0.r
u=a0.w
if(u===0)u=v
return new C.uo(a1,A.cq(A.a([D.acN,w,B.aL,new C.DV(v,u,a0.at,a2),B.aL,A.at(C.wM("Back to the games",new C.bMT(a3),B.d4,B.l4,D.fG),a2,a2,a2)],x.p),a2,B.a9,a2,a2,B.ag,!1),B.fV,a2)}w=a0.glY()
t=w[a0.e]
v=A.a([],x.t)
for(u=t.c,s=0;s<u.length;++s)v.push(s)
B.d.aV(v,new C.bMU(t))
r=A.d("Round "+(a0.e+1)+" of "+w.length,a2,a2,a2,a2,a2,a2,D.A6,a2,a2,a2)
q=A.d(t.a,a2,a2,a2,a2,a2,a2,B.mh,a2,a2,a2)
p=A.d(t.b,a2,a2,a2,a2,a2,a2,B.h9,a2,a2,a2)
o=x.p
n=A.a([],o)
m=a0.y
if(m===$)m=a0.y=a0.b5M(0)
l=m.length
k=0
for(;k<m.length;m.length===l||(0,A.M)(m),++k){j=m[k]
if(B.d.q(a0.x,j))if(a0.z)i=a0.Q?D.kW:D.pH
else i=B.d4
else i=B.bz
h=new A.aQ(18,18)
g=new A.ay(B.d.q(a0.x,j)?B.c:B.d4.j(0.6),2,B.r,-1)
f=A.a([],o)
if(B.d.q(a0.x,j))f.push(new A.oW(new A.y(""+(B.d.cD(a0.x,j)+1),a2,D.fe6,a2,a2,a2,a2,a2,a2,a2,a2,a2),B.c,a2,12,a2))
if(B.d.q(a0.x,j))f.push(B.ab)
e=u[j]
d=B.d.q(a0.x,j)?D.fG:B.c
f.push(new A.y(e,a2,new A.F(!0,d,a2,a2,a2,a2,17,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2))
n.push(A.aB(a2,A.d9(a2,new A.cb(B.aN,B.e,B.P,B.m,a2,B.p,a2,0,f,a2),a2,a2,B.b7,new A.o(i,a2,new A.bI(g,g,g,g),new A.bk(h,h,h,h),a2,a2,B.n),B.a1,a2,a2,a2,B.yb,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.bMV(a0,j),a2,a2,a2,a2,a2,a2,!1,B.a4))}u=A.a([r,B.am,q,p,B.bv,A.bW(B.bD,n,B.bq,12,12),B.b0],o)
if(a0.z){r=(a0.Q?D.kW:D.pH).j(0.2)
q=A.m(16)
p=a0.Q
n=A.I(p?D.kW:D.pH,B.r,1)
u.push(A.p(a2,A.d(p?"Yes! That is the right order. The elders smile.":"Not quite. The right order is: "+new A.N(v,new C.bMW(t),x.cM).aG(0,", then ")+".",a2,a2,a2,a2,a2,a2,D.flc,a2,a2,a2),B.f,a2,a2,new A.o(r,a2,n,q,a2,a2,B.n),a2,a2,a2,a2,B.bB,a2,a2,1/0))}u.push(B.ad)
v=A.a([],o)
if(!a0.z&&a0.x.length!==0)B.d.v(v,A.a([C.wM("Start again",a0.gcWb(a0),B.aZ,a2,B.c),B.as],o))
if(a0.z){w=a0.e+1>=w.length?"See my result":"Next round"
v.push(C.wM(w,a0.gnX(a0),B.d4,B.jP,D.fG))}u.push(A.at(A.B(v,B.m,a2,B.e,B.P,0,a2,a2),a2,a2,a2))
return new C.uo(a1,new A.D(B.bQ,A.x(u,B.E,a2,B.e,B.j,0,B.p),a2),B.fV,a2)}}
C.SX.prototype={
U(){return new C.akR(A.T(x.de,x.er))}}
C.akR.prototype={
gCB(){var w,v=this,u=v.d
if(u===$){w=C.h84(v.a.c.ag())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
gkX(d){var w,v,u=this,t=u.e
if(t===$){w=u.gCB().b
v=$.ax()
u.e!==$&&A.bF()
t=u.e=new A.as(new A.bb(w,B.b4,B.aO),v)}return t},
cav(d){return this.f.c4(0,d,new C.bOQ(d))},
a_(){this.a2()
var w=this.gCB().c
if(w.length===0)w.push(C.fVf(null,0,20,""))},
t(){var w,v,u=this.gkX(0)
u.T$=$.ax()
u.P$=0
for(u=this.f,u=new A.dr(u,u.r,u.e);u.C();)for(w=J.aV(u.d);w.C();){v=w.gR(w)
v.T$=$.ax()
v.P$=0}this.a1()},
cFF(){if(this.gCB().c.length>=12)return
this.m(new C.bOR(this))},
ju(d){var w,v,u=this,t=u.gCB()
t.b=B.a.i(u.gkX(0).a.a)
w=t.gao4(0)
if(t.b.length===0||w.length<2){u.c.J(x.q).f.S(D.f3O)
return}v=t.c
B.d.a8(v)
B.d.v(v,w)
v=u.c
v.toString
A.a3(v,!1).N(t)},
B(d){var w,v,u=this,t=null,s=new C.bP0(),r=x.p,q=A.a([A.bK(!1,D.fuC,t,t,!0,t,t,u.gbn8(u),t,t)],r),p=A.a([D.fJc,B.ad,A.aN(t,B.X,!1,t,!0,B.t,t,A.aO(),u.gkX(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.a9,t,t,t,t,t,t,t,t,t,t,t,B.fO,!0,B.a6,t,B.ao,t,t,t,t),B.aA],r)
for(w=0;v=u.gCB().c.length,w<v;++w)B.d.v(p,A.a([new A.fd(new C.bP_(u,w,s),t)],r))
if(v<12)p.push(A.at(C.wM("\uff0b Add a question",u.gcFE(),B.aZ,t,B.c),t,t,t))
return new C.uo("Make your game",A.cq(p,t,D.bwU,t,t,B.ag,!1),q,t)}}
C.apO.prototype={
U(){return new C.aDF(A.a([],x._))},
bs(){return this.r.$0()},
q1(){return this.w.$0()},
ge_(){return this.c}}
C.aDF.prototype={
a_(){var w,v
this.a2()
this.vZ()
w=this.a
v=w.c
if(v.length!==0)C.a7f(v,w.e,w.d.w)},
vP(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h50(r,t.e,!1,s.w,new C.dWO(u),null,s),$async$vP)
case 2:w=3
return A.b(u.vZ(),$async$vP)
case 3:return A.h(null,v)}})
return A.i($async$vP,v)},
a_N(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a_N=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h50(r,t.e,!0,s.w,new C.dWN(u),null,s),$async$a_N)
case 2:w=3
return A.b(u.vZ(),$async$a_N)
case 3:return A.h(null,v)}})
return A.i($async$a_N,v)},
vZ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vZ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.AV(q.a.c),$async$vZ)
case 7:p=e
if(q.c!=null)n=q.e||J.cK(p)
else n=!1
if(n)q.m(new C.dWQ(q,p))
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
return A.b(C.GI(q.a.c).da(0,B.q0),$async$vZ)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dWR(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dWS(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vZ,v)},
OC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$OC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.J(s).f.S(D.f3o)
w=3
return A.b(C.GI(t.a.c),$async$OC)
case 3:r=e
w=4
return A.b(C.fL3(t.a.c,r),$async$OC)
case 4:q=e
w=5
return A.b(C.GI(t.a.c),$async$OC)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dWM(t,p))
o=t.c.J(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.S(A.b3(null,null,null,q?B.dC:B.cR,null,B.t,null,s,null,B.mB,null,null,null,null,null,null,null,null,null,null))
t.a.q1()
case 1:return A.h(u,v)}})
return A.i($async$OC,v)},
I2(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$I2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.idj(l),$async$I2)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hHx(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b_i(q,p.e,l,"Each family tree costs $"+B.k.ac(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$I2)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hop(r)
o=Date.now()
n=t.a.c
m=new C.kJ(l,r.toUpperCase(),p,!0,B.X,D.CK,new A.U(o,0,!1),0,n,D.u4,B.c6)
w=5
return A.b(C.a2N(n,m),$async$I2)
case 5:w=6
return A.b(t.vZ(),$async$I2)
case 6:t.a.bs()
t.a.q1()
if(t.c==null){w=1
break}t.Ez(m)
case 1:return A.h(u,v)}})
return A.i($async$I2,v)},
Ez(d){return this.cfo(d)},
cfo(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Ez=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.AV(u.a.c),$async$Ez)
case 2:n=l.p_(k.dG(f,new C.dWP(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hE(m,new C.apI(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Ez)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a2N(u.a.c,o),$async$Ez)
case 6:case 5:w=7
return A.b(u.vZ(),$async$Ez)
case 7:u.a.q1()
return A.h(null,v)}})
return A.i($async$Ez,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tV(p)
if(r.e)return A.at(A.mQ(q,p?B.br:B.bl,q,q,q,q,q,q,q,q),q,q,q)
if(J.cp(r.d)){w=p?B.e1:B.c
v=A.m(15)
u=A.aF(!1,B.a1,!0,q,A.aM(!1,q,!0,A.p(q,D.bOu,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.r,2),q,q,q,B.a5),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gces(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ah)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.au,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.FK(A.p(q,A.x(A.a([u,B.aL,t,B.N,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.br:B.bl,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dW,A.bH(D.fMo,r.gaQU(),A.bp(B.bP,q,q,q,q,q,Ar.ZV,q,new A.b7(A.m(12),B.a0),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bzD,q,q,1/0),15,B.af,1.05,D.aa5,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.au,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b0],v)
if(J.cK(r.d))w.push(A.aJ(q,q,q,q,A.X(B.yT,B.aV,q,q,q,q),q,q,q,new C.dWU(r),q,q,q,q,"Sync family trees with database",q))
if(J.cK(r.d))w.push(A.aJ(q,q,q,q,A.X(B.yO,B.aV,q,q,q,q),q,q,q,r.gafR(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dq(E.ap_,D.fs1,r.gaQU(),A.bp(B.bP,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ad)
u.push(new C.FK(r.cC_(J.q(r.d,s),o),14,B.af,1,D.aa5,q))
B.d.v(w,u)}return A.x(A.a([p,B.aA,A.x(w,B.m,q,B.e,B.j,0,B.p)],v),B.E,q,B.e,B.j,0,B.p)},
cC_(d,e){var w=null,v=e.a,u=v?B.e1:B.c,t=A.m(14),s=A.I((v?B.e6:B.bO).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.eq,10)],x.V),q=A.m(14),p=A.p(w,D.bNy,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.au,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaoX(),m=d.d?"":" \xb7 Public",l=d.y===D.kE?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bC,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.br:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aF(!1,B.a1,!0,w,A.aM(!1,q,!0,new A.D(B.bB,A.B(A.a([p,B.ba,l,A.X(B.NA,v?B.br:B.bl,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dWT(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.apI.prototype={
U(){return new C.aDC(A.a([],x._),A.aX(x.N),A.b81())},
bs(){return this.r.$0()},
ge_(){return this.c}}
C.aDC.prototype={
a_(){var w,v,u=this
u.a2()
u.d=u.a.w
u.acG()
w=u.a
v=w.c
if(v.length!==0)C.a7f(v,w.e,w.d.w)},
t(){var w=this.w
w.T$=$.ax()
w.P$=0
this.a1()},
a2M(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2M=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xT("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dWe(r),s,null,!0,!0,x.y),$async$a2M)
case 3:if(e!==!0||t.c==null){w=1
break}t.Jz()
t.m(new C.dWf(t,r))
w=4
return A.b(t.tX(),$async$a2M)
case 4:t.a.bs()
t.xT(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a2M,v)},
crP(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.dW9(w,f,d,e))},
aT8(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dk()
u.ec(w,v,0,1)
u.jU(q,q,1,1)
this.w.sp(0,u)},
bab(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eC(new Float64Array(16))
q.e5(r)
w=q.CG()
v=B.k.E(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dk()
t.ec(r,u,0,1)
t.jU(v,v,1,1)
t.ec(-r,-u,0,1)
t.iN(0,q)
s.sp(0,t)},
acG(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$acG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.AV(u.a.c),$async$acG)
case 2:t=s.p_(r.dG(e,new C.dVB(u)))
if(t!=null&&u.c!=null)u.m(new C.dVC(u,t))
return A.h(null,v)}})
return A.i($async$acG,v)},
xT(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.S(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.V,w,w,w,w,w,w,w,w,w,w))},
vP(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.h50(o,t,!1,r,new C.dVT(u),q.a,s),$async$vP)
case 2:n=A
m=J
w=3
return A.b(C.GI(u.a.c),$async$vP)
case 3:p=n.p_(m.dG(e,new C.dVU(u)))
if(p!=null&&u.c!=null)u.m(new C.dVV(u,p))
return A.h(null,v)}})
return A.i($async$vP,v)},
Jz(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cG(w,0)},
tX(){var w=0,v=A.j(x.H),u=this,t,s
var $async$tX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a2N(t,s),$async$tX)
case 2:return A.h(null,v)}})
return A.i($async$tX,v)},
a1h(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a1h=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.u6(q,t.a.c)){t.xT("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.ies(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a1h)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Jz()
t.m(new C.dW8(t,r))
w=4
return A.b(t.tX(),$async$a1h)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1h,v)},
b0m(){var w=this.c
w.toString
A.a3(w,!1).cg(A.e_(new C.dVQ(this),!1,null,x.H))},
a00(){return this.cfq()},
cfq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a00=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.u6(m,t.a.c)){t.xT("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.P(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Z(s,new C.dW5(),A.S(s).k("Z<1>")).gL(0)
s=A.ey([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("cr.E"))
B.d.fc(p)
s=t.c
s.toString
w=3
return A.b(A.bT(B.K,null,new C.dW6(n,t,new C.tV(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a00)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Jz()
t.m(new C.dW7(t,o))
w=6
return A.b(t.tX(),$async$a00)
case 6:case 5:if(o.a&&t.c!=null)t.b0m()
case 1:return A.h(u,v)}})
return A.i($async$a00,v)},
VX(d){return this.bA7(d)},
bA7(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.u6(r,t.a.c)){t.xT("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dVp(t,d),r,null,!0,!0,x.P),$async$VX)
case 3:s=f
if(s==null){w=1
break}t.Jz()
t.m(new C.dVq(t,s))
w=4
return A.b(t.tX(),$async$VX)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VX,v)},
a37(d){return this.cE9(d)},
cE9(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a37=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.cf(null,null,!0,null,new C.dWh(u,d,new C.tV(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a37)
case 2:return A.h(null,v)}})
return A.i($async$a37,v)},
cbI(d){var w=this,v=w.d
v===$&&A.c()
if(C.u6(v,w.a.c))w.Oh(d)
else w.a37(d)},
aii(d,e){return this.cvN(d,e)},
cvN(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aii=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.dWb(new C.tV(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$aii)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aii,v)},
I7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$I7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kE?3:5
break
case 3:w=6
return A.b(C.fTv(t.a.c),$async$I7)
case 6:s=e
o=t.a
r=C.hcS(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.aii(!s,!r),$async$I7)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aP6(o,t.a.c)){t.xT("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lb(o,"Cancel","Remove",q.y===D.kE?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$I7)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aP2(t.a.c,t.d.a),$async$I7)
case 11:t.a.bs()
o=t.c
if(o==null){w=1
break}A.iR(o,null)
case 1:return A.h(u,v)}})
return A.i($async$I7,v)},
aac(d){return this.bLg(d)},
bLg(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$aac=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.u6(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b3(s,new C.dVr(p))){o=A.S(s)
p.a=A.p_(new A.cQ(new A.Z(s,new C.dVs(d),o.k("Z<1>")),new C.dVt(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.Jz()
t.m(new C.dVu(t,s,d,q))
w=3
return A.b(t.tX(),$async$aac)
case 3:t.xT(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$aac,v)},
Oh(d){return this.bNs(d)},
bNs(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Oh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.u6(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a37(d),$async$Oh)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.dVy(t,d),r,null,!0,!0,x.P),$async$Oh)
case 6:s=f
if(s==null){w=1
break}t.Jz()
t.m(new C.dVz(t,s))
w=7
return A.b(t.tX(),$async$Oh)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Oh,v)},
cCo(){var w=this,v=w.d
v===$&&A.c()
if(!C.u6(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dWg(w))
w.tX()},
YP(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$YP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aP6(n,t.a.c)){t.xT("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.ax()
r=new A.as(B.at,s)
q=t.d.e
p=A.bo(new A.N(q,t.gcab(),A.S(q).k("N<1,n>")).c0(0,new C.dVL()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dVM(t,new C.tV(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$YP)
case 3:o=e
r.T$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.Jz()
t.m(new C.dVN(t,p))
w=4
return A.b(t.tX(),$async$YP)
case 4:t.xT("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$YP,v)},
cac(d){return B.a.i(d.toLowerCase())},
cec(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.u6(v,w)
t=r.d
s=C.i3B(t)
C.idn(q,t.b,u,C.i3A(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tV(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Z(l,new C.dWo(),A.S(l).k("Z<1>")).gL(0)
l=n?B.bZ:B.ip
v=A.X(B.a05,n?B.br:B.bl,o,o,o,18)
u=x.p
v=A.a([new A.D(B.Bv,A.aM(!1,o,!0,new A.D(B.hE,A.B(A.a([v,B.bo,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bl,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.P,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dWp(p,d),o,o,o,o,o,o,o),o),new A.D(B.nn,p.bYz(m),o)],u)
if(p.d.y===D.kE){t=B.rE.j(0.15)
s=A.m(12)
r=A.I(B.rE.j(0.45),B.r,1)
q=C.GG(p.d,p.a.c)
v.push(new A.D(B.y9,A.p(o,A.B(A.a([D.bSR,B.as,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iQ,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b0],u)
if(C.u6(p.d,p.a.c)&&p.e.length!==0)u.push(new C.FU("Undo",B.rs,p.gcCn(),m,o,o))
u.push(new C.FU("Family Book",D.bIm,p.gceb(),m,B.tx,o))
u.push(new C.FU("Family games",B.oe,p.gcen(),m,B.aC,o))
if(C.u6(p.d,p.a.c))u.push(new C.FU("Display settings",B.Ch,p.gcfp(),m,B.b_,o))
u.push(new C.FU("Sync",B.yO,p.gafR(),m,o,o))
t=p.d
if(t.y===D.kE||C.aP6(t,p.a.c)){t=p.d.y===D.kE?"Remove shared tree":"Delete tree"
u.push(new C.FU(t,B.ec,p.gbLq(),m,B.f7,o))}if(C.u6(p.d,p.a.c))u.push(new C.FU("Add member",B.wc,new C.dWq(p),m,B.bP,o))
v.push(new A.D(X.aj4,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gaoX()===0){u=A.at(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bl,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cC(new C.dWr(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?M.a09:A4.NB,o,o,o,o,o)
v.push(A.at(A.hp(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dWs(p),o),o,o,o))}return A.c5(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bYz(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fE.j(0.35),B.dq,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.X(B.yI,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a1,!0,m,A.aM(!1,m,!0,A.p(m,D.bVX,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.r,1.5),m,m,m,B.a5),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gafR(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ah)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.fdE,m,m,m)
r=r.gaoX()
p=n.d.gaoX()===1?"member":"members"
o=x.p
p=A.a([s,B.ba,A.E(A.x(A.a([q,B.bC,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a7,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.j,0,B.p),1)],o)
if(C.u6(n.d,n.a.c))p.push(A.aJ(m,m,m,m,D.bT2,m,m,m,n.gcp9(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jQ:B.ob
r=r?"Private":"Public"
r=A.E(n.avk(q,"Privacy",r,n.a.d.w?n.gcBm():m),1)
q=A.E(n.avk(B.yP,"Tree code",n.d.c,new C.dVA(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ad,A.B(A.a([r,B.ab,q,B.ab,A.E(n.avk(D.bK3,"Collaborators",p,n.gc29()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kE){s=B.c.j(0.15)
B.d.v(p,A.a([B.N,A.aF(!1,B.a1,!0,A.m(999),A.aM(!1,A.m(999),!0,new A.D(B.h4,A.B(A.a([A.X(B.p6,B.c,m,m,m,14),B.ej,A.d("View only",m,m,m,m,m,m,B.aRs,m,m,m)],o),B.m,m,B.e,B.P,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ah)],o))}return A.p(m,A.bx(u,new A.an(B.a_,m,B.aa,B.t,A.a([t,new A.D(B.FN,A.x(p,B.E,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.c_d,B.n),m,m,m,m,m,m,m,1/0)},
avk(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a1,!0,A.m(14),A.aM(!1,A.m(14),!0,new A.D(H.akd,A.x(A.a([A.X(d,B.c,w,w,w,18),B.av,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.v5,A.d(f,w,1,B.a2,w,w,w,F.A1,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ah)}}
C.beH.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gam(r)&&s.c.length===0)return B.bJ
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.beK(s,t),new A.au(w,v))],x.p)
r=r.gdT(r)
B.d.v(u,r.dF(r,new C.daw(this),x.l))
r=s.c
B.d.v(u,new A.N(r,new C.dax(this),A.S(r).k("N<1,v>")))
return new A.D(B.u0,new A.a7(w,v,new A.an(B.a_,t,B.aa,B.f,u,t),t),t)}}
C.Kf.prototype={}
C.FY.prototype={}
C.beJ.prototype={
gbiG(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aJc.prototype={}
C.beK.prototype={
bN4(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.V()
v=A.K()
v.r=B.bA.j(0.75).gp(0)
v.c=2
v.d=B.bG
d.br(new A.t(n,w),new A.t(m,w),v)
u=(n+m)/2
t=new A.aI(q.r,B.ai,null,null,A.a([],x.v))
q=w+5.5
t.D(new A.b0(u,q))
s=w-1.1
r=w-8.8
t.D(new A.lD(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.D(new A.lD(u+4.95,r,u+9.9,s,u,q))
t.D(new A.bv())
q=A.K()
q.r=B.c.gp(0)
d.ae(new A.t(u,w),9,q)
q=A.K()
q.r=B.bA.gp(0)
d.aJ(t,q)},
bN2(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aV(a0,new C.daR())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.b3(a0,new C.daS(f))
t=new A.N(a0,new C.daT(f),A.S(a0).k("N<1,L>")).c0(0,new C.daU()).cL(0,1/0,B.vt)
w=f.a
d.br(f,new A.t(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.M)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.H()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.mM(m)
i=Math.min(10,l/2)
l=$.V()
h=A.a([],q)
g=new A.aI(l.r,B.ai,null,null,h)
h.push(new A.b0(w,v-i))
l=j*i
h.push(new A.c8(w,v,w+l,v))
h.push(new A.ap(n-l,v))
h.push(new A.c8(n,v,n,v+i))
h.push(new A.ap(n,o.b))
k=e.H()
n=g.gbB().a.snapshot()
r.drawPath((g.e=new A.cv(n)).a,k)
k.delete()}},
a5(d,e){var w,v,u,t,s,r,q,p,o
$.V()
w=A.K()
w.r=B.bP.j(0.75).gp(0)
w.c=2.2
w.b=B.ac
w.d=B.bG
w.e=B.dS
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.M)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bN2(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.M)(v),++s){q=v[s]
if(q.c)this.bN4(d,w,q.a,q.b)}},
av(d){return d.b!==this.b}}
C.bio.prototype={
gc81(){var w=this.c
if(B.a.i(w.y).length!==0)return D.dpT
switch(w.c.a){case 0:return D.cSv
case 1:return D.d2Y
case 2:return D.dk_}},
gc84(){var w=this.c,v=C.hnK(w.w),u=C.hnK(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc81(),p=t.c,o=L.bCp(p.f),n=t.gc84(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cH,10)],m),k=r?B.au:B.c,j=A.I(r?B.au:B.c,B.r,2)
if(o!=null)w=A.tm(B.A,s,B.cf,B.bW,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a9(B.a3,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hT(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a5),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a9(B.ay,B.aD,B.x,q,s,s),B.a5),s,56,s,s,B.G2,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.au:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fnW,s,s,s),B.f,s,s,new A.o(B.c9,s,w,j,s,s,B.n),s,s,s,s,D.bBx,s,s,s),s,s,s,-6,-4,s))}k=r?B.cp:B.c
j=A.m(8)
w=A.I(B.d.gI(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dz,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cp,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aQ:B.bl,s,s,s,s,s,s,s,s,7.5,s,s,B.a7,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aB(s,new A.a7(84,112,A.x(A.a([new A.an(B.a_,s,B.aa,B.f,l,s),B.av,A.p(s,A.x(p,B.m,s,B.e,B.P,0,B.p),B.f,s,D.b1z,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bBI,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bdO.prototype={
a5(d,e){var w,v,u,t,s,r,q
$.V()
w=A.K()
v=this.b
u=v?B.c:D.be4
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
av(d){return d.b!==this.b}}
C.bw2.prototype={
B(d){var w=this,v=null,u=new C.fcA(w),t=w.c,s=t?B.cp:B.c,r=A.m(12),q=u.$3(B.hH,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bz:B.fg,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.yM,"Zoom out",w.e)
return A.aF(!1,B.a1,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bz:B.fg,v,v,v,1,v,v,v,v,v,22),u.$3(B.amB,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.P,0,B.p),B.f,s,4,v,B.dp,v,v,v,B.ah)}}
C.blB.prototype={
B(d){var w=this,v=null,u=B.bP.j(0.15),t=A.I(B.bP,B.r,2),s=w.e,r=x.p
t=A.aB(v,A.p(v,A.x(A.a([A.X(s?M.a09:A4.NB,B.bP,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fka,v,v,v)],r),B.m,v,B.b8,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a5),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fi4,B.L,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.N(s,new C.eOj(w),A.S(s).k("N<1,v>")))
B.d.v(u,t)}return new A.a7(84,v,A.x(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.a_6.prototype={
U(){return new C.aC5()},
bs(){return this.Q.$0()},
ge_(){return this.w}}
C.aC5.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a2()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ax()
r.d!==$&&A.aP()
r.d=new A.as(new A.bb(t,B.b4,B.aO),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aP()
r.e=new A.as(new A.bb(t,B.b4,B.aO),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aP()
r.f=new A.as(new A.bb(t,B.b4,B.aO),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aP()
r.r=new A.as(new A.bb(t,B.b4,B.aO),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aP()
r.w=new A.as(new A.bb(t,B.b4,B.aO),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aP()
r.x=new A.as(new A.bb(t,B.b4,B.aO),s)
t=u?q:v.c
r.y=t==null?D.yn:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.i59(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
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
PJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$PJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hcS(p.y,p.w)
w=3
return A.b(A.lp(t.a.w,B.Iu),$async$PJ)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b_i(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$PJ)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hHy(p.y,p.w)
t.a.bs()
case 5:w=7
return A.b(At.GS(78,800),$async$PJ)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dqE(t,q))
case 1:return A.h(u,v)}})
return A.i($async$PJ,v)},
c83(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hU(B.o.u(1000*Date.now()),w,D.yn,null,null,null,"","","","","",1,!1,0)
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
s=v.aEd(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a3(k,!1).N(s)},
a9O(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a9O=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dqD(r),s,null,!0,!0,x.y),$async$a9O)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a3(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a9O,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tV(j),h=l.a.e,g=A.S(h).k("Z<1>"),f=A.C(new A.Z(h,new C.dqN(l),g),g.k("J.E"))
h=j?B.e1:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bA_,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.au,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hc(A.aM(!1,k,!0,new A.D(B.m1,A.X(B.ec,B.oV,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbI3(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jI:B.j4
t=L.bCp(l.as)
if(l.as==null)s=A.X(B.oZ,j?B.br:B.bl,k,k,k,40)
else s=k
s=A.at(A.aB(k,new A.an(B.a_,k,B.aa,B.t,A.a([A.h7(u,t,s,k,42),A.ao(0,A.h7(B.bP,k,D.bMB,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc80(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aC7(t,"Full name",B.mH,1,1,i,B.mf)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.R,new C.bim(i,u,new C.dqO(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.btt],q)
o=l.a.e
B.d.v(p,new A.N(o,new C.dqP(),A.S(o).k("N<1,eE<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.btv],q)
B.d.v(q,new A.N(f,new C.dqR(),A.S(f).k("N<1,eE<n?>>")))
o=A.x(A.a([t,B.am,new C.adb(i,r,"Who is their parent?",p,new C.dqS(l),k,o),B.aA,n,B.am,new C.adb(i,m,"Who is their spouse / partner?",q,new C.dqT(l),k,o)],v),B.aj,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aC7(q,"Birth date",D.alE,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aC7(m,"Birth place",B.a0o,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aC7(n,"Date of death (if deceased)",D.anS,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aC7(p,"Occupation",B.a1v,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.t,w,k),B.aA,s,B.bv,new C.adc(i,"Identity",u,k),B.ad,new C.adc(i,"Family links",o,k),B.ad,new C.adc(i,"Life details",A.x(A.a([q,B.R,m,B.R,n,B.R,p,B.R,C.aC7(r,"Notes",B.l7,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ad,new C.aC6(i,"Child order",l.cfE(l.at),new C.dqU(l),new C.dqV(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.h2j(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dqW(l):k
B.d.v(r,A.a([B.R,new C.aC6(i,"Visible in tree",u,w,new C.dqX(l),k)],v))}r.push(B.R)
w=j?B.jI:B.j4
u=A.m(14)
t=A.I(j?B.e6:B.bO,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.au,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iI(k,B.bP,k,B.af,k,new C.dqY(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,M.aiI,k,k,k))
r.push(B.bv)
w=j?B.aP:B.au
j=j?B.e6:B.bO
r.push(A.B(A.a([A.E(A.dR(B.nG,new C.dqQ(d),A.dg(k,k,k,k,k,k,k,k,k,w,k,k,B.cj,k,new A.b7(A.m(14),B.a0),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.ba,A.E(A.bH(D.eWE,l.gc82(),A.bp(B.aV,k,k,0,B.c,k,B.cj,k,new A.b7(A.m(14),B.a0),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.av)
return A.el(B.fV,k,B.af,h,new A.a7(420,k,A.cd(A.x(r,B.aj,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ag),k),D.ajx,k,B.aiW,new A.b7(g,B.a0),k,k)},
cfE(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.adc.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.br:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jI:B.j4,s=A.m(16)
return A.x(A.a([new A.D(D.ajY,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.e6:B.bO,B.r,1),s,w,w,B.n),w,w,w,w,B.bh,w,w,1/0)],x.p),B.E,w,B.e,B.j,0,B.p)}}
C.bin.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e1:B.c,r=A.m(12),q=A.I((t?B.e6:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aP:B.au,u,u,u,u,u,u,u,u,14,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aN(u,B.X,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bs(u,B.eE,u,B.vR,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.br:B.bl,u,u,u,u,u,u,u,u,u,u,u,B.cw,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bP,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a6,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.adb.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e1:B.c,s=A.m(12),r=A.I((u?B.e6:B.bO).j(0.85),B.r,1),q=A.X(B.rn,u?B.br:B.bl,v,v,v,v),p=A.l(v,v,u?B.aP:B.au,v,v,v,v,v,v,v,v,14,v,v,B.a7,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e1:B.c
return A.p(v,new A.DL(A.SN(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.br:B.bl,v,v,v,v,v,v,v,v,v,v,v,B.cw,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.l1,v,v,v)}}
C.bim.prototype={
B(d){var w=new C.dqZ(this)
return A.B(A.a([w.$3(D.rj,"Male",B.Oh),B.ab,w.$3(D.mG,"Female",B.O5),B.ab,w.$3(D.yn,"Other",B.nr)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aC6.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jI:B.j4,r=A.m(14),q=A.I(t?B.e6:B.bO,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.au,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.br:B.bl,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.j,0,B.p),1),new C.aIe(u,B.yM,w.f,v),B.bo,new C.aIe(u,B.hH,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ex,v,v,v)}}
C.aIe.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bP.j(0.12)
else w=s.c.a?B.e1:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bP
else t=(s.c.a?B.br:B.bl).j(0.4)
return A.aF(!1,B.a1,!0,v,A.aM(!1,u,!0,new A.a7(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ah)}}
C.add.prototype={
bR4(d){switch(d.a){case 0:return B.bP
case 1:return B.bA
case 2:return B.cU}},
bR5(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aXu(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
Ad(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e1:B.c
u=A.m(12)
t=A.I((w?B.e6:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bP,p,p,p,18),B.as],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.br:B.bl,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.av,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.au,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.E,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.ct,B.y4,p,p,1/0)},
ael(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.br:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jI:B.j4,s=A.m(16),r=A.I(v?B.e6:B.bO,B.r,1)
return A.x(A.a([new A.D(D.ajY,u,w),A.p(w,A.x(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.E,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hsC(r,q),o=q.c,n=t.bR4(o),m=L.bCp(q.f),l=t.e.a,k=l?B.e1:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.au,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.kE?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.br:B.bl,s,s,s,s,s,s,s,s,12,s,s,B.a7,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.at(A.p(s,A.h7(u,m,m==null?A.X(B.oZ,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a5),s,s,s,s,B.ez,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.r,1)
v=A.at(A.p(s,A.d(t.bR5(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mD,s,s,s),s,s,s)
u=x.p
i=A.a([t.Ad("Full name",i,B.mH)],u)
if(p>0)i.push(t.Ad("Child order","#"+p,B.Ob))
r=A.a([h,B.av,r,B.aL,l,B.R,v,B.bv,t.ael("Identity",i),B.ad,t.ael("Life details",A.a([t.Ad("Birth date",q.w,D.alE),t.Ad("Birth place",q.x,B.a0o),t.Ad("Date of death",q.y,D.anS),t.Ad("Occupation",q.z,B.a1v)],u)),B.ad,t.ael("Family links",A.a([t.Ad("1. Parent",t.aXu(q.d),B.Gg),t.Ad("2. Spouse",t.aXu(q.e),B.Gu)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ad,t.ael("Notes",A.a([t.Ad("Notes",q,B.l7)],u))],u))
r.push(B.bv)
r.push(A.bH(B.JW,new C.dr8(d),A.bp(B.aV,s,s,s,s,s,B.cj,s,new A.b7(A.m(14),B.a0),s,s,s)))
return A.eP(s,k,new A.cT(B.lT,A.cd(A.x(r,B.aj,s,B.e,B.P,0,B.p),B.t,s,B.y,s,B.vU,s,s,B.ag),s),s,s,s,B.FQ,B.d5,s,new A.b7(j,B.a0),s)}}
C.FU.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.br:B.bl
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.vX,A.hc(A.aF(!1,B.a1,!0,A.m(8),A.aM(!1,A.m(8),!0,new A.a7(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ah),u,v.c,u,u),u)}}
C.apL.prototype={
eX(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a7().ad())
w=u.c
v=A.S(w).k("N<1,a8<n,@>>")
w=A.C(new A.N(w,new C.cbp(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jc(w,new C.cbq(),t,x.fO))
return s}}
C.apM.prototype={
U(){return new C.aDE(A.a([],x.bF))},
gcZ(){return this.c}}
C.aDE.prototype={
a_(){this.a2()
this.JG()},
JG(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$JG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cbt(t.a.c),$async$JG)
case 3:r=e
w=4
return A.b(C.AV(t.a.c),$async$JG)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.r3(q,new C.dWB(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dWC(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$JG,v)},
ys(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.S(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.V,w,w,w,w,w,w,w,w,w,w))},
Kq(d,e){return this.cEN(d,e)},
cEN(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Kq=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dWG(q,e))
t=3
w=6
return A.b(d.$0(),$async$Kq)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dWH(q))
$.eU.ms()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Kq,v)},
XD(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pf(r,s.c,s.e),$async$XD)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Kq(new C.dWy(t),"Preparing download\u2026"),$async$XD)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XD,v)},
XH(d){return this.bP1(d)},
bP1(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pf(r,s.c,s.e),$async$XH)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Kq(new C.dWz(t,d),"Preparing file\u2026"),$async$XH)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XH,v)},
agd(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$agd=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xk.c9().Mb(B.Ra,B.u5,!0),$async$agd)
case 7:r=e
o=r
q=o==null?null:J.fr(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aH.gam(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jv(o,0,null)
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
case 6:u=A.GR()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agd,v)},
Yi(d){return this.bZs(d)},
bZs(d){var w=0,v=A.j(x.H),u=this
var $async$Yi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Kq(new C.dWA(u,d),"Restoring family trees\u2026"),$async$Yi)
case 2:return A.h(null,v)}})
return A.i($async$Yi,v)},
Yh(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Yh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.agd(),$async$Yh)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Yi(s),$async$Yh)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yh,v)},
a29(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a29=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pf(r,s.c,s.e),$async$a29)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Kq(new C.dWF(t),"Creating QR code\u2026"),$async$a29)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a29,v)},
a1L(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1L=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.D4()){t.ys("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a3(s,!1).cg(A.e_(new C.dWD(),!0,null,x.N)),$async$a1L)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Yi(r),$async$a1L)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1L,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.AW:B.ip,m=o?D.aha:B.aP,l=o?B.aJ:B.bO,k=o?B.aP:B.au,j=new C.daV(n,m,l,k,o?B.bL:B.bl)
l=A.aJ(p,p,p,p,A.X(B.eI,k,p,p,p,20),p,p,p,new C.dWJ(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eD(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.dat(!0,B.jB,B.aR,B.aR,q.r?p:q.gcvB(),j,s,"Show restore QR"),1),B.as],u))}s=q.e
r=q.r?p:q.gcrK()
t.push(A.E(C.dat(!s,B.jc,B.b5,B.by,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.dat(!1,B.hJ,B.aV,B.bP,q.r?p:q.gbOV(),j,"Photos & books included","Download all trees"),1),B.as],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dat(!1,Q.yR,B.aE,B.aT,q.r?p:q.gbZp(),j,s,"Upload backup file"),1))
l=A.a([new C.beI(v,l,p),B.kN,new C.act(j,"QR restore",p),B.R,t,B.d6,new C.act(j,"Backup files",p),B.R,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kN,new C.act(j,"One tree",p),B.R],u)
B.d.v(v,J.b6(q.d,new C.dWK(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cq(l,p,B.ZS,p,p,B.ag,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aV.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dq,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.p(p,A.B(A.a([M.aPR,B.ba,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.yb,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c5(w,n,new A.an(B.a_,p,B.aa,B.t,l,p),p,!1,!1,p,p)}}
C.daV.prototype={}
C.beI.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.km,28)],x.V)
t=A.ao(p,A.X(B.uq,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.a_,p,B.aa,B.t,A.a([t,new A.D(B.a9,A.B(A.a([A.p(p,D.bVu,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.ot,A.E(A.x(A.a([D.ft0,B.N,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.j,0,B.p),1)],q),B.E,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.c2r,B.n),p,p,p,p,p,p,p,p)}}
C.act.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.beG.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aR.j(0.4):m.c
k=A.I(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aR.j(0.1),B.cH,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.I(t.j(0.35),B.r,1)
return A.aF(!1,B.a1,!0,q,A.aM(!1,o,!0,A.eF(A.d6(new A.D(E.Zu,A.x(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.ri,q,q,q),B.ad,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bC,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cw,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ah)}}
C.beL.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.r,1),q=B.aV.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aF(!1,B.a1,!0,v,A.aM(!1,u,!0,A.eF(new A.D(B.eP,A.B(A.a([A.p(v,D.bUI,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.ri,v,v,v),B.ba,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.j,0,B.p),1),A.X(B.hJ,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ah)}}
C.a_r.prototype={
U(){return new C.aDD()},
gcZ(){return this.c}}
C.aDD.prototype={
a_(){this.a2()
this.a9l()},
a9l(){var w=0,v=A.j(x.H),u=this,t
var $async$a9l=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b1X(u.a.c,B.Dk),$async$a9l)
case 2:t=e
if(u.c!=null)u.m(new C.dWt(u,t))
return A.h(null,v)}})
return A.i($async$a9l,v)},
ahA(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ahA=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dWu(q))
t=4
p=A.hey(q.a.d,B.Dk)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.arY(n.e,m,l,B.Dk,p,n.f),$async$ahA)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dWv(q))
q.c.J(x.q).f.S(D.f4B)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.J(x.q).f.S(A.b3(null,null,null,null,null,B.t,null,A.d(B.a.ej(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dWw(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahA,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.jr:B.pT,n=p?B.im:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eD(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fJ6,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aV.j(0.35),B.r,1)
u=A.pW(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.N,u,B.bv,t,B.N,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.al,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b8,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ae:B.bs,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcrs()
if(u)u=B.Jm
else u=A.X(r.e===!0?B.hI:B.alD,q,q,q,q,q)
w=A.a([w,B.ad,v,B.ad,new A.a7(1/0,q,A.es(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ck,q,q,q),t,A.dg(q,q,q,q,q,q,q,q,q,B.aV,q,B.fX,q,q,q,new A.ay(B.aV.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.ic,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aB:B.al,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.R)
w.push(new A.a7(1/0,q,A.bH(B.A8,new C.dWx(d),A.bp(B.aV,q,q,q,q,B.fX,q,q,q,q,q,q)),q))
return A.c5(m,o,new A.D(B.a9,A.x(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.a_s.prototype={
U(){return new C.bjO(A.zs(B.xU,B.nM,B.uy))}}
C.bjO.prototype={
t(){this.d.t()
this.a1()},
B(d){var w=null
return A.c5(A.eD(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fB1,w,w,w,1,w,!0),B.w,A.zr(this.d,B.bW,new C.dWL(this,d)),w,!1,!1,w,w)}}
C.aYP.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.QF,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lI.prototype={}
C.a6k.prototype={
U(){return new C.bjv(null,null)}}
C.bjv.prototype={
a_(){var w=this,v=null
w.a2()
w.d=A.bl(v,B.q4,v,1,v,w)
w.e=A.bl(v,B.q_,v,1,v,w)
w.a.toString
w.d.cM(0)
w.e.cM(0)},
bv(d){var w,v,u=this
u.bG(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cM(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cM(0)},
t(){var w=this.d
w===$&&A.c()
w.t()
w=this.e
w===$&&A.c()
w.t()
this.bvz()},
B(d){var w,v,u=this,t=B.d.dM(D.a4f,new C.dIq(u),new C.dIr())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cx6(A.c9(new A.h5(A.a([w,v],x.dS)),new C.dIs(u,t),null),!0)}}
C.bju.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b0N(d,e)
break
case"house":p.m6(d,e,D.d7L)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdB()
$.V()
t=A.K()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ae(new A.t(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mb(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.AW(d,e,12)
p.y4(d,e,B.kY,5,14)
break
case"grocery":p.cgn(d,e)
break
case"calculator":p.cg4(d,e)
break
case"lumber":p.cgv(d,e)
break
case"kitchen":p.cgq(d,e)
break
case"landscape":p.m6(d,e,D.d8i)
s=new A.aI($.V().r,B.ai,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.D(new A.b0(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.D(new A.c8(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.D(new A.c8(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.D(new A.ap(t,w))
s.D(new A.ap(0,w))
s.D(new A.bv())
w=A.K()
w.r=B.eh.j(0.85).gp(0)
d.aJ(s,w)
p.AW(d,e,8)
p.y4(d,e,B.iN,4,18)
break
case"plumbing":p.cgE(d,e)
break
case"electrical":p.m6(d,e,D.djf)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.V()
u=A.K()
u.r=B.c.j(q*0.12).gp(0)
d.aU(new A.a5(0,0,0+e.a,0+e.b),u)
p.mb(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mb(d,e,B.lW.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.AW(d,e,10)
break
case"store":p.cgO(d,e)
break
case"paint_remodel":p.cgz(d,e)
break
case"roofing":p.cgG(d,e)
break
case"warehouse":p.cgV(d,e)
break
case"vehicles":p.cgT(d,e)
break
case"farm":p.cgh(d,e)
break
case"restaurant":p.cgF(d,e)
break
case"tools":p.cgR(d,e)
break
case"wallet":p.cgU(d,e)
break
case"concrete":p.cga(d,e)
break
case"blueprint":p.cg2(d,e)
break
default:p.b0N(d,e)}},
m6(d,e,f){var w,v=new A.a5(0,0,0+e.a,0+e.b)
$.V()
w=A.K()
w.sar(new A.a9(B.ay,B.aD,B.x,f,null,null).aA(0,v))
d.aU(v,w)},
mb(d,e,f,g,h){var w,v,u,t,s,r,q=new A.t(e.a/2,e.b/2),p=e.gdB()/2-h
$.V()
w=A.K()
w.b=B.ac
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bX(q,p)
r=w.H()
v.drawArc.apply(v,[A.bQ(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
y4(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdB()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.V()
q=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
AW(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.V()
o=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b0N(d,e){var w,v=this
v.m6(d,e,D.dhG)
w=v.c
v.mb(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mb(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bMZ(d,e,B.hQ,w)
v.y4(d,e,B.c.j(0.7),6,8)},
bMZ(d,e,f,g){var w,v,u,t,s,r,q,p
$.V()
w=A.K()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.bQ(new A.a5(16,q,t,q+3)),p)
p.delete()}},
cgn(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m6(d,e,D.co5)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.V()
l=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
l.r=D.d63[B.o.F(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.mb(d,e,B.c.j(0.35),w,16)
j.y4(d,e,B.iN,5,12)},
cg4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m6(d,e,D.coc)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdB()
$.V()
q=A.K()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ae(new A.t(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fS(g,g,g,g,g,B.a6,B.c5,g,B.dP,B.c4)
for(o=0;o<6;++o){n=v+o*0.9
r=D.d9W[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saX(0,new A.eH(r,g,g,B.cY,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eI()
p.a5(d,new A.t(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.coe[o]
l=B.ku.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saX(0,new A.eH(m,g,g,B.cY,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eI()
p.a5(d,new A.t(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.mb(d,e,B.c.j(0.35),w*1.5,14)
h.mb(d,e,B.eF.j(0.55),-v*3.141592653589793*2,8)
h.mb(d,e,B.xE.j(0.4),r*2.8,22)
h.y4(d,e,B.pJ,8,10)
h.AW(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.V()
r=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cgv(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m6(d,e,T.axe)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bz(new A.a5(20,q,u,q+10),B.hM)
$.V()
o=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
o.r=A.ar(B.h0,B.oM,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.eL(p),n)
n.delete()}m.mb(d,e,B.h0.j(0.35),w,15)
m.AW(d,e,8)},
cgq(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m6(d,e,D.d6x)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.F(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.F(r*0.13,0.7)
$.V()
l=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.H()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.mb(d,e,B.bM.j(0.4),-w*3.141592653589793*2.2,11)
j.y4(d,e,B.pF,4,14)},
cgE(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m6(d,e,D.cWn)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.V()
n=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
n.b=B.ac
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.y4(d,e,B.oT,6,12)
l.mb(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cgO(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m6(d,e,D.cBK)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bz(new A.a5(q,14,q+u,22),B.iC)
$.V()
p=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
p.r=A.ar(B.fe,B.bM,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.eL(q),o)
o.delete()}n.mb(d,e,B.c.j(0.3),w,16)
n.AW(d,e,8)
n.y4(d,e,B.vy,5,13)},
cgz(d,e){var w,v,u,t,s,r,q,p,o
this.m6(d,e,D.d1g)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bz(new A.a5(q,p,q+8,p+(18+r*22)),B.i2)
$.V()
q=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
q.r=[B.i7,B.dt,B.bM,B.eo][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.eL(p),o)
o.delete()}this.mb(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cgG(d,e){var w,v,u,t,s,r,q,p,o
this.m6(d,e,D.cZM)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.V()
p=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.y4(d,e,B.cr,7,11)},
cgV(d,e){var w,v,u,t,s,r,q,p,o,n
this.m6(d,e,D.cEs)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bz(new A.a5(p,o,p+(t-r*8),o+16),B.hM)
$.V()
p=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
p.r=A.ar(B.cr,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.eL(o),n)
n.delete()}this.mb(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cgT(d,e){var w,v,u,t,s,r,q,p,o
this.m6(d,e,D.dnf)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.bz(new A.a5(r,q,r+28,q+8),B.hM)
$.V()
p=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.eL(q),o)
o.delete()}this.AW(d,e,6)},
cgh(d,e){var w,v,u,t,s,r,q,p,o,n
this.m6(d,e,D.d58)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.V()
s=A.K()
s.r=B.lW.j(0.75).gp(0)
d.ae(new A.t(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
o.r=B.hc.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.mb(d,e,B.lW.j(0.35),w,14)},
cgF(d,e){var w,v,u,t,s,r,q,p,o=this
o.m6(d,e,D.d7A)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.bN(new A.t(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.V()
q=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.bQ(r),p)
p.delete()}o.y4(d,e,B.pF,5,16)
o.AW(d,e,7)},
cgR(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m6(d,e,D.dkL)
w=m.c
v=w*3.141592653589793
m.mb(d,e,B.oM.j(0.55),v*3,10)
m.mb(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.V()
o=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
o.r=B.oM.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cgU(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m6(d,e,D.dnU)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bz(new A.a5(p,o,p+36,o+22),B.iC)
$.V()
p=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
p.r=A.ar(B.iN,B.lW,q).gp(0)
n=p.H()
s.drawRRect(A.eL(o),n)
n.delete()}m.AW(d,e,9)
m.mb(d,e,B.c.j(0.4),w*2.2,12)},
cga(d,e){var w,v,u,t,s,r,q,p,o,n
this.m6(d,e,D.dcH)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bX(new A.t(v,u),34)
$.V()
s=A.K()
s.b=B.ac
s.c=5
s.r=B.c.j(0.45).gp(0)
d.e2(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.aq(B.U,B.S,B.Y,B.Z,B.W)
o.r=B.bO.j(0.85).gp(0)
n=o.H()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
cg2(d,e){var w,v,u,t,s,r,q,p
this.m6(d,e,D.d8B)
$.V()
w=A.K()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.H()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.H()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.F(t*0.85,1)
$.V()
u=A.K()
u.r=B.dt.j(0.45).gp(0)
d.aU(new A.a5(0,p,0+v,p+6),u)
this.mb(d,e,B.kY.j(0.45),-t*3.141592653589793*2,11)},
av(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.asF.prototype={
a_p(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_p=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aQ_(),$async$a_p)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a8y(s),$async$a_p)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a_p,v)},
age(d){return this.cjb(d)},
cjb(d){var w=0,v=A.j(x.H),u=this,t
var $async$age=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.idx(d),$async$age)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$age,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.jI:B.j4
w=x.p
v=A.a([C.aQn(!0,B.qO,1/0,B.q9,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c1(new A.bL(B.b3,t,t,new A.D(B.vO,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.ayb,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a9(B.b3,B.b6,B.x,u,t,t),B.n),B.bf))}v.push(A.ao(8,A.B(A.a([A.E(A.dq(D.bOn,D.fpj,new C.ciY(this,d),A.bp(B.aV,t,t,t,B.c,t,B.jM,t,t,t,t,B.cd)),1),B.ab,A.E(A.es(D.bWI,D.fE8,this.gca9(),A.dg(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jM,t,t,D.b05,t,t,t,B.cd)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fL(1.7777777777777777,A.aF(!1,B.a1,!0,B.qO,new A.an(B.a_,t,B.b1,B.t,v,t),B.aq,s,0,t,t,t,t,t,B.ah),t)}}
C.aLx.prototype={
aW(){this.b6()
this.b5()
this.dH()},
t(){var w=this,v=w.b2$
if(v!=null)v.a6(0,w.gdD())
w.b2$=null
w.a1()}}
C.aTm.prototype={}
C.aTl.prototype={}
C.aRk.prototype={}
C.Z4.prototype={
U(){return new C.ayT()}}
C.ayT.prototype={
a_(){var w,v,u=this
u.a2()
u.a.toString
w=new A.bb("",B.b4,B.aO)
v=$.ax()
u.d!==$&&A.aP()
u.d=new A.as(w,v)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.ax()
w.P$=0
this.a1()},
Kg(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.J(x.q).f.S(D.f55)
return}t=u.c
t.toString
v=u.e
A.a3(t,!1).N(new C.aTm(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.e1:B.c,k=A.m(20),j=A.p(n,D.bWn,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.au,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bC,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bl,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.ba,i,A.aJ(n,n,n,n,A.X(B.cx,m?B.br:B.bl,n,n,n,n),n,n,n,new C.d2d(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bl,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bl,n,n,n,n,n,n,n,n,11,n,n,B.cw,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.heO(new C.d2e(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.au,n,n,n,n,n,n,n,n,n,n,n,B.a7,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jI:B.j4
r=A.m(12)
q=A.m(12)
p=m?B.e6:B.bO
t=A.aN(n,B.X,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bs(n,new A.b5(4,r,B.dk),n,n,n,n,n,n,!0,new A.b5(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d2f(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a6,n,Y.Jt,n,n,n,n)
u=m?B.aP:B.au
m=m?B.e6:B.bO
return A.eP(n,l,new A.cT(B.lT,A.cd(A.x(A.a([j,B.aL,i,B.av,w,B.N,v,B.aL,t,B.bv,A.B(A.a([A.E(A.dR(B.di,new C.d2g(d),A.dg(n,n,n,n,n,n,n,n,n,u,n,n,B.cj,n,new A.b7(A.m(12),B.a0),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.as,A.E(A.bH(D.fEn,o.ga2v(),A.bp(B.aV,n,n,n,B.c,n,B.cj,n,new A.b7(A.m(12),B.a0),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.E,n,B.e,B.P,0,B.p),B.t,n,B.y,n,B.BB,n,n,B.ag),n),n,n,n,A3.BC,B.d5,n,new A.b7(k,B.a0),n)}}
C.Z3.prototype={
U(){return new C.ayS()}}
C.ayS.prototype={
a_(){this.a2()
var w=$.ax()
this.d!==$&&A.aP()
this.d=new A.as(B.at,w)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.ax()
w.P$=0
this.a1()},
Kg(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.J(x.q).f.S(D.f2J)
return}v=this.c
v.toString
A.a3(v,!1).N(new C.aTl(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.e1:B.c,n=A.m(20),m=A.p(q,D.bSW,B.f,q,q,new A.o(B.bP.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.au,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bC,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.br:B.bl,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.ba,l,A.aJ(q,q,q,q,A.X(B.cx,p?B.br:B.bl,q,q,q,q),q,q,q,new C.d29(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aV.j(0.25),B.r,1)
u=A.X(B.alp,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.as,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.au,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bB,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.au,q,q,q,q,q,q,q,q,q,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jI:B.j4
t=A.m(12)
s=A.m(12)
r=p?B.e6:B.bO
v=A.aN(q,B.X,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bs(q,new A.b5(4,t,B.dk),q,q,q,q,q,q,!0,new A.b5(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d2a(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a6,q,B.kO,q,q,q,q)
w=p?B.aP:B.au
p=p?B.e6:B.bO
return A.eP(q,o,new A.cT(B.lT,A.cd(A.x(A.a([m,B.aL,l,B.aA,v,B.bv,A.B(A.a([A.E(A.dR(B.di,new C.d2b(d),A.dg(q,q,q,q,q,q,q,q,q,w,q,q,B.cj,q,new A.b7(A.m(12),B.a0),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.as,A.E(A.bH(D.fLm,this.ga2v(),A.bp(B.bP,q,q,q,B.c,q,B.cj,q,new A.b7(A.m(12),B.a0),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.E,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.BB,q,q,B.ag),q),q,q,q,A3.BC,B.d5,q,new A.b7(n,B.a0),q)}}
C.YB.prototype={
U(){return new C.axz()}}
C.axz.prototype={
a_(){var w,v=this
v.a2()
w=$.ax()
v.d!==$&&A.aP()
v.d=new A.as(B.at,w)
v.e!==$&&A.aP()
v.e=new A.as(new A.bb("1",B.b4,B.aO),w)
v.f!==$&&A.aP()
v.f=new A.as(B.at,w)
v.r!==$&&A.aP()
v.r=new A.as(B.at,w)},
t(){var w,v=this,u=v.d
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
gJB(){var w,v=this.e
v===$&&A.c()
w=A.d7(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gajn(){var w=this.f
w===$&&A.c()
w=A.d7(B.a.i(w.a.a))
return w==null?0:w},
gb3C(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aOA(d){var w,v=B.k.E(this.gJB()+d,0.25,999999),u=B.k.je(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.O(v))
else{u=B.k.ac(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.saX(0,u)
this.m(new C.cAF())},
axZ(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jI:B.j4,s=A.m(14),r=A.m(14)
u=u?B.e6:B.bO
return A.bs(w,new A.b5(4,s,B.dk),w,B.bB,w,w,w,w,!0,new A.b5(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b5(4,A.m(14),B.abz),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
caa(d,e,f){return this.axZ(d,e,f,null)},
Kg(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gajn()<=0){s.c.J(x.q).f.S(D.f6Y)
return}r=s.c
r.toString
v=s.gJB()
u=s.gajn()
t=s.gb3C()
A.a3(r,!1).N(new C.aRk(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tV(n),l=n?B.e1:B.c,k=A.m(24),j=x.O,i=A.a([B.aV.j(0.22),B.bP.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bMi,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.r,1),h,o,new A.a9(B.a3,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bC,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.cw,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.ba,h,A.aJ(o,o,o,o,A.X(B.cx,n?B.br:B.bl,o,o,o,o),o,o,o,new C.cAL(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.X,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.axZ(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Og),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a6,o,Y.Jt,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jI:B.j4
t=A.m(14)
s=A.I(n?B.e6:B.bO,B.r,1)
r=A.aJ(o,o,o,o,A.X(B.yM,n?B.aP:B.au,o,o,o,20),o,o,o,new C.cAM(p),o,o,o,o,o,B.cd)
q=p.e
q===$&&A.c()
q=A.aN(o,B.X,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.bYf,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.e_,o,o,o,1,o,o,!1,"\u2022",o,new C.cAN(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.ao,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a7(52,o,q,o),A.aJ(o,o,o,o,A.X(B.hH,n?B.aP:B.au,o,o,o,20),o,o,o,new C.cAO(p),o,o,o,o,o,B.cd)],w),B.m,o,B.e,B.P,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.as,A.E(A.aN(o,B.X,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.axZ(m,"Amount","0.00",B.hU),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.e_,o,o,o,1,o,o,!1,"\u2022",o,new C.cAP(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a6,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.j,0,o,o)
t=x.gv
u=A.C(new A.N(D.d1L,new C.cAQ(p,m),t),t.k("ak.E"))
i=A.a([i,B.bv,v,B.aA,h,B.N,s,B.ad,A.bW(B.bD,u,B.bq,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.R,A.aN(o,B.X,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.caa(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cAR(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a6,o,B.kO,o,o,o,o)],w))}i.push(B.aL)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bP.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aV.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bl,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJB()===B.k.je(p.gJB())?B.k.O(p.gJB()):p.gJB()
s=p.gb3C()
r=A.AX(p.gajn())
i.push(A.p(o,A.B(A.a([A.E(A.x(A.a([u,B.av,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.br:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.j,0,B.p),1),C.bDc(p.gJB()*p.gajn(),B.b_,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a9(B.a3,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.ja,o,o,o))
i.push(B.bv)
j=A.m(14)
h=n?B.e6:B.bO
h=A.dg(o,o,o,o,o,o,o,o,o,o,o,o,B.cj,o,new A.b7(j,B.a0),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dR(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cAS(d),h),1),B.as,A.E(A.dq(D.aoT,D.fHi,p.ga2v(),A.bp(B.aV,o,o,0,B.c,o,B.cj,o,new A.b7(A.m(14),B.a0),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eP(o,l,new A.cT(A2.abY,A.cd(A.x(i,B.aj,o,B.e,B.P,0,B.p),B.t,o,B.y,o,Ag.rg,o,o,B.ag),o),o,o,o,B.N1,B.d5,o,new A.b7(k,B.a0),o)}}
C.a1c.prototype={
U(){return new C.bvT()}}
C.bvT.prototype={
a_(){var w,v,u=this
u.a2()
w=u.a.e
v=$.ax()
u.d!==$&&A.aP()
u.d=new A.as(new A.bb(w,B.b4,B.aO),v)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.ax()
w.P$=0
this.a1()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.e1:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.au,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.au,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jI:B.j4
v=A.aN(s,B.X,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bs(s,new A.b5(4,A.m(12),B.dk),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fbV(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a6,s,B.ao,s,s,s,s)
u=A.E(A.dR(B.di,new C.fbW(d),s),1)
r=A.bp(B.bP,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eP(s,q,new A.D(B.BB,A.x(A.a([o,B.aA,v,B.aL,A.B(A.a([u,B.as,A.E(A.bH(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.fbX(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.P,0,B.p),s),s,s,s,s,B.d5,s,new A.b7(p,B.a0),s)}}
C.aby.prototype={
a4(){return"WorksheetFrameStyle."+this.b}}
C.FK.prototype={
U(){return new C.bvR(null,null)}}
C.bvR.prototype={
a_(){var w,v=this
v.a2()
w=A.bl(null,D.bu3,null,1,null,v)
w.cM(0)
v.d!==$&&A.aP()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bxO()},
gbzi(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bP,B.b_],x.O)
case 2:return A.a([B.bu,B.aV,B.b_],x.O)
case 3:return A.a([B.aR,B.c9,B.k7],x.O)
case 4:return A.a([B.iK,B.bP,B.ff],x.O)
case 0:return A.a([B.aV,B.bP,B.b_],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.eG(A.c9(v,new C.fbT(this,new C.tV(w.ax.a===B.I)),null),null)}}
C.axs.prototype={
U(){return new C.bvS(null,null)}}
C.bvS.prototype={
a_(){var w,v=this
v.a2()
w=A.bl(null,B.ng,null,1,null,v)
w.cM(0)
v.d!==$&&A.aP()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bxP()},
B(d){var w=this.d
w===$&&A.c()
return A.c9(w,new C.fbU(this),null)}}
C.bvQ.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bz(new A.a5(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aQ(w,w))
u=new A.aI($.V().r,B.ai,null,null,A.a([],x.v))
u.D(new A.iN(v))
w=A.K()
w.b=B.ac
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aD(v,w)
w=A.K()
w.b=B.ac
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aJ(u,w)
w=A.xi(u)
t=A.a([],x.W)
w=new A.tk(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.jt(y.B));--r
q=new A.Bo(w,r)
w.ii()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aS1(d,q,r,o,0,0.2,4.2,0.92)
p.aS1(d,q,r,s,0.52,0.11,3.2,0.58)}},
aS1(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hAG(e.a.a,e,t,t+f*i,!0),r=A.bBz(s.gbB().a.getBounds())
$.V()
w=A.K()
w.b=B.ac
w.c=j
w.d=B.bG
w.f=!0
v=this.f
u=k*this.e
w.sar(new A.a9(B.a3,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Hv,null).aA(0,r))
d.aJ(s,w)},
av(d){return d.b!==this.b||d.d!==this.d}}
C.aNz.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.aNA.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.tV.prototype={}
C.asE.prototype={
U(){return new C.aF5()},
ge_(){return this.c}}
C.aF5.prototype={
a_(){var w=this
w.a2()
w.d=w.a.d
w.ah3()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Lq(w,v)
this.a1()},
ah3(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ah3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bBG(t.c,t.d.a),$async$ah3)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eLt(u,s))
return A.h(null,v)}})
return A.i($async$ah3,v)},
Q8(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Q8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eLk(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Lq(t,s),$async$Q8)
case 2:if(u.c!=null)u.m(new C.eLl(u))
return A.h(null,v)}})
return A.i($async$Q8,v)},
QF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.eLr(t,new C.tV(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$QF)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a8y(q),$async$QF)
case 6:case 5:t.m(new C.eLs(t,r))
w=7
return A.b(t.Q8(),$async$QF)
case 7:case 1:return A.h(u,v)}})
return A.i($async$QF,v)},
VR(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.idi(r),$async$VR)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eLf(t,new C.r8(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Q8(),$async$VR)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VR,v)},
cfe(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hsy(t,new C.eLj(u),w,v)},
ab7(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bI(new A.ay(v,2.5,B.r,-1),B.a0,B.a0,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b_S,w,w,B.n),w,22,w,w,w,w,w,22)},
aab(d){return this.bLd(d)},
bLd(d){var w=0,v=A.j(x.H),u=this
var $async$aab=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eLi(u,d))
w=2
return A.b(u.Q8(),$async$aab)
case 2:return A.h(null,v)}})
return A.i($async$aab,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.bZ:B.ip,d=A.m(8),a0=A.X(W.a06,f?B.br:B.bl,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.D(B.FX,A.B(A.a([a0,B.bo,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.br:B.bl,g,g,g,g,g,g,g,g,g,g,g,B.a7,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.P,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eLu(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.a_,g,B.b1,B.t,A.a([A.bx(A.m(22),C.aQn(!0,A.m(22),1/0,B.q9,g,d,1/0),B.aq),A.ao(10,A.dq(D.bQX,D.fJF,h.gb1y(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.hf,g,new A.b7(A.m(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eX,22),new A.ac(-4,B.G,B.bP.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bx(s,new A.an(B.a_,g,B.b1,B.t,A.a([C.aQn(!0,A.m(16),1/0,B.NM,g,r.c,1/0),A.c1(g,new A.o(g,g,g,g,g,new A.a9(B.b3,B.b6,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bf),A.ao(g,h.ab7(!0),g,g,8,g,8,g),A.ao(g,A.cxR(h.ab7(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cxR(h.ab7(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cxR(h.ab7(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dq(D.bMT,D.fD5,h.gb1y(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.hf,g,new A.b7(A.m(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bZX,B.n),g,g,g,g,B.m1,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.au,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.baz,B.nV,B.h2],u):A.a([B.b_,B.aV,B.bP],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eX,24)],t)
r=A.m(22)
p=A.ao(g,A.X(B.jO,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h3,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aA,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bDc(h.d.gx4(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.N,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cw,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.hn.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aR.j(0.28),B.cH,14)],t)
j=B.aR.j(0.22)
i=A.m(10)
u=A.p(g,A.bx(r,new A.an(B.a_,g,B.aa,B.t,A.a([p,new A.D(D.byL,A.B(A.a([o,B.as,A.aF(!1,B.a1,!0,g,A.aM(!1,n,!0,A.eF(new A.D(A6.y6,A.x(A.a([A.p(g,D.aou,B.f,g,g,new A.o(j,g,A.I(B.aR.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cm,g,g,g),B.fM,D.fs4],a1),B.m,g,B.e,B.P,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcfd(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ah)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a9(B.ay,B.aD,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fL(1.7777777777777777,d,g),B.aL,w,B.N,u,B.bv,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.au,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b0,A.dq(Aq.a1S,D.fpY,h.gbzL(),A.bp(B.aV,g,g,g,B.c,g,B.iQ,g,new A.b7(A.m(12),B.a0),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ad],a1)
w=h.d.d
if(w.length===0){w=f?B.e1:B.c
v=A.m(14)
u=A.I(f?B.e6:B.bO,B.r,1)
t=A.X(B.a0r,f?B.br:B.bl,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.au,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.R,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.br:B.bl,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.rh,g,g,1/0))}else B.d.v(d,new A.N(w,new C.eLv(h,new C.tV(f)),A.S(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.Bq,A.at(A.mQ(g,f?B.br:B.bl,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c5(g,e,A.bm(!0,A.x(A.a([new A.D(B.Bv,a0,g),A.E(A.cd(A.x(d,B.E,g,B.e,B.j,0,B.p),B.t,g,B.y,g,E.yd,g,g,B.ag),1)],a1),B.E,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bDq(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e1:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cH,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.b2F,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.X(s?B.hW:B.hg,B.b_,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bJ
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aP:B.au,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcV2()
v=A.AX(d.d)
B.d.v(t,A.a([B.av,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.br:B.bl,u,u,u,u,u,u,u,u,12,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.b8,B.P,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bP.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bDc(d.c*d.d,B.b_,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a9(B.a3,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.hf,u,u,u)
w=x.p
return A.p(u,A.bx(n,new A.Ea(A.B(A.a([m,A.E(new A.D(B.aiB,A.B(A.a([l,B.ba,t,B.ab,k,A.aJ(u,u,u,u,A.X(B.cx,(r?B.br:B.bl).j(0.75),u,u,u,20),u,u,u,new C.eLg(this,d),u,u,u,u,u,B.cd)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.aj,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.b1v,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d1,u,u,u,u)}}
C.ady.prototype={
Eu(d){return this.bMB(d)},
bMB(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Eu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pf(d,o,!1),$async$Eu)
case 3:if(!f||d.e==null){w=1
break}A.a3(d,!1).N(null)
w=4
return A.b(A.bO(Af.Bo,null,x.H),$async$Eu)
case 4:s=t.d
w=5
return A.b(C.fJY(!0,o,s),$async$Eu)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.GF(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$Eu)
case 6:p=f
w=7
return A.b(A.pe(o,!1),$async$Eu)
case 7:if(d.e==null){w=1
break}d.J(x.q).f.S(A.b3(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Eu,v)},
a_r(d){return this.cvC(d)},
cvC(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_r=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pf(d,s,!1),$async$a_r)
case 3:if(!f||d.e==null){w=1
break}A.a3(d,!1).N(null)
A.hE(d,new C.asy(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pe(s,!1),$async$a_r)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_r,v)},
Q9(d){return this.crF(d)},
crF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Q9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a3(d,!1).N(null)
w=3
return A.b(A.hE(d,D.aHG,!0,"NgmyWorksheetProjectScan",x.N),$async$Q9)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bDd(s),$async$Q9)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.J(x.q).f.S(D.f65)
w=1
break}q=C.h4E(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dT(p,x.H),$async$Q9)
case 5:if(d.e==null){w=1
break}d.J(x.q).f.S(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Q9,v)},
a_s(d){return this.cDG(d)},
cDG(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_s=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a3(d,!1).N(null)
w=3
return A.b(C.bCK(),$async$a_s)
case 3:s=f
if(s==null){w=1
break}r=C.h4E(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dT(q,x.H),$async$a_s)
case 4:if(d.e==null){w=1
break}d.J(x.q).f.S(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_s,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tV(u),s=w.d.d.length,r=u?B.e1:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.km,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.vS,A.p(v,A.x(A.a([w.cub(d,t,s),new A.D(D.by9,A.x(A.a([w.b4y(t,"QR restore"),B.R,A.B(A.a([w.b_v(t,!0,B.jB,B.aR,B.aR,new C.eLx(w,d),"Show to scan","QR code"),B.as,w.ay_(t,B.jc,B.b5,B.by,new C.eLy(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d6,w.b4y(t,"Backup files"),B.R,A.B(A.a([w.ay_(t,B.hJ,B.aV,B.bP,new C.eLz(w,d),"Full copy","Backup file"),B.as,w.ay_(t,Q.yR,B.aE,B.aT,new C.eLA(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.E,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.P,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
cub(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f4,B.cN,B.fE],k):A.a([B.b_,B.aV,B.bP],k)
w=A.ao(l,A.X(B.uq,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kD,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cH,12)],x.V)
r=this.d
s=A.p(l,C.aQn(!0,A.m(13),64,D.bIf,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aSq,l,l,l)
r=C.bDc(r.gx4(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.a_,l,B.aa,B.t,A.a([w,new A.D(D.byx,A.x(A.a([v,A.B(A.a([s,B.es,A.E(A.x(A.a([u,B.av,t,B.N,A.B(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fJ,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.E,l,B.e,B.j,0,B.p),1),A.aJ(l,l,l,l,A.X(B.cx,B.c.j(0.85),l,l,l,l),l,l,l,new C.eLw(d),l,l,l,A.nG(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aPG,l,l,l,l),l,l)],m),B.E,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.ay,B.aD,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b4y(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.br:B.bl,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
b_v(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.aha:B.aP
if(e)w=B.aR.j(o?0.45:0.35)
else{w=o?B.e6:B.bO
w=w.j(o?0.8:1)}w=A.I(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aR.j(0.12),B.cH,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.r,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.ri,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.au,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aF(!1,B.a1,!0,r,A.aM(!1,q,!0,A.eF(new A.D(E.Zu,A.x(A.a([t,B.ad,u,B.bC,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.br:B.bl,r,r,r,r,r,r,r,r,11,r,r,B.cw,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah),1)},
ay_(d,e,f,g,h,i,j){return this.b_v(d,!1,e,f,g,h,i,j)}}
C.asy.prototype={
U(){return new C.bl6()}}
C.bl6.prototype={
a_(){this.a2()
this.aeZ()},
aeZ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$aeZ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bDe(p.c,p.d),$async$aeZ)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eLa(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eLb(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aeZ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.AW:B.ip,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aJ(h,h,h,h,A.X(B.eI,g?B.ae:B.al,h,h,h,18),h,h,h,new C.eLc(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zX],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.f4,B.cN,B.fE],s):A.a([B.b_,B.aV,B.bP],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eX,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.de,B.L,h,h)
p=C.bDc(p.gx4(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.am,A.B(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fJ,h,h,h)],u),B.m,h,B.b8,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a9(B.ay,B.aD,B.x,s,h,h),B.n),h,h,h,h,E.ZR,h,h,1/0)
t=g?D.bkZ:B.c
q=A.m(24)
p=A.I(w?B.aR.j(0.4):B.aV.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dq,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.U4,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.egX)
else{m=A.m(20)
l=A.I(B.aM,B.r,1)
o.push(A.p(h,A.pW(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aL)
n=w?B.aR:B.aV
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aR:B.aV).j(0.35),B.r,1)
k=w?B.O1:B.Ov
k=A.X(k,w?B.aR:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.as,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ae:B.al,h,h,h,h,h,h,h,h,12,h,h,B.a7,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iQ,h,h,h))
return A.c5(h,f,A.bm(!0,A.x(A.a([new A.D(Ac.Nd,e,h),A.E(A.cd(A.x(A.a([s,B.aL,A.p(h,A.x(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.u3,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.t,h,B.y,h,E.ajJ,h,h,B.ag),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.asD.prototype={
U(){return new C.aF4(A.zs(B.Mt,B.nM,B.uy))}}
C.aF4.prototype={
t(){this.d.t()
this.a1()},
aMB(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iR(w,d)},
cb2(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
s=C.ibb(t)
if(s!=null){this.aMB(s)
return}r=C.hjn(t)
if(r!=null)q=A.cU(r,p,0)
else q=!1
if(q){this.aMB(B.a.i(B.a.b4(r,B.a.cD(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eD(A.a([A.aJ(t,t,t,t,A.X(u.f?B.uf:A8.O7,t,t,t,t,t),t,t,t,new C.eLe(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.AW,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fD_,t,t,t,1,t,!0),q=A.zr(u.d,B.bW,u.gcb1()),p=A.m(28)
p=A.at(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.r,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c5(r,B.w,new A.an(B.a_,t,B.b1,B.t,A.a([q,p,A.ao(32,A.p(t,D.fBM,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.ja,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aJU.prototype={
a4(){return"_WorksheetTab."+this.b}}
C.Oh.prototype={
U(){return new C.aF6(D.aaR,A.a([],x.D))},
bs(){return this.r.$0()},
ge_(){return this.c}}
C.aF6.prototype={
gcBy(){return J.bEm(this.e,0,new C.eLX())},
a_(){this.a2()
$.aW.bZ$.push(this)
this.vO()},
t(){$.aW.hN(this)
this.a1()},
j9(d){if(d===B.fC)this.vO()},
vO(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vO=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.D3(q.a.c).da(0,B.kc),$async$vO)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eLT(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eLU(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vO,v)},
I1(d){return this.bJl(d)},
bJk(){return this.I1(null)},
bJl(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$I1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.idk(l,d),$async$I1)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lq(l,r,q,D.dcU,new A.U(Date.now(),0,!1))
w=4
return A.b(C.Lq(t.a.c,p),$async$I1)
case 4:o=f
w=5
return A.b(t.vO(),$async$I1)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.J(x.q).f.S(D.f3c)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.J(q).f.S(D.f5_)
else n.J(q).f.S(A.b3(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))
t.Ey(m)
case 1:return A.h(u,v)}})
return A.i($async$I1,v)},
Ey(d){return this.cf_(d)},
cf_(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Ey=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hE(s,new C.asE(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$Ey)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Lq(u.a.c,t),$async$Ey)
case 5:case 4:w=6
return A.b(u.vO(),$async$Ey)
case 6:return A.h(null,v)}})
return A.i($async$Ey,v)},
vA(d){return this.bZu(d)},
bZu(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bCK(),$async$vA)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hE(r,D.aHG,!0,"NgmyWorksheetProjectScan",x.N),$async$vA)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bDd(q),$async$vA)
case 14:w=12
break
case 13:f=null
case 12:s=f
w=8
break
case 9:s=null
case 8:case 4:if(s==null){r=t.c
if(r==null){w=1
break}r=r.J(x.q).f
r.S(A.b3(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.h4E(s)
w=15
return A.b(C.Lq(t.a.c,p),$async$vA)
case 15:o=f
w=16
return A.b(t.vO(),$async$vA)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.J(x.q).f.S(D.f54)
w=1
break}r.J(x.q).f.S(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))
t.Ey(p)
case 1:return A.h(u,v)}})
return A.i($async$vA,v)},
NU(d){return this.bI0(d)},
bI0(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$NU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cf(null,null,!0,null,new C.eLE(d),s,null,!0,!0,x.y),$async$NU)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oN(t.a.c,A.a([],x.D)),$async$NU)
case 6:w=7
return A.b(t.vO(),$async$NU)
case 7:s=t.c
if(s==null){w=1
break}s.J(x.q).f.S(D.f3h)
case 4:case 1:return A.h(u,v)}})
return A.i($async$NU,v)},
cfc(d){var w=this.c
w.toString
A.bT(B.K,null,new C.eLN(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b59(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jI
else w=B.c
v=A.m(16)
u=A.I(p?B.e6:B.bO,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.au,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a1,!0,r,A.aM(!1,q,!0,A.p(r,A.x(A.a([s,B.ad,t,B.bC,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.br:B.bl,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vR,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah)},
a_W(d,e){return this.cf0(d,e)},
cf0(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_W=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(B.K,null,new C.eLI(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a_W)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hsy(r,new C.eLJ(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.NW(d,e),$async$a_W)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_W,v)},
b29(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.aw
else t=h.a?B.aP:B.au
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.br:B.bl,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,u,A.aM(!1,u,!0,new A.D(B.yb,A.B(A.a([s,B.ba,t,A.X(B.eD,w?B.br:B.bl,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah)},
clU(d,e,f,g,h,i){return this.b29(!1,d,e,f,g,h,i)},
NW(d,e){return this.bIa(d,e)},
bIa(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lb(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$NW)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bBu(t.a.c,d.a),$async$NW)
case 6:w=7
return A.b(t.vO(),$async$NW)
case 7:r=t.c
if(r==null){w=1
break}r.J(x.q).f.S(A.b3(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$NW,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tV(o),m=o?B.bZ:B.ip
if(q.f)o=D.b8o
else{w=q.bCy(n)
v=q.bYA(n)
u=q.gbzF()
if(o)t=B.jI
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ad,v,B.aL,new C.FK(A.p(p,A.B(A.a([q.aBs(P.NL,"Projects",n,D.aaR),q.aBs(B.w4,"Cashier",n,D.aXH),q.aBs(B.Gg,"Family Tree",n,D.hjI)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ez,0.95,u,p),B.bv],r)
w=q.d
if(w===D.aaR){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.au,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b0,new C.axs(q.gaQO(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aA,q.clW(n)],r))}else{o=q.a
if(w===D.aXH)u.push(new C.aoG(o.c,n,p))
else{w=q.r
u.push(new C.apO(o.c,o.d,o.e,o.f,new C.eM_(q),new C.eM0(q),new A.cs(w,x.b4)))}}o=A.cd(A.x(u,B.E,p,B.e,B.j,0,B.p),B.t,p,B.y,p,Ai.N6,p,p,B.ag)}return A.c5(p,m,A.bm(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bCy(d){var w=null,v=A.m(8),u=d.a,t=A.X(W.a06,u?B.br:B.bl,w,w,w,16)
return A.aM(!1,v,!0,new A.D(B.l0,A.B(A.a([t,B.bo,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.br:B.bl,w,w,w,w,w,w,w,w,14,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eLB(this),w,w,w,w,w,w,w)},
gbzF(){switch(this.d.a){case 0:return D.aa4
case 1:return D.h97
case 2:return D.aa5}},
bYA(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cv,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bSM,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.ba,D.bCZ,A.aF(!1,B.a1,!0,w,A.aM(!1,A.m(12),!0,A.p(w,D.bQe,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eLF(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah)],t),B.E,w,B.e,B.j,0,w,w),r=B.b_.j(0.55),q=A.m(12)
return new C.FK(A.p(w,A.x(A.a([new A.D(E.ZA,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.av,A.d(A.AX(this.gcBy()),w,w,w,w,w,w,D.fmf,w,w,w)],t),B.E,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.tZ,B.ja,w,w,1/0)],t),B.E,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.h96,w)},
aBs(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aV:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.r,2):A.I(B.K,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cH,14)],x.V):u
if(t)w=B.c
else w=f.a?B.br:B.bl
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.br:B.bl
return A.E(A.aF(!1,B.a1,!0,u,A.aM(!1,s,!0,A.d9(u,A.B(A.a([w,B.ej,new A.ds(1,B.cn,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b8,B.j,0,u,u),u,u,B.cu,new A.o(r,u,p,q,o,u,B.n),B.iO,u,u,u,B.FY,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eLW(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah),1)},
clW(d){var w,v,u,t,s,r,q=this,p=null
if(J.cp(q.e)){w=d.a
v=w?B.e1:B.c
u=A.m(15)
t=A.p(p,D.bQk,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eX,28)],x.V),D.c1r,B.a5),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.au,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.FK(A.p(p,A.x(A.a([t,B.d6,s,B.N,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.br:B.bl,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dW,A.B(A.a([A.E(q.aSm(B.jc,"Scan QR",new C.eLQ(q),d),1),B.as,A.E(q.aSm(Q.yR,"Upload file",new C.eLR(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aA,A.bH(D.fNi,q.gaQO(),A.bp(B.aV,p,p,p,B.c,B.fX,p,p,new A.b7(A.m(12),B.a0),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bzC,1.05,D.aa4,p)}w=J.b6(q.e,new C.eLS(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.FK(A.x(w,B.m,p,B.e,B.j,0,B.p),16,B.bT,1,D.aa4,p)},
aSm(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aV.j(0.45),B.r,1)
return A.aF(!1,B.a1,!0,u,A.aM(!1,t,!0,A.p(w,A.x(A.a([A.X(d,B.b_,w,w,w,26),B.N,A.d(e,w,w,w,w,w,w,D.fkB,B.L,w,w)],x.p),B.m,w,B.e,B.P,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ait,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ah)},
clV(d,e){var w,v,u=null,t=e.a,s=t?B.e1:B.c,r=A.m(14),q=A.I(t?B.e6:B.bO,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.eq,10)],x.V),o=A.m(14),n=t?B.br:B.bl
n=A.bx(B.W0,new A.fL(1.7777777777777777,C.aQn(!0,B.fD,1/0,P.NL,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.au,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.av,A.d(""+d.d.length+" budget items \xb7 "+A.AX(d.gx4()),u,u,u,u,u,u,D.fiF,u,u,u)],w),B.E,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aF(!1,B.a1,!0,u,A.aM(!1,o,!0,A.x(A.a([n,new A.D(B.bB,A.B(A.a([v,A.aJ(u,u,u,u,A.X(Aj.a17,t?B.br:B.bl,u,u,u,u),u,u,u,new C.eLO(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.E,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eLP(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.ea,u,u,u,1/0)}}
C.bxz.prototype={}
C.r8.prototype={
ag(){var w=this,v=w.c,u=w.d
return A.G(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcV2(){var w,v,u,t,s=this.c
if(s===B.k.je(s))w=B.o.u(B.k.O(s))
else{v=B.k.ac(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lq.prototype={
gx4(){return B.d.cL(this.d,0,new C.cA5())},
ag(){var w=this,v=w.d,u=A.S(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.cA4(),u),u.k("ak.E"))
return A.G(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ad()],x.N,x.z)},
bcm(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lq(w.a,w.b,v,u,w.e)},
bc3(d){return this.bcm(d,null)},
ST(d){return this.bcm(null,d)}}
C.HQ.prototype={
a4(){return"FamilyGender."+this.b}}
C.hU.prototype={
ag(){var w=this
return A.G(["id",w.a,"name",w.b,"gender",C.hog(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aEd(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hU(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.akW.prototype={
a4(){return"FamilyTreeAccessRole."+this.b}}
C.kJ.prototype={
gaoX(){var w=this.f
return new A.Z(w,new C.bPu(),A.S(w).k("Z<1>")).gL(0)},
ag(){var w=this,v=w.f,u=A.S(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.bPt(),u),u.k("ak.E"))
return A.G(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ad(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.i3z(w.y),"games",w.z],x.N,x.z)},
ws(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kJ(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bcl(d,e){var w=null
return this.ws(w,w,w,d,e,w,w,w,w)},
cKE(d,e,f,g,h,i,j){return this.ws(d,e,null,f,g,h,i,j,null)},
aEi(d,e){var w=null
return this.ws(w,w,w,w,d,w,w,e,w)},
cKG(d,e,f,g,h,i,j,k){return this.ws(d,e,null,f,g,h,i,j,k)},
cJ8(d){var w=null
return this.ws(w,w,w,w,w,w,w,d,w)},
cJw(d){var w=null
return this.ws(w,w,w,w,w,w,w,w,d)},
bbY(d){var w=null
return this.ws(w,w,d,w,w,w,w,w,w)},
aE4(d){var w=null
return this.ws(w,w,w,w,w,d,w,w,w)},
cKa(d,e,f){var w=null
return this.ws(w,d,w,w,e,w,w,f,w)},
cIW(d){var w=null
return this.ws(w,w,w,d,w,w,w,w,w)},
cJJ(d,e){var w=null
return this.ws(d,w,w,w,w,w,e,w,w)}}
C.cA6.prototype={
a4(){return"WrapAlignment."+this.b}}
C.cA7.prototype={
a4(){return"WrapCrossAlignment."+this.b}}
C.aHb.prototype={}
C.b8U.prototype={
by(d){this.a=d.a
this.b=d.b},
cW(d){var w=new C.b8U()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b8T.prototype={
gwk(){return!0},
gG5(){return this.z.b<this.b.length},
aU_(d){switch(0){case 0:return d.a.c}},
aTH(d){switch(0){case 0:return d.a.d}},
bRZ(d,e){switch(0){case 0:return new A.hO(d,e)}},
bRm(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h5(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iG(0,0,B.o.E(0,b5.a,b5.b),B.o.E(0,b5.c,b5.d))
return}w=A.HA(b4)
switch(0){case 0:v=b5.b
u=new A.kG(0,v,0,1/0)
t=w===B.TY
break}s=A.a([],x.gZ)
r=A.T(x.gF,x.S)
for(b3=b1.z,q=B.d.fP(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.M)(q),++h){g=q[h]
g.h5(b4,u,!0)
f=b1.aU_(g)
f.toString
e=b1.aTH(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aHb(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aHb(k,j,i))}d=s.length
switch(0){case 0:q=b5.cw(new A.hO(m,l))
a0=q.a
a1=q.b
b1.a=new A.iG(0,0,a0,a1)
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
for(q=B.d.fP(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.M)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aU_(g)
e=b1.aTH(g)
e.toString
a9=b1.bRm(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bRZ(a6,a3+a9)
b0=g.a
g.a=new A.iG(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h1(d){var w,v,u,t,s,r=this
r.lm(d)
w=d.b
w.ic()
v=A.dk()
u=r.a
v.ec(u.a,u.b,0,1)
w.p6(0,v)
for(u=r.z,u=B.d.ds(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.M)(u),++s)u[s].h1(d)
w.nm(0)},
GB(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
ic(){return this.z}}
C.bvU.prototype={}
var z=a.updateTypes(["aA<~>()","R(hU)","R(kJ)","~()","R(nj)","a8<n,@>(kJ)","H(kJ,kJ)","H(hU,hU)","n(hU)","kJ(a8<@,@>)","R(lq)","nj(a8<@,@>)","a8<n,@>(nj)","R(un)","un()","H(hU)","ai<hU>()","R(z9)","a_6(Y)","n?(hU)","eE<n?>(hU)","aA<~>(lq)","R(r8)","a8<n,@>(hU)","hU(a8<@,@>)","H(lq,lq)","R(aeQ)","~(b9)","v(on)","H(H,a90)","R(qt<H>)","~(qt<H>)","SX(Y)","R(M4)","R(um)","~(hU)","n(n)","Vj(Y)","SW(Y)","add(Y)","Z2(Y)","hU(hU)","cN(by<n,FY>)","cN(Kf)","Zw(Y)","H?(hU)","hU()","R(Kf)","D(hU)","~(HQ)","Zs(Y)","v(HQ,n,a1)","R(aeJ)","by<n,ai<a8<n,@>>>(n,ai<nj>)","Zu(Y)","+count,id,name(H,n,n)(kJ)","n(kJ)","a_r(Y)","a_s(Y)","R(lI)","lI()","YB(Y)","a1c(Y)","Z4(Y)","Z3(Y)","~(H)","~(n,lg?)","v(r8)","ady(Y)","~(m8)","aA<~>([n?])","L(L,lq)","v(lq)","L(L,r8)","a8<n,@>(r8)","r8(a8<@,@>)","ai<lg>()","um()","n(U)","lq(a8<@,@>)","ct(HP)","n(lq)","a8<n,@>(lq)","H(nj,nj)","kJ(a8<n,@>)","kJ(kJ)"])
C.fCz.prototype={
$1(d){return d.a+" "+d.b},
$S:126}
C.fCy.prototype={
blA(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.r0(s,d,B.hK,"book",E.FD),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.Le(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.blA(d)},
$S:293}
C.fCA.prototype={
$1(d){return d.b},
$S:126}
C.fLX.prototype={
$1(d){var w=null
return A.eP(w,B.K,new G.PE(this.a,this.b,w),w,w,0,B.Zv,B.d5,w,w,w)},
$S:47}
C.fqC.prototype={
$1(d){return d!=null},
$S:206}
C.fqD.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:206}
C.fqI.prototype={
$1(d){if(this.a)return new A.t(d.a*520,d.b*160)
return d},
$S:173}
C.fAi.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fb(d,w,w,w,A.hb(w,B.rO,w,w,w,w,w,w,w,B.dw,w,w,10.5,w,B.ep,w,!0,w,w,w,w),w),u=f?B.ep:B.vZ
return new A.nS(D.bv5,A.a9P(A.a([new A.fR(130,w,v),new A.z8(1,B.G9,A.fb(e,w,w,w,A.hb(w,g==null?D.ejg:g,w,w,w,w,w,w,w,B.dw,w,w,11,w,u,w,!0,w,w,w,w),w))],x.F),B.xQ,B.lH))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1920}
C.fAh.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vA(999)
f=A.x9(A.lC(h,A.fb("Cashier",h,h,h,A.hb(h,D.zJ,h,h,h,h,h,h,h,B.dw,h,h,10,h,B.ep,h,!0,h,h,h,h),h),h,new A.kH(D.ej7,h,f,B.hN,h),h,h,D.bvA,h))
w=A.x9(A.fb("Debt receipt",h,h,h,A.hb(h,h,h,h,h,h,h,h,h,B.dw,h,h,22,h,B.ep,h,!0,h,h,h,h),h))
v=A.x9(A.fb(C.wS(new A.U(Date.now(),0,!1),!0),h,h,h,D.a8F,h))
u=A.vA(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fb(s,h,h,h,A.hb(h,h,h,h,h,h,h,h,h,B.dw,h,h,14,h,B.ep,h,!0,h,h,h,h),h)
r=A.fb("Person who owes",h,h,h,D.a8F,h)
q=A.vA(10)
p=x.F
u=A.lC(h,A.z2(A.a([s,new A.fR(h,2,h),r,new A.fR(h,10,h),A.lC(h,A.z2(A.a([A.fb("Amount owed",h,h,h,D.a8F,h),new A.fR(h,2,h),A.fb(A.AX(t.c),h,h,h,A.hb(h,D.zJ,h,h,h,h,h,h,h,B.dw,h,h,20,h,B.ep,h,!0,h,h,h,h),h)],p),B.r9,B.lH),h,new A.kH(B.pk,h,q,B.hN,h),h,h,D.buN,1/0)],p),B.r9,B.lH),h,new A.kH(E.aJ1,h,u,B.hN,h),h,h,D.bwE,1/0)
q=new A.nz(D.eja,0.9,B.kT)
r=A.vA(12)
s=i.c
o=s.$2("Original due",C.wS(t.r,!1))
n=s.$2("Current due",C.wS(t.f,!1))
m=i.d
l=new A.nz(m,1.1,B.kT)
k=A.vA(8)
j=i.a
k=A.a([o,n,new A.fR(h,6,h),A.lC(h,A.x9(A.fb(t.gaL6(),h,h,h,A.hb(h,m,h,h,h,h,h,h,h,B.dw,h,h,11,h,B.ep,h,!0,0.5,h,h,h),h)),h,new A.kH(h,new A.pH(l,l,l,l),k,B.hN,h),h,h,D.bvI,1/0),new A.fR(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.zJ))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.zJ))
else{n=A.fb("Missed days ("+n+")",h,h,h,A.hb(h,B.rO,h,h,h,h,h,h,h,B.dw,h,h,10.5,h,B.ep,h,!0,h,h,h,h),h)
m=A.S(o).k("N<1,Su>")
o=A.C(new A.N(o,new C.fAg(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fR(h,4,h),n,new A.fR(h,6,h),new C.b8T(5,5,new C.b8U(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fR(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fR(h,8,h),w,new A.fR(h,3,h),v,new A.fR(h,16,h),u,new A.fR(h,10,h),A.lC(h,A.z2(k,B.xQ,B.lH),h,new A.kH(h,new A.pH(q,q,q,q),r,B.hN,h),h,h,B.aiF,1/0)],p)
w=j.a
if(w!=null){v=new A.nz(B.II,1,B.kT)
B.d.v(f,A.a([new A.fR(h,16,h),A.fb("Debtor signature",h,h,h,A.hb(h,B.rO,h,h,h,h,h,h,h,B.dw,h,h,10,h,B.ep,h,!0,h,h,h,h),h),new A.fR(h,6,h),A.lC(h,new A.I5(w,B.Wa,h,h),h,new A.kH(h,new A.pH(v,v,v,v),A.vA(6),B.hN,h),82,h,B.Nb,1/0)],p))}f.push(new A.fR(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fb(w,h,h,h,D.fbg,h))
f.push(new A.fR(h,18,h))
f.push(A.x9(A.fb("NGMY.ORG",h,h,h,A.hb(h,D.zJ,h,h,h,h,h,h,h,B.dw,h,h,14,h,B.ep,h,!0,1.8,h,h,h),h)))
return f},
$S:477}
C.fAg.prototype={
$1(d){var w=null,v=new A.nz(D.IJ,0.7,B.kT),u=A.vA(999)
return A.lC(w,A.fb(C.wS(d,!1),w,w,w,A.hb(w,D.IJ,w,w,w,w,w,w,w,B.dw,w,w,9.5,w,B.ep,w,!0,w,w,w,w),w),w,new A.kH(w,new A.pH(v,v,v,v),u,B.hN,w),w,w,D.bB0,w)},
$S:1921}
C.c4L.prototype={
$1(d){var w=null,v=B.bx.j(0.08),u=A.m(999),t=A.I(B.bx.j(0.28),B.r,1)
return A.p(w,A.d(C.wS(d,!1),w,w,w,w,w,w,D.fi8,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eH,w,w,w)},
$S:1922}
C.fMt.prototype={
$1(d){var w=null,v=A.aH(d,B.bX,x.w).w,u=A.m(26),t=A.aJ(w,w,w,w,D.bTG,w,w,w,new C.fMq(d),w,w,w,w,w,B.cd),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eP(w,B.K,new A.cT(new A.aY(0,380,0,v.a.b*0.9),A.aF(!1,B.a1,!0,u,new A.D(B.Zl,A.x(A.a([new A.bL(B.a8,w,w,t,w),new A.ds(1,B.cn,A.cd(A.x(A.a([new A.eG(new C.aYR(r,w),s),B.R,A.B(A.a([A.E(A.es(B.yY,D.fJA,new C.fMr(s,r,d),A.dg(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fb,w,new A.b7(A.m(14),B.a0),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ab,A.E(A.dq(B.a1I,D.fG1,new C.fMs(r,d),A.bp(B.b_,w,w,w,B.c,w,B.fb,w,new A.b7(A.m(14),B.a0),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.P,0,B.p),B.t,w,B.y,w,w,w,w,B.ag),w)],p),B.m,w,B.e,B.P,0,B.p),w),B.f,B.au,0,w,w,w,w,w,B.ah),w),w,w,0,Am.ZJ,B.d5,w,w,w)},
$S:47}
C.fMq.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.fMr.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.ak$.x.h(0,t.a)
m=m==null?null:m.gba()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m2(2.5),$async$$0)
case 4:w=3
return A.b(e.hw(B.h7),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eV(B.dF.gaQ(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.t4(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.J(x.q).f.S(A.b3(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fMs.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fGU(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.J(x.q).f
s.S(A.b3(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fMl.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eP(w,B.au,A.x(A.a([new A.D(D.bws,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nF,w,w,w),1),A.aJ(w,w,w,w,B.lc,w,w,w,new C.fMj(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.ds(1,B.cn,new A.D(B.fI,A.bx(A.m(14),A.fO(t,B.A,w,w,B.cf,B.dy,!1,w,!1,w,w),B.aq),w),w),new A.D(B.MQ,new A.a7(1/0,w,A.dq(B.p9,D.aST,new C.fMk(t,this.c,d),A.bp(B.b_,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.a0),w,w,w)),w),w)],u),B.m,w,B.e,B.P,0,B.p),w,w,w,B.N2,B.d5,w,new A.b7(v,B.a0),w)},
$S:47}
C.fMj.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.fMk.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.t4(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.J(x.q).f.S(A.b3(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fMx.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eP(w,B.au,new A.D(D.bwA,A.x(A.a([A.B(A.a([D.bC3,A.aJ(w,w,w,w,B.lc,w,w,w,new C.fMv(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.N,new A.eG(A.bx(A.m(14),A.p(w,A.b4(w,w,w,new C.bb1(s.ax,w),B.ax),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ad,new A.a7(1/0,w,A.dq(B.p9,D.aST,new C.fMw(t,s,d),A.bp(B.b_,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.a0),w,w,w)),w)],u),B.m,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d5,w,new A.b7(v,B.a0),w)},
$S:47}
C.fMv.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.fMw.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.ak$.x.h(0,t.a)
n=n==null?null:n.gba()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m2(2.5),$async$$0)
case 4:w=3
return A.b(e.hw(B.h7),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.eV(B.dF.gaQ(s))
w=5
return A.b(A.t4(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.J(x.q).f.S(A.b3(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fuX.prototype={
$1(d){return d.a===this.a},
$S:252}
C.dJi.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dJ3.prototype={
bkO(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e1:B.c
s=u.a
w=2
return A.b(A.bT(t,null,new C.dJ6(s,q,e),p,!0,!0,!1,B.IZ,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dJ7(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bkO(d,e)},
$S:1923}
C.dJ6.prototype={
$1(d){var w,v=null,u=this.c===B.wx,t=u?D.djv:D.dfi
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.au,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(M.ajc,A.x(A.a([u,B.av,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.br:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ad,A.ix(!0,v,v,B.y,D.f1T,new C.dJ5(this.a,w,t,d),t.length,v,B.dQ,B.ag,!0)],x.p),B.aj,v,B.e,B.P,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:26}
C.dJ5.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cN.j(0.14)
else w=t.b.a.d.a?B.M:B.aP
v=A.m(14)
if(q)u=B.cN
else u=(t.b.a.d.a?B.br:B.bl).j(0.16)
u=A.I(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.p(B.A,C.aYQ(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dJ4(t.d,r),s,s,s,s,s,s,s)},
$S:193}
C.dJ4.prototype={
$0(){A.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.dJ7.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dJ1.prototype={
$3(d,e,f){return B.bJ},
$C:"$3",
$R:3,
$S:97}
C.dJ2.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cJ(B.cu,e,v)
return new A.d0(e,!1,A.iq(B.A,A.at(A.aF(!1,B.a1,!0,v,new A.dY(new C.dJ0(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ah),v,v,v),v,new A.bf(t,new A.bn(0.96,1,u),u.k("bf<bM.T>"))),v)},
$S:32}
C.dJ0.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aH(d,B.bX,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e1:B.c,f=A.m(14),e=A.I((h?B.br:B.bl).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.au,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.B(A.a([w,A.aM(!1,v,!0,new A.D(B.ez,A.X(B.cx,i.a.d.a?B.br:B.bl,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dIM(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.au,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aST("Name")
r=l.a
q=r.d==null?k:new C.dIN(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bn:B.lY
n=A.I(B.cN.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.X,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bce(new A.D(B.fw,A.aM(!1,p,!0,A.p(B.A,C.aYQ(m==null?"\ud83d\udc64":A.fB6(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a5),k,34,k,B.cm,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a6,k,B.kO,k,B.a8v,k,k)
v=A.a([v,B.ad,t,B.N,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bl,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aTx("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dIO(r,a0),r.d===B.wx),1),B.ab,A.E(i.aTx("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dIT(r,a0),r.d===B.a5m),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.N,new A.bL(B.a3,k,k,A.hp(D.bS0,D.fHT,new C.dIU(r,l.e,a0),A.fx(k,k,k,k,k,k,k,k,k,k,k,B.cN,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cd)),k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aP:B.au,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.ur(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.X,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aSU("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.e_,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a6,k,B.ao,k,k,k,k))
v.push(B.R)
t=i.a.d.a
s=t?B.M:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.br:B.bl).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wS(r.a,!1)
v.push(A.aF(!1,B.a1,!0,q,A.aM(!1,p,!0,A.p(k,A.B(A.a([A.E(A.x(A.a([t,B.bC,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.au,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.j,0,B.p),1),D.bOO],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bh,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dIV(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ah))
if(!h)B.d.v(v,A.a([B.N,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aP:B.au,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.X,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aST("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a6,k,B.ao,k,k,k,k))
v.push(B.ad)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.au,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b0w(r.b.length!==0,B.mH,new C.dIW(r,i,a0),new C.dIX(r,a0),"Upload from gallery","ID photo"))
v.push(i.b0w(r.c.length!==0,D.bId,new C.dIY(r,i,d,a0),new C.dIZ(r,a0),"Camera or gallery","Selfie"))
v.push(B.N)
t=l.w
v.push(new Al.a7D("Signature (optional)",t,new C.dJ_(a0),new C.dIP(a0,t),new C.dIQ(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.br:B.bl
s=(i?B.br:B.bl).j(0.28)
s=A.E(A.dR(E.aSM,new C.dIR(d),A.dg(k,k,k,k,k,k,k,k,k,t,k,k,B.tV,k,new A.b7(A.m(10),B.a0),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cN,k,k,k,B.c,k,B.tV,k,new A.b7(A.m(10),B.a0),k,k,k)
v.push(A.B(A.a([s,B.ab,A.E(A.bH(A.d(h?"Save":"Update",k,k,k,k,k,k,B.v9,k,k,k),new C.dIS(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cd(A.x(v,B.aj,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ag),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.u1,B.ja,k,k,360)},
$S:168}
C.dIM.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.dIN.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dIO.prototype={
$0(){return this.b.$1(new C.dIL(this.a))},
$S:0}
C.dIL.prototype={
$0(){var w=this.a
w.d=B.wx
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dIT.prototype={
$0(){return this.b.$1(new C.dIK(this.a))},
$S:0}
C.dIK.prototype={
$0(){var w=this.a
w.d=B.a5m
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dIU.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dIV.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wW(null,u.b,A.c3(2020,1,1,0,0,0,0,0),null,s,A.c3(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dIJ(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dIJ.prototype={
$0(){var w=this.b
return this.a.a=A.c3(w.gck(),w.gcf(),w.gcv(),0,0,0,0,0)},
$S:0}
C.dIW.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Pw(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dII(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dII.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dIX.prototype={
$0(){return this.b.$1(new C.dIH(this.a))},
$S:0}
C.dIH.prototype={
$0(){return this.a.b=""},
$S:0}
C.dIY.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e1:B.c
w=3
return A.b(A.bT(q,null,new C.dIF(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Pw(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dIG(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dIF.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dM(!1,w,w,w,!0,w,w,w,!0,w,B.aol,w,w,w,w,new C.dIz(d),!1,w,w,w,w,w,w,w,D.fy8,w,w,w),A.dM(!1,w,w,w,!0,w,w,w,!0,w,B.aoj,w,w,w,w,new C.dIA(d),!1,w,w,w,w,w,w,w,D.fF2,w,w,w)],x.p),B.m,w,B.e,B.P,0,B.p),!0,!1,B.af,!0,!0)},
$S:26}
C.dIz.prototype={
$0(){A.a3(this.a,!1).N("camera")
return null},
$S:0}
C.dIA.prototype={
$0(){A.a3(this.a,!1).N("gallery")
return null},
$S:0}
C.dIG.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dIZ.prototype={
$0(){return this.b.$1(new C.dIE(this.a))},
$S:0}
C.dIE.prototype={
$0(){return this.a.c=""},
$S:0}
C.dJ_.prototype={
$0(){return this.a.$1(new C.dID())},
$S:0}
C.dID.prototype={
$0(){},
$S:0}
C.dIP.prototype={
$0(){return this.a.$1(new C.dIC(this.b))},
$S:0}
C.dIC.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dIQ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ahM(u.a,null,null,new C.dIB(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dIB.prototype={
$4(d,e,f,g){this.a.$1(new C.dIy(this.b,d))},
$S:452}
C.dIy.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dIR.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.dIS.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.J(x.q).f.S(D.f6X)
return}if(w.a.d==null){w.c.J(x.q).f.S(D.f3Q)
return}A.a3(w.c,!1).N(!0)},
$S:0}
C.dJl.prototype={
$3(d,e,f){return B.bJ},
$C:"$3",
$R:3,
$S:97}
C.dJm.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e1:B.c,n=A.m(14),m=A.I((p?B.br:B.bl).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.au,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.AX(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.br:B.bl,r,r,r,r,r,r,r,r,13,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.z5(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.z5(r).length>0?B.bx:B.cN,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.br:B.bl
t=(q?B.br:B.bl).j(0.28)
s=x.p
return new A.d0(e,!1,A.at(A.aF(!1,B.a1,!0,r,A.p(r,A.x(A.a([p,B.N,v,u,B.aA,A.B(A.a([A.E(A.dR(B.nG,new C.dJj(d),A.dg(r,r,r,r,r,r,r,r,r,w,r,r,B.jM,r,new A.b7(A.m(10),B.a0),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ab,A.E(A.bH(D.fFs,new C.dJk(d),A.bp(B.cN,r,r,r,B.c,r,B.jM,r,new A.b7(A.m(10),B.a0),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.aj,r,B.e,B.P,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.BD,E.ZA,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ah),r,r,r),r)},
$S:32}
C.dJj.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.dJk.prototype={
$0(){A.a3(this.a,!1).N(!0)
return null},
$S:0}
C.dJf.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dJg(r),p=r.a.d.a,o=p?B.e1:B.c,n=A.m(14),m=A.I((p?B.br:B.bl).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.au,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.AX(l.c),s,s,s,s,s,s,D.fjG,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iC((r.a.d.a?B.br:B.bl).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a0r,"View receipt",new C.dJ8(r,d,l))
u=l.x!=null
t=u?B.rs:B.qb
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bwx,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dJ9(r,d,l)),q.$3$icon$label$onTap(B.BU,"Edit",new C.dJa(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mH,"View / download ID",new C.dJb(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bIc,"View / download selfie",new C.dJc(r,d,l)))
if(l.gaFV())p.push(q.$3$icon$label$onTap(Ab.a1y,"View / download signature",new C.dJd(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bx,B.ec,"Delete",new C.dJe(r,d,l)))
p.push(B.av)
return A.bm(!0,new A.D(B.tZ,A.p(s,A.x(p,B.m,s,B.e,B.P,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:26}
C.dJg.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.au
else w=d
return A.aM(!1,v,!0,new A.D(B.eP,A.B(A.a([A.X(e,w,v,v,v,20),B.ba,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1924}
C.dJ8.prototype={
$0(){A.a3(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fMp(w,this.c)},
$S:0}
C.dJ9.prototype={
$0(){A.a3(this.b,!1).N(null)
this.a.Sd(this.c)},
$S:0}
C.dJa.prototype={
$0(){A.a3(this.b,!1).N(null)
this.a.Da(this.c)},
$S:0}
C.dJb.prototype={
$0(){var w,v,u
A.a3(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bDz(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dJc.prototype={
$0(){var w,v,u
A.a3(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bDz(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dJd.prototype={
$0(){A.a3(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fMu(w,this.c)},
$S:0}
C.dJe.prototype={
$0(){A.a3(this.b,!1).N(null)
this.a.Pv(0,this.c)},
$S:0}
C.dJn.prototype={
$1(d){return d.x==null},
$S:252}
C.dJo.prototype={
$1(d){return d.x!=null},
$S:252}
C.dJp.prototype={
$2(d,e){return d+e.c},
$S:1925}
C.dJq.prototype={
$0(){return this.a.bA9()},
$S:0}
C.dJh.prototype={
$0(){return this.a.afb(this.b)},
$S:0}
C.fvA.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fvB.prototype={
$0(){return B.d.gI(D.a2O)},
$S:z+77}
C.d9s.prototype={
$0(){var w=this.a
return w.m(new C.d9q(w,this.b))},
$S:0}
C.d9q.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d9r.prototype={
$0(){},
$S:0}
C.d9t.prototype={
$0(){var w=this.a.gbZi()
A.a3(this.b,!1).N(w)
return null},
$S:0}
C.fxR.prototype={
$1(d){return C.h8S(A.a2(d,x.N,x.z))},
$S:z+11}
C.fxS.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fxT.prototype={
$2(d,e){var w=A.ca(d.a,null),v=A.ca(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+83}
C.fL2.prototype={
$1(d){return d.ag()},
$S:z+12}
C.fTo.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fuO.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bOC.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f_(e,v)?v:null},
$S:1926}
C.fLB.prototype={
$1(d){var w=this
return new C.Zu(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.da7.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.da6(w,d))},
$S:z+80}
C.da6.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d9W.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cK(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d9T.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d9u.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d9v.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d9X.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d9D.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.e1:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.au,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bl,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.el(A.a([A.bK(!1,B.di,w,w,!0,w,w,new C.d9B(d),w,w),A.bH(B.wU,new C.d9C(d),A.bp(B.n3,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.d9B.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.d9C.prototype={
$0(){A.a3(this.a,!1).N(!0)
return null},
$S:0}
C.d9E.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.E(w.r-1,-1,999)},
$S:0}
C.d9U.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.d9V.prototype={
$0(){return B.d.gI(D.z9)},
$S:z+14}
C.d9z.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyr(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.SW(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.d9A.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d9F.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Z2(v,u,J.ad(w.d),null)},
$S:z+40}
C.d9G.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.da5.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aB(s,new C.YK(r.y,r.gyr(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.da3(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bap(v,e,w,u,t,r.gbQs(),C.hof(r.y.Q),r.gyr(0),s)
w=t}return A.c9(q,new C.da4(r,e),new A.D(B.ZB,w,s))},
$S:1927}
C.da4.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd1(t).ay){t=this.b
u=x.fx.a(B.d.gd1(u.f.f)).guV(0)
w=t-(u==null?t:u)}else w=0
v=B.k.E(w,-1,0)
u=A.dk()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fB(v*3.141592653589793*0.5)
return A.fo(B.a3,A.d6(e,B.k.E(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.da3.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aH0(B.pY,B.iP)},
$S:0}
C.d9Q.prototype={
$0(){var w=this.a
return w.m(new C.d9P(w))},
$S:0}
C.d9P.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d9R.prototype={
$0(){var w=this.a.c
w.toString
A.a3(w,!1).N(null)
return null},
$S:0}
C.d9w.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.k6.j(0.5),r=x.p,q=A.a([D.fwL,B.ad],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cp(p.d)?"Write this book":"Write a new book"
q.push(p.Z2(d,B.e3,w,J.cp(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Z2(d,H.ame,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cK(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.ct,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kw.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.ct,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kw.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Z2(d,U.anm,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Z2(d,B.qg,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Z2(d,B.qg,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eP(u,E.B5,A.bm(!0,new A.D(Aa.ya,A.x(q,B.E,u,B.e,B.P,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.ajB,B.d5,u,new A.b7(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:47}
C.d9S.prototype={
$0(){A.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.d9J.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cK(w.d)
return new C.Zw(v,J.cK(w.d),w.r+1,null)},
$S:z+44}
C.d9K.prototype={
$1(d){var w=null
return A.ou(!1,A.el(w,w,w,E.B5,new A.jO(this.a,new C.d9I(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:312}
C.d9I.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a8b,B.ot,A.E(A.d(e,w,w,w,w,w,w,B.jj,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:739}
C.d9L.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d9M.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:197}
C.d9N.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d9O.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.B5(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.RK(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d9H(s,t))
w=4
return A.b(s.l3(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d9H.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d9Z.prototype={
$1(d){var w=null
return A.ou(!1,A.el(w,w,w,E.B5,new A.jO(this.a,new C.d9Y(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:312}
C.d9Y.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a8b,B.ot,A.E(A.d(e,w,w,w,w,w,w,B.jj,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:739}
C.da_.prototype={
$0(){return this.a.a=!1},
$S:50}
C.da0.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:197}
C.da1.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:197}
C.da2.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.B5(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.l3(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d9x.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bhM(B.pY,A1.MC)},
$S:0}
C.d9y.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aH0(B.pY,A1.MC)},
$S:0}
C.dbS.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.dbT.prototype={
$1(d){var w=this.a
return w.m(new C.dbR(w))},
$S:8}
C.dbR.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dbU.prototype={
$1(d){var w=this.a
return w.m(new C.dbQ(w))},
$S:8}
C.dbQ.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dbV.prototype={
$1(d){var w=this.a
return w.m(new C.dbP(w))},
$S:8}
C.dbP.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dbW.prototype={
$0(){var w=this.a
return w.m(new C.dbO(w,this.b))},
$S:0}
C.dbO.prototype={
$0(){var w=this.b
this.a.d.saX(0,w)
return w},
$S:0}
C.dbX.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga1M()
A.a3(this.b,!1).N(new A.boU(w,v))},
$S:0}
C.dam.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dal.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Zs(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.daq.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dap.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b7W(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.h9,v,v,v)
return A.el(A.a([A.bK(!1,B.di,v,v,!0,v,v,new C.dan(d),v,v),A.bH(B.wU,new C.dao(d),A.bp(B.n3,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.B5,w,v,v,v,v,D.fvz,v)},
$S:18}
C.dan.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.dao.prototype={
$0(){A.a3(this.a,!1).N(!0)
return null},
$S:0}
C.dar.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.das.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.cd(A.bW(B.bD,r,B.bq,18,14),B.t,t,B.y,t,D.bxu,t,t,B.ag)},
$S:296}
C.dak.prototype={
$0(){return this.a.Qd(0,this.b)},
$S:0}
C.daj.prototype={
$0(){return this.a.PH(0,this.b)},
$S:0}
C.cIS.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cIT.prototype={
$0(){return B.d.gI(D.z9)},
$S:z+14}
C.cIU.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bU(0,new A.D(d,A.c1(w,new A.o(w,w,A.I(this.a.j(f),B.r,g),v,w,w,B.n),B.bf),w),0,0,0)},
$S:1929}
C.d1r.prototype={
$1(d){return this.a.m(new C.d1q(this.b,this.c))},
$S:8}
C.d1q.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d1Q.prototype={
$1(d){return this.a.m(new C.d1D())},
$S:2}
C.d1D.prototype={
$0(){},
$S:0}
C.d1R.prototype={
$1(d){return this.a.m(new C.d1C())},
$S:2}
C.d1C.prototype={
$0(){},
$S:0}
C.d1S.prototype={
$0(){var w=this.a
return w.m(new C.d1B(w,this.b))},
$S:0}
C.d1B.prototype={
$0(){var w=this.a
return w.d=w.goa().FK(this.b.a)},
$S:0}
C.d1T.prototype={
$0(){var w=this.a
return w.m(new C.d1A(w,this.b))},
$S:0}
C.d1A.prototype={
$0(){var w=this.a
return w.d=w.goa().cIs(this.b)},
$S:0}
C.d1U.prototype={
$1(d){return this.a.m(new C.d1z())},
$S:2}
C.d1z.prototype={
$0(){},
$S:0}
C.d1V.prototype={
$0(){var w=this.a
return w.m(new C.d1y(w,this.b))},
$S:0}
C.d1y.prototype={
$0(){var w=this.a
return w.d=w.goa().cIx(this.b.a)},
$S:0}
C.d1W.prototype={
$1(d){var w=this.a
return w.m(new C.d1L(w,d))},
$S:7}
C.d1L.prototype={
$0(){var w=this.a
return w.d=w.goa().cJr(this.b)},
$S:0}
C.d1X.prototype={
$1(d){var w=this.a
return w.d=w.goa().aE7(d)},
$S:2}
C.d1Y.prototype={
$1(d){var w=this.a
return w.d=w.goa().cIA(d)},
$S:2}
C.d2_.prototype={
$1(d){var w=this.a
return w.d=w.goa().cJp(d)},
$S:2}
C.d20.prototype={
$1(d){var w=this.a
return w.m(new C.d1K(w,d))},
$S:8}
C.d1K.prototype={
$0(){var w=this.a
return w.d=w.goa().cJg(this.b)},
$S:0}
C.d21.prototype={
$0(){var w=this.a,v=w.goa(),u=B.a.i(w.gyr(0).a.a),t=B.a.i(w.gaBg().a.a)
u=v.bcv(B.a.i(w.gar5().a.a),t,u)
A.a3(this.b,!1).N(u)
return null},
$S:0}
C.bOM.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:9}
C.bOG.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bOF(w,d))},
$S:11}
C.bOF.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a3(0)}},
$S:0}
C.bOP.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bOH.prototype={
$0(){var w=this.a
w.Q=D.aXi
w.acZ(1)
w.r.x=null},
$S:0}
C.bOI.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.aXi)return
w=new A.eb()
w.d5(u.as*13+u.a.e)
v=u.r
v.Q=3+w.au(3)
v.z=D.cWU[w.au(6)]
v.as=u.f.a+2.6},
$S:0}
C.bOL.prototype={
$0(){var w=this.a
w.Q=D.aaF
w.acZ(2)
w.r.z=null},
$S:0}
C.bOK.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hhG
t.acZ(3)
w=t.r
w.d=s
w.x="I say: "+t.gBZ()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.au(3)
w.z=s?D.d1U[v.au(4)]:D.dlT[v.au(3)]
w.as=t.a+2.8},
$S:0}
C.bON.prototype={
$0(){var w=this.a
w.Q=D.aXj
w.CW=this.b
w.cy=1
w.acZ(4)
w.r.f=w.f.a+5},
$S:0}
C.bOO.prototype={
$0(){},
$S:0}
C.bOJ.prototype={
$0(){var w=this.a.c
w.toString
return A.a3(w,!1).ib()},
$S:0}
C.bOD.prototype={
$0(){return this.a.aCX(this.b)},
$S:0}
C.bOE.prototype={
$0(){var w=this.a.c
w.toString
return A.a3(w,!1).ib()},
$S:0}
C.bPS.prototype={
$0(){var w=this
return w.a.Qw(w.b,0,w.c,w.d)},
$S:0}
C.bPT.prototype={
$0(){var w=this
return w.a.Qw(w.b,3,w.c,w.d)},
$S:0}
C.bPU.prototype={
$0(){var w=this
return w.a.Qw(w.b,1,w.c,w.d)},
$S:0}
C.bPV.prototype={
$0(){var w=this
return w.a.bPU(w.b,w.c,w.d)},
$S:0}
C.bPW.prototype={
$0(){var w=this
return w.a.Qw(w.b,4,w.c,w.d)},
$S:0}
C.bPX.prototype={
$0(){var w=this
return w.a.Qw(w.b,2,w.c,w.d)},
$S:0}
C.bPY.prototype={
$0(){var w=this
return w.a.Qw(w.b,5,w.c,w.d)},
$S:0}
C.bPZ.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:1930}
C.bPR.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a3W[d],p=q.a.a9(0,new A.t(0,-q.b*1.2*124)),o=A.fS(r,r,3,r,A.cX(r,r,r,r,r,r,r,r,r,D.faX,e),B.a6,B.c5,r,B.dP,B.c4)
o.qR(130)
w=o.b.a.c
w=p.aF(0,new A.t(0,w.gbc(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bz(A.bN(w,v.gbc(v)+12,u+18),B.i1)
u=this.a
v=t.eS(B.dz)
w=$.V()
s=A.K()
s.r=B.dp.gp(0)
u.aD(v,s)
s=A.K()
s.r=D.r3.gp(0)
u.aD(t,s)
w=new A.aI(w.r,B.ai,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.D(new A.b0(s-5,v))
w.D(new A.ap(s+1,p.b+1))
w.D(new A.ap(s+6,v))
w.D(new A.bv())
v=A.K()
v.r=D.r3.gp(0)
u.aJ(w,v)
o.a5(u,new A.t(t.a+9,t.b+6))},
$S:740}
C.bP2.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+7}
C.bP3.prototype={
$2(d,e){var w=this.a,v=B.o.aL(w.aln(d),w.aln(e))
if(v!==0)return v
return B.o.aL(d.Q,e.Q)},
$S:z+7}
C.fjT.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.fTf.prototype={
$2(d,e){if(e!=null)J.cc(this.a.c4(0,d,new C.fTg()),e)},
$S:z+66}
C.fTg.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.fTh.prototype={
$1(d){return d!==this.a},
$S:3}
C.fTi.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.fTj.prototype={
$1(d){return d!==this.a&&!B.d.b3(this.b,new C.fTe(this.c,d))},
$S:3}
C.fTe.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fTk.prototype={
$1(d){return d!==this.a},
$S:3}
C.fTl.prototype={
$1(d){return d!==this.a},
$S:3}
C.fTm.prototype={
$1(d){return d!==this.a&&!B.d.b3(this.b,new C.fTd(this.c,d))},
$S:3}
C.fTd.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fw8.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fyH.prototype={
$1(d){return!this.a.q(0,d)},
$S:3}
C.fK9.prototype={
$1(d){return d.Q},
$S:z+15}
C.fKa.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fsz.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fyL.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bJR.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.fTF.prototype={
$2(d,e){return B.o.aL(C.hkI(d),C.hkI(e))},
$S:232}
C.fTG.prototype={
$1(d){return d!==this.a},
$S:3}
C.fKz.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bI4.prototype={
$0(){var w=this.a
w.ch=!0
w.b6c()},
$S:0}
C.bI_.prototype={
$0(){},
$S:0}
C.bI5.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bHY.prototype={
$0(){},
$S:0}
C.bHZ.prototype={
$0(){},
$S:0}
C.bI3.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bU(0,A.b4(u,u,u,new C.bb2(t,u),B.ax),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.m(14)
s.push(A.ao(u,A.p(u,A.d(t.dy,u,u,u,u,u,u,D.fil,B.L,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.n),u,u,u,u,B.bT,u,u,u),u,u,14,14,6,u))}return A.aB(B.cc,new A.an(B.a_,u,B.aa,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bI0(t,e),u,u,u,u,u,u,u,new C.bI1(t,e),u,u,u,u,u,u,u,u,u,new C.bI2(t,e),u,u,u,u,!1,B.a4)},
$S:37}
C.bI0.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:21}
C.bI2.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:23}
C.bI1.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:21}
C.bHX.prototype={
$0(){var w=this.a.c
w.toString
return A.a3(w,!1).ib()},
$S:0}
C.ckB.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.ckC.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.ckA(w))},
$S:0}
C.ckA.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.ckD.prototype={
$0(){var w=this,v=w.a
v.gm4()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.ckE.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.ckF.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.ckG.prototype={
$0(){},
$S:0}
C.ckH.prototype={
$0(){var w=this.a
w.z=w.WD(++w.e)
w.Q=A.c2(w.glY()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.ckx.prototype={
$0(){return A.a3(this.a,!1).ib()},
$S:0}
C.cky.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gm4().length,e=i/2,d=new C.ckz(i,f,h),a0=g.as,a1=A.a6(a0).k("bc<2>")
a0=A.C(new A.bc(a0,a1),a1.k("J.E"))
a0=A.bU(0,A.c9(new A.h5(a0),new C.cks(g,new A.t(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gm4().length!==0&&!B.d.q(g.gm4(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.PV(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.gj,a1=x.dN,u=0;u<f;++u)e.push(new A.cN(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new R.Mb(new C.ckt(g,u),new C.cku(g,u),new C.ckv(g,u),j,j,new A.cs("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.d(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.f7:B.bm,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.L,j,j),j,j,0,0,h*0.76-6,j))
if(g.gm4().length!==0&&!B.d.q(g.gm4(),-1)){a0=g.e+1>=g.glY().length?"See my result":"Next family"
g=A.at(C.wM(a0,g.gnX(g),B.d4,B.jP,D.fG),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.WD(0):s).length))break
if(!B.d.q(g.gm4(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.WD(0)
o=s}else o=s
n=s[u]
n=A.ea(B.A,new C.PV(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.WD(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.qP(new A.bn(0,p,t),new C.ckw(),new R.DK(u,j,new C.PV(l.b,k,62,!1,j),new A.kw(0.25,new C.PV(m.b,k,62,!1,j),j),new A.k0(n,B.ah,!1,0,B.K,j,j,j,j,!0,B.f,B.a1,j,j),B.J,R.hoa(),!0,!0,j,j,j,j,j,j,!1,B.jz,j,new A.cs("chip-"+r,a0),w),B.b7,B.j9,j,new A.cs("t"+r+"-"+q,a0),v))}++u}g=A.bW(B.fA,a1,B.bq,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.an(B.a_,j,B.aa,B.t,e,j)},
$S:67}
C.ckz.prototype={
$1(d){return new A.t(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:728}
C.cks.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gm4().length!==0&&!B.d.q(t.gm4(),-1)
return A.b4(p,p,p,new C.bay(q.b,o,v,w,p),B.ax)},
$S:68}
C.cku.prototype={
$1(d){return this.a.gm4()[this.b]===-1},
$S:z+30}
C.ckv.prototype={
$1(d){return this.a.cMd(this.b,d.a)},
$S:z+31}
C.ckt.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gm4()[t]!==-1,r=A.m(18),q=e.length!==0?B.d4.j(0.3):B.K
if(s)w=v
else w=A.I(e.length!==0?B.d4:B.jK,B.r,2)
u=s?A.l5(new C.ckr(),A.at(new C.PV(u.gaDA()[u.gm4()[t]].b,u.gaDA()[u.gm4()[t]].a,62,!1,v),v,v,v),B.lo,B.j9,v,v,new A.bn(0.3,1,x.X),x.i):D.b72
return A.d9(v,u,v,v,B.b7,new A.o(q,v,w,r,v,v,B.n),B.a1,v,100,v,v,v,v,88)},
$S:1932}
C.ckr.prototype={
$3(d,e,f){return A.ea(B.A,f,e,null,null)},
$S:103}
C.ckw.prototype={
$3(d,e,f){return A.dJ(f,new A.t(Math.sin(e*24)*8*(1-e),0))},
$S:103}
C.cJW.prototype={
$1(d){return d>=1},
$S:113}
C.czv.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.glY()[w.e].d.length)w.m(new C.czu(w))},
$S:11}
C.czu.prototype={
$0(){return this.a.f++},
$S:0}
C.czD.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.czE.prototype={
$0(){var w=this.a,v=this.b
w.z.M(0,v)
w.Q=v},
$S:0}
C.czF.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.czC(w))},
$S:0}
C.czC.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.czG.prototype={
$0(){return this.a.f++},
$S:0}
C.czH.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.czI.prototype={
$0(){},
$S:0}
C.czJ.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.czx.prototype={
$0(){return A.a3(this.a,!1).ib()},
$S:0}
C.czy.prototype={
$3(d,e,f){var w=null
return A.l5(new C.czw(this.a,e),w,B.b7,B.hD,w,w,new A.bn(w,this.b,x.X),x.i)},
$S:1933}
C.czw.prototype={
$3(d,e,f){var w,v,u=null,t=this.a,s=B.d4.j(t.as?0.6:0.15)
s=A.a([new A.ac(0,B.G,s,B.J,t.as?40:18)],x.V)
w=B.w.j(e)
v=this.b
v=A.Tv(v,v,B.UJ)
return A.p(u,A.hT(new A.Bg(new A.xh(w,B.KN,u,B.WD),G.bU0(A.b4(u,u,u,new C.aA8(t.glY()[t.e].c,t.as,u),B.ax),v),u),B.aq),B.f,u,u,new A.o(u,u,u,u,s,u,B.a5),u,190,u,u,u,u,u,190)},
$S:1934}
C.czz.prototype={
$3(d,e,f){return A.d6(A.dJ(f,new A.t(0,14*(1-e))),e)},
$S:100}
C.czA.prototype={
$3(d,e,f){return A.dJ(f,new A.t(Math.sin(e*22)*8*(1-e),0))},
$S:103}
C.czB.prototype={
$0(){return this.a.bn2(this.b)},
$S:0}
C.bP4.prototype={
$0(){return A.a3(this.a,!1).ib()},
$S:0}
C.dV8.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dV9.prototype={
$1(d){return this.a},
$S:38}
C.dVa.prototype={
$0(){var w=this.a
return w.d=w.gSe().bbY(this.b)},
$S:0}
C.dV6.prototype={
$1(d){return new C.SX(this.a,null)},
$S:z+32}
C.dV7.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.dV5.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.h9,w,w,w)
return A.el(A.a([A.bK(!1,E.aSW,w,w,!0,w,w,new C.dV3(d),w,w),A.bK(!1,D.fCZ,w,w,!0,w,w,new C.dV4(d),w,w)],x.p),w,w,D.fG,v,w,w,w,w,D.fpR,w)},
$S:18}
C.dV3.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.dV4.prototype={
$0(){A.a3(this.a,!1).N(!0)
return null},
$S:0}
C.dV2.prototype={
$0(){var w=null,v=this.a.c.J(x.q).f,u=this.b
return v.S(A.b3(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.V,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dVb.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:14}
C.dVc.prototype={
$0(){var w=this.a,v=this.b,u=C.fw7(v,10,w.r,!1)
return w.u0(C.h8T(w.a.d,"kahoot",u,w.gb3L(),v.b,"Family Kahoot",v.a))},
$S:0}
C.dVd.prototype={
$0(){var w=this.a
return w.u0(new C.akP(this.b,w.a.d,w.r,null))},
$S:0}
C.dVe.prototype={
$0(){var w=this.a
return w.u0(new C.aj_(this.b,w.a.d,w.r,null))},
$S:0}
C.dVh.prototype={
$0(){var w=this.a
return w.u0(new C.atq(this.b,w.a.d,w.r,null))},
$S:0}
C.dVi.prototype={
$0(){var w=this.a
return w.u0(new C.axk(this.b,w.a.d,w.r,null))},
$S:0}
C.dVj.prototype={
$0(){var w=this.a
return w.u0(new C.ana(this.b,w.a.d,w.r,null))},
$S:0}
C.dVk.prototype={
$0(){var w=this.a
return w.u0(new C.akt(this.b,w.a.d,w.r,null))},
$S:0}
C.dVl.prototype={
$0(){var w=this.a
return w.u0(new C.akU(this.b,w.a.d,w.r,null))},
$S:0}
C.dVm.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.cX_()
return v.u0(C.h8T(v.a.d,"creator_"+u.a,w,v.gb3L(),"A game by the family",t,this.c.a))},
$S:0}
C.dVn.prototype={
$0(){return this.a.Og(this.b)},
$S:0}
C.dVo.prototype={
$0(){return this.a.X4(0,this.b)},
$S:0}
C.dVf.prototype={
$0(){return this.a.Og(null)},
$S:0}
C.dVg.prototype={
$0(){return this.a.J(x.q).f.S(D.f3W)},
$S:0}
C.bPg.prototype={
$0(){var w=this.a
w.d=D.aWQ
w.z=3},
$S:0}
C.bPh.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a3(0)
w.aNJ()}else w.m(new C.bPf(w))},
$S:11}
C.bPf.prototype={
$0(){return this.a.z--},
$S:0}
C.bP6.prototype={
$0(){var w=this.a
w.d=D.aaj
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bP7.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bP5(w))
if(w.as<=0){d.a3(0)
w.b3H(-1)}},
$S:11}
C.bP5.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bPc.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.Vj},
$S:0}
C.bPd.prototype={
$0(){return this.a.e++},
$S:0}
C.bP9.prototype={
$0(){var w=this.a
w.d=D.aWR
w.ay=this.b},
$S:0}
C.bPa.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bPe.prototype={
$2(d,e){return B.o.aL(e.b,d.b)},
$S:1935}
C.bPb.prototype={
$0(){return this.a.aCX(this.b)},
$S:0}
C.bP8.prototype={
$0(){var w=this.a.c
w.toString
return A.a3(w,!1).ib()},
$S:0}
C.bPm.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bPn.prototype={
$0(){var w=this.a
w.y=!0
w.w=this.b},
$S:0}
C.bPo.prototype={
$0(){},
$S:0}
C.bPp.prototype={
$0(){var w=this.a;++w.f
w.r=-1},
$S:0}
C.bPk.prototype={
$0(){return this.a.cHc(this.b)},
$S:0}
C.bPl.prototype={
$0(){var w=this.a.c
w.toString
return A.a3(w,!1).ib()},
$S:0}
C.bZc.prototype={
$0(){var w=this.a,v=this.b
w.gSD()[v].d=!0
w.as.push(v)},
$S:0}
C.bZd.prototype={
$0(){this.b.e=this.c.e=!0
var w=this.a;++w.r
B.d.a8(w.as)},
$S:0}
C.bZe.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.bZb(w))},
$S:0}
C.bZb.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.as,u=v.length,t=0;t<v.length;v.length===u||(0,A.M)(v),++t){s=v[t]
w.gSD()[s].d=!1}B.d.a8(v)
w.y=!1},
$S:0}
C.bZ8.prototype={
$0(){var w=this.a
w.z=!0
w.w=this.b},
$S:0}
C.bZ9.prototype={
$0(){},
$S:0}
C.bZa.prototype={
$0(){return A.a3(this.a,!1).ib()},
$S:0}
C.bZ7.prototype={
$0(){return this.a.cNl(this.b)},
$S:0}
C.bZ6.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p=null,o=A.dk(),n=o.a
n.$flags&2&&A.aj(n)
n[11]=0.001
o.fB(3.141592653589793*e)
if(e>0.5){n=new Float64Array(16)
n[15]=1
w=Math.cos(3.141592653589793)
v=Math.sin(3.141592653589793)
n[0]=w
n[1]=0
n[2]=-v
n[4]=0
n[5]=1
n[6]=0
n[8]=v
n[9]=0
n[10]=w
n[3]=0
n[7]=0
n[11]=0
u=this.a
if(u.e)t=D.kW.j(0.9)
else t=u.c?B.d4:D.r3
s=A.m(16)
r=u.e
q=A.I(r?B.c:D.lr,B.r,3)
r=r?B.c:D.fG
n=A.fo(B.A,A.p(p,A.at(A.d(u.b,p,4,B.a2,p,p,p,A.l(p,p,r,p,p,p,p,p,p,p,p,u.c?17:13.5,p,p,B.u,p,1.15,!0,p,p,p,p,p,p,p,p),B.L,p,p),p,p,p),B.f,p,p,new A.o(t,p,q,s,p,p,B.n),p,p,p,p,B.cm,p,p,p),p,new A.eC(n),!0)}else{n=A.m(16)
u=A.I(B.d4,B.r,3)
n=A.p(p,A.bx(A.m(13),A.b4(D.b7f,p,p,new C.be9(p),B.ax),B.aq),B.f,p,p,new A.o(p,p,u,n,p,D.c_7,B.n),p,p,p,p,p,p,p,p)}return A.fo(B.A,n,p,o,!0)},
$S:103}
C.bMS.prototype={
$2(d,e){return d+e},
$S:70}
C.bN0.prototype={
$0(){return this.a.x.push(this.b)},
$S:0}
C.bN1.prototype={
$0(){var w,v=this.b
v.z=!0
w=this.a.a
v.Q=w
if(w)++v.f},
$S:0}
C.bN_.prototype={
$0(){var w=this.a
w.x=A.a([],x.t)
w.z=!1},
$S:0}
C.bMX.prototype={
$0(){var w=this.a
w.as=!0
w.r=this.b},
$S:0}
C.bMY.prototype={
$0(){},
$S:0}
C.bMZ.prototype={
$0(){var w=this.a;++w.e
w.x=A.a([],x.t)
w.z=!1
w.y=w.b5M(w.e)},
$S:0}
C.bMT.prototype={
$0(){return A.a3(this.a,!1).ib()},
$S:0}
C.bMU.prototype={
$2(d,e){var w=this.a.d
return B.o.aL(w[d],w[e])},
$S:70}
C.bMV.prototype={
$0(){return this.a.cWF(this.b)},
$S:0}
C.bMW.prototype={
$1(d){return this.a.c[d]},
$S:80}
C.bOQ.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ax()
s=A.a([new A.as(new A.bb(s,B.b4,B.aO),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.M)(t),++v){u=t[v]
s.push(new A.as(new A.bb(u,B.b4,B.aO),r))}return s},
$S:1936}
C.bOR.prototype={
$0(){return this.a.gCB().c.push(C.fVf(null,0,20,""))},
$S:0}
C.bP0.prototype={
$1(d){var w=null
return A.bs(w,new A.b5(4,A.m(12),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.ds,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.Ui,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:243}
C.bP_.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gCB().c,m=this.b,l=n[m],k=o.cav(l),j=B.c.j(0.06),i=A.m(18),h=A.I(B.aZ,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.A6,p,p,p),B.b0],g)
if(n.length>1)f.push(A.aJ(p,p,p,p,B.ao7,p,p,p,new C.bOV(o,m),p,p,p,p,p,p))
n=J.a4(k)
m=this.c
f=A.a([A.B(f,B.m,p,B.e,B.j,0,p,p),A.aN(p,B.X,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bOW(l),p,p,p,!1,p,p,!1,p,!0,p,B.a9,p,p,p,p,p,p,p,p,p,p,p,B.df,!0,B.a6,p,B.ao,p,p,p,p),B.N],g)
for(w=x.fo,v=0;v<4;v=s){u=D.azI[v]
t=D.azu[v]
s=v+1
f.push(new A.D(B.eG,new A.cb(B.aN,B.e,B.j,B.m,p,B.p,p,0,A.a([new A.y(u,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p),B.ab,new A.bA(1,B.bd,A.aN(p,B.X,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bOX(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.a9,p,p,p,p,p,p,p,p,p,p,p,B.df,!0,B.a6,p,B.ao,p,p,p,p),p),new Ap.OD(v,l.c,new C.bOY(o,l),p,!1,D.kW,p,p,p,p,p,!1,!1,p,N.aX8,p,p,p,p,p,w)],g),p),p))}f.push(D.fve)
f.push(B.am)
n=A.a([D.foX,B.ab],g)
for(r=0;r<3;++r){q=D.c6F[r]
n.push(new A.D(B.fw,A.j0(p,p,p,new A.y(""+q+"s",p,p,p,p,p,p,p,p,p,p,p),p,new C.bOZ(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.B(n,B.m,p,B.e,B.j,0,p,p))
return A.p(p,A.x(f,B.E,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.kD,B.bh,p,p,p)},
$S:172}
C.bOV.prototype={
$0(){var w=this.a
return w.m(new C.bOU(w,this.b))},
$S:0}
C.bOU.prototype={
$0(){return B.d.cG(this.a.gCB().c,this.b)},
$S:0}
C.bOW.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bOX.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bOY.prototype={
$1(d){return this.a.m(new C.bOT(this.b,d))},
$S:195}
C.bOT.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bOZ.prototype={
$1(d){return this.a.m(new C.bOS(this.b,this.c))},
$S:8}
C.bOS.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dWO.prototype={
$0(){var w=this.a
w.vZ()
w.a.bs()
w.a.q1()},
$S:0}
C.dWN.prototype={
$0(){var w=this.a
w.vZ()
w.a.bs()
w.a.q1()},
$S:0}
C.dWQ.prototype={
$0(){var w=this,v=w.b
if(J.cK(v)||J.cp(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dWR.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dWS.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dWM.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dWP.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dWU.prototype={
$0(){this.a.OC()
return null},
$S:0}
C.dWT.prototype={
$0(){return this.a.Ez(this.b)},
$S:0}
C.dWe.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.di,w,w,!0,w,w,new C.dWc(d),w,w),r=A.bp(B.bP,w,w,w,w,w,w,w,w,w,w,w)
return A.el(A.a([s,A.bH(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dWd(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.dWc.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.dWd.prototype={
$0(){A.a3(this.a,!1).N(!0)
return null},
$S:0}
C.dWf.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cIW(this.b)},
$S:0}
C.dW9.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aT8(w.b,w.c,w.d)},
$S:9}
C.dVB.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dVC.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dVT.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.GI(t.a.c),$async$$0)
case 2:s=r.p_(q.dG(e,new C.dVR(t)))
if(s!=null&&t.c!=null)t.m(new C.dVS(t,s))
t.a.bs()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dVR.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dVS.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dVU.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dVV.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dW8.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cJJ(C.hop(w),w)},
$S:0}
C.dVQ.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.Vj(u,w,C.aP6(u,w),new C.dVP(v),null)},
$S:z+37}
C.dVP.prototype={
$1(d){return this.bkV(d)},
bkV(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.dVO(s,d))
w=3
return A.b(s.tX(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:726}
C.dVO.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bbY(this.b)},
$S:0}
C.dW5.prototype={
$1(d){return d.as},
$S:z+1}
C.dW6.prototype={
$1(d){var w=this
return new A.dY(new C.dW4(w.a,w.b,w.c,w.d,w.e),null)},
$S:19}
C.dW4.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.e1:B.c,h=A.m(26),g=A.I(B.bP.j(0.5),B.r,1.5),f=A.p(k,D.bMZ,B.f,k,k,new A.o(B.bP.j(0.18),k,k,k,k,k,B.a5),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.au,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.br:B.bl,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.j,0,B.p),1)
f=A.B(A.a([f,B.ba,a0,A.aJ(k,k,k,k,A.X(B.cx,j?B.br:B.bl,k,k,k,k),k,k,k,new C.dVZ(a1),k,k,k,k,k,k)],w),B.m,k,B.e,B.j,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.M)(v),++s){r=v[s]
q=t.a===r?B.bP:B.bP.j(0.1)
p=new A.aQ(20,20)
o=t.a===r
n=new A.ay(B.bP,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bP
a0.push(A.aB(k,A.d9(k,new A.y(m,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k),k,k,B.b7,new A.o(q,k,new A.bI(n,n,n,n),new A.bk(p,p,p,p),k,k,B.n),B.ho,k,k,k,B.Bx,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.dW_(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bW(B.bD,a0,B.bq,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.bYL,new A.D(D.bxT,f,k),new A.D(D.bxK,e,k),new A.D(B.u1,a0,k),new A.D(U.ajC,A.d(v,k,k,k,k,k,k,A.l(k,k,j?B.br:B.bl,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(A0.am_,j?B.br:B.bl,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bxM,A.B(A.a([a0,B.as,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.au,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.XX(k,B.bP,k,k,!1,B.y,k,k,k,k,k,k,new C.dW0(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.m,k,B.e,B.j,0,k,k),k))}f.push(B.aA)
j=A.m(20)
e=A.a([new A.ac(0,B.G,B.aC.j(0.35),B.iW,12)],x.V)
f.push(A.aB(k,A.p(k,A.B(A.a([D.fpi,B.ba,D.bC_,D.bNF],w),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.c1u,B.n),k,k,k,B.hF,B.bB,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.dW1(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.vU,A.B(A.a([A.E(A.dR(B.di,new C.dW2(a1),k),1),B.as,A.E(A.bH(K.aTm,new C.dW3(t,a1),A.bp(B.bP,k,k,k,k,k,B.cj,k,k,k,k,k)),1)],w),B.m,k,B.e,B.j,0,k,k),k))
return A.bm(!0,A.p(k,A.cd(A.x(f,B.E,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ag),B.aq,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.Bs,k,k,k,k),!0,!1,B.af,!0,!0)},
$S:86}
C.dVZ.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.dW_.prototype={
$0(){return this.b.$1(new C.dVY(this.a,this.c))},
$S:0}
C.dVY.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.dW0.prototype={
$1(d){var w=this.a
w.m(new C.dVW(w,d))
this.b.$1(new C.dVX())},
$S:8}
C.dVW.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dVX.prototype={
$0(){},
$S:0}
C.dW1.prototype={
$0(){var w=this.a.a
A.a3(this.b,!1).N(new A.aG5(!0,w))
return null},
$S:0}
C.dW2.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.dW3.prototype={
$0(){var w=this.a.a
A.a3(this.b,!1).N(new A.aG5(!1,w))
return null},
$S:0}
C.dW7.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cJw(this.b.b)
w.r.a8(0)},
$S:0}
C.dVp.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ahU(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hi_(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.dVq.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aE4(w)},
$S:0}
C.dWh.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.add(this.b,w,this.c,null)},
$S:z+39}
C.dWb.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e1:B.c,t=A.m(20),s=A.X(B.lC,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.au,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.br:B.bl,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ad,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.x(p,B.m,w,B.e,B.P,0,B.p)
return A.el(A.a([A.bH(D.fGF,new C.dWa(d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b8,w,u,v,w,s,w,new A.b7(t,B.a0),r,w)},
$S:18}
C.dWa.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.dVr.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dVs.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dVt.prototype={
$1(d){return d.a},
$S:z+8}
C.dVu.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.M)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hU(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aE4(w)},
$S:0}
C.dVy.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ahU(q)
w=A.S(q).k("Z<1>")
q=A.C(new A.Z(q,new C.dVw(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hi_(v.e,null,r,v.f,v.r,new C.dVx(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.dVx.prototype={
$0(){return this.a.aac(this.b)},
$S:0}
C.dVw.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dVz.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.S(w).k("N<1,hU>")
w=A.C(new A.N(w,new C.dVv(this.b),v),v.k("ak.E"))
u.d=t.aE4(w)},
$S:0}
C.dVv.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.dWg.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dVL.prototype={
$1(d){return d.length!==0},
$S:3}
C.dVM.prototype={
$1(d){var w=this
return new A.dY(new C.dVK(w.a,w.b,w.c,w.d),null)},
$S:19}
C.dVK.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e1:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.au,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.br:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ad],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.br:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.N(o,new C.dVG(u,e,o),A.S(o).k("N<1,v>")))
p.push(B.N)
u=w.d
p.push(A.aN(v,B.X,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bs(v,new A.b5(4,A.m(12),B.dk),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mg,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a6,v,B.ao,v,v,v,v))
p=A.x(p,B.aj,v,B.e,B.P,0,B.p)
t=w.a
return A.el(A.a([A.bK(!1,B.di,v,v,!0,v,v,new C.dVH(d),v,v),A.bH(B.JY,new C.dVI(t,u,o,e),A.bp(B.bP,v,v,v,v,v,v,v,v,v,v,v)),A.bH(D.ftD,new C.dVJ(t,u,o,d),A.bp(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:181}
C.dVG.prototype={
$1(d){var w=null
return A.dM(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.au,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aJ(w,w,w,w,D.bVD,w,w,w,new C.dVF(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1937}
C.dVF.prototype={
$0(){return this.a.$1(new C.dVD(this.b,this.c))},
$S:0}
C.dVD.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dVH.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.dVI.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dVE(w.c,u))
v.bP(0,B.c7)}},
$S:0}
C.dVE.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dVJ.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a3(w.d,!1).N(!0)},
$S:0}
C.dVN.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cKa(this.b,D.u4,C.GG(v,w.a.c))},
$S:0}
C.dWo.prototype={
$1(d){return d.as},
$S:z+1}
C.dWp.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iR(this.b,w)},
$S:0}
C.dWq.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.id1(v)
return w.VX(v==null?null:v.a)},
$S:0}
C.dWr.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hQ1(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aR(1/0,e.a,e.b)
s=A.aR(1/0,e.c,e.d)
l.crP(new A.au(u,t),v.gbiG(),new A.au(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cUR:D.cT9
q=A.I(s?B.ds:D.beo,B.r,1)
p=A.m(22)
o=A.bU(0,A.b4(m,m,m,new C.bdO(s,m),B.ax),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bx(p,new A.an(B.a_,m,B.aa,B.t,A.a([o,A.bU(0,A.uA(new A.Q(n,n,n,n),new A.a7(u,t,new C.beH(l.d,v,l.f,w,new C.dWk(l),l.gcbH(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bw2(s,new C.dWl(l,e),new C.dWm(l,e),new C.dWn(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a9(B.b3,B.b6,B.x,r,m,m),B.n),m,m,m,X.aiJ,m,m,m,m)},
$S:212}
C.dWk.prototype={
$1(d){var w=this.a
w.m(new C.dWi(w,d))},
$S:2}
C.dWi.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.M(0,v)},
$S:0}
C.dWl.prototype={
$0(){var w=this.b
return this.a.bab(1.25,new A.au(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.dWm.prototype={
$0(){var w=this.b
return this.a.bab(0.8,new A.au(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.dWn.prototype={
$0(){var w=this,v=w.b
return w.a.aT8(new A.au(A.aR(1/0,v.a,v.b),A.aR(1/0,v.c,v.d)),new A.au(w.c,w.d),w.e.gbiG())},
$S:0}
C.dWs.prototype={
$0(){var w=this.a
return w.m(new C.dWj(w))},
$S:0}
C.dWj.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dVA.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fE(new A.fA(s.c)),$async$$0)
case 2:t.xT("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.daw.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bio(u,C.hsC(v.c,u),new C.dav(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dav.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dax.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.blB(d.d,d.c,u.f.q(0,d.a),new C.dau(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dau.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fvE.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.S(v)
return A.p_(new A.cQ(new A.Z(v,new C.fvF(d),w.k("Z<1>")),new C.fvG(),w.k("cQ<1,n>")))},
$S:z+19}
C.fvF.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fvG.prototype={
$1(d){return d.a},
$S:z+8}
C.fvC.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fvD.prototype={
$1(d){return d.b},
$S:z+8}
C.fvJ.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.S(v)
return A.p_(new A.cQ(new A.Z(v,new C.fvK(d),w.k("Z<1>")),new C.fvL(),w.k("cQ<1,n>")))},
$S:z+19}
C.fvK.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fvL.prototype={
$1(d){return d.a},
$S:z+8}
C.fvH.prototype={
$1(d){var w,v=A.ey([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ai(0,w)&&v.M(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fvI.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.daz.prototype={
$0(){return this.a},
$S:z+46}
C.daQ.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ai(0,d)},
$S:270}
C.daI.prototype={
$2(d,e){var w=this.a.c4(0,d,new C.daJ()),v=J.a4(w)
if(!v.q(w,e))v.M(w,e)},
$S:116}
C.daJ.prototype={
$0(){return A.a([],x.s)},
$S:741}
C.daH.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f_(w,e)
return w===!0},
$S:280}
C.daA.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.daG.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.daF.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.M(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.CK:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.X:v)
while(v.C()){t=v.gR(v)
if(e.q(0,t))continue
e.M(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.CK:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1939}
C.daB.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.daK.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.M(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aV(u==null?B.X:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gR(u)
if(a8.q(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.M(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aV(t==null?D.CK:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.b3(w,new C.daL(r)))w.push(r)}}B.d.bt(w,new C.daM(a8))
B.d.aV(w,new C.daN())
q=C.hQ0(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.M)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eI5],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.M)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.z(-p,p)],x.G)
a8=x.n
k=A.a([],a8)
j=A.a([],a8)
for(a8=n.length,m=0;m<n.length;n.length===a8||(0,A.M)(n),++m){i=n[m]
if(k.length!==0){h=Math.min(j.length,i.length)
for(g=-1/0,f=0;f<h;++f){e=f===0?22:44
g=Math.max(g,j[f]+e-i[f].a)}}else g=0
k.push(g)
for(f=0;f<i.length;++f){d=g+i[f].b
if(f<j.length)j[f]=Math.max(j[f],d)
else j.push(d)}}a0=(B.d.gI(k)+B.d.gal(k))/2
a1=A.a([new A.z(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.boE(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1940}
C.daL.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.daM.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.daN.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+7}
C.daO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a4(n),v=o.c,u=-1/0,t=0;t<w.gL(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a6(v).k("bc<2>")).cL(0,0,B.pB)+88-w.gI(n).a}else u=0
for(w=J.a4(n),v=o.c,t=0;t<w.gL(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:655}
C.daP.prototype={
$1(d){return 16+d*156},
$S:235}
C.day.prototype={
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
t.n(0,d,new C.FY(r,new A.t(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.FY(s,new A.t(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.FY(s,new A.t(e,v)))}t=o.r.h(0,d)
t=J.aV(t==null?B.X:t)
s=o.w
while(t.C()){r=t.gR(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Kf(d,new A.t(e+t,w),s,s.length))}},
$S:197}
C.daC.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aJc(new A.t(v.a,v.b+28),new A.t(w.a,w.b+28),!0,null))},
$S:116}
C.daD.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.daE.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:742}
C.daR.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:742}
C.daS.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:394}
C.daT.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:185}
C.daU.prototype={
$1(d){return d>=0.5},
$S:113}
C.fcA.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hc(A.aM(!1,v,!0,new A.a7(38,38,A.X(d,this.a.c?B.c:B.cp,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1942}
C.eOj.prototype={
$1(d){var w=null,v=A.m(8),u=B.bP.j(0.12),t=A.m(8)
return new A.D(B.nk,A.aM(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.ffh,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.Na,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eOi(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eOi.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dqE.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dqD.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nC,B.L,w,w)
return A.el(A.a([A.bK(!1,B.di,w,w,!0,w,w,new C.dqB(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mu,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dqC(d),w,w)],x.p),B.b8,B.Bu,w,u,D.byN,w,D.bAK,new A.b7(v,B.a0),w,w)},
$S:18}
C.dqB.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.dqC.prototype={
$0(){A.a3(this.a,!1).N(!0)
return null},
$S:0}
C.dqN.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dqO.prototype={
$1(d){var w=this.a
return w.m(new C.dqM(w,d))},
$S:z+49}
C.dqM.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dqP.prototype={
$1(d){var w=null
return A.qu(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dqS.prototype={
$1(d){var w=this.a
return w.m(new C.dqL(w,d))},
$S:33}
C.dqL.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dqR.prototype={
$1(d){var w=null
return A.qu(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dqT.prototype={
$1(d){var w=this.a
return w.m(new C.dqK(w,d))},
$S:33}
C.dqK.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dqU.prototype={
$0(){var w=this.a
return w.m(new C.dqJ(w))},
$S:0}
C.dqJ.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dqV.prototype={
$0(){var w=this.a
return w.m(new C.dqI(w))},
$S:0}
C.dqI.prototype={
$0(){return++this.a.at},
$S:0}
C.dqW.prototype={
$0(){var w=this.a
return w.m(new C.dqH(w))},
$S:0}
C.dqH.prototype={
$0(){return--this.a.ax},
$S:0}
C.dqX.prototype={
$0(){var w=this.a
return w.m(new C.dqG(w))},
$S:0}
C.dqG.prototype={
$0(){return++this.a.ax},
$S:0}
C.dqY.prototype={
$1(d){var w=this.a
return w.m(new C.dqF(w,d))},
$S:8}
C.dqF.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dqQ.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.dqZ.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bP.j(0.18)
else w=q.c.a?B.e1:B.c
v=A.m(12)
if(p)u=B.bP
else u=(q.c.a?B.e6:B.bO).j(0.85)
u=A.I(u,B.r,p?1.5:1)
if(p)t=B.bP
else t=q.c.a?B.br:B.bl
t=A.X(f,t,r,r,r,18)
if(p)s=B.bP
else s=q.c.a?B.br:B.bl
return A.E(A.aF(!1,B.a1,!0,r,A.aM(!1,o,!0,A.d9(r,A.x(A.a([t,B.av,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.b7,new A.o(w,r,u,v,r,r,B.n),B.eM,r,r,r,B.jM,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dr_(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah),1)},
$S:z+51}
C.dr_.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dr8.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.cbi.prototype={
$2(d,e){return new A.by(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:96}
C.cbp.prototype={
$1(d){return d.ag()},
$S:z+5}
C.cbq.prototype={
$2(d,e){var w=J.b6(e,new C.cbo(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.by(d,w,x.d2)},
$S:z+53}
C.cbo.prototype={
$1(d){return d.ag()},
$S:z+12}
C.cbk.prototype={
$1(d){return C.akX(A.a2(d,x.N,x.z))},
$S:z+9}
C.cbl.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.cbm.prototype={
$1(d){return C.h8S(A.a2(d,x.N,x.z))},
$S:z+11}
C.cbn.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cbu.prototype={
$1(d){return new A.aGh(d.f.length,d.a,d.b)},
$S:z+55}
C.cbv.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:565}
C.cbr.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.cbs.prototype={
$1(d){return d.cJ8(C.GG(d,this.a))},
$S:z+85}
C.dWB.prototype={
$1(d){return C.u6(d,this.a.a.c)},
$S:z+2}
C.dWC.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dWG.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dWH.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dWy.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b_l(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.ys("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pe(r.c,r.e),$async$$0)
case 4:s.ys(p)
w=5
return A.b(s.JG(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dWz.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b_l(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.ys("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pe(r.c,r.e),$async$$0)
case 4:s.ys(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dWA.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Vm(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.ys("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.ys("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.ys("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.JG(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.ys(B.a.ej(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dWF.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b_k(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.ys("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a3(r,!1).cg(A.e_(new C.dWE(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pe(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dWE.prototype={
$1(d){var w=this.b
return new C.a_r(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.dWD.prototype={
$1(d){return D.hes},
$S:z+58}
C.dWJ.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.dWK.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dWI(w,d)
return new A.D(B.d1,new C.beL(this.b,d.c,d.a,w,null),null)},
$S:1943}
C.dWI.prototype={
$0(){return this.a.XH(this.b.b)},
$S:0}
C.dWt.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dWu.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dWv.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dWw.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dWx.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.dWL.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cU(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a3(this.b,!1).N(s)
return}},
$S:186}
C.dIq.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dIr.prototype={
$0(){return B.d.gI(D.a4f)},
$S:z+60}
C.dIs.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.at(A.X(this.b.d,B.c.j(0.95),w,w,D.d0c,44),w,w,w),w,w,new C.bju(u,t,v,w),B.ax)},
$S:68}
C.fM3.prototype={
$1(d){return A.oZ(new C.fM2(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:140}
C.fM2.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e1:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rN,24)],x.V),o=r?B.e6:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bP.j(0.18)],x.O)
w=A.p(t,D.bQ2,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a9(B.a3,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.au,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.R,o,new A.D(E.ajH,A.B(A.a([w,B.ba,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.br:B.bl,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.E(A.ix(!0,t,e,B.y,D.f20,new C.fM1(this.b,s),20,B.ajg,t,B.ag,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kS,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:112}
C.fM1.prototype={
$2(d,e){var w=null,v=D.a4f[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.e6:B.bO,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.eq,8)],x.V),p=A.m(15),o=A.E(new C.a6k(v.a,!0,w),1),n=s?B.jI:B.j4,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aP:B.au,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a1,!0,w,A.aM(!1,u,!0,A.eF(A.bx(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.br:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.l3,w,w,w)],l),B.aj,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fM0(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah)},
$S:79}
C.fM0.prototype={
$0(){A.a3(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.ciY.prototype={
$0(){return this.a.age(this.b)},
$S:0}
C.fLq.prototype={
$1(d){return D.h9v},
$S:z+61}
C.fSV.prototype={
$1(d){var w=this
return new C.a1c(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fLv.prototype={
$1(d){return new C.Z4(this.a,null)},
$S:z+63}
C.fLu.prototype={
$1(d){return D.hau},
$S:z+64}
C.d2d.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.d2e.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d2c(w,d))},
$S:33}
C.d2c.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d2f.prototype={
$1(d){return this.a.Kg()},
$S:2}
C.d2g.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.d29.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.d2a.prototype={
$1(d){return this.a.Kg()},
$S:2}
C.d2b.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.cAF.prototype={
$0(){},
$S:0}
C.cAL.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.cAM.prototype={
$0(){return this.a.aOA(-1)},
$S:0}
C.cAN.prototype={
$1(d){return this.a.m(new C.cAK())},
$S:2}
C.cAK.prototype={
$0(){},
$S:0}
C.cAO.prototype={
$0(){return this.a.aOA(1)},
$S:0}
C.cAP.prototype={
$1(d){return this.a.m(new C.cAJ())},
$S:2}
C.cAJ.prototype={
$0(){},
$S:0}
C.cAQ.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.e6:B.bO
return A.uq(u,u,B.b_,r,u,new C.cAI(t,d),B.BE,s,w,u,new A.ay(v,1,B.r,-1),B.cd)},
$S:1944}
C.cAI.prototype={
$1(d){var w=this.a
return w.m(new C.cAG(w,this.b))},
$S:8}
C.cAG.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cAR.prototype={
$1(d){return this.a.m(new C.cAH())},
$S:2}
C.cAH.prototype={
$0(){},
$S:0}
C.cAS.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.fbV.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a3(this.b,!1).N(w)},
$S:2}
C.fbW.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.fbX.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a3(this.b,!1).N(w)},
$S:0}
C.fbT.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbzi()
w=w.e
s=A.m(B.o.E(v-1,0,v))
return A.b4(new A.D(D.bAJ,new A.eG(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bvQ(p,v,this.b.a,u,t,r),r,r,B.ax)},
$S:68}
C.fbU.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dB.aw(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.ar(B.aV,B.bP,w)
s.toString
s=A.a([B.b_,s,B.aV],x.O)
return A.aF(!1,B.a1,!0,p,A.aM(!1,v,!0,A.eF(D.eh8,r,new A.o(r,r,A.I(B.c.j(0.4),B.r,1.5),u,r,new A.a9(new A.df(-1.2+t,-0.5),new A.df(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah)},
$S:135}
C.fJX.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:71}
C.eLt.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eLk.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eLl.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eLr.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.dY(new C.eLq(w,this.b),null)},
$S:19}
C.eLq.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e1:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.au,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eP(w,u,new A.D(B.ajz,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bl,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ad,C.heO(new C.eLn(r,e),r.a),B.aA,A.B(A.a([A.E(A.dR(B.di,new C.eLo(d),w),1),B.as,A.E(A.bH(B.UC,new C.eLp(r,d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.aj,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d5,w,new A.b7(t,B.a0),w)},
$S:99}
C.eLn.prototype={
$1(d){return this.b.$1(new C.eLm(this.a,d))},
$S:33}
C.eLm.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eLo.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.eLp.prototype={
$0(){var w=this.a.a
A.a3(this.b,!1).N(w)
return null},
$S:0}
C.eLs.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.ST(this.b)},
$S:0}
C.eLf.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bc3(w)},
$S:0}
C.eLj.prototype={
$1(d){return this.blh(d)},
blh(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Lq(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iR(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eLi.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.S(w).k("Z<1>")
w=A.C(new A.Z(w,new C.eLh(this.b),v),v.k("J.E"))
u.d=t.bc3(w)},
$S:0}
C.eLh.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eLu.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iR(this.b,w)},
$S:0}
C.eLv.prototype={
$1(d){return this.a.bDq(d,this.b)},
$S:z+67}
C.eLg.prototype={
$0(){return this.a.aab(this.b)},
$S:0}
C.fSL.prototype={
$1(d){return new C.ady(this.a,this.b,this.c,null)},
$S:z+68}
C.eLx.prototype={
$0(){return this.a.a_r(this.b)},
$S:0}
C.eLy.prototype={
$0(){return this.a.Q9(this.b)},
$S:0}
C.eLz.prototype={
$0(){return this.a.Eu(this.b)},
$S:0}
C.eLA.prototype={
$0(){return this.a.a_s(this.b)},
$S:0}
C.eLw.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.eLa.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eLb.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eLc.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.eLe.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.q8(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eLd(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eLd.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eLX.prototype={
$2(d,e){return d+e.gx4()},
$S:z+71}
C.eLT.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eLU.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eLE.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e1:B.c,s=A.m(24),r=A.p(v,D.bQu,B.f,v,v,new A.o(B.aw.j(u?0.18:0.08),v,A.I(B.aw.j(0.28),B.r,1),v,v,v,B.a5),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.au,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.br:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aP:B.au
u=u?B.e6:B.bO
w=x.p
return A.eP(v,t,new A.D(B.ye,A.x(A.a([r,B.aL,q,B.N,p,B.d6,A.B(A.a([A.E(A.dR(B.nG,new C.eLC(d),A.dg(v,v,v,v,v,v,v,v,v,o,v,v,B.fb,v,new A.b7(A.m(14),B.a0),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.as,A.E(A.bH(D.fKu,new C.eLD(d),A.bp(B.aw,v,v,v,v,v,B.fb,v,new A.b7(A.m(14),B.a0),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.P,0,B.p),v),v,v,v,v,B.d5,v,new A.b7(s,B.a0),v)},
$S:47}
C.eLC.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.eLD.prototype={
$0(){A.a3(this.a,!1).N(!0)
return null},
$S:0}
C.eLN.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e1:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fW,28)],x.V),g=k?D.d71:B.a3D,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aA,D.eWI,B.av,new A.bL(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cw,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a9(B.ay,B.aD,B.x,g,m,m),B.n),m,m,m,m,E.ajE,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b59(B.b5,B.jc,new C.eLK(v,d),l,"Camera import","Scan QR"),1),B.as,A.E(v.b59(B.cC,Q.yR,new C.eLL(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aw.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.aw.j(0.28),B.r,1)
o=A.p(m,D.bPR,B.f,m,m,new A.o(B.aw.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.au,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bl,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.j,0,B.p),1)
return A.bm(!0,new A.D(B.vS,A.p(m,A.x(A.a([g,new A.D(B.ajA,A.x(A.a([w,B.R,u,B.bv,t,B.R,A.aF(!1,B.a1,!0,m,A.aM(!1,s,!0,A.p(m,A.B(A.a([o,B.ba,n,A.X(B.eD,k?B.br:B.bl,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bB,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eLM(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ah)],f),B.E,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.P,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:26}
C.eLK.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a3(u.b,!1).N(null)
w=2
return A.b(u.a.vA("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eLL.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a3(u.b,!1).N(null)
w=2
return A.b(u.a.vA("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eLM.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a3(u.b,!1).N(null)
w=2
return A.b(u.a.NU(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eLI.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e1:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eX,24)],x.V),k=o?B.e6:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.br:B.bl
u=A.bx(w,new A.a7(48,48,C.aQn(!0,A.m(12),48,P.NL,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aP:B.au,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.AX(v.gx4())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.vS,A.p(q,A.x(A.a([B.R,k,new A.D(D.ajx,A.B(A.a([u,B.ba,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.br:B.bl,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.Bj,r.clU(B.uq,B.aV,new C.eLG(d),p,"QR code or backup file","Transfer project"),r.b29(!0,B.ec,B.aw,new C.eLH(d),p,"Remove from this device","Delete project"),B.R],s),B.m,q,B.e,B.P,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:26}
C.eLG.prototype={
$0(){A.a3(this.a,!1).N("transfer")
return null},
$S:0}
C.eLH.prototype={
$0(){A.a3(this.a,!1).N("delete")
return null},
$S:0}
C.eLJ.prototype={
$1(d){return this.bli(d)},
bli(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Lq(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vO(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eM_.prototype={
$0(){var w=this.a
w.a.bs()
w.m(new C.eLZ(w))},
$S:0}
C.eLZ.prototype={
$0(){return this.a.r++},
$S:0}
C.eM0.prototype={
$0(){var w=this.a
return w.m(new C.eLY(w))},
$S:0}
C.eLY.prototype={
$0(){return this.a.r++},
$S:0}
C.eLB.prototype={
$0(){var w=this.a.c
w.toString
return A.iR(w,null)},
$S:0}
C.eLF.prototype={
$0(){return this.a.cfc(this.b)},
$S:0}
C.eLW.prototype={
$0(){var w=this.a
return w.m(new C.eLV(w,this.b))},
$S:0}
C.eLV.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eLQ.prototype={
$0(){return this.a.vA("scan")},
$S:0}
C.eLR.prototype={
$0(){return this.a.vA("file")},
$S:0}
C.eLS.prototype={
$1(d){return this.a.clV(d,this.b)},
$S:z+72}
C.eLP.prototype={
$0(){return this.a.Ey(this.b)},
$S:0}
C.eLO.prototype={
$0(){return this.a.a_W(this.b,this.c)},
$S:0}
C.cA5.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cA4.prototype={
$1(d){return d.ag()},
$S:z+74}
C.cA2.prototype={
$1(d){return C.hyt(A.a2(d,x.N,x.z))},
$S:z+75}
C.cA3.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fuE.prototype={
$1(d){return d.y===D.kE},
$S:z+2}
C.fTw.prototype={
$1(d){return C.aP6(d,this.a)},
$S:z+2}
C.fsx.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bPu.prototype={
$1(d){return!d.as},
$S:z+1}
C.bPt.prototype={
$1(d){return d.ag()},
$S:z+23}
C.bPq.prototype={
$1(d){return C.h8U(A.a2(d,x.N,x.z))},
$S:z+24}
C.bPr.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bPs.prototype={
$1(d){return J.k(d)},
$S:17}
C.fjv.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+25}
C.ffm.prototype={
$1(d){return C.h_5(A.a2(d,x.N,x.z))},
$S:z+79}
C.ffn.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.ffo.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+25}
C.fLh.prototype={
$1(d){return J.k(d)},
$S:17}
C.fLi.prototype={
$1(d){return d.a},
$S:z+81}
C.fLj.prototype={
$1(d){return d.length!==0},
$S:3}
C.fLk.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.fLl.prototype={
$1(d){return d.ST(null).ag()},
$S:z+82}
C.fTu.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fv7.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fxX.prototype={
$1(d){return C.akX(A.a2(d,x.N,x.z))},
$S:z+9}
C.fxY.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fxZ.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fy_.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fy0.prototype={
$1(d){return C.u6(d,this.a)},
$S:z+2}
C.fL4.prototype={
$1(d){return C.u6(d,this.a)},
$S:z+2}
C.fTp.prototype={
$1(d){return C.akX(A.a2(d,x.N,x.z))},
$S:z+9}
C.fTq.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fTr.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fuP.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fuQ.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fTA.prototype={
$1(d){return!d.as},
$S:z+1}
C.fuj.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fuk.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.ful.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+7}
C.fSW.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fyM.prototype={
$1(d){return d.Q},
$S:z+15}
C.fKY.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fxU.prototype={
$1(d){return C.akX(A.a2(d,x.N,x.z))},
$S:z+9}
C.fxV.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fxW.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fKT.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ffU.prototype={
$1(d){return d.length!==0},
$S:3}
C.ffV.prototype={
$1(d){return C.h8U(A.a2(d,x.N,x.z))},
$S:z+24}
C.ffW.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.ffX.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.ffY.prototype={
$1(d){return d.length!==0},
$S:3}
C.fga.prototype={
$2(d,e){return d.eW(new C.fgb(e))},
$S:1945}
C.fgb.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.c6},
$S:1946}
C.fg7.prototype={
$1(d){return C.hUG(d,this.a)},
$S:z+84}
C.fg8.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fg9.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fkb.prototype={
$1(d){return d.a},
$S:z+56}
C.fkc.prototype={
$1(d){return d.length!==0},
$S:3}
C.fkd.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fmT.prototype={
$1(d){return d.ag()},
$S:z+5}
C.frR.prototype={
$1(d){return C.hkl(d,C.GG(d,this.a))},
$S:z+5}
C.frS.prototype={
$1(d){return C.hkm(d,C.GG(d,this.a))},
$S:z+5};(function aliases(){var w=C.aAa.prototype
w.bsN=w.t
w=C.ayk.prototype
w.bsI=w.t
w=C.aFu.prototype
w.bt6=w.t
w=C.aLx.prototype
w.bvz=w.t
w=C.aNz.prototype
w.bxO=w.t
w=C.aNA.prototype
w.bxP=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aD6.prototype,"gciQ","ciR",28)
var r
w(r=C.aA9.prototype,"gcbN","cbO",65)
v(r,"gaMQ","Ns",0)
v(r,"gcr9","AP",0)
v(r,"gbL8","O6",0)
v(r,"gcFg","yt",0)
v(r,"gckS","a0D",0)
v(r,"gbGz","NQ",0)
v(r,"gbLy","X9",0)
w(r,"gbQs","bQt",78)
v(r,"gbAX","zS",0)
v(C.aAb.prototype,"gcFc","Fp",0)
v(r=C.akQ.prototype,"gbpd","bpe",3)
v(r,"gbp8","bp9",3)
v(r,"gcGh","cGi",3)
u(r,"gnX","jd",0)
u(r=C.aj0.prototype,"geT","hj",3)
w(r,"gc7X","c7Y",27)
u(C.atr.prototype,"gnX","jd",0)
v(r=C.axl.prototype,"gcRB","cRC",3)
u(r,"gnX","jd",0)
u(r=C.akT.prototype,"geT","hj",3)
u(r,"gks","cFP",3)
u(C.akV.prototype,"gnX","jd",0)
u(r=C.aku.prototype,"gcWb","jP",3)
u(r,"gnX","jd",0)
v(r=C.akR.prototype,"gcFE","cFF",3)
u(r,"gbn8","ju",3)
v(r=C.aDF.prototype,"gafR","vP",0)
v(r,"gces","a_N",0)
v(r,"gaQU","I2",0)
v(r=C.aDC.prototype,"gcBm","a2M",0)
v(r,"gafR","vP",0)
v(r,"gcp9","a1h",0)
v(r,"gcen","b0m",3)
v(r,"gcfp","a00",0)
w(r,"gcbH","cbI",35)
v(r,"gbLq","I7",0)
v(r,"gcCn","cCo",3)
v(r,"gc29","YP",0)
w(r,"gcab","cac",36)
v(r,"gceb","cec",3)
v(r=C.aC5.prototype,"gc80","PJ",0)
v(r,"gc82","c83",3)
v(r,"gbI3","a9O",0)
v(r=C.aDE.prototype,"gbOV","XD",0)
v(r,"gbZp","Yh",0)
v(r,"gcvB","a29",0)
v(r,"gcrK","a1L",0)
v(C.aDD.prototype,"gcrs","ahA",0)
v(C.asF.prototype,"gca9","a_p",0)
v(C.ayT.prototype,"ga2v","Kg",3)
v(C.ayS.prototype,"ga2v","Kg",3)
v(C.axz.prototype,"ga2v","Kg",3)
v(r=C.aF5.prototype,"gb1y","QF",0)
v(r,"gbzL","VR",0)
v(r,"gcfd","cfe",3)
w(C.aF4.prototype,"gcb1","cb2",69)
t(C.aF6.prototype,"gaQO",0,0,null,["$1","$0"],["I1","bJk"],70,0,0)
s(C,"hrI","i3x",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aD,[C.aou,C.um,C.nj,C.HP,C.aeJ,C.K7,C.un,C.bQ0,C.vd,C.eQt,C.bQ_,C.acR,C.lg,C.bP1,C.aXx,C.asR,C.z9,C.ajL,C.M4,C.b8H,C.a90,C.bfP,C.aeQ,C.ayz,C.azP,C.Kf,C.FY,C.beJ,C.aJc,C.apL,C.daV,C.lI,C.aTm,C.aTl,C.aRk,C.tV,C.r8,C.lq,C.hU,C.kJ,C.aHb])
u(A.hK,[C.fCz,C.fCy,C.fCA,C.fLX,C.fqC,C.fqD,C.fqI,C.fAi,C.fAh,C.fAg,C.c4L,C.fMt,C.fMl,C.fMx,C.fuX,C.dJ6,C.dJ1,C.dJ2,C.dIF,C.dIB,C.dJl,C.dJm,C.dJf,C.dJg,C.dJn,C.dJo,C.fvA,C.fxR,C.fxS,C.fL2,C.fTo,C.fuO,C.fLB,C.da7,C.d9u,C.d9D,C.d9U,C.d9z,C.d9F,C.d9w,C.d9J,C.d9K,C.d9I,C.d9Z,C.d9Y,C.dbT,C.dbU,C.dbV,C.dal,C.daq,C.dap,C.cIS,C.cIU,C.d1r,C.d1Q,C.d1R,C.d1U,C.d1W,C.d1X,C.d1Y,C.d2_,C.d20,C.bOM,C.bOG,C.fjT,C.fTh,C.fTi,C.fTj,C.fTe,C.fTk,C.fTl,C.fTm,C.fTd,C.fw8,C.fyH,C.fK9,C.fsz,C.fyL,C.bJR,C.fTG,C.fKz,C.bI5,C.bI0,C.bI2,C.bI1,C.ckz,C.cku,C.ckv,C.ckt,C.ckr,C.ckw,C.cJW,C.czv,C.czy,C.czw,C.czz,C.czA,C.dV9,C.dV6,C.dV7,C.dV5,C.dVb,C.bPh,C.bP7,C.bZ6,C.bMW,C.bP0,C.bP_,C.bOW,C.bOX,C.bOY,C.bOZ,C.dWP,C.dWe,C.dW9,C.dVB,C.dVR,C.dVU,C.dVQ,C.dVP,C.dW5,C.dW6,C.dW0,C.dVp,C.dWh,C.dWb,C.dVr,C.dVs,C.dVt,C.dVy,C.dVw,C.dVv,C.dVL,C.dVM,C.dVG,C.dWo,C.dWk,C.daw,C.dax,C.fvE,C.fvF,C.fvG,C.fvC,C.fvD,C.fvJ,C.fvK,C.fvL,C.fvH,C.fvI,C.daQ,C.daG,C.daB,C.daL,C.daM,C.daP,C.daD,C.daS,C.daT,C.daU,C.fcA,C.eOj,C.dqD,C.dqN,C.dqO,C.dqP,C.dqS,C.dqR,C.dqT,C.dqY,C.dqZ,C.cbp,C.cbo,C.cbk,C.cbl,C.cbm,C.cbn,C.cbu,C.cbr,C.cbs,C.dWB,C.dWE,C.dWD,C.dWK,C.dWL,C.dIq,C.fM3,C.fLq,C.fSV,C.fLv,C.fLu,C.d2e,C.d2f,C.d2a,C.cAN,C.cAP,C.cAQ,C.cAI,C.cAR,C.fbV,C.fJX,C.eLr,C.eLn,C.eLj,C.eLh,C.eLv,C.fSL,C.eLE,C.eLN,C.eLI,C.eLJ,C.eLS,C.cA4,C.cA2,C.cA3,C.fuE,C.fTw,C.fsx,C.bPu,C.bPt,C.bPq,C.bPr,C.bPs,C.ffm,C.ffn,C.fLh,C.fLi,C.fLj,C.fLk,C.fLl,C.fTu,C.fv7,C.fxX,C.fxY,C.fy_,C.fy0,C.fL4,C.fTp,C.fTq,C.fTr,C.fuP,C.fuQ,C.fTA,C.fuj,C.fuk,C.fSW,C.fyM,C.fKY,C.fxU,C.fxV,C.fKT,C.ffU,C.ffV,C.ffW,C.ffX,C.ffY,C.fgb,C.fg7,C.fg8,C.fkb,C.fkc,C.fmT,C.frR,C.frS])
u(A.av,[C.aYR,C.akO,C.aUA,C.YK,C.bap,C.PV,C.a5v,C.uo,C.DV,C.beH,C.bio,C.bw2,C.blB,C.adc,C.bin,C.adb,C.bim,C.aC6,C.aIe,C.add,C.FU,C.beI,C.act,C.beG,C.beL,C.aYP,C.asF,C.ady])
u(A.mT,[C.bb1,C.bce,C.bc5,C.aH6,C.bht,C.bmQ,C.aUF,C.bb2,C.aA8,C.bay,C.bh9,C.be9,C.beK,C.bdO,C.bju,C.bvQ])
u(A.jc,[C.fMq,C.fMr,C.fMs,C.fMj,C.fMk,C.fMv,C.fMw,C.dJi,C.dJ4,C.dJ7,C.dIM,C.dIN,C.dIO,C.dIL,C.dIT,C.dIK,C.dIU,C.dIV,C.dIJ,C.dIW,C.dII,C.dIX,C.dIH,C.dIY,C.dIz,C.dIA,C.dIG,C.dIZ,C.dIE,C.dJ_,C.dID,C.dIP,C.dIC,C.dIQ,C.dIy,C.dIR,C.dIS,C.dJj,C.dJk,C.dJ8,C.dJ9,C.dJa,C.dJb,C.dJc,C.dJd,C.dJe,C.dJq,C.dJh,C.fvB,C.d9s,C.d9q,C.d9r,C.d9t,C.da6,C.d9W,C.d9T,C.d9v,C.d9X,C.d9B,C.d9C,C.d9E,C.d9V,C.d9A,C.d9G,C.da3,C.d9Q,C.d9P,C.d9R,C.d9S,C.d9L,C.d9N,C.d9O,C.d9H,C.da_,C.da2,C.d9x,C.d9y,C.dbS,C.dbR,C.dbQ,C.dbP,C.dbW,C.dbO,C.dbX,C.dam,C.dan,C.dao,C.dar,C.dak,C.daj,C.cIT,C.d1q,C.d1D,C.d1C,C.d1S,C.d1B,C.d1T,C.d1A,C.d1z,C.d1V,C.d1y,C.d1L,C.d1K,C.d21,C.bOF,C.bOP,C.bOH,C.bOI,C.bOL,C.bOK,C.bON,C.bOO,C.bOJ,C.bOD,C.bOE,C.bPS,C.bPT,C.bPU,C.bPV,C.bPW,C.bPX,C.bPY,C.fTg,C.fKa,C.bI4,C.bI_,C.bHY,C.bHZ,C.bHX,C.ckB,C.ckC,C.ckA,C.ckD,C.ckF,C.ckG,C.ckH,C.ckx,C.czu,C.czD,C.czE,C.czF,C.czC,C.czG,C.czH,C.czI,C.czJ,C.czx,C.czB,C.bP4,C.dV8,C.dVa,C.dV3,C.dV4,C.dV2,C.dVc,C.dVd,C.dVe,C.dVh,C.dVi,C.dVj,C.dVk,C.dVl,C.dVm,C.dVn,C.dVo,C.dVf,C.dVg,C.bPg,C.bPf,C.bP6,C.bP5,C.bPc,C.bPd,C.bP9,C.bPa,C.bPb,C.bP8,C.bPm,C.bPn,C.bPo,C.bPp,C.bPk,C.bPl,C.bZc,C.bZd,C.bZe,C.bZb,C.bZ8,C.bZ9,C.bZa,C.bZ7,C.bN0,C.bN1,C.bN_,C.bMX,C.bMY,C.bMZ,C.bMT,C.bMV,C.bOQ,C.bOR,C.bOV,C.bOU,C.bOT,C.bOS,C.dWO,C.dWN,C.dWQ,C.dWR,C.dWS,C.dWM,C.dWU,C.dWT,C.dWc,C.dWd,C.dWf,C.dVC,C.dVT,C.dVS,C.dVV,C.dW8,C.dVO,C.dVZ,C.dW_,C.dVY,C.dVW,C.dVX,C.dW1,C.dW2,C.dW3,C.dW7,C.dVq,C.dWa,C.dVu,C.dVx,C.dVz,C.dWg,C.dVF,C.dVD,C.dVH,C.dVI,C.dVE,C.dVJ,C.dVN,C.dWp,C.dWq,C.dWi,C.dWl,C.dWm,C.dWn,C.dWs,C.dWj,C.dVA,C.dav,C.dau,C.daz,C.daJ,C.daA,C.eOi,C.dqE,C.dqB,C.dqC,C.dqM,C.dqL,C.dqK,C.dqU,C.dqJ,C.dqV,C.dqI,C.dqW,C.dqH,C.dqX,C.dqG,C.dqF,C.dqQ,C.dr_,C.dr8,C.dWC,C.dWG,C.dWH,C.dWy,C.dWz,C.dWA,C.dWF,C.dWJ,C.dWI,C.dWt,C.dWu,C.dWv,C.dWw,C.dWx,C.dIr,C.fM0,C.ciY,C.d2d,C.d2c,C.d2g,C.d29,C.d2b,C.cAF,C.cAL,C.cAM,C.cAK,C.cAO,C.cAJ,C.cAG,C.cAH,C.cAS,C.fbW,C.fbX,C.eLt,C.eLk,C.eLl,C.eLm,C.eLo,C.eLp,C.eLs,C.eLf,C.eLi,C.eLu,C.eLg,C.eLx,C.eLy,C.eLz,C.eLA,C.eLw,C.eLa,C.eLb,C.eLc,C.eLe,C.eLd,C.eLT,C.eLU,C.eLC,C.eLD,C.eLK,C.eLL,C.eLM,C.eLG,C.eLH,C.eM_,C.eLZ,C.eM0,C.eLY,C.eLB,C.eLF,C.eLW,C.eLV,C.eLQ,C.eLR,C.eLP,C.eLO])
u(A.ag,[C.aoG,C.SW,C.Zs,C.Zw,C.Zu,C.Z2,C.akP,C.aj_,C.atq,C.axk,C.Vj,C.akS,C.akU,C.ana,C.akt,C.SX,C.apO,C.apI,C.a_6,C.apM,C.a_r,C.a_s,C.a6k,C.Z4,C.Z3,C.YB,C.a1c,C.FK,C.axs,C.asE,C.asy,C.asD,C.Oh])
u(A.ah,[C.aD6,C.beE,C.aA9,C.beZ,C.aAb,C.bcc,C.aAa,C.ayk,C.aFu,C.axl,C.bjN,C.akT,C.akV,C.aXw,C.aku,C.akR,C.aDF,C.aDC,C.aC5,C.aDE,C.aDD,C.bjO,C.aLx,C.ayT,C.ayS,C.axz,C.bvT,C.aNz,C.aNA,C.aF5,C.bl6,C.aF4,C.bxz])
u(A.ka,[C.dJ3,C.dJ5,C.dJ0,C.dJp,C.fxT,C.bOC,C.da5,C.da4,C.d9M,C.da0,C.da1,C.das,C.bPZ,C.bPR,C.bP2,C.bP3,C.fTf,C.fTF,C.bI3,C.ckE,C.cky,C.cks,C.bPe,C.bMS,C.bMU,C.dW4,C.dVK,C.dWr,C.daI,C.daH,C.daF,C.daK,C.daN,C.daO,C.day,C.daC,C.daE,C.daR,C.cbi,C.cbq,C.cbv,C.dIs,C.fM2,C.fM1,C.fbT,C.fbU,C.eLq,C.eLX,C.cA5,C.fjv,C.ffo,C.fxZ,C.ful,C.fxW,C.fga,C.fg9,C.fkd])
u(A.lX,[C.a0J,C.aeS,C.ZU,C.aby,C.aJU,C.HQ,C.akW,C.cA6,C.cA7])
t(C.akQ,C.aAa)
t(C.aj0,C.ayk)
t(C.atr,C.aFu)
t(C.bjv,C.aLx)
t(C.bvR,C.aNz)
t(C.bvS,C.aNA)
t(C.aF6,C.bxz)
t(C.b8U,A.b8I)
t(C.bvU,A.a6_)
t(C.b8T,C.bvU)
w(C.aAa,A.co)
w(C.ayk,A.co)
w(C.aFu,A.eN)
w(C.aLx,A.eN)
w(C.aNz,A.co)
w(C.aNA,A.co)
v(C.bxz,A.ez)
v(C.bvU,A.j6)})()
A.jk(b.typeUniverse,JSON.parse('{"aYR":{"av":[],"v":[]},"bb1":{"aC":[]},"aoG":{"ag":[],"v":[]},"aD6":{"ah":["aoG"]},"SW":{"ag":[],"v":[]},"akO":{"av":[],"v":[]},"aUA":{"av":[],"v":[]},"beE":{"ah":["SW"]},"Zs":{"ag":[],"v":[]},"Zw":{"ag":[],"v":[]},"Zu":{"ag":[],"v":[]},"Z2":{"ag":[],"v":[]},"aA9":{"ah":["Zs"]},"beZ":{"ah":["Zw"]},"aAb":{"ah":["Zu"]},"YK":{"av":[],"v":[]},"bce":{"aC":[]},"bc5":{"aC":[]},"bcc":{"ah":["Z2"]},"aH6":{"aC":[]},"bht":{"aC":[]},"bap":{"av":[],"v":[]},"akP":{"ag":[],"v":[]},"akQ":{"ah":["akP"]},"bmQ":{"aC":[]},"aUF":{"aC":[]},"aj_":{"ag":[],"v":[]},"atq":{"ag":[],"v":[]},"axk":{"ag":[],"v":[]},"aj0":{"ah":["aj_"]},"bb2":{"aC":[]},"PV":{"av":[],"v":[]},"aA8":{"aC":[]},"atr":{"ah":["atq"]},"bay":{"aC":[]},"axl":{"ah":["axk"]},"Vj":{"ag":[],"v":[]},"akS":{"ag":[],"v":[]},"akU":{"ag":[],"v":[]},"ana":{"ag":[],"v":[]},"akt":{"ag":[],"v":[]},"SX":{"ag":[],"v":[]},"a5v":{"av":[],"v":[]},"bh9":{"aC":[]},"uo":{"av":[],"v":[]},"DV":{"av":[],"v":[]},"bjN":{"ah":["Vj"]},"akT":{"ah":["akS"]},"akV":{"ah":["akU"]},"aXw":{"ah":["ana"]},"be9":{"aC":[]},"aku":{"ah":["akt"]},"akR":{"ah":["SX"]},"apO":{"ag":[],"v":[]},"apI":{"ag":[],"v":[]},"a_6":{"ag":[],"v":[]},"add":{"av":[],"v":[]},"aDF":{"ah":["apO"]},"aDC":{"ah":["apI"]},"beH":{"av":[],"v":[]},"beK":{"aC":[]},"bio":{"av":[],"v":[]},"bdO":{"aC":[]},"bw2":{"av":[],"v":[]},"blB":{"av":[],"v":[]},"aC5":{"ah":["a_6"]},"adc":{"av":[],"v":[]},"bin":{"av":[],"v":[]},"adb":{"av":[],"v":[]},"bim":{"av":[],"v":[]},"aC6":{"av":[],"v":[]},"aIe":{"av":[],"v":[]},"FU":{"av":[],"v":[]},"apM":{"ag":[],"v":[]},"a_r":{"ag":[],"v":[]},"a_s":{"ag":[],"v":[]},"aDE":{"ah":["apM"]},"beI":{"av":[],"v":[]},"act":{"av":[],"v":[]},"beG":{"av":[],"v":[]},"beL":{"av":[],"v":[]},"aDD":{"ah":["a_r"]},"bjO":{"ah":["a_s"]},"aYP":{"av":[],"v":[]},"a6k":{"ag":[],"v":[]},"bjv":{"ah":["a6k"]},"bju":{"aC":[]},"asF":{"av":[],"v":[]},"Z4":{"ag":[],"v":[]},"Z3":{"ag":[],"v":[]},"YB":{"ag":[],"v":[]},"a1c":{"ag":[],"v":[]},"ayT":{"ah":["Z4"]},"ayS":{"ah":["Z3"]},"axz":{"ah":["YB"]},"bvT":{"ah":["a1c"]},"FK":{"ag":[],"v":[]},"axs":{"ag":[],"v":[]},"bvR":{"ah":["FK"]},"bvS":{"ah":["axs"]},"bvQ":{"aC":[]},"asE":{"ag":[],"v":[]},"aF5":{"ah":["asE"]},"ady":{"av":[],"v":[]},"asy":{"ag":[],"v":[]},"asD":{"ag":[],"v":[]},"bl6":{"ah":["asy"]},"aF4":{"ah":["asD"]},"Oh":{"ag":[],"v":[]},"aF6":{"ah":["Oh"],"ez":[]},"b8T":{"j6":[],"fg":[]}}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.aw
return{e2:w("aRk"),cq:w("m6"),Q:w("r8"),r:w("bu<n,n>"),c5:w("aTl"),dY:w("aTm"),fH:w("M4"),de:w("ajL"),dN:w("Mb<H>"),gc:w("DK<H>"),A:w("eE<n?>"),e:w("HP"),B:w("nj"),P:w("hU"),df:w("lg"),k:w("kJ"),x:w("aA<~>"),W:w("O<a39>"),V:w("O<ac>"),C:w("O<r8>"),O:w("O<u>"),c:w("O<M4>"),b:w("O<ajL>"),ac:w("O<eE<n?>>"),I:w("O<nj>"),u:w("O<hU>"),J:w("O<lg>"),_:w("O<kJ>"),cl:w("O<aA<ai<a8<n,@>>>>"),R:w("O<nl>"),eU:w("O<ai<+(L,L)>>"),ez:w("O<a8<n,aD>>"),gE:w("O<a8<n,n>>"),Y:w("O<a8<n,@>>"),gl:w("O<aXx>"),fD:w("O<mA>"),bp:w("O<on>"),g:w("O<t>"),ar:w("O<asR>"),v:w("O<h9>"),gy:w("O<a90>"),L:w("O<+(n,n)>"),G:w("O<+(L,L)>"),bi:w("O<+(L,~())>"),bd:w("O<+(n,H,R)>"),bF:w("O<+count,id,name(H,n,n)>"),E:w("O<cS>"),s:w("O<n>"),cF:w("O<as>"),aS:w("O<iU>"),dT:w("O<b8H>"),p:w("O<v>"),F:w("O<fg>"),D:w("O<lq>"),Z:w("O<ayz>"),cy:w("O<azP>"),cC:w("O<bfP>"),fp:w("O<K7>"),M:w("O<Kf>"),gZ:w("O<aHb>"),h:w("O<aeJ>"),e4:w("O<aeQ>"),dE:w("O<aJc>"),n:w("O<L>"),t:w("O<H>"),dS:w("O<aC?>"),d4:w("O<n?>"),eF:w("cz<ah<ag>>"),d:w("ai<nj>"),do:w("ai<hU>"),cg:w("ai<lg>"),ax:w("ai<kJ>"),fO:w("ai<a8<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),dy:w("ai<n>"),er:w("ai<as>"),gk:w("ai<lq>"),j:w("ai<@>"),fK:w("by<n,n>"),d2:w("by<n,ai<a8<n,@>>>"),a:w("a8<n,@>"),f:w("a8<@,@>"),gv:w("N<n,HR>"),cM:w("N<H,n>"),w:w("iE"),g2:w("rs"),bV:w("aou"),fL:w("ct"),K:w("aD"),dc:w("h9"),fo:w("OD<H>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(R,H)"),d9:w("+dx,hidden(L,ai<hU>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),fT:w("jw<hU>"),ec:w("jw<n>"),gW:w("qP<L>"),X:w("bn<L>"),bW:w("dK"),gj:w("cs<n>"),b4:w("cs<H>"),cI:w("jO<n>"),av:w("Z<z9>"),U:w("Z<n>"),l:w("v"),gF:w("fg"),fA:w("lq"),cc:w("FY"),bw:w("adb<n?>"),fx:w("Kh"),q:w("n4"),y:w("R"),i:w("L"),z:w("@"),S:w("H"),eK:w("ai<kJ>?"),m:w("apL?"),cT:w("t?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),he:w("+qrPayload,token,usesRemaining(n,n,H)?"),gG:w("+members,trees,viewOnly(H,H,R)?"),az:w("q4?"),T:w("n?"),aD:w("dK?"),o:w("lq?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b_F=new A.bk(B.hu,B.bH,B.hu,B.bH)
D.abt=new A.bk(B.hu,B.iB,B.hu,B.iB)
D.b_S=new A.bk(B.iC,B.bH,B.bH,B.bH)
D.b_W=new A.ay(B.cN,1.4,B.r,-1)
D.b05=new A.ay(B.ae,1,B.r,-1)
D.b1n=new A.aY(140,1/0,0,1/0)
D.b1v=new A.aY(0,1/0,64,1/0)
D.b1z=new A.aY(0,84,0,1/0)
D.b1P=new A.aY(130,1/0,0,1/0)
D.azn=w([B.lY,B.r7,B.c],x.O)
D.c0z=new A.a9(B.ay,B.aD,B.x,D.azn,null,null)
D.b2k=new A.o(null,null,null,null,null,D.c0z,B.n)
D.d6w=w([B.aV,B.bP],x.O)
D.c2G=new A.a9(B.b3,B.b6,B.x,D.d6w,null,null)
D.b2F=new A.o(null,null,null,null,null,D.c2G,B.n)
D.WI=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fG=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.daa=w([B.du,D.WI,D.fG],x.O)
D.c_L=new A.a9(B.b3,B.b6,B.x,D.daa,null,null)
D.b3p=new A.o(null,null,null,null,null,D.c_L,B.n)
D.fcD=new A.F(!0,B.bU,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMX=new A.y("?",null,D.fcD,null,null,null,null,null,null,null,null,null)
D.b72=new A.ci(B.A,null,null,D.fMX,null)
D.JP=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvl=new A.y("\ud83c\udf33",null,D.JP,null,null,null,null,null,null,null,null,null)
D.acN=new A.ci(B.A,null,null,D.fvl,null)
D.fxT=new A.y("\ud83c\udfc6",null,Ao.JB,null,null,null,null,null,null,null,null,null)
D.b7b=new A.ci(B.A,null,null,D.fxT,null)
D.fsL=new A.y("\ud83e\ude98",null,B.ve,null,null,null,null,null,null,null,null,null)
D.b7f=new A.ci(B.A,null,null,D.fsL,null)
D.b92=new A.fi(null,null,null,null,null,E.k6,null,null,null,null)
D.acP=new A.ci(B.A,null,null,D.b92,null)
D.kw=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fdb=new A.F(!0,D.kw,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx_=new A.y("No books on the shelf yet.",null,D.fdb,null,null,null,null,null,null,null,null,null)
D.eh9=new A.D(B.o6,D.fx_,null)
D.b7r=new A.ci(B.A,null,null,D.eh9,null)
D.fqJ=new A.y("\ud83e\ude98",null,D.JP,null,null,null,null,null,null,null,null,null)
D.b7Q=new A.ci(B.A,null,null,D.fqJ,null)
D.aSK=new A.y("\ud83e\uddfa",null,D.JP,null,null,null,null,null,null,null,null,null)
D.b88=new A.ci(B.A,null,null,D.aSK,null)
D.fpN=new A.y("Every drum is matched!",null,B.oC,null,null,null,null,null,null,null,null,null)
D.b8d=new A.ci(B.A,null,null,D.fpN,null)
D.fAl=new A.y("\ud83c\udfad",null,D.JP,null,null,null,null,null,null,null,null,null)
D.b8l=new A.ci(B.A,null,null,D.fAl,null)
D.b8o=new A.ci(B.A,null,null,A5.Wx,null)
D.ad9=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.bal=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.baz=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.baE=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.baP=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.baY=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lr=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bb0=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bb5=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.kW=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bbD=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.adH=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bbM=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bc5=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bc8=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bce=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bcl=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.adP=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.WT=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.adS=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bcD=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.pH=new A.u(1,0.8392156862745098,0.1568627450980392,0.1568627450980392,B.q)
D.bcY=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.ae2=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bdj=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bdz=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bdW=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.be4=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.EU=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.beo=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bet=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.aer=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.beM=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.beR=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.beX=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.aeu=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bfv=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bfC=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bfE=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.aeJ=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bgk=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.af5=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bhd=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.afi=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bhz=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.bhF=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bhO=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bhQ=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.afm=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bi7=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bi8=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bib=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.aft=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.XA=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.biu=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.biO=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.biT=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.afE=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.biY=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.bja=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bjg=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bjh=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.Fd=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bk0=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bkL=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.r3=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bkV=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bkZ=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.agh=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.blh=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.agr=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.XW=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.agt=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bmr=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bmP=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bmY=new A.u(1,1,0.8235294117647058,0.2901960784313726,B.q)
D.agP=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.bn6=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bnm=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.Y8=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bnA=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bnR=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.Yc=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bnW=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.bo0=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.aha=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.boG=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.boN=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.boV=new A.u(1,1,0.9529411764705882,0.8235294117647058,B.q)
D.frk=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.btt=new A.eE(null,D.frk,B.f1,null,x.A)
D.fAd=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.btv=new A.eE(null,D.fAd,B.f1,null,x.A)
D.bu_=new A.b9(3e4)
D.bu3=new A.b9(38e5)
D.buN=new A.ii(0,10,0,10)
D.buW=new A.Q(0,1,0,0)
D.bv5=new A.ii(0,4,0,4)
D.bv8=new A.Q(0,4,5,0)
D.bvo=new A.Q(10,10,14,10)
D.bvA=new A.ii(10,4,10,4)
D.bvI=new A.ii(10,8,10,8)
D.bvJ=new A.Q(10,8,8,8)
D.bw9=new A.Q(12,6,12,2)
D.bwo=new A.Q(14,0,14,6)
D.bws=new A.Q(14,10,6,6)
D.bwt=new A.Q(14,12,14,0)
D.bwx=new A.Q(14,12,14,8)
D.bwA=new A.Q(14,12,8,14)
D.bwE=new A.ii(14,14,14,14)
D.bwU=new A.Q(14,6,14,40)
D.bwX=new A.Q(14,8,14,30)
D.bxj=new A.Q(16,2,16,10)
D.bxt=new A.Q(16,6,16,16)
D.bxu=new A.Q(16,6,16,30)
D.bxw=new A.Q(16,6,16,8)
D.bxK=new A.Q(18,10,18,4)
D.bxM=new A.Q(18,12,18,0)
D.bxT=new A.Q(18,14,12,4)
D.ajx=new A.Q(18,16,18,8)
D.by9=new A.Q(18,20,18,22)
D.ajB=new A.Q(18,24,18,24)
D.byf=new A.Q(18,30,18,30)
D.byx=new A.Q(20,10,12,20)
D.byA=new A.Q(20,11,20,11)
D.byL=new A.Q(20,18,16,18)
D.byN=new A.Q(20,18,20,6)
D.bzC=new A.Q(24,32,24,28)
D.bzD=new A.Q(24,36,24,32)
D.bzH=new A.Q(26,26,24,14)
D.bzW=new A.Q(2,4,2,8)
D.bA_=new A.Q(30,0,30,0)
D.bAa=new A.Q(38,22,22,22)
D.ajV=new A.Q(40,24,24,24)
D.bAc=new A.ii(40,40,40,40)
D.bAe=new A.Q(46,30,30,30)
D.ajY=new A.Q(4,0,0,8)
D.bAF=new A.Q(56,40,40,40)
D.bAJ=new A.Q(1.25,1.25,1.25,1.25)
D.bAK=new A.Q(60,0,60,0)
D.bAN=new A.Q(6,14,6,16)
D.bAR=new A.Q(6,4,12,0)
D.bAU=new A.Q(6,6,10,2)
D.bB0=new A.ii(7,3,7,3)
D.bBx=new A.Q(5,1.5,5,1.5)
D.bBI=new A.Q(6,2.5,6,2.5)
D.fI9=new A.y("Family Games",null,B.k1,null,null,null,null,null,null,null,null,null)
D.fpZ=new A.y("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,H.a8X,null,null,null,null,null,null,null,null,null)
D.cBv=w([D.fI9,D.fpZ],x.p)
D.br0=new A.fj(B.ag,B.e,B.j,B.E,null,B.p,null,0,D.cBv,null)
D.bC_=new A.bA(1,B.bd,D.br0,null)
D.fMu=new A.y("Signature",null,B.nF,null,null,null,null,null,null,null,null,null)
D.bC3=new A.bA(1,B.bd,D.fMu,null)
D.fEO=new A.y("MADE BY THE ONE WHO PLANTED THE TREE",null,S.t3,null,null,null,null,null,null,null,null,null)
D.bCC=new A.bA(1,B.bd,D.fEO,null)
D.fJD=new A.y("Tell the AI what to fix",null,B.de,null,null,null,null,null,null,null,null,null)
D.bCT=new A.bA(1,B.bd,D.fJD,null)
D.fkI=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLA=new A.y("Worksheets",null,D.fkI,null,null,null,null,null,null,null,null,null)
D.fkT=new A.F(!0,E.adz,null,null,null,null,13,B.cw,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKs=new A.y("Track your project spending",null,D.fkT,null,null,null,null,null,null,null,null,null)
D.cZk=w([D.fLA,B.av,D.fKs],x.p)
D.bqD=new A.fj(B.ag,B.e,B.j,B.E,null,B.p,null,0,D.cZk,null)
D.bCZ=new A.bA(1,B.bd,D.bqD,null)
D.ffS=new A.F(!0,E.k6,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqw=new A.y("FAMILY LIBRARY",null,D.ffS,null,null,null,null,null,null,null,null,null)
D.bDg=new A.bA(1,B.bd,D.fqw,null)
D.No=new C.HP("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.rj=new C.HQ(0,"male")
D.mG=new C.HQ(1,"female")
D.yn=new C.HQ(2,"unknown")
D.u4=new C.akW(0,"owner")
D.Np=new C.akW(1,"editor")
D.kE=new C.akW(2,"viewer")
D.alE=new A.a1(61199,"MaterialIcons",!1)
D.bIc=new A.a1(61504,"MaterialIcons",!1)
D.bId=new A.a1(61505,"MaterialIcons",!1)
D.bIf=new A.a1(61587,"MaterialIcons",!1)
D.bIm=new A.a1(61890,"MaterialIcons",!1)
D.bJf=new A.a1(63034,"MaterialIcons",!0)
D.bK3=new A.a1(63429,"MaterialIcons",!1)
D.anS=new A.a1(984520,"MaterialIcons",!1)
D.bIL=new A.a1(62776,"MaterialIcons",!1)
D.bMi=new A.ae(D.bIL,26,B.b_,null,null,null)
D.bHa=new A.a1(57648,"MaterialIcons",!1)
D.bMB=new A.ae(D.bHa,14,B.c,null,null,null)
D.bMT=new A.ae(B.Gi,17,null,null,null,null)
D.bMZ=new A.ae(B.a0x,null,B.bP,null,null,null)
D.bNq=new A.ae(E.a0C,null,null,null,null,null)
D.bNt=new A.ae(B.jb,18,E.k6,null,null,null)
D.a0n=new A.a1(62044,"MaterialIcons",!1)
D.bNy=new A.ae(D.a0n,null,B.aV,null,null,null)
D.bNF=new A.ae(B.yy,18,B.c,null,null,null)
D.bOn=new A.ae(B.e3,16,null,null,null,null)
D.bOu=new A.ae(D.a0n,32,B.aV,null,null,null)
D.bOO=new A.ae(E.alF,18,B.cN,null,null,null)
D.bPR=new A.ae(B.Gs,22,B.aw,null,null,null)
D.bQ2=new A.ae(B.e3,22,B.b_,null,null,null)
D.bQe=new A.ae(W.a0s,22,B.c,null,null,null)
D.bQk=new A.ae(B.ug,52,B.c,null,null,null)
D.bQu=new A.ae(B.Gs,30,B.aw,null,null,null)
D.bQN=new A.ae(B.a0I,null,B.c,null,null,null)
D.aou=new A.ae(B.uq,22,B.c,null,null,null)
D.bQX=new A.ae(B.e3,17,null,null,null,null)
D.bRg=new A.ae(B.wc,26,B.cN,null,null,null)
D.bS0=new A.ae(B.a0O,16,null,null,null,null)
D.bSM=new A.ae(B.ug,24,B.c,null,null,null)
D.bSR=new A.ae(B.NR,20,B.rE,null,null,null)
D.bSW=new A.ae(B.Gg,null,B.bP,null,null,null)
D.bT2=new A.ae(B.jb,18,B.c,null,null,null)
D.bTG=new A.ae(B.cx,22,B.ae,null,null,null)
D.bUw=new A.ae(B.ec,16,B.ae,null,null,null)
D.bUI=new A.ae(D.a0n,20,B.aV,null,null,null)
D.aoT=new A.ae(B.hI,20,null,null,null,null)
D.bVc=new A.ae(B.cx,18,D.kw,null,null,null)
D.bVu=new A.ae(B.yI,28,B.c,null,null,null)
D.bVD=new A.ae(B.NH,null,B.f7,null,null,null)
D.bVX=new A.ae(B.yI,24,B.c,null,null,null)
D.bWn=new A.ae(B.ug,null,B.aV,null,null,null)
D.bWo=new A.ae(B.jO,20,B.cN,null,null,null)
D.bWI=new A.ae(B.Gi,16,null,null,null,null)
D.bYf=new A.e3(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jM,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eE,!0,null,null,null,null)
D.apz=new C.a5v(10,null)
D.bYL=new C.a5v(12,null)
D.bYM=new C.a5v(14,null)
D.de1=w([B.bu,B.aV,B.ff,B.b_],x.O)
D.bZX=new A.a9(B.ay,B.aD,B.x,D.de1,null,null)
D.d3x=w([D.lr,D.fG],x.O)
D.c_7=new A.a9(B.ay,B.aD,B.x,D.d3x,null,null)
D.bjO=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bpD=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.cW7=w([D.bjO,D.bpD],x.O)
D.c_8=new A.a9(B.b3,B.b6,B.x,D.cW7,null,null)
D.d8l=w([B.f4,B.fE,B.ff],x.O)
D.c_d=new A.a9(B.ay,B.aD,B.x,D.d8l,null,null)
D.ag7=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bb6=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.cY8=w([D.ag7,D.bb6],x.O)
D.c_M=new A.a9(B.b3,B.b6,B.x,D.cY8,null,null)
D.beC=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.ayG=w([D.beC,D.ag7],x.O)
D.c05=new A.a9(B.ay,B.aD,B.x,D.ayG,null,null)
D.af0=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bh4=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.d7u=w([D.af0,D.bh4],x.O)
D.c0K=new A.a9(B.a3,B.a8,B.x,D.d7u,null,null)
D.dkK=w([B.bx,B.n8],x.O)
D.c0M=new A.a9(B.b3,B.b6,B.x,D.dkK,null,null)
D.bjJ=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dlD=w([D.bjJ,D.kw,D.kw,N.XV],x.O)
D.do3=w([0,0.07,0.9,1],x.n)
D.c1h=new A.a9(B.a3,B.a8,B.x,D.dlD,D.do3,null)
D.c1r=new A.a9(B.ay,B.aD,B.x,B.Rm,null,null)
D.cU0=w([B.aC,D.lr],x.O)
D.c1u=new A.a9(B.a3,B.a8,B.x,D.cU0,null,null)
D.dkj=w([B.b_,B.aV,B.bP],x.O)
D.c2r=new A.a9(B.ay,B.aD,B.x,D.dkj,null,null)
D.c6F=w([10,20,30],x.t)
D.cgC=w([-1,-0.4,0.3,1],x.n)
D.co5=w([B.bu,B.b_,B.f4],x.O)
D.coc=w([B.by,B.aC,B.jo],x.O)
D.coe=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.coV=w([30,140,262,360],x.n)
D.bih=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cuq=w([D.bih,E.afO],x.O)
D.ec2=new A.t(1,2)
D.eZa=new A.cS(B.aW,D.ec2,3)
D.avE=w([D.eZa],x.E)
D.cBK=w([B.hb,B.c9,B.fe],x.O)
D.cEs=w([B.bL,B.bs,B.bn],x.O)
D.bDP=new C.um("classic","Classic leather","Gold-edged brown leather",D.ayG,E.k6,E.k6,"\u2766",B.L,!0,!1,!1,!1)
D.bak=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bov=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d_X=w([D.bak,D.bov],x.O)
D.afS=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bDK=new C.um("ornate","Ornate gold","Double gold border and flourishes",D.d_X,D.afS,D.afS,"\u2726",B.L,!0,!0,!0,!1)
D.bed=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bkz=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.cSY=w([D.bed,D.bkz],x.O)
D.bDJ=new C.um("parchment","Parchment","Old paper with dark ink",D.cSY,D.Fd,I.iJ,"\u2767",B.L,!0,!1,!1,!0)
D.adg=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bmL=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.diC=w([D.adg,D.bmL],x.O)
D.bhL=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bm5=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bDM=new C.um("minimal","Clean paper","Plain and elegant, like a printed book",D.diC,D.bhL,D.bm5,"",B.L,!0,!0,!1,!0)
D.bDO=new C.um("midnight","Midnight","Deep blue with silver stars",H.az_,B.cr,B.bN,"\u2727",B.L,!0,!0,!1,!1)
D.bDI=new C.um("emerald","Emerald library","Green cloth, title on the left",T.aw2,E.k6,B.h0,"\u25c6",B.bi,!0,!1,!1,!1)
D.bnf=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dgL=w([B.ev,D.bnf],x.O)
D.biX=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bk7=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bDN=new C.um("rose","Rose vintage","Burgundy with rose-gold lettering",D.dgL,D.biX,D.bk7,"\u2740",B.L,!0,!1,!0,!1)
D.dlf=w([B.cp,F.n9],x.O)
D.bDL=new C.um("modern","Modern","Dark, bold, left-aligned",D.dlf,B.aR,B.c,"",B.bi,!1,!0,!1,!1)
D.a2O=w([D.bDP,D.bDK,D.bDJ,D.bDM,D.bDO,D.bDI,D.bDN,D.bDL],A.aw("O<um>"))
D.cHp=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dl2=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bE_=new C.lg('What does "Ubuntu" mean?',D.dl2,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.cUD=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bE2=new C.lg("In Swahili, what do we call a grandmother?",D.cUD,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.cUv=w(["Babu","Mama","Baba","Dada"],x.s)
D.bDY=new C.lg("In Swahili, what do we call a grandfather?",D.cUv,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.cVJ=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bE1=new C.lg("What is a sister called in Swahili?",D.cVJ,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d_p=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bDZ=new C.lg("What is a brother called in Swahili?",D.d_p,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.cUu=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bE9=new C.lg("Which word means father in Swahili?",D.cUu,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dm7=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bE8=new C.lg('"Umoja ni nguvu" means...',D.dm7,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.djh=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bEa=new C.lg('"Haba na haba hujaza kibaba" teaches us...',D.djh,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.cYg=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bE7=new C.lg('The African saying "It takes a village to raise a child" means...',D.cYg,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dmq=w(["The elders","The market","The river","The drum"],x.s)
D.bE3=new C.lg("Who is the traditional keeper of the family stories?",D.dmq,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cLz=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bE0=new C.lg("Why do families sit round the fire at night?",D.cLz,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dlh=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bE5=new C.lg('What does "Harambee" mean?',D.dlh,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.d23=w(["An elder","A baby","A market","A cow"],x.s)
D.bE4=new C.lg('"Mzee" is a respectful word for...',D.d23,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dgC=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bE6=new C.lg('What does "Shikamoo" show?',D.dgC,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.avZ=w([D.bE_,D.bE2,D.bDY,D.bE1,D.bDZ,D.bE9,D.bE8,D.bEa,D.bE7,D.bE3,D.bE0,D.bE5,D.bE4,D.bE6],x.J)
D.cSv=w([B.bP,B.bj],x.O)
D.bjz=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.cT9=w([D.adg,D.bjz],x.O)
D.cUA=w([0,0.45,0.72,0.92,1],x.n)
D.be9=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.cUR=w([D.be9,B.dd],x.O)
D.bc0=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.ahk=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.cVp=w([B.du,D.bc0,D.ahk],x.O)
D.cWn=w([B.bc,B.j1,B.oN],x.O)
D.beE=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.blX=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bbH=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.cWs=w([D.beE,D.blX,D.bbH],x.O)
D.cWL=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.cWU=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hbM=new C.acR(78,424,48,44,56)
D.hbK=new C.acR(214,396,34,34,42)
D.hbL=new C.acR(442,452,56,50,64)
D.awV=w([D.hbM,D.hbK,D.hbL],A.aw("O<acR>"))
D.cXp=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bb2=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bgj=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.do_=w([D.af0,D.bb2,D.bgj],x.O)
D.bDQ=new C.un("leather","Leather",D.do_,"vintage")
D.d32=w([B.d8,B.LC,A9.X7],x.O)
D.bDX=new C.un("midnight","Midnight",D.d32,"starry")
D.cWo=w([B.eh,B.dY,B.lt],x.O)
D.bDW=new C.un("forest","Forest",D.cWo,"story")
D.dpY=w([B.el,B.ev,B.kz],x.O)
D.bDT=new C.un("burgundy","Burgundy",D.dpY,"royal")
D.cE0=w([B.aC,B.oP,B.nN],x.O)
D.bDU=new C.un("royal","Royal",D.cE0,"royal")
D.cYL=w([B.bs,B.cp,F.n9],x.O)
D.bDR=new C.un("charcoal","Charcoal",D.cYL,"geo")
D.do7=w([B.ca,B.dD,B.xG],x.O)
D.bDV=new C.un("sunset","Sunset",D.do7,"sunset")
D.doO=w([B.j1,B.Fe,B.Xa],x.O)
D.bDS=new C.un("ocean","Ocean",D.doO,"band")
D.z9=w([D.bDQ,D.bDX,D.bDW,D.bDT,D.bDU,D.bDR,D.bDV,D.bDS],A.aw("O<un>"))
D.cZb=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cZM=w([B.al,B.aJ,B.M],x.O)
D.d01=w([B.ev,B.dY,B.d8,B.h1,B.xJ,B.cN,B.k9,B.e5,B.d9],x.O)
D.d02=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eZb=new A.cS(B.dp,B.dz,8)
D.d0c=w([D.eZb],x.E)
D.d1g=w([B.c8,B.dD,B.kx],x.O)
D.bcS=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bl3=new A.u(1,0.0784313725490196,0.09019607843137255,0.2901960784313726,B.q)
D.bgA=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bku=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.d1v=w([D.bcS,D.bl3,D.bgA,D.bku,D.ahk],x.O)
D.d1L=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d1U=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bau=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bfY=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.d2k=w([D.bau,D.aeu,D.bfY],x.O)
D.d2Y=w([B.c8,B.hl],x.O)
D.d4A=w([B.d4,D.pH,B.j8,D.kW,B.d4],x.O)
D.d58=w([B.aT,B.vC,B.xv],x.O)
D.axU=w(["True","False"],x.s)
D.ey4=new A.z(-0.65,0.6)
D.eK9=new A.z(-0.2,0.95)
D.eL9=new A.z(0.25,0.95)
D.eBr=new A.z(0.7,0.6)
D.eLI=new A.z(1,0.1)
D.d5U=w([An.Tb,D.ey4,D.eK9,D.eL9,D.eBr,D.eLI],x.G)
D.biv=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bon=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bdN=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.d6_=w([D.biv,D.bon,D.bdN],x.O)
D.d63=w([B.bM,B.cs,B.dt,B.aT],x.O)
D.d6x=w([B.i8,B.ca,B.ty],x.O)
D.d71=w([B.f4,B.cN],x.O)
D.d7A=w([B.cZ,B.fu,B.hC],x.O)
D.d7L=w([B.aR,B.bj,B.d8],x.O)
D.d8i=w([B.eo,B.cS,B.dY],x.O)
D.d8B=w([B.dK,B.d8,B.LC],x.O)
D.d8V=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bj7=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bhv=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.d9c=w([D.bj7,D.aer,D.bhv],x.O)
D.d9W=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a3K=w(["leather","linen","plain","stars","rays"],x.s)
D.db7=w([0.5,2,3.6],x.n)
D.dbD=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bLZ=new A.a1(985219,"MaterialIcons",!1)
D.bLx=new A.a1(983781,"MaterialIcons",!1)
D.ayl=w([B.a0x,B.hV,B.m3,B.ie,D.bLZ,B.GD,B.qa,D.bLx,H.anF,B.Ca,B.qc,B.mI],A.aw("O<a1>"))
D.a3O=w(["double","single","corners","none"],x.s)
D.bDF=new C.z9("Little Seed","\ud83c\udf31",0)
D.bDH=new C.z9("Young Listener","\ud83d\udc42",40)
D.bDG=new C.z9("Storyteller","\ud83e\ude98",120)
D.bDE=new C.z9("Village Pride","\ud83c\udfe1",300)
D.bDC=new C.z9("Keeper of Roots","\ud83c\udf33",700)
D.bDD=new C.z9("Elder of the Fire","\ud83d\udd25",1500)
D.aym=w([D.bDF,D.bDH,D.bDG,D.bDE,D.bDC,D.bDD],A.aw("O<z9>"))
D.dcH=w([B.dv,B.bl,B.e5],x.O)
D.dcU=w([],x.C)
D.CK=w([],x.u)
D.aId=new A.t(225,528)
D.ezI=new A.z(D.aId,1)
D.ecI=new A.t(350,548)
D.eFG=new A.z(D.ecI,0.95)
D.aI8=new A.t(158,656)
D.eFC=new A.z(D.aI8,1.12)
D.edq=new A.t(92,544)
D.evo=new A.z(D.edq,0.93)
D.ecJ=new A.t(398,614)
D.eBN=new A.z(D.ecJ,1.04)
D.ecB=new A.t(318,662)
D.eqZ=new A.z(D.ecB,1.1)
D.a3W=w([D.ezI,D.eFG,D.eFC,D.evo,D.eBN,D.eqZ],A.aw("O<+(t,L)>"))
D.deR=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dfa=w(["kahoot","fire","catch","plant","who","memory","order","test"],x.s)
D.dfi=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dgj=w([B.d4,D.pH,B.j8,D.kW,B.d4,B.j8],x.O)
D.dhG=w([B.aE,B.fu,B.h1],x.O)
D.dhY=w([-12,12],x.n)
D.di0=w([-17,17],x.n)
D.djf=w([B.bI,B.n4,B.Y6],x.O)
D.djv=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dCO=new C.lI("construction","Construction","Jobsite & builds",B.yB)
D.dCV=new C.lI("house","Home Build","Houses & rooms",B.w8)
D.dCL=new C.lI("grocery","Grocery","Store & pantry",B.a1m)
D.dCK=new C.lI("calculator","Calculations","Math & estimates",B.O_)
D.dCT=new C.lI("lumber","Materials","Lumber & supplies",B.Oe)
D.dCH=new C.lI("kitchen","Kitchen","Remodel & meals",A0.amS)
D.bLv=new A.a1(983756,"MaterialIcons",!1)
D.dCM=new C.lI("landscape","Landscaping","Yard & garden",D.bLv)
D.dCG=new C.lI("plumbing","Plumbing","Pipes & water",B.qj)
D.dCW=new C.lI("electrical","Electrical","Wiring & power",B.hq)
D.dCE=new C.lI("store","Retail Shop","Daily business",B.l9)
D.dCF=new C.lI("paint_remodel","Paint & Remodel","Colors & walls",Ae.a0U)
D.bKZ=new A.a1(983311,"MaterialIcons",!1)
D.dCS=new C.lI("roofing","Roofing","Roofs & exteriors",D.bKZ)
D.bLH=new A.a1(983986,"MaterialIcons",!1)
D.dCD=new C.lI("warehouse","Warehouse","Storage & stock",D.bLH)
D.dCQ=new C.lI("vehicles","Vehicles","Fleet & transport",B.GE)
D.bIN=new A.a1(62785,"MaterialIcons",!1)
D.dCJ=new C.lI("farm","Farm","Crops & livestock",D.bIN)
D.dCI=new C.lI("restaurant","Restaurant","Food & catering",B.wf)
D.dCP=new C.lI("tools","Tools","Workshop gear",B.GA)
D.dCU=new C.lI("wallet","Cash & Wallet","Quick spending",B.jO)
D.bJZ=new A.a1(63395,"MaterialIcons",!1)
D.dCR=new C.lI("concrete","Concrete","Foundation work",D.bJZ)
D.dCN=new C.lI("blueprint","Blueprint","Plans & design",Ak.am9)
D.a4f=w([D.dCO,D.dCV,D.dCL,D.dCK,D.dCT,D.dCH,D.dCM,D.dCG,D.dCW,D.dCE,D.dCF,D.dCS,D.dCD,D.dCQ,D.dCJ,D.dCI,D.dCP,D.dCU,D.dCR,D.dCN],A.aw("O<lI>"))
D.dk_=w([B.br,B.bl],x.O)
D.dkL=w([B.il,B.nU,B.dJ],x.O)
D.afc=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.ag4=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bhP=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.ba2=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.azu=w([D.afc,D.ag4,D.bhP,D.ba2],x.O)
D.dlT=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a4p=w(["top","middle","bottom"],x.s)
D.dnf=w([B.co,B.bj,B.d8],x.O)
D.azI=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b3S=new A.ac(0,B.G,B.aW,B.J,14)
D.dnx=w([D.b3S],x.V)
D.bn4=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bgO=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dnT=w([D.adP,D.bn4,D.bgO],x.O)
D.dnU=w([B.bm,B.cS,B.dY],x.O)
D.dpT=w([B.bL,B.al],x.O)
D.dpU=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.e9e={top:0,middle:1,bottom:2}
D.dt5=new A.bu(D.e9e,["Top","Middle","Bottom"],x.r)
D.e8T={double:0,single:1,corners:2,none:3}
D.dtb=new A.bu(D.e8T,["Double line","One line","Corners","None"],x.r)
D.e9X={leather:0,linen:1,plain:2,stars:3,rays:4}
D.duE=new A.bu(D.e9X,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.duR=new A.bu(B.hL,[],A.aw("bu<H,+(n,n)>"))
D.e97={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.CW=new A.bu(D.e97,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.aw("bu<n,H>"))
D.dxn=new G.N8(32,null)
D.dxo=new G.N8(40,null)
D.dxp=new G.N8(46,null)
D.aHG=new C.asD(null)
D.ebm=new A.t(0,40)
D.ebn=new A.t(0,412)
D.ebp=new A.t(0,900)
D.ebC=new A.t(10,14)
D.ebF=new A.t(10,-10)
D.ebJ=new A.t(10,-46)
D.ebK=new A.t(10,-58)
D.ebL=new A.t(116,442)
D.ebM=new A.t(11,-1)
D.ebN=new A.t(11,-10)
D.ebO=new A.t(11,-21)
D.aI3=new A.t(11,-60)
D.ebU=new A.t(14,-2)
D.a6k=new A.t(150,592)
D.ebX=new A.t(15,-15)
D.ebY=new A.t(16,-1)
D.ec1=new A.t(190,444)
D.ec4=new A.t(1,5)
D.ecc=new A.t(21,-78)
D.aIe=new A.t(225,574)
D.eck=new A.t(24,-52)
D.ecx=new A.t(300,440)
D.ecA=new A.t(318,476)
D.ecD=new A.t(324,144)
D.a6o=new A.t(332,150)
D.ecF=new A.t(338,140)
D.ecG=new A.t(340,158)
D.a6p=new A.t(36,-24)
D.ecR=new A.t(42,468)
D.ecS=new A.t(431,510)
D.ecT=new A.t(431,520)
D.ecU=new A.t(45,-92)
D.ecV=new A.t(46,20)
D.ecW=new A.t(46,-92)
D.ecX=new A.t(46,-94)
D.ecY=new A.t(47,-4)
D.ecZ=new A.t(48,-4)
D.ed6=new A.t(4,-26)
D.edl=new A.t(8,14)
D.edp=new A.t(8,-76)
D.eds=new A.t(9,-2)
D.edt=new A.t(9,-58)
D.edu=new A.t(9,-79)
D.edv=new A.t(9,-9)
D.ee7=new A.t(16.5,8)
D.ee9=new A.t(3.2,0)
D.eeb=new A.t(-16.5,8)
D.eei=new A.t(16.5,2)
D.eel=new A.t(-3.2,0)
D.eeu=new A.t(9.5,6)
D.eey=new A.t(-10,14)
D.eez=new A.t(-10,-12)
D.eeA=new A.t(-10,-58)
D.eeB=new A.t(-11,-1)
D.eeC=new A.t(-11,-10)
D.eeE=new A.t(-11,-60)
D.eeF=new A.t(-12,-14)
D.eeG=new A.t(-12,-16)
D.eeN=new A.t(-14,-2)
D.eeQ=new A.t(-15,-15)
D.eeR=new A.t(-15,-3)
D.eeT=new A.t(-16,-1)
D.ef9=new A.t(-24,-52)
D.aIA=new A.t(-36,-24)
D.efr=new A.t(-4,-26)
D.eft=new A.t(-4,-6)
D.efC=new A.t(-8,-3)
D.efD=new A.t(-8,-48)
D.efG=new A.t(-9,-2)
D.efI=new A.t(-9,-58)
D.efJ=new A.t(-9,-79)
D.efK=new A.t(-9,-9)
D.efM=new A.t(-9.5,6)
D.eg_=new A.t(-16.5,2)
D.fxA=new A.y("Write a new book",null,B.hx,null,B.L,null,null,null,null,null,null,null)
D.egz=new A.D(B.l1,D.fxA,null)
D.fM3=new A.y("Tap to go on",null,B.v7,null,null,null,null,null,null,null,null,null)
D.egT=new A.D(B.l_,D.fM3,null)
D.ao3=new A.ae(B.hH,18,B.c,null,null,null)
D.fqT=new A.y("Add",null,B.lN,null,null,null,null,null,null,null,null,null)
D.d6h=w([D.ao3,B.qz,D.fqT],x.p)
D.eWP=new A.cb(B.aN,B.e,B.P,B.m,null,B.p,null,0,D.d6h,null)
D.egW=new A.D(B.nm,D.eWP,null)
D.egX=new A.D(E.aip,A5.Wx,null)
D.fkD=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftV=new A.y("New Project",null,D.fkD,null,null,null,null,null,null,null,null,null)
D.dai=w([D.ao3,B.ab,D.ftV],x.p)
D.eWS=new A.cb(B.aN,B.e,B.P,B.m,null,B.p,null,0,D.dai,null)
D.eh8=new A.D(B.iQ,D.eWS,null)
D.fwp=new A.y("Choose your header",null,Z.t1,null,null,null,null,null,null,null,null,null)
D.eht=new A.D(B.hF,D.fwp,null)
D.b9h=new A.fi(2.2,null,null,null,null,B.cN,null,null,null,null)
D.f11=new A.a7(22,22,D.b9h,null)
D.b7n=new A.ci(B.A,null,null,D.f11,null)
D.ehy=new A.D(B.Zh,D.b7n,null)
D.bwO=new A.Q(14,2,14,6)
D.fKb=new A.y("The top of your book. Tap a design to see it.",null,O.v8,null,null,null,null,null,null,null,null,null)
D.ehz=new A.D(D.bwO,D.fKb,null)
D.fvA=new A.y("\ud83c\udfc6 A new record!",null,B.fO,null,null,null,null,null,null,null,null,null)
D.ehA=new A.D(B.l_,D.fvA,null)
D.ej7=new A.iS(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eja=new A.iS(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aJ0=new A.iS(1,0.9607843137254902,0.48627450980392156,0)
D.IJ=new A.iS(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.zJ=new A.iS(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.ejg=new A.iS(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hdB=new C.bht(null)
D.brN=new A.ms(D.hdB,null,B.ax,null,null)
D.aME=new A.cN(0,0,0,0,null,null,D.brN,null)
D.ev3=new A.z("E","Sit by the fire again")
D.eAt=new A.z("C","Good Learner")
D.eDJ=new A.z("D","Still Growing")
D.eI5=new A.z(-42,42)
D.eJn=new A.z("B","Faithful Listener")
D.eLb=new A.z("A","Keeper of the Family")
D.eO4=new A.bj(-17,0.7,0)
D.eOw=new A.bj(-8,0.95,1.3)
D.ePm=new A.bj(18,0.65,5.2)
D.ePo=new A.bj(0,1.15,2.6)
D.ePF=new A.bj(9,0.9,3.9)
D.eRa=new A.cw([0,0,1,1])
D.aO0=new A.a5(0,0,520,160)
D.eU2=new A.a5(14,-64,34,-12)
D.eU5=new A.a5(30,-9,46,1)
D.eU6=new A.a5(4,2,11,14)
D.eU8=new A.a5(-8,-12.5,8,-7)
D.eU9=new A.a5(-16.5,-21,16.5,1)
D.eUa=new A.a5(6,8,10,14)
D.eUd=new A.a5(-6.5,-74,6.5,-58)
D.eUj=new A.a5(-10,8,-6,14)
D.eUk=new A.a5(-11,2,-4,14)
D.eUl=new A.a5(-11,-70,11,-56)
D.eUs=new A.a5(-13,-24,13,-4)
D.eUy=new A.a5(-15,-21,15,0)
D.eUB=new A.a5(-16,-21,16,1)
D.eUC=new A.a5(-16,-21,16,2)
D.eUF=new A.a5(-16,-26,16,-6)
D.eUP=new A.a5(-230,-26,230,26)
D.eVc=new A.a5(-38,-26,12,-6)
D.eVg=new A.a5(-3,-70,3,-63)
D.eVh=new A.a5(-44,-22,44,0)
D.eVj=new A.a5(-46,-9,-30,1)
D.aO4=new A.a5(-80,-190,80,20)
D.eVq=new A.a5(-8,-26,40,-6)
D.eVr=new A.a5(-9,-15,9,-9)
D.fJK=new A.y("Let the AI write it from your tree",null,B.iE,null,B.L,null,null,null,null,null,null,null)
D.bEH=new A.ds(1,B.cn,D.fJK,null)
D.d2X=w([E.a1Q,B.ab,D.bEH],x.p)
D.eWu=new A.cb(B.aN,B.e,B.P,B.m,null,B.p,null,0,D.d2X,null)
D.fqx=new A.y("Save member",null,B.ck,null,null,null,null,null,null,null,null,null)
D.di2=w([D.aoT,B.ab,D.fqx],x.p)
D.eWE=new A.cb(B.aN,B.b8,B.j,B.m,null,B.p,null,0,D.di2,null)
D.bQ7=new A.ae(B.hW,14,B.b_,null,null,null)
D.fer=new A.F(!0,B.b_,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuk=new A.y("Cashier",null,D.fer,null,null,null,null,null,null,null,null,null)
D.daP=w([D.bQ7,B.bo,D.fuk],x.p)
D.eWH=new A.cb(B.aN,B.e,B.P,B.m,null,B.p,null,0,D.daP,null)
D.fqy=new A.y("Transfer & settings",null,B.de,null,null,null,null,null,null,null,null,null)
D.bCJ=new A.bA(1,B.bd,D.fqy,null)
D.cVS=w([D.aou,B.as,D.bCJ],x.p)
D.eWI=new A.cb(B.aN,B.e,B.j,B.m,null,B.p,null,0,D.cVS,null)
D.f_J=new A.au(16,40)
D.f_O=new A.au(22,64)
D.f_V=new A.au(280,88)
D.f0I=new A.a7(30,null,null,null)
D.f1T=new A.hQ(5,8,8,1,null)
D.f20=new A.hQ(2,12,12,1.05,null)
D.fu0=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.f2J=new A.b2(D.fu0,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.t,null)
D.fuf=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aQ7=new A.b2(D.fuf,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.t,null)
D.fCw=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f3c=new A.b2(D.fCw,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.t,null)
D.fN4=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.f3h=new A.b2(D.fN4,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.t,null)
D.fwn=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.f3o=new A.b2(D.fwn,null,null,null,null,null,null,null,null,null,null,null,null,B.fT,!1,null,null,null,B.t,null)
D.fKo=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aQb=new A.b2(D.fKo,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.t,null)
D.fwl=new A.y("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.f3O=new A.b2(D.fwl,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.t,null)
D.fr9=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.f3Q=new A.b2(D.fr9,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.t,null)
D.fA1=new A.y("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.f3W=new A.b2(D.fA1,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.t,null)
D.fNO=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.f4B=new A.b2(D.fNO,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.t,null)
D.fID=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.f5_=new A.b2(D.fID,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.t,null)
D.fN8=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.f52=new A.b2(D.fN8,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.t,null)
D.fE7=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f54=new A.b2(D.fE7,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.t,null)
D.fyc=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.f55=new A.b2(D.fyc,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.t,null)
D.fyd=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f65=new A.b2(D.fyd,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.t,null)
D.fu2=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.f6n=new A.b2(D.fu2,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.t,null)
D.fw_=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.f6H=new A.b2(D.fw_,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.t,null)
D.fDB=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.f6X=new A.b2(D.fDB,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.t,null)
D.fz1=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.f6Y=new A.b2(D.fz1,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.t,null)
D.fjn=new A.F(!0,B.bA,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8B=new A.eH("\u2665",null,null,B.cY,null,null,null,null,null,null,D.fjn)
D.f95=new A.F(!0,B.qV,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa8=new A.F(!0,D.kw,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faj=new A.F(!0,D.pH,null,null,null,null,76,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faz=new A.F(!0,D.kw,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faD=new A.F(!0,B.d4,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faM=new A.F(!0,D.fG,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faX=new A.F(!0,D.fG,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbg=new A.rO(!0,B.rO,null,null,null,null,B.dw,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbw=new A.F(!0,B.d4,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbz=new A.F(!0,D.kw,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbA=new A.F(!0,B.d4,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbF=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbI=new A.F(!0,B.d4,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcb=new A.F(!0,B.b_,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcc=new A.F(!0,B.ae,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcG=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRn=new A.F(!0,B.aQ,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcJ=new A.F(!0,D.lr,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd4=new A.F(!0,B.d4,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a8F=new A.rO(!0,B.SI,null,null,null,null,B.dw,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Jz=new A.F(!0,B.d4,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fde=new A.F(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdE=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe6=new A.F(!0,D.fG,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feU=new A.F(!0,D.fG,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffh=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffm=new A.F(!0,I.iJ,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffv=new A.F(!0,D.fG,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgi=new A.F(!0,D.fG,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgB=new A.F(!0,D.fG,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgD=new A.F(!0,B.M,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgE=new A.F(!0,B.d4,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhb=new A.F(!0,D.fG,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhm=new A.F(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhI=new A.F(!0,B.f7,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi4=new A.F(!0,B.bP,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi8=new A.F(!0,B.bx,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fic=new A.F(!0,B.c,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fil=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fio=new A.F(!0,D.fG,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiw=new A.F(!0,D.Fd,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiF=new A.F(!0,B.b_,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj4=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjx=new A.F(!0,B.d4,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjG=new A.F(!0,B.cN,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjT=new A.F(!0,D.kW,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.A6=new A.F(!0,B.d4,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fka=new A.F(!0,B.bP,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkB=new A.F(!0,B.b_,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkS=new A.F(!0,D.fG,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flc=new A.F(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flz=new A.F(!0,D.fG,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm1=new A.F(!0,D.fG,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm7=new A.F(!0,B.al,null,null,null,null,11.5,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmf=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSq=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmi=new A.F(!0,D.fG,null,null,null,null,19,B.u,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a97=new A.F(!0,B.al,null,null,null,null,12,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSD=new A.F(!0,D.lr,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnW=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fok=new A.F(!0,I.iJ,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fot=new A.F(!0,I.iJ,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foX=new A.y("Time:",null,B.h9,null,null,null,null,null,null,null,null,null)
D.fpi=new A.y("\ud83c\udfae",null,H.a9_,null,null,null,null,null,null,null,null,null)
D.fpj=new A.y("Themes",null,B.pp,null,null,null,null,null,null,null,null,null)
D.fpM=new A.y("\ud83c\udfb2",null,B.ve,null,null,null,null,null,null,null,null,null)
D.fpR=new A.y("Delete this game?",null,B.iE,null,null,null,null,null,null,null,null,null)
D.fpY=new A.y("Add Item",null,B.ck,null,null,null,null,null,null,null,null,null)
D.ff_=new A.F(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqn=new A.y("Debt receipt",null,D.ff_,null,B.L,null,null,null,null,null,null,null)
D.aSm=new A.F(!0,B.al,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqF=new A.y("Person who owes",null,D.aSm,null,null,null,null,null,null,null,null,null)
D.frC=new A.y("Notes",null,B.a8N,null,null,null,null,null,null,null,null,null)
D.fs1=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fdV=new A.F(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs4=new A.y("Share",null,D.fdV,null,null,null,null,null,null,null,null,null)
D.ft0=new A.y("Move your family trees",null,D.aSq,null,null,null,null,null,null,null,null,null)
D.ftD=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fue=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fuC=new A.y("SAVE",null,D.A6,null,null,null,null,null,null,null,null,null)
D.fve=new A.y("The round button is the right answer.",null,O.DR,null,null,null,null,null,null,null,null,null)
D.fvz=new A.y("Remove this book?",null,B.fO,null,null,null,null,null,null,null,null,null)
D.fky=new A.F(!0,B.d4,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,N.a3a,null,null,null)
D.fw4=new A.y("Fireside Stories",null,D.fky,null,null,null,null,null,null,null,null,null)
D.aST=new A.y("Download",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fwL=new A.y("What should the AI do?",null,B.de,null,null,null,null,null,null,null,null,null)
D.fxG=new A.y("Calabash Catch",null,B.JQ,null,null,null,null,null,null,null,null,null)
D.fy8=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fyS=new A.y("LET US LEARN FROM THESE",null,S.t3,null,null,null,null,null,null,null,null,null)
D.fff=new A.F(!0,D.fG,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzf=new A.y("Family Knowledge Test",null,D.fff,null,null,null,null,null,null,null,null,null)
D.fzh=new A.y("Ribbon bookmark",null,B.jj,null,null,null,null,null,null,null,null,null)
D.fm0=new A.F(!0,B.b_,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzK=new A.y("NGMY.ORG",null,D.fm0,null,B.L,null,null,null,null,null,null,null)
D.fB1=new A.y("Scan family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fip=new A.F(!0,B.c,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBM=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fip,null,B.L,null,null,null,null,null,null,null)
D.fCZ=new A.y("Delete",null,B.U4,null,null,null,null,null,null,null,null,null)
D.fD_=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fD5=new A.y("Thumbnail",null,B.pp,null,null,null,null,null,null,null,null,null)
D.fDH=new A.y("Save the cover",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fDL=new A.y("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.wS,null,B.L,null,null,null,null,null,null,null)
D.fdA=new A.F(!0,D.lr,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDZ=new A.y("CERTIFICATE",null,D.fdA,null,null,null,null,null,null,null,null,null)
D.fE8=new A.y("Your photos",null,B.pp,null,null,null,null,null,null,null,null,null)
D.fEn=new A.y("Create Project",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fEK=new A.y("\u2b50 stars",null,B.Ug,null,null,null,null,null,null,null,null,null)
D.fEX=new A.y("Design your cover",null,Z.t1,null,null,null,null,null,null,null,null,null)
D.fF2=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fF5=new A.y("PICTURE",null,K.vc,null,null,null,null,null,null,null,null,null)
D.fF7=new A.y("\ud83c\udfaf",null,D.JP,null,null,null,null,null,null,null,null,null)
D.fFs=new A.y("Paid",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fFu=new A.y("You can undo it right after.",null,O.DR,null,null,null,null,null,null,null,null,null)
D.fG1=new A.y("Print",null,B.v9,null,null,null,null,null,null,null,null,null)
D.fGq=new A.y("Amount owed",null,D.aSm,null,null,null,null,null,null,null,null,null)
D.fGF=new A.y("Got it",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fHf=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fHi=new A.y("Add to budget",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fHK=new A.y("Debtor signature",null,B.a8N,null,null,null,null,null,null,null,null,null)
D.fHT=new A.y("Change icon",null,E.aRD,null,null,null,null,null,null,null,null,null)
D.fIF=new A.y("MADE BY THE SYSTEM, FROM YOUR TREE",null,S.t3,null,null,null,null,null,null,null,null,null)
D.fJ6=new A.y("Family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fJc=new A.y("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.a93,null,null,null,null,null,null,null,null,null)
D.fJA=new A.y("Download",null,B.v9,null,null,null,null,null,null,null,null,null)
D.fJB=new A.y("The person who planted this tree has not made a game yet.",null,B.vd,null,null,null,null,null,null,null,null,null)
D.fJF=new A.y("Change",null,B.pp,null,null,null,null,null,null,null,null,null)
D.fKu=new A.y("Clear all",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fKx=new A.y("WHAT SHOULD IT CHANGE?",null,K.vc,null,null,null,null,null,null,null,null,null)
D.fL5=new A.y("COLOUR",null,K.vc,null,null,null,null,null,null,null,null,null)
D.fLj=new A.y("Do it",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fLm=new A.y("Create Tree",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fLv=new A.y("Give me another clue",null,D.A6,null,null,null,null,null,null,null,null,null)
D.fMo=new A.y("Create Family Tree",null,B.eZ,null,null,null,null,null,null,null,null,null)
D.f94=new A.F(!0,E.k6,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMD=new A.y("Write the first page myself",null,D.f94,null,null,null,null,null,null,null,null,null)
D.fNb=new A.y("Use this header",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fNi=new A.y("Create Project",null,E.aS5,null,null,null,null,null,null,null,null,null)
D.h96=new C.aby(1,"header")
D.aa4=new C.aby(2,"projects")
D.h97=new C.aby(3,"cashier")
D.aa5=new C.aby(4,"familyTree")
D.hm1=new C.cA6(0,"start")
D.hm2=new C.cA7(0,"start")
D.h9v=new C.YB(null)
D.hau=new C.Z3(null)
D.duO=new A.bu(B.hL,[],A.aw("bu<n,FY>"))
D.ddh=w([],x.dE)
D.ddi=w([],x.M)
D.hb0=new C.beJ(D.duO,D.ddh,D.ddi,0,0,null,null)
D.aWP=new C.ZU(0,"intro")
D.aWQ=new C.ZU(1,"countdown")
D.aaj=new C.ZU(2,"ask")
D.Vj=new C.ZU(3,"reveal")
D.aWR=new C.ZU(4,"end")
D.hdD=new C.vd(F.M3,D.kW,B.d4,F.mr,5,!1,!1,!1,0,null)
D.hdE=new C.vd(F.M3,B.el,B.d4,B.bO,2,!0,!0,!1,2,B.d4)
D.hdF=new C.vd(F.Yi,D.ag4,B.d4,F.mr,4,!0,!1,!0,0,null)
D.hdG=new C.vd(F.Yi,B.dD,B.d4,F.mr,3,!0,!1,!0,2,null)
D.hdH=new C.vd(F.mx,D.kW,B.c,F.mr,0,!1,!1,!0,0,null)
D.hdI=new C.vd(B.oS,B.aC,B.d4,B.bO,2,!0,!0,!1,2,B.dD)
D.hdJ=new C.vd(B.oS,D.pH,B.j8,F.mr,5,!1,!1,!0,3,null)
D.hdK=new C.vd(B.oS,B.dD,B.d4,F.mr,0,!0,!1,!1,0,B.aC)
D.hdL=new C.vd(F.M3,B.el,B.d4,B.bO,1,!1,!0,!1,1,null)
D.hdM=new C.vd(F.EV,B.aE,B.aC,F.mr,4,!0,!1,!0,2,null)
D.hdN=new C.vd(F.mx,B.aE,B.el,F.mr,3,!0,!1,!1,0,null)
D.hdO=new C.vd(B.oS,B.dK,B.d4,B.bO,1,!1,!0,!1,1,null)
D.hdP=new C.vd(F.EV,D.afc,B.c,F.mr,5,!1,!1,!0,0,null)
D.hes=new C.a_s(null)
D.hma=new C.aeS(0,"still")
D.VG=new C.aeS(1,"walk")
D.aaD=new C.aeS(2,"pound")
D.aaE=new C.aeS(3,"drum")
D.hhF=new C.a0J(0,"greet")
D.aXi=new C.a0J(1,"teach")
D.aaF=new C.a0J(2,"ask")
D.hhG=new C.a0J(3,"feedback")
D.aXj=new C.a0J(4,"end")
D.aaR=new C.aJU(0,"projects")
D.aXH=new C.aJU(1,"cashier")
D.hjI=new C.aJU(2,"familyTree")})()};
(a=>{a["BbaAOTBtZ76K4x0s8MshwHFNZIE="]=a.current})($__dart_deferred_initializers__);