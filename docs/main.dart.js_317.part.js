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
return A.b(A.qK(t,a1,B.hn,E.EY),$async$bCd)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Q3(a5)
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
ags(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ags=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vc(null,""),$async$ags)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.V(y.j)
t=A.n2(b6)
s=x.S
r=A.dd(c1,0,A.dJ(4,"count",s),A.U(c1).c)
q=F.a1F(new A.K(r,new C.fxD(),r.$ti.k("K<ak.E,n>")).aI(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fxC(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.R.ao(b7,null)+"\nAllowed values: style one of "+B.d.aI(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ags)
case 6:l=c5
k=F.Q3(l==null?"":l)
if(k==null)throw A.V("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.anC(s,D.dkP,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
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
return A.b(m.$1(f+B.R.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ags)
case 10:l=c5
k=l==null?null:F.Q3(l)
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
p=A.cD(new A.bc(h,s),new C.fxE(),s.k("J.E"),p)
p=F.a1F(A.p9(p,3,A.a3(p).k("J.E")).aI(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.B(new A.cu(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a1S(s,b9),$async$ags)
case 13:b5=c5
for(s=J.a6(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.anC(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ags,v)},
hm_(d,e,f){return A.ca(null,B.w.j(0.65),!1,null,new C.fGP(e,f),d,null,!0,!0,x.g2)},
anC:function anC(d,e,f){this.a=d
this.b=e
this.c=f},
fxD:function fxD(){},
fxC:function fxC(d){this.a=d},
fxE:function fxE(){},
fGP:function fGP(d,e){this.a=d
this.b=e},
bA2(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bA2=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b5(b1,new C.fmH())){u=null
w=1
break}t=B.d.d8(b1,new C.fmI())
s=$.W()
r=new A.qU()
q=A.D5(r,D.aLI)
p=A.M()
p.r=B.c.gp(0)
q.aZ(D.aLI,p)
o=A.M()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bO
o.e=B.fA
n=new C.fmN(t)
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
a3.e=null}}q.aO(a3,o)}w=4
return A.b(r.pB().zd(520,160),$async$bA2)
case 4:w=3
return A.b(b3.hr(B.fY),$async$bA2)
case 3:b0=b3
u=b0==null?null:J.eT(B.dD.gaM(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bA2,v)},
fvj(d){return C.i_n(d)},
i_n(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fvj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bf1()
n=d.x!=null&&d.yU(null).length===0
if(d.x!=null)t=n?D.za:D.HY
else t=d.gTg()?D.HY:D.aGM
w=3
return A.b(C.bA2(d.ax),$async$fvj)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aml(s)
r=A.a3Q(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aGM}else{p.c=C.wD(q,!0)
p.b=n?D.za:D.HY}r.a2t(A.fQU(new C.fvl(p,d,new C.fvm(),t,n,o),null,D.bua,B.w4))
u=r.k5(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fvj,v)},
fBX(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fBX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fvj(d),$async$fBX)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aK(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A8.Gi(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fBX,v)},
fmH:function fmH(){},
fmI:function fmI(){},
fmN:function fmN(d){this.a=d},
fvm:function fvm(){},
fvl:function fvl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fvk:function fvk(){},
fHg(d,e){var w=0,v=A.j(x.H)
var $async$fHg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,B.w.j(0.55),!0,null,new C.fHk(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fHg)
case 2:return A.h(null,v)}})
return A.i($async$fHg,v)},
bCH(d,e,f,g){return C.i6R(d,e,f,g)},
i6R(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bCH=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gal(e.split(",")):e
r=B.cG.aJ(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.S(D.eTn)
w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.fHc(g,r,f),d,null,!0,!0,x.H),$async$bCH)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bCH,v)},
fHl(d,e){var w=0,v=A.j(x.H)
var $async$fHl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,null,!0,null,new C.fHo(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fHl)
case 2:return A.h(null,v)}})
return A.i($async$fHl,v)},
aXM:function aXM(d,e){this.c=d
this.a=e},
c11:function c11(){},
b9U:function b9U(d,e){this.b=d
this.a=e},
fHk:function fHk(d,e){this.a=d
this.b=e},
fHh:function fHh(d){this.a=d},
fHi:function fHi(d,e,f){this.a=d
this.b=e
this.c=f},
fHj:function fHj(d,e){this.a=d
this.b=e},
fHc:function fHc(d,e,f){this.a=d
this.b=e
this.c=f},
fHa:function fHa(d){this.a=d},
fHb:function fHb(d,e,f){this.a=d
this.b=e
this.c=f},
fHo:function fHo(d,e){this.a=d
this.b=e},
fHm:function fHm(d){this.a=d},
fHn:function fHn(d,e,f){this.a=d
this.b=e
this.c=f},
fqg(d,e){var w=0,v=A.j(x.y),u,t
var $async$fqg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1q(d),$async$fqg)
case 3:t=g
J.no(t,new C.fqh(e))
u=A.ah5(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fqg,v)},
fqh:function fqh(d){this.a=d},
anJ:function anJ(d,e,f){this.c=d
this.d=e
this.a=f},
aBY:function aBY(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dFd:function dFd(d,e){this.a=d
this.b=e},
dEZ:function dEZ(d,e){this.a=d
this.b=e},
dF1:function dF1(d,e,f){this.a=d
this.b=e
this.c=f},
dF0:function dF0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dF_:function dF_(d,e){this.a=d
this.b=e},
dF2:function dF2(d,e){this.a=d
this.b=e},
dEX:function dEX(){},
dEY:function dEY(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dEW:function dEW(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dEH:function dEH(d){this.a=d},
dEI:function dEI(d,e,f){this.a=d
this.b=e
this.c=f},
dEJ:function dEJ(d,e){this.a=d
this.b=e},
dEG:function dEG(d){this.a=d},
dEO:function dEO(d,e){this.a=d
this.b=e},
dEF:function dEF(d){this.a=d},
dEP:function dEP(d,e,f){this.a=d
this.b=e
this.c=f},
dEQ:function dEQ(d,e,f){this.a=d
this.b=e
this.c=f},
dEE:function dEE(d,e){this.a=d
this.b=e},
dER:function dER(d,e,f){this.a=d
this.b=e
this.c=f},
dED:function dED(d,e){this.a=d
this.b=e},
dES:function dES(d,e){this.a=d
this.b=e},
dEC:function dEC(d){this.a=d},
dET:function dET(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dEA:function dEA(){},
dEu:function dEu(d){this.a=d},
dEv:function dEv(d){this.a=d},
dEB:function dEB(d,e){this.a=d
this.b=e},
dEU:function dEU(d,e){this.a=d
this.b=e},
dEz:function dEz(d){this.a=d},
dEV:function dEV(d){this.a=d},
dEy:function dEy(){},
dEK:function dEK(d,e){this.a=d
this.b=e},
dEx:function dEx(d){this.a=d},
dEL:function dEL(d,e,f){this.a=d
this.b=e
this.c=f},
dEw:function dEw(d,e){this.a=d
this.b=e},
dEt:function dEt(d,e){this.a=d
this.b=e},
dEM:function dEM(d){this.a=d},
dEN:function dEN(d,e,f){this.a=d
this.b=e
this.c=f},
dFg:function dFg(){},
dFh:function dFh(d,e){this.a=d
this.b=e},
dFe:function dFe(d){this.a=d},
dFf:function dFf(d){this.a=d},
dFa:function dFa(d,e){this.a=d
this.b=e},
dFb:function dFb(d){this.a=d},
dF3:function dF3(d,e,f){this.a=d
this.b=e
this.c=f},
dF4:function dF4(d,e,f){this.a=d
this.b=e
this.c=f},
dF5:function dF5(d,e,f){this.a=d
this.b=e
this.c=f},
dF6:function dF6(d,e,f){this.a=d
this.b=e
this.c=f},
dF7:function dF7(d,e,f){this.a=d
this.b=e
this.c=f},
dF8:function dF8(d,e,f){this.a=d
this.b=e
this.c=f},
dF9:function dF9(d,e,f){this.a=d
this.b=e
this.c=f},
dFi:function dFi(){},
dFj:function dFj(){},
dFk:function dFk(){},
dFl:function dFl(d){this.a=d},
dFc:function dFc(d,e){this.a=d
this.b=e},
hid(d){return B.d.dL(D.a1o,new C.fqR(d),new C.fqS())},
u6:function u6(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fqR:function fqR(d){this.a=d},
fqS:function fqS(){},
ak4:function ak4(d,e,f,g,h,i){var _=this
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
Sh:function Sh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdw:function bdw(){this.d=$
this.c=this.a=null},
d52:function d52(d,e){this.a=d
this.b=e},
d50:function d50(d,e){this.a=d
this.b=e},
d51:function d51(){},
d53:function d53(d,e){this.a=d
this.b=e},
h31(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.n9(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
Ks(d,e){return C.hZ0(d,e)},
hZ0(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
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
o=A.cD(o,new C.fsV(),o.$ti.k("J.E"),x.B)
n=A.a3(o).k("a2<J.E>")
o=A.B(new A.a2(o,new C.fsW(),n),n.k("J.E"))
B.d.b0(o,new C.fsX())
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
AG(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$AG=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aA(),$async$AG)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fFV(),x.a)
r=A.B(r,r.$ti.k("ak.E"))
w=4
return A.b(t.au("String","ngmy_family_book_v1_"+s+"_"+e,B.R.ao(r,null)),$async$AG)
case 4:case 1:return A.h(u,v)}})
return A.i($async$AG,v)},
aPJ(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aPJ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Ks(d,e),$async$aPJ)
case 2:u=h
t=J.cE(u)
s=t.bd(u,new C.fO0(f))
if(s===-1)t.ck(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.AG(d,e,u),$async$aPJ)
case 3:return A.h(null,v)}})
return A.i($async$aPJ,v)},
bAv(d,e,f){var w=0,v=A.j(x.H),u
var $async$bAv=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Ks(d,e),$async$bAv)
case 2:u=h
J.no(u,new C.fq8(f))
w=3
return A.b(C.AG(d,e,u),$async$bAv)
case 3:return A.h(null,v)}})
return A.i($async$bAv,v)},
bAK(d,e){return C.hZ_(d,e)},
hZ_(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
h=B.d.t(D.a2V,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.t(D.a2m,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.t(D.a2h,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.t(D.cQY,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
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
R6(d,e,f){return C.i6n(d,e,f)},
i6n(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$R6=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aA(),$async$R6)
case 7:r=h
w=8
return A.b(r.au("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.R.ao(f.ag(),null)),$async$R6)
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
return A.i($async$R6,v)},
QB(d,e){return C.hZ1(d,e)},
hZ1(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$QB=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$QB)
case 7:r=g
q=r.t4("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Ks(d,e),$async$QB)
case 8:if(!j.cy(g)){n=B.a.i(d.toLowerCase())
m=J.lo(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$QB)
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
return A.i($async$QB,v)},
afM(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$afM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QB(d,e),$async$afM)
case 3:s=g
r=J.a6(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.J(s,t)
w=5
return A.b(A.aA(),$async$afM)
case 5:w=4
return A.b(g.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$afM)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afM,v)},
a24(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a24=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.QB(d,e),$async$a24)
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
fsV:function fsV(){},
fsW:function fsW(){},
fsX:function fsX(){},
fFV:function fFV(){},
fO0:function fO0(d){this.a=d},
fq8:function fq8(d){this.a=d},
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
i6G(d,e,f,g,h,i,j){return A.a5(d,!1).c8(A.e9(new C.fGt(j,i,f,e,h,g),!0,null,x.H))},
Qy(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Qy=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QB(h,g),$async$Qy)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.I(x.q).f.S(D.aNK)
u=!1
w=1
break}w=4
return A.b(C.hm_(d,f,e),$async$Qy)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.afM(h,g),$async$Qy)
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
return A.b(C.AG(h,r,p),$async$Qy)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.R6(h,r,new C.Hf("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Qy)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Qy,v)},
fGt:function fGt(d,e,f,g,h,i){var _=this
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
d5I:function d5I(d){this.a=d},
d5H:function d5H(d,e){this.a=d
this.b=e},
d5w:function d5w(d,e){this.a=d
this.b=e},
d5t:function d5t(d,e){this.a=d
this.b=e},
d54:function d54(d){this.a=d},
d55:function d55(d,e){this.a=d
this.b=e},
d5x:function d5x(d){this.a=d},
d5d:function d5d(d){this.a=d},
d5b:function d5b(d){this.a=d},
d5c:function d5c(d){this.a=d},
d5e:function d5e(d){this.a=d},
d5u:function d5u(d){this.a=d},
d5v:function d5v(){},
d59:function d59(d){this.a=d},
d5a:function d5a(d,e){this.a=d
this.b=e},
d5f:function d5f(d){this.a=d},
d5g:function d5g(d,e){this.a=d
this.b=e},
d5G:function d5G(d){this.a=d},
d5F:function d5F(d,e){this.a=d
this.b=e},
d5E:function d5E(d){this.a=d},
d5q:function d5q(d){this.a=d},
d5p:function d5p(d){this.a=d},
d5r:function d5r(d){this.a=d},
d56:function d56(d,e){this.a=d
this.b=e},
d5s:function d5s(d,e){this.a=d
this.b=e},
d5j:function d5j(d){this.a=d},
d5k:function d5k(d){this.a=d},
d5i:function d5i(){},
d5l:function d5l(d){this.a=d},
d5m:function d5m(d){this.a=d},
d5n:function d5n(d,e){this.a=d
this.b=e},
d5o:function d5o(d,e,f){this.a=d
this.b=e
this.c=f},
d5h:function d5h(d,e){this.a=d
this.b=e},
d5z:function d5z(d){this.a=d},
d5y:function d5y(){},
d5A:function d5A(d){this.a=d},
d5B:function d5B(d){this.a=d},
d5C:function d5C(d){this.a=d},
d5D:function d5D(d,e){this.a=d
this.b=e},
d57:function d57(d){this.a=d},
d58:function d58(d){this.a=d},
YT:function YT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdR:function bdR(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d7s:function d7s(d){this.a=d},
d7t:function d7t(d){this.a=d},
d7r:function d7r(d){this.a=d},
d7u:function d7u(d){this.a=d},
d7q:function d7q(d){this.a=d},
d7v:function d7v(d){this.a=d},
d7p:function d7p(d){this.a=d},
d7w:function d7w(d,e){this.a=d
this.b=e},
d7o:function d7o(d,e){this.a=d
this.b=e},
d7x:function d7x(d,e){this.a=d
this.b=e},
YR:function YR(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aee:function aee(d,e,f){this.a=d
this.b=e
this.c=f},
az2:function az2(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d5X:function d5X(d,e){this.a=d
this.b=e},
d5W:function d5W(d,e){this.a=d
this.b=e},
d60:function d60(d){this.a=d},
d6_:function d6_(d,e){this.a=d
this.b=e},
d5Y:function d5Y(d){this.a=d},
d5Z:function d5Z(d){this.a=d},
d61:function d61(d){this.a=d},
d62:function d62(d){this.a=d},
d5V:function d5V(d,e){this.a=d
this.b=e},
d5U:function d5U(d,e){this.a=d
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
u7:function u7(d,e,f,g){var _=this
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
hXZ(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ahi(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bA(new A.S(Date.now(),0,!1))
s=new C.fqV(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("a2<1>"),q=q.k("cR<1,n>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.xN)m.push(l===D.Zn?"male":"female")
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
m.push("child of "+l+k)}a0=A.B(new A.cR(new A.a2(a4,new C.fqT(u,f),p),new C.fqU(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aI(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aI(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hY_(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ahi(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fr_(v,e)
q=new C.fqY(v)
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
n=A.B(d,A.a3(d).k("co.E"))
B.d.fl(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.L)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gaf(e),k=new A.fe(l,new C.fqZ(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ai(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aI(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hJE(d,e,f,g){var w,v,u=C.hY0(d,e)
if(u<=0||f.length<=u)return new A.adP(!1,D.C6,f)
if(g.t(0,e.a))return new A.adP(!1,D.C6,f)
w=A.U(f).c
v=A.dd(f,0,A.dJ(u,"count",x.S),w).dH(0)
return new A.adP(!0,A.dd(f,u,null,w).dH(0),v)},
hJF(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ahi(d3),d2=d1.length
if(d2===0)return D.fPp
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.cg(0,t.a,new C.d69(t))}s=new C.d6q(v)
d2=x.h
r=A.T(w,d2)
q=new C.d6i(r)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d6h(r)
l=A.T(w,x.do)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ch(l.cg(0,k,new C.d6a()),o)}h=new C.d6g(s)
g=new C.d6f(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a2<J.E>")
f=A.B(new A.a2(new A.bc(v,p),new C.d6b(h),o),o.k("J.E"))
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
a9=new C.d6o(new C.d6k(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dt(v,v.r,v.e),j=a2.gajU(a2);o.C();){b0=o.d
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
b7=new C.d68(a2,new C.d6p(),b6,a3,b4,v,a4,a5,a6,b5)
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
a3.bI(0,new C.d6c(c6,b4))
for(d2=new A.cK(a4,a4.$ti.k("cK<1,2>")).gaf(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gT(j)
if(b6.ai(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gaf(b5),i=new A.fe(j,new C.d6d(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.b0(o,new C.d6e())
c6.push(new C.aI7(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bdB(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hhJ(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(d)
return w==null?null:w.b[1]},
hc4(d,e,f,g,h,i,j,k,l,m,n){return new C.Zs(k,f,j,e,l,n,m,d,g,h,i,null)},
aAZ(d,e,f,g,h,i,j){return new C.bhg(i,d,e,f,j,h,g,null)},
aoQ:function aoQ(d,e,f,g,h,i,j){var _=this
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
dTg:function dTg(d){this.a=d},
dTf:function dTf(d){this.a=d},
dTi:function dTi(d,e){this.a=d
this.b=e},
dTj:function dTj(d,e){this.a=d
this.b=e},
dTk:function dTk(d){this.a=d},
dTe:function dTe(d,e){this.a=d
this.b=e},
dTh:function dTh(d){this.a=d},
dTm:function dTm(d){this.a=d},
dTl:function dTl(d,e){this.a=d
this.b=e},
aoK:function aoK(d,e,f,g,h,i,j){var _=this
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
dSH:function dSH(d){this.a=d},
dSF:function dSF(d){this.a=d},
dSG:function dSG(d){this.a=d},
dSI:function dSI(d,e){this.a=d
this.b=e},
dSC:function dSC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSa:function dSa(d){this.a=d},
dSb:function dSb(d,e){this.a=d
this.b=e},
dSp:function dSp(d){this.a=d},
dSn:function dSn(d){this.a=d},
dSo:function dSo(d,e){this.a=d
this.b=e},
dSq:function dSq(d){this.a=d},
dSr:function dSr(d,e){this.a=d
this.b=e},
dSB:function dSB(d,e){this.a=d
this.b=e},
dSz:function dSz(d,e){this.a=d
this.b=e},
dSy:function dSy(d,e){this.a=d
this.b=e},
dSu:function dSu(d,e){this.a=d
this.b=e},
dSt:function dSt(d){this.a=d},
dSv:function dSv(d,e){this.a=d
this.b=e},
dSs:function dSs(d){this.a=d},
dSw:function dSw(d){this.a=d},
dSx:function dSx(d){this.a=d},
dSA:function dSA(d,e){this.a=d
this.b=e},
dRZ:function dRZ(d,e){this.a=d
this.b=e},
dS_:function dS_(d,e){this.a=d
this.b=e},
dSK:function dSK(d,e,f){this.a=d
this.b=e
this.c=f},
dSE:function dSE(d,e,f){this.a=d
this.b=e
this.c=f},
dSD:function dSD(d){this.a=d},
dS0:function dS0(d){this.a=d},
dS1:function dS1(d){this.a=d},
dS2:function dS2(){},
dS3:function dS3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dS7:function dS7(d,e){this.a=d
this.b=e},
dS6:function dS6(d,e){this.a=d
this.b=e},
dS5:function dS5(d){this.a=d},
dS8:function dS8(d,e){this.a=d
this.b=e},
dS4:function dS4(d){this.a=d},
dSJ:function dSJ(d){this.a=d},
dSk:function dSk(){},
dSl:function dSl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSj:function dSj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSf:function dSf(d,e,f){this.a=d
this.b=e
this.c=f},
dSe:function dSe(d,e,f){this.a=d
this.b=e
this.c=f},
dSc:function dSc(d,e){this.a=d
this.b=e},
dSg:function dSg(d){this.a=d},
dSh:function dSh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSd:function dSd(d,e){this.a=d
this.b=e},
dSi:function dSi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSm:function dSm(d,e){this.a=d
this.b=e},
dSR:function dSR(){},
dSS:function dSS(d,e){this.a=d
this.b=e},
dST:function dST(d){this.a=d},
dSU:function dSU(d,e){this.a=d
this.b=e},
dSN:function dSN(d){this.a=d},
dSL:function dSL(d,e){this.a=d
this.b=e},
dSO:function dSO(d,e){this.a=d
this.b=e},
dSP:function dSP(d,e){this.a=d
this.b=e},
dSQ:function dSQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dSV:function dSV(d){this.a=d},
dSM:function dSM(d){this.a=d},
dS9:function dS9(d){this.a=d},
bdz:function bdz(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d66:function d66(d){this.a=d},
d65:function d65(d,e){this.a=d
this.b=e},
d67:function d67(d){this.a=d},
d64:function d64(d,e){this.a=d
this.b=e},
fqV:function fqV(d,e){this.a=d
this.b=e},
fqW:function fqW(d){this.a=d},
fqX:function fqX(){},
fqT:function fqT(d,e){this.a=d
this.b=e},
fqU:function fqU(){},
fr_:function fr_(d,e){this.a=d
this.b=e},
fr0:function fr0(d){this.a=d},
fr1:function fr1(){},
fqY:function fqY(d){this.a=d},
fqZ:function fqZ(d,e){this.a=d
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
d69:function d69(d){this.a=d},
d6q:function d6q(d){this.a=d},
d6i:function d6i(d){this.a=d},
d6j:function d6j(){},
d6h:function d6h(d){this.a=d},
d6a:function d6a(){},
d6g:function d6g(d){this.a=d},
d6f:function d6f(d,e){this.a=d
this.b=e},
d6b:function d6b(d){this.a=d},
d6k:function d6k(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d6l:function d6l(d){this.a=d},
d6m:function d6m(d){this.a=d},
d6n:function d6n(){},
d6o:function d6o(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d6p:function d6p(){},
d68:function d68(d,e,f,g,h,i,j,k,l,m){var _=this
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
d6c:function d6c(d,e){this.a=d
this.b=e},
d6d:function d6d(d){this.a=d},
d6e:function d6e(){},
aI7:function aI7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bdC:function bdC(d,e){this.b=d
this.a=e},
d6r:function d6r(){},
d6s:function d6s(d){this.a=d},
d6t:function d6t(d){this.a=d},
d6u:function d6u(){},
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
f95:function f95(d){this.a=d},
bkD:function bkD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eL0:function eL0(d){this.a=d},
eL_:function eL_(d,e){this.a=d
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
dmj:function dmj(d,e){this.a=d
this.b=e},
dmi:function dmi(d){this.a=d},
dmg:function dmg(d){this.a=d},
dmh:function dmh(d){this.a=d},
dms:function dms(d){this.a=d},
dmt:function dmt(d){this.a=d},
dmr:function dmr(d,e){this.a=d
this.b=e},
dmu:function dmu(){},
dmx:function dmx(d){this.a=d},
dmq:function dmq(d,e){this.a=d
this.b=e},
dmw:function dmw(){},
dmy:function dmy(d){this.a=d},
dmp:function dmp(d,e){this.a=d
this.b=e},
dmz:function dmz(d){this.a=d},
dmo:function dmo(d){this.a=d},
dmA:function dmA(d){this.a=d},
dmn:function dmn(d){this.a=d},
dmB:function dmB(d){this.a=d},
dmm:function dmm(d){this.a=d},
dmC:function dmC(d){this.a=d},
dml:function dml(d){this.a=d},
dmD:function dmD(d){this.a=d},
dmk:function dmk(d,e){this.a=d
this.b=e},
dmv:function dmv(d){this.a=d},
acE:function acE(d,e,f,g){var _=this
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
acD:function acD(d,e,f,g,h,i,j){var _=this
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
dmE:function dmE(d){this.a=d},
dmF:function dmF(d,e){this.a=d
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
acF:function acF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dmO:function dmO(d){this.a=d},
Jv:function Jv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
h6X(d){var w=d.U,v=x.N
return w.j0(w,new C.c7z(),v,v)},
hB9(d){var w=d.bF
if(w>=0)return w
return 5},
h6Z(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.h6X(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
h6Y(d,e){var w=C.h6Z(d,e)
if(w!=null&&w.cc(new A.S(Date.now(),0,!1)))return!0
return!1},
hBa(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.h6X(d),w,w)
u=C.h6Z(d,e)
t=u!=null&&u.cc(new A.S(Date.now(),0,!1))?u:new A.S(Date.now(),0,!1)
v.n(0,s,t.bQ(A.dC(30,0,0,0,0,0).a).a6().ac())
d.U=v},
aZb(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aZb=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.ld(t,B.HL),$async$aZb)
case 3:if(l){u=!0
w=1
break}u=A.kS(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.HL,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZb,v)},
c7z:function c7z(){},
hB7(){var w,v=$.pn(),u=J.e3(8,x.N)
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
a6G(d){return C.hB8(d)},
hB8(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
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
case 3:t=m.jw(f),t=t.gaf(t),s=x.f
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
case 5:n=C.hB7()
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
return A.b(C.aoP(d,e),$async$a6H)
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
aoJ(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aoJ=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aoP(f,e),$async$aoJ)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c3(),$async$aoJ)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.I9(),$async$aoJ)
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
return A.i($async$aoJ,v)},
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
hBb(){var w,v=$.pn(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aC(32)]
return"FT"+B.d.fX(u)},
aoM(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$aoM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$aoM)
case 3:if(!g){u=null
w=1
break}t=C.hBb()
w=4
return A.b(A.UB(),$async$aoM)
case 4:s=g
r=B.dJ.aJ(B.R.ao(d.eM(),null))
r=B.cT.gcw().aJ(r)
q=e?999:2
J.aF(s,t,A.F(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(A.a6I(s),$async$aoM)
case 5:p=e?999:2
u=new A.a_E("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoM,v)},
aoL(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aoL=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.UB(),$async$aoL)
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
return A.b(C.aZ9(J.k(l==null?"":l),j),$async$aoL)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.c6.ca(0,B.cG.aJ(t))
s=C.h7_(r)}catch(f){q=A.aa(f)
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
return A.b(A.a6I(p),$async$aoL)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoL,v)},
h7_(d){var w,v,u,t,s=null
try{w=B.R.aG(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hBd(A.a1(w,x.N,x.z))
return u}catch(t){v=A.aa(t)
$.am.$1("[family tree sync] parse: "+A.t(v))
return s}},
fRX(d){var w=0,v=A.j(x.m),u,t,s
var $async$fRX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aoL(t[1])
w=1
break}u=null
w=1
break}u=C.h7_(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fRX,v)},
hBd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d9(v,x.f)
u=A.cD(u,new C.c7B(),u.$ti.k("J.E"),x.k)
t=A.a3(u).k("a2<J.E>")
s=A.B(new A.a2(u,new C.c7C(),t),t.k("J.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.T(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jw(p),t=t.gaf(t),o=x.B;t.C();){n=t.gT(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d9(l,u)
n=A.cD(n,new C.c7D(),n.$ti.k("J.E"),o)
k=A.a3(n).k("a2<J.E>")
j=A.B(new A.a2(n,new C.c7E(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aoN(h,w,s,r,q)},
aoP(d,e){var w=0,v=A.j(x.y),u,t
var $async$aoP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.MX(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Av(d),$async$aoP)
case 3:u=t.cy(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoP,v)},
c7K(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c7K=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Av(d),$async$c7K)
case 3:t=s.b6(f,new C.c7L(),x.cs)
t=A.B(t,t.$ti.k("ak.E"))
B.d.b0(t,new C.c7M())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c7K,v)},
UC(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$UC=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aoP(e,d),$async$UC)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.N5(e),$async$UC)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Av(e),$async$UC)
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
return A.b(C.Ks(e,o),$async$UC)
case 14:n=i
if(J.cy(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.aoN(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$UC,v)},
aZe(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aZe=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.UC(d,e,f,g),$async$aZe)
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
return A.b(C.UC(d,e,f,g),$async$aZd)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aoM(r,f),$async$aZd)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aFa(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZd,v)},
UD(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$UD=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fRX(a0),$async$UD)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aoJ(g.a,d,e,f,s,r),$async$UD)
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
return A.b(C.bAl(e,j),$async$UD)
case 12:case 11:w=13
return A.b(C.ah3(e,j,s),$async$UD)
case 13:h=n.h(0,i)
w=h!=null&&J.cy(h)?14:15
break
case 14:w=16
return A.b(C.AG(e,i,h),$async$UD)
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
return A.i($async$UD,v)},
aoN:function aoN(d,e,f,g,h){var _=this
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
h_h(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f7(null,x.H)
return A.hw(d,new C.aoO(w,e,g,i,f,h,null),!0,null,x.H)},
d63(d,e,f,g,h,i,j,k){return new C.bdy(i,e,k,j,g,f,h,d,null)},
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
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dT3:function dT3(d){this.a=d},
dT4:function dT4(d,e,f){this.a=d
this.b=e
this.c=f},
dT8:function dT8(d,e){this.a=d
this.b=e},
dT9:function dT9(d){this.a=d},
dT0:function dT0(d){this.a=d},
dT1:function dT1(d,e){this.a=d
this.b=e},
dT2:function dT2(d,e){this.a=d
this.b=e},
dT7:function dT7(d){this.a=d},
dT6:function dT6(d,e){this.a=d
this.b=e},
dT5:function dT5(){},
dTb:function dTb(d){this.a=d},
dTc:function dTc(d,e){this.a=d
this.b=e},
dTa:function dTa(d,e){this.a=d
this.b=e},
d6v:function d6v(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bdA:function bdA(d,e,f){this.d=d
this.e=e
this.a=f},
abV:function abV(d,e,f){this.c=d
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
dSW:function dSW(d,e){this.a=d
this.b=e},
dSX:function dSX(d){this.a=d},
dSY:function dSY(d){this.a=d},
dSZ:function dSZ(d){this.a=d},
dT_:function dT_(d){this.a=d},
ZO:function ZO(d){this.a=d},
biK:function biK(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dTd:function dTd(d,e){this.a=d
this.b=e},
aXL(d,e){return new C.aXK(d,e,null)},
aXK:function aXK(d,e,f){this.c=d
this.d=e
this.a=f},
i_s(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b1(d,11)},
i6Q(d){return A.bR(B.K,null,new C.fGW(new C.tF(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
h8S(d,e){return new C.arJ(e,d,null)},
aPp(d,e,f,g,h,i,j){var w=C.i_s(i)
if(w!=null)return A.bw(e,new A.a7(j,f,new C.a5I(w,!0,null),null),B.aq)
return I.aOK(e,B.bS,f,g,h,i,j)},
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
dEl:function dEl(d){this.a=d},
dEm:function dEm(){},
dEn:function dEn(d,e){this.a=d
this.b=e},
bip:function bip(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fGW:function fGW(d){this.a=d},
fGV:function fGV(d,e){this.a=d
this.b=e},
fGU:function fGU(d,e){this.a=d
this.b=e},
fGT:function fGT(d,e){this.a=d
this.b=e},
arJ:function arJ(d,e,f){this.c=d
this.d=e
this.a=f},
cfe:function cfe(d,e){this.a=d
this.b=e},
aKt:function aKt(){},
i6B(d){var w=null
return A.ca(w,w,!0,w,new C.fGi(),d,w,!0,!0,x.e2)},
i7L(d,e,f,g,h){var w=null
return A.ca(w,w,!0,w,new C.fNM(h,g,f,e),d,w,!0,!0,x.N)},
i6D(d,e){var w=null
return A.ca(w,w,!0,w,new C.fGn(e),d,w,!0,!0,x.dY)},
i6C(d){var w=null
return A.ca(w,w,!0,w,new C.fGm(),d,w,!0,!0,x.c5)},
aSk:function aSk(d,e){this.a=d
this.b=e},
aSj:function aSj(d){this.a=d},
aQl:function aQl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fGi:function fGi(){},
fNM:function fNM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fGn:function fGn(d){this.a=d},
fGm:function fGm(){},
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
f8y:function f8y(d,e){this.a=d
this.b=e},
f8z:function f8z(d){this.a=d},
f8A:function f8A(d,e){this.a=d
this.b=e},
aaY:function aaY(d,e){this.a=d
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
f8w:function f8w(d,e){this.a=d
this.b=e},
awp:function awp(d,e){this.c=d
this.a=e},
buQ:function buQ(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
f8x:function f8x(d){this.a=d},
buO:function buO(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aME:function aME(){},
aMF:function aMF(){},
bCi(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bt(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oC(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fEY(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dh(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dh(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dh(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.dh(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Xn(A.dh(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aP0(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aP0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hX().l5(85,1280,B.eG),$async$aP0)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fi(),$async$aP0)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.h8R()
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
return A.b(n.lZ(),$async$aPn)
case 10:m=a1
w=11
return A.b(J.aht(m).hr(B.fY),$async$aPn)
case 11:l=a1
J.aht(m).q()
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
fEY:function fEY(){},
tF:function tF(d){this.a=d},
arI:function arI(d,e,f){this.c=d
this.d=e
this.a=f},
aE2:function aE2(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eIa:function eIa(d,e){this.a=d
this.b=e},
eI1:function eI1(d){this.a=d},
eI2:function eI2(d){this.a=d},
eI8:function eI8(d,e){this.a=d
this.b=e},
eI7:function eI7(d,e){this.a=d
this.b=e},
eI4:function eI4(d,e){this.a=d
this.b=e},
eI3:function eI3(d,e){this.a=d
this.b=e},
eI5:function eI5(d){this.a=d},
eI6:function eI6(d,e){this.a=d
this.b=e},
eI9:function eI9(d,e){this.a=d
this.b=e},
eHX:function eHX(d,e){this.a=d
this.b=e},
eI0:function eI0(d){this.a=d},
eI_:function eI_(d,e){this.a=d
this.b=e},
eHZ:function eHZ(d){this.a=d},
eIb:function eIb(d,e){this.a=d
this.b=e},
eIc:function eIc(d,e){this.a=d
this.b=e},
eHY:function eHY(d,e){this.a=d
this.b=e},
hlw(d,e,f){var w="thumbnailPath",v=e.ag()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.F(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a6().ac(),"project",v],x.N,x.z)},
fEZ(d,e,f){var w=0,v=A.j(x.N),u
var $async$fEZ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.R.ao(C.hlw(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fEZ,v)},
bCk(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bCk=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fEZ(!0,d,e),$async$bCk)
case 4:w=3
return A.b(r.arG(g,d,e.a),$async$bCk)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dJ.aJ(B.R.ao(C.hlw(d,e,null),null))
u="NGMY_WS:"+B.kb.gcw().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCk,v)},
hdq(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fZZ(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d_(s,"NGMYWSSYNC2|"))return!0
if(J.d_(s,"NGMY_WS:"))return!0
if(J.f0(s,t))return!0
if(J.d_(s,"{"))try{w=B.R.aG(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
i4v(d){var w,v,u,t=C.hdq(d)
if(t==null)return null
if(C.fZZ(t))return t
w=B.a.cJ(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b1(t,w))
if(C.fZZ(v))return v}u=B.a.cJ(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b1(t,u))
if(C.fZZ(v))return v}return null},
fZY(d){var w,v,u,t,s,r=null,q=B.a.i(d)
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
t=C.fUx(A.a1(u,x.N,x.z))
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
return A.b(C.arF(t[1]),$async$bCj)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fZY(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fZY(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCj,v)},
fZX(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lg(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bBR(){var w=0,v=A.j(x.o),u,t
var $async$bBR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Gj(),$async$bBR)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fZY(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBR,v)},
hmn(d,e,f,g){return A.bR(B.K,null,new C.fNC(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fNC:function fNC(d,e,f){this.a=d
this.b=e
this.c=f},
ad_:function ad_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eIe:function eIe(d,e){this.a=d
this.b=e},
eIf:function eIf(d,e){this.a=d
this.b=e},
eIg:function eIg(d,e){this.a=d
this.b=e},
eIh:function eIh(d,e){this.a=d
this.b=e},
eId:function eId(d){this.a=d},
arC:function arC(d,e,f){this.c=d
this.d=e
this.a=f},
bk6:function bk6(){var _=this
_.c=_.a=_.e=_.d=null},
eHS:function eHS(d,e){this.a=d
this.b=e},
eHT:function eHT(d){this.a=d},
eHU:function eHU(d){this.a=d},
arH:function arH(d){this.a=d},
aE1:function aE1(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eHW:function eHW(d){this.a=d},
eHV:function eHV(d){this.a=d},
hEr(d,e,f,g,h){return new C.NJ(h,g,d,e,f,null)},
aIP:function aIP(d,e){this.a=d
this.b=e},
NJ:function NJ(d,e,f,g,h,i){var _=this
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
eIE:function eIE(){},
eIA:function eIA(d,e){this.a=d
this.b=e},
eIB:function eIB(d){this.a=d},
eIl:function eIl(d){this.a=d},
eIj:function eIj(d){this.a=d},
eIk:function eIk(d){this.a=d},
eIu:function eIu(d,e){this.a=d
this.b=e},
eIr:function eIr(d,e){this.a=d
this.b=e},
eIs:function eIs(d,e){this.a=d
this.b=e},
eIt:function eIt(d,e,f){this.a=d
this.b=e
this.c=f},
eIp:function eIp(d,e,f){this.a=d
this.b=e
this.c=f},
eIn:function eIn(d){this.a=d},
eIo:function eIo(d){this.a=d},
eIq:function eIq(d){this.a=d},
eIH:function eIH(d){this.a=d},
eIG:function eIG(d){this.a=d},
eII:function eII(d){this.a=d},
eIF:function eIF(d){this.a=d},
eIi:function eIi(d){this.a=d},
eIm:function eIm(d,e){this.a=d
this.b=e},
eID:function eID(d,e){this.a=d
this.b=e},
eIC:function eIC(d,e){this.a=d
this.b=e},
eIx:function eIx(d){this.a=d},
eIy:function eIy(d){this.a=d},
eIz:function eIz(d,e){this.a=d
this.b=e},
eIw:function eIw(d,e){this.a=d
this.b=e},
eIv:function eIv(d,e,f){this.a=d
this.b=e
this.c=f},
bwC:function bwC(){},
An(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aK(v,w,"_")},
afv(d,e,f){return C.hU4(d,e,f)},
hU4(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$afv=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.au("String",e,f),$async$afv)
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
return A.i($async$afv,v)},
afu(d,e){return C.hU3(d,e)},
hU3(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$afu=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$afu)
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
return A.i($async$afu,v)},
hSQ(d,e){var w,v,u=e==null?null:B.a.i(e)
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
hsf(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
fUx(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d9(s,x.f)
w=A.cD(w,new C.cvJ(),w.$ti.k("J.E"),x.Q)
v=A.a3(w).k("a2<J.E>")
r=A.B(new A.a2(w,new C.cvK(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lg(w,v,u,r,t==null?new A.S(Date.now(),0,!1):t)},
hXV(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.Zn
case"female":case"f":return D.aiU
default:return D.xN}},
hie(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h32(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hXV(v==null?j:J.k(v))
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
hXX(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Mr
case"viewer":return D.kn
default:return D.tE}},
hXY(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
G9(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bAC(d,e){return B.a.i(e.toLowerCase())===C.G9(d,e)&&d.y!==D.kn},
tQ(d,e){var w,v=d.y
if(v===D.kn)return!1
w=B.a.i(e.toLowerCase())
if(w===C.G9(d,e))return!0
if(v===D.Mr)return!0
v=d.e
return new A.K(v,A.h_2(),A.U(v).k("K<1,n>")).t(0,w)},
hXn(d){return J.dH(d,new C.fq0()).gM(0)},
fO7(d){var w=0,v=A.j(x.y),u,t
var $async$fO7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Av(d),$async$fO7)
case 3:u=t.qP(f,new C.fO8(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fO7,v)},
bAl(d,e){var w=0,v=A.j(x.H),u,t
var $async$bAl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Av(d),$async$bAl)
case 3:t=g
if(J.qP(t,new C.fos(e))){w=1
break}if(C.hXn(t)>=2)throw A.V(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bAl,v)},
ak6(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d9(n,x.f)
w=A.cD(w,new C.bMW(),w.$ti.k("J.E"),x.P)
v=A.a3(w).k("a2<J.E>")
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
return new C.kB(l,w,v,!s,t,m,r,q,p,C.hXX(o==null?null:J.k(o)))},
hin(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
CB(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$CB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.R4(d),$async$CB)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aA(),$async$CB)
case 4:t=f
w=5
return A.b(t.a5u(0),$async$CB)
case 5:w=6
return A.b(C.fg8(t,l),$async$CB)
case 6:s=f
if(J.cy(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a6(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.he_(o)
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
case 12:n=C.he_(m)
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
fg8(d,e){return C.hQk(d,e)},
hQk(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fg8=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a6(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.An(a9)))
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
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.An(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.R.aG(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fUx(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.An(a9)+"_"+n))
i=C.hSQ(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b1r(h),$async$fg8)
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
case 8:J.Re(q,new C.fg9())
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
return A.i($async$fg8,v)},
bAN(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bAN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.R4(d),$async$bAN)
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
he_(d){var w,v,u,t
try{w=B.R.aG(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d9(w,x.f)
v=A.cD(v,new C.fbR(),v.$ti.k("J.E"),x.i)
u=A.a3(v).k("a2<J.E>")
v=A.B(new A.a2(v,new C.fbS(),u),u.k("J.E"))
B.d.b0(v,new C.fbT())
return v}catch(t){v=A.a([],x.D)
return v}},
oB(d,e){return C.i6r(d,e)},
i6r(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oB=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.R4(b2),$async$oB)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aA(),$async$oB)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.An(a8)
p=A.aU(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.R.aG(0,p,null)),new C.fG9(),a2).fK(0)
a2=J.b6(b3,new C.fGa(),a2).c_(0,new C.fGb())
n=A.db(a2,a2.$ti.k("J.E"))
a2=o,a2=A.ed(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f0(n,m)?17:18
break
case 17:a5=C.An(a8)
l=A.aU(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a7Y(l),$async$oB)
case 19:t=21
a5=C.An(a8)
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
return A.b(C.afu(r,"ngmy_worksheet_item_v3_"+C.An(a8)+"_"+m),$async$oB)
case 29:w=30
return A.b(C.afu(r,"ngmy_worksheet_thumb_v3_"+C.An(a8)+"_"+m),$async$oB)
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
return A.b(C.afv(r,"ngmy_worksheet_thumb_v3_"+C.An(a8)+"_"+a4,f),$async$oB)
case 40:g=i.Sg(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.afu(r,"ngmy_worksheet_thumb_v3_"+C.An(a8)+"_"+a4),$async$oB)
case 41:g=i.Sg(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.afu(r,"ngmy_worksheet_thumb_v3_"+C.An(a8)+"_"+a4),$async$oB)
case 42:case 34:a4=i.a
w=43
return A.b(C.afv(r,"ngmy_worksheet_item_v3_"+C.An(a8)+"_"+a4,B.R.ao(g.ag(),null)),$async$oB)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.ch(q,i.a)
w=31
break
case 32:w=44
return A.b(C.afv(r,"ngmy_worksheets_index_v3_"+C.An(a8),B.R.ao(q,null)),$async$oB)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eL(b3,new C.fGc(q))
a4=a3.$ti.k("cR<1,a4<n,@>>")
a7=A.B(new A.cR(a3,new C.fGd(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.afv(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.R.ao(a0,null)),$async$oB)
case 45:w=46
return A.b(J.hrm(r),$async$oB)
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
r=s.bd(t,new C.fO6(e))
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
J.no(u,new C.fqs(e))
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
j=A.cD(j,new C.ft0(),j.$ti.k("J.E"),x.k)
s=A.a3(j).k("a2<J.E>")
r=A.B(new A.a2(j,new C.ft1(),s),s.k("J.E"))
B.d.b0(r,new C.ft2())
k=r}}catch(h){}w=4
return A.b(C.fcB(d),$async$Gb)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hQH(k,p,d)
j=A.U(o)
s=j.k("K<1,a4<n,@>>")
s=A.B(new A.K(o,new C.ft3(),s),s.k("ak.E"))
n=B.R.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Qh(d,o),$async$Gb)
case 7:case 6:j=j.k("a2<1>")
m=A.B(new A.a2(o,new C.ft4(d),j),j.k("J.E"))
if(m.length!==0)C.aNW(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Gb,v)},
fFW(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fFW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qh(d,e),$async$fFW)
case 3:t=J.dH(e,new C.fFX(d))
s=A.B(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aNW(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fFW,v)},
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
m=A.cD(m,new C.fO1(),m.$ti.k("J.E"),x.k)
t=A.a3(m).k("a2<J.E>")
s=A.B(new A.a2(m,new C.fO2(),t),t.k("J.E"))
o=s}}catch(k){}q=J.qa(o,new C.fO3(e))
if(B.a.i(e.x).length===0&&C.tQ(e,d)){m=B.a.i(d.toLowerCase())
p=e.aCY(e.y===D.kn?D.kn:D.tE,m)}else p=e
if(q===-1)J.pr(o,0,p)
else J.aF(o,q,p)
w=3
return A.b(C.Qh(d,o),$async$a2a)
case 3:w=C.tQ(p,d)?4:5
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
s=A.r9(t.eL(u,new C.fq9(e)))
t.bn(u,new C.fqa(e))
w=3
return A.b(C.Qh(d,u),$async$aO5)
case 3:w=s!=null&&C.bAC(s,d)?4:5
break
case 4:w=6
return A.b(C.fbV(e),$async$aO5)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aO5,v)},
ahi(d){var w=d.f,v=A.U(w).k("a2<1>")
w=A.B(new A.a2(w,new C.fOc(),v),v.k("J.E"))
return w},
fXF(d,e){var w,v=d.f,u=A.r9(new A.a2(v,new C.fpG(e),A.U(v).k("a2<1>")))
v=C.ahi(d)
w=A.U(v).k("a2<1>")
v=A.B(new A.a2(v,new C.fpH(e,u),w),w.k("J.E"))
B.d.b0(v,new C.fpI())
return v},
hY0(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hmr(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bd(C.fXF(d,u),new C.fNN(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hZx(d,e){var w
if(e==null||e.length===0)return 1
w=C.fXF(d,e)
if(w.length===0)return 1
return new A.K(w,new C.ftN(),A.U(w).k("K<1,H>")).fa(0,B.A5)+1},
i6k(d){var w,v=C.ahi(d)
if(v.length===0)return null
w=new A.a2(v,new C.fFQ(),A.U(v).k("a2<1>"))
if(!w.gam(0))return w.gL(0)
return B.d.gL(v)},
hXW(d){return A.F(["id",d.a,"name",d.b,"gender",C.hie(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hZs(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
return a2.cHt(a1,w,a3.d,a2.y,s,a0,v)},
Av(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$Av=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Av)
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
p=A.cD(p,new C.fsY(),p.$ti.k("J.E"),x.k)
s=A.a3(p).k("a2<J.E>")
p=A.B(new A.a2(p,new C.fsZ(),s),s.k("J.E"))
B.d.b0(p,new C.ft_())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Av,v)},
ah3(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ah3=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tE:D.kn
a7=C.G9(b2,b3)
w=2
return A.b(C.Av(b1),$async$ah3)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.bd(a8,new C.fFL(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bAl(b1,b2),$async$ah3)
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
k=a5?D.tE:D.kn
u=t.ys(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Qh(b1,a8),$async$ah3)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aNV(B.a.i(b3.toLowerCase()),u),$async$ah3)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ah3,v)},
hen(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a6().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("K<1,a4<n,@>>"),k=A.B(new A.K(m,C.hlE(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.F(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.F(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a6().ac(),"updatedAt",o],r,x.K),"createdAt",s.a6().ac(),"updatedAt",o],r,x.z)},
heo(d,e){var w=new A.S(Date.now(),0,!1).a6().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("K<1,a4<n,@>>")
u=A.B(new A.K(u,C.hlE(),t),t.k("ak.E"))
return A.F(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a6().ac(),"updatedAt",w],x.N,x.z)},
hOk(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a6(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ak6(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.K(j,A.h_2(),A.U(j).k("K<1,n>")).c_(0,new C.fco())
t=A.B(j,j.$ti.k("J.E"))
if(u===v)s=D.tE
else s=B.d.t(t,u)?D.Mr:D.kn
return w.aCY(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ak6(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d9(q,h)
h=A.cD(h,new C.fcp(),h.$ti.k("J.E"),x.P)
p=A.a3(h).k("a2<J.E>")
o=A.B(new A.a2(h,new C.fcq(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.fcr(),x.N).c_(0,new C.fcs())
t=A.B(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tE
else s=B.d.t(t,u)?D.Mr:D.kn
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
return new C.kB(h,r,p,!m,t,o,l,j,v,s)},
fcB(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fcB=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fcF()
h=x.N
g=x.z
w=7
return A.b(A.iK(A.a([A.ln("family_trees","*",null,A.F(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bG),r.$2(A.ln("family_trees","*",A.F(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bG),"collaborator"),r.$2(A.ln("family_trees","*",null,A.F(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bG),"public")],x.cl),x.U),$async$fcB)
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
h=A.a3(l).k("bc<2>")
h=A.cD(new A.bc(l,h),new C.fcC(a0),h.k("J.E"),x.k)
l=A.a3(h).k("a2<J.E>")
l=A.B(new A.a2(h,new C.fcD(),l),l.k("J.E"))
B.d.b0(l,new C.fcE())
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
return A.i($async$fcB,v)},
hQH(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a6(e)
if(j.gam(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dt(e,new C.fgO(),v).c_(0,new C.fgP())
t=A.db(u,u.$ti.k("J.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.G9(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kn){m=q.e
m=!new A.K(m,A.h_2(),A.U(m).k("K<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gaf(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.hZs(l,v)
o=C.G9(k,w)
p=v.d
s.n(0,u,o===w?k.baI(p,D.tE):k.baI(p,v.y))}j=s.$ti.k("bc<2>")
j=A.B(new A.bc(s,j),j.k("J.E"))
B.d.b0(j,new C.fgQ())
return j},
Qh(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Qh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$Qh)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fiZ(),x.a)
s=A.B(s,s.$ti.k("ak.E"))
w=3
return A.b(u.au("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.R.ao(s,null)),$async$Qh)
case 3:return A.h(null,v)}})
return A.i($async$Qh,v)},
aNV(d,e){return C.hVM(d,e)},
hVM(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aNV=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lN("family_trees",A.a([C.hen(e,d)],p),null,B.cH),$async$aNV)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lN("family_trees",A.a([C.heo(e,d)],p),null,B.cH),$async$aNV)
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
aNW(d,e){return C.hVN(d,e)},
hVN(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aNW=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("K<1,a4<n,@>>")
m=n.k("ak.E")
l=A.B(new A.K(e,new C.fnL(d),n),m)
r=l
w=7
return A.b(A.lN("family_trees",r,null,B.cH),$async$aNW)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.K(e,new C.fnM(d),n),m)
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
fbV(d){return C.hNF(d)},
hNF(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fbV=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.QF("family_trees",A.F(["id",d],x.N,x.z),null,B.cH),$async$fbV)
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
return A.i($async$fbV,v)},
qT:function qT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lg:function lg(d,e,f,g,h){var _=this
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
ak5:function ak5(d,e){this.a=d
this.b=e},
fq0:function fq0(){},
fO8:function fO8(d){this.a=d},
fos:function fos(d){this.a=d},
kB:function kB(d,e,f,g,h,i,j,k,l,m){var _=this
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
fg9:function fg9(){},
fbR:function fbR(){},
fbS:function fbS(){},
fbT:function fbT(){},
fG9:function fG9(){},
fGa:function fGa(){},
fGb:function fGb(){},
fGc:function fGc(d){this.a=d},
fGd:function fGd(){},
fO6:function fO6(d){this.a=d},
fqs:function fqs(d){this.a=d},
ft0:function ft0(){},
ft1:function ft1(){},
ft2:function ft2(){},
ft3:function ft3(){},
ft4:function ft4(d){this.a=d},
fFX:function fFX(d){this.a=d},
fO1:function fO1(){},
fO2:function fO2(){},
fO3:function fO3(d){this.a=d},
fq9:function fq9(d){this.a=d},
fqa:function fqa(d){this.a=d},
fOc:function fOc(){},
fpG:function fpG(d){this.a=d},
fpH:function fpH(d,e){this.a=d
this.b=e},
fpI:function fpI(){},
fNN:function fNN(d){this.a=d},
ftN:function ftN(){},
fFQ:function fFQ(){},
fsY:function fsY(){},
fsZ:function fsZ(){},
ft_:function ft_(){},
fFL:function fFL(d){this.a=d},
fco:function fco(){},
fcp:function fcp(){},
fcq:function fcq(){},
fcr:function fcr(){},
fcs:function fcs(){},
fcF:function fcF(){},
fcG:function fcG(d){this.a=d},
fcC:function fcC(d){this.a=d},
fcD:function fcD(){},
fcE:function fcE(){},
fgO:function fgO(){},
fgP:function fgP(){},
fgQ:function fgQ(){},
fiZ:function fiZ(){},
fnL:function fnL(d){this.a=d},
fnM:function fnM(d){this.a=d},
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
wD(d,e){var w,v
if(d==null)return""
w=d.bS()
v=""+w.gce()+"/"+w.gcu()+"/"+w.gcj()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gn9()),2,"0")+":"+B.a.aT(B.o.u(w.gG0()),2,"0")},
hEo(){var w,v=$.pn(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aC(32)]
return"WS"+B.d.fX(u)},
arD(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$arD=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arD)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f3("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bG),$async$arD)
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
return A.i($async$arD,v)},
arE(d){return C.hEp(d)},
hEp(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$arE=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arE)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hC("ngmy_worksheet_project_qr_stashes_v1",A.F(["stashes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cH,null),$async$arE)
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
return A.i($async$arE,v)},
arG(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$arG=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arG)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hEo()
w=4
return A.b(C.arD(),$async$arG)
case 4:r=h
q=B.a.i(e)
p=B.dJ.aJ(t)
J.aF(r,s,A.F(["ownerEmail",q,"projectId",f,"payload",B.cT.gcw().aJ(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(C.arE(r),$async$arG)
case 5:u=new A.a_E("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arG,v)},
arF(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$arF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c3(),$async$arF)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.arD(),$async$arF)
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
return A.b(C.arE(q),$async$arF)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arF,v)},
h8R(){var w=new A.S(Date.now(),0,!1).a6()
return"wst_"+(1000*w.a+w.b)+"_"+B.cI.aC(999999)},
hEq(d){var w,v,u,t,s,r,q
try{w=A.afU(d)
if(w==null)return d
v=w
if(J.KZ(v)>960||J.KY(v)>960){s=v
r=J.KZ(v)>=J.KY(v)?960:null
v=A.afT(s,J.KY(v)>J.KZ(v)?960:null,B.NN,r)}s=v
u=A.alt(82).SE(s,B.yw)
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
break}t=C.hEq(e)
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
break}p=C.h8R()
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
for(;;)switch(w){case 0:t=I.hlx(d)
if(t==null){w=1
break}$.cf9.W(0,t)
w=3
return A.b(C.bCl(t),$async$a7Y)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a7Y,v)},
bCm(d,e){return C.i4y(d,e)},
i4y(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bCm=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aMR
w=7
return A.b(n==null?$.aMR=I.fWF():n,$async$bCm)
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
bCl(d){return C.i4w(d)},
i4w(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bCl=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aMR
w=7
return A.b(o==null?$.aMR=I.fWF():o,$async$bCl)
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
A5=c[106]
A6=c[188]
T=c[118]
U=c[107]
A7=c[218]
A8=c[37]
M=c[217]
A9=c[80]
H=c[87]
Aa=c[157]
Ab=c[115]
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
Ai=c[108]
K=c[182]
Aj=c[193]
A_=c[234]
A0=c[227]
P=c[109]
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
C.anC.prototype={}
C.aXM.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bf1(),f=h.x!=null&&h.yU(i).length===0
if(h.x!=null)w=f?B.aZ:B.bI
else w=h.gTg()?B.bI:B.dT
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.be4,B.q,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.eJ_,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h6,i,i,i),B.S,D.fbi,B.at,A.d(C.wD(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.f7d,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.aZA,i,i,i,i,B.Yn,i,i,i)
q=A.m(16)
p=A.I(B.aL,B.q,1)
o=A.I(B.aZ.j(0.28),B.q,1)
n=A.fYD(h.d)
o=A.p(B.A,C.aXL(A.fwa(h.e,n),30),B.f,i,i,new A.o(B.lG,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.f2F,B.L,i,i)
m=A.m(14)
l=A.I(B.aL,B.q,1)
q=A.p(i,A.v(A.a([o,B.N,n,B.bB,D.fbA,B.ac,A.p(i,A.v(A.a([D.fqR,B.bB,A.d(A.Ax(h.c),i,i,i,i,i,i,D.eYG,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.f_,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,K.ah0,i,i,i)
p=A.m(16)
m=A.I(B.aL,B.q,1)
l=j.aPx("Original due",C.wD(h.r,!1))
n=j.aPx("Current due",C.wD(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.p(i,A.v(A.a([l,B.N,n,B.S,A.p(i,A.d(h.gaJJ(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.AV,i,i,1/0),B.S,j.cdj(),B.N,j.c0Z(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bk,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aL,B.q,1)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fcw,B.at,A.d(q,i,i,i,i,i,i,D.f1X,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bk,i,i,1/0)],s))}if(h.gaEA()){q=A.m(14)
o=A.I(B.cq,B.q,1.6)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fs8,B.N,A.bw(A.m(12),A.el(new A.a7(1/0,88,A.b3(i,i,i,new A.Vt(h.ax,B.M,D.eMK,!0,3.5,i),B.au),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.F3,i,i,i)],s))}p.push(B.aA)
p.push(D.fkq)
return A.p(i,A.v(A.a([r,new A.D(B.ah3,A.v(p,B.aj,i,B.e,B.j,0,B.p),i)],s),B.aj,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aPx(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.a7D,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eZF,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
cdj(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a8D(B.dT,u,"Not paid yet")
w=t.yU(null).length
v=w===0?B.aZ:B.bI
return this.a8D(v,u,C.wD(t.x,!0))},
c0Z(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a8D(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a8D(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a7D,u,u,u)
v=A.U(d).k("K<1,hi>")
v=A.B(new A.K(d,new C.c11(),v),v.k("ak.E"))
return A.v(A.a([w,B.am,A.bW(B.bz,v,B.bq,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a8D(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.a7D,w,w,w),1),new A.dq(1,B.cn,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dM,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b9U.prototype={
a5(d,e){new A.Vt(this.b,B.M,e,!0,3.5,null).a5(d,e)},
ar(d){return d.b!==this.b}}
C.anJ.prototype={
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
break}t.m(new C.dFd(t,s))
case 1:return A.h(u,v)}})
return A.i($async$In,v)},
aRu(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aP,s=A.l(v,v,u?B.br:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.br:B.bn).j(0.22)
w=A.m(10)
return A.br(v,new A.b4(4,r,new A.ay(u,1,B.q,-1)),v,B.bk,v,v,v,v,!0,new A.b4(4,w,new A.ay((this.a.d.a?B.br:B.bn).j(0.22),1,B.q,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.m(10),D.aXb),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aRt(d){return this.aRu(d,null)},
OY(d){return this.cgT(d)},
cgT(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OY=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Gj:B.eG
w=7
return A.b(new A.hX().BT(72,900,900,n),$async$OY)
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
b__(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aP,o=A.m(10),n=A.I((q?B.br:B.bn).j(0.18),B.q,1)
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
return A.p(r,A.A(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.km,D.bpR,r,r,r)},
CS(d){return this.byf(d)},
bye(){return this.CS(null)},
byf(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
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
i=a3?null:A.fYD(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.vY?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hS(B.w.j(0.55),!0,"Dismiss",a4,new C.dEX(),new C.dEY(a2,t,a5,r,new C.dEZ(a2,t),o,n,j),B.eE,!0,x.y),$async$CS)
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
break}if(f.length===0||e<=0){t.c.I(x.q).f.S(D.eT4)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.S(D.eRK)
w=1
break}a1=A.fwa(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.vY?"male":"female"
w=7
return A.b(A.ahh(a3,A.h5A(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$CS)
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
if(!a3.A(0,A.c1(a4.gcj(),a4.gce(),a4.gcu(),0,0,0,0,0)))a5.cJC(a2.a)
w=8
return A.b(A.ahh(t.a.c,a5),$async$CS)
case 8:case 5:w=9
return A.b(t.In(),$async$CS)
case 9:case 1:return A.h(u,v)}})
return A.i($async$CS,v)},
aS6(d,e,f,g){var w,v,u,t,s,r,q,p=null
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
RC(d){return this.cyi(d)},
cyi(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$RC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hS(B.w.j(0.55),!0,"Dismiss",s,new C.dFg(),new C.dFh(t,d),B.hX,!0,x.y),$async$RC)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.S(s,0,!1)
case 4:w=7
return A.b(A.ahh(t.a.c,d),$async$RC)
case 7:w=8
return A.b(t.In(),$async$RC)
case 8:case 1:return A.h(u,v)}})
return A.i($async$RC,v)},
NC(d,e){return this.bJ1(0,e)},
bJ1(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.l1(s,"Cancel","Delete",e.b+" \xb7 "+A.Ax(e.c)+" will be removed from this device.","Delete this debt?"),$async$NC)
case 3:if(!g){w=1
break}w=4
return A.b(C.fqg(t.a.c,e.a),$async$NC)
case 4:w=5
return A.b(t.In(),$async$NC)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NC,v)},
ae7(d){return this.caM(d)},
caM(d){var w=0,v=A.j(x.H),u=this,t
var $async$ae7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bR(B.K,null,new C.dFa(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ae7)
case 2:return A.h(null,v)}})
return A.i($async$ae7,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.e6g
w=J.dH(m.d,new C.dFi())
v=A.B(w,w.$ti.k("J.E"))
w=J.dH(m.d,new C.dFj())
u=A.B(w,w.$ti.k("J.E"))
t=B.d.cI(v,0,new C.dFk())
w=A.m(18)
s=m.a.d.a
r=s?D.cmJ:D.axc
q=A.I(s?B.cY.j(0.35):B.cY.j(0.18),B.q,1)
s=A.p(l,D.bPi,B.f,l,l,new A.o(B.cY.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.av,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aB,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a1,!0,A.m(12),A.aL(!1,A.m(12),!0,D.e5F,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dFl(m),l,l,l,l,l,l,l),B.f,B.cY,0,l,l,l,l,l,B.ag)],p),B.m,l,B.e,B.j,0,l,l)
o=A.E(m.cux("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Ax(t)
r=A.a([A.p(l,A.v(A.a([s,B.ac,A.A(A.a([o,B.ab,A.E(m.b57(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.ax,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.agX,l,l,l),B.aA],p)
if(J.cm(m.d)){w=m.a.d.a
s=w?B.dX:B.c
q=A.m(18)
o=A.I((w?B.br:B.bn).j(0.12),B.q,1)
n=A.p(l,D.bKd,B.f,l,l,new A.o(B.cY.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aB,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.ac,w,B.at,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.br:B.bn,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bsf,l,l,1/0))}else{w=m.gcgb()
s=A.B(new A.K(v,w,A.U(v).k("K<1,r>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.btU,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.br:B.bn,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.K(u,w,A.U(u).k("K<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.aj,l,B.e,B.j,0,B.p)},
b57(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.br:B.bn).j(0.12),B.q,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.br:B.bn,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cY
else w=v.a.d.a?B.aP:B.aB
return A.p(u,A.v(A.a([q,B.bB,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ei,u,u,u)},
cux(d,e){return this.b57(!1,d,e)},
cgc(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.yU(j).length,h=d.bed()
if(d.x!=null){w=d.yU(j).length
v=w===0?B.cY:B.bI}else if(d.gTg())v=B.bI
else{if(h)w=B.cY
else w=k.a.d.a?B.br:B.bn
v=w}if(d.x!=null){w=d.yU(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wD(u,!1)}else{u.toString
t="Paid "+C.wD(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wD(w,!1)+" \xb7 "+i+" missed":"Due "+C.wD(w,!1)}w=k.a.d.a?B.dX:B.c
u=A.m(18)
if(d.gTg()&&d.x==null)s=B.bI.j(0.35)
else s=(k.a.d.a?B.br:B.bn).j(0.12)
s=A.I(s,B.q,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bm:B.lG
o=A.I(d.gTg()&&d.x==null?B.bI.j(0.45):B.cY.j(0.28),B.q,1.4)
n=d.x!=null?0.55:1
m=A.fYD(d.d)
o=A.p(B.A,A.dc(C.aXL(A.fwa(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.aB
m=x.p
n=A.a([new A.dq(1,B.cn,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaEA())B.d.v(n,A.a([B.ec,A.X(B.MS,B.cY.j(0.8),j,j,j,14)],m))
p=A.E(A.v(A.a([A.A(n,B.m,j,B.e,B.j,0,j,j),B.cS,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.Ax(d.c)
l=k.a.d.a?B.aP:B.aB
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aG(!1,B.a1,!0,j,A.aL(!1,q,!0,new A.D(W.agH,A.A(A.a([o,B.bf,p,B.ab,A.v(A.a([n,B.bB,A.X(B.ex,(k.a.d.a?B.br:B.bn).j(0.5),j,j,j,18)],m),B.dz,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dFc(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ag),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.db,j,j,j,j)}}
C.u6.prototype={}
C.ak4.prototype={
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
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.atI,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.Fk,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f4(m,A.A(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.eh)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bp4,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cF:B.bl,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fq,A.v(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.eNu)
a2=A.a([A.A(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.vf,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a3,B.a7,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lg,A.v(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.q,1),a2,a0,a0,B.n),a0,a0,a0,B.hk,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.ax,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bqg,a0,a0,a0,a0)}}
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
if(p.z)o.push(new A.D(B.vc,n,q))
return new A.D(B.db,A.v(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.Sh.prototype={
R(){return new C.bdw()}}
C.bdw.prototype={
gbX0(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.e6b,D.e6h],l)
for(w=0;w<8;++w){v=D.a1o[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.G3:B.BD
q=t===s
r=A.X(r,q?B.eA:B.c1,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.x(v.b,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bD(1,B.bh,new A.x(v.c,n,A2.D9,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aT(24,24)
p=new A.ay(B.eA,2,B.q,-1)
s=new A.o(n,n,new A.bO(p,p,p,p),new A.bp(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aE(n,new A.D(B.eF,A.v(A.a([new A.D(B.mn,new A.cn(B.aO,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.DE(!0,new C.ak4(v,q.d,q.e,new C.d51(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d52(o,v),n,n,n,n,n,n,!1,B.a8))}k.push(new A.D(D.bqz,A.bH(D.fxq,new C.d53(o,d),A.bm(B.b7,n,n,n,n,B.oc,n,n,new A.b7(A.m(16),B.Y),n,n,n)),n))
return A.bl(!0,new A.cS(new A.aY(0,1/0,0,m.a.b*0.9),A.cz(k,n,D.buM,n,n,B.ah,!0),n),!0,!1,B.af,!0,!0)}}
C.n9.prototype={
ag(){var w=this
return A.F(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a6().ac()],x.N,x.z)},
baU(d,e,f){return new C.n9(this.a,e,d,f)}}
C.Hf.prototype={
wd(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Hf(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aCN(d){var w=null
return this.wd(w,w,w,w,w,d,w,w,w,w,w,w)},
cFq(d){var w=null
return this.wd(w,w,w,w,d,w,w,w,w,w,w,w)},
baS(d,e,f){var w=null
return this.wd(d,w,w,w,w,w,w,w,e,w,f,w)},
cG4(d){var w=null
return this.wd(w,w,w,w,w,w,d,w,w,w,w,w)},
cGd(d){var w=null
return this.wd(w,w,w,w,w,w,w,w,w,d,w,w)},
cFo(d){var w=null
return this.wd(w,w,w,d,w,w,w,w,w,w,w,w)},
cGf(d){var w=null
return this.wd(w,w,w,w,w,w,w,w,w,w,w,d)},
cFl(d){var w=null
return this.wd(w,w,d,w,w,w,w,w,w,w,w,w)},
cFg(d){var w=null
return this.wd(w,d,w,w,w,w,w,w,w,w,w,w)},
Fp(d){var w=null
return this.wd(w,w,w,w,w,w,w,d,w,w,w,w)},
cGn(d,e,f,g,h,i,j,k,l,m,n){return this.wd(d,e,f,g,null,h,i,j,k,l,m,n)},
ag(){var w=this
return A.F(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cD3(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bMV(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Ch.gec(D.Ch))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a2V)
q=l.$2("frame",D.a2m)
l=l.$2("texture",D.a2h)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cGn(p,u,t,q,r,A.qI(d.h(0,"ribbon"))?A.FL(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.YP.prototype={
R(){return new C.az1(A.a([],x.I),D.Mq)},
gdZ(){return this.c}}
C.az1.prototype={
a_(){var w,v=this
v.a1()
v.f=A.zn(0,1)
w=$.aw()
v.z=new A.ar(B.as,w)
v.Q=new A.ar(B.as,w)
v.kT()
w=v.a
C.bAK(w.c,w.d).bA(new C.d5I(v),x.fL)},
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
kT(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$kT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Ks(s.c,s.d),$async$kT)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d5w(t,r))
t.auG()
case 1:return A.h(u,v)}})
return A.i($async$kT,v)},
gark(){var w,v=this
if(!J.cm(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
auG(){var w,v,u=this.gark(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saV(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saV(0,w==null?"":w)},
c9c(d){this.m(new C.d5t(this,d))
this.auG()},
MY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$MY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.n9(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aPJ(r.c,r.d,s),$async$MY)
case 3:w=4
return A.b(t.kT(),$async$MY)
case 4:if(t.c==null||J.cm(t.d)){w=1
break}q=J.qa(t.d,new C.d54(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d55(t,p))
t.auG()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.AW(p+1,B.ct,B.kL),$async$MY)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$MY,v)},
AC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gark()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aPJ(o.c,o.d,new C.n9(s,r,q,new A.S(p,0,!1))),$async$AC)
case 3:w=4
return A.b(t.kT(),$async$AC)
case 4:if(t.c==null){w=1
break}t.m(new C.d5x(t))
case 1:return A.h(u,v)}})
return A.i($async$AC,v)},
ND(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ND=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gark()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d5d(r),s,null,!0,!0,x.y),$async$ND)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bAv(s.c,s.d,r.a),$async$ND)
case 4:t.m(new C.d5e(t))
w=5
return A.b(t.kT(),$async$ND)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Tj(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$ND,v)},
yc(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AC(),$async$yc)
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
return A.b(C.Qy(s,r.r,o,p,q),$async$yc)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a5(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hm_(s,r.x,r.r),$async$yc)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Ks(s.c,s.d),$async$yc)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.J(l,new C.n9(""+(m+k),q,B.a.i(j.b),new A.S(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.AG(r.c,r.d,l),$async$yc)
case 11:w=12
return A.b(t.kT(),$async$yc)
case 12:r=t.c
if(r==null){w=1
break}r.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yc,v)},
a_U(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_U=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AC(),$async$a_U)
case 5:case 4:if(t.c==null){w=1
break}s=t.gya(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dL(D.yD,new C.d5u(t),new C.d5v())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mp("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gT(o)
p.push(new F.mp(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.h_e(o,new F.rd(s,r,"",p,new F.up(q.d,null,null,null,null,"","","")),null),$async$a_U)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a_U,v)},
Nl(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Nl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AC(),$async$Nl)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bR(D.aci,null,new C.d59(t),s,!0,!0,!0,Q.a5R,!1,!1,x.N),$async$Nl)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cFq(r)
t.m(new C.d5a(t,q))
s=t.a
w=7
return A.b(C.R6(s.c,s.d,q),$async$Nl)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Nl,v)},
Wv(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bR(D.aci,null,new C.d5f(t),r,!0,!0,!0,Q.a5R,!1,!1,x.e),$async$Wv)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d5g(t,s))
r=t.a
w=4
return A.b(C.R6(r.c,r.d,s),$async$Wv)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.AW(0,B.dU,B.oB)
case 1:return A.h(u,v)}})
return A.i($async$Wv,v)},
bOe(d){var w=d.bS(),v=B.a.aT(B.o.u(w.gce()),2,"0"),u=B.a.aT(B.o.u(w.gcu()),2,"0")
return""+w.gcj()+"-"+v+"-"+u},
gya(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bWg()
if(r.e)w=D.ab5
else if(J.cm(r.d)){w=r.y
v=r.gya(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eY8,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.D(A0.ahY,new C.Y7(w,v,0,q),q),q),B.by,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kf.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aE(q,A.p(q,D.eIQ,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dP.j(0.45),B.J,18)],x.V),E.vN,B.n),q,q,q,q,B.Yx,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcCb(),q,q,q,q,q,q,!1,B.a8))
w.push(B.S)
w.push(A.he(D.bGt,D.fwU,r.gaLs(),q))
B.d.v(u,w)}w=A.av(A.cd(A.v(u,B.m,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.ew,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kf.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.P,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dQ:B.A3
u=A.v(A.a([new A.D(D.brz,w,q),A.E(A.Iz(v,new C.d5G(r),J.ad(r.d)+1,q,r.gc9b(),u,B.aO),1),r.bB8()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c8(q,D.adC,new A.an(B.W,q,B.b0,B.r,A.a([D.aKq,A.bl(!0,A.v(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bWg(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cy(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Jz(B.dW,"AI",h.gbz1(),!0))
if(h.a.f)f.push(new C.Jz(B.nf,"Cover",h.gbJB(),!1))
if(h.a.f)f.push(new C.Jz(B.yg,"Header",h.gbEz(),!1))
if(J.cy(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Jz(B.tT,"Print",h.gcic(),!1))
if(h.a.f&&J.cy(h.d)&&h.r>=0){v=h.w
u=v?B.hz:B.jg
t=v?"Save":"Edit"
f.push(new C.Jz(u,t,v?h.gcoq():new C.d5q(h),!1))}if(h.a.f)f.push(new C.Jz(B.hy,"Add page",h.gaLs(),!1))
v=C.hid(h.y.Q)
u=h.gya(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.dng
else{k=new A.aT(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.jP.j(0.5),1,B.q,-1)
j=A.p(g,A.X(l.a,D.kf,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bO(i,i,i,i),new A.bp(k,k,k,k),g,new A.a8(B.a3,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kf.j(0.85)
p.push(new A.bD(1,B.bh,A.aE(B.c4,A.v(A.a([k,B.bB,new A.x(l.b,g,new A.G(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a8),g))}return new C.ak4(v,u,t+" \xb7 "+s+" "+r,new C.d5r(h),A.A(p,B.m,g,B.e,B.j,0,g,g),g)},
zF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AC(),$async$zF)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=F.a1F(B.d.aI(s," "))
s=t.c
s.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.d56(t,p),s,null,!0,!0,x.N),$async$zF)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.yc(),$async$zF)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Ds(),$async$zF)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.F2("Swahili (Kiswahili)",!0),$async$zF)
case 18:w=16
break
case 17:w=19
return A.b(t.cyW(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zF)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zF,v)},
Yn(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(E.jP.j(0.3),B.q,1),r=x.p
return new A.D(B.cB,A.aL(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.vN,B.a6),w,42,w,w,w,w,w,42),B.bf,A.E(A.v(A.a([A.d(f,w,w,w,w,w,w,A9.Tg,w,w,w),A.d(g,w,w,w,w,w,w,O.Ta,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d5s(d,h),w,w,w,w,w,w,w),w)},
Ds(){return this.bNJ()},
bNJ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Ds=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d5j(r),a7,null,!0,!0,x.ei),$async$Ds)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eS("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.ca(null,null,!1,null,new C.d5k(o),a7,null,!0,!0,x.H).fe(new C.d5l(a6))
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
return A.b(C.ags(a0,a7,new C.d5m(o),d,l,e,j),$async$Ds)
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
a7=j.baU(m.b.h(0,a4).b,a7,new A.S(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.AG(j.c,j.d,l),$async$Ds)
case 11:w=12
return A.b(r.kT(),$async$Ds)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.yD[a1].a)
a5=l.cD3(j,12,a7)
l=r.a
w=15
return A.b(C.R6(l.c,l.d,a5),$async$Ds)
case 15:if(r.c!=null)r.m(new C.d5n(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.AW(0,B.dU,B.oB)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.I(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.S(A.b2(a3?A.cqh("Undo",new C.d5o(r,p,f),null):null,null,null,null,null,B.r,null,j,null,B.ee,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ds,v)},
F2(d,e){return this.cyX(d,e)},
cyW(d){return this.F2(d,!1)},
cyX(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$F2=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eS("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.ca(null,null,!1,null,new C.d5z(a0),k,null,!0,!0,x.H).fe(new C.d5A(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.ch(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a1S(m,new C.d5B(a0)),$async$F2)
case 10:w=8
break
case 9:w=11
return A.b(C.bCd(new C.d5C(a0),m,a2),$async$F2)
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
o.push(k.baU(J.q(p,g).b,j.a,new A.S(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.AG(k.c,k.d,o),$async$F2)
case 12:w=13
return A.b(r.kT(),$async$F2)
case 13:o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.S(A.b2(A.cqh("Undo",new C.d5D(r,d),null),null,null,null,null,B.r,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$F2,v)},
bB8(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d57(v):u
r=A.aH(u,u,u,u,A.X(D.bC9,s?D.kf:B.b3,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cy(v.d)&&!v.w&&v.r>=0)s=A.he(A.X(B.vr,B.EI,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.EI,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbJa(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kf.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.av(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d58(v):u
return A.bl(!0,new A.D(D.brn,A.A(A.a([r,s,A.aH(u,u,u,u,A.X(B.ex,t<J.ad(v.d)?D.kf:B.b3,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.YT.prototype={
R(){return new C.bdR(new A.ar(B.as,$.aw()))}}
C.bdR.prototype={
ga11(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a2()},
gbMt(){var w,v=this.ga11()
A:{if("cover"===v){w=D.cSN
break A}if("book"===v){w=D.cOB
break A}w=D.dfY
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jP.j(0.5),n=x.p,m=A.A(A.a([D.dnh,B.av,D.bwL,A.aH(q,q,q,q,B.ln,q,q,q,new C.d7s(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.j5(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d7t(r),r.ga11()==="page",q,q,q,q))
if(r.a.d)l.push(A.j5(q,q,q,D.frE,q,new C.d7u(r),r.ga11()==="book",q,q,q,q))
l.push(A.j5(q,q,q,D.ff7,q,new C.d7v(r),r.ga11()==="cover",q,q,q,q))
l=A.bW(B.bz,l,B.bq,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.T,!1,q,!0,B.r,q,A.aN(),r.d,q,q,q,q,q,2,A.br(q,new A.b4(4,A.m(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kB,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dm,!0,B.a4,q,B.an,q,q,q,q)
w=A.a([],n)
for(v=r.gbMt(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mG(q,B.c.j(0.08),new A.x(s,q,B.IM,q,q,q,q,q,q,q,q,q),B.hD,new C.d7w(r,s),q,q,q,q))}return A.eI(q,E.Az,A.cd(A.v(A.a([m,B.S,D.fuR,B.am,l,B.ac,k,B.N,A.bW(B.bz,w,B.bq,6,6),B.aA,A.dk(D.bGq,D.fvC,new C.d7x(r,d),A.bm(B.b7,q,q,q,q,B.oc,q,q,new A.b7(A.m(16),B.Y),q,q,q)),B.at,D.fq_],n),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.fz,q,q,B.ah),q,q,q,D.ahH,B.d0,q,new A.b7(p,new A.ay(o,1.4,B.q,-1)),q)}}
C.YR.prototype={
R(){return new C.az2(A.a([],x.Y))},
gdZ(){return this.c}}
C.aee.prototype={}
C.az2.prototype={
a_(){this.a1()
this.kT()},
kT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.QB(p.c,p.d),$async$kT)
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
return A.b(C.bAK(r.c,q),$async$kT)
case 6:j=e
i=J
w=7
return A.b(C.Ks(t.a.c,q),$async$kT)
case 7:m.push(new l.aee(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d5X(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kT,v)},
b6i(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
PE(d,e){return this.caK(0,e)},
caK(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$PE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a5(s,!1).c8(A.e9(new C.d5W(u,e),!0,null,x.y)),$async$PE)
case 2:t=g
w=3
return A.b(u.kT(),$async$PE)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.S(D.aNO)
return A.h(null,v)}})
return A.i($async$PE,v)},
F5(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$F5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.S(D.aNK)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.afM(s.c,s.d),$async$F5)
case 5:q=e
w=6
return A.b(t.kT(),$async$F5)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.PE(0,B.d.i8(t.d,new C.d60(q))),$async$F5)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Qy(p,s.f,r,n,o),$async$F5)
case 10:m=e
w=11
return A.b(t.kT(),$async$F5)
case 11:if(m&&t.c!=null)t.c.I(x.q).f.S(D.aNO)
case 1:return A.h(u,v)}})
return A.i($async$F5,v)},
P8(d,e){return this.cm8(0,e)},
cm8(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$P8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d6_(t,e),s,null,!0,!0,x.y),$async$P8)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a24(s.c,s.d,e.a),$async$P8)
case 4:w=5
return A.b(t.kT(),$async$P8)
case 5:case 1:return A.h(u,v)}})
return A.i($async$P8,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bBb(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(E.jP.j(0.6),B.q,1.6)
r=t===1?"space":"spaces"
k.push(A.aE(n,new A.fG(0.7142857142857143,A.p(n,A.v(A.a([D.dni,B.ac,D.e5k,B.at,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kf.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.bb,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcC7(),n,n,n,n,n,n,!1,B.a8))}w=A.m(22)
v=A.I(E.jP.j(0.85),B.q,1.6)
s=A.aE(n,A.p(n,D.bO5,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jP.j(0.6),B.q,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d61(d),n,n,n,n,n,n,!1,B.a8)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.jP.j(0.5),B.q,1)
w=A.p(n,A.A(A.a([s,B.bf,D.bx6,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eXe,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h6,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bTH,B.n),n,n,n,Am.LT,D.bpw,n,n,n)
if(o.e)k=D.ab5
else k=k.length===0?D.b3y:A.cp(new C.d62(k))
return A.c8(n,D.adC,new A.an(B.W,n,B.b0,B.r,A.a([D.aKq,A.bl(!0,A.v(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bBb(d){var w,v,u=this,t=null,s=u.b6i(d),r=d.c,q=x.p,p=A.a([A.bZ(0,A.f4(B.A,new A.a7(300,420,new C.Y7(d.b,s,r,t),t),B.f,B.du),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aE(t,A.p(t,D.bNo,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b3,B.q,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d5U(u,d),t,t,t,t,t,t,!1,B.a8),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.eWP,t,t,t)
v=r===1?"page":"pages"
return A.aE(t,A.v(A.a([new A.fG(0.7142857142857143,new A.an(B.W,t,B.aa,B.r,p,t),t),B.N,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kf.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d5V(u,d),t,t,t,t,t,t,!1,B.a8)}}
C.Jz.prototype={}
C.Y7.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dL(D.yD,new C.cEx(m),new C.cEy()),j=m.c,i=D.Ch.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.lU:B.bb
v=new C.cEz(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.e2E,28)],x.V)
u=x.p
t=A.a([A.bZ(0,A.b3(l,l,l,new C.bb6(j.x,h,l),B.au),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a3,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aT(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bp(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.ahZ,8,0.85,2.2),v.$4(D.buc,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.ahZ,8,0.85,2.4))
else if(r==="corners")t.push(A.bZ(0,new A.D(D.bu8,A.b3(l,l,l,new C.baY(h,l),B.au),l),0,0,0))
r=A.X(D.awj[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.atI,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cF,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aQ,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bZ(0,new A.D(D.buE,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aG1(l),D.eMD),l,l,l,46,0,l))
return A.p(l,A.bw(D.a9N,new A.an(B.W,l,B.aa,B.r,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.a9N,i,new A.a8(B.ax,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
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
for(w=e.a,v=e.b,v=[D.eDT,new A.cI([w,0,-1,1]),new A.cI([0,v,1,-1]),new A.cI([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
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
C.u7.prototype={}
C.Yp.prototype={
R(){return new C.bb4()}}
C.bb4.prototype={
go1(){var w=this.d
return w===$?this.d=this.a.c:w},
gya(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ar(new A.bb(w.b,B.b4,B.aN),$.aw())}return v},
gaA1(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ar(new A.bb(w.c,B.b4,B.aN),$.aw())}return v},
gapT(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ar(new A.bb(w.y,B.b4,B.aN),$.aw())}return v},
q(){var w=this,v=w.gya(0),u=v.U$=$.aw()
v.P$=0
v=w.gaA1()
v.U$=u
v.P$=0
v=w.gapT()
v.U$=u
v.P$=0
w.a2()},
aqv(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.j5(s,s,s,new A.x(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cXZ(this,f,u),e===u,s,s,s,s))}return A.bW(B.bz,r,B.bq,6,8)},
aw6(d){var w=null,v=B.c.j(0.07)
return A.br(w,new A.b4(4,A.m(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.kA,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.go1(),a0=f.gya(0),a1=a0.a.a,a2=f.gaA1(),a3=a2.a.a,a4=f.gapT(),a5=d.baS(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a7(190,260,A.f4(B.A,new A.a7(270,370,new C.Y7(a5,d,f.a.e,e),e),B.f,B.du),e),e,e,e)
a0=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a0,e,e,e,e,e,2,f.aw6("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYn(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dm,!0,B.a4,e,B.an,e,e,e,e)
a2=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a2,e,e,e,e,e,2,f.aw6("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYo(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dm,!0,B.a4,e,B.an,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.yD[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b3
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
q.push(A.aE(e,A.p(e,A.X(D.awj[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bO(o,o,o,o),new A.bp(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYq(f,n),e,e,e,e,e,e,!1,B.a8))}q=A.bW(B.bz,q,B.bq,8,8)
a4=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a4,e,e,e,e,e,2,f.aw6("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYr(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dm,!0,B.a4,e,B.an,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mI,e,e,e)
m=A.a([],w)
for(l=D.Ch.gdK(D.Ch),l=l.gaf(l);l.C();){k=l.gT(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eA:B.b3
g=r.e===i
o=new A.ay(h,g?3:1,B.q,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bO(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.az
m.push(A.aE(e,A.v(A.a([j,B.bB,new A.x(i,e,new A.G(!0,h,e,e,e,e,10,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYs(f,k),e,e,e,e,e,e,!1,B.a8))}m=A.bW(B.bz,m,B.bq,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mI,e,e,e)
k=f.go1()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bl(!0,new A.cS(new A.aY(0,1/0,0,a1.a.b*0.92),A.cz(A.a([D.fps,B.ac,d,B.aQ,a0,B.S,a2,B.aA,D.fvq,B.N,v,B.aA,D.fpC,B.N,q,B.aA,a4,B.aA,p,B.N,m,B.aA,l,A.kX(e,9,""+B.k.V(f.go1().f),36,18,new C.cYt(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mI,e,e,e),B.am,f.aqv(D.a2V,f.go1().r,new C.cYu(f),D.dj8),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mI,e,e,e),B.am,f.aqv(D.a2m,f.go1().w,new C.cYv(f),D.djd),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mI,e,e,e),B.am,f.aqv(D.a2h,f.go1().x,new C.cYx(f),D.dkD),B.am,A.iE(e,B.b7,e,B.af,e,new C.cYy(f),e,e,e,D.fjW,f.go1().z),B.by,A.bH(D.foi,new C.cYz(f,a6),A.bm(B.b7,e,e,e,e,B.oc,e,e,new A.b7(A.m(16),B.Y),e,e,e))],w),e,An.Yl,e,e,B.ah,!0),e),!0,!1,B.af,!0,!0),e)}}
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
u.saq(D.bUl.av(0,new A.a9(0,0,0+w,0+v)))
d.aO(t,u)},
ar(d){return!1}}
C.bgk.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=A.M()
w.saq(D.bTn.av(0,new A.a9(0,0,a3,a4)))
a5.aZ(new A.a9(0,0,a3,a4),w)
v=B.k.dw(a2/112)
u=new A.eL()
u.dB(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cSM[u.aC(9)]
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
e.r=E.jP.j(0.55).gp(0)
d=e.H()
w.drawRect(A.c0(new A.a9(h,j,g,j+2)),d)
d.delete()
j=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
j.r=E.jP.j(0.4).gp(0)
d=j.H()
w.drawRect(A.c0(new A.a9(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aC(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.saq(D.bSL.av(0,new A.a9(0,r,a3,q)))
d=p.H()
w.drawRect(A.c0(new A.a9(0,r,a3,q)),d)
d.delete()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.jk
d=p.H()
w.drawRect(A.c0(new A.a9(0,q,a3,q+14)),d)
d.delete()}w=A.M()
w.r=D.b6W.j(0.72).gp(0)
a5.aZ(new A.a9(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.M()
a4.saq(new A.bT(B.A,0.5,B.x,a0,0,A.a([D.bdF.j(0.22),B.K],t),a0,a0).av(0,A.bU(new A.u(w,a2),a1)))
a5.ae(new A.u(w,a2),a1,a4)},
ar(d){return!1}}
C.b9i.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aK(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.kN(new A.o(A.aq(D.kf,D.bi2,w/4),o,new A.bO(B.Y,new A.ay(B.w.j(0.12),1,B.q,-1),B.Y,B.Y),B.JW,o,o,B.n),B.bd,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aG3,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aT(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jP.j(0.6),o,o,new A.bp(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.q0,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aWW,u,D.bUj,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dk,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aG1(o),D.eMy),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aTz(p.y,r,G.it,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.r,o,o,o,o,o,2,A.br(o,B.ez,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.it.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f9v,!0,B.a4,o,B.an,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.it.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.w,o,o,o,o,o,2,A.br(o,B.ez,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.it.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f0H,!0,B.a4,B.zq,B.an,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.f9n,o,o,o),B.at,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.it.j(0.5),o,o,o,o,o,o,o,o,11,B.cF,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.N,A.A(A.a([A.E(A.p(o,o,B.f,D.Ew.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fq,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.Ew.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.Ew.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aA],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.it.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Xn(A.dh(A.a([A.dh(o,o,o,o,o,o,o,o,o,D.f3N,B.a.ap(k,0,1)),A.dh(o,o,o,o,o,o,o,o,o,o,B.a.b1(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.it.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.v(n,B.F,o,B.e,B.j,0,B.p),B.r,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hY,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.it.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.A(A.a([u,A.E(A.p(o,A.bw(B.JW,new A.an(B.W,o,B.aa,B.r,A.a([t,new A.D(D.btG,A.v(s,B.aj,o,B.e,B.j,0,B.p),o),A.ao(0,A.c_(o,new A.o(o,o,o,o,o,new A.a8(B.a3,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bd),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.JW,v,D.bUS,B.n),o,o,o,o,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.r,l,o)}}
C.aoQ.prototype={
R(){return new C.aCy(A.a([],x._))},
bp(){return this.r.$0()},
pO(){return this.w.$0()},
gdZ(){return this.c}}
C.aCy.prototype={
a_(){var w,v
this.a1()
this.vK()
w=this.a
v=w.c
if(v.length!==0)C.a6H(v,w.e,w.d.w)},
vz(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h_h(r,t.e,!1,s.w,new C.dTg(u),null,s),$async$vz)
case 2:w=3
return A.b(u.vK(),$async$vz)
case 3:return A.h(null,v)}})
return A.i($async$vz,v)},
a_3(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a_3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h_h(r,t.e,!0,s.w,new C.dTf(u),null,s),$async$a_3)
case 2:w=3
return A.b(u.vK(),$async$a_3)
case 3:return A.h(null,v)}})
return A.i($async$a_3,v)},
vK(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vK=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Av(q.a.c),$async$vK)
case 7:p=e
if(q.c!=null)n=q.e||J.cy(p)
else n=!1
if(n)q.m(new C.dTi(q,p))
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
return A.b(C.Gb(q.a.c).cM(0,B.pF),$async$vK)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dTj(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dTk(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vK,v)},
O7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$O7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.S(D.eQ9)
w=3
return A.b(C.Gb(t.a.c),$async$O7)
case 3:r=e
w=4
return A.b(C.fFW(t.a.c,r),$async$O7)
case 4:q=e
w=5
return A.b(C.Gb(t.a.c),$async$O7)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dTe(t,p))
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
return A.b(C.i6C(l),$async$HD)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hB9(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aZb(q,p.e,l,"Each family tree costs $"+B.k.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$HD)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hin(r)
o=Date.now()
n=t.a.c
m=new C.kB(l,r.toUpperCase(),p,!0,B.T,D.C6,new A.S(o,0,!1),0,n,D.tE)
w=5
return A.b(C.a2a(n,m),$async$HD)
case 5:w=6
return A.b(t.vK(),$async$HD)
case 6:t.a.bp()
t.a.pO()
if(t.c==null){w=1
break}t.Ef(m)
case 1:return A.h(u,v)}})
return A.i($async$HD,v)},
Ef(d){return this.ccM(d)},
ccM(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Ef=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Av(u.a.c),$async$Ef)
case 2:n=l.r9(k.dH(f,new C.dTh(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hw(m,new C.aoK(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Ef)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a2a(u.a.c,o),$async$Ef)
case 6:case 5:w=7
return A.b(u.vK(),$async$Ef)
case 7:u.a.pO()
return A.h(null,v)}})
return A.i($async$Ef,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tF(p)
if(r.e)return A.av(A.mH(q,p?B.br:B.bn,q,q,q,q,q,q,q,q),q,q,q)
if(J.cm(r.d)){w=p?B.dX:B.c
v=A.m(15)
u=A.aG(!1,B.a1,!0,q,A.aL(!1,q,!0,A.p(q,D.bHv,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.q,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcbQ(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Fe(A.p(q,A.v(A.a([u,B.aQ,t,B.N,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.br:B.bn,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.e1,A.bH(D.fwE,r.gaPt(),A.bm(B.bW,q,q,q,q,q,Al.YA,q,new A.b7(A.m(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.btC,q,q,1/0),15,B.af,1.05,D.a8t,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b6],v)
if(J.cy(r.d))w.push(A.aH(q,q,q,q,A.X(B.yn,B.aV,q,q,q,q),q,q,q,new C.dTm(r),q,q,q,q,"Sync family trees with database",q))
if(J.cy(r.d))w.push(A.aH(q,q,q,q,A.X(B.ye,B.aV,q,q,q,q),q,q,q,r.gaeN(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dk(E.an2,D.fcW,r.gaPt(),A.bm(B.bW,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.Fe(r.cz0(J.q(r.d,s),o),14,B.af,1,D.a8t,q))
B.d.v(w,u)}return A.v(A.a([p,B.aA,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cz0(d,e){var w=null,v=e.a,u=v?B.dX:B.c,t=A.m(14),s=A.I((v?B.dZ:B.bP).j(0.55),B.q,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.ek,10)],x.V),q=A.m(14),p=A.p(w,D.bGz,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.ganN(),m=d.d?"":" \xb7 Public",l=d.y===D.kn?" \xb7 View only":"",k=x.p
l=A.E(A.v(A.a([o,B.bB,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aG(!1,B.a1,!0,w,A.aL(!1,q,!0,new A.D(B.bC,A.A(A.a([p,B.bf,l,A.X(B.MC,v?B.br:B.bn,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dTl(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aoK.prototype={
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
a1Z(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1Z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xE("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dSH(r),s,null,!0,!0,x.y),$async$a1Z)
case 3:if(e!==!0||t.c==null){w=1
break}t.J7()
t.m(new C.dSI(t,r))
w=4
return A.b(t.vB(),$async$a1Z)
case 4:t.a.bp()
t.xE(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a1Z,v)},
cp4(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.dSC(w,f,d,e))},
aRJ(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dp()
u.e6(w,v,0,1)
u.jH(q,q,1,1)
this.w.sp(0,u)},
b8x(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eF(new Float64Array(16))
q.e_(r)
w=q.Cn()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dp()
t.e6(r,u,0,1)
t.jH(v,v,1,1)
t.e6(-r,-u,0,1)
t.iA(0,q)
s.sp(0,t)},
abG(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$abG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Av(u.a.c),$async$abG)
case 2:t=s.r9(r.dH(e,new C.dSa(u)))
if(t!=null&&u.c!=null)u.m(new C.dSb(u,t))
return A.h(null,v)}})
return A.i($async$abG,v)},
xE(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.S(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
vz(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.h_h(o,t,!1,r,new C.dSp(u),q.a,s),$async$vz)
case 2:n=A
m=J
w=3
return A.b(C.Gb(u.a.c),$async$vz)
case 3:p=n.r9(m.dH(e,new C.dSq(u)))
if(p!=null&&u.c!=null)u.m(new C.dSr(u,p))
return A.h(null,v)}})
return A.i($async$vz,v)},
J7(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cC(w,0)},
vB(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a2a(t,s),$async$vB)
case 2:return A.h(null,v)}})
return A.i($async$vB,v)},
a0z(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tQ(q,t.a.c)){t.xE("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.i7L(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a0z)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.J7()
t.m(new C.dSB(t,r))
w=4
return A.b(t.vB(),$async$a0z)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0z,v)},
a_h(){return this.ccO()},
ccO(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_h=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tQ(q,t.a.c)){t.xE("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.P(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dSz(r,new C.tF(q.ax.a===B.I)),s,null,!0,!0,x.y),$async$a_h)
case 3:if(e!==!0||t.c==null){w=1
break}t.J7()
t.m(new C.dSA(r,t))
w=4
return A.b(t.vB(),$async$a_h)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_h,v)},
Vl(d){return this.byc(d)},
byc(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tQ(r,t.a.c)){t.xE("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dRZ(t,d),r,null,!0,!0,x.P),$async$Vl)
case 3:s=f
if(s==null){w=1
break}t.J7()
t.m(new C.dS_(t,s))
w=4
return A.b(t.vB(),$async$Vl)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vl,v)},
a2k(d){return this.cB8(d)},
cB8(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a2k=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.ca(null,null,!0,null,new C.dSK(u,d,new C.tF(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a2k)
case 2:return A.h(null,v)}})
return A.i($async$a2k,v)},
c96(d){var w=this,v=w.d
v===$&&A.c()
if(C.tQ(v,w.a.c))w.NN(d)
else w.a2k(d)},
ahg(d,e){return this.csW(d,e)},
csW(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ahg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.dSE(new C.tF(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ahg)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ahg,v)},
HI(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kn?3:5
break
case 3:w=6
return A.b(C.fO7(t.a.c),$async$HI)
case 6:s=e
o=t.a
r=C.h6Y(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ahg(!s,!r),$async$HI)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bAC(o,t.a.c)){t.xE("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.l1(o,"Cancel","Remove",q.y===D.kn?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$HI)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aO5(t.a.c,t.d.a),$async$HI)
case 11:t.a.bp()
o=t.c
if(o==null){w=1
break}A.iM(o,null)
case 1:return A.h(u,v)}})
return A.i($async$HI,v)},
a9f(d){return this.bJi(d)},
bJi(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a9f=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tQ(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b5(s,new C.dS0(p))){o=A.U(s)
p.a=A.r9(new A.cR(new A.a2(s,new C.dS1(d),o.k("a2<1>")),new C.dS2(),o.k("cR<1,n>")))}q=p.a
if(q==null)q=d.d
t.J7()
t.m(new C.dS3(t,s,d,q))
w=3
return A.b(t.vB(),$async$a9f)
case 3:t.xE(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a9f,v)},
NN(d){return this.bLo(d)},
bLo(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tQ(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a2k(d),$async$NN)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.dS7(t,d),r,null,!0,!0,x.P),$async$NN)
case 6:s=f
if(s==null){w=1
break}t.J7()
t.m(new C.dS8(t,s))
w=7
return A.b(t.vB(),$async$NN)
case 7:case 1:return A.h(u,v)}})
return A.i($async$NN,v)},
czm(){var w=this,v=w.d
v===$&&A.c()
if(!C.tQ(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dSJ(w))
w.vB()},
Y9(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Y9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bAC(n,t.a.c)){t.xE("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.aw()
r=new A.ar(B.as,s)
q=t.d.e
p=A.bn(new A.K(q,t.gc7C(),A.U(q).k("K<1,n>")).c_(0,new C.dSk()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dSl(t,new C.tF(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$Y9)
case 3:o=e
r.U$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.J7()
t.m(new C.dSm(t,p))
w=4
return A.b(t.vB(),$async$Y9)
case 4:t.xE("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Y9,v)},
c7D(d){return B.a.i(d.toLowerCase())},
cbB(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tQ(v,w)
t=r.d
s=C.hY_(t)
C.i6G(q,t.b,u,C.hXZ(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tF(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a2(l,new C.dSR(),A.U(l).k("a2<1>")).gM(0)
l=n?B.bY:B.iN
v=A.X(B.ZL,n?B.br:B.bn,o,o,o,18)
u=x.p
v=A.a([new A.D(B.AZ,A.aL(!1,o,!0,new A.D(B.hK,A.A(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,o,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dSS(p,d),o,o,o,o,o,o,o),o),new A.D(B.na,p.bWh(m),o)],u)
if(p.d.y===D.kn){t=B.rk.j(0.15)
s=A.m(12)
r=A.I(B.rk.j(0.45),B.q,1)
q=C.G9(p.d,p.a.c)
v.push(new A.D(B.xz,A.p(o,A.A(A.a([D.bLM,B.av,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,12,o,o,B.a5,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.ic,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b6],u)
if(C.tQ(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Jv("Undo",B.r8,p.gczl(),m,o,o))
u.push(new C.Jv("Family Book",D.bBf,p.gcbA(),m,B.t8,o))
if(C.tQ(p.d,p.a.c))u.push(new C.Jv("Display settings",B.BI,p.gccN(),m,B.aZ,o))
u.push(new C.Jv("Sync",B.ye,p.gaeN(),m,o,o))
t=p.d
if(t.y===D.kn||C.bAC(t,p.a.c)){t=p.d.y===D.kn?"Remove shared tree":"Delete tree"
u.push(new C.Jv(t,B.e5,p.gbJs(),m,B.h_,o))}if(C.tQ(p.d,p.a.c))u.push(new C.Jv("Add member",B.vD,new C.dST(p),m,B.bW,o))
v.push(new A.D(A1.aha,A.A(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.ganN()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cp(new C.dSU(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?K.ZP:Y.MD,o,o,o,o,o)
v.push(A.av(A.he(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dSV(p),o),o,o,o))}return A.c8(o,l,A.bl(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bWh(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fw.j(0.35),B.dk,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.X(B.y7,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a1,!0,m,A.aL(!1,m,!0,A.p(m,D.bOQ,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.q,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gaeN(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.f_3,m,m,m)
r=r.ganN()
p=n.d.ganN()===1?"member":"members"
o=x.p
p=A.a([s,B.bf,A.E(A.v(A.a([q,B.bB,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a5,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tQ(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bLY,m,m,m,n.gcmu(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jh:B.ms
r=r?"Private":"Public"
r=A.E(n.au5(q,"Privacy",r,n.a.d.w?n.gcym():m),1)
q=A.E(n.au5(B.yf,"Tree code",n.d.c,new C.dS9(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.A(A.a([r,B.ab,q,B.ab,A.E(n.au5(D.bCZ,"Collaborators",p,n.gc_O()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kn){s=B.c.j(0.15)
B.d.v(p,A.a([B.N,A.aG(!1,B.a1,!0,A.m(999),A.aL(!1,A.m(999),!0,new A.D(B.fI,A.A(A.a([A.X(B.oL,B.c,m,m,m,14),B.ec,A.d("View only",m,m,m,m,m,m,B.aP_,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ag)],o))}return A.p(m,A.bw(u,new A.an(B.W,m,B.aa,B.r,A.a([t,new A.D(B.F7,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bSP,B.n),m,m,m,m,m,m,m,1/0)},
au5(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a1,!0,A.m(14),A.aL(!1,A.m(14),!0,new A.D(L.aih,A.v(A.a([A.X(d,B.c,w,w,w,18),B.at,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.uw,A.d(f,w,1,B.a2,w,w,w,P.zu,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)}}
C.bdz.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gam(r)&&s.c.length===0)return B.bH
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bdC(s,t),new A.at(w,v))],x.p)
r=r.gdK(r)
B.d.v(u,r.dt(r,new C.d66(this),x.l))
r=s.c
B.d.v(u,new A.K(r,new C.d67(this),A.U(r).k("K<1,r>")))
return new A.D(B.tA,new A.a7(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.JH.prototype={}
C.Fq.prototype={}
C.bdB.prototype={
gbgW(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aI7.prototype={}
C.bdC.prototype={
bL5(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
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
bL3(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b0(a0,new C.d6r())
w=f.b
v=w+(B.d.gL(a0).b-w)/2
u=B.d.b5(a0,new C.d6s(f))
t=new A.K(a0,new C.d6t(f),A.U(a0).k("K<1,N>")).c_(0,new C.d6u()).cI(0,1/0,B.uS)
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
if(r!=null&&r.length!==0)this.bL3(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bL5(d,w,q.a,q.b)}},
ar(d){return d.b!==this.b}}
C.bhh.prototype={
gc5r(){var w=this.c
if(B.a.i(w.y).length!==0)return D.dfX
switch(w.c.a){case 0:return D.cKw
case 1:return D.cVz
case 2:return D.dat}},
gc5u(){var w=this.c,v=C.hhJ(w.w),u=C.hhJ(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc5r(),p=t.c,o=I.bBw(p.f),n=t.gc5u(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.aB:B.c,j=A.I(r?B.aB:B.c,B.q,2)
if(o!=null)w=A.t5(B.A,s,B.cl,B.bS,!1,s,o,!1,s,s)
else{w=A.a([B.d.gL(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a3,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hT(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.ax,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.Fn,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.aB:B.c,B.q,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.f90,s,s,s),B.f,s,s,new A.o(B.cd,s,w,j,s,s,B.n),s,s,s,s,D.bvu,s,s,s),s,s,s,-6,-4,s))}k=r?B.cD:B.c
j=A.m(8)
w=A.I(B.d.gL(q).j(0.35),B.q,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dE,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cD,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bn,s,s,s,s,s,s,s,s,7.5,s,s,B.a5,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aE(s,new A.a7(84,112,A.v(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.at,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.aYQ,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bvF,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a8)}}
C.bcG.prototype={
a5(d,e){var w,v,u,t,s,r,q
$.W()
w=A.M()
v=this.b
u=v?B.c:D.b9B
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
ar(d){return d.b!==this.b}}
C.buZ.prototype={
B(d){var w=this,v=null,u=new C.f95(w),t=w.c,s=t?B.cD:B.c,r=A.m(12),q=u.$3(B.hy,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bF:B.fa,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.yc,"Zoom out",w.e)
return A.aG(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.f,t?B.bF:B.fa,v,v,v,1,v,v,v,v,v,22),u.$3(B.akC,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dp,v,v,v,B.ag)}}
C.bkD.prototype={
B(d){var w=this,v=null,u=B.bW.j(0.15),t=A.I(B.bW,B.q,2),s=w.e,r=x.p
t=A.aE(v,A.p(v,A.v(A.a([A.X(s?K.ZP:Y.MD,B.bW,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.f5n,v,v,v)],r),B.m,v,B.bb,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a8)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.f3n,B.L,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.K(s,new C.eL0(w),A.U(s).k("K<1,r>")))
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
if(t==null)w=C.hZx(w.r,w.f)
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
o=C.h6Y(p.y,p.w)
w=3
return A.b(A.ld(t.a.w,B.HL),$async$P9)
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
C.hBa(p.y,p.w)
t.a.bp()
case 5:w=7
return A.b(Ao.Gk(78,800),$async$P9)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dmj(t,q))
case 1:return A.h(u,v)}})
return A.i($async$P9,v)},
c5t(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
return A.b(A.ca(null,null,!0,null,new C.dmi(r),s,null,!0,!0,x.y),$async$a8R)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a5(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a8R,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tF(j),h=l.a.e,g=A.U(h).k("a2<1>"),f=A.B(new A.a2(h,new C.dms(l),g),g.k("J.E"))
h=j?B.dX:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.btY,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aB,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hq(A.aL(!1,k,!0,new A.D(B.lM,A.X(B.e5,B.oy,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbG6(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jt:B.iQ
t=I.bBw(l.as)
if(l.as==null)s=A.X(B.oD,j?B.br:B.bn,k,k,k,40)
else s=k
s=A.av(A.aE(k,new A.an(B.W,k,B.aa,B.r,A.a([A.hc(u,t,s,k,42),A.ao(0,A.hc(B.bW,k,D.bFE,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc5q(),k,k,k,k,k,k,!1,B.a8),k,k,k)
t=l.d
t===$&&A.c()
t=C.aAZ(t,"Full name",B.mo,1,1,i,B.m0)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.S,new C.bhf(i,u,new C.dmt(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bnB],q)
o=l.a.e
B.d.v(p,new A.K(o,new C.dmu(),A.U(o).k("K<1,eD<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bnD],q)
B.d.v(q,new A.K(f,new C.dmw(),A.U(f).k("K<1,eD<n?>>")))
o=A.v(A.a([t,B.am,new C.acD(i,r,"Who is their parent?",p,new C.dmx(l),k,o),B.aA,n,B.am,new C.acD(i,m,"Who is their spouse / partner?",q,new C.dmy(l),k,o)],v),B.aj,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aAZ(q,"Birth date",D.ajG,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aAZ(m,"Birth place",B.a_3,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aAZ(n,"Date of death (if deceased)",D.alT,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aAZ(p,"Occupation",B.a09,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.r,w,k),B.aA,s,B.by,new C.acE(i,"Identity",u,k),B.ac,new C.acE(i,"Family links",o,k),B.ac,new C.acE(i,"Life details",A.v(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aAZ(r,"Notes",B.kQ,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aAY(i,"Child order",l.cd0(l.at),new C.dmz(l),new C.dmA(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fXF(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dmB(l):k
B.d.v(r,A.a([B.S,new C.aAY(i,"Visible in tree",u,w,new C.dmC(l),k)],v))}r.push(B.S)
w=j?B.jt:B.iQ
u=A.m(14)
t=A.I(j?B.dZ:B.bP,B.q,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iE(k,B.bW,k,B.af,k,new C.dmD(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.agL,k,k,k))
r.push(B.by)
w=j?B.aP:B.aB
j=j?B.dZ:B.bP
r.push(A.A(A.a([A.E(A.dT(B.nv,new C.dmv(d),A.dg(k,k,k,k,k,k,k,k,k,w,k,k,B.ck,k,new A.b7(A.m(14),B.Y),new A.ay(j,1,B.q,-1),k,k,k,k)),1),B.bf,A.E(A.bH(D.eIY,l.gc5s(),A.bm(B.aV,k,k,0,B.c,k,B.ck,k,new A.b7(A.m(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.at)
return A.ek(B.ha,k,B.af,h,new A.a7(420,k,A.cd(A.v(r,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),k),D.ahD,k,B.ah1,new A.b7(g,B.Y),k,k)},
cd0(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.acE.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jt:B.iQ,s=A.m(16)
return A.v(A.a([new A.D(D.ai1,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.dZ:B.bP,B.q,1),s,w,w,B.n),w,w,w,w,B.bk,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bhg.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dX:B.c,r=A.m(12),q=A.I((t?B.dZ:B.bP).j(0.85),B.q,1),p=v.r
if(p==null)p=B.an
w=A.l(u,u,t?B.aP:B.aB,u,u,u,u,u,u,u,u,14,u,u,B.a5,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.T,!1,u,!0,B.r,u,A.aN(),v.d,u,u,u,u,u,2,A.br(u,B.ez,u,B.vh,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.br:B.bn,u,u,u,u,u,u,u,u,u,u,u,B.cv,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bW,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ai,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.acD.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dX:B.c,s=A.m(12),r=A.I((u?B.dZ:B.bP).j(0.85),B.q,1),q=A.X(B.r2,u?B.br:B.bn,v,v,v,v),p=A.l(v,v,u?B.aP:B.aB,v,v,v,v,v,v,v,v,14,v,v,B.a5,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dX:B.c
return A.p(v,new A.Dk(A.S8(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.br:B.bn,v,v,v,v,v,v,v,v,v,v,v,B.cv,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.le,v,v,v)}}
C.bhf.prototype={
B(d){var w=new C.dmE(this)
return A.A(A.a([w.$3(D.Zn,"Male",B.No),B.ab,w.$3(D.aiU,"Female",B.N9),B.ab,w.$3(D.xN,"Other",B.ng)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aAY.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jt:B.iQ,r=A.m(14),q=A.I(t?B.dZ:B.bP,B.q,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aB,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
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
C.acF.prototype={
bOQ(d){switch(d.a){case 0:return B.bW
case 1:return B.bA
case 2:return B.cV}},
bOR(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aVY(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
A0(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dX:B.c
u=A.m(12)
t=A.I((w?B.dZ:B.bP).j(0.85),B.q,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bW,p,p,p,18),B.av],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.br:B.bn,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.v(A.a([q,B.at,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.aB,p,p,p,p,p,p,p,p,14,p,p,B.P,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.A(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cB,B.xw,p,p,1/0)},
adi(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jt:B.iQ,s=A.m(16),r=A.I(v?B.dZ:B.bP,B.q,1)
return A.v(A.a([new A.D(D.ai1,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hmr(r,q),o=q.c,n=t.bOQ(o),m=I.bBw(q.f),l=t.e.a,k=l?B.dX:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.aB,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.kn?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.br:B.bn,s,s,s,s,s,s,s,s,12,s,s,B.a5,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.q,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.hc(u,m,m==null?A.X(B.oD,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.ep,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.q,1)
v=A.av(A.p(s,A.d(t.bOR(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mm,s,s,s),s,s,s)
u=x.p
i=A.a([t.A0("Full name",i,B.mo)],u)
if(p>0)i.push(t.A0("Child order","#"+p,B.Ng))
r=A.a([h,B.at,r,B.aQ,l,B.S,v,B.by,t.adi("Identity",i),B.ac,t.adi("Life details",A.a([t.A0("Birth date",q.w,D.ajG),t.A0("Birth place",q.x,B.a_3),t.A0("Date of death",q.y,D.alT),t.A0("Occupation",q.z,B.a09)],u)),B.ac,t.adi("Family links",A.a([t.A0("1. Parent",t.aVY(q.d),B.FB),t.A0("2. Spouse",t.aVY(q.e),B.N8)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.adi("Notes",A.a([t.A0("Notes",q,B.kQ)],u))],u))
r.push(B.by)
r.push(A.bH(B.J3,new C.dmO(d),A.bm(B.aV,s,s,s,s,s,B.ck,s,new A.b7(A.m(14),B.Y),s,s,s)))
return A.eI(s,k,new A.cS(B.lz,A.cd(A.v(r,B.aj,s,B.e,B.Q,0,B.p),B.r,s,B.y,s,B.xC,s,s,B.ah),s),s,s,s,B.Fa,B.d0,s,new A.b7(j,B.Y),s)}}
C.Jv.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.br:B.bn
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.xF,A.hq(A.aG(!1,B.a1,!0,A.m(8),A.aL(!1,A.m(8),!0,new A.a7(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ag),u,v.c,u,u),u)}}
C.aoN.prototype={
eM(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a6().ac())
w=u.c
v=A.U(w).k("K<1,a4<n,@>>")
w=A.B(new A.K(w,new C.c7G(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.j0(w,new C.c7H(),t,x.U))
return s}}
C.aoO.prototype={
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
return A.b(C.Av(t.a.c),$async$Je)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qP(q,new C.dT3(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dT4(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Je,v)},
yb(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.S(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
JX(d,e){return this.cBI(d,e)},
cBI(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$JX=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dT8(q,e))
t=3
w=6
return A.b(d.$0(),$async$JX)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dT9(q))
$.eV.mn()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JX,v)},
X_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p1(r,s.c,s.e),$async$X_)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JX(new C.dT0(t),"Preparing download\u2026"),$async$X_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X_,v)},
X3(d){return this.bMQ(d)},
bMQ(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p1(r,s.c,s.e),$async$X3)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.JX(new C.dT1(t,d),"Preparing file\u2026"),$async$X3)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X3,v)},
af9(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$af9=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.x0.c5().LI(B.Qg,B.tF,!0),$async$af9)
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
return A.i($async$af9,v)},
XE(d){return this.bXa(d)},
bXa(d){var w=0,v=A.j(x.H),u=this
var $async$XE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.JX(new C.dT2(u,d),"Restoring family trees\u2026"),$async$XE)
case 2:return A.h(null,v)}})
return A.i($async$XE,v)},
XD(){var w=0,v=A.j(x.H),u,t=this,s
var $async$XD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.af9(),$async$XD)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.XE(s),$async$XD)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XD,v)},
a1p(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1p=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p1(r,s.c,s.e),$async$a1p)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JX(new C.dT7(t),"Creating QR code\u2026"),$async$a1p)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1p,v)},
a10(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a10=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.CC()){t.yb("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).c8(A.e9(new C.dT5(),!0,null,x.N)),$async$a10)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.XE(r),$async$a10)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a10,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.Ao:B.iN,m=o?D.afg:B.aP,l=o?B.aK:B.bP,k=o?B.aP:B.aB,j=new C.d6v(n,m,l,k,o?B.bJ:B.bn)
l=A.aH(p,p,p,p,A.X(B.eB,k,p,p,p,20),p,p,p,new C.dTb(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eC(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.d63(!0,B.jj,B.aS,B.aS,q.r?p:q.gcsK(),j,s,"Show restore QR"),1),B.av],u))}s=q.e
r=q.r?p:q.gcp_()
t.push(A.E(C.d63(!s,B.iX,B.b7,B.bt,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.d63(!1,B.hA,B.aV,B.bW,q.r?p:q.gbMJ(),j,"Photos & books included","Download all trees"),1),B.av],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.d63(!1,M.yi,B.aH,B.aM,q.r?p:q.gbX7(),j,s,"Upload backup file"),1))
l=A.a([new C.bdA(v,l,p),B.kx,new C.abV(j,"QR restore",p),B.S,t,B.d5,new C.abV(j,"Backup files",p),B.S,A.A(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kx,new C.abV(j,"One tree",p),B.S],u)
B.d.v(v,J.b6(q.d,new C.dTc(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cz(l,p,B.Yw,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aV.j(0.35),B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dk,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bl(!0,A.p(p,A.A(A.a([K.aNs,B.bf,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.B4,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c8(w,n,new A.an(B.W,p,B.aa,B.r,l,p),p,!1,!1,p,p)}}
C.d6v.prototype={}
C.bdA.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.k3,28)],x.V)
t=A.ao(p,A.X(B.tX,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.r,A.a([t,new A.D(B.a9,A.A(A.a([A.p(p,D.bOn,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.q,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.od,A.E(A.v(A.a([D.fdW,B.N,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bW2,B.n),p,p,p,p,p,p,p,p)}}
C.abV.prototype={
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
return A.aG(!1,B.a1,!0,q,A.aL(!1,o,!0,A.eE(A.dc(new A.D(E.Ya,A.v(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qZ,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bB,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cv,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)}}
C.bdD.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.q,1),q=B.aV.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,A.eE(new A.D(B.eP,A.A(A.a([A.p(v,D.bNA,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.q,1),p,v,v,B.n),v,v,v,v,B.qZ,v,v,v),B.bf,A.E(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.X(B.hA,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)}}
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
if(u.c!=null)u.m(new C.dSW(u,t))
return A.h(null,v)}})
return A.i($async$a8n,v)},
agx(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$agx=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dSX(q))
t=4
p=A.h8C(q.a.d,B.CH)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.V(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.ar1(n.e,m,l,B.CH,p,n.f),$async$agx)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dSY(q))
q.c.I(x.q).f.S(D.eRi)
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
if(q.c!=null)q.m(new C.dSZ(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agx,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.j9:B.py,n=p?B.i8:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eC(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.ftu,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.pH(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.v(A.a([B.N,u,B.by,t,B.N,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.bb,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bv,q,q,q,q,q,q,q,q,q,q,q,B.P,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcoI()
if(u)u=B.Iz
else u=A.X(r.e===!0?B.hz:B.ajF,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a7(1/0,q,A.ey(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cj,q,q,q),t,A.dg(q,q,q,q,q,q,q,q,q,B.aV,q,B.fN,q,q,q,new A.ay(B.aV.j(0.55),1,B.q,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hY,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.az:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.S)
w.push(new A.a7(1/0,q,A.bH(B.zC,new C.dT_(d),A.bm(B.aV,q,q,q,q,B.fN,q,q,q,q,q,q)),q))
return A.c8(m,o,new A.D(B.a9,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.ZO.prototype={
R(){return new C.biK(A.z1(B.xk,B.nC,B.u1))}}
C.biK.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c8(A.eC(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.flH,w,w,w,1,w,!0),B.w,A.z0(this.d,B.bS,new C.dTd(this,d)),w,!1,!1,w,w)}}
C.aXK.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.PL,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lx.prototype={}
C.a5I.prototype={
R(){return new C.biq(null,null)}}
C.biq.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.tu,v,1,v,w)
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
this.btz()},
B(d){var w,v,u=this,t=B.d.dL(D.a2N,new C.dEl(u),new C.dEm())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.ct5(A.c6(new A.h3(A.a([w,v],x.dS)),new C.dEn(u,t),null),!0)}}
C.bip.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b_g(d,e)
break
case"house":p.m0(d,e,D.d_8)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdO()
$.W()
t=A.M()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ae(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.m5(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.AJ(d,e,12)
p.xN(d,e,B.l7,5,14)
break
case"grocery":p.cdK(d,e)
break
case"calculator":p.cdr(d,e)
break
case"lumber":p.cdS(d,e)
break
case"kitchen":p.cdN(d,e)
break
case"landscape":p.m0(d,e,D.d_F)
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
p.AJ(d,e,8)
p.xN(d,e,B.iT,4,18)
break
case"plumbing":p.ce0(d,e)
break
case"electrical":p.m0(d,e,D.d9L)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.W()
u=A.M()
u.r=B.c.j(q*0.12).gp(0)
d.aZ(new A.a9(0,0,0+e.a,0+e.b),u)
p.m5(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.m5(d,e,B.lE.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.AJ(d,e,10)
break
case"store":p.cea(d,e)
break
case"paint_remodel":p.cdW(d,e)
break
case"roofing":p.ce2(d,e)
break
case"warehouse":p.ceh(d,e)
break
case"vehicles":p.cef(d,e)
break
case"farm":p.cdE(d,e)
break
case"restaurant":p.ce1(d,e)
break
case"tools":p.ced(d,e)
break
case"wallet":p.ceg(d,e)
break
case"concrete":p.cdx(d,e)
break
case"blueprint":p.cdp(d,e)
break
default:p.b_g(d,e)}},
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
xN(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdO()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.W()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
AJ(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.W()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b_g(d,e){var w,v=this
v.m0(d,e,D.d8v)
w=v.c
v.m5(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.m5(d,e,B.bK.j(0.45),-w*3.141592653589793*1.4,22)
v.bL_(d,e,B.hU,w)
v.xN(d,e,B.c.j(0.7),6,8)},
bL_(d,e,f,g){var w,v,u,t,s,r,q,p
$.W()
w=A.M()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c0(new A.a9(16,q,t,q+3)),p)
p.delete()}},
cdK(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m0(d,e,D.cgw)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.W()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.cYt[B.o.F(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.m5(d,e,B.c.j(0.35),w,16)
j.xN(d,e,B.iT,5,12)},
cdr(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m0(d,e,D.cgD)
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
r=D.d1c[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saV(0,new A.eq(r,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eF()
p.a5(d,new A.u(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cgF[o]
l=B.kd.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saV(0,new A.eq(m,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eF()
p.a5(d,new A.u(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.m5(d,e,B.c.j(0.35),w*1.5,14)
h.m5(d,e,B.eA.j(0.55),-v*3.141592653589793*2,8)
h.m5(d,e,B.Ap.j(0.4),r*2.8,22)
h.xN(d,e,B.po,8,10)
h.AJ(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.W()
r=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cdS(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m0(d,e,A_.avf)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bx(new A.a9(20,q,u,q+10),B.hC)
$.W()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.h3,B.oq,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.er(p),n)
n.delete()}m.m5(d,e,B.h3.j(0.35),w,15)
m.AJ(d,e,8)},
cdN(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m0(d,e,D.cYY)
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
j.xN(d,e,B.qA,4,14)},
ce0(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m0(d,e,D.cOe)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.W()
n=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xN(d,e,B.ov,6,12)
l.m5(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cea(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m0(d,e,D.ctY)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bx(new A.a9(q,14,q+u,22),B.ik)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.f8,B.bK,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.er(q),o)
o.delete()}n.m5(d,e,B.c.j(0.3),w,16)
n.AJ(d,e,8)
n.xN(d,e,B.uZ,5,13)},
cdW(d,e){var w,v,u,t,s,r,q,p,o
this.m0(d,e,D.cTZ)
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
ce2(d,e){var w,v,u,t,s,r,q,p,o
this.m0(d,e,D.cRw)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xN(d,e,B.cq,7,11)},
ceh(d,e){var w,v,u,t,s,r,q,p,o,n
this.m0(d,e,D.cwC)
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
cef(d,e){var w,v,u,t,s,r,q,p,o
this.m0(d,e,D.ddy)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.bx(new A.a9(r,q,r+28,q+8),B.hC)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.er(q),o)
o.delete()}this.AJ(d,e,6)},
cdE(d,e){var w,v,u,t,s,r,q,p,o,n
this.m0(d,e,D.cXB)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.W()
s=A.M()
s.r=B.lE.j(0.75).gp(0)
d.ae(new A.u(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.hj.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.m5(d,e,B.lE.j(0.35),w,14)},
ce1(d,e){var w,v,u,t,s,r,q,p,o=this
o.m0(d,e,D.cZY)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cl(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.W()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c0(r),p)
p.delete()}o.xN(d,e,B.qA,5,16)
o.AJ(d,e,7)},
ced(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m0(d,e,D.dbc)
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
ceg(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m0(d,e,D.de4)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bx(new A.a9(p,o,p+36,o+22),B.ik)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.iT,B.lE,q).gp(0)
n=p.H()
s.drawRRect(A.er(o),n)
n.delete()}m.AJ(d,e,9)
m.m5(d,e,B.c.j(0.4),w*2.2,12)},
cdx(d,e){var w,v,u,t,s,r,q,p,o,n
this.m0(d,e,D.d3Q)
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
o.r=B.bP.j(0.85).gp(0)
n=o.H()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
cdp(d,e){var w,v,u,t,s,r,q,p
this.m0(d,e,D.d_X)
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
C.arJ.prototype={
ZG(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aP0(),$async$ZG)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a7Y(s),$async$ZG)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$ZG,v)},
afa(d){return this.cgw(d)},
cgw(d){var w=0,v=A.j(x.H),u=this,t
var $async$afa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.i6Q(d),$async$afa)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$afa,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.jt:B.iQ
w=x.p
v=A.a([C.aPp(!0,B.qs,1/0,B.pM,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c_(new A.bI(B.b_,t,t,new A.D(B.va,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.P,t,t,!0,t,t,t,t,t,B.aw9,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b_,B.b5,B.x,u,t,t),B.n),B.bd))}v.push(A.ao(8,A.A(A.a([A.E(A.dk(D.bHo,D.fah,new C.cfe(this,d),A.bm(B.aV,t,t,t,B.c,t,B.jy,t,t,t,t,B.cb)),1),B.ab,A.E(A.ey(D.bPC,D.foJ,this.gc7A(),A.dg(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jy,t,t,D.aXl,t,t,t,B.cb)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
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
if(w.length===0){u.c.I(x.q).f.S(D.eRN)
return}t=u.c
t.toString
v=u.e
A.a5(t,!1).O(new C.aSk(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.dX:B.c,k=A.m(20),j=A.p(n,D.bPh,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.aB,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.v(A.a([i,B.bB,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bn,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.bf,i,A.aH(n,n,n,n,A.X(B.cC,m?B.br:B.bn,n,n,n,n),n,n,n,new C.cYL(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bn,n,n,n,n,n,n,n,n,12,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bn,n,n,n,n,n,n,n,n,11,n,n,B.cv,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.h8S(new C.cYM(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.aB,n,n,n,n,n,n,n,n,n,n,n,B.a5,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jt:B.iQ
r=A.m(12)
q=A.m(12)
p=m?B.dZ:B.bP
t=A.aM(n,B.T,!0,n,!0,B.r,n,A.aN(),u,n,n,n,n,n,2,A.br(n,new A.b4(4,r,B.dg),n,n,n,n,n,n,!0,new A.b4(4,q,new A.ay(p,1,B.q,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cYN(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,S.IG,n,n,n,n)
u=m?B.aP:B.aB
m=m?B.dZ:B.bP
return A.eI(n,l,new A.cS(B.lz,A.cd(A.v(A.a([j,B.aQ,i,B.at,w,B.N,v,B.aQ,t,B.by,A.A(A.a([A.E(A.dT(B.de,new C.cYO(d),A.dg(n,n,n,n,n,n,n,n,n,u,n,n,B.ck,n,new A.b7(A.m(12),B.Y),new A.ay(m,1,B.q,-1),n,n,n,n)),1),B.av,A.E(A.bH(D.foY,o.ga1J(),A.bm(B.aV,n,n,n,B.c,n,B.ck,n,new A.b7(A.m(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.r,n,B.y,n,B.B5,n,n,B.ah),n),n,n,n,X.B6,B.d0,n,new A.b7(k,B.Y),n)}}
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
if(w.length===0){this.c.I(x.q).f.S(D.ePu)
return}v=this.c
v.toString
A.a5(v,!1).O(new C.aSj(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.dX:B.c,n=A.m(20),m=A.p(q,D.bLR,B.f,q,q,new A.o(B.bW.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.v(A.a([l,B.bB,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.br:B.bn,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.bf,l,A.aH(q,q,q,q,A.X(B.cC,p?B.br:B.bn,q,q,q,q),q,q,q,new C.cYH(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aV.j(0.25),B.q,1)
u=A.X(B.ajr,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.av,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,12,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bC,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,q,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jt:B.iQ
t=A.m(12)
s=A.m(12)
r=p?B.dZ:B.bP
v=A.aM(q,B.T,!0,q,!0,B.r,q,A.aN(),w,q,q,q,q,q,2,A.br(q,new A.b4(4,t,B.dg),q,q,q,q,q,q,!0,new A.b4(4,s,new A.ay(r,1,B.q,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cYI(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.ky,q,q,q,q)
w=p?B.aP:B.aB
p=p?B.dZ:B.bP
return A.eI(q,o,new A.cS(B.lz,A.cd(A.v(A.a([m,B.aQ,l,B.aA,v,B.by,A.A(A.a([A.E(A.dT(B.de,new C.cYJ(d),A.dg(q,q,q,q,q,q,q,q,q,w,q,q,B.ck,q,new A.b7(A.m(12),B.Y),new A.ay(p,1,B.q,-1),q,q,q,q)),1),B.av,A.E(A.bH(D.fvF,this.ga1J(),A.bm(B.bW,q,q,q,B.c,q,B.ck,q,new A.b7(A.m(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.B5,q,q,B.ah),q),q,q,q,X.B6,B.d0,q,new A.b7(n,B.Y),q)}}
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
gaio(){var w=this.f
w===$&&A.c()
w=A.d5(B.a.i(w.a.a))
return w==null?0:w},
gb2a(){var w,v=this.w
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
awH(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jt:B.iQ,s=A.m(14),r=A.m(14)
u=u?B.dZ:B.bP
return A.br(w,new A.b4(4,s,B.dg),w,B.bC,w,w,w,w,!0,new A.b4(4,r,new A.ay(u,1,B.q,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.m(14),B.a9T),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c7B(d,e,f){return this.awH(d,e,f,null)},
JO(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gaio()<=0){s.c.I(x.q).f.S(D.eTE)
return}r=s.c
r.toString
v=s.gJ9()
u=s.gaio()
t=s.gb2a()
A.a5(r,!1).O(new C.aQl(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tF(n),l=n?B.dX:B.c,k=A.m(24),j=x.O,i=A.a([B.aV.j(0.22),B.bW.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bFm,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.q,1),h,o,new A.a8(B.a3,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.v(A.a([h,B.bB,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.cv,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.bf,h,A.aH(o,o,o,o,A.X(B.cC,n?B.br:B.bn,o,o,o,o),o,o,o,new C.cwq(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,o,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.T,!0,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.awH(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Nm),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,S.IG,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jt:B.iQ
t=A.m(14)
s=A.I(n?B.dZ:B.bP,B.q,1)
r=A.aH(o,o,o,o,A.X(B.yc,n?B.aP:B.aB,o,o,o,20),o,o,o,new C.cwr(p),o,o,o,o,o,B.cb)
q=p.e
q===$&&A.c()
q=A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),q,o,o,o,o,o,2,D.bR8,B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dV,o,o,o,1,o,o,!1,"\u2022",o,new C.cws(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.an,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a7(52,o,q,o),A.aH(o,o,o,o,A.X(B.hy,n?B.aP:B.aB,o,o,o,20),o,o,o,new C.cwt(p),o,o,o,o,o,B.cb)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,16,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.av,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),t,o,o,o,o,o,2,p.awH(m,"Amount","0.00",B.hZ),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dV,o,o,o,1,o,o,!1,"\u2022",o,new C.cwu(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.an,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.B(new A.K(D.cUr,new C.cwv(p,m),t),t.k("ak.E"))
i=A.a([i,B.by,v,B.aA,h,B.N,s,B.ac,A.bW(B.bz,u,B.bq,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.S,A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.c7B(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cww(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.ky,o,o,o,o)],w))}i.push(B.aQ)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bW.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,11,o,o,B.P,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJ9()===B.k.jY(p.gJ9())?B.k.N(p.gJ9()):p.gJ9()
s=p.gb2a()
r=A.Ax(p.gaio())
i.push(A.p(o,A.A(A.a([A.E(A.v(A.a([u,B.at,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bCi(p.gJ9()*p.gaio(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a3,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.je,o,o,o))
i.push(B.by)
j=A.m(14)
h=n?B.dZ:B.bP
h=A.dg(o,o,o,o,o,o,o,o,o,o,o,o,B.ck,o,new A.b7(j,B.Y),new A.ay(h,1,B.q,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dT(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,o,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cwx(d),h),1),B.av,A.E(A.dk(D.amW,D.frH,p.ga1J(),A.bm(B.aV,o,o,0,B.c,o,B.ck,o,new A.b7(A.m(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eI(o,l,new A.cS(W.aaf,A.cd(A.v(i,B.aj,o,B.e,B.Q,0,B.p),B.r,o,B.y,o,Ad.qY,o,o,B.ah),o),o,o,o,B.M2,B.d0,o,new A.b7(k,B.Y),o)}}
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
r=r?B.jt:B.iQ
v=A.aM(s,B.T,!0,s,!0,B.r,s,A.aN(),w,s,s,s,s,s,2,A.br(s,new A.b4(4,A.m(12),B.dg),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.f8y(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.an,s,s,s,s)
u=A.E(A.dT(B.de,new C.f8z(d),s),1)
r=A.bm(B.bW,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eI(s,q,new A.D(B.B5,A.v(A.a([o,B.aA,v,B.aQ,A.A(A.a([u,B.av,A.E(A.bH(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.f8A(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d0,s,new A.b7(p,B.Y),s)}}
C.aaY.prototype={
a4(){return"WorksheetFrameStyle."+this.b}}
C.Fe.prototype={
R(){return new C.buP(null,null)}}
C.buP.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.boa,null,1,null,v)
w.cH(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bvX()},
gbxn(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bW,B.aZ],x.O)
case 2:return A.a([B.bu,B.aV,B.aZ],x.O)
case 3:return A.a([B.aS,B.cd,B.jQ],x.O)
case 4:return A.a([B.hv,B.bW,B.f9],x.O)
case 0:return A.a([B.aV,B.bW,B.aZ],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.ev(A.c6(v,new C.f8w(this,new C.tF(w.ax.a===B.I)),null),null)}}
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
this.bvY()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.f8x(this),null)}}
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
w=A.wZ(u)
t=A.a([],x.f5)
w=new A.vs(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.ba(A.jU('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.H6(w,r)
w.jo()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aQB(d,q,r,o,0,0.2,4.2,0.92)
p.aQB(d,q,r,s,0.52,0.11,3.2,0.58)}},
aQB(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hun(e.a.a,e,t,t+f*i,!0),r=A.bAF(s.gbL().a.getBounds())
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
C.tF.prototype={}
C.arI.prototype={
R(){return new C.aE2()},
gdZ(){return this.c}}
C.aE2.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.ag1()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.KT(w,v)
this.a2()},
ag1(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ag1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bAN(t.c,t.d.a),$async$ag1)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eIa(u,s))
return A.h(null,v)}})
return A.i($async$ag1,v)},
Pz(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Pz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eI1(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.KT(t,s),$async$Pz)
case 2:if(u.c!=null)u.m(new C.eI2(u))
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
return A.b(A.ca(null,null,!0,null,new C.eI8(t,new C.tF(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Q4)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a7Y(q),$async$Q4)
case 6:case 5:t.m(new C.eI9(t,r))
w=7
return A.b(t.Pz(),$async$Q4)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Q4,v)},
Vf(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i6B(r),$async$Vf)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eHX(t,new C.qT(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Pz(),$async$Vf)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vf,v)},
ccC(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hmn(t,new C.eI0(u),w,v)},
aa8(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bO(new A.ay(v,2.5,B.q,-1),B.Y,B.Y,new A.ay(B.c.j(d?0.85:0.55),2.5,B.q,-1)),D.aX7,w,w,B.n),w,22,w,w,w,w,w,22)},
a9e(d){return this.bJf(d)},
bJf(d){var w=0,v=A.j(x.H),u=this
var $async$a9e=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eI_(u,d))
w=2
return A.b(u.Pz(),$async$a9e)
case 2:return A.h(null,v)}})
return A.i($async$a9e,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.bY:B.iN,d=A.m(8),a0=A.X(R.ZM,f?B.br:B.bn,g,g,g,16),a1=x.p
a0=A.aL(!1,d,!0,new A.D(B.Fh,A.A(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.br:B.bn,g,g,g,g,g,g,g,g,g,g,g,B.a5,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eIb(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b0,B.r,A.a([A.bw(A.m(22),C.aPp(!0,A.m(22),1/0,B.pM,g,d,1/0),B.aq),A.ao(10,A.dk(D.bJV,D.ftY,h.gb02(),A.bm(B.w.j(0.45),g,g,g,B.c,g,B.h7,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eT,22),new A.ac(-4,B.G,B.bW.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.q,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bw(s,new A.an(B.W,g,B.b0,B.r,A.a([C.aPp(!0,A.m(16),1/0,B.MO,g,r.c,1/0),A.c_(g,new A.o(g,g,g,g,g,new A.a8(B.b_,B.b5,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bd),A.ao(g,h.aa8(!0),g,g,8,g,8,g),A.ao(g,A.ctQ(h.aa8(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.ctQ(h.aa8(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.ctQ(h.aa8(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dk(D.bFV,D.fnJ,h.gb02(),A.bm(B.w.j(0.45),g,g,g,B.c,g,B.h7,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bSA,B.n),g,g,g,g,B.lM,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aB,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b6t,B.nI,B.h5],u):A.a([B.aZ,B.aV,B.bW],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eT,24)],t)
r=A.m(22)
p=A.ao(g,A.X(B.jB,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.q,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h6,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aA,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bCi(h.d.gwN(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.N,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cv,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.fT.j(0.75),B.q,1.6)
t=A.a([new A.ac(0,B.G,B.aS.j(0.28),B.cJ,14)],t)
j=B.aS.j(0.22)
i=A.m(10)
u=A.p(g,A.bw(r,new A.an(B.W,g,B.aa,B.r,A.a([p,new A.D(D.bsL,A.A(A.a([o,B.av,A.aG(!1,B.a1,!0,g,A.aL(!1,n,!0,A.eE(new A.D(Ai.B0,A.v(A.a([A.p(g,D.amv,B.f,g,g,new A.o(j,g,A.I(B.aS.j(0.5),B.q,1),i,g,g,B.n),g,g,g,g,B.co,g,g,g),B.h0,D.fd_],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gccB(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ag)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.ax,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fG(1.7777777777777777,d,g),B.aQ,w,B.N,u,B.by,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aB,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b6,A.dk(Ak.a0v,D.faU,h.gbxQ(),A.bm(B.aV,g,g,g,B.c,g,B.ic,g,new A.b7(A.m(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.dX:B.c
v=A.m(14)
u=A.I(f?B.dZ:B.bP,B.q,1)
t=A.X(B.a_6,f?B.br:B.bn,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aB,g,g,g,g,g,g,g,g,g,g,g,B.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.S,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.br:B.bn,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.tD,g,g,1/0))}else B.d.v(d,new A.K(w,new C.eIc(h,new C.tF(f)),A.U(w).k("K<1,r>")))
if(h.e)d.push(new A.D(B.AU,A.av(A.mH(g,f?B.br:B.bn,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c8(g,e,A.bl(!0,A.v(A.a([new A.D(B.AZ,a0,g),A.E(A.cd(A.v(d,B.F,g,B.e,B.j,0,B.p),B.r,g,B.y,g,E.xD,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bBs(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dX:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.aZU,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.X(s?B.hL:B.h9,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bH
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aP:B.aB,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcRO()
v=A.Ax(d.d)
B.d.v(t,A.a([B.at,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.br:B.bn,u,u,u,u,u,u,u,u,12,u,u,B.a5,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.bb,B.Q,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bW.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bCi(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a3,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.h7,u,u,u)
w=x.p
return A.p(u,A.bw(n,new A.DJ(A.A(A.a([m,A.E(new A.D(B.agE,A.A(A.a([l,B.bf,t,B.ab,k,A.aH(u,u,u,u,A.X(B.cC,(r?B.br:B.bn).j(0.75),u,u,u,20),u,u,u,new C.eHY(this,d),u,u,u,u,u,B.cb)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.aj,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.aYM,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.db,u,u,u,u)}}
C.ad_.prototype={
Ea(d){return this.bKC(d)},
bKC(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
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
return A.b(C.fEZ(!0,o,s),$async$Ea)
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
ZH(d){return this.csL(d)},
csL(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.p1(d,s,!1),$async$ZH)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).O(null)
A.hw(d,new C.arC(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.p0(s,!1),$async$ZH)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZH,v)},
PA(d){return this.coV(d)},
coV(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).O(null)
w=3
return A.b(A.hw(d,D.aFx,!0,"NgmyWorksheetProjectScan",x.N),$async$PA)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bCj(s),$async$PA)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.S(D.eSN)
w=1
break}q=C.fZX(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dP(p,x.H),$async$PA)
case 5:if(d.e==null){w=1
break}d.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$PA,v)},
ZI(d){return this.cAE(d)},
cAE(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ZI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).O(null)
w=3
return A.b(C.bBR(),$async$ZI)
case 3:s=f
if(s==null){w=1
break}r=C.fZX(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dP(q,x.H),$async$ZI)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$ZI,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tF(u),s=w.d.d.length,r=u?B.dX:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.k3,36)],x.V),o=x.p
return A.bl(!0,new A.D(B.vi,A.p(v,A.v(A.a([w.crl(d,t,s),new A.D(D.bs9,A.v(A.a([w.b34(t,"QR restore"),B.S,A.A(A.a([w.aZ0(t,!0,B.jj,B.aS,B.aS,new C.eIe(w,d),"Show to scan","QR code"),B.av,w.awI(t,B.iX,B.b7,B.bt,new C.eIf(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d5,w.b34(t,"Backup files"),B.S,A.A(A.a([w.awI(t,B.hA,B.aV,B.bW,new C.eIg(w,d),"Full copy","Backup file"),B.av,w.awI(t,M.yi,B.aH,B.aM,new C.eIh(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
crl(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eY,B.cY,B.fw],k):A.a([B.aZ,B.aV,B.bW],k)
w=A.ao(l,A.X(B.tX,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kM,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.q,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aPp(!0,A.m(13),64,D.bB8,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aPY,l,l,l)
r=C.bCi(r.gwN(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.q,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.r,A.a([w,new A.D(D.bsx,A.v(A.a([v,A.A(A.a([s,B.ey,A.E(A.v(A.a([u,B.at,t,B.N,A.A(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fK,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.X(B.cC,B.c.j(0.85),l,l,l,l),l,l,l,new C.eId(d),l,l,l,A.nw(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aNh,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.ax,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b34(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.br:B.bn,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aZ0(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.afg:B.aP
if(e)w=B.aS.j(o?0.45:0.35)
else{w=o?B.dZ:B.bP
w=w.j(o?0.8:1)}w=A.I(w,B.q,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aS.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.q,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qZ,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.aB,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aG(!1,B.a1,!0,r,A.aL(!1,q,!0,A.eE(new A.D(E.Ya,A.v(A.a([t,B.ac,u,B.bB,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.br:B.bn,r,r,r,r,r,r,r,r,11,r,r,B.cv,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
awI(d,e,f,g,h,i,j){return this.aZ0(d,!1,e,f,g,h,i,j)}}
C.arC.prototype={
R(){return new C.bk6()}}
C.bk6.prototype={
a_(){this.a1()
this.adV()},
adV(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$adV=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bCk(p.c,p.d),$async$adV)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eHS(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eHT(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adV,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.Ao:B.iN,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eB,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eHU(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zo],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eY,B.cY,B.fw],s):A.a([B.aZ,B.aV,B.bW],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eT,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dl,B.L,h,h)
p=C.bCi(p.gwN(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.am,A.A(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fK,h,h,h)],u),B.m,h,B.bb,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.ax,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.Yv,h,h,1/0)
t=g?D.bfG:B.c
q=A.m(24)
p=A.I(w?B.aS.j(0.4):B.aV.j(0.3),B.q,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dk,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a73,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.e5G)
else{m=A.m(20)
l=A.I(B.aL,B.q,1)
o.push(A.p(h,A.pH(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bR,h,h,h))}}o.push(B.aQ)
n=w?B.aS:B.aV
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aS:B.aV).j(0.35),B.q,1)
k=w?B.N5:B.NC
k=A.X(k,w?B.aS:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.av,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a5,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.ic,h,h,h))
return A.c8(h,f,A.bl(!0,A.v(A.a([new A.D(A7.Mf,e,h),A.E(A.cd(A.v(A.a([s,B.aQ,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tC,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.r,h,B.y,h,E.ahN,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.arH.prototype={
R(){return new C.aE1(A.z1(B.Lv,B.nC,B.u1))}}
C.aE1.prototype={
q(){this.d.q()
this.a2()},
aLd(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iM(w,d)},
c8r(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.i4v(t)
if(s!=null){this.aLd(s)
return}r=C.hdq(t)
if(r!=null)q=A.cX(r,p,0)
else q=!1
if(q){this.aLd(B.a.i(B.a.b1(r,B.a.cJ(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eC(A.a([A.aH(t,t,t,t,A.X(u.f?B.r3:A3.Nb,t,t,t,t,t),t,t,t,new C.eHW(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Ao,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fnC,t,t,t,1,t,!0),q=A.z0(u.d,B.bS,u.gc8q()),p=A.m(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.q,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c8(r,B.w,new A.an(B.W,t,B.b0,B.r,A.a([q,p,A.ao(32,A.p(t,D.fmq,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.q,1),v,t,t,B.n),t,t,t,t,B.je,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aIP.prototype={
a4(){return"_WorksheetTab."+this.b}}
C.NJ.prototype={
R(){return new C.aE3(D.a9a,A.a([],x.D))},
bp(){return this.r.$0()},
gdZ(){return this.c}}
C.aE3.prototype={
gcyC(){return J.bDt(this.e,0,new C.eIE())},
a_(){this.a1()
$.aW.c2$.push(this)
this.vy()},
q(){$.aW.hF(this)
this.a2()},
iY(d){if(d===B.fu)this.vy()},
vy(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vy=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.CB(q.a.c).cM(0,B.jV),$async$vy)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eIA(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eIB(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vy,v)},
HC(d){return this.bHo(d)},
bHn(){return this.HC(null)},
bHo(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i6D(l,d),$async$HC)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lg(l,r,q,D.d42,new A.S(Date.now(),0,!1))
w=4
return A.b(C.KT(t.a.c,p),$async$HC)
case 4:o=f
w=5
return A.b(t.vy(),$async$HC)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.S(D.ePY)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.S(D.eRH)
else n.I(q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.Ee(m)
case 1:return A.h(u,v)}})
return A.i($async$HC,v)},
Ee(d){return this.ccn(d)},
ccn(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Ee=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hw(s,new C.arI(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Ee)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.KT(u.a.c,t),$async$Ee)
case 5:case 4:w=6
return A.b(u.vy(),$async$Ee)
case 6:return A.h(null,v)}})
return A.i($async$Ee,v)},
vk(d){return this.bXc(d)},
bXc(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bBR(),$async$vk)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hw(r,D.aFx,!0,"NgmyWorksheetProjectScan",x.N),$async$vk)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bCj(q),$async$vk)
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
break}p=C.fZX(s)
w=15
return A.b(C.KT(t.a.c,p),$async$vk)
case 15:o=f
w=16
return A.b(t.vy(),$async$vk)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.S(D.eRM)
w=1
break}r.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.Ee(p)
case 1:return A.h(u,v)}})
return A.i($async$vk,v)},
Np(d){return this.bG3(d)},
bG3(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Np=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ca(null,null,!0,null,new C.eIl(d),s,null,!0,!0,x.y),$async$Np)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oB(t.a.c,A.a([],x.D)),$async$Np)
case 6:w=7
return A.b(t.vy(),$async$Np)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.eQ2)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Np,v)},
ccA(d){var w=this.c
w.toString
A.bR(B.K,null,new C.eIu(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b3G(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jt
else w=B.c
v=A.m(16)
u=A.I(p?B.dZ:B.bP,B.q,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.aB,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(r,A.v(A.a([s,B.ac,t,B.bB,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.br:B.bn,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vh,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
a_c(d,e){return this.cco(d,e)},
cco(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_c=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bR(B.K,null,new C.eIp(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a_c)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hmn(r,new C.eIq(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Nr(d,e),$async$a_c)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_c,v)},
b0E(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.ay
else t=h.a?B.aP:B.aB
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.v(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.br:B.bn,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aG(!1,B.a1,!0,u,A.aL(!1,u,!0,new A.D(B.B4,A.A(A.a([s,B.bf,t,A.X(B.ex,w?B.br:B.bn,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag)},
cje(d,e,f,g,h,i){return this.b0E(!1,d,e,f,g,h,i)},
Nr(d,e){return this.bGd(d,e)},
bGd(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Nr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.l1(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Nr)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bAz(t.a.c,d.a),$async$Nr)
case 6:w=7
return A.b(t.vy(),$async$Nr)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Nr,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tF(o),m=o?B.bY:B.iN
if(q.f)o=D.b4r
else{w=q.bAD(n)
v=q.bWi(n)
u=q.gbxK()
if(o)t=B.jt
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aQ,new C.Fe(A.p(p,A.A(A.a([q.aAd(N.MN,"Projects",n,D.a9a),q.aAd(B.vt,"Cashier",n,D.aUz),q.aAd(B.FB,"Family Tree",n,D.fWS)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ep,0.95,u,p),B.by],r)
w=q.d
if(w===D.a9a){w=J.ad(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.aB,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b6,new C.awp(q.gaPn(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aA,q.cjg(n)],r))}else{o=q.a
if(w===D.aUz)u.push(new C.anJ(o.c,n,p))
else{w=q.r
u.push(new C.aoQ(o.c,o.d,o.e,o.f,new C.eIH(q),new C.eII(q),new A.cx(w,x.b4)))}}o=A.cd(A.v(u,B.F,p,B.e,B.j,0,B.p),B.r,p,B.y,p,Ae.M8,p,p,B.ah)}return A.c8(p,m,A.bl(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bAD(d){var w=null,v=A.m(8),u=d.a,t=A.X(R.ZM,u?B.br:B.bn,w,w,w,16)
return A.aL(!1,v,!0,new A.D(B.kN,A.A(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.br:B.bn,w,w,w,w,w,w,w,w,14,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eIi(this),w,w,w,w,w,w,w)},
gbxK(){switch(this.d.a){case 0:return D.a8s
case 1:return D.fND
case 2:return D.a8t}},
bWi(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cx,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.bLH,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bf,D.bwQ,A.aG(!1,B.a1,!0,w,A.aL(!1,A.m(12),!0,A.p(w,D.bJe,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eIm(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.m(12)
return new C.Fe(A.p(w,A.v(A.a([new A.D(O.M0,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.d(A.Ax(this.gcyC()),w,w,w,w,w,w,D.f7l,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.vg,B.je,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.fNC,w)},
aAd(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aV:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.q,2):A.I(B.K,B.q,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.br:B.bn
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.br:B.bn
return A.E(A.aG(!1,B.a1,!0,u,A.aL(!1,s,!0,A.dj(u,A.A(A.a([w,B.ec,new A.dq(1,B.cn,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.bb,B.j,0,u,u),u,u,B.ct,new A.o(r,u,p,q,o,u,B.n),B.ix,u,u,u,B.Mb,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eID(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),1)},
cjg(d){var w,v,u,t,s,r,q=this,p=null
if(J.cm(q.e)){w=d.a
v=w?B.dX:B.c
u=A.m(15)
t=A.p(p,D.bJj,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eT,28)],x.V),D.bV2,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.aB,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Fe(A.p(p,A.v(A.a([t,B.d5,s,B.N,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.br:B.bn,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.e1,A.A(A.a([A.E(q.aQX(B.iX,"Scan QR",new C.eIx(q),d),1),B.av,A.E(q.aQX(M.yi,"Upload file",new C.eIy(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aA,A.bH(D.fxw,q.gaPn(),A.bm(B.aV,p,p,p,B.c,B.fN,p,p,new A.b7(A.m(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.btB,1.05,D.a8s,p)}w=J.b6(q.e,new C.eIz(q,d),x.l)
w=A.B(w,w.$ti.k("ak.E"))
return new C.Fe(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bT,1,D.a8s,p)},
aQX(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aV.j(0.45),B.q,1)
return A.aG(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(w,A.v(A.a([A.X(d,B.aZ,w,w,w,26),B.N,A.d(e,w,w,w,w,w,w,D.f5N,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.agw,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)},
cjf(d,e){var w,v,u=null,t=e.a,s=t?B.dX:B.c,r=A.m(14),q=A.I(t?B.dZ:B.bP,B.q,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.ek,10)],x.V),o=A.m(14),n=t?B.br:B.bn
n=A.bw(B.V_,new A.fG(1.7777777777777777,C.aPp(!0,B.fv,1/0,N.MN,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.aB,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.d(""+d.d.length+" budget items \xb7 "+A.Ax(d.gwN()),u,u,u,u,u,u,D.f3W,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aG(!1,B.a1,!0,u,A.aL(!1,o,!0,A.v(A.a([n,new A.D(B.bC,A.A(A.a([v,A.aH(u,u,u,u,A.X(Af.Nq,t?B.br:B.bn,u,u,u,u),u,u,u,new C.eIv(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eIw(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e4,u,u,u,1/0)}}
C.bwC.prototype={}
C.qT.prototype={
ag(){var w=this,v=w.c,u=w.d
return A.F(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcRO(){var w,v,u,t,s=this.c
if(s===B.k.jY(s))w=B.o.u(B.k.N(s))
else{v=B.k.aa(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aK(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lg.prototype={
gwN(){return B.d.cI(this.d,0,new C.cvM())},
ag(){var w=this,v=w.d,u=A.U(v).k("K<1,a4<n,@>>")
v=A.B(new A.K(v,new C.cvL(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
baJ(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lg(w.a,w.b,v,u,w.e)},
baq(d){return this.baJ(d,null)},
Sg(d){return this.baJ(null,d)}}
C.Hg.prototype={
a4(){return"FamilyGender."+this.b}}
C.hW.prototype={
ag(){var w=this
return A.F(["id",w.a,"name",w.b,"gender",C.hie(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aCT(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hW(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ak5.prototype={
a4(){return"FamilyTreeAccessRole."+this.b}}
C.kB.prototype={
ganN(){var w=this.f
return new A.a2(w,new C.bN_(),A.U(w).k("a2<1>")).gM(0)},
ag(){var w=this,v=w.f,u=A.U(v).k("K<1,a4<n,@>>")
v=A.B(new A.K(v,new C.bMZ(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hXY(w.y)],x.N,x.z)},
ys(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kB(w.a,v,u,t,s,r,w.r,q,p,o)},
baI(d,e){var w=null
return this.ys(w,w,d,e,w,w,w,w)},
cHt(d,e,f,g,h,i,j){return this.ys(d,e,f,g,h,i,j,null)},
aCY(d,e){var w=null
return this.ys(w,w,w,d,w,w,e,w)},
cFX(d){var w=null
return this.ys(w,w,w,w,w,w,d,w)},
cGk(d){var w=null
return this.ys(w,w,w,w,w,w,w,d)},
aCK(d){var w=null
return this.ys(w,w,w,w,d,w,w,w)},
cGZ(d,e,f){var w=null
return this.ys(w,d,w,e,w,w,f,w)},
cFK(d){var w=null
return this.ys(w,w,d,w,w,w,w,w)},
cGx(d,e){var w=null
return this.ys(d,w,w,w,w,e,w,w)}}
C.cvN.prototype={
a4(){return"WrapAlignment."+this.b}}
C.cvO.prototype={
a4(){return"WrapCrossAlignment."+this.b}}
C.aG6.prototype={}
C.b7L.prototype={
by(d){this.a=d.a
this.b=d.b},
cT(d){var w=new C.b7L()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b7K.prototype={
gw7(){return!0},
gFK(){return this.z.b<this.b.length},
aSz(d){switch(0){case 0:return d.a.c}},
aSg(d){switch(0){case 0:return d.a.d}},
bPK(d,e){switch(0){case 0:return new A.hI(d,e)}},
bP7(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h1(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iC(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.H_(b4)
switch(0){case 0:v=b5.b
u=new A.ky(0,v,0,1/0)
t=w===B.SY
break}s=A.a([],x.gZ)
r=A.T(x.cM,x.S)
for(b3=b1.z,q=B.d.fL(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.L)(q),++h){g=q[h]
g.h1(b4,u,!0)
f=b1.aSz(g)
f.toString
e=b1.aSg(g)
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
a8=b1.aSz(g)
e=b1.aSg(g)
e.toString
a9=b1.bP7(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bPK(a6,a3+a9)
b0=g.a
g.a=new A.iC(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fY(d){var w,v,u,t,s,r=this
r.lf(d)
w=d.b
w.i3()
v=A.dp()
u=r.a
v.e6(u.a,u.b,0,1)
w.oR(0,v)
for(u=r.z,u=B.d.dq(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].fY(d)
w.ne(0)},
Gf(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
i3(){return this.z}}
C.buS.prototype={}
var z=a.updateTypes(["az<~>()","R(hW)","R(kB)","~()","R(n9)","a4<n,@>(kB)","H(kB,kB)","n(hW)","kB(a4<@,@>)","R(lg)","R(u7)","n9(a4<@,@>)","u7()","H(lg,lg)","hW(a4<@,@>)","a4<n,@>(hW)","R(qT)","az<~>(lg)","eD<n?>(hW)","H(hW,hW)","n?(hW)","a4<n,@>(n9)","Zs(Y)","n(n)","acF(Y)","r(ob)","H(n9,n9)","hW(hW)","cL(bv<n,Fq>)","cL(JH)","~(hW)","H?(hW)","hW()","ai<hW>()","R(u6)","R(JH)","D(hW)","~(Hg)","R(aee)","r(Hg,n,a_)","YR(Y)","bv<n,ai<a4<n,@>>>(n,ai<n9>)","~(H)","+count,id,name(H,n,n)(kB)","kB(kB)","ZN(Y)","ZO(Y)","R(lx)","lx()","n(kB)","a0y(Y)","Yr(Y)","Yq(Y)","YP(Y)","YT(Y)","r(qT)","ad_(Y)","~(lV)","az<~>([n?])","N(N,lg)","r(lg)","N(N,qT)","a4<n,@>(qT)","qT(a4<@,@>)","Yp(Y)","Sh(Y)","cq(Hf)","lg(a4<@,@>)","u6()","n(lg)","a4<n,@>(lg)","n(S)","H(hW)","kB(a4<n,@>)","XZ(Y)"])
C.fxD.prototype={
$1(d){return d.a+" "+d.b},
$S:117}
C.fxC.prototype={
bjO(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qK(s,d,B.hn,E.EY),$async$$1)
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
$1(d){return this.bjO(d)},
$S:297}
C.fxE.prototype={
$1(d){return d.b},
$S:117}
C.fGP.prototype={
$1(d){var w=null
return A.eI(w,B.K,new F.P5(this.a,this.b,w),w,w,0,B.Yb,B.d0,w,w,w)},
$S:47}
C.fmH.prototype={
$1(d){return d!=null},
$S:234}
C.fmI.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:234}
C.fmN.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:173}
C.fvm.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fa(d,w,w,w,A.h2(w,B.rt,w,w,w,w,w,w,w,B.ds,w,w,10.5,w,B.ej,w,!0,w,w,w,w),w),u=f?B.ej:B.vo
return new A.nH(D.bpe,A.a9d(A.a([new A.fO(130,w,v),new A.yJ(1,B.Fu,A.fa(e,w,w,w,A.h2(w,g==null?D.e7Y:g,w,w,w,w,w,w,w,B.ds,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.xg,B.lp))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1907}
C.fvl.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vk(999)
f=A.wS(A.ls(h,A.fa("Cashier",h,h,h,A.h2(h,D.za,h,h,h,h,h,h,h,B.ds,h,h,10,h,B.ej,h,!0,h,h,h,h),h),h,new A.kz(D.e7P,h,f,B.hE,h),h,h,D.bpI,h))
w=A.wS(A.fa("Debt receipt",h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.ds,h,h,22,h,B.ej,h,!0,h,h,h,h),h))
v=A.wS(A.fa(C.wD(new A.S(Date.now(),0,!1),!0),h,h,h,D.a78,h))
u=A.vk(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fa(s,h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.ds,h,h,14,h,B.ej,h,!0,h,h,h,h),h)
r=A.fa("Person who owes",h,h,h,D.a78,h)
q=A.vk(10)
p=x.C
u=A.ls(h,A.yE(A.a([s,new A.fO(h,2,h),r,new A.fO(h,10,h),A.ls(h,A.yE(A.a([A.fa("Amount owed",h,h,h,D.a78,h),new A.fO(h,2,h),A.fa(A.Ax(t.c),h,h,h,A.h2(h,D.za,h,h,h,h,h,h,h,B.ds,h,h,20,h,B.ej,h,!0,h,h,h,h),h)],p),B.qR,B.lp),h,new A.kz(B.oZ,h,q,B.hE,h),h,h,D.boV,1/0)],p),B.qR,B.lp),h,new A.kz(E.aGN,h,u,B.hE,h),h,h,D.bqJ,1/0)
q=new A.nq(D.e7S,0.9,B.kF)
r=A.vk(12)
s=i.c
o=s.$2("Original due",C.wD(t.r,!1))
n=s.$2("Current due",C.wD(t.f,!1))
m=i.d
l=new A.nq(m,1.1,B.kF)
k=A.vk(8)
j=i.a
k=A.a([o,n,new A.fO(h,6,h),A.ls(h,A.wS(A.fa(t.gaJJ(),h,h,h,A.h2(h,m,h,h,h,h,h,h,h,B.ds,h,h,11,h,B.ej,h,!0,0.5,h,h,h),h)),h,new A.kz(h,new A.ps(l,l,l,l),k,B.hE,h),h,h,D.bpQ,1/0),new A.fO(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.za))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.za))
else{n=A.fa("Missed days ("+n+")",h,h,h,A.h2(h,B.rt,h,h,h,h,h,h,h,B.ds,h,h,10.5,h,B.ej,h,!0,h,h,h,h),h)
m=A.U(o).k("K<1,RQ>")
o=A.B(new A.K(o,new C.fvk(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fO(h,4,h),n,new A.fO(h,6,h),new C.b7K(5,5,new C.b7L(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fO(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fO(h,8,h),w,new A.fO(h,3,h),v,new A.fO(h,16,h),u,new A.fO(h,10,h),A.ls(h,A.yE(k,B.xg,B.lp),h,new A.kz(h,new A.ps(q,q,q,q),r,B.hE,h),h,h,B.agI,1/0)],p)
w=j.a
if(w!=null){v=new A.nq(B.HX,1,B.kF)
B.d.v(f,A.a([new A.fO(h,16,h),A.fa("Debtor signature",h,h,h,A.h2(h,B.rt,h,h,h,h,h,h,h,B.ds,h,h,10,h,B.ej,h,!0,h,h,h,h),h),new A.fO(h,6,h),A.ls(h,new A.Hw(w,B.Va,h,h),h,new A.kz(h,new A.ps(v,v,v,v),A.vk(6),B.hE,h),82,h,B.Md,1/0)],p))}f.push(new A.fO(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fa(w,h,h,h,D.eXS,h))
f.push(new A.fO(h,18,h))
f.push(A.wS(A.fa("NGMY.ORG",h,h,h,A.h2(h,D.za,h,h,h,h,h,h,h,B.ds,h,h,14,h,B.ej,h,!0,1.8,h,h,h),h)))
return f},
$S:357}
C.fvk.prototype={
$1(d){var w=null,v=new A.nq(D.HY,0.7,B.kF),u=A.vk(999)
return A.ls(w,A.fa(C.wD(d,!1),w,w,w,A.h2(w,D.HY,w,w,w,w,w,w,w,B.ds,w,w,9.5,w,B.ej,w,!0,w,w,w,w),w),w,new A.kz(w,new A.ps(v,v,v,v),u,B.hE,w),w,w,D.buZ,w)},
$S:1908}
C.c11.prototype={
$1(d){var w=null,v=B.bI.j(0.08),u=A.m(999),t=A.I(B.bI.j(0.28),B.q,1)
return A.p(w,A.d(C.wD(d,!1),w,w,w,w,w,w,D.f3r,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eF,w,w,w)},
$S:1909}
C.fHk.prototype={
$1(d){var w=null,v=A.aI(d,B.bU,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bMz,w,w,w,new C.fHh(d),w,w,w,w,w,B.cb),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eI(w,B.K,new A.cS(new A.aY(0,380,0,v.a.b*0.9),A.aG(!1,B.a1,!0,u,new A.D(B.Y1,A.v(A.a([new A.bI(B.a7,w,w,t,w),new A.dq(1,B.cn,A.cd(A.v(A.a([new A.ev(new C.aXM(r,w),s),B.S,A.A(A.a([A.E(A.ey(B.yt,D.ftU,new C.fHi(s,r,d),A.dg(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f_,w,new A.b7(A.m(14),B.Y),new A.ay(q,1,B.q,-1),w,w,w,w)),1),B.ab,A.E(A.dk(B.a0l,D.fqv,new C.fHj(r,d),A.bm(B.aZ,w,w,w,B.c,w,B.f_,w,new A.b7(A.m(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.r,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.aB,0,w,w,w,w,w,B.ag),w),w,w,0,Aj.Yo,B.d0,w,w,w)},
$S:47}
C.fHh.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fHi.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.ak$.x.h(0,t.a)
m=m==null?null:m.gb8()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lX(2.5),$async$$0)
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
return A.b(A.rP(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fHj.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fBX(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.S(A.b2(null,null,null,null,null,B.r,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fHc.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eI(w,B.aB,A.v(A.a([new A.D(D.bqy,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nu,w,w,w),1),A.aH(w,w,w,w,B.ln,w,w,w,new C.fHa(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dq(1,B.cn,new A.D(B.fV,A.bw(A.m(14),A.fL(t,B.A,w,w,B.cl,B.du,!1,w,!1,w,w),B.aq),w),w),new A.D(B.LR,new A.a7(1/0,w,A.dk(B.oO,D.aQo,new C.fHb(t,this.c,d),A.bm(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.M3,B.d0,w,new A.b7(v,B.Y),w)},
$S:47}
C.fHa.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fHb.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rP(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fHo.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eI(w,B.aB,new A.D(D.bqG,A.v(A.a([A.A(A.a([D.bw_,A.aH(w,w,w,w,B.ln,w,w,w,new C.fHm(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.N,new A.ev(A.bw(A.m(14),A.p(w,A.b3(w,w,w,new C.b9U(s.ax,w),B.au),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a7(1/0,w,A.dk(B.oO,D.aQo,new C.fHn(t,s,d),A.bm(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(v,B.Y),w)},
$S:47}
C.fHm.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fHn.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.ak$.x.h(0,t.a)
n=n==null?null:n.gb8()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lX(2.5),$async$$0)
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
return A.b(A.rP(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fqh.prototype={
$1(d){return d.a===this.a},
$S:253}
C.dFd.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dEZ.prototype={
bj1(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dX:B.c
s=u.a
w=2
return A.b(A.bR(t,null,new C.dF1(s,q,e),p,!0,!0,!1,B.Ic,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dF2(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bj1(d,e)},
$S:1910}
C.dF1.prototype={
$1(d){var w,v=null,u=this.c===B.vY,t=u?D.da_:D.d6e
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.aB,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bl(!0,new A.D(K.ahi,A.v(A.a([u,B.at,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.br:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.ie(!0,v,v,B.y,L.aNz,new C.dF0(this.a,w,t,d),t.length,v,B.dQ,B.ah,!0)],x.p),B.aj,v,B.e,B.Q,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:26}
C.dF0.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cY.j(0.14)
else w=t.b.a.d.a?B.M:B.aP
v=A.m(14)
if(q)u=B.cY
else u=(t.b.a.d.a?B.br:B.bn).j(0.16)
u=A.I(u,B.q,q?1.6:1)
return A.aL(!1,p,!0,A.p(B.A,C.aXL(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dF_(t.d,r),s,s,s,s,s,s,s)},
$S:198}
C.dF_.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.dF2.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dEX.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:91}
C.dEY.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cH(B.ct,e,v)
return new A.cZ(e,!1,A.ik(B.A,A.av(A.aG(!1,B.a1,!0,v,new A.e0(new C.dEW(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ag),v,v,v),v,new A.bf(t,new A.bo(0.96,1,u),u.k("bf<bJ.T>"))),v)},
$S:30}
C.dEW.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bU,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dX:B.c,f=A.m(14),e=A.I((h?B.br:B.bn).j(0.16),B.q,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aL(!1,v,!0,new A.D(B.ep,A.X(B.cC,i.a.d.a?B.br:B.bn,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dEH(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aRt("Name")
r=l.a
q=r.d==null?k:new C.dEI(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bm:B.lG
n=A.I(B.cY.j(0.35),B.q,1)
m=r.d
t=A.aM(k,B.T,h,k,!0,B.r,k,A.aN(),w,k,k,k,k,k,2,s.baB(new A.D(B.fy,A.aL(!1,p,!0,A.p(B.A,C.aXL(m==null?"\ud83d\udc64":A.fwa(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.co,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.ky,k,B.a6V,k,k)
v=A.a([v,B.ac,t,B.N,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bn,k,k,k,k,k,k,k,k,11.5,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.A(A.a([A.E(i.aS6("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dEJ(r,a0),r.d===B.vY),1),B.ab,A.E(i.aS6("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dEO(r,a0),r.d===B.a3T),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.N,new A.bI(B.a3,k,k,A.he(D.bKX,D.fsh,new C.dEP(r,l.e,a0),A.fv(k,k,k,k,k,k,k,k,k,k,k,B.cY,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cb)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.ua(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.f,k,k,k,k,k,2,i.aRu("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ai,k,k,s,k,k,B.dV,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.M:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.br:B.bn).j(0.22),B.q,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wD(r.a,!1)
v.push(A.aG(!1,B.a1,!0,q,A.aL(!1,p,!0,A.p(k,A.A(A.a([A.E(A.v(A.a([t,B.bB,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bHO],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bk,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dEQ(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ag))
if(!h)B.d.v(v,A.a([B.N,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.r,k,k,k,k,k,2,i.aRt("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b__(r.b.length!==0,B.mo,new C.dER(r,i,a0),new C.dES(r,a0),"Upload from gallery","ID photo"))
v.push(i.b__(r.c.length!==0,D.bB6,new C.dET(r,i,d,a0),new C.dEU(r,a0),"Camera or gallery","Selfie"))
v.push(B.N)
t=l.w
v.push(new Ah.a74("Signature (optional)",t,new C.dEV(a0),new C.dEK(a0,t),new C.dEL(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.br:B.bn
s=(i?B.br:B.bn).j(0.28)
s=A.E(A.dT(E.aQh,new C.dEM(d),A.dg(k,k,k,k,k,k,k,k,k,t,k,k,B.vb,k,new A.b7(A.m(10),B.Y),new A.ay(s,1,B.q,-1),k,k,k,k)),1)
t=A.bm(B.cY,k,k,k,B.c,k,B.vb,k,new A.b7(A.m(10),B.Y),k,k,k)
v.push(A.A(A.a([s,B.ab,A.E(A.bH(A.d(h?"Save":"Update",k,k,k,k,k,k,B.uz,k,k,k),new C.dEN(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cd(A.v(v,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.vk,B.je,k,k,360)},
$S:179}
C.dEH.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dEI.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dEJ.prototype={
$0(){return this.b.$1(new C.dEG(this.a))},
$S:0}
C.dEG.prototype={
$0(){var w=this.a
w.d=B.vY
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dEO.prototype={
$0(){return this.b.$1(new C.dEF(this.a))},
$S:0}
C.dEF.prototype={
$0(){var w=this.a
w.d=B.a3T
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dEP.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dEQ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wH(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dEE(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEE.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcj(),w.gce(),w.gcu(),0,0,0,0,0)},
$S:0}
C.dER.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.OY(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dED(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dED.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dES.prototype={
$0(){return this.b.$1(new C.dEC(this.a))},
$S:0}
C.dEC.prototype={
$0(){return this.a.b=""},
$S:0}
C.dET.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dX:B.c
w=3
return A.b(A.bR(q,null,new C.dEA(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.OY(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dEB(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEA.prototype={
$1(d){var w=null
return A.bl(!0,A.v(A.a([A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.amm,w,w,w,w,new C.dEu(d),!1,w,w,w,w,w,w,w,D.fiP,w,w,w),A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.amk,w,w,w,w,new C.dEv(d),!1,w,w,w,w,w,w,w,D.fpz,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.af,!0,!0)},
$S:26}
C.dEu.prototype={
$0(){A.a5(this.a,!1).O("camera")
return null},
$S:0}
C.dEv.prototype={
$0(){A.a5(this.a,!1).O("gallery")
return null},
$S:0}
C.dEB.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dEU.prototype={
$0(){return this.b.$1(new C.dEz(this.a))},
$S:0}
C.dEz.prototype={
$0(){return this.a.c=""},
$S:0}
C.dEV.prototype={
$0(){return this.a.$1(new C.dEy())},
$S:0}
C.dEy.prototype={
$0(){},
$S:0}
C.dEK.prototype={
$0(){return this.a.$1(new C.dEx(this.b))},
$S:0}
C.dEx.prototype={
$0(){return B.d.a9(this.a)},
$S:0}
C.dEL.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aha(u.a,null,null,new C.dEw(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEw.prototype={
$4(d,e,f,g){this.a.$1(new C.dEt(this.b,d))},
$S:438}
C.dEt.prototype={
$0(){var w=this.a
B.d.a9(w)
B.d.v(w,this.b)},
$S:0}
C.dEM.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dEN.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.S(D.eTD)
return}if(w.a.d==null){w.c.I(x.q).f.S(D.eQz)
return}A.a5(w.c,!1).O(!0)},
$S:0}
C.dFg.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:91}
C.dFh.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dX:B.c,n=A.m(14),m=A.I((p?B.br:B.bn).j(0.16),B.q,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.aB,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Ax(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.br:B.bn,r,r,r,r,r,r,r,r,13,r,r,B.a5,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.yU(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.yU(r).length>0?B.bI:B.cY,r,r,r,r,r,r,r,r,12,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.br:B.bn
t=(q?B.br:B.bn).j(0.28)
s=x.p
return new A.cZ(e,!1,A.av(A.aG(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.N,v,u,B.aA,A.A(A.a([A.E(A.dT(B.nv,new C.dFe(d),A.dg(r,r,r,r,r,r,r,r,r,w,r,r,B.jy,r,new A.b7(A.m(10),B.Y),new A.ay(t,1,B.q,-1),r,r,r,r)),1),B.ab,A.E(A.bH(D.fpY,new C.dFf(d),A.bm(B.cY,r,r,r,B.c,r,B.jy,r,new A.b7(A.m(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.B7,O.M0,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ag),r,r,r),r)},
$S:30}
C.dFe.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dFf.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dFa.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dFb(r),p=r.a.d.a,o=p?B.dX:B.c,n=A.m(14),m=A.I((p?B.br:B.bn).j(0.14),B.q,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.aB,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Ax(l.c),s,s,s,s,s,s,D.f4U,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iy((r.a.d.a?B.br:B.bn).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a_6,"View receipt",new C.dF3(r,d,l))
u=l.x!=null
t=u?B.r8:B.pP
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bqD,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dF4(r,d,l)),q.$3$icon$label$onTap(B.Bo,"Edit",new C.dF5(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mo,"View / download ID",new C.dF6(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bB5,"View / download selfie",new C.dF7(r,d,l)))
if(l.gaEA())p.push(q.$3$icon$label$onTap(A6.a0c,"View / download signature",new C.dF8(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bI,B.e5,"Delete",new C.dF9(r,d,l)))
p.push(B.at)
return A.bl(!0,new A.D(B.vg,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:26}
C.dFb.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.aB
else w=d
return A.aL(!1,v,!0,new A.D(B.eP,A.A(A.a([A.X(e,w,v,v,v,20),B.bf,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1911}
C.dF3.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fHg(w,this.c)},
$S:0}
C.dF4.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.RC(this.c)},
$S:0}
C.dF5.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.CS(this.c)},
$S:0}
C.dF6.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCH(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dF7.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCH(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dF8.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fHl(w,this.c)},
$S:0}
C.dF9.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.NC(0,this.c)},
$S:0}
C.dFi.prototype={
$1(d){return d.x==null},
$S:253}
C.dFj.prototype={
$1(d){return d.x!=null},
$S:253}
C.dFk.prototype={
$2(d,e){return d+e.c},
$S:1912}
C.dFl.prototype={
$0(){return this.a.bye()},
$S:0}
C.dFc.prototype={
$0(){return this.a.ae7(this.b)},
$S:0}
C.fqR.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fqS.prototype={
$0(){return B.d.gL(D.a1o)},
$S:z+68}
C.d52.prototype={
$0(){var w=this.a
return w.m(new C.d50(w,this.b))},
$S:0}
C.d50.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d51.prototype={
$0(){},
$S:0}
C.d53.prototype={
$0(){var w=this.a.gbX0()
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.fsV.prototype={
$1(d){return C.h31(A.a1(d,x.N,x.z))},
$S:z+11}
C.fsW.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fsX.prototype={
$2(d,e){var w=A.c7(d.a,null),v=A.c7(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+26}
C.fFV.prototype={
$1(d){return d.ag()},
$S:z+21}
C.fO0.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fq8.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bMV.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f0(e,v)?v:null},
$S:1913}
C.fGt.prototype={
$1(d){var w=this
return new C.YR(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d5I.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d5H(w,d))},
$S:z+66}
C.d5H.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5w.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cy(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d5t.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d54.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d55.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d5x.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d5d.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.dX:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ek(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.d5b(d),w,w),A.bH(B.wh,new C.d5c(d),A.bm(B.mT,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:20}
C.d5b.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d5c.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d5e.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d5u.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d5v.prototype={
$0(){return B.d.gL(D.yD)},
$S:z+12}
C.d59.prototype={
$1(d){var w=this.a,v=w.y,u=w.gya(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Sh(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d5a.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5f.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Yp(v,u,J.ad(w.d),null)},
$S:z+64}
C.d5g.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5G.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aE(s,new C.Y7(r.y,r.gya(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d5E(r),s,s,s,s,s,s,!1,B.a8)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b9i(v,e,w,u,t,r.gbOd(),C.hid(r.y.Q),r.gya(0),s)
w=t}return A.c6(q,new C.d5F(r,e),new A.D(B.Yg,w,s))},
$S:1914}
C.d5F.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd_(t).ay){t=this.b
u=x.cy.a(B.d.gd_(u.f.f)).guC(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dp()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fA(v*3.141592653589793*0.5)
return A.fs(B.a3,A.dc(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.d5E.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFF(B.pD,B.iy)},
$S:0}
C.d5q.prototype={
$0(){var w=this.a
return w.m(new C.d5p(w))},
$S:0}
C.d5p.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d5r.prototype={
$0(){var w=this.a.c
w.toString
A.a5(w,!1).O(null)
return null},
$S:0}
C.d56.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jP.j(0.5),r=x.p,q=A.a([D.fhr,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cm(p.d)?"Write this book":"Write a new book"
q.push(p.Yn(d,B.dW,w,J.cm(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Yn(d,L.akf,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cy(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cB,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kf.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cB,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kf.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Yn(d,A0.aln,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Yn(d,B.pV,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Yn(d,B.pV,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eI(u,E.Az,A.bl(!0,new A.D(A5.xA,A.v(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.ahH,B.d0,u,new A.b7(t,new A.ay(s,1.4,B.q,-1)),u)},
$S:47}
C.d5s.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.d5j.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cy(w.d)
return new C.YT(v,J.cy(w.d),w.r+1,null)},
$S:z+54}
C.d5k.prototype={
$1(d){var w=null
return A.oh(!1,A.ek(w,w,w,E.Az,new A.kf(this.a,new C.d5i(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:333}
C.d5i.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a6B,B.od,A.E(A.d(e,w,w,w,w,w,w,B.iG,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:750}
C.d5l.prototype={
$0(){return this.a.a=!1},
$S:49}
C.d5m.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:187}
C.d5n.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5o.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.AG(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.R6(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d5h(s,t))
w=4
return A.b(s.kT(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d5h.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5z.prototype={
$1(d){var w=null
return A.oh(!1,A.ek(w,w,w,E.Az,new A.kf(this.a,new C.d5y(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:333}
C.d5y.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a6B,B.od,A.E(A.d(e,w,w,w,w,w,w,B.iG,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:750}
C.d5A.prototype={
$0(){return this.a.a=!1},
$S:49}
C.d5B.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:187}
C.d5C.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:187}
C.d5D.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.AG(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kT(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d57.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bg5(B.pD,V.LF)},
$S:0}
C.d58.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFF(B.pD,V.LF)},
$S:0}
C.d7s.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d7t.prototype={
$1(d){var w=this.a
return w.m(new C.d7r(w))},
$S:9}
C.d7r.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d7u.prototype={
$1(d){var w=this.a
return w.m(new C.d7q(w))},
$S:9}
C.d7q.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d7v.prototype={
$1(d){var w=this.a
return w.m(new C.d7p(w))},
$S:9}
C.d7p.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d7w.prototype={
$0(){var w=this.a
return w.m(new C.d7o(w,this.b))},
$S:0}
C.d7o.prototype={
$0(){var w=this.b
this.a.d.saV(0,w)
return w},
$S:0}
C.d7x.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga11()
A.a5(this.b,!1).O(new A.bnV(w,v))},
$S:0}
C.d5X.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d5W.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.YP(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d60.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d6_.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b6i(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hD,v,v,v)
return A.ek(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.d5Y(d),v,v),A.bH(B.wh,new C.d5Z(d),A.bm(B.mT,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Az,w,v,v,v,v,D.fgl,v)},
$S:20}
C.d5Y.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d5Z.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d61.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d62.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.cd(A.bW(B.bz,r,B.bq,18,14),B.r,t,B.y,t,D.brx,t,t,B.ah)},
$S:338}
C.d5V.prototype={
$0(){return this.a.PE(0,this.b)},
$S:0}
C.d5U.prototype={
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
return w.d=w.go1().Fp(this.b.a)},
$S:0}
C.cYq.prototype={
$0(){var w=this.a
return w.m(new C.cY7(w,this.b))},
$S:0}
C.cY7.prototype={
$0(){var w=this.a
return w.d=w.go1().cFg(this.b)},
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
return w.d=w.go1().cFl(this.b.a)},
$S:0}
C.cYt.prototype={
$1(d){var w=this.a
return w.m(new C.cYi(w,d))},
$S:6}
C.cYi.prototype={
$0(){var w=this.a
return w.d=w.go1().cGf(this.b)},
$S:0}
C.cYu.prototype={
$1(d){var w=this.a
return w.d=w.go1().aCN(d)},
$S:2}
C.cYv.prototype={
$1(d){var w=this.a
return w.d=w.go1().cFo(d)},
$S:2}
C.cYx.prototype={
$1(d){var w=this.a
return w.d=w.go1().cGd(d)},
$S:2}
C.cYy.prototype={
$1(d){var w=this.a
return w.m(new C.cYh(w,d))},
$S:9}
C.cYh.prototype={
$0(){var w=this.a
return w.d=w.go1().cG4(this.b)},
$S:0}
C.cYz.prototype={
$0(){var w=this.a,v=w.go1(),u=B.a.i(w.gya(0).a.a),t=B.a.i(w.gaA1().a.a)
u=v.baS(B.a.i(w.gapT().a.a),t,u)
A.a5(this.b,!1).O(u)
return null},
$S:0}
C.dTg.prototype={
$0(){var w=this.a
w.vK()
w.a.bp()
w.a.pO()},
$S:0}
C.dTf.prototype={
$0(){var w=this.a
w.vK()
w.a.bp()
w.a.pO()},
$S:0}
C.dTi.prototype={
$0(){var w=this,v=w.b
if(J.cy(v)||J.cm(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dTj.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dTk.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dTe.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dTh.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dTm.prototype={
$0(){this.a.O7()
return null},
$S:0}
C.dTl.prototype={
$0(){return this.a.Ef(this.b)},
$S:0}
C.dSH.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.de,w,w,!0,w,w,new C.dSF(d),w,w),r=A.bm(B.bW,w,w,w,w,w,w,w,w,w,w,w)
return A.ek(A.a([s,A.bH(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dSG(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:20}
C.dSF.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dSG.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dSI.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cFK(this.b)},
$S:0}
C.dSC.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aRJ(w.b,w.c,w.d)},
$S:8}
C.dSa.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dSb.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSp.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Gb(t.a.c),$async$$0)
case 2:s=r.r9(q.dH(e,new C.dSn(t)))
if(s!=null&&t.c!=null)t.m(new C.dSo(t,s))
t.a.bp()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSn.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dSo.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSq.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dSr.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSB.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cGx(C.hin(w),w)},
$S:0}
C.dSz.prototype={
$1(d){return new A.e0(new C.dSy(this.a,this.b),null)},
$S:21}
C.dSy.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dX:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.br:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.am_,v,v,v,p>0?new C.dSu(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aQ,A.A(A.a([o,A.E(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.amz,v,v,v,new C.dSv(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.ek(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dSw(d),v,v),A.bH(B.pb,new C.dSx(d),A.bm(B.bW,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:167}
C.dSu.prototype={
$0(){return this.b.$1(new C.dSt(this.a))},
$S:0}
C.dSt.prototype={
$0(){return--this.a.a},
$S:0}
C.dSv.prototype={
$0(){return this.b.$1(new C.dSs(this.a))},
$S:0}
C.dSs.prototype={
$0(){return++this.a.a},
$S:0}
C.dSw.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dSx.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dSA.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cGk(this.a.a)
w.r.a9(0)},
$S:0}
C.dRZ.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ahi(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hc4(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dS_.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aCK(w)},
$S:0}
C.dSK.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.acF(this.b,w,this.c,null)},
$S:z+24}
C.dSE.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dX:B.c,t=A.m(20),s=A.X(B.lj,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.Q,0,B.p)
return A.ek(A.a([A.bH(D.fr4,new C.dSD(d),A.bm(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.bb,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:20}
C.dSD.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dS0.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dS1.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dS2.prototype={
$1(d){return d.a},
$S:z+7}
C.dS3.prototype={
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
C.dS7.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ahi(q)
w=A.U(q).k("a2<1>")
q=A.B(new A.a2(q,new C.dS5(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hc4(v.e,null,r,v.f,v.r,new C.dS6(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dS6.prototype={
$0(){return this.a.a9f(this.b)},
$S:0}
C.dS5.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dS8.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("K<1,hW>")
w=A.B(new A.K(w,new C.dS4(this.b),v),v.k("ak.E"))
u.d=t.aCK(w)},
$S:0}
C.dS4.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dSJ.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dSk.prototype={
$1(d){return d.length!==0},
$S:3}
C.dSl.prototype={
$1(d){var w=this
return new A.e0(new C.dSj(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dSj.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dX:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.br:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.br:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.K(o,new C.dSf(u,e,o),A.U(o).k("K<1,r>")))
p.push(B.N)
u=w.d
p.push(A.aM(v,B.T,!1,v,!0,B.r,v,A.aN(),u,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(12),B.dg),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ai,v,v,v,v,v,B.m1,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.an,v,v,v,v))
p=A.v(p,B.aj,v,B.e,B.Q,0,B.p)
t=w.a
return A.ek(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dSg(d),v,v),A.bH(B.J5,new C.dSh(t,u,o,e),A.bm(B.bW,v,v,v,v,v,v,v,v,v,v,v)),A.bH(D.few,new C.dSi(t,u,o,d),A.bm(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:167}
C.dSf.prototype={
$1(d){var w=null
return A.dL(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bOw,w,w,w,new C.dSe(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1917}
C.dSe.prototype={
$0(){return this.a.$1(new C.dSc(this.b,this.c))},
$S:0}
C.dSc.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dSg.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dSh.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dSd(w.c,u))
v.bO(0,B.c5)}},
$S:0}
C.dSd.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dSi.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a5(w.d,!1).O(!0)},
$S:0}
C.dSm.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cGZ(this.b,D.tE,C.G9(v,w.a.c))},
$S:0}
C.dSR.prototype={
$1(d){return d.as},
$S:z+1}
C.dSS.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iM(this.b,w)},
$S:0}
C.dST.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.i6k(v)
return w.Vl(v==null?null:v.a)},
$S:0}
C.dSU.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hJF(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gco(k)){k=A.aQ(1/0,e.a,e.b)
s=A.aQ(1/0,e.c,e.d)
l.cp4(new A.at(u,t),v.gbgW(),new A.at(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cMK:D.cLb
q=A.I(s?B.dq:D.b9T,B.q,1)
p=A.m(22)
o=A.bZ(0,A.b3(m,m,m,new C.bcG(s,m),B.au),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bw(p,new A.an(B.W,m,B.aa,B.r,A.a([o,A.bZ(0,A.uj(new A.Q(n,n,n,n),new A.a7(u,t,new C.bdz(l.d,v,l.f,w,new C.dSN(l),l.gc95(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.buZ(s,new C.dSO(l,e),new C.dSP(l,e),new C.dSQ(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.b_,B.b5,B.x,r,m,m),B.n),m,m,m,A1.agM,m,m,m,m)},
$S:223}
C.dSN.prototype={
$1(d){var w=this.a
w.m(new C.dSL(w,d))},
$S:2}
C.dSL.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.J(0,v)},
$S:0}
C.dSO.prototype={
$0(){var w=this.b
return this.a.b8x(1.25,new A.at(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dSP.prototype={
$0(){var w=this.b
return this.a.b8x(0.8,new A.at(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dSQ.prototype={
$0(){var w=this,v=w.b
return w.a.aRJ(new A.at(A.aQ(1/0,v.a,v.b),A.aQ(1/0,v.c,v.d)),new A.at(w.c,w.d),w.e.gbgW())},
$S:0}
C.dSV.prototype={
$0(){var w=this.a
return w.m(new C.dSM(w))},
$S:0}
C.dSM.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dS9.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fJ(new A.fC(s.c)),$async$$0)
case 2:t.xE("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d66.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bhh(u,C.hmr(v.c,u),new C.d65(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d65.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d67.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bkD(d.d,d.c,u.f.t(0,d.a),new C.d64(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d64.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fqV.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.r9(new A.cR(new A.a2(v,new C.fqW(d),w.k("a2<1>")),new C.fqX(),w.k("cR<1,n>")))},
$S:z+20}
C.fqW.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fqX.prototype={
$1(d){return d.a},
$S:z+7}
C.fqT.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fqU.prototype={
$1(d){return d.b},
$S:z+7}
C.fr_.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.r9(new A.cR(new A.a2(v,new C.fr0(d),w.k("a2<1>")),new C.fr1(),w.k("cR<1,n>")))},
$S:z+20}
C.fr0.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fr1.prototype={
$1(d){return d.a},
$S:z+7}
C.fqY.prototype={
$1(d){var w,v=A.et([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ai(0,w)&&v.J(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fqZ.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d69.prototype={
$0(){return this.a},
$S:z+32}
C.d6q.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ai(0,d)},
$S:259}
C.d6i.prototype={
$2(d,e){var w=this.a.cg(0,d,new C.d6j()),v=J.a6(w)
if(!v.t(w,e))v.J(w,e)},
$S:116}
C.d6j.prototype={
$0(){return A.a([],x.s)},
$S:751}
C.d6h.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f0(w,e)
return w===!0},
$S:332}
C.d6a.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d6g.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d6f.prototype={
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
C.d6b.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d6k.prototype={
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
if(r.a!==a9&&!B.d.b5(w,new C.d6l(r)))w.push(r)}}B.d.bn(w,new C.d6m(a8))
B.d.b0(w,new C.d6n())
q=C.hJE(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.evu],x.G))}a8=A.a([],x.s)
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
C.d6l.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d6m.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d6n.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.d6o.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a6(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a3(v).k("bc<2>")).cI(0,0,B.pi)+88-w.gL(n).a}else u=0
for(w=J.a6(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:696}
C.d6p.prototype={
$1(d){return 16+d*156},
$S:245}
C.d68.prototype={
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
C.d6c.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aI7(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:116}
C.d6d.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d6e.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:752}
C.d6r.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:752}
C.d6s.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:461}
C.d6t.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:189}
C.d6u.prototype={
$1(d){return d>=0.5},
$S:119}
C.f95.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hq(A.aL(!1,v,!0,new A.a7(38,38,A.X(d,this.a.c?B.c:B.cD,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1922}
C.eL0.prototype={
$1(d){var w=null,v=A.m(8),u=B.bW.j(0.12),t=A.m(8)
return new A.D(B.n8,A.aL(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.f0D,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.Mc,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eL_(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eL_.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dmj.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dmi.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.ns,B.L,w,w)
return A.ek(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.dmg(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.md,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dmh(d),w,w)],x.p),B.bb,B.AX,w,u,D.bsN,w,D.buJ,new A.b7(v,B.Y),w,w)},
$S:20}
C.dmg.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dmh.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dms.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dmt.prototype={
$1(d){var w=this.a
return w.m(new C.dmr(w,d))},
$S:z+37}
C.dmr.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmu.prototype={
$1(d){var w=null
return A.qe(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dmx.prototype={
$1(d){var w=this.a
return w.m(new C.dmq(w,d))},
$S:32}
C.dmq.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dmw.prototype={
$1(d){var w=null
return A.qe(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dmy.prototype={
$1(d){var w=this.a
return w.m(new C.dmp(w,d))},
$S:32}
C.dmp.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dmz.prototype={
$0(){var w=this.a
return w.m(new C.dmo(w))},
$S:0}
C.dmo.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dmA.prototype={
$0(){var w=this.a
return w.m(new C.dmn(w))},
$S:0}
C.dmn.prototype={
$0(){return++this.a.at},
$S:0}
C.dmB.prototype={
$0(){var w=this.a
return w.m(new C.dmm(w))},
$S:0}
C.dmm.prototype={
$0(){return--this.a.ax},
$S:0}
C.dmC.prototype={
$0(){var w=this.a
return w.m(new C.dml(w))},
$S:0}
C.dml.prototype={
$0(){return++this.a.ax},
$S:0}
C.dmD.prototype={
$1(d){var w=this.a
return w.m(new C.dmk(w,d))},
$S:9}
C.dmk.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dmv.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dmE.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bW.j(0.18)
else w=q.c.a?B.dX:B.c
v=A.m(12)
if(p)u=B.bW
else u=(q.c.a?B.dZ:B.bP).j(0.85)
u=A.I(u,B.q,p?1.5:1)
if(p)t=B.bW
else t=q.c.a?B.br:B.bn
t=A.X(f,t,r,r,r,18)
if(p)s=B.bW
else s=q.c.a?B.br:B.bn
return A.E(A.aG(!1,B.a1,!0,r,A.aL(!1,o,!0,A.dj(r,A.v(A.a([t,B.at,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bc,new A.o(w,r,u,v,r,r,B.n),B.eE,r,r,r,B.jy,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dmF(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
$S:z+39}
C.dmF.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dmO.prototype={
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
$1(d){return C.ak6(A.a1(d,x.N,x.z))},
$S:z+8}
C.c7C.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c7D.prototype={
$1(d){return C.h31(A.a1(d,x.N,x.z))},
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
$1(d){return d.cFX(C.G9(d,this.a))},
$S:z+44}
C.dT3.prototype={
$1(d){return C.tQ(d,this.a.a.c)},
$S:z+2}
C.dT4.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dT8.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dT9.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dT0.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZe(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yb("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.p0(r.c,r.e),$async$$0)
case 4:s.yb(p)
w=5
return A.b(s.Je(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dT1.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZe(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yb("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.p0(r.c,r.e),$async$$0)
case 4:s.yb(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dT2.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.UD(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.yb("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.yb("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.yb("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Je(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.aa(j)
o=r.a
if(o.c==null){w=1
break}o.yb(B.a.ed(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dT7.prototype={
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
break}if(p==null){s.yb("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a5(r,!1).c8(A.e9(new C.dT6(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.p0(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dT6.prototype={
$1(d){var w=this.b
return new C.ZN(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dT5.prototype={
$1(d){return D.fRD},
$S:z+46}
C.dTb.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dTc.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dTa(w,d)
return new A.D(B.db,new C.bdD(this.b,d.c,d.a,w,null),null)},
$S:1923}
C.dTa.prototype={
$0(){return this.a.X3(this.b.b)},
$S:0}
C.dSW.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dSX.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dSY.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dSZ.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dT_.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dTd.prototype={
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
C.dEl.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dEm.prototype={
$0(){return B.d.gL(D.a2N)},
$S:z+48}
C.dEn.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.X(this.b.d,B.c.j(0.95),w,w,D.cSW,44),w,w,w),w,w,new C.bip(u,t,v,w),B.au)},
$S:68}
C.fGW.prototype={
$1(d){return A.oL(new C.fGV(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:127}
C.fGV.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dX:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rs,24)],x.V),o=r?B.dZ:B.bP
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bW.j(0.18)],x.O)
w=A.p(t,D.bJ3,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a8(B.a3,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.aB,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.S,o,new A.D(E.ahL,A.A(A.a([w,B.bf,A.E(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.br:B.bn,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.E(A.ie(!0,t,e,B.y,D.eOM,new C.fGU(this.b,s),20,B.ahm,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kE,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:114}
C.fGU.prototype={
$2(d,e){var w=null,v=D.a2N[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.dZ:B.bP,B.q,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.ek,8)],x.V),p=A.m(15),o=A.E(new C.a5I(v.a,!0,w),1),n=s?B.jt:B.iQ,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aP:B.aB,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a1,!0,w,A.aL(!1,u,!0,A.eE(A.bw(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.br:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.lf,w,w,w)],l),B.aj,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fGT(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)},
$S:77}
C.fGT.prototype={
$0(){A.a5(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cfe.prototype={
$0(){return this.a.afa(this.b)},
$S:0}
C.fGi.prototype={
$1(d){return D.fNU},
$S:z+74}
C.fNM.prototype={
$1(d){var w=this
return new C.a0y(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fGn.prototype={
$1(d){return new C.Yr(this.a,null)},
$S:z+51}
C.fGm.prototype={
$1(d){return D.fOT},
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
else v=this.b.a?B.dZ:B.bP
return A.u9(u,u,B.aZ,r,u,new C.cwn(t,d),B.B8,s,w,u,new A.ay(v,1,B.q,-1),B.cb)},
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
C.f8y.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a5(this.b,!1).O(w)},
$S:2}
C.f8z.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.f8A.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a5(this.b,!1).O(w)},
$S:0}
C.f8w.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbxn()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b3(new A.D(D.buI,new A.ev(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.buO(p,v,this.b.a,u,t,r),r,r,B.au)},
$S:68}
C.f8x.prototype={
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
return A.aG(!1,B.a1,!0,p,A.aL(!1,v,!0,A.eE(D.e5R,r,new A.o(r,r,A.I(B.c.j(0.4),B.q,1.5),u,r,new A.a8(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
$S:140}
C.fEY.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:67}
C.eIa.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eI1.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eI2.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eI8.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e0(new C.eI7(w,this.b),null)},
$S:21}
C.eI7.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dX:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aB,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eI(w,u,new A.D(B.ahF,A.v(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.h8S(new C.eI4(r,e),r.a),B.aA,A.A(A.a([A.E(A.dT(B.de,new C.eI5(d),w),1),B.av,A.E(A.bH(B.TG,new C.eI6(r,d),A.bm(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.aj,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(t,B.Y),w)},
$S:98}
C.eI4.prototype={
$1(d){return this.b.$1(new C.eI3(this.a,d))},
$S:32}
C.eI3.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eI5.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eI6.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.eI9.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Sg(this.b)},
$S:0}
C.eHX.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.baq(w)},
$S:0}
C.eI0.prototype={
$1(d){return this.bju(d)},
bju(d){var w=0,v=A.j(x.H),u,t=this,s
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
C.eI_.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("a2<1>")
w=A.B(new A.a2(w,new C.eHZ(this.b),v),v.k("J.E"))
u.d=t.baq(w)},
$S:0}
C.eHZ.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eIb.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iM(this.b,w)},
$S:0}
C.eIc.prototype={
$1(d){return this.a.bBs(d,this.b)},
$S:z+55}
C.eHY.prototype={
$0(){return this.a.a9e(this.b)},
$S:0}
C.fNC.prototype={
$1(d){return new C.ad_(this.a,this.b,this.c,null)},
$S:z+56}
C.eIe.prototype={
$0(){return this.a.ZH(this.b)},
$S:0}
C.eIf.prototype={
$0(){return this.a.PA(this.b)},
$S:0}
C.eIg.prototype={
$0(){return this.a.Ea(this.b)},
$S:0}
C.eIh.prototype={
$0(){return this.a.ZI(this.b)},
$S:0}
C.eId.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eHS.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eHT.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eHU.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eHW.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pU(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eHV(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eHV.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eIE.prototype={
$2(d,e){return d+e.gwN()},
$S:z+59}
C.eIA.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eIB.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eIl.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dX:B.c,s=A.m(24),r=A.p(v,D.bJt,B.f,v,v,new A.o(B.ay.j(u?0.18:0.08),v,A.I(B.ay.j(0.28),B.q,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aB,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.br:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aP:B.aB
u=u?B.dZ:B.bP
w=x.p
return A.eI(v,t,new A.D(B.xE,A.v(A.a([r,B.aQ,q,B.N,p,B.d5,A.A(A.a([A.E(A.dT(B.nv,new C.eIj(d),A.dg(v,v,v,v,v,v,v,v,v,o,v,v,B.f_,v,new A.b7(A.m(14),B.Y),new A.ay(u,1,B.q,-1),v,v,v,v)),1),B.av,A.E(A.bH(D.fuO,new C.eIk(d),A.bm(B.ay,v,v,v,v,v,B.f_,v,new A.b7(A.m(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d0,v,new A.b7(s,B.Y),v)},
$S:47}
C.eIj.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.eIk.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eIu.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dX:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fM,28)],x.V),g=k?D.cZs:B.a2b,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aA,D.eJ0,B.at,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cv,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.ax,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.ahI,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b3G(B.b7,B.iX,new C.eIr(v,d),l,"Camera import","Scan QR"),1),B.av,A.E(v.b3G(B.cz,M.yi,new C.eIs(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.ay.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.ay.j(0.28),B.q,1)
o=A.p(m,D.bIS,B.f,m,m,new A.o(B.ay.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.aB,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bn,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bl(!0,new A.D(B.vi,A.p(m,A.v(A.a([g,new A.D(B.ahG,A.v(A.a([w,B.S,u,B.by,t,B.S,A.aG(!1,B.a1,!0,m,A.aL(!1,s,!0,A.p(m,A.A(A.a([o,B.bf,n,A.X(B.ex,k?B.br:B.bn,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bC,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eIt(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:26}
C.eIr.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.vk("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eIs.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.vk("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eIt.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.Np(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eIp.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dX:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eT,24)],x.V),k=o?B.dZ:B.bP
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.br:B.bn
u=A.bw(w,new A.a7(48,48,C.aPp(!0,A.m(12),48,N.MN,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aP:B.aB,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Ax(v.gwN())
s=x.p
r=this.a
return A.bl(!0,new A.D(B.vi,A.p(q,A.v(A.a([B.S,k,new A.D(D.ahD,A.A(A.a([u,B.bf,A.E(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.br:B.bn,q,q,q,q,q,q,q,q,12,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.AO,r.cje(B.tX,B.aV,new C.eIn(d),p,"QR code or backup file","Transfer project"),r.b0E(!0,B.e5,B.ay,new C.eIo(d),p,"Remove from this device","Delete project"),B.S],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:26}
C.eIn.prototype={
$0(){A.a5(this.a,!1).O("transfer")
return null},
$S:0}
C.eIo.prototype={
$0(){A.a5(this.a,!1).O("delete")
return null},
$S:0}
C.eIq.prototype={
$1(d){return this.bjv(d)},
bjv(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.KT(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vy(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eIH.prototype={
$0(){var w=this.a
w.a.bp()
w.m(new C.eIG(w))},
$S:0}
C.eIG.prototype={
$0(){return this.a.r++},
$S:0}
C.eII.prototype={
$0(){var w=this.a
return w.m(new C.eIF(w))},
$S:0}
C.eIF.prototype={
$0(){return this.a.r++},
$S:0}
C.eIi.prototype={
$0(){var w=this.a.c
w.toString
return A.iM(w,null)},
$S:0}
C.eIm.prototype={
$0(){return this.a.ccA(this.b)},
$S:0}
C.eID.prototype={
$0(){var w=this.a
return w.m(new C.eIC(w,this.b))},
$S:0}
C.eIC.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eIx.prototype={
$0(){return this.a.vk("scan")},
$S:0}
C.eIy.prototype={
$0(){return this.a.vk("file")},
$S:0}
C.eIz.prototype={
$1(d){return this.a.cjf(d,this.b)},
$S:z+60}
C.eIw.prototype={
$0(){return this.a.Ee(this.b)},
$S:0}
C.eIv.prototype={
$0(){return this.a.a_c(this.b,this.c)},
$S:0}
C.cvM.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cvL.prototype={
$1(d){return d.ag()},
$S:z+62}
C.cvJ.prototype={
$1(d){return C.hsf(A.a1(d,x.N,x.z))},
$S:z+63}
C.cvK.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fq0.prototype={
$1(d){return d.y===D.kn},
$S:z+2}
C.fO8.prototype={
$1(d){return C.bAC(d,this.a)},
$S:z+2}
C.fos.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bN_.prototype={
$1(d){return!d.as},
$S:z+1}
C.bMZ.prototype={
$1(d){return d.ag()},
$S:z+15}
C.bMW.prototype={
$1(d){return C.h32(A.a1(d,x.N,x.z))},
$S:z+14}
C.bMX.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bMY.prototype={
$1(d){return J.k(d)},
$S:17}
C.fg9.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fbR.prototype={
$1(d){return C.fUx(A.a1(d,x.N,x.z))},
$S:z+67}
C.fbS.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.fbT.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fG9.prototype={
$1(d){return J.k(d)},
$S:17}
C.fGa.prototype={
$1(d){return d.a},
$S:z+69}
C.fGb.prototype={
$1(d){return d.length!==0},
$S:3}
C.fGc.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fGd.prototype={
$1(d){return d.Sg(null).ag()},
$S:z+70}
C.fO6.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fqs.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.ft0.prototype={
$1(d){return C.ak6(A.a1(d,x.N,x.z))},
$S:z+8}
C.ft1.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.ft2.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.ft3.prototype={
$1(d){return d.ag()},
$S:z+5}
C.ft4.prototype={
$1(d){return C.tQ(d,this.a)},
$S:z+2}
C.fFX.prototype={
$1(d){return C.tQ(d,this.a)},
$S:z+2}
C.fO1.prototype={
$1(d){return C.ak6(A.a1(d,x.N,x.z))},
$S:z+8}
C.fO2.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fO3.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fq9.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fqa.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fOc.prototype={
$1(d){return!d.as},
$S:z+1}
C.fpG.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fpH.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fpI.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.fNN.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.ftN.prototype={
$1(d){return d.Q},
$S:z+72}
C.fFQ.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fsY.prototype={
$1(d){return C.ak6(A.a1(d,x.N,x.z))},
$S:z+8}
C.fsZ.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.ft_.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fFL.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fco.prototype={
$1(d){return d.length!==0},
$S:3}
C.fcp.prototype={
$1(d){return C.h32(A.a1(d,x.N,x.z))},
$S:z+14}
C.fcq.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fcr.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fcs.prototype={
$1(d){return d.length!==0},
$S:3}
C.fcF.prototype={
$2(d,e){return d.eU(new C.fcG(e))},
$S:1925}
C.fcG.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c8},
$S:1926}
C.fcC.prototype={
$1(d){return C.hOk(d,this.a)},
$S:z+73}
C.fcD.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fcE.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fgO.prototype={
$1(d){return d.a},
$S:z+49}
C.fgP.prototype={
$1(d){return d.length!==0},
$S:3}
C.fgQ.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fiZ.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fnL.prototype={
$1(d){return C.hen(d,C.G9(d,this.a))},
$S:z+5}
C.fnM.prototype={
$1(d){return C.heo(d,C.G9(d,this.a))},
$S:z+5};(function aliases(){var w=C.aKt.prototype
w.btz=w.q
w=C.aME.prototype
w.bvX=w.q
w=C.aMF.prototype
w.bvY=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aBY.prototype,"gcgb","cgc",25)
var s
w(s=C.az1.prototype,"gc9b","c9c",42)
v(s,"gaLs","MY",0)
v(s,"gcoq","AC",0)
v(s,"gbJa","ND",0)
v(s,"gcCb","yc",0)
v(s,"gcic","a_U",0)
v(s,"gbEz","Nl",0)
v(s,"gbJB","Wv",0)
w(s,"gbOd","bOe",71)
v(s,"gbz1","zF",0)
v(C.az2.prototype,"gcC7","F5",0)
v(s=C.aCy.prototype,"gaeN","vz",0)
v(s,"gcbQ","a_3",0)
v(s,"gaPt","HD",0)
v(s=C.aCv.prototype,"gcym","a1Z",0)
v(s,"gaeN","vz",0)
v(s,"gcmu","a0z",0)
v(s,"gccN","a_h",0)
w(s,"gc95","c96",30)
v(s,"gbJs","HI",0)
v(s,"gczl","czm",3)
v(s,"gc_O","Y9",0)
w(s,"gc7C","c7D",23)
v(s,"gcbA","cbB",3)
v(s=C.aAX.prototype,"gc5q","P9",0)
v(s,"gc5s","c5t",3)
v(s,"gbG6","a8R",0)
v(s=C.aCx.prototype,"gbMJ","X_",0)
v(s,"gbX7","XD",0)
v(s,"gcsK","a1p",0)
v(s,"gcp_","a10",0)
v(C.aCw.prototype,"gcoI","agx",0)
v(C.arJ.prototype,"gc7A","ZG",0)
v(C.axN.prototype,"ga1J","JO",3)
v(C.axM.prototype,"ga1J","JO",3)
v(C.aww.prototype,"ga1J","JO",3)
v(s=C.aE2.prototype,"gb02","Q4",0)
v(s,"gbxQ","Vf",0)
v(s,"gccB","ccC",3)
w(C.aE1.prototype,"gc8q","c8r",57)
u(C.aE3.prototype,"gaPn",0,0,null,["$1","$0"],["HC","bHn"],58,0,0)
t(C,"hlE","hXW",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.anC,C.u6,C.n9,C.Hf,C.aee,C.Jz,C.u7,C.JH,C.Fq,C.bdB,C.aI7,C.aoN,C.d6v,C.lx,C.aSk,C.aSj,C.aQl,C.tF,C.qT,C.lg,C.hW,C.kB,C.aG6])
u(A.hU,[C.fxD,C.fxC,C.fxE,C.fGP,C.fmH,C.fmI,C.fmN,C.fvm,C.fvl,C.fvk,C.c11,C.fHk,C.fHc,C.fHo,C.fqh,C.dF1,C.dEX,C.dEY,C.dEA,C.dEw,C.dFg,C.dFh,C.dFa,C.dFb,C.dFi,C.dFj,C.fqR,C.fsV,C.fsW,C.fFV,C.fO0,C.fq8,C.fGt,C.d5I,C.d54,C.d5d,C.d5u,C.d59,C.d5f,C.d56,C.d5j,C.d5k,C.d5i,C.d5z,C.d5y,C.d7t,C.d7u,C.d7v,C.d5W,C.d60,C.d6_,C.cEx,C.cEz,C.cXZ,C.cYn,C.cYo,C.cYr,C.cYt,C.cYu,C.cYv,C.cYx,C.cYy,C.dTh,C.dSH,C.dSC,C.dSa,C.dSn,C.dSq,C.dSz,C.dRZ,C.dSK,C.dSE,C.dS0,C.dS1,C.dS2,C.dS7,C.dS5,C.dS4,C.dSk,C.dSl,C.dSf,C.dSR,C.dSN,C.d66,C.d67,C.fqV,C.fqW,C.fqX,C.fqT,C.fqU,C.fr_,C.fr0,C.fr1,C.fqY,C.fqZ,C.d6q,C.d6g,C.d6b,C.d6l,C.d6m,C.d6p,C.d6d,C.d6s,C.d6t,C.d6u,C.f95,C.eL0,C.dmi,C.dms,C.dmt,C.dmu,C.dmx,C.dmw,C.dmy,C.dmD,C.dmE,C.c7G,C.c7F,C.c7B,C.c7C,C.c7D,C.c7E,C.c7L,C.c7I,C.c7J,C.dT3,C.dT6,C.dT5,C.dTc,C.dTd,C.dEl,C.fGW,C.fGi,C.fNM,C.fGn,C.fGm,C.cYM,C.cYN,C.cYI,C.cws,C.cwu,C.cwv,C.cwn,C.cww,C.f8y,C.fEY,C.eI8,C.eI4,C.eI0,C.eHZ,C.eIc,C.fNC,C.eIl,C.eIu,C.eIp,C.eIq,C.eIz,C.cvL,C.cvJ,C.cvK,C.fq0,C.fO8,C.fos,C.bN_,C.bMZ,C.bMW,C.bMX,C.bMY,C.fbR,C.fbS,C.fG9,C.fGa,C.fGb,C.fGc,C.fGd,C.fO6,C.fqs,C.ft0,C.ft1,C.ft3,C.ft4,C.fFX,C.fO1,C.fO2,C.fO3,C.fq9,C.fqa,C.fOc,C.fpG,C.fpH,C.fNN,C.ftN,C.fFQ,C.fsY,C.fsZ,C.fFL,C.fco,C.fcp,C.fcq,C.fcr,C.fcs,C.fcG,C.fcC,C.fcD,C.fgO,C.fgP,C.fiZ,C.fnL,C.fnM])
u(A.au,[C.aXM,C.ak4,C.aTz,C.Y7,C.b9i,C.bdz,C.bhh,C.buZ,C.bkD,C.acE,C.bhg,C.acD,C.bhf,C.aAY,C.aH9,C.acF,C.Jv,C.bdA,C.abV,C.bdy,C.bdD,C.aXK,C.arJ,C.ad_])
u(A.mK,[C.b9U,C.bb6,C.baY,C.aG1,C.bgk,C.bdC,C.bcG,C.bip,C.buO])
u(A.j6,[C.fHh,C.fHi,C.fHj,C.fHa,C.fHb,C.fHm,C.fHn,C.dFd,C.dF_,C.dF2,C.dEH,C.dEI,C.dEJ,C.dEG,C.dEO,C.dEF,C.dEP,C.dEQ,C.dEE,C.dER,C.dED,C.dES,C.dEC,C.dET,C.dEu,C.dEv,C.dEB,C.dEU,C.dEz,C.dEV,C.dEy,C.dEK,C.dEx,C.dEL,C.dEt,C.dEM,C.dEN,C.dFe,C.dFf,C.dF3,C.dF4,C.dF5,C.dF6,C.dF7,C.dF8,C.dF9,C.dFl,C.dFc,C.fqS,C.d52,C.d50,C.d51,C.d53,C.d5H,C.d5w,C.d5t,C.d55,C.d5x,C.d5b,C.d5c,C.d5e,C.d5v,C.d5a,C.d5g,C.d5E,C.d5q,C.d5p,C.d5r,C.d5s,C.d5l,C.d5n,C.d5o,C.d5h,C.d5A,C.d5D,C.d57,C.d58,C.d7s,C.d7r,C.d7q,C.d7p,C.d7w,C.d7o,C.d7x,C.d5X,C.d5Y,C.d5Z,C.d61,C.d5V,C.d5U,C.cEy,C.cXY,C.cYa,C.cY9,C.cYp,C.cY8,C.cYq,C.cY7,C.cY6,C.cYs,C.cY5,C.cYi,C.cYh,C.cYz,C.dTg,C.dTf,C.dTi,C.dTj,C.dTk,C.dTe,C.dTm,C.dTl,C.dSF,C.dSG,C.dSI,C.dSb,C.dSp,C.dSo,C.dSr,C.dSB,C.dSu,C.dSt,C.dSv,C.dSs,C.dSw,C.dSx,C.dSA,C.dS_,C.dSD,C.dS3,C.dS6,C.dS8,C.dSJ,C.dSe,C.dSc,C.dSg,C.dSh,C.dSd,C.dSi,C.dSm,C.dSS,C.dST,C.dSL,C.dSO,C.dSP,C.dSQ,C.dSV,C.dSM,C.dS9,C.d65,C.d64,C.d69,C.d6j,C.d6a,C.eL_,C.dmj,C.dmg,C.dmh,C.dmr,C.dmq,C.dmp,C.dmz,C.dmo,C.dmA,C.dmn,C.dmB,C.dmm,C.dmC,C.dml,C.dmk,C.dmv,C.dmF,C.dmO,C.dT4,C.dT8,C.dT9,C.dT0,C.dT1,C.dT2,C.dT7,C.dTb,C.dTa,C.dSW,C.dSX,C.dSY,C.dSZ,C.dT_,C.dEm,C.fGT,C.cfe,C.cYL,C.cYK,C.cYO,C.cYH,C.cYJ,C.cwk,C.cwq,C.cwr,C.cwp,C.cwt,C.cwo,C.cwl,C.cwm,C.cwx,C.f8z,C.f8A,C.eIa,C.eI1,C.eI2,C.eI3,C.eI5,C.eI6,C.eI9,C.eHX,C.eI_,C.eIb,C.eHY,C.eIe,C.eIf,C.eIg,C.eIh,C.eId,C.eHS,C.eHT,C.eHU,C.eHW,C.eHV,C.eIA,C.eIB,C.eIj,C.eIk,C.eIr,C.eIs,C.eIt,C.eIn,C.eIo,C.eIH,C.eIG,C.eII,C.eIF,C.eIi,C.eIm,C.eID,C.eIC,C.eIx,C.eIy,C.eIw,C.eIv])
u(A.ag,[C.anJ,C.Sh,C.YP,C.YT,C.YR,C.Yp,C.aoQ,C.aoK,C.Zs,C.aoO,C.ZN,C.ZO,C.a5I,C.Yr,C.Yq,C.XZ,C.a0y,C.Fe,C.awp,C.arI,C.arC,C.arH,C.NJ])
u(A.ah,[C.aBY,C.bdw,C.az1,C.bdR,C.az2,C.bb4,C.aCy,C.aCv,C.aAX,C.aCx,C.aCw,C.biK,C.aKt,C.axN,C.axM,C.aww,C.buR,C.aME,C.aMF,C.aE2,C.bk6,C.aE1,C.bwC])
u(A.ki,[C.dEZ,C.dF0,C.dEW,C.dFk,C.fsX,C.bMV,C.d5G,C.d5F,C.d5m,C.d5B,C.d5C,C.d62,C.dSy,C.dSj,C.dSU,C.d6i,C.d6h,C.d6f,C.d6k,C.d6n,C.d6o,C.d68,C.d6c,C.d6e,C.d6r,C.c7z,C.c7H,C.c7M,C.dEn,C.fGV,C.fGU,C.f8w,C.f8x,C.eI7,C.eIE,C.cvM,C.fg9,C.fbT,C.ft2,C.fpI,C.ft_,C.fcF,C.fcE,C.fgQ])
t(C.biq,C.aKt)
u(A.m6,[C.aaY,C.aIP,C.Hg,C.ak5,C.cvN,C.cvO])
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
A.jW(b.typeUniverse,JSON.parse('{"aXM":{"au":[],"r":[]},"b9U":{"aB":[]},"anJ":{"ag":[],"r":[]},"aBY":{"ah":["anJ"]},"Sh":{"ag":[],"r":[]},"ak4":{"au":[],"r":[]},"aTz":{"au":[],"r":[]},"bdw":{"ah":["Sh"]},"YP":{"ag":[],"r":[]},"YT":{"ag":[],"r":[]},"YR":{"ag":[],"r":[]},"Yp":{"ag":[],"r":[]},"az1":{"ah":["YP"]},"bdR":{"ah":["YT"]},"az2":{"ah":["YR"]},"Y7":{"au":[],"r":[]},"bb6":{"aB":[]},"baY":{"aB":[]},"bb4":{"ah":["Yp"]},"aG1":{"aB":[]},"bgk":{"aB":[]},"b9i":{"au":[],"r":[]},"aoQ":{"ag":[],"r":[]},"aoK":{"ag":[],"r":[]},"Zs":{"ag":[],"r":[]},"acF":{"au":[],"r":[]},"aCy":{"ah":["aoQ"]},"aCv":{"ah":["aoK"]},"bdz":{"au":[],"r":[]},"bdC":{"aB":[]},"bhh":{"au":[],"r":[]},"bcG":{"aB":[]},"buZ":{"au":[],"r":[]},"bkD":{"au":[],"r":[]},"aAX":{"ah":["Zs"]},"acE":{"au":[],"r":[]},"bhg":{"au":[],"r":[]},"acD":{"au":[],"r":[]},"bhf":{"au":[],"r":[]},"aAY":{"au":[],"r":[]},"aH9":{"au":[],"r":[]},"Jv":{"au":[],"r":[]},"aoO":{"ag":[],"r":[]},"ZN":{"ag":[],"r":[]},"ZO":{"ag":[],"r":[]},"aCx":{"ah":["aoO"]},"bdA":{"au":[],"r":[]},"abV":{"au":[],"r":[]},"bdy":{"au":[],"r":[]},"bdD":{"au":[],"r":[]},"aCw":{"ah":["ZN"]},"biK":{"ah":["ZO"]},"aXK":{"au":[],"r":[]},"a5I":{"ag":[],"r":[]},"biq":{"ah":["a5I"]},"bip":{"aB":[]},"arJ":{"au":[],"r":[]},"Yr":{"ag":[],"r":[]},"Yq":{"ag":[],"r":[]},"XZ":{"ag":[],"r":[]},"a0y":{"ag":[],"r":[]},"axN":{"ah":["Yr"]},"axM":{"ah":["Yq"]},"aww":{"ah":["XZ"]},"buR":{"ah":["a0y"]},"Fe":{"ag":[],"r":[]},"awp":{"ag":[],"r":[]},"buP":{"ah":["Fe"]},"buQ":{"ah":["awp"]},"buO":{"aB":[]},"arI":{"ag":[],"r":[]},"aE2":{"ah":["arI"]},"ad_":{"au":[],"r":[]},"arC":{"ag":[],"r":[]},"arH":{"ag":[],"r":[]},"bk6":{"ah":["arC"]},"aE1":{"ah":["arH"]},"NJ":{"ag":[],"r":[]},"aE3":{"ah":["NJ"],"ez":[]},"b7K":{"j0":[],"ff":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aQl"),Q:w("qT"),n:w("bk<n,n>"),c5:w("aSj"),dY:w("aSk"),d:w("eD<n?>"),e:w("Hf"),B:w("n9"),P:w("hW"),k:w("kB"),x:w("az<~>"),f5:w("O<a2x>"),V:w("O<ac>"),t:w("O<qT>"),O:w("O<w>"),ac:w("O<eD<n?>>"),I:w("O<n9>"),u:w("O<hW>"),_:w("O<kB>"),cl:w("O<az<ai<a4<n,@>>>>"),R:w("O<nb>"),cq:w("O<ai<+(N,N)>>"),ez:w("O<a4<n,aC>>"),gE:w("O<a4<n,n>>"),c7:w("O<a4<n,@>>"),fD:w("O<mp>"),bp:w("O<ob>"),g:w("O<u>"),v:w("O<ho>"),L:w("O<+(n,n)>"),G:w("O<+(N,N)>"),bF:w("O<+count,id,name(H,n,n)>"),A:w("O<cQ>"),s:w("O<n>"),aS:w("O<iP>"),p:w("O<r>"),C:w("O<ff>"),D:w("O<lg>"),fp:w("O<Jz>"),M:w("O<JH>"),gZ:w("O<aG6>"),Y:w("O<aee>"),E:w("O<aI7>"),F:w("O<N>"),dC:w("O<H>"),dS:w("O<aB?>"),d4:w("O<n?>"),J:w("cs<ah<ag>>"),b:w("ai<n9>"),do:w("ai<hW>"),r:w("ai<kB>"),U:w("ai<a4<n,@>>"),gk:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),h:w("ai<n>"),c:w("ai<lg>"),j:w("ai<@>"),fK:w("bv<n,n>"),d2:w("bv<n,ai<a4<n,@>>>"),a:w("a4<n,@>"),f:w("a4<@,@>"),gv:w("K<n,Hh>"),w:w("iA"),g2:w("rd"),bV:w("anC"),fL:w("cq"),K:w("aC"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(N,ai<hW>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),e7:w("bo<N>"),gc:w("dD"),b4:w("cx<H>"),W:w("kf<n>"),l:w("r"),cM:w("ff"),i:w("lg"),cc:w("Fq"),bw:w("acD<n?>"),cy:w("JJ"),q:w("mY"),y:w("R"),gR:w("N"),z:w("@"),S:w("H"),eK:w("ai<kB>?"),m:w("aoN?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),X:w("+qrPayload,token,usesRemaining(n,n,H)?"),gF:w("+members,trees,viewOnly(H,H,R)?"),Z:w("pQ?"),T:w("n?"),aD:w("dD?"),o:w("lg?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aWW=new A.bp(B.he,B.bE,B.he,B.bE)
D.a9N=new A.bp(B.he,B.jI,B.he,B.jI)
D.aX7=new A.bp(B.ik,B.bE,B.bE,B.bE)
D.aXb=new A.ay(B.cY,1.4,B.q,-1)
D.aXl=new A.ay(B.ad,1,B.q,-1)
D.aYM=new A.aY(0,1/0,64,1/0)
D.aYQ=new A.aY(0,84,0,1/0)
D.axc=w([B.lG,B.qO,B.c],x.O)
D.bU8=new A.a8(B.ax,B.aC,B.x,D.axc,null,null)
D.aZA=new A.o(null,null,null,null,null,D.bU8,B.n)
D.cYX=w([B.aV,B.bW],x.O)
D.bWi=new A.a8(B.b_,B.b5,B.x,D.cYX,null,null)
D.aZU=new A.o(null,null,null,null,null,D.bWi,B.n)
D.b53=new A.fj(null,null,null,null,null,E.jP,null,null,null,null)
D.ab5=new A.cr(B.A,null,null,D.b53,null)
D.kf=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eZC=new A.G(!0,D.kf,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhG=new A.x("No books on the shelf yet.",null,D.eZC,null,null,null,null,null,null,null,null,null)
D.e5S=new A.D(B.nV,D.fhG,null)
D.b3y=new A.cr(B.A,null,null,D.e5S,null)
D.b4r=new A.cr(B.A,null,null,Z.Vx,null)
D.b6t=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b6W=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.aci=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b9B=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b9T=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.adC=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bdF=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.be4=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.Ew=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.bfG=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bi2=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.afg=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.fce=new A.x("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bnB=new A.eD(null,D.fce,B.eX,null,x.d)
D.fkU=new A.x("None",null,null,null,null,null,null,null,null,null,null,null)
D.bnD=new A.eD(null,D.fkU,B.eX,null,x.d)
D.boa=new A.b9(38e5)
D.boV=new A.ib(0,10,0,10)
D.bp4=new A.Q(0,1,0,0)
D.bpe=new A.ib(0,4,0,4)
D.bpw=new A.Q(10,10,14,10)
D.bpI=new A.ib(10,4,10,4)
D.bpQ=new A.ib(10,8,10,8)
D.bpR=new A.Q(10,8,8,8)
D.bqg=new A.Q(12,6,12,2)
D.bqy=new A.Q(14,10,6,6)
D.bqz=new A.Q(14,12,14,0)
D.bqD=new A.Q(14,12,14,8)
D.bqG=new A.Q(14,12,8,14)
D.bqJ=new A.ib(14,14,14,14)
D.brn=new A.Q(16,2,16,10)
D.brx=new A.Q(16,6,16,30)
D.brz=new A.Q(16,6,16,8)
D.ahD=new A.Q(18,16,18,8)
D.bs9=new A.Q(18,20,18,22)
D.ahH=new A.Q(18,24,18,24)
D.bsf=new A.Q(18,30,18,30)
D.bsx=new A.Q(20,10,12,20)
D.bsL=new A.Q(20,18,16,18)
D.bsN=new A.Q(20,18,20,6)
D.btB=new A.Q(24,32,24,28)
D.btC=new A.Q(24,36,24,32)
D.btG=new A.Q(26,26,24,14)
D.btU=new A.Q(2,4,2,8)
D.btY=new A.Q(30,0,30,0)
D.bu8=new A.Q(38,22,22,22)
D.ahZ=new A.Q(40,24,24,24)
D.bua=new A.ib(40,40,40,40)
D.buc=new A.Q(46,30,30,30)
D.ai1=new A.Q(4,0,0,8)
D.buE=new A.Q(56,40,40,40)
D.buI=new A.Q(1.25,1.25,1.25,1.25)
D.buJ=new A.Q(60,0,60,0)
D.buM=new A.Q(6,14,6,16)
D.buZ=new A.ib(7,3,7,3)
D.bvu=new A.Q(5,1.5,5,1.5)
D.bvF=new A.Q(6,2.5,6,2.5)
D.fwK=new A.x("Signature",null,B.nu,null,null,null,null,null,null,null,null,null)
D.bw_=new A.bD(1,B.bh,D.fwK,null)
D.ftW=new A.x("Tell the AI what to fix",null,B.dl,null,null,null,null,null,null,null,null,null)
D.bwL=new A.bD(1,B.bh,D.ftW,null)
D.f5U=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvR=new A.x("Worksheets",null,D.f5U,null,null,null,null,null,null,null,null,null)
D.f61=new A.G(!0,E.abQ,null,null,null,null,13,B.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuM=new A.x("Track your project spending",null,D.f61,null,null,null,null,null,null,null,null,null)
D.cR5=w([D.fvR,B.at,D.fuM],x.p)
D.bkV=new A.fq(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cR5,null)
D.bwQ=new A.bD(1,B.bh,D.bkV,null)
D.f1b=new A.G(!0,E.jP,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbr=new A.x("FAMILY LIBRARY",null,D.f1b,null,null,null,null,null,null,null,null,null)
D.bx6=new A.bD(1,B.bh,D.fbr,null)
D.Mq=new C.Hf("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.Zn=new C.Hg(0,"male")
D.aiU=new C.Hg(1,"female")
D.xN=new C.Hg(2,"unknown")
D.tE=new C.ak5(0,"owner")
D.Mr=new C.ak5(1,"editor")
D.kn=new C.ak5(2,"viewer")
D.ajG=new A.a_(61199,"MaterialIcons",!1)
D.bB5=new A.a_(61504,"MaterialIcons",!1)
D.bB6=new A.a_(61505,"MaterialIcons",!1)
D.bB8=new A.a_(61587,"MaterialIcons",!1)
D.bBf=new A.a_(61890,"MaterialIcons",!1)
D.bC9=new A.a_(63034,"MaterialIcons",!0)
D.bCZ=new A.a_(63429,"MaterialIcons",!1)
D.alT=new A.a_(984520,"MaterialIcons",!1)
D.bBF=new A.a_(62776,"MaterialIcons",!1)
D.bFm=new A.ae(D.bBF,26,B.aZ,null,null,null)
D.bA3=new A.a_(57648,"MaterialIcons",!1)
D.bFE=new A.ae(D.bA3,14,B.c,null,null,null)
D.bFV=new A.ae(B.FD,17,null,null,null,null)
D.bGq=new A.ae(E.a_g,null,null,null,null,null)
D.bGt=new A.ae(B.jg,18,E.jP,null,null,null)
D.a_2=new A.a_(62044,"MaterialIcons",!1)
D.bGz=new A.ae(D.a_2,null,B.aV,null,null,null)
D.bHo=new A.ae(B.dW,16,null,null,null,null)
D.bHv=new A.ae(D.a_2,32,B.aV,null,null,null)
D.bHO=new A.ae(E.ajH,18,B.cY,null,null,null)
D.bIS=new A.ae(B.FN,22,B.ay,null,null,null)
D.bJ3=new A.ae(B.dW,22,B.aZ,null,null,null)
D.bJe=new A.ae(R.a_7,22,B.c,null,null,null)
D.bJj=new A.ae(B.tO,52,B.c,null,null,null)
D.bJt=new A.ae(B.FN,30,B.ay,null,null,null)
D.amv=new A.ae(B.tX,22,B.c,null,null,null)
D.bJV=new A.ae(B.dW,17,null,null,null,null)
D.bKd=new A.ae(B.vD,26,B.cY,null,null,null)
D.bKX=new A.ae(B.a_s,16,null,null,null,null)
D.bLH=new A.ae(B.tO,24,B.c,null,null,null)
D.bLM=new A.ae(B.MT,20,B.rk,null,null,null)
D.bLR=new A.ae(B.FB,null,B.bW,null,null,null)
D.bLY=new A.ae(B.jg,18,B.c,null,null,null)
D.bMz=new A.ae(B.cC,22,B.ad,null,null,null)
D.bNo=new A.ae(B.e5,16,B.ad,null,null,null)
D.bNA=new A.ae(D.a_2,20,B.aV,null,null,null)
D.amW=new A.ae(B.hz,20,null,null,null,null)
D.bO5=new A.ae(B.cC,18,D.kf,null,null,null)
D.bOn=new A.ae(B.y7,28,B.c,null,null,null)
D.bOw=new A.ae(B.MJ,null,B.h_,null,null,null)
D.bOQ=new A.ae(B.y7,24,B.c,null,null,null)
D.bPh=new A.ae(B.tO,null,B.aV,null,null,null)
D.bPi=new A.ae(B.jB,20,B.cY,null,null,null)
D.bPC=new A.ae(B.FD,16,null,null,null,null)
D.bR8=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jy,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ez,!0,null,null,null,null)
D.d55=w([B.bu,B.aV,B.f9,B.aZ],x.O)
D.bSA=new A.a8(B.ax,B.aC,B.x,D.d55,null,null)
D.beB=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bjY=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cO_=w([D.beB,D.bjY],x.O)
D.bSL=new A.a8(B.b_,B.b5,B.x,D.cO_,null,null)
D.d_I=w([B.eY,B.fw,B.f9],x.O)
D.bSP=new A.a8(B.ax,B.aC,B.x,D.d_I,null,null)
D.aee=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b6X=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cPX=w([D.aee,D.b6X],x.O)
D.bTn=new A.a8(B.b_,B.b5,B.x,D.cPX,null,null)
D.ba4=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.awB=w([D.ba4,D.aee],x.O)
D.bTH=new A.a8(B.ax,B.aC,B.x,D.awB,null,null)
D.ada=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.bc9=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cZT=w([D.ada,D.bc9],x.O)
D.bUj=new A.a8(B.a3,B.a7,B.x,D.cZT,null,null)
D.dbb=w([B.bI,B.mZ],x.O)
D.bUl=new A.a8(B.b_,B.b5,B.x,D.dbb,null,null)
D.bew=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.dc2=w([D.bew,D.kf,D.kf,Q.WR],x.O)
D.ded=w([0,0.07,0.9,1],x.F)
D.bUS=new A.a8(B.a3,B.a7,B.x,D.dc2,D.ded,null)
D.bV2=new A.a8(B.ax,B.aC,B.x,B.Qq,null,null)
D.daM=w([B.aZ,B.aV,B.bW],x.O)
D.bW2=new A.a8(B.ax,B.aC,B.x,D.daM,null,null)
D.cgw=w([B.bu,B.aZ,B.eY],x.O)
D.cgD=w([B.bt,B.aE,B.jr],x.O)
D.cgF=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bdb=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cmJ=w([D.bdb,E.adV],x.O)
D.e1G=new A.u(1,2)
D.eLa=new A.cQ(B.aX,D.e1G,3)
D.atI=w([D.eLa],x.A)
D.ctY=w([B.h2,B.cd,B.f8],x.O)
D.cwC=w([B.bJ,B.bv,B.bm],x.O)
D.bxz=new C.u6("classic","Classic leather","Gold-edged brown leather",D.awB,E.jP,E.jP,"\u2766",B.L,!0,!1,!1,!1)
D.b6h=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.biT=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cSH=w([D.b6h,D.biT],x.O)
D.adZ=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bxu=new C.u6("ornate","Ornate gold","Double gold border and flourishes",D.cSH,D.adZ,D.adZ,"\u2726",B.L,!0,!0,!0,!1)
D.b9K=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bfi=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cL_=w([D.b9K,D.bfi],x.O)
D.bxt=new C.u6("parchment","Parchment","Old paper with dark ink",D.cL_,D.Ew,G.it,"\u2767",B.L,!0,!1,!1,!0)
D.abx=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bhl=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.d9a=w([D.abx,D.bhl],x.O)
D.bcM=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bgI=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bxw=new C.u6("minimal","Clean paper","Plain and elegant, like a printed book",D.d9a,D.bcM,D.bgI,"",B.L,!0,!0,!1,!0)
D.bxy=new C.u6("midnight","Midnight","Deep blue with silver stars",L.awU,B.cq,B.bL,"\u2727",B.L,!0,!0,!1,!1)
D.bxs=new C.u6("emerald","Emerald library","Green cloth, title on the left",A_.au6,E.jP,B.h3,"\u25c6",B.bg,!0,!1,!1,!1)
D.bhK=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.d7C=w([B.es,D.bhK],x.O)
D.bdO=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.beV=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bxx=new C.u6("rose","Rose vintage","Burgundy with rose-gold lettering",D.d7C,D.bdO,D.beV,"\u2740",B.L,!0,!1,!0,!1)
D.dbG=w([B.cD,P.n_],x.O)
D.bxv=new C.u6("modern","Modern","Dark, bold, left-aligned",D.dbG,B.aS,B.c,"",B.bg,!1,!0,!1,!1)
D.a1o=w([D.bxz,D.bxu,D.bxt,D.bxw,D.bxy,D.bxs,D.bxx,D.bxv],A.ax("O<u6>"))
D.cKw=w([B.bW,B.bj],x.O)
D.bem=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cLb=w([D.abx,D.bem],x.O)
D.b9G=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cMK=w([D.b9G,B.da],x.O)
D.cOe=w([B.b8,B.iM,B.or],x.O)
D.cOB=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b6T=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.bbv=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.de9=w([D.ada,D.b6T,D.bbv],x.O)
D.bxA=new C.u7("leather","Leather",D.de9,"vintage")
D.cVD=w([B.dr,B.KH,A4.W3],x.O)
D.bxH=new C.u7("midnight","Midnight",D.cVD,"starry")
D.cOf=w([B.f3,B.e3,B.la],x.O)
D.bxG=new C.u7("forest","Forest",D.cOf,"story")
D.dg1=w([B.eN,B.es,B.kh],x.O)
D.bxD=new C.u7("burgundy","Burgundy",D.dg1,"royal")
D.cwc=w([B.aE,B.pr,B.nD],x.O)
D.bxE=new C.u7("royal","Royal",D.cwc,"royal")
D.cQz=w([B.bv,B.cD,P.n_],x.O)
D.bxB=new C.u7("charcoal","Charcoal",D.cQz,"geo")
D.deh=w([B.ci,B.dP,B.x2],x.O)
D.bxF=new C.u7("sunset","Sunset",D.deh,"sunset")
D.deW=w([B.iM,B.Ex,B.W7],x.O)
D.bxC=new C.u7("ocean","Ocean",D.deW,"band")
D.yD=w([D.bxA,D.bxH,D.bxG,D.bxD,D.bxE,D.bxB,D.bxF,D.bxC],A.ax("O<u7>"))
D.cQY=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cRw=w([B.ak,B.aK,B.M],x.O)
D.cSM=w([B.es,B.e3,B.dr,B.fx,B.x6,B.cY,B.jS,B.eo,B.d8],x.O)
D.cSN=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eLb=new A.cQ(B.dp,B.dE,8)
D.cSW=w([D.eLb],x.A)
D.cTZ=w([B.bV,B.dP,B.kJ],x.O)
D.cUr=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cVz=w([B.bV,B.hi],x.O)
D.cXB=w([B.aM,B.x3,B.wU],x.O)
D.cYt=w([B.bK,B.c7,B.dv,B.aM],x.O)
D.cYY=w([B.j7,B.ci,B.t9],x.O)
D.cZs=w([B.eY,B.cY],x.O)
D.cZY=w([B.cs,B.fo,B.hu],x.O)
D.d_8=w([B.aS,B.bj,B.dr],x.O)
D.d_F=w([B.et,B.d_,B.e3],x.O)
D.d_X=w([B.dS,B.dr,B.KH],x.O)
D.d1c=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a2h=w(["leather","linen","plain","stars","rays"],x.s)
D.bF1=new A.a_(985219,"MaterialIcons",!1)
D.bEA=new A.a_(983781,"MaterialIcons",!1)
D.awj=w([B.ak5,B.i_,B.lN,B.i0,D.bF1,B.FX,B.pO,D.bEA,L.alG,B.y9,B.pQ,B.mq],A.ax("O<a_>"))
D.a2m=w(["double","single","corners","none"],x.s)
D.d3Q=w([B.dA,B.bn,B.eo],x.O)
D.d42=w([],x.t)
D.C6=w([],x.u)
D.d6e=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.d8v=w([B.aH,B.fo,B.fx],x.O)
D.d9L=w([B.cf,B.mU,B.X0],x.O)
D.da_=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dsH=new C.lx("construction","Construction","Jobsite & builds",B.y_)
D.dsO=new C.lx("house","Home Build","Houses & rooms",B.vy)
D.dsE=new C.lx("grocery","Grocery","Store & pantry",B.a0_)
D.dsD=new C.lx("calculator","Calculations","Math & estimates",B.N3)
D.dsM=new C.lx("lumber","Materials","Lumber & supplies",B.Nk)
D.dsA=new C.lx("kitchen","Kitchen","Remodel & meals",Aa.akT)
D.bEx=new A.a_(983756,"MaterialIcons",!1)
D.dsF=new C.lx("landscape","Landscaping","Yard & garden",D.bEx)
D.dsz=new C.lx("plumbing","Plumbing","Pipes & water",B.pY)
D.dsP=new C.lx("electrical","Electrical","Wiring & power",B.h8)
D.dsx=new C.lx("store","Retail Shop","Daily business",B.kR)
D.dsy=new C.lx("paint_remodel","Paint & Remodel","Colors & walls",Ab.a_y)
D.bDW=new A.a_(983311,"MaterialIcons",!1)
D.dsL=new C.lx("roofing","Roofing","Roofs & exteriors",D.bDW)
D.bEK=new A.a_(983986,"MaterialIcons",!1)
D.dsw=new C.lx("warehouse","Warehouse","Storage & stock",D.bEK)
D.dsJ=new C.lx("vehicles","Vehicles","Fleet & transport",B.FY)
D.bBH=new A.a_(62785,"MaterialIcons",!1)
D.dsC=new C.lx("farm","Farm","Crops & livestock",D.bBH)
D.dsB=new C.lx("restaurant","Restaurant","Food & catering",B.tV)
D.dsI=new C.lx("tools","Tools","Workshop gear",B.FU)
D.dsN=new C.lx("wallet","Cash & Wallet","Quick spending",B.jB)
D.bCU=new A.a_(63395,"MaterialIcons",!1)
D.dsK=new C.lx("concrete","Concrete","Foundation work",D.bCU)
D.dsG=new C.lx("blueprint","Blueprint","Plans & design",Ag.akb)
D.a2N=w([D.dsH,D.dsO,D.dsE,D.dsD,D.dsM,D.dsA,D.dsF,D.dsz,D.dsP,D.dsx,D.dsy,D.dsL,D.dsw,D.dsJ,D.dsC,D.dsB,D.dsI,D.dsN,D.dsK,D.dsG],A.ax("O<lx>"))
D.dat=w([B.br,B.bn],x.O)
D.dbc=w([B.i7,B.nH,B.dH],x.O)
D.a2V=w(["top","middle","bottom"],x.s)
D.ddy=w([B.cr,B.bj,B.dr],x.O)
D.de4=w([B.b2,B.d_,B.e3],x.O)
D.dfX=w([B.bJ,B.ak],x.O)
D.dfY=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.e_i={top:0,middle:1,bottom:2}
D.dj8=new A.bk(D.e_i,["Top","Middle","Bottom"],x.n)
D.dZW={double:0,single:1,corners:2,none:3}
D.djd=new A.bk(D.dZW,["Double line","One line","Corners","None"],x.n)
D.e05={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dkD=new A.bk(D.e05,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dkP=new A.bk(B.i3,[],A.ax("bk<H,+(n,n)>"))
D.e_a={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Ch=new A.bk(D.e_a,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bk<n,H>"))
D.dng=new F.MB(32,null)
D.dnh=new F.MB(40,null)
D.dni=new F.MB(46,null)
D.aFx=new C.arH(null)
D.e2E=new A.u(8,14)
D.fii=new A.x("Write a new book",null,B.i5,null,B.L,null,null,null,null,null,null,null)
D.e5k=new A.D(B.le,D.fii,null)
D.am6=new A.ae(B.hy,18,B.c,null,null,null)
D.fbN=new A.x("Add",null,B.m2,null,null,null,null,null,null,null,null,null)
D.cYI=w([D.am6,B.qd,D.fbN],x.p)
D.eJ7=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cYI,null)
D.e5F=new A.D(B.nU,D.eJ7,null)
D.e5G=new A.D(E.ags,Z.Vx,null)
D.f5P=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feO=new A.x("New Project",null,D.f5P,null,null,null,null,null,null,null,null,null)
D.d1y=w([D.am6,B.ab,D.feO],x.p)
D.eJa=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d1y,null)
D.e5R=new A.D(B.ic,D.eJa,null)
D.fh5=new A.x("Choose your header",null,U.rG,null,null,null,null,null,null,null,null,null)
D.e6b=new A.D(B.hw,D.fh5,null)
D.b5i=new A.fj(2.2,null,null,null,null,B.cY,null,null,null,null)
D.eNO=new A.a7(22,22,D.b5i,null)
D.b3u=new A.cr(B.A,null,null,D.eNO,null)
D.e6g=new A.D(B.XW,D.b3u,null)
D.bqS=new A.Q(14,2,14,6)
D.fuv=new A.x("The top of your book. Tap a design to see it.",null,T.IL,null,null,null,null,null,null,null,null,null)
D.e6h=new A.D(D.bqS,D.fuv,null)
D.e7P=new A.iN(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.e7S=new A.iN(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aGM=new A.iN(1,0.9607843137254902,0.48627450980392156,0)
D.HY=new A.iN(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.za=new A.iN(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.e7Y=new A.iN(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fQZ=new C.bgk(null)
D.bm0=new A.mf(D.fQZ,null,B.au,null,null)
D.aKq=new A.cL(0,0,0,0,null,null,D.bm0,null)
D.evu=new A.y(-42,42)
D.eDT=new A.cI([0,0,1,1])
D.aLI=new A.a9(0,0,520,160)
D.fu3=new A.x("Let the AI write it from your tree",null,B.k7,null,B.L,null,null,null,null,null,null,null)
D.byd=new A.dq(1,B.cn,D.fu3,null)
D.cVy=w([E.a0t,B.ab,D.byd],x.p)
D.eIQ=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cVy,null)
D.fbs=new A.x("Save member",null,B.cj,null,null,null,null,null,null,null,null,null)
D.d8M=w([D.amW,B.ab,D.fbs],x.p)
D.eIY=new A.cn(B.aO,B.bb,B.j,B.m,null,B.p,null,0,D.d8M,null)
D.bJ8=new A.ae(B.hL,14,B.aZ,null,null,null)
D.f_Q=new A.G(!0,B.aZ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffd=new A.x("Cashier",null,D.f_Q,null,null,null,null,null,null,null,null,null)
D.d23=w([D.bJ8,B.bp,D.ffd],x.p)
D.eJ_=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d23,null)
D.fbt=new A.x("Transfer & settings",null,B.dl,null,null,null,null,null,null,null,null,null)
D.bwC=new A.bD(1,B.bh,D.fbt,null)
D.cNI=w([D.amv,B.av,D.bwC],x.p)
D.eJ0=new A.cn(B.aO,B.e,B.j,B.m,null,B.p,null,0,D.cNI,null)
D.eMy=new A.at(16,40)
D.eMD=new A.at(22,64)
D.eMK=new A.at(280,88)
D.eNu=new A.a7(30,null,null,null)
D.eOM=new A.hK(2,12,12,1.05,null)
D.feU=new A.x("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.ePu=new A.b1(D.feU,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ff8=new A.x("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aNK=new A.b1(D.ff8,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fna=new A.x("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ePY=new A.b1(D.fna,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fxj=new A.x("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eQ2=new A.b1(D.fxj,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fh3=new A.x("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eQ9=new A.b1(D.fh3,null,null,null,null,null,null,null,null,null,null,null,null,B.fH,!1,null,null,null,B.r,null)
D.fuI=new A.x("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aNO=new A.b1(D.fuI,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fc3=new A.x("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eQz=new A.b1(D.fc3,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fxZ=new A.x("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eRi=new A.b1(D.fxZ,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ft1=new A.x("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eRH=new A.b1(D.ft1,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fxn=new A.x("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eRK=new A.b1(D.fxn,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.foI=new A.x("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eRM=new A.b1(D.foI,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fiT=new A.x("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eRN=new A.b1(D.fiT,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fiU=new A.x("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eSN=new A.b1(D.fiU,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.feW=new A.x("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eT4=new A.b1(D.feW,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fgL=new A.x("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eTn=new A.b1(D.fgL,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.foc=new A.x("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eTD=new A.b1(D.foc,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fjH=new A.x("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eTE=new A.b1(D.fjH,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.eWP=new A.G(!0,D.kf,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXe=new A.G(!0,D.kf,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXS=new A.rx(!0,B.rt,null,null,null,null,B.ds,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY8=new A.G(!0,D.kf,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYG=new A.G(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a78=new A.rx(!0,B.RM,null,null,null,null,B.ds,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZF=new A.G(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_3=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0D=new A.G(!0,null,null,null,null,null,8,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0H=new A.G(!0,G.it,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1X=new A.G(!0,B.M,null,null,null,null,13,B.a5,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2F=new A.G(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3n=new A.G(!0,B.bW,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3r=new A.G(!0,B.bI,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3N=new A.G(!0,D.Ew,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3W=new A.G(!0,B.aZ,null,null,null,null,13,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4U=new A.G(!0,B.cY,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5n=new A.G(!0,B.bW,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5N=new A.G(!0,B.aZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7d=new A.G(!0,B.ak,null,null,null,null,11.5,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7l=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPY=new A.G(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7D=new A.G(!0,B.ak,null,null,null,null,12,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f90=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9n=new A.G(!0,G.it,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9v=new A.G(!0,G.it,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fah=new A.x("Themes",null,B.p3,null,null,null,null,null,null,null,null,null)
D.faU=new A.x("Add Item",null,B.cj,null,null,null,null,null,null,null,null,null)
D.f0m=new A.G(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbi=new A.x("Debt receipt",null,D.f0m,null,B.L,null,null,null,null,null,null,null)
D.aPT=new A.G(!0,B.ak,null,null,null,null,11,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbA=new A.x("Person who owes",null,D.aPT,null,null,null,null,null,null,null,null,null)
D.fcw=new A.x("Notes",null,B.a7h,null,null,null,null,null,null,null,null,null)
D.fcW=new A.x("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.f_l=new A.G(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd_=new A.x("Share",null,D.f_l,null,null,null,null,null,null,null,null,null)
D.fdW=new A.x("Move your family trees",null,D.aPY,null,null,null,null,null,null,null,null,null)
D.few=new A.x("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.ff7=new A.x("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fgl=new A.x("Remove this book?",null,B.hq,null,null,null,null,null,null,null,null,null)
D.aQo=new A.x("Download",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fhr=new A.x("What should the AI do?",null,B.dl,null,null,null,null,null,null,null,null,null)
D.fiP=new A.x("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fjW=new A.x("Ribbon bookmark",null,B.iG,null,null,null,null,null,null,null,null,null)
D.f77=new A.G(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkq=new A.x("NGMY.ORG",null,D.f77,null,B.L,null,null,null,null,null,null,null)
D.flH=new A.x("Scan family tree QR",null,B.cy,null,null,null,null,null,null,null,null,null)
D.f3F=new A.G(!0,B.c,null,null,null,null,13,B.a5,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmq=new A.x("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.f3F,null,B.L,null,null,null,null,null,null,null)
D.fnC=new A.x("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fnJ=new A.x("Thumbnail",null,B.p3,null,null,null,null,null,null,null,null,null)
D.foi=new A.x("Save the cover",null,B.cy,null,null,null,null,null,null,null,null,null)
D.foJ=new A.x("Your photos",null,B.p3,null,null,null,null,null,null,null,null,null)
D.foY=new A.x("Create Project",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fps=new A.x("Design your cover",null,U.rG,null,null,null,null,null,null,null,null,null)
D.fpz=new A.x("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fpC=new A.x("PICTURE",null,H.mI,null,null,null,null,null,null,null,null,null)
D.fpY=new A.x("Paid",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fq_=new A.x("You can undo it right after.",null,T.IR,null,null,null,null,null,null,null,null,null)
D.fqv=new A.x("Print",null,B.uz,null,null,null,null,null,null,null,null,null)
D.fqR=new A.x("Amount owed",null,D.aPT,null,null,null,null,null,null,null,null,null)
D.fr4=new A.x("Got it",null,B.cj,null,null,null,null,null,null,null,null,null)
D.frE=new A.x("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.frH=new A.x("Add to budget",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fs8=new A.x("Debtor signature",null,B.a7h,null,null,null,null,null,null,null,null,null)
D.fsh=new A.x("Change icon",null,E.aPa,null,null,null,null,null,null,null,null,null)
D.ftu=new A.x("Family tree QR",null,B.cy,null,null,null,null,null,null,null,null,null)
D.ftU=new A.x("Download",null,B.uz,null,null,null,null,null,null,null,null,null)
D.ftY=new A.x("Change",null,B.p3,null,null,null,null,null,null,null,null,null)
D.fuO=new A.x("Clear all",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fuR=new A.x("WHAT SHOULD IT CHANGE?",null,H.mI,null,null,null,null,null,null,null,null,null)
D.fvq=new A.x("COLOUR",null,H.mI,null,null,null,null,null,null,null,null,null)
D.fvC=new A.x("Do it",null,B.cy,null,null,null,null,null,null,null,null,null)
D.fvF=new A.x("Create Tree",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fwE=new A.x("Create Family Tree",null,B.eV,null,null,null,null,null,null,null,null,null)
D.eVN=new A.G(!0,E.jP,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwU=new A.x("Write the first page myself",null,D.eVN,null,null,null,null,null,null,null,null,null)
D.fxq=new A.x("Use this header",null,B.cy,null,null,null,null,null,null,null,null,null)
D.fxw=new A.x("Create Project",null,E.aPC,null,null,null,null,null,null,null,null,null)
D.fNC=new C.aaY(1,"header")
D.a8s=new C.aaY(2,"projects")
D.fND=new C.aaY(3,"cashier")
D.a8t=new C.aaY(4,"familyTree")
D.fZ0=new C.cvN(0,"start")
D.fZ1=new C.cvO(0,"start")
D.fNU=new C.XZ(null)
D.fOT=new C.Yq(null)
D.dkM=new A.bk(B.i3,[],A.ax("bk<n,Fq>"))
D.d4q=w([],x.E)
D.d4r=w([],x.M)
D.fPp=new C.bdB(D.dkM,D.d4q,D.d4r,0,0,null,null)
D.fRD=new C.ZO(null)
D.a9a=new C.aIP(0,"projects")
D.aUz=new C.aIP(1,"cashier")
D.fWS=new C.aIP(2,"familyTree")})()};
(a=>{a["ckRQOB62FQwAAW8FQ7fYXeM1noo="]=a.current})($__dart_deferred_initializers__);