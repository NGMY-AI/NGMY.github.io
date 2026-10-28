((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,N,S,A2,G,F,E,O,A3,A4,A5,T,U,A6,A7,M,A8,H,A9,Aa,V,W,X,Ab,Ac,Y,Ad,Ae,Z,Af,Ag,Ah,K,Ai,A_,A0,P,Aj,L,Q,C={
bBo(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bBo=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.v5(null,""),$async$bBo)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.V(y.j)
t=A.n_(b1)
s=A.c1(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dn(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.dp(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.L)(h),++d){a0=h[d]
f.push(A.F(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.R.ao(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qF(t,a1,B.hl,E.ER),$async$bBo)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.PQ(a5)
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a1B(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBo,v)},
afY(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$afY=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.v5(null,""),$async$afY)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.V(y.j)
t=A.n_(b6)
s=x.S
r=A.dc(c1,0,A.dJ(4,"count",s),A.U(c1).c)
q=F.a1o(new A.K(r,new C.fuz(),r.$ti.k("K<ak.E,n>")).aI(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fuy(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.R.ao(b7,null)+"\nAllowed values: style one of "+B.d.aI(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$afY)
case 6:l=c5
k=F.PQ(l==null?"":l)
if(k==null)throw A.V("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.an7(s,D.diu,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
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
a4=B.d.dn(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.L)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.F(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.R.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$afY)
case 10:l=c5
k=l==null?null:F.PQ(l)
if(k==null)throw A.V(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d8(a8,d),a5=J.aV(a2.a),a2=a2.$ti,a7=new A.kV(a5,a2.k("kV<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gU(a5))
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
p=A.cD(new A.bc(h,s),new C.fuA(),s.k("J.E"),p)
p=F.a1o(A.p4(p,3,A.a3(p).k("J.E")).aI(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("ct<1>")
b4=A.B(new A.ct(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a1B(s,b9),$async$afY)
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
return A.i($async$afY,v)},
hiD(d,e,f){return A.ca(null,B.w.j(0.65),!1,null,new C.fDF(e,f),d,null,!0,!0,x.g2)},
an7:function an7(d,e,f){this.a=d
this.b=e
this.c=f},
fuz:function fuz(){},
fuy:function fuy(d){this.a=d},
fuA:function fuA(){},
fDF:function fDF(d,e){this.a=d
this.b=e},
bzc(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bzc=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b7(b1,new C.fjP())){u=null
w=1
break}t=B.d.d9(b1,new C.fjQ())
s=$.X()
r=new A.rU()
q=A.GE(r,D.aL6)
p=A.M()
p.r=B.c.gp(0)
q.aY(D.aL6,p)
o=A.M()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bO
o.e=B.fz
n=new C.fjV(t)
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
a3.e=null}}q.aP(a3,o)}else{p=A.a([],x.v)
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
a3.e=null}}q.aP(a3,o)}w=4
return A.b(r.qh().z0(520,160),$async$bzc)
case 4:w=3
return A.b(b3.hj(B.fW),$async$bzc)
case 3:b0=b3
u=b0==null?null:J.fb(B.dz.gaO(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzc,v)},
fsf(d){return C.hWV(d)},
hWV(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fsf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.ber()
n=d.x!=null&&d.yH(null).length===0
if(d.x!=null)t=n?D.yZ:D.HR
else t=d.gT3()?D.HR:D.aGb
w=3
return A.b(C.bzc(d.ax),$async$fsf)
case 3:s=f
p.a=null
if(s!=null)p.a=A.alQ(s)
r=A.a3u(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aGb}else{p.c=C.wr(q,!0)
p.b=n?D.yZ:D.HR}r.a2f(A.fNH(new C.fsh(p,d,new C.fsi(),t,n,o),null,D.bsX,B.vV))
u=r.jW(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fsf,v)},
fyT(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fyT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fsf(d),$async$fyT)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aK(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A7.G7(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fyT,v)},
fjP:function fjP(){},
fjQ:function fjQ(){},
fjV:function fjV(d){this.a=d},
fsi:function fsi(){},
fsh:function fsh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fsg:function fsg(){},
fE6(d,e){var w=0,v=A.j(x.H)
var $async$fE6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,B.w.j(0.55),!0,null,new C.fEa(new A.cr(null,x.J),e),d,null,!0,!0,x.H),$async$fE6)
case 2:return A.h(null,v)}})
return A.i($async$fE6,v)},
bBS(d,e,f,g){return C.i3i(d,e,f,g)},
i3i(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bBS=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gal(e.split(",")):e
r=B.cE.aJ(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.R(D.eQe)
w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.fE2(g,r,f),d,null,!0,!0,x.H),$async$bBS)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bBS,v)},
fEb(d,e){var w=0,v=A.j(x.H)
var $async$fEb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,null,!0,null,new C.fEe(new A.cr(null,x.J),e),d,null,!0,!0,x.H),$async$fEb)
case 2:return A.h(null,v)}})
return A.i($async$fEb,v)},
aX9:function aX9(d,e){this.c=d
this.a=e},
c0b:function c0b(){},
b9b:function b9b(d,e){this.b=d
this.a=e},
fEa:function fEa(d,e){this.a=d
this.b=e},
fE7:function fE7(d){this.a=d},
fE8:function fE8(d,e,f){this.a=d
this.b=e
this.c=f},
fE9:function fE9(d,e){this.a=d
this.b=e},
fE2:function fE2(d,e,f){this.a=d
this.b=e
this.c=f},
fE0:function fE0(d){this.a=d},
fE1:function fE1(d,e,f){this.a=d
this.b=e
this.c=f},
fEe:function fEe(d,e){this.a=d
this.b=e},
fEc:function fEc(d){this.a=d},
fEd:function fEd(d,e,f){this.a=d
this.b=e
this.c=f},
fni(d,e){var w=0,v=A.j(x.y),u,t
var $async$fni=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a19(d),$async$fni)
case 3:t=g
J.nl(t,new C.fnj(e))
u=A.agB(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fni,v)},
fnj:function fnj(d){this.a=d},
ane:function ane(d,e,f){this.c=d
this.d=e
this.a=f},
aBs:function aBs(d){var _=this
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
heQ(d){return B.d.dL(D.a0Y,new C.fnO(d),new C.fnP())},
u0:function u0(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fnO:function fnO(d){this.a=d},
fnP:function fnP(){},
ajA:function ajA(d,e,f,g,h,i){var _=this
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
S3:function S3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcN:function bcN(){this.d=$
this.c=this.a=null},
d3z:function d3z(d,e){this.a=d
this.b=e},
d3x:function d3x(d,e){this.a=d
this.b=e},
d3y:function d3y(){},
d3A:function d3A(d,e){this.a=d
this.b=e},
h_H(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.n5(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
Kf(d,e){return C.hVy(d,e)},
hVy(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
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
break}o=J.d8(p,x.f)
o=A.cD(o,new C.fpR(),o.$ti.k("J.E"),x.B)
n=A.a3(o).k("a2<J.E>")
o=A.B(new A.a2(o,new C.fpS(),n),n.k("J.E"))
B.d.b_(o,new C.fpT())
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
r=J.b6(f,new C.fCL(),x.a)
r=A.B(r,r.$ti.k("ak.E"))
w=4
return A.b(t.ar("String","ngmy_family_book_v1_"+s+"_"+e,B.R.ao(r,null)),$async$As)
case 4:case 1:return A.h(u,v)}})
return A.i($async$As,v)},
aP8(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aP8=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Kf(d,e),$async$aP8)
case 2:u=h
t=J.cE(u)
s=t.ba(u,new C.fKP(f))
if(s===-1)t.ck(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.As(d,e,u),$async$aP8)
case 3:return A.h(null,v)}})
return A.i($async$aP8,v)},
bzF(d,e,f){var w=0,v=A.j(x.H),u
var $async$bzF=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Kf(d,e),$async$bzF)
case 2:u=h
J.nl(u,new C.fna(f))
w=3
return A.b(C.As(d,e,u),$async$bzF)
case 3:return A.h(null,v)}})
return A.i($async$bzF,v)},
bzU(d,e){return C.hVx(d,e)},
hVx(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bzU=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bzU)
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
if(D.C1.ah(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a2v,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.t(D.a1X,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.t(D.a1S,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.t(D.cP5,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
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
return A.i($async$bzU,v)},
QU(d,e,f){return C.i2P(d,e,f)},
i2P(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$QU=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$QU)
case 7:r=h
w=8
return A.b(r.ar("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.R.ao(f.ae(),null)),$async$QU)
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
return A.i($async$QU,v)},
Qo(d,e){return C.hVz(d,e)},
hVz(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Qo=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Qo)
case 7:r=g
q=r.rU("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Kf(d,e),$async$Qo)
case 8:if(!j.cy(g)){n=B.a.i(d.toLowerCase())
m=J.lm(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Qo)
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
return A.i($async$Qo,v)},
afg(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$afg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qo(d,e),$async$afg)
case 3:s=g
r=J.a5(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.L(s,t)
w=5
return A.b(A.az(),$async$afg)
case 5:w=4
return A.b(g.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$afg)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afg,v)},
a1O(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a1O=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Qo(d,e),$async$a1O)
case 2:s=h
J.hC(s,f)
w=3
return A.b(A.az(),$async$a1O)
case 3:u=h
w=4
return A.b(u.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a1O)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1O)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1O)
case 6:return A.h(null,v)}})
return A.i($async$a1O,v)},
n5:function n5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fpR:function fpR(){},
fpS:function fpS(){},
fpT:function fpT(){},
fCL:function fCL(){},
fKP:function fKP(d){this.a=d},
fna:function fna(d){this.a=d},
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
bM3:function bM3(d){this.a=d},
i37(d,e,f,g,h,i,j){return A.a6(d,!1).c6(A.e7(new C.fDj(j,i,f,e,h,g),!0,null,x.H))},
Qk(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Qk=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qo(h,g),$async$Qk)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.I(x.q).f.R(D.aN8)
u=!1
w=1
break}w=4
return A.b(C.hiD(d,f,e),$async$Qk)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.afg(h,g),$async$Qk)
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
return A.b(C.As(h,r,p),$async$Qk)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.QU(h,r,new C.H4("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Qk)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Qk,v)},
fDj:function fDj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
YC:function YC(d,e,f,g,h,i,j,k){var _=this
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
YG:function YG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bd7:function bd7(d){var _=this
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
YE:function YE(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
adL:function adL(d,e,f){this.a=d
this.b=e
this.c=f},
ayw:function ayw(d){var _=this
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
Jo:function Jo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XV:function XV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cDw:function cDw(d){this.a=d},
cDx:function cDx(){},
cDy:function cDy(d){this.a=d},
bao:function bao(d,e,f){this.b=d
this.c=e
this.a=f},
baf:function baf(d,e){this.b=d
this.a=e},
u1:function u1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Yc:function Yc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bam:function bam(){var _=this
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
aFv:function aFv(d){this.a=d},
bfB:function bfB(d){this.a=d},
b8A:function b8A(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hUw(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.agN(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.by(new A.S(Date.now(),0,!1))
s=new C.fnS(w,a4)
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
if(e!=null&&w.ah(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.B(new A.cQ(new A.a2(a4,new C.fnQ(u,f),p),new C.fnR(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aI(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aI(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hUx(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.agN(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fnX(v,e)
q=new C.fnV(v)
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
if(d!=null&&v.ah(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.ah(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("bc<2>")
d=A.da(new A.bc(p,d),d.k("J.E"))
n=A.B(d,A.a3(d).k("cn.E"))
B.d.fh(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.L)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gaf(e),k=new A.fk(l,new C.fnW(p,m));k.C();t=f){j=l.gU(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ah(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aI(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hGf(d,e,f,g){var w,v,u=C.hUy(d,e)
if(u<=0||f.length<=u)return new A.adl(!1,D.BR,f)
if(g.t(0,e.a))return new A.adl(!1,D.BR,f)
w=A.U(f).c
v=A.dc(f,0,A.dJ(u,"count",x.S),w).dF(0)
return new A.adl(!0,A.dc(f,u,null,w).dF(0),v)},
hGg(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.agN(d3),d2=d1.length
if(d2===0)return D.fKF
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
a9=new C.d4V(new C.d4R(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dt(v,v.r,v.e),j=a2.gajy(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.ew([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.L(0,i))break}if(h.$1(b0)&&a2.ah(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.r2(J.dH(i==null?B.T:i,j))
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
d2=b4.$ti.k("ct<1>")
d2=A.B(new A.ct(b4,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.Ff(o,new A.u(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Jw(c5.a,new A.u(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("ct<1>")
d2=A.B(new A.ct(b6,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bI(0,new C.d4J(c6,b4))
for(d2=new A.cJ(a4,a4.$ti.k("cJ<1,2>")).gaf(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gU(j)
if(b6.ah(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gaf(b5),i=new A.fk(j,new C.d4K(c8));i.C();)o.push(j.gU(0).b)
if(o.length===0)continue
B.d.b_(o,new C.d4L())
c6.push(new C.aHA(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bcS(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hen(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(d)
return w==null?null:w.b[1]},
h8J(d,e,f,g,h,i,j,k,l,m,n){return new C.Zf(k,f,j,e,l,n,m,d,g,h,i,null)},
aAt(d,e,f,g,h,i,j){return new C.bgx(i,d,e,f,j,h,g,null)},
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
bcQ:function bcQ(d,e,f,g,h,i,j){var _=this
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
fnS:function fnS(d,e){this.a=d
this.b=e},
fnT:function fnT(d){this.a=d},
fnU:function fnU(){},
fnQ:function fnQ(d,e){this.a=d
this.b=e},
fnR:function fnR(){},
fnX:function fnX(d,e){this.a=d
this.b=e},
fnY:function fnY(d){this.a=d},
fnZ:function fnZ(){},
fnV:function fnV(d){this.a=d},
fnW:function fnW(d,e){this.a=d
this.b=e},
Jw:function Jw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ff:function Ff(d,e){this.a=d
this.b=e},
bcS:function bcS(d,e,f,g,h,i,j){var _=this
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
aHA:function aHA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcT:function bcT(d,e){this.b=d
this.a=e},
d4Y:function d4Y(){},
d4Z:function d4Z(d){this.a=d},
d5_:function d5_(d){this.a=d},
d50:function d50(){},
bgy:function bgy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbX:function bbX(d,e){this.b=d
this.a=e},
bu8:function bu8(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
f6j:function f6j(d){this.a=d},
bjU:function bjU(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eIB:function eIB(d){this.a=d},
eIA:function eIA(d,e){this.a=d
this.b=e},
Zf:function Zf(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
acd:function acd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgx:function bgx(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
acc:function acc(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bgw:function bgw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dla:function dla(d){this.a=d},
dlb:function dlb(d,e){this.a=d
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
ace:function ace(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dlk:function dlk(d){this.a=d},
Jj:function Jj(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
h3C(d){var w=d.S,v=x.N
return w.iV(w,new C.c6J(),v,v)},
hxO(d){var w=d.bC
if(w>=0)return w
return 5},
h3E(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.h3C(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
h3D(d,e){var w=C.h3E(d,e)
if(w!=null&&w.cc(new A.S(Date.now(),0,!1)))return!0
return!1},
hxP(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.h3C(d),w,w)
u=C.h3E(d,e)
t=u!=null&&u.cc(new A.S(Date.now(),0,!1))?u:new A.S(Date.now(),0,!1)
v.n(0,s,t.bP(A.dC(30,0,0,0,0,0).a).a6().ac())
d.S=v},
aYz(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aYz=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lc(t,B.HE),$async$aYz)
case 3:if(l){u=!0
w=1
break}u=A.kP(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.HE,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYz,v)},
c6J:function c6J(){},
hxM(){var w,v=$.pi(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fW(u)},
I_(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$I_=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c2(),$async$I_)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f1("ngmy_family_tree_backup_codes_v1",null,!1,B.bG),$async$I_)
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
a6n(d){return C.hxN(d)},
hxN(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a6n=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c2(),$async$a6n)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hB("ngmy_family_tree_backup_codes_v1",A.F(["codes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cG,null),$async$a6n)
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
return A.i($async$a6n,v)},
c6I(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c6I=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.I_(),$async$c6I)
case 3:t=m.js(f),t=t.gaf(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gU(t)
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
return A.i($async$c6I,v)},
MU(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$MU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c6I(d),$async$MU)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.I_(),$async$MU)
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
return A.b(C.a6n(s),$async$MU)
case 9:case 8:u=t
w=1
break
case 5:n=C.hxM()
w=10
return A.b(C.I_(),$async$MU)
case 10:s=f
J.aF(s,n,A.F(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=11
return A.b(C.a6n(s),$async$MU)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$MU,v)},
aYy(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aYy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.I_(),$async$aYy)
case 3:t=f
for(s=J.dj(t),r=s.gdK(t),r=r.dF(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a6n(t),$async$aYy)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aYy,v)},
a6o(d,e,f){var w=0,v=A.j(x.H),u
var $async$a6o=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aoj(d,e),$async$a6o)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.MU(d),$async$a6o)
case 7:w=4
break
case 5:w=8
return A.b(C.aYy(d),$async$a6o)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a6o,v)},
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
return A.b(A.c2(),$async$aod)
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
aYx(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aYx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c2(),$async$aYx)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.I_(),$async$aYx)
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
return A.i($async$aYx,v)},
hxQ(){var w,v=$.pi(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fW(u)},
aog(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$aog=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c2(),$async$aog)
case 3:if(!g){u=null
w=1
break}t=C.hxQ()
w=4
return A.b(A.Um(),$async$aog)
case 4:s=g
r=B.dJ.aJ(B.R.ao(d.eK(),null))
r=B.cS.gcv().aJ(r)
q=e?999:2
J.aF(s,t,A.F(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(A.a6p(s),$async$aog)
case 5:p=e?999:2
u=new A.a_p("NGMYFTSYNC2|"+t,t,p)
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
return A.b(A.Um(),$async$aof)
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
return A.b(C.aYx(J.k(l==null?"":l),j),$async$aof)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.c4.ca(0,B.cE.aJ(t))
s=C.h3F(r)}catch(f){q=A.a9(f)
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
return A.b(A.a6p(p),$async$aof)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aof,v)},
h3F(d){var w,v,u,t,s=null
try{w=B.R.aG(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hxS(A.a1(w,x.N,x.z))
return u}catch(t){v=A.a9(t)
$.am.$1("[family tree sync] parse: "+A.t(v))
return s}},
fOK(d){var w=0,v=A.j(x.m),u,t,s
var $async$fOK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aof(t[1])
w=1
break}u=null
w=1
break}u=C.h3F(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fOK,v)},
hxS(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d8(v,x.f)
u=A.cD(u,new C.c6L(),u.$ti.k("J.E"),x.k)
t=A.a3(u).k("a2<J.E>")
s=A.B(new A.a2(u,new C.c6M(),t),t.k("J.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.T(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.js(p),t=t.gaf(t),o=x.B;t.C();){n=t.gU(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d8(l,u)
n=A.cD(n,new C.c6N(),n.$ti.k("J.E"),o)
k=A.a3(n).k("a2<J.E>")
j=A.B(new A.a2(n,new C.c6O(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aoh(h,w,s,r,q)},
aoj(d,e){var w=0,v=A.j(x.y),u,t
var $async$aoj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.ML(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Ah(d),$async$aoj)
case 3:u=t.cy(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoj,v)},
c6U(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c6U=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Ah(d),$async$c6U)
case 3:t=s.b6(f,new C.c6V(),x.cs)
t=A.B(t,t.$ti.k("ak.E"))
B.d.b_(t,new C.c6W())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6U,v)},
Un(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Un=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aoj(e,d),$async$Un)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.MU(e),$async$Un)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Ah(e),$async$Un)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.c6S(g))
r=A.B(t,t.$ti.k("J.E"))}t=J.a5(r)
if(t.gam(r)){u=null
w=1
break}t=t.dt(r,new C.c6T(e),x.k)
r=A.B(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Kf(e,o),$async$Un)
case 14:n=i
if(J.cy(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.aoh(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Un,v)},
aYC(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aYC=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Un(d,e,f,g),$async$aYC)
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
return A.i($async$aYC,v)},
aYB(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aYB=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Un(d,e,f,g),$async$aYB)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aog(r,f),$async$aYB)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aEE(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYB,v)},
Uo(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Uo=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fOK(a0),$async$Uo)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aod(g.a,d,e,f,s,r),$async$Uo)
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
return A.b(C.bzv(e,j),$async$Uo)
case 12:case 11:w=13
return A.b(C.agz(e,j,s),$async$Uo)
case 13:h=n.h(0,i)
w=h!=null&&J.cy(h)?14:15
break
case 14:w=16
return A.b(C.As(e,i,h),$async$Uo)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bnp(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Uo,v)},
aoh:function aoh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c6Q:function c6Q(){},
c6R:function c6R(){},
c6P:function c6P(){},
c6L:function c6L(){},
c6M:function c6M(){},
c6N:function c6N(){},
c6O:function c6O(){},
c6V:function c6V(){},
c6W:function c6W(){},
c6S:function c6S(d){this.a=d},
c6T:function c6T(d){this.a=d},
fWZ(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f6(null,x.H)
return A.hv(d,new C.aoi(w,e,g,i,f,h,null),!0,null,x.H)},
d4A(d,e,f,g,h,i,j,k){return new C.bcP(i,e,k,j,g,f,h,d,null)},
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
bcR:function bcR(d,e,f){this.d=d
this.e=e
this.a=f},
abv:function abv(d,e,f){this.c=d
this.d=e
this.a=f},
bcP:function bcP(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bcU:function bcU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ZA:function ZA(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aC0:function aC0(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dRq:function dRq(d,e){this.a=d
this.b=e},
dRr:function dRr(d){this.a=d},
dRs:function dRs(d){this.a=d},
dRt:function dRt(d){this.a=d},
dRu:function dRu(d){this.a=d},
ZB:function ZB(d){this.a=d},
bi0:function bi0(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dRI:function dRI(d,e){this.a=d
this.b=e},
aX8(d,e){return new C.aX7(d,e,null)},
aX7:function aX7(d,e,f){this.c=d
this.d=e
this.a=f},
hX_(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b0(d,11)},
i3h(d){return A.bX(B.K,null,new C.fDM(new C.ty(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
h5w(d,e){return new C.ard(e,d,null)},
aOP(d,e,f,g,h,i,j){var w=C.hX_(i)
if(w!=null)return A.bw(e,new A.a7(j,f,new C.a5q(w,!0,null),null),B.aq)
return I.aOa(e,B.bQ,f,g,h,i,j)},
lv:function lv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5q:function a5q(d,e,f){this.c=d
this.d=e
this.a=f},
bhH:function bhH(d,e){var _=this
_.e=_.d=$
_.cS$=d
_.b2$=e
_.c=_.a=null},
dCS:function dCS(d){this.a=d},
dCT:function dCT(){},
dCU:function dCU(d,e){this.a=d
this.b=e},
bhG:function bhG(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fDM:function fDM(d){this.a=d},
fDL:function fDL(d,e){this.a=d
this.b=e},
fDK:function fDK(d,e){this.a=d
this.b=e},
fDJ:function fDJ(d,e){this.a=d
this.b=e},
ard:function ard(d,e,f){this.c=d
this.d=e
this.a=f},
cen:function cen(d,e){this.a=d
this.b=e},
aJW:function aJW(){},
i32(d){var w=null
return A.ca(w,w,!0,w,new C.fD8(),d,w,!0,!0,x.e2)},
i4c(d,e,f,g,h){var w=null
return A.ca(w,w,!0,w,new C.fKB(h,g,f,e),d,w,!0,!0,x.N)},
i34(d,e){var w=null
return A.ca(w,w,!0,w,new C.fDd(e),d,w,!0,!0,x.dY)},
i33(d){var w=null
return A.ca(w,w,!0,w,new C.fDc(),d,w,!0,!0,x.c5)},
aRJ:function aRJ(d,e){this.a=d
this.b=e},
aRI:function aRI(d){this.a=d},
aPL:function aPL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fD8:function fD8(){},
fKB:function fKB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDd:function fDd(d){this.a=d},
fDc:function fDc(){},
Ye:function Ye(d,e){this.c=d
this.a=e},
axh:function axh(){var _=this
_.d=$
_.c=_.a=_.e=null},
cXK:function cXK(d){this.a=d},
cXL:function cXL(d){this.a=d},
cXJ:function cXJ(d,e){this.a=d
this.b=e},
cXM:function cXM(d){this.a=d},
cXN:function cXN(d){this.a=d},
Yd:function Yd(d){this.a=d},
axg:function axg(){this.d=$
this.c=this.a=null},
cXG:function cXG(d){this.a=d},
cXH:function cXH(d){this.a=d},
cXI:function cXI(d){this.a=d},
XM:function XM(d){this.a=d},
aw0:function aw0(){var _=this
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
a0i:function a0i(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bu0:function bu0(){this.d=$
this.c=this.a=null},
f5M:function f5M(d,e){this.a=d
this.b=e},
f5N:function f5N(d){this.a=d},
f5O:function f5O(d,e){this.a=d
this.b=e},
aay:function aay(d,e){this.a=d
this.b=e},
F3:function F3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
btZ:function btZ(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f5K:function f5K(d,e){this.a=d
this.b=e},
avU:function avU(d,e){this.c=d
this.a=e},
bu_:function bu_(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f5L:function f5L(d){this.a=d},
btY:function btY(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aM4:function aM4(){},
aM5:function aM5(){},
bBt(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bu(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oy(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fBU(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Xa(A.dr(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aOr(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aOr=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hW().l1(85,1280,B.eG),$async$aOr)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.ff(),$async$aOr)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.h5v()
w=9
return A.b(C.cem(q,r),$async$aOr)
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
return A.b($.X().FC(p,!0,null,i).cM(0,B.fG),$async$aON)
case 9:n=a1
w=10
return A.b(n.lT(),$async$aON)
case 10:m=a1
w=11
return A.b(J.KN(m).hj(B.fW),$async$aON)
case 11:l=a1
J.KN(m).q()
if(l==null){w=8
break}i=J.fb(B.dz.gaO(l))
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
fBU:function fBU(){},
ty:function ty(d){this.a=d},
arc:function arc(d,e,f){this.c=d
this.d=e
this.a=f},
aDx:function aDx(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eFL:function eFL(d,e){this.a=d
this.b=e},
eFC:function eFC(d){this.a=d},
eFD:function eFD(d){this.a=d},
eFJ:function eFJ(d,e){this.a=d
this.b=e},
eFI:function eFI(d,e){this.a=d
this.b=e},
eFF:function eFF(d,e){this.a=d
this.b=e},
eFE:function eFE(d,e){this.a=d
this.b=e},
eFG:function eFG(d){this.a=d},
eFH:function eFH(d,e){this.a=d
this.b=e},
eFK:function eFK(d,e){this.a=d
this.b=e},
eFx:function eFx(d,e){this.a=d
this.b=e},
eFB:function eFB(d){this.a=d},
eFA:function eFA(d,e){this.a=d
this.b=e},
eFz:function eFz(d){this.a=d},
eFM:function eFM(d,e){this.a=d
this.b=e},
eFN:function eFN(d,e){this.a=d
this.b=e},
eFy:function eFy(d,e){this.a=d
this.b=e},
hi9(d,e,f){var w="thumbnailPath",v=e.ae()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.F(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a6().ac(),"project",v],x.N,x.z)},
fBV(d,e,f){var w=0,v=A.j(x.N),u
var $async$fBV=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.R.ao(C.hi9(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fBV,v)},
bBv(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bBv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fBV(!0,d,e),$async$bBv)
case 4:w=3
return A.b(r.ara(g,d,e.a),$async$bBv)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dJ.aJ(B.R.ao(C.hi9(d,e,null),null))
u="NGMY_WS:"+B.k7.gcv().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBv,v)},
ha4(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fWF(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.cZ(s,"NGMYWSSYNC2|"))return!0
if(J.cZ(s,"NGMY_WS:"))return!0
if(J.eZ(s,t))return!0
if(J.cZ(s,"{"))try{w=B.R.aG(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
i12(d){var w,v,u,t=C.ha4(d)
if(t==null)return null
if(C.fWF(t))return t
w=B.a.cJ(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b0(t,w))
if(C.fWF(v))return v}u=B.a.cJ(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b0(t,u))
if(C.fWF(v))return v}return null},
fWE(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.cZ(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.cZ(q,"NGMY_WS:")){v=B.c4.ca(0,B.cE.aJ(J.mA(q,8)))
w=t.a(B.R.aG(0,v,r))}else w=t.a(B.R.aG(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fRi(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bBu(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bBu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.ar9(t[1]),$async$bBu)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fWE(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fWE(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBu,v)},
fWD(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lf(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bB0(){var w=0,v=A.j(x.o),u,t
var $async$bB0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.G8(),$async$bB0)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fWE(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bB0,v)},
hj0(d,e,f,g){return A.bX(B.K,null,new C.fKt(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fKt:function fKt(d,e,f){this.a=d
this.b=e
this.c=f},
acz:function acz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eFP:function eFP(d,e){this.a=d
this.b=e},
eFQ:function eFQ(d,e){this.a=d
this.b=e},
eFR:function eFR(d,e){this.a=d
this.b=e},
eFS:function eFS(d,e){this.a=d
this.b=e},
eFO:function eFO(d){this.a=d},
ar6:function ar6(d,e,f){this.c=d
this.d=e
this.a=f},
bjn:function bjn(){var _=this
_.c=_.a=_.e=_.d=null},
eFs:function eFs(d,e){this.a=d
this.b=e},
eFt:function eFt(d){this.a=d},
eFu:function eFu(d){this.a=d},
arb:function arb(d){this.a=d},
aDw:function aDw(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eFw:function eFw(d){this.a=d},
eFv:function eFv(d){this.a=d},
hB4(d,e,f,g,h){return new C.Nw(h,g,d,e,f,null)},
aIh:function aIh(d,e){this.a=d
this.b=e},
Nw:function Nw(d,e,f,g,h,i){var _=this
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
eGe:function eGe(){},
eGa:function eGa(d,e){this.a=d
this.b=e},
eGb:function eGb(d){this.a=d},
eFW:function eFW(d){this.a=d},
eFU:function eFU(d){this.a=d},
eFV:function eFV(d){this.a=d},
eG4:function eG4(d,e){this.a=d
this.b=e},
eG1:function eG1(d,e){this.a=d
this.b=e},
eG2:function eG2(d,e){this.a=d
this.b=e},
eG3:function eG3(d,e,f){this.a=d
this.b=e
this.c=f},
eG_:function eG_(d,e,f){this.a=d
this.b=e
this.c=f},
eFY:function eFY(d){this.a=d},
eFZ:function eFZ(d){this.a=d},
eG0:function eG0(d){this.a=d},
eGh:function eGh(d){this.a=d},
eGg:function eGg(d){this.a=d},
eGi:function eGi(d){this.a=d},
eGf:function eGf(d){this.a=d},
eFT:function eFT(d){this.a=d},
eFX:function eFX(d,e){this.a=d
this.b=e},
eGd:function eGd(d,e){this.a=d
this.b=e},
eGc:function eGc(d,e){this.a=d
this.b=e},
eG7:function eG7(d){this.a=d},
eG8:function eG8(d){this.a=d},
eG9:function eG9(d,e){this.a=d
this.b=e},
eG6:function eG6(d,e){this.a=d
this.b=e},
eG5:function eG5(d,e,f){this.a=d
this.b=e
this.c=f},
bvM:function bvM(){},
A8(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aK(v,w,"_")},
af_(d,e,f){return C.hQC(d,e,f)},
hQC(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$af_=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.ar("String",e,f),$async$af_)
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
return A.i($async$af_,v)},
aeZ(d,e){return C.hQB(d,e)},
hQB(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aeZ=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$aeZ)
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
return A.i($async$aeZ,v)},
hPn(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.S5(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
byv(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$byv=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b0O(q),$async$byv)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aON(q,!1),$async$byv)
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
return A.i($async$byv,v)},
hoS(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
fRi(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d8(s,x.f)
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
hUs(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.YX
case"female":case"f":return D.aik
default:return D.xA}},
heR(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h_I(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hUs(v==null?j:J.k(v))
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
hUu(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.M9
case"viewer":return D.ki
default:return D.tB}},
hUv(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
FZ(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bzM(d,e){return B.a.i(e.toLowerCase())===C.FZ(d,e)&&d.y!==D.ki},
tJ(d,e){var w,v=d.y
if(v===D.ki)return!1
w=B.a.i(e.toLowerCase())
if(w===C.FZ(d,e))return!0
if(v===D.M9)return!0
v=d.e
return new A.K(v,A.fWJ(),A.U(v).k("K<1,n>")).t(0,w)},
hTV(d){return J.dH(d,new C.fn2()).gM(0)},
fKW(d){var w=0,v=A.j(x.y),u,t
var $async$fKW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Ah(d),$async$fKW)
case 3:u=t.qJ(f,new C.fKX(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fKW,v)},
bzv(d,e){var w=0,v=A.j(x.H),u,t
var $async$bzv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ah(d),$async$bzv)
case 3:t=g
if(J.qJ(t,new C.flz(e))){w=1
break}if(C.hTV(t)>=2)throw A.V(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bzv,v)},
ajC(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d8(n,x.f)
w=A.cD(w,new C.bM4(),w.$ti.k("J.E"),x.P)
v=A.a3(w).k("a2<J.E>")
m=A.B(new A.a2(w,new C.bM5(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bM6(),x.N)
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
return new C.ky(l,w,v,!s,t,m,r,q,p,C.hUu(o==null?null:J.k(o)))},
hf_(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
Cs(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$Cs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.QS(d),$async$Cs)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$Cs)
case 4:t=f
w=5
return A.b(t.a5e(0),$async$Cs)
case 5:w=6
return A.b(C.fdk(t,l),$async$Cs)
case 6:s=f
if(J.cy(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a5(q)
o=A.aT(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.haE(o)
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
case 12:n=C.haE(m)
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
fdk(d,e){return C.hMS(d,e)},
hMS(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fdk=A.e(function(b0,b1){if(b0===1){s.push(b1)
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
break}o=f.gU(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aT(a4.h(a3,"ngmy_worksheet_item_v3_"+C.A8(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.R.aG(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fRi(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aT(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.A8(a9)+"_"+n))
i=C.hPn(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b0O(h),$async$fdk)
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
case 8:J.R1(q,new C.fdl())
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
return A.i($async$fdk,v)},
bzX(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bzX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.QS(d),$async$bzX)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Cs(r),$async$bzX)
case 4:t=p.aV(g)
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
return A.i($async$bzX,v)},
haE(d){var w,v,u,t
try{w=B.R.aG(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d8(w,x.f)
v=A.cD(v,new C.f91(),v.$ti.k("J.E"),x.i)
u=A.a3(v).k("a2<J.E>")
v=A.B(new A.a2(v,new C.f92(),u),u.k("J.E"))
B.d.b_(v,new C.f93())
return v}catch(t){v=A.a([],x.D)
return v}},
ox(d,e){return C.i2T(d,e)},
i2T(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$ox=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.QS(b2),$async$ox)
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
o=J.b6(x.j.a(B.R.aG(0,p,null)),new C.fD_(),a2).fI(0)
a2=J.b6(b3,new C.fD0(),a2).c_(0,new C.fD1())
n=A.da(a2,a2.$ti.k("J.E"))
a2=o,a2=A.ec(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eZ(n,m)?17:18
break
case 17:a5=C.A8(a8)
l=A.aT(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a7F(l),$async$ox)
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
return A.b(C.a7F(a5==null?null:J.k(a5)),$async$ox)
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
return A.b(C.aeZ(r,"ngmy_worksheet_item_v3_"+C.A8(a8)+"_"+m),$async$ox)
case 29:w=30
return A.b(C.aeZ(r,"ngmy_worksheet_thumb_v3_"+C.A8(a8)+"_"+m),$async$ox)
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
break}i=a3.gU(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.byv(h),$async$ox)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.af_(r,"ngmy_worksheet_thumb_v3_"+C.A8(a8)+"_"+a4,f),$async$ox)
case 40:g=i.S5(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.aeZ(r,"ngmy_worksheet_thumb_v3_"+C.A8(a8)+"_"+a4),$async$ox)
case 41:g=i.S5(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.aeZ(r,"ngmy_worksheet_thumb_v3_"+C.A8(a8)+"_"+a4),$async$ox)
case 42:case 34:a4=i.a
w=43
return A.b(C.af_(r,"ngmy_worksheet_item_v3_"+C.A8(a8)+"_"+a4,B.R.ao(g.ae(),null)),$async$ox)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.ch(q,i.a)
w=31
break
case 32:w=44
return A.b(C.af_(r,"ngmy_worksheets_index_v3_"+C.A8(a8),B.R.ao(q,null)),$async$ox)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eJ(b3,new C.fD2(q))
a4=a3.$ti.k("cQ<1,a4<n,@>>")
a7=A.B(new A.cQ(a3,new C.fD3(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.af_(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.R.ao(a0,null)),$async$ox)
case 45:w=46
return A.b(J.hnZ(r),$async$ox)
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
r=s.ba(t,new C.fKV(e))
if(r===-1)s.ck(t,0,e)
else s.n(t,r,e)
u=C.ox(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$KH,v)},
bzJ(d,e){var w=0,v=A.j(x.H),u
var $async$bzJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Cs(d),$async$bzJ)
case 2:u=g
J.nl(u,new C.fnu(e))
w=3
return A.b(C.ox(d,u),$async$bzJ)
case 3:return A.h(null,v)}})
return A.i($async$bzJ,v)},
G0(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$G0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$G0)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aT(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.R.aG(0,i,null)
if(x.j.b(t)){j=J.d8(t,x.f)
j=A.cD(j,new C.fpX(),j.$ti.k("J.E"),x.k)
s=A.a3(j).k("a2<J.E>")
r=A.B(new A.a2(j,new C.fpY(),s),s.k("J.E"))
B.d.b_(r,new C.fpZ())
k=r}}catch(h){}w=4
return A.b(C.f9M(d),$async$G0)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hNe(k,p,d)
j=A.U(o)
s=j.k("K<1,a4<n,@>>")
s=A.B(new A.K(o,new C.fq_(),s),s.k("ak.E"))
n=B.R.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Q3(d,o),$async$G0)
case 7:case 6:j=j.k("a2<1>")
m=A.B(new A.a2(o,new C.fq0(d),j),j.k("J.E"))
if(m.length!==0)C.aNm(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$G0,v)},
fCM(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fCM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Q3(d,e),$async$fCM)
case 3:t=J.dH(e,new C.fCN(d))
s=A.B(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aNm(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fCM,v)},
a1V(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a1V=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a1V)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aT(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.R.aG(0,l,null)
if(x.j.b(u)){m=J.d8(u,x.f)
m=A.cD(m,new C.fKQ(),m.$ti.k("J.E"),x.k)
t=A.a3(m).k("a2<J.E>")
s=A.B(new A.a2(m,new C.fKR(),t),t.k("J.E"))
o=s}}catch(k){}q=J.q4(o,new C.fKS(e))
if(B.a.i(e.x).length===0&&C.tJ(e,d)){m=B.a.i(d.toLowerCase())
p=e.aCA(e.y===D.ki?D.ki:D.tB,m)}else p=e
if(q===-1)J.pm(o,0,p)
else J.aF(o,q,p)
w=3
return A.b(C.Q3(d,o),$async$a1V)
case 3:w=C.tJ(p,d)?4:5
break
case 4:w=6
return A.b(C.aNl(C.FZ(p,d),p),$async$a1V)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a1V,v)},
aNw(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aNw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.G0(d),$async$aNw)
case 2:u=g
t=J.cE(u)
s=A.r2(t.eJ(u,new C.fnb(e)))
t.bm(u,new C.fnc(e))
w=3
return A.b(C.Q3(d,u),$async$aNw)
case 3:w=s!=null&&C.bzM(s,d)?4:5
break
case 4:w=6
return A.b(C.f95(e),$async$aNw)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aNw,v)},
agN(d){var w=d.f,v=A.U(w).k("a2<1>")
w=A.B(new A.a2(w,new C.fL0(),v),v.k("J.E"))
return w},
fUo(d,e){var w,v=d.f,u=A.r2(new A.a2(v,new C.fmM(e),A.U(v).k("a2<1>")))
v=C.agN(d)
w=A.U(v).k("a2<1>")
v=A.B(new A.a2(v,new C.fmN(e,u),w),w.k("J.E"))
B.d.b_(v,new C.fmO())
return v},
hUy(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hj3(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.ba(C.fUo(d,u),new C.fKC(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hW4(d,e){var w
if(e==null||e.length===0)return 1
w=C.fUo(d,e)
if(w.length===0)return 1
return new A.K(w,new C.fqJ(),A.U(w).k("K<1,H>")).fF(0,B.zR)+1},
i2M(d){var w,v=C.agN(d)
if(v.length===0)return null
w=new A.a2(v,new C.fCJ(),A.U(v).k("a2<1>"))
if(!w.gam(0))return w.gK(0)
return B.d.gK(v)},
hUt(d){return A.F(["id",d.a,"name",d.b,"gender",C.heR(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hW_(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
d=q.aCv(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.L)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cG7(a1,w,a3.d,a2.y,s,a0,v)},
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
break}p=J.d8(t,x.f)
p=A.cD(p,new C.fpU(),p.$ti.k("J.E"),x.k)
s=A.a3(p).k("a2<J.E>")
p=A.B(new A.a2(p,new C.fpV(),s),s.k("J.E"))
B.d.b_(p,new C.fpW())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Ah,v)},
agz(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$agz=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tB:D.ki
a7=C.FZ(b2,b3)
w=2
return A.b(C.Ah(b1),$async$agz)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.ba(a8,new C.fCF(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bzv(b1,b2),$async$agz)
case 5:case 4:if(b0===-1){u=b2.aCA(a6,a7)
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
s.n(0,m,l.aCv(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
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
return A.b(C.Q3(b1,a8),$async$agz)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aNl(B.a.i(b3.toLowerCase()),u),$async$agz)
case 9:case 8:return A.h(null,v)}})
return A.i($async$agz,v)},
hb1(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a6().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("K<1,a4<n,@>>"),k=A.B(new A.K(m,C.hih(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.F(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.F(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a6().ac(),"updatedAt",o],r,x.K),"createdAt",s.a6().ac(),"updatedAt",o],r,x.z)},
hb2(d,e){var w=new A.S(Date.now(),0,!1).a6().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("K<1,a4<n,@>>")
u=A.B(new A.K(u,C.hih(),t),t.k("ak.E"))
return A.F(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a6().ac(),"updatedAt",w],x.N,x.z)},
hKS(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a5(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ajC(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.K(j,A.fWJ(),A.U(j).k("K<1,n>")).c_(0,new C.f9z())
t=A.B(j,j.$ti.k("J.E"))
if(u===v)s=D.tB
else s=B.d.t(t,u)?D.M9:D.ki
return w.aCA(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ajC(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d8(q,h)
h=A.cD(h,new C.f9A(),h.$ti.k("J.E"),x.P)
p=A.a3(h).k("a2<J.E>")
o=A.B(new A.a2(h,new C.f9B(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.f9C(),x.N).c_(0,new C.f9D())
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
f9M(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$f9M=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.f9Q()
h=x.N
g=x.z
w=7
return A.b(A.iJ(A.a([A.ll("family_trees","*",null,A.F(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bG),r.$2(A.ll("family_trees","*",A.F(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bG),"collaborator"),r.$2(A.ll("family_trees","*",null,A.F(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bG),"public")],x.cl),x.U),$async$f9M)
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
h=A.cD(new A.bc(l,h),new C.f9N(a0),h.k("J.E"),x.k)
l=A.a3(h).k("a2<J.E>")
l=A.B(new A.a2(h,new C.f9O(),l),l.k("J.E"))
B.d.b_(l,new C.f9P())
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
return A.i($async$f9M,v)},
hNe(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a5(e)
if(j.gam(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dt(e,new C.fe_(),v).c_(0,new C.fe0())
t=A.da(u,u.$ti.k("J.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.FZ(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.ki){m=q.e
m=!new A.K(m,A.fWJ(),A.U(m).k("K<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gaf(e);j.C();){v=j.gU(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.hW_(l,v)
o=C.FZ(k,w)
p=v.d
s.n(0,u,o===w?k.ba4(p,D.tB):k.ba4(p,v.y))}j=s.$ti.k("bc<2>")
j=A.B(new A.bc(s,j),j.k("J.E"))
B.d.b_(j,new C.fe1())
return j},
Q3(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Q3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$Q3)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fg6(),x.a)
s=A.B(s,s.$ti.k("ak.E"))
w=3
return A.b(u.ar("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.R.ao(s,null)),$async$Q3)
case 3:return A.h(null,v)}})
return A.i($async$Q3,v)},
aNl(d,e){return C.hSj(d,e)},
hSj(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aNl=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lL("family_trees",A.a([C.hb1(e,d)],p),null,B.cG),$async$aNl)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lL("family_trees",A.a([C.hb2(e,d)],p),null,B.cG),$async$aNl)
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
aNm(d,e){return C.hSk(d,e)},
hSk(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aNm=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("K<1,a4<n,@>>")
m=n.k("ak.E")
l=A.B(new A.K(e,new C.fkT(d),n),m)
r=l
w=7
return A.b(A.lL("family_trees",r,null,B.cG),$async$aNm)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.K(e,new C.fkU(d),n),m)
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
f95(d){return C.hKd(d)},
hKd(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$f95=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Qs("family_trees",A.F(["id",d],x.N,x.z),null,B.cG),$async$f95)
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
return A.i($async$f95,v)},
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
cuK:function cuK(){},
cuJ:function cuJ(){},
cuH:function cuH(){},
cuI:function cuI(){},
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
ajB:function ajB(d,e){this.a=d
this.b=e},
fn2:function fn2(){},
fKX:function fKX(d){this.a=d},
flz:function flz(d){this.a=d},
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
bM8:function bM8(){},
bM7:function bM7(){},
bM4:function bM4(){},
bM5:function bM5(){},
bM6:function bM6(){},
fdl:function fdl(){},
f91:function f91(){},
f92:function f92(){},
f93:function f93(){},
fD_:function fD_(){},
fD0:function fD0(){},
fD1:function fD1(){},
fD2:function fD2(d){this.a=d},
fD3:function fD3(){},
fKV:function fKV(d){this.a=d},
fnu:function fnu(d){this.a=d},
fpX:function fpX(){},
fpY:function fpY(){},
fpZ:function fpZ(){},
fq_:function fq_(){},
fq0:function fq0(d){this.a=d},
fCN:function fCN(d){this.a=d},
fKQ:function fKQ(){},
fKR:function fKR(){},
fKS:function fKS(d){this.a=d},
fnb:function fnb(d){this.a=d},
fnc:function fnc(d){this.a=d},
fL0:function fL0(){},
fmM:function fmM(d){this.a=d},
fmN:function fmN(d,e){this.a=d
this.b=e},
fmO:function fmO(){},
fKC:function fKC(d){this.a=d},
fqJ:function fqJ(){},
fCJ:function fCJ(){},
fpU:function fpU(){},
fpV:function fpV(){},
fpW:function fpW(){},
fCF:function fCF(d){this.a=d},
f9z:function f9z(){},
f9A:function f9A(){},
f9B:function f9B(){},
f9C:function f9C(){},
f9D:function f9D(){},
f9Q:function f9Q(){},
f9R:function f9R(d){this.a=d},
f9N:function f9N(d){this.a=d},
f9O:function f9O(){},
f9P:function f9P(){},
fe_:function fe_(){},
fe0:function fe0(){},
fe1:function fe1(){},
fg6:function fg6(){},
fkT:function fkT(d){this.a=d},
fkU:function fkU(d){this.a=d},
cuM:function cuM(d,e){this.a=d
this.b=e},
cuN:function cuN(d,e){this.a=d
this.b=e},
aFA:function aFA(d,e,f){this.a=d
this.b=e
this.c=f},
b72:function b72(){this.b=this.a=0},
b71:function b71(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bu1:function bu1(){},
wr(d,e){var w,v
if(d==null)return""
w=d.bS()
v=""+w.gce()+"/"+w.gct()+"/"+w.gcj()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gn1()),2,"0")+":"+B.a.aT(B.o.u(w.gFP()),2,"0")},
hB1(){var w,v=$.pi(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"WS"+B.d.fW(u)},
ar7(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$ar7=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c2(),$async$ar7)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f1("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bG),$async$ar7)
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
ar8(d){return C.hB2(d)},
hB2(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$ar8=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c2(),$async$ar8)
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
return A.b(A.c2(),$async$ara)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hB1()
w=4
return A.b(C.ar7(),$async$ara)
case 4:r=h
q=B.a.i(e)
p=B.dJ.aJ(t)
J.aF(r,s,A.F(["ownerEmail",q,"projectId",f,"payload",B.cS.gcv().aJ(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(C.ar8(r),$async$ara)
case 5:u=new A.a_p("NGMYWSSYNC2|"+s,s,25)
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
return A.b(A.c2(),$async$ar9)
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
h5v(){var w=new A.S(Date.now(),0,!1).a6()
return"wst_"+(1000*w.a+w.b)+"_"+B.cI.aB(999999)},
hB3(d){var w,v,u,t,s,r,q
try{w=A.afo(d)
if(w==null)return d
v=w
if(J.KO(v)>960||J.KM(v)>960){s=v
r=J.KO(v)>=J.KM(v)?960:null
v=A.afn(s,J.KM(v)>J.KO(v)?960:null,B.Nu,r)}s=v
u=A.akZ(82).Sq(s,B.yl)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cf(u))
return s}catch(q){t=A.a9(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cem(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cem=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hB3(e)
$.cei.n(0,s,t)
u=C.bBx(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cem,v)},
b0O(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b0O=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.cZ(l,"data:image")){u=null
w=1
break}t=4
r=J.eZ(l,",")?B.d.gal(J.ln(l,",")):l
q=B.cE.aJ(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.h5v()
w=7
return A.b(C.cem(p,q),$async$b0O)
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
return A.i($async$b0O,v)},
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
a7F(d){var w=0,v=A.j(x.H),u,t
var $async$a7F=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hia(d)
if(t==null){w=1
break}$.cei.W(0,t)
w=3
return A.b(C.bBw(t),$async$a7F)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a7F,v)},
bBx(d,e){return C.i15(d,e)},
i15(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bBx=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aMh
w=7
return A.b(n==null?$.aMh=I.fTp():n,$async$bBx)
case 7:r=g
q=new Uint8Array(A.cf(e))
p=J.mB(r,"thumbs","readwrite")
B.iD.ma(J.mz(p,"thumbs"),q,l)
w=8
return A.b(J.pl(p),$async$bBx)
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
return A.i($async$bBx,v)},
bBw(d){return C.i13(d)},
i13(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bBw=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aMh
w=7
return A.b(o==null?$.aMh=I.fTp():o,$async$bBw)
case 7:r=f
q=J.mB(r,"thumbs","readwrite")
B.iD.Fj(J.mz(q,"thumbs"),m)
w=8
return A.b(J.pl(q),$async$bBw)
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
return A.i($async$bBw,v)}},D,Ak,Al,R,Am,An,I
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
T=c[111]
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
Aj=c[112]
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
C.aX9.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.ber(),f=h.x!=null&&h.yH(i).length===0
if(h.x!=null)w=f?B.aZ:B.bI
else w=h.gT3()?B.bI:B.dT
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.bdc,B.q,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.eFR,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h5,i,i,i),B.S,D.f7S,B.at,A.d(C.wr(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.f3P,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.aYS,i,i,i,i,B.XX,i,i,i)
q=A.m(16)
p=A.I(B.aL,B.q,1)
o=A.I(B.aZ.j(0.28),B.q,1)
n=A.fVj(h.d)
o=A.p(B.A,C.aX8(A.ft6(h.e,n),30),B.f,i,i,new A.o(B.lD,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.f_g,B.L,i,i)
m=A.m(14)
l=A.I(B.aL,B.q,1)
q=A.p(i,A.v(A.a([o,B.P,n,B.bA,D.f88,B.ac,A.p(i,A.v(A.a([D.fnd,B.bA,A.d(A.Aj(h.c),i,i,i,i,i,i,D.eVl,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.eZ,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,p,q,i,i,B.n),i,i,i,i,K.agq,i,i,i)
p=A.m(16)
m=A.I(B.aL,B.q,1)
l=j.aPa("Original due",C.wr(h.r,!1))
n=j.aPa("Current due",C.wr(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.p(i,A.v(A.a([l,B.P,n,B.S,A.p(i,A.d(h.gaJn(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.AF,i,i,1/0),B.S,j.ccb(),B.P,j.c_V(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bk,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aL,B.q,1)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.f94,B.at,A.d(q,i,i,i,i,i,i,D.eZz,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,n,o,i,i,B.n),i,i,i,i,B.bk,i,i,1/0)],s))}if(h.gaEc()){q=A.m(14)
o=A.I(B.cp,B.q,1.6)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fow,B.P,A.bw(A.m(12),A.ek(new A.a7(1/0,88,A.b3(i,i,i,new A.Vf(h.ax,B.M,D.eJA,!0,3.5,i),B.au),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.EX,i,i,i)],s))}p.push(B.aA)
p.push(D.fgR)
return A.p(i,A.v(A.a([r,new A.C(B.agt,A.v(p,B.aj,i,B.e,B.j,0,B.p),i)],s),B.aj,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aPa(d,e){var w=null
return A.A(A.a([A.D(A.d(d,w,w,w,w,w,w,D.a7d,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eWk,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
ccb(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a8o(B.dT,u,"Not paid yet")
w=t.yH(null).length
v=w===0?B.aZ:B.bI
return this.a8o(v,u,C.wr(t.x,!0))},
c_V(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a8o(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a8o(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a7d,u,u,u)
v=A.U(d).k("K<1,hh>")
v=A.B(new A.K(d,new C.c0b(),v),v.k("ak.E"))
return A.v(A.a([w,B.an,A.bZ(B.bB,v,B.bs,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a8o(d,e,f){var w=null
return A.A(A.a([A.D(A.d(e,w,w,w,w,w,w,D.a7d,w,w,w),1),new A.dm(1,B.ci,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dL,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b9b.prototype={
a5(d,e){new A.Vf(this.b,B.M,e,!0,3.5,null).a5(d,e)},
aq(d){return d.b!==this.b}}
C.ane.prototype={
T(){return new C.aBs(A.a([],x.bp))},
gdX(){return this.c}}
C.aBs.prototype={
a_(){this.a1()
this.Ie()},
Ie(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ie=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a19(t.a.c),$async$Ie)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dDK(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Ie,v)},
aR2(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aQ,s=A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bq:B.bn).j(0.22)
w=A.m(10)
return A.br(v,new A.b4(4,r,new A.aA(u,1,B.q,-1)),v,B.bk,v,v,v,v,!0,new A.b4(4,w,new A.aA((this.a.d.a?B.bq:B.bn).j(0.22),1,B.q,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.m(10),D.aWu),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aR1(d){return this.aR2(d,null)},
OL(d){return this.cfK(d)},
cfK(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OL=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Gc:B.eG
w=7
return A.b(new A.hW().BJ(72,900,900,n),$async$OL)
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
aZs(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aQ,o=A.m(10),n=A.I((q?B.bq:B.bn).j(0.18),B.q,1)
if(d)q=B.cZ
else q=s.a.d.a?B.bq:B.bn
q=A.W(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aQ:B.aB,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cZ
else u=s.a.d.a?B.bq:B.bn
t=x.p
u=A.D(A.v(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fv(r,r,r,r,r,r,r,r,r,r,r,B.cZ,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c7)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.W(B.cA,s.a.d.a?B.bq:B.bn,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c7))
return A.p(r,A.A(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.kh,D.boC,r,r,r)},
CG(d){return this.bxw(d)},
bxv(){return this.CG(null)},
bxw(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CG=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
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
i=a3?null:A.fVj(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.vO?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",a4,new C.dDt(),new C.dDu(a2,t,a5,r,new C.dDv(a2,t),o,n,j),B.eE,!0,x.y),$async$CG)
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
break}if(f.length===0||e<=0){t.c.I(x.q).f.R(D.ePW)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.R(D.eOB)
w=1
break}a1=A.ft6(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.vO?"male":"female"
w=7
return A.b(A.agM(a3,A.h2f(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$CG)
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
if(!a3.A(0,A.c0(a4.gcj(),a4.gce(),a4.gct(),0,0,0,0,0)))a5.cIf(a2.a)
w=8
return A.b(A.agM(t.a.c,a5),$async$CG)
case 8:case 5:w=9
return A.b(t.Ie(),$async$CG)
case 9:case 1:return A.h(u,v)}})
return A.i($async$CG,v)},
aRE(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cZ.j(0.14)
else w=this.a.d.a?B.M:B.aQ
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cZ
else s=(this.a.d.a?B.bq:B.bn).j(0.2)
s=A.I(s,B.q,g?1.5:1)
r=C.aX8(d,18)
if(g)q=B.cZ
else q=this.a.d.a?B.aQ:B.aB
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,A.p(p,A.A(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.bb,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ag)},
Rr(d){return this.cx4(d)},
cx4(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Rr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",s,new C.dDN(),new C.dDO(t,d),B.hX,!0,x.y),$async$Rr)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.S(s,0,!1)
case 4:w=7
return A.b(A.agM(t.a.c,d),$async$Rr)
case 7:w=8
return A.b(t.Ie(),$async$Rr)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Rr,v)},
Nq(d,e){return this.bId(0,e)},
bId(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Nq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.l_(s,"Cancel","Delete",e.b+" \xb7 "+A.Aj(e.c)+" will be removed from this device.","Delete this debt?"),$async$Nq)
case 3:if(!g){w=1
break}w=4
return A.b(C.fni(t.a.c,e.a),$async$Nq)
case 4:w=5
return A.b(t.Ie(),$async$Nq)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Nq,v)},
adQ(d){return this.c9E(d)},
c9E(d){var w=0,v=A.j(x.H),u=this,t
var $async$adQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bX(B.K,null,new C.dDH(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$adQ)
case 2:return A.h(null,v)}})
return A.i($async$adQ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.e3F
w=J.dH(m.d,new C.dDP())
v=A.B(w,w.$ti.k("J.E"))
w=J.dH(m.d,new C.dDQ())
u=A.B(w,w.$ti.k("J.E"))
t=B.d.cI(v,0,new C.dDR())
w=A.m(18)
s=m.a.d.a
r=s?D.cl2:D.awE
q=A.I(s?B.cZ.j(0.35):B.cZ.j(0.18),B.q,1)
s=A.p(l,D.bNO,B.f,l,l,new A.o(B.cZ.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.av,A.D(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.aB,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a1,!0,A.m(12),A.aL(!1,A.m(12),!0,D.e33,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dDS(m),l,l,l,l,l,l,l),B.f,B.cZ,0,l,l,l,l,l,B.ag)],p),B.m,l,B.e,B.j,0,l,l)
o=A.D(m.cti("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Aj(t)
r=A.a([A.p(l,A.v(A.a([s,B.ac,A.A(A.a([o,B.ab,A.D(m.b4t(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.ax,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.agn,l,l,l),B.aA],p)
if(J.cl(m.d)){w=m.a.d.a
s=w?B.dX:B.c
q=A.m(18)
o=A.I((w?B.bq:B.bn).j(0.12),B.q,1)
n=A.p(l,D.bIN,B.f,l,l,new A.o(B.cZ.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.aB,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.ac,w,B.at,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bn,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.br1,l,l,1/0))}else{w=m.gcf2()
s=A.B(new A.K(v,w,A.U(v).k("K<1,r>")),x.l)
if(u.length!==0){q=A.a([B.an,new A.C(D.bsG,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bn,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.K(u,w,A.U(u).k("K<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.aj,l,B.e,B.j,0,B.p)},
b4t(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.bq:B.bn).j(0.12),B.q,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bq:B.bn,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cZ
else w=v.a.d.a?B.aQ:B.aB
return A.p(u,A.v(A.a([q,B.bA,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eh,u,u,u)},
cti(d,e){return this.b4t(!1,d,e)},
cf3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.yH(j).length,h=d.bdC()
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
m=A.fVj(d.d)
o=A.p(B.A,A.db(C.aX8(A.ft6(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aQ:B.aB
m=x.p
n=A.a([new A.dm(1,B.ci,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaEc())B.d.v(n,A.a([B.eb,A.W(B.MA,B.cZ.j(0.8),j,j,j,14)],m))
p=A.D(A.v(A.a([A.A(n,B.m,j,B.e,B.j,0,j,j),B.cX,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.Aj(d.c)
l=k.a.d.a?B.aQ:B.aB
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aG(!1,B.a1,!0,j,A.aL(!1,q,!0,new A.C(W.ag7,A.A(A.a([o,B.bf,p,B.ab,A.v(A.a([n,B.bA,A.W(B.ex,(k.a.d.a?B.bq:B.bn).j(0.5),j,j,j,18)],m),B.dG,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dDJ(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ag),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.dc,j,j,j,j)}}
C.u0.prototype={}
C.ajA.prototype={
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
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.atb,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.Fd,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f2(m,A.A(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.eg)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(D.bnQ,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cD:B.bl,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.D(new A.C(B.fo,A.v(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.eKk)
a2=A.a([A.A(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.C(B.v7,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a3,B.a7,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.l9,A.v(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.q,1),a2,a0,a0,B.n),a0,a0,a0,B.h7,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.ax,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bp1,a0,a0,a0,a0)}}
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
l.push(A.D(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bl:B.cD,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.m,q,B.e,B.j,0,q,q),B.cX,n],m)
if(p.z)o.push(new A.C(B.v4,n,q))
return new A.C(B.dc,A.v(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.S3.prototype={
T(){return new C.bcN()}}
C.bcN.prototype={
gbW1(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.e3A,D.e3G],l)
for(w=0;w<8;++w){v=D.a0Y[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.FX:B.Bo
q=t===s
r=A.W(r,q?B.ez:B.c_,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.x(v.b,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bD(1,B.bi,new A.x(v.c,n,A1.CW,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aW(24,24)
p=new A.aA(B.ez,2,B.q,-1)
s=new A.o(n,n,new A.bP(p,p,p,p),new A.bq(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aE(n,new A.C(B.eF,A.v(A.a([new A.C(B.mh,new A.cm(B.aO,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.Dv(!0,new C.ajA(v,q.d,q.e,new C.d3y(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d3z(o,v),n,n,n,n,n,n,!1,B.a8))}k.push(new A.C(D.bpk,A.bJ(D.ftJ,new C.d3A(o,d),A.bk(B.b5,n,n,n,n,B.o7,n,n,new A.b7(A.m(16),B.Y),n,n,n)),n))
return A.bm(!0,new A.cU(new A.aY(0,1/0,0,m.a.b*0.9),A.cB(k,n,D.bty,n,n,B.ah,!0),n),!0,!1,B.af,!0,!0)}}
C.n5.prototype={
ae(){var w=this
return A.F(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a6().ac()],x.N,x.z)},
bag(d,e,f){return new C.n5(this.a,e,d,f)}}
C.H4.prototype={
w2(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.H4(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aCp(d){var w=null
return this.w2(w,w,w,w,w,d,w,w,w,w,w,w)},
cE5(d){var w=null
return this.w2(w,w,w,w,d,w,w,w,w,w,w,w)},
bae(d,e,f){var w=null
return this.w2(d,w,w,w,w,w,w,w,e,w,f,w)},
cEK(d){var w=null
return this.w2(w,w,w,w,w,w,d,w,w,w,w,w)},
cET(d){var w=null
return this.w2(w,w,w,w,w,w,w,w,w,d,w,w)},
cE3(d){var w=null
return this.w2(w,w,w,d,w,w,w,w,w,w,w,w)},
cEV(d){var w=null
return this.w2(w,w,w,w,w,w,w,w,w,w,w,d)},
cE0(d){var w=null
return this.w2(w,w,d,w,w,w,w,w,w,w,w,w)},
cDW(d){var w=null
return this.w2(w,d,w,w,w,w,w,w,w,w,w,w)},
Fc(d){var w=null
return this.w2(w,w,w,w,w,w,w,d,w,w,w,w)},
cF2(d,e,f,g,h,i,j,k,l,m,n){return this.w2(d,e,f,g,null,h,i,j,k,l,m,n)},
ae(){var w=this
return A.F(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cBP(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bM3(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.C1.gec(D.C1))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a2v)
q=l.$2("frame",D.a1X)
l=l.$2("texture",D.a1S)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cF2(p,u,t,q,r,A.qD(d.h(0,"ribbon"))?A.FA(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.YC.prototype={
T(){return new C.ayv(A.a([],x.I),D.M8)},
gdX(){return this.c}}
C.ayv.prototype={
a_(){var w,v=this
v.a1()
v.f=A.za(0,1)
w=$.aw()
v.z=new A.ar(B.as,w)
v.Q=new A.ar(B.as,w)
v.kP()
w=v.a
C.bzU(w.c,w.d).bz(new C.d4e(v),x.fL)},
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
kP(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$kP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Kf(s.c,s.d),$async$kP)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d42(t,r))
t.aul()
case 1:return A.h(u,v)}})
return A.i($async$kP,v)},
gaqX(){var w,v=this
if(!J.cl(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
aul(){var w,v,u=this.gaqX(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saV(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saV(0,w==null?"":w)},
c84(d){this.m(new C.d4_(this,d))
this.aul()},
MM(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$MM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.n5(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aP8(r.c,r.d,s),$async$MM)
case 3:w=4
return A.b(t.kP(),$async$MM)
case 4:if(t.c==null||J.cl(t.d)){w=1
break}q=J.q4(t.d,new C.d3B(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d3C(t,p))
t.aul()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.AM(p+1,B.cr,B.kG),$async$MM)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$MM,v)},
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
break}s=t.gaqX()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aP8(o.c,o.d,new C.n5(s,r,q,new A.S(p,0,!1))),$async$As)
case 3:w=4
return A.b(t.kP(),$async$As)
case 4:if(t.c==null){w=1
break}t.m(new C.d43(t))
case 1:return A.h(u,v)}})
return A.i($async$As,v)},
Nr(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Nr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaqX()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d3K(r),s,null,!0,!0,x.y),$async$Nr)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bzF(s.c,s.d,r.a),$async$Nr)
case 4:t.m(new C.d3L(t))
w=5
return A.b(t.kP(),$async$Nr)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.T6(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Nr,v)},
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
return A.b(C.Qk(s,r.r,o,p,q),$async$xY)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hiD(s,r.x,r.r),$async$xY)
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
return A.b(t.kP(),$async$xY)
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
return A.b(t.As(),$async$a_G)
case 5:case 4:if(t.c==null){w=1
break}s=t.gxW(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dL(D.ys,new C.d40(t),new C.d41())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mm("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gU(o)
p.push(new F.mm(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fWW(o,new F.r6(s,r,"",p,new F.uk(q.d,null,null,null,null,"","","")),null),$async$a_G)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a_G,v)},
N9(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$N9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.As(),$async$N9)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bX(D.abQ,null,new C.d3G(t),s,!0,!0,!0,D.aLj,!1,!1,x.N),$async$N9)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cE5(r)
t.m(new C.d3H(t,q))
s=t.a
w=7
return A.b(C.QU(s.c,s.d,q),$async$N9)
case 7:case 1:return A.h(u,v)}})
return A.i($async$N9,v)},
Wg(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bX(D.abQ,null,new C.d3M(t),r,!0,!0,!0,D.aLj,!1,!1,x.e),$async$Wg)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d3N(t,s))
r=t.a
w=4
return A.b(C.QU(r.c,r.d,s),$async$Wg)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.AM(0,B.dV,B.ov)
case 1:return A.h(u,v)}})
return A.i($async$Wg,v)},
bNl(d){var w=d.bS(),v=B.a.aT(B.o.u(w.gce()),2,"0"),u=B.a.aT(B.o.u(w.gct()),2,"0")
return""+w.gcj()+"-"+v+"-"+u},
gxW(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bVh()
if(r.e)w=D.aaF
else if(J.cl(r.d)){w=r.y
v=r.gxW(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eUO,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.C(A0.aho,new C.XV(w,v,0,q),q),q),B.bx,t,B.an,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kb.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aE(q,A.p(q,D.eFH,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dO.j(0.45),B.J,18)],x.V),E.vD,B.n),q,q,q,q,B.Y6,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcAX(),q,q,q,q,q,q,!1,B.a8))
w.push(B.S)
w.push(A.hc(D.bF4,D.ftc,r.gaL6(),q))
B.d.v(u,w)}w=A.av(A.cd(A.v(u,B.m,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.ew,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kb.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dQ:B.zP
u=A.v(A.a([new A.C(D.bql,w,q),A.D(A.Ip(v,new C.d4c(r),J.ad(r.d)+1,q,r.gc83(),u,B.aO),1),r.bAo()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c8(q,D.ad6,new A.an(B.W,q,B.b_,B.r,A.a([D.aJP,A.bm(!0,A.v(A.a([p,A.D(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bVh(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cy(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Jo(B.dW,"AI",h.gbyj(),!0))
if(h.a.f)f.push(new C.Jo(B.n9,"Cover",h.gbIN(),!1))
if(h.a.f)f.push(new C.Jo(B.y5,"Header",h.gbDP(),!1))
if(J.cy(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Jo(B.tP,"Print",h.gch3(),!1))
if(h.a.f&&J.cy(h.d)&&h.r>=0){v=h.w
u=v?B.hy:B.jg
t=v?"Save":"Edit"
f.push(new C.Jo(u,t,v?h.gcna():new C.d3X(h),!1))}if(h.a.f)f.push(new C.Jo(B.hx,"Add page",h.gaL6(),!1))
v=C.heQ(h.y.Q)
u=h.gxW(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.dkP
else{k=new A.aW(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.aA(E.jM.j(0.5),1,B.q,-1)
j=A.p(g,A.W(l.a,D.kb,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bP(i,i,i,i),new A.bq(k,k,k,k),g,new A.a8(B.a3,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kb.j(0.85)
p.push(new A.bD(1,B.bi,A.aE(B.c5,A.v(A.a([k,B.bA,new A.x(l.b,g,new A.G(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a8),g))}return new C.ajA(v,u,t+" \xb7 "+s+" "+r,new C.d3Y(h),A.A(p,B.m,g,B.e,B.j,0,g,g),g)},
zu(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.As(),$async$zu)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gU(r)
s.push(q.b+" "+q.c)}p=F.a1o(B.d.aI(s," "))
s=t.c
s.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.d3D(t,p),s,null,!0,!0,x.N),$async$zu)
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
return A.b(t.Dg(),$async$zu)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.ER("Swahili (Kiswahili)",!0),$async$zu)
case 18:w=16
break
case 17:w=19
return A.b(t.cxI(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zu)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zu,v)},
Y8(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(E.jM.j(0.3),B.q,1),r=x.p
return new A.C(B.cH,A.aL(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.W(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.vD,B.a6),w,42,w,w,w,w,w,42),B.bf,A.D(A.v(A.a([A.d(f,w,w,w,w,w,w,A8.SU,w,w,w),A.d(g,w,w,w,w,w,w,O.SN,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d3Z(d,h),w,w,w,w,w,w,w),w)},
Dg(){return this.bMQ()},
bMQ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Dg=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d3Q(r),a7,null,!0,!0,x.ei),$async$Dg)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eN("Working on it\u2026",$.aw())
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
a0=r.y.ae()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.ys[a1]
J.ch(j,i.a)}w=8
return A.b(C.afY(a0,a7,new C.d3T(o),d,l,e,j),$async$Dg)
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
for(a4=0;a4<J.ad(p);++a4){if(m.b.ah(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.bag(m.b.h(0,a4).b,a7,new A.S(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.As(j.c,j.d,l),$async$Dg)
case 11:w=12
return A.b(r.kP(),$async$Dg)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.ys[a1].a)
a5=l.cBP(j,12,a7)
l=r.a
w=15
return A.b(C.QU(l.c,l.d,a5),$async$Dg)
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
return A.i($async$Dg,v)},
ER(d,e){return this.cxJ(d,e)},
cxI(d){return this.ER(d,!1)},
cxJ(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$ER=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eN("Starting\u2026",$.aw())
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
return A.b(F.a1B(m,new C.d47(a0)),$async$ER)
case 10:w=8
break
case 9:w=11
return A.b(C.bBo(new C.d48(a0),m,a2),$async$ER)
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
o.push(k.bag(J.q(p,g).b,j.a,new A.S(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.As(k.c,k.d,o),$async$ER)
case 12:w=13
return A.b(r.kP(),$async$ER)
case 13:o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(A.cpm("Undo",new C.d49(r,d),null),null,null,null,null,B.r,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ER,v)},
bAo(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d3E(v):u
r=A.aH(u,u,u,u,A.W(D.bAO,s?D.kb:B.b2,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cy(v.d)&&!v.w&&v.r>=0)s=A.hc(A.W(B.vj,B.EB,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.EB,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbIm(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kb.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.D(A.av(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d3F(v):u
return A.bm(!0,new A.C(D.bq9,A.A(A.a([r,s,A.aH(u,u,u,u,A.W(B.ex,t<J.ad(v.d)?D.kb:B.b2,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.YG.prototype={
T(){return new C.bd7(new A.ar(B.as,$.aw()))}}
C.bd7.prototype={
ga0O(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
gbLB(){var w,v=this.ga0O()
A:{if("cover"===v){w=D.cQR
break A}if("book"===v){w=D.cMN
break A}w=D.ddF
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jM.j(0.5),n=x.p,m=A.A(A.a([D.dkQ,B.av,D.bvv,A.aH(q,q,q,q,B.lg,q,q,q,new C.d5Z(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jI(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d6_(r),r.ga0O()==="page",q,q,q,q))
if(r.a.d)l.push(A.jI(q,q,q,D.fo0,q,new C.d60(r),r.ga0O()==="book",q,q,q,q))
l.push(A.jI(q,q,q,D.fbE,q,new C.d61(r),r.ga0O()==="cover",q,q,q,q))
l=A.bZ(B.bB,l,B.bs,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.T,!1,q,!0,B.r,q,A.aN(),r.d,q,q,q,q,q,2,A.br(q,new A.b4(4,A.m(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kw,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dl,!0,B.a5,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbLB(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mC(q,B.c.j(0.08),new A.x(s,q,B.IA,q,q,q,q,q,q,q,q,q),B.hB,new C.d62(r,s),q,q,q,q))}return A.eG(q,E.Ak,A.cd(A.v(A.a([m,B.S,D.fra,B.an,l,B.ac,k,B.P,A.bZ(B.bB,w,B.bs,6,6),B.aA,A.dq(D.bF1,D.frW,new C.d63(r,d),A.bk(B.b5,q,q,q,q,B.o7,q,q,new A.b7(A.m(16),B.Y),q,q,q)),B.at,D.fmm],n),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.fy,q,q,B.ah),q,q,q,D.ah7,B.d0,q,new A.b7(p,new A.aA(o,1.4,B.q,-1)),q)}}
C.YE.prototype={
T(){return new C.ayw(A.a([],x.Y))},
gdX(){return this.c}}
C.adL.prototype={}
C.ayw.prototype={
a_(){this.a1()
this.kP()},
kP(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Qo(p.c,p.d),$async$kP)
case 3:o=e
n=A.a([],x.Y)
p=J.aV(o)
case 4:if(!p.C()){w=5
break}s=p.gU(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bzU(r.c,q),$async$kP)
case 6:j=e
i=J
w=7
return A.b(C.Kf(t.a.c,q),$async$kP)
case 7:m.push(new l.adL(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d4t(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kP,v)},
b5D(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Ps(d,e){return this.c9C(0,e)},
c9C(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Ps=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).c6(A.e7(new C.d4s(u,e),!0,null,x.y)),$async$Ps)
case 2:t=g
w=3
return A.b(u.kP(),$async$Ps)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.R(D.aNc)
return A.h(null,v)}})
return A.i($async$Ps,v)},
EU(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$EU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.R(D.aN8)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.afg(s.c,s.d),$async$EU)
case 5:q=e
w=6
return A.b(t.kP(),$async$EU)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Ps(0,B.d.iC(t.d,new C.d4x(q))),$async$EU)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Qk(p,s.f,r,n,o),$async$EU)
case 10:m=e
w=11
return A.b(t.kP(),$async$EU)
case 11:if(m&&t.c!=null)t.c.I(x.q).f.R(D.aNc)
case 1:return A.h(u,v)}})
return A.i($async$EU,v)},
OX(d,e){return this.ckU(0,e)},
ckU(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$OX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d4w(t,e),s,null,!0,!0,x.y),$async$OX)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a1O(s.c,s.d,e.a),$async$OX)
case 4:w=5
return A.b(t.kP(),$async$OX)
case 5:case 1:return A.h(u,v)}})
return A.i($async$OX,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bAr(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(E.jM.j(0.6),B.q,1.6)
r=t===1?"space":"spaces"
k.push(A.aE(n,new A.fG(0.7142857142857143,A.p(n,A.v(A.a([D.dkR,B.ac,D.e2K,B.at,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kb.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.bb,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcAT(),n,n,n,n,n,n,!1,B.a8))}w=A.m(22)
v=A.I(E.jM.j(0.85),B.q,1.6)
s=A.aE(n,A.p(n,D.bMD,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jM.j(0.6),B.q,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d4y(d),n,n,n,n,n,n,!1,B.a8)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.jM.j(0.5),B.q,1)
w=A.p(n,A.A(A.a([s,B.bf,D.bvR,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eTU,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h5,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bS7,B.n),n,n,n,Am.LB,D.boh,n,n,n)
if(o.e)k=D.aaF
else k=k.length===0?D.b2R:A.co(new C.d4z(k))
return A.c8(n,D.ad6,new A.an(B.W,n,B.b_,B.r,A.a([D.aJP,A.bm(!0,A.v(A.a([w,A.D(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bAr(d){var w,v,u=this,t=null,s=u.b5D(d),r=d.c,q=x.p,p=A.a([A.bY(0,A.f2(B.A,new A.a7(300,420,new C.XV(d.b,s,r,t),t),B.f,B.dt),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aE(t,A.p(t,D.bLX,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b2,B.q,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d4q(u,d),t,t,t,t,t,t,!1,B.a8),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.eTu,t,t,t)
v=r===1?"page":"pages"
return A.aE(t,A.v(A.a([new A.fG(0.7142857142857143,new A.an(B.W,t,B.aa,B.r,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kb.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d4r(u,d),t,t,t,t,t,t,!1,B.a8)}}
C.Jo.prototype={}
C.XV.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dL(D.ys,new C.cDw(m),new C.cDx()),j=m.c,i=D.C1.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.lR:B.bb
v=new C.cDy(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.e03,28)],x.V)
u=x.p
t=A.a([A.bY(0,A.b3(l,l,l,new C.bao(j.x,h,l),B.au),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a3,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aW(3,3)
t.push(new A.cK(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bq(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.ahp,8,0.85,2.2),v.$4(D.bsZ,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.ahp,8,0.85,2.4))
else if(r==="corners")t.push(A.bY(0,new A.C(D.bsV,A.b3(l,l,l,new C.baf(h,l),B.au),l),0,0,0))
r=A.W(D.avN[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.atb,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aP,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bY(0,new A.C(D.btq,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aFv(l),D.eJt),l,l,l,46,0,l))
return A.p(l,A.bw(D.a9m,new A.an(B.W,l,B.aa,B.r,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.a9m,i,new A.a8(B.ax,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bao.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eP()
f.dG(11)
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
aq(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.baf.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.X(),k=A.M(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bO
for(w=e.a,v=e.b,v=[D.eAO,new A.cL([w,0,-1,1]),new A.cL([0,v,1,-1]),new A.cL([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
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
s=n.gbJ().a.snapshot()
w.drawPath((n.e=new A.cF(s)).a,m)
m.delete()
s=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
s.r=j.j(0.9).gp(0)
m=s.H()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
aq(d){return!d.b.A(0,this.b)}}
C.u1.prototype={}
C.Yc.prototype={
T(){return new C.bam()}}
C.bam.prototype={
gnQ(){var w=this.d
return w===$?this.d=this.a.c:w},
gxW(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ar(new A.bb(w.b,B.b3,B.aN),$.aw())}return v},
gazF(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ar(new A.bb(w.c,B.b3,B.aN),$.aw())}return v},
gapx(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ar(new A.bb(w.y,B.b3,B.aN),$.aw())}return v},
q(){var w=this,v=w.gxW(0),u=v.S$=$.aw()
v.P$=0
v=w.gazF()
v.S$=u
v.P$=0
v=w.gapx()
v.S$=u
v.P$=0
w.a2()},
aq8(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jI(s,s,s,new A.x(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cWY(this,f,u),e===u,s,s,s,s))}return A.bZ(B.bB,r,B.bs,6,8)},
avO(d){var w=null,v=B.c.j(0.07)
return A.br(w,new A.b4(4,A.m(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lp,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gnQ(),a0=f.gxW(0),a1=a0.a.a,a2=f.gazF(),a3=a2.a.a,a4=f.gapx(),a5=d.bae(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a7(190,260,A.f2(B.A,new A.a7(270,370,new C.XV(a5,d,f.a.e,e),e),B.f,B.dt),e),e,e,e)
a0=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a0,e,e,e,e,e,2,f.avO("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cXm(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a5,e,B.am,e,e,e,e)
a2=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a2,e,e,e,e,e,2,f.avO("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cXn(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a5,e,B.am,e,e,e,e)
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
v.push(A.aE(e,A.v(A.a([p,B.cX,new A.x(t.b,e,new A.G(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cXo(f,t),e,e,e,e,e,e,!1,B.a8))}v=A.bZ(B.bB,v,B.bs,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b5.j(0.35):B.c.j(0.07)
m=new A.aW(14,14)
s=f.d
o=new A.aA((s===$?f.d=f.a.c:s).d===n?B.ez:B.K,2,B.q,-1)
q.push(A.aE(e,A.p(e,A.W(D.avN[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bP(o,o,o,o),new A.bq(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cXp(f,n),e,e,e,e,e,e,!1,B.a8))}q=A.bZ(B.bB,q,B.bs,8,8)
a4=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a4,e,e,e,e,e,2,f.avO("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cXq(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a5,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mC,e,e,e)
m=A.a([],w)
for(l=D.C1.gdK(D.C1),l=l.gaf(l);l.C();){k=l.gU(l)
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
m.push(A.aE(e,A.v(A.a([j,B.bA,new A.x(i,e,new A.G(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cXr(f,k),e,e,e,e,e,e,!1,B.a8))}m=A.bZ(B.bB,m,B.bs,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mC,e,e,e)
k=f.gnQ()
return new A.C(new A.Q(0,0,0,a3.f.d),A.bm(!0,new A.cU(new A.aY(0,1/0,0,a1.a.b*0.92),A.cB(A.a([D.flP,B.ac,d,B.aP,a0,B.S,a2,B.aA,D.frK,B.P,v,B.aA,D.flZ,B.P,q,B.aA,a4,B.aA,p,B.P,m,B.aA,l,A.kU(e,9,""+B.k.V(f.gnQ().f),36,18,new C.cXs(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mC,e,e,e),B.an,f.aq8(D.a2v,f.gnQ().r,new C.cXt(f),D.dgQ),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mC,e,e,e),B.an,f.aq8(D.a1X,f.gnQ().w,new C.cXu(f),D.dgV),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mC,e,e,e),B.an,f.aq8(D.a1S,f.gnQ().x,new C.cXw(f),D.dii),B.an,A.iD(e,B.b5,e,B.af,e,new C.cXx(f),e,e,e,D.fgn,f.gnQ().z),B.bx,A.bJ(D.fkH,new C.cXy(f,a6),A.bk(B.b5,e,e,e,e,B.o7,e,e,new A.b7(A.m(16),B.Y),e,e,e))],w),e,R.agX,e,e,B.ah,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aFv.prototype={
a5(d,e){var w,v,u,t=new A.aQ($.X().r,B.ap,null,null,A.a([],x.v))
t.E(new A.b5(0,0))
w=e.a
t.E(new A.ap(w,0))
v=e.b
t.E(new A.ap(w,v))
t.E(new A.ap(w/2,v-12))
t.E(new A.ap(0,v))
t.E(new A.bF())
u=A.M()
u.sau(D.bSL.aw(0,new A.aa(0,0,0+w,0+v)))
d.aP(t,u)},
aq(d){return!1}}
C.bfB.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.X()
w=A.M()
w.sau(D.bRO.aw(0,new A.aa(0,0,a3,a4)))
a5.aY(new A.aa(0,0,a3,a4),w)
v=B.k.dw(a2/112)
u=new A.eP()
u.dG(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cQQ[u.aB(9)]
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
g.sau(new A.a8(B.a3,B.a7,B.x,A.a([f,k,e],t),a0,a0).aw(0,i))
d=g.H()
w.drawRRect(A.eq(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
e.r=E.jM.j(0.55).gp(0)
d=e.H()
w.drawRect(A.c4(new A.aa(h,j,g,j+2)),d)
d.delete()
j=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
j.r=E.jM.j(0.4).gp(0)
d=j.H()
w.drawRect(A.c4(new A.aa(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aB(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.sau(D.bRb.aw(0,new A.aa(0,r,a3,q)))
d=p.H()
w.drawRect(A.c4(new A.aa(0,r,a3,q)),d)
d.delete()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.jk
d=p.H()
w.drawRect(A.c4(new A.aa(0,q,a3,q+14)),d)
d.delete()}w=A.M()
w.r=D.b6a.j(0.72).gp(0)
a5.aY(new A.aa(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.M()
a4.sau(new A.bT(B.A,0.5,B.x,a0,0,A.a([D.bcN.j(0.22),B.K],t),a0,a0).aw(0,A.bW(new A.u(w,a2),a1)))
a5.ai(new A.u(w,a2),a1,a4)},
aq(d){return!1}}
C.b8A.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aK(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cK(14,w*2,v*2.2,v*2,o,o,new A.kK(new A.o(A.aq(D.kb,D.bh5,w/4),o,new A.bP(B.Y,new A.aA(B.w.j(0.12),1,B.q,-1),B.Y,B.Y),B.JH,o,o,B.n),B.bd,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aFt,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aW(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jM.j(0.6),o,o,new A.bq(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.pU,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aWe,u,D.bSJ,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dk,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aFv(o),D.eJo),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aSY(p.y,r,G.ir,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.r,o,o,o,o,o,2,A.br(o,B.ey,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ir.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f67,!0,B.a5,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ir.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.D(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.w,o,o,o,o,o,2,A.br(o,B.ey,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ir.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.eYk,!0,B.a5,B.ze,B.am,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.f60,o,o,o),B.at,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ir.j(0.5),o,o,o,o,o,o,o,o,11,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.D(A.p(o,o,B.f,D.Eo.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fo,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.Eo.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.D(A.p(o,o,B.f,D.Eo.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aA],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.ir.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Xa(A.dr(A.a([A.dr(o,o,o,o,o,o,o,o,o,D.f0p,B.a.ap(k,0,1)),A.dr(o,o,o,o,o,o,o,o,o,o,B.a.b0(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.ir.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.v(n,B.F,o,B.e,B.j,0,B.p),B.r,o,B.y,o,o,o,o,B.ah)}s.push(A.D(n,1))
s.push(new A.C(B.ia,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.ir.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.A(A.a([u,A.D(A.p(o,A.bw(B.JH,new A.an(B.W,o,B.aa,B.r,A.a([t,new A.C(D.bss,A.v(s,B.aj,o,B.e,B.j,0,B.p),o),A.ao(0,A.c_(o,new A.o(o,o,o,o,o,new A.a8(B.a3,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bd),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.JH,v,D.bTf,B.n),o,o,o,o,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.r,l,o)}}
C.aok.prototype={
T(){return new C.aC2(A.a([],x._))},
bp(){return this.r.$0()},
px(){return this.w.$0()},
gdX(){return this.c}}
C.aC2.prototype={
a_(){var w,v
this.a1()
this.vz()
w=this.a
v=w.c
if(v.length!==0)C.a6o(v,w.e,w.d.w)},
vo(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fWZ(r,t.e,!1,s.w,new C.dRL(u),null,s),$async$vo)
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
return A.b(C.fWZ(r,t.e,!0,s.w,new C.dRK(u),null,s),$async$ZQ)
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
return A.b(C.G0(q.a.c).cM(0,B.py),$async$vz)
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
NW(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$NW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.R(D.eN0)
w=3
return A.b(C.G0(t.a.c),$async$NW)
case 3:r=e
w=4
return A.b(C.fCM(t.a.c,r),$async$NW)
case 4:q=e
w=5
return A.b(C.G0(t.a.c),$async$NW)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dRJ(t,p))
o=t.c.I(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(null,null,null,q?B.dw:B.cR,null,B.r,null,s,null,B.md,null,null,null,null,null,null,null,null,null,null))
t.a.px()
case 1:return A.h(u,v)}})
return A.i($async$NW,v)},
Hu(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Hu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i33(l),$async$Hu)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hxO(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aYz(q,p.e,l,"Each family tree costs $"+B.k.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Hu)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hf_(r)
o=Date.now()
n=t.a.c
m=new C.ky(l,r.toUpperCase(),p,!0,B.T,D.BR,new A.S(o,0,!1),0,n,D.tB)
w=5
return A.b(C.a1V(n,m),$async$Hu)
case 5:w=6
return A.b(t.vz(),$async$Hu)
case 6:t.a.bp()
t.a.px()
if(t.c==null){w=1
break}t.E3(m)
case 1:return A.h(u,v)}})
return A.i($async$Hu,v)},
E3(d){return this.cbE(d)},
cbE(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$E3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Ah(u.a.c),$async$E3)
case 2:n=l.r2(k.dH(f,new C.dRM(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hv(m,new C.aoe(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$E3)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a1V(u.a.c,o),$async$E3)
case 6:case 5:w=7
return A.b(u.vz(),$async$E3)
case 7:u.a.px()
return A.h(null,v)}})
return A.i($async$E3,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.ty(p)
if(r.e)return A.av(A.mE(q,p?B.bq:B.bn,q,q,q,q,q,q,q,q),q,q,q)
if(J.cl(r.d)){w=p?B.dX:B.c
v=A.m(15)
u=A.aG(!1,B.a1,!0,q,A.aL(!1,q,!0,A.p(q,D.bG6,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.q,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcaI(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aB,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.F3(A.p(q,A.v(A.a([u,B.aP,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bn,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.e1,A.bJ(D.fsX,r.gaP6(),A.bk(B.bU,q,q,q,q,q,Al.Y9,q,new A.b7(A.m(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bso,q,q,1/0),15,B.af,1.05,D.a82,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aB,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b4],v)
if(J.cy(r.d))w.push(A.aH(q,q,q,q,A.W(B.yc,B.aV,q,q,q,q),q,q,q,new C.dRR(r),q,q,q,q,"Sync family trees with database",q))
if(J.cy(r.d))w.push(A.aH(q,q,q,q,A.W(B.y3,B.aV,q,q,q,q),q,q,q,r.gaev(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dq(E.amx,D.f9u,r.gaP6(),A.bk(B.bU,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.F3(r.cxN(J.q(r.d,s),o),14,B.af,1,D.a82,q))
B.d.v(w,u)}return A.v(A.a([p,B.aA,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cxN(d,e){var w=null,v=e.a,u=v?B.dX:B.c,t=A.m(14),s=A.I((v?B.dZ:B.bR).j(0.55),B.q,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.ej,10)],x.V),q=A.m(14),p=A.p(w,D.bFa,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gans(),m=d.d?"":" \xb7 Public",l=d.y===D.ki?" \xb7 View only":"",k=x.p
l=A.D(A.v(A.a([o,B.bA,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aG(!1,B.a1,!0,w,A.aL(!1,q,!0,new A.C(B.bC,A.A(A.a([p,B.bf,l,A.W(B.Mk,v?B.bq:B.bn,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dRQ(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aoe.prototype={
T(){return new C.aC_(A.a([],x._),A.aX(x.N),A.b6d())},
bp(){return this.r.$0()},
gdX(){return this.c}}
C.aC_.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.abq()
w=u.a
v=w.c
if(v.length!==0)C.a6o(v,w.e,w.d.w)},
q(){var w=this.w
w.S$=$.aw()
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
return A.b(A.ca(null,null,!0,null,new C.dRb(r),s,null,!0,!0,x.y),$async$a1L)
case 3:if(e!==!0||t.c==null){w=1
break}t.IZ()
t.m(new C.dRc(t,r))
w=4
return A.b(t.vq(),$async$a1L)
case 4:t.a.bp()
t.xq(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a1L,v)},
cnP(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.x1$.push(new C.dR6(w,f,d,e))},
aRh(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dl()
u.e2(w,v,0,1)
u.jA(q,q,1,1)
this.w.sp(0,u)},
b7S(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eH(new Float64Array(16))
q.dY(r)
w=q.Cd()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dl()
t.e2(r,u,0,1)
t.jA(v,v,1,1)
t.e2(-r,-u,0,1)
t.is(0,q)
s.sp(0,t)},
abq(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$abq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Ah(u.a.c),$async$abq)
case 2:t=s.r2(r.dH(e,new C.dQF(u)))
if(t!=null&&u.c!=null)u.m(new C.dQG(u,t))
return A.h(null,v)}})
return A.i($async$abq,v)},
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
return A.b(C.fWZ(o,t,!1,r,new C.dQU(u),q.a,s),$async$vo)
case 2:n=A
m=J
w=3
return A.b(C.G0(u.a.c),$async$vo)
case 3:p=n.r2(m.dH(e,new C.dQV(u)))
if(p!=null&&u.c!=null)u.m(new C.dQW(u,p))
return A.h(null,v)}})
return A.i($async$vo,v)},
IZ(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cA(w,0)},
vq(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a1V(t,s),$async$vq)
case 2:return A.h(null,v)}})
return A.i($async$vq,v)},
a0l(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0l=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tJ(q,t.a.c)){t.xq("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.i4c(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a0l)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.IZ()
t.m(new C.dR5(t,r))
w=4
return A.b(t.vq(),$async$a0l)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0l,v)},
a_3(){return this.cbG()},
cbG(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tJ(q,t.a.c)){t.xq("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.P(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dR3(r,new C.ty(q.ax.a===B.I)),s,null,!0,!0,x.y),$async$a_3)
case 3:if(e!==!0||t.c==null){w=1
break}t.IZ()
t.m(new C.dR4(r,t))
w=4
return A.b(t.vq(),$async$a_3)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_3,v)},
V6(d){return this.bxt(d)},
bxt(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$V6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tJ(r,t.a.c)){t.xq("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dQt(t,d),r,null,!0,!0,x.P),$async$V6)
case 3:s=f
if(s==null){w=1
break}t.IZ()
t.m(new C.dQu(t,s))
w=4
return A.b(t.vq(),$async$V6)
case 4:case 1:return A.h(u,v)}})
return A.i($async$V6,v)},
a26(d){return this.czU(d)},
czU(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a26=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.ca(null,null,!0,null,new C.dRe(u,d,new C.ty(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a26)
case 2:return A.h(null,v)}})
return A.i($async$a26,v)},
c7Z(d){var w=this,v=w.d
v===$&&A.c()
if(C.tJ(v,w.a.c))w.NB(d)
else w.a26(d)},
agY(d,e){return this.crF(d,e)},
crF(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$agY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.dR8(new C.ty(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$agY)
case 3:case 1:return A.h(u,v)}})
return A.i($async$agY,v)},
Hz(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Hz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.ki?3:5
break
case 3:w=6
return A.b(C.fKW(t.a.c),$async$Hz)
case 6:s=e
o=t.a
r=C.h3D(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.agY(!s,!r),$async$Hz)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bzM(o,t.a.c)){t.xq("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.l_(o,"Cancel","Remove",q.y===D.ki?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Hz)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aNw(t.a.c,t.d.a),$async$Hz)
case 11:t.a.bp()
o=t.c
if(o==null){w=1
break}A.iL(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Hz,v)},
a90(d){return this.bIu(d)},
bIu(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a90=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tJ(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b7(s,new C.dQv(p))){o=A.U(s)
p.a=A.r2(new A.cQ(new A.a2(s,new C.dQw(d),o.k("a2<1>")),new C.dQx(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.IZ()
t.m(new C.dQy(t,s,d,q))
w=3
return A.b(t.vq(),$async$a90)
case 3:t.xq(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a90,v)},
NB(d){return this.bKy(d)},
bKy(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tJ(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a26(d),$async$NB)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.dQC(t,d),r,null,!0,!0,x.P),$async$NB)
case 6:s=f
if(s==null){w=1
break}t.IZ()
t.m(new C.dQD(t,s))
w=7
return A.b(t.vq(),$async$NB)
case 7:case 1:return A.h(u,v)}})
return A.i($async$NB,v)},
cy8(){var w=this,v=w.d
v===$&&A.c()
if(!C.tJ(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dRd(w))
w.vq()},
XV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$XV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bzM(n,t.a.c)){t.xq("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.aw()
r=new A.ar(B.as,s)
q=t.d.e
p=A.bl(new A.K(q,t.gc6u(),A.U(q).k("K<1,n>")).c_(0,new C.dQP()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dQQ(t,new C.ty(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$XV)
case 3:o=e
r.S$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.IZ()
t.m(new C.dQR(t,p))
w=4
return A.b(t.vq(),$async$XV)
case 4:t.xq("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$XV,v)},
c6v(d){return B.a.i(d.toLowerCase())},
cat(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tJ(v,w)
t=r.d
s=C.hUx(t)
C.i37(q,t.b,u,C.hUw(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.ty(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a2(l,new C.dRl(),A.U(l).k("a2<1>")).gM(0)
l=n?B.bX:B.iM
v=A.W(B.Zk,n?B.bq:B.bn,o,o,o,18)
u=x.p
v=A.a([new A.C(B.AJ,A.aL(!1,o,!0,new A.C(B.hI,A.A(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dRm(p,d),o,o,o,o,o,o,o),o),new A.C(B.n4,p.bVi(m),o)],u)
if(p.d.y===D.ki){t=B.rd.j(0.15)
s=A.m(12)
r=A.I(B.rd.j(0.45),B.q,1)
q=C.FZ(p.d,p.a.c)
v.push(new A.C(B.xn,A.p(o,A.A(A.a([D.bKk,B.av,A.D(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.ix,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b4],u)
if(C.tJ(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Jj("Undo",B.r1,p.gcy7(),m,o,o))
u.push(new C.Jj("Family Book",D.bzV,p.gcas(),m,B.t2,o))
if(C.tJ(p.d,p.a.c))u.push(new C.Jj("Display settings",B.Bt,p.gcbF(),m,B.aZ,o))
u.push(new C.Jj("Sync",B.y3,p.gaev(),m,o,o))
t=p.d
if(t.y===D.ki||C.bzM(t,p.a.c)){t=p.d.y===D.ki?"Remove shared tree":"Delete tree"
u.push(new C.Jj(t,B.e4,p.gbIE(),m,B.fY,o))}if(C.tJ(p.d,p.a.c))u.push(new C.Jj("Add member",B.vu,new C.dRn(p),m,B.bU,o))
v.push(new A.C(R.agA,A.A(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gans()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.co(new C.dRo(p,m))
v.push(A.D(n,1))
if(w>0){n=p.f
u=A.W(n?K.Zo:Y.Ml,o,o,o,o,o)
v.push(A.av(A.hc(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dRp(p),o),o,o,o))}return A.c8(o,l,A.bm(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bVi(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fu.j(0.35),B.dk,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.W(B.xW,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a1,!0,m,A.aL(!1,m,!0,A.p(m,D.bNm,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.q,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gaev(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.eWJ,m,m,m)
r=r.gans()
p=n.d.gans()===1?"member":"members"
o=x.p
p=A.a([s,B.bf,A.D(A.v(A.a([q,B.bA,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tJ(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bKw,m,m,m,n.gcle(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jh:B.ml
r=r?"Private":"Public"
r=A.D(n.atK(q,"Privacy",r,n.a.d.w?n.gcx8():m),1)
q=A.D(n.atK(B.y4,"Tree code",n.d.c,new C.dQE(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.A(A.a([r,B.ab,q,B.ab,A.D(n.atK(D.bBD,"Collaborators",p,n.gbZK()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.ki){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aG(!1,B.a1,!0,A.m(999),A.aL(!1,A.m(999),!0,new A.C(B.fH,A.A(A.a([A.W(B.oF,B.c,m,m,m,14),B.eb,A.d("View only",m,m,m,m,m,m,B.aOn,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ag)],o))}return A.p(m,A.bw(u,new A.an(B.W,m,B.aa,B.r,A.a([t,new A.C(B.F0,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bRf,B.n),m,m,m,m,m,m,m,1/0)},
atK(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a1,!0,A.m(14),A.aL(!1,A.m(14),!0,new A.C(L.ahI,A.v(A.a([A.W(d,B.c,w,w,w,18),B.at,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.uq,A.d(f,w,1,B.a2,w,w,w,P.zi,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)}}
C.bcQ.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gam(r)&&s.c.length===0)return B.bH
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bcT(s,t),new A.at(w,v))],x.p)
r=r.gdK(r)
B.d.v(u,r.dt(r,new C.d4D(this),x.l))
r=s.c
B.d.v(u,new A.K(r,new C.d4E(this),A.U(r).k("K<1,r>")))
return new A.C(B.tx,new A.a7(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.Jw.prototype={}
C.Ff.prototype={}
C.bcS.prototype={
gbgm(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aHA.prototype={}
C.bcT.prototype={
bKg(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
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
t.E(new A.pr(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.pr(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bF())
q=A.M()
q.r=B.c.gp(0)
d.ai(new A.u(u,w),9,q)
q=A.M()
q.r=B.bz.gp(0)
d.aP(t,q)},
bKe(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.d4Y())
w=f.b
v=w+(B.d.gK(a0).b-w)/2
u=B.d.b7(a0,new C.d4Z(f))
t=new A.K(a0,new C.d5_(f),A.U(a0).k("K<1,N>")).c_(0,new C.d50()).cI(0,1/0,B.wB)
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
g=new A.aQ(l.r,B.ap,null,null,h)
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
if(r!=null&&r.length!==0)this.bKe(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bKg(d,w,q.a,q.b)}},
aq(d){return d.b!==this.b}}
C.bgy.prototype={
gc4j(){var w=this.c
if(B.a.i(w.y).length!==0)return D.ddE
switch(w.c.a){case 0:return D.cIL
case 1:return D.cTC
case 2:return D.d8e}},
gc4m(){var w=this.c,v=C.hen(w.w),u=C.hen(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc4j(),p=t.c,o=I.bAG(p.f),n=t.gc4m(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.aB:B.c,j=A.I(r?B.aB:B.c,B.q,2)
if(o!=null)w=A.rZ(B.A,s,B.co,B.bQ,!1,s,o,!1,s,s)
else{w=A.a([B.d.gK(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a3,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hS(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.ax,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.Fg,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.aB:B.c,B.q,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.f5D,s,s,s),B.f,s,s,new A.o(B.c8,s,w,j,s,s,B.n),s,s,s,s,D.buf,s,s,s),s,s,s,-6,-4,s))}k=r?B.cC:B.c
j=A.m(8)
w=A.I(B.d.gK(q).j(0.35),B.q,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dD,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cC,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bn,s,s,s,s,s,s,s,s,7.5,s,s,B.a4,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aE(s,new A.a7(84,112,A.v(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.at,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.aY7,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.buq,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a8)}}
C.bbX.prototype={
a5(d,e){var w,v,u,t,s,r,q
$.X()
w=A.M()
v=this.b
u=v?B.c:D.b8N
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
aq(d){return d.b!==this.b}}
C.bu8.prototype={
B(d){var w=this,v=null,u=new C.f6j(w),t=w.c,s=t?B.cC:B.c,r=A.m(12),q=u.$3(B.hx,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bF:B.f8,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.y0,"Zoom out",w.e)
return A.aG(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.f,t?B.bF:B.f8,v,v,v,1,v,v,v,v,v,22),u.$3(B.ak2,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dn,v,v,v,B.ag)}}
C.bjU.prototype={
B(d){var w=this,v=null,u=B.bU.j(0.15),t=A.I(B.bU,B.q,2),s=w.e,r=x.p
t=A.aE(v,A.p(v,A.v(A.a([A.W(s?K.Zo:Y.Ml,B.bU,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.f2_,v,v,v)],r),B.m,v,B.bb,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a8)
u=A.a([t,B.an,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.f0_,B.L,v,v)],r)
if(s){t=A.a([B.an],r)
s=w.d
B.d.v(t,new A.K(s,new C.eIB(w),A.U(s).k("K<1,r>")))
B.d.v(u,t)}return new A.a7(84,v,A.v(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.Zf.prototype={
T(){return new C.aAr()},
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
if(t==null)w=C.hW4(w.r,w.f)
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
OY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$OY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.h3D(p.y,p.w)
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
return A.b(C.aYz(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$OY)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hxP(p.y,p.w)
t.a.bp()
case 5:w=7
return A.b(An.G9(78,800),$async$OY)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dkQ(t,q))
case 1:return A.h(u,v)}})
return A.i($async$OY,v)},
c4l(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
s=v.aCv(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).O(s)},
a8C(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a8C=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dkP(r),s,null,!0,!0,x.y),$async$a8C)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a8C,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.ty(j),h=l.a.e,g=A.U(h).k("a2<1>"),f=A.B(new A.a2(h,new C.dkZ(l),g),g.k("J.E"))
h=j?B.dX:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bsK,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.aB,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hp(A.aL(!1,k,!0,new A.C(B.lJ,A.W(B.e4,B.os,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbFk(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jt:B.iP
t=I.bAG(l.as)
if(l.as==null)s=A.W(B.ox,j?B.bq:B.bn,k,k,k,40)
else s=k
s=A.av(A.aE(k,new A.an(B.W,k,B.aa,B.r,A.a([A.hq(u,t,s,k,42),A.ao(0,A.hq(B.bU,k,D.bEf,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc4i(),k,k,k,k,k,k,!1,B.a8),k,k,k)
t=l.d
t===$&&A.c()
t=C.aAt(t,"Full name",B.mi,1,1,i,B.lX)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.S,new C.bgw(i,u,new C.dl_(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bmm],q)
o=l.a.e
B.d.v(p,new A.K(o,new C.dl0(),A.U(o).k("K<1,eR<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bmo],q)
B.d.v(q,new A.K(f,new C.dl2(),A.U(f).k("K<1,eR<n?>>")))
o=A.v(A.a([t,B.an,new C.acc(i,r,"Who is their parent?",p,new C.dl3(l),k,o),B.aA,n,B.an,new C.acc(i,m,"Who is their spouse / partner?",q,new C.dl4(l),k,o)],v),B.aj,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aAt(q,"Birth date",D.aj6,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aAt(m,"Birth place",B.ZD,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aAt(n,"Date of death (if deceased)",D.aln,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aAt(p,"Occupation",B.a_H,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.r,w,k),B.aA,s,B.bx,new C.acd(i,"Identity",u,k),B.ac,new C.acd(i,"Family links",o,k),B.ac,new C.acd(i,"Life details",A.v(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aAt(r,"Notes",B.kL,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aAs(i,"Child order",l.cbT(l.at),new C.dl5(l),new C.dl6(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fUo(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dl7(l):k
B.d.v(r,A.a([B.S,new C.aAs(i,"Visible in tree",u,w,new C.dl8(l),k)],v))}r.push(B.S)
w=j?B.jt:B.iP
u=A.m(14)
t=A.I(j?B.dZ:B.bR,B.q,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iD(k,B.bU,k,B.af,k,new C.dl9(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.agb,k,k,k))
r.push(B.bx)
w=j?B.aQ:B.aB
j=j?B.dZ:B.bR
r.push(A.A(A.a([A.D(A.dV(B.nq,new C.dl1(d),A.de(k,k,k,k,k,k,k,k,k,w,k,k,B.cf,k,new A.b7(A.m(14),B.Y),new A.aA(j,1,B.q,-1),k,k,k,k)),1),B.bf,A.D(A.bJ(D.eFP,l.gc4k(),A.bk(B.aV,k,k,0,B.c,k,B.cf,k,new A.b7(A.m(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.at)
return A.ej(B.ha,k,B.af,h,new A.a7(420,k,A.cd(A.v(r,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),k),D.ah3,k,B.agr,new A.b7(g,B.Y),k,k)},
cbT(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.acd.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jt:B.iP,s=A.m(16)
return A.v(A.a([new A.C(D.ahs,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.dZ:B.bR,B.q,1),s,w,w,B.n),w,w,w,w,B.bk,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bgx.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dX:B.c,r=A.m(12),q=A.I((t?B.dZ:B.bR).j(0.85),B.q,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aQ:B.aB,u,u,u,u,u,u,u,u,14,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.T,!1,u,!0,B.r,u,A.aN(),v.d,u,u,u,u,u,2,A.br(u,B.ey,u,B.v9,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bq:B.bn,u,u,u,u,u,u,u,u,u,u,u,B.cv,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.W(v.f,B.bU,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ai,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.acc.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dX:B.c,s=A.m(12),r=A.I((u?B.dZ:B.bR).j(0.85),B.q,1),q=A.W(B.qW,u?B.bq:B.bn,v,v,v,v),p=A.l(v,v,u?B.aQ:B.aB,v,v,v,v,v,v,v,v,14,v,v,B.a4,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dX:B.c
return A.p(v,new A.Dc(A.a3x(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,v,v,v,B.cv,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.l7,v,v,v)}}
C.bgw.prototype={
B(d){var w=new C.dla(this)
return A.A(A.a([w.$3(D.YX,"Male",B.N6),B.ab,w.$3(D.aik,"Female",B.MS),B.ab,w.$3(D.xA,"Other",B.na)],x.p),B.m,null,B.e,B.j,0,null,null)}}
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
C.ace.prototype={
bNW(d){switch(d.a){case 0:return B.bU
case 1:return B.bz
case 2:return B.cU}},
bNX(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aVu(d){var w,v,u,t
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
ad_(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jt:B.iP,s=A.m(16),r=A.I(v?B.dZ:B.bR,B.q,1)
return A.v(A.a([new A.C(D.ahs,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bS,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hj3(r,q),o=q.c,n=t.bNW(o),m=I.bAG(q.f),l=t.e.a,k=l?B.dX:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aQ:B.aB,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.ki?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bq:B.bn,s,s,s,s,s,s,s,s,12,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.q,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.hq(u,m,m==null?A.W(B.ox,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.en,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.q,1)
v=A.av(A.p(s,A.d(t.bNX(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mg,s,s,s),s,s,s)
u=x.p
i=A.a([t.zP("Full name",i,B.mi)],u)
if(p>0)i.push(t.zP("Child order","#"+p,B.MZ))
r=A.a([h,B.at,r,B.aP,l,B.S,v,B.bx,t.ad_("Identity",i),B.ac,t.ad_("Life details",A.a([t.zP("Birth date",q.w,D.aj6),t.zP("Birth place",q.x,B.ZD),t.zP("Date of death",q.y,D.aln),t.zP("Occupation",q.z,B.a_H)],u)),B.ac,t.ad_("Family links",A.a([t.zP("1. Parent",t.aVu(q.d),B.Fu),t.zP("2. Spouse",t.aVu(q.e),B.MR)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.ad_("Notes",A.a([t.zP("Notes",q,B.kL)],u))],u))
r.push(B.bx)
r.push(A.bJ(B.IQ,new C.dlk(d),A.bk(B.aV,s,s,s,s,s,B.cf,s,new A.b7(A.m(14),B.Y),s,s,s)))
return A.eG(s,k,new A.cU(B.lw,A.cd(A.v(r,B.aj,s,B.e,B.Q,0,B.p),B.r,s,B.y,s,B.xp,s,s,B.ah),s),s,s,s,B.F3,B.d0,s,new A.b7(j,B.Y),s)}}
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
w=A.B(new A.K(w,new C.c6Q(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iV(w,new C.c6R(),t,x.U))
return s}}
C.aoi.prototype={
T(){return new C.aC1(A.a([],x.bF))},
gdc(){return this.c}}
C.aC1.prototype={
a_(){this.a1()
this.J5()},
J5(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$J5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c6U(t.a.c),$async$J5)
case 3:r=e
w=4
return A.b(C.Ah(t.a.c),$async$J5)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qJ(q,new C.dRy(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dRz(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$J5,v)},
xX(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
JO(d,e){return this.cAt(d,e)},
cAt(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$JO=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dRD(q,e))
t=3
w=6
return A.b(d.$0(),$async$JO)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dRE(q))
$.eT.mh()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JO,v)},
WL(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oX(r,s.c,s.e),$async$WL)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JO(new C.dRv(t),"Preparing download\u2026"),$async$WL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WL,v)},
WP(d){return this.bLY(d)},
bLY(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oX(r,s.c,s.e),$async$WP)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.JO(new C.dRw(t,d),"Preparing file\u2026"),$async$WP)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WP,v)},
aeS(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aeS=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wQ.c5().Lx(B.PX,B.tC,!0),$async$aeS)
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
return A.i($async$aeS,v)},
Xp(d){return this.bWb(d)},
bWb(d){var w=0,v=A.j(x.H),u=this
var $async$Xp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.JO(new C.dRx(u,d),"Restoring family trees\u2026"),$async$Xp)
case 2:return A.h(null,v)}})
return A.i($async$Xp,v)},
Xo(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Xo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.aeS(),$async$Xo)
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
return A.b(t.JO(new C.dRC(t),"Creating QR code\u2026"),$async$a1b)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1b,v)},
a0N(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0N=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Ct()){t.xX("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).c6(A.e7(new C.dRA(),!0,null,x.N)),$async$a0N)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Xp(r),$async$a0N)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0N,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.A9:B.iM,m=o?D.aeK:B.aQ,l=o?B.aK:B.bR,k=o?B.aQ:B.aB,j=new C.d51(n,m,l,k,o?B.bJ:B.bn)
l=A.aH(p,p,p,p,A.W(B.eA,k,p,p,p,20),p,p,p,new C.dRG(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eF(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.D(C.d4A(!0,B.jj,B.aU,B.aU,q.r?p:q.gcrt(),j,s,"Show restore QR"),1),B.av],u))}s=q.e
r=q.r?p:q.gcnK()
t.push(A.D(C.d4A(!s,B.iU,B.b5,B.by,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.D(C.d4A(!1,B.hz,B.aV,B.bU,q.r?p:q.gbLR(),j,"Photos & books included","Download all trees"),1),B.av],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.D(C.d4A(!1,M.y7,B.aH,B.aM,q.r?p:q.gbW8(),j,s,"Upload backup file"),1))
l=A.a([new C.bcR(v,l,p),B.kt,new C.abv(j,"QR restore",p),B.S,t,B.d5,new C.abv(j,"Backup files",p),B.S,A.A(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kt,new C.abv(j,"One tree",p),B.S],u)
B.d.v(v,J.b6(q.d,new C.dRH(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cB(l,p,B.Y5,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aV.j(0.35),B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dk,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.p(p,A.A(A.a([K.aMR,B.bf,A.D(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.AQ,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c8(w,n,new A.an(B.W,p,B.aa,B.r,l,p),p,!1,!1,p,p)}}
C.d51.prototype={}
C.bcR.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.k0,28)],x.V)
t=A.ao(p,A.W(B.tT,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.r,A.a([t,new A.C(B.a9,A.A(A.a([A.p(p,D.bMV,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.q,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.o8,A.D(A.v(A.a([D.fas,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bUp,B.n),p,p,p,p,p,p,p,p)}}
C.abv.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bcP.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aU.j(0.4):m.c
k=A.I(k,B.q,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aU.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.I(t.j(0.35),B.q,1)
return A.aG(!1,B.a1,!0,q,A.aL(!1,o,!0,A.ez(A.db(new A.C(E.XL,A.v(A.a([A.p(q,A.W(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qQ,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bA,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cv,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)}}
C.bcU.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.q,1),q=B.aV.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,A.ez(new A.C(B.eP,A.A(A.a([A.p(v,D.bM8,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.q,1),p,v,v,B.n),v,v,v,v,B.qQ,v,v,v),B.bf,A.D(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.W(B.hz,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)}}
C.ZA.prototype={
T(){return new C.aC0()},
gdc(){return this.c}}
C.aC0.prototype={
a_(){this.a1()
this.a88()},
a88(){var w=0,v=A.j(x.H),u=this,t
var $async$a88=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b0c(u.a.c,B.Cr),$async$a88)
case 2:t=e
if(u.c!=null)u.m(new C.dRq(u,t))
return A.h(null,v)}})
return A.i($async$a88,v)},
age(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$age=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dRr(q))
t=4
p=A.h5g(q.a.d,B.Cr)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.V(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.aqw(n.e,m,l,B.Cr,p,n.f),$async$age)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dRs(q))
q.c.I(x.q).f.R(D.eO9)
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
if(q.c!=null)q.m(new C.dRt(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$age,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.j6:B.pq,n=p?B.i6:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eF(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fpO,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.pC(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.D(A.p(q,A.v(A.a([B.P,u,B.bx,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.bb,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bv,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcns()
if(u)u=B.Ir
else u=A.W(r.e===!0?B.hy:B.aj5,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a7(1/0,q,A.eB(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cc,q,q,q),t,A.de(q,q,q,q,q,q,q,q,q,B.aV,q,B.fM,q,q,q,new A.aA(B.aV.j(0.55),1,B.q,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.ia,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.az:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.S)
w.push(new A.a7(1/0,q,A.bJ(B.zm,new C.dRu(d),A.bk(B.aV,q,q,q,q,B.fM,q,q,q,q,q,q)),q))
return A.c8(m,o,new A.C(B.a9,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.ZB.prototype={
T(){return new C.bi0(A.yP(B.xa,B.nx,B.tY))}}
C.bi0.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c8(A.eF(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fi5,w,w,w,1,w,!0),B.w,A.yO(this.d,B.bQ,new C.dRI(this,d)),w,!1,!1,w,w)}}
C.aX7.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Pr,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lv.prototype={}
C.a5q.prototype={
T(){return new C.bhH(null,null)}}
C.bhH.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.tq,v,1,v,w)
w.e=A.bj(v,B.px,v,1,v,w)
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
this.bsT()},
B(d){var w,v,u=this,t=B.d.dL(D.a2n,new C.dCS(u),new C.dCT())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cs5(A.c6(new A.h3(A.a([w,v],x.dS)),new C.dCU(u,t),null),!0)}}
C.bhG.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aZJ(d,e)
break
case"house":p.lW(d,e,D.cY1)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gef()
$.X()
t=A.M()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ai(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.m0(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Az(d,e,12)
p.xA(d,e,B.l1,5,14)
break
case"grocery":p.ccC(d,e)
break
case"calculator":p.ccj(d,e)
break
case"lumber":p.ccK(d,e)
break
case"kitchen":p.ccF(d,e)
break
case"landscape":p.lW(d,e,D.cYx)
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
s.E(new A.bF())
w=A.M()
w.r=B.ff.j(0.85).gp(0)
d.aP(s,w)
p.Az(d,e,8)
p.xA(d,e,B.iR,4,18)
break
case"plumbing":p.ccT(d,e)
break
case"electrical":p.lW(d,e,D.d7y)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.X()
u=A.M()
u.r=B.c.j(q*0.12).gp(0)
d.aY(new A.aa(0,0,0+e.a,0+e.b),u)
p.m0(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.m0(d,e,B.lB.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Az(d,e,10)
break
case"store":p.cd1(d,e)
break
case"paint_remodel":p.ccO(d,e)
break
case"roofing":p.ccV(d,e)
break
case"warehouse":p.cd8(d,e)
break
case"vehicles":p.cd6(d,e)
break
case"farm":p.ccw(d,e)
break
case"restaurant":p.ccU(d,e)
break
case"tools":p.cd4(d,e)
break
case"wallet":p.cd7(d,e)
break
case"concrete":p.ccp(d,e)
break
case"blueprint":p.cch(d,e)
break
default:p.aZJ(d,e)}},
lW(d,e,f){var w,v=new A.aa(0,0,0+e.a,0+e.b)
$.X()
w=A.M()
w.sau(new A.a8(B.ax,B.aC,B.x,f,null,null).aw(0,v))
d.aY(v,w)},
m0(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.gef()/2-h
$.X()
w=A.M()
w.b=B.ae
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bW(q,p)
r=w.H()
v.drawArc.apply(v,[A.c4(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
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
Az(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aZJ(d,e){var w,v=this
v.lW(d,e,D.d6i)
w=v.c
v.m0(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.m0(d,e,B.bK.j(0.45),-w*3.141592653589793*1.4,22)
v.bKa(d,e,B.hU,w)
v.xA(d,e,B.c.j(0.7),6,8)},
bKa(d,e,f,g){var w,v,u,t,s,r,q,p
$.X()
w=A.M()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c4(new A.aa(16,q,t,q+3)),p)
p.delete()}},
ccC(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lW(d,e,D.ceQ)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.X()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.cWo[B.o.F(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.m0(d,e,B.c.j(0.35),w,16)
j.xA(d,e,B.iR,5,12)},
ccj(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lW(d,e,D.ceX)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gef()
$.X()
q=A.M()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ai(new A.u(t/2,s/2),r*(0.18+u*0.08),q)
p=A.ij(g,g,g,g,g,B.a5,B.ch,g,B.eq,B.cd)
for(o=0;o<6;++o){n=v+o*0.9
r=D.d_2[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saV(0,new A.ep(r,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eP()
p.a5(d,new A.u(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.ceZ[o]
l=B.k9.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saV(0,new A.ep(m,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eP()
p.a5(d,new A.u(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.m0(d,e,B.c.j(0.35),w*1.5,14)
h.m0(d,e,B.ez.j(0.55),-v*3.141592653589793*2,8)
h.m0(d,e,B.Aa.j(0.4),r*2.8,22)
h.xA(d,e,B.pg,8,10)
h.Az(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.X()
r=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
ccK(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lW(d,e,A_.auJ)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bA(new A.aa(20,q,u,q+10),B.hA)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.h1,B.oj,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.eq(p),n)
n.delete()}m.m0(d,e,B.h1.j(0.35),w,15)
m.Az(d,e,8)},
ccF(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lW(d,e,D.cWT)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.F(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.F(r*0.13,0.7)
$.X()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.H()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.m0(d,e,B.bK.j(0.4),-w*3.141592653589793*2.2,11)
j.xA(d,e,B.qw,4,14)},
ccT(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lW(d,e,D.cMq)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.X()
n=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xA(d,e,B.oq,6,12)
l.m0(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cd1(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lW(d,e,D.csg)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bA(new A.aa(q,14,q+u,22),B.ii)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.f6,B.bK,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.eq(q),o)
o.delete()}n.m0(d,e,B.c.j(0.3),w,16)
n.Az(d,e,8)
n.xA(d,e,B.uQ,5,13)},
ccO(d,e){var w,v,u,t,s,r,q,p,o
this.lW(d,e,D.cS2)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bA(new A.aa(q,p,q+8,p+(18+r*22)),B.hd)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.io,B.dy,B.bK,B.es][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.eq(p),o)
o.delete()}this.m0(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
ccV(d,e){var w,v,u,t,s,r,q,p,o
this.lW(d,e,D.cPC)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xA(d,e,B.cp,7,11)},
cd8(d,e){var w,v,u,t,s,r,q,p,o,n
this.lW(d,e,D.cuU)
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
cd6(d,e){var w,v,u,t,s,r,q,p,o
this.lW(d,e,D.dbh)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.bA(new A.aa(r,q,r+28,q+8),B.hA)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.eq(q),o)
o.delete()}this.Az(d,e,6)},
ccw(d,e){var w,v,u,t,s,r,q,p,o,n
this.lW(d,e,D.cVx)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.X()
s=A.M()
s.r=B.lB.j(0.75).gp(0)
d.ai(new A.u(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.hh.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.m0(d,e,B.lB.j(0.35),w,14)},
ccU(d,e){var w,v,u,t,s,r,q,p,o=this
o.lW(d,e,D.cXR)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cv(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c4(r),p)
p.delete()}o.xA(d,e,B.qw,5,16)
o.Az(d,e,7)},
cd4(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lW(d,e,D.d8X)
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
cd7(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lW(d,e,D.dbO)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bA(new A.aa(p,o,p+36,o+22),B.ii)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.iR,B.lB,q).gp(0)
n=p.H()
s.drawRRect(A.eq(o),n)
n.delete()}m.Az(d,e,9)
m.m0(d,e,B.c.j(0.4),w*2.2,12)},
ccp(d,e){var w,v,u,t,s,r,q,p,o,n
this.lW(d,e,D.d1G)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bW(new A.u(v,u),34)
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
cch(d,e){var w,v,u,t,s,r,q,p
this.lW(d,e,D.cYO)
$.X()
w=A.M()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.H()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.H()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.F(t*0.85,1)
$.X()
u=A.M()
u.r=B.dy.j(0.45).gp(0)
d.aY(new A.aa(0,p,0+v,p+6),u)
this.m0(d,e,B.l1.j(0.45),-t*3.141592653589793*2,11)},
aq(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
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
return A.b(C.a7F(s),$async$Zs)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$Zs,v)},
aeT(d){return this.cfn(d)},
cfn(d){var w=0,v=A.j(x.H),u=this,t
var $async$aeT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.i3h(d),$async$aeT)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$aeT,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.jt:B.iP
w=x.p
v=A.a([C.aOP(!0,B.qo,1/0,B.pF,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c_(new A.bH(B.b0,t,t,new A.C(B.v2,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.avD,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b0,B.b6,B.x,u,t,t),B.n),B.bd))}v.push(A.ao(8,A.A(A.a([A.D(A.dq(D.bG_,D.f6S,new C.cen(this,d),A.bk(B.aV,t,t,t,B.c,t,B.jx,t,t,t,t,B.c7)),1),B.ab,A.D(A.eB(D.bO7,D.fl6,this.gc6s(),A.de(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jx,t,t,D.aWE,t,t,t,B.c7)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fG(1.7777777777777777,A.aG(!1,B.a1,!0,B.qo,new A.an(B.W,t,B.b_,B.r,v,t),B.aq,s,0,t,t,t,t,t,B.ag),t)}}
C.aJW.prototype={
aQ(){this.aX()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdH())
w.b2$=null
w.a2()}}
C.aRJ.prototype={}
C.aRI.prototype={}
C.aPL.prototype={}
C.Ye.prototype={
T(){return new C.axh()}}
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
w.S$=$.aw()
w.P$=0
this.a2()},
JF(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.I(x.q).f.R(D.eOE)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).O(new C.aRJ(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.dX:B.c,k=A.m(20),j=A.p(n,D.bNN,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aQ:B.aB,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.D(A.v(A.a([i,B.bA,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bn,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.bf,i,A.aH(n,n,n,n,A.W(B.cA,m?B.bq:B.bn,n,n,n,n),n,n,n,new C.cXK(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bn,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bn,n,n,n,n,n,n,n,n,11,n,n,B.cv,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.h5w(new C.cXL(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aQ:B.aB,n,n,n,n,n,n,n,n,n,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jt:B.iP
r=A.m(12)
q=A.m(12)
p=m?B.dZ:B.bR
t=A.aM(n,B.T,!0,n,!0,B.r,n,A.aN(),u,n,n,n,n,n,2,A.br(n,new A.b4(4,r,B.dg),n,n,n,n,n,n,!0,new A.b4(4,q,new A.aA(p,1,B.q,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cXM(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,S.Iv,n,n,n,n)
u=m?B.aQ:B.aB
m=m?B.dZ:B.bR
return A.eG(n,l,new A.cU(B.lw,A.cd(A.v(A.a([j,B.aP,i,B.at,w,B.P,v,B.aP,t,B.bx,A.A(A.a([A.D(A.dV(B.de,new C.cXN(d),A.de(n,n,n,n,n,n,n,n,n,u,n,n,B.cf,n,new A.b7(A.m(12),B.Y),new A.aA(m,1,B.q,-1),n,n,n,n)),1),B.av,A.D(A.bJ(D.fll,o.ga1v(),A.bk(B.aV,n,n,n,B.c,n,B.cf,n,new A.b7(A.m(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.r,n,B.y,n,B.AR,n,n,B.ah),n),n,n,n,X.AS,B.d0,n,new A.b7(k,B.Y),n)}}
C.Yd.prototype={
T(){return new C.axg()}}
C.axg.prototype={
a_(){this.a1()
var w=$.aw()
this.d!==$&&A.aO()
this.d=new A.ar(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
JF(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.I(x.q).f.R(D.eMl)
return}v=this.c
v.toString
A.a6(v,!1).O(new C.aRI(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.dX:B.c,n=A.m(20),m=A.p(q,D.bKp,B.f,q,q,new A.o(B.bU.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aB,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.D(A.v(A.a([l,B.bA,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bn,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.bf,l,A.aH(q,q,q,q,A.W(B.cA,p?B.bq:B.bn,q,q,q,q),q,q,q,new C.cXG(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aV.j(0.25),B.q,1)
u=A.W(B.aiS,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.av,A.D(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aB,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bC,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aQ:B.aB,q,q,q,q,q,q,q,q,q,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jt:B.iP
t=A.m(12)
s=A.m(12)
r=p?B.dZ:B.bR
v=A.aM(q,B.T,!0,q,!0,B.r,q,A.aN(),w,q,q,q,q,q,2,A.br(q,new A.b4(4,t,B.dg),q,q,q,q,q,q,!0,new A.b4(4,s,new A.aA(r,1,B.q,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cXH(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.ku,q,q,q,q)
w=p?B.aQ:B.aB
p=p?B.dZ:B.bR
return A.eG(q,o,new A.cU(B.lw,A.cd(A.v(A.a([m,B.aP,l,B.aA,v,B.bx,A.A(A.a([A.D(A.dV(B.de,new C.cXI(d),A.de(q,q,q,q,q,q,q,q,q,w,q,q,B.cf,q,new A.b7(A.m(12),B.Y),new A.aA(p,1,B.q,-1),q,q,q,q)),1),B.av,A.D(A.bJ(D.frZ,this.ga1v(),A.bk(B.bU,q,q,q,B.c,q,B.cf,q,new A.b7(A.m(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.AR,q,q,B.ah),q),q,q,q,X.AS,B.d0,q,new A.b7(n,B.Y),q)}}
C.XM.prototype={
T(){return new C.aw0()}}
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
gJ0(){var w,v=this.e
v===$&&A.c()
w=A.d4(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gai1(){var w=this.f
w===$&&A.c()
w=A.d4(B.a.i(w.a.a))
return w==null?0:w},
gb1z(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aMQ(d){var w,v=B.k.D(this.gJ0()+d,0.25,999999),u=B.k.jS(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.aa(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aK(u,w,"")}t.saV(0,u)
this.m(new C.cvj())},
awo(d,e,f,g){var w=null,v=g!=null?A.W(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jt:B.iP,s=A.m(14),r=A.m(14)
u=u?B.dZ:B.bR
return A.br(w,new A.b4(4,s,B.dg),w,B.bC,w,w,w,w,!0,new A.b4(4,r,new A.aA(u,1,B.q,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.m(14),B.a9s),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c6t(d,e,f){return this.awo(d,e,f,null)},
JF(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gai1()<=0){s.c.I(x.q).f.R(D.eQv)
return}r=s.c
r.toString
v=s.gJ0()
u=s.gai1()
t=s.gb1z()
A.a6(r,!1).O(new C.aPL(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.ty(n),l=n?B.dX:B.c,k=A.m(24),j=x.O,i=A.a([B.aV.j(0.22),B.bU.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bDY,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.q,1),h,o,new A.a8(B.a3,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.D(A.v(A.a([h,B.bA,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.cv,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.bf,h,A.aH(o,o,o,o,A.W(B.cA,n?B.bq:B.bn,o,o,o,o),o,o,o,new C.cvp(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.T,!0,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.awo(m,"Item name (optional)","Lumber, paint, labor\u2026",B.N4),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,S.Iv,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jt:B.iP
t=A.m(14)
s=A.I(n?B.dZ:B.bR,B.q,1)
r=A.aH(o,o,o,o,A.W(B.y0,n?B.aQ:B.aB,o,o,o,20),o,o,o,new C.cvq(p),o,o,o,o,o,B.c7)
q=p.e
q===$&&A.c()
q=A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),q,o,o,o,o,o,2,D.bPE,B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dU,o,o,o,1,o,o,!1,"\u2022",o,new C.cvr(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a7(52,o,q,o),A.aH(o,o,o,o,A.W(B.hx,n?B.aQ:B.aB,o,o,o,20),o,o,o,new C.cvs(p),o,o,o,o,o,B.c7)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.av,A.D(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),t,o,o,o,o,o,2,p.awo(m,"Amount","0.00",B.hY),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dU,o,o,o,1,o,o,!1,"\u2022",o,new C.cvt(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.B(new A.K(D.cSu,new C.cvu(p,m),t),t.k("ak.E"))
i=A.a([i,B.bx,v,B.aA,h,B.P,s,B.ac,A.bZ(B.bB,u,B.bs,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.S,A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.c6t(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cvv(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.ku,o,o,o,o)],w))}i.push(B.aP)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bU.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJ0()===B.k.jS(p.gJ0())?B.k.N(p.gJ0()):p.gJ0()
s=p.gb1z()
r=A.Aj(p.gai1())
i.push(A.p(o,A.A(A.a([A.D(A.v(A.a([u,B.at,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bBt(p.gJ0()*p.gai1(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a3,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.jd,o,o,o))
i.push(B.bx)
j=A.m(14)
h=n?B.dZ:B.bR
h=A.de(o,o,o,o,o,o,o,o,o,o,o,o,B.cf,o,new A.b7(j,B.Y),new A.aA(h,1,B.q,-1),o,o,o,o)
i.push(A.A(A.a([A.D(A.dV(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cvw(d),h),1),B.av,A.D(A.dq(D.amq,D.fo3,p.ga1v(),A.bk(B.aV,o,o,0,B.c,o,B.cf,o,new A.b7(A.m(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eG(o,l,new A.cU(W.a9P,A.cd(A.v(i,B.aj,o,B.e,B.Q,0,B.p),B.r,o,B.y,o,Ac.qP,o,o,B.ah),o),o,o,o,B.LL,B.d0,o,new A.b7(k,B.Y),o)}}
C.a0i.prototype={
T(){return new C.bu0()}}
C.bu0.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aO()
u.d=new A.ar(new A.bb(w,B.b3,B.aN),v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.dX:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aQ:B.aB,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aQ:B.aB,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jt:B.iP
v=A.aM(s,B.T,!0,s,!0,B.r,s,A.aN(),w,s,s,s,s,s,2,A.br(s,new A.b4(4,A.m(12),B.dg),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.f5M(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.am,s,s,s,s)
u=A.D(A.dV(B.de,new C.f5N(d),s),1)
r=A.bk(B.bU,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eG(s,q,new A.C(B.AR,A.v(A.a([o,B.aA,v,B.aP,A.A(A.a([u,B.av,A.D(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.f5O(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d0,s,new A.b7(p,B.Y),s)}}
C.aay.prototype={
a4(){return"WorksheetFrameStyle."+this.b}}
C.F3.prototype={
T(){return new C.btZ(null,null)}}
C.btZ.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.bmW,null,1,null,v)
w.cH(0)
v.d!==$&&A.aO()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bvd()},
gbwE(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bU,B.aZ],x.O)
case 2:return A.a([B.bt,B.aV,B.aZ],x.O)
case 3:return A.a([B.aU,B.c8,B.jN],x.O)
case 4:return A.a([B.hv,B.bU,B.f7],x.O)
case 0:return A.a([B.aV,B.bU,B.aZ],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.et(A.c6(v,new C.f5K(this,new C.ty(w.ax.a===B.I)),null),null)}}
C.avU.prototype={
T(){return new C.bu_(null,null)}}
C.bu_.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.n_,null,1,null,v)
w.cH(0)
v.d!==$&&A.aO()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bve()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.f5L(this),null)}}
C.btY.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bA(new A.aa(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aW(w,w))
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
d.aP(u,w)
w=A.wO(u)
t=A.a([],x.f5)
w=new A.vk(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.ba(A.jR('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.GX(w,r)
w.jj()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aQa(d,q,r,o,0,0.2,4.2,0.92)
p.aQa(d,q,r,s,0.52,0.11,3.2,0.58)}},
aQa(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hr1(e.a.a,e,t,t+f*i,!0),r=A.bzP(s.gbJ().a.getBounds())
$.X()
w=A.M()
w.b=B.ae
w.c=j
w.d=B.bO
w.f=!0
v=this.f
u=k*this.e
w.sau(new A.a8(B.a3,B.a7,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.GH,null).aw(0,r))
d.aP(s,w)},
aq(d){return d.b!==this.b||d.d!==this.d}}
C.aM4.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bw()}}
C.aM5.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bw()}}
C.ty.prototype={}
C.arc.prototype={
T(){return new C.aDx()},
gdX(){return this.c}}
C.aDx.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.afJ()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.KH(w,v)
this.a2()},
afJ(){var w=0,v=A.j(x.H),u=this,t,s
var $async$afJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bzX(t.c,t.d.a),$async$afJ)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eFL(u,s))
return A.h(null,v)}})
return A.i($async$afJ,v)},
Pn(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Pn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eFC(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.KH(t,s),$async$Pn)
case 2:if(u.c!=null)u.m(new C.eFD(u))
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
return A.b(A.ca(null,null,!0,null,new C.eFJ(t,new C.ty(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$PT)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a7F(q),$async$PT)
case 6:case 5:t.m(new C.eFK(t,r))
w=7
return A.b(t.Pn(),$async$PT)
case 7:case 1:return A.h(u,v)}})
return A.i($async$PT,v)},
V0(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$V0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i32(r),$async$V0)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eFx(t,new C.qN(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Pn(),$async$V0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$V0,v)},
cbu(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hj0(t,new C.eFB(u),w,v)},
a9U(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bP(new A.aA(v,2.5,B.q,-1),B.Y,B.Y,new A.aA(B.c.j(d?0.85:0.55),2.5,B.q,-1)),D.aWq,w,w,B.n),w,22,w,w,w,w,w,22)},
a9_(d){return this.bIr(d)},
bIr(d){var w=0,v=A.j(x.H),u=this
var $async$a9_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eFA(u,d))
w=2
return A.b(u.Pn(),$async$a9_)
case 2:return A.h(null,v)}})
return A.i($async$a9_,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.bX:B.iM,d=A.m(8),a0=A.W(Q.Zl,f?B.bq:B.bn,g,g,g,16),a1=x.p
a0=A.aL(!1,d,!0,new A.C(B.Fa,A.A(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bn,g,g,g,g,g,g,g,g,g,g,g,B.a4,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eFM(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b_,B.r,A.a([A.bw(A.m(22),C.aOP(!0,A.m(22),1/0,B.pF,g,d,1/0),B.aq),A.ao(10,A.dq(D.bIu,D.fqh,h.gb_v(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eT,22),new A.ac(-4,B.G,B.bU.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.q,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bw(s,new A.an(B.W,g,B.b_,B.r,A.a([C.aOP(!0,A.m(16),1/0,B.Mw,g,r.c,1/0),A.c_(g,new A.o(g,g,g,g,g,new A.a8(B.b0,B.b6,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bd),A.ao(g,h.a9U(!0),g,g,8,g,8,g),A.ao(g,A.csQ(h.a9U(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.csQ(h.a9U(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.csQ(h.a9U(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dq(D.bEw,D.fk7,h.gb_v(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bR0,B.n),g,g,g,g,B.lJ,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.aB,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b5I,B.nD,B.h3],u):A.a([B.aZ,B.aV,B.bU],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eT,24)],t)
r=A.m(22)
p=A.ao(g,A.W(B.jz,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.q,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h5,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aA,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.an,C.bBt(h.d.gwC(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cv,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.D(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.hi.j(0.75),B.q,1.6)
t=A.a([new A.ac(0,B.G,B.aU.j(0.28),B.cJ,14)],t)
j=B.aU.j(0.22)
i=A.m(10)
u=A.p(g,A.bw(r,new A.an(B.W,g,B.aa,B.r,A.a([p,new A.C(D.brx,A.A(A.a([o,B.av,A.aG(!1,B.a1,!0,g,A.aL(!1,n,!0,A.ez(new A.C(Ah.AL,A.v(A.a([A.p(g,D.am_,B.f,g,g,new A.o(j,g,A.I(B.aU.j(0.5),B.q,1),i,g,g,B.n),g,g,g,g,B.ck,g,g,g),B.fZ,D.f9y],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcbt(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ag)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.ax,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fG(1.7777777777777777,d,g),B.aP,w,B.P,u,B.bx,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.aB,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b4,A.dq(Ak.a02,D.f7u,h.gbx6(),A.bk(B.aV,g,g,g,B.c,g,B.ix,g,new A.b7(A.m(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.dX:B.c
v=A.m(14)
u=A.I(f?B.dZ:B.bR,B.q,1)
t=A.W(B.ZG,f?B.bq:B.bn,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.aB,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.S,s,B.an,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bn,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.tA,g,g,1/0))}else B.d.v(d,new A.K(w,new C.eFN(h,new C.ty(f)),A.U(w).k("K<1,r>")))
if(h.e)d.push(new A.C(B.AE,A.av(A.mE(g,f?B.bq:B.bn,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c8(g,e,A.bm(!0,A.v(A.a([new A.C(B.AJ,a0,g),A.D(A.cd(A.v(d,B.F,g,B.e,B.j,0,B.p),B.r,g,B.y,g,E.xq,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bAI(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dX:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.aZb,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.W(s?B.hK:B.h9,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bH
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aQ:B.aB,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcQo()
v=A.Aj(d.d)
B.d.v(t,A.a([B.at,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bq:B.bn,u,u,u,u,u,u,u,u,12,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.bb,B.Q,0,B.p)}t=A.D(t,1)
k=A.a([B.aV.j(0.14),B.bU.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bBt(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a3,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.h6,u,u,u)
w=x.p
return A.p(u,A.bw(n,new A.DA(A.A(A.a([m,A.D(new A.C(B.ag4,A.A(A.a([l,B.bf,t,B.ab,k,A.aH(u,u,u,u,A.W(B.cA,(r?B.bq:B.bn).j(0.75),u,u,u,20),u,u,u,new C.eFy(this,d),u,u,u,u,u,B.c7)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.aj,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.aY3,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.dc,u,u,u,u)}}
C.acz.prototype={
DZ(d){return this.bJN(d)},
bJN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$DZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oX(d,o,!1),$async$DZ)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
w=4
return A.b(A.bN(Ab.AC,null,x.H),$async$DZ)
case 4:s=t.d
w=5
return A.b(C.fBV(!0,o,s),$async$DZ)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.FY(r,"ngmy_project_"+A.aK(s.b,q,"_"),!1),$async$DZ)
case 6:p=f
w=7
return A.b(A.oW(o,!1),$async$DZ)
case 7:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$DZ,v)},
Zt(d){return this.cru(d)},
cru(d){var w=0,v=A.j(x.H),u,t=this,s
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
Po(d){return this.cnF(d)},
cnF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Po=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(A.hv(d,D.aEX,!0,"NgmyWorksheetProjectScan",x.N),$async$Po)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bBu(s),$async$Po)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.R(D.ePE)
w=1
break}q=C.fWD(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dP(p,x.H),$async$Po)
case 5:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Po,v)},
Zu(d){return this.czp(d)},
czp(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Zu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(C.bB0(),$async$Zu)
case 3:s=f
if(s==null){w=1
break}r=C.fWD(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dP(q,x.H),$async$Zu)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Zu,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.ty(u),s=w.d.d.length,r=u?B.dX:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.k0,36)],x.V),o=x.p
return A.bm(!0,new A.C(B.va,A.p(v,A.v(A.a([w.cq5(d,t,s),new A.C(D.bqW,A.v(A.a([w.b2t(t,"QR restore"),B.S,A.A(A.a([w.aYt(t,!0,B.jj,B.aU,B.aU,new C.eFP(w,d),"Show to scan","QR code"),B.av,w.awp(t,B.iU,B.b5,B.by,new C.eFQ(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d5,w.b2t(t,"Backup files"),B.S,A.A(A.a([w.awp(t,B.hz,B.aV,B.bU,new C.eFR(w,d),"Full copy","Backup file"),B.av,w.awp(t,M.y7,B.aH,B.aM,new C.eFS(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
cq5(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eX,B.cZ,B.fu],k):A.a([B.aZ,B.aV,B.bU],k)
w=A.ao(l,A.W(B.tT,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kH,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.q,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aOP(!0,A.m(13),64,D.bzP,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aPm,l,l,l)
r=C.bBt(r.gwC(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.q,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.r,A.a([w,new A.C(D.brj,A.v(A.a([v,A.A(A.a([s,B.eB,A.D(A.v(A.a([u,B.at,t,B.P,A.A(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fJ,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.W(B.cA,B.c.j(0.85),l,l,l,l),l,l,l,new C.eFO(d),l,l,l,A.nt(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aMG,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.ax,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b2t(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bq:B.bn,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aYt(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.aeK:B.aQ
if(e)w=B.aU.j(o?0.45:0.35)
else{w=o?B.dZ:B.bR
w=w.j(o?0.8:1)}w=A.I(w,B.q,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aU.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.q,1)
t=A.p(r,A.W(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qQ,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aQ:B.aB,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.D(A.aG(!1,B.a1,!0,r,A.aL(!1,q,!0,A.ez(new A.C(E.XL,A.v(A.a([t,B.ac,u,B.bA,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bq:B.bn,r,r,r,r,r,r,r,r,11,r,r,B.cv,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
awp(d,e,f,g,h,i,j){return this.aYt(d,!1,e,f,g,h,i,j)}}
C.ar6.prototype={
T(){return new C.bjn()}}
C.bjn.prototype={
a_(){this.a1()
this.adD()},
adD(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$adD=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bBv(p.c,p.d),$async$adD)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eFs(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eFt(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adD,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.A9:B.iM,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.W(B.eA,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eFu(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.D(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zb],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eX,B.cZ,B.fu],s):A.a([B.aZ,B.aV,B.bU],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eT,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.du,B.L,h,h)
p=C.bBt(p.gwC(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.an,A.A(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fJ,h,h,h)],u),B.m,h,B.bb,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.ax,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.Y4,h,h,1/0)
t=g?D.beM:B.c
q=A.m(24)
p=A.I(w?B.aU.j(0.4):B.aV.j(0.3),B.q,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dk,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a6F,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.e34)
else{m=A.m(20)
l=A.I(B.aL,B.q,1)
o.push(A.p(h,A.pC(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bW,h,h,h))}}o.push(B.aP)
n=w?B.aU:B.aV
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aU:B.aV).j(0.35),B.q,1)
k=w?B.MO:B.Nj
k=A.W(k,w?B.aU:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.av,A.D(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a4,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.ix,h,h,h))
return A.c8(h,f,A.bm(!0,A.v(A.a([new A.C(A6.LY,e,h),A.D(A.cd(A.v(A.a([s,B.aP,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tz,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.r,h,B.y,h,E.ahd,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.arb.prototype={
T(){return new C.aDw(A.yP(B.Ld,B.nx,B.tY))}}
C.aDw.prototype={
q(){this.d.q()
this.a2()},
aKS(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iL(w,d)},
c7j(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.i12(t)
if(s!=null){this.aKS(s)
return}r=C.ha4(t)
if(r!=null)q=A.dp(r,p,0)
else q=!1
if(q){this.aKS(B.a.i(B.a.b0(r,B.a.cJ(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eF(A.a([A.aH(t,t,t,t,A.W(u.f?B.qX:A2.MU,t,t,t,t,t),t,t,t,new C.eFw(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.A9,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fk0,t,t,t,1,t,!0),q=A.yO(u.d,B.bQ,u.gc7i()),p=A.m(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.q,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c8(r,B.w,new A.an(B.W,t,B.b_,B.r,A.a([q,p,A.ao(32,A.p(t,D.fiP,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.q,1),v,t,t,B.n),t,t,t,t,B.jd,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aIh.prototype={
a4(){return"_WorksheetTab."+this.b}}
C.Nw.prototype={
T(){return new C.aDy(D.a8K,A.a([],x.D))},
bp(){return this.r.$0()},
gdX(){return this.c}}
C.aDy.prototype={
gcxo(){return J.bCE(this.e,0,new C.eGe())},
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
break}q.m(new C.eGa(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eGb(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vn,v)},
Ht(d){return this.bGC(d)},
bGB(){return this.Ht(null)},
bGC(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ht=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i34(l,d),$async$Ht)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lf(l,r,q,D.d1T,new A.S(Date.now(),0,!1))
w=4
return A.b(C.KH(t.a.c,p),$async$Ht)
case 4:o=f
w=5
return A.b(t.vn(),$async$Ht)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.R(D.eMP)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gU(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.R(D.eOy)
else n.I(q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.E2(m)
case 1:return A.h(u,v)}})
return A.i($async$Ht,v)},
E2(d){return this.cbf(d)},
cbf(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$E2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hv(s,new C.arc(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$E2)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.KH(u.a.c,t),$async$E2)
case 5:case 4:w=6
return A.b(u.vn(),$async$E2)
case 6:return A.h(null,v)}})
return A.i($async$E2,v)},
va(d){return this.bWd(d)},
bWd(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$va=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bB0(),$async$va)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hv(r,D.aEX,!0,"NgmyWorksheetProjectScan",x.N),$async$va)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bBu(q),$async$va)
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
break}p=C.fWD(s)
w=15
return A.b(C.KH(t.a.c,p),$async$va)
case 15:o=f
w=16
return A.b(t.vn(),$async$va)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.R(D.eOD)
w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.E2(p)
case 1:return A.h(u,v)}})
return A.i($async$va,v)},
Nd(d){return this.bFh(d)},
bFh(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Nd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ca(null,null,!0,null,new C.eFW(d),s,null,!0,!0,x.y),$async$Nd)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.ox(t.a.c,A.a([],x.D)),$async$Nd)
case 6:w=7
return A.b(t.vn(),$async$Nd)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eMU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Nd,v)},
cbs(d){var w=this.c
w.toString
A.bX(B.K,null,new C.eG4(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b34(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jt
else w=B.c
v=A.m(16)
u=A.I(p?B.dZ:B.bR,B.q,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.W(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bS,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aQ:B.aB,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(r,A.v(A.a([s,B.ac,t,B.bA,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bq:B.bn,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.v9,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
ZZ(d,e){return this.cbg(d,e)},
cbg(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bX(B.K,null,new C.eG_(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$ZZ)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hj0(r,new C.eG0(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Nf(d,e),$async$ZZ)
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
return A.aG(!1,B.a1,!0,u,A.aL(!1,u,!0,new A.C(B.AQ,A.A(A.a([s,B.bf,t,A.W(B.ex,w?B.bq:B.bn,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag)},
ci5(d,e,f,g,h,i){return this.b07(!1,d,e,f,g,h,i)},
Nf(d,e){return this.bFr(d,e)},
bFr(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Nf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.l_(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Nf)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bzJ(t.a.c,d.a),$async$Nf)
case 6:w=7
return A.b(t.vn(),$async$Nf)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Nf,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.ty(o),m=o?B.bX:B.iM
if(q.f)o=D.b3K
else{w=q.bzV(n)
v=q.bVj(n)
u=q.gbx0()
if(o)t=B.jt
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aP,new C.F3(A.p(p,A.A(A.a([q.azR(N.Mv,"Projects",n,D.a8K),q.azR(B.vl,"Cashier",n,D.aTT),q.azR(B.Fu,"Family Tree",n,D.fS7)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.en,0.95,u,p),B.bx],r)
w=q.d
if(w===D.a8K){w=J.ad(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aQ:B.aB,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b4,new C.avU(q.gaP0(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aA,q.ci7(n)],r))}else{o=q.a
if(w===D.aTT)u.push(new C.ane(o.c,n,p))
else{w=q.r
u.push(new C.aok(o.c,o.d,o.e,o.f,new C.eGh(q),new C.eGi(q),new A.cx(w,x.b4)))}}o=A.cd(A.v(u,B.F,p,B.e,B.j,0,B.p),B.r,p,B.y,p,Ad.LR,p,p,B.ah)}return A.c8(p,m,A.bm(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bzV(d){var w=null,v=A.m(8),u=d.a,t=A.W(Q.Zl,u?B.bq:B.bn,w,w,w,16)
return A.aL(!1,v,!0,new A.C(B.kI,A.A(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bq:B.bn,w,w,w,w,w,w,w,w,14,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eFT(this),w,w,w,w,w,w,w)},
gbx0(){switch(this.d.a){case 0:return D.a81
case 1:return D.fIT
case 2:return D.a82}},
bVj(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cw,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.bKf,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bf,D.bvA,A.aG(!1,B.a1,!0,w,A.aL(!1,A.m(12),!0,A.p(w,D.bHO,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eFX(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.m(12)
return new C.F3(A.p(w,A.v(A.a([new A.C(O.LJ,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.d(A.Aj(this.gcxo()),w,w,w,w,w,w,D.f3X,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.v8,B.jd,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.fIS,w)},
azR(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aV:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.q,2):A.I(B.K,B.q,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bq:B.bn
w=A.W(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bq:B.bn
return A.D(A.aG(!1,B.a1,!0,u,A.aL(!1,s,!0,A.dg(u,A.A(A.a([w,B.eb,new A.dm(1,B.ci,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.bb,B.j,0,u,u),u,u,B.cr,new A.o(r,u,p,q,o,u,B.n),B.iv,u,u,u,B.LU,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eGd(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),1)},
ci7(d){var w,v,u,t,s,r,q=this,p=null
if(J.cl(q.e)){w=d.a
v=w?B.dX:B.c
u=A.m(15)
t=A.p(p,D.bHT,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eT,28)],x.V),D.bTq,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.aB,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.F3(A.p(p,A.v(A.a([t,B.d5,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bn,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.e1,A.A(A.a([A.D(q.aQv(B.iU,"Scan QR",new C.eG7(q),d),1),B.av,A.D(q.aQv(M.y7,"Upload file",new C.eG8(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aA,A.bJ(D.ftP,q.gaP0(),A.bk(B.aV,p,p,p,B.c,B.fM,p,p,new A.b7(A.m(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bsn,1.05,D.a81,p)}w=J.b6(q.e,new C.eG9(q,d),x.l)
w=A.B(w,w.$ti.k("ak.E"))
return new C.F3(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bS,1,D.a81,p)},
aQv(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aV.j(0.45),B.q,1)
return A.aG(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(w,A.v(A.a([A.W(d,B.aZ,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.f2o,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.afX,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)},
ci6(d,e){var w,v,u=null,t=e.a,s=t?B.dX:B.c,r=A.m(14),q=A.I(t?B.dZ:B.bR,B.q,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.ej,10)],x.V),o=A.m(14),n=t?B.bq:B.bn
n=A.bw(B.UB,new A.fG(1.7777777777777777,C.aOP(!0,B.ft,1/0,N.Mv,n,d.c,1/0),u),B.aq)
w=x.p
v=A.D(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aQ:B.aB,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.d(""+d.d.length+" budget items \xb7 "+A.Aj(d.gwC()),u,u,u,u,u,u,D.f0y,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aG(!1,B.a1,!0,u,A.aL(!1,o,!0,A.v(A.a([n,new A.C(B.bC,A.A(A.a([v,A.aH(u,u,u,u,A.W(Ae.N7,t?B.bq:B.bn,u,u,u,u),u,u,u,new C.eG5(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eG6(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e3,u,u,u,1/0)}}
C.bvM.prototype={}
C.qN.prototype={
ae(){var w=this,v=w.c,u=w.d
return A.F(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcQo(){var w,v,u,t,s=this.c
if(s===B.k.jS(s))w=B.o.u(B.k.N(s))
else{v=B.k.aa(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aK(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lf.prototype={
gwC(){return B.d.cI(this.d,0,new C.cuK())},
ae(){var w=this,v=w.d,u=A.U(v).k("K<1,a4<n,@>>")
v=A.B(new A.K(v,new C.cuJ(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
ba5(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lf(w.a,w.b,v,u,w.e)},
b9N(d){return this.ba5(d,null)},
S5(d){return this.ba5(null,d)}}
C.H5.prototype={
a4(){return"FamilyGender."+this.b}}
C.hV.prototype={
ae(){var w=this
return A.F(["id",w.a,"name",w.b,"gender",C.heR(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aCv(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hV(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ajB.prototype={
a4(){return"FamilyTreeAccessRole."+this.b}}
C.ky.prototype={
gans(){var w=this.f
return new A.a2(w,new C.bM8(),A.U(w).k("a2<1>")).gM(0)},
ae(){var w=this,v=w.f,u=A.U(v).k("K<1,a4<n,@>>")
v=A.B(new A.K(v,new C.bM7(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hUv(w.y)],x.N,x.z)},
yg(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.ky(w.a,v,u,t,s,r,w.r,q,p,o)},
ba4(d,e){var w=null
return this.yg(w,w,d,e,w,w,w,w)},
cG7(d,e,f,g,h,i,j){return this.yg(d,e,f,g,h,i,j,null)},
aCA(d,e){var w=null
return this.yg(w,w,w,d,w,w,e,w)},
cEC(d){var w=null
return this.yg(w,w,w,w,w,w,d,w)},
cF_(d){var w=null
return this.yg(w,w,w,w,w,w,w,d)},
aCm(d){var w=null
return this.yg(w,w,w,w,d,w,w,w)},
cFE(d,e,f){var w=null
return this.yg(w,d,w,e,w,w,f,w)},
cEp(d){var w=null
return this.yg(w,w,d,w,w,w,w,w)},
cFc(d,e){var w=null
return this.yg(d,w,w,w,w,e,w,w)}}
C.cuM.prototype={
a4(){return"WrapAlignment."+this.b}}
C.cuN.prototype={
a4(){return"WrapCrossAlignment."+this.b}}
C.aFA.prototype={}
C.b72.prototype={
bx(d){this.a=d.a
this.b=d.b},
dr(d){var w=new C.b72()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b71.prototype={
gvX(){return!0},
gFw(){return this.z.b<this.b.length},
aS6(d){switch(0){case 0:return d.a.c}},
aRO(d){switch(0){case 0:return d.a.d}},
bOP(d,e){switch(0){case 0:return new A.hI(d,e)}},
bOd(d,e,f){var w=e-f
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
f=b1.aS6(g)
f.toString
e=b1.aRO(g)
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
a8=b1.aS6(g)
e=b1.aRO(g)
e.toString
a9=b1.bOd(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bOP(a6,a3+a9)
b0=g.a
g.a=new A.iB(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fX(d){var w,v,u,t,s,r=this
r.lb(d)
w=d.b
w.i0()
v=A.dl()
u=r.a
v.e2(u.a,u.b,0,1)
w.oF(0,v)
for(u=r.z,u=B.d.dn(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].fX(d)
w.n6(0)},
G3(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
i0(){return this.z}}
C.bu1.prototype={}
var z=a.updateTypes(["ay<~>()","R(hV)","R(ky)","~()","R(n5)","a4<n,@>(ky)","H(ky,ky)","n(hV)","ky(a4<@,@>)","R(lf)","R(u1)","n5(a4<@,@>)","u1()","H(lf,lf)","hV(a4<@,@>)","a4<n,@>(hV)","R(qN)","ay<~>(lf)","eR<n?>(hV)","H(hV,hV)","n?(hV)","a4<n,@>(n5)","Zf(Y)","n(n)","ace(Y)","r(o8)","H(n5,n5)","hV(hV)","cK(bu<n,Ff>)","cK(Jw)","~(hV)","H?(hV)","hV()","aj<hV>()","R(u0)","R(Jw)","C(hV)","~(H5)","R(adL)","r(H5,n,a0)","YE(Y)","bu<n,aj<a4<n,@>>>(n,aj<n5>)","~(H)","+count,id,name(H,n,n)(ky)","ky(ky)","ZA(Y)","ZB(Y)","R(lv)","lv()","n(ky)","a0i(Y)","Ye(Y)","Yd(Y)","YC(Y)","YG(Y)","r(qN)","acz(Y)","~(lT)","ay<~>([n?])","N(N,lf)","r(lf)","N(N,qN)","a4<n,@>(qN)","qN(a4<@,@>)","Yc(Y)","S3(Y)","cp(H4)","lf(a4<@,@>)","u0()","n(lf)","a4<n,@>(lf)","n(S)","H(hV)","ky(a4<n,@>)","XM(Y)"])
C.fuz.prototype={
$1(d){return d.a+" "+d.b},
$S:117}
C.fuy.prototype={
bj9(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
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
$1(d){return this.bj9(d)},
$S:316}
C.fuA.prototype={
$1(d){return d.b},
$S:117}
C.fDF.prototype={
$1(d){var w=null
return A.eG(w,B.K,new F.OS(this.a,this.b,w),w,w,0,B.XM,B.d0,w,w,w)},
$S:47}
C.fjP.prototype={
$1(d){return d!=null},
$S:233}
C.fjQ.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:233}
C.fjV.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:156}
C.fsi.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.f9(d,w,w,w,A.h2(w,B.rm,w,w,w,w,w,w,w,B.dr,w,w,10.5,w,B.ei,w,!0,w,w,w,w),w),u=f?B.ei:B.vg
return new A.nE(D.bo_,A.a8R(A.a([new A.fO(130,w,v),new A.yx(1,B.Fn,A.f9(e,w,w,w,A.h2(w,g==null?D.e5m:g,w,w,w,w,w,w,w,B.dr,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.x6,B.li))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1901}
C.fsh.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vc(999)
f=A.wH(A.lq(h,A.f9("Cashier",h,h,h,A.h2(h,D.yZ,h,h,h,h,h,h,h,B.dr,h,h,10,h,B.ei,h,!0,h,h,h,h),h),h,new A.kw(D.e5d,h,f,B.hC,h),h,h,D.bot,h))
w=A.wH(A.f9("Debt receipt",h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.dr,h,h,22,h,B.ei,h,!0,h,h,h,h),h))
v=A.wH(A.f9(C.wr(new A.S(Date.now(),0,!1),!0),h,h,h,D.a6K,h))
u=A.vc(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.f9(s,h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.dr,h,h,14,h,B.ei,h,!0,h,h,h,h),h)
r=A.f9("Person who owes",h,h,h,D.a6K,h)
q=A.vc(10)
p=x.C
u=A.lq(h,A.ys(A.a([s,new A.fO(h,2,h),r,new A.fO(h,10,h),A.lq(h,A.ys(A.a([A.f9("Amount owed",h,h,h,D.a6K,h),new A.fO(h,2,h),A.f9(A.Aj(t.c),h,h,h,A.h2(h,D.yZ,h,h,h,h,h,h,h,B.dr,h,h,20,h,B.ei,h,!0,h,h,h,h),h)],p),B.qJ,B.li),h,new A.kw(B.oT,h,q,B.hC,h),h,h,D.bnG,1/0)],p),B.qJ,B.li),h,new A.kw(E.aGc,h,u,B.hC,h),h,h,D.bpv,1/0)
q=new A.nn(D.e5g,0.9,B.kA)
r=A.vc(12)
s=i.c
o=s.$2("Original due",C.wr(t.r,!1))
n=s.$2("Current due",C.wr(t.f,!1))
m=i.d
l=new A.nn(m,1.1,B.kA)
k=A.vc(8)
j=i.a
k=A.a([o,n,new A.fO(h,6,h),A.lq(h,A.wH(A.f9(t.gaJn(),h,h,h,A.h2(h,m,h,h,h,h,h,h,h,B.dr,h,h,11,h,B.ei,h,!0,0.5,h,h,h),h)),h,new A.kw(h,new A.pn(l,l,l,l),k,B.hC,h),h,h,D.boB,1/0),new A.fO(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.yZ))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.yZ))
else{n=A.f9("Missed days ("+n+")",h,h,h,A.h2(h,B.rm,h,h,h,h,h,h,h,B.dr,h,h,10.5,h,B.ei,h,!0,h,h,h,h),h)
m=A.U(o).k("K<1,RD>")
o=A.B(new A.K(o,new C.fsg(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fO(h,4,h),n,new A.fO(h,6,h),new C.b71(5,5,new C.b72(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fO(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fO(h,8,h),w,new A.fO(h,3,h),v,new A.fO(h,16,h),u,new A.fO(h,10,h),A.lq(h,A.ys(k,B.x6,B.li),h,new A.kw(h,new A.pn(q,q,q,q),r,B.hC,h),h,h,B.ag8,1/0)],p)
w=j.a
if(w!=null){v=new A.nn(B.HQ,1,B.kA)
B.d.v(f,A.a([new A.fO(h,16,h),A.f9("Debtor signature",h,h,h,A.h2(h,B.rm,h,h,h,h,h,h,h,B.dr,h,h,10,h,B.ei,h,!0,h,h,h,h),h),new A.fO(h,6,h),A.lq(h,new A.Hm(w,B.UL,h,h),h,new A.kw(h,new A.pn(v,v,v,v),A.vc(6),B.hC,h),82,h,B.LW,1/0)],p))}f.push(new A.fO(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.f9(w,h,h,h,D.eUx,h))
f.push(new A.fO(h,18,h))
f.push(A.wH(A.f9("NGMY.ORG",h,h,h,A.h2(h,D.yZ,h,h,h,h,h,h,h,B.dr,h,h,14,h,B.ei,h,!0,1.8,h,h,h),h)))
return f},
$S:368}
C.fsg.prototype={
$1(d){var w=null,v=new A.nn(D.HR,0.7,B.kA),u=A.vc(999)
return A.lq(w,A.f9(C.wr(d,!1),w,w,w,A.h2(w,D.HR,w,w,w,w,w,w,w,B.dr,w,w,9.5,w,B.ei,w,!0,w,w,w,w),w),w,new A.kw(w,new A.pn(v,v,v,v),u,B.hC,w),w,w,D.btK,w)},
$S:1902}
C.c0b.prototype={
$1(d){var w=null,v=B.bI.j(0.08),u=A.m(999),t=A.I(B.bI.j(0.28),B.q,1)
return A.p(w,A.d(C.wr(d,!1),w,w,w,w,w,w,D.f03,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eF,w,w,w)},
$S:1903}
C.fEa.prototype={
$1(d){var w=null,v=A.aI(d,B.bT,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bL7,w,w,w,new C.fE7(d),w,w,w,w,w,B.c7),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eG(w,B.K,new A.cU(new A.aY(0,380,0,v.a.b*0.9),A.aG(!1,B.a1,!0,u,new A.C(B.XC,A.v(A.a([new A.bH(B.a7,w,w,t,w),new A.dm(1,B.ci,A.cd(A.v(A.a([new A.et(new C.aX9(r,w),s),B.S,A.A(A.a([A.D(A.eB(B.yi,D.fqd,new C.fE8(s,r,d),A.de(w,w,w,w,w,w,w,w,w,B.c,w,w,B.eZ,w,new A.b7(A.m(14),B.Y),new A.aA(q,1,B.q,-1),w,w,w,w)),1),B.ab,A.D(A.dq(B.a_T,D.fmS,new C.fE9(r,d),A.bk(B.aZ,w,w,w,B.c,w,B.eZ,w,new A.b7(A.m(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.r,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.aB,0,w,w,w,w,w,B.ag),w),w,w,0,Ai.XY,B.d0,w,w,w)},
$S:47}
C.fE7.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fE8.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.ak$.x.h(0,t.a)
m=m==null?null:m.gb8()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lR(2.5),$async$$0)
case 4:w=3
return A.b(e.hj(B.fW),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.fb(B.dz.gaO(s))
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
C.fE9.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fyT(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.R(A.b2(null,null,null,null,null,B.r,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fE2.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eG(w,B.aB,A.v(A.a([new A.C(D.bpj,A.A(A.a([A.D(A.d(this.a,w,w,w,w,w,w,B.np,w,w,w),1),A.aH(w,w,w,w,B.lg,w,w,w,new C.fE0(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dm(1,B.ci,new A.C(B.fT,A.bw(A.m(14),A.fL(t,B.A,w,w,B.co,B.dt,!1,w,!1,w,w),B.aq),w),w),new A.C(B.Lz,new A.a7(1/0,w,A.dq(B.oI,D.aPM,new C.fE1(t,this.c,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.LM,B.d0,w,new A.b7(v,B.Y),w)},
$S:47}
C.fE0.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fE1.prototype={
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
C.fEe.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eG(w,B.aB,new A.C(D.bpr,A.v(A.a([A.A(A.a([D.buL,A.aH(w,w,w,w,B.lg,w,w,w,new C.fEc(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.et(A.bw(A.m(14),A.p(w,A.b3(w,w,w,new C.b9b(s.ax,w),B.au),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a7(1/0,w,A.dq(B.oI,D.aPM,new C.fEd(t,s,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(v,B.Y),w)},
$S:47}
C.fEc.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fEd.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.ak$.x.h(0,t.a)
n=n==null?null:n.gb8()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lR(2.5),$async$$0)
case 4:w=3
return A.b(e.hj(B.fW),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aK(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.fb(B.dz.gaO(s))
w=5
return A.b(A.rH(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fnj.prototype={
$1(d){return d.a===this.a},
$S:252}
C.dDK.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dDv.prototype={
bin(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dX:B.c
s=u.a
w=2
return A.b(A.bX(t,null,new C.dDy(s,q,e),p,!0,!0,!1,B.I5,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dDz(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bin(d,e)},
$S:1904}
C.dDy.prototype={
$1(d){var w,v=null,u=this.c===B.vO,t=u?D.d7L:D.d44
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aQ:B.aB,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.C(K.agI,A.v(A.a([u,B.at,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bq:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.ic(!0,v,v,B.y,L.aMY,new C.dDx(this.a,w,t,d),t.length,v,B.dQ,B.ah,!0)],x.p),B.aj,v,B.e,B.Q,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:28}
C.dDx.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cZ.j(0.14)
else w=t.b.a.d.a?B.M:B.aQ
v=A.m(14)
if(q)u=B.cZ
else u=(t.b.a.d.a?B.bq:B.bn).j(0.16)
u=A.I(u,B.q,q?1.6:1)
return A.aL(!1,p,!0,A.p(B.A,C.aX8(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dDw(t.d,r),s,s,s,s,s,s,s)},
$S:182}
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
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cI(B.cr,e,v)
return new A.cX(e,!1,A.ii(B.A,A.av(A.aG(!1,B.a1,!0,v,new A.e0(new C.dDs(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ag),v,v,v),v,new A.bf(t,new A.bn(0.96,1,u),u.k("bf<bI.T>"))),v)},
$S:30}
C.dDs.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bT,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dX:B.c,f=A.m(14),e=A.I((h?B.bq:B.bn).j(0.16),B.q,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.D(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aL(!1,v,!0,new A.C(B.en,A.W(B.cA,i.a.d.a?B.bq:B.bn,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dDd(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aR1("Name")
r=l.a
q=r.d==null?k:new C.dDe(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bm:B.lD
n=A.I(B.cZ.j(0.35),B.q,1)
m=r.d
t=A.aM(k,B.T,h,k,!0,B.r,k,A.aN(),w,k,k,k,k,k,2,s.b9Y(new A.C(B.fx,A.aL(!1,p,!0,A.p(B.A,C.aX8(m==null?"\ud83d\udc64":A.ft6(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.ck,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ku,k,B.a6w,k,k)
v=A.a([v,B.ac,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.an,A.A(A.a([A.D(i.aRE("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dDf(r,a0),r.d===B.vO),1),B.ab,A.D(i.aRE("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dDk(r,a0),r.d===B.a3t),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bH(B.a3,k,k,A.hc(D.bJw,D.foE,new C.dDl(r,l.e,a0),A.fv(k,k,k,k,k,k,k,k,k,k,k,B.cZ,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c7)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.u4(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.f,k,k,k,k,k,2,i.aR2("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ai,k,k,s,k,k,B.dU,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.M:B.aQ
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.bq:B.bn).j(0.22),B.q,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wr(r.a,!1)
v.push(A.aG(!1,B.a1,!0,q,A.aL(!1,p,!0,A.p(k,A.A(A.a([A.D(A.v(A.a([t,B.bA,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bGo],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bk,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dDm(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ag))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.r,k,k,k,k,k,2,i.aR1("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aZs(r.b.length!==0,B.mi,new C.dDn(r,i,a0),new C.dDo(r,a0),"Upload from gallery","ID photo"))
v.push(i.aZs(r.c.length!==0,D.bzN,new C.dDp(r,i,d,a0),new C.dDq(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ag.a6M("Signature (optional)",t,new C.dDr(a0),new C.dDg(a0,t),new C.dDh(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.bq:B.bn
s=(i?B.bq:B.bn).j(0.28)
s=A.D(A.dV(E.aPF,new C.dDi(d),A.de(k,k,k,k,k,k,k,k,k,t,k,k,B.v3,k,new A.b7(A.m(10),B.Y),new A.aA(s,1,B.q,-1),k,k,k,k)),1)
t=A.bk(B.cZ,k,k,k,B.c,k,B.v3,k,new A.b7(A.m(10),B.Y),k,k,k)
v.push(A.A(A.a([s,B.ab,A.D(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.ut,k,k,k),new C.dDj(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cd(A.v(v,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.vc,B.jd,k,k,360)},
$S:185}
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
w.d=B.vO
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dDk.prototype={
$0(){return this.b.$1(new C.dDb(this.a))},
$S:0}
C.dDb.prototype={
$0(){var w=this.a
w.d=B.a3t
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
return A.b(A.wv(null,u.b,A.c0(2020,1,1,0,0,0,0,0),null,s,A.c0(2100,1,1,0,0,0,0,0)),$async$$0)
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
return A.b(u.b.OL(!1),$async$$0)
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
return A.b(A.bX(q,null,new C.dD6(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.OL(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dD7(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dD6.prototype={
$1(d){var w=null
return A.bm(!0,A.v(A.a([A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.alR,w,w,w,w,new C.dD0(d),!1,w,w,w,w,w,w,w,D.ffh,w,w,w),A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.alP,w,w,w,w,new C.dD1(d),!1,w,w,w,w,w,w,w,D.flW,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.af,!0,!0)},
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
return A.b(A.agG(u.a,null,null,new C.dD2(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dD2.prototype={
$4(d,e,f,g){this.a.$1(new C.dD_(this.b,d))},
$S:370}
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
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.R(D.eQu)
return}if(w.a.d==null){w.c.I(x.q).f.R(D.eNq)
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
u=A.Aj(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bq:B.bn,r,r,r,r,r,r,r,r,13,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.yH(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.yH(r).length>0?B.bI:B.cZ,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bq:B.bn
t=(q?B.bq:B.bn).j(0.28)
s=x.p
return new A.cX(e,!1,A.av(A.aG(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.P,v,u,B.aA,A.A(A.a([A.D(A.dV(B.nq,new C.dDL(d),A.de(r,r,r,r,r,r,r,r,r,w,r,r,B.jx,r,new A.b7(A.m(10),B.Y),new A.aA(t,1,B.q,-1),r,r,r,r)),1),B.ab,A.D(A.bJ(D.fmk,new C.dDM(d),A.bk(B.cZ,r,r,r,B.c,r,B.jx,r,new A.b7(A.m(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.AT,O.LJ,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ag),r,r,r),r)},
$S:30}
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
k=A.A(A.a([A.D(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aQ:B.aB,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Aj(l.c),s,s,s,s,s,s,D.f1w,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.ix((r.a.d.a?B.bq:B.bn).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.ZG,"View receipt",new C.dDA(r,d,l))
u=l.x!=null
t=u?B.r1:B.pH
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bpo,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dDB(r,d,l)),q.$3$icon$label$onTap(B.B9,"Edit",new C.dDC(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mi,"View / download ID",new C.dDD(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bzM,"View / download selfie",new C.dDE(r,d,l)))
if(l.gaEc())p.push(q.$3$icon$label$onTap(A5.a_K,"View / download signature",new C.dDF(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bI,B.e4,"Delete",new C.dDG(r,d,l)))
p.push(B.at)
return A.bm(!0,new A.C(B.v8,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:28}
C.dDI.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aQ:B.aB
else w=d
return A.aL(!1,v,!0,new A.C(B.eP,A.A(A.a([A.W(e,w,v,v,v,20),B.bf,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1905}
C.dDA.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fE6(w,this.c)},
$S:0}
C.dDB.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.Rr(this.c)},
$S:0}
C.dDC.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.CG(this.c)},
$S:0}
C.dDD.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bBS(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dDE.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bBS(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dDF.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fEb(w,this.c)},
$S:0}
C.dDG.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.Nq(0,this.c)},
$S:0}
C.dDP.prototype={
$1(d){return d.x==null},
$S:252}
C.dDQ.prototype={
$1(d){return d.x!=null},
$S:252}
C.dDR.prototype={
$2(d,e){return d+e.c},
$S:1906}
C.dDS.prototype={
$0(){return this.a.bxv()},
$S:0}
C.dDJ.prototype={
$0(){return this.a.adQ(this.b)},
$S:0}
C.fnO.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fnP.prototype={
$0(){return B.d.gK(D.a0Y)},
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
$0(){var w=this.a.gbW1()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.fpR.prototype={
$1(d){return C.h_H(A.a1(d,x.N,x.z))},
$S:z+11}
C.fpS.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fpT.prototype={
$2(d,e){var w=A.c7(d.a,null),v=A.c7(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+26}
C.fCL.prototype={
$1(d){return d.ae()},
$S:z+21}
C.fKP.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fna.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bM3.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eZ(e,v)?v:null},
$S:1907}
C.fDj.prototype={
$1(d){var w=this
return new C.YE(w.a,w.b,w.c,w.d,w.e,w.f,null)},
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
return A.ej(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.d3I(d),w,w),A.bJ(B.w8,new C.d3J(d),A.bk(B.mN,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
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
$0(){return B.d.gK(D.ys)},
$S:z+12}
C.d3G.prototype={
$1(d){var w=this.a,v=w.y,u=w.gxW(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.S3(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d3H.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d3M.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Yc(v,u,J.ad(w.d),null)},
$S:z+64}
C.d3N.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d4c.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aE(s,new C.XV(r.y,r.gxW(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d4a(r),s,s,s,s,s,s,!1,B.a8)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b8A(v,e,w,u,t,r.gbNk(),C.heQ(r.y.Q),r.gxW(0),s)
w=t}return A.c6(q,new C.d4b(r,e),new A.C(B.XR,w,s))},
$S:1908}
C.d4b.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gcZ(t).ay){t=this.b
u=x.cy.a(B.d.gcZ(u.f.f)).gut(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dl()
t=u.a
t.$flags&2&&A.ai(t)
t[11]=0.0013
u.fv(v*3.141592653589793*0.5)
return A.fs(B.a3,A.db(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.d4a.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFg(B.pw,B.iw)},
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
$1(d){var w,v,u=null,t=A.m(26),s=E.jM.j(0.5),r=x.p,q=A.a([D.fdW,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cl(p.d)?"Write this book":"Write a new book"
q.push(p.Y8(d,B.dW,w,J.cl(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Y8(d,L.ajG,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cy(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cH,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kb.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cH,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kb.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Y8(d,A0.akR,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Y8(d,B.pO,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Y8(d,B.pO,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eG(u,E.Ak,A.bm(!0,new A.C(A4.AO,A.v(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.ah7,B.d0,u,new A.b7(t,new A.aA(s,1.4,B.q,-1)),u)},
$S:47}
C.d3Z.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.d3Q.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cy(w.d)
return new C.YG(v,J.cy(w.d),w.r+1,null)},
$S:z+54}
C.d3R.prototype={
$1(d){var w=null
return A.oe(!1,A.ej(w,w,w,E.Ak,new A.kb(this.a,new C.d3P(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:300}
C.d3P.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a6c,B.o8,A.D(A.d(e,w,w,w,w,w,w,B.iG,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:738}
C.d3S.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d3T.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:189}
C.d3U.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d3V.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.As(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.QU(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d3O(s,t))
w=4
return A.b(s.kP(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3O.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d45.prototype={
$1(d){var w=null
return A.oe(!1,A.ej(w,w,w,E.Ak,new A.kb(this.a,new C.d44(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:300}
C.d44.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a6c,B.o8,A.D(A.d(e,w,w,w,w,w,w,B.iG,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:738}
C.d46.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d47.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:189}
C.d48.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:189}
C.d49.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.As(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kP(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3E.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bfv(B.pw,V.Lm)},
$S:0}
C.d3F.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFg(B.pw,V.Lm)},
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
w=w.ga0O()
A.a6(this.b,!1).O(new A.bn6(w,v))},
$S:0}
C.d4t.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d4s.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.YC(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d4x.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d4w.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b5D(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hB,v,v,v)
return A.ej(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.d4u(d),v,v),A.bJ(B.w8,new C.d4v(d),A.bk(B.mN,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Ak,w,v,v,v,v,D.fcQ,v)},
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
return A.cd(A.bZ(B.bB,r,B.bs,18,14),B.r,t,B.y,t,D.bqj,t,t,B.ah)},
$S:301}
C.d4r.prototype={
$0(){return this.a.Ps(0,this.b)},
$S:0}
C.d4q.prototype={
$0(){return this.a.OX(0,this.b)},
$S:0}
C.cDw.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cDx.prototype={
$0(){return B.d.gK(D.ys)},
$S:z+12}
C.cDy.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bY(0,new A.C(d,A.c_(w,new A.o(w,w,A.I(this.a.j(f),B.q,g),v,w,w,B.n),B.bd),w),0,0,0)},
$S:1910}
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
return w.d=w.gnQ().Fc(this.b.a)},
$S:0}
C.cXp.prototype={
$0(){var w=this.a
return w.m(new C.cX6(w,this.b))},
$S:0}
C.cX6.prototype={
$0(){var w=this.a
return w.d=w.gnQ().cDW(this.b)},
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
return w.d=w.gnQ().cE0(this.b.a)},
$S:0}
C.cXs.prototype={
$1(d){var w=this.a
return w.m(new C.cXh(w,d))},
$S:6}
C.cXh.prototype={
$0(){var w=this.a
return w.d=w.gnQ().cEV(this.b)},
$S:0}
C.cXt.prototype={
$1(d){var w=this.a
return w.d=w.gnQ().aCp(d)},
$S:2}
C.cXu.prototype={
$1(d){var w=this.a
return w.d=w.gnQ().cE3(d)},
$S:2}
C.cXw.prototype={
$1(d){var w=this.a
return w.d=w.gnQ().cET(d)},
$S:2}
C.cXx.prototype={
$1(d){var w=this.a
return w.m(new C.cXg(w,d))},
$S:9}
C.cXg.prototype={
$0(){var w=this.a
return w.d=w.gnQ().cEK(this.b)},
$S:0}
C.cXy.prototype={
$0(){var w=this.a,v=w.gnQ(),u=B.a.i(w.gxW(0).a.a),t=B.a.i(w.gazF().a.a)
u=v.bae(B.a.i(w.gapx().a.a),t,u)
A.a6(this.b,!1).O(u)
return null},
$S:0}
C.dRL.prototype={
$0(){var w=this.a
w.vz()
w.a.bp()
w.a.px()},
$S:0}
C.dRK.prototype={
$0(){var w=this.a
w.vz()
w.a.bp()
w.a.px()},
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
$0(){this.a.NW()
return null},
$S:0}
C.dRQ.prototype={
$0(){return this.a.E3(this.b)},
$S:0}
C.dRb.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.de,w,w,!0,w,w,new C.dR9(d),w,w),r=A.bk(B.bU,w,w,w,w,w,w,w,w,w,w,w)
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
return w.d=v.cEp(this.b)},
$S:0}
C.dR6.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aRh(w.b,w.c,w.d)},
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
return A.b(C.G0(t.a.c),$async$$0)
case 2:s=r.r2(q.dH(e,new C.dQS(t)))
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
v.d=u.cFc(C.hf_(w),w)},
$S:0}
C.dR3.prototype={
$1(d){return new A.e0(new C.dR2(this.a,this.b),null)},
$S:20}
C.dR2.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dX:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.alu,v,v,v,p>0?new C.dQZ(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aP,A.A(A.a([o,A.D(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.am3,v,v,v,new C.dR_(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.ej(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dR0(d),v,v),A.bJ(B.p4,new C.dR1(d),A.bk(B.bU,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:163}
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
w.d=v.cF_(this.a.a)
w.r.a9(0)},
$S:0}
C.dQt.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.agN(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.h8J(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dQu.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aCm(w)},
$S:0}
C.dRe.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.ace(this.b,w,this.c,null)},
$S:z+24}
C.dR8.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dX:B.c,t=A.m(20),s=A.W(B.lc,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.Q,0,B.p)
return A.ej(A.a([A.bJ(D.fnr,new C.dR7(d),A.bk(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.bb,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
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
w.push(new C.hV(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aCm(w)},
$S:0}
C.dQC.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.agN(q)
w=A.U(q).k("a2<1>")
q=A.B(new A.a2(q,new C.dQA(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.h8J(v.e,null,r,v.f,v.r,new C.dQB(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dQB.prototype={
$0(){return this.a.a90(this.b)},
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
u.d=t.aCm(w)},
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
p.push(B.P)
u=w.d
p.push(A.aM(v,B.T,!1,v,!0,B.r,v,A.aN(),u,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(12),B.dg),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ai,v,v,v,v,v,B.lY,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.am,v,v,v,v))
p=A.v(p,B.aj,v,B.e,B.Q,0,B.p)
t=w.a
return A.ej(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dQL(d),v,v),A.bJ(B.IS,new C.dQM(t,u,o,e),A.bk(B.bU,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.fb2,new C.dQN(t,u,o,d),A.bk(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:163}
C.dQK.prototype={
$1(d){var w=null
return A.dN(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aQ:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bN2,w,w,w,new C.dQJ(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1911}
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
w.d=v.cFE(this.b,D.tB,C.FZ(v,w.a.c))},
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
v=C.i2M(v)
return w.V6(v==null?null:v.a)},
$S:0}
C.dRo.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hGg(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcn(k)){k=A.aP(1/0,e.a,e.b)
s=A.aP(1/0,e.c,e.d)
l.cnP(new A.at(u,t),v.gbgm(),new A.at(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cKZ:D.cJq
q=A.I(s?B.dp:D.b93,B.q,1)
p=A.m(22)
o=A.bY(0,A.b3(m,m,m,new C.bbX(s,m),B.au),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bw(p,new A.an(B.W,m,B.aa,B.r,A.a([o,A.bY(0,A.ud(new A.Q(n,n,n,n),new A.a7(u,t,new C.bcQ(l.d,v,l.f,w,new C.dRh(l),l.gc7Y(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bu8(s,new C.dRi(l,e),new C.dRj(l,e),new C.dRk(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.b0,B.b6,B.x,r,m,m),B.n),m,m,m,R.agc,m,m,m,m)},
$S:215}
C.dRh.prototype={
$1(d){var w=this.a
w.m(new C.dRf(w,d))},
$S:2}
C.dRf.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.L(0,v)},
$S:0}
C.dRi.prototype={
$0(){var w=this.b
return this.a.b7S(1.25,new A.at(A.aP(1/0,w.a,w.b),A.aP(1/0,w.c,w.d)))},
$S:0}
C.dRj.prototype={
$0(){var w=this.b
return this.a.b7S(0.8,new A.at(A.aP(1/0,w.a,w.b),A.aP(1/0,w.c,w.d)))},
$S:0}
C.dRk.prototype={
$0(){var w=this,v=w.b
return w.a.aRh(new A.at(A.aP(1/0,v.a,v.b),A.aP(1/0,v.c,v.d)),new A.at(w.c,w.d),w.e.gbgm())},
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
return A.ao(w,new C.bgy(u,C.hj3(v.c,u),new C.d4C(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d4C.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d4E.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bjU(d.d,d.c,u.f.t(0,d.a),new C.d4B(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d4B.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fnS.prototype={
$1(d){var w,v=d.e
if(this.a.ah(0,v))return v
v=this.b
w=A.U(v)
return A.r2(new A.cQ(new A.a2(v,new C.fnT(d),w.k("a2<1>")),new C.fnU(),w.k("cQ<1,n>")))},
$S:z+20}
C.fnT.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fnU.prototype={
$1(d){return d.a},
$S:z+7}
C.fnQ.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fnR.prototype={
$1(d){return d.b},
$S:z+7}
C.fnX.prototype={
$1(d){var w,v=d.e
if(this.a.ah(0,v))return v
v=this.b
w=A.U(v)
return A.r2(new A.cQ(new A.a2(v,new C.fnY(d),w.k("a2<1>")),new C.fnZ(),w.k("cQ<1,n>")))},
$S:z+20}
C.fnY.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fnZ.prototype={
$1(d){return d.a},
$S:z+7}
C.fnV.prototype={
$1(d){var w,v=A.ew([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ah(0,w)&&v.L(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fnW.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d4G.prototype={
$0(){return this.a},
$S:z+32}
C.d4X.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ah(0,d)},
$S:253}
C.d4P.prototype={
$2(d,e){var w=this.a.cg(0,d,new C.d4Q()),v=J.a5(w)
if(!v.t(w,e))v.L(w,e)},
$S:121}
C.d4Q.prototype={
$0(){return A.a([],x.s)},
$S:739}
C.d4O.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eZ(w,e)
return w===!0},
$S:306}
C.d4H.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d4N.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d4M.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.L(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.BR:v)
u=1
while(v.C())u+=s.$2(v.gU(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.T:v)
while(v.C()){t=v.gU(v)
if(e.t(0,t))continue
e.L(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.BR:t)
while(t.C())u+=s.$2(t.gU(t).a,e)}return u},
$S:1913}
C.d4I.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d4R.prototype={
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
break}A:{s=u.gU(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.L(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aV(t==null?D.BR:t)
while(t.C()){r=t.gU(t)
if(r.a!==a9&&!B.d.b7(w,new C.d4S(r)))w.push(r)}}B.d.bm(w,new C.d4T(a8))
B.d.b_(w,new C.d4U())
q=C.hGf(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.esu],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bmR(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1914}
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
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a3(v).k("bc<2>")).cI(0,0,B.qq)+88-w.gK(n).a}else u=0
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
t.n(0,d,new C.Ff(r,new A.u(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.Ff(s,new A.u(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.Ff(s,new A.u(e,v)))}t=o.r.h(0,d)
t=J.aV(t==null?B.T:t)
s=o.w
while(t.C()){r=t.gU(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Jw(d,new A.u(e+t,w),s,s.length))}},
$S:189}
C.d4J.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aHA(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:121}
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
$S:378}
C.d5_.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:198}
C.d50.prototype={
$1(d){return d>=0.5},
$S:124}
C.f6j.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hp(A.aL(!1,v,!0,new A.a7(38,38,A.W(d,this.a.c?B.c:B.cC,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1916}
C.eIB.prototype={
$1(d){var w=null,v=A.m(8),u=B.bU.j(0.12),t=A.m(8)
return new A.C(B.n2,A.aL(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.eYg,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.LV,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eIA(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eIA.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dkQ.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dkP.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nn,B.L,w,w)
return A.ej(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.dkN(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.m9,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dkO(d),w,w)],x.p),B.bb,B.AH,w,u,D.brz,w,D.btv,new A.b7(v,B.Y),w,w)},
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
return A.q8(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
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
return A.q8(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
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
return A.D(A.aG(!1,B.a1,!0,r,A.aL(!1,o,!0,A.dg(r,A.v(A.a([t,B.at,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bc,new A.o(w,r,u,v,r,r,B.n),B.eE,r,r,r,B.jx,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dlb(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
$S:z+39}
C.dlb.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dlk.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.c6J.prototype={
$2(d,e){return new A.bu(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:95}
C.c6Q.prototype={
$1(d){return d.ae()},
$S:z+5}
C.c6R.prototype={
$2(d,e){var w=J.b6(e,new C.c6P(),x.a)
w=A.B(w,w.$ti.k("ak.E"))
return new A.bu(d,w,x.d2)},
$S:z+41}
C.c6P.prototype={
$1(d){return d.ae()},
$S:z+21}
C.c6L.prototype={
$1(d){return C.ajC(A.a1(d,x.N,x.z))},
$S:z+8}
C.c6M.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c6N.prototype={
$1(d){return C.h_H(A.a1(d,x.N,x.z))},
$S:z+11}
C.c6O.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c6V.prototype={
$1(d){return new A.aEG(d.f.length,d.a,d.b)},
$S:z+43}
C.c6W.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:565}
C.c6S.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c6T.prototype={
$1(d){return d.cEC(C.FZ(d,this.a))},
$S:z+44}
C.dRy.prototype={
$1(d){return C.tJ(d,this.a.a.c)},
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
return A.b(C.aYC(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xX("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oW(r.c,r.e),$async$$0)
case 4:s.xX(p)
w=5
return A.b(s.J5(),$async$$0)
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
return A.b(C.aYC(r.d,q,r.e,t.b),$async$$0)
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
C.dRx.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Uo(n.d,m,n.e,r.b),$async$$0)
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
return A.b(o.J5(),$async$$0)
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
C.dRC.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYB(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xX("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).c6(A.e7(new C.dRB(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oW(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRB.prototype={
$1(d){var w=this.b
return new C.ZA(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dRA.prototype={
$1(d){return D.fMU},
$S:z+46}
C.dRG.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dRH.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dRF(w,d)
return new A.C(B.dc,new C.bcU(this.b,d.c,d.a,w,null),null)},
$S:1917}
C.dRF.prototype={
$0(){return this.a.WP(this.b.b)},
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
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.dp(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a6(this.b,!1).O(s)
return}},
$S:196}
C.dCS.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dCT.prototype={
$0(){return B.d.gK(D.a2n)},
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
return A.b3(A.av(A.W(this.b.d,B.c.j(0.95),w,w,D.cR_,44),w,w,w),w,w,new C.bhG(u,t,v,w),B.au)},
$S:67}
C.fDM.prototype={
$1(d){return A.oH(new C.fDL(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:127}
C.fDL.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dX:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rl,24)],x.V),o=r?B.dZ:B.bR
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bU.j(0.18)],x.O)
w=A.p(t,D.bHD,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a8(B.a3,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aQ:B.aB,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.S,o,new A.C(E.ahb,A.A(A.a([w,B.bf,A.D(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bq:B.bn,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.D(A.ic(!0,t,e,B.y,D.eLD,new C.fDK(this.b,s),20,B.agM,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kz,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:115}
C.fDK.prototype={
$2(d,e){var w=null,v=D.a2n[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.dZ:B.bR,B.q,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.ej,8)],x.V),p=A.m(15),o=A.D(new C.a5q(v.a,!0,w),1),n=s?B.jt:B.iP,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aQ:B.aB,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a1,!0,w,A.aL(!1,u,!0,A.ez(A.bw(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bq:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.l8,w,w,w)],l),B.aj,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fDJ(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)},
$S:75}
C.fDJ.prototype={
$0(){A.a6(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cen.prototype={
$0(){return this.a.aeT(this.b)},
$S:0}
C.fD8.prototype={
$1(d){return D.fJ9},
$S:z+74}
C.fKB.prototype={
$1(d){var w=this
return new C.a0i(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fDd.prototype={
$1(d){return new C.Ye(this.a,null)},
$S:z+51}
C.fDc.prototype={
$1(d){return D.fK8},
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
$1(d){return this.a.JF()},
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
$1(d){return this.a.JF()},
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
$0(){return this.a.aMQ(-1)},
$S:0}
C.cvr.prototype={
$1(d){return this.a.m(new C.cvo())},
$S:2}
C.cvo.prototype={
$0(){},
$S:0}
C.cvs.prototype={
$0(){return this.a.aMQ(1)},
$S:0}
C.cvt.prototype={
$1(d){return this.a.m(new C.cvn())},
$S:2}
C.cvn.prototype={
$0(){},
$S:0}
C.cvu.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.dZ:B.bR
return A.u3(u,u,B.aZ,r,u,new C.cvm(t,d),B.AU,s,w,u,new A.aA(v,1,B.q,-1),B.c7)},
$S:1918}
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
C.f5M.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).O(w)},
$S:2}
C.f5N.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.f5O.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).O(w)},
$S:0}
C.f5K.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbwE()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b3(new A.C(D.btu,new A.et(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.btY(p,v,this.b.a,u,t,r),r,r,B.au)},
$S:67}
C.f5L.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dC.av(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.aq(B.aV,B.bU,w)
s.toString
s=A.a([B.aZ,s,B.aV],x.O)
return A.aG(!1,B.a1,!0,p,A.aL(!1,v,!0,A.ez(D.e3f,r,new A.o(r,r,A.I(B.c.j(0.4),B.q,1.5),u,r,new A.a8(new A.d9(-1.2+t,-0.5),new A.d9(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
$S:132}
C.fBU.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:70}
C.eFL.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eFC.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eFD.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eFJ.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e0(new C.eFI(w,this.b),null)},
$S:20}
C.eFI.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dX:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aB,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eG(w,u,new A.C(B.ah5,A.v(A.a([s,B.an,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.h5w(new C.eFF(r,e),r.a),B.aA,A.A(A.a([A.D(A.dV(B.de,new C.eFG(d),w),1),B.av,A.D(A.bJ(B.Tk,new C.eFH(r,d),A.bk(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.aj,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(t,B.Y),w)},
$S:98}
C.eFF.prototype={
$1(d){return this.b.$1(new C.eFE(this.a,d))},
$S:34}
C.eFE.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eFG.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFH.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.eFK.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.S5(this.b)},
$S:0}
C.eFx.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.b9N(w)},
$S:0}
C.eFB.prototype={
$1(d){return this.biQ(d)},
biQ(d){var w=0,v=A.j(x.H),u,t=this,s
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
C.eFA.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("a2<1>")
w=A.B(new A.a2(w,new C.eFz(this.b),v),v.k("J.E"))
u.d=t.b9N(w)},
$S:0}
C.eFz.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eFM.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iL(this.b,w)},
$S:0}
C.eFN.prototype={
$1(d){return this.a.bAI(d,this.b)},
$S:z+55}
C.eFy.prototype={
$0(){return this.a.a9_(this.b)},
$S:0}
C.fKt.prototype={
$1(d){return new C.acz(this.a,this.b,this.c,null)},
$S:z+56}
C.eFP.prototype={
$0(){return this.a.Zt(this.b)},
$S:0}
C.eFQ.prototype={
$0(){return this.a.Po(this.b)},
$S:0}
C.eFR.prototype={
$0(){return this.a.DZ(this.b)},
$S:0}
C.eFS.prototype={
$0(){return this.a.Zu(this.b)},
$S:0}
C.eFO.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFs.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eFt.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eFu.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFw.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pD(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eFv(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eFv.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eGe.prototype={
$2(d,e){return d+e.gwC()},
$S:z+59}
C.eGa.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eGb.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eFW.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dX:B.c,s=A.m(24),r=A.p(v,D.bI2,B.f,v,v,new A.o(B.ay.j(u?0.18:0.08),v,A.I(B.ay.j(0.28),B.q,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.aB,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aQ:B.aB
u=u?B.dZ:B.bR
w=x.p
return A.eG(v,t,new A.C(B.xr,A.v(A.a([r,B.aP,q,B.P,p,B.d5,A.A(A.a([A.D(A.dV(B.nq,new C.eFU(d),A.de(v,v,v,v,v,v,v,v,v,o,v,v,B.eZ,v,new A.b7(A.m(14),B.Y),new A.aA(u,1,B.q,-1),v,v,v,v)),1),B.av,A.D(A.bJ(D.fr7,new C.eFV(d),A.bk(B.ay,v,v,v,v,v,B.eZ,v,new A.b7(A.m(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d0,v,new A.b7(s,B.Y),v)},
$S:47}
C.eFU.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eFV.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eG4.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dX:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fL,28)],x.V),g=k?D.cXl:B.a1M,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aA,D.eFS,B.at,new A.bH(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cv,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.ax,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.ah8,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.D(v.b34(B.b5,B.iU,new C.eG1(v,d),l,"Camera import","Scan QR"),1),B.av,A.D(v.b34(B.cy,M.y7,new C.eG2(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.ay.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.ay.j(0.28),B.q,1)
o=A.p(m,D.bHr,B.f,m,m,new A.o(B.ay.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bS,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aQ:B.aB,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.D(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bn,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bm(!0,new A.C(B.va,A.p(m,A.v(A.a([g,new A.C(B.ah6,A.v(A.a([w,B.S,u,B.bx,t,B.S,A.aG(!1,B.a1,!0,m,A.aL(!1,s,!0,A.p(m,A.A(A.a([o,B.bf,n,A.W(B.ex,k?B.bq:B.bn,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bC,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eG3(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:28}
C.eG1.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.va("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eG2.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.va("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eG3.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.Nd(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eG_.prototype={
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
return A.bm(!0,new A.C(B.va,A.p(q,A.v(A.a([B.S,k,new A.C(D.ah3,A.A(A.a([u,B.bf,A.D(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bq:B.bn,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.Ay,r.ci5(B.tT,B.aV,new C.eFY(d),p,"QR code or backup file","Transfer project"),r.b07(!0,B.e4,B.ay,new C.eFZ(d),p,"Remove from this device","Delete project"),B.S],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:28}
C.eFY.prototype={
$0(){A.a6(this.a,!1).O("transfer")
return null},
$S:0}
C.eFZ.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
C.eG0.prototype={
$1(d){return this.biR(d)},
biR(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.KH(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vn(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eGh.prototype={
$0(){var w=this.a
w.a.bp()
w.m(new C.eGg(w))},
$S:0}
C.eGg.prototype={
$0(){return this.a.r++},
$S:0}
C.eGi.prototype={
$0(){var w=this.a
return w.m(new C.eGf(w))},
$S:0}
C.eGf.prototype={
$0(){return this.a.r++},
$S:0}
C.eFT.prototype={
$0(){var w=this.a.c
w.toString
return A.iL(w,null)},
$S:0}
C.eFX.prototype={
$0(){return this.a.cbs(this.b)},
$S:0}
C.eGd.prototype={
$0(){var w=this.a
return w.m(new C.eGc(w,this.b))},
$S:0}
C.eGc.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eG7.prototype={
$0(){return this.a.va("scan")},
$S:0}
C.eG8.prototype={
$0(){return this.a.va("file")},
$S:0}
C.eG9.prototype={
$1(d){return this.a.ci6(d,this.b)},
$S:z+60}
C.eG6.prototype={
$0(){return this.a.E2(this.b)},
$S:0}
C.eG5.prototype={
$0(){return this.a.ZZ(this.b,this.c)},
$S:0}
C.cuK.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cuJ.prototype={
$1(d){return d.ae()},
$S:z+62}
C.cuH.prototype={
$1(d){return C.hoS(A.a1(d,x.N,x.z))},
$S:z+63}
C.cuI.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fn2.prototype={
$1(d){return d.y===D.ki},
$S:z+2}
C.fKX.prototype={
$1(d){return C.bzM(d,this.a)},
$S:z+2}
C.flz.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bM8.prototype={
$1(d){return!d.as},
$S:z+1}
C.bM7.prototype={
$1(d){return d.ae()},
$S:z+15}
C.bM4.prototype={
$1(d){return C.h_I(A.a1(d,x.N,x.z))},
$S:z+14}
C.bM5.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bM6.prototype={
$1(d){return J.k(d)},
$S:17}
C.fdl.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.f91.prototype={
$1(d){return C.fRi(A.a1(d,x.N,x.z))},
$S:z+67}
C.f92.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.f93.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fD_.prototype={
$1(d){return J.k(d)},
$S:17}
C.fD0.prototype={
$1(d){return d.a},
$S:z+69}
C.fD1.prototype={
$1(d){return d.length!==0},
$S:3}
C.fD2.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fD3.prototype={
$1(d){return d.S5(null).ae()},
$S:z+70}
C.fKV.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fnu.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fpX.prototype={
$1(d){return C.ajC(A.a1(d,x.N,x.z))},
$S:z+8}
C.fpY.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fpZ.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fq_.prototype={
$1(d){return d.ae()},
$S:z+5}
C.fq0.prototype={
$1(d){return C.tJ(d,this.a)},
$S:z+2}
C.fCN.prototype={
$1(d){return C.tJ(d,this.a)},
$S:z+2}
C.fKQ.prototype={
$1(d){return C.ajC(A.a1(d,x.N,x.z))},
$S:z+8}
C.fKR.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fKS.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fnb.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fnc.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fL0.prototype={
$1(d){return!d.as},
$S:z+1}
C.fmM.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fmN.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fmO.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.fKC.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fqJ.prototype={
$1(d){return d.Q},
$S:z+72}
C.fCJ.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fpU.prototype={
$1(d){return C.ajC(A.a1(d,x.N,x.z))},
$S:z+8}
C.fpV.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fpW.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fCF.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.f9z.prototype={
$1(d){return d.length!==0},
$S:3}
C.f9A.prototype={
$1(d){return C.h_I(A.a1(d,x.N,x.z))},
$S:z+14}
C.f9B.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.f9C.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.f9D.prototype={
$1(d){return d.length!==0},
$S:3}
C.f9Q.prototype={
$2(d,e){return d.eU(new C.f9R(e))},
$S:1919}
C.f9R.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c6},
$S:1920}
C.f9N.prototype={
$1(d){return C.hKS(d,this.a)},
$S:z+73}
C.f9O.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.f9P.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fe_.prototype={
$1(d){return d.a},
$S:z+49}
C.fe0.prototype={
$1(d){return d.length!==0},
$S:3}
C.fe1.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fg6.prototype={
$1(d){return d.ae()},
$S:z+5}
C.fkT.prototype={
$1(d){return C.hb1(d,C.FZ(d,this.a))},
$S:z+5}
C.fkU.prototype={
$1(d){return C.hb2(d,C.FZ(d,this.a))},
$S:z+5};(function aliases(){var w=C.aJW.prototype
w.bsT=w.q
w=C.aM4.prototype
w.bvd=w.q
w=C.aM5.prototype
w.bve=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aBs.prototype,"gcf2","cf3",25)
var s
w(s=C.ayv.prototype,"gc83","c84",42)
v(s,"gaL6","MM",0)
v(s,"gcna","As",0)
v(s,"gbIm","Nr",0)
v(s,"gcAX","xY",0)
v(s,"gch3","a_G",0)
v(s,"gbDP","N9",0)
v(s,"gbIN","Wg",0)
w(s,"gbNk","bNl",71)
v(s,"gbyj","zu",0)
v(C.ayw.prototype,"gcAT","EU",0)
v(s=C.aC2.prototype,"gaev","vo",0)
v(s,"gcaI","ZQ",0)
v(s,"gaP6","Hu",0)
v(s=C.aC_.prototype,"gcx8","a1L",0)
v(s,"gaev","vo",0)
v(s,"gcle","a0l",0)
v(s,"gcbF","a_3",0)
w(s,"gc7Y","c7Z",30)
v(s,"gbIE","Hz",0)
v(s,"gcy7","cy8",3)
v(s,"gbZK","XV",0)
w(s,"gc6u","c6v",23)
v(s,"gcas","cat",3)
v(s=C.aAr.prototype,"gc4i","OY",0)
v(s,"gc4k","c4l",3)
v(s,"gbFk","a8C",0)
v(s=C.aC1.prototype,"gbLR","WL",0)
v(s,"gbW8","Xo",0)
v(s,"gcrt","a1b",0)
v(s,"gcnK","a0N",0)
v(C.aC0.prototype,"gcns","age",0)
v(C.ard.prototype,"gc6s","Zs",0)
v(C.axh.prototype,"ga1v","JF",3)
v(C.axg.prototype,"ga1v","JF",3)
v(C.aw0.prototype,"ga1v","JF",3)
v(s=C.aDx.prototype,"gb_v","PT",0)
v(s,"gbx6","V0",0)
v(s,"gcbt","cbu",3)
w(C.aDw.prototype,"gc7i","c7j",57)
u(C.aDy.prototype,"gaP0",0,0,null,["$1","$0"],["Ht","bGB"],58,0,0)
t(C,"hih","hUt",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.an7,C.u0,C.n5,C.H4,C.adL,C.Jo,C.u1,C.Jw,C.Ff,C.bcS,C.aHA,C.aoh,C.d51,C.lv,C.aRJ,C.aRI,C.aPL,C.ty,C.qN,C.lf,C.hV,C.ky,C.aFA])
u(A.hT,[C.fuz,C.fuy,C.fuA,C.fDF,C.fjP,C.fjQ,C.fjV,C.fsi,C.fsh,C.fsg,C.c0b,C.fEa,C.fE2,C.fEe,C.fnj,C.dDy,C.dDt,C.dDu,C.dD6,C.dD2,C.dDN,C.dDO,C.dDH,C.dDI,C.dDP,C.dDQ,C.fnO,C.fpR,C.fpS,C.fCL,C.fKP,C.fna,C.fDj,C.d4e,C.d3B,C.d3K,C.d40,C.d3G,C.d3M,C.d3D,C.d3Q,C.d3R,C.d3P,C.d45,C.d44,C.d6_,C.d60,C.d61,C.d4s,C.d4x,C.d4w,C.cDw,C.cDy,C.cWY,C.cXm,C.cXn,C.cXq,C.cXs,C.cXt,C.cXu,C.cXw,C.cXx,C.dRM,C.dRb,C.dR6,C.dQF,C.dQS,C.dQV,C.dR3,C.dQt,C.dRe,C.dR8,C.dQv,C.dQw,C.dQx,C.dQC,C.dQA,C.dQz,C.dQP,C.dQQ,C.dQK,C.dRl,C.dRh,C.d4D,C.d4E,C.fnS,C.fnT,C.fnU,C.fnQ,C.fnR,C.fnX,C.fnY,C.fnZ,C.fnV,C.fnW,C.d4X,C.d4N,C.d4I,C.d4S,C.d4T,C.d4W,C.d4K,C.d4Z,C.d5_,C.d50,C.f6j,C.eIB,C.dkP,C.dkZ,C.dl_,C.dl0,C.dl3,C.dl2,C.dl4,C.dl9,C.dla,C.c6Q,C.c6P,C.c6L,C.c6M,C.c6N,C.c6O,C.c6V,C.c6S,C.c6T,C.dRy,C.dRB,C.dRA,C.dRH,C.dRI,C.dCS,C.fDM,C.fD8,C.fKB,C.fDd,C.fDc,C.cXL,C.cXM,C.cXH,C.cvr,C.cvt,C.cvu,C.cvm,C.cvv,C.f5M,C.fBU,C.eFJ,C.eFF,C.eFB,C.eFz,C.eFN,C.fKt,C.eFW,C.eG4,C.eG_,C.eG0,C.eG9,C.cuJ,C.cuH,C.cuI,C.fn2,C.fKX,C.flz,C.bM8,C.bM7,C.bM4,C.bM5,C.bM6,C.f91,C.f92,C.fD_,C.fD0,C.fD1,C.fD2,C.fD3,C.fKV,C.fnu,C.fpX,C.fpY,C.fq_,C.fq0,C.fCN,C.fKQ,C.fKR,C.fKS,C.fnb,C.fnc,C.fL0,C.fmM,C.fmN,C.fKC,C.fqJ,C.fCJ,C.fpU,C.fpV,C.fCF,C.f9z,C.f9A,C.f9B,C.f9C,C.f9D,C.f9R,C.f9N,C.f9O,C.fe_,C.fe0,C.fg6,C.fkT,C.fkU])
u(A.au,[C.aX9,C.ajA,C.aSY,C.XV,C.b8A,C.bcQ,C.bgy,C.bu8,C.bjU,C.acd,C.bgx,C.acc,C.bgw,C.aAs,C.aGD,C.ace,C.Jj,C.bcR,C.abv,C.bcP,C.bcU,C.aX7,C.ard,C.acz])
u(A.mH,[C.b9b,C.bao,C.baf,C.aFv,C.bfB,C.bcT,C.bbX,C.bhG,C.btY])
u(A.j3,[C.fE7,C.fE8,C.fE9,C.fE0,C.fE1,C.fEc,C.fEd,C.dDK,C.dDw,C.dDz,C.dDd,C.dDe,C.dDf,C.dDc,C.dDk,C.dDb,C.dDl,C.dDm,C.dDa,C.dDn,C.dD9,C.dDo,C.dD8,C.dDp,C.dD0,C.dD1,C.dD7,C.dDq,C.dD5,C.dDr,C.dD4,C.dDg,C.dD3,C.dDh,C.dD_,C.dDi,C.dDj,C.dDL,C.dDM,C.dDA,C.dDB,C.dDC,C.dDD,C.dDE,C.dDF,C.dDG,C.dDS,C.dDJ,C.fnP,C.d3z,C.d3x,C.d3y,C.d3A,C.d4d,C.d42,C.d4_,C.d3C,C.d43,C.d3I,C.d3J,C.d3L,C.d41,C.d3H,C.d3N,C.d4a,C.d3X,C.d3W,C.d3Y,C.d3Z,C.d3S,C.d3U,C.d3V,C.d3O,C.d46,C.d49,C.d3E,C.d3F,C.d5Z,C.d5Y,C.d5X,C.d5W,C.d62,C.d5V,C.d63,C.d4t,C.d4u,C.d4v,C.d4y,C.d4r,C.d4q,C.cDx,C.cWX,C.cX9,C.cX8,C.cXo,C.cX7,C.cXp,C.cX6,C.cX5,C.cXr,C.cX4,C.cXh,C.cXg,C.cXy,C.dRL,C.dRK,C.dRN,C.dRO,C.dRP,C.dRJ,C.dRR,C.dRQ,C.dR9,C.dRa,C.dRc,C.dQG,C.dQU,C.dQT,C.dQW,C.dR5,C.dQZ,C.dQY,C.dR_,C.dQX,C.dR0,C.dR1,C.dR4,C.dQu,C.dR7,C.dQy,C.dQB,C.dQD,C.dRd,C.dQJ,C.dQH,C.dQL,C.dQM,C.dQI,C.dQN,C.dQR,C.dRm,C.dRn,C.dRf,C.dRi,C.dRj,C.dRk,C.dRp,C.dRg,C.dQE,C.d4C,C.d4B,C.d4G,C.d4Q,C.d4H,C.eIA,C.dkQ,C.dkN,C.dkO,C.dkY,C.dkX,C.dkW,C.dl5,C.dkV,C.dl6,C.dkU,C.dl7,C.dkT,C.dl8,C.dkS,C.dkR,C.dl1,C.dlb,C.dlk,C.dRz,C.dRD,C.dRE,C.dRv,C.dRw,C.dRx,C.dRC,C.dRG,C.dRF,C.dRq,C.dRr,C.dRs,C.dRt,C.dRu,C.dCT,C.fDJ,C.cen,C.cXK,C.cXJ,C.cXN,C.cXG,C.cXI,C.cvj,C.cvp,C.cvq,C.cvo,C.cvs,C.cvn,C.cvk,C.cvl,C.cvw,C.f5N,C.f5O,C.eFL,C.eFC,C.eFD,C.eFE,C.eFG,C.eFH,C.eFK,C.eFx,C.eFA,C.eFM,C.eFy,C.eFP,C.eFQ,C.eFR,C.eFS,C.eFO,C.eFs,C.eFt,C.eFu,C.eFw,C.eFv,C.eGa,C.eGb,C.eFU,C.eFV,C.eG1,C.eG2,C.eG3,C.eFY,C.eFZ,C.eGh,C.eGg,C.eGi,C.eGf,C.eFT,C.eFX,C.eGd,C.eGc,C.eG7,C.eG8,C.eG6,C.eG5])
u(A.ag,[C.ane,C.S3,C.YC,C.YG,C.YE,C.Yc,C.aok,C.aoe,C.Zf,C.aoi,C.ZA,C.ZB,C.a5q,C.Ye,C.Yd,C.XM,C.a0i,C.F3,C.avU,C.arc,C.ar6,C.arb,C.Nw])
u(A.ah,[C.aBs,C.bcN,C.ayv,C.bd7,C.ayw,C.bam,C.aC2,C.aC_,C.aAr,C.aC1,C.aC0,C.bi0,C.aJW,C.axh,C.axg,C.aw0,C.bu0,C.aM4,C.aM5,C.aDx,C.bjn,C.aDw,C.bvM])
u(A.ke,[C.dDv,C.dDx,C.dDs,C.dDR,C.fpT,C.bM3,C.d4c,C.d4b,C.d3T,C.d47,C.d48,C.d4z,C.dR2,C.dQO,C.dRo,C.d4P,C.d4O,C.d4M,C.d4R,C.d4U,C.d4V,C.d4F,C.d4J,C.d4L,C.d4Y,C.c6J,C.c6R,C.c6W,C.dCU,C.fDL,C.fDK,C.f5K,C.f5L,C.eFI,C.eGe,C.cuK,C.fdl,C.f93,C.fpZ,C.fmO,C.fpW,C.f9Q,C.f9P,C.fe1])
t(C.bhH,C.aJW)
u(A.m4,[C.aay,C.aIh,C.H5,C.ajB,C.cuM,C.cuN])
t(C.btZ,C.aM4)
t(C.bu_,C.aM5)
t(C.aDy,C.bvM)
t(C.b72,A.b6S)
t(C.bu1,A.a55)
t(C.b71,C.bu1)
w(C.aJW,A.eU)
w(C.aM4,A.c9)
w(C.aM5,A.c9)
v(C.bvM,A.ex)
v(C.bu1,A.iZ)})()
A.jT(b.typeUniverse,JSON.parse('{"aX9":{"au":[],"r":[]},"b9b":{"aB":[]},"ane":{"ag":[],"r":[]},"aBs":{"ah":["ane"]},"S3":{"ag":[],"r":[]},"ajA":{"au":[],"r":[]},"aSY":{"au":[],"r":[]},"bcN":{"ah":["S3"]},"YC":{"ag":[],"r":[]},"YG":{"ag":[],"r":[]},"YE":{"ag":[],"r":[]},"Yc":{"ag":[],"r":[]},"ayv":{"ah":["YC"]},"bd7":{"ah":["YG"]},"ayw":{"ah":["YE"]},"XV":{"au":[],"r":[]},"bao":{"aB":[]},"baf":{"aB":[]},"bam":{"ah":["Yc"]},"aFv":{"aB":[]},"bfB":{"aB":[]},"b8A":{"au":[],"r":[]},"aok":{"ag":[],"r":[]},"aoe":{"ag":[],"r":[]},"Zf":{"ag":[],"r":[]},"ace":{"au":[],"r":[]},"aC2":{"ah":["aok"]},"aC_":{"ah":["aoe"]},"bcQ":{"au":[],"r":[]},"bcT":{"aB":[]},"bgy":{"au":[],"r":[]},"bbX":{"aB":[]},"bu8":{"au":[],"r":[]},"bjU":{"au":[],"r":[]},"aAr":{"ah":["Zf"]},"acd":{"au":[],"r":[]},"bgx":{"au":[],"r":[]},"acc":{"au":[],"r":[]},"bgw":{"au":[],"r":[]},"aAs":{"au":[],"r":[]},"aGD":{"au":[],"r":[]},"Jj":{"au":[],"r":[]},"aoi":{"ag":[],"r":[]},"ZA":{"ag":[],"r":[]},"ZB":{"ag":[],"r":[]},"aC1":{"ah":["aoi"]},"bcR":{"au":[],"r":[]},"abv":{"au":[],"r":[]},"bcP":{"au":[],"r":[]},"bcU":{"au":[],"r":[]},"aC0":{"ah":["ZA"]},"bi0":{"ah":["ZB"]},"aX7":{"au":[],"r":[]},"a5q":{"ag":[],"r":[]},"bhH":{"ah":["a5q"]},"bhG":{"aB":[]},"ard":{"au":[],"r":[]},"Ye":{"ag":[],"r":[]},"Yd":{"ag":[],"r":[]},"XM":{"ag":[],"r":[]},"a0i":{"ag":[],"r":[]},"axh":{"ah":["Ye"]},"axg":{"ah":["Yd"]},"aw0":{"ah":["XM"]},"bu0":{"ah":["a0i"]},"F3":{"ag":[],"r":[]},"avU":{"ag":[],"r":[]},"btZ":{"ah":["F3"]},"bu_":{"ah":["avU"]},"btY":{"aB":[]},"arc":{"ag":[],"r":[]},"aDx":{"ah":["arc"]},"acz":{"au":[],"r":[]},"ar6":{"ag":[],"r":[]},"arb":{"ag":[],"r":[]},"bjn":{"ah":["ar6"]},"aDw":{"ah":["arb"]},"Nw":{"ag":[],"r":[]},"aDy":{"ah":["Nw"],"ex":[]},"b71":{"iZ":[],"fe":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aPL"),Q:w("qN"),n:w("bo<n,n>"),c5:w("aRI"),dY:w("aRJ"),d:w("eR<n?>"),e:w("H4"),B:w("n5"),P:w("hV"),k:w("ky"),x:w("ay<~>"),f5:w("O<a2h>"),V:w("O<ac>"),t:w("O<qN>"),O:w("O<w>"),ac:w("O<eR<n?>>"),I:w("O<n5>"),u:w("O<hV>"),_:w("O<ky>"),cl:w("O<ay<aj<a4<n,@>>>>"),R:w("O<n7>"),cq:w("O<aj<+(N,N)>>"),ez:w("O<a4<n,aC>>"),gE:w("O<a4<n,n>>"),c7:w("O<a4<n,@>>"),fD:w("O<mm>"),bp:w("O<o8>"),g:w("O<u>"),v:w("O<hn>"),L:w("O<+(n,n)>"),G:w("O<+(N,N)>"),bF:w("O<+count,id,name(H,n,n)>"),A:w("O<cP>"),s:w("O<n>"),aS:w("O<iO>"),p:w("O<r>"),C:w("O<fe>"),D:w("O<lf>"),fp:w("O<Jo>"),M:w("O<Jw>"),gZ:w("O<aFA>"),Y:w("O<adL>"),E:w("O<aHA>"),F:w("O<N>"),dC:w("O<H>"),dS:w("O<aB?>"),d4:w("O<n?>"),J:w("cr<ah<ag>>"),b:w("aj<n5>"),do:w("aj<hV>"),r:w("aj<ky>"),U:w("aj<a4<n,@>>"),gk:w("aj<+(n,n)>"),bC:w("aj<+count,id,name(H,n,n)>"),h:w("aj<n>"),c:w("aj<lf>"),j:w("aj<@>"),fK:w("bu<n,n>"),d2:w("bu<n,aj<a4<n,@>>>"),a:w("a4<n,@>"),f:w("a4<@,@>"),gv:w("K<n,H6>"),w:w("iz"),g2:w("r6"),bV:w("an7"),fL:w("cp"),K:w("aC"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(N,aj<hV>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),e7:w("bn<N>"),gc:w("dD"),b4:w("cx<H>"),W:w("kb<n>"),l:w("r"),cM:w("fe"),i:w("lf"),cc:w("Ff"),bw:w("acc<n?>"),cy:w("Jy"),q:w("mV"),y:w("R"),gR:w("N"),z:w("@"),S:w("H"),eK:w("aj<ky>?"),m:w("aoh?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),X:w("+qrPayload,token,usesRemaining(n,n,H)?"),gF:w("+members,trees,viewOnly(H,H,R)?"),Z:w("pL?"),T:w("n?"),aD:w("dD?"),o:w("lf?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aWe=new A.bq(B.he,B.bE,B.he,B.bE)
D.a9m=new A.bq(B.he,B.k2,B.he,B.k2)
D.aWq=new A.bq(B.ii,B.bE,B.bE,B.bE)
D.aWu=new A.aA(B.cZ,1.4,B.q,-1)
D.aWE=new A.aA(B.ad,1,B.q,-1)
D.aY3=new A.aY(0,1/0,64,1/0)
D.aY7=new A.aY(0,84,0,1/0)
D.awE=w([B.lD,B.qH,B.c],x.O)
D.bSy=new A.a8(B.ax,B.aC,B.x,D.awE,null,null)
D.aYS=new A.o(null,null,null,null,null,D.bSy,B.n)
D.cWS=w([B.aV,B.bU],x.O)
D.bUD=new A.a8(B.b0,B.b6,B.x,D.cWS,null,null)
D.aZb=new A.o(null,null,null,null,null,D.bUD,B.n)
D.b4j=new A.fi(null,null,null,null,null,E.jM,null,null,null,null)
D.aaF=new A.cq(B.A,null,null,D.b4j,null)
D.kb=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eWh=new A.G(!0,D.kb,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe8=new A.x("No books on the shelf yet.",null,D.eWh,null,null,null,null,null,null,null,null,null)
D.e3g=new A.C(B.nR,D.fe8,null)
D.b2R=new A.cq(B.A,null,null,D.e3g,null)
D.b3K=new A.cq(B.A,null,null,Z.V7,null)
D.b5I=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b6a=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.abQ=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b8N=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b93=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.ad6=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bcN=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bdc=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.Eo=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.beM=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bh5=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.aeK=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.f8N=new A.x("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bmm=new A.eR(null,D.f8N,B.f1,null,x.d)
D.fhj=new A.x("None",null,null,null,null,null,null,null,null,null,null,null)
D.bmo=new A.eR(null,D.fhj,B.f1,null,x.d)
D.bmW=new A.b9(38e5)
D.bnG=new A.i9(0,10,0,10)
D.bnQ=new A.Q(0,1,0,0)
D.bo_=new A.i9(0,4,0,4)
D.boh=new A.Q(10,10,14,10)
D.bot=new A.i9(10,4,10,4)
D.boB=new A.i9(10,8,10,8)
D.boC=new A.Q(10,8,8,8)
D.bp1=new A.Q(12,6,12,2)
D.bpj=new A.Q(14,10,6,6)
D.bpk=new A.Q(14,12,14,0)
D.bpo=new A.Q(14,12,14,8)
D.bpr=new A.Q(14,12,8,14)
D.bpv=new A.i9(14,14,14,14)
D.bq9=new A.Q(16,2,16,10)
D.bqj=new A.Q(16,6,16,30)
D.bql=new A.Q(16,6,16,8)
D.ah3=new A.Q(18,16,18,8)
D.bqW=new A.Q(18,20,18,22)
D.ah7=new A.Q(18,24,18,24)
D.br1=new A.Q(18,30,18,30)
D.brj=new A.Q(20,10,12,20)
D.brx=new A.Q(20,18,16,18)
D.brz=new A.Q(20,18,20,6)
D.bsn=new A.Q(24,32,24,28)
D.bso=new A.Q(24,36,24,32)
D.bss=new A.Q(26,26,24,14)
D.bsG=new A.Q(2,4,2,8)
D.bsK=new A.Q(30,0,30,0)
D.bsV=new A.Q(38,22,22,22)
D.ahp=new A.Q(40,24,24,24)
D.bsX=new A.i9(40,40,40,40)
D.bsZ=new A.Q(46,30,30,30)
D.ahs=new A.Q(4,0,0,8)
D.btq=new A.Q(56,40,40,40)
D.btu=new A.Q(1.25,1.25,1.25,1.25)
D.btv=new A.Q(60,0,60,0)
D.bty=new A.Q(6,14,6,16)
D.btK=new A.i9(7,3,7,3)
D.buf=new A.Q(5,1.5,5,1.5)
D.buq=new A.Q(6,2.5,6,2.5)
D.ft2=new A.x("Signature",null,B.np,null,null,null,null,null,null,null,null,null)
D.buL=new A.bD(1,B.bi,D.ft2,null)
D.fqf=new A.x("Tell the AI what to fix",null,B.du,null,null,null,null,null,null,null,null,null)
D.bvv=new A.bD(1,B.bi,D.fqf,null)
D.f2v=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsa=new A.x("Worksheets",null,D.f2v,null,null,null,null,null,null,null,null,null)
D.f2D=new A.G(!0,E.abn,null,null,null,null,13,B.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr5=new A.x("Track your project spending",null,D.f2D,null,null,null,null,null,null,null,null,null)
D.cPb=w([D.fsa,B.at,D.fr5],x.p)
D.bjV=new A.fq(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cPb,null)
D.bvA=new A.bD(1,B.bi,D.bjV,null)
D.eYP=new A.G(!0,E.jM,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f80=new A.x("FAMILY LIBRARY",null,D.eYP,null,null,null,null,null,null,null,null,null)
D.bvR=new A.bD(1,B.bi,D.f80,null)
D.M8=new C.H4("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.YX=new C.H5(0,"male")
D.aik=new C.H5(1,"female")
D.xA=new C.H5(2,"unknown")
D.tB=new C.ajB(0,"owner")
D.M9=new C.ajB(1,"editor")
D.ki=new C.ajB(2,"viewer")
D.aj6=new A.a0(61199,"MaterialIcons",!1)
D.bzM=new A.a0(61504,"MaterialIcons",!1)
D.bzN=new A.a0(61505,"MaterialIcons",!1)
D.bzP=new A.a0(61587,"MaterialIcons",!1)
D.bzV=new A.a0(61890,"MaterialIcons",!1)
D.bAO=new A.a0(63034,"MaterialIcons",!0)
D.bBD=new A.a0(63429,"MaterialIcons",!1)
D.aln=new A.a0(984520,"MaterialIcons",!1)
D.bAk=new A.a0(62776,"MaterialIcons",!1)
D.bDY=new A.ae(D.bAk,26,B.aZ,null,null,null)
D.byL=new A.a0(57648,"MaterialIcons",!1)
D.bEf=new A.ae(D.byL,14,B.c,null,null,null)
D.bEw=new A.ae(B.Fw,17,null,null,null,null)
D.bF1=new A.ae(E.ZQ,null,null,null,null,null)
D.bF4=new A.ae(B.jg,18,E.jM,null,null,null)
D.ZC=new A.a0(62044,"MaterialIcons",!1)
D.bFa=new A.ae(D.ZC,null,B.aV,null,null,null)
D.bG_=new A.ae(B.dW,16,null,null,null,null)
D.bG6=new A.ae(D.ZC,32,B.aV,null,null,null)
D.bGo=new A.ae(E.aj7,18,B.cZ,null,null,null)
D.bHr=new A.ae(B.FG,22,B.ay,null,null,null)
D.bHD=new A.ae(B.dW,22,B.aZ,null,null,null)
D.bHO=new A.ae(Q.ZH,22,B.c,null,null,null)
D.bHT=new A.ae(B.tK,52,B.c,null,null,null)
D.bI2=new A.ae(B.FG,30,B.ay,null,null,null)
D.am_=new A.ae(B.tT,22,B.c,null,null,null)
D.bIu=new A.ae(B.dW,17,null,null,null,null)
D.bIN=new A.ae(B.vu,26,B.cZ,null,null,null)
D.bJw=new A.ae(B.a_1,16,null,null,null,null)
D.bKf=new A.ae(B.tK,24,B.c,null,null,null)
D.bKk=new A.ae(B.MB,20,B.rd,null,null,null)
D.bKp=new A.ae(B.Fu,null,B.bU,null,null,null)
D.bKw=new A.ae(B.jg,18,B.c,null,null,null)
D.bL7=new A.ae(B.cA,22,B.ad,null,null,null)
D.bLX=new A.ae(B.e4,16,B.ad,null,null,null)
D.bM8=new A.ae(D.ZC,20,B.aV,null,null,null)
D.amq=new A.ae(B.hy,20,null,null,null,null)
D.bMD=new A.ae(B.cA,18,D.kb,null,null,null)
D.bMV=new A.ae(B.xW,28,B.c,null,null,null)
D.bN2=new A.ae(B.Mr,null,B.fY,null,null,null)
D.bNm=new A.ae(B.xW,24,B.c,null,null,null)
D.bNN=new A.ae(B.tK,null,B.aV,null,null,null)
D.bNO=new A.ae(B.jz,20,B.cZ,null,null,null)
D.bO7=new A.ae(B.Fw,16,null,null,null,null)
D.bPE=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ey,!0,null,null,null,null)
D.d2W=w([B.bt,B.aV,B.f7,B.aZ],x.O)
D.bR0=new A.a8(B.ax,B.aC,B.x,D.d2W,null,null)
D.bdJ=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.biZ=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cMc=w([D.bdJ,D.biZ],x.O)
D.bRb=new A.a8(B.b0,B.b6,B.x,D.cMc,null,null)
D.cYA=w([B.eX,B.fu,B.f7],x.O)
D.bRf=new A.a8(B.ax,B.aC,B.x,D.cYA,null,null)
D.adH=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b6b=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cO6=w([D.adH,D.b6b],x.O)
D.bRO=new A.a8(B.b0,B.b6,B.x,D.cO6,null,null)
D.b9e=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.aw2=w([D.b9e,D.adH],x.O)
D.bS7=new A.a8(B.ax,B.aC,B.x,D.aw2,null,null)
D.acF=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.bbh=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cXM=w([D.acF,D.bbh],x.O)
D.bSJ=new A.a8(B.a3,B.a7,B.x,D.cXM,null,null)
D.d8W=w([B.bI,B.mS],x.O)
D.bSL=new A.a8(B.b0,B.b6,B.x,D.d8W,null,null)
D.bdF=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.d9N=w([D.bdF,D.kb,D.kb,Aj.Wr],x.O)
D.dbX=w([0,0.07,0.9,1],x.F)
D.bTf=new A.a8(B.a3,B.a7,B.x,D.d9N,D.dbX,null)
D.bTq=new A.a8(B.ax,B.aC,B.x,B.Q6,null,null)
D.d8x=w([B.aZ,B.aV,B.bU],x.O)
D.bUp=new A.a8(B.ax,B.aC,B.x,D.d8x,null,null)
D.ceQ=w([B.bt,B.aZ,B.eX],x.O)
D.ceX=w([B.by,B.aE,B.jr],x.O)
D.ceZ=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bcj=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cl2=w([D.bcj,E.adp],x.O)
D.e_6=new A.u(1,2)
D.eI0=new A.cP(B.aX,D.e_6,3)
D.atb=w([D.eI0],x.A)
D.csg=w([B.h0,B.c8,B.f6],x.O)
D.cuU=w([B.bJ,B.bv,B.bm],x.O)
D.bwj=new C.u0("classic","Classic leather","Gold-edged brown leather",D.aw2,E.jM,E.jM,"\u2766",B.L,!0,!1,!1,!1)
D.b5w=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bhW=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cQL=w([D.b5w,D.bhW],x.O)
D.ads=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bwe=new C.u0("ornate","Ornate gold","Double gold border and flourishes",D.cQL,D.ads,D.ads,"\u2726",B.L,!0,!0,!0,!1)
D.b8V=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bep=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cJe=w([D.b8V,D.bep],x.O)
D.bwd=new C.u0("parchment","Parchment","Old paper with dark ink",D.cJe,D.Eo,G.ir,"\u2767",B.L,!0,!1,!1,!0)
D.ab4=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bgp=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.d6Y=w([D.ab4,D.bgp],x.O)
D.bbU=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bfN=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bwg=new C.u0("minimal","Clean paper","Plain and elegant, like a printed book",D.d6Y,D.bbU,D.bfN,"",B.L,!0,!0,!1,!0)
D.bwi=new C.u0("midnight","Midnight","Deep blue with silver stars",L.awl,B.cp,B.bM,"\u2727",B.L,!0,!0,!1,!1)
D.bwc=new C.u0("emerald","Emerald library","Green cloth, title on the left",A_.atA,E.jM,B.h1,"\u25c6",B.bg,!0,!1,!1,!1)
D.bgN=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.d5p=w([B.er,D.bgN],x.O)
D.bcW=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.be1=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bwh=new C.u0("rose","Rose vintage","Burgundy with rose-gold lettering",D.d5p,D.bcW,D.be1,"\u2740",B.L,!0,!1,!0,!1)
D.d9q=w([B.cC,P.mU],x.O)
D.bwf=new C.u0("modern","Modern","Dark, bold, left-aligned",D.d9q,B.aU,B.c,"",B.bg,!1,!0,!1,!1)
D.a0Y=w([D.bwj,D.bwe,D.bwd,D.bwg,D.bwi,D.bwc,D.bwh,D.bwf],A.ax("O<u0>"))
D.cIL=w([B.bU,B.bj],x.O)
D.bdv=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cJq=w([D.ab4,D.bdv],x.O)
D.b8S=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cKZ=w([D.b8S,B.db],x.O)
D.cMq=w([B.b7,B.iL,B.ok],x.O)
D.cMN=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b67=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.baE=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.dbT=w([D.acF,D.b67,D.baE],x.O)
D.bwk=new C.u1("leather","Leather",D.dbT,"vintage")
D.cTG=w([B.dq,B.Ks,A3.VD],x.O)
D.bwr=new C.u1("midnight","Midnight",D.cTG,"starry")
D.cMr=w([B.ff,B.e9,B.l3],x.O)
D.bwq=new C.u1("forest","Forest",D.cMr,"story")
D.ddJ=w([B.eM,B.er,B.kc],x.O)
D.bwn=new C.u1("burgundy","Burgundy",D.ddJ,"royal")
D.cuu=w([B.aE,B.pj,B.ny],x.O)
D.bwo=new C.u1("royal","Royal",D.cuu,"royal")
D.cOI=w([B.bv,B.cC,P.mU],x.O)
D.bwl=new C.u1("charcoal","Charcoal",D.cOI,"geo")
D.dc0=w([B.cb,B.dO,B.wU],x.O)
D.bwp=new C.u1("sunset","Sunset",D.dc0,"sunset")
D.dcE=w([B.iL,B.Ep,B.VH],x.O)
D.bwm=new C.u1("ocean","Ocean",D.dcE,"band")
D.ys=w([D.bwk,D.bwr,D.bwq,D.bwn,D.bwo,D.bwl,D.bwp,D.bwm],A.ax("O<u1>"))
D.cP5=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cPC=w([B.ak,B.aK,B.M],x.O)
D.cQQ=w([B.er,B.e9,B.dq,B.fv,B.wX,B.cZ,B.jP,B.eu,B.d9],x.O)
D.cQR=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eI1=new A.cP(B.dn,B.dD,8)
D.cR_=w([D.eI1],x.A)
D.cS2=w([B.bV,B.dO,B.kF],x.O)
D.cSu=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cTC=w([B.bV,B.hg],x.O)
D.cVx=w([B.aM,B.Ag,B.wM],x.O)
D.cWo=w([B.bK,B.cj,B.dy,B.aM],x.O)
D.cWT=w([B.j4,B.cb,B.t3],x.O)
D.cXl=w([B.eX,B.cZ],x.O)
D.cXR=w([B.ct,B.fC,B.hu],x.O)
D.cY1=w([B.aU,B.bj,B.dq],x.O)
D.cYx=w([B.es,B.d_,B.e9],x.O)
D.cYO=w([B.dS,B.dq,B.Ks],x.O)
D.d_2=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a1S=w(["leather","linen","plain","stars","rays"],x.s)
D.bDE=new A.a0(985219,"MaterialIcons",!1)
D.bDc=new A.a0(983781,"MaterialIcons",!1)
D.avN=w([B.ajw,B.hZ,B.lK,B.i_,D.bDE,B.FQ,B.pG,D.bDc,L.ala,B.xY,B.pI,B.mk],A.ax("O<a0>"))
D.a1X=w(["double","single","corners","none"],x.s)
D.d1G=w([B.dA,B.bn,B.eu],x.O)
D.d1T=w([],x.t)
D.BR=w([],x.u)
D.d44=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.d6i=w([B.aH,B.fC,B.fv],x.O)
D.d7y=w([B.cn,B.om,B.WB],x.O)
D.d7L=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dqf=new C.lv("construction","Construction","Jobsite & builds",B.xN)
D.dqm=new C.lv("house","Home Build","Houses & rooms",B.vp)
D.dqc=new C.lv("grocery","Grocery","Store & pantry",B.a_y)
D.dqb=new C.lv("calculator","Calculations","Math & estimates",B.MM)
D.dqk=new C.lv("lumber","Materials","Lumber & supplies",B.N2)
D.dq8=new C.lv("kitchen","Kitchen","Remodel & meals",A9.akk)
D.bD9=new A.a0(983756,"MaterialIcons",!1)
D.dqd=new C.lv("landscape","Landscaping","Yard & garden",D.bD9)
D.dq7=new C.lv("plumbing","Plumbing","Pipes & water",B.pR)
D.dqn=new C.lv("electrical","Electrical","Wiring & power",B.h8)
D.dq5=new C.lv("store","Retail Shop","Daily business",B.kM)
D.dq6=new C.lv("paint_remodel","Paint & Remodel","Colors & walls",Aa.a_7)
D.bCz=new A.a0(983311,"MaterialIcons",!1)
D.dqj=new C.lv("roofing","Roofing","Roofs & exteriors",D.bCz)
D.bDm=new A.a0(983986,"MaterialIcons",!1)
D.dq4=new C.lv("warehouse","Warehouse","Storage & stock",D.bDm)
D.dqh=new C.lv("vehicles","Vehicles","Fleet & transport",B.FR)
D.bAm=new A.a0(62785,"MaterialIcons",!1)
D.dqa=new C.lv("farm","Farm","Crops & livestock",D.bAm)
D.dq9=new C.lv("restaurant","Restaurant","Food & catering",B.tR)
D.dqg=new C.lv("tools","Tools","Workshop gear",B.FN)
D.dql=new C.lv("wallet","Cash & Wallet","Quick spending",B.jz)
D.bBy=new A.a0(63395,"MaterialIcons",!1)
D.dqi=new C.lv("concrete","Concrete","Foundation work",D.bBy)
D.dqe=new C.lv("blueprint","Blueprint","Plans & design",Af.ajC)
D.a2n=w([D.dqf,D.dqm,D.dqc,D.dqb,D.dqk,D.dq8,D.dqd,D.dq7,D.dqn,D.dq5,D.dq6,D.dqj,D.dq4,D.dqh,D.dqa,D.dq9,D.dqg,D.dql,D.dqi,D.dqe],A.ax("O<lv>"))
D.d8e=w([B.bq,B.bn],x.O)
D.d8X=w([B.i5,B.nC,B.dF],x.O)
D.a2v=w(["top","middle","bottom"],x.s)
D.dbh=w([B.cs,B.bj,B.dq],x.O)
D.dbO=w([B.b8,B.d_,B.e9],x.O)
D.ddE=w([B.bJ,B.ak],x.O)
D.ddF=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dXN={top:0,middle:1,bottom:2}
D.dgQ=new A.bo(D.dXN,["Top","Middle","Bottom"],x.n)
D.dXr={double:0,single:1,corners:2,none:3}
D.dgV=new A.bo(D.dXr,["Double line","One line","Corners","None"],x.n)
D.dYz={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dii=new A.bo(D.dYz,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.diu=new A.bo(B.ie,[],A.ax("bo<H,+(n,n)>"))
D.dXF={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.C1=new A.bo(D.dXF,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bo<n,H>"))
D.dkP=new F.Mp(32,null)
D.dkQ=new F.Mp(40,null)
D.dkR=new F.Mp(46,null)
D.aEX=new C.arb(null)
D.e03=new A.u(8,14)
D.feL=new A.x("Write a new book",null,B.i3,null,B.L,null,null,null,null,null,null,null)
D.e2K=new A.C(B.l7,D.feL,null)
D.alB=new A.ae(B.hx,18,B.c,null,null,null)
D.f8l=new A.x("Add",null,B.mB,null,null,null,null,null,null,null,null,null)
D.cWD=w([D.alB,B.q7,D.f8l],x.p)
D.eFZ=new A.cm(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cWD,null)
D.e33=new A.C(B.nQ,D.eFZ,null)
D.e34=new A.C(E.afT,Z.V7,null)
D.f2q=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbk=new A.x("New Project",null,D.f2q,null,null,null,null,null,null,null,null,null)
D.d_o=w([D.alB,B.ab,D.fbk],x.p)
D.eG1=new A.cm(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d_o,null)
D.e3f=new A.C(B.ix,D.eG1,null)
D.fdA=new A.x("Choose your header",null,U.ry,null,null,null,null,null,null,null,null,null)
D.e3A=new A.C(B.hJ,D.fdA,null)
D.b4y=new A.fi(2.2,null,null,null,null,B.cZ,null,null,null,null)
D.eKF=new A.a7(22,22,D.b4y,null)
D.b2N=new A.cq(B.A,null,null,D.eKF,null)
D.e3F=new A.C(B.Xw,D.b2N,null)
D.bpE=new A.Q(14,2,14,6)
D.fqP=new A.x("The top of your book. Tap a design to see it.",null,T.SP,null,null,null,null,null,null,null,null,null)
D.e3G=new A.C(D.bpE,D.fqP,null)
D.e5d=new A.iM(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.e5g=new A.iM(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aGb=new A.iM(1,0.9607843137254902,0.48627450980392156,0)
D.HR=new A.iM(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.yZ=new A.iM(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.e5m=new A.iM(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fMf=new C.bfB(null)
D.bkO=new A.md(D.fMf,null,B.au,null,null)
D.aJP=new A.cK(0,0,0,0,null,null,D.bkO,null)
D.esu=new A.y(-42,42)
D.eAO=new A.cL([0,0,1,1])
D.aL6=new A.aa(0,0,520,160)
D.aLj=new A.b7(B.rM,B.Y)
D.fqn=new A.x("Let the AI write it from your tree",null,B.kv,null,B.L,null,null,null,null,null,null,null)
D.bwY=new A.dm(1,B.ci,D.fqn,null)
D.cTB=w([E.a00,B.ab,D.bwY],x.p)
D.eFH=new A.cm(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cTB,null)
D.f81=new A.x("Save member",null,B.cc,null,null,null,null,null,null,null,null,null)
D.d6z=w([D.amq,B.ab,D.f81],x.p)
D.eFP=new A.cm(B.aO,B.bb,B.j,B.m,null,B.p,null,0,D.d6z,null)
D.bHI=new A.ae(B.hK,14,B.aZ,null,null,null)
D.eXv=new A.G(!0,B.aZ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbK=new A.x("Cashier",null,D.eXv,null,null,null,null,null,null,null,null,null)
D.d_U=w([D.bHI,B.bp,D.fbK],x.p)
D.eFR=new A.cm(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d_U,null)
D.f82=new A.x("Transfer & settings",null,B.du,null,null,null,null,null,null,null,null,null)
D.bvm=new A.bD(1,B.bi,D.f82,null)
D.cLW=w([D.am_,B.av,D.bvm],x.p)
D.eFS=new A.cm(B.aO,B.e,B.j,B.m,null,B.p,null,0,D.cLW,null)
D.eJo=new A.at(16,40)
D.eJt=new A.at(22,64)
D.eJA=new A.at(280,88)
D.eKk=new A.a7(30,null,null,null)
D.eLD=new A.hK(2,12,12,1.05,null)
D.fbq=new A.x("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eMl=new A.b1(D.fbq,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fbF=new A.x("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aN8=new A.b1(D.fbF,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fjz=new A.x("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eMP=new A.b1(D.fjz,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ftC=new A.x("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eMU=new A.b1(D.ftC,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fdy=new A.x("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eN0=new A.b1(D.fdy,null,null,null,null,null,null,null,null,null,null,null,null,B.fG,!1,null,null,null,B.r,null)
D.fr1=new A.x("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aNc=new A.b1(D.fr1,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.f8C=new A.x("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eNq=new A.b1(D.f8C,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fuh=new A.x("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eO9=new A.b1(D.fuh,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fpl=new A.x("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eOy=new A.b1(D.fpl,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ftG=new A.x("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eOB=new A.b1(D.ftG,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fl5=new A.x("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eOD=new A.b1(D.fl5,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ffl=new A.x("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eOE=new A.b1(D.ffl,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ffm=new A.x("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.ePE=new A.b1(D.ffm,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fbs=new A.x("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.ePW=new A.b1(D.fbs,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fdf=new A.x("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eQe=new A.b1(D.fdf,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fkB=new A.x("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eQu=new A.b1(D.fkB,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fg8=new A.x("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eQv=new A.b1(D.fg8,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.eTu=new A.G(!0,D.kb,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTU=new A.G(!0,D.kb,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUx=new A.rp(!0,B.rm,null,null,null,null,B.dr,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUO=new A.G(!0,D.kb,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVl=new A.G(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a6K=new A.rp(!0,B.Rs,null,null,null,null,B.dr,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWk=new A.G(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWJ=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYg=new A.G(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYk=new A.G(!0,G.ir,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZz=new A.G(!0,B.M,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_g=new A.G(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0_=new A.G(!0,B.bU,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f03=new A.G(!0,B.bI,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0p=new A.G(!0,D.Eo,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0y=new A.G(!0,B.aZ,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1w=new A.G(!0,B.cZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2_=new A.G(!0,B.bU,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2o=new A.G(!0,B.aZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3P=new A.G(!0,B.ak,null,null,null,null,11.5,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3X=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPm=new A.G(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7d=new A.G(!0,B.ak,null,null,null,null,12,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5D=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f60=new A.G(!0,G.ir,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f67=new A.G(!0,G.ir,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6S=new A.x("Themes",null,B.oZ,null,null,null,null,null,null,null,null,null)
D.f7u=new A.x("Add Item",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eY_=new A.G(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7S=new A.x("Debt receipt",null,D.eY_,null,B.L,null,null,null,null,null,null,null)
D.aPh=new A.G(!0,B.ak,null,null,null,null,11,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f88=new A.x("Person who owes",null,D.aPh,null,null,null,null,null,null,null,null,null)
D.f94=new A.x("Notes",null,B.a6R,null,null,null,null,null,null,null,null,null)
D.f9u=new A.x("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.eX0=new A.G(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9y=new A.x("Share",null,D.eX0,null,null,null,null,null,null,null,null,null)
D.fas=new A.x("Move your family trees",null,D.aPm,null,null,null,null,null,null,null,null,null)
D.fb2=new A.x("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fbE=new A.x("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fcQ=new A.x("Remove this book?",null,B.ho,null,null,null,null,null,null,null,null,null)
D.aPM=new A.x("Download",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fdW=new A.x("What should the AI do?",null,B.du,null,null,null,null,null,null,null,null,null)
D.ffh=new A.x("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fgn=new A.x("Ribbon bookmark",null,B.iG,null,null,null,null,null,null,null,null,null)
D.f3J=new A.G(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgR=new A.x("NGMY.ORG",null,D.f3J,null,B.L,null,null,null,null,null,null,null)
D.fi5=new A.x("Scan family tree QR",null,B.cx,null,null,null,null,null,null,null,null,null)
D.f0h=new A.G(!0,B.c,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiP=new A.x("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.f0h,null,B.L,null,null,null,null,null,null,null)
D.fk0=new A.x("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fk7=new A.x("Thumbnail",null,B.oZ,null,null,null,null,null,null,null,null,null)
D.fkH=new A.x("Save the cover",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fl6=new A.x("Your photos",null,B.oZ,null,null,null,null,null,null,null,null,null)
D.fll=new A.x("Create Project",null,B.cc,null,null,null,null,null,null,null,null,null)
D.flP=new A.x("Design your cover",null,U.ry,null,null,null,null,null,null,null,null,null)
D.flW=new A.x("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.flZ=new A.x("PICTURE",null,H.mC,null,null,null,null,null,null,null,null,null)
D.fmk=new A.x("Paid",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fmm=new A.x("You can undo it right after.",null,T.SY,null,null,null,null,null,null,null,null,null)
D.fmS=new A.x("Print",null,B.ut,null,null,null,null,null,null,null,null,null)
D.fnd=new A.x("Amount owed",null,D.aPh,null,null,null,null,null,null,null,null,null)
D.fnr=new A.x("Got it",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fo0=new A.x("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fo3=new A.x("Add to budget",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fow=new A.x("Debtor signature",null,B.a6R,null,null,null,null,null,null,null,null,null)
D.foE=new A.x("Change icon",null,E.aOA,null,null,null,null,null,null,null,null,null)
D.fpO=new A.x("Family tree QR",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fqd=new A.x("Download",null,B.ut,null,null,null,null,null,null,null,null,null)
D.fqh=new A.x("Change",null,B.oZ,null,null,null,null,null,null,null,null,null)
D.fr7=new A.x("Clear all",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fra=new A.x("WHAT SHOULD IT CHANGE?",null,H.mC,null,null,null,null,null,null,null,null,null)
D.frK=new A.x("COLOUR",null,H.mC,null,null,null,null,null,null,null,null,null)
D.frW=new A.x("Do it",null,B.cx,null,null,null,null,null,null,null,null,null)
D.frZ=new A.x("Create Tree",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fsX=new A.x("Create Family Tree",null,B.eV,null,null,null,null,null,null,null,null,null)
D.eSs=new A.G(!0,E.jM,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftc=new A.x("Write the first page myself",null,D.eSs,null,null,null,null,null,null,null,null,null)
D.ftJ=new A.x("Use this header",null,B.cx,null,null,null,null,null,null,null,null,null)
D.ftP=new A.x("Create Project",null,E.aP0,null,null,null,null,null,null,null,null,null)
D.fIS=new C.aay(1,"header")
D.a81=new C.aay(2,"projects")
D.fIT=new C.aay(3,"cashier")
D.a82=new C.aay(4,"familyTree")
D.fUa=new C.cuM(0,"start")
D.fUb=new C.cuN(0,"start")
D.fJ9=new C.XM(null)
D.fK8=new C.Yd(null)
D.dir=new A.bo(B.ie,[],A.ax("bo<n,Ff>"))
D.d2f=w([],x.E)
D.d2g=w([],x.M)
D.fKF=new C.bcS(D.dir,D.d2f,D.d2g,0,0,null,null)
D.fMU=new C.ZB(null)
D.a8K=new C.aIh(0,"projects")
D.aTT=new C.aIh(1,"cashier")
D.fS7=new C.aIh(2,"familyTree")})()};
(a=>{a["5DAnTsmFfrnnFlL/USeJ2vOazf4="]=a.current})($__dart_deferred_initializers__);