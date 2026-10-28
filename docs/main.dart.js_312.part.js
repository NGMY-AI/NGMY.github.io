((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,N,S,A2,G,F,E,O,A3,A4,A5,T,U,A6,A7,M,A8,H,A9,Aa,V,W,X,Ab,Ac,Y,Ad,Ae,Z,Af,Ag,Ah,K,Ai,A_,A0,P,Aj,L,Q,C={
bBz(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bBz=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.v8(null,""),$async$bBz)
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
return A.b(A.qJ(t,a1,B.hl,E.ES),$async$bBz)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.PR(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.V(l!=null&&A.Ky(l)?y.l:y.i)
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a1A(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBz,v)},
ag1(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ag1=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.v8(null,""),$async$ag1)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.V(y.j)
t=A.n1(b6)
s=x.S
r=A.dd(c1,0,A.dJ(4,"count",s),A.U(c1).c)
q=F.a1n(new A.K(r,new C.fvm(),r.$ti.k("K<ak.E,n>")).aI(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fvl(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.R.ao(b7,null)+"\nAllowed values: style one of "+B.d.aI(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ag1)
case 6:l=c5
k=F.PR(l==null?"":l)
if(k==null)throw A.V("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.anb(s,D.djm,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
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
return A.b(m.$1(f+B.R.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ag1)
case 10:l=c5
k=l==null?null:F.PR(l)
if(k==null)throw A.V(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d9(a8,d),a5=J.aV(a2.a),a2=a2.$ti,a7=new A.kX(a5,a2.k("kX<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gS(a5))
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
p=A.cD(new A.bc(h,s),new C.fvn(),s.k("J.E"),p)
p=F.a1n(A.p7(p,3,A.a3(p).k("J.E")).aI(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.B(new A.cu(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a1A(s,b9),$async$ag1)
case 13:b5=c5
for(s=J.a5(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.anb(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ag1,v)},
hjr(d,e,f){return A.ca(null,B.w.j(0.65),!1,null,new C.fEs(e,f),d,null,!0,!0,x.g2)},
anb:function anb(d,e,f){this.a=d
this.b=e
this.c=f},
fvm:function fvm(){},
fvl:function fvl(d){this.a=d},
fvn:function fvn(){},
fEs:function fEs(d,e){this.a=d
this.b=e},
bzo(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bzo=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b7(b1,new C.fkB())){u=null
w=1
break}t=B.d.da(b1,new C.fkC())
s=$.W()
r=new A.qS()
q=A.D0(r,D.aLm)
p=A.M()
p.r=B.c.gp(0)
q.aX(D.aLm,p)
o=A.M()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bO
o.e=B.fz
n=new C.fkH(t)
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
return A.b(r.pu().z3(520,160),$async$bzo)
case 4:w=3
return A.b(b3.hq(B.fX),$async$bzo)
case 3:b0=b3
u=b0==null?null:J.eR(B.dD.gaM(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzo,v)},
ft2(d){return C.hXJ(d)},
hXJ(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$ft2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.beC()
n=d.x!=null&&d.yK(null).length===0
if(d.x!=null)t=n?D.z1:D.HT
else t=d.gT7()?D.HT:D.aGq
w=3
return A.b(C.bzo(d.ax),$async$ft2)
case 3:s=f
p.a=null
if(s!=null)p.a=A.alV(s)
r=A.a3u(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aGq}else{p.c=C.wv(q,!0)
p.b=n?D.z1:D.HT}r.a2i(A.fOw(new C.ft4(p,d,new C.ft5(),t,n,o),null,D.btr,B.vY))
u=r.jY(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ft2,v)},
fzG(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fzG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ft2(d),$async$fzG)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aK(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A7.Gc(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fzG,v)},
fkB:function fkB(){},
fkC:function fkC(){},
fkH:function fkH(d){this.a=d},
ft5:function ft5(){},
ft4:function ft4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ft3:function ft3(){},
fEU(d,e){var w=0,v=A.j(x.H)
var $async$fEU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,B.w.j(0.55),!0,null,new C.fEY(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fEU)
case 2:return A.h(null,v)}})
return A.i($async$fEU,v)},
bC2(d,e,f,g){return C.i4b(d,e,f,g)},
i4b(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bC2=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gal(e.split(",")):e
r=B.cE.aJ(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.R(D.eRu)
w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.fEQ(g,r,f),d,null,!0,!0,x.H),$async$bC2)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bC2,v)},
fEZ(d,e){var w=0,v=A.j(x.H)
var $async$fEZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,null,!0,null,new C.fF1(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fEZ)
case 2:return A.h(null,v)}})
return A.i($async$fEZ,v)},
aXk:function aXk(d,e){this.c=d
this.a=e},
c0j:function c0j(){},
b9m:function b9m(d,e){this.b=d
this.a=e},
fEY:function fEY(d,e){this.a=d
this.b=e},
fEV:function fEV(d){this.a=d},
fEW:function fEW(d,e,f){this.a=d
this.b=e
this.c=f},
fEX:function fEX(d,e){this.a=d
this.b=e},
fEQ:function fEQ(d,e,f){this.a=d
this.b=e
this.c=f},
fEO:function fEO(d){this.a=d},
fEP:function fEP(d,e,f){this.a=d
this.b=e
this.c=f},
fF1:function fF1(d,e){this.a=d
this.b=e},
fF_:function fF_(d){this.a=d},
fF0:function fF0(d,e,f){this.a=d
this.b=e
this.c=f},
fo5(d,e){var w=0,v=A.j(x.y),u,t
var $async$fo5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a18(d),$async$fo5)
case 3:t=g
J.no(t,new C.fo6(e))
u=A.agF(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fo5,v)},
fo6:function fo6(d){this.a=d},
ani:function ani(d,e,f){this.c=d
this.d=e
this.a=f},
aBx:function aBx(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dDX:function dDX(d,e){this.a=d
this.b=e},
dDI:function dDI(d,e){this.a=d
this.b=e},
dDL:function dDL(d,e,f){this.a=d
this.b=e
this.c=f},
dDK:function dDK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dDJ:function dDJ(d,e){this.a=d
this.b=e},
dDM:function dDM(d,e){this.a=d
this.b=e},
dDG:function dDG(){},
dDH:function dDH(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dDF:function dDF(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dDq:function dDq(d){this.a=d},
dDr:function dDr(d,e,f){this.a=d
this.b=e
this.c=f},
dDs:function dDs(d,e){this.a=d
this.b=e},
dDp:function dDp(d){this.a=d},
dDx:function dDx(d,e){this.a=d
this.b=e},
dDo:function dDo(d){this.a=d},
dDy:function dDy(d,e,f){this.a=d
this.b=e
this.c=f},
dDz:function dDz(d,e,f){this.a=d
this.b=e
this.c=f},
dDn:function dDn(d,e){this.a=d
this.b=e},
dDA:function dDA(d,e,f){this.a=d
this.b=e
this.c=f},
dDm:function dDm(d,e){this.a=d
this.b=e},
dDB:function dDB(d,e){this.a=d
this.b=e},
dDl:function dDl(d){this.a=d},
dDC:function dDC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dDj:function dDj(){},
dDd:function dDd(d){this.a=d},
dDe:function dDe(d){this.a=d},
dDk:function dDk(d,e){this.a=d
this.b=e},
dDD:function dDD(d,e){this.a=d
this.b=e},
dDi:function dDi(d){this.a=d},
dDE:function dDE(d){this.a=d},
dDh:function dDh(){},
dDt:function dDt(d,e){this.a=d
this.b=e},
dDg:function dDg(d){this.a=d},
dDu:function dDu(d,e,f){this.a=d
this.b=e
this.c=f},
dDf:function dDf(d,e){this.a=d
this.b=e},
dDc:function dDc(d,e){this.a=d
this.b=e},
dDv:function dDv(d){this.a=d},
dDw:function dDw(d,e,f){this.a=d
this.b=e
this.c=f},
dE_:function dE_(){},
dE0:function dE0(d,e){this.a=d
this.b=e},
dDY:function dDY(d){this.a=d},
dDZ:function dDZ(d){this.a=d},
dDU:function dDU(d,e){this.a=d
this.b=e},
dDV:function dDV(d){this.a=d},
dDN:function dDN(d,e,f){this.a=d
this.b=e
this.c=f},
dDO:function dDO(d,e,f){this.a=d
this.b=e
this.c=f},
dDP:function dDP(d,e,f){this.a=d
this.b=e
this.c=f},
dDQ:function dDQ(d,e,f){this.a=d
this.b=e
this.c=f},
dDR:function dDR(d,e,f){this.a=d
this.b=e
this.c=f},
dDS:function dDS(d,e,f){this.a=d
this.b=e
this.c=f},
dDT:function dDT(d,e,f){this.a=d
this.b=e
this.c=f},
dE1:function dE1(){},
dE2:function dE2(){},
dE3:function dE3(){},
dE4:function dE4(d){this.a=d},
dDW:function dDW(d,e){this.a=d
this.b=e},
hfG(d){return B.d.dL(D.a13,new C.foC(d),new C.foD())},
u2:function u2(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
foC:function foC(d){this.a=d},
foD:function foD(){},
ajF:function ajF(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aT6:function aT6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
S4:function S4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcY:function bcY(){this.d=$
this.c=this.a=null},
d3M:function d3M(d,e){this.a=d
this.b=e},
d3K:function d3K(d,e){this.a=d
this.b=e},
d3L:function d3L(){},
d3N:function d3N(d,e){this.a=d
this.b=e},
h0x(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.n8(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
Kj(d,e){return C.hWm(d,e)},
hWm(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Kj=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Kj)
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
o=A.cD(o,new C.fqE(),o.$ti.k("J.E"),x.B)
n=A.a3(o).k("a2<J.E>")
o=A.B(new A.a2(o,new C.fqF(),n),n.k("J.E"))
B.d.b_(o,new C.fqG())
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
return A.i($async$Kj,v)},
Aw(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Aw=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$Aw)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fDy(),x.a)
r=A.B(r,r.$ti.k("ak.E"))
w=4
return A.b(t.au("String","ngmy_family_book_v1_"+s+"_"+e,B.R.ao(r,null)),$async$Aw)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Aw,v)},
aPg(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aPg=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Kj(d,e),$async$aPg)
case 2:u=h
t=J.cE(u)
s=t.bd(u,new C.fLD(f))
if(s===-1)t.ck(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Aw(d,e,u),$async$aPg)
case 3:return A.h(null,v)}})
return A.i($async$aPg,v)},
bzR(d,e,f){var w=0,v=A.j(x.H),u
var $async$bzR=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Kj(d,e),$async$bzR)
case 2:u=h
J.no(u,new C.fnY(f))
w=3
return A.b(C.Aw(d,e,u),$async$bzR)
case 3:return A.h(null,v)}})
return A.i($async$bzR,v)},
bA5(d,e){return C.hWl(d,e)},
hWl(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bA5=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bA5)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aT(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Ma
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
if(D.C4.ai(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a2A,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.t(D.a21,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.t(D.a1X,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.t(D.cPS,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.H8(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Ma
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Ma
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bA5,v)},
QV(d,e,f){return C.i3I(d,e,f)},
i3I(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$QV=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$QV)
case 7:r=h
w=8
return A.b(r.au("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.R.ao(f.ag(),null)),$async$QV)
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
return A.i($async$QV,v)},
Qp(d,e){return C.hWn(d,e)},
hWn(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Qp=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Qp)
case 7:r=g
q=r.rX("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Kj(d,e),$async$Qp)
case 8:if(!j.cy(g)){n=B.a.i(d.toLowerCase())
m=J.lo(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Qp)
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
return A.i($async$Qp,v)},
afk(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$afk=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qp(d,e),$async$afk)
case 3:s=g
r=J.a5(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.K(s,t)
w=5
return A.b(A.az(),$async$afk)
case 5:w=4
return A.b(g.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$afk)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afk,v)},
a1N(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a1N=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Qp(d,e),$async$a1N)
case 2:s=h
J.hC(s,f)
w=3
return A.b(A.az(),$async$a1N)
case 3:u=h
w=4
return A.b(u.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a1N)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1N)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1N)
case 6:return A.h(null,v)}})
return A.i($async$a1N,v)},
n8:function n8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fqE:function fqE(){},
fqF:function fqF(){},
fqG:function fqG(){},
fDy:function fDy(){},
fLD:function fLD(d){this.a=d},
fnY:function fnY(d){this.a=d},
H8:function H8(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bMc:function bMc(d){this.a=d},
i40(d,e,f,g,h,i,j){return A.a6(d,!1).c8(A.e8(new C.fE6(j,i,f,e,h,g),!0,null,x.H))},
Ql(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Ql=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qp(h,g),$async$Ql)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.I(x.q).f.R(D.aNp)
u=!1
w=1
break}w=4
return A.b(C.hjr(d,f,e),$async$Ql)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.afk(h,g),$async$Ql)
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
return A.b(C.Aw(h,r,p),$async$Ql)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.QV(h,r,new C.H8("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Ql)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ql,v)},
fE6:function fE6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
YB:function YB(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ayA:function ayA(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d4r:function d4r(d){this.a=d},
d4q:function d4q(d,e){this.a=d
this.b=e},
d4f:function d4f(d,e){this.a=d
this.b=e},
d4c:function d4c(d,e){this.a=d
this.b=e},
d3O:function d3O(d){this.a=d},
d3P:function d3P(d,e){this.a=d
this.b=e},
d4g:function d4g(d){this.a=d},
d3X:function d3X(d){this.a=d},
d3V:function d3V(d){this.a=d},
d3W:function d3W(d){this.a=d},
d3Y:function d3Y(d){this.a=d},
d4d:function d4d(d){this.a=d},
d4e:function d4e(){},
d3T:function d3T(d){this.a=d},
d3U:function d3U(d,e){this.a=d
this.b=e},
d3Z:function d3Z(d){this.a=d},
d4_:function d4_(d,e){this.a=d
this.b=e},
d4p:function d4p(d){this.a=d},
d4o:function d4o(d,e){this.a=d
this.b=e},
d4n:function d4n(d){this.a=d},
d49:function d49(d){this.a=d},
d48:function d48(d){this.a=d},
d4a:function d4a(d){this.a=d},
d3Q:function d3Q(d,e){this.a=d
this.b=e},
d4b:function d4b(d,e){this.a=d
this.b=e},
d42:function d42(d){this.a=d},
d43:function d43(d){this.a=d},
d41:function d41(){},
d44:function d44(d){this.a=d},
d45:function d45(d){this.a=d},
d46:function d46(d,e){this.a=d
this.b=e},
d47:function d47(d,e,f){this.a=d
this.b=e
this.c=f},
d40:function d40(d,e){this.a=d
this.b=e},
d4i:function d4i(d){this.a=d},
d4h:function d4h(){},
d4j:function d4j(d){this.a=d},
d4k:function d4k(d){this.a=d},
d4l:function d4l(d){this.a=d},
d4m:function d4m(d,e){this.a=d
this.b=e},
d3R:function d3R(d){this.a=d},
d3S:function d3S(d){this.a=d},
YF:function YF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdi:function bdi(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d6b:function d6b(d){this.a=d},
d6c:function d6c(d){this.a=d},
d6a:function d6a(d){this.a=d},
d6d:function d6d(d){this.a=d},
d69:function d69(d){this.a=d},
d6e:function d6e(d){this.a=d},
d68:function d68(d){this.a=d},
d6f:function d6f(d,e){this.a=d
this.b=e},
d67:function d67(d,e){this.a=d
this.b=e},
d6g:function d6g(d,e){this.a=d
this.b=e},
YD:function YD(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
adP:function adP(d,e,f){this.a=d
this.b=e
this.c=f},
ayB:function ayB(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d4G:function d4G(d,e){this.a=d
this.b=e},
d4F:function d4F(d,e){this.a=d
this.b=e},
d4K:function d4K(d){this.a=d},
d4J:function d4J(d,e){this.a=d
this.b=e},
d4H:function d4H(d){this.a=d},
d4I:function d4I(d){this.a=d},
d4L:function d4L(d){this.a=d},
d4M:function d4M(d){this.a=d},
d4E:function d4E(d,e){this.a=d
this.b=e},
d4D:function d4D(d,e){this.a=d
this.b=e},
Jr:function Jr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XU:function XU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cDJ:function cDJ(d){this.a=d},
cDK:function cDK(){},
cDL:function cDL(d){this.a=d},
baz:function baz(d,e,f){this.b=d
this.c=e
this.a=f},
baq:function baq(d,e){this.b=d
this.a=e},
u3:function u3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Yb:function Yb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bax:function bax(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cXa:function cXa(d,e,f){this.a=d
this.b=e
this.c=f},
cX9:function cX9(d,e){this.a=d
this.b=e},
cXz:function cXz(d){this.a=d},
cXm:function cXm(){},
cXA:function cXA(d){this.a=d},
cXl:function cXl(){},
cXB:function cXB(d,e){this.a=d
this.b=e},
cXk:function cXk(d,e){this.a=d
this.b=e},
cXC:function cXC(d,e){this.a=d
this.b=e},
cXj:function cXj(d,e){this.a=d
this.b=e},
cXD:function cXD(d){this.a=d},
cXi:function cXi(){},
cXE:function cXE(d,e){this.a=d
this.b=e},
cXh:function cXh(d,e){this.a=d
this.b=e},
cXF:function cXF(d){this.a=d},
cXu:function cXu(d,e){this.a=d
this.b=e},
cXG:function cXG(d){this.a=d},
cXH:function cXH(d){this.a=d},
cXJ:function cXJ(d){this.a=d},
cXK:function cXK(d){this.a=d},
cXt:function cXt(d,e){this.a=d
this.b=e},
cXL:function cXL(d,e){this.a=d
this.b=e},
aFA:function aFA(d){this.a=d},
bfM:function bfM(d){this.a=d},
b8L:function b8L(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hVk(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.agR(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bz(new A.S(Date.now(),0,!1))
s=new C.foG(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("a2<1>"),q=q.k("cQ<1,n>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.xD)m.push(l===D.Z5?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.jW(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jW(h,a2,a2)-A.jW(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.B(new A.cQ(new A.a2(a4,new C.foE(u,f),p),new C.foF(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aI(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aI(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hVl(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.agR(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.foL(v,e)
q=new C.foJ(v)
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
B.d.fi(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.L)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.fh(l,new C.foK(p,m));k.C();t=f){j=l.gS(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ai(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aI(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hH2(d,e,f,g){var w,v,u=C.hVm(d,e)
if(u<=0||f.length<=u)return new A.adp(!1,D.BU,f)
if(g.t(0,e.a))return new A.adp(!1,D.BU,f)
w=A.U(f).c
v=A.dd(f,0,A.dJ(u,"count",x.S),w).dG(0)
return new A.adp(!0,A.dd(f,u,null,w).dG(0),v)},
hH3(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.agR(d3),d2=d1.length
if(d2===0)return D.fMP
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.cg(0,t.a,new C.d4T(t))}s=new C.d59(v)
d2=x.h
r=A.T(w,d2)
q=new C.d51(r)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d50(r)
l=A.T(w,x.do)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ch(l.cg(0,k,new C.d4U()),o)}h=new C.d5_(s)
g=new C.d4Z(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a2<J.E>")
f=A.B(new A.a2(new A.bc(v,p),new C.d4V(h),o),o.k("J.E"))
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
a9=new C.d57(new C.d53(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dt(v,v.r,v.e),j=a2.gajH(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.et([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.K(0,i))break}if(h.$1(b0)&&a2.ai(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.r7(J.dH(i==null?B.T:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.cc)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.d4S(a2,new C.d58(),b6,a3,b4,v,a4,a5,a6,b5)
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
b4.n(0,b8,new C.Fk(o,new A.u(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Jz(c5.a,new A.u(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.B(new A.cu(b6,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bJ(0,new C.d4W(c6,b4))
for(d2=new A.cK(a4,a4.$ti.k("cK<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gS(j)
if(b6.ai(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.fh(j,new C.d4X(c8));i.C();)o.push(j.gS(0).b)
if(o.length===0)continue
B.d.b_(o,new C.d4Y())
c6.push(new C.aHG(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bd2(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hfd(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(d)
return w==null?null:w.b[1]},
h9z(d,e,f,g,h,i,j,k,l,m,n){return new C.Ze(k,f,j,e,l,n,m,d,g,h,i,null)},
aAy(d,e,f,g,h,i,j){return new C.bgI(i,d,e,f,j,h,g,null)},
aoo:function aoo(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aC7:function aC7(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dRY:function dRY(d){this.a=d},
dRX:function dRX(d){this.a=d},
dS_:function dS_(d,e){this.a=d
this.b=e},
dS0:function dS0(d,e){this.a=d
this.b=e},
dS1:function dS1(d){this.a=d},
dRW:function dRW(d,e){this.a=d
this.b=e},
dRZ:function dRZ(d){this.a=d},
dS3:function dS3(d){this.a=d},
dS2:function dS2(d,e){this.a=d
this.b=e},
aoi:function aoi(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aC4:function aC4(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dRo:function dRo(d){this.a=d},
dRm:function dRm(d){this.a=d},
dRn:function dRn(d){this.a=d},
dRp:function dRp(d,e){this.a=d
this.b=e},
dRj:function dRj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQS:function dQS(d){this.a=d},
dQT:function dQT(d,e){this.a=d
this.b=e},
dR6:function dR6(d){this.a=d},
dR4:function dR4(d){this.a=d},
dR5:function dR5(d,e){this.a=d
this.b=e},
dR7:function dR7(d){this.a=d},
dR8:function dR8(d,e){this.a=d
this.b=e},
dRi:function dRi(d,e){this.a=d
this.b=e},
dRg:function dRg(d,e){this.a=d
this.b=e},
dRf:function dRf(d,e){this.a=d
this.b=e},
dRb:function dRb(d,e){this.a=d
this.b=e},
dRa:function dRa(d){this.a=d},
dRc:function dRc(d,e){this.a=d
this.b=e},
dR9:function dR9(d){this.a=d},
dRd:function dRd(d){this.a=d},
dRe:function dRe(d){this.a=d},
dRh:function dRh(d,e){this.a=d
this.b=e},
dQG:function dQG(d,e){this.a=d
this.b=e},
dQH:function dQH(d,e){this.a=d
this.b=e},
dRr:function dRr(d,e,f){this.a=d
this.b=e
this.c=f},
dRl:function dRl(d,e,f){this.a=d
this.b=e
this.c=f},
dRk:function dRk(d){this.a=d},
dQI:function dQI(d){this.a=d},
dQJ:function dQJ(d){this.a=d},
dQK:function dQK(){},
dQL:function dQL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQP:function dQP(d,e){this.a=d
this.b=e},
dQO:function dQO(d,e){this.a=d
this.b=e},
dQN:function dQN(d){this.a=d},
dQQ:function dQQ(d,e){this.a=d
this.b=e},
dQM:function dQM(d){this.a=d},
dRq:function dRq(d){this.a=d},
dR1:function dR1(){},
dR2:function dR2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dR0:function dR0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQX:function dQX(d,e,f){this.a=d
this.b=e
this.c=f},
dQW:function dQW(d,e,f){this.a=d
this.b=e
this.c=f},
dQU:function dQU(d,e){this.a=d
this.b=e},
dQY:function dQY(d){this.a=d},
dQZ:function dQZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQV:function dQV(d,e){this.a=d
this.b=e},
dR_:function dR_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dR3:function dR3(d,e){this.a=d
this.b=e},
dRy:function dRy(){},
dRz:function dRz(d,e){this.a=d
this.b=e},
dRA:function dRA(d){this.a=d},
dRB:function dRB(d,e){this.a=d
this.b=e},
dRu:function dRu(d){this.a=d},
dRs:function dRs(d,e){this.a=d
this.b=e},
dRv:function dRv(d,e){this.a=d
this.b=e},
dRw:function dRw(d,e){this.a=d
this.b=e},
dRx:function dRx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dRC:function dRC(d){this.a=d},
dRt:function dRt(d){this.a=d},
dQR:function dQR(d){this.a=d},
bd0:function bd0(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d4Q:function d4Q(d){this.a=d},
d4P:function d4P(d,e){this.a=d
this.b=e},
d4R:function d4R(d){this.a=d},
d4O:function d4O(d,e){this.a=d
this.b=e},
foG:function foG(d,e){this.a=d
this.b=e},
foH:function foH(d){this.a=d},
foI:function foI(){},
foE:function foE(d,e){this.a=d
this.b=e},
foF:function foF(){},
foL:function foL(d,e){this.a=d
this.b=e},
foM:function foM(d){this.a=d},
foN:function foN(){},
foJ:function foJ(d){this.a=d},
foK:function foK(d,e){this.a=d
this.b=e},
Jz:function Jz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Fk:function Fk(d,e){this.a=d
this.b=e},
bd2:function bd2(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d4T:function d4T(d){this.a=d},
d59:function d59(d){this.a=d},
d51:function d51(d){this.a=d},
d52:function d52(){},
d50:function d50(d){this.a=d},
d4U:function d4U(){},
d5_:function d5_(d){this.a=d},
d4Z:function d4Z(d,e){this.a=d
this.b=e},
d4V:function d4V(d){this.a=d},
d53:function d53(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d54:function d54(d){this.a=d},
d55:function d55(d){this.a=d},
d56:function d56(){},
d57:function d57(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d58:function d58(){},
d4S:function d4S(d,e,f,g,h,i,j,k,l,m){var _=this
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
d4W:function d4W(d,e){this.a=d
this.b=e},
d4X:function d4X(d){this.a=d},
d4Y:function d4Y(){},
aHG:function aHG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bd3:function bd3(d,e){this.b=d
this.a=e},
d5a:function d5a(){},
d5b:function d5b(d){this.a=d},
d5c:function d5c(d){this.a=d},
d5d:function d5d(){},
bgJ:function bgJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bc7:function bc7(d,e){this.b=d
this.a=e},
buk:function buk(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
f74:function f74(d){this.a=d},
bk4:function bk4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eJg:function eJg(d){this.a=d},
eJf:function eJf(d,e){this.a=d
this.b=e},
Ze:function Ze(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aAw:function aAw(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dl2:function dl2(d,e){this.a=d
this.b=e},
dl1:function dl1(d){this.a=d},
dl_:function dl_(d){this.a=d},
dl0:function dl0(d){this.a=d},
dlb:function dlb(d){this.a=d},
dlc:function dlc(d){this.a=d},
dla:function dla(d,e){this.a=d
this.b=e},
dld:function dld(){},
dlg:function dlg(d){this.a=d},
dl9:function dl9(d,e){this.a=d
this.b=e},
dlf:function dlf(){},
dlh:function dlh(d){this.a=d},
dl8:function dl8(d,e){this.a=d
this.b=e},
dli:function dli(d){this.a=d},
dl7:function dl7(d){this.a=d},
dlj:function dlj(d){this.a=d},
dl6:function dl6(d){this.a=d},
dlk:function dlk(d){this.a=d},
dl5:function dl5(d){this.a=d},
dll:function dll(d){this.a=d},
dl4:function dl4(d){this.a=d},
dlm:function dlm(d){this.a=d},
dl3:function dl3(d,e){this.a=d
this.b=e},
dle:function dle(d){this.a=d},
acg:function acg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgI:function bgI(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
acf:function acf(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bgH:function bgH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dln:function dln(d){this.a=d},
dlo:function dlo(d,e){this.a=d
this.b=e},
aAx:function aAx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGI:function aGI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ach:function ach(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dlx:function dlx(d){this.a=d},
Jn:function Jn(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
h4s(d){var w=d.T,v=x.N
return w.iW(w,new C.c6R(),v,v)},
hyA(d){var w=d.bD
if(w>=0)return w
return 5},
h4u(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.h4s(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
h4t(d,e){var w=C.h4u(d,e)
if(w!=null&&w.cc(new A.S(Date.now(),0,!1)))return!0
return!1},
hyB(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.h4s(d),w,w)
u=C.h4u(d,e)
t=u!=null&&u.cc(new A.S(Date.now(),0,!1))?u:new A.S(Date.now(),0,!1)
v.n(0,s,t.bP(A.dC(30,0,0,0,0,0).a).a6().ac())
d.T=v},
aYK(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aYK=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.le(t,B.HG),$async$aYK)
case 3:if(l){u=!0
w=1
break}u=A.kR(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.HG,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYK,v)},
c6R:function c6R(){},
hyy(){var w,v=$.pl(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fW(u)},
I2(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$I2=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$I2)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f2("ngmy_family_tree_backup_codes_v1",null,!1,B.bG),$async$I2)
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
return A.i($async$I2,v)},
a6n(d){return C.hyz(d)},
hyz(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a6n=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$a6n)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hB("ngmy_family_tree_backup_codes_v1",A.F(["codes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cG,null),$async$a6n)
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
return A.i($async$a6n,v)},
c6Q(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c6Q=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.I2(),$async$c6Q)
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
return A.i($async$c6Q,v)},
MX(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$MX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c6Q(d),$async$MX)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.I2(),$async$MX)
case 6:s=f
r=J.a5(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dV(A.a1(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.S(Date.now(),0,!1).a6().ac())
r.n(s,t,o)
w=9
return A.b(C.a6n(s),$async$MX)
case 9:case 8:u=t
w=1
break
case 5:n=C.hyy()
w=10
return A.b(C.I2(),$async$MX)
case 10:s=f
J.aF(s,n,A.F(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=11
return A.b(C.a6n(s),$async$MX)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$MX,v)},
aYJ(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aYJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.I2(),$async$aYJ)
case 3:t=f
for(s=J.dk(t),r=s.gdK(t),r=r.dG(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a6n(t),$async$aYJ)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aYJ,v)},
a6o(d,e,f){var w=0,v=A.j(x.H),u
var $async$a6o=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aon(d,e),$async$a6o)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.MX(d),$async$a6o)
case 7:w=4
break
case 5:w=8
return A.b(C.aYJ(d),$async$a6o)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a6o,v)},
aoh(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aoh=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aon(f,e),$async$aoh)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c3(),$async$aoh)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.I2(),$async$aoh)
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
return A.i($async$aoh,v)},
aYI(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aYI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c3(),$async$aYI)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.I2(),$async$aYI)
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
return A.i($async$aYI,v)},
hyC(){var w,v=$.pl(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fW(u)},
aok(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$aok=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$aok)
case 3:if(!g){u=null
w=1
break}t=C.hyC()
w=4
return A.b(A.Un(),$async$aok)
case 4:s=g
r=B.dJ.aJ(B.R.ao(d.eK(),null))
r=B.cS.gcv().aJ(r)
q=e?999:2
J.aF(s,t,A.F(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(A.a6p(s),$async$aok)
case 5:p=e?999:2
u=new A.a_o("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aok,v)},
aoj(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aoj=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Un(),$async$aoj)
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
return A.b(C.aYI(J.k(l==null?"":l),j),$async$aoj)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.c5.ca(0,B.cE.aJ(t))
s=C.h4v(r)}catch(f){q=A.aa(f)
$.am.$1("[family tree qr stash] decode: "+A.t(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dV(A.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a6().ac())
o.n(p,g,l)}w=5
return A.b(A.a6p(p),$async$aoj)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoj,v)},
h4v(d){var w,v,u,t,s=null
try{w=B.R.aG(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hyE(A.a1(w,x.N,x.z))
return u}catch(t){v=A.aa(t)
$.am.$1("[family tree sync] parse: "+A.t(v))
return s}},
fPz(d){var w=0,v=A.j(x.m),u,t,s
var $async$fPz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aoj(t[1])
w=1
break}u=null
w=1
break}u=C.h4v(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fPz,v)},
hyE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d9(v,x.f)
u=A.cD(u,new C.c6T(),u.$ti.k("J.E"),x.k)
t=A.a3(u).k("a2<J.E>")
s=A.B(new A.a2(u,new C.c6U(),t),t.k("J.E"))}else s=A.a([],x._)
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
n=A.cD(n,new C.c6V(),n.$ti.k("J.E"),o)
k=A.a3(n).k("a2<J.E>")
j=A.B(new A.a2(n,new C.c6W(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aol(h,w,s,r,q)},
aon(d,e){var w=0,v=A.j(x.y),u,t
var $async$aon=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.MO(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Al(d),$async$aon)
case 3:u=t.cy(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aon,v)},
c71(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c71=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Al(d),$async$c71)
case 3:t=s.b6(f,new C.c72(),x.cs)
t=A.B(t,t.$ti.k("ak.E"))
B.d.b_(t,new C.c73())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c71,v)},
Uo(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Uo=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aon(e,d),$async$Uo)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.MX(e),$async$Uo)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Al(e),$async$Uo)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.c7_(g))
r=A.B(t,t.$ti.k("J.E"))}t=J.a5(r)
if(t.gam(r)){u=null
w=1
break}t=t.dt(r,new C.c70(e),x.k)
r=A.B(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Kj(e,o),$async$Uo)
case 14:n=i
if(J.cy(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.aol(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Uo,v)},
aYN(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aYN=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Uo(d,e,f,g),$async$aYN)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gL(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aK(t,s,"_")
r=q.a
u=A.G2(A.Jv(q.eK(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYN,v)},
aYM(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aYM=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Uo(d,e,f,g),$async$aYM)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aok(r,f),$async$aYM)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aEJ(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYM,v)},
Up(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Up=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fPz(a0),$async$Up)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aoh(g.a,d,e,f,s,r),$async$Up)
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
return A.b(C.bzH(e,j),$async$Up)
case 12:case 11:w=13
return A.b(C.agD(e,j,s),$async$Up)
case 13:h=n.h(0,i)
w=h!=null&&J.cy(h)?14:15
break
case 14:w=16
return A.b(C.Aw(e,i,h),$async$Up)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bnA(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Up,v)},
aol:function aol(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c6Y:function c6Y(){},
c6Z:function c6Z(){},
c6X:function c6X(){},
c6T:function c6T(){},
c6U:function c6U(){},
c6V:function c6V(){},
c6W:function c6W(){},
c72:function c72(){},
c73:function c73(){},
c7_:function c7_(d){this.a=d},
c70:function c70(d){this.a=d},
fXQ(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f7(null,x.H)
return A.hv(d,new C.aom(w,e,g,i,f,h,null),!0,null,x.H)},
d4N(d,e,f,g,h,i,j,k){return new C.bd_(i,e,k,j,g,f,h,d,null)},
aom:function aom(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aC6:function aC6(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dRL:function dRL(d){this.a=d},
dRM:function dRM(d,e,f){this.a=d
this.b=e
this.c=f},
dRQ:function dRQ(d,e){this.a=d
this.b=e},
dRR:function dRR(d){this.a=d},
dRI:function dRI(d){this.a=d},
dRJ:function dRJ(d,e){this.a=d
this.b=e},
dRK:function dRK(d,e){this.a=d
this.b=e},
dRP:function dRP(d){this.a=d},
dRO:function dRO(d,e){this.a=d
this.b=e},
dRN:function dRN(){},
dRT:function dRT(d){this.a=d},
dRU:function dRU(d,e){this.a=d
this.b=e},
dRS:function dRS(d,e){this.a=d
this.b=e},
d5e:function d5e(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bd1:function bd1(d,e,f){this.d=d
this.e=e
this.a=f},
aby:function aby(d,e,f){this.c=d
this.d=e
this.a=f},
bd_:function bd_(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bd4:function bd4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Zz:function Zz(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aC5:function aC5(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dRD:function dRD(d,e){this.a=d
this.b=e},
dRE:function dRE(d){this.a=d},
dRF:function dRF(d){this.a=d},
dRG:function dRG(d){this.a=d},
dRH:function dRH(d){this.a=d},
ZA:function ZA(d){this.a=d},
bib:function bib(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dRV:function dRV(d,e){this.a=d
this.b=e},
aXj(d,e){return new C.aXi(d,e,null)},
aXi:function aXi(d,e,f){this.c=d
this.d=e
this.a=f},
hXO(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b0(d,11)},
i4a(d){return A.bV(B.K,null,new C.fEz(new C.tB(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
h6n(d,e){return new C.arh(e,d,null)},
aOX(d,e,f,g,h,i,j){var w=C.hXO(i)
if(w!=null)return A.bw(e,new A.a7(j,f,new C.a5p(w,!0,null),null),B.aq)
return I.aOh(e,B.bQ,f,g,h,i,j)},
lx:function lx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5p:function a5p(d,e,f){this.c=d
this.d=e
this.a=f},
bhS:function bhS(d,e){var _=this
_.e=_.d=$
_.cS$=d
_.b2$=e
_.c=_.a=null},
dD4:function dD4(d){this.a=d},
dD5:function dD5(){},
dD6:function dD6(d,e){this.a=d
this.b=e},
bhR:function bhR(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fEz:function fEz(d){this.a=d},
fEy:function fEy(d,e){this.a=d
this.b=e},
fEx:function fEx(d,e){this.a=d
this.b=e},
fEw:function fEw(d,e){this.a=d
this.b=e},
arh:function arh(d,e,f){this.c=d
this.d=e
this.a=f},
cex:function cex(d,e){this.a=d
this.b=e},
aK1:function aK1(){},
i3W(d){var w=null
return A.ca(w,w,!0,w,new C.fDW(),d,w,!0,!0,x.e2)},
i55(d,e,f,g,h){var w=null
return A.ca(w,w,!0,w,new C.fLo(h,g,f,e),d,w,!0,!0,x.N)},
i3Y(d,e){var w=null
return A.ca(w,w,!0,w,new C.fE0(e),d,w,!0,!0,x.dY)},
i3X(d){var w=null
return A.ca(w,w,!0,w,new C.fE_(),d,w,!0,!0,x.c5)},
aRS:function aRS(d,e){this.a=d
this.b=e},
aRR:function aRR(d){this.a=d},
aPT:function aPT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDW:function fDW(){},
fLo:function fLo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fE0:function fE0(d){this.a=d},
fE_:function fE_(){},
Yd:function Yd(d,e){this.c=d
this.a=e},
axm:function axm(){var _=this
_.d=$
_.c=_.a=_.e=null},
cXX:function cXX(d){this.a=d},
cXY:function cXY(d){this.a=d},
cXW:function cXW(d,e){this.a=d
this.b=e},
cXZ:function cXZ(d){this.a=d},
cY_:function cY_(d){this.a=d},
Yc:function Yc(d){this.a=d},
axl:function axl(){this.d=$
this.c=this.a=null},
cXT:function cXT(d){this.a=d},
cXU:function cXU(d){this.a=d},
cXV:function cXV(d){this.a=d},
XL:function XL(d){this.a=d},
aw5:function aw5(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cvw:function cvw(){},
cvC:function cvC(d){this.a=d},
cvD:function cvD(d){this.a=d},
cvE:function cvE(d){this.a=d},
cvB:function cvB(){},
cvF:function cvF(d){this.a=d},
cvG:function cvG(d){this.a=d},
cvA:function cvA(){},
cvH:function cvH(d,e){this.a=d
this.b=e},
cvz:function cvz(d,e){this.a=d
this.b=e},
cvx:function cvx(d,e){this.a=d
this.b=e},
cvI:function cvI(d){this.a=d},
cvy:function cvy(){},
cvJ:function cvJ(d){this.a=d},
a0h:function a0h(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
buc:function buc(){this.d=$
this.c=this.a=null},
f6x:function f6x(d,e){this.a=d
this.b=e},
f6y:function f6y(d){this.a=d},
f6z:function f6z(d,e){this.a=d
this.b=e},
aaB:function aaB(d,e){this.a=d
this.b=e},
F8:function F8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bua:function bua(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
f6v:function f6v(d,e){this.a=d
this.b=e},
avZ:function avZ(d,e){this.c=d
this.a=e},
bub:function bub(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
f6w:function f6w(d){this.a=d},
bu9:function bu9(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aMa:function aMa(){},
aMb:function aMb(){},
bBE(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bu(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oB(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fCH(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.X9(A.dn(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aOy(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aOy=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hW().l2(85,1280,B.eG),$async$aOy)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fg(),$async$aOy)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.h6m()
w=9
return A.b(C.cew(q,r),$async$aOy)
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
return A.i($async$aOy,v)},
aOV(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aOV=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cet(g)
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
return A.b($.W().L9(p,!0,null,i).cM(0,B.fH),$async$aOV)
case 9:n=a1
w=10
return A.b(n.lV(),$async$aOV)
case 10:m=a1
w=11
return A.b(J.ah1(m).hq(B.fX),$async$aOV)
case 11:l=a1
J.ah1(m).q()
if(l==null){w=8
break}i=J.eR(B.dD.gaM(l))
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
return A.i($async$aOV,v)},
fCH:function fCH(){},
tB:function tB(d){this.a=d},
arg:function arg(d,e,f){this.c=d
this.d=e
this.a=f},
aDC:function aDC(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eGq:function eGq(d,e){this.a=d
this.b=e},
eGh:function eGh(d){this.a=d},
eGi:function eGi(d){this.a=d},
eGo:function eGo(d,e){this.a=d
this.b=e},
eGn:function eGn(d,e){this.a=d
this.b=e},
eGk:function eGk(d,e){this.a=d
this.b=e},
eGj:function eGj(d,e){this.a=d
this.b=e},
eGl:function eGl(d){this.a=d},
eGm:function eGm(d,e){this.a=d
this.b=e},
eGp:function eGp(d,e){this.a=d
this.b=e},
eGc:function eGc(d,e){this.a=d
this.b=e},
eGg:function eGg(d){this.a=d},
eGf:function eGf(d,e){this.a=d
this.b=e},
eGe:function eGe(d){this.a=d},
eGr:function eGr(d,e){this.a=d
this.b=e},
eGs:function eGs(d,e){this.a=d
this.b=e},
eGd:function eGd(d,e){this.a=d
this.b=e},
hiY(d,e,f){var w="thumbnailPath",v=e.ag()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.F(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a6().ac(),"project",v],x.N,x.z)},
fCI(d,e,f){var w=0,v=A.j(x.N),u
var $async$fCI=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.R.ao(C.hiY(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fCI,v)},
bBG(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bBG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fCI(!0,d,e),$async$bBG)
case 4:w=3
return A.b(r.are(g,d,e.a),$async$bBG)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dJ.aJ(B.R.ao(C.hiY(d,e,null),null))
u="NGMY_WS:"+B.k7.gcv().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBG,v)},
haV(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fXx(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d_(s,"NGMYWSSYNC2|"))return!0
if(J.d_(s,"NGMY_WS:"))return!0
if(J.f_(s,t))return!0
if(J.d_(s,"{"))try{w=B.R.aG(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
i1R(d){var w,v,u,t=C.haV(d)
if(t==null)return null
if(C.fXx(t))return t
w=B.a.cJ(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b0(t,w))
if(C.fXx(v))return v}u=B.a.cJ(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b0(t,u))
if(C.fXx(v))return v}return null},
fXw(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d_(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d_(q,"NGMY_WS:")){v=B.c5.ca(0,B.cE.aJ(J.mC(q,8)))
w=t.a(B.R.aG(0,v,r))}else w=t.a(B.R.aG(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fS7(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bBF(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bBF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.ard(t[1]),$async$bBF)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fXw(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fXw(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBF,v)},
fXv(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lh(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bBc(){var w=0,v=A.j(x.o),u,t
var $async$bBc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Gd(),$async$bBc)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fXw(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBc,v)},
hjP(d,e,f,g){return A.bV(B.K,null,new C.fLg(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fLg:function fLg(d,e,f){this.a=d
this.b=e
this.c=f},
acC:function acC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eGu:function eGu(d,e){this.a=d
this.b=e},
eGv:function eGv(d,e){this.a=d
this.b=e},
eGw:function eGw(d,e){this.a=d
this.b=e},
eGx:function eGx(d,e){this.a=d
this.b=e},
eGt:function eGt(d){this.a=d},
ara:function ara(d,e,f){this.c=d
this.d=e
this.a=f},
bjy:function bjy(){var _=this
_.c=_.a=_.e=_.d=null},
eG7:function eG7(d,e){this.a=d
this.b=e},
eG8:function eG8(d){this.a=d},
eG9:function eG9(d){this.a=d},
arf:function arf(d){this.a=d},
aDB:function aDB(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eGb:function eGb(d){this.a=d},
eGa:function eGa(d){this.a=d},
hBS(d,e,f,g,h){return new C.Nz(h,g,d,e,f,null)},
aIn:function aIn(d,e){this.a=d
this.b=e},
Nz:function Nz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDD:function aDD(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eGU:function eGU(){},
eGQ:function eGQ(d,e){this.a=d
this.b=e},
eGR:function eGR(d){this.a=d},
eGB:function eGB(d){this.a=d},
eGz:function eGz(d){this.a=d},
eGA:function eGA(d){this.a=d},
eGK:function eGK(d,e){this.a=d
this.b=e},
eGH:function eGH(d,e){this.a=d
this.b=e},
eGI:function eGI(d,e){this.a=d
this.b=e},
eGJ:function eGJ(d,e,f){this.a=d
this.b=e
this.c=f},
eGF:function eGF(d,e,f){this.a=d
this.b=e
this.c=f},
eGD:function eGD(d){this.a=d},
eGE:function eGE(d){this.a=d},
eGG:function eGG(d){this.a=d},
eGX:function eGX(d){this.a=d},
eGW:function eGW(d){this.a=d},
eGY:function eGY(d){this.a=d},
eGV:function eGV(d){this.a=d},
eGy:function eGy(d){this.a=d},
eGC:function eGC(d,e){this.a=d
this.b=e},
eGT:function eGT(d,e){this.a=d
this.b=e},
eGS:function eGS(d,e){this.a=d
this.b=e},
eGN:function eGN(d){this.a=d},
eGO:function eGO(d){this.a=d},
eGP:function eGP(d,e){this.a=d
this.b=e},
eGM:function eGM(d,e){this.a=d
this.b=e},
eGL:function eGL(d,e,f){this.a=d
this.b=e
this.c=f},
bvY:function bvY(){},
Ac(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aK(v,w,"_")},
af3(d,e,f){return C.hRq(d,e,f)},
hRq(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$af3=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.au("String",e,f),$async$af3)
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
return A.i($async$af3,v)},
af2(d,e){return C.hRp(d,e)},
hRp(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$af2=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$af2)
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
return A.i($async$af2,v)},
hQb(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Sa(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
byH(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$byH=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b0Z(q),$async$byH)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aOV(q,!1),$async$byH)
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
return A.i($async$byH,v)},
hpG(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.qR(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qR(p,J.k(u==null?"":u),1,o,q)},
fS7(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d9(s,x.f)
w=A.cD(w,new C.cuV(),w.$ti.k("J.E"),x.Q)
v=A.a3(w).k("a2<J.E>")
r=A.B(new A.a2(w,new C.cuW(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lh(w,v,u,r,t==null?new A.S(Date.now(),0,!1):t)},
hVg(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.Z5
case"female":case"f":return D.aiw
default:return D.xD}},
hfH(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h0y(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hVg(v==null?j:J.k(v))
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
hVi(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Mb
case"viewer":return D.ki
default:return D.tA}},
hVj(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
G3(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bzY(d,e){return B.a.i(e.toLowerCase())===C.G3(d,e)&&d.y!==D.ki},
tM(d,e){var w,v=d.y
if(v===D.ki)return!1
w=B.a.i(e.toLowerCase())
if(w===C.G3(d,e))return!0
if(v===D.Mb)return!0
v=d.e
return new A.K(v,A.fXB(),A.U(v).k("K<1,n>")).t(0,w)},
hUJ(d){return J.dH(d,new C.fnQ()).gM(0)},
fLK(d){var w=0,v=A.j(x.y),u,t
var $async$fLK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Al(d),$async$fLK)
case 3:u=t.qN(f,new C.fLL(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fLK,v)},
bzH(d,e){var w=0,v=A.j(x.H),u,t
var $async$bzH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Al(d),$async$bzH)
case 3:t=g
if(J.qN(t,new C.fml(e))){w=1
break}if(C.hUJ(t)>=2)throw A.V(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bzH,v)},
ajH(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d9(n,x.f)
w=A.cD(w,new C.bMd(),w.$ti.k("J.E"),x.P)
v=A.a3(w).k("a2<J.E>")
m=A.B(new A.a2(w,new C.bMe(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bMf(),x.N)
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
return new C.kA(l,w,v,!s,t,m,r,q,p,C.hVi(o==null?null:J.k(o)))},
hfP(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
Cv(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$Cv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.QT(d),$async$Cv)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$Cv)
case 4:t=f
w=5
return A.b(t.a5i(0),$async$Cv)
case 5:w=6
return A.b(C.fe4(t,l),$async$Cv)
case 6:s=f
if(J.cy(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a5(q)
o=A.aT(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hbu(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oA(l,n),$async$Cv)
case 11:u=n
w=1
break
case 10:case 8:m=A.aT(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hbu(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oA(l,n),$async$Cv)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Cv,v)},
fe4(d,e){return C.hNG(d,e)},
hNG(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fe4=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a5(a3)
a5=A.aT(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Ac(a9)))
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
break}m=A.aT(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Ac(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.R.aG(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fS7(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aT(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Ac(a9)+"_"+n))
i=C.hQb(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b0Z(h),$async$fe4)
case 17:g=b1
if(g!=null){i=i.Sa(g)
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
case 8:J.R2(q,new C.fe5())
if(p&&J.ad(q)!==0)C.oA(a9,q)
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
return A.i($async$fe4,v)},
bA8(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bA8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.QT(d),$async$bA8)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Cv(r),$async$bA8)
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
return A.i($async$bA8,v)},
hbu(d){var w,v,u,t
try{w=B.R.aG(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d9(w,x.f)
v=A.cD(v,new C.f9N(),v.$ti.k("J.E"),x.i)
u=A.a3(v).k("a2<J.E>")
v=A.B(new A.a2(v,new C.f9O(),u),u.k("J.E"))
B.d.b_(v,new C.f9P())
return v}catch(t){v=A.a([],x.D)
return v}},
oA(d,e){return C.i3M(d,e)},
i3M(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oA=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.QT(b2),$async$oA)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$oA)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Ac(a8)
p=A.aT(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.R.aG(0,p,null)),new C.fDN(),a2).fJ(0)
a2=J.b6(b3,new C.fDO(),a2).c_(0,new C.fDP())
n=A.db(a2,a2.$ti.k("J.E"))
a2=o,a2=A.ec(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f_(n,m)?17:18
break
case 17:a5=C.Ac(a8)
l=A.aT(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a7F(l),$async$oA)
case 19:t=21
a5=C.Ac(a8)
k=A.aT(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.R.aG(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a7F(a5==null?null:J.k(a5)),$async$oA)
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
return A.b(C.af2(r,"ngmy_worksheet_item_v3_"+C.Ac(a8)+"_"+m),$async$oA)
case 29:w=30
return A.b(C.af2(r,"ngmy_worksheet_thumb_v3_"+C.Ac(a8)+"_"+m),$async$oA)
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
return A.b(C.byH(h),$async$oA)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.af3(r,"ngmy_worksheet_thumb_v3_"+C.Ac(a8)+"_"+a4,f),$async$oA)
case 40:g=i.Sa(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.af2(r,"ngmy_worksheet_thumb_v3_"+C.Ac(a8)+"_"+a4),$async$oA)
case 41:g=i.Sa(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.af2(r,"ngmy_worksheet_thumb_v3_"+C.Ac(a8)+"_"+a4),$async$oA)
case 42:case 34:a4=i.a
w=43
return A.b(C.af3(r,"ngmy_worksheet_item_v3_"+C.Ac(a8)+"_"+a4,B.R.ao(g.ag(),null)),$async$oA)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.ch(q,i.a)
w=31
break
case 32:w=44
return A.b(C.af3(r,"ngmy_worksheets_index_v3_"+C.Ac(a8),B.R.ao(q,null)),$async$oA)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eJ(b3,new C.fDQ(q))
a4=a3.$ti.k("cQ<1,a4<n,@>>")
a7=A.B(new A.cQ(a3,new C.fDR(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.af3(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.R.ao(a0,null)),$async$oA)
case 45:w=46
return A.b(J.hoN(r),$async$oA)
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
return A.i($async$oA,v)},
KK(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$KK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Cv(d),$async$KK)
case 3:t=g
s=J.cE(t)
r=s.bd(t,new C.fLJ(e))
if(r===-1)s.ck(t,0,e)
else s.n(t,r,e)
u=C.oA(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$KK,v)},
bzV(d,e){var w=0,v=A.j(x.H),u
var $async$bzV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Cv(d),$async$bzV)
case 2:u=g
J.no(u,new C.foh(e))
w=3
return A.b(C.oA(d,u),$async$bzV)
case 3:return A.h(null,v)}})
return A.i($async$bzV,v)},
G5(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$G5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$G5)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aT(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.R.aG(0,i,null)
if(x.j.b(t)){j=J.d9(t,x.f)
j=A.cD(j,new C.fqK(),j.$ti.k("J.E"),x.k)
s=A.a3(j).k("a2<J.E>")
r=A.B(new A.a2(j,new C.fqL(),s),s.k("J.E"))
B.d.b_(r,new C.fqM())
k=r}}catch(h){}w=4
return A.b(C.fax(d),$async$G5)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hO2(k,p,d)
j=A.U(o)
s=j.k("K<1,a4<n,@>>")
s=A.B(new A.K(o,new C.fqN(),s),s.k("ak.E"))
n=B.R.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Q4(d,o),$async$G5)
case 7:case 6:j=j.k("a2<1>")
m=A.B(new A.a2(o,new C.fqO(d),j),j.k("J.E"))
if(m.length!==0)C.aNt(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$G5,v)},
fDz(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fDz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Q4(d,e),$async$fDz)
case 3:t=J.dH(e,new C.fDA(d))
s=A.B(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aNt(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fDz,v)},
a1U(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a1U=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a1U)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aT(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.R.aG(0,l,null)
if(x.j.b(u)){m=J.d9(u,x.f)
m=A.cD(m,new C.fLE(),m.$ti.k("J.E"),x.k)
t=A.a3(m).k("a2<J.E>")
s=A.B(new A.a2(m,new C.fLF(),t),t.k("J.E"))
o=s}}catch(k){}q=J.q8(o,new C.fLG(e))
if(B.a.i(e.x).length===0&&C.tM(e,d)){m=B.a.i(d.toLowerCase())
p=e.aCL(e.y===D.ki?D.ki:D.tA,m)}else p=e
if(q===-1)J.pp(o,0,p)
else J.aF(o,q,p)
w=3
return A.b(C.Q4(d,o),$async$a1U)
case 3:w=C.tM(p,d)?4:5
break
case 4:w=6
return A.b(C.aNs(C.G3(p,d),p),$async$a1U)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a1U,v)},
aND(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aND=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.G5(d),$async$aND)
case 2:u=g
t=J.cE(u)
s=A.r7(t.eJ(u,new C.fnZ(e)))
t.bn(u,new C.fo_(e))
w=3
return A.b(C.Q4(d,u),$async$aND)
case 3:w=s!=null&&C.bzY(s,d)?4:5
break
case 4:w=6
return A.b(C.f9R(e),$async$aND)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aND,v)},
agR(d){var w=d.f,v=A.U(w).k("a2<1>")
w=A.B(new A.a2(w,new C.fLP(),v),v.k("J.E"))
return w},
fVe(d,e){var w,v=d.f,u=A.r7(new A.a2(v,new C.fnz(e),A.U(v).k("a2<1>")))
v=C.agR(d)
w=A.U(v).k("a2<1>")
v=A.B(new A.a2(v,new C.fnA(e,u),w),w.k("J.E"))
B.d.b_(v,new C.fnB())
return v},
hVm(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hjS(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bd(C.fVe(d,u),new C.fLp(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hWT(d,e){var w
if(e==null||e.length===0)return 1
w=C.fVe(d,e)
if(w.length===0)return 1
return new A.K(w,new C.frw(),A.U(w).k("K<1,H>")).fo(0,B.zV)+1},
i3F(d){var w,v=C.agR(d)
if(v.length===0)return null
w=new A.a2(v,new C.fDw(),A.U(v).k("a2<1>"))
if(!w.gam(0))return w.gL(0)
return B.d.gL(v)},
hVh(d){return A.F(["id",d.a,"name",d.b,"gender",C.hfH(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hWO(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
n=n!==D.xD?n:q.c
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
d=q.aCG(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.L)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cGC(a1,w,a3.d,a2.y,s,a0,v)},
Al(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$Al=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Al)
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
p=A.cD(p,new C.fqH(),p.$ti.k("J.E"),x.k)
s=A.a3(p).k("a2<J.E>")
p=A.B(new A.a2(p,new C.fqI(),s),s.k("J.E"))
B.d.b_(p,new C.fqJ())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Al,v)},
agD(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$agD=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tA:D.ki
a7=C.G3(b2,b3)
w=2
return A.b(C.Al(b1),$async$agD)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.bd(a8,new C.fDs(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bzH(b1,b2),$async$agD)
case 5:case 4:if(b0===-1){u=b2.aCL(a6,a7)
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
i=i!==D.xD?i:l.c
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
s.n(0,m,l.aCG(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.B(new A.bc(s,k),k.k("J.E"))
k=a5?D.tA:D.ki
u=t.yj(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Q4(b1,a8),$async$agD)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aNs(B.a.i(b3.toLowerCase()),u),$async$agD)
case 9:case 8:return A.h(null,v)}})
return A.i($async$agD,v)},
hbS(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a6().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("K<1,a4<n,@>>"),k=A.B(new A.K(m,C.hj5(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.F(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.F(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a6().ac(),"updatedAt",o],r,x.K),"createdAt",s.a6().ac(),"updatedAt",o],r,x.z)},
hbT(d,e){var w=new A.S(Date.now(),0,!1).a6().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("K<1,a4<n,@>>")
u=A.B(new A.K(u,C.hj5(),t),t.k("ak.E"))
return A.F(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a6().ac(),"updatedAt",w],x.N,x.z)},
hLG(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a5(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ajH(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.K(j,A.fXB(),A.U(j).k("K<1,n>")).c_(0,new C.fak())
t=A.B(j,j.$ti.k("J.E"))
if(u===v)s=D.tA
else s=B.d.t(t,u)?D.Mb:D.ki
return w.aCL(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ajH(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d9(q,h)
h=A.cD(h,new C.fal(),h.$ti.k("J.E"),x.P)
p=A.a3(h).k("a2<J.E>")
o=A.B(new A.a2(h,new C.fam(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.fan(),x.N).c_(0,new C.fao())
t=A.B(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tA
else s=B.d.t(t,u)?D.Mb:D.ki
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
fax(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fax=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.faB()
h=x.N
g=x.z
w=7
return A.b(A.iJ(A.a([A.ln("family_trees","*",null,A.F(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bG),r.$2(A.ln("family_trees","*",A.F(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bG),"collaborator"),r.$2(A.ln("family_trees","*",null,A.F(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bG),"public")],x.cl),x.U),$async$fax)
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
h=A.cD(new A.bc(l,h),new C.fay(a0),h.k("J.E"),x.k)
l=A.a3(h).k("a2<J.E>")
l=A.B(new A.a2(h,new C.faz(),l),l.k("J.E"))
B.d.b_(l,new C.faA())
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
return A.i($async$fax,v)},
hO2(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a5(e)
if(j.gam(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dt(e,new C.feK(),v).c_(0,new C.feL())
t=A.db(u,u.$ti.k("J.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.G3(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.ki){m=q.e
m=!new A.K(m,A.fXB(),A.U(m).k("K<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gS(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.hWO(l,v)
o=C.G3(k,w)
p=v.d
s.n(0,u,o===w?k.bag(p,D.tA):k.bag(p,v.y))}j=s.$ti.k("bc<2>")
j=A.B(new A.bc(s,j),j.k("J.E"))
B.d.b_(j,new C.feM())
return j},
Q4(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Q4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$Q4)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fgT(),x.a)
s=A.B(s,s.$ti.k("ak.E"))
w=3
return A.b(u.au("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.R.ao(s,null)),$async$Q4)
case 3:return A.h(null,v)}})
return A.i($async$Q4,v)},
aNs(d,e){return C.hT7(d,e)},
hT7(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aNs=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lN("family_trees",A.a([C.hbS(e,d)],p),null,B.cG),$async$aNs)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lN("family_trees",A.a([C.hbT(e,d)],p),null,B.cG),$async$aNs)
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
return A.i($async$aNs,v)},
aNt(d,e){return C.hT8(d,e)},
hT8(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aNt=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("K<1,a4<n,@>>")
m=n.k("ak.E")
l=A.B(new A.K(e,new C.flF(d),n),m)
r=l
w=7
return A.b(A.lN("family_trees",r,null,B.cG),$async$aNt)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.K(e,new C.flG(d),n),m)
p=k
w=8
return A.b(A.lN("family_trees",p,null,B.cG),$async$aNt)
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
return A.i($async$aNt,v)},
f9R(d){return C.hL0(d)},
hL0(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$f9R=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Qt("family_trees",A.F(["id",d],x.N,x.z),null,B.cG),$async$f9R)
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
return A.i($async$f9R,v)},
qR:function qR(d,e,f,g,h){var _=this
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
cuY:function cuY(){},
cuX:function cuX(){},
cuV:function cuV(){},
cuW:function cuW(){},
H9:function H9(d,e){this.a=d
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
ajG:function ajG(d,e){this.a=d
this.b=e},
fnQ:function fnQ(){},
fLL:function fLL(d){this.a=d},
fml:function fml(d){this.a=d},
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
bMh:function bMh(){},
bMg:function bMg(){},
bMd:function bMd(){},
bMe:function bMe(){},
bMf:function bMf(){},
fe5:function fe5(){},
f9N:function f9N(){},
f9O:function f9O(){},
f9P:function f9P(){},
fDN:function fDN(){},
fDO:function fDO(){},
fDP:function fDP(){},
fDQ:function fDQ(d){this.a=d},
fDR:function fDR(){},
fLJ:function fLJ(d){this.a=d},
foh:function foh(d){this.a=d},
fqK:function fqK(){},
fqL:function fqL(){},
fqM:function fqM(){},
fqN:function fqN(){},
fqO:function fqO(d){this.a=d},
fDA:function fDA(d){this.a=d},
fLE:function fLE(){},
fLF:function fLF(){},
fLG:function fLG(d){this.a=d},
fnZ:function fnZ(d){this.a=d},
fo_:function fo_(d){this.a=d},
fLP:function fLP(){},
fnz:function fnz(d){this.a=d},
fnA:function fnA(d,e){this.a=d
this.b=e},
fnB:function fnB(){},
fLp:function fLp(d){this.a=d},
frw:function frw(){},
fDw:function fDw(){},
fqH:function fqH(){},
fqI:function fqI(){},
fqJ:function fqJ(){},
fDs:function fDs(d){this.a=d},
fak:function fak(){},
fal:function fal(){},
fam:function fam(){},
fan:function fan(){},
fao:function fao(){},
faB:function faB(){},
faC:function faC(d){this.a=d},
fay:function fay(d){this.a=d},
faz:function faz(){},
faA:function faA(){},
feK:function feK(){},
feL:function feL(){},
feM:function feM(){},
fgT:function fgT(){},
flF:function flF(d){this.a=d},
flG:function flG(d){this.a=d},
cuZ:function cuZ(d,e){this.a=d
this.b=e},
cv_:function cv_(d,e){this.a=d
this.b=e},
aFF:function aFF(d,e,f){this.a=d
this.b=e
this.c=f},
b7d:function b7d(){this.b=this.a=0},
b7c:function b7c(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bud:function bud(){},
wv(d,e){var w,v
if(d==null)return""
w=d.bS()
v=""+w.gce()+"/"+w.gct()+"/"+w.gcj()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gn3()),2,"0")+":"+B.a.aT(B.o.u(w.gFT()),2,"0")},
hBP(){var w,v=$.pl(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"WS"+B.d.fW(u)},
arb(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$arb=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arb)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f2("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bG),$async$arb)
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
return A.i($async$arb,v)},
arc(d){return C.hBQ(d)},
hBQ(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$arc=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arc)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hB("ngmy_worksheet_project_qr_stashes_v1",A.F(["stashes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cG,null),$async$arc)
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
return A.i($async$arc,v)},
are(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$are=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$are)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hBP()
w=4
return A.b(C.arb(),$async$are)
case 4:r=h
q=B.a.i(e)
p=B.dJ.aJ(t)
J.aF(r,s,A.F(["ownerEmail",q,"projectId",f,"payload",B.cS.gcv().aJ(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(C.arc(r),$async$are)
case 5:u=new A.a_o("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$are,v)},
ard(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ard=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c3(),$async$ard)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.arb(),$async$ard)
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
try{s=B.c5.ca(0,B.cE.aJ(t))}catch(h){r=A.aa(h)
$.am.$1("[worksheet qr stash] decode: "+A.t(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dV(A.a1(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a6().ac())
p.n(q,i,m)}w=5
return A.b(C.arc(q),$async$ard)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ard,v)},
h6m(){var w=new A.S(Date.now(),0,!1).a6()
return"wst_"+(1000*w.a+w.b)+"_"+B.cI.aB(999999)},
hBR(d){var w,v,u,t,s,r,q
try{w=A.afs(d)
if(w==null)return d
v=w
if(J.KQ(v)>960||J.KP(v)>960){s=v
r=J.KQ(v)>=J.KP(v)?960:null
v=A.afr(s,J.KP(v)>J.KQ(v)?960:null,B.Nx,r)}s=v
u=A.al3(82).Sv(s,B.yo)
if(J.ad(u)===0)return d
s=new Uint8Array(A.ce(u))
return s}catch(q){t=A.aa(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cew(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cew=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hBR(e)
$.ces.n(0,s,t)
u=C.bBI(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cew,v)},
b0Z(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b0Z=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d_(l,"data:image")){u=null
w=1
break}t=4
r=J.f_(l,",")?B.d.gal(J.lp(l,",")):l
q=B.cE.aJ(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.h6m()
w=7
return A.b(C.cew(p,q),$async$b0Z)
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
return A.i($async$b0Z,v)},
cet(d){var w=0,v=A.j(x.T),u,t,s
var $async$cet=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cev(s),$async$cet)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcv().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cet,v)},
a7F(d){var w=0,v=A.j(x.H),u,t
var $async$a7F=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hiZ(d)
if(t==null){w=1
break}$.ces.W(0,t)
w=3
return A.b(C.bBH(t),$async$a7F)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a7F,v)},
bBI(d,e){return C.i1U(d,e)},
i1U(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bBI=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aMn
w=7
return A.b(n==null?$.aMn=I.fUf():n,$async$bBI)
case 7:r=g
q=new Uint8Array(A.ce(e))
p=J.mD(r,"thumbs","readwrite")
B.iD.mc(J.mB(p,"thumbs"),q,l)
w=8
return A.b(J.po(p),$async$bBI)
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
return A.i($async$bBI,v)},
bBH(d){return C.i1S(d)},
i1S(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bBH=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aMn
w=7
return A.b(o==null?$.aMn=I.fUf():o,$async$bBH)
case 7:r=f
q=J.mD(r,"thumbs","readwrite")
B.iD.Fo(J.mB(q,"thumbs"),m)
w=8
return A.b(J.po(q),$async$bBH)
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
return A.i($async$bBH,v)}},D,Ak,Al,R,Am,An,I
J=c[1]
A=c[0]
B=c[2]
A1=c[77]
N=c[232]
S=c[147]
A2=c[216]
G=c[197]
F=c[31]
E=c[207]
O=c[96]
A3=c[218]
A4=c[137]
A5=c[185]
T=c[113]
U=c[101]
A6=c[215]
A7=c[37]
M=c[214]
A8=c[80]
H=c[87]
A9=c[154]
Aa=c[109]
V=c[157]
W=c[228]
X=c[186]
Ab=c[177]
Ac=c[189]
Y=c[184]
Ad=c[65]
Ae=c[71]
Z=c[201]
Af=c[233]
Ag=c[30]
Ah=c[102]
K=c[179]
Ai=c[190]
A_=c[231]
A0=c[224]
P=c[103]
Aj=c[114]
L=c[130]
Q=c[69]
C=a.updateHolder(c[6],C)
D=c[227]
Ak=c[70]
Al=c[195]
R=c[230]
Am=c[229]
An=c[56]
I=c[54]
C.anb.prototype={}
C.aXk.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.beC(),f=h.x!=null&&h.yK(i).length===0
if(h.x!=null)w=f?B.aZ:B.bI
else w=h.gT7()?B.bI:B.dT
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.bdD,B.q,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.eH7,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h5,i,i,i),B.S,D.f98,B.at,A.d(C.wv(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.f55,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.aZ9,i,i,i,i,B.Y5,i,i,i)
q=A.m(16)
p=A.I(B.aL,B.q,1)
o=A.I(B.aZ.j(0.28),B.q,1)
n=A.fWb(h.d)
o=A.p(B.A,C.aXj(A.ftU(h.e,n),30),B.f,i,i,new A.o(B.lD,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.f0w,B.L,i,i)
m=A.m(14)
l=A.I(B.aL,B.q,1)
q=A.p(i,A.v(A.a([o,B.O,n,B.bB,D.f9p,B.ac,A.p(i,A.v(A.a([D.foy,B.bB,A.d(A.An(h.c),i,i,i,i,i,i,D.eWB,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.eZ,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,K.agC,i,i,i)
p=A.m(16)
m=A.I(B.aL,B.q,1)
l=j.aPj("Original due",C.wv(h.r,!1))
n=j.aPj("Current due",C.wv(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.p(i,A.v(A.a([l,B.O,n,B.S,A.p(i,A.d(h.gaJv(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.AI,i,i,1/0),B.S,j.ccB(),B.O,j.c0i(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bj,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aL,B.q,1)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fal,B.at,A.d(q,i,i,i,i,i,i,D.f_P,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bj,i,i,1/0)],s))}if(h.gaEn()){q=A.m(14)
o=A.I(B.cp,B.q,1.6)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fpQ,B.O,A.bw(A.m(12),A.ek(new A.a7(1/0,88,A.b3(i,i,i,new A.Vg(h.ax,B.M,D.eKR,!0,3.5,i),B.au),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.EY,i,i,i)],s))}p.push(B.aA)
p.push(D.fia)
return A.p(i,A.v(A.a([r,new A.C(B.agF,A.v(p,B.aj,i,B.e,B.j,0,B.p),i)],s),B.aj,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aPj(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.a7f,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eXA,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
ccB(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a8s(B.dT,u,"Not paid yet")
w=t.yK(null).length
v=w===0?B.aZ:B.bI
return this.a8s(v,u,C.wv(t.x,!0))},
c0i(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a8s(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a8s(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a7f,u,u,u)
v=A.U(d).k("K<1,hh>")
v=A.B(new A.K(d,new C.c0j(),v),v.k("ak.E"))
return A.v(A.a([w,B.an,A.bY(B.bz,v,B.br,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a8s(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.a7f,w,w,w),1),new A.dq(1,B.cl,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dL,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b9m.prototype={
a5(d,e){new A.Vg(this.b,B.M,e,!0,3.5,null).a5(d,e)},
ar(d){return d.b!==this.b}}
C.ani.prototype={
U(){return new C.aBx(A.a([],x.bp))},
gdX(){return this.c}}
C.aBx.prototype={
a_(){this.a1()
this.Ig()},
Ig(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ig=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a18(t.a.c),$async$Ig)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dDX(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Ig,v)},
aRb(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aP,s=A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bq:B.bn).j(0.22)
w=A.m(10)
return A.br(v,new A.b4(4,r,new A.aA(u,1,B.q,-1)),v,B.bj,v,v,v,v,!0,new A.b4(4,w,new A.aA((this.a.d.a?B.bq:B.bn).j(0.22),1,B.q,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.m(10),D.aWM),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aRa(d){return this.aRb(d,null)},
OS(d){return this.cga(d)},
cga(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OS=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Gd:B.eG
w=7
return A.b(new A.hW().BJ(72,900,900,n),$async$OS)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fg(),$async$OS)
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
return A.i($async$OS,v)},
aZF(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aP,o=A.m(10),n=A.I((q?B.bq:B.bn).j(0.18),B.q,1)
if(d)q=B.d_
else q=s.a.d.a?B.bq:B.bn
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.aB,r,r,r,r,r,r,r,r,12.5,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.d_
else u=s.a.d.a?B.bq:B.bn
t=x.p
u=A.E(A.v(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a5,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fv(r,r,r,r,r,r,r,r,r,r,r,B.d_,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c8)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cA,s.a.d.a?B.bq:B.bn,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c8))
return A.p(r,A.A(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.kh,D.bp8,r,r,r)},
CI(d){return this.bxM(d)},
bxL(){return this.CI(null)},
bxM(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CI=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.ar(new A.bb(a4,B.b3,B.aN),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jU(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.aa(p,2)}o=new A.ar(new A.bb(a4,B.b3,B.aN),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.ar(new A.bb(a4,B.b3,B.aN),s)
if(a3){a4=new A.S(Date.now(),0,!1).bP(6048e8)
m=A.c1(a4.gcj(),a4.gce(),a4.gct(),0,0,0,0,0)}else{a4=a5.f
m=A.c1(a4.gcj(),a4.gce(),a4.gct(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bl(a4,!0,x.cT)
i=a3?null:A.fWb(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.vR?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",a4,new C.dDG(),new C.dDH(a2,t,a5,r,new C.dDI(a2,t),o,n,j),B.eE,!0,x.y),$async$CI)
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
break}if(f.length===0||e<=0){t.c.I(x.q).f.R(D.eRb)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.R(D.ePR)
w=1
break}a1=A.ftU(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.vR?"male":"female"
w=7
return A.b(A.agQ(a3,A.h35(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$CI)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.vR?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a9(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c1(a3.gcj(),a3.gce(),a3.gct(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcj(),a4.gce(),a4.gct(),0,0,0,0,0)))a5.cIK(a2.a)
w=8
return A.b(A.agQ(t.a.c,a5),$async$CI)
case 8:case 5:w=9
return A.b(t.Ig(),$async$CI)
case 9:case 1:return A.h(u,v)}})
return A.i($async$CI,v)},
aRN(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.d_.j(0.14)
else w=this.a.d.a?B.M:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.d_
else s=(this.a.d.a?B.bq:B.bn).j(0.2)
s=A.I(s,B.q,g?1.5:1)
r=C.aXj(d,18)
if(g)q=B.d_
else q=this.a.d.a?B.aP:B.aB
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,A.p(p,A.A(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.bb,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ag)},
Rw(d){return this.cxv(d)},
cxv(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Rw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",s,new C.dE_(),new C.dE0(t,d),B.hX,!0,x.y),$async$Rw)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.S(s,0,!1)
case 4:w=7
return A.b(A.agQ(t.a.c,d),$async$Rw)
case 7:w=8
return A.b(t.Ig(),$async$Rw)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Rw,v)},
Nw(d,e){return this.bIu(0,e)},
bIu(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Nw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.l1(s,"Cancel","Delete",e.b+" \xb7 "+A.An(e.c)+" will be removed from this device.","Delete this debt?"),$async$Nw)
case 3:if(!g){w=1
break}w=4
return A.b(C.fo5(t.a.c,e.a),$async$Nw)
case 4:w=5
return A.b(t.Ig(),$async$Nw)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Nw,v)},
adW(d){return this.ca3(d)},
ca3(d){var w=0,v=A.j(x.H),u=this,t
var $async$adW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bV(B.K,null,new C.dDU(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$adW)
case 2:return A.h(null,v)}})
return A.i($async$adW,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.e4I
w=J.dH(m.d,new C.dE1())
v=A.B(w,w.$ti.k("J.E"))
w=J.dH(m.d,new C.dE2())
u=A.B(w,w.$ti.k("J.E"))
t=B.d.cI(v,0,new C.dE3())
w=A.m(18)
s=m.a.d.a
r=s?D.clL:D.awS
q=A.I(s?B.d_.j(0.35):B.d_.j(0.18),B.q,1)
s=A.p(l,D.bOq,B.f,l,l,new A.o(B.d_.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.av,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aB,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a1,!0,A.m(12),A.aL(!1,A.m(12),!0,D.e46,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dE4(m),l,l,l,l,l,l,l),B.f,B.d_,0,l,l,l,l,l,B.ag)],p),B.m,l,B.e,B.j,0,l,l)
o=A.E(m.ctK("Open",""+v.length),1)
n=v.length===0?"$0.00":A.An(t)
r=A.a([A.p(l,A.v(A.a([s,B.ac,A.A(A.a([o,B.ab,A.E(m.b4H(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.ax,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.agy,l,l,l),B.aA],p)
if(J.cl(m.d)){w=m.a.d.a
s=w?B.dX:B.c
q=A.m(18)
o=A.I((w?B.bq:B.bn).j(0.12),B.q,1)
n=A.p(l,D.bJo,B.f,l,l,new A.o(B.d_.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aB,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.ac,w,B.at,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bn,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.brw,l,l,1/0))}else{w=m.gcft()
s=A.B(new A.K(v,w,A.U(v).k("K<1,r>")),x.l)
if(u.length!==0){q=A.a([B.an,new A.C(D.bta,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bn,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.K(u,w,A.U(u).k("K<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.aj,l,B.e,B.j,0,B.p)},
b4H(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.bq:B.bn).j(0.12),B.q,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bq:B.bn,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.d_
else w=v.a.d.a?B.aP:B.aB
return A.p(u,A.v(A.a([q,B.bB,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ei,u,u,u)},
ctK(d,e){return this.b4H(!1,d,e)},
cfu(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.yK(j).length,h=d.bdO()
if(d.x!=null){w=d.yK(j).length
v=w===0?B.d_:B.bI}else if(d.gT7())v=B.bI
else{if(h)w=B.d_
else w=k.a.d.a?B.bq:B.bn
v=w}if(d.x!=null){w=d.yK(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wv(u,!1)}else{u.toString
t="Paid "+C.wv(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wv(w,!1)+" \xb7 "+i+" missed":"Due "+C.wv(w,!1)}w=k.a.d.a?B.dX:B.c
u=A.m(18)
if(d.gT7()&&d.x==null)s=B.bI.j(0.35)
else s=(k.a.d.a?B.bq:B.bn).j(0.12)
s=A.I(s,B.q,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bm:B.lD
o=A.I(d.gT7()&&d.x==null?B.bI.j(0.45):B.d_.j(0.28),B.q,1.4)
n=d.x!=null?0.55:1
m=A.fWb(d.d)
o=A.p(B.A,A.dc(C.aXj(A.ftU(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.aB
m=x.p
n=A.a([new A.dq(1,B.cl,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaEn())B.d.v(n,A.a([B.eb,A.X(B.MC,B.d_.j(0.8),j,j,j,14)],m))
p=A.E(A.v(A.a([A.A(n,B.m,j,B.e,B.j,0,j,j),B.cX,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.An(d.c)
l=k.a.d.a?B.aP:B.aB
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aG(!1,B.a1,!0,j,A.aL(!1,q,!0,new A.C(W.agh,A.A(A.a([o,B.bf,p,B.ab,A.v(A.a([n,B.bB,A.X(B.ex,(k.a.d.a?B.bq:B.bn).j(0.5),j,j,j,18)],m),B.dz,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dDW(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ag),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.dc,j,j,j,j)}}
C.u2.prototype={}
C.ajF.prototype={
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
n.push(A.aE(a0,A.p(a0,A.X(B.cA,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a8))
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
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.ato,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.Fe,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f3(m,A.A(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.eg)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(D.bom,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cD:B.bl,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.C(B.fo,A.v(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.eLB)
a2=A.a([A.A(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.C(B.v9,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a3,B.a7,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.ld,A.v(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.q,1),a2,a0,a0,B.n),a0,a0,a0,B.hi,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.ax,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bpy,a0,a0,a0,a0)}}
C.aT6.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bg?B.bg:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bl:B.cD,q,B.P,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.m,q,B.e,B.j,0,q,q),B.cX,n],m)
if(p.z)o.push(new A.C(B.v6,n,q))
return new A.C(B.dc,A.v(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.S4.prototype={
U(){return new C.bcY()}}
C.bcY.prototype={
gbWo(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.e4D,D.e4J],l)
for(w=0;w<8;++w){v=D.a13[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.FY:B.Br
q=t===s
r=A.X(r,q?B.ez:B.c_,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.x(v.b,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bD(1,B.bi,new A.x(v.c,n,A1.CY,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aW(24,24)
p=new A.aA(B.ez,2,B.q,-1)
s=new A.o(n,n,new A.bP(p,p,p,p),new A.bq(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aE(n,new A.C(B.eF,A.v(A.a([new A.C(B.mj,new A.cn(B.aO,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.DA(!0,new C.ajF(v,q.d,q.e,new C.d3L(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d3M(o,v),n,n,n,n,n,n,!1,B.a8))}k.push(new A.C(D.bpQ,A.bJ(D.fv2,new C.d3N(o,d),A.bk(B.b7,n,n,n,n,B.o9,n,n,new A.b7(A.m(16),B.Y),n,n,n)),n))
return A.bn(!0,new A.cV(new A.aY(0,1/0,0,m.a.b*0.9),A.cB(k,n,D.bu2,n,n,B.ah,!0),n),!0,!1,B.af,!0,!0)}}
C.n8.prototype={
ag(){var w=this
return A.F(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a6().ac()],x.N,x.z)},
bas(d,e,f){return new C.n8(this.a,e,d,f)}}
C.H8.prototype={
w3(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.H8(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aCA(d){var w=null
return this.w3(w,w,w,w,w,d,w,w,w,w,w,w)},
cEA(d){var w=null
return this.w3(w,w,w,w,d,w,w,w,w,w,w,w)},
baq(d,e,f){var w=null
return this.w3(d,w,w,w,w,w,w,w,e,w,f,w)},
cFe(d){var w=null
return this.w3(w,w,w,w,w,w,d,w,w,w,w,w)},
cFn(d){var w=null
return this.w3(w,w,w,w,w,w,w,w,w,d,w,w)},
cEy(d){var w=null
return this.w3(w,w,w,d,w,w,w,w,w,w,w,w)},
cFp(d){var w=null
return this.w3(w,w,w,w,w,w,w,w,w,w,w,d)},
cEv(d){var w=null
return this.w3(w,w,d,w,w,w,w,w,w,w,w,w)},
cEq(d){var w=null
return this.w3(w,d,w,w,w,w,w,w,w,w,w,w)},
Fh(d){var w=null
return this.w3(w,w,w,w,w,w,w,d,w,w,w,w)},
cFx(d,e,f,g,h,i,j,k,l,m,n){return this.w3(d,e,f,g,null,h,i,j,k,l,m,n)},
ag(){var w=this
return A.F(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cCg(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bMc(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.C4.gee(D.C4))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a2A)
q=l.$2("frame",D.a21)
l=l.$2("texture",D.a1X)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cFx(p,u,t,q,r,A.qH(d.h(0,"ribbon"))?A.FF(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.YB.prototype={
U(){return new C.ayA(A.a([],x.I),D.Ma)},
gdX(){return this.c}}
C.ayA.prototype={
a_(){var w,v=this
v.a1()
v.f=A.ze(0,1)
w=$.aw()
v.z=new A.ar(B.as,w)
v.Q=new A.ar(B.as,w)
v.kQ()
w=v.a
C.bA5(w.c,w.d).bz(new C.d4r(v),x.fL)},
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
return A.b(C.Kj(s.c,s.d),$async$kQ)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d4f(t,r))
t.auv()
case 1:return A.h(u,v)}})
return A.i($async$kQ,v)},
gar7(){var w,v=this
if(!J.cl(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
auv(){var w,v,u=this.gar7(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saV(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saV(0,w==null?"":w)},
c8u(d){this.m(new C.d4c(this,d))
this.auv()},
MS(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$MS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.n8(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aPg(r.c,r.d,s),$async$MS)
case 3:w=4
return A.b(t.kQ(),$async$MS)
case 4:if(t.c==null||J.cl(t.d)){w=1
break}q=J.q8(t.d,new C.d3O(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d3P(t,p))
t.auv()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.AN(p+1,B.cs,B.kG),$async$MS)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$MS,v)},
At(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$At=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gar7()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aPg(o.c,o.d,new C.n8(s,r,q,new A.S(p,0,!1))),$async$At)
case 3:w=4
return A.b(t.kQ(),$async$At)
case 4:if(t.c==null){w=1
break}t.m(new C.d4g(t))
case 1:return A.h(u,v)}})
return A.i($async$At,v)},
Nx(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Nx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gar7()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d3X(r),s,null,!0,!0,x.y),$async$Nx)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bzR(s.c,s.d,r.a),$async$Nx)
case 4:t.m(new C.d3Y(t))
w=5
return A.b(t.kQ(),$async$Nx)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Ta(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Nx,v)},
y0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$y0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.At(),$async$y0)
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
return A.b(C.Ql(s,r.r,o,p,q),$async$y0)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hjr(s,r.x,r.r),$async$y0)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Kj(s.c,s.d),$async$y0)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.K(l,new C.n8(""+(m+k),q,B.a.i(j.b),new A.S(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Aw(r.c,r.d,l),$async$y0)
case 11:w=12
return A.b(t.kQ(),$async$y0)
case 12:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$y0,v)},
a_J(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_J=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.At(),$async$a_J)
case 5:case 4:if(t.c==null){w=1
break}s=t.gxZ(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dL(D.yv,new C.d4d(t),new C.d4e())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mn("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gS(o)
p.push(new F.mn(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fXN(o,new F.rb(s,r,"",p,new F.um(q.d,null,null,null,null,"","","")),null),$async$a_J)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a_J,v)},
Nf(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Nf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.At(),$async$Nf)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bV(D.abW,null,new C.d3T(t),s,!0,!0,!0,D.aLz,!1,!1,x.N),$async$Nf)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cEA(r)
t.m(new C.d3U(t,q))
s=t.a
w=7
return A.b(C.QV(s.c,s.d,q),$async$Nf)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Nf,v)},
Wk(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(D.abW,null,new C.d3Z(t),r,!0,!0,!0,D.aLz,!1,!1,x.e),$async$Wk)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d4_(t,s))
r=t.a
w=4
return A.b(C.QV(r.c,r.d,s),$async$Wk)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.AN(0,B.dV,B.ow)
case 1:return A.h(u,v)}})
return A.i($async$Wk,v)},
bNF(d){var w=d.bS(),v=B.a.aT(B.o.u(w.gce()),2,"0"),u=B.a.aT(B.o.u(w.gct()),2,"0")
return""+w.gcj()+"-"+v+"-"+u},
gxZ(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bVE()
if(r.e)w=D.aaI
else if(J.cl(r.d)){w=r.y
v=r.gxZ(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eW3,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.C(A0.ahA,new C.XU(w,v,0,q),q),q),B.bx,t,B.an,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kb.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aE(q,A.p(q,D.eGY,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dO.j(0.45),B.J,18)],x.V),E.vG,B.n),q,q,q,q,B.Yf,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcBo(),q,q,q,q,q,q,!1,B.a8))
w.push(B.S)
w.push(A.hc(D.bFF,D.fuw,r.gaLe(),q))
B.d.v(u,w)}w=A.av(A.cd(A.v(u,B.m,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.ew,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kb.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.P,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dQ:B.zT
u=A.v(A.a([new A.C(D.bqQ,w,q),A.E(A.Is(v,new C.d4p(r),J.ad(r.d)+1,q,r.gc8t(),u,B.aO),1),r.bAD()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c8(q,D.ade,new A.an(B.W,q,B.b_,B.r,A.a([D.aK4,A.bn(!0,A.v(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bVE(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cy(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Jr(B.dW,"AI",h.gbyy(),!0))
if(h.a.f)f.push(new C.Jr(B.na,"Cover",h.gbJ3(),!1))
if(h.a.f)f.push(new C.Jr(B.y8,"Header",h.gbE3(),!1))
if(J.cy(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Jr(B.tO,"Print",h.gchu(),!1))
if(h.a.f&&J.cy(h.d)&&h.r>=0){v=h.w
u=v?B.hz:B.jg
t=v?"Save":"Edit"
f.push(new C.Jr(u,t,v?h.gcnC():new C.d49(h),!1))}if(h.a.f)f.push(new C.Jr(B.hy,"Add page",h.gaLe(),!1))
v=C.hfG(h.y.Q)
u=h.gxZ(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.dlO
else{k=new A.aW(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.aA(E.jN.j(0.5),1,B.q,-1)
j=A.p(g,A.X(l.a,D.kb,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bP(i,i,i,i),new A.bq(k,k,k,k),g,new A.a8(B.a3,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kb.j(0.85)
p.push(new A.bD(1,B.bi,A.aE(B.c3,A.v(A.a([k,B.bB,new A.x(l.b,g,new A.G(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a8),g))}return new C.ajF(v,u,t+" \xb7 "+s+" "+r,new C.d4a(h),A.A(p,B.m,g,B.e,B.j,0,g,g),g)},
zx(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.At(),$async$zx)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gS(r)
s.push(q.b+" "+q.c)}p=F.a1n(B.d.aI(s," "))
s=t.c
s.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.d3Q(t,p),s,null,!0,!0,x.N),$async$zx)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.y0(),$async$zx)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Di(),$async$zx)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.EV("Swahili (Kiswahili)",!0),$async$zx)
case 18:w=16
break
case 17:w=19
return A.b(t.cy8(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zx)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zx,v)},
Yc(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(E.jN.j(0.3),B.q,1),r=x.p
return new A.C(B.cH,A.aL(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.vG,B.a6),w,42,w,w,w,w,w,42),B.bf,A.E(A.v(A.a([A.d(f,w,w,w,w,w,w,A8.T0,w,w,w),A.d(g,w,w,w,w,w,w,O.SU,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bj,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d4b(d,h),w,w,w,w,w,w,w),w)},
Di(){return this.bN9()},
bN9(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Di=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d42(r),a7,null,!0,!0,x.ei),$async$Di)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eP("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.ca(null,null,!1,null,new C.d43(o),a7,null,!0,!0,x.H).fc(new C.d44(a6))
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
for(a1=0;a1<8;++a1){i=D.yv[a1]
J.ch(j,i.a)}w=8
return A.b(C.ag1(a0,a7,new C.d45(o),d,l,e,j),$async$Di)
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
if(l!=null&&a6.a)A.a6(l,!0).eI()
l=o
l.shS($.aw())
J.aPH(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.I(x.q).f
j=n
l.R(A.b2(null,null,null,null,null,B.r,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gco(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.ai(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.bas(m.b.h(0,a4).b,a7,new A.S(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Aw(j.c,j.d,l),$async$Di)
case 11:w=12
return A.b(r.kQ(),$async$Di)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.yv[a1].a)
a5=l.cCg(j,12,a7)
l=r.a
w=15
return A.b(C.QV(l.c,l.d,a5),$async$Di)
case 15:if(r.c!=null)r.m(new C.d46(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.AN(0,B.dV,B.ow)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.I(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.R(A.b2(a3?A.cpA("Undo",new C.d47(r,p,f),null):null,null,null,null,null,B.r,null,j,null,B.ed,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Di,v)},
EV(d,e){return this.cy9(d,e)},
cy8(d){return this.EV(d,!1)},
cy9(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$EV=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eP("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.ca(null,null,!1,null,new C.d4i(a0),k,null,!0,!0,x.H).fc(new C.d4j(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.ch(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a1A(m,new C.d4k(a0)),$async$EV)
case 10:w=8
break
case 9:w=11
return A.b(C.bBz(new C.d4l(a0),m,a2),$async$EV)
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
if(o!=null&&f.a)A.a6(o,!0).eI()
o=a0
o.shS($.aw())
J.aPH(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.I(x.q).f
k=q
o.R(A.b2(null,null,null,null,null,B.r,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.bas(J.q(p,g).b,j.a,new A.S(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Aw(k.c,k.d,o),$async$EV)
case 12:w=13
return A.b(r.kQ(),$async$EV)
case 13:o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(A.cpA("Undo",new C.d4m(r,d),null),null,null,null,null,B.r,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$EV,v)},
bAD(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d3R(v):u
r=A.aH(u,u,u,u,A.X(D.bBo,s?D.kb:B.b2,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cy(v.d)&&!v.w&&v.r>=0)s=A.hc(A.X(B.vl,B.EC,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.EC,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbID(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kb.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.av(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d3S(v):u
return A.bn(!0,new A.C(D.bqE,A.A(A.a([r,s,A.aH(u,u,u,u,A.X(B.ex,t<J.ad(v.d)?D.kb:B.b2,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.YF.prototype={
U(){return new C.bdi(new A.ar(B.as,$.aw()))}}
C.bdi.prototype={
ga0R(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
gbLU(){var w,v=this.ga0R()
A:{if("cover"===v){w=D.cRF
break A}if("book"===v){w=D.cNy
break A}w=D.dex
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jN.j(0.5),n=x.p,m=A.A(A.a([D.dlP,B.av,D.bw0,A.aH(q,q,q,q,B.lk,q,q,q,new C.d6b(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jI(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d6c(r),r.ga0R()==="page",q,q,q,q))
if(r.a.d)l.push(A.jI(q,q,q,D.fpl,q,new C.d6d(r),r.ga0R()==="book",q,q,q,q))
l.push(A.jI(q,q,q,D.fcV,q,new C.d6e(r),r.ga0R()==="cover",q,q,q,q))
l=A.bY(B.bz,l,B.br,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.T,!1,q,!0,B.r,q,A.aN(),r.d,q,q,q,q,q,2,A.br(q,new A.b4(4,A.m(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kw,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dl,!0,B.a4,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbLU(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mE(q,B.c.j(0.08),new A.x(s,q,B.IC,q,q,q,q,q,q,q,q,q),B.hD,new C.d6f(r,s),q,q,q,q))}return A.eH(q,E.An,A.cd(A.v(A.a([m,B.S,D.fsu,B.an,l,B.ac,k,B.O,A.bY(B.bz,w,B.br,6,6),B.aA,A.dp(D.bFC,D.ftf,new C.d6g(r,d),A.bk(B.b7,q,q,q,q,B.o9,q,q,new A.b7(A.m(16),B.Y),q,q,q)),B.at,D.fnG],n),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.fy,q,q,B.ah),q,q,q,D.ahj,B.d0,q,new A.b7(p,new A.aA(o,1.4,B.q,-1)),q)}}
C.YD.prototype={
U(){return new C.ayB(A.a([],x.Y))},
gdX(){return this.c}}
C.adP.prototype={}
C.ayB.prototype={
a_(){this.a1()
this.kQ()},
kQ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Qp(p.c,p.d),$async$kQ)
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
return A.b(C.bA5(r.c,q),$async$kQ)
case 6:j=e
i=J
w=7
return A.b(C.Kj(t.a.c,q),$async$kQ)
case 7:m.push(new l.adP(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d4G(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kQ,v)},
b5S(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Px(d,e){return this.ca1(0,e)},
ca1(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Px=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).c8(A.e8(new C.d4F(u,e),!0,null,x.y)),$async$Px)
case 2:t=g
w=3
return A.b(u.kQ(),$async$Px)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.R(D.aNt)
return A.h(null,v)}})
return A.i($async$Px,v)},
EY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$EY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.R(D.aNp)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.afk(s.c,s.d),$async$EY)
case 5:q=e
w=6
return A.b(t.kQ(),$async$EY)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Px(0,B.d.iD(t.d,new C.d4K(q))),$async$EY)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Ql(p,s.f,r,n,o),$async$EY)
case 10:m=e
w=11
return A.b(t.kQ(),$async$EY)
case 11:if(m&&t.c!=null)t.c.I(x.q).f.R(D.aNt)
case 1:return A.h(u,v)}})
return A.i($async$EY,v)},
P1(d,e){return this.cll(0,e)},
cll(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$P1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d4J(t,e),s,null,!0,!0,x.y),$async$P1)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a1N(s.c,s.d,e.a),$async$P1)
case 4:w=5
return A.b(t.kQ(),$async$P1)
case 5:case 1:return A.h(u,v)}})
return A.i($async$P1,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bAG(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(E.jN.j(0.6),B.q,1.6)
r=t===1?"space":"spaces"
k.push(A.aE(n,new A.fG(0.7142857142857143,A.p(n,A.v(A.a([D.dlQ,B.ac,D.e3N,B.at,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kb.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.bb,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcBk(),n,n,n,n,n,n,!1,B.a8))}w=A.m(22)
v=A.I(E.jN.j(0.85),B.q,1.6)
s=A.aE(n,A.p(n,D.bNe,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jN.j(0.6),B.q,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d4L(d),n,n,n,n,n,n,!1,B.a8)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.jN.j(0.5),B.q,1)
w=A.p(n,A.A(A.a([s,B.bf,D.bwm,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eV9,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h5,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bSO,B.n),n,n,n,Am.LD,D.boO,n,n,n)
if(o.e)k=D.aaI
else k=k.length===0?D.b38:A.cp(new C.d4M(k))
return A.c8(n,D.ade,new A.an(B.W,n,B.b_,B.r,A.a([D.aK4,A.bn(!0,A.v(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bAG(d){var w,v,u=this,t=null,s=u.b5S(d),r=d.c,q=x.p,p=A.a([A.bZ(0,A.f3(B.A,new A.a7(300,420,new C.XU(d.b,s,r,t),t),B.f,B.du),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aE(t,A.p(t,D.bMy,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b2,B.q,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d4D(u,d),t,t,t,t,t,t,!1,B.a8),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.eUK,t,t,t)
v=r===1?"page":"pages"
return A.aE(t,A.v(A.a([new A.fG(0.7142857142857143,new A.an(B.W,t,B.aa,B.r,p,t),t),B.O,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kb.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d4E(u,d),t,t,t,t,t,t,!1,B.a8)}}
C.Jr.prototype={}
C.XU.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dL(D.yv,new C.cDJ(m),new C.cDK()),j=m.c,i=D.C4.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.lR:B.bb
v=new C.cDL(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.e16,28)],x.V)
u=x.p
t=A.a([A.bZ(0,A.b3(l,l,l,new C.baz(j.x,h,l),B.au),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a3,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aW(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bq(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.ahB,8,0.85,2.2),v.$4(D.btt,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.ahB,8,0.85,2.4))
else if(r==="corners")t.push(A.bZ(0,new A.C(D.btp,A.b3(l,l,l,new C.baq(h,l),B.au),l),0,0,0))
r=A.X(D.aw_[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.ato,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aQ,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bZ(0,new A.C(D.btV,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aFA(l),D.eKK),l,l,l,46,0,l))
return A.p(l,A.bw(D.a9p,new A.an(B.W,l,B.aa,B.r,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.a9p,i,new A.a8(B.ax,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.baz.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eJ()
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
k=h.gbK().a.snapshot()
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
C.baq.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.W(),k=A.M(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bO
for(w=e.a,v=e.b,v=[D.eC0,new A.cH([w,0,-1,1]),new A.cH([0,v,1,-1]),new A.cH([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
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
w.drawPath((n.e=new A.cF(s)).a,m)
m.delete()
s=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
s.r=j.j(0.9).gp(0)
m=s.H()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
ar(d){return!d.b.A(0,this.b)}}
C.u3.prototype={}
C.Yb.prototype={
U(){return new C.bax()}}
C.bax.prototype={
gnS(){var w=this.d
return w===$?this.d=this.a.c:w},
gxZ(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ar(new A.bb(w.b,B.b3,B.aN),$.aw())}return v},
gazQ(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ar(new A.bb(w.c,B.b3,B.aN),$.aw())}return v},
gapI(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ar(new A.bb(w.y,B.b3,B.aN),$.aw())}return v},
q(){var w=this,v=w.gxZ(0),u=v.T$=$.aw()
v.P$=0
v=w.gazQ()
v.T$=u
v.P$=0
v=w.gapI()
v.T$=u
v.P$=0
w.a2()},
aqj(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jI(s,s,s,new A.x(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cXa(this,f,u),e===u,s,s,s,s))}return A.bY(B.bz,r,B.br,6,8)},
avX(d){var w=null,v=B.c.j(0.07)
return A.br(w,new A.b4(4,A.m(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.l_,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gnS(),a0=f.gxZ(0),a1=a0.a.a,a2=f.gazQ(),a3=a2.a.a,a4=f.gapI(),a5=d.baq(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a7(190,260,A.f3(B.A,new A.a7(270,370,new C.XU(a5,d,f.a.e,e),e),B.f,B.du),e),e,e,e)
a0=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a0,e,e,e,e,e,2,f.avX("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cXz(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a4,e,B.am,e,e,e,e)
a2=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a2,e,e,e,e,e,2,f.avX("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cXA(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a4,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.yv[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b2
q=r.a===q
o=new A.aA(p,q?3:1,B.q,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bP(o,o,o,o),e,e,new A.a8(B.ax,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.az
v.push(A.aE(e,A.v(A.a([p,B.cX,new A.x(t.b,e,new A.G(!0,q,e,e,e,e,10.5,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cXB(f,t),e,e,e,e,e,e,!1,B.a8))}v=A.bY(B.bz,v,B.br,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b7.j(0.35):B.c.j(0.07)
m=new A.aW(14,14)
s=f.d
o=new A.aA((s===$?f.d=f.a.c:s).d===n?B.ez:B.K,2,B.q,-1)
q.push(A.aE(e,A.p(e,A.X(D.aw_[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bP(o,o,o,o),new A.bq(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cXC(f,n),e,e,e,e,e,e,!1,B.a8))}q=A.bY(B.bz,q,B.br,8,8)
a4=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a4,e,e,e,e,e,2,f.avX("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cXD(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a4,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mE,e,e,e)
m=A.a([],w)
for(l=D.C4.gdK(D.C4),l=l.gae(l);l.C();){k=l.gS(l)
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
m.push(A.aE(e,A.v(A.a([j,B.bB,new A.x(i,e,new A.G(!0,h,e,e,e,e,10,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cXE(f,k),e,e,e,e,e,e,!1,B.a8))}m=A.bY(B.bz,m,B.br,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mE,e,e,e)
k=f.gnS()
return new A.C(new A.Q(0,0,0,a3.f.d),A.bn(!0,new A.cV(new A.aY(0,1/0,0,a1.a.b*0.92),A.cB(A.a([D.fn8,B.ac,d,B.aQ,a0,B.S,a2,B.aA,D.ft3,B.O,v,B.aA,D.fni,B.O,q,B.aA,a4,B.aA,p,B.O,m,B.aA,l,A.kW(e,9,""+B.k.V(f.gnS().f),36,18,new C.cXF(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mE,e,e,e),B.an,f.aqj(D.a2A,f.gnS().r,new C.cXG(f),D.dhI),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mE,e,e,e),B.an,f.aqj(D.a21,f.gnS().w,new C.cXH(f),D.dhN),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mE,e,e,e),B.an,f.aqj(D.a1X,f.gnS().x,new C.cXJ(f),D.dja),B.an,A.iD(e,B.b7,e,B.af,e,new C.cXK(f),e,e,e,D.fhG,f.gnS().z),B.bx,A.bJ(D.fm0,new C.cXL(f,a6),A.bk(B.b7,e,e,e,e,B.o9,e,e,new A.b7(A.m(16),B.Y),e,e,e))],w),e,R.ah8,e,e,B.ah,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aFA.prototype={
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
u.saq(D.bTr.av(0,new A.a9(0,0,0+w,0+v)))
d.aP(t,u)},
ar(d){return!1}}
C.bfM.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=A.M()
w.saq(D.bSu.av(0,new A.a9(0,0,a3,a4)))
a5.aX(new A.a9(0,0,a3,a4),w)
v=B.k.dw(a2/112)
u=new A.eJ()
u.dB(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cRE[u.aB(9)]
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
e.r=E.jN.j(0.55).gp(0)
d=e.H()
w.drawRect(A.c0(new A.a9(h,j,g,j+2)),d)
d.delete()
j=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
j.r=E.jN.j(0.4).gp(0)
d=j.H()
w.drawRect(A.c0(new A.a9(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aB(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.saq(D.bRS.av(0,new A.a9(0,r,a3,q)))
d=p.H()
w.drawRect(A.c0(new A.a9(0,r,a3,q)),d)
d.delete()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.jk
d=p.H()
w.drawRect(A.c0(new A.a9(0,q,a3,q+14)),d)
d.delete()}w=A.M()
w.r=D.b6v.j(0.72).gp(0)
a5.aX(new A.a9(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.M()
a4.saq(new A.bS(B.A,0.5,B.x,a0,0,A.a([D.bdd.j(0.22),B.K],t),a0,a0).av(0,A.bT(new A.u(w,a2),a1)))
a5.af(new A.u(w,a2),a1,a4)},
ar(d){return!1}}
C.b8L.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aK(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.kM(new A.o(A.aq(D.kb,D.bhz,w/4),o,new A.bP(B.Y,new A.aA(B.w.j(0.12),1,B.q,-1),B.Y,B.Y),B.JJ,o,o,B.n),B.bd,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aFI,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aW(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jN.j(0.6),o,o,new A.bq(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.pX,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aWw,u,D.bTp,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dk,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aFA(o),D.eKF),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aT6(p.y,r,G.ir,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.r,o,o,o,o,o,2,A.br(o,B.ey,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ir.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f7o,!0,B.a4,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ir.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.w,o,o,o,o,o,2,A.br(o,B.ey,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ir.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.eZA,!0,B.a4,B.zi,B.am,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.f7h,o,o,o),B.at,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ir.j(0.5),o,o,o,o,o,o,o,o,11,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.O,A.A(A.a([A.E(A.p(o,o,B.f,D.Eo.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fo,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.Eo.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.Eo.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aA],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.ir.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.X9(A.dn(A.a([A.dn(o,o,o,o,o,o,o,o,o,D.f1G,B.a.ap(k,0,1)),A.dn(o,o,o,o,o,o,o,o,o,o,B.a.b0(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.ir.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.v(n,B.F,o,B.e,B.j,0,B.p),B.r,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.C(B.ib,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.ir.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.A(A.a([u,A.E(A.p(o,A.bw(B.JJ,new A.an(B.W,o,B.aa,B.r,A.a([t,new A.C(D.bsX,A.v(s,B.aj,o,B.e,B.j,0,B.p),o),A.ao(0,A.c_(o,new A.o(o,o,o,o,o,new A.a8(B.a3,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bd),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.JJ,v,D.bTX,B.n),o,o,o,o,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.r,l,o)}}
C.aoo.prototype={
U(){return new C.aC7(A.a([],x._))},
bp(){return this.r.$0()},
pE(){return this.w.$0()},
gdX(){return this.c}}
C.aC7.prototype={
a_(){var w,v
this.a1()
this.vA()
w=this.a
v=w.c
if(v.length!==0)C.a6o(v,w.e,w.d.w)},
vp(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fXQ(r,t.e,!1,s.w,new C.dRY(u),null,s),$async$vp)
case 2:w=3
return A.b(u.vA(),$async$vp)
case 3:return A.h(null,v)}})
return A.i($async$vp,v)},
ZT(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ZT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fXQ(r,t.e,!0,s.w,new C.dRX(u),null,s),$async$ZT)
case 2:w=3
return A.b(u.vA(),$async$ZT)
case 3:return A.h(null,v)}})
return A.i($async$ZT,v)},
vA(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vA=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Al(q.a.c),$async$vA)
case 7:p=e
if(q.c!=null)n=q.e||J.cy(p)
else n=!1
if(n)q.m(new C.dS_(q,p))
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
return A.b(C.G5(q.a.c).cM(0,B.pA),$async$vA)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dS0(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dS1(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vA,v)},
O1(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$O1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.R(D.eOg)
w=3
return A.b(C.G5(t.a.c),$async$O1)
case 3:r=e
w=4
return A.b(C.fDz(t.a.c,r),$async$O1)
case 4:q=e
w=5
return A.b(C.G5(t.a.c),$async$O1)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dRW(t,p))
o=t.c.I(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(null,null,null,q?B.dx:B.cR,null,B.r,null,s,null,B.mf,null,null,null,null,null,null,null,null,null,null))
t.a.pE()
case 1:return A.h(u,v)}})
return A.i($async$O1,v)},
Hw(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Hw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i3X(l),$async$Hw)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hyA(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aYK(q,p.e,l,"Each family tree costs $"+B.k.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Hw)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hfP(r)
o=Date.now()
n=t.a.c
m=new C.kA(l,r.toUpperCase(),p,!0,B.T,D.BU,new A.S(o,0,!1),0,n,D.tA)
w=5
return A.b(C.a1U(n,m),$async$Hw)
case 5:w=6
return A.b(t.vA(),$async$Hw)
case 6:t.a.bp()
t.a.pE()
if(t.c==null){w=1
break}t.E7(m)
case 1:return A.h(u,v)}})
return A.i($async$Hw,v)},
E7(d){return this.cc3(d)},
cc3(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$E7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Al(u.a.c),$async$E7)
case 2:n=l.r7(k.dH(f,new C.dRZ(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hv(m,new C.aoi(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$E7)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a1U(u.a.c,o),$async$E7)
case 6:case 5:w=7
return A.b(u.vA(),$async$E7)
case 7:u.a.pE()
return A.h(null,v)}})
return A.i($async$E7,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tB(p)
if(r.e)return A.av(A.mG(q,p?B.bq:B.bn,q,q,q,q,q,q,q,q),q,q,q)
if(J.cl(r.d)){w=p?B.dX:B.c
v=A.m(15)
u=A.aG(!1,B.a1,!0,q,A.aL(!1,q,!0,A.p(q,D.bGH,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.q,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcb7(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.F8(A.p(q,A.v(A.a([u,B.aQ,t,B.O,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bn,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.e1,A.bJ(D.fug,r.gaPf(),A.bk(B.bW,q,q,q,q,q,Al.Yi,q,new A.b7(A.m(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bsT,q,q,1/0),15,B.af,1.05,D.a85,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b5],v)
if(J.cy(r.d))w.push(A.aH(q,q,q,q,A.X(B.yf,B.aV,q,q,q,q),q,q,q,new C.dS3(r),q,q,q,q,"Sync family trees with database",q))
if(J.cy(r.d))w.push(A.aH(q,q,q,q,A.X(B.y6,B.aV,q,q,q,q),q,q,q,r.gaeB(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dp(E.amJ,D.faL,r.gaPf(),A.bk(B.bW,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.F8(r.cyd(J.q(r.d,s),o),14,B.af,1,D.a85,q))
B.d.v(w,u)}return A.v(A.a([p,B.aA,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cyd(d,e){var w=null,v=e.a,u=v?B.dX:B.c,t=A.m(14),s=A.I((v?B.dZ:B.bR).j(0.55),B.q,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.ek,10)],x.V),q=A.m(14),p=A.p(w,D.bFL,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.ganC(),m=d.d?"":" \xb7 Public",l=d.y===D.ki?" \xb7 View only":"",k=x.p
l=A.E(A.v(A.a([o,B.bB,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aG(!1,B.a1,!0,w,A.aL(!1,q,!0,new A.C(B.bC,A.A(A.a([p,B.bf,l,A.X(B.Mm,v?B.bq:B.bn,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dS2(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aoi.prototype={
U(){return new C.aC4(A.a([],x._),A.aX(x.N),A.b6o())},
bp(){return this.r.$0()},
gdX(){return this.c}}
C.aC4.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.abv()
w=u.a
v=w.c
if(v.length!==0)C.a6o(v,w.e,w.d.w)},
q(){var w=this.w
w.T$=$.aw()
w.P$=0
this.a2()},
a1O(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1O=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xu("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dRo(r),s,null,!0,!0,x.y),$async$a1O)
case 3:if(e!==!0||t.c==null){w=1
break}t.J1()
t.m(new C.dRp(t,r))
w=4
return A.b(t.vr(),$async$a1O)
case 4:t.a.bp()
t.xu(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a1O,v)},
cog(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.x1$.push(new C.dRj(w,f,d,e))},
aRq(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dm()
u.e2(w,v,0,1)
u.jD(q,q,1,1)
this.w.sp(0,u)},
b86(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eC(new Float64Array(16))
q.dY(r)
w=q.Cd()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dm()
t.e2(r,u,0,1)
t.jD(v,v,1,1)
t.e2(-r,-u,0,1)
t.iu(0,q)
s.sp(0,t)},
abv(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$abv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Al(u.a.c),$async$abv)
case 2:t=s.r7(r.dH(e,new C.dQS(u)))
if(t!=null&&u.c!=null)u.m(new C.dQT(u,t))
return A.h(null,v)}})
return A.i($async$abv,v)},
xu(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
vp(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.fXQ(o,t,!1,r,new C.dR6(u),q.a,s),$async$vp)
case 2:n=A
m=J
w=3
return A.b(C.G5(u.a.c),$async$vp)
case 3:p=n.r7(m.dH(e,new C.dR7(u)))
if(p!=null&&u.c!=null)u.m(new C.dR8(u,p))
return A.h(null,v)}})
return A.i($async$vp,v)},
J1(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cA(w,0)},
vr(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a1U(t,s),$async$vr)
case 2:return A.h(null,v)}})
return A.i($async$vr,v)},
a0o(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0o=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tM(q,t.a.c)){t.xu("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.i55(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a0o)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.J1()
t.m(new C.dRi(t,r))
w=4
return A.b(t.vr(),$async$a0o)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0o,v)},
a_6(){return this.cc5()},
cc5(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tM(q,t.a.c)){t.xu("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.P(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dRg(r,new C.tB(q.ax.a===B.I)),s,null,!0,!0,x.y),$async$a_6)
case 3:if(e!==!0||t.c==null){w=1
break}t.J1()
t.m(new C.dRh(r,t))
w=4
return A.b(t.vr(),$async$a_6)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_6,v)},
Va(d){return this.bxJ(d)},
bxJ(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Va=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tM(r,t.a.c)){t.xu("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dQG(t,d),r,null,!0,!0,x.P),$async$Va)
case 3:s=f
if(s==null){w=1
break}t.J1()
t.m(new C.dQH(t,s))
w=4
return A.b(t.vr(),$async$Va)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Va,v)},
a29(d){return this.cAl(d)},
cAl(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a29=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.ca(null,null,!0,null,new C.dRr(u,d,new C.tB(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a29)
case 2:return A.h(null,v)}})
return A.i($async$a29,v)},
c8o(d){var w=this,v=w.d
v===$&&A.c()
if(C.tM(v,w.a.c))w.NH(d)
else w.a29(d)},
ah3(d,e){return this.cs6(d,e)},
cs6(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ah3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.dRl(new C.tB(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ah3)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ah3,v)},
HB(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.ki?3:5
break
case 3:w=6
return A.b(C.fLK(t.a.c),$async$HB)
case 6:s=e
o=t.a
r=C.h4t(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ah3(!s,!r),$async$HB)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bzY(o,t.a.c)){t.xu("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.l1(o,"Cancel","Remove",q.y===D.ki?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$HB)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aND(t.a.c,t.d.a),$async$HB)
case 11:t.a.bp()
o=t.c
if(o==null){w=1
break}A.iM(o,null)
case 1:return A.h(u,v)}})
return A.i($async$HB,v)},
a94(d){return this.bIL(d)},
bIL(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a94=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tM(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b7(s,new C.dQI(p))){o=A.U(s)
p.a=A.r7(new A.cQ(new A.a2(s,new C.dQJ(d),o.k("a2<1>")),new C.dQK(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.J1()
t.m(new C.dQL(t,s,d,q))
w=3
return A.b(t.vr(),$async$a94)
case 3:t.xu(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a94,v)},
NH(d){return this.bKR(d)},
bKR(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tM(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a29(d),$async$NH)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.dQP(t,d),r,null,!0,!0,x.P),$async$NH)
case 6:s=f
if(s==null){w=1
break}t.J1()
t.m(new C.dQQ(t,s))
w=7
return A.b(t.vr(),$async$NH)
case 7:case 1:return A.h(u,v)}})
return A.i($async$NH,v)},
cyz(){var w=this,v=w.d
v===$&&A.c()
if(!C.tM(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dRq(w))
w.vr()},
XZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$XZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bzY(n,t.a.c)){t.xu("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.aw()
r=new A.ar(B.as,s)
q=t.d.e
p=A.bl(new A.K(q,t.gc6U(),A.U(q).k("K<1,n>")).c_(0,new C.dR1()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dR2(t,new C.tB(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$XZ)
case 3:o=e
r.T$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.J1()
t.m(new C.dR3(t,p))
w=4
return A.b(t.vr(),$async$XZ)
case 4:t.xu("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$XZ,v)},
c6V(d){return B.a.i(d.toLowerCase())},
caT(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tM(v,w)
t=r.d
s=C.hVl(t)
C.i40(q,t.b,u,C.hVk(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tB(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a2(l,new C.dRy(),A.U(l).k("a2<1>")).gM(0)
l=n?B.bX:B.iN
v=A.X(B.Zt,n?B.bq:B.bn,o,o,o,18)
u=x.p
v=A.a([new A.C(B.AM,A.aL(!1,o,!0,new A.C(B.hK,A.A(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,o,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dRz(p,d),o,o,o,o,o,o,o),o),new A.C(B.n5,p.bVF(m),o)],u)
if(p.d.y===D.ki){t=B.rf.j(0.15)
s=A.m(12)
r=A.I(B.rf.j(0.45),B.q,1)
q=C.G3(p.d,p.a.c)
v.push(new A.C(B.xq,A.p(o,A.A(A.a([D.bKW,B.av,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,12,o,o,B.a5,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.ix,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b5],u)
if(C.tM(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Jn("Undo",B.r3,p.gcyy(),m,o,o))
u.push(new C.Jn("Family Book",D.bAv,p.gcaS(),m,B.t3,o))
if(C.tM(p.d,p.a.c))u.push(new C.Jn("Display settings",B.Bw,p.gcc4(),m,B.aZ,o))
u.push(new C.Jn("Sync",B.y6,p.gaeB(),m,o,o))
t=p.d
if(t.y===D.ki||C.bzY(t,p.a.c)){t=p.d.y===D.ki?"Remove shared tree":"Delete tree"
u.push(new C.Jn(t,B.e5,p.gbIV(),m,B.fZ,o))}if(C.tM(p.d,p.a.c))u.push(new C.Jn("Add member",B.vx,new C.dRA(p),m,B.bW,o))
v.push(new A.C(R.agM,A.A(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.ganC()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cp(new C.dRB(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?K.Zx:Y.Mn,o,o,o,o,o)
v.push(A.av(A.hc(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dRC(p),o),o,o,o))}return A.c8(o,l,A.bn(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bVF(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fu.j(0.35),B.dk,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.X(B.xZ,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a1,!0,m,A.aL(!1,m,!0,A.p(m,D.bNY,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.q,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gaeB(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.eXZ,m,m,m)
r=r.ganC()
p=n.d.ganC()===1?"member":"members"
o=x.p
p=A.a([s,B.bf,A.E(A.v(A.a([q,B.bB,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a5,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tM(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bL7,m,m,m,n.gclG(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jh:B.mn
r=r?"Private":"Public"
r=A.E(n.atV(q,"Privacy",r,n.a.d.w?n.gcxz():m),1)
q=A.E(n.atV(B.y7,"Tree code",n.d.c,new C.dQR(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.A(A.a([r,B.ab,q,B.ab,A.E(n.atV(D.bCd,"Collaborators",p,n.gc_7()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.ki){s=B.c.j(0.15)
B.d.v(p,A.a([B.O,A.aG(!1,B.a1,!0,A.m(999),A.aL(!1,A.m(999),!0,new A.C(B.fI,A.A(A.a([A.X(B.oF,B.c,m,m,m,14),B.eb,A.d("View only",m,m,m,m,m,m,B.aOE,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ag)],o))}return A.p(m,A.bw(u,new A.an(B.W,m,B.aa,B.r,A.a([t,new A.C(B.F1,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bRW,B.n),m,m,m,m,m,m,m,1/0)},
atV(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a1,!0,A.m(14),A.aL(!1,A.m(14),!0,new A.C(L.ahU,A.v(A.a([A.X(d,B.c,w,w,w,18),B.at,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.uq,A.d(f,w,1,B.a2,w,w,w,P.zm,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)}}
C.bd0.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gam(r)&&s.c.length===0)return B.bH
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bd3(s,t),new A.at(w,v))],x.p)
r=r.gdK(r)
B.d.v(u,r.dt(r,new C.d4Q(this),x.l))
r=s.c
B.d.v(u,new A.K(r,new C.d4R(this),A.U(r).k("K<1,r>")))
return new A.C(B.tw,new A.a7(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.Jz.prototype={}
C.Fk.prototype={}
C.bd2.prototype={
gbgy(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aHG.prototype={}
C.bd3.prototype={
bKy(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
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
t.E(new A.pu(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.pu(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bF())
q=A.M()
q.r=B.c.gp(0)
d.af(new A.u(u,w),9,q)
q=A.M()
q.r=B.bA.gp(0)
d.aP(t,q)},
bKw(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.d5a())
w=f.b
v=w+(B.d.gL(a0).b-w)/2
u=B.d.b7(a0,new C.d5b(f))
t=new A.K(a0,new C.d5c(f),A.U(a0).k("K<1,N>")).c_(0,new C.d5d()).cI(0,1/0,B.uM)
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
h.push(new A.cS(w,v,w+l,v))
h.push(new A.ap(n-l,v))
h.push(new A.cS(n,v,n,v+i))
h.push(new A.ap(n,o.b))
k=e.H()
n=g.gbK().a.snapshot()
r.drawPath((g.e=new A.cF(n)).a,k)
k.delete()}},
a5(d,e){var w,v,u,t,s,r,q,p,o
$.W()
w=A.M()
w.r=B.bW.j(0.75).gp(0)
w.c=2.2
w.b=B.ae
w.d=B.bO
w.e=B.fz
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.L)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bKw(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bKy(d,w,q.a,q.b)}},
ar(d){return d.b!==this.b}}
C.bgJ.prototype={
gc4J(){var w=this.c
if(B.a.i(w.y).length!==0)return D.dew
switch(w.c.a){case 0:return D.cJv
case 1:return D.cUr
case 2:return D.d95}},
gc4M(){var w=this.c,v=C.hfd(w.w),u=C.hfd(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc4J(),p=t.c,o=I.bAS(p.f),n=t.gc4M(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.aB:B.c,j=A.I(r?B.aB:B.c,B.q,2)
if(o!=null)w=A.t2(B.A,s,B.ck,B.bQ,!1,s,o,!1,s,s)
else{w=A.a([B.d.gL(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a3,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hS(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.ax,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.Fh,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.aB:B.c,B.q,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.f6U,s,s,s),B.f,s,s,new A.o(B.c9,s,w,j,s,s,B.n),s,s,s,s,D.buL,s,s,s),s,s,s,-6,-4,s))}k=r?B.cC:B.c
j=A.m(8)
w=A.I(B.d.gL(q).j(0.35),B.q,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dE,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cC,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bn,s,s,s,s,s,s,s,s,7.5,s,s,B.a5,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aE(s,new A.a7(84,112,A.v(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.at,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.aYp,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.buW,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a8)}}
C.bc7.prototype={
a5(d,e){var w,v,u,t,s,r,q
$.W()
w=A.M()
v=this.b
u=v?B.c:D.b99
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
ar(d){return d.b!==this.b}}
C.buk.prototype={
B(d){var w=this,v=null,u=new C.f74(w),t=w.c,s=t?B.cC:B.c,r=A.m(12),q=u.$3(B.hy,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bF:B.f9,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.y3,"Zoom out",w.e)
return A.aG(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.f,t?B.bF:B.f9,v,v,v,1,v,v,v,v,v,22),u.$3(B.ake,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dn,v,v,v,B.ag)}}
C.bk4.prototype={
B(d){var w=this,v=null,u=B.bW.j(0.15),t=A.I(B.bW,B.q,2),s=w.e,r=x.p
t=A.aE(v,A.p(v,A.v(A.a([A.X(s?K.Zx:Y.Mn,B.bW,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.f3g,v,v,v)],r),B.m,v,B.bb,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a8)
u=A.a([t,B.an,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.f1f,B.L,v,v)],r)
if(s){t=A.a([B.an],r)
s=w.d
B.d.v(t,new A.K(s,new C.eJg(w),A.U(s).k("K<1,r>")))
B.d.v(u,t)}return new A.a7(84,v,A.v(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.Ze.prototype={
U(){return new C.aAw()},
bp(){return this.Q.$0()},
gdX(){return this.w}}
C.aAw.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a1()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aP()
r.d=new A.ar(new A.bb(t,B.b3,B.aN),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aP()
r.e=new A.ar(new A.bb(t,B.b3,B.aN),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aP()
r.f=new A.ar(new A.bb(t,B.b3,B.aN),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aP()
r.r=new A.ar(new A.bb(t,B.b3,B.aN),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aP()
r.w=new A.ar(new A.bb(t,B.b3,B.aN),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aP()
r.x=new A.ar(new A.bb(t,B.b3,B.aN),s)
t=u?q:v.c
r.y=t==null?D.xD:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hWT(w.r,w.f)
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
P2(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$P2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.h4t(p.y,p.w)
w=3
return A.b(A.le(t.a.w,B.HG),$async$P2)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aYK(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$P2)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hyB(p.y,p.w)
t.a.bp()
case 5:w=7
return A.b(An.Ge(78,800),$async$P2)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dl2(t,q))
case 1:return A.h(u,v)}})
return A.i($async$P2,v)},
c4L(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hV(B.o.u(1000*Date.now()),w,D.xD,null,null,null,"","","","","",1,!1,0)
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
s=v.aCG(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).O(s)},
a8G(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a8G=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dl1(r),s,null,!0,!0,x.y),$async$a8G)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a8G,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tB(j),h=l.a.e,g=A.U(h).k("a2<1>"),f=A.B(new A.a2(h,new C.dlb(l),g),g.k("J.E"))
h=j?B.dX:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bte,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aB,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hp(A.aL(!1,k,!0,new A.C(B.lJ,A.X(B.e5,B.ot,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbFB(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.js:B.iQ
t=I.bAS(l.as)
if(l.as==null)s=A.X(B.oy,j?B.bq:B.bn,k,k,k,40)
else s=k
s=A.av(A.aE(k,new A.an(B.W,k,B.aa,B.r,A.a([A.hq(u,t,s,k,42),A.ao(0,A.hq(B.bW,k,D.bEQ,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc4I(),k,k,k,k,k,k,!1,B.a8),k,k,k)
t=l.d
t===$&&A.c()
t=C.aAy(t,"Full name",B.mk,1,1,i,B.lY)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.S,new C.bgH(i,u,new C.dlc(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bmT],q)
o=l.a.e
B.d.v(p,new A.K(o,new C.dld(),A.U(o).k("K<1,eS<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bmV],q)
B.d.v(q,new A.K(f,new C.dlf(),A.U(f).k("K<1,eS<n?>>")))
o=A.v(A.a([t,B.an,new C.acf(i,r,"Who is their parent?",p,new C.dlg(l),k,o),B.aA,n,B.an,new C.acf(i,m,"Who is their spouse / partner?",q,new C.dlh(l),k,o)],v),B.aj,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aAy(q,"Birth date",D.aji,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aAy(m,"Birth place",B.ZM,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aAy(n,"Date of death (if deceased)",D.alz,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aAy(p,"Occupation",B.a_P,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.r,w,k),B.aA,s,B.bx,new C.acg(i,"Identity",u,k),B.ac,new C.acg(i,"Family links",o,k),B.ac,new C.acg(i,"Life details",A.v(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aAy(r,"Notes",B.kL,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aAx(i,"Child order",l.cci(l.at),new C.dli(l),new C.dlj(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fVe(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dlk(l):k
B.d.v(r,A.a([B.S,new C.aAx(i,"Visible in tree",u,w,new C.dll(l),k)],v))}r.push(B.S)
w=j?B.js:B.iQ
u=A.m(14)
t=A.I(j?B.dZ:B.bR,B.q,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iD(k,B.bW,k,B.af,k,new C.dlm(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.agl,k,k,k))
r.push(B.bx)
w=j?B.aP:B.aB
j=j?B.dZ:B.bR
r.push(A.A(A.a([A.E(A.dW(B.nr,new C.dle(d),A.df(k,k,k,k,k,k,k,k,k,w,k,k,B.ch,k,new A.b7(A.m(14),B.Y),new A.aA(j,1,B.q,-1),k,k,k,k)),1),B.bf,A.E(A.bJ(D.eH5,l.gc4K(),A.bk(B.aV,k,k,0,B.c,k,B.ch,k,new A.b7(A.m(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.at)
return A.ej(B.h9,k,B.af,h,new A.a7(420,k,A.cd(A.v(r,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),k),D.ahf,k,B.agD,new A.b7(g,B.Y),k,k)},
cci(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.acg.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.js:B.iQ,s=A.m(16)
return A.v(A.a([new A.C(D.ahE,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.dZ:B.bR,B.q,1),s,w,w,B.n),w,w,w,w,B.bj,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bgI.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dX:B.c,r=A.m(12),q=A.I((t?B.dZ:B.bR).j(0.85),B.q,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aP:B.aB,u,u,u,u,u,u,u,u,14,u,u,B.a5,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.T,!1,u,!0,B.r,u,A.aN(),v.d,u,u,u,u,u,2,A.br(u,B.ey,u,B.vb,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bq:B.bn,u,u,u,u,u,u,u,u,u,u,u,B.cv,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bW,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ai,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.acf.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dX:B.c,s=A.m(12),r=A.I((u?B.dZ:B.bR).j(0.85),B.q,1),q=A.X(B.qY,u?B.bq:B.bn,v,v,v,v),p=A.l(v,v,u?B.aP:B.aB,v,v,v,v,v,v,v,v,14,v,v,B.a5,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dX:B.c
return A.p(v,new A.Dg(A.a3x(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,v,v,v,B.cv,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.lb,v,v,v)}}
C.bgH.prototype={
B(d){var w=new C.dln(this)
return A.A(A.a([w.$3(D.Z5,"Male",B.N8),B.ab,w.$3(D.aiw,"Female",B.MU),B.ab,w.$3(D.xD,"Other",B.nb)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aAx.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.js:B.iQ,r=A.m(14),q=A.I(t?B.dZ:B.bR,B.q,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aB,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.E(A.v(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bn,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aGI(u,B.y3,w.f,v),B.bp,new C.aGI(u,B.hy,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ei,v,v,v)}}
C.aGI.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bW.j(0.12)
else w=s.c.a?B.dX:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bW
else t=(s.c.a?B.bq:B.bn).j(0.4)
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,new A.a7(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ag)}}
C.ach.prototype={
bOf(d){switch(d.a){case 0:return B.bW
case 1:return B.bA
case 2:return B.cU}},
bOg(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aVD(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
zS(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dX:B.c
u=A.m(12)
t=A.I((w?B.dZ:B.bR).j(0.85),B.q,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bW,p,p,p,18),B.av],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bn,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.v(A.a([q,B.at,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.aB,p,p,p,p,p,p,p,p,14,p,p,B.P,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.A(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cH,B.xn,p,p,1/0)},
ad5(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.js:B.iQ,s=A.m(16),r=A.I(v?B.dZ:B.bR,B.q,1)
return A.v(A.a([new A.C(D.ahE,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bS,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hjS(r,q),o=q.c,n=t.bOf(o),m=I.bAS(q.f),l=t.e.a,k=l?B.dX:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.aB,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.ki?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bq:B.bn,s,s,s,s,s,s,s,s,12,s,s,B.a5,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.q,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.hq(u,m,m==null?A.X(B.oy,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.eo,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.q,1)
v=A.av(A.p(s,A.d(t.bOg(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mi,s,s,s),s,s,s)
u=x.p
i=A.a([t.zS("Full name",i,B.mk)],u)
if(p>0)i.push(t.zS("Child order","#"+p,B.N0))
r=A.a([h,B.at,r,B.aQ,l,B.S,v,B.bx,t.ad5("Identity",i),B.ac,t.ad5("Life details",A.a([t.zS("Birth date",q.w,D.aji),t.zS("Birth place",q.x,B.ZM),t.zS("Date of death",q.y,D.alz),t.zS("Occupation",q.z,B.a_P)],u)),B.ac,t.ad5("Family links",A.a([t.zS("1. Parent",t.aVD(q.d),B.Fv),t.zS("2. Spouse",t.aVD(q.e),B.MT)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.ad5("Notes",A.a([t.zS("Notes",q,B.kL)],u))],u))
r.push(B.bx)
r.push(A.bJ(B.IS,new C.dlx(d),A.bk(B.aV,s,s,s,s,s,B.ch,s,new A.b7(A.m(14),B.Y),s,s,s)))
return A.eH(s,k,new A.cV(B.lw,A.cd(A.v(r,B.aj,s,B.e,B.Q,0,B.p),B.r,s,B.y,s,B.xs,s,s,B.ah),s),s,s,s,B.F4,B.d0,s,new A.b7(j,B.Y),s)}}
C.Jn.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bq:B.bn
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.xv,A.hp(A.aG(!1,B.a1,!0,A.m(8),A.aL(!1,A.m(8),!0,new A.a7(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ag),u,v.c,u,u),u)}}
C.aol.prototype={
eK(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a6().ac())
w=u.c
v=A.U(w).k("K<1,a4<n,@>>")
w=A.B(new A.K(w,new C.c6Y(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iW(w,new C.c6Z(),t,x.U))
return s}}
C.aom.prototype={
U(){return new C.aC6(A.a([],x.bF))},
gdd(){return this.c}}
C.aC6.prototype={
a_(){this.a1()
this.J8()},
J8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$J8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c71(t.a.c),$async$J8)
case 3:r=e
w=4
return A.b(C.Al(t.a.c),$async$J8)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qN(q,new C.dRL(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dRM(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$J8,v)},
y_(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
JR(d,e){return this.cAV(d,e)},
cAV(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$JR=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dRQ(q,e))
t=3
w=6
return A.b(d.$0(),$async$JR)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dRR(q))
$.eU.mj()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JR,v)},
WP(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p_(r,s.c,s.e),$async$WP)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JR(new C.dRI(t),"Preparing download\u2026"),$async$WP)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WP,v)},
WT(d){return this.bMg(d)},
bMg(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p_(r,s.c,s.e),$async$WT)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.JR(new C.dRJ(t,d),"Preparing file\u2026"),$async$WT)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WT,v)},
aeY(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aeY=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wT.c5().LC(B.Q0,B.tB,!0),$async$aeY)
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
case 6:u=A.Gd()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aeY,v)},
Xt(d){return this.bWy(d)},
bWy(d){var w=0,v=A.j(x.H),u=this
var $async$Xt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.JR(new C.dRK(u,d),"Restoring family trees\u2026"),$async$Xt)
case 2:return A.h(null,v)}})
return A.i($async$Xt,v)},
Xs(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Xs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.aeY(),$async$Xs)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Xt(s),$async$Xs)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xs,v)},
a1e(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1e=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p_(r,s.c,s.e),$async$a1e)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JR(new C.dRP(t),"Creating QR code\u2026"),$async$a1e)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1e,v)},
a0Q(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0Q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Cw()){t.y_("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).c8(A.e8(new C.dRN(),!0,null,x.N)),$async$a0Q)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Xt(r),$async$a0Q)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0Q,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.Ad:B.iN,m=o?D.aeU:B.aP,l=o?B.aK:B.bR,k=o?B.aP:B.aB,j=new C.d5e(n,m,l,k,o?B.bJ:B.bn)
l=A.aH(p,p,p,p,A.X(B.eA,k,p,p,p,20),p,p,p,new C.dRT(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eG(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.d4N(!0,B.jj,B.aS,B.aS,q.r?p:q.gcrV(),j,s,"Show restore QR"),1),B.av],u))}s=q.e
r=q.r?p:q.gcob()
t.push(A.E(C.d4N(!s,B.iW,B.b7,B.by,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.d4N(!1,B.hA,B.aV,B.bW,q.r?p:q.gbM9(),j,"Photos & books included","Download all trees"),1),B.av],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.d4N(!1,M.ya,B.aH,B.aM,q.r?p:q.gbWv(),j,s,"Upload backup file"),1))
l=A.a([new C.bd1(v,l,p),B.kt,new C.aby(j,"QR restore",p),B.S,t,B.d5,new C.aby(j,"Backup files",p),B.S,A.A(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kt,new C.aby(j,"One tree",p),B.S],u)
B.d.v(v,J.b6(q.d,new C.dRU(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cB(l,p,B.Ye,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aV.j(0.35),B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dk,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bn(!0,A.p(p,A.A(A.a([K.aN7,B.bf,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.AT,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c8(w,n,new A.an(B.W,p,B.aa,B.r,l,p),p,!1,!1,p,p)}}
C.d5e.prototype={}
C.bd1.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.k1,28)],x.V)
t=A.ao(p,A.X(B.tS,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.r,A.a([t,new A.C(B.a9,A.A(A.a([A.p(p,D.bNw,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.q,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oa,A.E(A.v(A.a([D.fbJ,B.O,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bV6,B.n),p,p,p,p,p,p,p,p)}}
C.aby.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bd_.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aS.j(0.4):m.c
k=A.I(k,B.q,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aS.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.I(t.j(0.35),B.q,1)
return A.aG(!1,B.a1,!0,q,A.aL(!1,o,!0,A.eA(A.dc(new A.C(E.XU,A.v(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qT,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bB,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cv,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)}}
C.bd4.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.q,1),q=B.aV.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,A.eA(new A.C(B.eP,A.A(A.a([A.p(v,D.bMK,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.q,1),p,v,v,B.n),v,v,v,v,B.qT,v,v,v),B.bf,A.E(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.X(B.hA,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)}}
C.Zz.prototype={
U(){return new C.aC5()},
gdd(){return this.c}}
C.aC5.prototype={
a_(){this.a1()
this.a8c()},
a8c(){var w=0,v=A.j(x.H),u=this,t
var $async$a8c=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b0n(u.a.c,B.Cu),$async$a8c)
case 2:t=e
if(u.c!=null)u.m(new C.dRD(u,t))
return A.h(null,v)}})
return A.i($async$a8c,v)},
agk(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$agk=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dRE(q))
t=4
p=A.h67(q.a.d,B.Cu)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.V(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.aqA(n.e,m,l,B.Cu,p,n.f),$async$agk)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dRF(q))
q.c.I(x.q).f.R(D.ePp)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.aa(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(B.a.e9(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dRG(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agk,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.j8:B.ps,n=p?B.i7:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eG(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fr7,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.pF(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.v(A.a([B.O,u,B.bx,t,B.O,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.bb,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bu,q,q,q,q,q,q,q,q,q,q,q,B.P,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcnU()
if(u)u=B.It
else u=A.X(r.e===!0?B.hz:B.ajh,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a7(1/0,q,A.ex(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ce,q,q,q),t,A.df(q,q,q,q,q,q,q,q,q,B.aV,q,B.fN,q,q,q,new A.aA(B.aV.j(0.55),1,B.q,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.ib,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.az:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.S)
w.push(new A.a7(1/0,q,A.bJ(B.zr,new C.dRH(d),A.bk(B.aV,q,q,q,q,B.fN,q,q,q,q,q,q)),q))
return A.c8(m,o,new A.C(B.a9,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.ZA.prototype={
U(){return new C.bib(A.yT(B.xd,B.ny,B.tX))}}
C.bib.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c8(A.eG(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fjp,w,w,w,1,w,!0),B.w,A.yS(this.d,B.bQ,new C.dRV(this,d)),w,!1,!1,w,w)}}
C.aXi.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Pv,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lx.prototype={}
C.a5p.prototype={
U(){return new C.bhS(null,null)}}
C.bhS.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.tq,v,1,v,w)
w.e=A.bj(v,B.pz,v,1,v,w)
w.a.toString
w.d.cH(0)
w.e.cH(0)},
br(d){var w,v,u=this
u.bF(d)
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
this.bt8()},
B(d){var w,v,u=this,t=B.d.dL(D.a2s,new C.dD4(u),new C.dD5())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.csj(A.c6(new A.h3(A.a([w,v],x.dS)),new C.dD6(u,t),null),!0)}}
C.bhR.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aZW(d,e)
break
case"house":p.lY(d,e,D.cYS)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.geb()
$.W()
t=A.M()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.af(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.m2(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.AA(d,e,12)
p.xD(d,e,B.l5,5,14)
break
case"grocery":p.cd1(d,e)
break
case"calculator":p.ccJ(d,e)
break
case"lumber":p.cd9(d,e)
break
case"kitchen":p.cd4(d,e)
break
case"landscape":p.lY(d,e,D.cZn)
s=new A.aO($.W().r,B.ap,null,null,A.a([],x.v))
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
w.r=B.f6.j(0.85).gp(0)
d.aP(s,w)
p.AA(d,e,8)
p.xD(d,e,B.iT,4,18)
break
case"plumbing":p.cdi(d,e)
break
case"electrical":p.lY(d,e,D.d8p)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.W()
u=A.M()
u.r=B.c.j(q*0.12).gp(0)
d.aX(new A.a9(0,0,0+e.a,0+e.b),u)
p.m2(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.m2(d,e,B.lB.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.AA(d,e,10)
break
case"store":p.cds(d,e)
break
case"paint_remodel":p.cdd(d,e)
break
case"roofing":p.cdk(d,e)
break
case"warehouse":p.cdz(d,e)
break
case"vehicles":p.cdx(d,e)
break
case"farm":p.ccW(d,e)
break
case"restaurant":p.cdj(d,e)
break
case"tools":p.cdv(d,e)
break
case"wallet":p.cdy(d,e)
break
case"concrete":p.ccP(d,e)
break
case"blueprint":p.ccH(d,e)
break
default:p.aZW(d,e)}},
lY(d,e,f){var w,v=new A.a9(0,0,0+e.a,0+e.b)
$.W()
w=A.M()
w.saq(new A.a8(B.ax,B.aC,B.x,f,null,null).av(0,v))
d.aX(v,w)},
m2(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.geb()/2-h
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
xD(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.geb()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.W()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
AA(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.W()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aZW(d,e){var w,v=this
v.lY(d,e,D.d79)
w=v.c
v.m2(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.m2(d,e,B.bK.j(0.45),-w*3.141592653589793*1.4,22)
v.bKs(d,e,B.hU,w)
v.xD(d,e,B.c.j(0.7),6,8)},
bKs(d,e,f,g){var w,v,u,t,s,r,q,p
$.W()
w=A.M()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c0(new A.a9(16,q,t,q+3)),p)
p.delete()}},
cd1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lY(d,e,D.cfy)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.W()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.cXd[B.o.F(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.m2(d,e,B.c.j(0.35),w,16)
j.xD(d,e,B.iT,5,12)},
ccJ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lY(d,e,D.cfF)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.geb()
$.W()
q=A.M()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.af(new A.u(t/2,s/2),r*(0.18+u*0.08),q)
p=A.i1(g,g,g,g,g,B.a4,B.cc,g,B.eh,B.ca)
for(o=0;o<6;++o){n=v+o*0.9
r=D.d_T[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saV(0,new A.ep(r,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eH()
p.a5(d,new A.u(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cfH[o]
l=B.k9.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saV(0,new A.ep(m,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eH()
p.a5(d,new A.u(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.m2(d,e,B.c.j(0.35),w*1.5,14)
h.m2(d,e,B.ez.j(0.55),-v*3.141592653589793*2,8)
h.m2(d,e,B.Ae.j(0.4),r*2.8,22)
h.xD(d,e,B.pi,8,10)
h.AA(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.W()
r=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cd9(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lY(d,e,A_.auW)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bA(new A.a9(20,q,u,q+10),B.hC)
$.W()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.h2,B.ol,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.er(p),n)
n.delete()}m.m2(d,e,B.h2.j(0.35),w,15)
m.AA(d,e,8)},
cd4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lY(d,e,D.cXI)
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
k.delete()}j.m2(d,e,B.bK.j(0.4),-w*3.141592653589793*2.2,11)
j.xD(d,e,B.qx,4,14)},
cdi(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lY(d,e,D.cNb)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.W()
n=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xD(d,e,B.or,6,12)
l.m2(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cds(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lY(d,e,D.ct_)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bA(new A.a9(q,14,q+u,22),B.ii)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.f7,B.bK,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.er(q),o)
o.delete()}n.m2(d,e,B.c.j(0.3),w,16)
n.AA(d,e,8)
n.xD(d,e,B.uS,5,13)},
cdd(d,e){var w,v,u,t,s,r,q,p,o
this.lY(d,e,D.cSR)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bA(new A.a9(q,p,q+8,p+(18+r*22)),B.hc)
$.W()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.io,B.dw,B.bK,B.es][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.er(p),o)
o.delete()}this.m2(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cdk(d,e){var w,v,u,t,s,r,q,p,o
this.lY(d,e,D.cQp)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xD(d,e,B.cp,7,11)},
cdz(d,e){var w,v,u,t,s,r,q,p,o,n
this.lY(d,e,D.cvD)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bA(new A.a9(p,o,p+(t-r*8),o+16),B.hC)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.cp,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.er(o),n)
n.delete()}this.m2(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cdx(d,e){var w,v,u,t,s,r,q,p,o
this.lY(d,e,D.dc9)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.bA(new A.a9(r,q,r+28,q+8),B.hC)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.er(q),o)
o.delete()}this.AA(d,e,6)},
ccW(d,e){var w,v,u,t,s,r,q,p,o,n
this.lY(d,e,D.cWm)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.W()
s=A.M()
s.r=B.lB.j(0.75).gp(0)
d.af(new A.u(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.hg.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.m2(d,e,B.lB.j(0.35),w,14)},
cdj(d,e){var w,v,u,t,s,r,q,p,o=this
o.lY(d,e,D.cYH)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cm(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.W()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c0(r),p)
p.delete()}o.xD(d,e,B.qx,5,16)
o.AA(d,e,7)},
cdv(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lY(d,e,D.d9O)
w=m.c
v=w*3.141592653589793
m.m2(d,e,B.ol.j(0.55),v*3,10)
m.m2(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.W()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.ol.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cdy(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lY(d,e,D.dcG)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bA(new A.a9(p,o,p+36,o+22),B.ii)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.iT,B.lB,q).gp(0)
n=p.H()
s.drawRRect(A.er(o),n)
n.delete()}m.AA(d,e,9)
m.m2(d,e,B.c.j(0.4),w*2.2,12)},
ccP(d,e){var w,v,u,t,s,r,q,p,o,n
this.lY(d,e,D.d2x)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bT(new A.u(v,u),34)
$.W()
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
ccH(d,e){var w,v,u,t,s,r,q,p
this.lY(d,e,D.cZE)
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
u.r=B.dw.j(0.45).gp(0)
d.aX(new A.a9(0,p,0+v,p+6),u)
this.m2(d,e,B.l5.j(0.45),-t*3.141592653589793*2,11)},
ar(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.arh.prototype={
Zv(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aOy(),$async$Zv)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a7F(s),$async$Zv)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$Zv,v)},
aeZ(d){return this.cfO(d)},
cfO(d){var w=0,v=A.j(x.H),u=this,t
var $async$aeZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.i4a(d),$async$aeZ)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$aeZ,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.js:B.iQ
w=x.p
v=A.a([C.aOX(!0,B.qp,1/0,B.pH,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c_(new A.bH(B.b0,t,t,new A.C(B.v4,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.P,t,t,!0,t,t,t,t,t,B.avQ,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b0,B.b6,B.x,u,t,t),B.n),B.bd))}v.push(A.ao(8,A.A(A.a([A.E(A.dp(D.bGA,D.f88,new C.cex(this,d),A.bk(B.aV,t,t,t,B.c,t,B.jw,t,t,t,t,B.c8)),1),B.ab,A.E(A.ex(D.bOK,D.fmq,this.gc6S(),A.df(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jw,t,t,D.aWW,t,t,t,B.c8)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fG(1.7777777777777777,A.aG(!1,B.a1,!0,B.qp,new A.an(B.W,t,B.b_,B.r,v,t),B.aq,s,0,t,t,t,t,t,B.ag),t)}}
C.aK1.prototype={
aQ(){this.aY()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdH())
w.b2$=null
w.a2()}}
C.aRS.prototype={}
C.aRR.prototype={}
C.aPT.prototype={}
C.Yd.prototype={
U(){return new C.axm()}}
C.axm.prototype={
a_(){var w,v,u=this
u.a1()
u.a.toString
w=new A.bb("",B.b3,B.aN)
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.ar(w,v)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
JI(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.I(x.q).f.R(D.ePU)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).O(new C.aRS(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.dX:B.c,k=A.m(20),j=A.p(n,D.bOp,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.aB,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.v(A.a([i,B.bB,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bn,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.bf,i,A.aH(n,n,n,n,A.X(B.cA,m?B.bq:B.bn,n,n,n,n),n,n,n,new C.cXX(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bn,n,n,n,n,n,n,n,n,12,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bn,n,n,n,n,n,n,n,n,11,n,n,B.cv,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.h6n(new C.cXY(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.aB,n,n,n,n,n,n,n,n,n,n,n,B.a5,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.js:B.iQ
r=A.m(12)
q=A.m(12)
p=m?B.dZ:B.bR
t=A.aM(n,B.T,!0,n,!0,B.r,n,A.aN(),u,n,n,n,n,n,2,A.br(n,new A.b4(4,r,B.dg),n,n,n,n,n,n,!0,new A.b4(4,q,new A.aA(p,1,B.q,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cXZ(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,S.Ix,n,n,n,n)
u=m?B.aP:B.aB
m=m?B.dZ:B.bR
return A.eH(n,l,new A.cV(B.lw,A.cd(A.v(A.a([j,B.aQ,i,B.at,w,B.O,v,B.aQ,t,B.bx,A.A(A.a([A.E(A.dW(B.de,new C.cY_(d),A.df(n,n,n,n,n,n,n,n,n,u,n,n,B.ch,n,new A.b7(A.m(12),B.Y),new A.aA(m,1,B.q,-1),n,n,n,n)),1),B.av,A.E(A.bJ(D.fmF,o.ga1y(),A.bk(B.aV,n,n,n,B.c,n,B.ch,n,new A.b7(A.m(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.r,n,B.y,n,B.AU,n,n,B.ah),n),n,n,n,X.AV,B.d0,n,new A.b7(k,B.Y),n)}}
C.Yc.prototype={
U(){return new C.axl()}}
C.axl.prototype={
a_(){this.a1()
var w=$.aw()
this.d!==$&&A.aP()
this.d=new A.ar(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
JI(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.I(x.q).f.R(D.eNB)
return}v=this.c
v.toString
A.a6(v,!1).O(new C.aRR(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.dX:B.c,n=A.m(20),m=A.p(q,D.bL0,B.f,q,q,new A.o(B.bW.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.v(A.a([l,B.bB,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bn,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.bf,l,A.aH(q,q,q,q,A.X(B.cA,p?B.bq:B.bn,q,q,q,q),q,q,q,new C.cXT(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aV.j(0.25),B.q,1)
u=A.X(B.aj3,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.av,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,12,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bC,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,q,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.js:B.iQ
t=A.m(12)
s=A.m(12)
r=p?B.dZ:B.bR
v=A.aM(q,B.T,!0,q,!0,B.r,q,A.aN(),w,q,q,q,q,q,2,A.br(q,new A.b4(4,t,B.dg),q,q,q,q,q,q,!0,new A.b4(4,s,new A.aA(r,1,B.q,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cXU(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.ku,q,q,q,q)
w=p?B.aP:B.aB
p=p?B.dZ:B.bR
return A.eH(q,o,new A.cV(B.lw,A.cd(A.v(A.a([m,B.aQ,l,B.aA,v,B.bx,A.A(A.a([A.E(A.dW(B.de,new C.cXV(d),A.df(q,q,q,q,q,q,q,q,q,w,q,q,B.ch,q,new A.b7(A.m(12),B.Y),new A.aA(p,1,B.q,-1),q,q,q,q)),1),B.av,A.E(A.bJ(D.fti,this.ga1y(),A.bk(B.bW,q,q,q,B.c,q,B.ch,q,new A.b7(A.m(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.AU,q,q,B.ah),q),q,q,q,X.AV,B.d0,q,new A.b7(n,B.Y),q)}}
C.XL.prototype={
U(){return new C.aw5()}}
C.aw5.prototype={
a_(){var w,v=this
v.a1()
w=$.aw()
v.d!==$&&A.aP()
v.d=new A.ar(B.as,w)
v.e!==$&&A.aP()
v.e=new A.ar(new A.bb("1",B.b3,B.aN),w)
v.f!==$&&A.aP()
v.f=new A.ar(B.as,w)
v.r!==$&&A.aP()
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
gJ3(){var w,v=this.e
v===$&&A.c()
w=A.d5(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gai9(){var w=this.f
w===$&&A.c()
w=A.d5(B.a.i(w.a.a))
return w==null?0:w},
gb1L(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aMZ(d){var w,v=B.k.D(this.gJ3()+d,0.25,999999),u=B.k.jU(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.aa(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aK(u,w,"")}t.saV(0,u)
this.m(new C.cvw())},
awx(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.js:B.iQ,s=A.m(14),r=A.m(14)
u=u?B.dZ:B.bR
return A.br(w,new A.b4(4,s,B.dg),w,B.bC,w,w,w,w,!0,new A.b4(4,r,new A.aA(u,1,B.q,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.m(14),B.a9v),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c6T(d,e,f){return this.awx(d,e,f,null)},
JI(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gai9()<=0){s.c.I(x.q).f.R(D.eRL)
return}r=s.c
r.toString
v=s.gJ3()
u=s.gai9()
t=s.gb1L()
A.a6(r,!1).O(new C.aPT(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tB(n),l=n?B.dX:B.c,k=A.m(24),j=x.O,i=A.a([B.aV.j(0.22),B.bW.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bEy,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.q,1),h,o,new A.a8(B.a3,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.v(A.a([h,B.bB,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.cv,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.bf,h,A.aH(o,o,o,o,A.X(B.cA,n?B.bq:B.bn,o,o,o,o),o,o,o,new C.cvC(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,o,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.T,!0,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.awx(m,"Item name (optional)","Lumber, paint, labor\u2026",B.N6),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,S.Ix,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.js:B.iQ
t=A.m(14)
s=A.I(n?B.dZ:B.bR,B.q,1)
r=A.aH(o,o,o,o,A.X(B.y3,n?B.aP:B.aB,o,o,o,20),o,o,o,new C.cvD(p),o,o,o,o,o,B.c8)
q=p.e
q===$&&A.c()
q=A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),q,o,o,o,o,o,2,D.bQg,B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dU,o,o,o,1,o,o,!1,"\u2022",o,new C.cvE(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a7(52,o,q,o),A.aH(o,o,o,o,A.X(B.hy,n?B.aP:B.aB,o,o,o,20),o,o,o,new C.cvF(p),o,o,o,o,o,B.c8)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,16,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.av,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),t,o,o,o,o,o,2,p.awx(m,"Amount","0.00",B.hY),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dU,o,o,o,1,o,o,!1,"\u2022",o,new C.cvG(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.B(new A.K(D.cTi,new C.cvH(p,m),t),t.k("ak.E"))
i=A.a([i,B.bx,v,B.aA,h,B.O,s,B.ac,A.bY(B.bz,u,B.br,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.S,A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.c6T(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cvI(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.ku,o,o,o,o)],w))}i.push(B.aQ)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bW.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,11,o,o,B.P,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJ3()===B.k.jU(p.gJ3())?B.k.N(p.gJ3()):p.gJ3()
s=p.gb1L()
r=A.An(p.gai9())
i.push(A.p(o,A.A(A.a([A.E(A.v(A.a([u,B.at,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bBE(p.gJ3()*p.gai9(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a3,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.je,o,o,o))
i.push(B.bx)
j=A.m(14)
h=n?B.dZ:B.bR
h=A.df(o,o,o,o,o,o,o,o,o,o,o,o,B.ch,o,new A.b7(j,B.Y),new A.aA(h,1,B.q,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dW(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,o,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cvJ(d),h),1),B.av,A.E(A.dp(D.amC,D.fpo,p.ga1y(),A.bk(B.aV,o,o,0,B.c,o,B.ch,o,new A.b7(A.m(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eH(o,l,new A.cV(W.a9S,A.cd(A.v(i,B.aj,o,B.e,B.Q,0,B.p),B.r,o,B.y,o,Ac.qS,o,o,B.ah),o),o,o,o,B.LN,B.d0,o,new A.b7(k,B.Y),o)}}
C.a0h.prototype={
U(){return new C.buc()}}
C.buc.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.ar(new A.bb(w,B.b3,B.aN),v)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.dX:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.aB,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.aB,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.js:B.iQ
v=A.aM(s,B.T,!0,s,!0,B.r,s,A.aN(),w,s,s,s,s,s,2,A.br(s,new A.b4(4,A.m(12),B.dg),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.f6x(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.am,s,s,s,s)
u=A.E(A.dW(B.de,new C.f6y(d),s),1)
r=A.bk(B.bW,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eH(s,q,new A.C(B.AU,A.v(A.a([o,B.aA,v,B.aQ,A.A(A.a([u,B.av,A.E(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.f6z(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d0,s,new A.b7(p,B.Y),s)}}
C.aaB.prototype={
a4(){return"WorksheetFrameStyle."+this.b}}
C.F8.prototype={
U(){return new C.bua(null,null)}}
C.bua.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.bns,null,1,null,v)
w.cH(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bvt()},
gbwU(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bW,B.aZ],x.O)
case 2:return A.a([B.bt,B.aV,B.aZ],x.O)
case 3:return A.a([B.aS,B.c9,B.jO],x.O)
case 4:return A.a([B.hv,B.bW,B.f8],x.O)
case 0:return A.a([B.aV,B.bW,B.aZ],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.ev(A.c6(v,new C.f6v(this,new C.tB(w.ax.a===B.I)),null),null)}}
C.avZ.prototype={
U(){return new C.bub(null,null)}}
C.bub.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.n0,null,1,null,v)
w.cH(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bvu()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.f6w(this),null)}}
C.bu9.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bA(new A.a9(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aW(w,w))
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
d.aP(u,w)
w=A.wR(u)
t=A.a([],x.f5)
w=new A.vo(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.ba(A.jS('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.H0(w,r)
w.jl()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aQj(d,q,r,o,0,0.2,4.2,0.92)
p.aQj(d,q,r,s,0.52,0.11,3.2,0.58)}},
aQj(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hrO(e.a.a,e,t,t+f*i,!0),r=A.bA0(s.gbK().a.getBounds())
$.W()
w=A.M()
w.b=B.ae
w.c=j
w.d=B.bO
w.f=!0
v=this.f
u=k*this.e
w.saq(new A.a8(B.a3,B.a7,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.GJ,null).av(0,r))
d.aP(s,w)},
ar(d){return d.b!==this.b||d.d!==this.d}}
C.aMa.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
C.aMb.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
C.tB.prototype={}
C.arg.prototype={
U(){return new C.aDC()},
gdX(){return this.c}}
C.aDC.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.afP()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.KK(w,v)
this.a2()},
afP(){var w=0,v=A.j(x.H),u=this,t,s
var $async$afP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bA8(t.c,t.d.a),$async$afP)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eGq(u,s))
return A.h(null,v)}})
return A.i($async$afP,v)},
Ps(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Ps=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eGh(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.KK(t,s),$async$Ps)
case 2:if(u.c!=null)u.m(new C.eGi(u))
return A.h(null,v)}})
return A.i($async$Ps,v)},
PY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.eGo(t,new C.tB(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$PY)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a7F(q),$async$PY)
case 6:case 5:t.m(new C.eGp(t,r))
w=7
return A.b(t.Ps(),$async$PY)
case 7:case 1:return A.h(u,v)}})
return A.i($async$PY,v)},
V4(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$V4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i3W(r),$async$V4)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eGc(t,new C.qR(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Ps(),$async$V4)
case 4:case 1:return A.h(u,v)}})
return A.i($async$V4,v)},
cbU(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hjP(t,new C.eGg(u),w,v)},
a9Y(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bP(new A.aA(v,2.5,B.q,-1),B.Y,B.Y,new A.aA(B.c.j(d?0.85:0.55),2.5,B.q,-1)),D.aWI,w,w,B.n),w,22,w,w,w,w,w,22)},
a93(d){return this.bII(d)},
bII(d){var w=0,v=A.j(x.H),u=this
var $async$a93=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eGf(u,d))
w=2
return A.b(u.Ps(),$async$a93)
case 2:return A.h(null,v)}})
return A.i($async$a93,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.bX:B.iN,d=A.m(8),a0=A.X(Q.Zu,f?B.bq:B.bn,g,g,g,16),a1=x.p
a0=A.aL(!1,d,!0,new A.C(B.Fb,A.A(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bn,g,g,g,g,g,g,g,g,g,g,g,B.a5,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eGr(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b_,B.r,A.a([A.bw(A.m(22),C.aOX(!0,A.m(22),1/0,B.pH,g,d,1/0),B.aq),A.ao(10,A.dp(D.bJ5,D.frB,h.gb_I(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eT,22),new A.ac(-4,B.G,B.bW.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.q,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bw(s,new A.an(B.W,g,B.b_,B.r,A.a([C.aOX(!0,A.m(16),1/0,B.My,g,r.c,1/0),A.c_(g,new A.o(g,g,g,g,g,new A.a8(B.b0,B.b6,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bd),A.ao(g,h.a9Y(!0),g,g,8,g,8,g),A.ao(g,A.ct3(h.a9Y(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.ct3(h.a9Y(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.ct3(h.a9Y(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dp(D.bF6,D.flr,h.gb_I(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bRH,B.n),g,g,g,g,B.lJ,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aB,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b62,B.nE,B.h4],u):A.a([B.aZ,B.aV,B.bW],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eT,24)],t)
r=A.m(22)
p=A.ao(g,A.X(B.jz,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.q,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h5,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aA,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.an,C.bBE(h.d.gwE(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.O,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cv,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.hh.j(0.75),B.q,1.6)
t=A.a([new A.ac(0,B.G,B.aS.j(0.28),B.cJ,14)],t)
j=B.aS.j(0.22)
i=A.m(10)
u=A.p(g,A.bw(r,new A.an(B.W,g,B.aa,B.r,A.a([p,new A.C(D.bs1,A.A(A.a([o,B.av,A.aG(!1,B.a1,!0,g,A.aL(!1,n,!0,A.eA(new A.C(Ah.AO,A.v(A.a([A.p(g,D.amb,B.f,g,g,new A.o(j,g,A.I(B.aS.j(0.5),B.q,1),i,g,g,B.n),g,g,g,g,B.cm,g,g,g),B.h_,D.faP],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcbT(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ag)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.ax,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fG(1.7777777777777777,d,g),B.aQ,w,B.O,u,B.bx,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aB,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b5,A.dp(Ak.a0a,D.f8L,h.gbxm(),A.bk(B.aV,g,g,g,B.c,g,B.ix,g,new A.b7(A.m(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.dX:B.c
v=A.m(14)
u=A.I(f?B.dZ:B.bR,B.q,1)
t=A.X(B.ZP,f?B.bq:B.bn,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aB,g,g,g,g,g,g,g,g,g,g,g,B.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.S,s,B.an,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bn,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.tz,g,g,1/0))}else B.d.v(d,new A.K(w,new C.eGs(h,new C.tB(f)),A.U(w).k("K<1,r>")))
if(h.e)d.push(new A.C(B.AH,A.av(A.mG(g,f?B.bq:B.bn,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c8(g,e,A.bn(!0,A.v(A.a([new A.C(B.AM,a0,g),A.E(A.cd(A.v(d,B.F,g,B.e,B.j,0,B.p),B.r,g,B.y,g,E.xt,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bAX(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dX:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.aZt,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.X(s?B.hL:B.h8,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bH
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aP:B.aB,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcQV()
v=A.An(d.d)
B.d.v(t,A.a([B.at,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bq:B.bn,u,u,u,u,u,u,u,u,12,u,u,B.a5,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.bb,B.Q,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bW.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bBE(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a3,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.h6,u,u,u)
w=x.p
return A.p(u,A.bw(n,new A.DF(A.A(A.a([m,A.E(new A.C(B.age,A.A(A.a([l,B.bf,t,B.ab,k,A.aH(u,u,u,u,A.X(B.cA,(r?B.bq:B.bn).j(0.75),u,u,u,20),u,u,u,new C.eGd(this,d),u,u,u,u,u,B.c8)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.aj,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.aYl,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.dc,u,u,u,u)}}
C.acC.prototype={
E2(d){return this.bK4(d)},
bK4(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$E2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.p_(d,o,!1),$async$E2)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
w=4
return A.b(A.bN(Ab.AF,null,x.H),$async$E2)
case 4:s=t.d
w=5
return A.b(C.fCI(!0,o,s),$async$E2)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.G2(r,"ngmy_project_"+A.aK(s.b,q,"_"),!1),$async$E2)
case 6:p=f
w=7
return A.b(A.oZ(o,!1),$async$E2)
case 7:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$E2,v)},
Zw(d){return this.crW(d)},
crW(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Zw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.p_(d,s,!1),$async$Zw)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
A.hv(d,new C.ara(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oZ(s,!1),$async$Zw)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zw,v)},
Pt(d){return this.co6(d)},
co6(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Pt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(A.hv(d,D.aFb,!0,"NgmyWorksheetProjectScan",x.N),$async$Pt)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bBF(s),$async$Pt)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.R(D.eQU)
w=1
break}q=C.fXv(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dP(p,x.H),$async$Pt)
case 5:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Pt,v)},
Zx(d){return this.czR(d)},
czR(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Zx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(C.bBc(),$async$Zx)
case 3:s=f
if(s==null){w=1
break}r=C.fXv(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dP(q,x.H),$async$Zx)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Zx,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tB(u),s=w.d.d.length,r=u?B.dX:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.k1,36)],x.V),o=x.p
return A.bn(!0,new A.C(B.vc,A.p(v,A.v(A.a([w.cqx(d,t,s),new A.C(D.brq,A.v(A.a([w.b2F(t,"QR restore"),B.S,A.A(A.a([w.aYG(t,!0,B.jj,B.aS,B.aS,new C.eGu(w,d),"Show to scan","QR code"),B.av,w.awy(t,B.iW,B.b7,B.by,new C.eGv(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d5,w.b2F(t,"Backup files"),B.S,A.A(A.a([w.awy(t,B.hA,B.aV,B.bW,new C.eGw(w,d),"Full copy","Backup file"),B.av,w.awy(t,M.ya,B.aH,B.aM,new C.eGx(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
cqx(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eX,B.d_,B.fu],k):A.a([B.aZ,B.aV,B.bW],k)
w=A.ao(l,A.X(B.tS,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kH,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.q,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aOX(!0,A.m(13),64,D.bAo,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aPD,l,l,l)
r=C.bBE(r.gwE(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.q,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.r,A.a([w,new A.C(D.brO,A.v(A.a([v,A.A(A.a([s,B.eB,A.E(A.v(A.a([u,B.at,t,B.O,A.A(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fK,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.X(B.cA,B.c.j(0.85),l,l,l,l),l,l,l,new C.eGt(d),l,l,l,A.nw(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aMX,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.ax,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b2F(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bq:B.bn,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aYG(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.aeU:B.aP
if(e)w=B.aS.j(o?0.45:0.35)
else{w=o?B.dZ:B.bR
w=w.j(o?0.8:1)}w=A.I(w,B.q,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aS.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.q,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qT,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.aB,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aG(!1,B.a1,!0,r,A.aL(!1,q,!0,A.eA(new A.C(E.XU,A.v(A.a([t,B.ac,u,B.bB,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bq:B.bn,r,r,r,r,r,r,r,r,11,r,r,B.cv,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
awy(d,e,f,g,h,i,j){return this.aYG(d,!1,e,f,g,h,i,j)}}
C.ara.prototype={
U(){return new C.bjy()}}
C.bjy.prototype={
a_(){this.a1()
this.adJ()},
adJ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$adJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bBG(p.c,p.d),$async$adJ)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eG7(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eG8(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adJ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.Ad:B.iN,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eA,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eG9(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zf],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eX,B.d_,B.fu],s):A.a([B.aZ,B.aV,B.bW],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eT,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.ds,B.L,h,h)
p=C.bBE(p.gwE(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.an,A.A(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fK,h,h,h)],u),B.m,h,B.bb,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.ax,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.Yd,h,h,1/0)
t=g?D.bfd:B.c
q=A.m(24)
p=A.I(w?B.aS.j(0.4):B.aV.j(0.3),B.q,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dk,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a6H,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.e47)
else{m=A.m(20)
l=A.I(B.aL,B.q,1)
o.push(A.p(h,A.pF(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bV,h,h,h))}}o.push(B.aQ)
n=w?B.aS:B.aV
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aS:B.aV).j(0.35),B.q,1)
k=w?B.MQ:B.Nm
k=A.X(k,w?B.aS:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.av,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a5,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.ix,h,h,h))
return A.c8(h,f,A.bn(!0,A.v(A.a([new A.C(A6.M_,e,h),A.E(A.cd(A.v(A.a([s,B.aQ,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.ty,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.r,h,B.y,h,E.ahp,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.arf.prototype={
U(){return new C.aDB(A.yT(B.Lf,B.ny,B.tX))}}
C.aDB.prototype={
q(){this.d.q()
this.a2()},
aL_(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iM(w,d)},
c7J(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.i1R(t)
if(s!=null){this.aL_(s)
return}r=C.haV(t)
if(r!=null)q=A.cU(r,p,0)
else q=!1
if(q){this.aL_(B.a.i(B.a.b0(r,B.a.cJ(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eG(A.a([A.aH(t,t,t,t,A.X(u.f?B.qZ:A2.MW,t,t,t,t,t),t,t,t,new C.eGb(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Ad,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.flk,t,t,t,1,t,!0),q=A.yS(u.d,B.bQ,u.gc7I()),p=A.m(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.q,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c8(r,B.w,new A.an(B.W,t,B.b_,B.r,A.a([q,p,A.ao(32,A.p(t,D.fk8,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.q,1),v,t,t,B.n),t,t,t,t,B.je,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aIn.prototype={
a4(){return"_WorksheetTab."+this.b}}
C.Nz.prototype={
U(){return new C.aDD(D.a8N,A.a([],x.D))},
bp(){return this.r.$0()},
gdX(){return this.c}}
C.aDD.prototype={
gcxP(){return J.bCP(this.e,0,new C.eGU())},
a_(){this.a1()
$.aU.c2$.push(this)
this.vo()},
q(){$.aU.hE(this)
this.a2()},
iT(d){if(d===B.fs)this.vo()},
vo(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vo=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Cv(q.a.c).cM(0,B.jU),$async$vo)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eGQ(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eGR(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vo,v)},
Hv(d){return this.bGT(d)},
bGS(){return this.Hv(null)},
bGT(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Hv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i3Y(l,d),$async$Hv)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lh(l,r,q,D.d2K,new A.S(Date.now(),0,!1))
w=4
return A.b(C.KK(t.a.c,p),$async$Hv)
case 4:o=f
w=5
return A.b(t.vo(),$async$Hv)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.R(D.eO4)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gS(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.R(D.ePO)
else n.I(q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.E6(m)
case 1:return A.h(u,v)}})
return A.i($async$Hv,v)},
E6(d){return this.cbF(d)},
cbF(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$E6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hv(s,new C.arg(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$E6)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.KK(u.a.c,t),$async$E6)
case 5:case 4:w=6
return A.b(u.vo(),$async$E6)
case 6:return A.h(null,v)}})
return A.i($async$E6,v)},
vb(d){return this.bWA(d)},
bWA(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bBc(),$async$vb)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hv(r,D.aFb,!0,"NgmyWorksheetProjectScan",x.N),$async$vb)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bBF(q),$async$vb)
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
break}p=C.fXv(s)
w=15
return A.b(C.KK(t.a.c,p),$async$vb)
case 15:o=f
w=16
return A.b(t.vo(),$async$vb)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.R(D.ePT)
w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.E6(p)
case 1:return A.h(u,v)}})
return A.i($async$vb,v)},
Nj(d){return this.bFy(d)},
bFy(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Nj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ca(null,null,!0,null,new C.eGB(d),s,null,!0,!0,x.y),$async$Nj)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oA(t.a.c,A.a([],x.D)),$async$Nj)
case 6:w=7
return A.b(t.vo(),$async$Nj)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eO9)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Nj,v)},
cbS(d){var w=this.c
w.toString
A.bV(B.K,null,new C.eGK(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b3g(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.js
else w=B.c
v=A.m(16)
u=A.I(p?B.dZ:B.bR,B.q,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bS,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.aB,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(r,A.v(A.a([s,B.ac,t,B.bB,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bq:B.bn,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vb,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
a_1(d,e){return this.cbG(d,e)},
cbG(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(B.K,null,new C.eGF(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a_1)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hjP(r,new C.eGG(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Nl(d,e),$async$a_1)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_1,v)},
b0j(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bS,u,u,u)
if(d)t=B.ay
else t=h.a?B.aP:B.aB
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.v(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bq:B.bn,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aG(!1,B.a1,!0,u,A.aL(!1,u,!0,new A.C(B.AT,A.A(A.a([s,B.bf,t,A.X(B.ex,w?B.bq:B.bn,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag)},
ciw(d,e,f,g,h,i){return this.b0j(!1,d,e,f,g,h,i)},
Nl(d,e){return this.bFI(d,e)},
bFI(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Nl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.l1(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Nl)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bzV(t.a.c,d.a),$async$Nl)
case 6:w=7
return A.b(t.vo(),$async$Nl)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Nl,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tB(o),m=o?B.bX:B.iN
if(q.f)o=D.b41
else{w=q.bA9(n)
v=q.bVG(n)
u=q.gbxg()
if(o)t=B.js
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aQ,new C.F8(A.p(p,A.A(A.a([q.aA1(N.Mx,"Projects",n,D.a8N),q.aA1(B.vn,"Cashier",n,D.aUa),q.aA1(B.Fv,"Family Tree",n,D.fUh)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.eo,0.95,u,p),B.bx],r)
w=q.d
if(w===D.a8N){w=J.ad(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.aB,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b5,new C.avZ(q.gaP9(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aA,q.ciy(n)],r))}else{o=q.a
if(w===D.aUa)u.push(new C.ani(o.c,n,p))
else{w=q.r
u.push(new C.aoo(o.c,o.d,o.e,o.f,new C.eGX(q),new C.eGY(q),new A.cx(w,x.b4)))}}o=A.cd(A.v(u,B.F,p,B.e,B.j,0,B.p),B.r,p,B.y,p,Ad.LT,p,p,B.ah)}return A.c8(p,m,A.bn(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bA9(d){var w=null,v=A.m(8),u=d.a,t=A.X(Q.Zu,u?B.bq:B.bn,w,w,w,16)
return A.aL(!1,v,!0,new A.C(B.kI,A.A(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bq:B.bn,w,w,w,w,w,w,w,w,14,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eGy(this),w,w,w,w,w,w,w)},
gbxg(){switch(this.d.a){case 0:return D.a84
case 1:return D.fL2
case 2:return D.a85}},
bVG(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cw,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.bKR,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bf,D.bw5,A.aG(!1,B.a1,!0,w,A.aL(!1,A.m(12),!0,A.p(w,D.bIp,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eGC(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.m(12)
return new C.F8(A.p(w,A.v(A.a([new A.C(O.LL,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.d(A.An(this.gcxP()),w,w,w,w,w,w,D.f5d,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.va,B.je,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.fL1,w)},
aA1(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aV:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.q,2):A.I(B.K,B.q,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bq:B.bn
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bq:B.bn
return A.E(A.aG(!1,B.a1,!0,u,A.aL(!1,s,!0,A.dh(u,A.A(A.a([w,B.eb,new A.dq(1,B.cl,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.bb,B.j,0,u,u),u,u,B.cs,new A.o(r,u,p,q,o,u,B.n),B.iv,u,u,u,B.LW,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eGT(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),1)},
ciy(d){var w,v,u,t,s,r,q=this,p=null
if(J.cl(q.e)){w=d.a
v=w?B.dX:B.c
u=A.m(15)
t=A.p(p,D.bIu,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eT,28)],x.V),D.bU7,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.aB,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.F8(A.p(p,A.v(A.a([t,B.d5,s,B.O,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bn,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.e1,A.A(A.a([A.E(q.aQE(B.iW,"Scan QR",new C.eGN(q),d),1),B.av,A.E(q.aQE(M.ya,"Upload file",new C.eGO(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aA,A.bJ(D.fv8,q.gaP9(),A.bk(B.aV,p,p,p,B.c,B.fN,p,p,new A.b7(A.m(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bsS,1.05,D.a84,p)}w=J.b6(q.e,new C.eGP(q,d),x.l)
w=A.B(w,w.$ti.k("ak.E"))
return new C.F8(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bS,1,D.a84,p)},
aQE(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aV.j(0.45),B.q,1)
return A.aG(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(w,A.v(A.a([A.X(d,B.aZ,w,w,w,26),B.O,A.d(e,w,w,w,w,w,w,D.f3F,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ag6,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)},
cix(d,e){var w,v,u=null,t=e.a,s=t?B.dX:B.c,r=A.m(14),q=A.I(t?B.dZ:B.bR,B.q,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.ek,10)],x.V),o=A.m(14),n=t?B.bq:B.bn
n=A.bw(B.UI,new A.fG(1.7777777777777777,C.aOX(!0,B.ft,1/0,N.Mx,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.aB,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.d(""+d.d.length+" budget items \xb7 "+A.An(d.gwE()),u,u,u,u,u,u,D.f1P,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aG(!1,B.a1,!0,u,A.aL(!1,o,!0,A.v(A.a([n,new A.C(B.bC,A.A(A.a([v,A.aH(u,u,u,u,A.X(Ae.Na,t?B.bq:B.bn,u,u,u,u),u,u,u,new C.eGL(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eGM(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e4,u,u,u,1/0)}}
C.bvY.prototype={}
C.qR.prototype={
ag(){var w=this,v=w.c,u=w.d
return A.F(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcQV(){var w,v,u,t,s=this.c
if(s===B.k.jU(s))w=B.o.u(B.k.N(s))
else{v=B.k.aa(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aK(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lh.prototype={
gwE(){return B.d.cI(this.d,0,new C.cuY())},
ag(){var w=this,v=w.d,u=A.U(v).k("K<1,a4<n,@>>")
v=A.B(new A.K(v,new C.cuX(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
bah(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lh(w.a,w.b,v,u,w.e)},
b9Z(d){return this.bah(d,null)},
Sa(d){return this.bah(null,d)}}
C.H9.prototype={
a4(){return"FamilyGender."+this.b}}
C.hV.prototype={
ag(){var w=this
return A.F(["id",w.a,"name",w.b,"gender",C.hfH(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aCG(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hV(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ajG.prototype={
a4(){return"FamilyTreeAccessRole."+this.b}}
C.kA.prototype={
ganC(){var w=this.f
return new A.a2(w,new C.bMh(),A.U(w).k("a2<1>")).gM(0)},
ag(){var w=this,v=w.f,u=A.U(v).k("K<1,a4<n,@>>")
v=A.B(new A.K(v,new C.bMg(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hVj(w.y)],x.N,x.z)},
yj(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kA(w.a,v,u,t,s,r,w.r,q,p,o)},
bag(d,e){var w=null
return this.yj(w,w,d,e,w,w,w,w)},
cGC(d,e,f,g,h,i,j){return this.yj(d,e,f,g,h,i,j,null)},
aCL(d,e){var w=null
return this.yj(w,w,w,d,w,w,e,w)},
cF6(d){var w=null
return this.yj(w,w,w,w,w,w,d,w)},
cFu(d){var w=null
return this.yj(w,w,w,w,w,w,w,d)},
aCx(d){var w=null
return this.yj(w,w,w,w,d,w,w,w)},
cG8(d,e,f){var w=null
return this.yj(w,d,w,e,w,w,f,w)},
cEU(d){var w=null
return this.yj(w,w,d,w,w,w,w,w)},
cFH(d,e){var w=null
return this.yj(d,w,w,w,w,e,w,w)}}
C.cuZ.prototype={
a4(){return"WrapAlignment."+this.b}}
C.cv_.prototype={
a4(){return"WrapCrossAlignment."+this.b}}
C.aFF.prototype={}
C.b7d.prototype={
bx(d){this.a=d.a
this.b=d.b},
cT(d){var w=new C.b7d()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b7c.prototype={
gvY(){return!0},
gFB(){return this.z.b<this.b.length},
aSf(d){switch(0){case 0:return d.a.c}},
aRX(d){switch(0){case 0:return d.a.d}},
bP9(d,e){switch(0){case 0:return new A.hI(d,e)}},
bOx(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h0(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iB(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.GU(b4)
switch(0){case 0:v=b5.b
u=new A.kx(0,v,0,1/0)
t=w===B.SH
break}s=A.a([],x.gZ)
r=A.T(x.cM,x.S)
for(b3=b1.z,q=B.d.fK(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.L)(q),++h){g=q[h]
g.h0(b4,u,!0)
f=b1.aSf(g)
f.toString
e=b1.aRX(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aFF(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aFF(k,j,i))}d=s.length
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
for(q=B.d.fK(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.L)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aSf(g)
e=b1.aRX(g)
e.toString
a9=b1.bOx(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bP9(a6,a3+a9)
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
w.i1()
v=A.dm()
u=r.a
v.e2(u.a,u.b,0,1)
w.oH(0,v)
for(u=r.z,u=B.d.dq(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].fX(d)
w.n8(0)},
G7(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
i1(){return this.z}}
C.bud.prototype={}
var z=a.updateTypes(["ay<~>()","R(hV)","R(kA)","~()","R(n8)","a4<n,@>(kA)","H(kA,kA)","n(hV)","kA(a4<@,@>)","R(lh)","R(u3)","n8(a4<@,@>)","u3()","H(lh,lh)","hV(a4<@,@>)","a4<n,@>(hV)","R(qR)","ay<~>(lh)","eS<n?>(hV)","H(hV,hV)","n?(hV)","a4<n,@>(n8)","Ze(Y)","n(n)","ach(Y)","r(ob)","H(n8,n8)","hV(hV)","cL(bv<n,Fk>)","cL(Jz)","~(hV)","H?(hV)","hV()","ai<hV>()","R(u2)","R(Jz)","C(hV)","~(H9)","R(adP)","r(H9,n,a0)","YD(Y)","bv<n,ai<a4<n,@>>>(n,ai<n8>)","~(H)","+count,id,name(H,n,n)(kA)","kA(kA)","Zz(Y)","ZA(Y)","R(lx)","lx()","n(kA)","a0h(Y)","Yd(Y)","Yc(Y)","YB(Y)","YF(Y)","r(qR)","acC(Y)","~(lV)","ay<~>([n?])","N(N,lh)","r(lh)","N(N,qR)","a4<n,@>(qR)","qR(a4<@,@>)","Yb(Y)","S4(Y)","cq(H8)","lh(a4<@,@>)","u2()","n(lh)","a4<n,@>(lh)","n(S)","H(hV)","kA(a4<n,@>)","XL(Y)"])
C.fvm.prototype={
$1(d){return d.a+" "+d.b},
$S:118}
C.fvl.prototype={
bjo(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qJ(s,d,B.hl,E.ES),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.V(r!=null&&A.Ky(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bjo(d)},
$S:321}
C.fvn.prototype={
$1(d){return d.b},
$S:118}
C.fEs.prototype={
$1(d){var w=null
return A.eH(w,B.K,new F.OT(this.a,this.b,w),w,w,0,B.XV,B.d0,w,w,w)},
$S:46}
C.fkB.prototype={
$1(d){return d!=null},
$S:214}
C.fkC.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:214}
C.fkH.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:173}
C.ft5.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fa(d,w,w,w,A.h2(w,B.ro,w,w,w,w,w,w,w,B.dr,w,w,10.5,w,B.ej,w,!0,w,w,w,w),w),u=f?B.ej:B.vi
return new A.nH(D.bow,A.a8U(A.a([new A.fO(130,w,v),new A.yB(1,B.Fo,A.fa(e,w,w,w,A.h2(w,g==null?D.e6p:g,w,w,w,w,w,w,w,B.dr,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.x9,B.lm))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1902}
C.ft4.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vg(999)
f=A.wK(A.ls(h,A.fa("Cashier",h,h,h,A.h2(h,D.z1,h,h,h,h,h,h,h,B.dr,h,h,10,h,B.ej,h,!0,h,h,h,h),h),h,new A.ky(D.e6g,h,f,B.hE,h),h,h,D.bp_,h))
w=A.wK(A.fa("Debt receipt",h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.dr,h,h,22,h,B.ej,h,!0,h,h,h,h),h))
v=A.wK(A.fa(C.wv(new A.S(Date.now(),0,!1),!0),h,h,h,D.a6M,h))
u=A.vg(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fa(s,h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.dr,h,h,14,h,B.ej,h,!0,h,h,h,h),h)
r=A.fa("Person who owes",h,h,h,D.a6M,h)
q=A.vg(10)
p=x.C
u=A.ls(h,A.yw(A.a([s,new A.fO(h,2,h),r,new A.fO(h,10,h),A.ls(h,A.yw(A.a([A.fa("Amount owed",h,h,h,D.a6M,h),new A.fO(h,2,h),A.fa(A.An(t.c),h,h,h,A.h2(h,D.z1,h,h,h,h,h,h,h,B.dr,h,h,20,h,B.ej,h,!0,h,h,h,h),h)],p),B.qL,B.lm),h,new A.ky(B.oT,h,q,B.hE,h),h,h,D.boc,1/0)],p),B.qL,B.lm),h,new A.ky(E.aGr,h,u,B.hE,h),h,h,D.bq_,1/0)
q=new A.nq(D.e6j,0.9,B.kA)
r=A.vg(12)
s=i.c
o=s.$2("Original due",C.wv(t.r,!1))
n=s.$2("Current due",C.wv(t.f,!1))
m=i.d
l=new A.nq(m,1.1,B.kA)
k=A.vg(8)
j=i.a
k=A.a([o,n,new A.fO(h,6,h),A.ls(h,A.wK(A.fa(t.gaJv(),h,h,h,A.h2(h,m,h,h,h,h,h,h,h,B.dr,h,h,11,h,B.ej,h,!0,0.5,h,h,h),h)),h,new A.ky(h,new A.pq(l,l,l,l),k,B.hE,h),h,h,D.bp7,1/0),new A.fO(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.z1))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.z1))
else{n=A.fa("Missed days ("+n+")",h,h,h,A.h2(h,B.ro,h,h,h,h,h,h,h,B.dr,h,h,10.5,h,B.ej,h,!0,h,h,h,h),h)
m=A.U(o).k("K<1,RE>")
o=A.B(new A.K(o,new C.ft3(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fO(h,4,h),n,new A.fO(h,6,h),new C.b7c(5,5,new C.b7d(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fO(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fO(h,8,h),w,new A.fO(h,3,h),v,new A.fO(h,16,h),u,new A.fO(h,10,h),A.ls(h,A.yw(k,B.x9,B.lm),h,new A.ky(h,new A.pq(q,q,q,q),r,B.hE,h),h,h,B.agi,1/0)],p)
w=j.a
if(w!=null){v=new A.nq(B.HS,1,B.kA)
B.d.v(f,A.a([new A.fO(h,16,h),A.fa("Debtor signature",h,h,h,A.h2(h,B.ro,h,h,h,h,h,h,h,B.dr,h,h,10,h,B.ej,h,!0,h,h,h,h),h),new A.fO(h,6,h),A.ls(h,new A.Hp(w,B.US,h,h),h,new A.ky(h,new A.pq(v,v,v,v),A.vg(6),B.hE,h),82,h,B.LY,1/0)],p))}f.push(new A.fO(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fa(w,h,h,h,D.eVN,h))
f.push(new A.fO(h,18,h))
f.push(A.wK(A.fa("NGMY.ORG",h,h,h,A.h2(h,D.z1,h,h,h,h,h,h,h,B.dr,h,h,14,h,B.ej,h,!0,1.8,h,h,h),h)))
return f},
$S:372}
C.ft3.prototype={
$1(d){var w=null,v=new A.nq(D.HT,0.7,B.kA),u=A.vg(999)
return A.ls(w,A.fa(C.wv(d,!1),w,w,w,A.h2(w,D.HT,w,w,w,w,w,w,w,B.dr,w,w,9.5,w,B.ej,w,!0,w,w,w,w),w),w,new A.ky(w,new A.pq(v,v,v,v),u,B.hE,w),w,w,D.buf,w)},
$S:1903}
C.c0j.prototype={
$1(d){var w=null,v=B.bI.j(0.08),u=A.m(999),t=A.I(B.bI.j(0.28),B.q,1)
return A.p(w,A.d(C.wv(d,!1),w,w,w,w,w,w,D.f1j,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eF,w,w,w)},
$S:1904}
C.fEY.prototype={
$1(d){var w=null,v=A.aI(d,B.bT,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bLJ,w,w,w,new C.fEV(d),w,w,w,w,w,B.c8),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eH(w,B.K,new A.cV(new A.aY(0,380,0,v.a.b*0.9),A.aG(!1,B.a1,!0,u,new A.C(B.XL,A.v(A.a([new A.bH(B.a7,w,w,t,w),new A.dq(1,B.cl,A.cd(A.v(A.a([new A.ev(new C.aXk(r,w),s),B.S,A.A(A.a([A.E(A.ex(B.yl,D.frx,new C.fEW(s,r,d),A.df(w,w,w,w,w,w,w,w,w,B.c,w,w,B.eZ,w,new A.b7(A.m(14),B.Y),new A.aA(q,1,B.q,-1),w,w,w,w)),1),B.ab,A.E(A.dp(B.a00,D.fob,new C.fEX(r,d),A.bk(B.aZ,w,w,w,B.c,w,B.eZ,w,new A.b7(A.m(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.r,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.aB,0,w,w,w,w,w,B.ag),w),w,w,0,Ai.Y6,B.d0,w,w,w)},
$S:46}
C.fEV.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fEW.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.ak$.x.h(0,t.a)
m=m==null?null:m.gb8()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lT(2.5),$async$$0)
case 4:w=3
return A.b(e.hq(B.fX),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eR(B.dD.gaM(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aK(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.rM(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fEX.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fzG(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.R(A.b2(null,null,null,null,null,B.r,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fEQ.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eH(w,B.aB,A.v(A.a([new A.C(D.bpP,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nq,w,w,w),1),A.aH(w,w,w,w,B.lk,w,w,w,new C.fEO(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dq(1,B.cl,new A.C(B.fU,A.bw(A.m(14),A.fL(t,B.A,w,w,B.ck,B.du,!1,w,!1,w,w),B.aq),w),w),new A.C(B.LB,new A.a7(1/0,w,A.dp(B.oI,D.aQ2,new C.fEP(t,this.c,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.LO,B.d0,w,new A.b7(v,B.Y),w)},
$S:46}
C.fEO.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fEP.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rM(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fF1.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eH(w,B.aB,new A.C(D.bpX,A.v(A.a([A.A(A.a([D.bvg,A.aH(w,w,w,w,B.lk,w,w,w,new C.fF_(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.O,new A.ev(A.bw(A.m(14),A.p(w,A.b3(w,w,w,new C.b9m(s.ax,w),B.au),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a7(1/0,w,A.dp(B.oI,D.aQ2,new C.fF0(t,s,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(v,B.Y),w)},
$S:46}
C.fF_.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fF0.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.ak$.x.h(0,t.a)
n=n==null?null:n.gb8()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lT(2.5),$async$$0)
case 4:w=3
return A.b(e.hq(B.fX),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aK(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.eR(B.dD.gaM(s))
w=5
return A.b(A.rM(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fo6.prototype={
$1(d){return d.a===this.a},
$S:240}
C.dDX.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dDI.prototype={
biC(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dX:B.c
s=u.a
w=2
return A.b(A.bV(t,null,new C.dDL(s,q,e),p,!0,!0,!1,B.I7,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dDM(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.biC(d,e)},
$S:1905}
C.dDL.prototype={
$1(d){var w,v=null,u=this.c===B.vR,t=u?D.d8C:D.d4V
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.aB,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bn(!0,new A.C(K.agU,A.v(A.a([u,B.at,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bq:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.id(!0,v,v,B.y,L.aNe,new C.dDK(this.a,w,t,d),t.length,v,B.dQ,B.ah,!0)],x.p),B.aj,v,B.e,B.Q,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:28}
C.dDK.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.d_.j(0.14)
else w=t.b.a.d.a?B.M:B.aP
v=A.m(14)
if(q)u=B.d_
else u=(t.b.a.d.a?B.bq:B.bn).j(0.16)
u=A.I(u,B.q,q?1.6:1)
return A.aL(!1,p,!0,A.p(B.A,C.aXj(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dDJ(t.d,r),s,s,s,s,s,s,s)},
$S:189}
C.dDJ.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dDM.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dDG.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:94}
C.dDH.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cJ(B.cs,e,v)
return new A.cY(e,!1,A.ij(B.A,A.av(A.aG(!1,B.a1,!0,v,new A.e0(new C.dDF(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ag),v,v,v),v,new A.bf(t,new A.bo(0.96,1,u),u.k("bf<bI.T>"))),v)},
$S:31}
C.dDF.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bT,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dX:B.c,f=A.m(14),e=A.I((h?B.bq:B.bn).j(0.16),B.q,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aL(!1,v,!0,new A.C(B.eo,A.X(B.cA,i.a.d.a?B.bq:B.bn,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dDq(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aRa("Name")
r=l.a
q=r.d==null?k:new C.dDr(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bm:B.lD
n=A.I(B.d_.j(0.35),B.q,1)
m=r.d
t=A.aM(k,B.T,h,k,!0,B.r,k,A.aN(),w,k,k,k,k,k,2,s.ba9(new A.C(B.fx,A.aL(!1,p,!0,A.p(B.A,C.aXj(m==null?"\ud83d\udc64":A.ftU(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cm,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.ku,k,B.a6y,k,k)
v=A.a([v,B.ac,t,B.O,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11.5,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.an,A.A(A.a([A.E(i.aRN("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dDs(r,a0),r.d===B.vR),1),B.ab,A.E(i.aRN("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dDx(r,a0),r.d===B.a3y),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.O,new A.bH(B.a3,k,k,A.hc(D.bK7,D.fpY,new C.dDy(r,l.e,a0),A.fv(k,k,k,k,k,k,k,k,k,k,k,B.d_,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c8)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.u6(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.f,k,k,k,k,k,2,i.aRb("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ai,k,k,s,k,k,B.dU,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.am,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.M:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.bq:B.bn).j(0.22),B.q,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wv(r.a,!1)
v.push(A.aG(!1,B.a1,!0,q,A.aL(!1,p,!0,A.p(k,A.A(A.a([A.E(A.v(A.a([t,B.bB,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bH_],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bj,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dDz(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ag))
if(!h)B.d.v(v,A.a([B.O,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.r,k,k,k,k,k,2,i.aRa("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.am,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aZF(r.b.length!==0,B.mk,new C.dDA(r,i,a0),new C.dDB(r,a0),"Upload from gallery","ID photo"))
v.push(i.aZF(r.c.length!==0,D.bAm,new C.dDC(r,i,d,a0),new C.dDD(r,a0),"Camera or gallery","Selfie"))
v.push(B.O)
t=l.w
v.push(new Ag.a6M("Signature (optional)",t,new C.dDE(a0),new C.dDt(a0,t),new C.dDu(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.bq:B.bn
s=(i?B.bq:B.bn).j(0.28)
s=A.E(A.dW(E.aPW,new C.dDv(d),A.df(k,k,k,k,k,k,k,k,k,t,k,k,B.v5,k,new A.b7(A.m(10),B.Y),new A.aA(s,1,B.q,-1),k,k,k,k)),1)
t=A.bk(B.d_,k,k,k,B.c,k,B.v5,k,new A.b7(A.m(10),B.Y),k,k,k)
v.push(A.A(A.a([s,B.ab,A.E(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.ut,k,k,k),new C.dDw(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cd(A.v(v,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.ve,B.je,k,k,360)},
$S:186}
C.dDq.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dDr.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dDs.prototype={
$0(){return this.b.$1(new C.dDp(this.a))},
$S:0}
C.dDp.prototype={
$0(){var w=this.a
w.d=B.vR
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dDx.prototype={
$0(){return this.b.$1(new C.dDo(this.a))},
$S:0}
C.dDo.prototype={
$0(){var w=this.a
w.d=B.a3y
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dDy.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dDz.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wz(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dDn(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dDn.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcj(),w.gce(),w.gct(),0,0,0,0,0)},
$S:0}
C.dDA.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.OS(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dDm(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dDm.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dDB.prototype={
$0(){return this.b.$1(new C.dDl(this.a))},
$S:0}
C.dDl.prototype={
$0(){return this.a.b=""},
$S:0}
C.dDC.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dX:B.c
w=3
return A.b(A.bV(q,null,new C.dDj(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.OS(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dDk(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dDj.prototype={
$1(d){var w=null
return A.bn(!0,A.v(A.a([A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.am2,w,w,w,w,new C.dDd(d),!1,w,w,w,w,w,w,w,D.fgA,w,w,w),A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.am0,w,w,w,w,new C.dDe(d),!1,w,w,w,w,w,w,w,D.fnf,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.af,!0,!0)},
$S:28}
C.dDd.prototype={
$0(){A.a6(this.a,!1).O("camera")
return null},
$S:0}
C.dDe.prototype={
$0(){A.a6(this.a,!1).O("gallery")
return null},
$S:0}
C.dDk.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dDD.prototype={
$0(){return this.b.$1(new C.dDi(this.a))},
$S:0}
C.dDi.prototype={
$0(){return this.a.c=""},
$S:0}
C.dDE.prototype={
$0(){return this.a.$1(new C.dDh())},
$S:0}
C.dDh.prototype={
$0(){},
$S:0}
C.dDt.prototype={
$0(){return this.a.$1(new C.dDg(this.b))},
$S:0}
C.dDg.prototype={
$0(){return B.d.a9(this.a)},
$S:0}
C.dDu.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.agK(u.a,null,null,new C.dDf(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dDf.prototype={
$4(d,e,f,g){this.a.$1(new C.dDc(this.b,d))},
$S:444}
C.dDc.prototype={
$0(){var w=this.a
B.d.a9(w)
B.d.v(w,this.b)},
$S:0}
C.dDv.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dDw.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.R(D.eRK)
return}if(w.a.d==null){w.c.I(x.q).f.R(D.eOG)
return}A.a6(w.c,!1).O(!0)},
$S:0}
C.dE_.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:94}
C.dE0.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dX:B.c,n=A.m(14),m=A.I((p?B.bq:B.bn).j(0.16),B.q,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.aB,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.An(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bq:B.bn,r,r,r,r,r,r,r,r,13,r,r,B.a5,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.yK(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.yK(r).length>0?B.bI:B.d_,r,r,r,r,r,r,r,r,12,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bq:B.bn
t=(q?B.bq:B.bn).j(0.28)
s=x.p
return new A.cY(e,!1,A.av(A.aG(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.O,v,u,B.aA,A.A(A.a([A.E(A.dW(B.nr,new C.dDY(d),A.df(r,r,r,r,r,r,r,r,r,w,r,r,B.jw,r,new A.b7(A.m(10),B.Y),new A.aA(t,1,B.q,-1),r,r,r,r)),1),B.ab,A.E(A.bJ(D.fnE,new C.dDZ(d),A.bk(B.d_,r,r,r,B.c,r,B.jw,r,new A.b7(A.m(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.AW,O.LL,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ag),r,r,r),r)},
$S:31}
C.dDY.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dDZ.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dDU.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dDV(r),p=r.a.d.a,o=p?B.dX:B.c,n=A.m(14),m=A.I((p?B.bq:B.bn).j(0.14),B.q,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.aB,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.An(l.c),s,s,s,s,s,s,D.f2N,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.ix((r.a.d.a?B.bq:B.bn).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.ZP,"View receipt",new C.dDN(r,d,l))
u=l.x!=null
t=u?B.r3:B.pK
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bpU,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dDO(r,d,l)),q.$3$icon$label$onTap(B.Bc,"Edit",new C.dDP(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mk,"View / download ID",new C.dDQ(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bAl,"View / download selfie",new C.dDR(r,d,l)))
if(l.gaEn())p.push(q.$3$icon$label$onTap(A5.a_S,"View / download signature",new C.dDS(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bI,B.e5,"Delete",new C.dDT(r,d,l)))
p.push(B.at)
return A.bn(!0,new A.C(B.va,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:28}
C.dDV.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.aB
else w=d
return A.aL(!1,v,!0,new A.C(B.eP,A.A(A.a([A.X(e,w,v,v,v,20),B.bf,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1906}
C.dDN.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fEU(w,this.c)},
$S:0}
C.dDO.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.Rw(this.c)},
$S:0}
C.dDP.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.CI(this.c)},
$S:0}
C.dDQ.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bC2(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dDR.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bC2(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dDS.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fEZ(w,this.c)},
$S:0}
C.dDT.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.Nw(0,this.c)},
$S:0}
C.dE1.prototype={
$1(d){return d.x==null},
$S:240}
C.dE2.prototype={
$1(d){return d.x!=null},
$S:240}
C.dE3.prototype={
$2(d,e){return d+e.c},
$S:1907}
C.dE4.prototype={
$0(){return this.a.bxL()},
$S:0}
C.dDW.prototype={
$0(){return this.a.adW(this.b)},
$S:0}
C.foC.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.foD.prototype={
$0(){return B.d.gL(D.a13)},
$S:z+68}
C.d3M.prototype={
$0(){var w=this.a
return w.m(new C.d3K(w,this.b))},
$S:0}
C.d3K.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d3L.prototype={
$0(){},
$S:0}
C.d3N.prototype={
$0(){var w=this.a.gbWo()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.fqE.prototype={
$1(d){return C.h0x(A.a1(d,x.N,x.z))},
$S:z+11}
C.fqF.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fqG.prototype={
$2(d,e){var w=A.c7(d.a,null),v=A.c7(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+26}
C.fDy.prototype={
$1(d){return d.ag()},
$S:z+21}
C.fLD.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fnY.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bMc.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f_(e,v)?v:null},
$S:1908}
C.fE6.prototype={
$1(d){var w=this
return new C.YD(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d4r.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d4q(w,d))},
$S:z+66}
C.d4q.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d4f.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cy(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d4c.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d3O.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d3P.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d4g.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d3X.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.dX:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ej(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.d3V(d),w,w),A.bJ(B.wa,new C.d3W(d),A.bk(B.mP,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.d3V.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d3W.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d3Y.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d4d.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d4e.prototype={
$0(){return B.d.gL(D.yv)},
$S:z+12}
C.d3T.prototype={
$1(d){var w=this.a,v=w.y,u=w.gxZ(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.S4(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d3U.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d3Z.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Yb(v,u,J.ad(w.d),null)},
$S:z+64}
C.d4_.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d4p.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aE(s,new C.XU(r.y,r.gxZ(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d4n(r),s,s,s,s,s,s,!1,B.a8)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b8L(v,e,w,u,t,r.gbNE(),C.hfG(r.y.Q),r.gxZ(0),s)
w=t}return A.c6(q,new C.d4o(r,e),new A.C(B.Y_,w,s))},
$S:1909}
C.d4o.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd_(t).ay){t=this.b
u=x.cy.a(B.d.gd_(u.f.f)).guu(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dm()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fz(v*3.141592653589793*0.5)
return A.fs(B.a3,A.dc(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.d4n.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFr(B.py,B.iw)},
$S:0}
C.d49.prototype={
$0(){var w=this.a
return w.m(new C.d48(w))},
$S:0}
C.d48.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d4a.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).O(null)
return null},
$S:0}
C.d3Q.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jN.j(0.5),r=x.p,q=A.a([D.ffd,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cl(p.d)?"Write this book":"Write a new book"
q.push(p.Yc(d,B.dW,w,J.cl(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Yc(d,L.ajS,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cy(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cH,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kb.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cH,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kb.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Yc(d,A0.al2,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Yc(d,B.pR,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Yc(d,B.pR,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eH(u,E.An,A.bn(!0,new A.C(A4.AR,A.v(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.ahj,B.d0,u,new A.b7(t,new A.aA(s,1.4,B.q,-1)),u)},
$S:46}
C.d4b.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.d42.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cy(w.d)
return new C.YF(v,J.cy(w.d),w.r+1,null)},
$S:z+54}
C.d43.prototype={
$1(d){var w=null
return A.oh(!1,A.ej(w,w,w,E.An,new A.kc(this.a,new C.d41(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:309}
C.d41.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a6e,B.oa,A.E(A.d(e,w,w,w,w,w,w,B.iG,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:739}
C.d44.prototype={
$0(){return this.a.a=!1},
$S:49}
C.d45.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:192}
C.d46.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d47.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Aw(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.QV(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d40(s,t))
w=4
return A.b(s.kQ(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d40.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d4i.prototype={
$1(d){var w=null
return A.oh(!1,A.ej(w,w,w,E.An,new A.kc(this.a,new C.d4h(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:309}
C.d4h.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a6e,B.oa,A.E(A.d(e,w,w,w,w,w,w,B.iG,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:739}
C.d4j.prototype={
$0(){return this.a.a=!1},
$S:49}
C.d4k.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:192}
C.d4l.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:192}
C.d4m.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Aw(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kQ(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3R.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bfH(B.py,V.Lo)},
$S:0}
C.d3S.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFr(B.py,V.Lo)},
$S:0}
C.d6b.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d6c.prototype={
$1(d){var w=this.a
return w.m(new C.d6a(w))},
$S:9}
C.d6a.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d6d.prototype={
$1(d){var w=this.a
return w.m(new C.d69(w))},
$S:9}
C.d69.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d6e.prototype={
$1(d){var w=this.a
return w.m(new C.d68(w))},
$S:9}
C.d68.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d6f.prototype={
$0(){var w=this.a
return w.m(new C.d67(w,this.b))},
$S:0}
C.d67.prototype={
$0(){var w=this.b
this.a.d.saV(0,w)
return w},
$S:0}
C.d6g.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga0R()
A.a6(this.b,!1).O(new A.bnh(w,v))},
$S:0}
C.d4G.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d4F.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.YB(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d4K.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d4J.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b5S(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hD,v,v,v)
return A.ej(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.d4H(d),v,v),A.bJ(B.wa,new C.d4I(d),A.bk(B.mP,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.An,w,v,v,v,v,D.fe6,v)},
$S:19}
C.d4H.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d4I.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d4L.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d4M.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.cd(A.bY(B.bz,r,B.br,18,14),B.r,t,B.y,t,D.bqO,t,t,B.ah)},
$S:333}
C.d4E.prototype={
$0(){return this.a.Px(0,this.b)},
$S:0}
C.d4D.prototype={
$0(){return this.a.P1(0,this.b)},
$S:0}
C.cDJ.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cDK.prototype={
$0(){return B.d.gL(D.yv)},
$S:z+12}
C.cDL.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bZ(0,new A.C(d,A.c_(w,new A.o(w,w,A.I(this.a.j(f),B.q,g),v,w,w,B.n),B.bd),w),0,0,0)},
$S:1911}
C.cXa.prototype={
$1(d){return this.a.m(new C.cX9(this.b,this.c))},
$S:9}
C.cX9.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cXz.prototype={
$1(d){return this.a.m(new C.cXm())},
$S:2}
C.cXm.prototype={
$0(){},
$S:0}
C.cXA.prototype={
$1(d){return this.a.m(new C.cXl())},
$S:2}
C.cXl.prototype={
$0(){},
$S:0}
C.cXB.prototype={
$0(){var w=this.a
return w.m(new C.cXk(w,this.b))},
$S:0}
C.cXk.prototype={
$0(){var w=this.a
return w.d=w.gnS().Fh(this.b.a)},
$S:0}
C.cXC.prototype={
$0(){var w=this.a
return w.m(new C.cXj(w,this.b))},
$S:0}
C.cXj.prototype={
$0(){var w=this.a
return w.d=w.gnS().cEq(this.b)},
$S:0}
C.cXD.prototype={
$1(d){return this.a.m(new C.cXi())},
$S:2}
C.cXi.prototype={
$0(){},
$S:0}
C.cXE.prototype={
$0(){var w=this.a
return w.m(new C.cXh(w,this.b))},
$S:0}
C.cXh.prototype={
$0(){var w=this.a
return w.d=w.gnS().cEv(this.b.a)},
$S:0}
C.cXF.prototype={
$1(d){var w=this.a
return w.m(new C.cXu(w,d))},
$S:6}
C.cXu.prototype={
$0(){var w=this.a
return w.d=w.gnS().cFp(this.b)},
$S:0}
C.cXG.prototype={
$1(d){var w=this.a
return w.d=w.gnS().aCA(d)},
$S:2}
C.cXH.prototype={
$1(d){var w=this.a
return w.d=w.gnS().cEy(d)},
$S:2}
C.cXJ.prototype={
$1(d){var w=this.a
return w.d=w.gnS().cFn(d)},
$S:2}
C.cXK.prototype={
$1(d){var w=this.a
return w.m(new C.cXt(w,d))},
$S:9}
C.cXt.prototype={
$0(){var w=this.a
return w.d=w.gnS().cFe(this.b)},
$S:0}
C.cXL.prototype={
$0(){var w=this.a,v=w.gnS(),u=B.a.i(w.gxZ(0).a.a),t=B.a.i(w.gazQ().a.a)
u=v.baq(B.a.i(w.gapI().a.a),t,u)
A.a6(this.b,!1).O(u)
return null},
$S:0}
C.dRY.prototype={
$0(){var w=this.a
w.vA()
w.a.bp()
w.a.pE()},
$S:0}
C.dRX.prototype={
$0(){var w=this.a
w.vA()
w.a.bp()
w.a.pE()},
$S:0}
C.dS_.prototype={
$0(){var w=this,v=w.b
if(J.cy(v)||J.cl(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dS0.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dS1.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dRW.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dRZ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dS3.prototype={
$0(){this.a.O1()
return null},
$S:0}
C.dS2.prototype={
$0(){return this.a.E7(this.b)},
$S:0}
C.dRo.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.de,w,w,!0,w,w,new C.dRm(d),w,w),r=A.bk(B.bW,w,w,w,w,w,w,w,w,w,w,w)
return A.ej(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dRn(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.dRm.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dRn.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dRp.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cEU(this.b)},
$S:0}
C.dRj.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aRq(w.b,w.c,w.d)},
$S:8}
C.dQS.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dQT.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dR6.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.G5(t.a.c),$async$$0)
case 2:s=r.r7(q.dH(e,new C.dR4(t)))
if(s!=null&&t.c!=null)t.m(new C.dR5(t,s))
t.a.bp()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dR4.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dR5.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dR7.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dR8.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dRi.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cFH(C.hfP(w),w)},
$S:0}
C.dRg.prototype={
$1(d){return new A.e0(new C.dRf(this.a,this.b),null)},
$S:20}
C.dRf.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dX:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.alG,v,v,v,p>0?new C.dRb(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aQ,A.A(A.a([o,A.E(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.amf,v,v,v,new C.dRc(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.ej(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dRd(d),v,v),A.bJ(B.p4,new C.dRe(d),A.bk(B.bW,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:155}
C.dRb.prototype={
$0(){return this.b.$1(new C.dRa(this.a))},
$S:0}
C.dRa.prototype={
$0(){return--this.a.a},
$S:0}
C.dRc.prototype={
$0(){return this.b.$1(new C.dR9(this.a))},
$S:0}
C.dR9.prototype={
$0(){return++this.a.a},
$S:0}
C.dRd.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dRe.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dRh.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cFu(this.a.a)
w.r.a9(0)},
$S:0}
C.dQG.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.agR(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.h9z(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dQH.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aCx(w)},
$S:0}
C.dRr.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.ach(this.b,w,this.c,null)},
$S:z+24}
C.dRl.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dX:B.c,t=A.m(20),s=A.X(B.lg,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.Q,0,B.p)
return A.ej(A.a([A.bJ(D.foM,new C.dRk(d),A.bk(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.bb,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:19}
C.dRk.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dQI.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dQJ.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dQK.prototype={
$1(d){return d.a},
$S:z+7}
C.dQL.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.L)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hV(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aCx(w)},
$S:0}
C.dQP.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.agR(q)
w=A.U(q).k("a2<1>")
q=A.B(new A.a2(q,new C.dQN(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.h9z(v.e,null,r,v.f,v.r,new C.dQO(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dQO.prototype={
$0(){return this.a.a94(this.b)},
$S:0}
C.dQN.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dQQ.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("K<1,hV>")
w=A.B(new A.K(w,new C.dQM(this.b),v),v.k("ak.E"))
u.d=t.aCx(w)},
$S:0}
C.dQM.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dRq.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dR1.prototype={
$1(d){return d.length!==0},
$S:3}
C.dR2.prototype={
$1(d){var w=this
return new A.e0(new C.dR0(w.a,w.b,w.c,w.d),null)},
$S:20}
C.dR0.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dX:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.K(o,new C.dQX(u,e,o),A.U(o).k("K<1,r>")))
p.push(B.O)
u=w.d
p.push(A.aM(v,B.T,!1,v,!0,B.r,v,A.aN(),u,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(12),B.dg),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ai,v,v,v,v,v,B.lZ,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.am,v,v,v,v))
p=A.v(p,B.aj,v,B.e,B.Q,0,B.p)
t=w.a
return A.ej(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dQY(d),v,v),A.bJ(B.IU,new C.dQZ(t,u,o,e),A.bk(B.bW,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.fcj,new C.dR_(t,u,o,d),A.bk(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:155}
C.dQX.prototype={
$1(d){var w=null
return A.dN(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bNE,w,w,w,new C.dQW(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1912}
C.dQW.prototype={
$0(){return this.a.$1(new C.dQU(this.b,this.c))},
$S:0}
C.dQU.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dQY.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dQZ.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dQV(w.c,u))
v.bO(0,B.c4)}},
$S:0}
C.dQV.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dR_.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).O(!0)},
$S:0}
C.dR3.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cG8(this.b,D.tA,C.G3(v,w.a.c))},
$S:0}
C.dRy.prototype={
$1(d){return d.as},
$S:z+1}
C.dRz.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iM(this.b,w)},
$S:0}
C.dRA.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.i3F(v)
return w.Va(v==null?null:v.a)},
$S:0}
C.dRB.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hH3(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gco(k)){k=A.aQ(1/0,e.a,e.b)
s=A.aQ(1/0,e.c,e.d)
l.cog(new A.at(u,t),v.gbgy(),new A.at(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cLI:D.cKa
q=A.I(s?B.dp:D.b9r,B.q,1)
p=A.m(22)
o=A.bZ(0,A.b3(m,m,m,new C.bc7(s,m),B.au),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bw(p,new A.an(B.W,m,B.aa,B.r,A.a([o,A.bZ(0,A.uf(new A.Q(n,n,n,n),new A.a7(u,t,new C.bd0(l.d,v,l.f,w,new C.dRu(l),l.gc8n(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.buk(s,new C.dRv(l,e),new C.dRw(l,e),new C.dRx(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.b0,B.b6,B.x,r,m,m),B.n),m,m,m,R.agm,m,m,m,m)},
$S:223}
C.dRu.prototype={
$1(d){var w=this.a
w.m(new C.dRs(w,d))},
$S:2}
C.dRs.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.K(0,v)},
$S:0}
C.dRv.prototype={
$0(){var w=this.b
return this.a.b86(1.25,new A.at(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dRw.prototype={
$0(){var w=this.b
return this.a.b86(0.8,new A.at(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dRx.prototype={
$0(){var w=this,v=w.b
return w.a.aRq(new A.at(A.aQ(1/0,v.a,v.b),A.aQ(1/0,v.c,v.d)),new A.at(w.c,w.d),w.e.gbgy())},
$S:0}
C.dRC.prototype={
$0(){var w=this.a
return w.m(new C.dRt(w))},
$S:0}
C.dRt.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dQR.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fI(new A.fC(s.c)),$async$$0)
case 2:t.xu("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d4Q.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bgJ(u,C.hjS(v.c,u),new C.d4P(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d4P.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d4R.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bk4(d.d,d.c,u.f.t(0,d.a),new C.d4O(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d4O.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.foG.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.r7(new A.cQ(new A.a2(v,new C.foH(d),w.k("a2<1>")),new C.foI(),w.k("cQ<1,n>")))},
$S:z+20}
C.foH.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.foI.prototype={
$1(d){return d.a},
$S:z+7}
C.foE.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.foF.prototype={
$1(d){return d.b},
$S:z+7}
C.foL.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.r7(new A.cQ(new A.a2(v,new C.foM(d),w.k("a2<1>")),new C.foN(),w.k("cQ<1,n>")))},
$S:z+20}
C.foM.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.foN.prototype={
$1(d){return d.a},
$S:z+7}
C.foJ.prototype={
$1(d){var w,v=A.et([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ai(0,w)&&v.K(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.foK.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d4T.prototype={
$0(){return this.a},
$S:z+32}
C.d59.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ai(0,d)},
$S:261}
C.d51.prototype={
$2(d,e){var w=this.a.cg(0,d,new C.d52()),v=J.a5(w)
if(!v.t(w,e))v.K(w,e)},
$S:116}
C.d52.prototype={
$0(){return A.a([],x.s)},
$S:740}
C.d50.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f_(w,e)
return w===!0},
$S:327}
C.d4U.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d5_.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d4Z.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.K(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.BU:v)
u=1
while(v.C())u+=s.$2(v.gS(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.T:v)
while(v.C()){t=v.gS(v)
if(e.t(0,t))continue
e.K(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.BU:t)
while(t.C())u+=s.$2(t.gS(t).a,e)}return u},
$S:1914}
C.d4V.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d53.prototype={
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
t=J.aV(t==null?D.BU:t)
while(t.C()){r=t.gS(t)
if(r.a!==a9&&!B.d.b7(w,new C.d54(r)))w.push(r)}}B.d.bn(w,new C.d55(a8))
B.d.b_(w,new C.d56())
q=C.hH2(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.etE],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bn1(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1915}
C.d54.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d55.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d56.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.d57.prototype={
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
C.d58.prototype={
$1(d){return 16+d*156},
$S:263}
C.d4S.prototype={
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
t.n(0,d,new C.Fk(r,new A.u(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.Fk(s,new A.u(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.Fk(s,new A.u(e,v)))}t=o.r.h(0,d)
t=J.aV(t==null?B.T:t)
s=o.w
while(t.C()){r=t.gS(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Jz(d,new A.u(e+t,w),s,s.length))}},
$S:192}
C.d4W.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aHG(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:116}
C.d4X.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d4Y.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:741}
C.d5a.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:741}
C.d5b.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:463}
C.d5c.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:174}
C.d5d.prototype={
$1(d){return d>=0.5},
$S:117}
C.f74.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hp(A.aL(!1,v,!0,new A.a7(38,38,A.X(d,this.a.c?B.c:B.cC,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1917}
C.eJg.prototype={
$1(d){var w=null,v=A.m(8),u=B.bW.j(0.12),t=A.m(8)
return new A.C(B.n3,A.aL(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.eZw,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.LX,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eJf(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eJf.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dl2.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dl1.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.no,B.L,w,w)
return A.ej(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.dl_(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.ma,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dl0(d),w,w)],x.p),B.bb,B.AK,w,u,D.bs3,w,D.bu_,new A.b7(v,B.Y),w,w)},
$S:19}
C.dl_.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dl0.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dlb.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dlc.prototype={
$1(d){var w=this.a
return w.m(new C.dla(w,d))},
$S:z+37}
C.dla.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dld.prototype={
$1(d){var w=null
return A.qc(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dlg.prototype={
$1(d){var w=this.a
return w.m(new C.dl9(w,d))},
$S:34}
C.dl9.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dlf.prototype={
$1(d){var w=null
return A.qc(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dlh.prototype={
$1(d){var w=this.a
return w.m(new C.dl8(w,d))},
$S:34}
C.dl8.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dli.prototype={
$0(){var w=this.a
return w.m(new C.dl7(w))},
$S:0}
C.dl7.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dlj.prototype={
$0(){var w=this.a
return w.m(new C.dl6(w))},
$S:0}
C.dl6.prototype={
$0(){return++this.a.at},
$S:0}
C.dlk.prototype={
$0(){var w=this.a
return w.m(new C.dl5(w))},
$S:0}
C.dl5.prototype={
$0(){return--this.a.ax},
$S:0}
C.dll.prototype={
$0(){var w=this.a
return w.m(new C.dl4(w))},
$S:0}
C.dl4.prototype={
$0(){return++this.a.ax},
$S:0}
C.dlm.prototype={
$1(d){var w=this.a
return w.m(new C.dl3(w,d))},
$S:9}
C.dl3.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dle.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dln.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bW.j(0.18)
else w=q.c.a?B.dX:B.c
v=A.m(12)
if(p)u=B.bW
else u=(q.c.a?B.dZ:B.bR).j(0.85)
u=A.I(u,B.q,p?1.5:1)
if(p)t=B.bW
else t=q.c.a?B.bq:B.bn
t=A.X(f,t,r,r,r,18)
if(p)s=B.bW
else s=q.c.a?B.bq:B.bn
return A.E(A.aG(!1,B.a1,!0,r,A.aL(!1,o,!0,A.dh(r,A.v(A.a([t,B.at,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bc,new A.o(w,r,u,v,r,r,B.n),B.eE,r,r,r,B.jw,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dlo(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
$S:z+39}
C.dlo.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dlx.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.c6R.prototype={
$2(d,e){return new A.bv(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:92}
C.c6Y.prototype={
$1(d){return d.ag()},
$S:z+5}
C.c6Z.prototype={
$2(d,e){var w=J.b6(e,new C.c6X(),x.a)
w=A.B(w,w.$ti.k("ak.E"))
return new A.bv(d,w,x.d2)},
$S:z+41}
C.c6X.prototype={
$1(d){return d.ag()},
$S:z+21}
C.c6T.prototype={
$1(d){return C.ajH(A.a1(d,x.N,x.z))},
$S:z+8}
C.c6U.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c6V.prototype={
$1(d){return C.h0x(A.a1(d,x.N,x.z))},
$S:z+11}
C.c6W.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c72.prototype={
$1(d){return new A.aEL(d.f.length,d.a,d.b)},
$S:z+43}
C.c73.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:564}
C.c7_.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c70.prototype={
$1(d){return d.cF6(C.G3(d,this.a))},
$S:z+44}
C.dRL.prototype={
$1(d){return C.tM(d,this.a.a.c)},
$S:z+2}
C.dRM.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dRQ.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dRR.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dRI.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYN(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.y_("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oZ(r.c,r.e),$async$$0)
case 4:s.y_(p)
w=5
return A.b(s.J8(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRJ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYN(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.y_("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.oZ(r.c,r.e),$async$$0)
case 4:s.y_(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRK.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Up(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.y_("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.y_("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.y_("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.J8(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.aa(j)
o=r.a
if(o.c==null){w=1
break}o.y_(B.a.e9(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dRP.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYM(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.y_("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).c8(A.e8(new C.dRO(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oZ(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRO.prototype={
$1(d){var w=this.b
return new C.Zz(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dRN.prototype={
$1(d){return D.fP3},
$S:z+46}
C.dRT.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dRU.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dRS(w,d)
return new A.C(B.dc,new C.bd4(this.b,d.c,d.a,w,null),null)},
$S:1918}
C.dRS.prototype={
$0(){return this.a.WT(this.b.b)},
$S:0}
C.dRD.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dRE.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dRF.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dRG.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dRH.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dRV.prototype={
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
$S:180}
C.dD4.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dD5.prototype={
$0(){return B.d.gL(D.a2s)},
$S:z+48}
C.dD6.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.X(this.b.d,B.c.j(0.95),w,w,D.cRO,44),w,w,w),w,w,new C.bhR(u,t,v,w),B.au)},
$S:67}
C.fEz.prototype={
$1(d){return A.oK(new C.fEy(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:131}
C.fEy.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dX:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rn,24)],x.V),o=r?B.dZ:B.bR
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bW.j(0.18)],x.O)
w=A.p(t,D.bIe,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a8(B.a3,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.aB,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.S,o,new A.C(E.ahn,A.A(A.a([w,B.bf,A.E(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bq:B.bn,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.E(A.id(!0,t,e,B.y,D.eMT,new C.fEx(this.b,s),20,B.agY,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kz,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:110}
C.fEx.prototype={
$2(d,e){var w=null,v=D.a2s[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.dZ:B.bR,B.q,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.ek,8)],x.V),p=A.m(15),o=A.E(new C.a5p(v.a,!0,w),1),n=s?B.js:B.iQ,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aP:B.aB,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a1,!0,w,A.aL(!1,u,!0,A.eA(A.bw(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bq:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.lc,w,w,w)],l),B.aj,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fEw(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)},
$S:74}
C.fEw.prototype={
$0(){A.a6(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cex.prototype={
$0(){return this.a.aeZ(this.b)},
$S:0}
C.fDW.prototype={
$1(d){return D.fLj},
$S:z+74}
C.fLo.prototype={
$1(d){var w=this
return new C.a0h(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fE0.prototype={
$1(d){return new C.Yd(this.a,null)},
$S:z+51}
C.fE_.prototype={
$1(d){return D.fMi},
$S:z+52}
C.cXX.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cXY.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cXW(w,d))},
$S:34}
C.cXW.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cXZ.prototype={
$1(d){return this.a.JI()},
$S:2}
C.cY_.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cXT.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cXU.prototype={
$1(d){return this.a.JI()},
$S:2}
C.cXV.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cvw.prototype={
$0(){},
$S:0}
C.cvC.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cvD.prototype={
$0(){return this.a.aMZ(-1)},
$S:0}
C.cvE.prototype={
$1(d){return this.a.m(new C.cvB())},
$S:2}
C.cvB.prototype={
$0(){},
$S:0}
C.cvF.prototype={
$0(){return this.a.aMZ(1)},
$S:0}
C.cvG.prototype={
$1(d){return this.a.m(new C.cvA())},
$S:2}
C.cvA.prototype={
$0(){},
$S:0}
C.cvH.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.dZ:B.bR
return A.u5(u,u,B.aZ,r,u,new C.cvz(t,d),B.AX,s,w,u,new A.aA(v,1,B.q,-1),B.c8)},
$S:1919}
C.cvz.prototype={
$1(d){var w=this.a
return w.m(new C.cvx(w,this.b))},
$S:9}
C.cvx.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cvI.prototype={
$1(d){return this.a.m(new C.cvy())},
$S:2}
C.cvy.prototype={
$0(){},
$S:0}
C.cvJ.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.f6x.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).O(w)},
$S:2}
C.f6y.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.f6z.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).O(w)},
$S:0}
C.f6v.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbwU()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b3(new A.C(D.btZ,new A.ev(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bu9(p,v,this.b.a,u,t,r),r,r,B.au)},
$S:67}
C.f6w.prototype={
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
return A.aG(!1,B.a1,!0,p,A.aL(!1,v,!0,A.eA(D.e4i,r,new A.o(r,r,A.I(B.c.j(0.4),B.q,1.5),u,r,new A.a8(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
$S:126}
C.fCH.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:70}
C.eGq.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eGh.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eGi.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eGo.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e0(new C.eGn(w,this.b),null)},
$S:20}
C.eGn.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dX:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aB,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eH(w,u,new A.C(B.ahh,A.v(A.a([s,B.an,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.h6n(new C.eGk(r,e),r.a),B.aA,A.A(A.a([A.E(A.dW(B.de,new C.eGl(d),w),1),B.av,A.E(A.bJ(B.Tr,new C.eGm(r,d),A.bk(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.aj,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(t,B.Y),w)},
$S:97}
C.eGk.prototype={
$1(d){return this.b.$1(new C.eGj(this.a,d))},
$S:34}
C.eGj.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eGl.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eGm.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.eGp.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Sa(this.b)},
$S:0}
C.eGc.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.b9Z(w)},
$S:0}
C.eGg.prototype={
$1(d){return this.bj4(d)},
bj4(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.KK(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iM(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eGf.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("a2<1>")
w=A.B(new A.a2(w,new C.eGe(this.b),v),v.k("J.E"))
u.d=t.b9Z(w)},
$S:0}
C.eGe.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eGr.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iM(this.b,w)},
$S:0}
C.eGs.prototype={
$1(d){return this.a.bAX(d,this.b)},
$S:z+55}
C.eGd.prototype={
$0(){return this.a.a93(this.b)},
$S:0}
C.fLg.prototype={
$1(d){return new C.acC(this.a,this.b,this.c,null)},
$S:z+56}
C.eGu.prototype={
$0(){return this.a.Zw(this.b)},
$S:0}
C.eGv.prototype={
$0(){return this.a.Pt(this.b)},
$S:0}
C.eGw.prototype={
$0(){return this.a.E2(this.b)},
$S:0}
C.eGx.prototype={
$0(){return this.a.Zx(this.b)},
$S:0}
C.eGt.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eG7.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eG8.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eG9.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eGb.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pK(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eGa(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eGa.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eGU.prototype={
$2(d,e){return d+e.gwE()},
$S:z+59}
C.eGQ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eGR.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eGB.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dX:B.c,s=A.m(24),r=A.p(v,D.bIE,B.f,v,v,new A.o(B.ay.j(u?0.18:0.08),v,A.I(B.ay.j(0.28),B.q,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aB,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aP:B.aB
u=u?B.dZ:B.bR
w=x.p
return A.eH(v,t,new A.C(B.xu,A.v(A.a([r,B.aQ,q,B.O,p,B.d5,A.A(A.a([A.E(A.dW(B.nr,new C.eGz(d),A.df(v,v,v,v,v,v,v,v,v,o,v,v,B.eZ,v,new A.b7(A.m(14),B.Y),new A.aA(u,1,B.q,-1),v,v,v,v)),1),B.av,A.E(A.bJ(D.fsr,new C.eGA(d),A.bk(B.ay,v,v,v,v,v,B.eZ,v,new A.b7(A.m(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d0,v,new A.b7(s,B.Y),v)},
$S:46}
C.eGz.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eGA.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eGK.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dX:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fM,28)],x.V),g=k?D.cYb:B.a1R,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aA,D.eH8,B.at,new A.bH(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cv,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.ax,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.ahk,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b3g(B.b7,B.iW,new C.eGH(v,d),l,"Camera import","Scan QR"),1),B.av,A.E(v.b3g(B.cy,M.ya,new C.eGI(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.ay.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.ay.j(0.28),B.q,1)
o=A.p(m,D.bI2,B.f,m,m,new A.o(B.ay.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bS,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.aB,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bn,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bn(!0,new A.C(B.vc,A.p(m,A.v(A.a([g,new A.C(B.ahi,A.v(A.a([w,B.S,u,B.bx,t,B.S,A.aG(!1,B.a1,!0,m,A.aL(!1,s,!0,A.p(m,A.A(A.a([o,B.bf,n,A.X(B.ex,k?B.bq:B.bn,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bC,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eGJ(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:28}
C.eGH.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.vb("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eGI.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.vb("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eGJ.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.Nj(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eGF.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dX:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eT,24)],x.V),k=o?B.dZ:B.bR
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bq:B.bn
u=A.bw(w,new A.a7(48,48,C.aOX(!0,A.m(12),48,N.Mx,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aP:B.aB,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.An(v.gwE())
s=x.p
r=this.a
return A.bn(!0,new A.C(B.vc,A.p(q,A.v(A.a([B.S,k,new A.C(D.ahf,A.A(A.a([u,B.bf,A.E(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bq:B.bn,q,q,q,q,q,q,q,q,12,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.AB,r.ciw(B.tS,B.aV,new C.eGD(d),p,"QR code or backup file","Transfer project"),r.b0j(!0,B.e5,B.ay,new C.eGE(d),p,"Remove from this device","Delete project"),B.S],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:28}
C.eGD.prototype={
$0(){A.a6(this.a,!1).O("transfer")
return null},
$S:0}
C.eGE.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
C.eGG.prototype={
$1(d){return this.bj5(d)},
bj5(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.KK(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vo(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eGX.prototype={
$0(){var w=this.a
w.a.bp()
w.m(new C.eGW(w))},
$S:0}
C.eGW.prototype={
$0(){return this.a.r++},
$S:0}
C.eGY.prototype={
$0(){var w=this.a
return w.m(new C.eGV(w))},
$S:0}
C.eGV.prototype={
$0(){return this.a.r++},
$S:0}
C.eGy.prototype={
$0(){var w=this.a.c
w.toString
return A.iM(w,null)},
$S:0}
C.eGC.prototype={
$0(){return this.a.cbS(this.b)},
$S:0}
C.eGT.prototype={
$0(){var w=this.a
return w.m(new C.eGS(w,this.b))},
$S:0}
C.eGS.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eGN.prototype={
$0(){return this.a.vb("scan")},
$S:0}
C.eGO.prototype={
$0(){return this.a.vb("file")},
$S:0}
C.eGP.prototype={
$1(d){return this.a.cix(d,this.b)},
$S:z+60}
C.eGM.prototype={
$0(){return this.a.E6(this.b)},
$S:0}
C.eGL.prototype={
$0(){return this.a.a_1(this.b,this.c)},
$S:0}
C.cuY.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cuX.prototype={
$1(d){return d.ag()},
$S:z+62}
C.cuV.prototype={
$1(d){return C.hpG(A.a1(d,x.N,x.z))},
$S:z+63}
C.cuW.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fnQ.prototype={
$1(d){return d.y===D.ki},
$S:z+2}
C.fLL.prototype={
$1(d){return C.bzY(d,this.a)},
$S:z+2}
C.fml.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bMh.prototype={
$1(d){return!d.as},
$S:z+1}
C.bMg.prototype={
$1(d){return d.ag()},
$S:z+15}
C.bMd.prototype={
$1(d){return C.h0y(A.a1(d,x.N,x.z))},
$S:z+14}
C.bMe.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bMf.prototype={
$1(d){return J.k(d)},
$S:17}
C.fe5.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.f9N.prototype={
$1(d){return C.fS7(A.a1(d,x.N,x.z))},
$S:z+67}
C.f9O.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.f9P.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fDN.prototype={
$1(d){return J.k(d)},
$S:17}
C.fDO.prototype={
$1(d){return d.a},
$S:z+69}
C.fDP.prototype={
$1(d){return d.length!==0},
$S:3}
C.fDQ.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fDR.prototype={
$1(d){return d.Sa(null).ag()},
$S:z+70}
C.fLJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.foh.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fqK.prototype={
$1(d){return C.ajH(A.a1(d,x.N,x.z))},
$S:z+8}
C.fqL.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fqM.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fqN.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fqO.prototype={
$1(d){return C.tM(d,this.a)},
$S:z+2}
C.fDA.prototype={
$1(d){return C.tM(d,this.a)},
$S:z+2}
C.fLE.prototype={
$1(d){return C.ajH(A.a1(d,x.N,x.z))},
$S:z+8}
C.fLF.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fLG.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fnZ.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fo_.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fLP.prototype={
$1(d){return!d.as},
$S:z+1}
C.fnz.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fnA.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fnB.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.fLp.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.frw.prototype={
$1(d){return d.Q},
$S:z+72}
C.fDw.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fqH.prototype={
$1(d){return C.ajH(A.a1(d,x.N,x.z))},
$S:z+8}
C.fqI.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fqJ.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fDs.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fak.prototype={
$1(d){return d.length!==0},
$S:3}
C.fal.prototype={
$1(d){return C.h0y(A.a1(d,x.N,x.z))},
$S:z+14}
C.fam.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fan.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fao.prototype={
$1(d){return d.length!==0},
$S:3}
C.faB.prototype={
$2(d,e){return d.eU(new C.faC(e))},
$S:1920}
C.faC.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c6},
$S:1921}
C.fay.prototype={
$1(d){return C.hLG(d,this.a)},
$S:z+73}
C.faz.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.faA.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.feK.prototype={
$1(d){return d.a},
$S:z+49}
C.feL.prototype={
$1(d){return d.length!==0},
$S:3}
C.feM.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fgT.prototype={
$1(d){return d.ag()},
$S:z+5}
C.flF.prototype={
$1(d){return C.hbS(d,C.G3(d,this.a))},
$S:z+5}
C.flG.prototype={
$1(d){return C.hbT(d,C.G3(d,this.a))},
$S:z+5};(function aliases(){var w=C.aK1.prototype
w.bt8=w.q
w=C.aMa.prototype
w.bvt=w.q
w=C.aMb.prototype
w.bvu=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aBx.prototype,"gcft","cfu",25)
var s
w(s=C.ayA.prototype,"gc8t","c8u",42)
v(s,"gaLe","MS",0)
v(s,"gcnC","At",0)
v(s,"gbID","Nx",0)
v(s,"gcBo","y0",0)
v(s,"gchu","a_J",0)
v(s,"gbE3","Nf",0)
v(s,"gbJ3","Wk",0)
w(s,"gbNE","bNF",71)
v(s,"gbyy","zx",0)
v(C.ayB.prototype,"gcBk","EY",0)
v(s=C.aC7.prototype,"gaeB","vp",0)
v(s,"gcb7","ZT",0)
v(s,"gaPf","Hw",0)
v(s=C.aC4.prototype,"gcxz","a1O",0)
v(s,"gaeB","vp",0)
v(s,"gclG","a0o",0)
v(s,"gcc4","a_6",0)
w(s,"gc8n","c8o",30)
v(s,"gbIV","HB",0)
v(s,"gcyy","cyz",3)
v(s,"gc_7","XZ",0)
w(s,"gc6U","c6V",23)
v(s,"gcaS","caT",3)
v(s=C.aAw.prototype,"gc4I","P2",0)
v(s,"gc4K","c4L",3)
v(s,"gbFB","a8G",0)
v(s=C.aC6.prototype,"gbM9","WP",0)
v(s,"gbWv","Xs",0)
v(s,"gcrV","a1e",0)
v(s,"gcob","a0Q",0)
v(C.aC5.prototype,"gcnU","agk",0)
v(C.arh.prototype,"gc6S","Zv",0)
v(C.axm.prototype,"ga1y","JI",3)
v(C.axl.prototype,"ga1y","JI",3)
v(C.aw5.prototype,"ga1y","JI",3)
v(s=C.aDC.prototype,"gb_I","PY",0)
v(s,"gbxm","V4",0)
v(s,"gcbT","cbU",3)
w(C.aDB.prototype,"gc7I","c7J",57)
u(C.aDD.prototype,"gaP9",0,0,null,["$1","$0"],["Hv","bGS"],58,0,0)
t(C,"hj5","hVh",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.anb,C.u2,C.n8,C.H8,C.adP,C.Jr,C.u3,C.Jz,C.Fk,C.bd2,C.aHG,C.aol,C.d5e,C.lx,C.aRS,C.aRR,C.aPT,C.tB,C.qR,C.lh,C.hV,C.kA,C.aFF])
u(A.hT,[C.fvm,C.fvl,C.fvn,C.fEs,C.fkB,C.fkC,C.fkH,C.ft5,C.ft4,C.ft3,C.c0j,C.fEY,C.fEQ,C.fF1,C.fo6,C.dDL,C.dDG,C.dDH,C.dDj,C.dDf,C.dE_,C.dE0,C.dDU,C.dDV,C.dE1,C.dE2,C.foC,C.fqE,C.fqF,C.fDy,C.fLD,C.fnY,C.fE6,C.d4r,C.d3O,C.d3X,C.d4d,C.d3T,C.d3Z,C.d3Q,C.d42,C.d43,C.d41,C.d4i,C.d4h,C.d6c,C.d6d,C.d6e,C.d4F,C.d4K,C.d4J,C.cDJ,C.cDL,C.cXa,C.cXz,C.cXA,C.cXD,C.cXF,C.cXG,C.cXH,C.cXJ,C.cXK,C.dRZ,C.dRo,C.dRj,C.dQS,C.dR4,C.dR7,C.dRg,C.dQG,C.dRr,C.dRl,C.dQI,C.dQJ,C.dQK,C.dQP,C.dQN,C.dQM,C.dR1,C.dR2,C.dQX,C.dRy,C.dRu,C.d4Q,C.d4R,C.foG,C.foH,C.foI,C.foE,C.foF,C.foL,C.foM,C.foN,C.foJ,C.foK,C.d59,C.d5_,C.d4V,C.d54,C.d55,C.d58,C.d4X,C.d5b,C.d5c,C.d5d,C.f74,C.eJg,C.dl1,C.dlb,C.dlc,C.dld,C.dlg,C.dlf,C.dlh,C.dlm,C.dln,C.c6Y,C.c6X,C.c6T,C.c6U,C.c6V,C.c6W,C.c72,C.c7_,C.c70,C.dRL,C.dRO,C.dRN,C.dRU,C.dRV,C.dD4,C.fEz,C.fDW,C.fLo,C.fE0,C.fE_,C.cXY,C.cXZ,C.cXU,C.cvE,C.cvG,C.cvH,C.cvz,C.cvI,C.f6x,C.fCH,C.eGo,C.eGk,C.eGg,C.eGe,C.eGs,C.fLg,C.eGB,C.eGK,C.eGF,C.eGG,C.eGP,C.cuX,C.cuV,C.cuW,C.fnQ,C.fLL,C.fml,C.bMh,C.bMg,C.bMd,C.bMe,C.bMf,C.f9N,C.f9O,C.fDN,C.fDO,C.fDP,C.fDQ,C.fDR,C.fLJ,C.foh,C.fqK,C.fqL,C.fqN,C.fqO,C.fDA,C.fLE,C.fLF,C.fLG,C.fnZ,C.fo_,C.fLP,C.fnz,C.fnA,C.fLp,C.frw,C.fDw,C.fqH,C.fqI,C.fDs,C.fak,C.fal,C.fam,C.fan,C.fao,C.faC,C.fay,C.faz,C.feK,C.feL,C.fgT,C.flF,C.flG])
u(A.au,[C.aXk,C.ajF,C.aT6,C.XU,C.b8L,C.bd0,C.bgJ,C.buk,C.bk4,C.acg,C.bgI,C.acf,C.bgH,C.aAx,C.aGI,C.ach,C.Jn,C.bd1,C.aby,C.bd_,C.bd4,C.aXi,C.arh,C.acC])
u(A.mJ,[C.b9m,C.baz,C.baq,C.aFA,C.bfM,C.bd3,C.bc7,C.bhR,C.bu9])
u(A.j4,[C.fEV,C.fEW,C.fEX,C.fEO,C.fEP,C.fF_,C.fF0,C.dDX,C.dDJ,C.dDM,C.dDq,C.dDr,C.dDs,C.dDp,C.dDx,C.dDo,C.dDy,C.dDz,C.dDn,C.dDA,C.dDm,C.dDB,C.dDl,C.dDC,C.dDd,C.dDe,C.dDk,C.dDD,C.dDi,C.dDE,C.dDh,C.dDt,C.dDg,C.dDu,C.dDc,C.dDv,C.dDw,C.dDY,C.dDZ,C.dDN,C.dDO,C.dDP,C.dDQ,C.dDR,C.dDS,C.dDT,C.dE4,C.dDW,C.foD,C.d3M,C.d3K,C.d3L,C.d3N,C.d4q,C.d4f,C.d4c,C.d3P,C.d4g,C.d3V,C.d3W,C.d3Y,C.d4e,C.d3U,C.d4_,C.d4n,C.d49,C.d48,C.d4a,C.d4b,C.d44,C.d46,C.d47,C.d40,C.d4j,C.d4m,C.d3R,C.d3S,C.d6b,C.d6a,C.d69,C.d68,C.d6f,C.d67,C.d6g,C.d4G,C.d4H,C.d4I,C.d4L,C.d4E,C.d4D,C.cDK,C.cX9,C.cXm,C.cXl,C.cXB,C.cXk,C.cXC,C.cXj,C.cXi,C.cXE,C.cXh,C.cXu,C.cXt,C.cXL,C.dRY,C.dRX,C.dS_,C.dS0,C.dS1,C.dRW,C.dS3,C.dS2,C.dRm,C.dRn,C.dRp,C.dQT,C.dR6,C.dR5,C.dR8,C.dRi,C.dRb,C.dRa,C.dRc,C.dR9,C.dRd,C.dRe,C.dRh,C.dQH,C.dRk,C.dQL,C.dQO,C.dQQ,C.dRq,C.dQW,C.dQU,C.dQY,C.dQZ,C.dQV,C.dR_,C.dR3,C.dRz,C.dRA,C.dRs,C.dRv,C.dRw,C.dRx,C.dRC,C.dRt,C.dQR,C.d4P,C.d4O,C.d4T,C.d52,C.d4U,C.eJf,C.dl2,C.dl_,C.dl0,C.dla,C.dl9,C.dl8,C.dli,C.dl7,C.dlj,C.dl6,C.dlk,C.dl5,C.dll,C.dl4,C.dl3,C.dle,C.dlo,C.dlx,C.dRM,C.dRQ,C.dRR,C.dRI,C.dRJ,C.dRK,C.dRP,C.dRT,C.dRS,C.dRD,C.dRE,C.dRF,C.dRG,C.dRH,C.dD5,C.fEw,C.cex,C.cXX,C.cXW,C.cY_,C.cXT,C.cXV,C.cvw,C.cvC,C.cvD,C.cvB,C.cvF,C.cvA,C.cvx,C.cvy,C.cvJ,C.f6y,C.f6z,C.eGq,C.eGh,C.eGi,C.eGj,C.eGl,C.eGm,C.eGp,C.eGc,C.eGf,C.eGr,C.eGd,C.eGu,C.eGv,C.eGw,C.eGx,C.eGt,C.eG7,C.eG8,C.eG9,C.eGb,C.eGa,C.eGQ,C.eGR,C.eGz,C.eGA,C.eGH,C.eGI,C.eGJ,C.eGD,C.eGE,C.eGX,C.eGW,C.eGY,C.eGV,C.eGy,C.eGC,C.eGT,C.eGS,C.eGN,C.eGO,C.eGM,C.eGL])
u(A.ag,[C.ani,C.S4,C.YB,C.YF,C.YD,C.Yb,C.aoo,C.aoi,C.Ze,C.aom,C.Zz,C.ZA,C.a5p,C.Yd,C.Yc,C.XL,C.a0h,C.F8,C.avZ,C.arg,C.ara,C.arf,C.Nz])
u(A.ah,[C.aBx,C.bcY,C.ayA,C.bdi,C.ayB,C.bax,C.aC7,C.aC4,C.aAw,C.aC6,C.aC5,C.bib,C.aK1,C.axm,C.axl,C.aw5,C.buc,C.aMa,C.aMb,C.aDC,C.bjy,C.aDB,C.bvY])
u(A.kg,[C.dDI,C.dDK,C.dDF,C.dE3,C.fqG,C.bMc,C.d4p,C.d4o,C.d45,C.d4k,C.d4l,C.d4M,C.dRf,C.dR0,C.dRB,C.d51,C.d50,C.d4Z,C.d53,C.d56,C.d57,C.d4S,C.d4W,C.d4Y,C.d5a,C.c6R,C.c6Z,C.c73,C.dD6,C.fEy,C.fEx,C.f6v,C.f6w,C.eGn,C.eGU,C.cuY,C.fe5,C.f9P,C.fqM,C.fnB,C.fqJ,C.faB,C.faA,C.feM])
t(C.bhS,C.aK1)
u(A.m6,[C.aaB,C.aIn,C.H9,C.ajG,C.cuZ,C.cv_])
t(C.bua,C.aMa)
t(C.bub,C.aMb)
t(C.aDD,C.bvY)
t(C.b7d,A.b71)
t(C.bud,A.a54)
t(C.b7c,C.bud)
w(C.aK1,A.eV)
w(C.aMa,A.c9)
w(C.aMb,A.c9)
v(C.bvY,A.ey)
v(C.bud,A.j_)})()
A.jU(b.typeUniverse,JSON.parse('{"aXk":{"au":[],"r":[]},"b9m":{"aB":[]},"ani":{"ag":[],"r":[]},"aBx":{"ah":["ani"]},"S4":{"ag":[],"r":[]},"ajF":{"au":[],"r":[]},"aT6":{"au":[],"r":[]},"bcY":{"ah":["S4"]},"YB":{"ag":[],"r":[]},"YF":{"ag":[],"r":[]},"YD":{"ag":[],"r":[]},"Yb":{"ag":[],"r":[]},"ayA":{"ah":["YB"]},"bdi":{"ah":["YF"]},"ayB":{"ah":["YD"]},"XU":{"au":[],"r":[]},"baz":{"aB":[]},"baq":{"aB":[]},"bax":{"ah":["Yb"]},"aFA":{"aB":[]},"bfM":{"aB":[]},"b8L":{"au":[],"r":[]},"aoo":{"ag":[],"r":[]},"aoi":{"ag":[],"r":[]},"Ze":{"ag":[],"r":[]},"ach":{"au":[],"r":[]},"aC7":{"ah":["aoo"]},"aC4":{"ah":["aoi"]},"bd0":{"au":[],"r":[]},"bd3":{"aB":[]},"bgJ":{"au":[],"r":[]},"bc7":{"aB":[]},"buk":{"au":[],"r":[]},"bk4":{"au":[],"r":[]},"aAw":{"ah":["Ze"]},"acg":{"au":[],"r":[]},"bgI":{"au":[],"r":[]},"acf":{"au":[],"r":[]},"bgH":{"au":[],"r":[]},"aAx":{"au":[],"r":[]},"aGI":{"au":[],"r":[]},"Jn":{"au":[],"r":[]},"aom":{"ag":[],"r":[]},"Zz":{"ag":[],"r":[]},"ZA":{"ag":[],"r":[]},"aC6":{"ah":["aom"]},"bd1":{"au":[],"r":[]},"aby":{"au":[],"r":[]},"bd_":{"au":[],"r":[]},"bd4":{"au":[],"r":[]},"aC5":{"ah":["Zz"]},"bib":{"ah":["ZA"]},"aXi":{"au":[],"r":[]},"a5p":{"ag":[],"r":[]},"bhS":{"ah":["a5p"]},"bhR":{"aB":[]},"arh":{"au":[],"r":[]},"Yd":{"ag":[],"r":[]},"Yc":{"ag":[],"r":[]},"XL":{"ag":[],"r":[]},"a0h":{"ag":[],"r":[]},"axm":{"ah":["Yd"]},"axl":{"ah":["Yc"]},"aw5":{"ah":["XL"]},"buc":{"ah":["a0h"]},"F8":{"ag":[],"r":[]},"avZ":{"ag":[],"r":[]},"bua":{"ah":["F8"]},"bub":{"ah":["avZ"]},"bu9":{"aB":[]},"arg":{"ag":[],"r":[]},"aDC":{"ah":["arg"]},"acC":{"au":[],"r":[]},"ara":{"ag":[],"r":[]},"arf":{"ag":[],"r":[]},"bjy":{"ah":["ara"]},"aDB":{"ah":["arf"]},"Nz":{"ag":[],"r":[]},"aDD":{"ah":["Nz"],"ey":[]},"b7c":{"j_":[],"fe":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aPT"),Q:w("qR"),n:w("bm<n,n>"),c5:w("aRR"),dY:w("aRS"),d:w("eS<n?>"),e:w("H8"),B:w("n8"),P:w("hV"),k:w("kA"),x:w("ay<~>"),f5:w("O<a2g>"),V:w("O<ac>"),t:w("O<qR>"),O:w("O<w>"),ac:w("O<eS<n?>>"),I:w("O<n8>"),u:w("O<hV>"),_:w("O<kA>"),cl:w("O<ay<ai<a4<n,@>>>>"),R:w("O<na>"),cq:w("O<ai<+(N,N)>>"),ez:w("O<a4<n,aC>>"),gE:w("O<a4<n,n>>"),c7:w("O<a4<n,@>>"),fD:w("O<mn>"),bp:w("O<ob>"),g:w("O<u>"),v:w("O<hn>"),L:w("O<+(n,n)>"),G:w("O<+(N,N)>"),bF:w("O<+count,id,name(H,n,n)>"),A:w("O<cP>"),s:w("O<n>"),aS:w("O<iP>"),p:w("O<r>"),C:w("O<fe>"),D:w("O<lh>"),fp:w("O<Jr>"),M:w("O<Jz>"),gZ:w("O<aFF>"),Y:w("O<adP>"),E:w("O<aHG>"),F:w("O<N>"),dC:w("O<H>"),dS:w("O<aB?>"),d4:w("O<n?>"),J:w("cs<ah<ag>>"),b:w("ai<n8>"),do:w("ai<hV>"),r:w("ai<kA>"),U:w("ai<a4<n,@>>"),gk:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),h:w("ai<n>"),c:w("ai<lh>"),j:w("ai<@>"),fK:w("bv<n,n>"),d2:w("bv<n,ai<a4<n,@>>>"),a:w("a4<n,@>"),f:w("a4<@,@>"),gv:w("K<n,Ha>"),w:w("iz"),g2:w("rb"),bV:w("anb"),fL:w("cq"),K:w("aC"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(N,ai<hV>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),e7:w("bo<N>"),gc:w("dD"),b4:w("cx<H>"),W:w("kc<n>"),l:w("r"),cM:w("fe"),i:w("lh"),cc:w("Fk"),bw:w("acf<n?>"),cy:w("JB"),q:w("mX"),y:w("R"),gR:w("N"),z:w("@"),S:w("H"),eK:w("ai<kA>?"),m:w("aol?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),X:w("+qrPayload,token,usesRemaining(n,n,H)?"),gF:w("+members,trees,viewOnly(H,H,R)?"),Z:w("pO?"),T:w("n?"),aD:w("dD?"),o:w("lh?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aWw=new A.bq(B.hd,B.bE,B.hd,B.bE)
D.a9p=new A.bq(B.hd,B.jG,B.hd,B.jG)
D.aWI=new A.bq(B.ii,B.bE,B.bE,B.bE)
D.aWM=new A.aA(B.d_,1.4,B.q,-1)
D.aWW=new A.aA(B.ad,1,B.q,-1)
D.aYl=new A.aY(0,1/0,64,1/0)
D.aYp=new A.aY(0,84,0,1/0)
D.awS=w([B.lD,B.qJ,B.c],x.O)
D.bTe=new A.a8(B.ax,B.aC,B.x,D.awS,null,null)
D.aZ9=new A.o(null,null,null,null,null,D.bTe,B.n)
D.cXH=w([B.aV,B.bW],x.O)
D.bVl=new A.a8(B.b0,B.b6,B.x,D.cXH,null,null)
D.aZt=new A.o(null,null,null,null,null,D.bVl,B.n)
D.b4E=new A.fj(null,null,null,null,null,E.jN,null,null,null,null)
D.aaI=new A.cr(B.A,null,null,D.b4E,null)
D.kb=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eXx=new A.G(!0,D.kb,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffr=new A.x("No books on the shelf yet.",null,D.eXx,null,null,null,null,null,null,null,null,null)
D.e4j=new A.C(B.nT,D.ffr,null)
D.b38=new A.cr(B.A,null,null,D.e4j,null)
D.b41=new A.cr(B.A,null,null,Z.Ve,null)
D.b62=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b6v=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.abW=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b99=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b9r=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.ade=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bdd=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bdD=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.Eo=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.bfd=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bhz=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.aeU=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.fa3=new A.x("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bmT=new A.eS(null,D.fa3,B.f1,null,x.d)
D.fiD=new A.x("None",null,null,null,null,null,null,null,null,null,null,null)
D.bmV=new A.eS(null,D.fiD,B.f1,null,x.d)
D.bns=new A.b9(38e5)
D.boc=new A.ia(0,10,0,10)
D.bom=new A.Q(0,1,0,0)
D.bow=new A.ia(0,4,0,4)
D.boO=new A.Q(10,10,14,10)
D.bp_=new A.ia(10,4,10,4)
D.bp7=new A.ia(10,8,10,8)
D.bp8=new A.Q(10,8,8,8)
D.bpy=new A.Q(12,6,12,2)
D.bpP=new A.Q(14,10,6,6)
D.bpQ=new A.Q(14,12,14,0)
D.bpU=new A.Q(14,12,14,8)
D.bpX=new A.Q(14,12,8,14)
D.bq_=new A.ia(14,14,14,14)
D.bqE=new A.Q(16,2,16,10)
D.bqO=new A.Q(16,6,16,30)
D.bqQ=new A.Q(16,6,16,8)
D.ahf=new A.Q(18,16,18,8)
D.brq=new A.Q(18,20,18,22)
D.ahj=new A.Q(18,24,18,24)
D.brw=new A.Q(18,30,18,30)
D.brO=new A.Q(20,10,12,20)
D.bs1=new A.Q(20,18,16,18)
D.bs3=new A.Q(20,18,20,6)
D.bsS=new A.Q(24,32,24,28)
D.bsT=new A.Q(24,36,24,32)
D.bsX=new A.Q(26,26,24,14)
D.bta=new A.Q(2,4,2,8)
D.bte=new A.Q(30,0,30,0)
D.btp=new A.Q(38,22,22,22)
D.ahB=new A.Q(40,24,24,24)
D.btr=new A.ia(40,40,40,40)
D.btt=new A.Q(46,30,30,30)
D.ahE=new A.Q(4,0,0,8)
D.btV=new A.Q(56,40,40,40)
D.btZ=new A.Q(1.25,1.25,1.25,1.25)
D.bu_=new A.Q(60,0,60,0)
D.bu2=new A.Q(6,14,6,16)
D.buf=new A.ia(7,3,7,3)
D.buL=new A.Q(5,1.5,5,1.5)
D.buW=new A.Q(6,2.5,6,2.5)
D.fum=new A.x("Signature",null,B.nq,null,null,null,null,null,null,null,null,null)
D.bvg=new A.bD(1,B.bi,D.fum,null)
D.frz=new A.x("Tell the AI what to fix",null,B.ds,null,null,null,null,null,null,null,null,null)
D.bw0=new A.bD(1,B.bi,D.frz,null)
D.f3M=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftu=new A.x("Worksheets",null,D.f3M,null,null,null,null,null,null,null,null,null)
D.f3U=new A.G(!0,E.abs,null,null,null,null,13,B.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsp=new A.x("Track your project spending",null,D.f3U,null,null,null,null,null,null,null,null,null)
D.cPZ=w([D.ftu,B.at,D.fsp],x.p)
D.bkr=new A.fq(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cPZ,null)
D.bw5=new A.bD(1,B.bi,D.bkr,null)
D.f_4=new A.G(!0,E.jN,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9h=new A.x("FAMILY LIBRARY",null,D.f_4,null,null,null,null,null,null,null,null,null)
D.bwm=new A.bD(1,B.bi,D.f9h,null)
D.Ma=new C.H8("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.Z5=new C.H9(0,"male")
D.aiw=new C.H9(1,"female")
D.xD=new C.H9(2,"unknown")
D.tA=new C.ajG(0,"owner")
D.Mb=new C.ajG(1,"editor")
D.ki=new C.ajG(2,"viewer")
D.aji=new A.a0(61199,"MaterialIcons",!1)
D.bAl=new A.a0(61504,"MaterialIcons",!1)
D.bAm=new A.a0(61505,"MaterialIcons",!1)
D.bAo=new A.a0(61587,"MaterialIcons",!1)
D.bAv=new A.a0(61890,"MaterialIcons",!1)
D.bBo=new A.a0(63034,"MaterialIcons",!0)
D.bCd=new A.a0(63429,"MaterialIcons",!1)
D.alz=new A.a0(984520,"MaterialIcons",!1)
D.bAV=new A.a0(62776,"MaterialIcons",!1)
D.bEy=new A.ae(D.bAV,26,B.aZ,null,null,null)
D.bzj=new A.a0(57648,"MaterialIcons",!1)
D.bEQ=new A.ae(D.bzj,14,B.c,null,null,null)
D.bF6=new A.ae(B.Fx,17,null,null,null,null)
D.bFC=new A.ae(E.ZZ,null,null,null,null,null)
D.bFF=new A.ae(B.jg,18,E.jN,null,null,null)
D.ZL=new A.a0(62044,"MaterialIcons",!1)
D.bFL=new A.ae(D.ZL,null,B.aV,null,null,null)
D.bGA=new A.ae(B.dW,16,null,null,null,null)
D.bGH=new A.ae(D.ZL,32,B.aV,null,null,null)
D.bH_=new A.ae(E.ajj,18,B.d_,null,null,null)
D.bI2=new A.ae(B.FH,22,B.ay,null,null,null)
D.bIe=new A.ae(B.dW,22,B.aZ,null,null,null)
D.bIp=new A.ae(Q.ZQ,22,B.c,null,null,null)
D.bIu=new A.ae(B.tJ,52,B.c,null,null,null)
D.bIE=new A.ae(B.FH,30,B.ay,null,null,null)
D.amb=new A.ae(B.tS,22,B.c,null,null,null)
D.bJ5=new A.ae(B.dW,17,null,null,null,null)
D.bJo=new A.ae(B.vx,26,B.d_,null,null,null)
D.bK7=new A.ae(B.a_a,16,null,null,null,null)
D.bKR=new A.ae(B.tJ,24,B.c,null,null,null)
D.bKW=new A.ae(B.MD,20,B.rf,null,null,null)
D.bL0=new A.ae(B.Fv,null,B.bW,null,null,null)
D.bL7=new A.ae(B.jg,18,B.c,null,null,null)
D.bLJ=new A.ae(B.cA,22,B.ad,null,null,null)
D.bMy=new A.ae(B.e5,16,B.ad,null,null,null)
D.bMK=new A.ae(D.ZL,20,B.aV,null,null,null)
D.amC=new A.ae(B.hz,20,null,null,null,null)
D.bNe=new A.ae(B.cA,18,D.kb,null,null,null)
D.bNw=new A.ae(B.xZ,28,B.c,null,null,null)
D.bNE=new A.ae(B.Mt,null,B.fZ,null,null,null)
D.bNY=new A.ae(B.xZ,24,B.c,null,null,null)
D.bOp=new A.ae(B.tJ,null,B.aV,null,null,null)
D.bOq=new A.ae(B.jz,20,B.d_,null,null,null)
D.bOK=new A.ae(B.Fx,16,null,null,null,null)
D.bQg=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jw,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ey,!0,null,null,null,null)
D.d3M=w([B.bt,B.aV,B.f8,B.aZ],x.O)
D.bRH=new A.a8(B.ax,B.aC,B.x,D.d3M,null,null)
D.be8=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bju=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cMX=w([D.be8,D.bju],x.O)
D.bRS=new A.a8(B.b0,B.b6,B.x,D.cMX,null,null)
D.cZq=w([B.eX,B.fu,B.f8],x.O)
D.bRW=new A.a8(B.ax,B.aC,B.x,D.cZq,null,null)
D.adR=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b6w=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cOS=w([D.adR,D.b6w],x.O)
D.bSu=new A.a8(B.b0,B.b6,B.x,D.cOS,null,null)
D.b9D=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.awg=w([D.b9D,D.adR],x.O)
D.bSO=new A.a8(B.ax,B.aC,B.x,D.awg,null,null)
D.acN=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.bbI=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cYC=w([D.acN,D.bbI],x.O)
D.bTp=new A.a8(B.a3,B.a7,B.x,D.cYC,null,null)
D.d9N=w([B.bI,B.mU],x.O)
D.bTr=new A.a8(B.b0,B.b6,B.x,D.d9N,null,null)
D.be4=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.daE=w([D.be4,D.kb,D.kb,Aj.Wz],x.O)
D.dcP=w([0,0.07,0.9,1],x.F)
D.bTX=new A.a8(B.a3,B.a7,B.x,D.daE,D.dcP,null)
D.bU7=new A.a8(B.ax,B.aC,B.x,B.Qa,null,null)
D.d9o=w([B.aZ,B.aV,B.bW],x.O)
D.bV6=new A.a8(B.ax,B.aC,B.x,D.d9o,null,null)
D.cfy=w([B.bt,B.aZ,B.eX],x.O)
D.cfF=w([B.by,B.aE,B.jq],x.O)
D.cfH=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bcK=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.clL=w([D.bcK,E.adx],x.O)
D.e08=new A.u(1,2)
D.eJh=new A.cP(B.aX,D.e08,3)
D.ato=w([D.eJh],x.A)
D.ct_=w([B.h1,B.c9,B.f7],x.O)
D.cvD=w([B.bJ,B.bu,B.bm],x.O)
D.bwP=new C.u2("classic","Classic leather","Gold-edged brown leather",D.awg,E.jN,E.jN,"\u2766",B.L,!0,!1,!1,!1)
D.b5R=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bip=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cRz=w([D.b5R,D.bip],x.O)
D.adB=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bwK=new C.u2("ornate","Ornate gold","Double gold border and flourishes",D.cRz,D.adB,D.adB,"\u2726",B.L,!0,!0,!0,!1)
D.b9i=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.beQ=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cJZ=w([D.b9i,D.beQ],x.O)
D.bwJ=new C.u2("parchment","Parchment","Old paper with dark ink",D.cJZ,D.Eo,G.ir,"\u2767",B.L,!0,!1,!1,!0)
D.ab9=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bgT=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.d7P=w([D.ab9,D.bgT],x.O)
D.bck=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bgf=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bwM=new C.u2("minimal","Clean paper","Plain and elegant, like a printed book",D.d7P,D.bck,D.bgf,"",B.L,!0,!0,!1,!0)
D.bwO=new C.u2("midnight","Midnight","Deep blue with silver stars",L.awz,B.cp,B.bM,"\u2727",B.L,!0,!0,!1,!1)
D.bwI=new C.u2("emerald","Emerald library","Green cloth, title on the left",A_.atN,E.jN,B.h2,"\u25c6",B.bg,!0,!1,!1,!1)
D.bhg=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.d6f=w([B.er,D.bhg],x.O)
D.bdm=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.bes=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bwN=new C.u2("rose","Rose vintage","Burgundy with rose-gold lettering",D.d6f,D.bdm,D.bes,"\u2740",B.L,!0,!1,!0,!1)
D.dah=w([B.cC,P.mV],x.O)
D.bwL=new C.u2("modern","Modern","Dark, bold, left-aligned",D.dah,B.aS,B.c,"",B.bg,!1,!0,!1,!1)
D.a13=w([D.bwP,D.bwK,D.bwJ,D.bwM,D.bwO,D.bwI,D.bwN,D.bwL],A.ax("O<u2>"))
D.cJv=w([B.bW,B.bk],x.O)
D.bdV=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cKa=w([D.ab9,D.bdV],x.O)
D.b9e=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cLI=w([D.b9e,B.db],x.O)
D.cNb=w([B.b8,B.iM,B.om],x.O)
D.cNy=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b6s=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.bb2=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.dcL=w([D.acN,D.b6s,D.bb2],x.O)
D.bwQ=new C.u3("leather","Leather",D.dcL,"vintage")
D.cUv=w([B.dq,B.Ku,A3.VL],x.O)
D.bwX=new C.u3("midnight","Midnight",D.cUv,"starry")
D.cNc=w([B.f6,B.e3,B.l7],x.O)
D.bwW=new C.u3("forest","Forest",D.cNc,"story")
D.deB=w([B.eM,B.er,B.kc],x.O)
D.bwT=new C.u3("burgundy","Burgundy",D.deB,"royal")
D.cvd=w([B.aE,B.pl,B.nz],x.O)
D.bwU=new C.u3("royal","Royal",D.cvd,"royal")
D.cPu=w([B.bu,B.cC,P.mV],x.O)
D.bwR=new C.u3("charcoal","Charcoal",D.cPu,"geo")
D.dcT=w([B.cd,B.dO,B.wW],x.O)
D.bwV=new C.u3("sunset","Sunset",D.dcT,"sunset")
D.ddw=w([B.iM,B.Ep,B.VP],x.O)
D.bwS=new C.u3("ocean","Ocean",D.ddw,"band")
D.yv=w([D.bwQ,D.bwX,D.bwW,D.bwT,D.bwU,D.bwR,D.bwV,D.bwS],A.ax("O<u3>"))
D.cPS=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cQp=w([B.ak,B.aK,B.M],x.O)
D.cRE=w([B.er,B.e3,B.dq,B.fv,B.x_,B.d_,B.jQ,B.eu,B.d8],x.O)
D.cRF=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eJi=new A.cP(B.dn,B.dE,8)
D.cRO=w([D.eJi],x.A)
D.cSR=w([B.bU,B.dO,B.kF],x.O)
D.cTi=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cUr=w([B.bU,B.hf],x.O)
D.cWm=w([B.aM,B.wX,B.wO],x.O)
D.cXd=w([B.bK,B.cg,B.dw,B.aM],x.O)
D.cXI=w([B.j6,B.cd,B.t4],x.O)
D.cYb=w([B.eX,B.d_],x.O)
D.cYH=w([B.ct,B.fD,B.hu],x.O)
D.cYS=w([B.aS,B.bk,B.dq],x.O)
D.cZn=w([B.es,B.cZ,B.e3],x.O)
D.cZE=w([B.dS,B.dq,B.Ku],x.O)
D.d_T=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a1X=w(["leather","linen","plain","stars","rays"],x.s)
D.bEe=new A.a0(985219,"MaterialIcons",!1)
D.bDN=new A.a0(983781,"MaterialIcons",!1)
D.aw_=w([B.ajI,B.hZ,B.lK,B.i_,D.bEe,B.FR,B.pJ,D.bDN,L.alm,B.y0,B.pL,B.mm],A.ax("O<a0>"))
D.a21=w(["double","single","corners","none"],x.s)
D.d2x=w([B.dA,B.bn,B.eu],x.O)
D.d2K=w([],x.t)
D.BU=w([],x.u)
D.d4V=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.d79=w([B.aH,B.fD,B.fv],x.O)
D.d8p=w([B.cj,B.nF,B.WK],x.O)
D.d8C=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dre=new C.lx("construction","Construction","Jobsite & builds",B.xQ)
D.drl=new C.lx("house","Home Build","Houses & rooms",B.vs)
D.drb=new C.lx("grocery","Grocery","Store & pantry",B.a_G)
D.dra=new C.lx("calculator","Calculations","Math & estimates",B.MO)
D.drj=new C.lx("lumber","Materials","Lumber & supplies",B.N4)
D.dr7=new C.lx("kitchen","Kitchen","Remodel & meals",A9.akw)
D.bDK=new A.a0(983756,"MaterialIcons",!1)
D.drc=new C.lx("landscape","Landscaping","Yard & garden",D.bDK)
D.dr6=new C.lx("plumbing","Plumbing","Pipes & water",B.pU)
D.drm=new C.lx("electrical","Electrical","Wiring & power",B.h7)
D.dr4=new C.lx("store","Retail Shop","Daily business",B.kM)
D.dr5=new C.lx("paint_remodel","Paint & Remodel","Colors & walls",Aa.a_g)
D.bD9=new A.a0(983311,"MaterialIcons",!1)
D.dri=new C.lx("roofing","Roofing","Roofs & exteriors",D.bD9)
D.bDX=new A.a0(983986,"MaterialIcons",!1)
D.dr3=new C.lx("warehouse","Warehouse","Storage & stock",D.bDX)
D.drg=new C.lx("vehicles","Vehicles","Fleet & transport",B.FS)
D.bAX=new A.a0(62785,"MaterialIcons",!1)
D.dr9=new C.lx("farm","Farm","Crops & livestock",D.bAX)
D.dr8=new C.lx("restaurant","Restaurant","Food & catering",B.tQ)
D.drf=new C.lx("tools","Tools","Workshop gear",B.FO)
D.drk=new C.lx("wallet","Cash & Wallet","Quick spending",B.jz)
D.bC8=new A.a0(63395,"MaterialIcons",!1)
D.drh=new C.lx("concrete","Concrete","Foundation work",D.bC8)
D.drd=new C.lx("blueprint","Blueprint","Plans & design",Af.ajO)
D.a2s=w([D.dre,D.drl,D.drb,D.dra,D.drj,D.dr7,D.drc,D.dr6,D.drm,D.dr4,D.dr5,D.dri,D.dr3,D.drg,D.dr9,D.dr8,D.drf,D.drk,D.drh,D.drd],A.ax("O<lx>"))
D.d95=w([B.bq,B.bn],x.O)
D.d9O=w([B.i6,B.nD,B.dG],x.O)
D.a2A=w(["top","middle","bottom"],x.s)
D.dc9=w([B.cr,B.bk,B.dq],x.O)
D.dcG=w([B.b4,B.cZ,B.e3],x.O)
D.dew=w([B.bJ,B.ak],x.O)
D.dex=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dYN={top:0,middle:1,bottom:2}
D.dhI=new A.bm(D.dYN,["Top","Middle","Bottom"],x.n)
D.dYr={double:0,single:1,corners:2,none:3}
D.dhN=new A.bm(D.dYr,["Double line","One line","Corners","None"],x.n)
D.dZz={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dja=new A.bm(D.dZz,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.djm=new A.bm(B.i2,[],A.ax("bm<H,+(n,n)>"))
D.dYF={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.C4=new A.bm(D.dYF,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bm<n,H>"))
D.dlO=new F.Ms(32,null)
D.dlP=new F.Ms(40,null)
D.dlQ=new F.Ms(46,null)
D.aFb=new C.arf(null)
D.e16=new A.u(8,14)
D.fg3=new A.x("Write a new book",null,B.i4,null,B.L,null,null,null,null,null,null,null)
D.e3N=new A.C(B.lb,D.fg3,null)
D.alN=new A.ae(B.hy,18,B.c,null,null,null)
D.f9C=new A.x("Add",null,B.mD,null,null,null,null,null,null,null,null,null)
D.cXs=w([D.alN,B.q9,D.f9C],x.p)
D.eHf=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cXs,null)
D.e46=new A.C(B.nS,D.eHf,null)
D.e47=new A.C(E.ag2,Z.Ve,null)
D.f3H=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcB=new A.x("New Project",null,D.f3H,null,null,null,null,null,null,null,null,null)
D.d0e=w([D.alN,B.ab,D.fcB],x.p)
D.eHi=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d0e,null)
D.e4i=new A.C(B.ix,D.eHi,null)
D.feR=new A.x("Choose your header",null,U.rA,null,null,null,null,null,null,null,null,null)
D.e4D=new A.C(B.hw,D.feR,null)
D.b4T=new A.fj(2.2,null,null,null,null,B.d_,null,null,null,null)
D.eLV=new A.a7(22,22,D.b4T,null)
D.b34=new A.cr(B.A,null,null,D.eLV,null)
D.e4I=new A.C(B.XF,D.b34,null)
D.bq8=new A.Q(14,2,14,6)
D.fs8=new A.x("The top of your book. Tap a design to see it.",null,T.SW,null,null,null,null,null,null,null,null,null)
D.e4J=new A.C(D.bq8,D.fs8,null)
D.e6g=new A.iN(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.e6j=new A.iN(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aGq=new A.iN(1,0.9607843137254902,0.48627450980392156,0)
D.HT=new A.iN(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.z1=new A.iN(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.e6p=new A.iN(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fOp=new C.bfM(null)
D.blk=new A.me(D.fOp,null,B.au,null,null)
D.aK4=new A.cL(0,0,0,0,null,null,D.blk,null)
D.etE=new A.y(-42,42)
D.eC0=new A.cH([0,0,1,1])
D.aLm=new A.a9(0,0,520,160)
D.aLz=new A.b7(B.rO,B.Y)
D.frH=new A.x("Let the AI write it from your tree",null,B.kv,null,B.L,null,null,null,null,null,null,null)
D.bxt=new A.dq(1,B.cl,D.frH,null)
D.cUq=w([E.a08,B.ab,D.bxt],x.p)
D.eGY=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cUq,null)
D.f9i=new A.x("Save member",null,B.ce,null,null,null,null,null,null,null,null,null)
D.d7q=w([D.amC,B.ab,D.f9i],x.p)
D.eH5=new A.cn(B.aO,B.bb,B.j,B.m,null,B.p,null,0,D.d7q,null)
D.bIj=new A.ae(B.hL,14,B.aZ,null,null,null)
D.eYL=new A.G(!0,B.aZ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd0=new A.x("Cashier",null,D.eYL,null,null,null,null,null,null,null,null,null)
D.d0K=w([D.bIj,B.bp,D.fd0],x.p)
D.eH7=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d0K,null)
D.f9j=new A.x("Transfer & settings",null,B.ds,null,null,null,null,null,null,null,null,null)
D.bvS=new A.bD(1,B.bi,D.f9j,null)
D.cMG=w([D.amb,B.av,D.bvS],x.p)
D.eH8=new A.cn(B.aO,B.e,B.j,B.m,null,B.p,null,0,D.cMG,null)
D.eKF=new A.at(16,40)
D.eKK=new A.at(22,64)
D.eKR=new A.at(280,88)
D.eLB=new A.a7(30,null,null,null)
D.eMT=new A.hK(2,12,12,1.05,null)
D.fcH=new A.x("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eNB=new A.b1(D.fcH,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fcW=new A.x("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aNp=new A.b1(D.fcW,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fkT=new A.x("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eO4=new A.b1(D.fkT,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fuW=new A.x("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eO9=new A.b1(D.fuW,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.feP=new A.x("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eOg=new A.b1(D.feP,null,null,null,null,null,null,null,null,null,null,null,null,B.fH,!1,null,null,null,B.r,null)
D.fsl=new A.x("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aNt=new A.b1(D.fsl,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.f9T=new A.x("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eOG=new A.b1(D.f9T,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fvB=new A.x("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.ePp=new A.b1(D.fvB,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fqF=new A.x("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.ePO=new A.b1(D.fqF,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fv_=new A.x("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.ePR=new A.b1(D.fv_,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fmp=new A.x("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ePT=new A.b1(D.fmp,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fgE=new A.x("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.ePU=new A.b1(D.fgE,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fgF=new A.x("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eQU=new A.b1(D.fgF,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fcJ=new A.x("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eRb=new A.b1(D.fcJ,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.few=new A.x("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eRu=new A.b1(D.few,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.flV=new A.x("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eRK=new A.b1(D.flV,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fhr=new A.x("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eRL=new A.b1(D.fhr,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.eUK=new A.G(!0,D.kb,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV9=new A.G(!0,D.kb,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVN=new A.ru(!0,B.ro,null,null,null,null,B.dr,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eW3=new A.G(!0,D.kb,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWB=new A.G(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a6M=new A.ru(!0,B.Rw,null,null,null,null,B.dr,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXA=new A.G(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXZ=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZw=new A.G(!0,null,null,null,null,null,8,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZA=new A.G(!0,G.ir,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_P=new A.G(!0,B.M,null,null,null,null,13,B.a5,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0w=new A.G(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1f=new A.G(!0,B.bW,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1j=new A.G(!0,B.bI,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1G=new A.G(!0,D.Eo,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1P=new A.G(!0,B.aZ,null,null,null,null,13,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2N=new A.G(!0,B.d_,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3g=new A.G(!0,B.bW,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3F=new A.G(!0,B.aZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f55=new A.G(!0,B.ak,null,null,null,null,11.5,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5d=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPD=new A.G(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7f=new A.G(!0,B.ak,null,null,null,null,12,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6U=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7h=new A.G(!0,G.ir,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7o=new A.G(!0,G.ir,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f88=new A.x("Themes",null,B.oZ,null,null,null,null,null,null,null,null,null)
D.f8L=new A.x("Add Item",null,B.ce,null,null,null,null,null,null,null,null,null)
D.eZf=new A.G(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f98=new A.x("Debt receipt",null,D.eZf,null,B.L,null,null,null,null,null,null,null)
D.aPy=new A.G(!0,B.ak,null,null,null,null,11,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9p=new A.x("Person who owes",null,D.aPy,null,null,null,null,null,null,null,null,null)
D.fal=new A.x("Notes",null,B.a6T,null,null,null,null,null,null,null,null,null)
D.faL=new A.x("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.eYg=new A.G(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faP=new A.x("Share",null,D.eYg,null,null,null,null,null,null,null,null,null)
D.fbJ=new A.x("Move your family trees",null,D.aPD,null,null,null,null,null,null,null,null,null)
D.fcj=new A.x("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fcV=new A.x("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fe6=new A.x("Remove this book?",null,B.ho,null,null,null,null,null,null,null,null,null)
D.aQ2=new A.x("Download",null,B.ce,null,null,null,null,null,null,null,null,null)
D.ffd=new A.x("What should the AI do?",null,B.ds,null,null,null,null,null,null,null,null,null)
D.fgA=new A.x("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fhG=new A.x("Ribbon bookmark",null,B.iG,null,null,null,null,null,null,null,null,null)
D.f5_=new A.G(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fia=new A.x("NGMY.ORG",null,D.f5_,null,B.L,null,null,null,null,null,null,null)
D.fjp=new A.x("Scan family tree QR",null,B.cx,null,null,null,null,null,null,null,null,null)
D.f1y=new A.G(!0,B.c,null,null,null,null,13,B.a5,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk8=new A.x("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.f1y,null,B.L,null,null,null,null,null,null,null)
D.flk=new A.x("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.flr=new A.x("Thumbnail",null,B.oZ,null,null,null,null,null,null,null,null,null)
D.fm0=new A.x("Save the cover",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fmq=new A.x("Your photos",null,B.oZ,null,null,null,null,null,null,null,null,null)
D.fmF=new A.x("Create Project",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fn8=new A.x("Design your cover",null,U.rA,null,null,null,null,null,null,null,null,null)
D.fnf=new A.x("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fni=new A.x("PICTURE",null,H.mE,null,null,null,null,null,null,null,null,null)
D.fnE=new A.x("Paid",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fnG=new A.x("You can undo it right after.",null,T.T4,null,null,null,null,null,null,null,null,null)
D.fob=new A.x("Print",null,B.ut,null,null,null,null,null,null,null,null,null)
D.foy=new A.x("Amount owed",null,D.aPy,null,null,null,null,null,null,null,null,null)
D.foM=new A.x("Got it",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fpl=new A.x("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fpo=new A.x("Add to budget",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fpQ=new A.x("Debtor signature",null,B.a6T,null,null,null,null,null,null,null,null,null)
D.fpY=new A.x("Change icon",null,E.aOR,null,null,null,null,null,null,null,null,null)
D.fr7=new A.x("Family tree QR",null,B.cx,null,null,null,null,null,null,null,null,null)
D.frx=new A.x("Download",null,B.ut,null,null,null,null,null,null,null,null,null)
D.frB=new A.x("Change",null,B.oZ,null,null,null,null,null,null,null,null,null)
D.fsr=new A.x("Clear all",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fsu=new A.x("WHAT SHOULD IT CHANGE?",null,H.mE,null,null,null,null,null,null,null,null,null)
D.ft3=new A.x("COLOUR",null,H.mE,null,null,null,null,null,null,null,null,null)
D.ftf=new A.x("Do it",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fti=new A.x("Create Tree",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fug=new A.x("Create Family Tree",null,B.eV,null,null,null,null,null,null,null,null,null)
D.eTI=new A.G(!0,E.jN,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuw=new A.x("Write the first page myself",null,D.eTI,null,null,null,null,null,null,null,null,null)
D.fv2=new A.x("Use this header",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fv8=new A.x("Create Project",null,E.aPh,null,null,null,null,null,null,null,null,null)
D.fL1=new C.aaB(1,"header")
D.a84=new C.aaB(2,"projects")
D.fL2=new C.aaB(3,"cashier")
D.a85=new C.aaB(4,"familyTree")
D.fWq=new C.cuZ(0,"start")
D.fWr=new C.cv_(0,"start")
D.fLj=new C.XL(null)
D.fMi=new C.Yc(null)
D.djj=new A.bm(B.i2,[],A.ax("bm<n,Fk>"))
D.d35=w([],x.E)
D.d36=w([],x.M)
D.fMP=new C.bd2(D.djj,D.d35,D.d36,0,0,null,null)
D.fP3=new C.ZA(null)
D.a8N=new C.aIn(0,"projects")
D.aUa=new C.aIn(1,"cashier")
D.fUh=new C.aIn(2,"familyTree")})()};
(a=>{a["XCq+8Dd6xHXhL5reUWtLl5/UwNo="]=a.current})($__dart_deferred_initializers__);