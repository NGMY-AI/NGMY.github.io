((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,N,S,A2,G,F,E,O,A3,A4,A5,T,U,A6,A7,M,A8,H,A9,Aa,V,W,X,Ab,Ac,Y,Ad,Ae,Z,Af,Ag,Ah,K,Ai,A_,A0,P,Aj,L,Q,C={
bBp(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bBp=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.v6(null,""),$async$bBp)
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
j=A.cU(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.L)(h),++d){a0=h[d]
f.push(A.F(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.R.ao(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qG(t,a1,B.hl,E.ER),$async$bBp)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.PO(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.V(l!=null&&A.Kv(l)?y.l:y.i)
for(j=J.a5(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a1(r.a(j.h(a2,a7)),q,p):B.cz
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a1z(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBp,v)},
afZ(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$afZ=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.v6(null,""),$async$afZ)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.V(y.j)
t=A.n1(b6)
s=x.S
r=A.dd(c1,0,A.dJ(4,"count",s),A.U(c1).c)
q=F.a1m(new A.K(r,new C.fuN(),r.$ti.k("K<ak.E,n>")).aI(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fuM(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.R.ao(b7,null)+"\nAllowed values: style one of "+B.d.aI(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$afZ)
case 6:l=c5
k=F.PO(l==null?"":l)
if(k==null)throw A.V("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.an8(s,D.dj0,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
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
return A.b(m.$1(f+B.R.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$afZ)
case 10:l=c5
k=l==null?null:F.PO(l)
if(k==null)throw A.V(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d9(a8,d),a5=J.aV(a2.a),a2=a2.$ti,a7=new A.kV(a5,a2.k("kV<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gS(a5))
b0=J.a5(a9)
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
p=A.cD(new A.bc(h,s),new C.fuO(),s.k("J.E"),p)
p=F.a1m(A.p6(p,3,A.a3(p).k("J.E")).aI(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.B(new A.cu(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a1z(s,b9),$async$afZ)
case 13:b5=c5
for(s=J.a5(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.an8(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afZ,v)},
hiS(d,e,f){return A.ca(null,B.w.j(0.65),!1,null,new C.fDT(e,f),d,null,!0,!0,x.g2)},
an8:function an8(d,e,f){this.a=d
this.b=e
this.c=f},
fuN:function fuN(){},
fuM:function fuM(d){this.a=d},
fuO:function fuO(){},
fDT:function fDT(d,e){this.a=d
this.b=e},
bzd(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bzd=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b8(b1,new C.fk2())){u=null
w=1
break}t=B.d.da(b1,new C.fk3())
s=$.X()
r=new A.rV()
q=A.GG(r,D.aLb)
p=A.M()
p.r=B.c.gp(0)
q.aX(D.aLb,p)
o=A.M()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bO
o.e=B.fz
n=new C.fk8(t)
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
a3=new A.aP(s.r,B.ap,null,null,p)
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
a3.e=null}}q.aP(a3,o)}else{p=A.a([],x.v)
a3=new A.aP(s.r,B.ap,null,null,p)
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
a3.e=null}}q.aP(a3,o)}w=4
return A.b(r.qj().z1(520,160),$async$bzd)
case 4:w=3
return A.b(b3.hp(B.fW),$async$bzd)
case 3:b0=b3
u=b0==null?null:J.eQ(B.dC.gaM(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzd,v)},
fst(d){return C.hXa(d)},
hXa(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fst=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bex()
n=d.x!=null&&d.yI(null).length===0
if(d.x!=null)t=n?D.yZ:D.HR
else t=d.gT4()?D.HR:D.aGg
w=3
return A.b(C.bzd(d.ax),$async$fst)
case 3:s=f
p.a=null
if(s!=null)p.a=A.alS(s)
r=A.a3s(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aGg}else{p.c=C.wt(q,!0)
p.b=n?D.yZ:D.HR}r.a2g(A.fNV(new C.fsv(p,d,new C.fsw(),t,n,o),null,D.bte,B.vW))
u=r.jW(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fst,v)},
fz6(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fz6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fst(d),$async$fz6)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aK(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A7.Ga(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fz6,v)},
fk2:function fk2(){},
fk3:function fk3(){},
fk8:function fk8(d){this.a=d},
fsw:function fsw(){},
fsv:function fsv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fsu:function fsu(){},
fEk(d,e){var w=0,v=A.j(x.H)
var $async$fEk=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,B.w.j(0.55),!0,null,new C.fEo(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fEk)
case 2:return A.h(null,v)}})
return A.i($async$fEk,v)},
bBU(d,e,f,g){return C.i3A(d,e,f,g)},
i3A(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bBU=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gal(e.split(",")):e
r=B.cE.aJ(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.R(D.eR5)
w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.fEg(g,r,f),d,null,!0,!0,x.H),$async$bBU)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bBU,v)},
fEp(d,e){var w=0,v=A.j(x.H)
var $async$fEp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,null,!0,null,new C.fEs(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fEp)
case 2:return A.h(null,v)}})
return A.i($async$fEp,v)},
aXa:function aXa(d,e){this.c=d
this.a=e},
c0a:function c0a(){},
b9c:function b9c(d,e){this.b=d
this.a=e},
fEo:function fEo(d,e){this.a=d
this.b=e},
fEl:function fEl(d){this.a=d},
fEm:function fEm(d,e,f){this.a=d
this.b=e
this.c=f},
fEn:function fEn(d,e){this.a=d
this.b=e},
fEg:function fEg(d,e,f){this.a=d
this.b=e
this.c=f},
fEe:function fEe(d){this.a=d},
fEf:function fEf(d,e,f){this.a=d
this.b=e
this.c=f},
fEs:function fEs(d,e){this.a=d
this.b=e},
fEq:function fEq(d){this.a=d},
fEr:function fEr(d,e,f){this.a=d
this.b=e
this.c=f},
fnw(d,e){var w=0,v=A.j(x.y),u,t
var $async$fnw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a17(d),$async$fnw)
case 3:t=g
J.nn(t,new C.fnx(e))
u=A.agC(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fnw,v)},
fnx:function fnx(d){this.a=d},
anf:function anf(d,e,f){this.c=d
this.d=e
this.a=f},
aBt:function aBt(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dDK:function dDK(d,e){this.a=d
this.b=e},
dDv:function dDv(d,e){this.a=d
this.b=e},
dDy:function dDy(d,e,f){this.a=d
this.b=e
this.c=f},
dDx:function dDx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dDw:function dDw(d,e){this.a=d
this.b=e},
dDz:function dDz(d,e){this.a=d
this.b=e},
dDt:function dDt(){},
dDu:function dDu(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dDs:function dDs(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dDd:function dDd(d){this.a=d},
dDe:function dDe(d,e,f){this.a=d
this.b=e
this.c=f},
dDf:function dDf(d,e){this.a=d
this.b=e},
dDc:function dDc(d){this.a=d},
dDk:function dDk(d,e){this.a=d
this.b=e},
dDb:function dDb(d){this.a=d},
dDl:function dDl(d,e,f){this.a=d
this.b=e
this.c=f},
dDm:function dDm(d,e,f){this.a=d
this.b=e
this.c=f},
dDa:function dDa(d,e){this.a=d
this.b=e},
dDn:function dDn(d,e,f){this.a=d
this.b=e
this.c=f},
dD9:function dD9(d,e){this.a=d
this.b=e},
dDo:function dDo(d,e){this.a=d
this.b=e},
dD8:function dD8(d){this.a=d},
dDp:function dDp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dD6:function dD6(){},
dD0:function dD0(d){this.a=d},
dD1:function dD1(d){this.a=d},
dD7:function dD7(d,e){this.a=d
this.b=e},
dDq:function dDq(d,e){this.a=d
this.b=e},
dD5:function dD5(d){this.a=d},
dDr:function dDr(d){this.a=d},
dD4:function dD4(){},
dDg:function dDg(d,e){this.a=d
this.b=e},
dD3:function dD3(d){this.a=d},
dDh:function dDh(d,e,f){this.a=d
this.b=e
this.c=f},
dD2:function dD2(d,e){this.a=d
this.b=e},
dD_:function dD_(d,e){this.a=d
this.b=e},
dDi:function dDi(d){this.a=d},
dDj:function dDj(d,e,f){this.a=d
this.b=e
this.c=f},
dDN:function dDN(){},
dDO:function dDO(d,e){this.a=d
this.b=e},
dDL:function dDL(d){this.a=d},
dDM:function dDM(d){this.a=d},
dDH:function dDH(d,e){this.a=d
this.b=e},
dDI:function dDI(d){this.a=d},
dDA:function dDA(d,e,f){this.a=d
this.b=e
this.c=f},
dDB:function dDB(d,e,f){this.a=d
this.b=e
this.c=f},
dDC:function dDC(d,e,f){this.a=d
this.b=e
this.c=f},
dDD:function dDD(d,e,f){this.a=d
this.b=e
this.c=f},
dDE:function dDE(d,e,f){this.a=d
this.b=e
this.c=f},
dDF:function dDF(d,e,f){this.a=d
this.b=e
this.c=f},
dDG:function dDG(d,e,f){this.a=d
this.b=e
this.c=f},
dDP:function dDP(){},
dDQ:function dDQ(){},
dDR:function dDR(){},
dDS:function dDS(d){this.a=d},
dDJ:function dDJ(d,e){this.a=d
this.b=e},
hf6(d){return B.d.dL(D.a0X,new C.fo1(d),new C.fo2())},
u1:function u1(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fo1:function fo1(d){this.a=d},
fo2:function fo2(){},
ajC:function ajC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aSY:function aSY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
S2:function S2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcO:function bcO(){this.d=$
this.c=this.a=null},
d3z:function d3z(d,e){this.a=d
this.b=e},
d3x:function d3x(d,e){this.a=d
this.b=e},
d3y:function d3y(){},
d3A:function d3A(d,e){this.a=d
this.b=e},
h_Y(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.n8(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
Kg(d,e){return C.hVO(d,e)},
hVO(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Kg=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Kg)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aT(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.R.aG(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.d9(p,x.f)
o=A.cD(o,new C.fq4(),o.$ti.k("J.E"),x.B)
n=A.a3(o).k("a2<J.E>")
o=A.B(new A.a2(o,new C.fq5(),n),n.k("J.E"))
B.d.b_(o,new C.fq6())
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
return A.i($async$Kg,v)},
Au(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Au=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$Au)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fCZ(),x.a)
r=A.B(r,r.$ti.k("ak.E"))
w=4
return A.b(t.au("String","ngmy_family_book_v1_"+s+"_"+e,B.R.ao(r,null)),$async$Au)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Au,v)},
aP8(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aP8=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Kg(d,e),$async$aP8)
case 2:u=h
t=J.cE(u)
s=t.bc(u,new C.fL2(f))
if(s===-1)t.ck(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Au(d,e,u),$async$aP8)
case 3:return A.h(null,v)}})
return A.i($async$aP8,v)},
bzG(d,e,f){var w=0,v=A.j(x.H),u
var $async$bzG=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Kg(d,e),$async$bzG)
case 2:u=h
J.nn(u,new C.fno(f))
w=3
return A.b(C.Au(d,e,u),$async$bzG)
case 3:return A.h(null,v)}})
return A.i($async$bzG,v)},
bzV(d,e){return C.hVN(d,e)},
hVN(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bzV=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bzV)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aT(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.M7
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
if(D.C2.ai(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a2u,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.t(D.a1W,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.t(D.a1R,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.t(D.cPy,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.H6(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.M7
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.M7
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bzV,v)},
QS(d,e,f){return C.i36(d,e,f)},
i36(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$QS=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$QS)
case 7:r=h
w=8
return A.b(r.au("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.R.ao(f.af(),null)),$async$QS)
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
return A.i($async$QS,v)},
Qm(d,e){return C.hVP(d,e)},
hVP(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Qm=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Qm)
case 7:r=g
q=r.rV("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Kg(d,e),$async$Qm)
case 8:if(!j.cy(g)){n=B.a.i(d.toLowerCase())
m=J.lm(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Qm)
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
return A.i($async$Qm,v)},
afh(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$afh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qm(d,e),$async$afh)
case 3:s=g
r=J.a5(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.K(s,t)
w=5
return A.b(A.az(),$async$afh)
case 5:w=4
return A.b(g.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$afh)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afh,v)},
a1M(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a1M=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Qm(d,e),$async$a1M)
case 2:s=h
J.hC(s,f)
w=3
return A.b(A.az(),$async$a1M)
case 3:u=h
w=4
return A.b(u.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a1M)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1M)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1M)
case 6:return A.h(null,v)}})
return A.i($async$a1M,v)},
n8:function n8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fq4:function fq4(){},
fq5:function fq5(){},
fq6:function fq6(){},
fCZ:function fCZ(){},
fL2:function fL2(d){this.a=d},
fno:function fno(d){this.a=d},
H6:function H6(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bM2:function bM2(d){this.a=d},
i3p(d,e,f,g,h,i,j){return A.a6(d,!1).c8(A.e8(new C.fDx(j,i,f,e,h,g),!0,null,x.H))},
Qi(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Qi=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qm(h,g),$async$Qi)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.I(x.q).f.R(D.aNd)
u=!1
w=1
break}w=4
return A.b(C.hiS(d,f,e),$async$Qi)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.afh(h,g),$async$Qi)
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
return A.b(C.Au(h,r,p),$async$Qi)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.QS(h,r,new C.H6("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Qi)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Qi,v)},
fDx:function fDx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
YA:function YA(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ayw:function ayw(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d4e:function d4e(d){this.a=d},
d4d:function d4d(d,e){this.a=d
this.b=e},
d42:function d42(d,e){this.a=d
this.b=e},
d4_:function d4_(d,e){this.a=d
this.b=e},
d3B:function d3B(d){this.a=d},
d3C:function d3C(d,e){this.a=d
this.b=e},
d43:function d43(d){this.a=d},
d3K:function d3K(d){this.a=d},
d3I:function d3I(d){this.a=d},
d3J:function d3J(d){this.a=d},
d3L:function d3L(d){this.a=d},
d40:function d40(d){this.a=d},
d41:function d41(){},
d3G:function d3G(d){this.a=d},
d3H:function d3H(d,e){this.a=d
this.b=e},
d3M:function d3M(d){this.a=d},
d3N:function d3N(d,e){this.a=d
this.b=e},
d4c:function d4c(d){this.a=d},
d4b:function d4b(d,e){this.a=d
this.b=e},
d4a:function d4a(d){this.a=d},
d3X:function d3X(d){this.a=d},
d3W:function d3W(d){this.a=d},
d3Y:function d3Y(d){this.a=d},
d3D:function d3D(d,e){this.a=d
this.b=e},
d3Z:function d3Z(d,e){this.a=d
this.b=e},
d3Q:function d3Q(d){this.a=d},
d3R:function d3R(d){this.a=d},
d3P:function d3P(){},
d3S:function d3S(d){this.a=d},
d3T:function d3T(d){this.a=d},
d3U:function d3U(d,e){this.a=d
this.b=e},
d3V:function d3V(d,e,f){this.a=d
this.b=e
this.c=f},
d3O:function d3O(d,e){this.a=d
this.b=e},
d45:function d45(d){this.a=d},
d44:function d44(){},
d46:function d46(d){this.a=d},
d47:function d47(d){this.a=d},
d48:function d48(d){this.a=d},
d49:function d49(d,e){this.a=d
this.b=e},
d3E:function d3E(d){this.a=d},
d3F:function d3F(d){this.a=d},
YE:function YE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bd8:function bd8(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d5Z:function d5Z(d){this.a=d},
d6_:function d6_(d){this.a=d},
d5Y:function d5Y(d){this.a=d},
d60:function d60(d){this.a=d},
d5X:function d5X(d){this.a=d},
d61:function d61(d){this.a=d},
d5W:function d5W(d){this.a=d},
d62:function d62(d,e){this.a=d
this.b=e},
d5V:function d5V(d,e){this.a=d
this.b=e},
d63:function d63(d,e){this.a=d
this.b=e},
YC:function YC(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
adM:function adM(d,e,f){this.a=d
this.b=e
this.c=f},
ayx:function ayx(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d4t:function d4t(d,e){this.a=d
this.b=e},
d4s:function d4s(d,e){this.a=d
this.b=e},
d4x:function d4x(d){this.a=d},
d4w:function d4w(d,e){this.a=d
this.b=e},
d4u:function d4u(d){this.a=d},
d4v:function d4v(d){this.a=d},
d4y:function d4y(d){this.a=d},
d4z:function d4z(d){this.a=d},
d4r:function d4r(d,e){this.a=d
this.b=e},
d4q:function d4q(d,e){this.a=d
this.b=e},
Jp:function Jp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XT:function XT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cDw:function cDw(d){this.a=d},
cDx:function cDx(){},
cDy:function cDy(d){this.a=d},
bap:function bap(d,e,f){this.b=d
this.c=e
this.a=f},
bag:function bag(d,e){this.b=d
this.a=e},
u2:function u2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ya:function Ya(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ban:function ban(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cWY:function cWY(d,e,f){this.a=d
this.b=e
this.c=f},
cWX:function cWX(d,e){this.a=d
this.b=e},
cXm:function cXm(d){this.a=d},
cX9:function cX9(){},
cXn:function cXn(d){this.a=d},
cX8:function cX8(){},
cXo:function cXo(d,e){this.a=d
this.b=e},
cX7:function cX7(d,e){this.a=d
this.b=e},
cXp:function cXp(d,e){this.a=d
this.b=e},
cX6:function cX6(d,e){this.a=d
this.b=e},
cXq:function cXq(d){this.a=d},
cX5:function cX5(){},
cXr:function cXr(d,e){this.a=d
this.b=e},
cX4:function cX4(d,e){this.a=d
this.b=e},
cXs:function cXs(d){this.a=d},
cXh:function cXh(d,e){this.a=d
this.b=e},
cXt:function cXt(d){this.a=d},
cXu:function cXu(d){this.a=d},
cXw:function cXw(d){this.a=d},
cXx:function cXx(d){this.a=d},
cXg:function cXg(d,e){this.a=d
this.b=e},
cXy:function cXy(d,e){this.a=d
this.b=e},
aFw:function aFw(d){this.a=d},
bfC:function bfC(d){this.a=d},
b8B:function b8B(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hUM(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.agO(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.by(new A.S(Date.now(),0,!1))
s=new C.fo5(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("a2<1>"),q=q.k("cQ<1,n>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.xA)m.push(l===D.YY?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.jV(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jV(h,a2,a2)-A.jV(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.B(new A.cQ(new A.a2(a4,new C.fo3(u,f),p),new C.fo4(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aI(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aI(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hUN(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.agO(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.foa(v,e)
q=new C.fo8(v)
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
n=A.B(d,A.a3(d).k("cn.E"))
B.d.fh(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.L)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.fk(l,new C.fo9(p,m));k.C();t=f){j=l.gS(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ai(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aI(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hGv(d,e,f,g){var w,v,u=C.hUO(d,e)
if(u<=0||f.length<=u)return new A.adm(!1,D.BS,f)
if(g.t(0,e.a))return new A.adm(!1,D.BS,f)
w=A.U(f).c
v=A.dd(f,0,A.dJ(u,"count",x.S),w).dG(0)
return new A.adm(!0,A.dd(f,u,null,w).dG(0),v)},
hGw(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.agO(d3),d2=d1.length
if(d2===0)return D.fLy
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.cg(0,t.a,new C.d4G(t))}s=new C.d4X(v)
d2=x.h
r=A.T(w,d2)
q=new C.d4P(r)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d4O(r)
l=A.T(w,x.do)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ch(l.cg(0,k,new C.d4H()),o)}h=new C.d4N(s)
g=new C.d4M(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a2<J.E>")
f=A.B(new A.a2(new A.bc(v,p),new C.d4I(h),o),o.k("J.E"))
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
a9=new C.d4V(new C.d4R(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dt(v,v.r,v.e),j=a2.gajB(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.ew([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.K(0,i))break}if(h.$1(b0)&&a2.ai(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.r4(J.dH(i==null?B.T:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.cc)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.d4F(a2,new C.d4W(),b6,a3,b4,v,a4,a5,a6,b5)
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
b4.n(0,b8,new C.Fi(o,new A.u(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Jx(c5.a,new A.u(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.B(new A.cu(b6,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bH(0,new C.d4J(c6,b4))
for(d2=new A.cK(a4,a4.$ti.k("cK<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gS(j)
if(b6.ai(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.fk(j,new C.d4K(c8));i.C();)o.push(j.gS(0).b)
if(o.length===0)continue
B.d.b_(o,new C.d4L())
c6.push(new C.aHB(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bcT(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
heE(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(d)
return w==null?null:w.b[1]},
h9_(d,e,f,g,h,i,j,k,l,m,n){return new C.Zd(k,f,j,e,l,n,m,d,g,h,i,null)},
aAu(d,e,f,g,h,i,j){return new C.bgy(i,d,e,f,j,h,g,null)},
aol:function aol(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aC3:function aC3(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dRL:function dRL(d){this.a=d},
dRK:function dRK(d){this.a=d},
dRN:function dRN(d,e){this.a=d
this.b=e},
dRO:function dRO(d,e){this.a=d
this.b=e},
dRP:function dRP(d){this.a=d},
dRJ:function dRJ(d,e){this.a=d
this.b=e},
dRM:function dRM(d){this.a=d},
dRR:function dRR(d){this.a=d},
dRQ:function dRQ(d,e){this.a=d
this.b=e},
aof:function aof(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aC0:function aC0(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dRb:function dRb(d){this.a=d},
dR9:function dR9(d){this.a=d},
dRa:function dRa(d){this.a=d},
dRc:function dRc(d,e){this.a=d
this.b=e},
dR6:function dR6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQF:function dQF(d){this.a=d},
dQG:function dQG(d,e){this.a=d
this.b=e},
dQU:function dQU(d){this.a=d},
dQS:function dQS(d){this.a=d},
dQT:function dQT(d,e){this.a=d
this.b=e},
dQV:function dQV(d){this.a=d},
dQW:function dQW(d,e){this.a=d
this.b=e},
dR5:function dR5(d,e){this.a=d
this.b=e},
dR3:function dR3(d,e){this.a=d
this.b=e},
dR2:function dR2(d,e){this.a=d
this.b=e},
dQZ:function dQZ(d,e){this.a=d
this.b=e},
dQY:function dQY(d){this.a=d},
dR_:function dR_(d,e){this.a=d
this.b=e},
dQX:function dQX(d){this.a=d},
dR0:function dR0(d){this.a=d},
dR1:function dR1(d){this.a=d},
dR4:function dR4(d,e){this.a=d
this.b=e},
dQt:function dQt(d,e){this.a=d
this.b=e},
dQu:function dQu(d,e){this.a=d
this.b=e},
dRe:function dRe(d,e,f){this.a=d
this.b=e
this.c=f},
dR8:function dR8(d,e,f){this.a=d
this.b=e
this.c=f},
dR7:function dR7(d){this.a=d},
dQv:function dQv(d){this.a=d},
dQw:function dQw(d){this.a=d},
dQx:function dQx(){},
dQy:function dQy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQC:function dQC(d,e){this.a=d
this.b=e},
dQB:function dQB(d,e){this.a=d
this.b=e},
dQA:function dQA(d){this.a=d},
dQD:function dQD(d,e){this.a=d
this.b=e},
dQz:function dQz(d){this.a=d},
dRd:function dRd(d){this.a=d},
dQP:function dQP(){},
dQQ:function dQQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQO:function dQO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQK:function dQK(d,e,f){this.a=d
this.b=e
this.c=f},
dQJ:function dQJ(d,e,f){this.a=d
this.b=e
this.c=f},
dQH:function dQH(d,e){this.a=d
this.b=e},
dQL:function dQL(d){this.a=d},
dQM:function dQM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQI:function dQI(d,e){this.a=d
this.b=e},
dQN:function dQN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQR:function dQR(d,e){this.a=d
this.b=e},
dRl:function dRl(){},
dRm:function dRm(d,e){this.a=d
this.b=e},
dRn:function dRn(d){this.a=d},
dRo:function dRo(d,e){this.a=d
this.b=e},
dRh:function dRh(d){this.a=d},
dRf:function dRf(d,e){this.a=d
this.b=e},
dRi:function dRi(d,e){this.a=d
this.b=e},
dRj:function dRj(d,e){this.a=d
this.b=e},
dRk:function dRk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dRp:function dRp(d){this.a=d},
dRg:function dRg(d){this.a=d},
dQE:function dQE(d){this.a=d},
bcR:function bcR(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d4D:function d4D(d){this.a=d},
d4C:function d4C(d,e){this.a=d
this.b=e},
d4E:function d4E(d){this.a=d},
d4B:function d4B(d,e){this.a=d
this.b=e},
fo5:function fo5(d,e){this.a=d
this.b=e},
fo6:function fo6(d){this.a=d},
fo7:function fo7(){},
fo3:function fo3(d,e){this.a=d
this.b=e},
fo4:function fo4(){},
foa:function foa(d,e){this.a=d
this.b=e},
fob:function fob(d){this.a=d},
foc:function foc(){},
fo8:function fo8(d){this.a=d},
fo9:function fo9(d,e){this.a=d
this.b=e},
Jx:function Jx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Fi:function Fi(d,e){this.a=d
this.b=e},
bcT:function bcT(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d4G:function d4G(d){this.a=d},
d4X:function d4X(d){this.a=d},
d4P:function d4P(d){this.a=d},
d4Q:function d4Q(){},
d4O:function d4O(d){this.a=d},
d4H:function d4H(){},
d4N:function d4N(d){this.a=d},
d4M:function d4M(d,e){this.a=d
this.b=e},
d4I:function d4I(d){this.a=d},
d4R:function d4R(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d4S:function d4S(d){this.a=d},
d4T:function d4T(d){this.a=d},
d4U:function d4U(){},
d4V:function d4V(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d4W:function d4W(){},
d4F:function d4F(d,e,f,g,h,i,j,k,l,m){var _=this
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
d4J:function d4J(d,e){this.a=d
this.b=e},
d4K:function d4K(d){this.a=d},
d4L:function d4L(){},
aHB:function aHB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcU:function bcU(d,e){this.b=d
this.a=e},
d4Y:function d4Y(){},
d4Z:function d4Z(d){this.a=d},
d5_:function d5_(d){this.a=d},
d50:function d50(){},
bgz:function bgz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbY:function bbY(d,e){this.b=d
this.a=e},
bu9:function bu9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
f6w:function f6w(d){this.a=d},
bjV:function bjV(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eIO:function eIO(d){this.a=d},
eIN:function eIN(d,e){this.a=d
this.b=e},
Zd:function Zd(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aAs:function aAs(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dkQ:function dkQ(d,e){this.a=d
this.b=e},
dkP:function dkP(d){this.a=d},
dkN:function dkN(d){this.a=d},
dkO:function dkO(d){this.a=d},
dkZ:function dkZ(d){this.a=d},
dl_:function dl_(d){this.a=d},
dkY:function dkY(d,e){this.a=d
this.b=e},
dl0:function dl0(){},
dl3:function dl3(d){this.a=d},
dkX:function dkX(d,e){this.a=d
this.b=e},
dl2:function dl2(){},
dl4:function dl4(d){this.a=d},
dkW:function dkW(d,e){this.a=d
this.b=e},
dl5:function dl5(d){this.a=d},
dkV:function dkV(d){this.a=d},
dl6:function dl6(d){this.a=d},
dkU:function dkU(d){this.a=d},
dl7:function dl7(d){this.a=d},
dkT:function dkT(d){this.a=d},
dl8:function dl8(d){this.a=d},
dkS:function dkS(d){this.a=d},
dl9:function dl9(d){this.a=d},
dkR:function dkR(d,e){this.a=d
this.b=e},
dl1:function dl1(d){this.a=d},
ace:function ace(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgy:function bgy(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
acd:function acd(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bgx:function bgx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dla:function dla(d){this.a=d},
dlb:function dlb(d,e){this.a=d
this.b=e},
aAt:function aAt(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGE:function aGE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
acf:function acf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dlk:function dlk(d){this.a=d},
Jl:function Jl(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
h3T(d){var w=d.T,v=x.N
return w.iV(w,new C.c6I(),v,v)},
hy2(d){var w=d.bC
if(w>=0)return w
return 5},
h3V(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.h3T(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
h3U(d,e){var w=C.h3V(d,e)
if(w!=null&&w.cc(new A.S(Date.now(),0,!1)))return!0
return!1},
hy3(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.h3T(d),w,w)
u=C.h3V(d,e)
t=u!=null&&u.cc(new A.S(Date.now(),0,!1))?u:new A.S(Date.now(),0,!1)
v.n(0,s,t.bP(A.dC(30,0,0,0,0,0).a).a6().ac())
d.T=v},
aYA(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aYA=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lc(t,B.HE),$async$aYA)
case 3:if(l){u=!0
w=1
break}u=A.kP(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.HE,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYA,v)},
c6I:function c6I(){},
hy0(){var w,v=$.pk(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fW(u)},
I1(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$I1=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$I1)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f2("ngmy_family_tree_backup_codes_v1",null,!1,B.bG),$async$I1)
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
return A.i($async$I1,v)},
a6m(d){return C.hy1(d)},
hy1(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a6m=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$a6m)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hB("ngmy_family_tree_backup_codes_v1",A.F(["codes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cG,null),$async$a6m)
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
return A.i($async$a6m,v)},
c6H(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c6H=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.I1(),$async$c6H)
case 3:t=m.js(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gS(t)
q=r.b
if(s.b(q)){p=J.a5(q)
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
return A.i($async$c6H,v)},
MU(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$MU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c6H(d),$async$MU)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.I1(),$async$MU)
case 6:s=f
r=J.a5(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dU(A.a1(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.S(Date.now(),0,!1).a6().ac())
r.n(s,t,o)
w=9
return A.b(C.a6m(s),$async$MU)
case 9:case 8:u=t
w=1
break
case 5:n=C.hy0()
w=10
return A.b(C.I1(),$async$MU)
case 10:s=f
J.aF(s,n,A.F(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=11
return A.b(C.a6m(s),$async$MU)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$MU,v)},
aYz(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aYz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.I1(),$async$aYz)
case 3:t=f
for(s=J.dk(t),r=s.gdK(t),r=r.dG(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a6m(t),$async$aYz)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aYz,v)},
a6n(d,e,f){var w=0,v=A.j(x.H),u
var $async$a6n=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aok(d,e),$async$a6n)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.MU(d),$async$a6n)
case 7:w=4
break
case 5:w=8
return A.b(C.aYz(d),$async$a6n)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a6n,v)},
aoe(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aoe=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aok(f,e),$async$aoe)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c3(),$async$aoe)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.I1(),$async$aoe)
case 7:q=o.q(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a5(q)
if(!J.z(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoe,v)},
aYy(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aYy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c3(),$async$aYy)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.I1(),$async$aYy)
case 4:t=q.q(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a5(t)
if(!J.z(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYy,v)},
hy4(){var w,v=$.pk(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fW(u)},
aoh(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$aoh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$aoh)
case 3:if(!g){u=null
w=1
break}t=C.hy4()
w=4
return A.b(A.Uk(),$async$aoh)
case 4:s=g
r=B.dJ.aJ(B.R.ao(d.eL(),null))
r=B.cS.gcv().aJ(r)
q=e?999:2
J.aF(s,t,A.F(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(A.a6o(s),$async$aoh)
case 5:p=e?999:2
u=new A.a_n("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoh,v)},
aog(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aog=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Uk(),$async$aog)
case 3:p=a0
o=J.a5(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a5(n)
l=A.aJ(m.h(n,"usesRemaining"))
k=l==null?null:B.k.N(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aYy(J.k(l==null?"":l),j),$async$aog)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.c4.ca(0,B.cE.aJ(t))
s=C.h3W(r)}catch(f){q=A.aa(f)
$.am.$1("[family tree qr stash] decode: "+A.t(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dU(A.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a6().ac())
o.n(p,g,l)}w=5
return A.b(A.a6o(p),$async$aog)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aog,v)},
h3W(d){var w,v,u,t,s=null
try{w=B.R.aG(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hy6(A.a1(w,x.N,x.z))
return u}catch(t){v=A.aa(t)
$.am.$1("[family tree sync] parse: "+A.t(v))
return s}},
fOY(d){var w=0,v=A.j(x.m),u,t,s
var $async$fOY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aog(t[1])
w=1
break}u=null
w=1
break}u=C.h3W(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fOY,v)},
hy6(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d9(v,x.f)
u=A.cD(u,new C.c6K(),u.$ti.k("J.E"),x.k)
t=A.a3(u).k("a2<J.E>")
s=A.B(new A.a2(u,new C.c6L(),t),t.k("J.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.T(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.js(p),t=t.gae(t),o=x.B;t.C();){n=t.gS(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d9(l,u)
n=A.cD(n,new C.c6M(),n.$ti.k("J.E"),o)
k=A.a3(n).k("a2<J.E>")
j=A.B(new A.a2(n,new C.c6N(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aoi(h,w,s,r,q)},
aok(d,e){var w=0,v=A.j(x.y),u,t
var $async$aok=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.ML(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Aj(d),$async$aok)
case 3:u=t.cy(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aok,v)},
c6T(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c6T=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Aj(d),$async$c6T)
case 3:t=s.b6(f,new C.c6U(),x.cs)
t=A.B(t,t.$ti.k("ak.E"))
B.d.b_(t,new C.c6V())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6T,v)},
Ul(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Ul=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aok(e,d),$async$Ul)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.MU(e),$async$Ul)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Aj(e),$async$Ul)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.c6R(g))
r=A.B(t,t.$ti.k("J.E"))}t=J.a5(r)
if(t.gam(r)){u=null
w=1
break}t=t.dt(r,new C.c6S(e),x.k)
r=A.B(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Kg(e,o),$async$Ul)
case 14:n=i
if(J.cy(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.aoi(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ul,v)},
aYD(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aYD=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ul(d,e,f,g),$async$aYD)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gL(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aK(t,s,"_")
r=q.a
u=A.G0(A.Jt(q.eL(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYD,v)},
aYC(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aYC=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ul(d,e,f,g),$async$aYC)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aoh(r,f),$async$aYC)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aEF(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYC,v)},
Um(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Um=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fOY(a0),$async$Um)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aoe(g.a,d,e,f,s,r),$async$Um)
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
return A.b(C.bzw(e,j),$async$Um)
case 12:case 11:w=13
return A.b(C.agA(e,j,s),$async$Um)
case 13:h=n.h(0,i)
w=h!=null&&J.cy(h)?14:15
break
case 14:w=16
return A.b(C.Au(e,i,h),$async$Um)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bnq(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Um,v)},
aoi:function aoi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c6P:function c6P(){},
c6Q:function c6Q(){},
c6O:function c6O(){},
c6K:function c6K(){},
c6L:function c6L(){},
c6M:function c6M(){},
c6N:function c6N(){},
c6U:function c6U(){},
c6V:function c6V(){},
c6R:function c6R(d){this.a=d},
c6S:function c6S(d){this.a=d},
fXf(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f7(null,x.H)
return A.hv(d,new C.aoj(w,e,g,i,f,h,null),!0,null,x.H)},
d4A(d,e,f,g,h,i,j,k){return new C.bcQ(i,e,k,j,g,f,h,d,null)},
aoj:function aoj(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aC2:function aC2(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dRy:function dRy(d){this.a=d},
dRz:function dRz(d,e,f){this.a=d
this.b=e
this.c=f},
dRD:function dRD(d,e){this.a=d
this.b=e},
dRE:function dRE(d){this.a=d},
dRv:function dRv(d){this.a=d},
dRw:function dRw(d,e){this.a=d
this.b=e},
dRx:function dRx(d,e){this.a=d
this.b=e},
dRC:function dRC(d){this.a=d},
dRB:function dRB(d,e){this.a=d
this.b=e},
dRA:function dRA(){},
dRG:function dRG(d){this.a=d},
dRH:function dRH(d,e){this.a=d
this.b=e},
dRF:function dRF(d,e){this.a=d
this.b=e},
d51:function d51(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bcS:function bcS(d,e,f){this.d=d
this.e=e
this.a=f},
abw:function abw(d,e,f){this.c=d
this.d=e
this.a=f},
bcQ:function bcQ(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bcV:function bcV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Zy:function Zy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aC1:function aC1(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dRq:function dRq(d,e){this.a=d
this.b=e},
dRr:function dRr(d){this.a=d},
dRs:function dRs(d){this.a=d},
dRt:function dRt(d){this.a=d},
dRu:function dRu(d){this.a=d},
Zz:function Zz(d){this.a=d},
bi1:function bi1(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dRI:function dRI(d,e){this.a=d
this.b=e},
aX9(d,e){return new C.aX8(d,e,null)},
aX8:function aX8(d,e,f){this.c=d
this.d=e
this.a=f},
hXf(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b0(d,11)},
i3z(d){return A.bV(B.K,null,new C.fE_(new C.tz(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
h5O(d,e){return new C.are(e,d,null)},
aOQ(d,e,f,g,h,i,j){var w=C.hXf(i)
if(w!=null)return A.bw(e,new A.a7(j,f,new C.a5o(w,!0,null),null),B.aq)
return I.aOb(e,B.bQ,f,g,h,i,j)},
lv:function lv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5o:function a5o(d,e,f){this.c=d
this.d=e
this.a=f},
bhI:function bhI(d,e){var _=this
_.e=_.d=$
_.cS$=d
_.b2$=e
_.c=_.a=null},
dCS:function dCS(d){this.a=d},
dCT:function dCT(){},
dCU:function dCU(d,e){this.a=d
this.b=e},
bhH:function bhH(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fE_:function fE_(d){this.a=d},
fDZ:function fDZ(d,e){this.a=d
this.b=e},
fDY:function fDY(d,e){this.a=d
this.b=e},
fDX:function fDX(d,e){this.a=d
this.b=e},
are:function are(d,e,f){this.c=d
this.d=e
this.a=f},
cen:function cen(d,e){this.a=d
this.b=e},
aJX:function aJX(){},
i3k(d){var w=null
return A.ca(w,w,!0,w,new C.fDm(),d,w,!0,!0,x.e2)},
i4u(d,e,f,g,h){var w=null
return A.ca(w,w,!0,w,new C.fKP(h,g,f,e),d,w,!0,!0,x.N)},
i3m(d,e){var w=null
return A.ca(w,w,!0,w,new C.fDr(e),d,w,!0,!0,x.dY)},
i3l(d){var w=null
return A.ca(w,w,!0,w,new C.fDq(),d,w,!0,!0,x.c5)},
aRJ:function aRJ(d,e){this.a=d
this.b=e},
aRI:function aRI(d){this.a=d},
aPL:function aPL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDm:function fDm(){},
fKP:function fKP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDr:function fDr(d){this.a=d},
fDq:function fDq(){},
Yc:function Yc(d,e){this.c=d
this.a=e},
axi:function axi(){var _=this
_.d=$
_.c=_.a=_.e=null},
cXK:function cXK(d){this.a=d},
cXL:function cXL(d){this.a=d},
cXJ:function cXJ(d,e){this.a=d
this.b=e},
cXM:function cXM(d){this.a=d},
cXN:function cXN(d){this.a=d},
Yb:function Yb(d){this.a=d},
axh:function axh(){this.d=$
this.c=this.a=null},
cXG:function cXG(d){this.a=d},
cXH:function cXH(d){this.a=d},
cXI:function cXI(d){this.a=d},
XK:function XK(d){this.a=d},
aw1:function aw1(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cvj:function cvj(){},
cvp:function cvp(d){this.a=d},
cvq:function cvq(d){this.a=d},
cvr:function cvr(d){this.a=d},
cvo:function cvo(){},
cvs:function cvs(d){this.a=d},
cvt:function cvt(d){this.a=d},
cvn:function cvn(){},
cvu:function cvu(d,e){this.a=d
this.b=e},
cvm:function cvm(d,e){this.a=d
this.b=e},
cvk:function cvk(d,e){this.a=d
this.b=e},
cvv:function cvv(d){this.a=d},
cvl:function cvl(){},
cvw:function cvw(d){this.a=d},
a0g:function a0g(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bu1:function bu1(){this.d=$
this.c=this.a=null},
f5Z:function f5Z(d,e){this.a=d
this.b=e},
f6_:function f6_(d){this.a=d},
f60:function f60(d,e){this.a=d
this.b=e},
aaz:function aaz(d,e){this.a=d
this.b=e},
F6:function F6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bu_:function bu_(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f5X:function f5X(d,e){this.a=d
this.b=e},
avV:function avV(d,e){this.c=d
this.a=e},
bu0:function bu0(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f5Y:function f5Y(d){this.a=d},
btZ:function btZ(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aM5:function aM5(){},
aM6:function aM6(){},
bBu(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bu(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oA(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fC7(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.X8(A.dn(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aOs(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aOs=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hW().l2(85,1280,B.eG),$async$aOs)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.ff(),$async$aOs)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.h5N()
w=9
return A.b(C.cem(q,r),$async$aOs)
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
return A.i($async$aOs,v)},
aOO(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aOO=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cej(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gal(g.split(",")):g
p=B.cE.aJ(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.X().L5(p,!0,null,i).cM(0,B.fG),$async$aOO)
case 9:n=a1
w=10
return A.b(n.lV(),$async$aOO)
case 10:m=a1
w=11
return A.b(J.agZ(m).hp(B.fW),$async$aOO)
case 11:l=a1
J.agZ(m).q()
if(l==null){w=8
break}i=J.eQ(B.dC.gaM(l))
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
return A.i($async$aOO,v)},
fC7:function fC7(){},
tz:function tz(d){this.a=d},
ard:function ard(d,e,f){this.c=d
this.d=e
this.a=f},
aDy:function aDy(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eFY:function eFY(d,e){this.a=d
this.b=e},
eFP:function eFP(d){this.a=d},
eFQ:function eFQ(d){this.a=d},
eFW:function eFW(d,e){this.a=d
this.b=e},
eFV:function eFV(d,e){this.a=d
this.b=e},
eFS:function eFS(d,e){this.a=d
this.b=e},
eFR:function eFR(d,e){this.a=d
this.b=e},
eFT:function eFT(d){this.a=d},
eFU:function eFU(d,e){this.a=d
this.b=e},
eFX:function eFX(d,e){this.a=d
this.b=e},
eFK:function eFK(d,e){this.a=d
this.b=e},
eFO:function eFO(d){this.a=d},
eFN:function eFN(d,e){this.a=d
this.b=e},
eFM:function eFM(d){this.a=d},
eFZ:function eFZ(d,e){this.a=d
this.b=e},
eG_:function eG_(d,e){this.a=d
this.b=e},
eFL:function eFL(d,e){this.a=d
this.b=e},
hio(d,e,f){var w="thumbnailPath",v=e.af()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.F(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a6().ac(),"project",v],x.N,x.z)},
fC8(d,e,f){var w=0,v=A.j(x.N),u
var $async$fC8=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.R.ao(C.hio(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fC8,v)},
bBw(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bBw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fC8(!0,d,e),$async$bBw)
case 4:w=3
return A.b(r.arb(g,d,e.a),$async$bBw)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dJ.aJ(B.R.ao(C.hio(d,e,null),null))
u="NGMY_WS:"+B.k7.gcv().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBw,v)},
hal(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fWW(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d_(s,"NGMYWSSYNC2|"))return!0
if(J.d_(s,"NGMY_WS:"))return!0
if(J.f_(s,t))return!0
if(J.d_(s,"{"))try{w=B.R.aG(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
i1i(d){var w,v,u,t=C.hal(d)
if(t==null)return null
if(C.fWW(t))return t
w=B.a.cJ(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b0(t,w))
if(C.fWW(v))return v}u=B.a.cJ(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b0(t,u))
if(C.fWW(v))return v}return null},
fWV(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d_(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d_(q,"NGMY_WS:")){v=B.c4.ca(0,B.cE.aJ(J.mC(q,8)))
w=t.a(B.R.aG(0,v,r))}else w=t.a(B.R.aG(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fRx(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bBv(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bBv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.ara(t[1]),$async$bBv)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fWV(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fWV(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBv,v)},
fWU(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lf(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bB1(){var w=0,v=A.j(x.o),u,t
var $async$bB1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Gb(),$async$bB1)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fWV(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bB1,v)},
hjf(d,e,f,g){return A.bV(B.K,null,new C.fKH(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fKH:function fKH(d,e,f){this.a=d
this.b=e
this.c=f},
acA:function acA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eG1:function eG1(d,e){this.a=d
this.b=e},
eG2:function eG2(d,e){this.a=d
this.b=e},
eG3:function eG3(d,e){this.a=d
this.b=e},
eG4:function eG4(d,e){this.a=d
this.b=e},
eG0:function eG0(d){this.a=d},
ar7:function ar7(d,e,f){this.c=d
this.d=e
this.a=f},
bjo:function bjo(){var _=this
_.c=_.a=_.e=_.d=null},
eFF:function eFF(d,e){this.a=d
this.b=e},
eFG:function eFG(d){this.a=d},
eFH:function eFH(d){this.a=d},
arc:function arc(d){this.a=d},
aDx:function aDx(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eFJ:function eFJ(d){this.a=d},
eFI:function eFI(d){this.a=d},
hBk(d,e,f,g,h){return new C.Nw(h,g,d,e,f,null)},
aIi:function aIi(d,e){this.a=d
this.b=e},
Nw:function Nw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDz:function aDz(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eGr:function eGr(){},
eGn:function eGn(d,e){this.a=d
this.b=e},
eGo:function eGo(d){this.a=d},
eG8:function eG8(d){this.a=d},
eG6:function eG6(d){this.a=d},
eG7:function eG7(d){this.a=d},
eGh:function eGh(d,e){this.a=d
this.b=e},
eGe:function eGe(d,e){this.a=d
this.b=e},
eGf:function eGf(d,e){this.a=d
this.b=e},
eGg:function eGg(d,e,f){this.a=d
this.b=e
this.c=f},
eGc:function eGc(d,e,f){this.a=d
this.b=e
this.c=f},
eGa:function eGa(d){this.a=d},
eGb:function eGb(d){this.a=d},
eGd:function eGd(d){this.a=d},
eGu:function eGu(d){this.a=d},
eGt:function eGt(d){this.a=d},
eGv:function eGv(d){this.a=d},
eGs:function eGs(d){this.a=d},
eG5:function eG5(d){this.a=d},
eG9:function eG9(d,e){this.a=d
this.b=e},
eGq:function eGq(d,e){this.a=d
this.b=e},
eGp:function eGp(d,e){this.a=d
this.b=e},
eGk:function eGk(d){this.a=d},
eGl:function eGl(d){this.a=d},
eGm:function eGm(d,e){this.a=d
this.b=e},
eGj:function eGj(d,e){this.a=d
this.b=e},
eGi:function eGi(d,e,f){this.a=d
this.b=e
this.c=f},
bvN:function bvN(){},
Aa(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aK(v,w,"_")},
af0(d,e,f){return C.hQS(d,e,f)},
hQS(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$af0=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.au("String",e,f),$async$af0)
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
return A.i($async$af0,v)},
af_(d,e){return C.hQR(d,e)},
hQR(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$af_=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$af_)
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
return A.i($async$af_,v)},
hPD(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.S7(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
byw(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$byw=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b0P(q),$async$byw)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aOO(q,!1),$async$byw)
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
return A.i($async$byw,v)},
hp6(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.qP(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qP(p,J.k(u==null?"":u),1,o,q)},
fRx(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d9(s,x.f)
w=A.cD(w,new C.cuH(),w.$ti.k("J.E"),x.Q)
v=A.a3(w).k("a2<J.E>")
r=A.B(new A.a2(w,new C.cuI(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lf(w,v,u,r,t==null?new A.S(Date.now(),0,!1):t)},
hUI(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.YY
case"female":case"f":return D.aio
default:return D.xA}},
hf7(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h_Z(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hUI(v==null?j:J.k(v))
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
hUK(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.M8
case"viewer":return D.ki
default:return D.tB}},
hUL(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
G1(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bzN(d,e){return B.a.i(e.toLowerCase())===C.G1(d,e)&&d.y!==D.ki},
tK(d,e){var w,v=d.y
if(v===D.ki)return!1
w=B.a.i(e.toLowerCase())
if(w===C.G1(d,e))return!0
if(v===D.M8)return!0
v=d.e
return new A.K(v,A.fX_(),A.U(v).k("K<1,n>")).t(0,w)},
hUa(d){return J.dH(d,new C.fng()).gM(0)},
fL9(d){var w=0,v=A.j(x.y),u,t
var $async$fL9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Aj(d),$async$fL9)
case 3:u=t.qL(f,new C.fLa(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fL9,v)},
bzw(d,e){var w=0,v=A.j(x.H),u,t
var $async$bzw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Aj(d),$async$bzw)
case 3:t=g
if(J.qL(t,new C.flN(e))){w=1
break}if(C.hUa(t)>=2)throw A.V(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bzw,v)},
ajE(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d9(n,x.f)
w=A.cD(w,new C.bM3(),w.$ti.k("J.E"),x.P)
v=A.a3(w).k("a2<J.E>")
m=A.B(new A.a2(w,new C.bM4(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bM5(),x.N)
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
return new C.ky(l,w,v,!s,t,m,r,q,p,C.hUK(o==null?null:J.k(o)))},
hff(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
Cv(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$Cv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.QQ(d),$async$Cv)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$Cv)
case 4:t=f
w=5
return A.b(t.a5h(0),$async$Cv)
case 5:w=6
return A.b(C.fdx(t,l),$async$Cv)
case 6:s=f
if(J.cy(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a5(q)
o=A.aT(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.haV(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oz(l,n),$async$Cv)
case 11:u=n
w=1
break
case 10:case 8:m=A.aT(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.haV(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oz(l,n),$async$Cv)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Cv,v)},
fdx(d,e){return C.hN7(d,e)},
hN7(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fdx=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a5(a3)
a5=A.aT(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Aa(a9)))
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
break}o=f.gS(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aT(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Aa(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.R.aG(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fRx(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aT(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Aa(a9)+"_"+n))
i=C.hPD(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b0P(h),$async$fdx)
case 17:g=b1
if(g!=null){i=i.S7(g)
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
case 8:J.R_(q,new C.fdy())
if(p&&J.ad(q)!==0)C.oz(a9,q)
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
return A.i($async$fdx,v)},
bzY(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bzY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.QQ(d),$async$bzY)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Cv(r),$async$bzY)
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
return A.i($async$bzY,v)},
haV(d){var w,v,u,t
try{w=B.R.aG(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d9(w,x.f)
v=A.cD(v,new C.f9e(),v.$ti.k("J.E"),x.i)
u=A.a3(v).k("a2<J.E>")
v=A.B(new A.a2(v,new C.f9f(),u),u.k("J.E"))
B.d.b_(v,new C.f9g())
return v}catch(t){v=A.a([],x.D)
return v}},
oz(d,e){return C.i3a(d,e)},
i3a(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oz=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.QQ(b2),$async$oz)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$oz)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Aa(a8)
p=A.aT(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.R.aG(0,p,null)),new C.fDd(),a2).fI(0)
a2=J.b6(b3,new C.fDe(),a2).c_(0,new C.fDf())
n=A.db(a2,a2.$ti.k("J.E"))
a2=o,a2=A.ec(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f_(n,m)?17:18
break
case 17:a5=C.Aa(a8)
l=A.aT(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a7E(l),$async$oz)
case 19:t=21
a5=C.Aa(a8)
k=A.aT(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.R.aG(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a7E(a5==null?null:J.k(a5)),$async$oz)
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
return A.b(C.af_(r,"ngmy_worksheet_item_v3_"+C.Aa(a8)+"_"+m),$async$oz)
case 29:w=30
return A.b(C.af_(r,"ngmy_worksheet_thumb_v3_"+C.Aa(a8)+"_"+m),$async$oz)
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
break}i=a3.gS(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.byw(h),$async$oz)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.af0(r,"ngmy_worksheet_thumb_v3_"+C.Aa(a8)+"_"+a4,f),$async$oz)
case 40:g=i.S7(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.af_(r,"ngmy_worksheet_thumb_v3_"+C.Aa(a8)+"_"+a4),$async$oz)
case 41:g=i.S7(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.af_(r,"ngmy_worksheet_thumb_v3_"+C.Aa(a8)+"_"+a4),$async$oz)
case 42:case 34:a4=i.a
w=43
return A.b(C.af0(r,"ngmy_worksheet_item_v3_"+C.Aa(a8)+"_"+a4,B.R.ao(g.af(),null)),$async$oz)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.ch(q,i.a)
w=31
break
case 32:w=44
return A.b(C.af0(r,"ngmy_worksheets_index_v3_"+C.Aa(a8),B.R.ao(q,null)),$async$oz)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eK(b3,new C.fDg(q))
a4=a3.$ti.k("cQ<1,a4<n,@>>")
a7=A.B(new A.cQ(a3,new C.fDh(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.af0(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.R.ao(a0,null)),$async$oz)
case 45:w=46
return A.b(J.hod(r),$async$oz)
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
return A.i($async$oz,v)},
KI(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$KI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Cv(d),$async$KI)
case 3:t=g
s=J.cE(t)
r=s.bc(t,new C.fL8(e))
if(r===-1)s.ck(t,0,e)
else s.n(t,r,e)
u=C.oz(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$KI,v)},
bzK(d,e){var w=0,v=A.j(x.H),u
var $async$bzK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Cv(d),$async$bzK)
case 2:u=g
J.nn(u,new C.fnI(e))
w=3
return A.b(C.oz(d,u),$async$bzK)
case 3:return A.h(null,v)}})
return A.i($async$bzK,v)},
G3(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$G3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$G3)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aT(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.R.aG(0,i,null)
if(x.j.b(t)){j=J.d9(t,x.f)
j=A.cD(j,new C.fqa(),j.$ti.k("J.E"),x.k)
s=A.a3(j).k("a2<J.E>")
r=A.B(new A.a2(j,new C.fqb(),s),s.k("J.E"))
B.d.b_(r,new C.fqc())
k=r}}catch(h){}w=4
return A.b(C.f9Z(d),$async$G3)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hNu(k,p,d)
j=A.U(o)
s=j.k("K<1,a4<n,@>>")
s=A.B(new A.K(o,new C.fqd(),s),s.k("ak.E"))
n=B.R.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Q1(d,o),$async$G3)
case 7:case 6:j=j.k("a2<1>")
m=A.B(new A.a2(o,new C.fqe(d),j),j.k("J.E"))
if(m.length!==0)C.aNn(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$G3,v)},
fD_(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fD_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Q1(d,e),$async$fD_)
case 3:t=J.dH(e,new C.fD0(d))
s=A.B(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aNn(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fD_,v)},
a1T(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a1T=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a1T)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aT(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.R.aG(0,l,null)
if(x.j.b(u)){m=J.d9(u,x.f)
m=A.cD(m,new C.fL3(),m.$ti.k("J.E"),x.k)
t=A.a3(m).k("a2<J.E>")
s=A.B(new A.a2(m,new C.fL4(),t),t.k("J.E"))
o=s}}catch(k){}q=J.q6(o,new C.fL5(e))
if(B.a.i(e.x).length===0&&C.tK(e,d)){m=B.a.i(d.toLowerCase())
p=e.aCD(e.y===D.ki?D.ki:D.tB,m)}else p=e
if(q===-1)J.po(o,0,p)
else J.aF(o,q,p)
w=3
return A.b(C.Q1(d,o),$async$a1T)
case 3:w=C.tK(p,d)?4:5
break
case 4:w=6
return A.b(C.aNm(C.G1(p,d),p),$async$a1T)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a1T,v)},
aNx(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aNx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.G3(d),$async$aNx)
case 2:u=g
t=J.cE(u)
s=A.r4(t.eK(u,new C.fnp(e)))
t.bn(u,new C.fnq(e))
w=3
return A.b(C.Q1(d,u),$async$aNx)
case 3:w=s!=null&&C.bzN(s,d)?4:5
break
case 4:w=6
return A.b(C.f9i(e),$async$aNx)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aNx,v)},
agO(d){var w=d.f,v=A.U(w).k("a2<1>")
w=A.B(new A.a2(w,new C.fLe(),v),v.k("J.E"))
return w},
fUD(d,e){var w,v=d.f,u=A.r4(new A.a2(v,new C.fn_(e),A.U(v).k("a2<1>")))
v=C.agO(d)
w=A.U(v).k("a2<1>")
v=A.B(new A.a2(v,new C.fn0(e,u),w),w.k("J.E"))
B.d.b_(v,new C.fn1())
return v},
hUO(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hji(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bc(C.fUD(d,u),new C.fKQ(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hWk(d,e){var w
if(e==null||e.length===0)return 1
w=C.fUD(d,e)
if(w.length===0)return 1
return new A.K(w,new C.fqX(),A.U(w).k("K<1,H>")).fo(0,B.zS)+1},
i33(d){var w,v=C.agO(d)
if(v.length===0)return null
w=new A.a2(v,new C.fCX(),A.U(v).k("a2<1>"))
if(!w.gam(0))return w.gL(0)
return B.d.gL(v)},
hUJ(d){return A.F(["id",d.a,"name",d.b,"gender",C.hf7(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hWf(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
n=n!==D.xA?n:q.c
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
d=q.aCy(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.L)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cGk(a1,w,a3.d,a2.y,s,a0,v)},
Aj(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$Aj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Aj)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aT(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.R.aG(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d9(t,x.f)
p=A.cD(p,new C.fq7(),p.$ti.k("J.E"),x.k)
s=A.a3(p).k("a2<J.E>")
p=A.B(new A.a2(p,new C.fq8(),s),s.k("J.E"))
B.d.b_(p,new C.fq9())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Aj,v)},
agA(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$agA=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tB:D.ki
a7=C.G1(b2,b3)
w=2
return A.b(C.Aj(b1),$async$agA)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.bc(a8,new C.fCT(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bzw(b1,b2),$async$agA)
case 5:case 4:if(b0===-1){u=b2.aCD(a6,a7)
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
i=i!==D.xA?i:l.c
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
s.n(0,m,l.aCy(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.B(new A.bc(s,k),k.k("J.E"))
k=a5?D.tB:D.ki
u=t.yg(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Q1(b1,a8),$async$agA)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aNm(B.a.i(b3.toLowerCase()),u),$async$agA)
case 9:case 8:return A.h(null,v)}})
return A.i($async$agA,v)},
hbi(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a6().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("K<1,a4<n,@>>"),k=A.B(new A.K(m,C.hiw(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.F(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.F(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a6().ac(),"updatedAt",o],r,x.K),"createdAt",s.a6().ac(),"updatedAt",o],r,x.z)},
hbj(d,e){var w=new A.S(Date.now(),0,!1).a6().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("K<1,a4<n,@>>")
u=A.B(new A.K(u,C.hiw(),t),t.k("ak.E"))
return A.F(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a6().ac(),"updatedAt",w],x.N,x.z)},
hL7(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a5(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ajE(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.K(j,A.fX_(),A.U(j).k("K<1,n>")).c_(0,new C.f9M())
t=A.B(j,j.$ti.k("J.E"))
if(u===v)s=D.tB
else s=B.d.t(t,u)?D.M8:D.ki
return w.aCD(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ajE(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d9(q,h)
h=A.cD(h,new C.f9N(),h.$ti.k("J.E"),x.P)
p=A.a3(h).k("a2<J.E>")
o=A.B(new A.a2(h,new C.f9O(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.f9P(),x.N).c_(0,new C.f9Q())
t=A.B(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tB
else s=B.d.t(t,u)?D.M8:D.ki
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
return new C.ky(h,r,p,!m,t,o,l,j,v,s)},
f9Z(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$f9Z=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fa2()
h=x.N
g=x.z
w=7
return A.b(A.iJ(A.a([A.ll("family_trees","*",null,A.F(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bG),r.$2(A.ll("family_trees","*",A.F(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bG),"collaborator"),r.$2(A.ll("family_trees","*",null,A.F(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bG),"public")],x.cl),x.U),$async$f9Z)
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
h=A.cD(new A.bc(l,h),new C.fa_(a0),h.k("J.E"),x.k)
l=A.a3(h).k("a2<J.E>")
l=A.B(new A.a2(h,new C.fa0(),l),l.k("J.E"))
B.d.b_(l,new C.fa1())
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
return A.i($async$f9Z,v)},
hNu(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a5(e)
if(j.gam(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dt(e,new C.fec(),v).c_(0,new C.fed())
t=A.db(u,u.$ti.k("J.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.G1(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.ki){m=q.e
m=!new A.K(m,A.fX_(),A.U(m).k("K<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gS(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.hWf(l,v)
o=C.G1(k,w)
p=v.d
s.n(0,u,o===w?k.bab(p,D.tB):k.bab(p,v.y))}j=s.$ti.k("bc<2>")
j=A.B(new A.bc(s,j),j.k("J.E"))
B.d.b_(j,new C.fee())
return j},
Q1(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Q1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$Q1)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fgk(),x.a)
s=A.B(s,s.$ti.k("ak.E"))
w=3
return A.b(u.au("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.R.ao(s,null)),$async$Q1)
case 3:return A.h(null,v)}})
return A.i($async$Q1,v)},
aNm(d,e){return C.hSz(d,e)},
hSz(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aNm=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lM("family_trees",A.a([C.hbi(e,d)],p),null,B.cG),$async$aNm)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lM("family_trees",A.a([C.hbj(e,d)],p),null,B.cG),$async$aNm)
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
return A.i($async$aNm,v)},
aNn(d,e){return C.hSA(d,e)},
hSA(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aNn=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("K<1,a4<n,@>>")
m=n.k("ak.E")
l=A.B(new A.K(e,new C.fl6(d),n),m)
r=l
w=7
return A.b(A.lM("family_trees",r,null,B.cG),$async$aNn)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.K(e,new C.fl7(d),n),m)
p=k
w=8
return A.b(A.lM("family_trees",p,null,B.cG),$async$aNn)
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
return A.i($async$aNn,v)},
f9i(d){return C.hKt(d)},
hKt(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$f9i=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Qq("family_trees",A.F(["id",d],x.N,x.z),null,B.cG),$async$f9i)
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
return A.i($async$f9i,v)},
qP:function qP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lf:function lf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cuK:function cuK(){},
cuJ:function cuJ(){},
cuH:function cuH(){},
cuI:function cuI(){},
H7:function H7(d,e){this.a=d
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
ajD:function ajD(d,e){this.a=d
this.b=e},
fng:function fng(){},
fLa:function fLa(d){this.a=d},
flN:function flN(d){this.a=d},
ky:function ky(d,e,f,g,h,i,j,k,l,m){var _=this
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
bM7:function bM7(){},
bM6:function bM6(){},
bM3:function bM3(){},
bM4:function bM4(){},
bM5:function bM5(){},
fdy:function fdy(){},
f9e:function f9e(){},
f9f:function f9f(){},
f9g:function f9g(){},
fDd:function fDd(){},
fDe:function fDe(){},
fDf:function fDf(){},
fDg:function fDg(d){this.a=d},
fDh:function fDh(){},
fL8:function fL8(d){this.a=d},
fnI:function fnI(d){this.a=d},
fqa:function fqa(){},
fqb:function fqb(){},
fqc:function fqc(){},
fqd:function fqd(){},
fqe:function fqe(d){this.a=d},
fD0:function fD0(d){this.a=d},
fL3:function fL3(){},
fL4:function fL4(){},
fL5:function fL5(d){this.a=d},
fnp:function fnp(d){this.a=d},
fnq:function fnq(d){this.a=d},
fLe:function fLe(){},
fn_:function fn_(d){this.a=d},
fn0:function fn0(d,e){this.a=d
this.b=e},
fn1:function fn1(){},
fKQ:function fKQ(d){this.a=d},
fqX:function fqX(){},
fCX:function fCX(){},
fq7:function fq7(){},
fq8:function fq8(){},
fq9:function fq9(){},
fCT:function fCT(d){this.a=d},
f9M:function f9M(){},
f9N:function f9N(){},
f9O:function f9O(){},
f9P:function f9P(){},
f9Q:function f9Q(){},
fa2:function fa2(){},
fa3:function fa3(d){this.a=d},
fa_:function fa_(d){this.a=d},
fa0:function fa0(){},
fa1:function fa1(){},
fec:function fec(){},
fed:function fed(){},
fee:function fee(){},
fgk:function fgk(){},
fl6:function fl6(d){this.a=d},
fl7:function fl7(d){this.a=d},
cuM:function cuM(d,e){this.a=d
this.b=e},
cuN:function cuN(d,e){this.a=d
this.b=e},
aFB:function aFB(d,e,f){this.a=d
this.b=e
this.c=f},
b73:function b73(){this.b=this.a=0},
b72:function b72(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bu2:function bu2(){},
wt(d,e){var w,v
if(d==null)return""
w=d.bS()
v=""+w.gce()+"/"+w.gct()+"/"+w.gcj()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gn3()),2,"0")+":"+B.a.aT(B.o.u(w.gFP()),2,"0")},
hBh(){var w,v=$.pk(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"WS"+B.d.fW(u)},
ar8(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$ar8=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$ar8)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f2("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bG),$async$ar8)
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
return A.i($async$ar8,v)},
ar9(d){return C.hBi(d)},
hBi(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$ar9=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$ar9)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hB("ngmy_worksheet_project_qr_stashes_v1",A.F(["stashes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cG,null),$async$ar9)
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
return A.i($async$ar9,v)},
arb(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$arb=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arb)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hBh()
w=4
return A.b(C.ar8(),$async$arb)
case 4:r=h
q=B.a.i(e)
p=B.dJ.aJ(t)
J.aF(r,s,A.F(["ownerEmail",q,"projectId",f,"payload",B.cS.gcv().aJ(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(C.ar9(r),$async$arb)
case 5:u=new A.a_n("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arb,v)},
ara(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ara=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c3(),$async$ara)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.ar8(),$async$ara)
case 4:q=f
p=J.a5(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a5(o)
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
try{s=B.c4.ca(0,B.cE.aJ(t))}catch(h){r=A.aa(h)
$.am.$1("[worksheet qr stash] decode: "+A.t(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dU(A.a1(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a6().ac())
p.n(q,i,m)}w=5
return A.b(C.ar9(q),$async$ara)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ara,v)},
h5N(){var w=new A.S(Date.now(),0,!1).a6()
return"wst_"+(1000*w.a+w.b)+"_"+B.cI.aB(999999)},
hBj(d){var w,v,u,t,s,r,q
try{w=A.afp(d)
if(w==null)return d
v=w
if(J.KO(v)>960||J.KN(v)>960){s=v
r=J.KO(v)>=J.KN(v)?960:null
v=A.afo(s,J.KN(v)>J.KO(v)?960:null,B.Nu,r)}s=v
u=A.al0(82).Ss(s,B.yl)
if(J.ad(u)===0)return d
s=new Uint8Array(A.ce(u))
return s}catch(q){t=A.aa(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cem(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cem=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hBj(e)
$.cei.n(0,s,t)
u=C.bBy(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cem,v)},
b0P(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b0P=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d_(l,"data:image")){u=null
w=1
break}t=4
r=J.f_(l,",")?B.d.gal(J.ln(l,",")):l
q=B.cE.aJ(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.h5N()
w=7
return A.b(C.cem(p,q),$async$b0P)
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
return A.i($async$b0P,v)},
cej(d){var w=0,v=A.j(x.T),u,t,s
var $async$cej=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cel(s),$async$cej)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcv().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cej,v)},
a7E(d){var w=0,v=A.j(x.H),u,t
var $async$a7E=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hip(d)
if(t==null){w=1
break}$.cei.W(0,t)
w=3
return A.b(C.bBx(t),$async$a7E)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a7E,v)},
bBy(d,e){return C.i1l(d,e)},
i1l(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bBy=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aMi
w=7
return A.b(n==null?$.aMi=I.fTE():n,$async$bBy)
case 7:r=g
q=new Uint8Array(A.ce(e))
p=J.mD(r,"thumbs","readwrite")
B.iE.mc(J.mB(p,"thumbs"),q,l)
w=8
return A.b(J.pn(p),$async$bBy)
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
return A.i($async$bBy,v)},
bBx(d){return C.i1j(d)},
i1j(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bBx=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aMi
w=7
return A.b(o==null?$.aMi=I.fTE():o,$async$bBx)
case 7:r=f
q=J.mD(r,"thumbs","readwrite")
B.iE.Fl(J.mB(q,"thumbs"),m)
w=8
return A.b(J.pn(q),$async$bBx)
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
return A.i($async$bBx,v)}},D,Ak,Al,R,Am,An,I
J=c[1]
A=c[0]
B=c[2]
A1=c[77]
N=c[231]
S=c[146]
A2=c[215]
G=c[196]
F=c[31]
E=c[206]
O=c[96]
A3=c[217]
A4=c[136]
A5=c[184]
T=c[112]
U=c[101]
A6=c[214]
A7=c[37]
M=c[213]
A8=c[80]
H=c[87]
A9=c[153]
Aa=c[108]
V=c[156]
W=c[227]
X=c[185]
Ab=c[176]
Ac=c[188]
Y=c[183]
Ad=c[65]
Ae=c[71]
Z=c[200]
Af=c[232]
Ag=c[30]
Ah=c[102]
K=c[178]
Ai=c[189]
A_=c[230]
A0=c[223]
P=c[103]
Aj=c[113]
L=c[129]
Q=c[69]
C=a.updateHolder(c[6],C)
D=c[226]
Ak=c[70]
Al=c[194]
R=c[229]
Am=c[228]
An=c[56]
I=c[54]
C.an8.prototype={}
C.aXa.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bex(),f=h.x!=null&&h.yI(i).length===0
if(h.x!=null)w=f?B.aZ:B.bI
else w=h.gT4()?B.bI:B.dT
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.bdn,B.q,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.eGI,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h5,i,i,i),B.S,D.f8J,B.at,A.d(C.wt(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.f4G,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.aYX,i,i,i,i,B.XY,i,i,i)
q=A.m(16)
p=A.I(B.aL,B.q,1)
o=A.I(B.aZ.j(0.28),B.q,1)
n=A.fVA(h.d)
o=A.p(B.A,C.aX9(A.ftk(h.e,n),30),B.f,i,i,new A.o(B.lD,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.f07,B.L,i,i)
m=A.m(14)
l=A.I(B.aL,B.q,1)
q=A.p(i,A.v(A.a([o,B.O,n,B.bB,D.f9_,B.ac,A.p(i,A.v(A.a([D.fo6,B.bB,A.d(A.Al(h.c),i,i,i,i,i,i,D.eWc,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.eZ,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,p,q,i,i,B.n),i,i,i,i,K.agu,i,i,i)
p=A.m(16)
m=A.I(B.aL,B.q,1)
l=j.aPd("Original due",C.wt(h.r,!1))
n=j.aPd("Current due",C.wt(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.p(i,A.v(A.a([l,B.O,n,B.S,A.p(i,A.d(h.gaJp(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.AG,i,i,1/0),B.S,j.ccl(),B.O,j.c05(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bk,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aL,B.q,1)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.f9W,B.at,A.d(q,i,i,i,i,i,i,D.f_q,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,n,o,i,i,B.n),i,i,i,i,B.bk,i,i,1/0)],s))}if(h.gaEf()){q=A.m(14)
o=A.I(B.cp,B.q,1.6)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fpp,B.O,A.bw(A.m(12),A.ek(new A.a7(1/0,88,A.b3(i,i,i,new A.Vd(h.ax,B.M,D.eKr,!0,3.5,i),B.au),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.EX,i,i,i)],s))}p.push(B.aA)
p.push(D.fhK)
return A.p(i,A.v(A.a([r,new A.C(B.agx,A.v(p,B.aj,i,B.e,B.j,0,B.p),i)],s),B.aj,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aPd(d,e){var w=null
return A.A(A.a([A.D(A.d(d,w,w,w,w,w,w,D.a7c,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eXb,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
ccl(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a8r(B.dT,u,"Not paid yet")
w=t.yI(null).length
v=w===0?B.aZ:B.bI
return this.a8r(v,u,C.wt(t.x,!0))},
c05(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a8r(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a8r(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a7c,u,u,u)
v=A.U(d).k("K<1,hh>")
v=A.B(new A.K(d,new C.c0a(),v),v.k("ak.E"))
return A.v(A.a([w,B.an,A.bY(B.bz,v,B.br,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a8r(d,e,f){var w=null
return A.A(A.a([A.D(A.d(e,w,w,w,w,w,w,D.a7c,w,w,w),1),new A.dq(1,B.cj,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dL,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b9c.prototype={
a5(d,e){new A.Vd(this.b,B.M,e,!0,3.5,null).a5(d,e)},
ar(d){return d.b!==this.b}}
C.anf.prototype={
U(){return new C.aBt(A.a([],x.bp))},
gdX(){return this.c}}
C.aBt.prototype={
a_(){this.a1()
this.Ie()},
Ie(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ie=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a17(t.a.c),$async$Ie)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dDK(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Ie,v)},
aR5(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aQ,s=A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bq:B.bn).j(0.22)
w=A.m(10)
return A.br(v,new A.b4(4,r,new A.aA(u,1,B.q,-1)),v,B.bk,v,v,v,v,!0,new A.b4(4,w,new A.aA((this.a.d.a?B.bq:B.bn).j(0.22),1,B.q,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.m(10),D.aWz),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aR4(d){return this.aR5(d,null)},
OO(d){return this.cfV(d)},
cfV(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OO=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Gc:B.eG
w=7
return A.b(new A.hW().BI(72,900,900,n),$async$OO)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.ff(),$async$OO)
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
o=A.aa(l)
n=r.c
if(n!=null)n.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Could not pick photo: "+A.t(o),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$OO,v)},
aZx(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aQ,o=A.m(10),n=A.I((q?B.bq:B.bn).j(0.18),B.q,1)
if(d)q=B.cZ
else q=s.a.d.a?B.bq:B.bn
q=A.W(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aQ:B.aB,r,r,r,r,r,r,r,r,12.5,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cZ
else u=s.a.d.a?B.bq:B.bn
t=x.p
u=A.D(A.v(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a5,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fv(r,r,r,r,r,r,r,r,r,r,r,B.cZ,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c8)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.W(B.cA,s.a.d.a?B.bq:B.bn,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c8))
return A.p(r,A.A(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.kh,D.boU,r,r,r)},
CF(d){return this.bxF(d)},
bxE(){return this.CF(null)},
bxF(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CF=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.ar(new A.bb(a4,B.b3,B.aN),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jS(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.aa(p,2)}o=new A.ar(new A.bb(a4,B.b3,B.aN),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.ar(new A.bb(a4,B.b3,B.aN),s)
if(a3){a4=new A.S(Date.now(),0,!1).bP(6048e8)
m=A.c0(a4.gcj(),a4.gce(),a4.gct(),0,0,0,0,0)}else{a4=a5.f
m=A.c0(a4.gcj(),a4.gce(),a4.gct(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bl(a4,!0,x.cT)
i=a3?null:A.fVA(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.vP?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",a4,new C.dDt(),new C.dDu(a2,t,a5,r,new C.dDv(a2,t),o,n,j),B.eE,!0,x.y),$async$CF)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d5(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.T$=s
r.P$=0
o.T$=s
o.P$=0
n.T$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.I(x.q).f.R(D.eQN)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.R(D.ePs)
w=1
break}a1=A.ftk(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.vP?"male":"female"
w=7
return A.b(A.agN(a3,A.h2w(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$CF)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.vP?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a9(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c0(a3.gcj(),a3.gce(),a3.gct(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c0(a4.gcj(),a4.gce(),a4.gct(),0,0,0,0,0)))a5.cIs(a2.a)
w=8
return A.b(A.agN(t.a.c,a5),$async$CF)
case 8:case 5:w=9
return A.b(t.Ie(),$async$CF)
case 9:case 1:return A.h(u,v)}})
return A.i($async$CF,v)},
aRH(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cZ.j(0.14)
else w=this.a.d.a?B.M:B.aQ
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cZ
else s=(this.a.d.a?B.bq:B.bn).j(0.2)
s=A.I(s,B.q,g?1.5:1)
r=C.aX9(d,18)
if(g)q=B.cZ
else q=this.a.d.a?B.aQ:B.aB
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,A.p(p,A.A(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.bb,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ag)},
Rt(d){return this.cxe(d)},
cxe(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Rt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",s,new C.dDN(),new C.dDO(t,d),B.hX,!0,x.y),$async$Rt)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.S(s,0,!1)
case 4:w=7
return A.b(A.agN(t.a.c,d),$async$Rt)
case 7:w=8
return A.b(t.Ie(),$async$Rt)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Rt,v)},
Ns(d,e){return this.bIn(0,e)},
bIn(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ns=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.l_(s,"Cancel","Delete",e.b+" \xb7 "+A.Al(e.c)+" will be removed from this device.","Delete this debt?"),$async$Ns)
case 3:if(!g){w=1
break}w=4
return A.b(C.fnw(t.a.c,e.a),$async$Ns)
case 4:w=5
return A.b(t.Ie(),$async$Ns)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Ns,v)},
adU(d){return this.c9O(d)},
c9O(d){var w=0,v=A.j(x.H),u=this,t
var $async$adU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bV(B.K,null,new C.dDH(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$adU)
case 2:return A.h(null,v)}})
return A.i($async$adU,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.e4f
w=J.dH(m.d,new C.dDP())
v=A.B(w,w.$ti.k("J.E"))
w=J.dH(m.d,new C.dDQ())
u=A.B(w,w.$ti.k("J.E"))
t=B.d.cI(v,0,new C.dDR())
w=A.m(18)
s=m.a.d.a
r=s?D.cls:D.awK
q=A.I(s?B.cZ.j(0.35):B.cZ.j(0.18),B.q,1)
s=A.p(l,D.bOc,B.f,l,l,new A.o(B.cZ.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.av,A.D(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.aB,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a1,!0,A.m(12),A.aL(!1,A.m(12),!0,D.e3E,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dDS(m),l,l,l,l,l,l,l),B.f,B.cZ,0,l,l,l,l,l,B.ag)],p),B.m,l,B.e,B.j,0,l,l)
o=A.D(m.ctu("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Al(t)
r=A.a([A.p(l,A.v(A.a([s,B.ac,A.A(A.a([o,B.ab,A.D(m.b4z(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.ax,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.agr,l,l,l),B.aA],p)
if(J.cl(m.d)){w=m.a.d.a
s=w?B.dX:B.c
q=A.m(18)
o=A.I((w?B.bq:B.bn).j(0.12),B.q,1)
n=A.p(l,D.bJa,B.f,l,l,new A.o(B.cZ.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.aB,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.ac,w,B.at,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bn,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.brj,l,l,1/0))}else{w=m.gcfd()
s=A.B(new A.K(v,w,A.U(v).k("K<1,r>")),x.l)
if(u.length!==0){q=A.a([B.an,new A.C(D.bsY,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bn,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.K(u,w,A.U(u).k("K<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.aj,l,B.e,B.j,0,B.p)},
b4z(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.bq:B.bn).j(0.12),B.q,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bq:B.bn,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cZ
else w=v.a.d.a?B.aQ:B.aB
return A.p(u,A.v(A.a([q,B.bB,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ei,u,u,u)},
ctu(d,e){return this.b4z(!1,d,e)},
cfe(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.yI(j).length,h=d.bdJ()
if(d.x!=null){w=d.yI(j).length
v=w===0?B.cZ:B.bI}else if(d.gT4())v=B.bI
else{if(h)w=B.cZ
else w=k.a.d.a?B.bq:B.bn
v=w}if(d.x!=null){w=d.yI(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wt(u,!1)}else{u.toString
t="Paid "+C.wt(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wt(w,!1)+" \xb7 "+i+" missed":"Due "+C.wt(w,!1)}w=k.a.d.a?B.dX:B.c
u=A.m(18)
if(d.gT4()&&d.x==null)s=B.bI.j(0.35)
else s=(k.a.d.a?B.bq:B.bn).j(0.12)
s=A.I(s,B.q,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bm:B.lD
o=A.I(d.gT4()&&d.x==null?B.bI.j(0.45):B.cZ.j(0.28),B.q,1.4)
n=d.x!=null?0.55:1
m=A.fVA(d.d)
o=A.p(B.A,A.dc(C.aX9(A.ftk(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aQ:B.aB
m=x.p
n=A.a([new A.dq(1,B.cj,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaEf())B.d.v(n,A.a([B.eb,A.W(B.Mz,B.cZ.j(0.8),j,j,j,14)],m))
p=A.D(A.v(A.a([A.A(n,B.m,j,B.e,B.j,0,j,j),B.cX,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.Al(d.c)
l=k.a.d.a?B.aQ:B.aB
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aG(!1,B.a1,!0,j,A.aL(!1,q,!0,new A.C(W.agb,A.A(A.a([o,B.bf,p,B.ab,A.v(A.a([n,B.bB,A.W(B.ex,(k.a.d.a?B.bq:B.bn).j(0.5),j,j,j,18)],m),B.dG,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dDJ(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ag),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.dc,j,j,j,j)}}
C.u1.prototype={}
C.ajC.prototype={
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
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cw,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.I(r.j(0.6),B.q,1)
n.push(A.aE(a0,A.p(a0,A.W(B.cA,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a8))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.C(B.jc,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.atg,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.Fd,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f3(m,A.A(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.eg)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(D.bo7,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cD:B.bl,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.D(new A.C(B.fo,A.v(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.eLb)
a2=A.a([A.A(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.C(B.v8,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a3,B.a7,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.lb,A.v(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.q,1),a2,a0,a0,B.n),a0,a0,a0,B.h7,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.ax,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bpj,a0,a0,a0,a0)}}
C.aSY.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bg?B.bg:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.D(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bl:B.cD,q,B.P,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.m,q,B.e,B.j,0,q,q),B.cX,n],m)
if(p.z)o.push(new A.C(B.v5,n,q))
return new A.C(B.dc,A.v(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.S2.prototype={
U(){return new C.bcO()}}
C.bcO.prototype={
gbWc(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.e4a,D.e4g],l)
for(w=0;w<8;++w){v=D.a0X[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.FX:B.Bp
q=t===s
r=A.W(r,q?B.ez:B.c_,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.x(v.b,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bD(1,B.bi,new A.x(v.c,n,A1.CW,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aW(24,24)
p=new A.aA(B.ez,2,B.q,-1)
s=new A.o(n,n,new A.bP(p,p,p,p),new A.bq(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aE(n,new A.C(B.eF,A.v(A.a([new A.C(B.mi,new A.cm(B.aO,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.Dy(!0,new C.ajC(v,q.d,q.e,new C.d3y(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d3z(o,v),n,n,n,n,n,n,!1,B.a8))}k.push(new A.C(D.bpC,A.bJ(D.fuC,new C.d3A(o,d),A.bk(B.b6,n,n,n,n,B.o7,n,n,new A.b7(A.m(16),B.Y),n,n,n)),n))
return A.bn(!0,new A.cV(new A.aY(0,1/0,0,m.a.b*0.9),A.cB(k,n,D.btQ,n,n,B.ah,!0),n),!0,!1,B.af,!0,!0)}}
C.n8.prototype={
af(){var w=this
return A.F(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a6().ac()],x.N,x.z)},
ban(d,e,f){return new C.n8(this.a,e,d,f)}}
C.H6.prototype={
w2(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.H6(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aCs(d){var w=null
return this.w2(w,w,w,w,w,d,w,w,w,w,w,w)},
cEi(d){var w=null
return this.w2(w,w,w,w,d,w,w,w,w,w,w,w)},
bal(d,e,f){var w=null
return this.w2(d,w,w,w,w,w,w,w,e,w,f,w)},
cEX(d){var w=null
return this.w2(w,w,w,w,w,w,d,w,w,w,w,w)},
cF5(d){var w=null
return this.w2(w,w,w,w,w,w,w,w,w,d,w,w)},
cEg(d){var w=null
return this.w2(w,w,w,d,w,w,w,w,w,w,w,w)},
cF7(d){var w=null
return this.w2(w,w,w,w,w,w,w,w,w,w,w,d)},
cEd(d){var w=null
return this.w2(w,w,d,w,w,w,w,w,w,w,w,w)},
cE8(d){var w=null
return this.w2(w,d,w,w,w,w,w,w,w,w,w,w)},
Fe(d){var w=null
return this.w2(w,w,w,w,w,w,w,d,w,w,w,w)},
cFf(d,e,f,g,h,i,j,k,l,m,n){return this.w2(d,e,f,g,null,h,i,j,k,l,m,n)},
af(){var w=this
return A.F(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cBZ(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bM2(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.C2.ged(D.C2))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a2u)
q=l.$2("frame",D.a1W)
l=l.$2("texture",D.a1R)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cFf(p,u,t,q,r,A.qE(d.h(0,"ribbon"))?A.FD(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.YA.prototype={
U(){return new C.ayw(A.a([],x.I),D.M7)},
gdX(){return this.c}}
C.ayw.prototype={
a_(){var w,v=this
v.a1()
v.f=A.zb(0,1)
w=$.aw()
v.z=new A.ar(B.as,w)
v.Q=new A.ar(B.as,w)
v.kQ()
w=v.a
C.bzV(w.c,w.d).bz(new C.d4e(v),x.fL)},
q(){var w,v=this,u=v.f
u===$&&A.c()
u.q()
u=v.z
u===$&&A.c()
w=$.aw()
u.T$=w
u.P$=0
u=v.Q
u===$&&A.c()
u.T$=w
u.P$=0
v.a2()},
kQ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$kQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Kg(s.c,s.d),$async$kQ)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d42(t,r))
t.aun()
case 1:return A.h(u,v)}})
return A.i($async$kQ,v)},
gar_(){var w,v=this
if(!J.cl(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
aun(){var w,v,u=this.gar_(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saV(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saV(0,w==null?"":w)},
c8e(d){this.m(new C.d4_(this,d))
this.aun()},
MO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$MO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.n8(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aP8(r.c,r.d,s),$async$MO)
case 3:w=4
return A.b(t.kQ(),$async$MO)
case 4:if(t.c==null||J.cl(t.d)){w=1
break}q=J.q6(t.d,new C.d3B(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d3C(t,p))
t.aun()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.AM(p+1,B.cr,B.kG),$async$MO)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$MO,v)},
As(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$As=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gar_()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aP8(o.c,o.d,new C.n8(s,r,q,new A.S(p,0,!1))),$async$As)
case 3:w=4
return A.b(t.kQ(),$async$As)
case 4:if(t.c==null){w=1
break}t.m(new C.d43(t))
case 1:return A.h(u,v)}})
return A.i($async$As,v)},
Nt(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Nt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gar_()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d3K(r),s,null,!0,!0,x.y),$async$Nt)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bzG(s.c,s.d,r.a),$async$Nt)
case 4:t.m(new C.d3L(t))
w=5
return A.b(t.kQ(),$async$Nt)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.T7(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Nt,v)},
xY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.As(),$async$xY)
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
return A.b(C.Qi(s,r.r,o,p,q),$async$xY)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hiS(s,r.x,r.r),$async$xY)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Kg(s.c,s.d),$async$xY)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.K(l,new C.n8(""+(m+k),q,B.a.i(j.b),new A.S(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Au(r.c,r.d,l),$async$xY)
case 11:w=12
return A.b(t.kQ(),$async$xY)
case 12:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$xY,v)},
a_H(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_H=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.As(),$async$a_H)
case 5:case 4:if(t.c==null){w=1
break}s=t.gxW(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dL(D.ys,new C.d40(t),new C.d41())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mn("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gS(o)
p.push(new F.mn(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fXc(o,new F.r8(s,r,"",p,new F.ul(q.d,null,null,null,null,"","","")),null),$async$a_H)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a_H,v)},
Nb(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Nb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.As(),$async$Nb)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bV(D.abR,null,new C.d3G(t),s,!0,!0,!0,D.aLo,!1,!1,x.N),$async$Nb)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cEi(r)
t.m(new C.d3H(t,q))
s=t.a
w=7
return A.b(C.QS(s.c,s.d,q),$async$Nb)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Nb,v)},
Wh(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(D.abR,null,new C.d3M(t),r,!0,!0,!0,D.aLo,!1,!1,x.e),$async$Wh)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d3N(t,s))
r=t.a
w=4
return A.b(C.QS(r.c,r.d,s),$async$Wh)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.AM(0,B.dV,B.ov)
case 1:return A.h(u,v)}})
return A.i($async$Wh,v)},
bNw(d){var w=d.bS(),v=B.a.aT(B.o.u(w.gce()),2,"0"),u=B.a.aT(B.o.u(w.gct()),2,"0")
return""+w.gcj()+"-"+v+"-"+u},
gxW(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bVs()
if(r.e)w=D.aaE
else if(J.cl(r.d)){w=r.y
v=r.gxW(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eVF,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.C(A0.ahs,new C.XT(w,v,0,q),q),q),B.bx,t,B.an,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kb.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aE(q,A.p(q,D.eGy,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dO.j(0.45),B.J,18)],x.V),E.vE,B.n),q,q,q,q,B.Y7,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcB6(),q,q,q,q,q,q,!1,B.a8))
w.push(B.S)
w.push(A.hc(D.bFr,D.fu5,r.gaL8(),q))
B.d.v(u,w)}w=A.av(A.cd(A.v(u,B.m,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.ew,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kb.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.P,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dQ:B.zQ
u=A.v(A.a([new A.C(D.bqD,w,q),A.D(A.Ir(v,new C.d4c(r),J.ad(r.d)+1,q,r.gc8d(),u,B.aO),1),r.bAw()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c8(q,D.ad9,new A.an(B.W,q,B.b_,B.r,A.a([D.aJU,A.bn(!0,A.v(A.a([p,A.D(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bVs(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cy(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Jp(B.dW,"AI",h.gbyr(),!0))
if(h.a.f)f.push(new C.Jp(B.n8,"Cover",h.gbIX(),!1))
if(h.a.f)f.push(new C.Jp(B.y5,"Header",h.gbDX(),!1))
if(J.cy(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Jp(B.tP,"Print",h.gche(),!1))
if(h.a.f&&J.cy(h.d)&&h.r>=0){v=h.w
u=v?B.hy:B.jg
t=v?"Save":"Edit"
f.push(new C.Jp(u,t,v?h.gcnm():new C.d3X(h),!1))}if(h.a.f)f.push(new C.Jp(B.hx,"Add page",h.gaL8(),!1))
v=C.hf6(h.y.Q)
u=h.gxW(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.dlm
else{k=new A.aW(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.aA(E.jN.j(0.5),1,B.q,-1)
j=A.p(g,A.W(l.a,D.kb,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bP(i,i,i,i),new A.bq(k,k,k,k),g,new A.a8(B.a3,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kb.j(0.85)
p.push(new A.bD(1,B.bi,A.aE(B.c5,A.v(A.a([k,B.bB,new A.x(l.b,g,new A.G(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a8),g))}return new C.ajC(v,u,t+" \xb7 "+s+" "+r,new C.d3Y(h),A.A(p,B.m,g,B.e,B.j,0,g,g),g)},
zv(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.As(),$async$zv)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gS(r)
s.push(q.b+" "+q.c)}p=F.a1m(B.d.aI(s," "))
s=t.c
s.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.d3D(t,p),s,null,!0,!0,x.N),$async$zv)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.xY(),$async$zv)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Df(),$async$zv)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.ET("Swahili (Kiswahili)",!0),$async$zv)
case 18:w=16
break
case 17:w=19
return A.b(t.cxS(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zv)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zv,v)},
Y9(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(E.jN.j(0.3),B.q,1),r=x.p
return new A.C(B.cH,A.aL(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.W(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.vE,B.a6),w,42,w,w,w,w,w,42),B.bf,A.D(A.v(A.a([A.d(f,w,w,w,w,w,w,A8.SU,w,w,w),A.d(g,w,w,w,w,w,w,O.SN,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d3Z(d,h),w,w,w,w,w,w,w),w)},
Df(){return this.bN0()},
bN0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Df=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d3Q(r),a7,null,!0,!0,x.ei),$async$Df)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eO("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.ca(null,null,!1,null,new C.d3R(o),a7,null,!0,!0,x.H).fb(new C.d3S(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.L)(d),++a1){k=d[a1]
J.ch(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.af()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.ys[a1]
J.ch(j,i.a)}w=8
return A.b(C.afZ(a0,a7,new C.d3T(o),d,l,e,j),$async$Df)
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
if(l!=null&&a6.a)A.a6(l,!0).eJ()
l=o
l.shS($.aw())
J.aPz(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.I(x.q).f
j=n
l.R(A.b2(null,null,null,null,null,B.r,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcn(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.ai(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.ban(m.b.h(0,a4).b,a7,new A.S(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Au(j.c,j.d,l),$async$Df)
case 11:w=12
return A.b(r.kQ(),$async$Df)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.ys[a1].a)
a5=l.cBZ(j,12,a7)
l=r.a
w=15
return A.b(C.QS(l.c,l.d,a5),$async$Df)
case 15:if(r.c!=null)r.m(new C.d3U(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.AM(0,B.dV,B.ov)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.I(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.R(A.b2(a3?A.cpm("Undo",new C.d3V(r,p,f),null):null,null,null,null,null,B.r,null,j,null,B.ed,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Df,v)},
ET(d,e){return this.cxT(d,e)},
cxS(d){return this.ET(d,!1)},
cxT(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$ET=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eO("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.ca(null,null,!1,null,new C.d45(a0),k,null,!0,!0,x.H).fb(new C.d46(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.ch(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a1z(m,new C.d47(a0)),$async$ET)
case 10:w=8
break
case 9:w=11
return A.b(C.bBp(new C.d48(a0),m,a2),$async$ET)
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
if(o!=null&&f.a)A.a6(o,!0).eJ()
o=a0
o.shS($.aw())
J.aPz(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.I(x.q).f
k=q
o.R(A.b2(null,null,null,null,null,B.r,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.ban(J.q(p,g).b,j.a,new A.S(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Au(k.c,k.d,o),$async$ET)
case 12:w=13
return A.b(r.kQ(),$async$ET)
case 13:o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(A.cpm("Undo",new C.d49(r,d),null),null,null,null,null,B.r,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ET,v)},
bAw(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d3E(v):u
r=A.aH(u,u,u,u,A.W(D.bBa,s?D.kb:B.b2,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cy(v.d)&&!v.w&&v.r>=0)s=A.hc(A.W(B.vk,B.EB,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.EB,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbIw(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kb.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.D(A.av(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d3F(v):u
return A.bn(!0,new A.C(D.bqr,A.A(A.a([r,s,A.aH(u,u,u,u,A.W(B.ex,t<J.ad(v.d)?D.kb:B.b2,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.YE.prototype={
U(){return new C.bd8(new A.ar(B.as,$.aw()))}}
C.bd8.prototype={
ga0P(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
gbLM(){var w,v=this.ga0P()
A:{if("cover"===v){w=D.cRk
break A}if("book"===v){w=D.cNe
break A}w=D.dea
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jN.j(0.5),n=x.p,m=A.A(A.a([D.dln,B.av,D.bvN,A.aH(q,q,q,q,B.li,q,q,q,new C.d5Z(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jI(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d6_(r),r.ga0P()==="page",q,q,q,q))
if(r.a.d)l.push(A.jI(q,q,q,D.foV,q,new C.d60(r),r.ga0P()==="book",q,q,q,q))
l.push(A.jI(q,q,q,D.fcv,q,new C.d61(r),r.ga0P()==="cover",q,q,q,q))
l=A.bY(B.bz,l,B.br,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.T,!1,q,!0,B.r,q,A.aN(),r.d,q,q,q,q,q,2,A.br(q,new A.b4(4,A.m(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kw,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dl,!0,B.a4,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbLM(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mE(q,B.c.j(0.08),new A.x(s,q,B.IA,q,q,q,q,q,q,q,q,q),B.hB,new C.d62(r,s),q,q,q,q))}return A.eG(q,E.Al,A.cd(A.v(A.a([m,B.S,D.fs3,B.an,l,B.ac,k,B.O,A.bY(B.bz,w,B.br,6,6),B.aA,A.dp(D.bFo,D.fsP,new C.d63(r,d),A.bk(B.b6,q,q,q,q,B.o7,q,q,new A.b7(A.m(16),B.Y),q,q,q)),B.at,D.fnf],n),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.fy,q,q,B.ah),q,q,q,D.ahb,B.d0,q,new A.b7(p,new A.aA(o,1.4,B.q,-1)),q)}}
C.YC.prototype={
U(){return new C.ayx(A.a([],x.Y))},
gdX(){return this.c}}
C.adM.prototype={}
C.ayx.prototype={
a_(){this.a1()
this.kQ()},
kQ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Qm(p.c,p.d),$async$kQ)
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
return A.b(C.bzV(r.c,q),$async$kQ)
case 6:j=e
i=J
w=7
return A.b(C.Kg(t.a.c,q),$async$kQ)
case 7:m.push(new l.adM(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d4t(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kQ,v)},
b5K(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Pu(d,e){return this.c9M(0,e)},
c9M(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Pu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).c8(A.e8(new C.d4s(u,e),!0,null,x.y)),$async$Pu)
case 2:t=g
w=3
return A.b(u.kQ(),$async$Pu)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.R(D.aNh)
return A.h(null,v)}})
return A.i($async$Pu,v)},
EW(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$EW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.R(D.aNd)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.afh(s.c,s.d),$async$EW)
case 5:q=e
w=6
return A.b(t.kQ(),$async$EW)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Pu(0,B.d.iC(t.d,new C.d4x(q))),$async$EW)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Qi(p,s.f,r,n,o),$async$EW)
case 10:m=e
w=11
return A.b(t.kQ(),$async$EW)
case 11:if(m&&t.c!=null)t.c.I(x.q).f.R(D.aNh)
case 1:return A.h(u,v)}})
return A.i($async$EW,v)},
OZ(d,e){return this.cl5(0,e)},
cl5(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$OZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d4w(t,e),s,null,!0,!0,x.y),$async$OZ)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a1M(s.c,s.d,e.a),$async$OZ)
case 4:w=5
return A.b(t.kQ(),$async$OZ)
case 5:case 1:return A.h(u,v)}})
return A.i($async$OZ,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bAz(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(E.jN.j(0.6),B.q,1.6)
r=t===1?"space":"spaces"
k.push(A.aE(n,new A.fG(0.7142857142857143,A.p(n,A.v(A.a([D.dlo,B.ac,D.e3k,B.at,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kb.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.bb,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcB2(),n,n,n,n,n,n,!1,B.a8))}w=A.m(22)
v=A.I(E.jN.j(0.85),B.q,1.6)
s=A.aE(n,A.p(n,D.bN0,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jN.j(0.6),B.q,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d4y(d),n,n,n,n,n,n,!1,B.a8)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.jN.j(0.5),B.q,1)
w=A.p(n,A.A(A.a([s,B.bf,D.bw8,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eUL,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h5,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bSw,B.n),n,n,n,Am.LA,D.boz,n,n,n)
if(o.e)k=D.aaE
else k=k.length===0?D.b2W:A.cp(new C.d4z(k))
return A.c8(n,D.ad9,new A.an(B.W,n,B.b_,B.r,A.a([D.aJU,A.bn(!0,A.v(A.a([w,A.D(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bAz(d){var w,v,u=this,t=null,s=u.b5K(d),r=d.c,q=x.p,p=A.a([A.bZ(0,A.f3(B.A,new A.a7(300,420,new C.XT(d.b,s,r,t),t),B.f,B.du),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aE(t,A.p(t,D.bMk,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b2,B.q,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d4q(u,d),t,t,t,t,t,t,!1,B.a8),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.eUl,t,t,t)
v=r===1?"page":"pages"
return A.aE(t,A.v(A.a([new A.fG(0.7142857142857143,new A.an(B.W,t,B.aa,B.r,p,t),t),B.O,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kb.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d4r(u,d),t,t,t,t,t,t,!1,B.a8)}}
C.Jp.prototype={}
C.XT.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dL(D.ys,new C.cDw(m),new C.cDx()),j=m.c,i=D.C2.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.lR:B.bb
v=new C.cDy(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.e0E,28)],x.V)
u=x.p
t=A.a([A.bZ(0,A.b3(l,l,l,new C.bap(j.x,h,l),B.au),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a3,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aW(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bq(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.aht,8,0.85,2.2),v.$4(D.btg,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aht,8,0.85,2.4))
else if(r==="corners")t.push(A.bZ(0,new A.C(D.btc,A.b3(l,l,l,new C.bag(h,l),B.au),l),0,0,0))
r=A.W(D.avS[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.atg,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aP,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bZ(0,new A.C(D.btI,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aFw(l),D.eKk),l,l,l,46,0,l))
return A.p(l,A.bw(D.a9l,new A.an(B.W,l,B.aa,B.r,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.a9l,i,new A.a8(B.ax,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bap.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eJ()
f.dB(11)
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
h=new A.aP(k.r,B.ap,null,null,j)
j.push(new A.b5(v,t))
k=i-0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bF())
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
ar(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bag.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.X(),k=A.M(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bO
for(w=e.a,v=e.b,v=[D.eBA,new A.cH([w,0,-1,1]),new A.cH([0,v,1,-1]),new A.cH([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aP(l,B.ap,null,null,s)
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
ar(d){return!d.b.A(0,this.b)}}
C.u2.prototype={}
C.Ya.prototype={
U(){return new C.ban()}}
C.ban.prototype={
gnS(){var w=this.d
return w===$?this.d=this.a.c:w},
gxW(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ar(new A.bb(w.b,B.b3,B.aN),$.aw())}return v},
gazJ(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ar(new A.bb(w.c,B.b3,B.aN),$.aw())}return v},
gapA(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ar(new A.bb(w.y,B.b3,B.aN),$.aw())}return v},
q(){var w=this,v=w.gxW(0),u=v.T$=$.aw()
v.P$=0
v=w.gazJ()
v.T$=u
v.P$=0
v=w.gapA()
v.T$=u
v.P$=0
w.a2()},
aqb(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jI(s,s,s,new A.x(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cWY(this,f,u),e===u,s,s,s,s))}return A.bY(B.bz,r,B.br,6,8)},
avQ(d){var w=null,v=B.c.j(0.07)
return A.br(w,new A.b4(4,A.m(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.kZ,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gnS(),a0=f.gxW(0),a1=a0.a.a,a2=f.gazJ(),a3=a2.a.a,a4=f.gapA(),a5=d.bal(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a7(190,260,A.f3(B.A,new A.a7(270,370,new C.XT(a5,d,f.a.e,e),e),B.f,B.du),e),e,e,e)
a0=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a0,e,e,e,e,e,2,f.avQ("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cXm(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a4,e,B.am,e,e,e,e)
a2=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a2,e,e,e,e,e,2,f.avQ("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cXn(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a4,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.ys[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b2
q=r.a===q
o=new A.aA(p,q?3:1,B.q,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bP(o,o,o,o),e,e,new A.a8(B.ax,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.az
v.push(A.aE(e,A.v(A.a([p,B.cX,new A.x(t.b,e,new A.G(!0,q,e,e,e,e,10.5,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cXo(f,t),e,e,e,e,e,e,!1,B.a8))}v=A.bY(B.bz,v,B.br,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b6.j(0.35):B.c.j(0.07)
m=new A.aW(14,14)
s=f.d
o=new A.aA((s===$?f.d=f.a.c:s).d===n?B.ez:B.K,2,B.q,-1)
q.push(A.aE(e,A.p(e,A.W(D.avS[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bP(o,o,o,o),new A.bq(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cXp(f,n),e,e,e,e,e,e,!1,B.a8))}q=A.bY(B.bz,q,B.br,8,8)
a4=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a4,e,e,e,e,e,2,f.avQ("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cXq(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a4,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mD,e,e,e)
m=A.a([],w)
for(l=D.C2.gdK(D.C2),l=l.gae(l);l.C();){k=l.gS(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ez:B.b2
g=r.e===i
o=new A.aA(h,g?3:1,B.q,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bP(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.az
m.push(A.aE(e,A.v(A.a([j,B.bB,new A.x(i,e,new A.G(!0,h,e,e,e,e,10,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cXr(f,k),e,e,e,e,e,e,!1,B.a8))}m=A.bY(B.bz,m,B.br,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mD,e,e,e)
k=f.gnS()
return new A.C(new A.Q(0,0,0,a3.f.d),A.bn(!0,new A.cV(new A.aY(0,1/0,0,a1.a.b*0.92),A.cB(A.a([D.fmI,B.ac,d,B.aP,a0,B.S,a2,B.aA,D.fsD,B.O,v,B.aA,D.fmS,B.O,q,B.aA,a4,B.aA,p,B.O,m,B.aA,l,A.kU(e,9,""+B.k.V(f.gnS().f),36,18,new C.cXs(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mD,e,e,e),B.an,f.aqb(D.a2u,f.gnS().r,new C.cXt(f),D.dhl),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mD,e,e,e),B.an,f.aqb(D.a1W,f.gnS().w,new C.cXu(f),D.dhq),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mD,e,e,e),B.an,f.aqb(D.a1R,f.gnS().x,new C.cXw(f),D.diO),B.an,A.iD(e,B.b6,e,B.af,e,new C.cXx(f),e,e,e,D.fhf,f.gnS().z),B.bx,A.bJ(D.flA,new C.cXy(f,a6),A.bk(B.b6,e,e,e,e,B.o7,e,e,new A.b7(A.m(16),B.Y),e,e,e))],w),e,R.ah0,e,e,B.ah,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aFw.prototype={
a5(d,e){var w,v,u,t=new A.aP($.X().r,B.ap,null,null,A.a([],x.v))
t.E(new A.b5(0,0))
w=e.a
t.E(new A.ap(w,0))
v=e.b
t.E(new A.ap(w,v))
t.E(new A.ap(w/2,v-12))
t.E(new A.ap(0,v))
t.E(new A.bF())
u=A.M()
u.saq(D.bT9.av(0,new A.a9(0,0,0+w,0+v)))
d.aP(t,u)},
ar(d){return!1}}
C.bfC.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.X()
w=A.M()
w.saq(D.bSc.av(0,new A.a9(0,0,a3,a4)))
a5.aX(new A.a9(0,0,a3,a4),w)
v=B.k.dw(a2/112)
u=new A.eJ()
u.dB(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cRj[u.aB(9)]
j=u.aB(14)
J.bA(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a9(n,j,n+m,j+l)
h=A.bz(i,B.hc)
g=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
f=A.aq(k,B.c,0.12)
f.toString
e=A.aq(k,B.w,0.45)
e.toString
g.saq(new A.a8(B.a3,B.a7,B.x,A.a([f,k,e],t),a0,a0).av(0,i))
d=g.H()
w.drawRRect(A.eq(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
e.r=E.jN.j(0.55).gp(0)
d=e.H()
w.drawRect(A.c1(new A.a9(h,j,g,j+2)),d)
d.delete()
j=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
j.r=E.jN.j(0.4).gp(0)
d=j.H()
w.drawRect(A.c1(new A.a9(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aB(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.saq(D.bRA.av(0,new A.a9(0,r,a3,q)))
d=p.H()
w.drawRect(A.c1(new A.a9(0,r,a3,q)),d)
d.delete()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.jk
d=p.H()
w.drawRect(A.c1(new A.a9(0,q,a3,q+14)),d)
d.delete()}w=A.M()
w.r=D.b6i.j(0.72).gp(0)
a5.aX(new A.a9(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.M()
a4.saq(new A.bS(B.A,0.5,B.x,a0,0,A.a([D.bcY.j(0.22),B.K],t),a0,a0).av(0,A.bT(new A.u(w,a2),a1)))
a5.ah(new A.u(w,a2),a1,a4)},
ar(d){return!1}}
C.b8B.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aK(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.kK(new A.o(A.aq(D.kb,D.bhk,w/4),o,new A.bP(B.Y,new A.aA(B.w.j(0.12),1,B.q,-1),B.Y,B.Y),B.JH,o,o,B.n),B.bd,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aFy,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aW(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jN.j(0.6),o,o,new A.bq(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.pW,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aWj,u,D.bT7,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dk,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aFw(o),D.eKf),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aSY(p.y,r,G.ir,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.r,o,o,o,o,o,2,A.br(o,B.ey,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ir.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f6Z,!0,B.a4,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ir.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.D(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.w,o,o,o,o,o,2,A.br(o,B.ey,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ir.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.eZb,!0,B.a4,B.zf,B.am,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.f6S,o,o,o),B.at,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ir.j(0.5),o,o,o,o,o,o,o,o,11,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.O,A.A(A.a([A.D(A.p(o,o,B.f,D.Eo.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fo,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.Eo.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.D(A.p(o,o,B.f,D.Eo.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aA],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.ir.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.X8(A.dn(A.a([A.dn(o,o,o,o,o,o,o,o,o,D.f1g,B.a.ap(k,0,1)),A.dn(o,o,o,o,o,o,o,o,o,o,B.a.b0(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.ir.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.v(n,B.F,o,B.e,B.j,0,B.p),B.r,o,B.y,o,o,o,o,B.ah)}s.push(A.D(n,1))
s.push(new A.C(B.ia,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.ir.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.A(A.a([u,A.D(A.p(o,A.bw(B.JH,new A.an(B.W,o,B.aa,B.r,A.a([t,new A.C(D.bsK,A.v(s,B.aj,o,B.e,B.j,0,B.p),o),A.ao(0,A.c_(o,new A.o(o,o,o,o,o,new A.a8(B.a3,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bd),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.JH,v,D.bTF,B.n),o,o,o,o,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.r,l,o)}}
C.aol.prototype={
U(){return new C.aC3(A.a([],x._))},
bp(){return this.r.$0()},
pA(){return this.w.$0()},
gdX(){return this.c}}
C.aC3.prototype={
a_(){var w,v
this.a1()
this.vz()
w=this.a
v=w.c
if(v.length!==0)C.a6n(v,w.e,w.d.w)},
vo(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fXf(r,t.e,!1,s.w,new C.dRL(u),null,s),$async$vo)
case 2:w=3
return A.b(u.vz(),$async$vo)
case 3:return A.h(null,v)}})
return A.i($async$vo,v)},
ZR(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ZR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fXf(r,t.e,!0,s.w,new C.dRK(u),null,s),$async$ZR)
case 2:w=3
return A.b(u.vz(),$async$ZR)
case 3:return A.h(null,v)}})
return A.i($async$ZR,v)},
vz(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vz=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Aj(q.a.c),$async$vz)
case 7:p=e
if(q.c!=null)n=q.e||J.cy(p)
else n=!1
if(n)q.m(new C.dRN(q,p))
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
return A.b(C.G3(q.a.c).cM(0,B.pA),$async$vz)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dRO(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dRP(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vz,v)},
NY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$NY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.R(D.eNS)
w=3
return A.b(C.G3(t.a.c),$async$NY)
case 3:r=e
w=4
return A.b(C.fD_(t.a.c,r),$async$NY)
case 4:q=e
w=5
return A.b(C.G3(t.a.c),$async$NY)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dRJ(t,p))
o=t.c.I(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(null,null,null,q?B.dw:B.cR,null,B.r,null,s,null,B.me,null,null,null,null,null,null,null,null,null,null))
t.a.pA()
case 1:return A.h(u,v)}})
return A.i($async$NY,v)},
Hu(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Hu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i3l(l),$async$Hu)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hy2(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aYA(q,p.e,l,"Each family tree costs $"+B.k.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Hu)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hff(r)
o=Date.now()
n=t.a.c
m=new C.ky(l,r.toUpperCase(),p,!0,B.T,D.BS,new A.S(o,0,!1),0,n,D.tB)
w=5
return A.b(C.a1T(n,m),$async$Hu)
case 5:w=6
return A.b(t.vz(),$async$Hu)
case 6:t.a.bp()
t.a.pA()
if(t.c==null){w=1
break}t.E5(m)
case 1:return A.h(u,v)}})
return A.i($async$Hu,v)},
E5(d){return this.cbO(d)},
cbO(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$E5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Aj(u.a.c),$async$E5)
case 2:n=l.r4(k.dH(f,new C.dRM(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hv(m,new C.aof(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$E5)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a1T(u.a.c,o),$async$E5)
case 6:case 5:w=7
return A.b(u.vz(),$async$E5)
case 7:u.a.pA()
return A.h(null,v)}})
return A.i($async$E5,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tz(p)
if(r.e)return A.av(A.mG(q,p?B.bq:B.bn,q,q,q,q,q,q,q,q),q,q,q)
if(J.cl(r.d)){w=p?B.dX:B.c
v=A.m(15)
u=A.aG(!1,B.a1,!0,q,A.aL(!1,q,!0,A.p(q,D.bGt,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.q,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcaS(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aB,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.F6(A.p(q,A.v(A.a([u,B.aP,t,B.O,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bn,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.e1,A.bJ(D.ftQ,r.gaP9(),A.bk(B.bW,q,q,q,q,q,Al.Ya,q,new A.b7(A.m(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bsG,q,q,1/0),15,B.af,1.05,D.a81,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aB,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b4],v)
if(J.cy(r.d))w.push(A.aH(q,q,q,q,A.W(B.yc,B.aV,q,q,q,q),q,q,q,new C.dRR(r),q,q,q,q,"Sync family trees with database",q))
if(J.cy(r.d))w.push(A.aH(q,q,q,q,A.W(B.y3,B.aV,q,q,q,q),q,q,q,r.gaez(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dp(E.amB,D.fal,r.gaP9(),A.bk(B.bW,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.F6(r.cxX(J.q(r.d,s),o),14,B.af,1,D.a81,q))
B.d.v(w,u)}return A.v(A.a([p,B.aA,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cxX(d,e){var w=null,v=e.a,u=v?B.dX:B.c,t=A.m(14),s=A.I((v?B.dZ:B.bR).j(0.55),B.q,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.ek,10)],x.V),q=A.m(14),p=A.p(w,D.bFx,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.ganv(),m=d.d?"":" \xb7 Public",l=d.y===D.ki?" \xb7 View only":"",k=x.p
l=A.D(A.v(A.a([o,B.bB,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aG(!1,B.a1,!0,w,A.aL(!1,q,!0,new A.C(B.bC,A.A(A.a([p,B.bf,l,A.W(B.Mj,v?B.bq:B.bn,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dRQ(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aof.prototype={
U(){return new C.aC0(A.a([],x._),A.aX(x.N),A.b6e())},
bp(){return this.r.$0()},
gdX(){return this.c}}
C.aC0.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.abu()
w=u.a
v=w.c
if(v.length!==0)C.a6n(v,w.e,w.d.w)},
q(){var w=this.w
w.T$=$.aw()
w.P$=0
this.a2()},
a1M(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1M=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xq("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dRb(r),s,null,!0,!0,x.y),$async$a1M)
case 3:if(e!==!0||t.c==null){w=1
break}t.IY()
t.m(new C.dRc(t,r))
w=4
return A.b(t.vq(),$async$a1M)
case 4:t.a.bp()
t.xq(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a1M,v)},
co0(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.x1$.push(new C.dR6(w,f,d,e))},
aRk(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dm()
u.e2(w,v,0,1)
u.jB(q,q,1,1)
this.w.sp(0,u)},
b7Z(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eH(new Float64Array(16))
q.dY(r)
w=q.Cc()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dm()
t.e2(r,u,0,1)
t.jB(v,v,1,1)
t.e2(-r,-u,0,1)
t.is(0,q)
s.sp(0,t)},
abu(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$abu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Aj(u.a.c),$async$abu)
case 2:t=s.r4(r.dH(e,new C.dQF(u)))
if(t!=null&&u.c!=null)u.m(new C.dQG(u,t))
return A.h(null,v)}})
return A.i($async$abu,v)},
xq(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
vo(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.fXf(o,t,!1,r,new C.dQU(u),q.a,s),$async$vo)
case 2:n=A
m=J
w=3
return A.b(C.G3(u.a.c),$async$vo)
case 3:p=n.r4(m.dH(e,new C.dQV(u)))
if(p!=null&&u.c!=null)u.m(new C.dQW(u,p))
return A.h(null,v)}})
return A.i($async$vo,v)},
IY(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cA(w,0)},
vq(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a1T(t,s),$async$vq)
case 2:return A.h(null,v)}})
return A.i($async$vq,v)},
a0m(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0m=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tK(q,t.a.c)){t.xq("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.i4u(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a0m)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.IY()
t.m(new C.dR5(t,r))
w=4
return A.b(t.vq(),$async$a0m)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0m,v)},
a_4(){return this.cbQ()},
cbQ(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tK(q,t.a.c)){t.xq("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.P(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dR3(r,new C.tz(q.ax.a===B.I)),s,null,!0,!0,x.y),$async$a_4)
case 3:if(e!==!0||t.c==null){w=1
break}t.IY()
t.m(new C.dR4(r,t))
w=4
return A.b(t.vq(),$async$a_4)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_4,v)},
V7(d){return this.bxC(d)},
bxC(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$V7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tK(r,t.a.c)){t.xq("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dQt(t,d),r,null,!0,!0,x.P),$async$V7)
case 3:s=f
if(s==null){w=1
break}t.IY()
t.m(new C.dQu(t,s))
w=4
return A.b(t.vq(),$async$V7)
case 4:case 1:return A.h(u,v)}})
return A.i($async$V7,v)},
a27(d){return this.cA3(d)},
cA3(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a27=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.ca(null,null,!0,null,new C.dRe(u,d,new C.tz(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a27)
case 2:return A.h(null,v)}})
return A.i($async$a27,v)},
c88(d){var w=this,v=w.d
v===$&&A.c()
if(C.tK(v,w.a.c))w.ND(d)
else w.a27(d)},
ah1(d,e){return this.crR(d,e)},
crR(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ah1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.dR8(new C.tz(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ah1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ah1,v)},
Hz(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Hz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.ki?3:5
break
case 3:w=6
return A.b(C.fL9(t.a.c),$async$Hz)
case 6:s=e
o=t.a
r=C.h3U(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ah1(!s,!r),$async$Hz)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bzN(o,t.a.c)){t.xq("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.l_(o,"Cancel","Remove",q.y===D.ki?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Hz)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aNx(t.a.c,t.d.a),$async$Hz)
case 11:t.a.bp()
o=t.c
if(o==null){w=1
break}A.iL(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Hz,v)},
a93(d){return this.bIE(d)},
bIE(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a93=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tK(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b8(s,new C.dQv(p))){o=A.U(s)
p.a=A.r4(new A.cQ(new A.a2(s,new C.dQw(d),o.k("a2<1>")),new C.dQx(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.IY()
t.m(new C.dQy(t,s,d,q))
w=3
return A.b(t.vq(),$async$a93)
case 3:t.xq(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a93,v)},
ND(d){return this.bKJ(d)},
bKJ(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ND=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tK(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a27(d),$async$ND)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.dQC(t,d),r,null,!0,!0,x.P),$async$ND)
case 6:s=f
if(s==null){w=1
break}t.IY()
t.m(new C.dQD(t,s))
w=7
return A.b(t.vq(),$async$ND)
case 7:case 1:return A.h(u,v)}})
return A.i($async$ND,v)},
cyi(){var w=this,v=w.d
v===$&&A.c()
if(!C.tK(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dRd(w))
w.vq()},
XW(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$XW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bzN(n,t.a.c)){t.xq("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.aw()
r=new A.ar(B.as,s)
q=t.d.e
p=A.bl(new A.K(q,t.gc6E(),A.U(q).k("K<1,n>")).c_(0,new C.dQP()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dQQ(t,new C.tz(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$XW)
case 3:o=e
r.T$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.IY()
t.m(new C.dQR(t,p))
w=4
return A.b(t.vq(),$async$XW)
case 4:t.xq("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$XW,v)},
c6F(d){return B.a.i(d.toLowerCase())},
caD(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tK(v,w)
t=r.d
s=C.hUN(t)
C.i3p(q,t.b,u,C.hUM(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tz(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a2(l,new C.dRl(),A.U(l).k("a2<1>")).gM(0)
l=n?B.bX:B.iN
v=A.W(B.Zl,n?B.bq:B.bn,o,o,o,18)
u=x.p
v=A.a([new A.C(B.AK,A.aL(!1,o,!0,new A.C(B.hI,A.A(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,o,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dRm(p,d),o,o,o,o,o,o,o),o),new A.C(B.n3,p.bVt(m),o)],u)
if(p.d.y===D.ki){t=B.rf.j(0.15)
s=A.m(12)
r=A.I(B.rf.j(0.45),B.q,1)
q=C.G1(p.d,p.a.c)
v.push(new A.C(B.xn,A.p(o,A.A(A.a([D.bKI,B.av,A.D(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,12,o,o,B.a5,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.ix,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b4],u)
if(C.tK(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Jl("Undo",B.r3,p.gcyh(),m,o,o))
u.push(new C.Jl("Family Book",D.bAh,p.gcaC(),m,B.t3,o))
if(C.tK(p.d,p.a.c))u.push(new C.Jl("Display settings",B.Bu,p.gcbP(),m,B.aZ,o))
u.push(new C.Jl("Sync",B.y3,p.gaez(),m,o,o))
t=p.d
if(t.y===D.ki||C.bzN(t,p.a.c)){t=p.d.y===D.ki?"Remove shared tree":"Delete tree"
u.push(new C.Jl(t,B.e4,p.gbIO(),m,B.fY,o))}if(C.tK(p.d,p.a.c))u.push(new C.Jl("Add member",B.vv,new C.dRn(p),m,B.bW,o))
v.push(new A.C(R.agE,A.A(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.ganv()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cp(new C.dRo(p,m))
v.push(A.D(n,1))
if(w>0){n=p.f
u=A.W(n?K.Zp:Y.Mk,o,o,o,o,o)
v.push(A.av(A.hc(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dRp(p),o),o,o,o))}return A.c8(o,l,A.bn(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bVt(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fu.j(0.35),B.dk,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.W(B.xW,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a1,!0,m,A.aL(!1,m,!0,A.p(m,D.bNK,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.q,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gaez(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.eXA,m,m,m)
r=r.ganv()
p=n.d.ganv()===1?"member":"members"
o=x.p
p=A.a([s,B.bf,A.D(A.v(A.a([q,B.bB,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a5,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tK(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bKU,m,m,m,n.gclq(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jh:B.mm
r=r?"Private":"Public"
r=A.D(n.atN(q,"Privacy",r,n.a.d.w?n.gcxi():m),1)
q=A.D(n.atN(B.y4,"Tree code",n.d.c,new C.dQE(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.A(A.a([r,B.ab,q,B.ab,A.D(n.atN(D.bC_,"Collaborators",p,n.gbZV()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.ki){s=B.c.j(0.15)
B.d.v(p,A.a([B.O,A.aG(!1,B.a1,!0,A.m(999),A.aL(!1,A.m(999),!0,new A.C(B.fH,A.A(A.a([A.W(B.oF,B.c,m,m,m,14),B.eb,A.d("View only",m,m,m,m,m,m,B.aOs,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ag)],o))}return A.p(m,A.bw(u,new A.an(B.W,m,B.aa,B.r,A.a([t,new A.C(B.F0,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bRE,B.n),m,m,m,m,m,m,m,1/0)},
atN(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a1,!0,A.m(14),A.aL(!1,A.m(14),!0,new A.C(L.ahM,A.v(A.a([A.W(d,B.c,w,w,w,18),B.at,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.uq,A.d(f,w,1,B.a2,w,w,w,P.zj,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)}}
C.bcR.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gam(r)&&s.c.length===0)return B.bH
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bcU(s,t),new A.at(w,v))],x.p)
r=r.gdK(r)
B.d.v(u,r.dt(r,new C.d4D(this),x.l))
r=s.c
B.d.v(u,new A.K(r,new C.d4E(this),A.U(r).k("K<1,r>")))
return new A.C(B.tx,new A.a7(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.Jx.prototype={}
C.Fi.prototype={}
C.bcT.prototype={
gbgs(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aHB.prototype={}
C.bcU.prototype={
bKr(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.X()
v=A.M()
v.r=B.bA.j(0.75).gp(0)
v.c=2
v.d=B.bO
d.bA(new A.u(n,w),new A.u(m,w),v)
u=(n+m)/2
t=new A.aP(q.r,B.ap,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.b5(u,q))
s=w-1.1
r=w-8.8
t.E(new A.pt(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.pt(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bF())
q=A.M()
q.r=B.c.gp(0)
d.ah(new A.u(u,w),9,q)
q=A.M()
q.r=B.bA.gp(0)
d.aP(t,q)},
bKp(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.d4Y())
w=f.b
v=w+(B.d.gL(a0).b-w)/2
u=B.d.b8(a0,new C.d4Z(f))
t=new A.K(a0,new C.d5_(f),A.U(a0).k("K<1,N>")).c_(0,new C.d50()).cI(0,1/0,B.uL)
w=f.a
d.bA(f,new A.u(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.L)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.H()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lQ(m)
i=Math.min(10,l/2)
l=$.X()
h=A.a([],q)
g=new A.aP(l.r,B.ap,null,null,h)
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
a5(d,e){var w,v,u,t,s,r,q,p,o
$.X()
w=A.M()
w.r=B.bW.j(0.75).gp(0)
w.c=2.2
w.b=B.ae
w.d=B.bO
w.e=B.fz
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.L)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bKp(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bKr(d,w,q.a,q.b)}},
ar(d){return d.b!==this.b}}
C.bgz.prototype={
gc4t(){var w=this.c
if(B.a.i(w.y).length!==0)return D.de9
switch(w.c.a){case 0:return D.cJb
case 1:return D.cU5
case 2:return D.d8J}},
gc4w(){var w=this.c,v=C.heE(w.w),u=C.heE(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc4t(),p=t.c,o=I.bAH(p.f),n=t.gc4w(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.aB:B.c,j=A.I(r?B.aB:B.c,B.q,2)
if(o!=null)w=A.t_(B.A,s,B.cl,B.bQ,!1,s,o,!1,s,s)
else{w=A.a([B.d.gL(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a3,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hS(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.ax,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.Fg,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.aB:B.c,B.q,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.f6u,s,s,s),B.f,s,s,new A.o(B.c9,s,w,j,s,s,B.n),s,s,s,s,D.bux,s,s,s),s,s,s,-6,-4,s))}k=r?B.cC:B.c
j=A.m(8)
w=A.I(B.d.gL(q).j(0.35),B.q,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dD,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cC,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bn,s,s,s,s,s,s,s,s,7.5,s,s,B.a5,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aE(s,new A.a7(84,112,A.v(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.at,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.aYc,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.buI,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a8)}}
C.bbY.prototype={
a5(d,e){var w,v,u,t,s,r,q
$.X()
w=A.M()
v=this.b
u=v?B.c:D.b8V
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
ar(d){return d.b!==this.b}}
C.bu9.prototype={
B(d){var w=this,v=null,u=new C.f6w(w),t=w.c,s=t?B.cC:B.c,r=A.m(12),q=u.$3(B.hx,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bF:B.f8,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.y0,"Zoom out",w.e)
return A.aG(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.f,t?B.bF:B.f8,v,v,v,1,v,v,v,v,v,22),u.$3(B.ak6,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dn,v,v,v,B.ag)}}
C.bjV.prototype={
B(d){var w=this,v=null,u=B.bW.j(0.15),t=A.I(B.bW,B.q,2),s=w.e,r=x.p
t=A.aE(v,A.p(v,A.v(A.a([A.W(s?K.Zp:Y.Mk,B.bW,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.f2R,v,v,v)],r),B.m,v,B.bb,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a8)
u=A.a([t,B.an,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.f0R,B.L,v,v)],r)
if(s){t=A.a([B.an],r)
s=w.d
B.d.v(t,new A.K(s,new C.eIO(w),A.U(s).k("K<1,r>")))
B.d.v(u,t)}return new A.a7(84,v,A.v(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.Zd.prototype={
U(){return new C.aAs()},
bp(){return this.Q.$0()},
gdX(){return this.w}}
C.aAs.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a1()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aO()
r.d=new A.ar(new A.bb(t,B.b3,B.aN),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aO()
r.e=new A.ar(new A.bb(t,B.b3,B.aN),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aO()
r.f=new A.ar(new A.bb(t,B.b3,B.aN),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aO()
r.r=new A.ar(new A.bb(t,B.b3,B.aN),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aO()
r.w=new A.ar(new A.bb(t,B.b3,B.aN),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aO()
r.x=new A.ar(new A.bb(t,B.b3,B.aN),s)
t=u?q:v.c
r.y=t==null?D.xA:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hWk(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.T$=$.aw()
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
v.a2()},
P_(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$P_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.h3U(p.y,p.w)
w=3
return A.b(A.lc(t.a.w,B.HE),$async$P_)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aYA(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$P_)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hy3(p.y,p.w)
t.a.bp()
case 5:w=7
return A.b(An.Gc(78,800),$async$P_)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dkQ(t,q))
case 1:return A.h(u,v)}})
return A.i($async$P_,v)},
c4v(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hV(B.o.u(1000*Date.now()),w,D.xA,null,null,null,"","","","","",1,!1,0)
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
s=v.aCy(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).O(s)},
a8F(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a8F=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dkP(r),s,null,!0,!0,x.y),$async$a8F)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a8F,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tz(j),h=l.a.e,g=A.U(h).k("a2<1>"),f=A.B(new A.a2(h,new C.dkZ(l),g),g.k("J.E"))
h=j?B.dX:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bt1,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.aB,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hp(A.aL(!1,k,!0,new A.C(B.lJ,A.W(B.e4,B.os,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbFu(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jt:B.iQ
t=I.bAH(l.as)
if(l.as==null)s=A.W(B.ox,j?B.bq:B.bn,k,k,k,40)
else s=k
s=A.av(A.aE(k,new A.an(B.W,k,B.aa,B.r,A.a([A.hq(u,t,s,k,42),A.ao(0,A.hq(B.bW,k,D.bEC,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc4s(),k,k,k,k,k,k,!1,B.a8),k,k,k)
t=l.d
t===$&&A.c()
t=C.aAu(t,"Full name",B.mj,1,1,i,B.lX)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.S,new C.bgx(i,u,new C.dl_(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bmE],q)
o=l.a.e
B.d.v(p,new A.K(o,new C.dl0(),A.U(o).k("K<1,eR<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bmG],q)
B.d.v(q,new A.K(f,new C.dl2(),A.U(f).k("K<1,eR<n?>>")))
o=A.v(A.a([t,B.an,new C.acd(i,r,"Who is their parent?",p,new C.dl3(l),k,o),B.aA,n,B.an,new C.acd(i,m,"Who is their spouse / partner?",q,new C.dl4(l),k,o)],v),B.aj,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aAu(q,"Birth date",D.aja,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aAu(m,"Birth place",B.ZE,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aAu(n,"Date of death (if deceased)",D.alr,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aAu(p,"Occupation",B.a_H,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.r,w,k),B.aA,s,B.bx,new C.ace(i,"Identity",u,k),B.ac,new C.ace(i,"Family links",o,k),B.ac,new C.ace(i,"Life details",A.v(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aAu(r,"Notes",B.kL,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aAt(i,"Child order",l.cc2(l.at),new C.dl5(l),new C.dl6(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fUD(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dl7(l):k
B.d.v(r,A.a([B.S,new C.aAt(i,"Visible in tree",u,w,new C.dl8(l),k)],v))}r.push(B.S)
w=j?B.jt:B.iQ
u=A.m(14)
t=A.I(j?B.dZ:B.bR,B.q,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iD(k,B.bW,k,B.af,k,new C.dl9(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.agf,k,k,k))
r.push(B.bx)
w=j?B.aQ:B.aB
j=j?B.dZ:B.bR
r.push(A.A(A.a([A.D(A.dV(B.np,new C.dl1(d),A.df(k,k,k,k,k,k,k,k,k,w,k,k,B.cg,k,new A.b7(A.m(14),B.Y),new A.aA(j,1,B.q,-1),k,k,k,k)),1),B.bf,A.D(A.bJ(D.eGG,l.gc4u(),A.bk(B.aV,k,k,0,B.c,k,B.cg,k,new A.b7(A.m(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.at)
return A.ej(B.ha,k,B.af,h,new A.a7(420,k,A.cd(A.v(r,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),k),D.ah7,k,B.agv,new A.b7(g,B.Y),k,k)},
cc2(d){var w=B.o.G(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.G(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.ace.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jt:B.iQ,s=A.m(16)
return A.v(A.a([new A.C(D.ahw,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.dZ:B.bR,B.q,1),s,w,w,B.n),w,w,w,w,B.bk,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bgy.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dX:B.c,r=A.m(12),q=A.I((t?B.dZ:B.bR).j(0.85),B.q,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aQ:B.aB,u,u,u,u,u,u,u,u,14,u,u,B.a5,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.T,!1,u,!0,B.r,u,A.aN(),v.d,u,u,u,u,u,2,A.br(u,B.ey,u,B.va,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bq:B.bn,u,u,u,u,u,u,u,u,u,u,u,B.cv,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.W(v.f,B.bW,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ai,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.acd.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dX:B.c,s=A.m(12),r=A.I((u?B.dZ:B.bR).j(0.85),B.q,1),q=A.W(B.qY,u?B.bq:B.bn,v,v,v,v),p=A.l(v,v,u?B.aQ:B.aB,v,v,v,v,v,v,v,v,14,v,v,B.a5,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dX:B.c
return A.p(v,new A.Df(A.a3v(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,v,v,v,B.cv,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.l9,v,v,v)}}
C.bgx.prototype={
B(d){var w=new C.dla(this)
return A.A(A.a([w.$3(D.YY,"Male",B.N5),B.ab,w.$3(D.aio,"Female",B.MR),B.ab,w.$3(D.xA,"Other",B.n9)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aAt.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jt:B.iQ,r=A.m(14),q=A.I(t?B.dZ:B.bR,B.q,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.aB,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.D(A.v(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bn,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aGE(u,B.y0,w.f,v),B.bp,new C.aGE(u,B.hx,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ei,v,v,v)}}
C.aGE.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bW.j(0.12)
else w=s.c.a?B.dX:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bW
else t=(s.c.a?B.bq:B.bn).j(0.4)
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,new A.a7(36,36,A.W(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ag)}}
C.acf.prototype={
bO6(d){switch(d.a){case 0:return B.bW
case 1:return B.bA
case 2:return B.cU}},
bO7(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aVx(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
zR(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dX:B.c
u=A.m(12)
t=A.I((w?B.dZ:B.bR).j(0.85),B.q,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.W(f,B.bW,p,p,p,18),B.av],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bn,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.D(A.v(A.a([q,B.at,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.aB,p,p,p,p,p,p,p,p,14,p,p,B.P,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.A(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cH,B.xk,p,p,1/0)},
ad3(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jt:B.iQ,s=A.m(16),r=A.I(v?B.dZ:B.bR,B.q,1)
return A.v(A.a([new A.C(D.ahw,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bS,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hji(r,q),o=q.c,n=t.bO6(o),m=I.bAH(q.f),l=t.e.a,k=l?B.dX:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aQ:B.aB,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.ki?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bq:B.bn,s,s,s,s,s,s,s,s,12,s,s,B.a5,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.q,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.hq(u,m,m==null?A.W(B.ox,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.eo,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.q,1)
v=A.av(A.p(s,A.d(t.bO7(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mh,s,s,s),s,s,s)
u=x.p
i=A.a([t.zR("Full name",i,B.mj)],u)
if(p>0)i.push(t.zR("Child order","#"+p,B.MY))
r=A.a([h,B.at,r,B.aP,l,B.S,v,B.bx,t.ad3("Identity",i),B.ac,t.ad3("Life details",A.a([t.zR("Birth date",q.w,D.aja),t.zR("Birth place",q.x,B.ZE),t.zR("Date of death",q.y,D.alr),t.zR("Occupation",q.z,B.a_H)],u)),B.ac,t.ad3("Family links",A.a([t.zR("1. Parent",t.aVx(q.d),B.Fu),t.zR("2. Spouse",t.aVx(q.e),B.MQ)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.ad3("Notes",A.a([t.zR("Notes",q,B.kL)],u))],u))
r.push(B.bx)
r.push(A.bJ(B.IQ,new C.dlk(d),A.bk(B.aV,s,s,s,s,s,B.cg,s,new A.b7(A.m(14),B.Y),s,s,s)))
return A.eG(s,k,new A.cV(B.lw,A.cd(A.v(r,B.aj,s,B.e,B.Q,0,B.p),B.r,s,B.y,s,B.xp,s,s,B.ah),s),s,s,s,B.F3,B.d0,s,new A.b7(j,B.Y),s)}}
C.Jl.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bq:B.bn
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.xs,A.hp(A.aG(!1,B.a1,!0,A.m(8),A.aL(!1,A.m(8),!0,new A.a7(30,30,A.W(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ag),u,v.c,u,u),u)}}
C.aoi.prototype={
eL(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a6().ac())
w=u.c
v=A.U(w).k("K<1,a4<n,@>>")
w=A.B(new A.K(w,new C.c6P(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iV(w,new C.c6Q(),t,x.U))
return s}}
C.aoj.prototype={
U(){return new C.aC2(A.a([],x.bF))},
gdd(){return this.c}}
C.aC2.prototype={
a_(){this.a1()
this.J4()},
J4(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$J4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c6T(t.a.c),$async$J4)
case 3:r=e
w=4
return A.b(C.Aj(t.a.c),$async$J4)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qL(q,new C.dRy(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dRz(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$J4,v)},
xX(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
JN(d,e){return this.cAD(d,e)},
cAD(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$JN=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dRD(q,e))
t=3
w=6
return A.b(d.$0(),$async$JN)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dRE(q))
$.eT.mj()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JN,v)},
WM(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oZ(r,s.c,s.e),$async$WM)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JN(new C.dRv(t),"Preparing download\u2026"),$async$WM)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WM,v)},
WQ(d){return this.bM8(d)},
bM8(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oZ(r,s.c,s.e),$async$WQ)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.JN(new C.dRw(t,d),"Preparing file\u2026"),$async$WQ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WQ,v)},
aeW(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aeW=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wR.c5().Lz(B.PX,B.tC,!0),$async$aeW)
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
o=A.jm(o,0,null)
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
case 6:u=A.Gb()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aeW,v)},
Xq(d){return this.bWm(d)},
bWm(d){var w=0,v=A.j(x.H),u=this
var $async$Xq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.JN(new C.dRx(u,d),"Restoring family trees\u2026"),$async$Xq)
case 2:return A.h(null,v)}})
return A.i($async$Xq,v)},
Xp(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Xp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.aeW(),$async$Xp)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Xq(s),$async$Xp)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xp,v)},
a1c(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1c=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oZ(r,s.c,s.e),$async$a1c)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JN(new C.dRC(t),"Creating QR code\u2026"),$async$a1c)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1c,v)},
a0O(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0O=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Cw()){t.xX("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).c8(A.e8(new C.dRA(),!0,null,x.N)),$async$a0O)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Xq(r),$async$a0O)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0O,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.Aa:B.iN,m=o?D.aeO:B.aQ,l=o?B.aK:B.bR,k=o?B.aQ:B.aB,j=new C.d51(n,m,l,k,o?B.bJ:B.bn)
l=A.aH(p,p,p,p,A.W(B.eA,k,p,p,p,20),p,p,p,new C.dRG(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eF(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.D(C.d4A(!0,B.jj,B.aT,B.aT,q.r?p:q.gcrF(),j,s,"Show restore QR"),1),B.av],u))}s=q.e
r=q.r?p:q.gcnW()
t.push(A.D(C.d4A(!s,B.iU,B.b6,B.by,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.D(C.d4A(!1,B.hz,B.aV,B.bW,q.r?p:q.gbM1(),j,"Photos & books included","Download all trees"),1),B.av],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.D(C.d4A(!1,M.y7,B.aH,B.aM,q.r?p:q.gbWj(),j,s,"Upload backup file"),1))
l=A.a([new C.bcS(v,l,p),B.kt,new C.abw(j,"QR restore",p),B.S,t,B.d5,new C.abw(j,"Backup files",p),B.S,A.A(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kt,new C.abw(j,"One tree",p),B.S],u)
B.d.v(v,J.b6(q.d,new C.dRH(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cB(l,p,B.Y6,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aV.j(0.35),B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dk,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bn(!0,A.p(p,A.A(A.a([K.aMW,B.bf,A.D(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.AR,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c8(w,n,new A.an(B.W,p,B.aa,B.r,l,p),p,!1,!1,p,p)}}
C.d51.prototype={}
C.bcS.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.k1,28)],x.V)
t=A.ao(p,A.W(B.tT,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.r,A.a([t,new A.C(B.a9,A.A(A.a([A.p(p,D.bNi,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.q,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.o8,A.D(A.v(A.a([D.fbj,B.O,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bUP,B.n),p,p,p,p,p,p,p,p)}}
C.abw.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bcQ.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aT.j(0.4):m.c
k=A.I(k,B.q,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aT.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.I(t.j(0.35),B.q,1)
return A.aG(!1,B.a1,!0,q,A.aL(!1,o,!0,A.eA(A.dc(new A.C(E.XM,A.v(A.a([A.p(q,A.W(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qS,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bB,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cv,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)}}
C.bcV.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.q,1),q=B.aV.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,A.eA(new A.C(B.eP,A.A(A.a([A.p(v,D.bMw,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.q,1),p,v,v,B.n),v,v,v,v,B.qS,v,v,v),B.bf,A.D(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.W(B.hz,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)}}
C.Zy.prototype={
U(){return new C.aC1()},
gdd(){return this.c}}
C.aC1.prototype={
a_(){this.a1()
this.a8b()},
a8b(){var w=0,v=A.j(x.H),u=this,t
var $async$a8b=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b0d(u.a.c,B.Cs),$async$a8b)
case 2:t=e
if(u.c!=null)u.m(new C.dRq(u,t))
return A.h(null,v)}})
return A.i($async$a8b,v)},
agi(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$agi=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dRr(q))
t=4
p=A.h5y(q.a.d,B.Cs)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.V(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.aqx(n.e,m,l,B.Cs,p,n.f),$async$agi)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dRs(q))
q.c.I(x.q).f.R(D.eP0)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.aa(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(B.a.ea(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dRt(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agi,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.j6:B.ps,n=p?B.i6:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eF(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fqH,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.pE(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.D(A.p(q,A.v(A.a([B.O,u,B.bx,t,B.O,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.bb,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bv,q,q,q,q,q,q,q,q,q,q,q,B.P,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcnE()
if(u)u=B.Ir
else u=A.W(r.e===!0?B.hy:B.aj9,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a7(1/0,q,A.ex(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ce,q,q,q),t,A.df(q,q,q,q,q,q,q,q,q,B.aV,q,B.fM,q,q,q,new A.aA(B.aV.j(0.55),1,B.q,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.ia,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.az:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.S)
w.push(new A.a7(1/0,q,A.bJ(B.zn,new C.dRu(d),A.bk(B.aV,q,q,q,q,B.fM,q,q,q,q,q,q)),q))
return A.c8(m,o,new A.C(B.a9,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.Zz.prototype={
U(){return new C.bi1(A.yQ(B.xa,B.nw,B.tY))}}
C.bi1.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c8(A.eF(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fiZ,w,w,w,1,w,!0),B.w,A.yP(this.d,B.bQ,new C.dRI(this,d)),w,!1,!1,w,w)}}
C.aX8.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Pr,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lv.prototype={}
C.a5o.prototype={
U(){return new C.bhI(null,null)}}
C.bhI.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.tq,v,1,v,w)
w.e=A.bj(v,B.pz,v,1,v,w)
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
this.bt1()},
B(d){var w,v,u=this,t=B.d.dL(D.a2m,new C.dCS(u),new C.dCT())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cs5(A.c6(new A.h3(A.a([w,v],x.dS)),new C.dCU(u,t),null),!0)}}
C.bhH.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aZO(d,e)
break
case"house":p.lY(d,e,D.cYv)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.geg()
$.X()
t=A.M()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ah(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.m2(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Az(d,e,12)
p.xA(d,e,B.l3,5,14)
break
case"grocery":p.ccM(d,e)
break
case"calculator":p.cct(d,e)
break
case"lumber":p.ccU(d,e)
break
case"kitchen":p.ccP(d,e)
break
case"landscape":p.lY(d,e,D.cZ0)
s=new A.aP($.X().r,B.ap,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.b5(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.cS(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.cS(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.ap(t,w))
s.E(new A.ap(0,w))
s.E(new A.bF())
w=A.M()
w.r=B.fm.j(0.85).gp(0)
d.aP(s,w)
p.Az(d,e,8)
p.xA(d,e,B.iS,4,18)
break
case"plumbing":p.cd2(d,e)
break
case"electrical":p.lY(d,e,D.d82)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.X()
u=A.M()
u.r=B.c.j(q*0.12).gp(0)
d.aX(new A.a9(0,0,0+e.a,0+e.b),u)
p.m2(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.m2(d,e,B.lB.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Az(d,e,10)
break
case"store":p.cdc(d,e)
break
case"paint_remodel":p.ccY(d,e)
break
case"roofing":p.cd4(d,e)
break
case"warehouse":p.cdj(d,e)
break
case"vehicles":p.cdh(d,e)
break
case"farm":p.ccG(d,e)
break
case"restaurant":p.cd3(d,e)
break
case"tools":p.cdf(d,e)
break
case"wallet":p.cdi(d,e)
break
case"concrete":p.ccz(d,e)
break
case"blueprint":p.ccr(d,e)
break
default:p.aZO(d,e)}},
lY(d,e,f){var w,v=new A.a9(0,0,0+e.a,0+e.b)
$.X()
w=A.M()
w.saq(new A.a8(B.ax,B.aC,B.x,f,null,null).av(0,v))
d.aX(v,w)},
m2(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.geg()/2-h
$.X()
w=A.M()
w.b=B.ae
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bT(q,p)
r=w.H()
v.drawArc.apply(v,[A.c1(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
xA(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.geg()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
Az(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.G(s*0.17,0.9)
p=B.k.G(s*0.23,0.85)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aZO(d,e){var w,v=this
v.lY(d,e,D.d6M)
w=v.c
v.m2(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.m2(d,e,B.bK.j(0.45),-w*3.141592653589793*1.4,22)
v.bKl(d,e,B.hU,w)
v.xA(d,e,B.c.j(0.7),6,8)},
bKl(d,e,f,g){var w,v,u,t,s,r,q,p
$.X()
w=A.M()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c1(new A.a9(16,q,t,q+3)),p)
p.delete()}},
ccM(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lY(d,e,D.cff)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.G(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.G(s,2)
$.X()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.cWS[B.o.G(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.m2(d,e,B.c.j(0.35),w,16)
j.xA(d,e,B.iS,5,12)},
cct(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lY(d,e,D.cfm)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.geg()
$.X()
q=A.M()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ah(new A.u(t/2,s/2),r*(0.18+u*0.08),q)
p=A.i1(g,g,g,g,g,B.a4,B.cc,g,B.eh,B.ca)
for(o=0;o<6;++o){n=v+o*0.9
r=D.d_x[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.G(o,2)
p.saV(0,new A.ep(r,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eI()
p.a5(d,new A.u(t*(0.08+B.o.G(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cfo[o]
l=B.k9.j(0.28+0.3*Math.sin(n))
k=B.o.G(o,2)
p.saV(0,new A.ep(m,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eI()
p.a5(d,new A.u(t*(0.55+B.o.G(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.m2(d,e,B.c.j(0.35),w*1.5,14)
h.m2(d,e,B.ez.j(0.55),-v*3.141592653589793*2,8)
h.m2(d,e,B.Ab.j(0.4),r*2.8,22)
h.xA(d,e,B.pi,8,10)
h.Az(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.G(w+o*0.22,0.9)
$.X()
r=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
ccU(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lY(d,e,A_.auO)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bz(new A.a9(20,q,u,q+10),B.hA)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.h1,B.oj,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.eq(p),n)
n.delete()}m.m2(d,e,B.h1.j(0.35),w,15)
m.Az(d,e,8)},
ccP(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lY(d,e,D.cXm)
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
k.delete()}j.m2(d,e,B.bK.j(0.4),-w*3.141592653589793*2.2,11)
j.xA(d,e,B.qx,4,14)},
cd2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lY(d,e,D.cMS)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.G(s,0.12)
$.X()
n=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xA(d,e,B.oq,6,12)
l.m2(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cdc(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lY(d,e,D.csG)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bz(new A.a9(q,14,q+u,22),B.ii)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.f6,B.bK,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.eq(q),o)
o.delete()}n.m2(d,e,B.c.j(0.3),w,16)
n.Az(d,e,8)
n.xA(d,e,B.uR,5,13)},
ccY(d,e){var w,v,u,t,s,r,q,p,o
this.lY(d,e,D.cSw)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.G(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bz(new A.a9(q,p,q+8,p+(18+r*22)),B.hd)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.io,B.dy,B.bK,B.es][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.eq(p),o)
o.delete()}this.m2(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cd4(d,e){var w,v,u,t,s,r,q,p,o
this.lY(d,e,D.cQ5)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.G(v+s*0.12,0.75))
q=B.o.G(s,4)*0.22
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xA(d,e,B.cp,7,11)},
cdj(d,e){var w,v,u,t,s,r,q,p,o,n
this.lY(d,e,D.cvj)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bz(new A.a9(p,o,p+(t-r*8),o+16),B.hA)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.cp,B.aQ,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.eq(o),n)
n.delete()}this.m2(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cdh(d,e){var w,v,u,t,s,r,q,p,o
this.lY(d,e,D.dbN)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.G(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.G(s,2)*0.08)
q=A.bz(new A.a9(r,q,r+28,q+8),B.hA)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.eq(q),o)
o.delete()}this.Az(d,e,6)},
ccG(d,e){var w,v,u,t,s,r,q,p,o,n
this.lY(d,e,D.cW0)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.X()
s=A.M()
s.r=B.lB.j(0.75).gp(0)
d.ah(new A.u(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.hh.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.m2(d,e,B.lB.j(0.35),w,14)},
cd3(d,e){var w,v,u,t,s,r,q,p,o=this
o.lY(d,e,D.cYk)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.co(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c1(r),p)
p.delete()}o.xA(d,e,B.qx,5,16)
o.Az(d,e,7)},
cdf(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lY(d,e,D.d9r)
w=m.c
v=w*3.141592653589793
m.m2(d,e,B.oj.j(0.55),v*3,10)
m.m2(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.oj.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cdi(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lY(d,e,D.dcj)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bz(new A.a9(p,o,p+36,o+22),B.ii)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.iS,B.lB,q).gp(0)
n=p.H()
s.drawRRect(A.eq(o),n)
n.delete()}m.Az(d,e,9)
m.m2(d,e,B.c.j(0.4),w*2.2,12)},
ccz(d,e){var w,v,u,t,s,r,q,p,o,n
this.lY(d,e,D.d2a)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bT(new A.u(v,u),34)
$.X()
s=A.M()
s.b=B.ae
s.c=5
s.r=B.c.j(0.45).gp(0)
d.f4(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.bR.j(0.85).gp(0)
n=o.H()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
ccr(d,e){var w,v,u,t,s,r,q,p
this.lY(d,e,D.cZh)
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
d.aX(new A.a9(0,p,0+v,p+6),u)
this.m2(d,e,B.l3.j(0.45),-t*3.141592653589793*2,11)},
ar(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.are.prototype={
Zt(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aOs(),$async$Zt)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a7E(s),$async$Zt)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$Zt,v)},
aeX(d){return this.cfy(d)},
cfy(d){var w=0,v=A.j(x.H),u=this,t
var $async$aeX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.i3z(d),$async$aeX)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$aeX,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.jt:B.iQ
w=x.p
v=A.a([C.aOQ(!0,B.qp,1/0,B.pH,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c_(new A.bH(B.b0,t,t,new A.C(B.v3,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.P,t,t,!0,t,t,t,t,t,B.avI,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b0,B.b5,B.x,u,t,t),B.n),B.bd))}v.push(A.ao(8,A.A(A.a([A.D(A.dp(D.bGm,D.f7J,new C.cen(this,d),A.bk(B.aV,t,t,t,B.c,t,B.jx,t,t,t,t,B.c8)),1),B.ab,A.D(A.ex(D.bOw,D.fm_,this.gc6C(),A.df(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jx,t,t,D.aWJ,t,t,t,B.c8)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fG(1.7777777777777777,A.aG(!1,B.a1,!0,B.qp,new A.an(B.W,t,B.b_,B.r,v,t),B.aq,s,0,t,t,t,t,t,B.ag),t)}}
C.aJX.prototype={
aQ(){this.aY()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdH())
w.b2$=null
w.a2()}}
C.aRJ.prototype={}
C.aRI.prototype={}
C.aPL.prototype={}
C.Yc.prototype={
U(){return new C.axi()}}
C.axi.prototype={
a_(){var w,v,u=this
u.a1()
u.a.toString
w=new A.bb("",B.b3,B.aN)
v=$.aw()
u.d!==$&&A.aO()
u.d=new A.ar(w,v)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
JE(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.I(x.q).f.R(D.ePv)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).O(new C.aRJ(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.dX:B.c,k=A.m(20),j=A.p(n,D.bOb,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aQ:B.aB,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.D(A.v(A.a([i,B.bB,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bn,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.bf,i,A.aH(n,n,n,n,A.W(B.cA,m?B.bq:B.bn,n,n,n,n),n,n,n,new C.cXK(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bn,n,n,n,n,n,n,n,n,12,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bn,n,n,n,n,n,n,n,n,11,n,n,B.cv,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.h5O(new C.cXL(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aQ:B.aB,n,n,n,n,n,n,n,n,n,n,n,B.a5,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jt:B.iQ
r=A.m(12)
q=A.m(12)
p=m?B.dZ:B.bR
t=A.aM(n,B.T,!0,n,!0,B.r,n,A.aN(),u,n,n,n,n,n,2,A.br(n,new A.b4(4,r,B.dg),n,n,n,n,n,n,!0,new A.b4(4,q,new A.aA(p,1,B.q,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cXM(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,S.Iv,n,n,n,n)
u=m?B.aQ:B.aB
m=m?B.dZ:B.bR
return A.eG(n,l,new A.cV(B.lw,A.cd(A.v(A.a([j,B.aP,i,B.at,w,B.O,v,B.aP,t,B.bx,A.A(A.a([A.D(A.dV(B.de,new C.cXN(d),A.df(n,n,n,n,n,n,n,n,n,u,n,n,B.cg,n,new A.b7(A.m(12),B.Y),new A.aA(m,1,B.q,-1),n,n,n,n)),1),B.av,A.D(A.bJ(D.fme,o.ga1w(),A.bk(B.aV,n,n,n,B.c,n,B.cg,n,new A.b7(A.m(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.r,n,B.y,n,B.AS,n,n,B.ah),n),n,n,n,X.AT,B.d0,n,new A.b7(k,B.Y),n)}}
C.Yb.prototype={
U(){return new C.axh()}}
C.axh.prototype={
a_(){this.a1()
var w=$.aw()
this.d!==$&&A.aO()
this.d=new A.ar(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
JE(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.I(x.q).f.R(D.eNc)
return}v=this.c
v.toString
A.a6(v,!1).O(new C.aRI(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.dX:B.c,n=A.m(20),m=A.p(q,D.bKN,B.f,q,q,new A.o(B.bW.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aB,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.D(A.v(A.a([l,B.bB,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bn,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.bf,l,A.aH(q,q,q,q,A.W(B.cA,p?B.bq:B.bn,q,q,q,q),q,q,q,new C.cXG(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aV.j(0.25),B.q,1)
u=A.W(B.aiW,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.av,A.D(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aB,q,q,q,q,q,q,q,q,12,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bC,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aQ:B.aB,q,q,q,q,q,q,q,q,q,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jt:B.iQ
t=A.m(12)
s=A.m(12)
r=p?B.dZ:B.bR
v=A.aM(q,B.T,!0,q,!0,B.r,q,A.aN(),w,q,q,q,q,q,2,A.br(q,new A.b4(4,t,B.dg),q,q,q,q,q,q,!0,new A.b4(4,s,new A.aA(r,1,B.q,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cXH(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.ku,q,q,q,q)
w=p?B.aQ:B.aB
p=p?B.dZ:B.bR
return A.eG(q,o,new A.cV(B.lw,A.cd(A.v(A.a([m,B.aP,l,B.aA,v,B.bx,A.A(A.a([A.D(A.dV(B.de,new C.cXI(d),A.df(q,q,q,q,q,q,q,q,q,w,q,q,B.cg,q,new A.b7(A.m(12),B.Y),new A.aA(p,1,B.q,-1),q,q,q,q)),1),B.av,A.D(A.bJ(D.fsS,this.ga1w(),A.bk(B.bW,q,q,q,B.c,q,B.cg,q,new A.b7(A.m(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.AS,q,q,B.ah),q),q,q,q,X.AT,B.d0,q,new A.b7(n,B.Y),q)}}
C.XK.prototype={
U(){return new C.aw1()}}
C.aw1.prototype={
a_(){var w,v=this
v.a1()
w=$.aw()
v.d!==$&&A.aO()
v.d=new A.ar(B.as,w)
v.e!==$&&A.aO()
v.e=new A.ar(new A.bb("1",B.b3,B.aN),w)
v.f!==$&&A.aO()
v.f=new A.ar(B.as,w)
v.r!==$&&A.aO()
v.r=new A.ar(B.as,w)},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.T$=$.aw()
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
v.a2()},
gJ_(){var w,v=this.e
v===$&&A.c()
w=A.d5(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gai5(){var w=this.f
w===$&&A.c()
w=A.d5(B.a.i(w.a.a))
return w==null?0:w},
gb1D(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aMT(d){var w,v=B.k.D(this.gJ_()+d,0.25,999999),u=B.k.jS(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.aa(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aK(u,w,"")}t.saV(0,u)
this.m(new C.cvj())},
awq(d,e,f,g){var w=null,v=g!=null?A.W(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jt:B.iQ,s=A.m(14),r=A.m(14)
u=u?B.dZ:B.bR
return A.br(w,new A.b4(4,s,B.dg),w,B.bC,w,w,w,w,!0,new A.b4(4,r,new A.aA(u,1,B.q,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.m(14),B.a9r),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c6D(d,e,f){return this.awq(d,e,f,null)},
JE(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gai5()<=0){s.c.I(x.q).f.R(D.eRm)
return}r=s.c
r.toString
v=s.gJ_()
u=s.gai5()
t=s.gb1D()
A.a6(r,!1).O(new C.aPL(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tz(n),l=n?B.dX:B.c,k=A.m(24),j=x.O,i=A.a([B.aV.j(0.22),B.bW.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bEk,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.q,1),h,o,new A.a8(B.a3,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.D(A.v(A.a([h,B.bB,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.cv,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.bf,h,A.aH(o,o,o,o,A.W(B.cA,n?B.bq:B.bn,o,o,o,o),o,o,o,new C.cvp(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,o,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.T,!0,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.awq(m,"Item name (optional)","Lumber, paint, labor\u2026",B.N3),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,S.Iv,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jt:B.iQ
t=A.m(14)
s=A.I(n?B.dZ:B.bR,B.q,1)
r=A.aH(o,o,o,o,A.W(B.y0,n?B.aQ:B.aB,o,o,o,20),o,o,o,new C.cvq(p),o,o,o,o,o,B.c8)
q=p.e
q===$&&A.c()
q=A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),q,o,o,o,o,o,2,D.bQ2,B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dU,o,o,o,1,o,o,!1,"\u2022",o,new C.cvr(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a7(52,o,q,o),A.aH(o,o,o,o,A.W(B.hx,n?B.aQ:B.aB,o,o,o,20),o,o,o,new C.cvs(p),o,o,o,o,o,B.c8)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,16,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.av,A.D(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),t,o,o,o,o,o,2,p.awq(m,"Amount","0.00",B.hY),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dU,o,o,o,1,o,o,!1,"\u2022",o,new C.cvt(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.B(new A.K(D.cSY,new C.cvu(p,m),t),t.k("ak.E"))
i=A.a([i,B.bx,v,B.aA,h,B.O,s,B.ac,A.bY(B.bz,u,B.br,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.S,A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.c6D(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cvv(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.ku,o,o,o,o)],w))}i.push(B.aP)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bW.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,11,o,o,B.P,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJ_()===B.k.jS(p.gJ_())?B.k.N(p.gJ_()):p.gJ_()
s=p.gb1D()
r=A.Al(p.gai5())
i.push(A.p(o,A.A(A.a([A.D(A.v(A.a([u,B.at,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bBu(p.gJ_()*p.gai5(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a3,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.jd,o,o,o))
i.push(B.bx)
j=A.m(14)
h=n?B.dZ:B.bR
h=A.df(o,o,o,o,o,o,o,o,o,o,o,o,B.cg,o,new A.b7(j,B.Y),new A.aA(h,1,B.q,-1),o,o,o,o)
i.push(A.A(A.a([A.D(A.dV(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,o,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cvw(d),h),1),B.av,A.D(A.dp(D.amu,D.foY,p.ga1w(),A.bk(B.aV,o,o,0,B.c,o,B.cg,o,new A.b7(A.m(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eG(o,l,new A.cV(W.a9O,A.cd(A.v(i,B.aj,o,B.e,B.Q,0,B.p),B.r,o,B.y,o,Ac.qR,o,o,B.ah),o),o,o,o,B.LK,B.d0,o,new A.b7(k,B.Y),o)}}
C.a0g.prototype={
U(){return new C.bu1()}}
C.bu1.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aO()
u.d=new A.ar(new A.bb(w,B.b3,B.aN),v)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.dX:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aQ:B.aB,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aQ:B.aB,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jt:B.iQ
v=A.aM(s,B.T,!0,s,!0,B.r,s,A.aN(),w,s,s,s,s,s,2,A.br(s,new A.b4(4,A.m(12),B.dg),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.f5Z(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.am,s,s,s,s)
u=A.D(A.dV(B.de,new C.f6_(d),s),1)
r=A.bk(B.bW,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eG(s,q,new A.C(B.AS,A.v(A.a([o,B.aA,v,B.aP,A.A(A.a([u,B.av,A.D(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.f60(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d0,s,new A.b7(p,B.Y),s)}}
C.aaz.prototype={
a4(){return"WorksheetFrameStyle."+this.b}}
C.F6.prototype={
U(){return new C.bu_(null,null)}}
C.bu_.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.bnd,null,1,null,v)
w.cH(0)
v.d!==$&&A.aO()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bvm()},
gbwN(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bW,B.aZ],x.O)
case 2:return A.a([B.bt,B.aV,B.aZ],x.O)
case 3:return A.a([B.aT,B.c9,B.jO],x.O)
case 4:return A.a([B.hv,B.bW,B.f7],x.O)
case 0:return A.a([B.aV,B.bW,B.aZ],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.et(A.c6(v,new C.f5X(this,new C.tz(w.ax.a===B.I)),null),null)}}
C.avV.prototype={
U(){return new C.bu0(null,null)}}
C.bu0.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.mZ,null,1,null,v)
w.cH(0)
v.d!==$&&A.aO()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bvn()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.f5Y(this),null)}}
C.btZ.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bz(new A.a9(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aW(w,w))
u=new A.aP($.X().r,B.ap,null,null,A.a([],x.v))
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
d.aP(u,w)
w=A.wP(u)
t=A.a([],x.f5)
w=new A.vm(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.ba(A.jR('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.GZ(w,r)
w.jk()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aQd(d,q,r,o,0,0.2,4.2,0.92)
p.aQd(d,q,r,s,0.52,0.11,3.2,0.58)}},
aQd(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.G(g+h,1)*f,s=A.hrg(e.a.a,e,t,t+f*i,!0),r=A.bzQ(s.gbI().a.getBounds())
$.X()
w=A.M()
w.b=B.ae
w.c=j
w.d=B.bO
w.f=!0
v=this.f
u=k*this.e
w.saq(new A.a8(B.a3,B.a7,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.GH,null).av(0,r))
d.aP(s,w)},
ar(d){return d.b!==this.b||d.d!==this.d}}
C.aM5.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
C.aM6.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
C.tz.prototype={}
C.ard.prototype={
U(){return new C.aDy()},
gdX(){return this.c}}
C.aDy.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.afN()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.KI(w,v)
this.a2()},
afN(){var w=0,v=A.j(x.H),u=this,t,s
var $async$afN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bzY(t.c,t.d.a),$async$afN)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eFY(u,s))
return A.h(null,v)}})
return A.i($async$afN,v)},
Pp(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Pp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eFP(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.KI(t,s),$async$Pp)
case 2:if(u.c!=null)u.m(new C.eFQ(u))
return A.h(null,v)}})
return A.i($async$Pp,v)},
PV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.eFW(t,new C.tz(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$PV)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a7E(q),$async$PV)
case 6:case 5:t.m(new C.eFX(t,r))
w=7
return A.b(t.Pp(),$async$PV)
case 7:case 1:return A.h(u,v)}})
return A.i($async$PV,v)},
V1(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$V1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i3k(r),$async$V1)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eFK(t,new C.qP(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Pp(),$async$V1)
case 4:case 1:return A.h(u,v)}})
return A.i($async$V1,v)},
cbE(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hjf(t,new C.eFO(u),w,v)},
a9X(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bP(new A.aA(v,2.5,B.q,-1),B.Y,B.Y,new A.aA(B.c.j(d?0.85:0.55),2.5,B.q,-1)),D.aWv,w,w,B.n),w,22,w,w,w,w,w,22)},
a92(d){return this.bIB(d)},
bIB(d){var w=0,v=A.j(x.H),u=this
var $async$a92=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eFN(u,d))
w=2
return A.b(u.Pp(),$async$a92)
case 2:return A.h(null,v)}})
return A.i($async$a92,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.bX:B.iN,d=A.m(8),a0=A.W(Q.Zm,f?B.bq:B.bn,g,g,g,16),a1=x.p
a0=A.aL(!1,d,!0,new A.C(B.Fa,A.A(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bn,g,g,g,g,g,g,g,g,g,g,g,B.a5,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eFZ(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b_,B.r,A.a([A.bw(A.m(22),C.aOQ(!0,A.m(22),1/0,B.pH,g,d,1/0),B.aq),A.ao(10,A.dp(D.bIS,D.fra,h.gb_A(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eT,22),new A.ac(-4,B.G,B.bW.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.q,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bw(s,new A.an(B.W,g,B.b_,B.r,A.a([C.aOQ(!0,A.m(16),1/0,B.Mv,g,r.c,1/0),A.c_(g,new A.o(g,g,g,g,g,new A.a8(B.b0,B.b5,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bd),A.ao(g,h.a9X(!0),g,g,8,g,8,g),A.ao(g,A.csQ(h.a9X(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.csQ(h.a9X(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.csQ(h.a9X(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dp(D.bET,D.fl0,h.gb_A(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bRp,B.n),g,g,g,g,B.lJ,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.aB,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b5Q,B.nC,B.h3],u):A.a([B.aZ,B.aV,B.bW],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eT,24)],t)
r=A.m(22)
p=A.ao(g,A.W(B.jz,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.q,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h5,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aA,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.an,C.bBu(h.d.gwC(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.O,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cv,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.D(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.hi.j(0.75),B.q,1.6)
t=A.a([new A.ac(0,B.G,B.aT.j(0.28),B.cJ,14)],t)
j=B.aT.j(0.22)
i=A.m(10)
u=A.p(g,A.bw(r,new A.an(B.W,g,B.aa,B.r,A.a([p,new A.C(D.brP,A.A(A.a([o,B.av,A.aG(!1,B.a1,!0,g,A.aL(!1,n,!0,A.eA(new A.C(Ah.AM,A.v(A.a([A.p(g,D.am3,B.f,g,g,new A.o(j,g,A.I(B.aT.j(0.5),B.q,1),i,g,g,B.n),g,g,g,g,B.ck,g,g,g),B.fZ,D.fap],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcbD(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ag)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.ax,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fG(1.7777777777777777,d,g),B.aP,w,B.O,u,B.bx,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.aB,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b4,A.dp(Ak.a02,D.f8l,h.gbxf(),A.bk(B.aV,g,g,g,B.c,g,B.ix,g,new A.b7(A.m(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.dX:B.c
v=A.m(14)
u=A.I(f?B.dZ:B.bR,B.q,1)
t=A.W(B.ZH,f?B.bq:B.bn,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.aB,g,g,g,g,g,g,g,g,g,g,g,B.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.S,s,B.an,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bn,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.tA,g,g,1/0))}else B.d.v(d,new A.K(w,new C.eG_(h,new C.tz(f)),A.U(w).k("K<1,r>")))
if(h.e)d.push(new A.C(B.AF,A.av(A.mG(g,f?B.bq:B.bn,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c8(g,e,A.bn(!0,A.v(A.a([new A.C(B.AK,a0,g),A.D(A.cd(A.v(d,B.F,g,B.e,B.j,0,B.p),B.r,g,B.y,g,E.xq,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bAQ(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dX:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.aZg,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.W(s?B.hK:B.h9,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bH
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aQ:B.aB,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcQC()
v=A.Al(d.d)
B.d.v(t,A.a([B.at,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bq:B.bn,u,u,u,u,u,u,u,u,12,u,u,B.a5,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.bb,B.Q,0,B.p)}t=A.D(t,1)
k=A.a([B.aV.j(0.14),B.bW.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bBu(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a3,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.h6,u,u,u)
w=x.p
return A.p(u,A.bw(n,new A.DD(A.A(A.a([m,A.D(new A.C(B.ag8,A.A(A.a([l,B.bf,t,B.ab,k,A.aH(u,u,u,u,A.W(B.cA,(r?B.bq:B.bn).j(0.75),u,u,u,20),u,u,u,new C.eFL(this,d),u,u,u,u,u,B.c8)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.aj,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.aY8,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.dc,u,u,u,u)}}
C.acA.prototype={
E0(d){return this.bJY(d)},
bJY(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$E0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oZ(d,o,!1),$async$E0)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
w=4
return A.b(A.bN(Ab.AD,null,x.H),$async$E0)
case 4:s=t.d
w=5
return A.b(C.fC8(!0,o,s),$async$E0)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.G0(r,"ngmy_project_"+A.aK(s.b,q,"_"),!1),$async$E0)
case 6:p=f
w=7
return A.b(A.oY(o,!1),$async$E0)
case 7:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$E0,v)},
Zu(d){return this.crG(d)},
crG(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Zu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oZ(d,s,!1),$async$Zu)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
A.hv(d,new C.ar7(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oY(s,!1),$async$Zu)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zu,v)},
Pq(d){return this.cnR(d)},
cnR(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Pq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(A.hv(d,D.aF1,!0,"NgmyWorksheetProjectScan",x.N),$async$Pq)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bBv(s),$async$Pq)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.R(D.eQv)
w=1
break}q=C.fWU(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dP(p,x.H),$async$Pq)
case 5:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Pq,v)},
Zv(d){return this.czz(d)},
czz(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Zv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(C.bB1(),$async$Zv)
case 3:s=f
if(s==null){w=1
break}r=C.fWU(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dP(q,x.H),$async$Zv)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Zv,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tz(u),s=w.d.d.length,r=u?B.dX:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.k1,36)],x.V),o=x.p
return A.bn(!0,new A.C(B.vb,A.p(v,A.v(A.a([w.cqh(d,t,s),new A.C(D.brd,A.v(A.a([w.b2x(t,"QR restore"),B.S,A.A(A.a([w.aYy(t,!0,B.jj,B.aT,B.aT,new C.eG1(w,d),"Show to scan","QR code"),B.av,w.awr(t,B.iU,B.b6,B.by,new C.eG2(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d5,w.b2x(t,"Backup files"),B.S,A.A(A.a([w.awr(t,B.hz,B.aV,B.bW,new C.eG3(w,d),"Full copy","Backup file"),B.av,w.awr(t,M.y7,B.aH,B.aM,new C.eG4(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
cqh(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eX,B.cZ,B.fu],k):A.a([B.aZ,B.aV,B.bW],k)
w=A.ao(l,A.W(B.tT,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kH,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.q,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aOQ(!0,A.m(13),64,D.bAa,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aPr,l,l,l)
r=C.bBu(r.gwC(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.q,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.r,A.a([w,new A.C(D.brB,A.v(A.a([v,A.A(A.a([s,B.eB,A.D(A.v(A.a([u,B.at,t,B.O,A.A(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fJ,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.W(B.cA,B.c.j(0.85),l,l,l,l),l,l,l,new C.eG0(d),l,l,l,A.nw(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aML,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.ax,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b2x(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bq:B.bn,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aYy(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.aeO:B.aQ
if(e)w=B.aT.j(o?0.45:0.35)
else{w=o?B.dZ:B.bR
w=w.j(o?0.8:1)}w=A.I(w,B.q,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aT.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.q,1)
t=A.p(r,A.W(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qS,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aQ:B.aB,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.D(A.aG(!1,B.a1,!0,r,A.aL(!1,q,!0,A.eA(new A.C(E.XM,A.v(A.a([t,B.ac,u,B.bB,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bq:B.bn,r,r,r,r,r,r,r,r,11,r,r,B.cv,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
awr(d,e,f,g,h,i,j){return this.aYy(d,!1,e,f,g,h,i,j)}}
C.ar7.prototype={
U(){return new C.bjo()}}
C.bjo.prototype={
a_(){this.a1()
this.adH()},
adH(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$adH=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bBw(p.c,p.d),$async$adH)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eFF(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eFG(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adH,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.Aa:B.iN,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.W(B.eA,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eFH(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.D(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zc],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eX,B.cZ,B.fu],s):A.a([B.aZ,B.aV,B.bW],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eT,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.ds,B.L,h,h)
p=C.bBu(p.gwC(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.an,A.A(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fJ,h,h,h)],u),B.m,h,B.bb,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.ax,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.Y5,h,h,1/0)
t=g?D.beZ:B.c
q=A.m(24)
p=A.I(w?B.aT.j(0.4):B.aV.j(0.3),B.q,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dk,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a6E,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.e3F)
else{m=A.m(20)
l=A.I(B.aL,B.q,1)
o.push(A.p(h,A.pE(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bV,h,h,h))}}o.push(B.aP)
n=w?B.aT:B.aV
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aT:B.aV).j(0.35),B.q,1)
k=w?B.MN:B.Nj
k=A.W(k,w?B.aT:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.av,A.D(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a5,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.ix,h,h,h))
return A.c8(h,f,A.bn(!0,A.v(A.a([new A.C(A6.LX,e,h),A.D(A.cd(A.v(A.a([s,B.aP,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tz,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.r,h,B.y,h,E.ahh,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.arc.prototype={
U(){return new C.aDx(A.yQ(B.Lc,B.nw,B.tY))}}
C.aDx.prototype={
q(){this.d.q()
this.a2()},
aKU(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iL(w,d)},
c7t(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.i1i(t)
if(s!=null){this.aKU(s)
return}r=C.hal(t)
if(r!=null)q=A.cU(r,p,0)
else q=!1
if(q){this.aKU(B.a.i(B.a.b0(r,B.a.cJ(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eF(A.a([A.aH(t,t,t,t,A.W(u.f?B.qZ:A2.MT,t,t,t,t,t),t,t,t,new C.eFJ(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Aa,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fkU,t,t,t,1,t,!0),q=A.yP(u.d,B.bQ,u.gc7s()),p=A.m(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.q,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c8(r,B.w,new A.an(B.W,t,B.b_,B.r,A.a([q,p,A.ao(32,A.p(t,D.fjI,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.q,1),v,t,t,B.n),t,t,t,t,B.jd,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aIi.prototype={
a4(){return"_WorksheetTab."+this.b}}
C.Nw.prototype={
U(){return new C.aDz(D.a8J,A.a([],x.D))},
bp(){return this.r.$0()},
gdX(){return this.c}}
C.aDz.prototype={
gcxy(){return J.bCG(this.e,0,new C.eGr())},
a_(){this.a1()
$.aU.c2$.push(this)
this.vn()},
q(){$.aU.hE(this)
this.a2()},
iS(d){if(d===B.fs)this.vn()},
vn(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vn=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Cv(q.a.c).cM(0,B.jU),$async$vn)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eGn(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eGo(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vn,v)},
Ht(d){return this.bGM(d)},
bGL(){return this.Ht(null)},
bGM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ht=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i3m(l,d),$async$Ht)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lf(l,r,q,D.d2n,new A.S(Date.now(),0,!1))
w=4
return A.b(C.KI(t.a.c,p),$async$Ht)
case 4:o=f
w=5
return A.b(t.vn(),$async$Ht)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.R(D.eNG)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gS(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.R(D.ePp)
else n.I(q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.E4(m)
case 1:return A.h(u,v)}})
return A.i($async$Ht,v)},
E4(d){return this.cbp(d)},
cbp(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$E4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hv(s,new C.ard(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$E4)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.KI(u.a.c,t),$async$E4)
case 5:case 4:w=6
return A.b(u.vn(),$async$E4)
case 6:return A.h(null,v)}})
return A.i($async$E4,v)},
va(d){return this.bWo(d)},
bWo(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$va=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bB1(),$async$va)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hv(r,D.aF1,!0,"NgmyWorksheetProjectScan",x.N),$async$va)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bBv(q),$async$va)
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
r.R(A.b2(null,null,null,null,null,B.r,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.fWU(s)
w=15
return A.b(C.KI(t.a.c,p),$async$va)
case 15:o=f
w=16
return A.b(t.vn(),$async$va)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.R(D.ePu)
w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.E4(p)
case 1:return A.h(u,v)}})
return A.i($async$va,v)},
Nf(d){return this.bFr(d)},
bFr(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Nf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ca(null,null,!0,null,new C.eG8(d),s,null,!0,!0,x.y),$async$Nf)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oz(t.a.c,A.a([],x.D)),$async$Nf)
case 6:w=7
return A.b(t.vn(),$async$Nf)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eNL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Nf,v)},
cbC(d){var w=this.c
w.toString
A.bV(B.K,null,new C.eGh(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b38(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jt
else w=B.c
v=A.m(16)
u=A.I(p?B.dZ:B.bR,B.q,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.W(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bS,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aQ:B.aB,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(r,A.v(A.a([s,B.ac,t,B.bB,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bq:B.bn,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.va,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
a__(d,e){return this.cbq(d,e)},
cbq(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a__=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(B.K,null,new C.eGc(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a__)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hjf(r,new C.eGd(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Nh(d,e),$async$a__)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a__,v)},
b0b(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.W(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bS,u,u,u)
if(d)t=B.ay
else t=h.a?B.aQ:B.aB
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.D(A.v(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bq:B.bn,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aG(!1,B.a1,!0,u,A.aL(!1,u,!0,new A.C(B.AR,A.A(A.a([s,B.bf,t,A.W(B.ex,w?B.bq:B.bn,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag)},
cig(d,e,f,g,h,i){return this.b0b(!1,d,e,f,g,h,i)},
Nh(d,e){return this.bFB(d,e)},
bFB(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Nh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.l_(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Nh)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bzK(t.a.c,d.a),$async$Nh)
case 6:w=7
return A.b(t.vn(),$async$Nh)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Nh,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tz(o),m=o?B.bX:B.iN
if(q.f)o=D.b3P
else{w=q.bA2(n)
v=q.bVu(n)
u=q.gbx9()
if(o)t=B.jt
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aP,new C.F6(A.p(p,A.A(A.a([q.azV(N.Mu,"Projects",n,D.a8J),q.azV(B.vm,"Cashier",n,D.aTY),q.azV(B.Fu,"Family Tree",n,D.fT0)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.eo,0.95,u,p),B.bx],r)
w=q.d
if(w===D.a8J){w=J.ad(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aQ:B.aB,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b4,new C.avV(q.gaP3(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aA,q.cii(n)],r))}else{o=q.a
if(w===D.aTY)u.push(new C.anf(o.c,n,p))
else{w=q.r
u.push(new C.aol(o.c,o.d,o.e,o.f,new C.eGu(q),new C.eGv(q),new A.cx(w,x.b4)))}}o=A.cd(A.v(u,B.F,p,B.e,B.j,0,B.p),B.r,p,B.y,p,Ad.LQ,p,p,B.ah)}return A.c8(p,m,A.bn(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bA2(d){var w=null,v=A.m(8),u=d.a,t=A.W(Q.Zm,u?B.bq:B.bn,w,w,w,16)
return A.aL(!1,v,!0,new A.C(B.kI,A.A(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bq:B.bn,w,w,w,w,w,w,w,w,14,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eG5(this),w,w,w,w,w,w,w)},
gbx9(){switch(this.d.a){case 0:return D.a80
case 1:return D.fJM
case 2:return D.a81}},
bVu(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cw,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.bKD,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bf,D.bvS,A.aG(!1,B.a1,!0,w,A.aL(!1,A.m(12),!0,A.p(w,D.bIb,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eG9(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.m(12)
return new C.F6(A.p(w,A.v(A.a([new A.C(O.LI,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.d(A.Al(this.gcxy()),w,w,w,w,w,w,D.f4O,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.v9,B.jd,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.fJL,w)},
azV(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aV:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.q,2):A.I(B.K,B.q,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bq:B.bn
w=A.W(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bq:B.bn
return A.D(A.aG(!1,B.a1,!0,u,A.aL(!1,s,!0,A.dh(u,A.A(A.a([w,B.eb,new A.dq(1,B.cj,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.bb,B.j,0,u,u),u,u,B.cr,new A.o(r,u,p,q,o,u,B.n),B.iv,u,u,u,B.LT,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eGq(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),1)},
cii(d){var w,v,u,t,s,r,q=this,p=null
if(J.cl(q.e)){w=d.a
v=w?B.dX:B.c
u=A.m(15)
t=A.p(p,D.bIg,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eT,28)],x.V),D.bTQ,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.aB,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.F6(A.p(p,A.v(A.a([t,B.d5,s,B.O,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bn,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.e1,A.A(A.a([A.D(q.aQy(B.iU,"Scan QR",new C.eGk(q),d),1),B.av,A.D(q.aQy(M.y7,"Upload file",new C.eGl(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aA,A.bJ(D.fuI,q.gaP3(),A.bk(B.aV,p,p,p,B.c,B.fM,p,p,new A.b7(A.m(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bsF,1.05,D.a80,p)}w=J.b6(q.e,new C.eGm(q,d),x.l)
w=A.B(w,w.$ti.k("ak.E"))
return new C.F6(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bS,1,D.a80,p)},
aQy(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aV.j(0.45),B.q,1)
return A.aG(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(w,A.v(A.a([A.W(d,B.aZ,w,w,w,26),B.O,A.d(e,w,w,w,w,w,w,D.f3f,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ag0,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)},
cih(d,e){var w,v,u=null,t=e.a,s=t?B.dX:B.c,r=A.m(14),q=A.I(t?B.dZ:B.bR,B.q,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.ek,10)],x.V),o=A.m(14),n=t?B.bq:B.bn
n=A.bw(B.UB,new A.fG(1.7777777777777777,C.aOQ(!0,B.ft,1/0,N.Mu,n,d.c,1/0),u),B.aq)
w=x.p
v=A.D(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aQ:B.aB,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.d(""+d.d.length+" budget items \xb7 "+A.Al(d.gwC()),u,u,u,u,u,u,D.f1p,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aG(!1,B.a1,!0,u,A.aL(!1,o,!0,A.v(A.a([n,new A.C(B.bC,A.A(A.a([v,A.aH(u,u,u,u,A.W(Ae.N7,t?B.bq:B.bn,u,u,u,u),u,u,u,new C.eGi(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eGj(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e3,u,u,u,1/0)}}
C.bvN.prototype={}
C.qP.prototype={
af(){var w=this,v=w.c,u=w.d
return A.F(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcQC(){var w,v,u,t,s=this.c
if(s===B.k.jS(s))w=B.o.u(B.k.N(s))
else{v=B.k.aa(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aK(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lf.prototype={
gwC(){return B.d.cI(this.d,0,new C.cuK())},
af(){var w=this,v=w.d,u=A.U(v).k("K<1,a4<n,@>>")
v=A.B(new A.K(v,new C.cuJ(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
bac(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lf(w.a,w.b,v,u,w.e)},
b9U(d){return this.bac(d,null)},
S7(d){return this.bac(null,d)}}
C.H7.prototype={
a4(){return"FamilyGender."+this.b}}
C.hV.prototype={
af(){var w=this
return A.F(["id",w.a,"name",w.b,"gender",C.hf7(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aCy(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hV(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ajD.prototype={
a4(){return"FamilyTreeAccessRole."+this.b}}
C.ky.prototype={
ganv(){var w=this.f
return new A.a2(w,new C.bM7(),A.U(w).k("a2<1>")).gM(0)},
af(){var w=this,v=w.f,u=A.U(v).k("K<1,a4<n,@>>")
v=A.B(new A.K(v,new C.bM6(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hUL(w.y)],x.N,x.z)},
yg(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.ky(w.a,v,u,t,s,r,w.r,q,p,o)},
bab(d,e){var w=null
return this.yg(w,w,d,e,w,w,w,w)},
cGk(d,e,f,g,h,i,j){return this.yg(d,e,f,g,h,i,j,null)},
aCD(d,e){var w=null
return this.yg(w,w,w,d,w,w,e,w)},
cEP(d){var w=null
return this.yg(w,w,w,w,w,w,d,w)},
cFc(d){var w=null
return this.yg(w,w,w,w,w,w,w,d)},
aCp(d){var w=null
return this.yg(w,w,w,w,d,w,w,w)},
cFR(d,e,f){var w=null
return this.yg(w,d,w,e,w,w,f,w)},
cEC(d){var w=null
return this.yg(w,w,d,w,w,w,w,w)},
cFp(d,e){var w=null
return this.yg(d,w,w,w,w,e,w,w)}}
C.cuM.prototype={
a4(){return"WrapAlignment."+this.b}}
C.cuN.prototype={
a4(){return"WrapCrossAlignment."+this.b}}
C.aFB.prototype={}
C.b73.prototype={
bx(d){this.a=d.a
this.b=d.b},
cT(d){var w=new C.b73()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b72.prototype={
gvX(){return!0},
gFy(){return this.z.b<this.b.length},
aS9(d){switch(0){case 0:return d.a.c}},
aRR(d){switch(0){case 0:return d.a.d}},
bP_(d,e){switch(0){case 0:return new A.hI(d,e)}},
bOo(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h0(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iB(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.GS(b4)
switch(0){case 0:v=b5.b
u=new A.kv(0,v,0,1/0)
t=w===B.SA
break}s=A.a([],x.gZ)
r=A.T(x.cM,x.S)
for(b3=b1.z,q=B.d.fJ(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.L)(q),++h){g=q[h]
g.h0(b4,u,!0)
f=b1.aS9(g)
f.toString
e=b1.aRR(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aFB(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aFB(k,j,i))}d=s.length
switch(0){case 0:q=b5.cu(new A.hI(m,l))
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
for(q=B.d.fJ(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.L)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aS9(g)
e=b1.aRR(g)
e.toString
a9=b1.bOo(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bP_(a6,a3+a9)
b0=g.a
g.a=new A.iB(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fX(d){var w,v,u,t,s,r=this
r.lc(d)
w=d.b
w.i0()
v=A.dm()
u=r.a
v.e2(u.a,u.b,0,1)
w.oH(0,v)
for(u=r.z,u=B.d.dq(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].fX(d)
w.n8(0)},
G3(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
i0(){return this.z}}
C.bu2.prototype={}
var z=a.updateTypes(["ay<~>()","R(hV)","R(ky)","~()","R(n8)","a4<n,@>(ky)","H(ky,ky)","n(hV)","ky(a4<@,@>)","R(lf)","R(u2)","n8(a4<@,@>)","u2()","H(lf,lf)","hV(a4<@,@>)","a4<n,@>(hV)","R(qP)","ay<~>(lf)","eR<n?>(hV)","H(hV,hV)","n?(hV)","a4<n,@>(n8)","Zd(Y)","n(n)","acf(Y)","r(oa)","H(n8,n8)","hV(hV)","cL(bv<n,Fi>)","cL(Jx)","~(hV)","H?(hV)","hV()","aj<hV>()","R(u1)","R(Jx)","C(hV)","~(H7)","R(adM)","r(H7,n,a_)","YC(Y)","bv<n,aj<a4<n,@>>>(n,aj<n8>)","~(H)","+count,id,name(H,n,n)(ky)","ky(ky)","Zy(Y)","Zz(Y)","R(lv)","lv()","n(ky)","a0g(Y)","Yc(Y)","Yb(Y)","YA(Y)","YE(Y)","r(qP)","acA(Y)","~(lU)","ay<~>([n?])","N(N,lf)","r(lf)","N(N,qP)","a4<n,@>(qP)","qP(a4<@,@>)","Ya(Y)","S2(Y)","cq(H6)","lf(a4<@,@>)","u1()","n(lf)","a4<n,@>(lf)","n(S)","H(hV)","ky(a4<n,@>)","XK(Y)"])
C.fuN.prototype={
$1(d){return d.a+" "+d.b},
$S:123}
C.fuM.prototype={
bjh(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qG(s,d,B.hl,E.ER),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.V(r!=null&&A.Kv(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bjh(d)},
$S:325}
C.fuO.prototype={
$1(d){return d.b},
$S:123}
C.fDT.prototype={
$1(d){var w=null
return A.eG(w,B.K,new F.OQ(this.a,this.b,w),w,w,0,B.XN,B.d0,w,w,w)},
$S:47}
C.fk2.prototype={
$1(d){return d!=null},
$S:224}
C.fk3.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:224}
C.fk8.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:166}
C.fsw.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fa(d,w,w,w,A.h2(w,B.ro,w,w,w,w,w,w,w,B.dr,w,w,10.5,w,B.ej,w,!0,w,w,w,w),w),u=f?B.ej:B.vh
return new A.nH(D.boh,A.a8S(A.a([new A.fO(130,w,v),new A.yy(1,B.Fn,A.fa(e,w,w,w,A.h2(w,g==null?D.e5X:g,w,w,w,w,w,w,w,B.dr,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.x6,B.lk))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1902}
C.fsv.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.ve(999)
f=A.wI(A.lq(h,A.fa("Cashier",h,h,h,A.h2(h,D.yZ,h,h,h,h,h,h,h,B.dr,h,h,10,h,B.ej,h,!0,h,h,h,h),h),h,new A.kw(D.e5O,h,f,B.hC,h),h,h,D.boL,h))
w=A.wI(A.fa("Debt receipt",h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.dr,h,h,22,h,B.ej,h,!0,h,h,h,h),h))
v=A.wI(A.fa(C.wt(new A.S(Date.now(),0,!1),!0),h,h,h,D.a6J,h))
u=A.ve(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fa(s,h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.dr,h,h,14,h,B.ej,h,!0,h,h,h,h),h)
r=A.fa("Person who owes",h,h,h,D.a6J,h)
q=A.ve(10)
p=x.C
u=A.lq(h,A.yt(A.a([s,new A.fO(h,2,h),r,new A.fO(h,10,h),A.lq(h,A.yt(A.a([A.fa("Amount owed",h,h,h,D.a6J,h),new A.fO(h,2,h),A.fa(A.Al(t.c),h,h,h,A.h2(h,D.yZ,h,h,h,h,h,h,h,B.dr,h,h,20,h,B.ej,h,!0,h,h,h,h),h)],p),B.qL,B.lk),h,new A.kw(B.oT,h,q,B.hC,h),h,h,D.bnY,1/0)],p),B.qL,B.lk),h,new A.kw(E.aGh,h,u,B.hC,h),h,h,D.bpN,1/0)
q=new A.np(D.e5R,0.9,B.kA)
r=A.ve(12)
s=i.c
o=s.$2("Original due",C.wt(t.r,!1))
n=s.$2("Current due",C.wt(t.f,!1))
m=i.d
l=new A.np(m,1.1,B.kA)
k=A.ve(8)
j=i.a
k=A.a([o,n,new A.fO(h,6,h),A.lq(h,A.wI(A.fa(t.gaJp(),h,h,h,A.h2(h,m,h,h,h,h,h,h,h,B.dr,h,h,11,h,B.ej,h,!0,0.5,h,h,h),h)),h,new A.kw(h,new A.pp(l,l,l,l),k,B.hC,h),h,h,D.boT,1/0),new A.fO(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.yZ))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.yZ))
else{n=A.fa("Missed days ("+n+")",h,h,h,A.h2(h,B.ro,h,h,h,h,h,h,h,B.dr,h,h,10.5,h,B.ej,h,!0,h,h,h,h),h)
m=A.U(o).k("K<1,RC>")
o=A.B(new A.K(o,new C.fsu(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fO(h,4,h),n,new A.fO(h,6,h),new C.b72(5,5,new C.b73(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fO(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fO(h,8,h),w,new A.fO(h,3,h),v,new A.fO(h,16,h),u,new A.fO(h,10,h),A.lq(h,A.yt(k,B.x6,B.lk),h,new A.kw(h,new A.pp(q,q,q,q),r,B.hC,h),h,h,B.agc,1/0)],p)
w=j.a
if(w!=null){v=new A.np(B.HQ,1,B.kA)
B.d.v(f,A.a([new A.fO(h,16,h),A.fa("Debtor signature",h,h,h,A.h2(h,B.ro,h,h,h,h,h,h,h,B.dr,h,h,10,h,B.ej,h,!0,h,h,h,h),h),new A.fO(h,6,h),A.lq(h,new A.Ho(w,B.UL,h,h),h,new A.kw(h,new A.pp(v,v,v,v),A.ve(6),B.hC,h),82,h,B.LV,1/0)],p))}f.push(new A.fO(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fa(w,h,h,h,D.eVo,h))
f.push(new A.fO(h,18,h))
f.push(A.wI(A.fa("NGMY.ORG",h,h,h,A.h2(h,D.yZ,h,h,h,h,h,h,h,B.dr,h,h,14,h,B.ej,h,!0,1.8,h,h,h),h)))
return f},
$S:367}
C.fsu.prototype={
$1(d){var w=null,v=new A.np(D.HR,0.7,B.kA),u=A.ve(999)
return A.lq(w,A.fa(C.wt(d,!1),w,w,w,A.h2(w,D.HR,w,w,w,w,w,w,w,B.dr,w,w,9.5,w,B.ej,w,!0,w,w,w,w),w),w,new A.kw(w,new A.pp(v,v,v,v),u,B.hC,w),w,w,D.bu1,w)},
$S:1903}
C.c0a.prototype={
$1(d){var w=null,v=B.bI.j(0.08),u=A.m(999),t=A.I(B.bI.j(0.28),B.q,1)
return A.p(w,A.d(C.wt(d,!1),w,w,w,w,w,w,D.f0V,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eF,w,w,w)},
$S:1904}
C.fEo.prototype={
$1(d){var w=null,v=A.aI(d,B.bT,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bLv,w,w,w,new C.fEl(d),w,w,w,w,w,B.c8),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eG(w,B.K,new A.cV(new A.aY(0,380,0,v.a.b*0.9),A.aG(!1,B.a1,!0,u,new A.C(B.XD,A.v(A.a([new A.bH(B.a7,w,w,t,w),new A.dq(1,B.cj,A.cd(A.v(A.a([new A.et(new C.aXa(r,w),s),B.S,A.A(A.a([A.D(A.ex(B.yi,D.fr6,new C.fEm(s,r,d),A.df(w,w,w,w,w,w,w,w,w,B.c,w,w,B.eZ,w,new A.b7(A.m(14),B.Y),new A.aA(q,1,B.q,-1),w,w,w,w)),1),B.ab,A.D(A.dp(B.a_T,D.fnL,new C.fEn(r,d),A.bk(B.aZ,w,w,w,B.c,w,B.eZ,w,new A.b7(A.m(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.r,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.aB,0,w,w,w,w,w,B.ag),w),w,w,0,Ai.XZ,B.d0,w,w,w)},
$S:47}
C.fEl.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fEm.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.ak$.x.h(0,t.a)
m=m==null?null:m.gb7()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lT(2.5),$async$$0)
case 4:w=3
return A.b(e.hp(B.fW),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eQ(B.dC.gaM(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aK(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.rJ(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fEn.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fz6(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.R(A.b2(null,null,null,null,null,B.r,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fEg.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eG(w,B.aB,A.v(A.a([new A.C(D.bpB,A.A(A.a([A.D(A.d(this.a,w,w,w,w,w,w,B.no,w,w,w),1),A.aH(w,w,w,w,B.li,w,w,w,new C.fEe(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dq(1,B.cj,new A.C(B.fT,A.bw(A.m(14),A.fL(t,B.A,w,w,B.cl,B.du,!1,w,!1,w,w),B.aq),w),w),new A.C(B.Ly,new A.a7(1/0,w,A.dp(B.oI,D.aPR,new C.fEf(t,this.c,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.LL,B.d0,w,new A.b7(v,B.Y),w)},
$S:47}
C.fEe.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fEf.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rJ(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fEs.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eG(w,B.aB,new A.C(D.bpJ,A.v(A.a([A.A(A.a([D.bv2,A.aH(w,w,w,w,B.li,w,w,w,new C.fEq(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.O,new A.et(A.bw(A.m(14),A.p(w,A.b3(w,w,w,new C.b9c(s.ax,w),B.au),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a7(1/0,w,A.dp(B.oI,D.aPR,new C.fEr(t,s,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(v,B.Y),w)},
$S:47}
C.fEq.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fEr.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.ak$.x.h(0,t.a)
n=n==null?null:n.gb7()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lT(2.5),$async$$0)
case 4:w=3
return A.b(e.hp(B.fW),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aK(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.eQ(B.dC.gaM(s))
w=5
return A.b(A.rJ(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fnx.prototype={
$1(d){return d.a===this.a},
$S:257}
C.dDK.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dDv.prototype={
biv(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dX:B.c
s=u.a
w=2
return A.b(A.bV(t,null,new C.dDy(s,q,e),p,!0,!0,!1,B.I5,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dDz(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.biv(d,e)},
$S:1905}
C.dDy.prototype={
$1(d){var w,v=null,u=this.c===B.vP,t=u?D.d8f:D.d4y
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aQ:B.aB,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bn(!0,new A.C(K.agM,A.v(A.a([u,B.at,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bq:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.id(!0,v,v,B.y,L.aN2,new C.dDx(this.a,w,t,d),t.length,v,B.dQ,B.ah,!0)],x.p),B.aj,v,B.e,B.Q,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:28}
C.dDx.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cZ.j(0.14)
else w=t.b.a.d.a?B.M:B.aQ
v=A.m(14)
if(q)u=B.cZ
else u=(t.b.a.d.a?B.bq:B.bn).j(0.16)
u=A.I(u,B.q,q?1.6:1)
return A.aL(!1,p,!0,A.p(B.A,C.aX9(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dDw(t.d,r),s,s,s,s,s,s,s)},
$S:189}
C.dDw.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dDz.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dDt.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:91}
C.dDu.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cJ(B.cr,e,v)
return new A.cY(e,!1,A.ij(B.A,A.av(A.aG(!1,B.a1,!0,v,new A.e0(new C.dDs(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ag),v,v,v),v,new A.bf(t,new A.bo(0.96,1,u),u.k("bf<bI.T>"))),v)},
$S:31}
C.dDs.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bT,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dX:B.c,f=A.m(14),e=A.I((h?B.bq:B.bn).j(0.16),B.q,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.D(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aL(!1,v,!0,new A.C(B.eo,A.W(B.cA,i.a.d.a?B.bq:B.bn,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dDd(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aR4("Name")
r=l.a
q=r.d==null?k:new C.dDe(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bm:B.lD
n=A.I(B.cZ.j(0.35),B.q,1)
m=r.d
t=A.aM(k,B.T,h,k,!0,B.r,k,A.aN(),w,k,k,k,k,k,2,s.ba4(new A.C(B.fx,A.aL(!1,p,!0,A.p(B.A,C.aX9(m==null?"\ud83d\udc64":A.ftk(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.ck,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.ku,k,B.a6v,k,k)
v=A.a([v,B.ac,t,B.O,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11.5,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.an,A.A(A.a([A.D(i.aRH("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dDf(r,a0),r.d===B.vP),1),B.ab,A.D(i.aRH("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dDk(r,a0),r.d===B.a3s),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.O,new A.bH(B.a3,k,k,A.hc(D.bJU,D.fpx,new C.dDl(r,l.e,a0),A.fv(k,k,k,k,k,k,k,k,k,k,k,B.cZ,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c8)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.u5(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.f,k,k,k,k,k,2,i.aR5("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ai,k,k,s,k,k,B.dU,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.am,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.M:B.aQ
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.bq:B.bn).j(0.22),B.q,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wt(r.a,!1)
v.push(A.aG(!1,B.a1,!0,q,A.aL(!1,p,!0,A.p(k,A.A(A.a([A.D(A.v(A.a([t,B.bB,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bGM],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bk,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dDm(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ag))
if(!h)B.d.v(v,A.a([B.O,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.r,k,k,k,k,k,2,i.aR4("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.am,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aZx(r.b.length!==0,B.mj,new C.dDn(r,i,a0),new C.dDo(r,a0),"Upload from gallery","ID photo"))
v.push(i.aZx(r.c.length!==0,D.bA8,new C.dDp(r,i,d,a0),new C.dDq(r,a0),"Camera or gallery","Selfie"))
v.push(B.O)
t=l.w
v.push(new Ag.a6L("Signature (optional)",t,new C.dDr(a0),new C.dDg(a0,t),new C.dDh(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.bq:B.bn
s=(i?B.bq:B.bn).j(0.28)
s=A.D(A.dV(E.aPK,new C.dDi(d),A.df(k,k,k,k,k,k,k,k,k,t,k,k,B.v4,k,new A.b7(A.m(10),B.Y),new A.aA(s,1,B.q,-1),k,k,k,k)),1)
t=A.bk(B.cZ,k,k,k,B.c,k,B.v4,k,new A.b7(A.m(10),B.Y),k,k,k)
v.push(A.A(A.a([s,B.ab,A.D(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.ut,k,k,k),new C.dDj(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cd(A.v(v,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.vd,B.jd,k,k,360)},
$S:197}
C.dDd.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dDe.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dDf.prototype={
$0(){return this.b.$1(new C.dDc(this.a))},
$S:0}
C.dDc.prototype={
$0(){var w=this.a
w.d=B.vP
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dDk.prototype={
$0(){return this.b.$1(new C.dDb(this.a))},
$S:0}
C.dDb.prototype={
$0(){var w=this.a
w.d=B.a3s
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dDl.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dDm.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wx(null,u.b,A.c0(2020,1,1,0,0,0,0,0),null,s,A.c0(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dDa(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dDa.prototype={
$0(){var w=this.b
return this.a.a=A.c0(w.gcj(),w.gce(),w.gct(),0,0,0,0,0)},
$S:0}
C.dDn.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.OO(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dD9(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dD9.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dDo.prototype={
$0(){return this.b.$1(new C.dD8(this.a))},
$S:0}
C.dD8.prototype={
$0(){return this.a.b=""},
$S:0}
C.dDp.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dX:B.c
w=3
return A.b(A.bV(q,null,new C.dD6(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.OO(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dD7(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dD6.prototype={
$1(d){var w=null
return A.bn(!0,A.v(A.a([A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.alV,w,w,w,w,new C.dD0(d),!1,w,w,w,w,w,w,w,D.fg9,w,w,w),A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.alT,w,w,w,w,new C.dD1(d),!1,w,w,w,w,w,w,w,D.fmP,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.af,!0,!0)},
$S:28}
C.dD0.prototype={
$0(){A.a6(this.a,!1).O("camera")
return null},
$S:0}
C.dD1.prototype={
$0(){A.a6(this.a,!1).O("gallery")
return null},
$S:0}
C.dD7.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dDq.prototype={
$0(){return this.b.$1(new C.dD5(this.a))},
$S:0}
C.dD5.prototype={
$0(){return this.a.c=""},
$S:0}
C.dDr.prototype={
$0(){return this.a.$1(new C.dD4())},
$S:0}
C.dD4.prototype={
$0(){},
$S:0}
C.dDg.prototype={
$0(){return this.a.$1(new C.dD3(this.b))},
$S:0}
C.dD3.prototype={
$0(){return B.d.a9(this.a)},
$S:0}
C.dDh.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.agH(u.a,null,null,new C.dD2(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dD2.prototype={
$4(d,e,f,g){this.a.$1(new C.dD_(this.b,d))},
$S:385}
C.dD_.prototype={
$0(){var w=this.a
B.d.a9(w)
B.d.v(w,this.b)},
$S:0}
C.dDi.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dDj.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.R(D.eRl)
return}if(w.a.d==null){w.c.I(x.q).f.R(D.eOh)
return}A.a6(w.c,!1).O(!0)},
$S:0}
C.dDN.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:91}
C.dDO.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dX:B.c,n=A.m(14),m=A.I((p?B.bq:B.bn).j(0.16),B.q,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aQ:B.aB,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Al(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bq:B.bn,r,r,r,r,r,r,r,r,13,r,r,B.a5,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.yI(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.yI(r).length>0?B.bI:B.cZ,r,r,r,r,r,r,r,r,12,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bq:B.bn
t=(q?B.bq:B.bn).j(0.28)
s=x.p
return new A.cY(e,!1,A.av(A.aG(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.O,v,u,B.aA,A.A(A.a([A.D(A.dV(B.np,new C.dDL(d),A.df(r,r,r,r,r,r,r,r,r,w,r,r,B.jx,r,new A.b7(A.m(10),B.Y),new A.aA(t,1,B.q,-1),r,r,r,r)),1),B.ab,A.D(A.bJ(D.fnd,new C.dDM(d),A.bk(B.cZ,r,r,r,B.c,r,B.jx,r,new A.b7(A.m(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.AU,O.LI,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ag),r,r,r),r)},
$S:31}
C.dDL.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dDM.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dDH.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dDI(r),p=r.a.d.a,o=p?B.dX:B.c,n=A.m(14),m=A.I((p?B.bq:B.bn).j(0.14),B.q,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.D(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aQ:B.aB,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Al(l.c),s,s,s,s,s,s,D.f2n,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.ix((r.a.d.a?B.bq:B.bn).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.ZH,"View receipt",new C.dDA(r,d,l))
u=l.x!=null
t=u?B.r3:B.pJ
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bpG,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dDB(r,d,l)),q.$3$icon$label$onTap(B.Ba,"Edit",new C.dDC(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mj,"View / download ID",new C.dDD(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bA7,"View / download selfie",new C.dDE(r,d,l)))
if(l.gaEf())p.push(q.$3$icon$label$onTap(A5.a_K,"View / download signature",new C.dDF(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bI,B.e4,"Delete",new C.dDG(r,d,l)))
p.push(B.at)
return A.bn(!0,new A.C(B.v9,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:28}
C.dDI.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aQ:B.aB
else w=d
return A.aL(!1,v,!0,new A.C(B.eP,A.A(A.a([A.W(e,w,v,v,v,20),B.bf,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1906}
C.dDA.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fEk(w,this.c)},
$S:0}
C.dDB.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.Rt(this.c)},
$S:0}
C.dDC.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.CF(this.c)},
$S:0}
C.dDD.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bBU(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dDE.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bBU(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dDF.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fEp(w,this.c)},
$S:0}
C.dDG.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.Ns(0,this.c)},
$S:0}
C.dDP.prototype={
$1(d){return d.x==null},
$S:257}
C.dDQ.prototype={
$1(d){return d.x!=null},
$S:257}
C.dDR.prototype={
$2(d,e){return d+e.c},
$S:1907}
C.dDS.prototype={
$0(){return this.a.bxE()},
$S:0}
C.dDJ.prototype={
$0(){return this.a.adU(this.b)},
$S:0}
C.fo1.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fo2.prototype={
$0(){return B.d.gL(D.a0X)},
$S:z+68}
C.d3z.prototype={
$0(){var w=this.a
return w.m(new C.d3x(w,this.b))},
$S:0}
C.d3x.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d3y.prototype={
$0(){},
$S:0}
C.d3A.prototype={
$0(){var w=this.a.gbWc()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.fq4.prototype={
$1(d){return C.h_Y(A.a1(d,x.N,x.z))},
$S:z+11}
C.fq5.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fq6.prototype={
$2(d,e){var w=A.c7(d.a,null),v=A.c7(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+26}
C.fCZ.prototype={
$1(d){return d.af()},
$S:z+21}
C.fL2.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fno.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bM2.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f_(e,v)?v:null},
$S:1908}
C.fDx.prototype={
$1(d){var w=this
return new C.YC(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d4e.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d4d(w,d))},
$S:z+66}
C.d4d.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d42.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cy(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d4_.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d3B.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d3C.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d43.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d3K.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.dX:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ej(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.d3I(d),w,w),A.bJ(B.w9,new C.d3J(d),A.bk(B.mO,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.d3I.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d3J.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d3L.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d40.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d41.prototype={
$0(){return B.d.gL(D.ys)},
$S:z+12}
C.d3G.prototype={
$1(d){var w=this.a,v=w.y,u=w.gxW(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.S2(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d3H.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d3M.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Ya(v,u,J.ad(w.d),null)},
$S:z+64}
C.d3N.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d4c.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aE(s,new C.XT(r.y,r.gxW(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d4a(r),s,s,s,s,s,s,!1,B.a8)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b8B(v,e,w,u,t,r.gbNv(),C.hf6(r.y.Q),r.gxW(0),s)
w=t}return A.c6(q,new C.d4b(r,e),new A.C(B.XS,w,s))},
$S:1909}
C.d4b.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd_(t).ay){t=this.b
u=x.cy.a(B.d.gd_(u.f.f)).gut(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dm()
t=u.a
t.$flags&2&&A.ai(t)
t[11]=0.0013
u.fz(v*3.141592653589793*0.5)
return A.fs(B.a3,A.dc(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.d4a.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFj(B.py,B.iw)},
$S:0}
C.d3X.prototype={
$0(){var w=this.a
return w.m(new C.d3W(w))},
$S:0}
C.d3W.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d3Y.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).O(null)
return null},
$S:0}
C.d3D.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jN.j(0.5),r=x.p,q=A.a([D.feN,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cl(p.d)?"Write this book":"Write a new book"
q.push(p.Y9(d,B.dW,w,J.cl(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Y9(d,L.ajK,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cy(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cH,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kb.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cH,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kb.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Y9(d,A0.akV,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Y9(d,B.pQ,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Y9(d,B.pQ,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eG(u,E.Al,A.bn(!0,new A.C(A4.AP,A.v(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.ahb,B.d0,u,new A.b7(t,new A.aA(s,1.4,B.q,-1)),u)},
$S:47}
C.d3Z.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.d3Q.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cy(w.d)
return new C.YE(v,J.cy(w.d),w.r+1,null)},
$S:z+54}
C.d3R.prototype={
$1(d){var w=null
return A.og(!1,A.ej(w,w,w,E.Al,new A.kb(this.a,new C.d3P(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:314}
C.d3P.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a6b,B.o8,A.D(A.d(e,w,w,w,w,w,w,B.iH,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:738}
C.d3S.prototype={
$0(){return this.a.a=!1},
$S:51}
C.d3T.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:201}
C.d3U.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d3V.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Au(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.QS(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d3O(s,t))
w=4
return A.b(s.kQ(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3O.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d45.prototype={
$1(d){var w=null
return A.og(!1,A.ej(w,w,w,E.Al,new A.kb(this.a,new C.d44(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:314}
C.d44.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a6b,B.o8,A.D(A.d(e,w,w,w,w,w,w,B.iH,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:738}
C.d46.prototype={
$0(){return this.a.a=!1},
$S:51}
C.d47.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:201}
C.d48.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:201}
C.d49.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Au(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kQ(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3E.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bfB(B.py,V.Ll)},
$S:0}
C.d3F.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFj(B.py,V.Ll)},
$S:0}
C.d5Z.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d6_.prototype={
$1(d){var w=this.a
return w.m(new C.d5Y(w))},
$S:9}
C.d5Y.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d60.prototype={
$1(d){var w=this.a
return w.m(new C.d5X(w))},
$S:9}
C.d5X.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d61.prototype={
$1(d){var w=this.a
return w.m(new C.d5W(w))},
$S:9}
C.d5W.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d62.prototype={
$0(){var w=this.a
return w.m(new C.d5V(w,this.b))},
$S:0}
C.d5V.prototype={
$0(){var w=this.b
this.a.d.saV(0,w)
return w},
$S:0}
C.d63.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga0P()
A.a6(this.b,!1).O(new A.bn7(w,v))},
$S:0}
C.d4t.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d4s.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.YA(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d4x.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d4w.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b5K(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hB,v,v,v)
return A.ej(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.d4u(d),v,v),A.bJ(B.w9,new C.d4v(d),A.bk(B.mO,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Al,w,v,v,v,v,D.fdH,v)},
$S:19}
C.d4u.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d4v.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d4y.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d4z.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.cd(A.bY(B.bz,r,B.br,18,14),B.r,t,B.y,t,D.bqB,t,t,B.ah)},
$S:298}
C.d4r.prototype={
$0(){return this.a.Pu(0,this.b)},
$S:0}
C.d4q.prototype={
$0(){return this.a.OZ(0,this.b)},
$S:0}
C.cDw.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cDx.prototype={
$0(){return B.d.gL(D.ys)},
$S:z+12}
C.cDy.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bZ(0,new A.C(d,A.c_(w,new A.o(w,w,A.I(this.a.j(f),B.q,g),v,w,w,B.n),B.bd),w),0,0,0)},
$S:1911}
C.cWY.prototype={
$1(d){return this.a.m(new C.cWX(this.b,this.c))},
$S:9}
C.cWX.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cXm.prototype={
$1(d){return this.a.m(new C.cX9())},
$S:2}
C.cX9.prototype={
$0(){},
$S:0}
C.cXn.prototype={
$1(d){return this.a.m(new C.cX8())},
$S:2}
C.cX8.prototype={
$0(){},
$S:0}
C.cXo.prototype={
$0(){var w=this.a
return w.m(new C.cX7(w,this.b))},
$S:0}
C.cX7.prototype={
$0(){var w=this.a
return w.d=w.gnS().Fe(this.b.a)},
$S:0}
C.cXp.prototype={
$0(){var w=this.a
return w.m(new C.cX6(w,this.b))},
$S:0}
C.cX6.prototype={
$0(){var w=this.a
return w.d=w.gnS().cE8(this.b)},
$S:0}
C.cXq.prototype={
$1(d){return this.a.m(new C.cX5())},
$S:2}
C.cX5.prototype={
$0(){},
$S:0}
C.cXr.prototype={
$0(){var w=this.a
return w.m(new C.cX4(w,this.b))},
$S:0}
C.cX4.prototype={
$0(){var w=this.a
return w.d=w.gnS().cEd(this.b.a)},
$S:0}
C.cXs.prototype={
$1(d){var w=this.a
return w.m(new C.cXh(w,d))},
$S:6}
C.cXh.prototype={
$0(){var w=this.a
return w.d=w.gnS().cF7(this.b)},
$S:0}
C.cXt.prototype={
$1(d){var w=this.a
return w.d=w.gnS().aCs(d)},
$S:2}
C.cXu.prototype={
$1(d){var w=this.a
return w.d=w.gnS().cEg(d)},
$S:2}
C.cXw.prototype={
$1(d){var w=this.a
return w.d=w.gnS().cF5(d)},
$S:2}
C.cXx.prototype={
$1(d){var w=this.a
return w.m(new C.cXg(w,d))},
$S:9}
C.cXg.prototype={
$0(){var w=this.a
return w.d=w.gnS().cEX(this.b)},
$S:0}
C.cXy.prototype={
$0(){var w=this.a,v=w.gnS(),u=B.a.i(w.gxW(0).a.a),t=B.a.i(w.gazJ().a.a)
u=v.bal(B.a.i(w.gapA().a.a),t,u)
A.a6(this.b,!1).O(u)
return null},
$S:0}
C.dRL.prototype={
$0(){var w=this.a
w.vz()
w.a.bp()
w.a.pA()},
$S:0}
C.dRK.prototype={
$0(){var w=this.a
w.vz()
w.a.bp()
w.a.pA()},
$S:0}
C.dRN.prototype={
$0(){var w=this,v=w.b
if(J.cy(v)||J.cl(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dRO.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dRP.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dRJ.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dRM.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dRR.prototype={
$0(){this.a.NY()
return null},
$S:0}
C.dRQ.prototype={
$0(){return this.a.E5(this.b)},
$S:0}
C.dRb.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.de,w,w,!0,w,w,new C.dR9(d),w,w),r=A.bk(B.bW,w,w,w,w,w,w,w,w,w,w,w)
return A.ej(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dRa(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.dR9.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dRa.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dRc.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cEC(this.b)},
$S:0}
C.dR6.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aRk(w.b,w.c,w.d)},
$S:8}
C.dQF.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dQG.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dQU.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.G3(t.a.c),$async$$0)
case 2:s=r.r4(q.dH(e,new C.dQS(t)))
if(s!=null&&t.c!=null)t.m(new C.dQT(t,s))
t.a.bp()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQS.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dQT.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dQV.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dQW.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dR5.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cFp(C.hff(w),w)},
$S:0}
C.dR3.prototype={
$1(d){return new A.e0(new C.dR2(this.a,this.b),null)},
$S:20}
C.dR2.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dX:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.aly,v,v,v,p>0?new C.dQZ(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aP,A.A(A.a([o,A.D(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.am7,v,v,v,new C.dR_(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.ej(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dR0(d),v,v),A.bJ(B.p4,new C.dR1(d),A.bk(B.bW,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:169}
C.dQZ.prototype={
$0(){return this.b.$1(new C.dQY(this.a))},
$S:0}
C.dQY.prototype={
$0(){return--this.a.a},
$S:0}
C.dR_.prototype={
$0(){return this.b.$1(new C.dQX(this.a))},
$S:0}
C.dQX.prototype={
$0(){return++this.a.a},
$S:0}
C.dR0.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dR1.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dR4.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cFc(this.a.a)
w.r.a9(0)},
$S:0}
C.dQt.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.agO(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.h9_(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dQu.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aCp(w)},
$S:0}
C.dRe.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.acf(this.b,w,this.c,null)},
$S:z+24}
C.dR8.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dX:B.c,t=A.m(20),s=A.W(B.le,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.Q,0,B.p)
return A.ej(A.a([A.bJ(D.fok,new C.dR7(d),A.bk(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.bb,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:19}
C.dR7.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dQv.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dQw.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dQx.prototype={
$1(d){return d.a},
$S:z+7}
C.dQy.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.L)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hV(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aCp(w)},
$S:0}
C.dQC.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.agO(q)
w=A.U(q).k("a2<1>")
q=A.B(new A.a2(q,new C.dQA(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.h9_(v.e,null,r,v.f,v.r,new C.dQB(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dQB.prototype={
$0(){return this.a.a93(this.b)},
$S:0}
C.dQA.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dQD.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("K<1,hV>")
w=A.B(new A.K(w,new C.dQz(this.b),v),v.k("ak.E"))
u.d=t.aCp(w)},
$S:0}
C.dQz.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dRd.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dQP.prototype={
$1(d){return d.length!==0},
$S:3}
C.dQQ.prototype={
$1(d){var w=this
return new A.e0(new C.dQO(w.a,w.b,w.c,w.d),null)},
$S:20}
C.dQO.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dX:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.K(o,new C.dQK(u,e,o),A.U(o).k("K<1,r>")))
p.push(B.O)
u=w.d
p.push(A.aM(v,B.T,!1,v,!0,B.r,v,A.aN(),u,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(12),B.dg),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ai,v,v,v,v,v,B.lY,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.am,v,v,v,v))
p=A.v(p,B.aj,v,B.e,B.Q,0,B.p)
t=w.a
return A.ej(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dQL(d),v,v),A.bJ(B.IS,new C.dQM(t,u,o,e),A.bk(B.bW,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.fbU,new C.dQN(t,u,o,d),A.bk(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:169}
C.dQK.prototype={
$1(d){var w=null
return A.dN(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aQ:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bNq,w,w,w,new C.dQJ(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1912}
C.dQJ.prototype={
$0(){return this.a.$1(new C.dQH(this.b,this.c))},
$S:0}
C.dQH.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dQL.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dQM.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dQI(w.c,u))
v.bN(0,B.c3)}},
$S:0}
C.dQI.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dQN.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).O(!0)},
$S:0}
C.dQR.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cFR(this.b,D.tB,C.G1(v,w.a.c))},
$S:0}
C.dRl.prototype={
$1(d){return d.as},
$S:z+1}
C.dRm.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iL(this.b,w)},
$S:0}
C.dRn.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.i33(v)
return w.V7(v==null?null:v.a)},
$S:0}
C.dRo.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hGw(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcn(k)){k=A.aQ(1/0,e.a,e.b)
s=A.aQ(1/0,e.c,e.d)
l.co0(new A.at(u,t),v.gbgs(),new A.at(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cLo:D.cJR
q=A.I(s?B.dp:D.b9c,B.q,1)
p=A.m(22)
o=A.bZ(0,A.b3(m,m,m,new C.bbY(s,m),B.au),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bw(p,new A.an(B.W,m,B.aa,B.r,A.a([o,A.bZ(0,A.ue(new A.Q(n,n,n,n),new A.a7(u,t,new C.bcR(l.d,v,l.f,w,new C.dRh(l),l.gc87(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bu9(s,new C.dRi(l,e),new C.dRj(l,e),new C.dRk(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.b0,B.b5,B.x,r,m,m),B.n),m,m,m,R.agg,m,m,m,m)},
$S:229}
C.dRh.prototype={
$1(d){var w=this.a
w.m(new C.dRf(w,d))},
$S:2}
C.dRf.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.K(0,v)},
$S:0}
C.dRi.prototype={
$0(){var w=this.b
return this.a.b7Z(1.25,new A.at(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dRj.prototype={
$0(){var w=this.b
return this.a.b7Z(0.8,new A.at(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dRk.prototype={
$0(){var w=this,v=w.b
return w.a.aRk(new A.at(A.aQ(1/0,v.a,v.b),A.aQ(1/0,v.c,v.d)),new A.at(w.c,w.d),w.e.gbgs())},
$S:0}
C.dRp.prototype={
$0(){var w=this.a
return w.m(new C.dRg(w))},
$S:0}
C.dRg.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dQE.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fI(new A.fC(s.c)),$async$$0)
case 2:t.xq("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d4D.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bgz(u,C.hji(v.c,u),new C.d4C(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d4C.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d4E.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bjV(d.d,d.c,u.f.t(0,d.a),new C.d4B(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d4B.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fo5.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.r4(new A.cQ(new A.a2(v,new C.fo6(d),w.k("a2<1>")),new C.fo7(),w.k("cQ<1,n>")))},
$S:z+20}
C.fo6.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fo7.prototype={
$1(d){return d.a},
$S:z+7}
C.fo3.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fo4.prototype={
$1(d){return d.b},
$S:z+7}
C.foa.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.r4(new A.cQ(new A.a2(v,new C.fob(d),w.k("a2<1>")),new C.foc(),w.k("cQ<1,n>")))},
$S:z+20}
C.fob.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.foc.prototype={
$1(d){return d.a},
$S:z+7}
C.fo8.prototype={
$1(d){var w,v=A.ew([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ai(0,w)&&v.K(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fo9.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d4G.prototype={
$0(){return this.a},
$S:z+32}
C.d4X.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ai(0,d)},
$S:256}
C.d4P.prototype={
$2(d,e){var w=this.a.cg(0,d,new C.d4Q()),v=J.a5(w)
if(!v.t(w,e))v.K(w,e)},
$S:120}
C.d4Q.prototype={
$0(){return A.a([],x.s)},
$S:739}
C.d4O.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f_(w,e)
return w===!0},
$S:288}
C.d4H.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d4N.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d4M.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.K(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.BS:v)
u=1
while(v.C())u+=s.$2(v.gS(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.T:v)
while(v.C()){t=v.gS(v)
if(e.t(0,t))continue
e.K(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.BS:t)
while(t.C())u+=s.$2(t.gS(t).a,e)}return u},
$S:1914}
C.d4I.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d4R.prototype={
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
t=J.aV(t==null?D.BS:t)
while(t.C()){r=t.gS(t)
if(r.a!==a9&&!B.d.b8(w,new C.d4S(r)))w.push(r)}}B.d.bn(w,new C.d4T(a8))
B.d.b_(w,new C.d4U())
q=C.hGv(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.etd],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bmS(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1915}
C.d4S.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d4T.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d4U.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.d4V.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a5(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a3(v).k("bc<2>")).cI(0,0,B.pc)+88-w.gL(n).a}else u=0
for(w=J.a5(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:653}
C.d4W.prototype={
$1(d){return 16+d*156},
$S:258}
C.d4F.prototype={
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
t.n(0,d,new C.Fi(r,new A.u(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.Fi(s,new A.u(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.Fi(s,new A.u(e,v)))}t=o.r.h(0,d)
t=J.aV(t==null?B.T:t)
s=o.w
while(t.C()){r=t.gS(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Jx(d,new A.u(e+t,w),s,s.length))}},
$S:201}
C.d4J.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aHB(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:120}
C.d4K.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d4L.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:740}
C.d4Y.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:740}
C.d4Z.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:456}
C.d5_.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:191}
C.d50.prototype={
$1(d){return d>=0.5},
$S:125}
C.f6w.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hp(A.aL(!1,v,!0,new A.a7(38,38,A.W(d,this.a.c?B.c:B.cC,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1917}
C.eIO.prototype={
$1(d){var w=null,v=A.m(8),u=B.bW.j(0.12),t=A.m(8)
return new A.C(B.n1,A.aL(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.eZ7,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.LU,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eIN(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eIN.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dkQ.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dkP.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nm,B.L,w,w)
return A.ej(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.dkN(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.m9,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dkO(d),w,w)],x.p),B.bb,B.AI,w,u,D.brR,w,D.btN,new A.b7(v,B.Y),w,w)},
$S:19}
C.dkN.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dkO.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dkZ.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dl_.prototype={
$1(d){var w=this.a
return w.m(new C.dkY(w,d))},
$S:z+37}
C.dkY.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dl0.prototype={
$1(d){var w=null
return A.qa(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dl3.prototype={
$1(d){var w=this.a
return w.m(new C.dkX(w,d))},
$S:34}
C.dkX.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dl2.prototype={
$1(d){var w=null
return A.qa(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dl4.prototype={
$1(d){var w=this.a
return w.m(new C.dkW(w,d))},
$S:34}
C.dkW.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dl5.prototype={
$0(){var w=this.a
return w.m(new C.dkV(w))},
$S:0}
C.dkV.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dl6.prototype={
$0(){var w=this.a
return w.m(new C.dkU(w))},
$S:0}
C.dkU.prototype={
$0(){return++this.a.at},
$S:0}
C.dl7.prototype={
$0(){var w=this.a
return w.m(new C.dkT(w))},
$S:0}
C.dkT.prototype={
$0(){return--this.a.ax},
$S:0}
C.dl8.prototype={
$0(){var w=this.a
return w.m(new C.dkS(w))},
$S:0}
C.dkS.prototype={
$0(){return++this.a.ax},
$S:0}
C.dl9.prototype={
$1(d){var w=this.a
return w.m(new C.dkR(w,d))},
$S:9}
C.dkR.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dl1.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dla.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bW.j(0.18)
else w=q.c.a?B.dX:B.c
v=A.m(12)
if(p)u=B.bW
else u=(q.c.a?B.dZ:B.bR).j(0.85)
u=A.I(u,B.q,p?1.5:1)
if(p)t=B.bW
else t=q.c.a?B.bq:B.bn
t=A.W(f,t,r,r,r,18)
if(p)s=B.bW
else s=q.c.a?B.bq:B.bn
return A.D(A.aG(!1,B.a1,!0,r,A.aL(!1,o,!0,A.dh(r,A.v(A.a([t,B.at,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bc,new A.o(w,r,u,v,r,r,B.n),B.eE,r,r,r,B.jx,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dlb(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
$S:z+39}
C.dlb.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dlk.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.c6I.prototype={
$2(d,e){return new A.bv(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:95}
C.c6P.prototype={
$1(d){return d.af()},
$S:z+5}
C.c6Q.prototype={
$2(d,e){var w=J.b6(e,new C.c6O(),x.a)
w=A.B(w,w.$ti.k("ak.E"))
return new A.bv(d,w,x.d2)},
$S:z+41}
C.c6O.prototype={
$1(d){return d.af()},
$S:z+21}
C.c6K.prototype={
$1(d){return C.ajE(A.a1(d,x.N,x.z))},
$S:z+8}
C.c6L.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c6M.prototype={
$1(d){return C.h_Y(A.a1(d,x.N,x.z))},
$S:z+11}
C.c6N.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c6U.prototype={
$1(d){return new A.aEH(d.f.length,d.a,d.b)},
$S:z+43}
C.c6V.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:564}
C.c6R.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c6S.prototype={
$1(d){return d.cEP(C.G1(d,this.a))},
$S:z+44}
C.dRy.prototype={
$1(d){return C.tK(d,this.a.a.c)},
$S:z+2}
C.dRz.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dRD.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dRE.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dRv.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYD(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xX("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oY(r.c,r.e),$async$$0)
case 4:s.xX(p)
w=5
return A.b(s.J4(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRw.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYD(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xX("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.oY(r.c,r.e),$async$$0)
case 4:s.xX(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRx.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Um(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.xX("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.xX("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.xX("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.J4(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.aa(j)
o=r.a
if(o.c==null){w=1
break}o.xX(B.a.ea(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dRC.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYC(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xX("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).c8(A.e8(new C.dRB(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oY(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRB.prototype={
$1(d){var w=this.b
return new C.Zy(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dRA.prototype={
$1(d){return D.fNN},
$S:z+46}
C.dRG.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dRH.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dRF(w,d)
return new A.C(B.dc,new C.bcV(this.b,d.c,d.a,w,null),null)},
$S:1918}
C.dRF.prototype={
$0(){return this.a.WQ(this.b.b)},
$S:0}
C.dRq.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dRr.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dRs.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dRt.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dRu.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dRI.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cU(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a6(this.b,!1).O(s)
return}},
$S:195}
C.dCS.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dCT.prototype={
$0(){return B.d.gL(D.a2m)},
$S:z+48}
C.dCU.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.W(this.b.d,B.c.j(0.95),w,w,D.cRt,44),w,w,w),w,w,new C.bhH(u,t,v,w),B.au)},
$S:67}
C.fE_.prototype={
$1(d){return A.oJ(new C.fDZ(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:132}
C.fDZ.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dX:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rn,24)],x.V),o=r?B.dZ:B.bR
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bW.j(0.18)],x.O)
w=A.p(t,D.bI0,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a8(B.a3,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aQ:B.aB,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.S,o,new A.C(E.ahf,A.A(A.a([w,B.bf,A.D(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bq:B.bn,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.D(A.id(!0,t,e,B.y,D.eMu,new C.fDY(this.b,s),20,B.agQ,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kz,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:110}
C.fDY.prototype={
$2(d,e){var w=null,v=D.a2m[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.dZ:B.bR,B.q,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.ek,8)],x.V),p=A.m(15),o=A.D(new C.a5o(v.a,!0,w),1),n=s?B.jt:B.iQ,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aQ:B.aB,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a1,!0,w,A.aL(!1,u,!0,A.eA(A.bw(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bq:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.la,w,w,w)],l),B.aj,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fDX(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)},
$S:73}
C.fDX.prototype={
$0(){A.a6(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cen.prototype={
$0(){return this.a.aeX(this.b)},
$S:0}
C.fDm.prototype={
$1(d){return D.fK2},
$S:z+74}
C.fKP.prototype={
$1(d){var w=this
return new C.a0g(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fDr.prototype={
$1(d){return new C.Yc(this.a,null)},
$S:z+51}
C.fDq.prototype={
$1(d){return D.fL1},
$S:z+52}
C.cXK.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cXL.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cXJ(w,d))},
$S:34}
C.cXJ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cXM.prototype={
$1(d){return this.a.JE()},
$S:2}
C.cXN.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cXG.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cXH.prototype={
$1(d){return this.a.JE()},
$S:2}
C.cXI.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cvj.prototype={
$0(){},
$S:0}
C.cvp.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cvq.prototype={
$0(){return this.a.aMT(-1)},
$S:0}
C.cvr.prototype={
$1(d){return this.a.m(new C.cvo())},
$S:2}
C.cvo.prototype={
$0(){},
$S:0}
C.cvs.prototype={
$0(){return this.a.aMT(1)},
$S:0}
C.cvt.prototype={
$1(d){return this.a.m(new C.cvn())},
$S:2}
C.cvn.prototype={
$0(){},
$S:0}
C.cvu.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.dZ:B.bR
return A.u4(u,u,B.aZ,r,u,new C.cvm(t,d),B.AV,s,w,u,new A.aA(v,1,B.q,-1),B.c8)},
$S:1919}
C.cvm.prototype={
$1(d){var w=this.a
return w.m(new C.cvk(w,this.b))},
$S:9}
C.cvk.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cvv.prototype={
$1(d){return this.a.m(new C.cvl())},
$S:2}
C.cvl.prototype={
$0(){},
$S:0}
C.cvw.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.f5Z.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).O(w)},
$S:2}
C.f6_.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.f60.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).O(w)},
$S:0}
C.f5X.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbwN()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b3(new A.C(D.btM,new A.et(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.btZ(p,v,this.b.a,u,t,r),r,r,B.au)},
$S:67}
C.f5Y.prototype={
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
s=A.aq(B.aV,B.bW,w)
s.toString
s=A.a([B.aZ,s,B.aV],x.O)
return A.aG(!1,B.a1,!0,p,A.aL(!1,v,!0,A.eA(D.e3Q,r,new A.o(r,r,A.I(B.c.j(0.4),B.q,1.5),u,r,new A.a8(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
$S:127}
C.fC7.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:68}
C.eFY.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eFP.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eFQ.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eFW.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e0(new C.eFV(w,this.b),null)},
$S:20}
C.eFV.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dX:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aB,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eG(w,u,new A.C(B.ah9,A.v(A.a([s,B.an,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.h5O(new C.eFS(r,e),r.a),B.aA,A.A(A.a([A.D(A.dV(B.de,new C.eFT(d),w),1),B.av,A.D(A.bJ(B.Tk,new C.eFU(r,d),A.bk(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.aj,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(t,B.Y),w)},
$S:97}
C.eFS.prototype={
$1(d){return this.b.$1(new C.eFR(this.a,d))},
$S:34}
C.eFR.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eFT.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFU.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.eFX.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.S7(this.b)},
$S:0}
C.eFK.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.b9U(w)},
$S:0}
C.eFO.prototype={
$1(d){return this.biY(d)},
biY(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.KI(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iL(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eFN.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("a2<1>")
w=A.B(new A.a2(w,new C.eFM(this.b),v),v.k("J.E"))
u.d=t.b9U(w)},
$S:0}
C.eFM.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eFZ.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iL(this.b,w)},
$S:0}
C.eG_.prototype={
$1(d){return this.a.bAQ(d,this.b)},
$S:z+55}
C.eFL.prototype={
$0(){return this.a.a92(this.b)},
$S:0}
C.fKH.prototype={
$1(d){return new C.acA(this.a,this.b,this.c,null)},
$S:z+56}
C.eG1.prototype={
$0(){return this.a.Zu(this.b)},
$S:0}
C.eG2.prototype={
$0(){return this.a.Pq(this.b)},
$S:0}
C.eG3.prototype={
$0(){return this.a.E0(this.b)},
$S:0}
C.eG4.prototype={
$0(){return this.a.Zv(this.b)},
$S:0}
C.eG0.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFF.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eFG.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eFH.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFJ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pG(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eFI(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eFI.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eGr.prototype={
$2(d,e){return d+e.gwC()},
$S:z+59}
C.eGn.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eGo.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eG8.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dX:B.c,s=A.m(24),r=A.p(v,D.bIq,B.f,v,v,new A.o(B.ay.j(u?0.18:0.08),v,A.I(B.ay.j(0.28),B.q,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.aB,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aQ:B.aB
u=u?B.dZ:B.bR
w=x.p
return A.eG(v,t,new A.C(B.xr,A.v(A.a([r,B.aP,q,B.O,p,B.d5,A.A(A.a([A.D(A.dV(B.np,new C.eG6(d),A.df(v,v,v,v,v,v,v,v,v,o,v,v,B.eZ,v,new A.b7(A.m(14),B.Y),new A.aA(u,1,B.q,-1),v,v,v,v)),1),B.av,A.D(A.bJ(D.fs0,new C.eG7(d),A.bk(B.ay,v,v,v,v,v,B.eZ,v,new A.b7(A.m(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d0,v,new A.b7(s,B.Y),v)},
$S:47}
C.eG6.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eG7.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eGh.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dX:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fL,28)],x.V),g=k?D.cXP:B.a1L,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aA,D.eGJ,B.at,new A.bH(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cv,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.ax,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.ahc,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.D(v.b38(B.b6,B.iU,new C.eGe(v,d),l,"Camera import","Scan QR"),1),B.av,A.D(v.b38(B.cy,M.y7,new C.eGf(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.ay.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.ay.j(0.28),B.q,1)
o=A.p(m,D.bHP,B.f,m,m,new A.o(B.ay.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bS,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aQ:B.aB,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.D(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bn,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bn(!0,new A.C(B.vb,A.p(m,A.v(A.a([g,new A.C(B.aha,A.v(A.a([w,B.S,u,B.bx,t,B.S,A.aG(!1,B.a1,!0,m,A.aL(!1,s,!0,A.p(m,A.A(A.a([o,B.bf,n,A.W(B.ex,k?B.bq:B.bn,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bC,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eGg(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:28}
C.eGe.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.va("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eGf.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.va("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eGg.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.Nf(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eGc.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dX:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eT,24)],x.V),k=o?B.dZ:B.bR
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bq:B.bn
u=A.bw(w,new A.a7(48,48,C.aOQ(!0,A.m(12),48,N.Mu,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aQ:B.aB,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Al(v.gwC())
s=x.p
r=this.a
return A.bn(!0,new A.C(B.vb,A.p(q,A.v(A.a([B.S,k,new A.C(D.ah7,A.A(A.a([u,B.bf,A.D(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bq:B.bn,q,q,q,q,q,q,q,q,12,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.Az,r.cig(B.tT,B.aV,new C.eGa(d),p,"QR code or backup file","Transfer project"),r.b0b(!0,B.e4,B.ay,new C.eGb(d),p,"Remove from this device","Delete project"),B.S],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:28}
C.eGa.prototype={
$0(){A.a6(this.a,!1).O("transfer")
return null},
$S:0}
C.eGb.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
C.eGd.prototype={
$1(d){return this.biZ(d)},
biZ(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.KI(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vn(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eGu.prototype={
$0(){var w=this.a
w.a.bp()
w.m(new C.eGt(w))},
$S:0}
C.eGt.prototype={
$0(){return this.a.r++},
$S:0}
C.eGv.prototype={
$0(){var w=this.a
return w.m(new C.eGs(w))},
$S:0}
C.eGs.prototype={
$0(){return this.a.r++},
$S:0}
C.eG5.prototype={
$0(){var w=this.a.c
w.toString
return A.iL(w,null)},
$S:0}
C.eG9.prototype={
$0(){return this.a.cbC(this.b)},
$S:0}
C.eGq.prototype={
$0(){var w=this.a
return w.m(new C.eGp(w,this.b))},
$S:0}
C.eGp.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eGk.prototype={
$0(){return this.a.va("scan")},
$S:0}
C.eGl.prototype={
$0(){return this.a.va("file")},
$S:0}
C.eGm.prototype={
$1(d){return this.a.cih(d,this.b)},
$S:z+60}
C.eGj.prototype={
$0(){return this.a.E4(this.b)},
$S:0}
C.eGi.prototype={
$0(){return this.a.a__(this.b,this.c)},
$S:0}
C.cuK.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cuJ.prototype={
$1(d){return d.af()},
$S:z+62}
C.cuH.prototype={
$1(d){return C.hp6(A.a1(d,x.N,x.z))},
$S:z+63}
C.cuI.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fng.prototype={
$1(d){return d.y===D.ki},
$S:z+2}
C.fLa.prototype={
$1(d){return C.bzN(d,this.a)},
$S:z+2}
C.flN.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bM7.prototype={
$1(d){return!d.as},
$S:z+1}
C.bM6.prototype={
$1(d){return d.af()},
$S:z+15}
C.bM3.prototype={
$1(d){return C.h_Z(A.a1(d,x.N,x.z))},
$S:z+14}
C.bM4.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bM5.prototype={
$1(d){return J.k(d)},
$S:17}
C.fdy.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.f9e.prototype={
$1(d){return C.fRx(A.a1(d,x.N,x.z))},
$S:z+67}
C.f9f.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.f9g.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fDd.prototype={
$1(d){return J.k(d)},
$S:17}
C.fDe.prototype={
$1(d){return d.a},
$S:z+69}
C.fDf.prototype={
$1(d){return d.length!==0},
$S:3}
C.fDg.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fDh.prototype={
$1(d){return d.S7(null).af()},
$S:z+70}
C.fL8.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fnI.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fqa.prototype={
$1(d){return C.ajE(A.a1(d,x.N,x.z))},
$S:z+8}
C.fqb.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fqc.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fqd.prototype={
$1(d){return d.af()},
$S:z+5}
C.fqe.prototype={
$1(d){return C.tK(d,this.a)},
$S:z+2}
C.fD0.prototype={
$1(d){return C.tK(d,this.a)},
$S:z+2}
C.fL3.prototype={
$1(d){return C.ajE(A.a1(d,x.N,x.z))},
$S:z+8}
C.fL4.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fL5.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fnp.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fnq.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fLe.prototype={
$1(d){return!d.as},
$S:z+1}
C.fn_.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fn0.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fn1.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.fKQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fqX.prototype={
$1(d){return d.Q},
$S:z+72}
C.fCX.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fq7.prototype={
$1(d){return C.ajE(A.a1(d,x.N,x.z))},
$S:z+8}
C.fq8.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fq9.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fCT.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.f9M.prototype={
$1(d){return d.length!==0},
$S:3}
C.f9N.prototype={
$1(d){return C.h_Z(A.a1(d,x.N,x.z))},
$S:z+14}
C.f9O.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.f9P.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.f9Q.prototype={
$1(d){return d.length!==0},
$S:3}
C.fa2.prototype={
$2(d,e){return d.eU(new C.fa3(e))},
$S:1920}
C.fa3.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c6},
$S:1921}
C.fa_.prototype={
$1(d){return C.hL7(d,this.a)},
$S:z+73}
C.fa0.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fa1.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fec.prototype={
$1(d){return d.a},
$S:z+49}
C.fed.prototype={
$1(d){return d.length!==0},
$S:3}
C.fee.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fgk.prototype={
$1(d){return d.af()},
$S:z+5}
C.fl6.prototype={
$1(d){return C.hbi(d,C.G1(d,this.a))},
$S:z+5}
C.fl7.prototype={
$1(d){return C.hbj(d,C.G1(d,this.a))},
$S:z+5};(function aliases(){var w=C.aJX.prototype
w.bt1=w.q
w=C.aM5.prototype
w.bvm=w.q
w=C.aM6.prototype
w.bvn=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aBt.prototype,"gcfd","cfe",25)
var s
w(s=C.ayw.prototype,"gc8d","c8e",42)
v(s,"gaL8","MO",0)
v(s,"gcnm","As",0)
v(s,"gbIw","Nt",0)
v(s,"gcB6","xY",0)
v(s,"gche","a_H",0)
v(s,"gbDX","Nb",0)
v(s,"gbIX","Wh",0)
w(s,"gbNv","bNw",71)
v(s,"gbyr","zv",0)
v(C.ayx.prototype,"gcB2","EW",0)
v(s=C.aC3.prototype,"gaez","vo",0)
v(s,"gcaS","ZR",0)
v(s,"gaP9","Hu",0)
v(s=C.aC0.prototype,"gcxi","a1M",0)
v(s,"gaez","vo",0)
v(s,"gclq","a0m",0)
v(s,"gcbP","a_4",0)
w(s,"gc87","c88",30)
v(s,"gbIO","Hz",0)
v(s,"gcyh","cyi",3)
v(s,"gbZV","XW",0)
w(s,"gc6E","c6F",23)
v(s,"gcaC","caD",3)
v(s=C.aAs.prototype,"gc4s","P_",0)
v(s,"gc4u","c4v",3)
v(s,"gbFu","a8F",0)
v(s=C.aC2.prototype,"gbM1","WM",0)
v(s,"gbWj","Xp",0)
v(s,"gcrF","a1c",0)
v(s,"gcnW","a0O",0)
v(C.aC1.prototype,"gcnE","agi",0)
v(C.are.prototype,"gc6C","Zt",0)
v(C.axi.prototype,"ga1w","JE",3)
v(C.axh.prototype,"ga1w","JE",3)
v(C.aw1.prototype,"ga1w","JE",3)
v(s=C.aDy.prototype,"gb_A","PV",0)
v(s,"gbxf","V1",0)
v(s,"gcbD","cbE",3)
w(C.aDx.prototype,"gc7s","c7t",57)
u(C.aDz.prototype,"gaP3",0,0,null,["$1","$0"],["Ht","bGL"],58,0,0)
t(C,"hiw","hUJ",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.an8,C.u1,C.n8,C.H6,C.adM,C.Jp,C.u2,C.Jx,C.Fi,C.bcT,C.aHB,C.aoi,C.d51,C.lv,C.aRJ,C.aRI,C.aPL,C.tz,C.qP,C.lf,C.hV,C.ky,C.aFB])
u(A.hT,[C.fuN,C.fuM,C.fuO,C.fDT,C.fk2,C.fk3,C.fk8,C.fsw,C.fsv,C.fsu,C.c0a,C.fEo,C.fEg,C.fEs,C.fnx,C.dDy,C.dDt,C.dDu,C.dD6,C.dD2,C.dDN,C.dDO,C.dDH,C.dDI,C.dDP,C.dDQ,C.fo1,C.fq4,C.fq5,C.fCZ,C.fL2,C.fno,C.fDx,C.d4e,C.d3B,C.d3K,C.d40,C.d3G,C.d3M,C.d3D,C.d3Q,C.d3R,C.d3P,C.d45,C.d44,C.d6_,C.d60,C.d61,C.d4s,C.d4x,C.d4w,C.cDw,C.cDy,C.cWY,C.cXm,C.cXn,C.cXq,C.cXs,C.cXt,C.cXu,C.cXw,C.cXx,C.dRM,C.dRb,C.dR6,C.dQF,C.dQS,C.dQV,C.dR3,C.dQt,C.dRe,C.dR8,C.dQv,C.dQw,C.dQx,C.dQC,C.dQA,C.dQz,C.dQP,C.dQQ,C.dQK,C.dRl,C.dRh,C.d4D,C.d4E,C.fo5,C.fo6,C.fo7,C.fo3,C.fo4,C.foa,C.fob,C.foc,C.fo8,C.fo9,C.d4X,C.d4N,C.d4I,C.d4S,C.d4T,C.d4W,C.d4K,C.d4Z,C.d5_,C.d50,C.f6w,C.eIO,C.dkP,C.dkZ,C.dl_,C.dl0,C.dl3,C.dl2,C.dl4,C.dl9,C.dla,C.c6P,C.c6O,C.c6K,C.c6L,C.c6M,C.c6N,C.c6U,C.c6R,C.c6S,C.dRy,C.dRB,C.dRA,C.dRH,C.dRI,C.dCS,C.fE_,C.fDm,C.fKP,C.fDr,C.fDq,C.cXL,C.cXM,C.cXH,C.cvr,C.cvt,C.cvu,C.cvm,C.cvv,C.f5Z,C.fC7,C.eFW,C.eFS,C.eFO,C.eFM,C.eG_,C.fKH,C.eG8,C.eGh,C.eGc,C.eGd,C.eGm,C.cuJ,C.cuH,C.cuI,C.fng,C.fLa,C.flN,C.bM7,C.bM6,C.bM3,C.bM4,C.bM5,C.f9e,C.f9f,C.fDd,C.fDe,C.fDf,C.fDg,C.fDh,C.fL8,C.fnI,C.fqa,C.fqb,C.fqd,C.fqe,C.fD0,C.fL3,C.fL4,C.fL5,C.fnp,C.fnq,C.fLe,C.fn_,C.fn0,C.fKQ,C.fqX,C.fCX,C.fq7,C.fq8,C.fCT,C.f9M,C.f9N,C.f9O,C.f9P,C.f9Q,C.fa3,C.fa_,C.fa0,C.fec,C.fed,C.fgk,C.fl6,C.fl7])
u(A.au,[C.aXa,C.ajC,C.aSY,C.XT,C.b8B,C.bcR,C.bgz,C.bu9,C.bjV,C.ace,C.bgy,C.acd,C.bgx,C.aAt,C.aGE,C.acf,C.Jl,C.bcS,C.abw,C.bcQ,C.bcV,C.aX8,C.are,C.acA])
u(A.mJ,[C.b9c,C.bap,C.bag,C.aFw,C.bfC,C.bcU,C.bbY,C.bhH,C.btZ])
u(A.j3,[C.fEl,C.fEm,C.fEn,C.fEe,C.fEf,C.fEq,C.fEr,C.dDK,C.dDw,C.dDz,C.dDd,C.dDe,C.dDf,C.dDc,C.dDk,C.dDb,C.dDl,C.dDm,C.dDa,C.dDn,C.dD9,C.dDo,C.dD8,C.dDp,C.dD0,C.dD1,C.dD7,C.dDq,C.dD5,C.dDr,C.dD4,C.dDg,C.dD3,C.dDh,C.dD_,C.dDi,C.dDj,C.dDL,C.dDM,C.dDA,C.dDB,C.dDC,C.dDD,C.dDE,C.dDF,C.dDG,C.dDS,C.dDJ,C.fo2,C.d3z,C.d3x,C.d3y,C.d3A,C.d4d,C.d42,C.d4_,C.d3C,C.d43,C.d3I,C.d3J,C.d3L,C.d41,C.d3H,C.d3N,C.d4a,C.d3X,C.d3W,C.d3Y,C.d3Z,C.d3S,C.d3U,C.d3V,C.d3O,C.d46,C.d49,C.d3E,C.d3F,C.d5Z,C.d5Y,C.d5X,C.d5W,C.d62,C.d5V,C.d63,C.d4t,C.d4u,C.d4v,C.d4y,C.d4r,C.d4q,C.cDx,C.cWX,C.cX9,C.cX8,C.cXo,C.cX7,C.cXp,C.cX6,C.cX5,C.cXr,C.cX4,C.cXh,C.cXg,C.cXy,C.dRL,C.dRK,C.dRN,C.dRO,C.dRP,C.dRJ,C.dRR,C.dRQ,C.dR9,C.dRa,C.dRc,C.dQG,C.dQU,C.dQT,C.dQW,C.dR5,C.dQZ,C.dQY,C.dR_,C.dQX,C.dR0,C.dR1,C.dR4,C.dQu,C.dR7,C.dQy,C.dQB,C.dQD,C.dRd,C.dQJ,C.dQH,C.dQL,C.dQM,C.dQI,C.dQN,C.dQR,C.dRm,C.dRn,C.dRf,C.dRi,C.dRj,C.dRk,C.dRp,C.dRg,C.dQE,C.d4C,C.d4B,C.d4G,C.d4Q,C.d4H,C.eIN,C.dkQ,C.dkN,C.dkO,C.dkY,C.dkX,C.dkW,C.dl5,C.dkV,C.dl6,C.dkU,C.dl7,C.dkT,C.dl8,C.dkS,C.dkR,C.dl1,C.dlb,C.dlk,C.dRz,C.dRD,C.dRE,C.dRv,C.dRw,C.dRx,C.dRC,C.dRG,C.dRF,C.dRq,C.dRr,C.dRs,C.dRt,C.dRu,C.dCT,C.fDX,C.cen,C.cXK,C.cXJ,C.cXN,C.cXG,C.cXI,C.cvj,C.cvp,C.cvq,C.cvo,C.cvs,C.cvn,C.cvk,C.cvl,C.cvw,C.f6_,C.f60,C.eFY,C.eFP,C.eFQ,C.eFR,C.eFT,C.eFU,C.eFX,C.eFK,C.eFN,C.eFZ,C.eFL,C.eG1,C.eG2,C.eG3,C.eG4,C.eG0,C.eFF,C.eFG,C.eFH,C.eFJ,C.eFI,C.eGn,C.eGo,C.eG6,C.eG7,C.eGe,C.eGf,C.eGg,C.eGa,C.eGb,C.eGu,C.eGt,C.eGv,C.eGs,C.eG5,C.eG9,C.eGq,C.eGp,C.eGk,C.eGl,C.eGj,C.eGi])
u(A.ag,[C.anf,C.S2,C.YA,C.YE,C.YC,C.Ya,C.aol,C.aof,C.Zd,C.aoj,C.Zy,C.Zz,C.a5o,C.Yc,C.Yb,C.XK,C.a0g,C.F6,C.avV,C.ard,C.ar7,C.arc,C.Nw])
u(A.ah,[C.aBt,C.bcO,C.ayw,C.bd8,C.ayx,C.ban,C.aC3,C.aC0,C.aAs,C.aC2,C.aC1,C.bi1,C.aJX,C.axi,C.axh,C.aw1,C.bu1,C.aM5,C.aM6,C.aDy,C.bjo,C.aDx,C.bvN])
u(A.kf,[C.dDv,C.dDx,C.dDs,C.dDR,C.fq6,C.bM2,C.d4c,C.d4b,C.d3T,C.d47,C.d48,C.d4z,C.dR2,C.dQO,C.dRo,C.d4P,C.d4O,C.d4M,C.d4R,C.d4U,C.d4V,C.d4F,C.d4J,C.d4L,C.d4Y,C.c6I,C.c6Q,C.c6V,C.dCU,C.fDZ,C.fDY,C.f5X,C.f5Y,C.eFV,C.eGr,C.cuK,C.fdy,C.f9g,C.fqc,C.fn1,C.fq9,C.fa2,C.fa1,C.fee])
t(C.bhI,C.aJX)
u(A.m5,[C.aaz,C.aIi,C.H7,C.ajD,C.cuM,C.cuN])
t(C.bu_,C.aM5)
t(C.bu0,C.aM6)
t(C.aDz,C.bvN)
t(C.b73,A.b6T)
t(C.bu2,A.a53)
t(C.b72,C.bu2)
w(C.aJX,A.eU)
w(C.aM5,A.c9)
w(C.aM6,A.c9)
v(C.bvN,A.ey)
v(C.bu2,A.iZ)})()
A.jT(b.typeUniverse,JSON.parse('{"aXa":{"au":[],"r":[]},"b9c":{"aB":[]},"anf":{"ag":[],"r":[]},"aBt":{"ah":["anf"]},"S2":{"ag":[],"r":[]},"ajC":{"au":[],"r":[]},"aSY":{"au":[],"r":[]},"bcO":{"ah":["S2"]},"YA":{"ag":[],"r":[]},"YE":{"ag":[],"r":[]},"YC":{"ag":[],"r":[]},"Ya":{"ag":[],"r":[]},"ayw":{"ah":["YA"]},"bd8":{"ah":["YE"]},"ayx":{"ah":["YC"]},"XT":{"au":[],"r":[]},"bap":{"aB":[]},"bag":{"aB":[]},"ban":{"ah":["Ya"]},"aFw":{"aB":[]},"bfC":{"aB":[]},"b8B":{"au":[],"r":[]},"aol":{"ag":[],"r":[]},"aof":{"ag":[],"r":[]},"Zd":{"ag":[],"r":[]},"acf":{"au":[],"r":[]},"aC3":{"ah":["aol"]},"aC0":{"ah":["aof"]},"bcR":{"au":[],"r":[]},"bcU":{"aB":[]},"bgz":{"au":[],"r":[]},"bbY":{"aB":[]},"bu9":{"au":[],"r":[]},"bjV":{"au":[],"r":[]},"aAs":{"ah":["Zd"]},"ace":{"au":[],"r":[]},"bgy":{"au":[],"r":[]},"acd":{"au":[],"r":[]},"bgx":{"au":[],"r":[]},"aAt":{"au":[],"r":[]},"aGE":{"au":[],"r":[]},"Jl":{"au":[],"r":[]},"aoj":{"ag":[],"r":[]},"Zy":{"ag":[],"r":[]},"Zz":{"ag":[],"r":[]},"aC2":{"ah":["aoj"]},"bcS":{"au":[],"r":[]},"abw":{"au":[],"r":[]},"bcQ":{"au":[],"r":[]},"bcV":{"au":[],"r":[]},"aC1":{"ah":["Zy"]},"bi1":{"ah":["Zz"]},"aX8":{"au":[],"r":[]},"a5o":{"ag":[],"r":[]},"bhI":{"ah":["a5o"]},"bhH":{"aB":[]},"are":{"au":[],"r":[]},"Yc":{"ag":[],"r":[]},"Yb":{"ag":[],"r":[]},"XK":{"ag":[],"r":[]},"a0g":{"ag":[],"r":[]},"axi":{"ah":["Yc"]},"axh":{"ah":["Yb"]},"aw1":{"ah":["XK"]},"bu1":{"ah":["a0g"]},"F6":{"ag":[],"r":[]},"avV":{"ag":[],"r":[]},"bu_":{"ah":["F6"]},"bu0":{"ah":["avV"]},"btZ":{"aB":[]},"ard":{"ag":[],"r":[]},"aDy":{"ah":["ard"]},"acA":{"au":[],"r":[]},"ar7":{"ag":[],"r":[]},"arc":{"ag":[],"r":[]},"bjo":{"ah":["ar7"]},"aDx":{"ah":["arc"]},"Nw":{"ag":[],"r":[]},"aDz":{"ah":["Nw"],"ey":[]},"b72":{"iZ":[],"fe":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aPL"),Q:w("qP"),n:w("bm<n,n>"),c5:w("aRI"),dY:w("aRJ"),d:w("eR<n?>"),e:w("H6"),B:w("n8"),P:w("hV"),k:w("ky"),x:w("ay<~>"),f5:w("O<a2f>"),V:w("O<ac>"),t:w("O<qP>"),O:w("O<w>"),ac:w("O<eR<n?>>"),I:w("O<n8>"),u:w("O<hV>"),_:w("O<ky>"),cl:w("O<ay<aj<a4<n,@>>>>"),R:w("O<na>"),cq:w("O<aj<+(N,N)>>"),ez:w("O<a4<n,aC>>"),gE:w("O<a4<n,n>>"),c7:w("O<a4<n,@>>"),fD:w("O<mn>"),bp:w("O<oa>"),g:w("O<u>"),v:w("O<hn>"),L:w("O<+(n,n)>"),G:w("O<+(N,N)>"),bF:w("O<+count,id,name(H,n,n)>"),A:w("O<cP>"),s:w("O<n>"),aS:w("O<iO>"),p:w("O<r>"),C:w("O<fe>"),D:w("O<lf>"),fp:w("O<Jp>"),M:w("O<Jx>"),gZ:w("O<aFB>"),Y:w("O<adM>"),E:w("O<aHB>"),F:w("O<N>"),dC:w("O<H>"),dS:w("O<aB?>"),d4:w("O<n?>"),J:w("cs<ah<ag>>"),b:w("aj<n8>"),do:w("aj<hV>"),r:w("aj<ky>"),U:w("aj<a4<n,@>>"),gk:w("aj<+(n,n)>"),bC:w("aj<+count,id,name(H,n,n)>"),h:w("aj<n>"),c:w("aj<lf>"),j:w("aj<@>"),fK:w("bv<n,n>"),d2:w("bv<n,aj<a4<n,@>>>"),a:w("a4<n,@>"),f:w("a4<@,@>"),gv:w("K<n,H8>"),w:w("iz"),g2:w("r8"),bV:w("an8"),fL:w("cq"),K:w("aC"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(N,aj<hV>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),e7:w("bo<N>"),gc:w("dD"),b4:w("cx<H>"),W:w("kb<n>"),l:w("r"),cM:w("fe"),i:w("lf"),cc:w("Fi"),bw:w("acd<n?>"),cy:w("Jz"),q:w("mX"),y:w("R"),gR:w("N"),z:w("@"),S:w("H"),eK:w("aj<ky>?"),m:w("aoi?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),X:w("+qrPayload,token,usesRemaining(n,n,H)?"),gF:w("+members,trees,viewOnly(H,H,R)?"),Z:w("pN?"),T:w("n?"),aD:w("dD?"),o:w("lf?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aWj=new A.bq(B.he,B.bE,B.he,B.bE)
D.a9l=new A.bq(B.he,B.jG,B.he,B.jG)
D.aWv=new A.bq(B.ii,B.bE,B.bE,B.bE)
D.aWz=new A.aA(B.cZ,1.4,B.q,-1)
D.aWJ=new A.aA(B.ad,1,B.q,-1)
D.aY8=new A.aY(0,1/0,64,1/0)
D.aYc=new A.aY(0,84,0,1/0)
D.awK=w([B.lD,B.qJ,B.c],x.O)
D.bSX=new A.a8(B.ax,B.aC,B.x,D.awK,null,null)
D.aYX=new A.o(null,null,null,null,null,D.bSX,B.n)
D.cXl=w([B.aV,B.bW],x.O)
D.bV3=new A.a8(B.b0,B.b5,B.x,D.cXl,null,null)
D.aZg=new A.o(null,null,null,null,null,D.bV3,B.n)
D.b4r=new A.fi(null,null,null,null,null,E.jN,null,null,null,null)
D.aaE=new A.cr(B.A,null,null,D.b4r,null)
D.kb=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eX8=new A.G(!0,D.kb,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ff0=new A.x("No books on the shelf yet.",null,D.eX8,null,null,null,null,null,null,null,null,null)
D.e3R=new A.C(B.nR,D.ff0,null)
D.b2W=new A.cr(B.A,null,null,D.e3R,null)
D.b3P=new A.cr(B.A,null,null,Z.V7,null)
D.b5Q=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b6i=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.abR=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b8V=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b9c=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.ad9=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bcY=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bdn=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.Eo=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.beZ=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bhk=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.aeO=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.f9E=new A.x("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bmE=new A.eR(null,D.f9E,B.f1,null,x.d)
D.fic=new A.x("None",null,null,null,null,null,null,null,null,null,null,null)
D.bmG=new A.eR(null,D.fic,B.f1,null,x.d)
D.bnd=new A.b9(38e5)
D.bnY=new A.ia(0,10,0,10)
D.bo7=new A.Q(0,1,0,0)
D.boh=new A.ia(0,4,0,4)
D.boz=new A.Q(10,10,14,10)
D.boL=new A.ia(10,4,10,4)
D.boT=new A.ia(10,8,10,8)
D.boU=new A.Q(10,8,8,8)
D.bpj=new A.Q(12,6,12,2)
D.bpB=new A.Q(14,10,6,6)
D.bpC=new A.Q(14,12,14,0)
D.bpG=new A.Q(14,12,14,8)
D.bpJ=new A.Q(14,12,8,14)
D.bpN=new A.ia(14,14,14,14)
D.bqr=new A.Q(16,2,16,10)
D.bqB=new A.Q(16,6,16,30)
D.bqD=new A.Q(16,6,16,8)
D.ah7=new A.Q(18,16,18,8)
D.brd=new A.Q(18,20,18,22)
D.ahb=new A.Q(18,24,18,24)
D.brj=new A.Q(18,30,18,30)
D.brB=new A.Q(20,10,12,20)
D.brP=new A.Q(20,18,16,18)
D.brR=new A.Q(20,18,20,6)
D.bsF=new A.Q(24,32,24,28)
D.bsG=new A.Q(24,36,24,32)
D.bsK=new A.Q(26,26,24,14)
D.bsY=new A.Q(2,4,2,8)
D.bt1=new A.Q(30,0,30,0)
D.btc=new A.Q(38,22,22,22)
D.aht=new A.Q(40,24,24,24)
D.bte=new A.ia(40,40,40,40)
D.btg=new A.Q(46,30,30,30)
D.ahw=new A.Q(4,0,0,8)
D.btI=new A.Q(56,40,40,40)
D.btM=new A.Q(1.25,1.25,1.25,1.25)
D.btN=new A.Q(60,0,60,0)
D.btQ=new A.Q(6,14,6,16)
D.bu1=new A.ia(7,3,7,3)
D.bux=new A.Q(5,1.5,5,1.5)
D.buI=new A.Q(6,2.5,6,2.5)
D.ftW=new A.x("Signature",null,B.no,null,null,null,null,null,null,null,null,null)
D.bv2=new A.bD(1,B.bi,D.ftW,null)
D.fr8=new A.x("Tell the AI what to fix",null,B.ds,null,null,null,null,null,null,null,null,null)
D.bvN=new A.bD(1,B.bi,D.fr8,null)
D.f3m=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft3=new A.x("Worksheets",null,D.f3m,null,null,null,null,null,null,null,null,null)
D.f3u=new A.G(!0,E.abo,null,null,null,null,13,B.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frZ=new A.x("Track your project spending",null,D.f3u,null,null,null,null,null,null,null,null,null)
D.cPF=w([D.ft3,B.at,D.frZ],x.p)
D.bkc=new A.fq(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cPF,null)
D.bvS=new A.bD(1,B.bi,D.bkc,null)
D.eZG=new A.G(!0,E.jN,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8S=new A.x("FAMILY LIBRARY",null,D.eZG,null,null,null,null,null,null,null,null,null)
D.bw8=new A.bD(1,B.bi,D.f8S,null)
D.M7=new C.H6("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.YY=new C.H7(0,"male")
D.aio=new C.H7(1,"female")
D.xA=new C.H7(2,"unknown")
D.tB=new C.ajD(0,"owner")
D.M8=new C.ajD(1,"editor")
D.ki=new C.ajD(2,"viewer")
D.aja=new A.a_(61199,"MaterialIcons",!1)
D.bA7=new A.a_(61504,"MaterialIcons",!1)
D.bA8=new A.a_(61505,"MaterialIcons",!1)
D.bAa=new A.a_(61587,"MaterialIcons",!1)
D.bAh=new A.a_(61890,"MaterialIcons",!1)
D.bBa=new A.a_(63034,"MaterialIcons",!0)
D.bC_=new A.a_(63429,"MaterialIcons",!1)
D.alr=new A.a_(984520,"MaterialIcons",!1)
D.bAH=new A.a_(62776,"MaterialIcons",!1)
D.bEk=new A.ae(D.bAH,26,B.aZ,null,null,null)
D.bz5=new A.a_(57648,"MaterialIcons",!1)
D.bEC=new A.ae(D.bz5,14,B.c,null,null,null)
D.bET=new A.ae(B.Fw,17,null,null,null,null)
D.bFo=new A.ae(E.ZR,null,null,null,null,null)
D.bFr=new A.ae(B.jg,18,E.jN,null,null,null)
D.ZD=new A.a_(62044,"MaterialIcons",!1)
D.bFx=new A.ae(D.ZD,null,B.aV,null,null,null)
D.bGm=new A.ae(B.dW,16,null,null,null,null)
D.bGt=new A.ae(D.ZD,32,B.aV,null,null,null)
D.bGM=new A.ae(E.ajb,18,B.cZ,null,null,null)
D.bHP=new A.ae(B.FG,22,B.ay,null,null,null)
D.bI0=new A.ae(B.dW,22,B.aZ,null,null,null)
D.bIb=new A.ae(Q.ZI,22,B.c,null,null,null)
D.bIg=new A.ae(B.tK,52,B.c,null,null,null)
D.bIq=new A.ae(B.FG,30,B.ay,null,null,null)
D.am3=new A.ae(B.tT,22,B.c,null,null,null)
D.bIS=new A.ae(B.dW,17,null,null,null,null)
D.bJa=new A.ae(B.vv,26,B.cZ,null,null,null)
D.bJU=new A.ae(B.a_2,16,null,null,null,null)
D.bKD=new A.ae(B.tK,24,B.c,null,null,null)
D.bKI=new A.ae(B.MA,20,B.rf,null,null,null)
D.bKN=new A.ae(B.Fu,null,B.bW,null,null,null)
D.bKU=new A.ae(B.jg,18,B.c,null,null,null)
D.bLv=new A.ae(B.cA,22,B.ad,null,null,null)
D.bMk=new A.ae(B.e4,16,B.ad,null,null,null)
D.bMw=new A.ae(D.ZD,20,B.aV,null,null,null)
D.amu=new A.ae(B.hy,20,null,null,null,null)
D.bN0=new A.ae(B.cA,18,D.kb,null,null,null)
D.bNi=new A.ae(B.xW,28,B.c,null,null,null)
D.bNq=new A.ae(B.Mq,null,B.fY,null,null,null)
D.bNK=new A.ae(B.xW,24,B.c,null,null,null)
D.bOb=new A.ae(B.tK,null,B.aV,null,null,null)
D.bOc=new A.ae(B.jz,20,B.cZ,null,null,null)
D.bOw=new A.ae(B.Fw,16,null,null,null,null)
D.bQ2=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ey,!0,null,null,null,null)
D.d3p=w([B.bt,B.aV,B.f7,B.aZ],x.O)
D.bRp=new A.a8(B.ax,B.aC,B.x,D.d3p,null,null)
D.bdU=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bjf=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cMD=w([D.bdU,D.bjf],x.O)
D.bRA=new A.a8(B.b0,B.b5,B.x,D.cMD,null,null)
D.cZ3=w([B.eX,B.fu,B.f7],x.O)
D.bRE=new A.a8(B.ax,B.aC,B.x,D.cZ3,null,null)
D.adK=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b6j=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cOy=w([D.adK,D.b6j],x.O)
D.bSc=new A.a8(B.b0,B.b5,B.x,D.cOy,null,null)
D.b9o=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.aw8=w([D.b9o,D.adK],x.O)
D.bSw=new A.a8(B.ax,B.aC,B.x,D.aw8,null,null)
D.acI=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.bbs=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cYf=w([D.acI,D.bbs],x.O)
D.bT7=new A.a8(B.a3,B.a7,B.x,D.cYf,null,null)
D.d9q=w([B.bI,B.mT],x.O)
D.bT9=new A.a8(B.b0,B.b5,B.x,D.d9q,null,null)
D.bdQ=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.dah=w([D.bdQ,D.kb,D.kb,Aj.Ws],x.O)
D.dcs=w([0,0.07,0.9,1],x.F)
D.bTF=new A.a8(B.a3,B.a7,B.x,D.dah,D.dcs,null)
D.bTQ=new A.a8(B.ax,B.aC,B.x,B.Q6,null,null)
D.d91=w([B.aZ,B.aV,B.bW],x.O)
D.bUP=new A.a8(B.ax,B.aC,B.x,D.d91,null,null)
D.cff=w([B.bt,B.aZ,B.eX],x.O)
D.cfm=w([B.by,B.aE,B.jr],x.O)
D.cfo=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bcu=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cls=w([D.bcu,E.ads],x.O)
D.e_H=new A.u(1,2)
D.eIS=new A.cP(B.aX,D.e_H,3)
D.atg=w([D.eIS],x.A)
D.csG=w([B.h0,B.c9,B.f6],x.O)
D.cvj=w([B.bJ,B.bv,B.bm],x.O)
D.bwB=new C.u1("classic","Classic leather","Gold-edged brown leather",D.aw8,E.jN,E.jN,"\u2766",B.L,!0,!1,!1,!1)
D.b5E=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bia=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cRe=w([D.b5E,D.bia],x.O)
D.adv=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bww=new C.u1("ornate","Ornate gold","Double gold border and flourishes",D.cRe,D.adv,D.adv,"\u2726",B.L,!0,!0,!0,!1)
D.b93=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.beB=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cJF=w([D.b93,D.beB],x.O)
D.bwv=new C.u1("parchment","Parchment","Old paper with dark ink",D.cJF,D.Eo,G.ir,"\u2767",B.L,!0,!1,!1,!0)
D.ab5=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bgE=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.d7s=w([D.ab5,D.bgE],x.O)
D.bc4=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bg0=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bwy=new C.u1("minimal","Clean paper","Plain and elegant, like a printed book",D.d7s,D.bc4,D.bg0,"",B.L,!0,!0,!1,!0)
D.bwA=new C.u1("midnight","Midnight","Deep blue with silver stars",L.awr,B.cp,B.bM,"\u2727",B.L,!0,!0,!1,!1)
D.bwu=new C.u1("emerald","Emerald library","Green cloth, title on the left",A_.atF,E.jN,B.h1,"\u25c6",B.bg,!0,!1,!1,!1)
D.bh1=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.d5T=w([B.er,D.bh1],x.O)
D.bd6=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.bec=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bwz=new C.u1("rose","Rose vintage","Burgundy with rose-gold lettering",D.d5T,D.bd6,D.bec,"\u2740",B.L,!0,!1,!0,!1)
D.d9V=w([B.cC,P.nI],x.O)
D.bwx=new C.u1("modern","Modern","Dark, bold, left-aligned",D.d9V,B.aT,B.c,"",B.bg,!1,!0,!1,!1)
D.a0X=w([D.bwB,D.bww,D.bwv,D.bwy,D.bwA,D.bwu,D.bwz,D.bwx],A.ax("O<u1>"))
D.cJb=w([B.bW,B.bj],x.O)
D.bdG=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cJR=w([D.ab5,D.bdG],x.O)
D.b9_=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cLo=w([D.b9_,B.db],x.O)
D.cMS=w([B.b8,B.iM,B.ok],x.O)
D.cNe=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b6f=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.baO=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.dco=w([D.acI,D.b6f,D.baO],x.O)
D.bwC=new C.u2("leather","Leather",D.dco,"vintage")
D.cU9=w([B.dq,B.Kr,A3.VE],x.O)
D.bwJ=new C.u2("midnight","Midnight",D.cU9,"starry")
D.cMT=w([B.fm,B.e9,B.l5],x.O)
D.bwI=new C.u2("forest","Forest",D.cMT,"story")
D.dee=w([B.eM,B.er,B.kc],x.O)
D.bwF=new C.u2("burgundy","Burgundy",D.dee,"royal")
D.cuU=w([B.aE,B.pl,B.nx],x.O)
D.bwG=new C.u2("royal","Royal",D.cuU,"royal")
D.cPa=w([B.bv,B.cC,P.nI],x.O)
D.bwD=new C.u2("charcoal","Charcoal",D.cPa,"geo")
D.dcw=w([B.cd,B.dO,B.wU],x.O)
D.bwH=new C.u2("sunset","Sunset",D.dcw,"sunset")
D.dd9=w([B.iM,B.Ep,B.VI],x.O)
D.bwE=new C.u2("ocean","Ocean",D.dd9,"band")
D.ys=w([D.bwC,D.bwJ,D.bwI,D.bwF,D.bwG,D.bwD,D.bwH,D.bwE],A.ax("O<u2>"))
D.cPy=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cQ5=w([B.ak,B.aK,B.M],x.O)
D.cRj=w([B.er,B.e9,B.dq,B.fv,B.wX,B.cZ,B.jQ,B.eu,B.d9],x.O)
D.cRk=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eIT=new A.cP(B.dn,B.dD,8)
D.cRt=w([D.eIT],x.A)
D.cSw=w([B.bU,B.dO,B.kF],x.O)
D.cSY=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cU5=w([B.bU,B.hg],x.O)
D.cW0=w([B.aM,B.Ah,B.wM],x.O)
D.cWS=w([B.bK,B.ci,B.dy,B.aM],x.O)
D.cXm=w([B.j4,B.cd,B.t4],x.O)
D.cXP=w([B.eX,B.cZ],x.O)
D.cYk=w([B.ct,B.fC,B.hu],x.O)
D.cYv=w([B.aT,B.bj,B.dq],x.O)
D.cZ0=w([B.es,B.d_,B.e9],x.O)
D.cZh=w([B.dS,B.dq,B.Kr],x.O)
D.d_x=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a1R=w(["leather","linen","plain","stars","rays"],x.s)
D.bE0=new A.a_(985219,"MaterialIcons",!1)
D.bDz=new A.a_(983781,"MaterialIcons",!1)
D.avS=w([B.ajA,B.hZ,B.lK,B.i_,D.bE0,B.FQ,B.pI,D.bDz,L.ale,B.xY,B.pK,B.ml],A.ax("O<a_>"))
D.a1W=w(["double","single","corners","none"],x.s)
D.d2a=w([B.dz,B.bn,B.eu],x.O)
D.d2n=w([],x.t)
D.BS=w([],x.u)
D.d4y=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.d6M=w([B.aH,B.fC,B.fv],x.O)
D.d82=w([B.co,B.om,B.WC],x.O)
D.d8f=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dqN=new C.lv("construction","Construction","Jobsite & builds",B.xN)
D.dqU=new C.lv("house","Home Build","Houses & rooms",B.vq)
D.dqK=new C.lv("grocery","Grocery","Store & pantry",B.a_y)
D.dqJ=new C.lv("calculator","Calculations","Math & estimates",B.ML)
D.dqS=new C.lv("lumber","Materials","Lumber & supplies",B.N1)
D.dqG=new C.lv("kitchen","Kitchen","Remodel & meals",A9.ako)
D.bDw=new A.a_(983756,"MaterialIcons",!1)
D.dqL=new C.lv("landscape","Landscaping","Yard & garden",D.bDw)
D.dqF=new C.lv("plumbing","Plumbing","Pipes & water",B.pT)
D.dqV=new C.lv("electrical","Electrical","Wiring & power",B.h8)
D.dqD=new C.lv("store","Retail Shop","Daily business",B.kM)
D.dqE=new C.lv("paint_remodel","Paint & Remodel","Colors & walls",Aa.a_8)
D.bCW=new A.a_(983311,"MaterialIcons",!1)
D.dqR=new C.lv("roofing","Roofing","Roofs & exteriors",D.bCW)
D.bDJ=new A.a_(983986,"MaterialIcons",!1)
D.dqC=new C.lv("warehouse","Warehouse","Storage & stock",D.bDJ)
D.dqP=new C.lv("vehicles","Vehicles","Fleet & transport",B.FR)
D.bAJ=new A.a_(62785,"MaterialIcons",!1)
D.dqI=new C.lv("farm","Farm","Crops & livestock",D.bAJ)
D.dqH=new C.lv("restaurant","Restaurant","Food & catering",B.tR)
D.dqO=new C.lv("tools","Tools","Workshop gear",B.FN)
D.dqT=new C.lv("wallet","Cash & Wallet","Quick spending",B.jz)
D.bBV=new A.a_(63395,"MaterialIcons",!1)
D.dqQ=new C.lv("concrete","Concrete","Foundation work",D.bBV)
D.dqM=new C.lv("blueprint","Blueprint","Plans & design",Af.ajG)
D.a2m=w([D.dqN,D.dqU,D.dqK,D.dqJ,D.dqS,D.dqG,D.dqL,D.dqF,D.dqV,D.dqD,D.dqE,D.dqR,D.dqC,D.dqP,D.dqI,D.dqH,D.dqO,D.dqT,D.dqQ,D.dqM],A.ax("O<lv>"))
D.d8J=w([B.bq,B.bn],x.O)
D.d9r=w([B.i5,B.nB,B.dF],x.O)
D.a2u=w(["top","middle","bottom"],x.s)
D.dbN=w([B.cs,B.bj,B.dq],x.O)
D.dcj=w([B.b7,B.d_,B.e9],x.O)
D.de9=w([B.bJ,B.ak],x.O)
D.dea=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dYl={top:0,middle:1,bottom:2}
D.dhl=new A.bm(D.dYl,["Top","Middle","Bottom"],x.n)
D.dY_={double:0,single:1,corners:2,none:3}
D.dhq=new A.bm(D.dY_,["Double line","One line","Corners","None"],x.n)
D.dZ7={leather:0,linen:1,plain:2,stars:3,rays:4}
D.diO=new A.bm(D.dZ7,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dj0=new A.bm(B.ie,[],A.ax("bm<H,+(n,n)>"))
D.dYd={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.C2=new A.bm(D.dYd,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bm<n,H>"))
D.dlm=new F.Mp(32,null)
D.dln=new F.Mp(40,null)
D.dlo=new F.Mp(46,null)
D.aF1=new C.arc(null)
D.e0E=new A.u(8,14)
D.ffD=new A.x("Write a new book",null,B.i3,null,B.L,null,null,null,null,null,null,null)
D.e3k=new A.C(B.l9,D.ffD,null)
D.alF=new A.ae(B.hx,18,B.c,null,null,null)
D.f9c=new A.x("Add",null,B.mC,null,null,null,null,null,null,null,null,null)
D.cX6=w([D.alF,B.q9,D.f9c],x.p)
D.eGQ=new A.cm(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cX6,null)
D.e3E=new A.C(B.nQ,D.eGQ,null)
D.e3F=new A.C(E.afX,Z.V7,null)
D.f3h=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcb=new A.x("New Project",null,D.f3h,null,null,null,null,null,null,null,null,null)
D.d_T=w([D.alF,B.ab,D.fcb],x.p)
D.eGT=new A.cm(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d_T,null)
D.e3Q=new A.C(B.ix,D.eGT,null)
D.fer=new A.x("Choose your header",null,U.rA,null,null,null,null,null,null,null,null,null)
D.e4a=new A.C(B.hJ,D.fer,null)
D.b4G=new A.fi(2.2,null,null,null,null,B.cZ,null,null,null,null)
D.eLw=new A.a7(22,22,D.b4G,null)
D.b2S=new A.cr(B.A,null,null,D.eLw,null)
D.e4f=new A.C(B.Xx,D.b2S,null)
D.bpW=new A.Q(14,2,14,6)
D.frI=new A.x("The top of your book. Tap a design to see it.",null,T.SP,null,null,null,null,null,null,null,null,null)
D.e4g=new A.C(D.bpW,D.frI,null)
D.e5O=new A.iM(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.e5R=new A.iM(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aGg=new A.iM(1,0.9607843137254902,0.48627450980392156,0)
D.HR=new A.iM(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.yZ=new A.iM(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.e5X=new A.iM(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fN8=new C.bfC(null)
D.bl5=new A.md(D.fN8,null,B.au,null,null)
D.aJU=new A.cL(0,0,0,0,null,null,D.bl5,null)
D.etd=new A.y(-42,42)
D.eBA=new A.cH([0,0,1,1])
D.aLb=new A.a9(0,0,520,160)
D.aLo=new A.b7(B.rO,B.Y)
D.frg=new A.x("Let the AI write it from your tree",null,B.kv,null,B.L,null,null,null,null,null,null,null)
D.bxf=new A.dq(1,B.cj,D.frg,null)
D.cU4=w([E.a00,B.ab,D.bxf],x.p)
D.eGy=new A.cm(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cU4,null)
D.f8T=new A.x("Save member",null,B.ce,null,null,null,null,null,null,null,null,null)
D.d73=w([D.amu,B.ab,D.f8T],x.p)
D.eGG=new A.cm(B.aO,B.bb,B.j,B.m,null,B.p,null,0,D.d73,null)
D.bI5=new A.ae(B.hK,14,B.aZ,null,null,null)
D.eYm=new A.G(!0,B.aZ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcB=new A.x("Cashier",null,D.eYm,null,null,null,null,null,null,null,null,null)
D.d0o=w([D.bI5,B.bp,D.fcB],x.p)
D.eGI=new A.cm(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d0o,null)
D.f8U=new A.x("Transfer & settings",null,B.ds,null,null,null,null,null,null,null,null,null)
D.bvE=new A.bD(1,B.bi,D.f8U,null)
D.cMm=w([D.am3,B.av,D.bvE],x.p)
D.eGJ=new A.cm(B.aO,B.e,B.j,B.m,null,B.p,null,0,D.cMm,null)
D.eKf=new A.at(16,40)
D.eKk=new A.at(22,64)
D.eKr=new A.at(280,88)
D.eLb=new A.a7(30,null,null,null)
D.eMu=new A.hK(2,12,12,1.05,null)
D.fch=new A.x("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eNc=new A.b1(D.fch,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fcw=new A.x("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aNd=new A.b1(D.fcw,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fks=new A.x("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eNG=new A.b1(D.fks,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fuv=new A.x("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eNL=new A.b1(D.fuv,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fep=new A.x("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eNS=new A.b1(D.fep,null,null,null,null,null,null,null,null,null,null,null,null,B.fG,!1,null,null,null,B.r,null)
D.frV=new A.x("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aNh=new A.b1(D.frV,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.f9t=new A.x("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eOh=new A.b1(D.f9t,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fva=new A.x("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eP0=new A.b1(D.fva,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fqe=new A.x("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.ePp=new A.b1(D.fqe,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fuz=new A.x("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.ePs=new A.b1(D.fuz,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.flZ=new A.x("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ePu=new A.b1(D.flZ,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fgd=new A.x("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.ePv=new A.b1(D.fgd,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fge=new A.x("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eQv=new A.b1(D.fge,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fcj=new A.x("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eQN=new A.b1(D.fcj,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fe6=new A.x("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eR5=new A.b1(D.fe6,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.flu=new A.x("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eRl=new A.b1(D.flu,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fh0=new A.x("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eRm=new A.b1(D.fh0,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.eUl=new A.G(!0,D.kb,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUL=new A.G(!0,D.kb,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVo=new A.rr(!0,B.ro,null,null,null,null,B.dr,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVF=new A.G(!0,D.kb,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWc=new A.G(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a6J=new A.rr(!0,B.Rs,null,null,null,null,B.dr,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXb=new A.G(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXA=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ7=new A.G(!0,null,null,null,null,null,8,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZb=new A.G(!0,G.ir,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_q=new A.G(!0,B.M,null,null,null,null,13,B.a5,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f07=new A.G(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0R=new A.G(!0,B.bW,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0V=new A.G(!0,B.bI,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1g=new A.G(!0,D.Eo,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1p=new A.G(!0,B.aZ,null,null,null,null,13,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2n=new A.G(!0,B.cZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2R=new A.G(!0,B.bW,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3f=new A.G(!0,B.aZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4G=new A.G(!0,B.ak,null,null,null,null,11.5,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4O=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPr=new A.G(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7c=new A.G(!0,B.ak,null,null,null,null,12,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6u=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6S=new A.G(!0,G.ir,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6Z=new A.G(!0,G.ir,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7J=new A.x("Themes",null,B.oZ,null,null,null,null,null,null,null,null,null)
D.f8l=new A.x("Add Item",null,B.ce,null,null,null,null,null,null,null,null,null)
D.eYR=new A.G(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8J=new A.x("Debt receipt",null,D.eYR,null,B.L,null,null,null,null,null,null,null)
D.aPm=new A.G(!0,B.ak,null,null,null,null,11,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9_=new A.x("Person who owes",null,D.aPm,null,null,null,null,null,null,null,null,null)
D.f9W=new A.x("Notes",null,B.a6Q,null,null,null,null,null,null,null,null,null)
D.fal=new A.x("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.eXS=new A.G(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fap=new A.x("Share",null,D.eXS,null,null,null,null,null,null,null,null,null)
D.fbj=new A.x("Move your family trees",null,D.aPr,null,null,null,null,null,null,null,null,null)
D.fbU=new A.x("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fcv=new A.x("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fdH=new A.x("Remove this book?",null,B.ho,null,null,null,null,null,null,null,null,null)
D.aPR=new A.x("Download",null,B.ce,null,null,null,null,null,null,null,null,null)
D.feN=new A.x("What should the AI do?",null,B.ds,null,null,null,null,null,null,null,null,null)
D.fg9=new A.x("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fhf=new A.x("Ribbon bookmark",null,B.iH,null,null,null,null,null,null,null,null,null)
D.f4A=new A.G(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhK=new A.x("NGMY.ORG",null,D.f4A,null,B.L,null,null,null,null,null,null,null)
D.fiZ=new A.x("Scan family tree QR",null,B.cx,null,null,null,null,null,null,null,null,null)
D.f18=new A.G(!0,B.c,null,null,null,null,13,B.a5,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjI=new A.x("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.f18,null,B.L,null,null,null,null,null,null,null)
D.fkU=new A.x("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fl0=new A.x("Thumbnail",null,B.oZ,null,null,null,null,null,null,null,null,null)
D.flA=new A.x("Save the cover",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fm_=new A.x("Your photos",null,B.oZ,null,null,null,null,null,null,null,null,null)
D.fme=new A.x("Create Project",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fmI=new A.x("Design your cover",null,U.rA,null,null,null,null,null,null,null,null,null)
D.fmP=new A.x("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fmS=new A.x("PICTURE",null,H.mD,null,null,null,null,null,null,null,null,null)
D.fnd=new A.x("Paid",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fnf=new A.x("You can undo it right after.",null,T.SY,null,null,null,null,null,null,null,null,null)
D.fnL=new A.x("Print",null,B.ut,null,null,null,null,null,null,null,null,null)
D.fo6=new A.x("Amount owed",null,D.aPm,null,null,null,null,null,null,null,null,null)
D.fok=new A.x("Got it",null,B.ce,null,null,null,null,null,null,null,null,null)
D.foV=new A.x("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.foY=new A.x("Add to budget",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fpp=new A.x("Debtor signature",null,B.a6Q,null,null,null,null,null,null,null,null,null)
D.fpx=new A.x("Change icon",null,E.aOF,null,null,null,null,null,null,null,null,null)
D.fqH=new A.x("Family tree QR",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fr6=new A.x("Download",null,B.ut,null,null,null,null,null,null,null,null,null)
D.fra=new A.x("Change",null,B.oZ,null,null,null,null,null,null,null,null,null)
D.fs0=new A.x("Clear all",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fs3=new A.x("WHAT SHOULD IT CHANGE?",null,H.mD,null,null,null,null,null,null,null,null,null)
D.fsD=new A.x("COLOUR",null,H.mD,null,null,null,null,null,null,null,null,null)
D.fsP=new A.x("Do it",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fsS=new A.x("Create Tree",null,B.ce,null,null,null,null,null,null,null,null,null)
D.ftQ=new A.x("Create Family Tree",null,B.eV,null,null,null,null,null,null,null,null,null)
D.eTj=new A.G(!0,E.jN,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu5=new A.x("Write the first page myself",null,D.eTj,null,null,null,null,null,null,null,null,null)
D.fuC=new A.x("Use this header",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fuI=new A.x("Create Project",null,E.aP5,null,null,null,null,null,null,null,null,null)
D.fJL=new C.aaz(1,"header")
D.a80=new C.aaz(2,"projects")
D.fJM=new C.aaz(3,"cashier")
D.a81=new C.aaz(4,"familyTree")
D.fV3=new C.cuM(0,"start")
D.fV4=new C.cuN(0,"start")
D.fK2=new C.XK(null)
D.fL1=new C.Yb(null)
D.diY=new A.bm(B.ie,[],A.ax("bm<n,Fi>"))
D.d2J=w([],x.E)
D.d2K=w([],x.M)
D.fLy=new C.bcT(D.diY,D.d2J,D.d2K,0,0,null,null)
D.fNN=new C.Zz(null)
D.a8J=new C.aIi(0,"projects")
D.aTY=new C.aIi(1,"cashier")
D.fT0=new C.aIi(2,"familyTree")})()};
(a=>{a["SeSFJrucz1aUK7ExrEPxUso2F7U="]=a.current})($__dart_deferred_initializers__);