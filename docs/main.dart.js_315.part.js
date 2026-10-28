((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,N,S,A2,G,F,E,O,A3,A4,A5,T,U,A6,A7,M,A8,H,A9,Aa,V,W,X,Ab,Ac,Y,Ad,Ae,Z,Af,Ag,Ah,K,Ai,A_,A0,P,Aj,L,Q,C={
bCb(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bCb=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vc(null,""),$async$bCb)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.V(y.j)
t=A.n1(b1)
s=A.c2(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dq(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cX(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.L)(h),++d){a0=h[d]
f.push(A.F(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.R.ao(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qK(t,a1,B.hl,E.EX),$async$bCb)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.PZ(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.V(l!=null&&A.KH(l)?y.l:y.i)
for(j=J.a6(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a1(r.a(j.h(a2,a7)),q,p):B.cA
g=a8.h(0,"title")
a9=B.a.i(A.t(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.t(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.y(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a1O(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCb,v)},
agq(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$agq=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vc(null,""),$async$agq)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.V(y.j)
t=A.n1(b6)
s=x.S
r=A.dd(c1,0,A.dJ(4,"count",s),A.U(c1).c)
q=F.a1B(new A.K(r,new C.fx6(),r.$ti.k("K<ak.E,n>")).aI(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fx5(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.R.ao(b7,null)+"\nAllowed values: style one of "+B.d.aI(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$agq)
case 6:l=c5
k=F.PZ(l==null?"":l)
if(k==null)throw A.V("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.anA(s,D.dko,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.dC
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.V("There is no page to change.")
h=A.T(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.dq(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.L)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.F(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.R.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$agq)
case 10:l=c5
k=l==null?null:F.PZ(l)
if(k==null)throw A.V(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d9(a8,d),a5=J.aV(a2.a),a2=a2.$ti,a7=new A.kY(a5,a2.k("kY<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gT(a5))
b0=J.a6(a9)
b1=A.aJ(b0.h(a9,"index"))
i=b1==null?null:B.k.N(b1)
if(i==null||!B.d.t(a4,i))continue
b1=b0.h(a9,"title")
b2=B.a.i(A.t(b1==null?"":b1))
a9=b0.h(a9,"body")
b3=B.a.i(A.t(a9==null?"":a9))
a9=b2.length===0
if(a9&&b3.length===0)continue
a9=a9?c1[i].a:b2
h.n(0,i,new A.y(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("bc<2>")
p=A.cD(new A.bc(h,s),new C.fx7(),s.k("J.E"),p)
p=F.a1B(A.p8(p,3,A.a4(p).k("J.E")).aI(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.B(new A.cu(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a1O(s,b9),$async$agq)
case 13:b5=c5
for(s=J.a6(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.anA(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agq,v)},
hlr(d,e,f){return A.ca(null,B.w.j(0.65),!1,null,new C.fGg(e,f),d,null,!0,!0,x.g2)},
anA:function anA(d,e,f){this.a=d
this.b=e
this.c=f},
fx6:function fx6(){},
fx5:function fx5(d){this.a=d},
fx7:function fx7(){},
fGg:function fGg(d,e){this.a=d
this.b=e},
bA0(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bA0=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b5(b1,new C.fma())){u=null
w=1
break}t=B.d.d8(b1,new C.fmb())
s=$.W()
r=new A.qT()
q=A.D5(r,D.aLF)
p=A.M()
p.r=B.c.gp(0)
q.aZ(D.aLF,p)
o=A.M()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bO
o.e=B.fA
n=new C.fmg(t)
if(!t){for(s=b1.length,m=1/0,l=1/0,k=0,j=0,i=0;i<s;++i){h=b1[i]
if(h==null)continue
g=h.a
if(g<m)m=g
f=h.b
if(f<l)l=f
if(g>k)k=g
if(f>j)j=f}e=B.k.D(k-m,1,1e4)
d=B.k.D(j-l,1,1e4)
a0=B.k.D(478.40000000000003/e,0,147.20000000000002/d)
a1=(520-e*a0)/2
a2=(160-d*a0)/2
s=$.W()
p=A.a([],x.v)
a3=new A.aO(s.r,B.ap,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.L)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.b5(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aO(a3,o)}else{p=A.a([],x.v)
a3=new A.aO(s.r,B.ap,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.L)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.b5(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aO(a3,o)}w=4
return A.b(r.pB().z7(520,160),$async$bA0)
case 4:w=3
return A.b(b3.hq(B.fX),$async$bA0)
case 3:b0=b3
u=b0==null?null:J.eT(B.dD.gaM(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bA0,v)},
fuN(d){return C.hZO(d)},
hZO(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fuN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.beZ()
n=d.x!=null&&d.yO(null).length===0
if(d.x!=null)t=n?D.z8:D.HY
else t=d.gTe()?D.HY:D.aGJ
w=3
return A.b(C.bA0(d.ax),$async$fuN)
case 3:s=f
p.a=null
if(s!=null)p.a=A.amj(s)
r=A.a3M(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aGJ}else{p.c=C.wB(q,!0)
p.b=n?D.z8:D.HY}r.a2r(A.fQm(new C.fuP(p,d,new C.fuQ(),t,n,o),null,D.bu3,B.w4))
u=r.k0(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fuN,v)},
fBq(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fBq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fuN(d),$async$fBq)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aK(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A7.Gi(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fBq,v)},
fma:function fma(){},
fmb:function fmb(){},
fmg:function fmg(d){this.a=d},
fuQ:function fuQ(){},
fuP:function fuP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fuO:function fuO(){},
fGI(d,e){var w=0,v=A.j(x.H)
var $async$fGI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,B.w.j(0.55),!0,null,new C.fGM(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fGI)
case 2:return A.h(null,v)}})
return A.i($async$fGI,v)},
bCF(d,e,f,g){return C.i6g(d,e,f,g)},
i6g(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bCF=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gal(e.split(",")):e
r=B.cG.aJ(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.S(D.eSC)
w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.fGE(g,r,f),d,null,!0,!0,x.H),$async$bCF)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bCF,v)},
fGN(d,e){var w=0,v=A.j(x.H)
var $async$fGN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,null,!0,null,new C.fGQ(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fGN)
case 2:return A.h(null,v)}})
return A.i($async$fGN,v)},
aXM:function aXM(d,e){this.c=d
this.a=e},
c0X:function c0X(){},
b9S:function b9S(d,e){this.b=d
this.a=e},
fGM:function fGM(d,e){this.a=d
this.b=e},
fGJ:function fGJ(d){this.a=d},
fGK:function fGK(d,e,f){this.a=d
this.b=e
this.c=f},
fGL:function fGL(d,e){this.a=d
this.b=e},
fGE:function fGE(d,e,f){this.a=d
this.b=e
this.c=f},
fGC:function fGC(d){this.a=d},
fGD:function fGD(d,e,f){this.a=d
this.b=e
this.c=f},
fGQ:function fGQ(d,e){this.a=d
this.b=e},
fGO:function fGO(d){this.a=d},
fGP:function fGP(d,e,f){this.a=d
this.b=e
this.c=f},
fpK(d,e){var w=0,v=A.j(x.y),u,t
var $async$fpK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1m(d),$async$fpK)
case 3:t=g
J.no(t,new C.fpL(e))
u=A.ah3(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fpK,v)},
fpL:function fpL(d){this.a=d},
anH:function anH(d,e,f){this.c=d
this.d=e
this.a=f},
aBX:function aBX(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dF5:function dF5(d,e){this.a=d
this.b=e},
dER:function dER(d,e){this.a=d
this.b=e},
dEU:function dEU(d,e,f){this.a=d
this.b=e
this.c=f},
dET:function dET(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dES:function dES(d,e){this.a=d
this.b=e},
dEV:function dEV(d,e){this.a=d
this.b=e},
dEP:function dEP(){},
dEQ:function dEQ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dEO:function dEO(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dEz:function dEz(d){this.a=d},
dEA:function dEA(d,e,f){this.a=d
this.b=e
this.c=f},
dEB:function dEB(d,e){this.a=d
this.b=e},
dEy:function dEy(d){this.a=d},
dEG:function dEG(d,e){this.a=d
this.b=e},
dEx:function dEx(d){this.a=d},
dEH:function dEH(d,e,f){this.a=d
this.b=e
this.c=f},
dEI:function dEI(d,e,f){this.a=d
this.b=e
this.c=f},
dEw:function dEw(d,e){this.a=d
this.b=e},
dEJ:function dEJ(d,e,f){this.a=d
this.b=e
this.c=f},
dEv:function dEv(d,e){this.a=d
this.b=e},
dEK:function dEK(d,e){this.a=d
this.b=e},
dEu:function dEu(d){this.a=d},
dEL:function dEL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dEs:function dEs(){},
dEm:function dEm(d){this.a=d},
dEn:function dEn(d){this.a=d},
dEt:function dEt(d,e){this.a=d
this.b=e},
dEM:function dEM(d,e){this.a=d
this.b=e},
dEr:function dEr(d){this.a=d},
dEN:function dEN(d){this.a=d},
dEq:function dEq(){},
dEC:function dEC(d,e){this.a=d
this.b=e},
dEp:function dEp(d){this.a=d},
dED:function dED(d,e,f){this.a=d
this.b=e
this.c=f},
dEo:function dEo(d,e){this.a=d
this.b=e},
dEl:function dEl(d,e){this.a=d
this.b=e},
dEE:function dEE(d){this.a=d},
dEF:function dEF(d,e,f){this.a=d
this.b=e
this.c=f},
dF8:function dF8(){},
dF9:function dF9(d,e){this.a=d
this.b=e},
dF6:function dF6(d){this.a=d},
dF7:function dF7(d){this.a=d},
dF2:function dF2(d,e){this.a=d
this.b=e},
dF3:function dF3(d){this.a=d},
dEW:function dEW(d,e,f){this.a=d
this.b=e
this.c=f},
dEX:function dEX(d,e,f){this.a=d
this.b=e
this.c=f},
dEY:function dEY(d,e,f){this.a=d
this.b=e
this.c=f},
dEZ:function dEZ(d,e,f){this.a=d
this.b=e
this.c=f},
dF_:function dF_(d,e,f){this.a=d
this.b=e
this.c=f},
dF0:function dF0(d,e,f){this.a=d
this.b=e
this.c=f},
dF1:function dF1(d,e,f){this.a=d
this.b=e
this.c=f},
dFa:function dFa(){},
dFb:function dFb(){},
dFc:function dFc(){},
dFd:function dFd(d){this.a=d},
dF4:function dF4(d,e){this.a=d
this.b=e},
hhF(d){return B.d.dL(D.a1f,new C.fqk(d),new C.fql())},
u4:function u4(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fqk:function fqk(d){this.a=d},
fql:function fql(){},
ak2:function ak2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aTz:function aTz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Sc:function Sc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdu:function bdu(){this.d=$
this.c=this.a=null},
d4V:function d4V(d,e){this.a=d
this.b=e},
d4T:function d4T(d,e){this.a=d
this.b=e},
d4U:function d4U(){},
d4W:function d4W(d,e){this.a=d
this.b=e},
h2t(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.n8(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
Ks(d,e){return C.hYr(d,e)},
hYr(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Ks=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$Ks)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.R.aG(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.d9(p,x.f)
o=A.cD(o,new C.fso(),o.$ti.k("J.E"),x.B)
n=A.a4(o).k("a2<J.E>")
o=A.B(new A.a2(o,new C.fsp(),n),n.k("J.E"))
B.d.b0(o,new C.fsq())
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
return A.i($async$Ks,v)},
AE(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$AE=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aA(),$async$AE)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fFm(),x.a)
r=A.B(r,r.$ti.k("ak.E"))
w=4
return A.b(t.au("String","ngmy_family_book_v1_"+s+"_"+e,B.R.ao(r,null)),$async$AE)
case 4:case 1:return A.h(u,v)}})
return A.i($async$AE,v)},
aPJ(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aPJ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Ks(d,e),$async$aPJ)
case 2:u=h
t=J.cE(u)
s=t.bd(u,new C.fNt(f))
if(s===-1)t.ck(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.AE(d,e,u),$async$aPJ)
case 3:return A.h(null,v)}})
return A.i($async$aPJ,v)},
bAt(d,e,f){var w=0,v=A.j(x.H),u
var $async$bAt=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Ks(d,e),$async$bAt)
case 2:u=h
J.no(u,new C.fpC(f))
w=3
return A.b(C.AE(d,e,u),$async$bAt)
case 3:return A.h(null,v)}})
return A.i($async$bAt,v)},
bAI(d,e){return C.hYq(d,e)},
hYq(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bAI=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bAI)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Mn
w=1
break}p=B.R.aG(0,q,null)
if(x.f.b(p)){o=A.a1(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aJ(o.h(0,"emblem"))
k=k==null?null:B.k.N(k)
if(k==null)k=0
if(D.Cd.ai(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a2M,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.t(D.a2d,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.t(D.a28,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.t(D.cQD,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.Hf(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Mn
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Mn
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bAI,v)},
R1(d,e,f){return C.i5N(d,e,f)},
i5N(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$R1=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aA(),$async$R1)
case 7:r=h
w=8
return A.b(r.au("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.R.ao(f.ag(),null)),$async$R1)
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
return A.i($async$R1,v)},
Qw(d,e){return C.hYs(d,e)},
hYs(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Qw=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$Qw)
case 7:r=g
q=r.t4("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Ks(d,e),$async$Qw)
case 8:if(!j.cy(g)){n=B.a.i(d.toLowerCase())
m=J.lo(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Qw)
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
return A.i($async$Qw,v)},
afK(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$afK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qw(d,e),$async$afK)
case 3:s=g
r=J.a6(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.J(s,t)
w=5
return A.b(A.aA(),$async$afK)
case 5:w=4
return A.b(g.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$afK)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afK,v)},
a20(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a20=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Qw(d,e),$async$a20)
case 2:s=h
J.hD(s,f)
w=3
return A.b(A.aA(),$async$a20)
case 3:u=h
w=4
return A.b(u.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a20)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a20)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a20)
case 6:return A.h(null,v)}})
return A.i($async$a20,v)},
n8:function n8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fso:function fso(){},
fsp:function fsp(){},
fsq:function fsq(){},
fFm:function fFm(){},
fNt:function fNt(d){this.a=d},
fpC:function fpC(d){this.a=d},
Hf:function Hf(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bMQ:function bMQ(d){this.a=d},
i65(d,e,f,g,h,i,j){return A.a5(d,!1).c8(A.e8(new C.fFV(j,i,f,e,h,g),!0,null,x.H))},
Qt(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Qt=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qw(h,g),$async$Qt)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.I(x.q).f.S(D.aNI)
u=!1
w=1
break}w=4
return A.b(C.hlr(d,f,e),$async$Qt)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.afK(h,g),$async$Qt)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.n8(""+(q+n),l,B.a.i(m.b),new A.S(Date.now(),0,!1)))}w=6
return A.b(C.AE(h,r,p),$async$Qt)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.R1(h,r,new C.Hf("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Qt)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Qt,v)},
fFV:function fFV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
YL:function YL(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
az0:function az0(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d5A:function d5A(d){this.a=d},
d5z:function d5z(d,e){this.a=d
this.b=e},
d5o:function d5o(d,e){this.a=d
this.b=e},
d5l:function d5l(d,e){this.a=d
this.b=e},
d4X:function d4X(d){this.a=d},
d4Y:function d4Y(d,e){this.a=d
this.b=e},
d5p:function d5p(d){this.a=d},
d55:function d55(d){this.a=d},
d53:function d53(d){this.a=d},
d54:function d54(d){this.a=d},
d56:function d56(d){this.a=d},
d5m:function d5m(d){this.a=d},
d5n:function d5n(){},
d51:function d51(d){this.a=d},
d52:function d52(d,e){this.a=d
this.b=e},
d57:function d57(d){this.a=d},
d58:function d58(d,e){this.a=d
this.b=e},
d5y:function d5y(d){this.a=d},
d5x:function d5x(d,e){this.a=d
this.b=e},
d5w:function d5w(d){this.a=d},
d5i:function d5i(d){this.a=d},
d5h:function d5h(d){this.a=d},
d5j:function d5j(d){this.a=d},
d4Z:function d4Z(d,e){this.a=d
this.b=e},
d5k:function d5k(d,e){this.a=d
this.b=e},
d5b:function d5b(d){this.a=d},
d5c:function d5c(d){this.a=d},
d5a:function d5a(){},
d5d:function d5d(d){this.a=d},
d5e:function d5e(d){this.a=d},
d5f:function d5f(d,e){this.a=d
this.b=e},
d5g:function d5g(d,e,f){this.a=d
this.b=e
this.c=f},
d59:function d59(d,e){this.a=d
this.b=e},
d5r:function d5r(d){this.a=d},
d5q:function d5q(){},
d5s:function d5s(d){this.a=d},
d5t:function d5t(d){this.a=d},
d5u:function d5u(d){this.a=d},
d5v:function d5v(d,e){this.a=d
this.b=e},
d5_:function d5_(d){this.a=d},
d50:function d50(d){this.a=d},
YP:function YP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdP:function bdP(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d7k:function d7k(d){this.a=d},
d7l:function d7l(d){this.a=d},
d7j:function d7j(d){this.a=d},
d7m:function d7m(d){this.a=d},
d7i:function d7i(d){this.a=d},
d7n:function d7n(d){this.a=d},
d7h:function d7h(d){this.a=d},
d7o:function d7o(d,e){this.a=d
this.b=e},
d7g:function d7g(d,e){this.a=d
this.b=e},
d7p:function d7p(d,e){this.a=d
this.b=e},
YN:function YN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aec:function aec(d,e,f){this.a=d
this.b=e
this.c=f},
az1:function az1(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d5P:function d5P(d,e){this.a=d
this.b=e},
d5O:function d5O(d,e){this.a=d
this.b=e},
d5T:function d5T(d){this.a=d},
d5S:function d5S(d,e){this.a=d
this.b=e},
d5Q:function d5Q(d){this.a=d},
d5R:function d5R(d){this.a=d},
d5U:function d5U(d){this.a=d},
d5V:function d5V(d){this.a=d},
d5N:function d5N(d,e){this.a=d
this.b=e},
d5M:function d5M(d,e){this.a=d
this.b=e},
Jz:function Jz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Y3:function Y3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cEu:function cEu(d){this.a=d},
cEv:function cEv(){},
cEw:function cEw(d){this.a=d},
bb4:function bb4(d,e,f){this.b=d
this.c=e
this.a=f},
baW:function baW(d,e){this.b=d
this.a=e},
u5:function u5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Yl:function Yl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bb2:function bb2(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cXW:function cXW(d,e,f){this.a=d
this.b=e
this.c=f},
cXV:function cXV(d,e){this.a=d
this.b=e},
cYk:function cYk(d){this.a=d},
cY7:function cY7(){},
cYl:function cYl(d){this.a=d},
cY6:function cY6(){},
cYm:function cYm(d,e){this.a=d
this.b=e},
cY5:function cY5(d,e){this.a=d
this.b=e},
cYn:function cYn(d,e){this.a=d
this.b=e},
cY4:function cY4(d,e){this.a=d
this.b=e},
cYo:function cYo(d){this.a=d},
cY3:function cY3(){},
cYp:function cYp(d,e){this.a=d
this.b=e},
cY2:function cY2(d,e){this.a=d
this.b=e},
cYq:function cYq(d){this.a=d},
cYf:function cYf(d,e){this.a=d
this.b=e},
cYr:function cYr(d){this.a=d},
cYs:function cYs(d){this.a=d},
cYu:function cYu(d){this.a=d},
cYv:function cYv(d){this.a=d},
cYe:function cYe(d,e){this.a=d
this.b=e},
cYw:function cYw(d,e){this.a=d
this.b=e},
aG0:function aG0(d){this.a=d},
bgi:function bgi(d){this.a=d},
b9g:function b9g(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hXp(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ahg(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bz(new A.S(Date.now(),0,!1))
s=new C.fqo(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("a2<1>"),q=q.k("cR<1,n>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.xL)m.push(l===D.Zh?"male":"female")
l=u.w
k=A.af(a3,!0,!1,!1,!1).cE(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.af(a3,!0,!1,!1,!1).cE(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jY(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jY(h,a2,a2)-A.jY(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.B(new A.cR(new A.a2(a4,new C.fqm(u,f),p),new C.fqn(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aI(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aI(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hXq(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ahg(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fqt(v,e)
q=new C.fqr(v)
p=A.T(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.L)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.L)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.L)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.ai(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.ai(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("bc<2>")
d=A.db(new A.bc(p,d),d.k("J.E"))
n=A.B(d,A.a4(d).k("co.E"))
B.d.fk(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.L)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gaf(e),k=new A.fi(l,new C.fqs(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ai(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aI(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hJ5(d,e,f,g){var w,v,u=C.hXr(d,e)
if(u<=0||f.length<=u)return new A.adN(!1,D.C2,f)
if(g.t(0,e.a))return new A.adN(!1,D.C2,f)
w=A.U(f).c
v=A.dd(f,0,A.dJ(u,"count",x.S),w).dH(0)
return new A.adN(!0,A.dd(f,u,null,w).dH(0),v)},
hJ6(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ahg(d3),d2=d1.length
if(d2===0)return D.fOm
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.cg(0,t.a,new C.d61(t))}s=new C.d6i(v)
d2=x.h
r=A.T(w,d2)
q=new C.d6a(r)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d69(r)
l=A.T(w,x.do)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ch(l.cg(0,k,new C.d62()),o)}h=new C.d68(s)
g=new C.d67(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a2<J.E>")
f=A.B(new A.a2(new A.bc(v,p),new C.d63(h),o),o.k("J.E"))
e=f.length===0?new A.bc(v,p).gL(0):B.d.gL(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.L)(f),++u){t=f[u]
a0=g.$2(t.a,A.aX(w))
if(a0>d){d=a0
e=t}}a1=A.aX(w)
p=x.S
a2=A.T(w,p)
a3=A.T(w,w)
a4=A.T(w,d2)
d2=x.gR
a5=A.T(w,d2)
a6=A.T(w,x.d9)
a7=A.T(w,d2)
a8=A.a([],x.s)
a9=new C.d6g(new C.d6c(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dt(v,v.r,v.e),j=a2.gajR(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.et([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.J(0,i))break}if(h.$1(b0)&&a2.ai(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.r8(J.dH(i==null?B.T:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.cc)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.d60(a2,new C.d6h(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.L)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.dt(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cu<1>")
d2=A.B(new A.cu(b4,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.Fq(o,new A.u(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.JH(c5.a,new A.u(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.B(new A.cu(b6,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bI(0,new C.d64(c6,b4))
for(d2=new A.cK(a4,a4.$ti.k("cK<1,2>")).gaf(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gT(j)
if(b6.ai(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gaf(b5),i=new A.fi(j,new C.d65(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.b0(o,new C.d66())
c6.push(new C.aI6(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bdz(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hha(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(d)
return w==null?null:w.b[1]},
hbw(d,e,f,g,h,i,j,k,l,m,n){return new C.Zo(k,f,j,e,l,n,m,d,g,h,i,null)},
aAY(d,e,f,g,h,i,j){return new C.bhe(i,d,e,f,j,h,g,null)},
aoO:function aoO(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCx:function aCx(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dT7:function dT7(d){this.a=d},
dT6:function dT6(d){this.a=d},
dT9:function dT9(d,e){this.a=d
this.b=e},
dTa:function dTa(d,e){this.a=d
this.b=e},
dTb:function dTb(d){this.a=d},
dT5:function dT5(d,e){this.a=d
this.b=e},
dT8:function dT8(d){this.a=d},
dTd:function dTd(d){this.a=d},
dTc:function dTc(d,e){this.a=d
this.b=e},
aoI:function aoI(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCu:function aCu(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dSy:function dSy(d){this.a=d},
dSw:function dSw(d){this.a=d},
dSx:function dSx(d){this.a=d},
dSz:function dSz(d,e){this.a=d
this.b=e},
dSt:function dSt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dS1:function dS1(d){this.a=d},
dS2:function dS2(d,e){this.a=d
this.b=e},
dSg:function dSg(d){this.a=d},
dSe:function dSe(d){this.a=d},
dSf:function dSf(d,e){this.a=d
this.b=e},
dSh:function dSh(d){this.a=d},
dSi:function dSi(d,e){this.a=d
this.b=e},
dSs:function dSs(d,e){this.a=d
this.b=e},
dSq:function dSq(d,e){this.a=d
this.b=e},
dSp:function dSp(d,e){this.a=d
this.b=e},
dSl:function dSl(d,e){this.a=d
this.b=e},
dSk:function dSk(d){this.a=d},
dSm:function dSm(d,e){this.a=d
this.b=e},
dSj:function dSj(d){this.a=d},
dSn:function dSn(d){this.a=d},
dSo:function dSo(d){this.a=d},
dSr:function dSr(d,e){this.a=d
this.b=e},
dRQ:function dRQ(d,e){this.a=d
this.b=e},
dRR:function dRR(d,e){this.a=d
this.b=e},
dSB:function dSB(d,e,f){this.a=d
this.b=e
this.c=f},
dSv:function dSv(d,e,f){this.a=d
this.b=e
this.c=f},
dSu:function dSu(d){this.a=d},
dRS:function dRS(d){this.a=d},
dRT:function dRT(d){this.a=d},
dRU:function dRU(){},
dRV:function dRV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRZ:function dRZ(d,e){this.a=d
this.b=e},
dRY:function dRY(d,e){this.a=d
this.b=e},
dRX:function dRX(d){this.a=d},
dS_:function dS_(d,e){this.a=d
this.b=e},
dRW:function dRW(d){this.a=d},
dSA:function dSA(d){this.a=d},
dSb:function dSb(){},
dSc:function dSc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSa:function dSa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dS6:function dS6(d,e,f){this.a=d
this.b=e
this.c=f},
dS5:function dS5(d,e,f){this.a=d
this.b=e
this.c=f},
dS3:function dS3(d,e){this.a=d
this.b=e},
dS7:function dS7(d){this.a=d},
dS8:function dS8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dS4:function dS4(d,e){this.a=d
this.b=e},
dS9:function dS9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSd:function dSd(d,e){this.a=d
this.b=e},
dSI:function dSI(){},
dSJ:function dSJ(d,e){this.a=d
this.b=e},
dSK:function dSK(d){this.a=d},
dSL:function dSL(d,e){this.a=d
this.b=e},
dSE:function dSE(d){this.a=d},
dSC:function dSC(d,e){this.a=d
this.b=e},
dSF:function dSF(d,e){this.a=d
this.b=e},
dSG:function dSG(d,e){this.a=d
this.b=e},
dSH:function dSH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dSM:function dSM(d){this.a=d},
dSD:function dSD(d){this.a=d},
dS0:function dS0(d){this.a=d},
bdx:function bdx(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d5Z:function d5Z(d){this.a=d},
d5Y:function d5Y(d,e){this.a=d
this.b=e},
d6_:function d6_(d){this.a=d},
d5X:function d5X(d,e){this.a=d
this.b=e},
fqo:function fqo(d,e){this.a=d
this.b=e},
fqp:function fqp(d){this.a=d},
fqq:function fqq(){},
fqm:function fqm(d,e){this.a=d
this.b=e},
fqn:function fqn(){},
fqt:function fqt(d,e){this.a=d
this.b=e},
fqu:function fqu(d){this.a=d},
fqv:function fqv(){},
fqr:function fqr(d){this.a=d},
fqs:function fqs(d,e){this.a=d
this.b=e},
JH:function JH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Fq:function Fq(d,e){this.a=d
this.b=e},
bdz:function bdz(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d61:function d61(d){this.a=d},
d6i:function d6i(d){this.a=d},
d6a:function d6a(d){this.a=d},
d6b:function d6b(){},
d69:function d69(d){this.a=d},
d62:function d62(){},
d68:function d68(d){this.a=d},
d67:function d67(d,e){this.a=d
this.b=e},
d63:function d63(d){this.a=d},
d6c:function d6c(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d6d:function d6d(d){this.a=d},
d6e:function d6e(d){this.a=d},
d6f:function d6f(){},
d6g:function d6g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d6h:function d6h(){},
d60:function d60(d,e,f,g,h,i,j,k,l,m){var _=this
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
d64:function d64(d,e){this.a=d
this.b=e},
d65:function d65(d){this.a=d},
d66:function d66(){},
aI6:function aI6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bdA:function bdA(d,e){this.b=d
this.a=e},
d6j:function d6j(){},
d6k:function d6k(d){this.a=d},
d6l:function d6l(d){this.a=d},
d6m:function d6m(){},
bhf:function bhf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcE:function bcE(d,e){this.b=d
this.a=e},
buX:function buX(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
f8C:function f8C(d){this.a=d},
bkB:function bkB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eKx:function eKx(d){this.a=d},
eKw:function eKw(d,e){this.a=d
this.b=e},
Zo:function Zo(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aAW:function aAW(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dmb:function dmb(d,e){this.a=d
this.b=e},
dma:function dma(d){this.a=d},
dm8:function dm8(d){this.a=d},
dm9:function dm9(d){this.a=d},
dmk:function dmk(d){this.a=d},
dml:function dml(d){this.a=d},
dmj:function dmj(d,e){this.a=d
this.b=e},
dmm:function dmm(){},
dmp:function dmp(d){this.a=d},
dmi:function dmi(d,e){this.a=d
this.b=e},
dmo:function dmo(){},
dmq:function dmq(d){this.a=d},
dmh:function dmh(d,e){this.a=d
this.b=e},
dmr:function dmr(d){this.a=d},
dmg:function dmg(d){this.a=d},
dms:function dms(d){this.a=d},
dmf:function dmf(d){this.a=d},
dmt:function dmt(d){this.a=d},
dme:function dme(d){this.a=d},
dmu:function dmu(d){this.a=d},
dmd:function dmd(d){this.a=d},
dmv:function dmv(d){this.a=d},
dmc:function dmc(d,e){this.a=d
this.b=e},
dmn:function dmn(d){this.a=d},
acC:function acC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhe:function bhe(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
acB:function acB(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bhd:function bhd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dmw:function dmw(d){this.a=d},
dmx:function dmx(d,e){this.a=d
this.b=e},
aAX:function aAX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aH8:function aH8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
acD:function acD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dmG:function dmG(d){this.a=d},
Jv:function Jv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
h6o(d){var w=d.U,v=x.N
return w.iY(w,new C.c7u(),v,v)},
hAB(d){var w=d.bE
if(w>=0)return w
return 5},
h6q(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.h6o(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
h6p(d,e){var w=C.h6q(d,e)
if(w!=null&&w.cc(new A.S(Date.now(),0,!1)))return!0
return!1},
hAC(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.h6o(d),w,w)
u=C.h6q(d,e)
t=u!=null&&u.cc(new A.S(Date.now(),0,!1))?u:new A.S(Date.now(),0,!1)
v.n(0,s,t.bP(A.dC(30,0,0,0,0,0).a).a6().ac())
d.U=v},
aZb(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aZb=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.le(t,B.HL),$async$aZb)
case 3:if(l){u=!0
w=1
break}u=A.kS(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.HL,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZb,v)},
c7u:function c7u(){},
hAz(){var w,v=$.pm(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fX(u)},
I9(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$I9=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$I9)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f3("ngmy_family_tree_backup_codes_v1",null,!1,B.bG),$async$I9)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.q(r,"codes")
if(x.f.b(q)){o=A.a1(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.aa(m)
$.am.$1("[family tree sync codes] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$I9,v)},
a6D(d){return C.hAA(d)},
hAA(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a6D=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$a6D)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hC("ngmy_family_tree_backup_codes_v1",A.F(["codes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cH,null),$async$a6D)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.aa(p)
$.am.$1("[family tree sync codes] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a6D,v)},
c7t(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c7t=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.I9(),$async$c7t)
case 3:t=m.ju(f),t=t.gaf(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gT(t)
q=r.b
if(s.b(q)){p=J.a6(q)
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
return A.i($async$c7t,v)},
N4(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$N4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c7t(d),$async$N4)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.I9(),$async$N4)
case 6:s=f
r=J.a6(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dW(A.a1(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.S(Date.now(),0,!1).a6().ac())
r.n(s,t,o)
w=9
return A.b(C.a6D(s),$async$N4)
case 9:case 8:u=t
w=1
break
case 5:n=C.hAz()
w=10
return A.b(C.I9(),$async$N4)
case 10:s=f
J.aF(s,n,A.F(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=11
return A.b(C.a6D(s),$async$N4)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$N4,v)},
aZa(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aZa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.I9(),$async$aZa)
case 3:t=f
for(s=J.dk(t),r=s.gdK(t),r=r.dH(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a6D(t),$async$aZa)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aZa,v)},
a6E(d,e,f){var w=0,v=A.j(x.H),u
var $async$a6E=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aoN(d,e),$async$a6E)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.N4(d),$async$a6E)
case 7:w=4
break
case 5:w=8
return A.b(C.aZa(d),$async$a6E)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a6E,v)},
aoH(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aoH=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aoN(f,e),$async$aoH)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c3(),$async$aoH)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.I9(),$async$aoH)
case 7:q=o.q(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a6(q)
if(!J.z(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoH,v)},
aZ9(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aZ9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c3(),$async$aZ9)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.I9(),$async$aZ9)
case 4:t=q.q(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a6(t)
if(!J.z(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZ9,v)},
hAD(){var w,v=$.pm(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fX(u)},
aoK(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$aoK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$aoK)
case 3:if(!g){u=null
w=1
break}t=C.hAD()
w=4
return A.b(A.Uw(),$async$aoK)
case 4:s=g
r=B.dJ.aJ(B.R.ao(d.eL(),null))
r=B.cT.gcw().aJ(r)
q=e?999:2
J.aF(s,t,A.F(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(A.a6F(s),$async$aoK)
case 5:p=e?999:2
u=new A.a_A("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoK,v)},
aoJ(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aoJ=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Uw(),$async$aoJ)
case 3:p=a0
o=J.a6(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a6(n)
l=A.aJ(m.h(n,"usesRemaining"))
k=l==null?null:B.k.N(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aZ9(J.k(l==null?"":l),j),$async$aoJ)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.c6.ca(0,B.cG.aJ(t))
s=C.h6r(r)}catch(f){q=A.aa(f)
$.am.$1("[family tree qr stash] decode: "+A.t(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dW(A.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a6().ac())
o.n(p,g,l)}w=5
return A.b(A.a6F(p),$async$aoJ)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoJ,v)},
h6r(d){var w,v,u,t,s=null
try{w=B.R.aG(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hAF(A.a1(w,x.N,x.z))
return u}catch(t){v=A.aa(t)
$.am.$1("[family tree sync] parse: "+A.t(v))
return s}},
fRp(d){var w=0,v=A.j(x.m),u,t,s
var $async$fRp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aoJ(t[1])
w=1
break}u=null
w=1
break}u=C.h6r(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fRp,v)},
hAF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d9(v,x.f)
u=A.cD(u,new C.c7w(),u.$ti.k("J.E"),x.k)
t=A.a4(u).k("a2<J.E>")
s=A.B(new A.a2(u,new C.c7x(),t),t.k("J.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.T(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.ju(p),t=t.gaf(t),o=x.B;t.C();){n=t.gT(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d9(l,u)
n=A.cD(n,new C.c7y(),n.$ti.k("J.E"),o)
k=A.a4(n).k("a2<J.E>")
j=A.B(new A.a2(n,new C.c7z(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aoL(h,w,s,r,q)},
aoN(d,e){var w=0,v=A.j(x.y),u,t
var $async$aoN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.MW(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.At(d),$async$aoN)
case 3:u=t.cy(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoN,v)},
c7F(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c7F=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.At(d),$async$c7F)
case 3:t=s.b6(f,new C.c7G(),x.cs)
t=A.B(t,t.$ti.k("ak.E"))
B.d.b0(t,new C.c7H())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c7F,v)},
Ux(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Ux=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aoN(e,d),$async$Ux)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.N4(e),$async$Ux)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.At(e),$async$Ux)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.c7D(g))
r=A.B(t,t.$ti.k("J.E"))}t=J.a6(r)
if(t.gam(r)){u=null
w=1
break}t=t.dt(r,new C.c7E(e),x.k)
r=A.B(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Ks(e,o),$async$Ux)
case 14:n=i
if(J.cy(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.aoL(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ux,v)},
aZe(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aZe=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ux(d,e,f,g),$async$aZe)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gL(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aK(t,s,"_")
r=q.a
u=A.G8(A.JD(q.eL(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZe,v)},
aZd(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aZd=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ux(d,e,f,g),$async$aZd)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aoK(r,f),$async$aZd)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aF9(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZd,v)},
Uy(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Uy=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fRp(a0),$async$Uy)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aoH(g.a,d,e,f,s,r),$async$Uy)
case 6:if(!a2){if(r)throw A.V(A.bd("This backup expired or the sender's tree is no longer available."))
throw A.V(A.bd("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bAj(e,j),$async$Uy)
case 12:case 11:w=13
return A.b(C.ah1(e,j,s),$async$Uy)
case 13:h=n.h(0,i)
w=h!=null&&J.cy(h)?14:15
break
case 14:w=16
return A.b(C.AE(e,i,h),$async$Uy)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bob(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Uy,v)},
aoL:function aoL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c7B:function c7B(){},
c7C:function c7C(){},
c7A:function c7A(){},
c7w:function c7w(){},
c7x:function c7x(){},
c7y:function c7y(){},
c7z:function c7z(){},
c7G:function c7G(){},
c7H:function c7H(){},
c7D:function c7D(d){this.a=d},
c7E:function c7E(d){this.a=d},
fZK(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f7(null,x.H)
return A.hw(d,new C.aoM(w,e,g,i,f,h,null),!0,null,x.H)},
d5W(d,e,f,g,h,i,j,k){return new C.bdw(i,e,k,j,g,f,h,d,null)},
aoM:function aoM(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCw:function aCw(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dSV:function dSV(d){this.a=d},
dSW:function dSW(d,e,f){this.a=d
this.b=e
this.c=f},
dT_:function dT_(d,e){this.a=d
this.b=e},
dT0:function dT0(d){this.a=d},
dSS:function dSS(d){this.a=d},
dST:function dST(d,e){this.a=d
this.b=e},
dSU:function dSU(d,e){this.a=d
this.b=e},
dSZ:function dSZ(d){this.a=d},
dSY:function dSY(d,e){this.a=d
this.b=e},
dSX:function dSX(){},
dT2:function dT2(d){this.a=d},
dT3:function dT3(d,e){this.a=d
this.b=e},
dT1:function dT1(d,e){this.a=d
this.b=e},
d6n:function d6n(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bdy:function bdy(d,e,f){this.d=d
this.e=e
this.a=f},
abT:function abT(d,e,f){this.c=d
this.d=e
this.a=f},
bdw:function bdw(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bdB:function bdB(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ZJ:function ZJ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCv:function aCv(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dSN:function dSN(d,e){this.a=d
this.b=e},
dSO:function dSO(d){this.a=d},
dSP:function dSP(d){this.a=d},
dSQ:function dSQ(d){this.a=d},
dSR:function dSR(d){this.a=d},
ZK:function ZK(d){this.a=d},
biI:function biI(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dT4:function dT4(d,e){this.a=d
this.b=e},
aXL(d,e){return new C.aXK(d,e,null)},
aXK:function aXK(d,e,f){this.c=d
this.d=e
this.a=f},
hZT(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b1(d,11)},
i6f(d){return A.bU(B.K,null,new C.fGn(new C.tD(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
h8j(d,e){return new C.arH(e,d,null)},
aPp(d,e,f,g,h,i,j){var w=C.hZT(i)
if(w!=null)return A.bw(e,new A.a7(j,f,new C.a5F(w,!0,null),null),B.aq)
return I.aOK(e,B.bR,f,g,h,i,j)},
lx:function lx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5F:function a5F(d,e,f){this.c=d
this.d=e
this.a=f},
bio:function bio(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b_$=e
_.c=_.a=null},
dEd:function dEd(d){this.a=d},
dEe:function dEe(){},
dEf:function dEf(d,e){this.a=d
this.b=e},
bin:function bin(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fGn:function fGn(d){this.a=d},
fGm:function fGm(d,e){this.a=d
this.b=e},
fGl:function fGl(d,e){this.a=d
this.b=e},
fGk:function fGk(d,e){this.a=d
this.b=e},
arH:function arH(d,e,f){this.c=d
this.d=e
this.a=f},
cfa:function cfa(d,e){this.a=d
this.b=e},
aKs:function aKs(){},
i60(d){var w=null
return A.ca(w,w,!0,w,new C.fFK(),d,w,!0,!0,x.e2)},
i7a(d,e,f,g,h){var w=null
return A.ca(w,w,!0,w,new C.fNe(h,g,f,e),d,w,!0,!0,x.N)},
i62(d,e){var w=null
return A.ca(w,w,!0,w,new C.fFP(e),d,w,!0,!0,x.dY)},
i61(d){var w=null
return A.ca(w,w,!0,w,new C.fFO(),d,w,!0,!0,x.c5)},
aSk:function aSk(d,e){this.a=d
this.b=e},
aSj:function aSj(d){this.a=d},
aQl:function aQl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fFK:function fFK(){},
fNe:function fNe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fFP:function fFP(d){this.a=d},
fFO:function fFO(){},
Yn:function Yn(d,e){this.c=d
this.a=e},
axM:function axM(){var _=this
_.d=$
_.c=_.a=_.e=null},
cYI:function cYI(d){this.a=d},
cYJ:function cYJ(d){this.a=d},
cYH:function cYH(d,e){this.a=d
this.b=e},
cYK:function cYK(d){this.a=d},
cYL:function cYL(d){this.a=d},
Ym:function Ym(d){this.a=d},
axL:function axL(){this.d=$
this.c=this.a=null},
cYE:function cYE(d){this.a=d},
cYF:function cYF(d){this.a=d},
cYG:function cYG(d){this.a=d},
XV:function XV(d){this.a=d},
awv:function awv(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cwh:function cwh(){},
cwn:function cwn(d){this.a=d},
cwo:function cwo(d){this.a=d},
cwp:function cwp(d){this.a=d},
cwm:function cwm(){},
cwq:function cwq(d){this.a=d},
cwr:function cwr(d){this.a=d},
cwl:function cwl(){},
cws:function cws(d,e){this.a=d
this.b=e},
cwk:function cwk(d,e){this.a=d
this.b=e},
cwi:function cwi(d,e){this.a=d
this.b=e},
cwt:function cwt(d){this.a=d},
cwj:function cwj(){},
cwu:function cwu(d){this.a=d},
a0u:function a0u(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
buP:function buP(){this.d=$
this.c=this.a=null},
f84:function f84(d,e){this.a=d
this.b=e},
f85:function f85(d){this.a=d},
f86:function f86(d,e){this.a=d
this.b=e},
aaW:function aaW(d,e){this.a=d
this.b=e},
Fe:function Fe(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
buN:function buN(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
f82:function f82(d,e){this.a=d
this.b=e},
awo:function awo(d,e){this.c=d
this.a=e},
buO:function buO(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
f83:function f83(d){this.a=d},
buM:function buM(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aMD:function aMD(){},
aME:function aME(){},
bCg(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bt(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oC(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fEr(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Xj(A.dn(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aP0(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aP0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hW().l3(85,1280,B.eG),$async$aP0)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fi(),$async$aP0)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.h8i()
w=9
return A.b(C.cf9(q,r),$async$aP0)
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
$.am.$1("[worksheets] pick photo failed: "+A.t(o))
u=null
w=1
break
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aP0,v)},
aPn(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aPn=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cf6(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gal(g.split(",")):g
p=B.cG.aJ(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.W().Lg(p,!0,null,i).cM(0,B.fH),$async$aPn)
case 9:n=a1
w=10
return A.b(n.lY(),$async$aPn)
case 10:m=a1
w=11
return A.b(J.ahr(m).hq(B.fX),$async$aPn)
case 11:l=a1
J.ahr(m).q()
if(l==null){w=8
break}i=J.eT(B.dD.gaM(l))
k="data:image/png;base64,"+B.cT.gcw().aJ(i)
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
j=A.aa(f)
$.am.$1("[worksheets] thumbnail shrink failed: "+A.t(j))
w=6
break
case 3:w=2
break
case 6:u=g
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aPn,v)},
fEr:function fEr(){},
tD:function tD(d){this.a=d},
arG:function arG(d,e,f){this.c=d
this.d=e
this.a=f},
aE1:function aE1(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eHH:function eHH(d,e){this.a=d
this.b=e},
eHy:function eHy(d){this.a=d},
eHz:function eHz(d){this.a=d},
eHF:function eHF(d,e){this.a=d
this.b=e},
eHE:function eHE(d,e){this.a=d
this.b=e},
eHB:function eHB(d,e){this.a=d
this.b=e},
eHA:function eHA(d,e){this.a=d
this.b=e},
eHC:function eHC(d){this.a=d},
eHD:function eHD(d,e){this.a=d
this.b=e},
eHG:function eHG(d,e){this.a=d
this.b=e},
eHt:function eHt(d,e){this.a=d
this.b=e},
eHx:function eHx(d){this.a=d},
eHw:function eHw(d,e){this.a=d
this.b=e},
eHv:function eHv(d){this.a=d},
eHI:function eHI(d,e){this.a=d
this.b=e},
eHJ:function eHJ(d,e){this.a=d
this.b=e},
eHu:function eHu(d,e){this.a=d
this.b=e},
hkY(d,e,f){var w="thumbnailPath",v=e.ag()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.F(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a6().ac(),"project",v],x.N,x.z)},
fEs(d,e,f){var w=0,v=A.j(x.N),u
var $async$fEs=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.R.ao(C.hkY(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fEs,v)},
bCi(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bCi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fEs(!0,d,e),$async$bCi)
case 4:w=3
return A.b(r.arE(g,d,e.a),$async$bCi)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dJ.aJ(B.R.ao(C.hkY(d,e,null),null))
u="NGMY_WS:"+B.k9.gcw().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCi,v)},
hcS(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fZr(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d_(s,"NGMYWSSYNC2|"))return!0
if(J.d_(s,"NGMY_WS:"))return!0
if(J.f0(s,t))return!0
if(J.d_(s,"{"))try{w=B.R.aG(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
i3W(d){var w,v,u,t=C.hcS(d)
if(t==null)return null
if(C.fZr(t))return t
w=B.a.cJ(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b1(t,w))
if(C.fZr(v))return v}u=B.a.cJ(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b1(t,u))
if(C.fZr(v))return v}return null},
fZq(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d_(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d_(q,"NGMY_WS:")){v=B.c6.ca(0,B.cG.aJ(J.mD(q,8)))
w=t.a(B.R.aG(0,v,r))}else w=t.a(B.R.aG(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fU_(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bCh(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bCh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.arD(t[1]),$async$bCh)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fZq(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fZq(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCh,v)},
fZp(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lh(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bBP(){var w=0,v=A.j(x.o),u,t
var $async$bBP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Gj(),$async$bBP)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fZq(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBP,v)},
hlP(d,e,f,g){return A.bU(B.K,null,new C.fN4(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fN4:function fN4(d,e,f){this.a=d
this.b=e
this.c=f},
acY:function acY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eHL:function eHL(d,e){this.a=d
this.b=e},
eHM:function eHM(d,e){this.a=d
this.b=e},
eHN:function eHN(d,e){this.a=d
this.b=e},
eHO:function eHO(d,e){this.a=d
this.b=e},
eHK:function eHK(d){this.a=d},
arA:function arA(d,e,f){this.c=d
this.d=e
this.a=f},
bk4:function bk4(){var _=this
_.c=_.a=_.e=_.d=null},
eHo:function eHo(d,e){this.a=d
this.b=e},
eHp:function eHp(d){this.a=d},
eHq:function eHq(d){this.a=d},
arF:function arF(d){this.a=d},
aE0:function aE0(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eHs:function eHs(d){this.a=d},
eHr:function eHr(d){this.a=d},
hDT(d,e,f,g,h){return new C.NH(h,g,d,e,f,null)},
aIO:function aIO(d,e){this.a=d
this.b=e},
NH:function NH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aE2:function aE2(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eIa:function eIa(){},
eI6:function eI6(d,e){this.a=d
this.b=e},
eI7:function eI7(d){this.a=d},
eHS:function eHS(d){this.a=d},
eHQ:function eHQ(d){this.a=d},
eHR:function eHR(d){this.a=d},
eI0:function eI0(d,e){this.a=d
this.b=e},
eHY:function eHY(d,e){this.a=d
this.b=e},
eHZ:function eHZ(d,e){this.a=d
this.b=e},
eI_:function eI_(d,e,f){this.a=d
this.b=e
this.c=f},
eHW:function eHW(d,e,f){this.a=d
this.b=e
this.c=f},
eHU:function eHU(d){this.a=d},
eHV:function eHV(d){this.a=d},
eHX:function eHX(d){this.a=d},
eId:function eId(d){this.a=d},
eIc:function eIc(d){this.a=d},
eIe:function eIe(d){this.a=d},
eIb:function eIb(d){this.a=d},
eHP:function eHP(d){this.a=d},
eHT:function eHT(d,e){this.a=d
this.b=e},
eI9:function eI9(d,e){this.a=d
this.b=e},
eI8:function eI8(d,e){this.a=d
this.b=e},
eI3:function eI3(d){this.a=d},
eI4:function eI4(d){this.a=d},
eI5:function eI5(d,e){this.a=d
this.b=e},
eI2:function eI2(d,e){this.a=d
this.b=e},
eI1:function eI1(d,e,f){this.a=d
this.b=e
this.c=f},
bwA:function bwA(){},
Aj(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aK(v,w,"_")},
aft(d,e,f){return C.hTv(d,e,f)},
hTv(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aft=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.au("String",e,f),$async$aft)
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
$.am.$1("[worksheets] setString failed for "+e+": "+A.t(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aft,v)},
afs(d,e){return C.hTu(d,e)},
hTu(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$afs=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$afs)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.aa(q)
$.am.$1("[worksheets] remove failed for "+e+": "+A.t(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$afs,v)},
hSg(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Sg(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bzj(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bzj=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b1q(q),$async$bzj)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aPn(q,!1),$async$bzj)
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
return A.i($async$bzj,v)},
hrH(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.qS(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qS(p,J.k(u==null?"":u),1,o,q)},
fU_(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d9(s,x.f)
w=A.cD(w,new C.cvG(),w.$ti.k("J.E"),x.Q)
v=A.a4(w).k("a2<J.E>")
r=A.B(new A.a2(w,new C.cvH(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lh(w,v,u,r,t==null?new A.S(Date.now(),0,!1):t)},
hXl(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.Zh
case"female":case"f":return D.aiN
default:return D.xL}},
hhG(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h2u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hXl(v==null?j:J.k(v))
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
m=m==null?j:B.k.N(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aJ(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.N(k)
return new C.hV(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
hXn(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Mo
case"viewer":return D.kl
default:return D.tE}},
hXo(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
G9(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bAA(d,e){return B.a.i(e.toLowerCase())===C.G9(d,e)&&d.y!==D.kl},
tO(d,e){var w,v=d.y
if(v===D.kl)return!1
w=B.a.i(e.toLowerCase())
if(w===C.G9(d,e))return!0
if(v===D.Mo)return!0
v=d.e
return new A.K(v,A.fZv(),A.U(v).k("K<1,n>")).t(0,w)},
hWO(d){return J.dH(d,new C.fpu()).gM(0)},
fNA(d){var w=0,v=A.j(x.y),u,t
var $async$fNA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.At(d),$async$fNA)
case 3:u=t.qO(f,new C.fNB(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fNA,v)},
bAj(d,e){var w=0,v=A.j(x.H),u,t
var $async$bAj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.At(d),$async$bAj)
case 3:t=g
if(J.qO(t,new C.fnV(e))){w=1
break}if(C.hWO(t)>=2)throw A.V(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bAj,v)},
ak4(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d9(n,x.f)
w=A.cD(w,new C.bMR(),w.$ti.k("J.E"),x.P)
v=A.a4(w).k("a2<J.E>")
m=A.B(new A.a2(w,new C.bMS(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bMT(),x.N)
t=A.B(l,l.$ti.k("ak.E"))}else t=A.a([],x.s)
l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"code")
v=J.k(v==null?"":v)
s=J.z(d.h(0,"isPrivate"),!1)
r=d.h(0,"createdAt")
r=A.bi(J.k(r==null?"":r))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.aJ(d.h(0,"visibleChildrenPerParent"))
q=q==null?null:B.k.N(q)
if(q==null)q=0
p=d.h(0,"ownerEmail")
p=J.k(p==null?"":p)
o=d.h(0,"localRole")
return new C.kA(l,w,v,!s,t,m,r,q,p,C.hXn(o==null?null:J.k(o)))},
hhP(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
CB(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$CB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.R_(d),$async$CB)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aA(),$async$CB)
case 4:t=f
w=5
return A.b(t.a5t(0),$async$CB)
case 5:w=6
return A.b(C.ffE(t,l),$async$CB)
case 6:s=f
if(J.cy(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a6(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hdr(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oB(l,n),$async$CB)
case 11:u=n
w=1
break
case 10:case 8:m=A.aU(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hdr(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oB(l,n),$async$CB)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$CB,v)},
ffE(d,e){return C.hPL(d,e)},
hPL(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$ffE=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a6(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Aj(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.R.aG(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aV(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gT(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Aj(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.R.aG(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fU_(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Aj(a9)+"_"+n))
i=C.hSg(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b1q(h),$async$ffE)
case 17:g=b1
if(g!=null){i=i.Sg(g)
p=!0}case 16:J.ch(q,i)
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
case 8:J.R9(q,new C.ffF())
if(p&&J.ad(q)!==0)C.oB(a9,q)
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
return A.i($async$ffE,v)},
bAL(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bAL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.R_(d),$async$bAL)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.CB(r),$async$bAL)
case 4:t=p.aV(g)
case 5:if(!t.C()){w=6
break}s=t.gT(t)
if(s.a===q){u=s
w=1
break}w=5
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAL,v)},
hdr(d){var w,v,u,t
try{w=B.R.aG(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d9(w,x.f)
v=A.cD(v,new C.fbm(),v.$ti.k("J.E"),x.i)
u=A.a4(v).k("a2<J.E>")
v=A.B(new A.a2(v,new C.fbn(),u),u.k("J.E"))
B.d.b0(v,new C.fbo())
return v}catch(t){v=A.a([],x.D)
return v}},
oB(d,e){return C.i5R(d,e)},
i5R(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oB=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.R_(b2),$async$oB)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aA(),$async$oB)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Aj(a8)
p=A.aU(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.R.aG(0,p,null)),new C.fFB(),a2).fK(0)
a2=J.b6(b3,new C.fFC(),a2).c_(0,new C.fFD())
n=A.db(a2,a2.$ti.k("J.E"))
a2=o,a2=A.ec(a2,a2.r,A.a4(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f0(n,m)?17:18
break
case 17:a5=C.Aj(a8)
l=A.aU(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a7V(l),$async$oB)
case 19:t=21
a5=C.Aj(a8)
k=A.aU(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.R.aG(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a7V(a5==null?null:J.k(a5)),$async$oB)
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
return A.b(C.afs(r,"ngmy_worksheet_item_v3_"+C.Aj(a8)+"_"+m),$async$oB)
case 29:w=30
return A.b(C.afs(r,"ngmy_worksheet_thumb_v3_"+C.Aj(a8)+"_"+m),$async$oB)
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
break}i=a3.gT(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bzj(h),$async$oB)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.aft(r,"ngmy_worksheet_thumb_v3_"+C.Aj(a8)+"_"+a4,f),$async$oB)
case 40:g=i.Sg(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.afs(r,"ngmy_worksheet_thumb_v3_"+C.Aj(a8)+"_"+a4),$async$oB)
case 41:g=i.Sg(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.afs(r,"ngmy_worksheet_thumb_v3_"+C.Aj(a8)+"_"+a4),$async$oB)
case 42:case 34:a4=i.a
w=43
return A.b(C.aft(r,"ngmy_worksheet_item_v3_"+C.Aj(a8)+"_"+a4,B.R.ao(g.ag(),null)),$async$oB)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.ch(q,i.a)
w=31
break
case 32:w=44
return A.b(C.aft(r,"ngmy_worksheets_index_v3_"+C.Aj(a8),B.R.ao(q,null)),$async$oB)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eK(b3,new C.fFE(q))
a4=a3.$ti.k("cR<1,a3<n,@>>")
a7=A.B(new A.cR(a3,new C.fFF(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.aft(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.R.ao(a0,null)),$async$oB)
case 45:w=46
return A.b(J.hqO(r),$async$oB)
case 46:if(a2.gco(b3)&&J.ad(q)===0){u=!1
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
$.am.$1("[worksheets] saveWorksheetProjects error: "+A.t(a1))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$oB,v)},
KT(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$KT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.CB(d),$async$KT)
case 3:t=g
s=J.cE(t)
r=s.bd(t,new C.fNz(e))
if(r===-1)s.ck(t,0,e)
else s.n(t,r,e)
u=C.oB(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$KT,v)},
bAx(d,e){var w=0,v=A.j(x.H),u
var $async$bAx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.CB(d),$async$bAx)
case 2:u=g
J.no(u,new C.fpW(e))
w=3
return A.b(C.oB(d,u),$async$bAx)
case 3:return A.h(null,v)}})
return A.i($async$bAx,v)},
Gb(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Gb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Gb)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.R.aG(0,i,null)
if(x.j.b(t)){j=J.d9(t,x.f)
j=A.cD(j,new C.fsu(),j.$ti.k("J.E"),x.k)
s=A.a4(j).k("a2<J.E>")
r=A.B(new A.a2(j,new C.fsv(),s),s.k("J.E"))
B.d.b0(r,new C.fsw())
k=r}}catch(h){}w=4
return A.b(C.fc6(d),$async$Gb)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hQ7(k,p,d)
j=A.U(o)
s=j.k("K<1,a3<n,@>>")
s=A.B(new A.K(o,new C.fsx(),s),s.k("ak.E"))
n=B.R.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Qc(d,o),$async$Gb)
case 7:case 6:j=j.k("a2<1>")
m=A.B(new A.a2(o,new C.fsy(d),j),j.k("J.E"))
if(m.length!==0)C.aNW(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Gb,v)},
fFn(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fFn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qc(d,e),$async$fFn)
case 3:t=J.dH(e,new C.fFo(d))
s=A.B(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aNW(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fFn,v)},
a26(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a26=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aA(),$async$a26)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.R.aG(0,l,null)
if(x.j.b(u)){m=J.d9(u,x.f)
m=A.cD(m,new C.fNu(),m.$ti.k("J.E"),x.k)
t=A.a4(m).k("a2<J.E>")
s=A.B(new A.a2(m,new C.fNv(),t),t.k("J.E"))
o=s}}catch(k){}q=J.q9(o,new C.fNw(e))
if(B.a.i(e.x).length===0&&C.tO(e,d)){m=B.a.i(d.toLowerCase())
p=e.aCY(e.y===D.kl?D.kl:D.tE,m)}else p=e
if(q===-1)J.pq(o,0,p)
else J.aF(o,q,p)
w=3
return A.b(C.Qc(d,o),$async$a26)
case 3:w=C.tO(p,d)?4:5
break
case 4:w=6
return A.b(C.aNV(C.G9(p,d),p),$async$a26)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a26,v)},
aO5(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aO5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Gb(d),$async$aO5)
case 2:u=g
t=J.cE(u)
s=A.r8(t.eK(u,new C.fpD(e)))
t.bn(u,new C.fpE(e))
w=3
return A.b(C.Qc(d,u),$async$aO5)
case 3:w=s!=null&&C.bAA(s,d)?4:5
break
case 4:w=6
return A.b(C.fbq(e),$async$aO5)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aO5,v)},
ahg(d){var w=d.f,v=A.U(w).k("a2<1>")
w=A.B(new A.a2(w,new C.fNF(),v),v.k("J.E"))
return w},
fX7(d,e){var w,v=d.f,u=A.r8(new A.a2(v,new C.fp9(e),A.U(v).k("a2<1>")))
v=C.ahg(d)
w=A.U(v).k("a2<1>")
v=A.B(new A.a2(v,new C.fpa(e,u),w),w.k("J.E"))
B.d.b0(v,new C.fpb())
return v},
hXr(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hlT(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bd(C.fX7(d,u),new C.fNf(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hYY(d,e){var w
if(e==null||e.length===0)return 1
w=C.fX7(d,e)
if(w.length===0)return 1
return new A.K(w,new C.ftg(),A.U(w).k("K<1,H>")).fa(0,B.A2)+1},
i5K(d){var w,v=C.ahg(d)
if(v.length===0)return null
w=new A.a2(v,new C.fFh(),A.U(v).k("a2<1>"))
if(!w.gam(0))return w.gL(0)
return B.d.gL(v)},
hXm(d){return A.F(["id",d.a,"name",d.b,"gender",C.hhG(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hYT(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aX(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.L)(a0),++u){q=a0[u]
p=q.a
r.J(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.xL?n:q.c
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
d=q.aCT(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.L)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cHg(a1,w,a3.d,a2.y,s,a0,v)},
At(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$At=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$At)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aU(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.R.aG(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d9(t,x.f)
p=A.cD(p,new C.fsr(),p.$ti.k("J.E"),x.k)
s=A.a4(p).k("a2<J.E>")
p=A.B(new A.a2(p,new C.fss(),s),s.k("J.E"))
B.d.b0(p,new C.fst())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$At,v)},
ah1(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ah1=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tE:D.kl
a7=C.G9(b2,b3)
w=2
return A.b(C.At(b1),$async$ah1)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.bd(a8,new C.fFc(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bAj(b1,b2),$async$ah1)
case 5:case 4:if(b0===-1){u=b2.aCY(a6,a7)
a9.ck(a8,0,u)}else{t=a9.h(a8,b0)
s=A.T(x.N,x.P)
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
i=i!==D.xL?i:l.c
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
s.n(0,m,l.aCT(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.B(new A.bc(s,k),k.k("J.E"))
k=a5?D.tE:D.kl
u=t.yo(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Qc(b1,a8),$async$ah1)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aNV(B.a.i(b3.toLowerCase()),u),$async$ah1)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ah1,v)},
hdP(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a6().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("K<1,a3<n,@>>"),k=A.B(new A.K(m,C.hl5(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.F(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.F(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a6().ac(),"updatedAt",o],r,x.K),"createdAt",s.a6().ac(),"updatedAt",o],r,x.z)},
hdQ(d,e){var w=new A.S(Date.now(),0,!1).a6().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("K<1,a3<n,@>>")
u=A.B(new A.K(u,C.hl5(),t),t.k("ak.E"))
return A.F(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a6().ac(),"updatedAt",w],x.N,x.z)},
hNL(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a6(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ak4(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.K(j,A.fZv(),A.U(j).k("K<1,n>")).c_(0,new C.fbU())
t=A.B(j,j.$ti.k("J.E"))
if(u===v)s=D.tE
else s=B.d.t(t,u)?D.Mo:D.kl
return w.aCY(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ak4(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d9(q,h)
h=A.cD(h,new C.fbV(),h.$ti.k("J.E"),x.P)
p=A.a4(h).k("a2<J.E>")
o=A.B(new A.a2(h,new C.fbW(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.fbX(),x.N).c_(0,new C.fbY())
t=A.B(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tE
else s=B.d.t(t,u)?D.Mo:D.kl
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.z(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bi(J.k(l==null?"":l))
if(l==null)l=new A.S(Date.now(),0,!1)
j=A.aJ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.N(j)
if(j==null)j=0
return new C.kA(h,r,p,!m,t,o,l,j,v,s)},
fc6(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fc6=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fca()
h=x.N
g=x.z
w=7
return A.b(A.iK(A.a([A.ln("family_trees","*",null,A.F(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bG),r.$2(A.ln("family_trees","*",A.F(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bG),"collaborator"),r.$2(A.ln("family_trees","*",null,A.F(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bG),"public")],x.cl),x.U),$async$fc6)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.T(h,g)
h=A.B(p,g)
l=h
J.h_(l,o)
J.h_(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.L)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aF(m,j,k)}l=m
h=A.a4(l).k("bc<2>")
h=A.cD(new A.bc(l,h),new C.fc7(a0),h.k("J.E"),x.k)
l=A.a4(h).k("a2<J.E>")
l=A.B(new A.a2(h,new C.fc8(),l),l.k("J.E"))
B.d.b0(l,new C.fc9())
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
l=B.a.t(d,"Could not find the table 'public.family_trees'")||B.a.t(d,'relation "public.family_trees" does not exist')
h=$.am
if(l)h.$1("[family_trees] table missing \u2014 run supabase/family_trees_table.sql")
else h.$1("[family_trees] fetch error: "+A.t(i))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fc6,v)},
hQ7(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a6(e)
if(j.gam(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dt(e,new C.fgj(),v).c_(0,new C.fgk())
t=A.db(u,u.$ti.k("J.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.G9(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kl){m=q.e
m=!new A.K(m,A.fZv(),A.U(m).k("K<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gaf(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.hYT(l,v)
o=C.G9(k,w)
p=v.d
s.n(0,u,o===w?k.baF(p,D.tE):k.baF(p,v.y))}j=s.$ti.k("bc<2>")
j=A.B(new A.bc(s,j),j.k("J.E"))
B.d.b0(j,new C.fgl())
return j},
Qc(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Qc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$Qc)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fis(),x.a)
s=A.B(s,s.$ti.k("ak.E"))
w=3
return A.b(u.au("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.R.ao(s,null)),$async$Qc)
case 3:return A.h(null,v)}})
return A.i($async$Qc,v)},
aNV(d,e){return C.hVc(d,e)},
hVc(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aNV=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lN("family_trees",A.a([C.hdP(e,d)],p),null,B.cH),$async$aNV)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lN("family_trees",A.a([C.hdQ(e,d)],p),null,B.cH),$async$aNV)
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
$.am.$1("[family_trees] upsert error: "+A.t(q))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aNV,v)},
aNW(d,e){return C.hVd(d,e)},
hVd(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aNW=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("K<1,a3<n,@>>")
m=n.k("ak.E")
l=A.B(new A.K(e,new C.fne(d),n),m)
r=l
w=7
return A.b(A.lN("family_trees",r,null,B.cH),$async$aNW)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.K(e,new C.fnf(d),n),m)
p=k
w=8
return A.b(A.lN("family_trees",p,null,B.cH),$async$aNW)
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
$.am.$1("[family_trees] bulk upsert error: "+A.t(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aNW,v)},
fbq(d){return C.hN5(d)},
hN5(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fbq=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.QA("family_trees",A.F(["id",d],x.N,x.z),null,B.cH),$async$fbq)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.aa(p)
$.am.$1("[family_trees] delete error: "+A.t(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fbq,v)},
qS:function qS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lh:function lh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cvJ:function cvJ(){},
cvI:function cvI(){},
cvG:function cvG(){},
cvH:function cvH(){},
Hg:function Hg(d,e){this.a=d
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
ak3:function ak3(d,e){this.a=d
this.b=e},
fpu:function fpu(){},
fNB:function fNB(d){this.a=d},
fnV:function fnV(d){this.a=d},
kA:function kA(d,e,f,g,h,i,j,k,l,m){var _=this
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
bMV:function bMV(){},
bMU:function bMU(){},
bMR:function bMR(){},
bMS:function bMS(){},
bMT:function bMT(){},
ffF:function ffF(){},
fbm:function fbm(){},
fbn:function fbn(){},
fbo:function fbo(){},
fFB:function fFB(){},
fFC:function fFC(){},
fFD:function fFD(){},
fFE:function fFE(d){this.a=d},
fFF:function fFF(){},
fNz:function fNz(d){this.a=d},
fpW:function fpW(d){this.a=d},
fsu:function fsu(){},
fsv:function fsv(){},
fsw:function fsw(){},
fsx:function fsx(){},
fsy:function fsy(d){this.a=d},
fFo:function fFo(d){this.a=d},
fNu:function fNu(){},
fNv:function fNv(){},
fNw:function fNw(d){this.a=d},
fpD:function fpD(d){this.a=d},
fpE:function fpE(d){this.a=d},
fNF:function fNF(){},
fp9:function fp9(d){this.a=d},
fpa:function fpa(d,e){this.a=d
this.b=e},
fpb:function fpb(){},
fNf:function fNf(d){this.a=d},
ftg:function ftg(){},
fFh:function fFh(){},
fsr:function fsr(){},
fss:function fss(){},
fst:function fst(){},
fFc:function fFc(d){this.a=d},
fbU:function fbU(){},
fbV:function fbV(){},
fbW:function fbW(){},
fbX:function fbX(){},
fbY:function fbY(){},
fca:function fca(){},
fcb:function fcb(d){this.a=d},
fc7:function fc7(d){this.a=d},
fc8:function fc8(){},
fc9:function fc9(){},
fgj:function fgj(){},
fgk:function fgk(){},
fgl:function fgl(){},
fis:function fis(){},
fne:function fne(d){this.a=d},
fnf:function fnf(d){this.a=d},
cvK:function cvK(d,e){this.a=d
this.b=e},
cvL:function cvL(d,e){this.a=d
this.b=e},
aG5:function aG5(d,e,f){this.a=d
this.b=e
this.c=f},
b7J:function b7J(){this.b=this.a=0},
b7I:function b7I(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
buQ:function buQ(){},
wB(d,e){var w,v
if(d==null)return""
w=d.bS()
v=""+w.gce()+"/"+w.gcu()+"/"+w.gcj()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gn9()),2,"0")+":"+B.a.aT(B.o.u(w.gG_()),2,"0")},
hDQ(){var w,v=$.pm(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"WS"+B.d.fX(u)},
arB(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$arB=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arB)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f3("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bG),$async$arB)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=A.a1(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.aa(m)
$.am.$1("[worksheet qr stash] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$arB,v)},
arC(d){return C.hDR(d)},
hDR(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$arC=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arC)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hC("ngmy_worksheet_project_qr_stashes_v1",A.F(["stashes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cH,null),$async$arC)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.aa(p)
$.am.$1("[worksheet qr stash] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$arC,v)},
arE(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$arE=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arE)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hDQ()
w=4
return A.b(C.arB(),$async$arE)
case 4:r=h
q=B.a.i(e)
p=B.dJ.aJ(t)
J.aF(r,s,A.F(["ownerEmail",q,"projectId",f,"payload",B.cT.gcw().aJ(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(C.arC(r),$async$arE)
case 5:u=new A.a_A("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arE,v)},
arD(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$arD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c3(),$async$arD)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.arB(),$async$arD)
case 4:q=f
p=J.a6(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a6(o)
m=A.aJ(n.h(o,"usesRemaining"))
l=m==null?null:B.k.N(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.c6.ca(0,B.cG.aJ(t))}catch(h){r=A.aa(h)
$.am.$1("[worksheet qr stash] decode: "+A.t(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dW(A.a1(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a6().ac())
p.n(q,i,m)}w=5
return A.b(C.arC(q),$async$arD)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arD,v)},
h8i(){var w=new A.S(Date.now(),0,!1).a6()
return"wst_"+(1000*w.a+w.b)+"_"+B.cI.aB(999999)},
hDS(d){var w,v,u,t,s,r,q
try{w=A.afS(d)
if(w==null)return d
v=w
if(J.KZ(v)>960||J.KY(v)>960){s=v
r=J.KZ(v)>=J.KY(v)?960:null
v=A.afR(s,J.KY(v)>J.KZ(v)?960:null,B.NK,r)}s=v
u=A.alr(82).SC(s,B.yu)
if(J.ad(u)===0)return d
s=new Uint8Array(A.ce(u))
return s}catch(q){t=A.aa(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cf9(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cf9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hDS(e)
$.cf5.n(0,s,t)
u=C.bCk(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cf9,v)},
b1q(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1q=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d_(l,"data:image")){u=null
w=1
break}t=4
r=J.f0(l,",")?B.d.gal(J.lp(l,",")):l
q=B.cG.aJ(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.h8i()
w=7
return A.b(C.cf9(p,q),$async$b1q)
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
$.am.$1("[worksheet-thumb] persistDataUrl failed: "+A.t(n))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b1q,v)},
cf6(d){var w=0,v=A.j(x.T),u,t,s
var $async$cf6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cf8(s),$async$cf6)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cT.gcw().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cf6,v)},
a7V(d){var w=0,v=A.j(x.H),u,t
var $async$a7V=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hkZ(d)
if(t==null){w=1
break}$.cf5.W(0,t)
w=3
return A.b(C.bCj(t),$async$a7V)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a7V,v)},
bCk(d,e){return C.i3Z(d,e)},
i3Z(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bCk=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aMQ
w=7
return A.b(n==null?$.aMQ=I.fW7():n,$async$bCk)
case 7:r=g
q=new Uint8Array(A.ce(e))
p=J.mE(r,"thumbs","readwrite")
B.iD.mg(J.mC(p,"thumbs"),q,l)
w=8
return A.b(J.pp(p),$async$bCk)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.aa(k)
$.am.$1("[worksheet-thumb idb put] "+A.t(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bCk,v)},
bCj(d){return C.i3X(d)},
i3X(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bCj=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aMQ
w=7
return A.b(o==null?$.aMQ=I.fW7():o,$async$bCj)
case 7:r=f
q=J.mE(r,"thumbs","readwrite")
B.iD.Fv(J.mC(q,"thumbs"),m)
w=8
return A.b(J.pp(q),$async$bCj)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.aa(l)
$.am.$1("[worksheet-thumb idb delete] "+A.t(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bCj,v)}},D,Ak,Al,R,Am,An,I
J=c[1]
A=c[0]
B=c[2]
A1=c[77]
N=c[233]
S=c[148]
A2=c[217]
G=c[198]
F=c[31]
E=c[208]
O=c[97]
A3=c[219]
A4=c[138]
A5=c[186]
T=c[114]
U=c[102]
A6=c[216]
A7=c[37]
M=c[215]
A8=c[80]
H=c[87]
A9=c[155]
Aa=c[110]
V=c[158]
W=c[229]
X=c[187]
Ab=c[178]
Ac=c[190]
Y=c[185]
Ad=c[65]
Ae=c[71]
Z=c[202]
Af=c[234]
Ag=c[30]
Ah=c[103]
K=c[180]
Ai=c[191]
A_=c[232]
A0=c[225]
P=c[104]
Aj=c[115]
L=c[131]
Q=c[69]
C=a.updateHolder(c[6],C)
D=c[228]
Ak=c[70]
Al=c[196]
R=c[231]
Am=c[230]
An=c[56]
I=c[54]
C.anA.prototype={}
C.aXM.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.beZ(),f=h.x!=null&&h.yO(i).length===0
if(h.x!=null)w=f?B.aZ:B.bI
else w=h.gTe()?B.bI:B.dT
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.be0,B.q,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.eIe,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h5,i,i,i),B.S,D.faw,B.at,A.d(C.wB(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.f6s,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.aZw,i,i,i,i,B.Yh,i,i,i)
q=A.m(16)
p=A.I(B.aL,B.q,1)
o=A.I(B.aZ.j(0.28),B.q,1)
n=A.fY5(h.d)
o=A.p(B.A,C.aXL(A.fvE(h.e,n),30),B.f,i,i,new A.o(B.lF,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.f1T,B.L,i,i)
m=A.m(14)
l=A.I(B.aL,B.q,1)
q=A.p(i,A.v(A.a([o,B.N,n,B.bB,D.faO,B.ac,A.p(i,A.v(A.a([D.fq3,B.bB,A.d(A.Av(h.c),i,i,i,i,i,i,D.eXV,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.f_,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,K.agT,i,i,i)
p=A.m(16)
m=A.I(B.aL,B.q,1)
l=j.aPx("Original due",C.wB(h.r,!1))
n=j.aPx("Current due",C.wB(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.p(i,A.v(A.a([l,B.N,n,B.S,A.p(i,A.d(h.gaJJ(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.AR,i,i,1/0),B.S,j.cd6(),B.N,j.c0M(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bj,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aL,B.q,1)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fbK,B.at,A.d(q,i,i,i,i,i,i,D.f1a,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bj,i,i,1/0)],s))}if(h.gaEA()){q=A.m(14)
o=A.I(B.cq,B.q,1.6)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.frl,B.N,A.bw(A.m(12),A.ek(new A.a7(1/0,88,A.b3(i,i,i,new A.Vp(h.ax,B.M,D.eLZ,!0,3.5,i),B.au),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.F2,i,i,i)],s))}p.push(B.aA)
p.push(D.fjE)
return A.p(i,A.v(A.a([r,new A.C(B.agW,A.v(p,B.aj,i,B.e,B.j,0,B.p),i)],s),B.aj,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aPx(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.a7t,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eYU,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
cd6(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a8C(B.dT,u,"Not paid yet")
w=t.yO(null).length
v=w===0?B.aZ:B.bI
return this.a8C(v,u,C.wB(t.x,!0))},
c0M(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a8C(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a8C(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a7t,u,u,u)
v=A.U(d).k("K<1,hh>")
v=A.B(new A.K(d,new C.c0X(),v),v.k("ak.E"))
return A.v(A.a([w,B.an,A.bY(B.bz,v,B.bq,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a8C(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.a7t,w,w,w),1),new A.dq(1,B.cn,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dM,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b9S.prototype={
a5(d,e){new A.Vp(this.b,B.M,e,!0,3.5,null).a5(d,e)},
ar(d){return d.b!==this.b}}
C.anH.prototype={
R(){return new C.aBX(A.a([],x.bp))},
gdY(){return this.c}}
C.aBX.prototype={
a_(){this.a1()
this.Im()},
Im(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Im=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1m(t.a.c),$async$Im)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dF5(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Im,v)},
aRu(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aP,s=A.l(v,v,u?B.br:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.br:B.bn).j(0.22)
w=A.m(10)
return A.br(v,new A.b4(4,r,new A.ay(u,1,B.q,-1)),v,B.bj,v,v,v,v,!0,new A.b4(4,w,new A.ay((this.a.d.a?B.br:B.bn).j(0.22),1,B.q,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.m(10),D.aX8),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aRt(d){return this.aRu(d,null)},
OY(d){return this.cgG(d)},
cgG(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OY=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Gi:B.eG
w=7
return A.b(new A.hW().BQ(72,900,900,n),$async$OY)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fi(),$async$OY)
case 8:p=f
n=B.cT.gcw().aJ(p)
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
if(n!=null)n.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("Could not pick photo: "+A.t(o),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$OY,v)},
aZY(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aP,o=A.m(10),n=A.I((q?B.br:B.bn).j(0.18),B.q,1)
if(d)q=B.d_
else q=s.a.d.a?B.br:B.bn
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.aB,r,r,r,r,r,r,r,r,12.5,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.d_
else u=s.a.d.a?B.br:B.bn
t=x.p
u=A.E(A.v(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a5,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fv(r,r,r,r,r,r,r,r,r,r,r,B.d_,r,r,r,r,r,r,r,r,r,r,r,r,r,B.ca)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cB,s.a.d.a?B.br:B.bn,r,r,r,18),r,r,r,g,r,r,r,r,r,B.ca))
return A.p(r,A.A(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.kk,D.bpL,r,r,r)},
CQ(d){return this.byb(d)},
bya(){return this.CQ(null)},
byb(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CQ=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.ar(new A.bb(a4,B.b4,B.aN),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jY(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.aa(p,2)}o=new A.ar(new A.bb(a4,B.b4,B.aN),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.ar(new A.bb(a4,B.b4,B.aN),s)
if(a3){a4=new A.S(Date.now(),0,!1).bP(6048e8)
m=A.c1(a4.gcj(),a4.gce(),a4.gcu(),0,0,0,0,0)}else{a4=a5.f
m=A.c1(a4.gcj(),a4.gce(),a4.gcu(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bm(a4,!0,x.cT)
i=a3?null:A.fY5(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.vY?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",a4,new C.dEP(),new C.dEQ(a2,t,a5,r,new C.dER(a2,t),o,n,j),B.eE,!0,x.y),$async$CQ)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d5(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.U$=s
r.P$=0
o.U$=s
o.P$=0
n.U$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.I(x.q).f.S(D.eSj)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.S(D.eQZ)
w=1
break}a1=A.fvE(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.vY?"male":"female"
w=7
return A.b(A.ahf(a3,A.h51(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$CQ)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.vY?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a9(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c1(a3.gcj(),a3.gce(),a3.gcu(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcj(),a4.gce(),a4.gcu(),0,0,0,0,0)))a5.cJo(a2.a)
w=8
return A.b(A.ahf(t.a.c,a5),$async$CQ)
case 8:case 5:w=9
return A.b(t.Im(),$async$CQ)
case 9:case 1:return A.h(u,v)}})
return A.i($async$CQ,v)},
aS5(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.d_.j(0.14)
else w=this.a.d.a?B.M:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.d_
else s=(this.a.d.a?B.br:B.bn).j(0.2)
s=A.I(s,B.q,g?1.5:1)
r=C.aXL(d,18)
if(g)q=B.d_
else q=this.a.d.a?B.aP:B.aB
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,A.p(p,A.A(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.bb,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ag)},
RC(d){return this.cy6(d)},
cy6(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$RC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",s,new C.dF8(),new C.dF9(t,d),B.hX,!0,x.y),$async$RC)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.S(s,0,!1)
case 4:w=7
return A.b(A.ahf(t.a.c,d),$async$RC)
case 7:w=8
return A.b(t.Im(),$async$RC)
case 8:case 1:return A.h(u,v)}})
return A.i($async$RC,v)},
NC(d,e){return this.bIW(0,e)},
bIW(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.l2(s,"Cancel","Delete",e.b+" \xb7 "+A.Av(e.c)+" will be removed from this device.","Delete this debt?"),$async$NC)
case 3:if(!g){w=1
break}w=4
return A.b(C.fpK(t.a.c,e.a),$async$NC)
case 4:w=5
return A.b(t.Im(),$async$NC)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NC,v)},
ae5(d){return this.caz(d)},
caz(d){var w=0,v=A.j(x.H),u=this,t
var $async$ae5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.K,null,new C.dF2(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ae5)
case 2:return A.h(null,v)}})
return A.i($async$ae5,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.e5P
w=J.dH(m.d,new C.dFa())
v=A.B(w,w.$ti.k("J.E"))
w=J.dH(m.d,new C.dFb())
u=A.B(w,w.$ti.k("J.E"))
t=B.d.cI(v,0,new C.dFc())
w=A.m(18)
s=m.a.d.a
r=s?D.cmq:D.ax9
q=A.I(s?B.d_.j(0.35):B.d_.j(0.18),B.q,1)
s=A.p(l,D.bP4,B.f,l,l,new A.o(B.d_.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.av,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aB,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a1,!0,A.m(12),A.aL(!1,A.m(12),!0,D.e5d,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dFd(m),l,l,l,l,l,l,l),B.f,B.d_,0,l,l,l,l,l,B.ag)],p),B.m,l,B.e,B.j,0,l,l)
o=A.E(m.cul("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Av(t)
r=A.a([A.p(l,A.v(A.a([s,B.ac,A.A(A.a([o,B.ab,A.E(m.b54(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.ax,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.agP,l,l,l),B.aA],p)
if(J.cl(m.d)){w=m.a.d.a
s=w?B.dX:B.c
q=A.m(18)
o=A.I((w?B.br:B.bn).j(0.12),B.q,1)
n=A.p(l,D.bK2,B.f,l,l,new A.o(B.d_.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aB,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.ac,w,B.at,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.br:B.bn,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bs8,l,l,1/0))}else{w=m.gcfZ()
s=A.B(new A.K(v,w,A.U(v).k("K<1,r>")),x.l)
if(u.length!==0){q=A.a([B.an,new A.C(D.btN,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.br:B.bn,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.K(u,w,A.U(u).k("K<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.aj,l,B.e,B.j,0,B.p)},
b54(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.br:B.bn).j(0.12),B.q,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.br:B.bn,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.d_
else w=v.a.d.a?B.aP:B.aB
return A.p(u,A.v(A.a([q,B.bB,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ei,u,u,u)},
cul(d,e){return this.b54(!1,d,e)},
cg_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.yO(j).length,h=d.bea()
if(d.x!=null){w=d.yO(j).length
v=w===0?B.d_:B.bI}else if(d.gTe())v=B.bI
else{if(h)w=B.d_
else w=k.a.d.a?B.br:B.bn
v=w}if(d.x!=null){w=d.yO(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wB(u,!1)}else{u.toString
t="Paid "+C.wB(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wB(w,!1)+" \xb7 "+i+" missed":"Due "+C.wB(w,!1)}w=k.a.d.a?B.dX:B.c
u=A.m(18)
if(d.gTe()&&d.x==null)s=B.bI.j(0.35)
else s=(k.a.d.a?B.br:B.bn).j(0.12)
s=A.I(s,B.q,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bm:B.lF
o=A.I(d.gTe()&&d.x==null?B.bI.j(0.45):B.d_.j(0.28),B.q,1.4)
n=d.x!=null?0.55:1
m=A.fY5(d.d)
o=A.p(B.A,A.dc(C.aXL(A.fvE(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.aB
m=x.p
n=A.a([new A.dq(1,B.cn,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaEA())B.d.v(n,A.a([B.eb,A.X(B.MP,B.d_.j(0.8),j,j,j,14)],m))
p=A.E(A.v(A.a([A.A(n,B.m,j,B.e,B.j,0,j,j),B.cS,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.Av(d.c)
l=k.a.d.a?B.aP:B.aB
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aG(!1,B.a1,!0,j,A.aL(!1,q,!0,new A.C(W.agy,A.A(A.a([o,B.bf,p,B.ab,A.v(A.a([n,B.bB,A.X(B.ex,(k.a.d.a?B.br:B.bn).j(0.5),j,j,j,18)],m),B.dz,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dF4(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ag),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.dc,j,j,j,j)}}
C.u4.prototype={}
C.ak2.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bg
u=v?B.F:B.m
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.I(q,B.q,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cx,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.I(r.j(0.6),B.q,1)
n.push(A.aE(a0,A.p(a0,A.X(B.cB,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a8))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.C(B.jd,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.atF,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.Fj,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f4(m,A.A(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.eg)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(D.boZ,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cF:B.bl,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.C(B.fp,A.v(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.eMJ)
a2=A.a([A.A(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.C(B.vf,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a3,B.a7,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.lf,A.v(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.q,1),a2,a0,a0,B.n),a0,a0,a0,B.hi,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.ax,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bqa,a0,a0,a0,a0)}}
C.aTz.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bg?B.bg:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bl:B.cF,q,B.P,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.m,q,B.e,B.j,0,q,q),B.cS,n],m)
if(p.z)o.push(new A.C(B.vc,n,q))
return new A.C(B.dc,A.v(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.Sc.prototype={
R(){return new C.bdu()}}
C.bdu.prototype={
gbWS(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.e5K,D.e5Q],l)
for(w=0;w<8;++w){v=D.a1f[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.G2:B.BA
q=t===s
r=A.X(r,q?B.ez:B.c1,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.x(v.b,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bD(1,B.bh,new A.x(v.c,n,A1.D6,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aT(24,24)
p=new A.ay(B.ez,2,B.q,-1)
s=new A.o(n,n,new A.bO(p,p,p,p),new A.bp(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aE(n,new A.C(B.eF,A.v(A.a([new A.C(B.mn,new A.cn(B.aO,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.DE(!0,new C.ak2(v,q.d,q.e,new C.d4U(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d4V(o,v),n,n,n,n,n,n,!1,B.a8))}k.push(new A.C(D.bqs,A.bH(D.fwC,new C.d4W(o,d),A.bl(B.b7,n,n,n,n,B.oc,n,n,new A.b7(A.m(16),B.Y),n,n,n)),n))
return A.bn(!0,new A.cS(new A.aY(0,1/0,0,m.a.b*0.9),A.cz(k,n,D.buF,n,n,B.ah,!0),n),!0,!1,B.af,!0,!0)}}
C.n8.prototype={
ag(){var w=this
return A.F(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a6().ac()],x.N,x.z)},
baR(d,e,f){return new C.n8(this.a,e,d,f)}}
C.Hf.prototype={
wa(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Hf(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aCN(d){var w=null
return this.wa(w,w,w,w,w,d,w,w,w,w,w,w)},
cFe(d){var w=null
return this.wa(w,w,w,w,d,w,w,w,w,w,w,w)},
baP(d,e,f){var w=null
return this.wa(d,w,w,w,w,w,w,w,e,w,f,w)},
cFT(d){var w=null
return this.wa(w,w,w,w,w,w,d,w,w,w,w,w)},
cG1(d){var w=null
return this.wa(w,w,w,w,w,w,w,w,w,d,w,w)},
cFc(d){var w=null
return this.wa(w,w,w,d,w,w,w,w,w,w,w,w)},
cG3(d){var w=null
return this.wa(w,w,w,w,w,w,w,w,w,w,w,d)},
cF9(d){var w=null
return this.wa(w,w,d,w,w,w,w,w,w,w,w,w)},
cF4(d){var w=null
return this.wa(w,d,w,w,w,w,w,w,w,w,w,w)},
Fo(d){var w=null
return this.wa(w,w,w,w,w,w,w,d,w,w,w,w)},
cGb(d,e,f,g,h,i,j,k,l,m,n){return this.wa(d,e,f,g,null,h,i,j,k,l,m,n)},
ag(){var w=this
return A.F(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cCS(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bMQ(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Cd.geb(D.Cd))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a2M)
q=l.$2("frame",D.a2d)
l=l.$2("texture",D.a28)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cGb(p,u,t,q,r,A.qI(d.h(0,"ribbon"))?A.FL(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.YL.prototype={
R(){return new C.az0(A.a([],x.I),D.Mn)},
gdY(){return this.c}}
C.az0.prototype={
a_(){var w,v=this
v.a1()
v.f=A.zk(0,1)
w=$.aw()
v.z=new A.ar(B.as,w)
v.Q=new A.ar(B.as,w)
v.kQ()
w=v.a
C.bAI(w.c,w.d).bz(new C.d5A(v),x.fL)},
q(){var w,v=this,u=v.f
u===$&&A.c()
u.q()
u=v.z
u===$&&A.c()
w=$.aw()
u.U$=w
u.P$=0
u=v.Q
u===$&&A.c()
u.U$=w
u.P$=0
v.a2()},
kQ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$kQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Ks(s.c,s.d),$async$kQ)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d5o(t,r))
t.auE()
case 1:return A.h(u,v)}})
return A.i($async$kQ,v)},
garh(){var w,v=this
if(!J.cl(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
auE(){var w,v,u=this.garh(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saV(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saV(0,w==null?"":w)},
c9_(d){this.m(new C.d5l(this,d))
this.auE()},
MY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$MY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.n8(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aPJ(r.c,r.d,s),$async$MY)
case 3:w=4
return A.b(t.kQ(),$async$MY)
case 4:if(t.c==null||J.cl(t.d)){w=1
break}q=J.q9(t.d,new C.d4X(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d4Y(t,p))
t.auE()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.AR(p+1,B.ct,B.kK),$async$MY)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$MY,v)},
Ax(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ax=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.garh()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aPJ(o.c,o.d,new C.n8(s,r,q,new A.S(p,0,!1))),$async$Ax)
case 3:w=4
return A.b(t.kQ(),$async$Ax)
case 4:if(t.c==null){w=1
break}t.m(new C.d5p(t))
case 1:return A.h(u,v)}})
return A.i($async$Ax,v)},
ND(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ND=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.garh()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d55(r),s,null,!0,!0,x.y),$async$ND)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bAt(s.c,s.d,r.a),$async$ND)
case 4:t.m(new C.d56(t))
w=5
return A.b(t.kQ(),$async$ND)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Th(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$ND,v)},
y7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$y7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ax(),$async$y7)
case 5:case 4:if(t.c==null){w=1
break}w=J.cy(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.Qt(s,r.r,o,p,q),$async$y7)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a5(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hlr(s,r.x,r.r),$async$y7)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Ks(s.c,s.d),$async$y7)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.J(l,new C.n8(""+(m+k),q,B.a.i(j.b),new A.S(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.AE(r.c,r.d,l),$async$y7)
case 11:w=12
return A.b(t.kQ(),$async$y7)
case 12:r=t.c
if(r==null){w=1
break}r.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$y7,v)},
a_S(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_S=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ax(),$async$a_S)
case 5:case 4:if(t.c==null){w=1
break}s=t.gy5(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dL(D.yB,new C.d5m(t),new C.d5n())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mo("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gT(o)
p.push(new F.mo(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fZH(o,new F.rc(s,r,"",p,new F.uo(q.d,null,null,null,null,"","","")),null),$async$a_S)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a_S,v)},
Nl(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Nl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ax(),$async$Nl)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.ac9,null,new C.d51(t),s,!0,!0,!0,D.aLS,!1,!1,x.N),$async$Nl)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cFe(r)
t.m(new C.d52(t,q))
s=t.a
w=7
return A.b(C.R1(s.c,s.d,q),$async$Nl)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Nl,v)},
Wt(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.ac9,null,new C.d57(t),r,!0,!0,!0,D.aLS,!1,!1,x.e),$async$Wt)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d58(t,s))
r=t.a
w=4
return A.b(C.R1(r.c,r.d,s),$async$Wt)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.AR(0,B.dU,B.oA)
case 1:return A.h(u,v)}})
return A.i($async$Wt,v)},
bO6(d){var w=d.bS(),v=B.a.aT(B.o.u(w.gce()),2,"0"),u=B.a.aT(B.o.u(w.gcu()),2,"0")
return""+w.gcj()+"-"+v+"-"+u},
gy5(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bW7()
if(r.e)w=D.aaW
else if(J.cl(r.d)){w=r.y
v=r.gy5(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eXn,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.C(A0.ahR,new C.Y3(w,v,0,q),q),q),B.by,t,B.an,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kd.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aE(q,A.p(q,D.eI4,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dP.j(0.45),B.J,18)],x.V),E.vN,B.n),q,q,q,q,B.Yr,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcC_(),q,q,q,q,q,q,!1,B.a8))
w.push(B.S)
w.push(A.hd(D.bGi,D.fw5,r.gaLs(),q))
B.d.v(u,w)}w=A.av(A.cd(A.v(u,B.m,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.ew,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kd.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.P,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dQ:B.A0
u=A.v(A.a([new A.C(D.brs,w,q),A.E(A.Iz(v,new C.d5y(r),J.ad(r.d)+1,q,r.gc8Z(),u,B.aO),1),r.bB2()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c8(q,D.ads,new A.an(B.W,q,B.b_,B.r,A.a([D.aKn,A.bn(!0,A.v(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bW7(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cy(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Jz(B.dW,"AI",h.gbyY(),!0))
if(h.a.f)f.push(new C.Jz(B.nd,"Cover",h.gbJv(),!1))
if(h.a.f)f.push(new C.Jz(B.ye,"Header",h.gbEt(),!1))
if(J.cy(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Jz(B.tT,"Print",h.gci_(),!1))
if(h.a.f&&J.cy(h.d)&&h.r>=0){v=h.w
u=v?B.hz:B.jg
t=v?"Save":"Edit"
f.push(new C.Jz(u,t,v?h.gcod():new C.d5i(h),!1))}if(h.a.f)f.push(new C.Jz(B.hy,"Add page",h.gaLs(),!1))
v=C.hhF(h.y.Q)
u=h.gy5(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.dmQ
else{k=new A.aT(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.jO.j(0.5),1,B.q,-1)
j=A.p(g,A.X(l.a,D.kd,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bO(i,i,i,i),new A.bp(k,k,k,k),g,new A.a8(B.a3,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kd.j(0.85)
p.push(new A.bD(1,B.bh,A.aE(B.c4,A.v(A.a([k,B.bB,new A.x(l.b,g,new A.G(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a8),g))}return new C.ak2(v,u,t+" \xb7 "+s+" "+r,new C.d5j(h),A.A(p,B.m,g,B.e,B.j,0,g,g),g)},
zA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ax(),$async$zA)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=F.a1B(B.d.aI(s," "))
s=t.c
s.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.d4Z(t,p),s,null,!0,!0,x.N),$async$zA)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.y7(),$async$zA)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Dq(),$async$zA)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.F1("Swahili (Kiswahili)",!0),$async$zA)
case 18:w=16
break
case 17:w=19
return A.b(t.cyK(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zA)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zA,v)},
Yl(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(E.jO.j(0.3),B.q,1),r=x.p
return new A.C(B.cC,A.aL(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.vN,B.a6),w,42,w,w,w,w,w,42),B.bf,A.E(A.v(A.a([A.d(f,w,w,w,w,w,w,A8.Td,w,w,w),A.d(g,w,w,w,w,w,w,O.T7,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bj,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d5k(d,h),w,w,w,w,w,w,w),w)},
Dq(){return this.bNB()},
bNB(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Dq=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d5b(r),a7,null,!0,!0,x.ei),$async$Dq)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eS("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.ca(null,null,!1,null,new C.d5c(o),a7,null,!0,!0,x.H).fe(new C.d5d(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.L)(d),++a1){k=d[a1]
J.ch(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.ag()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.yB[a1]
J.ch(j,i.a)}w=8
return A.b(C.agq(a0,a7,new C.d5e(o),d,l,e,j),$async$Dq)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.aa(a8)
n=A.t(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a5(l,!0).eJ()
l=o
l.shT($.aw())
J.aQ9(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.I(x.q).f
j=n
l.S(A.b2(null,null,null,null,null,B.r,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gco(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.ai(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.baR(m.b.h(0,a4).b,a7,new A.S(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.AE(j.c,j.d,l),$async$Dq)
case 11:w=12
return A.b(r.kQ(),$async$Dq)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.yB[a1].a)
a5=l.cCS(j,12,a7)
l=r.a
w=15
return A.b(C.R1(l.c,l.d,a5),$async$Dq)
case 15:if(r.c!=null)r.m(new C.d5f(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.AR(0,B.dU,B.oA)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.I(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.S(A.b2(a3?A.cqe("Undo",new C.d5g(r,p,f),null):null,null,null,null,null,B.r,null,j,null,B.ed,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Dq,v)},
F1(d,e){return this.cyL(d,e)},
cyK(d){return this.F1(d,!1)},
cyL(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$F1=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eS("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.ca(null,null,!1,null,new C.d5r(a0),k,null,!0,!0,x.H).fe(new C.d5s(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.ch(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a1O(m,new C.d5t(a0)),$async$F1)
case 10:w=8
break
case 9:w=11
return A.b(C.bCb(new C.d5u(a0),m,a2),$async$F1)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.aa(a1)
q=A.t(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a5(o,!0).eJ()
o=a0
o.shT($.aw())
J.aQ9(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.I(x.q).f
k=q
o.S(A.b2(null,null,null,null,null,B.r,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.baR(J.q(p,g).b,j.a,new A.S(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.AE(k.c,k.d,o),$async$F1)
case 12:w=13
return A.b(r.kQ(),$async$F1)
case 13:o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.S(A.b2(A.cqe("Undo",new C.d5v(r,d),null),null,null,null,null,B.r,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$F1,v)},
bB2(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d5_(v):u
r=A.aH(u,u,u,u,A.X(D.bC1,s?D.kd:B.b3,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cy(v.d)&&!v.w&&v.r>=0)s=A.hd(A.X(B.vr,B.EH,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.EH,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbJ4(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kd.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.av(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d50(v):u
return A.bn(!0,new A.C(D.brg,A.A(A.a([r,s,A.aH(u,u,u,u,A.X(B.ex,t<J.ad(v.d)?D.kd:B.b3,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.YP.prototype={
R(){return new C.bdP(new A.ar(B.as,$.aw()))}}
C.bdP.prototype={
ga1_(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a2()},
gbMl(){var w,v=this.ga1_()
A:{if("cover"===v){w=D.cSs
break A}if("book"===v){w=D.cOh
break A}w=D.dfx
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jO.j(0.5),n=x.p,m=A.A(A.a([D.dmR,B.av,D.bwE,A.aH(q,q,q,q,B.lm,q,q,q,new C.d7k(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.j5(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d7l(r),r.ga1_()==="page",q,q,q,q))
if(r.a.d)l.push(A.j5(q,q,q,D.fqR,q,new C.d7m(r),r.ga1_()==="book",q,q,q,q))
l.push(A.j5(q,q,q,D.fek,q,new C.d7n(r),r.ga1_()==="cover",q,q,q,q))
l=A.bY(B.bz,l,B.bq,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.T,!1,q,!0,B.r,q,A.aN(),r.d,q,q,q,q,q,2,A.br(q,new A.b4(4,A.m(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kz,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dm,!0,B.a4,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbMl(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mF(q,B.c.j(0.08),new A.x(s,q,B.IM,q,q,q,q,q,q,q,q,q),B.hD,new C.d7o(r,s),q,q,q,q))}return A.eI(q,E.Aw,A.cd(A.v(A.a([m,B.S,D.fu2,B.an,l,B.ac,k,B.N,A.bY(B.bz,w,B.bq,6,6),B.aA,A.dp(D.bGf,D.fuO,new C.d7p(r,d),A.bl(B.b7,q,q,q,q,B.oc,q,q,new A.b7(A.m(16),B.Y),q,q,q)),B.at,D.fpc],n),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.fz,q,q,B.ah),q,q,q,D.ahA,B.d0,q,new A.b7(p,new A.ay(o,1.4,B.q,-1)),q)}}
C.YN.prototype={
R(){return new C.az1(A.a([],x.Y))},
gdY(){return this.c}}
C.aec.prototype={}
C.az1.prototype={
a_(){this.a1()
this.kQ()},
kQ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Qw(p.c,p.d),$async$kQ)
case 3:o=e
n=A.a([],x.Y)
p=J.aV(o)
case 4:if(!p.C()){w=5
break}s=p.gT(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bAI(r.c,q),$async$kQ)
case 6:j=e
i=J
w=7
return A.b(C.Ks(t.a.c,q),$async$kQ)
case 7:m.push(new l.aec(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d5P(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kQ,v)},
b6f(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
PE(d,e){return this.cax(0,e)},
cax(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$PE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a5(s,!1).c8(A.e8(new C.d5O(u,e),!0,null,x.y)),$async$PE)
case 2:t=g
w=3
return A.b(u.kQ(),$async$PE)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.S(D.aNM)
return A.h(null,v)}})
return A.i($async$PE,v)},
F4(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$F4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.S(D.aNI)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.afK(s.c,s.d),$async$F4)
case 5:q=e
w=6
return A.b(t.kQ(),$async$F4)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.PE(0,B.d.iH(t.d,new C.d5T(q))),$async$F4)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Qt(p,s.f,r,n,o),$async$F4)
case 10:m=e
w=11
return A.b(t.kQ(),$async$F4)
case 11:if(m&&t.c!=null)t.c.I(x.q).f.S(D.aNM)
case 1:return A.h(u,v)}})
return A.i($async$F4,v)},
P8(d,e){return this.clW(0,e)},
clW(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$P8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d5S(t,e),s,null,!0,!0,x.y),$async$P8)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a20(s.c,s.d,e.a),$async$P8)
case 4:w=5
return A.b(t.kQ(),$async$P8)
case 5:case 1:return A.h(u,v)}})
return A.i($async$P8,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bB5(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(E.jO.j(0.6),B.q,1.6)
r=t===1?"space":"spaces"
k.push(A.aE(n,new A.fG(0.7142857142857143,A.p(n,A.v(A.a([D.dmS,B.ac,D.e4T,B.at,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kd.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.bb,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcBW(),n,n,n,n,n,n,!1,B.a8))}w=A.m(22)
v=A.I(E.jO.j(0.85),B.q,1.6)
s=A.aE(n,A.p(n,D.bNT,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jO.j(0.6),B.q,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d5U(d),n,n,n,n,n,n,!1,B.a8)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.jO.j(0.5),B.q,1)
w=A.p(n,A.A(A.a([s,B.bf,D.bx_,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eWt,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h5,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bTs,B.n),n,n,n,Am.LQ,D.bpq,n,n,n)
if(o.e)k=D.aaW
else k=k.length===0?D.b3v:A.cp(new C.d5V(k))
return A.c8(n,D.ads,new A.an(B.W,n,B.b_,B.r,A.a([D.aKn,A.bn(!0,A.v(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bB5(d){var w,v,u=this,t=null,s=u.b6f(d),r=d.c,q=x.p,p=A.a([A.bZ(0,A.f4(B.A,new A.a7(300,420,new C.Y3(d.b,s,r,t),t),B.f,B.du),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aE(t,A.p(t,D.bNc,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b3,B.q,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d5M(u,d),t,t,t,t,t,t,!1,B.a8),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.eW3,t,t,t)
v=r===1?"page":"pages"
return A.aE(t,A.v(A.a([new A.fG(0.7142857142857143,new A.an(B.W,t,B.aa,B.r,p,t),t),B.N,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kd.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d5N(u,d),t,t,t,t,t,t,!1,B.a8)}}
C.Jz.prototype={}
C.Y3.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dL(D.yB,new C.cEu(m),new C.cEv()),j=m.c,i=D.Cd.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.lT:B.bb
v=new C.cEw(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.e2c,28)],x.V)
u=x.p
t=A.a([A.bZ(0,A.b3(l,l,l,new C.bb4(j.x,h,l),B.au),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a3,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aT(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bp(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.ahS,8,0.85,2.2),v.$4(D.bu5,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.ahS,8,0.85,2.4))
else if(r==="corners")t.push(A.bZ(0,new A.C(D.bu1,A.b3(l,l,l,new C.baW(h,l),B.au),l),0,0,0))
r=A.X(D.awg[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.atF,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cF,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aQ,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bZ(0,new A.C(D.bux,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aG0(l),D.eLS),l,l,l,46,0,l))
return A.p(l,A.bw(D.a9D,new A.an(B.W,l,B.aa,B.r,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.a9D,i,new A.a8(B.ax,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bb4.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eL()
f.dB(11)
switch(this.b){case"plain":return
case"linen":$.W()
w=A.M()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.H()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.W()
q=A.M()
q.r=B.c.j(0.05).gp(0)
q.c=1
for(p=0;p<u;p+=4){r=q.H()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.aj()
l=f.aj()
k=f.aj()
$.W()
j=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
j.r=t.j(0.25+f.aj()*0.5).gp(0)
r=j.H()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.W()
j=A.a([],l)
h=new A.aO(k.r,B.ap,null,null,j)
j.push(new A.b5(v,t))
k=i-0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bF())
k=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.H()
k=h.gbL().a.snapshot()
o.drawPath((h.e=new A.cF(k)).a,r)
r.delete()}break
default:$.W()
w=A.M()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.aj()
m=f.aj()
l=f.aj()
r=w.H()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.W()
g=A.M()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.aj()
m=f.aj()
l=f.aj()
r=g.H()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
ar(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.baW.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.W(),k=A.M(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bO
for(w=e.a,v=e.b,v=[D.eD7,new A.cI([w,0,-1,1]),new A.cI([0,v,1,-1]),new A.cI([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aO(l,B.ap,null,null,s)
s.push(new A.b5(r+p*34,q))
s.push(new A.ap(r,q))
s.push(new A.ap(r,q+o*34))
m=k.H()
s=n.gbL().a.snapshot()
w.drawPath((n.e=new A.cF(s)).a,m)
m.delete()
s=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
s.r=j.j(0.9).gp(0)
m=s.H()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
ar(d){return!d.b.A(0,this.b)}}
C.u5.prototype={}
C.Yl.prototype={
R(){return new C.bb2()}}
C.bb2.prototype={
go0(){var w=this.d
return w===$?this.d=this.a.c:w},
gy5(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ar(new A.bb(w.b,B.b4,B.aN),$.aw())}return v},
gaA1(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ar(new A.bb(w.c,B.b4,B.aN),$.aw())}return v},
gapR(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ar(new A.bb(w.y,B.b4,B.aN),$.aw())}return v},
q(){var w=this,v=w.gy5(0),u=v.U$=$.aw()
v.P$=0
v=w.gaA1()
v.U$=u
v.P$=0
v=w.gapR()
v.U$=u
v.P$=0
w.a2()},
aqs(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.j5(s,s,s,new A.x(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cXW(this,f,u),e===u,s,s,s,s))}return A.bY(B.bz,r,B.bq,6,8)},
aw5(d){var w=null,v=B.c.j(0.07)
return A.br(w,new A.b4(4,A.m(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.ky,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.go0(),a0=f.gy5(0),a1=a0.a.a,a2=f.gaA1(),a3=a2.a.a,a4=f.gapR(),a5=d.baP(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a7(190,260,A.f4(B.A,new A.a7(270,370,new C.Y3(a5,d,f.a.e,e),e),B.f,B.du),e),e,e,e)
a0=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a0,e,e,e,e,e,2,f.aw5("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYk(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dm,!0,B.a4,e,B.am,e,e,e,e)
a2=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a2,e,e,e,e,e,2,f.aw5("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYl(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dm,!0,B.a4,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.yB[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b3
q=r.a===q
o=new A.ay(p,q?3:1,B.q,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bO(o,o,o,o),e,e,new A.a8(B.ax,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.az
v.push(A.aE(e,A.v(A.a([p,B.cS,new A.x(t.b,e,new A.G(!0,q,e,e,e,e,10.5,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYm(f,t),e,e,e,e,e,e,!1,B.a8))}v=A.bY(B.bz,v,B.bq,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b7.j(0.35):B.c.j(0.07)
m=new A.aT(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.ez:B.K,2,B.q,-1)
q.push(A.aE(e,A.p(e,A.X(D.awg[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bO(o,o,o,o),new A.bp(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYn(f,n),e,e,e,e,e,e,!1,B.a8))}q=A.bY(B.bz,q,B.bq,8,8)
a4=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a4,e,e,e,e,e,2,f.aw5("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYo(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dm,!0,B.a4,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mH,e,e,e)
m=A.a([],w)
for(l=D.Cd.gdK(D.Cd),l=l.gaf(l);l.C();){k=l.gT(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ez:B.b3
g=r.e===i
o=new A.ay(h,g?3:1,B.q,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bO(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.az
m.push(A.aE(e,A.v(A.a([j,B.bB,new A.x(i,e,new A.G(!0,h,e,e,e,e,10,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYp(f,k),e,e,e,e,e,e,!1,B.a8))}m=A.bY(B.bz,m,B.bq,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mH,e,e,e)
k=f.go0()
return new A.C(new A.Q(0,0,0,a3.f.d),A.bn(!0,new A.cS(new A.aY(0,1/0,0,a1.a.b*0.92),A.cz(A.a([D.foF,B.ac,d,B.aQ,a0,B.S,a2,B.aA,D.fuC,B.N,v,B.aA,D.foP,B.N,q,B.aA,a4,B.aA,p,B.N,m,B.aA,l,A.kX(e,9,""+B.k.V(f.go0().f),36,18,new C.cYq(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mH,e,e,e),B.an,f.aqs(D.a2M,f.go0().r,new C.cYr(f),D.diI),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mH,e,e,e),B.an,f.aqs(D.a2d,f.go0().w,new C.cYs(f),D.diN),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mH,e,e,e),B.an,f.aqs(D.a28,f.go0().x,new C.cYu(f),D.dkc),B.an,A.iE(e,B.b7,e,B.af,e,new C.cYv(f),e,e,e,D.fj9,f.go0().z),B.by,A.bH(D.fnv,new C.cYw(f,a6),A.bl(B.b7,e,e,e,e,B.oc,e,e,new A.b7(A.m(16),B.Y),e,e,e))],w),e,R.ahp,e,e,B.ah,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aG0.prototype={
a5(d,e){var w,v,u,t=new A.aO($.W().r,B.ap,null,null,A.a([],x.v))
t.E(new A.b5(0,0))
w=e.a
t.E(new A.ap(w,0))
v=e.b
t.E(new A.ap(w,v))
t.E(new A.ap(w/2,v-12))
t.E(new A.ap(0,v))
t.E(new A.bF())
u=A.M()
u.saq(D.bU5.av(0,new A.a9(0,0,0+w,0+v)))
d.aO(t,u)},
ar(d){return!1}}
C.bgi.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=A.M()
w.saq(D.bT8.av(0,new A.a9(0,0,a3,a4)))
a5.aZ(new A.a9(0,0,a3,a4),w)
v=B.k.dw(a2/112)
u=new A.eL()
u.dB(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cSr[u.aB(9)]
j=u.aB(14)
J.by(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a9(n,j,n+m,j+l)
h=A.bA(i,B.hb)
g=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
f=A.aq(k,B.c,0.12)
f.toString
e=A.aq(k,B.w,0.45)
e.toString
g.saq(new A.a8(B.a3,B.a7,B.x,A.a([f,k,e],t),a0,a0).av(0,i))
d=g.H()
w.drawRRect(A.er(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
e.r=E.jO.j(0.55).gp(0)
d=e.H()
w.drawRect(A.c0(new A.a9(h,j,g,j+2)),d)
d.delete()
j=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
j.r=E.jO.j(0.4).gp(0)
d=j.H()
w.drawRect(A.c0(new A.a9(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aB(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.saq(D.bSw.av(0,new A.a9(0,r,a3,q)))
d=p.H()
w.drawRect(A.c0(new A.a9(0,r,a3,q)),d)
d.delete()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.jk
d=p.H()
w.drawRect(A.c0(new A.a9(0,q,a3,q+14)),d)
d.delete()}w=A.M()
w.r=D.b6T.j(0.72).gp(0)
a5.aZ(new A.a9(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.M()
a4.saq(new A.bS(B.A,0.5,B.x,a0,0,A.a([D.bdB.j(0.22),B.K],t),a0,a0).av(0,A.bT(new A.u(w,a2),a1)))
a5.ae(new A.u(w,a2),a1,a4)},
ar(d){return!1}}
C.b9g.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aK(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.kN(new A.o(A.aq(D.kd,D.bhY,w/4),o,new A.bO(B.Y,new A.ay(B.w.j(0.12),1,B.q,-1),B.Y,B.Y),B.JV,o,o,B.n),B.bd,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aG0,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aT(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jO.j(0.6),o,o,new A.bp(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.q0,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aWT,u,D.bU3,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dk,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aG0(o),D.eLN),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aTz(p.y,r,G.ir,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.r,o,o,o,o,o,2,A.br(o,B.ey,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ir.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f8K,!0,B.a4,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ir.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.w,o,o,o,o,o,2,A.br(o,B.ey,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ir.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f_W,!0,B.a4,B.zo,B.am,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.f8C,o,o,o),B.at,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ir.j(0.5),o,o,o,o,o,o,o,o,11,B.cF,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.N,A.A(A.a([A.E(A.p(o,o,B.f,D.Eu.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fp,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.Eu.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.Eu.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aA],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.ir.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Xj(A.dn(A.a([A.dn(o,o,o,o,o,o,o,o,o,D.f31,B.a.ap(k,0,1)),A.dn(o,o,o,o,o,o,o,o,o,o,B.a.b1(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.ir.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.v(n,B.F,o,B.e,B.j,0,B.p),B.r,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.C(B.hY,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.ir.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.A(A.a([u,A.E(A.p(o,A.bw(B.JV,new A.an(B.W,o,B.aa,B.r,A.a([t,new A.C(D.btz,A.v(s,B.aj,o,B.e,B.j,0,B.p),o),A.ao(0,A.c_(o,new A.o(o,o,o,o,o,new A.a8(B.a3,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bd),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.JV,v,D.bUB,B.n),o,o,o,o,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.r,l,o)}}
C.aoO.prototype={
R(){return new C.aCx(A.a([],x._))},
bp(){return this.r.$0()},
pO(){return this.w.$0()},
gdY(){return this.c}}
C.aCx.prototype={
a_(){var w,v
this.a1()
this.vH()
w=this.a
v=w.c
if(v.length!==0)C.a6E(v,w.e,w.d.w)},
vw(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fZK(r,t.e,!1,s.w,new C.dT7(u),null,s),$async$vw)
case 2:w=3
return A.b(u.vH(),$async$vw)
case 3:return A.h(null,v)}})
return A.i($async$vw,v)},
a_1(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a_1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fZK(r,t.e,!0,s.w,new C.dT6(u),null,s),$async$a_1)
case 2:w=3
return A.b(u.vH(),$async$a_1)
case 3:return A.h(null,v)}})
return A.i($async$a_1,v)},
vH(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vH=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.At(q.a.c),$async$vH)
case 7:p=e
if(q.c!=null)n=q.e||J.cy(p)
else n=!1
if(n)q.m(new C.dT9(q,p))
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
return A.b(C.Gb(q.a.c).cM(0,B.pE),$async$vH)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dTa(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dTb(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vH,v)},
O7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$O7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.S(D.ePo)
w=3
return A.b(C.Gb(t.a.c),$async$O7)
case 3:r=e
w=4
return A.b(C.fFn(t.a.c,r),$async$O7)
case 4:q=e
w=5
return A.b(C.Gb(t.a.c),$async$O7)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dT5(t,p))
o=t.c.I(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.S(A.b2(null,null,null,q?B.dy:B.cR,null,B.r,null,s,null,B.mj,null,null,null,null,null,null,null,null,null,null))
t.a.pO()
case 1:return A.h(u,v)}})
return A.i($async$O7,v)},
HC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i61(l),$async$HC)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hAB(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aZb(q,p.e,l,"Each family tree costs $"+B.k.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$HC)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hhP(r)
o=Date.now()
n=t.a.c
m=new C.kA(l,r.toUpperCase(),p,!0,B.T,D.C2,new A.S(o,0,!1),0,n,D.tE)
w=5
return A.b(C.a26(n,m),$async$HC)
case 5:w=6
return A.b(t.vH(),$async$HC)
case 6:t.a.bp()
t.a.pO()
if(t.c==null){w=1
break}t.Ee(m)
case 1:return A.h(u,v)}})
return A.i($async$HC,v)},
Ee(d){return this.ccz(d)},
ccz(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Ee=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.At(u.a.c),$async$Ee)
case 2:n=l.r8(k.dH(f,new C.dT8(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hw(m,new C.aoI(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Ee)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a26(u.a.c,o),$async$Ee)
case 6:case 5:w=7
return A.b(u.vH(),$async$Ee)
case 7:u.a.pO()
return A.h(null,v)}})
return A.i($async$Ee,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tD(p)
if(r.e)return A.av(A.mG(q,p?B.br:B.bn,q,q,q,q,q,q,q,q),q,q,q)
if(J.cl(r.d)){w=p?B.dX:B.c
v=A.m(15)
u=A.aG(!1,B.a1,!0,q,A.aL(!1,q,!0,A.p(q,D.bHk,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.q,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcbD(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Fe(A.p(q,A.v(A.a([u,B.aQ,t,B.N,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.br:B.bn,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.e1,A.bH(D.fvQ,r.gaPt(),A.bl(B.bW,q,q,q,q,q,Al.Yu,q,new A.b7(A.m(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.btv,q,q,1/0),15,B.af,1.05,D.a8j,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b6],v)
if(J.cy(r.d))w.push(A.aH(q,q,q,q,A.X(B.yl,B.aV,q,q,q,q),q,q,q,new C.dTd(r),q,q,q,q,"Sync family trees with database",q))
if(J.cy(r.d))w.push(A.aH(q,q,q,q,A.X(B.yc,B.aV,q,q,q,q),q,q,q,r.gaeL(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dp(E.an_,D.fc9,r.gaPt(),A.bl(B.bW,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.Fe(r.cyP(J.q(r.d,s),o),14,B.af,1,D.a8j,q))
B.d.v(w,u)}return A.v(A.a([p,B.aA,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cyP(d,e){var w=null,v=e.a,u=v?B.dX:B.c,t=A.m(14),s=A.I((v?B.dZ:B.bS).j(0.55),B.q,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.ek,10)],x.V),q=A.m(14),p=A.p(w,D.bGo,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.ganL(),m=d.d?"":" \xb7 Public",l=d.y===D.kl?" \xb7 View only":"",k=x.p
l=A.E(A.v(A.a([o,B.bB,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aG(!1,B.a1,!0,w,A.aL(!1,q,!0,new A.C(B.bC,A.A(A.a([p,B.bf,l,A.X(B.Mz,v?B.br:B.bn,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dTc(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aoI.prototype={
R(){return new C.aCu(A.a([],x._),A.aX(x.N),A.b6U())},
bp(){return this.r.$0()},
gdY(){return this.c}}
C.aCu.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.abF()
w=u.a
v=w.c
if(v.length!==0)C.a6E(v,w.e,w.d.w)},
q(){var w=this.w
w.U$=$.aw()
w.P$=0
this.a2()},
a1X(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1X=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xz("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dSy(r),s,null,!0,!0,x.y),$async$a1X)
case 3:if(e!==!0||t.c==null){w=1
break}t.J7()
t.m(new C.dSz(t,r))
w=4
return A.b(t.vy(),$async$a1X)
case 4:t.a.bp()
t.xz(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a1X,v)},
coS(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.dSt(w,f,d,e))},
aRJ(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dm()
u.e4(w,v,0,1)
u.jH(q,q,1,1)
this.w.sp(0,u)},
b8u(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eF(new Float64Array(16))
q.dZ(r)
w=q.Ck()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dm()
t.e4(r,u,0,1)
t.jH(v,v,1,1)
t.e4(-r,-u,0,1)
t.ix(0,q)
s.sp(0,t)},
abF(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$abF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.At(u.a.c),$async$abF)
case 2:t=s.r8(r.dH(e,new C.dS1(u)))
if(t!=null&&u.c!=null)u.m(new C.dS2(u,t))
return A.h(null,v)}})
return A.i($async$abF,v)},
xz(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.S(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
vw(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.fZK(o,t,!1,r,new C.dSg(u),q.a,s),$async$vw)
case 2:n=A
m=J
w=3
return A.b(C.Gb(u.a.c),$async$vw)
case 3:p=n.r8(m.dH(e,new C.dSh(u)))
if(p!=null&&u.c!=null)u.m(new C.dSi(u,p))
return A.h(null,v)}})
return A.i($async$vw,v)},
J7(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cB(w,0)},
vy(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a26(t,s),$async$vy)
case 2:return A.h(null,v)}})
return A.i($async$vy,v)},
a0x(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0x=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tO(q,t.a.c)){t.xz("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.i7a(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a0x)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.J7()
t.m(new C.dSs(t,r))
w=4
return A.b(t.vy(),$async$a0x)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0x,v)},
a_f(){return this.ccB()},
ccB(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_f=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tO(q,t.a.c)){t.xz("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.P(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dSq(r,new C.tD(q.ax.a===B.I)),s,null,!0,!0,x.y),$async$a_f)
case 3:if(e!==!0||t.c==null){w=1
break}t.J7()
t.m(new C.dSr(r,t))
w=4
return A.b(t.vy(),$async$a_f)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_f,v)},
Vj(d){return this.by8(d)},
by8(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tO(r,t.a.c)){t.xz("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dRQ(t,d),r,null,!0,!0,x.P),$async$Vj)
case 3:s=f
if(s==null){w=1
break}t.J7()
t.m(new C.dRR(t,s))
w=4
return A.b(t.vy(),$async$Vj)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vj,v)},
a2i(d){return this.cAX(d)},
cAX(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a2i=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.ca(null,null,!0,null,new C.dSB(u,d,new C.tD(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a2i)
case 2:return A.h(null,v)}})
return A.i($async$a2i,v)},
c8U(d){var w=this,v=w.d
v===$&&A.c()
if(C.tO(v,w.a.c))w.NN(d)
else w.a2i(d)},
ahe(d,e){return this.csJ(d,e)},
csJ(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ahe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.dSv(new C.tD(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ahe)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ahe,v)},
HH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kl?3:5
break
case 3:w=6
return A.b(C.fNA(t.a.c),$async$HH)
case 6:s=e
o=t.a
r=C.h6p(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ahe(!s,!r),$async$HH)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bAA(o,t.a.c)){t.xz("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.l2(o,"Cancel","Remove",q.y===D.kl?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$HH)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aO5(t.a.c,t.d.a),$async$HH)
case 11:t.a.bp()
o=t.c
if(o==null){w=1
break}A.iM(o,null)
case 1:return A.h(u,v)}})
return A.i($async$HH,v)},
a9e(d){return this.bJc(d)},
bJc(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a9e=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tO(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b5(s,new C.dRS(p))){o=A.U(s)
p.a=A.r8(new A.cR(new A.a2(s,new C.dRT(d),o.k("a2<1>")),new C.dRU(),o.k("cR<1,n>")))}q=p.a
if(q==null)q=d.d
t.J7()
t.m(new C.dRV(t,s,d,q))
w=3
return A.b(t.vy(),$async$a9e)
case 3:t.xz(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a9e,v)},
NN(d){return this.bLi(d)},
bLi(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tO(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a2i(d),$async$NN)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.dRZ(t,d),r,null,!0,!0,x.P),$async$NN)
case 6:s=f
if(s==null){w=1
break}t.J7()
t.m(new C.dS_(t,s))
w=7
return A.b(t.vy(),$async$NN)
case 7:case 1:return A.h(u,v)}})
return A.i($async$NN,v)},
cza(){var w=this,v=w.d
v===$&&A.c()
if(!C.tO(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dSA(w))
w.vy()},
Y7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Y7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bAA(n,t.a.c)){t.xz("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.aw()
r=new A.ar(B.as,s)
q=t.d.e
p=A.bm(new A.K(q,t.gc7p(),A.U(q).k("K<1,n>")).c_(0,new C.dSb()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dSc(t,new C.tD(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$Y7)
case 3:o=e
r.U$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.J7()
t.m(new C.dSd(t,p))
w=4
return A.b(t.vy(),$async$Y7)
case 4:t.xz("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Y7,v)},
c7q(d){return B.a.i(d.toLowerCase())},
cbo(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tO(v,w)
t=r.d
s=C.hXq(t)
C.i65(q,t.b,u,C.hXp(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tD(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a2(l,new C.dSI(),A.U(l).k("a2<1>")).gM(0)
l=n?B.bY:B.iN
v=A.X(B.ZF,n?B.br:B.bn,o,o,o,18)
u=x.p
v=A.a([new A.C(B.AV,A.aL(!1,o,!0,new A.C(B.hK,A.A(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,o,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dSJ(p,d),o,o,o,o,o,o,o),o),new A.C(B.n8,p.bW8(m),o)],u)
if(p.d.y===D.kl){t=B.ri.j(0.15)
s=A.m(12)
r=A.I(B.ri.j(0.45),B.q,1)
q=C.G9(p.d,p.a.c)
v.push(new A.C(B.xy,A.p(o,A.A(A.a([D.bLA,B.av,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,12,o,o,B.a5,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.ix,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b6],u)
if(C.tO(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Jv("Undo",B.r6,p.gcz9(),m,o,o))
u.push(new C.Jv("Family Book",D.bB8,p.gcbn(),m,B.t7,o))
if(C.tO(p.d,p.a.c))u.push(new C.Jv("Display settings",B.BF,p.gccA(),m,B.aZ,o))
u.push(new C.Jv("Sync",B.yc,p.gaeL(),m,o,o))
t=p.d
if(t.y===D.kl||C.bAA(t,p.a.c)){t=p.d.y===D.kl?"Remove shared tree":"Delete tree"
u.push(new C.Jv(t,B.e5,p.gbJm(),m,B.fZ,o))}if(C.tO(p.d,p.a.c))u.push(new C.Jv("Add member",B.vD,new C.dSK(p),m,B.bW,o))
v.push(new A.C(R.ah2,A.A(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.ganL()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cp(new C.dSL(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?K.ZJ:Y.MA,o,o,o,o,o)
v.push(A.av(A.hd(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dSM(p),o),o,o,o))}return A.c8(o,l,A.bn(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bW8(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fv.j(0.35),B.dk,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.X(B.y5,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a1,!0,m,A.aL(!1,m,!0,A.p(m,D.bOC,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.q,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gaeL(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.eZi,m,m,m)
r=r.ganL()
p=n.d.ganL()===1?"member":"members"
o=x.p
p=A.a([s,B.bf,A.E(A.v(A.a([q,B.bB,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a5,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tO(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bLM,m,m,m,n.gcmg(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jh:B.mr
r=r?"Private":"Public"
r=A.E(n.au3(q,"Privacy",r,n.a.d.w?n.gcya():m),1)
q=A.E(n.au3(B.yd,"Tree code",n.d.c,new C.dS0(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.A(A.a([r,B.ab,q,B.ab,A.E(n.au3(D.bCR,"Collaborators",p,n.gc_B()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kl){s=B.c.j(0.15)
B.d.v(p,A.a([B.N,A.aG(!1,B.a1,!0,A.m(999),A.aL(!1,A.m(999),!0,new A.C(B.fI,A.A(A.a([A.X(B.oJ,B.c,m,m,m,14),B.eb,A.d("View only",m,m,m,m,m,m,B.aOY,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ag)],o))}return A.p(m,A.bw(u,new A.an(B.W,m,B.aa,B.r,A.a([t,new A.C(B.F6,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bSA,B.n),m,m,m,m,m,m,m,1/0)},
au3(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a1,!0,A.m(14),A.aL(!1,A.m(14),!0,new A.C(L.aia,A.v(A.a([A.X(d,B.c,w,w,w,18),B.at,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.uw,A.d(f,w,1,B.a2,w,w,w,P.zs,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)}}
C.bdx.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gam(r)&&s.c.length===0)return B.bH
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bdA(s,t),new A.at(w,v))],x.p)
r=r.gdK(r)
B.d.v(u,r.dt(r,new C.d5Z(this),x.l))
r=s.c
B.d.v(u,new A.K(r,new C.d6_(this),A.U(r).k("K<1,r>")))
return new A.C(B.tA,new A.a7(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.JH.prototype={}
C.Fq.prototype={}
C.bdz.prototype={
gbgT(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aI6.prototype={}
C.bdA.prototype={
bL_(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.W()
v=A.M()
v.r=B.bA.j(0.75).gp(0)
v.c=2
v.d=B.bO
d.bA(new A.u(n,w),new A.u(m,w),v)
u=(n+m)/2
t=new A.aO(q.r,B.ap,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.b5(u,q))
s=w-1.1
r=w-8.8
t.E(new A.pv(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.pv(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bF())
q=A.M()
q.r=B.c.gp(0)
d.ae(new A.u(u,w),9,q)
q=A.M()
q.r=B.bA.gp(0)
d.aO(t,q)},
bKY(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b0(a0,new C.d6j())
w=f.b
v=w+(B.d.gL(a0).b-w)/2
u=B.d.b5(a0,new C.d6k(f))
t=new A.K(a0,new C.d6l(f),A.U(a0).k("K<1,N>")).c_(0,new C.d6m()).cI(0,1/0,B.uS)
w=f.a
d.bA(f,new A.u(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.L)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.H()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lR(m)
i=Math.min(10,l/2)
l=$.W()
h=A.a([],q)
g=new A.aO(l.r,B.ap,null,null,h)
h.push(new A.b5(w,v-i))
l=j*i
h.push(new A.cU(w,v,w+l,v))
h.push(new A.ap(n-l,v))
h.push(new A.cU(n,v,n,v+i))
h.push(new A.ap(n,o.b))
k=e.H()
n=g.gbL().a.snapshot()
r.drawPath((g.e=new A.cF(n)).a,k)
k.delete()}},
a5(d,e){var w,v,u,t,s,r,q,p,o
$.W()
w=A.M()
w.r=B.bW.j(0.75).gp(0)
w.c=2.2
w.b=B.ae
w.d=B.bO
w.e=B.fA
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.L)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bKY(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bL_(d,w,q.a,q.b)}},
ar(d){return d.b!==this.b}}
C.bhf.prototype={
gc5e(){var w=this.c
if(B.a.i(w.y).length!==0)return D.dfw
switch(w.c.a){case 0:return D.cKc
case 1:return D.cVd
case 2:return D.da3}},
gc5h(){var w=this.c,v=C.hha(w.w),u=C.hha(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc5e(),p=t.c,o=I.bBu(p.f),n=t.gc5h(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.aB:B.c,j=A.I(r?B.aB:B.c,B.q,2)
if(o!=null)w=A.t4(B.A,s,B.cm,B.bR,!1,s,o,!1,s,s)
else{w=A.a([B.d.gL(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a3,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hS(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.ax,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.Fm,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.aB:B.c,B.q,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.f8f,s,s,s),B.f,s,s,new A.o(B.cc,s,w,j,s,s,B.n),s,s,s,s,D.bvn,s,s,s),s,s,s,-6,-4,s))}k=r?B.cE:B.c
j=A.m(8)
w=A.I(B.d.gL(q).j(0.35),B.q,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dE,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cE,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bn,s,s,s,s,s,s,s,s,7.5,s,s,B.a5,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aE(s,new A.a7(84,112,A.v(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.at,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.aYM,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bvy,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a8)}}
C.bcE.prototype={
a5(d,e){var w,v,u,t,s,r,q
$.W()
w=A.M()
v=this.b
u=v?B.c:D.b9x
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
ar(d){return d.b!==this.b}}
C.buX.prototype={
B(d){var w=this,v=null,u=new C.f8C(w),t=w.c,s=t?B.cE:B.c,r=A.m(12),q=u.$3(B.hy,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bF:B.f9,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.ya,"Zoom out",w.e)
return A.aG(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.f,t?B.bF:B.f9,v,v,v,1,v,v,v,v,v,22),u.$3(B.akv,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dp,v,v,v,B.ag)}}
C.bkB.prototype={
B(d){var w=this,v=null,u=B.bW.j(0.15),t=A.I(B.bW,B.q,2),s=w.e,r=x.p
t=A.aE(v,A.p(v,A.v(A.a([A.X(s?K.ZJ:Y.MA,B.bW,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.f4C,v,v,v)],r),B.m,v,B.bb,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a8)
u=A.a([t,B.an,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.f2B,B.L,v,v)],r)
if(s){t=A.a([B.an],r)
s=w.d
B.d.v(t,new A.K(s,new C.eKx(w),A.U(s).k("K<1,r>")))
B.d.v(u,t)}return new A.a7(84,v,A.v(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.Zo.prototype={
R(){return new C.aAW()},
bp(){return this.Q.$0()},
gdY(){return this.w}}
C.aAW.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a1()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aP()
r.d=new A.ar(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aP()
r.e=new A.ar(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aP()
r.f=new A.ar(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aP()
r.r=new A.ar(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aP()
r.w=new A.ar(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aP()
r.x=new A.ar(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.c
r.y=t==null?D.xL:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hYY(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
q(){var w,v=this,u=v.d
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
v.a2()},
P9(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$P9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.h6p(p.y,p.w)
w=3
return A.b(A.le(t.a.w,B.HL),$async$P9)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aZb(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$P9)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hAC(p.y,p.w)
t.a.bp()
case 5:w=7
return A.b(An.Gk(78,800),$async$P9)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dmb(t,q))
case 1:return A.h(u,v)}})
return A.i($async$P9,v)},
c5g(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hV(B.o.u(1000*Date.now()),w,D.xL,null,null,null,"","","","","",1,!1,0)
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
s=v.aCT(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a5(k,!1).O(s)},
a8Q(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a8Q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dma(r),s,null,!0,!0,x.y),$async$a8Q)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a5(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a8Q,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tD(j),h=l.a.e,g=A.U(h).k("a2<1>"),f=A.B(new A.a2(h,new C.dmk(l),g),g.k("J.E"))
h=j?B.dX:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.btR,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aB,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hp(A.aL(!1,k,!0,new A.C(B.lL,A.X(B.e5,B.ox,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbG0(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.js:B.iQ
t=I.bBu(l.as)
if(l.as==null)s=A.X(B.oC,j?B.br:B.bn,k,k,k,40)
else s=k
s=A.av(A.aE(k,new A.an(B.W,k,B.aa,B.r,A.a([A.hq(u,t,s,k,42),A.ao(0,A.hq(B.bW,k,D.bFt,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc5d(),k,k,k,k,k,k,!1,B.a8),k,k,k)
t=l.d
t===$&&A.c()
t=C.aAY(t,"Full name",B.mo,1,1,i,B.m_)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.S,new C.bhd(i,u,new C.dml(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bnv],q)
o=l.a.e
B.d.v(p,new A.K(o,new C.dmm(),A.U(o).k("K<1,eD<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bnx],q)
B.d.v(q,new A.K(f,new C.dmo(),A.U(f).k("K<1,eD<n?>>")))
o=A.v(A.a([t,B.an,new C.acB(i,r,"Who is their parent?",p,new C.dmp(l),k,o),B.aA,n,B.an,new C.acB(i,m,"Who is their spouse / partner?",q,new C.dmq(l),k,o)],v),B.aj,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aAY(q,"Birth date",D.ajz,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aAY(m,"Birth place",B.ZY,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aAY(n,"Date of death (if deceased)",D.alQ,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aAY(p,"Occupation",B.a00,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.r,w,k),B.aA,s,B.by,new C.acC(i,"Identity",u,k),B.ac,new C.acC(i,"Family links",o,k),B.ac,new C.acC(i,"Life details",A.v(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aAY(r,"Notes",B.kP,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aAX(i,"Child order",l.ccO(l.at),new C.dmr(l),new C.dms(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fX7(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dmt(l):k
B.d.v(r,A.a([B.S,new C.aAX(i,"Visible in tree",u,w,new C.dmu(l),k)],v))}r.push(B.S)
w=j?B.js:B.iQ
u=A.m(14)
t=A.I(j?B.dZ:B.bS,B.q,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iE(k,B.bW,k,B.af,k,new C.dmv(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.agC,k,k,k))
r.push(B.by)
w=j?B.aP:B.aB
j=j?B.dZ:B.bS
r.push(A.A(A.a([A.E(A.dT(B.nu,new C.dmn(d),A.dg(k,k,k,k,k,k,k,k,k,w,k,k,B.ck,k,new A.b7(A.m(14),B.Y),new A.ay(j,1,B.q,-1),k,k,k,k)),1),B.bf,A.E(A.bH(D.eIc,l.gc5f(),A.bl(B.aV,k,k,0,B.c,k,B.ck,k,new A.b7(A.m(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.at)
return A.ej(B.h9,k,B.af,h,new A.a7(420,k,A.cd(A.v(r,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),k),D.ahw,k,B.agU,new A.b7(g,B.Y),k,k)},
ccO(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.acC.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.js:B.iQ,s=A.m(16)
return A.v(A.a([new A.C(D.ahV,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.dZ:B.bS,B.q,1),s,w,w,B.n),w,w,w,w,B.bj,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bhe.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dX:B.c,r=A.m(12),q=A.I((t?B.dZ:B.bS).j(0.85),B.q,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aP:B.aB,u,u,u,u,u,u,u,u,14,u,u,B.a5,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.T,!1,u,!0,B.r,u,A.aN(),v.d,u,u,u,u,u,2,A.br(u,B.ey,u,B.vh,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.br:B.bn,u,u,u,u,u,u,u,u,u,u,u,B.cv,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bW,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ai,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.acB.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dX:B.c,s=A.m(12),r=A.I((u?B.dZ:B.bS).j(0.85),B.q,1),q=A.X(B.r0,u?B.br:B.bn,v,v,v,v),p=A.l(v,v,u?B.aP:B.aB,v,v,v,v,v,v,v,v,14,v,v,B.a5,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dX:B.c
return A.p(v,new A.Dk(A.S3(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.br:B.bn,v,v,v,v,v,v,v,v,v,v,v,B.cv,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.ld,v,v,v)}}
C.bhd.prototype={
B(d){var w=new C.dmw(this)
return A.A(A.a([w.$3(D.Zh,"Male",B.Nl),B.ab,w.$3(D.aiN,"Female",B.N6),B.ab,w.$3(D.xL,"Other",B.ne)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aAX.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.js:B.iQ,r=A.m(14),q=A.I(t?B.dZ:B.bS,B.q,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aB,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.E(A.v(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.br:B.bn,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aH8(u,B.ya,w.f,v),B.bp,new C.aH8(u,B.hy,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ei,v,v,v)}}
C.aH8.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bW.j(0.12)
else w=s.c.a?B.dX:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bW
else t=(s.c.a?B.br:B.bn).j(0.4)
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,new A.a7(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ag)}}
C.acD.prototype={
bOH(d){switch(d.a){case 0:return B.bW
case 1:return B.bA
case 2:return B.cV}},
bOI(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aVW(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
zV(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dX:B.c
u=A.m(12)
t=A.I((w?B.dZ:B.bS).j(0.85),B.q,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bW,p,p,p,18),B.av],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.br:B.bn,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.v(A.a([q,B.at,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.aB,p,p,p,p,p,p,p,p,14,p,p,B.P,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.A(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cC,B.xv,p,p,1/0)},
adg(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.js:B.iQ,s=A.m(16),r=A.I(v?B.dZ:B.bS,B.q,1)
return A.v(A.a([new A.C(D.ahV,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hlT(r,q),o=q.c,n=t.bOH(o),m=I.bBu(q.f),l=t.e.a,k=l?B.dX:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.aB,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.kl?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.br:B.bn,s,s,s,s,s,s,s,s,12,s,s,B.a5,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.q,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.hq(u,m,m==null?A.X(B.oC,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.eo,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.q,1)
v=A.av(A.p(s,A.d(t.bOI(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mm,s,s,s),s,s,s)
u=x.p
i=A.a([t.zV("Full name",i,B.mo)],u)
if(p>0)i.push(t.zV("Child order","#"+p,B.Nd))
r=A.a([h,B.at,r,B.aQ,l,B.S,v,B.by,t.adg("Identity",i),B.ac,t.adg("Life details",A.a([t.zV("Birth date",q.w,D.ajz),t.zV("Birth place",q.x,B.ZY),t.zV("Date of death",q.y,D.alQ),t.zV("Occupation",q.z,B.a00)],u)),B.ac,t.adg("Family links",A.a([t.zV("1. Parent",t.aVW(q.d),B.FA),t.zV("2. Spouse",t.aVW(q.e),B.N5)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.adg("Notes",A.a([t.zV("Notes",q,B.kP)],u))],u))
r.push(B.by)
r.push(A.bH(B.J2,new C.dmG(d),A.bl(B.aV,s,s,s,s,s,B.ck,s,new A.b7(A.m(14),B.Y),s,s,s)))
return A.eI(s,k,new A.cS(B.ly,A.cd(A.v(r,B.aj,s,B.e,B.Q,0,B.p),B.r,s,B.y,s,B.xA,s,s,B.ah),s),s,s,s,B.F9,B.d0,s,new A.b7(j,B.Y),s)}}
C.Jv.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.br:B.bn
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.xD,A.hp(A.aG(!1,B.a1,!0,A.m(8),A.aL(!1,A.m(8),!0,new A.a7(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ag),u,v.c,u,u),u)}}
C.aoL.prototype={
eL(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a6().ac())
w=u.c
v=A.U(w).k("K<1,a3<n,@>>")
w=A.B(new A.K(w,new C.c7B(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iY(w,new C.c7C(),t,x.U))
return s}}
C.aoM.prototype={
R(){return new C.aCw(A.a([],x.bF))},
gdd(){return this.c}}
C.aCw.prototype={
a_(){this.a1()
this.Je()},
Je(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Je=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c7F(t.a.c),$async$Je)
case 3:r=e
w=4
return A.b(C.At(t.a.c),$async$Je)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qO(q,new C.dSV(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dSW(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Je,v)},
y6(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.S(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
JX(d,e){return this.cBw(d,e)},
cBw(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$JX=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dT_(q,e))
t=3
w=6
return A.b(d.$0(),$async$JX)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dT0(q))
$.eV.mn()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JX,v)},
WY(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p0(r,s.c,s.e),$async$WY)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JX(new C.dSS(t),"Preparing download\u2026"),$async$WY)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WY,v)},
X1(d){return this.bMI(d)},
bMI(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p0(r,s.c,s.e),$async$X1)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.JX(new C.dST(t,d),"Preparing file\u2026"),$async$X1)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X1,v)},
af7(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$af7=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wZ.c5().LI(B.Qd,B.tF,!0),$async$af7)
case 7:r=e
o=r
q=o==null?null:J.fo(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aG.gam(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jo(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.aa(m)
$.am.$1("[family tree sync pick] file_picker: "+A.t(p))
w=6
break
case 3:w=2
break
case 6:u=A.Gj()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$af7,v)},
XC(d){return this.bX1(d)},
bX1(d){var w=0,v=A.j(x.H),u=this
var $async$XC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.JX(new C.dSU(u,d),"Restoring family trees\u2026"),$async$XC)
case 2:return A.h(null,v)}})
return A.i($async$XC,v)},
XB(){var w=0,v=A.j(x.H),u,t=this,s
var $async$XB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.af7(),$async$XB)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.XC(s),$async$XB)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XB,v)},
a1n(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1n=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p0(r,s.c,s.e),$async$a1n)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JX(new C.dSZ(t),"Creating QR code\u2026"),$async$a1n)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1n,v)},
a0Z(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0Z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.CC()){t.y6("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).c8(A.e8(new C.dSX(),!0,null,x.N)),$async$a0Z)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.XC(r),$async$a0Z)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0Z,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.Al:B.iN,m=o?D.af7:B.aP,l=o?B.aK:B.bS,k=o?B.aP:B.aB,j=new C.d6n(n,m,l,k,o?B.bJ:B.bn)
l=A.aH(p,p,p,p,A.X(B.eA,k,p,p,p,20),p,p,p,new C.dT2(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eC(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.d5W(!0,B.jj,B.aS,B.aS,q.r?p:q.gcsx(),j,s,"Show restore QR"),1),B.av],u))}s=q.e
r=q.r?p:q.gcoN()
t.push(A.E(C.d5W(!s,B.iW,B.b7,B.bu,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.d5W(!1,B.hA,B.aV,B.bW,q.r?p:q.gbMB(),j,"Photos & books included","Download all trees"),1),B.av],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.d5W(!1,M.yg,B.aH,B.aM,q.r?p:q.gbWZ(),j,s,"Upload backup file"),1))
l=A.a([new C.bdy(v,l,p),B.kv,new C.abT(j,"QR restore",p),B.S,t,B.d5,new C.abT(j,"Backup files",p),B.S,A.A(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kv,new C.abT(j,"One tree",p),B.S],u)
B.d.v(v,J.b6(q.d,new C.dT3(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cz(l,p,B.Yq,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aV.j(0.35),B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dk,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bn(!0,A.p(p,A.A(A.a([K.aNq,B.bf,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.B1,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c8(w,n,new A.an(B.W,p,B.aa,B.r,l,p),p,!1,!1,p,p)}}
C.d6n.prototype={}
C.bdy.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.k2,28)],x.V)
t=A.ao(p,A.X(B.tX,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.r,A.a([t,new A.C(B.a9,A.A(A.a([A.p(p,D.bOa,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.q,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.od,A.E(A.v(A.a([D.fd8,B.N,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bVL,B.n),p,p,p,p,p,p,p,p)}}
C.abT.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bdw.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aS.j(0.4):m.c
k=A.I(k,B.q,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aS.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.I(t.j(0.35),B.q,1)
return A.aG(!1,B.a1,!0,q,A.aL(!1,o,!0,A.eE(A.dc(new A.C(E.Y5,A.v(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qX,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bB,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cv,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)}}
C.bdB.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.q,1),q=B.aV.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,A.eE(new A.C(B.eP,A.A(A.a([A.p(v,D.bNo,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.q,1),p,v,v,B.n),v,v,v,v,B.qX,v,v,v),B.bf,A.E(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.X(B.hA,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)}}
C.ZJ.prototype={
R(){return new C.aCv()},
gdd(){return this.c}}
C.aCv.prototype={
a_(){this.a1()
this.a8m()},
a8m(){var w=0,v=A.j(x.H),u=this,t
var $async$a8m=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b0P(u.a.c,B.CD),$async$a8m)
case 2:t=e
if(u.c!=null)u.m(new C.dSN(u,t))
return A.h(null,v)}})
return A.i($async$a8m,v)},
agv(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$agv=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dSO(q))
t=4
p=A.h83(q.a.d,B.CD)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.V(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.ar_(n.e,m,l,B.CD,p,n.f),$async$agv)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dSP(q))
q.c.I(x.q).f.S(D.eQx)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.aa(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(B.a.ec(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dSQ(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agv,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.j8:B.pw,n=p?B.i8:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eC(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fsG,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.pG(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.v(A.a([B.N,u,B.by,t,B.N,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.bb,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bv,q,q,q,q,q,q,q,q,q,q,q,B.P,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcov()
if(u)u=B.Iz
else u=A.X(r.e===!0?B.hz:B.ajy,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a7(1/0,q,A.ey(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cj,q,q,q),t,A.dg(q,q,q,q,q,q,q,q,q,B.aV,q,B.fN,q,q,q,new A.ay(B.aV.j(0.55),1,B.q,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.hY,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.az:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.S)
w.push(new A.a7(1/0,q,A.bH(B.zz,new C.dSR(d),A.bl(B.aV,q,q,q,q,B.fN,q,q,q,q,q,q)),q))
return A.c8(m,o,new A.C(B.a9,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.ZK.prototype={
R(){return new C.biI(A.yZ(B.xk,B.nB,B.u1))}}
C.biI.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c8(A.eC(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fkU,w,w,w,1,w,!0),B.w,A.yY(this.d,B.bR,new C.dT4(this,d)),w,!1,!1,w,w)}}
C.aXK.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.PI,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lx.prototype={}
C.a5F.prototype={
R(){return new C.bio(null,null)}}
C.bio.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.tu,v,1,v,w)
w.e=A.bj(v,B.pD,v,1,v,w)
w.a.toString
w.d.cH(0)
w.e.cH(0)},
br(d){var w,v,u=this
u.bC(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cH(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cH(0)},
q(){var w=this.d
w===$&&A.c()
w.q()
w=this.e
w===$&&A.c()
w.q()
this.btv()},
B(d){var w,v,u=this,t=B.d.dL(D.a2E,new C.dEd(u),new C.dEe())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.ct2(A.c6(new A.h3(A.a([w,v],x.dS)),new C.dEf(u,t),null),!0)}}
C.bin.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b_e(d,e)
break
case"house":p.m0(d,e,D.cZJ)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gee()
$.W()
t=A.M()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ae(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.m5(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.AE(d,e,12)
p.xI(d,e,B.l7,5,14)
break
case"grocery":p.cdx(d,e)
break
case"calculator":p.cde(d,e)
break
case"lumber":p.cdF(d,e)
break
case"kitchen":p.cdA(d,e)
break
case"landscape":p.m0(d,e,D.d_f)
s=new A.aO($.W().r,B.ap,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.b5(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.cU(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.cU(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.ap(t,w))
s.E(new A.ap(0,w))
s.E(new A.bF())
w=A.M()
w.r=B.f6.j(0.85).gp(0)
d.aO(s,w)
p.AE(d,e,8)
p.xI(d,e,B.iT,4,18)
break
case"plumbing":p.cdO(d,e)
break
case"electrical":p.m0(d,e,D.d9l)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.W()
u=A.M()
u.r=B.c.j(q*0.12).gp(0)
d.aZ(new A.a9(0,0,0+e.a,0+e.b),u)
p.m5(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.m5(d,e,B.lD.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.AE(d,e,10)
break
case"store":p.cdY(d,e)
break
case"paint_remodel":p.cdJ(d,e)
break
case"roofing":p.cdQ(d,e)
break
case"warehouse":p.ce4(d,e)
break
case"vehicles":p.ce2(d,e)
break
case"farm":p.cdr(d,e)
break
case"restaurant":p.cdP(d,e)
break
case"tools":p.ce0(d,e)
break
case"wallet":p.ce3(d,e)
break
case"concrete":p.cdk(d,e)
break
case"blueprint":p.cdc(d,e)
break
default:p.b_e(d,e)}},
m0(d,e,f){var w,v=new A.a9(0,0,0+e.a,0+e.b)
$.W()
w=A.M()
w.saq(new A.a8(B.ax,B.aC,B.x,f,null,null).av(0,v))
d.aZ(v,w)},
m5(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.gee()/2-h
$.W()
w=A.M()
w.b=B.ae
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bT(q,p)
r=w.H()
v.drawArc.apply(v,[A.c0(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
xI(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gee()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.W()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
AE(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.W()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b_e(d,e){var w,v=this
v.m0(d,e,D.d85)
w=v.c
v.m5(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.m5(d,e,B.bK.j(0.45),-w*3.141592653589793*1.4,22)
v.bKU(d,e,B.hU,w)
v.xI(d,e,B.c.j(0.7),6,8)},
bKU(d,e,f,g){var w,v,u,t,s,r,q,p
$.W()
w=A.M()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c0(new A.a9(16,q,t,q+3)),p)
p.delete()}},
cdx(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m0(d,e,D.cgd)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.W()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.cY4[B.o.F(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.m5(d,e,B.c.j(0.35),w,16)
j.xI(d,e,B.iT,5,12)},
cde(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m0(d,e,D.cgk)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gee()
$.W()
q=A.M()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ae(new A.u(t/2,s/2),r*(0.18+u*0.08),q)
p=A.i1(g,g,g,g,g,B.a4,B.cg,g,B.eh,B.ce)
for(o=0;o<6;++o){n=v+o*0.9
r=D.d0M[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saV(0,new A.ep(r,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eI()
p.a5(d,new A.u(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cgm[o]
l=B.kb.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saV(0,new A.ep(m,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eI()
p.a5(d,new A.u(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.m5(d,e,B.c.j(0.35),w*1.5,14)
h.m5(d,e,B.ez.j(0.55),-v*3.141592653589793*2,8)
h.m5(d,e,B.Am.j(0.4),r*2.8,22)
h.xI(d,e,B.pm,8,10)
h.AE(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.W()
r=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cdF(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m0(d,e,A_.avc)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bA(new A.a9(20,q,u,q+10),B.hC)
$.W()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.h2,B.oq,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.er(p),n)
n.delete()}m.m5(d,e,B.h2.j(0.35),w,15)
m.AE(d,e,8)},
cdA(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m0(d,e,D.cYz)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.F(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.F(r*0.13,0.7)
$.W()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.H()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.m5(d,e,B.bK.j(0.4),-w*3.141592653589793*2.2,11)
j.xI(d,e,B.qA,4,14)},
cdO(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m0(d,e,D.cNV)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.W()
n=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xI(d,e,B.ov,6,12)
l.m5(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cdY(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m0(d,e,D.ctF)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bA(new A.a9(q,14,q+u,22),B.ii)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.f7,B.bK,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.er(q),o)
o.delete()}n.m5(d,e,B.c.j(0.3),w,16)
n.AE(d,e,8)
n.xI(d,e,B.uY,5,13)},
cdJ(d,e){var w,v,u,t,s,r,q,p,o
this.m0(d,e,D.cTE)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bA(new A.a9(q,p,q+8,p+(18+r*22)),B.hc)
$.W()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.io,B.dv,B.bK,B.es][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.er(p),o)
o.delete()}this.m5(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cdQ(d,e){var w,v,u,t,s,r,q,p,o
this.m0(d,e,D.cRb)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xI(d,e,B.cq,7,11)},
ce4(d,e){var w,v,u,t,s,r,q,p,o,n
this.m0(d,e,D.cwi)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bA(new A.a9(p,o,p+(t-r*8),o+16),B.hC)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.cq,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.er(o),n)
n.delete()}this.m5(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
ce2(d,e){var w,v,u,t,s,r,q,p,o
this.m0(d,e,D.dd7)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.bA(new A.a9(r,q,r+28,q+8),B.hC)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.er(q),o)
o.delete()}this.AE(d,e,6)},
cdr(d,e){var w,v,u,t,s,r,q,p,o,n
this.m0(d,e,D.cXd)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.W()
s=A.M()
s.r=B.lD.j(0.75).gp(0)
d.ae(new A.u(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.hg.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.m5(d,e,B.lD.j(0.35),w,14)},
cdP(d,e){var w,v,u,t,s,r,q,p,o=this
o.m0(d,e,D.cZy)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cm(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.W()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c0(r),p)
p.delete()}o.xI(d,e,B.qA,5,16)
o.AE(d,e,7)},
ce0(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m0(d,e,D.daM)
w=m.c
v=w*3.141592653589793
m.m5(d,e,B.oq.j(0.55),v*3,10)
m.m5(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.W()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.oq.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
ce3(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m0(d,e,D.ddE)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bA(new A.a9(p,o,p+36,o+22),B.ii)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.iT,B.lD,q).gp(0)
n=p.H()
s.drawRRect(A.er(o),n)
n.delete()}m.AE(d,e,9)
m.m5(d,e,B.c.j(0.4),w*2.2,12)},
cdk(d,e){var w,v,u,t,s,r,q,p,o,n
this.m0(d,e,D.d3q)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bT(new A.u(v,u),34)
$.W()
s=A.M()
s.b=B.ae
s.c=5
s.r=B.c.j(0.45).gp(0)
d.f5(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.bS.j(0.85).gp(0)
n=o.H()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
cdc(d,e){var w,v,u,t,s,r,q,p
this.m0(d,e,D.d_w)
$.W()
w=A.M()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.H()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.H()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.F(t*0.85,1)
$.W()
u=A.M()
u.r=B.dv.j(0.45).gp(0)
d.aZ(new A.a9(0,p,0+v,p+6),u)
this.m5(d,e,B.l7.j(0.45),-t*3.141592653589793*2,11)},
ar(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.arH.prototype={
ZE(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aP0(),$async$ZE)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a7V(s),$async$ZE)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$ZE,v)},
af8(d){return this.cgj(d)},
cgj(d){var w=0,v=A.j(x.H),u=this,t
var $async$af8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.i6f(d),$async$af8)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$af8,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.js:B.iQ
w=x.p
v=A.a([C.aPp(!0,B.qs,1/0,B.pL,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c_(new A.bI(B.b0,t,t,new A.C(B.va,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.P,t,t,!0,t,t,t,t,t,B.aw6,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b0,B.b5,B.x,u,t,t),B.n),B.bd))}v.push(A.ao(8,A.A(A.a([A.E(A.dp(D.bHd,D.f9v,new C.cfa(this,d),A.bl(B.aV,t,t,t,B.c,t,B.jx,t,t,t,t,B.ca)),1),B.ab,A.E(A.ey(D.bPo,D.fnV,this.gc7n(),A.dg(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jx,t,t,D.aXi,t,t,t,B.ca)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fG(1.7777777777777777,A.aG(!1,B.a1,!0,B.qs,new A.an(B.W,t,B.b_,B.r,v,t),B.aq,s,0,t,t,t,t,t,B.ag),t)}}
C.aKs.prototype={
aR(){this.aY()
this.aX()
this.dI()},
q(){var w=this,v=w.b_$
if(v!=null)v.a3(0,w.gdC())
w.b_$=null
w.a2()}}
C.aSk.prototype={}
C.aSj.prototype={}
C.aQl.prototype={}
C.Yn.prototype={
R(){return new C.axM()}}
C.axM.prototype={
a_(){var w,v,u=this
u.a1()
u.a.toString
w=new A.bb("",B.b4,B.aN)
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.ar(w,v)},
q(){var w=this.d
w===$&&A.c()
w.U$=$.aw()
w.P$=0
this.a2()},
JO(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.I(x.q).f.S(D.eR1)
return}t=u.c
t.toString
v=u.e
A.a5(t,!1).O(new C.aSk(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.dX:B.c,k=A.m(20),j=A.p(n,D.bP3,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.aB,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.v(A.a([i,B.bB,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bn,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.bf,i,A.aH(n,n,n,n,A.X(B.cB,m?B.br:B.bn,n,n,n,n),n,n,n,new C.cYI(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bn,n,n,n,n,n,n,n,n,12,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bn,n,n,n,n,n,n,n,n,11,n,n,B.cv,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.h8j(new C.cYJ(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.aB,n,n,n,n,n,n,n,n,n,n,n,B.a5,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.js:B.iQ
r=A.m(12)
q=A.m(12)
p=m?B.dZ:B.bS
t=A.aM(n,B.T,!0,n,!0,B.r,n,A.aN(),u,n,n,n,n,n,2,A.br(n,new A.b4(4,r,B.dg),n,n,n,n,n,n,!0,new A.b4(4,q,new A.ay(p,1,B.q,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cYK(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,S.IG,n,n,n,n)
u=m?B.aP:B.aB
m=m?B.dZ:B.bS
return A.eI(n,l,new A.cS(B.ly,A.cd(A.v(A.a([j,B.aQ,i,B.at,w,B.N,v,B.aQ,t,B.by,A.A(A.a([A.E(A.dT(B.de,new C.cYL(d),A.dg(n,n,n,n,n,n,n,n,n,u,n,n,B.ck,n,new A.b7(A.m(12),B.Y),new A.ay(m,1,B.q,-1),n,n,n,n)),1),B.av,A.E(A.bH(D.fo9,o.ga1H(),A.bl(B.aV,n,n,n,B.c,n,B.ck,n,new A.b7(A.m(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.r,n,B.y,n,B.B2,n,n,B.ah),n),n,n,n,X.B3,B.d0,n,new A.b7(k,B.Y),n)}}
C.Ym.prototype={
R(){return new C.axL()}}
C.axL.prototype={
a_(){this.a1()
var w=$.aw()
this.d!==$&&A.aP()
this.d=new A.ar(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.U$=$.aw()
w.P$=0
this.a2()},
JO(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.I(x.q).f.S(D.eOJ)
return}v=this.c
v.toString
A.a5(v,!1).O(new C.aSj(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.dX:B.c,n=A.m(20),m=A.p(q,D.bLF,B.f,q,q,new A.o(B.bW.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.v(A.a([l,B.bB,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.br:B.bn,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.bf,l,A.aH(q,q,q,q,A.X(B.cB,p?B.br:B.bn,q,q,q,q),q,q,q,new C.cYE(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aV.j(0.25),B.q,1)
u=A.X(B.ajk,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.av,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,12,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bC,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,q,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.js:B.iQ
t=A.m(12)
s=A.m(12)
r=p?B.dZ:B.bS
v=A.aM(q,B.T,!0,q,!0,B.r,q,A.aN(),w,q,q,q,q,q,2,A.br(q,new A.b4(4,t,B.dg),q,q,q,q,q,q,!0,new A.b4(4,s,new A.ay(r,1,B.q,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cYF(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.kw,q,q,q,q)
w=p?B.aP:B.aB
p=p?B.dZ:B.bS
return A.eI(q,o,new A.cS(B.ly,A.cd(A.v(A.a([m,B.aQ,l,B.aA,v,B.by,A.A(A.a([A.E(A.dT(B.de,new C.cYG(d),A.dg(q,q,q,q,q,q,q,q,q,w,q,q,B.ck,q,new A.b7(A.m(12),B.Y),new A.ay(p,1,B.q,-1),q,q,q,q)),1),B.av,A.E(A.bH(D.fuR,this.ga1H(),A.bl(B.bW,q,q,q,B.c,q,B.ck,q,new A.b7(A.m(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.B2,q,q,B.ah),q),q,q,q,X.B3,B.d0,q,new A.b7(n,B.Y),q)}}
C.XV.prototype={
R(){return new C.awv()}}
C.awv.prototype={
a_(){var w,v=this
v.a1()
w=$.aw()
v.d!==$&&A.aP()
v.d=new A.ar(B.as,w)
v.e!==$&&A.aP()
v.e=new A.ar(new A.bb("1",B.b4,B.aN),w)
v.f!==$&&A.aP()
v.f=new A.ar(B.as,w)
v.r!==$&&A.aP()
v.r=new A.ar(B.as,w)},
q(){var w,v=this,u=v.d
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
v.a2()},
gJ9(){var w,v=this.e
v===$&&A.c()
w=A.d5(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gaik(){var w=this.f
w===$&&A.c()
w=A.d5(B.a.i(w.a.a))
return w==null?0:w},
gb28(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aNc(d){var w,v=B.k.D(this.gJ9()+d,0.25,999999),u=B.k.jY(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.aa(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aK(u,w,"")}t.saV(0,u)
this.m(new C.cwh())},
awG(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.js:B.iQ,s=A.m(14),r=A.m(14)
u=u?B.dZ:B.bS
return A.br(w,new A.b4(4,s,B.dg),w,B.bC,w,w,w,w,!0,new A.b4(4,r,new A.ay(u,1,B.q,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.m(14),B.a9J),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c7o(d,e,f){return this.awG(d,e,f,null)},
JO(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gaik()<=0){s.c.I(x.q).f.S(D.eST)
return}r=s.c
r.toString
v=s.gJ9()
u=s.gaik()
t=s.gb28()
A.a5(r,!1).O(new C.aQl(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tD(n),l=n?B.dX:B.c,k=A.m(24),j=x.O,i=A.a([B.aV.j(0.22),B.bW.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bFb,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.q,1),h,o,new A.a8(B.a3,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.v(A.a([h,B.bB,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.cv,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.bf,h,A.aH(o,o,o,o,A.X(B.cB,n?B.br:B.bn,o,o,o,o),o,o,o,new C.cwn(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,o,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.T,!0,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.awG(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Nj),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,S.IG,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.js:B.iQ
t=A.m(14)
s=A.I(n?B.dZ:B.bS,B.q,1)
r=A.aH(o,o,o,o,A.X(B.ya,n?B.aP:B.aB,o,o,o,20),o,o,o,new C.cwo(p),o,o,o,o,o,B.ca)
q=p.e
q===$&&A.c()
q=A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),q,o,o,o,o,o,2,D.bQV,B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dV,o,o,o,1,o,o,!1,"\u2022",o,new C.cwp(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a7(52,o,q,o),A.aH(o,o,o,o,A.X(B.hy,n?B.aP:B.aB,o,o,o,20),o,o,o,new C.cwq(p),o,o,o,o,o,B.ca)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,16,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.av,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),t,o,o,o,o,o,2,p.awG(m,"Amount","0.00",B.hZ),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dV,o,o,o,1,o,o,!1,"\u2022",o,new C.cwr(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.B(new A.K(D.cU5,new C.cws(p,m),t),t.k("ak.E"))
i=A.a([i,B.by,v,B.aA,h,B.N,s,B.ac,A.bY(B.bz,u,B.bq,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.S,A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.c7o(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cwt(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.kw,o,o,o,o)],w))}i.push(B.aQ)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bW.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,11,o,o,B.P,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJ9()===B.k.jY(p.gJ9())?B.k.N(p.gJ9()):p.gJ9()
s=p.gb28()
r=A.Av(p.gaik())
i.push(A.p(o,A.A(A.a([A.E(A.v(A.a([u,B.at,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bCg(p.gJ9()*p.gaik(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a3,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.je,o,o,o))
i.push(B.by)
j=A.m(14)
h=n?B.dZ:B.bS
h=A.dg(o,o,o,o,o,o,o,o,o,o,o,o,B.ck,o,new A.b7(j,B.Y),new A.ay(h,1,B.q,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dT(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,o,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cwu(d),h),1),B.av,A.E(A.dp(D.amT,D.fqU,p.ga1H(),A.bl(B.aV,o,o,0,B.c,o,B.ck,o,new A.b7(A.m(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eI(o,l,new A.cS(W.aa5,A.cd(A.v(i,B.aj,o,B.e,B.Q,0,B.p),B.r,o,B.y,o,Ac.qW,o,o,B.ah),o),o,o,o,B.M_,B.d0,o,new A.b7(k,B.Y),o)}}
C.a0u.prototype={
R(){return new C.buP()}}
C.buP.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.ar(new A.bb(w,B.b4,B.aN),v)},
q(){var w=this.d
w===$&&A.c()
w.U$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.dX:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.aB,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.aB,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.js:B.iQ
v=A.aM(s,B.T,!0,s,!0,B.r,s,A.aN(),w,s,s,s,s,s,2,A.br(s,new A.b4(4,A.m(12),B.dg),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.f84(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.am,s,s,s,s)
u=A.E(A.dT(B.de,new C.f85(d),s),1)
r=A.bl(B.bW,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eI(s,q,new A.C(B.B2,A.v(A.a([o,B.aA,v,B.aQ,A.A(A.a([u,B.av,A.E(A.bH(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.f86(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d0,s,new A.b7(p,B.Y),s)}}
C.aaW.prototype={
a4(){return"WorksheetFrameStyle."+this.b}}
C.Fe.prototype={
R(){return new C.buN(null,null)}}
C.buN.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.bo4,null,1,null,v)
w.cH(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bvT()},
gbxj(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bW,B.aZ],x.O)
case 2:return A.a([B.bt,B.aV,B.aZ],x.O)
case 3:return A.a([B.aS,B.cc,B.jP],x.O)
case 4:return A.a([B.hv,B.bW,B.f8],x.O)
case 0:return A.a([B.aV,B.bW,B.aZ],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.ev(A.c6(v,new C.f82(this,new C.tD(w.ax.a===B.I)),null),null)}}
C.awo.prototype={
R(){return new C.buO(null,null)}}
C.buO.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.n3,null,1,null,v)
w.cH(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bvU()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.f83(this),null)}}
C.buM.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bA(new A.a9(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aT(w,w))
u=new A.aO($.W().r,B.ap,null,null,A.a([],x.v))
u.E(new A.iU(v))
w=A.M()
w.b=B.ae
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aD(v,w)
w=A.M()
w.b=B.ae
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aO(u,w)
w=A.wX(u)
t=A.a([],x.f5)
w=new A.vs(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.ba(A.jU('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.H6(w,r)
w.jn()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aQB(d,q,r,o,0,0.2,4.2,0.92)
p.aQB(d,q,r,s,0.52,0.11,3.2,0.58)}},
aQB(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.htP(e.a.a,e,t,t+f*i,!0),r=A.bAD(s.gbL().a.getBounds())
$.W()
w=A.M()
w.b=B.ae
w.c=j
w.d=B.bO
w.f=!0
v=this.f
u=k*this.e
w.saq(new A.a8(B.a3,B.a7,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.GO,null).av(0,r))
d.aO(s,w)},
ar(d){return d.b!==this.b||d.d!==this.d}}
C.aMD.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.aME.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.tD.prototype={}
C.arG.prototype={
R(){return new C.aE1()},
gdY(){return this.c}}
C.aE1.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.ag_()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.KT(w,v)
this.a2()},
ag_(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ag_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bAL(t.c,t.d.a),$async$ag_)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eHH(u,s))
return A.h(null,v)}})
return A.i($async$ag_,v)},
Pz(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Pz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eHy(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.KT(t,s),$async$Pz)
case 2:if(u.c!=null)u.m(new C.eHz(u))
return A.h(null,v)}})
return A.i($async$Pz,v)},
Q4(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Q4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.eHF(t,new C.tD(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Q4)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a7V(q),$async$Q4)
case 6:case 5:t.m(new C.eHG(t,r))
w=7
return A.b(t.Pz(),$async$Q4)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Q4,v)},
Vd(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i60(r),$async$Vd)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eHt(t,new C.qS(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Pz(),$async$Vd)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vd,v)},
ccp(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hlP(t,new C.eHx(u),w,v)},
aa7(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bO(new A.ay(v,2.5,B.q,-1),B.Y,B.Y,new A.ay(B.c.j(d?0.85:0.55),2.5,B.q,-1)),D.aX4,w,w,B.n),w,22,w,w,w,w,w,22)},
a9d(d){return this.bJ9(d)},
bJ9(d){var w=0,v=A.j(x.H),u=this
var $async$a9d=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eHw(u,d))
w=2
return A.b(u.Pz(),$async$a9d)
case 2:return A.h(null,v)}})
return A.i($async$a9d,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.bY:B.iN,d=A.m(8),a0=A.X(Q.ZG,f?B.br:B.bn,g,g,g,16),a1=x.p
a0=A.aL(!1,d,!0,new A.C(B.Fg,A.A(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.br:B.bn,g,g,g,g,g,g,g,g,g,g,g,B.a5,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eHI(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b_,B.r,A.a([A.bw(A.m(22),C.aPp(!0,A.m(22),1/0,B.pL,g,d,1/0),B.aq),A.ao(10,A.dp(D.bJK,D.ft9,h.gb00(),A.bl(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eT,22),new A.ac(-4,B.G,B.bW.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.q,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bw(s,new A.an(B.W,g,B.b_,B.r,A.a([C.aPp(!0,A.m(16),1/0,B.ML,g,r.c,1/0),A.c_(g,new A.o(g,g,g,g,g,new A.a8(B.b0,B.b5,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bd),A.ao(g,h.aa7(!0),g,g,8,g,8,g),A.ao(g,A.ctN(h.aa7(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.ctN(h.aa7(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.ctN(h.aa7(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dp(D.bFK,D.fmW,h.gb00(),A.bl(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bSl,B.n),g,g,g,g,B.lL,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aB,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b6q,B.nH,B.h4],u):A.a([B.aZ,B.aV,B.bW],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eT,24)],t)
r=A.m(22)
p=A.ao(g,A.X(B.jA,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.q,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h5,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aA,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.an,C.bCg(h.d.gwK(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.N,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cv,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.hh.j(0.75),B.q,1.6)
t=A.a([new A.ac(0,B.G,B.aS.j(0.28),B.cJ,14)],t)
j=B.aS.j(0.22)
i=A.m(10)
u=A.p(g,A.bw(r,new A.an(B.W,g,B.aa,B.r,A.a([p,new A.C(D.bsE,A.A(A.a([o,B.av,A.aG(!1,B.a1,!0,g,A.aL(!1,n,!0,A.eE(new A.C(Ah.AX,A.v(A.a([A.p(g,D.ams,B.f,g,g,new A.o(j,g,A.I(B.aS.j(0.5),B.q,1),i,g,g,B.n),g,g,g,g,B.co,g,g,g),B.h_,D.fcd],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcco(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ag)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.ax,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fG(1.7777777777777777,d,g),B.aQ,w,B.N,u,B.by,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aB,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b6,A.dp(Ak.a0m,D.fa7,h.gbxM(),A.bl(B.aV,g,g,g,B.c,g,B.ix,g,new A.b7(A.m(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.dX:B.c
v=A.m(14)
u=A.I(f?B.dZ:B.bS,B.q,1)
t=A.X(B.a_0,f?B.br:B.bn,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aB,g,g,g,g,g,g,g,g,g,g,g,B.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.S,s,B.an,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.br:B.bn,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.tD,g,g,1/0))}else B.d.v(d,new A.K(w,new C.eHJ(h,new C.tD(f)),A.U(w).k("K<1,r>")))
if(h.e)d.push(new A.C(B.AQ,A.av(A.mG(g,f?B.br:B.bn,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c8(g,e,A.bn(!0,A.v(A.a([new A.C(B.AV,a0,g),A.E(A.cd(A.v(d,B.F,g,B.e,B.j,0,B.p),B.r,g,B.y,g,E.xB,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bBm(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dX:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.aZQ,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.X(s?B.hL:B.h8,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bH
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aP:B.aB,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcRA()
v=A.Av(d.d)
B.d.v(t,A.a([B.at,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.br:B.bn,u,u,u,u,u,u,u,u,12,u,u,B.a5,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.bb,B.Q,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bW.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bCg(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a3,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.h6,u,u,u)
w=x.p
return A.p(u,A.bw(n,new A.DJ(A.A(A.a([m,A.E(new A.C(B.agv,A.A(A.a([l,B.bf,t,B.ab,k,A.aH(u,u,u,u,A.X(B.cB,(r?B.br:B.bn).j(0.75),u,u,u,20),u,u,u,new C.eHu(this,d),u,u,u,u,u,B.ca)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.aj,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.aYI,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.dc,u,u,u,u)}}
C.acY.prototype={
E9(d){return this.bKw(d)},
bKw(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$E9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.p0(d,o,!1),$async$E9)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).O(null)
w=4
return A.b(A.bN(Ab.AO,null,x.H),$async$E9)
case 4:s=t.d
w=5
return A.b(C.fEs(!0,o,s),$async$E9)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.G8(r,"ngmy_project_"+A.aK(s.b,q,"_"),!1),$async$E9)
case 6:p=f
w=7
return A.b(A.p_(o,!1),$async$E9)
case 7:if(d.e==null){w=1
break}d.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$E9,v)},
ZF(d){return this.csy(d)},
csy(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.p0(d,s,!1),$async$ZF)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).O(null)
A.hw(d,new C.arA(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.p_(s,!1),$async$ZF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZF,v)},
PA(d){return this.coI(d)},
coI(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).O(null)
w=3
return A.b(A.hw(d,D.aFu,!0,"NgmyWorksheetProjectScan",x.N),$async$PA)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bCh(s),$async$PA)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.S(D.eS1)
w=1
break}q=C.fZp(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dP(p,x.H),$async$PA)
case 5:if(d.e==null){w=1
break}d.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$PA,v)},
ZG(d){return this.cAs(d)},
cAs(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ZG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).O(null)
w=3
return A.b(C.bBP(),$async$ZG)
case 3:s=f
if(s==null){w=1
break}r=C.fZp(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dP(q,x.H),$async$ZG)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$ZG,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tD(u),s=w.d.d.length,r=u?B.dX:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.k2,36)],x.V),o=x.p
return A.bn(!0,new A.C(B.vi,A.p(v,A.v(A.a([w.cr8(d,t,s),new A.C(D.bs2,A.v(A.a([w.b32(t,"QR restore"),B.S,A.A(A.a([w.aYZ(t,!0,B.jj,B.aS,B.aS,new C.eHL(w,d),"Show to scan","QR code"),B.av,w.awH(t,B.iW,B.b7,B.bu,new C.eHM(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d5,w.b32(t,"Backup files"),B.S,A.A(A.a([w.awH(t,B.hA,B.aV,B.bW,new C.eHN(w,d),"Full copy","Backup file"),B.av,w.awH(t,M.yg,B.aH,B.aM,new C.eHO(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
cr8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eY,B.d_,B.fv],k):A.a([B.aZ,B.aV,B.bW],k)
w=A.ao(l,A.X(B.tX,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kL,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.q,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aPp(!0,A.m(13),64,D.bB1,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aPW,l,l,l)
r=C.bCg(r.gwK(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.q,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.r,A.a([w,new A.C(D.bsq,A.v(A.a([v,A.A(A.a([s,B.eB,A.E(A.v(A.a([u,B.at,t,B.N,A.A(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fK,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.X(B.cB,B.c.j(0.85),l,l,l,l),l,l,l,new C.eHK(d),l,l,l,A.nw(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aNf,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.ax,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b32(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.br:B.bn,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aYZ(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.af7:B.aP
if(e)w=B.aS.j(o?0.45:0.35)
else{w=o?B.dZ:B.bS
w=w.j(o?0.8:1)}w=A.I(w,B.q,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aS.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.q,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qX,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.aB,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aG(!1,B.a1,!0,r,A.aL(!1,q,!0,A.eE(new A.C(E.Y5,A.v(A.a([t,B.ac,u,B.bB,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.br:B.bn,r,r,r,r,r,r,r,r,11,r,r,B.cv,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
awH(d,e,f,g,h,i,j){return this.aYZ(d,!1,e,f,g,h,i,j)}}
C.arA.prototype={
R(){return new C.bk4()}}
C.bk4.prototype={
a_(){this.a1()
this.adT()},
adT(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$adT=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bCi(p.c,p.d),$async$adT)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eHo(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eHp(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adT,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.Al:B.iN,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eA,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eHq(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zm],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eY,B.d_,B.fv],s):A.a([B.aZ,B.aV,B.bW],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eT,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dl,B.L,h,h)
p=C.bCg(p.gwK(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.an,A.A(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fK,h,h,h)],u),B.m,h,B.bb,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.ax,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.Yp,h,h,1/0)
t=g?D.bfB:B.c
q=A.m(24)
p=A.I(w?B.aS.j(0.4):B.aV.j(0.3),B.q,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dk,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a6T,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.e5e)
else{m=A.m(20)
l=A.I(B.aL,B.q,1)
o.push(A.p(h,A.pG(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aQ)
n=w?B.aS:B.aV
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aS:B.aV).j(0.35),B.q,1)
k=w?B.N2:B.Nz
k=A.X(k,w?B.aS:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.av,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a5,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.ix,h,h,h))
return A.c8(h,f,A.bn(!0,A.v(A.a([new A.C(A6.Mc,e,h),A.E(A.cd(A.v(A.a([s,B.aQ,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tC,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.r,h,B.y,h,E.ahG,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.arF.prototype={
R(){return new C.aE0(A.yZ(B.Lt,B.nB,B.u1))}}
C.aE0.prototype={
q(){this.d.q()
this.a2()},
aLd(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iM(w,d)},
c8e(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.i3W(t)
if(s!=null){this.aLd(s)
return}r=C.hcS(t)
if(r!=null)q=A.cX(r,p,0)
else q=!1
if(q){this.aLd(B.a.i(B.a.b1(r,B.a.cJ(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eC(A.a([A.aH(t,t,t,t,A.X(u.f?B.r1:A2.N8,t,t,t,t,t),t,t,t,new C.eHs(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Al,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fmP,t,t,t,1,t,!0),q=A.yY(u.d,B.bR,u.gc8d()),p=A.m(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.q,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c8(r,B.w,new A.an(B.W,t,B.b_,B.r,A.a([q,p,A.ao(32,A.p(t,D.flD,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.q,1),v,t,t,B.n),t,t,t,t,B.je,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aIO.prototype={
a4(){return"_WorksheetTab."+this.b}}
C.NH.prototype={
R(){return new C.aE2(D.a90,A.a([],x.D))},
bp(){return this.r.$0()},
gdY(){return this.c}}
C.aE2.prototype={
gcyq(){return J.bDr(this.e,0,new C.eIa())},
a_(){this.a1()
$.aW.c2$.push(this)
this.vv()},
q(){$.aW.hE(this)
this.a2()},
iV(d){if(d===B.ft)this.vv()},
vv(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vv=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.CB(q.a.c).cM(0,B.jU),$async$vv)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eI6(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eI7(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vv,v)},
HB(d){return this.bHi(d)},
bHh(){return this.HB(null)},
bHi(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i62(l,d),$async$HB)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lh(l,r,q,D.d3D,new A.S(Date.now(),0,!1))
w=4
return A.b(C.KT(t.a.c,p),$async$HB)
case 4:o=f
w=5
return A.b(t.vv(),$async$HB)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.S(D.ePc)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.S(D.eQW)
else n.I(q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.Ed(m)
case 1:return A.h(u,v)}})
return A.i($async$HB,v)},
Ed(d){return this.cca(d)},
cca(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Ed=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hw(s,new C.arG(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Ed)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.KT(u.a.c,t),$async$Ed)
case 5:case 4:w=6
return A.b(u.vv(),$async$Ed)
case 6:return A.h(null,v)}})
return A.i($async$Ed,v)},
vh(d){return this.bX3(d)},
bX3(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bBP(),$async$vh)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hw(r,D.aFu,!0,"NgmyWorksheetProjectScan",x.N),$async$vh)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bCh(q),$async$vh)
case 14:w=12
break
case 13:f=null
case 12:s=f
w=8
break
case 9:s=null
case 8:case 4:if(s==null){r=t.c
if(r==null){w=1
break}r=r.I(x.q).f
r.S(A.b2(null,null,null,null,null,B.r,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.fZp(s)
w=15
return A.b(C.KT(t.a.c,p),$async$vh)
case 15:o=f
w=16
return A.b(t.vv(),$async$vh)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.S(D.eR0)
w=1
break}r.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.Ed(p)
case 1:return A.h(u,v)}})
return A.i($async$vh,v)},
Np(d){return this.bFY(d)},
bFY(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Np=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ca(null,null,!0,null,new C.eHS(d),s,null,!0,!0,x.y),$async$Np)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oB(t.a.c,A.a([],x.D)),$async$Np)
case 6:w=7
return A.b(t.vv(),$async$Np)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.ePh)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Np,v)},
ccn(d){var w=this.c
w.toString
A.bU(B.K,null,new C.eI0(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b3E(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.js
else w=B.c
v=A.m(16)
u=A.I(p?B.dZ:B.bS,B.q,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.aB,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(r,A.v(A.a([s,B.ac,t,B.bB,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.br:B.bn,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vh,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
a_a(d,e){return this.ccb(d,e)},
ccb(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_a=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.K,null,new C.eHW(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a_a)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hlP(r,new C.eHX(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Nr(d,e),$async$a_a)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_a,v)},
b0C(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.ay
else t=h.a?B.aP:B.aB
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.v(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.br:B.bn,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aG(!1,B.a1,!0,u,A.aL(!1,u,!0,new A.C(B.B1,A.A(A.a([s,B.bf,t,A.X(B.ex,w?B.br:B.bn,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag)},
cj1(d,e,f,g,h,i){return this.b0C(!1,d,e,f,g,h,i)},
Nr(d,e){return this.bG7(d,e)},
bG7(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Nr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.l2(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Nr)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bAx(t.a.c,d.a),$async$Nr)
case 6:w=7
return A.b(t.vv(),$async$Nr)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Nr,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tD(o),m=o?B.bY:B.iN
if(q.f)o=D.b4o
else{w=q.bAz(n)
v=q.bW9(n)
u=q.gbxG()
if(o)t=B.js
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aQ,new C.Fe(A.p(p,A.A(A.a([q.aAd(N.MK,"Projects",n,D.a90),q.aAd(B.vt,"Cashier",n,D.aUw),q.aAd(B.FA,"Family Tree",n,D.fVQ)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.eo,0.95,u,p),B.by],r)
w=q.d
if(w===D.a90){w=J.ad(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.aB,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b6,new C.awo(q.gaPn(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aA,q.cj3(n)],r))}else{o=q.a
if(w===D.aUw)u.push(new C.anH(o.c,n,p))
else{w=q.r
u.push(new C.aoO(o.c,o.d,o.e,o.f,new C.eId(q),new C.eIe(q),new A.cx(w,x.b4)))}}o=A.cd(A.v(u,B.F,p,B.e,B.j,0,B.p),B.r,p,B.y,p,Ad.M5,p,p,B.ah)}return A.c8(p,m,A.bn(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bAz(d){var w=null,v=A.m(8),u=d.a,t=A.X(Q.ZG,u?B.br:B.bn,w,w,w,16)
return A.aL(!1,v,!0,new A.C(B.kM,A.A(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.br:B.bn,w,w,w,w,w,w,w,w,14,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eHP(this),w,w,w,w,w,w,w)},
gbxG(){switch(this.d.a){case 0:return D.a8i
case 1:return D.fMA
case 2:return D.a8j}},
bW9(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cx,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.bLv,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bf,D.bwJ,A.aG(!1,B.a1,!0,w,A.aL(!1,A.m(12),!0,A.p(w,D.bJ3,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eHT(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.m(12)
return new C.Fe(A.p(w,A.v(A.a([new A.C(O.LY,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.d(A.Av(this.gcyq()),w,w,w,w,w,w,D.f6A,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.vg,B.je,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.fMz,w)},
aAd(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aV:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.q,2):A.I(B.K,B.q,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.br:B.bn
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.br:B.bn
return A.E(A.aG(!1,B.a1,!0,u,A.aL(!1,s,!0,A.di(u,A.A(A.a([w,B.eb,new A.dq(1,B.cn,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.bb,B.j,0,u,u),u,u,B.ct,new A.o(r,u,p,q,o,u,B.n),B.iv,u,u,u,B.M8,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eI9(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),1)},
cj3(d){var w,v,u,t,s,r,q=this,p=null
if(J.cl(q.e)){w=d.a
v=w?B.dX:B.c
u=A.m(15)
t=A.p(p,D.bJ8,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eT,28)],x.V),D.bUM,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.aB,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Fe(A.p(p,A.v(A.a([t,B.d5,s,B.N,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.br:B.bn,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.e1,A.A(A.a([A.E(q.aQX(B.iW,"Scan QR",new C.eI3(q),d),1),B.av,A.E(q.aQX(M.yg,"Upload file",new C.eI4(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aA,A.bH(D.fwI,q.gaPn(),A.bl(B.aV,p,p,p,B.c,B.fN,p,p,new A.b7(A.m(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.btu,1.05,D.a8i,p)}w=J.b6(q.e,new C.eI5(q,d),x.l)
w=A.B(w,w.$ti.k("ak.E"))
return new C.Fe(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bT,1,D.a8i,p)},
aQX(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aV.j(0.45),B.q,1)
return A.aG(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(w,A.v(A.a([A.X(d,B.aZ,w,w,w,26),B.N,A.d(e,w,w,w,w,w,w,D.f51,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.agn,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)},
cj2(d,e){var w,v,u=null,t=e.a,s=t?B.dX:B.c,r=A.m(14),q=A.I(t?B.dZ:B.bS,B.q,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.ek,10)],x.V),o=A.m(14),n=t?B.br:B.bn
n=A.bw(B.UW,new A.fG(1.7777777777777777,C.aPp(!0,B.fu,1/0,N.MK,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.aB,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.d(""+d.d.length+" budget items \xb7 "+A.Av(d.gwK()),u,u,u,u,u,u,D.f3a,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aG(!1,B.a1,!0,u,A.aL(!1,o,!0,A.v(A.a([n,new A.C(B.bC,A.A(A.a([v,A.aH(u,u,u,u,A.X(Ae.Nn,t?B.br:B.bn,u,u,u,u),u,u,u,new C.eI1(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eI2(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e4,u,u,u,1/0)}}
C.bwA.prototype={}
C.qS.prototype={
ag(){var w=this,v=w.c,u=w.d
return A.F(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcRA(){var w,v,u,t,s=this.c
if(s===B.k.jY(s))w=B.o.u(B.k.N(s))
else{v=B.k.aa(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aK(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lh.prototype={
gwK(){return B.d.cI(this.d,0,new C.cvJ())},
ag(){var w=this,v=w.d,u=A.U(v).k("K<1,a3<n,@>>")
v=A.B(new A.K(v,new C.cvI(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
baG(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lh(w.a,w.b,v,u,w.e)},
ban(d){return this.baG(d,null)},
Sg(d){return this.baG(null,d)}}
C.Hg.prototype={
a4(){return"FamilyGender."+this.b}}
C.hV.prototype={
ag(){var w=this
return A.F(["id",w.a,"name",w.b,"gender",C.hhG(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aCT(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hV(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ak3.prototype={
a4(){return"FamilyTreeAccessRole."+this.b}}
C.kA.prototype={
ganL(){var w=this.f
return new A.a2(w,new C.bMV(),A.U(w).k("a2<1>")).gM(0)},
ag(){var w=this,v=w.f,u=A.U(v).k("K<1,a3<n,@>>")
v=A.B(new A.K(v,new C.bMU(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hXo(w.y)],x.N,x.z)},
yo(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kA(w.a,v,u,t,s,r,w.r,q,p,o)},
baF(d,e){var w=null
return this.yo(w,w,d,e,w,w,w,w)},
cHg(d,e,f,g,h,i,j){return this.yo(d,e,f,g,h,i,j,null)},
aCY(d,e){var w=null
return this.yo(w,w,w,d,w,w,e,w)},
cFL(d){var w=null
return this.yo(w,w,w,w,w,w,d,w)},
cG8(d){var w=null
return this.yo(w,w,w,w,w,w,w,d)},
aCK(d){var w=null
return this.yo(w,w,w,w,d,w,w,w)},
cGN(d,e,f){var w=null
return this.yo(w,d,w,e,w,w,f,w)},
cFy(d){var w=null
return this.yo(w,w,d,w,w,w,w,w)},
cGl(d,e){var w=null
return this.yo(d,w,w,w,w,e,w,w)}}
C.cvK.prototype={
a4(){return"WrapAlignment."+this.b}}
C.cvL.prototype={
a4(){return"WrapCrossAlignment."+this.b}}
C.aG5.prototype={}
C.b7J.prototype={
bx(d){this.a=d.a
this.b=d.b},
cT(d){var w=new C.b7J()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b7I.prototype={
gw4(){return!0},
gFJ(){return this.z.b<this.b.length},
aSy(d){switch(0){case 0:return d.a.c}},
aSf(d){switch(0){case 0:return d.a.d}},
bPB(d,e){switch(0){case 0:return new A.hI(d,e)}},
bOZ(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h1(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iC(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.H_(b4)
switch(0){case 0:v=b5.b
u=new A.kx(0,v,0,1/0)
t=w===B.SV
break}s=A.a([],x.gZ)
r=A.T(x.cM,x.S)
for(b3=b1.z,q=B.d.fL(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.L)(q),++h){g=q[h]
g.h1(b4,u,!0)
f=b1.aSy(g)
f.toString
e=b1.aSf(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aG5(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aG5(k,j,i))}d=s.length
switch(0){case 0:q=b5.cv(new A.hI(m,l))
a0=q.a
a1=q.b
b1.a=new A.iC(0,0,a0,a1)
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
a8=b1.aSy(g)
e=b1.aSf(g)
e.toString
a9=b1.bOZ(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bPB(a6,a3+a9)
b0=g.a
g.a=new A.iC(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fY(d){var w,v,u,t,s,r=this
r.ld(d)
w=d.b
w.i3()
v=A.dm()
u=r.a
v.e4(u.a,u.b,0,1)
w.oR(0,v)
for(u=r.z,u=B.d.dq(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].fY(d)
w.ne(0)},
Ge(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
i3(){return this.z}}
C.buQ.prototype={}
var z=a.updateTypes(["az<~>()","R(hV)","R(kA)","~()","R(n8)","a3<n,@>(kA)","H(kA,kA)","n(hV)","kA(a3<@,@>)","R(lh)","R(u5)","n8(a3<@,@>)","u5()","H(lh,lh)","hV(a3<@,@>)","a3<n,@>(hV)","R(qS)","az<~>(lh)","eD<n?>(hV)","H(hV,hV)","n?(hV)","a3<n,@>(n8)","Zo(Y)","n(n)","acD(Y)","r(ob)","H(n8,n8)","hV(hV)","cL(bv<n,Fq>)","cL(JH)","~(hV)","H?(hV)","hV()","ai<hV>()","R(u4)","R(JH)","C(hV)","~(Hg)","R(aec)","r(Hg,n,a0)","YN(Y)","bv<n,ai<a3<n,@>>>(n,ai<n8>)","~(H)","+count,id,name(H,n,n)(kA)","kA(kA)","ZJ(Y)","ZK(Y)","R(lx)","lx()","n(kA)","a0u(Y)","Yn(Y)","Ym(Y)","YL(Y)","YP(Y)","r(qS)","acY(Y)","~(lV)","az<~>([n?])","N(N,lh)","r(lh)","N(N,qS)","a3<n,@>(qS)","qS(a3<@,@>)","Yl(Y)","Sc(Y)","cq(Hf)","lh(a3<@,@>)","u4()","n(lh)","a3<n,@>(lh)","n(S)","H(hV)","kA(a3<n,@>)","XV(Y)"])
C.fx6.prototype={
$1(d){return d.a+" "+d.b},
$S:119}
C.fx5.prototype={
bjK(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qK(s,d,B.hl,E.EX),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.V(r!=null&&A.KH(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bjK(d)},
$S:300}
C.fx7.prototype={
$1(d){return d.b},
$S:119}
C.fGg.prototype={
$1(d){var w=null
return A.eI(w,B.K,new F.P1(this.a,this.b,w),w,w,0,B.Y6,B.d0,w,w,w)},
$S:47}
C.fma.prototype={
$1(d){return d!=null},
$S:234}
C.fmb.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:234}
C.fmg.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:162}
C.fuQ.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fa(d,w,w,w,A.h2(w,B.rr,w,w,w,w,w,w,w,B.ds,w,w,10.5,w,B.ej,w,!0,w,w,w,w),w),u=f?B.ej:B.vo
return new A.nH(D.bp8,A.a9c(A.a([new A.fO(130,w,v),new A.yG(1,B.Ft,A.fa(e,w,w,w,A.h2(w,g==null?D.e7w:g,w,w,w,w,w,w,w,B.ds,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.xg,B.lo))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1904}
C.fuP.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vk(999)
f=A.wQ(A.ls(h,A.fa("Cashier",h,h,h,A.h2(h,D.z8,h,h,h,h,h,h,h,B.ds,h,h,10,h,B.ej,h,!0,h,h,h,h),h),h,new A.ky(D.e7n,h,f,B.hE,h),h,h,D.bpC,h))
w=A.wQ(A.fa("Debt receipt",h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.ds,h,h,22,h,B.ej,h,!0,h,h,h,h),h))
v=A.wQ(A.fa(C.wB(new A.S(Date.now(),0,!1),!0),h,h,h,D.a6Y,h))
u=A.vk(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fa(s,h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.ds,h,h,14,h,B.ej,h,!0,h,h,h,h),h)
r=A.fa("Person who owes",h,h,h,D.a6Y,h)
q=A.vk(10)
p=x.C
u=A.ls(h,A.yB(A.a([s,new A.fO(h,2,h),r,new A.fO(h,10,h),A.ls(h,A.yB(A.a([A.fa("Amount owed",h,h,h,D.a6Y,h),new A.fO(h,2,h),A.fa(A.Av(t.c),h,h,h,A.h2(h,D.z8,h,h,h,h,h,h,h,B.ds,h,h,20,h,B.ej,h,!0,h,h,h,h),h)],p),B.qP,B.lo),h,new A.ky(B.oX,h,q,B.hE,h),h,h,D.boP,1/0)],p),B.qP,B.lo),h,new A.ky(E.aGK,h,u,B.hE,h),h,h,D.bqC,1/0)
q=new A.nq(D.e7q,0.9,B.kD)
r=A.vk(12)
s=i.c
o=s.$2("Original due",C.wB(t.r,!1))
n=s.$2("Current due",C.wB(t.f,!1))
m=i.d
l=new A.nq(m,1.1,B.kD)
k=A.vk(8)
j=i.a
k=A.a([o,n,new A.fO(h,6,h),A.ls(h,A.wQ(A.fa(t.gaJJ(),h,h,h,A.h2(h,m,h,h,h,h,h,h,h,B.ds,h,h,11,h,B.ej,h,!0,0.5,h,h,h),h)),h,new A.ky(h,new A.pr(l,l,l,l),k,B.hE,h),h,h,D.bpK,1/0),new A.fO(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.z8))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.z8))
else{n=A.fa("Missed days ("+n+")",h,h,h,A.h2(h,B.rr,h,h,h,h,h,h,h,B.ds,h,h,10.5,h,B.ej,h,!0,h,h,h,h),h)
m=A.U(o).k("K<1,RL>")
o=A.B(new A.K(o,new C.fuO(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fO(h,4,h),n,new A.fO(h,6,h),new C.b7I(5,5,new C.b7J(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fO(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fO(h,8,h),w,new A.fO(h,3,h),v,new A.fO(h,16,h),u,new A.fO(h,10,h),A.ls(h,A.yB(k,B.xg,B.lo),h,new A.ky(h,new A.pr(q,q,q,q),r,B.hE,h),h,h,B.agz,1/0)],p)
w=j.a
if(w!=null){v=new A.nq(B.HX,1,B.kD)
B.d.v(f,A.a([new A.fO(h,16,h),A.fa("Debtor signature",h,h,h,A.h2(h,B.rr,h,h,h,h,h,h,h,B.ds,h,h,10,h,B.ej,h,!0,h,h,h,h),h),new A.fO(h,6,h),A.ls(h,new A.Hw(w,B.V5,h,h),h,new A.ky(h,new A.pr(v,v,v,v),A.vk(6),B.hE,h),82,h,B.Ma,1/0)],p))}f.push(new A.fO(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fa(w,h,h,h,D.eX6,h))
f.push(new A.fO(h,18,h))
f.push(A.wQ(A.fa("NGMY.ORG",h,h,h,A.h2(h,D.z8,h,h,h,h,h,h,h,B.ds,h,h,14,h,B.ej,h,!0,1.8,h,h,h),h)))
return f},
$S:358}
C.fuO.prototype={
$1(d){var w=null,v=new A.nq(D.HY,0.7,B.kD),u=A.vk(999)
return A.ls(w,A.fa(C.wB(d,!1),w,w,w,A.h2(w,D.HY,w,w,w,w,w,w,w,B.ds,w,w,9.5,w,B.ej,w,!0,w,w,w,w),w),w,new A.ky(w,new A.pr(v,v,v,v),u,B.hE,w),w,w,D.buS,w)},
$S:1905}
C.c0X.prototype={
$1(d){var w=null,v=B.bI.j(0.08),u=A.m(999),t=A.I(B.bI.j(0.28),B.q,1)
return A.p(w,A.d(C.wB(d,!1),w,w,w,w,w,w,D.f2F,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eF,w,w,w)},
$S:1906}
C.fGM.prototype={
$1(d){var w=null,v=A.aI(d,B.bU,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bMn,w,w,w,new C.fGJ(d),w,w,w,w,w,B.ca),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eI(w,B.K,new A.cS(new A.aY(0,380,0,v.a.b*0.9),A.aG(!1,B.a1,!0,u,new A.C(B.XX,A.v(A.a([new A.bI(B.a7,w,w,t,w),new A.dq(1,B.cn,A.cd(A.v(A.a([new A.ev(new C.aXM(r,w),s),B.S,A.A(A.a([A.E(A.ey(B.yr,D.ft5,new C.fGK(s,r,d),A.dg(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f_,w,new A.b7(A.m(14),B.Y),new A.ay(q,1,B.q,-1),w,w,w,w)),1),B.ab,A.E(A.dp(B.a0c,D.fpI,new C.fGL(r,d),A.bl(B.aZ,w,w,w,B.c,w,B.f_,w,new A.b7(A.m(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.r,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.aB,0,w,w,w,w,w,B.ag),w),w,w,0,Ai.Yi,B.d0,w,w,w)},
$S:47}
C.fGJ.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fGK.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.ak$.x.h(0,t.a)
m=m==null?null:m.gb8()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lW(2.5),$async$$0)
case 4:w=3
return A.b(e.hq(B.fX),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eT(B.dD.gaM(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aK(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.rN(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fGL.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fBq(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.S(A.b2(null,null,null,null,null,B.r,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fGE.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eI(w,B.aB,A.v(A.a([new A.C(D.bqr,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nt,w,w,w),1),A.aH(w,w,w,w,B.lm,w,w,w,new C.fGC(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dq(1,B.cn,new A.C(B.fU,A.bw(A.m(14),A.fL(t,B.A,w,w,B.cm,B.du,!1,w,!1,w,w),B.aq),w),w),new A.C(B.LO,new A.a7(1/0,w,A.dp(B.oM,D.aQm,new C.fGD(t,this.c,d),A.bl(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.M0,B.d0,w,new A.b7(v,B.Y),w)},
$S:47}
C.fGC.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fGD.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rN(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fGQ.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eI(w,B.aB,new A.C(D.bqz,A.v(A.a([A.A(A.a([D.bvT,A.aH(w,w,w,w,B.lm,w,w,w,new C.fGO(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.N,new A.ev(A.bw(A.m(14),A.p(w,A.b3(w,w,w,new C.b9S(s.ax,w),B.au),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a7(1/0,w,A.dp(B.oM,D.aQm,new C.fGP(t,s,d),A.bl(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(v,B.Y),w)},
$S:47}
C.fGO.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fGP.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.ak$.x.h(0,t.a)
n=n==null?null:n.gb8()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lW(2.5),$async$$0)
case 4:w=3
return A.b(e.hq(B.fX),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aK(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.eT(B.dD.gaM(s))
w=5
return A.b(A.rN(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fpL.prototype={
$1(d){return d.a===this.a},
$S:242}
C.dF5.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dER.prototype={
biY(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dX:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dEU(s,q,e),p,!0,!0,!1,B.Ic,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dEV(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.biY(d,e)},
$S:1907}
C.dEU.prototype={
$1(d){var w,v=null,u=this.c===B.vY,t=u?D.d9A:D.d5P
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.aB,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bn(!0,new A.C(K.aha,A.v(A.a([u,B.at,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.br:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.ie(!0,v,v,B.y,L.aNx,new C.dET(this.a,w,t,d),t.length,v,B.dQ,B.ah,!0)],x.p),B.aj,v,B.e,B.Q,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:26}
C.dET.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.d_.j(0.14)
else w=t.b.a.d.a?B.M:B.aP
v=A.m(14)
if(q)u=B.d_
else u=(t.b.a.d.a?B.br:B.bn).j(0.16)
u=A.I(u,B.q,q?1.6:1)
return A.aL(!1,p,!0,A.p(B.A,C.aXL(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dES(t.d,r),s,s,s,s,s,s,s)},
$S:175}
C.dES.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.dEV.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dEP.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:96}
C.dEQ.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cH(B.ct,e,v)
return new A.cZ(e,!1,A.ik(B.A,A.av(A.aG(!1,B.a1,!0,v,new A.e0(new C.dEO(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ag),v,v,v),v,new A.bf(t,new A.bo(0.96,1,u),u.k("bf<bJ.T>"))),v)},
$S:30}
C.dEO.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bU,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dX:B.c,f=A.m(14),e=A.I((h?B.br:B.bn).j(0.16),B.q,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aL(!1,v,!0,new A.C(B.eo,A.X(B.cB,i.a.d.a?B.br:B.bn,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dEz(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aRt("Name")
r=l.a
q=r.d==null?k:new C.dEA(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bm:B.lF
n=A.I(B.d_.j(0.35),B.q,1)
m=r.d
t=A.aM(k,B.T,h,k,!0,B.r,k,A.aN(),w,k,k,k,k,k,2,s.bay(new A.C(B.fy,A.aL(!1,p,!0,A.p(B.A,C.aXL(m==null?"\ud83d\udc64":A.fvE(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.co,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.kw,k,B.a6K,k,k)
v=A.a([v,B.ac,t,B.N,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bn,k,k,k,k,k,k,k,k,11.5,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.an,A.A(A.a([A.E(i.aS5("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dEB(r,a0),r.d===B.vY),1),B.ab,A.E(i.aS5("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dEG(r,a0),r.d===B.a3K),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.N,new A.bI(B.a3,k,k,A.hd(D.bKM,D.fru,new C.dEH(r,l.e,a0),A.fv(k,k,k,k,k,k,k,k,k,k,k,B.d_,k,k,k,k,k,k,k,k,k,k,k,k,k,B.ca)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.u8(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.f,k,k,k,k,k,2,i.aRu("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ai,k,k,s,k,k,B.dV,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.am,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.M:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.br:B.bn).j(0.22),B.q,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wB(r.a,!1)
v.push(A.aG(!1,B.a1,!0,q,A.aL(!1,p,!0,A.p(k,A.A(A.a([A.E(A.v(A.a([t,B.bB,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bHD],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bj,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dEI(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ag))
if(!h)B.d.v(v,A.a([B.N,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.r,k,k,k,k,k,2,i.aRt("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.am,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aZY(r.b.length!==0,B.mo,new C.dEJ(r,i,a0),new C.dEK(r,a0),"Upload from gallery","ID photo"))
v.push(i.aZY(r.c.length!==0,D.bB_,new C.dEL(r,i,d,a0),new C.dEM(r,a0),"Camera or gallery","Selfie"))
v.push(B.N)
t=l.w
v.push(new Ag.a71("Signature (optional)",t,new C.dEN(a0),new C.dEC(a0,t),new C.dED(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.br:B.bn
s=(i?B.br:B.bn).j(0.28)
s=A.E(A.dT(E.aQf,new C.dEE(d),A.dg(k,k,k,k,k,k,k,k,k,t,k,k,B.vb,k,new A.b7(A.m(10),B.Y),new A.ay(s,1,B.q,-1),k,k,k,k)),1)
t=A.bl(B.d_,k,k,k,B.c,k,B.vb,k,new A.b7(A.m(10),B.Y),k,k,k)
v.push(A.A(A.a([s,B.ab,A.E(A.bH(A.d(h?"Save":"Update",k,k,k,k,k,k,B.uz,k,k,k),new C.dEF(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cd(A.v(v,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.vk,B.je,k,k,360)},
$S:180}
C.dEz.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dEA.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dEB.prototype={
$0(){return this.b.$1(new C.dEy(this.a))},
$S:0}
C.dEy.prototype={
$0(){var w=this.a
w.d=B.vY
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dEG.prototype={
$0(){return this.b.$1(new C.dEx(this.a))},
$S:0}
C.dEx.prototype={
$0(){var w=this.a
w.d=B.a3K
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dEH.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dEI.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wF(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dEw(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEw.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcj(),w.gce(),w.gcu(),0,0,0,0,0)},
$S:0}
C.dEJ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.OY(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dEv(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEv.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dEK.prototype={
$0(){return this.b.$1(new C.dEu(this.a))},
$S:0}
C.dEu.prototype={
$0(){return this.a.b=""},
$S:0}
C.dEL.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dX:B.c
w=3
return A.b(A.bU(q,null,new C.dEs(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.OY(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dEt(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEs.prototype={
$1(d){var w=null
return A.bn(!0,A.v(A.a([A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.amj,w,w,w,w,new C.dEm(d),!1,w,w,w,w,w,w,w,D.fi2,w,w,w),A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.amh,w,w,w,w,new C.dEn(d),!1,w,w,w,w,w,w,w,D.foM,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.af,!0,!0)},
$S:26}
C.dEm.prototype={
$0(){A.a5(this.a,!1).O("camera")
return null},
$S:0}
C.dEn.prototype={
$0(){A.a5(this.a,!1).O("gallery")
return null},
$S:0}
C.dEt.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dEM.prototype={
$0(){return this.b.$1(new C.dEr(this.a))},
$S:0}
C.dEr.prototype={
$0(){return this.a.c=""},
$S:0}
C.dEN.prototype={
$0(){return this.a.$1(new C.dEq())},
$S:0}
C.dEq.prototype={
$0(){},
$S:0}
C.dEC.prototype={
$0(){return this.a.$1(new C.dEp(this.b))},
$S:0}
C.dEp.prototype={
$0(){return B.d.a9(this.a)},
$S:0}
C.dED.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ah8(u.a,null,null,new C.dEo(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEo.prototype={
$4(d,e,f,g){this.a.$1(new C.dEl(this.b,d))},
$S:438}
C.dEl.prototype={
$0(){var w=this.a
B.d.a9(w)
B.d.v(w,this.b)},
$S:0}
C.dEE.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dEF.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.S(D.eSS)
return}if(w.a.d==null){w.c.I(x.q).f.S(D.ePO)
return}A.a5(w.c,!1).O(!0)},
$S:0}
C.dF8.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:96}
C.dF9.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dX:B.c,n=A.m(14),m=A.I((p?B.br:B.bn).j(0.16),B.q,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.aB,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Av(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.br:B.bn,r,r,r,r,r,r,r,r,13,r,r,B.a5,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.yO(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.yO(r).length>0?B.bI:B.d_,r,r,r,r,r,r,r,r,12,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.br:B.bn
t=(q?B.br:B.bn).j(0.28)
s=x.p
return new A.cZ(e,!1,A.av(A.aG(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.N,v,u,B.aA,A.A(A.a([A.E(A.dT(B.nu,new C.dF6(d),A.dg(r,r,r,r,r,r,r,r,r,w,r,r,B.jx,r,new A.b7(A.m(10),B.Y),new A.ay(t,1,B.q,-1),r,r,r,r)),1),B.ab,A.E(A.bH(D.fpa,new C.dF7(d),A.bl(B.d_,r,r,r,B.c,r,B.jx,r,new A.b7(A.m(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.B4,O.LY,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ag),r,r,r),r)},
$S:30}
C.dF6.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dF7.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dF2.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dF3(r),p=r.a.d.a,o=p?B.dX:B.c,n=A.m(14),m=A.I((p?B.br:B.bn).j(0.14),B.q,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.aB,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Av(l.c),s,s,s,s,s,s,D.f48,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.ix((r.a.d.a?B.br:B.bn).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a_0,"View receipt",new C.dEW(r,d,l))
u=l.x!=null
t=u?B.r6:B.pP
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bqw,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dEX(r,d,l)),q.$3$icon$label$onTap(B.Bl,"Edit",new C.dEY(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mo,"View / download ID",new C.dEZ(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bAZ,"View / download selfie",new C.dF_(r,d,l)))
if(l.gaEA())p.push(q.$3$icon$label$onTap(A5.a03,"View / download signature",new C.dF0(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bI,B.e5,"Delete",new C.dF1(r,d,l)))
p.push(B.at)
return A.bn(!0,new A.C(B.vg,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:26}
C.dF3.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.aB
else w=d
return A.aL(!1,v,!0,new A.C(B.eP,A.A(A.a([A.X(e,w,v,v,v,20),B.bf,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1908}
C.dEW.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fGI(w,this.c)},
$S:0}
C.dEX.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.RC(this.c)},
$S:0}
C.dEY.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.CQ(this.c)},
$S:0}
C.dEZ.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCF(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dF_.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCF(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dF0.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fGN(w,this.c)},
$S:0}
C.dF1.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.NC(0,this.c)},
$S:0}
C.dFa.prototype={
$1(d){return d.x==null},
$S:242}
C.dFb.prototype={
$1(d){return d.x!=null},
$S:242}
C.dFc.prototype={
$2(d,e){return d+e.c},
$S:1909}
C.dFd.prototype={
$0(){return this.a.bya()},
$S:0}
C.dF4.prototype={
$0(){return this.a.ae5(this.b)},
$S:0}
C.fqk.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fql.prototype={
$0(){return B.d.gL(D.a1f)},
$S:z+68}
C.d4V.prototype={
$0(){var w=this.a
return w.m(new C.d4T(w,this.b))},
$S:0}
C.d4T.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d4U.prototype={
$0(){},
$S:0}
C.d4W.prototype={
$0(){var w=this.a.gbWS()
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.fso.prototype={
$1(d){return C.h2t(A.a1(d,x.N,x.z))},
$S:z+11}
C.fsp.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fsq.prototype={
$2(d,e){var w=A.c7(d.a,null),v=A.c7(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+26}
C.fFm.prototype={
$1(d){return d.ag()},
$S:z+21}
C.fNt.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fpC.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bMQ.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f0(e,v)?v:null},
$S:1910}
C.fFV.prototype={
$1(d){var w=this
return new C.YN(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d5A.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d5z(w,d))},
$S:z+66}
C.d5z.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5o.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cy(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d5l.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d4X.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d4Y.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d5p.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d55.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.dX:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ej(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.d53(d),w,w),A.bH(B.wh,new C.d54(d),A.bl(B.mS,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.d53.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d54.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d56.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d5m.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d5n.prototype={
$0(){return B.d.gL(D.yB)},
$S:z+12}
C.d51.prototype={
$1(d){var w=this.a,v=w.y,u=w.gy5(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Sc(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d52.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d57.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Yl(v,u,J.ad(w.d),null)},
$S:z+64}
C.d58.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5y.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aE(s,new C.Y3(r.y,r.gy5(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d5w(r),s,s,s,s,s,s,!1,B.a8)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b9g(v,e,w,u,t,r.gbO5(),C.hhF(r.y.Q),r.gy5(0),s)
w=t}return A.c6(q,new C.d5x(r,e),new A.C(B.Yb,w,s))},
$S:1911}
C.d5x.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd_(t).ay){t=this.b
u=x.cy.a(B.d.gd_(u.f.f)).guA(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dm()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fA(v*3.141592653589793*0.5)
return A.fs(B.a3,A.dc(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.d5w.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFF(B.pC,B.iw)},
$S:0}
C.d5i.prototype={
$0(){var w=this.a
return w.m(new C.d5h(w))},
$S:0}
C.d5h.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d5j.prototype={
$0(){var w=this.a.c
w.toString
A.a5(w,!1).O(null)
return null},
$S:0}
C.d4Z.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jO.j(0.5),r=x.p,q=A.a([D.fgF,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cl(p.d)?"Write this book":"Write a new book"
q.push(p.Yl(d,B.dW,w,J.cl(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Yl(d,L.ak8,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cy(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cC,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kd.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cC,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kd.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Yl(d,A0.alj,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Yl(d,B.pV,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Yl(d,B.pV,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eI(u,E.Aw,A.bn(!0,new A.C(A4.B_,A.v(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.ahA,B.d0,u,new A.b7(t,new A.ay(s,1.4,B.q,-1)),u)},
$S:47}
C.d5k.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.d5b.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cy(w.d)
return new C.YP(v,J.cy(w.d),w.r+1,null)},
$S:z+54}
C.d5c.prototype={
$1(d){var w=null
return A.oh(!1,A.ej(w,w,w,E.Aw,new A.kf(this.a,new C.d5a(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:339}
C.d5a.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a6q,B.od,A.E(A.d(e,w,w,w,w,w,w,B.iG,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:747}
C.d5d.prototype={
$0(){return this.a.a=!1},
$S:51}
C.d5e.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:201}
C.d5f.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5g.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.AE(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.R1(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d59(s,t))
w=4
return A.b(s.kQ(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d59.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5r.prototype={
$1(d){var w=null
return A.oh(!1,A.ej(w,w,w,E.Aw,new A.kf(this.a,new C.d5q(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:339}
C.d5q.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a6q,B.od,A.E(A.d(e,w,w,w,w,w,w,B.iG,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:747}
C.d5s.prototype={
$0(){return this.a.a=!1},
$S:51}
C.d5t.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:201}
C.d5u.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:201}
C.d5v.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.AE(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kQ(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d5_.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bg2(B.pC,V.LC)},
$S:0}
C.d50.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFF(B.pC,V.LC)},
$S:0}
C.d7k.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d7l.prototype={
$1(d){var w=this.a
return w.m(new C.d7j(w))},
$S:8}
C.d7j.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d7m.prototype={
$1(d){var w=this.a
return w.m(new C.d7i(w))},
$S:8}
C.d7i.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d7n.prototype={
$1(d){var w=this.a
return w.m(new C.d7h(w))},
$S:8}
C.d7h.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d7o.prototype={
$0(){var w=this.a
return w.m(new C.d7g(w,this.b))},
$S:0}
C.d7g.prototype={
$0(){var w=this.b
this.a.d.saV(0,w)
return w},
$S:0}
C.d7p.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga1_()
A.a5(this.b,!1).O(new A.bnT(w,v))},
$S:0}
C.d5P.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d5O.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.YL(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d5T.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d5S.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b6f(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hD,v,v,v)
return A.ej(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.d5Q(d),v,v),A.bH(B.wh,new C.d5R(d),A.bl(B.mS,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Aw,w,v,v,v,v,D.ffy,v)},
$S:19}
C.d5Q.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d5R.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d5U.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d5V.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.cd(A.bY(B.bz,r,B.bq,18,14),B.r,t,B.y,t,D.brq,t,t,B.ah)},
$S:284}
C.d5N.prototype={
$0(){return this.a.PE(0,this.b)},
$S:0}
C.d5M.prototype={
$0(){return this.a.P8(0,this.b)},
$S:0}
C.cEu.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cEv.prototype={
$0(){return B.d.gL(D.yB)},
$S:z+12}
C.cEw.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bZ(0,new A.C(d,A.c_(w,new A.o(w,w,A.I(this.a.j(f),B.q,g),v,w,w,B.n),B.bd),w),0,0,0)},
$S:1913}
C.cXW.prototype={
$1(d){return this.a.m(new C.cXV(this.b,this.c))},
$S:8}
C.cXV.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cYk.prototype={
$1(d){return this.a.m(new C.cY7())},
$S:2}
C.cY7.prototype={
$0(){},
$S:0}
C.cYl.prototype={
$1(d){return this.a.m(new C.cY6())},
$S:2}
C.cY6.prototype={
$0(){},
$S:0}
C.cYm.prototype={
$0(){var w=this.a
return w.m(new C.cY5(w,this.b))},
$S:0}
C.cY5.prototype={
$0(){var w=this.a
return w.d=w.go0().Fo(this.b.a)},
$S:0}
C.cYn.prototype={
$0(){var w=this.a
return w.m(new C.cY4(w,this.b))},
$S:0}
C.cY4.prototype={
$0(){var w=this.a
return w.d=w.go0().cF4(this.b)},
$S:0}
C.cYo.prototype={
$1(d){return this.a.m(new C.cY3())},
$S:2}
C.cY3.prototype={
$0(){},
$S:0}
C.cYp.prototype={
$0(){var w=this.a
return w.m(new C.cY2(w,this.b))},
$S:0}
C.cY2.prototype={
$0(){var w=this.a
return w.d=w.go0().cF9(this.b.a)},
$S:0}
C.cYq.prototype={
$1(d){var w=this.a
return w.m(new C.cYf(w,d))},
$S:6}
C.cYf.prototype={
$0(){var w=this.a
return w.d=w.go0().cG3(this.b)},
$S:0}
C.cYr.prototype={
$1(d){var w=this.a
return w.d=w.go0().aCN(d)},
$S:2}
C.cYs.prototype={
$1(d){var w=this.a
return w.d=w.go0().cFc(d)},
$S:2}
C.cYu.prototype={
$1(d){var w=this.a
return w.d=w.go0().cG1(d)},
$S:2}
C.cYv.prototype={
$1(d){var w=this.a
return w.m(new C.cYe(w,d))},
$S:8}
C.cYe.prototype={
$0(){var w=this.a
return w.d=w.go0().cFT(this.b)},
$S:0}
C.cYw.prototype={
$0(){var w=this.a,v=w.go0(),u=B.a.i(w.gy5(0).a.a),t=B.a.i(w.gaA1().a.a)
u=v.baP(B.a.i(w.gapR().a.a),t,u)
A.a5(this.b,!1).O(u)
return null},
$S:0}
C.dT7.prototype={
$0(){var w=this.a
w.vH()
w.a.bp()
w.a.pO()},
$S:0}
C.dT6.prototype={
$0(){var w=this.a
w.vH()
w.a.bp()
w.a.pO()},
$S:0}
C.dT9.prototype={
$0(){var w=this,v=w.b
if(J.cy(v)||J.cl(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dTa.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dTb.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dT5.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dT8.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dTd.prototype={
$0(){this.a.O7()
return null},
$S:0}
C.dTc.prototype={
$0(){return this.a.Ee(this.b)},
$S:0}
C.dSy.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.de,w,w,!0,w,w,new C.dSw(d),w,w),r=A.bl(B.bW,w,w,w,w,w,w,w,w,w,w,w)
return A.ej(A.a([s,A.bH(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dSx(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.dSw.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dSx.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dSz.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cFy(this.b)},
$S:0}
C.dSt.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aRJ(w.b,w.c,w.d)},
$S:9}
C.dS1.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dS2.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSg.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Gb(t.a.c),$async$$0)
case 2:s=r.r8(q.dH(e,new C.dSe(t)))
if(s!=null&&t.c!=null)t.m(new C.dSf(t,s))
t.a.bp()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSe.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dSf.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSh.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dSi.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSs.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cGl(C.hhP(w),w)},
$S:0}
C.dSq.prototype={
$1(d){return new A.e0(new C.dSp(this.a,this.b),null)},
$S:21}
C.dSp.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dX:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.br:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.alX,v,v,v,p>0?new C.dSl(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aQ,A.A(A.a([o,A.E(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.amw,v,v,v,new C.dSm(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.ej(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dSn(d),v,v),A.bH(B.p9,new C.dSo(d),A.bl(B.bW,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:160}
C.dSl.prototype={
$0(){return this.b.$1(new C.dSk(this.a))},
$S:0}
C.dSk.prototype={
$0(){return--this.a.a},
$S:0}
C.dSm.prototype={
$0(){return this.b.$1(new C.dSj(this.a))},
$S:0}
C.dSj.prototype={
$0(){return++this.a.a},
$S:0}
C.dSn.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dSo.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dSr.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cG8(this.a.a)
w.r.a9(0)},
$S:0}
C.dRQ.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ahg(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hbw(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dRR.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aCK(w)},
$S:0}
C.dSB.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.acD(this.b,w,this.c,null)},
$S:z+24}
C.dSv.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dX:B.c,t=A.m(20),s=A.X(B.li,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.Q,0,B.p)
return A.ej(A.a([A.bH(D.fqh,new C.dSu(d),A.bl(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.bb,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:19}
C.dSu.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dRS.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dRT.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dRU.prototype={
$1(d){return d.a},
$S:z+7}
C.dRV.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.L)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hV(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aCK(w)},
$S:0}
C.dRZ.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ahg(q)
w=A.U(q).k("a2<1>")
q=A.B(new A.a2(q,new C.dRX(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hbw(v.e,null,r,v.f,v.r,new C.dRY(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dRY.prototype={
$0(){return this.a.a9e(this.b)},
$S:0}
C.dRX.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dS_.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("K<1,hV>")
w=A.B(new A.K(w,new C.dRW(this.b),v),v.k("ak.E"))
u.d=t.aCK(w)},
$S:0}
C.dRW.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dSA.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dSb.prototype={
$1(d){return d.length!==0},
$S:3}
C.dSc.prototype={
$1(d){var w=this
return new A.e0(new C.dSa(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dSa.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dX:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.br:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.br:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.K(o,new C.dS6(u,e,o),A.U(o).k("K<1,r>")))
p.push(B.N)
u=w.d
p.push(A.aM(v,B.T,!1,v,!0,B.r,v,A.aN(),u,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(12),B.dg),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ai,v,v,v,v,v,B.m0,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.am,v,v,v,v))
p=A.v(p,B.aj,v,B.e,B.Q,0,B.p)
t=w.a
return A.ej(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dS7(d),v,v),A.bH(B.J4,new C.dS8(t,u,o,e),A.bl(B.bW,v,v,v,v,v,v,v,v,v,v,v)),A.bH(D.fdJ,new C.dS9(t,u,o,d),A.bl(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:160}
C.dS6.prototype={
$1(d){var w=null
return A.dL(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bOi,w,w,w,new C.dS5(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1914}
C.dS5.prototype={
$0(){return this.a.$1(new C.dS3(this.b,this.c))},
$S:0}
C.dS3.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dS7.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dS8.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dS4(w.c,u))
v.bO(0,B.c5)}},
$S:0}
C.dS4.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dS9.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a5(w.d,!1).O(!0)},
$S:0}
C.dSd.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cGN(this.b,D.tE,C.G9(v,w.a.c))},
$S:0}
C.dSI.prototype={
$1(d){return d.as},
$S:z+1}
C.dSJ.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iM(this.b,w)},
$S:0}
C.dSK.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.i5K(v)
return w.Vj(v==null?null:v.a)},
$S:0}
C.dSL.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hJ6(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gco(k)){k=A.aQ(1/0,e.a,e.b)
s=A.aQ(1/0,e.c,e.d)
l.coS(new A.at(u,t),v.gbgT(),new A.at(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cMq:D.cKS
q=A.I(s?B.dq:D.b9P,B.q,1)
p=A.m(22)
o=A.bZ(0,A.b3(m,m,m,new C.bcE(s,m),B.au),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bw(p,new A.an(B.W,m,B.aa,B.r,A.a([o,A.bZ(0,A.uh(new A.Q(n,n,n,n),new A.a7(u,t,new C.bdx(l.d,v,l.f,w,new C.dSE(l),l.gc8T(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.buX(s,new C.dSF(l,e),new C.dSG(l,e),new C.dSH(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.b0,B.b5,B.x,r,m,m),B.n),m,m,m,R.agD,m,m,m,m)},
$S:215}
C.dSE.prototype={
$1(d){var w=this.a
w.m(new C.dSC(w,d))},
$S:2}
C.dSC.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.J(0,v)},
$S:0}
C.dSF.prototype={
$0(){var w=this.b
return this.a.b8u(1.25,new A.at(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dSG.prototype={
$0(){var w=this.b
return this.a.b8u(0.8,new A.at(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dSH.prototype={
$0(){var w=this,v=w.b
return w.a.aRJ(new A.at(A.aQ(1/0,v.a,v.b),A.aQ(1/0,v.c,v.d)),new A.at(w.c,w.d),w.e.gbgT())},
$S:0}
C.dSM.prototype={
$0(){var w=this.a
return w.m(new C.dSD(w))},
$S:0}
C.dSD.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dS0.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fJ(new A.fC(s.c)),$async$$0)
case 2:t.xz("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d5Z.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bhf(u,C.hlT(v.c,u),new C.d5Y(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d5Y.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d6_.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bkB(d.d,d.c,u.f.t(0,d.a),new C.d5X(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d5X.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fqo.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.r8(new A.cR(new A.a2(v,new C.fqp(d),w.k("a2<1>")),new C.fqq(),w.k("cR<1,n>")))},
$S:z+20}
C.fqp.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fqq.prototype={
$1(d){return d.a},
$S:z+7}
C.fqm.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fqn.prototype={
$1(d){return d.b},
$S:z+7}
C.fqt.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.r8(new A.cR(new A.a2(v,new C.fqu(d),w.k("a2<1>")),new C.fqv(),w.k("cR<1,n>")))},
$S:z+20}
C.fqu.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fqv.prototype={
$1(d){return d.a},
$S:z+7}
C.fqr.prototype={
$1(d){var w,v=A.et([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ai(0,w)&&v.J(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fqs.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d61.prototype={
$0(){return this.a},
$S:z+32}
C.d6i.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ai(0,d)},
$S:257}
C.d6a.prototype={
$2(d,e){var w=this.a.cg(0,d,new C.d6b()),v=J.a6(w)
if(!v.t(w,e))v.J(w,e)},
$S:113}
C.d6b.prototype={
$0(){return A.a([],x.s)},
$S:748}
C.d69.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f0(w,e)
return w===!0},
$S:335}
C.d62.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d68.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d67.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.J(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.C2:v)
u=1
while(v.C())u+=s.$2(v.gT(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.T:v)
while(v.C()){t=v.gT(v)
if(e.t(0,t))continue
e.J(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.C2:t)
while(t.C())u+=s.$2(t.gT(t).a,e)}return u},
$S:1916}
C.d63.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d6c.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.J(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aV(u==null?B.T:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gT(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.J(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aV(t==null?D.C2:t)
while(t.C()){r=t.gT(t)
if(r.a!==a9&&!B.d.b5(w,new C.d6d(r)))w.push(r)}}B.d.bn(w,new C.d6e(a8))
B.d.b0(w,new C.d6f())
q=C.hJ5(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.euL],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.L)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.y(-p,p)],x.G)
a8=x.F
k=A.a([],a8)
j=A.a([],a8)
for(a8=n.length,m=0;m<n.length;n.length===a8||(0,A.L)(n),++m){i=n[m]
if(k.length!==0){h=Math.min(j.length,i.length)
for(g=-1/0,f=0;f<h;++f){e=f===0?22:44
g=Math.max(g,j[f]+e-i[f].a)}}else g=0
k.push(g)
for(f=0;f<i.length;++f){d=g+i[f].b
if(f<j.length)j[f]=Math.max(j[f],d)
else j.push(d)}}a0=(B.d.gL(k)+B.d.gal(k))/2
a1=A.a([new A.y(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bnD(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1917}
C.d6d.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d6e.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d6f.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.d6g.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a6(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a4(v).k("bc<2>")).cI(0,0,B.pg)+88-w.gL(n).a}else u=0
for(w=J.a6(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:695}
C.d6h.prototype={
$1(d){return 16+d*156},
$S:256}
C.d60.prototype={
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
t.n(0,d,new C.Fq(r,new A.u(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.Fq(s,new A.u(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.Fq(s,new A.u(e,v)))}t=o.r.h(0,d)
t=J.aV(t==null?B.T:t)
s=o.w
while(t.C()){r=t.gT(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.JH(d,new A.u(e+t,w),s,s.length))}},
$S:201}
C.d64.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aI6(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:113}
C.d65.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d66.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:749}
C.d6j.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:749}
C.d6k.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:461}
C.d6l.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:177}
C.d6m.prototype={
$1(d){return d>=0.5},
$S:117}
C.f8C.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hp(A.aL(!1,v,!0,new A.a7(38,38,A.X(d,this.a.c?B.c:B.cE,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1919}
C.eKx.prototype={
$1(d){var w=null,v=A.m(8),u=B.bW.j(0.12),t=A.m(8)
return new A.C(B.n6,A.aL(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.f_S,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.M9,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eKw(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eKw.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dmb.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dma.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nr,B.L,w,w)
return A.ej(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.dm8(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.md,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dm9(d),w,w)],x.p),B.bb,B.AT,w,u,D.bsG,w,D.buC,new A.b7(v,B.Y),w,w)},
$S:19}
C.dm8.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dm9.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dmk.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dml.prototype={
$1(d){var w=this.a
return w.m(new C.dmj(w,d))},
$S:z+37}
C.dmj.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmm.prototype={
$1(d){var w=null
return A.qd(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dmp.prototype={
$1(d){var w=this.a
return w.m(new C.dmi(w,d))},
$S:33}
C.dmi.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dmo.prototype={
$1(d){var w=null
return A.qd(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dmq.prototype={
$1(d){var w=this.a
return w.m(new C.dmh(w,d))},
$S:33}
C.dmh.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dmr.prototype={
$0(){var w=this.a
return w.m(new C.dmg(w))},
$S:0}
C.dmg.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dms.prototype={
$0(){var w=this.a
return w.m(new C.dmf(w))},
$S:0}
C.dmf.prototype={
$0(){return++this.a.at},
$S:0}
C.dmt.prototype={
$0(){var w=this.a
return w.m(new C.dme(w))},
$S:0}
C.dme.prototype={
$0(){return--this.a.ax},
$S:0}
C.dmu.prototype={
$0(){var w=this.a
return w.m(new C.dmd(w))},
$S:0}
C.dmd.prototype={
$0(){return++this.a.ax},
$S:0}
C.dmv.prototype={
$1(d){var w=this.a
return w.m(new C.dmc(w,d))},
$S:8}
C.dmc.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dmn.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dmw.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bW.j(0.18)
else w=q.c.a?B.dX:B.c
v=A.m(12)
if(p)u=B.bW
else u=(q.c.a?B.dZ:B.bS).j(0.85)
u=A.I(u,B.q,p?1.5:1)
if(p)t=B.bW
else t=q.c.a?B.br:B.bn
t=A.X(f,t,r,r,r,18)
if(p)s=B.bW
else s=q.c.a?B.br:B.bn
return A.E(A.aG(!1,B.a1,!0,r,A.aL(!1,o,!0,A.di(r,A.v(A.a([t,B.at,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bc,new A.o(w,r,u,v,r,r,B.n),B.eE,r,r,r,B.jx,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dmx(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
$S:z+39}
C.dmx.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dmG.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.c7u.prototype={
$2(d,e){return new A.bv(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:94}
C.c7B.prototype={
$1(d){return d.ag()},
$S:z+5}
C.c7C.prototype={
$2(d,e){var w=J.b6(e,new C.c7A(),x.a)
w=A.B(w,w.$ti.k("ak.E"))
return new A.bv(d,w,x.d2)},
$S:z+41}
C.c7A.prototype={
$1(d){return d.ag()},
$S:z+21}
C.c7w.prototype={
$1(d){return C.ak4(A.a1(d,x.N,x.z))},
$S:z+8}
C.c7x.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c7y.prototype={
$1(d){return C.h2t(A.a1(d,x.N,x.z))},
$S:z+11}
C.c7z.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c7G.prototype={
$1(d){return new A.aFb(d.f.length,d.a,d.b)},
$S:z+43}
C.c7H.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:643}
C.c7D.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c7E.prototype={
$1(d){return d.cFL(C.G9(d,this.a))},
$S:z+44}
C.dSV.prototype={
$1(d){return C.tO(d,this.a.a.c)},
$S:z+2}
C.dSW.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dT_.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dT0.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dSS.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZe(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.y6("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.p_(r.c,r.e),$async$$0)
case 4:s.y6(p)
w=5
return A.b(s.Je(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dST.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZe(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.y6("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.p_(r.c,r.e),$async$$0)
case 4:s.y6(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSU.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Uy(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.y6("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.y6("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.y6("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Je(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.aa(j)
o=r.a
if(o.c==null){w=1
break}o.y6(B.a.ec(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dSZ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZd(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.y6("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a5(r,!1).c8(A.e8(new C.dSY(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.p_(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSY.prototype={
$1(d){var w=this.b
return new C.ZJ(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dSX.prototype={
$1(d){return D.fQB},
$S:z+46}
C.dT2.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dT3.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dT1(w,d)
return new A.C(B.dc,new C.bdB(this.b,d.c,d.a,w,null),null)},
$S:1920}
C.dT1.prototype={
$0(){return this.a.X1(this.b.b)},
$S:0}
C.dSN.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dSO.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dSP.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dSQ.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dSR.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dT4.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cX(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a5(this.b,!1).O(s)
return}},
$S:179}
C.dEd.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dEe.prototype={
$0(){return B.d.gL(D.a2E)},
$S:z+48}
C.dEf.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.X(this.b.d,B.c.j(0.95),w,w,D.cSB,44),w,w,w),w,w,new C.bin(u,t,v,w),B.au)},
$S:67}
C.fGn.prototype={
$1(d){return A.oL(new C.fGm(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:137}
C.fGm.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dX:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rq,24)],x.V),o=r?B.dZ:B.bS
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bW.j(0.18)],x.O)
w=A.p(t,D.bIT,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a8(B.a3,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.aB,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.S,o,new A.C(E.ahE,A.A(A.a([w,B.bf,A.E(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.br:B.bn,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.E(A.ie(!0,t,e,B.y,D.eO0,new C.fGl(this.b,s),20,B.ahe,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kC,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:114}
C.fGl.prototype={
$2(d,e){var w=null,v=D.a2E[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.dZ:B.bS,B.q,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.ek,8)],x.V),p=A.m(15),o=A.E(new C.a5F(v.a,!0,w),1),n=s?B.js:B.iQ,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aP:B.aB,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a1,!0,w,A.aL(!1,u,!0,A.eE(A.bw(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.br:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.le,w,w,w)],l),B.aj,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fGk(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)},
$S:75}
C.fGk.prototype={
$0(){A.a5(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cfa.prototype={
$0(){return this.a.af8(this.b)},
$S:0}
C.fFK.prototype={
$1(d){return D.fMR},
$S:z+74}
C.fNe.prototype={
$1(d){var w=this
return new C.a0u(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fFP.prototype={
$1(d){return new C.Yn(this.a,null)},
$S:z+51}
C.fFO.prototype={
$1(d){return D.fNQ},
$S:z+52}
C.cYI.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cYJ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cYH(w,d))},
$S:33}
C.cYH.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cYK.prototype={
$1(d){return this.a.JO()},
$S:2}
C.cYL.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cYE.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cYF.prototype={
$1(d){return this.a.JO()},
$S:2}
C.cYG.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cwh.prototype={
$0(){},
$S:0}
C.cwn.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cwo.prototype={
$0(){return this.a.aNc(-1)},
$S:0}
C.cwp.prototype={
$1(d){return this.a.m(new C.cwm())},
$S:2}
C.cwm.prototype={
$0(){},
$S:0}
C.cwq.prototype={
$0(){return this.a.aNc(1)},
$S:0}
C.cwr.prototype={
$1(d){return this.a.m(new C.cwl())},
$S:2}
C.cwl.prototype={
$0(){},
$S:0}
C.cws.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.dZ:B.bS
return A.u7(u,u,B.aZ,r,u,new C.cwk(t,d),B.B5,s,w,u,new A.ay(v,1,B.q,-1),B.ca)},
$S:1921}
C.cwk.prototype={
$1(d){var w=this.a
return w.m(new C.cwi(w,this.b))},
$S:8}
C.cwi.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cwt.prototype={
$1(d){return this.a.m(new C.cwj())},
$S:2}
C.cwj.prototype={
$0(){},
$S:0}
C.cwu.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.f84.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a5(this.b,!1).O(w)},
$S:2}
C.f85.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.f86.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a5(this.b,!1).O(w)},
$S:0}
C.f82.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbxj()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b3(new A.C(D.buB,new A.ev(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.buM(p,v,this.b.a,u,t,r),r,r,B.au)},
$S:67}
C.f83.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dC.aw(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.aq(B.aV,B.bW,w)
s.toString
s=A.a([B.aZ,s,B.aV],x.O)
return A.aG(!1,B.a1,!0,p,A.aL(!1,v,!0,A.eE(D.e5p,r,new A.o(r,r,A.I(B.c.j(0.4),B.q,1.5),u,r,new A.a8(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
$S:126}
C.fEr.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:70}
C.eHH.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eHy.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eHz.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eHF.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e0(new C.eHE(w,this.b),null)},
$S:21}
C.eHE.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dX:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aB,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eI(w,u,new A.C(B.ahy,A.v(A.a([s,B.an,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.h8j(new C.eHB(r,e),r.a),B.aA,A.A(A.a([A.E(A.dT(B.de,new C.eHC(d),w),1),B.av,A.E(A.bH(B.TD,new C.eHD(r,d),A.bl(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.aj,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(t,B.Y),w)},
$S:97}
C.eHB.prototype={
$1(d){return this.b.$1(new C.eHA(this.a,d))},
$S:33}
C.eHA.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eHC.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eHD.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.eHG.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Sg(this.b)},
$S:0}
C.eHt.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.ban(w)},
$S:0}
C.eHx.prototype={
$1(d){return this.bjq(d)},
bjq(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.KT(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iM(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eHw.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("a2<1>")
w=A.B(new A.a2(w,new C.eHv(this.b),v),v.k("J.E"))
u.d=t.ban(w)},
$S:0}
C.eHv.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eHI.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iM(this.b,w)},
$S:0}
C.eHJ.prototype={
$1(d){return this.a.bBm(d,this.b)},
$S:z+55}
C.eHu.prototype={
$0(){return this.a.a9d(this.b)},
$S:0}
C.fN4.prototype={
$1(d){return new C.acY(this.a,this.b,this.c,null)},
$S:z+56}
C.eHL.prototype={
$0(){return this.a.ZF(this.b)},
$S:0}
C.eHM.prototype={
$0(){return this.a.PA(this.b)},
$S:0}
C.eHN.prototype={
$0(){return this.a.E9(this.b)},
$S:0}
C.eHO.prototype={
$0(){return this.a.ZG(this.b)},
$S:0}
C.eHK.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eHo.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eHp.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eHq.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eHs.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pU(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eHr(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eHr.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eIa.prototype={
$2(d,e){return d+e.gwK()},
$S:z+59}
C.eI6.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eI7.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eHS.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dX:B.c,s=A.m(24),r=A.p(v,D.bJi,B.f,v,v,new A.o(B.ay.j(u?0.18:0.08),v,A.I(B.ay.j(0.28),B.q,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aB,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.br:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aP:B.aB
u=u?B.dZ:B.bS
w=x.p
return A.eI(v,t,new A.C(B.xC,A.v(A.a([r,B.aQ,q,B.N,p,B.d5,A.A(A.a([A.E(A.dT(B.nu,new C.eHQ(d),A.dg(v,v,v,v,v,v,v,v,v,o,v,v,B.f_,v,new A.b7(A.m(14),B.Y),new A.ay(u,1,B.q,-1),v,v,v,v)),1),B.av,A.E(A.bH(D.fu_,new C.eHR(d),A.bl(B.ay,v,v,v,v,v,B.f_,v,new A.b7(A.m(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d0,v,new A.b7(s,B.Y),v)},
$S:47}
C.eHQ.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.eHR.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eI0.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dX:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fM,28)],x.V),g=k?D.cZ2:B.a22,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aA,D.eIf,B.at,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cv,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.ax,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.ahB,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b3E(B.b7,B.iW,new C.eHY(v,d),l,"Camera import","Scan QR"),1),B.av,A.E(v.b3E(B.cz,M.yg,new C.eHZ(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.ay.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.ay.j(0.28),B.q,1)
o=A.p(m,D.bIH,B.f,m,m,new A.o(B.ay.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.aB,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bn,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bn(!0,new A.C(B.vi,A.p(m,A.v(A.a([g,new A.C(B.ahz,A.v(A.a([w,B.S,u,B.by,t,B.S,A.aG(!1,B.a1,!0,m,A.aL(!1,s,!0,A.p(m,A.A(A.a([o,B.bf,n,A.X(B.ex,k?B.br:B.bn,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bC,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eI_(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:26}
C.eHY.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.vh("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eHZ.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.vh("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eI_.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.Np(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eHW.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dX:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eT,24)],x.V),k=o?B.dZ:B.bS
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.br:B.bn
u=A.bw(w,new A.a7(48,48,C.aPp(!0,A.m(12),48,N.MK,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aP:B.aB,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Av(v.gwK())
s=x.p
r=this.a
return A.bn(!0,new A.C(B.vi,A.p(q,A.v(A.a([B.S,k,new A.C(D.ahw,A.A(A.a([u,B.bf,A.E(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.br:B.bn,q,q,q,q,q,q,q,q,12,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.AK,r.cj1(B.tX,B.aV,new C.eHU(d),p,"QR code or backup file","Transfer project"),r.b0C(!0,B.e5,B.ay,new C.eHV(d),p,"Remove from this device","Delete project"),B.S],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:26}
C.eHU.prototype={
$0(){A.a5(this.a,!1).O("transfer")
return null},
$S:0}
C.eHV.prototype={
$0(){A.a5(this.a,!1).O("delete")
return null},
$S:0}
C.eHX.prototype={
$1(d){return this.bjr(d)},
bjr(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.KT(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vv(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eId.prototype={
$0(){var w=this.a
w.a.bp()
w.m(new C.eIc(w))},
$S:0}
C.eIc.prototype={
$0(){return this.a.r++},
$S:0}
C.eIe.prototype={
$0(){var w=this.a
return w.m(new C.eIb(w))},
$S:0}
C.eIb.prototype={
$0(){return this.a.r++},
$S:0}
C.eHP.prototype={
$0(){var w=this.a.c
w.toString
return A.iM(w,null)},
$S:0}
C.eHT.prototype={
$0(){return this.a.ccn(this.b)},
$S:0}
C.eI9.prototype={
$0(){var w=this.a
return w.m(new C.eI8(w,this.b))},
$S:0}
C.eI8.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eI3.prototype={
$0(){return this.a.vh("scan")},
$S:0}
C.eI4.prototype={
$0(){return this.a.vh("file")},
$S:0}
C.eI5.prototype={
$1(d){return this.a.cj2(d,this.b)},
$S:z+60}
C.eI2.prototype={
$0(){return this.a.Ed(this.b)},
$S:0}
C.eI1.prototype={
$0(){return this.a.a_a(this.b,this.c)},
$S:0}
C.cvJ.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cvI.prototype={
$1(d){return d.ag()},
$S:z+62}
C.cvG.prototype={
$1(d){return C.hrH(A.a1(d,x.N,x.z))},
$S:z+63}
C.cvH.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fpu.prototype={
$1(d){return d.y===D.kl},
$S:z+2}
C.fNB.prototype={
$1(d){return C.bAA(d,this.a)},
$S:z+2}
C.fnV.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bMV.prototype={
$1(d){return!d.as},
$S:z+1}
C.bMU.prototype={
$1(d){return d.ag()},
$S:z+15}
C.bMR.prototype={
$1(d){return C.h2u(A.a1(d,x.N,x.z))},
$S:z+14}
C.bMS.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bMT.prototype={
$1(d){return J.k(d)},
$S:17}
C.ffF.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fbm.prototype={
$1(d){return C.fU_(A.a1(d,x.N,x.z))},
$S:z+67}
C.fbn.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.fbo.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fFB.prototype={
$1(d){return J.k(d)},
$S:17}
C.fFC.prototype={
$1(d){return d.a},
$S:z+69}
C.fFD.prototype={
$1(d){return d.length!==0},
$S:3}
C.fFE.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fFF.prototype={
$1(d){return d.Sg(null).ag()},
$S:z+70}
C.fNz.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fpW.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fsu.prototype={
$1(d){return C.ak4(A.a1(d,x.N,x.z))},
$S:z+8}
C.fsv.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fsw.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fsx.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fsy.prototype={
$1(d){return C.tO(d,this.a)},
$S:z+2}
C.fFo.prototype={
$1(d){return C.tO(d,this.a)},
$S:z+2}
C.fNu.prototype={
$1(d){return C.ak4(A.a1(d,x.N,x.z))},
$S:z+8}
C.fNv.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fNw.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fpD.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fpE.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fNF.prototype={
$1(d){return!d.as},
$S:z+1}
C.fp9.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fpa.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fpb.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.fNf.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.ftg.prototype={
$1(d){return d.Q},
$S:z+72}
C.fFh.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fsr.prototype={
$1(d){return C.ak4(A.a1(d,x.N,x.z))},
$S:z+8}
C.fss.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fst.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fFc.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fbU.prototype={
$1(d){return d.length!==0},
$S:3}
C.fbV.prototype={
$1(d){return C.h2u(A.a1(d,x.N,x.z))},
$S:z+14}
C.fbW.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fbX.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fbY.prototype={
$1(d){return d.length!==0},
$S:3}
C.fca.prototype={
$2(d,e){return d.eU(new C.fcb(e))},
$S:1922}
C.fcb.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c8},
$S:1923}
C.fc7.prototype={
$1(d){return C.hNL(d,this.a)},
$S:z+73}
C.fc8.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fc9.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fgj.prototype={
$1(d){return d.a},
$S:z+49}
C.fgk.prototype={
$1(d){return d.length!==0},
$S:3}
C.fgl.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fis.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fne.prototype={
$1(d){return C.hdP(d,C.G9(d,this.a))},
$S:z+5}
C.fnf.prototype={
$1(d){return C.hdQ(d,C.G9(d,this.a))},
$S:z+5};(function aliases(){var w=C.aKs.prototype
w.btv=w.q
w=C.aMD.prototype
w.bvT=w.q
w=C.aME.prototype
w.bvU=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aBX.prototype,"gcfZ","cg_",25)
var s
w(s=C.az0.prototype,"gc8Z","c9_",42)
v(s,"gaLs","MY",0)
v(s,"gcod","Ax",0)
v(s,"gbJ4","ND",0)
v(s,"gcC_","y7",0)
v(s,"gci_","a_S",0)
v(s,"gbEt","Nl",0)
v(s,"gbJv","Wt",0)
w(s,"gbO5","bO6",71)
v(s,"gbyY","zA",0)
v(C.az1.prototype,"gcBW","F4",0)
v(s=C.aCx.prototype,"gaeL","vw",0)
v(s,"gcbD","a_1",0)
v(s,"gaPt","HC",0)
v(s=C.aCu.prototype,"gcya","a1X",0)
v(s,"gaeL","vw",0)
v(s,"gcmg","a0x",0)
v(s,"gccA","a_f",0)
w(s,"gc8T","c8U",30)
v(s,"gbJm","HH",0)
v(s,"gcz9","cza",3)
v(s,"gc_B","Y7",0)
w(s,"gc7p","c7q",23)
v(s,"gcbn","cbo",3)
v(s=C.aAW.prototype,"gc5d","P9",0)
v(s,"gc5f","c5g",3)
v(s,"gbG0","a8Q",0)
v(s=C.aCw.prototype,"gbMB","WY",0)
v(s,"gbWZ","XB",0)
v(s,"gcsx","a1n",0)
v(s,"gcoN","a0Z",0)
v(C.aCv.prototype,"gcov","agv",0)
v(C.arH.prototype,"gc7n","ZE",0)
v(C.axM.prototype,"ga1H","JO",3)
v(C.axL.prototype,"ga1H","JO",3)
v(C.awv.prototype,"ga1H","JO",3)
v(s=C.aE1.prototype,"gb00","Q4",0)
v(s,"gbxM","Vd",0)
v(s,"gcco","ccp",3)
w(C.aE0.prototype,"gc8d","c8e",57)
u(C.aE2.prototype,"gaPn",0,0,null,["$1","$0"],["HB","bHh"],58,0,0)
t(C,"hl5","hXm",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.anA,C.u4,C.n8,C.Hf,C.aec,C.Jz,C.u5,C.JH,C.Fq,C.bdz,C.aI6,C.aoL,C.d6n,C.lx,C.aSk,C.aSj,C.aQl,C.tD,C.qS,C.lh,C.hV,C.kA,C.aG5])
u(A.hT,[C.fx6,C.fx5,C.fx7,C.fGg,C.fma,C.fmb,C.fmg,C.fuQ,C.fuP,C.fuO,C.c0X,C.fGM,C.fGE,C.fGQ,C.fpL,C.dEU,C.dEP,C.dEQ,C.dEs,C.dEo,C.dF8,C.dF9,C.dF2,C.dF3,C.dFa,C.dFb,C.fqk,C.fso,C.fsp,C.fFm,C.fNt,C.fpC,C.fFV,C.d5A,C.d4X,C.d55,C.d5m,C.d51,C.d57,C.d4Z,C.d5b,C.d5c,C.d5a,C.d5r,C.d5q,C.d7l,C.d7m,C.d7n,C.d5O,C.d5T,C.d5S,C.cEu,C.cEw,C.cXW,C.cYk,C.cYl,C.cYo,C.cYq,C.cYr,C.cYs,C.cYu,C.cYv,C.dT8,C.dSy,C.dSt,C.dS1,C.dSe,C.dSh,C.dSq,C.dRQ,C.dSB,C.dSv,C.dRS,C.dRT,C.dRU,C.dRZ,C.dRX,C.dRW,C.dSb,C.dSc,C.dS6,C.dSI,C.dSE,C.d5Z,C.d6_,C.fqo,C.fqp,C.fqq,C.fqm,C.fqn,C.fqt,C.fqu,C.fqv,C.fqr,C.fqs,C.d6i,C.d68,C.d63,C.d6d,C.d6e,C.d6h,C.d65,C.d6k,C.d6l,C.d6m,C.f8C,C.eKx,C.dma,C.dmk,C.dml,C.dmm,C.dmp,C.dmo,C.dmq,C.dmv,C.dmw,C.c7B,C.c7A,C.c7w,C.c7x,C.c7y,C.c7z,C.c7G,C.c7D,C.c7E,C.dSV,C.dSY,C.dSX,C.dT3,C.dT4,C.dEd,C.fGn,C.fFK,C.fNe,C.fFP,C.fFO,C.cYJ,C.cYK,C.cYF,C.cwp,C.cwr,C.cws,C.cwk,C.cwt,C.f84,C.fEr,C.eHF,C.eHB,C.eHx,C.eHv,C.eHJ,C.fN4,C.eHS,C.eI0,C.eHW,C.eHX,C.eI5,C.cvI,C.cvG,C.cvH,C.fpu,C.fNB,C.fnV,C.bMV,C.bMU,C.bMR,C.bMS,C.bMT,C.fbm,C.fbn,C.fFB,C.fFC,C.fFD,C.fFE,C.fFF,C.fNz,C.fpW,C.fsu,C.fsv,C.fsx,C.fsy,C.fFo,C.fNu,C.fNv,C.fNw,C.fpD,C.fpE,C.fNF,C.fp9,C.fpa,C.fNf,C.ftg,C.fFh,C.fsr,C.fss,C.fFc,C.fbU,C.fbV,C.fbW,C.fbX,C.fbY,C.fcb,C.fc7,C.fc8,C.fgj,C.fgk,C.fis,C.fne,C.fnf])
u(A.au,[C.aXM,C.ak2,C.aTz,C.Y3,C.b9g,C.bdx,C.bhf,C.buX,C.bkB,C.acC,C.bhe,C.acB,C.bhd,C.aAX,C.aH8,C.acD,C.Jv,C.bdy,C.abT,C.bdw,C.bdB,C.aXK,C.arH,C.acY])
u(A.mJ,[C.b9S,C.bb4,C.baW,C.aG0,C.bgi,C.bdA,C.bcE,C.bin,C.buM])
u(A.j6,[C.fGJ,C.fGK,C.fGL,C.fGC,C.fGD,C.fGO,C.fGP,C.dF5,C.dES,C.dEV,C.dEz,C.dEA,C.dEB,C.dEy,C.dEG,C.dEx,C.dEH,C.dEI,C.dEw,C.dEJ,C.dEv,C.dEK,C.dEu,C.dEL,C.dEm,C.dEn,C.dEt,C.dEM,C.dEr,C.dEN,C.dEq,C.dEC,C.dEp,C.dED,C.dEl,C.dEE,C.dEF,C.dF6,C.dF7,C.dEW,C.dEX,C.dEY,C.dEZ,C.dF_,C.dF0,C.dF1,C.dFd,C.dF4,C.fql,C.d4V,C.d4T,C.d4U,C.d4W,C.d5z,C.d5o,C.d5l,C.d4Y,C.d5p,C.d53,C.d54,C.d56,C.d5n,C.d52,C.d58,C.d5w,C.d5i,C.d5h,C.d5j,C.d5k,C.d5d,C.d5f,C.d5g,C.d59,C.d5s,C.d5v,C.d5_,C.d50,C.d7k,C.d7j,C.d7i,C.d7h,C.d7o,C.d7g,C.d7p,C.d5P,C.d5Q,C.d5R,C.d5U,C.d5N,C.d5M,C.cEv,C.cXV,C.cY7,C.cY6,C.cYm,C.cY5,C.cYn,C.cY4,C.cY3,C.cYp,C.cY2,C.cYf,C.cYe,C.cYw,C.dT7,C.dT6,C.dT9,C.dTa,C.dTb,C.dT5,C.dTd,C.dTc,C.dSw,C.dSx,C.dSz,C.dS2,C.dSg,C.dSf,C.dSi,C.dSs,C.dSl,C.dSk,C.dSm,C.dSj,C.dSn,C.dSo,C.dSr,C.dRR,C.dSu,C.dRV,C.dRY,C.dS_,C.dSA,C.dS5,C.dS3,C.dS7,C.dS8,C.dS4,C.dS9,C.dSd,C.dSJ,C.dSK,C.dSC,C.dSF,C.dSG,C.dSH,C.dSM,C.dSD,C.dS0,C.d5Y,C.d5X,C.d61,C.d6b,C.d62,C.eKw,C.dmb,C.dm8,C.dm9,C.dmj,C.dmi,C.dmh,C.dmr,C.dmg,C.dms,C.dmf,C.dmt,C.dme,C.dmu,C.dmd,C.dmc,C.dmn,C.dmx,C.dmG,C.dSW,C.dT_,C.dT0,C.dSS,C.dST,C.dSU,C.dSZ,C.dT2,C.dT1,C.dSN,C.dSO,C.dSP,C.dSQ,C.dSR,C.dEe,C.fGk,C.cfa,C.cYI,C.cYH,C.cYL,C.cYE,C.cYG,C.cwh,C.cwn,C.cwo,C.cwm,C.cwq,C.cwl,C.cwi,C.cwj,C.cwu,C.f85,C.f86,C.eHH,C.eHy,C.eHz,C.eHA,C.eHC,C.eHD,C.eHG,C.eHt,C.eHw,C.eHI,C.eHu,C.eHL,C.eHM,C.eHN,C.eHO,C.eHK,C.eHo,C.eHp,C.eHq,C.eHs,C.eHr,C.eI6,C.eI7,C.eHQ,C.eHR,C.eHY,C.eHZ,C.eI_,C.eHU,C.eHV,C.eId,C.eIc,C.eIe,C.eIb,C.eHP,C.eHT,C.eI9,C.eI8,C.eI3,C.eI4,C.eI2,C.eI1])
u(A.ag,[C.anH,C.Sc,C.YL,C.YP,C.YN,C.Yl,C.aoO,C.aoI,C.Zo,C.aoM,C.ZJ,C.ZK,C.a5F,C.Yn,C.Ym,C.XV,C.a0u,C.Fe,C.awo,C.arG,C.arA,C.arF,C.NH])
u(A.ah,[C.aBX,C.bdu,C.az0,C.bdP,C.az1,C.bb2,C.aCx,C.aCu,C.aAW,C.aCw,C.aCv,C.biI,C.aKs,C.axM,C.axL,C.awv,C.buP,C.aMD,C.aME,C.aE1,C.bk4,C.aE0,C.bwA])
u(A.ki,[C.dER,C.dET,C.dEO,C.dFc,C.fsq,C.bMQ,C.d5y,C.d5x,C.d5e,C.d5t,C.d5u,C.d5V,C.dSp,C.dSa,C.dSL,C.d6a,C.d69,C.d67,C.d6c,C.d6f,C.d6g,C.d60,C.d64,C.d66,C.d6j,C.c7u,C.c7C,C.c7H,C.dEf,C.fGm,C.fGl,C.f82,C.f83,C.eHE,C.eIa,C.cvJ,C.ffF,C.fbo,C.fsw,C.fpb,C.fst,C.fca,C.fc9,C.fgl])
t(C.bio,C.aKs)
u(A.m6,[C.aaW,C.aIO,C.Hg,C.ak3,C.cvK,C.cvL])
t(C.buN,C.aMD)
t(C.buO,C.aME)
t(C.aE2,C.bwA)
t(C.b7J,A.b7x)
t(C.buQ,A.a5k)
t(C.b7I,C.buQ)
w(C.aKs,A.eR)
w(C.aMD,A.c9)
w(C.aME,A.c9)
v(C.bwA,A.ez)
v(C.buQ,A.j0)})()
A.jW(b.typeUniverse,JSON.parse('{"aXM":{"au":[],"r":[]},"b9S":{"aB":[]},"anH":{"ag":[],"r":[]},"aBX":{"ah":["anH"]},"Sc":{"ag":[],"r":[]},"ak2":{"au":[],"r":[]},"aTz":{"au":[],"r":[]},"bdu":{"ah":["Sc"]},"YL":{"ag":[],"r":[]},"YP":{"ag":[],"r":[]},"YN":{"ag":[],"r":[]},"Yl":{"ag":[],"r":[]},"az0":{"ah":["YL"]},"bdP":{"ah":["YP"]},"az1":{"ah":["YN"]},"Y3":{"au":[],"r":[]},"bb4":{"aB":[]},"baW":{"aB":[]},"bb2":{"ah":["Yl"]},"aG0":{"aB":[]},"bgi":{"aB":[]},"b9g":{"au":[],"r":[]},"aoO":{"ag":[],"r":[]},"aoI":{"ag":[],"r":[]},"Zo":{"ag":[],"r":[]},"acD":{"au":[],"r":[]},"aCx":{"ah":["aoO"]},"aCu":{"ah":["aoI"]},"bdx":{"au":[],"r":[]},"bdA":{"aB":[]},"bhf":{"au":[],"r":[]},"bcE":{"aB":[]},"buX":{"au":[],"r":[]},"bkB":{"au":[],"r":[]},"aAW":{"ah":["Zo"]},"acC":{"au":[],"r":[]},"bhe":{"au":[],"r":[]},"acB":{"au":[],"r":[]},"bhd":{"au":[],"r":[]},"aAX":{"au":[],"r":[]},"aH8":{"au":[],"r":[]},"Jv":{"au":[],"r":[]},"aoM":{"ag":[],"r":[]},"ZJ":{"ag":[],"r":[]},"ZK":{"ag":[],"r":[]},"aCw":{"ah":["aoM"]},"bdy":{"au":[],"r":[]},"abT":{"au":[],"r":[]},"bdw":{"au":[],"r":[]},"bdB":{"au":[],"r":[]},"aCv":{"ah":["ZJ"]},"biI":{"ah":["ZK"]},"aXK":{"au":[],"r":[]},"a5F":{"ag":[],"r":[]},"bio":{"ah":["a5F"]},"bin":{"aB":[]},"arH":{"au":[],"r":[]},"Yn":{"ag":[],"r":[]},"Ym":{"ag":[],"r":[]},"XV":{"ag":[],"r":[]},"a0u":{"ag":[],"r":[]},"axM":{"ah":["Yn"]},"axL":{"ah":["Ym"]},"awv":{"ah":["XV"]},"buP":{"ah":["a0u"]},"Fe":{"ag":[],"r":[]},"awo":{"ag":[],"r":[]},"buN":{"ah":["Fe"]},"buO":{"ah":["awo"]},"buM":{"aB":[]},"arG":{"ag":[],"r":[]},"aE1":{"ah":["arG"]},"acY":{"au":[],"r":[]},"arA":{"ag":[],"r":[]},"arF":{"ag":[],"r":[]},"bk4":{"ah":["arA"]},"aE0":{"ah":["arF"]},"NH":{"ag":[],"r":[]},"aE2":{"ah":["NH"],"ez":[]},"b7I":{"j0":[],"fe":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aQl"),Q:w("qS"),n:w("bk<n,n>"),c5:w("aSj"),dY:w("aSk"),d:w("eD<n?>"),e:w("Hf"),B:w("n8"),P:w("hV"),k:w("kA"),x:w("az<~>"),f5:w("O<a2t>"),V:w("O<ac>"),t:w("O<qS>"),O:w("O<w>"),ac:w("O<eD<n?>>"),I:w("O<n8>"),u:w("O<hV>"),_:w("O<kA>"),cl:w("O<az<ai<a3<n,@>>>>"),R:w("O<na>"),cq:w("O<ai<+(N,N)>>"),ez:w("O<a3<n,aC>>"),gE:w("O<a3<n,n>>"),c7:w("O<a3<n,@>>"),fD:w("O<mo>"),bp:w("O<ob>"),g:w("O<u>"),v:w("O<hn>"),L:w("O<+(n,n)>"),G:w("O<+(N,N)>"),bF:w("O<+count,id,name(H,n,n)>"),A:w("O<cQ>"),s:w("O<n>"),aS:w("O<iP>"),p:w("O<r>"),C:w("O<fe>"),D:w("O<lh>"),fp:w("O<Jz>"),M:w("O<JH>"),gZ:w("O<aG5>"),Y:w("O<aec>"),E:w("O<aI6>"),F:w("O<N>"),dC:w("O<H>"),dS:w("O<aB?>"),d4:w("O<n?>"),J:w("cs<ah<ag>>"),b:w("ai<n8>"),do:w("ai<hV>"),r:w("ai<kA>"),U:w("ai<a3<n,@>>"),gk:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),h:w("ai<n>"),c:w("ai<lh>"),j:w("ai<@>"),fK:w("bv<n,n>"),d2:w("bv<n,ai<a3<n,@>>>"),a:w("a3<n,@>"),f:w("a3<@,@>"),gv:w("K<n,Hh>"),w:w("iz"),g2:w("rc"),bV:w("anA"),fL:w("cq"),K:w("aC"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(N,ai<hV>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),e7:w("bo<N>"),gc:w("dD"),b4:w("cx<H>"),W:w("kf<n>"),l:w("r"),cM:w("fe"),i:w("lh"),cc:w("Fq"),bw:w("acB<n?>"),cy:w("JJ"),q:w("mX"),y:w("R"),gR:w("N"),z:w("@"),S:w("H"),eK:w("ai<kA>?"),m:w("aoL?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),X:w("+qrPayload,token,usesRemaining(n,n,H)?"),gF:w("+members,trees,viewOnly(H,H,R)?"),Z:w("pP?"),T:w("n?"),aD:w("dD?"),o:w("lh?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aWT=new A.bp(B.hd,B.bE,B.hd,B.bE)
D.a9D=new A.bp(B.hd,B.jH,B.hd,B.jH)
D.aX4=new A.bp(B.ii,B.bE,B.bE,B.bE)
D.aX8=new A.ay(B.d_,1.4,B.q,-1)
D.aXi=new A.ay(B.ad,1,B.q,-1)
D.aYI=new A.aY(0,1/0,64,1/0)
D.aYM=new A.aY(0,84,0,1/0)
D.ax9=w([B.lF,B.qN,B.c],x.O)
D.bTT=new A.a8(B.ax,B.aC,B.x,D.ax9,null,null)
D.aZw=new A.o(null,null,null,null,null,D.bTT,B.n)
D.cYy=w([B.aV,B.bW],x.O)
D.bW_=new A.a8(B.b0,B.b5,B.x,D.cYy,null,null)
D.aZQ=new A.o(null,null,null,null,null,D.bW_,B.n)
D.b50=new A.fj(null,null,null,null,null,E.jO,null,null,null,null)
D.aaW=new A.cr(B.A,null,null,D.b50,null)
D.kd=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eYR=new A.G(!0,D.kd,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgU=new A.x("No books on the shelf yet.",null,D.eYR,null,null,null,null,null,null,null,null,null)
D.e5q=new A.C(B.nV,D.fgU,null)
D.b3v=new A.cr(B.A,null,null,D.e5q,null)
D.b4o=new A.cr(B.A,null,null,Z.Vs,null)
D.b6q=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b6T=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.ac9=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b9x=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b9P=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.ads=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bdB=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.be0=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.Eu=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.bfB=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bhY=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.af7=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.fbs=new A.x("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bnv=new A.eD(null,D.fbs,B.eX,null,x.d)
D.fk6=new A.x("None",null,null,null,null,null,null,null,null,null,null,null)
D.bnx=new A.eD(null,D.fk6,B.eX,null,x.d)
D.bo4=new A.b9(38e5)
D.boP=new A.ib(0,10,0,10)
D.boZ=new A.Q(0,1,0,0)
D.bp8=new A.ib(0,4,0,4)
D.bpq=new A.Q(10,10,14,10)
D.bpC=new A.ib(10,4,10,4)
D.bpK=new A.ib(10,8,10,8)
D.bpL=new A.Q(10,8,8,8)
D.bqa=new A.Q(12,6,12,2)
D.bqr=new A.Q(14,10,6,6)
D.bqs=new A.Q(14,12,14,0)
D.bqw=new A.Q(14,12,14,8)
D.bqz=new A.Q(14,12,8,14)
D.bqC=new A.ib(14,14,14,14)
D.brg=new A.Q(16,2,16,10)
D.brq=new A.Q(16,6,16,30)
D.brs=new A.Q(16,6,16,8)
D.ahw=new A.Q(18,16,18,8)
D.bs2=new A.Q(18,20,18,22)
D.ahA=new A.Q(18,24,18,24)
D.bs8=new A.Q(18,30,18,30)
D.bsq=new A.Q(20,10,12,20)
D.bsE=new A.Q(20,18,16,18)
D.bsG=new A.Q(20,18,20,6)
D.btu=new A.Q(24,32,24,28)
D.btv=new A.Q(24,36,24,32)
D.btz=new A.Q(26,26,24,14)
D.btN=new A.Q(2,4,2,8)
D.btR=new A.Q(30,0,30,0)
D.bu1=new A.Q(38,22,22,22)
D.ahS=new A.Q(40,24,24,24)
D.bu3=new A.ib(40,40,40,40)
D.bu5=new A.Q(46,30,30,30)
D.ahV=new A.Q(4,0,0,8)
D.bux=new A.Q(56,40,40,40)
D.buB=new A.Q(1.25,1.25,1.25,1.25)
D.buC=new A.Q(60,0,60,0)
D.buF=new A.Q(6,14,6,16)
D.buS=new A.ib(7,3,7,3)
D.bvn=new A.Q(5,1.5,5,1.5)
D.bvy=new A.Q(6,2.5,6,2.5)
D.fvW=new A.x("Signature",null,B.nt,null,null,null,null,null,null,null,null,null)
D.bvT=new A.bD(1,B.bh,D.fvW,null)
D.ft7=new A.x("Tell the AI what to fix",null,B.dl,null,null,null,null,null,null,null,null,null)
D.bwE=new A.bD(1,B.bh,D.ft7,null)
D.f58=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv2=new A.x("Worksheets",null,D.f58,null,null,null,null,null,null,null,null,null)
D.f5g=new A.G(!0,E.abG,null,null,null,null,13,B.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftY=new A.x("Track your project spending",null,D.f5g,null,null,null,null,null,null,null,null,null)
D.cQL=w([D.fv2,B.at,D.ftY],x.p)
D.bkP=new A.fq(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cQL,null)
D.bwJ=new A.bD(1,B.bh,D.bkP,null)
D.f0q=new A.G(!0,E.jO,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faF=new A.x("FAMILY LIBRARY",null,D.f0q,null,null,null,null,null,null,null,null,null)
D.bx_=new A.bD(1,B.bh,D.faF,null)
D.Mn=new C.Hf("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.Zh=new C.Hg(0,"male")
D.aiN=new C.Hg(1,"female")
D.xL=new C.Hg(2,"unknown")
D.tE=new C.ak3(0,"owner")
D.Mo=new C.ak3(1,"editor")
D.kl=new C.ak3(2,"viewer")
D.ajz=new A.a0(61199,"MaterialIcons",!1)
D.bAZ=new A.a0(61504,"MaterialIcons",!1)
D.bB_=new A.a0(61505,"MaterialIcons",!1)
D.bB1=new A.a0(61587,"MaterialIcons",!1)
D.bB8=new A.a0(61890,"MaterialIcons",!1)
D.bC1=new A.a0(63034,"MaterialIcons",!0)
D.bCR=new A.a0(63429,"MaterialIcons",!1)
D.alQ=new A.a0(984520,"MaterialIcons",!1)
D.bBy=new A.a0(62776,"MaterialIcons",!1)
D.bFb=new A.ae(D.bBy,26,B.aZ,null,null,null)
D.bzX=new A.a0(57648,"MaterialIcons",!1)
D.bFt=new A.ae(D.bzX,14,B.c,null,null,null)
D.bFK=new A.ae(B.FC,17,null,null,null,null)
D.bGf=new A.ae(E.a_a,null,null,null,null,null)
D.bGi=new A.ae(B.jg,18,E.jO,null,null,null)
D.ZX=new A.a0(62044,"MaterialIcons",!1)
D.bGo=new A.ae(D.ZX,null,B.aV,null,null,null)
D.bHd=new A.ae(B.dW,16,null,null,null,null)
D.bHk=new A.ae(D.ZX,32,B.aV,null,null,null)
D.bHD=new A.ae(E.ajA,18,B.d_,null,null,null)
D.bIH=new A.ae(B.FM,22,B.ay,null,null,null)
D.bIT=new A.ae(B.dW,22,B.aZ,null,null,null)
D.bJ3=new A.ae(Q.a_1,22,B.c,null,null,null)
D.bJ8=new A.ae(B.tO,52,B.c,null,null,null)
D.bJi=new A.ae(B.FM,30,B.ay,null,null,null)
D.ams=new A.ae(B.tX,22,B.c,null,null,null)
D.bJK=new A.ae(B.dW,17,null,null,null,null)
D.bK2=new A.ae(B.vD,26,B.d_,null,null,null)
D.bKM=new A.ae(B.a_m,16,null,null,null,null)
D.bLv=new A.ae(B.tO,24,B.c,null,null,null)
D.bLA=new A.ae(B.MQ,20,B.ri,null,null,null)
D.bLF=new A.ae(B.FA,null,B.bW,null,null,null)
D.bLM=new A.ae(B.jg,18,B.c,null,null,null)
D.bMn=new A.ae(B.cB,22,B.ad,null,null,null)
D.bNc=new A.ae(B.e5,16,B.ad,null,null,null)
D.bNo=new A.ae(D.ZX,20,B.aV,null,null,null)
D.amT=new A.ae(B.hz,20,null,null,null,null)
D.bNT=new A.ae(B.cB,18,D.kd,null,null,null)
D.bOa=new A.ae(B.y5,28,B.c,null,null,null)
D.bOi=new A.ae(B.MG,null,B.fZ,null,null,null)
D.bOC=new A.ae(B.y5,24,B.c,null,null,null)
D.bP3=new A.ae(B.tO,null,B.aV,null,null,null)
D.bP4=new A.ae(B.jA,20,B.d_,null,null,null)
D.bPo=new A.ae(B.FC,16,null,null,null,null)
D.bQV=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ey,!0,null,null,null,null)
D.d4G=w([B.bt,B.aV,B.f8,B.aZ],x.O)
D.bSl=new A.a8(B.ax,B.aC,B.x,D.d4G,null,null)
D.bew=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bjT=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cNF=w([D.bew,D.bjT],x.O)
D.bSw=new A.a8(B.b0,B.b5,B.x,D.cNF,null,null)
D.d_i=w([B.eY,B.fv,B.f8],x.O)
D.bSA=new A.a8(B.ax,B.aC,B.x,D.d_i,null,null)
D.ae4=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b6U=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cPC=w([D.ae4,D.b6U],x.O)
D.bT8=new A.a8(B.b0,B.b5,B.x,D.cPC,null,null)
D.ba0=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.awy=w([D.ba0,D.ae4],x.O)
D.bTs=new A.a8(B.ax,B.aC,B.x,D.awy,null,null)
D.ad0=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.bc5=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cZt=w([D.ad0,D.bc5],x.O)
D.bU3=new A.a8(B.a3,B.a7,B.x,D.cZt,null,null)
D.daL=w([B.bI,B.mX],x.O)
D.bU5=new A.a8(B.b0,B.b5,B.x,D.daL,null,null)
D.bes=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.dbC=w([D.bes,D.kd,D.kd,Aj.WL],x.O)
D.ddN=w([0,0.07,0.9,1],x.F)
D.bUB=new A.a8(B.a3,B.a7,B.x,D.dbC,D.ddN,null)
D.bUM=new A.a8(B.ax,B.aC,B.x,B.Qn,null,null)
D.dam=w([B.aZ,B.aV,B.bW],x.O)
D.bVL=new A.a8(B.ax,B.aC,B.x,D.dam,null,null)
D.cgd=w([B.bt,B.aZ,B.eY],x.O)
D.cgk=w([B.bu,B.aE,B.jq],x.O)
D.cgm=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bd7=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cmq=w([D.bd7,E.adL],x.O)
D.e1e=new A.u(1,2)
D.eKp=new A.cQ(B.aX,D.e1e,3)
D.atF=w([D.eKp],x.A)
D.ctF=w([B.h1,B.cc,B.f7],x.O)
D.cwi=w([B.bJ,B.bv,B.bm],x.O)
D.bxs=new C.u4("classic","Classic leather","Gold-edged brown leather",D.awy,E.jO,E.jO,"\u2766",B.L,!0,!1,!1,!1)
D.b6e=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.biO=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cSm=w([D.b6e,D.biO],x.O)
D.adP=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bxn=new C.u4("ornate","Ornate gold","Double gold border and flourishes",D.cSm,D.adP,D.adP,"\u2726",B.L,!0,!0,!0,!1)
D.b9G=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bfd=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cKG=w([D.b9G,D.bfd],x.O)
D.bxm=new C.u4("parchment","Parchment","Old paper with dark ink",D.cKG,D.Eu,G.ir,"\u2767",B.L,!0,!1,!1,!0)
D.abn=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bhg=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.d8L=w([D.abn,D.bhg],x.O)
D.bcI=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bgD=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bxp=new C.u4("minimal","Clean paper","Plain and elegant, like a printed book",D.d8L,D.bcI,D.bgD,"",B.L,!0,!0,!1,!0)
D.bxr=new C.u4("midnight","Midnight","Deep blue with silver stars",L.awR,B.cq,B.bM,"\u2727",B.L,!0,!0,!1,!1)
D.bxl=new C.u4("emerald","Emerald library","Green cloth, title on the left",A_.au3,E.jO,B.h2,"\u25c6",B.bg,!0,!1,!1,!1)
D.bhF=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.d7b=w([B.er,D.bhF],x.O)
D.bdK=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.beQ=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bxq=new C.u4("rose","Rose vintage","Burgundy with rose-gold lettering",D.d7b,D.bdK,D.beQ,"\u2740",B.L,!0,!1,!0,!1)
D.dbf=w([B.cE,P.mY],x.O)
D.bxo=new C.u4("modern","Modern","Dark, bold, left-aligned",D.dbf,B.aS,B.c,"",B.bg,!1,!0,!1,!1)
D.a1f=w([D.bxs,D.bxn,D.bxm,D.bxp,D.bxr,D.bxl,D.bxq,D.bxo],A.ax("O<u4>"))
D.cKc=w([B.bW,B.bk],x.O)
D.bei=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cKS=w([D.abn,D.bei],x.O)
D.b9C=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cMq=w([D.b9C,B.db],x.O)
D.cNV=w([B.b8,B.iM,B.or],x.O)
D.cOh=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b6Q=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.bbq=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.ddJ=w([D.ad0,D.b6Q,D.bbq],x.O)
D.bxt=new C.u5("leather","Leather",D.ddJ,"vintage")
D.cVh=w([B.dr,B.KH,A3.VY],x.O)
D.bxA=new C.u5("midnight","Midnight",D.cVh,"starry")
D.cNW=w([B.f6,B.e3,B.l9],x.O)
D.bxz=new C.u5("forest","Forest",D.cNW,"story")
D.dfB=w([B.eN,B.er,B.kf],x.O)
D.bxw=new C.u5("burgundy","Burgundy",D.dfB,"royal")
D.cvT=w([B.aE,B.pp,B.nC],x.O)
D.bxx=new C.u5("royal","Royal",D.cvT,"royal")
D.cQe=w([B.bv,B.cE,P.mY],x.O)
D.bxu=new C.u5("charcoal","Charcoal",D.cQe,"geo")
D.ddR=w([B.ci,B.dP,B.x2],x.O)
D.bxy=new C.u5("sunset","Sunset",D.ddR,"sunset")
D.dev=w([B.iM,B.Ev,B.W1],x.O)
D.bxv=new C.u5("ocean","Ocean",D.dev,"band")
D.yB=w([D.bxt,D.bxA,D.bxz,D.bxw,D.bxx,D.bxu,D.bxy,D.bxv],A.ax("O<u5>"))
D.cQD=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cRb=w([B.ak,B.aK,B.M],x.O)
D.cSr=w([B.er,B.e3,B.dr,B.fw,B.x6,B.d_,B.jR,B.eu,B.d8],x.O)
D.cSs=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eKq=new A.cQ(B.dp,B.dE,8)
D.cSB=w([D.eKq],x.A)
D.cTE=w([B.bV,B.dP,B.kI],x.O)
D.cU5=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cVd=w([B.bV,B.hf],x.O)
D.cXd=w([B.aM,B.x3,B.wV],x.O)
D.cY4=w([B.bK,B.c7,B.dv,B.aM],x.O)
D.cYz=w([B.j6,B.ci,B.t8],x.O)
D.cZ2=w([B.eY,B.d_],x.O)
D.cZy=w([B.cs,B.fx,B.hu],x.O)
D.cZJ=w([B.aS,B.bk,B.dr],x.O)
D.d_f=w([B.es,B.cZ,B.e3],x.O)
D.d_w=w([B.dS,B.dr,B.KH],x.O)
D.d0M=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a28=w(["leather","linen","plain","stars","rays"],x.s)
D.bES=new A.a0(985219,"MaterialIcons",!1)
D.bEq=new A.a0(983781,"MaterialIcons",!1)
D.awg=w([B.ajZ,B.i_,B.lM,B.i0,D.bES,B.FW,B.pN,D.bEq,L.alD,B.y7,B.pQ,B.mq],A.ax("O<a0>"))
D.a2d=w(["double","single","corners","none"],x.s)
D.d3q=w([B.dA,B.bn,B.eu],x.O)
D.d3D=w([],x.t)
D.C2=w([],x.u)
D.d5P=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.d85=w([B.aH,B.fx,B.fw],x.O)
D.d9l=w([B.cd,B.nI,B.WW],x.O)
D.d9A=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dsg=new C.lx("construction","Construction","Jobsite & builds",B.xY)
D.dsn=new C.lx("house","Home Build","Houses & rooms",B.vy)
D.dsd=new C.lx("grocery","Grocery","Store & pantry",B.a_S)
D.dsc=new C.lx("calculator","Calculations","Math & estimates",B.N0)
D.dsl=new C.lx("lumber","Materials","Lumber & supplies",B.Nh)
D.ds9=new C.lx("kitchen","Kitchen","Remodel & meals",A9.akN)
D.bEn=new A.a0(983756,"MaterialIcons",!1)
D.dse=new C.lx("landscape","Landscaping","Yard & garden",D.bEn)
D.ds8=new C.lx("plumbing","Plumbing","Pipes & water",B.pY)
D.dso=new C.lx("electrical","Electrical","Wiring & power",B.h7)
D.ds6=new C.lx("store","Retail Shop","Daily business",B.kQ)
D.ds7=new C.lx("paint_remodel","Paint & Remodel","Colors & walls",Aa.a_s)
D.bDN=new A.a0(983311,"MaterialIcons",!1)
D.dsk=new C.lx("roofing","Roofing","Roofs & exteriors",D.bDN)
D.bEA=new A.a0(983986,"MaterialIcons",!1)
D.ds5=new C.lx("warehouse","Warehouse","Storage & stock",D.bEA)
D.dsi=new C.lx("vehicles","Vehicles","Fleet & transport",B.FX)
D.bBA=new A.a0(62785,"MaterialIcons",!1)
D.dsb=new C.lx("farm","Farm","Crops & livestock",D.bBA)
D.dsa=new C.lx("restaurant","Restaurant","Food & catering",B.tV)
D.dsh=new C.lx("tools","Tools","Workshop gear",B.FT)
D.dsm=new C.lx("wallet","Cash & Wallet","Quick spending",B.jA)
D.bCM=new A.a0(63395,"MaterialIcons",!1)
D.dsj=new C.lx("concrete","Concrete","Foundation work",D.bCM)
D.dsf=new C.lx("blueprint","Blueprint","Plans & design",Af.ak4)
D.a2E=w([D.dsg,D.dsn,D.dsd,D.dsc,D.dsl,D.ds9,D.dse,D.ds8,D.dso,D.ds6,D.ds7,D.dsk,D.ds5,D.dsi,D.dsb,D.dsa,D.dsh,D.dsm,D.dsj,D.dsf],A.ax("O<lx>"))
D.da3=w([B.br,B.bn],x.O)
D.daM=w([B.i7,B.nG,B.dH],x.O)
D.a2M=w(["top","middle","bottom"],x.s)
D.dd7=w([B.cr,B.bk,B.dr],x.O)
D.ddE=w([B.b1,B.cZ,B.e3],x.O)
D.dfw=w([B.bJ,B.ak],x.O)
D.dfx=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dZR={top:0,middle:1,bottom:2}
D.diI=new A.bk(D.dZR,["Top","Middle","Bottom"],x.n)
D.dZu={double:0,single:1,corners:2,none:3}
D.diN=new A.bk(D.dZu,["Double line","One line","Corners","None"],x.n)
D.e_E={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dkc=new A.bk(D.e_E,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dko=new A.bk(B.i3,[],A.ax("bk<H,+(n,n)>"))
D.dZJ={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Cd=new A.bk(D.dZJ,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bk<n,H>"))
D.dmQ=new F.MA(32,null)
D.dmR=new F.MA(40,null)
D.dmS=new F.MA(46,null)
D.aFu=new C.arF(null)
D.e2c=new A.u(8,14)
D.fhw=new A.x("Write a new book",null,B.i5,null,B.L,null,null,null,null,null,null,null)
D.e4T=new A.C(B.ld,D.fhw,null)
D.am3=new A.ae(B.hy,18,B.c,null,null,null)
D.fb0=new A.x("Add",null,B.m1,null,null,null,null,null,null,null,null,null)
D.cYj=w([D.am3,B.qd,D.fb0],x.p)
D.eIm=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cYj,null)
D.e5d=new A.C(B.nU,D.eIm,null)
D.e5e=new A.C(E.agj,Z.Vs,null)
D.f53=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe0=new A.x("New Project",null,D.f53,null,null,null,null,null,null,null,null,null)
D.d17=w([D.am3,B.ab,D.fe0],x.p)
D.eIp=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d17,null)
D.e5p=new A.C(B.ix,D.eIp,null)
D.fgi=new A.x("Choose your header",null,U.rE,null,null,null,null,null,null,null,null,null)
D.e5K=new A.C(B.hw,D.fgi,null)
D.b5f=new A.fj(2.2,null,null,null,null,B.d_,null,null,null,null)
D.eN2=new A.a7(22,22,D.b5f,null)
D.b3r=new A.cr(B.A,null,null,D.eN2,null)
D.e5P=new A.C(B.XR,D.b3r,null)
D.bqL=new A.Q(14,2,14,6)
D.ftH=new A.x("The top of your book. Tap a design to see it.",null,T.IL,null,null,null,null,null,null,null,null,null)
D.e5Q=new A.C(D.bqL,D.ftH,null)
D.e7n=new A.iN(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.e7q=new A.iN(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aGJ=new A.iN(1,0.9607843137254902,0.48627450980392156,0)
D.HY=new A.iN(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.z8=new A.iN(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.e7w=new A.iN(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fPX=new C.bgi(null)
D.blV=new A.mf(D.fPX,null,B.au,null,null)
D.aKn=new A.cL(0,0,0,0,null,null,D.blV,null)
D.euL=new A.y(-42,42)
D.eD7=new A.cI([0,0,1,1])
D.aLF=new A.a9(0,0,520,160)
D.aLS=new A.b7(B.rS,B.Y)
D.ftf=new A.x("Let the AI write it from your tree",null,B.kx,null,B.L,null,null,null,null,null,null,null)
D.by6=new A.dq(1,B.cn,D.ftf,null)
D.cVc=w([E.a0k,B.ab,D.by6],x.p)
D.eI4=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cVc,null)
D.faG=new A.x("Save member",null,B.cj,null,null,null,null,null,null,null,null,null)
D.d8m=w([D.amT,B.ab,D.faG],x.p)
D.eIc=new A.cn(B.aO,B.bb,B.j,B.m,null,B.p,null,0,D.d8m,null)
D.bIY=new A.ae(B.hL,14,B.aZ,null,null,null)
D.f_4=new A.G(!0,B.aZ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feq=new A.x("Cashier",null,D.f_4,null,null,null,null,null,null,null,null,null)
D.d1D=w([D.bIY,B.bp,D.feq],x.p)
D.eIe=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d1D,null)
D.faH=new A.x("Transfer & settings",null,B.dl,null,null,null,null,null,null,null,null,null)
D.bwv=new A.bD(1,B.bh,D.faH,null)
D.cNo=w([D.ams,B.av,D.bwv],x.p)
D.eIf=new A.cn(B.aO,B.e,B.j,B.m,null,B.p,null,0,D.cNo,null)
D.eLN=new A.at(16,40)
D.eLS=new A.at(22,64)
D.eLZ=new A.at(280,88)
D.eMJ=new A.a7(30,null,null,null)
D.eO0=new A.hK(2,12,12,1.05,null)
D.fe6=new A.x("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eOJ=new A.b1(D.fe6,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fel=new A.x("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aNI=new A.b1(D.fel,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fmn=new A.x("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ePc=new A.b1(D.fmn,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fwv=new A.x("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.ePh=new A.b1(D.fwv,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fgg=new A.x("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.ePo=new A.b1(D.fgg,null,null,null,null,null,null,null,null,null,null,null,null,B.fH,!1,null,null,null,B.r,null)
D.ftU=new A.x("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aNM=new A.b1(D.ftU,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fbh=new A.x("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.ePO=new A.b1(D.fbh,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fxa=new A.x("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eQx=new A.b1(D.fxa,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fsd=new A.x("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eQW=new A.b1(D.fsd,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fwz=new A.x("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eQZ=new A.b1(D.fwz,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fnU=new A.x("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eR0=new A.b1(D.fnU,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fi6=new A.x("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eR1=new A.b1(D.fi6,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fi7=new A.x("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eS1=new A.b1(D.fi7,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fe8=new A.x("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eSj=new A.b1(D.fe8,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ffY=new A.x("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eSC=new A.b1(D.ffY,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fnp=new A.x("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eSS=new A.b1(D.fnp,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fiV=new A.x("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eST=new A.b1(D.fiV,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.eW3=new A.G(!0,D.kd,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWt=new A.G(!0,D.kd,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eX6=new A.rv(!0,B.rr,null,null,null,null,B.ds,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXn=new A.G(!0,D.kd,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXV=new A.G(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a6Y=new A.rv(!0,B.RJ,null,null,null,null,B.ds,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYU=new A.G(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZi=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_S=new A.G(!0,null,null,null,null,null,8,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_W=new A.G(!0,G.ir,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1a=new A.G(!0,B.M,null,null,null,null,13,B.a5,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1T=new A.G(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2B=new A.G(!0,B.bW,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2F=new A.G(!0,B.bI,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f31=new A.G(!0,D.Eu,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3a=new A.G(!0,B.aZ,null,null,null,null,13,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f48=new A.G(!0,B.d_,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4C=new A.G(!0,B.bW,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f51=new A.G(!0,B.aZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6s=new A.G(!0,B.ak,null,null,null,null,11.5,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6A=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPW=new A.G(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7t=new A.G(!0,B.ak,null,null,null,null,12,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8f=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8C=new A.G(!0,G.ir,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8K=new A.G(!0,G.ir,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9v=new A.x("Themes",null,B.p1,null,null,null,null,null,null,null,null,null)
D.fa7=new A.x("Add Item",null,B.cj,null,null,null,null,null,null,null,null,null)
D.f_B=new A.G(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faw=new A.x("Debt receipt",null,D.f_B,null,B.L,null,null,null,null,null,null,null)
D.aPR=new A.G(!0,B.ak,null,null,null,null,11,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faO=new A.x("Person who owes",null,D.aPR,null,null,null,null,null,null,null,null,null)
D.fbK=new A.x("Notes",null,B.a76,null,null,null,null,null,null,null,null,null)
D.fc9=new A.x("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.eZA=new A.G(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcd=new A.x("Share",null,D.eZA,null,null,null,null,null,null,null,null,null)
D.fd8=new A.x("Move your family trees",null,D.aPW,null,null,null,null,null,null,null,null,null)
D.fdJ=new A.x("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fek=new A.x("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.ffy=new A.x("Remove this book?",null,B.ho,null,null,null,null,null,null,null,null,null)
D.aQm=new A.x("Download",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fgF=new A.x("What should the AI do?",null,B.dl,null,null,null,null,null,null,null,null,null)
D.fi2=new A.x("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fj9=new A.x("Ribbon bookmark",null,B.iG,null,null,null,null,null,null,null,null,null)
D.f6m=new A.G(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjE=new A.x("NGMY.ORG",null,D.f6m,null,B.L,null,null,null,null,null,null,null)
D.fkU=new A.x("Scan family tree QR",null,B.cy,null,null,null,null,null,null,null,null,null)
D.f2U=new A.G(!0,B.c,null,null,null,null,13,B.a5,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flD=new A.x("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.f2U,null,B.L,null,null,null,null,null,null,null)
D.fmP=new A.x("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fmW=new A.x("Thumbnail",null,B.p1,null,null,null,null,null,null,null,null,null)
D.fnv=new A.x("Save the cover",null,B.cy,null,null,null,null,null,null,null,null,null)
D.fnV=new A.x("Your photos",null,B.p1,null,null,null,null,null,null,null,null,null)
D.fo9=new A.x("Create Project",null,B.cj,null,null,null,null,null,null,null,null,null)
D.foF=new A.x("Design your cover",null,U.rE,null,null,null,null,null,null,null,null,null)
D.foM=new A.x("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.foP=new A.x("PICTURE",null,H.mH,null,null,null,null,null,null,null,null,null)
D.fpa=new A.x("Paid",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fpc=new A.x("You can undo it right after.",null,T.Tg,null,null,null,null,null,null,null,null,null)
D.fpI=new A.x("Print",null,B.uz,null,null,null,null,null,null,null,null,null)
D.fq3=new A.x("Amount owed",null,D.aPR,null,null,null,null,null,null,null,null,null)
D.fqh=new A.x("Got it",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fqR=new A.x("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fqU=new A.x("Add to budget",null,B.cj,null,null,null,null,null,null,null,null,null)
D.frl=new A.x("Debtor signature",null,B.a76,null,null,null,null,null,null,null,null,null)
D.fru=new A.x("Change icon",null,E.aP8,null,null,null,null,null,null,null,null,null)
D.fsG=new A.x("Family tree QR",null,B.cy,null,null,null,null,null,null,null,null,null)
D.ft5=new A.x("Download",null,B.uz,null,null,null,null,null,null,null,null,null)
D.ft9=new A.x("Change",null,B.p1,null,null,null,null,null,null,null,null,null)
D.fu_=new A.x("Clear all",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fu2=new A.x("WHAT SHOULD IT CHANGE?",null,H.mH,null,null,null,null,null,null,null,null,null)
D.fuC=new A.x("COLOUR",null,H.mH,null,null,null,null,null,null,null,null,null)
D.fuO=new A.x("Do it",null,B.cy,null,null,null,null,null,null,null,null,null)
D.fuR=new A.x("Create Tree",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fvQ=new A.x("Create Family Tree",null,B.eV,null,null,null,null,null,null,null,null,null)
D.eV1=new A.G(!0,E.jO,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw5=new A.x("Write the first page myself",null,D.eV1,null,null,null,null,null,null,null,null,null)
D.fwC=new A.x("Use this header",null,B.cy,null,null,null,null,null,null,null,null,null)
D.fwI=new A.x("Create Project",null,E.aPA,null,null,null,null,null,null,null,null,null)
D.fMz=new C.aaW(1,"header")
D.a8i=new C.aaW(2,"projects")
D.fMA=new C.aaW(3,"cashier")
D.a8j=new C.aaW(4,"familyTree")
D.fXZ=new C.cvK(0,"start")
D.fY_=new C.cvL(0,"start")
D.fMR=new C.XV(null)
D.fNQ=new C.Ym(null)
D.dkl=new A.bk(B.i3,[],A.ax("bk<n,Fq>"))
D.d40=w([],x.E)
D.d41=w([],x.M)
D.fOm=new C.bdz(D.dkl,D.d40,D.d41,0,0,null,null)
D.fQB=new C.ZK(null)
D.a90=new C.aIO(0,"projects")
D.aUw=new C.aIO(1,"cashier")
D.fVQ=new C.aIO(2,"familyTree")})()};
(a=>{a["2zNUjSCUedUDopMwxJDpv5fzZpY="]=a.current})($__dart_deferred_initializers__);