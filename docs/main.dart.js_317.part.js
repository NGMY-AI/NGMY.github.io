((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A2,N,S,A3,G,F,E,O,A4,A5,A6,T,U,A7,A8,M,A9,H,Aa,Ab,V,W,X,Ac,Ad,Y,Ae,Af,Ag,Z,Ah,Ai,K,Aj,A_,A0,P,Q,L,R,C={
bCd(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bCd=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vc(null,""),$async$bCd)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.V(y.j)
t=A.n2(b1)
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
return A.b(A.qK(t,a1,B.hn,E.F_),$async$bCd)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Q2(a5)
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a1S(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCd,v)},
agr(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$agr=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vc(null,""),$async$agr)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.V(y.j)
t=A.n2(b6)
s=x.S
r=A.dd(c1,0,A.dJ(4,"count",s),A.U(c1).c)
q=F.a1F(new A.K(r,new C.fxo(),r.$ti.k("K<ak.E,n>")).aI(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fxn(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.R.ao(b7,null)+"\nAllowed values: style one of "+B.d.aI(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$agr)
case 6:l=c5
k=F.Q2(l==null?"":l)
if(k==null)throw A.V("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.anB(s,D.dkJ,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
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
return A.b(m.$1(f+B.R.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$agr)
case 10:l=c5
k=l==null?null:F.Q2(l)
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
p=A.cD(new A.bc(h,s),new C.fxp(),s.k("J.E"),p)
p=F.a1F(A.p9(p,3,A.a4(p).k("J.E")).aI(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.B(new A.cu(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a1S(s,b9),$async$agr)
case 13:b5=c5
for(s=J.a6(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.anB(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agr,v)},
hlL(d,e,f){return A.ca(null,B.w.j(0.65),!1,null,new C.fGA(e,f),d,null,!0,!0,x.g2)},
anB:function anB(d,e,f){this.a=d
this.b=e
this.c=f},
fxo:function fxo(){},
fxn:function fxn(d){this.a=d},
fxp:function fxp(){},
fGA:function fGA(d,e){this.a=d
this.b=e},
bA2(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bA2=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b5(b1,new C.fms())){u=null
w=1
break}t=B.d.d8(b1,new C.fmt())
s=$.W()
r=new A.qU()
q=A.D5(r,D.aLH)
p=A.M()
p.r=B.c.gp(0)
q.aZ(D.aLH,p)
o=A.M()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bO
o.e=B.fA
n=new C.fmy(t)
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
return A.b(r.pB().z8(520,160),$async$bA2)
case 4:w=3
return A.b(b3.hr(B.fY),$async$bA2)
case 3:b0=b3
u=b0==null?null:J.eT(B.dD.gaM(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bA2,v)},
fv4(d){return C.i_8(d)},
i_8(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fv4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bf_()
n=d.x!=null&&d.yP(null).length===0
if(d.x!=null)t=n?D.za:D.I_
else t=d.gTf()?D.I_:D.aGL
w=3
return A.b(C.bA2(d.ax),$async$fv4)
case 3:s=f
p.a=null
if(s!=null)p.a=A.amk(s)
r=A.a3Q(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aGL}else{p.c=C.wB(q,!0)
p.b=n?D.za:D.I_}r.a2s(A.fQG(new C.fv6(p,d,new C.fv7(),t,n,o),null,D.bu8,B.w6))
u=r.k0(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fv4,v)},
fBI(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fBI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fv4(d),$async$fBI)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aK(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A8.Gi(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fBI,v)},
fms:function fms(){},
fmt:function fmt(){},
fmy:function fmy(d){this.a=d},
fv7:function fv7(){},
fv6:function fv6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fv5:function fv5(){},
fH1(d,e){var w=0,v=A.j(x.H)
var $async$fH1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,B.w.j(0.55),!0,null,new C.fH5(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fH1)
case 2:return A.h(null,v)}})
return A.i($async$fH1,v)},
bCH(d,e,f,g){return C.i6C(d,e,f,g)},
i6C(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bCH=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gal(e.split(",")):e
r=B.cG.aJ(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.S(D.eTd)
w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.fGY(g,r,f),d,null,!0,!0,x.H),$async$bCH)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bCH,v)},
fH6(d,e){var w=0,v=A.j(x.H)
var $async$fH6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,null,!0,null,new C.fH9(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fH6)
case 2:return A.h(null,v)}})
return A.i($async$fH6,v)},
aXM:function aXM(d,e){this.c=d
this.a=e},
c11:function c11(){},
b9U:function b9U(d,e){this.b=d
this.a=e},
fH5:function fH5(d,e){this.a=d
this.b=e},
fH2:function fH2(d){this.a=d},
fH3:function fH3(d,e,f){this.a=d
this.b=e
this.c=f},
fH4:function fH4(d,e){this.a=d
this.b=e},
fGY:function fGY(d,e,f){this.a=d
this.b=e
this.c=f},
fGW:function fGW(d){this.a=d},
fGX:function fGX(d,e,f){this.a=d
this.b=e
this.c=f},
fH9:function fH9(d,e){this.a=d
this.b=e},
fH7:function fH7(d){this.a=d},
fH8:function fH8(d,e,f){this.a=d
this.b=e
this.c=f},
fq1(d,e){var w=0,v=A.j(x.y),u,t
var $async$fq1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1q(d),$async$fq1)
case 3:t=g
J.no(t,new C.fq2(e))
u=A.ah4(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fq1,v)},
fq2:function fq2(d){this.a=d},
anI:function anI(d,e,f){this.c=d
this.d=e
this.a=f},
aBY:function aBY(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dF8:function dF8(d,e){this.a=d
this.b=e},
dEU:function dEU(d,e){this.a=d
this.b=e},
dEX:function dEX(d,e,f){this.a=d
this.b=e
this.c=f},
dEW:function dEW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dEV:function dEV(d,e){this.a=d
this.b=e},
dEY:function dEY(d,e){this.a=d
this.b=e},
dES:function dES(){},
dET:function dET(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dER:function dER(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dEC:function dEC(d){this.a=d},
dED:function dED(d,e,f){this.a=d
this.b=e
this.c=f},
dEE:function dEE(d,e){this.a=d
this.b=e},
dEB:function dEB(d){this.a=d},
dEJ:function dEJ(d,e){this.a=d
this.b=e},
dEA:function dEA(d){this.a=d},
dEK:function dEK(d,e,f){this.a=d
this.b=e
this.c=f},
dEL:function dEL(d,e,f){this.a=d
this.b=e
this.c=f},
dEz:function dEz(d,e){this.a=d
this.b=e},
dEM:function dEM(d,e,f){this.a=d
this.b=e
this.c=f},
dEy:function dEy(d,e){this.a=d
this.b=e},
dEN:function dEN(d,e){this.a=d
this.b=e},
dEx:function dEx(d){this.a=d},
dEO:function dEO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dEv:function dEv(){},
dEp:function dEp(d){this.a=d},
dEq:function dEq(d){this.a=d},
dEw:function dEw(d,e){this.a=d
this.b=e},
dEP:function dEP(d,e){this.a=d
this.b=e},
dEu:function dEu(d){this.a=d},
dEQ:function dEQ(d){this.a=d},
dEt:function dEt(){},
dEF:function dEF(d,e){this.a=d
this.b=e},
dEs:function dEs(d){this.a=d},
dEG:function dEG(d,e,f){this.a=d
this.b=e
this.c=f},
dEr:function dEr(d,e){this.a=d
this.b=e},
dEo:function dEo(d,e){this.a=d
this.b=e},
dEH:function dEH(d){this.a=d},
dEI:function dEI(d,e,f){this.a=d
this.b=e
this.c=f},
dFb:function dFb(){},
dFc:function dFc(d,e){this.a=d
this.b=e},
dF9:function dF9(d){this.a=d},
dFa:function dFa(d){this.a=d},
dF5:function dF5(d,e){this.a=d
this.b=e},
dF6:function dF6(d){this.a=d},
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
dF2:function dF2(d,e,f){this.a=d
this.b=e
this.c=f},
dF3:function dF3(d,e,f){this.a=d
this.b=e
this.c=f},
dF4:function dF4(d,e,f){this.a=d
this.b=e
this.c=f},
dFd:function dFd(){},
dFe:function dFe(){},
dFf:function dFf(){},
dFg:function dFg(d){this.a=d},
dF7:function dF7(d,e){this.a=d
this.b=e},
hhZ(d){return B.d.dL(D.a1k,new C.fqC(d),new C.fqD())},
u5:function u5(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fqC:function fqC(d){this.a=d},
fqD:function fqD(){},
ak3:function ak3(d,e,f,g,h,i){var _=this
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
Sg:function Sg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdw:function bdw(){this.d=$
this.c=this.a=null},
d4Y:function d4Y(d,e){this.a=d
this.b=e},
d4W:function d4W(d,e){this.a=d
this.b=e},
d4X:function d4X(){},
d4Z:function d4Z(d,e){this.a=d
this.b=e},
h2N(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.n9(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
Ks(d,e){return C.hYM(d,e)},
hYM(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
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
o=A.cD(o,new C.fsG(),o.$ti.k("J.E"),x.B)
n=A.a4(o).k("a2<J.E>")
o=A.B(new A.a2(o,new C.fsH(),n),n.k("J.E"))
B.d.b0(o,new C.fsI())
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
AF(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$AF=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aA(),$async$AF)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fFG(),x.a)
r=A.B(r,r.$ti.k("ak.E"))
w=4
return A.b(t.au("String","ngmy_family_book_v1_"+s+"_"+e,B.R.ao(r,null)),$async$AF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$AF,v)},
aPJ(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aPJ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Ks(d,e),$async$aPJ)
case 2:u=h
t=J.cE(u)
s=t.bd(u,new C.fNN(f))
if(s===-1)t.ck(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.AF(d,e,u),$async$aPJ)
case 3:return A.h(null,v)}})
return A.i($async$aPJ,v)},
bAv(d,e,f){var w=0,v=A.j(x.H),u
var $async$bAv=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Ks(d,e),$async$bAv)
case 2:u=h
J.no(u,new C.fpU(f))
w=3
return A.b(C.AF(d,e,u),$async$bAv)
case 3:return A.h(null,v)}})
return A.i($async$bAv,v)},
bAK(d,e){return C.hYL(d,e)},
hYL(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bAK=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bAK)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Mq
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
if(D.Ch.ai(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a2R,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.t(D.a2i,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.t(D.a2d,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.t(D.cQT,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.Hf(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Mq
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Mq
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bAK,v)},
R5(d,e,f){return C.i68(d,e,f)},
i68(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$R5=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aA(),$async$R5)
case 7:r=h
w=8
return A.b(r.au("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.R.ao(f.ag(),null)),$async$R5)
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
return A.i($async$R5,v)},
QA(d,e){return C.hYN(d,e)},
hYN(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$QA=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$QA)
case 7:r=g
q=r.t4("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Ks(d,e),$async$QA)
case 8:if(!j.cy(g)){n=B.a.i(d.toLowerCase())
m=J.lo(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$QA)
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
return A.i($async$QA,v)},
afL(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$afL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QA(d,e),$async$afL)
case 3:s=g
r=J.a6(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.J(s,t)
w=5
return A.b(A.aA(),$async$afL)
case 5:w=4
return A.b(g.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$afL)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afL,v)},
a24(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a24=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.QA(d,e),$async$a24)
case 2:s=h
J.hD(s,f)
w=3
return A.b(A.aA(),$async$a24)
case 3:u=h
w=4
return A.b(u.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a24)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a24)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a24)
case 6:return A.h(null,v)}})
return A.i($async$a24,v)},
n9:function n9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fsG:function fsG(){},
fsH:function fsH(){},
fsI:function fsI(){},
fFG:function fFG(){},
fNN:function fNN(d){this.a=d},
fpU:function fpU(d){this.a=d},
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
bMV:function bMV(d){this.a=d},
i6r(d,e,f,g,h,i,j){return A.a5(d,!1).c8(A.e9(new C.fGe(j,i,f,e,h,g),!0,null,x.H))},
Qx(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Qx=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QA(h,g),$async$Qx)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.I(x.q).f.S(D.aNJ)
u=!1
w=1
break}w=4
return A.b(C.hlL(d,f,e),$async$Qx)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.afL(h,g),$async$Qx)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.n9(""+(q+n),l,B.a.i(m.b),new A.S(Date.now(),0,!1)))}w=6
return A.b(C.AF(h,r,p),$async$Qx)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.R5(h,r,new C.Hf("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Qx)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Qx,v)},
fGe:function fGe(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
YP:function YP(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
az1:function az1(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d5D:function d5D(d){this.a=d},
d5C:function d5C(d,e){this.a=d
this.b=e},
d5r:function d5r(d,e){this.a=d
this.b=e},
d5o:function d5o(d,e){this.a=d
this.b=e},
d5_:function d5_(d){this.a=d},
d50:function d50(d,e){this.a=d
this.b=e},
d5s:function d5s(d){this.a=d},
d58:function d58(d){this.a=d},
d56:function d56(d){this.a=d},
d57:function d57(d){this.a=d},
d59:function d59(d){this.a=d},
d5p:function d5p(d){this.a=d},
d5q:function d5q(){},
d54:function d54(d){this.a=d},
d55:function d55(d,e){this.a=d
this.b=e},
d5a:function d5a(d){this.a=d},
d5b:function d5b(d,e){this.a=d
this.b=e},
d5B:function d5B(d){this.a=d},
d5A:function d5A(d,e){this.a=d
this.b=e},
d5z:function d5z(d){this.a=d},
d5l:function d5l(d){this.a=d},
d5k:function d5k(d){this.a=d},
d5m:function d5m(d){this.a=d},
d51:function d51(d,e){this.a=d
this.b=e},
d5n:function d5n(d,e){this.a=d
this.b=e},
d5e:function d5e(d){this.a=d},
d5f:function d5f(d){this.a=d},
d5d:function d5d(){},
d5g:function d5g(d){this.a=d},
d5h:function d5h(d){this.a=d},
d5i:function d5i(d,e){this.a=d
this.b=e},
d5j:function d5j(d,e,f){this.a=d
this.b=e
this.c=f},
d5c:function d5c(d,e){this.a=d
this.b=e},
d5u:function d5u(d){this.a=d},
d5t:function d5t(){},
d5v:function d5v(d){this.a=d},
d5w:function d5w(d){this.a=d},
d5x:function d5x(d){this.a=d},
d5y:function d5y(d,e){this.a=d
this.b=e},
d52:function d52(d){this.a=d},
d53:function d53(d){this.a=d},
YT:function YT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdR:function bdR(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d7n:function d7n(d){this.a=d},
d7o:function d7o(d){this.a=d},
d7m:function d7m(d){this.a=d},
d7p:function d7p(d){this.a=d},
d7l:function d7l(d){this.a=d},
d7q:function d7q(d){this.a=d},
d7k:function d7k(d){this.a=d},
d7r:function d7r(d,e){this.a=d
this.b=e},
d7j:function d7j(d,e){this.a=d
this.b=e},
d7s:function d7s(d,e){this.a=d
this.b=e},
YR:function YR(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aed:function aed(d,e,f){this.a=d
this.b=e
this.c=f},
az2:function az2(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d5S:function d5S(d,e){this.a=d
this.b=e},
d5R:function d5R(d,e){this.a=d
this.b=e},
d5W:function d5W(d){this.a=d},
d5V:function d5V(d,e){this.a=d
this.b=e},
d5T:function d5T(d){this.a=d},
d5U:function d5U(d){this.a=d},
d5X:function d5X(d){this.a=d},
d5Y:function d5Y(d){this.a=d},
d5Q:function d5Q(d,e){this.a=d
this.b=e},
d5P:function d5P(d,e){this.a=d
this.b=e},
Jz:function Jz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Y7:function Y7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cEx:function cEx(d){this.a=d},
cEy:function cEy(){},
cEz:function cEz(d){this.a=d},
bb6:function bb6(d,e,f){this.b=d
this.c=e
this.a=f},
baY:function baY(d,e){this.b=d
this.a=e},
u6:function u6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Yp:function Yp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bb4:function bb4(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cXZ:function cXZ(d,e,f){this.a=d
this.b=e
this.c=f},
cXY:function cXY(d,e){this.a=d
this.b=e},
cYn:function cYn(d){this.a=d},
cYa:function cYa(){},
cYo:function cYo(d){this.a=d},
cY9:function cY9(){},
cYp:function cYp(d,e){this.a=d
this.b=e},
cY8:function cY8(d,e){this.a=d
this.b=e},
cYq:function cYq(d,e){this.a=d
this.b=e},
cY7:function cY7(d,e){this.a=d
this.b=e},
cYr:function cYr(d){this.a=d},
cY6:function cY6(){},
cYs:function cYs(d,e){this.a=d
this.b=e},
cY5:function cY5(d,e){this.a=d
this.b=e},
cYt:function cYt(d){this.a=d},
cYi:function cYi(d,e){this.a=d
this.b=e},
cYu:function cYu(d){this.a=d},
cYv:function cYv(d){this.a=d},
cYx:function cYx(d){this.a=d},
cYy:function cYy(d){this.a=d},
cYh:function cYh(d,e){this.a=d
this.b=e},
cYz:function cYz(d,e){this.a=d
this.b=e},
aG1:function aG1(d){this.a=d},
bgk:function bgk(d){this.a=d},
b9i:function b9i(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hXK(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ahh(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bA(new A.S(Date.now(),0,!1))
s=new C.fqG(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("a2<1>"),q=q.k("cR<1,n>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.xN)m.push(l===D.Zk?"male":"female")
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
m.push("child of "+l+k)}a0=A.B(new A.cR(new A.a2(a4,new C.fqE(u,f),p),new C.fqF(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aI(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aI(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hXL(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ahh(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fqL(v,e)
q=new C.fqJ(v)
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
for(l=B.d.gaf(e),k=new A.fe(l,new C.fqK(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ai(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aI(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hJp(d,e,f,g){var w,v,u=C.hXM(d,e)
if(u<=0||f.length<=u)return new A.adO(!1,D.C6,f)
if(g.t(0,e.a))return new A.adO(!1,D.C6,f)
w=A.U(f).c
v=A.dd(f,0,A.dJ(u,"count",x.S),w).dH(0)
return new A.adO(!0,A.dd(f,u,null,w).dH(0),v)},
hJq(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ahh(d3),d2=d1.length
if(d2===0)return D.fP6
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.cg(0,t.a,new C.d64(t))}s=new C.d6l(v)
d2=x.h
r=A.T(w,d2)
q=new C.d6d(r)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d6c(r)
l=A.T(w,x.do)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ch(l.cg(0,k,new C.d65()),o)}h=new C.d6b(s)
g=new C.d6a(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a2<J.E>")
f=A.B(new A.a2(new A.bc(v,p),new C.d66(h),o),o.k("J.E"))
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
a9=new C.d6j(new C.d6f(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dt(v,v.r,v.e),j=a2.gajT(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.et([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.J(0,i))break}if(h.$1(b0)&&a2.ai(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.r9(J.dH(i==null?B.T:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.cc)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.d63(a2,new C.d6k(),b6,a3,b4,v,a4,a5,a6,b5)
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
a3.bI(0,new C.d67(c6,b4))
for(d2=new A.cK(a4,a4.$ti.k("cK<1,2>")).gaf(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gT(j)
if(b6.ai(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gaf(b5),i=new A.fe(j,new C.d68(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.b0(o,new C.d69())
c6.push(new C.aI7(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bdB(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hhu(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(d)
return w==null?null:w.b[1]},
hbQ(d,e,f,g,h,i,j,k,l,m,n){return new C.Zs(k,f,j,e,l,n,m,d,g,h,i,null)},
aAZ(d,e,f,g,h,i,j){return new C.bhg(i,d,e,f,j,h,g,null)},
aoP:function aoP(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCy:function aCy(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dTa:function dTa(d){this.a=d},
dT9:function dT9(d){this.a=d},
dTc:function dTc(d,e){this.a=d
this.b=e},
dTd:function dTd(d,e){this.a=d
this.b=e},
dTe:function dTe(d){this.a=d},
dT8:function dT8(d,e){this.a=d
this.b=e},
dTb:function dTb(d){this.a=d},
dTg:function dTg(d){this.a=d},
dTf:function dTf(d,e){this.a=d
this.b=e},
aoJ:function aoJ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCv:function aCv(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dSB:function dSB(d){this.a=d},
dSz:function dSz(d){this.a=d},
dSA:function dSA(d){this.a=d},
dSC:function dSC(d,e){this.a=d
this.b=e},
dSw:function dSw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dS4:function dS4(d){this.a=d},
dS5:function dS5(d,e){this.a=d
this.b=e},
dSj:function dSj(d){this.a=d},
dSh:function dSh(d){this.a=d},
dSi:function dSi(d,e){this.a=d
this.b=e},
dSk:function dSk(d){this.a=d},
dSl:function dSl(d,e){this.a=d
this.b=e},
dSv:function dSv(d,e){this.a=d
this.b=e},
dSt:function dSt(d,e){this.a=d
this.b=e},
dSs:function dSs(d,e){this.a=d
this.b=e},
dSo:function dSo(d,e){this.a=d
this.b=e},
dSn:function dSn(d){this.a=d},
dSp:function dSp(d,e){this.a=d
this.b=e},
dSm:function dSm(d){this.a=d},
dSq:function dSq(d){this.a=d},
dSr:function dSr(d){this.a=d},
dSu:function dSu(d,e){this.a=d
this.b=e},
dRT:function dRT(d,e){this.a=d
this.b=e},
dRU:function dRU(d,e){this.a=d
this.b=e},
dSE:function dSE(d,e,f){this.a=d
this.b=e
this.c=f},
dSy:function dSy(d,e,f){this.a=d
this.b=e
this.c=f},
dSx:function dSx(d){this.a=d},
dRV:function dRV(d){this.a=d},
dRW:function dRW(d){this.a=d},
dRX:function dRX(){},
dRY:function dRY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dS1:function dS1(d,e){this.a=d
this.b=e},
dS0:function dS0(d,e){this.a=d
this.b=e},
dS_:function dS_(d){this.a=d},
dS2:function dS2(d,e){this.a=d
this.b=e},
dRZ:function dRZ(d){this.a=d},
dSD:function dSD(d){this.a=d},
dSe:function dSe(){},
dSf:function dSf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSd:function dSd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dS9:function dS9(d,e,f){this.a=d
this.b=e
this.c=f},
dS8:function dS8(d,e,f){this.a=d
this.b=e
this.c=f},
dS6:function dS6(d,e){this.a=d
this.b=e},
dSa:function dSa(d){this.a=d},
dSb:function dSb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dS7:function dS7(d,e){this.a=d
this.b=e},
dSc:function dSc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSg:function dSg(d,e){this.a=d
this.b=e},
dSL:function dSL(){},
dSM:function dSM(d,e){this.a=d
this.b=e},
dSN:function dSN(d){this.a=d},
dSO:function dSO(d,e){this.a=d
this.b=e},
dSH:function dSH(d){this.a=d},
dSF:function dSF(d,e){this.a=d
this.b=e},
dSI:function dSI(d,e){this.a=d
this.b=e},
dSJ:function dSJ(d,e){this.a=d
this.b=e},
dSK:function dSK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dSP:function dSP(d){this.a=d},
dSG:function dSG(d){this.a=d},
dS3:function dS3(d){this.a=d},
bdz:function bdz(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d61:function d61(d){this.a=d},
d60:function d60(d,e){this.a=d
this.b=e},
d62:function d62(d){this.a=d},
d6_:function d6_(d,e){this.a=d
this.b=e},
fqG:function fqG(d,e){this.a=d
this.b=e},
fqH:function fqH(d){this.a=d},
fqI:function fqI(){},
fqE:function fqE(d,e){this.a=d
this.b=e},
fqF:function fqF(){},
fqL:function fqL(d,e){this.a=d
this.b=e},
fqM:function fqM(d){this.a=d},
fqN:function fqN(){},
fqJ:function fqJ(d){this.a=d},
fqK:function fqK(d,e){this.a=d
this.b=e},
JH:function JH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Fq:function Fq(d,e){this.a=d
this.b=e},
bdB:function bdB(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d64:function d64(d){this.a=d},
d6l:function d6l(d){this.a=d},
d6d:function d6d(d){this.a=d},
d6e:function d6e(){},
d6c:function d6c(d){this.a=d},
d65:function d65(){},
d6b:function d6b(d){this.a=d},
d6a:function d6a(d,e){this.a=d
this.b=e},
d66:function d66(d){this.a=d},
d6f:function d6f(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d6g:function d6g(d){this.a=d},
d6h:function d6h(d){this.a=d},
d6i:function d6i(){},
d6j:function d6j(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d6k:function d6k(){},
d63:function d63(d,e,f,g,h,i,j,k,l,m){var _=this
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
d67:function d67(d,e){this.a=d
this.b=e},
d68:function d68(d){this.a=d},
d69:function d69(){},
aI7:function aI7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bdC:function bdC(d,e){this.b=d
this.a=e},
d6m:function d6m(){},
d6n:function d6n(d){this.a=d},
d6o:function d6o(d){this.a=d},
d6p:function d6p(){},
bhh:function bhh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcG:function bcG(d,e){this.b=d
this.a=e},
buZ:function buZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
f8R:function f8R(d){this.a=d},
bkD:function bkD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eKM:function eKM(d){this.a=d},
eKL:function eKL(d,e){this.a=d
this.b=e},
Zs:function Zs(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aAX:function aAX(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dme:function dme(d,e){this.a=d
this.b=e},
dmd:function dmd(d){this.a=d},
dmb:function dmb(d){this.a=d},
dmc:function dmc(d){this.a=d},
dmn:function dmn(d){this.a=d},
dmo:function dmo(d){this.a=d},
dmm:function dmm(d,e){this.a=d
this.b=e},
dmp:function dmp(){},
dms:function dms(d){this.a=d},
dml:function dml(d,e){this.a=d
this.b=e},
dmr:function dmr(){},
dmt:function dmt(d){this.a=d},
dmk:function dmk(d,e){this.a=d
this.b=e},
dmu:function dmu(d){this.a=d},
dmj:function dmj(d){this.a=d},
dmv:function dmv(d){this.a=d},
dmi:function dmi(d){this.a=d},
dmw:function dmw(d){this.a=d},
dmh:function dmh(d){this.a=d},
dmx:function dmx(d){this.a=d},
dmg:function dmg(d){this.a=d},
dmy:function dmy(d){this.a=d},
dmf:function dmf(d,e){this.a=d
this.b=e},
dmq:function dmq(d){this.a=d},
acD:function acD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhg:function bhg(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
acC:function acC(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bhf:function bhf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dmz:function dmz(d){this.a=d},
dmA:function dmA(d,e){this.a=d
this.b=e},
aAY:function aAY(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aH9:function aH9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
acE:function acE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dmJ:function dmJ(d){this.a=d},
Jv:function Jv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
h6I(d){var w=d.U,v=x.N
return w.iY(w,new C.c7z(),v,v)},
hAV(d){var w=d.bF
if(w>=0)return w
return 5},
h6K(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.h6I(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
h6J(d,e){var w=C.h6K(d,e)
if(w!=null&&w.cc(new A.S(Date.now(),0,!1)))return!0
return!1},
hAW(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.h6I(d),w,w)
u=C.h6K(d,e)
t=u!=null&&u.cc(new A.S(Date.now(),0,!1))?u:new A.S(Date.now(),0,!1)
v.n(0,s,t.bQ(A.dC(30,0,0,0,0,0).a).a6().ac())
d.U=v},
aZb(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aZb=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.le(t,B.HN),$async$aZb)
case 3:if(l){u=!0
w=1
break}u=A.kS(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.HN,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZb,v)},
c7z:function c7z(){},
hAT(){var w,v=$.pn(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aC(32)]
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
a6G(d){return C.hAU(d)},
hAU(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a6G=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$a6G)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hC("ngmy_family_tree_backup_codes_v1",A.F(["codes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cH,null),$async$a6G)
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
return A.i($async$a6G,v)},
c7y(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c7y=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.I9(),$async$c7y)
case 3:t=m.jv(f),t=t.gaf(t),s=x.f
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
return A.i($async$c7y,v)},
N5(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$N5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c7y(d),$async$N5)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.I9(),$async$N5)
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
return A.b(C.a6G(s),$async$N5)
case 9:case 8:u=t
w=1
break
case 5:n=C.hAT()
w=10
return A.b(C.I9(),$async$N5)
case 10:s=f
J.aF(s,n,A.F(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=11
return A.b(C.a6G(s),$async$N5)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$N5,v)},
aZa(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aZa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.I9(),$async$aZa)
case 3:t=f
for(s=J.dm(t),r=s.gdK(t),r=r.dH(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a6G(t),$async$aZa)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aZa,v)},
a6H(d,e,f){var w=0,v=A.j(x.H),u
var $async$a6H=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aoO(d,e),$async$a6H)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.N5(d),$async$a6H)
case 7:w=4
break
case 5:w=8
return A.b(C.aZa(d),$async$a6H)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a6H,v)},
aoI(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aoI=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aoO(f,e),$async$aoI)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c3(),$async$aoI)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.I9(),$async$aoI)
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
return A.i($async$aoI,v)},
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
hAX(){var w,v=$.pn(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aC(32)]
return"FT"+B.d.fX(u)},
aoL(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$aoL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$aoL)
case 3:if(!g){u=null
w=1
break}t=C.hAX()
w=4
return A.b(A.UA(),$async$aoL)
case 4:s=g
r=B.dJ.aJ(B.R.ao(d.eM(),null))
r=B.cT.gcw().aJ(r)
q=e?999:2
J.aF(s,t,A.F(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(A.a6I(s),$async$aoL)
case 5:p=e?999:2
u=new A.a_E("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoL,v)},
aoK(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aoK=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.UA(),$async$aoK)
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
return A.b(C.aZ9(J.k(l==null?"":l),j),$async$aoK)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.c6.ca(0,B.cG.aJ(t))
s=C.h6L(r)}catch(f){q=A.aa(f)
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
return A.b(A.a6I(p),$async$aoK)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoK,v)},
h6L(d){var w,v,u,t,s=null
try{w=B.R.aG(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hAZ(A.a1(w,x.N,x.z))
return u}catch(t){v=A.aa(t)
$.am.$1("[family tree sync] parse: "+A.t(v))
return s}},
fRJ(d){var w=0,v=A.j(x.m),u,t,s
var $async$fRJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aoK(t[1])
w=1
break}u=null
w=1
break}u=C.h6L(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fRJ,v)},
hAZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d9(v,x.f)
u=A.cD(u,new C.c7B(),u.$ti.k("J.E"),x.k)
t=A.a4(u).k("a2<J.E>")
s=A.B(new A.a2(u,new C.c7C(),t),t.k("J.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.T(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jv(p),t=t.gaf(t),o=x.B;t.C();){n=t.gT(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d9(l,u)
n=A.cD(n,new C.c7D(),n.$ti.k("J.E"),o)
k=A.a4(n).k("a2<J.E>")
j=A.B(new A.a2(n,new C.c7E(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aoM(h,w,s,r,q)},
aoO(d,e){var w=0,v=A.j(x.y),u,t
var $async$aoO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.MX(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Au(d),$async$aoO)
case 3:u=t.cy(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoO,v)},
c7K(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c7K=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Au(d),$async$c7K)
case 3:t=s.b6(f,new C.c7L(),x.cs)
t=A.B(t,t.$ti.k("ak.E"))
B.d.b0(t,new C.c7M())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c7K,v)},
UB(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$UB=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aoO(e,d),$async$UB)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.N5(e),$async$UB)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Au(e),$async$UB)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.c7I(g))
r=A.B(t,t.$ti.k("J.E"))}t=J.a6(r)
if(t.gam(r)){u=null
w=1
break}t=t.dt(r,new C.c7J(e),x.k)
r=A.B(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Ks(e,o),$async$UB)
case 14:n=i
if(J.cy(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.aoM(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$UB,v)},
aZe(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aZe=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.UB(d,e,f,g),$async$aZe)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gL(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aK(t,s,"_")
r=q.a
u=A.G8(A.JD(q.eM(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZe,v)},
aZd(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aZd=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.UB(d,e,f,g),$async$aZd)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aoL(r,f),$async$aZd)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aFa(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZd,v)},
UC(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$UC=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fRJ(a0),$async$UC)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aoI(g.a,d,e,f,s,r),$async$UC)
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
return A.b(C.bAl(e,j),$async$UC)
case 12:case 11:w=13
return A.b(C.ah2(e,j,s),$async$UC)
case 13:h=n.h(0,i)
w=h!=null&&J.cy(h)?14:15
break
case 14:w=16
return A.b(C.AF(e,i,h),$async$UC)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bod(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$UC,v)},
aoM:function aoM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c7G:function c7G(){},
c7H:function c7H(){},
c7F:function c7F(){},
c7B:function c7B(){},
c7C:function c7C(){},
c7D:function c7D(){},
c7E:function c7E(){},
c7L:function c7L(){},
c7M:function c7M(){},
c7I:function c7I(d){this.a=d},
c7J:function c7J(d){this.a=d},
h_3(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f7(null,x.H)
return A.hw(d,new C.aoN(w,e,g,i,f,h,null),!0,null,x.H)},
d5Z(d,e,f,g,h,i,j,k){return new C.bdy(i,e,k,j,g,f,h,d,null)},
aoN:function aoN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCx:function aCx(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dSY:function dSY(d){this.a=d},
dSZ:function dSZ(d,e,f){this.a=d
this.b=e
this.c=f},
dT2:function dT2(d,e){this.a=d
this.b=e},
dT3:function dT3(d){this.a=d},
dSV:function dSV(d){this.a=d},
dSW:function dSW(d,e){this.a=d
this.b=e},
dSX:function dSX(d,e){this.a=d
this.b=e},
dT1:function dT1(d){this.a=d},
dT0:function dT0(d,e){this.a=d
this.b=e},
dT_:function dT_(){},
dT5:function dT5(d){this.a=d},
dT6:function dT6(d,e){this.a=d
this.b=e},
dT4:function dT4(d,e){this.a=d
this.b=e},
d6q:function d6q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bdA:function bdA(d,e,f){this.d=d
this.e=e
this.a=f},
abU:function abU(d,e,f){this.c=d
this.d=e
this.a=f},
bdy:function bdy(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bdD:function bdD(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ZN:function ZN(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCw:function aCw(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dSQ:function dSQ(d,e){this.a=d
this.b=e},
dSR:function dSR(d){this.a=d},
dSS:function dSS(d){this.a=d},
dST:function dST(d){this.a=d},
dSU:function dSU(d){this.a=d},
ZO:function ZO(d){this.a=d},
biK:function biK(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dT7:function dT7(d,e){this.a=d
this.b=e},
aXL(d,e){return new C.aXK(d,e,null)},
aXK:function aXK(d,e,f){this.c=d
this.d=e
this.a=f},
i_d(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b1(d,11)},
i6B(d){return A.bR(B.K,null,new C.fGH(new C.tE(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
h8D(d,e){return new C.arI(e,d,null)},
aPp(d,e,f,g,h,i,j){var w=C.i_d(i)
if(w!=null)return A.bw(e,new A.a7(j,f,new C.a5I(w,!0,null),null),B.aq)
return I.aOK(e,B.bR,f,g,h,i,j)},
lx:function lx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5I:function a5I(d,e,f){this.c=d
this.d=e
this.a=f},
biq:function biq(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b_$=e
_.c=_.a=null},
dEg:function dEg(d){this.a=d},
dEh:function dEh(){},
dEi:function dEi(d,e){this.a=d
this.b=e},
bip:function bip(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fGH:function fGH(d){this.a=d},
fGG:function fGG(d,e){this.a=d
this.b=e},
fGF:function fGF(d,e){this.a=d
this.b=e},
fGE:function fGE(d,e){this.a=d
this.b=e},
arI:function arI(d,e,f){this.c=d
this.d=e
this.a=f},
cfe:function cfe(d,e){this.a=d
this.b=e},
aKt:function aKt(){},
i6m(d){var w=null
return A.ca(w,w,!0,w,new C.fG3(),d,w,!0,!0,x.e2)},
i7w(d,e,f,g,h){var w=null
return A.ca(w,w,!0,w,new C.fNy(h,g,f,e),d,w,!0,!0,x.N)},
i6o(d,e){var w=null
return A.ca(w,w,!0,w,new C.fG8(e),d,w,!0,!0,x.dY)},
i6n(d){var w=null
return A.ca(w,w,!0,w,new C.fG7(),d,w,!0,!0,x.c5)},
aSk:function aSk(d,e){this.a=d
this.b=e},
aSj:function aSj(d){this.a=d},
aQl:function aQl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fG3:function fG3(){},
fNy:function fNy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fG8:function fG8(d){this.a=d},
fG7:function fG7(){},
Yr:function Yr(d,e){this.c=d
this.a=e},
axN:function axN(){var _=this
_.d=$
_.c=_.a=_.e=null},
cYL:function cYL(d){this.a=d},
cYM:function cYM(d){this.a=d},
cYK:function cYK(d,e){this.a=d
this.b=e},
cYN:function cYN(d){this.a=d},
cYO:function cYO(d){this.a=d},
Yq:function Yq(d){this.a=d},
axM:function axM(){this.d=$
this.c=this.a=null},
cYH:function cYH(d){this.a=d},
cYI:function cYI(d){this.a=d},
cYJ:function cYJ(d){this.a=d},
XZ:function XZ(d){this.a=d},
aww:function aww(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cwk:function cwk(){},
cwq:function cwq(d){this.a=d},
cwr:function cwr(d){this.a=d},
cws:function cws(d){this.a=d},
cwp:function cwp(){},
cwt:function cwt(d){this.a=d},
cwu:function cwu(d){this.a=d},
cwo:function cwo(){},
cwv:function cwv(d,e){this.a=d
this.b=e},
cwn:function cwn(d,e){this.a=d
this.b=e},
cwl:function cwl(d,e){this.a=d
this.b=e},
cww:function cww(d){this.a=d},
cwm:function cwm(){},
cwx:function cwx(d){this.a=d},
a0y:function a0y(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
buR:function buR(){this.d=$
this.c=this.a=null},
f8j:function f8j(d,e){this.a=d
this.b=e},
f8k:function f8k(d){this.a=d},
f8l:function f8l(d,e){this.a=d
this.b=e},
aaX:function aaX(d,e){this.a=d
this.b=e},
Fe:function Fe(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
buP:function buP(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
f8h:function f8h(d,e){this.a=d
this.b=e},
awp:function awp(d,e){this.c=d
this.a=e},
buQ:function buQ(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
f8i:function f8i(d){this.a=d},
buO:function buO(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aME:function aME(){},
aMF:function aMF(){},
bCi(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bt(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oC(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fEJ(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dh(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dh(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dh(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.dh(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Xn(A.dh(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aP0(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aP0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hX().l3(85,1280,B.eG),$async$aP0)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fi(),$async$aP0)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.h8C()
w=9
return A.b(C.cfd(q,r),$async$aP0)
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
if(i){u=C.cfa(g)
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
return A.b(J.ahs(m).hr(B.fY),$async$aPn)
case 11:l=a1
J.ahs(m).q()
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
fEJ:function fEJ(){},
tE:function tE(d){this.a=d},
arH:function arH(d,e,f){this.c=d
this.d=e
this.a=f},
aE2:function aE2(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eHW:function eHW(d,e){this.a=d
this.b=e},
eHN:function eHN(d){this.a=d},
eHO:function eHO(d){this.a=d},
eHU:function eHU(d,e){this.a=d
this.b=e},
eHT:function eHT(d,e){this.a=d
this.b=e},
eHQ:function eHQ(d,e){this.a=d
this.b=e},
eHP:function eHP(d,e){this.a=d
this.b=e},
eHR:function eHR(d){this.a=d},
eHS:function eHS(d,e){this.a=d
this.b=e},
eHV:function eHV(d,e){this.a=d
this.b=e},
eHI:function eHI(d,e){this.a=d
this.b=e},
eHM:function eHM(d){this.a=d},
eHL:function eHL(d,e){this.a=d
this.b=e},
eHK:function eHK(d){this.a=d},
eHX:function eHX(d,e){this.a=d
this.b=e},
eHY:function eHY(d,e){this.a=d
this.b=e},
eHJ:function eHJ(d,e){this.a=d
this.b=e},
hlh(d,e,f){var w="thumbnailPath",v=e.ag()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.F(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a6().ac(),"project",v],x.N,x.z)},
fEK(d,e,f){var w=0,v=A.j(x.N),u
var $async$fEK=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.R.ao(C.hlh(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fEK,v)},
bCk(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bCk=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fEK(!0,d,e),$async$bCk)
case 4:w=3
return A.b(r.arF(g,d,e.a),$async$bCk)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dJ.aJ(B.R.ao(C.hlh(d,e,null),null))
u="NGMY_WS:"+B.ka.gcw().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCk,v)},
hdb(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fZL(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d_(s,"NGMYWSSYNC2|"))return!0
if(J.d_(s,"NGMY_WS:"))return!0
if(J.f0(s,t))return!0
if(J.d_(s,"{"))try{w=B.R.aG(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
i4g(d){var w,v,u,t=C.hdb(d)
if(t==null)return null
if(C.fZL(t))return t
w=B.a.cJ(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b1(t,w))
if(C.fZL(v))return v}u=B.a.cJ(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b1(t,u))
if(C.fZL(v))return v}return null},
fZK(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d_(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d_(q,"NGMY_WS:")){v=B.c6.ca(0,B.cG.aJ(J.mE(q,8)))
w=t.a(B.R.aG(0,v,r))}else w=t.a(B.R.aG(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fUj(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bCj(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bCj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.arE(t[1]),$async$bCj)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fZK(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fZK(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCj,v)},
fZJ(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lh(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bBR(){var w=0,v=A.j(x.o),u,t
var $async$bBR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Gj(),$async$bBR)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fZK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBR,v)},
hm8(d,e,f,g){return A.bR(B.K,null,new C.fNo(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fNo:function fNo(d,e,f){this.a=d
this.b=e
this.c=f},
acZ:function acZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eI_:function eI_(d,e){this.a=d
this.b=e},
eI0:function eI0(d,e){this.a=d
this.b=e},
eI1:function eI1(d,e){this.a=d
this.b=e},
eI2:function eI2(d,e){this.a=d
this.b=e},
eHZ:function eHZ(d){this.a=d},
arB:function arB(d,e,f){this.c=d
this.d=e
this.a=f},
bk6:function bk6(){var _=this
_.c=_.a=_.e=_.d=null},
eHD:function eHD(d,e){this.a=d
this.b=e},
eHE:function eHE(d){this.a=d},
eHF:function eHF(d){this.a=d},
arG:function arG(d){this.a=d},
aE1:function aE1(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eHH:function eHH(d){this.a=d},
eHG:function eHG(d){this.a=d},
hEc(d,e,f,g,h){return new C.NI(h,g,d,e,f,null)},
aIP:function aIP(d,e){this.a=d
this.b=e},
NI:function NI(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aE3:function aE3(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eIp:function eIp(){},
eIl:function eIl(d,e){this.a=d
this.b=e},
eIm:function eIm(d){this.a=d},
eI6:function eI6(d){this.a=d},
eI4:function eI4(d){this.a=d},
eI5:function eI5(d){this.a=d},
eIf:function eIf(d,e){this.a=d
this.b=e},
eIc:function eIc(d,e){this.a=d
this.b=e},
eId:function eId(d,e){this.a=d
this.b=e},
eIe:function eIe(d,e,f){this.a=d
this.b=e
this.c=f},
eIa:function eIa(d,e,f){this.a=d
this.b=e
this.c=f},
eI8:function eI8(d){this.a=d},
eI9:function eI9(d){this.a=d},
eIb:function eIb(d){this.a=d},
eIs:function eIs(d){this.a=d},
eIr:function eIr(d){this.a=d},
eIt:function eIt(d){this.a=d},
eIq:function eIq(d){this.a=d},
eI3:function eI3(d){this.a=d},
eI7:function eI7(d,e){this.a=d
this.b=e},
eIo:function eIo(d,e){this.a=d
this.b=e},
eIn:function eIn(d,e){this.a=d
this.b=e},
eIi:function eIi(d){this.a=d},
eIj:function eIj(d){this.a=d},
eIk:function eIk(d,e){this.a=d
this.b=e},
eIh:function eIh(d,e){this.a=d
this.b=e},
eIg:function eIg(d,e,f){this.a=d
this.b=e
this.c=f},
bwC:function bwC(){},
Ak(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aK(v,w,"_")},
afu(d,e,f){return C.hTQ(d,e,f)},
hTQ(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$afu=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.au("String",e,f),$async$afu)
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
return A.i($async$afu,v)},
aft(d,e){return C.hTP(d,e)},
hTP(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aft=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$aft)
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
return A.i($async$aft,v)},
hSB(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Sg(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bzl(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bzl=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b1r(q),$async$bzl)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aPn(q,!1),$async$bzl)
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
return A.i($async$bzl,v)},
hs0(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.qT(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qT(p,J.k(u==null?"":u),1,o,q)},
fUj(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d9(s,x.f)
w=A.cD(w,new C.cvJ(),w.$ti.k("J.E"),x.Q)
v=A.a4(w).k("a2<J.E>")
r=A.B(new A.a2(w,new C.cvK(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lh(w,v,u,r,t==null?new A.S(Date.now(),0,!1):t)},
hXG(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.Zk
case"female":case"f":return D.aiR
default:return D.xN}},
hi_(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h2O(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hXG(v==null?j:J.k(v))
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
return new C.hW(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
hXI(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Mr
case"viewer":return D.km
default:return D.tF}},
hXJ(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
G9(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bAC(d,e){return B.a.i(e.toLowerCase())===C.G9(d,e)&&d.y!==D.km},
tP(d,e){var w,v=d.y
if(v===D.km)return!1
w=B.a.i(e.toLowerCase())
if(w===C.G9(d,e))return!0
if(v===D.Mr)return!0
v=d.e
return new A.K(v,A.fZP(),A.U(v).k("K<1,n>")).t(0,w)},
hX8(d){return J.dH(d,new C.fpM()).gM(0)},
fNU(d){var w=0,v=A.j(x.y),u,t
var $async$fNU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Au(d),$async$fNU)
case 3:u=t.qP(f,new C.fNV(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fNU,v)},
bAl(d,e){var w=0,v=A.j(x.H),u,t
var $async$bAl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Au(d),$async$bAl)
case 3:t=g
if(J.qP(t,new C.foc(e))){w=1
break}if(C.hX8(t)>=2)throw A.V(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bAl,v)},
ak5(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d9(n,x.f)
w=A.cD(w,new C.bMW(),w.$ti.k("J.E"),x.P)
v=A.a4(w).k("a2<J.E>")
m=A.B(new A.a2(w,new C.bMX(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bMY(),x.N)
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
return new C.kA(l,w,v,!s,t,m,r,q,p,C.hXI(o==null?null:J.k(o)))},
hi8(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
CB(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$CB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.R3(d),$async$CB)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aA(),$async$CB)
case 4:t=f
w=5
return A.b(t.a5u(0),$async$CB)
case 5:w=6
return A.b(C.ffU(t,l),$async$CB)
case 6:s=f
if(J.cy(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a6(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hdL(o)
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
case 12:n=C.hdL(m)
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
ffU(d,e){return C.hQ5(d,e)},
hQ5(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$ffU=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a6(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Ak(a9)))
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
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Ak(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.R.aG(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fUj(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Ak(a9)+"_"+n))
i=C.hSB(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b1r(h),$async$ffU)
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
case 8:J.Rd(q,new C.ffV())
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
return A.i($async$ffU,v)},
bAN(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bAN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.R3(d),$async$bAN)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.CB(r),$async$bAN)
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
return A.i($async$bAN,v)},
hdL(d){var w,v,u,t
try{w=B.R.aG(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d9(w,x.f)
v=A.cD(v,new C.fbC(),v.$ti.k("J.E"),x.i)
u=A.a4(v).k("a2<J.E>")
v=A.B(new A.a2(v,new C.fbD(),u),u.k("J.E"))
B.d.b0(v,new C.fbE())
return v}catch(t){v=A.a([],x.D)
return v}},
oB(d,e){return C.i6c(d,e)},
i6c(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oB=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.R3(b2),$async$oB)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aA(),$async$oB)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Ak(a8)
p=A.aU(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.R.aG(0,p,null)),new C.fFV(),a2).fK(0)
a2=J.b6(b3,new C.fFW(),a2).c_(0,new C.fFX())
n=A.db(a2,a2.$ti.k("J.E"))
a2=o,a2=A.ed(a2,a2.r,A.a4(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f0(n,m)?17:18
break
case 17:a5=C.Ak(a8)
l=A.aU(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a7Y(l),$async$oB)
case 19:t=21
a5=C.Ak(a8)
k=A.aU(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.R.aG(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a7Y(a5==null?null:J.k(a5)),$async$oB)
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
return A.b(C.aft(r,"ngmy_worksheet_item_v3_"+C.Ak(a8)+"_"+m),$async$oB)
case 29:w=30
return A.b(C.aft(r,"ngmy_worksheet_thumb_v3_"+C.Ak(a8)+"_"+m),$async$oB)
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
return A.b(C.bzl(h),$async$oB)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.afu(r,"ngmy_worksheet_thumb_v3_"+C.Ak(a8)+"_"+a4,f),$async$oB)
case 40:g=i.Sg(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.aft(r,"ngmy_worksheet_thumb_v3_"+C.Ak(a8)+"_"+a4),$async$oB)
case 41:g=i.Sg(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.aft(r,"ngmy_worksheet_thumb_v3_"+C.Ak(a8)+"_"+a4),$async$oB)
case 42:case 34:a4=i.a
w=43
return A.b(C.afu(r,"ngmy_worksheet_item_v3_"+C.Ak(a8)+"_"+a4,B.R.ao(g.ag(),null)),$async$oB)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.ch(q,i.a)
w=31
break
case 32:w=44
return A.b(C.afu(r,"ngmy_worksheets_index_v3_"+C.Ak(a8),B.R.ao(q,null)),$async$oB)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eL(b3,new C.fFY(q))
a4=a3.$ti.k("cR<1,a3<n,@>>")
a7=A.B(new A.cR(a3,new C.fFZ(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.afu(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.R.ao(a0,null)),$async$oB)
case 45:w=46
return A.b(J.hr7(r),$async$oB)
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
r=s.bd(t,new C.fNT(e))
if(r===-1)s.ck(t,0,e)
else s.n(t,r,e)
u=C.oB(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$KT,v)},
bAz(d,e){var w=0,v=A.j(x.H),u
var $async$bAz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.CB(d),$async$bAz)
case 2:u=g
J.no(u,new C.fqd(e))
w=3
return A.b(C.oB(d,u),$async$bAz)
case 3:return A.h(null,v)}})
return A.i($async$bAz,v)},
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
j=A.cD(j,new C.fsM(),j.$ti.k("J.E"),x.k)
s=A.a4(j).k("a2<J.E>")
r=A.B(new A.a2(j,new C.fsN(),s),s.k("J.E"))
B.d.b0(r,new C.fsO())
k=r}}catch(h){}w=4
return A.b(C.fcm(d),$async$Gb)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hQs(k,p,d)
j=A.U(o)
s=j.k("K<1,a3<n,@>>")
s=A.B(new A.K(o,new C.fsP(),s),s.k("ak.E"))
n=B.R.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Qg(d,o),$async$Gb)
case 7:case 6:j=j.k("a2<1>")
m=A.B(new A.a2(o,new C.fsQ(d),j),j.k("J.E"))
if(m.length!==0)C.aNW(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Gb,v)},
fFH(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fFH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qg(d,e),$async$fFH)
case 3:t=J.dH(e,new C.fFI(d))
s=A.B(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aNW(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fFH,v)},
a2a(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a2a=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aA(),$async$a2a)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.R.aG(0,l,null)
if(x.j.b(u)){m=J.d9(u,x.f)
m=A.cD(m,new C.fNO(),m.$ti.k("J.E"),x.k)
t=A.a4(m).k("a2<J.E>")
s=A.B(new A.a2(m,new C.fNP(),t),t.k("J.E"))
o=s}}catch(k){}q=J.qa(o,new C.fNQ(e))
if(B.a.i(e.x).length===0&&C.tP(e,d)){m=B.a.i(d.toLowerCase())
p=e.aCY(e.y===D.km?D.km:D.tF,m)}else p=e
if(q===-1)J.pr(o,0,p)
else J.aF(o,q,p)
w=3
return A.b(C.Qg(d,o),$async$a2a)
case 3:w=C.tP(p,d)?4:5
break
case 4:w=6
return A.b(C.aNV(C.G9(p,d),p),$async$a2a)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a2a,v)},
aO5(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aO5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Gb(d),$async$aO5)
case 2:u=g
t=J.cE(u)
s=A.r9(t.eL(u,new C.fpV(e)))
t.bn(u,new C.fpW(e))
w=3
return A.b(C.Qg(d,u),$async$aO5)
case 3:w=s!=null&&C.bAC(s,d)?4:5
break
case 4:w=6
return A.b(C.fbG(e),$async$aO5)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aO5,v)},
ahh(d){var w=d.f,v=A.U(w).k("a2<1>")
w=A.B(new A.a2(w,new C.fNZ(),v),v.k("J.E"))
return w},
fXr(d,e){var w,v=d.f,u=A.r9(new A.a2(v,new C.fpr(e),A.U(v).k("a2<1>")))
v=C.ahh(d)
w=A.U(v).k("a2<1>")
v=A.B(new A.a2(v,new C.fps(e,u),w),w.k("J.E"))
B.d.b0(v,new C.fpt())
return v},
hXM(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hmc(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bd(C.fXr(d,u),new C.fNz(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hZi(d,e){var w
if(e==null||e.length===0)return 1
w=C.fXr(d,e)
if(w.length===0)return 1
return new A.K(w,new C.fty(),A.U(w).k("K<1,H>")).fa(0,B.A5)+1},
i65(d){var w,v=C.ahh(d)
if(v.length===0)return null
w=new A.a2(v,new C.fFB(),A.U(v).k("a2<1>"))
if(!w.gam(0))return w.gL(0)
return B.d.gL(v)},
hXH(d){return A.F(["id",d.a,"name",d.b,"gender",C.hi_(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hZd(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
n=n!==D.xN?n:q.c
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
return a2.cHk(a1,w,a3.d,a2.y,s,a0,v)},
Au(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$Au=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Au)
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
p=A.cD(p,new C.fsJ(),p.$ti.k("J.E"),x.k)
s=A.a4(p).k("a2<J.E>")
p=A.B(new A.a2(p,new C.fsK(),s),s.k("J.E"))
B.d.b0(p,new C.fsL())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Au,v)},
ah2(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ah2=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tF:D.km
a7=C.G9(b2,b3)
w=2
return A.b(C.Au(b1),$async$ah2)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.bd(a8,new C.fFw(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bAl(b1,b2),$async$ah2)
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
i=i!==D.xN?i:l.c
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
k=a5?D.tF:D.km
u=t.yo(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Qg(b1,a8),$async$ah2)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aNV(B.a.i(b3.toLowerCase()),u),$async$ah2)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ah2,v)},
he8(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a6().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("K<1,a3<n,@>>"),k=A.B(new A.K(m,C.hlp(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.F(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.F(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a6().ac(),"updatedAt",o],r,x.K),"createdAt",s.a6().ac(),"updatedAt",o],r,x.z)},
he9(d,e){var w=new A.S(Date.now(),0,!1).a6().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("K<1,a3<n,@>>")
u=A.B(new A.K(u,C.hlp(),t),t.k("ak.E"))
return A.F(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a6().ac(),"updatedAt",w],x.N,x.z)},
hO5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a6(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ak5(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.K(j,A.fZP(),A.U(j).k("K<1,n>")).c_(0,new C.fc9())
t=A.B(j,j.$ti.k("J.E"))
if(u===v)s=D.tF
else s=B.d.t(t,u)?D.Mr:D.km
return w.aCY(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ak5(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d9(q,h)
h=A.cD(h,new C.fca(),h.$ti.k("J.E"),x.P)
p=A.a4(h).k("a2<J.E>")
o=A.B(new A.a2(h,new C.fcb(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.fcc(),x.N).c_(0,new C.fcd())
t=A.B(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tF
else s=B.d.t(t,u)?D.Mr:D.km
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
fcm(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fcm=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fcq()
h=x.N
g=x.z
w=7
return A.b(A.iK(A.a([A.ln("family_trees","*",null,A.F(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bG),r.$2(A.ln("family_trees","*",A.F(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bG),"collaborator"),r.$2(A.ln("family_trees","*",null,A.F(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bG),"public")],x.cl),x.U),$async$fcm)
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
h=A.cD(new A.bc(l,h),new C.fcn(a0),h.k("J.E"),x.k)
l=A.a4(h).k("a2<J.E>")
l=A.B(new A.a2(h,new C.fco(),l),l.k("J.E"))
B.d.b0(l,new C.fcp())
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
return A.i($async$fcm,v)},
hQs(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a6(e)
if(j.gam(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dt(e,new C.fgz(),v).c_(0,new C.fgA())
t=A.db(u,u.$ti.k("J.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.G9(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.km){m=q.e
m=!new A.K(m,A.fZP(),A.U(m).k("K<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gaf(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.hZd(l,v)
o=C.G9(k,w)
p=v.d
s.n(0,u,o===w?k.baG(p,D.tF):k.baG(p,v.y))}j=s.$ti.k("bc<2>")
j=A.B(new A.bc(s,j),j.k("J.E"))
B.d.b0(j,new C.fgB())
return j},
Qg(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Qg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$Qg)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fiK(),x.a)
s=A.B(s,s.$ti.k("ak.E"))
w=3
return A.b(u.au("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.R.ao(s,null)),$async$Qg)
case 3:return A.h(null,v)}})
return A.i($async$Qg,v)},
aNV(d,e){return C.hVx(d,e)},
hVx(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aNV=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lN("family_trees",A.a([C.he8(e,d)],p),null,B.cH),$async$aNV)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lN("family_trees",A.a([C.he9(e,d)],p),null,B.cH),$async$aNV)
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
aNW(d,e){return C.hVy(d,e)},
hVy(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aNW=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("K<1,a3<n,@>>")
m=n.k("ak.E")
l=A.B(new A.K(e,new C.fnw(d),n),m)
r=l
w=7
return A.b(A.lN("family_trees",r,null,B.cH),$async$aNW)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.K(e,new C.fnx(d),n),m)
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
fbG(d){return C.hNq(d)},
hNq(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fbG=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.QE("family_trees",A.F(["id",d],x.N,x.z),null,B.cH),$async$fbG)
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
return A.i($async$fbG,v)},
qT:function qT(d,e,f,g,h){var _=this
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
cvM:function cvM(){},
cvL:function cvL(){},
cvJ:function cvJ(){},
cvK:function cvK(){},
Hg:function Hg(d,e){this.a=d
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
ak4:function ak4(d,e){this.a=d
this.b=e},
fpM:function fpM(){},
fNV:function fNV(d){this.a=d},
foc:function foc(d){this.a=d},
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
bN_:function bN_(){},
bMZ:function bMZ(){},
bMW:function bMW(){},
bMX:function bMX(){},
bMY:function bMY(){},
ffV:function ffV(){},
fbC:function fbC(){},
fbD:function fbD(){},
fbE:function fbE(){},
fFV:function fFV(){},
fFW:function fFW(){},
fFX:function fFX(){},
fFY:function fFY(d){this.a=d},
fFZ:function fFZ(){},
fNT:function fNT(d){this.a=d},
fqd:function fqd(d){this.a=d},
fsM:function fsM(){},
fsN:function fsN(){},
fsO:function fsO(){},
fsP:function fsP(){},
fsQ:function fsQ(d){this.a=d},
fFI:function fFI(d){this.a=d},
fNO:function fNO(){},
fNP:function fNP(){},
fNQ:function fNQ(d){this.a=d},
fpV:function fpV(d){this.a=d},
fpW:function fpW(d){this.a=d},
fNZ:function fNZ(){},
fpr:function fpr(d){this.a=d},
fps:function fps(d,e){this.a=d
this.b=e},
fpt:function fpt(){},
fNz:function fNz(d){this.a=d},
fty:function fty(){},
fFB:function fFB(){},
fsJ:function fsJ(){},
fsK:function fsK(){},
fsL:function fsL(){},
fFw:function fFw(d){this.a=d},
fc9:function fc9(){},
fca:function fca(){},
fcb:function fcb(){},
fcc:function fcc(){},
fcd:function fcd(){},
fcq:function fcq(){},
fcr:function fcr(d){this.a=d},
fcn:function fcn(d){this.a=d},
fco:function fco(){},
fcp:function fcp(){},
fgz:function fgz(){},
fgA:function fgA(){},
fgB:function fgB(){},
fiK:function fiK(){},
fnw:function fnw(d){this.a=d},
fnx:function fnx(d){this.a=d},
cvN:function cvN(d,e){this.a=d
this.b=e},
cvO:function cvO(d,e){this.a=d
this.b=e},
aG6:function aG6(d,e,f){this.a=d
this.b=e
this.c=f},
b7L:function b7L(){this.b=this.a=0},
b7K:function b7K(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
buS:function buS(){},
wB(d,e){var w,v
if(d==null)return""
w=d.bS()
v=""+w.gce()+"/"+w.gcu()+"/"+w.gcj()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gn9()),2,"0")+":"+B.a.aT(B.o.u(w.gG0()),2,"0")},
hE9(){var w,v=$.pn(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aC(32)]
return"WS"+B.d.fX(u)},
arC(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$arC=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arC)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f3("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bG),$async$arC)
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
return A.i($async$arC,v)},
arD(d){return C.hEa(d)},
hEa(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$arD=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arD)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hC("ngmy_worksheet_project_qr_stashes_v1",A.F(["stashes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cH,null),$async$arD)
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
return A.i($async$arD,v)},
arF(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$arF=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arF)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hE9()
w=4
return A.b(C.arC(),$async$arF)
case 4:r=h
q=B.a.i(e)
p=B.dJ.aJ(t)
J.aF(r,s,A.F(["ownerEmail",q,"projectId",f,"payload",B.cT.gcw().aJ(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(C.arD(r),$async$arF)
case 5:u=new A.a_E("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arF,v)},
arE(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$arE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c3(),$async$arE)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.arC(),$async$arE)
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
return A.b(C.arD(q),$async$arE)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arE,v)},
h8C(){var w=new A.S(Date.now(),0,!1).a6()
return"wst_"+(1000*w.a+w.b)+"_"+B.cI.aC(999999)},
hEb(d){var w,v,u,t,s,r,q
try{w=A.afT(d)
if(w==null)return d
v=w
if(J.KZ(v)>960||J.KY(v)>960){s=v
r=J.KZ(v)>=J.KY(v)?960:null
v=A.afS(s,J.KY(v)>J.KZ(v)?960:null,B.NN,r)}s=v
u=A.als(82).SD(s,B.yw)
if(J.ad(u)===0)return d
s=new Uint8Array(A.ce(u))
return s}catch(q){t=A.aa(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cfd(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cfd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hEb(e)
$.cf9.n(0,s,t)
u=C.bCm(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfd,v)},
b1r(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1r=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d_(l,"data:image")){u=null
w=1
break}t=4
r=J.f0(l,",")?B.d.gal(J.lp(l,",")):l
q=B.cG.aJ(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.h8C()
w=7
return A.b(C.cfd(p,q),$async$b1r)
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
return A.i($async$b1r,v)},
cfa(d){var w=0,v=A.j(x.T),u,t,s
var $async$cfa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cfc(s),$async$cfa)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cT.gcw().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfa,v)},
a7Y(d){var w=0,v=A.j(x.H),u,t
var $async$a7Y=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hli(d)
if(t==null){w=1
break}$.cf9.W(0,t)
w=3
return A.b(C.bCl(t),$async$a7Y)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a7Y,v)},
bCm(d,e){return C.i4j(d,e)},
i4j(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bCm=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aMR
w=7
return A.b(n==null?$.aMR=I.fWr():n,$async$bCm)
case 7:r=g
q=new Uint8Array(A.ce(e))
p=J.mF(r,"thumbs","readwrite")
B.iD.mg(J.mD(p,"thumbs"),q,l)
w=8
return A.b(J.pq(p),$async$bCm)
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
return A.i($async$bCm,v)},
bCl(d){return C.i4h(d)},
i4h(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bCl=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aMR
w=7
return A.b(o==null?$.aMR=I.fWr():o,$async$bCl)
case 7:r=f
q=J.mF(r,"thumbs","readwrite")
B.iD.Fw(J.mD(q,"thumbs"),m)
w=8
return A.b(J.pq(q),$async$bCl)
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
return A.i($async$bCl,v)}},D,Ak,Al,A1,Am,An,Ao,I
J=c[1]
A=c[0]
B=c[2]
A2=c[77]
N=c[235]
S=c[150]
A3=c[219]
G=c[200]
F=c[31]
E=c[210]
O=c[100]
A4=c[221]
A5=c[105]
A6=c[188]
T=c[118]
U=c[106]
A7=c[218]
A8=c[37]
M=c[217]
A9=c[80]
H=c[87]
Aa=c[157]
Ab=c[114]
V=c[160]
W=c[231]
X=c[189]
Ac=c[180]
Ad=c[192]
Y=c[187]
Ae=c[65]
Af=c[71]
Ag=c[236]
Z=c[204]
Ah=c[30]
Ai=c[107]
K=c[182]
Aj=c[193]
A_=c[234]
A0=c[227]
P=c[108]
Q=c[96]
L=c[134]
R=c[69]
C=a.updateHolder(c[6],C)
D=c[230]
Ak=c[70]
Al=c[198]
A1=c[233]
Am=c[232]
An=c[97]
Ao=c[56]
I=c[54]
C.anB.prototype={}
C.aXM.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bf_(),f=h.x!=null&&h.yP(i).length===0
if(h.x!=null)w=f?B.aZ:B.bI
else w=h.gTf()?B.bI:B.dT
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.be3,B.q,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.eIQ,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h6,i,i,i),B.S,D.fb7,B.at,A.d(C.wB(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.f73,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.aZy,i,i,i,i,B.Yk,i,i,i)
q=A.m(16)
p=A.I(B.aL,B.q,1)
o=A.I(B.aZ.j(0.28),B.q,1)
n=A.fYp(h.d)
o=A.p(B.A,C.aXL(A.fvW(h.e,n),30),B.f,i,i,new A.o(B.lF,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.f2v,B.L,i,i)
m=A.m(14)
l=A.I(B.aL,B.q,1)
q=A.p(i,A.v(A.a([o,B.N,n,B.bB,D.fbp,B.ac,A.p(i,A.v(A.a([D.fqG,B.bB,A.d(A.Aw(h.c),i,i,i,i,i,i,D.eYw,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.f_,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,K.agY,i,i,i)
p=A.m(16)
m=A.I(B.aL,B.q,1)
l=j.aPx("Original due",C.wB(h.r,!1))
n=j.aPx("Current due",C.wB(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.p(i,A.v(A.a([l,B.N,n,B.S,A.p(i,A.d(h.gaJJ(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.AV,i,i,1/0),B.S,j.cda(),B.N,j.c0Q(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bk,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aL,B.q,1)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fcl,B.at,A.d(q,i,i,i,i,i,i,D.f1N,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bk,i,i,1/0)],s))}if(h.gaEA()){q=A.m(14)
o=A.I(B.cq,B.q,1.6)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.frY,B.N,A.bw(A.m(12),A.el(new A.a7(1/0,88,A.b3(i,i,i,new A.Vt(h.ax,B.M,D.eMA,!0,3.5,i),B.au),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.F5,i,i,i)],s))}p.push(B.aA)
p.push(D.fkf)
return A.p(i,A.v(A.a([r,new A.D(B.ah0,A.v(p,B.aj,i,B.e,B.j,0,B.p),i)],s),B.aj,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aPx(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.a7A,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eZv,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
cda(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a8D(B.dT,u,"Not paid yet")
w=t.yP(null).length
v=w===0?B.aZ:B.bI
return this.a8D(v,u,C.wB(t.x,!0))},
c0Q(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a8D(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a8D(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a7A,u,u,u)
v=A.U(d).k("K<1,hi>")
v=A.B(new A.K(d,new C.c11(),v),v.k("ak.E"))
return A.v(A.a([w,B.an,A.bW(B.bz,v,B.bq,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a8D(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.a7A,w,w,w),1),new A.dq(1,B.cn,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dM,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b9U.prototype={
a5(d,e){new A.Vt(this.b,B.M,e,!0,3.5,null).a5(d,e)},
ar(d){return d.b!==this.b}}
C.anI.prototype={
R(){return new C.aBY(A.a([],x.bp))},
gdZ(){return this.c}}
C.aBY.prototype={
a_(){this.a1()
this.In()},
In(){var w=0,v=A.j(x.H),u,t=this,s
var $async$In=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1q(t.a.c),$async$In)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dF8(t,s))
case 1:return A.h(u,v)}})
return A.i($async$In,v)},
aRu(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aP,s=A.l(v,v,u?B.br:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.br:B.bn).j(0.22)
w=A.m(10)
return A.br(v,new A.b4(4,r,new A.ay(u,1,B.q,-1)),v,B.bk,v,v,v,v,!0,new A.b4(4,w,new A.ay((this.a.d.a?B.br:B.bn).j(0.22),1,B.q,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.m(10),D.aX9),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aRt(d){return this.aRu(d,null)},
OY(d){return this.cgK(d)},
cgK(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OY=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Gl:B.eG
w=7
return A.b(new A.hX().BS(72,900,900,n),$async$OY)
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
if(d)q=B.cY
else q=s.a.d.a?B.br:B.bn
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.aB,r,r,r,r,r,r,r,r,12.5,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cY
else u=s.a.d.a?B.br:B.bn
t=x.p
u=A.E(A.v(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a5,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fv(r,r,r,r,r,r,r,r,r,r,r,B.cY,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cb)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cC,s.a.d.a?B.br:B.bn,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cb))
return A.p(r,A.A(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.kl,D.bpP,r,r,r)},
CS(d){return this.byc(d)},
byb(){return this.CS(null)},
byc(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CS=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
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
if(a3){a4=new A.S(Date.now(),0,!1).bQ(6048e8)
m=A.c1(a4.gcj(),a4.gce(),a4.gcu(),0,0,0,0,0)}else{a4=a5.f
m=A.c1(a4.gcj(),a4.gce(),a4.gcu(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bn(a4,!0,x.cT)
i=a3?null:A.fYp(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.w_?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hS(B.w.j(0.55),!0,"Dismiss",a4,new C.dES(),new C.dET(a2,t,a5,r,new C.dEU(a2,t),o,n,j),B.eE,!0,x.y),$async$CS)
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
break}if(f.length===0||e<=0){t.c.I(x.q).f.S(D.eSV)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.S(D.eRA)
w=1
break}a1=A.fvW(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.w_?"male":"female"
w=7
return A.b(A.ahg(a3,A.h5l(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$CS)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.w_?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a9(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c1(a3.gcj(),a3.gce(),a3.gcu(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcj(),a4.gce(),a4.gcu(),0,0,0,0,0)))a5.cJt(a2.a)
w=8
return A.b(A.ahg(t.a.c,a5),$async$CS)
case 8:case 5:w=9
return A.b(t.In(),$async$CS)
case 9:case 1:return A.h(u,v)}})
return A.i($async$CS,v)},
aS5(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cY.j(0.14)
else w=this.a.d.a?B.M:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cY
else s=(this.a.d.a?B.br:B.bn).j(0.2)
s=A.I(s,B.q,g?1.5:1)
r=C.aXL(d,18)
if(g)q=B.cY
else q=this.a.d.a?B.aP:B.aB
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,A.p(p,A.A(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.bb,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ag)},
RC(d){return this.cy9(d)},
cy9(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$RC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hS(B.w.j(0.55),!0,"Dismiss",s,new C.dFb(),new C.dFc(t,d),B.hX,!0,x.y),$async$RC)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.S(s,0,!1)
case 4:w=7
return A.b(A.ahg(t.a.c,d),$async$RC)
case 7:w=8
return A.b(t.In(),$async$RC)
case 8:case 1:return A.h(u,v)}})
return A.i($async$RC,v)},
NC(d,e){return this.bIX(0,e)},
bIX(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.l2(s,"Cancel","Delete",e.b+" \xb7 "+A.Aw(e.c)+" will be removed from this device.","Delete this debt?"),$async$NC)
case 3:if(!g){w=1
break}w=4
return A.b(C.fq1(t.a.c,e.a),$async$NC)
case 4:w=5
return A.b(t.In(),$async$NC)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NC,v)},
ae6(d){return this.caD(d)},
caD(d){var w=0,v=A.j(x.H),u=this,t
var $async$ae6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bR(B.K,null,new C.dF5(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ae6)
case 2:return A.h(null,v)}})
return A.i($async$ae6,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.e69
w=J.dH(m.d,new C.dFd())
v=A.B(w,w.$ti.k("J.E"))
w=J.dH(m.d,new C.dFe())
u=A.B(w,w.$ti.k("J.E"))
t=B.d.cI(v,0,new C.dFf())
w=A.m(18)
s=m.a.d.a
r=s?D.cmF:D.axb
q=A.I(s?B.cY.j(0.35):B.cY.j(0.18),B.q,1)
s=A.p(l,D.bPe,B.f,l,l,new A.o(B.cY.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.av,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aB,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a1,!0,A.m(12),A.aL(!1,A.m(12),!0,D.e5y,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dFg(m),l,l,l,l,l,l,l),B.f,B.cY,0,l,l,l,l,l,B.ag)],p),B.m,l,B.e,B.j,0,l,l)
o=A.E(m.cuo("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Aw(t)
r=A.a([A.p(l,A.v(A.a([s,B.ac,A.A(A.a([o,B.ab,A.E(m.b55(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.ax,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.agU,l,l,l),B.aA],p)
if(J.cm(m.d)){w=m.a.d.a
s=w?B.dX:B.c
q=A.m(18)
o=A.I((w?B.br:B.bn).j(0.12),B.q,1)
n=A.p(l,D.bK9,B.f,l,l,new A.o(B.cY.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aB,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.ac,w,B.at,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.br:B.bn,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bsd,l,l,1/0))}else{w=m.gcg2()
s=A.B(new A.K(v,w,A.U(v).k("K<1,r>")),x.l)
if(u.length!==0){q=A.a([B.an,new A.D(D.btS,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.br:B.bn,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.K(u,w,A.U(u).k("K<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.aj,l,B.e,B.j,0,B.p)},
b55(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.br:B.bn).j(0.12),B.q,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.br:B.bn,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cY
else w=v.a.d.a?B.aP:B.aB
return A.p(u,A.v(A.a([q,B.bB,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ei,u,u,u)},
cuo(d,e){return this.b55(!1,d,e)},
cg3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.yP(j).length,h=d.beb()
if(d.x!=null){w=d.yP(j).length
v=w===0?B.cY:B.bI}else if(d.gTf())v=B.bI
else{if(h)w=B.cY
else w=k.a.d.a?B.br:B.bn
v=w}if(d.x!=null){w=d.yP(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wB(u,!1)}else{u.toString
t="Paid "+C.wB(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wB(w,!1)+" \xb7 "+i+" missed":"Due "+C.wB(w,!1)}w=k.a.d.a?B.dX:B.c
u=A.m(18)
if(d.gTf()&&d.x==null)s=B.bI.j(0.35)
else s=(k.a.d.a?B.br:B.bn).j(0.12)
s=A.I(s,B.q,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bm:B.lF
o=A.I(d.gTf()&&d.x==null?B.bI.j(0.45):B.cY.j(0.28),B.q,1.4)
n=d.x!=null?0.55:1
m=A.fYp(d.d)
o=A.p(B.A,A.dc(C.aXL(A.fvW(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.aB
m=x.p
n=A.a([new A.dq(1,B.cn,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaEA())B.d.v(n,A.a([B.ec,A.X(B.MS,B.cY.j(0.8),j,j,j,14)],m))
p=A.E(A.v(A.a([A.A(n,B.m,j,B.e,B.j,0,j,j),B.cS,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.Aw(d.c)
l=k.a.d.a?B.aP:B.aB
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aG(!1,B.a1,!0,j,A.aL(!1,q,!0,new A.D(W.agE,A.A(A.a([o,B.bf,p,B.ab,A.v(A.a([n,B.bB,A.X(B.ex,(k.a.d.a?B.br:B.bn).j(0.5),j,j,j,18)],m),B.dz,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dF7(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ag),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.db,j,j,j,j)}}
C.u5.prototype={}
C.ak3.prototype={
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
n.push(A.aE(a0,A.p(a0,A.X(B.cC,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a8))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iU,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.atH,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.Fm,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f4(m,A.A(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.eh)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bp2,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cF:B.bl,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fq,A.v(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.eNk)
a2=A.a([A.A(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.vh,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a3,B.a7,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lf,A.v(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.q,1),a2,a0,a0,B.n),a0,a0,a0,B.hk,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.ax,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bqe,a0,a0,a0,a0)}}
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
if(p.z)o.push(new A.D(B.ve,n,q))
return new A.D(B.db,A.v(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.Sg.prototype={
R(){return new C.bdw()}}
C.bdw.prototype={
gbWW(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.e64,D.e6a],l)
for(w=0;w<8;++w){v=D.a1k[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.G5:B.BD
q=t===s
r=A.X(r,q?B.eA:B.c1,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.x(v.b,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bD(1,B.bh,new A.x(v.c,n,A2.D9,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aT(24,24)
p=new A.ay(B.eA,2,B.q,-1)
s=new A.o(n,n,new A.bO(p,p,p,p),new A.bp(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aE(n,new A.D(B.eF,A.v(A.a([new A.D(B.mn,new A.cn(B.aO,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.DE(!0,new C.ak3(v,q.d,q.e,new C.d4X(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d4Y(o,v),n,n,n,n,n,n,!1,B.a8))}k.push(new A.D(D.bqx,A.bH(D.fxf,new C.d4Z(o,d),A.bm(B.b7,n,n,n,n,B.oc,n,n,new A.b7(A.m(16),B.Y),n,n,n)),n))
return A.bl(!0,new A.cS(new A.aY(0,1/0,0,m.a.b*0.9),A.cz(k,n,D.buK,n,n,B.ah,!0),n),!0,!1,B.af,!0,!0)}}
C.n9.prototype={
ag(){var w=this
return A.F(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a6().ac()],x.N,x.z)},
baS(d,e,f){return new C.n9(this.a,e,d,f)}}
C.Hf.prototype={
wb(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Hf(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aCN(d){var w=null
return this.wb(w,w,w,w,w,d,w,w,w,w,w,w)},
cFh(d){var w=null
return this.wb(w,w,w,w,d,w,w,w,w,w,w,w)},
baQ(d,e,f){var w=null
return this.wb(d,w,w,w,w,w,w,w,e,w,f,w)},
cFW(d){var w=null
return this.wb(w,w,w,w,w,w,d,w,w,w,w,w)},
cG4(d){var w=null
return this.wb(w,w,w,w,w,w,w,w,w,d,w,w)},
cFf(d){var w=null
return this.wb(w,w,w,d,w,w,w,w,w,w,w,w)},
cG6(d){var w=null
return this.wb(w,w,w,w,w,w,w,w,w,w,w,d)},
cFc(d){var w=null
return this.wb(w,w,d,w,w,w,w,w,w,w,w,w)},
cF7(d){var w=null
return this.wb(w,d,w,w,w,w,w,w,w,w,w,w)},
Fp(d){var w=null
return this.wb(w,w,w,w,w,w,w,d,w,w,w,w)},
cGe(d,e,f,g,h,i,j,k,l,m,n){return this.wb(d,e,f,g,null,h,i,j,k,l,m,n)},
ag(){var w=this
return A.F(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cCV(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bMV(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Ch.gec(D.Ch))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a2R)
q=l.$2("frame",D.a2i)
l=l.$2("texture",D.a2d)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cGe(p,u,t,q,r,A.qI(d.h(0,"ribbon"))?A.FL(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.YP.prototype={
R(){return new C.az1(A.a([],x.I),D.Mq)},
gdZ(){return this.c}}
C.az1.prototype={
a_(){var w,v=this
v.a1()
v.f=A.zk(0,1)
w=$.aw()
v.z=new A.ar(B.as,w)
v.Q=new A.ar(B.as,w)
v.kQ()
w=v.a
C.bAK(w.c,w.d).bA(new C.d5D(v),x.fL)},
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
break}t.m(new C.d5r(t,r))
t.auF()
case 1:return A.h(u,v)}})
return A.i($async$kQ,v)},
gari(){var w,v=this
if(!J.cm(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
auF(){var w,v,u=this.gari(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saV(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saV(0,w==null?"":w)},
c93(d){this.m(new C.d5o(this,d))
this.auF()},
MY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$MY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.n9(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aPJ(r.c,r.d,s),$async$MY)
case 3:w=4
return A.b(t.kQ(),$async$MY)
case 4:if(t.c==null||J.cm(t.d)){w=1
break}q=J.qa(t.d,new C.d5_(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d50(t,p))
t.auF()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.AU(p+1,B.ct,B.kL),$async$MY)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$MY,v)},
AA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gari()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aPJ(o.c,o.d,new C.n9(s,r,q,new A.S(p,0,!1))),$async$AA)
case 3:w=4
return A.b(t.kQ(),$async$AA)
case 4:if(t.c==null){w=1
break}t.m(new C.d5s(t))
case 1:return A.h(u,v)}})
return A.i($async$AA,v)},
ND(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ND=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gari()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d58(r),s,null,!0,!0,x.y),$async$ND)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bAv(s.c,s.d,r.a),$async$ND)
case 4:t.m(new C.d59(t))
w=5
return A.b(t.kQ(),$async$ND)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Ti(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$ND,v)},
y8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$y8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AA(),$async$y8)
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
return A.b(C.Qx(s,r.r,o,p,q),$async$y8)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a5(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hlL(s,r.x,r.r),$async$y8)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Ks(s.c,s.d),$async$y8)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.J(l,new C.n9(""+(m+k),q,B.a.i(j.b),new A.S(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.AF(r.c,r.d,l),$async$y8)
case 11:w=12
return A.b(t.kQ(),$async$y8)
case 12:r=t.c
if(r==null){w=1
break}r.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$y8,v)},
a_T(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_T=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AA(),$async$a_T)
case 5:case 4:if(t.c==null){w=1
break}s=t.gy6(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dL(D.yD,new C.d5p(t),new C.d5q())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mp("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gT(o)
p.push(new F.mp(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.h_0(o,new F.rd(s,r,"",p,new F.uo(q.d,null,null,null,null,"","","")),null),$async$a_T)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a_T,v)},
Nl(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Nl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AA(),$async$Nl)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bR(D.acf,null,new C.d54(t),s,!0,!0,!0,Q.a5N,!1,!1,x.N),$async$Nl)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cFh(r)
t.m(new C.d55(t,q))
s=t.a
w=7
return A.b(C.R5(s.c,s.d,q),$async$Nl)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Nl,v)},
Wu(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bR(D.acf,null,new C.d5a(t),r,!0,!0,!0,Q.a5N,!1,!1,x.e),$async$Wu)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d5b(t,s))
r=t.a
w=4
return A.b(C.R5(r.c,r.d,s),$async$Wu)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.AU(0,B.dU,B.oA)
case 1:return A.h(u,v)}})
return A.i($async$Wu,v)},
bO9(d){var w=d.bS(),v=B.a.aT(B.o.u(w.gce()),2,"0"),u=B.a.aT(B.o.u(w.gcu()),2,"0")
return""+w.gcj()+"-"+v+"-"+u},
gy6(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bWb()
if(r.e)w=D.ab2
else if(J.cm(r.d)){w=r.y
v=r.gy6(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eXZ,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.D(A0.ahV,new C.Y7(w,v,0,q),q),q),B.by,t,B.an,A.d(u,q,q,q,q,q,q,A.l(q,q,D.ke.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aE(q,A.p(q,D.eIG,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dP.j(0.45),B.J,18)],x.V),E.vP,B.n),q,q,q,q,B.Yu,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcC2(),q,q,q,q,q,q,!1,B.a8))
w.push(B.S)
w.push(A.he(D.bGp,D.fwJ,r.gaLs(),q))
B.d.v(u,w)}w=A.av(A.cd(A.v(u,B.m,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.ew,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.ke.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.P,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dQ:B.A3
u=A.v(A.a([new A.D(D.brx,w,q),A.E(A.Iz(v,new C.d5B(r),J.ad(r.d)+1,q,r.gc92(),u,B.aO),1),r.bB3()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c8(q,D.ady,new A.an(B.W,q,B.b0,B.r,A.a([D.aKp,A.bl(!0,A.v(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bWb(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cy(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Jz(B.dW,"AI",h.gbyZ(),!0))
if(h.a.f)f.push(new C.Jz(B.nf,"Cover",h.gbJw(),!1))
if(h.a.f)f.push(new C.Jz(B.yg,"Header",h.gbEu(),!1))
if(J.cy(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Jz(B.tU,"Print",h.gci3(),!1))
if(h.a.f&&J.cy(h.d)&&h.r>=0){v=h.w
u=v?B.hz:B.jg
t=v?"Save":"Edit"
f.push(new C.Jz(u,t,v?h.gcoh():new C.d5l(h),!1))}if(h.a.f)f.push(new C.Jz(B.hy,"Add page",h.gaLs(),!1))
v=C.hhZ(h.y.Q)
u=h.gy6(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.dna
else{k=new A.aT(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.jO.j(0.5),1,B.q,-1)
j=A.p(g,A.X(l.a,D.ke,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bO(i,i,i,i),new A.bp(k,k,k,k),g,new A.a8(B.a3,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.ke.j(0.85)
p.push(new A.bD(1,B.bh,A.aE(B.c4,A.v(A.a([k,B.bB,new A.x(l.b,g,new A.G(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a8),g))}return new C.ak3(v,u,t+" \xb7 "+s+" "+r,new C.d5m(h),A.A(p,B.m,g,B.e,B.j,0,g,g),g)},
zA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AA(),$async$zA)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=F.a1F(B.d.aI(s," "))
s=t.c
s.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.d51(t,p),s,null,!0,!0,x.N),$async$zA)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.y8(),$async$zA)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Ds(),$async$zA)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.F2("Swahili (Kiswahili)",!0),$async$zA)
case 18:w=16
break
case 17:w=19
return A.b(t.cyN(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zA)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zA,v)},
Ym(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(E.jO.j(0.3),B.q,1),r=x.p
return new A.D(B.cB,A.aL(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.vP,B.a6),w,42,w,w,w,w,w,42),B.bf,A.E(A.v(A.a([A.d(f,w,w,w,w,w,w,A9.Tg,w,w,w),A.d(g,w,w,w,w,w,w,O.Ta,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d5n(d,h),w,w,w,w,w,w,w),w)},
Ds(){return this.bNE()},
bNE(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Ds=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d5e(r),a7,null,!0,!0,x.ei),$async$Ds)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eS("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.ca(null,null,!1,null,new C.d5f(o),a7,null,!0,!0,x.H).fe(new C.d5g(a6))
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
for(a1=0;a1<8;++a1){i=D.yD[a1]
J.ch(j,i.a)}w=8
return A.b(C.agr(a0,a7,new C.d5h(o),d,l,e,j),$async$Ds)
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
if(l!=null&&a6.a)A.a5(l,!0).eK()
l=o
l.shU($.aw())
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
a7=j.baS(m.b.h(0,a4).b,a7,new A.S(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.AF(j.c,j.d,l),$async$Ds)
case 11:w=12
return A.b(r.kQ(),$async$Ds)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.yD[a1].a)
a5=l.cCV(j,12,a7)
l=r.a
w=15
return A.b(C.R5(l.c,l.d,a5),$async$Ds)
case 15:if(r.c!=null)r.m(new C.d5i(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.AU(0,B.dU,B.oA)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.I(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.S(A.b2(a3?A.cqh("Undo",new C.d5j(r,p,f),null):null,null,null,null,null,B.r,null,j,null,B.ee,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ds,v)},
F2(d,e){return this.cyO(d,e)},
cyN(d){return this.F2(d,!1)},
cyO(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$F2=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eS("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.ca(null,null,!1,null,new C.d5u(a0),k,null,!0,!0,x.H).fe(new C.d5v(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.ch(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a1S(m,new C.d5w(a0)),$async$F2)
case 10:w=8
break
case 9:w=11
return A.b(C.bCd(new C.d5x(a0),m,a2),$async$F2)
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
if(o!=null&&f.a)A.a5(o,!0).eK()
o=a0
o.shU($.aw())
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
o.push(k.baS(J.q(p,g).b,j.a,new A.S(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.AF(k.c,k.d,o),$async$F2)
case 12:w=13
return A.b(r.kQ(),$async$F2)
case 13:o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.S(A.b2(A.cqh("Undo",new C.d5y(r,d),null),null,null,null,null,B.r,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$F2,v)},
bB3(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d52(v):u
r=A.aH(u,u,u,u,A.X(D.bC7,s?D.ke:B.b2,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cy(v.d)&&!v.w&&v.r>=0)s=A.he(A.X(B.vt,B.EK,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.EK,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbJ5(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.ke.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.av(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d53(v):u
return A.bl(!0,new A.D(D.brl,A.A(A.a([r,s,A.aH(u,u,u,u,A.X(B.ex,t<J.ad(v.d)?D.ke:B.b2,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.YT.prototype={
R(){return new C.bdR(new A.ar(B.as,$.aw()))}}
C.bdR.prototype={
ga10(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a2()},
gbMo(){var w,v=this.ga10()
A:{if("cover"===v){w=D.cSI
break A}if("book"===v){w=D.cOw
break A}w=D.dfS
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jO.j(0.5),n=x.p,m=A.A(A.a([D.dnb,B.av,D.bwJ,A.aH(q,q,q,q,B.lm,q,q,q,new C.d7n(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.j5(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d7o(r),r.ga10()==="page",q,q,q,q))
if(r.a.d)l.push(A.j5(q,q,q,D.frt,q,new C.d7p(r),r.ga10()==="book",q,q,q,q))
l.push(A.j5(q,q,q,D.feX,q,new C.d7q(r),r.ga10()==="cover",q,q,q,q))
l=A.bW(B.bz,l,B.bq,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.T,!1,q,!0,B.r,q,A.aN(),r.d,q,q,q,q,q,2,A.br(q,new A.b4(4,A.m(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kA,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dm,!0,B.a4,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbMo(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mG(q,B.c.j(0.08),new A.x(s,q,B.IO,q,q,q,q,q,q,q,q,q),B.hD,new C.d7r(r,s),q,q,q,q))}return A.eI(q,E.Az,A.cd(A.v(A.a([m,B.S,D.fuG,B.an,l,B.ac,k,B.N,A.bW(B.bz,w,B.bq,6,6),B.aA,A.dk(D.bGm,D.fvr,new C.d7s(r,d),A.bm(B.b7,q,q,q,q,B.oc,q,q,new A.b7(A.m(16),B.Y),q,q,q)),B.at,D.fpP],n),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.fz,q,q,B.ah),q,q,q,D.ahE,B.d0,q,new A.b7(p,new A.ay(o,1.4,B.q,-1)),q)}}
C.YR.prototype={
R(){return new C.az2(A.a([],x.Y))},
gdZ(){return this.c}}
C.aed.prototype={}
C.az2.prototype={
a_(){this.a1()
this.kQ()},
kQ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.QA(p.c,p.d),$async$kQ)
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
return A.b(C.bAK(r.c,q),$async$kQ)
case 6:j=e
i=J
w=7
return A.b(C.Ks(t.a.c,q),$async$kQ)
case 7:m.push(new l.aed(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d5S(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kQ,v)},
b6g(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
PE(d,e){return this.caB(0,e)},
caB(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$PE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a5(s,!1).c8(A.e9(new C.d5R(u,e),!0,null,x.y)),$async$PE)
case 2:t=g
w=3
return A.b(u.kQ(),$async$PE)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.S(D.aNN)
return A.h(null,v)}})
return A.i($async$PE,v)},
F5(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$F5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.S(D.aNJ)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.afL(s.c,s.d),$async$F5)
case 5:q=e
w=6
return A.b(t.kQ(),$async$F5)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.PE(0,B.d.iH(t.d,new C.d5W(q))),$async$F5)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Qx(p,s.f,r,n,o),$async$F5)
case 10:m=e
w=11
return A.b(t.kQ(),$async$F5)
case 11:if(m&&t.c!=null)t.c.I(x.q).f.S(D.aNN)
case 1:return A.h(u,v)}})
return A.i($async$F5,v)},
P8(d,e){return this.cm_(0,e)},
cm_(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$P8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d5V(t,e),s,null,!0,!0,x.y),$async$P8)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a24(s.c,s.d,e.a),$async$P8)
case 4:w=5
return A.b(t.kQ(),$async$P8)
case 5:case 1:return A.h(u,v)}})
return A.i($async$P8,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bB6(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(E.jO.j(0.6),B.q,1.6)
r=t===1?"space":"spaces"
k.push(A.aE(n,new A.fG(0.7142857142857143,A.p(n,A.v(A.a([D.dnc,B.ac,D.e5d,B.at,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.ke.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.bb,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcBZ(),n,n,n,n,n,n,!1,B.a8))}w=A.m(22)
v=A.I(E.jO.j(0.85),B.q,1.6)
s=A.aE(n,A.p(n,D.bO1,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jO.j(0.6),B.q,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d5X(d),n,n,n,n,n,n,!1,B.a8)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.jO.j(0.5),B.q,1)
w=A.p(n,A.A(A.a([s,B.bf,D.bx4,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eX4,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h6,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bTD,B.n),n,n,n,Am.LT,D.bpu,n,n,n)
if(o.e)k=D.ab2
else k=k.length===0?D.b3w:A.cp(new C.d5Y(k))
return A.c8(n,D.ady,new A.an(B.W,n,B.b0,B.r,A.a([D.aKp,A.bl(!0,A.v(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bB6(d){var w,v,u=this,t=null,s=u.b6g(d),r=d.c,q=x.p,p=A.a([A.bZ(0,A.f4(B.A,new A.a7(300,420,new C.Y7(d.b,s,r,t),t),B.f,B.du),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aE(t,A.p(t,D.bNk,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b2,B.q,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d5P(u,d),t,t,t,t,t,t,!1,B.a8),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.eWF,t,t,t)
v=r===1?"page":"pages"
return A.aE(t,A.v(A.a([new A.fG(0.7142857142857143,new A.an(B.W,t,B.aa,B.r,p,t),t),B.N,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.ke.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d5Q(u,d),t,t,t,t,t,t,!1,B.a8)}}
C.Jz.prototype={}
C.Y7.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dL(D.yD,new C.cEx(m),new C.cEy()),j=m.c,i=D.Ch.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.lT:B.bb
v=new C.cEz(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.e2x,28)],x.V)
u=x.p
t=A.a([A.bZ(0,A.b3(l,l,l,new C.bb6(j.x,h,l),B.au),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a3,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aT(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bp(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.ahW,8,0.85,2.2),v.$4(D.bua,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.ahW,8,0.85,2.4))
else if(r==="corners")t.push(A.bZ(0,new A.D(D.bu6,A.b3(l,l,l,new C.baY(h,l),B.au),l),0,0,0))
r=A.X(D.awi[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.atH,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cF,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aQ,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bZ(0,new A.D(D.buC,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aG1(l),D.eMt),l,l,l,46,0,l))
return A.p(l,A.bw(D.a9K,new A.an(B.W,l,B.aa,B.r,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.a9K,i,new A.a8(B.ax,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bb6.prototype={
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
C.baY.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.W(),k=A.M(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bO
for(w=e.a,v=e.b,v=[D.eDJ,new A.cI([w,0,-1,1]),new A.cI([0,v,1,-1]),new A.cI([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
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
C.u6.prototype={}
C.Yp.prototype={
R(){return new C.bb4()}}
C.bb4.prototype={
go0(){var w=this.d
return w===$?this.d=this.a.c:w},
gy6(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ar(new A.bb(w.b,B.b4,B.aN),$.aw())}return v},
gaA1(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ar(new A.bb(w.c,B.b4,B.aN),$.aw())}return v},
gapS(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ar(new A.bb(w.y,B.b4,B.aN),$.aw())}return v},
q(){var w=this,v=w.gy6(0),u=v.U$=$.aw()
v.P$=0
v=w.gaA1()
v.U$=u
v.P$=0
v=w.gapS()
v.U$=u
v.P$=0
w.a2()},
aqt(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.j5(s,s,s,new A.x(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cXZ(this,f,u),e===u,s,s,s,s))}return A.bW(B.bz,r,B.bq,6,8)},
aw6(d){var w=null,v=B.c.j(0.07)
return A.br(w,new A.b4(4,A.m(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.kz,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.go0(),a0=f.gy6(0),a1=a0.a.a,a2=f.gaA1(),a3=a2.a.a,a4=f.gapS(),a5=d.baQ(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a7(190,260,A.f4(B.A,new A.a7(270,370,new C.Y7(a5,d,f.a.e,e),e),B.f,B.du),e),e,e,e)
a0=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a0,e,e,e,e,e,2,f.aw6("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYn(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dm,!0,B.a4,e,B.am,e,e,e,e)
a2=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a2,e,e,e,e,e,2,f.aw6("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYo(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dm,!0,B.a4,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.yD[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b2
q=r.a===q
o=new A.ay(p,q?3:1,B.q,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bO(o,o,o,o),e,e,new A.a8(B.ax,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.az
v.push(A.aE(e,A.v(A.a([p,B.cS,new A.x(t.b,e,new A.G(!0,q,e,e,e,e,10.5,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYp(f,t),e,e,e,e,e,e,!1,B.a8))}v=A.bW(B.bz,v,B.bq,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b7.j(0.35):B.c.j(0.07)
m=new A.aT(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eA:B.K,2,B.q,-1)
q.push(A.aE(e,A.p(e,A.X(D.awi[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bO(o,o,o,o),new A.bp(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYq(f,n),e,e,e,e,e,e,!1,B.a8))}q=A.bW(B.bz,q,B.bq,8,8)
a4=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a4,e,e,e,e,e,2,f.aw6("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYr(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dm,!0,B.a4,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mI,e,e,e)
m=A.a([],w)
for(l=D.Ch.gdK(D.Ch),l=l.gaf(l);l.C();){k=l.gT(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eA:B.b2
g=r.e===i
o=new A.ay(h,g?3:1,B.q,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bO(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.az
m.push(A.aE(e,A.v(A.a([j,B.bB,new A.x(i,e,new A.G(!0,h,e,e,e,e,10,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYs(f,k),e,e,e,e,e,e,!1,B.a8))}m=A.bW(B.bz,m,B.bq,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mI,e,e,e)
k=f.go0()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bl(!0,new A.cS(new A.aY(0,1/0,0,a1.a.b*0.92),A.cz(A.a([D.fph,B.ac,d,B.aQ,a0,B.S,a2,B.aA,D.fvf,B.N,v,B.aA,D.fpr,B.N,q,B.aA,a4,B.aA,p,B.N,m,B.aA,l,A.kX(e,9,""+B.k.V(f.go0().f),36,18,new C.cYt(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mI,e,e,e),B.an,f.aqt(D.a2R,f.go0().r,new C.cYu(f),D.dj2),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mI,e,e,e),B.an,f.aqt(D.a2i,f.go0().w,new C.cYv(f),D.dj7),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mI,e,e,e),B.an,f.aqt(D.a2d,f.go0().x,new C.cYx(f),D.dkx),B.an,A.iE(e,B.b7,e,B.af,e,new C.cYy(f),e,e,e,D.fjL,f.go0().z),B.by,A.bH(D.fo7,new C.cYz(f,a6),A.bm(B.b7,e,e,e,e,B.oc,e,e,new A.b7(A.m(16),B.Y),e,e,e))],w),e,An.Yi,e,e,B.ah,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aG1.prototype={
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
u.saq(D.bUh.av(0,new A.a9(0,0,0+w,0+v)))
d.aO(t,u)},
ar(d){return!1}}
C.bgk.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=A.M()
w.saq(D.bTj.av(0,new A.a9(0,0,a3,a4)))
a5.aZ(new A.a9(0,0,a3,a4),w)
v=B.k.dw(a2/112)
u=new A.eL()
u.dB(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cSH[u.aC(9)]
j=u.aC(14)
J.bz(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a9(n,j,n+m,j+l)
h=A.bx(i,B.hc)
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
j=u.aC(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.saq(D.bSH.av(0,new A.a9(0,r,a3,q)))
d=p.H()
w.drawRect(A.c0(new A.a9(0,r,a3,q)),d)
d.delete()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.jk
d=p.H()
w.drawRect(A.c0(new A.a9(0,q,a3,q+14)),d)
d.delete()}w=A.M()
w.r=D.b6U.j(0.72).gp(0)
a5.aZ(new A.a9(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.M()
a4.saq(new A.bT(B.A,0.5,B.x,a0,0,A.a([D.bdE.j(0.22),B.K],t),a0,a0).av(0,A.bU(new A.u(w,a2),a1)))
a5.ae(new A.u(w,a2),a1,a4)},
ar(d){return!1}}
C.b9i.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aK(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.kN(new A.o(A.aq(D.ke,D.bi1,w/4),o,new A.bO(B.Y,new A.ay(B.w.j(0.12),1,B.q,-1),B.Y,B.Y),B.JY,o,o,B.n),B.bd,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aG2,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aT(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jO.j(0.6),o,o,new A.bp(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.q0,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aWU,u,D.bUf,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dk,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aG1(o),D.eMo),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aTz(p.y,r,G.it,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.r,o,o,o,o,o,2,A.br(o,B.ez,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.it.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f9l,!0,B.a4,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.it.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.w,o,o,o,o,o,2,A.br(o,B.ez,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.it.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f0x,!0,B.a4,B.zq,B.am,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.f9d,o,o,o),B.at,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.it.j(0.5),o,o,o,o,o,o,o,o,11,B.cF,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.N,A.A(A.a([A.E(A.p(o,o,B.f,D.Ey.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fq,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.Ey.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.Ey.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aA],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.it.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Xn(A.dh(A.a([A.dh(o,o,o,o,o,o,o,o,o,D.f3D,B.a.ap(k,0,1)),A.dh(o,o,o,o,o,o,o,o,o,o,B.a.b1(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.it.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.v(n,B.F,o,B.e,B.j,0,B.p),B.r,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hY,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.it.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.A(A.a([u,A.E(A.p(o,A.bw(B.JY,new A.an(B.W,o,B.aa,B.r,A.a([t,new A.D(D.btE,A.v(s,B.aj,o,B.e,B.j,0,B.p),o),A.ao(0,A.c_(o,new A.o(o,o,o,o,o,new A.a8(B.a3,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bd),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.JY,v,D.bUO,B.n),o,o,o,o,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.r,l,o)}}
C.aoP.prototype={
R(){return new C.aCy(A.a([],x._))},
bp(){return this.r.$0()},
pO(){return this.w.$0()},
gdZ(){return this.c}}
C.aCy.prototype={
a_(){var w,v
this.a1()
this.vI()
w=this.a
v=w.c
if(v.length!==0)C.a6H(v,w.e,w.d.w)},
vx(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h_3(r,t.e,!1,s.w,new C.dTa(u),null,s),$async$vx)
case 2:w=3
return A.b(u.vI(),$async$vx)
case 3:return A.h(null,v)}})
return A.i($async$vx,v)},
a_2(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a_2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h_3(r,t.e,!0,s.w,new C.dT9(u),null,s),$async$a_2)
case 2:w=3
return A.b(u.vI(),$async$a_2)
case 3:return A.h(null,v)}})
return A.i($async$a_2,v)},
vI(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vI=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Au(q.a.c),$async$vI)
case 7:p=e
if(q.c!=null)n=q.e||J.cy(p)
else n=!1
if(n)q.m(new C.dTc(q,p))
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
return A.b(C.Gb(q.a.c).cM(0,B.pF),$async$vI)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dTd(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dTe(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vI,v)},
O7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$O7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.S(D.eQ_)
w=3
return A.b(C.Gb(t.a.c),$async$O7)
case 3:r=e
w=4
return A.b(C.fFH(t.a.c,r),$async$O7)
case 4:q=e
w=5
return A.b(C.Gb(t.a.c),$async$O7)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dT8(t,p))
o=t.c.I(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.S(A.b2(null,null,null,q?B.dy:B.cR,null,B.r,null,s,null,B.mj,null,null,null,null,null,null,null,null,null,null))
t.a.pO()
case 1:return A.h(u,v)}})
return A.i($async$O7,v)},
HD(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i6n(l),$async$HD)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hAV(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aZb(q,p.e,l,"Each family tree costs $"+B.k.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$HD)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hi8(r)
o=Date.now()
n=t.a.c
m=new C.kA(l,r.toUpperCase(),p,!0,B.T,D.C6,new A.S(o,0,!1),0,n,D.tF)
w=5
return A.b(C.a2a(n,m),$async$HD)
case 5:w=6
return A.b(t.vI(),$async$HD)
case 6:t.a.bp()
t.a.pO()
if(t.c==null){w=1
break}t.Ef(m)
case 1:return A.h(u,v)}})
return A.i($async$HD,v)},
Ef(d){return this.ccD(d)},
ccD(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Ef=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Au(u.a.c),$async$Ef)
case 2:n=l.r9(k.dH(f,new C.dTb(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hw(m,new C.aoJ(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Ef)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a2a(u.a.c,o),$async$Ef)
case 6:case 5:w=7
return A.b(u.vI(),$async$Ef)
case 7:u.a.pO()
return A.h(null,v)}})
return A.i($async$Ef,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tE(p)
if(r.e)return A.av(A.mH(q,p?B.br:B.bn,q,q,q,q,q,q,q,q),q,q,q)
if(J.cm(r.d)){w=p?B.dX:B.c
v=A.m(15)
u=A.aG(!1,B.a1,!0,q,A.aL(!1,q,!0,A.p(q,D.bHr,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.q,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcbH(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Fe(A.p(q,A.v(A.a([u,B.aQ,t,B.N,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.br:B.bn,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.e1,A.bH(D.fwt,r.gaPt(),A.bm(B.bW,q,q,q,q,q,Al.Yx,q,new A.b7(A.m(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.btA,q,q,1/0),15,B.af,1.05,D.a8q,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b6],v)
if(J.cy(r.d))w.push(A.aH(q,q,q,q,A.X(B.yn,B.aV,q,q,q,q),q,q,q,new C.dTg(r),q,q,q,q,"Sync family trees with database",q))
if(J.cy(r.d))w.push(A.aH(q,q,q,q,A.X(B.ye,B.aV,q,q,q,q),q,q,q,r.gaeM(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dk(E.an1,D.fcL,r.gaPt(),A.bm(B.bW,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.Fe(r.cyS(J.q(r.d,s),o),14,B.af,1,D.a8q,q))
B.d.v(w,u)}return A.v(A.a([p,B.aA,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cyS(d,e){var w=null,v=e.a,u=v?B.dX:B.c,t=A.m(14),s=A.I((v?B.dZ:B.bS).j(0.55),B.q,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.ek,10)],x.V),q=A.m(14),p=A.p(w,D.bGv,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.ganM(),m=d.d?"":" \xb7 Public",l=d.y===D.km?" \xb7 View only":"",k=x.p
l=A.E(A.v(A.a([o,B.bB,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aG(!1,B.a1,!0,w,A.aL(!1,q,!0,new A.D(B.bC,A.A(A.a([p,B.bf,l,A.X(B.MC,v?B.br:B.bn,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dTf(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aoJ.prototype={
R(){return new C.aCv(A.a([],x._),A.aX(x.N),A.b6W())},
bp(){return this.r.$0()},
gdZ(){return this.c}}
C.aCv.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.abG()
w=u.a
v=w.c
if(v.length!==0)C.a6H(v,w.e,w.d.w)},
q(){var w=this.w
w.U$=$.aw()
w.P$=0
this.a2()},
a1Y(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1Y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xA("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dSB(r),s,null,!0,!0,x.y),$async$a1Y)
case 3:if(e!==!0||t.c==null){w=1
break}t.J7()
t.m(new C.dSC(t,r))
w=4
return A.b(t.vz(),$async$a1Y)
case 4:t.a.bp()
t.xA(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a1Y,v)},
coW(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.dSw(w,f,d,e))},
aRJ(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dp()
u.e5(w,v,0,1)
u.jH(q,q,1,1)
this.w.sp(0,u)},
b8v(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eF(new Float64Array(16))
q.e_(r)
w=q.Cm()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dp()
t.e5(r,u,0,1)
t.jH(v,v,1,1)
t.e5(-r,-u,0,1)
t.ix(0,q)
s.sp(0,t)},
abG(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$abG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Au(u.a.c),$async$abG)
case 2:t=s.r9(r.dH(e,new C.dS4(u)))
if(t!=null&&u.c!=null)u.m(new C.dS5(u,t))
return A.h(null,v)}})
return A.i($async$abG,v)},
xA(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.S(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
vx(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.h_3(o,t,!1,r,new C.dSj(u),q.a,s),$async$vx)
case 2:n=A
m=J
w=3
return A.b(C.Gb(u.a.c),$async$vx)
case 3:p=n.r9(m.dH(e,new C.dSk(u)))
if(p!=null&&u.c!=null)u.m(new C.dSl(u,p))
return A.h(null,v)}})
return A.i($async$vx,v)},
J7(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cC(w,0)},
vz(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a2a(t,s),$async$vz)
case 2:return A.h(null,v)}})
return A.i($async$vz,v)},
a0y(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tP(q,t.a.c)){t.xA("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.i7w(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a0y)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.J7()
t.m(new C.dSv(t,r))
w=4
return A.b(t.vz(),$async$a0y)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0y,v)},
a_g(){return this.ccF()},
ccF(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_g=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tP(q,t.a.c)){t.xA("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.P(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dSt(r,new C.tE(q.ax.a===B.I)),s,null,!0,!0,x.y),$async$a_g)
case 3:if(e!==!0||t.c==null){w=1
break}t.J7()
t.m(new C.dSu(r,t))
w=4
return A.b(t.vz(),$async$a_g)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_g,v)},
Vk(d){return this.by9(d)},
by9(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tP(r,t.a.c)){t.xA("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dRT(t,d),r,null,!0,!0,x.P),$async$Vk)
case 3:s=f
if(s==null){w=1
break}t.J7()
t.m(new C.dRU(t,s))
w=4
return A.b(t.vz(),$async$Vk)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vk,v)},
a2j(d){return this.cB_(d)},
cB_(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a2j=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.ca(null,null,!0,null,new C.dSE(u,d,new C.tE(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a2j)
case 2:return A.h(null,v)}})
return A.i($async$a2j,v)},
c8Y(d){var w=this,v=w.d
v===$&&A.c()
if(C.tP(v,w.a.c))w.NN(d)
else w.a2j(d)},
ahf(d,e){return this.csN(d,e)},
csN(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ahf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.dSy(new C.tE(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ahf)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ahf,v)},
HI(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.km?3:5
break
case 3:w=6
return A.b(C.fNU(t.a.c),$async$HI)
case 6:s=e
o=t.a
r=C.h6J(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ahf(!s,!r),$async$HI)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bAC(o,t.a.c)){t.xA("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.l2(o,"Cancel","Remove",q.y===D.km?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$HI)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aO5(t.a.c,t.d.a),$async$HI)
case 11:t.a.bp()
o=t.c
if(o==null){w=1
break}A.iM(o,null)
case 1:return A.h(u,v)}})
return A.i($async$HI,v)},
a9f(d){return this.bJd(d)},
bJd(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a9f=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tP(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b5(s,new C.dRV(p))){o=A.U(s)
p.a=A.r9(new A.cR(new A.a2(s,new C.dRW(d),o.k("a2<1>")),new C.dRX(),o.k("cR<1,n>")))}q=p.a
if(q==null)q=d.d
t.J7()
t.m(new C.dRY(t,s,d,q))
w=3
return A.b(t.vz(),$async$a9f)
case 3:t.xA(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a9f,v)},
NN(d){return this.bLj(d)},
bLj(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tP(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a2j(d),$async$NN)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.dS1(t,d),r,null,!0,!0,x.P),$async$NN)
case 6:s=f
if(s==null){w=1
break}t.J7()
t.m(new C.dS2(t,s))
w=7
return A.b(t.vz(),$async$NN)
case 7:case 1:return A.h(u,v)}})
return A.i($async$NN,v)},
czd(){var w=this,v=w.d
v===$&&A.c()
if(!C.tP(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dSD(w))
w.vz()},
Y8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Y8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bAC(n,t.a.c)){t.xA("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.aw()
r=new A.ar(B.as,s)
q=t.d.e
p=A.bn(new A.K(q,t.gc7t(),A.U(q).k("K<1,n>")).c_(0,new C.dSe()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dSf(t,new C.tE(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$Y8)
case 3:o=e
r.U$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.J7()
t.m(new C.dSg(t,p))
w=4
return A.b(t.vz(),$async$Y8)
case 4:t.xA("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Y8,v)},
c7u(d){return B.a.i(d.toLowerCase())},
cbs(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tP(v,w)
t=r.d
s=C.hXL(t)
C.i6r(q,t.b,u,C.hXK(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tE(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a2(l,new C.dSL(),A.U(l).k("a2<1>")).gM(0)
l=n?B.bY:B.iN
v=A.X(B.ZI,n?B.br:B.bn,o,o,o,18)
u=x.p
v=A.a([new A.D(B.AZ,A.aL(!1,o,!0,new A.D(B.hK,A.A(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,o,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dSM(p,d),o,o,o,o,o,o,o),o),new A.D(B.na,p.bWc(m),o)],u)
if(p.d.y===D.km){t=B.rk.j(0.15)
s=A.m(12)
r=A.I(B.rk.j(0.45),B.q,1)
q=C.G9(p.d,p.a.c)
v.push(new A.D(B.xz,A.p(o,A.A(A.a([D.bLI,B.av,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,12,o,o,B.a5,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.ic,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b6],u)
if(C.tP(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Jv("Undo",B.r8,p.gczc(),m,o,o))
u.push(new C.Jv("Family Book",D.bBd,p.gcbr(),m,B.t9,o))
if(C.tP(p.d,p.a.c))u.push(new C.Jv("Display settings",B.BI,p.gccE(),m,B.aZ,o))
u.push(new C.Jv("Sync",B.ye,p.gaeM(),m,o,o))
t=p.d
if(t.y===D.km||C.bAC(t,p.a.c)){t=p.d.y===D.km?"Remove shared tree":"Delete tree"
u.push(new C.Jv(t,B.e5,p.gbJn(),m,B.h_,o))}if(C.tP(p.d,p.a.c))u.push(new C.Jv("Add member",B.vF,new C.dSN(p),m,B.bW,o))
v.push(new A.D(A1.ah7,A.A(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.ganM()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cp(new C.dSO(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?K.ZM:Y.MD,o,o,o,o,o)
v.push(A.av(A.he(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dSP(p),o),o,o,o))}return A.c8(o,l,A.bl(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bWc(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fw.j(0.35),B.dk,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.X(B.y7,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a1,!0,m,A.aL(!1,m,!0,A.p(m,D.bOM,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.q,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gaeM(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.eZU,m,m,m)
r=r.ganM()
p=n.d.ganM()===1?"member":"members"
o=x.p
p=A.a([s,B.bf,A.E(A.v(A.a([q,B.bB,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a5,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tP(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bLU,m,m,m,n.gcmk(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jh:B.ms
r=r?"Private":"Public"
r=A.E(n.au4(q,"Privacy",r,n.a.d.w?n.gcyd():m),1)
q=A.E(n.au4(B.yf,"Tree code",n.d.c,new C.dS3(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.A(A.a([r,B.ab,q,B.ab,A.E(n.au4(D.bCX,"Collaborators",p,n.gc_F()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.km){s=B.c.j(0.15)
B.d.v(p,A.a([B.N,A.aG(!1,B.a1,!0,A.m(999),A.aL(!1,A.m(999),!0,new A.D(B.fI,A.A(A.a([A.X(B.oK,B.c,m,m,m,14),B.ec,A.d("View only",m,m,m,m,m,m,B.aOZ,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ag)],o))}return A.p(m,A.bw(u,new A.an(B.W,m,B.aa,B.r,A.a([t,new A.D(B.F9,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bSL,B.n),m,m,m,m,m,m,m,1/0)},
au4(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a1,!0,A.m(14),A.aL(!1,A.m(14),!0,new A.D(L.aie,A.v(A.a([A.X(d,B.c,w,w,w,18),B.at,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ux,A.d(f,w,1,B.a2,w,w,w,P.zu,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)}}
C.bdz.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gam(r)&&s.c.length===0)return B.bH
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bdC(s,t),new A.at(w,v))],x.p)
r=r.gdK(r)
B.d.v(u,r.dt(r,new C.d61(this),x.l))
r=s.c
B.d.v(u,new A.K(r,new C.d62(this),A.U(r).k("K<1,r>")))
return new A.D(B.tB,new A.a7(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.JH.prototype={}
C.Fq.prototype={}
C.bdB.prototype={
gbgU(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aI7.prototype={}
C.bdC.prototype={
bL0(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.W()
v=A.M()
v.r=B.bA.j(0.75).gp(0)
v.c=2
v.d=B.bO
d.bB(new A.u(n,w),new A.u(m,w),v)
u=(n+m)/2
t=new A.aO(q.r,B.ap,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.b5(u,q))
s=w-1.1
r=w-8.8
t.E(new A.pw(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.pw(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bF())
q=A.M()
q.r=B.c.gp(0)
d.ae(new A.u(u,w),9,q)
q=A.M()
q.r=B.bA.gp(0)
d.aO(t,q)},
bKZ(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b0(a0,new C.d6m())
w=f.b
v=w+(B.d.gL(a0).b-w)/2
u=B.d.b5(a0,new C.d6n(f))
t=new A.K(a0,new C.d6o(f),A.U(a0).k("K<1,N>")).c_(0,new C.d6p()).cI(0,1/0,B.uT)
w=f.a
d.bB(f,new A.u(w,u?v:v-Math.min(10,t/2)),e)
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
if(r!=null&&r.length!==0)this.bKZ(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bL0(d,w,q.a,q.b)}},
ar(d){return d.b!==this.b}}
C.bhh.prototype={
gc5i(){var w=this.c
if(B.a.i(w.y).length!==0)return D.dfR
switch(w.c.a){case 0:return D.cKr
case 1:return D.cVu
case 2:return D.dan}},
gc5l(){var w=this.c,v=C.hhu(w.w),u=C.hhu(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc5i(),p=t.c,o=I.bBw(p.f),n=t.gc5l(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.aB:B.c,j=A.I(r?B.aB:B.c,B.q,2)
if(o!=null)w=A.t4(B.A,s,B.cl,B.bR,!1,s,o,!1,s,s)
else{w=A.a([B.d.gL(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a3,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hT(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.ax,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.Fp,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.aB:B.c,B.q,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.f8R,s,s,s),B.f,s,s,new A.o(B.cd,s,w,j,s,s,B.n),s,s,s,s,D.bvs,s,s,s),s,s,s,-6,-4,s))}k=r?B.cD:B.c
j=A.m(8)
w=A.I(B.d.gL(q).j(0.35),B.q,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dE,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cD,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bn,s,s,s,s,s,s,s,s,7.5,s,s,B.a5,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aE(s,new A.a7(84,112,A.v(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.at,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.aYO,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bvD,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a8)}}
C.bcG.prototype={
a5(d,e){var w,v,u,t,s,r,q
$.W()
w=A.M()
v=this.b
u=v?B.c:D.b9z
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
ar(d){return d.b!==this.b}}
C.buZ.prototype={
B(d){var w=this,v=null,u=new C.f8R(w),t=w.c,s=t?B.cD:B.c,r=A.m(12),q=u.$3(B.hy,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bF:B.f9,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.yc,"Zoom out",w.e)
return A.aG(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.f,t?B.bF:B.f9,v,v,v,1,v,v,v,v,v,22),u.$3(B.akz,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dp,v,v,v,B.ag)}}
C.bkD.prototype={
B(d){var w=this,v=null,u=B.bW.j(0.15),t=A.I(B.bW,B.q,2),s=w.e,r=x.p
t=A.aE(v,A.p(v,A.v(A.a([A.X(s?K.ZM:Y.MD,B.bW,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.f5d,v,v,v)],r),B.m,v,B.bb,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a8)
u=A.a([t,B.an,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.f3d,B.L,v,v)],r)
if(s){t=A.a([B.an],r)
s=w.d
B.d.v(t,new A.K(s,new C.eKM(w),A.U(s).k("K<1,r>")))
B.d.v(u,t)}return new A.a7(84,v,A.v(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.Zs.prototype={
R(){return new C.aAX()},
bp(){return this.Q.$0()},
gdZ(){return this.w}}
C.aAX.prototype={
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
r.y=t==null?D.xN:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hZi(w.r,w.f)
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
o=C.h6J(p.y,p.w)
w=3
return A.b(A.le(t.a.w,B.HN),$async$P9)
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
C.hAW(p.y,p.w)
t.a.bp()
case 5:w=7
return A.b(Ao.Gk(78,800),$async$P9)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dme(t,q))
case 1:return A.h(u,v)}})
return A.i($async$P9,v)},
c5k(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hW(B.o.u(1000*Date.now()),w,D.xN,null,null,null,"","","","","",1,!1,0)
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
a8R(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a8R=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dmd(r),s,null,!0,!0,x.y),$async$a8R)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a5(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a8R,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tE(j),h=l.a.e,g=A.U(h).k("a2<1>"),f=A.B(new A.a2(h,new C.dmn(l),g),g.k("J.E"))
h=j?B.dX:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.btW,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aB,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hq(A.aL(!1,k,!0,new A.D(B.lL,A.X(B.e5,B.ox,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbG1(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.js:B.iQ
t=I.bBw(l.as)
if(l.as==null)s=A.X(B.oC,j?B.br:B.bn,k,k,k,40)
else s=k
s=A.av(A.aE(k,new A.an(B.W,k,B.aa,B.r,A.a([A.hc(u,t,s,k,42),A.ao(0,A.hc(B.bW,k,D.bFA,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc5h(),k,k,k,k,k,k,!1,B.a8),k,k,k)
t=l.d
t===$&&A.c()
t=C.aAZ(t,"Full name",B.mo,1,1,i,B.m_)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.S,new C.bhf(i,u,new C.dmo(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bnz],q)
o=l.a.e
B.d.v(p,new A.K(o,new C.dmp(),A.U(o).k("K<1,eD<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bnB],q)
B.d.v(q,new A.K(f,new C.dmr(),A.U(f).k("K<1,eD<n?>>")))
o=A.v(A.a([t,B.an,new C.acC(i,r,"Who is their parent?",p,new C.dms(l),k,o),B.aA,n,B.an,new C.acC(i,m,"Who is their spouse / partner?",q,new C.dmt(l),k,o)],v),B.aj,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aAZ(q,"Birth date",D.ajD,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aAZ(m,"Birth place",B.a_0,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aAZ(n,"Date of death (if deceased)",D.alS,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aAZ(p,"Occupation",B.a05,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.r,w,k),B.aA,s,B.by,new C.acD(i,"Identity",u,k),B.ac,new C.acD(i,"Family links",o,k),B.ac,new C.acD(i,"Life details",A.v(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aAZ(r,"Notes",B.kQ,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aAY(i,"Child order",l.ccS(l.at),new C.dmu(l),new C.dmv(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fXr(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dmw(l):k
B.d.v(r,A.a([B.S,new C.aAY(i,"Visible in tree",u,w,new C.dmx(l),k)],v))}r.push(B.S)
w=j?B.js:B.iQ
u=A.m(14)
t=A.I(j?B.dZ:B.bS,B.q,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iE(k,B.bW,k,B.af,k,new C.dmy(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.agI,k,k,k))
r.push(B.by)
w=j?B.aP:B.aB
j=j?B.dZ:B.bS
r.push(A.A(A.a([A.E(A.dT(B.nv,new C.dmq(d),A.dg(k,k,k,k,k,k,k,k,k,w,k,k,B.ck,k,new A.b7(A.m(14),B.Y),new A.ay(j,1,B.q,-1),k,k,k,k)),1),B.bf,A.E(A.bH(D.eIO,l.gc5j(),A.bm(B.aV,k,k,0,B.c,k,B.ck,k,new A.b7(A.m(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.at)
return A.ek(B.ha,k,B.af,h,new A.a7(420,k,A.cd(A.v(r,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),k),D.ahA,k,B.agZ,new A.b7(g,B.Y),k,k)},
ccS(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.acD.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.js:B.iQ,s=A.m(16)
return A.v(A.a([new A.D(D.ahZ,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.dZ:B.bS,B.q,1),s,w,w,B.n),w,w,w,w,B.bk,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bhg.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dX:B.c,r=A.m(12),q=A.I((t?B.dZ:B.bS).j(0.85),B.q,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aP:B.aB,u,u,u,u,u,u,u,u,14,u,u,B.a5,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.T,!1,u,!0,B.r,u,A.aN(),v.d,u,u,u,u,u,2,A.br(u,B.ez,u,B.vj,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.br:B.bn,u,u,u,u,u,u,u,u,u,u,u,B.cv,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bW,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ai,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.acC.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dX:B.c,s=A.m(12),r=A.I((u?B.dZ:B.bS).j(0.85),B.q,1),q=A.X(B.r2,u?B.br:B.bn,v,v,v,v),p=A.l(v,v,u?B.aP:B.aB,v,v,v,v,v,v,v,v,14,v,v,B.a5,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dX:B.c
return A.p(v,new A.Dk(A.S7(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.br:B.bn,v,v,v,v,v,v,v,v,v,v,v,B.cv,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.ld,v,v,v)}}
C.bhf.prototype={
B(d){var w=new C.dmz(this)
return A.A(A.a([w.$3(D.Zk,"Male",B.No),B.ab,w.$3(D.aiR,"Female",B.N9),B.ab,w.$3(D.xN,"Other",B.ng)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aAY.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.js:B.iQ,r=A.m(14),q=A.I(t?B.dZ:B.bS,B.q,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aB,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.E(A.v(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.br:B.bn,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aH9(u,B.yc,w.f,v),B.bp,new C.aH9(u,B.hy,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ei,v,v,v)}}
C.aH9.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bW.j(0.12)
else w=s.c.a?B.dX:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bW
else t=(s.c.a?B.br:B.bn).j(0.4)
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,new A.a7(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ag)}}
C.acE.prototype={
bOL(d){switch(d.a){case 0:return B.bW
case 1:return B.bA
case 2:return B.cV}},
bOM(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aVW(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
zW(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
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
return A.p(p,A.A(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cB,B.xw,p,p,1/0)},
adh(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.js:B.iQ,s=A.m(16),r=A.I(v?B.dZ:B.bS,B.q,1)
return A.v(A.a([new A.D(D.ahZ,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hmc(r,q),o=q.c,n=t.bOL(o),m=I.bBw(q.f),l=t.e.a,k=l?B.dX:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.aB,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.km?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.br:B.bn,s,s,s,s,s,s,s,s,12,s,s,B.a5,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.q,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.hc(u,m,m==null?A.X(B.oC,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.ep,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.q,1)
v=A.av(A.p(s,A.d(t.bOM(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mm,s,s,s),s,s,s)
u=x.p
i=A.a([t.zW("Full name",i,B.mo)],u)
if(p>0)i.push(t.zW("Child order","#"+p,B.Ng))
r=A.a([h,B.at,r,B.aQ,l,B.S,v,B.by,t.adh("Identity",i),B.ac,t.adh("Life details",A.a([t.zW("Birth date",q.w,D.ajD),t.zW("Birth place",q.x,B.a_0),t.zW("Date of death",q.y,D.alS),t.zW("Occupation",q.z,B.a05)],u)),B.ac,t.adh("Family links",A.a([t.zW("1. Parent",t.aVW(q.d),B.FD),t.zW("2. Spouse",t.aVW(q.e),B.N8)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.adh("Notes",A.a([t.zW("Notes",q,B.kQ)],u))],u))
r.push(B.by)
r.push(A.bH(B.J5,new C.dmJ(d),A.bm(B.aV,s,s,s,s,s,B.ck,s,new A.b7(A.m(14),B.Y),s,s,s)))
return A.eI(s,k,new A.cS(B.ly,A.cd(A.v(r,B.aj,s,B.e,B.Q,0,B.p),B.r,s,B.y,s,B.xC,s,s,B.ah),s),s,s,s,B.Fc,B.d0,s,new A.b7(j,B.Y),s)}}
C.Jv.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.br:B.bn
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.xF,A.hq(A.aG(!1,B.a1,!0,A.m(8),A.aL(!1,A.m(8),!0,new A.a7(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ag),u,v.c,u,u),u)}}
C.aoM.prototype={
eM(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a6().ac())
w=u.c
v=A.U(w).k("K<1,a3<n,@>>")
w=A.B(new A.K(w,new C.c7G(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iY(w,new C.c7H(),t,x.U))
return s}}
C.aoN.prototype={
R(){return new C.aCx(A.a([],x.bF))},
gdd(){return this.c}}
C.aCx.prototype={
a_(){this.a1()
this.Je()},
Je(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Je=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c7K(t.a.c),$async$Je)
case 3:r=e
w=4
return A.b(C.Au(t.a.c),$async$Je)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qP(q,new C.dSY(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dSZ(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Je,v)},
y7(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.S(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
JX(d,e){return this.cBz(d,e)},
cBz(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$JX=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dT2(q,e))
t=3
w=6
return A.b(d.$0(),$async$JX)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dT3(q))
$.eV.mn()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JX,v)},
WZ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p1(r,s.c,s.e),$async$WZ)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JX(new C.dSV(t),"Preparing download\u2026"),$async$WZ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WZ,v)},
X2(d){return this.bML(d)},
bML(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p1(r,s.c,s.e),$async$X2)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.JX(new C.dSW(t,d),"Preparing file\u2026"),$async$X2)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X2,v)},
af8(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$af8=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wZ.c5().LI(B.Qg,B.tG,!0),$async$af8)
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
o=A.jp(o,0,null)
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
return A.i($async$af8,v)},
XD(d){return this.bX5(d)},
bX5(d){var w=0,v=A.j(x.H),u=this
var $async$XD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.JX(new C.dSX(u,d),"Restoring family trees\u2026"),$async$XD)
case 2:return A.h(null,v)}})
return A.i($async$XD,v)},
XC(){var w=0,v=A.j(x.H),u,t=this,s
var $async$XC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.af8(),$async$XC)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.XD(s),$async$XC)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XC,v)},
a1o(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1o=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p1(r,s.c,s.e),$async$a1o)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JX(new C.dT1(t),"Creating QR code\u2026"),$async$a1o)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1o,v)},
a1_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.CC()){t.y7("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).c8(A.e9(new C.dT_(),!0,null,x.N)),$async$a1_)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.XD(r),$async$a1_)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1_,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.Ao:B.iN,m=o?D.afd:B.aP,l=o?B.aK:B.bS,k=o?B.aP:B.aB,j=new C.d6q(n,m,l,k,o?B.bJ:B.bn)
l=A.aH(p,p,p,p,A.X(B.eB,k,p,p,p,20),p,p,p,new C.dT5(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eC(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.d5Z(!0,B.jj,B.aS,B.aS,q.r?p:q.gcsB(),j,s,"Show restore QR"),1),B.av],u))}s=q.e
r=q.r?p:q.gcoR()
t.push(A.E(C.d5Z(!s,B.iX,B.b7,B.bu,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.d5Z(!1,B.hA,B.aV,B.bW,q.r?p:q.gbME(),j,"Photos & books included","Download all trees"),1),B.av],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.d5Z(!1,M.yi,B.aH,B.aM,q.r?p:q.gbX2(),j,s,"Upload backup file"),1))
l=A.a([new C.bdA(v,l,p),B.kw,new C.abU(j,"QR restore",p),B.S,t,B.d5,new C.abU(j,"Backup files",p),B.S,A.A(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kw,new C.abU(j,"One tree",p),B.S],u)
B.d.v(v,J.b6(q.d,new C.dT6(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cz(l,p,B.Yt,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aV.j(0.35),B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dk,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bl(!0,A.p(p,A.A(A.a([K.aNr,B.bf,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.B4,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c8(w,n,new A.an(B.W,p,B.aa,B.r,l,p),p,!1,!1,p,p)}}
C.d6q.prototype={}
C.bdA.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.k2,28)],x.V)
t=A.ao(p,A.X(B.tY,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.r,A.a([t,new A.D(B.a9,A.A(A.a([A.p(p,D.bOj,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.q,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.od,A.E(A.v(A.a([D.fdL,B.N,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bVZ,B.n),p,p,p,p,p,p,p,p)}}
C.abU.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bdy.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aS.j(0.4):m.c
k=A.I(k,B.q,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aS.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.I(t.j(0.35),B.q,1)
return A.aG(!1,B.a1,!0,q,A.aL(!1,o,!0,A.eE(A.dc(new A.D(E.Y7,A.v(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qZ,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bB,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cv,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)}}
C.bdD.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.q,1),q=B.aV.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,A.eE(new A.D(B.eP,A.A(A.a([A.p(v,D.bNw,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.q,1),p,v,v,B.n),v,v,v,v,B.qZ,v,v,v),B.bf,A.E(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.X(B.hA,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)}}
C.ZN.prototype={
R(){return new C.aCw()},
gdd(){return this.c}}
C.aCw.prototype={
a_(){this.a1()
this.a8n()},
a8n(){var w=0,v=A.j(x.H),u=this,t
var $async$a8n=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b0Q(u.a.c,B.CH),$async$a8n)
case 2:t=e
if(u.c!=null)u.m(new C.dSQ(u,t))
return A.h(null,v)}})
return A.i($async$a8n,v)},
agw(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$agw=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dSR(q))
t=4
p=A.h8n(q.a.d,B.CH)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.V(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.ar0(n.e,m,l,B.CH,p,n.f),$async$agw)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dSS(q))
q.c.I(x.q).f.S(D.eR8)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.aa(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(B.a.ed(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dST(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agw,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.j9:B.px,n=p?B.i8:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eC(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.ftj,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.pH(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.v(A.a([B.N,u,B.by,t,B.N,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.bb,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bv,q,q,q,q,q,q,q,q,q,q,q,B.P,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcoz()
if(u)u=B.IB
else u=A.X(r.e===!0?B.hz:B.ajC,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a7(1/0,q,A.ey(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cj,q,q,q),t,A.dg(q,q,q,q,q,q,q,q,q,B.aV,q,B.fN,q,q,q,new A.ay(B.aV.j(0.55),1,B.q,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hY,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.az:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.S)
w.push(new A.a7(1/0,q,A.bH(B.zC,new C.dSU(d),A.bm(B.aV,q,q,q,q,B.fN,q,q,q,q,q,q)),q))
return A.c8(m,o,new A.D(B.a9,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.ZO.prototype={
R(){return new C.biK(A.yZ(B.xl,B.nC,B.u2))}}
C.biK.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c8(A.eC(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.flw,w,w,w,1,w,!0),B.w,A.yY(this.d,B.bR,new C.dT7(this,d)),w,!1,!1,w,w)}}
C.aXK.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.PL,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lx.prototype={}
C.a5I.prototype={
R(){return new C.biq(null,null)}}
C.biq.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.tv,v,1,v,w)
w.e=A.bj(v,B.pE,v,1,v,w)
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
this.btw()},
B(d){var w,v,u=this,t=B.d.dL(D.a2J,new C.dEg(u),new C.dEh())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.ct5(A.c6(new A.h3(A.a([w,v],x.dS)),new C.dEi(u,t),null),!0)}}
C.bip.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b_e(d,e)
break
case"house":p.m0(d,e,D.d_2)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdO()
$.W()
t=A.M()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ae(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.m5(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.AH(d,e,12)
p.xJ(d,e,B.l7,5,14)
break
case"grocery":p.cdB(d,e)
break
case"calculator":p.cdi(d,e)
break
case"lumber":p.cdJ(d,e)
break
case"kitchen":p.cdE(d,e)
break
case"landscape":p.m0(d,e,D.d_z)
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
w.r=B.f3.j(0.85).gp(0)
d.aO(s,w)
p.AH(d,e,8)
p.xJ(d,e,B.iT,4,18)
break
case"plumbing":p.cdS(d,e)
break
case"electrical":p.m0(d,e,D.d9F)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.W()
u=A.M()
u.r=B.c.j(q*0.12).gp(0)
d.aZ(new A.a9(0,0,0+e.a,0+e.b),u)
p.m5(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.m5(d,e,B.lD.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.AH(d,e,10)
break
case"store":p.ce1(d,e)
break
case"paint_remodel":p.cdN(d,e)
break
case"roofing":p.cdU(d,e)
break
case"warehouse":p.ce8(d,e)
break
case"vehicles":p.ce6(d,e)
break
case"farm":p.cdv(d,e)
break
case"restaurant":p.cdT(d,e)
break
case"tools":p.ce4(d,e)
break
case"wallet":p.ce7(d,e)
break
case"concrete":p.cdo(d,e)
break
case"blueprint":p.cdg(d,e)
break
default:p.b_e(d,e)}},
m0(d,e,f){var w,v=new A.a9(0,0,0+e.a,0+e.b)
$.W()
w=A.M()
w.saq(new A.a8(B.ax,B.aC,B.x,f,null,null).av(0,v))
d.aZ(v,w)},
m5(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.gdO()/2-h
$.W()
w=A.M()
w.b=B.ae
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bU(q,p)
r=w.H()
v.drawArc.apply(v,[A.c0(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
xJ(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdO()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.W()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
AH(d,e,f){var w,v,u,t,s,r,q,p,o,n
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
v.m0(d,e,D.d8p)
w=v.c
v.m5(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.m5(d,e,B.bK.j(0.45),-w*3.141592653589793*1.4,22)
v.bKV(d,e,B.hU,w)
v.xJ(d,e,B.c.j(0.7),6,8)},
bKV(d,e,f,g){var w,v,u,t,s,r,q,p
$.W()
w=A.M()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c0(new A.a9(16,q,t,q+3)),p)
p.delete()}},
cdB(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m0(d,e,D.cgs)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.W()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.cYn[B.o.F(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.m5(d,e,B.c.j(0.35),w,16)
j.xJ(d,e,B.iT,5,12)},
cdi(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m0(d,e,D.cgz)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdO()
$.W()
q=A.M()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ae(new A.u(t/2,s/2),r*(0.18+u*0.08),q)
p=A.hL(g,g,g,g,g,B.a4,B.ce,g,B.e9,B.ca)
for(o=0;o<6;++o){n=v+o*0.9
r=D.d15[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saV(0,new A.eq(r,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eF()
p.a5(d,new A.u(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cgB[o]
l=B.kc.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saV(0,new A.eq(m,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eF()
p.a5(d,new A.u(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.m5(d,e,B.c.j(0.35),w*1.5,14)
h.m5(d,e,B.eA.j(0.55),-v*3.141592653589793*2,8)
h.m5(d,e,B.Ap.j(0.4),r*2.8,22)
h.xJ(d,e,B.pn,8,10)
h.AH(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.W()
r=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cdJ(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m0(d,e,A_.ave)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bx(new A.a9(20,q,u,q+10),B.hC)
$.W()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.h3,B.oq,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.er(p),n)
n.delete()}m.m5(d,e,B.h3.j(0.35),w,15)
m.AH(d,e,8)},
cdE(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m0(d,e,D.cYS)
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
j.xJ(d,e,B.qA,4,14)},
cdS(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m0(d,e,D.cO9)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.W()
n=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xJ(d,e,B.ov,6,12)
l.m5(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
ce1(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m0(d,e,D.ctU)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bx(new A.a9(q,14,q+u,22),B.ik)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.f7,B.bK,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.er(q),o)
o.delete()}n.m5(d,e,B.c.j(0.3),w,16)
n.AH(d,e,8)
n.xJ(d,e,B.v_,5,13)},
cdN(d,e){var w,v,u,t,s,r,q,p,o
this.m0(d,e,D.cTU)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bx(new A.a9(q,p,q+8,p+(18+r*22)),B.hd)
$.W()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.iq,B.dv,B.bK,B.et][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.er(p),o)
o.delete()}this.m5(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cdU(d,e){var w,v,u,t,s,r,q,p,o
this.m0(d,e,D.cRr)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xJ(d,e,B.cq,7,11)},
ce8(d,e){var w,v,u,t,s,r,q,p,o,n
this.m0(d,e,D.cwx)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bx(new A.a9(p,o,p+(t-r*8),o+16),B.hC)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.cq,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.er(o),n)
n.delete()}this.m5(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
ce6(d,e){var w,v,u,t,s,r,q,p,o
this.m0(d,e,D.dds)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.bx(new A.a9(r,q,r+28,q+8),B.hC)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.er(q),o)
o.delete()}this.AH(d,e,6)},
cdv(d,e){var w,v,u,t,s,r,q,p,o,n
this.m0(d,e,D.cXw)
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
o.r=B.hj.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.m5(d,e,B.lD.j(0.35),w,14)},
cdT(d,e){var w,v,u,t,s,r,q,p,o=this
o.m0(d,e,D.cZS)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cl(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.W()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c0(r),p)
p.delete()}o.xJ(d,e,B.qA,5,16)
o.AH(d,e,7)},
ce4(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m0(d,e,D.db6)
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
ce7(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m0(d,e,D.ddZ)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bx(new A.a9(p,o,p+36,o+22),B.ik)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.iT,B.lD,q).gp(0)
n=p.H()
s.drawRRect(A.er(o),n)
n.delete()}m.AH(d,e,9)
m.m5(d,e,B.c.j(0.4),w*2.2,12)},
cdo(d,e){var w,v,u,t,s,r,q,p,o,n
this.m0(d,e,D.d3K)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bU(new A.u(v,u),34)
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
cdg(d,e){var w,v,u,t,s,r,q,p
this.m0(d,e,D.d_Q)
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
C.arI.prototype={
ZF(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aP0(),$async$ZF)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a7Y(s),$async$ZF)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$ZF,v)},
af9(d){return this.cgn(d)},
cgn(d){var w=0,v=A.j(x.H),u=this,t
var $async$af9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.i6B(d),$async$af9)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$af9,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.js:B.iQ
w=x.p
v=A.a([C.aPp(!0,B.qs,1/0,B.pM,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c_(new A.bI(B.b_,t,t,new A.D(B.vc,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.P,t,t,!0,t,t,t,t,t,B.aw8,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b_,B.b5,B.x,u,t,t),B.n),B.bd))}v.push(A.ao(8,A.A(A.a([A.E(A.dk(D.bHk,D.fa6,new C.cfe(this,d),A.bm(B.aV,t,t,t,B.c,t,B.jx,t,t,t,t,B.cb)),1),B.ab,A.E(A.ey(D.bPy,D.foy,this.gc7r(),A.dg(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jx,t,t,D.aXj,t,t,t,B.cb)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fG(1.7777777777777777,A.aG(!1,B.a1,!0,B.qs,new A.an(B.W,t,B.b0,B.r,v,t),B.aq,s,0,t,t,t,t,t,B.ag),t)}}
C.aKt.prototype={
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
C.Yr.prototype={
R(){return new C.axN()}}
C.axN.prototype={
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
if(w.length===0){u.c.I(x.q).f.S(D.eRD)
return}t=u.c
t.toString
v=u.e
A.a5(t,!1).O(new C.aSk(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.dX:B.c,k=A.m(20),j=A.p(n,D.bPd,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.aB,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.v(A.a([i,B.bB,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bn,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.bf,i,A.aH(n,n,n,n,A.X(B.cC,m?B.br:B.bn,n,n,n,n),n,n,n,new C.cYL(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bn,n,n,n,n,n,n,n,n,12,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bn,n,n,n,n,n,n,n,n,11,n,n,B.cv,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.h8D(new C.cYM(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.aB,n,n,n,n,n,n,n,n,n,n,n,B.a5,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.js:B.iQ
r=A.m(12)
q=A.m(12)
p=m?B.dZ:B.bS
t=A.aM(n,B.T,!0,n,!0,B.r,n,A.aN(),u,n,n,n,n,n,2,A.br(n,new A.b4(4,r,B.dg),n,n,n,n,n,n,!0,new A.b4(4,q,new A.ay(p,1,B.q,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cYN(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,S.II,n,n,n,n)
u=m?B.aP:B.aB
m=m?B.dZ:B.bS
return A.eI(n,l,new A.cS(B.ly,A.cd(A.v(A.a([j,B.aQ,i,B.at,w,B.N,v,B.aQ,t,B.by,A.A(A.a([A.E(A.dT(B.de,new C.cYO(d),A.dg(n,n,n,n,n,n,n,n,n,u,n,n,B.ck,n,new A.b7(A.m(12),B.Y),new A.ay(m,1,B.q,-1),n,n,n,n)),1),B.av,A.E(A.bH(D.foN,o.ga1I(),A.bm(B.aV,n,n,n,B.c,n,B.ck,n,new A.b7(A.m(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.r,n,B.y,n,B.B5,n,n,B.ah),n),n,n,n,X.B6,B.d0,n,new A.b7(k,B.Y),n)}}
C.Yq.prototype={
R(){return new C.axM()}}
C.axM.prototype={
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
if(w.length===0){this.c.I(x.q).f.S(D.ePk)
return}v=this.c
v.toString
A.a5(v,!1).O(new C.aSj(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.dX:B.c,n=A.m(20),m=A.p(q,D.bLN,B.f,q,q,new A.o(B.bW.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.v(A.a([l,B.bB,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.br:B.bn,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.bf,l,A.aH(q,q,q,q,A.X(B.cC,p?B.br:B.bn,q,q,q,q),q,q,q,new C.cYH(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aV.j(0.25),B.q,1)
u=A.X(B.ajo,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.av,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,12,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bC,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,q,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.js:B.iQ
t=A.m(12)
s=A.m(12)
r=p?B.dZ:B.bS
v=A.aM(q,B.T,!0,q,!0,B.r,q,A.aN(),w,q,q,q,q,q,2,A.br(q,new A.b4(4,t,B.dg),q,q,q,q,q,q,!0,new A.b4(4,s,new A.ay(r,1,B.q,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cYI(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.kx,q,q,q,q)
w=p?B.aP:B.aB
p=p?B.dZ:B.bS
return A.eI(q,o,new A.cS(B.ly,A.cd(A.v(A.a([m,B.aQ,l,B.aA,v,B.by,A.A(A.a([A.E(A.dT(B.de,new C.cYJ(d),A.dg(q,q,q,q,q,q,q,q,q,w,q,q,B.ck,q,new A.b7(A.m(12),B.Y),new A.ay(p,1,B.q,-1),q,q,q,q)),1),B.av,A.E(A.bH(D.fvu,this.ga1I(),A.bm(B.bW,q,q,q,B.c,q,B.ck,q,new A.b7(A.m(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.B5,q,q,B.ah),q),q,q,q,X.B6,B.d0,q,new A.b7(n,B.Y),q)}}
C.XZ.prototype={
R(){return new C.aww()}}
C.aww.prototype={
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
gaim(){var w=this.f
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
this.m(new C.cwk())},
awH(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.js:B.iQ,s=A.m(14),r=A.m(14)
u=u?B.dZ:B.bS
return A.br(w,new A.b4(4,s,B.dg),w,B.bC,w,w,w,w,!0,new A.b4(4,r,new A.ay(u,1,B.q,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.m(14),B.a9Q),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c7s(d,e,f){return this.awH(d,e,f,null)},
JO(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gaim()<=0){s.c.I(x.q).f.S(D.eTu)
return}r=s.c
r.toString
v=s.gJ9()
u=s.gaim()
t=s.gb28()
A.a5(r,!1).O(new C.aQl(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tE(n),l=n?B.dX:B.c,k=A.m(24),j=x.O,i=A.a([B.aV.j(0.22),B.bW.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bFi,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.q,1),h,o,new A.a8(B.a3,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.v(A.a([h,B.bB,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.cv,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.bf,h,A.aH(o,o,o,o,A.X(B.cC,n?B.br:B.bn,o,o,o,o),o,o,o,new C.cwq(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,o,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.T,!0,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.awH(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Nm),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,S.II,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.js:B.iQ
t=A.m(14)
s=A.I(n?B.dZ:B.bS,B.q,1)
r=A.aH(o,o,o,o,A.X(B.yc,n?B.aP:B.aB,o,o,o,20),o,o,o,new C.cwr(p),o,o,o,o,o,B.cb)
q=p.e
q===$&&A.c()
q=A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),q,o,o,o,o,o,2,D.bR4,B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dV,o,o,o,1,o,o,!1,"\u2022",o,new C.cws(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a7(52,o,q,o),A.aH(o,o,o,o,A.X(B.hy,n?B.aP:B.aB,o,o,o,20),o,o,o,new C.cwt(p),o,o,o,o,o,B.cb)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,16,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.av,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),t,o,o,o,o,o,2,p.awH(m,"Amount","0.00",B.hZ),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dV,o,o,o,1,o,o,!1,"\u2022",o,new C.cwu(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.B(new A.K(D.cUm,new C.cwv(p,m),t),t.k("ak.E"))
i=A.a([i,B.by,v,B.aA,h,B.N,s,B.ac,A.bW(B.bz,u,B.bq,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.S,A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.c7s(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cww(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.kx,o,o,o,o)],w))}i.push(B.aQ)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bW.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,11,o,o,B.P,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJ9()===B.k.jY(p.gJ9())?B.k.N(p.gJ9()):p.gJ9()
s=p.gb28()
r=A.Aw(p.gaim())
i.push(A.p(o,A.A(A.a([A.E(A.v(A.a([u,B.at,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bCi(p.gJ9()*p.gaim(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a3,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.je,o,o,o))
i.push(B.by)
j=A.m(14)
h=n?B.dZ:B.bS
h=A.dg(o,o,o,o,o,o,o,o,o,o,o,o,B.ck,o,new A.b7(j,B.Y),new A.ay(h,1,B.q,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dT(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,o,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cwx(d),h),1),B.av,A.E(A.dk(D.amV,D.frw,p.ga1I(),A.bm(B.aV,o,o,0,B.c,o,B.ck,o,new A.b7(A.m(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eI(o,l,new A.cS(W.aac,A.cd(A.v(i,B.aj,o,B.e,B.Q,0,B.p),B.r,o,B.y,o,Ad.qY,o,o,B.ah),o),o,o,o,B.M2,B.d0,o,new A.b7(k,B.Y),o)}}
C.a0y.prototype={
R(){return new C.buR()}}
C.buR.prototype={
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
v=A.aM(s,B.T,!0,s,!0,B.r,s,A.aN(),w,s,s,s,s,s,2,A.br(s,new A.b4(4,A.m(12),B.dg),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.f8j(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.am,s,s,s,s)
u=A.E(A.dT(B.de,new C.f8k(d),s),1)
r=A.bm(B.bW,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eI(s,q,new A.D(B.B5,A.v(A.a([o,B.aA,v,B.aQ,A.A(A.a([u,B.av,A.E(A.bH(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.f8l(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d0,s,new A.b7(p,B.Y),s)}}
C.aaX.prototype={
a4(){return"WorksheetFrameStyle."+this.b}}
C.Fe.prototype={
R(){return new C.buP(null,null)}}
C.buP.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.bo8,null,1,null,v)
w.cH(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bvU()},
gbxk(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bW,B.aZ],x.O)
case 2:return A.a([B.bt,B.aV,B.aZ],x.O)
case 3:return A.a([B.aS,B.cd,B.jP],x.O)
case 4:return A.a([B.hv,B.bW,B.f8],x.O)
case 0:return A.a([B.aV,B.bW,B.aZ],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.ev(A.c6(v,new C.f8h(this,new C.tE(w.ax.a===B.I)),null),null)}}
C.awp.prototype={
R(){return new C.buQ(null,null)}}
C.buQ.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.n5,null,1,null,v)
w.cH(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bvV()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.f8i(this),null)}}
C.buO.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a9(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aT(w,w))
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
aQB(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hu8(e.a.a,e,t,t+f*i,!0),r=A.bAF(s.gbL().a.getBounds())
$.W()
w=A.M()
w.b=B.ae
w.c=j
w.d=B.bO
w.f=!0
v=this.f
u=k*this.e
w.saq(new A.a8(B.a3,B.a7,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.GQ,null).av(0,r))
d.aO(s,w)},
ar(d){return d.b!==this.b||d.d!==this.d}}
C.aME.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.aMF.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.tE.prototype={}
C.arH.prototype={
R(){return new C.aE2()},
gdZ(){return this.c}}
C.aE2.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.ag0()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.KT(w,v)
this.a2()},
ag0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ag0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bAN(t.c,t.d.a),$async$ag0)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eHW(u,s))
return A.h(null,v)}})
return A.i($async$ag0,v)},
Pz(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Pz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eHN(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.KT(t,s),$async$Pz)
case 2:if(u.c!=null)u.m(new C.eHO(u))
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
return A.b(A.ca(null,null,!0,null,new C.eHU(t,new C.tE(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Q4)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a7Y(q),$async$Q4)
case 6:case 5:t.m(new C.eHV(t,r))
w=7
return A.b(t.Pz(),$async$Q4)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Q4,v)},
Ve(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ve=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i6m(r),$async$Ve)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eHI(t,new C.qT(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Pz(),$async$Ve)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ve,v)},
cct(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hm8(t,new C.eHM(u),w,v)},
aa8(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bO(new A.ay(v,2.5,B.q,-1),B.Y,B.Y,new A.ay(B.c.j(d?0.85:0.55),2.5,B.q,-1)),D.aX5,w,w,B.n),w,22,w,w,w,w,w,22)},
a9e(d){return this.bJa(d)},
bJa(d){var w=0,v=A.j(x.H),u=this
var $async$a9e=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eHL(u,d))
w=2
return A.b(u.Pz(),$async$a9e)
case 2:return A.h(null,v)}})
return A.i($async$a9e,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.bY:B.iN,d=A.m(8),a0=A.X(R.ZJ,f?B.br:B.bn,g,g,g,16),a1=x.p
a0=A.aL(!1,d,!0,new A.D(B.Fj,A.A(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.br:B.bn,g,g,g,g,g,g,g,g,g,g,g,B.a5,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eHX(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b0,B.r,A.a([A.bw(A.m(22),C.aPp(!0,A.m(22),1/0,B.pM,g,d,1/0),B.aq),A.ao(10,A.dk(D.bJR,D.ftN,h.gb00(),A.bm(B.w.j(0.45),g,g,g,B.c,g,B.h7,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eT,22),new A.ac(-4,B.G,B.bW.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.q,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bw(s,new A.an(B.W,g,B.b0,B.r,A.a([C.aPp(!0,A.m(16),1/0,B.MO,g,r.c,1/0),A.c_(g,new A.o(g,g,g,g,g,new A.a8(B.b_,B.b5,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bd),A.ao(g,h.aa8(!0),g,g,8,g,8,g),A.ao(g,A.ctQ(h.aa8(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.ctQ(h.aa8(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.ctQ(h.aa8(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dk(D.bFR,D.fny,h.gb00(),A.bm(B.w.j(0.45),g,g,g,B.c,g,B.h7,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bSw,B.n),g,g,g,g,B.lL,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aB,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b6r,B.nI,B.h5],u):A.a([B.aZ,B.aV,B.bW],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eT,24)],t)
r=A.m(22)
p=A.ao(g,A.X(B.jA,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.q,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h6,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aA,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.an,C.bCi(h.d.gwL(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.N,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cv,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.fT.j(0.75),B.q,1.6)
t=A.a([new A.ac(0,B.G,B.aS.j(0.28),B.cJ,14)],t)
j=B.aS.j(0.22)
i=A.m(10)
u=A.p(g,A.bw(r,new A.an(B.W,g,B.aa,B.r,A.a([p,new A.D(D.bsJ,A.A(A.a([o,B.av,A.aG(!1,B.a1,!0,g,A.aL(!1,n,!0,A.eE(new A.D(Ai.B0,A.v(A.a([A.p(g,D.amu,B.f,g,g,new A.o(j,g,A.I(B.aS.j(0.5),B.q,1),i,g,g,B.n),g,g,g,g,B.co,g,g,g),B.h0,D.fcP],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gccs(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ag)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.ax,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fG(1.7777777777777777,d,g),B.aQ,w,B.N,u,B.by,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aB,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b6,A.dk(Ak.a0r,D.faJ,h.gbxN(),A.bm(B.aV,g,g,g,B.c,g,B.ic,g,new A.b7(A.m(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.dX:B.c
v=A.m(14)
u=A.I(f?B.dZ:B.bS,B.q,1)
t=A.X(B.a_3,f?B.br:B.bn,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aB,g,g,g,g,g,g,g,g,g,g,g,B.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.S,s,B.an,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.br:B.bn,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.tE,g,g,1/0))}else B.d.v(d,new A.K(w,new C.eHY(h,new C.tE(f)),A.U(w).k("K<1,r>")))
if(h.e)d.push(new A.D(B.AU,A.av(A.mH(g,f?B.br:B.bn,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c8(g,e,A.bl(!0,A.v(A.a([new A.D(B.AZ,a0,g),A.E(A.cd(A.v(d,B.F,g,B.e,B.j,0,B.p),B.r,g,B.y,g,E.xD,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bBn(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dX:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.aZS,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.X(s?B.hL:B.h9,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bH
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aP:B.aB,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcRF()
v=A.Aw(d.d)
B.d.v(t,A.a([B.at,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.br:B.bn,u,u,u,u,u,u,u,u,12,u,u,B.a5,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.bb,B.Q,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bW.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bCi(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a3,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.h7,u,u,u)
w=x.p
return A.p(u,A.bw(n,new A.DJ(A.A(A.a([m,A.E(new A.D(B.agB,A.A(A.a([l,B.bf,t,B.ab,k,A.aH(u,u,u,u,A.X(B.cC,(r?B.br:B.bn).j(0.75),u,u,u,20),u,u,u,new C.eHJ(this,d),u,u,u,u,u,B.cb)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.aj,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.aYK,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.db,u,u,u,u)}}
C.acZ.prototype={
Ea(d){return this.bKx(d)},
bKx(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ea=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.p1(d,o,!1),$async$Ea)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).O(null)
w=4
return A.b(A.bN(Ac.AS,null,x.H),$async$Ea)
case 4:s=t.d
w=5
return A.b(C.fEK(!0,o,s),$async$Ea)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.G8(r,"ngmy_project_"+A.aK(s.b,q,"_"),!1),$async$Ea)
case 6:p=f
w=7
return A.b(A.p0(o,!1),$async$Ea)
case 7:if(d.e==null){w=1
break}d.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Ea,v)},
ZG(d){return this.csC(d)},
csC(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.p1(d,s,!1),$async$ZG)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).O(null)
A.hw(d,new C.arB(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.p0(s,!1),$async$ZG)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZG,v)},
PA(d){return this.coM(d)},
coM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).O(null)
w=3
return A.b(A.hw(d,D.aFw,!0,"NgmyWorksheetProjectScan",x.N),$async$PA)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bCj(s),$async$PA)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.S(D.eSD)
w=1
break}q=C.fZJ(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dP(p,x.H),$async$PA)
case 5:if(d.e==null){w=1
break}d.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$PA,v)},
ZH(d){return this.cAv(d)},
cAv(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ZH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).O(null)
w=3
return A.b(C.bBR(),$async$ZH)
case 3:s=f
if(s==null){w=1
break}r=C.fZJ(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dP(q,x.H),$async$ZH)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$ZH,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tE(u),s=w.d.d.length,r=u?B.dX:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.k2,36)],x.V),o=x.p
return A.bl(!0,new A.D(B.vk,A.p(v,A.v(A.a([w.crc(d,t,s),new A.D(D.bs7,A.v(A.a([w.b32(t,"QR restore"),B.S,A.A(A.a([w.aYZ(t,!0,B.jj,B.aS,B.aS,new C.eI_(w,d),"Show to scan","QR code"),B.av,w.awI(t,B.iX,B.b7,B.bu,new C.eI0(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d5,w.b32(t,"Backup files"),B.S,A.A(A.a([w.awI(t,B.hA,B.aV,B.bW,new C.eI1(w,d),"Full copy","Backup file"),B.av,w.awI(t,M.yi,B.aH,B.aM,new C.eI2(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
crc(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eY,B.cY,B.fw],k):A.a([B.aZ,B.aV,B.bW],k)
w=A.ao(l,A.X(B.tY,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kM,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.q,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aPp(!0,A.m(13),64,D.bB6,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aPX,l,l,l)
r=C.bCi(r.gwL(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.q,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.r,A.a([w,new A.D(D.bsv,A.v(A.a([v,A.A(A.a([s,B.ey,A.E(A.v(A.a([u,B.at,t,B.N,A.A(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fK,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.X(B.cC,B.c.j(0.85),l,l,l,l),l,l,l,new C.eHZ(d),l,l,l,A.nw(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aNg,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.ax,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b32(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.br:B.bn,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aYZ(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.afd:B.aP
if(e)w=B.aS.j(o?0.45:0.35)
else{w=o?B.dZ:B.bS
w=w.j(o?0.8:1)}w=A.I(w,B.q,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aS.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.q,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qZ,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.aB,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aG(!1,B.a1,!0,r,A.aL(!1,q,!0,A.eE(new A.D(E.Y7,A.v(A.a([t,B.ac,u,B.bB,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.br:B.bn,r,r,r,r,r,r,r,r,11,r,r,B.cv,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
awI(d,e,f,g,h,i,j){return this.aYZ(d,!1,e,f,g,h,i,j)}}
C.arB.prototype={
R(){return new C.bk6()}}
C.bk6.prototype={
a_(){this.a1()
this.adU()},
adU(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$adU=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bCk(p.c,p.d),$async$adU)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eHD(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eHE(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adU,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.Ao:B.iN,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eB,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eHF(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zo],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eY,B.cY,B.fw],s):A.a([B.aZ,B.aV,B.bW],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eT,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dl,B.L,h,h)
p=C.bCi(p.gwL(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.an,A.A(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fK,h,h,h)],u),B.m,h,B.bb,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.ax,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.Ys,h,h,1/0)
t=g?D.bfF:B.c
q=A.m(24)
p=A.I(w?B.aS.j(0.4):B.aV.j(0.3),B.q,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dk,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a7_,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.e5z)
else{m=A.m(20)
l=A.I(B.aL,B.q,1)
o.push(A.p(h,A.pH(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aQ)
n=w?B.aS:B.aV
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aS:B.aV).j(0.35),B.q,1)
k=w?B.N5:B.NC
k=A.X(k,w?B.aS:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.av,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a5,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.ic,h,h,h))
return A.c8(h,f,A.bl(!0,A.v(A.a([new A.D(A7.Mf,e,h),A.E(A.cd(A.v(A.a([s,B.aQ,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tD,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.r,h,B.y,h,E.ahK,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.arG.prototype={
R(){return new C.aE1(A.yZ(B.Lv,B.nC,B.u2))}}
C.aE1.prototype={
q(){this.d.q()
this.a2()},
aLd(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iM(w,d)},
c8i(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.i4g(t)
if(s!=null){this.aLd(s)
return}r=C.hdb(t)
if(r!=null)q=A.cX(r,p,0)
else q=!1
if(q){this.aLd(B.a.i(B.a.b1(r,B.a.cJ(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eC(A.a([A.aH(t,t,t,t,A.X(u.f?B.r3:A3.Nb,t,t,t,t,t),t,t,t,new C.eHH(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Ao,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fnr,t,t,t,1,t,!0),q=A.yY(u.d,B.bR,u.gc8h()),p=A.m(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.q,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c8(r,B.w,new A.an(B.W,t,B.b0,B.r,A.a([q,p,A.ao(32,A.p(t,D.fmf,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.q,1),v,t,t,B.n),t,t,t,t,B.je,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aIP.prototype={
a4(){return"_WorksheetTab."+this.b}}
C.NI.prototype={
R(){return new C.aE3(D.a97,A.a([],x.D))},
bp(){return this.r.$0()},
gdZ(){return this.c}}
C.aE3.prototype={
gcyt(){return J.bDt(this.e,0,new C.eIp())},
a_(){this.a1()
$.aW.c2$.push(this)
this.vw()},
q(){$.aW.hF(this)
this.a2()},
iV(d){if(d===B.fu)this.vw()},
vw(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vw=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.CB(q.a.c).cM(0,B.jU),$async$vw)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eIl(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eIm(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vw,v)},
HC(d){return this.bHj(d)},
bHi(){return this.HC(null)},
bHj(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i6o(l,d),$async$HC)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lh(l,r,q,D.d3X,new A.S(Date.now(),0,!1))
w=4
return A.b(C.KT(t.a.c,p),$async$HC)
case 4:o=f
w=5
return A.b(t.vw(),$async$HC)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.S(D.ePO)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.S(D.eRx)
else n.I(q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.Ee(m)
case 1:return A.h(u,v)}})
return A.i($async$HC,v)},
Ee(d){return this.cce(d)},
cce(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Ee=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hw(s,new C.arH(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Ee)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.KT(u.a.c,t),$async$Ee)
case 5:case 4:w=6
return A.b(u.vw(),$async$Ee)
case 6:return A.h(null,v)}})
return A.i($async$Ee,v)},
vi(d){return this.bX7(d)},
bX7(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bBR(),$async$vi)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hw(r,D.aFw,!0,"NgmyWorksheetProjectScan",x.N),$async$vi)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bCj(q),$async$vi)
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
break}p=C.fZJ(s)
w=15
return A.b(C.KT(t.a.c,p),$async$vi)
case 15:o=f
w=16
return A.b(t.vw(),$async$vi)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.S(D.eRC)
w=1
break}r.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.Ee(p)
case 1:return A.h(u,v)}})
return A.i($async$vi,v)},
Np(d){return this.bFZ(d)},
bFZ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Np=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ca(null,null,!0,null,new C.eI6(d),s,null,!0,!0,x.y),$async$Np)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oB(t.a.c,A.a([],x.D)),$async$Np)
case 6:w=7
return A.b(t.vw(),$async$Np)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.ePT)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Np,v)},
ccr(d){var w=this.c
w.toString
A.bR(B.K,null,new C.eIf(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b3E(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.js
else w=B.c
v=A.m(16)
u=A.I(p?B.dZ:B.bS,B.q,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.aB,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(r,A.v(A.a([s,B.ac,t,B.bB,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.br:B.bn,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vj,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
a_b(d,e){return this.ccf(d,e)},
ccf(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_b=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bR(B.K,null,new C.eIa(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a_b)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hm8(r,new C.eIb(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Nr(d,e),$async$a_b)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_b,v)},
b0C(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.ay
else t=h.a?B.aP:B.aB
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.v(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.br:B.bn,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aG(!1,B.a1,!0,u,A.aL(!1,u,!0,new A.D(B.B4,A.A(A.a([s,B.bf,t,A.X(B.ex,w?B.br:B.bn,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag)},
cj5(d,e,f,g,h,i){return this.b0C(!1,d,e,f,g,h,i)},
Nr(d,e){return this.bG8(d,e)},
bG8(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Nr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.l2(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Nr)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bAz(t.a.c,d.a),$async$Nr)
case 6:w=7
return A.b(t.vw(),$async$Nr)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Nr,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tE(o),m=o?B.bY:B.iN
if(q.f)o=D.b4p
else{w=q.bAA(n)
v=q.bWd(n)
u=q.gbxH()
if(o)t=B.js
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aQ,new C.Fe(A.p(p,A.A(A.a([q.aAd(N.MN,"Projects",n,D.a97),q.aAd(B.vv,"Cashier",n,D.aUx),q.aAd(B.FD,"Family Tree",n,D.fWA)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ep,0.95,u,p),B.by],r)
w=q.d
if(w===D.a97){w=J.ad(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.aB,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b6,new C.awp(q.gaPn(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aA,q.cj7(n)],r))}else{o=q.a
if(w===D.aUx)u.push(new C.anI(o.c,n,p))
else{w=q.r
u.push(new C.aoP(o.c,o.d,o.e,o.f,new C.eIs(q),new C.eIt(q),new A.cx(w,x.b4)))}}o=A.cd(A.v(u,B.F,p,B.e,B.j,0,B.p),B.r,p,B.y,p,Ae.M8,p,p,B.ah)}return A.c8(p,m,A.bl(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bAA(d){var w=null,v=A.m(8),u=d.a,t=A.X(R.ZJ,u?B.br:B.bn,w,w,w,16)
return A.aL(!1,v,!0,new A.D(B.kN,A.A(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.br:B.bn,w,w,w,w,w,w,w,w,14,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eI3(this),w,w,w,w,w,w,w)},
gbxH(){switch(this.d.a){case 0:return D.a8p
case 1:return D.fNk
case 2:return D.a8q}},
bWd(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cx,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.bLD,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bf,D.bwO,A.aG(!1,B.a1,!0,w,A.aL(!1,A.m(12),!0,A.p(w,D.bJa,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eI7(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.m(12)
return new C.Fe(A.p(w,A.v(A.a([new A.D(O.M0,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.d(A.Aw(this.gcyt()),w,w,w,w,w,w,D.f7b,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.vi,B.je,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.fNj,w)},
aAd(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aV:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.q,2):A.I(B.K,B.q,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.br:B.bn
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.br:B.bn
return A.E(A.aG(!1,B.a1,!0,u,A.aL(!1,s,!0,A.dj(u,A.A(A.a([w,B.ec,new A.dq(1,B.cn,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.bb,B.j,0,u,u),u,u,B.ct,new A.o(r,u,p,q,o,u,B.n),B.ix,u,u,u,B.Mb,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eIo(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),1)},
cj7(d){var w,v,u,t,s,r,q=this,p=null
if(J.cm(q.e)){w=d.a
v=w?B.dX:B.c
u=A.m(15)
t=A.p(p,D.bJf,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eT,28)],x.V),D.bUZ,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.aB,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Fe(A.p(p,A.v(A.a([t,B.d5,s,B.N,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.br:B.bn,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.e1,A.A(A.a([A.E(q.aQX(B.iX,"Scan QR",new C.eIi(q),d),1),B.av,A.E(q.aQX(M.yi,"Upload file",new C.eIj(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aA,A.bH(D.fxl,q.gaPn(),A.bm(B.aV,p,p,p,B.c,B.fN,p,p,new A.b7(A.m(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.btz,1.05,D.a8p,p)}w=J.b6(q.e,new C.eIk(q,d),x.l)
w=A.B(w,w.$ti.k("ak.E"))
return new C.Fe(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bT,1,D.a8p,p)},
aQX(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aV.j(0.45),B.q,1)
return A.aG(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(w,A.v(A.a([A.X(d,B.aZ,w,w,w,26),B.N,A.d(e,w,w,w,w,w,w,D.f5D,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.agt,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)},
cj6(d,e){var w,v,u=null,t=e.a,s=t?B.dX:B.c,r=A.m(14),q=A.I(t?B.dZ:B.bS,B.q,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.ek,10)],x.V),o=A.m(14),n=t?B.br:B.bn
n=A.bw(B.UY,new A.fG(1.7777777777777777,C.aPp(!0,B.fv,1/0,N.MN,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.aB,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.d(""+d.d.length+" budget items \xb7 "+A.Aw(d.gwL()),u,u,u,u,u,u,D.f3M,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aG(!1,B.a1,!0,u,A.aL(!1,o,!0,A.v(A.a([n,new A.D(B.bC,A.A(A.a([v,A.aH(u,u,u,u,A.X(Af.Nq,t?B.br:B.bn,u,u,u,u),u,u,u,new C.eIg(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eIh(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e4,u,u,u,1/0)}}
C.bwC.prototype={}
C.qT.prototype={
ag(){var w=this,v=w.c,u=w.d
return A.F(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcRF(){var w,v,u,t,s=this.c
if(s===B.k.jY(s))w=B.o.u(B.k.N(s))
else{v=B.k.aa(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aK(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lh.prototype={
gwL(){return B.d.cI(this.d,0,new C.cvM())},
ag(){var w=this,v=w.d,u=A.U(v).k("K<1,a3<n,@>>")
v=A.B(new A.K(v,new C.cvL(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
baH(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lh(w.a,w.b,v,u,w.e)},
bao(d){return this.baH(d,null)},
Sg(d){return this.baH(null,d)}}
C.Hg.prototype={
a4(){return"FamilyGender."+this.b}}
C.hW.prototype={
ag(){var w=this
return A.F(["id",w.a,"name",w.b,"gender",C.hi_(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aCT(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hW(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ak4.prototype={
a4(){return"FamilyTreeAccessRole."+this.b}}
C.kA.prototype={
ganM(){var w=this.f
return new A.a2(w,new C.bN_(),A.U(w).k("a2<1>")).gM(0)},
ag(){var w=this,v=w.f,u=A.U(v).k("K<1,a3<n,@>>")
v=A.B(new A.K(v,new C.bMZ(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hXJ(w.y)],x.N,x.z)},
yo(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kA(w.a,v,u,t,s,r,w.r,q,p,o)},
baG(d,e){var w=null
return this.yo(w,w,d,e,w,w,w,w)},
cHk(d,e,f,g,h,i,j){return this.yo(d,e,f,g,h,i,j,null)},
aCY(d,e){var w=null
return this.yo(w,w,w,d,w,w,e,w)},
cFO(d){var w=null
return this.yo(w,w,w,w,w,w,d,w)},
cGb(d){var w=null
return this.yo(w,w,w,w,w,w,w,d)},
aCK(d){var w=null
return this.yo(w,w,w,w,d,w,w,w)},
cGQ(d,e,f){var w=null
return this.yo(w,d,w,e,w,w,f,w)},
cFB(d){var w=null
return this.yo(w,w,d,w,w,w,w,w)},
cGo(d,e){var w=null
return this.yo(d,w,w,w,w,e,w,w)}}
C.cvN.prototype={
a4(){return"WrapAlignment."+this.b}}
C.cvO.prototype={
a4(){return"WrapCrossAlignment."+this.b}}
C.aG6.prototype={}
C.b7L.prototype={
bx(d){this.a=d.a
this.b=d.b},
cT(d){var w=new C.b7L()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b7K.prototype={
gw5(){return!0},
gFK(){return this.z.b<this.b.length},
aSy(d){switch(0){case 0:return d.a.c}},
aSf(d){switch(0){case 0:return d.a.d}},
bPF(d,e){switch(0){case 0:return new A.hI(d,e)}},
bP2(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h1(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iC(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.H_(b4)
switch(0){case 0:v=b5.b
u=new A.kx(0,v,0,1/0)
t=w===B.SY
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
s.push(new C.aG6(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aG6(k,j,i))}d=s.length
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
a9=b1.bP2(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bPF(a6,a3+a9)
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
v=A.dp()
u=r.a
v.e5(u.a,u.b,0,1)
w.oR(0,v)
for(u=r.z,u=B.d.dq(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].fY(d)
w.ne(0)},
Gf(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
i3(){return this.z}}
C.buS.prototype={}
var z=a.updateTypes(["az<~>()","R(hW)","R(kA)","~()","R(n9)","a3<n,@>(kA)","H(kA,kA)","n(hW)","kA(a3<@,@>)","R(lh)","R(u6)","n9(a3<@,@>)","u6()","H(lh,lh)","hW(a3<@,@>)","a3<n,@>(hW)","R(qT)","az<~>(lh)","eD<n?>(hW)","H(hW,hW)","n?(hW)","a3<n,@>(n9)","Zs(Y)","n(n)","acE(Y)","r(ob)","H(n9,n9)","hW(hW)","cL(bv<n,Fq>)","cL(JH)","~(hW)","H?(hW)","hW()","ai<hW>()","R(u5)","R(JH)","D(hW)","~(Hg)","R(aed)","r(Hg,n,a0)","YR(Y)","bv<n,ai<a3<n,@>>>(n,ai<n9>)","~(H)","+count,id,name(H,n,n)(kA)","kA(kA)","ZN(Y)","ZO(Y)","R(lx)","lx()","n(kA)","a0y(Y)","Yr(Y)","Yq(Y)","YP(Y)","YT(Y)","r(qT)","acZ(Y)","~(lV)","az<~>([n?])","N(N,lh)","r(lh)","N(N,qT)","a3<n,@>(qT)","qT(a3<@,@>)","Yp(Y)","Sg(Y)","cq(Hf)","lh(a3<@,@>)","u5()","n(lh)","a3<n,@>(lh)","n(S)","H(hW)","kA(a3<n,@>)","XZ(Y)"])
C.fxo.prototype={
$1(d){return d.a+" "+d.b},
$S:117}
C.fxn.prototype={
bjL(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qK(s,d,B.hn,E.F_),$async$$1)
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
$1(d){return this.bjL(d)},
$S:297}
C.fxp.prototype={
$1(d){return d.b},
$S:117}
C.fGA.prototype={
$1(d){var w=null
return A.eI(w,B.K,new F.P4(this.a,this.b,w),w,w,0,B.Y8,B.d0,w,w,w)},
$S:47}
C.fms.prototype={
$1(d){return d!=null},
$S:234}
C.fmt.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:234}
C.fmy.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:173}
C.fv7.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fa(d,w,w,w,A.h2(w,B.rt,w,w,w,w,w,w,w,B.ds,w,w,10.5,w,B.ej,w,!0,w,w,w,w),w),u=f?B.ej:B.vq
return new A.nH(D.bpc,A.a9d(A.a([new A.fO(130,w,v),new A.yG(1,B.Fw,A.fa(e,w,w,w,A.h2(w,g==null?D.e7R:g,w,w,w,w,w,w,w,B.ds,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.xh,B.lo))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1907}
C.fv6.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vk(999)
f=A.wQ(A.ls(h,A.fa("Cashier",h,h,h,A.h2(h,D.za,h,h,h,h,h,h,h,B.ds,h,h,10,h,B.ej,h,!0,h,h,h,h),h),h,new A.ky(D.e7I,h,f,B.hE,h),h,h,D.bpG,h))
w=A.wQ(A.fa("Debt receipt",h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.ds,h,h,22,h,B.ej,h,!0,h,h,h,h),h))
v=A.wQ(A.fa(C.wB(new A.S(Date.now(),0,!1),!0),h,h,h,D.a74,h))
u=A.vk(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fa(s,h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.ds,h,h,14,h,B.ej,h,!0,h,h,h,h),h)
r=A.fa("Person who owes",h,h,h,D.a74,h)
q=A.vk(10)
p=x.C
u=A.ls(h,A.yB(A.a([s,new A.fO(h,2,h),r,new A.fO(h,10,h),A.ls(h,A.yB(A.a([A.fa("Amount owed",h,h,h,D.a74,h),new A.fO(h,2,h),A.fa(A.Aw(t.c),h,h,h,A.h2(h,D.za,h,h,h,h,h,h,h,B.ds,h,h,20,h,B.ej,h,!0,h,h,h,h),h)],p),B.qR,B.lo),h,new A.ky(B.oY,h,q,B.hE,h),h,h,D.boT,1/0)],p),B.qR,B.lo),h,new A.ky(E.aGM,h,u,B.hE,h),h,h,D.bqH,1/0)
q=new A.nq(D.e7L,0.9,B.kE)
r=A.vk(12)
s=i.c
o=s.$2("Original due",C.wB(t.r,!1))
n=s.$2("Current due",C.wB(t.f,!1))
m=i.d
l=new A.nq(m,1.1,B.kE)
k=A.vk(8)
j=i.a
k=A.a([o,n,new A.fO(h,6,h),A.ls(h,A.wQ(A.fa(t.gaJJ(),h,h,h,A.h2(h,m,h,h,h,h,h,h,h,B.ds,h,h,11,h,B.ej,h,!0,0.5,h,h,h),h)),h,new A.ky(h,new A.ps(l,l,l,l),k,B.hE,h),h,h,D.bpO,1/0),new A.fO(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.za))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.za))
else{n=A.fa("Missed days ("+n+")",h,h,h,A.h2(h,B.rt,h,h,h,h,h,h,h,B.ds,h,h,10.5,h,B.ej,h,!0,h,h,h,h),h)
m=A.U(o).k("K<1,RP>")
o=A.B(new A.K(o,new C.fv5(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fO(h,4,h),n,new A.fO(h,6,h),new C.b7K(5,5,new C.b7L(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fO(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fO(h,8,h),w,new A.fO(h,3,h),v,new A.fO(h,16,h),u,new A.fO(h,10,h),A.ls(h,A.yB(k,B.xh,B.lo),h,new A.ky(h,new A.ps(q,q,q,q),r,B.hE,h),h,h,B.agF,1/0)],p)
w=j.a
if(w!=null){v=new A.nq(B.HZ,1,B.kE)
B.d.v(f,A.a([new A.fO(h,16,h),A.fa("Debtor signature",h,h,h,A.h2(h,B.rt,h,h,h,h,h,h,h,B.ds,h,h,10,h,B.ej,h,!0,h,h,h,h),h),new A.fO(h,6,h),A.ls(h,new A.Hw(w,B.V8,h,h),h,new A.ky(h,new A.ps(v,v,v,v),A.vk(6),B.hE,h),82,h,B.Md,1/0)],p))}f.push(new A.fO(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fa(w,h,h,h,D.eXI,h))
f.push(new A.fO(h,18,h))
f.push(A.wQ(A.fa("NGMY.ORG",h,h,h,A.h2(h,D.za,h,h,h,h,h,h,h,B.ds,h,h,14,h,B.ej,h,!0,1.8,h,h,h),h)))
return f},
$S:357}
C.fv5.prototype={
$1(d){var w=null,v=new A.nq(D.I_,0.7,B.kE),u=A.vk(999)
return A.ls(w,A.fa(C.wB(d,!1),w,w,w,A.h2(w,D.I_,w,w,w,w,w,w,w,B.ds,w,w,9.5,w,B.ej,w,!0,w,w,w,w),w),w,new A.ky(w,new A.ps(v,v,v,v),u,B.hE,w),w,w,D.buX,w)},
$S:1908}
C.c11.prototype={
$1(d){var w=null,v=B.bI.j(0.08),u=A.m(999),t=A.I(B.bI.j(0.28),B.q,1)
return A.p(w,A.d(C.wB(d,!1),w,w,w,w,w,w,D.f3h,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eF,w,w,w)},
$S:1909}
C.fH5.prototype={
$1(d){var w=null,v=A.aI(d,B.bU,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bMv,w,w,w,new C.fH2(d),w,w,w,w,w,B.cb),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eI(w,B.K,new A.cS(new A.aY(0,380,0,v.a.b*0.9),A.aG(!1,B.a1,!0,u,new A.D(B.XZ,A.v(A.a([new A.bI(B.a7,w,w,t,w),new A.dq(1,B.cn,A.cd(A.v(A.a([new A.ev(new C.aXM(r,w),s),B.S,A.A(A.a([A.E(A.ey(B.yt,D.ftJ,new C.fH3(s,r,d),A.dg(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f_,w,new A.b7(A.m(14),B.Y),new A.ay(q,1,B.q,-1),w,w,w,w)),1),B.ab,A.E(A.dk(B.a0h,D.fqk,new C.fH4(r,d),A.bm(B.aZ,w,w,w,B.c,w,B.f_,w,new A.b7(A.m(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.r,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.aB,0,w,w,w,w,w,B.ag),w),w,w,0,Aj.Yl,B.d0,w,w,w)},
$S:47}
C.fH2.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fH3.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.ak$.x.h(0,t.a)
m=m==null?null:m.gb8()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lW(2.5),$async$$0)
case 4:w=3
return A.b(e.hr(B.fY),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eT(B.dD.gaM(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aK(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.rO(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fH4.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fBI(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.S(A.b2(null,null,null,null,null,B.r,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fGY.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eI(w,B.aB,A.v(A.a([new A.D(D.bqw,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nu,w,w,w),1),A.aH(w,w,w,w,B.lm,w,w,w,new C.fGW(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dq(1,B.cn,new A.D(B.fV,A.bw(A.m(14),A.fL(t,B.A,w,w,B.cl,B.du,!1,w,!1,w,w),B.aq),w),w),new A.D(B.LR,new A.a7(1/0,w,A.dk(B.oN,D.aQn,new C.fGX(t,this.c,d),A.bm(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.M3,B.d0,w,new A.b7(v,B.Y),w)},
$S:47}
C.fGW.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fGX.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rO(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fH9.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eI(w,B.aB,new A.D(D.bqE,A.v(A.a([A.A(A.a([D.bvY,A.aH(w,w,w,w,B.lm,w,w,w,new C.fH7(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.N,new A.ev(A.bw(A.m(14),A.p(w,A.b3(w,w,w,new C.b9U(s.ax,w),B.au),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a7(1/0,w,A.dk(B.oN,D.aQn,new C.fH8(t,s,d),A.bm(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(v,B.Y),w)},
$S:47}
C.fH7.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fH8.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.ak$.x.h(0,t.a)
n=n==null?null:n.gb8()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lW(2.5),$async$$0)
case 4:w=3
return A.b(e.hr(B.fY),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aK(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.eT(B.dD.gaM(s))
w=5
return A.b(A.rO(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fq2.prototype={
$1(d){return d.a===this.a},
$S:253}
C.dF8.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dEU.prototype={
biZ(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dX:B.c
s=u.a
w=2
return A.b(A.bR(t,null,new C.dEX(s,q,e),p,!0,!0,!1,B.Ie,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dEY(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.biZ(d,e)},
$S:1910}
C.dEX.prototype={
$1(d){var w,v=null,u=this.c===B.w_,t=u?D.d9U:D.d68
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.aB,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bl(!0,new A.D(K.ahf,A.v(A.a([u,B.at,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.br:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.ie(!0,v,v,B.y,L.aNy,new C.dEW(this.a,w,t,d),t.length,v,B.dQ,B.ah,!0)],x.p),B.aj,v,B.e,B.Q,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:26}
C.dEW.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cY.j(0.14)
else w=t.b.a.d.a?B.M:B.aP
v=A.m(14)
if(q)u=B.cY
else u=(t.b.a.d.a?B.br:B.bn).j(0.16)
u=A.I(u,B.q,q?1.6:1)
return A.aL(!1,p,!0,A.p(B.A,C.aXL(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dEV(t.d,r),s,s,s,s,s,s,s)},
$S:198}
C.dEV.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.dEY.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dES.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:91}
C.dET.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cH(B.ct,e,v)
return new A.cZ(e,!1,A.ik(B.A,A.av(A.aG(!1,B.a1,!0,v,new A.e0(new C.dER(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ag),v,v,v),v,new A.bf(t,new A.bo(0.96,1,u),u.k("bf<bJ.T>"))),v)},
$S:30}
C.dER.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bU,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dX:B.c,f=A.m(14),e=A.I((h?B.br:B.bn).j(0.16),B.q,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aL(!1,v,!0,new A.D(B.ep,A.X(B.cC,i.a.d.a?B.br:B.bn,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dEC(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aRt("Name")
r=l.a
q=r.d==null?k:new C.dED(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bm:B.lF
n=A.I(B.cY.j(0.35),B.q,1)
m=r.d
t=A.aM(k,B.T,h,k,!0,B.r,k,A.aN(),w,k,k,k,k,k,2,s.baz(new A.D(B.fy,A.aL(!1,p,!0,A.p(B.A,C.aXL(m==null?"\ud83d\udc64":A.fvW(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.co,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.kx,k,B.a6R,k,k)
v=A.a([v,B.ac,t,B.N,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bn,k,k,k,k,k,k,k,k,11.5,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.an,A.A(A.a([A.E(i.aS5("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dEE(r,a0),r.d===B.w_),1),B.ab,A.E(i.aS5("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dEJ(r,a0),r.d===B.a3P),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.N,new A.bI(B.a3,k,k,A.he(D.bKT,D.fs6,new C.dEK(r,l.e,a0),A.fv(k,k,k,k,k,k,k,k,k,k,k,B.cY,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cb)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.u9(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
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
v.push(A.aG(!1,B.a1,!0,q,A.aL(!1,p,!0,A.p(k,A.A(A.a([A.E(A.v(A.a([t,B.bB,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bHK],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bk,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dEL(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ag))
if(!h)B.d.v(v,A.a([B.N,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.r,k,k,k,k,k,2,i.aRt("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.am,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aZY(r.b.length!==0,B.mo,new C.dEM(r,i,a0),new C.dEN(r,a0),"Upload from gallery","ID photo"))
v.push(i.aZY(r.c.length!==0,D.bB4,new C.dEO(r,i,d,a0),new C.dEP(r,a0),"Camera or gallery","Selfie"))
v.push(B.N)
t=l.w
v.push(new Ah.a74("Signature (optional)",t,new C.dEQ(a0),new C.dEF(a0,t),new C.dEG(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.br:B.bn
s=(i?B.br:B.bn).j(0.28)
s=A.E(A.dT(E.aQg,new C.dEH(d),A.dg(k,k,k,k,k,k,k,k,k,t,k,k,B.vd,k,new A.b7(A.m(10),B.Y),new A.ay(s,1,B.q,-1),k,k,k,k)),1)
t=A.bm(B.cY,k,k,k,B.c,k,B.vd,k,new A.b7(A.m(10),B.Y),k,k,k)
v.push(A.A(A.a([s,B.ab,A.E(A.bH(A.d(h?"Save":"Update",k,k,k,k,k,k,B.uA,k,k,k),new C.dEI(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cd(A.v(v,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.vm,B.je,k,k,360)},
$S:179}
C.dEC.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dED.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dEE.prototype={
$0(){return this.b.$1(new C.dEB(this.a))},
$S:0}
C.dEB.prototype={
$0(){var w=this.a
w.d=B.w_
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dEJ.prototype={
$0(){return this.b.$1(new C.dEA(this.a))},
$S:0}
C.dEA.prototype={
$0(){var w=this.a
w.d=B.a3P
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dEK.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dEL.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wF(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dEz(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEz.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcj(),w.gce(),w.gcu(),0,0,0,0,0)},
$S:0}
C.dEM.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.OY(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dEy(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEy.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dEN.prototype={
$0(){return this.b.$1(new C.dEx(this.a))},
$S:0}
C.dEx.prototype={
$0(){return this.a.b=""},
$S:0}
C.dEO.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dX:B.c
w=3
return A.b(A.bR(q,null,new C.dEv(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.OY(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dEw(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEv.prototype={
$1(d){var w=null
return A.bl(!0,A.v(A.a([A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.aml,w,w,w,w,new C.dEp(d),!1,w,w,w,w,w,w,w,D.fiE,w,w,w),A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.amj,w,w,w,w,new C.dEq(d),!1,w,w,w,w,w,w,w,D.fpo,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.af,!0,!0)},
$S:26}
C.dEp.prototype={
$0(){A.a5(this.a,!1).O("camera")
return null},
$S:0}
C.dEq.prototype={
$0(){A.a5(this.a,!1).O("gallery")
return null},
$S:0}
C.dEw.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dEP.prototype={
$0(){return this.b.$1(new C.dEu(this.a))},
$S:0}
C.dEu.prototype={
$0(){return this.a.c=""},
$S:0}
C.dEQ.prototype={
$0(){return this.a.$1(new C.dEt())},
$S:0}
C.dEt.prototype={
$0(){},
$S:0}
C.dEF.prototype={
$0(){return this.a.$1(new C.dEs(this.b))},
$S:0}
C.dEs.prototype={
$0(){return B.d.a9(this.a)},
$S:0}
C.dEG.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ah9(u.a,null,null,new C.dEr(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEr.prototype={
$4(d,e,f,g){this.a.$1(new C.dEo(this.b,d))},
$S:438}
C.dEo.prototype={
$0(){var w=this.a
B.d.a9(w)
B.d.v(w,this.b)},
$S:0}
C.dEH.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dEI.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.S(D.eTt)
return}if(w.a.d==null){w.c.I(x.q).f.S(D.eQp)
return}A.a5(w.c,!1).O(!0)},
$S:0}
C.dFb.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:91}
C.dFc.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dX:B.c,n=A.m(14),m=A.I((p?B.br:B.bn).j(0.16),B.q,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.aB,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Aw(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.br:B.bn,r,r,r,r,r,r,r,r,13,r,r,B.a5,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.yP(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.yP(r).length>0?B.bI:B.cY,r,r,r,r,r,r,r,r,12,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.br:B.bn
t=(q?B.br:B.bn).j(0.28)
s=x.p
return new A.cZ(e,!1,A.av(A.aG(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.N,v,u,B.aA,A.A(A.a([A.E(A.dT(B.nv,new C.dF9(d),A.dg(r,r,r,r,r,r,r,r,r,w,r,r,B.jx,r,new A.b7(A.m(10),B.Y),new A.ay(t,1,B.q,-1),r,r,r,r)),1),B.ab,A.E(A.bH(D.fpN,new C.dFa(d),A.bm(B.cY,r,r,r,B.c,r,B.jx,r,new A.b7(A.m(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.B7,O.M0,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ag),r,r,r),r)},
$S:30}
C.dF9.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dFa.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dF5.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dF6(r),p=r.a.d.a,o=p?B.dX:B.c,n=A.m(14),m=A.I((p?B.br:B.bn).j(0.14),B.q,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.aB,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Aw(l.c),s,s,s,s,s,s,D.f4K,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iy((r.a.d.a?B.br:B.bn).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a_3,"View receipt",new C.dEZ(r,d,l))
u=l.x!=null
t=u?B.r8:B.pP
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bqB,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dF_(r,d,l)),q.$3$icon$label$onTap(B.Bo,"Edit",new C.dF0(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mo,"View / download ID",new C.dF1(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bB3,"View / download selfie",new C.dF2(r,d,l)))
if(l.gaEA())p.push(q.$3$icon$label$onTap(A6.a08,"View / download signature",new C.dF3(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bI,B.e5,"Delete",new C.dF4(r,d,l)))
p.push(B.at)
return A.bl(!0,new A.D(B.vi,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:26}
C.dF6.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.aB
else w=d
return A.aL(!1,v,!0,new A.D(B.eP,A.A(A.a([A.X(e,w,v,v,v,20),B.bf,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1911}
C.dEZ.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fH1(w,this.c)},
$S:0}
C.dF_.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.RC(this.c)},
$S:0}
C.dF0.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.CS(this.c)},
$S:0}
C.dF1.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCH(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dF2.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCH(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dF3.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fH6(w,this.c)},
$S:0}
C.dF4.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.NC(0,this.c)},
$S:0}
C.dFd.prototype={
$1(d){return d.x==null},
$S:253}
C.dFe.prototype={
$1(d){return d.x!=null},
$S:253}
C.dFf.prototype={
$2(d,e){return d+e.c},
$S:1912}
C.dFg.prototype={
$0(){return this.a.byb()},
$S:0}
C.dF7.prototype={
$0(){return this.a.ae6(this.b)},
$S:0}
C.fqC.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fqD.prototype={
$0(){return B.d.gL(D.a1k)},
$S:z+68}
C.d4Y.prototype={
$0(){var w=this.a
return w.m(new C.d4W(w,this.b))},
$S:0}
C.d4W.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d4X.prototype={
$0(){},
$S:0}
C.d4Z.prototype={
$0(){var w=this.a.gbWW()
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.fsG.prototype={
$1(d){return C.h2N(A.a1(d,x.N,x.z))},
$S:z+11}
C.fsH.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fsI.prototype={
$2(d,e){var w=A.c7(d.a,null),v=A.c7(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+26}
C.fFG.prototype={
$1(d){return d.ag()},
$S:z+21}
C.fNN.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fpU.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bMV.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f0(e,v)?v:null},
$S:1913}
C.fGe.prototype={
$1(d){var w=this
return new C.YR(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d5D.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d5C(w,d))},
$S:z+66}
C.d5C.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5r.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cy(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d5o.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d5_.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d50.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d5s.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d58.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.dX:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ek(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.d56(d),w,w),A.bH(B.wj,new C.d57(d),A.bm(B.mT,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:20}
C.d56.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d57.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d59.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d5p.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d5q.prototype={
$0(){return B.d.gL(D.yD)},
$S:z+12}
C.d54.prototype={
$1(d){var w=this.a,v=w.y,u=w.gy6(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Sg(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d55.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5a.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Yp(v,u,J.ad(w.d),null)},
$S:z+64}
C.d5b.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5B.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aE(s,new C.Y7(r.y,r.gy6(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d5z(r),s,s,s,s,s,s,!1,B.a8)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b9i(v,e,w,u,t,r.gbO8(),C.hhZ(r.y.Q),r.gy6(0),s)
w=t}return A.c6(q,new C.d5A(r,e),new A.D(B.Yd,w,s))},
$S:1914}
C.d5A.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd_(t).ay){t=this.b
u=x.cy.a(B.d.gd_(u.f.f)).guB(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dp()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fA(v*3.141592653589793*0.5)
return A.fs(B.a3,A.dc(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.d5z.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFF(B.pD,B.iy)},
$S:0}
C.d5l.prototype={
$0(){var w=this.a
return w.m(new C.d5k(w))},
$S:0}
C.d5k.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d5m.prototype={
$0(){var w=this.a.c
w.toString
A.a5(w,!1).O(null)
return null},
$S:0}
C.d51.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jO.j(0.5),r=x.p,q=A.a([D.fhg,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cm(p.d)?"Write this book":"Write a new book"
q.push(p.Ym(d,B.dW,w,J.cm(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Ym(d,L.akc,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cy(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cB,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.ke.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cB,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.ke.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Ym(d,A0.all,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Ym(d,B.pV,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Ym(d,B.pV,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eI(u,E.Az,A.bl(!0,new A.D(A5.xA,A.v(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.ahE,B.d0,u,new A.b7(t,new A.ay(s,1.4,B.q,-1)),u)},
$S:47}
C.d5n.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.d5e.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cy(w.d)
return new C.YT(v,J.cy(w.d),w.r+1,null)},
$S:z+54}
C.d5f.prototype={
$1(d){var w=null
return A.oh(!1,A.ek(w,w,w,E.Az,new A.kf(this.a,new C.d5d(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:333}
C.d5d.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a6x,B.od,A.E(A.d(e,w,w,w,w,w,w,B.iG,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:749}
C.d5g.prototype={
$0(){return this.a.a=!1},
$S:49}
C.d5h.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:187}
C.d5i.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5j.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.AF(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.R5(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d5c(s,t))
w=4
return A.b(s.kQ(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d5c.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5u.prototype={
$1(d){var w=null
return A.oh(!1,A.ek(w,w,w,E.Az,new A.kf(this.a,new C.d5t(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:333}
C.d5t.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a6x,B.od,A.E(A.d(e,w,w,w,w,w,w,B.iG,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:749}
C.d5v.prototype={
$0(){return this.a.a=!1},
$S:49}
C.d5w.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:187}
C.d5x.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:187}
C.d5y.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.AF(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kQ(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d52.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bg3(B.pD,V.LF)},
$S:0}
C.d53.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFF(B.pD,V.LF)},
$S:0}
C.d7n.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d7o.prototype={
$1(d){var w=this.a
return w.m(new C.d7m(w))},
$S:9}
C.d7m.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d7p.prototype={
$1(d){var w=this.a
return w.m(new C.d7l(w))},
$S:9}
C.d7l.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d7q.prototype={
$1(d){var w=this.a
return w.m(new C.d7k(w))},
$S:9}
C.d7k.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d7r.prototype={
$0(){var w=this.a
return w.m(new C.d7j(w,this.b))},
$S:0}
C.d7j.prototype={
$0(){var w=this.b
this.a.d.saV(0,w)
return w},
$S:0}
C.d7s.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga10()
A.a5(this.b,!1).O(new A.bnV(w,v))},
$S:0}
C.d5S.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d5R.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.YP(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d5W.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d5V.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b6g(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hD,v,v,v)
return A.ek(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.d5T(d),v,v),A.bH(B.wj,new C.d5U(d),A.bm(B.mT,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Az,w,v,v,v,v,D.fga,v)},
$S:20}
C.d5T.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d5U.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d5X.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d5Y.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.cd(A.bW(B.bz,r,B.bq,18,14),B.r,t,B.y,t,D.brv,t,t,B.ah)},
$S:338}
C.d5Q.prototype={
$0(){return this.a.PE(0,this.b)},
$S:0}
C.d5P.prototype={
$0(){return this.a.P8(0,this.b)},
$S:0}
C.cEx.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cEy.prototype={
$0(){return B.d.gL(D.yD)},
$S:z+12}
C.cEz.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bZ(0,new A.D(d,A.c_(w,new A.o(w,w,A.I(this.a.j(f),B.q,g),v,w,w,B.n),B.bd),w),0,0,0)},
$S:1916}
C.cXZ.prototype={
$1(d){return this.a.m(new C.cXY(this.b,this.c))},
$S:9}
C.cXY.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cYn.prototype={
$1(d){return this.a.m(new C.cYa())},
$S:2}
C.cYa.prototype={
$0(){},
$S:0}
C.cYo.prototype={
$1(d){return this.a.m(new C.cY9())},
$S:2}
C.cY9.prototype={
$0(){},
$S:0}
C.cYp.prototype={
$0(){var w=this.a
return w.m(new C.cY8(w,this.b))},
$S:0}
C.cY8.prototype={
$0(){var w=this.a
return w.d=w.go0().Fp(this.b.a)},
$S:0}
C.cYq.prototype={
$0(){var w=this.a
return w.m(new C.cY7(w,this.b))},
$S:0}
C.cY7.prototype={
$0(){var w=this.a
return w.d=w.go0().cF7(this.b)},
$S:0}
C.cYr.prototype={
$1(d){return this.a.m(new C.cY6())},
$S:2}
C.cY6.prototype={
$0(){},
$S:0}
C.cYs.prototype={
$0(){var w=this.a
return w.m(new C.cY5(w,this.b))},
$S:0}
C.cY5.prototype={
$0(){var w=this.a
return w.d=w.go0().cFc(this.b.a)},
$S:0}
C.cYt.prototype={
$1(d){var w=this.a
return w.m(new C.cYi(w,d))},
$S:6}
C.cYi.prototype={
$0(){var w=this.a
return w.d=w.go0().cG6(this.b)},
$S:0}
C.cYu.prototype={
$1(d){var w=this.a
return w.d=w.go0().aCN(d)},
$S:2}
C.cYv.prototype={
$1(d){var w=this.a
return w.d=w.go0().cFf(d)},
$S:2}
C.cYx.prototype={
$1(d){var w=this.a
return w.d=w.go0().cG4(d)},
$S:2}
C.cYy.prototype={
$1(d){var w=this.a
return w.m(new C.cYh(w,d))},
$S:9}
C.cYh.prototype={
$0(){var w=this.a
return w.d=w.go0().cFW(this.b)},
$S:0}
C.cYz.prototype={
$0(){var w=this.a,v=w.go0(),u=B.a.i(w.gy6(0).a.a),t=B.a.i(w.gaA1().a.a)
u=v.baQ(B.a.i(w.gapS().a.a),t,u)
A.a5(this.b,!1).O(u)
return null},
$S:0}
C.dTa.prototype={
$0(){var w=this.a
w.vI()
w.a.bp()
w.a.pO()},
$S:0}
C.dT9.prototype={
$0(){var w=this.a
w.vI()
w.a.bp()
w.a.pO()},
$S:0}
C.dTc.prototype={
$0(){var w=this,v=w.b
if(J.cy(v)||J.cm(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dTd.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dTe.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dT8.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dTb.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dTg.prototype={
$0(){this.a.O7()
return null},
$S:0}
C.dTf.prototype={
$0(){return this.a.Ef(this.b)},
$S:0}
C.dSB.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.de,w,w,!0,w,w,new C.dSz(d),w,w),r=A.bm(B.bW,w,w,w,w,w,w,w,w,w,w,w)
return A.ek(A.a([s,A.bH(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dSA(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:20}
C.dSz.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dSA.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dSC.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cFB(this.b)},
$S:0}
C.dSw.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aRJ(w.b,w.c,w.d)},
$S:8}
C.dS4.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dS5.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSj.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Gb(t.a.c),$async$$0)
case 2:s=r.r9(q.dH(e,new C.dSh(t)))
if(s!=null&&t.c!=null)t.m(new C.dSi(t,s))
t.a.bp()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSh.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dSi.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSk.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dSl.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSv.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cGo(C.hi8(w),w)},
$S:0}
C.dSt.prototype={
$1(d){return new A.e0(new C.dSs(this.a,this.b),null)},
$S:21}
C.dSs.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dX:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.br:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.alZ,v,v,v,p>0?new C.dSo(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aQ,A.A(A.a([o,A.E(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.amy,v,v,v,new C.dSp(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.ek(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dSq(d),v,v),A.bH(B.pa,new C.dSr(d),A.bm(B.bW,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:167}
C.dSo.prototype={
$0(){return this.b.$1(new C.dSn(this.a))},
$S:0}
C.dSn.prototype={
$0(){return--this.a.a},
$S:0}
C.dSp.prototype={
$0(){return this.b.$1(new C.dSm(this.a))},
$S:0}
C.dSm.prototype={
$0(){return++this.a.a},
$S:0}
C.dSq.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dSr.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dSu.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cGb(this.a.a)
w.r.a9(0)},
$S:0}
C.dRT.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ahh(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hbQ(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dRU.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aCK(w)},
$S:0}
C.dSE.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.acE(this.b,w,this.c,null)},
$S:z+24}
C.dSy.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dX:B.c,t=A.m(20),s=A.X(B.li,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.Q,0,B.p)
return A.ek(A.a([A.bH(D.fqU,new C.dSx(d),A.bm(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.bb,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:20}
C.dSx.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dRV.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dRW.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dRX.prototype={
$1(d){return d.a},
$S:z+7}
C.dRY.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.L)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hW(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aCK(w)},
$S:0}
C.dS1.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ahh(q)
w=A.U(q).k("a2<1>")
q=A.B(new A.a2(q,new C.dS_(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hbQ(v.e,null,r,v.f,v.r,new C.dS0(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dS0.prototype={
$0(){return this.a.a9f(this.b)},
$S:0}
C.dS_.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dS2.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("K<1,hW>")
w=A.B(new A.K(w,new C.dRZ(this.b),v),v.k("ak.E"))
u.d=t.aCK(w)},
$S:0}
C.dRZ.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dSD.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dSe.prototype={
$1(d){return d.length!==0},
$S:3}
C.dSf.prototype={
$1(d){var w=this
return new A.e0(new C.dSd(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dSd.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dX:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.br:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.br:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.K(o,new C.dS9(u,e,o),A.U(o).k("K<1,r>")))
p.push(B.N)
u=w.d
p.push(A.aM(v,B.T,!1,v,!0,B.r,v,A.aN(),u,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(12),B.dg),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ai,v,v,v,v,v,B.m0,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.am,v,v,v,v))
p=A.v(p,B.aj,v,B.e,B.Q,0,B.p)
t=w.a
return A.ek(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dSa(d),v,v),A.bH(B.J7,new C.dSb(t,u,o,e),A.bm(B.bW,v,v,v,v,v,v,v,v,v,v,v)),A.bH(D.fel,new C.dSc(t,u,o,d),A.bm(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:167}
C.dS9.prototype={
$1(d){var w=null
return A.dL(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bOs,w,w,w,new C.dS8(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1917}
C.dS8.prototype={
$0(){return this.a.$1(new C.dS6(this.b,this.c))},
$S:0}
C.dS6.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dSa.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dSb.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dS7(w.c,u))
v.bO(0,B.c5)}},
$S:0}
C.dS7.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dSc.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a5(w.d,!1).O(!0)},
$S:0}
C.dSg.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cGQ(this.b,D.tF,C.G9(v,w.a.c))},
$S:0}
C.dSL.prototype={
$1(d){return d.as},
$S:z+1}
C.dSM.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iM(this.b,w)},
$S:0}
C.dSN.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.i65(v)
return w.Vk(v==null?null:v.a)},
$S:0}
C.dSO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hJq(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gco(k)){k=A.aQ(1/0,e.a,e.b)
s=A.aQ(1/0,e.c,e.d)
l.coW(new A.at(u,t),v.gbgU(),new A.at(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cMF:D.cL6
q=A.I(s?B.dq:D.b9R,B.q,1)
p=A.m(22)
o=A.bZ(0,A.b3(m,m,m,new C.bcG(s,m),B.au),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bw(p,new A.an(B.W,m,B.aa,B.r,A.a([o,A.bZ(0,A.ui(new A.Q(n,n,n,n),new A.a7(u,t,new C.bdz(l.d,v,l.f,w,new C.dSH(l),l.gc8X(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.buZ(s,new C.dSI(l,e),new C.dSJ(l,e),new C.dSK(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.b_,B.b5,B.x,r,m,m),B.n),m,m,m,A1.agJ,m,m,m,m)},
$S:223}
C.dSH.prototype={
$1(d){var w=this.a
w.m(new C.dSF(w,d))},
$S:2}
C.dSF.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.J(0,v)},
$S:0}
C.dSI.prototype={
$0(){var w=this.b
return this.a.b8v(1.25,new A.at(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dSJ.prototype={
$0(){var w=this.b
return this.a.b8v(0.8,new A.at(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dSK.prototype={
$0(){var w=this,v=w.b
return w.a.aRJ(new A.at(A.aQ(1/0,v.a,v.b),A.aQ(1/0,v.c,v.d)),new A.at(w.c,w.d),w.e.gbgU())},
$S:0}
C.dSP.prototype={
$0(){var w=this.a
return w.m(new C.dSG(w))},
$S:0}
C.dSG.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dS3.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fJ(new A.fC(s.c)),$async$$0)
case 2:t.xA("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d61.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bhh(u,C.hmc(v.c,u),new C.d60(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d60.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d62.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bkD(d.d,d.c,u.f.t(0,d.a),new C.d6_(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d6_.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fqG.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.r9(new A.cR(new A.a2(v,new C.fqH(d),w.k("a2<1>")),new C.fqI(),w.k("cR<1,n>")))},
$S:z+20}
C.fqH.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fqI.prototype={
$1(d){return d.a},
$S:z+7}
C.fqE.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fqF.prototype={
$1(d){return d.b},
$S:z+7}
C.fqL.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.r9(new A.cR(new A.a2(v,new C.fqM(d),w.k("a2<1>")),new C.fqN(),w.k("cR<1,n>")))},
$S:z+20}
C.fqM.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fqN.prototype={
$1(d){return d.a},
$S:z+7}
C.fqJ.prototype={
$1(d){var w,v=A.et([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ai(0,w)&&v.J(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fqK.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d64.prototype={
$0(){return this.a},
$S:z+32}
C.d6l.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ai(0,d)},
$S:259}
C.d6d.prototype={
$2(d,e){var w=this.a.cg(0,d,new C.d6e()),v=J.a6(w)
if(!v.t(w,e))v.J(w,e)},
$S:116}
C.d6e.prototype={
$0(){return A.a([],x.s)},
$S:750}
C.d6c.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f0(w,e)
return w===!0},
$S:332}
C.d65.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d6b.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d6a.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.J(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.C6:v)
u=1
while(v.C())u+=s.$2(v.gT(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.T:v)
while(v.C()){t=v.gT(v)
if(e.t(0,t))continue
e.J(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.C6:t)
while(t.C())u+=s.$2(t.gT(t).a,e)}return u},
$S:1919}
C.d66.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d6f.prototype={
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
t=J.aV(t==null?D.C6:t)
while(t.C()){r=t.gT(t)
if(r.a!==a9&&!B.d.b5(w,new C.d6g(r)))w.push(r)}}B.d.bn(w,new C.d6h(a8))
B.d.b0(w,new C.d6i())
q=C.hJp(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.evl],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bnF(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1920}
C.d6g.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d6h.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d6i.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.d6j.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a6(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a4(v).k("bc<2>")).cI(0,0,B.ph)+88-w.gL(n).a}else u=0
for(w=J.a6(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:696}
C.d6k.prototype={
$1(d){return 16+d*156},
$S:245}
C.d63.prototype={
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
$S:187}
C.d67.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aI7(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:116}
C.d68.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d69.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:751}
C.d6m.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:751}
C.d6n.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:461}
C.d6o.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:189}
C.d6p.prototype={
$1(d){return d>=0.5},
$S:119}
C.f8R.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hq(A.aL(!1,v,!0,new A.a7(38,38,A.X(d,this.a.c?B.c:B.cD,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1922}
C.eKM.prototype={
$1(d){var w=null,v=A.m(8),u=B.bW.j(0.12),t=A.m(8)
return new A.D(B.n8,A.aL(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.f0t,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.Mc,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eKL(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eKL.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dme.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dmd.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.ns,B.L,w,w)
return A.ek(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.dmb(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.md,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dmc(d),w,w)],x.p),B.bb,B.AX,w,u,D.bsL,w,D.buH,new A.b7(v,B.Y),w,w)},
$S:20}
C.dmb.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dmc.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dmn.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dmo.prototype={
$1(d){var w=this.a
return w.m(new C.dmm(w,d))},
$S:z+37}
C.dmm.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmp.prototype={
$1(d){var w=null
return A.qe(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dms.prototype={
$1(d){var w=this.a
return w.m(new C.dml(w,d))},
$S:32}
C.dml.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dmr.prototype={
$1(d){var w=null
return A.qe(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dmt.prototype={
$1(d){var w=this.a
return w.m(new C.dmk(w,d))},
$S:32}
C.dmk.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dmu.prototype={
$0(){var w=this.a
return w.m(new C.dmj(w))},
$S:0}
C.dmj.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dmv.prototype={
$0(){var w=this.a
return w.m(new C.dmi(w))},
$S:0}
C.dmi.prototype={
$0(){return++this.a.at},
$S:0}
C.dmw.prototype={
$0(){var w=this.a
return w.m(new C.dmh(w))},
$S:0}
C.dmh.prototype={
$0(){return--this.a.ax},
$S:0}
C.dmx.prototype={
$0(){var w=this.a
return w.m(new C.dmg(w))},
$S:0}
C.dmg.prototype={
$0(){return++this.a.ax},
$S:0}
C.dmy.prototype={
$1(d){var w=this.a
return w.m(new C.dmf(w,d))},
$S:9}
C.dmf.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dmq.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dmz.prototype={
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
return A.E(A.aG(!1,B.a1,!0,r,A.aL(!1,o,!0,A.dj(r,A.v(A.a([t,B.at,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bc,new A.o(w,r,u,v,r,r,B.n),B.eE,r,r,r,B.jx,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dmA(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
$S:z+39}
C.dmA.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dmJ.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.c7z.prototype={
$2(d,e){return new A.bv(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:96}
C.c7G.prototype={
$1(d){return d.ag()},
$S:z+5}
C.c7H.prototype={
$2(d,e){var w=J.b6(e,new C.c7F(),x.a)
w=A.B(w,w.$ti.k("ak.E"))
return new A.bv(d,w,x.d2)},
$S:z+41}
C.c7F.prototype={
$1(d){return d.ag()},
$S:z+21}
C.c7B.prototype={
$1(d){return C.ak5(A.a1(d,x.N,x.z))},
$S:z+8}
C.c7C.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c7D.prototype={
$1(d){return C.h2N(A.a1(d,x.N,x.z))},
$S:z+11}
C.c7E.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c7L.prototype={
$1(d){return new A.aFc(d.f.length,d.a,d.b)},
$S:z+43}
C.c7M.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:645}
C.c7I.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c7J.prototype={
$1(d){return d.cFO(C.G9(d,this.a))},
$S:z+44}
C.dSY.prototype={
$1(d){return C.tP(d,this.a.a.c)},
$S:z+2}
C.dSZ.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dT2.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dT3.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dSV.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZe(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.y7("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.p0(r.c,r.e),$async$$0)
case 4:s.y7(p)
w=5
return A.b(s.Je(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSW.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZe(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.y7("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.p0(r.c,r.e),$async$$0)
case 4:s.y7(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSX.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.UC(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.y7("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.y7("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.y7("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Je(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.aa(j)
o=r.a
if(o.c==null){w=1
break}o.y7(B.a.ed(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dT1.prototype={
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
break}if(p==null){s.y7("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a5(r,!1).c8(A.e9(new C.dT0(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.p0(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dT0.prototype={
$1(d){var w=this.b
return new C.ZN(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dT_.prototype={
$1(d){return D.fRl},
$S:z+46}
C.dT5.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dT6.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dT4(w,d)
return new A.D(B.db,new C.bdD(this.b,d.c,d.a,w,null),null)},
$S:1923}
C.dT4.prototype={
$0(){return this.a.X2(this.b.b)},
$S:0}
C.dSQ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dSR.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dSS.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dST.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dSU.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dT7.prototype={
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
$S:190}
C.dEg.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dEh.prototype={
$0(){return B.d.gL(D.a2J)},
$S:z+48}
C.dEi.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.X(this.b.d,B.c.j(0.95),w,w,D.cSR,44),w,w,w),w,w,new C.bip(u,t,v,w),B.au)},
$S:68}
C.fGH.prototype={
$1(d){return A.oL(new C.fGG(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:127}
C.fGG.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dX:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rs,24)],x.V),o=r?B.dZ:B.bS
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bW.j(0.18)],x.O)
w=A.p(t,D.bJ_,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a8(B.a3,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.aB,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.S,o,new A.D(E.ahI,A.A(A.a([w,B.bf,A.E(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.br:B.bn,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.E(A.ie(!0,t,e,B.y,D.eOC,new C.fGF(this.b,s),20,B.ahj,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kD,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:114}
C.fGF.prototype={
$2(d,e){var w=null,v=D.a2J[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.dZ:B.bS,B.q,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.ek,8)],x.V),p=A.m(15),o=A.E(new C.a5I(v.a,!0,w),1),n=s?B.js:B.iQ,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aP:B.aB,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a1,!0,w,A.aL(!1,u,!0,A.eE(A.bw(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.br:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.le,w,w,w)],l),B.aj,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fGE(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)},
$S:77}
C.fGE.prototype={
$0(){A.a5(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cfe.prototype={
$0(){return this.a.af9(this.b)},
$S:0}
C.fG3.prototype={
$1(d){return D.fNB},
$S:z+74}
C.fNy.prototype={
$1(d){var w=this
return new C.a0y(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fG8.prototype={
$1(d){return new C.Yr(this.a,null)},
$S:z+51}
C.fG7.prototype={
$1(d){return D.fOA},
$S:z+52}
C.cYL.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cYM.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cYK(w,d))},
$S:32}
C.cYK.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cYN.prototype={
$1(d){return this.a.JO()},
$S:2}
C.cYO.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cYH.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cYI.prototype={
$1(d){return this.a.JO()},
$S:2}
C.cYJ.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cwk.prototype={
$0(){},
$S:0}
C.cwq.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cwr.prototype={
$0(){return this.a.aNc(-1)},
$S:0}
C.cws.prototype={
$1(d){return this.a.m(new C.cwp())},
$S:2}
C.cwp.prototype={
$0(){},
$S:0}
C.cwt.prototype={
$0(){return this.a.aNc(1)},
$S:0}
C.cwu.prototype={
$1(d){return this.a.m(new C.cwo())},
$S:2}
C.cwo.prototype={
$0(){},
$S:0}
C.cwv.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.dZ:B.bS
return A.u8(u,u,B.aZ,r,u,new C.cwn(t,d),B.B8,s,w,u,new A.ay(v,1,B.q,-1),B.cb)},
$S:1924}
C.cwn.prototype={
$1(d){var w=this.a
return w.m(new C.cwl(w,this.b))},
$S:9}
C.cwl.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cww.prototype={
$1(d){return this.a.m(new C.cwm())},
$S:2}
C.cwm.prototype={
$0(){},
$S:0}
C.cwx.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.f8j.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a5(this.b,!1).O(w)},
$S:2}
C.f8k.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.f8l.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a5(this.b,!1).O(w)},
$S:0}
C.f8h.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbxk()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b3(new A.D(D.buG,new A.ev(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.buO(p,v,this.b.a,u,t,r),r,r,B.au)},
$S:68}
C.f8i.prototype={
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
return A.aG(!1,B.a1,!0,p,A.aL(!1,v,!0,A.eE(D.e5K,r,new A.o(r,r,A.I(B.c.j(0.4),B.q,1.5),u,r,new A.a8(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
$S:140}
C.fEJ.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:67}
C.eHW.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eHN.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eHO.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eHU.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e0(new C.eHT(w,this.b),null)},
$S:21}
C.eHT.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dX:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aB,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eI(w,u,new A.D(B.ahC,A.v(A.a([s,B.an,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.h8D(new C.eHQ(r,e),r.a),B.aA,A.A(A.a([A.E(A.dT(B.de,new C.eHR(d),w),1),B.av,A.E(A.bH(B.TF,new C.eHS(r,d),A.bm(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.aj,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(t,B.Y),w)},
$S:98}
C.eHQ.prototype={
$1(d){return this.b.$1(new C.eHP(this.a,d))},
$S:32}
C.eHP.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eHR.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eHS.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.eHV.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Sg(this.b)},
$S:0}
C.eHI.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.bao(w)},
$S:0}
C.eHM.prototype={
$1(d){return this.bjr(d)},
bjr(d){var w=0,v=A.j(x.H),u,t=this,s
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
C.eHL.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("a2<1>")
w=A.B(new A.a2(w,new C.eHK(this.b),v),v.k("J.E"))
u.d=t.bao(w)},
$S:0}
C.eHK.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eHX.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iM(this.b,w)},
$S:0}
C.eHY.prototype={
$1(d){return this.a.bBn(d,this.b)},
$S:z+55}
C.eHJ.prototype={
$0(){return this.a.a9e(this.b)},
$S:0}
C.fNo.prototype={
$1(d){return new C.acZ(this.a,this.b,this.c,null)},
$S:z+56}
C.eI_.prototype={
$0(){return this.a.ZG(this.b)},
$S:0}
C.eI0.prototype={
$0(){return this.a.PA(this.b)},
$S:0}
C.eI1.prototype={
$0(){return this.a.Ea(this.b)},
$S:0}
C.eI2.prototype={
$0(){return this.a.ZH(this.b)},
$S:0}
C.eHZ.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eHD.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eHE.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eHF.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eHH.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pU(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eHG(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eHG.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eIp.prototype={
$2(d,e){return d+e.gwL()},
$S:z+59}
C.eIl.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eIm.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eI6.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dX:B.c,s=A.m(24),r=A.p(v,D.bJp,B.f,v,v,new A.o(B.ay.j(u?0.18:0.08),v,A.I(B.ay.j(0.28),B.q,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aB,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.br:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aP:B.aB
u=u?B.dZ:B.bS
w=x.p
return A.eI(v,t,new A.D(B.xE,A.v(A.a([r,B.aQ,q,B.N,p,B.d5,A.A(A.a([A.E(A.dT(B.nv,new C.eI4(d),A.dg(v,v,v,v,v,v,v,v,v,o,v,v,B.f_,v,new A.b7(A.m(14),B.Y),new A.ay(u,1,B.q,-1),v,v,v,v)),1),B.av,A.E(A.bH(D.fuD,new C.eI5(d),A.bm(B.ay,v,v,v,v,v,B.f_,v,new A.b7(A.m(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d0,v,new A.b7(s,B.Y),v)},
$S:47}
C.eI4.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.eI5.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eIf.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dX:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fM,28)],x.V),g=k?D.cZm:B.a27,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aA,D.eIR,B.at,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cv,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.ax,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.ahF,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b3E(B.b7,B.iX,new C.eIc(v,d),l,"Camera import","Scan QR"),1),B.av,A.E(v.b3E(B.cz,M.yi,new C.eId(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.ay.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.ay.j(0.28),B.q,1)
o=A.p(m,D.bIO,B.f,m,m,new A.o(B.ay.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.aB,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bn,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bl(!0,new A.D(B.vk,A.p(m,A.v(A.a([g,new A.D(B.ahD,A.v(A.a([w,B.S,u,B.by,t,B.S,A.aG(!1,B.a1,!0,m,A.aL(!1,s,!0,A.p(m,A.A(A.a([o,B.bf,n,A.X(B.ex,k?B.br:B.bn,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bC,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eIe(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:26}
C.eIc.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.vi("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eId.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.vi("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eIe.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.Np(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eIa.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dX:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eT,24)],x.V),k=o?B.dZ:B.bS
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.br:B.bn
u=A.bw(w,new A.a7(48,48,C.aPp(!0,A.m(12),48,N.MN,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aP:B.aB,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Aw(v.gwL())
s=x.p
r=this.a
return A.bl(!0,new A.D(B.vk,A.p(q,A.v(A.a([B.S,k,new A.D(D.ahA,A.A(A.a([u,B.bf,A.E(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.br:B.bn,q,q,q,q,q,q,q,q,12,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.AO,r.cj5(B.tY,B.aV,new C.eI8(d),p,"QR code or backup file","Transfer project"),r.b0C(!0,B.e5,B.ay,new C.eI9(d),p,"Remove from this device","Delete project"),B.S],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:26}
C.eI8.prototype={
$0(){A.a5(this.a,!1).O("transfer")
return null},
$S:0}
C.eI9.prototype={
$0(){A.a5(this.a,!1).O("delete")
return null},
$S:0}
C.eIb.prototype={
$1(d){return this.bjs(d)},
bjs(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.KT(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vw(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eIs.prototype={
$0(){var w=this.a
w.a.bp()
w.m(new C.eIr(w))},
$S:0}
C.eIr.prototype={
$0(){return this.a.r++},
$S:0}
C.eIt.prototype={
$0(){var w=this.a
return w.m(new C.eIq(w))},
$S:0}
C.eIq.prototype={
$0(){return this.a.r++},
$S:0}
C.eI3.prototype={
$0(){var w=this.a.c
w.toString
return A.iM(w,null)},
$S:0}
C.eI7.prototype={
$0(){return this.a.ccr(this.b)},
$S:0}
C.eIo.prototype={
$0(){var w=this.a
return w.m(new C.eIn(w,this.b))},
$S:0}
C.eIn.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eIi.prototype={
$0(){return this.a.vi("scan")},
$S:0}
C.eIj.prototype={
$0(){return this.a.vi("file")},
$S:0}
C.eIk.prototype={
$1(d){return this.a.cj6(d,this.b)},
$S:z+60}
C.eIh.prototype={
$0(){return this.a.Ee(this.b)},
$S:0}
C.eIg.prototype={
$0(){return this.a.a_b(this.b,this.c)},
$S:0}
C.cvM.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cvL.prototype={
$1(d){return d.ag()},
$S:z+62}
C.cvJ.prototype={
$1(d){return C.hs0(A.a1(d,x.N,x.z))},
$S:z+63}
C.cvK.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fpM.prototype={
$1(d){return d.y===D.km},
$S:z+2}
C.fNV.prototype={
$1(d){return C.bAC(d,this.a)},
$S:z+2}
C.foc.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bN_.prototype={
$1(d){return!d.as},
$S:z+1}
C.bMZ.prototype={
$1(d){return d.ag()},
$S:z+15}
C.bMW.prototype={
$1(d){return C.h2O(A.a1(d,x.N,x.z))},
$S:z+14}
C.bMX.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bMY.prototype={
$1(d){return J.k(d)},
$S:17}
C.ffV.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fbC.prototype={
$1(d){return C.fUj(A.a1(d,x.N,x.z))},
$S:z+67}
C.fbD.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.fbE.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fFV.prototype={
$1(d){return J.k(d)},
$S:17}
C.fFW.prototype={
$1(d){return d.a},
$S:z+69}
C.fFX.prototype={
$1(d){return d.length!==0},
$S:3}
C.fFY.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fFZ.prototype={
$1(d){return d.Sg(null).ag()},
$S:z+70}
C.fNT.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fqd.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fsM.prototype={
$1(d){return C.ak5(A.a1(d,x.N,x.z))},
$S:z+8}
C.fsN.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fsO.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fsP.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fsQ.prototype={
$1(d){return C.tP(d,this.a)},
$S:z+2}
C.fFI.prototype={
$1(d){return C.tP(d,this.a)},
$S:z+2}
C.fNO.prototype={
$1(d){return C.ak5(A.a1(d,x.N,x.z))},
$S:z+8}
C.fNP.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fNQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fpV.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fpW.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fNZ.prototype={
$1(d){return!d.as},
$S:z+1}
C.fpr.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fps.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fpt.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.fNz.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fty.prototype={
$1(d){return d.Q},
$S:z+72}
C.fFB.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fsJ.prototype={
$1(d){return C.ak5(A.a1(d,x.N,x.z))},
$S:z+8}
C.fsK.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fsL.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fFw.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fc9.prototype={
$1(d){return d.length!==0},
$S:3}
C.fca.prototype={
$1(d){return C.h2O(A.a1(d,x.N,x.z))},
$S:z+14}
C.fcb.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fcc.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fcd.prototype={
$1(d){return d.length!==0},
$S:3}
C.fcq.prototype={
$2(d,e){return d.eU(new C.fcr(e))},
$S:1925}
C.fcr.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c8},
$S:1926}
C.fcn.prototype={
$1(d){return C.hO5(d,this.a)},
$S:z+73}
C.fco.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fcp.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fgz.prototype={
$1(d){return d.a},
$S:z+49}
C.fgA.prototype={
$1(d){return d.length!==0},
$S:3}
C.fgB.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fiK.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fnw.prototype={
$1(d){return C.he8(d,C.G9(d,this.a))},
$S:z+5}
C.fnx.prototype={
$1(d){return C.he9(d,C.G9(d,this.a))},
$S:z+5};(function aliases(){var w=C.aKt.prototype
w.btw=w.q
w=C.aME.prototype
w.bvU=w.q
w=C.aMF.prototype
w.bvV=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aBY.prototype,"gcg2","cg3",25)
var s
w(s=C.az1.prototype,"gc92","c93",42)
v(s,"gaLs","MY",0)
v(s,"gcoh","AA",0)
v(s,"gbJ5","ND",0)
v(s,"gcC2","y8",0)
v(s,"gci3","a_T",0)
v(s,"gbEu","Nl",0)
v(s,"gbJw","Wu",0)
w(s,"gbO8","bO9",71)
v(s,"gbyZ","zA",0)
v(C.az2.prototype,"gcBZ","F5",0)
v(s=C.aCy.prototype,"gaeM","vx",0)
v(s,"gcbH","a_2",0)
v(s,"gaPt","HD",0)
v(s=C.aCv.prototype,"gcyd","a1Y",0)
v(s,"gaeM","vx",0)
v(s,"gcmk","a0y",0)
v(s,"gccE","a_g",0)
w(s,"gc8X","c8Y",30)
v(s,"gbJn","HI",0)
v(s,"gczc","czd",3)
v(s,"gc_F","Y8",0)
w(s,"gc7t","c7u",23)
v(s,"gcbr","cbs",3)
v(s=C.aAX.prototype,"gc5h","P9",0)
v(s,"gc5j","c5k",3)
v(s,"gbG1","a8R",0)
v(s=C.aCx.prototype,"gbME","WZ",0)
v(s,"gbX2","XC",0)
v(s,"gcsB","a1o",0)
v(s,"gcoR","a1_",0)
v(C.aCw.prototype,"gcoz","agw",0)
v(C.arI.prototype,"gc7r","ZF",0)
v(C.axN.prototype,"ga1I","JO",3)
v(C.axM.prototype,"ga1I","JO",3)
v(C.aww.prototype,"ga1I","JO",3)
v(s=C.aE2.prototype,"gb00","Q4",0)
v(s,"gbxN","Ve",0)
v(s,"gccs","cct",3)
w(C.aE1.prototype,"gc8h","c8i",57)
u(C.aE3.prototype,"gaPn",0,0,null,["$1","$0"],["HC","bHi"],58,0,0)
t(C,"hlp","hXH",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.anB,C.u5,C.n9,C.Hf,C.aed,C.Jz,C.u6,C.JH,C.Fq,C.bdB,C.aI7,C.aoM,C.d6q,C.lx,C.aSk,C.aSj,C.aQl,C.tE,C.qT,C.lh,C.hW,C.kA,C.aG6])
u(A.hU,[C.fxo,C.fxn,C.fxp,C.fGA,C.fms,C.fmt,C.fmy,C.fv7,C.fv6,C.fv5,C.c11,C.fH5,C.fGY,C.fH9,C.fq2,C.dEX,C.dES,C.dET,C.dEv,C.dEr,C.dFb,C.dFc,C.dF5,C.dF6,C.dFd,C.dFe,C.fqC,C.fsG,C.fsH,C.fFG,C.fNN,C.fpU,C.fGe,C.d5D,C.d5_,C.d58,C.d5p,C.d54,C.d5a,C.d51,C.d5e,C.d5f,C.d5d,C.d5u,C.d5t,C.d7o,C.d7p,C.d7q,C.d5R,C.d5W,C.d5V,C.cEx,C.cEz,C.cXZ,C.cYn,C.cYo,C.cYr,C.cYt,C.cYu,C.cYv,C.cYx,C.cYy,C.dTb,C.dSB,C.dSw,C.dS4,C.dSh,C.dSk,C.dSt,C.dRT,C.dSE,C.dSy,C.dRV,C.dRW,C.dRX,C.dS1,C.dS_,C.dRZ,C.dSe,C.dSf,C.dS9,C.dSL,C.dSH,C.d61,C.d62,C.fqG,C.fqH,C.fqI,C.fqE,C.fqF,C.fqL,C.fqM,C.fqN,C.fqJ,C.fqK,C.d6l,C.d6b,C.d66,C.d6g,C.d6h,C.d6k,C.d68,C.d6n,C.d6o,C.d6p,C.f8R,C.eKM,C.dmd,C.dmn,C.dmo,C.dmp,C.dms,C.dmr,C.dmt,C.dmy,C.dmz,C.c7G,C.c7F,C.c7B,C.c7C,C.c7D,C.c7E,C.c7L,C.c7I,C.c7J,C.dSY,C.dT0,C.dT_,C.dT6,C.dT7,C.dEg,C.fGH,C.fG3,C.fNy,C.fG8,C.fG7,C.cYM,C.cYN,C.cYI,C.cws,C.cwu,C.cwv,C.cwn,C.cww,C.f8j,C.fEJ,C.eHU,C.eHQ,C.eHM,C.eHK,C.eHY,C.fNo,C.eI6,C.eIf,C.eIa,C.eIb,C.eIk,C.cvL,C.cvJ,C.cvK,C.fpM,C.fNV,C.foc,C.bN_,C.bMZ,C.bMW,C.bMX,C.bMY,C.fbC,C.fbD,C.fFV,C.fFW,C.fFX,C.fFY,C.fFZ,C.fNT,C.fqd,C.fsM,C.fsN,C.fsP,C.fsQ,C.fFI,C.fNO,C.fNP,C.fNQ,C.fpV,C.fpW,C.fNZ,C.fpr,C.fps,C.fNz,C.fty,C.fFB,C.fsJ,C.fsK,C.fFw,C.fc9,C.fca,C.fcb,C.fcc,C.fcd,C.fcr,C.fcn,C.fco,C.fgz,C.fgA,C.fiK,C.fnw,C.fnx])
u(A.au,[C.aXM,C.ak3,C.aTz,C.Y7,C.b9i,C.bdz,C.bhh,C.buZ,C.bkD,C.acD,C.bhg,C.acC,C.bhf,C.aAY,C.aH9,C.acE,C.Jv,C.bdA,C.abU,C.bdy,C.bdD,C.aXK,C.arI,C.acZ])
u(A.mK,[C.b9U,C.bb6,C.baY,C.aG1,C.bgk,C.bdC,C.bcG,C.bip,C.buO])
u(A.j6,[C.fH2,C.fH3,C.fH4,C.fGW,C.fGX,C.fH7,C.fH8,C.dF8,C.dEV,C.dEY,C.dEC,C.dED,C.dEE,C.dEB,C.dEJ,C.dEA,C.dEK,C.dEL,C.dEz,C.dEM,C.dEy,C.dEN,C.dEx,C.dEO,C.dEp,C.dEq,C.dEw,C.dEP,C.dEu,C.dEQ,C.dEt,C.dEF,C.dEs,C.dEG,C.dEo,C.dEH,C.dEI,C.dF9,C.dFa,C.dEZ,C.dF_,C.dF0,C.dF1,C.dF2,C.dF3,C.dF4,C.dFg,C.dF7,C.fqD,C.d4Y,C.d4W,C.d4X,C.d4Z,C.d5C,C.d5r,C.d5o,C.d50,C.d5s,C.d56,C.d57,C.d59,C.d5q,C.d55,C.d5b,C.d5z,C.d5l,C.d5k,C.d5m,C.d5n,C.d5g,C.d5i,C.d5j,C.d5c,C.d5v,C.d5y,C.d52,C.d53,C.d7n,C.d7m,C.d7l,C.d7k,C.d7r,C.d7j,C.d7s,C.d5S,C.d5T,C.d5U,C.d5X,C.d5Q,C.d5P,C.cEy,C.cXY,C.cYa,C.cY9,C.cYp,C.cY8,C.cYq,C.cY7,C.cY6,C.cYs,C.cY5,C.cYi,C.cYh,C.cYz,C.dTa,C.dT9,C.dTc,C.dTd,C.dTe,C.dT8,C.dTg,C.dTf,C.dSz,C.dSA,C.dSC,C.dS5,C.dSj,C.dSi,C.dSl,C.dSv,C.dSo,C.dSn,C.dSp,C.dSm,C.dSq,C.dSr,C.dSu,C.dRU,C.dSx,C.dRY,C.dS0,C.dS2,C.dSD,C.dS8,C.dS6,C.dSa,C.dSb,C.dS7,C.dSc,C.dSg,C.dSM,C.dSN,C.dSF,C.dSI,C.dSJ,C.dSK,C.dSP,C.dSG,C.dS3,C.d60,C.d6_,C.d64,C.d6e,C.d65,C.eKL,C.dme,C.dmb,C.dmc,C.dmm,C.dml,C.dmk,C.dmu,C.dmj,C.dmv,C.dmi,C.dmw,C.dmh,C.dmx,C.dmg,C.dmf,C.dmq,C.dmA,C.dmJ,C.dSZ,C.dT2,C.dT3,C.dSV,C.dSW,C.dSX,C.dT1,C.dT5,C.dT4,C.dSQ,C.dSR,C.dSS,C.dST,C.dSU,C.dEh,C.fGE,C.cfe,C.cYL,C.cYK,C.cYO,C.cYH,C.cYJ,C.cwk,C.cwq,C.cwr,C.cwp,C.cwt,C.cwo,C.cwl,C.cwm,C.cwx,C.f8k,C.f8l,C.eHW,C.eHN,C.eHO,C.eHP,C.eHR,C.eHS,C.eHV,C.eHI,C.eHL,C.eHX,C.eHJ,C.eI_,C.eI0,C.eI1,C.eI2,C.eHZ,C.eHD,C.eHE,C.eHF,C.eHH,C.eHG,C.eIl,C.eIm,C.eI4,C.eI5,C.eIc,C.eId,C.eIe,C.eI8,C.eI9,C.eIs,C.eIr,C.eIt,C.eIq,C.eI3,C.eI7,C.eIo,C.eIn,C.eIi,C.eIj,C.eIh,C.eIg])
u(A.ag,[C.anI,C.Sg,C.YP,C.YT,C.YR,C.Yp,C.aoP,C.aoJ,C.Zs,C.aoN,C.ZN,C.ZO,C.a5I,C.Yr,C.Yq,C.XZ,C.a0y,C.Fe,C.awp,C.arH,C.arB,C.arG,C.NI])
u(A.ah,[C.aBY,C.bdw,C.az1,C.bdR,C.az2,C.bb4,C.aCy,C.aCv,C.aAX,C.aCx,C.aCw,C.biK,C.aKt,C.axN,C.axM,C.aww,C.buR,C.aME,C.aMF,C.aE2,C.bk6,C.aE1,C.bwC])
u(A.ki,[C.dEU,C.dEW,C.dER,C.dFf,C.fsI,C.bMV,C.d5B,C.d5A,C.d5h,C.d5w,C.d5x,C.d5Y,C.dSs,C.dSd,C.dSO,C.d6d,C.d6c,C.d6a,C.d6f,C.d6i,C.d6j,C.d63,C.d67,C.d69,C.d6m,C.c7z,C.c7H,C.c7M,C.dEi,C.fGG,C.fGF,C.f8h,C.f8i,C.eHT,C.eIp,C.cvM,C.ffV,C.fbE,C.fsO,C.fpt,C.fsL,C.fcq,C.fcp,C.fgB])
t(C.biq,C.aKt)
u(A.m6,[C.aaX,C.aIP,C.Hg,C.ak4,C.cvN,C.cvO])
t(C.buP,C.aME)
t(C.buQ,C.aMF)
t(C.aE3,C.bwC)
t(C.b7L,A.b7z)
t(C.buS,A.a5n)
t(C.b7K,C.buS)
w(C.aKt,A.eR)
w(C.aME,A.c9)
w(C.aMF,A.c9)
v(C.bwC,A.ez)
v(C.buS,A.j0)})()
A.jW(b.typeUniverse,JSON.parse('{"aXM":{"au":[],"r":[]},"b9U":{"aB":[]},"anI":{"ag":[],"r":[]},"aBY":{"ah":["anI"]},"Sg":{"ag":[],"r":[]},"ak3":{"au":[],"r":[]},"aTz":{"au":[],"r":[]},"bdw":{"ah":["Sg"]},"YP":{"ag":[],"r":[]},"YT":{"ag":[],"r":[]},"YR":{"ag":[],"r":[]},"Yp":{"ag":[],"r":[]},"az1":{"ah":["YP"]},"bdR":{"ah":["YT"]},"az2":{"ah":["YR"]},"Y7":{"au":[],"r":[]},"bb6":{"aB":[]},"baY":{"aB":[]},"bb4":{"ah":["Yp"]},"aG1":{"aB":[]},"bgk":{"aB":[]},"b9i":{"au":[],"r":[]},"aoP":{"ag":[],"r":[]},"aoJ":{"ag":[],"r":[]},"Zs":{"ag":[],"r":[]},"acE":{"au":[],"r":[]},"aCy":{"ah":["aoP"]},"aCv":{"ah":["aoJ"]},"bdz":{"au":[],"r":[]},"bdC":{"aB":[]},"bhh":{"au":[],"r":[]},"bcG":{"aB":[]},"buZ":{"au":[],"r":[]},"bkD":{"au":[],"r":[]},"aAX":{"ah":["Zs"]},"acD":{"au":[],"r":[]},"bhg":{"au":[],"r":[]},"acC":{"au":[],"r":[]},"bhf":{"au":[],"r":[]},"aAY":{"au":[],"r":[]},"aH9":{"au":[],"r":[]},"Jv":{"au":[],"r":[]},"aoN":{"ag":[],"r":[]},"ZN":{"ag":[],"r":[]},"ZO":{"ag":[],"r":[]},"aCx":{"ah":["aoN"]},"bdA":{"au":[],"r":[]},"abU":{"au":[],"r":[]},"bdy":{"au":[],"r":[]},"bdD":{"au":[],"r":[]},"aCw":{"ah":["ZN"]},"biK":{"ah":["ZO"]},"aXK":{"au":[],"r":[]},"a5I":{"ag":[],"r":[]},"biq":{"ah":["a5I"]},"bip":{"aB":[]},"arI":{"au":[],"r":[]},"Yr":{"ag":[],"r":[]},"Yq":{"ag":[],"r":[]},"XZ":{"ag":[],"r":[]},"a0y":{"ag":[],"r":[]},"axN":{"ah":["Yr"]},"axM":{"ah":["Yq"]},"aww":{"ah":["XZ"]},"buR":{"ah":["a0y"]},"Fe":{"ag":[],"r":[]},"awp":{"ag":[],"r":[]},"buP":{"ah":["Fe"]},"buQ":{"ah":["awp"]},"buO":{"aB":[]},"arH":{"ag":[],"r":[]},"aE2":{"ah":["arH"]},"acZ":{"au":[],"r":[]},"arB":{"ag":[],"r":[]},"arG":{"ag":[],"r":[]},"bk6":{"ah":["arB"]},"aE1":{"ah":["arG"]},"NI":{"ag":[],"r":[]},"aE3":{"ah":["NI"],"ez":[]},"b7K":{"j0":[],"ff":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aQl"),Q:w("qT"),n:w("bk<n,n>"),c5:w("aSj"),dY:w("aSk"),d:w("eD<n?>"),e:w("Hf"),B:w("n9"),P:w("hW"),k:w("kA"),x:w("az<~>"),f5:w("O<a2x>"),V:w("O<ac>"),t:w("O<qT>"),O:w("O<w>"),ac:w("O<eD<n?>>"),I:w("O<n9>"),u:w("O<hW>"),_:w("O<kA>"),cl:w("O<az<ai<a3<n,@>>>>"),R:w("O<nb>"),cq:w("O<ai<+(N,N)>>"),ez:w("O<a3<n,aC>>"),gE:w("O<a3<n,n>>"),c7:w("O<a3<n,@>>"),fD:w("O<mp>"),bp:w("O<ob>"),g:w("O<u>"),v:w("O<ho>"),L:w("O<+(n,n)>"),G:w("O<+(N,N)>"),bF:w("O<+count,id,name(H,n,n)>"),A:w("O<cQ>"),s:w("O<n>"),aS:w("O<iP>"),p:w("O<r>"),C:w("O<ff>"),D:w("O<lh>"),fp:w("O<Jz>"),M:w("O<JH>"),gZ:w("O<aG6>"),Y:w("O<aed>"),E:w("O<aI7>"),F:w("O<N>"),dC:w("O<H>"),dS:w("O<aB?>"),d4:w("O<n?>"),J:w("cs<ah<ag>>"),b:w("ai<n9>"),do:w("ai<hW>"),r:w("ai<kA>"),U:w("ai<a3<n,@>>"),gk:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),h:w("ai<n>"),c:w("ai<lh>"),j:w("ai<@>"),fK:w("bv<n,n>"),d2:w("bv<n,ai<a3<n,@>>>"),a:w("a3<n,@>"),f:w("a3<@,@>"),gv:w("K<n,Hh>"),w:w("iA"),g2:w("rd"),bV:w("anB"),fL:w("cq"),K:w("aC"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(N,ai<hW>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),e7:w("bo<N>"),gc:w("dD"),b4:w("cx<H>"),W:w("kf<n>"),l:w("r"),cM:w("ff"),i:w("lh"),cc:w("Fq"),bw:w("acC<n?>"),cy:w("JJ"),q:w("mY"),y:w("R"),gR:w("N"),z:w("@"),S:w("H"),eK:w("ai<kA>?"),m:w("aoM?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),X:w("+qrPayload,token,usesRemaining(n,n,H)?"),gF:w("+members,trees,viewOnly(H,H,R)?"),Z:w("pQ?"),T:w("n?"),aD:w("dD?"),o:w("lh?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aWU=new A.bp(B.he,B.bE,B.he,B.bE)
D.a9K=new A.bp(B.he,B.jH,B.he,B.jH)
D.aX5=new A.bp(B.ik,B.bE,B.bE,B.bE)
D.aX9=new A.ay(B.cY,1.4,B.q,-1)
D.aXj=new A.ay(B.ad,1,B.q,-1)
D.aYK=new A.aY(0,1/0,64,1/0)
D.aYO=new A.aY(0,84,0,1/0)
D.axb=w([B.lF,B.qO,B.c],x.O)
D.bU4=new A.a8(B.ax,B.aC,B.x,D.axb,null,null)
D.aZy=new A.o(null,null,null,null,null,D.bU4,B.n)
D.cYR=w([B.aV,B.bW],x.O)
D.bWe=new A.a8(B.b_,B.b5,B.x,D.cYR,null,null)
D.aZS=new A.o(null,null,null,null,null,D.bWe,B.n)
D.b51=new A.fj(null,null,null,null,null,E.jO,null,null,null,null)
D.ab2=new A.cr(B.A,null,null,D.b51,null)
D.ke=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eZs=new A.G(!0,D.ke,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhv=new A.x("No books on the shelf yet.",null,D.eZs,null,null,null,null,null,null,null,null,null)
D.e5L=new A.D(B.nV,D.fhv,null)
D.b3w=new A.cr(B.A,null,null,D.e5L,null)
D.b4p=new A.cr(B.A,null,null,Z.Vv,null)
D.b6r=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b6U=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.acf=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b9z=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b9R=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.ady=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bdE=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.be3=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.Ey=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.bfF=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bi1=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.afd=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.fc3=new A.x("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bnz=new A.eD(null,D.fc3,B.eX,null,x.d)
D.fkJ=new A.x("None",null,null,null,null,null,null,null,null,null,null,null)
D.bnB=new A.eD(null,D.fkJ,B.eX,null,x.d)
D.bo8=new A.b9(38e5)
D.boT=new A.ib(0,10,0,10)
D.bp2=new A.Q(0,1,0,0)
D.bpc=new A.ib(0,4,0,4)
D.bpu=new A.Q(10,10,14,10)
D.bpG=new A.ib(10,4,10,4)
D.bpO=new A.ib(10,8,10,8)
D.bpP=new A.Q(10,8,8,8)
D.bqe=new A.Q(12,6,12,2)
D.bqw=new A.Q(14,10,6,6)
D.bqx=new A.Q(14,12,14,0)
D.bqB=new A.Q(14,12,14,8)
D.bqE=new A.Q(14,12,8,14)
D.bqH=new A.ib(14,14,14,14)
D.brl=new A.Q(16,2,16,10)
D.brv=new A.Q(16,6,16,30)
D.brx=new A.Q(16,6,16,8)
D.ahA=new A.Q(18,16,18,8)
D.bs7=new A.Q(18,20,18,22)
D.ahE=new A.Q(18,24,18,24)
D.bsd=new A.Q(18,30,18,30)
D.bsv=new A.Q(20,10,12,20)
D.bsJ=new A.Q(20,18,16,18)
D.bsL=new A.Q(20,18,20,6)
D.btz=new A.Q(24,32,24,28)
D.btA=new A.Q(24,36,24,32)
D.btE=new A.Q(26,26,24,14)
D.btS=new A.Q(2,4,2,8)
D.btW=new A.Q(30,0,30,0)
D.bu6=new A.Q(38,22,22,22)
D.ahW=new A.Q(40,24,24,24)
D.bu8=new A.ib(40,40,40,40)
D.bua=new A.Q(46,30,30,30)
D.ahZ=new A.Q(4,0,0,8)
D.buC=new A.Q(56,40,40,40)
D.buG=new A.Q(1.25,1.25,1.25,1.25)
D.buH=new A.Q(60,0,60,0)
D.buK=new A.Q(6,14,6,16)
D.buX=new A.ib(7,3,7,3)
D.bvs=new A.Q(5,1.5,5,1.5)
D.bvD=new A.Q(6,2.5,6,2.5)
D.fwz=new A.x("Signature",null,B.nu,null,null,null,null,null,null,null,null,null)
D.bvY=new A.bD(1,B.bh,D.fwz,null)
D.ftL=new A.x("Tell the AI what to fix",null,B.dl,null,null,null,null,null,null,null,null,null)
D.bwJ=new A.bD(1,B.bh,D.ftL,null)
D.f5K=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvG=new A.x("Worksheets",null,D.f5K,null,null,null,null,null,null,null,null,null)
D.f5S=new A.G(!0,E.abN,null,null,null,null,13,B.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuB=new A.x("Track your project spending",null,D.f5S,null,null,null,null,null,null,null,null,null)
D.cR0=w([D.fvG,B.at,D.fuB],x.p)
D.bkT=new A.fq(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cR0,null)
D.bwO=new A.bD(1,B.bh,D.bkT,null)
D.f11=new A.G(!0,E.jO,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbg=new A.x("FAMILY LIBRARY",null,D.f11,null,null,null,null,null,null,null,null,null)
D.bx4=new A.bD(1,B.bh,D.fbg,null)
D.Mq=new C.Hf("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.Zk=new C.Hg(0,"male")
D.aiR=new C.Hg(1,"female")
D.xN=new C.Hg(2,"unknown")
D.tF=new C.ak4(0,"owner")
D.Mr=new C.ak4(1,"editor")
D.km=new C.ak4(2,"viewer")
D.ajD=new A.a0(61199,"MaterialIcons",!1)
D.bB3=new A.a0(61504,"MaterialIcons",!1)
D.bB4=new A.a0(61505,"MaterialIcons",!1)
D.bB6=new A.a0(61587,"MaterialIcons",!1)
D.bBd=new A.a0(61890,"MaterialIcons",!1)
D.bC7=new A.a0(63034,"MaterialIcons",!0)
D.bCX=new A.a0(63429,"MaterialIcons",!1)
D.alS=new A.a0(984520,"MaterialIcons",!1)
D.bBD=new A.a0(62776,"MaterialIcons",!1)
D.bFi=new A.ae(D.bBD,26,B.aZ,null,null,null)
D.bA1=new A.a0(57648,"MaterialIcons",!1)
D.bFA=new A.ae(D.bA1,14,B.c,null,null,null)
D.bFR=new A.ae(B.FF,17,null,null,null,null)
D.bGm=new A.ae(E.a_d,null,null,null,null,null)
D.bGp=new A.ae(B.jg,18,E.jO,null,null,null)
D.a__=new A.a0(62044,"MaterialIcons",!1)
D.bGv=new A.ae(D.a__,null,B.aV,null,null,null)
D.bHk=new A.ae(B.dW,16,null,null,null,null)
D.bHr=new A.ae(D.a__,32,B.aV,null,null,null)
D.bHK=new A.ae(E.ajE,18,B.cY,null,null,null)
D.bIO=new A.ae(B.FP,22,B.ay,null,null,null)
D.bJ_=new A.ae(B.dW,22,B.aZ,null,null,null)
D.bJa=new A.ae(R.a_4,22,B.c,null,null,null)
D.bJf=new A.ae(B.tP,52,B.c,null,null,null)
D.bJp=new A.ae(B.FP,30,B.ay,null,null,null)
D.amu=new A.ae(B.tY,22,B.c,null,null,null)
D.bJR=new A.ae(B.dW,17,null,null,null,null)
D.bK9=new A.ae(B.vF,26,B.cY,null,null,null)
D.bKT=new A.ae(B.a_p,16,null,null,null,null)
D.bLD=new A.ae(B.tP,24,B.c,null,null,null)
D.bLI=new A.ae(B.MT,20,B.rk,null,null,null)
D.bLN=new A.ae(B.FD,null,B.bW,null,null,null)
D.bLU=new A.ae(B.jg,18,B.c,null,null,null)
D.bMv=new A.ae(B.cC,22,B.ad,null,null,null)
D.bNk=new A.ae(B.e5,16,B.ad,null,null,null)
D.bNw=new A.ae(D.a__,20,B.aV,null,null,null)
D.amV=new A.ae(B.hz,20,null,null,null,null)
D.bO1=new A.ae(B.cC,18,D.ke,null,null,null)
D.bOj=new A.ae(B.y7,28,B.c,null,null,null)
D.bOs=new A.ae(B.MJ,null,B.h_,null,null,null)
D.bOM=new A.ae(B.y7,24,B.c,null,null,null)
D.bPd=new A.ae(B.tP,null,B.aV,null,null,null)
D.bPe=new A.ae(B.jA,20,B.cY,null,null,null)
D.bPy=new A.ae(B.FF,16,null,null,null,null)
D.bR4=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ez,!0,null,null,null,null)
D.d5_=w([B.bt,B.aV,B.f8,B.aZ],x.O)
D.bSw=new A.a8(B.ax,B.aC,B.x,D.d5_,null,null)
D.beA=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bjX=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cNV=w([D.beA,D.bjX],x.O)
D.bSH=new A.a8(B.b_,B.b5,B.x,D.cNV,null,null)
D.d_C=w([B.eY,B.fw,B.f8],x.O)
D.bSL=new A.a8(B.ax,B.aC,B.x,D.d_C,null,null)
D.aea=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b6V=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cPS=w([D.aea,D.b6V],x.O)
D.bTj=new A.a8(B.b_,B.b5,B.x,D.cPS,null,null)
D.ba2=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.awA=w([D.ba2,D.aea],x.O)
D.bTD=new A.a8(B.ax,B.aC,B.x,D.awA,null,null)
D.ad6=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.bc8=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cZN=w([D.ad6,D.bc8],x.O)
D.bUf=new A.a8(B.a3,B.a7,B.x,D.cZN,null,null)
D.db5=w([B.bI,B.mZ],x.O)
D.bUh=new A.a8(B.b_,B.b5,B.x,D.db5,null,null)
D.bev=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.dbX=w([D.bev,D.ke,D.ke,Q.WP],x.O)
D.de7=w([0,0.07,0.9,1],x.F)
D.bUO=new A.a8(B.a3,B.a7,B.x,D.dbX,D.de7,null)
D.bUZ=new A.a8(B.ax,B.aC,B.x,B.Qq,null,null)
D.daG=w([B.aZ,B.aV,B.bW],x.O)
D.bVZ=new A.a8(B.ax,B.aC,B.x,D.daG,null,null)
D.cgs=w([B.bt,B.aZ,B.eY],x.O)
D.cgz=w([B.bu,B.aE,B.jq],x.O)
D.cgB=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bda=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cmF=w([D.bda,E.adR],x.O)
D.e1z=new A.u(1,2)
D.eL0=new A.cQ(B.aX,D.e1z,3)
D.atH=w([D.eL0],x.A)
D.ctU=w([B.h2,B.cd,B.f7],x.O)
D.cwx=w([B.bJ,B.bv,B.bm],x.O)
D.bxx=new C.u5("classic","Classic leather","Gold-edged brown leather",D.awA,E.jO,E.jO,"\u2766",B.L,!0,!1,!1,!1)
D.b6f=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.biS=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cSC=w([D.b6f,D.biS],x.O)
D.adV=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bxs=new C.u5("ornate","Ornate gold","Double gold border and flourishes",D.cSC,D.adV,D.adV,"\u2726",B.L,!0,!0,!0,!1)
D.b9I=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bfh=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cKV=w([D.b9I,D.bfh],x.O)
D.bxr=new C.u5("parchment","Parchment","Old paper with dark ink",D.cKV,D.Ey,G.it,"\u2767",B.L,!0,!1,!1,!0)
D.abu=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bhk=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.d94=w([D.abu,D.bhk],x.O)
D.bcL=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bgH=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bxu=new C.u5("minimal","Clean paper","Plain and elegant, like a printed book",D.d94,D.bcL,D.bgH,"",B.L,!0,!0,!1,!0)
D.bxw=new C.u5("midnight","Midnight","Deep blue with silver stars",L.awT,B.cq,B.bL,"\u2727",B.L,!0,!0,!1,!1)
D.bxq=new C.u5("emerald","Emerald library","Green cloth, title on the left",A_.au5,E.jO,B.h3,"\u25c6",B.bg,!0,!1,!1,!1)
D.bhJ=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.d7v=w([B.es,D.bhJ],x.O)
D.bdN=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.beU=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bxv=new C.u5("rose","Rose vintage","Burgundy with rose-gold lettering",D.d7v,D.bdN,D.beU,"\u2740",B.L,!0,!1,!0,!1)
D.dbA=w([B.cD,P.n_],x.O)
D.bxt=new C.u5("modern","Modern","Dark, bold, left-aligned",D.dbA,B.aS,B.c,"",B.bg,!1,!0,!1,!1)
D.a1k=w([D.bxx,D.bxs,D.bxr,D.bxu,D.bxw,D.bxq,D.bxv,D.bxt],A.ax("O<u5>"))
D.cKr=w([B.bW,B.bj],x.O)
D.bel=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cL6=w([D.abu,D.bel],x.O)
D.b9E=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cMF=w([D.b9E,B.da],x.O)
D.cO9=w([B.b8,B.iM,B.or],x.O)
D.cOw=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b6R=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.bbt=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.de3=w([D.ad6,D.b6R,D.bbt],x.O)
D.bxy=new C.u6("leather","Leather",D.de3,"vintage")
D.cVy=w([B.dr,B.KJ,A4.W1],x.O)
D.bxF=new C.u6("midnight","Midnight",D.cVy,"starry")
D.cOa=w([B.f3,B.e3,B.l9],x.O)
D.bxE=new C.u6("forest","Forest",D.cOa,"story")
D.dfW=w([B.eN,B.es,B.kg],x.O)
D.bxB=new C.u6("burgundy","Burgundy",D.dfW,"royal")
D.cw7=w([B.aE,B.pq,B.nD],x.O)
D.bxC=new C.u6("royal","Royal",D.cw7,"royal")
D.cQu=w([B.bv,B.cD,P.n_],x.O)
D.bxz=new C.u6("charcoal","Charcoal",D.cQu,"geo")
D.deb=w([B.ci,B.dP,B.x3],x.O)
D.bxD=new C.u6("sunset","Sunset",D.deb,"sunset")
D.deQ=w([B.iM,B.Ez,B.W5],x.O)
D.bxA=new C.u6("ocean","Ocean",D.deQ,"band")
D.yD=w([D.bxy,D.bxF,D.bxE,D.bxB,D.bxC,D.bxz,D.bxD,D.bxA],A.ax("O<u6>"))
D.cQT=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cRr=w([B.ak,B.aK,B.M],x.O)
D.cSH=w([B.es,B.e3,B.dr,B.fx,B.x7,B.cY,B.jR,B.eo,B.d8],x.O)
D.cSI=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eL1=new A.cQ(B.dp,B.dE,8)
D.cSR=w([D.eL1],x.A)
D.cTU=w([B.bV,B.dP,B.kJ],x.O)
D.cUm=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cVu=w([B.bV,B.hi],x.O)
D.cXw=w([B.aM,B.x4,B.wW],x.O)
D.cYn=w([B.bK,B.c7,B.dv,B.aM],x.O)
D.cYS=w([B.j7,B.ci,B.ta],x.O)
D.cZm=w([B.eY,B.cY],x.O)
D.cZS=w([B.cs,B.fo,B.hu],x.O)
D.d_2=w([B.aS,B.bj,B.dr],x.O)
D.d_z=w([B.et,B.d_,B.e3],x.O)
D.d_Q=w([B.dS,B.dr,B.KJ],x.O)
D.d15=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a2d=w(["leather","linen","plain","stars","rays"],x.s)
D.bEY=new A.a0(985219,"MaterialIcons",!1)
D.bEw=new A.a0(983781,"MaterialIcons",!1)
D.awi=w([B.ak2,B.i_,B.lM,B.i0,D.bEY,B.FZ,B.pO,D.bEw,L.alF,B.y9,B.pQ,B.mq],A.ax("O<a0>"))
D.a2i=w(["double","single","corners","none"],x.s)
D.d3K=w([B.dA,B.bn,B.eo],x.O)
D.d3X=w([],x.t)
D.C6=w([],x.u)
D.d68=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.d8p=w([B.aH,B.fo,B.fx],x.O)
D.d9F=w([B.cf,B.mU,B.WZ],x.O)
D.d9U=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dsB=new C.lx("construction","Construction","Jobsite & builds",B.y_)
D.dsI=new C.lx("house","Home Build","Houses & rooms",B.vA)
D.dsy=new C.lx("grocery","Grocery","Store & pantry",B.a_X)
D.dsx=new C.lx("calculator","Calculations","Math & estimates",B.N3)
D.dsG=new C.lx("lumber","Materials","Lumber & supplies",B.Nk)
D.dsu=new C.lx("kitchen","Kitchen","Remodel & meals",Aa.akQ)
D.bEt=new A.a0(983756,"MaterialIcons",!1)
D.dsz=new C.lx("landscape","Landscaping","Yard & garden",D.bEt)
D.dst=new C.lx("plumbing","Plumbing","Pipes & water",B.pY)
D.dsJ=new C.lx("electrical","Electrical","Wiring & power",B.h8)
D.dsr=new C.lx("store","Retail Shop","Daily business",B.kR)
D.dss=new C.lx("paint_remodel","Paint & Remodel","Colors & walls",Ab.a_v)
D.bDT=new A.a0(983311,"MaterialIcons",!1)
D.dsF=new C.lx("roofing","Roofing","Roofs & exteriors",D.bDT)
D.bEG=new A.a0(983986,"MaterialIcons",!1)
D.dsq=new C.lx("warehouse","Warehouse","Storage & stock",D.bEG)
D.dsD=new C.lx("vehicles","Vehicles","Fleet & transport",B.G_)
D.bBF=new A.a0(62785,"MaterialIcons",!1)
D.dsw=new C.lx("farm","Farm","Crops & livestock",D.bBF)
D.dsv=new C.lx("restaurant","Restaurant","Food & catering",B.tW)
D.dsC=new C.lx("tools","Tools","Workshop gear",B.FW)
D.dsH=new C.lx("wallet","Cash & Wallet","Quick spending",B.jA)
D.bCS=new A.a0(63395,"MaterialIcons",!1)
D.dsE=new C.lx("concrete","Concrete","Foundation work",D.bCS)
D.dsA=new C.lx("blueprint","Blueprint","Plans & design",Ag.ak8)
D.a2J=w([D.dsB,D.dsI,D.dsy,D.dsx,D.dsG,D.dsu,D.dsz,D.dst,D.dsJ,D.dsr,D.dss,D.dsF,D.dsq,D.dsD,D.dsw,D.dsv,D.dsC,D.dsH,D.dsE,D.dsA],A.ax("O<lx>"))
D.dan=w([B.br,B.bn],x.O)
D.db6=w([B.i7,B.nH,B.dH],x.O)
D.a2R=w(["top","middle","bottom"],x.s)
D.dds=w([B.cr,B.bj,B.dr],x.O)
D.ddZ=w([B.b1,B.d_,B.e3],x.O)
D.dfR=w([B.bJ,B.ak],x.O)
D.dfS=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.e_b={top:0,middle:1,bottom:2}
D.dj2=new A.bk(D.e_b,["Top","Middle","Bottom"],x.n)
D.dZP={double:0,single:1,corners:2,none:3}
D.dj7=new A.bk(D.dZP,["Double line","One line","Corners","None"],x.n)
D.e_Z={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dkx=new A.bk(D.e_Z,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dkJ=new A.bk(B.i3,[],A.ax("bk<H,+(n,n)>"))
D.e_3={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Ch=new A.bk(D.e_3,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bk<n,H>"))
D.dna=new F.MB(32,null)
D.dnb=new F.MB(40,null)
D.dnc=new F.MB(46,null)
D.aFw=new C.arG(null)
D.e2x=new A.u(8,14)
D.fi7=new A.x("Write a new book",null,B.i5,null,B.L,null,null,null,null,null,null,null)
D.e5d=new A.D(B.ld,D.fi7,null)
D.am5=new A.ae(B.hy,18,B.c,null,null,null)
D.fbC=new A.x("Add",null,B.m1,null,null,null,null,null,null,null,null,null)
D.cYC=w([D.am5,B.qd,D.fbC],x.p)
D.eIY=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cYC,null)
D.e5y=new A.D(B.nU,D.eIY,null)
D.e5z=new A.D(E.agp,Z.Vv,null)
D.f5F=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feD=new A.x("New Project",null,D.f5F,null,null,null,null,null,null,null,null,null)
D.d1r=w([D.am5,B.ab,D.feD],x.p)
D.eJ0=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d1r,null)
D.e5K=new A.D(B.ic,D.eJ0,null)
D.fgV=new A.x("Choose your header",null,U.rG,null,null,null,null,null,null,null,null,null)
D.e64=new A.D(B.hw,D.fgV,null)
D.b5g=new A.fj(2.2,null,null,null,null,B.cY,null,null,null,null)
D.eNE=new A.a7(22,22,D.b5g,null)
D.b3s=new A.cr(B.A,null,null,D.eNE,null)
D.e69=new A.D(B.XT,D.b3s,null)
D.bqQ=new A.Q(14,2,14,6)
D.fuk=new A.x("The top of your book. Tap a design to see it.",null,T.IN,null,null,null,null,null,null,null,null,null)
D.e6a=new A.D(D.bqQ,D.fuk,null)
D.e7I=new A.iN(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.e7L=new A.iN(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aGL=new A.iN(1,0.9607843137254902,0.48627450980392156,0)
D.I_=new A.iN(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.za=new A.iN(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.e7R=new A.iN(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fQH=new C.bgk(null)
D.blZ=new A.mf(D.fQH,null,B.au,null,null)
D.aKp=new A.cL(0,0,0,0,null,null,D.blZ,null)
D.evl=new A.y(-42,42)
D.eDJ=new A.cI([0,0,1,1])
D.aLH=new A.a9(0,0,520,160)
D.ftT=new A.x("Let the AI write it from your tree",null,B.k6,null,B.L,null,null,null,null,null,null,null)
D.byb=new A.dq(1,B.cn,D.ftT,null)
D.cVt=w([E.a0p,B.ab,D.byb],x.p)
D.eIG=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cVt,null)
D.fbh=new A.x("Save member",null,B.cj,null,null,null,null,null,null,null,null,null)
D.d8G=w([D.amV,B.ab,D.fbh],x.p)
D.eIO=new A.cn(B.aO,B.bb,B.j,B.m,null,B.p,null,0,D.d8G,null)
D.bJ4=new A.ae(B.hL,14,B.aZ,null,null,null)
D.f_G=new A.G(!0,B.aZ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ff2=new A.x("Cashier",null,D.f_G,null,null,null,null,null,null,null,null,null)
D.d1X=w([D.bJ4,B.bp,D.ff2],x.p)
D.eIQ=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d1X,null)
D.fbi=new A.x("Transfer & settings",null,B.dl,null,null,null,null,null,null,null,null,null)
D.bwA=new A.bD(1,B.bh,D.fbi,null)
D.cND=w([D.amu,B.av,D.bwA],x.p)
D.eIR=new A.cn(B.aO,B.e,B.j,B.m,null,B.p,null,0,D.cND,null)
D.eMo=new A.at(16,40)
D.eMt=new A.at(22,64)
D.eMA=new A.at(280,88)
D.eNk=new A.a7(30,null,null,null)
D.eOC=new A.hK(2,12,12,1.05,null)
D.feJ=new A.x("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.ePk=new A.b1(D.feJ,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.feY=new A.x("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aNJ=new A.b1(D.feY,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fn_=new A.x("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ePO=new A.b1(D.fn_,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fx8=new A.x("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.ePT=new A.b1(D.fx8,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fgT=new A.x("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eQ_=new A.b1(D.fgT,null,null,null,null,null,null,null,null,null,null,null,null,B.fH,!1,null,null,null,B.r,null)
D.fux=new A.x("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aNN=new A.b1(D.fux,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fbT=new A.x("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eQp=new A.b1(D.fbT,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fxO=new A.x("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eR8=new A.b1(D.fxO,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fsR=new A.x("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eRx=new A.b1(D.fsR,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fxc=new A.x("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eRA=new A.b1(D.fxc,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fox=new A.x("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eRC=new A.b1(D.fox,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fiI=new A.x("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eRD=new A.b1(D.fiI,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fiJ=new A.x("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eSD=new A.b1(D.fiJ,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.feL=new A.x("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eSV=new A.b1(D.feL,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fgA=new A.x("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eTd=new A.b1(D.fgA,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fo1=new A.x("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eTt=new A.b1(D.fo1,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fjw=new A.x("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eTu=new A.b1(D.fjw,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.eWF=new A.G(!0,D.ke,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eX4=new A.G(!0,D.ke,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXI=new A.rw(!0,B.rt,null,null,null,null,B.ds,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXZ=new A.G(!0,D.ke,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYw=new A.G(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a74=new A.rw(!0,B.RM,null,null,null,null,B.ds,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZv=new A.G(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZU=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0t=new A.G(!0,null,null,null,null,null,8,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0x=new A.G(!0,G.it,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1N=new A.G(!0,B.M,null,null,null,null,13,B.a5,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2v=new A.G(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3d=new A.G(!0,B.bW,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3h=new A.G(!0,B.bI,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3D=new A.G(!0,D.Ey,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3M=new A.G(!0,B.aZ,null,null,null,null,13,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4K=new A.G(!0,B.cY,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5d=new A.G(!0,B.bW,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5D=new A.G(!0,B.aZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f73=new A.G(!0,B.ak,null,null,null,null,11.5,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7b=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPX=new A.G(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7A=new A.G(!0,B.ak,null,null,null,null,12,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8R=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9d=new A.G(!0,G.it,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9l=new A.G(!0,G.it,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa6=new A.x("Themes",null,B.p2,null,null,null,null,null,null,null,null,null)
D.faJ=new A.x("Add Item",null,B.cj,null,null,null,null,null,null,null,null,null)
D.f0c=new A.G(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb7=new A.x("Debt receipt",null,D.f0c,null,B.L,null,null,null,null,null,null,null)
D.aPS=new A.G(!0,B.ak,null,null,null,null,11,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbp=new A.x("Person who owes",null,D.aPS,null,null,null,null,null,null,null,null,null)
D.fcl=new A.x("Notes",null,B.a7d,null,null,null,null,null,null,null,null,null)
D.fcL=new A.x("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.f_b=new A.G(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcP=new A.x("Share",null,D.f_b,null,null,null,null,null,null,null,null,null)
D.fdL=new A.x("Move your family trees",null,D.aPX,null,null,null,null,null,null,null,null,null)
D.fel=new A.x("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.feX=new A.x("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fga=new A.x("Remove this book?",null,B.hq,null,null,null,null,null,null,null,null,null)
D.aQn=new A.x("Download",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fhg=new A.x("What should the AI do?",null,B.dl,null,null,null,null,null,null,null,null,null)
D.fiE=new A.x("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fjL=new A.x("Ribbon bookmark",null,B.iG,null,null,null,null,null,null,null,null,null)
D.f6Y=new A.G(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkf=new A.x("NGMY.ORG",null,D.f6Y,null,B.L,null,null,null,null,null,null,null)
D.flw=new A.x("Scan family tree QR",null,B.cy,null,null,null,null,null,null,null,null,null)
D.f3v=new A.G(!0,B.c,null,null,null,null,13,B.a5,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmf=new A.x("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.f3v,null,B.L,null,null,null,null,null,null,null)
D.fnr=new A.x("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fny=new A.x("Thumbnail",null,B.p2,null,null,null,null,null,null,null,null,null)
D.fo7=new A.x("Save the cover",null,B.cy,null,null,null,null,null,null,null,null,null)
D.foy=new A.x("Your photos",null,B.p2,null,null,null,null,null,null,null,null,null)
D.foN=new A.x("Create Project",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fph=new A.x("Design your cover",null,U.rG,null,null,null,null,null,null,null,null,null)
D.fpo=new A.x("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fpr=new A.x("PICTURE",null,H.mI,null,null,null,null,null,null,null,null,null)
D.fpN=new A.x("Paid",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fpP=new A.x("You can undo it right after.",null,T.IT,null,null,null,null,null,null,null,null,null)
D.fqk=new A.x("Print",null,B.uA,null,null,null,null,null,null,null,null,null)
D.fqG=new A.x("Amount owed",null,D.aPS,null,null,null,null,null,null,null,null,null)
D.fqU=new A.x("Got it",null,B.cj,null,null,null,null,null,null,null,null,null)
D.frt=new A.x("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.frw=new A.x("Add to budget",null,B.cj,null,null,null,null,null,null,null,null,null)
D.frY=new A.x("Debtor signature",null,B.a7d,null,null,null,null,null,null,null,null,null)
D.fs6=new A.x("Change icon",null,E.aP9,null,null,null,null,null,null,null,null,null)
D.ftj=new A.x("Family tree QR",null,B.cy,null,null,null,null,null,null,null,null,null)
D.ftJ=new A.x("Download",null,B.uA,null,null,null,null,null,null,null,null,null)
D.ftN=new A.x("Change",null,B.p2,null,null,null,null,null,null,null,null,null)
D.fuD=new A.x("Clear all",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fuG=new A.x("WHAT SHOULD IT CHANGE?",null,H.mI,null,null,null,null,null,null,null,null,null)
D.fvf=new A.x("COLOUR",null,H.mI,null,null,null,null,null,null,null,null,null)
D.fvr=new A.x("Do it",null,B.cy,null,null,null,null,null,null,null,null,null)
D.fvu=new A.x("Create Tree",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fwt=new A.x("Create Family Tree",null,B.eV,null,null,null,null,null,null,null,null,null)
D.eVD=new A.G(!0,E.jO,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwJ=new A.x("Write the first page myself",null,D.eVD,null,null,null,null,null,null,null,null,null)
D.fxf=new A.x("Use this header",null,B.cy,null,null,null,null,null,null,null,null,null)
D.fxl=new A.x("Create Project",null,E.aPB,null,null,null,null,null,null,null,null,null)
D.fNj=new C.aaX(1,"header")
D.a8p=new C.aaX(2,"projects")
D.fNk=new C.aaX(3,"cashier")
D.a8q=new C.aaX(4,"familyTree")
D.fYJ=new C.cvN(0,"start")
D.fYK=new C.cvO(0,"start")
D.fNB=new C.XZ(null)
D.fOA=new C.Yq(null)
D.dkG=new A.bk(B.i3,[],A.ax("bk<n,Fq>"))
D.d4k=w([],x.E)
D.d4l=w([],x.M)
D.fP6=new C.bdB(D.dkG,D.d4k,D.d4l,0,0,null,null)
D.fRl=new C.ZO(null)
D.a97=new C.aIP(0,"projects")
D.aUx=new C.aIP(1,"cashier")
D.fWA=new C.aIP(2,"familyTree")})()};
(a=>{a["IvGyQDY89dnP+inJdTy+uT9bOqc="]=a.current})($__dart_deferred_initializers__);