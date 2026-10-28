((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A0,N,R,A1,G,F,E,A2,A3,A4,A5,S,T,A6,A7,M,A8,H,A9,Aa,U,V,W,Ab,Ac,X,Ad,Ae,Af,Y,Ag,Ah,K,Ai,Z,A_,O,Aj,L,P,C={
bB4(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bB4=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.v2(null,""),$async$bB4)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.U(y.j)
t=A.mZ(b1)
s=A.c2(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dn(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.dr(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.L)(h),++d){a0=h[d]
f.push(A.E(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.R.ao(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qD(t,a1,B.hk,E.EG),$async$bB4)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.PC(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.U(l!=null&&A.Km(l)?y.l:y.i)
for(j=J.a8(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a1(r.a(j.h(a2,a7)),q,p):B.cz
g=a8.h(0,"title")
a9=B.a.i(A.t(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.t(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.z(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a1n(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bB4,v)},
afJ(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$afJ=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.v2(null,""),$async$afJ)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.U(y.j)
t=A.mZ(b6)
s=x.S
r=A.dc(c1,0,A.dJ(4,"count",s),A.T(c1).c)
q=F.a1a(new A.K(r,new C.ft1(),r.$ti.k("K<ai.E,n>")).aI(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.ft0(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.R.ao(b7,null)+"\nAllowed values: style one of "+B.d.aI(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$afJ)
case 6:l=c5
k=F.PC(l==null?"":l)
if(k==null)throw A.U("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.amT(s,D.dhk,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.dC
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.U("There is no page to change.")
h=A.V(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.dn(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.L)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.E(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.R.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$afJ)
case 10:l=c5
k=l==null?null:F.PC(l)
if(k==null)throw A.U(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d8(a8,d),a5=J.aX(a2.a),a2=a2.$ti,a7=new A.kU(a5,a2.k("kU<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gU(a5))
b0=J.a8(a9)
b1=A.aN(b0.h(a9,"index"))
i=b1==null?null:B.k.O(b1)
if(i==null||!B.d.t(a4,i))continue
b1=b0.h(a9,"title")
b2=B.a.i(A.t(b1==null?"":b1))
a9=b0.h(a9,"body")
b3=B.a.i(A.t(a9==null?"":a9))
a9=b2.length===0
if(a9&&b3.length===0)continue
a9=a9?c1[i].a:b2
h.n(0,i,new A.z(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("bc<2>")
p=A.cD(new A.bc(h,s),new C.ft2(),s.k("H.E"),p)
p=F.a1a(A.p3(p,3,A.a3(p).k("H.E")).aI(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cz<1>")
b4=A.B(new A.cz(h,s),s.k("H.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a1n(s,b9),$async$afJ)
case 13:b5=c5
for(s=J.a8(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.amT(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afJ,v)},
hgY(d,e,f){return A.c9(null,B.w.j(0.65),!1,null,new C.fC7(e,f),d,null,!0,!0,x.g2)},
amT:function amT(d,e,f){this.a=d
this.b=e
this.c=f},
ft1:function ft1(){},
ft0:function ft0(d){this.a=d},
ft2:function ft2(){},
fC7:function fC7(d,e){this.a=d
this.b=e},
byU(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$byU=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b8(b1,new C.fik())){u=null
w=1
break}t=B.d.d9(b1,new C.fil())
s=$.X()
r=new A.rR()
q=A.Gy(r,D.aKA)
p=A.M()
p.r=B.c.gp(0)
q.aY(D.aKA,p)
o=A.M()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bO
o.e=B.fz
n=new C.fiq(t)
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
s=$.X()
p=A.a([],x.v)
a3=new A.aQ(s.r,B.ap,null,null,p)
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
a3=new A.aQ(s.r,B.ap,null,null,p)
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
return A.b(r.qg().z_(520,160),$async$byU)
case 4:w=3
return A.b(b3.ho(B.fT),$async$byU)
case 3:b0=b3
u=b0==null?null:J.fa(B.dG.gaP(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byU,v)},
fqI(d){return C.hV8(d)},
hV8(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fqI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bdQ()
n=d.x!=null&&d.yG(null).length===0
if(d.x!=null)t=n?D.yU:D.HI
else t=d.gSW()?D.HI:D.aFG
w=3
return A.b(C.byU(d.ax),$async$fqI)
case 3:s=f
p.a=null
if(s!=null)p.a=A.alC(s)
r=A.a3h(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aFG}else{p.c=C.wo(q,!0)
p.b=n?D.yU:D.HI}r.a21(A.fM5(new C.fqK(p,d,new C.fqL(),t,n,o),null,D.bs7,B.vP))
u=r.jS(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fqI,v)},
fxl(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fxl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fqI(d),$async$fxl)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aJ(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A7.G2(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fxl,v)},
fik:function fik(){},
fil:function fil(){},
fiq:function fiq(d){this.a=d},
fqL:function fqL(){},
fqK:function fqK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fqJ:function fqJ(){},
fCz(d,e){var w=0,v=A.j(x.H)
var $async$fCz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.c9(null,B.w.j(0.55),!0,null,new C.fCD(new A.cp(null,x.J),e),d,null,!0,!0,x.H),$async$fCz)
case 2:return A.h(null,v)}})
return A.i($async$fCz,v)},
bBy(d,e,f,g){return C.i1w(d,e,f,g)},
i1w(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bBy=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gal(e.split(",")):e
r=B.cB.aJ(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.R(D.eOk)
w=1
break}w=3
return A.b(A.c9(null,null,!0,null,new C.fCv(g,r,f),d,null,!0,!0,x.H),$async$bBy)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bBy,v)},
fCE(d,e){var w=0,v=A.j(x.H)
var $async$fCE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.c9(null,null,!0,null,new C.fCH(new A.cp(null,x.J),e),d,null,!0,!0,x.H),$async$fCE)
case 2:return A.h(null,v)}})
return A.i($async$fCE,v)},
aWW:function aWW(d,e){this.c=d
this.a=e},
c_w:function c_w(){},
b8Y:function b8Y(d,e){this.b=d
this.a=e},
fCD:function fCD(d,e){this.a=d
this.b=e},
fCA:function fCA(d){this.a=d},
fCB:function fCB(d,e,f){this.a=d
this.b=e
this.c=f},
fCC:function fCC(d,e){this.a=d
this.b=e},
fCv:function fCv(d,e,f){this.a=d
this.b=e
this.c=f},
fCt:function fCt(d){this.a=d},
fCu:function fCu(d,e,f){this.a=d
this.b=e
this.c=f},
fCH:function fCH(d,e){this.a=d
this.b=e},
fCF:function fCF(d){this.a=d},
fCG:function fCG(d,e,f){this.a=d
this.b=e
this.c=f},
flN(d,e){var w=0,v=A.j(x.y),u,t
var $async$flN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a0W(d),$async$flN)
case 3:t=g
J.ni(t,new C.flO(e))
u=A.agm(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$flN,v)},
flO:function flO(d){this.a=d},
an_:function an_(d,e,f){this.c=d
this.d=e
this.a=f},
aBf:function aBf(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dD1:function dD1(d,e){this.a=d
this.b=e},
dCN:function dCN(d,e){this.a=d
this.b=e},
dCQ:function dCQ(d,e,f){this.a=d
this.b=e
this.c=f},
dCP:function dCP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dCO:function dCO(d,e){this.a=d
this.b=e},
dCR:function dCR(d,e){this.a=d
this.b=e},
dCL:function dCL(){},
dCM:function dCM(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dCK:function dCK(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dCv:function dCv(d){this.a=d},
dCw:function dCw(d,e,f){this.a=d
this.b=e
this.c=f},
dCx:function dCx(d,e){this.a=d
this.b=e},
dCu:function dCu(d){this.a=d},
dCC:function dCC(d,e){this.a=d
this.b=e},
dCt:function dCt(d){this.a=d},
dCD:function dCD(d,e,f){this.a=d
this.b=e
this.c=f},
dCE:function dCE(d,e,f){this.a=d
this.b=e
this.c=f},
dCs:function dCs(d,e){this.a=d
this.b=e},
dCF:function dCF(d,e,f){this.a=d
this.b=e
this.c=f},
dCr:function dCr(d,e){this.a=d
this.b=e},
dCG:function dCG(d,e){this.a=d
this.b=e},
dCq:function dCq(d){this.a=d},
dCH:function dCH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dCo:function dCo(){},
dCi:function dCi(d){this.a=d},
dCj:function dCj(d){this.a=d},
dCp:function dCp(d,e){this.a=d
this.b=e},
dCI:function dCI(d,e){this.a=d
this.b=e},
dCn:function dCn(d){this.a=d},
dCJ:function dCJ(d){this.a=d},
dCm:function dCm(){},
dCy:function dCy(d,e){this.a=d
this.b=e},
dCl:function dCl(d){this.a=d},
dCz:function dCz(d,e,f){this.a=d
this.b=e
this.c=f},
dCk:function dCk(d,e){this.a=d
this.b=e},
dCh:function dCh(d,e){this.a=d
this.b=e},
dCA:function dCA(d){this.a=d},
dCB:function dCB(d,e,f){this.a=d
this.b=e
this.c=f},
dD4:function dD4(){},
dD5:function dD5(d,e){this.a=d
this.b=e},
dD2:function dD2(d){this.a=d},
dD3:function dD3(d){this.a=d},
dCZ:function dCZ(d,e){this.a=d
this.b=e},
dD_:function dD_(d){this.a=d},
dCS:function dCS(d,e,f){this.a=d
this.b=e
this.c=f},
dCT:function dCT(d,e,f){this.a=d
this.b=e
this.c=f},
dCU:function dCU(d,e,f){this.a=d
this.b=e
this.c=f},
dCV:function dCV(d,e,f){this.a=d
this.b=e
this.c=f},
dCW:function dCW(d,e,f){this.a=d
this.b=e
this.c=f},
dCX:function dCX(d,e,f){this.a=d
this.b=e
this.c=f},
dCY:function dCY(d,e,f){this.a=d
this.b=e
this.c=f},
dD6:function dD6(){},
dD7:function dD7(){},
dD8:function dD8(){},
dD9:function dD9(d){this.a=d},
dD0:function dD0(d,e){this.a=d
this.b=e},
hda(d){return B.d.dM(D.a0Q,new C.fmi(d),new C.fmj())},
tZ:function tZ(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fmi:function fmi(d){this.a=d},
fmj:function fmj(){},
ajl:function ajl(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aSJ:function aSJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
RQ:function RQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcw:function bcw(){this.d=$
this.c=this.a=null},
d2U:function d2U(d,e){this.a=d
this.b=e},
d2S:function d2S(d,e){this.a=d
this.b=e},
d2T:function d2T(){},
d2V:function d2V(d,e){this.a=d
this.b=e},
fZ3(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.n4(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
K7(d,e){return C.hTM(d,e)},
hTM(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$K7=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$K7)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.R.aH(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.d8(p,x.f)
o=A.cD(o,new C.foi(),o.$ti.k("H.E"),x.B)
n=A.a3(o).k("a2<H.E>")
o=A.B(new A.a2(o,new C.foj(),n),n.k("H.E"))
B.d.b_(o,new C.fok())
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
return A.i($async$K7,v)},
Ao(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Ao=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aA(),$async$Ao)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fBd(),x.a)
r=A.B(r,r.$ti.k("ai.E"))
w=4
return A.b(t.ar("String","ngmy_family_book_v1_"+s+"_"+e,B.R.ao(r,null)),$async$Ao)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ao,v)},
aOW(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aOW=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.K7(d,e),$async$aOW)
case 2:u=h
t=J.cE(u)
s=t.bc(u,new C.fJh(f))
if(s===-1)t.cn(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Ao(d,e,u),$async$aOW)
case 3:return A.h(null,v)}})
return A.i($async$aOW,v)},
bzm(d,e,f){var w=0,v=A.j(x.H),u
var $async$bzm=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.K7(d,e),$async$bzm)
case 2:u=h
J.ni(u,new C.flF(f))
w=3
return A.b(C.Ao(d,e,u),$async$bzm)
case 3:return A.h(null,v)}})
return A.i($async$bzm,v)},
bzB(d,e){return C.hTL(d,e)},
hTL(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bzB=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bzB)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.LZ
w=1
break}p=B.R.aH(0,q,null)
if(x.f.b(p)){o=A.a1(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aN(o.h(0,"emblem"))
k=k==null?null:B.k.O(k)
if(k==null)k=0
if(D.BU.ah(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.y(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aN(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a2m,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.t(D.a1O,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.t(D.a1J,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.y(o.h(0,"ribbon"),!1)
o=B.d.t(D.cO6,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.GZ(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.LZ
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.LZ
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bzB,v)},
QG(d,e,f){return C.i12(d,e,f)},
i12(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$QG=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aA(),$async$QG)
case 7:r=h
w=8
return A.b(r.ar("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.R.ao(f.ae(),null)),$async$QG)
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
return A.i($async$QG,v)},
Qa(d,e){return C.hTN(d,e)},
hTN(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Qa=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$Qa)
case 7:r=g
q=r.rU("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.K7(d,e),$async$Qa)
case 8:if(!j.cx(g)){n=B.a.i(d.toLowerCase())
m=J.ll(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Qa)
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
return A.i($async$Qa,v)},
af1(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$af1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qa(d,e),$async$af1)
case 3:s=g
r=J.a8(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.K(s,t)
w=5
return A.b(A.aA(),$async$af1)
case 5:w=4
return A.b(g.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$af1)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$af1,v)},
a1A(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a1A=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Qa(d,e),$async$a1A)
case 2:s=h
J.hK(s,f)
w=3
return A.b(A.aA(),$async$a1A)
case 3:u=h
w=4
return A.b(u.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a1A)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1A)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1A)
case 6:return A.h(null,v)}})
return A.i($async$a1A,v)},
n4:function n4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
foi:function foi(){},
foj:function foj(){},
fok:function fok(){},
fBd:function fBd(){},
fJh:function fJh(d){this.a=d},
flF:function flF(d){this.a=d},
GZ:function GZ(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bLB:function bLB(d){this.a=d},
i1l(d,e,f,g,h,i,j){return A.a5(d,!1).ce(A.ej(new C.fBM(j,i,f,e,h,g),!0,null,x.H))},
Q6(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Q6=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qa(h,g),$async$Q6)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.I(x.q).f.R(D.aMC)
u=!1
w=1
break}w=4
return A.b(C.hgY(d,f,e),$async$Q6)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.af1(h,g),$async$Q6)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.n4(""+(q+n),l,B.a.i(m.b),new A.S(Date.now(),0,!1)))}w=6
return A.b(C.Ao(h,r,p),$async$Q6)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.QG(h,r,new C.GZ("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Q6)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Q6,v)},
fBM:function fBM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Yn:function Yn(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ayi:function ayi(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d3z:function d3z(d){this.a=d},
d3y:function d3y(d,e){this.a=d
this.b=e},
d3n:function d3n(d,e){this.a=d
this.b=e},
d3k:function d3k(d,e){this.a=d
this.b=e},
d2W:function d2W(d){this.a=d},
d2X:function d2X(d,e){this.a=d
this.b=e},
d3o:function d3o(d){this.a=d},
d34:function d34(d){this.a=d},
d32:function d32(d){this.a=d},
d33:function d33(d){this.a=d},
d35:function d35(d){this.a=d},
d3l:function d3l(d){this.a=d},
d3m:function d3m(){},
d30:function d30(d){this.a=d},
d31:function d31(d,e){this.a=d
this.b=e},
d36:function d36(d){this.a=d},
d37:function d37(d,e){this.a=d
this.b=e},
d3x:function d3x(d){this.a=d},
d3w:function d3w(d,e){this.a=d
this.b=e},
d3v:function d3v(d){this.a=d},
d3h:function d3h(d){this.a=d},
d3g:function d3g(d){this.a=d},
d3i:function d3i(d){this.a=d},
d2Y:function d2Y(d,e){this.a=d
this.b=e},
d3j:function d3j(d,e){this.a=d
this.b=e},
d3a:function d3a(d){this.a=d},
d3b:function d3b(d){this.a=d},
d39:function d39(){},
d3c:function d3c(d){this.a=d},
d3d:function d3d(d){this.a=d},
d3e:function d3e(d,e){this.a=d
this.b=e},
d3f:function d3f(d,e,f){this.a=d
this.b=e
this.c=f},
d38:function d38(d,e){this.a=d
this.b=e},
d3q:function d3q(d){this.a=d},
d3p:function d3p(){},
d3r:function d3r(d){this.a=d},
d3s:function d3s(d){this.a=d},
d3t:function d3t(d){this.a=d},
d3u:function d3u(d,e){this.a=d
this.b=e},
d2Z:function d2Z(d){this.a=d},
d3_:function d3_(d){this.a=d},
Yr:function Yr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcR:function bcR(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d5j:function d5j(d){this.a=d},
d5k:function d5k(d){this.a=d},
d5i:function d5i(d){this.a=d},
d5l:function d5l(d){this.a=d},
d5h:function d5h(d){this.a=d},
d5m:function d5m(d){this.a=d},
d5g:function d5g(d){this.a=d},
d5n:function d5n(d,e){this.a=d
this.b=e},
d5f:function d5f(d,e){this.a=d
this.b=e},
d5o:function d5o(d,e){this.a=d
this.b=e},
Yp:function Yp(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
adw:function adw(d,e,f){this.a=d
this.b=e
this.c=f},
ayj:function ayj(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d3O:function d3O(d,e){this.a=d
this.b=e},
d3N:function d3N(d,e){this.a=d
this.b=e},
d3S:function d3S(d){this.a=d},
d3R:function d3R(d,e){this.a=d
this.b=e},
d3P:function d3P(d){this.a=d},
d3Q:function d3Q(d){this.a=d},
d3T:function d3T(d){this.a=d},
d3U:function d3U(d){this.a=d},
d3M:function d3M(d,e){this.a=d
this.b=e},
d3L:function d3L(d,e){this.a=d
this.b=e},
Jf:function Jf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XG:function XG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cCR:function cCR(d){this.a=d},
cCS:function cCS(){},
cCT:function cCT(d){this.a=d},
ba8:function ba8(d,e,f){this.b=d
this.c=e
this.a=f},
ba_:function ba_(d,e){this.b=d
this.a=e},
u_:function u_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XY:function XY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ba6:function ba6(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cWi:function cWi(d,e,f){this.a=d
this.b=e
this.c=f},
cWh:function cWh(d,e){this.a=d
this.b=e},
cWH:function cWH(d){this.a=d},
cWu:function cWu(){},
cWI:function cWI(d){this.a=d},
cWt:function cWt(){},
cWJ:function cWJ(d,e){this.a=d
this.b=e},
cWs:function cWs(d,e){this.a=d
this.b=e},
cWK:function cWK(d,e){this.a=d
this.b=e},
cWr:function cWr(d,e){this.a=d
this.b=e},
cWL:function cWL(d){this.a=d},
cWq:function cWq(){},
cWM:function cWM(d,e){this.a=d
this.b=e},
cWp:function cWp(d,e){this.a=d
this.b=e},
cWN:function cWN(d){this.a=d},
cWC:function cWC(d,e){this.a=d
this.b=e},
cWO:function cWO(d){this.a=d},
cWP:function cWP(d){this.a=d},
cWR:function cWR(d){this.a=d},
cWS:function cWS(d){this.a=d},
cWB:function cWB(d,e){this.a=d
this.b=e},
cWT:function cWT(d,e){this.a=d
this.b=e},
aFi:function aFi(d){this.a=d},
bfj:function bfj(d){this.a=d},
b8m:function b8m(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hSK(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.agy(a6),a5=a4.length
if(a5===0)return""
w=A.V(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.by(new A.S(Date.now(),0,!1))
s=new C.fmm(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("a2<1>"),q=q.k("cQ<1,n>"),o=q.k("H.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.xv)m.push(l===D.YR?"male":"female")
l=u.w
k=A.af(a3,!0,!1,!1,!1).cD(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.af(a3,!0,!1,!1,!1).cD(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jU(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jU(h,a2,a2)-A.jU(j,a2,a2))+" years")
l=B.a.i(u.z)
if(l.length!==0)m.push("work: "+l)
f=s.$1(u)
if(f!=null)m.push("married to "+w.h(0,f).b)
e=u.d
if(e!=null&&w.ah(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.B(new A.cQ(new A.a2(a4,new C.fmk(u,f),p),new C.fml(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aI(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aI(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hSL(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.agy(a0),d=e.length
if(d===0)return""
w=x.N
v=A.V(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fmr(v,e)
q=new C.fmp(v)
p=A.V(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.L)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.L)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.L)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.ah(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.ah(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("bc<2>")
d=A.da(new A.bc(p,d),d.k("H.E"))
n=A.B(d,A.a3(d).k("cl.E"))
B.d.fg(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.L)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gag(e),k=new A.fx(l,new C.fmq(p,m));k.C();t=f){j=l.gU(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ah(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aI(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hEw(d,e,f,g){var w,v,u=C.hSM(d,e)
if(u<=0||f.length<=u)return new A.ad6(!1,D.BJ,f)
if(g.t(0,e.a))return new A.ad6(!1,D.BJ,f)
w=A.T(f).c
v=A.dc(f,0,A.dJ(u,"count",x.S),w).dF(0)
return new A.ad6(!0,A.dc(f,u,null,w).dF(0),v)},
hEx(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.agy(d3),d2=d1.length
if(d2===0)return D.fHg
w=x.N
v=A.V(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.ci(0,t.a,new C.d40(t))}s=new C.d4h(v)
d2=x.h
r=A.V(w,d2)
q=new C.d49(r)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d48(r)
l=A.V(w,x.do)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cf(l.ci(0,k,new C.d41()),o)}h=new C.d47(s)
g=new C.d46(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a2<H.E>")
f=A.B(new A.a2(new A.bc(v,p),new C.d42(h),o),o.k("H.E"))
e=f.length===0?new A.bc(v,p).gL(0):B.d.gL(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.L)(f),++u){t=f[u]
a0=g.$2(t.a,A.aW(w))
if(a0>d){d=a0
e=t}}a1=A.aW(w)
p=x.S
a2=A.V(w,p)
a3=A.V(w,w)
a4=A.V(w,d2)
d2=x.gR
a5=A.V(w,d2)
a6=A.V(w,x.d9)
a7=A.V(w,d2)
a8=A.a([],x.s)
a9=new C.d4f(new C.d4b(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.V(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dt(v,v.r,v.e),j=a2.gajf(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.eu([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.K(0,i))break}if(h.$1(b0)&&a2.ah(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.r0(J.dH(i==null?B.T:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.V(w,x.cc)
b5=A.a([],x.M)
b6=A.V(w,d2)
b7=new C.d4_(a2,new C.d4g(),b6,a3,b4,v,a4,a5,a6,b5)
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
d2=b4.$ti.k("cz<1>")
d2=A.B(new A.cz(b4,d2),d2.k("H.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.Fb(o,new A.u(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Jn(c5.a,new A.u(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cz<1>")
d2=A.B(new A.cz(b6,d2),d2.k("H.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bH(0,new C.d43(c6,b4))
for(d2=new A.cJ(a4,a4.$ti.k("cJ<1,2>")).gag(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aX(c7.b);j.C();){i=j.gU(j)
if(b6.ah(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gag(b5),i=new A.fx(j,new C.d44(c8));i.C();)o.push(j.gU(0).b)
if(o.length===0)continue
B.d.b_(o,new C.d45())
c6.push(new C.aHn(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bcB(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hcI(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(d)
return w==null?null:w.b[1]},
h73(d,e,f,g,h,i,j,k,l,m,n){return new C.Z0(k,f,j,e,l,n,m,d,g,h,i,null)},
aAg(d,e,f,g,h,i,j){return new C.bgf(i,d,e,f,j,h,g,null)},
ao5:function ao5(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBQ:function aBQ(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dQD:function dQD(d){this.a=d},
dQC:function dQC(d){this.a=d},
dQF:function dQF(d,e){this.a=d
this.b=e},
dQG:function dQG(d,e){this.a=d
this.b=e},
dQH:function dQH(d){this.a=d},
dQB:function dQB(d,e){this.a=d
this.b=e},
dQE:function dQE(d){this.a=d},
dQJ:function dQJ(d){this.a=d},
dQI:function dQI(d,e){this.a=d
this.b=e},
ao_:function ao_(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBN:function aBN(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dQ3:function dQ3(d){this.a=d},
dQ1:function dQ1(d){this.a=d},
dQ2:function dQ2(d){this.a=d},
dQ4:function dQ4(d,e){this.a=d
this.b=e},
dPZ:function dPZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPx:function dPx(d){this.a=d},
dPy:function dPy(d,e){this.a=d
this.b=e},
dPM:function dPM(d){this.a=d},
dPK:function dPK(d){this.a=d},
dPL:function dPL(d,e){this.a=d
this.b=e},
dPN:function dPN(d){this.a=d},
dPO:function dPO(d,e){this.a=d
this.b=e},
dPY:function dPY(d,e){this.a=d
this.b=e},
dPW:function dPW(d,e){this.a=d
this.b=e},
dPV:function dPV(d,e){this.a=d
this.b=e},
dPR:function dPR(d,e){this.a=d
this.b=e},
dPQ:function dPQ(d){this.a=d},
dPS:function dPS(d,e){this.a=d
this.b=e},
dPP:function dPP(d){this.a=d},
dPT:function dPT(d){this.a=d},
dPU:function dPU(d){this.a=d},
dPX:function dPX(d,e){this.a=d
this.b=e},
dPl:function dPl(d,e){this.a=d
this.b=e},
dPm:function dPm(d,e){this.a=d
this.b=e},
dQ6:function dQ6(d,e,f){this.a=d
this.b=e
this.c=f},
dQ0:function dQ0(d,e,f){this.a=d
this.b=e
this.c=f},
dQ_:function dQ_(d){this.a=d},
dPn:function dPn(d){this.a=d},
dPo:function dPo(d){this.a=d},
dPp:function dPp(){},
dPq:function dPq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPu:function dPu(d,e){this.a=d
this.b=e},
dPt:function dPt(d,e){this.a=d
this.b=e},
dPs:function dPs(d){this.a=d},
dPv:function dPv(d,e){this.a=d
this.b=e},
dPr:function dPr(d){this.a=d},
dQ5:function dQ5(d){this.a=d},
dPH:function dPH(){},
dPI:function dPI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPG:function dPG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPC:function dPC(d,e,f){this.a=d
this.b=e
this.c=f},
dPB:function dPB(d,e,f){this.a=d
this.b=e
this.c=f},
dPz:function dPz(d,e){this.a=d
this.b=e},
dPD:function dPD(d){this.a=d},
dPE:function dPE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPA:function dPA(d,e){this.a=d
this.b=e},
dPF:function dPF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPJ:function dPJ(d,e){this.a=d
this.b=e},
dQd:function dQd(){},
dQe:function dQe(d,e){this.a=d
this.b=e},
dQf:function dQf(d){this.a=d},
dQg:function dQg(d,e){this.a=d
this.b=e},
dQ9:function dQ9(d){this.a=d},
dQ7:function dQ7(d,e){this.a=d
this.b=e},
dQa:function dQa(d,e){this.a=d
this.b=e},
dQb:function dQb(d,e){this.a=d
this.b=e},
dQc:function dQc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dQh:function dQh(d){this.a=d},
dQ8:function dQ8(d){this.a=d},
dPw:function dPw(d){this.a=d},
bcz:function bcz(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d3Y:function d3Y(d){this.a=d},
d3X:function d3X(d,e){this.a=d
this.b=e},
d3Z:function d3Z(d){this.a=d},
d3W:function d3W(d,e){this.a=d
this.b=e},
fmm:function fmm(d,e){this.a=d
this.b=e},
fmn:function fmn(d){this.a=d},
fmo:function fmo(){},
fmk:function fmk(d,e){this.a=d
this.b=e},
fml:function fml(){},
fmr:function fmr(d,e){this.a=d
this.b=e},
fms:function fms(d){this.a=d},
fmt:function fmt(){},
fmp:function fmp(d){this.a=d},
fmq:function fmq(d,e){this.a=d
this.b=e},
Jn:function Jn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Fb:function Fb(d,e){this.a=d
this.b=e},
bcB:function bcB(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d40:function d40(d){this.a=d},
d4h:function d4h(d){this.a=d},
d49:function d49(d){this.a=d},
d4a:function d4a(){},
d48:function d48(d){this.a=d},
d41:function d41(){},
d47:function d47(d){this.a=d},
d46:function d46(d,e){this.a=d
this.b=e},
d42:function d42(d){this.a=d},
d4b:function d4b(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d4c:function d4c(d){this.a=d},
d4d:function d4d(d){this.a=d},
d4e:function d4e(){},
d4f:function d4f(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d4g:function d4g(){},
d4_:function d4_(d,e,f,g,h,i,j,k,l,m){var _=this
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
d43:function d43(d,e){this.a=d
this.b=e},
d44:function d44(d){this.a=d},
d45:function d45(){},
aHn:function aHn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcC:function bcC(d,e){this.b=d
this.a=e},
d4i:function d4i(){},
d4j:function d4j(d){this.a=d},
d4k:function d4k(d){this.a=d},
d4l:function d4l(){},
bgg:function bgg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbH:function bbH(d,e){this.b=d
this.a=e},
btQ:function btQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
f4R:function f4R(d){this.a=d},
bjB:function bjB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eH8:function eH8(d){this.a=d},
eH7:function eH7(d,e){this.a=d
this.b=e},
Z0:function Z0(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aAe:function aAe(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dk8:function dk8(d,e){this.a=d
this.b=e},
dk7:function dk7(d){this.a=d},
dk5:function dk5(d){this.a=d},
dk6:function dk6(d){this.a=d},
dkh:function dkh(d){this.a=d},
dki:function dki(d){this.a=d},
dkg:function dkg(d,e){this.a=d
this.b=e},
dkj:function dkj(){},
dkm:function dkm(d){this.a=d},
dkf:function dkf(d,e){this.a=d
this.b=e},
dkl:function dkl(){},
dkn:function dkn(d){this.a=d},
dke:function dke(d,e){this.a=d
this.b=e},
dko:function dko(d){this.a=d},
dkd:function dkd(d){this.a=d},
dkp:function dkp(d){this.a=d},
dkc:function dkc(d){this.a=d},
dkq:function dkq(d){this.a=d},
dkb:function dkb(d){this.a=d},
dkr:function dkr(d){this.a=d},
dka:function dka(d){this.a=d},
dks:function dks(d){this.a=d},
dk9:function dk9(d,e){this.a=d
this.b=e},
dkk:function dkk(d){this.a=d},
abZ:function abZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgf:function bgf(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
abY:function abY(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bge:function bge(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dkt:function dkt(d){this.a=d},
dku:function dku(d,e){this.a=d
this.b=e},
aAf:function aAf(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGq:function aGq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ac_:function ac_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dkD:function dkD(d){this.a=d},
Ja:function Ja(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
h1Y(d){var w=d.S,v=x.N
return w.iT(w,new C.c63(),v,v)},
hw4(d){var w=d.bC
if(w>=0)return w
return 5},
h2_(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.h1Y(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
h1Z(d,e){var w=C.h2_(d,e)
if(w!=null&&w.ca(new A.S(Date.now(),0,!1)))return!0
return!1},
hw5(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.h1Y(d),w,w)
u=C.h2_(d,e)
t=u!=null&&u.ca(new A.S(Date.now(),0,!1))?u:new A.S(Date.now(),0,!1)
v.n(0,s,t.bN(A.dB(30,0,0,0,0,0).a).a5().ac())
d.S=v},
aYl(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aYl=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.la(t,B.Hv),$async$aYl)
case 3:if(l){u=!0
w=1
break}u=A.kN(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Hv,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYl,v)},
c63:function c63(){},
hw2(){var w,v=$.ph(),u=J.e1(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fV(u)},
HR(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$HR=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$HR)
case 3:if(!e){u=A.V(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f0("ngmy_family_tree_backup_codes_v1",null,!1,B.bG),$async$HR)
case 8:r=e
if(r==null){u=A.V(x.N,x.z)
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
p=A.a9(m)
$.am.$1("[family tree sync codes] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.V(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$HR,v)},
a69(d){return C.hw3(d)},
hw3(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a69=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$a69)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hB("ngmy_family_tree_backup_codes_v1",A.E(["codes",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,B.cF,null),$async$a69)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a9(p)
$.am.$1("[family tree sync codes] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a69,v)},
c62(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c62=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.HR(),$async$c62)
case 3:t=m.jr(f),t=t.gag(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gU(t)
q=r.b
if(s.b(q)){p=J.a8(q)
o=p.h(q,"email")
p=B.a.i(J.k(o==null?"":o).toLowerCase())===n&&J.y(p.h(q,"active"),!0)}else p=!1
if(p){u=r.a
w=1
break}w=4
break
case 5:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c62,v)},
MJ(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$MJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c62(d),$async$MJ)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.HR(),$async$MJ)
case 6:s=f
r=J.a8(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dW(A.a1(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.S(Date.now(),0,!1).a5().ac())
r.n(s,t,o)
w=9
return A.b(C.a69(s),$async$MJ)
case 9:case 8:u=t
w=1
break
case 5:n=C.hw2()
w=10
return A.b(C.HR(),$async$MJ)
case 10:s=f
J.aG(s,n,A.E(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a5().ac(),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=11
return A.b(C.a69(s),$async$MJ)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$MJ,v)},
aYk(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aYk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.HR(),$async$aYk)
case 3:t=f
for(s=J.dj(t),r=s.gdL(t),r=r.dF(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a69(t),$async$aYk)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aYk,v)},
a6a(d,e,f){var w=0,v=A.j(x.H),u
var $async$a6a=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.ao4(d,e),$async$a6a)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.MJ(d),$async$a6a)
case 7:w=4
break
case 5:w=8
return A.b(C.aYk(d),$async$a6a)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a6a,v)},
anZ(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$anZ=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.ao4(f,e),$async$anZ)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c1(),$async$anZ)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.HR(),$async$anZ)
case 7:q=o.q(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a8(q)
if(!J.y(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anZ,v)},
aYj(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aYj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c1(),$async$aYj)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.HR(),$async$aYj)
case 4:t=q.q(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a8(t)
if(!J.y(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYj,v)},
hw6(){var w,v=$.ph(),u=J.e1(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fV(u)},
ao1(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$ao1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$ao1)
case 3:if(!g){u=null
w=1
break}t=C.hw6()
w=4
return A.b(A.U8(),$async$ao1)
case 4:s=g
r=B.dI.aJ(B.R.ao(d.eK(),null))
r=B.cS.gcv().aJ(r)
q=e?999:2
J.aG(s,t,A.E(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=5
return A.b(A.a6b(s),$async$ao1)
case 5:p=e?999:2
u=new A.a_a("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ao1,v)},
ao0(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$ao0=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.U8(),$async$ao0)
case 3:p=a0
o=J.a8(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a8(n)
l=A.aN(m.h(n,"usesRemaining"))
k=l==null?null:B.k.O(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aYj(J.k(l==null?"":l),j),$async$ao0)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.c4.c8(0,B.cB.aJ(t))
s=C.h20(r)}catch(f){q=A.a9(f)
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
l.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a5().ac())
o.n(p,g,l)}w=5
return A.b(A.a6b(p),$async$ao0)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ao0,v)},
h20(d){var w,v,u,t,s=null
try{w=B.R.aH(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hw8(A.a1(w,x.N,x.z))
return u}catch(t){v=A.a9(t)
$.am.$1("[family tree sync] parse: "+A.t(v))
return s}},
fN8(d){var w=0,v=A.j(x.m),u,t,s
var $async$fN8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.ao0(t[1])
w=1
break}u=null
w=1
break}u=C.h20(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fN8,v)},
hw8(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d8(v,x.f)
u=A.cD(u,new C.c65(),u.$ti.k("H.E"),x.k)
t=A.a3(u).k("a2<H.E>")
s=A.B(new A.a2(u,new C.c66(),t),t.k("H.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.V(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jr(p),t=t.gag(t),o=x.B;t.C();){n=t.gU(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d8(l,u)
n=A.cD(n,new C.c67(),n.$ti.k("H.E"),o)
k=A.a3(n).k("a2<H.E>")
j=A.B(new A.a2(n,new C.c68(),k),k.k("H.E"))
if(j.length!==0)q.n(0,m,j)}return new C.ao2(h,w,s,r,q)},
ao4(d,e){var w=0,v=A.j(x.y),u,t
var $async$ao4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.MA(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Ad(d),$async$ao4)
case 3:u=t.cx(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ao4,v)},
c6e(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c6e=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Ad(d),$async$c6e)
case 3:t=s.b6(f,new C.c6f(),x.cs)
t=A.B(t,t.$ti.k("ai.E"))
B.d.b_(t,new C.c6g())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6e,v)},
U9(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$U9=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.ao4(e,d),$async$U9)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.MJ(e),$async$U9)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Ad(e),$async$U9)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.c6c(g))
r=A.B(t,t.$ti.k("H.E"))}t=J.a8(r)
if(t.gam(r)){u=null
w=1
break}t=t.dt(r,new C.c6d(e),x.k)
r=A.B(t,t.$ti.k("ai.E"))
q=A.V(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.K7(e,o),$async$U9)
case 14:n=i
if(J.cx(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.ao2(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$U9,v)},
aYo(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aYo=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.U9(d,e,f,g),$async$aYo)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gL(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aJ(t,s,"_")
r=q.a
u=A.FT(A.Jj(q.eK(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYo,v)},
aYn(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aYn=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.U9(d,e,f,g),$async$aYn)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.ao1(r,f),$async$aYn)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aEr(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYn,v)},
Ua(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ua=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fN8(a0),$async$Ua)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.anZ(g.a,d,e,f,s,r),$async$Ua)
case 6:if(!a2){if(r)throw A.U(A.bd("This backup expired or the sender's tree is no longer available."))
throw A.U(A.bd("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bzc(e,j),$async$Ua)
case 12:case 11:w=13
return A.b(C.agk(e,j,s),$async$Ua)
case 13:h=n.h(0,i)
w=h!=null&&J.cx(h)?14:15
break
case 14:w=16
return A.b(C.Ao(e,i,h),$async$Ua)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bn6(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ua,v)},
ao2:function ao2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c6a:function c6a(){},
c6b:function c6b(){},
c69:function c69(){},
c65:function c65(){},
c66:function c66(){},
c67:function c67(){},
c68:function c68(){},
c6f:function c6f(){},
c6g:function c6g(){},
c6c:function c6c(d){this.a=d},
c6d:function c6d(d){this.a=d},
fVm(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.fe(null,x.H)
return A.hv(d,new C.ao3(w,e,g,i,f,h,null),!0,null,x.H)},
d3V(d,e,f,g,h,i,j,k){return new C.bcy(i,e,k,j,g,f,h,d,null)},
ao3:function ao3(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBP:function aBP(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dQq:function dQq(d){this.a=d},
dQr:function dQr(d,e,f){this.a=d
this.b=e
this.c=f},
dQv:function dQv(d,e){this.a=d
this.b=e},
dQw:function dQw(d){this.a=d},
dQn:function dQn(d){this.a=d},
dQo:function dQo(d,e){this.a=d
this.b=e},
dQp:function dQp(d,e){this.a=d
this.b=e},
dQu:function dQu(d){this.a=d},
dQt:function dQt(d,e){this.a=d
this.b=e},
dQs:function dQs(){},
dQy:function dQy(d){this.a=d},
dQz:function dQz(d,e){this.a=d
this.b=e},
dQx:function dQx(d,e){this.a=d
this.b=e},
d4m:function d4m(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bcA:function bcA(d,e,f){this.d=d
this.e=e
this.a=f},
abg:function abg(d,e,f){this.c=d
this.d=e
this.a=f},
bcy:function bcy(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bcD:function bcD(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Zl:function Zl(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBO:function aBO(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dQi:function dQi(d,e){this.a=d
this.b=e},
dQj:function dQj(d){this.a=d},
dQk:function dQk(d){this.a=d},
dQl:function dQl(d){this.a=d},
dQm:function dQm(d){this.a=d},
Zm:function Zm(d){this.a=d},
bhI:function bhI(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dQA:function dQA(d,e){this.a=d
this.b=e},
aWV(d,e){return new C.aWU(d,e,null)},
aWU:function aWU(d,e,f){this.c=d
this.d=e
this.a=f},
hVd(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b0(d,11)},
i1v(d){return A.bW(B.K,null,new C.fCe(new C.tv(A.O(d).ax.a===B.H)),d,!0,!0,!0,null,!1,!1,x.N)},
h3S(d,e){return new C.ar_(e,d,null)},
aOC(d,e,f,g,h,i,j){var w=C.hVd(i)
if(w!=null)return A.bw(e,new A.a6(j,f,new C.a5c(w,!0,null),null),B.aq)
return I.aNY(e,B.bQ,f,g,h,i,j)},
lu:function lu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5c:function a5c(d,e,f){this.c=d
this.d=e
this.a=f},
bhp:function bhp(d,e){var _=this
_.e=_.d=$
_.cS$=d
_.b2$=e
_.c=_.a=null},
dC9:function dC9(d){this.a=d},
dCa:function dCa(){},
dCb:function dCb(d,e){this.a=d
this.b=e},
bho:function bho(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fCe:function fCe(d){this.a=d},
fCd:function fCd(d,e){this.a=d
this.b=e},
fCc:function fCc(d,e){this.a=d
this.b=e},
fCb:function fCb(d,e){this.a=d
this.b=e},
ar_:function ar_(d,e,f){this.c=d
this.d=e
this.a=f},
cdI:function cdI(d,e){this.a=d
this.b=e},
aJJ:function aJJ(){},
i1g(d){var w=null
return A.c9(w,w,!0,w,new C.fBB(),d,w,!0,!0,x.e2)},
i2q(d,e,f,g,h){var w=null
return A.c9(w,w,!0,w,new C.fJ3(h,g,f,e),d,w,!0,!0,x.N)},
i1i(d,e){var w=null
return A.c9(w,w,!0,w,new C.fBG(e),d,w,!0,!0,x.dY)},
i1h(d){var w=null
return A.c9(w,w,!0,w,new C.fBF(),d,w,!0,!0,x.c5)},
aRu:function aRu(d,e){this.a=d
this.b=e},
aRt:function aRt(d){this.a=d},
aPz:function aPz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBB:function fBB(){},
fJ3:function fJ3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBG:function fBG(d){this.a=d},
fBF:function fBF(){},
Y_:function Y_(d,e){this.c=d
this.a=e},
ax4:function ax4(){var _=this
_.d=$
_.c=_.a=_.e=null},
cX4:function cX4(d){this.a=d},
cX5:function cX5(d){this.a=d},
cX3:function cX3(d,e){this.a=d
this.b=e},
cX6:function cX6(d){this.a=d},
cX7:function cX7(d){this.a=d},
XZ:function XZ(d){this.a=d},
ax3:function ax3(){this.d=$
this.c=this.a=null},
cX0:function cX0(d){this.a=d},
cX1:function cX1(d){this.a=d},
cX2:function cX2(d){this.a=d},
Xx:function Xx(d){this.a=d},
avO:function avO(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cuE:function cuE(){},
cuK:function cuK(d){this.a=d},
cuL:function cuL(d){this.a=d},
cuM:function cuM(d){this.a=d},
cuJ:function cuJ(){},
cuN:function cuN(d){this.a=d},
cuO:function cuO(d){this.a=d},
cuI:function cuI(){},
cuP:function cuP(d,e){this.a=d
this.b=e},
cuH:function cuH(d,e){this.a=d
this.b=e},
cuF:function cuF(d,e){this.a=d
this.b=e},
cuQ:function cuQ(d){this.a=d},
cuG:function cuG(){},
cuR:function cuR(d){this.a=d},
a03:function a03(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
btI:function btI(){this.d=$
this.c=this.a=null},
f4j:function f4j(d,e){this.a=d
this.b=e},
f4k:function f4k(d){this.a=d},
f4l:function f4l(d,e){this.a=d
this.b=e},
aak:function aak(d,e){this.a=d
this.b=e},
EZ:function EZ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
btG:function btG(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f4h:function f4h(d,e){this.a=d
this.b=e},
avH:function avH(d,e){this.c=d
this.a=e},
btH:function btH(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f4i:function f4i(d){this.a=d},
btF:function btF(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aLS:function aLS(){},
aLT:function aLT(){},
bB9(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bw(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.ow(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fAm(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.WW(A.dq(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aOe(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aOe=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hW().l_(85,1280,B.eG),$async$aOe)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fe(),$async$aOe)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.h3R()
w=9
return A.b(C.cdH(q,r),$async$aOe)
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
o=A.a9(l)
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
return A.i($async$aOe,v)},
aOA(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aOA=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cdE(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gal(g.split(",")):g
p=B.cB.aJ(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.X().KX(p,!0,null,i).cM(0,B.fP),$async$aOA)
case 9:n=a1
w=10
return A.b(n.me(),$async$aOA)
case 10:m=a1
w=11
return A.b(J.aPk(m).ho(B.fT),$async$aOA)
case 11:l=a1
J.aPk(m).q()
if(l==null){w=8
break}i=J.fa(B.dG.gaP(l))
k="data:image/png;base64,"+B.cS.gcv().aJ(i)
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
j=A.a9(f)
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
return A.i($async$aOA,v)},
fAm:function fAm(){},
tv:function tv(d){this.a=d},
aqZ:function aqZ(d,e,f){this.c=d
this.d=e
this.a=f},
aDk:function aDk(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eEi:function eEi(d,e){this.a=d
this.b=e},
eE9:function eE9(d){this.a=d},
eEa:function eEa(d){this.a=d},
eEg:function eEg(d,e){this.a=d
this.b=e},
eEf:function eEf(d,e){this.a=d
this.b=e},
eEc:function eEc(d,e){this.a=d
this.b=e},
eEb:function eEb(d,e){this.a=d
this.b=e},
eEd:function eEd(d){this.a=d},
eEe:function eEe(d,e){this.a=d
this.b=e},
eEh:function eEh(d,e){this.a=d
this.b=e},
eE4:function eE4(d,e){this.a=d
this.b=e},
eE8:function eE8(d){this.a=d},
eE7:function eE7(d,e){this.a=d
this.b=e},
eE6:function eE6(d){this.a=d},
eEj:function eEj(d,e){this.a=d
this.b=e},
eEk:function eEk(d,e){this.a=d
this.b=e},
eE5:function eE5(d,e){this.a=d
this.b=e},
hgu(d,e,f){var w="thumbnailPath",v=e.ae()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.E(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a5().ac(),"project",v],x.N,x.z)},
fAn(d,e,f){var w=0,v=A.j(x.N),u
var $async$fAn=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.R.ao(C.hgu(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fAn,v)},
bBb(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bBb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fAn(!0,d,e),$async$bBb)
case 4:w=3
return A.b(r.aqX(g,d,e.a),$async$bBb)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dI.aJ(B.R.ao(C.hgu(d,e,null),null))
u="NGMY_WS:"+B.k3.gcv().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBb,v)},
h8o(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fV3(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.cZ(s,"NGMYWSSYNC2|"))return!0
if(J.cZ(s,"NGMY_WS:"))return!0
if(J.eY(s,t))return!0
if(J.cZ(s,"{"))try{w=B.R.aH(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
i_g(d){var w,v,u,t=C.h8o(d)
if(t==null)return null
if(C.fV3(t))return t
w=B.a.cJ(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b0(t,w))
if(C.fV3(v))return v}u=B.a.cJ(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b0(t,u))
if(C.fV3(v))return v}return null},
fV2(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.cZ(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.cZ(q,"NGMY_WS:")){v=B.c4.c8(0,B.cB.aJ(J.my(q,8)))
w=t.a(B.R.aH(0,v,r))}else w=t.a(B.R.aH(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fPH(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bBa(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bBa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.aqW(t[1]),$async$bBa)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fV2(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fV2(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBa,v)},
fV1(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.ld(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bAI(){var w=0,v=A.j(x.o),u,t
var $async$bAI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.G3(),$async$bAI)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fV2(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAI,v)},
hhl(d,e,f,g){return A.bW(B.K,null,new C.fIW(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fIW:function fIW(d,e,f){this.a=d
this.b=e
this.c=f},
ack:function ack(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eEm:function eEm(d,e){this.a=d
this.b=e},
eEn:function eEn(d,e){this.a=d
this.b=e},
eEo:function eEo(d,e){this.a=d
this.b=e},
eEp:function eEp(d,e){this.a=d
this.b=e},
eEl:function eEl(d){this.a=d},
aqT:function aqT(d,e,f){this.c=d
this.d=e
this.a=f},
bj4:function bj4(){var _=this
_.c=_.a=_.e=_.d=null},
eE_:function eE_(d,e){this.a=d
this.b=e},
eE0:function eE0(d){this.a=d},
eE1:function eE1(d){this.a=d},
aqY:function aqY(d){this.a=d},
aDj:function aDj(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eE3:function eE3(d){this.a=d},
eE2:function eE2(d){this.a=d},
hzl(d,e,f,g,h){return new C.Nk(h,g,d,e,f,null)},
aI4:function aI4(d,e){this.a=d
this.b=e},
Nk:function Nk(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDl:function aDl(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eEM:function eEM(){},
eEI:function eEI(d,e){this.a=d
this.b=e},
eEJ:function eEJ(d){this.a=d},
eEt:function eEt(d){this.a=d},
eEr:function eEr(d){this.a=d},
eEs:function eEs(d){this.a=d},
eEC:function eEC(d,e){this.a=d
this.b=e},
eEz:function eEz(d,e){this.a=d
this.b=e},
eEA:function eEA(d,e){this.a=d
this.b=e},
eEB:function eEB(d,e,f){this.a=d
this.b=e
this.c=f},
eEx:function eEx(d,e,f){this.a=d
this.b=e
this.c=f},
eEv:function eEv(d){this.a=d},
eEw:function eEw(d){this.a=d},
eEy:function eEy(d){this.a=d},
eEP:function eEP(d){this.a=d},
eEO:function eEO(d){this.a=d},
eEQ:function eEQ(d){this.a=d},
eEN:function eEN(d){this.a=d},
eEq:function eEq(d){this.a=d},
eEu:function eEu(d,e){this.a=d
this.b=e},
eEL:function eEL(d,e){this.a=d
this.b=e},
eEK:function eEK(d,e){this.a=d
this.b=e},
eEF:function eEF(d){this.a=d},
eEG:function eEG(d){this.a=d},
eEH:function eEH(d,e){this.a=d
this.b=e},
eEE:function eEE(d,e){this.a=d
this.b=e},
eED:function eED(d,e,f){this.a=d
this.b=e
this.c=f},
bvt:function bvt(){},
A4(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aJ(v,w,"_")},
aeL(d,e,f){return C.hOQ(d,e,f)},
hOQ(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aeL=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.ar("String",e,f),$async$aeL)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a9(o)
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
return A.i($async$aeL,v)},
aeK(d,e){return C.hOP(d,e)},
hOP(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aeK=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$aeK)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.a9(q)
$.am.$1("[worksheets] remove failed for "+e+": "+A.t(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$aeK,v)},
hNC(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.RX(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
byc(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$byc=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b0A(q),$async$byc)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aOA(q,!1),$async$byc)
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
return A.i($async$byc,v)},
hnc(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aN(d.h(0,"price")),o=p==null?null:p
if(o==null)o=0
w=A.aN(d.h(0,"quantity"))
if(w==null)w=null
v=A.aN(d.h(0,"unitPrice"))
if(v==null)v=null
if(w!=null&&v!=null){p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
u=J.k(u==null?"":u)
t=w<=0?1:w
s=d.h(0,r)
if(B.a.i(J.k(s==null?q:s)).length===0)s=q
else{s=d.h(0,r)
s=J.k(s==null?q:s)}return new C.qL(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qL(p,J.k(u==null?"":u),1,o,q)},
fPH(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d8(s,x.f)
w=A.cD(w,new C.cu2(),w.$ti.k("H.E"),x.Q)
v=A.a3(w).k("a2<H.E>")
r=A.B(new A.a2(w,new C.cu3(),v),v.k("H.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.ld(w,v,u,r,t==null?new A.S(Date.now(),0,!1):t)},
hSG(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.YR
case"female":case"f":return D.ahV
default:return D.xv}},
hdb(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
fZ4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hSG(v==null?j:J.k(v))
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
m=A.aN(d.h(0,"birthOrder"))
m=m==null?j:B.k.O(m)
if(m==null)m=1
l=J.y(d.h(0,"hidden"),!0)
k=A.aN(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.O(k)
return new C.hV(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
hSI(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.M_
case"viewer":return D.kf
default:return D.tr}},
hSJ(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
FU(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bzt(d,e){return B.a.i(e.toLowerCase())===C.FU(d,e)&&d.y!==D.kf},
tH(d,e){var w,v=d.y
if(v===D.kf)return!1
w=B.a.i(e.toLowerCase())
if(w===C.FU(d,e))return!0
if(v===D.M_)return!0
v=d.e
return new A.K(v,A.fV7(),A.T(v).k("K<1,n>")).t(0,w)},
hS8(d){return J.dH(d,new C.flx()).gM(0)},
fJo(d){var w=0,v=A.j(x.y),u,t
var $async$fJo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Ad(d),$async$fJo)
case 3:u=t.qH(f,new C.fJp(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fJo,v)},
bzc(d,e){var w=0,v=A.j(x.H),u,t
var $async$bzc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ad(d),$async$bzc)
case 3:t=g
if(J.qH(t,new C.fk3(e))){w=1
break}if(C.hS8(t)>=2)throw A.U(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bzc,v)},
ajn(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d8(n,x.f)
w=A.cD(w,new C.bLC(),w.$ti.k("H.E"),x.P)
v=A.a3(w).k("a2<H.E>")
m=A.B(new A.a2(w,new C.bLD(),v),v.k("H.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bLE(),x.N)
t=A.B(l,l.$ti.k("ai.E"))}else t=A.a([],x.s)
l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"code")
v=J.k(v==null?"":v)
s=J.y(d.h(0,"isPrivate"),!1)
r=d.h(0,"createdAt")
r=A.bi(J.k(r==null?"":r))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.aN(d.h(0,"visibleChildrenPerParent"))
q=q==null?null:B.k.O(q)
if(q==null)q=0
p=d.h(0,"ownerEmail")
p=J.k(p==null?"":p)
o=d.h(0,"localRole")
return new C.kw(l,w,v,!s,t,m,r,q,p,C.hSI(o==null?null:J.k(o)))},
hdk(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
Co(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$Co=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.QE(d),$async$Co)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aA(),$async$Co)
case 4:t=f
w=5
return A.b(t.a50(0),$async$Co)
case 5:w=6
return A.b(C.fbQ(t,l),$async$Co)
case 6:s=f
if(J.cx(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a8(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.h8Y(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.ov(l,n),$async$Co)
case 11:u=n
w=1
break
case 10:case 8:m=A.aU(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.h8Y(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.ov(l,n),$async$Co)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Co,v)},
fbQ(d,e){return C.hL7(d,e)},
hL7(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fbQ=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a8(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.A4(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.R.aH(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aX(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gU(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.A4(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.R.aH(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fPH(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.A4(a9)+"_"+n))
i=C.hNC(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b0A(h),$async$fbQ)
case 17:g=b1
if(g!=null){i=i.RX(g)
p=!0}case 16:J.cf(q,i)
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
case 8:J.QO(q,new C.fbR())
if(p&&J.ad(q)!==0)C.ov(a9,q)
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
return A.i($async$fbQ,v)},
bzE(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bzE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.QE(d),$async$bzE)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Co(r),$async$bzE)
case 4:t=p.aX(g)
case 5:if(!t.C()){w=6
break}s=t.gU(t)
if(s.a===q){u=s
w=1
break}w=5
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzE,v)},
h8Y(d){var w,v,u,t
try{w=B.R.aH(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d8(w,x.f)
v=A.cD(v,new C.f7y(),v.$ti.k("H.E"),x.i)
u=A.a3(v).k("a2<H.E>")
v=A.B(new A.a2(v,new C.f7z(),u),u.k("H.E"))
B.d.b_(v,new C.f7A())
return v}catch(t){v=A.a([],x.D)
return v}},
ov(d,e){return C.i16(d,e)},
i16(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$ov=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.QE(b2),$async$ov)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aA(),$async$ov)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.A4(a8)
p=A.aU(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.R.aH(0,p,null)),new C.fBs(),a2).fH(0)
a2=J.b6(b3,new C.fBt(),a2).bZ(0,new C.fBu())
n=A.da(a2,a2.$ti.k("H.E"))
a2=o,a2=A.ea(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eY(n,m)?17:18
break
case 17:a5=C.A4(a8)
l=A.aU(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a7r(l),$async$ov)
case 19:t=21
a5=C.A4(a8)
k=A.aU(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.R.aH(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a7r(a5==null?null:J.k(a5)),$async$ov)
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
return A.b(C.aeK(r,"ngmy_worksheet_item_v3_"+C.A4(a8)+"_"+m),$async$ov)
case 29:w=30
return A.b(C.aeK(r,"ngmy_worksheet_thumb_v3_"+C.A4(a8)+"_"+m),$async$ov)
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
case 14:case 10:a2=J.cE(b3),a3=a2.gag(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gU(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.byc(h),$async$ov)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.aeL(r,"ngmy_worksheet_thumb_v3_"+C.A4(a8)+"_"+a4,f),$async$ov)
case 40:g=i.RX(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.aeK(r,"ngmy_worksheet_thumb_v3_"+C.A4(a8)+"_"+a4),$async$ov)
case 41:g=i.RX(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.aeK(r,"ngmy_worksheet_thumb_v3_"+C.A4(a8)+"_"+a4),$async$ov)
case 42:case 34:a4=i.a
w=43
return A.b(C.aeL(r,"ngmy_worksheet_item_v3_"+C.A4(a8)+"_"+a4,B.R.ao(g.ae(),null)),$async$ov)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.cf(q,i.a)
w=31
break
case 32:w=44
return A.b(C.aeL(r,"ngmy_worksheets_index_v3_"+C.A4(a8),B.R.ao(q,null)),$async$ov)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eJ(b3,new C.fBv(q))
a4=a3.$ti.k("cQ<1,a4<n,@>>")
a7=A.B(new A.cQ(a3,new C.fBw(),a4),a4.k("H.E"))
a0=a7
w=45
return A.b(C.aeL(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.R.ao(a0,null)),$async$ov)
case 45:w=46
return A.b(J.hmj(r),$async$ov)
case 46:if(a2.gcl(b3)&&J.ad(q)===0){u=!1
w=1
break}u=!0
w=1
break
t=2
w=8
break
case 6:t=5
b1=s.pop()
a1=A.a9(b1)
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
return A.i($async$ov,v)},
Kz(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Kz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Co(d),$async$Kz)
case 3:t=g
s=J.cE(t)
r=s.bc(t,new C.fJn(e))
if(r===-1)s.cn(t,0,e)
else s.n(t,r,e)
u=C.ov(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Kz,v)},
bzq(d,e){var w=0,v=A.j(x.H),u
var $async$bzq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Co(d),$async$bzq)
case 2:u=g
J.ni(u,new C.flZ(e))
w=3
return A.b(C.ov(d,u),$async$bzq)
case 3:return A.h(null,v)}})
return A.i($async$bzq,v)},
FW(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$FW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$FW)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.R.aH(0,i,null)
if(x.j.b(t)){j=J.d8(t,x.f)
j=A.cD(j,new C.foo(),j.$ti.k("H.E"),x.k)
s=A.a3(j).k("a2<H.E>")
r=A.B(new A.a2(j,new C.fop(),s),s.k("H.E"))
B.d.b_(r,new C.foq())
k=r}}catch(h){}w=4
return A.b(C.f8i(d),$async$FW)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hLu(k,p,d)
j=A.T(o)
s=j.k("K<1,a4<n,@>>")
s=A.B(new A.K(o,new C.fos(),s),s.k("ai.E"))
n=B.R.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.PQ(d,o),$async$FW)
case 7:case 6:j=j.k("a2<1>")
m=A.B(new A.a2(o,new C.fot(d),j),j.k("H.E"))
if(m.length!==0)C.aN9(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$FW,v)},
fBe(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fBe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.PQ(d,e),$async$fBe)
case 3:t=J.dH(e,new C.fBf(d))
s=A.B(t,t.$ti.k("H.E"))
if(s.length===0){u=!0
w=1
break}u=C.aN9(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fBe,v)},
a1H(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a1H=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aA(),$async$a1H)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.R.aH(0,l,null)
if(x.j.b(u)){m=J.d8(u,x.f)
m=A.cD(m,new C.fJi(),m.$ti.k("H.E"),x.k)
t=A.a3(m).k("a2<H.E>")
s=A.B(new A.a2(m,new C.fJj(),t),t.k("H.E"))
o=s}}catch(k){}q=J.q3(o,new C.fJk(e))
if(B.a.i(e.x).length===0&&C.tH(e,d)){m=B.a.i(d.toLowerCase())
p=e.aCd(e.y===D.kf?D.kf:D.tr,m)}else p=e
if(q===-1)J.pl(o,0,p)
else J.aG(o,q,p)
w=3
return A.b(C.PQ(d,o),$async$a1H)
case 3:w=C.tH(p,d)?4:5
break
case 4:w=6
return A.b(C.aN8(C.FU(p,d),p),$async$a1H)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a1H,v)},
aNj(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aNj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.FW(d),$async$aNj)
case 2:u=g
t=J.cE(u)
s=A.r0(t.eJ(u,new C.flG(e)))
t.bn(u,new C.flH(e))
w=3
return A.b(C.PQ(d,u),$async$aNj)
case 3:w=s!=null&&C.bzt(s,d)?4:5
break
case 4:w=6
return A.b(C.f7C(e),$async$aNj)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aNj,v)},
agy(d){var w=d.f,v=A.T(w).k("a2<1>")
w=A.B(new A.a2(w,new C.fJt(),v),v.k("H.E"))
return w},
fSN(d,e){var w,v=d.f,u=A.r0(new A.a2(v,new C.flg(e),A.T(v).k("a2<1>")))
v=C.agy(d)
w=A.T(v).k("a2<1>")
v=A.B(new A.a2(v,new C.flh(e,u),w),w.k("H.E"))
B.d.b_(v,new C.fli())
return v},
hSM(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hho(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bc(C.fSN(d,u),new C.fJ4(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hUi(d,e){var w
if(e==null||e.length===0)return 1
w=C.fSN(d,e)
if(w.length===0)return 1
return new A.K(w,new C.fpb(),A.T(w).k("K<1,G>")).fE(0,B.zK)+1},
i1_(d){var w,v=C.agy(d)
if(v.length===0)return null
w=new A.a2(v,new C.fBb(),A.T(v).k("a2<1>"))
if(!w.gam(0))return w.gL(0)
return B.d.gL(v)},
hSH(d){return A.E(["id",d.a,"name",d.b,"gender",C.hdb(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hUd(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.V(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aW(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.L)(a0),++u){q=a0[u]
p=q.a
r.K(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.xv?n:q.c
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
d=q.aC8(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.L)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cFc(a1,w,a3.d,a2.y,s,a0,v)},
Ad(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$Ad=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Ad)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aU(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.R.aH(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d8(t,x.f)
p=A.cD(p,new C.fol(),p.$ti.k("H.E"),x.k)
s=A.a3(p).k("a2<H.E>")
p=A.B(new A.a2(p,new C.fom(),s),s.k("H.E"))
B.d.b_(p,new C.fon())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Ad,v)},
agk(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$agk=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tr:D.kf
a7=C.FU(b2,b3)
w=2
return A.b(C.Ad(b1),$async$agk)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.bc(a8,new C.fB7(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bzc(b1,b2),$async$agk)
case 5:case 4:if(b0===-1){u=b2.aCd(a6,a7)
a9.cn(a8,0,u)}else{t=a9.h(a8,b0)
s=A.V(x.N,x.P)
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
i=i!==D.xv?i:l.c
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
s.n(0,m,l.aC8(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.B(new A.bc(s,k),k.k("H.E"))
k=a5?D.tr:D.kf
u=t.yf(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.PQ(b1,a8),$async$agk)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aN8(B.a.i(b3.toLowerCase()),u),$async$agk)
case 9:case 8:return A.h(null,v)}})
return A.i($async$agk,v)},
h9l(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a5().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("K<1,a4<n,@>>"),k=A.B(new A.K(m,C.hgC(),l),l.k("ai.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.E(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.E(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a5().ac(),"updatedAt",o],r,x.K),"createdAt",s.a5().ac(),"updatedAt",o],r,x.z)},
h9m(d,e){var w=new A.S(Date.now(),0,!1).a5().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("K<1,a4<n,@>>")
u=A.B(new A.K(u,C.hgC(),t),t.k("ai.E"))
return A.E(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a5().ac(),"updatedAt",w],x.N,x.z)},
hJ7(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a8(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ajn(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.K(j,A.fV7(),A.T(j).k("K<1,n>")).bZ(0,new C.f85())
t=A.B(j,j.$ti.k("H.E"))
if(u===v)s=D.tr
else s=B.d.t(t,u)?D.M_:D.kf
return w.aCd(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ajn(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d8(q,h)
h=A.cD(h,new C.f86(),h.$ti.k("H.E"),x.P)
p=A.a3(h).k("a2<H.E>")
o=A.B(new A.a2(h,new C.f87(),p),p.k("H.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.f88(),x.N).bZ(0,new C.f89())
t=A.B(h,h.$ti.k("H.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tr
else s=B.d.t(t,u)?D.M_:D.kf
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.y(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bi(J.k(l==null?"":l))
if(l==null)l=new A.S(Date.now(),0,!1)
j=A.aN(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.O(j)
if(j==null)j=0
return new C.kw(h,r,p,!m,t,o,l,j,v,s)},
f8i(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$f8i=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.f8m()
h=x.N
g=x.z
w=7
return A.b(A.iJ(A.a([A.lk("family_trees","*",null,A.E(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bG),r.$2(A.lk("family_trees","*",A.E(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bG),"collaborator"),r.$2(A.lk("family_trees","*",null,A.E(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bG),"public")],x.cl),x.U),$async$f8i)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.V(h,g)
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
if(J.ad(j)!==0)J.aG(m,j,k)}l=m
h=A.a3(l).k("bc<2>")
h=A.cD(new A.bc(l,h),new C.f8j(a0),h.k("H.E"),x.k)
l=A.a3(h).k("a2<H.E>")
l=A.B(new A.a2(h,new C.f8k(),l),l.k("H.E"))
B.d.b_(l,new C.f8l())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.a9(a1)
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
return A.i($async$f8i,v)},
hLu(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a8(e)
if(j.gam(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dt(e,new C.fcv(),v).bZ(0,new C.fcw())
t=A.da(u,u.$ti.k("H.E"))
s=A.V(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.FU(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kf){m=q.e
m=!new A.K(m,A.fV7(),A.T(m).k("K<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gag(e);j.C();){v=j.gU(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.hUd(l,v)
o=C.FU(k,w)
p=v.d
s.n(0,u,o===w?k.b9w(p,D.tr):k.b9w(p,v.y))}j=s.$ti.k("bc<2>")
j=A.B(new A.bc(s,j),j.k("H.E"))
B.d.b_(j,new C.fcx())
return j},
PQ(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$PQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$PQ)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.feC(),x.a)
s=A.B(s,s.$ti.k("ai.E"))
w=3
return A.b(u.ar("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.R.ao(s,null)),$async$PQ)
case 3:return A.h(null,v)}})
return A.i($async$PQ,v)},
aN8(d,e){return C.hQx(d,e)},
hQx(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aN8=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lK("family_trees",A.a([C.h9l(e,d)],p),null,B.cF),$async$aN8)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lK("family_trees",A.a([C.h9m(e,d)],p),null,B.cF),$async$aN8)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.a9(n)
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
return A.i($async$aN8,v)},
aN9(d,e){return C.hQy(d,e)},
hQy(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aN9=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("K<1,a4<n,@>>")
m=n.k("ai.E")
l=A.B(new A.K(e,new C.fjo(d),n),m)
r=l
w=7
return A.b(A.lK("family_trees",r,null,B.cF),$async$aN9)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.K(e,new C.fjp(d),n),m)
p=k
w=8
return A.b(A.lK("family_trees",p,null,B.cF),$async$aN9)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.a9(i)
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
return A.i($async$aN9,v)},
f7C(d){return C.hIt(d)},
hIt(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$f7C=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Qe("family_trees",A.E(["id",d],x.N,x.z),null,B.cF),$async$f7C)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.a9(p)
$.am.$1("[family_trees] delete error: "+A.t(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$f7C,v)},
qL:function qL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ld:function ld(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cu5:function cu5(){},
cu4:function cu4(){},
cu2:function cu2(){},
cu3:function cu3(){},
H_:function H_(d,e){this.a=d
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
ajm:function ajm(d,e){this.a=d
this.b=e},
flx:function flx(){},
fJp:function fJp(d){this.a=d},
fk3:function fk3(d){this.a=d},
kw:function kw(d,e,f,g,h,i,j,k,l,m){var _=this
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
bLG:function bLG(){},
bLF:function bLF(){},
bLC:function bLC(){},
bLD:function bLD(){},
bLE:function bLE(){},
fbR:function fbR(){},
f7y:function f7y(){},
f7z:function f7z(){},
f7A:function f7A(){},
fBs:function fBs(){},
fBt:function fBt(){},
fBu:function fBu(){},
fBv:function fBv(d){this.a=d},
fBw:function fBw(){},
fJn:function fJn(d){this.a=d},
flZ:function flZ(d){this.a=d},
foo:function foo(){},
fop:function fop(){},
foq:function foq(){},
fos:function fos(){},
fot:function fot(d){this.a=d},
fBf:function fBf(d){this.a=d},
fJi:function fJi(){},
fJj:function fJj(){},
fJk:function fJk(d){this.a=d},
flG:function flG(d){this.a=d},
flH:function flH(d){this.a=d},
fJt:function fJt(){},
flg:function flg(d){this.a=d},
flh:function flh(d,e){this.a=d
this.b=e},
fli:function fli(){},
fJ4:function fJ4(d){this.a=d},
fpb:function fpb(){},
fBb:function fBb(){},
fol:function fol(){},
fom:function fom(){},
fon:function fon(){},
fB7:function fB7(d){this.a=d},
f85:function f85(){},
f86:function f86(){},
f87:function f87(){},
f88:function f88(){},
f89:function f89(){},
f8m:function f8m(){},
f8n:function f8n(d){this.a=d},
f8j:function f8j(d){this.a=d},
f8k:function f8k(){},
f8l:function f8l(){},
fcv:function fcv(){},
fcw:function fcw(){},
fcx:function fcx(){},
feC:function feC(){},
fjo:function fjo(d){this.a=d},
fjp:function fjp(d){this.a=d},
cu6:function cu6(d,e){this.a=d
this.b=e},
cu7:function cu7(d,e){this.a=d
this.b=e},
aFn:function aFn(d,e,f){this.a=d
this.b=e
this.c=f},
b6P:function b6P(){this.b=this.a=0},
b6O:function b6O(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
btJ:function btJ(){},
wo(d,e){var w,v
if(d==null)return""
w=d.bR()
v=""+w.gcc()+"/"+w.gcs()+"/"+w.gcg()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gn0()),2,"0")+":"+B.a.aT(B.o.u(w.gFJ()),2,"0")},
hzi(){var w,v=$.ph(),u=J.e1(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"WS"+B.d.fV(u)},
aqU(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$aqU=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$aqU)
case 3:if(!e){u=A.V(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f0("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bG),$async$aqU)
case 8:r=e
if(r==null){u=A.V(x.N,x.z)
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
p=A.a9(m)
$.am.$1("[worksheet qr stash] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.V(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aqU,v)},
aqV(d){return C.hzj(d)},
hzj(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$aqV=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$aqV)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hB("ngmy_worksheet_project_qr_stashes_v1",A.E(["stashes",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,B.cF,null),$async$aqV)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a9(p)
$.am.$1("[worksheet qr stash] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aqV,v)},
aqX(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$aqX=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$aqX)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hzi()
w=4
return A.b(C.aqU(),$async$aqX)
case 4:r=h
q=B.a.i(e)
p=B.dI.aJ(t)
J.aG(r,s,A.E(["ownerEmail",q,"projectId",f,"payload",B.cS.gcv().aJ(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=5
return A.b(C.aqV(r),$async$aqX)
case 5:u=new A.a_a("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqX,v)},
aqW(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aqW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c1(),$async$aqW)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.aqU(),$async$aqW)
case 4:q=f
p=J.a8(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a8(o)
m=A.aN(n.h(o,"usesRemaining"))
l=m==null?null:B.k.O(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.c4.c8(0,B.cB.aJ(t))}catch(h){r=A.a9(h)
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
m.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a5().ac())
p.n(q,i,m)}w=5
return A.b(C.aqV(q),$async$aqW)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqW,v)},
h3R(){var w=new A.S(Date.now(),0,!1).a5()
return"wst_"+(1000*w.a+w.b)+"_"+B.cI.aB(999999)},
hzk(d){var w,v,u,t,s,r,q
try{w=A.af9(d)
if(w==null)return d
v=w
if(J.KF(v)>960||J.KE(v)>960){s=v
r=J.KF(v)>=J.KE(v)?960:null
v=A.af8(s,J.KE(v)>J.KF(v)?960:null,B.Nk,r)}s=v
u=A.akL(82).Si(s,B.yg)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cr(u))
return s}catch(q){t=A.a9(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cdH(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cdH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hzk(e)
$.cdD.n(0,s,t)
u=C.bBd(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cdH,v)},
b0A(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b0A=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.cZ(l,"data:image")){u=null
w=1
break}t=4
r=J.eY(l,",")?B.d.gal(J.lm(l,",")):l
q=B.cB.aJ(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.h3R()
w=7
return A.b(C.cdH(p,q),$async$b0A)
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
n=A.a9(k)
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
return A.i($async$b0A,v)},
cdE(d){var w=0,v=A.j(x.T),u,t,s
var $async$cdE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cdG(s),$async$cdE)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcv().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cdE,v)},
a7r(d){var w=0,v=A.j(x.H),u,t
var $async$a7r=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hgv(d)
if(t==null){w=1
break}$.cdD.W(0,t)
w=3
return A.b(C.bBc(t),$async$a7r)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a7r,v)},
bBd(d,e){return C.i_j(d,e)},
i_j(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bBd=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aM4
w=7
return A.b(n==null?$.aM4=I.fRO():n,$async$bBd)
case 7:r=g
q=new Uint8Array(A.cr(e))
p=J.mz(r,"thumbs","readwrite")
B.iA.m8(J.mx(p,"thumbs"),q,l)
w=8
return A.b(J.pk(p),$async$bBd)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.a9(k)
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
return A.i($async$bBd,v)},
bBc(d){return C.i_h(d)},
i_h(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bBc=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aM4
w=7
return A.b(o==null?$.aM4=I.fRO():o,$async$bBc)
case 7:r=f
q=J.mz(r,"thumbs","readwrite")
B.iA.Ff(J.mx(q,"thumbs"),m)
w=8
return A.b(J.pk(q),$async$bBc)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.a9(l)
$.am.$1("[worksheet-thumb idb delete] "+A.t(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bBc,v)}},D,Ak,Al,Q,Am,An,I
J=c[1]
A=c[0]
B=c[2]
A0=c[77]
N=c[230]
R=c[145]
A1=c[214]
G=c[195]
F=c[31]
E=c[205]
A2=c[102]
A3=c[216]
A4=c[135]
A5=c[183]
S=c[109]
T=c[104]
A6=c[213]
A7=c[37]
M=c[212]
A8=c[80]
H=c[87]
A9=c[152]
Aa=c[106]
U=c[155]
V=c[226]
W=c[184]
Ab=c[175]
Ac=c[187]
X=c[182]
Ad=c[65]
Ae=c[231]
Af=c[71]
Y=c[199]
Ag=c[30]
Ah=c[100]
K=c[177]
Ai=c[188]
Z=c[229]
A_=c[222]
O=c[99]
Aj=c[110]
L=c[128]
P=c[69]
C=a.updateHolder(c[6],C)
D=c[225]
Ak=c[70]
Al=c[193]
Q=c[228]
Am=c[227]
An=c[56]
I=c[54]
C.amT.prototype={}
C.aWW.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bdQ(),f=h.x!=null&&h.yG(i).length===0
if(h.x!=null)w=f?B.aZ:B.bL
else w=h.gSW()?B.bL:B.dT
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.bct,B.r,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.eDY,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h2,i,i,i),B.S,D.f5R,B.at,A.d(C.wo(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.f1R,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.aY9,i,i,i,i,B.XR,i,i,i)
q=A.m(16)
p=A.I(B.aL,B.r,1)
o=A.I(B.aZ.j(0.28),B.r,1)
n=A.fTI(h.d)
o=A.p(B.A,C.aWV(A.frz(h.e,n),30),B.f,i,i,new A.o(B.lw,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.eYj,B.L,i,i)
m=A.m(14)
l=A.I(B.aL,B.r,1)
q=A.p(i,A.v(A.a([o,B.P,n,B.bA,D.f67,B.ac,A.p(i,A.v(A.a([D.fl5,B.bA,A.d(A.Af(h.c),i,i,i,i,i,i,D.eTp,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.eZ,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,K.ag1,i,i,i)
p=A.m(16)
m=A.I(B.aL,B.r,1)
l=j.aOM("Original due",C.wo(h.r,!1))
n=j.aOM("Current due",C.wo(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.p(i,A.v(A.a([l,B.P,n,B.S,A.p(i,A.d(h.gaJ_(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.Az,i,i,1/0),B.S,j.cbr(),B.P,j.c_f(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bm,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aL,B.r,1)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.f73,B.at,A.d(q,i,i,i,i,i,i,D.eXC,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bm,i,i,1/0)],s))}if(h.gaDR()){q=A.m(14)
o=A.I(B.cn,B.r,1.6)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fmk,B.P,A.bw(A.m(12),A.ei(new A.a6(1/0,88,A.b3(i,i,i,new A.V1(h.ax,B.M,D.eHH,!0,3.5,i),B.au),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.EN,i,i,i)],s))}p.push(B.ay)
p.push(D.feN)
return A.p(i,A.v(A.a([r,new A.C(B.ag4,A.v(p,B.aj,i,B.e,B.j,0,B.p),i)],s),B.aj,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aOM(d,e){var w=null
return A.A(A.a([A.D(A.d(d,w,w,w,w,w,w,D.a73,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eUo,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
cbr(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a89(B.dT,u,"Not paid yet")
w=t.yG(null).length
v=w===0?B.aZ:B.bL
return this.a89(v,u,C.wo(t.x,!0))},
c_f(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a89(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a89(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a73,u,u,u)
v=A.T(d).k("K<1,hh>")
v=A.B(new A.K(d,new C.c_w(),v),v.k("ai.E"))
return A.v(A.a([w,B.ao,A.c_(B.bD,v,B.bt,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a89(d,e,f){var w=null
return A.A(A.a([A.D(A.d(e,w,w,w,w,w,w,D.a73,w,w,w),1),new A.dm(1,B.ci,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dK,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b8Y.prototype={
a6(d,e){new A.V1(this.b,B.M,e,!0,3.5,null).a6(d,e)},
aq(d){return d.b!==this.b}}
C.an_.prototype={
T(){return new C.aBf(A.a([],x.bp))},
gdX(){return this.c}}
C.aBf.prototype={
a_(){this.a1()
this.I8()},
I8(){var w=0,v=A.j(x.H),u,t=this,s
var $async$I8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a0W(t.a.c),$async$I8)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dD1(t,s))
case 1:return A.h(u,v)}})
return A.i($async$I8,v)},
aQD(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aP,s=A.l(v,v,u?B.bq:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bq:B.bo).j(0.22)
w=A.m(10)
return A.br(v,new A.b4(4,r,new A.az(u,1,B.r,-1)),v,B.bm,v,v,v,v,!0,new A.b4(4,w,new A.az((this.a.d.a?B.bq:B.bo).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.m(10),D.aVM),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aQC(d){return this.aQD(d,null)},
OD(d){return this.cf_(d)},
cf_(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OD=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.G3:B.eG
w=7
return A.b(new A.hW().BH(72,900,900,n),$async$OD)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fe(),$async$OD)
case 8:p=f
n=B.cS.gcv().aJ(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.a9(l)
n=r.c
if(n!=null)n.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Could not pick photo: "+A.t(o),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$OD,v)},
aZ0(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aP,o=A.m(10),n=A.I((q?B.bq:B.bo).j(0.18),B.r,1)
if(d)q=B.cY
else q=s.a.d.a?B.bq:B.bo
q=A.W(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.aA,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cY
else u=s.a.d.a?B.bq:B.bo
t=x.p
u=A.D(A.v(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fu(r,r,r,r,r,r,r,r,r,r,r,B.cY,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c7)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.W(B.cy,s.a.d.a?B.bq:B.bo,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c7))
return A.p(r,A.A(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.ke,D.bnL,r,r,r)},
CE(d){return this.bwW(d)},
bwV(){return this.CE(null)},
bwW(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CE=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.ar(new A.bb(a4,B.b2,B.aN),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jO(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.O(p)):B.k.aa(p,2)}o=new A.ar(new A.bb(a4,B.b2,B.aN),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.ar(new A.bb(a4,B.b2,B.aN),s)
if(a3){a4=new A.S(Date.now(),0,!1).bN(6048e8)
m=A.c0(a4.gcg(),a4.gcc(),a4.gcs(),0,0,0,0,0)}else{a4=a5.f
m=A.c0(a4.gcg(),a4.gcc(),a4.gcs(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bl(a4,!0,x.cT)
i=a3?null:A.fTI(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.vI?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",a4,new C.dCL(),new C.dCM(a2,t,a5,r,new C.dCN(a2,t),o,n,j),B.eE,!0,x.y),$async$CE)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d4(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.S$=s
r.P$=0
o.S$=s
o.P$=0
n.S$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.I(x.q).f.R(D.eO1)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.R(D.eMH)
w=1
break}a1=A.frz(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.vI?"male":"female"
w=7
return A.b(A.agx(a3,A.h0B(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$CE)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.vI?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c0(a3.gcg(),a3.gcc(),a3.gcs(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c0(a4.gcg(),a4.gcc(),a4.gcs(),0,0,0,0,0)))a5.cHj(a2.a)
w=8
return A.b(A.agx(t.a.c,a5),$async$CE)
case 8:case 5:w=9
return A.b(t.I8(),$async$CE)
case 9:case 1:return A.h(u,v)}})
return A.i($async$CE,v)},
aRe(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cY.j(0.14)
else w=this.a.d.a?B.M:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cY
else s=(this.a.d.a?B.bq:B.bo).j(0.2)
s=A.I(s,B.r,g?1.5:1)
r=C.aWV(d,18)
if(g)q=B.cY
else q=this.a.d.a?B.aP:B.aA
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.p(p,A.A(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.ba,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bR,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.af)},
Ri(d){return this.cwe(d)},
cwe(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ri=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",s,new C.dD4(),new C.dD5(t,d),B.hW,!0,x.y),$async$Ri)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.S(s,0,!1)
case 4:w=7
return A.b(A.agx(t.a.c,d),$async$Ri)
case 7:w=8
return A.b(t.I8(),$async$Ri)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Ri,v)},
Ni(d,e){return this.bHD(0,e)},
bHD(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ni=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.kY(s,"Cancel","Delete",e.b+" \xb7 "+A.Af(e.c)+" will be removed from this device.","Delete this debt?"),$async$Ni)
case 3:if(!g){w=1
break}w=4
return A.b(C.flN(t.a.c,e.a),$async$Ni)
case 4:w=5
return A.b(t.I8(),$async$Ni)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Ni,v)},
adz(d){return this.c8V(d)},
c8V(d){var w=0,v=A.j(x.H),u=this,t
var $async$adz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bW(B.K,null,new C.dCZ(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$adz)
case 2:return A.h(null,v)}})
return A.i($async$adz,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.e2r
w=J.dH(m.d,new C.dD6())
v=A.B(w,w.$ti.k("H.E"))
w=J.dH(m.d,new C.dD7())
u=A.B(w,w.$ti.k("H.E"))
t=B.d.cI(v,0,new C.dD8())
w=A.m(18)
s=m.a.d.a
r=s?D.ck5:D.awd
q=A.I(s?B.cY.j(0.35):B.cY.j(0.18),B.r,1)
s=A.p(l,D.bMV,B.f,l,l,new A.o(B.cY.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.aw,A.D(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aA,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a1,!0,A.m(12),A.aK(!1,A.m(12),!0,D.e1R,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dD9(m),l,l,l,l,l,l,l),B.f,B.cY,0,l,l,l,l,l,B.af)],p),B.m,l,B.e,B.j,0,l,l)
o=A.D(m.cst("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Af(t)
r=A.a([A.p(l,A.v(A.a([s,B.ac,A.A(A.a([o,B.ab,A.D(m.b3Z(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a7(B.ax,B.aD,B.x,r,l,l),B.n),l,l,l,l,B.afZ,l,l,l),B.ay],p)
if(J.ck(m.d)){w=m.a.d.a
s=w?B.dX:B.c
q=A.m(18)
o=A.I((w?B.bq:B.bo).j(0.12),B.r,1)
n=A.p(l,D.bHU,B.f,l,l,new A.o(B.cY.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aA,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.ac,w,B.at,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bo,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bqc,l,l,1/0))}else{w=m.gcei()
s=A.B(new A.K(v,w,A.T(v).k("K<1,r>")),x.l)
if(u.length!==0){q=A.a([B.ao,new A.C(D.brR,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bo,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.K(u,w,A.T(u).k("K<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.aj,l,B.e,B.j,0,B.p)},
b3Z(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.bq:B.bo).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bq:B.bo,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cY
else w=v.a.d.a?B.aP:B.aA
return A.p(u,A.v(A.a([q,B.bA,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eh,u,u,u)},
cst(d,e){return this.b3Z(!1,d,e)},
cej(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.yG(j).length,h=d.bd1()
if(d.x!=null){w=d.yG(j).length
v=w===0?B.cY:B.bL}else if(d.gSW())v=B.bL
else{if(h)w=B.cY
else w=k.a.d.a?B.bq:B.bo
v=w}if(d.x!=null){w=d.yG(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wo(u,!1)}else{u.toString
t="Paid "+C.wo(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wo(w,!1)+" \xb7 "+i+" missed":"Due "+C.wo(w,!1)}w=k.a.d.a?B.dX:B.c
u=A.m(18)
if(d.gSW()&&d.x==null)s=B.bL.j(0.35)
else s=(k.a.d.a?B.bq:B.bo).j(0.12)
s=A.I(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bl:B.lw
o=A.I(d.gSW()&&d.x==null?B.bL.j(0.45):B.cY.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.fTI(d.d)
o=A.p(B.A,A.db(C.aWV(A.frz(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.aA
m=x.p
n=A.a([new A.dm(1,B.ci,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaDR())B.d.v(n,A.a([B.ea,A.W(B.Mq,B.cY.j(0.8),j,j,j,14)],m))
p=A.D(A.v(A.a([A.A(n,B.m,j,B.e,B.j,0,j,j),B.cZ,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.Af(d.c)
l=k.a.d.a?B.aP:B.aA
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aF(!1,B.a1,!0,j,A.aK(!1,q,!0,new A.C(V.afJ,A.A(A.a([o,B.bf,p,B.ab,A.v(A.a([n,B.bA,A.W(B.eu,(k.a.d.a?B.bq:B.bo).j(0.5),j,j,j,18)],m),B.dE,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dD0(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.af),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.dc,j,j,j,j)}}
C.tZ.prototype={}
C.ajl.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bg
u=v?B.F:B.m
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.I(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cx,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.I(r.j(0.6),B.r,1)
n.push(A.aE(a0,A.p(a0,A.W(B.cy,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a8))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.C(B.j7,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.asM,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.F4,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f1(m,A.A(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.eg)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(D.bmZ,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cD:B.bk,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.D(new A.C(B.fo,A.v(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.eIr)
a2=A.a([A.A(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.C(B.v_,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a7(B.a3,B.a7,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.l6,A.v(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hh,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a7(B.ax,B.aD,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.boc,a0,a0,a0,a0)}}
C.aSJ.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bg?B.bg:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.D(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bk:B.cD,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.m,q,B.e,B.j,0,q,q),B.cZ,n],m)
if(p.z)o.push(new A.C(B.uX,n,q))
return new A.C(B.dc,A.v(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.RQ.prototype={
T(){return new C.bcw()}}
C.bcw.prototype={
gbVn(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.e2m,D.e2s],l)
for(w=0;w<8;++w){v=D.a0Q[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.FO:B.Bg
q=t===s
r=A.W(r,q?B.ey:B.c_,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.x(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bF(1,B.bj,new A.x(v.c,n,A0.CO,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aV(24,24)
p=new A.az(B.ey,2,B.r,-1)
s=new A.o(n,n,new A.bP(p,p,p,p),new A.bp(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aE(n,new A.C(B.eF,A.v(A.a([new A.C(B.mc,new A.co(B.aQ,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.Dr(!0,new C.ajl(v,q.d,q.e,new C.d2T(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d2U(o,v),n,n,n,n,n,n,!1,B.a8))}k.push(new A.C(D.bov,A.bJ(D.frw,new C.d2V(o,d),A.bk(B.b4,n,n,n,n,B.o0,n,n,new A.b7(A.m(16),B.Y),n,n,n)),n))
return A.bn(!0,new A.cU(new A.aY(0,1/0,0,m.a.b*0.9),A.cB(k,n,D.bsI,n,n,B.ai,!0),n),!0,!1,B.ag,!0,!0)}}
C.n4.prototype={
ae(){var w=this
return A.E(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a5().ac()],x.N,x.z)},
b9I(d,e,f){return new C.n4(this.a,e,d,f)}}
C.GZ.prototype={
w1(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.GZ(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aC2(d){var w=null
return this.w1(w,w,w,w,w,d,w,w,w,w,w,w)},
cDa(d){var w=null
return this.w1(w,w,w,w,d,w,w,w,w,w,w,w)},
b9G(d,e,f){var w=null
return this.w1(d,w,w,w,w,w,w,w,e,w,f,w)},
cDP(d){var w=null
return this.w1(w,w,w,w,w,w,d,w,w,w,w,w)},
cDY(d){var w=null
return this.w1(w,w,w,w,w,w,w,w,w,d,w,w)},
cD8(d){var w=null
return this.w1(w,w,w,d,w,w,w,w,w,w,w,w)},
cE_(d){var w=null
return this.w1(w,w,w,w,w,w,w,w,w,w,w,d)},
cD5(d){var w=null
return this.w1(w,w,d,w,w,w,w,w,w,w,w,w)},
cD0(d){var w=null
return this.w1(w,d,w,w,w,w,w,w,w,w,w,w)},
F8(d){var w=null
return this.w1(w,w,w,w,w,w,w,d,w,w,w,w)},
cE7(d,e,f,g,h,i,j,k,l,m,n){return this.w1(d,e,f,g,null,h,i,j,k,l,m,n)},
ae(){var w=this
return A.E(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cAW(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bLB(d),k=A.aN(d.h(0,"emblem")),j=k==null?o:B.k.O(k),i=A.aN(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.BU.geh(D.BU))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a2m)
q=l.$2("frame",D.a1O)
l=l.$2("texture",D.a1J)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cE7(p,u,t,q,r,A.tE(d.h(0,"ribbon"))?A.Fv(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Yn.prototype={
T(){return new C.ayi(A.a([],x.I),D.LZ)},
gdX(){return this.c}}
C.ayi.prototype={
a_(){var w,v=this
v.a1()
v.f=A.z7(0,1)
w=$.aw()
v.z=new A.ar(B.as,w)
v.Q=new A.ar(B.as,w)
v.kN()
w=v.a
C.bzB(w.c,w.d).bz(new C.d3z(v),x.fL)},
q(){var w,v=this,u=v.f
u===$&&A.c()
u.q()
u=v.z
u===$&&A.c()
w=$.aw()
u.S$=w
u.P$=0
u=v.Q
u===$&&A.c()
u.S$=w
u.P$=0
v.a2()},
kN(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$kN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.K7(s.c,s.d),$async$kN)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d3n(t,r))
t.au2()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
gaqE(){var w,v=this
if(!J.ck(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
au2(){var w,v,u=this.gaqE(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saV(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saV(0,w==null?"":w)},
c7l(d){this.m(new C.d3k(this,d))
this.au2()},
ME(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$ME=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.n4(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aOW(r.c,r.d,s),$async$ME)
case 3:w=4
return A.b(t.kN(),$async$ME)
case 4:if(t.c==null||J.ck(t.d)){w=1
break}q=J.q3(t.d,new C.d2W(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d2X(t,p))
t.au2()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.AK(p+1,B.cq,B.kD),$async$ME)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$ME,v)},
Aq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Aq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaqE()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aOW(o.c,o.d,new C.n4(s,r,q,new A.S(p,0,!1))),$async$Aq)
case 3:w=4
return A.b(t.kN(),$async$Aq)
case 4:if(t.c==null){w=1
break}t.m(new C.d3o(t))
case 1:return A.h(u,v)}})
return A.i($async$Aq,v)},
Nj(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Nj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaqE()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.d34(r),s,null,!0,!0,x.y),$async$Nj)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bzm(s.c,s.d,r.a),$async$Nj)
case 4:t.m(new C.d35(t))
w=5
return A.b(t.kN(),$async$Nj)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.SZ(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Nj,v)},
xX(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Aq(),$async$xX)
case 5:case 4:if(t.c==null){w=1
break}w=J.cx(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.Q6(s,r.r,o,p,q),$async$xX)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a5(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hgY(s,r.x,r.r),$async$xX)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.K7(s.c,s.d),$async$xX)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.K(l,new C.n4(""+(m+k),q,B.a.i(j.b),new A.S(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Ao(r.c,r.d,l),$async$xX)
case 11:w=12
return A.b(t.kN(),$async$xX)
case 12:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$xX,v)},
a_s(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_s=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Aq(),$async$a_s)
case 5:case 4:if(t.c==null){w=1
break}s=t.gxV(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dM(D.yn,new C.d3l(t),new C.d3m())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mk("Our Family",o,"",""))
for(o=J.aX(t.d);o.C();){n=o.gU(o)
p.push(new F.mk(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fVj(o,new F.r4(s,r,"",p,new F.ui(q.d,null,null,null,null,"","","")),null),$async$a_s)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a_s,v)},
N1(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$N1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Aq(),$async$N1)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bW(D.abB,null,new C.d30(t),s,!0,!0,!0,D.aKN,!1,!1,x.N),$async$N1)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cDa(r)
t.m(new C.d31(t,q))
s=t.a
w=7
return A.b(C.QG(s.c,s.d,q),$async$N1)
case 7:case 1:return A.h(u,v)}})
return A.i($async$N1,v)},
W5(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$W5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bW(D.abB,null,new C.d36(t),r,!0,!0,!0,D.aKN,!1,!1,x.e),$async$W5)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d37(t,s))
r=t.a
w=4
return A.b(C.QG(r.c,r.d,s),$async$W5)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.AK(0,B.dV,B.oq)
case 1:return A.h(u,v)}})
return A.i($async$W5,v)},
bMK(d){var w=d.bR(),v=B.a.aT(B.o.u(w.gcc()),2,"0"),u=B.a.aT(B.o.u(w.gcs()),2,"0")
return""+w.gcg()+"-"+v+"-"+u},
gxV(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bUE()
if(r.e)w=D.aav
else if(J.ck(r.d)){w=r.y
v=r.gxV(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eSS,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a6(q,330,new A.C(A_.ah_,new C.XG(w,v,0,q),q),q),B.bv,t,B.ao,A.d(u,q,q,q,q,q,q,A.l(q,q,D.k7.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bv],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aE(q,A.p(q,D.eDO,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dO.j(0.45),B.J,18)],x.V),E.vw,B.n),q,q,q,q,B.Y0,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcA4(),q,q,q,q,q,q,!1,B.a8))
w.push(B.S)
w.push(A.hc(D.bEb,D.fr0,r.gaKI(),q))
B.d.v(u,w)}w=A.av(A.cd(A.v(u,B.m,q,B.e,B.Q,0,B.p),B.q,q,B.y,q,B.ez,q,q,B.ai),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.k7.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dQ:B.zI
u=A.v(A.a([new A.C(D.bpw,w,q),A.D(A.Ig(v,new C.d3x(r),J.ad(r.d)+1,q,r.gc7k(),u,B.aQ),1),r.bzP()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.cb(q,D.acM,new A.an(B.W,q,B.b_,B.q,A.a([D.aJj,A.bn(!0,A.v(A.a([p,A.D(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
bUE(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cx(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Jf(B.dW,"AI",h.gbxJ(),!0))
if(h.a.f)f.push(new C.Jf(B.n1,"Cover",h.gbIc(),!1))
if(h.a.f)f.push(new C.Jf(B.y0,"Header",h.gbDe(),!1))
if(J.cx(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Jf(B.tF,"Print",h.gcgj(),!1))
if(h.a.f&&J.cx(h.d)&&h.r>=0){v=h.w
u=v?B.hx:B.ja
t=v?"Save":"Edit"
f.push(new C.Jf(u,t,v?h.gcmn():new C.d3h(h),!1))}if(h.a.f)f.push(new C.Jf(B.hw,"Add page",h.gaKI(),!1))
v=C.hda(h.y.Q)
u=h.gxV(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.djD
else{k=new A.aV(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.az(E.jG.j(0.5),1,B.r,-1)
j=A.p(g,A.W(l.a,D.k7,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bP(i,i,i,i),new A.bp(k,k,k,k),g,new A.a7(B.a3,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.k7.j(0.85)
p.push(new A.bF(1,B.bj,A.aE(B.c5,A.v(A.a([k,B.bA,new A.x(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a8),g))}return new C.ajl(v,u,t+" \xb7 "+s+" "+r,new C.d3i(h),A.A(p,B.m,g,B.e,B.j,0,g,g),g)},
zt(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Aq(),$async$zt)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aX(t.d);r.C();){q=r.gU(r)
s.push(q.b+" "+q.c)}p=F.a1a(B.d.aI(s," "))
s=t.c
s.toString
w=6
return A.b(A.c9(null,null,!0,null,new C.d2Y(t,p),s,null,!0,!0,x.N),$async$zt)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.xX(),$async$zt)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Dd(),$async$zt)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.EO("Swahili (Kiswahili)",!0),$async$zt)
case 18:w=16
break
case 17:w=19
return A.b(t.cwS(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zt)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zt,v)},
XY(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(E.jG.j(0.3),B.r,1),r=x.p
return new A.C(B.cG,A.aK(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.W(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.vw,B.a6),w,42,w,w,w,w,w,42),B.bf,A.D(A.v(A.a([A.d(f,w,w,w,w,w,w,A8.SG,w,w,w),A.d(g,w,w,w,w,w,w,A2.Sz,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bm,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d3j(d,h),w,w,w,w,w,w,w),w)},
Dd(){return this.bMe()},
bMe(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Dd=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.d3a(r),a7,null,!0,!0,x.ei),$async$Dd)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eL("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.c9(null,null,!1,null,new C.d3b(o),a7,null,!0,!0,x.H).fa(new C.d3c(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.L)(d),++a1){k=d[a1]
J.cf(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ae()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.yn[a1]
J.cf(j,i.a)}w=8
return A.b(C.afJ(a0,a7,new C.d3d(o),d,l,e,j),$async$Dd)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.a9(a8)
n=A.t(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a5(l,!0).eI()
l=o
l.shQ($.aw())
J.aPn(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.I(x.q).f
j=n
l.R(A.b2(null,null,null,null,null,B.q,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcl(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.ah(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.b9I(m.b.h(0,a4).b,a7,new A.S(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Ao(j.c,j.d,l),$async$Dd)
case 11:w=12
return A.b(r.kN(),$async$Dd)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.yn[a1].a)
a5=l.cAW(j,12,a7)
l=r.a
w=15
return A.b(C.QG(l.c,l.d,a5),$async$Dd)
case 15:if(r.c!=null)r.m(new C.d3e(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.AK(0,B.dV,B.oq)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.I(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.R(A.b2(a3?A.coI("Undo",new C.d3f(r,p,f),null):null,null,null,null,null,B.q,null,j,null,B.ed,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Dd,v)},
EO(d,e){return this.cwT(d,e)},
cwS(d){return this.EO(d,!1)},
cwT(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$EO=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eL("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.c9(null,null,!1,null,new C.d3q(a0),k,null,!0,!0,x.H).fa(new C.d3r(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.cf(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a1n(m,new C.d3s(a0)),$async$EO)
case 10:w=8
break
case 9:w=11
return A.b(C.bB4(new C.d3t(a0),m,a2),$async$EO)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.a9(a1)
q=A.t(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a5(o,!0).eI()
o=a0
o.shQ($.aw())
J.aPn(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.I(x.q).f
k=q
o.R(A.b2(null,null,null,null,null,B.q,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.b9I(J.q(p,g).b,j.a,new A.S(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Ao(k.c,k.d,o),$async$EO)
case 12:w=13
return A.b(r.kN(),$async$EO)
case 13:o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(A.coI("Undo",new C.d3u(r,d),null),null,null,null,null,B.q,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$EO,v)},
bzP(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d2Z(v):u
r=A.aH(u,u,u,u,A.W(D.bzV,s?D.k7:B.b5,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cx(v.d)&&!v.w&&v.r>=0)s=A.hc(A.W(B.vb,B.Ep,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Ep,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbHM(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.k7.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.D(A.av(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d3_(v):u
return A.bn(!0,new A.C(D.bpk,A.A(A.a([r,s,A.aH(u,u,u,u,A.W(B.eu,t<J.ad(v.d)?D.k7:B.b5,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.Yr.prototype={
T(){return new C.bcR(new A.ar(B.as,$.aw()))}}
C.bcR.prototype={
ga0A(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
gbL0(){var w,v=this.ga0A()
A:{if("cover"===v){w=D.cPQ
break A}if("book"===v){w=D.cLP
break A}w=D.dcv
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jG.j(0.5),n=x.p,m=A.A(A.a([D.djE,B.aw,D.buC,A.aH(q,q,q,q,B.ld,q,q,q,new C.d5j(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jH(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d5k(r),r.ga0A()==="page",q,q,q,q))
if(r.a.d)l.push(A.jH(q,q,q,D.flS,q,new C.d5l(r),r.ga0A()==="book",q,q,q,q))
l.push(A.jH(q,q,q,D.f9C,q,new C.d5m(r),r.ga0A()==="cover",q,q,q,q))
l=A.c_(B.bD,l,B.bt,6,8)
k=B.c.j(0.07)
k=A.aL(q,B.T,!1,q,!0,B.q,q,A.aM(),r.d,q,q,q,q,q,2,A.br(q,new A.b4(4,A.m(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kt,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ah,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dl,!0,B.a5,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbL0(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mA(q,B.c.j(0.08),new A.x(s,q,B.Ir,q,q,q,q,q,q,q,q,q),B.hA,new C.d5n(r,s),q,q,q,q))}return A.eE(q,E.Ad,A.cd(A.v(A.a([m,B.S,D.foZ,B.ao,l,B.ac,k,B.P,A.c_(B.bD,w,B.bt,6,6),B.ay,A.dp(D.bE8,D.fpK,new C.d5o(r,d),A.bk(B.b4,q,q,q,q,B.o0,q,q,new A.b7(A.m(16),B.Y),q,q,q)),B.at,D.fke],n),B.F,q,B.e,B.Q,0,B.p),B.q,q,B.y,q,B.fy,q,q,B.ai),q,q,q,D.agJ,B.d0,q,new A.b7(p,new A.az(o,1.4,B.r,-1)),q)}}
C.Yp.prototype={
T(){return new C.ayj(A.a([],x.Y))},
gdX(){return this.c}}
C.adw.prototype={}
C.ayj.prototype={
a_(){this.a1()
this.kN()},
kN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Qa(p.c,p.d),$async$kN)
case 3:o=e
n=A.a([],x.Y)
p=J.aX(o)
case 4:if(!p.C()){w=5
break}s=p.gU(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bzB(r.c,q),$async$kN)
case 6:j=e
i=J
w=7
return A.b(C.K7(t.a.c,q),$async$kN)
case 7:m.push(new l.adw(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d3O(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
b57(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Pj(d,e){return this.c8T(0,e)},
c8T(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Pj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a5(s,!1).ce(A.ej(new C.d3N(u,e),!0,null,x.y)),$async$Pj)
case 2:t=g
w=3
return A.b(u.kN(),$async$Pj)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.R(D.aMG)
return A.h(null,v)}})
return A.i($async$Pj,v)},
ER(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$ER=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.R(D.aMC)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.af1(s.c,s.d),$async$ER)
case 5:q=e
w=6
return A.b(t.kN(),$async$ER)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Pj(0,B.d.iA(t.d,new C.d3S(q))),$async$ER)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Q6(p,s.f,r,n,o),$async$ER)
case 10:m=e
w=11
return A.b(t.kN(),$async$ER)
case 11:if(m&&t.c!=null)t.c.I(x.q).f.R(D.aMG)
case 1:return A.h(u,v)}})
return A.i($async$ER,v)},
OO(d,e){return this.ck8(0,e)},
ck8(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$OO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.d3R(t,e),s,null,!0,!0,x.y),$async$OO)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a1A(s.c,s.d,e.a),$async$OO)
case 4:w=5
return A.b(t.kN(),$async$OO)
case 5:case 1:return A.h(u,v)}})
return A.i($async$OO,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bzS(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(E.jG.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aE(n,new A.fG(0.7142857142857143,A.p(n,A.v(A.a([D.djF,B.ac,D.e1x,B.at,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.k7.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.ba,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcA0(),n,n,n,n,n,n,!1,B.a8))}w=A.m(22)
v=A.I(E.jG.j(0.85),B.r,1.6)
s=A.aE(n,A.p(n,D.bLK,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jG.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d3T(d),n,n,n,n,n,n,!1,B.a8)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.jG.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.bf,D.buY,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eRZ,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h2,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bRe,B.n),n,n,n,Am.Ls,D.bnq,n,n,n)
if(o.e)k=D.aav
else k=k.length===0?D.b29:A.cm(new C.d3U(k))
return A.cb(n,D.acM,new A.an(B.W,n,B.b_,B.q,A.a([D.aJj,A.bn(!0,A.v(A.a([w,A.D(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bzS(d){var w,v,u=this,t=null,s=u.b57(d),r=d.c,q=x.p,p=A.a([A.bY(0,A.f1(B.A,new A.a6(300,420,new C.XG(d.b,s,r,t),t),B.f,B.dt),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aE(t,A.p(t,D.bL3,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b5,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d3L(u,d),t,t,t,t,t,t,!1,B.a8),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.eRz,t,t,t)
v=r===1?"page":"pages"
return A.aE(t,A.v(A.a([new A.fG(0.7142857142857143,new A.an(B.W,t,B.aa,B.q,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.k7.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d3M(u,d),t,t,t,t,t,t,!1,B.a8)}}
C.Jf.prototype={}
C.XG.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dM(D.yn,new C.cCR(m),new C.cCS()),j=m.c,i=D.BU.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.lK:B.ba
v=new C.cCT(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.dZR,28)],x.V)
u=x.p
t=A.a([A.bY(0,A.b3(l,l,l,new C.ba8(j.x,h,l),B.au),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.a3,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aV(3,3)
t.push(new A.cK(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bp(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.ah0,8,0.85,2.2),v.$4(D.bs9,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.ah0,8,0.85,2.4))
else if(r==="corners")t.push(A.bY(0,new A.C(D.bs5,A.b3(l,l,l,new C.ba_(h,l),B.au),l),0,0,0))
r=A.W(D.avo[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.asM,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.ay,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bY(0,new A.C(D.bsA,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aFi(l),D.eHA),l,l,l,46,0,l))
return A.p(l,A.bw(D.a9c,new A.an(B.W,l,B.aa,B.q,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.a9c,i,new A.a7(B.ax,B.aD,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.ba8.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eT()
f.dI(11)
switch(this.b){case"plain":return
case"linen":$.X()
w=A.M()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.H()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.X()
q=A.M()
q.r=B.c.j(0.05).gp(0)
q.c=1
for(p=0;p<u;p+=4){r=q.H()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.aj()
l=f.aj()
k=f.aj()
$.X()
j=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
j.r=t.j(0.25+f.aj()*0.5).gp(0)
r=j.H()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.X()
j=A.a([],l)
h=new A.aQ(k.r,B.ap,null,null,j)
j.push(new A.b5(v,t))
k=i-0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bE())
k=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.H()
k=h.gbI().a.snapshot()
o.drawPath((h.e=new A.cF(k)).a,r)
r.delete()}break
default:$.X()
w=A.M()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.aj()
m=f.aj()
l=f.aj()
r=w.H()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.X()
g=A.M()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.aj()
m=f.aj()
l=f.aj()
r=g.H()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
aq(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.ba_.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.X(),k=A.M(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bO
for(w=e.a,v=e.b,v=[D.ez6,new A.cL([w,0,-1,1]),new A.cL([0,v,1,-1]),new A.cL([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aQ(l,B.ap,null,null,s)
s.push(new A.b5(r+p*34,q))
s.push(new A.ap(r,q))
s.push(new A.ap(r,q+o*34))
m=k.H()
s=n.gbI().a.snapshot()
w.drawPath((n.e=new A.cF(s)).a,m)
m.delete()
s=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
s.r=j.j(0.9).gp(0)
m=s.H()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
aq(d){return!d.b.A(0,this.b)}}
C.u_.prototype={}
C.XY.prototype={
T(){return new C.ba6()}}
C.ba6.prototype={
gnP(){var w=this.d
return w===$?this.d=this.a.c:w},
gxV(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ar(new A.bb(w.b,B.b2,B.aN),$.aw())}return v},
gazk(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ar(new A.bb(w.c,B.b2,B.aN),$.aw())}return v},
gape(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ar(new A.bb(w.y,B.b2,B.aN),$.aw())}return v},
q(){var w=this,v=w.gxV(0),u=v.S$=$.aw()
v.P$=0
v=w.gazk()
v.S$=u
v.P$=0
v=w.gape()
v.S$=u
v.P$=0
w.a2()},
apQ(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jH(s,s,s,new A.x(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cWi(this,f,u),e===u,s,s,s,s))}return A.c_(B.bD,r,B.bt,6,8)},
avu(d){var w=null,v=B.c.j(0.07)
return A.br(w,new A.b4(4,A.m(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lk,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gnP(),a0=f.gxV(0),a1=a0.a.a,a2=f.gazk(),a3=a2.a.a,a4=f.gape(),a5=d.b9G(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a6(190,260,A.f1(B.A,new A.a6(270,370,new C.XG(a5,d,f.a.e,e),e),B.f,B.dt),e),e,e,e)
a0=A.aL(e,B.T,!1,e,!0,B.q,e,A.aM(),a0,e,e,e,e,e,2,f.avu("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ah,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cWH(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a5,e,B.am,e,e,e,e)
a2=A.aL(e,B.T,!1,e,!0,B.q,e,A.aM(),a2,e,e,e,e,e,2,f.avu("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ah,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cWI(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a5,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.yn[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b5
q=r.a===q
o=new A.az(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bP(o,o,o,o),e,e,new A.a7(B.ax,B.aD,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.az
v.push(A.aE(e,A.v(A.a([p,B.cZ,new A.x(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cWJ(f,t),e,e,e,e,e,e,!1,B.a8))}v=A.c_(B.bD,v,B.bt,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b4.j(0.35):B.c.j(0.07)
m=new A.aV(14,14)
s=f.d
o=new A.az((s===$?f.d=f.a.c:s).d===n?B.ey:B.K,2,B.r,-1)
q.push(A.aE(e,A.p(e,A.W(D.avo[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bP(o,o,o,o),new A.bp(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cWK(f,n),e,e,e,e,e,e,!1,B.a8))}q=A.c_(B.bD,q,B.bt,8,8)
a4=A.aL(e,B.T,!1,e,!0,B.q,e,A.aM(),a4,e,e,e,e,e,2,f.avu("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ah,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cWL(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a5,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mw,e,e,e)
m=A.a([],w)
for(l=D.BU.gdL(D.BU),l=l.gag(l);l.C();){k=l.gU(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ey:B.b5
g=r.e===i
o=new A.az(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bP(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.az
m.push(A.aE(e,A.v(A.a([j,B.bA,new A.x(i,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cWM(f,k),e,e,e,e,e,e,!1,B.a8))}m=A.c_(B.bD,m,B.bt,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mw,e,e,e)
k=f.gnP()
return new A.C(new A.Q(0,0,0,a3.f.d),A.bn(!0,new A.cU(new A.aY(0,1/0,0,a1.a.b*0.92),A.cB(A.a([D.fjI,B.ac,d,B.aO,a0,B.S,a2,B.ay,D.fpy,B.P,v,B.ay,D.fjR,B.P,q,B.ay,a4,B.ay,p,B.P,m,B.ay,l,A.kT(e,9,""+B.k.V(f.gnP().f),36,18,new C.cWN(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mw,e,e,e),B.ao,f.apQ(D.a2m,f.gnP().r,new C.cWO(f),D.dfG),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mw,e,e,e),B.ao,f.apQ(D.a1O,f.gnP().w,new C.cWP(f),D.dfL),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mw,e,e,e),B.ao,f.apQ(D.a1J,f.gnP().x,new C.cWR(f),D.dh8),B.ao,A.iD(e,B.b4,e,B.ag,e,new C.cWS(f),e,e,e,D.fek,f.gnP().z),B.bv,A.bJ(D.fiC,new C.cWT(f,a6),A.bk(B.b4,e,e,e,e,B.o0,e,e,new A.b7(A.m(16),B.Y),e,e,e))],w),e,Q.agy,e,e,B.ai,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aFi.prototype={
a6(d,e){var w,v,u,t=new A.aQ($.X().r,B.ap,null,null,A.a([],x.v))
t.E(new A.b5(0,0))
w=e.a
t.E(new A.ap(w,0))
v=e.b
t.E(new A.ap(w,v))
t.E(new A.ap(w/2,v-12))
t.E(new A.ap(0,v))
t.E(new A.bE())
u=A.M()
u.sau(D.bRS.aw(0,new A.aa(0,0,0+w,0+v)))
d.aO(t,u)},
aq(d){return!1}}
C.bfj.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.X()
w=A.M()
w.sau(D.bQV.aw(0,new A.aa(0,0,a3,a4)))
a5.aY(new A.aa(0,0,a3,a4),w)
v=B.k.dw(a2/112)
u=new A.eT()
u.dI(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cPP[u.aB(9)]
j=u.aB(14)
J.bA(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.aa(n,j,n+m,j+l)
h=A.bz(i,B.h8)
g=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
f=A.aq(k,B.c,0.12)
f.toString
e=A.aq(k,B.w,0.45)
e.toString
g.sau(new A.a7(B.a3,B.a7,B.x,A.a([f,k,e],t),a0,a0).aw(0,i))
d=g.H()
w.drawRRect(A.ep(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
e.r=E.jG.j(0.55).gp(0)
d=e.H()
w.drawRect(A.c4(new A.aa(h,j,g,j+2)),d)
d.delete()
j=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
j.r=E.jG.j(0.4).gp(0)
d=j.H()
w.drawRect(A.c4(new A.aa(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aB(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.sau(D.bQi.aw(0,new A.aa(0,r,a3,q)))
d=p.H()
w.drawRect(A.c4(new A.aa(0,r,a3,q)),d)
d.delete()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.je
d=p.H()
w.drawRect(A.c4(new A.aa(0,q,a3,q+14)),d)
d.delete()}w=A.M()
w.r=D.b5u.j(0.72).gp(0)
a5.aY(new A.aa(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.M()
a4.sau(new A.bR(B.A,0.5,B.x,a0,0,A.a([D.bc4.j(0.22),B.K],t),a0,a0).aw(0,A.bU(new A.u(w,a2),a1)))
a5.ai(new A.u(w,a2),a1,a4)},
aq(d){return!1}}
C.b8m.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aJ(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cK(14,w*2,v*2.2,v*2,o,o,new A.kI(new A.o(A.aq(D.k7,D.bgk,w/4),o,new A.bP(B.Y,new A.az(B.w.j(0.12),1,B.r,-1),B.Y,B.Y),B.Jz,o,o,B.n),B.bd,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aEY,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aV(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jG.j(0.6),o,o,new A.bp(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.pN,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aVw,u,D.bRQ,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dk,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aFi(o),D.eHv),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aSJ(p.y,r,G.ip,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.r,o,o,o,o,o,2,A.br(o,B.ev,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ip.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ah,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f48,!0,B.a5,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ip.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.D(A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.w,o,o,o,o,o,2,A.br(o,B.ev,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ip.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ah,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.eWn,!0,B.a5,B.z9,B.am,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.f41,o,o,o),B.at,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ip.j(0.5),o,o,o,o,o,o,o,o,11,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.D(A.p(o,o,B.f,D.Eb.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fo,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.Eb.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.D(A.p(o,o,B.f,D.Eb.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.ay],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.ip.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.WW(A.dq(A.a([A.dq(o,o,o,o,o,o,o,o,o,D.eZr,B.a.ap(k,0,1)),A.dq(o,o,o,o,o,o,o,o,o,o,B.a.b0(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.ip.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.v(n,B.F,o,B.e,B.j,0,B.p),B.q,o,B.y,o,o,o,o,B.ai)}s.push(A.D(n,1))
s.push(new A.C(B.i8,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.ip.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.A(A.a([u,A.D(A.p(o,A.bw(B.Jz,new A.an(B.W,o,B.aa,B.q,A.a([t,new A.C(D.brD,A.v(s,B.aj,o,B.e,B.j,0,B.p),o),A.ao(0,A.bZ(o,new A.o(o,o,o,o,o,new A.a7(B.a3,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bd),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.Jz,v,D.bSl,B.n),o,o,o,o,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.q,l,o)}}
C.ao5.prototype={
T(){return new C.aBQ(A.a([],x._))},
bp(){return this.r.$0()},
pw(){return this.w.$0()},
gdX(){return this.c}}
C.aBQ.prototype={
a_(){var w,v
this.a1()
this.vy()
w=this.a
v=w.c
if(v.length!==0)C.a6a(v,w.e,w.d.w)},
vn(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fVm(r,t.e,!1,s.w,new C.dQD(u),null,s),$async$vn)
case 2:w=3
return A.b(u.vy(),$async$vn)
case 3:return A.h(null,v)}})
return A.i($async$vn,v)},
ZC(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ZC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fVm(r,t.e,!0,s.w,new C.dQC(u),null,s),$async$ZC)
case 2:w=3
return A.b(u.vy(),$async$ZC)
case 3:return A.h(null,v)}})
return A.i($async$ZC,v)},
vy(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vy=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Ad(q.a.c),$async$vy)
case 7:p=e
if(q.c!=null)n=q.e||J.cx(p)
else n=!1
if(n)q.m(new C.dQF(q,p))
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
return A.b(C.FW(q.a.c).cM(0,B.pq),$async$vy)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dQG(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dQH(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vy,v)},
NO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$NO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.R(D.eL6)
w=3
return A.b(C.FW(t.a.c),$async$NO)
case 3:r=e
w=4
return A.b(C.fBe(t.a.c,r),$async$NO)
case 4:q=e
w=5
return A.b(C.FW(t.a.c),$async$NO)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dQB(t,p))
o=t.c.I(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(null,null,null,q?B.dw:B.cR,null,B.q,null,s,null,B.m8,null,null,null,null,null,null,null,null,null,null))
t.a.pw()
case 1:return A.h(u,v)}})
return A.i($async$NO,v)},
Ho(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ho=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i1h(l),$async$Ho)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hw4(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aYl(q,p.e,l,"Each family tree costs $"+B.k.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Ho)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hdk(r)
o=Date.now()
n=t.a.c
m=new C.kw(l,r.toUpperCase(),p,!0,B.T,D.BJ,new A.S(o,0,!1),0,n,D.tr)
w=5
return A.b(C.a1H(n,m),$async$Ho)
case 5:w=6
return A.b(t.vy(),$async$Ho)
case 6:t.a.bp()
t.a.pw()
if(t.c==null){w=1
break}t.E0(m)
case 1:return A.h(u,v)}})
return A.i($async$Ho,v)},
E0(d){return this.caV(d)},
caV(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$E0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Ad(u.a.c),$async$E0)
case 2:n=l.r0(k.dH(f,new C.dQE(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hv(m,new C.ao_(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$E0)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a1H(u.a.c,o),$async$E0)
case 6:case 5:w=7
return A.b(u.vy(),$async$E0)
case 7:u.a.pw()
return A.h(null,v)}})
return A.i($async$E0,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.O(d).ax.a===B.H,o=new C.tv(p)
if(r.e)return A.av(A.mD(q,p?B.bq:B.bo,q,q,q,q,q,q,q,q),q,q,q)
if(J.ck(r.d)){w=p?B.dX:B.c
v=A.m(15)
u=A.aF(!1,B.a1,!0,q,A.aK(!1,q,!0,A.p(q,D.bFd,B.f,q,q,new A.o(B.aU.j(0.12),q,A.I(B.aU,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gc9Z(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.af)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.EZ(A.p(q,A.v(A.a([u,B.aO,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bo,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.e0,A.bJ(D.fqL,r.gaOI(),A.bk(B.bT,q,q,q,q,q,Al.Y3,q,new A.b7(A.m(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.brz,q,q,1/0),15,B.ag,1.05,D.a7T,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b3],v)
if(J.cx(r.d))w.push(A.aH(q,q,q,q,A.W(B.y7,B.aU,q,q,q,q),q,q,q,new C.dQJ(r),q,q,q,q,"Sync family trees with database",q))
if(J.cx(r.d))w.push(A.aH(q,q,q,q,A.W(B.xZ,B.aU,q,q,q,q),q,q,q,r.gaee(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dp(E.am7,D.f7t,r.gaOI(),A.bk(B.bT,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.EZ(r.cwX(J.q(r.d,s),o),14,B.ag,1,D.a7T,q))
B.d.v(w,u)}return A.v(A.a([p,B.ay,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cwX(d,e){var w=null,v=e.a,u=v?B.dX:B.c,t=A.m(14),s=A.I((v?B.dZ:B.bV).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.ej,10)],x.V),q=A.m(14),p=A.p(w,D.bEh,B.f,w,w,new A.o(B.aU.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gan8(),m=d.d?"":" \xb7 Public",l=d.y===D.kf?" \xb7 View only":"",k=x.p
l=A.D(A.v(A.a([o,B.bA,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aF(!1,B.a1,!0,w,A.aK(!1,q,!0,new A.C(B.bB,A.A(A.a([p,B.bf,l,A.W(B.Ma,v?B.bq:B.bo,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dQI(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.af),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.ao_.prototype={
T(){return new C.aBN(A.a([],x._),A.aW(x.N),A.b6_())},
bp(){return this.r.$0()},
gdX(){return this.c}}
C.aBN.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.aba()
w=u.a
v=w.c
if(v.length!==0)C.a6a(v,w.e,w.d.w)},
q(){var w=this.w
w.S$=$.aw()
w.P$=0
this.a2()},
a1x(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1x=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xp("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dQ3(r),s,null,!0,!0,x.y),$async$a1x)
case 3:if(e!==!0||t.c==null){w=1
break}t.IR()
t.m(new C.dQ4(t,r))
w=4
return A.b(t.vp(),$async$a1x)
case 4:t.a.bp()
t.xp(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a1x,v)},
cn2(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aT.x1$.push(new C.dPZ(w,f,d,e))},
aQS(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dl()
u.e2(w,v,0,1)
u.jx(q,q,1,1)
this.w.sp(0,u)},
b7m(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eF(new Float64Array(16))
q.dY(r)
w=q.Cb()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dl()
t.e2(r,u,0,1)
t.jx(v,v,1,1)
t.e2(-r,-u,0,1)
t.ir(0,q)
s.sp(0,t)},
aba(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aba=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Ad(u.a.c),$async$aba)
case 2:t=s.r0(r.dH(e,new C.dPx(u)))
if(t!=null&&u.c!=null)u.m(new C.dPy(u,t))
return A.h(null,v)}})
return A.i($async$aba,v)},
xp(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
vn(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.fVm(o,t,!1,r,new C.dPM(u),q.a,s),$async$vn)
case 2:n=A
m=J
w=3
return A.b(C.FW(u.a.c),$async$vn)
case 3:p=n.r0(m.dH(e,new C.dPN(u)))
if(p!=null&&u.c!=null)u.m(new C.dPO(u,p))
return A.h(null,v)}})
return A.i($async$vn,v)},
IR(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cA(w,0)},
vp(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a1H(t,s),$async$vp)
case 2:return A.h(null,v)}})
return A.i($async$vp,v)},
a07(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a07=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tH(q,t.a.c)){t.xp("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.i2q(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a07)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.IR()
t.m(new C.dPY(t,r))
w=4
return A.b(t.vp(),$async$a07)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a07,v)},
ZQ(){return this.caX()},
caX(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ZQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tH(q,t.a.c)){t.xp("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.O(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dPW(r,new C.tv(q.ax.a===B.H)),s,null,!0,!0,x.y),$async$ZQ)
case 3:if(e!==!0||t.c==null){w=1
break}t.IR()
t.m(new C.dPX(r,t))
w=4
return A.b(t.vp(),$async$ZQ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZQ,v)},
UW(d){return this.bwT(d)},
bwT(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$UW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tH(r,t.a.c)){t.xp("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dPl(t,d),r,null,!0,!0,x.P),$async$UW)
case 3:s=f
if(s==null){w=1
break}t.IR()
t.m(new C.dPm(t,s))
w=4
return A.b(t.vp(),$async$UW)
case 4:case 1:return A.h(u,v)}})
return A.i($async$UW,v)},
a1T(d){return this.cz3(d)},
cz3(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a1T=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.O(s)
t=u.c
t.toString
w=2
return A.b(A.c9(null,null,!0,null,new C.dQ6(u,d,new C.tv(s.ax.a===B.H)),t,null,!0,!0,x.H),$async$a1T)
case 2:return A.h(null,v)}})
return A.i($async$a1T,v)},
c7f(d){var w=this,v=w.d
v===$&&A.c()
if(C.tH(v,w.a.c))w.Nt(d)
else w.a1T(d)},
agH(d,e){return this.cqS(d,e)},
cqS(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$agH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.O(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.c9(null,null,!0,null,new C.dQ0(new C.tv(r.ax.a===B.H),d,e),s,null,!0,!0,x.H),$async$agH)
case 3:case 1:return A.h(u,v)}})
return A.i($async$agH,v)},
Ht(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ht=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kf?3:5
break
case 3:w=6
return A.b(C.fJo(t.a.c),$async$Ht)
case 6:s=e
o=t.a
r=C.h1Z(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.agH(!s,!r),$async$Ht)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bzt(o,t.a.c)){t.xp("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.kY(o,"Cancel","Remove",q.y===D.kf?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Ht)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aNj(t.a.c,t.d.a),$async$Ht)
case 11:t.a.bp()
o=t.c
if(o==null){w=1
break}A.iL(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Ht,v)},
a8M(d){return this.bHU(d)},
bHU(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a8M=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tH(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b8(s,new C.dPn(p))){o=A.T(s)
p.a=A.r0(new A.cQ(new A.a2(s,new C.dPo(d),o.k("a2<1>")),new C.dPp(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.IR()
t.m(new C.dPq(t,s,d,q))
w=3
return A.b(t.vp(),$async$a8M)
case 3:t.xp(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a8M,v)},
Nt(d){return this.bJY(d)},
bJY(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Nt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tH(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a1T(d),$async$Nt)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.c9(null,null,!0,null,new C.dPu(t,d),r,null,!0,!0,x.P),$async$Nt)
case 6:s=f
if(s==null){w=1
break}t.IR()
t.m(new C.dPv(t,s))
w=7
return A.b(t.vp(),$async$Nt)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Nt,v)},
cxi(){var w=this,v=w.d
v===$&&A.c()
if(!C.tH(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dQ5(w))
w.vp()},
XK(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$XK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bzt(n,t.a.c)){t.xp("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.O(n)
s=$.aw()
r=new A.ar(B.as,s)
q=t.d.e
p=A.bl(new A.K(q,t.gc5L(),A.T(q).k("K<1,n>")).bZ(0,new C.dPH()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dPI(t,new C.tv(n.ax.a===B.H),p,r),q,null,!0,!0,x.y),$async$XK)
case 3:o=e
r.S$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.IR()
t.m(new C.dPJ(t,p))
w=4
return A.b(t.vp(),$async$XK)
case 4:t.xp("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$XK,v)},
c5M(d){return B.a.i(d.toLowerCase())},
c9K(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tH(v,w)
t=r.d
s=C.hSL(t)
C.i1l(q,t.b,u,C.hSK(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.H,m=new C.tv(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a2(l,new C.dQd(),A.T(l).k("a2<1>")).gM(0)
l=n?B.bX:B.iI
v=A.W(B.Ze,n?B.bq:B.bo,o,o,o,18)
u=x.p
v=A.a([new A.C(B.AC,A.aK(!1,o,!0,new A.C(B.hH,A.A(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dQe(p,d),o,o,o,o,o,o,o),o),new A.C(B.mX,p.bUF(m),o)],u)
if(p.d.y===D.kf){t=B.r4.j(0.15)
s=A.m(12)
r=A.I(B.r4.j(0.45),B.r,1)
q=C.FU(p.d,p.a.c)
v.push(new A.C(B.xi,A.p(o,A.A(A.a([D.bJr,B.aw,A.D(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iO,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b3],u)
if(C.tH(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Ja("Undo",B.qU,p.gcxh(),m,o,o))
u.push(new C.Ja("Family Book",D.bz1,p.gc9J(),m,B.rT,o))
if(C.tH(p.d,p.a.c))u.push(new C.Ja("Display settings",B.Bl,p.gcaW(),m,B.aZ,o))
u.push(new C.Ja("Sync",B.xZ,p.gaee(),m,o,o))
t=p.d
if(t.y===D.kf||C.bzt(t,p.a.c)){t=p.d.y===D.kf?"Remove shared tree":"Delete tree"
u.push(new C.Ja(t,B.e4,p.gbI3(),m,B.fV,o))}if(C.tH(p.d,p.a.c))u.push(new C.Ja("Add member",B.vn,new C.dQf(p),m,B.bT,o))
v.push(new A.C(Q.agb,A.A(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gan8()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cm(new C.dQg(p,m))
v.push(A.D(n,1))
if(w>0){n=p.f
u=A.W(n?K.Zi:X.Mb,o,o,o,o,o)
v.push(A.av(A.hc(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dQh(p),o),o,o,o))}return A.cb(o,l,A.bn(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
bUF(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fu.j(0.35),B.dk,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.W(B.xR,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a1,!0,m,A.aK(!1,m,!0,A.p(m,D.bMt,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gaee(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.af)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.eUM,m,m,m)
r=r.gan8()
p=n.d.gan8()===1?"member":"members"
o=x.p
p=A.a([s,B.bf,A.D(A.v(A.a([q,B.bA,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tH(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bJD,m,m,m,n.gckt(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jb:B.mg
r=r?"Private":"Public"
r=A.D(n.atr(q,"Privacy",r,n.a.d.w?n.gcwi():m),1)
q=A.D(n.atr(B.y_,"Tree code",n.d.c,new C.dPw(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.A(A.a([r,B.ab,q,B.ab,A.D(n.atr(D.bAK,"Collaborators",p,n.gbZ4()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kf){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aF(!1,B.a1,!0,A.m(999),A.aK(!1,A.m(999),!0,new A.C(B.fG,A.A(A.a([A.W(B.oA,B.c,m,m,m,14),B.ea,A.d("View only",m,m,m,m,m,m,B.aNQ,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.af)],o))}return A.p(m,A.bw(u,new A.an(B.W,m,B.aa,B.q,A.a([t,new A.C(B.ES,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bQm,B.n),m,m,m,m,m,m,m,1/0)},
atr(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a1,!0,A.m(14),A.aK(!1,A.m(14),!0,new A.C(L.ahi,A.v(A.a([A.W(d,B.c,w,w,w,18),B.at,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ui,A.d(f,w,1,B.a2,w,w,w,O.zd,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.af)}}
C.bcz.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gam(r)&&s.c.length===0)return B.bH
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bcC(s,t),new A.at(w,v))],x.p)
r=r.gdL(r)
B.d.v(u,r.dt(r,new C.d3Y(this),x.l))
r=s.c
B.d.v(u,new A.K(r,new C.d3Z(this),A.T(r).k("K<1,r>")))
return new A.C(B.tn,new A.a6(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.Jn.prototype={}
C.Fb.prototype={}
C.bcB.prototype={
gbfL(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aHn.prototype={}
C.bcC.prototype={
bJG(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.X()
v=A.M()
v.r=B.bz.j(0.75).gp(0)
v.c=2
v.d=B.bO
d.bA(new A.u(n,w),new A.u(m,w),v)
u=(n+m)/2
t=new A.aQ(q.r,B.ap,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.b5(u,q))
s=w-1.1
r=w-8.8
t.E(new A.pq(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.pq(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bE())
q=A.M()
q.r=B.c.gp(0)
d.ai(new A.u(u,w),9,q)
q=A.M()
q.r=B.bz.gp(0)
d.aO(t,q)},
bJE(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.d4i())
w=f.b
v=w+(B.d.gL(a0).b-w)/2
u=B.d.b8(a0,new C.d4j(f))
t=new A.K(a0,new C.d4k(f),A.T(a0).k("K<1,N>")).bZ(0,new C.d4l()).cI(0,1/0,B.wx)
w=f.a
d.bA(f,new A.u(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.L)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.H()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lO(m)
i=Math.min(10,l/2)
l=$.X()
h=A.a([],q)
g=new A.aQ(l.r,B.ap,null,null,h)
h.push(new A.b5(w,v-i))
l=j*i
h.push(new A.cS(w,v,w+l,v))
h.push(new A.ap(n-l,v))
h.push(new A.cS(n,v,n,v+i))
h.push(new A.ap(n,o.b))
k=e.H()
n=g.gbI().a.snapshot()
r.drawPath((g.e=new A.cF(n)).a,k)
k.delete()}},
a6(d,e){var w,v,u,t,s,r,q,p,o
$.X()
w=A.M()
w.r=B.bT.j(0.75).gp(0)
w.c=2.2
w.b=B.ae
w.d=B.bO
w.e=B.fz
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.L)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bJE(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bJG(d,w,q.a,q.b)}},
aq(d){return d.b!==this.b}}
C.bgg.prototype={
gc3B(){var w=this.c
if(B.a.i(w.y).length!==0)return D.dcu
switch(w.c.a){case 0:return D.cHO
case 1:return D.cSz
case 2:return D.d74}},
gc3E(){var w=this.c,v=C.hcI(w.w),u=C.hcI(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.O(d).ax.a===B.H,q=t.gc3B(),p=t.c,o=I.bAn(p.f),n=t.gc3E(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.aA:B.c,j=A.I(r?B.aA:B.c,B.r,2)
if(o!=null)w=A.rW(B.A,s,B.cm,B.bQ,!1,s,o,!1,s,s)
else{w=A.a([B.d.gL(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a7(B.a3,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hS(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a7(B.ax,B.aD,B.x,q,s,s),B.a6),s,56,s,s,B.F7,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.aA:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.f3E,s,s,s),B.f,s,s,new A.o(B.c8,s,w,j,s,s,B.n),s,s,s,s,D.btp,s,s,s),s,s,s,-6,-4,s))}k=r?B.cC:B.c
j=A.m(8)
w=A.I(B.d.gL(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dB,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cC,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bo,s,s,s,s,s,s,s,s,7.5,s,s,B.a4,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aE(s,new A.a6(84,112,A.v(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.at,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.aXp,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.btA,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a8)}}
C.bbH.prototype={
a6(d,e){var w,v,u,t,s,r,q
$.X()
w=A.M()
v=this.b
u=v?B.c:D.b85
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
aq(d){return d.b!==this.b}}
C.btQ.prototype={
B(d){var w=this,v=null,u=new C.f4R(w),t=w.c,s=t?B.cC:B.c,r=A.m(12),q=u.$3(B.hw,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bF:B.f7,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xW,"Zoom out",w.e)
return A.aF(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.f,t?B.bF:B.f7,v,v,v,1,v,v,v,v,v,22),u.$3(B.ajD,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dn,v,v,v,B.af)}}
C.bjB.prototype={
B(d){var w=this,v=null,u=B.bT.j(0.15),t=A.I(B.bT,B.r,2),s=w.e,r=x.p
t=A.aE(v,A.p(v,A.v(A.a([A.W(s?K.Zi:X.Mb,B.bT,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.f01,v,v,v)],r),B.m,v,B.ba,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a8)
u=A.a([t,B.ao,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.eZ1,B.L,v,v)],r)
if(s){t=A.a([B.ao],r)
s=w.d
B.d.v(t,new A.K(s,new C.eH8(w),A.T(s).k("K<1,r>")))
B.d.v(u,t)}return new A.a6(84,v,A.v(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.Z0.prototype={
T(){return new C.aAe()},
bp(){return this.Q.$0()},
gdX(){return this.w}}
C.aAe.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a1()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aO()
r.d=new A.ar(new A.bb(t,B.b2,B.aN),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aO()
r.e=new A.ar(new A.bb(t,B.b2,B.aN),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aO()
r.f=new A.ar(new A.bb(t,B.b2,B.aN),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aO()
r.r=new A.ar(new A.bb(t,B.b2,B.aN),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aO()
r.w=new A.ar(new A.bb(t,B.b2,B.aN),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aO()
r.x=new A.ar(new A.bb(t,B.b2,B.aN),s)
t=u?q:v.c
r.y=t==null?D.xv:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hUi(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.S$=$.aw()
u.P$=0
u=v.e
u===$&&A.c()
u.S$=w
u.P$=0
u=v.f
u===$&&A.c()
u.S$=w
u.P$=0
u=v.r
u===$&&A.c()
u.S$=w
u.P$=0
u=v.w
u===$&&A.c()
u.S$=w
u.P$=0
u=v.x
u===$&&A.c()
u.S$=w
u.P$=0
v.a2()},
OP(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$OP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.h1Z(p.y,p.w)
w=3
return A.b(A.la(t.a.w,B.Hv),$async$OP)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aYl(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$OP)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hw5(p.y,p.w)
t.a.bp()
case 5:w=7
return A.b(An.G4(78,800),$async$OP)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dk8(t,q))
case 1:return A.h(u,v)}})
return A.i($async$OP,v)},
c3D(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hV(B.o.u(1000*Date.now()),w,D.xv,null,null,null,"","","","","",1,!1,0)
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
s=v.aC8(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a5(k,!1).N(s)},
a8n(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a8n=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dk7(r),s,null,!0,!0,x.y),$async$a8n)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a5(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a8n,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.O(d).ax.a===B.H,i=new C.tv(j),h=l.a.e,g=A.T(h).k("a2<1>"),f=A.B(new A.a2(h,new C.dkh(l),g),g.k("H.E"))
h=j?B.dX:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.brV,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aA,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hp(A.aK(!1,k,!0,new A.C(B.lC,A.W(B.e4,B.on,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbEK(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jo:B.iL
t=I.bAn(l.as)
if(l.as==null)s=A.W(B.ot,j?B.bq:B.bo,k,k,k,40)
else s=k
s=A.av(A.aE(k,new A.an(B.W,k,B.aa,B.q,A.a([A.hq(u,t,s,k,42),A.ao(0,A.hq(B.bT,k,D.bDm,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc3A(),k,k,k,k,k,k,!1,B.a8),k,k,k)
t=l.d
t===$&&A.c()
t=C.aAg(t,"Full name",B.md,1,1,i,B.lR)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.S,new C.bge(i,u,new C.dki(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.blv],q)
o=l.a.e
B.d.v(p,new A.K(o,new C.dkj(),A.T(o).k("K<1,eO<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.blx],q)
B.d.v(q,new A.K(f,new C.dkl(),A.T(f).k("K<1,eO<n?>>")))
o=A.v(A.a([t,B.ao,new C.abY(i,r,"Who is their parent?",p,new C.dkm(l),k,o),B.ay,n,B.ao,new C.abY(i,m,"Who is their spouse / partner?",q,new C.dkn(l),k,o)],v),B.aj,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aAg(q,"Birth date",D.aiH,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aAg(m,"Birth place",B.Zx,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aAg(n,"Date of death (if deceased)",D.akY,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aAg(p,"Occupation",B.a_B,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.q,w,k),B.ay,s,B.bv,new C.abZ(i,"Identity",u,k),B.ac,new C.abZ(i,"Family links",o,k),B.ac,new C.abZ(i,"Life details",A.v(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aAg(r,"Notes",B.kI,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aAf(i,"Child order",l.cb9(l.at),new C.dko(l),new C.dkp(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fSN(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dkq(l):k
B.d.v(r,A.a([B.S,new C.aAf(i,"Visible in tree",u,w,new C.dkr(l),k)],v))}r.push(B.S)
w=j?B.jo:B.iL
u=A.m(14)
t=A.I(j?B.dZ:B.bV,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iD(k,B.bT,k,B.ag,k,new C.dks(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.afN,k,k,k))
r.push(B.bv)
w=j?B.aP:B.aA
j=j?B.dZ:B.bV
r.push(A.A(A.a([A.D(A.dT(B.ni,new C.dkk(d),A.de(k,k,k,k,k,k,k,k,k,w,k,k,B.cf,k,new A.b7(A.m(14),B.Y),new A.az(j,1,B.r,-1),k,k,k,k)),1),B.bf,A.D(A.bJ(D.eDW,l.gc3C(),A.bk(B.aU,k,k,0,B.c,k,B.cf,k,new A.b7(A.m(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.at)
return A.eh(B.h6,k,B.ag,h,new A.a6(420,k,A.cd(A.v(r,B.aj,k,B.e,B.Q,0,B.p),B.q,k,B.y,k,k,k,k,B.ai),k),D.agF,k,B.ag2,new A.b7(g,B.Y),k,k)},
cb9(d){var w=B.o.G(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.G(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.abZ.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jo:B.iL,s=A.m(16)
return A.v(A.a([new A.C(D.ah3,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.dZ:B.bV,B.r,1),s,w,w,B.n),w,w,w,w,B.bm,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bgf.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dX:B.c,r=A.m(12),q=A.I((t?B.dZ:B.bV).j(0.85),B.r,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aP:B.aA,u,u,u,u,u,u,u,u,14,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aL(u,B.T,!1,u,!0,B.q,u,A.aM(),v.d,u,u,u,u,u,2,A.br(u,B.ev,u,B.v1,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bq:B.bo,u,u,u,u,u,u,u,u,u,u,u,B.cs,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.W(v.f,B.bT,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ah,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.abY.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dX:B.c,s=A.m(12),r=A.I((u?B.dZ:B.bV).j(0.85),B.r,1),q=A.W(B.qO,u?B.bq:B.bo,v,v,v,v),p=A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,14,v,v,B.a4,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dX:B.c
return A.p(v,new A.D8(A.a3k(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bo,v,v,v,v,v,v,v,v,v,v,v,B.cs,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.l4,v,v,v)}}
C.bge.prototype={
B(d){var w=new C.dkt(this)
return A.A(A.a([w.$3(D.YR,"Male",B.MX),B.ab,w.$3(D.ahV,"Female",B.MI),B.ab,w.$3(D.xv,"Other",B.n2)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aAf.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jo:B.iL,r=A.m(14),q=A.I(t?B.dZ:B.bV,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aA,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.D(A.v(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bo,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aGq(u,B.xW,w.f,v),B.bp,new C.aGq(u,B.hw,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eh,v,v,v)}}
C.aGq.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bT.j(0.12)
else w=s.c.a?B.dX:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bT
else t=(s.c.a?B.bq:B.bo).j(0.4)
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,new A.a6(36,36,A.W(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.af)}}
C.ac_.prototype={
bNj(d){switch(d.a){case 0:return B.bT
case 1:return B.bz
case 2:return B.cU}},
bNk(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aV3(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
zO(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dX:B.c
u=A.m(12)
t=A.I((w?B.dZ:B.bV).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.W(f,B.bT,p,p,p,18),B.aw],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bo,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.D(A.v(A.a([q,B.at,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.aA,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.A(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cG,B.xf,p,p,1/0)},
acJ(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jo:B.iL,s=A.m(16),r=A.I(v?B.dZ:B.bV,B.r,1)
return A.v(A.a([new A.C(D.ah3,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bR,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hho(r,q),o=q.c,n=t.bNj(o),m=I.bAn(q.f),l=t.e.a,k=l?B.dX:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.aA,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.kf?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bq:B.bo,s,s,s,s,s,s,s,s,12,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.hq(u,m,m==null?A.W(B.ot,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.en,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.r,1)
v=A.av(A.p(s,A.d(t.bNk(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mb,s,s,s),s,s,s)
u=x.p
i=A.a([t.zO("Full name",i,B.md)],u)
if(p>0)i.push(t.zO("Child order","#"+p,B.MP))
r=A.a([h,B.at,r,B.aO,l,B.S,v,B.bv,t.acJ("Identity",i),B.ac,t.acJ("Life details",A.a([t.zO("Birth date",q.w,D.aiH),t.zO("Birth place",q.x,B.Zx),t.zO("Date of death",q.y,D.akY),t.zO("Occupation",q.z,B.a_B)],u)),B.ac,t.acJ("Family links",A.a([t.zO("1. Parent",t.aV3(q.d),B.Fl),t.zO("2. Spouse",t.aV3(q.e),B.MH)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.acJ("Notes",A.a([t.zO("Notes",q,B.kI)],u))],u))
r.push(B.bv)
r.push(A.bJ(B.II,new C.dkD(d),A.bk(B.aU,s,s,s,s,s,B.cf,s,new A.b7(A.m(14),B.Y),s,s,s)))
return A.eE(s,k,new A.cU(B.lq,A.cd(A.v(r,B.aj,s,B.e,B.Q,0,B.p),B.q,s,B.y,s,B.xk,s,s,B.ai),s),s,s,s,B.EV,B.d0,s,new A.b7(j,B.Y),s)}}
C.Ja.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bq:B.bo
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.xn,A.hp(A.aF(!1,B.a1,!0,A.m(8),A.aK(!1,A.m(8),!0,new A.a6(30,30,A.W(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.af),u,v.c,u,u),u)}}
C.ao2.prototype={
eK(){var w,v,u=this,t=x.N,s=A.V(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a5().ac())
w=u.c
v=A.T(w).k("K<1,a4<n,@>>")
w=A.B(new A.K(w,new C.c6a(),v),v.k("ai.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iT(w,new C.c6b(),t,x.U))
return s}}
C.ao3.prototype={
T(){return new C.aBP(A.a([],x.bF))},
gdc(){return this.c}}
C.aBP.prototype={
a_(){this.a1()
this.IY()},
IY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$IY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c6e(t.a.c),$async$IY)
case 3:r=e
w=4
return A.b(C.Ad(t.a.c),$async$IY)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qH(q,new C.dQq(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dQr(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$IY,v)},
xW(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
JG(d,e){return this.czB(d,e)},
czB(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$JG=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dQv(q,e))
t=3
w=6
return A.b(d.$0(),$async$JG)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dQw(q))
$.eQ.mg()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JG,v)},
WA(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oW(r,s.c,s.e),$async$WA)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JG(new C.dQn(t),"Preparing download\u2026"),$async$WA)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WA,v)},
WE(d){return this.bLn(d)},
bLn(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oW(r,s.c,s.e),$async$WE)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.JG(new C.dQo(t,d),"Preparing file\u2026"),$async$WE)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WE,v)},
aeB(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aeB=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wN.c4().Lp(B.PM,B.ts,!0),$async$aeB)
case 7:r=e
o=r
q=o==null?null:J.fn(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aG.gam(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jl(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.a9(m)
$.am.$1("[family tree sync pick] file_picker: "+A.t(p))
w=6
break
case 3:w=2
break
case 6:u=A.G3()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aeB,v)},
Xe(d){return this.bVx(d)},
bVx(d){var w=0,v=A.j(x.H),u=this
var $async$Xe=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.JG(new C.dQp(u,d),"Restoring family trees\u2026"),$async$Xe)
case 2:return A.h(null,v)}})
return A.i($async$Xe,v)},
Xd(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Xd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.aeB(),$async$Xd)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Xe(s),$async$Xd)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xd,v)},
a0Y(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0Y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oW(r,s.c,s.e),$async$a0Y)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JG(new C.dQu(t),"Creating QR code\u2026"),$async$a0Y)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0Y,v)},
a0z(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Cp()){t.xW("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).ce(A.ej(new C.dQs(),!0,null,x.N)),$async$a0z)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Xe(r),$async$a0z)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0z,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.O(d).ax.a===B.H,n=o?B.A2:B.iI,m=o?D.aen:B.aP,l=o?B.aK:B.bV,k=o?B.aP:B.aA,j=new C.d4m(n,m,l,k,o?B.bI:B.bo)
l=A.aH(p,p,p,p,A.W(B.eA,k,p,p,p,20),p,p,p,new C.dQy(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eD(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.D(C.d3V(!0,B.jd,B.aW,B.aW,q.r?p:q.gcqG(),j,s,"Show restore QR"),1),B.aw],u))}s=q.e
r=q.r?p:q.gcmY()
t.push(A.D(C.d3V(!s,B.iQ,B.b4,B.by,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.D(C.d3V(!1,B.hy,B.aU,B.bT,q.r?p:q.gbLg(),j,"Photos & books included","Download all trees"),1),B.aw],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.D(C.d3V(!1,M.y2,B.aI,B.aM,q.r?p:q.gbVu(),j,s,"Upload backup file"),1))
l=A.a([new C.bcA(v,l,p),B.kq,new C.abg(j,"QR restore",p),B.S,t,B.d5,new C.abg(j,"Backup files",p),B.S,A.A(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kq,new C.abg(j,"One tree",p),B.S],u)
B.d.v(v,J.b6(q.d,new C.dQz(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cB(l,p,B.Y_,p,p,B.ai,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aU.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dk,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bn(!0,A.p(p,A.A(A.a([K.aMk,B.bf,A.D(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.AI,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.cb(w,n,new A.an(B.W,p,B.aa,B.q,l,p),p,!1,!1,p,p)}}
C.d4m.prototype={}
C.bcA.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aU.j(0.32),B.jX,28)],x.V)
t=A.ao(p,A.W(B.tJ,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.q,A.a([t,new A.C(B.a9,A.A(A.a([A.p(p,D.bM1,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.o1,A.D(A.v(A.a([D.f8q,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bTv,B.n),p,p,p,p,p,p,p,p)}}
C.abg.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aU,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bcy.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aW.j(0.4):m.c
k=A.I(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aW.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.I(t.j(0.35),B.r,1)
return A.aF(!1,B.a1,!0,q,A.aK(!1,o,!0,A.ex(A.db(new A.C(E.XE,A.v(A.a([A.p(q,A.W(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qJ,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bA,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cs,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.af)}}
C.bcD.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.r,1),q=B.aU.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.ex(new A.C(B.eP,A.A(A.a([A.p(v,D.bLf,B.f,v,v,new A.o(q,v,A.I(B.aU.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.qJ,v,v,v),B.bf,A.D(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.W(B.hy,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.af)}}
C.Zl.prototype={
T(){return new C.aBO()},
gdc(){return this.c}}
C.aBO.prototype={
a_(){this.a1()
this.a7U()},
a7U(){var w=0,v=A.j(x.H),u=this,t
var $async$a7U=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b_Z(u.a.c,B.Cj),$async$a7U)
case 2:t=e
if(u.c!=null)u.m(new C.dQi(u,t))
return A.h(null,v)}})
return A.i($async$a7U,v)},
afY(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$afY=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dQj(q))
t=4
p=A.h3C(q.a.d,B.Cj)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.U(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.aqi(n.e,m,l,B.Cj,p,n.f),$async$afY)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dQk(q))
q.c.I(x.q).f.R(D.eMf)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.a9(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(B.a.e9(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dQl(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afY,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.O(d).ax.a===B.H,o=p?B.j1:B.pk,n=p?B.i4:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eD(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fnB,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aU.j(0.35),B.r,1)
u=A.pB(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aU,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.D(A.p(q,A.v(A.a([B.P,u,B.bv,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.ba,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bw,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcmG()
if(u)u=B.Ii
else u=A.W(r.e===!0?B.hx:B.aiG,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a6(1/0,q,A.ez(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cc,q,q,q),t,A.de(q,q,q,q,q,q,q,q,q,B.aU,q,B.fL,q,q,q,new A.az(B.aU.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.i8,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.az:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.S)
w.push(new A.a6(1/0,q,A.bJ(B.zh,new C.dQm(d),A.bk(B.aU,q,q,q,q,B.fL,q,q,q,q,q,q)),q))
return A.cb(m,o,new A.C(B.a9,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.Zm.prototype={
T(){return new C.bhI(A.yM(B.x5,B.np,B.tO))}}
C.bhI.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.cb(A.eD(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fg1,w,w,w,1,w,!0),B.w,A.yL(this.d,B.bQ,new C.dQA(this,d)),w,!1,!1,w,w)}}
C.aWU.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Pg,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lu.prototype={}
C.a5c.prototype={
T(){return new C.bhp(null,null)}}
C.bhp.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.th,v,1,v,w)
w.e=A.bj(v,B.pp,v,1,v,w)
w.a.toString
w.d.cH(0)
w.e.cH(0)},
br(d){var w,v,u=this
u.bE(d)
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
this.bsj()},
B(d){var w,v,u=this,t=B.d.dM(D.a2e,new C.dC9(u),new C.dCa())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.crr(A.c6(new A.h3(A.a([w,v],x.dS)),new C.dCb(u,t),null),!0)}}
C.bho.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aZh(d,e)
break
case"house":p.lT(d,e,D.cWY)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gee()
$.X()
t=A.M()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ai(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.lY(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Ax(d,e,12)
p.xz(d,e,B.kZ,5,14)
break
case"grocery":p.cbS(d,e)
break
case"calculator":p.cbz(d,e)
break
case"lumber":p.cc_(d,e)
break
case"kitchen":p.cbV(d,e)
break
case"landscape":p.lT(d,e,D.cXt)
s=new A.aQ($.X().r,B.ap,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.b5(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.cS(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.cS(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.ap(t,w))
s.E(new A.ap(0,w))
s.E(new A.bE())
w=A.M()
w.r=B.ff.j(0.85).gp(0)
d.aO(s,w)
p.Ax(d,e,8)
p.xz(d,e,B.iN,4,18)
break
case"plumbing":p.cc8(d,e)
break
case"electrical":p.lT(d,e,D.d6o)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.X()
u=A.M()
u.r=B.c.j(q*0.12).gp(0)
d.aY(new A.aa(0,0,0+e.a,0+e.b),u)
p.lY(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.lY(d,e,B.lu.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Ax(d,e,10)
break
case"store":p.cch(d,e)
break
case"paint_remodel":p.cc3(d,e)
break
case"roofing":p.cca(d,e)
break
case"warehouse":p.cco(d,e)
break
case"vehicles":p.ccm(d,e)
break
case"farm":p.cbM(d,e)
break
case"restaurant":p.cc9(d,e)
break
case"tools":p.cck(d,e)
break
case"wallet":p.ccn(d,e)
break
case"concrete":p.cbF(d,e)
break
case"blueprint":p.cbx(d,e)
break
default:p.aZh(d,e)}},
lT(d,e,f){var w,v=new A.aa(0,0,0+e.a,0+e.b)
$.X()
w=A.M()
w.sau(new A.a7(B.ax,B.aD,B.x,f,null,null).aw(0,v))
d.aY(v,w)},
lY(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.gee()/2-h
$.X()
w=A.M()
w.b=B.ae
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bU(q,p)
r=w.H()
v.drawArc.apply(v,[A.c4(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
xz(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gee()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
Ax(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.G(s*0.17,0.9)
p=B.k.G(s*0.23,0.85)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aZh(d,e){var w,v=this
v.lT(d,e,D.d57)
w=v.c
v.lY(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.lY(d,e,B.bJ.j(0.45),-w*3.141592653589793*1.4,22)
v.bJA(d,e,B.hT,w)
v.xz(d,e,B.c.j(0.7),6,8)},
bJA(d,e,f,g){var w,v,u,t,s,r,q,p
$.X()
w=A.M()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c4(new A.aa(16,q,t,q+3)),p)
p.delete()}},
cbS(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lT(d,e,D.cdT)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.G(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.G(s,2)
$.X()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.cVk[B.o.G(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.lY(d,e,B.c.j(0.35),w,16)
j.xz(d,e,B.iN,5,12)},
cbz(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lT(d,e,D.ce_)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gee()
$.X()
q=A.M()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ai(new A.u(t/2,s/2),r*(0.18+u*0.08),q)
p=A.ii(g,g,g,g,g,B.a5,B.ch,g,B.eq,B.cd)
for(o=0;o<6;++o){n=v+o*0.9
r=D.cYZ[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.G(o,2)
p.saV(0,new A.eo(r,g,g,B.cO,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eP()
p.a6(d,new A.u(t*(0.08+B.o.G(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.ce1[o]
l=B.k5.j(0.28+0.3*Math.sin(n))
k=B.o.G(o,2)
p.saV(0,new A.eo(m,g,g,B.cO,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eP()
p.a6(d,new A.u(t*(0.55+B.o.G(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.lY(d,e,B.c.j(0.35),w*1.5,14)
h.lY(d,e,B.ey.j(0.55),-v*3.141592653589793*2,8)
h.lY(d,e,B.A3.j(0.4),r*2.8,22)
h.xz(d,e,B.pb,8,10)
h.Ax(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.G(w+o*0.22,0.9)
$.X()
r=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cc_(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lT(d,e,Z.auk)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bz(new A.aa(20,q,u,q+10),B.hz)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.h_,B.od,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.ep(p),n)
n.delete()}m.lY(d,e,B.h_.j(0.35),w,15)
m.Ax(d,e,8)},
cbV(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lT(d,e,D.cVP)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.G(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.G(r*0.13,0.7)
$.X()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.H()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.lY(d,e,B.bJ.j(0.4),-w*3.141592653589793*2.2,11)
j.xz(d,e,B.qp,4,14)},
cc8(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lT(d,e,D.cLs)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.G(s,0.12)
$.X()
n=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xz(d,e,B.ol,6,12)
l.lY(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cch(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lT(d,e,D.crj)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bz(new A.aa(q,14,q+u,22),B.ig)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.f5,B.bJ,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.ep(q),o)
o.delete()}n.lY(d,e,B.c.j(0.3),w,16)
n.Ax(d,e,8)
n.xz(d,e,B.uH,5,13)},
cc3(d,e){var w,v,u,t,s,r,q,p,o
this.lT(d,e,D.cR0)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.G(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bz(new A.aa(q,p,q+8,p+(18+r*22)),B.h9)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.il,B.dy,B.bJ,B.ex][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.ep(p),o)
o.delete()}this.lY(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cca(d,e){var w,v,u,t,s,r,q,p,o
this.lT(d,e,D.cOC)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.G(v+s*0.12,0.75))
q=B.o.G(s,4)*0.22
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xz(d,e,B.cn,7,11)},
cco(d,e){var w,v,u,t,s,r,q,p,o,n
this.lT(d,e,D.ctX)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bz(new A.aa(p,o,p+(t-r*8),o+16),B.hz)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.cn,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.ep(o),n)
n.delete()}this.lY(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
ccm(d,e){var w,v,u,t,s,r,q,p,o
this.lT(d,e,D.da7)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.G(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.G(s,2)*0.08)
q=A.bz(new A.aa(r,q,r+28,q+8),B.hz)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.ep(q),o)
o.delete()}this.Ax(d,e,6)},
cbM(d,e){var w,v,u,t,s,r,q,p,o,n
this.lT(d,e,D.cUu)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.X()
s=A.M()
s.r=B.lu.j(0.75).gp(0)
d.ai(new A.u(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.he.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.lY(d,e,B.lu.j(0.35),w,14)},
cc9(d,e){var w,v,u,t,s,r,q,p,o=this
o.lT(d,e,D.cWN)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cu(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c4(r),p)
p.delete()}o.xz(d,e,B.qp,5,16)
o.Ax(d,e,7)},
cck(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lT(d,e,D.d7N)
w=m.c
v=w*3.141592653589793
m.lY(d,e,B.od.j(0.55),v*3,10)
m.lY(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.od.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
ccn(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lT(d,e,D.daE)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bz(new A.aa(p,o,p+36,o+22),B.ig)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.iN,B.lu,q).gp(0)
n=p.H()
s.drawRRect(A.ep(o),n)
n.delete()}m.Ax(d,e,9)
m.lY(d,e,B.c.j(0.4),w*2.2,12)},
cbF(d,e){var w,v,u,t,s,r,q,p,o,n
this.lT(d,e,D.d0B)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bU(new A.u(v,u),34)
$.X()
s=A.M()
s.b=B.ae
s.c=5
s.r=B.c.j(0.45).gp(0)
d.fh(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.bV.j(0.85).gp(0)
n=o.H()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
cbx(d,e){var w,v,u,t,s,r,q,p
this.lT(d,e,D.cXK)
$.X()
w=A.M()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.H()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.H()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.G(t*0.85,1)
$.X()
u=A.M()
u.r=B.dy.j(0.45).gp(0)
d.aY(new A.aa(0,p,0+v,p+6),u)
this.lY(d,e,B.kZ.j(0.45),-t*3.141592653589793*2,11)},
aq(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.ar_.prototype={
Ze(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ze=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aOe(),$async$Ze)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a7r(s),$async$Ze)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$Ze,v)},
aeC(d){return this.ceD(d)},
ceD(d){var w=0,v=A.j(x.H),u=this,t
var $async$aeC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.i1v(d),$async$aeC)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$aeC,v)},
B(d){var w,v,u,t=null,s=A.O(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.H?B.jo:B.iL
w=x.p
v=A.a([C.aOC(!0,B.qh,1/0,B.px,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.bZ(new A.bI(B.b0,t,t,new A.C(B.uV,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.ave,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a7(B.b0,B.b6,B.x,u,t,t),B.n),B.bd))}v.push(A.ao(8,A.A(A.a([A.D(A.dp(D.bF6,D.f4T,new C.cdI(this,d),A.bk(B.aU,t,t,t,B.c,t,B.jO,t,t,t,t,B.c7)),1),B.ab,A.D(A.ez(D.bNe,D.fj1,this.gc5J(),A.de(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jO,t,t,D.aVW,t,t,t,B.c7)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fG(1.7777777777777777,A.aF(!1,B.a1,!0,B.qh,new A.an(B.W,t,B.b_,B.q,v,t),B.aq,s,0,t,t,t,t,t,B.af),t)}}
C.aJJ.prototype={
aQ(){this.aX()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdG())
w.b2$=null
w.a2()}}
C.aRu.prototype={}
C.aRt.prototype={}
C.aPz.prototype={}
C.Y_.prototype={
T(){return new C.ax4()}}
C.ax4.prototype={
a_(){var w,v,u=this
u.a1()
u.a.toString
w=new A.bb("",B.b2,B.aN)
v=$.aw()
u.d!==$&&A.aO()
u.d=new A.ar(w,v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
Jx(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.I(x.q).f.R(D.eMK)
return}t=u.c
t.toString
v=u.e
A.a5(t,!1).N(new C.aRu(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.O(d).ax.a===B.H,l=m?B.dX:B.c,k=A.m(20),j=A.p(n,D.bMU,B.f,n,n,new A.o(B.aU.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.aA,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.D(A.v(A.a([i,B.bA,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bo,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.bf,i,A.aH(n,n,n,n,A.W(B.cy,m?B.bq:B.bo,n,n,n,n),n,n,n,new C.cX4(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bo,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bo,n,n,n,n,n,n,n,n,11,n,n,B.cs,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.h3S(new C.cX5(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.aA,n,n,n,n,n,n,n,n,n,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jo:B.iL
r=A.m(12)
q=A.m(12)
p=m?B.dZ:B.bV
t=A.aL(n,B.T,!0,n,!0,B.q,n,A.aM(),u,n,n,n,n,n,2,A.br(n,new A.b4(4,r,B.dg),n,n,n,n,n,n,!0,new A.b4(4,q,new A.az(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ah,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cX6(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,R.Im,n,n,n,n)
u=m?B.aP:B.aA
m=m?B.dZ:B.bV
return A.eE(n,l,new A.cU(B.lq,A.cd(A.v(A.a([j,B.aO,i,B.at,w,B.P,v,B.aO,t,B.bv,A.A(A.a([A.D(A.dT(B.de,new C.cX7(d),A.de(n,n,n,n,n,n,n,n,n,u,n,n,B.cf,n,new A.b7(A.m(12),B.Y),new A.az(m,1,B.r,-1),n,n,n,n)),1),B.aw,A.D(A.bJ(D.fjg,o.ga1h(),A.bk(B.aU,n,n,n,B.c,n,B.cf,n,new A.b7(A.m(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.q,n,B.y,n,B.AJ,n,n,B.ai),n),n,n,n,W.AK,B.d0,n,new A.b7(k,B.Y),n)}}
C.XZ.prototype={
T(){return new C.ax3()}}
C.ax3.prototype={
a_(){this.a1()
var w=$.aw()
this.d!==$&&A.aO()
this.d=new A.ar(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
Jx(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.I(x.q).f.R(D.eKr)
return}v=this.c
v.toString
A.a5(v,!1).N(new C.aRt(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.O(d).ax.a===B.H,o=p?B.dX:B.c,n=A.m(20),m=A.p(q,D.bJw,B.f,q,q,new A.o(B.bT.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.D(A.v(A.a([l,B.bA,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bo,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.bf,l,A.aH(q,q,q,q,A.W(B.cy,p?B.bq:B.bo,q,q,q,q),q,q,q,new C.cX0(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aU.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aU.j(0.25),B.r,1)
u=A.W(B.ais,B.aU.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.aw,A.D(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bB,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,q,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jo:B.iL
t=A.m(12)
s=A.m(12)
r=p?B.dZ:B.bV
v=A.aL(q,B.T,!0,q,!0,B.q,q,A.aM(),w,q,q,q,q,q,2,A.br(q,new A.b4(4,t,B.dg),q,q,q,q,q,q,!0,new A.b4(4,s,new A.az(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ah,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cX1(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.kr,q,q,q,q)
w=p?B.aP:B.aA
p=p?B.dZ:B.bV
return A.eE(q,o,new A.cU(B.lq,A.cd(A.v(A.a([m,B.aO,l,B.ay,v,B.bv,A.A(A.a([A.D(A.dT(B.de,new C.cX2(d),A.de(q,q,q,q,q,q,q,q,q,w,q,q,B.cf,q,new A.b7(A.m(12),B.Y),new A.az(p,1,B.r,-1),q,q,q,q)),1),B.aw,A.D(A.bJ(D.fpN,this.ga1h(),A.bk(B.bT,q,q,q,B.c,q,B.cf,q,new A.b7(A.m(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.q,q,B.y,q,B.AJ,q,q,B.ai),q),q,q,q,W.AK,B.d0,q,new A.b7(n,B.Y),q)}}
C.Xx.prototype={
T(){return new C.avO()}}
C.avO.prototype={
a_(){var w,v=this
v.a1()
w=$.aw()
v.d!==$&&A.aO()
v.d=new A.ar(B.as,w)
v.e!==$&&A.aO()
v.e=new A.ar(new A.bb("1",B.b2,B.aN),w)
v.f!==$&&A.aO()
v.f=new A.ar(B.as,w)
v.r!==$&&A.aO()
v.r=new A.ar(B.as,w)},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.S$=$.aw()
u.P$=0
u=v.e
u===$&&A.c()
u.S$=w
u.P$=0
u=v.f
u===$&&A.c()
u.S$=w
u.P$=0
u=v.r
u===$&&A.c()
u.S$=w
u.P$=0
v.a2()},
gIT(){var w,v=this.e
v===$&&A.c()
w=A.d4(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gahL(){var w=this.f
w===$&&A.c()
w=A.d4(B.a.i(w.a.a))
return w==null?0:w},
gb15(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aMr(d){var w,v=B.k.D(this.gIT()+d,0.25,999999),u=B.k.jO(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.O(v))
else{u=B.k.aa(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aJ(u,w,"")}t.saV(0,u)
this.m(new C.cuE())},
aw4(d,e,f,g){var w=null,v=g!=null?A.W(g,B.aU,w,w,w,20):w,u=d.a,t=u?B.jo:B.iL,s=A.m(14),r=A.m(14)
u=u?B.dZ:B.bV
return A.br(w,new A.b4(4,s,B.dg),w,B.bB,w,w,w,w,!0,new A.b4(4,r,new A.az(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.m(14),B.a9i),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c5K(d,e,f){return this.aw4(d,e,f,null)},
Jx(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gahL()<=0){s.c.I(x.q).f.R(D.eOB)
return}r=s.c
r.toString
v=s.gIT()
u=s.gahL()
t=s.gb15()
A.a5(r,!1).N(new C.aPz(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.H,m=new C.tv(n),l=n?B.dX:B.c,k=A.m(24),j=x.O,i=A.a([B.aU.j(0.22),B.bT.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bD4,B.f,o,o,new A.o(o,o,A.I(B.aU.j(0.35),B.r,1),h,o,new A.a7(B.a3,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.D(A.v(A.a([h,B.bA,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.cs,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.bf,h,A.aH(o,o,o,o,A.W(B.cy,n?B.bq:B.bo,o,o,o,o),o,o,o,new C.cuK(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aL(o,B.T,!0,o,!0,B.q,o,A.aM(),h,o,o,o,o,o,2,p.aw4(m,"Item name (optional)","Lumber, paint, labor\u2026",B.MV),B.y,!0,o,!0,o,!1,o,B.ah,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,R.Im,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jo:B.iL
t=A.m(14)
s=A.I(n?B.dZ:B.bV,B.r,1)
r=A.aH(o,o,o,o,A.W(B.xW,n?B.aP:B.aA,o,o,o,20),o,o,o,new C.cuL(p),o,o,o,o,o,B.c7)
q=p.e
q===$&&A.c()
q=A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),q,o,o,o,o,o,2,D.bOL,B.y,!0,o,!0,o,!1,o,B.ah,o,o,o,o,o,B.dU,o,o,o,1,o,o,!1,"\u2022",o,new C.cuM(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a6(52,o,q,o),A.aH(o,o,o,o,A.W(B.hw,n?B.aP:B.aA,o,o,o,20),o,o,o,new C.cuN(p),o,o,o,o,o,B.c7)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.aw,A.D(A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),t,o,o,o,o,o,2,p.aw4(m,"Amount","0.00",B.hX),B.y,!0,o,!0,o,!1,o,B.ah,o,o,o,o,o,B.dU,o,o,o,1,o,o,!1,"\u2022",o,new C.cuO(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.B(new A.K(D.cRs,new C.cuP(p,m),t),t.k("ai.E"))
i=A.a([i,B.bv,v,B.ay,h,B.P,s,B.ac,A.c_(B.bD,u,B.bt,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.S,A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),h,o,o,o,o,o,2,p.c5K(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ah,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cuQ(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.kr,o,o,o,o)],w))}i.push(B.aO)
h=B.aU.j(n?0.18:0.1)
j=A.a([h,B.bT.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aU.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gIT()===B.k.jO(p.gIT())?B.k.O(p.gIT()):p.gIT()
s=p.gb15()
r=A.Af(p.gahL())
i.push(A.p(o,A.A(A.a([A.D(A.v(A.a([u,B.at,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bB9(p.gIT()*p.gahL(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a7(B.a3,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.j8,o,o,o))
i.push(B.bv)
j=A.m(14)
h=n?B.dZ:B.bV
h=A.de(o,o,o,o,o,o,o,o,o,o,o,o,B.cf,o,new A.b7(j,B.Y),new A.az(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.D(A.dT(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cuR(d),h),1),B.aw,A.D(A.dp(D.am0,D.flV,p.ga1h(),A.bk(B.aU,o,o,0,B.c,o,B.cf,o,new A.b7(A.m(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eE(o,l,new A.cU(V.a9F,A.cd(A.v(i,B.aj,o,B.e,B.Q,0,B.p),B.q,o,B.y,o,Ac.qI,o,o,B.ai),o),o,o,o,B.LB,B.d0,o,new A.b7(k,B.Y),o)}}
C.a03.prototype={
T(){return new C.btI()}}
C.btI.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aO()
u.d=new A.ar(new A.bb(w,B.b2,B.aN),v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.O(d).ax.a===B.H,q=r?B.dX:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.aA,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.aA,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jo:B.iL
v=A.aL(s,B.T,!0,s,!0,B.q,s,A.aM(),w,s,s,s,s,s,2,A.br(s,new A.b4(4,A.m(12),B.dg),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ah,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.f4j(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.am,s,s,s,s)
u=A.D(A.dT(B.de,new C.f4k(d),s),1)
r=A.bk(B.bT,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eE(s,q,new A.C(B.AJ,A.v(A.a([o,B.ay,v,B.aO,A.A(A.a([u,B.aw,A.D(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.f4l(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d0,s,new A.b7(p,B.Y),s)}}
C.aak.prototype={
a4(){return"WorksheetFrameStyle."+this.b}}
C.EZ.prototype={
T(){return new C.btG(null,null)}}
C.btG.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.bm4,null,1,null,v)
w.cH(0)
v.d!==$&&A.aO()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.buE()},
gbw3(){switch(this.a.r.a){case 1:return A.a([B.aU,B.bT,B.aZ],x.O)
case 2:return A.a([B.bs,B.aU,B.aZ],x.O)
case 3:return A.a([B.aW,B.c8,B.jH],x.O)
case 4:return A.a([B.hu,B.bT,B.f6],x.O)
case 0:return A.a([B.aU,B.bT,B.aZ],x.O)}},
B(d){var w=A.O(d),v=this.d
v===$&&A.c()
return new A.es(A.c6(v,new C.f4h(this,new C.tv(w.ax.a===B.H)),null),null)}}
C.avH.prototype={
T(){return new C.btH(null,null)}}
C.btH.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.mT,null,1,null,v)
w.cH(0)
v.d!==$&&A.aO()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.buF()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.f4i(this),null)}}
C.btF.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bz(new A.aa(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aV(w,w))
u=new A.aQ($.X().r,B.ap,null,null,A.a([],x.v))
u.E(new A.iT(v))
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
w=A.wL(u)
t=A.a([],x.f5)
w=new A.vh(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.ba(A.jQ('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.GR(w,r)
w.ji()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aPL(d,q,r,o,0,0.2,4.2,0.92)
p.aPL(d,q,r,s,0.52,0.11,3.2,0.58)}},
aPL(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.G(g+h,1)*f,s=A.hpk(e.a.a,e,t,t+f*i,!0),r=A.bzw(s.gbI().a.getBounds())
$.X()
w=A.M()
w.b=B.ae
w.c=j
w.d=B.bO
w.f=!0
v=this.f
u=k*this.e
w.sau(new A.a7(B.a3,B.a7,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Gy,null).aw(0,r))
d.aO(s,w)},
aq(d){return d.b!==this.b||d.d!==this.d}}
C.aLS.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.aLT.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.tv.prototype={}
C.aqZ.prototype={
T(){return new C.aDk()},
gdX(){return this.c}}
C.aDk.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.afs()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Kz(w,v)
this.a2()},
afs(){var w=0,v=A.j(x.H),u=this,t,s
var $async$afs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bzE(t.c,t.d.a),$async$afs)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eEi(u,s))
return A.h(null,v)}})
return A.i($async$afs,v)},
Pe(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Pe=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eE9(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Kz(t,s),$async$Pe)
case 2:if(u.c!=null)u.m(new C.eEa(u))
return A.h(null,v)}})
return A.i($async$Pe,v)},
PK(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.O(p)
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.eEg(t,new C.tv(p.ax.a===B.H)),s,null,!0,!0,x.T),$async$PK)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a7r(q),$async$PK)
case 6:case 5:t.m(new C.eEh(t,r))
w=7
return A.b(t.Pe(),$async$PK)
case 7:case 1:return A.h(u,v)}})
return A.i($async$PK,v)},
UQ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$UQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i1g(r),$async$UQ)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eE4(t,new C.qL(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Pe(),$async$UQ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$UQ,v)},
caL(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hhl(t,new C.eE8(u),w,v)},
a9F(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bP(new A.az(v,2.5,B.r,-1),B.Y,B.Y,new A.az(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.aVI,w,w,B.n),w,22,w,w,w,w,w,22)},
a8L(d){return this.bHR(d)},
bHR(d){var w=0,v=A.j(x.H),u=this
var $async$a8L=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eE7(u,d))
w=2
return A.b(u.Pe(),$async$a8L)
case 2:return A.h(null,v)}})
return A.i($async$a8L,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.O(a2).ax.a===B.H,e=f?B.bX:B.iI,d=A.m(8),a0=A.W(P.Zf,f?B.bq:B.bo,g,g,g,16),a1=x.p
a0=A.aK(!1,d,!0,new A.C(B.F1,A.A(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bo,g,g,g,g,g,g,g,g,g,g,g,B.a4,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eEj(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b_,B.q,A.a([A.bw(A.m(22),C.aOC(!0,A.m(22),1/0,B.px,g,d,1/0),B.aq),A.ao(10,A.dp(D.bHB,D.fo4,h.gb_3(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h3,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aU.j(f?0.5:0.38),B.eT,22),new A.ac(-4,B.G,B.bT.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bw(s,new A.an(B.W,g,B.b_,B.q,A.a([C.aOC(!0,A.m(16),1/0,B.Mm,g,r.c,1/0),A.bZ(g,new A.o(g,g,g,g,g,new A.a7(B.b0,B.b6,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bd),A.ao(g,h.a9F(!0),g,g,8,g,8,g),A.ao(g,A.csb(h.a9F(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.csb(h.a9F(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.csb(h.a9F(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dp(D.bDD,D.fi2,h.gb_3(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h3,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bQ7,B.n),g,g,g,g,B.lC,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aA,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b51,B.nv,B.h1],u):A.a([B.aZ,B.aU,B.bT],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aU.j(f?0.45:0.35),B.eT,24)],t)
r=A.m(22)
p=A.ao(g,A.W(B.ju,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h2,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.ay,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.ao,C.bB9(h.d.gwC(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cs,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.D(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.hf.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aW.j(0.28),B.cJ,14)],t)
j=B.aW.j(0.22)
i=A.m(10)
u=A.p(g,A.bw(r,new A.an(B.W,g,B.aa,B.q,A.a([p,new A.C(D.bqI,A.A(A.a([o,B.aw,A.aF(!1,B.a1,!0,g,A.aK(!1,n,!0,A.ex(new A.C(Ah.EO,A.v(A.a([A.p(g,D.alA,B.f,g,g,new A.o(j,g,A.I(B.aW.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cj,g,g,g),B.fW,D.f7x],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcaK(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.af)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a7(B.ax,B.aD,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fG(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bv,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aA,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b3,A.dp(Ak.a_X,D.f5u,h.gbww(),A.bk(B.aU,g,g,g,B.c,g,B.iO,g,new A.b7(A.m(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.dX:B.c
v=A.m(14)
u=A.I(f?B.dZ:B.bV,B.r,1)
t=A.W(B.ZA,f?B.bq:B.bo,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aA,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.S,s,B.ao,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bo,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.tq,g,g,1/0))}else B.d.v(d,new A.K(w,new C.eEk(h,new C.tv(f)),A.T(w).k("K<1,r>")))
if(h.e)d.push(new A.C(B.Ay,A.av(A.mD(g,f?B.bq:B.bo,g,g,g,g,g,g,g,g),g,g,g),g))
return A.cb(g,e,A.bn(!0,A.v(A.a([new A.C(B.AC,a0,g),A.D(A.cd(A.v(d,B.F,g,B.e,B.j,0,B.p),B.q,g,B.y,g,E.xl,g,g,B.ai),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bA8(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dX:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.aYt,u,u,u,u,u,u,u,5),l=B.aU.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.W(s?B.hJ:B.h5,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bH
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aP:B.aA,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcPo()
v=A.Af(d.d)
B.d.v(t,A.a([B.at,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bq:B.bo,u,u,u,u,u,u,u,u,12,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.ba,B.Q,0,B.p)}t=A.D(t,1)
k=A.a([B.aU.j(0.14),B.bT.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bB9(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a7(B.a3,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.h3,u,u,u)
w=x.p
return A.p(u,A.bw(n,new A.Dw(A.A(A.a([m,A.D(new A.C(B.afG,A.A(A.a([l,B.bf,t,B.ab,k,A.aH(u,u,u,u,A.W(B.cy,(r?B.bq:B.bo).j(0.75),u,u,u,20),u,u,u,new C.eE5(this,d),u,u,u,u,u,B.c7)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.aj,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.aXl,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.dc,u,u,u,u)}}
C.ack.prototype={
DW(d){return this.bJc(d)},
bJc(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$DW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oW(d,o,!1),$async$DW)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).N(null)
w=4
return A.b(A.bN(Ab.Aw,null,x.H),$async$DW)
case 4:s=t.d
w=5
return A.b(C.fAn(!0,o,s),$async$DW)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.FT(r,"ngmy_project_"+A.aJ(s.b,q,"_"),!1),$async$DW)
case 6:p=f
w=7
return A.b(A.oV(o,!1),$async$DW)
case 7:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$DW,v)},
Zf(d){return this.cqH(d)},
cqH(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Zf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oW(d,s,!1),$async$Zf)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).N(null)
A.hv(d,new C.aqT(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oV(s,!1),$async$Zf)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zf,v)},
Pf(d){return this.cmT(d)},
cmT(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Pf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).N(null)
w=3
return A.b(A.hv(d,D.aEs,!0,"NgmyWorksheetProjectScan",x.N),$async$Pf)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bBa(s),$async$Pf)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.R(D.eNK)
w=1
break}q=C.fV1(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dP(p,x.H),$async$Pf)
case 5:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Pf,v)},
Zg(d){return this.cyz(d)},
cyz(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Zg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).N(null)
w=3
return A.b(C.bAI(),$async$Zg)
case 3:s=f
if(s==null){w=1
break}r=C.fV1(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dP(q,x.H),$async$Zg)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Zg,v)},
B(d){var w=this,v=null,u=A.O(d).ax.a===B.H,t=new C.tv(u),s=w.d.d.length,r=u?B.dX:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.jX,36)],x.V),o=x.p
return A.bn(!0,new A.C(B.v2,A.p(v,A.v(A.a([w.cpj(d,t,s),new A.C(D.bq6,A.v(A.a([w.b2_(t,"QR restore"),B.S,A.A(A.a([w.aY1(t,!0,B.jd,B.aW,B.aW,new C.eEm(w,d),"Show to scan","QR code"),B.aw,w.aw5(t,B.iQ,B.b4,B.by,new C.eEn(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d5,w.b2_(t,"Backup files"),B.S,A.A(A.a([w.aw5(t,B.hy,B.aU,B.bT,new C.eEo(w,d),"Full copy","Backup file"),B.aw,w.aw5(t,M.y2,B.aI,B.aM,new C.eEp(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cpj(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eX,B.cY,B.fu],k):A.a([B.aZ,B.aU,B.bT],k)
w=A.ao(l,A.W(B.tJ,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kE,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aOC(!0,A.m(13),64,D.byW,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aOO,l,l,l)
r=C.bB9(r.gwC(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.q,A.a([w,new A.C(D.bqu,A.v(A.a([v,A.A(A.a([s,B.eB,A.D(A.v(A.a([u,B.at,t,B.P,A.A(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fI,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.W(B.cy,B.c.j(0.85),l,l,l,l),l,l,l,new C.eEl(d),l,l,l,A.nq(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aM9,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.ax,B.aD,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b2_(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aU,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bq:B.bo,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aY1(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.aen:B.aP
if(e)w=B.aW.j(o?0.45:0.35)
else{w=o?B.dZ:B.bV
w=w.j(o?0.8:1)}w=A.I(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aW.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.r,1)
t=A.p(r,A.W(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qJ,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.aA,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.D(A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.ex(new A.C(E.XE,A.v(A.a([t,B.ac,u,B.bA,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bq:B.bo,r,r,r,r,r,r,r,r,11,r,r,B.cs,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.af),1)},
aw5(d,e,f,g,h,i,j){return this.aY1(d,!1,e,f,g,h,i,j)}}
C.aqT.prototype={
T(){return new C.bj4()}}
C.bj4.prototype={
a_(){this.a1()
this.adm()},
adm(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$adm=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bBb(p.c,p.d),$async$adm)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eE_(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eE0(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adm,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.O(d).ax.a===B.H,f=g?B.A2:B.iI,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.W(B.eA,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eE1(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.D(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.z6],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eX,B.cY,B.fu],s):A.a([B.aZ,B.aU,B.bT],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aU.j(g?0.4:0.3),B.eT,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.du,B.L,h,h)
p=C.bB9(p.gwC(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.ao,A.A(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fI,h,h,h)],u),B.m,h,B.ba,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a7(B.ax,B.aD,B.x,s,h,h),B.n),h,h,h,h,E.XZ,h,h,1/0)
t=g?D.be2:B.c
q=A.m(24)
p=A.I(w?B.aW.j(0.4):B.aU.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dk,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a6u,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.e1S)
else{m=A.m(20)
l=A.I(B.aL,B.r,1)
o.push(A.p(h,A.pB(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bW,h,h,h))}}o.push(B.aO)
n=w?B.aW:B.aU
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aW:B.aU).j(0.35),B.r,1)
k=w?B.ME:B.N9
k=A.W(k,w?B.aW:B.aU,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.aw,A.D(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a4,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iO,h,h,h))
return A.cb(h,f,A.bn(!0,A.v(A.a([new A.C(A6.LO,e,h),A.D(A.cd(A.v(A.a([s,B.aO,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tp,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.q,h,B.y,h,E.agP,h,h,B.ai),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.aqY.prototype={
T(){return new C.aDj(A.yM(B.L5,B.np,B.tO))}}
C.aDj.prototype={
q(){this.d.q()
this.a2()},
aKt(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iL(w,d)},
c6A(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.i_g(t)
if(s!=null){this.aKt(s)
return}r=C.h8o(t)
if(r!=null)q=A.dr(r,p,0)
else q=!1
if(q){this.aKt(B.a.i(B.a.b0(r,B.a.cJ(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eD(A.a([A.aH(t,t,t,t,A.W(u.f?B.qP:A1.MK,t,t,t,t,t),t,t,t,new C.eE3(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.A2,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fhW,t,t,t,1,t,!0),q=A.yL(u.d,B.bQ,u.gc6z()),p=A.m(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aU,B.r,3),p,A.a([new A.ac(2,B.G,B.aU.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.cb(r,B.w,new A.an(B.W,t,B.b_,B.q,A.a([q,p,A.ao(32,A.p(t,D.fgL,B.f,t,t,new A.o(w,t,A.I(B.aU.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.j8,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aI4.prototype={
a4(){return"_WorksheetTab."+this.b}}
C.Nk.prototype={
T(){return new C.aDl(D.a8A,A.a([],x.D))},
bp(){return this.r.$0()},
gdX(){return this.c}}
C.aDl.prototype={
gcwy(){return J.bCk(this.e,0,new C.eEM())},
a_(){this.a1()
$.aT.c1$.push(this)
this.vm()},
q(){$.aT.hD(this)
this.a2()},
iQ(d){if(d===B.fs)this.vm()},
vm(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vm=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Co(q.a.c).cM(0,B.jN),$async$vm)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eEI(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eEJ(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vm,v)},
Hn(d){return this.bG1(d)},
bG0(){return this.Hn(null)},
bG1(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Hn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i1i(l,d),$async$Hn)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.ld(l,r,q,D.d0O,new A.S(Date.now(),0,!1))
w=4
return A.b(C.Kz(t.a.c,p),$async$Hn)
case 4:o=f
w=5
return A.b(t.vm(),$async$Hn)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.R(D.eKV)
w=1
break}n=J.aX(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gU(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.R(D.eME)
else n.I(q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.E_(m)
case 1:return A.h(u,v)}})
return A.i($async$Hn,v)},
E_(d){return this.caw(d)},
caw(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$E_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hv(s,new C.aqZ(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$E_)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Kz(u.a.c,t),$async$E_)
case 5:case 4:w=6
return A.b(u.vm(),$async$E_)
case 6:return A.h(null,v)}})
return A.i($async$E_,v)},
v9(d){return this.bVz(d)},
bVz(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$v9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bAI(),$async$v9)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hv(r,D.aEs,!0,"NgmyWorksheetProjectScan",x.N),$async$v9)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bBa(q),$async$v9)
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
r.R(A.b2(null,null,null,null,null,B.q,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.fV1(s)
w=15
return A.b(C.Kz(t.a.c,p),$async$v9)
case 15:o=f
w=16
return A.b(t.vm(),$async$v9)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.R(D.eMJ)
w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.E_(p)
case 1:return A.h(u,v)}})
return A.i($async$v9,v)},
N5(d){return this.bEH(d)},
bEH(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$N5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.c9(null,null,!0,null,new C.eEt(d),s,null,!0,!0,x.y),$async$N5)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.ov(t.a.c,A.a([],x.D)),$async$N5)
case 6:w=7
return A.b(t.vm(),$async$N5)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eL_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$N5,v)},
caJ(d){var w=this.c
w.toString
A.bW(B.K,null,new C.eEC(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b2B(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jo
else w=B.c
v=A.m(16)
u=A.I(p?B.dZ:B.bV,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.W(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bR,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.aA,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(r,A.v(A.a([s,B.ac,t,B.bA,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bq:B.bo,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.v1,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.af)},
ZL(d,e){return this.cax(d,e)},
cax(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bW(B.K,null,new C.eEx(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$ZL)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hhl(r,new C.eEy(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.N7(d,e),$async$ZL)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$ZL,v)},
b_F(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.W(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bR,u,u,u)
if(d)t=B.aB
else t=h.a?B.aP:B.aA
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.D(A.v(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bq:B.bo,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,u,!0,new A.C(B.AI,A.A(A.a([s,B.bf,t,A.W(B.eu,w?B.bq:B.bo,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.af)},
chl(d,e,f,g,h,i){return this.b_F(!1,d,e,f,g,h,i)},
N7(d,e){return this.bER(d,e)},
bER(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$N7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.kY(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$N7)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bzq(t.a.c,d.a),$async$N7)
case 6:w=7
return A.b(t.vm(),$async$N7)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$N7,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.O(d).ax.a===B.H,n=new C.tv(o),m=o?B.bX:B.iI
if(q.f)o=D.b31
else{w=q.bzk(n)
v=q.bUG(n)
u=q.gbwq()
if(o)t=B.jo
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aO,new C.EZ(A.p(p,A.A(A.a([q.azw(N.Ml,"Projects",n,D.a8A),q.azw(B.vd,"Cashier",n,D.aTa),q.azw(B.Fl,"Family Tree",n,D.fOJ)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.en,0.95,u,p),B.bv],r)
w=q.d
if(w===D.a8A){w=J.ad(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.aA,p,p,p,p,p,p,p,p,16,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b3,new C.avH(q.gaOC(),p)],r),B.m,p,B.e,B.j,0,p,p),B.ay,q.chn(n)],r))}else{o=q.a
if(w===D.aTa)u.push(new C.an_(o.c,n,p))
else{w=q.r
u.push(new C.ao5(o.c,o.d,o.e,o.f,new C.eEP(q),new C.eEQ(q),new A.cw(w,x.b4)))}}o=A.cd(A.v(u,B.F,p,B.e,B.j,0,B.p),B.q,p,B.y,p,Ad.LH,p,p,B.ai)}return A.cb(p,m,A.bn(!0,o,!0,!1,B.ag,!0,!0),p,!1,!1,p,p)},
bzk(d){var w=null,v=A.m(8),u=d.a,t=A.W(P.Zf,u?B.bq:B.bo,w,w,w,16)
return A.aK(!1,v,!0,new A.C(B.kF,A.A(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bq:B.bo,w,w,w,w,w,w,w,w,14,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eEq(this),w,w,w,w,w,w,w)},
gbwq(){switch(this.d.a){case 0:return D.a7S
case 1:return D.fFu
case 2:return D.a7T}},
bUG(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aU.j(0.35),B.cx,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.bJm,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bf,D.buH,A.aF(!1,B.a1,!0,w,A.aK(!1,A.m(12),!0,A.p(w,D.bGV,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eEu(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.af)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.m(12)
return new C.EZ(A.p(w,A.v(A.a([new A.C(E.XK,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.d(A.Af(this.gcwy()),w,w,w,w,w,w,D.f1Z,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.v0,B.j8,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aU,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.fFt,w)},
azw(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aU:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.r,2):A.I(B.K,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aU.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bq:B.bo
w=A.W(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bq:B.bo
return A.D(A.aF(!1,B.a1,!0,u,A.aK(!1,s,!0,A.dg(u,A.A(A.a([w,B.ea,new A.dm(1,B.ci,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.ba,B.j,0,u,u),u,u,B.cq,new A.o(r,u,p,q,o,u,B.n),B.it,u,u,u,B.LK,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eEL(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.af),1)},
chn(d){var w,v,u,t,s,r,q=this,p=null
if(J.ck(q.e)){w=d.a
v=w?B.dX:B.c
u=A.m(15)
t=A.p(p,D.bH_,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aU.j(0.5),B.eT,28)],x.V),D.bSw,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.aA,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.EZ(A.p(p,A.v(A.a([t,B.d5,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bo,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.e0,A.A(A.a([A.D(q.aQ5(B.iQ,"Scan QR",new C.eEF(q),d),1),B.aw,A.D(q.aQ5(M.y2,"Upload file",new C.eEG(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.ay,A.bJ(D.frC,q.gaOC(),A.bk(B.aU,p,p,p,B.c,B.fL,p,p,new A.b7(A.m(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bry,1.05,D.a7S,p)}w=J.b6(q.e,new C.eEH(q,d),x.l)
w=A.B(w,w.$ti.k("ai.E"))
return new C.EZ(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bR,1,D.a7S,p)},
aQ5(d,e,f,g){var w=null,v=B.aU.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aU.j(0.45),B.r,1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(w,A.v(A.a([A.W(d,B.aZ,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.f0q,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.afA,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.af)},
chm(d,e){var w,v,u=null,t=e.a,s=t?B.dX:B.c,r=A.m(14),q=A.I(t?B.dZ:B.bV,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.ej,10)],x.V),o=A.m(14),n=t?B.bq:B.bo
n=A.bw(B.Ut,new A.fG(1.7777777777777777,C.aOC(!0,B.ft,1/0,N.Ml,n,d.c,1/0),u),B.aq)
w=x.p
v=A.D(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.aA,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.d(""+d.d.length+" budget items \xb7 "+A.Af(d.gwC()),u,u,u,u,u,u,D.eZA,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aF(!1,B.a1,!0,u,A.aK(!1,o,!0,A.v(A.a([n,new A.C(B.bB,A.A(A.a([v,A.aH(u,u,u,u,A.W(Af.MY,t?B.bq:B.bo,u,u,u,u),u,u,u,new C.eED(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eEE(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.af),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e3,u,u,u,1/0)}}
C.bvt.prototype={}
C.qL.prototype={
ae(){var w=this,v=w.c,u=w.d
return A.E(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcPo(){var w,v,u,t,s=this.c
if(s===B.k.jO(s))w=B.o.u(B.k.O(s))
else{v=B.k.aa(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aJ(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.ld.prototype={
gwC(){return B.d.cI(this.d,0,new C.cu5())},
ae(){var w=this,v=w.d,u=A.T(v).k("K<1,a4<n,@>>")
v=A.B(new A.K(v,new C.cu4(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
b9x(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.ld(w.a,w.b,v,u,w.e)},
b9e(d){return this.b9x(d,null)},
RX(d){return this.b9x(null,d)}}
C.H_.prototype={
a4(){return"FamilyGender."+this.b}}
C.hV.prototype={
ae(){var w=this
return A.E(["id",w.a,"name",w.b,"gender",C.hdb(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aC8(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hV(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ajm.prototype={
a4(){return"FamilyTreeAccessRole."+this.b}}
C.kw.prototype={
gan8(){var w=this.f
return new A.a2(w,new C.bLG(),A.T(w).k("a2<1>")).gM(0)},
ae(){var w=this,v=w.f,u=A.T(v).k("K<1,a4<n,@>>")
v=A.B(new A.K(v,new C.bLF(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hSJ(w.y)],x.N,x.z)},
yf(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kw(w.a,v,u,t,s,r,w.r,q,p,o)},
b9w(d,e){var w=null
return this.yf(w,w,d,e,w,w,w,w)},
cFc(d,e,f,g,h,i,j){return this.yf(d,e,f,g,h,i,j,null)},
aCd(d,e){var w=null
return this.yf(w,w,w,d,w,w,e,w)},
cDH(d){var w=null
return this.yf(w,w,w,w,w,w,d,w)},
cE4(d){var w=null
return this.yf(w,w,w,w,w,w,w,d)},
aC_(d){var w=null
return this.yf(w,w,w,w,d,w,w,w)},
cEJ(d,e,f){var w=null
return this.yf(w,d,w,e,w,w,f,w)},
cDu(d){var w=null
return this.yf(w,w,d,w,w,w,w,w)},
cEh(d,e){var w=null
return this.yf(d,w,w,w,w,e,w,w)}}
C.cu6.prototype={
a4(){return"WrapAlignment."+this.b}}
C.cu7.prototype={
a4(){return"WrapCrossAlignment."+this.b}}
C.aFn.prototype={}
C.b6P.prototype={
bx(d){this.a=d.a
this.b=d.b},
dr(d){var w=new C.b6P()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b6O.prototype={
gvW(){return!0},
gFs(){return this.z.b<this.b.length},
aRH(d){switch(0){case 0:return d.a.c}},
aRo(d){switch(0){case 0:return d.a.d}},
bOc(d,e){switch(0){case 0:return new A.hG(d,e)}},
bNB(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
fZ(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iB(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.GK(b4)
switch(0){case 0:v=b5.b
u=new A.kt(0,v,0,1/0)
t=w===B.So
break}s=A.a([],x.gZ)
r=A.V(x.cM,x.S)
for(b3=b1.z,q=B.d.fI(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.L)(q),++h){g=q[h]
g.fZ(b4,u,!0)
f=b1.aRH(g)
f.toString
e=b1.aRo(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aFn(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aFn(k,j,i))}d=s.length
switch(0){case 0:q=b5.cu(new A.hG(m,l))
a0=q.a
a1=q.b
b1.a=new A.iB(0,0,a0,a1)
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
for(q=B.d.fI(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.L)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aRH(g)
e=b1.aRo(g)
e.toString
a9=b1.bNB(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bOc(a6,a3+a9)
b0=g.a
g.a=new A.iB(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fW(d){var w,v,u,t,s,r=this
r.l8(d)
w=d.b
w.i_()
v=A.dl()
u=r.a
v.e2(u.a,u.b,0,1)
w.oE(0,v)
for(u=r.z,u=B.d.dn(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].fW(d)
w.n5(0)},
FY(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
i_(){return this.z}}
C.btJ.prototype={}
var z=a.updateTypes(["ay<~>()","R(hV)","R(kw)","~()","R(n4)","a4<n,@>(kw)","G(kw,kw)","n(hV)","kw(a4<@,@>)","R(ld)","R(u_)","n4(a4<@,@>)","u_()","G(ld,ld)","hV(a4<@,@>)","a4<n,@>(hV)","R(qL)","ay<~>(ld)","eO<n?>(hV)","G(hV,hV)","n?(hV)","a4<n,@>(n4)","Z0(Y)","n(n)","ac_(Y)","r(o6)","G(n4,n4)","hV(hV)","cK(bu<n,Fb>)","cK(Jn)","~(hV)","G?(hV)","hV()","ak<hV>()","R(tZ)","R(Jn)","C(hV)","~(H_)","R(adw)","r(H_,n,a0)","Yp(Y)","bu<n,ak<a4<n,@>>>(n,ak<n4>)","~(G)","+count,id,name(G,n,n)(kw)","kw(kw)","Zl(Y)","Zm(Y)","R(lu)","lu()","n(kw)","a03(Y)","Y_(Y)","XZ(Y)","Yn(Y)","Yr(Y)","r(qL)","ack(Y)","~(lR)","ay<~>([n?])","N(N,ld)","r(ld)","N(N,qL)","a4<n,@>(qL)","qL(a4<@,@>)","XY(Y)","RQ(Y)","cn(GZ)","ld(a4<@,@>)","tZ()","n(ld)","a4<n,@>(ld)","n(S)","G(hV)","kw(a4<n,@>)","Xx(Y)"])
C.ft1.prototype={
$1(d){return d.a+" "+d.b},
$S:117}
C.ft0.prototype={
biA(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qD(s,d,B.hk,E.EG),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.U(r!=null&&A.Km(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.biA(d)},
$S:321}
C.ft2.prototype={
$1(d){return d.b},
$S:117}
C.fC7.prototype={
$1(d){var w=null
return A.eE(w,B.K,new F.OE(this.a,this.b,w),w,w,0,B.XF,B.d0,w,w,w)},
$S:46}
C.fik.prototype={
$1(d){return d!=null},
$S:218}
C.fil.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:218}
C.fiq.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:171}
C.fqL.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.f7(d,w,w,w,A.h2(w,B.rd,w,w,w,w,w,w,w,B.dr,w,w,10.5,w,B.ei,w,!0,w,w,w,w),w),u=f?B.ei:B.v8
return new A.nB(D.bn8,A.a8D(A.a([new A.fO(130,w,v),new A.yu(1,B.Fe,A.f7(e,w,w,w,A.h2(w,g==null?D.e48:g,w,w,w,w,w,w,w,B.dr,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.x1,B.lf))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1895}
C.fqK.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.v9(999)
f=A.wE(A.lp(h,A.f7("Cashier",h,h,h,A.h2(h,D.yU,h,h,h,h,h,h,h,B.dr,h,h,10,h,B.ei,h,!0,h,h,h,h),h),h,new A.ku(D.e4_,h,f,B.hB,h),h,h,D.bnC,h))
w=A.wE(A.f7("Debt receipt",h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.dr,h,h,22,h,B.ei,h,!0,h,h,h,h),h))
v=A.wE(A.f7(C.wo(new A.S(Date.now(),0,!1),!0),h,h,h,D.a6B,h))
u=A.v9(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.f7(s,h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.dr,h,h,14,h,B.ei,h,!0,h,h,h,h),h)
r=A.f7("Person who owes",h,h,h,D.a6B,h)
q=A.v9(10)
p=x.C
u=A.lp(h,A.yp(A.a([s,new A.fO(h,2,h),r,new A.fO(h,10,h),A.lp(h,A.yp(A.a([A.f7("Amount owed",h,h,h,D.a6B,h),new A.fO(h,2,h),A.f7(A.Af(t.c),h,h,h,A.h2(h,D.yU,h,h,h,h,h,h,h,B.dr,h,h,20,h,B.ei,h,!0,h,h,h,h),h)],p),B.qC,B.lf),h,new A.ku(B.oO,h,q,B.hB,h),h,h,D.bmP,1/0)],p),B.qC,B.lf),h,new A.ku(E.aFH,h,u,B.hB,h),h,h,D.boG,1/0)
q=new A.nk(D.e42,0.9,B.kx)
r=A.v9(12)
s=i.c
o=s.$2("Original due",C.wo(t.r,!1))
n=s.$2("Current due",C.wo(t.f,!1))
m=i.d
l=new A.nk(m,1.1,B.kx)
k=A.v9(8)
j=i.a
k=A.a([o,n,new A.fO(h,6,h),A.lp(h,A.wE(A.f7(t.gaJ_(),h,h,h,A.h2(h,m,h,h,h,h,h,h,h,B.dr,h,h,11,h,B.ei,h,!0,0.5,h,h,h),h)),h,new A.ku(h,new A.pm(l,l,l,l),k,B.hB,h),h,h,D.bnK,1/0),new A.fO(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.yU))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.yU))
else{n=A.f7("Missed days ("+n+")",h,h,h,A.h2(h,B.rd,h,h,h,h,h,h,h,B.dr,h,h,10.5,h,B.ei,h,!0,h,h,h,h),h)
m=A.T(o).k("K<1,Rp>")
o=A.B(new A.K(o,new C.fqJ(),m),m.k("ai.E"))
B.d.v(k,A.a([new A.fO(h,4,h),n,new A.fO(h,6,h),new C.b6O(5,5,new C.b6P(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fO(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fO(h,8,h),w,new A.fO(h,3,h),v,new A.fO(h,16,h),u,new A.fO(h,10,h),A.lp(h,A.yp(k,B.x1,B.lf),h,new A.ku(h,new A.pm(q,q,q,q),r,B.hB,h),h,h,B.afK,1/0)],p)
w=j.a
if(w!=null){v=new A.nk(B.HH,1,B.kx)
B.d.v(f,A.a([new A.fO(h,16,h),A.f7("Debtor signature",h,h,h,A.h2(h,B.rd,h,h,h,h,h,h,h,B.dr,h,h,10,h,B.ei,h,!0,h,h,h,h),h),new A.fO(h,6,h),A.lp(h,new A.Hd(w,B.UD,h,h),h,new A.ku(h,new A.pm(v,v,v,v),A.v9(6),B.hB,h),82,h,B.LM,1/0)],p))}f.push(new A.fO(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.f7(w,h,h,h,D.eSB,h))
f.push(new A.fO(h,18,h))
f.push(A.wE(A.f7("NGMY.ORG",h,h,h,A.h2(h,D.yU,h,h,h,h,h,h,h,B.dr,h,h,14,h,B.ei,h,!0,1.8,h,h,h),h)))
return f},
$S:451}
C.fqJ.prototype={
$1(d){var w=null,v=new A.nk(D.HI,0.7,B.kx),u=A.v9(999)
return A.lp(w,A.f7(C.wo(d,!1),w,w,w,A.h2(w,D.HI,w,w,w,w,w,w,w,B.dr,w,w,9.5,w,B.ei,w,!0,w,w,w,w),w),w,new A.ku(w,new A.pm(v,v,v,v),u,B.hB,w),w,w,D.bsU,w)},
$S:1896}
C.c_w.prototype={
$1(d){var w=null,v=B.bL.j(0.08),u=A.m(999),t=A.I(B.bL.j(0.28),B.r,1)
return A.p(w,A.d(C.wo(d,!1),w,w,w,w,w,w,D.eZ5,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eF,w,w,w)},
$S:1897}
C.fCD.prototype={
$1(d){var w=null,v=A.aI(d,B.bS,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bKe,w,w,w,new C.fCA(d),w,w,w,w,w,B.c7),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eE(w,B.K,new A.cU(new A.aY(0,380,0,v.a.b*0.9),A.aF(!1,B.a1,!0,u,new A.C(B.Xu,A.v(A.a([new A.bI(B.a7,w,w,t,w),new A.dm(1,B.ci,A.cd(A.v(A.a([new A.es(new C.aWW(r,w),s),B.S,A.A(A.a([A.D(A.ez(B.yd,D.fo0,new C.fCB(s,r,d),A.de(w,w,w,w,w,w,w,w,w,B.c,w,w,B.eZ,w,new A.b7(A.m(14),B.Y),new A.az(q,1,B.r,-1),w,w,w,w)),1),B.ab,A.D(A.dp(B.a_N,D.fkK,new C.fCC(r,d),A.bk(B.aZ,w,w,w,B.c,w,B.eZ,w,new A.b7(A.m(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.q,w,B.y,w,w,w,w,B.ai),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.aA,0,w,w,w,w,w,B.af),w),w,w,0,Ai.XS,B.d0,w,w,w)},
$S:46}
C.fCA.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fCB.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aT.ak$.x.h(0,t.a)
m=m==null?null:m.gb7()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lP(2.5),$async$$0)
case 4:w=3
return A.b(e.ho(B.fT),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.fa(B.dG.gaP(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aJ(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.rF(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fCC.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fxl(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.R(A.b2(null,null,null,null,null,B.q,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fCv.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eE(w,B.aA,A.v(A.a([new A.C(D.bou,A.A(A.a([A.D(A.d(this.a,w,w,w,w,w,w,B.nh,w,w,w),1),A.aH(w,w,w,w,B.ld,w,w,w,new C.fCt(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dm(1,B.ci,new A.C(B.fQ,A.bw(A.m(14),A.fL(t,B.A,w,w,B.cm,B.dt,!1,w,!1,w,w),B.aq),w),w),new A.C(B.Lq,new A.a6(1/0,w,A.dp(B.oD,D.aPd,new C.fCu(t,this.c,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.LC,B.d0,w,new A.b7(v,B.Y),w)},
$S:46}
C.fCt.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fCu.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rF(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fCH.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eE(w,B.aA,new A.C(D.boC,A.v(A.a([A.A(A.a([D.btV,A.aH(w,w,w,w,B.ld,w,w,w,new C.fCF(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.es(A.bw(A.m(14),A.p(w,A.b3(w,w,w,new C.b8Y(s.ax,w),B.au),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a6(1/0,w,A.dp(B.oD,D.aPd,new C.fCG(t,s,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(v,B.Y),w)},
$S:46}
C.fCF.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fCG.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aT.ak$.x.h(0,t.a)
n=n==null?null:n.gb7()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lP(2.5),$async$$0)
case 4:w=3
return A.b(e.ho(B.fT),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aJ(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.fa(B.dG.gaP(s))
w=5
return A.b(A.rF(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.flO.prototype={
$1(d){return d.a===this.a},
$S:258}
C.dD1.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dCN.prototype={
bhN(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dX:B.c
s=u.a
w=2
return A.b(A.bW(t,null,new C.dCQ(s,q,e),p,!0,!0,!1,B.HX,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dCR(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bhN(d,e)},
$S:1898}
C.dCQ.prototype={
$1(d){var w,v=null,u=this.c===B.vI,t=u?D.d6B:D.d2X
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.aA,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bn(!0,new A.C(K.agj,A.v(A.a([u,B.at,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bq:B.bo,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.ic(!0,v,v,B.y,L.aMr,new C.dCP(this.a,w,t,d),t.length,v,B.dQ,B.ai,!0)],x.p),B.aj,v,B.e,B.Q,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:27}
C.dCP.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cY.j(0.14)
else w=t.b.a.d.a?B.M:B.aP
v=A.m(14)
if(q)u=B.cY
else u=(t.b.a.d.a?B.bq:B.bo).j(0.16)
u=A.I(u,B.r,q?1.6:1)
return A.aK(!1,p,!0,A.p(B.A,C.aWV(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dCO(t.d,r),s,s,s,s,s,s,s)},
$S:191}
C.dCO.prototype={
$0(){A.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.dCR.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dCL.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:90}
C.dCM.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cI(B.cq,e,v)
return new A.cX(e,!1,A.ih(B.A,A.av(A.aF(!1,B.a1,!0,v,new A.e2(new C.dCK(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.af),v,v,v),v,new A.bf(t,new A.bm(0.96,1,u),u.k("bf<bH.T>"))),v)},
$S:31}
C.dCK.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bS,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dX:B.c,f=A.m(14),e=A.I((h?B.bq:B.bo).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.D(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aK(!1,v,!0,new A.C(B.en,A.W(B.cy,i.a.d.a?B.bq:B.bo,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dCv(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aQC("Name")
r=l.a
q=r.d==null?k:new C.dCw(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bl:B.lw
n=A.I(B.cY.j(0.35),B.r,1)
m=r.d
t=A.aL(k,B.T,h,k,!0,B.q,k,A.aM(),w,k,k,k,k,k,2,s.b9p(new A.C(B.fx,A.aK(!1,p,!0,A.p(B.A,C.aWV(m==null?"\ud83d\udc64":A.frz(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cj,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ah,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.kr,k,B.a6l,k,k)
v=A.a([v,B.ac,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bo,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.ao,A.A(A.a([A.D(i.aRe("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dCx(r,a0),r.d===B.vI),1),B.ab,A.D(i.aRe("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dCC(r,a0),r.d===B.a3j),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bI(B.a3,k,k,A.hc(D.bID,D.fms,new C.dCD(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cY,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c7)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.u2(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aL(k,B.T,!1,k,!0,B.q,k,A.aM(),l.f,k,k,k,k,k,2,i.aQD("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ah,k,k,s,k,k,B.dU,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.M:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.bq:B.bo).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wo(r.a,!1)
v.push(A.aF(!1,B.a1,!0,q,A.aK(!1,p,!0,A.p(k,A.A(A.a([A.D(A.v(A.a([t,B.bA,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bFv],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bm,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dCE(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.af))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aL(k,B.T,!1,k,!0,B.q,k,A.aM(),l.r,k,k,k,k,k,2,i.aQC("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ah,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aZ0(r.b.length!==0,B.md,new C.dCF(r,i,a0),new C.dCG(r,a0),"Upload from gallery","ID photo"))
v.push(i.aZ0(r.c.length!==0,D.byU,new C.dCH(r,i,d,a0),new C.dCI(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ag.a6y("Signature (optional)",t,new C.dCJ(a0),new C.dCy(a0,t),new C.dCz(d,t,a0),k))
v.push(B.ay)
i=i.a.d.a
t=i?B.bq:B.bo
s=(i?B.bq:B.bo).j(0.28)
s=A.D(A.dT(E.aP6,new C.dCA(d),A.de(k,k,k,k,k,k,k,k,k,t,k,k,B.uW,k,new A.b7(A.m(10),B.Y),new A.az(s,1,B.r,-1),k,k,k,k)),1)
t=A.bk(B.cY,k,k,k,B.c,k,B.uW,k,new A.b7(A.m(10),B.Y),k,k,k)
v.push(A.A(A.a([s,B.ab,A.D(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.uk,k,k,k),new C.dCB(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cd(A.v(v,B.aj,k,B.e,B.Q,0,B.p),B.q,k,B.y,k,k,k,k,B.ai),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.v4,B.j8,k,k,360)},
$S:180}
C.dCv.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dCw.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dCx.prototype={
$0(){return this.b.$1(new C.dCu(this.a))},
$S:0}
C.dCu.prototype={
$0(){var w=this.a
w.d=B.vI
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dCC.prototype={
$0(){return this.b.$1(new C.dCt(this.a))},
$S:0}
C.dCt.prototype={
$0(){var w=this.a
w.d=B.a3j
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dCD.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dCE.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.ws(null,u.b,A.c0(2020,1,1,0,0,0,0,0),null,s,A.c0(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dCs(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dCs.prototype={
$0(){var w=this.b
return this.a.a=A.c0(w.gcg(),w.gcc(),w.gcs(),0,0,0,0,0)},
$S:0}
C.dCF.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.OD(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dCr(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dCr.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dCG.prototype={
$0(){return this.b.$1(new C.dCq(this.a))},
$S:0}
C.dCq.prototype={
$0(){return this.a.b=""},
$S:0}
C.dCH.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dX:B.c
w=3
return A.b(A.bW(q,null,new C.dCo(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.OD(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dCp(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dCo.prototype={
$1(d){var w=null
return A.bn(!0,A.v(A.a([A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.alr,w,w,w,w,new C.dCi(d),!1,w,w,w,w,w,w,w,D.fde,w,w,w),A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.alp,w,w,w,w,new C.dCj(d),!1,w,w,w,w,w,w,w,D.fjO,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.ag,!0,!0)},
$S:27}
C.dCi.prototype={
$0(){A.a5(this.a,!1).N("camera")
return null},
$S:0}
C.dCj.prototype={
$0(){A.a5(this.a,!1).N("gallery")
return null},
$S:0}
C.dCp.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dCI.prototype={
$0(){return this.b.$1(new C.dCn(this.a))},
$S:0}
C.dCn.prototype={
$0(){return this.a.c=""},
$S:0}
C.dCJ.prototype={
$0(){return this.a.$1(new C.dCm())},
$S:0}
C.dCm.prototype={
$0(){},
$S:0}
C.dCy.prototype={
$0(){return this.a.$1(new C.dCl(this.b))},
$S:0}
C.dCl.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dCz.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.agr(u.a,null,null,new C.dCk(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dCk.prototype={
$4(d,e,f,g){this.a.$1(new C.dCh(this.b,d))},
$S:428}
C.dCh.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dCA.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dCB.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.R(D.eOA)
return}if(w.a.d==null){w.c.I(x.q).f.R(D.eLw)
return}A.a5(w.c,!1).N(!0)},
$S:0}
C.dD4.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:90}
C.dD5.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dX:B.c,n=A.m(14),m=A.I((p?B.bq:B.bo).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.aA,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Af(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bq:B.bo,r,r,r,r,r,r,r,r,13,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.yG(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.yG(r).length>0?B.bL:B.cY,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bq:B.bo
t=(q?B.bq:B.bo).j(0.28)
s=x.p
return new A.cX(e,!1,A.av(A.aF(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.P,v,u,B.ay,A.A(A.a([A.D(A.dT(B.ni,new C.dD2(d),A.de(r,r,r,r,r,r,r,r,r,w,r,r,B.jO,r,new A.b7(A.m(10),B.Y),new A.az(t,1,B.r,-1),r,r,r,r)),1),B.ab,A.D(A.bJ(D.fkc,new C.dD3(d),A.bk(B.cY,r,r,r,B.c,r,B.jO,r,new A.b7(A.m(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.AL,E.XK,r,r,300),B.f,B.K,0,r,r,r,r,r,B.af),r,r,r),r)},
$S:31}
C.dD2.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dD3.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dCZ.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dD_(r),p=r.a.d.a,o=p?B.dX:B.c,n=A.m(14),m=A.I((p?B.bq:B.bo).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.D(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.aA,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Af(l.c),s,s,s,s,s,s,D.f_y,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.ix((r.a.d.a?B.bq:B.bo).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.ZA,"View receipt",new C.dCS(r,d,l))
u=l.x!=null
t=u?B.qU:B.pA
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.boz,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dCT(r,d,l)),q.$3$icon$label$onTap(B.B1,"Edit",new C.dCU(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.md,"View / download ID",new C.dCV(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.byT,"View / download selfie",new C.dCW(r,d,l)))
if(l.gaDR())p.push(q.$3$icon$label$onTap(A5.a_E,"View / download signature",new C.dCX(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bL,B.e4,"Delete",new C.dCY(r,d,l)))
p.push(B.at)
return A.bn(!0,new A.C(B.v0,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:27}
C.dD_.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.aA
else w=d
return A.aK(!1,v,!0,new A.C(B.eP,A.A(A.a([A.W(e,w,v,v,v,20),B.bf,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1899}
C.dCS.prototype={
$0(){A.a5(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fCz(w,this.c)},
$S:0}
C.dCT.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.Ri(this.c)},
$S:0}
C.dCU.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.CE(this.c)},
$S:0}
C.dCV.prototype={
$0(){var w,v,u
A.a5(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bBy(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dCW.prototype={
$0(){var w,v,u
A.a5(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bBy(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dCX.prototype={
$0(){A.a5(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fCE(w,this.c)},
$S:0}
C.dCY.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.Ni(0,this.c)},
$S:0}
C.dD6.prototype={
$1(d){return d.x==null},
$S:258}
C.dD7.prototype={
$1(d){return d.x!=null},
$S:258}
C.dD8.prototype={
$2(d,e){return d+e.c},
$S:1900}
C.dD9.prototype={
$0(){return this.a.bwV()},
$S:0}
C.dD0.prototype={
$0(){return this.a.adz(this.b)},
$S:0}
C.fmi.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fmj.prototype={
$0(){return B.d.gL(D.a0Q)},
$S:z+68}
C.d2U.prototype={
$0(){var w=this.a
return w.m(new C.d2S(w,this.b))},
$S:0}
C.d2S.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d2T.prototype={
$0(){},
$S:0}
C.d2V.prototype={
$0(){var w=this.a.gbVn()
A.a5(this.b,!1).N(w)
return null},
$S:0}
C.foi.prototype={
$1(d){return C.fZ3(A.a1(d,x.N,x.z))},
$S:z+11}
C.foj.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fok.prototype={
$2(d,e){var w=A.c7(d.a,null),v=A.c7(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+26}
C.fBd.prototype={
$1(d){return d.ae()},
$S:z+21}
C.fJh.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.flF.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bLB.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eY(e,v)?v:null},
$S:1901}
C.fBM.prototype={
$1(d){var w=this
return new C.Yp(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d3z.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d3y(w,d))},
$S:z+66}
C.d3y.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d3n.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cx(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d3k.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d2W.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d2X.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d3o.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d34.prototype={
$1(d){var w=null,v=A.O(d).ax.a===B.H,u=v?B.dX:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eh(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.d32(d),w,w),A.bJ(B.w4,new C.d33(d),A.bk(B.mH,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.d32.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.d33.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.d35.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d3l.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d3m.prototype={
$0(){return B.d.gL(D.yn)},
$S:z+12}
C.d30.prototype={
$1(d){var w=this.a,v=w.y,u=w.gxV(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.RQ(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d31.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d36.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.XY(v,u,J.ad(w.d),null)},
$S:z+64}
C.d37.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d3x.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aE(s,new C.XG(r.y,r.gxV(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d3v(r),s,s,s,s,s,s,!1,B.a8)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b8m(v,e,w,u,t,r.gbMJ(),C.hda(r.y.Q),r.gxV(0),s)
w=t}return A.c6(q,new C.d3w(r,e),new A.C(B.XL,w,s))},
$S:1902}
C.d3w.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gcZ(t).ay){t=this.b
u=x.cy.a(B.d.gcZ(u.f.f)).gus(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dl()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fv(v*3.141592653589793*0.5)
return A.fr(B.a3,A.db(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.d3v.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aEV(B.po,B.iu)},
$S:0}
C.d3h.prototype={
$0(){var w=this.a
return w.m(new C.d3g(w))},
$S:0}
C.d3g.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d3i.prototype={
$0(){var w=this.a.c
w.toString
A.a5(w,!1).N(null)
return null},
$S:0}
C.d2Y.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jG.j(0.5),r=x.p,q=A.a([D.fbT,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ck(p.d)?"Write this book":"Write a new book"
q.push(p.XY(d,B.dW,w,J.ck(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.XY(d,L.ajg,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cx(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cG,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.k7.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cG,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.k7.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.XY(d,A_.akr,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.XY(d,B.pH,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.XY(d,B.pH,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eE(u,E.Ad,A.bn(!0,new A.C(A4.AG,A.v(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,D.agJ,B.d0,u,new A.b7(t,new A.az(s,1.4,B.r,-1)),u)},
$S:46}
C.d3j.prototype={
$0(){A.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.d3a.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cx(w.d)
return new C.Yr(v,J.cx(w.d),w.r+1,null)},
$S:z+54}
C.d3b.prototype={
$1(d){var w=null
return A.oc(!1,A.eh(w,w,w,E.Ad,new A.ka(this.a,new C.d39(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:339}
C.d39.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a61,B.o1,A.D(A.d(e,w,w,w,w,w,w,B.iD,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:737}
C.d3c.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d3d.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:194}
C.d3e.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d3f.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Ao(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.QG(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d38(s,t))
w=4
return A.b(s.kN(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d38.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d3q.prototype={
$1(d){var w=null
return A.oc(!1,A.eh(w,w,w,E.Ad,new A.ka(this.a,new C.d3p(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:339}
C.d3p.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a61,B.o1,A.D(A.d(e,w,w,w,w,w,w,B.iD,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:737}
C.d3r.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d3s.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:194}
C.d3t.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:194}
C.d3u.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Ao(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kN(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d2Z.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.beU(B.po,U.Le)},
$S:0}
C.d3_.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aEV(B.po,U.Le)},
$S:0}
C.d5j.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.d5k.prototype={
$1(d){var w=this.a
return w.m(new C.d5i(w))},
$S:9}
C.d5i.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d5l.prototype={
$1(d){var w=this.a
return w.m(new C.d5h(w))},
$S:9}
C.d5h.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d5m.prototype={
$1(d){var w=this.a
return w.m(new C.d5g(w))},
$S:9}
C.d5g.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d5n.prototype={
$0(){var w=this.a
return w.m(new C.d5f(w,this.b))},
$S:0}
C.d5f.prototype={
$0(){var w=this.b
this.a.d.saV(0,w)
return w},
$S:0}
C.d5o.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga0A()
A.a5(this.b,!1).N(new A.bmO(w,v))},
$S:0}
C.d3O.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d3N.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Yn(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d3S.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d3R.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b57(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hA,v,v,v)
return A.eh(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.d3P(d),v,v),A.bJ(B.w4,new C.d3Q(d),A.bk(B.mH,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Ad,w,v,v,v,v,D.faN,v)},
$S:19}
C.d3P.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.d3Q.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.d3T.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.d3U.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a6(s,t,w[u],t))
return A.cd(A.c_(B.bD,r,B.bt,18,14),B.q,t,B.y,t,D.bpu,t,t,B.ai)},
$S:294}
C.d3M.prototype={
$0(){return this.a.Pj(0,this.b)},
$S:0}
C.d3L.prototype={
$0(){return this.a.OO(0,this.b)},
$S:0}
C.cCR.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cCS.prototype={
$0(){return B.d.gL(D.yn)},
$S:z+12}
C.cCT.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bY(0,new A.C(d,A.bZ(w,new A.o(w,w,A.I(this.a.j(f),B.r,g),v,w,w,B.n),B.bd),w),0,0,0)},
$S:1904}
C.cWi.prototype={
$1(d){return this.a.m(new C.cWh(this.b,this.c))},
$S:9}
C.cWh.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cWH.prototype={
$1(d){return this.a.m(new C.cWu())},
$S:2}
C.cWu.prototype={
$0(){},
$S:0}
C.cWI.prototype={
$1(d){return this.a.m(new C.cWt())},
$S:2}
C.cWt.prototype={
$0(){},
$S:0}
C.cWJ.prototype={
$0(){var w=this.a
return w.m(new C.cWs(w,this.b))},
$S:0}
C.cWs.prototype={
$0(){var w=this.a
return w.d=w.gnP().F8(this.b.a)},
$S:0}
C.cWK.prototype={
$0(){var w=this.a
return w.m(new C.cWr(w,this.b))},
$S:0}
C.cWr.prototype={
$0(){var w=this.a
return w.d=w.gnP().cD0(this.b)},
$S:0}
C.cWL.prototype={
$1(d){return this.a.m(new C.cWq())},
$S:2}
C.cWq.prototype={
$0(){},
$S:0}
C.cWM.prototype={
$0(){var w=this.a
return w.m(new C.cWp(w,this.b))},
$S:0}
C.cWp.prototype={
$0(){var w=this.a
return w.d=w.gnP().cD5(this.b.a)},
$S:0}
C.cWN.prototype={
$1(d){var w=this.a
return w.m(new C.cWC(w,d))},
$S:6}
C.cWC.prototype={
$0(){var w=this.a
return w.d=w.gnP().cE_(this.b)},
$S:0}
C.cWO.prototype={
$1(d){var w=this.a
return w.d=w.gnP().aC2(d)},
$S:2}
C.cWP.prototype={
$1(d){var w=this.a
return w.d=w.gnP().cD8(d)},
$S:2}
C.cWR.prototype={
$1(d){var w=this.a
return w.d=w.gnP().cDY(d)},
$S:2}
C.cWS.prototype={
$1(d){var w=this.a
return w.m(new C.cWB(w,d))},
$S:9}
C.cWB.prototype={
$0(){var w=this.a
return w.d=w.gnP().cDP(this.b)},
$S:0}
C.cWT.prototype={
$0(){var w=this.a,v=w.gnP(),u=B.a.i(w.gxV(0).a.a),t=B.a.i(w.gazk().a.a)
u=v.b9G(B.a.i(w.gape().a.a),t,u)
A.a5(this.b,!1).N(u)
return null},
$S:0}
C.dQD.prototype={
$0(){var w=this.a
w.vy()
w.a.bp()
w.a.pw()},
$S:0}
C.dQC.prototype={
$0(){var w=this.a
w.vy()
w.a.bp()
w.a.pw()},
$S:0}
C.dQF.prototype={
$0(){var w=this,v=w.b
if(J.cx(v)||J.ck(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dQG.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dQH.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dQB.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dQE.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dQJ.prototype={
$0(){this.a.NO()
return null},
$S:0}
C.dQI.prototype={
$0(){return this.a.E0(this.b)},
$S:0}
C.dQ3.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.de,w,w,!0,w,w,new C.dQ1(d),w,w),r=A.bk(B.bT,w,w,w,w,w,w,w,w,w,w,w)
return A.eh(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dQ2(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.dQ1.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dQ2.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dQ4.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cDu(this.b)},
$S:0}
C.dPZ.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aQS(w.b,w.c,w.d)},
$S:8}
C.dPx.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dPy.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dPM.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.FW(t.a.c),$async$$0)
case 2:s=r.r0(q.dH(e,new C.dPK(t)))
if(s!=null&&t.c!=null)t.m(new C.dPL(t,s))
t.a.bp()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPK.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dPL.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dPN.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dPO.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dPY.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cEh(C.hdk(w),w)},
$S:0}
C.dPW.prototype={
$1(d){return new A.e2(new C.dPV(this.a,this.b),null)},
$S:20}
C.dPV.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dX:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.al4,v,v,v,p>0?new C.dPR(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aO,A.A(A.a([o,A.D(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.alE,v,v,v,new C.dPS(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dPT(d),v,v),A.bJ(B.p_,new C.dPU(d),A.bk(B.bT,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:156}
C.dPR.prototype={
$0(){return this.b.$1(new C.dPQ(this.a))},
$S:0}
C.dPQ.prototype={
$0(){return--this.a.a},
$S:0}
C.dPS.prototype={
$0(){return this.b.$1(new C.dPP(this.a))},
$S:0}
C.dPP.prototype={
$0(){return++this.a.a},
$S:0}
C.dPT.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dPU.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dPX.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cE4(this.a.a)
w.r.a8(0)},
$S:0}
C.dPl.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.agy(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.h73(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dPm.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aC_(w)},
$S:0}
C.dQ6.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.ac_(this.b,w,this.c,null)},
$S:z+24}
C.dQ0.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dX:B.c,t=A.m(20),s=A.W(B.l9,B.aU,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bJ(D.fli,new C.dQ_(d),A.bk(B.aU,w,w,w,w,w,w,w,w,w,w,w))],o),B.ba,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:19}
C.dQ_.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dPn.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dPo.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dPp.prototype={
$1(d){return d.a},
$S:z+7}
C.dPq.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.L)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hV(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aC_(w)},
$S:0}
C.dPu.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.agy(q)
w=A.T(q).k("a2<1>")
q=A.B(new A.a2(q,new C.dPs(r),w),w.k("H.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.h73(v.e,null,r,v.f,v.r,new C.dPt(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dPt.prototype={
$0(){return this.a.a8M(this.b)},
$S:0}
C.dPs.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dPv.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("K<1,hV>")
w=A.B(new A.K(w,new C.dPr(this.b),v),v.k("ai.E"))
u.d=t.aC_(w)},
$S:0}
C.dPr.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dQ5.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dPH.prototype={
$1(d){return d.length!==0},
$S:3}
C.dPI.prototype={
$1(d){var w=this
return new A.e2(new C.dPG(w.a,w.b,w.c,w.d),null)},
$S:20}
C.dPG.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dX:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bo,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.K(o,new C.dPC(u,e,o),A.T(o).k("K<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aL(v,B.T,!1,v,!0,B.q,v,A.aM(),u,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(12),B.dg),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ah,v,v,v,v,v,B.lS,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.am,v,v,v,v))
p=A.v(p,B.aj,v,B.e,B.Q,0,B.p)
t=w.a
return A.eh(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dPD(d),v,v),A.bJ(B.IK,new C.dPE(t,u,o,e),A.bk(B.bT,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.f90,new C.dPF(t,u,o,d),A.bk(B.aU,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a6(360,v,p,v),v,v,v,v,r,v)},
$S:156}
C.dPC.prototype={
$1(d){var w=null
return A.dN(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bM9,w,w,w,new C.dPB(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1905}
C.dPB.prototype={
$0(){return this.a.$1(new C.dPz(this.b,this.c))},
$S:0}
C.dPz.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dPD.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dPE.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dPA(w.c,u))
v.bM(0,B.c3)}},
$S:0}
C.dPA.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dPF.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a5(w.d,!1).N(!0)},
$S:0}
C.dPJ.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cEJ(this.b,D.tr,C.FU(v,w.a.c))},
$S:0}
C.dQd.prototype={
$1(d){return d.as},
$S:z+1}
C.dQe.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iL(this.b,w)},
$S:0}
C.dQf.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.i1_(v)
return w.UW(v==null?null:v.a)},
$S:0}
C.dQg.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hEx(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcl(k)){k=A.aP(1/0,e.a,e.b)
s=A.aP(1/0,e.c,e.d)
l.cn2(new A.at(u,t),v.gbfL(),new A.at(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cK0:D.cIt
q=A.I(s?B.dq:D.b8m,B.r,1)
p=A.m(22)
o=A.bY(0,A.b3(m,m,m,new C.bbH(s,m),B.au),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bw(p,new A.an(B.W,m,B.aa,B.q,A.a([o,A.bY(0,A.ub(new A.Q(n,n,n,n),new A.a6(u,t,new C.bcz(l.d,v,l.f,w,new C.dQ9(l),l.gc7e(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.btQ(s,new C.dQa(l,e),new C.dQb(l,e),new C.dQc(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a7(B.b0,B.b6,B.x,r,m,m),B.n),m,m,m,Q.afO,m,m,m,m)},
$S:210}
C.dQ9.prototype={
$1(d){var w=this.a
w.m(new C.dQ7(w,d))},
$S:2}
C.dQ7.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.K(0,v)},
$S:0}
C.dQa.prototype={
$0(){var w=this.b
return this.a.b7m(1.25,new A.at(A.aP(1/0,w.a,w.b),A.aP(1/0,w.c,w.d)))},
$S:0}
C.dQb.prototype={
$0(){var w=this.b
return this.a.b7m(0.8,new A.at(A.aP(1/0,w.a,w.b),A.aP(1/0,w.c,w.d)))},
$S:0}
C.dQc.prototype={
$0(){var w=this,v=w.b
return w.a.aQS(new A.at(A.aP(1/0,v.a,v.b),A.aP(1/0,v.c,v.d)),new A.at(w.c,w.d),w.e.gbfL())},
$S:0}
C.dQh.prototype={
$0(){var w=this.a
return w.m(new C.dQ8(w))},
$S:0}
C.dQ8.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dPw.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fI(new A.fB(s.c)),$async$$0)
case 2:t.xp("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3Y.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bgg(u,C.hho(v.c,u),new C.d3X(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d3X.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d3Z.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bjB(d.d,d.c,u.f.t(0,d.a),new C.d3W(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d3W.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fmm.prototype={
$1(d){var w,v=d.e
if(this.a.ah(0,v))return v
v=this.b
w=A.T(v)
return A.r0(new A.cQ(new A.a2(v,new C.fmn(d),w.k("a2<1>")),new C.fmo(),w.k("cQ<1,n>")))},
$S:z+20}
C.fmn.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fmo.prototype={
$1(d){return d.a},
$S:z+7}
C.fmk.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fml.prototype={
$1(d){return d.b},
$S:z+7}
C.fmr.prototype={
$1(d){var w,v=d.e
if(this.a.ah(0,v))return v
v=this.b
w=A.T(v)
return A.r0(new A.cQ(new A.a2(v,new C.fms(d),w.k("a2<1>")),new C.fmt(),w.k("cQ<1,n>")))},
$S:z+20}
C.fms.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fmt.prototype={
$1(d){return d.a},
$S:z+7}
C.fmp.prototype={
$1(d){var w,v=A.eu([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ah(0,w)&&v.K(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fmq.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d40.prototype={
$0(){return this.a},
$S:z+32}
C.d4h.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ah(0,d)},
$S:245}
C.d49.prototype={
$2(d,e){var w=this.a.ci(0,d,new C.d4a()),v=J.a8(w)
if(!v.t(w,e))v.K(w,e)},
$S:116}
C.d4a.prototype={
$0(){return A.a([],x.s)},
$S:738}
C.d48.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eY(w,e)
return w===!0},
$S:306}
C.d41.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d47.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d46.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.K(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aX(v==null?D.BJ:v)
u=1
while(v.C())u+=s.$2(v.gU(v).a,e)
v=s.b.h(0,d)
v=J.aX(v==null?B.T:v)
while(v.C()){t=v.gU(v)
if(e.t(0,t))continue
e.K(0,t)
t=w.h(0,t)
t=J.aX(t==null?D.BJ:t)
while(t.C())u+=s.$2(t.gU(t).a,e)}return u},
$S:1907}
C.d42.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d4b.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.K(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aX(u==null?B.T:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gU(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.K(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aX(t==null?D.BJ:t)
while(t.C()){r=t.gU(t)
if(r.a!==a9&&!B.d.b8(w,new C.d4c(r)))w.push(r)}}B.d.bn(w,new C.d4d(a8))
B.d.b_(w,new C.d4e())
q=C.hEw(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eqS],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.L)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.z(-p,p)],x.G)
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
a1=A.a([new A.z(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bmy(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1908}
C.d4c.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d4d.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d4e.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.d4f.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a8(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a3(v).k("bc<2>")).cI(0,0,B.qj)+88-w.gL(n).a}else u=0
for(w=J.a8(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:654}
C.d4g.prototype={
$1(d){return 16+d*156},
$S:244}
C.d4_.prototype={
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
t.n(0,d,new C.Fb(r,new A.u(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.Fb(s,new A.u(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.Fb(s,new A.u(e,v)))}t=o.r.h(0,d)
t=J.aX(t==null?B.T:t)
s=o.w
while(t.C()){r=t.gU(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Jn(d,new A.u(e+t,w),s,s.length))}},
$S:194}
C.d43.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aHn(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:116}
C.d44.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d45.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:739}
C.d4i.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:739}
C.d4j.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:437}
C.d4k.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:190}
C.d4l.prototype={
$1(d){return d>=0.5},
$S:118}
C.f4R.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hp(A.aK(!1,v,!0,new A.a6(38,38,A.W(d,this.a.c?B.c:B.cC,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1910}
C.eH8.prototype={
$1(d){var w=null,v=A.m(8),u=B.bT.j(0.12),t=A.m(8)
return new A.C(B.nJ,A.aK(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.eWj,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.LL,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eH7(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eH7.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dk8.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dk7.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nf,B.L,w,w)
return A.eh(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.dk5(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.m4,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dk6(d),w,w)],x.p),B.ba,B.EM,w,u,D.bqK,w,D.bsF,new A.b7(v,B.Y),w,w)},
$S:19}
C.dk5.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dk6.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dkh.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dki.prototype={
$1(d){var w=this.a
return w.m(new C.dkg(w,d))},
$S:z+37}
C.dkg.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dkj.prototype={
$1(d){var w=null
return A.q7(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dkm.prototype={
$1(d){var w=this.a
return w.m(new C.dkf(w,d))},
$S:34}
C.dkf.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dkl.prototype={
$1(d){var w=null
return A.q7(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dkn.prototype={
$1(d){var w=this.a
return w.m(new C.dke(w,d))},
$S:34}
C.dke.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dko.prototype={
$0(){var w=this.a
return w.m(new C.dkd(w))},
$S:0}
C.dkd.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dkp.prototype={
$0(){var w=this.a
return w.m(new C.dkc(w))},
$S:0}
C.dkc.prototype={
$0(){return++this.a.at},
$S:0}
C.dkq.prototype={
$0(){var w=this.a
return w.m(new C.dkb(w))},
$S:0}
C.dkb.prototype={
$0(){return--this.a.ax},
$S:0}
C.dkr.prototype={
$0(){var w=this.a
return w.m(new C.dka(w))},
$S:0}
C.dka.prototype={
$0(){return++this.a.ax},
$S:0}
C.dks.prototype={
$1(d){var w=this.a
return w.m(new C.dk9(w,d))},
$S:9}
C.dk9.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dkk.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dkt.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bT.j(0.18)
else w=q.c.a?B.dX:B.c
v=A.m(12)
if(p)u=B.bT
else u=(q.c.a?B.dZ:B.bV).j(0.85)
u=A.I(u,B.r,p?1.5:1)
if(p)t=B.bT
else t=q.c.a?B.bq:B.bo
t=A.W(f,t,r,r,r,18)
if(p)s=B.bT
else s=q.c.a?B.bq:B.bo
return A.D(A.aF(!1,B.a1,!0,r,A.aK(!1,o,!0,A.dg(r,A.v(A.a([t,B.at,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bb,new A.o(w,r,u,v,r,r,B.n),B.eE,r,r,r,B.jO,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dku(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.af),1)},
$S:z+39}
C.dku.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dkD.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.c63.prototype={
$2(d,e){return new A.bu(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:96}
C.c6a.prototype={
$1(d){return d.ae()},
$S:z+5}
C.c6b.prototype={
$2(d,e){var w=J.b6(e,new C.c69(),x.a)
w=A.B(w,w.$ti.k("ai.E"))
return new A.bu(d,w,x.d2)},
$S:z+41}
C.c69.prototype={
$1(d){return d.ae()},
$S:z+21}
C.c65.prototype={
$1(d){return C.ajn(A.a1(d,x.N,x.z))},
$S:z+8}
C.c66.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c67.prototype={
$1(d){return C.fZ3(A.a1(d,x.N,x.z))},
$S:z+11}
C.c68.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c6f.prototype={
$1(d){return new A.aEt(d.f.length,d.a,d.b)},
$S:z+43}
C.c6g.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:565}
C.c6c.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c6d.prototype={
$1(d){return d.cDH(C.FU(d,this.a))},
$S:z+44}
C.dQq.prototype={
$1(d){return C.tH(d,this.a.a.c)},
$S:z+2}
C.dQr.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dQv.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dQw.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dQn.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYo(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xW("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oV(r.c,r.e),$async$$0)
case 4:s.xW(p)
w=5
return A.b(s.IY(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQo.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYo(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xW("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.oV(r.c,r.e),$async$$0)
case 4:s.xW(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQp.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Ua(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.xW("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.xW("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.xW("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.IY(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.a9(j)
o=r.a
if(o.c==null){w=1
break}o.xW(B.a.e9(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dQu.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYn(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xW("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a5(r,!1).ce(A.ej(new C.dQt(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oV(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQt.prototype={
$1(d){var w=this.b
return new C.Zl(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dQs.prototype={
$1(d){return D.fJv},
$S:z+46}
C.dQy.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dQz.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dQx(w,d)
return new A.C(B.dc,new C.bcD(this.b,d.c,d.a,w,null),null)},
$S:1911}
C.dQx.prototype={
$0(){return this.a.WE(this.b.b)},
$S:0}
C.dQi.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dQj.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dQk.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dQl.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dQm.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dQA.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.dr(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a5(this.b,!1).N(s)
return}},
$S:177}
C.dC9.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dCa.prototype={
$0(){return B.d.gL(D.a2e)},
$S:z+48}
C.dCb.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.W(this.b.d,B.c.j(0.95),w,w,D.cPZ,44),w,w,w),w,w,new C.bho(u,t,v,w),B.au)},
$S:68}
C.fCe.prototype={
$1(d){return A.oF(new C.fCd(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:138}
C.fCd.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dX:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rc,24)],x.V),o=r?B.dZ:B.bV
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aU.j(0.25),B.bT.j(0.18)],x.O)
w=A.p(t,D.bGK,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a7(B.a3,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.aA,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.S,o,new A.C(E.agN,A.A(A.a([w,B.bf,A.D(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bq:B.bo,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.D(A.ic(!0,t,e,B.y,D.eJJ,new C.fCc(this.b,s),20,B.agn,t,B.ai,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kw,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:110}
C.fCc.prototype={
$2(d,e){var w=null,v=D.a2e[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.dZ:B.bV,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.ej,8)],x.V),p=A.m(15),o=A.D(new C.a5c(v.a,!0,w),1),n=s?B.jo:B.iL,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aP:B.aA,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a1,!0,w,A.aK(!1,u,!0,A.ex(A.bw(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bq:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.l5,w,w,w)],l),B.aj,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fCb(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.af)},
$S:77}
C.fCb.prototype={
$0(){A.a5(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cdI.prototype={
$0(){return this.a.aeC(this.b)},
$S:0}
C.fBB.prototype={
$1(d){return D.fFL},
$S:z+74}
C.fJ3.prototype={
$1(d){var w=this
return new C.a03(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fBG.prototype={
$1(d){return new C.Y_(this.a,null)},
$S:z+51}
C.fBF.prototype={
$1(d){return D.fGK},
$S:z+52}
C.cX4.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cX5.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cX3(w,d))},
$S:34}
C.cX3.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cX6.prototype={
$1(d){return this.a.Jx()},
$S:2}
C.cX7.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cX0.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cX1.prototype={
$1(d){return this.a.Jx()},
$S:2}
C.cX2.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cuE.prototype={
$0(){},
$S:0}
C.cuK.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cuL.prototype={
$0(){return this.a.aMr(-1)},
$S:0}
C.cuM.prototype={
$1(d){return this.a.m(new C.cuJ())},
$S:2}
C.cuJ.prototype={
$0(){},
$S:0}
C.cuN.prototype={
$0(){return this.a.aMr(1)},
$S:0}
C.cuO.prototype={
$1(d){return this.a.m(new C.cuI())},
$S:2}
C.cuI.prototype={
$0(){},
$S:0}
C.cuP.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aU.j(0.2)
if(s)v=B.aU
else v=this.b.a?B.dZ:B.bV
return A.u1(u,u,B.aZ,r,u,new C.cuH(t,d),B.AM,s,w,u,new A.az(v,1,B.r,-1),B.c7)},
$S:1912}
C.cuH.prototype={
$1(d){var w=this.a
return w.m(new C.cuF(w,this.b))},
$S:9}
C.cuF.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cuQ.prototype={
$1(d){return this.a.m(new C.cuG())},
$S:2}
C.cuG.prototype={
$0(){},
$S:0}
C.cuR.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.f4j.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a5(this.b,!1).N(w)},
$S:2}
C.f4k.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.f4l.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a5(this.b,!1).N(w)},
$S:0}
C.f4h.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbw3()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b3(new A.C(D.bsE,new A.es(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.btF(p,v,this.b.a,u,t,r),r,r,B.au)},
$S:68}
C.f4i.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dA.av(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.aq(B.aU,B.bT,w)
s.toString
s=A.a([B.aZ,s,B.aU],x.O)
return A.aF(!1,B.a1,!0,p,A.aK(!1,v,!0,A.ex(D.e21,r,new A.o(r,r,A.I(B.c.j(0.4),B.r,1.5),u,r,new A.a7(new A.d9(-1.2+t,-0.5),new A.d9(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.af)},
$S:126}
C.fAm.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.eEi.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eE9.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eEa.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eEg.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e2(new C.eEf(w,this.b),null)},
$S:20}
C.eEf.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dX:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eE(w,u,new A.C(B.agH,A.v(A.a([s,B.ao,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.h3S(new C.eEc(r,e),r.a),B.ay,A.A(A.a([A.D(A.dT(B.de,new C.eEd(d),w),1),B.aw,A.D(A.bJ(B.T8,new C.eEe(r,d),A.bk(B.aU,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.aj,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(t,B.Y),w)},
$S:98}
C.eEc.prototype={
$1(d){return this.b.$1(new C.eEb(this.a,d))},
$S:34}
C.eEb.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eEd.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.eEe.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).N(w)
return null},
$S:0}
C.eEh.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.RX(this.b)},
$S:0}
C.eE4.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.b9e(w)},
$S:0}
C.eE8.prototype={
$1(d){return this.bif(d)},
bif(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Kz(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iL(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eE7.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("a2<1>")
w=A.B(new A.a2(w,new C.eE6(this.b),v),v.k("H.E"))
u.d=t.b9e(w)},
$S:0}
C.eE6.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eEj.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iL(this.b,w)},
$S:0}
C.eEk.prototype={
$1(d){return this.a.bA8(d,this.b)},
$S:z+55}
C.eE5.prototype={
$0(){return this.a.a8L(this.b)},
$S:0}
C.fIW.prototype={
$1(d){return new C.ack(this.a,this.b,this.c,null)},
$S:z+56}
C.eEm.prototype={
$0(){return this.a.Zf(this.b)},
$S:0}
C.eEn.prototype={
$0(){return this.a.Pf(this.b)},
$S:0}
C.eEo.prototype={
$0(){return this.a.DW(this.b)},
$S:0}
C.eEp.prototype={
$0(){return this.a.Zg(this.b)},
$S:0}
C.eEl.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.eE_.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eE0.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eE1.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.eE3.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pC(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eE2(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eE2.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eEM.prototype={
$2(d,e){return d+e.gwC()},
$S:z+59}
C.eEI.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eEJ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eEt.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dX:B.c,s=A.m(24),r=A.p(v,D.bH9,B.f,v,v,new A.o(B.aB.j(u?0.18:0.08),v,A.I(B.aB.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aP:B.aA
u=u?B.dZ:B.bV
w=x.p
return A.eE(v,t,new A.C(B.xm,A.v(A.a([r,B.aO,q,B.P,p,B.d5,A.A(A.a([A.D(A.dT(B.ni,new C.eEr(d),A.de(v,v,v,v,v,v,v,v,v,o,v,v,B.eZ,v,new A.b7(A.m(14),B.Y),new A.az(u,1,B.r,-1),v,v,v,v)),1),B.aw,A.D(A.bJ(D.foW,new C.eEs(d),A.bk(B.aB,v,v,v,v,v,B.eZ,v,new A.b7(A.m(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d0,v,new A.b7(s,B.Y),v)},
$S:46}
C.eEr.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.eEs.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.eEC.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dX:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fK,28)],x.V),g=k?D.cWh:B.a1D,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.ay,D.eDZ,B.at,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cs,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a7(B.ax,B.aD,B.x,g,m,m),B.n),m,m,m,m,E.agK,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bo,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.D(v.b2B(B.b4,B.iQ,new C.eEz(v,d),l,"Camera import","Scan QR"),1),B.aw,A.D(v.b2B(B.cw,M.y2,new C.eEA(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bo,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aB.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.aB.j(0.28),B.r,1)
o=A.p(m,D.bGy,B.f,m,m,new A.o(B.aB.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bR,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.aA,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.D(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bo,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bn(!0,new A.C(B.v2,A.p(m,A.v(A.a([g,new A.C(B.agI,A.v(A.a([w,B.S,u,B.bv,t,B.S,A.aF(!1,B.a1,!0,m,A.aK(!1,s,!0,A.p(m,A.A(A.a([o,B.bf,n,A.W(B.eu,k?B.bq:B.bo,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bB,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eEB(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.af)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:27}
C.eEz.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).N(null)
w=2
return A.b(u.a.v9("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eEA.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).N(null)
w=2
return A.b(u.a.v9("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eEB.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).N(null)
w=2
return A.b(u.a.N5(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eEx.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dX:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eT,24)],x.V),k=o?B.dZ:B.bV
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bq:B.bo
u=A.bw(w,new A.a6(48,48,C.aOC(!0,A.m(12),48,N.Ml,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aP:B.aA,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Af(v.gwC())
s=x.p
r=this.a
return A.bn(!0,new A.C(B.v2,A.p(q,A.v(A.a([B.S,k,new A.C(D.agF,A.A(A.a([u,B.bf,A.D(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bq:B.bo,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.As,r.chl(B.tJ,B.aU,new C.eEv(d),p,"QR code or backup file","Transfer project"),r.b_F(!0,B.e4,B.aB,new C.eEw(d),p,"Remove from this device","Delete project"),B.S],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:27}
C.eEv.prototype={
$0(){A.a5(this.a,!1).N("transfer")
return null},
$S:0}
C.eEw.prototype={
$0(){A.a5(this.a,!1).N("delete")
return null},
$S:0}
C.eEy.prototype={
$1(d){return this.bih(d)},
bih(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Kz(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vm(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eEP.prototype={
$0(){var w=this.a
w.a.bp()
w.m(new C.eEO(w))},
$S:0}
C.eEO.prototype={
$0(){return this.a.r++},
$S:0}
C.eEQ.prototype={
$0(){var w=this.a
return w.m(new C.eEN(w))},
$S:0}
C.eEN.prototype={
$0(){return this.a.r++},
$S:0}
C.eEq.prototype={
$0(){var w=this.a.c
w.toString
return A.iL(w,null)},
$S:0}
C.eEu.prototype={
$0(){return this.a.caJ(this.b)},
$S:0}
C.eEL.prototype={
$0(){var w=this.a
return w.m(new C.eEK(w,this.b))},
$S:0}
C.eEK.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eEF.prototype={
$0(){return this.a.v9("scan")},
$S:0}
C.eEG.prototype={
$0(){return this.a.v9("file")},
$S:0}
C.eEH.prototype={
$1(d){return this.a.chm(d,this.b)},
$S:z+60}
C.eEE.prototype={
$0(){return this.a.E_(this.b)},
$S:0}
C.eED.prototype={
$0(){return this.a.ZL(this.b,this.c)},
$S:0}
C.cu5.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cu4.prototype={
$1(d){return d.ae()},
$S:z+62}
C.cu2.prototype={
$1(d){return C.hnc(A.a1(d,x.N,x.z))},
$S:z+63}
C.cu3.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.flx.prototype={
$1(d){return d.y===D.kf},
$S:z+2}
C.fJp.prototype={
$1(d){return C.bzt(d,this.a)},
$S:z+2}
C.fk3.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bLG.prototype={
$1(d){return!d.as},
$S:z+1}
C.bLF.prototype={
$1(d){return d.ae()},
$S:z+15}
C.bLC.prototype={
$1(d){return C.fZ4(A.a1(d,x.N,x.z))},
$S:z+14}
C.bLD.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bLE.prototype={
$1(d){return J.k(d)},
$S:17}
C.fbR.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.f7y.prototype={
$1(d){return C.fPH(A.a1(d,x.N,x.z))},
$S:z+67}
C.f7z.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.f7A.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fBs.prototype={
$1(d){return J.k(d)},
$S:17}
C.fBt.prototype={
$1(d){return d.a},
$S:z+69}
C.fBu.prototype={
$1(d){return d.length!==0},
$S:3}
C.fBv.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fBw.prototype={
$1(d){return d.RX(null).ae()},
$S:z+70}
C.fJn.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.flZ.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.foo.prototype={
$1(d){return C.ajn(A.a1(d,x.N,x.z))},
$S:z+8}
C.fop.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.foq.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fos.prototype={
$1(d){return d.ae()},
$S:z+5}
C.fot.prototype={
$1(d){return C.tH(d,this.a)},
$S:z+2}
C.fBf.prototype={
$1(d){return C.tH(d,this.a)},
$S:z+2}
C.fJi.prototype={
$1(d){return C.ajn(A.a1(d,x.N,x.z))},
$S:z+8}
C.fJj.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fJk.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.flG.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.flH.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fJt.prototype={
$1(d){return!d.as},
$S:z+1}
C.flg.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.flh.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fli.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.fJ4.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fpb.prototype={
$1(d){return d.Q},
$S:z+72}
C.fBb.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fol.prototype={
$1(d){return C.ajn(A.a1(d,x.N,x.z))},
$S:z+8}
C.fom.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fon.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fB7.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.f85.prototype={
$1(d){return d.length!==0},
$S:3}
C.f86.prototype={
$1(d){return C.fZ4(A.a1(d,x.N,x.z))},
$S:z+14}
C.f87.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.f88.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.f89.prototype={
$1(d){return d.length!==0},
$S:3}
C.f8m.prototype={
$2(d,e){return d.eU(new C.f8n(e))},
$S:1913}
C.f8n.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c6},
$S:1914}
C.f8j.prototype={
$1(d){return C.hJ7(d,this.a)},
$S:z+73}
C.f8k.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.f8l.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fcv.prototype={
$1(d){return d.a},
$S:z+49}
C.fcw.prototype={
$1(d){return d.length!==0},
$S:3}
C.fcx.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.feC.prototype={
$1(d){return d.ae()},
$S:z+5}
C.fjo.prototype={
$1(d){return C.h9l(d,C.FU(d,this.a))},
$S:z+5}
C.fjp.prototype={
$1(d){return C.h9m(d,C.FU(d,this.a))},
$S:z+5};(function aliases(){var w=C.aJJ.prototype
w.bsj=w.q
w=C.aLS.prototype
w.buE=w.q
w=C.aLT.prototype
w.buF=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aBf.prototype,"gcei","cej",25)
var s
w(s=C.ayi.prototype,"gc7k","c7l",42)
v(s,"gaKI","ME",0)
v(s,"gcmn","Aq",0)
v(s,"gbHM","Nj",0)
v(s,"gcA4","xX",0)
v(s,"gcgj","a_s",0)
v(s,"gbDe","N1",0)
v(s,"gbIc","W5",0)
w(s,"gbMJ","bMK",71)
v(s,"gbxJ","zt",0)
v(C.ayj.prototype,"gcA0","ER",0)
v(s=C.aBQ.prototype,"gaee","vn",0)
v(s,"gc9Z","ZC",0)
v(s,"gaOI","Ho",0)
v(s=C.aBN.prototype,"gcwi","a1x",0)
v(s,"gaee","vn",0)
v(s,"gckt","a07",0)
v(s,"gcaW","ZQ",0)
w(s,"gc7e","c7f",30)
v(s,"gbI3","Ht",0)
v(s,"gcxh","cxi",3)
v(s,"gbZ4","XK",0)
w(s,"gc5L","c5M",23)
v(s,"gc9J","c9K",3)
v(s=C.aAe.prototype,"gc3A","OP",0)
v(s,"gc3C","c3D",3)
v(s,"gbEK","a8n",0)
v(s=C.aBP.prototype,"gbLg","WA",0)
v(s,"gbVu","Xd",0)
v(s,"gcqG","a0Y",0)
v(s,"gcmY","a0z",0)
v(C.aBO.prototype,"gcmG","afY",0)
v(C.ar_.prototype,"gc5J","Ze",0)
v(C.ax4.prototype,"ga1h","Jx",3)
v(C.ax3.prototype,"ga1h","Jx",3)
v(C.avO.prototype,"ga1h","Jx",3)
v(s=C.aDk.prototype,"gb_3","PK",0)
v(s,"gbww","UQ",0)
v(s,"gcaK","caL",3)
w(C.aDj.prototype,"gc6z","c6A",57)
u(C.aDl.prototype,"gaOC",0,0,null,["$1","$0"],["Hn","bG0"],58,0,0)
t(C,"hgC","hSH",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.amT,C.tZ,C.n4,C.GZ,C.adw,C.Jf,C.u_,C.Jn,C.Fb,C.bcB,C.aHn,C.ao2,C.d4m,C.lu,C.aRu,C.aRt,C.aPz,C.tv,C.qL,C.ld,C.hV,C.kw,C.aFn])
u(A.hT,[C.ft1,C.ft0,C.ft2,C.fC7,C.fik,C.fil,C.fiq,C.fqL,C.fqK,C.fqJ,C.c_w,C.fCD,C.fCv,C.fCH,C.flO,C.dCQ,C.dCL,C.dCM,C.dCo,C.dCk,C.dD4,C.dD5,C.dCZ,C.dD_,C.dD6,C.dD7,C.fmi,C.foi,C.foj,C.fBd,C.fJh,C.flF,C.fBM,C.d3z,C.d2W,C.d34,C.d3l,C.d30,C.d36,C.d2Y,C.d3a,C.d3b,C.d39,C.d3q,C.d3p,C.d5k,C.d5l,C.d5m,C.d3N,C.d3S,C.d3R,C.cCR,C.cCT,C.cWi,C.cWH,C.cWI,C.cWL,C.cWN,C.cWO,C.cWP,C.cWR,C.cWS,C.dQE,C.dQ3,C.dPZ,C.dPx,C.dPK,C.dPN,C.dPW,C.dPl,C.dQ6,C.dQ0,C.dPn,C.dPo,C.dPp,C.dPu,C.dPs,C.dPr,C.dPH,C.dPI,C.dPC,C.dQd,C.dQ9,C.d3Y,C.d3Z,C.fmm,C.fmn,C.fmo,C.fmk,C.fml,C.fmr,C.fms,C.fmt,C.fmp,C.fmq,C.d4h,C.d47,C.d42,C.d4c,C.d4d,C.d4g,C.d44,C.d4j,C.d4k,C.d4l,C.f4R,C.eH8,C.dk7,C.dkh,C.dki,C.dkj,C.dkm,C.dkl,C.dkn,C.dks,C.dkt,C.c6a,C.c69,C.c65,C.c66,C.c67,C.c68,C.c6f,C.c6c,C.c6d,C.dQq,C.dQt,C.dQs,C.dQz,C.dQA,C.dC9,C.fCe,C.fBB,C.fJ3,C.fBG,C.fBF,C.cX5,C.cX6,C.cX1,C.cuM,C.cuO,C.cuP,C.cuH,C.cuQ,C.f4j,C.fAm,C.eEg,C.eEc,C.eE8,C.eE6,C.eEk,C.fIW,C.eEt,C.eEC,C.eEx,C.eEy,C.eEH,C.cu4,C.cu2,C.cu3,C.flx,C.fJp,C.fk3,C.bLG,C.bLF,C.bLC,C.bLD,C.bLE,C.f7y,C.f7z,C.fBs,C.fBt,C.fBu,C.fBv,C.fBw,C.fJn,C.flZ,C.foo,C.fop,C.fos,C.fot,C.fBf,C.fJi,C.fJj,C.fJk,C.flG,C.flH,C.fJt,C.flg,C.flh,C.fJ4,C.fpb,C.fBb,C.fol,C.fom,C.fB7,C.f85,C.f86,C.f87,C.f88,C.f89,C.f8n,C.f8j,C.f8k,C.fcv,C.fcw,C.feC,C.fjo,C.fjp])
u(A.au,[C.aWW,C.ajl,C.aSJ,C.XG,C.b8m,C.bcz,C.bgg,C.btQ,C.bjB,C.abZ,C.bgf,C.abY,C.bge,C.aAf,C.aGq,C.ac_,C.Ja,C.bcA,C.abg,C.bcy,C.bcD,C.aWU,C.ar_,C.ack])
u(A.mG,[C.b8Y,C.ba8,C.ba_,C.aFi,C.bfj,C.bcC,C.bbH,C.bho,C.btF])
u(A.j3,[C.fCA,C.fCB,C.fCC,C.fCt,C.fCu,C.fCF,C.fCG,C.dD1,C.dCO,C.dCR,C.dCv,C.dCw,C.dCx,C.dCu,C.dCC,C.dCt,C.dCD,C.dCE,C.dCs,C.dCF,C.dCr,C.dCG,C.dCq,C.dCH,C.dCi,C.dCj,C.dCp,C.dCI,C.dCn,C.dCJ,C.dCm,C.dCy,C.dCl,C.dCz,C.dCh,C.dCA,C.dCB,C.dD2,C.dD3,C.dCS,C.dCT,C.dCU,C.dCV,C.dCW,C.dCX,C.dCY,C.dD9,C.dD0,C.fmj,C.d2U,C.d2S,C.d2T,C.d2V,C.d3y,C.d3n,C.d3k,C.d2X,C.d3o,C.d32,C.d33,C.d35,C.d3m,C.d31,C.d37,C.d3v,C.d3h,C.d3g,C.d3i,C.d3j,C.d3c,C.d3e,C.d3f,C.d38,C.d3r,C.d3u,C.d2Z,C.d3_,C.d5j,C.d5i,C.d5h,C.d5g,C.d5n,C.d5f,C.d5o,C.d3O,C.d3P,C.d3Q,C.d3T,C.d3M,C.d3L,C.cCS,C.cWh,C.cWu,C.cWt,C.cWJ,C.cWs,C.cWK,C.cWr,C.cWq,C.cWM,C.cWp,C.cWC,C.cWB,C.cWT,C.dQD,C.dQC,C.dQF,C.dQG,C.dQH,C.dQB,C.dQJ,C.dQI,C.dQ1,C.dQ2,C.dQ4,C.dPy,C.dPM,C.dPL,C.dPO,C.dPY,C.dPR,C.dPQ,C.dPS,C.dPP,C.dPT,C.dPU,C.dPX,C.dPm,C.dQ_,C.dPq,C.dPt,C.dPv,C.dQ5,C.dPB,C.dPz,C.dPD,C.dPE,C.dPA,C.dPF,C.dPJ,C.dQe,C.dQf,C.dQ7,C.dQa,C.dQb,C.dQc,C.dQh,C.dQ8,C.dPw,C.d3X,C.d3W,C.d40,C.d4a,C.d41,C.eH7,C.dk8,C.dk5,C.dk6,C.dkg,C.dkf,C.dke,C.dko,C.dkd,C.dkp,C.dkc,C.dkq,C.dkb,C.dkr,C.dka,C.dk9,C.dkk,C.dku,C.dkD,C.dQr,C.dQv,C.dQw,C.dQn,C.dQo,C.dQp,C.dQu,C.dQy,C.dQx,C.dQi,C.dQj,C.dQk,C.dQl,C.dQm,C.dCa,C.fCb,C.cdI,C.cX4,C.cX3,C.cX7,C.cX0,C.cX2,C.cuE,C.cuK,C.cuL,C.cuJ,C.cuN,C.cuI,C.cuF,C.cuG,C.cuR,C.f4k,C.f4l,C.eEi,C.eE9,C.eEa,C.eEb,C.eEd,C.eEe,C.eEh,C.eE4,C.eE7,C.eEj,C.eE5,C.eEm,C.eEn,C.eEo,C.eEp,C.eEl,C.eE_,C.eE0,C.eE1,C.eE3,C.eE2,C.eEI,C.eEJ,C.eEr,C.eEs,C.eEz,C.eEA,C.eEB,C.eEv,C.eEw,C.eEP,C.eEO,C.eEQ,C.eEN,C.eEq,C.eEu,C.eEL,C.eEK,C.eEF,C.eEG,C.eEE,C.eED])
u(A.ag,[C.an_,C.RQ,C.Yn,C.Yr,C.Yp,C.XY,C.ao5,C.ao_,C.Z0,C.ao3,C.Zl,C.Zm,C.a5c,C.Y_,C.XZ,C.Xx,C.a03,C.EZ,C.avH,C.aqZ,C.aqT,C.aqY,C.Nk])
u(A.ah,[C.aBf,C.bcw,C.ayi,C.bcR,C.ayj,C.ba6,C.aBQ,C.aBN,C.aAe,C.aBP,C.aBO,C.bhI,C.aJJ,C.ax4,C.ax3,C.avO,C.btI,C.aLS,C.aLT,C.aDk,C.bj4,C.aDj,C.bvt])
u(A.kd,[C.dCN,C.dCP,C.dCK,C.dD8,C.fok,C.bLB,C.d3x,C.d3w,C.d3d,C.d3s,C.d3t,C.d3U,C.dPV,C.dPG,C.dQg,C.d49,C.d48,C.d46,C.d4b,C.d4e,C.d4f,C.d4_,C.d43,C.d45,C.d4i,C.c63,C.c6b,C.c6g,C.dCb,C.fCd,C.fCc,C.f4h,C.f4i,C.eEf,C.eEM,C.cu5,C.fbR,C.f7A,C.foq,C.fli,C.fon,C.f8m,C.f8l,C.fcx])
t(C.bhp,C.aJJ)
u(A.m1,[C.aak,C.aI4,C.H_,C.ajm,C.cu6,C.cu7])
t(C.btG,C.aLS)
t(C.btH,C.aLT)
t(C.aDl,C.bvt)
t(C.b6P,A.b6E)
t(C.btJ,A.a4S)
t(C.b6O,C.btJ)
w(C.aJJ,A.eR)
w(C.aLS,A.c8)
w(C.aLT,A.c8)
v(C.bvt,A.ev)
v(C.btJ,A.iZ)})()
A.jS(b.typeUniverse,JSON.parse('{"aWW":{"au":[],"r":[]},"b8Y":{"aB":[]},"an_":{"ag":[],"r":[]},"aBf":{"ah":["an_"]},"RQ":{"ag":[],"r":[]},"ajl":{"au":[],"r":[]},"aSJ":{"au":[],"r":[]},"bcw":{"ah":["RQ"]},"Yn":{"ag":[],"r":[]},"Yr":{"ag":[],"r":[]},"Yp":{"ag":[],"r":[]},"XY":{"ag":[],"r":[]},"ayi":{"ah":["Yn"]},"bcR":{"ah":["Yr"]},"ayj":{"ah":["Yp"]},"XG":{"au":[],"r":[]},"ba8":{"aB":[]},"ba_":{"aB":[]},"ba6":{"ah":["XY"]},"aFi":{"aB":[]},"bfj":{"aB":[]},"b8m":{"au":[],"r":[]},"ao5":{"ag":[],"r":[]},"ao_":{"ag":[],"r":[]},"Z0":{"ag":[],"r":[]},"ac_":{"au":[],"r":[]},"aBQ":{"ah":["ao5"]},"aBN":{"ah":["ao_"]},"bcz":{"au":[],"r":[]},"bcC":{"aB":[]},"bgg":{"au":[],"r":[]},"bbH":{"aB":[]},"btQ":{"au":[],"r":[]},"bjB":{"au":[],"r":[]},"aAe":{"ah":["Z0"]},"abZ":{"au":[],"r":[]},"bgf":{"au":[],"r":[]},"abY":{"au":[],"r":[]},"bge":{"au":[],"r":[]},"aAf":{"au":[],"r":[]},"aGq":{"au":[],"r":[]},"Ja":{"au":[],"r":[]},"ao3":{"ag":[],"r":[]},"Zl":{"ag":[],"r":[]},"Zm":{"ag":[],"r":[]},"aBP":{"ah":["ao3"]},"bcA":{"au":[],"r":[]},"abg":{"au":[],"r":[]},"bcy":{"au":[],"r":[]},"bcD":{"au":[],"r":[]},"aBO":{"ah":["Zl"]},"bhI":{"ah":["Zm"]},"aWU":{"au":[],"r":[]},"a5c":{"ag":[],"r":[]},"bhp":{"ah":["a5c"]},"bho":{"aB":[]},"ar_":{"au":[],"r":[]},"Y_":{"ag":[],"r":[]},"XZ":{"ag":[],"r":[]},"Xx":{"ag":[],"r":[]},"a03":{"ag":[],"r":[]},"ax4":{"ah":["Y_"]},"ax3":{"ah":["XZ"]},"avO":{"ah":["Xx"]},"btI":{"ah":["a03"]},"EZ":{"ag":[],"r":[]},"avH":{"ag":[],"r":[]},"btG":{"ah":["EZ"]},"btH":{"ah":["avH"]},"btF":{"aB":[]},"aqZ":{"ag":[],"r":[]},"aDk":{"ah":["aqZ"]},"ack":{"au":[],"r":[]},"aqT":{"ag":[],"r":[]},"aqY":{"ag":[],"r":[]},"bj4":{"ah":["aqT"]},"aDj":{"ah":["aqY"]},"Nk":{"ag":[],"r":[]},"aDl":{"ah":["Nk"],"ev":[]},"b6O":{"iZ":[],"fd":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aPz"),Q:w("qL"),n:w("bq<n,n>"),c5:w("aRt"),dY:w("aRu"),d:w("eO<n?>"),e:w("GZ"),B:w("n4"),P:w("hV"),k:w("kw"),x:w("ay<~>"),f5:w("P<a24>"),V:w("P<ac>"),t:w("P<qL>"),O:w("P<w>"),ac:w("P<eO<n?>>"),I:w("P<n4>"),u:w("P<hV>"),_:w("P<kw>"),cl:w("P<ay<ak<a4<n,@>>>>"),R:w("P<n6>"),cq:w("P<ak<+(N,N)>>"),ez:w("P<a4<n,aC>>"),gE:w("P<a4<n,n>>"),c7:w("P<a4<n,@>>"),fD:w("P<mk>"),bp:w("P<o6>"),g:w("P<u>"),v:w("P<hn>"),L:w("P<+(n,n)>"),G:w("P<+(N,N)>"),bF:w("P<+count,id,name(G,n,n)>"),A:w("P<cP>"),s:w("P<n>"),aS:w("P<iO>"),p:w("P<r>"),C:w("P<fd>"),D:w("P<ld>"),fp:w("P<Jf>"),M:w("P<Jn>"),gZ:w("P<aFn>"),Y:w("P<adw>"),E:w("P<aHn>"),F:w("P<N>"),dC:w("P<G>"),dS:w("P<aB?>"),d4:w("P<n?>"),J:w("cp<ah<ag>>"),b:w("ak<n4>"),do:w("ak<hV>"),r:w("ak<kw>"),U:w("ak<a4<n,@>>"),gk:w("ak<+(n,n)>"),bC:w("ak<+count,id,name(G,n,n)>"),h:w("ak<n>"),c:w("ak<ld>"),j:w("ak<@>"),fK:w("bu<n,n>"),d2:w("bu<n,ak<a4<n,@>>>"),a:w("a4<n,@>"),f:w("a4<@,@>"),gv:w("K<n,H0>"),w:w("iz"),g2:w("r4"),bV:w("amT"),fL:w("cn"),K:w("aC"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(N,ak<hV>)"),cs:w("+count,id,name(G,n,n)"),N:w("n"),e7:w("bm<N>"),gc:w("dD"),b4:w("cw<G>"),W:w("ka<n>"),l:w("r"),cM:w("fd"),i:w("ld"),cc:w("Fb"),bw:w("abY<n?>"),cy:w("Jp"),q:w("mU"),y:w("R"),gR:w("N"),z:w("@"),S:w("G"),eK:w("ak<kw>?"),m:w("ao2?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,G)?"),X:w("+qrPayload,token,usesRemaining(n,n,G)?"),gF:w("+members,trees,viewOnly(G,G,R)?"),Z:w("pK?"),T:w("n?"),aD:w("dD?"),o:w("ld?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aVw=new A.bp(B.ha,B.bE,B.ha,B.bE)
D.a9c=new A.bp(B.ha,B.jZ,B.ha,B.jZ)
D.aVI=new A.bp(B.ig,B.bE,B.bE,B.bE)
D.aVM=new A.az(B.cY,1.4,B.r,-1)
D.aVW=new A.az(B.ad,1,B.r,-1)
D.aXl=new A.aY(0,1/0,64,1/0)
D.aXp=new A.aY(0,84,0,1/0)
D.awd=w([B.lw,B.qA,B.c],x.O)
D.bRF=new A.a7(B.ax,B.aD,B.x,D.awd,null,null)
D.aY9=new A.o(null,null,null,null,null,D.bRF,B.n)
D.cVO=w([B.aU,B.bT],x.O)
D.bTJ=new A.a7(B.b0,B.b6,B.x,D.cVO,null,null)
D.aYt=new A.o(null,null,null,null,null,D.bTJ,B.n)
D.b3B=new A.fh(null,null,null,null,null,E.jG,null,null,null,null)
D.aav=new A.cq(B.A,null,null,D.b3B,null)
D.k7=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eUl=new A.F(!0,D.k7,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc5=new A.x("No books on the shelf yet.",null,D.eUl,null,null,null,null,null,null,null,null,null)
D.e22=new A.C(B.nK,D.fc5,null)
D.b29=new A.cq(B.A,null,null,D.e22,null)
D.b31=new A.cq(B.A,null,null,Y.V_,null)
D.b51=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b5u=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.abB=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b85=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b8m=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.acM=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bc4=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bct=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.Eb=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.be2=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bgk=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.aen=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.f6M=new A.x("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.blv=new A.eO(null,D.f6M,B.f1,null,x.d)
D.fff=new A.x("None",null,null,null,null,null,null,null,null,null,null,null)
D.blx=new A.eO(null,D.fff,B.f1,null,x.d)
D.bm4=new A.b9(38e5)
D.bmP=new A.i9(0,10,0,10)
D.bmZ=new A.Q(0,1,0,0)
D.bn8=new A.i9(0,4,0,4)
D.bnq=new A.Q(10,10,14,10)
D.bnC=new A.i9(10,4,10,4)
D.bnK=new A.i9(10,8,10,8)
D.bnL=new A.Q(10,8,8,8)
D.boc=new A.Q(12,6,12,2)
D.bou=new A.Q(14,10,6,6)
D.bov=new A.Q(14,12,14,0)
D.boz=new A.Q(14,12,14,8)
D.boC=new A.Q(14,12,8,14)
D.boG=new A.i9(14,14,14,14)
D.bpk=new A.Q(16,2,16,10)
D.bpu=new A.Q(16,6,16,30)
D.bpw=new A.Q(16,6,16,8)
D.agF=new A.Q(18,16,18,8)
D.bq6=new A.Q(18,20,18,22)
D.agJ=new A.Q(18,24,18,24)
D.bqc=new A.Q(18,30,18,30)
D.bqu=new A.Q(20,10,12,20)
D.bqI=new A.Q(20,18,16,18)
D.bqK=new A.Q(20,18,20,6)
D.bry=new A.Q(24,32,24,28)
D.brz=new A.Q(24,36,24,32)
D.brD=new A.Q(26,26,24,14)
D.brR=new A.Q(2,4,2,8)
D.brV=new A.Q(30,0,30,0)
D.bs5=new A.Q(38,22,22,22)
D.ah0=new A.Q(40,24,24,24)
D.bs7=new A.i9(40,40,40,40)
D.bs9=new A.Q(46,30,30,30)
D.ah3=new A.Q(4,0,0,8)
D.bsA=new A.Q(56,40,40,40)
D.bsE=new A.Q(1.25,1.25,1.25,1.25)
D.bsF=new A.Q(60,0,60,0)
D.bsI=new A.Q(6,14,6,16)
D.bsU=new A.i9(7,3,7,3)
D.btp=new A.Q(5,1.5,5,1.5)
D.btA=new A.Q(6,2.5,6,2.5)
D.fqR=new A.x("Signature",null,B.nh,null,null,null,null,null,null,null,null,null)
D.btV=new A.bF(1,B.bj,D.fqR,null)
D.fo2=new A.x("Tell the AI what to fix",null,B.du,null,null,null,null,null,null,null,null,null)
D.buC=new A.bF(1,B.bj,D.fo2,null)
D.f0x=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpZ=new A.x("Worksheets",null,D.f0x,null,null,null,null,null,null,null,null,null)
D.f0F=new A.F(!0,E.ab9,null,null,null,null,13,B.cs,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foU=new A.x("Track your project spending",null,D.f0F,null,null,null,null,null,null,null,null,null)
D.cOc=w([D.fpZ,B.at,D.foU],x.p)
D.bj3=new A.fp(B.ai,B.e,B.j,B.F,null,B.p,null,0,D.cOc,null)
D.buH=new A.bF(1,B.bj,D.bj3,null)
D.eWS=new A.F(!0,E.jG,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6_=new A.x("FAMILY LIBRARY",null,D.eWS,null,null,null,null,null,null,null,null,null)
D.buY=new A.bF(1,B.bj,D.f6_,null)
D.LZ=new C.GZ("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.YR=new C.H_(0,"male")
D.ahV=new C.H_(1,"female")
D.xv=new C.H_(2,"unknown")
D.tr=new C.ajm(0,"owner")
D.M_=new C.ajm(1,"editor")
D.kf=new C.ajm(2,"viewer")
D.aiH=new A.a0(61199,"MaterialIcons",!1)
D.byT=new A.a0(61504,"MaterialIcons",!1)
D.byU=new A.a0(61505,"MaterialIcons",!1)
D.byW=new A.a0(61587,"MaterialIcons",!1)
D.bz1=new A.a0(61890,"MaterialIcons",!1)
D.bzV=new A.a0(63034,"MaterialIcons",!0)
D.bAK=new A.a0(63429,"MaterialIcons",!1)
D.akY=new A.a0(984520,"MaterialIcons",!1)
D.bzr=new A.a0(62776,"MaterialIcons",!1)
D.bD4=new A.ae(D.bzr,26,B.aZ,null,null,null)
D.bxS=new A.a0(57648,"MaterialIcons",!1)
D.bDm=new A.ae(D.bxS,14,B.c,null,null,null)
D.bDD=new A.ae(B.Fn,17,null,null,null,null)
D.bE8=new A.ae(E.ZK,null,null,null,null,null)
D.bEb=new A.ae(B.ja,18,E.jG,null,null,null)
D.Zw=new A.a0(62044,"MaterialIcons",!1)
D.bEh=new A.ae(D.Zw,null,B.aU,null,null,null)
D.bF6=new A.ae(B.dW,16,null,null,null,null)
D.bFd=new A.ae(D.Zw,32,B.aU,null,null,null)
D.bFv=new A.ae(E.aiI,18,B.cY,null,null,null)
D.bGy=new A.ae(B.Fx,22,B.aB,null,null,null)
D.bGK=new A.ae(B.dW,22,B.aZ,null,null,null)
D.bGV=new A.ae(P.ZB,22,B.c,null,null,null)
D.bH_=new A.ae(B.tA,52,B.c,null,null,null)
D.bH9=new A.ae(B.Fx,30,B.aB,null,null,null)
D.alA=new A.ae(B.tJ,22,B.c,null,null,null)
D.bHB=new A.ae(B.dW,17,null,null,null,null)
D.bHU=new A.ae(B.vn,26,B.cY,null,null,null)
D.bID=new A.ae(B.ZW,16,null,null,null,null)
D.bJm=new A.ae(B.tA,24,B.c,null,null,null)
D.bJr=new A.ae(B.Mr,20,B.r4,null,null,null)
D.bJw=new A.ae(B.Fl,null,B.bT,null,null,null)
D.bJD=new A.ae(B.ja,18,B.c,null,null,null)
D.bKe=new A.ae(B.cy,22,B.ad,null,null,null)
D.bL3=new A.ae(B.e4,16,B.ad,null,null,null)
D.bLf=new A.ae(D.Zw,20,B.aU,null,null,null)
D.am0=new A.ae(B.hx,20,null,null,null,null)
D.bLK=new A.ae(B.cy,18,D.k7,null,null,null)
D.bM1=new A.ae(B.xR,28,B.c,null,null,null)
D.bM9=new A.ae(B.Mh,null,B.fV,null,null,null)
D.bMt=new A.ae(B.xR,24,B.c,null,null,null)
D.bMU=new A.ae(B.tA,null,B.aU,null,null,null)
D.bMV=new A.ae(B.ju,20,B.cY,null,null,null)
D.bNe=new A.ae(B.Fn,16,null,null,null,null)
D.bOL=new A.e0(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jO,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ev,!0,null,null,null,null)
D.d1P=w([B.bs,B.aU,B.f6,B.aZ],x.O)
D.bQ7=new A.a7(B.ax,B.aD,B.x,D.d1P,null,null)
D.bd_=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bi8=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cLe=w([D.bd_,D.bi8],x.O)
D.bQi=new A.a7(B.b0,B.b6,B.x,D.cLe,null,null)
D.cXw=w([B.eX,B.fu,B.f6],x.O)
D.bQm=new A.a7(B.ax,B.aD,B.x,D.cXw,null,null)
D.adm=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b5v=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cN8=w([D.adm,D.b5v],x.O)
D.bQV=new A.a7(B.b0,B.b6,B.x,D.cN8,null,null)
D.b8x=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.avE=w([D.b8x,D.adm],x.O)
D.bRe=new A.a7(B.ax,B.aD,B.x,D.avE,null,null)
D.aco=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.bax=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cWI=w([D.aco,D.bax],x.O)
D.bRQ=new A.a7(B.a3,B.a7,B.x,D.cWI,null,null)
D.d7M=w([B.bL,B.mM],x.O)
D.bRS=new A.a7(B.b0,B.b6,B.x,D.d7M,null,null)
D.bcW=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.d8D=w([D.bcW,D.k7,D.k7,Aj.Wj],x.O)
D.daN=w([0,0.07,0.9,1],x.F)
D.bSl=new A.a7(B.a3,B.a7,B.x,D.d8D,D.daN,null)
D.bSw=new A.a7(B.ax,B.aD,B.x,B.PW,null,null)
D.d7n=w([B.aZ,B.aU,B.bT],x.O)
D.bTv=new A.a7(B.ax,B.aD,B.x,D.d7n,null,null)
D.cdT=w([B.bs,B.aZ,B.eX],x.O)
D.ce_=w([B.by,B.aE,B.jm],x.O)
D.ce1=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bbB=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.ck5=w([D.bbB,E.ad4],x.O)
D.dYU=new A.u(1,2)
D.eG7=new A.cP(B.aX,D.dYU,3)
D.asM=w([D.eG7],x.A)
D.crj=w([B.fZ,B.c8,B.f5],x.O)
D.ctX=w([B.bI,B.bw,B.bl],x.O)
D.bvq=new C.tZ("classic","Classic leather","Gold-edged brown leather",D.avE,E.jG,E.jG,"\u2766",B.L,!0,!1,!1,!1)
D.b4P=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bh8=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cPK=w([D.b4P,D.bh8],x.O)
D.ad7=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bvl=new C.tZ("ornate","Ornate gold","Double gold border and flourishes",D.cPK,D.ad7,D.ad7,"\u2726",B.L,!0,!0,!0,!1)
D.b8d=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bdH=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cIh=w([D.b8d,D.bdH],x.O)
D.bvk=new C.tZ("parchment","Parchment","Old paper with dark ink",D.cIh,D.Eb,G.ip,"\u2767",B.L,!0,!1,!1,!0)
D.aaT=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bfF=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.d5O=w([D.aaT,D.bfF],x.O)
D.bba=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bf3=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bvn=new C.tZ("minimal","Clean paper","Plain and elegant, like a printed book",D.d5O,D.bba,D.bf3,"",B.L,!0,!0,!1,!0)
D.bvp=new C.tZ("midnight","Midnight","Deep blue with silver stars",L.avW,B.cn,B.bN,"\u2727",B.L,!0,!0,!1,!1)
D.bvj=new C.tZ("emerald","Emerald library","Green cloth, title on the left",Z.atb,E.jG,B.h_,"\u25c6",B.bg,!0,!1,!1,!1)
D.bg2=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.d4f=w([B.ew,D.bg2],x.O)
D.bcc=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.bdi=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bvo=new C.tZ("rose","Rose vintage","Burgundy with rose-gold lettering",D.d4f,D.bcc,D.bdi,"\u2740",B.L,!0,!1,!0,!1)
D.d8g=w([B.cC,O.mN],x.O)
D.bvm=new C.tZ("modern","Modern","Dark, bold, left-aligned",D.d8g,B.aW,B.c,"",B.bg,!1,!0,!1,!1)
D.a0Q=w([D.bvq,D.bvl,D.bvk,D.bvn,D.bvp,D.bvj,D.bvo,D.bvm],A.ax("P<tZ>"))
D.cHO=w([B.bT,B.bi],x.O)
D.bcM=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cIt=w([D.aaT,D.bcM],x.O)
D.b8a=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cK0=w([D.b8a,B.db],x.O)
D.cLs=w([B.b7,B.iH,B.oe],x.O)
D.cLP=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b5r=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.b9T=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.daJ=w([D.aco,D.b5r,D.b9T],x.O)
D.bvr=new C.u_("leather","Leather",D.daJ,"vintage")
D.cSD=w([B.dp,B.Km,A3.Vu],x.O)
D.bvy=new C.u_("midnight","Midnight",D.cSD,"starry")
D.cLt=w([B.ff,B.ec,B.l0],x.O)
D.bvx=new C.u_("forest","Forest",D.cLt,"story")
D.dcz=w([B.eM,B.ew,B.k8],x.O)
D.bvu=new C.u_("burgundy","Burgundy",D.dcz,"royal")
D.ctx=w([B.aE,B.pe,B.nq],x.O)
D.bvv=new C.u_("royal","Royal",D.ctx,"royal")
D.cNJ=w([B.bw,B.cC,O.mN],x.O)
D.bvs=new C.u_("charcoal","Charcoal",D.cNJ,"geo")
D.daR=w([B.cb,B.dO,B.wQ],x.O)
D.bvw=new C.u_("sunset","Sunset",D.daR,"sunset")
D.dbu=w([B.iH,B.Ec,B.Vy],x.O)
D.bvt=new C.u_("ocean","Ocean",D.dbu,"band")
D.yn=w([D.bvr,D.bvy,D.bvx,D.bvu,D.bvv,D.bvs,D.bvw,D.bvt],A.ax("P<u_>"))
D.cO6=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cOC=w([B.ak,B.aK,B.M],x.O)
D.cPP=w([B.ew,B.ec,B.dp,B.fv,B.wT,B.cY,B.jJ,B.es,B.da],x.O)
D.cPQ=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eG8=new A.cP(B.dn,B.dB,8)
D.cPZ=w([D.eG8],x.A)
D.cR0=w([B.bZ,B.dO,B.kC],x.O)
D.cRs=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cSz=w([B.bZ,B.hd],x.O)
D.cUu=w([B.aM,B.A9,B.wI],x.O)
D.cVk=w([B.bJ,B.cr,B.dy,B.aM],x.O)
D.cVP=w([B.j_,B.cb,B.rU],x.O)
D.cWh=w([B.eX,B.cY],x.O)
D.cWN=w([B.cv,B.fC,B.ht],x.O)
D.cWY=w([B.aW,B.bi,B.dp],x.O)
D.cXt=w([B.ex,B.d_,B.ec],x.O)
D.cXK=w([B.dS,B.dp,B.Km],x.O)
D.cYZ=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a1J=w(["leather","linen","plain","stars","rays"],x.s)
D.bCL=new A.a0(985219,"MaterialIcons",!1)
D.bCj=new A.a0(983781,"MaterialIcons",!1)
D.avo=w([B.aj6,B.hY,B.lD,B.hZ,D.bCL,B.FH,B.pz,D.bCj,L.akL,B.xT,B.pB,B.mf],A.ax("P<a0>"))
D.a1O=w(["double","single","corners","none"],x.s)
D.d0B=w([B.dL,B.bo,B.es],x.O)
D.d0O=w([],x.t)
D.BJ=w([],x.u)
D.d2X=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.d57=w([B.aI,B.fC,B.fv],x.O)
D.d6o=w([B.cp,B.og,B.Wt],x.O)
D.d6B=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dp3=new C.lu("construction","Construction","Jobsite & builds",B.xI)
D.dpa=new C.lu("house","Home Build","Houses & rooms",B.vi)
D.dp0=new C.lu("grocery","Grocery","Store & pantry",B.a_s)
D.dp_=new C.lu("calculator","Calculations","Math & estimates",B.MC)
D.dp8=new C.lu("lumber","Materials","Lumber & supplies",B.MT)
D.doX=new C.lu("kitchen","Kitchen","Remodel & meals",A9.ajV)
D.bCg=new A.a0(983756,"MaterialIcons",!1)
D.dp1=new C.lu("landscape","Landscaping","Yard & garden",D.bCg)
D.doW=new C.lu("plumbing","Plumbing","Pipes & water",B.pK)
D.dpb=new C.lu("electrical","Electrical","Wiring & power",B.h4)
D.doU=new C.lu("store","Retail Shop","Daily business",B.kJ)
D.doV=new C.lu("paint_remodel","Paint & Remodel","Colors & walls",Aa.a_1)
D.bBG=new A.a0(983311,"MaterialIcons",!1)
D.dp7=new C.lu("roofing","Roofing","Roofs & exteriors",D.bBG)
D.bCt=new A.a0(983986,"MaterialIcons",!1)
D.doT=new C.lu("warehouse","Warehouse","Storage & stock",D.bCt)
D.dp5=new C.lu("vehicles","Vehicles","Fleet & transport",B.FI)
D.bzt=new A.a0(62785,"MaterialIcons",!1)
D.doZ=new C.lu("farm","Farm","Crops & livestock",D.bzt)
D.doY=new C.lu("restaurant","Restaurant","Food & catering",B.tH)
D.dp4=new C.lu("tools","Tools","Workshop gear",B.FE)
D.dp9=new C.lu("wallet","Cash & Wallet","Quick spending",B.ju)
D.bAF=new A.a0(63395,"MaterialIcons",!1)
D.dp6=new C.lu("concrete","Concrete","Foundation work",D.bAF)
D.dp2=new C.lu("blueprint","Blueprint","Plans & design",Ae.ajc)
D.a2e=w([D.dp3,D.dpa,D.dp0,D.dp_,D.dp8,D.doX,D.dp1,D.doW,D.dpb,D.doU,D.doV,D.dp7,D.doT,D.dp5,D.doZ,D.doY,D.dp4,D.dp9,D.dp6,D.dp2],A.ax("P<lu>"))
D.d74=w([B.bq,B.bo],x.O)
D.d7N=w([B.i3,B.nu,B.dD],x.O)
D.a2m=w(["top","middle","bottom"],x.s)
D.da7=w([B.ct,B.bi,B.dp],x.O)
D.daE=w([B.bc,B.d_,B.ec],x.O)
D.dcu=w([B.bI,B.ak],x.O)
D.dcv=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dWB={top:0,middle:1,bottom:2}
D.dfG=new A.bq(D.dWB,["Top","Middle","Bottom"],x.n)
D.dWf={double:0,single:1,corners:2,none:3}
D.dfL=new A.bq(D.dWf,["Double line","One line","Corners","None"],x.n)
D.dXm={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dh8=new A.bq(D.dXm,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dhk=new A.bq(B.ic,[],A.ax("bq<G,+(n,n)>"))
D.dWt={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.BU=new A.bq(D.dWt,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bq<n,G>"))
D.djD=new F.Me(32,null)
D.djE=new F.Me(40,null)
D.djF=new F.Me(46,null)
D.aEs=new C.aqY(null)
D.dZR=new A.u(8,14)
D.fcI=new A.x("Write a new book",null,B.jh,null,B.L,null,null,null,null,null,null,null)
D.e1x=new A.C(B.l4,D.fcI,null)
D.alb=new A.ae(B.hw,18,B.c,null,null,null)
D.f6k=new A.x("Add",null,B.mv,null,null,null,null,null,null,null,null,null)
D.cVz=w([D.alb,B.q0,D.f6k],x.p)
D.eE5=new A.co(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.cVz,null)
D.e1R=new A.C(B.or,D.eE5,null)
D.e1S=new A.C(E.afw,Y.V_,null)
D.f0s=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9i=new A.x("New Project",null,D.f0s,null,null,null,null,null,null,null,null,null)
D.cZk=w([D.alb,B.ab,D.f9i],x.p)
D.eE8=new A.co(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.cZk,null)
D.e21=new A.C(B.iO,D.eE8,null)
D.fbx=new A.x("Choose your header",null,T.vZ,null,null,null,null,null,null,null,null,null)
D.e2m=new A.C(B.hI,D.fbx,null)
D.b3Q=new A.fh(2.2,null,null,null,null,B.cY,null,null,null,null)
D.eIL=new A.a6(22,22,D.b3Q,null)
D.b25=new A.cq(B.A,null,null,D.eIL,null)
D.e2r=new A.C(B.Xo,D.b25,null)
D.boP=new A.Q(14,2,14,6)
D.foD=new A.x("The top of your book. Tap a design to see it.",null,S.SB,null,null,null,null,null,null,null,null,null)
D.e2s=new A.C(D.boP,D.foD,null)
D.e4_=new A.iM(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.e42=new A.iM(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aFG=new A.iM(1,0.9607843137254902,0.48627450980392156,0)
D.HI=new A.iM(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.yU=new A.iM(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.e48=new A.iM(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fIR=new C.bfj(null)
D.bjX=new A.ma(D.fIR,null,B.au,null,null)
D.aJj=new A.cK(0,0,0,0,null,null,D.bjX,null)
D.eqS=new A.z(-42,42)
D.ez6=new A.cL([0,0,1,1])
D.aKA=new A.aa(0,0,520,160)
D.aKN=new A.b7(B.rC,B.Y)
D.foa=new A.x("Let the AI write it from your tree",null,B.ks,null,B.L,null,null,null,null,null,null,null)
D.bw4=new A.dm(1,B.ci,D.foa,null)
D.cSy=w([E.a_V,B.ab,D.bw4],x.p)
D.eDO=new A.co(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.cSy,null)
D.f60=new A.x("Save member",null,B.cc,null,null,null,null,null,null,null,null,null)
D.d5o=w([D.am0,B.ab,D.f60],x.p)
D.eDW=new A.co(B.aQ,B.ba,B.j,B.m,null,B.p,null,0,D.d5o,null)
D.bGP=new A.ae(B.hJ,14,B.aZ,null,null,null)
D.eVy=new A.F(!0,B.aZ,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9I=new A.x("Cashier",null,D.eVy,null,null,null,null,null,null,null,null,null)
D.cZQ=w([D.bGP,B.bp,D.f9I],x.p)
D.eDY=new A.co(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.cZQ,null)
D.f61=new A.x("Transfer & settings",null,B.du,null,null,null,null,null,null,null,null,null)
D.but=new A.bF(1,B.bj,D.f61,null)
D.cKY=w([D.alA,B.aw,D.but],x.p)
D.eDZ=new A.co(B.aQ,B.e,B.j,B.m,null,B.p,null,0,D.cKY,null)
D.eHv=new A.at(16,40)
D.eHA=new A.at(22,64)
D.eHH=new A.at(280,88)
D.eIr=new A.a6(30,null,null,null)
D.eJJ=new A.hI(2,12,12,1.05,null)
D.f9o=new A.x("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eKr=new A.b1(D.f9o,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f9D=new A.x("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aMC=new A.b1(D.f9D,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fhu=new A.x("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eKV=new A.b1(D.fhu,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.frp=new A.x("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eL_=new A.b1(D.frp,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fbv=new A.x("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eL6=new A.b1(D.fbv,null,null,null,null,null,null,null,null,null,null,null,null,B.fP,!1,null,null,null,B.q,null)
D.foQ=new A.x("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aMG=new A.b1(D.foQ,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f6B=new A.x("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eLw=new A.b1(D.f6B,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fs3=new A.x("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eMf=new A.b1(D.fs3,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fn9=new A.x("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eME=new A.b1(D.fn9,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.frt=new A.x("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eMH=new A.b1(D.frt,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fj0=new A.x("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eMJ=new A.b1(D.fj0,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fdi=new A.x("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eMK=new A.b1(D.fdi,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fdj=new A.x("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eNK=new A.b1(D.fdj,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f9q=new A.x("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eO1=new A.b1(D.f9q,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fbc=new A.x("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eOk=new A.b1(D.fbc,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fiw=new A.x("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eOA=new A.b1(D.fiw,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fe5=new A.x("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eOB=new A.b1(D.fe5,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.eRz=new A.F(!0,D.k7,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRZ=new A.F(!0,D.k7,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSB=new A.rn(!0,B.rd,null,null,null,null,B.dr,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSS=new A.F(!0,D.k7,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTp=new A.F(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a6B=new A.rn(!0,B.Rh,null,null,null,null,B.dr,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUo=new A.F(!0,B.M,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUM=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWj=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWn=new A.F(!0,G.ip,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXC=new A.F(!0,B.M,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYj=new A.F(!0,B.M,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ1=new A.F(!0,B.bT,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ5=new A.F(!0,B.bL,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZr=new A.F(!0,D.Eb,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZA=new A.F(!0,B.aZ,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_y=new A.F(!0,B.cY,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f01=new A.F(!0,B.bT,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0q=new A.F(!0,B.aZ,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1R=new A.F(!0,B.ak,null,null,null,null,11.5,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1Z=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOO=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a73=new A.F(!0,B.ak,null,null,null,null,12,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3E=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f41=new A.F(!0,G.ip,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f48=new A.F(!0,G.ip,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4T=new A.x("Themes",null,B.oU,null,null,null,null,null,null,null,null,null)
D.f5u=new A.x("Add Item",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eW2=new A.F(!0,B.M,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5R=new A.x("Debt receipt",null,D.eW2,null,B.L,null,null,null,null,null,null,null)
D.aOJ=new A.F(!0,B.ak,null,null,null,null,11,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f67=new A.x("Person who owes",null,D.aOJ,null,null,null,null,null,null,null,null,null)
D.f73=new A.x("Notes",null,B.a6I,null,null,null,null,null,null,null,null,null)
D.f7t=new A.x("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.eV3=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7x=new A.x("Share",null,D.eV3,null,null,null,null,null,null,null,null,null)
D.f8q=new A.x("Move your family trees",null,D.aOO,null,null,null,null,null,null,null,null,null)
D.f90=new A.x("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.f9C=new A.x("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.faN=new A.x("Remove this book?",null,B.hn,null,null,null,null,null,null,null,null,null)
D.aPd=new A.x("Download",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fbT=new A.x("What should the AI do?",null,B.du,null,null,null,null,null,null,null,null,null)
D.fde=new A.x("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fek=new A.x("Ribbon bookmark",null,B.iD,null,null,null,null,null,null,null,null,null)
D.f1L=new A.F(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feN=new A.x("NGMY.ORG",null,D.f1L,null,B.L,null,null,null,null,null,null,null)
D.fg1=new A.x("Scan family tree QR",null,B.cu,null,null,null,null,null,null,null,null,null)
D.eZj=new A.F(!0,B.c,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgL=new A.x("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.eZj,null,B.L,null,null,null,null,null,null,null)
D.fhW=new A.x("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fi2=new A.x("Thumbnail",null,B.oU,null,null,null,null,null,null,null,null,null)
D.fiC=new A.x("Save the cover",null,B.cu,null,null,null,null,null,null,null,null,null)
D.fj1=new A.x("Your photos",null,B.oU,null,null,null,null,null,null,null,null,null)
D.fjg=new A.x("Create Project",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fjI=new A.x("Design your cover",null,T.vZ,null,null,null,null,null,null,null,null,null)
D.fjO=new A.x("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fjR=new A.x("PICTURE",null,H.mw,null,null,null,null,null,null,null,null,null)
D.fkc=new A.x("Paid",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fke=new A.x("You can undo it right after.",null,S.SK,null,null,null,null,null,null,null,null,null)
D.fkK=new A.x("Print",null,B.uk,null,null,null,null,null,null,null,null,null)
D.fl5=new A.x("Amount owed",null,D.aOJ,null,null,null,null,null,null,null,null,null)
D.fli=new A.x("Got it",null,B.cc,null,null,null,null,null,null,null,null,null)
D.flS=new A.x("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.flV=new A.x("Add to budget",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fmk=new A.x("Debtor signature",null,B.a6I,null,null,null,null,null,null,null,null,null)
D.fms=new A.x("Change icon",null,E.aO1,null,null,null,null,null,null,null,null,null)
D.fnB=new A.x("Family tree QR",null,B.cu,null,null,null,null,null,null,null,null,null)
D.fo0=new A.x("Download",null,B.uk,null,null,null,null,null,null,null,null,null)
D.fo4=new A.x("Change",null,B.oU,null,null,null,null,null,null,null,null,null)
D.foW=new A.x("Clear all",null,B.cc,null,null,null,null,null,null,null,null,null)
D.foZ=new A.x("WHAT SHOULD IT CHANGE?",null,H.mw,null,null,null,null,null,null,null,null,null)
D.fpy=new A.x("COLOUR",null,H.mw,null,null,null,null,null,null,null,null,null)
D.fpK=new A.x("Do it",null,B.cu,null,null,null,null,null,null,null,null,null)
D.fpN=new A.x("Create Tree",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fqL=new A.x("Create Family Tree",null,B.eV,null,null,null,null,null,null,null,null,null)
D.eQy=new A.F(!0,E.jG,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr0=new A.x("Write the first page myself",null,D.eQy,null,null,null,null,null,null,null,null,null)
D.frw=new A.x("Use this header",null,B.cu,null,null,null,null,null,null,null,null,null)
D.frC=new A.x("Create Project",null,E.aOt,null,null,null,null,null,null,null,null,null)
D.fFt=new C.aak(1,"header")
D.a7S=new C.aak(2,"projects")
D.fFu=new C.aak(3,"cashier")
D.a7T=new C.aak(4,"familyTree")
D.fQM=new C.cu6(0,"start")
D.fQN=new C.cu7(0,"start")
D.fFL=new C.Xx(null)
D.fGK=new C.XZ(null)
D.dhh=new A.bq(B.ic,[],A.ax("bq<n,Fb>"))
D.d19=w([],x.E)
D.d1a=w([],x.M)
D.fHg=new C.bcB(D.dhh,D.d19,D.d1a,0,0,null,null)
D.fJv=new C.Zm(null)
D.a8A=new C.aI4(0,"projects")
D.aTa=new C.aI4(1,"cashier")
D.fOJ=new C.aI4(2,"familyTree")})()};
(a=>{a["XH1Jfm7UJQfMyr5drKOM1693YOY="]=a.current})($__dart_deferred_initializers__);