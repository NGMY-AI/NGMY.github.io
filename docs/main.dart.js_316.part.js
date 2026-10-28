((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,N,R,A2,G,F,E,A3,A4,A5,A6,S,T,A7,A8,M,A9,H,Aa,Ab,U,V,W,Ac,Ad,X,Ae,Af,Ag,Y,Ah,Ai,K,Aj,Z,A_,O,P,L,Q,C={
bCi(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bCi=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vf(null,""),$async$bCi)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.V(y.j)
t=A.n3(b1)
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
return A.b(A.qM(t,a1,B.hp,E.F1),$async$bCi)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Q7(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.V(l!=null&&A.KO(l)?y.l:y.i)
for(j=J.a6(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cA
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a1W(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCi,v)},
agu(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$agu=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vf(null,""),$async$agu)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.V(y.j)
t=A.n3(b6)
s=x.S
r=A.dd(c1,0,A.dJ(4,"count",s),A.U(c1).c)
q=F.a1J(new A.K(r,new C.fym(),r.$ti.k("K<ak.E,n>")).aI(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fyl(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.R.ao(b7,null)+"\nAllowed values: style one of "+B.d.aI(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$agu)
case 6:l=c5
k=F.Q7(l==null?"":l)
if(k==null)throw A.V("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.anH(s,D.dm4,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
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
return A.b(m.$1(f+B.R.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$agu)
case 10:l=c5
k=l==null?null:F.Q7(l)
if(k==null)throw A.V(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d9(a8,d),a5=J.aV(a2.a),a2=a2.$ti,a7=new A.l_(a5,a2.k("l_<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gS(a5))
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
h.n(0,i,new A.z(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("bc<2>")
p=A.cF(new A.bc(h,s),new C.fyn(),s.k("J.E"),p)
p=F.a1J(A.pb(p,3,A.a3(p).k("J.E")).aI(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.C(new A.cu(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a1W(s,b9),$async$agu)
case 13:b5=c5
for(s=J.a6(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.anH(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agu,v)},
hmS(d,e,f){return A.ca(null,B.w.j(0.65),!1,null,new C.fHx(e,f),d,null,!0,!0,x.g2)},
anH:function anH(d,e,f){this.a=d
this.b=e
this.c=f},
fym:function fym(){},
fyl:function fyl(d){this.a=d},
fyn:function fyn(){},
fHx:function fHx(d,e){this.a=d
this.b=e},
bA7(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bA7=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b4(b1,new C.fnn())){u=null
w=1
break}t=B.d.d7(b1,new C.fno())
s=$.W()
r=new A.qW()
q=A.Da(r,D.aM0)
p=A.N()
p.r=B.c.gp(0)
q.aY(D.aM0,p)
o=A.N()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bP
o.e=B.fB
n=new C.fnt(t)
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
if(a8!=null)a7.bA(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bA(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aP(a3,o)}else{p=A.a([],x.v)
a3=new A.aO(s.r,B.ap,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.L)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.b5(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bA(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bA(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aP(a3,o)}w=4
return A.b(r.pD().zf(520,160),$async$bA7)
case 4:w=3
return A.b(b3.hr(B.fY),$async$bA7)
case 3:b0=b3
u=b0==null?null:J.eT(B.dD.gaM(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bA7,v)},
fw2(d){return C.i0j(d)},
i0j(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fw2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bf7()
n=d.x!=null&&d.yW(null).length===0
if(d.x!=null)t=n?D.zd:D.I1
else t=d.gTi()?D.I1:D.aH5
w=3
return A.b(C.bA7(d.ax),$async$fw2)
case 3:s=f
p.a=null
if(s!=null)p.a=A.amq(s)
r=A.a3U(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aH5}else{p.c=C.wG(q,!0)
p.b=n?D.zd:D.I1}r.a2x(A.fRH(new C.fw4(p,d,new C.fw5(),t,n,o),null,D.buT,B.wa))
u=r.k6(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fw2,v)},
fCG(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fCG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fw2(d),$async$fCG)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aK(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A8.Gp(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fCG,v)},
fnn:function fnn(){},
fno:function fno(){},
fnt:function fnt(d){this.a=d},
fw5:function fw5(){},
fw4:function fw4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fw3:function fw3(){},
fHZ(d,e){var w=0,v=A.j(x.H)
var $async$fHZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,B.w.j(0.55),!0,null,new C.fI2(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fHZ)
case 2:return A.h(null,v)}})
return A.i($async$fHZ,v)},
bCL(d,e,f,g){return C.i7M(d,e,f,g)},
i7M(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bCL=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gal(e.split(",")):e
r=B.cG.aJ(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.T(D.eVD)
w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.fHV(g,r,f),d,null,!0,!0,x.H),$async$bCL)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bCL,v)},
fI3(d,e){var w=0,v=A.j(x.H)
var $async$fI3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,null,!0,null,new C.fI6(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fI3)
case 2:return A.h(null,v)}})
return A.i($async$fI3,v)},
aXS:function aXS(d,e){this.c=d
this.a=e},
c1d:function c1d(){},
b9Z:function b9Z(d,e){this.b=d
this.a=e},
fI2:function fI2(d,e){this.a=d
this.b=e},
fI_:function fI_(d){this.a=d},
fI0:function fI0(d,e,f){this.a=d
this.b=e
this.c=f},
fI1:function fI1(d,e){this.a=d
this.b=e},
fHV:function fHV(d,e,f){this.a=d
this.b=e
this.c=f},
fHT:function fHT(d){this.a=d},
fHU:function fHU(d,e,f){this.a=d
this.b=e
this.c=f},
fI6:function fI6(d,e){this.a=d
this.b=e},
fI4:function fI4(d){this.a=d},
fI5:function fI5(d,e,f){this.a=d
this.b=e
this.c=f},
fr_(d,e){var w=0,v=A.j(x.y),u,t
var $async$fr_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1u(d),$async$fr_)
case 3:t=g
J.np(t,new C.fr0(e))
u=A.ah8(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fr_,v)},
fr0:function fr0(d){this.a=d},
anO:function anO(d,e,f){this.c=d
this.d=e
this.a=f},
aC4:function aC4(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dFu:function dFu(d,e){this.a=d
this.b=e},
dFf:function dFf(d,e){this.a=d
this.b=e},
dFi:function dFi(d,e,f){this.a=d
this.b=e
this.c=f},
dFh:function dFh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dFg:function dFg(d,e){this.a=d
this.b=e},
dFj:function dFj(d,e){this.a=d
this.b=e},
dFd:function dFd(){},
dFe:function dFe(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dFc:function dFc(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dEY:function dEY(d){this.a=d},
dEZ:function dEZ(d,e,f){this.a=d
this.b=e
this.c=f},
dF_:function dF_(d,e){this.a=d
this.b=e},
dEX:function dEX(d){this.a=d},
dF4:function dF4(d,e){this.a=d
this.b=e},
dEW:function dEW(d){this.a=d},
dF5:function dF5(d,e,f){this.a=d
this.b=e
this.c=f},
dF6:function dF6(d,e,f){this.a=d
this.b=e
this.c=f},
dEV:function dEV(d,e){this.a=d
this.b=e},
dF7:function dF7(d,e,f){this.a=d
this.b=e
this.c=f},
dEU:function dEU(d,e){this.a=d
this.b=e},
dF8:function dF8(d,e){this.a=d
this.b=e},
dET:function dET(d){this.a=d},
dF9:function dF9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dER:function dER(){},
dEL:function dEL(d){this.a=d},
dEM:function dEM(d){this.a=d},
dES:function dES(d,e){this.a=d
this.b=e},
dFa:function dFa(d,e){this.a=d
this.b=e},
dEQ:function dEQ(d){this.a=d},
dFb:function dFb(d){this.a=d},
dEP:function dEP(){},
dF0:function dF0(d,e){this.a=d
this.b=e},
dEO:function dEO(d){this.a=d},
dF1:function dF1(d,e,f){this.a=d
this.b=e
this.c=f},
dEN:function dEN(d,e){this.a=d
this.b=e},
dEK:function dEK(d,e){this.a=d
this.b=e},
dF2:function dF2(d){this.a=d},
dF3:function dF3(d,e,f){this.a=d
this.b=e
this.c=f},
dFx:function dFx(){},
dFy:function dFy(d,e){this.a=d
this.b=e},
dFv:function dFv(d){this.a=d},
dFw:function dFw(d){this.a=d},
dFr:function dFr(d,e){this.a=d
this.b=e},
dFs:function dFs(d){this.a=d},
dFk:function dFk(d,e,f){this.a=d
this.b=e
this.c=f},
dFl:function dFl(d,e,f){this.a=d
this.b=e
this.c=f},
dFm:function dFm(d,e,f){this.a=d
this.b=e
this.c=f},
dFn:function dFn(d,e,f){this.a=d
this.b=e
this.c=f},
dFo:function dFo(d,e,f){this.a=d
this.b=e
this.c=f},
dFp:function dFp(d,e,f){this.a=d
this.b=e
this.c=f},
dFq:function dFq(d,e,f){this.a=d
this.b=e
this.c=f},
dFz:function dFz(){},
dFA:function dFA(){},
dFB:function dFB(){},
dFC:function dFC(d){this.a=d},
dFt:function dFt(d,e){this.a=d
this.b=e},
hj4(d){return B.d.dL(D.a1v,new C.frA(d),new C.frB())},
u8:function u8(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
frA:function frA(d){this.a=d},
frB:function frB(){},
ak9:function ak9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aTF:function aTF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Sn:function Sn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdB:function bdB(){this.d=$
this.c=this.a=null},
d5i:function d5i(d,e){this.a=d
this.b=e},
d5g:function d5g(d,e){this.a=d
this.b=e},
d5h:function d5h(){},
d5j:function d5j(d,e){this.a=d
this.b=e},
h3S(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.na(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
Kz(d,e){return C.hZX(d,e)},
hZX(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Kz=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$Kz)
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
break}o=J.d9(p,x.f)
o=A.cF(o,new C.ftE(),o.$ti.k("J.E"),x.B)
n=A.a3(o).k("a1<J.E>")
o=A.C(new A.a1(o,new C.ftF(),n),n.k("J.E"))
B.d.b0(o,new C.ftG())
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
return A.i($async$Kz,v)},
AL(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$AL=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aA(),$async$AL)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fGD(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.ar("String","ngmy_family_book_v1_"+s+"_"+e,B.R.ao(r,null)),$async$AL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$AL,v)},
aPP(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aPP=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Kz(d,e),$async$aPP)
case 2:u=h
t=J.cG(u)
s=t.bd(u,new C.fON(f))
if(s===-1)t.ck(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.AL(d,e,u),$async$aPP)
case 3:return A.h(null,v)}})
return A.i($async$aPP,v)},
bAA(d,e,f){var w=0,v=A.j(x.H),u
var $async$bAA=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Kz(d,e),$async$bAA)
case 2:u=h
J.np(u,new C.fqS(f))
w=3
return A.b(C.AL(d,e,u),$async$bAA)
case 3:return A.h(null,v)}})
return A.i($async$bAA,v)},
bAP(d,e){return C.hZW(d,e)},
hZW(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bAP=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bAP)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Mw
w=1
break}p=B.R.aH(0,q,null)
if(x.f.b(p)){o=A.a2(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aJ(o.h(0,"emblem"))
k=k==null?null:B.k.N(k)
if(k==null)k=0
if(D.Ci.ai(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a35,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.t(D.a2u,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.t(D.a2p,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.t(D.cS1,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.Hm(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Mw
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Mw
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bAP,v)},
Rb(d,e,f){return C.i7i(d,e,f)},
i7i(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Rb=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aA(),$async$Rb)
case 7:r=h
w=8
return A.b(r.ar("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.R.ao(f.ag(),null)),$async$Rb)
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
return A.i($async$Rb,v)},
QG(d,e){return C.hZY(d,e)},
hZY(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$QG=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$QG)
case 7:r=g
q=r.t6("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Kz(d,e),$async$QG)
case 8:if(!j.cy(g)){n=B.a.i(d.toLowerCase())
m=J.lq(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$QG)
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
return A.i($async$QG,v)},
afO(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$afO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QG(d,e),$async$afO)
case 3:s=g
r=J.a6(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.K(s,t)
w=5
return A.b(A.aA(),$async$afO)
case 5:w=4
return A.b(g.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$afO)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afO,v)},
a28(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a28=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.QG(d,e),$async$a28)
case 2:s=h
J.hF(s,f)
w=3
return A.b(A.aA(),$async$a28)
case 3:u=h
w=4
return A.b(u.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a28)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a28)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a28)
case 6:return A.h(null,v)}})
return A.i($async$a28,v)},
na:function na(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ftE:function ftE(){},
ftF:function ftF(){},
ftG:function ftG(){},
fGD:function fGD(){},
fON:function fON(d){this.a=d},
fqS:function fqS(d){this.a=d},
Hm:function Hm(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bN4:function bN4(d){this.a=d},
i7B(d,e,f,g,h,i,j){return A.a5(d,!1).c5(A.e8(new C.fHb(j,i,f,e,h,g),!0,null,x.H))},
QC(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$QC=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QG(h,g),$async$QC)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.I(x.q).f.T(D.aO3)
u=!1
w=1
break}w=4
return A.b(C.hmS(d,f,e),$async$QC)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.afO(h,g),$async$QC)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.na(""+(q+n),l,B.a.i(m.b),new A.S(Date.now(),0,!1)))}w=6
return A.b(C.AL(h,r,p),$async$QC)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Rb(h,r,new C.Hm("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$QC)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$QC,v)},
fHb:function fHb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
YU:function YU(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
az8:function az8(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d5Y:function d5Y(d){this.a=d},
d5X:function d5X(d,e){this.a=d
this.b=e},
d5M:function d5M(d,e){this.a=d
this.b=e},
d5J:function d5J(d,e){this.a=d
this.b=e},
d5k:function d5k(d){this.a=d},
d5l:function d5l(d,e){this.a=d
this.b=e},
d5N:function d5N(d){this.a=d},
d5t:function d5t(d){this.a=d},
d5r:function d5r(d){this.a=d},
d5s:function d5s(d){this.a=d},
d5u:function d5u(d){this.a=d},
d5K:function d5K(d){this.a=d},
d5L:function d5L(){},
d5p:function d5p(d){this.a=d},
d5q:function d5q(d,e){this.a=d
this.b=e},
d5v:function d5v(d){this.a=d},
d5w:function d5w(d,e){this.a=d
this.b=e},
d5W:function d5W(d){this.a=d},
d5V:function d5V(d,e){this.a=d
this.b=e},
d5U:function d5U(d){this.a=d},
d5G:function d5G(d){this.a=d},
d5F:function d5F(d){this.a=d},
d5H:function d5H(d){this.a=d},
d5m:function d5m(d,e){this.a=d
this.b=e},
d5I:function d5I(d,e){this.a=d
this.b=e},
d5z:function d5z(d){this.a=d},
d5A:function d5A(d){this.a=d},
d5y:function d5y(){},
d5B:function d5B(d){this.a=d},
d5C:function d5C(d){this.a=d},
d5D:function d5D(d,e){this.a=d
this.b=e},
d5E:function d5E(d,e,f){this.a=d
this.b=e
this.c=f},
d5x:function d5x(d,e){this.a=d
this.b=e},
d5P:function d5P(d){this.a=d},
d5O:function d5O(){},
d5Q:function d5Q(d){this.a=d},
d5R:function d5R(d){this.a=d},
d5S:function d5S(d){this.a=d},
d5T:function d5T(d,e){this.a=d
this.b=e},
d5n:function d5n(d){this.a=d},
d5o:function d5o(d){this.a=d},
YY:function YY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdW:function bdW(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d7I:function d7I(d){this.a=d},
d7J:function d7J(d){this.a=d},
d7H:function d7H(d){this.a=d},
d7K:function d7K(d){this.a=d},
d7G:function d7G(d){this.a=d},
d7L:function d7L(d){this.a=d},
d7F:function d7F(d){this.a=d},
d7M:function d7M(d,e){this.a=d
this.b=e},
d7E:function d7E(d,e){this.a=d
this.b=e},
d7N:function d7N(d,e){this.a=d
this.b=e},
YW:function YW(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aeg:function aeg(d,e,f){this.a=d
this.b=e
this.c=f},
az9:function az9(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d6c:function d6c(d,e){this.a=d
this.b=e},
d6b:function d6b(d,e){this.a=d
this.b=e},
d6g:function d6g(d){this.a=d},
d6f:function d6f(d,e){this.a=d
this.b=e},
d6d:function d6d(d){this.a=d},
d6e:function d6e(d){this.a=d},
d6h:function d6h(d){this.a=d},
d6i:function d6i(d){this.a=d},
d6a:function d6a(d,e){this.a=d
this.b=e},
d69:function d69(d,e){this.a=d
this.b=e},
JG:function JG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Yc:function Yc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cEN:function cEN(d){this.a=d},
cEO:function cEO(){},
cEP:function cEP(d){this.a=d},
bbb:function bbb(d,e,f){this.b=d
this.c=e
this.a=f},
bb2:function bb2(d,e){this.b=d
this.a=e},
u9:function u9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Yu:function Yu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bb9:function bb9(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cYe:function cYe(d,e,f){this.a=d
this.b=e
this.c=f},
cYd:function cYd(d,e){this.a=d
this.b=e},
cYD:function cYD(d){this.a=d},
cYq:function cYq(){},
cYE:function cYE(d){this.a=d},
cYp:function cYp(){},
cYF:function cYF(d,e){this.a=d
this.b=e},
cYo:function cYo(d,e){this.a=d
this.b=e},
cYG:function cYG(d,e){this.a=d
this.b=e},
cYn:function cYn(d,e){this.a=d
this.b=e},
cYH:function cYH(d){this.a=d},
cYm:function cYm(){},
cYI:function cYI(d,e){this.a=d
this.b=e},
cYl:function cYl(d,e){this.a=d
this.b=e},
cYJ:function cYJ(d){this.a=d},
cYy:function cYy(d,e){this.a=d
this.b=e},
cYK:function cYK(d){this.a=d},
cYL:function cYL(d){this.a=d},
cYN:function cYN(d){this.a=d},
cYO:function cYO(d){this.a=d},
cYx:function cYx(d,e){this.a=d
this.b=e},
cYP:function cYP(d,e){this.a=d
this.b=e},
aG8:function aG8(d){this.a=d},
bgp:function bgp(d){this.a=d},
b9n:function b9n(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hYV(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ahl(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bA(new A.S(Date.now(),0,!1))
s=new C.frE(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("a1<1>"),q=q.k("cQ<1,n>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.xQ)m.push(l===D.Zv?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.k_(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.k_(h,a2,a2)-A.k_(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.C(new A.cQ(new A.a1(a4,new C.frC(u,f),p),new C.frD(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aI(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aI(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hYW(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ahl(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.frJ(v,e)
q=new C.frH(v)
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
n=A.C(d,A.a3(d).k("co.E"))
B.d.fm(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.L)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gaf(e),k=new A.f6(l,new C.frI(p,m));k.C();t=f){j=l.gS(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ai(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aI(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hKy(d,e,f,g){var w,v,u=C.hYX(d,e)
if(u<=0||f.length<=u)return new A.adR(!1,D.C7,f)
if(g.t(0,e.a))return new A.adR(!1,D.C7,f)
w=A.U(f).c
v=A.dd(f,0,A.dJ(u,"count",x.S),w).dH(0)
return new A.adR(!0,A.dd(f,u,null,w).dH(0),v)},
hKz(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ahl(d3),d2=d1.length
if(d2===0)return D.fT9
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.cg(0,t.a,new C.d6p(t))}s=new C.d6G(v)
d2=x.h
r=A.T(w,d2)
q=new C.d6y(r)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d6x(r)
l=A.T(w,x.do)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ch(l.cg(0,k,new C.d6q()),o)}h=new C.d6w(s)
g=new C.d6v(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a1<J.E>")
f=A.C(new A.a1(new A.bc(v,p),new C.d6r(h),o),o.k("J.E"))
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
a9=new C.d6E(new C.d6A(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dt(v,v.r,v.e),j=a2.gajZ(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.et([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.K(0,i))break}if(h.$1(b0)&&a2.ai(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.rb(J.dH(i==null?B.T:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.cc)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.d6o(a2,new C.d6F(),b6,a3,b4,v,a4,a5,a6,b5)
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
d2=A.C(new A.cu(b4,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.Fx(o,new A.u(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.JO(c5.a,new A.u(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.C(new A.cu(b6,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bI(0,new C.d6s(c6,b4))
for(d2=new A.cK(a4,a4.$ti.k("cK<1,2>")).gaf(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gS(j)
if(b6.ai(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gaf(b5),i=new A.f6(j,new C.d6t(c8));i.C();)o.push(j.gS(0).b)
if(o.length===0)continue
B.d.b0(o,new C.d6u())
c6.push(new C.aIe(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bdG(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hiA(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(d)
return w==null?null:w.b[1]},
hcV(d,e,f,g,h,i,j,k,l,m,n){return new C.Zx(k,f,j,e,l,n,m,d,g,h,i,null)},
aB5(d,e,f,g,h,i,j){return new C.bhl(i,d,e,f,j,h,g,null)},
aoW:function aoW(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCF:function aCF(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dTt:function dTt(d){this.a=d},
dTs:function dTs(d){this.a=d},
dTv:function dTv(d,e){this.a=d
this.b=e},
dTw:function dTw(d,e){this.a=d
this.b=e},
dTx:function dTx(d){this.a=d},
dTr:function dTr(d,e){this.a=d
this.b=e},
dTu:function dTu(d){this.a=d},
dTz:function dTz(d){this.a=d},
dTy:function dTy(d,e){this.a=d
this.b=e},
aoQ:function aoQ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCC:function aCC(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dSU:function dSU(d){this.a=d},
dSS:function dSS(d){this.a=d},
dST:function dST(d){this.a=d},
dSV:function dSV(d,e){this.a=d
this.b=e},
dSP:function dSP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSn:function dSn(d){this.a=d},
dSo:function dSo(d,e){this.a=d
this.b=e},
dSC:function dSC(d){this.a=d},
dSA:function dSA(d){this.a=d},
dSB:function dSB(d,e){this.a=d
this.b=e},
dSD:function dSD(d){this.a=d},
dSE:function dSE(d,e){this.a=d
this.b=e},
dSO:function dSO(d,e){this.a=d
this.b=e},
dSM:function dSM(d,e){this.a=d
this.b=e},
dSL:function dSL(d,e){this.a=d
this.b=e},
dSH:function dSH(d,e){this.a=d
this.b=e},
dSG:function dSG(d){this.a=d},
dSI:function dSI(d,e){this.a=d
this.b=e},
dSF:function dSF(d){this.a=d},
dSJ:function dSJ(d){this.a=d},
dSK:function dSK(d){this.a=d},
dSN:function dSN(d,e){this.a=d
this.b=e},
dSb:function dSb(d,e){this.a=d
this.b=e},
dSc:function dSc(d,e){this.a=d
this.b=e},
dSX:function dSX(d,e,f){this.a=d
this.b=e
this.c=f},
dSR:function dSR(d,e,f){this.a=d
this.b=e
this.c=f},
dSQ:function dSQ(d){this.a=d},
dSd:function dSd(d){this.a=d},
dSe:function dSe(d){this.a=d},
dSf:function dSf(){},
dSg:function dSg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSk:function dSk(d,e){this.a=d
this.b=e},
dSj:function dSj(d,e){this.a=d
this.b=e},
dSi:function dSi(d){this.a=d},
dSl:function dSl(d,e){this.a=d
this.b=e},
dSh:function dSh(d){this.a=d},
dSW:function dSW(d){this.a=d},
dSx:function dSx(){},
dSy:function dSy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSw:function dSw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSs:function dSs(d,e,f){this.a=d
this.b=e
this.c=f},
dSr:function dSr(d,e,f){this.a=d
this.b=e
this.c=f},
dSp:function dSp(d,e){this.a=d
this.b=e},
dSt:function dSt(d){this.a=d},
dSu:function dSu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSq:function dSq(d,e){this.a=d
this.b=e},
dSv:function dSv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSz:function dSz(d,e){this.a=d
this.b=e},
dT3:function dT3(){},
dT4:function dT4(d,e){this.a=d
this.b=e},
dT5:function dT5(d){this.a=d},
dT6:function dT6(d,e){this.a=d
this.b=e},
dT_:function dT_(d){this.a=d},
dSY:function dSY(d,e){this.a=d
this.b=e},
dT0:function dT0(d,e){this.a=d
this.b=e},
dT1:function dT1(d,e){this.a=d
this.b=e},
dT2:function dT2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dT7:function dT7(d){this.a=d},
dSZ:function dSZ(d){this.a=d},
dSm:function dSm(d){this.a=d},
bdE:function bdE(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d6m:function d6m(d){this.a=d},
d6l:function d6l(d,e){this.a=d
this.b=e},
d6n:function d6n(d){this.a=d},
d6k:function d6k(d,e){this.a=d
this.b=e},
frE:function frE(d,e){this.a=d
this.b=e},
frF:function frF(d){this.a=d},
frG:function frG(){},
frC:function frC(d,e){this.a=d
this.b=e},
frD:function frD(){},
frJ:function frJ(d,e){this.a=d
this.b=e},
frK:function frK(d){this.a=d},
frL:function frL(){},
frH:function frH(d){this.a=d},
frI:function frI(d,e){this.a=d
this.b=e},
JO:function JO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Fx:function Fx(d,e){this.a=d
this.b=e},
bdG:function bdG(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d6p:function d6p(d){this.a=d},
d6G:function d6G(d){this.a=d},
d6y:function d6y(d){this.a=d},
d6z:function d6z(){},
d6x:function d6x(d){this.a=d},
d6q:function d6q(){},
d6w:function d6w(d){this.a=d},
d6v:function d6v(d,e){this.a=d
this.b=e},
d6r:function d6r(d){this.a=d},
d6A:function d6A(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d6B:function d6B(d){this.a=d},
d6C:function d6C(d){this.a=d},
d6D:function d6D(){},
d6E:function d6E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d6F:function d6F(){},
d6o:function d6o(d,e,f,g,h,i,j,k,l,m){var _=this
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
d6s:function d6s(d,e){this.a=d
this.b=e},
d6t:function d6t(d){this.a=d},
d6u:function d6u(){},
aIe:function aIe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bdH:function bdH(d,e){this.b=d
this.a=e},
d6H:function d6H(){},
d6I:function d6I(d){this.a=d},
d6J:function d6J(d){this.a=d},
d6K:function d6K(){},
bhm:function bhm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcL:function bcL(d,e){this.b=d
this.a=e},
bv3:function bv3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
f9E:function f9E(d){this.a=d},
bkI:function bkI(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eLz:function eLz(d){this.a=d},
eLy:function eLy(d,e){this.a=d
this.b=e},
Zx:function Zx(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aB3:function aB3(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dmz:function dmz(d,e){this.a=d
this.b=e},
dmy:function dmy(d){this.a=d},
dmw:function dmw(d){this.a=d},
dmx:function dmx(d){this.a=d},
dmI:function dmI(d){this.a=d},
dmJ:function dmJ(d){this.a=d},
dmH:function dmH(d,e){this.a=d
this.b=e},
dmK:function dmK(){},
dmN:function dmN(d){this.a=d},
dmG:function dmG(d,e){this.a=d
this.b=e},
dmM:function dmM(){},
dmO:function dmO(d){this.a=d},
dmF:function dmF(d,e){this.a=d
this.b=e},
dmP:function dmP(d){this.a=d},
dmE:function dmE(d){this.a=d},
dmQ:function dmQ(d){this.a=d},
dmD:function dmD(d){this.a=d},
dmR:function dmR(d){this.a=d},
dmC:function dmC(d){this.a=d},
dmS:function dmS(d){this.a=d},
dmB:function dmB(d){this.a=d},
dmT:function dmT(d){this.a=d},
dmA:function dmA(d,e){this.a=d
this.b=e},
dmL:function dmL(d){this.a=d},
acH:function acH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhl:function bhl(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
acG:function acG(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bhk:function bhk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dmU:function dmU(d){this.a=d},
dmV:function dmV(d,e){this.a=d
this.b=e},
aB4:function aB4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHg:function aHg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
acI:function acI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dn3:function dn3(d){this.a=d},
JC:function JC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
h7N(d){var w=d.U,v=x.N
return w.j0(w,new C.c7L(),v,v)},
hC3(d){var w=d.bF
if(w>=0)return w
return 5},
h7P(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.h7N(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
h7O(d,e){var w=C.h7P(d,e)
if(w!=null&&w.cc(new A.S(Date.now(),0,!1)))return!0
return!1},
hC4(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.h7N(d),w,w)
u=C.h7P(d,e)
t=u!=null&&u.cc(new A.S(Date.now(),0,!1))?u:new A.S(Date.now(),0,!1)
v.n(0,s,t.bQ(A.dC(30,0,0,0,0,0).a).a6().ac())
d.U=v},
aZh(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aZh=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lf(t,B.HP),$async$aZh)
case 3:if(l){u=!0
w=1
break}u=A.kU(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.HP,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZh,v)},
c7L:function c7L(){},
hC1(){var w,v=$.pq(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aC(32)]
return"FT"+B.d.fZ(u)},
Ig(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Ig=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$Ig)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f3("ngmy_family_tree_backup_codes_v1",null,!1,B.bH),$async$Ig)
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
return A.i($async$Ig,v)},
a6J(d){return C.hC2(d)},
hC2(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a6J=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$a6J)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hE("ngmy_family_tree_backup_codes_v1",A.F(["codes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cH,null),$async$a6J)
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
return A.i($async$a6J,v)},
c7K(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c7K=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Ig(),$async$c7K)
case 3:t=m.jy(f),t=t.gaf(t),s=x.f
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
return A.i($async$c7K,v)},
Nb(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Nb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c7K(d),$async$Nb)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Ig(),$async$Nb)
case 6:s=f
r=J.a6(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dW(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.S(Date.now(),0,!1).a6().ac())
r.n(s,t,o)
w=9
return A.b(C.a6J(s),$async$Nb)
case 9:case 8:u=t
w=1
break
case 5:n=C.hC1()
w=10
return A.b(C.Ig(),$async$Nb)
case 10:s=f
J.aF(s,n,A.F(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=11
return A.b(C.a6J(s),$async$Nb)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Nb,v)},
aZg(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aZg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Ig(),$async$aZg)
case 3:t=f
for(s=J.dm(t),r=s.gdK(t),r=r.dH(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a6J(t),$async$aZg)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aZg,v)},
a6K(d,e,f){var w=0,v=A.j(x.H),u
var $async$a6K=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aoV(d,e),$async$a6K)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Nb(d),$async$a6K)
case 7:w=4
break
case 5:w=8
return A.b(C.aZg(d),$async$a6K)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a6K,v)},
aoP(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aoP=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aoV(f,e),$async$aoP)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c3(),$async$aoP)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Ig(),$async$aoP)
case 7:q=o.q(k,t)
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
return A.i($async$aoP,v)},
aZf(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aZf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c3(),$async$aZf)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Ig(),$async$aZf)
case 4:t=q.q(g,r)
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
return A.i($async$aZf,v)},
hC5(){var w,v=$.pq(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aC(32)]
return"FT"+B.d.fZ(u)},
aoS(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$aoS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$aoS)
case 3:if(!g){u=null
w=1
break}t=C.hC5()
w=4
return A.b(A.UH(),$async$aoS)
case 4:s=g
r=B.dJ.aJ(B.R.ao(d.eO(),null))
r=B.cS.gcw().aJ(r)
q=e?999:2
J.aF(s,t,A.F(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(A.a6L(s),$async$aoS)
case 5:p=e?999:2
u=new A.a_J("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoS,v)},
aoR(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aoR=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.UH(),$async$aoR)
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
return A.b(C.aZf(J.k(l==null?"":l),j),$async$aoR)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.c6.ca(0,B.cG.aJ(t))
s=C.h7Q(r)}catch(f){q=A.aa(f)
$.am.$1("[family tree qr stash] decode: "+A.t(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dW(A.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a6().ac())
o.n(p,g,l)}w=5
return A.b(A.a6L(p),$async$aoR)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoR,v)},
h7Q(d){var w,v,u,t,s=null
try{w=B.R.aH(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hC7(A.a2(w,x.N,x.z))
return u}catch(t){v=A.aa(t)
$.am.$1("[family tree sync] parse: "+A.t(v))
return s}},
fSK(d){var w=0,v=A.j(x.m),u,t,s
var $async$fSK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aoR(t[1])
w=1
break}u=null
w=1
break}u=C.h7Q(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fSK,v)},
hC7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d9(v,x.f)
u=A.cF(u,new C.c7N(),u.$ti.k("J.E"),x.k)
t=A.a3(u).k("a1<J.E>")
s=A.C(new A.a1(u,new C.c7O(),t),t.k("J.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.T(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jy(p),t=t.gaf(t),o=x.B;t.C();){n=t.gS(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d9(l,u)
n=A.cF(n,new C.c7P(),n.$ti.k("J.E"),o)
k=A.a3(n).k("a1<J.E>")
j=A.C(new A.a1(n,new C.c7Q(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aoT(h,w,s,r,q)},
aoV(d,e){var w=0,v=A.j(x.y),u,t
var $async$aoV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.N2(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.AA(d),$async$aoV)
case 3:u=t.cy(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoV,v)},
c7W(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c7W=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.AA(d),$async$c7W)
case 3:t=s.b6(f,new C.c7X(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.b0(t,new C.c7Y())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c7W,v)},
UI(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$UI=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aoV(e,d),$async$UI)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Nb(e),$async$UI)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.AA(e),$async$UI)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.c7U(g))
r=A.C(t,t.$ti.k("J.E"))}t=J.a6(r)
if(t.gam(r)){u=null
w=1
break}t=t.dt(r,new C.c7V(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Kz(e,o),$async$UI)
case 14:n=i
if(J.cy(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.aoT(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$UI,v)},
aZk(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aZk=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.UI(d,e,f,g),$async$aZk)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gL(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aK(t,s,"_")
r=q.a
u=A.Gf(A.JK(q.eO(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZk,v)},
aZj(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aZj=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.UI(d,e,f,g),$async$aZj)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aoS(r,f),$async$aZj)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aFh(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZj,v)},
UJ(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$UJ=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fSK(a0),$async$UJ)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aoP(g.a,d,e,f,s,r),$async$UJ)
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
return A.b(C.bAq(e,j),$async$UJ)
case 12:case 11:w=13
return A.b(C.ah6(e,j,s),$async$UJ)
case 13:h=n.h(0,i)
w=h!=null&&J.cy(h)?14:15
break
case 14:w=16
return A.b(C.AL(e,i,h),$async$UJ)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.boi(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$UJ,v)},
aoT:function aoT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c7S:function c7S(){},
c7T:function c7T(){},
c7R:function c7R(){},
c7N:function c7N(){},
c7O:function c7O(){},
c7P:function c7P(){},
c7Q:function c7Q(){},
c7X:function c7X(){},
c7Y:function c7Y(){},
c7U:function c7U(d){this.a=d},
c7V:function c7V(d){this.a=d},
h05(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f8(null,x.H)
return A.hy(d,new C.aoU(w,e,g,i,f,h,null),!0,null,x.H)},
d6j(d,e,f,g,h,i,j,k){return new C.bdD(i,e,k,j,g,f,h,d,null)},
aoU:function aoU(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCE:function aCE(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dTg:function dTg(d){this.a=d},
dTh:function dTh(d,e,f){this.a=d
this.b=e
this.c=f},
dTl:function dTl(d,e){this.a=d
this.b=e},
dTm:function dTm(d){this.a=d},
dTd:function dTd(d){this.a=d},
dTe:function dTe(d,e){this.a=d
this.b=e},
dTf:function dTf(d,e){this.a=d
this.b=e},
dTk:function dTk(d){this.a=d},
dTj:function dTj(d,e){this.a=d
this.b=e},
dTi:function dTi(){},
dTo:function dTo(d){this.a=d},
dTp:function dTp(d,e){this.a=d
this.b=e},
dTn:function dTn(d,e){this.a=d
this.b=e},
d6L:function d6L(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bdF:function bdF(d,e,f){this.d=d
this.e=e
this.a=f},
abY:function abY(d,e,f){this.c=d
this.d=e
this.a=f},
bdD:function bdD(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bdI:function bdI(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ZS:function ZS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCD:function aCD(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dT8:function dT8(d,e){this.a=d
this.b=e},
dT9:function dT9(d){this.a=d},
dTa:function dTa(d){this.a=d},
dTb:function dTb(d){this.a=d},
dTc:function dTc(d){this.a=d},
ZT:function ZT(d){this.a=d},
biP:function biP(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dTq:function dTq(d,e){this.a=d
this.b=e},
aXR(d,e){return new C.aXQ(d,e,null)},
aXQ:function aXQ(d,e,f){this.c=d
this.d=e
this.a=f},
i0o(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b2(d,11)},
i7L(d){return A.bQ(B.K,null,new C.fHE(new C.tH(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
h9I(d,e){return new C.arQ(e,d,null)},
aPw(d,e,f,g,h,i,j){var w=C.i0o(i)
if(w!=null)return A.bw(e,new A.a7(j,f,new C.a5M(w,!0,null),null),B.aq)
return I.aOR(e,B.bS,f,g,h,i,j)},
lz:function lz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5M:function a5M(d,e,f){this.c=d
this.d=e
this.a=f},
biv:function biv(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b1$=e
_.c=_.a=null},
dEC:function dEC(d){this.a=d},
dED:function dED(){},
dEE:function dEE(d,e){this.a=d
this.b=e},
biu:function biu(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fHE:function fHE(d){this.a=d},
fHD:function fHD(d,e){this.a=d
this.b=e},
fHC:function fHC(d,e){this.a=d
this.b=e},
fHB:function fHB(d,e){this.a=d
this.b=e},
arQ:function arQ(d,e,f){this.c=d
this.d=e
this.a=f},
cfr:function cfr(d,e){this.a=d
this.b=e},
aKA:function aKA(){},
i7w(d){var w=null
return A.ca(w,w,!0,w,new C.fH0(),d,w,!0,!0,x.e2)},
i8G(d,e,f,g,h){var w=null
return A.ca(w,w,!0,w,new C.fOu(h,g,f,e),d,w,!0,!0,x.N)},
i7y(d,e){var w=null
return A.ca(w,w,!0,w,new C.fH5(e),d,w,!0,!0,x.dY)},
i7x(d){var w=null
return A.ca(w,w,!0,w,new C.fH4(),d,w,!0,!0,x.c5)},
aSq:function aSq(d,e){this.a=d
this.b=e},
aSp:function aSp(d){this.a=d},
aQr:function aQr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fH0:function fH0(){},
fOu:function fOu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fH5:function fH5(d){this.a=d},
fH4:function fH4(){},
Yw:function Yw(d,e){this.c=d
this.a=e},
axU:function axU(){var _=this
_.d=$
_.c=_.a=_.e=null},
cZ0:function cZ0(d){this.a=d},
cZ1:function cZ1(d){this.a=d},
cZ_:function cZ_(d,e){this.a=d
this.b=e},
cZ2:function cZ2(d){this.a=d},
cZ3:function cZ3(d){this.a=d},
Yv:function Yv(d){this.a=d},
axT:function axT(){this.d=$
this.c=this.a=null},
cYX:function cYX(d){this.a=d},
cYY:function cYY(d){this.a=d},
cYZ:function cYZ(d){this.a=d},
Y3:function Y3(d){this.a=d},
awD:function awD(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cwA:function cwA(){},
cwG:function cwG(d){this.a=d},
cwH:function cwH(d){this.a=d},
cwI:function cwI(d){this.a=d},
cwF:function cwF(){},
cwJ:function cwJ(d){this.a=d},
cwK:function cwK(d){this.a=d},
cwE:function cwE(){},
cwL:function cwL(d,e){this.a=d
this.b=e},
cwD:function cwD(d,e){this.a=d
this.b=e},
cwB:function cwB(d,e){this.a=d
this.b=e},
cwM:function cwM(d){this.a=d},
cwC:function cwC(){},
cwN:function cwN(d){this.a=d},
a0D:function a0D(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
buW:function buW(){this.d=$
this.c=this.a=null},
f96:function f96(d,e){this.a=d
this.b=e},
f97:function f97(d){this.a=d},
f98:function f98(d,e){this.a=d
this.b=e},
ab0:function ab0(d,e){this.a=d
this.b=e},
Fk:function Fk(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
buU:function buU(d,e){var _=this
_.d=$
_.bs$=d
_.a8$=e
_.c=_.a=null},
f94:function f94(d,e){this.a=d
this.b=e},
aww:function aww(d,e){this.c=d
this.a=e},
buV:function buV(d,e){var _=this
_.d=$
_.bs$=d
_.a8$=e
_.c=_.a=null},
f95:function f95(d){this.a=d},
buT:function buT(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aML:function aML(){},
aMM:function aMM(){},
bCn(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bv(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oD(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fFH(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.de(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.de(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.de(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.de(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Xt(A.de(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aP7(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aP7=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hY().l4(85,1280,B.eG),$async$aP7)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fj(),$async$aP7)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.h9H()
w=9
return A.b(C.cfq(q,r),$async$aP7)
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
return A.i($async$aP7,v)},
aPu(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aPu=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cfn(g)
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
return A.b($.W().Li(p,!0,null,i).cM(0,B.fH),$async$aPu)
case 9:n=a1
w=10
return A.b(n.m_(),$async$aPu)
case 10:m=a1
w=11
return A.b(J.ahw(m).hr(B.fY),$async$aPu)
case 11:l=a1
J.ahw(m).q()
if(l==null){w=8
break}i=J.eT(B.dD.gaM(l))
k="data:image/png;base64,"+B.cS.gcw().aJ(i)
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
return A.i($async$aPu,v)},
fFH:function fFH(){},
tH:function tH(d){this.a=d},
arP:function arP(d,e,f){this.c=d
this.d=e
this.a=f},
aE9:function aE9(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eIJ:function eIJ(d,e){this.a=d
this.b=e},
eIA:function eIA(d){this.a=d},
eIB:function eIB(d){this.a=d},
eIH:function eIH(d,e){this.a=d
this.b=e},
eIG:function eIG(d,e){this.a=d
this.b=e},
eID:function eID(d,e){this.a=d
this.b=e},
eIC:function eIC(d,e){this.a=d
this.b=e},
eIE:function eIE(d){this.a=d},
eIF:function eIF(d,e){this.a=d
this.b=e},
eII:function eII(d,e){this.a=d
this.b=e},
eIv:function eIv(d,e){this.a=d
this.b=e},
eIz:function eIz(d){this.a=d},
eIy:function eIy(d,e){this.a=d
this.b=e},
eIx:function eIx(d){this.a=d},
eIK:function eIK(d,e){this.a=d
this.b=e},
eIL:function eIL(d,e){this.a=d
this.b=e},
eIw:function eIw(d,e){this.a=d
this.b=e},
hmn(d,e,f){var w="thumbnailPath",v=e.ag()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.F(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a6().ac(),"project",v],x.N,x.z)},
fFI(d,e,f){var w=0,v=A.j(x.N),u
var $async$fFI=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.R.ao(C.hmn(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fFI,v)},
bCp(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bCp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fFI(!0,d,e),$async$bCp)
case 4:w=3
return A.b(r.arN(g,d,e.a),$async$bCp)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dJ.aJ(B.R.ao(C.hmn(d,e,null),null))
u="NGMY_WS:"+B.kd.gcw().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCp,v)},
heg(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
h_L(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d_(s,"NGMYWSSYNC2|"))return!0
if(J.d_(s,"NGMY_WS:"))return!0
if(J.f0(s,t))return!0
if(J.d_(s,"{"))try{w=B.R.aH(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
i5r(d){var w,v,u,t=C.heg(d)
if(t==null)return null
if(C.h_L(t))return t
w=B.a.cJ(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b2(t,w))
if(C.h_L(v))return v}u=B.a.cJ(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b2(t,u))
if(C.h_L(v))return v}return null},
h_K(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d_(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d_(q,"NGMY_WS:")){v=B.c6.ca(0,B.cG.aJ(J.mF(q,8)))
w=t.a(B.R.aH(0,v,r))}else w=t.a(B.R.aH(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fVi(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bCo(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bCo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.arM(t[1]),$async$bCo)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.h_K(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.h_K(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCo,v)},
h_J(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.li(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bBW(){var w=0,v=A.j(x.o),u,t
var $async$bBW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Gq(),$async$bBW)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.h_K(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBW,v)},
hnf(d,e,f,g){return A.bQ(B.K,null,new C.fOk(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fOk:function fOk(d,e,f){this.a=d
this.b=e
this.c=f},
ad2:function ad2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eIN:function eIN(d,e){this.a=d
this.b=e},
eIO:function eIO(d,e){this.a=d
this.b=e},
eIP:function eIP(d,e){this.a=d
this.b=e},
eIQ:function eIQ(d,e){this.a=d
this.b=e},
eIM:function eIM(d){this.a=d},
arJ:function arJ(d,e,f){this.c=d
this.d=e
this.a=f},
bkb:function bkb(){var _=this
_.c=_.a=_.e=_.d=null},
eIq:function eIq(d,e){this.a=d
this.b=e},
eIr:function eIr(d){this.a=d},
eIs:function eIs(d){this.a=d},
arO:function arO(d){this.a=d},
aE8:function aE8(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eIu:function eIu(d){this.a=d},
eIt:function eIt(d){this.a=d},
hFl(d,e,f,g,h){return new C.NO(h,g,d,e,f,null)},
aIW:function aIW(d,e){this.a=d
this.b=e},
NO:function NO(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEa:function aEa(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eJc:function eJc(){},
eJ8:function eJ8(d,e){this.a=d
this.b=e},
eJ9:function eJ9(d){this.a=d},
eIU:function eIU(d){this.a=d},
eIS:function eIS(d){this.a=d},
eIT:function eIT(d){this.a=d},
eJ2:function eJ2(d,e){this.a=d
this.b=e},
eJ_:function eJ_(d,e){this.a=d
this.b=e},
eJ0:function eJ0(d,e){this.a=d
this.b=e},
eJ1:function eJ1(d,e,f){this.a=d
this.b=e
this.c=f},
eIY:function eIY(d,e,f){this.a=d
this.b=e
this.c=f},
eIW:function eIW(d){this.a=d},
eIX:function eIX(d){this.a=d},
eIZ:function eIZ(d){this.a=d},
eJf:function eJf(d){this.a=d},
eJe:function eJe(d){this.a=d},
eJg:function eJg(d){this.a=d},
eJd:function eJd(d){this.a=d},
eIR:function eIR(d){this.a=d},
eIV:function eIV(d,e){this.a=d
this.b=e},
eJb:function eJb(d,e){this.a=d
this.b=e},
eJa:function eJa(d,e){this.a=d
this.b=e},
eJ5:function eJ5(d){this.a=d},
eJ6:function eJ6(d){this.a=d},
eJ7:function eJ7(d,e){this.a=d
this.b=e},
eJ4:function eJ4(d,e){this.a=d
this.b=e},
eJ3:function eJ3(d,e,f){this.a=d
this.b=e
this.c=f},
bwH:function bwH(){},
Ar(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aK(v,w,"_")},
afx(d,e,f){return C.hV_(d,e,f)},
hV_(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$afx=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.ar("String",e,f),$async$afx)
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
return A.i($async$afx,v)},
afw(d,e){return C.hUZ(d,e)},
hUZ(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$afw=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$afw)
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
return A.i($async$afw,v)},
hTL(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Sj(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bzq(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bzq=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b1w(q),$async$bzq)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aPu(q,!1),$async$bzq)
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
return A.i($async$bzq,v)},
ht8(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.qU(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qU(p,J.k(u==null?"":u),1,o,q)},
fVi(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d9(s,x.f)
w=A.cF(w,new C.cvZ(),w.$ti.k("J.E"),x.Q)
v=A.a3(w).k("a1<J.E>")
r=A.C(new A.a1(w,new C.cw_(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.li(w,v,u,r,t==null?new A.S(Date.now(),0,!1):t)},
hYR(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.Zv
case"female":case"f":return D.aj4
default:return D.xQ}},
hj5(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h3T(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hYR(v==null?j:J.k(v))
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
l=J.A(d.h(0,"hidden"),!0)
k=A.aJ(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.N(k)
return new C.hX(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
hYT(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Mx
case"viewer":return D.ks
default:return D.tI}},
hYU(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Gg(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bAH(d,e){return B.a.i(e.toLowerCase())===C.Gg(d,e)&&d.y!==D.ks},
tT(d,e){var w,v=d.y
if(v===D.ks)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Gg(d,e))return!0
if(v===D.Mx)return!0
v=d.e
return new A.K(v,A.h_P(),A.U(v).k("K<1,n>")).t(0,w)},
hYj(d){return J.dH(d,new C.fqK()).gM(0)},
fOU(d){var w=0,v=A.j(x.y),u,t
var $async$fOU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.AA(d),$async$fOU)
case 3:u=t.qQ(f,new C.fOV(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fOU,v)},
bAq(d,e){var w=0,v=A.j(x.H),u,t
var $async$bAq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.AA(d),$async$bAq)
case 3:t=g
if(J.qQ(t,new C.fpa(e))){w=1
break}if(C.hYj(t)>=2)throw A.V(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bAq,v)},
akb(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d9(n,x.f)
w=A.cF(w,new C.bN5(),w.$ti.k("J.E"),x.P)
v=A.a3(w).k("a1<J.E>")
m=A.C(new A.a1(w,new C.bN6(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bN7(),x.N)
t=A.C(l,l.$ti.k("ak.E"))}else t=A.a([],x.s)
l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"code")
v=J.k(v==null?"":v)
s=J.A(d.h(0,"isPrivate"),!1)
r=d.h(0,"createdAt")
r=A.bi(J.k(r==null?"":r))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.aJ(d.h(0,"visibleChildrenPerParent"))
q=q==null?null:B.k.N(q)
if(q==null)q=0
p=d.h(0,"ownerEmail")
p=J.k(p==null?"":p)
o=d.h(0,"localRole")
return new C.kC(l,w,v,!s,t,m,r,q,p,C.hYT(o==null?null:J.k(o)))},
hje(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
CG(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$CG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.R9(d),$async$CG)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aA(),$async$CG)
case 4:t=f
w=5
return A.b(t.a5z(0),$async$CG)
case 5:w=6
return A.b(C.fgH(t,l),$async$CG)
case 6:s=f
if(J.cy(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a6(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.heR(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oC(l,n),$async$CG)
case 11:u=n
w=1
break
case 10:case 8:m=A.aU(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.heR(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oC(l,n),$async$CG)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$CG,v)},
fgH(d,e){return C.hRe(d,e)},
hRe(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fgH=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a6(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Ar(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.R.aH(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aV(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gS(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Ar(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.R.aH(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fVi(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Ar(a9)+"_"+n))
i=C.hTL(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b1w(h),$async$fgH)
case 17:g=b1
if(g!=null){i=i.Sj(g)
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
case 8:J.Rj(q,new C.fgI())
if(p&&J.ad(q)!==0)C.oC(a9,q)
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
return A.i($async$fgH,v)},
bAS(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bAS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.R9(d),$async$bAS)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.CG(r),$async$bAS)
case 4:t=p.aV(g)
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
return A.i($async$bAS,v)},
heR(d){var w,v,u,t
try{w=B.R.aH(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d9(w,x.f)
v=A.cF(v,new C.fcp(),v.$ti.k("J.E"),x.i)
u=A.a3(v).k("a1<J.E>")
v=A.C(new A.a1(v,new C.fcq(),u),u.k("J.E"))
B.d.b0(v,new C.fcr())
return v}catch(t){v=A.a([],x.D)
return v}},
oC(d,e){return C.i7m(d,e)},
i7m(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oC=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.R9(b2),$async$oC)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aA(),$async$oC)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Ar(a8)
p=A.aU(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.R.aH(0,p,null)),new C.fGS(),a2).fL(0)
a2=J.b6(b3,new C.fGT(),a2).c_(0,new C.fGU())
n=A.db(a2,a2.$ti.k("J.E"))
a2=o,a2=A.ea(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f0(n,m)?17:18
break
case 17:a5=C.Ar(a8)
l=A.aU(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a80(l),$async$oC)
case 19:t=21
a5=C.Ar(a8)
k=A.aU(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.R.aH(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a80(a5==null?null:J.k(a5)),$async$oC)
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
return A.b(C.afw(r,"ngmy_worksheet_item_v3_"+C.Ar(a8)+"_"+m),$async$oC)
case 29:w=30
return A.b(C.afw(r,"ngmy_worksheet_thumb_v3_"+C.Ar(a8)+"_"+m),$async$oC)
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
case 14:case 10:a2=J.cG(b3),a3=a2.gaf(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gS(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bzq(h),$async$oC)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.afx(r,"ngmy_worksheet_thumb_v3_"+C.Ar(a8)+"_"+a4,f),$async$oC)
case 40:g=i.Sj(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.afw(r,"ngmy_worksheet_thumb_v3_"+C.Ar(a8)+"_"+a4),$async$oC)
case 41:g=i.Sj(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.afw(r,"ngmy_worksheet_thumb_v3_"+C.Ar(a8)+"_"+a4),$async$oC)
case 42:case 34:a4=i.a
w=43
return A.b(C.afx(r,"ngmy_worksheet_item_v3_"+C.Ar(a8)+"_"+a4,B.R.ao(g.ag(),null)),$async$oC)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.ch(q,i.a)
w=31
break
case 32:w=44
return A.b(C.afx(r,"ngmy_worksheets_index_v3_"+C.Ar(a8),B.R.ao(q,null)),$async$oC)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eL(b3,new C.fGV(q))
a4=a3.$ti.k("cQ<1,a4<n,@>>")
a7=A.C(new A.cQ(a3,new C.fGW(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.afx(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.R.ao(a0,null)),$async$oC)
case 45:w=46
return A.b(J.hsf(r),$async$oC)
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
return A.i($async$oC,v)},
L_(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$L_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.CG(d),$async$L_)
case 3:t=g
s=J.cG(t)
r=s.bd(t,new C.fOT(e))
if(r===-1)s.ck(t,0,e)
else s.n(t,r,e)
u=C.oC(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$L_,v)},
bAE(d,e){var w=0,v=A.j(x.H),u
var $async$bAE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.CG(d),$async$bAE)
case 2:u=g
J.np(u,new C.frb(e))
w=3
return A.b(C.oC(d,u),$async$bAE)
case 3:return A.h(null,v)}})
return A.i($async$bAE,v)},
Gi(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Gi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Gi)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.R.aH(0,i,null)
if(x.j.b(t)){j=J.d9(t,x.f)
j=A.cF(j,new C.ftK(),j.$ti.k("J.E"),x.k)
s=A.a3(j).k("a1<J.E>")
r=A.C(new A.a1(j,new C.ftL(),s),s.k("J.E"))
B.d.b0(r,new C.ftM())
k=r}}catch(h){}w=4
return A.b(C.fd9(d),$async$Gi)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hRB(k,p,d)
j=A.U(o)
s=j.k("K<1,a4<n,@>>")
s=A.C(new A.K(o,new C.ftN(),s),s.k("ak.E"))
n=B.R.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Ql(d,o),$async$Gi)
case 7:case 6:j=j.k("a1<1>")
m=A.C(new A.a1(o,new C.ftO(d),j),j.k("J.E"))
if(m.length!==0)C.aO2(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Gi,v)},
fGE(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fGE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ql(d,e),$async$fGE)
case 3:t=J.dH(e,new C.fGF(d))
s=A.C(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aO2(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGE,v)},
a2e(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a2e=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aA(),$async$a2e)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.R.aH(0,l,null)
if(x.j.b(u)){m=J.d9(u,x.f)
m=A.cF(m,new C.fOO(),m.$ti.k("J.E"),x.k)
t=A.a3(m).k("a1<J.E>")
s=A.C(new A.a1(m,new C.fOP(),t),t.k("J.E"))
o=s}}catch(k){}q=J.qc(o,new C.fOQ(e))
if(B.a.i(e.x).length===0&&C.tT(e,d)){m=B.a.i(d.toLowerCase())
p=e.aD4(e.y===D.ks?D.ks:D.tI,m)}else p=e
if(q===-1)J.pu(o,0,p)
else J.aF(o,q,p)
w=3
return A.b(C.Ql(d,o),$async$a2e)
case 3:w=C.tT(p,d)?4:5
break
case 4:w=6
return A.b(C.aO1(C.Gg(p,d),p),$async$a2e)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a2e,v)},
aOc(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aOc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Gi(d),$async$aOc)
case 2:u=g
t=J.cG(u)
s=A.rb(t.eL(u,new C.fqT(e)))
t.bo(u,new C.fqU(e))
w=3
return A.b(C.Ql(d,u),$async$aOc)
case 3:w=s!=null&&C.bAH(s,d)?4:5
break
case 4:w=6
return A.b(C.fct(e),$async$aOc)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aOc,v)},
ahl(d){var w=d.f,v=A.U(w).k("a1<1>")
w=A.C(new A.a1(w,new C.fP_(),v),v.k("J.E"))
return w},
fYr(d,e){var w,v=d.f,u=A.rb(new A.a1(v,new C.fqp(e),A.U(v).k("a1<1>")))
v=C.ahl(d)
w=A.U(v).k("a1<1>")
v=A.C(new A.a1(v,new C.fqq(e,u),w),w.k("J.E"))
B.d.b0(v,new C.fqr())
return v},
hYX(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hnj(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bd(C.fYr(d,u),new C.fOv(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
i_t(d,e){var w
if(e==null||e.length===0)return 1
w=C.fYr(d,e)
if(w.length===0)return 1
return new A.K(w,new C.fuw(),A.U(w).k("K<1,H>")).fb(0,B.A6)+1},
i7f(d){var w,v=C.ahl(d)
if(v.length===0)return null
w=new A.a1(v,new C.fGy(),A.U(v).k("a1<1>"))
if(!w.gam(0))return w.gL(0)
return B.d.gL(v)},
hYS(d){return A.F(["id",d.a,"name",d.b,"gender",C.hj5(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
i_o(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aX(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.L)(a0),++u){q=a0[u]
p=q.a
r.K(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.xQ?n:q.c
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
d=q.aD_(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.L)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cHV(a1,w,a3.d,a2.y,s,a0,v)},
AA(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$AA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$AA)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aU(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.R.aH(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d9(t,x.f)
p=A.cF(p,new C.ftH(),p.$ti.k("J.E"),x.k)
s=A.a3(p).k("a1<J.E>")
p=A.C(new A.a1(p,new C.ftI(),s),s.k("J.E"))
B.d.b0(p,new C.ftJ())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$AA,v)},
ah6(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ah6=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tI:D.ks
a7=C.Gg(b2,b3)
w=2
return A.b(C.AA(b1),$async$ah6)
case 2:a8=b5
a9=J.cG(a8)
b0=a9.bd(a8,new C.fGt(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bAq(b1,b2),$async$ah6)
case 5:case 4:if(b0===-1){u=b2.aD4(a6,a7)
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
i=i!==D.xQ?i:l.c
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
s.n(0,m,l.aD_(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.C(new A.bc(s,k),k.k("J.E"))
k=a5?D.tI:D.ks
u=t.yv(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Ql(b1,a8),$async$ah6)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aO1(B.a.i(b3.toLowerCase()),u),$async$ah6)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ah6,v)},
hfe(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a6().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("K<1,a4<n,@>>"),k=A.C(new A.K(m,C.hmv(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.F(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.F(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a6().ac(),"updatedAt",o],r,x.K),"createdAt",s.a6().ac(),"updatedAt",o],r,x.z)},
hff(d,e){var w=new A.S(Date.now(),0,!1).a6().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("K<1,a4<n,@>>")
u=A.C(new A.K(u,C.hmv(),t),t.k("ak.E"))
return A.F(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a6().ac(),"updatedAt",w],x.N,x.z)},
hPe(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a6(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.akb(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.K(j,A.h_P(),A.U(j).k("K<1,n>")).c_(0,new C.fcX())
t=A.C(j,j.$ti.k("J.E"))
if(u===v)s=D.tI
else s=B.d.t(t,u)?D.Mx:D.ks
return w.aD4(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.akb(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d9(q,h)
h=A.cF(h,new C.fcY(),h.$ti.k("J.E"),x.P)
p=A.a3(h).k("a1<J.E>")
o=A.C(new A.a1(h,new C.fcZ(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.fd_(),x.N).c_(0,new C.fd0())
t=A.C(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tI
else s=B.d.t(t,u)?D.Mx:D.ks
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.A(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bi(J.k(l==null?"":l))
if(l==null)l=new A.S(Date.now(),0,!1)
j=A.aJ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.N(j)
if(j==null)j=0
return new C.kC(h,r,p,!m,t,o,l,j,v,s)},
fd9(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fd9=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fdd()
h=x.N
g=x.z
w=7
return A.b(A.iM(A.a([A.lp("family_trees","*",null,A.F(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bH),r.$2(A.lp("family_trees","*",A.F(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bH),"collaborator"),r.$2(A.lp("family_trees","*",null,A.F(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bH),"public")],x.cl),x.U),$async$fd9)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.T(h,g)
h=A.C(p,g)
l=h
J.h0(l,o)
J.h0(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.L)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aF(m,j,k)}l=m
h=A.a3(l).k("bc<2>")
h=A.cF(new A.bc(l,h),new C.fda(a0),h.k("J.E"),x.k)
l=A.a3(h).k("a1<J.E>")
l=A.C(new A.a1(h,new C.fdb(),l),l.k("J.E"))
B.d.b0(l,new C.fdc())
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
return A.i($async$fd9,v)},
hRB(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a6(e)
if(j.gam(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dt(e,new C.fhm(),v).c_(0,new C.fhn())
t=A.db(u,u.$ti.k("J.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Gg(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.ks){m=q.e
m=!new A.K(m,A.h_P(),A.U(m).k("K<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gaf(e);j.C();){v=j.gS(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.i_o(l,v)
o=C.Gg(k,w)
p=v.d
s.n(0,u,o===w?k.baO(p,D.tI):k.baO(p,v.y))}j=s.$ti.k("bc<2>")
j=A.C(new A.bc(s,j),j.k("J.E"))
B.d.b0(j,new C.fho())
return j},
Ql(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Ql=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$Ql)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fjF(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.ar("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.R.ao(s,null)),$async$Ql)
case 3:return A.h(null,v)}})
return A.i($async$Ql,v)},
aO1(d,e){return C.hWI(d,e)},
hWI(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aO1=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lP("family_trees",A.a([C.hfe(e,d)],p),null,B.cH),$async$aO1)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lP("family_trees",A.a([C.hff(e,d)],p),null,B.cH),$async$aO1)
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
return A.i($async$aO1,v)},
aO2(d,e){return C.hWJ(d,e)},
hWJ(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aO2=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("K<1,a4<n,@>>")
m=n.k("ak.E")
l=A.C(new A.K(e,new C.fou(d),n),m)
r=l
w=7
return A.b(A.lP("family_trees",r,null,B.cH),$async$aO2)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.K(e,new C.fov(d),n),m)
p=k
w=8
return A.b(A.lP("family_trees",p,null,B.cH),$async$aO2)
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
return A.i($async$aO2,v)},
fct(d){return C.hOz(d)},
hOz(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fct=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.QK("family_trees",A.F(["id",d],x.N,x.z),null,B.cH),$async$fct)
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
return A.i($async$fct,v)},
qU:function qU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
li:function li(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cw1:function cw1(){},
cw0:function cw0(){},
cvZ:function cvZ(){},
cw_:function cw_(){},
Hn:function Hn(d,e){this.a=d
this.b=e},
hX:function hX(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
aka:function aka(d,e){this.a=d
this.b=e},
fqK:function fqK(){},
fOV:function fOV(d){this.a=d},
fpa:function fpa(d){this.a=d},
kC:function kC(d,e,f,g,h,i,j,k,l,m){var _=this
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
bN9:function bN9(){},
bN8:function bN8(){},
bN5:function bN5(){},
bN6:function bN6(){},
bN7:function bN7(){},
fgI:function fgI(){},
fcp:function fcp(){},
fcq:function fcq(){},
fcr:function fcr(){},
fGS:function fGS(){},
fGT:function fGT(){},
fGU:function fGU(){},
fGV:function fGV(d){this.a=d},
fGW:function fGW(){},
fOT:function fOT(d){this.a=d},
frb:function frb(d){this.a=d},
ftK:function ftK(){},
ftL:function ftL(){},
ftM:function ftM(){},
ftN:function ftN(){},
ftO:function ftO(d){this.a=d},
fGF:function fGF(d){this.a=d},
fOO:function fOO(){},
fOP:function fOP(){},
fOQ:function fOQ(d){this.a=d},
fqT:function fqT(d){this.a=d},
fqU:function fqU(d){this.a=d},
fP_:function fP_(){},
fqp:function fqp(d){this.a=d},
fqq:function fqq(d,e){this.a=d
this.b=e},
fqr:function fqr(){},
fOv:function fOv(d){this.a=d},
fuw:function fuw(){},
fGy:function fGy(){},
ftH:function ftH(){},
ftI:function ftI(){},
ftJ:function ftJ(){},
fGt:function fGt(d){this.a=d},
fcX:function fcX(){},
fcY:function fcY(){},
fcZ:function fcZ(){},
fd_:function fd_(){},
fd0:function fd0(){},
fdd:function fdd(){},
fde:function fde(d){this.a=d},
fda:function fda(d){this.a=d},
fdb:function fdb(){},
fdc:function fdc(){},
fhm:function fhm(){},
fhn:function fhn(){},
fho:function fho(){},
fjF:function fjF(){},
fou:function fou(d){this.a=d},
fov:function fov(d){this.a=d},
cw2:function cw2(d,e){this.a=d
this.b=e},
cw3:function cw3(d,e){this.a=d
this.b=e},
aGd:function aGd(d,e,f){this.a=d
this.b=e
this.c=f},
b7Q:function b7Q(){this.b=this.a=0},
b7P:function b7P(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
buX:function buX(){},
wG(d,e){var w,v
if(d==null)return""
w=d.bS()
v=""+w.gce()+"/"+w.gcu()+"/"+w.gcj()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gnb()),2,"0")+":"+B.a.aT(B.o.u(w.gG4()),2,"0")},
hFi(){var w,v=$.pq(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aC(32)]
return"WS"+B.d.fZ(u)},
arK(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$arK=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arK)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f3("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bH),$async$arK)
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
return A.i($async$arK,v)},
arL(d){return C.hFj(d)},
hFj(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$arL=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arL)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hE("ngmy_worksheet_project_qr_stashes_v1",A.F(["stashes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cH,null),$async$arL)
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
return A.i($async$arL,v)},
arN(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$arN=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arN)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hFi()
w=4
return A.b(C.arK(),$async$arN)
case 4:r=h
q=B.a.i(e)
p=B.dJ.aJ(t)
J.aF(r,s,A.F(["ownerEmail",q,"projectId",f,"payload",B.cS.gcw().aJ(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(C.arL(r),$async$arN)
case 5:u=new A.a_J("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arN,v)},
arM(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$arM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c3(),$async$arM)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.arK(),$async$arM)
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
m=A.dW(A.a2(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a6().ac())
p.n(q,i,m)}w=5
return A.b(C.arL(q),$async$arM)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arM,v)},
h9H(){var w=new A.S(Date.now(),0,!1).a6()
return"wst_"+(1000*w.a+w.b)+"_"+B.cI.aC(999999)},
hFk(d){var w,v,u,t,s,r,q
try{w=A.afW(d)
if(w==null)return d
v=w
if(J.L5(v)>960||J.L4(v)>960){s=v
r=J.L5(v)>=J.L4(v)?960:null
v=A.afV(s,J.L4(v)>J.L5(v)?960:null,B.NU,r)}s=v
u=A.aly(82).SG(s,B.yz)
if(J.ad(u)===0)return d
s=new Uint8Array(A.ce(u))
return s}catch(q){t=A.aa(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cfq(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cfq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hFk(e)
$.cfm.n(0,s,t)
u=C.bCr(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfq,v)},
b1w(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1w=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d_(l,"data:image")){u=null
w=1
break}t=4
r=J.f0(l,",")?B.d.gal(J.lr(l,",")):l
q=B.cG.aJ(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.h9H()
w=7
return A.b(C.cfq(p,q),$async$b1w)
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
return A.i($async$b1w,v)},
cfn(d){var w=0,v=A.j(x.T),u,t,s
var $async$cfn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cfp(s),$async$cfn)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcw().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfn,v)},
a80(d){var w=0,v=A.j(x.H),u,t
var $async$a80=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hmo(d)
if(t==null){w=1
break}$.cfm.W(0,t)
w=3
return A.b(C.bCq(t),$async$a80)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a80,v)},
bCr(d,e){return C.i5u(d,e)},
i5u(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bCr=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aMY
w=7
return A.b(n==null?$.aMY=I.fXq():n,$async$bCr)
case 7:r=g
q=new Uint8Array(A.ce(e))
p=J.mG(r,"thumbs","readwrite")
B.iE.mi(J.mE(p,"thumbs"),q,l)
w=8
return A.b(J.pt(p),$async$bCr)
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
return A.i($async$bCr,v)},
bCq(d){return C.i5s(d)},
i5s(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bCq=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aMY
w=7
return A.b(o==null?$.aMY=I.fXq():o,$async$bCq)
case 7:r=f
q=J.mG(r,"thumbs","readwrite")
B.iE.Fz(J.mE(q,"thumbs"),m)
w=8
return A.b(J.pt(q),$async$bCq)
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
return A.i($async$bCq,v)}},D,Ak,Al,A0,Am,An,Ao,I
J=c[1]
A=c[0]
B=c[2]
A1=c[77]
N=c[235]
R=c[150]
A2=c[219]
G=c[200]
F=c[31]
E=c[210]
A3=c[110]
A4=c[221]
A5=c[105]
A6=c[188]
S=c[112]
T=c[106]
A7=c[218]
A8=c[37]
M=c[217]
A9=c[80]
H=c[87]
Aa=c[157]
Ab=c[116]
U=c[160]
V=c[231]
W=c[189]
Ac=c[180]
Ad=c[192]
X=c[187]
Ae=c[65]
Af=c[71]
Ag=c[236]
Y=c[204]
Ah=c[30]
Ai=c[107]
K=c[182]
Aj=c[193]
Z=c[234]
A_=c[227]
O=c[108]
P=c[96]
L=c[133]
Q=c[69]
C=a.updateHolder(c[6],C)
D=c[230]
Ak=c[70]
Al=c[198]
A0=c[233]
Am=c[232]
An=c[97]
Ao=c[56]
I=c[54]
C.anH.prototype={}
C.aXS.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bf7(),f=h.x!=null&&h.yW(i).length===0
if(h.x!=null)w=f?B.aZ:B.bC
else w=h.gTi()?B.bC:B.dT
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.beJ,B.q,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.eLc,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h6,i,i,i),B.S,D.fdw,B.at,A.d(C.wG(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.f9r,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.b_2,i,i,i,i,B.Yv,i,i,i)
q=A.m(16)
p=A.I(B.aL,B.q,1)
o=A.I(B.aZ.j(0.28),B.q,1)
n=A.fZp(h.d)
o=A.p(B.A,C.aXR(A.fwU(h.e,n),30),B.f,i,i,new A.o(B.lJ,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.f4T,B.L,i,i)
m=A.m(14)
l=A.I(B.aL,B.q,1)
q=A.p(i,A.v(A.a([o,B.N,n,B.bB,D.fdO,B.ac,A.p(i,A.v(A.a([D.ft9,B.bB,A.d(A.AC(h.c),i,i,i,i,i,i,D.f_V,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.f8,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,K.aha,i,i,i)
p=A.m(16)
m=A.I(B.aL,B.q,1)
l=j.aPE("Original due",C.wG(h.r,!1))
n=j.aPE("Current due",C.wG(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.p(i,A.v(A.a([l,B.N,n,B.S,A.p(i,A.d(h.gaJQ(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.AV,i,i,1/0),B.S,j.cdC(),B.N,j.c18(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bm,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aL,B.q,1)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.feK,B.at,A.d(q,i,i,i,i,i,i,D.f4a,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bm,i,i,1/0)],s))}if(h.gaEF()){q=A.m(14)
o=A.I(B.cr,B.q,1.6)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fuq,B.N,A.bw(A.m(12),A.el(new A.a7(1/0,88,A.b3(i,i,i,new A.Vz(h.ax,B.M,D.eOZ,!0,3.5,i),B.au),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.F7,i,i,i)],s))}p.push(B.aB)
p.push(D.fmJ)
return A.p(i,A.v(A.a([r,new A.D(B.ahd,A.v(p,B.aj,i,B.e,B.j,0,B.p),i)],s),B.aj,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aPE(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.a7N,w,w,w),1),A.d(e,w,w,w,w,w,w,D.f0U,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
cdC(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a8J(B.dT,u,"Not paid yet")
w=t.yW(null).length
v=w===0?B.aZ:B.bC
return this.a8J(v,u,C.wG(t.x,!0))},
c18(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a8J(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a8J(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a7N,u,u,u)
v=A.U(d).k("K<1,hk>")
v=A.C(new A.K(d,new C.c1d(),v),v.k("ak.E"))
return A.v(A.a([w,B.am,A.bV(B.bz,v,B.bq,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a8J(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.a7N,w,w,w),1),new A.dq(1,B.cn,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dM,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b9Z.prototype={
a4(d,e){new A.Vz(this.b,B.M,e,!0,3.5,null).a4(d,e)},
au(d){return d.b!==this.b}}
C.anO.prototype={
R(){return new C.aC4(A.a([],x.bp))},
ge_(){return this.c}}
C.aC4.prototype={
a_(){this.a1()
this.Iq()},
Iq(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Iq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1u(t.a.c),$async$Iq)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dFu(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Iq,v)},
aRB(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aP,s=A.l(v,v,u?B.br:B.bk,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.br:B.bk).j(0.22)
w=A.m(10)
return A.bs(v,new A.b4(4,r,new A.ay(u,1,B.q,-1)),v,B.bm,v,v,v,v,!0,new A.b4(4,w,new A.ay((this.a.d.a?B.br:B.bk).j(0.22),1,B.q,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.m(10),D.aXF),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aRA(d){return this.aRB(d,null)},
P_(d){return this.chb(d)},
chb(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$P_=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Gm:B.eG
w=7
return A.b(new A.hY().BV(72,900,900,n),$async$P_)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fj(),$async$P_)
case 8:p=f
n=B.cS.gcw().aJ(p)
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
if(n!=null)n.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d("Could not pick photo: "+A.t(o),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$P_,v)},
b_5(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aP,o=A.m(10),n=A.I((q?B.br:B.bk).j(0.18),B.q,1)
if(d)q=B.cY
else q=s.a.d.a?B.br:B.bk
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.az,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cY
else u=s.a.d.a?B.br:B.bk
t=x.p
u=A.E(A.v(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a5,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fv(r,r,r,r,r,r,r,r,r,r,r,B.cY,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cc)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cD,s.a.d.a?B.br:B.bk,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cc))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.kr,D.bqx,r,r,r)},
CU(d){return this.bym(d)},
byl(){return this.CU(null)},
bym(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CU=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.as(new A.bb(a4,B.b4,B.aN),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.k_(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.aa(p,2)}o=new A.as(new A.bb(a4,B.b4,B.aN),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.as(new A.bb(a4,B.b4,B.aN),s)
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
i=a3?null:A.fZp(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.w3?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hT(B.w.j(0.55),!0,"Dismiss",a4,new C.dFd(),new C.dFe(a2,t,a5,r,new C.dFf(a2,t),o,n,j),B.eF,!0,x.y),$async$CU)
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
break}if(f.length===0||e<=0){t.c.I(x.q).f.T(D.eVk)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.T(D.eU_)
w=1
break}a1=A.fwU(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.w3?"male":"female"
w=7
return A.b(A.ahk(a3,A.h6q(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$CU)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.w3?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a9(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c1(a3.gcj(),a3.gce(),a3.gcu(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcj(),a4.gce(),a4.gcu(),0,0,0,0,0)))a5.cK3(a2.a)
w=8
return A.b(A.ahk(t.a.c,a5),$async$CU)
case 8:case 5:w=9
return A.b(t.Iq(),$async$CU)
case 9:case 1:return A.h(u,v)}})
return A.i($async$CU,v)},
aSd(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cY.j(0.14)
else w=this.a.d.a?B.M:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cY
else s=(this.a.d.a?B.br:B.bk).j(0.2)
s=A.I(s,B.q,g?1.5:1)
r=C.aXR(d,18)
if(g)q=B.cY
else q=this.a.d.a?B.aP:B.az
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,A.p(p,A.B(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.bb,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bU,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ag)},
RF(d){return this.cyH(d)},
cyH(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$RF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hT(B.w.j(0.55),!0,"Dismiss",s,new C.dFx(),new C.dFy(t,d),B.hY,!0,x.y),$async$RF)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.S(s,0,!1)
case 4:w=7
return A.b(A.ahk(t.a.c,d),$async$RF)
case 7:w=8
return A.b(t.Iq(),$async$RF)
case 8:case 1:return A.h(u,v)}})
return A.i($async$RF,v)},
NE(d,e){return this.bJ8(0,e)},
bJ8(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.l3(s,"Cancel","Delete",e.b+" \xb7 "+A.AC(e.c)+" will be removed from this device.","Delete this debt?"),$async$NE)
case 3:if(!g){w=1
break}w=4
return A.b(C.fr_(t.a.c,e.a),$async$NE)
case 4:w=5
return A.b(t.Iq(),$async$NE)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NE,v)},
aee(d){return this.cb4(d)},
cb4(d){var w=0,v=A.j(x.H),u=this,t
var $async$aee=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bQ(B.K,null,new C.dFr(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$aee)
case 2:return A.h(null,v)}})
return A.i($async$aee,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.e7K
w=J.dH(m.d,new C.dFz())
v=A.C(w,w.$ti.k("J.E"))
w=J.dH(m.d,new C.dFA())
u=A.C(w,w.$ti.k("J.E"))
t=B.d.cI(v,0,new C.dFB())
w=A.m(18)
s=m.a.d.a
r=s?D.cnD:D.axv
q=A.I(s?B.cY.j(0.35):B.cY.j(0.18),B.q,1)
s=A.p(l,D.bQ3,B.f,l,l,new A.o(B.cY.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.av,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.az,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a1,!0,A.m(12),A.aL(!1,A.m(12),!0,D.e78,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dFC(m),l,l,l,l,l,l,l),B.f,B.cY,0,l,l,l,l,l,B.ag)],p),B.m,l,B.e,B.j,0,l,l)
o=A.E(m.cuV("Open",""+v.length),1)
n=v.length===0?"$0.00":A.AC(t)
r=A.a([A.p(l,A.v(A.a([s,B.ac,A.B(A.a([o,B.ab,A.E(m.b5d(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.ax,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.ah7,l,l,l),B.aB],p)
if(J.cn(m.d)){w=m.a.d.a
s=w?B.dY:B.c
q=A.m(18)
o=A.I((w?B.br:B.bk).j(0.12),B.q,1)
n=A.p(l,D.bL_,B.f,l,l,new A.o(B.cY.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.az,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.ac,w,B.at,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.br:B.bk,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bsX,l,l,1/0))}else{w=m.gcgu()
s=A.C(new A.K(v,w,A.U(v).k("K<1,r>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.buC,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.br:B.bk,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.K(u,w,A.U(u).k("K<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.aj,l,B.e,B.j,0,B.p)},
b5d(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.br:B.bk).j(0.12),B.q,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.br:B.bk,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cY
else w=v.a.d.a?B.aP:B.az
return A.p(u,A.v(A.a([q,B.bB,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ej,u,u,u)},
cuV(d,e){return this.b5d(!1,d,e)},
cgv(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.yW(j).length,h=d.bek()
if(d.x!=null){w=d.yW(j).length
v=w===0?B.cY:B.bC}else if(d.gTi())v=B.bC
else{if(h)w=B.cY
else w=k.a.d.a?B.br:B.bk
v=w}if(d.x!=null){w=d.yW(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wG(u,!1)}else{u.toString
t="Paid "+C.wG(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wG(w,!1)+" \xb7 "+i+" missed":"Due "+C.wG(w,!1)}w=k.a.d.a?B.dY:B.c
u=A.m(18)
if(d.gTi()&&d.x==null)s=B.bC.j(0.35)
else s=(k.a.d.a?B.br:B.bk).j(0.12)
s=A.I(s,B.q,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bo:B.lJ
o=A.I(d.gTi()&&d.x==null?B.bC.j(0.45):B.cY.j(0.28),B.q,1.4)
n=d.x!=null?0.55:1
m=A.fZp(d.d)
o=A.p(B.A,A.dc(C.aXR(A.fwU(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.az
m=x.p
n=A.a([new A.dq(1,B.cn,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaEF())B.d.v(n,A.a([B.ec,A.X(B.MY,B.cY.j(0.8),j,j,j,14)],m))
p=A.E(A.v(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.cV,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.AC(d.c)
l=k.a.d.a?B.aP:B.az
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aG(!1,B.a1,!0,j,A.aL(!1,q,!0,new A.D(V.agS,A.B(A.a([o,B.bd,p,B.ab,A.v(A.a([n,B.bB,A.X(B.ey,(k.a.d.a?B.br:B.bk).j(0.5),j,j,j,18)],m),B.dz,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dFt(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ag),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.da,j,j,j,j)}}
C.u8.prototype={}
C.ak9.prototype={
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
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cB,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.I(r.j(0.6),B.q,1)
n.push(A.aE(a0,A.p(a0,A.X(B.cD,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a8))
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
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.atY,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.Fo,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f4(m,A.B(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.ei)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bpL,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cF:B.bn,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fr,A.v(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.ePK)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.vl,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a3,B.a7,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lj,A.v(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.q,1),a2,a0,a0,B.n),a0,a0,a0,B.hm,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.ax,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bqX,a0,a0,a0,a0)}}
C.aTF.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bg?B.bg:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bn:B.cF,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.j,0,q,q),B.cV,n],m)
if(p.z)o.push(new A.D(B.vi,n,q))
return new A.D(B.da,A.v(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.Sn.prototype={
R(){return new C.bdB()}}
C.bdB.prototype={
gbXa(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.e7F,D.e7L],l)
for(w=0;w<8;++w){v=D.a1v[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.G7:B.BD
q=t===s
r=A.X(r,q?B.eA:B.c1,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.x(v.b,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bD(1,B.bh,new A.x(v.c,n,A1.Da,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aT(24,24)
p=new A.ay(B.eA,2,B.q,-1)
s=new A.o(n,n,new A.bO(p,p,p,p),new A.bq(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aE(n,new A.D(B.eB,A.v(A.a([new A.D(B.mp,new A.cm(B.aO,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.DK(!0,new C.ak9(v,q.d,q.e,new C.d5h(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d5i(o,v),n,n,n,n,n,n,!1,B.a8))}k.push(new A.D(D.brf,A.bG(D.fzI,new C.d5j(o,d),A.bm(B.b7,n,n,n,n,B.of,n,n,new A.b7(A.m(16),B.Y),n,n,n)),n))
return A.bl(!0,new A.cS(new A.aY(0,1/0,0,m.a.b*0.9),A.cz(k,n,D.bvt,n,n,B.ah,!0),n),!0,!1,B.af,!0,!0)}}
C.na.prototype={
ag(){var w=this
return A.F(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a6().ac()],x.N,x.z)},
bb_(d,e,f){return new C.na(this.a,e,d,f)}}
C.Hm.prototype={
wh(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Hm(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aCU(d){var w=null
return this.wh(w,w,w,w,w,d,w,w,w,w,w,w)},
cFS(d){var w=null
return this.wh(w,w,w,w,d,w,w,w,w,w,w,w)},
baY(d,e,f){var w=null
return this.wh(d,w,w,w,w,w,w,w,e,w,f,w)},
cGw(d){var w=null
return this.wh(w,w,w,w,w,w,d,w,w,w,w,w)},
cGF(d){var w=null
return this.wh(w,w,w,w,w,w,w,w,w,d,w,w)},
cFQ(d){var w=null
return this.wh(w,w,w,d,w,w,w,w,w,w,w,w)},
cGH(d){var w=null
return this.wh(w,w,w,w,w,w,w,w,w,w,w,d)},
cFN(d){var w=null
return this.wh(w,w,d,w,w,w,w,w,w,w,w,w)},
cFI(d){var w=null
return this.wh(w,d,w,w,w,w,w,w,w,w,w,w)},
Fs(d){var w=null
return this.wh(w,w,w,w,w,w,w,d,w,w,w,w)},
cGP(d,e,f,g,h,i,j,k,l,m,n){return this.wh(d,e,f,g,null,h,i,j,k,l,m,n)},
ag(){var w=this
return A.F(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cDu(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bN4(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Ci.gec(D.Ci))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a35)
q=l.$2("frame",D.a2u)
l=l.$2("texture",D.a2p)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cGP(p,u,t,q,r,A.qK(d.h(0,"ribbon"))?A.FS(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.YU.prototype={
R(){return new C.az8(A.a([],x.I),D.Mw)},
ge_(){return this.c}}
C.az8.prototype={
a_(){var w,v=this
v.a1()
v.f=A.zq(0,1)
w=$.aw()
v.z=new A.as(B.as,w)
v.Q=new A.as(B.as,w)
v.kT()
w=v.a
C.bAP(w.c,w.d).bz(new C.d5Y(v),x.fL)},
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
return A.b(C.Kz(s.c,s.d),$async$kT)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d5M(t,r))
t.auM()
case 1:return A.h(u,v)}})
return A.i($async$kT,v)},
garq(){var w,v=this
if(!J.cn(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
auM(){var w,v,u=this.garq(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saV(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saV(0,w==null?"":w)},
c9v(d){this.m(new C.d5J(this,d))
this.auM()},
N_(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$N_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.na(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aPP(r.c,r.d,s),$async$N_)
case 3:w=4
return A.b(t.kT(),$async$N_)
case 4:if(t.c==null||J.cn(t.d)){w=1
break}q=J.qc(t.d,new C.d5k(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d5l(t,p))
t.auM()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.AY(p+1,B.ct,B.kP),$async$N_)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$N_,v)},
AE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.garq()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aPP(o.c,o.d,new C.na(s,r,q,new A.S(p,0,!1))),$async$AE)
case 3:w=4
return A.b(t.kT(),$async$AE)
case 4:if(t.c==null){w=1
break}t.m(new C.d5N(t))
case 1:return A.h(u,v)}})
return A.i($async$AE,v)},
NF(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.garq()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d5t(r),s,null,!0,!0,x.y),$async$NF)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bAA(s.c,s.d,r.a),$async$NF)
case 4:t.m(new C.d5u(t))
w=5
return A.b(t.kT(),$async$NF)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Tl(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$NF,v)},
yf(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AE(),$async$yf)
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
return A.b(C.QC(s,r.r,o,p,q),$async$yf)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a5(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hmS(s,r.x,r.r),$async$yf)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Kz(s.c,s.d),$async$yf)
case 10:l=e
for(s=n.d,r=J.cG(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.K(l,new C.na(""+(m+k),q,B.a.i(j.b),new A.S(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.AL(r.c,r.d,l),$async$yf)
case 11:w=12
return A.b(t.kT(),$async$yf)
case 12:r=t.c
if(r==null){w=1
break}r.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yf,v)},
a_Y(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_Y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AE(),$async$a_Y)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyd(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dL(D.yG,new C.d5K(t),new C.d5L())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mq("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gS(o)
p.push(new F.mq(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.h02(o,new F.rf(s,r,"",p,new F.ur(q.d,null,null,null,null,"","","")),null),$async$a_Y)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a_Y,v)},
Nn(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Nn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AE(),$async$Nn)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bQ(D.acu,null,new C.d5p(t),s,!0,!0,!0,P.Sn,!1,!1,x.N),$async$Nn)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cFS(r)
t.m(new C.d5q(t,q))
s=t.a
w=7
return A.b(C.Rb(s.c,s.d,q),$async$Nn)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Nn,v)},
Wx(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bQ(D.acu,null,new C.d5v(t),r,!0,!0,!0,P.Sn,!1,!1,x.e),$async$Wx)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d5w(t,s))
r=t.a
w=4
return A.b(C.Rb(r.c,r.d,s),$async$Wx)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.AY(0,B.dU,B.oF)
case 1:return A.h(u,v)}})
return A.i($async$Wx,v)},
bOm(d){var w=d.bS(),v=B.a.aT(B.o.u(w.gce()),2,"0"),u=B.a.aT(B.o.u(w.gcu()),2,"0")
return""+w.gcj()+"-"+v+"-"+u},
gyd(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bWo()
if(r.e)w=D.abj
else if(J.cn(r.d)){w=r.y
v=r.gyd(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.f_n,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.D(A_.ai7,new C.Yc(w,v,0,q),q),q),B.by,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kh.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aE(q,A.p(q,D.eL2,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dQ.j(0.45),B.J,18)],x.V),E.vU,B.n),q,q,q,q,B.YF,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcCB(),q,q,q,q,q,q,!1,B.a8))
w.push(B.S)
w.push(A.hg(D.bHf,D.fzb,r.gaLz(),q))
B.d.v(u,w)}w=A.av(A.cd(A.v(u,B.m,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.ex,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kh.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dR:B.A4
u=A.v(A.a([new A.D(D.bsg,w,q),A.E(A.IH(v,new C.d5W(r),J.ad(r.d)+1,q,r.gc9u(),u,B.aO),1),r.bBf()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c8(q,D.adP,new A.an(B.W,q,B.b0,B.r,A.a([D.aKJ,A.bl(!0,A.v(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bWo(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cy(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.JG(B.dW,"AI",h.gbz8(),!0))
if(h.a.f)f.push(new C.JG(B.nh,"Cover",h.gbJI(),!1))
if(h.a.f)f.push(new C.JG(B.yj,"Header",h.gbEG(),!1))
if(J.cy(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.JG(B.tX,"Print",h.gciv(),!1))
if(h.a.f&&J.cy(h.d)&&h.r>=0){v=h.w
u=v?B.hz:B.jk
t=v?"Save":"Edit"
f.push(new C.JG(u,t,v?h.gcoJ():new C.d5G(h),!1))}if(h.a.f)f.push(new C.JG(B.hy,"Add page",h.gaLz(),!1))
v=C.hj4(h.y.Q)
u=h.gyd(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.doI
else{k=new A.aT(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.jQ.j(0.5),1,B.q,-1)
j=A.p(g,A.X(l.a,D.kh,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bO(i,i,i,i),new A.bq(k,k,k,k),g,new A.a8(B.a3,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kh.j(0.85)
p.push(new A.bD(1,B.bh,A.aE(B.c4,A.v(A.a([k,B.bB,new A.x(l.b,g,new A.G(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a8),g))}return new C.ak9(v,u,t+" \xb7 "+s+" "+r,new C.d5H(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
zH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AE(),$async$zH)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gS(r)
s.push(q.b+" "+q.c)}p=F.a1J(B.d.aI(s," "))
s=t.c
s.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.d5m(t,p),s,null,!0,!0,x.N),$async$zH)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.yf(),$async$zH)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Dv(),$async$zH)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.F5("Swahili (Kiswahili)",!0),$async$zH)
case 18:w=16
break
case 17:w=19
return A.b(t.czk(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zH)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zH,v)},
Yp(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(E.jQ.j(0.3),B.q,1),r=x.p
return new A.D(B.cz,A.aL(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.vU,B.a6),w,42,w,w,w,w,w,42),B.bd,A.E(A.v(A.a([A.d(f,w,w,w,w,w,w,A9.Tn,w,w,w),A.d(g,w,w,w,w,w,w,A3.Th,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bm,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d5I(d,h),w,w,w,w,w,w,w),w)},
Dv(){return this.bNR()},
bNR(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Dv=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d5z(r),a7,null,!0,!0,x.ei),$async$Dv)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eS("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.ca(null,null,!1,null,new C.d5A(o),a7,null,!0,!0,x.H).ff(new C.d5B(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.L)(d),++a1){k=d[a1]
J.ch(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ag()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.yG[a1]
J.ch(j,i.a)}w=8
return A.b(C.agu(a0,a7,new C.d5C(o),d,l,e,j),$async$Dv)
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
l.shW($.aw())
J.aQf(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.I(x.q).f
j=n
l.T(A.b2(null,null,null,null,null,B.r,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gco(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.ai(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.bb_(m.b.h(0,a4).b,a7,new A.S(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.AL(j.c,j.d,l),$async$Dv)
case 11:w=12
return A.b(r.kT(),$async$Dv)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.yG[a1].a)
a5=l.cDu(j,12,a7)
l=r.a
w=15
return A.b(C.Rb(l.c,l.d,a5),$async$Dv)
case 15:if(r.c!=null)r.m(new C.d5D(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.AY(0,B.dU,B.oF)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.I(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b2(a3?A.cqv("Undo",new C.d5E(r,p,f),null):null,null,null,null,null,B.r,null,j,null,B.ef,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Dv,v)},
F5(d,e){return this.czl(d,e)},
czk(d){return this.F5(d,!1)},
czl(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$F5=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eS("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.ca(null,null,!1,null,new C.d5P(a0),k,null,!0,!0,x.H).ff(new C.d5Q(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.ch(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a1W(m,new C.d5R(a0)),$async$F5)
case 10:w=8
break
case 9:w=11
return A.b(C.bCi(new C.d5S(a0),m,a2),$async$F5)
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
o.shW($.aw())
J.aQf(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.I(x.q).f
k=q
o.T(A.b2(null,null,null,null,null,B.r,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.bb_(J.q(p,g).b,j.a,new A.S(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.AL(k.c,k.d,o),$async$F5)
case 12:w=13
return A.b(r.kT(),$async$F5)
case 13:o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(A.cqv("Undo",new C.d5T(r,d),null),null,null,null,null,B.r,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$F5,v)},
bBf(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d5n(v):u
r=A.aH(u,u,u,u,A.X(D.bCX,s?D.kh:B.b3,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cy(v.d)&&!v.w&&v.r>=0)s=A.hg(A.X(B.vy,B.EL,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.EL,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbJh(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kh.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.av(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d5o(v):u
return A.bl(!0,new A.D(D.bs4,A.B(A.a([r,s,A.aH(u,u,u,u,A.X(B.ey,t<J.ad(v.d)?D.kh:B.b3,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.YY.prototype={
R(){return new C.bdW(new A.as(B.as,$.aw()))}}
C.bdW.prototype={
ga15(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a2()},
gbMA(){var w,v=this.ga15()
A:{if("cover"===v){w=D.cTQ
break A}if("book"===v){w=D.cPE
break A}w=D.dhd
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jQ.j(0.5),n=x.p,m=A.B(A.a([D.doJ,B.av,D.bxt,A.aH(q,q,q,q,B.lq,q,q,q,new C.d7I(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.j7(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d7J(r),r.ga15()==="page",q,q,q,q))
if(r.a.d)l.push(A.j7(q,q,q,D.ftX,q,new C.d7K(r),r.ga15()==="book",q,q,q,q))
l.push(A.j7(q,q,q,D.fho,q,new C.d7L(r),r.ga15()==="cover",q,q,q,q))
l=A.bV(B.bz,l,B.bq,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.T,!1,q,!0,B.r,q,A.aN(),r.d,q,q,q,q,q,2,A.bs(q,new A.b4(4,A.m(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kG,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dn,!0,B.a4,q,B.an,q,q,q,q)
w=A.a([],n)
for(v=r.gbMA(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mH(q,B.c.j(0.08),new A.x(s,q,B.IR,q,q,q,q,q,q,q,q,q),B.hD,new C.d7M(r,s),q,q,q,q))}return A.eJ(q,E.AA,A.cd(A.v(A.a([m,B.S,D.fx8,B.am,l,B.ac,k,B.N,A.bV(B.bz,w,B.bq,6,6),B.aB,A.df(D.bHc,D.fxU,new C.d7N(r,d),A.bm(B.b7,q,q,q,q,B.of,q,q,new A.b7(A.m(16),B.Y),q,q,q)),B.at,D.fsi],n),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.fA,q,q,B.ah),q,q,q,D.ahR,B.d0,q,new A.b7(p,new A.ay(o,1.4,B.q,-1)),q)}}
C.YW.prototype={
R(){return new C.az9(A.a([],x.Y))},
ge_(){return this.c}}
C.aeg.prototype={}
C.az9.prototype={
a_(){this.a1()
this.kT()},
kT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.QG(p.c,p.d),$async$kT)
case 3:o=e
n=A.a([],x.Y)
p=J.aV(o)
case 4:if(!p.C()){w=5
break}s=p.gS(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bAP(r.c,q),$async$kT)
case 6:j=e
i=J
w=7
return A.b(C.Kz(t.a.c,q),$async$kT)
case 7:m.push(new l.aeg(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d6c(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kT,v)},
b6o(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
PG(d,e){return this.cb2(0,e)},
cb2(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$PG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a5(s,!1).c5(A.e8(new C.d6b(u,e),!0,null,x.y)),$async$PG)
case 2:t=g
w=3
return A.b(u.kT(),$async$PG)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.T(D.aO7)
return A.h(null,v)}})
return A.i($async$PG,v)},
F8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$F8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.T(D.aO3)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.afO(s.c,s.d),$async$F8)
case 5:q=e
w=6
return A.b(t.kT(),$async$F8)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.PG(0,B.d.hR(t.d,new C.d6g(q))),$async$F8)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.QC(p,s.f,r,n,o),$async$F8)
case 10:m=e
w=11
return A.b(t.kT(),$async$F8)
case 11:if(m&&t.c!=null)t.c.I(x.q).f.T(D.aO7)
case 1:return A.h(u,v)}})
return A.i($async$F8,v)},
Pa(d,e){return this.cms(0,e)},
cms(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Pa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d6f(t,e),s,null,!0,!0,x.y),$async$Pa)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a28(s.c,s.d,e.a),$async$Pa)
case 4:w=5
return A.b(t.kT(),$async$Pa)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Pa,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bBi(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(E.jQ.j(0.6),B.q,1.6)
r=t===1?"space":"spaces"
k.push(A.aE(n,new A.fG(0.7142857142857143,A.p(n,A.v(A.a([D.doK,B.ac,D.e6O,B.at,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kh.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.bb,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcCx(),n,n,n,n,n,n,!1,B.a8))}w=A.m(22)
v=A.I(E.jQ.j(0.85),B.q,1.6)
s=A.aE(n,A.p(n,D.bOQ,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jQ.j(0.6),B.q,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d6h(d),n,n,n,n,n,n,!1,B.a8)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.jQ.j(0.5),B.q,1)
w=A.p(n,A.B(A.a([s,B.bd,D.bxP,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eZt,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h6,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bUy,B.n),n,n,n,Am.LZ,D.bqc,n,n,n)
if(o.e)k=D.abj
else k=k.length===0?D.b40:A.cp(new C.d6i(k))
return A.c8(n,D.adP,new A.an(B.W,n,B.b0,B.r,A.a([D.aKJ,A.bl(!0,A.v(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bBi(d){var w,v,u=this,t=null,s=u.b6o(d),r=d.c,q=x.p,p=A.a([A.bZ(0,A.f4(B.A,new A.a7(300,420,new C.Yc(d.b,s,r,t),t),B.f,B.du),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aE(t,A.p(t,D.bO9,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b3,B.q,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d69(u,d),t,t,t,t,t,t,!1,B.a8),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.eZ3,t,t,t)
v=r===1?"page":"pages"
return A.aE(t,A.v(A.a([new A.fG(0.7142857142857143,new A.an(B.W,t,B.aa,B.r,p,t),t),B.N,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kh.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d6a(u,d),t,t,t,t,t,t,!1,B.a8)}}
C.JG.prototype={}
C.Yc.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dL(D.yG,new C.cEN(m),new C.cEO()),j=m.c,i=D.Ci.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.lX:B.bb
v=new C.cEP(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.e47,28)],x.V)
u=x.p
t=A.a([A.bZ(0,A.b3(l,l,l,new C.bbb(j.x,h,l),B.au),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a3,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aT(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bq(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.ai8,8,0.85,2.2),v.$4(D.buV,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.ai8,8,0.85,2.4))
else if(r==="corners")t.push(A.bZ(0,new A.D(D.buR,A.b3(l,l,l,new C.bb2(h,l),B.au),l),0,0,0))
r=A.X(D.awB[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.atY,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cF,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aQ,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bZ(0,new A.D(D.bvl,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aG8(l),D.eOS),l,l,l,46,0,l))
return A.p(l,A.bw(D.aa0,new A.an(B.W,l,B.aa,B.r,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.aa0,i,new A.a8(B.ax,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bbb.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eM()
f.dB(11)
switch(this.b){case"plain":return
case"linen":$.W()
w=A.N()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.H()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.W()
q=A.N()
q.r=B.c.j(0.05).gp(0)
q.c=1
for(p=0;p<u;p+=4){r=q.H()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.aj()
l=f.aj()
k=f.aj()
$.W()
j=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
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
k=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.H()
k=h.gbK().a.snapshot()
o.drawPath((h.e=new A.cE(k)).a,r)
r.delete()}break
default:$.W()
w=A.N()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.aj()
m=f.aj()
l=f.aj()
r=w.H()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.W()
g=A.N()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.aj()
m=f.aj()
l=f.aj()
r=g.H()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
au(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bb2.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.W(),k=A.N(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bP
for(w=e.a,v=e.b,v=[D.eG2,new A.cC([w,0,-1,1]),new A.cC([0,v,1,-1]),new A.cC([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
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
s=n.gbK().a.snapshot()
w.drawPath((n.e=new A.cE(s)).a,m)
m.delete()
s=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
s.r=j.j(0.9).gp(0)
m=s.H()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
au(d){return!d.b.A(0,this.b)}}
C.u9.prototype={}
C.Yu.prototype={
R(){return new C.bb9()}}
C.bb9.prototype={
go3(){var w=this.d
return w===$?this.d=this.a.c:w},
gyd(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.as(new A.bb(w.b,B.b4,B.aN),$.aw())}return v},
gaA8(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.as(new A.bb(w.c,B.b4,B.aN),$.aw())}return v},
gapZ(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.as(new A.bb(w.y,B.b4,B.aN),$.aw())}return v},
q(){var w=this,v=w.gyd(0),u=v.U$=$.aw()
v.P$=0
v=w.gaA8()
v.U$=u
v.P$=0
v=w.gapZ()
v.U$=u
v.P$=0
w.a2()},
aqB(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.j7(s,s,s,new A.x(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cYe(this,f,u),e===u,s,s,s,s))}return A.bV(B.bz,r,B.bq,6,8)},
awc(d){var w=null,v=B.c.j(0.07)
return A.bs(w,new A.b4(4,A.m(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.kF,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.go3(),a0=f.gyd(0),a1=a0.a.a,a2=f.gaA8(),a3=a2.a.a,a4=f.gapZ(),a5=d.baY(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a7(190,260,A.f4(B.A,new A.a7(270,370,new C.Yc(a5,d,f.a.e,e),e),B.f,B.du),e),e,e,e)
a0=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a0,e,e,e,e,e,2,f.awc("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYD(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dn,!0,B.a4,e,B.an,e,e,e,e)
a2=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a2,e,e,e,e,e,2,f.awc("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYE(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dn,!0,B.a4,e,B.an,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.yG[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b3
q=r.a===q
o=new A.ay(p,q?3:1,B.q,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bO(o,o,o,o),e,e,new A.a8(B.ax,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aA
v.push(A.aE(e,A.v(A.a([p,B.cV,new A.x(t.b,e,new A.G(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYF(f,t),e,e,e,e,e,e,!1,B.a8))}v=A.bV(B.bz,v,B.bq,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b7.j(0.35):B.c.j(0.07)
m=new A.aT(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eA:B.K,2,B.q,-1)
q.push(A.aE(e,A.p(e,A.X(D.awB[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bO(o,o,o,o),new A.bq(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYG(f,n),e,e,e,e,e,e,!1,B.a8))}q=A.bV(B.bz,q,B.bq,8,8)
a4=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a4,e,e,e,e,e,2,f.awc("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYH(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dn,!0,B.a4,e,B.an,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mK,e,e,e)
m=A.a([],w)
for(l=D.Ci.gdK(D.Ci),l=l.gaf(l);l.C();){k=l.gS(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eA:B.b3
g=r.e===i
o=new A.ay(h,g?3:1,B.q,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bO(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aA
m.push(A.aE(e,A.v(A.a([j,B.bB,new A.x(i,e,new A.G(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYI(f,k),e,e,e,e,e,e,!1,B.a8))}m=A.bV(B.bz,m,B.bq,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mK,e,e,e)
k=f.go3()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bl(!0,new A.cS(new A.aY(0,1/0,0,a1.a.b*0.92),A.cz(A.a([D.frL,B.ac,d,B.aQ,a0,B.S,a2,B.aB,D.fxI,B.N,v,B.aB,D.frV,B.N,q,B.aB,a4,B.aB,p,B.N,m,B.aB,l,A.kZ(e,9,""+B.k.V(f.go3().f),36,18,new C.cYJ(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mK,e,e,e),B.am,f.aqB(D.a35,f.go3().r,new C.cYK(f),D.dkn),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mK,e,e,e),B.am,f.aqB(D.a2u,f.go3().w,new C.cYL(f),D.dks),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mK,e,e,e),B.am,f.aqB(D.a2p,f.go3().x,new C.cYN(f),D.dlT),B.am,A.iF(e,B.b7,e,B.af,e,new C.cYO(f),e,e,e,D.fme,f.go3().z),B.by,A.bG(D.fqC,new C.cYP(f,a6),A.bm(B.b7,e,e,e,e,B.of,e,e,new A.b7(A.m(16),B.Y),e,e,e))],w),e,An.Ma,e,e,B.ah,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aG8.prototype={
a4(d,e){var w,v,u,t=new A.aO($.W().r,B.ap,null,null,A.a([],x.v))
t.F(new A.b5(0,0))
w=e.a
t.F(new A.ap(w,0))
v=e.b
t.F(new A.ap(w,v))
t.F(new A.ap(w/2,v-12))
t.F(new A.ap(0,v))
t.F(new A.bF())
u=A.N()
u.saq(D.bVc.av(0,new A.a9(0,0,0+w,0+v)))
d.aP(t,u)},
au(d){return!1}}
C.bgp.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=A.N()
w.saq(D.bUe.av(0,new A.a9(0,0,a3,a4)))
a5.aY(new A.a9(0,0,a3,a4),w)
v=B.k.dw(a2/112)
u=new A.eM()
u.dB(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cTP[u.aC(9)]
j=u.aC(14)
J.by(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a9(n,j,n+m,j+l)
h=A.bx(i,B.hc)
g=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
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
e=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
e.r=E.jQ.j(0.55).gp(0)
d=e.H()
w.drawRect(A.c_(new A.a9(h,j,g,j+2)),d)
d.delete()
j=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
j.r=E.jQ.j(0.4).gp(0)
d=j.H()
w.drawRect(A.c_(new A.a9(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aC(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.saq(D.bTC.av(0,new A.a9(0,r,a3,q)))
d=p.H()
w.drawRect(A.c_(new A.a9(0,r,a3,q)),d)
d.delete()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.jo
d=p.H()
w.drawRect(A.c_(new A.a9(0,q,a3,q+14)),d)
d.delete()}w=A.N()
w.r=D.b7u.j(0.72).gp(0)
a5.aY(new A.a9(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.N()
a4.saq(new A.bT(B.A,0.5,B.x,a0,0,A.a([D.bej.j(0.22),B.K],t),a0,a0).av(0,A.bU(new A.u(w,a2),a1)))
a5.ae(new A.u(w,a2),a1,a4)},
au(d){return!1}}
C.b9n.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aK(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.kP(new A.o(A.aq(D.kh,D.biK,w/4),o,new A.bO(B.Y,new A.ay(B.w.j(0.12),1,B.q,-1),B.Y,B.Y),B.K0,o,o,B.n),B.be,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aGn,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aT(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jQ.j(0.6),o,o,new A.bq(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.q4,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aXp,u,D.bVa,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dl,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aG8(o),D.eON),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aTF(p.y,r,G.iv,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.r,o,o,o,o,o,2,A.bs(o,B.ez,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iv.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.fbJ,!0,B.a4,o,B.an,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iv.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.w,o,o,o,o,o,2,A.bs(o,B.ez,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iv.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f2W,!0,B.a4,B.zt,B.an,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fbB,o,o,o),B.at,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iv.j(0.5),o,o,o,o,o,o,o,o,11,B.cF,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.N,A.B(A.a([A.E(A.p(o,o,B.f,D.Ez.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fr,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.Ez.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.Ez.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.iv.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Xt(A.de(A.a([A.de(o,o,o,o,o,o,o,o,o,D.f60,B.a.ap(k,0,1)),A.de(o,o,o,o,o,o,o,o,o,o,B.a.b2(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.iv.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.v(n,B.F,o,B.e,B.j,0,B.p),B.r,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hZ,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.iv.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bw(B.K0,new A.an(B.W,o,B.aa,B.r,A.a([t,new A.D(D.buo,A.v(s,B.aj,o,B.e,B.j,0,B.p),o),A.ao(0,A.c0(o,new A.o(o,o,o,o,o,new A.a8(B.a3,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.be),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.K0,v,D.bVI,B.n),o,o,o,o,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.r,l,o)}}
C.aoW.prototype={
R(){return new C.aCF(A.a([],x._))},
br(){return this.r.$0()},
pQ(){return this.w.$0()},
ge_(){return this.c}}
C.aCF.prototype={
a_(){var w,v
this.a1()
this.vO()
w=this.a
v=w.c
if(v.length!==0)C.a6K(v,w.e,w.d.w)},
vD(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h05(r,t.e,!1,s.w,new C.dTt(u),null,s),$async$vD)
case 2:w=3
return A.b(u.vO(),$async$vD)
case 3:return A.h(null,v)}})
return A.i($async$vD,v)},
a_7(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a_7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h05(r,t.e,!0,s.w,new C.dTs(u),null,s),$async$a_7)
case 2:w=3
return A.b(u.vO(),$async$a_7)
case 3:return A.h(null,v)}})
return A.i($async$a_7,v)},
vO(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vO=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.AA(q.a.c),$async$vO)
case 7:p=e
if(q.c!=null)n=q.e||J.cy(p)
else n=!1
if(n)q.m(new C.dTv(q,p))
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
return A.b(C.Gi(q.a.c).cM(0,B.pJ),$async$vO)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dTw(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dTx(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vO,v)},
O9(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$O9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.T(D.eSp)
w=3
return A.b(C.Gi(t.a.c),$async$O9)
case 3:r=e
w=4
return A.b(C.fGE(t.a.c,r),$async$O9)
case 4:q=e
w=5
return A.b(C.Gi(t.a.c),$async$O9)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dTr(t,p))
o=t.c.I(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(null,null,null,q?B.dy:B.cR,null,B.r,null,s,null,B.ml,null,null,null,null,null,null,null,null,null,null))
t.a.pQ()
case 1:return A.h(u,v)}})
return A.i($async$O9,v)},
HG(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i7x(l),$async$HG)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hC3(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aZh(q,p.e,l,"Each family tree costs $"+B.k.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$HG)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hje(r)
o=Date.now()
n=t.a.c
m=new C.kC(l,r.toUpperCase(),p,!0,B.T,D.C7,new A.S(o,0,!1),0,n,D.tI)
w=5
return A.b(C.a2e(n,m),$async$HG)
case 5:w=6
return A.b(t.vO(),$async$HG)
case 6:t.a.br()
t.a.pQ()
if(t.c==null){w=1
break}t.Ei(m)
case 1:return A.h(u,v)}})
return A.i($async$HG,v)},
Ei(d){return this.cd4(d)},
cd4(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Ei=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.AA(u.a.c),$async$Ei)
case 2:n=l.rb(k.dH(f,new C.dTu(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hy(m,new C.aoQ(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Ei)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a2e(u.a.c,o),$async$Ei)
case 6:case 5:w=7
return A.b(u.vO(),$async$Ei)
case 7:u.a.pQ()
return A.h(null,v)}})
return A.i($async$Ei,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tH(p)
if(r.e)return A.av(A.mI(q,p?B.br:B.bk,q,q,q,q,q,q,q,q),q,q,q)
if(J.cn(r.d)){w=p?B.dY:B.c
v=A.m(15)
u=A.aG(!1,B.a1,!0,q,A.aL(!1,q,!0,A.p(q,D.bIh,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.q,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcc8(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.az,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Fk(A.p(q,A.v(A.a([u,B.aQ,t,B.N,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.br:B.bk,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.e3,A.bG(D.fyW,r.gaPA(),A.bm(B.bT,q,q,q,q,q,Al.YI,q,new A.b7(A.m(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.buk,q,q,1/0),15,B.af,1.05,D.a8H,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.az,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b6],v)
if(J.cy(r.d))w.push(A.aH(q,q,q,q,A.X(B.yq,B.aV,q,q,q,q),q,q,q,new C.dTz(r),q,q,q,q,"Sync family trees with database",q))
if(J.cy(r.d))w.push(A.aH(q,q,q,q,A.X(B.yh,B.aV,q,q,q,q),q,q,q,r.gaeU(),q,q,q,q,"Transfer / backup file",q))
w.push(A.df(E.anh,D.ffa,r.gaPA(),A.bm(B.bT,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.Fk(r.czq(J.q(r.d,s),o),14,B.af,1,D.a8H,q))
B.d.v(w,u)}return A.v(A.a([p,B.aB,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
czq(d,e){var w=null,v=e.a,u=v?B.dY:B.c,t=A.m(14),s=A.I((v?B.e0:B.bO).j(0.55),B.q,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.el,10)],x.V),q=A.m(14),p=A.p(w,D.bHl,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.az,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.ganT(),m=d.d?"":" \xb7 Public",l=d.y===D.ks?" \xb7 View only":"",k=x.p
l=A.E(A.v(A.a([o,B.bB,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.br:B.bk,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aG(!1,B.a1,!0,w,A.aL(!1,q,!0,new A.D(B.bD,A.B(A.a([p,B.bd,l,A.X(B.MI,v?B.br:B.bk,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dTy(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aoQ.prototype={
R(){return new C.aCC(A.a([],x._),A.aX(x.N),A.b70())},
br(){return this.r.$0()},
ge_(){return this.c}}
C.aCC.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.abO()
w=u.a
v=w.c
if(v.length!==0)C.a6K(v,w.e,w.d.w)},
q(){var w=this.w
w.U$=$.aw()
w.P$=0
this.a2()},
a22(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a22=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xH("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dSU(r),s,null,!0,!0,x.y),$async$a22)
case 3:if(e!==!0||t.c==null){w=1
break}t.Ja()
t.m(new C.dSV(t,r))
w=4
return A.b(t.vF(),$async$a22)
case 4:t.a.br()
t.xH(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a22,v)},
cpn(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.dSP(w,f,d,e))},
aRQ(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dp()
u.e7(w,v,0,1)
u.jI(q,q,1,1)
this.w.sp(0,u)},
b8D(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eF(new Float64Array(16))
q.e0(r)
w=q.Cp()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dp()
t.e7(r,u,0,1)
t.jI(v,v,1,1)
t.e7(-r,-u,0,1)
t.iA(0,q)
s.sp(0,t)},
abO(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$abO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.AA(u.a.c),$async$abO)
case 2:t=s.rb(r.dH(e,new C.dSn(u)))
if(t!=null&&u.c!=null)u.m(new C.dSo(u,t))
return A.h(null,v)}})
return A.i($async$abO,v)},
xH(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.T(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
vD(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.h05(o,t,!1,r,new C.dSC(u),q.a,s),$async$vD)
case 2:n=A
m=J
w=3
return A.b(C.Gi(u.a.c),$async$vD)
case 3:p=n.rb(m.dH(e,new C.dSD(u)))
if(p!=null&&u.c!=null)u.m(new C.dSE(u,p))
return A.h(null,v)}})
return A.i($async$vD,v)},
Ja(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cC(w,0)},
vF(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a2e(t,s),$async$vF)
case 2:return A.h(null,v)}})
return A.i($async$vF,v)},
a0D(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0D=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tT(q,t.a.c)){t.xH("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.i8G(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a0D)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Ja()
t.m(new C.dSO(t,r))
w=4
return A.b(t.vF(),$async$a0D)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0D,v)},
a_l(){return this.cd6()},
cd6(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_l=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tT(q,t.a.c)){t.xH("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.P(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dSM(r,new C.tH(q.ax.a===B.I)),s,null,!0,!0,x.y),$async$a_l)
case 3:if(e!==!0||t.c==null){w=1
break}t.Ja()
t.m(new C.dSN(r,t))
w=4
return A.b(t.vF(),$async$a_l)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_l,v)},
Vn(d){return this.byj(d)},
byj(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tT(r,t.a.c)){t.xH("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dSb(t,d),r,null,!0,!0,x.P),$async$Vn)
case 3:s=f
if(s==null){w=1
break}t.Ja()
t.m(new C.dSc(t,s))
w=4
return A.b(t.vF(),$async$Vn)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vn,v)},
a2o(d){return this.cBy(d)},
cBy(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a2o=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.ca(null,null,!0,null,new C.dSX(u,d,new C.tH(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a2o)
case 2:return A.h(null,v)}})
return A.i($async$a2o,v)},
c9p(d){var w=this,v=w.d
v===$&&A.c()
if(C.tT(v,w.a.c))w.NP(d)
else w.a2o(d)},
ahn(d,e){return this.ctj(d,e)},
ctj(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ahn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.dSR(new C.tH(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ahn)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ahn,v)},
HL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.ks?3:5
break
case 3:w=6
return A.b(C.fOU(t.a.c),$async$HL)
case 6:s=e
o=t.a
r=C.h7O(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ahn(!s,!r),$async$HL)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bAH(o,t.a.c)){t.xH("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.l3(o,"Cancel","Remove",q.y===D.ks?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$HL)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aOc(t.a.c,t.d.a),$async$HL)
case 11:t.a.br()
o=t.c
if(o==null){w=1
break}A.iO(o,null)
case 1:return A.h(u,v)}})
return A.i($async$HL,v)},
a9l(d){return this.bJp(d)},
bJp(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a9l=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tT(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b4(s,new C.dSd(p))){o=A.U(s)
p.a=A.rb(new A.cQ(new A.a1(s,new C.dSe(d),o.k("a1<1>")),new C.dSf(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.Ja()
t.m(new C.dSg(t,s,d,q))
w=3
return A.b(t.vF(),$async$a9l)
case 3:t.xH(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a9l,v)},
NP(d){return this.bLv(d)},
bLv(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tT(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a2o(d),$async$NP)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.dSk(t,d),r,null,!0,!0,x.P),$async$NP)
case 6:s=f
if(s==null){w=1
break}t.Ja()
t.m(new C.dSl(t,s))
w=7
return A.b(t.vF(),$async$NP)
case 7:case 1:return A.h(u,v)}})
return A.i($async$NP,v)},
czM(){var w=this,v=w.d
v===$&&A.c()
if(!C.tT(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dSW(w))
w.vF()},
Yb(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Yb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bAH(n,t.a.c)){t.xH("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.aw()
r=new A.as(B.as,s)
q=t.d.e
p=A.bn(new A.K(q,t.gc7U(),A.U(q).k("K<1,n>")).c_(0,new C.dSx()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dSy(t,new C.tH(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$Yb)
case 3:o=e
r.U$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.Ja()
t.m(new C.dSz(t,p))
w=4
return A.b(t.vF(),$async$Yb)
case 4:t.xH("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Yb,v)},
c7V(d){return B.a.i(d.toLowerCase())},
cbU(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tT(v,w)
t=r.d
s=C.hYW(t)
C.i7B(q,t.b,u,C.hYV(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tH(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a1(l,new C.dT3(),A.U(l).k("a1<1>")).gM(0)
l=n?B.bX:B.iN
v=A.X(B.ZT,n?B.br:B.bk,o,o,o,18)
u=x.p
v=A.a([new A.D(B.AZ,A.aL(!1,o,!0,new A.D(B.hK,A.B(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bk,o,o,o,o,o,o,o,o,o,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dT4(p,d),o,o,o,o,o,o,o),o),new A.D(B.nc,p.bWp(m),o)],u)
if(p.d.y===D.ks){t=B.ro.j(0.15)
s=A.m(12)
r=A.I(B.ro.j(0.45),B.q,1)
q=C.Gg(p.d,p.a.c)
v.push(new A.D(B.xD,A.p(o,A.B(A.a([D.bMx,B.av,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.az,o,o,o,o,o,o,o,o,12,o,o,B.a5,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.i_,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.az,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b6],u)
if(C.tT(p.d,p.a.c)&&p.e.length!==0)u.push(new C.JC("Undo",B.rc,p.gczL(),m,o,o))
u.push(new C.JC("Family Book",D.bC2,p.gcbT(),m,B.tc,o))
if(C.tT(p.d,p.a.c))u.push(new C.JC("Display settings",B.BJ,p.gcd5(),m,B.aZ,o))
u.push(new C.JC("Sync",B.yh,p.gaeU(),m,o,o))
t=p.d
if(t.y===D.ks||C.bAH(t,p.a.c)){t=p.d.y===D.ks?"Remove shared tree":"Delete tree"
u.push(new C.JC(t,B.e6,p.gbJz(),m,B.h_,o))}if(C.tT(p.d,p.a.c))u.push(new C.JC("Add member",B.vK,new C.dT5(p),m,B.bT,o))
v.push(new A.D(A0.ahk,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.ganT()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bk,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cp(new C.dT6(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?K.ZX:X.MJ,o,o,o,o,o)
v.push(A.av(A.hg(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dT7(p),o),o,o,o))}return A.c8(o,l,A.bl(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bWp(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fx.j(0.35),B.dl,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.X(B.ya,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a1,!0,m,A.aL(!1,m,!0,A.p(m,D.bPB,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.q,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gaeU(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.f1i,m,m,m)
r=r.ganT()
p=n.d.ganT()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.E(A.v(A.a([q,B.bB,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a5,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tT(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bMJ,m,m,m,n.gcmN(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jl:B.mu
r=r?"Private":"Public"
r=A.E(n.aub(q,"Privacy",r,n.a.d.w?n.gcyL():m),1)
q=A.E(n.aub(B.yi,"Tree code",n.d.c,new C.dSm(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.B(A.a([r,B.ab,q,B.ab,A.E(n.aub(D.bDM,"Collaborators",p,n.gc_Y()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.ks){s=B.c.j(0.15)
B.d.v(p,A.a([B.N,A.aG(!1,B.a1,!0,A.m(999),A.aL(!1,A.m(999),!0,new A.D(B.fI,A.B(A.a([A.X(B.oP,B.c,m,m,m,14),B.ec,A.d("View only",m,m,m,m,m,m,B.aPj,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ag)],o))}return A.p(m,A.bw(u,new A.an(B.W,m,B.aa,B.r,A.a([t,new A.D(B.Fb,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bTG,B.n),m,m,m,m,m,m,m,1/0)},
aub(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a1,!0,A.m(14),A.aL(!1,A.m(14),!0,new A.D(L.ais,A.v(A.a([A.X(d,B.c,w,w,w,18),B.at,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.uB,A.d(f,w,1,B.a2,w,w,w,O.zx,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)}}
C.bdE.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gam(r)&&s.c.length===0)return B.bI
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bdH(s,t),new A.ar(w,v))],x.p)
r=r.gdK(r)
B.d.v(u,r.dt(r,new C.d6m(this),x.l))
r=s.c
B.d.v(u,new A.K(r,new C.d6n(this),A.U(r).k("K<1,r>")))
return new A.D(B.tE,new A.a7(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.JO.prototype={}
C.Fx.prototype={}
C.bdG.prototype={
gbh2(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aIe.prototype={}
C.bdH.prototype={
bLc(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.W()
v=A.N()
v.r=B.bA.j(0.75).gp(0)
v.c=2
v.d=B.bP
d.bC(new A.u(n,w),new A.u(m,w),v)
u=(n+m)/2
t=new A.aO(q.r,B.ap,null,null,A.a([],x.v))
q=w+5.5
t.F(new A.b5(u,q))
s=w-1.1
r=w-8.8
t.F(new A.pz(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.F(new A.pz(u+4.95,r,u+9.9,s,u,q))
t.F(new A.bF())
q=A.N()
q.r=B.c.gp(0)
d.ae(new A.u(u,w),9,q)
q=A.N()
q.r=B.bA.gp(0)
d.aP(t,q)},
bLa(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b0(a0,new C.d6H())
w=f.b
v=w+(B.d.gL(a0).b-w)/2
u=B.d.b4(a0,new C.d6I(f))
t=new A.K(a0,new C.d6J(f),A.U(a0).k("K<1,M>")).c_(0,new C.d6K()).cI(0,1/0,B.uY)
w=f.a
d.bC(f,new A.u(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.L)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.H()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lT(m)
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
n=g.gbK().a.snapshot()
r.drawPath((g.e=new A.cE(n)).a,k)
k.delete()}},
a4(d,e){var w,v,u,t,s,r,q,p,o
$.W()
w=A.N()
w.r=B.bT.j(0.75).gp(0)
w.c=2.2
w.b=B.ae
w.d=B.bP
w.e=B.fB
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.L)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bLa(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bLc(d,w,q.a,q.b)}},
au(d){return d.b!==this.b}}
C.bhm.prototype={
gc5J(){var w=this.c
if(B.a.i(w.y).length!==0)return D.dhc
switch(w.c.a){case 0:return D.cLy
case 1:return D.cWD
case 2:return D.dbH}},
gc5M(){var w=this.c,v=C.hiA(w.w),u=C.hiA(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc5J(),p=t.c,o=I.bBB(p.f),n=t.gc5M(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.az:B.c,j=A.I(r?B.az:B.c,B.q,2)
if(o!=null)w=A.t7(B.A,s,B.cj,B.bS,!1,s,o,!1,s,s)
else{w=A.a([B.d.gL(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a3,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hU(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.ax,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.Fr,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.az:B.c,B.q,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fbe,s,s,s),B.f,s,s,new A.o(B.ce,s,w,j,s,s,B.n),s,s,s,s,D.bwb,s,s,s),s,s,s,-6,-4,s))}k=r?B.cC:B.c
j=A.m(8)
w=A.I(B.d.gL(q).j(0.35),B.q,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dE,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cC,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aS:B.bk,s,s,s,s,s,s,s,s,7.5,s,s,B.a5,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aE(s,new A.a7(84,112,A.v(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.at,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.aZi,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bwm,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a8)}}
C.bcL.prototype={
a4(d,e){var w,v,u,t,s,r,q
$.W()
w=A.N()
v=this.b
u=v?B.c:D.bac
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
au(d){return d.b!==this.b}}
C.bv3.prototype={
B(d){var w=this,v=null,u=new C.f9E(w),t=w.c,s=t?B.cC:B.c,r=A.m(12),q=u.$3(B.hy,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bG:B.fc,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.yf,"Zoom out",w.e)
return A.aG(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.f,t?B.bG:B.fc,v,v,v,1,v,v,v,v,v,22),u.$3(B.akO,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dq,v,v,v,B.ag)}}
C.bkI.prototype={
B(d){var w=this,v=null,u=B.bT.j(0.15),t=A.I(B.bT,B.q,2),s=w.e,r=x.p
t=A.aE(v,A.p(v,A.v(A.a([A.X(s?K.ZX:X.MJ,B.bT,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.f7B,v,v,v)],r),B.m,v,B.bb,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a8)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.f5B,B.L,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.K(s,new C.eLz(w),A.U(s).k("K<1,r>")))
B.d.v(u,t)}return new A.a7(84,v,A.v(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.Zx.prototype={
R(){return new C.aB3()},
br(){return this.Q.$0()},
ge_(){return this.w}}
C.aB3.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a1()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aP()
r.d=new A.as(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aP()
r.e=new A.as(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aP()
r.f=new A.as(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aP()
r.r=new A.as(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aP()
r.w=new A.as(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aP()
r.x=new A.as(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.c
r.y=t==null?D.xQ:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.i_t(w.r,w.f)
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
Pb(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Pb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.h7O(p.y,p.w)
w=3
return A.b(A.lf(t.a.w,B.HP),$async$Pb)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aZh(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Pb)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hC4(p.y,p.w)
t.a.br()
case 5:w=7
return A.b(Ao.Gr(78,800),$async$Pb)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dmz(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Pb,v)},
c5L(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hX(B.o.u(1000*Date.now()),w,D.xQ,null,null,null,"","","","","",1,!1,0)
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
s=v.aD_(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a5(k,!1).O(s)},
a8X(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a8X=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dmy(r),s,null,!0,!0,x.y),$async$a8X)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a5(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a8X,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tH(j),h=l.a.e,g=A.U(h).k("a1<1>"),f=A.C(new A.a1(h,new C.dmI(l),g),g.k("J.E"))
h=j?B.dY:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.buG,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.az,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hs(A.aL(!1,k,!0,new A.D(B.lP,A.X(B.e6,B.oC,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbGd(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jw:B.iQ
t=I.bBB(l.as)
if(l.as==null)s=A.X(B.oH,j?B.br:B.bk,k,k,k,40)
else s=k
s=A.av(A.aE(k,new A.an(B.W,k,B.aa,B.r,A.a([A.he(u,t,s,k,42),A.ao(0,A.he(B.bT,k,D.bGq,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc5I(),k,k,k,k,k,k,!1,B.a8),k,k,k)
t=l.d
t===$&&A.c()
t=C.aB5(t,"Full name",B.mq,1,1,i,B.m2)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.S,new C.bhk(i,u,new C.dmJ(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bk,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.boh],q)
o=l.a.e
B.d.v(p,new A.K(o,new C.dmK(),A.U(o).k("K<1,eD<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bk,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.boj],q)
B.d.v(q,new A.K(f,new C.dmM(),A.U(f).k("K<1,eD<n?>>")))
o=A.v(A.a([t,B.am,new C.acG(i,r,"Who is their parent?",p,new C.dmN(l),k,o),B.aB,n,B.am,new C.acG(i,m,"Who is their spouse / partner?",q,new C.dmO(l),k,o)],v),B.aj,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aB5(q,"Birth date",D.ajR,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aB5(m,"Birth place",B.a_b,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aB5(n,"Date of death (if deceased)",D.am4,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aB5(p,"Occupation",B.a0g,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.r,w,k),B.aB,s,B.by,new C.acH(i,"Identity",u,k),B.ac,new C.acH(i,"Family links",o,k),B.ac,new C.acH(i,"Life details",A.v(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aB5(r,"Notes",B.kV,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aB4(i,"Child order",l.cdj(l.at),new C.dmP(l),new C.dmQ(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fYr(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dmR(l):k
B.d.v(r,A.a([B.S,new C.aB4(i,"Visible in tree",u,w,new C.dmS(l),k)],v))}r.push(B.S)
w=j?B.jw:B.iQ
u=A.m(14)
t=A.I(j?B.e0:B.bO,B.q,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.az,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iF(k,B.bT,k,B.af,k,new C.dmT(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bk,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.agW,k,k,k))
r.push(B.by)
w=j?B.aP:B.az
j=j?B.e0:B.bO
r.push(A.B(A.a([A.E(A.dT(B.nx,new C.dmL(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.cl,k,new A.b7(A.m(14),B.Y),new A.ay(j,1,B.q,-1),k,k,k,k)),1),B.bd,A.E(A.bG(D.eLa,l.gc5K(),A.bm(B.aV,k,k,0,B.c,k,B.cl,k,new A.b7(A.m(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.at)
return A.ek(B.ha,k,B.af,h,new A.a7(420,k,A.cd(A.v(r,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),k),D.ahN,k,B.ahb,new A.b7(g,B.Y),k,k)},
cdj(d){var w=B.o.E(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.E(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.acH.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.br:B.bk,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jw:B.iQ,s=A.m(16)
return A.v(A.a([new A.D(D.aib,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.e0:B.bO,B.q,1),s,w,w,B.n),w,w,w,w,B.bm,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bhl.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dY:B.c,r=A.m(12),q=A.I((t?B.e0:B.bO).j(0.85),B.q,1),p=v.r
if(p==null)p=B.an
w=A.l(u,u,t?B.aP:B.az,u,u,u,u,u,u,u,u,14,u,u,B.a5,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.T,!1,u,!0,B.r,u,A.aN(),v.d,u,u,u,u,u,2,A.bs(u,B.ez,u,B.vn,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.br:B.bk,u,u,u,u,u,u,u,u,u,u,u,B.cv,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bT,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ai,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.acG.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dY:B.c,s=A.m(12),r=A.I((u?B.e0:B.bO).j(0.85),B.q,1),q=A.X(B.r6,u?B.br:B.bk,v,v,v,v),p=A.l(v,v,u?B.aP:B.az,v,v,v,v,v,v,v,v,14,v,v,B.a5,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dY:B.c
return A.p(v,new A.Dp(A.Se(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.br:B.bk,v,v,v,v,v,v,v,v,v,v,v,B.cv,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kS,v,v,v)}}
C.bhk.prototype={
B(d){var w=new C.dmU(this)
return A.B(A.a([w.$3(D.Zv,"Male",B.Nu),B.ab,w.$3(D.aj4,"Female",B.Nf),B.ab,w.$3(D.xQ,"Other",B.ni)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aB4.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jw:B.iQ,r=A.m(14),q=A.I(t?B.e0:B.bO,B.q,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.az,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.v(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.br:B.bk,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aHg(u,B.yf,w.f,v),B.bp,new C.aHg(u,B.hy,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ej,v,v,v)}}
C.aHg.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bT.j(0.12)
else w=s.c.a?B.dY:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bT
else t=(s.c.a?B.br:B.bk).j(0.4)
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,new A.a7(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ag)}}
C.acI.prototype={
bOY(d){switch(d.a){case 0:return B.bT
case 1:return B.bA
case 2:return B.cU}},
bOZ(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aW5(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
A2(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dY:B.c
u=A.m(12)
t=A.I((w?B.e0:B.bO).j(0.85),B.q,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bT,p,p,p,18),B.av],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.br:B.bk,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.v(A.a([q,B.at,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.az,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cz,B.xA,p,p,1/0)},
adp(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.br:B.bk,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jw:B.iQ,s=A.m(16),r=A.I(v?B.e0:B.bO,B.q,1)
return A.v(A.a([new A.D(D.aib,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bU,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hnj(r,q),o=q.c,n=t.bOY(o),m=I.bBB(q.f),l=t.e.a,k=l?B.dY:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.az,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.ks?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.br:B.bk,s,s,s,s,s,s,s,s,12,s,s,B.a5,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.q,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.he(u,m,m==null?A.X(B.oH,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.eq,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.q,1)
v=A.av(A.p(s,A.d(t.bOZ(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mo,s,s,s),s,s,s)
u=x.p
i=A.a([t.A2("Full name",i,B.mq)],u)
if(p>0)i.push(t.A2("Child order","#"+p,B.Nm))
r=A.a([h,B.at,r,B.aQ,l,B.S,v,B.by,t.adp("Identity",i),B.ac,t.adp("Life details",A.a([t.A2("Birth date",q.w,D.ajR),t.A2("Birth place",q.x,B.a_b),t.A2("Date of death",q.y,D.am4),t.A2("Occupation",q.z,B.a0g)],u)),B.ac,t.adp("Family links",A.a([t.A2("1. Parent",t.aW5(q.d),B.FF),t.A2("2. Spouse",t.aW5(q.e),B.Ne)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.adp("Notes",A.a([t.A2("Notes",q,B.kV)],u))],u))
r.push(B.by)
r.push(A.bG(B.J8,new C.dn3(d),A.bm(B.aV,s,s,s,s,s,B.cl,s,new A.b7(A.m(14),B.Y),s,s,s)))
return A.eJ(s,k,new A.cS(B.lC,A.cd(A.v(r,B.aj,s,B.e,B.Q,0,B.p),B.r,s,B.y,s,B.xF,s,s,B.ah),s),s,s,s,B.Fe,B.d0,s,new A.b7(j,B.Y),s)}}
C.JC.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.br:B.bk
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.xI,A.hs(A.aG(!1,B.a1,!0,A.m(8),A.aL(!1,A.m(8),!0,new A.a7(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ag),u,v.c,u,u),u)}}
C.aoT.prototype={
eO(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a6().ac())
w=u.c
v=A.U(w).k("K<1,a4<n,@>>")
w=A.C(new A.K(w,new C.c7S(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.j0(w,new C.c7T(),t,x.U))
return s}}
C.aoU.prototype={
R(){return new C.aCE(A.a([],x.bF))},
gdd(){return this.c}}
C.aCE.prototype={
a_(){this.a1()
this.Jh()},
Jh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Jh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c7W(t.a.c),$async$Jh)
case 3:r=e
w=4
return A.b(C.AA(t.a.c),$async$Jh)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qQ(q,new C.dTg(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dTh(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Jh,v)},
ye(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.T(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
K_(d,e){return this.cC7(d,e)},
cC7(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$K_=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dTl(q,e))
t=3
w=6
return A.b(d.$0(),$async$K_)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dTm(q))
$.eV.mp()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$K_,v)},
X1(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p3(r,s.c,s.e),$async$X1)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.K_(new C.dTd(t),"Preparing download\u2026"),$async$X1)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X1,v)},
X5(d){return this.bMX(d)},
bMX(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p3(r,s.c,s.e),$async$X5)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.K_(new C.dTe(t,d),"Preparing file\u2026"),$async$X5)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X5,v)},
afg(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$afg=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.x3.c6().LK(B.Qm,B.tJ,!0),$async$afg)
case 7:r=e
o=r
q=o==null?null:J.fp(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aH.gam(o)}else o=!1
if(o){o=q.c
o.toString
o=A.js(o,0,null)
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
case 6:u=A.Gq()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afg,v)},
XG(d){return this.bXk(d)},
bXk(d){var w=0,v=A.j(x.H),u=this
var $async$XG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.K_(new C.dTf(u,d),"Restoring family trees\u2026"),$async$XG)
case 2:return A.h(null,v)}})
return A.i($async$XG,v)},
XF(){var w=0,v=A.j(x.H),u,t=this,s
var $async$XF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.afg(),$async$XF)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.XG(s),$async$XF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XF,v)},
a1t(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1t=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p3(r,s.c,s.e),$async$a1t)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.K_(new C.dTk(t),"Creating QR code\u2026"),$async$a1t)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1t,v)},
a14(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a14=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.CH()){t.ye("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).c5(A.e8(new C.dTi(),!0,null,x.N)),$async$a14)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.XG(r),$async$a14)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a14,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.Ap:B.iN,m=o?D.afs:B.aP,l=o?B.aK:B.bO,k=o?B.aP:B.az,j=new C.d6L(n,m,l,k,o?B.bJ:B.bk)
l=A.aH(p,p,p,p,A.X(B.eC,k,p,p,p,20),p,p,p,new C.dTo(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eC(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.d6j(!0,B.jn,B.aR,B.aR,q.r?p:q.gct7(),j,s,"Show restore QR"),1),B.av],u))}s=q.e
r=q.r?p:q.gcpi()
t.push(A.E(C.d6j(!s,B.iX,B.b7,B.bt,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.d6j(!1,B.hA,B.aV,B.bT,q.r?p:q.gbMQ(),j,"Photos & books included","Download all trees"),1),B.av],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.d6j(!1,M.yl,B.aF,B.aM,q.r?p:q.gbXh(),j,s,"Upload backup file"),1))
l=A.a([new C.bdF(v,l,p),B.kD,new C.abY(j,"QR restore",p),B.S,t,B.d7,new C.abY(j,"Backup files",p),B.S,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kD,new C.abY(j,"One tree",p),B.S],u)
B.d.v(v,J.b6(q.d,new C.dTp(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cz(l,p,B.YE,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aV.j(0.35),B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dl,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bl(!0,A.p(p,A.B(A.a([K.aNM,B.bd,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.B4,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c8(w,n,new A.an(B.W,p,B.aa,B.r,l,p),p,!1,!1,p,p)}}
C.d6L.prototype={}
C.bdF.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.k4,28)],x.V)
t=A.ao(p,A.X(B.u0,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.r,A.a([t,new A.D(B.a9,A.B(A.a([A.p(p,D.bP8,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.q,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.og,A.E(A.v(A.a([D.fgb,B.N,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bWT,B.n),p,p,p,p,p,p,p,p)}}
C.abY.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bdD.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aR.j(0.4):m.c
k=A.I(k,B.q,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aR.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.I(t.j(0.35),B.q,1)
return A.aG(!1,B.a1,!0,q,A.aL(!1,o,!0,A.eE(A.dc(new A.D(E.Yi,A.v(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.r2,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bB,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cv,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)}}
C.bdI.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.q,1),q=B.aV.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,A.eE(new A.D(B.eQ,A.B(A.a([A.p(v,D.bOl,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.q,1),p,v,v,B.n),v,v,v,v,B.r2,v,v,v),B.bd,A.E(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.X(B.hA,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)}}
C.ZS.prototype={
R(){return new C.aCD()},
gdd(){return this.c}}
C.aCD.prototype={
a_(){this.a1()
this.a8t()},
a8t(){var w=0,v=A.j(x.H),u=this,t
var $async$a8t=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b0V(u.a.c,B.CI),$async$a8t)
case 2:t=e
if(u.c!=null)u.m(new C.dT8(u,t))
return A.h(null,v)}})
return A.i($async$a8t,v)},
agE(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$agE=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dT9(q))
t=4
p=A.h9s(q.a.d,B.CI)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.V(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.ar8(n.e,m,l,B.CI,p,n.f),$async$agE)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dTa(q))
q.c.I(x.q).f.T(D.eTy)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.aa(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d(B.a.ed(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dTb(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agE,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.jb:B.pD,n=p?B.ia:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eC(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fvL,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.pK(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.v(A.a([B.N,u,B.by,t,B.N,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.bb,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bv,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcp0()
if(u)u=B.IE
else u=A.X(r.e===!0?B.hz:B.ajQ,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a7(1/0,q,A.ey(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ck,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aV,q,B.fN,q,q,q,new A.ay(B.aV.j(0.55),1,B.q,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hZ,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aA:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.S)
w.push(new A.a7(1/0,q,A.bG(B.zE,new C.dTc(d),A.bm(B.aV,q,q,q,q,B.fN,q,q,q,q,q,q)),q))
return A.c8(m,o,new A.D(B.a9,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.ZT.prototype={
R(){return new C.biP(A.z4(B.xo,B.nE,B.u5))}}
C.biP.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c8(A.eC(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fnZ,w,w,w,1,w,!0),B.w,A.z3(this.d,B.bS,new C.dTq(this,d)),w,!1,!1,w,w)}}
C.aXQ.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.PR,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lz.prototype={}
C.a5M.prototype={
R(){return new C.biv(null,null)}}
C.biv.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.ty,v,1,v,w)
w.e=A.bj(v,B.pI,v,1,v,w)
w.a.toString
w.d.cH(0)
w.e.cH(0)},
bt(d){var w,v,u=this
u.bD(d)
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
this.btG()},
B(d){var w,v,u=this,t=B.d.dL(D.a2X,new C.dEC(u),new C.dED())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.ctl(A.c6(new A.h5(A.a([w,v],x.dS)),new C.dEE(u,t),null),!0)}}
C.biu.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b_m(d,e)
break
case"house":p.m1(d,e,D.d0d)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdO()
$.W()
t=A.N()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ae(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.m6(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.AL(d,e,12)
p.xQ(d,e,B.lc,5,14)
break
case"grocery":p.ce2(d,e)
break
case"calculator":p.cdK(d,e)
break
case"lumber":p.cea(d,e)
break
case"kitchen":p.ce5(d,e)
break
case"landscape":p.m1(d,e,D.d0K)
s=new A.aO($.W().r,B.ap,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.F(new A.b5(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.F(new A.cU(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.F(new A.cU(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.F(new A.ap(t,w))
s.F(new A.ap(0,w))
s.F(new A.bF())
w=A.N()
w.r=B.eH.j(0.85).gp(0)
d.aP(s,w)
p.AL(d,e,8)
p.xQ(d,e,B.iT,4,18)
break
case"plumbing":p.cej(d,e)
break
case"electrical":p.m1(d,e,D.daZ)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.W()
u=A.N()
u.r=B.c.j(q*0.12).gp(0)
d.aY(new A.a9(0,0,0+e.a,0+e.b),u)
p.m6(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.m6(d,e,B.lH.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.AL(d,e,10)
break
case"store":p.cet(d,e)
break
case"paint_remodel":p.cee(d,e)
break
case"roofing":p.cel(d,e)
break
case"warehouse":p.ceA(d,e)
break
case"vehicles":p.cey(d,e)
break
case"farm":p.cdX(d,e)
break
case"restaurant":p.cek(d,e)
break
case"tools":p.cew(d,e)
break
case"wallet":p.cez(d,e)
break
case"concrete":p.cdQ(d,e)
break
case"blueprint":p.cdI(d,e)
break
default:p.b_m(d,e)}},
m1(d,e,f){var w,v=new A.a9(0,0,0+e.a,0+e.b)
$.W()
w=A.N()
w.saq(new A.a8(B.ax,B.aC,B.x,f,null,null).av(0,v))
d.aY(v,w)},
m6(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.gdO()/2-h
$.W()
w=A.N()
w.b=B.ae
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bU(q,p)
r=w.H()
v.drawArc.apply(v,[A.c_(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
xQ(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdO()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
AL(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.E(s*0.17,0.9)
p=B.k.E(s*0.23,0.85)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b_m(d,e){var w,v=this
v.m1(d,e,D.d9C)
w=v.c
v.m6(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.m6(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bL6(d,e,B.hV,w)
v.xQ(d,e,B.c.j(0.7),6,8)},
bL6(d,e,f,g){var w,v,u,t,s,r,q,p
$.W()
w=A.N()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c_(new A.a9(16,q,t,q+3)),p)
p.delete()}},
ce2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m1(d,e,D.chn)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.E(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.E(s,2)
$.W()
l=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.cZy[B.o.E(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.m6(d,e,B.c.j(0.35),w,16)
j.xQ(d,e,B.iT,5,12)},
cdK(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m1(d,e,D.chu)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdO()
$.W()
q=A.N()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ae(new A.u(t/2,s/2),r*(0.18+u*0.08),q)
p=A.hr(g,g,g,g,g,B.a4,B.ca,g,B.e_,B.c8)
for(o=0;o<6;++o){n=v+o*0.9
r=D.d2i[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.E(o,2)
p.saV(0,new A.eq(r,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.ey()
p.a4(d,new A.u(t*(0.08+B.o.E(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.chw[o]
l=B.kf.j(0.28+0.3*Math.sin(n))
k=B.o.E(o,2)
p.saV(0,new A.eq(m,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.ey()
p.a4(d,new A.u(t*(0.55+B.o.E(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.m6(d,e,B.c.j(0.35),w*1.5,14)
h.m6(d,e,B.eA.j(0.55),-v*3.141592653589793*2,8)
h.m6(d,e,B.Aq.j(0.4),r*2.8,22)
h.xQ(d,e,B.ps,8,10)
h.AL(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.E(w+o*0.22,0.9)
$.W()
r=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cea(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m1(d,e,Z.avw)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bx(new A.a9(20,q,u,q+10),B.hC)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.h3,B.ou,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.er(p),n)
n.delete()}m.m6(d,e,B.h3.j(0.35),w,15)
m.AL(d,e,8)},
ce5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m1(d,e,D.d_2)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.E(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.E(r*0.13,0.7)
$.W()
l=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.H()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.m6(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
j.xQ(d,e,B.qG,4,14)},
cej(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m1(d,e,D.cPh)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.E(s,0.12)
$.W()
n=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xQ(d,e,B.oA,6,12)
l.m6(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cet(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m1(d,e,D.cuV)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bx(new A.a9(q,14,q+u,22),B.im)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.fa,B.bL,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.er(q),o)
o.delete()}n.m6(d,e,B.c.j(0.3),w,16)
n.AL(d,e,8)
n.xQ(d,e,B.v3,5,13)},
cee(d,e){var w,v,u,t,s,r,q,p,o
this.m1(d,e,D.cV1)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.E(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bx(new A.a9(q,p,q+8,p+(18+r*22)),B.hd)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.is,B.dv,B.bL,B.eu][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.er(p),o)
o.delete()}this.m6(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cel(d,e){var w,v,u,t,s,r,q,p,o
this.m1(d,e,D.cSA)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.E(v+s*0.12,0.75))
q=B.o.E(s,4)*0.22
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xQ(d,e,B.cr,7,11)},
ceA(d,e){var w,v,u,t,s,r,q,p,o,n
this.m1(d,e,D.cxB)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bx(new A.a9(p,o,p+(t-r*8),o+16),B.hC)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.cr,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.er(o),n)
n.delete()}this.m6(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cey(d,e){var w,v,u,t,s,r,q,p,o
this.m1(d,e,D.deN)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.E(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.E(s,2)*0.08)
q=A.bx(new A.a9(r,q,r+28,q+8),B.hC)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.er(q),o)
o.delete()}this.AL(d,e,6)},
cdX(d,e){var w,v,u,t,s,r,q,p,o,n
this.m1(d,e,D.cYG)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.W()
s=A.N()
s.r=B.lH.j(0.75).gp(0)
d.ae(new A.u(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.hk.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.m6(d,e,B.lH.j(0.35),w,14)},
cek(d,e){var w,v,u,t,s,r,q,p,o=this
o.m1(d,e,D.d02)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cl(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c_(r),p)
p.delete()}o.xQ(d,e,B.qG,5,16)
o.AL(d,e,7)},
cew(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m1(d,e,D.dcq)
w=m.c
v=w*3.141592653589793
m.m6(d,e,B.ou.j(0.55),v*3,10)
m.m6(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.ou.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cez(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m1(d,e,D.dfj)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bx(new A.a9(p,o,p+36,o+22),B.im)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.iT,B.lH,q).gp(0)
n=p.H()
s.drawRRect(A.er(o),n)
n.delete()}m.AL(d,e,9)
m.m6(d,e,B.c.j(0.4),w*2.2,12)},
cdQ(d,e){var w,v,u,t,s,r,q,p,o,n
this.m1(d,e,D.d4X)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bU(new A.u(v,u),34)
$.W()
s=A.N()
s.b=B.ae
s.c=5
s.r=B.c.j(0.45).gp(0)
d.f6(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.bO.j(0.85).gp(0)
n=o.H()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
cdI(d,e){var w,v,u,t,s,r,q,p
this.m1(d,e,D.d12)
$.W()
w=A.N()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.H()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.H()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.E(t*0.85,1)
$.W()
u=A.N()
u.r=B.dv.j(0.45).gp(0)
d.aY(new A.a9(0,p,0+v,p+6),u)
this.m6(d,e,B.lc.j(0.45),-t*3.141592653589793*2,11)},
au(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.arQ.prototype={
ZK(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aP7(),$async$ZK)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a80(s),$async$ZK)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$ZK,v)},
afh(d){return this.cgP(d)},
cgP(d){var w=0,v=A.j(x.H),u=this,t
var $async$afh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.i7L(d),$async$afh)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$afh,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.jw:B.iQ
w=x.p
v=A.a([C.aPw(!0,B.qx,1/0,B.pQ,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c0(new A.bI(B.b_,t,t,new A.D(B.vg,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.awq,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b_,B.b5,B.x,u,t,t),B.n),B.be))}v.push(A.ao(8,A.B(A.a([A.E(A.df(D.bIa,D.fcw,new C.cfr(this,d),A.bm(B.aV,t,t,t,B.c,t,B.jA,t,t,t,t,B.cc)),1),B.ab,A.E(A.ey(D.bQn,D.fr1,this.gc7S(),A.di(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jA,t,t,D.aXP,t,t,t,B.cc)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fG(1.7777777777777777,A.aG(!1,B.a1,!0,B.qx,new A.an(B.W,t,B.b0,B.r,v,t),B.aq,s,0,t,t,t,t,t,B.ag),t)}}
C.aKA.prototype={
aR(){this.aZ()
this.aX()
this.dI()},
q(){var w=this,v=w.b1$
if(v!=null)v.a3(0,w.gdC())
w.b1$=null
w.a2()}}
C.aSq.prototype={}
C.aSp.prototype={}
C.aQr.prototype={}
C.Yw.prototype={
R(){return new C.axU()}}
C.axU.prototype={
a_(){var w,v,u=this
u.a1()
u.a.toString
w=new A.bb("",B.b4,B.aN)
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(w,v)},
q(){var w=this.d
w===$&&A.c()
w.U$=$.aw()
w.P$=0
this.a2()},
JR(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.I(x.q).f.T(D.eU2)
return}t=u.c
t.toString
v=u.e
A.a5(t,!1).O(new C.aSq(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.dY:B.c,k=A.m(20),j=A.p(n,D.bQ2,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.az,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.v(A.a([i,B.bB,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bk,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.bd,i,A.aH(n,n,n,n,A.X(B.cD,m?B.br:B.bk,n,n,n,n),n,n,n,new C.cZ0(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bk,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bk,n,n,n,n,n,n,n,n,11,n,n,B.cv,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.h9I(new C.cZ1(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.az,n,n,n,n,n,n,n,n,n,n,n,B.a5,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jw:B.iQ
r=A.m(12)
q=A.m(12)
p=m?B.e0:B.bO
t=A.aM(n,B.T,!0,n,!0,B.r,n,A.aN(),u,n,n,n,n,n,2,A.bs(n,new A.b4(4,r,B.dg),n,n,n,n,n,n,!0,new A.b4(4,q,new A.ay(p,1,B.q,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cZ2(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,R.IL,n,n,n,n)
u=m?B.aP:B.az
m=m?B.e0:B.bO
return A.eJ(n,l,new A.cS(B.lC,A.cd(A.v(A.a([j,B.aQ,i,B.at,w,B.N,v,B.aQ,t,B.by,A.B(A.a([A.E(A.dT(B.de,new C.cZ3(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.cl,n,new A.b7(A.m(12),B.Y),new A.ay(m,1,B.q,-1),n,n,n,n)),1),B.av,A.E(A.bG(D.frg,o.ga1N(),A.bm(B.aV,n,n,n,B.c,n,B.cl,n,new A.b7(A.m(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.r,n,B.y,n,B.B5,n,n,B.ah),n),n,n,n,W.B6,B.d0,n,new A.b7(k,B.Y),n)}}
C.Yv.prototype={
R(){return new C.axT()}}
C.axT.prototype={
a_(){this.a1()
var w=$.aw()
this.d!==$&&A.aP()
this.d=new A.as(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.U$=$.aw()
w.P$=0
this.a2()},
JR(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.I(x.q).f.T(D.eRK)
return}v=this.c
v.toString
A.a5(v,!1).O(new C.aSp(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.dY:B.c,n=A.m(20),m=A.p(q,D.bMC,B.f,q,q,new A.o(B.bT.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.az,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.v(A.a([l,B.bB,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.br:B.bk,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.bd,l,A.aH(q,q,q,q,A.X(B.cD,p?B.br:B.bk,q,q,q,q),q,q,q,new C.cYX(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aV.j(0.25),B.q,1)
u=A.X(B.ajC,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.av,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.az,q,q,q,q,q,q,q,q,12,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bD,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.az,q,q,q,q,q,q,q,q,q,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jw:B.iQ
t=A.m(12)
s=A.m(12)
r=p?B.e0:B.bO
v=A.aM(q,B.T,!0,q,!0,B.r,q,A.aN(),w,q,q,q,q,q,2,A.bs(q,new A.b4(4,t,B.dg),q,q,q,q,q,q,!0,new A.b4(4,s,new A.ay(r,1,B.q,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cYY(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.kE,q,q,q,q)
w=p?B.aP:B.az
p=p?B.e0:B.bO
return A.eJ(q,o,new A.cS(B.lC,A.cd(A.v(A.a([m,B.aQ,l,B.aB,v,B.by,A.B(A.a([A.E(A.dT(B.de,new C.cYZ(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.cl,q,new A.b7(A.m(12),B.Y),new A.ay(p,1,B.q,-1),q,q,q,q)),1),B.av,A.E(A.bG(D.fxX,this.ga1N(),A.bm(B.bT,q,q,q,B.c,q,B.cl,q,new A.b7(A.m(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.B5,q,q,B.ah),q),q,q,q,W.B6,B.d0,q,new A.b7(n,B.Y),q)}}
C.Y3.prototype={
R(){return new C.awD()}}
C.awD.prototype={
a_(){var w,v=this
v.a1()
w=$.aw()
v.d!==$&&A.aP()
v.d=new A.as(B.as,w)
v.e!==$&&A.aP()
v.e=new A.as(new A.bb("1",B.b4,B.aN),w)
v.f!==$&&A.aP()
v.f=new A.as(B.as,w)
v.r!==$&&A.aP()
v.r=new A.as(B.as,w)},
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
gJc(){var w,v=this.e
v===$&&A.c()
w=A.d5(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gaiu(){var w=this.f
w===$&&A.c()
w=A.d5(B.a.i(w.a.a))
return w==null?0:w},
gb2g(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aNj(d){var w,v=B.k.D(this.gJc()+d,0.25,999999),u=B.k.k_(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.aa(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aK(u,w,"")}t.saV(0,u)
this.m(new C.cwA())},
awN(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jw:B.iQ,s=A.m(14),r=A.m(14)
u=u?B.e0:B.bO
return A.bs(w,new A.b4(4,s,B.dg),w,B.bD,w,w,w,w,!0,new A.b4(4,r,new A.ay(u,1,B.q,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.m(14),B.aa6),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c7T(d,e,f){return this.awN(d,e,f,null)},
JR(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gaiu()<=0){s.c.I(x.q).f.T(D.eVU)
return}r=s.c
r.toString
v=s.gJc()
u=s.gaiu()
t=s.gb2g()
A.a5(r,!1).O(new C.aQr(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tH(n),l=n?B.dY:B.c,k=A.m(24),j=x.O,i=A.a([B.aV.j(0.22),B.bT.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bG8,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.q,1),h,o,new A.a8(B.a3,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.az,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.v(A.a([h,B.bB,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bk,o,o,o,o,o,o,o,o,12,o,o,B.cv,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.bd,h,A.aH(o,o,o,o,A.X(B.cD,n?B.br:B.bk,o,o,o,o),o,o,o,new C.cwG(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.az,o,o,o,o,o,o,o,o,o,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.T,!0,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.awN(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Ns),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,R.IL,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bk,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jw:B.iQ
t=A.m(14)
s=A.I(n?B.e0:B.bO,B.q,1)
r=A.aH(o,o,o,o,A.X(B.yf,n?B.aP:B.az,o,o,o,20),o,o,o,new C.cwH(p),o,o,o,o,o,B.cc)
q=p.e
q===$&&A.c()
q=A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),q,o,o,o,o,o,2,D.bRU,B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dV,o,o,o,1,o,o,!1,"\u2022",o,new C.cwI(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.az,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.an,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a7(52,o,q,o),A.aH(o,o,o,o,A.X(B.hy,n?B.aP:B.az,o,o,o,20),o,o,o,new C.cwJ(p),o,o,o,o,o,B.cc)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.az,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.av,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),t,o,o,o,o,o,2,p.awN(m,"Amount","0.00",B.i0),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dV,o,o,o,1,o,o,!1,"\u2022",o,new C.cwK(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.an,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.C(new A.K(D.cVu,new C.cwL(p,m),t),t.k("ak.E"))
i=A.a([i,B.by,v,B.aB,h,B.N,s,B.ac,A.bV(B.bz,u,B.bq,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.az,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.S,A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.c7T(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cwM(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.kE,o,o,o,o)],w))}i.push(B.aQ)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bT.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bk,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJc()===B.k.k_(p.gJc())?B.k.N(p.gJc()):p.gJc()
s=p.gb2g()
r=A.AC(p.gaiu())
i.push(A.p(o,A.B(A.a([A.E(A.v(A.a([u,B.at,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.br:B.bk,o,o,o,o,o,o,o,o,12,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bCn(p.gJc()*p.gaiu(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a3,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.jh,o,o,o))
i.push(B.by)
j=A.m(14)
h=n?B.e0:B.bO
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.cl,o,new A.b7(j,B.Y),new A.ay(h,1,B.q,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dT(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.az,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cwN(d),h),1),B.av,A.E(A.df(D.ana,D.fu_,p.ga1N(),A.bm(B.aV,o,o,0,B.c,o,B.cl,o,new A.b7(A.m(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eJ(o,l,new A.cS(V.aau,A.cd(A.v(i,B.aj,o,B.e,B.Q,0,B.p),B.r,o,B.y,o,Ad.r1,o,o,B.ah),o),o,o,o,B.M7,B.d0,o,new A.b7(k,B.Y),o)}}
C.a0D.prototype={
R(){return new C.buW()}}
C.buW.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(new A.bb(w,B.b4,B.aN),v)},
q(){var w=this.d
w===$&&A.c()
w.U$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.dY:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.az,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.az,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jw:B.iQ
v=A.aM(s,B.T,!0,s,!0,B.r,s,A.aN(),w,s,s,s,s,s,2,A.bs(s,new A.b4(4,A.m(12),B.dg),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.f96(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.an,s,s,s,s)
u=A.E(A.dT(B.de,new C.f97(d),s),1)
r=A.bm(B.bT,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eJ(s,q,new A.D(B.B5,A.v(A.a([o,B.aB,v,B.aQ,A.B(A.a([u,B.av,A.E(A.bG(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.f98(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d0,s,new A.b7(p,B.Y),s)}}
C.ab0.prototype={
a5(){return"WorksheetFrameStyle."+this.b}}
C.Fk.prototype={
R(){return new C.buU(null,null)}}
C.buU.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.boR,null,1,null,v)
w.cH(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bw3()},
gbxu(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bT,B.aZ],x.O)
case 2:return A.a([B.bu,B.aV,B.aZ],x.O)
case 3:return A.a([B.aR,B.ce,B.jR],x.O)
case 4:return A.a([B.hw,B.bT,B.fb],x.O)
case 0:return A.a([B.aV,B.bT,B.aZ],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.ev(A.c6(v,new C.f94(this,new C.tH(w.ax.a===B.I)),null),null)}}
C.aww.prototype={
R(){return new C.buV(null,null)}}
C.buV.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.n7,null,1,null,v)
w.cH(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bw4()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.f95(this),null)}}
C.buT.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a9(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aT(w,w))
u=new A.aO($.W().r,B.ap,null,null,A.a([],x.v))
u.F(new A.iW(v))
w=A.N()
w.b=B.ae
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aD(v,w)
w=A.N()
w.b=B.ae
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aP(u,w)
w=A.x1(u)
t=A.a([],x.f5)
w=new A.vv(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.ba(A.jW('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.Hd(w,r)
w.jq()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aQI(d,q,r,o,0,0.2,4.2,0.92)
p.aQI(d,q,r,s,0.52,0.11,3.2,0.58)}},
aQI(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.E(g+h,1)*f,s=A.hvh(e.a.a,e,t,t+f*i,!0),r=A.bAK(s.gbK().a.getBounds())
$.W()
w=A.N()
w.b=B.ae
w.c=j
w.d=B.bP
w.f=!0
v=this.f
u=k*this.e
w.saq(new A.a8(B.a3,B.a7,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.GR,null).av(0,r))
d.aP(s,w)},
au(d){return d.b!==this.b||d.d!==this.d}}
C.aML.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
C.aMM.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
C.tH.prototype={}
C.arP.prototype={
R(){return new C.aE9()},
ge_(){return this.c}}
C.aE9.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.ag8()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.L_(w,v)
this.a2()},
ag8(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ag8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bAS(t.c,t.d.a),$async$ag8)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eIJ(u,s))
return A.h(null,v)}})
return A.i($async$ag8,v)},
PB(){var w=0,v=A.j(x.H),u=this,t,s
var $async$PB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eIA(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.L_(t,s),$async$PB)
case 2:if(u.c!=null)u.m(new C.eIB(u))
return A.h(null,v)}})
return A.i($async$PB,v)},
Q6(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Q6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.eIH(t,new C.tH(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Q6)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a80(q),$async$Q6)
case 6:case 5:t.m(new C.eII(t,r))
w=7
return A.b(t.PB(),$async$Q6)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Q6,v)},
Vh(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i7w(r),$async$Vh)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eIv(t,new C.qU(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.PB(),$async$Vh)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vh,v)},
ccV(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hnf(t,new C.eIz(u),w,v)},
aaf(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bO(new A.ay(v,2.5,B.q,-1),B.Y,B.Y,new A.ay(B.c.j(d?0.85:0.55),2.5,B.q,-1)),D.aXB,w,w,B.n),w,22,w,w,w,w,w,22)},
a9k(d){return this.bJm(d)},
bJm(d){var w=0,v=A.j(x.H),u=this
var $async$a9k=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eIy(u,d))
w=2
return A.b(u.PB(),$async$a9k)
case 2:return A.h(null,v)}})
return A.i($async$a9k,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.bX:B.iN,d=A.m(8),a0=A.X(Q.ZU,f?B.br:B.bk,g,g,g,16),a1=x.p
a0=A.aL(!1,d,!0,new A.D(B.Fl,A.B(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.br:B.bk,g,g,g,g,g,g,g,g,g,g,g,B.a5,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eIK(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b0,B.r,A.a([A.bw(A.m(22),C.aPw(!0,A.m(22),1/0,B.pQ,g,d,1/0),B.aq),A.ao(10,A.df(D.bKH,D.fwe,h.gb08(),A.bm(B.w.j(0.45),g,g,g,B.c,g,B.h7,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eU,22),new A.ac(-4,B.G,B.bT.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.q,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bw(s,new A.an(B.W,g,B.b0,B.r,A.a([C.aPw(!0,A.m(16),1/0,B.MU,g,r.c,1/0),A.c0(g,new A.o(g,g,g,g,g,new A.a8(B.b_,B.b5,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.be),A.ao(g,h.aaf(!0),g,g,8,g,8,g),A.ao(g,A.cu5(h.aaf(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cu5(h.aaf(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cu5(h.aaf(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.df(D.bGH,D.fq2,h.gb08(),A.bm(B.w.j(0.45),g,g,g,B.c,g,B.h7,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bTr,B.n),g,g,g,g,B.lP,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.az,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b71,B.nL,B.h5],u):A.a([B.aZ,B.aV,B.bT],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eU,24)],t)
r=A.m(22)
p=A.ao(g,A.X(B.jC,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.q,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h6,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bCn(h.d.gwS(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.N,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cv,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.fT.j(0.75),B.q,1.6)
t=A.a([new A.ac(0,B.G,B.aR.j(0.28),B.cJ,14)],t)
j=B.aR.j(0.22)
i=A.m(10)
u=A.p(g,A.bw(r,new A.an(B.W,g,B.aa,B.r,A.a([p,new A.D(D.bts,A.B(A.a([o,B.av,A.aG(!1,B.a1,!0,g,A.aL(!1,n,!0,A.eE(new A.D(Ai.B0,A.v(A.a([A.p(g,D.amI,B.f,g,g,new A.o(j,g,A.I(B.aR.j(0.5),B.q,1),i,g,g,B.n),g,g,g,g,B.cp,g,g,g),B.h0,D.ffe],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gccU(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ag)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.ax,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fG(1.7777777777777777,d,g),B.aQ,w,B.N,u,B.by,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.az,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b6,A.df(Ak.a0C,D.fd7,h.gbxX(),A.bm(B.aV,g,g,g,B.c,g,B.i_,g,new A.b7(A.m(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.dY:B.c
v=A.m(14)
u=A.I(f?B.e0:B.bO,B.q,1)
t=A.X(B.a_e,f?B.br:B.bk,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.az,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.S,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.br:B.bk,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.tH,g,g,1/0))}else B.d.v(d,new A.K(w,new C.eIL(h,new C.tH(f)),A.U(w).k("K<1,r>")))
if(h.e)d.push(new A.D(B.AU,A.av(A.mI(g,f?B.br:B.bk,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c8(g,e,A.bl(!0,A.v(A.a([new A.D(B.AZ,a0,g),A.E(A.cd(A.v(d,B.F,g,B.e,B.j,0,B.p),B.r,g,B.y,g,E.xG,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bBz(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dY:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.b_m,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.X(s?B.hM:B.h9,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bI
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aP:B.az,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcSe()
v=A.AC(d.d)
B.d.v(t,A.a([B.at,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.br:B.bk,u,u,u,u,u,u,u,u,12,u,u,B.a5,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.bb,B.Q,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bT.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bCn(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a3,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.h7,u,u,u)
w=x.p
return A.p(u,A.bw(n,new A.DP(A.B(A.a([m,A.E(new A.D(B.agP,A.B(A.a([l,B.bd,t,B.ab,k,A.aH(u,u,u,u,A.X(B.cD,(r?B.br:B.bk).j(0.75),u,u,u,20),u,u,u,new C.eIw(this,d),u,u,u,u,u,B.cc)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.aj,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.aZe,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.da,u,u,u,u)}}
C.ad2.prototype={
Ed(d){return this.bKJ(d)},
bKJ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ed=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.p3(d,o,!1),$async$Ed)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).O(null)
w=4
return A.b(A.bN(Ac.AS,null,x.H),$async$Ed)
case 4:s=t.d
w=5
return A.b(C.fFI(!0,o,s),$async$Ed)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Gf(r,"ngmy_project_"+A.aK(s.b,q,"_"),!1),$async$Ed)
case 6:p=f
w=7
return A.b(A.p2(o,!1),$async$Ed)
case 7:if(d.e==null){w=1
break}d.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Ed,v)},
ZL(d){return this.ct8(d)},
ct8(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.p3(d,s,!1),$async$ZL)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).O(null)
A.hy(d,new C.arJ(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.p2(s,!1),$async$ZL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZL,v)},
PC(d){return this.cpd(d)},
cpd(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).O(null)
w=3
return A.b(A.hy(d,D.aFR,!0,"NgmyWorksheetProjectScan",x.N),$async$PC)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bCo(s),$async$PC)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.T(D.eV2)
w=1
break}q=C.h_J(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dP(p,x.H),$async$PC)
case 5:if(d.e==null){w=1
break}d.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$PC,v)},
ZM(d){return this.cB3(d)},
cB3(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ZM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).O(null)
w=3
return A.b(C.bBW(),$async$ZM)
case 3:s=f
if(s==null){w=1
break}r=C.h_J(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dP(q,x.H),$async$ZM)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$ZM,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tH(u),s=w.d.d.length,r=u?B.dY:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.k4,36)],x.V),o=x.p
return A.bl(!0,new A.D(B.vo,A.p(v,A.v(A.a([w.crH(d,t,s),new A.D(D.bsR,A.v(A.a([w.b3a(t,"QR restore"),B.S,A.B(A.a([w.aZ6(t,!0,B.jn,B.aR,B.aR,new C.eIN(w,d),"Show to scan","QR code"),B.av,w.awO(t,B.iX,B.b7,B.bt,new C.eIO(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d7,w.b3a(t,"Backup files"),B.S,A.B(A.a([w.awO(t,B.hA,B.aV,B.bT,new C.eIP(w,d),"Full copy","Backup file"),B.av,w.awO(t,M.yl,B.aF,B.aM,new C.eIQ(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
crH(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eZ,B.cY,B.fx],k):A.a([B.aZ,B.aV,B.bT],k)
w=A.ao(l,A.X(B.u0,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kQ,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.q,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aPw(!0,A.m(13),64,D.bBW,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aQi,l,l,l)
r=C.bCn(r.gwS(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.q,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.r,A.a([w,new A.D(D.bte,A.v(A.a([v,A.B(A.a([s,B.er,A.E(A.v(A.a([u,B.at,t,B.N,A.B(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fK,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.X(B.cD,B.c.j(0.85),l,l,l,l),l,l,l,new C.eIM(d),l,l,l,A.nx(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aNB,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.ax,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b3a(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.br:B.bk,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aZ6(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.afs:B.aP
if(e)w=B.aR.j(o?0.45:0.35)
else{w=o?B.e0:B.bO
w=w.j(o?0.8:1)}w=A.I(w,B.q,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aR.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.q,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.r2,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.az,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aG(!1,B.a1,!0,r,A.aL(!1,q,!0,A.eE(new A.D(E.Yi,A.v(A.a([t,B.ac,u,B.bB,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.br:B.bk,r,r,r,r,r,r,r,r,11,r,r,B.cv,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
awO(d,e,f,g,h,i,j){return this.aZ6(d,!1,e,f,g,h,i,j)}}
C.arJ.prototype={
R(){return new C.bkb()}}
C.bkb.prototype={
a_(){this.a1()
this.ae1()},
ae1(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ae1=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bCp(p.c,p.d),$async$ae1)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eIq(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eIr(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ae1,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.Ap:B.iN,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eC,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eIs(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zr],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eZ,B.cY,B.fx],s):A.a([B.aZ,B.aV,B.bT],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eU,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dm,B.L,h,h)
p=C.bCn(p.gwS(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.am,A.B(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fK,h,h,h)],u),B.m,h,B.bb,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.ax,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.YD,h,h,1/0)
t=g?D.bgk:B.c
q=A.m(24)
p=A.I(w?B.aR.j(0.4):B.aV.j(0.3),B.q,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dl,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a7c,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.e79)
else{m=A.m(20)
l=A.I(B.aL,B.q,1)
o.push(A.p(h,A.pK(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bR,h,h,h))}}o.push(B.aQ)
n=w?B.aR:B.aV
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aR:B.aV).j(0.35),B.q,1)
k=w?B.Nb:B.NJ
k=A.X(k,w?B.aR:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.av,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a5,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.i_,h,h,h))
return A.c8(h,f,A.bl(!0,A.v(A.a([new A.D(A7.Ml,e,h),A.E(A.cd(A.v(A.a([s,B.aQ,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tG,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.r,h,B.y,h,E.ahX,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.arO.prototype={
R(){return new C.aE8(A.z4(B.LC,B.nE,B.u5))}}
C.aE8.prototype={
q(){this.d.q()
this.a2()},
aLk(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iO(w,d)},
c8K(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.i5r(t)
if(s!=null){this.aLk(s)
return}r=C.heg(t)
if(r!=null)q=A.cX(r,p,0)
else q=!1
if(q){this.aLk(B.a.i(B.a.b2(r,B.a.cJ(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eC(A.a([A.aH(t,t,t,t,A.X(u.f?B.r7:A2.Nh,t,t,t,t,t),t,t,t,new C.eIu(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Ap,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fpW,t,t,t,1,t,!0),q=A.z3(u.d,B.bS,u.gc8J()),p=A.m(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.q,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c8(r,B.w,new A.an(B.W,t,B.b0,B.r,A.a([q,p,A.ao(32,A.p(t,D.foJ,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.q,1),v,t,t,B.n),t,t,t,t,B.jh,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aIW.prototype={
a5(){return"_WorksheetTab."+this.b}}
C.NO.prototype={
R(){return new C.aEa(D.a9o,A.a([],x.D))},
br(){return this.r.$0()},
ge_(){return this.c}}
C.aEa.prototype={
gcz0(){return J.bDx(this.e,0,new C.eJc())},
a_(){this.a1()
$.aW.c2$.push(this)
this.vC()},
q(){$.aW.hF(this)
this.a2()},
iY(d){if(d===B.fv)this.vC()},
vC(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vC=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.CG(q.a.c).cM(0,B.jW),$async$vC)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eJ8(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eJ9(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vC,v)},
HF(d){return this.bHv(d)},
bHu(){return this.HF(null)},
bHv(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i7y(l,d),$async$HF)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.li(l,r,q,D.d59,new A.S(Date.now(),0,!1))
w=4
return A.b(C.L_(t.a.c,p),$async$HF)
case 4:o=f
w=5
return A.b(t.vC(),$async$HF)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.T(D.eSd)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gS(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.T(D.eTX)
else n.I(q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.Eh(m)
case 1:return A.h(u,v)}})
return A.i($async$HF,v)},
Eh(d){return this.ccG(d)},
ccG(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Eh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hy(s,new C.arP(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Eh)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.L_(u.a.c,t),$async$Eh)
case 5:case 4:w=6
return A.b(u.vC(),$async$Eh)
case 6:return A.h(null,v)}})
return A.i($async$Eh,v)},
vo(d){return this.bXm(d)},
bXm(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bBW(),$async$vo)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hy(r,D.aFR,!0,"NgmyWorksheetProjectScan",x.N),$async$vo)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bCo(q),$async$vo)
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
r.T(A.b2(null,null,null,null,null,B.r,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.h_J(s)
w=15
return A.b(C.L_(t.a.c,p),$async$vo)
case 15:o=f
w=16
return A.b(t.vC(),$async$vo)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.T(D.eU1)
w=1
break}r.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.Eh(p)
case 1:return A.h(u,v)}})
return A.i($async$vo,v)},
Nr(d){return this.bGa(d)},
bGa(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Nr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ca(null,null,!0,null,new C.eIU(d),s,null,!0,!0,x.y),$async$Nr)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oC(t.a.c,A.a([],x.D)),$async$Nr)
case 6:w=7
return A.b(t.vC(),$async$Nr)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.T(D.eSi)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Nr,v)},
ccT(d){var w=this.c
w.toString
A.bQ(B.K,null,new C.eJ2(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b3M(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jw
else w=B.c
v=A.m(16)
u=A.I(p?B.e0:B.bO,B.q,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bU,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.az,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(r,A.v(A.a([s,B.ac,t,B.bB,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.br:B.bk,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vn,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
a_g(d,e){return this.ccH(d,e)},
ccH(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_g=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bQ(B.K,null,new C.eIY(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a_g)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hnf(r,new C.eIZ(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Nt(d,e),$async$a_g)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_g,v)},
b0K(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bU,u,u,u)
if(d)t=B.ay
else t=h.a?B.aP:B.az
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.v(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.br:B.bk,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aG(!1,B.a1,!0,u,A.aL(!1,u,!0,new A.D(B.B4,A.B(A.a([s,B.bd,t,A.X(B.ey,w?B.br:B.bk,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag)},
cjx(d,e,f,g,h,i){return this.b0K(!1,d,e,f,g,h,i)},
Nt(d,e){return this.bGk(d,e)},
bGk(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Nt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.l3(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Nt)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bAE(t.a.c,d.a),$async$Nt)
case 6:w=7
return A.b(t.vC(),$async$Nt)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Nt,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tH(o),m=o?B.bX:B.iN
if(q.f)o=D.b4U
else{w=q.bAK(n)
v=q.bWq(n)
u=q.gbxR()
if(o)t=B.jw
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aQ,new C.Fk(A.p(p,A.B(A.a([q.aAk(N.MT,"Projects",n,D.a9o),q.aAk(B.vA,"Cashier",n,D.aV2),q.aAk(B.FF,"Family Tree",n,D.h_C)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.eq,0.95,u,p),B.by],r)
w=q.d
if(w===D.a9o){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.az,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b6,new C.aww(q.gaPu(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aB,q.cjz(n)],r))}else{o=q.a
if(w===D.aV2)u.push(new C.anO(o.c,n,p))
else{w=q.r
u.push(new C.aoW(o.c,o.d,o.e,o.f,new C.eJf(q),new C.eJg(q),new A.cx(w,x.b4)))}}o=A.cd(A.v(u,B.F,p,B.e,B.j,0,B.p),B.r,p,B.y,p,Ae.Me,p,p,B.ah)}return A.c8(p,m,A.bl(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bAK(d){var w=null,v=A.m(8),u=d.a,t=A.X(Q.ZU,u?B.br:B.bk,w,w,w,16)
return A.aL(!1,v,!0,new A.D(B.kR,A.B(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.br:B.bk,w,w,w,w,w,w,w,w,14,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eIR(this),w,w,w,w,w,w,w)},
gbxR(){switch(this.d.a){case 0:return D.a8G
case 1:return D.fRg
case 2:return D.a8H}},
bWq(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cB,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bMs,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bd,D.bxy,A.aG(!1,B.a1,!0,w,A.aL(!1,A.m(12),!0,A.p(w,D.bK0,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eIV(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.m(12)
return new C.Fk(A.p(w,A.v(A.a([new A.D(E.Yo,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.d(A.AC(this.gcz0()),w,w,w,w,w,w,D.f9z,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.vm,B.jh,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.fRf,w)},
aAk(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aV:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.q,2):A.I(B.K,B.q,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.br:B.bk
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.br:B.bk
return A.E(A.aG(!1,B.a1,!0,u,A.aL(!1,s,!0,A.dk(u,A.B(A.a([w,B.ec,new A.dq(1,B.cn,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.bb,B.j,0,u,u),u,u,B.ct,new A.o(r,u,p,q,o,u,B.n),B.iy,u,u,u,B.Mh,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eJb(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),1)},
cjz(d){var w,v,u,t,s,r,q=this,p=null
if(J.cn(q.e)){w=d.a
v=w?B.dY:B.c
u=A.m(15)
t=A.p(p,D.bK5,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eU,28)],x.V),D.bVT,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.az,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Fk(A.p(p,A.v(A.a([t,B.d7,s,B.N,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.br:B.bk,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.e3,A.B(A.a([A.E(q.aR3(B.iX,"Scan QR",new C.eJ5(q),d),1),B.av,A.E(q.aR3(M.yl,"Upload file",new C.eJ6(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aB,A.bG(D.fzO,q.gaPu(),A.bm(B.aV,p,p,p,B.c,B.fN,p,p,new A.b7(A.m(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.buj,1.05,D.a8G,p)}w=J.b6(q.e,new C.eJ7(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Fk(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bU,1,D.a8G,p)},
aR3(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aV.j(0.45),B.q,1)
return A.aG(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(w,A.v(A.a([A.X(d,B.aZ,w,w,w,26),B.N,A.d(e,w,w,w,w,w,w,D.f80,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.agH,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)},
cjy(d,e){var w,v,u=null,t=e.a,s=t?B.dY:B.c,r=A.m(14),q=A.I(t?B.e0:B.bO,B.q,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.el,10)],x.V),o=A.m(14),n=t?B.br:B.bk
n=A.bw(B.V5,new A.fG(1.7777777777777777,C.aPw(!0,B.fw,1/0,N.MT,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.az,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.d(""+d.d.length+" budget items \xb7 "+A.AC(d.gwS()),u,u,u,u,u,u,D.f69,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aG(!1,B.a1,!0,u,A.aL(!1,o,!0,A.v(A.a([n,new A.D(B.bD,A.B(A.a([v,A.aH(u,u,u,u,A.X(Af.Nw,t?B.br:B.bk,u,u,u,u),u,u,u,new C.eJ3(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eJ4(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e5,u,u,u,1/0)}}
C.bwH.prototype={}
C.qU.prototype={
ag(){var w=this,v=w.c,u=w.d
return A.F(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcSe(){var w,v,u,t,s=this.c
if(s===B.k.k_(s))w=B.o.u(B.k.N(s))
else{v=B.k.aa(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aK(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.li.prototype={
gwS(){return B.d.cI(this.d,0,new C.cw1())},
ag(){var w=this,v=w.d,u=A.U(v).k("K<1,a4<n,@>>")
v=A.C(new A.K(v,new C.cw0(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
baP(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.li(w.a,w.b,v,u,w.e)},
baw(d){return this.baP(d,null)},
Sj(d){return this.baP(null,d)}}
C.Hn.prototype={
a5(){return"FamilyGender."+this.b}}
C.hX.prototype={
ag(){var w=this
return A.F(["id",w.a,"name",w.b,"gender",C.hj5(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aD_(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hX(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.aka.prototype={
a5(){return"FamilyTreeAccessRole."+this.b}}
C.kC.prototype={
ganT(){var w=this.f
return new A.a1(w,new C.bN9(),A.U(w).k("a1<1>")).gM(0)},
ag(){var w=this,v=w.f,u=A.U(v).k("K<1,a4<n,@>>")
v=A.C(new A.K(v,new C.bN8(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hYU(w.y)],x.N,x.z)},
yv(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kC(w.a,v,u,t,s,r,w.r,q,p,o)},
baO(d,e){var w=null
return this.yv(w,w,d,e,w,w,w,w)},
cHV(d,e,f,g,h,i,j){return this.yv(d,e,f,g,h,i,j,null)},
aD4(d,e){var w=null
return this.yv(w,w,w,d,w,w,e,w)},
cGo(d){var w=null
return this.yv(w,w,w,w,w,w,d,w)},
cGM(d){var w=null
return this.yv(w,w,w,w,w,w,w,d)},
aCR(d){var w=null
return this.yv(w,w,w,w,d,w,w,w)},
cHq(d,e,f){var w=null
return this.yv(w,d,w,e,w,w,f,w)},
cGb(d){var w=null
return this.yv(w,w,d,w,w,w,w,w)},
cGZ(d,e){var w=null
return this.yv(d,w,w,w,w,e,w,w)}}
C.cw2.prototype={
a5(){return"WrapAlignment."+this.b}}
C.cw3.prototype={
a5(){return"WrapCrossAlignment."+this.b}}
C.aGd.prototype={}
C.b7Q.prototype={
bA(d){this.a=d.a
this.b=d.b},
cT(d){var w=new C.b7Q()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b7P.prototype={
gwb(){return!0},
gFO(){return this.z.b<this.b.length},
aSG(d){switch(0){case 0:return d.a.c}},
aSn(d){switch(0){case 0:return d.a.d}},
bPS(d,e){switch(0){case 0:return new A.hK(d,e)}},
bPf(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h3(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iD(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.H7(b4)
switch(0){case 0:v=b5.b
u=new A.kz(0,v,0,1/0)
t=w===B.T5
break}s=A.a([],x.gZ)
r=A.T(x.cM,x.S)
for(b3=b1.z,q=B.d.fM(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.L)(q),++h){g=q[h]
g.h3(b4,u,!0)
f=b1.aSG(g)
f.toString
e=b1.aSn(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGd(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGd(k,j,i))}d=s.length
switch(0){case 0:q=b5.cv(new A.hK(m,l))
a0=q.a
a1=q.b
b1.a=new A.iD(0,0,a0,a1)
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
a8=b1.aSG(g)
e=b1.aSn(g)
e.toString
a9=b1.bPf(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bPS(a6,a3+a9)
b0=g.a
g.a=new A.iD(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h_(d){var w,v,u,t,s,r=this
r.le(d)
w=d.b
w.i5()
v=A.dp()
u=r.a
v.e7(u.a,u.b,0,1)
w.oT(0,v)
for(u=r.z,u=B.d.dq(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].h_(d)
w.ng(0)},
Gj(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
i5(){return this.z}}
C.buX.prototype={}
var z=a.updateTypes(["az<~>()","R(hX)","R(kC)","~()","R(na)","a4<n,@>(kC)","H(kC,kC)","n(hX)","kC(a4<@,@>)","R(li)","R(u9)","na(a4<@,@>)","u9()","H(li,li)","hX(a4<@,@>)","a4<n,@>(hX)","R(qU)","az<~>(li)","eD<n?>(hX)","H(hX,hX)","n?(hX)","a4<n,@>(na)","Zx(Y)","n(n)","acI(Y)","r(oc)","H(na,na)","hX(hX)","cL(bv<n,Fx>)","cL(JO)","~(hX)","H?(hX)","hX()","ai<hX>()","R(u8)","R(JO)","D(hX)","~(Hn)","R(aeg)","r(Hn,n,a_)","YW(Y)","bv<n,ai<a4<n,@>>>(n,ai<na>)","~(H)","+count,id,name(H,n,n)(kC)","kC(kC)","ZS(Y)","ZT(Y)","R(lz)","lz()","n(kC)","a0D(Y)","Yw(Y)","Yv(Y)","YU(Y)","YY(Y)","r(qU)","ad2(Y)","~(lX)","az<~>([n?])","M(M,li)","r(li)","M(M,qU)","a4<n,@>(qU)","qU(a4<@,@>)","Yu(Y)","Sn(Y)","cq(Hm)","li(a4<@,@>)","u8()","n(li)","a4<n,@>(li)","n(S)","H(hX)","kC(a4<n,@>)","Y3(Y)"])
C.fym.prototype={
$1(d){return d.a+" "+d.b},
$S:123}
C.fyl.prototype={
bjV(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qM(s,d,B.hp,E.F1),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.V(r!=null&&A.KO(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bjV(d)},
$S:335}
C.fyn.prototype={
$1(d){return d.b},
$S:123}
C.fHx.prototype={
$1(d){var w=null
return A.eJ(w,B.K,new F.Pa(this.a,this.b,w),w,w,0,B.Yj,B.d0,w,w,w)},
$S:47}
C.fnn.prototype={
$1(d){return d!=null},
$S:222}
C.fno.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:222}
C.fnt.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:174}
C.fw5.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fb(d,w,w,w,A.h4(w,B.rx,w,w,w,w,w,w,w,B.ds,w,w,10.5,w,B.ek,w,!0,w,w,w,w),w),u=f?B.ek:B.vv
return new A.nI(D.bpV,A.a9g(A.a([new A.fO(130,w,v),new A.yL(1,B.Fy,A.fb(e,w,w,w,A.h4(w,g==null?D.e9r:g,w,w,w,w,w,w,w,B.ds,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.xk,B.ls))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1910}
C.fw4.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vn(999)
f=A.wV(A.lu(h,A.fb("Cashier",h,h,h,A.h4(h,D.zd,h,h,h,h,h,h,h,B.ds,h,h,10,h,B.ek,h,!0,h,h,h,h),h),h,new A.kA(D.e9i,h,f,B.hE,h),h,h,D.bqo,h))
w=A.wV(A.fb("Debt receipt",h,h,h,A.h4(h,h,h,h,h,h,h,h,h,B.ds,h,h,22,h,B.ek,h,!0,h,h,h,h),h))
v=A.wV(A.fb(C.wG(new A.S(Date.now(),0,!1),!0),h,h,h,D.a7i,h))
u=A.vn(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fb(s,h,h,h,A.h4(h,h,h,h,h,h,h,h,h,B.ds,h,h,14,h,B.ek,h,!0,h,h,h,h),h)
r=A.fb("Person who owes",h,h,h,D.a7i,h)
q=A.vn(10)
p=x.C
u=A.lu(h,A.yG(A.a([s,new A.fO(h,2,h),r,new A.fO(h,10,h),A.lu(h,A.yG(A.a([A.fb("Amount owed",h,h,h,D.a7i,h),new A.fO(h,2,h),A.fb(A.AC(t.c),h,h,h,A.h4(h,D.zd,h,h,h,h,h,h,h,B.ds,h,h,20,h,B.ek,h,!0,h,h,h,h),h)],p),B.qV,B.ls),h,new A.kA(B.p2,h,q,B.hE,h),h,h,D.bpB,1/0)],p),B.qV,B.ls),h,new A.kA(E.aH6,h,u,B.hE,h),h,h,D.brq,1/0)
q=new A.nr(D.e9l,0.9,B.kK)
r=A.vn(12)
s=i.c
o=s.$2("Original due",C.wG(t.r,!1))
n=s.$2("Current due",C.wG(t.f,!1))
m=i.d
l=new A.nr(m,1.1,B.kK)
k=A.vn(8)
j=i.a
k=A.a([o,n,new A.fO(h,6,h),A.lu(h,A.wV(A.fb(t.gaJQ(),h,h,h,A.h4(h,m,h,h,h,h,h,h,h,B.ds,h,h,11,h,B.ek,h,!0,0.5,h,h,h),h)),h,new A.kA(h,new A.pv(l,l,l,l),k,B.hE,h),h,h,D.bqw,1/0),new A.fO(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.zd))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.zd))
else{n=A.fb("Missed days ("+n+")",h,h,h,A.h4(h,B.rx,h,h,h,h,h,h,h,B.ds,h,h,10.5,h,B.ek,h,!0,h,h,h,h),h)
m=A.U(o).k("K<1,RW>")
o=A.C(new A.K(o,new C.fw3(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fO(h,4,h),n,new A.fO(h,6,h),new C.b7P(5,5,new C.b7Q(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fO(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fO(h,8,h),w,new A.fO(h,3,h),v,new A.fO(h,16,h),u,new A.fO(h,10,h),A.lu(h,A.yG(k,B.xk,B.ls),h,new A.kA(h,new A.pv(q,q,q,q),r,B.hE,h),h,h,B.agT,1/0)],p)
w=j.a
if(w!=null){v=new A.nr(B.I0,1,B.kK)
B.d.v(f,A.a([new A.fO(h,16,h),A.fb("Debtor signature",h,h,h,A.h4(h,B.rx,h,h,h,h,h,h,h,B.ds,h,h,10,h,B.ek,h,!0,h,h,h,h),h),new A.fO(h,6,h),A.lu(h,new A.HD(w,B.Vg,h,h),h,new A.kA(h,new A.pv(v,v,v,v),A.vn(6),B.hE,h),82,h,B.Mj,1/0)],p))}f.push(new A.fO(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fb(w,h,h,h,D.f_6,h))
f.push(new A.fO(h,18,h))
f.push(A.wV(A.fb("NGMY.ORG",h,h,h,A.h4(h,D.zd,h,h,h,h,h,h,h,B.ds,h,h,14,h,B.ek,h,!0,1.8,h,h,h),h)))
return f},
$S:358}
C.fw3.prototype={
$1(d){var w=null,v=new A.nr(D.I1,0.7,B.kK),u=A.vn(999)
return A.lu(w,A.fb(C.wG(d,!1),w,w,w,A.h4(w,D.I1,w,w,w,w,w,w,w,B.ds,w,w,9.5,w,B.ek,w,!0,w,w,w,w),w),w,new A.kA(w,new A.pv(v,v,v,v),u,B.hE,w),w,w,D.bvF,w)},
$S:1911}
C.c1d.prototype={
$1(d){var w=null,v=B.bC.j(0.08),u=A.m(999),t=A.I(B.bC.j(0.28),B.q,1)
return A.p(w,A.d(C.wG(d,!1),w,w,w,w,w,w,D.f5F,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eB,w,w,w)},
$S:1912}
C.fI2.prototype={
$1(d){var w=null,v=A.aI(d,B.bV,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bNk,w,w,w,new C.fI_(d),w,w,w,w,w,B.cc),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eJ(w,B.K,new A.cS(new A.aY(0,380,0,v.a.b*0.9),A.aG(!1,B.a1,!0,u,new A.D(B.Y9,A.v(A.a([new A.bI(B.a7,w,w,t,w),new A.dq(1,B.cn,A.cd(A.v(A.a([new A.ev(new C.aXS(r,w),s),B.S,A.B(A.a([A.E(A.ey(B.yw,D.fwa,new C.fI0(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f8,w,new A.b7(A.m(14),B.Y),new A.ay(q,1,B.q,-1),w,w,w,w)),1),B.ab,A.E(A.df(B.a0s,D.fsO,new C.fI1(r,d),A.bm(B.aZ,w,w,w,B.c,w,B.f8,w,new A.b7(A.m(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.r,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.az,0,w,w,w,w,w,B.ag),w),w,w,0,Aj.Yw,B.d0,w,w,w)},
$S:47}
C.fI_.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fI0.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.ak$.x.h(0,t.a)
m=m==null?null:m.gb8()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lY(2.5),$async$$0)
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
return A.b(A.rR(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fI1.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fCG(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.T(A.b2(null,null,null,null,null,B.r,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fHV.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eJ(w,B.az,A.v(A.a([new A.D(D.bre,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nw,w,w,w),1),A.aH(w,w,w,w,B.lq,w,w,w,new C.fHT(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dq(1,B.cn,new A.D(B.fV,A.bw(A.m(14),A.fL(t,B.A,w,w,B.cj,B.du,!1,w,!1,w,w),B.aq),w),w),new A.D(B.LX,new A.a7(1/0,w,A.df(B.oS,D.aQJ,new C.fHU(t,this.c,d),A.bm(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.M8,B.d0,w,new A.b7(v,B.Y),w)},
$S:47}
C.fHT.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fHU.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rR(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fI6.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eJ(w,B.az,new A.D(D.brm,A.v(A.a([A.B(A.a([D.bwI,A.aH(w,w,w,w,B.lq,w,w,w,new C.fI4(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.N,new A.ev(A.bw(A.m(14),A.p(w,A.b3(w,w,w,new C.b9Z(s.ax,w),B.au),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a7(1/0,w,A.df(B.oS,D.aQJ,new C.fI5(t,s,d),A.bm(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(v,B.Y),w)},
$S:47}
C.fI4.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fI5.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.ak$.x.h(0,t.a)
n=n==null?null:n.gb8()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lY(2.5),$async$$0)
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
return A.b(A.rR(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fr0.prototype={
$1(d){return d.a===this.a},
$S:251}
C.dFu.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dFf.prototype={
bj8(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dY:B.c
s=u.a
w=2
return A.b(A.bQ(t,null,new C.dFi(s,q,e),p,!0,!0,!1,B.Ih,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dFj(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bj8(d,e)},
$S:1913}
C.dFi.prototype={
$1(d){var w,v=null,u=this.c===B.w3,t=u?D.dbd:D.d7l
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.az,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bl(!0,new A.D(K.ahs,A.v(A.a([u,B.at,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.br:B.bk,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.ig(!0,v,v,B.y,L.aNT,new C.dFh(this.a,w,t,d),t.length,v,B.dR,B.ah,!0)],x.p),B.aj,v,B.e,B.Q,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:24}
C.dFh.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cY.j(0.14)
else w=t.b.a.d.a?B.M:B.aP
v=A.m(14)
if(q)u=B.cY
else u=(t.b.a.d.a?B.br:B.bk).j(0.16)
u=A.I(u,B.q,q?1.6:1)
return A.aL(!1,p,!0,A.p(B.A,C.aXR(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dFg(t.d,r),s,s,s,s,s,s,s)},
$S:192}
C.dFg.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.dFj.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dFd.prototype={
$3(d,e,f){return B.bI},
$C:"$3",
$R:3,
$S:94}
C.dFe.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cI(B.ct,e,v)
return new A.cZ(e,!1,A.il(B.A,A.av(A.aG(!1,B.a1,!0,v,new A.e0(new C.dFc(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ag),v,v,v),v,new A.bf(t,new A.bp(0.96,1,u),u.k("bf<bJ.T>"))),v)},
$S:31}
C.dFc.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bV,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dY:B.c,f=A.m(14),e=A.I((h?B.br:B.bk).j(0.16),B.q,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.az,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.B(A.a([w,A.aL(!1,v,!0,new A.D(B.eq,A.X(B.cD,i.a.d.a?B.br:B.bk,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dEY(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.az,k,k,k,k,k,k,k,k,14,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aRA("Name")
r=l.a
q=r.d==null?k:new C.dEZ(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bo:B.lJ
n=A.I(B.cY.j(0.35),B.q,1)
m=r.d
t=A.aM(k,B.T,h,k,!0,B.r,k,A.aN(),w,k,k,k,k,k,2,s.baH(new A.D(B.fz,A.aL(!1,p,!0,A.p(B.A,C.aXR(m==null?"\ud83d\udc64":A.fwU(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cp,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.kE,k,B.a73,k,k)
v=A.a([v,B.ac,t,B.N,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bk,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aSd("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dF_(r,a0),r.d===B.w3),1),B.ab,A.E(i.aSd("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dF4(r,a0),r.d===B.a43),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.N,new A.bI(B.a3,k,k,A.hg(D.bLJ,D.fuz,new C.dF5(r,l.e,a0),A.fv(k,k,k,k,k,k,k,k,k,k,k,B.cY,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cc)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.az,k,k,k,k,k,k,k,k,14,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uc(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.f,k,k,k,k,k,2,i.aRB("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ai,k,k,s,k,k,B.dV,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.M:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.br:B.bk).j(0.22),B.q,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bk,k,k,k,k,k,k,k,k,11,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wG(r.a,!1)
v.push(A.aG(!1,B.a1,!0,q,A.aL(!1,p,!0,A.p(k,A.B(A.a([A.E(A.v(A.a([t,B.bB,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.az,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bIA],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bm,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dF6(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ag))
if(!h)B.d.v(v,A.a([B.N,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bk,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.az,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.r,k,k,k,k,k,2,i.aRA("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.az,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bk,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b_5(r.b.length!==0,B.mq,new C.dF7(r,i,a0),new C.dF8(r,a0),"Upload from gallery","ID photo"))
v.push(i.b_5(r.c.length!==0,D.bBU,new C.dF9(r,i,d,a0),new C.dFa(r,a0),"Camera or gallery","Selfie"))
v.push(B.N)
t=l.w
v.push(new Ah.a77("Signature (optional)",t,new C.dFb(a0),new C.dF0(a0,t),new C.dF1(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.br:B.bk
s=(i?B.br:B.bk).j(0.28)
s=A.E(A.dT(E.aQC,new C.dF2(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.vh,k,new A.b7(A.m(10),B.Y),new A.ay(s,1,B.q,-1),k,k,k,k)),1)
t=A.bm(B.cY,k,k,k,B.c,k,B.vh,k,new A.b7(A.m(10),B.Y),k,k,k)
v.push(A.B(A.a([s,B.ab,A.E(A.bG(A.d(h?"Save":"Update",k,k,k,k,k,k,B.uE,k,k,k),new C.dF3(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cd(A.v(v,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.vr,B.jh,k,k,360)},
$S:191}
C.dEY.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dEZ.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dF_.prototype={
$0(){return this.b.$1(new C.dEX(this.a))},
$S:0}
C.dEX.prototype={
$0(){var w=this.a
w.d=B.w3
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dF4.prototype={
$0(){return this.b.$1(new C.dEW(this.a))},
$S:0}
C.dEW.prototype={
$0(){var w=this.a
w.d=B.a43
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dF5.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dF6.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wK(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dEV(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEV.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcj(),w.gce(),w.gcu(),0,0,0,0,0)},
$S:0}
C.dF7.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.P_(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dEU(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEU.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dF8.prototype={
$0(){return this.b.$1(new C.dET(this.a))},
$S:0}
C.dET.prototype={
$0(){return this.a.b=""},
$S:0}
C.dF9.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dY:B.c
w=3
return A.b(A.bQ(q,null,new C.dER(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.P_(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dES(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dER.prototype={
$1(d){var w=null
return A.bl(!0,A.v(A.a([A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.amz,w,w,w,w,new C.dEL(d),!1,w,w,w,w,w,w,w,D.fl7,w,w,w),A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.amx,w,w,w,w,new C.dEM(d),!1,w,w,w,w,w,w,w,D.frS,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.af,!0,!0)},
$S:24}
C.dEL.prototype={
$0(){A.a5(this.a,!1).O("camera")
return null},
$S:0}
C.dEM.prototype={
$0(){A.a5(this.a,!1).O("gallery")
return null},
$S:0}
C.dES.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dFa.prototype={
$0(){return this.b.$1(new C.dEQ(this.a))},
$S:0}
C.dEQ.prototype={
$0(){return this.a.c=""},
$S:0}
C.dFb.prototype={
$0(){return this.a.$1(new C.dEP())},
$S:0}
C.dEP.prototype={
$0(){},
$S:0}
C.dF0.prototype={
$0(){return this.a.$1(new C.dEO(this.b))},
$S:0}
C.dEO.prototype={
$0(){return B.d.a9(this.a)},
$S:0}
C.dF1.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ahd(u.a,null,null,new C.dEN(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEN.prototype={
$4(d,e,f,g){this.a.$1(new C.dEK(this.b,d))},
$S:439}
C.dEK.prototype={
$0(){var w=this.a
B.d.a9(w)
B.d.v(w,this.b)},
$S:0}
C.dF2.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dF3.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.T(D.eVT)
return}if(w.a.d==null){w.c.I(x.q).f.T(D.eSP)
return}A.a5(w.c,!1).O(!0)},
$S:0}
C.dFx.prototype={
$3(d,e,f){return B.bI},
$C:"$3",
$R:3,
$S:94}
C.dFy.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dY:B.c,n=A.m(14),m=A.I((p?B.br:B.bk).j(0.16),B.q,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.az,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.AC(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.br:B.bk,r,r,r,r,r,r,r,r,13,r,r,B.a5,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.yW(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.yW(r).length>0?B.bC:B.cY,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.br:B.bk
t=(q?B.br:B.bk).j(0.28)
s=x.p
return new A.cZ(e,!1,A.av(A.aG(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.N,v,u,B.aB,A.B(A.a([A.E(A.dT(B.nx,new C.dFv(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.jA,r,new A.b7(A.m(10),B.Y),new A.ay(t,1,B.q,-1),r,r,r,r)),1),B.ab,A.E(A.bG(D.fsg,new C.dFw(d),A.bm(B.cY,r,r,r,B.c,r,B.jA,r,new A.b7(A.m(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.B7,E.Yo,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ag),r,r,r),r)},
$S:31}
C.dFv.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dFw.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dFr.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dFs(r),p=r.a.d.a,o=p?B.dY:B.c,n=A.m(14),m=A.I((p?B.br:B.bk).j(0.14),B.q,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.az,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.AC(l.c),s,s,s,s,s,s,D.f77,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iy((r.a.d.a?B.br:B.bk).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a_e,"View receipt",new C.dFk(r,d,l))
u=l.x!=null
t=u?B.rc:B.pT
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.brj,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dFl(r,d,l)),q.$3$icon$label$onTap(B.Bo,"Edit",new C.dFm(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mq,"View / download ID",new C.dFn(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bBT,"View / download selfie",new C.dFo(r,d,l)))
if(l.gaEF())p.push(q.$3$icon$label$onTap(A6.a0j,"View / download signature",new C.dFp(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bC,B.e6,"Delete",new C.dFq(r,d,l)))
p.push(B.at)
return A.bl(!0,new A.D(B.vm,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:24}
C.dFs.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.az
else w=d
return A.aL(!1,v,!0,new A.D(B.eQ,A.B(A.a([A.X(e,w,v,v,v,20),B.bd,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1914}
C.dFk.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fHZ(w,this.c)},
$S:0}
C.dFl.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.RF(this.c)},
$S:0}
C.dFm.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.CU(this.c)},
$S:0}
C.dFn.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCL(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dFo.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCL(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dFp.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fI3(w,this.c)},
$S:0}
C.dFq.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.NE(0,this.c)},
$S:0}
C.dFz.prototype={
$1(d){return d.x==null},
$S:251}
C.dFA.prototype={
$1(d){return d.x!=null},
$S:251}
C.dFB.prototype={
$2(d,e){return d+e.c},
$S:1915}
C.dFC.prototype={
$0(){return this.a.byl()},
$S:0}
C.dFt.prototype={
$0(){return this.a.aee(this.b)},
$S:0}
C.frA.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.frB.prototype={
$0(){return B.d.gL(D.a1v)},
$S:z+68}
C.d5i.prototype={
$0(){var w=this.a
return w.m(new C.d5g(w,this.b))},
$S:0}
C.d5g.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d5h.prototype={
$0(){},
$S:0}
C.d5j.prototype={
$0(){var w=this.a.gbXa()
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.ftE.prototype={
$1(d){return C.h3S(A.a2(d,x.N,x.z))},
$S:z+11}
C.ftF.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.ftG.prototype={
$2(d,e){var w=A.c7(d.a,null),v=A.c7(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+26}
C.fGD.prototype={
$1(d){return d.ag()},
$S:z+21}
C.fON.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fqS.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bN4.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f0(e,v)?v:null},
$S:1916}
C.fHb.prototype={
$1(d){var w=this
return new C.YW(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d5Y.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d5X(w,d))},
$S:z+66}
C.d5X.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5M.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cy(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d5J.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d5k.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d5l.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d5N.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d5t.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.dY:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.az,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bk,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ek(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.d5r(d),w,w),A.bG(B.wn,new C.d5s(d),A.bm(B.mT,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:20}
C.d5r.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d5s.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d5u.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d5K.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d5L.prototype={
$0(){return B.d.gL(D.yG)},
$S:z+12}
C.d5p.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyd(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Sn(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d5q.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5v.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Yu(v,u,J.ad(w.d),null)},
$S:z+64}
C.d5w.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5W.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aE(s,new C.Yc(r.y,r.gyd(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d5U(r),s,s,s,s,s,s,!1,B.a8)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b9n(v,e,w,u,t,r.gbOl(),C.hj4(r.y.Q),r.gyd(0),s)
w=t}return A.c6(q,new C.d5V(r,e),new A.D(B.Yp,w,s))},
$S:1917}
C.d5V.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd_(t).ay){t=this.b
u=x.cy.a(B.d.gd_(u.f.f)).guF(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dp()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fB(v*3.141592653589793*0.5)
return A.fs(B.a3,A.dc(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.d5U.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFL(B.pH,B.iz)},
$S:0}
C.d5G.prototype={
$0(){var w=this.a
return w.m(new C.d5F(w))},
$S:0}
C.d5F.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d5H.prototype={
$0(){var w=this.a.c
w.toString
A.a5(w,!1).O(null)
return null},
$S:0}
C.d5m.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jQ.j(0.5),r=x.p,q=A.a([D.fjJ,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cn(p.d)?"Write this book":"Write a new book"
q.push(p.Yp(d,B.dW,w,J.cn(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Yp(d,L.akq,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cy(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cz,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kh.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cz,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kh.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Yp(d,A_.alz,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Yp(d,B.pZ,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Yp(d,B.pZ,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eJ(u,E.AA,A.bl(!0,new A.D(A5.vq,A.v(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.ahR,B.d0,u,new A.b7(t,new A.ay(s,1.4,B.q,-1)),u)},
$S:47}
C.d5I.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.d5z.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cy(w.d)
return new C.YY(v,J.cy(w.d),w.r+1,null)},
$S:z+54}
C.d5A.prototype={
$1(d){var w=null
return A.oi(!1,A.ek(w,w,w,E.AA,new A.ki(this.a,new C.d5y(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:339}
C.d5y.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a6K,B.og,A.E(A.d(e,w,w,w,w,w,w,B.iH,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:750}
C.d5B.prototype={
$0(){return this.a.a=!1},
$S:49}
C.d5C.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:198}
C.d5D.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5E.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.AL(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Rb(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d5x(s,t))
w=4
return A.b(s.kT(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d5x.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5P.prototype={
$1(d){var w=null
return A.oi(!1,A.ek(w,w,w,E.AA,new A.ki(this.a,new C.d5O(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:339}
C.d5O.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a6K,B.og,A.E(A.d(e,w,w,w,w,w,w,B.iH,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:750}
C.d5Q.prototype={
$0(){return this.a.a=!1},
$S:49}
C.d5R.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:198}
C.d5S.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:198}
C.d5T.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.AL(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kT(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d5n.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bgb(B.pH,U.LL)},
$S:0}
C.d5o.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFL(B.pH,U.LL)},
$S:0}
C.d7I.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d7J.prototype={
$1(d){var w=this.a
return w.m(new C.d7H(w))},
$S:9}
C.d7H.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d7K.prototype={
$1(d){var w=this.a
return w.m(new C.d7G(w))},
$S:9}
C.d7G.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d7L.prototype={
$1(d){var w=this.a
return w.m(new C.d7F(w))},
$S:9}
C.d7F.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d7M.prototype={
$0(){var w=this.a
return w.m(new C.d7E(w,this.b))},
$S:0}
C.d7E.prototype={
$0(){var w=this.b
this.a.d.saV(0,w)
return w},
$S:0}
C.d7N.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga15()
A.a5(this.b,!1).O(new A.bo_(w,v))},
$S:0}
C.d6c.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d6b.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.YU(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d6g.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d6f.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b6o(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hD,v,v,v)
return A.ek(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.d6d(d),v,v),A.bG(B.wn,new C.d6e(d),A.bm(B.mT,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.AA,w,v,v,v,v,D.fiD,v)},
$S:20}
C.d6d.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d6e.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d6h.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d6i.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.cd(A.bV(B.bz,r,B.bq,18,14),B.r,t,B.y,t,D.bse,t,t,B.ah)},
$S:316}
C.d6a.prototype={
$0(){return this.a.PG(0,this.b)},
$S:0}
C.d69.prototype={
$0(){return this.a.Pa(0,this.b)},
$S:0}
C.cEN.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cEO.prototype={
$0(){return B.d.gL(D.yG)},
$S:z+12}
C.cEP.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bZ(0,new A.D(d,A.c0(w,new A.o(w,w,A.I(this.a.j(f),B.q,g),v,w,w,B.n),B.be),w),0,0,0)},
$S:1919}
C.cYe.prototype={
$1(d){return this.a.m(new C.cYd(this.b,this.c))},
$S:9}
C.cYd.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cYD.prototype={
$1(d){return this.a.m(new C.cYq())},
$S:2}
C.cYq.prototype={
$0(){},
$S:0}
C.cYE.prototype={
$1(d){return this.a.m(new C.cYp())},
$S:2}
C.cYp.prototype={
$0(){},
$S:0}
C.cYF.prototype={
$0(){var w=this.a
return w.m(new C.cYo(w,this.b))},
$S:0}
C.cYo.prototype={
$0(){var w=this.a
return w.d=w.go3().Fs(this.b.a)},
$S:0}
C.cYG.prototype={
$0(){var w=this.a
return w.m(new C.cYn(w,this.b))},
$S:0}
C.cYn.prototype={
$0(){var w=this.a
return w.d=w.go3().cFI(this.b)},
$S:0}
C.cYH.prototype={
$1(d){return this.a.m(new C.cYm())},
$S:2}
C.cYm.prototype={
$0(){},
$S:0}
C.cYI.prototype={
$0(){var w=this.a
return w.m(new C.cYl(w,this.b))},
$S:0}
C.cYl.prototype={
$0(){var w=this.a
return w.d=w.go3().cFN(this.b.a)},
$S:0}
C.cYJ.prototype={
$1(d){var w=this.a
return w.m(new C.cYy(w,d))},
$S:6}
C.cYy.prototype={
$0(){var w=this.a
return w.d=w.go3().cGH(this.b)},
$S:0}
C.cYK.prototype={
$1(d){var w=this.a
return w.d=w.go3().aCU(d)},
$S:2}
C.cYL.prototype={
$1(d){var w=this.a
return w.d=w.go3().cFQ(d)},
$S:2}
C.cYN.prototype={
$1(d){var w=this.a
return w.d=w.go3().cGF(d)},
$S:2}
C.cYO.prototype={
$1(d){var w=this.a
return w.m(new C.cYx(w,d))},
$S:9}
C.cYx.prototype={
$0(){var w=this.a
return w.d=w.go3().cGw(this.b)},
$S:0}
C.cYP.prototype={
$0(){var w=this.a,v=w.go3(),u=B.a.i(w.gyd(0).a.a),t=B.a.i(w.gaA8().a.a)
u=v.baY(B.a.i(w.gapZ().a.a),t,u)
A.a5(this.b,!1).O(u)
return null},
$S:0}
C.dTt.prototype={
$0(){var w=this.a
w.vO()
w.a.br()
w.a.pQ()},
$S:0}
C.dTs.prototype={
$0(){var w=this.a
w.vO()
w.a.br()
w.a.pQ()},
$S:0}
C.dTv.prototype={
$0(){var w=this,v=w.b
if(J.cy(v)||J.cn(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dTw.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dTx.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dTr.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dTu.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dTz.prototype={
$0(){this.a.O9()
return null},
$S:0}
C.dTy.prototype={
$0(){return this.a.Ei(this.b)},
$S:0}
C.dSU.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.de,w,w,!0,w,w,new C.dSS(d),w,w),r=A.bm(B.bT,w,w,w,w,w,w,w,w,w,w,w)
return A.ek(A.a([s,A.bG(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dST(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:20}
C.dSS.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dST.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dSV.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cGb(this.b)},
$S:0}
C.dSP.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aRQ(w.b,w.c,w.d)},
$S:8}
C.dSn.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dSo.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSC.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Gi(t.a.c),$async$$0)
case 2:s=r.rb(q.dH(e,new C.dSA(t)))
if(s!=null&&t.c!=null)t.m(new C.dSB(t,s))
t.a.br()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSA.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dSB.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSD.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dSE.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSO.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cGZ(C.hje(w),w)},
$S:0}
C.dSM.prototype={
$1(d){return new A.e0(new C.dSL(this.a,this.b),null)},
$S:21}
C.dSL.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dY:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.az,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.br:B.bk,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.amc,v,v,v,p>0?new C.dSH(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aQ,A.B(A.a([o,A.E(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aP:B.az,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.amM,v,v,v,new C.dSI(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.ek(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dSJ(d),v,v),A.bG(B.pf,new C.dSK(d),A.bm(B.bT,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:170}
C.dSH.prototype={
$0(){return this.b.$1(new C.dSG(this.a))},
$S:0}
C.dSG.prototype={
$0(){return--this.a.a},
$S:0}
C.dSI.prototype={
$0(){return this.b.$1(new C.dSF(this.a))},
$S:0}
C.dSF.prototype={
$0(){return++this.a.a},
$S:0}
C.dSJ.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dSK.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dSN.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cGM(this.a.a)
w.r.a9(0)},
$S:0}
C.dSb.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ahl(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hcV(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dSc.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aCR(w)},
$S:0}
C.dSX.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.acI(this.b,w,this.c,null)},
$S:z+24}
C.dSR.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dY:B.c,t=A.m(20),s=A.X(B.lm,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.az,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.br:B.bk,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bk,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.Q,0,B.p)
return A.ek(A.a([A.bG(D.ftn,new C.dSQ(d),A.bm(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.bb,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:20}
C.dSQ.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dSd.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dSe.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dSf.prototype={
$1(d){return d.a},
$S:z+7}
C.dSg.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.L)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hX(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aCR(w)},
$S:0}
C.dSk.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ahl(q)
w=A.U(q).k("a1<1>")
q=A.C(new A.a1(q,new C.dSi(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hcV(v.e,null,r,v.f,v.r,new C.dSj(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dSj.prototype={
$0(){return this.a.a9l(this.b)},
$S:0}
C.dSi.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dSl.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("K<1,hX>")
w=A.C(new A.K(w,new C.dSh(this.b),v),v.k("ak.E"))
u.d=t.aCR(w)},
$S:0}
C.dSh.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dSW.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dSx.prototype={
$1(d){return d.length!==0},
$S:3}
C.dSy.prototype={
$1(d){var w=this
return new A.e0(new C.dSw(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dSw.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dY:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.az,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.br:B.bk,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.br:B.bk,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.K(o,new C.dSs(u,e,o),A.U(o).k("K<1,r>")))
p.push(B.N)
u=w.d
p.push(A.aM(v,B.T,!1,v,!0,B.r,v,A.aN(),u,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.m(12),B.dg),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ai,v,v,v,v,v,B.m3,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.an,v,v,v,v))
p=A.v(p,B.aj,v,B.e,B.Q,0,B.p)
t=w.a
return A.ek(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dSt(d),v,v),A.bG(B.Ja,new C.dSu(t,u,o,e),A.bm(B.bT,v,v,v,v,v,v,v,v,v,v,v)),A.bG(D.fgM,new C.dSv(t,u,o,d),A.bm(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:170}
C.dSs.prototype={
$1(d){var w=null
return A.dL(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.az,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bPh,w,w,w,new C.dSr(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1920}
C.dSr.prototype={
$0(){return this.a.$1(new C.dSp(this.b,this.c))},
$S:0}
C.dSp.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dSt.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dSu.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dSq(w.c,u))
v.bO(0,B.c5)}},
$S:0}
C.dSq.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dSv.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a5(w.d,!1).O(!0)},
$S:0}
C.dSz.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cHq(this.b,D.tI,C.Gg(v,w.a.c))},
$S:0}
C.dT3.prototype={
$1(d){return d.as},
$S:z+1}
C.dT4.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iO(this.b,w)},
$S:0}
C.dT5.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.i7f(v)
return w.Vn(v==null?null:v.a)},
$S:0}
C.dT6.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hKz(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gco(k)){k=A.aQ(1/0,e.a,e.b)
s=A.aQ(1/0,e.c,e.d)
l.cpn(new A.ar(u,t),v.gbh2(),new A.ar(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cNO:D.cMd
q=A.I(s?B.dr:D.bav,B.q,1)
p=A.m(22)
o=A.bZ(0,A.b3(m,m,m,new C.bcL(s,m),B.au),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bw(p,new A.an(B.W,m,B.aa,B.r,A.a([o,A.bZ(0,A.ul(new A.Q(n,n,n,n),new A.a7(u,t,new C.bdE(l.d,v,l.f,w,new C.dT_(l),l.gc9o(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bv3(s,new C.dT0(l,e),new C.dT1(l,e),new C.dT2(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.b_,B.b5,B.x,r,m,m),B.n),m,m,m,A0.agX,m,m,m,m)},
$S:211}
C.dT_.prototype={
$1(d){var w=this.a
w.m(new C.dSY(w,d))},
$S:2}
C.dSY.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.K(0,v)},
$S:0}
C.dT0.prototype={
$0(){var w=this.b
return this.a.b8D(1.25,new A.ar(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dT1.prototype={
$0(){var w=this.b
return this.a.b8D(0.8,new A.ar(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dT2.prototype={
$0(){var w=this,v=w.b
return w.a.aRQ(new A.ar(A.aQ(1/0,v.a,v.b),A.aQ(1/0,v.c,v.d)),new A.ar(w.c,w.d),w.e.gbh2())},
$S:0}
C.dT7.prototype={
$0(){var w=this.a
return w.m(new C.dSZ(w))},
$S:0}
C.dSZ.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dSm.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fJ(new A.fC(s.c)),$async$$0)
case 2:t.xH("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d6m.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bhm(u,C.hnj(v.c,u),new C.d6l(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d6l.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d6n.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bkI(d.d,d.c,u.f.t(0,d.a),new C.d6k(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d6k.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.frE.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.rb(new A.cQ(new A.a1(v,new C.frF(d),w.k("a1<1>")),new C.frG(),w.k("cQ<1,n>")))},
$S:z+20}
C.frF.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.frG.prototype={
$1(d){return d.a},
$S:z+7}
C.frC.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.frD.prototype={
$1(d){return d.b},
$S:z+7}
C.frJ.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.rb(new A.cQ(new A.a1(v,new C.frK(d),w.k("a1<1>")),new C.frL(),w.k("cQ<1,n>")))},
$S:z+20}
C.frK.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.frL.prototype={
$1(d){return d.a},
$S:z+7}
C.frH.prototype={
$1(d){var w,v=A.et([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ai(0,w)&&v.K(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.frI.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d6p.prototype={
$0(){return this.a},
$S:z+32}
C.d6G.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ai(0,d)},
$S:257}
C.d6y.prototype={
$2(d,e){var w=this.a.cg(0,d,new C.d6z()),v=J.a6(w)
if(!v.t(w,e))v.K(w,e)},
$S:116}
C.d6z.prototype={
$0(){return A.a([],x.s)},
$S:751}
C.d6x.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f0(w,e)
return w===!0},
$S:280}
C.d6q.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d6w.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d6v.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.K(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.C7:v)
u=1
while(v.C())u+=s.$2(v.gS(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.T:v)
while(v.C()){t=v.gS(v)
if(e.t(0,t))continue
e.K(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.C7:t)
while(t.C())u+=s.$2(t.gS(t).a,e)}return u},
$S:1922}
C.d6r.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d6A.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.K(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aV(u==null?B.T:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gS(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.K(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aV(t==null?D.C7:t)
while(t.C()){r=t.gS(t)
if(r.a!==a9&&!B.d.b4(w,new C.d6B(r)))w.push(r)}}B.d.bo(w,new C.d6C(a8))
B.d.b0(w,new C.d6D())
q=C.hKy(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.exg],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bnK(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1923}
C.d6B.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d6C.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d6D.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.d6E.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a6(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a3(v).k("bc<2>")).cI(0,0,B.pm)+88-w.gL(n).a}else u=0
for(w=J.a6(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:696}
C.d6F.prototype={
$1(d){return 16+d*156},
$S:256}
C.d6o.prototype={
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
t.n(0,d,new C.Fx(r,new A.u(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.Fx(s,new A.u(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.Fx(s,new A.u(e,v)))}t=o.r.h(0,d)
t=J.aV(t==null?B.T:t)
s=o.w
while(t.C()){r=t.gS(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.JO(d,new A.u(e+t,w),s,s.length))}},
$S:198}
C.d6s.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aIe(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:116}
C.d6t.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d6u.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:752}
C.d6H.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:752}
C.d6I.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:462}
C.d6J.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:202}
C.d6K.prototype={
$1(d){return d>=0.5},
$S:119}
C.f9E.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hs(A.aL(!1,v,!0,new A.a7(38,38,A.X(d,this.a.c?B.c:B.cC,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1925}
C.eLz.prototype={
$1(d){var w=null,v=A.m(8),u=B.bT.j(0.12),t=A.m(8)
return new A.D(B.na,A.aL(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.f2S,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.Mi,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eLy(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eLy.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dmz.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dmy.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nu,B.L,w,w)
return A.ek(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.dmw(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mf,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dmx(d),w,w)],x.p),B.bb,B.AX,w,u,D.btu,w,D.bvq,new A.b7(v,B.Y),w,w)},
$S:20}
C.dmw.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dmx.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dmI.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dmJ.prototype={
$1(d){var w=this.a
return w.m(new C.dmH(w,d))},
$S:z+37}
C.dmH.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmK.prototype={
$1(d){var w=null
return A.qg(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dmN.prototype={
$1(d){var w=this.a
return w.m(new C.dmG(w,d))},
$S:32}
C.dmG.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dmM.prototype={
$1(d){var w=null
return A.qg(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dmO.prototype={
$1(d){var w=this.a
return w.m(new C.dmF(w,d))},
$S:32}
C.dmF.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dmP.prototype={
$0(){var w=this.a
return w.m(new C.dmE(w))},
$S:0}
C.dmE.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dmQ.prototype={
$0(){var w=this.a
return w.m(new C.dmD(w))},
$S:0}
C.dmD.prototype={
$0(){return++this.a.at},
$S:0}
C.dmR.prototype={
$0(){var w=this.a
return w.m(new C.dmC(w))},
$S:0}
C.dmC.prototype={
$0(){return--this.a.ax},
$S:0}
C.dmS.prototype={
$0(){var w=this.a
return w.m(new C.dmB(w))},
$S:0}
C.dmB.prototype={
$0(){return++this.a.ax},
$S:0}
C.dmT.prototype={
$1(d){var w=this.a
return w.m(new C.dmA(w,d))},
$S:9}
C.dmA.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dmL.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dmU.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bT.j(0.18)
else w=q.c.a?B.dY:B.c
v=A.m(12)
if(p)u=B.bT
else u=(q.c.a?B.e0:B.bO).j(0.85)
u=A.I(u,B.q,p?1.5:1)
if(p)t=B.bT
else t=q.c.a?B.br:B.bk
t=A.X(f,t,r,r,r,18)
if(p)s=B.bT
else s=q.c.a?B.br:B.bk
return A.E(A.aG(!1,B.a1,!0,r,A.aL(!1,o,!0,A.dk(r,A.v(A.a([t,B.at,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bc,new A.o(w,r,u,v,r,r,B.n),B.eF,r,r,r,B.jA,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dmV(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
$S:z+39}
C.dmV.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dn3.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.c7L.prototype={
$2(d,e){return new A.bv(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:96}
C.c7S.prototype={
$1(d){return d.ag()},
$S:z+5}
C.c7T.prototype={
$2(d,e){var w=J.b6(e,new C.c7R(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bv(d,w,x.d2)},
$S:z+41}
C.c7R.prototype={
$1(d){return d.ag()},
$S:z+21}
C.c7N.prototype={
$1(d){return C.akb(A.a2(d,x.N,x.z))},
$S:z+8}
C.c7O.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c7P.prototype={
$1(d){return C.h3S(A.a2(d,x.N,x.z))},
$S:z+11}
C.c7Q.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c7X.prototype={
$1(d){return new A.aFj(d.f.length,d.a,d.b)},
$S:z+43}
C.c7Y.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:644}
C.c7U.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c7V.prototype={
$1(d){return d.cGo(C.Gg(d,this.a))},
$S:z+44}
C.dTg.prototype={
$1(d){return C.tT(d,this.a.a.c)},
$S:z+2}
C.dTh.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dTl.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dTm.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dTd.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZk(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.ye("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.p2(r.c,r.e),$async$$0)
case 4:s.ye(p)
w=5
return A.b(s.Jh(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTe.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZk(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.ye("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.p2(r.c,r.e),$async$$0)
case 4:s.ye(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTf.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.UJ(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.ye("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.ye("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.ye("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Jh(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.aa(j)
o=r.a
if(o.c==null){w=1
break}o.ye(B.a.ed(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dTk.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZj(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.ye("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a5(r,!1).c5(A.e8(new C.dTj(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.p2(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTj.prototype={
$1(d){var w=this.b
return new C.ZS(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dTi.prototype={
$1(d){return D.fVn},
$S:z+46}
C.dTo.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dTp.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dTn(w,d)
return new A.D(B.da,new C.bdI(this.b,d.c,d.a,w,null),null)},
$S:1926}
C.dTn.prototype={
$0(){return this.a.X5(this.b.b)},
$S:0}
C.dT8.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dT9.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dTa.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dTb.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dTc.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dTq.prototype={
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
$S:184}
C.dEC.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dED.prototype={
$0(){return B.d.gL(D.a2X)},
$S:z+48}
C.dEE.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.X(this.b.d,B.c.j(0.95),w,w,D.cTZ,44),w,w,w),w,w,new C.biu(u,t,v,w),B.au)},
$S:70}
C.fHE.prototype={
$1(d){return A.oN(new C.fHD(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:133}
C.fHD.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dY:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rw,24)],x.V),o=r?B.e0:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bT.j(0.18)],x.O)
w=A.p(t,D.bJQ,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a8(B.a3,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.az,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.S,o,new A.D(E.ahV,A.B(A.a([w,B.bd,A.E(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.br:B.bk,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.E(A.ig(!0,t,e,B.y,D.eR1,new C.fHC(this.b,s),20,B.ahw,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kJ,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:114}
C.fHC.prototype={
$2(d,e){var w=null,v=D.a2X[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.e0:B.bO,B.q,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.el,8)],x.V),p=A.m(15),o=A.E(new C.a5M(v.a,!0,w),1),n=s?B.jw:B.iQ,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aP:B.az,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a1,!0,w,A.aL(!1,u,!0,A.eE(A.bw(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.br:B.bk,w,w,w,w,w,w,w,w,10,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.li,w,w,w)],l),B.aj,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fHB(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)},
$S:76}
C.fHB.prototype={
$0(){A.a5(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cfr.prototype={
$0(){return this.a.afh(this.b)},
$S:0}
C.fH0.prototype={
$1(d){return D.fRE},
$S:z+74}
C.fOu.prototype={
$1(d){var w=this
return new C.a0D(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fH5.prototype={
$1(d){return new C.Yw(this.a,null)},
$S:z+51}
C.fH4.prototype={
$1(d){return D.fSD},
$S:z+52}
C.cZ0.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cZ1.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cZ_(w,d))},
$S:32}
C.cZ_.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cZ2.prototype={
$1(d){return this.a.JR()},
$S:2}
C.cZ3.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cYX.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cYY.prototype={
$1(d){return this.a.JR()},
$S:2}
C.cYZ.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cwA.prototype={
$0(){},
$S:0}
C.cwG.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cwH.prototype={
$0(){return this.a.aNj(-1)},
$S:0}
C.cwI.prototype={
$1(d){return this.a.m(new C.cwF())},
$S:2}
C.cwF.prototype={
$0(){},
$S:0}
C.cwJ.prototype={
$0(){return this.a.aNj(1)},
$S:0}
C.cwK.prototype={
$1(d){return this.a.m(new C.cwE())},
$S:2}
C.cwE.prototype={
$0(){},
$S:0}
C.cwL.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.e0:B.bO
return A.ub(u,u,B.aZ,r,u,new C.cwD(t,d),B.B8,s,w,u,new A.ay(v,1,B.q,-1),B.cc)},
$S:1927}
C.cwD.prototype={
$1(d){var w=this.a
return w.m(new C.cwB(w,this.b))},
$S:9}
C.cwB.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cwM.prototype={
$1(d){return this.a.m(new C.cwC())},
$S:2}
C.cwC.prototype={
$0(){},
$S:0}
C.cwN.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.f96.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a5(this.b,!1).O(w)},
$S:2}
C.f97.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.f98.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a5(this.b,!1).O(w)},
$S:0}
C.f94.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbxu()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b3(new A.D(D.bvp,new A.ev(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.buT(p,v,this.b.a,u,t,r),r,r,B.au)},
$S:70}
C.f95.prototype={
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
s=A.aq(B.aV,B.bT,w)
s.toString
s=A.a([B.aZ,s,B.aV],x.O)
return A.aG(!1,B.a1,!0,p,A.aL(!1,v,!0,A.eE(D.e7k,r,new A.o(r,r,A.I(B.c.j(0.4),B.q,1.5),u,r,new A.a8(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
$S:140}
C.fFH.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.eIJ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eIA.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eIB.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eIH.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e0(new C.eIG(w,this.b),null)},
$S:21}
C.eIG.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dY:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.az,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eJ(w,u,new A.D(B.ahP,A.v(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bk,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.h9I(new C.eID(r,e),r.a),B.aB,A.B(A.a([A.E(A.dT(B.de,new C.eIE(d),w),1),B.av,A.E(A.bG(B.TM,new C.eIF(r,d),A.bm(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.aj,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(t,B.Y),w)},
$S:98}
C.eID.prototype={
$1(d){return this.b.$1(new C.eIC(this.a,d))},
$S:32}
C.eIC.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eIE.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eIF.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.eII.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Sj(this.b)},
$S:0}
C.eIv.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.baw(w)},
$S:0}
C.eIz.prototype={
$1(d){return this.bjB(d)},
bjB(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.L_(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iO(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eIy.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("a1<1>")
w=A.C(new A.a1(w,new C.eIx(this.b),v),v.k("J.E"))
u.d=t.baw(w)},
$S:0}
C.eIx.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eIK.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iO(this.b,w)},
$S:0}
C.eIL.prototype={
$1(d){return this.a.bBz(d,this.b)},
$S:z+55}
C.eIw.prototype={
$0(){return this.a.a9k(this.b)},
$S:0}
C.fOk.prototype={
$1(d){return new C.ad2(this.a,this.b,this.c,null)},
$S:z+56}
C.eIN.prototype={
$0(){return this.a.ZL(this.b)},
$S:0}
C.eIO.prototype={
$0(){return this.a.PC(this.b)},
$S:0}
C.eIP.prototype={
$0(){return this.a.Ed(this.b)},
$S:0}
C.eIQ.prototype={
$0(){return this.a.ZM(this.b)},
$S:0}
C.eIM.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eIq.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eIr.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eIs.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eIu.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pW(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eIt(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eIt.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eJc.prototype={
$2(d,e){return d+e.gwS()},
$S:z+59}
C.eJ8.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eJ9.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eIU.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dY:B.c,s=A.m(24),r=A.p(v,D.bKf,B.f,v,v,new A.o(B.ay.j(u?0.18:0.08),v,A.I(B.ay.j(0.28),B.q,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.az,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.br:B.bk,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aP:B.az
u=u?B.e0:B.bO
w=x.p
return A.eJ(v,t,new A.D(B.xH,A.v(A.a([r,B.aQ,q,B.N,p,B.d7,A.B(A.a([A.E(A.dT(B.nx,new C.eIS(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.f8,v,new A.b7(A.m(14),B.Y),new A.ay(u,1,B.q,-1),v,v,v,v)),1),B.av,A.E(A.bG(D.fx4,new C.eIT(d),A.bm(B.ay,v,v,v,v,v,B.f8,v,new A.b7(A.m(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d0,v,new A.b7(s,B.Y),v)},
$S:47}
C.eIS.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.eIT.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eJ2.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dY:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fM,28)],x.V),g=k?D.d_x:B.a2j,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.eLd,B.at,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cv,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.ax,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.ahS,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bk,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b3M(B.b7,B.iX,new C.eJ_(v,d),l,"Camera import","Scan QR"),1),B.av,A.E(v.b3M(B.cy,M.yl,new C.eJ0(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bk,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.ay.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.ay.j(0.28),B.q,1)
o=A.p(m,D.bJE,B.f,m,m,new A.o(B.ay.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bU,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.az,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bk,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bl(!0,new A.D(B.vo,A.p(m,A.v(A.a([g,new A.D(B.ahQ,A.v(A.a([w,B.S,u,B.by,t,B.S,A.aG(!1,B.a1,!0,m,A.aL(!1,s,!0,A.p(m,A.B(A.a([o,B.bd,n,A.X(B.ey,k?B.br:B.bk,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bD,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eJ1(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:24}
C.eJ_.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.vo("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eJ0.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.vo("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eJ1.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.Nr(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eIY.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dY:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eU,24)],x.V),k=o?B.e0:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.br:B.bk
u=A.bw(w,new A.a7(48,48,C.aPw(!0,A.m(12),48,N.MT,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aP:B.az,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.AC(v.gwS())
s=x.p
r=this.a
return A.bl(!0,new A.D(B.vo,A.p(q,A.v(A.a([B.S,k,new A.D(D.ahN,A.B(A.a([u,B.bd,A.E(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.br:B.bk,q,q,q,q,q,q,q,q,12,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.AO,r.cjx(B.u0,B.aV,new C.eIW(d),p,"QR code or backup file","Transfer project"),r.b0K(!0,B.e6,B.ay,new C.eIX(d),p,"Remove from this device","Delete project"),B.S],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:24}
C.eIW.prototype={
$0(){A.a5(this.a,!1).O("transfer")
return null},
$S:0}
C.eIX.prototype={
$0(){A.a5(this.a,!1).O("delete")
return null},
$S:0}
C.eIZ.prototype={
$1(d){return this.bjC(d)},
bjC(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.L_(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vC(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eJf.prototype={
$0(){var w=this.a
w.a.br()
w.m(new C.eJe(w))},
$S:0}
C.eJe.prototype={
$0(){return this.a.r++},
$S:0}
C.eJg.prototype={
$0(){var w=this.a
return w.m(new C.eJd(w))},
$S:0}
C.eJd.prototype={
$0(){return this.a.r++},
$S:0}
C.eIR.prototype={
$0(){var w=this.a.c
w.toString
return A.iO(w,null)},
$S:0}
C.eIV.prototype={
$0(){return this.a.ccT(this.b)},
$S:0}
C.eJb.prototype={
$0(){var w=this.a
return w.m(new C.eJa(w,this.b))},
$S:0}
C.eJa.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eJ5.prototype={
$0(){return this.a.vo("scan")},
$S:0}
C.eJ6.prototype={
$0(){return this.a.vo("file")},
$S:0}
C.eJ7.prototype={
$1(d){return this.a.cjy(d,this.b)},
$S:z+60}
C.eJ4.prototype={
$0(){return this.a.Eh(this.b)},
$S:0}
C.eJ3.prototype={
$0(){return this.a.a_g(this.b,this.c)},
$S:0}
C.cw1.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cw0.prototype={
$1(d){return d.ag()},
$S:z+62}
C.cvZ.prototype={
$1(d){return C.ht8(A.a2(d,x.N,x.z))},
$S:z+63}
C.cw_.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fqK.prototype={
$1(d){return d.y===D.ks},
$S:z+2}
C.fOV.prototype={
$1(d){return C.bAH(d,this.a)},
$S:z+2}
C.fpa.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bN9.prototype={
$1(d){return!d.as},
$S:z+1}
C.bN8.prototype={
$1(d){return d.ag()},
$S:z+15}
C.bN5.prototype={
$1(d){return C.h3T(A.a2(d,x.N,x.z))},
$S:z+14}
C.bN6.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bN7.prototype={
$1(d){return J.k(d)},
$S:17}
C.fgI.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fcp.prototype={
$1(d){return C.fVi(A.a2(d,x.N,x.z))},
$S:z+67}
C.fcq.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.fcr.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fGS.prototype={
$1(d){return J.k(d)},
$S:17}
C.fGT.prototype={
$1(d){return d.a},
$S:z+69}
C.fGU.prototype={
$1(d){return d.length!==0},
$S:3}
C.fGV.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fGW.prototype={
$1(d){return d.Sj(null).ag()},
$S:z+70}
C.fOT.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.frb.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.ftK.prototype={
$1(d){return C.akb(A.a2(d,x.N,x.z))},
$S:z+8}
C.ftL.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.ftM.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.ftN.prototype={
$1(d){return d.ag()},
$S:z+5}
C.ftO.prototype={
$1(d){return C.tT(d,this.a)},
$S:z+2}
C.fGF.prototype={
$1(d){return C.tT(d,this.a)},
$S:z+2}
C.fOO.prototype={
$1(d){return C.akb(A.a2(d,x.N,x.z))},
$S:z+8}
C.fOP.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fOQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fqT.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fqU.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fP_.prototype={
$1(d){return!d.as},
$S:z+1}
C.fqp.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fqq.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fqr.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.fOv.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fuw.prototype={
$1(d){return d.Q},
$S:z+72}
C.fGy.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.ftH.prototype={
$1(d){return C.akb(A.a2(d,x.N,x.z))},
$S:z+8}
C.ftI.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.ftJ.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fGt.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fcX.prototype={
$1(d){return d.length!==0},
$S:3}
C.fcY.prototype={
$1(d){return C.h3T(A.a2(d,x.N,x.z))},
$S:z+14}
C.fcZ.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fd_.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fd0.prototype={
$1(d){return d.length!==0},
$S:3}
C.fdd.prototype={
$2(d,e){return d.eM(new C.fde(e))},
$S:1928}
C.fde.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c9},
$S:1929}
C.fda.prototype={
$1(d){return C.hPe(d,this.a)},
$S:z+73}
C.fdb.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fdc.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fhm.prototype={
$1(d){return d.a},
$S:z+49}
C.fhn.prototype={
$1(d){return d.length!==0},
$S:3}
C.fho.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fjF.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fou.prototype={
$1(d){return C.hfe(d,C.Gg(d,this.a))},
$S:z+5}
C.fov.prototype={
$1(d){return C.hff(d,C.Gg(d,this.a))},
$S:z+5};(function aliases(){var w=C.aKA.prototype
w.btG=w.q
w=C.aML.prototype
w.bw3=w.q
w=C.aMM.prototype
w.bw4=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aC4.prototype,"gcgu","cgv",25)
var s
w(s=C.az8.prototype,"gc9u","c9v",42)
v(s,"gaLz","N_",0)
v(s,"gcoJ","AE",0)
v(s,"gbJh","NF",0)
v(s,"gcCB","yf",0)
v(s,"gciv","a_Y",0)
v(s,"gbEG","Nn",0)
v(s,"gbJI","Wx",0)
w(s,"gbOl","bOm",71)
v(s,"gbz8","zH",0)
v(C.az9.prototype,"gcCx","F8",0)
v(s=C.aCF.prototype,"gaeU","vD",0)
v(s,"gcc8","a_7",0)
v(s,"gaPA","HG",0)
v(s=C.aCC.prototype,"gcyL","a22",0)
v(s,"gaeU","vD",0)
v(s,"gcmN","a0D",0)
v(s,"gcd5","a_l",0)
w(s,"gc9o","c9p",30)
v(s,"gbJz","HL",0)
v(s,"gczL","czM",3)
v(s,"gc_Y","Yb",0)
w(s,"gc7U","c7V",23)
v(s,"gcbT","cbU",3)
v(s=C.aB3.prototype,"gc5I","Pb",0)
v(s,"gc5K","c5L",3)
v(s,"gbGd","a8X",0)
v(s=C.aCE.prototype,"gbMQ","X1",0)
v(s,"gbXh","XF",0)
v(s,"gct7","a1t",0)
v(s,"gcpi","a14",0)
v(C.aCD.prototype,"gcp0","agE",0)
v(C.arQ.prototype,"gc7S","ZK",0)
v(C.axU.prototype,"ga1N","JR",3)
v(C.axT.prototype,"ga1N","JR",3)
v(C.awD.prototype,"ga1N","JR",3)
v(s=C.aE9.prototype,"gb08","Q6",0)
v(s,"gbxX","Vh",0)
v(s,"gccU","ccV",3)
w(C.aE8.prototype,"gc8J","c8K",57)
u(C.aEa.prototype,"gaPu",0,0,null,["$1","$0"],["HF","bHu"],58,0,0)
t(C,"hmv","hYS",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.anH,C.u8,C.na,C.Hm,C.aeg,C.JG,C.u9,C.JO,C.Fx,C.bdG,C.aIe,C.aoT,C.d6L,C.lz,C.aSq,C.aSp,C.aQr,C.tH,C.qU,C.li,C.hX,C.kC,C.aGd])
u(A.hV,[C.fym,C.fyl,C.fyn,C.fHx,C.fnn,C.fno,C.fnt,C.fw5,C.fw4,C.fw3,C.c1d,C.fI2,C.fHV,C.fI6,C.fr0,C.dFi,C.dFd,C.dFe,C.dER,C.dEN,C.dFx,C.dFy,C.dFr,C.dFs,C.dFz,C.dFA,C.frA,C.ftE,C.ftF,C.fGD,C.fON,C.fqS,C.fHb,C.d5Y,C.d5k,C.d5t,C.d5K,C.d5p,C.d5v,C.d5m,C.d5z,C.d5A,C.d5y,C.d5P,C.d5O,C.d7J,C.d7K,C.d7L,C.d6b,C.d6g,C.d6f,C.cEN,C.cEP,C.cYe,C.cYD,C.cYE,C.cYH,C.cYJ,C.cYK,C.cYL,C.cYN,C.cYO,C.dTu,C.dSU,C.dSP,C.dSn,C.dSA,C.dSD,C.dSM,C.dSb,C.dSX,C.dSR,C.dSd,C.dSe,C.dSf,C.dSk,C.dSi,C.dSh,C.dSx,C.dSy,C.dSs,C.dT3,C.dT_,C.d6m,C.d6n,C.frE,C.frF,C.frG,C.frC,C.frD,C.frJ,C.frK,C.frL,C.frH,C.frI,C.d6G,C.d6w,C.d6r,C.d6B,C.d6C,C.d6F,C.d6t,C.d6I,C.d6J,C.d6K,C.f9E,C.eLz,C.dmy,C.dmI,C.dmJ,C.dmK,C.dmN,C.dmM,C.dmO,C.dmT,C.dmU,C.c7S,C.c7R,C.c7N,C.c7O,C.c7P,C.c7Q,C.c7X,C.c7U,C.c7V,C.dTg,C.dTj,C.dTi,C.dTp,C.dTq,C.dEC,C.fHE,C.fH0,C.fOu,C.fH5,C.fH4,C.cZ1,C.cZ2,C.cYY,C.cwI,C.cwK,C.cwL,C.cwD,C.cwM,C.f96,C.fFH,C.eIH,C.eID,C.eIz,C.eIx,C.eIL,C.fOk,C.eIU,C.eJ2,C.eIY,C.eIZ,C.eJ7,C.cw0,C.cvZ,C.cw_,C.fqK,C.fOV,C.fpa,C.bN9,C.bN8,C.bN5,C.bN6,C.bN7,C.fcp,C.fcq,C.fGS,C.fGT,C.fGU,C.fGV,C.fGW,C.fOT,C.frb,C.ftK,C.ftL,C.ftN,C.ftO,C.fGF,C.fOO,C.fOP,C.fOQ,C.fqT,C.fqU,C.fP_,C.fqp,C.fqq,C.fOv,C.fuw,C.fGy,C.ftH,C.ftI,C.fGt,C.fcX,C.fcY,C.fcZ,C.fd_,C.fd0,C.fde,C.fda,C.fdb,C.fhm,C.fhn,C.fjF,C.fou,C.fov])
u(A.au,[C.aXS,C.ak9,C.aTF,C.Yc,C.b9n,C.bdE,C.bhm,C.bv3,C.bkI,C.acH,C.bhl,C.acG,C.bhk,C.aB4,C.aHg,C.acI,C.JC,C.bdF,C.abY,C.bdD,C.bdI,C.aXQ,C.arQ,C.ad2])
u(A.mL,[C.b9Z,C.bbb,C.bb2,C.aG8,C.bgp,C.bdH,C.bcL,C.biu,C.buT])
u(A.j8,[C.fI_,C.fI0,C.fI1,C.fHT,C.fHU,C.fI4,C.fI5,C.dFu,C.dFg,C.dFj,C.dEY,C.dEZ,C.dF_,C.dEX,C.dF4,C.dEW,C.dF5,C.dF6,C.dEV,C.dF7,C.dEU,C.dF8,C.dET,C.dF9,C.dEL,C.dEM,C.dES,C.dFa,C.dEQ,C.dFb,C.dEP,C.dF0,C.dEO,C.dF1,C.dEK,C.dF2,C.dF3,C.dFv,C.dFw,C.dFk,C.dFl,C.dFm,C.dFn,C.dFo,C.dFp,C.dFq,C.dFC,C.dFt,C.frB,C.d5i,C.d5g,C.d5h,C.d5j,C.d5X,C.d5M,C.d5J,C.d5l,C.d5N,C.d5r,C.d5s,C.d5u,C.d5L,C.d5q,C.d5w,C.d5U,C.d5G,C.d5F,C.d5H,C.d5I,C.d5B,C.d5D,C.d5E,C.d5x,C.d5Q,C.d5T,C.d5n,C.d5o,C.d7I,C.d7H,C.d7G,C.d7F,C.d7M,C.d7E,C.d7N,C.d6c,C.d6d,C.d6e,C.d6h,C.d6a,C.d69,C.cEO,C.cYd,C.cYq,C.cYp,C.cYF,C.cYo,C.cYG,C.cYn,C.cYm,C.cYI,C.cYl,C.cYy,C.cYx,C.cYP,C.dTt,C.dTs,C.dTv,C.dTw,C.dTx,C.dTr,C.dTz,C.dTy,C.dSS,C.dST,C.dSV,C.dSo,C.dSC,C.dSB,C.dSE,C.dSO,C.dSH,C.dSG,C.dSI,C.dSF,C.dSJ,C.dSK,C.dSN,C.dSc,C.dSQ,C.dSg,C.dSj,C.dSl,C.dSW,C.dSr,C.dSp,C.dSt,C.dSu,C.dSq,C.dSv,C.dSz,C.dT4,C.dT5,C.dSY,C.dT0,C.dT1,C.dT2,C.dT7,C.dSZ,C.dSm,C.d6l,C.d6k,C.d6p,C.d6z,C.d6q,C.eLy,C.dmz,C.dmw,C.dmx,C.dmH,C.dmG,C.dmF,C.dmP,C.dmE,C.dmQ,C.dmD,C.dmR,C.dmC,C.dmS,C.dmB,C.dmA,C.dmL,C.dmV,C.dn3,C.dTh,C.dTl,C.dTm,C.dTd,C.dTe,C.dTf,C.dTk,C.dTo,C.dTn,C.dT8,C.dT9,C.dTa,C.dTb,C.dTc,C.dED,C.fHB,C.cfr,C.cZ0,C.cZ_,C.cZ3,C.cYX,C.cYZ,C.cwA,C.cwG,C.cwH,C.cwF,C.cwJ,C.cwE,C.cwB,C.cwC,C.cwN,C.f97,C.f98,C.eIJ,C.eIA,C.eIB,C.eIC,C.eIE,C.eIF,C.eII,C.eIv,C.eIy,C.eIK,C.eIw,C.eIN,C.eIO,C.eIP,C.eIQ,C.eIM,C.eIq,C.eIr,C.eIs,C.eIu,C.eIt,C.eJ8,C.eJ9,C.eIS,C.eIT,C.eJ_,C.eJ0,C.eJ1,C.eIW,C.eIX,C.eJf,C.eJe,C.eJg,C.eJd,C.eIR,C.eIV,C.eJb,C.eJa,C.eJ5,C.eJ6,C.eJ4,C.eJ3])
u(A.ag,[C.anO,C.Sn,C.YU,C.YY,C.YW,C.Yu,C.aoW,C.aoQ,C.Zx,C.aoU,C.ZS,C.ZT,C.a5M,C.Yw,C.Yv,C.Y3,C.a0D,C.Fk,C.aww,C.arP,C.arJ,C.arO,C.NO])
u(A.ah,[C.aC4,C.bdB,C.az8,C.bdW,C.az9,C.bb9,C.aCF,C.aCC,C.aB3,C.aCE,C.aCD,C.biP,C.aKA,C.axU,C.axT,C.awD,C.buW,C.aML,C.aMM,C.aE9,C.bkb,C.aE8,C.bwH])
u(A.kk,[C.dFf,C.dFh,C.dFc,C.dFB,C.ftG,C.bN4,C.d5W,C.d5V,C.d5C,C.d5R,C.d5S,C.d6i,C.dSL,C.dSw,C.dT6,C.d6y,C.d6x,C.d6v,C.d6A,C.d6D,C.d6E,C.d6o,C.d6s,C.d6u,C.d6H,C.c7L,C.c7T,C.c7Y,C.dEE,C.fHD,C.fHC,C.f94,C.f95,C.eIG,C.eJc,C.cw1,C.fgI,C.fcr,C.ftM,C.fqr,C.ftJ,C.fdd,C.fdc,C.fho])
t(C.biv,C.aKA)
u(A.m8,[C.ab0,C.aIW,C.Hn,C.aka,C.cw2,C.cw3])
t(C.buU,C.aML)
t(C.buV,C.aMM)
t(C.aEa,C.bwH)
t(C.b7Q,A.b7E)
t(C.buX,A.a5r)
t(C.b7P,C.buX)
w(C.aKA,A.eR)
w(C.aML,A.c9)
w(C.aMM,A.c9)
v(C.bwH,A.ez)
v(C.buX,A.j2)})()
A.jY(b.typeUniverse,JSON.parse('{"aXS":{"au":[],"r":[]},"b9Z":{"aB":[]},"anO":{"ag":[],"r":[]},"aC4":{"ah":["anO"]},"Sn":{"ag":[],"r":[]},"ak9":{"au":[],"r":[]},"aTF":{"au":[],"r":[]},"bdB":{"ah":["Sn"]},"YU":{"ag":[],"r":[]},"YY":{"ag":[],"r":[]},"YW":{"ag":[],"r":[]},"Yu":{"ag":[],"r":[]},"az8":{"ah":["YU"]},"bdW":{"ah":["YY"]},"az9":{"ah":["YW"]},"Yc":{"au":[],"r":[]},"bbb":{"aB":[]},"bb2":{"aB":[]},"bb9":{"ah":["Yu"]},"aG8":{"aB":[]},"bgp":{"aB":[]},"b9n":{"au":[],"r":[]},"aoW":{"ag":[],"r":[]},"aoQ":{"ag":[],"r":[]},"Zx":{"ag":[],"r":[]},"acI":{"au":[],"r":[]},"aCF":{"ah":["aoW"]},"aCC":{"ah":["aoQ"]},"bdE":{"au":[],"r":[]},"bdH":{"aB":[]},"bhm":{"au":[],"r":[]},"bcL":{"aB":[]},"bv3":{"au":[],"r":[]},"bkI":{"au":[],"r":[]},"aB3":{"ah":["Zx"]},"acH":{"au":[],"r":[]},"bhl":{"au":[],"r":[]},"acG":{"au":[],"r":[]},"bhk":{"au":[],"r":[]},"aB4":{"au":[],"r":[]},"aHg":{"au":[],"r":[]},"JC":{"au":[],"r":[]},"aoU":{"ag":[],"r":[]},"ZS":{"ag":[],"r":[]},"ZT":{"ag":[],"r":[]},"aCE":{"ah":["aoU"]},"bdF":{"au":[],"r":[]},"abY":{"au":[],"r":[]},"bdD":{"au":[],"r":[]},"bdI":{"au":[],"r":[]},"aCD":{"ah":["ZS"]},"biP":{"ah":["ZT"]},"aXQ":{"au":[],"r":[]},"a5M":{"ag":[],"r":[]},"biv":{"ah":["a5M"]},"biu":{"aB":[]},"arQ":{"au":[],"r":[]},"Yw":{"ag":[],"r":[]},"Yv":{"ag":[],"r":[]},"Y3":{"ag":[],"r":[]},"a0D":{"ag":[],"r":[]},"axU":{"ah":["Yw"]},"axT":{"ah":["Yv"]},"awD":{"ah":["Y3"]},"buW":{"ah":["a0D"]},"Fk":{"ag":[],"r":[]},"aww":{"ag":[],"r":[]},"buU":{"ah":["Fk"]},"buV":{"ah":["aww"]},"buT":{"aB":[]},"arP":{"ag":[],"r":[]},"aE9":{"ah":["arP"]},"ad2":{"au":[],"r":[]},"arJ":{"ag":[],"r":[]},"arO":{"ag":[],"r":[]},"bkb":{"ah":["arJ"]},"aE8":{"ah":["arO"]},"NO":{"ag":[],"r":[]},"aEa":{"ah":["NO"],"ez":[]},"b7P":{"j2":[],"ff":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aQr"),Q:w("qU"),n:w("bk<n,n>"),c5:w("aSp"),dY:w("aSq"),d:w("eD<n?>"),e:w("Hm"),B:w("na"),P:w("hX"),k:w("kC"),x:w("az<~>"),f5:w("O<a2B>"),V:w("O<ac>"),t:w("O<qU>"),O:w("O<w>"),ac:w("O<eD<n?>>"),I:w("O<na>"),u:w("O<hX>"),_:w("O<kC>"),cl:w("O<az<ai<a4<n,@>>>>"),R:w("O<nc>"),cq:w("O<ai<+(M,M)>>"),ez:w("O<a4<n,aC>>"),gE:w("O<a4<n,n>>"),c7:w("O<a4<n,@>>"),fD:w("O<mq>"),bp:w("O<oc>"),g:w("O<u>"),v:w("O<hp>"),L:w("O<+(n,n)>"),G:w("O<+(M,M)>"),bF:w("O<+count,id,name(H,n,n)>"),A:w("O<cR>"),s:w("O<n>"),aS:w("O<iR>"),p:w("O<r>"),C:w("O<ff>"),D:w("O<li>"),fp:w("O<JG>"),M:w("O<JO>"),gZ:w("O<aGd>"),Y:w("O<aeg>"),E:w("O<aIe>"),F:w("O<M>"),dC:w("O<H>"),dS:w("O<aB?>"),d4:w("O<n?>"),J:w("cs<ah<ag>>"),b:w("ai<na>"),do:w("ai<hX>"),r:w("ai<kC>"),U:w("ai<a4<n,@>>"),gk:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),h:w("ai<n>"),c:w("ai<li>"),j:w("ai<@>"),fK:w("bv<n,n>"),d2:w("bv<n,ai<a4<n,@>>>"),a:w("a4<n,@>"),f:w("a4<@,@>"),gv:w("K<n,Ho>"),w:w("iA"),g2:w("rf"),bV:w("anH"),fL:w("cq"),K:w("aC"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(M,ai<hX>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),e7:w("bp<M>"),gc:w("dD"),b4:w("cx<H>"),W:w("ki<n>"),l:w("r"),cM:w("ff"),i:w("li"),cc:w("Fx"),bw:w("acG<n?>"),cy:w("JQ"),q:w("mZ"),y:w("R"),gR:w("M"),z:w("@"),S:w("H"),eK:w("ai<kC>?"),m:w("aoT?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),X:w("+qrPayload,token,usesRemaining(n,n,H)?"),gF:w("+members,trees,viewOnly(H,H,R)?"),Z:w("pT?"),T:w("n?"),aD:w("dD?"),o:w("li?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aXp=new A.bq(B.he,B.bF,B.he,B.bF)
D.aa0=new A.bq(B.he,B.jJ,B.he,B.jJ)
D.aXB=new A.bq(B.im,B.bF,B.bF,B.bF)
D.aXF=new A.ay(B.cY,1.4,B.q,-1)
D.aXP=new A.ay(B.ad,1,B.q,-1)
D.aZe=new A.aY(0,1/0,64,1/0)
D.aZi=new A.aY(0,84,0,1/0)
D.axv=w([B.lJ,B.qS,B.c],x.O)
D.bV_=new A.a8(B.ax,B.aC,B.x,D.axv,null,null)
D.b_2=new A.o(null,null,null,null,null,D.bV_,B.n)
D.d_1=w([B.aV,B.bT],x.O)
D.bX7=new A.a8(B.b_,B.b5,B.x,D.d_1,null,null)
D.b_m=new A.o(null,null,null,null,null,D.bX7,B.n)
D.b5y=new A.fj(null,null,null,null,null,E.jQ,null,null,null,null)
D.abj=new A.cr(B.A,null,null,D.b5y,null)
D.kh=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.f0R=new A.G(!0,D.kh,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjY=new A.x("No books on the shelf yet.",null,D.f0R,null,null,null,null,null,null,null,null,null)
D.e7l=new A.D(B.nY,D.fjY,null)
D.b40=new A.cr(B.A,null,null,D.e7l,null)
D.b4U=new A.cr(B.A,null,null,Y.VD,null)
D.b71=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b7u=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.acu=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.bac=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.bav=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.adP=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bej=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.beJ=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.Ez=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.bgk=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.biK=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.afs=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.fes=new A.x("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.boh=new A.eD(null,D.fes,B.eY,null,x.d)
D.fnb=new A.x("None",null,null,null,null,null,null,null,null,null,null,null)
D.boj=new A.eD(null,D.fnb,B.eY,null,x.d)
D.boR=new A.b9(38e5)
D.bpB=new A.ic(0,10,0,10)
D.bpL=new A.Q(0,1,0,0)
D.bpV=new A.ic(0,4,0,4)
D.bqc=new A.Q(10,10,14,10)
D.bqo=new A.ic(10,4,10,4)
D.bqw=new A.ic(10,8,10,8)
D.bqx=new A.Q(10,8,8,8)
D.bqX=new A.Q(12,6,12,2)
D.bre=new A.Q(14,10,6,6)
D.brf=new A.Q(14,12,14,0)
D.brj=new A.Q(14,12,14,8)
D.brm=new A.Q(14,12,8,14)
D.brq=new A.ic(14,14,14,14)
D.bs4=new A.Q(16,2,16,10)
D.bse=new A.Q(16,6,16,30)
D.bsg=new A.Q(16,6,16,8)
D.ahN=new A.Q(18,16,18,8)
D.bsR=new A.Q(18,20,18,22)
D.ahR=new A.Q(18,24,18,24)
D.bsX=new A.Q(18,30,18,30)
D.bte=new A.Q(20,10,12,20)
D.bts=new A.Q(20,18,16,18)
D.btu=new A.Q(20,18,20,6)
D.buj=new A.Q(24,32,24,28)
D.buk=new A.Q(24,36,24,32)
D.buo=new A.Q(26,26,24,14)
D.buC=new A.Q(2,4,2,8)
D.buG=new A.Q(30,0,30,0)
D.buR=new A.Q(38,22,22,22)
D.ai8=new A.Q(40,24,24,24)
D.buT=new A.ic(40,40,40,40)
D.buV=new A.Q(46,30,30,30)
D.aib=new A.Q(4,0,0,8)
D.bvl=new A.Q(56,40,40,40)
D.bvp=new A.Q(1.25,1.25,1.25,1.25)
D.bvq=new A.Q(60,0,60,0)
D.bvt=new A.Q(6,14,6,16)
D.bvF=new A.ic(7,3,7,3)
D.bwb=new A.Q(5,1.5,5,1.5)
D.bwm=new A.Q(6,2.5,6,2.5)
D.fz1=new A.x("Signature",null,B.nw,null,null,null,null,null,null,null,null,null)
D.bwI=new A.bD(1,B.bh,D.fz1,null)
D.fwc=new A.x("Tell the AI what to fix",null,B.dm,null,null,null,null,null,null,null,null,null)
D.bxt=new A.bD(1,B.bh,D.fwc,null)
D.f87=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy8=new A.x("Worksheets",null,D.f87,null,null,null,null,null,null,null,null,null)
D.f8f=new A.G(!0,E.ac2,null,null,null,null,13,B.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx2=new A.x("Track your project spending",null,D.f8f,null,null,null,null,null,null,null,null,null)
D.cS9=w([D.fy8,B.at,D.fx2],x.p)
D.blA=new A.fm(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cS9,null)
D.bxy=new A.bD(1,B.bh,D.blA,null)
D.f3q=new A.G(!0,E.jQ,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdF=new A.x("FAMILY LIBRARY",null,D.f3q,null,null,null,null,null,null,null,null,null)
D.bxP=new A.bD(1,B.bh,D.fdF,null)
D.Mw=new C.Hm("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.Zv=new C.Hn(0,"male")
D.aj4=new C.Hn(1,"female")
D.xQ=new C.Hn(2,"unknown")
D.tI=new C.aka(0,"owner")
D.Mx=new C.aka(1,"editor")
D.ks=new C.aka(2,"viewer")
D.ajR=new A.a_(61199,"MaterialIcons",!1)
D.bBT=new A.a_(61504,"MaterialIcons",!1)
D.bBU=new A.a_(61505,"MaterialIcons",!1)
D.bBW=new A.a_(61587,"MaterialIcons",!1)
D.bC2=new A.a_(61890,"MaterialIcons",!1)
D.bCX=new A.a_(63034,"MaterialIcons",!0)
D.bDM=new A.a_(63429,"MaterialIcons",!1)
D.am4=new A.a_(984520,"MaterialIcons",!1)
D.bCs=new A.a_(62776,"MaterialIcons",!1)
D.bG8=new A.ae(D.bCs,26,B.aZ,null,null,null)
D.bAR=new A.a_(57648,"MaterialIcons",!1)
D.bGq=new A.ae(D.bAR,14,B.c,null,null,null)
D.bGH=new A.ae(B.FH,17,null,null,null,null)
D.bHc=new A.ae(E.a_o,null,null,null,null,null)
D.bHf=new A.ae(B.jk,18,E.jQ,null,null,null)
D.a_a=new A.a_(62044,"MaterialIcons",!1)
D.bHl=new A.ae(D.a_a,null,B.aV,null,null,null)
D.bIa=new A.ae(B.dW,16,null,null,null,null)
D.bIh=new A.ae(D.a_a,32,B.aV,null,null,null)
D.bIA=new A.ae(E.ajS,18,B.cY,null,null,null)
D.bJE=new A.ae(B.FR,22,B.ay,null,null,null)
D.bJQ=new A.ae(B.dW,22,B.aZ,null,null,null)
D.bK0=new A.ae(Q.a_f,22,B.c,null,null,null)
D.bK5=new A.ae(B.tS,52,B.c,null,null,null)
D.bKf=new A.ae(B.FR,30,B.ay,null,null,null)
D.amI=new A.ae(B.u0,22,B.c,null,null,null)
D.bKH=new A.ae(B.dW,17,null,null,null,null)
D.bL_=new A.ae(B.vK,26,B.cY,null,null,null)
D.bLJ=new A.ae(B.a_A,16,null,null,null,null)
D.bMs=new A.ae(B.tS,24,B.c,null,null,null)
D.bMx=new A.ae(B.MZ,20,B.ro,null,null,null)
D.bMC=new A.ae(B.FF,null,B.bT,null,null,null)
D.bMJ=new A.ae(B.jk,18,B.c,null,null,null)
D.bNk=new A.ae(B.cD,22,B.ad,null,null,null)
D.bO9=new A.ae(B.e6,16,B.ad,null,null,null)
D.bOl=new A.ae(D.a_a,20,B.aV,null,null,null)
D.ana=new A.ae(B.hz,20,null,null,null,null)
D.bOQ=new A.ae(B.cD,18,D.kh,null,null,null)
D.bP8=new A.ae(B.ya,28,B.c,null,null,null)
D.bPh=new A.ae(B.MP,null,B.h_,null,null,null)
D.bPB=new A.ae(B.ya,24,B.c,null,null,null)
D.bQ2=new A.ae(B.tS,null,B.aV,null,null,null)
D.bQ3=new A.ae(B.jC,20,B.cY,null,null,null)
D.bQn=new A.ae(B.FH,16,null,null,null,null)
D.bRU=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jA,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ez,!0,null,null,null,null)
D.d6c=w([B.bu,B.aV,B.fb,B.aZ],x.O)
D.bTr=new A.a8(B.ax,B.aC,B.x,D.d6c,null,null)
D.bff=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bkD=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cP2=w([D.bff,D.bkD],x.O)
D.bTC=new A.a8(B.b_,B.b5,B.x,D.cP2,null,null)
D.d0N=w([B.eZ,B.fx,B.fb],x.O)
D.bTG=new A.a8(B.ax,B.aC,B.x,D.d0N,null,null)
D.aep=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b7v=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cQZ=w([D.aep,D.b7v],x.O)
D.bUe=new A.a8(B.b_,B.b5,B.x,D.cQZ,null,null)
D.baH=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.awT=w([D.baH,D.aep],x.O)
D.bUy=new A.a8(B.ax,B.aC,B.x,D.awT,null,null)
D.adm=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.bcO=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.d_Y=w([D.adm,D.bcO],x.O)
D.bVa=new A.a8(B.a3,B.a7,B.x,D.d_Y,null,null)
D.dcp=w([B.bC,B.mZ],x.O)
D.bVc=new A.a8(B.b_,B.b5,B.x,D.dcp,null,null)
D.bfa=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.ddg=w([D.bfa,D.kh,D.kh,P.WW],x.O)
D.dft=w([0,0.07,0.9,1],x.F)
D.bVI=new A.a8(B.a3,B.a7,B.x,D.ddg,D.dft,null)
D.bVT=new A.a8(B.ax,B.aC,B.x,B.Qw,null,null)
D.dc_=w([B.aZ,B.aV,B.bT],x.O)
D.bWT=new A.a8(B.ax,B.aC,B.x,D.dc_,null,null)
D.chn=w([B.bu,B.aZ,B.eZ],x.O)
D.chu=w([B.bt,B.aE,B.j7],x.O)
D.chw=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bdP=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cnD=w([D.bdP,E.ae6],x.O)
D.e39=new A.u(1,2)
D.eNo=new A.cR(B.aX,D.e39,3)
D.atY=w([D.eNo],x.A)
D.cuV=w([B.h2,B.ce,B.fa],x.O)
D.cxB=w([B.bJ,B.bv,B.bo],x.O)
D.byh=new C.u8("classic","Classic leather","Gold-edged brown leather",D.awT,E.jQ,E.jQ,"\u2766",B.L,!0,!1,!1,!1)
D.b6Q=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bjA=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cTK=w([D.b6Q,D.bjA],x.O)
D.aea=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.byc=new C.u8("ornate","Ornate gold","Double gold border and flourishes",D.cTK,D.aea,D.aea,"\u2726",B.L,!0,!0,!0,!1)
D.bal=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bfX=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cM1=w([D.bal,D.bfX],x.O)
D.byb=new C.u8("parchment","Parchment","Old paper with dark ink",D.cM1,D.Ez,G.iv,"\u2767",B.L,!0,!1,!1,!0)
D.abL=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bi1=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.dao=w([D.abL,D.bi1],x.O)
D.bdp=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bho=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bye=new C.u8("minimal","Clean paper","Plain and elegant, like a printed book",D.dao,D.bdp,D.bho,"",B.L,!0,!0,!1,!0)
D.byg=new C.u8("midnight","Midnight","Deep blue with silver stars",L.axa,B.cr,B.bK,"\u2727",B.L,!0,!0,!1,!1)
D.bya=new C.u8("emerald","Emerald library","Green cloth, title on the left",Z.aum,E.jQ,B.h3,"\u25c6",B.bg,!0,!1,!1,!1)
D.bir=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.d8J=w([B.ep,D.bir],x.O)
D.bes=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.bfy=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.byf=new C.u8("rose","Rose vintage","Burgundy with rose-gold lettering",D.d8J,D.bes,D.bfy,"\u2740",B.L,!0,!1,!0,!1)
D.dcU=w([B.cC,O.n_],x.O)
D.byd=new C.u8("modern","Modern","Dark, bold, left-aligned",D.dcU,B.aR,B.c,"",B.bg,!1,!0,!1,!1)
D.a1v=w([D.byh,D.byc,D.byb,D.bye,D.byg,D.bya,D.byf,D.byd],A.ax("O<u8>"))
D.cLy=w([B.bT,B.bj],x.O)
D.bf0=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cMd=w([D.abL,D.bf0],x.O)
D.bah=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cNO=w([D.bah,B.d9],x.O)
D.cPh=w([B.b8,B.iM,B.ov],x.O)
D.cPE=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b7r=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.bc9=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.dfp=w([D.adm,D.b7r,D.bc9],x.O)
D.byi=new C.u9("leather","Leather",D.dfp,"vintage")
D.cWH=w([B.di,B.KP,A4.W9],x.O)
D.byp=new C.u9("midnight","Midnight",D.cWH,"starry")
D.cPi=w([B.eH,B.dX,B.le],x.O)
D.byo=new C.u9("forest","Forest",D.cPi,"story")
D.dhh=w([B.eP,B.ep,B.kl],x.O)
D.byl=new C.u9("burgundy","Burgundy",D.dhh,"royal")
D.cxb=w([B.aE,B.pw,B.nF],x.O)
D.bym=new C.u9("royal","Royal",D.cxb,"royal")
D.cRC=w([B.bv,B.cC,O.n_],x.O)
D.byj=new C.u9("charcoal","Charcoal",D.cRC,"geo")
D.dfx=w([B.cg,B.dQ,B.x7],x.O)
D.byn=new C.u9("sunset","Sunset",D.dfx,"sunset")
D.dgb=w([B.iM,B.EA,B.Wc],x.O)
D.byk=new C.u9("ocean","Ocean",D.dgb,"band")
D.yG=w([D.byi,D.byp,D.byo,D.byl,D.bym,D.byj,D.byn,D.byk],A.ax("O<u9>"))
D.cS1=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cSA=w([B.ak,B.aK,B.M],x.O)
D.cTP=w([B.ep,B.dX,B.di,B.fy,B.xb,B.cY,B.jT,B.ee,B.d5],x.O)
D.cTQ=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eNp=new A.cR(B.dq,B.dE,8)
D.cTZ=w([D.eNp],x.A)
D.cV1=w([B.bZ,B.dQ,B.ki],x.O)
D.cVu=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cWD=w([B.bZ,B.hi],x.O)
D.cYG=w([B.aM,B.x8,B.x_],x.O)
D.cZy=w([B.bL,B.cf,B.dv,B.aM],x.O)
D.d_2=w([B.j9,B.cg,B.td],x.O)
D.d_x=w([B.eZ,B.cY],x.O)
D.d02=w([B.cs,B.fk,B.hl],x.O)
D.d0d=w([B.aR,B.bj,B.di],x.O)
D.d0K=w([B.eu,B.cZ,B.dX],x.O)
D.d12=w([B.dN,B.di,B.KP],x.O)
D.d2i=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a2p=w(["leather","linen","plain","stars","rays"],x.s)
D.bFP=new A.a_(985219,"MaterialIcons",!1)
D.bFn=new A.a_(983781,"MaterialIcons",!1)
D.awB=w([B.akg,B.i1,B.lQ,B.i2,D.bFP,B.G0,B.pS,D.bFn,L.alS,B.yc,B.pU,B.ms],A.ax("O<a_>"))
D.a2u=w(["double","single","corners","none"],x.s)
D.d4X=w([B.dA,B.bk,B.ee],x.O)
D.d59=w([],x.t)
D.C7=w([],x.u)
D.d7l=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.d9C=w([B.aF,B.fk,B.fy],x.O)
D.daZ=w([B.c7,B.mU,B.X5],x.O)
D.dbd=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.du8=new C.lz("construction","Construction","Jobsite & builds",B.y2)
D.duf=new C.lz("house","Home Build","Houses & rooms",B.vF)
D.du5=new C.lz("grocery","Grocery","Store & pantry",B.a06)
D.du4=new C.lz("calculator","Calculations","Math & estimates",B.N9)
D.dud=new C.lz("lumber","Materials","Lumber & supplies",B.Nq)
D.du1=new C.lz("kitchen","Kitchen","Remodel & meals",Aa.al4)
D.bFk=new A.a_(983756,"MaterialIcons",!1)
D.du6=new C.lz("landscape","Landscaping","Yard & garden",D.bFk)
D.du0=new C.lz("plumbing","Plumbing","Pipes & water",B.q1)
D.dug=new C.lz("electrical","Electrical","Wiring & power",B.h8)
D.dtZ=new C.lz("store","Retail Shop","Daily business",B.kW)
D.du_=new C.lz("paint_remodel","Paint & Remodel","Colors & walls",Ab.a_G)
D.bEJ=new A.a_(983311,"MaterialIcons",!1)
D.duc=new C.lz("roofing","Roofing","Roofs & exteriors",D.bEJ)
D.bFx=new A.a_(983986,"MaterialIcons",!1)
D.dtY=new C.lz("warehouse","Warehouse","Storage & stock",D.bFx)
D.dua=new C.lz("vehicles","Vehicles","Fleet & transport",B.G1)
D.bCu=new A.a_(62785,"MaterialIcons",!1)
D.du3=new C.lz("farm","Farm","Crops & livestock",D.bCu)
D.du2=new C.lz("restaurant","Restaurant","Food & catering",B.tZ)
D.du9=new C.lz("tools","Tools","Workshop gear",B.FY)
D.due=new C.lz("wallet","Cash & Wallet","Quick spending",B.jC)
D.bDH=new A.a_(63395,"MaterialIcons",!1)
D.dub=new C.lz("concrete","Concrete","Foundation work",D.bDH)
D.du7=new C.lz("blueprint","Blueprint","Plans & design",Ag.akm)
D.a2X=w([D.du8,D.duf,D.du5,D.du4,D.dud,D.du1,D.du6,D.du0,D.dug,D.dtZ,D.du_,D.duc,D.dtY,D.dua,D.du3,D.du2,D.du9,D.due,D.dub,D.du7],A.ax("O<lz>"))
D.dbH=w([B.br,B.bk],x.O)
D.dcq=w([B.i9,B.nK,B.dH],x.O)
D.a35=w(["top","middle","bottom"],x.s)
D.deN=w([B.co,B.bj,B.di],x.O)
D.dfj=w([B.b2,B.cZ,B.dX],x.O)
D.dhc=w([B.bJ,B.ak],x.O)
D.dhd=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.e0J={top:0,middle:1,bottom:2}
D.dkn=new A.bk(D.e0J,["Top","Middle","Bottom"],x.n)
D.e0n={double:0,single:1,corners:2,none:3}
D.dks=new A.bk(D.e0n,["Double line","One line","Corners","None"],x.n)
D.e1w={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dlT=new A.bk(D.e1w,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dm4=new A.bk(B.i5,[],A.ax("bk<H,+(n,n)>"))
D.e0B={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Ci=new A.bk(D.e0B,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bk<n,H>"))
D.doI=new F.MH(32,null)
D.doJ=new F.MH(40,null)
D.doK=new F.MH(46,null)
D.aFR=new C.arO(null)
D.e47=new A.u(8,14)
D.fkB=new A.x("Write a new book",null,B.i7,null,B.L,null,null,null,null,null,null,null)
D.e6O=new A.D(B.kS,D.fkB,null)
D.amj=new A.ae(B.hy,18,B.c,null,null,null)
D.fe0=new A.x("Add",null,B.m4,null,null,null,null,null,null,null,null,null)
D.cZN=w([D.amj,B.qh,D.fe0],x.p)
D.eLk=new A.cm(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cZN,null)
D.e78=new A.D(B.nX,D.eLk,null)
D.e79=new A.D(E.agD,Y.VD,null)
D.f82=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh3=new A.x("New Project",null,D.f82,null,null,null,null,null,null,null,null,null)
D.d2F=w([D.amj,B.ab,D.fh3],x.p)
D.eLn=new A.cm(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d2F,null)
D.e7k=new A.D(B.i_,D.eLn,null)
D.fjn=new A.x("Choose your header",null,T.ql,null,null,null,null,null,null,null,null,null)
D.e7F=new A.D(B.hL,D.fjn,null)
D.b5N=new A.fj(2.2,null,null,null,null,B.cY,null,null,null,null)
D.eQ3=new A.a7(22,22,D.b5N,null)
D.b3X=new A.cr(B.A,null,null,D.eQ3,null)
D.e7K=new A.D(B.Y3,D.b3X,null)
D.brz=new A.Q(14,2,14,6)
D.fwM=new A.x("The top of your book. Tap a design to see it.",null,S.IQ,null,null,null,null,null,null,null,null,null)
D.e7L=new A.D(D.brz,D.fwM,null)
D.e9i=new A.iP(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.e9l=new A.iP(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aH5=new A.iP(1,0.9607843137254902,0.48627450980392156,0)
D.I1=new A.iP(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.zd=new A.iP(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.e9r=new A.iP(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fUJ=new C.bgp(null)
D.bmH=new A.mh(D.fUJ,null,B.au,null,null)
D.aKJ=new A.cL(0,0,0,0,null,null,D.bmH,null)
D.exg=new A.z(-42,42)
D.eG2=new A.cC([0,0,1,1])
D.aM0=new A.a9(0,0,520,160)
D.fwk=new A.x("Let the AI write it from your tree",null,B.k8,null,B.L,null,null,null,null,null,null,null)
D.byW=new A.dq(1,B.cn,D.fwk,null)
D.cWC=w([E.a0A,B.ab,D.byW],x.p)
D.eL2=new A.cm(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cWC,null)
D.fdG=new A.x("Save member",null,B.ck,null,null,null,null,null,null,null,null,null)
D.d9U=w([D.ana,B.ab,D.fdG],x.p)
D.eLa=new A.cm(B.aO,B.bb,B.j,B.m,null,B.p,null,0,D.d9U,null)
D.bJV=new A.ae(B.hM,14,B.aZ,null,null,null)
D.f24=new A.G(!0,B.aZ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhu=new A.x("Cashier",null,D.f24,null,null,null,null,null,null,null,null,null)
D.d3a=w([D.bJV,B.bp,D.fhu],x.p)
D.eLc=new A.cm(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d3a,null)
D.fdH=new A.x("Transfer & settings",null,B.dm,null,null,null,null,null,null,null,null,null)
D.bxk=new A.bD(1,B.bh,D.fdH,null)
D.cOM=w([D.amI,B.av,D.bxk],x.p)
D.eLd=new A.cm(B.aO,B.e,B.j,B.m,null,B.p,null,0,D.cOM,null)
D.eON=new A.ar(16,40)
D.eOS=new A.ar(22,64)
D.eOZ=new A.ar(280,88)
D.ePK=new A.a7(30,null,null,null)
D.eR1=new A.hM(2,12,12,1.05,null)
D.fha=new A.x("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eRK=new A.b1(D.fha,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fhp=new A.x("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aO3=new A.b1(D.fhp,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fpu=new A.x("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eSd=new A.b1(D.fpu,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fzB=new A.x("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eSi=new A.b1(D.fzB,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fjl=new A.x("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eSp=new A.b1(D.fjl,null,null,null,null,null,null,null,null,null,null,null,null,B.fH,!1,null,null,null,B.r,null)
D.fwZ=new A.x("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aO7=new A.b1(D.fwZ,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.feh=new A.x("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eSP=new A.b1(D.feh,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fAg=new A.x("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eTy=new A.b1(D.fAg,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fvi=new A.x("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eTX=new A.b1(D.fvi,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fzF=new A.x("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eU_=new A.b1(D.fzF,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fr0=new A.x("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eU1=new A.b1(D.fr0,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.flb=new A.x("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eU2=new A.b1(D.flb,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.flc=new A.x("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eV2=new A.b1(D.flc,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fhc=new A.x("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eVk=new A.b1(D.fhc,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fj2=new A.x("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eVD=new A.b1(D.fj2,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fqw=new A.x("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eVT=new A.b1(D.fqw,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fm_=new A.x("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eVU=new A.b1(D.fm_,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.eZ3=new A.G(!0,D.kh,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZt=new A.G(!0,D.kh,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_6=new A.rz(!0,B.rx,null,null,null,null,B.ds,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_n=new A.G(!0,D.kh,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_V=new A.G(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7i=new A.rz(!0,B.RS,null,null,null,null,B.ds,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0U=new A.G(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1i=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2S=new A.G(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2W=new A.G(!0,G.iv,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4a=new A.G(!0,B.M,null,null,null,null,13,B.a5,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4T=new A.G(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5B=new A.G(!0,B.bT,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5F=new A.G(!0,B.bC,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f60=new A.G(!0,D.Ez,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f69=new A.G(!0,B.aZ,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f77=new A.G(!0,B.cY,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7B=new A.G(!0,B.bT,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f80=new A.G(!0,B.aZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9r=new A.G(!0,B.ak,null,null,null,null,11.5,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9z=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQi=new A.G(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7N=new A.G(!0,B.ak,null,null,null,null,12,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbe=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbB=new A.G(!0,G.iv,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbJ=new A.G(!0,G.iv,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcw=new A.x("Themes",null,B.p7,null,null,null,null,null,null,null,null,null)
D.fd7=new A.x("Add Item",null,B.ck,null,null,null,null,null,null,null,null,null)
D.f2B=new A.G(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdw=new A.x("Debt receipt",null,D.f2B,null,B.L,null,null,null,null,null,null,null)
D.aQd=new A.G(!0,B.ak,null,null,null,null,11,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdO=new A.x("Person who owes",null,D.aQd,null,null,null,null,null,null,null,null,null)
D.feK=new A.x("Notes",null,B.a7r,null,null,null,null,null,null,null,null,null)
D.ffa=new A.x("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.f1A=new A.G(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffe=new A.x("Share",null,D.f1A,null,null,null,null,null,null,null,null,null)
D.fgb=new A.x("Move your family trees",null,D.aQi,null,null,null,null,null,null,null,null,null)
D.fgM=new A.x("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fho=new A.x("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fiD=new A.x("Remove this book?",null,B.hs,null,null,null,null,null,null,null,null,null)
D.aQJ=new A.x("Download",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fjJ=new A.x("What should the AI do?",null,B.dm,null,null,null,null,null,null,null,null,null)
D.fl7=new A.x("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fme=new A.x("Ribbon bookmark",null,B.iH,null,null,null,null,null,null,null,null,null)
D.f9l=new A.G(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmJ=new A.x("NGMY.ORG",null,D.f9l,null,B.L,null,null,null,null,null,null,null)
D.fnZ=new A.x("Scan family tree QR",null,B.cx,null,null,null,null,null,null,null,null,null)
D.f5T=new A.G(!0,B.c,null,null,null,null,13,B.a5,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foJ=new A.x("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.f5T,null,B.L,null,null,null,null,null,null,null)
D.fpW=new A.x("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fq2=new A.x("Thumbnail",null,B.p7,null,null,null,null,null,null,null,null,null)
D.fqC=new A.x("Save the cover",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fr1=new A.x("Your photos",null,B.p7,null,null,null,null,null,null,null,null,null)
D.frg=new A.x("Create Project",null,B.ck,null,null,null,null,null,null,null,null,null)
D.frL=new A.x("Design your cover",null,T.ql,null,null,null,null,null,null,null,null,null)
D.frS=new A.x("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.frV=new A.x("PICTURE",null,H.mK,null,null,null,null,null,null,null,null,null)
D.fsg=new A.x("Paid",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fsi=new A.x("You can undo it right after.",null,S.De,null,null,null,null,null,null,null,null,null)
D.fsO=new A.x("Print",null,B.uE,null,null,null,null,null,null,null,null,null)
D.ft9=new A.x("Amount owed",null,D.aQd,null,null,null,null,null,null,null,null,null)
D.ftn=new A.x("Got it",null,B.ck,null,null,null,null,null,null,null,null,null)
D.ftX=new A.x("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fu_=new A.x("Add to budget",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fuq=new A.x("Debtor signature",null,B.a7r,null,null,null,null,null,null,null,null,null)
D.fuz=new A.x("Change icon",null,E.aPu,null,null,null,null,null,null,null,null,null)
D.fvL=new A.x("Family tree QR",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fwa=new A.x("Download",null,B.uE,null,null,null,null,null,null,null,null,null)
D.fwe=new A.x("Change",null,B.p7,null,null,null,null,null,null,null,null,null)
D.fx4=new A.x("Clear all",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fx8=new A.x("WHAT SHOULD IT CHANGE?",null,H.mK,null,null,null,null,null,null,null,null,null)
D.fxI=new A.x("COLOUR",null,H.mK,null,null,null,null,null,null,null,null,null)
D.fxU=new A.x("Do it",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fxX=new A.x("Create Tree",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fyW=new A.x("Create Family Tree",null,B.eW,null,null,null,null,null,null,null,null,null)
D.eY2=new A.G(!0,E.jQ,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzb=new A.x("Write the first page myself",null,D.eY2,null,null,null,null,null,null,null,null,null)
D.fzI=new A.x("Use this header",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fzO=new A.x("Create Project",null,E.aPX,null,null,null,null,null,null,null,null,null)
D.fRf=new C.ab0(1,"header")
D.a8G=new C.ab0(2,"projects")
D.fRg=new C.ab0(3,"cashier")
D.a8H=new C.ab0(4,"familyTree")
D.h1S=new C.cw2(0,"start")
D.h1T=new C.cw3(0,"start")
D.fRE=new C.Y3(null)
D.fSD=new C.Yv(null)
D.dm1=new A.bk(B.i5,[],A.ax("bk<n,Fx>"))
D.d5x=w([],x.E)
D.d5y=w([],x.M)
D.fT9=new C.bdG(D.dm1,D.d5x,D.d5y,0,0,null,null)
D.fVn=new C.ZT(null)
D.a9o=new C.aIW(0,"projects")
D.aV2=new C.aIW(1,"cashier")
D.h_C=new C.aIW(2,"familyTree")})()};
(a=>{a["Wo06A48Mf2e9ufEi9qjpoK+EyhQ="]=a.current})($__dart_deferred_initializers__);