((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,N,S,A2,G,F,E,O,A3,A4,A5,T,U,A6,A7,M,A8,H,A9,Aa,V,W,X,Ab,Ac,Y,Ad,Ae,Z,Af,Ag,Ah,K,Ai,A_,A0,P,Aj,L,Q,C={
bBp(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bBp=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.v5(null,""),$async$bBp)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.V(y.j)
t=A.n_(b1)
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
return A.b(A.qF(t,a1,B.hl,E.ER),$async$bBp)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.PP(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.V(l!=null&&A.Ku(l)?y.l:y.i)
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a1C(r,b2)
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
return A.b(A.v5(null,""),$async$afZ)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.V(y.j)
t=A.n_(b6)
s=x.S
r=A.dd(c1,0,A.dJ(4,"count",s),A.U(c1).c)
q=F.a1p(new A.K(r,new C.fuB(),r.$ti.k("K<ak.E,n>")).aI(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fuA(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.R.ao(b7,null)+"\nAllowed values: style one of "+B.d.aI(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$afZ)
case 6:l=c5
k=F.PP(l==null?"":l)
if(k==null)throw A.V("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.an7(s,D.diP,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
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
k=l==null?null:F.PP(l)
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
p=A.cD(new A.bc(h,s),new C.fuC(),s.k("J.E"),p)
p=F.a1p(A.p4(p,3,A.a3(p).k("J.E")).aI(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.B(new A.cu(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a1C(s,b9),$async$afZ)
case 13:b5=c5
for(s=J.a5(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.an7(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afZ,v)},
hiF(d,e,f){return A.ca(null,B.w.j(0.65),!1,null,new C.fDH(e,f),d,null,!0,!0,x.g2)},
an7:function an7(d,e,f){this.a=d
this.b=e
this.c=f},
fuB:function fuB(){},
fuA:function fuA(d){this.a=d},
fuC:function fuC(){},
fDH:function fDH(d,e){this.a=d
this.b=e},
bzd(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bzd=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b7(b1,new C.fjR())){u=null
w=1
break}t=B.d.da(b1,new C.fjS())
s=$.X()
r=new A.rU()
q=A.GE(r,D.aLa)
p=A.M()
p.r=B.c.gp(0)
q.aX(D.aLa,p)
o=A.M()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bO
o.e=B.fz
n=new C.fjX(t)
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
return A.b(r.qj().z0(520,160),$async$bzd)
case 4:w=3
return A.b(b3.hp(B.fW),$async$bzd)
case 3:b0=b3
u=b0==null?null:J.eW(B.dC.gaM(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzd,v)},
fsh(d){return C.hWX(d)},
hWX(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fsh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bes()
n=d.x!=null&&d.yH(null).length===0
if(d.x!=null)t=n?D.yZ:D.HR
else t=d.gT3()?D.HR:D.aGf
w=3
return A.b(C.bzd(d.ax),$async$fsh)
case 3:s=f
p.a=null
if(s!=null)p.a=A.alR(s)
r=A.a3v(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aGf}else{p.c=C.wr(q,!0)
p.b=n?D.yZ:D.HR}r.a2f(A.fNJ(new C.fsj(p,d,new C.fsk(),t,n,o),null,D.btb,B.vV))
u=r.jW(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fsh,v)},
fyV(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fyV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fsh(d),$async$fyV)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aK(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A7.G7(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fyV,v)},
fjR:function fjR(){},
fjS:function fjS(){},
fjX:function fjX(d){this.a=d},
fsk:function fsk(){},
fsj:function fsj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fsi:function fsi(){},
fE8(d,e){var w=0,v=A.j(x.H)
var $async$fE8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,B.w.j(0.55),!0,null,new C.fEc(new A.cr(null,x.J),e),d,null,!0,!0,x.H),$async$fE8)
case 2:return A.h(null,v)}})
return A.i($async$fE8,v)},
bBT(d,e,f,g){return C.i3k(d,e,f,g)},
i3k(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bBT=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gal(e.split(",")):e
r=B.cE.aJ(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.R(D.eQK)
w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.fE4(g,r,f),d,null,!0,!0,x.H),$async$bBT)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bBT,v)},
fEd(d,e){var w=0,v=A.j(x.H)
var $async$fEd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,null,!0,null,new C.fEg(new A.cr(null,x.J),e),d,null,!0,!0,x.H),$async$fEd)
case 2:return A.h(null,v)}})
return A.i($async$fEd,v)},
aXa:function aXa(d,e){this.c=d
this.a=e},
c0d:function c0d(){},
b9c:function b9c(d,e){this.b=d
this.a=e},
fEc:function fEc(d,e){this.a=d
this.b=e},
fE9:function fE9(d){this.a=d},
fEa:function fEa(d,e,f){this.a=d
this.b=e
this.c=f},
fEb:function fEb(d,e){this.a=d
this.b=e},
fE4:function fE4(d,e,f){this.a=d
this.b=e
this.c=f},
fE2:function fE2(d){this.a=d},
fE3:function fE3(d,e,f){this.a=d
this.b=e
this.c=f},
fEg:function fEg(d,e){this.a=d
this.b=e},
fEe:function fEe(d){this.a=d},
fEf:function fEf(d,e,f){this.a=d
this.b=e
this.c=f},
fnk(d,e){var w=0,v=A.j(x.y),u,t
var $async$fnk=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1a(d),$async$fnk)
case 3:t=g
J.nl(t,new C.fnl(e))
u=A.agC(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fnk,v)},
fnl:function fnl(d){this.a=d},
ane:function ane(d,e,f){this.c=d
this.d=e
this.a=f},
aBs:function aBs(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dDM:function dDM(d,e){this.a=d
this.b=e},
dDx:function dDx(d,e){this.a=d
this.b=e},
dDA:function dDA(d,e,f){this.a=d
this.b=e
this.c=f},
dDz:function dDz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dDy:function dDy(d,e){this.a=d
this.b=e},
dDB:function dDB(d,e){this.a=d
this.b=e},
dDv:function dDv(){},
dDw:function dDw(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dDu:function dDu(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dDf:function dDf(d){this.a=d},
dDg:function dDg(d,e,f){this.a=d
this.b=e
this.c=f},
dDh:function dDh(d,e){this.a=d
this.b=e},
dDe:function dDe(d){this.a=d},
dDm:function dDm(d,e){this.a=d
this.b=e},
dDd:function dDd(d){this.a=d},
dDn:function dDn(d,e,f){this.a=d
this.b=e
this.c=f},
dDo:function dDo(d,e,f){this.a=d
this.b=e
this.c=f},
dDc:function dDc(d,e){this.a=d
this.b=e},
dDp:function dDp(d,e,f){this.a=d
this.b=e
this.c=f},
dDb:function dDb(d,e){this.a=d
this.b=e},
dDq:function dDq(d,e){this.a=d
this.b=e},
dDa:function dDa(d){this.a=d},
dDr:function dDr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dD8:function dD8(){},
dD2:function dD2(d){this.a=d},
dD3:function dD3(d){this.a=d},
dD9:function dD9(d,e){this.a=d
this.b=e},
dDs:function dDs(d,e){this.a=d
this.b=e},
dD7:function dD7(d){this.a=d},
dDt:function dDt(d){this.a=d},
dD6:function dD6(){},
dDi:function dDi(d,e){this.a=d
this.b=e},
dD5:function dD5(d){this.a=d},
dDj:function dDj(d,e,f){this.a=d
this.b=e
this.c=f},
dD4:function dD4(d,e){this.a=d
this.b=e},
dD1:function dD1(d,e){this.a=d
this.b=e},
dDk:function dDk(d){this.a=d},
dDl:function dDl(d,e,f){this.a=d
this.b=e
this.c=f},
dDP:function dDP(){},
dDQ:function dDQ(d,e){this.a=d
this.b=e},
dDN:function dDN(d){this.a=d},
dDO:function dDO(d){this.a=d},
dDJ:function dDJ(d,e){this.a=d
this.b=e},
dDK:function dDK(d){this.a=d},
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
dDH:function dDH(d,e,f){this.a=d
this.b=e
this.c=f},
dDI:function dDI(d,e,f){this.a=d
this.b=e
this.c=f},
dDR:function dDR(){},
dDS:function dDS(){},
dDT:function dDT(){},
dDU:function dDU(d){this.a=d},
dDL:function dDL(d,e){this.a=d
this.b=e},
heT(d){return B.d.dL(D.a0X,new C.fnQ(d),new C.fnR())},
u_:function u_(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fnQ:function fnQ(d){this.a=d},
fnR:function fnR(){},
ajB:function ajB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aSZ:function aSZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
S3:function S3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcO:function bcO(){this.d=$
this.c=this.a=null},
d3B:function d3B(d,e){this.a=d
this.b=e},
d3z:function d3z(d,e){this.a=d
this.b=e},
d3A:function d3A(){},
d3C:function d3C(d,e){this.a=d
this.b=e},
h_K(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.n5(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
Kf(d,e){return C.hVA(d,e)},
hVA(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Kf=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Kf)
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
o=A.cD(o,new C.fpT(),o.$ti.k("J.E"),x.B)
n=A.a3(o).k("a2<J.E>")
o=A.B(new A.a2(o,new C.fpU(),n),n.k("J.E"))
B.d.b_(o,new C.fpV())
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
return A.i($async$Kf,v)},
As(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$As=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$As)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fCN(),x.a)
r=A.B(r,r.$ti.k("ak.E"))
w=4
return A.b(t.au("String","ngmy_family_book_v1_"+s+"_"+e,B.R.ao(r,null)),$async$As)
case 4:case 1:return A.h(u,v)}})
return A.i($async$As,v)},
aP8(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aP8=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Kf(d,e),$async$aP8)
case 2:u=h
t=J.cE(u)
s=t.bc(u,new C.fKR(f))
if(s===-1)t.ck(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.As(d,e,u),$async$aP8)
case 3:return A.h(null,v)}})
return A.i($async$aP8,v)},
bzG(d,e,f){var w=0,v=A.j(x.H),u
var $async$bzG=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Kf(d,e),$async$bzG)
case 2:u=h
J.nl(u,new C.fnc(f))
w=3
return A.b(C.As(d,e,u),$async$bzG)
case 3:return A.h(null,v)}})
return A.i($async$bzG,v)},
bzV(d,e){return C.hVz(d,e)},
hVz(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bzV=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bzV)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aT(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.M8
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
o=B.d.t(D.cPn,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.H4(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.M8
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.M8
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bzV,v)},
QT(d,e,f){return C.i2R(d,e,f)},
i2R(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$QT=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$QT)
case 7:r=h
w=8
return A.b(r.au("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.R.ao(f.af(),null)),$async$QT)
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
return A.i($async$QT,v)},
Qn(d,e){return C.hVB(d,e)},
hVB(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Qn=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Qn)
case 7:r=g
q=r.rV("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Kf(d,e),$async$Qn)
case 8:if(!j.cy(g)){n=B.a.i(d.toLowerCase())
m=J.lm(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Qn)
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
return A.i($async$Qn,v)},
afh(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$afh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qn(d,e),$async$afh)
case 3:s=g
r=J.a5(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.L(s,t)
w=5
return A.b(A.az(),$async$afh)
case 5:w=4
return A.b(g.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$afh)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afh,v)},
a1P(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a1P=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Qn(d,e),$async$a1P)
case 2:s=h
J.hC(s,f)
w=3
return A.b(A.az(),$async$a1P)
case 3:u=h
w=4
return A.b(u.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a1P)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1P)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1P)
case 6:return A.h(null,v)}})
return A.i($async$a1P,v)},
n5:function n5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fpT:function fpT(){},
fpU:function fpU(){},
fpV:function fpV(){},
fCN:function fCN(){},
fKR:function fKR(d){this.a=d},
fnc:function fnc(d){this.a=d},
H4:function H4(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bM4:function bM4(d){this.a=d},
i39(d,e,f,g,h,i,j){return A.a6(d,!1).c6(A.e7(new C.fDl(j,i,f,e,h,g),!0,null,x.H))},
Qj(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Qj=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qn(h,g),$async$Qj)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.I(x.q).f.R(D.aNc)
u=!1
w=1
break}w=4
return A.b(C.hiF(d,f,e),$async$Qj)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.afh(h,g),$async$Qj)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.n5(""+(q+n),l,B.a.i(m.b),new A.S(Date.now(),0,!1)))}w=6
return A.b(C.As(h,r,p),$async$Qj)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.QT(h,r,new C.H4("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Qj)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Qj,v)},
fDl:function fDl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
YD:function YD(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ayv:function ayv(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d4g:function d4g(d){this.a=d},
d4f:function d4f(d,e){this.a=d
this.b=e},
d44:function d44(d,e){this.a=d
this.b=e},
d41:function d41(d,e){this.a=d
this.b=e},
d3D:function d3D(d){this.a=d},
d3E:function d3E(d,e){this.a=d
this.b=e},
d45:function d45(d){this.a=d},
d3M:function d3M(d){this.a=d},
d3K:function d3K(d){this.a=d},
d3L:function d3L(d){this.a=d},
d3N:function d3N(d){this.a=d},
d42:function d42(d){this.a=d},
d43:function d43(){},
d3I:function d3I(d){this.a=d},
d3J:function d3J(d,e){this.a=d
this.b=e},
d3O:function d3O(d){this.a=d},
d3P:function d3P(d,e){this.a=d
this.b=e},
d4e:function d4e(d){this.a=d},
d4d:function d4d(d,e){this.a=d
this.b=e},
d4c:function d4c(d){this.a=d},
d3Z:function d3Z(d){this.a=d},
d3Y:function d3Y(d){this.a=d},
d4_:function d4_(d){this.a=d},
d3F:function d3F(d,e){this.a=d
this.b=e},
d40:function d40(d,e){this.a=d
this.b=e},
d3S:function d3S(d){this.a=d},
d3T:function d3T(d){this.a=d},
d3R:function d3R(){},
d3U:function d3U(d){this.a=d},
d3V:function d3V(d){this.a=d},
d3W:function d3W(d,e){this.a=d
this.b=e},
d3X:function d3X(d,e,f){this.a=d
this.b=e
this.c=f},
d3Q:function d3Q(d,e){this.a=d
this.b=e},
d47:function d47(d){this.a=d},
d46:function d46(){},
d48:function d48(d){this.a=d},
d49:function d49(d){this.a=d},
d4a:function d4a(d){this.a=d},
d4b:function d4b(d,e){this.a=d
this.b=e},
d3G:function d3G(d){this.a=d},
d3H:function d3H(d){this.a=d},
YH:function YH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bd8:function bd8(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d60:function d60(d){this.a=d},
d61:function d61(d){this.a=d},
d6_:function d6_(d){this.a=d},
d62:function d62(d){this.a=d},
d5Z:function d5Z(d){this.a=d},
d63:function d63(d){this.a=d},
d5Y:function d5Y(d){this.a=d},
d64:function d64(d,e){this.a=d
this.b=e},
d5X:function d5X(d,e){this.a=d
this.b=e},
d65:function d65(d,e){this.a=d
this.b=e},
YF:function YF(d,e,f,g,h,i,j){var _=this
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
ayw:function ayw(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d4v:function d4v(d,e){this.a=d
this.b=e},
d4u:function d4u(d,e){this.a=d
this.b=e},
d4z:function d4z(d){this.a=d},
d4y:function d4y(d,e){this.a=d
this.b=e},
d4w:function d4w(d){this.a=d},
d4x:function d4x(d){this.a=d},
d4A:function d4A(d){this.a=d},
d4B:function d4B(d){this.a=d},
d4t:function d4t(d,e){this.a=d
this.b=e},
d4s:function d4s(d,e){this.a=d
this.b=e},
Jo:function Jo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XW:function XW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cDy:function cDy(d){this.a=d},
cDz:function cDz(){},
cDA:function cDA(d){this.a=d},
bap:function bap(d,e,f){this.b=d
this.c=e
this.a=f},
bag:function bag(d,e){this.b=d
this.a=e},
u0:function u0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Yd:function Yd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ban:function ban(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cX_:function cX_(d,e,f){this.a=d
this.b=e
this.c=f},
cWZ:function cWZ(d,e){this.a=d
this.b=e},
cXo:function cXo(d){this.a=d},
cXb:function cXb(){},
cXp:function cXp(d){this.a=d},
cXa:function cXa(){},
cXq:function cXq(d,e){this.a=d
this.b=e},
cX9:function cX9(d,e){this.a=d
this.b=e},
cXr:function cXr(d,e){this.a=d
this.b=e},
cX8:function cX8(d,e){this.a=d
this.b=e},
cXs:function cXs(d){this.a=d},
cX7:function cX7(){},
cXt:function cXt(d,e){this.a=d
this.b=e},
cX6:function cX6(d,e){this.a=d
this.b=e},
cXu:function cXu(d){this.a=d},
cXj:function cXj(d,e){this.a=d
this.b=e},
cXv:function cXv(d){this.a=d},
cXw:function cXw(d){this.a=d},
cXy:function cXy(d){this.a=d},
cXz:function cXz(d){this.a=d},
cXi:function cXi(d,e){this.a=d
this.b=e},
cXA:function cXA(d,e){this.a=d
this.b=e},
aFv:function aFv(d){this.a=d},
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
hUy(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.agO(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.by(new A.S(Date.now(),0,!1))
s=new C.fnU(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("a2<1>"),q=q.k("cQ<1,n>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.xA)m.push(l===D.YX?"male":"female")
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
m.push("child of "+l+k)}a0=A.B(new A.cQ(new A.a2(a4,new C.fnS(u,f),p),new C.fnT(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aI(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aI(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hUz(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.agO(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fnZ(v,e)
q=new C.fnX(v)
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
for(l=B.d.gae(e),k=new A.fk(l,new C.fnY(p,m));k.C();t=f){j=l.gS(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ai(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aI(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hGh(d,e,f,g){var w,v,u=C.hUA(d,e)
if(u<=0||f.length<=u)return new A.adm(!1,D.BS,f)
if(g.t(0,e.a))return new A.adm(!1,D.BS,f)
w=A.U(f).c
v=A.dd(f,0,A.dJ(u,"count",x.S),w).dG(0)
return new A.adm(!0,A.dd(f,u,null,w).dG(0),v)},
hGi(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.agO(d3),d2=d1.length
if(d2===0)return D.fLa
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.cg(0,t.a,new C.d4I(t))}s=new C.d4Z(v)
d2=x.h
r=A.T(w,d2)
q=new C.d4R(r)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d4Q(r)
l=A.T(w,x.do)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ch(l.cg(0,k,new C.d4J()),o)}h=new C.d4P(s)
g=new C.d4O(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a2<J.E>")
f=A.B(new A.a2(new A.bc(v,p),new C.d4K(h),o),o.k("J.E"))
e=f.length===0?new A.bc(v,p).gK(0):B.d.gK(f)
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
a9=new C.d4X(new C.d4T(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dt(v,v.r,v.e),j=a2.gajz(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.ew([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.L(0,i))break}if(h.$1(b0)&&a2.ai(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.r2(J.dH(i==null?B.T:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.cc)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.d4H(a2,new C.d4Y(),b6,a3,b4,v,a4,a5,a6,b5)
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
b4.n(0,b8,new C.Ff(o,new A.u(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Jw(c5.a,new A.u(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.B(new A.cu(b6,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bI(0,new C.d4L(c6,b4))
for(d2=new A.cK(a4,a4.$ti.k("cK<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gS(j)
if(b6.ai(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.fk(j,new C.d4M(c8));i.C();)o.push(j.gS(0).b)
if(o.length===0)continue
B.d.b_(o,new C.d4N())
c6.push(new C.aHA(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bcT(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
heq(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(d)
return w==null?null:w.b[1]},
h8M(d,e,f,g,h,i,j,k,l,m,n){return new C.Zg(k,f,j,e,l,n,m,d,g,h,i,null)},
aAt(d,e,f,g,h,i,j){return new C.bgy(i,d,e,f,j,h,g,null)},
aok:function aok(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aC2:function aC2(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dRN:function dRN(d){this.a=d},
dRM:function dRM(d){this.a=d},
dRP:function dRP(d,e){this.a=d
this.b=e},
dRQ:function dRQ(d,e){this.a=d
this.b=e},
dRR:function dRR(d){this.a=d},
dRL:function dRL(d,e){this.a=d
this.b=e},
dRO:function dRO(d){this.a=d},
dRT:function dRT(d){this.a=d},
dRS:function dRS(d,e){this.a=d
this.b=e},
aoe:function aoe(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aC_:function aC_(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dRd:function dRd(d){this.a=d},
dRb:function dRb(d){this.a=d},
dRc:function dRc(d){this.a=d},
dRe:function dRe(d,e){this.a=d
this.b=e},
dR8:function dR8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQH:function dQH(d){this.a=d},
dQI:function dQI(d,e){this.a=d
this.b=e},
dQW:function dQW(d){this.a=d},
dQU:function dQU(d){this.a=d},
dQV:function dQV(d,e){this.a=d
this.b=e},
dQX:function dQX(d){this.a=d},
dQY:function dQY(d,e){this.a=d
this.b=e},
dR7:function dR7(d,e){this.a=d
this.b=e},
dR5:function dR5(d,e){this.a=d
this.b=e},
dR4:function dR4(d,e){this.a=d
this.b=e},
dR0:function dR0(d,e){this.a=d
this.b=e},
dR_:function dR_(d){this.a=d},
dR1:function dR1(d,e){this.a=d
this.b=e},
dQZ:function dQZ(d){this.a=d},
dR2:function dR2(d){this.a=d},
dR3:function dR3(d){this.a=d},
dR6:function dR6(d,e){this.a=d
this.b=e},
dQv:function dQv(d,e){this.a=d
this.b=e},
dQw:function dQw(d,e){this.a=d
this.b=e},
dRg:function dRg(d,e,f){this.a=d
this.b=e
this.c=f},
dRa:function dRa(d,e,f){this.a=d
this.b=e
this.c=f},
dR9:function dR9(d){this.a=d},
dQx:function dQx(d){this.a=d},
dQy:function dQy(d){this.a=d},
dQz:function dQz(){},
dQA:function dQA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQE:function dQE(d,e){this.a=d
this.b=e},
dQD:function dQD(d,e){this.a=d
this.b=e},
dQC:function dQC(d){this.a=d},
dQF:function dQF(d,e){this.a=d
this.b=e},
dQB:function dQB(d){this.a=d},
dRf:function dRf(d){this.a=d},
dQR:function dQR(){},
dQS:function dQS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQQ:function dQQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQM:function dQM(d,e,f){this.a=d
this.b=e
this.c=f},
dQL:function dQL(d,e,f){this.a=d
this.b=e
this.c=f},
dQJ:function dQJ(d,e){this.a=d
this.b=e},
dQN:function dQN(d){this.a=d},
dQO:function dQO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQK:function dQK(d,e){this.a=d
this.b=e},
dQP:function dQP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQT:function dQT(d,e){this.a=d
this.b=e},
dRn:function dRn(){},
dRo:function dRo(d,e){this.a=d
this.b=e},
dRp:function dRp(d){this.a=d},
dRq:function dRq(d,e){this.a=d
this.b=e},
dRj:function dRj(d){this.a=d},
dRh:function dRh(d,e){this.a=d
this.b=e},
dRk:function dRk(d,e){this.a=d
this.b=e},
dRl:function dRl(d,e){this.a=d
this.b=e},
dRm:function dRm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dRr:function dRr(d){this.a=d},
dRi:function dRi(d){this.a=d},
dQG:function dQG(d){this.a=d},
bcR:function bcR(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d4F:function d4F(d){this.a=d},
d4E:function d4E(d,e){this.a=d
this.b=e},
d4G:function d4G(d){this.a=d},
d4D:function d4D(d,e){this.a=d
this.b=e},
fnU:function fnU(d,e){this.a=d
this.b=e},
fnV:function fnV(d){this.a=d},
fnW:function fnW(){},
fnS:function fnS(d,e){this.a=d
this.b=e},
fnT:function fnT(){},
fnZ:function fnZ(d,e){this.a=d
this.b=e},
fo_:function fo_(d){this.a=d},
fo0:function fo0(){},
fnX:function fnX(d){this.a=d},
fnY:function fnY(d,e){this.a=d
this.b=e},
Jw:function Jw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ff:function Ff(d,e){this.a=d
this.b=e},
bcT:function bcT(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d4I:function d4I(d){this.a=d},
d4Z:function d4Z(d){this.a=d},
d4R:function d4R(d){this.a=d},
d4S:function d4S(){},
d4Q:function d4Q(d){this.a=d},
d4J:function d4J(){},
d4P:function d4P(d){this.a=d},
d4O:function d4O(d,e){this.a=d
this.b=e},
d4K:function d4K(d){this.a=d},
d4T:function d4T(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d4U:function d4U(d){this.a=d},
d4V:function d4V(d){this.a=d},
d4W:function d4W(){},
d4X:function d4X(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d4Y:function d4Y(){},
d4H:function d4H(d,e,f,g,h,i,j,k,l,m){var _=this
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
d4L:function d4L(d,e){this.a=d
this.b=e},
d4M:function d4M(d){this.a=d},
d4N:function d4N(){},
aHA:function aHA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcU:function bcU(d,e){this.b=d
this.a=e},
d5_:function d5_(){},
d50:function d50(d){this.a=d},
d51:function d51(d){this.a=d},
d52:function d52(){},
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
f6l:function f6l(d){this.a=d},
bjV:function bjV(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eID:function eID(d){this.a=d},
eIC:function eIC(d,e){this.a=d
this.b=e},
Zg:function Zg(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aAr:function aAr(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dkS:function dkS(d,e){this.a=d
this.b=e},
dkR:function dkR(d){this.a=d},
dkP:function dkP(d){this.a=d},
dkQ:function dkQ(d){this.a=d},
dl0:function dl0(d){this.a=d},
dl1:function dl1(d){this.a=d},
dl_:function dl_(d,e){this.a=d
this.b=e},
dl2:function dl2(){},
dl5:function dl5(d){this.a=d},
dkZ:function dkZ(d,e){this.a=d
this.b=e},
dl4:function dl4(){},
dl6:function dl6(d){this.a=d},
dkY:function dkY(d,e){this.a=d
this.b=e},
dl7:function dl7(d){this.a=d},
dkX:function dkX(d){this.a=d},
dl8:function dl8(d){this.a=d},
dkW:function dkW(d){this.a=d},
dl9:function dl9(d){this.a=d},
dkV:function dkV(d){this.a=d},
dla:function dla(d){this.a=d},
dkU:function dkU(d){this.a=d},
dlb:function dlb(d){this.a=d},
dkT:function dkT(d,e){this.a=d
this.b=e},
dl3:function dl3(d){this.a=d},
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
dlc:function dlc(d){this.a=d},
dld:function dld(d,e){this.a=d
this.b=e},
aAs:function aAs(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGD:function aGD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
acf:function acf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dlm:function dlm(d){this.a=d},
Jj:function Jj(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
h3F(d){var w=d.T,v=x.N
return w.iV(w,new C.c6L(),v,v)},
hxQ(d){var w=d.bC
if(w>=0)return w
return 5},
h3H(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.h3F(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
h3G(d,e){var w=C.h3H(d,e)
if(w!=null&&w.cc(new A.S(Date.now(),0,!1)))return!0
return!1},
hxR(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.h3F(d),w,w)
u=C.h3H(d,e)
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
c6L:function c6L(){},
hxO(){var w,v=$.pi(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fW(u)},
I_(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$I_=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$I_)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f2("ngmy_family_tree_backup_codes_v1",null,!1,B.bG),$async$I_)
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
p=A.a9(m)
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
return A.i($async$I_,v)},
a6o(d){return C.hxP(d)},
hxP(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a6o=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$a6o)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hB("ngmy_family_tree_backup_codes_v1",A.F(["codes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cG,null),$async$a6o)
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
return A.i($async$a6o,v)},
c6K(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c6K=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.I_(),$async$c6K)
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
return A.i($async$c6K,v)},
MT(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$MT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c6K(d),$async$MT)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.I_(),$async$MT)
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
return A.b(C.a6o(s),$async$MT)
case 9:case 8:u=t
w=1
break
case 5:n=C.hxO()
w=10
return A.b(C.I_(),$async$MT)
case 10:s=f
J.aF(s,n,A.F(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=11
return A.b(C.a6o(s),$async$MT)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$MT,v)},
aYz(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aYz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.I_(),$async$aYz)
case 3:t=f
for(s=J.dk(t),r=s.gdK(t),r=r.dG(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a6o(t),$async$aYz)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aYz,v)},
a6p(d,e,f){var w=0,v=A.j(x.H),u
var $async$a6p=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aoj(d,e),$async$a6p)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.MT(d),$async$a6p)
case 7:w=4
break
case 5:w=8
return A.b(C.aYz(d),$async$a6p)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a6p,v)},
aod(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aod=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aoj(f,e),$async$aod)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c3(),$async$aod)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.I_(),$async$aod)
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
return A.i($async$aod,v)},
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
return A.b(C.I_(),$async$aYy)
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
hxS(){var w,v=$.pi(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fW(u)},
aog(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$aog=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$aog)
case 3:if(!g){u=null
w=1
break}t=C.hxS()
w=4
return A.b(A.Un(),$async$aog)
case 4:s=g
r=B.dJ.aJ(B.R.ao(d.eK(),null))
r=B.cS.gcv().aJ(r)
q=e?999:2
J.aF(s,t,A.F(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(A.a6q(s),$async$aog)
case 5:p=e?999:2
u=new A.a_q("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aog,v)},
aof(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aof=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Un(),$async$aof)
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
return A.b(C.aYy(J.k(l==null?"":l),j),$async$aof)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.c4.ca(0,B.cE.aJ(t))
s=C.h3I(r)}catch(f){q=A.a9(f)
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
return A.b(A.a6q(p),$async$aof)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aof,v)},
h3I(d){var w,v,u,t,s=null
try{w=B.R.aG(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hxU(A.a1(w,x.N,x.z))
return u}catch(t){v=A.a9(t)
$.am.$1("[family tree sync] parse: "+A.t(v))
return s}},
fOM(d){var w=0,v=A.j(x.m),u,t,s
var $async$fOM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aof(t[1])
w=1
break}u=null
w=1
break}u=C.h3I(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fOM,v)},
hxU(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d9(v,x.f)
u=A.cD(u,new C.c6N(),u.$ti.k("J.E"),x.k)
t=A.a3(u).k("a2<J.E>")
s=A.B(new A.a2(u,new C.c6O(),t),t.k("J.E"))}else s=A.a([],x._)
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
n=A.cD(n,new C.c6P(),n.$ti.k("J.E"),o)
k=A.a3(n).k("a2<J.E>")
j=A.B(new A.a2(n,new C.c6Q(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aoh(h,w,s,r,q)},
aoj(d,e){var w=0,v=A.j(x.y),u,t
var $async$aoj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.MK(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Ah(d),$async$aoj)
case 3:u=t.cy(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoj,v)},
c6W(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c6W=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Ah(d),$async$c6W)
case 3:t=s.b6(f,new C.c6X(),x.cs)
t=A.B(t,t.$ti.k("ak.E"))
B.d.b_(t,new C.c6Y())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6W,v)},
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
return A.b(C.aoj(e,d),$async$Uo)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.MT(e),$async$Uo)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Ah(e),$async$Uo)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.c6U(g))
r=A.B(t,t.$ti.k("J.E"))}t=J.a5(r)
if(t.gam(r)){u=null
w=1
break}t=t.dt(r,new C.c6V(e),x.k)
r=A.B(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Kf(e,o),$async$Uo)
case 14:n=i
if(J.cy(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.aoh(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Uo,v)},
aYD(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aYD=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Uo(d,e,f,g),$async$aYD)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gK(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aK(t,s,"_")
r=q.a
u=A.FY(A.Js(q.eK(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYD,v)},
aYC(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aYC=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Uo(d,e,f,g),$async$aYC)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aog(r,f),$async$aYC)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aEE(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYC,v)},
Up(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Up=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fOM(a0),$async$Up)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aod(g.a,d,e,f,s,r),$async$Up)
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
return A.b(C.bzw(e,j),$async$Up)
case 12:case 11:w=13
return A.b(C.agA(e,j,s),$async$Up)
case 13:h=n.h(0,i)
w=h!=null&&J.cy(h)?14:15
break
case 14:w=16
return A.b(C.As(e,i,h),$async$Up)
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
return A.i($async$Up,v)},
aoh:function aoh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c6S:function c6S(){},
c6T:function c6T(){},
c6R:function c6R(){},
c6N:function c6N(){},
c6O:function c6O(){},
c6P:function c6P(){},
c6Q:function c6Q(){},
c6X:function c6X(){},
c6Y:function c6Y(){},
c6U:function c6U(d){this.a=d},
c6V:function c6V(d){this.a=d},
fX1(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f7(null,x.H)
return A.hv(d,new C.aoi(w,e,g,i,f,h,null),!0,null,x.H)},
d4C(d,e,f,g,h,i,j,k){return new C.bcQ(i,e,k,j,g,f,h,d,null)},
aoi:function aoi(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aC1:function aC1(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dRA:function dRA(d){this.a=d},
dRB:function dRB(d,e,f){this.a=d
this.b=e
this.c=f},
dRF:function dRF(d,e){this.a=d
this.b=e},
dRG:function dRG(d){this.a=d},
dRx:function dRx(d){this.a=d},
dRy:function dRy(d,e){this.a=d
this.b=e},
dRz:function dRz(d,e){this.a=d
this.b=e},
dRE:function dRE(d){this.a=d},
dRD:function dRD(d,e){this.a=d
this.b=e},
dRC:function dRC(){},
dRI:function dRI(d){this.a=d},
dRJ:function dRJ(d,e){this.a=d
this.b=e},
dRH:function dRH(d,e){this.a=d
this.b=e},
d53:function d53(d,e,f,g,h){var _=this
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
ZB:function ZB(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aC0:function aC0(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dRs:function dRs(d,e){this.a=d
this.b=e},
dRt:function dRt(d){this.a=d},
dRu:function dRu(d){this.a=d},
dRv:function dRv(d){this.a=d},
dRw:function dRw(d){this.a=d},
ZC:function ZC(d){this.a=d},
bi1:function bi1(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dRK:function dRK(d,e){this.a=d
this.b=e},
aX9(d,e){return new C.aX8(d,e,null)},
aX8:function aX8(d,e,f){this.c=d
this.d=e
this.a=f},
hX1(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b0(d,11)},
i3j(d){return A.bX(B.K,null,new C.fDO(new C.tx(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
h5z(d,e){return new C.ard(e,d,null)},
aOP(d,e,f,g,h,i,j){var w=C.hX1(i)
if(w!=null)return A.bw(e,new A.a7(j,f,new C.a5r(w,!0,null),null),B.aq)
return I.aOa(e,B.bQ,f,g,h,i,j)},
lv:function lv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5r:function a5r(d,e,f){this.c=d
this.d=e
this.a=f},
bhI:function bhI(d,e){var _=this
_.e=_.d=$
_.cS$=d
_.b2$=e
_.c=_.a=null},
dCU:function dCU(d){this.a=d},
dCV:function dCV(){},
dCW:function dCW(d,e){this.a=d
this.b=e},
bhH:function bhH(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fDO:function fDO(d){this.a=d},
fDN:function fDN(d,e){this.a=d
this.b=e},
fDM:function fDM(d,e){this.a=d
this.b=e},
fDL:function fDL(d,e){this.a=d
this.b=e},
ard:function ard(d,e,f){this.c=d
this.d=e
this.a=f},
cep:function cep(d,e){this.a=d
this.b=e},
aJW:function aJW(){},
i34(d){var w=null
return A.ca(w,w,!0,w,new C.fDa(),d,w,!0,!0,x.e2)},
i4e(d,e,f,g,h){var w=null
return A.ca(w,w,!0,w,new C.fKD(h,g,f,e),d,w,!0,!0,x.N)},
i36(d,e){var w=null
return A.ca(w,w,!0,w,new C.fDf(e),d,w,!0,!0,x.dY)},
i35(d){var w=null
return A.ca(w,w,!0,w,new C.fDe(),d,w,!0,!0,x.c5)},
aRK:function aRK(d,e){this.a=d
this.b=e},
aRJ:function aRJ(d){this.a=d},
aPM:function aPM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDa:function fDa(){},
fKD:function fKD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDf:function fDf(d){this.a=d},
fDe:function fDe(){},
Yf:function Yf(d,e){this.c=d
this.a=e},
axh:function axh(){var _=this
_.d=$
_.c=_.a=_.e=null},
cXM:function cXM(d){this.a=d},
cXN:function cXN(d){this.a=d},
cXL:function cXL(d,e){this.a=d
this.b=e},
cXO:function cXO(d){this.a=d},
cXP:function cXP(d){this.a=d},
Ye:function Ye(d){this.a=d},
axg:function axg(){this.d=$
this.c=this.a=null},
cXI:function cXI(d){this.a=d},
cXJ:function cXJ(d){this.a=d},
cXK:function cXK(d){this.a=d},
XN:function XN(d){this.a=d},
aw0:function aw0(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cvl:function cvl(){},
cvr:function cvr(d){this.a=d},
cvs:function cvs(d){this.a=d},
cvt:function cvt(d){this.a=d},
cvq:function cvq(){},
cvu:function cvu(d){this.a=d},
cvv:function cvv(d){this.a=d},
cvp:function cvp(){},
cvw:function cvw(d,e){this.a=d
this.b=e},
cvo:function cvo(d,e){this.a=d
this.b=e},
cvm:function cvm(d,e){this.a=d
this.b=e},
cvx:function cvx(d){this.a=d},
cvn:function cvn(){},
cvy:function cvy(d){this.a=d},
a0j:function a0j(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bu1:function bu1(){this.d=$
this.c=this.a=null},
f5O:function f5O(d,e){this.a=d
this.b=e},
f5P:function f5P(d){this.a=d},
f5Q:function f5Q(d,e){this.a=d
this.b=e},
aaz:function aaz(d,e){this.a=d
this.b=e},
F3:function F3(d,e,f,g,h,i){var _=this
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
f5M:function f5M(d,e){this.a=d
this.b=e},
avU:function avU(d,e){this.c=d
this.a=e},
bu0:function bu0(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f5N:function f5N(d){this.a=d},
btZ:function btZ(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aM4:function aM4(){},
aM5:function aM5(){},
bBu(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bu(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oy(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fBW(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Xb(A.dr(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aOr(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aOr=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hW().l2(85,1280,B.eG),$async$aOr)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.ff(),$async$aOr)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.h5y()
w=9
return A.b(C.ceo(q,r),$async$aOr)
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
return A.i($async$aOr,v)},
aON(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aON=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cel(g)
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
return A.b($.X().L3(p,!0,null,i).cM(0,B.fG),$async$aON)
case 9:n=a1
w=10
return A.b(n.mg(),$async$aON)
case 10:m=a1
w=11
return A.b(J.aPx(m).hp(B.fW),$async$aON)
case 11:l=a1
J.aPx(m).q()
if(l==null){w=8
break}i=J.eW(B.dC.gaM(l))
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
return A.i($async$aON,v)},
fBW:function fBW(){},
tx:function tx(d){this.a=d},
arc:function arc(d,e,f){this.c=d
this.d=e
this.a=f},
aDx:function aDx(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eFN:function eFN(d,e){this.a=d
this.b=e},
eFE:function eFE(d){this.a=d},
eFF:function eFF(d){this.a=d},
eFL:function eFL(d,e){this.a=d
this.b=e},
eFK:function eFK(d,e){this.a=d
this.b=e},
eFH:function eFH(d,e){this.a=d
this.b=e},
eFG:function eFG(d,e){this.a=d
this.b=e},
eFI:function eFI(d){this.a=d},
eFJ:function eFJ(d,e){this.a=d
this.b=e},
eFM:function eFM(d,e){this.a=d
this.b=e},
eFz:function eFz(d,e){this.a=d
this.b=e},
eFD:function eFD(d){this.a=d},
eFC:function eFC(d,e){this.a=d
this.b=e},
eFB:function eFB(d){this.a=d},
eFO:function eFO(d,e){this.a=d
this.b=e},
eFP:function eFP(d,e){this.a=d
this.b=e},
eFA:function eFA(d,e){this.a=d
this.b=e},
hib(d,e,f){var w="thumbnailPath",v=e.af()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.F(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a6().ac(),"project",v],x.N,x.z)},
fBX(d,e,f){var w=0,v=A.j(x.N),u
var $async$fBX=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.R.ao(C.hib(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fBX,v)},
bBw(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bBw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fBX(!0,d,e),$async$bBw)
case 4:w=3
return A.b(r.ara(g,d,e.a),$async$bBw)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dJ.aJ(B.R.ao(C.hib(d,e,null),null))
u="NGMY_WS:"+B.k7.gcv().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBw,v)},
ha7(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fWI(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d_(s,"NGMYWSSYNC2|"))return!0
if(J.d_(s,"NGMY_WS:"))return!0
if(J.f_(s,t))return!0
if(J.d_(s,"{"))try{w=B.R.aG(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
i14(d){var w,v,u,t=C.ha7(d)
if(t==null)return null
if(C.fWI(t))return t
w=B.a.cJ(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b0(t,w))
if(C.fWI(v))return v}u=B.a.cJ(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b0(t,u))
if(C.fWI(v))return v}return null},
fWH(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d_(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d_(q,"NGMY_WS:")){v=B.c4.ca(0,B.cE.aJ(J.mA(q,8)))
w=t.a(B.R.aG(0,v,r))}else w=t.a(B.R.aG(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fRk(A.a1(u,x.N,x.z))
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
return A.b(C.ar9(t[1]),$async$bBv)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fWH(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fWH(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBv,v)},
fWG(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lf(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bB1(){var w=0,v=A.j(x.o),u,t
var $async$bB1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.G8(),$async$bB1)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fWH(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bB1,v)},
hj2(d,e,f,g){return A.bX(B.K,null,new C.fKv(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fKv:function fKv(d,e,f){this.a=d
this.b=e
this.c=f},
acA:function acA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eFR:function eFR(d,e){this.a=d
this.b=e},
eFS:function eFS(d,e){this.a=d
this.b=e},
eFT:function eFT(d,e){this.a=d
this.b=e},
eFU:function eFU(d,e){this.a=d
this.b=e},
eFQ:function eFQ(d){this.a=d},
ar6:function ar6(d,e,f){this.c=d
this.d=e
this.a=f},
bjo:function bjo(){var _=this
_.c=_.a=_.e=_.d=null},
eFu:function eFu(d,e){this.a=d
this.b=e},
eFv:function eFv(d){this.a=d},
eFw:function eFw(d){this.a=d},
arb:function arb(d){this.a=d},
aDw:function aDw(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eFy:function eFy(d){this.a=d},
eFx:function eFx(d){this.a=d},
hB6(d,e,f,g,h){return new C.Nv(h,g,d,e,f,null)},
aIh:function aIh(d,e){this.a=d
this.b=e},
Nv:function Nv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDy:function aDy(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eGg:function eGg(){},
eGc:function eGc(d,e){this.a=d
this.b=e},
eGd:function eGd(d){this.a=d},
eFY:function eFY(d){this.a=d},
eFW:function eFW(d){this.a=d},
eFX:function eFX(d){this.a=d},
eG6:function eG6(d,e){this.a=d
this.b=e},
eG3:function eG3(d,e){this.a=d
this.b=e},
eG4:function eG4(d,e){this.a=d
this.b=e},
eG5:function eG5(d,e,f){this.a=d
this.b=e
this.c=f},
eG1:function eG1(d,e,f){this.a=d
this.b=e
this.c=f},
eG_:function eG_(d){this.a=d},
eG0:function eG0(d){this.a=d},
eG2:function eG2(d){this.a=d},
eGj:function eGj(d){this.a=d},
eGi:function eGi(d){this.a=d},
eGk:function eGk(d){this.a=d},
eGh:function eGh(d){this.a=d},
eFV:function eFV(d){this.a=d},
eFZ:function eFZ(d,e){this.a=d
this.b=e},
eGf:function eGf(d,e){this.a=d
this.b=e},
eGe:function eGe(d,e){this.a=d
this.b=e},
eG9:function eG9(d){this.a=d},
eGa:function eGa(d){this.a=d},
eGb:function eGb(d,e){this.a=d
this.b=e},
eG8:function eG8(d,e){this.a=d
this.b=e},
eG7:function eG7(d,e,f){this.a=d
this.b=e
this.c=f},
bvN:function bvN(){},
A8(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aK(v,w,"_")},
af0(d,e,f){return C.hQE(d,e,f)},
hQE(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
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
return A.i($async$af0,v)},
af_(d,e){return C.hQD(d,e)},
hQD(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$af_=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$af_)
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
return A.i($async$af_,v)},
hPp(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.S5(u)
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
return A.b(C.aON(q,!1),$async$byw)
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
hoU(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.qN(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qN(p,J.k(u==null?"":u),1,o,q)},
fRk(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d9(s,x.f)
w=A.cD(w,new C.cuJ(),w.$ti.k("J.E"),x.Q)
v=A.a3(w).k("a2<J.E>")
r=A.B(new A.a2(w,new C.cuK(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lf(w,v,u,r,t==null?new A.S(Date.now(),0,!1):t)},
hUu(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.YX
case"female":case"f":return D.ain
default:return D.xA}},
heU(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h_L(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hUu(v==null?j:J.k(v))
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
hUw(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.M9
case"viewer":return D.ki
default:return D.tB}},
hUx(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
FZ(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bzN(d,e){return B.a.i(e.toLowerCase())===C.FZ(d,e)&&d.y!==D.ki},
tI(d,e){var w,v=d.y
if(v===D.ki)return!1
w=B.a.i(e.toLowerCase())
if(w===C.FZ(d,e))return!0
if(v===D.M9)return!0
v=d.e
return new A.K(v,A.fWM(),A.U(v).k("K<1,n>")).t(0,w)},
hTX(d){return J.dH(d,new C.fn4()).gM(0)},
fKY(d){var w=0,v=A.j(x.y),u,t
var $async$fKY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Ah(d),$async$fKY)
case 3:u=t.qJ(f,new C.fKZ(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fKY,v)},
bzw(d,e){var w=0,v=A.j(x.H),u,t
var $async$bzw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ah(d),$async$bzw)
case 3:t=g
if(J.qJ(t,new C.flB(e))){w=1
break}if(C.hTX(t)>=2)throw A.V(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bzw,v)},
ajD(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d9(n,x.f)
w=A.cD(w,new C.bM5(),w.$ti.k("J.E"),x.P)
v=A.a3(w).k("a2<J.E>")
m=A.B(new A.a2(w,new C.bM6(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bM7(),x.N)
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
return new C.ky(l,w,v,!s,t,m,r,q,p,C.hUw(o==null?null:J.k(o)))},
hf1(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
Cs(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$Cs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.QR(d),$async$Cs)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$Cs)
case 4:t=f
w=5
return A.b(t.a5f(0),$async$Cs)
case 5:w=6
return A.b(C.fdm(t,l),$async$Cs)
case 6:s=f
if(J.cy(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a5(q)
o=A.aT(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.haH(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.ox(l,n),$async$Cs)
case 11:u=n
w=1
break
case 10:case 8:m=A.aT(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.haH(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.ox(l,n),$async$Cs)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Cs,v)},
fdm(d,e){return C.hMU(d,e)},
hMU(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fdm=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a5(a3)
a5=A.aT(a4.h(a3,"ngmy_worksheets_index_v3_"+C.A8(a9)))
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
break}m=A.aT(a4.h(a3,"ngmy_worksheet_item_v3_"+C.A8(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.R.aG(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fRk(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aT(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.A8(a9)+"_"+n))
i=C.hPp(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b0P(h),$async$fdm)
case 17:g=b1
if(g!=null){i=i.S5(g)
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
case 8:J.R0(q,new C.fdn())
if(p&&J.ad(q)!==0)C.ox(a9,q)
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
return A.i($async$fdm,v)},
bzY(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bzY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.QR(d),$async$bzY)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Cs(r),$async$bzY)
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
haH(d){var w,v,u,t
try{w=B.R.aG(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d9(w,x.f)
v=A.cD(v,new C.f93(),v.$ti.k("J.E"),x.i)
u=A.a3(v).k("a2<J.E>")
v=A.B(new A.a2(v,new C.f94(),u),u.k("J.E"))
B.d.b_(v,new C.f95())
return v}catch(t){v=A.a([],x.D)
return v}},
ox(d,e){return C.i2V(d,e)},
i2V(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$ox=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.QR(b2),$async$ox)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$ox)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.A8(a8)
p=A.aT(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.R.aG(0,p,null)),new C.fD1(),a2).fI(0)
a2=J.b6(b3,new C.fD2(),a2).c_(0,new C.fD3())
n=A.db(a2,a2.$ti.k("J.E"))
a2=o,a2=A.ec(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f_(n,m)?17:18
break
case 17:a5=C.A8(a8)
l=A.aT(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a7G(l),$async$ox)
case 19:t=21
a5=C.A8(a8)
k=A.aT(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.R.aG(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a7G(a5==null?null:J.k(a5)),$async$ox)
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
return A.b(C.af_(r,"ngmy_worksheet_item_v3_"+C.A8(a8)+"_"+m),$async$ox)
case 29:w=30
return A.b(C.af_(r,"ngmy_worksheet_thumb_v3_"+C.A8(a8)+"_"+m),$async$ox)
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
return A.b(C.byw(h),$async$ox)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.af0(r,"ngmy_worksheet_thumb_v3_"+C.A8(a8)+"_"+a4,f),$async$ox)
case 40:g=i.S5(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.af_(r,"ngmy_worksheet_thumb_v3_"+C.A8(a8)+"_"+a4),$async$ox)
case 41:g=i.S5(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.af_(r,"ngmy_worksheet_thumb_v3_"+C.A8(a8)+"_"+a4),$async$ox)
case 42:case 34:a4=i.a
w=43
return A.b(C.af0(r,"ngmy_worksheet_item_v3_"+C.A8(a8)+"_"+a4,B.R.ao(g.af(),null)),$async$ox)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.ch(q,i.a)
w=31
break
case 32:w=44
return A.b(C.af0(r,"ngmy_worksheets_index_v3_"+C.A8(a8),B.R.ao(q,null)),$async$ox)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eJ(b3,new C.fD4(q))
a4=a3.$ti.k("cQ<1,a4<n,@>>")
a7=A.B(new A.cQ(a3,new C.fD5(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.af0(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.R.ao(a0,null)),$async$ox)
case 45:w=46
return A.b(J.ho0(r),$async$ox)
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
return A.i($async$ox,v)},
KH(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$KH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Cs(d),$async$KH)
case 3:t=g
s=J.cE(t)
r=s.bc(t,new C.fKX(e))
if(r===-1)s.ck(t,0,e)
else s.n(t,r,e)
u=C.ox(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$KH,v)},
bzK(d,e){var w=0,v=A.j(x.H),u
var $async$bzK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Cs(d),$async$bzK)
case 2:u=g
J.nl(u,new C.fnw(e))
w=3
return A.b(C.ox(d,u),$async$bzK)
case 3:return A.h(null,v)}})
return A.i($async$bzK,v)},
G0(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$G0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$G0)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aT(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.R.aG(0,i,null)
if(x.j.b(t)){j=J.d9(t,x.f)
j=A.cD(j,new C.fpZ(),j.$ti.k("J.E"),x.k)
s=A.a3(j).k("a2<J.E>")
r=A.B(new A.a2(j,new C.fq_(),s),s.k("J.E"))
B.d.b_(r,new C.fq0())
k=r}}catch(h){}w=4
return A.b(C.f9O(d),$async$G0)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hNg(k,p,d)
j=A.U(o)
s=j.k("K<1,a4<n,@>>")
s=A.B(new A.K(o,new C.fq1(),s),s.k("ak.E"))
n=B.R.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Q2(d,o),$async$G0)
case 7:case 6:j=j.k("a2<1>")
m=A.B(new A.a2(o,new C.fq2(d),j),j.k("J.E"))
if(m.length!==0)C.aNm(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$G0,v)},
fCO(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fCO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Q2(d,e),$async$fCO)
case 3:t=J.dH(e,new C.fCP(d))
s=A.B(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aNm(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fCO,v)},
a1W(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a1W=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a1W)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aT(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.R.aG(0,l,null)
if(x.j.b(u)){m=J.d9(u,x.f)
m=A.cD(m,new C.fKS(),m.$ti.k("J.E"),x.k)
t=A.a3(m).k("a2<J.E>")
s=A.B(new A.a2(m,new C.fKT(),t),t.k("J.E"))
o=s}}catch(k){}q=J.q4(o,new C.fKU(e))
if(B.a.i(e.x).length===0&&C.tI(e,d)){m=B.a.i(d.toLowerCase())
p=e.aCB(e.y===D.ki?D.ki:D.tB,m)}else p=e
if(q===-1)J.pm(o,0,p)
else J.aF(o,q,p)
w=3
return A.b(C.Q2(d,o),$async$a1W)
case 3:w=C.tI(p,d)?4:5
break
case 4:w=6
return A.b(C.aNl(C.FZ(p,d),p),$async$a1W)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a1W,v)},
aNw(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aNw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.G0(d),$async$aNw)
case 2:u=g
t=J.cE(u)
s=A.r2(t.eJ(u,new C.fnd(e)))
t.bn(u,new C.fne(e))
w=3
return A.b(C.Q2(d,u),$async$aNw)
case 3:w=s!=null&&C.bzN(s,d)?4:5
break
case 4:w=6
return A.b(C.f97(e),$async$aNw)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aNw,v)},
agO(d){var w=d.f,v=A.U(w).k("a2<1>")
w=A.B(new A.a2(w,new C.fL2(),v),v.k("J.E"))
return w},
fUq(d,e){var w,v=d.f,u=A.r2(new A.a2(v,new C.fmO(e),A.U(v).k("a2<1>")))
v=C.agO(d)
w=A.U(v).k("a2<1>")
v=A.B(new A.a2(v,new C.fmP(e,u),w),w.k("J.E"))
B.d.b_(v,new C.fmQ())
return v},
hUA(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hj5(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bc(C.fUq(d,u),new C.fKE(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hW6(d,e){var w
if(e==null||e.length===0)return 1
w=C.fUq(d,e)
if(w.length===0)return 1
return new A.K(w,new C.fqL(),A.U(w).k("K<1,H>")).fF(0,B.zS)+1},
i2O(d){var w,v=C.agO(d)
if(v.length===0)return null
w=new A.a2(v,new C.fCL(),A.U(v).k("a2<1>"))
if(!w.gam(0))return w.gK(0)
return B.d.gK(v)},
hUv(d){return A.F(["id",d.a,"name",d.b,"gender",C.heU(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hW1(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aX(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.L)(a0),++u){q=a0[u]
p=q.a
r.L(0,p)
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
d=q.aCw(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.L)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cGe(a1,w,a3.d,a2.y,s,a0,v)},
Ah(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$Ah=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Ah)
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
p=A.cD(p,new C.fpW(),p.$ti.k("J.E"),x.k)
s=A.a3(p).k("a2<J.E>")
p=A.B(new A.a2(p,new C.fpX(),s),s.k("J.E"))
B.d.b_(p,new C.fpY())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Ah,v)},
agA(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$agA=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tB:D.ki
a7=C.FZ(b2,b3)
w=2
return A.b(C.Ah(b1),$async$agA)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.bc(a8,new C.fCH(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bzw(b1,b2),$async$agA)
case 5:case 4:if(b0===-1){u=b2.aCB(a6,a7)
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
s.n(0,m,l.aCw(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
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
return A.b(C.Q2(b1,a8),$async$agA)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aNl(B.a.i(b3.toLowerCase()),u),$async$agA)
case 9:case 8:return A.h(null,v)}})
return A.i($async$agA,v)},
hb4(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a6().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("K<1,a4<n,@>>"),k=A.B(new A.K(m,C.hij(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.F(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.F(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a6().ac(),"updatedAt",o],r,x.K),"createdAt",s.a6().ac(),"updatedAt",o],r,x.z)},
hb5(d,e){var w=new A.S(Date.now(),0,!1).a6().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("K<1,a4<n,@>>")
u=A.B(new A.K(u,C.hij(),t),t.k("ak.E"))
return A.F(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a6().ac(),"updatedAt",w],x.N,x.z)},
hKU(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a5(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ajD(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.K(j,A.fWM(),A.U(j).k("K<1,n>")).c_(0,new C.f9B())
t=A.B(j,j.$ti.k("J.E"))
if(u===v)s=D.tB
else s=B.d.t(t,u)?D.M9:D.ki
return w.aCB(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ajD(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d9(q,h)
h=A.cD(h,new C.f9C(),h.$ti.k("J.E"),x.P)
p=A.a3(h).k("a2<J.E>")
o=A.B(new A.a2(h,new C.f9D(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.f9E(),x.N).c_(0,new C.f9F())
t=A.B(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tB
else s=B.d.t(t,u)?D.M9:D.ki
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
f9O(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$f9O=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.f9S()
h=x.N
g=x.z
w=7
return A.b(A.iJ(A.a([A.ll("family_trees","*",null,A.F(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bG),r.$2(A.ll("family_trees","*",A.F(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bG),"collaborator"),r.$2(A.ll("family_trees","*",null,A.F(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bG),"public")],x.cl),x.U),$async$f9O)
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
h=A.cD(new A.bc(l,h),new C.f9P(a0),h.k("J.E"),x.k)
l=A.a3(h).k("a2<J.E>")
l=A.B(new A.a2(h,new C.f9Q(),l),l.k("J.E"))
B.d.b_(l,new C.f9R())
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
return A.i($async$f9O,v)},
hNg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a5(e)
if(j.gam(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dt(e,new C.fe1(),v).c_(0,new C.fe2())
t=A.db(u,u.$ti.k("J.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.FZ(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.ki){m=q.e
m=!new A.K(m,A.fWM(),A.U(m).k("K<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gS(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.hW1(l,v)
o=C.FZ(k,w)
p=v.d
s.n(0,u,o===w?k.ba5(p,D.tB):k.ba5(p,v.y))}j=s.$ti.k("bc<2>")
j=A.B(new A.bc(s,j),j.k("J.E"))
B.d.b_(j,new C.fe3())
return j},
Q2(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Q2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$Q2)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fg8(),x.a)
s=A.B(s,s.$ti.k("ak.E"))
w=3
return A.b(u.au("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.R.ao(s,null)),$async$Q2)
case 3:return A.h(null,v)}})
return A.i($async$Q2,v)},
aNl(d,e){return C.hSl(d,e)},
hSl(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aNl=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lL("family_trees",A.a([C.hb4(e,d)],p),null,B.cG),$async$aNl)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lL("family_trees",A.a([C.hb5(e,d)],p),null,B.cG),$async$aNl)
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
return A.i($async$aNl,v)},
aNm(d,e){return C.hSm(d,e)},
hSm(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aNm=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("K<1,a4<n,@>>")
m=n.k("ak.E")
l=A.B(new A.K(e,new C.fkV(d),n),m)
r=l
w=7
return A.b(A.lL("family_trees",r,null,B.cG),$async$aNm)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.K(e,new C.fkW(d),n),m)
p=k
w=8
return A.b(A.lL("family_trees",p,null,B.cG),$async$aNm)
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
return A.i($async$aNm,v)},
f97(d){return C.hKf(d)},
hKf(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$f97=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Qr("family_trees",A.F(["id",d],x.N,x.z),null,B.cG),$async$f97)
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
return A.i($async$f97,v)},
qN:function qN(d,e,f,g,h){var _=this
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
cuM:function cuM(){},
cuL:function cuL(){},
cuJ:function cuJ(){},
cuK:function cuK(){},
H5:function H5(d,e){this.a=d
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
ajC:function ajC(d,e){this.a=d
this.b=e},
fn4:function fn4(){},
fKZ:function fKZ(d){this.a=d},
flB:function flB(d){this.a=d},
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
bM9:function bM9(){},
bM8:function bM8(){},
bM5:function bM5(){},
bM6:function bM6(){},
bM7:function bM7(){},
fdn:function fdn(){},
f93:function f93(){},
f94:function f94(){},
f95:function f95(){},
fD1:function fD1(){},
fD2:function fD2(){},
fD3:function fD3(){},
fD4:function fD4(d){this.a=d},
fD5:function fD5(){},
fKX:function fKX(d){this.a=d},
fnw:function fnw(d){this.a=d},
fpZ:function fpZ(){},
fq_:function fq_(){},
fq0:function fq0(){},
fq1:function fq1(){},
fq2:function fq2(d){this.a=d},
fCP:function fCP(d){this.a=d},
fKS:function fKS(){},
fKT:function fKT(){},
fKU:function fKU(d){this.a=d},
fnd:function fnd(d){this.a=d},
fne:function fne(d){this.a=d},
fL2:function fL2(){},
fmO:function fmO(d){this.a=d},
fmP:function fmP(d,e){this.a=d
this.b=e},
fmQ:function fmQ(){},
fKE:function fKE(d){this.a=d},
fqL:function fqL(){},
fCL:function fCL(){},
fpW:function fpW(){},
fpX:function fpX(){},
fpY:function fpY(){},
fCH:function fCH(d){this.a=d},
f9B:function f9B(){},
f9C:function f9C(){},
f9D:function f9D(){},
f9E:function f9E(){},
f9F:function f9F(){},
f9S:function f9S(){},
f9T:function f9T(d){this.a=d},
f9P:function f9P(d){this.a=d},
f9Q:function f9Q(){},
f9R:function f9R(){},
fe1:function fe1(){},
fe2:function fe2(){},
fe3:function fe3(){},
fg8:function fg8(){},
fkV:function fkV(d){this.a=d},
fkW:function fkW(d){this.a=d},
cuO:function cuO(d,e){this.a=d
this.b=e},
cuP:function cuP(d,e){this.a=d
this.b=e},
aFA:function aFA(d,e,f){this.a=d
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
wr(d,e){var w,v
if(d==null)return""
w=d.bS()
v=""+w.gce()+"/"+w.gct()+"/"+w.gcj()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gn2()),2,"0")+":"+B.a.aT(B.o.u(w.gFN()),2,"0")},
hB3(){var w,v=$.pi(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"WS"+B.d.fW(u)},
ar7(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$ar7=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$ar7)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f2("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bG),$async$ar7)
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
p=A.a9(m)
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
return A.i($async$ar7,v)},
ar8(d){return C.hB4(d)},
hB4(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$ar8=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$ar8)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hB("ngmy_worksheet_project_qr_stashes_v1",A.F(["stashes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cG,null),$async$ar8)
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
return A.i($async$ar8,v)},
ara(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$ara=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$ara)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hB3()
w=4
return A.b(C.ar7(),$async$ara)
case 4:r=h
q=B.a.i(e)
p=B.dJ.aJ(t)
J.aF(r,s,A.F(["ownerEmail",q,"projectId",f,"payload",B.cS.gcv().aJ(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(C.ar8(r),$async$ara)
case 5:u=new A.a_q("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ara,v)},
ar9(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ar9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c3(),$async$ar9)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.ar7(),$async$ar9)
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
try{s=B.c4.ca(0,B.cE.aJ(t))}catch(h){r=A.a9(h)
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
return A.b(C.ar8(q),$async$ar9)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ar9,v)},
h5y(){var w=new A.S(Date.now(),0,!1).a6()
return"wst_"+(1000*w.a+w.b)+"_"+B.cI.aB(999999)},
hB5(d){var w,v,u,t,s,r,q
try{w=A.afp(d)
if(w==null)return d
v=w
if(J.KN(v)>960||J.KM(v)>960){s=v
r=J.KN(v)>=J.KM(v)?960:null
v=A.afo(s,J.KM(v)>J.KN(v)?960:null,B.Nu,r)}s=v
u=A.al_(82).Sq(s,B.yl)
if(J.ad(u)===0)return d
s=new Uint8Array(A.ce(u))
return s}catch(q){t=A.a9(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
ceo(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$ceo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hB5(e)
$.cek.n(0,s,t)
u=C.bBy(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ceo,v)},
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
break}p=C.h5y()
w=7
return A.b(C.ceo(p,q),$async$b0P)
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
return A.i($async$b0P,v)},
cel(d){var w=0,v=A.j(x.T),u,t,s
var $async$cel=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cen(s),$async$cel)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcv().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cel,v)},
a7G(d){var w=0,v=A.j(x.H),u,t
var $async$a7G=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hic(d)
if(t==null){w=1
break}$.cek.W(0,t)
w=3
return A.b(C.bBx(t),$async$a7G)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a7G,v)},
bBy(d,e){return C.i17(d,e)},
i17(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bBy=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aMh
w=7
return A.b(n==null?$.aMh=I.fTr():n,$async$bBy)
case 7:r=g
q=new Uint8Array(A.ce(e))
p=J.mB(r,"thumbs","readwrite")
B.iD.ma(J.mz(p,"thumbs"),q,l)
w=8
return A.b(J.pl(p),$async$bBy)
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
return A.i($async$bBy,v)},
bBx(d){return C.i15(d)},
i15(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bBx=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aMh
w=7
return A.b(o==null?$.aMh=I.fTr():o,$async$bBx)
case 7:r=f
q=J.mB(r,"thumbs","readwrite")
B.iD.Fi(J.mz(q,"thumbs"),m)
w=8
return A.b(J.pl(q),$async$bBx)
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
C.an7.prototype={}
C.aXa.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bes(),f=h.x!=null&&h.yH(i).length===0
if(h.x!=null)w=f?B.aZ:B.bI
else w=h.gT3()?B.bI:B.dT
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.bdm,B.q,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.eGm,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h5,i,i,i),B.S,D.f8n,B.at,A.d(C.wr(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.f4k,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.aYW,i,i,i,i,B.XX,i,i,i)
q=A.m(16)
p=A.I(B.aL,B.q,1)
o=A.I(B.aZ.j(0.28),B.q,1)
n=A.fVm(h.d)
o=A.p(B.A,C.aX9(A.ft8(h.e,n),30),B.f,i,i,new A.o(B.lD,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.f_M,B.L,i,i)
m=A.m(14)
l=A.I(B.aL,B.q,1)
q=A.p(i,A.v(A.a([o,B.P,n,B.bA,D.f8E,B.ac,A.p(i,A.v(A.a([D.fnJ,B.bA,A.d(A.Aj(h.c),i,i,i,i,i,i,D.eVR,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.eZ,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,p,q,i,i,B.n),i,i,i,i,K.agt,i,i,i)
p=A.m(16)
m=A.I(B.aL,B.q,1)
l=j.aPb("Original due",C.wr(h.r,!1))
n=j.aPb("Current due",C.wr(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.p(i,A.v(A.a([l,B.P,n,B.S,A.p(i,A.d(h.gaJo(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.AG,i,i,1/0),B.S,j.ccd(),B.P,j.c_X(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bk,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aL,B.q,1)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.f9A,B.at,A.d(q,i,i,i,i,i,i,D.f_4,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,n,o,i,i,B.n),i,i,i,i,B.bk,i,i,1/0)],s))}if(h.gaEd()){q=A.m(14)
o=A.I(B.cp,B.q,1.6)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fp1,B.P,A.bw(A.m(12),A.ek(new A.a7(1/0,88,A.b3(i,i,i,new A.Vg(h.ax,B.M,D.eK5,!0,3.5,i),B.au),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.EX,i,i,i)],s))}p.push(B.aA)
p.push(D.fhm)
return A.p(i,A.v(A.a([r,new A.C(B.agw,A.v(p,B.aj,i,B.e,B.j,0,B.p),i)],s),B.aj,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aPb(d,e){var w=null
return A.A(A.a([A.D(A.d(d,w,w,w,w,w,w,D.a7c,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eWQ,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
ccd(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a8p(B.dT,u,"Not paid yet")
w=t.yH(null).length
v=w===0?B.aZ:B.bI
return this.a8p(v,u,C.wr(t.x,!0))},
c_X(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a8p(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a8p(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a7c,u,u,u)
v=A.U(d).k("K<1,hh>")
v=A.B(new A.K(d,new C.c0d(),v),v.k("ak.E"))
return A.v(A.a([w,B.an,A.bZ(B.bB,v,B.bs,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a8p(d,e,f){var w=null
return A.A(A.a([A.D(A.d(e,w,w,w,w,w,w,D.a7c,w,w,w),1),new A.dn(1,B.ci,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dL,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b9c.prototype={
a5(d,e){new A.Vg(this.b,B.M,e,!0,3.5,null).a5(d,e)},
ar(d){return d.b!==this.b}}
C.ane.prototype={
U(){return new C.aBs(A.a([],x.bp))},
gdX(){return this.c}}
C.aBs.prototype={
a_(){this.a1()
this.Ic()},
Ic(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ic=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1a(t.a.c),$async$Ic)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dDM(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Ic,v)},
aR3(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aQ,s=A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bq:B.bn).j(0.22)
w=A.m(10)
return A.br(v,new A.b4(4,r,new A.aA(u,1,B.q,-1)),v,B.bk,v,v,v,v,!0,new A.b4(4,w,new A.aA((this.a.d.a?B.bq:B.bn).j(0.22),1,B.q,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.m(10),D.aWy),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aR2(d){return this.aR3(d,null)},
OL(d){return this.cfN(d)},
cfN(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OL=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Gc:B.eG
w=7
return A.b(new A.hW().BI(72,900,900,n),$async$OL)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.ff(),$async$OL)
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
return A.i($async$OL,v)},
aZt(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aQ,o=A.m(10),n=A.I((q?B.bq:B.bn).j(0.18),B.q,1)
if(d)q=B.cZ
else q=s.a.d.a?B.bq:B.bn
q=A.W(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aQ:B.aB,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cZ
else u=s.a.d.a?B.bq:B.bn
t=x.p
u=A.D(A.v(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fv(r,r,r,r,r,r,r,r,r,r,r,B.cZ,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c8)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.W(B.cA,s.a.d.a?B.bq:B.bn,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c8))
return A.p(r,A.A(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.kh,D.boR,r,r,r)},
CF(d){return this.bxy(d)},
bxx(){return this.CF(null)},
bxy(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
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
i=a3?null:A.fVm(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.vO?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",a4,new C.dDv(),new C.dDw(a2,t,a5,r,new C.dDx(a2,t),o,n,j),B.eE,!0,x.y),$async$CF)
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
break}if(f.length===0||e<=0){t.c.I(x.q).f.R(D.eQr)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.R(D.eP6)
w=1
break}a1=A.ft8(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.vO?"male":"female"
w=7
return A.b(A.agN(a3,A.h2i(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$CF)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.vO?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a9(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c0(a3.gcj(),a3.gce(),a3.gct(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c0(a4.gcj(),a4.gce(),a4.gct(),0,0,0,0,0)))a5.cIm(a2.a)
w=8
return A.b(A.agN(t.a.c,a5),$async$CF)
case 8:case 5:w=9
return A.b(t.Ic(),$async$CF)
case 9:case 1:return A.h(u,v)}})
return A.i($async$CF,v)},
aRF(d,e,f,g){var w,v,u,t,s,r,q,p=null
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
Rr(d){return this.cx8(d)},
cx8(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Rr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",s,new C.dDP(),new C.dDQ(t,d),B.hX,!0,x.y),$async$Rr)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.S(s,0,!1)
case 4:w=7
return A.b(A.agN(t.a.c,d),$async$Rr)
case 7:w=8
return A.b(t.Ic(),$async$Rr)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Rr,v)},
Np(d,e){return this.bIf(0,e)},
bIf(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Np=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.l_(s,"Cancel","Delete",e.b+" \xb7 "+A.Aj(e.c)+" will be removed from this device.","Delete this debt?"),$async$Np)
case 3:if(!g){w=1
break}w=4
return A.b(C.fnk(t.a.c,e.a),$async$Np)
case 4:w=5
return A.b(t.Ic(),$async$Np)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Np,v)},
adR(d){return this.c9G(d)},
c9G(d){var w=0,v=A.j(x.H),u=this,t
var $async$adR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bX(B.K,null,new C.dDJ(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$adR)
case 2:return A.h(null,v)}})
return A.i($async$adR,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.e42
w=J.dH(m.d,new C.dDR())
v=A.B(w,w.$ti.k("J.E"))
w=J.dH(m.d,new C.dDS())
u=A.B(w,w.$ti.k("J.E"))
t=B.d.cI(v,0,new C.dDT())
w=A.m(18)
s=m.a.d.a
r=s?D.cli:D.awI
q=A.I(s?B.cZ.j(0.35):B.cZ.j(0.18),B.q,1)
s=A.p(l,D.bO2,B.f,l,l,new A.o(B.cZ.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.av,A.D(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.aB,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a1,!0,A.m(12),A.aL(!1,A.m(12),!0,D.e3r,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dDU(m),l,l,l,l,l,l,l),B.f,B.cZ,0,l,l,l,l,l,B.ag)],p),B.m,l,B.e,B.j,0,l,l)
o=A.D(m.ctm("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Aj(t)
r=A.a([A.p(l,A.v(A.a([s,B.ac,A.A(A.a([o,B.ab,A.D(m.b4u(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.ax,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.agq,l,l,l),B.aA],p)
if(J.cl(m.d)){w=m.a.d.a
s=w?B.dX:B.c
q=A.m(18)
o=A.I((w?B.bq:B.bn).j(0.12),B.q,1)
n=A.p(l,D.bJ1,B.f,l,l,new A.o(B.cZ.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.aB,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.ac,w,B.at,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bn,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.brg,l,l,1/0))}else{w=m.gcf5()
s=A.B(new A.K(v,w,A.U(v).k("K<1,r>")),x.l)
if(u.length!==0){q=A.a([B.an,new A.C(D.bsV,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bn,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.K(u,w,A.U(u).k("K<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.aj,l,B.e,B.j,0,B.p)},
b4u(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.bq:B.bn).j(0.12),B.q,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bq:B.bn,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cZ
else w=v.a.d.a?B.aQ:B.aB
return A.p(u,A.v(A.a([q,B.bA,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eh,u,u,u)},
ctm(d,e){return this.b4u(!1,d,e)},
cf6(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.yH(j).length,h=d.bdD()
if(d.x!=null){w=d.yH(j).length
v=w===0?B.cZ:B.bI}else if(d.gT3())v=B.bI
else{if(h)w=B.cZ
else w=k.a.d.a?B.bq:B.bn
v=w}if(d.x!=null){w=d.yH(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wr(u,!1)}else{u.toString
t="Paid "+C.wr(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wr(w,!1)+" \xb7 "+i+" missed":"Due "+C.wr(w,!1)}w=k.a.d.a?B.dX:B.c
u=A.m(18)
if(d.gT3()&&d.x==null)s=B.bI.j(0.35)
else s=(k.a.d.a?B.bq:B.bn).j(0.12)
s=A.I(s,B.q,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bm:B.lD
o=A.I(d.gT3()&&d.x==null?B.bI.j(0.45):B.cZ.j(0.28),B.q,1.4)
n=d.x!=null?0.55:1
m=A.fVm(d.d)
o=A.p(B.A,A.dc(C.aX9(A.ft8(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aQ:B.aB
m=x.p
n=A.a([new A.dn(1,B.ci,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaEd())B.d.v(n,A.a([B.eb,A.W(B.MA,B.cZ.j(0.8),j,j,j,14)],m))
p=A.D(A.v(A.a([A.A(n,B.m,j,B.e,B.j,0,j,j),B.cX,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.Aj(d.c)
l=k.a.d.a?B.aQ:B.aB
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aG(!1,B.a1,!0,j,A.aL(!1,q,!0,new A.C(W.aga,A.A(A.a([o,B.bf,p,B.ab,A.v(A.a([n,B.bA,A.W(B.ex,(k.a.d.a?B.bq:B.bn).j(0.5),j,j,j,18)],m),B.dG,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dDL(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ag),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.dc,j,j,j,j)}}
C.u_.prototype={}
C.ajB.prototype={
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
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.atf,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.Fd,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f3(m,A.A(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.eg)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(D.bo4,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cD:B.bl,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.D(new A.C(B.fo,A.v(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.eKQ)
a2=A.a([A.A(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.C(B.v7,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a3,B.a7,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.l9,A.v(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.q,1),a2,a0,a0,B.n),a0,a0,a0,B.h7,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.ax,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bpg,a0,a0,a0,a0)}}
C.aSZ.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bg?B.bg:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.D(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bl:B.cD,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.m,q,B.e,B.j,0,q,q),B.cX,n],m)
if(p.z)o.push(new A.C(B.v4,n,q))
return new A.C(B.dc,A.v(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.S3.prototype={
U(){return new C.bcO()}}
C.bcO.prototype={
gbW3(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.e3Y,D.e43],l)
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
k.push(A.aE(n,new A.C(B.eF,A.v(A.a([new A.C(B.mh,new A.cm(B.aO,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.Dv(!0,new C.ajB(v,q.d,q.e,new C.d3A(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d3B(o,v),n,n,n,n,n,n,!1,B.a8))}k.push(new A.C(D.bpz,A.bJ(D.fue,new C.d3C(o,d),A.bk(B.b6,n,n,n,n,B.o7,n,n,new A.b7(A.m(16),B.Y),n,n,n)),n))
return A.bn(!0,new A.cV(new A.aY(0,1/0,0,m.a.b*0.9),A.cB(k,n,D.btN,n,n,B.ah,!0),n),!0,!1,B.af,!0,!0)}}
C.n5.prototype={
af(){var w=this
return A.F(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a6().ac()],x.N,x.z)},
bah(d,e,f){return new C.n5(this.a,e,d,f)}}
C.H4.prototype={
w2(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.H4(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aCq(d){var w=null
return this.w2(w,w,w,w,w,d,w,w,w,w,w,w)},
cEc(d){var w=null
return this.w2(w,w,w,w,d,w,w,w,w,w,w,w)},
baf(d,e,f){var w=null
return this.w2(d,w,w,w,w,w,w,w,e,w,f,w)},
cER(d){var w=null
return this.w2(w,w,w,w,w,w,d,w,w,w,w,w)},
cF_(d){var w=null
return this.w2(w,w,w,w,w,w,w,w,w,d,w,w)},
cEa(d){var w=null
return this.w2(w,w,w,d,w,w,w,w,w,w,w,w)},
cF1(d){var w=null
return this.w2(w,w,w,w,w,w,w,w,w,w,w,d)},
cE7(d){var w=null
return this.w2(w,w,d,w,w,w,w,w,w,w,w,w)},
cE2(d){var w=null
return this.w2(w,d,w,w,w,w,w,w,w,w,w,w)},
Fb(d){var w=null
return this.w2(w,w,w,w,w,w,w,d,w,w,w,w)},
cF9(d,e,f,g,h,i,j,k,l,m,n){return this.w2(d,e,f,g,null,h,i,j,k,l,m,n)},
af(){var w=this
return A.F(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cBT(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bM4(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.C2.gec(D.C2))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a2u)
q=l.$2("frame",D.a1W)
l=l.$2("texture",D.a1R)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cF9(p,u,t,q,r,A.qD(d.h(0,"ribbon"))?A.FA(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.YD.prototype={
U(){return new C.ayv(A.a([],x.I),D.M8)},
gdX(){return this.c}}
C.ayv.prototype={
a_(){var w,v=this
v.a1()
v.f=A.za(0,1)
w=$.aw()
v.z=new A.ar(B.as,w)
v.Q=new A.ar(B.as,w)
v.kQ()
w=v.a
C.bzV(w.c,w.d).bz(new C.d4g(v),x.fL)},
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
return A.b(C.Kf(s.c,s.d),$async$kQ)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d44(t,r))
t.aum()
case 1:return A.h(u,v)}})
return A.i($async$kQ,v)},
gaqY(){var w,v=this
if(!J.cl(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
aum(){var w,v,u=this.gaqY(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saV(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saV(0,w==null?"":w)},
c86(d){this.m(new C.d41(this,d))
this.aum()},
ML(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$ML=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.n5(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aP8(r.c,r.d,s),$async$ML)
case 3:w=4
return A.b(t.kQ(),$async$ML)
case 4:if(t.c==null||J.cl(t.d)){w=1
break}q=J.q4(t.d,new C.d3D(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d3E(t,p))
t.aum()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.AL(p+1,B.cr,B.kG),$async$ML)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$ML,v)},
Ar(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ar=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaqY()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aP8(o.c,o.d,new C.n5(s,r,q,new A.S(p,0,!1))),$async$Ar)
case 3:w=4
return A.b(t.kQ(),$async$Ar)
case 4:if(t.c==null){w=1
break}t.m(new C.d45(t))
case 1:return A.h(u,v)}})
return A.i($async$Ar,v)},
Nq(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Nq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaqY()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d3M(r),s,null,!0,!0,x.y),$async$Nq)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bzG(s.c,s.d,r.a),$async$Nq)
case 4:t.m(new C.d3N(t))
w=5
return A.b(t.kQ(),$async$Nq)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.T6(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Nq,v)},
xY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ar(),$async$xY)
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
return A.b(C.Qj(s,r.r,o,p,q),$async$xY)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hiF(s,r.x,r.r),$async$xY)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Kf(s.c,s.d),$async$xY)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.L(l,new C.n5(""+(m+k),q,B.a.i(j.b),new A.S(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.As(r.c,r.d,l),$async$xY)
case 11:w=12
return A.b(t.kQ(),$async$xY)
case 12:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$xY,v)},
a_G(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_G=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ar(),$async$a_G)
case 5:case 4:if(t.c==null){w=1
break}s=t.gxW(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dL(D.ys,new C.d42(t),new C.d43())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mm("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gS(o)
p.push(new F.mm(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fWZ(o,new F.r6(s,r,"",p,new F.uk(q.d,null,null,null,null,"","","")),null),$async$a_G)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a_G,v)},
N8(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$N8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ar(),$async$N8)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bX(D.abR,null,new C.d3I(t),s,!0,!0,!0,D.aLn,!1,!1,x.N),$async$N8)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cEc(r)
t.m(new C.d3J(t,q))
s=t.a
w=7
return A.b(C.QT(s.c,s.d,q),$async$N8)
case 7:case 1:return A.h(u,v)}})
return A.i($async$N8,v)},
Wg(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bX(D.abR,null,new C.d3O(t),r,!0,!0,!0,D.aLn,!1,!1,x.e),$async$Wg)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d3P(t,s))
r=t.a
w=4
return A.b(C.QT(r.c,r.d,s),$async$Wg)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.AL(0,B.dV,B.ov)
case 1:return A.h(u,v)}})
return A.i($async$Wg,v)},
bNn(d){var w=d.bS(),v=B.a.aT(B.o.u(w.gce()),2,"0"),u=B.a.aT(B.o.u(w.gct()),2,"0")
return""+w.gcj()+"-"+v+"-"+u},
gxW(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bVj()
if(r.e)w=D.aaE
else if(J.cl(r.d)){w=r.y
v=r.gxW(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eVj,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.C(A0.ahr,new C.XW(w,v,0,q),q),q),B.bx,t,B.an,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kb.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aE(q,A.p(q,D.eGc,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dO.j(0.45),B.J,18)],x.V),E.vD,B.n),q,q,q,q,B.Y6,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcB0(),q,q,q,q,q,q,!1,B.a8))
w.push(B.S)
w.push(A.hc(D.bFj,D.ftI,r.gaL7(),q))
B.d.v(u,w)}w=A.av(A.cd(A.v(u,B.m,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.ew,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kb.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dQ:B.zQ
u=A.v(A.a([new A.C(D.bqA,w,q),A.D(A.Ip(v,new C.d4e(r),J.ad(r.d)+1,q,r.gc85(),u,B.aO),1),r.bAq()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c8(q,D.ad9,new A.an(B.W,q,B.b_,B.r,A.a([D.aJT,A.bn(!0,A.v(A.a([p,A.D(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bVj(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cy(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Jo(B.dW,"AI",h.gbyl(),!0))
if(h.a.f)f.push(new C.Jo(B.n9,"Cover",h.gbIP(),!1))
if(h.a.f)f.push(new C.Jo(B.y5,"Header",h.gbDR(),!1))
if(J.cy(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Jo(B.tP,"Print",h.gch6(),!1))
if(h.a.f&&J.cy(h.d)&&h.r>=0){v=h.w
u=v?B.hy:B.jg
t=v?"Save":"Edit"
f.push(new C.Jo(u,t,v?h.gcne():new C.d3Z(h),!1))}if(h.a.f)f.push(new C.Jo(B.hx,"Add page",h.gaL7(),!1))
v=C.heT(h.y.Q)
u=h.gxW(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.dla
else{k=new A.aW(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.aA(E.jM.j(0.5),1,B.q,-1)
j=A.p(g,A.W(l.a,D.kb,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bP(i,i,i,i),new A.bq(k,k,k,k),g,new A.a8(B.a3,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kb.j(0.85)
p.push(new A.bD(1,B.bi,A.aE(B.c5,A.v(A.a([k,B.bA,new A.x(l.b,g,new A.G(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a8),g))}return new C.ajB(v,u,t+" \xb7 "+s+" "+r,new C.d4_(h),A.A(p,B.m,g,B.e,B.j,0,g,g),g)},
zu(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ar(),$async$zu)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gS(r)
s.push(q.b+" "+q.c)}p=F.a1p(B.d.aI(s," "))
s=t.c
s.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.d3F(t,p),s,null,!0,!0,x.N),$async$zu)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.xY(),$async$zu)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Df(),$async$zu)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.EQ("Swahili (Kiswahili)",!0),$async$zu)
case 18:w=16
break
case 17:w=19
return A.b(t.cxM(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zu)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zu,v)},
Y8(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(E.jM.j(0.3),B.q,1),r=x.p
return new A.C(B.cH,A.aL(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.W(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.vD,B.a6),w,42,w,w,w,w,w,42),B.bf,A.D(A.v(A.a([A.d(f,w,w,w,w,w,w,A8.SU,w,w,w),A.d(g,w,w,w,w,w,w,O.SN,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d40(d,h),w,w,w,w,w,w,w),w)},
Df(){return this.bMS()},
bMS(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Df=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d3S(r),a7,null,!0,!0,x.ei),$async$Df)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eO("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.ca(null,null,!1,null,new C.d3T(o),a7,null,!0,!0,x.H).fb(new C.d3U(a6))
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
return A.b(C.afZ(a0,a7,new C.d3V(o),d,l,e,j),$async$Df)
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
if(l!=null&&a6.a)A.a6(l,!0).eI()
l=o
l.shS($.aw())
J.aPA(l,0)
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
a7=j.bah(m.b.h(0,a4).b,a7,new A.S(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.As(j.c,j.d,l),$async$Df)
case 11:w=12
return A.b(r.kQ(),$async$Df)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.ys[a1].a)
a5=l.cBT(j,12,a7)
l=r.a
w=15
return A.b(C.QT(l.c,l.d,a5),$async$Df)
case 15:if(r.c!=null)r.m(new C.d3W(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.AL(0,B.dV,B.ov)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.I(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.R(A.b2(a3?A.cpo("Undo",new C.d3X(r,p,f),null):null,null,null,null,null,B.r,null,j,null,B.ed,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Df,v)},
EQ(d,e){return this.cxN(d,e)},
cxM(d){return this.EQ(d,!1)},
cxN(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$EQ=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eO("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.ca(null,null,!1,null,new C.d47(a0),k,null,!0,!0,x.H).fb(new C.d48(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.ch(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a1C(m,new C.d49(a0)),$async$EQ)
case 10:w=8
break
case 9:w=11
return A.b(C.bBp(new C.d4a(a0),m,a2),$async$EQ)
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
if(o!=null&&f.a)A.a6(o,!0).eI()
o=a0
o.shS($.aw())
J.aPA(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.I(x.q).f
k=q
o.R(A.b2(null,null,null,null,null,B.r,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.bah(J.q(p,g).b,j.a,new A.S(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.As(k.c,k.d,o),$async$EQ)
case 12:w=13
return A.b(r.kQ(),$async$EQ)
case 13:o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(A.cpo("Undo",new C.d4b(r,d),null),null,null,null,null,B.r,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$EQ,v)},
bAq(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d3G(v):u
r=A.aH(u,u,u,u,A.W(D.bB2,s?D.kb:B.b2,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cy(v.d)&&!v.w&&v.r>=0)s=A.hc(A.W(B.vj,B.EB,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.EB,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbIo(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kb.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.D(A.av(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d3H(v):u
return A.bn(!0,new A.C(D.bqo,A.A(A.a([r,s,A.aH(u,u,u,u,A.W(B.ex,t<J.ad(v.d)?D.kb:B.b2,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.YH.prototype={
U(){return new C.bd8(new A.ar(B.as,$.aw()))}}
C.bd8.prototype={
ga0O(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
gbLD(){var w,v=this.ga0O()
A:{if("cover"===v){w=D.cR9
break A}if("book"===v){w=D.cN3
break A}w=D.ddZ
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jM.j(0.5),n=x.p,m=A.A(A.a([D.dlb,B.av,D.bvK,A.aH(q,q,q,q,B.lg,q,q,q,new C.d60(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jI(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d61(r),r.ga0O()==="page",q,q,q,q))
if(r.a.d)l.push(A.jI(q,q,q,D.fox,q,new C.d62(r),r.ga0O()==="book",q,q,q,q))
l.push(A.jI(q,q,q,D.fc9,q,new C.d63(r),r.ga0O()==="cover",q,q,q,q))
l=A.bZ(B.bB,l,B.bs,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.T,!1,q,!0,B.r,q,A.aN(),r.d,q,q,q,q,q,2,A.br(q,new A.b4(4,A.m(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kw,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dl,!0,B.a5,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbLD(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mC(q,B.c.j(0.08),new A.x(s,q,B.IA,q,q,q,q,q,q,q,q,q),B.hB,new C.d64(r,s),q,q,q,q))}return A.eG(q,E.Al,A.cd(A.v(A.a([m,B.S,D.frG,B.an,l,B.ac,k,B.P,A.bZ(B.bB,w,B.bs,6,6),B.aA,A.dq(D.bFg,D.fsr,new C.d65(r,d),A.bk(B.b6,q,q,q,q,B.o7,q,q,new A.b7(A.m(16),B.Y),q,q,q)),B.at,D.fmS],n),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.fy,q,q,B.ah),q,q,q,D.aha,B.d0,q,new A.b7(p,new A.aA(o,1.4,B.q,-1)),q)}}
C.YF.prototype={
U(){return new C.ayw(A.a([],x.Y))},
gdX(){return this.c}}
C.adM.prototype={}
C.ayw.prototype={
a_(){this.a1()
this.kQ()},
kQ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Qn(p.c,p.d),$async$kQ)
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
return A.b(C.Kf(t.a.c,q),$async$kQ)
case 7:m.push(new l.adM(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d4v(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kQ,v)},
b5E(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Ps(d,e){return this.c9E(0,e)},
c9E(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Ps=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).c6(A.e7(new C.d4u(u,e),!0,null,x.y)),$async$Ps)
case 2:t=g
w=3
return A.b(u.kQ(),$async$Ps)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.R(D.aNg)
return A.h(null,v)}})
return A.i($async$Ps,v)},
ET(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$ET=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.R(D.aNc)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.afh(s.c,s.d),$async$ET)
case 5:q=e
w=6
return A.b(t.kQ(),$async$ET)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Ps(0,B.d.iC(t.d,new C.d4z(q))),$async$ET)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Qj(p,s.f,r,n,o),$async$ET)
case 10:m=e
w=11
return A.b(t.kQ(),$async$ET)
case 11:if(m&&t.c!=null)t.c.I(x.q).f.R(D.aNg)
case 1:return A.h(u,v)}})
return A.i($async$ET,v)},
OX(d,e){return this.ckY(0,e)},
ckY(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$OX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d4y(t,e),s,null,!0,!0,x.y),$async$OX)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a1P(s.c,s.d,e.a),$async$OX)
case 4:w=5
return A.b(t.kQ(),$async$OX)
case 5:case 1:return A.h(u,v)}})
return A.i($async$OX,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bAt(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(E.jM.j(0.6),B.q,1.6)
r=t===1?"space":"spaces"
k.push(A.aE(n,new A.fG(0.7142857142857143,A.p(n,A.v(A.a([D.dlc,B.ac,D.e37,B.at,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kb.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.bb,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcAX(),n,n,n,n,n,n,!1,B.a8))}w=A.m(22)
v=A.I(E.jM.j(0.85),B.q,1.6)
s=A.aE(n,A.p(n,D.bMS,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jM.j(0.6),B.q,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d4A(d),n,n,n,n,n,n,!1,B.a8)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.jM.j(0.5),B.q,1)
w=A.p(n,A.A(A.a([s,B.bf,D.bw5,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eUp,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h5,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bSm,B.n),n,n,n,Am.LB,D.bow,n,n,n)
if(o.e)k=D.aaE
else k=k.length===0?D.b2V:A.co(new C.d4B(k))
return A.c8(n,D.ad9,new A.an(B.W,n,B.b_,B.r,A.a([D.aJT,A.bn(!0,A.v(A.a([w,A.D(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bAt(d){var w,v,u=this,t=null,s=u.b5E(d),r=d.c,q=x.p,p=A.a([A.bY(0,A.f3(B.A,new A.a7(300,420,new C.XW(d.b,s,r,t),t),B.f,B.dt),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aE(t,A.p(t,D.bMb,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b2,B.q,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d4s(u,d),t,t,t,t,t,t,!1,B.a8),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.eU_,t,t,t)
v=r===1?"page":"pages"
return A.aE(t,A.v(A.a([new A.fG(0.7142857142857143,new A.an(B.W,t,B.aa,B.r,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kb.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d4t(u,d),t,t,t,t,t,t,!1,B.a8)}}
C.Jo.prototype={}
C.XW.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dL(D.ys,new C.cDy(m),new C.cDz()),j=m.c,i=D.C2.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.lR:B.bb
v=new C.cDA(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.e0r,28)],x.V)
u=x.p
t=A.a([A.bY(0,A.b3(l,l,l,new C.bap(j.x,h,l),B.au),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a3,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aW(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bq(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.ahs,8,0.85,2.2),v.$4(D.btd,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.ahs,8,0.85,2.4))
else if(r==="corners")t.push(A.bY(0,new A.C(D.bt9,A.b3(l,l,l,new C.bag(h,l),B.au),l),0,0,0))
r=A.W(D.avR[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.atf,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aP,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bY(0,new A.C(D.btF,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aFv(l),D.eJZ),l,l,l,46,0,l))
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
k=h.gbJ().a.snapshot()
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
for(w=e.a,v=e.b,v=[D.eBf,new A.cH([w,0,-1,1]),new A.cH([0,v,1,-1]),new A.cH([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
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
s=n.gbJ().a.snapshot()
w.drawPath((n.e=new A.cF(s)).a,m)
m.delete()
s=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
s.r=j.j(0.9).gp(0)
m=s.H()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
ar(d){return!d.b.A(0,this.b)}}
C.u0.prototype={}
C.Yd.prototype={
U(){return new C.ban()}}
C.ban.prototype={
gnR(){var w=this.d
return w===$?this.d=this.a.c:w},
gxW(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ar(new A.bb(w.b,B.b3,B.aN),$.aw())}return v},
gazH(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ar(new A.bb(w.c,B.b3,B.aN),$.aw())}return v},
gapy(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ar(new A.bb(w.y,B.b3,B.aN),$.aw())}return v},
q(){var w=this,v=w.gxW(0),u=v.T$=$.aw()
v.P$=0
v=w.gazH()
v.T$=u
v.P$=0
v=w.gapy()
v.T$=u
v.P$=0
w.a2()},
aq9(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jI(s,s,s,new A.x(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cX_(this,f,u),e===u,s,s,s,s))}return A.bZ(B.bB,r,B.bs,6,8)},
avP(d){var w=null,v=B.c.j(0.07)
return A.br(w,new A.b4(4,A.m(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lp,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gnR(),a0=f.gxW(0),a1=a0.a.a,a2=f.gazH(),a3=a2.a.a,a4=f.gapy(),a5=d.baf(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a7(190,260,A.f3(B.A,new A.a7(270,370,new C.XW(a5,d,f.a.e,e),e),B.f,B.dt),e),e,e,e)
a0=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a0,e,e,e,e,e,2,f.avP("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cXo(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a5,e,B.am,e,e,e,e)
a2=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a2,e,e,e,e,e,2,f.avP("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cXp(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a5,e,B.am,e,e,e,e)
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
v.push(A.aE(e,A.v(A.a([p,B.cX,new A.x(t.b,e,new A.G(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cXq(f,t),e,e,e,e,e,e,!1,B.a8))}v=A.bZ(B.bB,v,B.bs,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b6.j(0.35):B.c.j(0.07)
m=new A.aW(14,14)
s=f.d
o=new A.aA((s===$?f.d=f.a.c:s).d===n?B.ez:B.K,2,B.q,-1)
q.push(A.aE(e,A.p(e,A.W(D.avR[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bP(o,o,o,o),new A.bq(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cXr(f,n),e,e,e,e,e,e,!1,B.a8))}q=A.bZ(B.bB,q,B.bs,8,8)
a4=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a4,e,e,e,e,e,2,f.avP("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cXs(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a5,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mC,e,e,e)
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
m.push(A.aE(e,A.v(A.a([j,B.bA,new A.x(i,e,new A.G(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cXt(f,k),e,e,e,e,e,e,!1,B.a8))}m=A.bZ(B.bB,m,B.bs,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mC,e,e,e)
k=f.gnR()
return new A.C(new A.Q(0,0,0,a3.f.d),A.bn(!0,new A.cV(new A.aY(0,1/0,0,a1.a.b*0.92),A.cB(A.a([D.fmk,B.ac,d,B.aP,a0,B.S,a2,B.aA,D.fsf,B.P,v,B.aA,D.fmu,B.P,q,B.aA,a4,B.aA,p,B.P,m,B.aA,l,A.kU(e,9,""+B.k.V(f.gnR().f),36,18,new C.cXu(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mC,e,e,e),B.an,f.aq9(D.a2u,f.gnR().r,new C.cXv(f),D.dh9),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mC,e,e,e),B.an,f.aq9(D.a1W,f.gnR().w,new C.cXw(f),D.dhe),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mC,e,e,e),B.an,f.aq9(D.a1R,f.gnR().x,new C.cXy(f),D.diC),B.an,A.iD(e,B.b6,e,B.af,e,new C.cXz(f),e,e,e,D.fgT,f.gnR().z),B.bx,A.bJ(D.flc,new C.cXA(f,a6),A.bk(B.b6,e,e,e,e,B.o7,e,e,new A.b7(A.m(16),B.Y),e,e,e))],w),e,R.ah_,e,e,B.ah,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aFv.prototype={
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
u.saq(D.bT_.av(0,new A.aa(0,0,0+w,0+v)))
d.aP(t,u)},
ar(d){return!1}}
C.bfC.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.X()
w=A.M()
w.saq(D.bS2.av(0,new A.aa(0,0,a3,a4)))
a5.aX(new A.aa(0,0,a3,a4),w)
v=B.k.dw(a2/112)
u=new A.eJ()
u.dB(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cR8[u.aB(9)]
j=u.aB(14)
J.bz(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.aa(n,j,n+m,j+l)
h=A.bA(i,B.hc)
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
e.r=E.jM.j(0.55).gp(0)
d=e.H()
w.drawRect(A.c1(new A.aa(h,j,g,j+2)),d)
d.delete()
j=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
j.r=E.jM.j(0.4).gp(0)
d=j.H()
w.drawRect(A.c1(new A.aa(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aB(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.saq(D.bRq.av(0,new A.aa(0,r,a3,q)))
d=p.H()
w.drawRect(A.c1(new A.aa(0,r,a3,q)),d)
d.delete()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.jk
d=p.H()
w.drawRect(A.c1(new A.aa(0,q,a3,q+14)),d)
d.delete()}w=A.M()
w.r=D.b6h.j(0.72).gp(0)
a5.aX(new A.aa(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.M()
a4.saq(new A.bS(B.A,0.5,B.x,a0,0,A.a([D.bcX.j(0.22),B.K],t),a0,a0).av(0,A.bT(new A.u(w,a2),a1)))
a5.ah(new A.u(w,a2),a1,a4)},
ar(d){return!1}}
C.b8B.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aK(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.kK(new A.o(A.aq(D.kb,D.bhi,w/4),o,new A.bP(B.Y,new A.aA(B.w.j(0.12),1,B.q,-1),B.Y,B.Y),B.JH,o,o,B.n),B.bd,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aFx,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aW(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jM.j(0.6),o,o,new A.bq(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.pV,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aWi,u,D.bSY,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dk,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aFv(o),D.eJU),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aSZ(p.y,r,G.ir,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.r,o,o,o,o,o,2,A.br(o,B.ey,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ir.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f6D,!0,B.a5,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ir.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.D(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.w,o,o,o,o,o,2,A.br(o,B.ey,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ir.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.eYQ,!0,B.a5,B.zf,B.am,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.f6w,o,o,o),B.at,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ir.j(0.5),o,o,o,o,o,o,o,o,11,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.D(A.p(o,o,B.f,D.Eo.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fo,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.Eo.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.D(A.p(o,o,B.f,D.Eo.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aA],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.ir.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Xb(A.dr(A.a([A.dr(o,o,o,o,o,o,o,o,o,D.f0V,B.a.ap(k,0,1)),A.dr(o,o,o,o,o,o,o,o,o,o,B.a.b0(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.ir.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.v(n,B.F,o,B.e,B.j,0,B.p),B.r,o,B.y,o,o,o,o,B.ah)}s.push(A.D(n,1))
s.push(new A.C(B.ia,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.ir.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.A(A.a([u,A.D(A.p(o,A.bw(B.JH,new A.an(B.W,o,B.aa,B.r,A.a([t,new A.C(D.bsH,A.v(s,B.aj,o,B.e,B.j,0,B.p),o),A.ao(0,A.c_(o,new A.o(o,o,o,o,o,new A.a8(B.a3,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bd),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.JH,v,D.bTv,B.n),o,o,o,o,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.r,l,o)}}
C.aok.prototype={
U(){return new C.aC2(A.a([],x._))},
bp(){return this.r.$0()},
pz(){return this.w.$0()},
gdX(){return this.c}}
C.aC2.prototype={
a_(){var w,v
this.a1()
this.vz()
w=this.a
v=w.c
if(v.length!==0)C.a6p(v,w.e,w.d.w)},
vo(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fX1(r,t.e,!1,s.w,new C.dRN(u),null,s),$async$vo)
case 2:w=3
return A.b(u.vz(),$async$vo)
case 3:return A.h(null,v)}})
return A.i($async$vo,v)},
ZQ(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ZQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fX1(r,t.e,!0,s.w,new C.dRM(u),null,s),$async$ZQ)
case 2:w=3
return A.b(u.vz(),$async$ZQ)
case 3:return A.h(null,v)}})
return A.i($async$ZQ,v)},
vz(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vz=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Ah(q.a.c),$async$vz)
case 7:p=e
if(q.c!=null)n=q.e||J.cy(p)
else n=!1
if(n)q.m(new C.dRP(q,p))
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
return A.b(C.G0(q.a.c).cM(0,B.pz),$async$vz)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dRQ(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dRR(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vz,v)},
NV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$NV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.R(D.eNw)
w=3
return A.b(C.G0(t.a.c),$async$NV)
case 3:r=e
w=4
return A.b(C.fCO(t.a.c,r),$async$NV)
case 4:q=e
w=5
return A.b(C.G0(t.a.c),$async$NV)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dRL(t,p))
o=t.c.I(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(null,null,null,q?B.dw:B.cR,null,B.r,null,s,null,B.md,null,null,null,null,null,null,null,null,null,null))
t.a.pz()
case 1:return A.h(u,v)}})
return A.i($async$NV,v)},
Hs(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Hs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i35(l),$async$Hs)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hxQ(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aYA(q,p.e,l,"Each family tree costs $"+B.k.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Hs)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hf1(r)
o=Date.now()
n=t.a.c
m=new C.ky(l,r.toUpperCase(),p,!0,B.T,D.BS,new A.S(o,0,!1),0,n,D.tB)
w=5
return A.b(C.a1W(n,m),$async$Hs)
case 5:w=6
return A.b(t.vz(),$async$Hs)
case 6:t.a.bp()
t.a.pz()
if(t.c==null){w=1
break}t.E2(m)
case 1:return A.h(u,v)}})
return A.i($async$Hs,v)},
E2(d){return this.cbG(d)},
cbG(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$E2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Ah(u.a.c),$async$E2)
case 2:n=l.r2(k.dH(f,new C.dRO(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hv(m,new C.aoe(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$E2)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a1W(u.a.c,o),$async$E2)
case 6:case 5:w=7
return A.b(u.vz(),$async$E2)
case 7:u.a.pz()
return A.h(null,v)}})
return A.i($async$E2,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tx(p)
if(r.e)return A.av(A.mE(q,p?B.bq:B.bn,q,q,q,q,q,q,q,q),q,q,q)
if(J.cl(r.d)){w=p?B.dX:B.c
v=A.m(15)
u=A.aG(!1,B.a1,!0,q,A.aL(!1,q,!0,A.p(q,D.bGl,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.q,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcaK(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aB,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.F3(A.p(q,A.v(A.a([u,B.aP,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bn,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.e1,A.bJ(D.fts,r.gaP7(),A.bk(B.bU,q,q,q,q,q,Al.Y9,q,new A.b7(A.m(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bsD,q,q,1/0),15,B.af,1.05,D.a81,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aB,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b4],v)
if(J.cy(r.d))w.push(A.aH(q,q,q,q,A.W(B.yc,B.aV,q,q,q,q),q,q,q,new C.dRT(r),q,q,q,q,"Sync family trees with database",q))
if(J.cy(r.d))w.push(A.aH(q,q,q,q,A.W(B.y3,B.aV,q,q,q,q),q,q,q,r.gaew(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dq(E.amA,D.fa_,r.gaP7(),A.bk(B.bU,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.F3(r.cxR(J.q(r.d,s),o),14,B.af,1,D.a81,q))
B.d.v(w,u)}return A.v(A.a([p,B.aA,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cxR(d,e){var w=null,v=e.a,u=v?B.dX:B.c,t=A.m(14),s=A.I((v?B.dZ:B.bR).j(0.55),B.q,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.ej,10)],x.V),q=A.m(14),p=A.p(w,D.bFp,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gant(),m=d.d?"":" \xb7 Public",l=d.y===D.ki?" \xb7 View only":"",k=x.p
l=A.D(A.v(A.a([o,B.bA,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aG(!1,B.a1,!0,w,A.aL(!1,q,!0,new A.C(B.bC,A.A(A.a([p,B.bf,l,A.W(B.Mk,v?B.bq:B.bn,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dRS(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aoe.prototype={
U(){return new C.aC_(A.a([],x._),A.aX(x.N),A.b6e())},
bp(){return this.r.$0()},
gdX(){return this.c}}
C.aC_.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.abr()
w=u.a
v=w.c
if(v.length!==0)C.a6p(v,w.e,w.d.w)},
q(){var w=this.w
w.T$=$.aw()
w.P$=0
this.a2()},
a1L(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1L=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xq("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dRd(r),s,null,!0,!0,x.y),$async$a1L)
case 3:if(e!==!0||t.c==null){w=1
break}t.IX()
t.m(new C.dRe(t,r))
w=4
return A.b(t.vq(),$async$a1L)
case 4:t.a.bp()
t.xq(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a1L,v)},
cnT(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.x1$.push(new C.dR8(w,f,d,e))},
aRi(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dm()
u.e2(w,v,0,1)
u.jA(q,q,1,1)
this.w.sp(0,u)},
b7T(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eH(new Float64Array(16))
q.dY(r)
w=q.Cc()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dm()
t.e2(r,u,0,1)
t.jA(v,v,1,1)
t.e2(-r,-u,0,1)
t.is(0,q)
s.sp(0,t)},
abr(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$abr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Ah(u.a.c),$async$abr)
case 2:t=s.r2(r.dH(e,new C.dQH(u)))
if(t!=null&&u.c!=null)u.m(new C.dQI(u,t))
return A.h(null,v)}})
return A.i($async$abr,v)},
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
return A.b(C.fX1(o,t,!1,r,new C.dQW(u),q.a,s),$async$vo)
case 2:n=A
m=J
w=3
return A.b(C.G0(u.a.c),$async$vo)
case 3:p=n.r2(m.dH(e,new C.dQX(u)))
if(p!=null&&u.c!=null)u.m(new C.dQY(u,p))
return A.h(null,v)}})
return A.i($async$vo,v)},
IX(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cA(w,0)},
vq(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a1W(t,s),$async$vq)
case 2:return A.h(null,v)}})
return A.i($async$vq,v)},
a0l(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0l=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tI(q,t.a.c)){t.xq("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.i4e(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a0l)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.IX()
t.m(new C.dR7(t,r))
w=4
return A.b(t.vq(),$async$a0l)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0l,v)},
a_3(){return this.cbI()},
cbI(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tI(q,t.a.c)){t.xq("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.P(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dR5(r,new C.tx(q.ax.a===B.I)),s,null,!0,!0,x.y),$async$a_3)
case 3:if(e!==!0||t.c==null){w=1
break}t.IX()
t.m(new C.dR6(r,t))
w=4
return A.b(t.vq(),$async$a_3)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_3,v)},
V6(d){return this.bxv(d)},
bxv(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$V6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tI(r,t.a.c)){t.xq("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dQv(t,d),r,null,!0,!0,x.P),$async$V6)
case 3:s=f
if(s==null){w=1
break}t.IX()
t.m(new C.dQw(t,s))
w=4
return A.b(t.vq(),$async$V6)
case 4:case 1:return A.h(u,v)}})
return A.i($async$V6,v)},
a26(d){return this.czY(d)},
czY(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a26=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.ca(null,null,!0,null,new C.dRg(u,d,new C.tx(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a26)
case 2:return A.h(null,v)}})
return A.i($async$a26,v)},
c80(d){var w=this,v=w.d
v===$&&A.c()
if(C.tI(v,w.a.c))w.NA(d)
else w.a26(d)},
agZ(d,e){return this.crJ(d,e)},
crJ(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$agZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.dRa(new C.tx(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$agZ)
case 3:case 1:return A.h(u,v)}})
return A.i($async$agZ,v)},
Hx(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Hx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.ki?3:5
break
case 3:w=6
return A.b(C.fKY(t.a.c),$async$Hx)
case 6:s=e
o=t.a
r=C.h3G(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.agZ(!s,!r),$async$Hx)
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
return A.b(A.l_(o,"Cancel","Remove",q.y===D.ki?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Hx)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aNw(t.a.c,t.d.a),$async$Hx)
case 11:t.a.bp()
o=t.c
if(o==null){w=1
break}A.iL(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Hx,v)},
a91(d){return this.bIw(d)},
bIw(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a91=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tI(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b7(s,new C.dQx(p))){o=A.U(s)
p.a=A.r2(new A.cQ(new A.a2(s,new C.dQy(d),o.k("a2<1>")),new C.dQz(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.IX()
t.m(new C.dQA(t,s,d,q))
w=3
return A.b(t.vq(),$async$a91)
case 3:t.xq(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a91,v)},
NA(d){return this.bKA(d)},
bKA(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tI(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a26(d),$async$NA)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.dQE(t,d),r,null,!0,!0,x.P),$async$NA)
case 6:s=f
if(s==null){w=1
break}t.IX()
t.m(new C.dQF(t,s))
w=7
return A.b(t.vq(),$async$NA)
case 7:case 1:return A.h(u,v)}})
return A.i($async$NA,v)},
cyc(){var w=this,v=w.d
v===$&&A.c()
if(!C.tI(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dRf(w))
w.vq()},
XV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$XV=A.e(function(d,e){if(d===1)return A.f(e,v)
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
p=A.bl(new A.K(q,t.gc6w(),A.U(q).k("K<1,n>")).c_(0,new C.dQR()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dQS(t,new C.tx(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$XV)
case 3:o=e
r.T$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.IX()
t.m(new C.dQT(t,p))
w=4
return A.b(t.vq(),$async$XV)
case 4:t.xq("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$XV,v)},
c6x(d){return B.a.i(d.toLowerCase())},
cav(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tI(v,w)
t=r.d
s=C.hUz(t)
C.i39(q,t.b,u,C.hUy(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tx(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a2(l,new C.dRn(),A.U(l).k("a2<1>")).gM(0)
l=n?B.bX:B.iM
v=A.W(B.Zk,n?B.bq:B.bn,o,o,o,18)
u=x.p
v=A.a([new A.C(B.AK,A.aL(!1,o,!0,new A.C(B.hI,A.A(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dRo(p,d),o,o,o,o,o,o,o),o),new A.C(B.n4,p.bVk(m),o)],u)
if(p.d.y===D.ki){t=B.re.j(0.15)
s=A.m(12)
r=A.I(B.re.j(0.45),B.q,1)
q=C.FZ(p.d,p.a.c)
v.push(new A.C(B.xn,A.p(o,A.A(A.a([D.bKz,B.av,A.D(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.ix,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b4],u)
if(C.tI(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Jj("Undo",B.r2,p.gcyb(),m,o,o))
u.push(new C.Jj("Family Book",D.bA9,p.gcau(),m,B.t3,o))
if(C.tI(p.d,p.a.c))u.push(new C.Jj("Display settings",B.Bu,p.gcbH(),m,B.aZ,o))
u.push(new C.Jj("Sync",B.y3,p.gaew(),m,o,o))
t=p.d
if(t.y===D.ki||C.bzN(t,p.a.c)){t=p.d.y===D.ki?"Remove shared tree":"Delete tree"
u.push(new C.Jj(t,B.e4,p.gbIG(),m,B.fY,o))}if(C.tI(p.d,p.a.c))u.push(new C.Jj("Add member",B.vu,new C.dRp(p),m,B.bU,o))
v.push(new A.C(R.agD,A.A(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gant()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.co(new C.dRq(p,m))
v.push(A.D(n,1))
if(w>0){n=p.f
u=A.W(n?K.Zo:Y.Ml,o,o,o,o,o)
v.push(A.av(A.hc(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dRr(p),o),o,o,o))}return A.c8(o,l,A.bn(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bVk(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fu.j(0.35),B.dk,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.W(B.xW,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a1,!0,m,A.aL(!1,m,!0,A.p(m,D.bNB,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.q,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gaew(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.eXe,m,m,m)
r=r.gant()
p=n.d.gant()===1?"member":"members"
o=x.p
p=A.a([s,B.bf,A.D(A.v(A.a([q,B.bA,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tI(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bKL,m,m,m,n.gcli(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jh:B.ml
r=r?"Private":"Public"
r=A.D(n.atL(q,"Privacy",r,n.a.d.w?n.gcxc():m),1)
q=A.D(n.atL(B.y4,"Tree code",n.d.c,new C.dQG(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.A(A.a([r,B.ab,q,B.ab,A.D(n.atL(D.bBS,"Collaborators",p,n.gbZM()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.ki){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aG(!1,B.a1,!0,A.m(999),A.aL(!1,A.m(999),!0,new A.C(B.fH,A.A(A.a([A.W(B.oF,B.c,m,m,m,14),B.eb,A.d("View only",m,m,m,m,m,m,B.aOr,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ag)],o))}return A.p(m,A.bw(u,new A.an(B.W,m,B.aa,B.r,A.a([t,new A.C(B.F0,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bRu,B.n),m,m,m,m,m,m,m,1/0)},
atL(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a1,!0,A.m(14),A.aL(!1,A.m(14),!0,new A.C(L.ahL,A.v(A.a([A.W(d,B.c,w,w,w,18),B.at,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.uq,A.d(f,w,1,B.a2,w,w,w,P.zj,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)}}
C.bcR.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gam(r)&&s.c.length===0)return B.bH
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bcU(s,t),new A.at(w,v))],x.p)
r=r.gdK(r)
B.d.v(u,r.dt(r,new C.d4F(this),x.l))
r=s.c
B.d.v(u,new A.K(r,new C.d4G(this),A.U(r).k("K<1,r>")))
return new A.C(B.tx,new A.a7(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.Jw.prototype={}
C.Ff.prototype={}
C.bcT.prototype={
gbgn(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aHA.prototype={}
C.bcU.prototype={
bKi(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.X()
v=A.M()
v.r=B.bz.j(0.75).gp(0)
v.c=2
v.d=B.bO
d.bA(new A.u(n,w),new A.u(m,w),v)
u=(n+m)/2
t=new A.aP(q.r,B.ap,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.b5(u,q))
s=w-1.1
r=w-8.8
t.E(new A.pr(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.pr(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bF())
q=A.M()
q.r=B.c.gp(0)
d.ah(new A.u(u,w),9,q)
q=A.M()
q.r=B.bz.gp(0)
d.aP(t,q)},
bKg(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.d5_())
w=f.b
v=w+(B.d.gK(a0).b-w)/2
u=B.d.b7(a0,new C.d50(f))
t=new A.K(a0,new C.d51(f),A.U(a0).k("K<1,N>")).c_(0,new C.d52()).cI(0,1/0,B.wB)
w=f.a
d.bA(f,new A.u(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.L)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.H()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lP(m)
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
n=g.gbJ().a.snapshot()
r.drawPath((g.e=new A.cF(n)).a,k)
k.delete()}},
a5(d,e){var w,v,u,t,s,r,q,p,o
$.X()
w=A.M()
w.r=B.bU.j(0.75).gp(0)
w.c=2.2
w.b=B.ae
w.d=B.bO
w.e=B.fz
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.L)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bKg(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bKi(d,w,q.a,q.b)}},
ar(d){return d.b!==this.b}}
C.bgz.prototype={
gc4l(){var w=this.c
if(B.a.i(w.y).length!==0)return D.ddY
switch(w.c.a){case 0:return D.cJ1
case 1:return D.cTV
case 2:return D.d8y}},
gc4o(){var w=this.c,v=C.heq(w.w),u=C.heq(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc4l(),p=t.c,o=I.bAH(p.f),n=t.gc4o(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.aB:B.c,j=A.I(r?B.aB:B.c,B.q,2)
if(o!=null)w=A.rZ(B.A,s,B.co,B.bQ,!1,s,o,!1,s,s)
else{w=A.a([B.d.gK(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a3,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hS(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.ax,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.Fg,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.aB:B.c,B.q,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.f68,s,s,s),B.f,s,s,new A.o(B.c9,s,w,j,s,s,B.n),s,s,s,s,D.buu,s,s,s),s,s,s,-6,-4,s))}k=r?B.cC:B.c
j=A.m(8)
w=A.I(B.d.gK(q).j(0.35),B.q,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dD,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cC,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bn,s,s,s,s,s,s,s,s,7.5,s,s,B.a4,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aE(s,new A.a7(84,112,A.v(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.at,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.aYb,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.buF,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a8)}}
C.bbY.prototype={
a5(d,e){var w,v,u,t,s,r,q
$.X()
w=A.M()
v=this.b
u=v?B.c:D.b8U
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
ar(d){return d.b!==this.b}}
C.bu9.prototype={
B(d){var w=this,v=null,u=new C.f6l(w),t=w.c,s=t?B.cC:B.c,r=A.m(12),q=u.$3(B.hx,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bF:B.f8,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.y0,"Zoom out",w.e)
return A.aG(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.f,t?B.bF:B.f8,v,v,v,1,v,v,v,v,v,22),u.$3(B.ak5,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dn,v,v,v,B.ag)}}
C.bjV.prototype={
B(d){var w=this,v=null,u=B.bU.j(0.15),t=A.I(B.bU,B.q,2),s=w.e,r=x.p
t=A.aE(v,A.p(v,A.v(A.a([A.W(s?K.Zo:Y.Ml,B.bU,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.f2v,v,v,v)],r),B.m,v,B.bb,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a8)
u=A.a([t,B.an,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.f0v,B.L,v,v)],r)
if(s){t=A.a([B.an],r)
s=w.d
B.d.v(t,new A.K(s,new C.eID(w),A.U(s).k("K<1,r>")))
B.d.v(u,t)}return new A.a7(84,v,A.v(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.Zg.prototype={
U(){return new C.aAr()},
bp(){return this.Q.$0()},
gdX(){return this.w}}
C.aAr.prototype={
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
if(t==null)w=C.hW6(w.r,w.f)
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
OY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$OY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.h3G(p.y,p.w)
w=3
return A.b(A.lc(t.a.w,B.HE),$async$OY)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aYA(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$OY)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hxR(p.y,p.w)
t.a.bp()
case 5:w=7
return A.b(An.G9(78,800),$async$OY)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dkS(t,q))
case 1:return A.h(u,v)}})
return A.i($async$OY,v)},
c4n(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
s=v.aCw(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).O(s)},
a8D(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a8D=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dkR(r),s,null,!0,!0,x.y),$async$a8D)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a8D,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tx(j),h=l.a.e,g=A.U(h).k("a2<1>"),f=A.B(new A.a2(h,new C.dl0(l),g),g.k("J.E"))
h=j?B.dX:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bsZ,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.aB,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hp(A.aL(!1,k,!0,new A.C(B.lJ,A.W(B.e4,B.os,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbFm(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jt:B.iP
t=I.bAH(l.as)
if(l.as==null)s=A.W(B.ox,j?B.bq:B.bn,k,k,k,40)
else s=k
s=A.av(A.aE(k,new A.an(B.W,k,B.aa,B.r,A.a([A.hq(u,t,s,k,42),A.ao(0,A.hq(B.bU,k,D.bEu,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc4k(),k,k,k,k,k,k,!1,B.a8),k,k,k)
t=l.d
t===$&&A.c()
t=C.aAt(t,"Full name",B.mi,1,1,i,B.lX)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.S,new C.bgx(i,u,new C.dl1(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bmB],q)
o=l.a.e
B.d.v(p,new A.K(o,new C.dl2(),A.U(o).k("K<1,eQ<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bmD],q)
B.d.v(q,new A.K(f,new C.dl4(),A.U(f).k("K<1,eQ<n?>>")))
o=A.v(A.a([t,B.an,new C.acd(i,r,"Who is their parent?",p,new C.dl5(l),k,o),B.aA,n,B.an,new C.acd(i,m,"Who is their spouse / partner?",q,new C.dl6(l),k,o)],v),B.aj,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aAt(q,"Birth date",D.aj9,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aAt(m,"Birth place",B.ZD,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aAt(n,"Date of death (if deceased)",D.alq,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aAt(p,"Occupation",B.a_H,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.r,w,k),B.aA,s,B.bx,new C.ace(i,"Identity",u,k),B.ac,new C.ace(i,"Family links",o,k),B.ac,new C.ace(i,"Life details",A.v(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aAt(r,"Notes",B.kL,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aAs(i,"Child order",l.cbV(l.at),new C.dl7(l),new C.dl8(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fUq(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dl9(l):k
B.d.v(r,A.a([B.S,new C.aAs(i,"Visible in tree",u,w,new C.dla(l),k)],v))}r.push(B.S)
w=j?B.jt:B.iP
u=A.m(14)
t=A.I(j?B.dZ:B.bR,B.q,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iD(k,B.bU,k,B.af,k,new C.dlb(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.age,k,k,k))
r.push(B.bx)
w=j?B.aQ:B.aB
j=j?B.dZ:B.bR
r.push(A.A(A.a([A.D(A.dV(B.nq,new C.dl3(d),A.df(k,k,k,k,k,k,k,k,k,w,k,k,B.cf,k,new A.b7(A.m(14),B.Y),new A.aA(j,1,B.q,-1),k,k,k,k)),1),B.bf,A.D(A.bJ(D.eGk,l.gc4m(),A.bk(B.aV,k,k,0,B.c,k,B.cf,k,new A.b7(A.m(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.at)
return A.ej(B.ha,k,B.af,h,new A.a7(420,k,A.cd(A.v(r,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),k),D.ah6,k,B.agu,new A.b7(g,B.Y),k,k)},
cbV(d){var w=B.o.G(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.G(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.ace.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jt:B.iP,s=A.m(16)
return A.v(A.a([new A.C(D.ahv,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.dZ:B.bR,B.q,1),s,w,w,B.n),w,w,w,w,B.bk,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bgy.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dX:B.c,r=A.m(12),q=A.I((t?B.dZ:B.bR).j(0.85),B.q,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aQ:B.aB,u,u,u,u,u,u,u,u,14,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.T,!1,u,!0,B.r,u,A.aN(),v.d,u,u,u,u,u,2,A.br(u,B.ey,u,B.v9,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bq:B.bn,u,u,u,u,u,u,u,u,u,u,u,B.cv,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.W(v.f,B.bU,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ai,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.acd.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dX:B.c,s=A.m(12),r=A.I((u?B.dZ:B.bR).j(0.85),B.q,1),q=A.W(B.qX,u?B.bq:B.bn,v,v,v,v),p=A.l(v,v,u?B.aQ:B.aB,v,v,v,v,v,v,v,v,14,v,v,B.a4,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dX:B.c
return A.p(v,new A.Dc(A.a3y(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,v,v,v,B.cv,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.l7,v,v,v)}}
C.bgx.prototype={
B(d){var w=new C.dlc(this)
return A.A(A.a([w.$3(D.YX,"Male",B.N6),B.ab,w.$3(D.ain,"Female",B.MS),B.ab,w.$3(D.xA,"Other",B.na)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aAs.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jt:B.iP,r=A.m(14),q=A.I(t?B.dZ:B.bR,B.q,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.aB,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.D(A.v(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bn,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aGD(u,B.y0,w.f,v),B.bp,new C.aGD(u,B.hx,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eh,v,v,v)}}
C.aGD.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bU.j(0.12)
else w=s.c.a?B.dX:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bU
else t=(s.c.a?B.bq:B.bn).j(0.4)
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,new A.a7(36,36,A.W(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ag)}}
C.acf.prototype={
bNY(d){switch(d.a){case 0:return B.bU
case 1:return B.bz
case 2:return B.cU}},
bNZ(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aVv(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
zP(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dX:B.c
u=A.m(12)
t=A.I((w?B.dZ:B.bR).j(0.85),B.q,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.W(f,B.bU,p,p,p,18),B.av],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bn,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.D(A.v(A.a([q,B.at,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.aB,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.A(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cH,B.xk,p,p,1/0)},
ad0(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jt:B.iP,s=A.m(16),r=A.I(v?B.dZ:B.bR,B.q,1)
return A.v(A.a([new A.C(D.ahv,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bS,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hj5(r,q),o=q.c,n=t.bNY(o),m=I.bAH(q.f),l=t.e.a,k=l?B.dX:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aQ:B.aB,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.ki?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bq:B.bn,s,s,s,s,s,s,s,s,12,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.q,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.hq(u,m,m==null?A.W(B.ox,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.en,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.q,1)
v=A.av(A.p(s,A.d(t.bNZ(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mg,s,s,s),s,s,s)
u=x.p
i=A.a([t.zP("Full name",i,B.mi)],u)
if(p>0)i.push(t.zP("Child order","#"+p,B.MZ))
r=A.a([h,B.at,r,B.aP,l,B.S,v,B.bx,t.ad0("Identity",i),B.ac,t.ad0("Life details",A.a([t.zP("Birth date",q.w,D.aj9),t.zP("Birth place",q.x,B.ZD),t.zP("Date of death",q.y,D.alq),t.zP("Occupation",q.z,B.a_H)],u)),B.ac,t.ad0("Family links",A.a([t.zP("1. Parent",t.aVv(q.d),B.Fu),t.zP("2. Spouse",t.aVv(q.e),B.MR)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.ad0("Notes",A.a([t.zP("Notes",q,B.kL)],u))],u))
r.push(B.bx)
r.push(A.bJ(B.IQ,new C.dlm(d),A.bk(B.aV,s,s,s,s,s,B.cf,s,new A.b7(A.m(14),B.Y),s,s,s)))
return A.eG(s,k,new A.cV(B.lw,A.cd(A.v(r,B.aj,s,B.e,B.Q,0,B.p),B.r,s,B.y,s,B.xp,s,s,B.ah),s),s,s,s,B.F3,B.d0,s,new A.b7(j,B.Y),s)}}
C.Jj.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bq:B.bn
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.xs,A.hp(A.aG(!1,B.a1,!0,A.m(8),A.aL(!1,A.m(8),!0,new A.a7(30,30,A.W(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ag),u,v.c,u,u),u)}}
C.aoh.prototype={
eK(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a6().ac())
w=u.c
v=A.U(w).k("K<1,a4<n,@>>")
w=A.B(new A.K(w,new C.c6S(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iV(w,new C.c6T(),t,x.U))
return s}}
C.aoi.prototype={
U(){return new C.aC1(A.a([],x.bF))},
gdd(){return this.c}}
C.aC1.prototype={
a_(){this.a1()
this.J3()},
J3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$J3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c6W(t.a.c),$async$J3)
case 3:r=e
w=4
return A.b(C.Ah(t.a.c),$async$J3)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qJ(q,new C.dRA(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dRB(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$J3,v)},
xX(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
JM(d,e){return this.cAx(d,e)},
cAx(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$JM=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dRF(q,e))
t=3
w=6
return A.b(d.$0(),$async$JM)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dRG(q))
$.eS.mi()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JM,v)},
WL(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oX(r,s.c,s.e),$async$WL)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JM(new C.dRx(t),"Preparing download\u2026"),$async$WL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WL,v)},
WP(d){return this.bM_(d)},
bM_(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oX(r,s.c,s.e),$async$WP)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.JM(new C.dRy(t,d),"Preparing file\u2026"),$async$WP)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WP,v)},
aeT(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aeT=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wQ.c5().Lw(B.PX,B.tC,!0),$async$aeT)
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
p=A.a9(m)
$.am.$1("[family tree sync pick] file_picker: "+A.t(p))
w=6
break
case 3:w=2
break
case 6:u=A.G8()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aeT,v)},
Xp(d){return this.bWd(d)},
bWd(d){var w=0,v=A.j(x.H),u=this
var $async$Xp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.JM(new C.dRz(u,d),"Restoring family trees\u2026"),$async$Xp)
case 2:return A.h(null,v)}})
return A.i($async$Xp,v)},
Xo(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Xo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.aeT(),$async$Xo)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Xp(s),$async$Xo)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xo,v)},
a1b(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1b=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oX(r,s.c,s.e),$async$a1b)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JM(new C.dRE(t),"Creating QR code\u2026"),$async$a1b)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1b,v)},
a0N(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0N=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Ct()){t.xX("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).c6(A.e7(new C.dRC(),!0,null,x.N)),$async$a0N)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Xp(r),$async$a0N)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0N,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.Aa:B.iM,m=o?D.aeN:B.aQ,l=o?B.aK:B.bR,k=o?B.aQ:B.aB,j=new C.d53(n,m,l,k,o?B.bJ:B.bn)
l=A.aH(p,p,p,p,A.W(B.eA,k,p,p,p,20),p,p,p,new C.dRI(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eF(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.D(C.d4C(!0,B.jj,B.aT,B.aT,q.r?p:q.gcrx(),j,s,"Show restore QR"),1),B.av],u))}s=q.e
r=q.r?p:q.gcnO()
t.push(A.D(C.d4C(!s,B.iU,B.b6,B.by,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.D(C.d4C(!1,B.hz,B.aV,B.bU,q.r?p:q.gbLT(),j,"Photos & books included","Download all trees"),1),B.av],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.D(C.d4C(!1,M.y7,B.aH,B.aM,q.r?p:q.gbWa(),j,s,"Upload backup file"),1))
l=A.a([new C.bcS(v,l,p),B.kt,new C.abw(j,"QR restore",p),B.S,t,B.d5,new C.abw(j,"Backup files",p),B.S,A.A(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kt,new C.abw(j,"One tree",p),B.S],u)
B.d.v(v,J.b6(q.d,new C.dRJ(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cB(l,p,B.Y5,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aV.j(0.35),B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dk,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bn(!0,A.p(p,A.A(A.a([K.aMV,B.bf,A.D(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.AR,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c8(w,n,new A.an(B.W,p,B.aa,B.r,l,p),p,!1,!1,p,p)}}
C.d53.prototype={}
C.bcS.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.k0,28)],x.V)
t=A.ao(p,A.W(B.tT,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.r,A.a([t,new A.C(B.a9,A.A(A.a([A.p(p,D.bN9,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.q,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.o8,A.D(A.v(A.a([D.faY,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bUF,B.n),p,p,p,p,p,p,p,p)}}
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
return A.aG(!1,B.a1,!0,q,A.aL(!1,o,!0,A.ez(A.dc(new A.C(E.XL,A.v(A.a([A.p(q,A.W(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qR,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bA,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cv,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)}}
C.bcV.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.q,1),q=B.aV.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,A.ez(new A.C(B.eP,A.A(A.a([A.p(v,D.bMn,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.q,1),p,v,v,B.n),v,v,v,v,B.qR,v,v,v),B.bf,A.D(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.W(B.hz,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)}}
C.ZB.prototype={
U(){return new C.aC0()},
gdd(){return this.c}}
C.aC0.prototype={
a_(){this.a1()
this.a89()},
a89(){var w=0,v=A.j(x.H),u=this,t
var $async$a89=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b0d(u.a.c,B.Cs),$async$a89)
case 2:t=e
if(u.c!=null)u.m(new C.dRs(u,t))
return A.h(null,v)}})
return A.i($async$a89,v)},
agf(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$agf=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dRt(q))
t=4
p=A.h5j(q.a.d,B.Cs)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.V(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.aqw(n.e,m,l,B.Cs,p,n.f),$async$agf)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dRu(q))
q.c.I(x.q).f.R(D.eOF)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.a9(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(B.a.e9(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dRv(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agf,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.j6:B.pr,n=p?B.i6:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eF(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fqj,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.pC(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.D(A.p(q,A.v(A.a([B.P,u,B.bx,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.bb,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bv,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcnw()
if(u)u=B.Ir
else u=A.W(r.e===!0?B.hy:B.aj8,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a7(1/0,q,A.eB(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cc,q,q,q),t,A.df(q,q,q,q,q,q,q,q,q,B.aV,q,B.fM,q,q,q,new A.aA(B.aV.j(0.55),1,B.q,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.ia,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.az:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.S)
w.push(new A.a7(1/0,q,A.bJ(B.zn,new C.dRw(d),A.bk(B.aV,q,q,q,q,B.fM,q,q,q,q,q,q)),q))
return A.c8(m,o,new A.C(B.a9,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.ZC.prototype={
U(){return new C.bi1(A.yP(B.xa,B.nx,B.tY))}}
C.bi1.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c8(A.eF(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fiB,w,w,w,1,w,!0),B.w,A.yO(this.d,B.bQ,new C.dRK(this,d)),w,!1,!1,w,w)}}
C.aX8.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Pr,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lv.prototype={}
C.a5r.prototype={
U(){return new C.bhI(null,null)}}
C.bhI.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.tq,v,1,v,w)
w.e=A.bj(v,B.py,v,1,v,w)
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
this.bsV()},
B(d){var w,v,u=this,t=B.d.dL(D.a2m,new C.dCU(u),new C.dCV())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cs7(A.c6(new A.h3(A.a([w,v],x.dS)),new C.dCW(u,t),null),!0)}}
C.bhH.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aZK(d,e)
break
case"house":p.lW(d,e,D.cYk)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gef()
$.X()
t=A.M()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ah(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.m0(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Ay(d,e,12)
p.xA(d,e,B.l1,5,14)
break
case"grocery":p.ccE(d,e)
break
case"calculator":p.ccl(d,e)
break
case"lumber":p.ccM(d,e)
break
case"kitchen":p.ccH(d,e)
break
case"landscape":p.lW(d,e,D.cYQ)
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
p.Ay(d,e,8)
p.xA(d,e,B.iR,4,18)
break
case"plumbing":p.ccV(d,e)
break
case"electrical":p.lW(d,e,D.d7R)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.X()
u=A.M()
u.r=B.c.j(q*0.12).gp(0)
d.aX(new A.aa(0,0,0+e.a,0+e.b),u)
p.m0(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.m0(d,e,B.lB.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Ay(d,e,10)
break
case"store":p.cd4(d,e)
break
case"paint_remodel":p.ccQ(d,e)
break
case"roofing":p.ccX(d,e)
break
case"warehouse":p.cdb(d,e)
break
case"vehicles":p.cd9(d,e)
break
case"farm":p.ccy(d,e)
break
case"restaurant":p.ccW(d,e)
break
case"tools":p.cd7(d,e)
break
case"wallet":p.cda(d,e)
break
case"concrete":p.ccr(d,e)
break
case"blueprint":p.ccj(d,e)
break
default:p.aZK(d,e)}},
lW(d,e,f){var w,v=new A.aa(0,0,0+e.a,0+e.b)
$.X()
w=A.M()
w.saq(new A.a8(B.ax,B.aC,B.x,f,null,null).av(0,v))
d.aX(v,w)},
m0(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.gef()/2-h
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
xA(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gef()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
Ay(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.G(s*0.17,0.9)
p=B.k.G(s*0.23,0.85)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aZK(d,e){var w,v=this
v.lW(d,e,D.d6B)
w=v.c
v.m0(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.m0(d,e,B.bK.j(0.45),-w*3.141592653589793*1.4,22)
v.bKc(d,e,B.hU,w)
v.xA(d,e,B.c.j(0.7),6,8)},
bKc(d,e,f,g){var w,v,u,t,s,r,q,p
$.X()
w=A.M()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c1(new A.aa(16,q,t,q+3)),p)
p.delete()}},
ccE(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lW(d,e,D.cf5)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.G(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.G(s,2)
$.X()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.cWH[B.o.G(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.m0(d,e,B.c.j(0.35),w,16)
j.xA(d,e,B.iR,5,12)},
ccl(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lW(d,e,D.cfc)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gef()
$.X()
q=A.M()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ah(new A.u(t/2,s/2),r*(0.18+u*0.08),q)
p=A.ij(g,g,g,g,g,B.a5,B.ch,g,B.eq,B.cd)
for(o=0;o<6;++o){n=v+o*0.9
r=D.d_l[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.G(o,2)
p.saV(0,new A.ep(r,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eP()
p.a5(d,new A.u(t*(0.08+B.o.G(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cfe[o]
l=B.k9.j(0.28+0.3*Math.sin(n))
k=B.o.G(o,2)
p.saV(0,new A.ep(m,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eP()
p.a5(d,new A.u(t*(0.55+B.o.G(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.m0(d,e,B.c.j(0.35),w*1.5,14)
h.m0(d,e,B.ez.j(0.55),-v*3.141592653589793*2,8)
h.m0(d,e,B.Ab.j(0.4),r*2.8,22)
h.xA(d,e,B.ph,8,10)
h.Ay(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.G(w+o*0.22,0.9)
$.X()
r=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
ccM(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lW(d,e,A_.auN)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bA(new A.aa(20,q,u,q+10),B.hA)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.h1,B.oj,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.eq(p),n)
n.delete()}m.m0(d,e,B.h1.j(0.35),w,15)
m.Ay(d,e,8)},
ccH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lW(d,e,D.cXb)
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
k.delete()}j.m0(d,e,B.bK.j(0.4),-w*3.141592653589793*2.2,11)
j.xA(d,e,B.qw,4,14)},
ccV(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lW(d,e,D.cMH)
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
l.m0(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cd4(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lW(d,e,D.csw)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bA(new A.aa(q,14,q+u,22),B.ii)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.f6,B.bK,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.eq(q),o)
o.delete()}n.m0(d,e,B.c.j(0.3),w,16)
n.Ay(d,e,8)
n.xA(d,e,B.uQ,5,13)},
ccQ(d,e){var w,v,u,t,s,r,q,p,o
this.lW(d,e,D.cSl)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.G(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bA(new A.aa(q,p,q+8,p+(18+r*22)),B.hd)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.io,B.dy,B.bK,B.es][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.eq(p),o)
o.delete()}this.m0(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
ccX(d,e){var w,v,u,t,s,r,q,p,o
this.lW(d,e,D.cPV)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.G(v+s*0.12,0.75))
q=B.o.G(s,4)*0.22
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xA(d,e,B.cp,7,11)},
cdb(d,e){var w,v,u,t,s,r,q,p,o,n
this.lW(d,e,D.cv9)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bA(new A.aa(p,o,p+(t-r*8),o+16),B.hA)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.cp,B.aQ,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.eq(o),n)
n.delete()}this.m0(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cd9(d,e){var w,v,u,t,s,r,q,p,o
this.lW(d,e,D.dbB)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.G(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.G(s,2)*0.08)
q=A.bA(new A.aa(r,q,r+28,q+8),B.hA)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.eq(q),o)
o.delete()}this.Ay(d,e,6)},
ccy(d,e){var w,v,u,t,s,r,q,p,o,n
this.lW(d,e,D.cVQ)
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
n.delete()}this.m0(d,e,B.lB.j(0.35),w,14)},
ccW(d,e){var w,v,u,t,s,r,q,p,o=this
o.lW(d,e,D.cY9)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cs(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c1(r),p)
p.delete()}o.xA(d,e,B.qw,5,16)
o.Ay(d,e,7)},
cd7(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lW(d,e,D.d9g)
w=m.c
v=w*3.141592653589793
m.m0(d,e,B.oj.j(0.55),v*3,10)
m.m0(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.oj.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cda(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lW(d,e,D.dc7)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bA(new A.aa(p,o,p+36,o+22),B.ii)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.iR,B.lB,q).gp(0)
n=p.H()
s.drawRRect(A.eq(o),n)
n.delete()}m.Ay(d,e,9)
m.m0(d,e,B.c.j(0.4),w*2.2,12)},
ccr(d,e){var w,v,u,t,s,r,q,p,o,n
this.lW(d,e,D.d1Z)
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
ccj(d,e){var w,v,u,t,s,r,q,p
this.lW(d,e,D.cZ6)
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
d.aX(new A.aa(0,p,0+v,p+6),u)
this.m0(d,e,B.l1.j(0.45),-t*3.141592653589793*2,11)},
ar(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.ard.prototype={
Zs(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aOr(),$async$Zs)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a7G(s),$async$Zs)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$Zs,v)},
aeU(d){return this.cfq(d)},
cfq(d){var w=0,v=A.j(x.H),u=this,t
var $async$aeU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.i3j(d),$async$aeU)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$aeU,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.jt:B.iP
w=x.p
v=A.a([C.aOP(!0,B.qo,1/0,B.pG,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c_(new A.bH(B.b0,t,t,new A.C(B.v2,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.avH,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b0,B.b5,B.x,u,t,t),B.n),B.bd))}v.push(A.ao(8,A.A(A.a([A.D(A.dq(D.bGe,D.f7n,new C.cep(this,d),A.bk(B.aV,t,t,t,B.c,t,B.jx,t,t,t,t,B.c8)),1),B.ab,A.D(A.eB(D.bOm,D.flC,this.gc6u(),A.df(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jx,t,t,D.aWI,t,t,t,B.c8)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fG(1.7777777777777777,A.aG(!1,B.a1,!0,B.qo,new A.an(B.W,t,B.b_,B.r,v,t),B.aq,s,0,t,t,t,t,t,B.ag),t)}}
C.aJW.prototype={
aQ(){this.aY()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdH())
w.b2$=null
w.a2()}}
C.aRK.prototype={}
C.aRJ.prototype={}
C.aPM.prototype={}
C.Yf.prototype={
U(){return new C.axh()}}
C.axh.prototype={
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
JD(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.I(x.q).f.R(D.eP9)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).O(new C.aRK(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.dX:B.c,k=A.m(20),j=A.p(n,D.bO1,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aQ:B.aB,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.D(A.v(A.a([i,B.bA,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bn,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.bf,i,A.aH(n,n,n,n,A.W(B.cA,m?B.bq:B.bn,n,n,n,n),n,n,n,new C.cXM(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bn,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bn,n,n,n,n,n,n,n,n,11,n,n,B.cv,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.h5z(new C.cXN(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aQ:B.aB,n,n,n,n,n,n,n,n,n,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jt:B.iP
r=A.m(12)
q=A.m(12)
p=m?B.dZ:B.bR
t=A.aM(n,B.T,!0,n,!0,B.r,n,A.aN(),u,n,n,n,n,n,2,A.br(n,new A.b4(4,r,B.dg),n,n,n,n,n,n,!0,new A.b4(4,q,new A.aA(p,1,B.q,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cXO(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,S.Iv,n,n,n,n)
u=m?B.aQ:B.aB
m=m?B.dZ:B.bR
return A.eG(n,l,new A.cV(B.lw,A.cd(A.v(A.a([j,B.aP,i,B.at,w,B.P,v,B.aP,t,B.bx,A.A(A.a([A.D(A.dV(B.de,new C.cXP(d),A.df(n,n,n,n,n,n,n,n,n,u,n,n,B.cf,n,new A.b7(A.m(12),B.Y),new A.aA(m,1,B.q,-1),n,n,n,n)),1),B.av,A.D(A.bJ(D.flR,o.ga1v(),A.bk(B.aV,n,n,n,B.c,n,B.cf,n,new A.b7(A.m(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.r,n,B.y,n,B.AS,n,n,B.ah),n),n,n,n,X.AT,B.d0,n,new A.b7(k,B.Y),n)}}
C.Ye.prototype={
U(){return new C.axg()}}
C.axg.prototype={
a_(){this.a1()
var w=$.aw()
this.d!==$&&A.aO()
this.d=new A.ar(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
JD(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.I(x.q).f.R(D.eMR)
return}v=this.c
v.toString
A.a6(v,!1).O(new C.aRJ(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.dX:B.c,n=A.m(20),m=A.p(q,D.bKE,B.f,q,q,new A.o(B.bU.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aB,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.D(A.v(A.a([l,B.bA,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bn,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.bf,l,A.aH(q,q,q,q,A.W(B.cA,p?B.bq:B.bn,q,q,q,q),q,q,q,new C.cXI(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aV.j(0.25),B.q,1)
u=A.W(B.aiV,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.av,A.D(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aB,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bC,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aQ:B.aB,q,q,q,q,q,q,q,q,q,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jt:B.iP
t=A.m(12)
s=A.m(12)
r=p?B.dZ:B.bR
v=A.aM(q,B.T,!0,q,!0,B.r,q,A.aN(),w,q,q,q,q,q,2,A.br(q,new A.b4(4,t,B.dg),q,q,q,q,q,q,!0,new A.b4(4,s,new A.aA(r,1,B.q,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cXJ(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.ku,q,q,q,q)
w=p?B.aQ:B.aB
p=p?B.dZ:B.bR
return A.eG(q,o,new A.cV(B.lw,A.cd(A.v(A.a([m,B.aP,l,B.aA,v,B.bx,A.A(A.a([A.D(A.dV(B.de,new C.cXK(d),A.df(q,q,q,q,q,q,q,q,q,w,q,q,B.cf,q,new A.b7(A.m(12),B.Y),new A.aA(p,1,B.q,-1),q,q,q,q)),1),B.av,A.D(A.bJ(D.fsu,this.ga1v(),A.bk(B.bU,q,q,q,B.c,q,B.cf,q,new A.b7(A.m(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.AS,q,q,B.ah),q),q,q,q,X.AT,B.d0,q,new A.b7(n,B.Y),q)}}
C.XN.prototype={
U(){return new C.aw0()}}
C.aw0.prototype={
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
gIZ(){var w,v=this.e
v===$&&A.c()
w=A.d5(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gai2(){var w=this.f
w===$&&A.c()
w=A.d5(B.a.i(w.a.a))
return w==null?0:w},
gb1A(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aMR(d){var w,v=B.k.D(this.gIZ()+d,0.25,999999),u=B.k.jS(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.aa(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aK(u,w,"")}t.saV(0,u)
this.m(new C.cvl())},
awp(d,e,f,g){var w=null,v=g!=null?A.W(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jt:B.iP,s=A.m(14),r=A.m(14)
u=u?B.dZ:B.bR
return A.br(w,new A.b4(4,s,B.dg),w,B.bC,w,w,w,w,!0,new A.b4(4,r,new A.aA(u,1,B.q,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.m(14),B.a9r),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c6v(d,e,f){return this.awp(d,e,f,null)},
JD(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gai2()<=0){s.c.I(x.q).f.R(D.eR0)
return}r=s.c
r.toString
v=s.gIZ()
u=s.gai2()
t=s.gb1A()
A.a6(r,!1).O(new C.aPM(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tx(n),l=n?B.dX:B.c,k=A.m(24),j=x.O,i=A.a([B.aV.j(0.22),B.bU.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bEc,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.q,1),h,o,new A.a8(B.a3,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.D(A.v(A.a([h,B.bA,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.cv,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.bf,h,A.aH(o,o,o,o,A.W(B.cA,n?B.bq:B.bn,o,o,o,o),o,o,o,new C.cvr(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.T,!0,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.awp(m,"Item name (optional)","Lumber, paint, labor\u2026",B.N4),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,S.Iv,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jt:B.iP
t=A.m(14)
s=A.I(n?B.dZ:B.bR,B.q,1)
r=A.aH(o,o,o,o,A.W(B.y0,n?B.aQ:B.aB,o,o,o,20),o,o,o,new C.cvs(p),o,o,o,o,o,B.c8)
q=p.e
q===$&&A.c()
q=A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),q,o,o,o,o,o,2,D.bPT,B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dU,o,o,o,1,o,o,!1,"\u2022",o,new C.cvt(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a7(52,o,q,o),A.aH(o,o,o,o,A.W(B.hx,n?B.aQ:B.aB,o,o,o,20),o,o,o,new C.cvu(p),o,o,o,o,o,B.c8)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.av,A.D(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),t,o,o,o,o,o,2,p.awp(m,"Amount","0.00",B.hY),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dU,o,o,o,1,o,o,!1,"\u2022",o,new C.cvv(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.B(new A.K(D.cSN,new C.cvw(p,m),t),t.k("ak.E"))
i=A.a([i,B.bx,v,B.aA,h,B.P,s,B.ac,A.bZ(B.bB,u,B.bs,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.S,A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.c6v(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cvx(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.ku,o,o,o,o)],w))}i.push(B.aP)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bU.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gIZ()===B.k.jS(p.gIZ())?B.k.N(p.gIZ()):p.gIZ()
s=p.gb1A()
r=A.Aj(p.gai2())
i.push(A.p(o,A.A(A.a([A.D(A.v(A.a([u,B.at,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bBu(p.gIZ()*p.gai2(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a3,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.jd,o,o,o))
i.push(B.bx)
j=A.m(14)
h=n?B.dZ:B.bR
h=A.df(o,o,o,o,o,o,o,o,o,o,o,o,B.cf,o,new A.b7(j,B.Y),new A.aA(h,1,B.q,-1),o,o,o,o)
i.push(A.A(A.a([A.D(A.dV(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cvy(d),h),1),B.av,A.D(A.dq(D.amt,D.foA,p.ga1v(),A.bk(B.aV,o,o,0,B.c,o,B.cf,o,new A.b7(A.m(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eG(o,l,new A.cV(W.a9O,A.cd(A.v(i,B.aj,o,B.e,B.Q,0,B.p),B.r,o,B.y,o,Ac.qQ,o,o,B.ah),o),o,o,o,B.LL,B.d0,o,new A.b7(k,B.Y),o)}}
C.a0j.prototype={
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
r=r?B.jt:B.iP
v=A.aM(s,B.T,!0,s,!0,B.r,s,A.aN(),w,s,s,s,s,s,2,A.br(s,new A.b4(4,A.m(12),B.dg),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.f5O(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.am,s,s,s,s)
u=A.D(A.dV(B.de,new C.f5P(d),s),1)
r=A.bk(B.bU,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eG(s,q,new A.C(B.AS,A.v(A.a([o,B.aA,v,B.aP,A.A(A.a([u,B.av,A.D(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.f5Q(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d0,s,new A.b7(p,B.Y),s)}}
C.aaz.prototype={
a4(){return"WorksheetFrameStyle."+this.b}}
C.F3.prototype={
U(){return new C.bu_(null,null)}}
C.bu_.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.bna,null,1,null,v)
w.cH(0)
v.d!==$&&A.aO()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bvf()},
gbwG(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bU,B.aZ],x.O)
case 2:return A.a([B.bt,B.aV,B.aZ],x.O)
case 3:return A.a([B.aT,B.c9,B.jN],x.O)
case 4:return A.a([B.hv,B.bU,B.f7],x.O)
case 0:return A.a([B.aV,B.bU,B.aZ],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.et(A.c6(v,new C.f5M(this,new C.tx(w.ax.a===B.I)),null),null)}}
C.avU.prototype={
U(){return new C.bu0(null,null)}}
C.bu0.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.n_,null,1,null,v)
w.cH(0)
v.d!==$&&A.aO()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bvg()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.f5N(this),null)}}
C.btZ.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bA(new A.aa(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aW(w,w))
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
w=A.wO(u)
t=A.a([],x.f5)
w=new A.vk(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.ba(A.jR('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.GX(w,r)
w.jk()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aQb(d,q,r,o,0,0.2,4.2,0.92)
p.aQb(d,q,r,s,0.52,0.11,3.2,0.58)}},
aQb(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.G(g+h,1)*f,s=A.hr3(e.a.a,e,t,t+f*i,!0),r=A.bzQ(s.gbJ().a.getBounds())
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
C.aM4.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
C.aM5.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
C.tx.prototype={}
C.arc.prototype={
U(){return new C.aDx()},
gdX(){return this.c}}
C.aDx.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.afK()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.KH(w,v)
this.a2()},
afK(){var w=0,v=A.j(x.H),u=this,t,s
var $async$afK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bzY(t.c,t.d.a),$async$afK)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eFN(u,s))
return A.h(null,v)}})
return A.i($async$afK,v)},
Pn(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Pn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eFE(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.KH(t,s),$async$Pn)
case 2:if(u.c!=null)u.m(new C.eFF(u))
return A.h(null,v)}})
return A.i($async$Pn,v)},
PT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.eFL(t,new C.tx(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$PT)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a7G(q),$async$PT)
case 6:case 5:t.m(new C.eFM(t,r))
w=7
return A.b(t.Pn(),$async$PT)
case 7:case 1:return A.h(u,v)}})
return A.i($async$PT,v)},
V0(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$V0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i34(r),$async$V0)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eFz(t,new C.qN(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Pn(),$async$V0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$V0,v)},
cbw(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hj2(t,new C.eFD(u),w,v)},
a9V(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bP(new A.aA(v,2.5,B.q,-1),B.Y,B.Y,new A.aA(B.c.j(d?0.85:0.55),2.5,B.q,-1)),D.aWu,w,w,B.n),w,22,w,w,w,w,w,22)},
a90(d){return this.bIt(d)},
bIt(d){var w=0,v=A.j(x.H),u=this
var $async$a90=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eFC(u,d))
w=2
return A.b(u.Pn(),$async$a90)
case 2:return A.h(null,v)}})
return A.i($async$a90,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.bX:B.iM,d=A.m(8),a0=A.W(Q.Zl,f?B.bq:B.bn,g,g,g,16),a1=x.p
a0=A.aL(!1,d,!0,new A.C(B.Fa,A.A(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bn,g,g,g,g,g,g,g,g,g,g,g,B.a4,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eFO(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b_,B.r,A.a([A.bw(A.m(22),C.aOP(!0,A.m(22),1/0,B.pG,g,d,1/0),B.aq),A.ao(10,A.dq(D.bIJ,D.fqN,h.gb_w(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eT,22),new A.ac(-4,B.G,B.bU.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.q,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bw(s,new A.an(B.W,g,B.b_,B.r,A.a([C.aOP(!0,A.m(16),1/0,B.Mw,g,r.c,1/0),A.c_(g,new A.o(g,g,g,g,g,new A.a8(B.b0,B.b5,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bd),A.ao(g,h.a9V(!0),g,g,8,g,8,g),A.ao(g,A.csS(h.a9V(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.csS(h.a9V(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.csS(h.a9V(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dq(D.bEL,D.fkD,h.gb_w(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bRf,B.n),g,g,g,g,B.lJ,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.aB,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b5P,B.nD,B.h3],u):A.a([B.aZ,B.aV,B.bU],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eT,24)],t)
r=A.m(22)
p=A.ao(g,A.W(B.jz,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.q,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h5,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aA,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.an,C.bBu(h.d.gwC(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cv,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.D(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.hi.j(0.75),B.q,1.6)
t=A.a([new A.ac(0,B.G,B.aT.j(0.28),B.cJ,14)],t)
j=B.aT.j(0.22)
i=A.m(10)
u=A.p(g,A.bw(r,new A.an(B.W,g,B.aa,B.r,A.a([p,new A.C(D.brM,A.A(A.a([o,B.av,A.aG(!1,B.a1,!0,g,A.aL(!1,n,!0,A.ez(new A.C(Ah.AM,A.v(A.a([A.p(g,D.am2,B.f,g,g,new A.o(j,g,A.I(B.aT.j(0.5),B.q,1),i,g,g,B.n),g,g,g,g,B.ck,g,g,g),B.fZ,D.fa3],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcbv(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ag)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.ax,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fG(1.7777777777777777,d,g),B.aP,w,B.P,u,B.bx,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.aB,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b4,A.dq(Ak.a02,D.f8_,h.gbx8(),A.bk(B.aV,g,g,g,B.c,g,B.ix,g,new A.b7(A.m(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.dX:B.c
v=A.m(14)
u=A.I(f?B.dZ:B.bR,B.q,1)
t=A.W(B.ZG,f?B.bq:B.bn,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.aB,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.S,s,B.an,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bn,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.tA,g,g,1/0))}else B.d.v(d,new A.K(w,new C.eFP(h,new C.tx(f)),A.U(w).k("K<1,r>")))
if(h.e)d.push(new A.C(B.AF,A.av(A.mE(g,f?B.bq:B.bn,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c8(g,e,A.bn(!0,A.v(A.a([new A.C(B.AK,a0,g),A.D(A.cd(A.v(d,B.F,g,B.e,B.j,0,B.p),B.r,g,B.y,g,E.xq,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bAK(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dX:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.aZf,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.W(s?B.hK:B.h9,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bH
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aQ:B.aB,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcQv()
v=A.Aj(d.d)
B.d.v(t,A.a([B.at,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bq:B.bn,u,u,u,u,u,u,u,u,12,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.bb,B.Q,0,B.p)}t=A.D(t,1)
k=A.a([B.aV.j(0.14),B.bU.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bBu(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a3,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.h6,u,u,u)
w=x.p
return A.p(u,A.bw(n,new A.DA(A.A(A.a([m,A.D(new A.C(B.ag7,A.A(A.a([l,B.bf,t,B.ab,k,A.aH(u,u,u,u,A.W(B.cA,(r?B.bq:B.bn).j(0.75),u,u,u,20),u,u,u,new C.eFA(this,d),u,u,u,u,u,B.c8)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.aj,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.aY7,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.dc,u,u,u,u)}}
C.acA.prototype={
DY(d){return this.bJP(d)},
bJP(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$DY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oX(d,o,!1),$async$DY)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
w=4
return A.b(A.bN(Ab.AD,null,x.H),$async$DY)
case 4:s=t.d
w=5
return A.b(C.fBX(!0,o,s),$async$DY)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.FY(r,"ngmy_project_"+A.aK(s.b,q,"_"),!1),$async$DY)
case 6:p=f
w=7
return A.b(A.oW(o,!1),$async$DY)
case 7:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$DY,v)},
Zt(d){return this.cry(d)},
cry(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Zt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oX(d,s,!1),$async$Zt)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
A.hv(d,new C.ar6(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oW(s,!1),$async$Zt)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zt,v)},
Po(d){return this.cnJ(d)},
cnJ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Po=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(A.hv(d,D.aF0,!0,"NgmyWorksheetProjectScan",x.N),$async$Po)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bBv(s),$async$Po)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.R(D.eQ9)
w=1
break}q=C.fWG(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dP(p,x.H),$async$Po)
case 5:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Po,v)},
Zu(d){return this.czt(d)},
czt(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Zu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(C.bB1(),$async$Zu)
case 3:s=f
if(s==null){w=1
break}r=C.fWG(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dP(q,x.H),$async$Zu)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Zu,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tx(u),s=w.d.d.length,r=u?B.dX:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.k0,36)],x.V),o=x.p
return A.bn(!0,new A.C(B.va,A.p(v,A.v(A.a([w.cq9(d,t,s),new A.C(D.bra,A.v(A.a([w.b2u(t,"QR restore"),B.S,A.A(A.a([w.aYu(t,!0,B.jj,B.aT,B.aT,new C.eFR(w,d),"Show to scan","QR code"),B.av,w.awq(t,B.iU,B.b6,B.by,new C.eFS(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d5,w.b2u(t,"Backup files"),B.S,A.A(A.a([w.awq(t,B.hz,B.aV,B.bU,new C.eFT(w,d),"Full copy","Backup file"),B.av,w.awq(t,M.y7,B.aH,B.aM,new C.eFU(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
cq9(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eX,B.cZ,B.fu],k):A.a([B.aZ,B.aV,B.bU],k)
w=A.ao(l,A.W(B.tT,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kH,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.q,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aOP(!0,A.m(13),64,D.bA3,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aPq,l,l,l)
r=C.bBu(r.gwC(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.q,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.r,A.a([w,new A.C(D.bry,A.v(A.a([v,A.A(A.a([s,B.eB,A.D(A.v(A.a([u,B.at,t,B.P,A.A(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fJ,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.W(B.cA,B.c.j(0.85),l,l,l,l),l,l,l,new C.eFQ(d),l,l,l,A.nt(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aMK,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.ax,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b2u(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bq:B.bn,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aYu(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.aeN:B.aQ
if(e)w=B.aT.j(o?0.45:0.35)
else{w=o?B.dZ:B.bR
w=w.j(o?0.8:1)}w=A.I(w,B.q,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aT.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.q,1)
t=A.p(r,A.W(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qR,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aQ:B.aB,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.D(A.aG(!1,B.a1,!0,r,A.aL(!1,q,!0,A.ez(new A.C(E.XL,A.v(A.a([t,B.ac,u,B.bA,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bq:B.bn,r,r,r,r,r,r,r,r,11,r,r,B.cv,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
awq(d,e,f,g,h,i,j){return this.aYu(d,!1,e,f,g,h,i,j)}}
C.ar6.prototype={
U(){return new C.bjo()}}
C.bjo.prototype={
a_(){this.a1()
this.adE()},
adE(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$adE=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bBw(p.c,p.d),$async$adE)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eFu(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eFv(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adE,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.Aa:B.iM,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.W(B.eA,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eFw(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.D(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zc],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eX,B.cZ,B.fu],s):A.a([B.aZ,B.aV,B.bU],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eT,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.du,B.L,h,h)
p=C.bBu(p.gwC(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.an,A.A(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fJ,h,h,h)],u),B.m,h,B.bb,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.ax,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.Y4,h,h,1/0)
t=g?D.beX:B.c
q=A.m(24)
p=A.I(w?B.aT.j(0.4):B.aV.j(0.3),B.q,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dk,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a6E,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.e3s)
else{m=A.m(20)
l=A.I(B.aL,B.q,1)
o.push(A.p(h,A.pC(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bW,h,h,h))}}o.push(B.aP)
n=w?B.aT:B.aV
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aT:B.aV).j(0.35),B.q,1)
k=w?B.MO:B.Nj
k=A.W(k,w?B.aT:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.av,A.D(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a4,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.ix,h,h,h))
return A.c8(h,f,A.bn(!0,A.v(A.a([new A.C(A6.LY,e,h),A.D(A.cd(A.v(A.a([s,B.aP,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tz,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.r,h,B.y,h,E.ahg,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.arb.prototype={
U(){return new C.aDw(A.yP(B.Ld,B.nx,B.tY))}}
C.aDw.prototype={
q(){this.d.q()
this.a2()},
aKT(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iL(w,d)},
c7l(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.i14(t)
if(s!=null){this.aKT(s)
return}r=C.ha7(t)
if(r!=null)q=A.cU(r,p,0)
else q=!1
if(q){this.aKT(B.a.i(B.a.b0(r,B.a.cJ(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eF(A.a([A.aH(t,t,t,t,A.W(u.f?B.qY:A2.MU,t,t,t,t,t),t,t,t,new C.eFy(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Aa,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fkw,t,t,t,1,t,!0),q=A.yO(u.d,B.bQ,u.gc7k()),p=A.m(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.q,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c8(r,B.w,new A.an(B.W,t,B.b_,B.r,A.a([q,p,A.ao(32,A.p(t,D.fjk,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.q,1),v,t,t,B.n),t,t,t,t,B.jd,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aIh.prototype={
a4(){return"_WorksheetTab."+this.b}}
C.Nv.prototype={
U(){return new C.aDy(D.a8J,A.a([],x.D))},
bp(){return this.r.$0()},
gdX(){return this.c}}
C.aDy.prototype={
gcxs(){return J.bCF(this.e,0,new C.eGg())},
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
return A.b(C.Cs(q.a.c).cM(0,B.jT),$async$vn)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eGc(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eGd(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vn,v)},
Hr(d){return this.bGE(d)},
bGD(){return this.Hr(null)},
bGE(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Hr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i36(l,d),$async$Hr)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lf(l,r,q,D.d2b,new A.S(Date.now(),0,!1))
w=4
return A.b(C.KH(t.a.c,p),$async$Hr)
case 4:o=f
w=5
return A.b(t.vn(),$async$Hr)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.R(D.eNk)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gS(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.R(D.eP3)
else n.I(q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.E1(m)
case 1:return A.h(u,v)}})
return A.i($async$Hr,v)},
E1(d){return this.cbh(d)},
cbh(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$E1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hv(s,new C.arc(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$E1)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.KH(u.a.c,t),$async$E1)
case 5:case 4:w=6
return A.b(u.vn(),$async$E1)
case 6:return A.h(null,v)}})
return A.i($async$E1,v)},
va(d){return this.bWf(d)},
bWf(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
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
return A.b(A.hv(r,D.aF0,!0,"NgmyWorksheetProjectScan",x.N),$async$va)
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
break}p=C.fWG(s)
w=15
return A.b(C.KH(t.a.c,p),$async$va)
case 15:o=f
w=16
return A.b(t.vn(),$async$va)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.R(D.eP8)
w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.E1(p)
case 1:return A.h(u,v)}})
return A.i($async$va,v)},
Nc(d){return this.bFj(d)},
bFj(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Nc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ca(null,null,!0,null,new C.eFY(d),s,null,!0,!0,x.y),$async$Nc)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.ox(t.a.c,A.a([],x.D)),$async$Nc)
case 6:w=7
return A.b(t.vn(),$async$Nc)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eNp)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Nc,v)},
cbu(d){var w=this.c
w.toString
A.bX(B.K,null,new C.eG6(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b35(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jt
else w=B.c
v=A.m(16)
u=A.I(p?B.dZ:B.bR,B.q,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.W(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bS,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aQ:B.aB,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(r,A.v(A.a([s,B.ac,t,B.bA,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bq:B.bn,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.v9,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
ZZ(d,e){return this.cbi(d,e)},
cbi(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bX(B.K,null,new C.eG1(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$ZZ)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hj2(r,new C.eG2(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Ne(d,e),$async$ZZ)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$ZZ,v)},
b07(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.W(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bS,u,u,u)
if(d)t=B.ay
else t=h.a?B.aQ:B.aB
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.D(A.v(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bq:B.bn,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aG(!1,B.a1,!0,u,A.aL(!1,u,!0,new A.C(B.AR,A.A(A.a([s,B.bf,t,A.W(B.ex,w?B.bq:B.bn,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag)},
ci8(d,e,f,g,h,i){return this.b07(!1,d,e,f,g,h,i)},
Ne(d,e){return this.bFt(d,e)},
bFt(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ne=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.l_(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Ne)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bzK(t.a.c,d.a),$async$Ne)
case 6:w=7
return A.b(t.vn(),$async$Ne)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ne,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tx(o),m=o?B.bX:B.iM
if(q.f)o=D.b3O
else{w=q.bzX(n)
v=q.bVl(n)
u=q.gbx2()
if(o)t=B.jt
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aP,new C.F3(A.p(p,A.A(A.a([q.azT(N.Mv,"Projects",n,D.a8J),q.azT(B.vl,"Cashier",n,D.aTX),q.azT(B.Fu,"Family Tree",n,D.fSD)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.en,0.95,u,p),B.bx],r)
w=q.d
if(w===D.a8J){w=J.ad(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aQ:B.aB,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b4,new C.avU(q.gaP1(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aA,q.cia(n)],r))}else{o=q.a
if(w===D.aTX)u.push(new C.ane(o.c,n,p))
else{w=q.r
u.push(new C.aok(o.c,o.d,o.e,o.f,new C.eGj(q),new C.eGk(q),new A.cx(w,x.b4)))}}o=A.cd(A.v(u,B.F,p,B.e,B.j,0,B.p),B.r,p,B.y,p,Ad.LR,p,p,B.ah)}return A.c8(p,m,A.bn(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bzX(d){var w=null,v=A.m(8),u=d.a,t=A.W(Q.Zl,u?B.bq:B.bn,w,w,w,16)
return A.aL(!1,v,!0,new A.C(B.kI,A.A(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bq:B.bn,w,w,w,w,w,w,w,w,14,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eFV(this),w,w,w,w,w,w,w)},
gbx2(){switch(this.d.a){case 0:return D.a80
case 1:return D.fJo
case 2:return D.a81}},
bVl(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cw,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.bKu,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bf,D.bvP,A.aG(!1,B.a1,!0,w,A.aL(!1,A.m(12),!0,A.p(w,D.bI2,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eFZ(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.m(12)
return new C.F3(A.p(w,A.v(A.a([new A.C(O.LJ,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.d(A.Aj(this.gcxs()),w,w,w,w,w,w,D.f4s,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.v8,B.jd,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.fJn,w)},
azT(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aV:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.q,2):A.I(B.K,B.q,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bq:B.bn
w=A.W(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bq:B.bn
return A.D(A.aG(!1,B.a1,!0,u,A.aL(!1,s,!0,A.dh(u,A.A(A.a([w,B.eb,new A.dn(1,B.ci,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.bb,B.j,0,u,u),u,u,B.cr,new A.o(r,u,p,q,o,u,B.n),B.iv,u,u,u,B.LU,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eGf(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),1)},
cia(d){var w,v,u,t,s,r,q=this,p=null
if(J.cl(q.e)){w=d.a
v=w?B.dX:B.c
u=A.m(15)
t=A.p(p,D.bI7,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eT,28)],x.V),D.bTG,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.aB,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.F3(A.p(p,A.v(A.a([t,B.d5,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bn,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.e1,A.A(A.a([A.D(q.aQw(B.iU,"Scan QR",new C.eG9(q),d),1),B.av,A.D(q.aQw(M.y7,"Upload file",new C.eGa(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aA,A.bJ(D.fuk,q.gaP1(),A.bk(B.aV,p,p,p,B.c,B.fM,p,p,new A.b7(A.m(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bsC,1.05,D.a80,p)}w=J.b6(q.e,new C.eGb(q,d),x.l)
w=A.B(w,w.$ti.k("ak.E"))
return new C.F3(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bS,1,D.a80,p)},
aQw(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aV.j(0.45),B.q,1)
return A.aG(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(w,A.v(A.a([A.W(d,B.aZ,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.f2U,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ag_,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)},
ci9(d,e){var w,v,u=null,t=e.a,s=t?B.dX:B.c,r=A.m(14),q=A.I(t?B.dZ:B.bR,B.q,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.ej,10)],x.V),o=A.m(14),n=t?B.bq:B.bn
n=A.bw(B.UB,new A.fG(1.7777777777777777,C.aOP(!0,B.ft,1/0,N.Mv,n,d.c,1/0),u),B.aq)
w=x.p
v=A.D(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aQ:B.aB,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.d(""+d.d.length+" budget items \xb7 "+A.Aj(d.gwC()),u,u,u,u,u,u,D.f13,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aG(!1,B.a1,!0,u,A.aL(!1,o,!0,A.v(A.a([n,new A.C(B.bC,A.A(A.a([v,A.aH(u,u,u,u,A.W(Ae.N7,t?B.bq:B.bn,u,u,u,u),u,u,u,new C.eG7(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eG8(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e3,u,u,u,1/0)}}
C.bvN.prototype={}
C.qN.prototype={
af(){var w=this,v=w.c,u=w.d
return A.F(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcQv(){var w,v,u,t,s=this.c
if(s===B.k.jS(s))w=B.o.u(B.k.N(s))
else{v=B.k.aa(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aK(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lf.prototype={
gwC(){return B.d.cI(this.d,0,new C.cuM())},
af(){var w=this,v=w.d,u=A.U(v).k("K<1,a4<n,@>>")
v=A.B(new A.K(v,new C.cuL(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
ba6(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lf(w.a,w.b,v,u,w.e)},
b9O(d){return this.ba6(d,null)},
S5(d){return this.ba6(null,d)}}
C.H5.prototype={
a4(){return"FamilyGender."+this.b}}
C.hV.prototype={
af(){var w=this
return A.F(["id",w.a,"name",w.b,"gender",C.heU(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aCw(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hV(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ajC.prototype={
a4(){return"FamilyTreeAccessRole."+this.b}}
C.ky.prototype={
gant(){var w=this.f
return new A.a2(w,new C.bM9(),A.U(w).k("a2<1>")).gM(0)},
af(){var w=this,v=w.f,u=A.U(v).k("K<1,a4<n,@>>")
v=A.B(new A.K(v,new C.bM8(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hUx(w.y)],x.N,x.z)},
yg(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.ky(w.a,v,u,t,s,r,w.r,q,p,o)},
ba5(d,e){var w=null
return this.yg(w,w,d,e,w,w,w,w)},
cGe(d,e,f,g,h,i,j){return this.yg(d,e,f,g,h,i,j,null)},
aCB(d,e){var w=null
return this.yg(w,w,w,d,w,w,e,w)},
cEJ(d){var w=null
return this.yg(w,w,w,w,w,w,d,w)},
cF6(d){var w=null
return this.yg(w,w,w,w,w,w,w,d)},
aCn(d){var w=null
return this.yg(w,w,w,w,d,w,w,w)},
cFL(d,e,f){var w=null
return this.yg(w,d,w,e,w,w,f,w)},
cEw(d){var w=null
return this.yg(w,w,d,w,w,w,w,w)},
cFj(d,e){var w=null
return this.yg(d,w,w,w,w,e,w,w)}}
C.cuO.prototype={
a4(){return"WrapAlignment."+this.b}}
C.cuP.prototype={
a4(){return"WrapCrossAlignment."+this.b}}
C.aFA.prototype={}
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
gFv(){return this.z.b<this.b.length},
aS7(d){switch(0){case 0:return d.a.c}},
aRP(d){switch(0){case 0:return d.a.d}},
bOR(d,e){switch(0){case 0:return new A.hI(d,e)}},
bOf(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h0(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iB(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.GQ(b4)
switch(0){case 0:v=b5.b
u=new A.kv(0,v,0,1/0)
t=w===B.SA
break}s=A.a([],x.gZ)
r=A.T(x.cM,x.S)
for(b3=b1.z,q=B.d.fJ(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.L)(q),++h){g=q[h]
g.h0(b4,u,!0)
f=b1.aS7(g)
f.toString
e=b1.aRP(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aFA(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aFA(k,j,i))}d=s.length
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
a8=b1.aS7(g)
e=b1.aRP(g)
e.toString
a9=b1.bOf(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bOR(a6,a3+a9)
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
w.oG(0,v)
for(u=r.z,u=B.d.dq(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].fX(d)
w.n7(0)},
G1(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
i0(){return this.z}}
C.bu2.prototype={}
var z=a.updateTypes(["ay<~>()","R(hV)","R(ky)","~()","R(n5)","a4<n,@>(ky)","H(ky,ky)","n(hV)","ky(a4<@,@>)","R(lf)","R(u0)","n5(a4<@,@>)","u0()","H(lf,lf)","hV(a4<@,@>)","a4<n,@>(hV)","R(qN)","ay<~>(lf)","eQ<n?>(hV)","H(hV,hV)","n?(hV)","a4<n,@>(n5)","Zg(Y)","n(n)","acf(Y)","r(o8)","H(n5,n5)","hV(hV)","cL(bv<n,Ff>)","cL(Jw)","~(hV)","H?(hV)","hV()","aj<hV>()","R(u_)","R(Jw)","C(hV)","~(H5)","R(adM)","r(H5,n,a0)","YF(Y)","bv<n,aj<a4<n,@>>>(n,aj<n5>)","~(H)","+count,id,name(H,n,n)(ky)","ky(ky)","ZB(Y)","ZC(Y)","R(lv)","lv()","n(ky)","a0j(Y)","Yf(Y)","Ye(Y)","YD(Y)","YH(Y)","r(qN)","acA(Y)","~(lT)","ay<~>([n?])","N(N,lf)","r(lf)","N(N,qN)","a4<n,@>(qN)","qN(a4<@,@>)","Yd(Y)","S3(Y)","cp(H4)","lf(a4<@,@>)","u_()","n(lf)","a4<n,@>(lf)","n(S)","H(hV)","ky(a4<n,@>)","XN(Y)"])
C.fuB.prototype={
$1(d){return d.a+" "+d.b},
$S:117}
C.fuA.prototype={
bja(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qF(s,d,B.hl,E.ER),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.V(r!=null&&A.Ku(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bja(d)},
$S:316}
C.fuC.prototype={
$1(d){return d.b},
$S:117}
C.fDH.prototype={
$1(d){var w=null
return A.eG(w,B.K,new F.OR(this.a,this.b,w),w,w,0,B.XM,B.d0,w,w,w)},
$S:47}
C.fjR.prototype={
$1(d){return d!=null},
$S:233}
C.fjS.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:233}
C.fjX.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:156}
C.fsk.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fa(d,w,w,w,A.h2(w,B.rn,w,w,w,w,w,w,w,B.dr,w,w,10.5,w,B.ei,w,!0,w,w,w,w),w),u=f?B.ei:B.vg
return new A.nE(D.boe,A.a8S(A.a([new A.fO(130,w,v),new A.yx(1,B.Fn,A.fa(e,w,w,w,A.h2(w,g==null?D.e5K:g,w,w,w,w,w,w,w,B.dr,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.x6,B.li))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1901}
C.fsj.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vc(999)
f=A.wH(A.lq(h,A.fa("Cashier",h,h,h,A.h2(h,D.yZ,h,h,h,h,h,h,h,B.dr,h,h,10,h,B.ei,h,!0,h,h,h,h),h),h,new A.kw(D.e5B,h,f,B.hC,h),h,h,D.boI,h))
w=A.wH(A.fa("Debt receipt",h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.dr,h,h,22,h,B.ei,h,!0,h,h,h,h),h))
v=A.wH(A.fa(C.wr(new A.S(Date.now(),0,!1),!0),h,h,h,D.a6J,h))
u=A.vc(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fa(s,h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.dr,h,h,14,h,B.ei,h,!0,h,h,h,h),h)
r=A.fa("Person who owes",h,h,h,D.a6J,h)
q=A.vc(10)
p=x.C
u=A.lq(h,A.ys(A.a([s,new A.fO(h,2,h),r,new A.fO(h,10,h),A.lq(h,A.ys(A.a([A.fa("Amount owed",h,h,h,D.a6J,h),new A.fO(h,2,h),A.fa(A.Aj(t.c),h,h,h,A.h2(h,D.yZ,h,h,h,h,h,h,h,B.dr,h,h,20,h,B.ei,h,!0,h,h,h,h),h)],p),B.qK,B.li),h,new A.kw(B.oT,h,q,B.hC,h),h,h,D.bnV,1/0)],p),B.qK,B.li),h,new A.kw(E.aGg,h,u,B.hC,h),h,h,D.bpK,1/0)
q=new A.nn(D.e5E,0.9,B.kA)
r=A.vc(12)
s=i.c
o=s.$2("Original due",C.wr(t.r,!1))
n=s.$2("Current due",C.wr(t.f,!1))
m=i.d
l=new A.nn(m,1.1,B.kA)
k=A.vc(8)
j=i.a
k=A.a([o,n,new A.fO(h,6,h),A.lq(h,A.wH(A.fa(t.gaJo(),h,h,h,A.h2(h,m,h,h,h,h,h,h,h,B.dr,h,h,11,h,B.ei,h,!0,0.5,h,h,h),h)),h,new A.kw(h,new A.pn(l,l,l,l),k,B.hC,h),h,h,D.boQ,1/0),new A.fO(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.yZ))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.yZ))
else{n=A.fa("Missed days ("+n+")",h,h,h,A.h2(h,B.rn,h,h,h,h,h,h,h,B.dr,h,h,10.5,h,B.ei,h,!0,h,h,h,h),h)
m=A.U(o).k("K<1,RD>")
o=A.B(new A.K(o,new C.fsi(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fO(h,4,h),n,new A.fO(h,6,h),new C.b72(5,5,new C.b73(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fO(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fO(h,8,h),w,new A.fO(h,3,h),v,new A.fO(h,16,h),u,new A.fO(h,10,h),A.lq(h,A.ys(k,B.x6,B.li),h,new A.kw(h,new A.pn(q,q,q,q),r,B.hC,h),h,h,B.agb,1/0)],p)
w=j.a
if(w!=null){v=new A.nn(B.HQ,1,B.kA)
B.d.v(f,A.a([new A.fO(h,16,h),A.fa("Debtor signature",h,h,h,A.h2(h,B.rn,h,h,h,h,h,h,h,B.dr,h,h,10,h,B.ei,h,!0,h,h,h,h),h),new A.fO(h,6,h),A.lq(h,new A.Hm(w,B.UL,h,h),h,new A.kw(h,new A.pn(v,v,v,v),A.vc(6),B.hC,h),82,h,B.LW,1/0)],p))}f.push(new A.fO(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fa(w,h,h,h,D.eV2,h))
f.push(new A.fO(h,18,h))
f.push(A.wH(A.fa("NGMY.ORG",h,h,h,A.h2(h,D.yZ,h,h,h,h,h,h,h,B.dr,h,h,14,h,B.ei,h,!0,1.8,h,h,h),h)))
return f},
$S:368}
C.fsi.prototype={
$1(d){var w=null,v=new A.nn(D.HR,0.7,B.kA),u=A.vc(999)
return A.lq(w,A.fa(C.wr(d,!1),w,w,w,A.h2(w,D.HR,w,w,w,w,w,w,w,B.dr,w,w,9.5,w,B.ei,w,!0,w,w,w,w),w),w,new A.kw(w,new A.pn(v,v,v,v),u,B.hC,w),w,w,D.btZ,w)},
$S:1902}
C.c0d.prototype={
$1(d){var w=null,v=B.bI.j(0.08),u=A.m(999),t=A.I(B.bI.j(0.28),B.q,1)
return A.p(w,A.d(C.wr(d,!1),w,w,w,w,w,w,D.f0z,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eF,w,w,w)},
$S:1903}
C.fEc.prototype={
$1(d){var w=null,v=A.aI(d,B.bT,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bLm,w,w,w,new C.fE9(d),w,w,w,w,w,B.c8),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eG(w,B.K,new A.cV(new A.aY(0,380,0,v.a.b*0.9),A.aG(!1,B.a1,!0,u,new A.C(B.XC,A.v(A.a([new A.bH(B.a7,w,w,t,w),new A.dn(1,B.ci,A.cd(A.v(A.a([new A.et(new C.aXa(r,w),s),B.S,A.A(A.a([A.D(A.eB(B.yi,D.fqJ,new C.fEa(s,r,d),A.df(w,w,w,w,w,w,w,w,w,B.c,w,w,B.eZ,w,new A.b7(A.m(14),B.Y),new A.aA(q,1,B.q,-1),w,w,w,w)),1),B.ab,A.D(A.dq(B.a_T,D.fnn,new C.fEb(r,d),A.bk(B.aZ,w,w,w,B.c,w,B.eZ,w,new A.b7(A.m(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.r,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.aB,0,w,w,w,w,w,B.ag),w),w,w,0,Ai.XY,B.d0,w,w,w)},
$S:47}
C.fE9.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fEa.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.ak$.x.h(0,t.a)
m=m==null?null:m.gb8()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lS(2.5),$async$$0)
case 4:w=3
return A.b(e.hp(B.fW),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eW(B.dC.gaM(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aK(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.rH(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fEb.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fyV(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.R(A.b2(null,null,null,null,null,B.r,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fE4.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eG(w,B.aB,A.v(A.a([new A.C(D.bpy,A.A(A.a([A.D(A.d(this.a,w,w,w,w,w,w,B.np,w,w,w),1),A.aH(w,w,w,w,B.lg,w,w,w,new C.fE2(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dn(1,B.ci,new A.C(B.fT,A.bw(A.m(14),A.fL(t,B.A,w,w,B.co,B.dt,!1,w,!1,w,w),B.aq),w),w),new A.C(B.Lz,new A.a7(1/0,w,A.dq(B.oI,D.aPQ,new C.fE3(t,this.c,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.LM,B.d0,w,new A.b7(v,B.Y),w)},
$S:47}
C.fE2.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fE3.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rH(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fEg.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eG(w,B.aB,new A.C(D.bpG,A.v(A.a([A.A(A.a([D.bv_,A.aH(w,w,w,w,B.lg,w,w,w,new C.fEe(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.et(A.bw(A.m(14),A.p(w,A.b3(w,w,w,new C.b9c(s.ax,w),B.au),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a7(1/0,w,A.dq(B.oI,D.aPQ,new C.fEf(t,s,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(v,B.Y),w)},
$S:47}
C.fEe.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fEf.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.ak$.x.h(0,t.a)
n=n==null?null:n.gb8()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lS(2.5),$async$$0)
case 4:w=3
return A.b(e.hp(B.fW),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aK(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.eW(B.dC.gaM(s))
w=5
return A.b(A.rH(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fnl.prototype={
$1(d){return d.a===this.a},
$S:252}
C.dDM.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dDx.prototype={
bio(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dX:B.c
s=u.a
w=2
return A.b(A.bX(t,null,new C.dDA(s,q,e),p,!0,!0,!1,B.I5,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dDB(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bio(d,e)},
$S:1904}
C.dDA.prototype={
$1(d){var w,v=null,u=this.c===B.vO,t=u?D.d83:D.d4n
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aQ:B.aB,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bn(!0,new A.C(K.agL,A.v(A.a([u,B.at,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bq:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.ic(!0,v,v,B.y,L.aN1,new C.dDz(this.a,w,t,d),t.length,v,B.dQ,B.ah,!0)],x.p),B.aj,v,B.e,B.Q,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:28}
C.dDz.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cZ.j(0.14)
else w=t.b.a.d.a?B.M:B.aQ
v=A.m(14)
if(q)u=B.cZ
else u=(t.b.a.d.a?B.bq:B.bn).j(0.16)
u=A.I(u,B.q,q?1.6:1)
return A.aL(!1,p,!0,A.p(B.A,C.aX9(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dDy(t.d,r),s,s,s,s,s,s,s)},
$S:182}
C.dDy.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dDB.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dDv.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:91}
C.dDw.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cJ(B.cr,e,v)
return new A.cY(e,!1,A.ii(B.A,A.av(A.aG(!1,B.a1,!0,v,new A.e0(new C.dDu(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ag),v,v,v),v,new A.bf(t,new A.bo(0.96,1,u),u.k("bf<bI.T>"))),v)},
$S:30}
C.dDu.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bT,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dX:B.c,f=A.m(14),e=A.I((h?B.bq:B.bn).j(0.16),B.q,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.D(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aL(!1,v,!0,new A.C(B.en,A.W(B.cA,i.a.d.a?B.bq:B.bn,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dDf(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aR2("Name")
r=l.a
q=r.d==null?k:new C.dDg(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bm:B.lD
n=A.I(B.cZ.j(0.35),B.q,1)
m=r.d
t=A.aM(k,B.T,h,k,!0,B.r,k,A.aN(),w,k,k,k,k,k,2,s.b9Z(new A.C(B.fx,A.aL(!1,p,!0,A.p(B.A,C.aX9(m==null?"\ud83d\udc64":A.ft8(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.ck,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ku,k,B.a6v,k,k)
v=A.a([v,B.ac,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.an,A.A(A.a([A.D(i.aRF("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dDh(r,a0),r.d===B.vO),1),B.ab,A.D(i.aRF("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dDm(r,a0),r.d===B.a3s),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bH(B.a3,k,k,A.hc(D.bJL,D.fp9,new C.dDn(r,l.e,a0),A.fv(k,k,k,k,k,k,k,k,k,k,k,B.cZ,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c8)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.u3(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.f,k,k,k,k,k,2,i.aR3("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ai,k,k,s,k,k,B.dU,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.M:B.aQ
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.bq:B.bn).j(0.22),B.q,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wr(r.a,!1)
v.push(A.aG(!1,B.a1,!0,q,A.aL(!1,p,!0,A.p(k,A.A(A.a([A.D(A.v(A.a([t,B.bA,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bGD],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bk,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dDo(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ag))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.r,k,k,k,k,k,2,i.aR2("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aZt(r.b.length!==0,B.mi,new C.dDp(r,i,a0),new C.dDq(r,a0),"Upload from gallery","ID photo"))
v.push(i.aZt(r.c.length!==0,D.bA1,new C.dDr(r,i,d,a0),new C.dDs(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ag.a6N("Signature (optional)",t,new C.dDt(a0),new C.dDi(a0,t),new C.dDj(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.bq:B.bn
s=(i?B.bq:B.bn).j(0.28)
s=A.D(A.dV(E.aPJ,new C.dDk(d),A.df(k,k,k,k,k,k,k,k,k,t,k,k,B.v3,k,new A.b7(A.m(10),B.Y),new A.aA(s,1,B.q,-1),k,k,k,k)),1)
t=A.bk(B.cZ,k,k,k,B.c,k,B.v3,k,new A.b7(A.m(10),B.Y),k,k,k)
v.push(A.A(A.a([s,B.ab,A.D(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.ut,k,k,k),new C.dDl(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cd(A.v(v,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.vc,B.jd,k,k,360)},
$S:185}
C.dDf.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dDg.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dDh.prototype={
$0(){return this.b.$1(new C.dDe(this.a))},
$S:0}
C.dDe.prototype={
$0(){var w=this.a
w.d=B.vO
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dDm.prototype={
$0(){return this.b.$1(new C.dDd(this.a))},
$S:0}
C.dDd.prototype={
$0(){var w=this.a
w.d=B.a3s
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dDn.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dDo.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wv(null,u.b,A.c0(2020,1,1,0,0,0,0,0),null,s,A.c0(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dDc(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dDc.prototype={
$0(){var w=this.b
return this.a.a=A.c0(w.gcj(),w.gce(),w.gct(),0,0,0,0,0)},
$S:0}
C.dDp.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.OL(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dDb(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dDb.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dDq.prototype={
$0(){return this.b.$1(new C.dDa(this.a))},
$S:0}
C.dDa.prototype={
$0(){return this.a.b=""},
$S:0}
C.dDr.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dX:B.c
w=3
return A.b(A.bX(q,null,new C.dD8(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.OL(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dD9(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dD8.prototype={
$1(d){var w=null
return A.bn(!0,A.v(A.a([A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.alU,w,w,w,w,new C.dD2(d),!1,w,w,w,w,w,w,w,D.ffN,w,w,w),A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.alS,w,w,w,w,new C.dD3(d),!1,w,w,w,w,w,w,w,D.fmr,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.af,!0,!0)},
$S:28}
C.dD2.prototype={
$0(){A.a6(this.a,!1).O("camera")
return null},
$S:0}
C.dD3.prototype={
$0(){A.a6(this.a,!1).O("gallery")
return null},
$S:0}
C.dD9.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dDs.prototype={
$0(){return this.b.$1(new C.dD7(this.a))},
$S:0}
C.dD7.prototype={
$0(){return this.a.c=""},
$S:0}
C.dDt.prototype={
$0(){return this.a.$1(new C.dD6())},
$S:0}
C.dD6.prototype={
$0(){},
$S:0}
C.dDi.prototype={
$0(){return this.a.$1(new C.dD5(this.b))},
$S:0}
C.dD5.prototype={
$0(){return B.d.a9(this.a)},
$S:0}
C.dDj.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.agH(u.a,null,null,new C.dD4(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dD4.prototype={
$4(d,e,f,g){this.a.$1(new C.dD1(this.b,d))},
$S:370}
C.dD1.prototype={
$0(){var w=this.a
B.d.a9(w)
B.d.v(w,this.b)},
$S:0}
C.dDk.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dDl.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.R(D.eR_)
return}if(w.a.d==null){w.c.I(x.q).f.R(D.eNW)
return}A.a6(w.c,!1).O(!0)},
$S:0}
C.dDP.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:91}
C.dDQ.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dX:B.c,n=A.m(14),m=A.I((p?B.bq:B.bn).j(0.16),B.q,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aQ:B.aB,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Aj(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bq:B.bn,r,r,r,r,r,r,r,r,13,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.yH(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.yH(r).length>0?B.bI:B.cZ,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bq:B.bn
t=(q?B.bq:B.bn).j(0.28)
s=x.p
return new A.cY(e,!1,A.av(A.aG(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.P,v,u,B.aA,A.A(A.a([A.D(A.dV(B.nq,new C.dDN(d),A.df(r,r,r,r,r,r,r,r,r,w,r,r,B.jx,r,new A.b7(A.m(10),B.Y),new A.aA(t,1,B.q,-1),r,r,r,r)),1),B.ab,A.D(A.bJ(D.fmQ,new C.dDO(d),A.bk(B.cZ,r,r,r,B.c,r,B.jx,r,new A.b7(A.m(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.AU,O.LJ,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ag),r,r,r),r)},
$S:30}
C.dDN.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dDO.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dDJ.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dDK(r),p=r.a.d.a,o=p?B.dX:B.c,n=A.m(14),m=A.I((p?B.bq:B.bn).j(0.14),B.q,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.D(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aQ:B.aB,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Aj(l.c),s,s,s,s,s,s,D.f21,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.ix((r.a.d.a?B.bq:B.bn).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.ZG,"View receipt",new C.dDC(r,d,l))
u=l.x!=null
t=u?B.r2:B.pI
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bpD,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dDD(r,d,l)),q.$3$icon$label$onTap(B.Ba,"Edit",new C.dDE(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mi,"View / download ID",new C.dDF(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bA0,"View / download selfie",new C.dDG(r,d,l)))
if(l.gaEd())p.push(q.$3$icon$label$onTap(A5.a_K,"View / download signature",new C.dDH(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bI,B.e4,"Delete",new C.dDI(r,d,l)))
p.push(B.at)
return A.bn(!0,new A.C(B.v8,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:28}
C.dDK.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aQ:B.aB
else w=d
return A.aL(!1,v,!0,new A.C(B.eP,A.A(A.a([A.W(e,w,v,v,v,20),B.bf,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1905}
C.dDC.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fE8(w,this.c)},
$S:0}
C.dDD.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.Rr(this.c)},
$S:0}
C.dDE.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.CF(this.c)},
$S:0}
C.dDF.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bBT(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dDG.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bBT(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dDH.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fEd(w,this.c)},
$S:0}
C.dDI.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.Np(0,this.c)},
$S:0}
C.dDR.prototype={
$1(d){return d.x==null},
$S:252}
C.dDS.prototype={
$1(d){return d.x!=null},
$S:252}
C.dDT.prototype={
$2(d,e){return d+e.c},
$S:1906}
C.dDU.prototype={
$0(){return this.a.bxx()},
$S:0}
C.dDL.prototype={
$0(){return this.a.adR(this.b)},
$S:0}
C.fnQ.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fnR.prototype={
$0(){return B.d.gK(D.a0X)},
$S:z+68}
C.d3B.prototype={
$0(){var w=this.a
return w.m(new C.d3z(w,this.b))},
$S:0}
C.d3z.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d3A.prototype={
$0(){},
$S:0}
C.d3C.prototype={
$0(){var w=this.a.gbW3()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.fpT.prototype={
$1(d){return C.h_K(A.a1(d,x.N,x.z))},
$S:z+11}
C.fpU.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fpV.prototype={
$2(d,e){var w=A.c7(d.a,null),v=A.c7(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+26}
C.fCN.prototype={
$1(d){return d.af()},
$S:z+21}
C.fKR.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fnc.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bM4.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f_(e,v)?v:null},
$S:1907}
C.fDl.prototype={
$1(d){var w=this
return new C.YF(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d4g.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d4f(w,d))},
$S:z+66}
C.d4f.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d44.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cy(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d41.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d3D.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d3E.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d45.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d3M.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.dX:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ej(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.d3K(d),w,w),A.bJ(B.w8,new C.d3L(d),A.bk(B.mN,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.d3K.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d3L.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d3N.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d42.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d43.prototype={
$0(){return B.d.gK(D.ys)},
$S:z+12}
C.d3I.prototype={
$1(d){var w=this.a,v=w.y,u=w.gxW(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.S3(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d3J.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d3O.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Yd(v,u,J.ad(w.d),null)},
$S:z+64}
C.d3P.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d4e.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aE(s,new C.XW(r.y,r.gxW(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d4c(r),s,s,s,s,s,s,!1,B.a8)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b8B(v,e,w,u,t,r.gbNm(),C.heT(r.y.Q),r.gxW(0),s)
w=t}return A.c6(q,new C.d4d(r,e),new A.C(B.XR,w,s))},
$S:1908}
C.d4d.prototype={
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
u.fw(v*3.141592653589793*0.5)
return A.fs(B.a3,A.dc(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.d4c.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFh(B.px,B.iw)},
$S:0}
C.d3Z.prototype={
$0(){var w=this.a
return w.m(new C.d3Y(w))},
$S:0}
C.d3Y.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d4_.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).O(null)
return null},
$S:0}
C.d3F.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jM.j(0.5),r=x.p,q=A.a([D.fer,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cl(p.d)?"Write this book":"Write a new book"
q.push(p.Y8(d,B.dW,w,J.cl(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Y8(d,L.ajJ,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cy(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cH,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kb.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cH,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kb.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Y8(d,A0.akU,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Y8(d,B.pP,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Y8(d,B.pP,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eG(u,E.Al,A.bn(!0,new A.C(A4.AP,A.v(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.aha,B.d0,u,new A.b7(t,new A.aA(s,1.4,B.q,-1)),u)},
$S:47}
C.d40.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.d3S.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cy(w.d)
return new C.YH(v,J.cy(w.d),w.r+1,null)},
$S:z+54}
C.d3T.prototype={
$1(d){var w=null
return A.oe(!1,A.ej(w,w,w,E.Al,new A.kb(this.a,new C.d3R(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:300}
C.d3R.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a6b,B.o8,A.D(A.d(e,w,w,w,w,w,w,B.iG,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:738}
C.d3U.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d3V.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:189}
C.d3W.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d3X.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.As(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.QT(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d3Q(s,t))
w=4
return A.b(s.kQ(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3Q.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d47.prototype={
$1(d){var w=null
return A.oe(!1,A.ej(w,w,w,E.Al,new A.kb(this.a,new C.d46(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:300}
C.d46.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a6b,B.o8,A.D(A.d(e,w,w,w,w,w,w,B.iG,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:738}
C.d48.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d49.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:189}
C.d4a.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:189}
C.d4b.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.As(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kQ(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3G.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bfw(B.px,V.Lm)},
$S:0}
C.d3H.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFh(B.px,V.Lm)},
$S:0}
C.d60.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d61.prototype={
$1(d){var w=this.a
return w.m(new C.d6_(w))},
$S:9}
C.d6_.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d62.prototype={
$1(d){var w=this.a
return w.m(new C.d5Z(w))},
$S:9}
C.d5Z.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d63.prototype={
$1(d){var w=this.a
return w.m(new C.d5Y(w))},
$S:9}
C.d5Y.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d64.prototype={
$0(){var w=this.a
return w.m(new C.d5X(w,this.b))},
$S:0}
C.d5X.prototype={
$0(){var w=this.b
this.a.d.saV(0,w)
return w},
$S:0}
C.d65.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga0O()
A.a6(this.b,!1).O(new A.bn7(w,v))},
$S:0}
C.d4v.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d4u.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.YD(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d4z.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d4y.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b5E(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hB,v,v,v)
return A.ej(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.d4w(d),v,v),A.bJ(B.w8,new C.d4x(d),A.bk(B.mN,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Al,w,v,v,v,v,D.fdl,v)},
$S:19}
C.d4w.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d4x.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d4A.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d4B.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.cd(A.bZ(B.bB,r,B.bs,18,14),B.r,t,B.y,t,D.bqy,t,t,B.ah)},
$S:301}
C.d4t.prototype={
$0(){return this.a.Ps(0,this.b)},
$S:0}
C.d4s.prototype={
$0(){return this.a.OX(0,this.b)},
$S:0}
C.cDy.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cDz.prototype={
$0(){return B.d.gK(D.ys)},
$S:z+12}
C.cDA.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bY(0,new A.C(d,A.c_(w,new A.o(w,w,A.I(this.a.j(f),B.q,g),v,w,w,B.n),B.bd),w),0,0,0)},
$S:1910}
C.cX_.prototype={
$1(d){return this.a.m(new C.cWZ(this.b,this.c))},
$S:9}
C.cWZ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cXo.prototype={
$1(d){return this.a.m(new C.cXb())},
$S:2}
C.cXb.prototype={
$0(){},
$S:0}
C.cXp.prototype={
$1(d){return this.a.m(new C.cXa())},
$S:2}
C.cXa.prototype={
$0(){},
$S:0}
C.cXq.prototype={
$0(){var w=this.a
return w.m(new C.cX9(w,this.b))},
$S:0}
C.cX9.prototype={
$0(){var w=this.a
return w.d=w.gnR().Fb(this.b.a)},
$S:0}
C.cXr.prototype={
$0(){var w=this.a
return w.m(new C.cX8(w,this.b))},
$S:0}
C.cX8.prototype={
$0(){var w=this.a
return w.d=w.gnR().cE2(this.b)},
$S:0}
C.cXs.prototype={
$1(d){return this.a.m(new C.cX7())},
$S:2}
C.cX7.prototype={
$0(){},
$S:0}
C.cXt.prototype={
$0(){var w=this.a
return w.m(new C.cX6(w,this.b))},
$S:0}
C.cX6.prototype={
$0(){var w=this.a
return w.d=w.gnR().cE7(this.b.a)},
$S:0}
C.cXu.prototype={
$1(d){var w=this.a
return w.m(new C.cXj(w,d))},
$S:6}
C.cXj.prototype={
$0(){var w=this.a
return w.d=w.gnR().cF1(this.b)},
$S:0}
C.cXv.prototype={
$1(d){var w=this.a
return w.d=w.gnR().aCq(d)},
$S:2}
C.cXw.prototype={
$1(d){var w=this.a
return w.d=w.gnR().cEa(d)},
$S:2}
C.cXy.prototype={
$1(d){var w=this.a
return w.d=w.gnR().cF_(d)},
$S:2}
C.cXz.prototype={
$1(d){var w=this.a
return w.m(new C.cXi(w,d))},
$S:9}
C.cXi.prototype={
$0(){var w=this.a
return w.d=w.gnR().cER(this.b)},
$S:0}
C.cXA.prototype={
$0(){var w=this.a,v=w.gnR(),u=B.a.i(w.gxW(0).a.a),t=B.a.i(w.gazH().a.a)
u=v.baf(B.a.i(w.gapy().a.a),t,u)
A.a6(this.b,!1).O(u)
return null},
$S:0}
C.dRN.prototype={
$0(){var w=this.a
w.vz()
w.a.bp()
w.a.pz()},
$S:0}
C.dRM.prototype={
$0(){var w=this.a
w.vz()
w.a.bp()
w.a.pz()},
$S:0}
C.dRP.prototype={
$0(){var w=this,v=w.b
if(J.cy(v)||J.cl(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dRQ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dRR.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dRL.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dRO.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dRT.prototype={
$0(){this.a.NV()
return null},
$S:0}
C.dRS.prototype={
$0(){return this.a.E2(this.b)},
$S:0}
C.dRd.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.de,w,w,!0,w,w,new C.dRb(d),w,w),r=A.bk(B.bU,w,w,w,w,w,w,w,w,w,w,w)
return A.ej(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dRc(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.dRb.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dRc.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dRe.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cEw(this.b)},
$S:0}
C.dR8.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aRi(w.b,w.c,w.d)},
$S:8}
C.dQH.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dQI.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dQW.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.G0(t.a.c),$async$$0)
case 2:s=r.r2(q.dH(e,new C.dQU(t)))
if(s!=null&&t.c!=null)t.m(new C.dQV(t,s))
t.a.bp()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQU.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dQV.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dQX.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dQY.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dR7.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cFj(C.hf1(w),w)},
$S:0}
C.dR5.prototype={
$1(d){return new A.e0(new C.dR4(this.a,this.b),null)},
$S:20}
C.dR4.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dX:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.alx,v,v,v,p>0?new C.dR0(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aP,A.A(A.a([o,A.D(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.am6,v,v,v,new C.dR1(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.ej(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dR2(d),v,v),A.bJ(B.p4,new C.dR3(d),A.bk(B.bU,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:163}
C.dR0.prototype={
$0(){return this.b.$1(new C.dR_(this.a))},
$S:0}
C.dR_.prototype={
$0(){return--this.a.a},
$S:0}
C.dR1.prototype={
$0(){return this.b.$1(new C.dQZ(this.a))},
$S:0}
C.dQZ.prototype={
$0(){return++this.a.a},
$S:0}
C.dR2.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dR3.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dR6.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cF6(this.a.a)
w.r.a9(0)},
$S:0}
C.dQv.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.agO(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.h8M(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dQw.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aCn(w)},
$S:0}
C.dRg.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.acf(this.b,w,this.c,null)},
$S:z+24}
C.dRa.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dX:B.c,t=A.m(20),s=A.W(B.lc,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.Q,0,B.p)
return A.ej(A.a([A.bJ(D.fnX,new C.dR9(d),A.bk(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.bb,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:19}
C.dR9.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dQx.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dQy.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dQz.prototype={
$1(d){return d.a},
$S:z+7}
C.dQA.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.L)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hV(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aCn(w)},
$S:0}
C.dQE.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.agO(q)
w=A.U(q).k("a2<1>")
q=A.B(new A.a2(q,new C.dQC(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.h8M(v.e,null,r,v.f,v.r,new C.dQD(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dQD.prototype={
$0(){return this.a.a91(this.b)},
$S:0}
C.dQC.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dQF.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("K<1,hV>")
w=A.B(new A.K(w,new C.dQB(this.b),v),v.k("ak.E"))
u.d=t.aCn(w)},
$S:0}
C.dQB.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dRf.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dQR.prototype={
$1(d){return d.length!==0},
$S:3}
C.dQS.prototype={
$1(d){var w=this
return new A.e0(new C.dQQ(w.a,w.b,w.c,w.d),null)},
$S:20}
C.dQQ.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dX:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.K(o,new C.dQM(u,e,o),A.U(o).k("K<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aM(v,B.T,!1,v,!0,B.r,v,A.aN(),u,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(12),B.dg),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ai,v,v,v,v,v,B.lY,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.am,v,v,v,v))
p=A.v(p,B.aj,v,B.e,B.Q,0,B.p)
t=w.a
return A.ej(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dQN(d),v,v),A.bJ(B.IS,new C.dQO(t,u,o,e),A.bk(B.bU,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.fby,new C.dQP(t,u,o,d),A.bk(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:163}
C.dQM.prototype={
$1(d){var w=null
return A.dN(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aQ:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bNh,w,w,w,new C.dQL(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1911}
C.dQL.prototype={
$0(){return this.a.$1(new C.dQJ(this.b,this.c))},
$S:0}
C.dQJ.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dQN.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dQO.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dQK(w.c,u))
v.bN(0,B.c3)}},
$S:0}
C.dQK.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dQP.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).O(!0)},
$S:0}
C.dQT.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cFL(this.b,D.tB,C.FZ(v,w.a.c))},
$S:0}
C.dRn.prototype={
$1(d){return d.as},
$S:z+1}
C.dRo.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iL(this.b,w)},
$S:0}
C.dRp.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.i2O(v)
return w.V6(v==null?null:v.a)},
$S:0}
C.dRq.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hGi(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcn(k)){k=A.aQ(1/0,e.a,e.b)
s=A.aQ(1/0,e.c,e.d)
l.cnT(new A.at(u,t),v.gbgn(),new A.at(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cLe:D.cJH
q=A.I(s?B.dp:D.b9b,B.q,1)
p=A.m(22)
o=A.bY(0,A.b3(m,m,m,new C.bbY(s,m),B.au),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bw(p,new A.an(B.W,m,B.aa,B.r,A.a([o,A.bY(0,A.uc(new A.Q(n,n,n,n),new A.a7(u,t,new C.bcR(l.d,v,l.f,w,new C.dRj(l),l.gc8_(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bu9(s,new C.dRk(l,e),new C.dRl(l,e),new C.dRm(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.b0,B.b5,B.x,r,m,m),B.n),m,m,m,R.agf,m,m,m,m)},
$S:215}
C.dRj.prototype={
$1(d){var w=this.a
w.m(new C.dRh(w,d))},
$S:2}
C.dRh.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.L(0,v)},
$S:0}
C.dRk.prototype={
$0(){var w=this.b
return this.a.b7T(1.25,new A.at(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dRl.prototype={
$0(){var w=this.b
return this.a.b7T(0.8,new A.at(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dRm.prototype={
$0(){var w=this,v=w.b
return w.a.aRi(new A.at(A.aQ(1/0,v.a,v.b),A.aQ(1/0,v.c,v.d)),new A.at(w.c,w.d),w.e.gbgn())},
$S:0}
C.dRr.prototype={
$0(){var w=this.a
return w.m(new C.dRi(w))},
$S:0}
C.dRi.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dQG.prototype={
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
C.d4F.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bgz(u,C.hj5(v.c,u),new C.d4E(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d4E.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d4G.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bjV(d.d,d.c,u.f.t(0,d.a),new C.d4D(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d4D.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fnU.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.r2(new A.cQ(new A.a2(v,new C.fnV(d),w.k("a2<1>")),new C.fnW(),w.k("cQ<1,n>")))},
$S:z+20}
C.fnV.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fnW.prototype={
$1(d){return d.a},
$S:z+7}
C.fnS.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fnT.prototype={
$1(d){return d.b},
$S:z+7}
C.fnZ.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.r2(new A.cQ(new A.a2(v,new C.fo_(d),w.k("a2<1>")),new C.fo0(),w.k("cQ<1,n>")))},
$S:z+20}
C.fo_.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fo0.prototype={
$1(d){return d.a},
$S:z+7}
C.fnX.prototype={
$1(d){var w,v=A.ew([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ai(0,w)&&v.L(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fnY.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d4I.prototype={
$0(){return this.a},
$S:z+32}
C.d4Z.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ai(0,d)},
$S:253}
C.d4R.prototype={
$2(d,e){var w=this.a.cg(0,d,new C.d4S()),v=J.a5(w)
if(!v.t(w,e))v.L(w,e)},
$S:121}
C.d4S.prototype={
$0(){return A.a([],x.s)},
$S:739}
C.d4Q.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f_(w,e)
return w===!0},
$S:306}
C.d4J.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d4P.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d4O.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.L(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.BS:v)
u=1
while(v.C())u+=s.$2(v.gS(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.T:v)
while(v.C()){t=v.gS(v)
if(e.t(0,t))continue
e.L(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.BS:t)
while(t.C())u+=s.$2(t.gS(t).a,e)}return u},
$S:1913}
C.d4K.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d4T.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.L(0,a9)
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
if(u){a8.L(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aV(t==null?D.BS:t)
while(t.C()){r=t.gS(t)
if(r.a!==a9&&!B.d.b7(w,new C.d4U(r)))w.push(r)}}B.d.bn(w,new C.d4V(a8))
B.d.b_(w,new C.d4W())
q=C.hGh(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.esT],x.G))}a8=A.a([],x.s)
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
else j.push(d)}}a0=(B.d.gK(k)+B.d.gal(k))/2
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
$S:1914}
C.d4U.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d4V.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d4W.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.d4X.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a5(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a3(v).k("bc<2>")).cI(0,0,B.qq)+88-w.gK(n).a}else u=0
for(w=J.a5(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:653}
C.d4Y.prototype={
$1(d){return 16+d*156},
$S:258}
C.d4H.prototype={
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
t.n(0,d,new C.Ff(r,new A.u(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.Ff(s,new A.u(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.Ff(s,new A.u(e,v)))}t=o.r.h(0,d)
t=J.aV(t==null?B.T:t)
s=o.w
while(t.C()){r=t.gS(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Jw(d,new A.u(e+t,w),s,s.length))}},
$S:189}
C.d4L.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aHA(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:121}
C.d4M.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d4N.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:740}
C.d5_.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:740}
C.d50.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:378}
C.d51.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:198}
C.d52.prototype={
$1(d){return d>=0.5},
$S:124}
C.f6l.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hp(A.aL(!1,v,!0,new A.a7(38,38,A.W(d,this.a.c?B.c:B.cC,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1916}
C.eID.prototype={
$1(d){var w=null,v=A.m(8),u=B.bU.j(0.12),t=A.m(8)
return new A.C(B.n2,A.aL(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.eYM,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.LV,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eIC(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eIC.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dkS.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dkR.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nn,B.L,w,w)
return A.ej(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.dkP(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.m9,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dkQ(d),w,w)],x.p),B.bb,B.AI,w,u,D.brO,w,D.btK,new A.b7(v,B.Y),w,w)},
$S:19}
C.dkP.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dkQ.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dl0.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dl1.prototype={
$1(d){var w=this.a
return w.m(new C.dl_(w,d))},
$S:z+37}
C.dl_.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dl2.prototype={
$1(d){var w=null
return A.q8(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dl5.prototype={
$1(d){var w=this.a
return w.m(new C.dkZ(w,d))},
$S:34}
C.dkZ.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dl4.prototype={
$1(d){var w=null
return A.q8(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dl6.prototype={
$1(d){var w=this.a
return w.m(new C.dkY(w,d))},
$S:34}
C.dkY.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dl7.prototype={
$0(){var w=this.a
return w.m(new C.dkX(w))},
$S:0}
C.dkX.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dl8.prototype={
$0(){var w=this.a
return w.m(new C.dkW(w))},
$S:0}
C.dkW.prototype={
$0(){return++this.a.at},
$S:0}
C.dl9.prototype={
$0(){var w=this.a
return w.m(new C.dkV(w))},
$S:0}
C.dkV.prototype={
$0(){return--this.a.ax},
$S:0}
C.dla.prototype={
$0(){var w=this.a
return w.m(new C.dkU(w))},
$S:0}
C.dkU.prototype={
$0(){return++this.a.ax},
$S:0}
C.dlb.prototype={
$1(d){var w=this.a
return w.m(new C.dkT(w,d))},
$S:9}
C.dkT.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dl3.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dlc.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bU.j(0.18)
else w=q.c.a?B.dX:B.c
v=A.m(12)
if(p)u=B.bU
else u=(q.c.a?B.dZ:B.bR).j(0.85)
u=A.I(u,B.q,p?1.5:1)
if(p)t=B.bU
else t=q.c.a?B.bq:B.bn
t=A.W(f,t,r,r,r,18)
if(p)s=B.bU
else s=q.c.a?B.bq:B.bn
return A.D(A.aG(!1,B.a1,!0,r,A.aL(!1,o,!0,A.dh(r,A.v(A.a([t,B.at,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bc,new A.o(w,r,u,v,r,r,B.n),B.eE,r,r,r,B.jx,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dld(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
$S:z+39}
C.dld.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dlm.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.c6L.prototype={
$2(d,e){return new A.bv(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:95}
C.c6S.prototype={
$1(d){return d.af()},
$S:z+5}
C.c6T.prototype={
$2(d,e){var w=J.b6(e,new C.c6R(),x.a)
w=A.B(w,w.$ti.k("ak.E"))
return new A.bv(d,w,x.d2)},
$S:z+41}
C.c6R.prototype={
$1(d){return d.af()},
$S:z+21}
C.c6N.prototype={
$1(d){return C.ajD(A.a1(d,x.N,x.z))},
$S:z+8}
C.c6O.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c6P.prototype={
$1(d){return C.h_K(A.a1(d,x.N,x.z))},
$S:z+11}
C.c6Q.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c6X.prototype={
$1(d){return new A.aEG(d.f.length,d.a,d.b)},
$S:z+43}
C.c6Y.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:565}
C.c6U.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c6V.prototype={
$1(d){return d.cEJ(C.FZ(d,this.a))},
$S:z+44}
C.dRA.prototype={
$1(d){return C.tI(d,this.a.a.c)},
$S:z+2}
C.dRB.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dRF.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dRG.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dRx.prototype={
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
return A.b(A.oW(r.c,r.e),$async$$0)
case 4:s.xX(p)
w=5
return A.b(s.J3(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRy.prototype={
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
return A.b(A.oW(r.c,r.e),$async$$0)
case 4:s.xX(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRz.prototype={
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
break}if(q==null){o.xX("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.xX("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.xX("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.J3(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.a9(j)
o=r.a
if(o.c==null){w=1
break}o.xX(B.a.e9(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dRE.prototype={
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
return A.b(A.a6(r,!1).c6(A.e7(new C.dRD(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oW(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRD.prototype={
$1(d){var w=this.b
return new C.ZB(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dRC.prototype={
$1(d){return D.fNp},
$S:z+46}
C.dRI.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dRJ.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dRH(w,d)
return new A.C(B.dc,new C.bcV(this.b,d.c,d.a,w,null),null)},
$S:1917}
C.dRH.prototype={
$0(){return this.a.WP(this.b.b)},
$S:0}
C.dRs.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dRt.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dRu.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dRv.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dRw.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dRK.prototype={
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
$S:196}
C.dCU.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dCV.prototype={
$0(){return B.d.gK(D.a2m)},
$S:z+48}
C.dCW.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.W(this.b.d,B.c.j(0.95),w,w,D.cRi,44),w,w,w),w,w,new C.bhH(u,t,v,w),B.au)},
$S:67}
C.fDO.prototype={
$1(d){return A.oH(new C.fDN(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:127}
C.fDN.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dX:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rm,24)],x.V),o=r?B.dZ:B.bR
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bU.j(0.18)],x.O)
w=A.p(t,D.bHS,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a8(B.a3,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aQ:B.aB,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.S,o,new A.C(E.ahe,A.A(A.a([w,B.bf,A.D(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bq:B.bn,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.D(A.ic(!0,t,e,B.y,D.eM8,new C.fDM(this.b,s),20,B.agP,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kz,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:115}
C.fDM.prototype={
$2(d,e){var w=null,v=D.a2m[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.dZ:B.bR,B.q,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.ej,8)],x.V),p=A.m(15),o=A.D(new C.a5r(v.a,!0,w),1),n=s?B.jt:B.iP,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aQ:B.aB,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a1,!0,w,A.aL(!1,u,!0,A.ez(A.bw(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bq:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.l8,w,w,w)],l),B.aj,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fDL(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)},
$S:75}
C.fDL.prototype={
$0(){A.a6(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cep.prototype={
$0(){return this.a.aeU(this.b)},
$S:0}
C.fDa.prototype={
$1(d){return D.fJF},
$S:z+74}
C.fKD.prototype={
$1(d){var w=this
return new C.a0j(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fDf.prototype={
$1(d){return new C.Yf(this.a,null)},
$S:z+51}
C.fDe.prototype={
$1(d){return D.fKE},
$S:z+52}
C.cXM.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cXN.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cXL(w,d))},
$S:34}
C.cXL.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cXO.prototype={
$1(d){return this.a.JD()},
$S:2}
C.cXP.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cXI.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cXJ.prototype={
$1(d){return this.a.JD()},
$S:2}
C.cXK.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cvl.prototype={
$0(){},
$S:0}
C.cvr.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cvs.prototype={
$0(){return this.a.aMR(-1)},
$S:0}
C.cvt.prototype={
$1(d){return this.a.m(new C.cvq())},
$S:2}
C.cvq.prototype={
$0(){},
$S:0}
C.cvu.prototype={
$0(){return this.a.aMR(1)},
$S:0}
C.cvv.prototype={
$1(d){return this.a.m(new C.cvp())},
$S:2}
C.cvp.prototype={
$0(){},
$S:0}
C.cvw.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.dZ:B.bR
return A.u2(u,u,B.aZ,r,u,new C.cvo(t,d),B.AV,s,w,u,new A.aA(v,1,B.q,-1),B.c8)},
$S:1918}
C.cvo.prototype={
$1(d){var w=this.a
return w.m(new C.cvm(w,this.b))},
$S:9}
C.cvm.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cvx.prototype={
$1(d){return this.a.m(new C.cvn())},
$S:2}
C.cvn.prototype={
$0(){},
$S:0}
C.cvy.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.f5O.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).O(w)},
$S:2}
C.f5P.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.f5Q.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).O(w)},
$S:0}
C.f5M.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbwG()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b3(new A.C(D.btJ,new A.et(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.btZ(p,v,this.b.a,u,t,r),r,r,B.au)},
$S:67}
C.f5N.prototype={
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
s=A.aq(B.aV,B.bU,w)
s.toString
s=A.a([B.aZ,s,B.aV],x.O)
return A.aG(!1,B.a1,!0,p,A.aL(!1,v,!0,A.ez(D.e3D,r,new A.o(r,r,A.I(B.c.j(0.4),B.q,1.5),u,r,new A.a8(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
$S:132}
C.fBW.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:70}
C.eFN.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eFE.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eFF.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eFL.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e0(new C.eFK(w,this.b),null)},
$S:20}
C.eFK.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dX:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aB,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eG(w,u,new A.C(B.ah8,A.v(A.a([s,B.an,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.h5z(new C.eFH(r,e),r.a),B.aA,A.A(A.a([A.D(A.dV(B.de,new C.eFI(d),w),1),B.av,A.D(A.bJ(B.Tk,new C.eFJ(r,d),A.bk(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.aj,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(t,B.Y),w)},
$S:98}
C.eFH.prototype={
$1(d){return this.b.$1(new C.eFG(this.a,d))},
$S:34}
C.eFG.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eFI.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFJ.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.eFM.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.S5(this.b)},
$S:0}
C.eFz.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.b9O(w)},
$S:0}
C.eFD.prototype={
$1(d){return this.biR(d)},
biR(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.KH(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iL(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eFC.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("a2<1>")
w=A.B(new A.a2(w,new C.eFB(this.b),v),v.k("J.E"))
u.d=t.b9O(w)},
$S:0}
C.eFB.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eFO.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iL(this.b,w)},
$S:0}
C.eFP.prototype={
$1(d){return this.a.bAK(d,this.b)},
$S:z+55}
C.eFA.prototype={
$0(){return this.a.a90(this.b)},
$S:0}
C.fKv.prototype={
$1(d){return new C.acA(this.a,this.b,this.c,null)},
$S:z+56}
C.eFR.prototype={
$0(){return this.a.Zt(this.b)},
$S:0}
C.eFS.prototype={
$0(){return this.a.Po(this.b)},
$S:0}
C.eFT.prototype={
$0(){return this.a.DY(this.b)},
$S:0}
C.eFU.prototype={
$0(){return this.a.Zu(this.b)},
$S:0}
C.eFQ.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFu.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eFv.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eFw.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFy.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pF(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eFx(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eFx.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eGg.prototype={
$2(d,e){return d+e.gwC()},
$S:z+59}
C.eGc.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eGd.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eFY.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dX:B.c,s=A.m(24),r=A.p(v,D.bIh,B.f,v,v,new A.o(B.ay.j(u?0.18:0.08),v,A.I(B.ay.j(0.28),B.q,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.aB,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aQ:B.aB
u=u?B.dZ:B.bR
w=x.p
return A.eG(v,t,new A.C(B.xr,A.v(A.a([r,B.aP,q,B.P,p,B.d5,A.A(A.a([A.D(A.dV(B.nq,new C.eFW(d),A.df(v,v,v,v,v,v,v,v,v,o,v,v,B.eZ,v,new A.b7(A.m(14),B.Y),new A.aA(u,1,B.q,-1),v,v,v,v)),1),B.av,A.D(A.bJ(D.frD,new C.eFX(d),A.bk(B.ay,v,v,v,v,v,B.eZ,v,new A.b7(A.m(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d0,v,new A.b7(s,B.Y),v)},
$S:47}
C.eFW.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eFX.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eG6.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dX:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fL,28)],x.V),g=k?D.cXE:B.a1L,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aA,D.eGn,B.at,new A.bH(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cv,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.ax,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.ahb,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.D(v.b35(B.b6,B.iU,new C.eG3(v,d),l,"Camera import","Scan QR"),1),B.av,A.D(v.b35(B.cy,M.y7,new C.eG4(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.ay.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.ay.j(0.28),B.q,1)
o=A.p(m,D.bHG,B.f,m,m,new A.o(B.ay.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bS,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aQ:B.aB,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.D(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bn,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bn(!0,new A.C(B.va,A.p(m,A.v(A.a([g,new A.C(B.ah9,A.v(A.a([w,B.S,u,B.bx,t,B.S,A.aG(!1,B.a1,!0,m,A.aL(!1,s,!0,A.p(m,A.A(A.a([o,B.bf,n,A.W(B.ex,k?B.bq:B.bn,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bC,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eG5(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:28}
C.eG3.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.va("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eG4.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.va("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eG5.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.Nc(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eG1.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dX:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eT,24)],x.V),k=o?B.dZ:B.bR
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bq:B.bn
u=A.bw(w,new A.a7(48,48,C.aOP(!0,A.m(12),48,N.Mv,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aQ:B.aB,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Aj(v.gwC())
s=x.p
r=this.a
return A.bn(!0,new A.C(B.va,A.p(q,A.v(A.a([B.S,k,new A.C(D.ah6,A.A(A.a([u,B.bf,A.D(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bq:B.bn,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.Az,r.ci8(B.tT,B.aV,new C.eG_(d),p,"QR code or backup file","Transfer project"),r.b07(!0,B.e4,B.ay,new C.eG0(d),p,"Remove from this device","Delete project"),B.S],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:28}
C.eG_.prototype={
$0(){A.a6(this.a,!1).O("transfer")
return null},
$S:0}
C.eG0.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
C.eG2.prototype={
$1(d){return this.biS(d)},
biS(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.KH(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vn(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eGj.prototype={
$0(){var w=this.a
w.a.bp()
w.m(new C.eGi(w))},
$S:0}
C.eGi.prototype={
$0(){return this.a.r++},
$S:0}
C.eGk.prototype={
$0(){var w=this.a
return w.m(new C.eGh(w))},
$S:0}
C.eGh.prototype={
$0(){return this.a.r++},
$S:0}
C.eFV.prototype={
$0(){var w=this.a.c
w.toString
return A.iL(w,null)},
$S:0}
C.eFZ.prototype={
$0(){return this.a.cbu(this.b)},
$S:0}
C.eGf.prototype={
$0(){var w=this.a
return w.m(new C.eGe(w,this.b))},
$S:0}
C.eGe.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eG9.prototype={
$0(){return this.a.va("scan")},
$S:0}
C.eGa.prototype={
$0(){return this.a.va("file")},
$S:0}
C.eGb.prototype={
$1(d){return this.a.ci9(d,this.b)},
$S:z+60}
C.eG8.prototype={
$0(){return this.a.E1(this.b)},
$S:0}
C.eG7.prototype={
$0(){return this.a.ZZ(this.b,this.c)},
$S:0}
C.cuM.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cuL.prototype={
$1(d){return d.af()},
$S:z+62}
C.cuJ.prototype={
$1(d){return C.hoU(A.a1(d,x.N,x.z))},
$S:z+63}
C.cuK.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fn4.prototype={
$1(d){return d.y===D.ki},
$S:z+2}
C.fKZ.prototype={
$1(d){return C.bzN(d,this.a)},
$S:z+2}
C.flB.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bM9.prototype={
$1(d){return!d.as},
$S:z+1}
C.bM8.prototype={
$1(d){return d.af()},
$S:z+15}
C.bM5.prototype={
$1(d){return C.h_L(A.a1(d,x.N,x.z))},
$S:z+14}
C.bM6.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bM7.prototype={
$1(d){return J.k(d)},
$S:17}
C.fdn.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.f93.prototype={
$1(d){return C.fRk(A.a1(d,x.N,x.z))},
$S:z+67}
C.f94.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.f95.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fD1.prototype={
$1(d){return J.k(d)},
$S:17}
C.fD2.prototype={
$1(d){return d.a},
$S:z+69}
C.fD3.prototype={
$1(d){return d.length!==0},
$S:3}
C.fD4.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fD5.prototype={
$1(d){return d.S5(null).af()},
$S:z+70}
C.fKX.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fnw.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fpZ.prototype={
$1(d){return C.ajD(A.a1(d,x.N,x.z))},
$S:z+8}
C.fq_.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fq0.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fq1.prototype={
$1(d){return d.af()},
$S:z+5}
C.fq2.prototype={
$1(d){return C.tI(d,this.a)},
$S:z+2}
C.fCP.prototype={
$1(d){return C.tI(d,this.a)},
$S:z+2}
C.fKS.prototype={
$1(d){return C.ajD(A.a1(d,x.N,x.z))},
$S:z+8}
C.fKT.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fKU.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fnd.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fne.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fL2.prototype={
$1(d){return!d.as},
$S:z+1}
C.fmO.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fmP.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fmQ.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.fKE.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fqL.prototype={
$1(d){return d.Q},
$S:z+72}
C.fCL.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fpW.prototype={
$1(d){return C.ajD(A.a1(d,x.N,x.z))},
$S:z+8}
C.fpX.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fpY.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fCH.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.f9B.prototype={
$1(d){return d.length!==0},
$S:3}
C.f9C.prototype={
$1(d){return C.h_L(A.a1(d,x.N,x.z))},
$S:z+14}
C.f9D.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.f9E.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.f9F.prototype={
$1(d){return d.length!==0},
$S:3}
C.f9S.prototype={
$2(d,e){return d.eU(new C.f9T(e))},
$S:1919}
C.f9T.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c6},
$S:1920}
C.f9P.prototype={
$1(d){return C.hKU(d,this.a)},
$S:z+73}
C.f9Q.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.f9R.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fe1.prototype={
$1(d){return d.a},
$S:z+49}
C.fe2.prototype={
$1(d){return d.length!==0},
$S:3}
C.fe3.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fg8.prototype={
$1(d){return d.af()},
$S:z+5}
C.fkV.prototype={
$1(d){return C.hb4(d,C.FZ(d,this.a))},
$S:z+5}
C.fkW.prototype={
$1(d){return C.hb5(d,C.FZ(d,this.a))},
$S:z+5};(function aliases(){var w=C.aJW.prototype
w.bsV=w.q
w=C.aM4.prototype
w.bvf=w.q
w=C.aM5.prototype
w.bvg=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aBs.prototype,"gcf5","cf6",25)
var s
w(s=C.ayv.prototype,"gc85","c86",42)
v(s,"gaL7","ML",0)
v(s,"gcne","Ar",0)
v(s,"gbIo","Nq",0)
v(s,"gcB0","xY",0)
v(s,"gch6","a_G",0)
v(s,"gbDR","N8",0)
v(s,"gbIP","Wg",0)
w(s,"gbNm","bNn",71)
v(s,"gbyl","zu",0)
v(C.ayw.prototype,"gcAX","ET",0)
v(s=C.aC2.prototype,"gaew","vo",0)
v(s,"gcaK","ZQ",0)
v(s,"gaP7","Hs",0)
v(s=C.aC_.prototype,"gcxc","a1L",0)
v(s,"gaew","vo",0)
v(s,"gcli","a0l",0)
v(s,"gcbH","a_3",0)
w(s,"gc8_","c80",30)
v(s,"gbIG","Hx",0)
v(s,"gcyb","cyc",3)
v(s,"gbZM","XV",0)
w(s,"gc6w","c6x",23)
v(s,"gcau","cav",3)
v(s=C.aAr.prototype,"gc4k","OY",0)
v(s,"gc4m","c4n",3)
v(s,"gbFm","a8D",0)
v(s=C.aC1.prototype,"gbLT","WL",0)
v(s,"gbWa","Xo",0)
v(s,"gcrx","a1b",0)
v(s,"gcnO","a0N",0)
v(C.aC0.prototype,"gcnw","agf",0)
v(C.ard.prototype,"gc6u","Zs",0)
v(C.axh.prototype,"ga1v","JD",3)
v(C.axg.prototype,"ga1v","JD",3)
v(C.aw0.prototype,"ga1v","JD",3)
v(s=C.aDx.prototype,"gb_w","PT",0)
v(s,"gbx8","V0",0)
v(s,"gcbv","cbw",3)
w(C.aDw.prototype,"gc7k","c7l",57)
u(C.aDy.prototype,"gaP1",0,0,null,["$1","$0"],["Hr","bGD"],58,0,0)
t(C,"hij","hUv",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.an7,C.u_,C.n5,C.H4,C.adM,C.Jo,C.u0,C.Jw,C.Ff,C.bcT,C.aHA,C.aoh,C.d53,C.lv,C.aRK,C.aRJ,C.aPM,C.tx,C.qN,C.lf,C.hV,C.ky,C.aFA])
u(A.hT,[C.fuB,C.fuA,C.fuC,C.fDH,C.fjR,C.fjS,C.fjX,C.fsk,C.fsj,C.fsi,C.c0d,C.fEc,C.fE4,C.fEg,C.fnl,C.dDA,C.dDv,C.dDw,C.dD8,C.dD4,C.dDP,C.dDQ,C.dDJ,C.dDK,C.dDR,C.dDS,C.fnQ,C.fpT,C.fpU,C.fCN,C.fKR,C.fnc,C.fDl,C.d4g,C.d3D,C.d3M,C.d42,C.d3I,C.d3O,C.d3F,C.d3S,C.d3T,C.d3R,C.d47,C.d46,C.d61,C.d62,C.d63,C.d4u,C.d4z,C.d4y,C.cDy,C.cDA,C.cX_,C.cXo,C.cXp,C.cXs,C.cXu,C.cXv,C.cXw,C.cXy,C.cXz,C.dRO,C.dRd,C.dR8,C.dQH,C.dQU,C.dQX,C.dR5,C.dQv,C.dRg,C.dRa,C.dQx,C.dQy,C.dQz,C.dQE,C.dQC,C.dQB,C.dQR,C.dQS,C.dQM,C.dRn,C.dRj,C.d4F,C.d4G,C.fnU,C.fnV,C.fnW,C.fnS,C.fnT,C.fnZ,C.fo_,C.fo0,C.fnX,C.fnY,C.d4Z,C.d4P,C.d4K,C.d4U,C.d4V,C.d4Y,C.d4M,C.d50,C.d51,C.d52,C.f6l,C.eID,C.dkR,C.dl0,C.dl1,C.dl2,C.dl5,C.dl4,C.dl6,C.dlb,C.dlc,C.c6S,C.c6R,C.c6N,C.c6O,C.c6P,C.c6Q,C.c6X,C.c6U,C.c6V,C.dRA,C.dRD,C.dRC,C.dRJ,C.dRK,C.dCU,C.fDO,C.fDa,C.fKD,C.fDf,C.fDe,C.cXN,C.cXO,C.cXJ,C.cvt,C.cvv,C.cvw,C.cvo,C.cvx,C.f5O,C.fBW,C.eFL,C.eFH,C.eFD,C.eFB,C.eFP,C.fKv,C.eFY,C.eG6,C.eG1,C.eG2,C.eGb,C.cuL,C.cuJ,C.cuK,C.fn4,C.fKZ,C.flB,C.bM9,C.bM8,C.bM5,C.bM6,C.bM7,C.f93,C.f94,C.fD1,C.fD2,C.fD3,C.fD4,C.fD5,C.fKX,C.fnw,C.fpZ,C.fq_,C.fq1,C.fq2,C.fCP,C.fKS,C.fKT,C.fKU,C.fnd,C.fne,C.fL2,C.fmO,C.fmP,C.fKE,C.fqL,C.fCL,C.fpW,C.fpX,C.fCH,C.f9B,C.f9C,C.f9D,C.f9E,C.f9F,C.f9T,C.f9P,C.f9Q,C.fe1,C.fe2,C.fg8,C.fkV,C.fkW])
u(A.au,[C.aXa,C.ajB,C.aSZ,C.XW,C.b8B,C.bcR,C.bgz,C.bu9,C.bjV,C.ace,C.bgy,C.acd,C.bgx,C.aAs,C.aGD,C.acf,C.Jj,C.bcS,C.abw,C.bcQ,C.bcV,C.aX8,C.ard,C.acA])
u(A.mH,[C.b9c,C.bap,C.bag,C.aFv,C.bfC,C.bcU,C.bbY,C.bhH,C.btZ])
u(A.j3,[C.fE9,C.fEa,C.fEb,C.fE2,C.fE3,C.fEe,C.fEf,C.dDM,C.dDy,C.dDB,C.dDf,C.dDg,C.dDh,C.dDe,C.dDm,C.dDd,C.dDn,C.dDo,C.dDc,C.dDp,C.dDb,C.dDq,C.dDa,C.dDr,C.dD2,C.dD3,C.dD9,C.dDs,C.dD7,C.dDt,C.dD6,C.dDi,C.dD5,C.dDj,C.dD1,C.dDk,C.dDl,C.dDN,C.dDO,C.dDC,C.dDD,C.dDE,C.dDF,C.dDG,C.dDH,C.dDI,C.dDU,C.dDL,C.fnR,C.d3B,C.d3z,C.d3A,C.d3C,C.d4f,C.d44,C.d41,C.d3E,C.d45,C.d3K,C.d3L,C.d3N,C.d43,C.d3J,C.d3P,C.d4c,C.d3Z,C.d3Y,C.d4_,C.d40,C.d3U,C.d3W,C.d3X,C.d3Q,C.d48,C.d4b,C.d3G,C.d3H,C.d60,C.d6_,C.d5Z,C.d5Y,C.d64,C.d5X,C.d65,C.d4v,C.d4w,C.d4x,C.d4A,C.d4t,C.d4s,C.cDz,C.cWZ,C.cXb,C.cXa,C.cXq,C.cX9,C.cXr,C.cX8,C.cX7,C.cXt,C.cX6,C.cXj,C.cXi,C.cXA,C.dRN,C.dRM,C.dRP,C.dRQ,C.dRR,C.dRL,C.dRT,C.dRS,C.dRb,C.dRc,C.dRe,C.dQI,C.dQW,C.dQV,C.dQY,C.dR7,C.dR0,C.dR_,C.dR1,C.dQZ,C.dR2,C.dR3,C.dR6,C.dQw,C.dR9,C.dQA,C.dQD,C.dQF,C.dRf,C.dQL,C.dQJ,C.dQN,C.dQO,C.dQK,C.dQP,C.dQT,C.dRo,C.dRp,C.dRh,C.dRk,C.dRl,C.dRm,C.dRr,C.dRi,C.dQG,C.d4E,C.d4D,C.d4I,C.d4S,C.d4J,C.eIC,C.dkS,C.dkP,C.dkQ,C.dl_,C.dkZ,C.dkY,C.dl7,C.dkX,C.dl8,C.dkW,C.dl9,C.dkV,C.dla,C.dkU,C.dkT,C.dl3,C.dld,C.dlm,C.dRB,C.dRF,C.dRG,C.dRx,C.dRy,C.dRz,C.dRE,C.dRI,C.dRH,C.dRs,C.dRt,C.dRu,C.dRv,C.dRw,C.dCV,C.fDL,C.cep,C.cXM,C.cXL,C.cXP,C.cXI,C.cXK,C.cvl,C.cvr,C.cvs,C.cvq,C.cvu,C.cvp,C.cvm,C.cvn,C.cvy,C.f5P,C.f5Q,C.eFN,C.eFE,C.eFF,C.eFG,C.eFI,C.eFJ,C.eFM,C.eFz,C.eFC,C.eFO,C.eFA,C.eFR,C.eFS,C.eFT,C.eFU,C.eFQ,C.eFu,C.eFv,C.eFw,C.eFy,C.eFx,C.eGc,C.eGd,C.eFW,C.eFX,C.eG3,C.eG4,C.eG5,C.eG_,C.eG0,C.eGj,C.eGi,C.eGk,C.eGh,C.eFV,C.eFZ,C.eGf,C.eGe,C.eG9,C.eGa,C.eG8,C.eG7])
u(A.ag,[C.ane,C.S3,C.YD,C.YH,C.YF,C.Yd,C.aok,C.aoe,C.Zg,C.aoi,C.ZB,C.ZC,C.a5r,C.Yf,C.Ye,C.XN,C.a0j,C.F3,C.avU,C.arc,C.ar6,C.arb,C.Nv])
u(A.ah,[C.aBs,C.bcO,C.ayv,C.bd8,C.ayw,C.ban,C.aC2,C.aC_,C.aAr,C.aC1,C.aC0,C.bi1,C.aJW,C.axh,C.axg,C.aw0,C.bu1,C.aM4,C.aM5,C.aDx,C.bjo,C.aDw,C.bvN])
u(A.kf,[C.dDx,C.dDz,C.dDu,C.dDT,C.fpV,C.bM4,C.d4e,C.d4d,C.d3V,C.d49,C.d4a,C.d4B,C.dR4,C.dQQ,C.dRq,C.d4R,C.d4Q,C.d4O,C.d4T,C.d4W,C.d4X,C.d4H,C.d4L,C.d4N,C.d5_,C.c6L,C.c6T,C.c6Y,C.dCW,C.fDN,C.fDM,C.f5M,C.f5N,C.eFK,C.eGg,C.cuM,C.fdn,C.f95,C.fq0,C.fmQ,C.fpY,C.f9S,C.f9R,C.fe3])
t(C.bhI,C.aJW)
u(A.m4,[C.aaz,C.aIh,C.H5,C.ajC,C.cuO,C.cuP])
t(C.bu_,C.aM4)
t(C.bu0,C.aM5)
t(C.aDy,C.bvN)
t(C.b73,A.b6T)
t(C.bu2,A.a56)
t(C.b72,C.bu2)
w(C.aJW,A.eT)
w(C.aM4,A.c9)
w(C.aM5,A.c9)
v(C.bvN,A.ex)
v(C.bu2,A.iZ)})()
A.jT(b.typeUniverse,JSON.parse('{"aXa":{"au":[],"r":[]},"b9c":{"aB":[]},"ane":{"ag":[],"r":[]},"aBs":{"ah":["ane"]},"S3":{"ag":[],"r":[]},"ajB":{"au":[],"r":[]},"aSZ":{"au":[],"r":[]},"bcO":{"ah":["S3"]},"YD":{"ag":[],"r":[]},"YH":{"ag":[],"r":[]},"YF":{"ag":[],"r":[]},"Yd":{"ag":[],"r":[]},"ayv":{"ah":["YD"]},"bd8":{"ah":["YH"]},"ayw":{"ah":["YF"]},"XW":{"au":[],"r":[]},"bap":{"aB":[]},"bag":{"aB":[]},"ban":{"ah":["Yd"]},"aFv":{"aB":[]},"bfC":{"aB":[]},"b8B":{"au":[],"r":[]},"aok":{"ag":[],"r":[]},"aoe":{"ag":[],"r":[]},"Zg":{"ag":[],"r":[]},"acf":{"au":[],"r":[]},"aC2":{"ah":["aok"]},"aC_":{"ah":["aoe"]},"bcR":{"au":[],"r":[]},"bcU":{"aB":[]},"bgz":{"au":[],"r":[]},"bbY":{"aB":[]},"bu9":{"au":[],"r":[]},"bjV":{"au":[],"r":[]},"aAr":{"ah":["Zg"]},"ace":{"au":[],"r":[]},"bgy":{"au":[],"r":[]},"acd":{"au":[],"r":[]},"bgx":{"au":[],"r":[]},"aAs":{"au":[],"r":[]},"aGD":{"au":[],"r":[]},"Jj":{"au":[],"r":[]},"aoi":{"ag":[],"r":[]},"ZB":{"ag":[],"r":[]},"ZC":{"ag":[],"r":[]},"aC1":{"ah":["aoi"]},"bcS":{"au":[],"r":[]},"abw":{"au":[],"r":[]},"bcQ":{"au":[],"r":[]},"bcV":{"au":[],"r":[]},"aC0":{"ah":["ZB"]},"bi1":{"ah":["ZC"]},"aX8":{"au":[],"r":[]},"a5r":{"ag":[],"r":[]},"bhI":{"ah":["a5r"]},"bhH":{"aB":[]},"ard":{"au":[],"r":[]},"Yf":{"ag":[],"r":[]},"Ye":{"ag":[],"r":[]},"XN":{"ag":[],"r":[]},"a0j":{"ag":[],"r":[]},"axh":{"ah":["Yf"]},"axg":{"ah":["Ye"]},"aw0":{"ah":["XN"]},"bu1":{"ah":["a0j"]},"F3":{"ag":[],"r":[]},"avU":{"ag":[],"r":[]},"bu_":{"ah":["F3"]},"bu0":{"ah":["avU"]},"btZ":{"aB":[]},"arc":{"ag":[],"r":[]},"aDx":{"ah":["arc"]},"acA":{"au":[],"r":[]},"ar6":{"ag":[],"r":[]},"arb":{"ag":[],"r":[]},"bjo":{"ah":["ar6"]},"aDw":{"ah":["arb"]},"Nv":{"ag":[],"r":[]},"aDy":{"ah":["Nv"],"ex":[]},"b72":{"iZ":[],"fe":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aPM"),Q:w("qN"),n:w("bm<n,n>"),c5:w("aRJ"),dY:w("aRK"),d:w("eQ<n?>"),e:w("H4"),B:w("n5"),P:w("hV"),k:w("ky"),x:w("ay<~>"),f5:w("O<a2i>"),V:w("O<ac>"),t:w("O<qN>"),O:w("O<w>"),ac:w("O<eQ<n?>>"),I:w("O<n5>"),u:w("O<hV>"),_:w("O<ky>"),cl:w("O<ay<aj<a4<n,@>>>>"),R:w("O<n7>"),cq:w("O<aj<+(N,N)>>"),ez:w("O<a4<n,aC>>"),gE:w("O<a4<n,n>>"),c7:w("O<a4<n,@>>"),fD:w("O<mm>"),bp:w("O<o8>"),g:w("O<u>"),v:w("O<hn>"),L:w("O<+(n,n)>"),G:w("O<+(N,N)>"),bF:w("O<+count,id,name(H,n,n)>"),A:w("O<cP>"),s:w("O<n>"),aS:w("O<iO>"),p:w("O<r>"),C:w("O<fe>"),D:w("O<lf>"),fp:w("O<Jo>"),M:w("O<Jw>"),gZ:w("O<aFA>"),Y:w("O<adM>"),E:w("O<aHA>"),F:w("O<N>"),dC:w("O<H>"),dS:w("O<aB?>"),d4:w("O<n?>"),J:w("cr<ah<ag>>"),b:w("aj<n5>"),do:w("aj<hV>"),r:w("aj<ky>"),U:w("aj<a4<n,@>>"),gk:w("aj<+(n,n)>"),bC:w("aj<+count,id,name(H,n,n)>"),h:w("aj<n>"),c:w("aj<lf>"),j:w("aj<@>"),fK:w("bv<n,n>"),d2:w("bv<n,aj<a4<n,@>>>"),a:w("a4<n,@>"),f:w("a4<@,@>"),gv:w("K<n,H6>"),w:w("iz"),g2:w("r6"),bV:w("an7"),fL:w("cp"),K:w("aC"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(N,aj<hV>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),e7:w("bo<N>"),gc:w("dD"),b4:w("cx<H>"),W:w("kb<n>"),l:w("r"),cM:w("fe"),i:w("lf"),cc:w("Ff"),bw:w("acd<n?>"),cy:w("Jy"),q:w("mV"),y:w("R"),gR:w("N"),z:w("@"),S:w("H"),eK:w("aj<ky>?"),m:w("aoh?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),X:w("+qrPayload,token,usesRemaining(n,n,H)?"),gF:w("+members,trees,viewOnly(H,H,R)?"),Z:w("pL?"),T:w("n?"),aD:w("dD?"),o:w("lf?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aWi=new A.bq(B.he,B.bE,B.he,B.bE)
D.a9l=new A.bq(B.he,B.k2,B.he,B.k2)
D.aWu=new A.bq(B.ii,B.bE,B.bE,B.bE)
D.aWy=new A.aA(B.cZ,1.4,B.q,-1)
D.aWI=new A.aA(B.ad,1,B.q,-1)
D.aY7=new A.aY(0,1/0,64,1/0)
D.aYb=new A.aY(0,84,0,1/0)
D.awI=w([B.lD,B.qI,B.c],x.O)
D.bSN=new A.a8(B.ax,B.aC,B.x,D.awI,null,null)
D.aYW=new A.o(null,null,null,null,null,D.bSN,B.n)
D.cXa=w([B.aV,B.bU],x.O)
D.bUT=new A.a8(B.b0,B.b5,B.x,D.cXa,null,null)
D.aZf=new A.o(null,null,null,null,null,D.bUT,B.n)
D.b4q=new A.fi(null,null,null,null,null,E.jM,null,null,null,null)
D.aaE=new A.cq(B.A,null,null,D.b4q,null)
D.kb=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eWN=new A.G(!0,D.kb,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feE=new A.x("No books on the shelf yet.",null,D.eWN,null,null,null,null,null,null,null,null,null)
D.e3E=new A.C(B.nR,D.feE,null)
D.b2V=new A.cq(B.A,null,null,D.e3E,null)
D.b3O=new A.cq(B.A,null,null,Z.V7,null)
D.b5P=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b6h=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.abR=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b8U=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b9b=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.ad9=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bcX=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bdm=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.Eo=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.beX=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bhi=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.aeN=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.f9i=new A.x("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bmB=new A.eQ(null,D.f9i,B.f1,null,x.d)
D.fhP=new A.x("None",null,null,null,null,null,null,null,null,null,null,null)
D.bmD=new A.eQ(null,D.fhP,B.f1,null,x.d)
D.bna=new A.b9(38e5)
D.bnV=new A.i9(0,10,0,10)
D.bo4=new A.Q(0,1,0,0)
D.boe=new A.i9(0,4,0,4)
D.bow=new A.Q(10,10,14,10)
D.boI=new A.i9(10,4,10,4)
D.boQ=new A.i9(10,8,10,8)
D.boR=new A.Q(10,8,8,8)
D.bpg=new A.Q(12,6,12,2)
D.bpy=new A.Q(14,10,6,6)
D.bpz=new A.Q(14,12,14,0)
D.bpD=new A.Q(14,12,14,8)
D.bpG=new A.Q(14,12,8,14)
D.bpK=new A.i9(14,14,14,14)
D.bqo=new A.Q(16,2,16,10)
D.bqy=new A.Q(16,6,16,30)
D.bqA=new A.Q(16,6,16,8)
D.ah6=new A.Q(18,16,18,8)
D.bra=new A.Q(18,20,18,22)
D.aha=new A.Q(18,24,18,24)
D.brg=new A.Q(18,30,18,30)
D.bry=new A.Q(20,10,12,20)
D.brM=new A.Q(20,18,16,18)
D.brO=new A.Q(20,18,20,6)
D.bsC=new A.Q(24,32,24,28)
D.bsD=new A.Q(24,36,24,32)
D.bsH=new A.Q(26,26,24,14)
D.bsV=new A.Q(2,4,2,8)
D.bsZ=new A.Q(30,0,30,0)
D.bt9=new A.Q(38,22,22,22)
D.ahs=new A.Q(40,24,24,24)
D.btb=new A.i9(40,40,40,40)
D.btd=new A.Q(46,30,30,30)
D.ahv=new A.Q(4,0,0,8)
D.btF=new A.Q(56,40,40,40)
D.btJ=new A.Q(1.25,1.25,1.25,1.25)
D.btK=new A.Q(60,0,60,0)
D.btN=new A.Q(6,14,6,16)
D.btZ=new A.i9(7,3,7,3)
D.buu=new A.Q(5,1.5,5,1.5)
D.buF=new A.Q(6,2.5,6,2.5)
D.fty=new A.x("Signature",null,B.np,null,null,null,null,null,null,null,null,null)
D.bv_=new A.bD(1,B.bi,D.fty,null)
D.fqL=new A.x("Tell the AI what to fix",null,B.du,null,null,null,null,null,null,null,null,null)
D.bvK=new A.bD(1,B.bi,D.fqL,null)
D.f30=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsG=new A.x("Worksheets",null,D.f30,null,null,null,null,null,null,null,null,null)
D.f38=new A.G(!0,E.abo,null,null,null,null,13,B.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frB=new A.x("Track your project spending",null,D.f38,null,null,null,null,null,null,null,null,null)
D.cPu=w([D.fsG,B.at,D.frB],x.p)
D.bk9=new A.fq(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cPu,null)
D.bvP=new A.bD(1,B.bi,D.bk9,null)
D.eZk=new A.G(!0,E.jM,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8w=new A.x("FAMILY LIBRARY",null,D.eZk,null,null,null,null,null,null,null,null,null)
D.bw5=new A.bD(1,B.bi,D.f8w,null)
D.M8=new C.H4("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.YX=new C.H5(0,"male")
D.ain=new C.H5(1,"female")
D.xA=new C.H5(2,"unknown")
D.tB=new C.ajC(0,"owner")
D.M9=new C.ajC(1,"editor")
D.ki=new C.ajC(2,"viewer")
D.aj9=new A.a0(61199,"MaterialIcons",!1)
D.bA0=new A.a0(61504,"MaterialIcons",!1)
D.bA1=new A.a0(61505,"MaterialIcons",!1)
D.bA3=new A.a0(61587,"MaterialIcons",!1)
D.bA9=new A.a0(61890,"MaterialIcons",!1)
D.bB2=new A.a0(63034,"MaterialIcons",!0)
D.bBS=new A.a0(63429,"MaterialIcons",!1)
D.alq=new A.a0(984520,"MaterialIcons",!1)
D.bAz=new A.a0(62776,"MaterialIcons",!1)
D.bEc=new A.ae(D.bAz,26,B.aZ,null,null,null)
D.bz_=new A.a0(57648,"MaterialIcons",!1)
D.bEu=new A.ae(D.bz_,14,B.c,null,null,null)
D.bEL=new A.ae(B.Fw,17,null,null,null,null)
D.bFg=new A.ae(E.ZQ,null,null,null,null,null)
D.bFj=new A.ae(B.jg,18,E.jM,null,null,null)
D.ZC=new A.a0(62044,"MaterialIcons",!1)
D.bFp=new A.ae(D.ZC,null,B.aV,null,null,null)
D.bGe=new A.ae(B.dW,16,null,null,null,null)
D.bGl=new A.ae(D.ZC,32,B.aV,null,null,null)
D.bGD=new A.ae(E.aja,18,B.cZ,null,null,null)
D.bHG=new A.ae(B.FG,22,B.ay,null,null,null)
D.bHS=new A.ae(B.dW,22,B.aZ,null,null,null)
D.bI2=new A.ae(Q.ZH,22,B.c,null,null,null)
D.bI7=new A.ae(B.tK,52,B.c,null,null,null)
D.bIh=new A.ae(B.FG,30,B.ay,null,null,null)
D.am2=new A.ae(B.tT,22,B.c,null,null,null)
D.bIJ=new A.ae(B.dW,17,null,null,null,null)
D.bJ1=new A.ae(B.vu,26,B.cZ,null,null,null)
D.bJL=new A.ae(B.a_1,16,null,null,null,null)
D.bKu=new A.ae(B.tK,24,B.c,null,null,null)
D.bKz=new A.ae(B.MB,20,B.re,null,null,null)
D.bKE=new A.ae(B.Fu,null,B.bU,null,null,null)
D.bKL=new A.ae(B.jg,18,B.c,null,null,null)
D.bLm=new A.ae(B.cA,22,B.ad,null,null,null)
D.bMb=new A.ae(B.e4,16,B.ad,null,null,null)
D.bMn=new A.ae(D.ZC,20,B.aV,null,null,null)
D.amt=new A.ae(B.hy,20,null,null,null,null)
D.bMS=new A.ae(B.cA,18,D.kb,null,null,null)
D.bN9=new A.ae(B.xW,28,B.c,null,null,null)
D.bNh=new A.ae(B.Mr,null,B.fY,null,null,null)
D.bNB=new A.ae(B.xW,24,B.c,null,null,null)
D.bO1=new A.ae(B.tK,null,B.aV,null,null,null)
D.bO2=new A.ae(B.jz,20,B.cZ,null,null,null)
D.bOm=new A.ae(B.Fw,16,null,null,null,null)
D.bPT=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ey,!0,null,null,null,null)
D.d3e=w([B.bt,B.aV,B.f7,B.aZ],x.O)
D.bRf=new A.a8(B.ax,B.aC,B.x,D.d3e,null,null)
D.bdT=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bjd=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cMt=w([D.bdT,D.bjd],x.O)
D.bRq=new A.a8(B.b0,B.b5,B.x,D.cMt,null,null)
D.cYT=w([B.eX,B.fu,B.f7],x.O)
D.bRu=new A.a8(B.ax,B.aC,B.x,D.cYT,null,null)
D.adK=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b6i=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cOn=w([D.adK,D.b6i],x.O)
D.bS2=new A.a8(B.b0,B.b5,B.x,D.cOn,null,null)
D.b9n=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.aw6=w([D.b9n,D.adK],x.O)
D.bSm=new A.a8(B.ax,B.aC,B.x,D.aw6,null,null)
D.acI=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.bbr=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cY4=w([D.acI,D.bbr],x.O)
D.bSY=new A.a8(B.a3,B.a7,B.x,D.cY4,null,null)
D.d9f=w([B.bI,B.mS],x.O)
D.bT_=new A.a8(B.b0,B.b5,B.x,D.d9f,null,null)
D.bdP=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.da6=w([D.bdP,D.kb,D.kb,Aj.Wr],x.O)
D.dcg=w([0,0.07,0.9,1],x.F)
D.bTv=new A.a8(B.a3,B.a7,B.x,D.da6,D.dcg,null)
D.bTG=new A.a8(B.ax,B.aC,B.x,B.Q6,null,null)
D.d8R=w([B.aZ,B.aV,B.bU],x.O)
D.bUF=new A.a8(B.ax,B.aC,B.x,D.d8R,null,null)
D.cf5=w([B.bt,B.aZ,B.eX],x.O)
D.cfc=w([B.by,B.aE,B.jr],x.O)
D.cfe=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bct=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cli=w([D.bct,E.ads],x.O)
D.e_u=new A.u(1,2)
D.eIw=new A.cP(B.aX,D.e_u,3)
D.atf=w([D.eIw],x.A)
D.csw=w([B.h0,B.c9,B.f6],x.O)
D.cv9=w([B.bJ,B.bv,B.bm],x.O)
D.bwy=new C.u_("classic","Classic leather","Gold-edged brown leather",D.aw6,E.jM,E.jM,"\u2766",B.L,!0,!1,!1,!1)
D.b5D=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bi8=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cR3=w([D.b5D,D.bi8],x.O)
D.adv=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bwt=new C.u_("ornate","Ornate gold","Double gold border and flourishes",D.cR3,D.adv,D.adv,"\u2726",B.L,!0,!0,!0,!1)
D.b92=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bez=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cJv=w([D.b92,D.bez],x.O)
D.bws=new C.u_("parchment","Parchment","Old paper with dark ink",D.cJv,D.Eo,G.ir,"\u2767",B.L,!0,!1,!1,!0)
D.ab5=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bgC=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.d7g=w([D.ab5,D.bgC],x.O)
D.bc3=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bfZ=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bwv=new C.u_("minimal","Clean paper","Plain and elegant, like a printed book",D.d7g,D.bc3,D.bfZ,"",B.L,!0,!0,!1,!0)
D.bwx=new C.u_("midnight","Midnight","Deep blue with silver stars",L.awp,B.cp,B.bM,"\u2727",B.L,!0,!0,!1,!1)
D.bwr=new C.u_("emerald","Emerald library","Green cloth, title on the left",A_.atE,E.jM,B.h1,"\u25c6",B.bg,!0,!1,!1,!1)
D.bh_=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.d5I=w([B.er,D.bh_],x.O)
D.bd5=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.beb=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bww=new C.u_("rose","Rose vintage","Burgundy with rose-gold lettering",D.d5I,D.bd5,D.beb,"\u2740",B.L,!0,!1,!0,!1)
D.d9K=w([B.cC,P.mU],x.O)
D.bwu=new C.u_("modern","Modern","Dark, bold, left-aligned",D.d9K,B.aT,B.c,"",B.bg,!1,!0,!1,!1)
D.a0X=w([D.bwy,D.bwt,D.bws,D.bwv,D.bwx,D.bwr,D.bww,D.bwu],A.ax("O<u_>"))
D.cJ1=w([B.bU,B.bj],x.O)
D.bdF=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cJH=w([D.ab5,D.bdF],x.O)
D.b8Z=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cLe=w([D.b8Z,B.db],x.O)
D.cMH=w([B.b7,B.iL,B.ok],x.O)
D.cN3=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b6e=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.baN=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.dcc=w([D.acI,D.b6e,D.baN],x.O)
D.bwz=new C.u0("leather","Leather",D.dcc,"vintage")
D.cTZ=w([B.dq,B.Ks,A3.VD],x.O)
D.bwG=new C.u0("midnight","Midnight",D.cTZ,"starry")
D.cMI=w([B.fm,B.e9,B.l3],x.O)
D.bwF=new C.u0("forest","Forest",D.cMI,"story")
D.de2=w([B.eM,B.er,B.kc],x.O)
D.bwC=new C.u0("burgundy","Burgundy",D.de2,"royal")
D.cuK=w([B.aE,B.pk,B.ny],x.O)
D.bwD=new C.u0("royal","Royal",D.cuK,"royal")
D.cP_=w([B.bv,B.cC,P.mU],x.O)
D.bwA=new C.u0("charcoal","Charcoal",D.cP_,"geo")
D.dck=w([B.cb,B.dO,B.wU],x.O)
D.bwE=new C.u0("sunset","Sunset",D.dck,"sunset")
D.dcY=w([B.iL,B.Ep,B.VH],x.O)
D.bwB=new C.u0("ocean","Ocean",D.dcY,"band")
D.ys=w([D.bwz,D.bwG,D.bwF,D.bwC,D.bwD,D.bwA,D.bwE,D.bwB],A.ax("O<u0>"))
D.cPn=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cPV=w([B.ak,B.aK,B.M],x.O)
D.cR8=w([B.er,B.e9,B.dq,B.fv,B.wX,B.cZ,B.jP,B.eu,B.d9],x.O)
D.cR9=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eIx=new A.cP(B.dn,B.dD,8)
D.cRi=w([D.eIx],x.A)
D.cSl=w([B.bV,B.dO,B.kF],x.O)
D.cSN=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cTV=w([B.bV,B.hg],x.O)
D.cVQ=w([B.aM,B.Ah,B.wM],x.O)
D.cWH=w([B.bK,B.cj,B.dy,B.aM],x.O)
D.cXb=w([B.j4,B.cb,B.t4],x.O)
D.cXE=w([B.eX,B.cZ],x.O)
D.cY9=w([B.ct,B.fC,B.hu],x.O)
D.cYk=w([B.aT,B.bj,B.dq],x.O)
D.cYQ=w([B.es,B.d_,B.e9],x.O)
D.cZ6=w([B.dS,B.dq,B.Ks],x.O)
D.d_l=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a1R=w(["leather","linen","plain","stars","rays"],x.s)
D.bDT=new A.a0(985219,"MaterialIcons",!1)
D.bDr=new A.a0(983781,"MaterialIcons",!1)
D.avR=w([B.ajz,B.hZ,B.lK,B.i_,D.bDT,B.FQ,B.pH,D.bDr,L.ald,B.xY,B.pJ,B.mk],A.ax("O<a0>"))
D.a1W=w(["double","single","corners","none"],x.s)
D.d1Z=w([B.dz,B.bn,B.eu],x.O)
D.d2b=w([],x.t)
D.BS=w([],x.u)
D.d4n=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.d6B=w([B.aH,B.fC,B.fv],x.O)
D.d7R=w([B.cn,B.om,B.WB],x.O)
D.d83=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dqB=new C.lv("construction","Construction","Jobsite & builds",B.xN)
D.dqI=new C.lv("house","Home Build","Houses & rooms",B.vp)
D.dqy=new C.lv("grocery","Grocery","Store & pantry",B.a_y)
D.dqx=new C.lv("calculator","Calculations","Math & estimates",B.MM)
D.dqG=new C.lv("lumber","Materials","Lumber & supplies",B.N2)
D.dqu=new C.lv("kitchen","Kitchen","Remodel & meals",A9.akn)
D.bDo=new A.a0(983756,"MaterialIcons",!1)
D.dqz=new C.lv("landscape","Landscaping","Yard & garden",D.bDo)
D.dqt=new C.lv("plumbing","Plumbing","Pipes & water",B.pS)
D.dqJ=new C.lv("electrical","Electrical","Wiring & power",B.h8)
D.dqr=new C.lv("store","Retail Shop","Daily business",B.kM)
D.dqs=new C.lv("paint_remodel","Paint & Remodel","Colors & walls",Aa.a_7)
D.bCO=new A.a0(983311,"MaterialIcons",!1)
D.dqF=new C.lv("roofing","Roofing","Roofs & exteriors",D.bCO)
D.bDB=new A.a0(983986,"MaterialIcons",!1)
D.dqq=new C.lv("warehouse","Warehouse","Storage & stock",D.bDB)
D.dqD=new C.lv("vehicles","Vehicles","Fleet & transport",B.FR)
D.bAB=new A.a0(62785,"MaterialIcons",!1)
D.dqw=new C.lv("farm","Farm","Crops & livestock",D.bAB)
D.dqv=new C.lv("restaurant","Restaurant","Food & catering",B.tR)
D.dqC=new C.lv("tools","Tools","Workshop gear",B.FN)
D.dqH=new C.lv("wallet","Cash & Wallet","Quick spending",B.jz)
D.bBN=new A.a0(63395,"MaterialIcons",!1)
D.dqE=new C.lv("concrete","Concrete","Foundation work",D.bBN)
D.dqA=new C.lv("blueprint","Blueprint","Plans & design",Af.ajF)
D.a2m=w([D.dqB,D.dqI,D.dqy,D.dqx,D.dqG,D.dqu,D.dqz,D.dqt,D.dqJ,D.dqr,D.dqs,D.dqF,D.dqq,D.dqD,D.dqw,D.dqv,D.dqC,D.dqH,D.dqE,D.dqA],A.ax("O<lv>"))
D.d8y=w([B.bq,B.bn],x.O)
D.d9g=w([B.i5,B.nC,B.dF],x.O)
D.a2u=w(["top","middle","bottom"],x.s)
D.dbB=w([B.cs,B.bj,B.dq],x.O)
D.dc7=w([B.b8,B.d_,B.e9],x.O)
D.ddY=w([B.bJ,B.ak],x.O)
D.ddZ=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dY8={top:0,middle:1,bottom:2}
D.dh9=new A.bm(D.dY8,["Top","Middle","Bottom"],x.n)
D.dXN={double:0,single:1,corners:2,none:3}
D.dhe=new A.bm(D.dXN,["Double line","One line","Corners","None"],x.n)
D.dYV={leather:0,linen:1,plain:2,stars:3,rays:4}
D.diC=new A.bm(D.dYV,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.diP=new A.bm(B.ie,[],A.ax("bm<H,+(n,n)>"))
D.dY0={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.C2=new A.bm(D.dY0,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bm<n,H>"))
D.dla=new F.Mo(32,null)
D.dlb=new F.Mo(40,null)
D.dlc=new F.Mo(46,null)
D.aF0=new C.arb(null)
D.e0r=new A.u(8,14)
D.ffg=new A.x("Write a new book",null,B.i3,null,B.L,null,null,null,null,null,null,null)
D.e37=new A.C(B.l7,D.ffg,null)
D.alE=new A.ae(B.hx,18,B.c,null,null,null)
D.f8R=new A.x("Add",null,B.mB,null,null,null,null,null,null,null,null,null)
D.cWW=w([D.alE,B.q8,D.f8R],x.p)
D.eGu=new A.cm(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cWW,null)
D.e3r=new A.C(B.nQ,D.eGu,null)
D.e3s=new A.C(E.afW,Z.V7,null)
D.f2W=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbQ=new A.x("New Project",null,D.f2W,null,null,null,null,null,null,null,null,null)
D.d_H=w([D.alE,B.ab,D.fbQ],x.p)
D.eGx=new A.cm(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d_H,null)
D.e3D=new A.C(B.ix,D.eGx,null)
D.fe5=new A.x("Choose your header",null,U.rz,null,null,null,null,null,null,null,null,null)
D.e3Y=new A.C(B.hJ,D.fe5,null)
D.b4F=new A.fi(2.2,null,null,null,null,B.cZ,null,null,null,null)
D.eLa=new A.a7(22,22,D.b4F,null)
D.b2R=new A.cq(B.A,null,null,D.eLa,null)
D.e42=new A.C(B.Xw,D.b2R,null)
D.bpT=new A.Q(14,2,14,6)
D.frk=new A.x("The top of your book. Tap a design to see it.",null,T.SP,null,null,null,null,null,null,null,null,null)
D.e43=new A.C(D.bpT,D.frk,null)
D.e5B=new A.iM(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.e5E=new A.iM(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aGf=new A.iM(1,0.9607843137254902,0.48627450980392156,0)
D.HR=new A.iM(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.yZ=new A.iM(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.e5K=new A.iM(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fML=new C.bfC(null)
D.bl2=new A.md(D.fML,null,B.au,null,null)
D.aJT=new A.cL(0,0,0,0,null,null,D.bl2,null)
D.esT=new A.y(-42,42)
D.eBf=new A.cH([0,0,1,1])
D.aLa=new A.aa(0,0,520,160)
D.aLn=new A.b7(B.rN,B.Y)
D.fqT=new A.x("Let the AI write it from your tree",null,B.kv,null,B.L,null,null,null,null,null,null,null)
D.bxc=new A.dn(1,B.ci,D.fqT,null)
D.cTU=w([E.a00,B.ab,D.bxc],x.p)
D.eGc=new A.cm(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cTU,null)
D.f8x=new A.x("Save member",null,B.cc,null,null,null,null,null,null,null,null,null)
D.d6S=w([D.amt,B.ab,D.f8x],x.p)
D.eGk=new A.cm(B.aO,B.bb,B.j,B.m,null,B.p,null,0,D.d6S,null)
D.bHX=new A.ae(B.hK,14,B.aZ,null,null,null)
D.eY0=new A.G(!0,B.aZ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcf=new A.x("Cashier",null,D.eY0,null,null,null,null,null,null,null,null,null)
D.d0c=w([D.bHX,B.bp,D.fcf],x.p)
D.eGm=new A.cm(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d0c,null)
D.f8y=new A.x("Transfer & settings",null,B.du,null,null,null,null,null,null,null,null,null)
D.bvB=new A.bD(1,B.bi,D.f8y,null)
D.cMc=w([D.am2,B.av,D.bvB],x.p)
D.eGn=new A.cm(B.aO,B.e,B.j,B.m,null,B.p,null,0,D.cMc,null)
D.eJU=new A.at(16,40)
D.eJZ=new A.at(22,64)
D.eK5=new A.at(280,88)
D.eKQ=new A.a7(30,null,null,null)
D.eM8=new A.hK(2,12,12,1.05,null)
D.fbW=new A.x("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eMR=new A.b1(D.fbW,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fca=new A.x("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aNc=new A.b1(D.fca,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fk4=new A.x("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eNk=new A.b1(D.fk4,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fu7=new A.x("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eNp=new A.b1(D.fu7,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fe3=new A.x("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eNw=new A.b1(D.fe3,null,null,null,null,null,null,null,null,null,null,null,null,B.fG,!1,null,null,null,B.r,null)
D.frx=new A.x("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aNg=new A.b1(D.frx,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.f97=new A.x("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eNW=new A.b1(D.f97,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fuN=new A.x("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eOF=new A.b1(D.fuN,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fpR=new A.x("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eP3=new A.b1(D.fpR,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fub=new A.x("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eP6=new A.b1(D.fub,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.flB=new A.x("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eP8=new A.b1(D.flB,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ffR=new A.x("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eP9=new A.b1(D.ffR,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ffS=new A.x("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eQ9=new A.b1(D.ffS,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fbY=new A.x("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eQr=new A.b1(D.fbY,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fdL=new A.x("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eQK=new A.b1(D.fdL,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fl6=new A.x("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eR_=new A.b1(D.fl6,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fgE=new A.x("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eR0=new A.b1(D.fgE,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.eU_=new A.G(!0,D.kb,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUp=new A.G(!0,D.kb,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV2=new A.rp(!0,B.rn,null,null,null,null,B.dr,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVj=new A.G(!0,D.kb,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVR=new A.G(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a6J=new A.rp(!0,B.Rs,null,null,null,null,B.dr,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWQ=new A.G(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXe=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYM=new A.G(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYQ=new A.G(!0,G.ir,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_4=new A.G(!0,B.M,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_M=new A.G(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0v=new A.G(!0,B.bU,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0z=new A.G(!0,B.bI,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0V=new A.G(!0,D.Eo,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f13=new A.G(!0,B.aZ,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f21=new A.G(!0,B.cZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2v=new A.G(!0,B.bU,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2U=new A.G(!0,B.aZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4k=new A.G(!0,B.ak,null,null,null,null,11.5,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4s=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPq=new A.G(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7c=new A.G(!0,B.ak,null,null,null,null,12,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f68=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6w=new A.G(!0,G.ir,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6D=new A.G(!0,G.ir,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7n=new A.x("Themes",null,B.oZ,null,null,null,null,null,null,null,null,null)
D.f8_=new A.x("Add Item",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eYv=new A.G(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8n=new A.x("Debt receipt",null,D.eYv,null,B.L,null,null,null,null,null,null,null)
D.aPl=new A.G(!0,B.ak,null,null,null,null,11,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8E=new A.x("Person who owes",null,D.aPl,null,null,null,null,null,null,null,null,null)
D.f9A=new A.x("Notes",null,B.a6Q,null,null,null,null,null,null,null,null,null)
D.fa_=new A.x("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.eXw=new A.G(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa3=new A.x("Share",null,D.eXw,null,null,null,null,null,null,null,null,null)
D.faY=new A.x("Move your family trees",null,D.aPq,null,null,null,null,null,null,null,null,null)
D.fby=new A.x("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fc9=new A.x("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fdl=new A.x("Remove this book?",null,B.ho,null,null,null,null,null,null,null,null,null)
D.aPQ=new A.x("Download",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fer=new A.x("What should the AI do?",null,B.du,null,null,null,null,null,null,null,null,null)
D.ffN=new A.x("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fgT=new A.x("Ribbon bookmark",null,B.iG,null,null,null,null,null,null,null,null,null)
D.f4e=new A.G(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhm=new A.x("NGMY.ORG",null,D.f4e,null,B.L,null,null,null,null,null,null,null)
D.fiB=new A.x("Scan family tree QR",null,B.cx,null,null,null,null,null,null,null,null,null)
D.f0N=new A.G(!0,B.c,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjk=new A.x("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.f0N,null,B.L,null,null,null,null,null,null,null)
D.fkw=new A.x("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fkD=new A.x("Thumbnail",null,B.oZ,null,null,null,null,null,null,null,null,null)
D.flc=new A.x("Save the cover",null,B.cx,null,null,null,null,null,null,null,null,null)
D.flC=new A.x("Your photos",null,B.oZ,null,null,null,null,null,null,null,null,null)
D.flR=new A.x("Create Project",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fmk=new A.x("Design your cover",null,U.rz,null,null,null,null,null,null,null,null,null)
D.fmr=new A.x("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fmu=new A.x("PICTURE",null,H.mC,null,null,null,null,null,null,null,null,null)
D.fmQ=new A.x("Paid",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fmS=new A.x("You can undo it right after.",null,T.SY,null,null,null,null,null,null,null,null,null)
D.fnn=new A.x("Print",null,B.ut,null,null,null,null,null,null,null,null,null)
D.fnJ=new A.x("Amount owed",null,D.aPl,null,null,null,null,null,null,null,null,null)
D.fnX=new A.x("Got it",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fox=new A.x("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.foA=new A.x("Add to budget",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fp1=new A.x("Debtor signature",null,B.a6Q,null,null,null,null,null,null,null,null,null)
D.fp9=new A.x("Change icon",null,E.aOE,null,null,null,null,null,null,null,null,null)
D.fqj=new A.x("Family tree QR",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fqJ=new A.x("Download",null,B.ut,null,null,null,null,null,null,null,null,null)
D.fqN=new A.x("Change",null,B.oZ,null,null,null,null,null,null,null,null,null)
D.frD=new A.x("Clear all",null,B.cc,null,null,null,null,null,null,null,null,null)
D.frG=new A.x("WHAT SHOULD IT CHANGE?",null,H.mC,null,null,null,null,null,null,null,null,null)
D.fsf=new A.x("COLOUR",null,H.mC,null,null,null,null,null,null,null,null,null)
D.fsr=new A.x("Do it",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fsu=new A.x("Create Tree",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fts=new A.x("Create Family Tree",null,B.eV,null,null,null,null,null,null,null,null,null)
D.eSY=new A.G(!0,E.jM,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftI=new A.x("Write the first page myself",null,D.eSY,null,null,null,null,null,null,null,null,null)
D.fue=new A.x("Use this header",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fuk=new A.x("Create Project",null,E.aP4,null,null,null,null,null,null,null,null,null)
D.fJn=new C.aaz(1,"header")
D.a80=new C.aaz(2,"projects")
D.fJo=new C.aaz(3,"cashier")
D.a81=new C.aaz(4,"familyTree")
D.fUG=new C.cuO(0,"start")
D.fUH=new C.cuP(0,"start")
D.fJF=new C.XN(null)
D.fKE=new C.Ye(null)
D.diM=new A.bm(B.ie,[],A.ax("bm<n,Ff>"))
D.d2y=w([],x.E)
D.d2z=w([],x.M)
D.fLa=new C.bcT(D.diM,D.d2y,D.d2z,0,0,null,null)
D.fNp=new C.ZC(null)
D.a8J=new C.aIh(0,"projects")
D.aTX=new C.aIh(1,"cashier")
D.fSD=new C.aIh(2,"familyTree")})()};
(a=>{a["wyGIFkQQQUDXxgu2KFJpMlUITCQ="]=a.current})($__dart_deferred_initializers__);