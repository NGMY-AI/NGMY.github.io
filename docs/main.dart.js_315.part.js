((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,N,S,A2,G,F,E,O,A3,A4,A5,T,U,A6,A7,M,A8,H,A9,Aa,V,W,X,Ab,Ac,Y,Ad,Ae,Z,Af,Ag,Ah,K,Ai,A_,A0,P,Aj,L,Q,C={
bC6(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bC6=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vb(null,""),$async$bC6)
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
return A.b(A.qK(t,a1,B.hl,E.EU),$async$bC6)
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a1N(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bC6,v)},
agq(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$agq=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vb(null,""),$async$agq)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.V(y.j)
t=A.n1(b6)
s=x.S
r=A.dd(c1,0,A.dJ(4,"count",s),A.U(c1).c)
q=F.a1A(new A.K(r,new C.fwQ(),r.$ti.k("K<ak.E,n>")).aI(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fwP(t)
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
u=new C.anz(s,D.dka,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
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
if(s.b(a8))for(a2=J.d9(a8,d),a5=J.aW(a2.a),a2=a2.$ti,a7=new A.kY(a5,a2.k("kY<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gU(a5))
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
p=A.cD(new A.bc(h,s),new C.fwR(),s.k("J.E"),p)
p=F.a1A(A.p8(p,3,A.a4(p).k("J.E")).aI(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.B(new A.cu(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a1N(s,b9),$async$agq)
case 13:b5=c5
for(s=J.a6(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.anz(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agq,v)},
hl8(d,e,f){return A.ca(null,B.w.j(0.65),!1,null,new C.fG_(e,f),d,null,!0,!0,x.g2)},
anz:function anz(d,e,f){this.a=d
this.b=e
this.c=f},
fwQ:function fwQ(){},
fwP:function fwP(d){this.a=d},
fwR:function fwR(){},
fG_:function fG_(d,e){this.a=d
this.b=e},
bzW(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bzW=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b5(b1,new C.flV())){u=null
w=1
break}t=B.d.d8(b1,new C.flW())
s=$.W()
r=new A.qT()
q=A.D5(r,D.aLD)
p=A.M()
p.r=B.c.gp(0)
q.aZ(D.aLD,p)
o=A.M()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bO
o.e=B.fA
n=new C.fm0(t)
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
return A.b(r.pB().z7(520,160),$async$bzW)
case 4:w=3
return A.b(b3.hq(B.fX),$async$bzW)
case 3:b0=b3
u=b0==null?null:J.eS(B.dD.gaM(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzW,v)},
fuw(d){return C.hZw(d)},
hZw(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fuw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.beZ()
n=d.x!=null&&d.yO(null).length===0
if(d.x!=null)t=n?D.z6:D.HV
else t=d.gTe()?D.HV:D.aGH
w=3
return A.b(C.bzW(d.ax),$async$fuw)
case 3:s=f
p.a=null
if(s!=null)p.a=A.ami(s)
r=A.a3L(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aGH}else{p.c=C.wA(q,!0)
p.b=n?D.z6:D.HV}r.a2r(A.fQ5(new C.fuy(p,d,new C.fuz(),t,n,o),null,D.btX,B.w3))
u=r.k0(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fuw,v)},
fB9(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fB9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fuw(d),$async$fB9)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aK(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A7.Gi(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fB9,v)},
flV:function flV(){},
flW:function flW(){},
fm0:function fm0(d){this.a=d},
fuz:function fuz(){},
fuy:function fuy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fux:function fux(){},
fGr(d,e){var w=0,v=A.j(x.H)
var $async$fGr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,B.w.j(0.55),!0,null,new C.fGv(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fGr)
case 2:return A.h(null,v)}})
return A.i($async$fGr,v)},
bCA(d,e,f,g){return C.i5Z(d,e,f,g)},
i5Z(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bCA=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gal(e.split(",")):e
r=B.cG.aJ(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.S(D.eSn)
w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.fGn(g,r,f),d,null,!0,!0,x.H),$async$bCA)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bCA,v)},
fGw(d,e){var w=0,v=A.j(x.H)
var $async$fGw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,null,!0,null,new C.fGz(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fGw)
case 2:return A.h(null,v)}})
return A.i($async$fGw,v)},
aXJ:function aXJ(d,e){this.c=d
this.a=e},
c0S:function c0S(){},
b9O:function b9O(d,e){this.b=d
this.a=e},
fGv:function fGv(d,e){this.a=d
this.b=e},
fGs:function fGs(d){this.a=d},
fGt:function fGt(d,e,f){this.a=d
this.b=e
this.c=f},
fGu:function fGu(d,e){this.a=d
this.b=e},
fGn:function fGn(d,e,f){this.a=d
this.b=e
this.c=f},
fGl:function fGl(d){this.a=d},
fGm:function fGm(d,e,f){this.a=d
this.b=e
this.c=f},
fGz:function fGz(d,e){this.a=d
this.b=e},
fGx:function fGx(d){this.a=d},
fGy:function fGy(d,e,f){this.a=d
this.b=e
this.c=f},
fpu(d,e){var w=0,v=A.j(x.y),u,t
var $async$fpu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1l(d),$async$fpu)
case 3:t=g
J.no(t,new C.fpv(e))
u=A.ah3(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fpu,v)},
fpv:function fpv(d){this.a=d},
anG:function anG(d,e,f){this.c=d
this.d=e
this.a=f},
aBU:function aBU(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dER:function dER(d,e){this.a=d
this.b=e},
dEC:function dEC(d,e){this.a=d
this.b=e},
dEF:function dEF(d,e,f){this.a=d
this.b=e
this.c=f},
dEE:function dEE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dED:function dED(d,e){this.a=d
this.b=e},
dEG:function dEG(d,e){this.a=d
this.b=e},
dEA:function dEA(){},
dEB:function dEB(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dEz:function dEz(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dEk:function dEk(d){this.a=d},
dEl:function dEl(d,e,f){this.a=d
this.b=e
this.c=f},
dEm:function dEm(d,e){this.a=d
this.b=e},
dEj:function dEj(d){this.a=d},
dEr:function dEr(d,e){this.a=d
this.b=e},
dEi:function dEi(d){this.a=d},
dEs:function dEs(d,e,f){this.a=d
this.b=e
this.c=f},
dEt:function dEt(d,e,f){this.a=d
this.b=e
this.c=f},
dEh:function dEh(d,e){this.a=d
this.b=e},
dEu:function dEu(d,e,f){this.a=d
this.b=e
this.c=f},
dEg:function dEg(d,e){this.a=d
this.b=e},
dEv:function dEv(d,e){this.a=d
this.b=e},
dEf:function dEf(d){this.a=d},
dEw:function dEw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dEd:function dEd(){},
dE7:function dE7(d){this.a=d},
dE8:function dE8(d){this.a=d},
dEe:function dEe(d,e){this.a=d
this.b=e},
dEx:function dEx(d,e){this.a=d
this.b=e},
dEc:function dEc(d){this.a=d},
dEy:function dEy(d){this.a=d},
dEb:function dEb(){},
dEn:function dEn(d,e){this.a=d
this.b=e},
dEa:function dEa(d){this.a=d},
dEo:function dEo(d,e,f){this.a=d
this.b=e
this.c=f},
dE9:function dE9(d,e){this.a=d
this.b=e},
dE6:function dE6(d,e){this.a=d
this.b=e},
dEp:function dEp(d){this.a=d},
dEq:function dEq(d,e,f){this.a=d
this.b=e
this.c=f},
dEU:function dEU(){},
dEV:function dEV(d,e){this.a=d
this.b=e},
dES:function dES(d){this.a=d},
dET:function dET(d){this.a=d},
dEO:function dEO(d,e){this.a=d
this.b=e},
dEP:function dEP(d){this.a=d},
dEH:function dEH(d,e,f){this.a=d
this.b=e
this.c=f},
dEI:function dEI(d,e,f){this.a=d
this.b=e
this.c=f},
dEJ:function dEJ(d,e,f){this.a=d
this.b=e
this.c=f},
dEK:function dEK(d,e,f){this.a=d
this.b=e
this.c=f},
dEL:function dEL(d,e,f){this.a=d
this.b=e
this.c=f},
dEM:function dEM(d,e,f){this.a=d
this.b=e
this.c=f},
dEN:function dEN(d,e,f){this.a=d
this.b=e
this.c=f},
dEW:function dEW(){},
dEX:function dEX(){},
dEY:function dEY(){},
dEZ:function dEZ(d){this.a=d},
dEQ:function dEQ(d,e){this.a=d
this.b=e},
hhm(d){return B.d.dL(D.a1d,new C.fq3(d),new C.fq4())},
u3:function u3(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fq3:function fq3(d){this.a=d},
fq4:function fq4(){},
ak1:function ak1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aTw:function aTw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Sb:function Sb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdp:function bdp(){this.d=$
this.c=this.a=null},
d4G:function d4G(d,e){this.a=d
this.b=e},
d4E:function d4E(d,e){this.a=d
this.b=e},
d4F:function d4F(){},
d4H:function d4H(d,e){this.a=d
this.b=e},
h2a(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.n8(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
Ks(d,e){return C.hY9(d,e)},
hY9(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
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
o=A.cD(o,new C.fs7(),o.$ti.k("J.E"),x.B)
n=A.a4(o).k("a2<J.E>")
o=A.B(new A.a2(o,new C.fs8(),n),n.k("J.E"))
B.d.b0(o,new C.fs9())
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
r=J.b6(f,new C.fF5(),x.a)
r=A.B(r,r.$ti.k("ak.E"))
w=4
return A.b(t.au("String","ngmy_family_book_v1_"+s+"_"+e,B.R.ao(r,null)),$async$AE)
case 4:case 1:return A.h(u,v)}})
return A.i($async$AE,v)},
aPG(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aPG=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Ks(d,e),$async$aPG)
case 2:u=h
t=J.cE(u)
s=t.bd(u,new C.fNc(f))
if(s===-1)t.ck(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.AE(d,e,u),$async$aPG)
case 3:return A.h(null,v)}})
return A.i($async$aPG,v)},
bAo(d,e,f){var w=0,v=A.j(x.H),u
var $async$bAo=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Ks(d,e),$async$bAo)
case 2:u=h
J.no(u,new C.fpm(f))
w=3
return A.b(C.AE(d,e,u),$async$bAo)
case 3:return A.h(null,v)}})
return A.i($async$bAo,v)},
bAD(d,e){return C.hY8(d,e)},
hY8(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bAD=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bAD)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Ml
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
if(D.Ca.ai(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a2K,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.t(D.a2b,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.t(D.a26,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.t(D.cQs,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.Hf(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Ml
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Ml
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bAD,v)},
R1(d,e,f){return C.i5v(d,e,f)},
i5v(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
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
Qw(d,e){return C.hYa(d,e)},
hYa(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
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
a2_(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a2_=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Qw(d,e),$async$a2_)
case 2:s=h
J.hD(s,f)
w=3
return A.b(A.aA(),$async$a2_)
case 3:u=h
w=4
return A.b(u.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a2_)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2_)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2_)
case 6:return A.h(null,v)}})
return A.i($async$a2_,v)},
n8:function n8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fs7:function fs7(){},
fs8:function fs8(){},
fs9:function fs9(){},
fF5:function fF5(){},
fNc:function fNc(d){this.a=d},
fpm:function fpm(d){this.a=d},
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
bML:function bML(d){this.a=d},
i5O(d,e,f,g,h,i,j){return A.a5(d,!1).c8(A.e8(new C.fFE(j,i,f,e,h,g),!0,null,x.H))},
Qt(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Qt=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qw(h,g),$async$Qt)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.I(x.q).f.S(D.aNF)
u=!1
w=1
break}w=4
return A.b(C.hl8(d,f,e),$async$Qt)
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
fFE:function fFE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
YK:function YK(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ayY:function ayY(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d5l:function d5l(d){this.a=d},
d5k:function d5k(d,e){this.a=d
this.b=e},
d59:function d59(d,e){this.a=d
this.b=e},
d56:function d56(d,e){this.a=d
this.b=e},
d4I:function d4I(d){this.a=d},
d4J:function d4J(d,e){this.a=d
this.b=e},
d5a:function d5a(d){this.a=d},
d4R:function d4R(d){this.a=d},
d4P:function d4P(d){this.a=d},
d4Q:function d4Q(d){this.a=d},
d4S:function d4S(d){this.a=d},
d57:function d57(d){this.a=d},
d58:function d58(){},
d4N:function d4N(d){this.a=d},
d4O:function d4O(d,e){this.a=d
this.b=e},
d4T:function d4T(d){this.a=d},
d4U:function d4U(d,e){this.a=d
this.b=e},
d5j:function d5j(d){this.a=d},
d5i:function d5i(d,e){this.a=d
this.b=e},
d5h:function d5h(d){this.a=d},
d53:function d53(d){this.a=d},
d52:function d52(d){this.a=d},
d54:function d54(d){this.a=d},
d4K:function d4K(d,e){this.a=d
this.b=e},
d55:function d55(d,e){this.a=d
this.b=e},
d4X:function d4X(d){this.a=d},
d4Y:function d4Y(d){this.a=d},
d4W:function d4W(){},
d4Z:function d4Z(d){this.a=d},
d5_:function d5_(d){this.a=d},
d50:function d50(d,e){this.a=d
this.b=e},
d51:function d51(d,e,f){this.a=d
this.b=e
this.c=f},
d4V:function d4V(d,e){this.a=d
this.b=e},
d5c:function d5c(d){this.a=d},
d5b:function d5b(){},
d5d:function d5d(d){this.a=d},
d5e:function d5e(d){this.a=d},
d5f:function d5f(d){this.a=d},
d5g:function d5g(d,e){this.a=d
this.b=e},
d4L:function d4L(d){this.a=d},
d4M:function d4M(d){this.a=d},
YO:function YO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdK:function bdK(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d75:function d75(d){this.a=d},
d76:function d76(d){this.a=d},
d74:function d74(d){this.a=d},
d77:function d77(d){this.a=d},
d73:function d73(d){this.a=d},
d78:function d78(d){this.a=d},
d72:function d72(d){this.a=d},
d79:function d79(d,e){this.a=d
this.b=e},
d71:function d71(d,e){this.a=d
this.b=e},
d7a:function d7a(d,e){this.a=d
this.b=e},
YM:function YM(d,e,f,g,h,i,j){var _=this
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
ayZ:function ayZ(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d5A:function d5A(d,e){this.a=d
this.b=e},
d5z:function d5z(d,e){this.a=d
this.b=e},
d5E:function d5E(d){this.a=d},
d5D:function d5D(d,e){this.a=d
this.b=e},
d5B:function d5B(d){this.a=d},
d5C:function d5C(d){this.a=d},
d5F:function d5F(d){this.a=d},
d5G:function d5G(d){this.a=d},
d5y:function d5y(d,e){this.a=d
this.b=e},
d5x:function d5x(d,e){this.a=d
this.b=e},
Jz:function Jz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Y2:function Y2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cEr:function cEr(d){this.a=d},
cEs:function cEs(){},
cEt:function cEt(d){this.a=d},
bb0:function bb0(d,e,f){this.b=d
this.c=e
this.a=f},
baS:function baS(d,e){this.b=d
this.a=e},
u4:function u4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Yk:function Yk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
baZ:function baZ(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cXT:function cXT(d,e,f){this.a=d
this.b=e
this.c=f},
cXS:function cXS(d,e){this.a=d
this.b=e},
cYh:function cYh(d){this.a=d},
cY4:function cY4(){},
cYi:function cYi(d){this.a=d},
cY3:function cY3(){},
cYj:function cYj(d,e){this.a=d
this.b=e},
cY2:function cY2(d,e){this.a=d
this.b=e},
cYk:function cYk(d,e){this.a=d
this.b=e},
cY1:function cY1(d,e){this.a=d
this.b=e},
cYl:function cYl(d){this.a=d},
cY0:function cY0(){},
cYm:function cYm(d,e){this.a=d
this.b=e},
cY_:function cY_(d,e){this.a=d
this.b=e},
cYn:function cYn(d){this.a=d},
cYc:function cYc(d,e){this.a=d
this.b=e},
cYo:function cYo(d){this.a=d},
cYp:function cYp(d){this.a=d},
cYr:function cYr(d){this.a=d},
cYs:function cYs(d){this.a=d},
cYb:function cYb(d,e){this.a=d
this.b=e},
cYt:function cYt(d,e){this.a=d
this.b=e},
aFY:function aFY(d){this.a=d},
bgd:function bgd(d){this.a=d},
b9c:function b9c(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hX7(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ahg(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bz(new A.S(Date.now(),0,!1))
s=new C.fq7(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("a2<1>"),q=q.k("cR<1,n>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.xK)m.push(l===D.Zf?"male":"female")
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
m.push("child of "+l+k)}a0=A.B(new A.cR(new A.a2(a4,new C.fq5(u,f),p),new C.fq6(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aI(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aI(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hX8(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ahg(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fqc(v,e)
q=new C.fqa(v)
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
for(l=B.d.gaf(e),k=new A.fh(l,new C.fqb(p,m));k.C();t=f){j=l.gU(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ai(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aI(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hIO(d,e,f,g){var w,v,u=C.hX9(d,e)
if(u<=0||f.length<=u)return new A.adN(!1,D.C_,f)
if(g.t(0,e.a))return new A.adN(!1,D.C_,f)
w=A.U(f).c
v=A.dd(f,0,A.dJ(u,"count",x.S),w).dH(0)
return new A.adN(!0,A.dd(f,u,null,w).dH(0),v)},
hIP(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ahg(d3),d2=d1.length
if(d2===0)return D.fO1
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.cg(0,t.a,new C.d5N(t))}s=new C.d63(v)
d2=x.h
r=A.T(w,d2)
q=new C.d5W(r)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d5V(r)
l=A.T(w,x.do)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ch(l.cg(0,k,new C.d5O()),o)}h=new C.d5U(s)
g=new C.d5T(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a2<J.E>")
f=A.B(new A.a2(new A.bc(v,p),new C.d5P(h),o),o.k("J.E"))
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
a9=new C.d61(new C.d5Y(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
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
b7=new C.d5M(a2,new C.d62(),b6,a3,b4,v,a4,a5,a6,b5)
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
a3.bJ(0,new C.d5Q(c6,b4))
for(d2=new A.cK(a4,a4.$ti.k("cK<1,2>")).gaf(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aW(c7.b);j.C();){i=j.gU(j)
if(b6.ai(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gaf(b5),i=new A.fh(j,new C.d5R(c8));i.C();)o.push(j.gU(0).b)
if(o.length===0)continue
B.d.b0(o,new C.d5S())
c6.push(new C.aI3(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bdu(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hgT(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(d)
return w==null?null:w.b[1]},
hbe(d,e,f,g,h,i,j,k,l,m,n){return new C.Zn(k,f,j,e,l,n,m,d,g,h,i,null)},
aAV(d,e,f,g,h,i,j){return new C.bh9(i,d,e,f,j,h,g,null)},
aoM:function aoM(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCu:function aCu(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dSS:function dSS(d){this.a=d},
dSR:function dSR(d){this.a=d},
dSU:function dSU(d,e){this.a=d
this.b=e},
dSV:function dSV(d,e){this.a=d
this.b=e},
dSW:function dSW(d){this.a=d},
dSQ:function dSQ(d,e){this.a=d
this.b=e},
dST:function dST(d){this.a=d},
dSY:function dSY(d){this.a=d},
dSX:function dSX(d,e){this.a=d
this.b=e},
aoG:function aoG(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCr:function aCr(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dSi:function dSi(d){this.a=d},
dSg:function dSg(d){this.a=d},
dSh:function dSh(d){this.a=d},
dSj:function dSj(d,e){this.a=d
this.b=e},
dSd:function dSd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRM:function dRM(d){this.a=d},
dRN:function dRN(d,e){this.a=d
this.b=e},
dS0:function dS0(d){this.a=d},
dRZ:function dRZ(d){this.a=d},
dS_:function dS_(d,e){this.a=d
this.b=e},
dS1:function dS1(d){this.a=d},
dS2:function dS2(d,e){this.a=d
this.b=e},
dSc:function dSc(d,e){this.a=d
this.b=e},
dSa:function dSa(d,e){this.a=d
this.b=e},
dS9:function dS9(d,e){this.a=d
this.b=e},
dS5:function dS5(d,e){this.a=d
this.b=e},
dS4:function dS4(d){this.a=d},
dS6:function dS6(d,e){this.a=d
this.b=e},
dS3:function dS3(d){this.a=d},
dS7:function dS7(d){this.a=d},
dS8:function dS8(d){this.a=d},
dSb:function dSb(d,e){this.a=d
this.b=e},
dRA:function dRA(d,e){this.a=d
this.b=e},
dRB:function dRB(d,e){this.a=d
this.b=e},
dSl:function dSl(d,e,f){this.a=d
this.b=e
this.c=f},
dSf:function dSf(d,e,f){this.a=d
this.b=e
this.c=f},
dSe:function dSe(d){this.a=d},
dRC:function dRC(d){this.a=d},
dRD:function dRD(d){this.a=d},
dRE:function dRE(){},
dRF:function dRF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRJ:function dRJ(d,e){this.a=d
this.b=e},
dRI:function dRI(d,e){this.a=d
this.b=e},
dRH:function dRH(d){this.a=d},
dRK:function dRK(d,e){this.a=d
this.b=e},
dRG:function dRG(d){this.a=d},
dSk:function dSk(d){this.a=d},
dRW:function dRW(){},
dRX:function dRX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRV:function dRV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRR:function dRR(d,e,f){this.a=d
this.b=e
this.c=f},
dRQ:function dRQ(d,e,f){this.a=d
this.b=e
this.c=f},
dRO:function dRO(d,e){this.a=d
this.b=e},
dRS:function dRS(d){this.a=d},
dRT:function dRT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRP:function dRP(d,e){this.a=d
this.b=e},
dRU:function dRU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRY:function dRY(d,e){this.a=d
this.b=e},
dSs:function dSs(){},
dSt:function dSt(d,e){this.a=d
this.b=e},
dSu:function dSu(d){this.a=d},
dSv:function dSv(d,e){this.a=d
this.b=e},
dSo:function dSo(d){this.a=d},
dSm:function dSm(d,e){this.a=d
this.b=e},
dSp:function dSp(d,e){this.a=d
this.b=e},
dSq:function dSq(d,e){this.a=d
this.b=e},
dSr:function dSr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dSw:function dSw(d){this.a=d},
dSn:function dSn(d){this.a=d},
dRL:function dRL(d){this.a=d},
bds:function bds(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d5K:function d5K(d){this.a=d},
d5J:function d5J(d,e){this.a=d
this.b=e},
d5L:function d5L(d){this.a=d},
d5I:function d5I(d,e){this.a=d
this.b=e},
fq7:function fq7(d,e){this.a=d
this.b=e},
fq8:function fq8(d){this.a=d},
fq9:function fq9(){},
fq5:function fq5(d,e){this.a=d
this.b=e},
fq6:function fq6(){},
fqc:function fqc(d,e){this.a=d
this.b=e},
fqd:function fqd(d){this.a=d},
fqe:function fqe(){},
fqa:function fqa(d){this.a=d},
fqb:function fqb(d,e){this.a=d
this.b=e},
JH:function JH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Fq:function Fq(d,e){this.a=d
this.b=e},
bdu:function bdu(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d5N:function d5N(d){this.a=d},
d63:function d63(d){this.a=d},
d5W:function d5W(d){this.a=d},
d5X:function d5X(){},
d5V:function d5V(d){this.a=d},
d5O:function d5O(){},
d5U:function d5U(d){this.a=d},
d5T:function d5T(d,e){this.a=d
this.b=e},
d5P:function d5P(d){this.a=d},
d5Y:function d5Y(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d5Z:function d5Z(d){this.a=d},
d6_:function d6_(d){this.a=d},
d60:function d60(){},
d61:function d61(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d62:function d62(){},
d5M:function d5M(d,e,f,g,h,i,j,k,l,m){var _=this
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
d5Q:function d5Q(d,e){this.a=d
this.b=e},
d5R:function d5R(d){this.a=d},
d5S:function d5S(){},
aI3:function aI3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bdv:function bdv(d,e){this.b=d
this.a=e},
d64:function d64(){},
d65:function d65(d){this.a=d},
d66:function d66(d){this.a=d},
d67:function d67(){},
bha:function bha(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcz:function bcz(d,e){this.b=d
this.a=e},
buS:function buS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
f8m:function f8m(d){this.a=d},
bkw:function bkw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eKh:function eKh(d){this.a=d},
eKg:function eKg(d,e){this.a=d
this.b=e},
Zn:function Zn(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aAT:function aAT(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dlX:function dlX(d,e){this.a=d
this.b=e},
dlW:function dlW(d){this.a=d},
dlU:function dlU(d){this.a=d},
dlV:function dlV(d){this.a=d},
dm5:function dm5(d){this.a=d},
dm6:function dm6(d){this.a=d},
dm4:function dm4(d,e){this.a=d
this.b=e},
dm7:function dm7(){},
dma:function dma(d){this.a=d},
dm3:function dm3(d,e){this.a=d
this.b=e},
dm9:function dm9(){},
dmb:function dmb(d){this.a=d},
dm2:function dm2(d,e){this.a=d
this.b=e},
dmc:function dmc(d){this.a=d},
dm1:function dm1(d){this.a=d},
dmd:function dmd(d){this.a=d},
dm0:function dm0(d){this.a=d},
dme:function dme(d){this.a=d},
dm_:function dm_(d){this.a=d},
dmf:function dmf(d){this.a=d},
dlZ:function dlZ(d){this.a=d},
dmg:function dmg(d){this.a=d},
dlY:function dlY(d,e){this.a=d
this.b=e},
dm8:function dm8(d){this.a=d},
acC:function acC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bh9:function bh9(d,e,f,g,h,i,j,k){var _=this
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
bh8:function bh8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dmh:function dmh(d){this.a=d},
dmi:function dmi(d,e){this.a=d
this.b=e},
aAU:function aAU(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aH5:function aH5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
acD:function acD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dmr:function dmr(d){this.a=d},
Jv:function Jv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
h65(d){var w=d.T,v=x.N
return w.iY(w,new C.c7p(),v,v)},
hAj(d){var w=d.bE
if(w>=0)return w
return 5},
h67(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.h65(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
h66(d,e){var w=C.h67(d,e)
if(w!=null&&w.cc(new A.S(Date.now(),0,!1)))return!0
return!1},
hAk(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.h65(d),w,w)
u=C.h67(d,e)
t=u!=null&&u.cc(new A.S(Date.now(),0,!1))?u:new A.S(Date.now(),0,!1)
v.n(0,s,t.bP(A.dC(30,0,0,0,0,0).a).a6().ac())
d.T=v},
aZ8(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aZ8=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.le(t,B.HI),$async$aZ8)
case 3:if(l){u=!0
w=1
break}u=A.kS(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.HI,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZ8,v)},
c7p:function c7p(){},
hAh(){var w,v=$.pm(),u=J.e3(8,x.N)
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
a6D(d){return C.hAi(d)},
hAi(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
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
c7o(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c7o=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.I9(),$async$c7o)
case 3:t=m.jt(f),t=t.gaf(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gU(t)
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
return A.i($async$c7o,v)},
N4(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$N4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c7o(d),$async$N4)
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
case 5:n=C.hAh()
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
aZ7(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aZ7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.I9(),$async$aZ7)
case 3:t=f
for(s=J.dk(t),r=s.gdK(t),r=r.dH(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a6D(t),$async$aZ7)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aZ7,v)},
a6E(d,e,f){var w=0,v=A.j(x.H),u
var $async$a6E=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aoL(d,e),$async$a6E)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.N4(d),$async$a6E)
case 7:w=4
break
case 5:w=8
return A.b(C.aZ7(d),$async$a6E)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a6E,v)},
aoF(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aoF=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aoL(f,e),$async$aoF)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c3(),$async$aoF)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.I9(),$async$aoF)
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
return A.i($async$aoF,v)},
aZ6(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aZ6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c3(),$async$aZ6)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.I9(),$async$aZ6)
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
return A.i($async$aZ6,v)},
hAl(){var w,v=$.pm(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fX(u)},
aoI(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$aoI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$aoI)
case 3:if(!g){u=null
w=1
break}t=C.hAl()
w=4
return A.b(A.Uv(),$async$aoI)
case 4:s=g
r=B.dJ.aJ(B.R.ao(d.eL(),null))
r=B.cT.gcw().aJ(r)
q=e?999:2
J.aF(s,t,A.F(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(A.a6F(s),$async$aoI)
case 5:p=e?999:2
u=new A.a_z("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoI,v)},
aoH(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aoH=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Uv(),$async$aoH)
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
return A.b(C.aZ6(J.k(l==null?"":l),j),$async$aoH)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.c6.ca(0,B.cG.aJ(t))
s=C.h68(r)}catch(f){q=A.aa(f)
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
return A.b(A.a6F(p),$async$aoH)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoH,v)},
h68(d){var w,v,u,t,s=null
try{w=B.R.aG(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hAn(A.a1(w,x.N,x.z))
return u}catch(t){v=A.aa(t)
$.am.$1("[family tree sync] parse: "+A.t(v))
return s}},
fR8(d){var w=0,v=A.j(x.m),u,t,s
var $async$fR8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aoH(t[1])
w=1
break}u=null
w=1
break}u=C.h68(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fR8,v)},
hAn(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d9(v,x.f)
u=A.cD(u,new C.c7r(),u.$ti.k("J.E"),x.k)
t=A.a4(u).k("a2<J.E>")
s=A.B(new A.a2(u,new C.c7s(),t),t.k("J.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.T(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jt(p),t=t.gaf(t),o=x.B;t.C();){n=t.gU(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d9(l,u)
n=A.cD(n,new C.c7t(),n.$ti.k("J.E"),o)
k=A.a4(n).k("a2<J.E>")
j=A.B(new A.a2(n,new C.c7u(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aoJ(h,w,s,r,q)},
aoL(d,e){var w=0,v=A.j(x.y),u,t
var $async$aoL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.MW(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.At(d),$async$aoL)
case 3:u=t.cy(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoL,v)},
c7A(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c7A=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.At(d),$async$c7A)
case 3:t=s.b6(f,new C.c7B(),x.cs)
t=A.B(t,t.$ti.k("ak.E"))
B.d.b0(t,new C.c7C())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c7A,v)},
Uw(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Uw=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aoL(e,d),$async$Uw)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.N4(e),$async$Uw)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.At(e),$async$Uw)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.c7y(g))
r=A.B(t,t.$ti.k("J.E"))}t=J.a6(r)
if(t.gam(r)){u=null
w=1
break}t=t.dt(r,new C.c7z(e),x.k)
r=A.B(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Ks(e,o),$async$Uw)
case 14:n=i
if(J.cy(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.aoJ(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Uw,v)},
aZb(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aZb=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Uw(d,e,f,g),$async$aZb)
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
return A.i($async$aZb,v)},
aZa(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aZa=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Uw(d,e,f,g),$async$aZa)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aoI(r,f),$async$aZa)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aF6(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZa,v)},
Ux(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ux=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fR8(a0),$async$Ux)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aoF(g.a,d,e,f,s,r),$async$Ux)
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
return A.b(C.bAe(e,j),$async$Ux)
case 12:case 11:w=13
return A.b(C.ah1(e,j,s),$async$Ux)
case 13:h=n.h(0,i)
w=h!=null&&J.cy(h)?14:15
break
case 14:w=16
return A.b(C.AE(e,i,h),$async$Ux)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bo6(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ux,v)},
aoJ:function aoJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c7w:function c7w(){},
c7x:function c7x(){},
c7v:function c7v(){},
c7r:function c7r(){},
c7s:function c7s(){},
c7t:function c7t(){},
c7u:function c7u(){},
c7B:function c7B(){},
c7C:function c7C(){},
c7y:function c7y(d){this.a=d},
c7z:function c7z(d){this.a=d},
fZs(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f7(null,x.H)
return A.hw(d,new C.aoK(w,e,g,i,f,h,null),!0,null,x.H)},
d5H(d,e,f,g,h,i,j,k){return new C.bdr(i,e,k,j,g,f,h,d,null)},
aoK:function aoK(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCt:function aCt(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dSF:function dSF(d){this.a=d},
dSG:function dSG(d,e,f){this.a=d
this.b=e
this.c=f},
dSK:function dSK(d,e){this.a=d
this.b=e},
dSL:function dSL(d){this.a=d},
dSC:function dSC(d){this.a=d},
dSD:function dSD(d,e){this.a=d
this.b=e},
dSE:function dSE(d,e){this.a=d
this.b=e},
dSJ:function dSJ(d){this.a=d},
dSI:function dSI(d,e){this.a=d
this.b=e},
dSH:function dSH(){},
dSN:function dSN(d){this.a=d},
dSO:function dSO(d,e){this.a=d
this.b=e},
dSM:function dSM(d,e){this.a=d
this.b=e},
d68:function d68(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bdt:function bdt(d,e,f){this.d=d
this.e=e
this.a=f},
abT:function abT(d,e,f){this.c=d
this.d=e
this.a=f},
bdr:function bdr(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bdw:function bdw(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ZI:function ZI(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCs:function aCs(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dSx:function dSx(d,e){this.a=d
this.b=e},
dSy:function dSy(d){this.a=d},
dSz:function dSz(d){this.a=d},
dSA:function dSA(d){this.a=d},
dSB:function dSB(d){this.a=d},
ZJ:function ZJ(d){this.a=d},
biD:function biD(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dSP:function dSP(d,e){this.a=d
this.b=e},
aXI(d,e){return new C.aXH(d,e,null)},
aXH:function aXH(d,e,f){this.c=d
this.d=e
this.a=f},
hZB(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b1(d,11)},
i5Y(d){return A.bU(B.K,null,new C.fG6(new C.tC(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
h80(d,e){return new C.arF(e,d,null)},
aPm(d,e,f,g,h,i,j){var w=C.hZB(i)
if(w!=null)return A.bw(e,new A.a7(j,f,new C.a5F(w,!0,null),null),B.aq)
return I.aOH(e,B.bR,f,g,h,i,j)},
lx:function lx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5F:function a5F(d,e,f){this.c=d
this.d=e
this.a=f},
bij:function bij(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b_$=e
_.c=_.a=null},
dDZ:function dDZ(d){this.a=d},
dE_:function dE_(){},
dE0:function dE0(d,e){this.a=d
this.b=e},
bii:function bii(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fG6:function fG6(d){this.a=d},
fG5:function fG5(d,e){this.a=d
this.b=e},
fG4:function fG4(d,e){this.a=d
this.b=e},
fG3:function fG3(d,e){this.a=d
this.b=e},
arF:function arF(d,e,f){this.c=d
this.d=e
this.a=f},
cf5:function cf5(d,e){this.a=d
this.b=e},
aKp:function aKp(){},
i5J(d){var w=null
return A.ca(w,w,!0,w,new C.fFt(),d,w,!0,!0,x.e2)},
i6T(d,e,f,g,h){var w=null
return A.ca(w,w,!0,w,new C.fMY(h,g,f,e),d,w,!0,!0,x.N)},
i5L(d,e){var w=null
return A.ca(w,w,!0,w,new C.fFy(e),d,w,!0,!0,x.dY)},
i5K(d){var w=null
return A.ca(w,w,!0,w,new C.fFx(),d,w,!0,!0,x.c5)},
aSh:function aSh(d,e){this.a=d
this.b=e},
aSg:function aSg(d){this.a=d},
aQi:function aQi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fFt:function fFt(){},
fMY:function fMY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fFy:function fFy(d){this.a=d},
fFx:function fFx(){},
Ym:function Ym(d,e){this.c=d
this.a=e},
axJ:function axJ(){var _=this
_.d=$
_.c=_.a=_.e=null},
cYF:function cYF(d){this.a=d},
cYG:function cYG(d){this.a=d},
cYE:function cYE(d,e){this.a=d
this.b=e},
cYH:function cYH(d){this.a=d},
cYI:function cYI(d){this.a=d},
Yl:function Yl(d){this.a=d},
axI:function axI(){this.d=$
this.c=this.a=null},
cYB:function cYB(d){this.a=d},
cYC:function cYC(d){this.a=d},
cYD:function cYD(d){this.a=d},
XU:function XU(d){this.a=d},
aws:function aws(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cwe:function cwe(){},
cwk:function cwk(d){this.a=d},
cwl:function cwl(d){this.a=d},
cwm:function cwm(d){this.a=d},
cwj:function cwj(){},
cwn:function cwn(d){this.a=d},
cwo:function cwo(d){this.a=d},
cwi:function cwi(){},
cwp:function cwp(d,e){this.a=d
this.b=e},
cwh:function cwh(d,e){this.a=d
this.b=e},
cwf:function cwf(d,e){this.a=d
this.b=e},
cwq:function cwq(d){this.a=d},
cwg:function cwg(){},
cwr:function cwr(d){this.a=d},
a0t:function a0t(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
buK:function buK(){this.d=$
this.c=this.a=null},
f7P:function f7P(d,e){this.a=d
this.b=e},
f7Q:function f7Q(d){this.a=d},
f7R:function f7R(d,e){this.a=d
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
buI:function buI(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
f7N:function f7N(d,e){this.a=d
this.b=e},
awl:function awl(d,e){this.c=d
this.a=e},
buJ:function buJ(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
f7O:function f7O(d){this.a=d},
buH:function buH(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aMA:function aMA(){},
aMB:function aMB(){},
bCb(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bt(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oC(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fEa(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Xi(A.dn(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aOY(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aOY=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hW().l3(85,1280,B.eG),$async$aOY)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fi(),$async$aOY)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.h8_()
w=9
return A.b(C.cf4(q,r),$async$aOY)
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
return A.i($async$aOY,v)},
aPk(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aPk=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cf1(g)
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
return A.b($.W().Lg(p,!0,null,i).cM(0,B.fH),$async$aPk)
case 9:n=a1
w=10
return A.b(n.lY(),$async$aPk)
case 10:m=a1
w=11
return A.b(J.ahr(m).hq(B.fX),$async$aPk)
case 11:l=a1
J.ahr(m).q()
if(l==null){w=8
break}i=J.eS(B.dD.gaM(l))
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
return A.i($async$aPk,v)},
fEa:function fEa(){},
tC:function tC(d){this.a=d},
arE:function arE(d,e,f){this.c=d
this.d=e
this.a=f},
aDZ:function aDZ(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eHr:function eHr(d,e){this.a=d
this.b=e},
eHi:function eHi(d){this.a=d},
eHj:function eHj(d){this.a=d},
eHp:function eHp(d,e){this.a=d
this.b=e},
eHo:function eHo(d,e){this.a=d
this.b=e},
eHl:function eHl(d,e){this.a=d
this.b=e},
eHk:function eHk(d,e){this.a=d
this.b=e},
eHm:function eHm(d){this.a=d},
eHn:function eHn(d,e){this.a=d
this.b=e},
eHq:function eHq(d,e){this.a=d
this.b=e},
eHd:function eHd(d,e){this.a=d
this.b=e},
eHh:function eHh(d){this.a=d},
eHg:function eHg(d,e){this.a=d
this.b=e},
eHf:function eHf(d){this.a=d},
eHs:function eHs(d,e){this.a=d
this.b=e},
eHt:function eHt(d,e){this.a=d
this.b=e},
eHe:function eHe(d,e){this.a=d
this.b=e},
hkF(d,e,f){var w="thumbnailPath",v=e.ag()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.F(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a6().ac(),"project",v],x.N,x.z)},
fEb(d,e,f){var w=0,v=A.j(x.N),u
var $async$fEb=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.R.ao(C.hkF(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fEb,v)},
bCd(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bCd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fEb(!0,d,e),$async$bCd)
case 4:w=3
return A.b(r.arC(g,d,e.a),$async$bCd)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dJ.aJ(B.R.ao(C.hkF(d,e,null),null))
u="NGMY_WS:"+B.k9.gcw().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCd,v)},
hcA(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fZ9(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d_(s,"NGMYWSSYNC2|"))return!0
if(J.d_(s,"NGMY_WS:"))return!0
if(J.f0(s,t))return!0
if(J.d_(s,"{"))try{w=B.R.aG(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
i3E(d){var w,v,u,t=C.hcA(d)
if(t==null)return null
if(C.fZ9(t))return t
w=B.a.cJ(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b1(t,w))
if(C.fZ9(v))return v}u=B.a.cJ(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b1(t,u))
if(C.fZ9(v))return v}return null},
fZ8(d){var w,v,u,t,s,r=null,q=B.a.i(d)
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
t=C.fTI(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bCc(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bCc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.arB(t[1]),$async$bCc)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fZ8(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fZ8(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCc,v)},
fZ7(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lh(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bBK(){var w=0,v=A.j(x.o),u,t
var $async$bBK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Gj(),$async$bBK)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fZ8(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBK,v)},
hlw(d,e,f,g){return A.bU(B.K,null,new C.fMO(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fMO:function fMO(d,e,f){this.a=d
this.b=e
this.c=f},
acY:function acY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eHv:function eHv(d,e){this.a=d
this.b=e},
eHw:function eHw(d,e){this.a=d
this.b=e},
eHx:function eHx(d,e){this.a=d
this.b=e},
eHy:function eHy(d,e){this.a=d
this.b=e},
eHu:function eHu(d){this.a=d},
ary:function ary(d,e,f){this.c=d
this.d=e
this.a=f},
bk_:function bk_(){var _=this
_.c=_.a=_.e=_.d=null},
eH8:function eH8(d,e){this.a=d
this.b=e},
eH9:function eH9(d){this.a=d},
eHa:function eHa(d){this.a=d},
arD:function arD(d){this.a=d},
aDY:function aDY(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eHc:function eHc(d){this.a=d},
eHb:function eHb(d){this.a=d},
hDB(d,e,f,g,h){return new C.NH(h,g,d,e,f,null)},
aIL:function aIL(d,e){this.a=d
this.b=e},
NH:function NH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aE_:function aE_(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eHV:function eHV(){},
eHR:function eHR(d,e){this.a=d
this.b=e},
eHS:function eHS(d){this.a=d},
eHC:function eHC(d){this.a=d},
eHA:function eHA(d){this.a=d},
eHB:function eHB(d){this.a=d},
eHL:function eHL(d,e){this.a=d
this.b=e},
eHI:function eHI(d,e){this.a=d
this.b=e},
eHJ:function eHJ(d,e){this.a=d
this.b=e},
eHK:function eHK(d,e,f){this.a=d
this.b=e
this.c=f},
eHG:function eHG(d,e,f){this.a=d
this.b=e
this.c=f},
eHE:function eHE(d){this.a=d},
eHF:function eHF(d){this.a=d},
eHH:function eHH(d){this.a=d},
eHY:function eHY(d){this.a=d},
eHX:function eHX(d){this.a=d},
eHZ:function eHZ(d){this.a=d},
eHW:function eHW(d){this.a=d},
eHz:function eHz(d){this.a=d},
eHD:function eHD(d,e){this.a=d
this.b=e},
eHU:function eHU(d,e){this.a=d
this.b=e},
eHT:function eHT(d,e){this.a=d
this.b=e},
eHO:function eHO(d){this.a=d},
eHP:function eHP(d){this.a=d},
eHQ:function eHQ(d,e){this.a=d
this.b=e},
eHN:function eHN(d,e){this.a=d
this.b=e},
eHM:function eHM(d,e,f){this.a=d
this.b=e
this.c=f},
bwv:function bwv(){},
Aj(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aK(v,w,"_")},
aft(d,e,f){return C.hTd(d,e,f)},
hTd(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
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
afs(d,e){return C.hTc(d,e)},
hTc(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
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
hRZ(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Sg(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bze(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bze=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b1n(q),$async$bze)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aPk(q,!1),$async$bze)
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
return A.i($async$bze,v)},
hrp(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
fTI(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d9(s,x.f)
w=A.cD(w,new C.cvD(),w.$ti.k("J.E"),x.Q)
v=A.a4(w).k("a2<J.E>")
r=A.B(new A.a2(w,new C.cvE(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lh(w,v,u,r,t==null?new A.S(Date.now(),0,!1):t)},
hX3(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.Zf
case"female":case"f":return D.aiL
default:return D.xK}},
hhn(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h2b(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hX3(v==null?j:J.k(v))
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
hX5(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Mm
case"viewer":return D.kk
default:return D.tE}},
hX6(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
G9(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bAv(d,e){return B.a.i(e.toLowerCase())===C.G9(d,e)&&d.y!==D.kk},
tN(d,e){var w,v=d.y
if(v===D.kk)return!1
w=B.a.i(e.toLowerCase())
if(w===C.G9(d,e))return!0
if(v===D.Mm)return!0
v=d.e
return new A.K(v,A.fZd(),A.U(v).k("K<1,n>")).t(0,w)},
hWw(d){return J.dH(d,new C.fpe()).gM(0)},
fNj(d){var w=0,v=A.j(x.y),u,t
var $async$fNj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.At(d),$async$fNj)
case 3:u=t.qO(f,new C.fNk(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fNj,v)},
bAe(d,e){var w=0,v=A.j(x.H),u,t
var $async$bAe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.At(d),$async$bAe)
case 3:t=g
if(J.qO(t,new C.fnF(e))){w=1
break}if(C.hWw(t)>=2)throw A.V(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bAe,v)},
ak3(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d9(n,x.f)
w=A.cD(w,new C.bMM(),w.$ti.k("J.E"),x.P)
v=A.a4(w).k("a2<J.E>")
m=A.B(new A.a2(w,new C.bMN(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bMO(),x.N)
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
return new C.kA(l,w,v,!s,t,m,r,q,p,C.hX5(o==null?null:J.k(o)))},
hhw(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(d.toUpperCase(),w,"")
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
return A.b(C.ffo(t,l),$async$CB)
case 6:s=f
if(J.cy(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a6(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hd9(o)
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
case 12:n=C.hd9(m)
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
ffo(d,e){return C.hPt(d,e)},
hPt(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$ffo=A.e(function(b0,b1){if(b0===1){s.push(b1)
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
f=J.aW(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gU(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Aj(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.R.aG(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fTI(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Aj(a9)+"_"+n))
i=C.hRZ(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b1n(h),$async$ffo)
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
case 8:J.R9(q,new C.ffp())
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
return A.i($async$ffo,v)},
bAG(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bAG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.R_(d),$async$bAG)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.CB(r),$async$bAG)
case 4:t=p.aW(g)
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
return A.i($async$bAG,v)},
hd9(d){var w,v,u,t
try{w=B.R.aG(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d9(w,x.f)
v=A.cD(v,new C.fb6(),v.$ti.k("J.E"),x.i)
u=A.a4(v).k("a2<J.E>")
v=A.B(new A.a2(v,new C.fb7(),u),u.k("J.E"))
B.d.b0(v,new C.fb8())
return v}catch(t){v=A.a([],x.D)
return v}},
oB(d,e){return C.i5z(d,e)},
i5z(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
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
o=J.b6(x.j.a(B.R.aG(0,p,null)),new C.fFk(),a2).fK(0)
a2=J.b6(b3,new C.fFl(),a2).c_(0,new C.fFm())
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
break}i=a3.gU(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bze(h),$async$oB)
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
break}a3=a2.eK(b3,new C.fFn(q))
a4=a3.$ti.k("cR<1,a3<n,@>>")
a7=A.B(new A.cR(a3,new C.fFo(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.aft(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.R.ao(a0,null)),$async$oB)
case 45:w=46
return A.b(J.hqw(r),$async$oB)
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
r=s.bd(t,new C.fNi(e))
if(r===-1)s.ck(t,0,e)
else s.n(t,r,e)
u=C.oB(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$KT,v)},
bAs(d,e){var w=0,v=A.j(x.H),u
var $async$bAs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.CB(d),$async$bAs)
case 2:u=g
J.no(u,new C.fpG(e))
w=3
return A.b(C.oB(d,u),$async$bAs)
case 3:return A.h(null,v)}})
return A.i($async$bAs,v)},
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
j=A.cD(j,new C.fsd(),j.$ti.k("J.E"),x.k)
s=A.a4(j).k("a2<J.E>")
r=A.B(new A.a2(j,new C.fse(),s),s.k("J.E"))
B.d.b0(r,new C.fsf())
k=r}}catch(h){}w=4
return A.b(C.fbR(d),$async$Gb)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hPQ(k,p,d)
j=A.U(o)
s=j.k("K<1,a3<n,@>>")
s=A.B(new A.K(o,new C.fsg(),s),s.k("ak.E"))
n=B.R.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Qc(d,o),$async$Gb)
case 7:case 6:j=j.k("a2<1>")
m=A.B(new A.a2(o,new C.fsh(d),j),j.k("J.E"))
if(m.length!==0)C.aNT(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Gb,v)},
fF6(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fF6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qc(d,e),$async$fF6)
case 3:t=J.dH(e,new C.fF7(d))
s=A.B(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aNT(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fF6,v)},
a25(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a25=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aA(),$async$a25)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.R.aG(0,l,null)
if(x.j.b(u)){m=J.d9(u,x.f)
m=A.cD(m,new C.fNd(),m.$ti.k("J.E"),x.k)
t=A.a4(m).k("a2<J.E>")
s=A.B(new A.a2(m,new C.fNe(),t),t.k("J.E"))
o=s}}catch(k){}q=J.q9(o,new C.fNf(e))
if(B.a.i(e.x).length===0&&C.tN(e,d)){m=B.a.i(d.toLowerCase())
p=e.aCY(e.y===D.kk?D.kk:D.tE,m)}else p=e
if(q===-1)J.pq(o,0,p)
else J.aF(o,q,p)
w=3
return A.b(C.Qc(d,o),$async$a25)
case 3:w=C.tN(p,d)?4:5
break
case 4:w=6
return A.b(C.aNS(C.G9(p,d),p),$async$a25)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a25,v)},
aO2(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aO2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Gb(d),$async$aO2)
case 2:u=g
t=J.cE(u)
s=A.r8(t.eK(u,new C.fpn(e)))
t.bn(u,new C.fpo(e))
w=3
return A.b(C.Qc(d,u),$async$aO2)
case 3:w=s!=null&&C.bAv(s,d)?4:5
break
case 4:w=6
return A.b(C.fba(e),$async$aO2)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aO2,v)},
ahg(d){var w=d.f,v=A.U(w).k("a2<1>")
w=A.B(new A.a2(w,new C.fNo(),v),v.k("J.E"))
return w},
fWQ(d,e){var w,v=d.f,u=A.r8(new A.a2(v,new C.foU(e),A.U(v).k("a2<1>")))
v=C.ahg(d)
w=A.U(v).k("a2<1>")
v=A.B(new A.a2(v,new C.foV(e,u),w),w.k("J.E"))
B.d.b0(v,new C.foW())
return v},
hX9(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hlB(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bd(C.fWQ(d,u),new C.fMZ(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hYG(d,e){var w
if(e==null||e.length===0)return 1
w=C.fWQ(d,e)
if(w.length===0)return 1
return new A.K(w,new C.ft_(),A.U(w).k("K<1,H>")).fa(0,B.A_)+1},
i5s(d){var w,v=C.ahg(d)
if(v.length===0)return null
w=new A.a2(v,new C.fF0(),A.U(v).k("a2<1>"))
if(!w.gam(0))return w.gL(0)
return B.d.gL(v)},
hX4(d){return A.F(["id",d.a,"name",d.b,"gender",C.hhn(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hYB(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
n=n!==D.xK?n:q.c
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
p=A.cD(p,new C.fsa(),p.$ti.k("J.E"),x.k)
s=A.a4(p).k("a2<J.E>")
p=A.B(new A.a2(p,new C.fsb(),s),s.k("J.E"))
B.d.b0(p,new C.fsc())
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
a6=a5?D.tE:D.kk
a7=C.G9(b2,b3)
w=2
return A.b(C.At(b1),$async$ah1)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.bd(a8,new C.fEW(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bAe(b1,b2),$async$ah1)
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
i=i!==D.xK?i:l.c
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
k=a5?D.tE:D.kk
u=t.yo(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Qc(b1,a8),$async$ah1)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aNS(B.a.i(b3.toLowerCase()),u),$async$ah1)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ah1,v)},
hdx(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a6().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("K<1,a3<n,@>>"),k=A.B(new A.K(m,C.hkN(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.F(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.F(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a6().ac(),"updatedAt",o],r,x.K),"createdAt",s.a6().ac(),"updatedAt",o],r,x.z)},
hdy(d,e){var w=new A.S(Date.now(),0,!1).a6().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("K<1,a3<n,@>>")
u=A.B(new A.K(u,C.hkN(),t),t.k("ak.E"))
return A.F(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a6().ac(),"updatedAt",w],x.N,x.z)},
hNt(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a6(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ak3(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.K(j,A.fZd(),A.U(j).k("K<1,n>")).c_(0,new C.fbE())
t=A.B(j,j.$ti.k("J.E"))
if(u===v)s=D.tE
else s=B.d.t(t,u)?D.Mm:D.kk
return w.aCY(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ak3(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d9(q,h)
h=A.cD(h,new C.fbF(),h.$ti.k("J.E"),x.P)
p=A.a4(h).k("a2<J.E>")
o=A.B(new A.a2(h,new C.fbG(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.fbH(),x.N).c_(0,new C.fbI())
t=A.B(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tE
else s=B.d.t(t,u)?D.Mm:D.kk
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
fbR(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fbR=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fbV()
h=x.N
g=x.z
w=7
return A.b(A.iK(A.a([A.ln("family_trees","*",null,A.F(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bG),r.$2(A.ln("family_trees","*",A.F(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bG),"collaborator"),r.$2(A.ln("family_trees","*",null,A.F(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bG),"public")],x.cl),x.U),$async$fbR)
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
h=A.cD(new A.bc(l,h),new C.fbS(a0),h.k("J.E"),x.k)
l=A.a4(h).k("a2<J.E>")
l=A.B(new A.a2(h,new C.fbT(),l),l.k("J.E"))
B.d.b0(l,new C.fbU())
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
return A.i($async$fbR,v)},
hPQ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a6(e)
if(j.gam(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dt(e,new C.fg3(),v).c_(0,new C.fg4())
t=A.db(u,u.$ti.k("J.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.G9(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kk){m=q.e
m=!new A.K(m,A.fZd(),A.U(m).k("K<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gaf(e);j.C();){v=j.gU(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.hYB(l,v)
o=C.G9(k,w)
p=v.d
s.n(0,u,o===w?k.baF(p,D.tE):k.baF(p,v.y))}j=s.$ti.k("bc<2>")
j=A.B(new A.bc(s,j),j.k("J.E"))
B.d.b0(j,new C.fg5())
return j},
Qc(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Qc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$Qc)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fic(),x.a)
s=A.B(s,s.$ti.k("ak.E"))
w=3
return A.b(u.au("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.R.ao(s,null)),$async$Qc)
case 3:return A.h(null,v)}})
return A.i($async$Qc,v)},
aNS(d,e){return C.hUV(d,e)},
hUV(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aNS=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lN("family_trees",A.a([C.hdx(e,d)],p),null,B.cH),$async$aNS)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lN("family_trees",A.a([C.hdy(e,d)],p),null,B.cH),$async$aNS)
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
return A.i($async$aNS,v)},
aNT(d,e){return C.hUW(d,e)},
hUW(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aNT=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("K<1,a3<n,@>>")
m=n.k("ak.E")
l=A.B(new A.K(e,new C.fmZ(d),n),m)
r=l
w=7
return A.b(A.lN("family_trees",r,null,B.cH),$async$aNT)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.K(e,new C.fn_(d),n),m)
p=k
w=8
return A.b(A.lN("family_trees",p,null,B.cH),$async$aNT)
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
return A.i($async$aNT,v)},
fba(d){return C.hMO(d)},
hMO(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fba=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.QA("family_trees",A.F(["id",d],x.N,x.z),null,B.cH),$async$fba)
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
return A.i($async$fba,v)},
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
cvG:function cvG(){},
cvF:function cvF(){},
cvD:function cvD(){},
cvE:function cvE(){},
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
ak2:function ak2(d,e){this.a=d
this.b=e},
fpe:function fpe(){},
fNk:function fNk(d){this.a=d},
fnF:function fnF(d){this.a=d},
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
bMQ:function bMQ(){},
bMP:function bMP(){},
bMM:function bMM(){},
bMN:function bMN(){},
bMO:function bMO(){},
ffp:function ffp(){},
fb6:function fb6(){},
fb7:function fb7(){},
fb8:function fb8(){},
fFk:function fFk(){},
fFl:function fFl(){},
fFm:function fFm(){},
fFn:function fFn(d){this.a=d},
fFo:function fFo(){},
fNi:function fNi(d){this.a=d},
fpG:function fpG(d){this.a=d},
fsd:function fsd(){},
fse:function fse(){},
fsf:function fsf(){},
fsg:function fsg(){},
fsh:function fsh(d){this.a=d},
fF7:function fF7(d){this.a=d},
fNd:function fNd(){},
fNe:function fNe(){},
fNf:function fNf(d){this.a=d},
fpn:function fpn(d){this.a=d},
fpo:function fpo(d){this.a=d},
fNo:function fNo(){},
foU:function foU(d){this.a=d},
foV:function foV(d,e){this.a=d
this.b=e},
foW:function foW(){},
fMZ:function fMZ(d){this.a=d},
ft_:function ft_(){},
fF0:function fF0(){},
fsa:function fsa(){},
fsb:function fsb(){},
fsc:function fsc(){},
fEW:function fEW(d){this.a=d},
fbE:function fbE(){},
fbF:function fbF(){},
fbG:function fbG(){},
fbH:function fbH(){},
fbI:function fbI(){},
fbV:function fbV(){},
fbW:function fbW(d){this.a=d},
fbS:function fbS(d){this.a=d},
fbT:function fbT(){},
fbU:function fbU(){},
fg3:function fg3(){},
fg4:function fg4(){},
fg5:function fg5(){},
fic:function fic(){},
fmZ:function fmZ(d){this.a=d},
fn_:function fn_(d){this.a=d},
cvH:function cvH(d,e){this.a=d
this.b=e},
cvI:function cvI(d,e){this.a=d
this.b=e},
aG2:function aG2(d,e,f){this.a=d
this.b=e
this.c=f},
b7F:function b7F(){this.b=this.a=0},
b7E:function b7E(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
buL:function buL(){},
wA(d,e){var w,v
if(d==null)return""
w=d.bS()
v=""+w.gce()+"/"+w.gcu()+"/"+w.gcj()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gn9()),2,"0")+":"+B.a.aT(B.o.u(w.gG_()),2,"0")},
hDy(){var w,v=$.pm(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"WS"+B.d.fX(u)},
arz(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$arz=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arz)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f3("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bG),$async$arz)
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
return A.i($async$arz,v)},
arA(d){return C.hDz(d)},
hDz(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$arA=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arA)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hC("ngmy_worksheet_project_qr_stashes_v1",A.F(["stashes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cH,null),$async$arA)
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
return A.i($async$arA,v)},
arC(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$arC=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arC)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hDy()
w=4
return A.b(C.arz(),$async$arC)
case 4:r=h
q=B.a.i(e)
p=B.dJ.aJ(t)
J.aF(r,s,A.F(["ownerEmail",q,"projectId",f,"payload",B.cT.gcw().aJ(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(C.arA(r),$async$arC)
case 5:u=new A.a_z("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arC,v)},
arB(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$arB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c3(),$async$arB)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.arz(),$async$arB)
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
return A.b(C.arA(q),$async$arB)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arB,v)},
h8_(){var w=new A.S(Date.now(),0,!1).a6()
return"wst_"+(1000*w.a+w.b)+"_"+B.cI.aB(999999)},
hDA(d){var w,v,u,t,s,r,q
try{w=A.afS(d)
if(w==null)return d
v=w
if(J.KZ(v)>960||J.KY(v)>960){s=v
r=J.KZ(v)>=J.KY(v)?960:null
v=A.afR(s,J.KY(v)>J.KZ(v)?960:null,B.NI,r)}s=v
u=A.alq(82).SC(s,B.yt)
if(J.ad(u)===0)return d
s=new Uint8Array(A.ce(u))
return s}catch(q){t=A.aa(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cf4(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cf4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hDA(e)
$.cf0.n(0,s,t)
u=C.bCf(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cf4,v)},
b1n(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1n=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d_(l,"data:image")){u=null
w=1
break}t=4
r=J.f0(l,",")?B.d.gal(J.lp(l,",")):l
q=B.cG.aJ(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.h8_()
w=7
return A.b(C.cf4(p,q),$async$b1n)
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
return A.i($async$b1n,v)},
cf1(d){var w=0,v=A.j(x.T),u,t,s
var $async$cf1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cf3(s),$async$cf1)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cT.gcw().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cf1,v)},
a7V(d){var w=0,v=A.j(x.H),u,t
var $async$a7V=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hkG(d)
if(t==null){w=1
break}$.cf0.W(0,t)
w=3
return A.b(C.bCe(t),$async$a7V)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a7V,v)},
bCf(d,e){return C.i3H(d,e)},
i3H(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bCf=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aMN
w=7
return A.b(n==null?$.aMN=I.fVQ():n,$async$bCf)
case 7:r=g
q=new Uint8Array(A.ce(e))
p=J.mE(r,"thumbs","readwrite")
B.iD.mg(J.mC(p,"thumbs"),q,l)
w=8
return A.b(J.pp(p),$async$bCf)
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
return A.i($async$bCf,v)},
bCe(d){return C.i3F(d)},
i3F(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bCe=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aMN
w=7
return A.b(o==null?$.aMN=I.fVQ():o,$async$bCe)
case 7:r=f
q=J.mE(r,"thumbs","readwrite")
B.iD.Fv(J.mC(q,"thumbs"),m)
w=8
return A.b(J.pp(q),$async$bCe)
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
return A.i($async$bCe,v)}},D,Ak,Al,R,Am,An,I
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
C.anz.prototype={}
C.aXJ.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.beZ(),f=h.x!=null&&h.yO(i).length===0
if(h.x!=null)w=f?B.aZ:B.bI
else w=h.gTe()?B.bI:B.dT
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.bdY,B.q,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.eHY,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h5,i,i,i),B.S,D.faf,B.at,A.d(C.wA(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.f6b,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.aZt,i,i,i,i,B.Yf,i,i,i)
q=A.m(16)
p=A.I(B.aL,B.q,1)
o=A.I(B.aZ.j(0.28),B.q,1)
n=A.fXO(h.d)
o=A.p(B.A,C.aXI(A.fvn(h.e,n),30),B.f,i,i,new A.o(B.lF,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.f1D,B.L,i,i)
m=A.m(14)
l=A.I(B.aL,B.q,1)
q=A.p(i,A.v(A.a([o,B.N,n,B.bB,D.fax,B.ac,A.p(i,A.v(A.a([D.fpL,B.bB,A.d(A.Av(h.c),i,i,i,i,i,i,D.eXG,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.eZ,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,K.agR,i,i,i)
p=A.m(16)
m=A.I(B.aL,B.q,1)
l=j.aPx("Original due",C.wA(h.r,!1))
n=j.aPx("Current due",C.wA(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.p(i,A.v(A.a([l,B.N,n,B.S,A.p(i,A.d(h.gaJJ(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.AO,i,i,1/0),B.S,j.cd6(),B.N,j.c0M(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bj,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aL,B.q,1)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fbt,B.at,A.d(q,i,i,i,i,i,i,D.f0V,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bj,i,i,1/0)],s))}if(h.gaEA()){q=A.m(14)
o=A.I(B.cq,B.q,1.6)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fr2,B.N,A.bw(A.m(12),A.ek(new A.a7(1/0,88,A.b3(i,i,i,new A.Vo(h.ax,B.M,D.eLK,!0,3.5,i),B.au),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.F_,i,i,i)],s))}p.push(B.aA)
p.push(D.fjl)
return A.p(i,A.v(A.a([r,new A.C(B.agU,A.v(p,B.aj,i,B.e,B.j,0,B.p),i)],s),B.aj,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aPx(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.a7r,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eYF,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
cd6(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a8C(B.dT,u,"Not paid yet")
w=t.yO(null).length
v=w===0?B.aZ:B.bI
return this.a8C(v,u,C.wA(t.x,!0))},
c0M(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a8C(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a8C(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a7r,u,u,u)
v=A.U(d).k("K<1,hh>")
v=A.B(new A.K(d,new C.c0S(),v),v.k("ak.E"))
return A.v(A.a([w,B.an,A.bY(B.bz,v,B.br,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a8C(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.a7r,w,w,w),1),new A.dq(1,B.cn,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dM,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b9O.prototype={
a5(d,e){new A.Vo(this.b,B.M,e,!0,3.5,null).a5(d,e)},
ar(d){return d.b!==this.b}}
C.anG.prototype={
R(){return new C.aBU(A.a([],x.bp))},
gdY(){return this.c}}
C.aBU.prototype={
a_(){this.a1()
this.Im()},
Im(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Im=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1l(t.a.c),$async$Im)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dER(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Im,v)},
aRu(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aP,s=A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bq:B.bn).j(0.22)
w=A.m(10)
return A.br(v,new A.b4(4,r,new A.ay(u,1,B.q,-1)),v,B.bj,v,v,v,v,!0,new A.b4(4,w,new A.ay((this.a.d.a?B.bq:B.bn).j(0.22),1,B.q,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.m(10),D.aX5),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aRt(d){return this.aRu(d,null)},
OY(d){return this.cgG(d)},
cgG(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OY=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Gf:B.eG
w=7
return A.b(new A.hW().BP(72,900,900,n),$async$OY)
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
aZY(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aP,o=A.m(10),n=A.I((q?B.bq:B.bn).j(0.18),B.q,1)
if(d)q=B.d_
else q=s.a.d.a?B.bq:B.bn
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.aB,r,r,r,r,r,r,r,r,12.5,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.d_
else u=s.a.d.a?B.bq:B.bn
t=x.p
u=A.E(A.v(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a5,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fv(r,r,r,r,r,r,r,r,r,r,r,B.d_,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c9)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cB,s.a.d.a?B.bq:B.bn,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c9))
return A.p(r,A.A(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.kj,D.bpE,r,r,r)},
CP(d){return this.byb(d)},
bya(){return this.CP(null)},
byb(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CP=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
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
i=a3?null:A.fXO(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.vX?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",a4,new C.dEA(),new C.dEB(a2,t,a5,r,new C.dEC(a2,t),o,n,j),B.eE,!0,x.y),$async$CP)
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
break}if(f.length===0||e<=0){t.c.I(x.q).f.S(D.eS4)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.S(D.eQK)
w=1
break}a1=A.fvn(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.vX?"male":"female"
w=7
return A.b(A.ahf(a3,A.h4J(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$CP)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.vX?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a9(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c1(a3.gcj(),a3.gce(),a3.gcu(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcj(),a4.gce(),a4.gcu(),0,0,0,0,0)))a5.cJo(a2.a)
w=8
return A.b(A.ahf(t.a.c,a5),$async$CP)
case 8:case 5:w=9
return A.b(t.Im(),$async$CP)
case 9:case 1:return A.h(u,v)}})
return A.i($async$CP,v)},
aS5(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.d_.j(0.14)
else w=this.a.d.a?B.M:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.d_
else s=(this.a.d.a?B.bq:B.bn).j(0.2)
s=A.I(s,B.q,g?1.5:1)
r=C.aXI(d,18)
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
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",s,new C.dEU(),new C.dEV(t,d),B.hX,!0,x.y),$async$RC)
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
return A.b(C.fpu(t.a.c,e.a),$async$NC)
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
return A.b(A.bU(B.K,null,new C.dEO(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ae5)
case 2:return A.h(null,v)}})
return A.i($async$ae5,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.e5y
w=J.dH(m.d,new C.dEW())
v=A.B(w,w.$ti.k("J.E"))
w=J.dH(m.d,new C.dEX())
u=A.B(w,w.$ti.k("J.E"))
t=B.d.cI(v,0,new C.dEY())
w=A.m(18)
s=m.a.d.a
r=s?D.cmi:D.ax7
q=A.I(s?B.d_.j(0.35):B.d_.j(0.18),B.q,1)
s=A.p(l,D.bOX,B.f,l,l,new A.o(B.d_.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.av,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aB,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a1,!0,A.m(12),A.aL(!1,A.m(12),!0,D.e4X,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dEZ(m),l,l,l,l,l,l,l),B.f,B.d_,0,l,l,l,l,l,B.ag)],p),B.m,l,B.e,B.j,0,l,l)
o=A.E(m.cul("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Av(t)
r=A.a([A.p(l,A.v(A.a([s,B.ac,A.A(A.a([o,B.ab,A.E(m.b54(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.ax,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.agN,l,l,l),B.aA],p)
if(J.cl(m.d)){w=m.a.d.a
s=w?B.dX:B.c
q=A.m(18)
o=A.I((w?B.bq:B.bn).j(0.12),B.q,1)
n=A.p(l,D.bJV,B.f,l,l,new A.o(B.d_.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aB,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.ac,w,B.at,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bn,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bs1,l,l,1/0))}else{w=m.gcfZ()
s=A.B(new A.K(v,w,A.U(v).k("K<1,r>")),x.l)
if(u.length!==0){q=A.a([B.an,new A.C(D.btG,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bn,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.K(u,w,A.U(u).k("K<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.aj,l,B.e,B.j,0,B.p)},
b54(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.bq:B.bn).j(0.12),B.q,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bq:B.bn,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.d_
else w=v.a.d.a?B.aP:B.aB
return A.p(u,A.v(A.a([q,B.bB,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ei,u,u,u)},
cul(d,e){return this.b54(!1,d,e)},
cg_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.yO(j).length,h=d.bea()
if(d.x!=null){w=d.yO(j).length
v=w===0?B.d_:B.bI}else if(d.gTe())v=B.bI
else{if(h)w=B.d_
else w=k.a.d.a?B.bq:B.bn
v=w}if(d.x!=null){w=d.yO(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wA(u,!1)}else{u.toString
t="Paid "+C.wA(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wA(w,!1)+" \xb7 "+i+" missed":"Due "+C.wA(w,!1)}w=k.a.d.a?B.dX:B.c
u=A.m(18)
if(d.gTe()&&d.x==null)s=B.bI.j(0.35)
else s=(k.a.d.a?B.bq:B.bn).j(0.12)
s=A.I(s,B.q,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bm:B.lF
o=A.I(d.gTe()&&d.x==null?B.bI.j(0.45):B.d_.j(0.28),B.q,1.4)
n=d.x!=null?0.55:1
m=A.fXO(d.d)
o=A.p(B.A,A.dc(C.aXI(A.fvn(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.aB
m=x.p
n=A.a([new A.dq(1,B.cn,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaEA())B.d.v(n,A.a([B.eb,A.X(B.MN,B.d_.j(0.8),j,j,j,14)],m))
p=A.E(A.v(A.a([A.A(n,B.m,j,B.e,B.j,0,j,j),B.cS,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.Av(d.c)
l=k.a.d.a?B.aP:B.aB
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aG(!1,B.a1,!0,j,A.aL(!1,q,!0,new A.C(W.agw,A.A(A.a([o,B.bf,p,B.ab,A.v(A.a([n,B.bB,A.X(B.ex,(k.a.d.a?B.bq:B.bn).j(0.5),j,j,j,18)],m),B.dz,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dEQ(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ag),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.dc,j,j,j,j)}}
C.u3.prototype={}
C.ak1.prototype={
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
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.atD,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.Fg,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f4(m,A.A(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.eg)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(D.boS,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cF:B.bl,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.C(B.fp,A.v(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.eMu)
a2=A.a([A.A(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.C(B.ve,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a3,B.a7,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.lf,A.v(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.q,1),a2,a0,a0,B.n),a0,a0,a0,B.hi,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.ax,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bq3,a0,a0,a0,a0)}}
C.aTw.prototype={
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
if(p.z)o.push(new A.C(B.vb,n,q))
return new A.C(B.dc,A.v(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.Sb.prototype={
R(){return new C.bdp()}}
C.bdp.prototype={
gbWS(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.e5t,D.e5z],l)
for(w=0;w<8;++w){v=D.a1d[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.G_:B.Bx
q=t===s
r=A.X(r,q?B.ez:B.c1,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.x(v.b,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bD(1,B.bh,new A.x(v.c,n,A1.D3,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aT(24,24)
p=new A.ay(B.ez,2,B.q,-1)
s=new A.o(n,n,new A.bO(p,p,p,p),new A.bp(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aE(n,new A.C(B.eF,A.v(A.a([new A.C(B.mn,new A.cn(B.aO,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.DE(!0,new C.ak1(v,q.d,q.e,new C.d4F(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d4G(o,v),n,n,n,n,n,n,!1,B.a8))}k.push(new A.C(D.bql,A.bH(D.fwh,new C.d4H(o,d),A.bl(B.b7,n,n,n,n,B.ob,n,n,new A.b7(A.m(16),B.Y),n,n,n)),n))
return A.bn(!0,new A.cS(new A.aY(0,1/0,0,m.a.b*0.9),A.cA(k,n,D.buy,n,n,B.ah,!0),n),!0,!1,B.af,!0,!0)}}
C.n8.prototype={
ag(){var w=this
return A.F(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a6().ac()],x.N,x.z)},
baR(d,e,f){return new C.n8(this.a,e,d,f)}}
C.Hf.prototype={
w9(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Hf(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aCN(d){var w=null
return this.w9(w,w,w,w,w,d,w,w,w,w,w,w)},
cFe(d){var w=null
return this.w9(w,w,w,w,d,w,w,w,w,w,w,w)},
baP(d,e,f){var w=null
return this.w9(d,w,w,w,w,w,w,w,e,w,f,w)},
cFT(d){var w=null
return this.w9(w,w,w,w,w,w,d,w,w,w,w,w)},
cG1(d){var w=null
return this.w9(w,w,w,w,w,w,w,w,w,d,w,w)},
cFc(d){var w=null
return this.w9(w,w,w,d,w,w,w,w,w,w,w,w)},
cG3(d){var w=null
return this.w9(w,w,w,w,w,w,w,w,w,w,w,d)},
cF9(d){var w=null
return this.w9(w,w,d,w,w,w,w,w,w,w,w,w)},
cF4(d){var w=null
return this.w9(w,d,w,w,w,w,w,w,w,w,w,w)},
Fo(d){var w=null
return this.w9(w,w,w,w,w,w,w,d,w,w,w,w)},
cGb(d,e,f,g,h,i,j,k,l,m,n){return this.w9(d,e,f,g,null,h,i,j,k,l,m,n)},
ag(){var w=this
return A.F(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cCS(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bML(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Ca.gef(D.Ca))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a2K)
q=l.$2("frame",D.a2b)
l=l.$2("texture",D.a26)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cGb(p,u,t,q,r,A.qI(d.h(0,"ribbon"))?A.FL(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.YK.prototype={
R(){return new C.ayY(A.a([],x.I),D.Ml)},
gdY(){return this.c}}
C.ayY.prototype={
a_(){var w,v=this
v.a1()
v.f=A.zj(0,1)
w=$.aw()
v.z=new A.ar(B.as,w)
v.Q=new A.ar(B.as,w)
v.kQ()
w=v.a
C.bAD(w.c,w.d).bz(new C.d5l(v),x.fL)},
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
return A.b(C.Ks(s.c,s.d),$async$kQ)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d59(t,r))
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
c9_(d){this.m(new C.d56(this,d))
this.auE()},
MY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$MY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.n8(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aPG(r.c,r.d,s),$async$MY)
case 3:w=4
return A.b(t.kQ(),$async$MY)
case 4:if(t.c==null||J.cl(t.d)){w=1
break}q=J.q9(t.d,new C.d4I(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d4J(t,p))
t.auE()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.AQ(p+1,B.ct,B.kI),$async$MY)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$MY,v)},
Aw(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Aw=A.e(function(d,e){if(d===1)return A.f(e,v)
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
return A.b(C.aPG(o.c,o.d,new C.n8(s,r,q,new A.S(p,0,!1))),$async$Aw)
case 3:w=4
return A.b(t.kQ(),$async$Aw)
case 4:if(t.c==null){w=1
break}t.m(new C.d5a(t))
case 1:return A.h(u,v)}})
return A.i($async$Aw,v)},
ND(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ND=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.garh()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d4R(r),s,null,!0,!0,x.y),$async$ND)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bAo(s.c,s.d,r.a),$async$ND)
case 4:t.m(new C.d4S(t))
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
return A.b(t.Aw(),$async$y7)
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
return A.b(C.hl8(s,r.x,r.r),$async$y7)
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
return A.b(t.Aw(),$async$a_S)
case 5:case 4:if(t.c==null){w=1
break}s=t.gy5(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dL(D.yA,new C.d57(t),new C.d58())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mo("Our Family",o,"",""))
for(o=J.aW(t.d);o.C();){n=o.gU(o)
p.push(new F.mo(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fZp(o,new F.rc(s,r,"",p,new F.un(q.d,null,null,null,null,"","","")),null),$async$a_S)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a_S,v)},
Nl(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Nl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Aw(),$async$Nl)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.ac7,null,new C.d4N(t),s,!0,!0,!0,D.aLQ,!1,!1,x.N),$async$Nl)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cFe(r)
t.m(new C.d4O(t,q))
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
return A.b(A.bU(D.ac7,null,new C.d4T(t),r,!0,!0,!0,D.aLQ,!1,!1,x.e),$async$Wt)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d4U(t,s))
r=t.a
w=4
return A.b(C.R1(r.c,r.d,s),$async$Wt)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.AQ(0,B.dU,B.oz)
case 1:return A.h(u,v)}})
return A.i($async$Wt,v)},
bO6(d){var w=d.bS(),v=B.a.aT(B.o.u(w.gce()),2,"0"),u=B.a.aT(B.o.u(w.gcu()),2,"0")
return""+w.gcj()+"-"+v+"-"+u},
gy5(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bW7()
if(r.e)w=D.aaU
else if(J.cl(r.d)){w=r.y
v=r.gy5(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eX8,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.C(A0.ahP,new C.Y2(w,v,0,q),q),q),B.by,t,B.an,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kd.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aE(q,A.p(q,D.eHO,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dP.j(0.45),B.J,18)],x.V),E.vM,B.n),q,q,q,q,B.Yp,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcC_(),q,q,q,q,q,q,!1,B.a8))
w.push(B.S)
w.push(A.hd(D.bGb,D.fvL,r.gaLs(),q))
B.d.v(u,w)}w=A.av(A.cd(A.v(u,B.m,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.ew,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kd.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.P,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dQ:B.zY
u=A.v(A.a([new A.C(D.brl,w,q),A.E(A.Iz(v,new C.d5j(r),J.ad(r.d)+1,q,r.gc8Z(),u,B.aO),1),r.bB2()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c8(q,D.adq,new A.an(B.W,q,B.b_,B.r,A.a([D.aKl,A.bn(!0,A.v(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bW7(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cy(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Jz(B.dW,"AI",h.gbyY(),!0))
if(h.a.f)f.push(new C.Jz(B.nd,"Cover",h.gbJv(),!1))
if(h.a.f)f.push(new C.Jz(B.yd,"Header",h.gbEt(),!1))
if(J.cy(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Jz(B.tT,"Print",h.gci_(),!1))
if(h.a.f&&J.cy(h.d)&&h.r>=0){v=h.w
u=v?B.hz:B.jg
t=v?"Save":"Edit"
f.push(new C.Jz(u,t,v?h.gcod():new C.d53(h),!1))}if(h.a.f)f.push(new C.Jz(B.hy,"Add page",h.gaLs(),!1))
v=C.hhm(h.y.Q)
u=h.gy5(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.dmC
else{k=new A.aT(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.jO.j(0.5),1,B.q,-1)
j=A.p(g,A.X(l.a,D.kd,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bO(i,i,i,i),new A.bp(k,k,k,k),g,new A.a8(B.a3,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kd.j(0.85)
p.push(new A.bD(1,B.bh,A.aE(B.c4,A.v(A.a([k,B.bB,new A.x(l.b,g,new A.G(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a8),g))}return new C.ak1(v,u,t+" \xb7 "+s+" "+r,new C.d54(h),A.A(p,B.m,g,B.e,B.j,0,g,g),g)},
zA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Aw(),$async$zA)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aW(t.d);r.C();){q=r.gU(r)
s.push(q.b+" "+q.c)}p=F.a1A(B.d.aI(s," "))
s=t.c
s.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.d4K(t,p),s,null,!0,!0,x.N),$async$zA)
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
return A.b(t.Dp(),$async$zA)
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
return new A.C(B.cC,A.aL(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.vM,B.a6),w,42,w,w,w,w,w,42),B.bf,A.E(A.v(A.a([A.d(f,w,w,w,w,w,w,A8.Ta,w,w,w),A.d(g,w,w,w,w,w,w,O.T4,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bj,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d55(d,h),w,w,w,w,w,w,w),w)},
Dp(){return this.bNB()},
bNB(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Dp=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d4X(r),a7,null,!0,!0,x.ei),$async$Dp)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eR("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.ca(null,null,!1,null,new C.d4Y(o),a7,null,!0,!0,x.H).fe(new C.d4Z(a6))
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
for(a1=0;a1<8;++a1){i=D.yA[a1]
J.ch(j,i.a)}w=8
return A.b(C.agq(a0,a7,new C.d5_(o),d,l,e,j),$async$Dp)
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
J.aQ6(l,0)
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
return A.b(C.AE(j.c,j.d,l),$async$Dp)
case 11:w=12
return A.b(r.kQ(),$async$Dp)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.yA[a1].a)
a5=l.cCS(j,12,a7)
l=r.a
w=15
return A.b(C.R1(l.c,l.d,a5),$async$Dp)
case 15:if(r.c!=null)r.m(new C.d50(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.AQ(0,B.dU,B.oz)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.I(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.S(A.b2(a3?A.cqb("Undo",new C.d51(r,p,f),null):null,null,null,null,null,B.r,null,j,null,B.ed,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Dp,v)},
F1(d,e){return this.cyL(d,e)},
cyK(d){return this.F1(d,!1)},
cyL(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$F1=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eR("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.ca(null,null,!1,null,new C.d5c(a0),k,null,!0,!0,x.H).fe(new C.d5d(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.ch(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a1N(m,new C.d5e(a0)),$async$F1)
case 10:w=8
break
case 9:w=11
return A.b(C.bC6(new C.d5f(a0),m,a2),$async$F1)
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
J.aQ6(o,0)
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
o.S(A.b2(A.cqb("Undo",new C.d5g(r,d),null),null,null,null,null,B.r,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$F1,v)},
bB2(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d4L(v):u
r=A.aH(u,u,u,u,A.X(D.bBV,s?D.kd:B.b3,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cy(v.d)&&!v.w&&v.r>=0)s=A.hd(A.X(B.vq,B.EE,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.EE,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbJ4(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kd.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.av(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d4M(v):u
return A.bn(!0,new A.C(D.br9,A.A(A.a([r,s,A.aH(u,u,u,u,A.X(B.ex,t<J.ad(v.d)?D.kd:B.b3,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.YO.prototype={
R(){return new C.bdK(new A.ar(B.as,$.aw()))}}
C.bdK.prototype={
ga1_(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
gbMl(){var w,v=this.ga1_()
A:{if("cover"===v){w=D.cSh
break A}if("book"===v){w=D.cO7
break A}w=D.dfl
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jO.j(0.5),n=x.p,m=A.A(A.a([D.dmD,B.av,D.bwx,A.aH(q,q,q,q,B.lm,q,q,q,new C.d75(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jJ(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d76(r),r.ga1_()==="page",q,q,q,q))
if(r.a.d)l.push(A.jJ(q,q,q,D.fqy,q,new C.d77(r),r.ga1_()==="book",q,q,q,q))
l.push(A.jJ(q,q,q,D.fe2,q,new C.d78(r),r.ga1_()==="cover",q,q,q,q))
l=A.bY(B.bz,l,B.br,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.T,!1,q,!0,B.r,q,A.aN(),r.d,q,q,q,q,q,2,A.br(q,new A.b4(4,A.m(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kx,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dl,!0,B.a4,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbMl(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mF(q,B.c.j(0.08),new A.x(s,q,B.IK,q,q,q,q,q,q,q,q,q),B.hD,new C.d79(r,s),q,q,q,q))}return A.eH(q,E.At,A.cd(A.v(A.a([m,B.S,D.ftJ,B.an,l,B.ac,k,B.N,A.bY(B.bz,w,B.br,6,6),B.aA,A.dp(D.bG8,D.fuu,new C.d7a(r,d),A.bl(B.b7,q,q,q,q,B.ob,q,q,new A.b7(A.m(16),B.Y),q,q,q)),B.at,D.foU],n),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.fz,q,q,B.ah),q,q,q,D.ahy,B.d0,q,new A.b7(p,new A.ay(o,1.4,B.q,-1)),q)}}
C.YM.prototype={
R(){return new C.ayZ(A.a([],x.Y))},
gdY(){return this.c}}
C.aec.prototype={}
C.ayZ.prototype={
a_(){this.a1()
this.kQ()},
kQ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Qw(p.c,p.d),$async$kQ)
case 3:o=e
n=A.a([],x.Y)
p=J.aW(o)
case 4:if(!p.C()){w=5
break}s=p.gU(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bAD(r.c,q),$async$kQ)
case 6:j=e
i=J
w=7
return A.b(C.Ks(t.a.c,q),$async$kQ)
case 7:m.push(new l.aec(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d5A(t,n))
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
return A.b(A.a5(s,!1).c8(A.e8(new C.d5z(u,e),!0,null,x.y)),$async$PE)
case 2:t=g
w=3
return A.b(u.kQ(),$async$PE)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.S(D.aNJ)
return A.h(null,v)}})
return A.i($async$PE,v)},
F4(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$F4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.S(D.aNF)
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
return A.b(t.PE(0,B.d.iH(t.d,new C.d5E(q))),$async$F4)
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
case 11:if(m&&t.c!=null)t.c.I(x.q).f.S(D.aNJ)
case 1:return A.h(u,v)}})
return A.i($async$F4,v)},
P8(d,e){return this.clW(0,e)},
clW(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$P8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d5D(t,e),s,null,!0,!0,x.y),$async$P8)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a2_(s.c,s.d,e.a),$async$P8)
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
k.push(A.aE(n,new A.fG(0.7142857142857143,A.p(n,A.v(A.a([D.dmE,B.ac,D.e4C,B.at,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kd.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.bb,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcBW(),n,n,n,n,n,n,!1,B.a8))}w=A.m(22)
v=A.I(E.jO.j(0.85),B.q,1.6)
s=A.aE(n,A.p(n,D.bNL,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jO.j(0.6),B.q,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d5F(d),n,n,n,n,n,n,!1,B.a8)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.jO.j(0.5),B.q,1)
w=A.p(n,A.A(A.a([s,B.bf,D.bwT,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eWe,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h5,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bTk,B.n),n,n,n,Am.LO,D.bpj,n,n,n)
if(o.e)k=D.aaU
else k=k.length===0?D.b3s:A.cp(new C.d5G(k))
return A.c8(n,D.adq,new A.an(B.W,n,B.b_,B.r,A.a([D.aKl,A.bn(!0,A.v(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bB5(d){var w,v,u=this,t=null,s=u.b6f(d),r=d.c,q=x.p,p=A.a([A.bZ(0,A.f4(B.A,new A.a7(300,420,new C.Y2(d.b,s,r,t),t),B.f,B.du),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aE(t,A.p(t,D.bN4,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b3,B.q,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d5x(u,d),t,t,t,t,t,t,!1,B.a8),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.eVP,t,t,t)
v=r===1?"page":"pages"
return A.aE(t,A.v(A.a([new A.fG(0.7142857142857143,new A.an(B.W,t,B.aa,B.r,p,t),t),B.N,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kd.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d5y(u,d),t,t,t,t,t,t,!1,B.a8)}}
C.Jz.prototype={}
C.Y2.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dL(D.yA,new C.cEr(m),new C.cEs()),j=m.c,i=D.Ca.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.lT:B.bb
v=new C.cEt(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.e1W,28)],x.V)
u=x.p
t=A.a([A.bZ(0,A.b3(l,l,l,new C.bb0(j.x,h,l),B.au),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a3,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aT(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bp(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.ahQ,8,0.85,2.2),v.$4(D.btZ,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.ahQ,8,0.85,2.4))
else if(r==="corners")t.push(A.bZ(0,new A.C(D.btV,A.b3(l,l,l,new C.baS(h,l),B.au),l),0,0,0))
r=A.X(D.awe[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.atD,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cF,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aQ,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bZ(0,new A.C(D.buq,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aFY(l),D.eLD),l,l,l,46,0,l))
return A.p(l,A.bw(D.a9B,new A.an(B.W,l,B.aa,B.r,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.a9B,i,new A.a8(B.ax,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bb0.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eK()
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
C.baS.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.W(),k=A.M(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bO
for(w=e.a,v=e.b,v=[D.eCR,new A.cI([w,0,-1,1]),new A.cI([0,v,1,-1]),new A.cI([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
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
C.u4.prototype={}
C.Yk.prototype={
R(){return new C.baZ()}}
C.baZ.prototype={
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
q(){var w=this,v=w.gy5(0),u=v.T$=$.aw()
v.P$=0
v=w.gaA1()
v.T$=u
v.P$=0
v=w.gapR()
v.T$=u
v.P$=0
w.a2()},
aqs(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jJ(s,s,s,new A.x(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cXT(this,f,u),e===u,s,s,s,s))}return A.bY(B.bz,r,B.br,6,8)},
aw5(d){var w=null,v=B.c.j(0.07)
return A.br(w,new A.b4(4,A.m(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.l0,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.go0(),a0=f.gy5(0),a1=a0.a.a,a2=f.gaA1(),a3=a2.a.a,a4=f.gapR(),a5=d.baP(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a7(190,260,A.f4(B.A,new A.a7(270,370,new C.Y2(a5,d,f.a.e,e),e),B.f,B.du),e),e,e,e)
a0=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a0,e,e,e,e,e,2,f.aw5("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYh(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a4,e,B.am,e,e,e,e)
a2=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a2,e,e,e,e,e,2,f.aw5("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYi(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a4,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.yA[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b3
q=r.a===q
o=new A.ay(p,q?3:1,B.q,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bO(o,o,o,o),e,e,new A.a8(B.ax,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.az
v.push(A.aE(e,A.v(A.a([p,B.cS,new A.x(t.b,e,new A.G(!0,q,e,e,e,e,10.5,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYj(f,t),e,e,e,e,e,e,!1,B.a8))}v=A.bY(B.bz,v,B.br,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b7.j(0.35):B.c.j(0.07)
m=new A.aT(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.ez:B.K,2,B.q,-1)
q.push(A.aE(e,A.p(e,A.X(D.awe[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bO(o,o,o,o),new A.bp(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYk(f,n),e,e,e,e,e,e,!1,B.a8))}q=A.bY(B.bz,q,B.br,8,8)
a4=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a4,e,e,e,e,e,2,f.aw5("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYl(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a4,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mH,e,e,e)
m=A.a([],w)
for(l=D.Ca.gdK(D.Ca),l=l.gaf(l);l.C();){k=l.gU(l)
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
m.push(A.aE(e,A.v(A.a([j,B.bB,new A.x(i,e,new A.G(!0,h,e,e,e,e,10,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYm(f,k),e,e,e,e,e,e,!1,B.a8))}m=A.bY(B.bz,m,B.br,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mH,e,e,e)
k=f.go0()
return new A.C(new A.Q(0,0,0,a3.f.d),A.bn(!0,new A.cS(new A.aY(0,1/0,0,a1.a.b*0.92),A.cA(A.a([D.fol,B.ac,d,B.aQ,a0,B.S,a2,B.aA,D.fui,B.N,v,B.aA,D.fow,B.N,q,B.aA,a4,B.aA,p,B.N,m,B.aA,l,A.kX(e,9,""+B.k.V(f.go0().f),36,18,new C.cYn(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mH,e,e,e),B.an,f.aqs(D.a2K,f.go0().r,new C.cYo(f),D.diw),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mH,e,e,e),B.an,f.aqs(D.a2b,f.go0().w,new C.cYp(f),D.diB),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mH,e,e,e),B.an,f.aqs(D.a26,f.go0().x,new C.cYr(f),D.djZ),B.an,A.iE(e,B.b7,e,B.af,e,new C.cYs(f),e,e,e,D.fiR,f.go0().z),B.by,A.bH(D.fnc,new C.cYt(f,a6),A.bl(B.b7,e,e,e,e,B.ob,e,e,new A.b7(A.m(16),B.Y),e,e,e))],w),e,R.ahn,e,e,B.ah,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aFY.prototype={
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
u.saq(D.bTY.av(0,new A.a9(0,0,0+w,0+v)))
d.aO(t,u)},
ar(d){return!1}}
C.bgd.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=A.M()
w.saq(D.bT0.av(0,new A.a9(0,0,a3,a4)))
a5.aZ(new A.a9(0,0,a3,a4),w)
v=B.k.dw(a2/112)
u=new A.eK()
u.dB(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cSg[u.aB(9)]
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
p.saq(D.bSo.av(0,new A.a9(0,r,a3,q)))
d=p.H()
w.drawRect(A.c0(new A.a9(0,r,a3,q)),d)
d.delete()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.jk
d=p.H()
w.drawRect(A.c0(new A.a9(0,q,a3,q+14)),d)
d.delete()}w=A.M()
w.r=D.b6Q.j(0.72).gp(0)
a5.aZ(new A.a9(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.M()
a4.saq(new A.bS(B.A,0.5,B.x,a0,0,A.a([D.bdy.j(0.22),B.K],t),a0,a0).av(0,A.bT(new A.u(w,a2),a1)))
a5.ae(new A.u(w,a2),a1,a4)},
ar(d){return!1}}
C.b9c.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aK(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.kN(new A.o(A.aq(D.kd,D.bhV,w/4),o,new A.bO(B.Y,new A.ay(B.w.j(0.12),1,B.q,-1),B.Y,B.Y),B.JU,o,o,B.n),B.bd,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aFZ,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aT(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jO.j(0.6),o,o,new A.bp(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.q0,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aWQ,u,D.bTW,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dk,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aFY(o),D.eLy),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aTw(p.y,r,G.ir,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.r,o,o,o,o,o,2,A.br(o,B.ey,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ir.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f8t,!0,B.a4,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ir.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.w,o,o,o,o,o,2,A.br(o,B.ey,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ir.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f_G,!0,B.a4,B.zm,B.am,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.f8l,o,o,o),B.at,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ir.j(0.5),o,o,o,o,o,o,o,o,11,B.cF,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.N,A.A(A.a([A.E(A.p(o,o,B.f,D.Er.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fp,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.Er.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.Er.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aA],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.ir.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Xi(A.dn(A.a([A.dn(o,o,o,o,o,o,o,o,o,D.f2M,B.a.ap(k,0,1)),A.dn(o,o,o,o,o,o,o,o,o,o,B.a.b1(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.ir.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.v(n,B.F,o,B.e,B.j,0,B.p),B.r,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.C(B.hY,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.ir.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.A(A.a([u,A.E(A.p(o,A.bw(B.JU,new A.an(B.W,o,B.aa,B.r,A.a([t,new A.C(D.bts,A.v(s,B.aj,o,B.e,B.j,0,B.p),o),A.ao(0,A.c_(o,new A.o(o,o,o,o,o,new A.a8(B.a3,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bd),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.JU,v,D.bUt,B.n),o,o,o,o,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.r,l,o)}}
C.aoM.prototype={
R(){return new C.aCu(A.a([],x._))},
bp(){return this.r.$0()},
pO(){return this.w.$0()},
gdY(){return this.c}}
C.aCu.prototype={
a_(){var w,v
this.a1()
this.vG()
w=this.a
v=w.c
if(v.length!==0)C.a6E(v,w.e,w.d.w)},
vv(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fZs(r,t.e,!1,s.w,new C.dSS(u),null,s),$async$vv)
case 2:w=3
return A.b(u.vG(),$async$vv)
case 3:return A.h(null,v)}})
return A.i($async$vv,v)},
a_1(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a_1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fZs(r,t.e,!0,s.w,new C.dSR(u),null,s),$async$a_1)
case 2:w=3
return A.b(u.vG(),$async$a_1)
case 3:return A.h(null,v)}})
return A.i($async$a_1,v)},
vG(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vG=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.At(q.a.c),$async$vG)
case 7:p=e
if(q.c!=null)n=q.e||J.cy(p)
else n=!1
if(n)q.m(new C.dSU(q,p))
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
return A.b(C.Gb(q.a.c).cM(0,B.pE),$async$vG)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dSV(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dSW(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vG,v)},
O7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$O7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.S(D.eP9)
w=3
return A.b(C.Gb(t.a.c),$async$O7)
case 3:r=e
w=4
return A.b(C.fF6(t.a.c,r),$async$O7)
case 4:q=e
w=5
return A.b(C.Gb(t.a.c),$async$O7)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dSQ(t,p))
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
return A.b(C.i5K(l),$async$HC)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hAj(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aZ8(q,p.e,l,"Each family tree costs $"+B.k.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$HC)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hhw(r)
o=Date.now()
n=t.a.c
m=new C.kA(l,r.toUpperCase(),p,!0,B.T,D.C_,new A.S(o,0,!1),0,n,D.tE)
w=5
return A.b(C.a25(n,m),$async$HC)
case 5:w=6
return A.b(t.vG(),$async$HC)
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
case 2:n=l.r8(k.dH(f,new C.dST(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hw(m,new C.aoG(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Ee)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a25(u.a.c,o),$async$Ee)
case 6:case 5:w=7
return A.b(u.vG(),$async$Ee)
case 7:u.a.pO()
return A.h(null,v)}})
return A.i($async$Ee,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tC(p)
if(r.e)return A.av(A.mG(q,p?B.bq:B.bn,q,q,q,q,q,q,q,q),q,q,q)
if(J.cl(r.d)){w=p?B.dX:B.c
v=A.m(15)
u=A.aG(!1,B.a1,!0,q,A.aL(!1,q,!0,A.p(q,D.bHd,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.q,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcbD(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Fe(A.p(q,A.v(A.a([u,B.aQ,t,B.N,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bn,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.e1,A.bH(D.fvv,r.gaPt(),A.bl(B.bW,q,q,q,q,q,Al.Ys,q,new A.b7(A.m(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bto,q,q,1/0),15,B.af,1.05,D.a8h,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b6],v)
if(J.cy(r.d))w.push(A.aH(q,q,q,q,A.X(B.yk,B.aV,q,q,q,q),q,q,q,new C.dSY(r),q,q,q,q,"Sync family trees with database",q))
if(J.cy(r.d))w.push(A.aH(q,q,q,q,A.X(B.yb,B.aV,q,q,q,q),q,q,q,r.gaeL(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dp(E.amY,D.fbT,r.gaPt(),A.bl(B.bW,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.Fe(r.cyP(J.q(r.d,s),o),14,B.af,1,D.a8h,q))
B.d.v(w,u)}return A.v(A.a([p,B.aA,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cyP(d,e){var w=null,v=e.a,u=v?B.dX:B.c,t=A.m(14),s=A.I((v?B.dZ:B.bS).j(0.55),B.q,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.ek,10)],x.V),q=A.m(14),p=A.p(w,D.bGh,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.ganL(),m=d.d?"":" \xb7 Public",l=d.y===D.kk?" \xb7 View only":"",k=x.p
l=A.E(A.v(A.a([o,B.bB,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aG(!1,B.a1,!0,w,A.aL(!1,q,!0,new A.C(B.bC,A.A(A.a([p,B.bf,l,A.X(B.Mx,v?B.bq:B.bn,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dSX(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aoG.prototype={
R(){return new C.aCr(A.a([],x._),A.aX(x.N),A.b6Q())},
bp(){return this.r.$0()},
gdY(){return this.c}}
C.aCr.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.abF()
w=u.a
v=w.c
if(v.length!==0)C.a6E(v,w.e,w.d.w)},
q(){var w=this.w
w.T$=$.aw()
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
return A.b(A.ca(null,null,!0,null,new C.dSi(r),s,null,!0,!0,x.y),$async$a1X)
case 3:if(e!==!0||t.c==null){w=1
break}t.J7()
t.m(new C.dSj(t,r))
w=4
return A.b(t.vx(),$async$a1X)
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
$.aV.x1$.push(new C.dSd(w,f,d,e))},
aRJ(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dm()
u.e4(w,v,0,1)
u.jH(q,q,1,1)
this.w.sp(0,u)},
b8u(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eD(new Float64Array(16))
q.dZ(r)
w=q.Cj()
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
case 2:t=s.r8(r.dH(e,new C.dRM(u)))
if(t!=null&&u.c!=null)u.m(new C.dRN(u,t))
return A.h(null,v)}})
return A.i($async$abF,v)},
xz(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.S(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
vv(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.fZs(o,t,!1,r,new C.dS0(u),q.a,s),$async$vv)
case 2:n=A
m=J
w=3
return A.b(C.Gb(u.a.c),$async$vv)
case 3:p=n.r8(m.dH(e,new C.dS1(u)))
if(p!=null&&u.c!=null)u.m(new C.dS2(u,p))
return A.h(null,v)}})
return A.i($async$vv,v)},
J7(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cB(w,0)},
vx(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a25(t,s),$async$vx)
case 2:return A.h(null,v)}})
return A.i($async$vx,v)},
a0x(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0x=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tN(q,t.a.c)){t.xz("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.i6T(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a0x)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.J7()
t.m(new C.dSc(t,r))
w=4
return A.b(t.vx(),$async$a0x)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0x,v)},
a_f(){return this.ccB()},
ccB(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_f=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tN(q,t.a.c)){t.xz("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.P(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dSa(r,new C.tC(q.ax.a===B.I)),s,null,!0,!0,x.y),$async$a_f)
case 3:if(e!==!0||t.c==null){w=1
break}t.J7()
t.m(new C.dSb(r,t))
w=4
return A.b(t.vx(),$async$a_f)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_f,v)},
Vj(d){return this.by8(d)},
by8(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tN(r,t.a.c)){t.xz("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dRA(t,d),r,null,!0,!0,x.P),$async$Vj)
case 3:s=f
if(s==null){w=1
break}t.J7()
t.m(new C.dRB(t,s))
w=4
return A.b(t.vx(),$async$Vj)
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
return A.b(A.ca(null,null,!0,null,new C.dSl(u,d,new C.tC(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a2i)
case 2:return A.h(null,v)}})
return A.i($async$a2i,v)},
c8U(d){var w=this,v=w.d
v===$&&A.c()
if(C.tN(v,w.a.c))w.NN(d)
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
return A.b(A.ca(null,null,!0,null,new C.dSf(new C.tC(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ahe)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ahe,v)},
HH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kk?3:5
break
case 3:w=6
return A.b(C.fNj(t.a.c),$async$HH)
case 6:s=e
o=t.a
r=C.h66(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ahe(!s,!r),$async$HH)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bAv(o,t.a.c)){t.xz("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.l2(o,"Cancel","Remove",q.y===D.kk?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$HH)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aO2(t.a.c,t.d.a),$async$HH)
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
if(!C.tN(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b5(s,new C.dRC(p))){o=A.U(s)
p.a=A.r8(new A.cR(new A.a2(s,new C.dRD(d),o.k("a2<1>")),new C.dRE(),o.k("cR<1,n>")))}q=p.a
if(q==null)q=d.d
t.J7()
t.m(new C.dRF(t,s,d,q))
w=3
return A.b(t.vx(),$async$a9e)
case 3:t.xz(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a9e,v)},
NN(d){return this.bLi(d)},
bLi(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tN(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a2i(d),$async$NN)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.dRJ(t,d),r,null,!0,!0,x.P),$async$NN)
case 6:s=f
if(s==null){w=1
break}t.J7()
t.m(new C.dRK(t,s))
w=7
return A.b(t.vx(),$async$NN)
case 7:case 1:return A.h(u,v)}})
return A.i($async$NN,v)},
cza(){var w=this,v=w.d
v===$&&A.c()
if(!C.tN(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dSk(w))
w.vx()},
Y7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Y7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bAv(n,t.a.c)){t.xz("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.aw()
r=new A.ar(B.as,s)
q=t.d.e
p=A.bm(new A.K(q,t.gc7p(),A.U(q).k("K<1,n>")).c_(0,new C.dRW()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dRX(t,new C.tC(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$Y7)
case 3:o=e
r.T$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.J7()
t.m(new C.dRY(t,p))
w=4
return A.b(t.vx(),$async$Y7)
case 4:t.xz("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Y7,v)},
c7q(d){return B.a.i(d.toLowerCase())},
cbo(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tN(v,w)
t=r.d
s=C.hX8(t)
C.i5O(q,t.b,u,C.hX7(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tC(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a2(l,new C.dSs(),A.U(l).k("a2<1>")).gM(0)
l=n?B.bY:B.iN
v=A.X(B.ZD,n?B.bq:B.bn,o,o,o,18)
u=x.p
v=A.a([new A.C(B.AS,A.aL(!1,o,!0,new A.C(B.hK,A.A(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,o,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dSt(p,d),o,o,o,o,o,o,o),o),new A.C(B.n8,p.bW8(m),o)],u)
if(p.d.y===D.kk){t=B.rh.j(0.15)
s=A.m(12)
r=A.I(B.rh.j(0.45),B.q,1)
q=C.G9(p.d,p.a.c)
v.push(new A.C(B.xx,A.p(o,A.A(A.a([D.bLs,B.av,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,12,o,o,B.a5,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.ix,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b6],u)
if(C.tN(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Jv("Undo",B.r5,p.gcz9(),m,o,o))
u.push(new C.Jv("Family Book",D.bB1,p.gcbn(),m,B.t7,o))
if(C.tN(p.d,p.a.c))u.push(new C.Jv("Display settings",B.BC,p.gccA(),m,B.aZ,o))
u.push(new C.Jv("Sync",B.yb,p.gaeL(),m,o,o))
t=p.d
if(t.y===D.kk||C.bAv(t,p.a.c)){t=p.d.y===D.kk?"Remove shared tree":"Delete tree"
u.push(new C.Jv(t,B.e5,p.gbJm(),m,B.fZ,o))}if(C.tN(p.d,p.a.c))u.push(new C.Jv("Add member",B.vC,new C.dSu(p),m,B.bW,o))
v.push(new A.C(R.ah0,A.A(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.ganL()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cp(new C.dSv(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?K.ZH:Y.My,o,o,o,o,o)
v.push(A.av(A.hd(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dSw(p),o),o,o,o))}return A.c8(o,l,A.bn(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bW8(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fv.j(0.35),B.dk,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.X(B.y4,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a1,!0,m,A.aL(!1,m,!0,A.p(m,D.bOu,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.q,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gaeL(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.eZ3,m,m,m)
r=r.ganL()
p=n.d.ganL()===1?"member":"members"
o=x.p
p=A.a([s,B.bf,A.E(A.v(A.a([q,B.bB,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a5,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tN(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bLE,m,m,m,n.gcmg(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jh:B.mr
r=r?"Private":"Public"
r=A.E(n.au3(q,"Privacy",r,n.a.d.w?n.gcya():m),1)
q=A.E(n.au3(B.yc,"Tree code",n.d.c,new C.dRL(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.A(A.a([r,B.ab,q,B.ab,A.E(n.au3(D.bCK,"Collaborators",p,n.gc_B()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kk){s=B.c.j(0.15)
B.d.v(p,A.a([B.N,A.aG(!1,B.a1,!0,A.m(999),A.aL(!1,A.m(999),!0,new A.C(B.fI,A.A(A.a([A.X(B.oJ,B.c,m,m,m,14),B.eb,A.d("View only",m,m,m,m,m,m,B.aOV,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ag)],o))}return A.p(m,A.bw(u,new A.an(B.W,m,B.aa,B.r,A.a([t,new A.C(B.F3,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bSs,B.n),m,m,m,m,m,m,m,1/0)},
au3(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a1,!0,A.m(14),A.aL(!1,A.m(14),!0,new A.C(L.ai8,A.v(A.a([A.X(d,B.c,w,w,w,18),B.at,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.uv,A.d(f,w,1,B.a2,w,w,w,P.zq,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)}}
C.bds.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gam(r)&&s.c.length===0)return B.bH
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bdv(s,t),new A.at(w,v))],x.p)
r=r.gdK(r)
B.d.v(u,r.dt(r,new C.d5K(this),x.l))
r=s.c
B.d.v(u,new A.K(r,new C.d5L(this),A.U(r).k("K<1,r>")))
return new A.C(B.tA,new A.a7(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.JH.prototype={}
C.Fq.prototype={}
C.bdu.prototype={
gbgT(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aI3.prototype={}
C.bdv.prototype={
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
B.d.b0(a0,new C.d64())
w=f.b
v=w+(B.d.gL(a0).b-w)/2
u=B.d.b5(a0,new C.d65(f))
t=new A.K(a0,new C.d66(f),A.U(a0).k("K<1,N>")).c_(0,new C.d67()).cI(0,1/0,B.uR)
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
C.bha.prototype={
gc5e(){var w=this.c
if(B.a.i(w.y).length!==0)return D.dfk
switch(w.c.a){case 0:return D.cK4
case 1:return D.cV3
case 2:return D.d9T}},
gc5h(){var w=this.c,v=C.hgT(w.w),u=C.hgT(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc5e(),p=t.c,o=I.bBp(p.f),n=t.gc5h(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.aB:B.c,j=A.I(r?B.aB:B.c,B.q,2)
if(o!=null)w=A.t3(B.A,s,B.cm,B.bR,!1,s,o,!1,s,s)
else{w=A.a([B.d.gL(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a3,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hS(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.ax,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.Fj,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.aB:B.c,B.q,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.f7Z,s,s,s),B.f,s,s,new A.o(B.cb,s,w,j,s,s,B.n),s,s,s,s,D.bvg,s,s,s),s,s,s,-6,-4,s))}k=r?B.cE:B.c
j=A.m(8)
w=A.I(B.d.gL(q).j(0.35),B.q,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dE,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cE,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bn,s,s,s,s,s,s,s,s,7.5,s,s,B.a5,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aE(s,new A.a7(84,112,A.v(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.at,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.aYJ,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bvr,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a8)}}
C.bcz.prototype={
a5(d,e){var w,v,u,t,s,r,q
$.W()
w=A.M()
v=this.b
u=v?B.c:D.b9u
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
ar(d){return d.b!==this.b}}
C.buS.prototype={
B(d){var w=this,v=null,u=new C.f8m(w),t=w.c,s=t?B.cE:B.c,r=A.m(12),q=u.$3(B.hy,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bF:B.f9,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.y9,"Zoom out",w.e)
return A.aG(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.f,t?B.bF:B.f9,v,v,v,1,v,v,v,v,v,22),u.$3(B.akt,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dn,v,v,v,B.ag)}}
C.bkw.prototype={
B(d){var w=this,v=null,u=B.bW.j(0.15),t=A.I(B.bW,B.q,2),s=w.e,r=x.p
t=A.aE(v,A.p(v,A.v(A.a([A.X(s?K.ZH:Y.My,B.bW,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.f4m,v,v,v)],r),B.m,v,B.bb,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a8)
u=A.a([t,B.an,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.f2l,B.L,v,v)],r)
if(s){t=A.a([B.an],r)
s=w.d
B.d.v(t,new A.K(s,new C.eKh(w),A.U(s).k("K<1,r>")))
B.d.v(u,t)}return new A.a7(84,v,A.v(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.Zn.prototype={
R(){return new C.aAT()},
bp(){return this.Q.$0()},
gdY(){return this.w}}
C.aAT.prototype={
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
r.y=t==null?D.xK:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hYG(w.r,w.f)
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
P9(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$P9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.h66(p.y,p.w)
w=3
return A.b(A.le(t.a.w,B.HI),$async$P9)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aZ8(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$P9)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hAk(p.y,p.w)
t.a.bp()
case 5:w=7
return A.b(An.Gk(78,800),$async$P9)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dlX(t,q))
case 1:return A.h(u,v)}})
return A.i($async$P9,v)},
c5g(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hV(B.o.u(1000*Date.now()),w,D.xK,null,null,null,"","","","","",1,!1,0)
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
return A.b(A.ca(null,null,!0,null,new C.dlW(r),s,null,!0,!0,x.y),$async$a8Q)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a5(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a8Q,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tC(j),h=l.a.e,g=A.U(h).k("a2<1>"),f=A.B(new A.a2(h,new C.dm5(l),g),g.k("J.E"))
h=j?B.dX:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.btK,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aB,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hp(A.aL(!1,k,!0,new A.C(B.lL,A.X(B.e5,B.ow,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbG0(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.js:B.iQ
t=I.bBp(l.as)
if(l.as==null)s=A.X(B.oB,j?B.bq:B.bn,k,k,k,40)
else s=k
s=A.av(A.aE(k,new A.an(B.W,k,B.aa,B.r,A.a([A.hq(u,t,s,k,42),A.ao(0,A.hq(B.bW,k,D.bFm,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc5d(),k,k,k,k,k,k,!1,B.a8),k,k,k)
t=l.d
t===$&&A.c()
t=C.aAV(t,"Full name",B.mo,1,1,i,B.m_)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.S,new C.bh8(i,u,new C.dm6(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bno],q)
o=l.a.e
B.d.v(p,new A.K(o,new C.dm7(),A.U(o).k("K<1,eT<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bnq],q)
B.d.v(q,new A.K(f,new C.dm9(),A.U(f).k("K<1,eT<n?>>")))
o=A.v(A.a([t,B.an,new C.acB(i,r,"Who is their parent?",p,new C.dma(l),k,o),B.aA,n,B.an,new C.acB(i,m,"Who is their spouse / partner?",q,new C.dmb(l),k,o)],v),B.aj,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aAV(q,"Birth date",D.ajx,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aAV(m,"Birth place",B.ZW,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aAV(n,"Date of death (if deceased)",D.alO,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aAV(p,"Occupation",B.a_Z,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.r,w,k),B.aA,s,B.by,new C.acC(i,"Identity",u,k),B.ac,new C.acC(i,"Family links",o,k),B.ac,new C.acC(i,"Life details",A.v(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aAV(r,"Notes",B.kN,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aAU(i,"Child order",l.ccO(l.at),new C.dmc(l),new C.dmd(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fWQ(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dme(l):k
B.d.v(r,A.a([B.S,new C.aAU(i,"Visible in tree",u,w,new C.dmf(l),k)],v))}r.push(B.S)
w=j?B.js:B.iQ
u=A.m(14)
t=A.I(j?B.dZ:B.bS,B.q,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iE(k,B.bW,k,B.af,k,new C.dmg(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.agA,k,k,k))
r.push(B.by)
w=j?B.aP:B.aB
j=j?B.dZ:B.bS
r.push(A.A(A.a([A.E(A.dT(B.nu,new C.dm8(d),A.dg(k,k,k,k,k,k,k,k,k,w,k,k,B.ck,k,new A.b7(A.m(14),B.Y),new A.ay(j,1,B.q,-1),k,k,k,k)),1),B.bf,A.E(A.bH(D.eHW,l.gc5f(),A.bl(B.aV,k,k,0,B.c,k,B.ck,k,new A.b7(A.m(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.at)
return A.ej(B.h9,k,B.af,h,new A.a7(420,k,A.cd(A.v(r,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),k),D.ahu,k,B.agS,new A.b7(g,B.Y),k,k)},
ccO(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.acC.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.js:B.iQ,s=A.m(16)
return A.v(A.a([new A.C(D.ahT,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.dZ:B.bS,B.q,1),s,w,w,B.n),w,w,w,w,B.bj,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bh9.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dX:B.c,r=A.m(12),q=A.I((t?B.dZ:B.bS).j(0.85),B.q,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aP:B.aB,u,u,u,u,u,u,u,u,14,u,u,B.a5,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.T,!1,u,!0,B.r,u,A.aN(),v.d,u,u,u,u,u,2,A.br(u,B.ey,u,B.vg,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bq:B.bn,u,u,u,u,u,u,u,u,u,u,u,B.cv,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bW,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ai,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.acB.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dX:B.c,s=A.m(12),r=A.I((u?B.dZ:B.bS).j(0.85),B.q,1),q=A.X(B.r_,u?B.bq:B.bn,v,v,v,v),p=A.l(v,v,u?B.aP:B.aB,v,v,v,v,v,v,v,v,14,v,v,B.a5,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dX:B.c
return A.p(v,new A.Dk(A.a3O(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,v,v,v,B.cv,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.ld,v,v,v)}}
C.bh8.prototype={
B(d){var w=new C.dmh(this)
return A.A(A.a([w.$3(D.Zf,"Male",B.Nj),B.ab,w.$3(D.aiL,"Female",B.N4),B.ab,w.$3(D.xK,"Other",B.ne)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aAU.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.js:B.iQ,r=A.m(14),q=A.I(t?B.dZ:B.bS,B.q,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aB,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.E(A.v(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bn,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aH5(u,B.y9,w.f,v),B.bp,new C.aH5(u,B.hy,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ei,v,v,v)}}
C.aH5.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bW.j(0.12)
else w=s.c.a?B.dX:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bW
else t=(s.c.a?B.bq:B.bn).j(0.4)
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
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bn,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.v(A.a([q,B.at,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.aB,p,p,p,p,p,p,p,p,14,p,p,B.P,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.A(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cC,B.xu,p,p,1/0)},
adg(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.js:B.iQ,s=A.m(16),r=A.I(v?B.dZ:B.bS,B.q,1)
return A.v(A.a([new A.C(D.ahT,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hlB(r,q),o=q.c,n=t.bOH(o),m=I.bBp(q.f),l=t.e.a,k=l?B.dX:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.aB,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.kk?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bq:B.bn,s,s,s,s,s,s,s,s,12,s,s,B.a5,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.q,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.hq(u,m,m==null?A.X(B.oB,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.eo,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.q,1)
v=A.av(A.p(s,A.d(t.bOI(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mm,s,s,s),s,s,s)
u=x.p
i=A.a([t.zV("Full name",i,B.mo)],u)
if(p>0)i.push(t.zV("Child order","#"+p,B.Nb))
r=A.a([h,B.at,r,B.aQ,l,B.S,v,B.by,t.adg("Identity",i),B.ac,t.adg("Life details",A.a([t.zV("Birth date",q.w,D.ajx),t.zV("Birth place",q.x,B.ZW),t.zV("Date of death",q.y,D.alO),t.zV("Occupation",q.z,B.a_Z)],u)),B.ac,t.adg("Family links",A.a([t.zV("1. Parent",t.aVW(q.d),B.Fx),t.zV("2. Spouse",t.aVW(q.e),B.N3)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.adg("Notes",A.a([t.zV("Notes",q,B.kN)],u))],u))
r.push(B.by)
r.push(A.bH(B.J1,new C.dmr(d),A.bl(B.aV,s,s,s,s,s,B.ck,s,new A.b7(A.m(14),B.Y),s,s,s)))
return A.eH(s,k,new A.cS(B.ly,A.cd(A.v(r,B.aj,s,B.e,B.Q,0,B.p),B.r,s,B.y,s,B.xz,s,s,B.ah),s),s,s,s,B.F6,B.d0,s,new A.b7(j,B.Y),s)}}
C.Jv.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bq:B.bn
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.xC,A.hp(A.aG(!1,B.a1,!0,A.m(8),A.aL(!1,A.m(8),!0,new A.a7(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ag),u,v.c,u,u),u)}}
C.aoJ.prototype={
eL(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a6().ac())
w=u.c
v=A.U(w).k("K<1,a3<n,@>>")
w=A.B(new A.K(w,new C.c7w(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iY(w,new C.c7x(),t,x.U))
return s}}
C.aoK.prototype={
R(){return new C.aCt(A.a([],x.bF))},
gdd(){return this.c}}
C.aCt.prototype={
a_(){this.a1()
this.Je()},
Je(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Je=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c7A(t.a.c),$async$Je)
case 3:r=e
w=4
return A.b(C.At(t.a.c),$async$Je)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qO(q,new C.dSF(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dSG(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Je,v)},
y6(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.S(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
JX(d,e){return this.cBw(d,e)},
cBw(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$JX=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dSK(q,e))
t=3
w=6
return A.b(d.$0(),$async$JX)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dSL(q))
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
return A.b(t.JX(new C.dSC(t),"Preparing download\u2026"),$async$WY)
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
return A.b(t.JX(new C.dSD(t,d),"Preparing file\u2026"),$async$X1)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X1,v)},
af7(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$af7=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wY.c5().LI(B.Qb,B.tF,!0),$async$af7)
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
o=A.jn(o,0,null)
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
return A.b(u.JX(new C.dSE(u,d),"Restoring family trees\u2026"),$async$XC)
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
return A.b(t.JX(new C.dSJ(t),"Creating QR code\u2026"),$async$a1n)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1n,v)},
a0Z(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0Z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.CC()){t.y6("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).c8(A.e8(new C.dSH(),!0,null,x.N)),$async$a0Z)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.XC(r),$async$a0Z)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0Z,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.Ai:B.iN,m=o?D.af5:B.aP,l=o?B.aK:B.bS,k=o?B.aP:B.aB,j=new C.d68(n,m,l,k,o?B.bJ:B.bn)
l=A.aH(p,p,p,p,A.X(B.eA,k,p,p,p,20),p,p,p,new C.dSN(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eG(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.d5H(!0,B.jj,B.aS,B.aS,q.r?p:q.gcsx(),j,s,"Show restore QR"),1),B.av],u))}s=q.e
r=q.r?p:q.gcoN()
t.push(A.E(C.d5H(!s,B.iW,B.b7,B.bv,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.d5H(!1,B.hA,B.aV,B.bW,q.r?p:q.gbMB(),j,"Photos & books included","Download all trees"),1),B.av],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.d5H(!1,M.yf,B.aH,B.aM,q.r?p:q.gbWZ(),j,s,"Upload backup file"),1))
l=A.a([new C.bdt(v,l,p),B.ku,new C.abT(j,"QR restore",p),B.S,t,B.d5,new C.abT(j,"Backup files",p),B.S,A.A(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.ku,new C.abT(j,"One tree",p),B.S],u)
B.d.v(v,J.b6(q.d,new C.dSO(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cA(l,p,B.Yo,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aV.j(0.35),B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dk,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bn(!0,A.p(p,A.A(A.a([K.aNn,B.bf,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.AZ,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c8(w,n,new A.an(B.W,p,B.aa,B.r,l,p),p,!1,!1,p,p)}}
C.d68.prototype={}
C.bdt.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.k2,28)],x.V)
t=A.ao(p,A.X(B.tX,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.r,A.a([t,new A.C(B.a9,A.A(A.a([A.p(p,D.bO2,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.q,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oc,A.E(A.v(A.a([D.fcR,B.N,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bVD,B.n),p,p,p,p,p,p,p,p)}}
C.abT.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bdr.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aS.j(0.4):m.c
k=A.I(k,B.q,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aS.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.I(t.j(0.35),B.q,1)
return A.aG(!1,B.a1,!0,q,A.aL(!1,o,!0,A.eC(A.dc(new A.C(E.Y3,A.v(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qW,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bB,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cv,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)}}
C.bdw.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.q,1),q=B.aV.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,A.eC(new A.C(B.eP,A.A(A.a([A.p(v,D.bNg,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.q,1),p,v,v,B.n),v,v,v,v,B.qW,v,v,v),B.bf,A.E(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.X(B.hA,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)}}
C.ZI.prototype={
R(){return new C.aCs()},
gdd(){return this.c}}
C.aCs.prototype={
a_(){this.a1()
this.a8m()},
a8m(){var w=0,v=A.j(x.H),u=this,t
var $async$a8m=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b0M(u.a.c,B.CA),$async$a8m)
case 2:t=e
if(u.c!=null)u.m(new C.dSx(u,t))
return A.h(null,v)}})
return A.i($async$a8m,v)},
agv(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$agv=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dSy(q))
t=4
p=A.h7L(q.a.d,B.CA)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.V(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.aqY(n.e,m,l,B.CA,p,n.f),$async$agv)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dSz(q))
q.c.I(x.q).f.S(D.eQi)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.aa(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(B.a.eb(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dSA(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agv,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.j8:B.pw,n=p?B.i8:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eG(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fsm,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.pG(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.v(A.a([B.N,u,B.by,t,B.N,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.bb,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bu,q,q,q,q,q,q,q,q,q,q,q,B.P,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcov()
if(u)u=B.Ix
else u=A.X(r.e===!0?B.hz:B.ajw,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a7(1/0,q,A.ey(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cj,q,q,q),t,A.dg(q,q,q,q,q,q,q,q,q,B.aV,q,B.fN,q,q,q,new A.ay(B.aV.j(0.55),1,B.q,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.hY,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.az:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.S)
w.push(new A.a7(1/0,q,A.bH(B.zw,new C.dSB(d),A.bl(B.aV,q,q,q,q,B.fN,q,q,q,q,q,q)),q))
return A.c8(m,o,new A.C(B.a9,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.ZJ.prototype={
R(){return new C.biD(A.yY(B.xj,B.nB,B.u1))}}
C.biD.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c8(A.eG(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fkB,w,w,w,1,w,!0),B.w,A.yX(this.d,B.bR,new C.dSP(this,d)),w,!1,!1,w,w)}}
C.aXH.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.PG,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lx.prototype={}
C.a5F.prototype={
R(){return new C.bij(null,null)}}
C.bij.prototype={
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
B(d){var w,v,u=this,t=B.d.dL(D.a2C,new C.dDZ(u),new C.dE_())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.ct_(A.c6(new A.h3(A.a([w,v],x.dS)),new C.dE0(u,t),null),!0)}}
C.bii.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b_e(d,e)
break
case"house":p.m0(d,e,D.cZz)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.ged()
$.W()
t=A.M()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ae(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.m5(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.AD(d,e,12)
p.xI(d,e,B.l6,5,14)
break
case"grocery":p.cdx(d,e)
break
case"calculator":p.cde(d,e)
break
case"lumber":p.cdF(d,e)
break
case"kitchen":p.cdA(d,e)
break
case"landscape":p.m0(d,e,D.d_5)
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
p.AD(d,e,8)
p.xI(d,e,B.iT,4,18)
break
case"plumbing":p.cdO(d,e)
break
case"electrical":p.m0(d,e,D.d9b)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.W()
u=A.M()
u.r=B.c.j(q*0.12).gp(0)
d.aZ(new A.a9(0,0,0+e.a,0+e.b),u)
p.m5(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.m5(d,e,B.lD.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.AD(d,e,10)
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
m5(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.ged()/2-h
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
xI(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.ged()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.W()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
AD(d,e,f){var w,v,u,t,s,r,q,p,o,n
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
v.m0(d,e,D.d7W)
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
j.m0(d,e,D.cg5)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.W()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.cXV[B.o.F(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.m5(d,e,B.c.j(0.35),w,16)
j.xI(d,e,B.iT,5,12)},
cde(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m0(d,e,D.cgc)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.ged()
$.W()
q=A.M()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ae(new A.u(t/2,s/2),r*(0.18+u*0.08),q)
p=A.i1(g,g,g,g,g,B.a4,B.cf,g,B.eh,B.cd)
for(o=0;o<6;++o){n=v+o*0.9
r=D.d0C[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saV(0,new A.ep(r,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eI()
p.a5(d,new A.u(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cge[o]
l=B.kb.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saV(0,new A.ep(m,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eI()
p.a5(d,new A.u(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.m5(d,e,B.c.j(0.35),w*1.5,14)
h.m5(d,e,B.ez.j(0.55),-v*3.141592653589793*2,8)
h.m5(d,e,B.Aj.j(0.4),r*2.8,22)
h.xI(d,e,B.pm,8,10)
h.AD(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.W()
r=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cdF(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m0(d,e,A_.ava)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bA(new A.a9(20,q,u,q+10),B.hC)
$.W()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.h2,B.op,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.er(p),n)
n.delete()}m.m5(d,e,B.h2.j(0.35),w,15)
m.AD(d,e,8)},
cdA(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m0(d,e,D.cYp)
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
j.xI(d,e,B.qz,4,14)},
cdO(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m0(d,e,D.cNL)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.W()
n=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xI(d,e,B.ou,6,12)
l.m5(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cdY(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m0(d,e,D.ctx)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bA(new A.a9(q,14,q+u,22),B.ii)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.f7,B.bK,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.er(q),o)
o.delete()}n.m5(d,e,B.c.j(0.3),w,16)
n.AD(d,e,8)
n.xI(d,e,B.uX,5,13)},
cdJ(d,e){var w,v,u,t,s,r,q,p,o
this.m0(d,e,D.cTt)
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
this.m0(d,e,D.cR0)
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
this.m0(d,e,D.cwa)
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
this.m0(d,e,D.dcX)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.bA(new A.a9(r,q,r+28,q+8),B.hC)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.er(q),o)
o.delete()}this.AD(d,e,6)},
cdr(d,e){var w,v,u,t,s,r,q,p,o,n
this.m0(d,e,D.cX3)
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
o.m0(d,e,D.cZo)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cm(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.W()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c0(r),p)
p.delete()}o.xI(d,e,B.qz,5,16)
o.AD(d,e,7)},
ce0(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m0(d,e,D.daB)
w=m.c
v=w*3.141592653589793
m.m5(d,e,B.op.j(0.55),v*3,10)
m.m5(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.W()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.op.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
ce3(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m0(d,e,D.ddt)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bA(new A.a9(p,o,p+36,o+22),B.ii)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.iT,B.lD,q).gp(0)
n=p.H()
s.drawRRect(A.er(o),n)
n.delete()}m.AD(d,e,9)
m.m5(d,e,B.c.j(0.4),w*2.2,12)},
cdk(d,e){var w,v,u,t,s,r,q,p,o,n
this.m0(d,e,D.d3g)
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
this.m0(d,e,D.d_m)
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
this.m5(d,e,B.l6.j(0.45),-t*3.141592653589793*2,11)},
ar(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.arF.prototype={
ZE(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aOY(),$async$ZE)
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
return A.b(C.i5Y(d),$async$af8)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$af8,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.js:B.iQ
w=x.p
v=A.a([C.aPm(!0,B.qr,1/0,B.pL,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c_(new A.bI(B.b0,t,t,new A.C(B.v9,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.P,t,t,!0,t,t,t,t,t,B.aw4,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b0,B.b5,B.x,u,t,t),B.n),B.bd))}v.push(A.ao(8,A.A(A.a([A.E(A.dp(D.bH6,D.f9e,new C.cf5(this,d),A.bl(B.aV,t,t,t,B.c,t,B.jx,t,t,t,t,B.c9)),1),B.ab,A.E(A.ey(D.bPg,D.fnC,this.gc7n(),A.dg(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jx,t,t,D.aXf,t,t,t,B.c9)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fG(1.7777777777777777,A.aG(!1,B.a1,!0,B.qr,new A.an(B.W,t,B.b_,B.r,v,t),B.aq,s,0,t,t,t,t,t,B.ag),t)}}
C.aKp.prototype={
aR(){this.aY()
this.aX()
this.dI()},
q(){var w=this,v=w.b_$
if(v!=null)v.a3(0,w.gdC())
w.b_$=null
w.a2()}}
C.aSh.prototype={}
C.aSg.prototype={}
C.aQi.prototype={}
C.Ym.prototype={
R(){return new C.axJ()}}
C.axJ.prototype={
a_(){var w,v,u=this
u.a1()
u.a.toString
w=new A.bb("",B.b4,B.aN)
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.ar(w,v)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
JO(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.I(x.q).f.S(D.eQN)
return}t=u.c
t.toString
v=u.e
A.a5(t,!1).O(new C.aSh(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.dX:B.c,k=A.m(20),j=A.p(n,D.bOW,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.aB,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.v(A.a([i,B.bB,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bn,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.bf,i,A.aH(n,n,n,n,A.X(B.cB,m?B.bq:B.bn,n,n,n,n),n,n,n,new C.cYF(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bn,n,n,n,n,n,n,n,n,12,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bn,n,n,n,n,n,n,n,n,11,n,n,B.cv,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.h80(new C.cYG(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.aB,n,n,n,n,n,n,n,n,n,n,n,B.a5,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.js:B.iQ
r=A.m(12)
q=A.m(12)
p=m?B.dZ:B.bS
t=A.aM(n,B.T,!0,n,!0,B.r,n,A.aN(),u,n,n,n,n,n,2,A.br(n,new A.b4(4,r,B.dg),n,n,n,n,n,n,!0,new A.b4(4,q,new A.ay(p,1,B.q,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cYH(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,S.IE,n,n,n,n)
u=m?B.aP:B.aB
m=m?B.dZ:B.bS
return A.eH(n,l,new A.cS(B.ly,A.cd(A.v(A.a([j,B.aQ,i,B.at,w,B.N,v,B.aQ,t,B.by,A.A(A.a([A.E(A.dT(B.de,new C.cYI(d),A.dg(n,n,n,n,n,n,n,n,n,u,n,n,B.ck,n,new A.b7(A.m(12),B.Y),new A.ay(m,1,B.q,-1),n,n,n,n)),1),B.av,A.E(A.bH(D.fnR,o.ga1H(),A.bl(B.aV,n,n,n,B.c,n,B.ck,n,new A.b7(A.m(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.r,n,B.y,n,B.B_,n,n,B.ah),n),n,n,n,X.B0,B.d0,n,new A.b7(k,B.Y),n)}}
C.Yl.prototype={
R(){return new C.axI()}}
C.axI.prototype={
a_(){this.a1()
var w=$.aw()
this.d!==$&&A.aP()
this.d=new A.ar(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
JO(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.I(x.q).f.S(D.eOu)
return}v=this.c
v.toString
A.a5(v,!1).O(new C.aSg(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.dX:B.c,n=A.m(20),m=A.p(q,D.bLx,B.f,q,q,new A.o(B.bW.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.v(A.a([l,B.bB,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bn,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.bf,l,A.aH(q,q,q,q,A.X(B.cB,p?B.bq:B.bn,q,q,q,q),q,q,q,new C.cYB(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aV.j(0.25),B.q,1)
u=A.X(B.aji,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.av,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,12,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bC,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.aB,q,q,q,q,q,q,q,q,q,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.js:B.iQ
t=A.m(12)
s=A.m(12)
r=p?B.dZ:B.bS
v=A.aM(q,B.T,!0,q,!0,B.r,q,A.aN(),w,q,q,q,q,q,2,A.br(q,new A.b4(4,t,B.dg),q,q,q,q,q,q,!0,new A.b4(4,s,new A.ay(r,1,B.q,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cYC(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.kv,q,q,q,q)
w=p?B.aP:B.aB
p=p?B.dZ:B.bS
return A.eH(q,o,new A.cS(B.ly,A.cd(A.v(A.a([m,B.aQ,l,B.aA,v,B.by,A.A(A.a([A.E(A.dT(B.de,new C.cYD(d),A.dg(q,q,q,q,q,q,q,q,q,w,q,q,B.ck,q,new A.b7(A.m(12),B.Y),new A.ay(p,1,B.q,-1),q,q,q,q)),1),B.av,A.E(A.bH(D.fux,this.ga1H(),A.bl(B.bW,q,q,q,B.c,q,B.ck,q,new A.b7(A.m(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.B_,q,q,B.ah),q),q,q,q,X.B0,B.d0,q,new A.b7(n,B.Y),q)}}
C.XU.prototype={
R(){return new C.aws()}}
C.aws.prototype={
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
this.m(new C.cwe())},
awG(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.js:B.iQ,s=A.m(14),r=A.m(14)
u=u?B.dZ:B.bS
return A.br(w,new A.b4(4,s,B.dg),w,B.bC,w,w,w,w,!0,new A.b4(4,r,new A.ay(u,1,B.q,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.m(14),B.a9H),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c7o(d,e,f){return this.awG(d,e,f,null)},
JO(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gaik()<=0){s.c.I(x.q).f.S(D.eSE)
return}r=s.c
r.toString
v=s.gJ9()
u=s.gaik()
t=s.gb28()
A.a5(r,!1).O(new C.aQi(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tC(n),l=n?B.dX:B.c,k=A.m(24),j=x.O,i=A.a([B.aV.j(0.22),B.bW.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bF4,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.q,1),h,o,new A.a8(B.a3,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.v(A.a([h,B.bB,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.cv,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.bf,h,A.aH(o,o,o,o,A.X(B.cB,n?B.bq:B.bn,o,o,o,o),o,o,o,new C.cwk(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,o,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.T,!0,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.awG(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Nh),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,S.IE,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.js:B.iQ
t=A.m(14)
s=A.I(n?B.dZ:B.bS,B.q,1)
r=A.aH(o,o,o,o,A.X(B.y9,n?B.aP:B.aB,o,o,o,20),o,o,o,new C.cwl(p),o,o,o,o,o,B.c9)
q=p.e
q===$&&A.c()
q=A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),q,o,o,o,o,o,2,D.bQN,B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dV,o,o,o,1,o,o,!1,"\u2022",o,new C.cwm(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a7(52,o,q,o),A.aH(o,o,o,o,A.X(B.hy,n?B.aP:B.aB,o,o,o,20),o,o,o,new C.cwn(p),o,o,o,o,o,B.c9)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,16,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.av,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),t,o,o,o,o,o,2,p.awG(m,"Amount","0.00",B.hZ),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dV,o,o,o,1,o,o,!1,"\u2022",o,new C.cwo(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.B(new A.K(D.cTV,new C.cwp(p,m),t),t.k("ak.E"))
i=A.a([i,B.by,v,B.aA,h,B.N,s,B.ac,A.bY(B.bz,u,B.br,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.S,A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.c7o(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cwq(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.kv,o,o,o,o)],w))}i.push(B.aQ)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bW.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,11,o,o,B.P,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJ9()===B.k.jY(p.gJ9())?B.k.N(p.gJ9()):p.gJ9()
s=p.gb28()
r=A.Av(p.gaik())
i.push(A.p(o,A.A(A.a([A.E(A.v(A.a([u,B.at,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bCb(p.gJ9()*p.gaik(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a3,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.je,o,o,o))
i.push(B.by)
j=A.m(14)
h=n?B.dZ:B.bS
h=A.dg(o,o,o,o,o,o,o,o,o,o,o,o,B.ck,o,new A.b7(j,B.Y),new A.ay(h,1,B.q,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dT(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aB,o,o,o,o,o,o,o,o,o,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cwr(d),h),1),B.av,A.E(A.dp(D.amR,D.fqB,p.ga1H(),A.bl(B.aV,o,o,0,B.c,o,B.ck,o,new A.b7(A.m(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eH(o,l,new A.cS(W.aa3,A.cd(A.v(i,B.aj,o,B.e,B.Q,0,B.p),B.r,o,B.y,o,Ac.qV,o,o,B.ah),o),o,o,o,B.LY,B.d0,o,new A.b7(k,B.Y),o)}}
C.a0t.prototype={
R(){return new C.buK()}}
C.buK.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.ar(new A.bb(w,B.b4,B.aN),v)},
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
v=A.aM(s,B.T,!0,s,!0,B.r,s,A.aN(),w,s,s,s,s,s,2,A.br(s,new A.b4(4,A.m(12),B.dg),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.f7P(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.am,s,s,s,s)
u=A.E(A.dT(B.de,new C.f7Q(d),s),1)
r=A.bl(B.bW,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eH(s,q,new A.C(B.B_,A.v(A.a([o,B.aA,v,B.aQ,A.A(A.a([u,B.av,A.E(A.bH(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.f7R(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d0,s,new A.b7(p,B.Y),s)}}
C.aaW.prototype={
a4(){return"WorksheetFrameStyle."+this.b}}
C.Fe.prototype={
R(){return new C.buI(null,null)}}
C.buI.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.bnY,null,1,null,v)
w.cH(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bvT()},
gbxj(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bW,B.aZ],x.O)
case 2:return A.a([B.bt,B.aV,B.aZ],x.O)
case 3:return A.a([B.aS,B.cb,B.jP],x.O)
case 4:return A.a([B.hv,B.bW,B.f8],x.O)
case 0:return A.a([B.aV,B.bW,B.aZ],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.ev(A.c6(v,new C.f7N(this,new C.tC(w.ax.a===B.I)),null),null)}}
C.awl.prototype={
R(){return new C.buJ(null,null)}}
C.buJ.prototype={
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
return A.c6(w,new C.f7O(this),null)}}
C.buH.prototype={
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
w=A.wW(u)
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
aQB(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.htx(e.a.a,e,t,t+f*i,!0),r=A.bAy(s.gbL().a.getBounds())
$.W()
w=A.M()
w.b=B.ae
w.c=j
w.d=B.bO
w.f=!0
v=this.f
u=k*this.e
w.saq(new A.a8(B.a3,B.a7,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.GL,null).av(0,r))
d.aO(s,w)},
ar(d){return d.b!==this.b||d.d!==this.d}}
C.aMA.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.aMB.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.tC.prototype={}
C.arE.prototype={
R(){return new C.aDZ()},
gdY(){return this.c}}
C.aDZ.prototype={
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
return A.b(C.bAG(t.c,t.d.a),$async$ag_)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eHr(u,s))
return A.h(null,v)}})
return A.i($async$ag_,v)},
Pz(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Pz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eHi(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.KT(t,s),$async$Pz)
case 2:if(u.c!=null)u.m(new C.eHj(u))
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
return A.b(A.ca(null,null,!0,null,new C.eHp(t,new C.tC(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Q4)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a7V(q),$async$Q4)
case 6:case 5:t.m(new C.eHq(t,r))
w=7
return A.b(t.Pz(),$async$Q4)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Q4,v)},
Vd(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i5J(r),$async$Vd)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eHd(t,new C.qS(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Pz(),$async$Vd)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vd,v)},
ccp(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hlw(t,new C.eHh(u),w,v)},
aa7(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bO(new A.ay(v,2.5,B.q,-1),B.Y,B.Y,new A.ay(B.c.j(d?0.85:0.55),2.5,B.q,-1)),D.aX1,w,w,B.n),w,22,w,w,w,w,w,22)},
a9d(d){return this.bJ9(d)},
bJ9(d){var w=0,v=A.j(x.H),u=this
var $async$a9d=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eHg(u,d))
w=2
return A.b(u.Pz(),$async$a9d)
case 2:return A.h(null,v)}})
return A.i($async$a9d,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.bY:B.iN,d=A.m(8),a0=A.X(Q.ZE,f?B.bq:B.bn,g,g,g,16),a1=x.p
a0=A.aL(!1,d,!0,new A.C(B.Fd,A.A(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bn,g,g,g,g,g,g,g,g,g,g,g,B.a5,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eHs(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b_,B.r,A.a([A.bw(A.m(22),C.aPm(!0,A.m(22),1/0,B.pL,g,d,1/0),B.aq),A.ao(10,A.dp(D.bJC,D.fsQ,h.gb00(),A.bl(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eT,22),new A.ac(-4,B.G,B.bW.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.q,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bw(s,new A.an(B.W,g,B.b_,B.r,A.a([C.aPm(!0,A.m(16),1/0,B.MJ,g,r.c,1/0),A.c_(g,new A.o(g,g,g,g,g,new A.a8(B.b0,B.b5,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bd),A.ao(g,h.aa7(!0),g,g,8,g,8,g),A.ao(g,A.ctK(h.aa7(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.ctK(h.aa7(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.ctK(h.aa7(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dp(D.bFD,D.fmD,h.gb00(),A.bl(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bSd,B.n),g,g,g,g,B.lL,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aB,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b6n,B.nH,B.h4],u):A.a([B.aZ,B.aV,B.bW],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eT,24)],t)
r=A.m(22)
p=A.ao(g,A.X(B.jA,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.q,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h5,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aA,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.an,C.bCb(h.d.gwJ(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.N,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cv,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.hh.j(0.75),B.q,1.6)
t=A.a([new A.ac(0,B.G,B.aS.j(0.28),B.cJ,14)],t)
j=B.aS.j(0.22)
i=A.m(10)
u=A.p(g,A.bw(r,new A.an(B.W,g,B.aa,B.r,A.a([p,new A.C(D.bsx,A.A(A.a([o,B.av,A.aG(!1,B.a1,!0,g,A.aL(!1,n,!0,A.eC(new A.C(Ah.AU,A.v(A.a([A.p(g,D.amq,B.f,g,g,new A.o(j,g,A.I(B.aS.j(0.5),B.q,1),i,g,g,B.n),g,g,g,g,B.co,g,g,g),B.h_,D.fbX],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcco(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ag)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.ax,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fG(1.7777777777777777,d,g),B.aQ,w,B.N,u,B.by,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aB,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b6,A.dp(Ak.a0k,D.f9R,h.gbxM(),A.bl(B.aV,g,g,g,B.c,g,B.ix,g,new A.b7(A.m(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.dX:B.c
v=A.m(14)
u=A.I(f?B.dZ:B.bS,B.q,1)
t=A.X(B.ZZ,f?B.bq:B.bn,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aB,g,g,g,g,g,g,g,g,g,g,g,B.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.S,s,B.an,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bn,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.tD,g,g,1/0))}else B.d.v(d,new A.K(w,new C.eHt(h,new C.tC(f)),A.U(w).k("K<1,r>")))
if(h.e)d.push(new A.C(B.AN,A.av(A.mG(g,f?B.bq:B.bn,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c8(g,e,A.bn(!0,A.v(A.a([new A.C(B.AS,a0,g),A.E(A.cd(A.v(d,B.F,g,B.e,B.j,0,B.p),B.r,g,B.y,g,E.xA,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bBm(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dX:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.aZN,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.X(s?B.hL:B.h8,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bH
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aP:B.aB,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcRA()
v=A.Av(d.d)
B.d.v(t,A.a([B.at,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bq:B.bn,u,u,u,u,u,u,u,u,12,u,u,B.a5,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.bb,B.Q,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bW.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bCb(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a3,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.h6,u,u,u)
w=x.p
return A.p(u,A.bw(n,new A.DJ(A.A(A.a([m,A.E(new A.C(B.agt,A.A(A.a([l,B.bf,t,B.ab,k,A.aH(u,u,u,u,A.X(B.cB,(r?B.bq:B.bn).j(0.75),u,u,u,20),u,u,u,new C.eHe(this,d),u,u,u,u,u,B.c9)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.aj,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.aYF,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.dc,u,u,u,u)}}
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
return A.b(A.bN(Ab.AL,null,x.H),$async$E9)
case 4:s=t.d
w=5
return A.b(C.fEb(!0,o,s),$async$E9)
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
A.hw(d,new C.ary(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.p_(s,!1),$async$ZF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZF,v)},
PA(d){return this.coI(d)},
coI(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).O(null)
w=3
return A.b(A.hw(d,D.aFs,!0,"NgmyWorksheetProjectScan",x.N),$async$PA)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bCc(s),$async$PA)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.S(D.eRN)
w=1
break}q=C.fZ7(r)
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
return A.b(C.bBK(),$async$ZG)
case 3:s=f
if(s==null){w=1
break}r=C.fZ7(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dP(q,x.H),$async$ZG)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$ZG,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tC(u),s=w.d.d.length,r=u?B.dX:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.k2,36)],x.V),o=x.p
return A.bn(!0,new A.C(B.vh,A.p(v,A.v(A.a([w.cr8(d,t,s),new A.C(D.brW,A.v(A.a([w.b32(t,"QR restore"),B.S,A.A(A.a([w.aYZ(t,!0,B.jj,B.aS,B.aS,new C.eHv(w,d),"Show to scan","QR code"),B.av,w.awH(t,B.iW,B.b7,B.bv,new C.eHw(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d5,w.b32(t,"Backup files"),B.S,A.A(A.a([w.awH(t,B.hA,B.aV,B.bW,new C.eHx(w,d),"Full copy","Backup file"),B.av,w.awH(t,M.yf,B.aH,B.aM,new C.eHy(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
cr8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eX,B.d_,B.fv],k):A.a([B.aZ,B.aV,B.bW],k)
w=A.ao(l,A.X(B.tX,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kJ,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.q,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aPm(!0,A.m(13),64,D.bAV,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aPT,l,l,l)
r=C.bCb(r.gwJ(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.q,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.r,A.a([w,new A.C(D.bsj,A.v(A.a([v,A.A(A.a([s,B.eB,A.E(A.v(A.a([u,B.at,t,B.N,A.A(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fK,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.X(B.cB,B.c.j(0.85),l,l,l,l),l,l,l,new C.eHu(d),l,l,l,A.nw(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aNc,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.ax,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b32(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bq:B.bn,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aYZ(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.af5:B.aP
if(e)w=B.aS.j(o?0.45:0.35)
else{w=o?B.dZ:B.bS
w=w.j(o?0.8:1)}w=A.I(w,B.q,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aS.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.q,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qW,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.aB,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aG(!1,B.a1,!0,r,A.aL(!1,q,!0,A.eC(new A.C(E.Y3,A.v(A.a([t,B.ac,u,B.bB,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bq:B.bn,r,r,r,r,r,r,r,r,11,r,r,B.cv,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
awH(d,e,f,g,h,i,j){return this.aYZ(d,!1,e,f,g,h,i,j)}}
C.ary.prototype={
R(){return new C.bk_()}}
C.bk_.prototype={
a_(){this.a1()
this.adT()},
adT(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$adT=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bCd(p.c,p.d),$async$adT)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eH8(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eH9(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adT,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.Ai:B.iN,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eA,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eHa(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zk],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eX,B.d_,B.fv],s):A.a([B.aZ,B.aV,B.bW],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eT,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dq,B.L,h,h)
p=C.bCb(p.gwJ(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.an,A.A(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fK,h,h,h)],u),B.m,h,B.bb,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.ax,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.Yn,h,h,1/0)
t=g?D.bfy:B.c
q=A.m(24)
p=A.I(w?B.aS.j(0.4):B.aV.j(0.3),B.q,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dk,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a6R,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.e4Y)
else{m=A.m(20)
l=A.I(B.aL,B.q,1)
o.push(A.p(h,A.pG(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aQ)
n=w?B.aS:B.aV
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aS:B.aV).j(0.35),B.q,1)
k=w?B.N0:B.Nx
k=A.X(k,w?B.aS:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.av,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a5,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.ix,h,h,h))
return A.c8(h,f,A.bn(!0,A.v(A.a([new A.C(A6.Ma,e,h),A.E(A.cd(A.v(A.a([s,B.aQ,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tC,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.r,h,B.y,h,E.ahE,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.arD.prototype={
R(){return new C.aDY(A.yY(B.Lr,B.nB,B.u1))}}
C.aDY.prototype={
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
s=C.i3E(t)
if(s!=null){this.aLd(s)
return}r=C.hcA(t)
if(r!=null)q=A.cX(r,p,0)
else q=!1
if(q){this.aLd(B.a.i(B.a.b1(r,B.a.cJ(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eG(A.a([A.aH(t,t,t,t,A.X(u.f?B.r0:A2.N6,t,t,t,t,t),t,t,t,new C.eHc(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Ai,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fmw,t,t,t,1,t,!0),q=A.yX(u.d,B.bR,u.gc8d()),p=A.m(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.q,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c8(r,B.w,new A.an(B.W,t,B.b_,B.r,A.a([q,p,A.ao(32,A.p(t,D.flk,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.q,1),v,t,t,B.n),t,t,t,t,B.je,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aIL.prototype={
a4(){return"_WorksheetTab."+this.b}}
C.NH.prototype={
R(){return new C.aE_(D.a8Z,A.a([],x.D))},
bp(){return this.r.$0()},
gdY(){return this.c}}
C.aE_.prototype={
gcyq(){return J.bDm(this.e,0,new C.eHV())},
a_(){this.a1()
$.aV.c2$.push(this)
this.vu()},
q(){$.aV.hE(this)
this.a2()},
iV(d){if(d===B.ft)this.vu()},
vu(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vu=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.CB(q.a.c).cM(0,B.jU),$async$vu)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eHR(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eHS(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vu,v)},
HB(d){return this.bHi(d)},
bHh(){return this.HB(null)},
bHi(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i5L(l,d),$async$HB)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lh(l,r,q,D.d3t,new A.S(Date.now(),0,!1))
w=4
return A.b(C.KT(t.a.c,p),$async$HB)
case 4:o=f
w=5
return A.b(t.vu(),$async$HB)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.S(D.eOY)
w=1
break}n=J.aW(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gU(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.S(D.eQH)
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
return A.b(A.hw(s,new C.arE(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Ed)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.KT(u.a.c,t),$async$Ed)
case 5:case 4:w=6
return A.b(u.vu(),$async$Ed)
case 6:return A.h(null,v)}})
return A.i($async$Ed,v)},
vh(d){return this.bX3(d)},
bX3(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bBK(),$async$vh)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hw(r,D.aFs,!0,"NgmyWorksheetProjectScan",x.N),$async$vh)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bCc(q),$async$vh)
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
break}p=C.fZ7(s)
w=15
return A.b(C.KT(t.a.c,p),$async$vh)
case 15:o=f
w=16
return A.b(t.vu(),$async$vh)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.S(D.eQM)
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
return A.b(A.ca(null,null,!0,null,new C.eHC(d),s,null,!0,!0,x.y),$async$Np)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oB(t.a.c,A.a([],x.D)),$async$Np)
case 6:w=7
return A.b(t.vu(),$async$Np)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.eP2)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Np,v)},
ccn(d){var w=this.c
w.toString
A.bU(B.K,null,new C.eHL(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b3E(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.js
else w=B.c
v=A.m(16)
u=A.I(p?B.dZ:B.bS,B.q,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.aB,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(r,A.v(A.a([s,B.ac,t,B.bB,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bq:B.bn,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vg,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
a_a(d,e){return this.ccb(d,e)},
ccb(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_a=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.K,null,new C.eHG(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a_a)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hlw(r,new C.eHH(t),t.a.c,d)
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
t=A.E(A.v(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bq:B.bn,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aG(!1,B.a1,!0,u,A.aL(!1,u,!0,new A.C(B.AZ,A.A(A.a([s,B.bf,t,A.X(B.ex,w?B.bq:B.bn,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag)},
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
return A.b(C.bAs(t.a.c,d.a),$async$Nr)
case 6:w=7
return A.b(t.vu(),$async$Nr)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Nr,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tC(o),m=o?B.bY:B.iN
if(q.f)o=D.b4l
else{w=q.bAz(n)
v=q.bW9(n)
u=q.gbxG()
if(o)t=B.js
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aQ,new C.Fe(A.p(p,A.A(A.a([q.aAd(N.MI,"Projects",n,D.a8Z),q.aAd(B.vs,"Cashier",n,D.aUt),q.aAd(B.Fx,"Family Tree",n,D.fVv)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.eo,0.95,u,p),B.by],r)
w=q.d
if(w===D.a8Z){w=J.ad(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.aB,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b6,new C.awl(q.gaPn(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aA,q.cj3(n)],r))}else{o=q.a
if(w===D.aUt)u.push(new C.anG(o.c,n,p))
else{w=q.r
u.push(new C.aoM(o.c,o.d,o.e,o.f,new C.eHY(q),new C.eHZ(q),new A.cx(w,x.b4)))}}o=A.cd(A.v(u,B.F,p,B.e,B.j,0,B.p),B.r,p,B.y,p,Ad.M3,p,p,B.ah)}return A.c8(p,m,A.bn(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bAz(d){var w=null,v=A.m(8),u=d.a,t=A.X(Q.ZE,u?B.bq:B.bn,w,w,w,16)
return A.aL(!1,v,!0,new A.C(B.kK,A.A(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bq:B.bn,w,w,w,w,w,w,w,w,14,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eHz(this),w,w,w,w,w,w,w)},
gbxG(){switch(this.d.a){case 0:return D.a8g
case 1:return D.fMf
case 2:return D.a8h}},
bW9(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cx,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.bLn,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bf,D.bwC,A.aG(!1,B.a1,!0,w,A.aL(!1,A.m(12),!0,A.p(w,D.bIW,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eHD(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.m(12)
return new C.Fe(A.p(w,A.v(A.a([new A.C(O.LW,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.d(A.Av(this.gcyq()),w,w,w,w,w,w,D.f6j,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.vf,B.je,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.fMe,w)},
aAd(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aV:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.q,2):A.I(B.K,B.q,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bq:B.bn
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bq:B.bn
return A.E(A.aG(!1,B.a1,!0,u,A.aL(!1,s,!0,A.di(u,A.A(A.a([w,B.eb,new A.dq(1,B.cn,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.bb,B.j,0,u,u),u,u,B.ct,new A.o(r,u,p,q,o,u,B.n),B.iv,u,u,u,B.M6,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eHU(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),1)},
cj3(d){var w,v,u,t,s,r,q=this,p=null
if(J.cl(q.e)){w=d.a
v=w?B.dX:B.c
u=A.m(15)
t=A.p(p,D.bJ0,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eT,28)],x.V),D.bUE,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.aB,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Fe(A.p(p,A.v(A.a([t,B.d5,s,B.N,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bn,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.e1,A.A(A.a([A.E(q.aQX(B.iW,"Scan QR",new C.eHO(q),d),1),B.av,A.E(q.aQX(M.yf,"Upload file",new C.eHP(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aA,A.bH(D.fwn,q.gaPn(),A.bl(B.aV,p,p,p,B.c,B.fN,p,p,new A.b7(A.m(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.btn,1.05,D.a8g,p)}w=J.b6(q.e,new C.eHQ(q,d),x.l)
w=A.B(w,w.$ti.k("ak.E"))
return new C.Fe(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bT,1,D.a8g,p)},
aQX(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aV.j(0.45),B.q,1)
return A.aG(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(w,A.v(A.a([A.X(d,B.aZ,w,w,w,26),B.N,A.d(e,w,w,w,w,w,w,D.f4L,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.agl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)},
cj2(d,e){var w,v,u=null,t=e.a,s=t?B.dX:B.c,r=A.m(14),q=A.I(t?B.dZ:B.bS,B.q,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.ek,10)],x.V),o=A.m(14),n=t?B.bq:B.bn
n=A.bw(B.UT,new A.fG(1.7777777777777777,C.aPm(!0,B.fu,1/0,N.MI,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.aB,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.d(""+d.d.length+" budget items \xb7 "+A.Av(d.gwJ()),u,u,u,u,u,u,D.f2V,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aG(!1,B.a1,!0,u,A.aL(!1,o,!0,A.v(A.a([n,new A.C(B.bC,A.A(A.a([v,A.aH(u,u,u,u,A.X(Ae.Nl,t?B.bq:B.bn,u,u,u,u),u,u,u,new C.eHM(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eHN(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e4,u,u,u,1/0)}}
C.bwv.prototype={}
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
gwJ(){return B.d.cI(this.d,0,new C.cvG())},
ag(){var w=this,v=w.d,u=A.U(v).k("K<1,a3<n,@>>")
v=A.B(new A.K(v,new C.cvF(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
baG(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lh(w.a,w.b,v,u,w.e)},
ban(d){return this.baG(d,null)},
Sg(d){return this.baG(null,d)}}
C.Hg.prototype={
a4(){return"FamilyGender."+this.b}}
C.hV.prototype={
ag(){var w=this
return A.F(["id",w.a,"name",w.b,"gender",C.hhn(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aCT(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hV(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ak2.prototype={
a4(){return"FamilyTreeAccessRole."+this.b}}
C.kA.prototype={
ganL(){var w=this.f
return new A.a2(w,new C.bMQ(),A.U(w).k("a2<1>")).gM(0)},
ag(){var w=this,v=w.f,u=A.U(v).k("K<1,a3<n,@>>")
v=A.B(new A.K(v,new C.bMP(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hX6(w.y)],x.N,x.z)},
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
C.cvH.prototype={
a4(){return"WrapAlignment."+this.b}}
C.cvI.prototype={
a4(){return"WrapCrossAlignment."+this.b}}
C.aG2.prototype={}
C.b7F.prototype={
bx(d){this.a=d.a
this.b=d.b},
cT(d){var w=new C.b7F()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b7E.prototype={
gw3(){return!0},
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
t=w===B.SS
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
s.push(new C.aG2(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aG2(k,j,i))}d=s.length
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
C.buL.prototype={}
var z=a.updateTypes(["az<~>()","R(hV)","R(kA)","~()","R(n8)","a3<n,@>(kA)","H(kA,kA)","n(hV)","kA(a3<@,@>)","R(lh)","R(u4)","n8(a3<@,@>)","u4()","H(lh,lh)","hV(a3<@,@>)","a3<n,@>(hV)","R(qS)","az<~>(lh)","eT<n?>(hV)","H(hV,hV)","n?(hV)","a3<n,@>(n8)","Zn(Y)","n(n)","acD(Y)","r(ob)","H(n8,n8)","hV(hV)","cL(bv<n,Fq>)","cL(JH)","~(hV)","H?(hV)","hV()","ai<hV>()","R(u3)","R(JH)","C(hV)","~(Hg)","R(aec)","r(Hg,n,a0)","YM(Y)","bv<n,ai<a3<n,@>>>(n,ai<n8>)","~(H)","+count,id,name(H,n,n)(kA)","kA(kA)","ZI(Y)","ZJ(Y)","R(lx)","lx()","n(kA)","a0t(Y)","Ym(Y)","Yl(Y)","YK(Y)","YO(Y)","r(qS)","acY(Y)","~(lV)","az<~>([n?])","N(N,lh)","r(lh)","N(N,qS)","a3<n,@>(qS)","qS(a3<@,@>)","Yk(Y)","Sb(Y)","cq(Hf)","lh(a3<@,@>)","u3()","n(lh)","a3<n,@>(lh)","n(S)","H(hV)","kA(a3<n,@>)","XU(Y)"])
C.fwQ.prototype={
$1(d){return d.a+" "+d.b},
$S:120}
C.fwP.prototype={
bjK(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qK(s,d,B.hl,E.EU),$async$$1)
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
$S:272}
C.fwR.prototype={
$1(d){return d.b},
$S:120}
C.fG_.prototype={
$1(d){var w=null
return A.eH(w,B.K,new F.P1(this.a,this.b,w),w,w,0,B.Y4,B.d0,w,w,w)},
$S:47}
C.flV.prototype={
$1(d){return d!=null},
$S:202}
C.flW.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:202}
C.fm0.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:172}
C.fuz.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fa(d,w,w,w,A.h2(w,B.rq,w,w,w,w,w,w,w,B.ds,w,w,10.5,w,B.ej,w,!0,w,w,w,w),w),u=f?B.ej:B.vn
return new A.nH(D.bp1,A.a9c(A.a([new A.fO(130,w,v),new A.yF(1,B.Fq,A.fa(e,w,w,w,A.h2(w,g==null?D.e7f:g,w,w,w,w,w,w,w,B.ds,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.xf,B.lo))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1904}
C.fuy.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vj(999)
f=A.wP(A.ls(h,A.fa("Cashier",h,h,h,A.h2(h,D.z6,h,h,h,h,h,h,h,B.ds,h,h,10,h,B.ej,h,!0,h,h,h,h),h),h,new A.ky(D.e76,h,f,B.hE,h),h,h,D.bpv,h))
w=A.wP(A.fa("Debt receipt",h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.ds,h,h,22,h,B.ej,h,!0,h,h,h,h),h))
v=A.wP(A.fa(C.wA(new A.S(Date.now(),0,!1),!0),h,h,h,D.a6W,h))
u=A.vj(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fa(s,h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.ds,h,h,14,h,B.ej,h,!0,h,h,h,h),h)
r=A.fa("Person who owes",h,h,h,D.a6W,h)
q=A.vj(10)
p=x.C
u=A.ls(h,A.yA(A.a([s,new A.fO(h,2,h),r,new A.fO(h,10,h),A.ls(h,A.yA(A.a([A.fa("Amount owed",h,h,h,D.a6W,h),new A.fO(h,2,h),A.fa(A.Av(t.c),h,h,h,A.h2(h,D.z6,h,h,h,h,h,h,h,B.ds,h,h,20,h,B.ej,h,!0,h,h,h,h),h)],p),B.qO,B.lo),h,new A.ky(B.oX,h,q,B.hE,h),h,h,D.boI,1/0)],p),B.qO,B.lo),h,new A.ky(E.aGI,h,u,B.hE,h),h,h,D.bqv,1/0)
q=new A.nq(D.e79,0.9,B.kB)
r=A.vj(12)
s=i.c
o=s.$2("Original due",C.wA(t.r,!1))
n=s.$2("Current due",C.wA(t.f,!1))
m=i.d
l=new A.nq(m,1.1,B.kB)
k=A.vj(8)
j=i.a
k=A.a([o,n,new A.fO(h,6,h),A.ls(h,A.wP(A.fa(t.gaJJ(),h,h,h,A.h2(h,m,h,h,h,h,h,h,h,B.ds,h,h,11,h,B.ej,h,!0,0.5,h,h,h),h)),h,new A.ky(h,new A.pr(l,l,l,l),k,B.hE,h),h,h,D.bpD,1/0),new A.fO(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.z6))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.z6))
else{n=A.fa("Missed days ("+n+")",h,h,h,A.h2(h,B.rq,h,h,h,h,h,h,h,B.ds,h,h,10.5,h,B.ej,h,!0,h,h,h,h),h)
m=A.U(o).k("K<1,RL>")
o=A.B(new A.K(o,new C.fux(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fO(h,4,h),n,new A.fO(h,6,h),new C.b7E(5,5,new C.b7F(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fO(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fO(h,8,h),w,new A.fO(h,3,h),v,new A.fO(h,16,h),u,new A.fO(h,10,h),A.ls(h,A.yA(k,B.xf,B.lo),h,new A.ky(h,new A.pr(q,q,q,q),r,B.hE,h),h,h,B.agx,1/0)],p)
w=j.a
if(w!=null){v=new A.nq(B.HU,1,B.kB)
B.d.v(f,A.a([new A.fO(h,16,h),A.fa("Debtor signature",h,h,h,A.h2(h,B.rq,h,h,h,h,h,h,h,B.ds,h,h,10,h,B.ej,h,!0,h,h,h,h),h),new A.fO(h,6,h),A.ls(h,new A.Hw(w,B.V2,h,h),h,new A.ky(h,new A.pr(v,v,v,v),A.vj(6),B.hE,h),82,h,B.M8,1/0)],p))}f.push(new A.fO(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fa(w,h,h,h,D.eWS,h))
f.push(new A.fO(h,18,h))
f.push(A.wP(A.fa("NGMY.ORG",h,h,h,A.h2(h,D.z6,h,h,h,h,h,h,h,B.ds,h,h,14,h,B.ej,h,!0,1.8,h,h,h),h)))
return f},
$S:358}
C.fux.prototype={
$1(d){var w=null,v=new A.nq(D.HV,0.7,B.kB),u=A.vj(999)
return A.ls(w,A.fa(C.wA(d,!1),w,w,w,A.h2(w,D.HV,w,w,w,w,w,w,w,B.ds,w,w,9.5,w,B.ej,w,!0,w,w,w,w),w),w,new A.ky(w,new A.pr(v,v,v,v),u,B.hE,w),w,w,D.buL,w)},
$S:1905}
C.c0S.prototype={
$1(d){var w=null,v=B.bI.j(0.08),u=A.m(999),t=A.I(B.bI.j(0.28),B.q,1)
return A.p(w,A.d(C.wA(d,!1),w,w,w,w,w,w,D.f2p,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eF,w,w,w)},
$S:1906}
C.fGv.prototype={
$1(d){var w=null,v=A.aI(d,B.bU,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bMf,w,w,w,new C.fGs(d),w,w,w,w,w,B.c9),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eH(w,B.K,new A.cS(new A.aY(0,380,0,v.a.b*0.9),A.aG(!1,B.a1,!0,u,new A.C(B.XV,A.v(A.a([new A.bI(B.a7,w,w,t,w),new A.dq(1,B.cn,A.cd(A.v(A.a([new A.ev(new C.aXJ(r,w),s),B.S,A.A(A.a([A.E(A.ey(B.yq,D.fsM,new C.fGt(s,r,d),A.dg(w,w,w,w,w,w,w,w,w,B.c,w,w,B.eZ,w,new A.b7(A.m(14),B.Y),new A.ay(q,1,B.q,-1),w,w,w,w)),1),B.ab,A.E(A.dp(B.a0a,D.fpp,new C.fGu(r,d),A.bl(B.aZ,w,w,w,B.c,w,B.eZ,w,new A.b7(A.m(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.r,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.aB,0,w,w,w,w,w,B.ag),w),w,w,0,Ai.Yg,B.d0,w,w,w)},
$S:47}
C.fGs.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fGt.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aV.ak$.x.h(0,t.a)
m=m==null?null:m.gb8()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lW(2.5),$async$$0)
case 4:w=3
return A.b(e.hq(B.fX),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eS(B.dD.gaM(s))
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
C.fGu.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fB9(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.S(A.b2(null,null,null,null,null,B.r,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fGn.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eH(w,B.aB,A.v(A.a([new A.C(D.bqk,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nt,w,w,w),1),A.aH(w,w,w,w,B.lm,w,w,w,new C.fGl(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dq(1,B.cn,new A.C(B.fU,A.bw(A.m(14),A.fL(t,B.A,w,w,B.cm,B.du,!1,w,!1,w,w),B.aq),w),w),new A.C(B.LM,new A.a7(1/0,w,A.dp(B.oM,D.aQj,new C.fGm(t,this.c,d),A.bl(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.LZ,B.d0,w,new A.b7(v,B.Y),w)},
$S:47}
C.fGl.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fGm.prototype={
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
C.fGz.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eH(w,B.aB,new A.C(D.bqs,A.v(A.a([A.A(A.a([D.bvM,A.aH(w,w,w,w,B.lm,w,w,w,new C.fGx(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.N,new A.ev(A.bw(A.m(14),A.p(w,A.b3(w,w,w,new C.b9O(s.ax,w),B.au),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a7(1/0,w,A.dp(B.oM,D.aQj,new C.fGy(t,s,d),A.bl(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(v,B.Y),w)},
$S:47}
C.fGx.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fGy.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aV.ak$.x.h(0,t.a)
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
r=J.eS(B.dD.gaM(s))
w=5
return A.b(A.rN(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fpv.prototype={
$1(d){return d.a===this.a},
$S:264}
C.dER.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dEC.prototype={
biY(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dX:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dEF(s,q,e),p,!0,!0,!1,B.I9,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dEG(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.biY(d,e)},
$S:1907}
C.dEF.prototype={
$1(d){var w,v=null,u=this.c===B.vX,t=u?D.d9p:D.d5F
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.aB,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bn(!0,new A.C(K.ah8,A.v(A.a([u,B.at,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bq:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.ie(!0,v,v,B.y,L.aNu,new C.dEE(this.a,w,t,d),t.length,v,B.dQ,B.ah,!0)],x.p),B.aj,v,B.e,B.Q,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:26}
C.dEE.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.d_.j(0.14)
else w=t.b.a.d.a?B.M:B.aP
v=A.m(14)
if(q)u=B.d_
else u=(t.b.a.d.a?B.bq:B.bn).j(0.16)
u=A.I(u,B.q,q?1.6:1)
return A.aL(!1,p,!0,A.p(B.A,C.aXI(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dED(t.d,r),s,s,s,s,s,s,s)},
$S:180}
C.dED.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.dEG.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dEA.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:96}
C.dEB.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cH(B.ct,e,v)
return new A.cZ(e,!1,A.ik(B.A,A.av(A.aG(!1,B.a1,!0,v,new A.e0(new C.dEz(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ag),v,v,v),v,new A.bf(t,new A.bo(0.96,1,u),u.k("bf<bJ.T>"))),v)},
$S:30}
C.dEz.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bU,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dX:B.c,f=A.m(14),e=A.I((h?B.bq:B.bn).j(0.16),B.q,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aL(!1,v,!0,new A.C(B.eo,A.X(B.cB,i.a.d.a?B.bq:B.bn,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dEk(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aRt("Name")
r=l.a
q=r.d==null?k:new C.dEl(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bm:B.lF
n=A.I(B.d_.j(0.35),B.q,1)
m=r.d
t=A.aM(k,B.T,h,k,!0,B.r,k,A.aN(),w,k,k,k,k,k,2,s.bay(new A.C(B.fy,A.aL(!1,p,!0,A.p(B.A,C.aXI(m==null?"\ud83d\udc64":A.fvn(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.co,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.kv,k,B.a6I,k,k)
v=A.a([v,B.ac,t,B.N,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11.5,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.an,A.A(A.a([A.E(i.aS5("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dEm(r,a0),r.d===B.vX),1),B.ab,A.E(i.aS5("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dEr(r,a0),r.d===B.a3I),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.N,new A.bI(B.a3,k,k,A.hd(D.bKE,D.frb,new C.dEs(r,l.e,a0),A.fv(k,k,k,k,k,k,k,k,k,k,k,B.d_,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c9)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.u7(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.f,k,k,k,k,k,2,i.aRu("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ai,k,k,s,k,k,B.dV,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.am,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.M:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.bq:B.bn).j(0.22),B.q,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wA(r.a,!1)
v.push(A.aG(!1,B.a1,!0,q,A.aL(!1,p,!0,A.p(k,A.A(A.a([A.E(A.v(A.a([t,B.bB,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bHw],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bj,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dEt(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ag))
if(!h)B.d.v(v,A.a([B.N,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.r,k,k,k,k,k,2,i.aRt("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.am,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aB,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aZY(r.b.length!==0,B.mo,new C.dEu(r,i,a0),new C.dEv(r,a0),"Upload from gallery","ID photo"))
v.push(i.aZY(r.c.length!==0,D.bAT,new C.dEw(r,i,d,a0),new C.dEx(r,a0),"Camera or gallery","Selfie"))
v.push(B.N)
t=l.w
v.push(new Ag.a71("Signature (optional)",t,new C.dEy(a0),new C.dEn(a0,t),new C.dEo(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.bq:B.bn
s=(i?B.bq:B.bn).j(0.28)
s=A.E(A.dT(E.aQc,new C.dEp(d),A.dg(k,k,k,k,k,k,k,k,k,t,k,k,B.va,k,new A.b7(A.m(10),B.Y),new A.ay(s,1,B.q,-1),k,k,k,k)),1)
t=A.bl(B.d_,k,k,k,B.c,k,B.va,k,new A.b7(A.m(10),B.Y),k,k,k)
v.push(A.A(A.a([s,B.ab,A.E(A.bH(A.d(h?"Save":"Update",k,k,k,k,k,k,B.uy,k,k,k),new C.dEq(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cd(A.v(v,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.vj,B.je,k,k,360)},
$S:194}
C.dEk.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dEl.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dEm.prototype={
$0(){return this.b.$1(new C.dEj(this.a))},
$S:0}
C.dEj.prototype={
$0(){var w=this.a
w.d=B.vX
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dEr.prototype={
$0(){return this.b.$1(new C.dEi(this.a))},
$S:0}
C.dEi.prototype={
$0(){var w=this.a
w.d=B.a3I
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dEs.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dEt.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wE(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dEh(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEh.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcj(),w.gce(),w.gcu(),0,0,0,0,0)},
$S:0}
C.dEu.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.OY(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dEg(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEg.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dEv.prototype={
$0(){return this.b.$1(new C.dEf(this.a))},
$S:0}
C.dEf.prototype={
$0(){return this.a.b=""},
$S:0}
C.dEw.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dX:B.c
w=3
return A.b(A.bU(q,null,new C.dEd(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.OY(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dEe(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEd.prototype={
$1(d){var w=null
return A.bn(!0,A.v(A.a([A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.amh,w,w,w,w,new C.dE7(d),!1,w,w,w,w,w,w,w,D.fhK,w,w,w),A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.amf,w,w,w,w,new C.dE8(d),!1,w,w,w,w,w,w,w,D.fot,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.af,!0,!0)},
$S:26}
C.dE7.prototype={
$0(){A.a5(this.a,!1).O("camera")
return null},
$S:0}
C.dE8.prototype={
$0(){A.a5(this.a,!1).O("gallery")
return null},
$S:0}
C.dEe.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dEx.prototype={
$0(){return this.b.$1(new C.dEc(this.a))},
$S:0}
C.dEc.prototype={
$0(){return this.a.c=""},
$S:0}
C.dEy.prototype={
$0(){return this.a.$1(new C.dEb())},
$S:0}
C.dEb.prototype={
$0(){},
$S:0}
C.dEn.prototype={
$0(){return this.a.$1(new C.dEa(this.b))},
$S:0}
C.dEa.prototype={
$0(){return B.d.a9(this.a)},
$S:0}
C.dEo.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ah8(u.a,null,null,new C.dE9(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dE9.prototype={
$4(d,e,f,g){this.a.$1(new C.dE6(this.b,d))},
$S:437}
C.dE6.prototype={
$0(){var w=this.a
B.d.a9(w)
B.d.v(w,this.b)},
$S:0}
C.dEp.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dEq.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.S(D.eSD)
return}if(w.a.d==null){w.c.I(x.q).f.S(D.ePz)
return}A.a5(w.c,!1).O(!0)},
$S:0}
C.dEU.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:96}
C.dEV.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dX:B.c,n=A.m(14),m=A.I((p?B.bq:B.bn).j(0.16),B.q,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.aB,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Av(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bq:B.bn,r,r,r,r,r,r,r,r,13,r,r,B.a5,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.yO(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.yO(r).length>0?B.bI:B.d_,r,r,r,r,r,r,r,r,12,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bq:B.bn
t=(q?B.bq:B.bn).j(0.28)
s=x.p
return new A.cZ(e,!1,A.av(A.aG(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.N,v,u,B.aA,A.A(A.a([A.E(A.dT(B.nu,new C.dES(d),A.dg(r,r,r,r,r,r,r,r,r,w,r,r,B.jx,r,new A.b7(A.m(10),B.Y),new A.ay(t,1,B.q,-1),r,r,r,r)),1),B.ab,A.E(A.bH(D.foS,new C.dET(d),A.bl(B.d_,r,r,r,B.c,r,B.jx,r,new A.b7(A.m(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.B1,O.LW,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ag),r,r,r),r)},
$S:30}
C.dES.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dET.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dEO.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dEP(r),p=r.a.d.a,o=p?B.dX:B.c,n=A.m(14),m=A.I((p?B.bq:B.bn).j(0.14),B.q,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.aB,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Av(l.c),s,s,s,s,s,s,D.f3T,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.ix((r.a.d.a?B.bq:B.bn).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.ZZ,"View receipt",new C.dEH(r,d,l))
u=l.x!=null
t=u?B.r5:B.pP
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bqp,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dEI(r,d,l)),q.$3$icon$label$onTap(B.Bi,"Edit",new C.dEJ(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mo,"View / download ID",new C.dEK(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bAS,"View / download selfie",new C.dEL(r,d,l)))
if(l.gaEA())p.push(q.$3$icon$label$onTap(A5.a01,"View / download signature",new C.dEM(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bI,B.e5,"Delete",new C.dEN(r,d,l)))
p.push(B.at)
return A.bn(!0,new A.C(B.vf,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:26}
C.dEP.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.aB
else w=d
return A.aL(!1,v,!0,new A.C(B.eP,A.A(A.a([A.X(e,w,v,v,v,20),B.bf,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1908}
C.dEH.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fGr(w,this.c)},
$S:0}
C.dEI.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.RC(this.c)},
$S:0}
C.dEJ.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.CP(this.c)},
$S:0}
C.dEK.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCA(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dEL.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCA(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dEM.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fGw(w,this.c)},
$S:0}
C.dEN.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.NC(0,this.c)},
$S:0}
C.dEW.prototype={
$1(d){return d.x==null},
$S:264}
C.dEX.prototype={
$1(d){return d.x!=null},
$S:264}
C.dEY.prototype={
$2(d,e){return d+e.c},
$S:1909}
C.dEZ.prototype={
$0(){return this.a.bya()},
$S:0}
C.dEQ.prototype={
$0(){return this.a.ae5(this.b)},
$S:0}
C.fq3.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fq4.prototype={
$0(){return B.d.gL(D.a1d)},
$S:z+68}
C.d4G.prototype={
$0(){var w=this.a
return w.m(new C.d4E(w,this.b))},
$S:0}
C.d4E.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d4F.prototype={
$0(){},
$S:0}
C.d4H.prototype={
$0(){var w=this.a.gbWS()
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.fs7.prototype={
$1(d){return C.h2a(A.a1(d,x.N,x.z))},
$S:z+11}
C.fs8.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fs9.prototype={
$2(d,e){var w=A.c7(d.a,null),v=A.c7(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+26}
C.fF5.prototype={
$1(d){return d.ag()},
$S:z+21}
C.fNc.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fpm.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bML.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f0(e,v)?v:null},
$S:1910}
C.fFE.prototype={
$1(d){var w=this
return new C.YM(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d5l.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d5k(w,d))},
$S:z+66}
C.d5k.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d59.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cy(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d56.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d4I.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d4J.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d5a.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d4R.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.dX:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ej(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.d4P(d),w,w),A.bH(B.wg,new C.d4Q(d),A.bl(B.mS,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.d4P.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d4Q.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d4S.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d57.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d58.prototype={
$0(){return B.d.gL(D.yA)},
$S:z+12}
C.d4N.prototype={
$1(d){var w=this.a,v=w.y,u=w.gy5(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Sb(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d4O.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d4T.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Yk(v,u,J.ad(w.d),null)},
$S:z+64}
C.d4U.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5j.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aE(s,new C.Y2(r.y,r.gy5(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d5h(r),s,s,s,s,s,s,!1,B.a8)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b9c(v,e,w,u,t,r.gbO5(),C.hhm(r.y.Q),r.gy5(0),s)
w=t}return A.c6(q,new C.d5i(r,e),new A.C(B.Y9,w,s))},
$S:1911}
C.d5i.prototype={
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
C.d5h.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFF(B.pC,B.iw)},
$S:0}
C.d53.prototype={
$0(){var w=this.a
return w.m(new C.d52(w))},
$S:0}
C.d52.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d54.prototype={
$0(){var w=this.a.c
w.toString
A.a5(w,!1).O(null)
return null},
$S:0}
C.d4K.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jO.j(0.5),r=x.p,q=A.a([D.fgn,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cl(p.d)?"Write this book":"Write a new book"
q.push(p.Yl(d,B.dW,w,J.cl(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Yl(d,L.ak6,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cy(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cC,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kd.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cC,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kd.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Yl(d,A0.alh,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Yl(d,B.pV,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Yl(d,B.pV,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eH(u,E.At,A.bn(!0,new A.C(A4.AX,A.v(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.ahy,B.d0,u,new A.b7(t,new A.ay(s,1.4,B.q,-1)),u)},
$S:47}
C.d55.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.d4X.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cy(w.d)
return new C.YO(v,J.cy(w.d),w.r+1,null)},
$S:z+54}
C.d4Y.prototype={
$1(d){var w=null
return A.oh(!1,A.ej(w,w,w,E.At,new A.kf(this.a,new C.d4W(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:341}
C.d4W.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a6o,B.oc,A.E(A.d(e,w,w,w,w,w,w,B.iG,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:747}
C.d4Z.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d5_.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:188}
C.d50.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d51.prototype={
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
case 3:if(s.c!=null)s.m(new C.d4V(s,t))
w=4
return A.b(s.kQ(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d4V.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5c.prototype={
$1(d){var w=null
return A.oh(!1,A.ej(w,w,w,E.At,new A.kf(this.a,new C.d5b(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:341}
C.d5b.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a6o,B.oc,A.E(A.d(e,w,w,w,w,w,w,B.iG,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:747}
C.d5d.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d5e.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:188}
C.d5f.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:188}
C.d5g.prototype={
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
C.d4L.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bg2(B.pC,V.LA)},
$S:0}
C.d4M.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFF(B.pC,V.LA)},
$S:0}
C.d75.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d76.prototype={
$1(d){var w=this.a
return w.m(new C.d74(w))},
$S:9}
C.d74.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d77.prototype={
$1(d){var w=this.a
return w.m(new C.d73(w))},
$S:9}
C.d73.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d78.prototype={
$1(d){var w=this.a
return w.m(new C.d72(w))},
$S:9}
C.d72.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d79.prototype={
$0(){var w=this.a
return w.m(new C.d71(w,this.b))},
$S:0}
C.d71.prototype={
$0(){var w=this.b
this.a.d.saV(0,w)
return w},
$S:0}
C.d7a.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga1_()
A.a5(this.b,!1).O(new A.bnO(w,v))},
$S:0}
C.d5A.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d5z.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.YK(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d5E.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d5D.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b6f(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hD,v,v,v)
return A.ej(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.d5B(d),v,v),A.bH(B.wg,new C.d5C(d),A.bl(B.mS,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.At,w,v,v,v,v,D.ffg,v)},
$S:19}
C.d5B.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d5C.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d5F.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d5G.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.cd(A.bY(B.bz,r,B.br,18,14),B.r,t,B.y,t,D.brj,t,t,B.ah)},
$S:339}
C.d5y.prototype={
$0(){return this.a.PE(0,this.b)},
$S:0}
C.d5x.prototype={
$0(){return this.a.P8(0,this.b)},
$S:0}
C.cEr.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cEs.prototype={
$0(){return B.d.gL(D.yA)},
$S:z+12}
C.cEt.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bZ(0,new A.C(d,A.c_(w,new A.o(w,w,A.I(this.a.j(f),B.q,g),v,w,w,B.n),B.bd),w),0,0,0)},
$S:1913}
C.cXT.prototype={
$1(d){return this.a.m(new C.cXS(this.b,this.c))},
$S:9}
C.cXS.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cYh.prototype={
$1(d){return this.a.m(new C.cY4())},
$S:2}
C.cY4.prototype={
$0(){},
$S:0}
C.cYi.prototype={
$1(d){return this.a.m(new C.cY3())},
$S:2}
C.cY3.prototype={
$0(){},
$S:0}
C.cYj.prototype={
$0(){var w=this.a
return w.m(new C.cY2(w,this.b))},
$S:0}
C.cY2.prototype={
$0(){var w=this.a
return w.d=w.go0().Fo(this.b.a)},
$S:0}
C.cYk.prototype={
$0(){var w=this.a
return w.m(new C.cY1(w,this.b))},
$S:0}
C.cY1.prototype={
$0(){var w=this.a
return w.d=w.go0().cF4(this.b)},
$S:0}
C.cYl.prototype={
$1(d){return this.a.m(new C.cY0())},
$S:2}
C.cY0.prototype={
$0(){},
$S:0}
C.cYm.prototype={
$0(){var w=this.a
return w.m(new C.cY_(w,this.b))},
$S:0}
C.cY_.prototype={
$0(){var w=this.a
return w.d=w.go0().cF9(this.b.a)},
$S:0}
C.cYn.prototype={
$1(d){var w=this.a
return w.m(new C.cYc(w,d))},
$S:6}
C.cYc.prototype={
$0(){var w=this.a
return w.d=w.go0().cG3(this.b)},
$S:0}
C.cYo.prototype={
$1(d){var w=this.a
return w.d=w.go0().aCN(d)},
$S:2}
C.cYp.prototype={
$1(d){var w=this.a
return w.d=w.go0().cFc(d)},
$S:2}
C.cYr.prototype={
$1(d){var w=this.a
return w.d=w.go0().cG1(d)},
$S:2}
C.cYs.prototype={
$1(d){var w=this.a
return w.m(new C.cYb(w,d))},
$S:9}
C.cYb.prototype={
$0(){var w=this.a
return w.d=w.go0().cFT(this.b)},
$S:0}
C.cYt.prototype={
$0(){var w=this.a,v=w.go0(),u=B.a.i(w.gy5(0).a.a),t=B.a.i(w.gaA1().a.a)
u=v.baP(B.a.i(w.gapR().a.a),t,u)
A.a5(this.b,!1).O(u)
return null},
$S:0}
C.dSS.prototype={
$0(){var w=this.a
w.vG()
w.a.bp()
w.a.pO()},
$S:0}
C.dSR.prototype={
$0(){var w=this.a
w.vG()
w.a.bp()
w.a.pO()},
$S:0}
C.dSU.prototype={
$0(){var w=this,v=w.b
if(J.cy(v)||J.cl(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dSV.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSW.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dSQ.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dST.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dSY.prototype={
$0(){this.a.O7()
return null},
$S:0}
C.dSX.prototype={
$0(){return this.a.Ee(this.b)},
$S:0}
C.dSi.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.de,w,w,!0,w,w,new C.dSg(d),w,w),r=A.bl(B.bW,w,w,w,w,w,w,w,w,w,w,w)
return A.ej(A.a([s,A.bH(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dSh(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.dSg.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dSh.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dSj.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cFy(this.b)},
$S:0}
C.dSd.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aRJ(w.b,w.c,w.d)},
$S:8}
C.dRM.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dRN.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dS0.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Gb(t.a.c),$async$$0)
case 2:s=r.r8(q.dH(e,new C.dRZ(t)))
if(s!=null&&t.c!=null)t.m(new C.dS_(t,s))
t.a.bp()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRZ.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dS_.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dS1.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dS2.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSc.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cGl(C.hhw(w),w)},
$S:0}
C.dSa.prototype={
$1(d){return new A.e0(new C.dS9(this.a,this.b),null)},
$S:21}
C.dS9.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dX:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.alV,v,v,v,p>0?new C.dS5(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aQ,A.A(A.a([o,A.E(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.amu,v,v,v,new C.dS6(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.ej(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dS7(d),v,v),A.bH(B.p9,new C.dS8(d),A.bl(B.bW,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:165}
C.dS5.prototype={
$0(){return this.b.$1(new C.dS4(this.a))},
$S:0}
C.dS4.prototype={
$0(){return--this.a.a},
$S:0}
C.dS6.prototype={
$0(){return this.b.$1(new C.dS3(this.a))},
$S:0}
C.dS3.prototype={
$0(){return++this.a.a},
$S:0}
C.dS7.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dS8.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dSb.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cG8(this.a.a)
w.r.a9(0)},
$S:0}
C.dRA.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ahg(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hbe(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dRB.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aCK(w)},
$S:0}
C.dSl.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.acD(this.b,w,this.c,null)},
$S:z+24}
C.dSf.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dX:B.c,t=A.m(20),s=A.X(B.li,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.Q,0,B.p)
return A.ej(A.a([A.bH(D.fpZ,new C.dSe(d),A.bl(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.bb,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:19}
C.dSe.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dRC.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dRD.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dRE.prototype={
$1(d){return d.a},
$S:z+7}
C.dRF.prototype={
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
C.dRJ.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ahg(q)
w=A.U(q).k("a2<1>")
q=A.B(new A.a2(q,new C.dRH(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hbe(v.e,null,r,v.f,v.r,new C.dRI(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dRI.prototype={
$0(){return this.a.a9e(this.b)},
$S:0}
C.dRH.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dRK.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("K<1,hV>")
w=A.B(new A.K(w,new C.dRG(this.b),v),v.k("ak.E"))
u.d=t.aCK(w)},
$S:0}
C.dRG.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dSk.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dRW.prototype={
$1(d){return d.length!==0},
$S:3}
C.dRX.prototype={
$1(d){var w=this
return new A.e0(new C.dRV(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dRV.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dX:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.K(o,new C.dRR(u,e,o),A.U(o).k("K<1,r>")))
p.push(B.N)
u=w.d
p.push(A.aM(v,B.T,!1,v,!0,B.r,v,A.aN(),u,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(12),B.dg),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ai,v,v,v,v,v,B.m0,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.am,v,v,v,v))
p=A.v(p,B.aj,v,B.e,B.Q,0,B.p)
t=w.a
return A.ej(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dRS(d),v,v),A.bH(B.J3,new C.dRT(t,u,o,e),A.bl(B.bW,v,v,v,v,v,v,v,v,v,v,v)),A.bH(D.fdr,new C.dRU(t,u,o,d),A.bl(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:165}
C.dRR.prototype={
$1(d){var w=null
return A.dL(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bOa,w,w,w,new C.dRQ(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1914}
C.dRQ.prototype={
$0(){return this.a.$1(new C.dRO(this.b,this.c))},
$S:0}
C.dRO.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dRS.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dRT.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dRP(w.c,u))
v.bO(0,B.c5)}},
$S:0}
C.dRP.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dRU.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a5(w.d,!1).O(!0)},
$S:0}
C.dRY.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cGN(this.b,D.tE,C.G9(v,w.a.c))},
$S:0}
C.dSs.prototype={
$1(d){return d.as},
$S:z+1}
C.dSt.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iM(this.b,w)},
$S:0}
C.dSu.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.i5s(v)
return w.Vj(v==null?null:v.a)},
$S:0}
C.dSv.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hIP(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gco(k)){k=A.aQ(1/0,e.a,e.b)
s=A.aQ(1/0,e.c,e.d)
l.coS(new A.at(u,t),v.gbgT(),new A.at(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cMh:D.cKK
q=A.I(s?B.dp:D.b9M,B.q,1)
p=A.m(22)
o=A.bZ(0,A.b3(m,m,m,new C.bcz(s,m),B.au),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bw(p,new A.an(B.W,m,B.aa,B.r,A.a([o,A.bZ(0,A.ug(new A.Q(n,n,n,n),new A.a7(u,t,new C.bds(l.d,v,l.f,w,new C.dSo(l),l.gc8T(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.buS(s,new C.dSp(l,e),new C.dSq(l,e),new C.dSr(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.b0,B.b5,B.x,r,m,m),B.n),m,m,m,R.agB,m,m,m,m)},
$S:234}
C.dSo.prototype={
$1(d){var w=this.a
w.m(new C.dSm(w,d))},
$S:2}
C.dSm.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.J(0,v)},
$S:0}
C.dSp.prototype={
$0(){var w=this.b
return this.a.b8u(1.25,new A.at(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dSq.prototype={
$0(){var w=this.b
return this.a.b8u(0.8,new A.at(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dSr.prototype={
$0(){var w=this,v=w.b
return w.a.aRJ(new A.at(A.aQ(1/0,v.a,v.b),A.aQ(1/0,v.c,v.d)),new A.at(w.c,w.d),w.e.gbgT())},
$S:0}
C.dSw.prototype={
$0(){var w=this.a
return w.m(new C.dSn(w))},
$S:0}
C.dSn.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dRL.prototype={
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
C.d5K.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bha(u,C.hlB(v.c,u),new C.d5J(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d5J.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d5L.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bkw(d.d,d.c,u.f.t(0,d.a),new C.d5I(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d5I.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fq7.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.r8(new A.cR(new A.a2(v,new C.fq8(d),w.k("a2<1>")),new C.fq9(),w.k("cR<1,n>")))},
$S:z+20}
C.fq8.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fq9.prototype={
$1(d){return d.a},
$S:z+7}
C.fq5.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fq6.prototype={
$1(d){return d.b},
$S:z+7}
C.fqc.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.r8(new A.cR(new A.a2(v,new C.fqd(d),w.k("a2<1>")),new C.fqe(),w.k("cR<1,n>")))},
$S:z+20}
C.fqd.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fqe.prototype={
$1(d){return d.a},
$S:z+7}
C.fqa.prototype={
$1(d){var w,v=A.et([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ai(0,w)&&v.J(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fqb.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d5N.prototype={
$0(){return this.a},
$S:z+32}
C.d63.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ai(0,d)},
$S:243}
C.d5W.prototype={
$2(d,e){var w=this.a.cg(0,d,new C.d5X()),v=J.a6(w)
if(!v.t(w,e))v.J(w,e)},
$S:117}
C.d5X.prototype={
$0(){return A.a([],x.s)},
$S:748}
C.d5V.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f0(w,e)
return w===!0},
$S:284}
C.d5O.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d5U.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d5T.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.J(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aW(v==null?D.C_:v)
u=1
while(v.C())u+=s.$2(v.gU(v).a,e)
v=s.b.h(0,d)
v=J.aW(v==null?B.T:v)
while(v.C()){t=v.gU(v)
if(e.t(0,t))continue
e.J(0,t)
t=w.h(0,t)
t=J.aW(t==null?D.C_:t)
while(t.C())u+=s.$2(t.gU(t).a,e)}return u},
$S:1916}
C.d5P.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d5Y.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.J(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aW(u==null?B.T:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gU(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.J(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aW(t==null?D.C_:t)
while(t.C()){r=t.gU(t)
if(r.a!==a9&&!B.d.b5(w,new C.d5Z(r)))w.push(r)}}B.d.bn(w,new C.d6_(a8))
B.d.b0(w,new C.d60())
q=C.hIO(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.euu],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bny(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1917}
C.d5Z.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d6_.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d60.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.d61.prototype={
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
$S:694}
C.d62.prototype={
$1(d){return 16+d*156},
$S:254}
C.d5M.prototype={
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
t=J.aW(t==null?B.T:t)
s=o.w
while(t.C()){r=t.gU(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.JH(d,new A.u(e+t,w),s,s.length))}},
$S:188}
C.d5Q.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aI3(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:117}
C.d5R.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d5S.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:749}
C.d64.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:749}
C.d65.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:460}
C.d66.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:196}
C.d67.prototype={
$1(d){return d>=0.5},
$S:122}
C.f8m.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hp(A.aL(!1,v,!0,new A.a7(38,38,A.X(d,this.a.c?B.c:B.cE,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1919}
C.eKh.prototype={
$1(d){var w=null,v=A.m(8),u=B.bW.j(0.12),t=A.m(8)
return new A.C(B.n6,A.aL(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.f_C,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.M7,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eKg(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eKg.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dlX.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dlW.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nr,B.L,w,w)
return A.ej(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.dlU(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.md,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dlV(d),w,w)],x.p),B.bb,B.AQ,w,u,D.bsz,w,D.buv,new A.b7(v,B.Y),w,w)},
$S:19}
C.dlU.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dlV.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dm5.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dm6.prototype={
$1(d){var w=this.a
return w.m(new C.dm4(w,d))},
$S:z+37}
C.dm4.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dm7.prototype={
$1(d){var w=null
return A.qd(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dma.prototype={
$1(d){var w=this.a
return w.m(new C.dm3(w,d))},
$S:34}
C.dm3.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dm9.prototype={
$1(d){var w=null
return A.qd(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dmb.prototype={
$1(d){var w=this.a
return w.m(new C.dm2(w,d))},
$S:34}
C.dm2.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dmc.prototype={
$0(){var w=this.a
return w.m(new C.dm1(w))},
$S:0}
C.dm1.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dmd.prototype={
$0(){var w=this.a
return w.m(new C.dm0(w))},
$S:0}
C.dm0.prototype={
$0(){return++this.a.at},
$S:0}
C.dme.prototype={
$0(){var w=this.a
return w.m(new C.dm_(w))},
$S:0}
C.dm_.prototype={
$0(){return--this.a.ax},
$S:0}
C.dmf.prototype={
$0(){var w=this.a
return w.m(new C.dlZ(w))},
$S:0}
C.dlZ.prototype={
$0(){return++this.a.ax},
$S:0}
C.dmg.prototype={
$1(d){var w=this.a
return w.m(new C.dlY(w,d))},
$S:9}
C.dlY.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dm8.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dmh.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bW.j(0.18)
else w=q.c.a?B.dX:B.c
v=A.m(12)
if(p)u=B.bW
else u=(q.c.a?B.dZ:B.bS).j(0.85)
u=A.I(u,B.q,p?1.5:1)
if(p)t=B.bW
else t=q.c.a?B.bq:B.bn
t=A.X(f,t,r,r,r,18)
if(p)s=B.bW
else s=q.c.a?B.bq:B.bn
return A.E(A.aG(!1,B.a1,!0,r,A.aL(!1,o,!0,A.di(r,A.v(A.a([t,B.at,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bc,new A.o(w,r,u,v,r,r,B.n),B.eE,r,r,r,B.jx,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dmi(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
$S:z+39}
C.dmi.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dmr.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.c7p.prototype={
$2(d,e){return new A.bv(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:91}
C.c7w.prototype={
$1(d){return d.ag()},
$S:z+5}
C.c7x.prototype={
$2(d,e){var w=J.b6(e,new C.c7v(),x.a)
w=A.B(w,w.$ti.k("ak.E"))
return new A.bv(d,w,x.d2)},
$S:z+41}
C.c7v.prototype={
$1(d){return d.ag()},
$S:z+21}
C.c7r.prototype={
$1(d){return C.ak3(A.a1(d,x.N,x.z))},
$S:z+8}
C.c7s.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c7t.prototype={
$1(d){return C.h2a(A.a1(d,x.N,x.z))},
$S:z+11}
C.c7u.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c7B.prototype={
$1(d){return new A.aF8(d.f.length,d.a,d.b)},
$S:z+43}
C.c7C.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:642}
C.c7y.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c7z.prototype={
$1(d){return d.cFL(C.G9(d,this.a))},
$S:z+44}
C.dSF.prototype={
$1(d){return C.tN(d,this.a.a.c)},
$S:z+2}
C.dSG.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dSK.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dSL.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dSC.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZb(r.d,q,r.e,r.f),$async$$0)
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
C.dSD.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZb(r.d,q,r.e,t.b),$async$$0)
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
C.dSE.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Ux(n.d,m,n.e,r.b),$async$$0)
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
break}o.y6(B.a.eb(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dSJ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZa(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.y6("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a5(r,!1).c8(A.e8(new C.dSI(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.p_(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSI.prototype={
$1(d){var w=this.b
return new C.ZI(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dSH.prototype={
$1(d){return D.fQg},
$S:z+46}
C.dSN.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dSO.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dSM(w,d)
return new A.C(B.dc,new C.bdw(this.b,d.c,d.a,w,null),null)},
$S:1920}
C.dSM.prototype={
$0(){return this.a.X1(this.b.b)},
$S:0}
C.dSx.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dSy.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dSz.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dSA.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dSB.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dSP.prototype={
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
$S:195}
C.dDZ.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dE_.prototype={
$0(){return B.d.gL(D.a2C)},
$S:z+48}
C.dE0.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.X(this.b.d,B.c.j(0.95),w,w,D.cSq,44),w,w,w),w,w,new C.bii(u,t,v,w),B.au)},
$S:68}
C.fG6.prototype={
$1(d){return A.oL(new C.fG5(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:131}
C.fG5.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dX:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rp,24)],x.V),o=r?B.dZ:B.bS
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bW.j(0.18)],x.O)
w=A.p(t,D.bIL,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a8(B.a3,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.aB,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.S,o,new A.C(E.ahC,A.A(A.a([w,B.bf,A.E(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bq:B.bn,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.E(A.ie(!0,t,e,B.y,D.eNM,new C.fG4(this.b,s),20,B.ahc,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kA,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:111}
C.fG4.prototype={
$2(d,e){var w=null,v=D.a2C[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.dZ:B.bS,B.q,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.ek,8)],x.V),p=A.m(15),o=A.E(new C.a5F(v.a,!0,w),1),n=s?B.js:B.iQ,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aP:B.aB,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a1,!0,w,A.aL(!1,u,!0,A.eC(A.bw(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bq:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.le,w,w,w)],l),B.aj,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fG3(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)},
$S:76}
C.fG3.prototype={
$0(){A.a5(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cf5.prototype={
$0(){return this.a.af8(this.b)},
$S:0}
C.fFt.prototype={
$1(d){return D.fMw},
$S:z+74}
C.fMY.prototype={
$1(d){var w=this
return new C.a0t(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fFy.prototype={
$1(d){return new C.Ym(this.a,null)},
$S:z+51}
C.fFx.prototype={
$1(d){return D.fNv},
$S:z+52}
C.cYF.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cYG.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cYE(w,d))},
$S:34}
C.cYE.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cYH.prototype={
$1(d){return this.a.JO()},
$S:2}
C.cYI.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cYB.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cYC.prototype={
$1(d){return this.a.JO()},
$S:2}
C.cYD.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cwe.prototype={
$0(){},
$S:0}
C.cwk.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cwl.prototype={
$0(){return this.a.aNc(-1)},
$S:0}
C.cwm.prototype={
$1(d){return this.a.m(new C.cwj())},
$S:2}
C.cwj.prototype={
$0(){},
$S:0}
C.cwn.prototype={
$0(){return this.a.aNc(1)},
$S:0}
C.cwo.prototype={
$1(d){return this.a.m(new C.cwi())},
$S:2}
C.cwi.prototype={
$0(){},
$S:0}
C.cwp.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.dZ:B.bS
return A.u6(u,u,B.aZ,r,u,new C.cwh(t,d),B.B2,s,w,u,new A.ay(v,1,B.q,-1),B.c9)},
$S:1921}
C.cwh.prototype={
$1(d){var w=this.a
return w.m(new C.cwf(w,this.b))},
$S:9}
C.cwf.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cwq.prototype={
$1(d){return this.a.m(new C.cwg())},
$S:2}
C.cwg.prototype={
$0(){},
$S:0}
C.cwr.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.f7P.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a5(this.b,!1).O(w)},
$S:2}
C.f7Q.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.f7R.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a5(this.b,!1).O(w)},
$S:0}
C.f7N.prototype={
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
return A.b3(new A.C(D.buu,new A.ev(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.buH(p,v,this.b.a,u,t,r),r,r,B.au)},
$S:68}
C.f7O.prototype={
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
return A.aG(!1,B.a1,!0,p,A.aL(!1,v,!0,A.eC(D.e58,r,new A.o(r,r,A.I(B.c.j(0.4),B.q,1.5),u,r,new A.a8(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
$S:142}
C.fEa.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.eHr.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eHi.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eHj.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eHp.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e0(new C.eHo(w,this.b),null)},
$S:21}
C.eHo.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dX:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aB,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eH(w,u,new A.C(B.ahw,A.v(A.a([s,B.an,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.h80(new C.eHl(r,e),r.a),B.aA,A.A(A.a([A.E(A.dT(B.de,new C.eHm(d),w),1),B.av,A.E(A.bH(B.TA,new C.eHn(r,d),A.bl(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.aj,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(t,B.Y),w)},
$S:98}
C.eHl.prototype={
$1(d){return this.b.$1(new C.eHk(this.a,d))},
$S:34}
C.eHk.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eHm.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eHn.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.eHq.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Sg(this.b)},
$S:0}
C.eHd.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.ban(w)},
$S:0}
C.eHh.prototype={
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
C.eHg.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("a2<1>")
w=A.B(new A.a2(w,new C.eHf(this.b),v),v.k("J.E"))
u.d=t.ban(w)},
$S:0}
C.eHf.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eHs.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iM(this.b,w)},
$S:0}
C.eHt.prototype={
$1(d){return this.a.bBm(d,this.b)},
$S:z+55}
C.eHe.prototype={
$0(){return this.a.a9d(this.b)},
$S:0}
C.fMO.prototype={
$1(d){return new C.acY(this.a,this.b,this.c,null)},
$S:z+56}
C.eHv.prototype={
$0(){return this.a.ZF(this.b)},
$S:0}
C.eHw.prototype={
$0(){return this.a.PA(this.b)},
$S:0}
C.eHx.prototype={
$0(){return this.a.E9(this.b)},
$S:0}
C.eHy.prototype={
$0(){return this.a.ZG(this.b)},
$S:0}
C.eHu.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eH8.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eH9.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eHa.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eHc.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pU(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eHb(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eHb.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eHV.prototype={
$2(d,e){return d+e.gwJ()},
$S:z+59}
C.eHR.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eHS.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eHC.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dX:B.c,s=A.m(24),r=A.p(v,D.bJa,B.f,v,v,new A.o(B.ay.j(u?0.18:0.08),v,A.I(B.ay.j(0.28),B.q,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aB,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aP:B.aB
u=u?B.dZ:B.bS
w=x.p
return A.eH(v,t,new A.C(B.xB,A.v(A.a([r,B.aQ,q,B.N,p,B.d5,A.A(A.a([A.E(A.dT(B.nu,new C.eHA(d),A.dg(v,v,v,v,v,v,v,v,v,o,v,v,B.eZ,v,new A.b7(A.m(14),B.Y),new A.ay(u,1,B.q,-1),v,v,v,v)),1),B.av,A.E(A.bH(D.ftG,new C.eHB(d),A.bl(B.ay,v,v,v,v,v,B.eZ,v,new A.b7(A.m(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d0,v,new A.b7(s,B.Y),v)},
$S:47}
C.eHA.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.eHB.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eHL.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dX:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fM,28)],x.V),g=k?D.cYT:B.a20,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aA,D.eHZ,B.at,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cv,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.ax,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.ahz,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b3E(B.b7,B.iW,new C.eHI(v,d),l,"Camera import","Scan QR"),1),B.av,A.E(v.b3E(B.cz,M.yf,new C.eHJ(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.ay.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.ay.j(0.28),B.q,1)
o=A.p(m,D.bIz,B.f,m,m,new A.o(B.ay.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.aB,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bn,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bn(!0,new A.C(B.vh,A.p(m,A.v(A.a([g,new A.C(B.ahx,A.v(A.a([w,B.S,u,B.by,t,B.S,A.aG(!1,B.a1,!0,m,A.aL(!1,s,!0,A.p(m,A.A(A.a([o,B.bf,n,A.X(B.ex,k?B.bq:B.bn,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bC,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eHK(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:26}
C.eHI.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.vh("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eHJ.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.vh("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eHK.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.Np(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eHG.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dX:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eT,24)],x.V),k=o?B.dZ:B.bS
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bq:B.bn
u=A.bw(w,new A.a7(48,48,C.aPm(!0,A.m(12),48,N.MI,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aP:B.aB,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Av(v.gwJ())
s=x.p
r=this.a
return A.bn(!0,new A.C(B.vh,A.p(q,A.v(A.a([B.S,k,new A.C(D.ahu,A.A(A.a([u,B.bf,A.E(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bq:B.bn,q,q,q,q,q,q,q,q,12,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.AH,r.cj1(B.tX,B.aV,new C.eHE(d),p,"QR code or backup file","Transfer project"),r.b0C(!0,B.e5,B.ay,new C.eHF(d),p,"Remove from this device","Delete project"),B.S],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:26}
C.eHE.prototype={
$0(){A.a5(this.a,!1).O("transfer")
return null},
$S:0}
C.eHF.prototype={
$0(){A.a5(this.a,!1).O("delete")
return null},
$S:0}
C.eHH.prototype={
$1(d){return this.bjr(d)},
bjr(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.KT(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vu(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eHY.prototype={
$0(){var w=this.a
w.a.bp()
w.m(new C.eHX(w))},
$S:0}
C.eHX.prototype={
$0(){return this.a.r++},
$S:0}
C.eHZ.prototype={
$0(){var w=this.a
return w.m(new C.eHW(w))},
$S:0}
C.eHW.prototype={
$0(){return this.a.r++},
$S:0}
C.eHz.prototype={
$0(){var w=this.a.c
w.toString
return A.iM(w,null)},
$S:0}
C.eHD.prototype={
$0(){return this.a.ccn(this.b)},
$S:0}
C.eHU.prototype={
$0(){var w=this.a
return w.m(new C.eHT(w,this.b))},
$S:0}
C.eHT.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eHO.prototype={
$0(){return this.a.vh("scan")},
$S:0}
C.eHP.prototype={
$0(){return this.a.vh("file")},
$S:0}
C.eHQ.prototype={
$1(d){return this.a.cj2(d,this.b)},
$S:z+60}
C.eHN.prototype={
$0(){return this.a.Ed(this.b)},
$S:0}
C.eHM.prototype={
$0(){return this.a.a_a(this.b,this.c)},
$S:0}
C.cvG.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cvF.prototype={
$1(d){return d.ag()},
$S:z+62}
C.cvD.prototype={
$1(d){return C.hrp(A.a1(d,x.N,x.z))},
$S:z+63}
C.cvE.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fpe.prototype={
$1(d){return d.y===D.kk},
$S:z+2}
C.fNk.prototype={
$1(d){return C.bAv(d,this.a)},
$S:z+2}
C.fnF.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bMQ.prototype={
$1(d){return!d.as},
$S:z+1}
C.bMP.prototype={
$1(d){return d.ag()},
$S:z+15}
C.bMM.prototype={
$1(d){return C.h2b(A.a1(d,x.N,x.z))},
$S:z+14}
C.bMN.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bMO.prototype={
$1(d){return J.k(d)},
$S:17}
C.ffp.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fb6.prototype={
$1(d){return C.fTI(A.a1(d,x.N,x.z))},
$S:z+67}
C.fb7.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.fb8.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fFk.prototype={
$1(d){return J.k(d)},
$S:17}
C.fFl.prototype={
$1(d){return d.a},
$S:z+69}
C.fFm.prototype={
$1(d){return d.length!==0},
$S:3}
C.fFn.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fFo.prototype={
$1(d){return d.Sg(null).ag()},
$S:z+70}
C.fNi.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fpG.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fsd.prototype={
$1(d){return C.ak3(A.a1(d,x.N,x.z))},
$S:z+8}
C.fse.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fsf.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fsg.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fsh.prototype={
$1(d){return C.tN(d,this.a)},
$S:z+2}
C.fF7.prototype={
$1(d){return C.tN(d,this.a)},
$S:z+2}
C.fNd.prototype={
$1(d){return C.ak3(A.a1(d,x.N,x.z))},
$S:z+8}
C.fNe.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fNf.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fpn.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fpo.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fNo.prototype={
$1(d){return!d.as},
$S:z+1}
C.foU.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.foV.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.foW.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.fMZ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.ft_.prototype={
$1(d){return d.Q},
$S:z+72}
C.fF0.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fsa.prototype={
$1(d){return C.ak3(A.a1(d,x.N,x.z))},
$S:z+8}
C.fsb.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fsc.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fEW.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fbE.prototype={
$1(d){return d.length!==0},
$S:3}
C.fbF.prototype={
$1(d){return C.h2b(A.a1(d,x.N,x.z))},
$S:z+14}
C.fbG.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fbH.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fbI.prototype={
$1(d){return d.length!==0},
$S:3}
C.fbV.prototype={
$2(d,e){return d.eU(new C.fbW(e))},
$S:1922}
C.fbW.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c7},
$S:1923}
C.fbS.prototype={
$1(d){return C.hNt(d,this.a)},
$S:z+73}
C.fbT.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fbU.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fg3.prototype={
$1(d){return d.a},
$S:z+49}
C.fg4.prototype={
$1(d){return d.length!==0},
$S:3}
C.fg5.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fic.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fmZ.prototype={
$1(d){return C.hdx(d,C.G9(d,this.a))},
$S:z+5}
C.fn_.prototype={
$1(d){return C.hdy(d,C.G9(d,this.a))},
$S:z+5};(function aliases(){var w=C.aKp.prototype
w.btv=w.q
w=C.aMA.prototype
w.bvT=w.q
w=C.aMB.prototype
w.bvU=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aBU.prototype,"gcfZ","cg_",25)
var s
w(s=C.ayY.prototype,"gc8Z","c9_",42)
v(s,"gaLs","MY",0)
v(s,"gcod","Aw",0)
v(s,"gbJ4","ND",0)
v(s,"gcC_","y7",0)
v(s,"gci_","a_S",0)
v(s,"gbEt","Nl",0)
v(s,"gbJv","Wt",0)
w(s,"gbO5","bO6",71)
v(s,"gbyY","zA",0)
v(C.ayZ.prototype,"gcBW","F4",0)
v(s=C.aCu.prototype,"gaeL","vv",0)
v(s,"gcbD","a_1",0)
v(s,"gaPt","HC",0)
v(s=C.aCr.prototype,"gcya","a1X",0)
v(s,"gaeL","vv",0)
v(s,"gcmg","a0x",0)
v(s,"gccA","a_f",0)
w(s,"gc8T","c8U",30)
v(s,"gbJm","HH",0)
v(s,"gcz9","cza",3)
v(s,"gc_B","Y7",0)
w(s,"gc7p","c7q",23)
v(s,"gcbn","cbo",3)
v(s=C.aAT.prototype,"gc5d","P9",0)
v(s,"gc5f","c5g",3)
v(s,"gbG0","a8Q",0)
v(s=C.aCt.prototype,"gbMB","WY",0)
v(s,"gbWZ","XB",0)
v(s,"gcsx","a1n",0)
v(s,"gcoN","a0Z",0)
v(C.aCs.prototype,"gcov","agv",0)
v(C.arF.prototype,"gc7n","ZE",0)
v(C.axJ.prototype,"ga1H","JO",3)
v(C.axI.prototype,"ga1H","JO",3)
v(C.aws.prototype,"ga1H","JO",3)
v(s=C.aDZ.prototype,"gb00","Q4",0)
v(s,"gbxM","Vd",0)
v(s,"gcco","ccp",3)
w(C.aDY.prototype,"gc8d","c8e",57)
u(C.aE_.prototype,"gaPn",0,0,null,["$1","$0"],["HB","bHh"],58,0,0)
t(C,"hkN","hX4",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.anz,C.u3,C.n8,C.Hf,C.aec,C.Jz,C.u4,C.JH,C.Fq,C.bdu,C.aI3,C.aoJ,C.d68,C.lx,C.aSh,C.aSg,C.aQi,C.tC,C.qS,C.lh,C.hV,C.kA,C.aG2])
u(A.hT,[C.fwQ,C.fwP,C.fwR,C.fG_,C.flV,C.flW,C.fm0,C.fuz,C.fuy,C.fux,C.c0S,C.fGv,C.fGn,C.fGz,C.fpv,C.dEF,C.dEA,C.dEB,C.dEd,C.dE9,C.dEU,C.dEV,C.dEO,C.dEP,C.dEW,C.dEX,C.fq3,C.fs7,C.fs8,C.fF5,C.fNc,C.fpm,C.fFE,C.d5l,C.d4I,C.d4R,C.d57,C.d4N,C.d4T,C.d4K,C.d4X,C.d4Y,C.d4W,C.d5c,C.d5b,C.d76,C.d77,C.d78,C.d5z,C.d5E,C.d5D,C.cEr,C.cEt,C.cXT,C.cYh,C.cYi,C.cYl,C.cYn,C.cYo,C.cYp,C.cYr,C.cYs,C.dST,C.dSi,C.dSd,C.dRM,C.dRZ,C.dS1,C.dSa,C.dRA,C.dSl,C.dSf,C.dRC,C.dRD,C.dRE,C.dRJ,C.dRH,C.dRG,C.dRW,C.dRX,C.dRR,C.dSs,C.dSo,C.d5K,C.d5L,C.fq7,C.fq8,C.fq9,C.fq5,C.fq6,C.fqc,C.fqd,C.fqe,C.fqa,C.fqb,C.d63,C.d5U,C.d5P,C.d5Z,C.d6_,C.d62,C.d5R,C.d65,C.d66,C.d67,C.f8m,C.eKh,C.dlW,C.dm5,C.dm6,C.dm7,C.dma,C.dm9,C.dmb,C.dmg,C.dmh,C.c7w,C.c7v,C.c7r,C.c7s,C.c7t,C.c7u,C.c7B,C.c7y,C.c7z,C.dSF,C.dSI,C.dSH,C.dSO,C.dSP,C.dDZ,C.fG6,C.fFt,C.fMY,C.fFy,C.fFx,C.cYG,C.cYH,C.cYC,C.cwm,C.cwo,C.cwp,C.cwh,C.cwq,C.f7P,C.fEa,C.eHp,C.eHl,C.eHh,C.eHf,C.eHt,C.fMO,C.eHC,C.eHL,C.eHG,C.eHH,C.eHQ,C.cvF,C.cvD,C.cvE,C.fpe,C.fNk,C.fnF,C.bMQ,C.bMP,C.bMM,C.bMN,C.bMO,C.fb6,C.fb7,C.fFk,C.fFl,C.fFm,C.fFn,C.fFo,C.fNi,C.fpG,C.fsd,C.fse,C.fsg,C.fsh,C.fF7,C.fNd,C.fNe,C.fNf,C.fpn,C.fpo,C.fNo,C.foU,C.foV,C.fMZ,C.ft_,C.fF0,C.fsa,C.fsb,C.fEW,C.fbE,C.fbF,C.fbG,C.fbH,C.fbI,C.fbW,C.fbS,C.fbT,C.fg3,C.fg4,C.fic,C.fmZ,C.fn_])
u(A.au,[C.aXJ,C.ak1,C.aTw,C.Y2,C.b9c,C.bds,C.bha,C.buS,C.bkw,C.acC,C.bh9,C.acB,C.bh8,C.aAU,C.aH5,C.acD,C.Jv,C.bdt,C.abT,C.bdr,C.bdw,C.aXH,C.arF,C.acY])
u(A.mJ,[C.b9O,C.bb0,C.baS,C.aFY,C.bgd,C.bdv,C.bcz,C.bii,C.buH])
u(A.j5,[C.fGs,C.fGt,C.fGu,C.fGl,C.fGm,C.fGx,C.fGy,C.dER,C.dED,C.dEG,C.dEk,C.dEl,C.dEm,C.dEj,C.dEr,C.dEi,C.dEs,C.dEt,C.dEh,C.dEu,C.dEg,C.dEv,C.dEf,C.dEw,C.dE7,C.dE8,C.dEe,C.dEx,C.dEc,C.dEy,C.dEb,C.dEn,C.dEa,C.dEo,C.dE6,C.dEp,C.dEq,C.dES,C.dET,C.dEH,C.dEI,C.dEJ,C.dEK,C.dEL,C.dEM,C.dEN,C.dEZ,C.dEQ,C.fq4,C.d4G,C.d4E,C.d4F,C.d4H,C.d5k,C.d59,C.d56,C.d4J,C.d5a,C.d4P,C.d4Q,C.d4S,C.d58,C.d4O,C.d4U,C.d5h,C.d53,C.d52,C.d54,C.d55,C.d4Z,C.d50,C.d51,C.d4V,C.d5d,C.d5g,C.d4L,C.d4M,C.d75,C.d74,C.d73,C.d72,C.d79,C.d71,C.d7a,C.d5A,C.d5B,C.d5C,C.d5F,C.d5y,C.d5x,C.cEs,C.cXS,C.cY4,C.cY3,C.cYj,C.cY2,C.cYk,C.cY1,C.cY0,C.cYm,C.cY_,C.cYc,C.cYb,C.cYt,C.dSS,C.dSR,C.dSU,C.dSV,C.dSW,C.dSQ,C.dSY,C.dSX,C.dSg,C.dSh,C.dSj,C.dRN,C.dS0,C.dS_,C.dS2,C.dSc,C.dS5,C.dS4,C.dS6,C.dS3,C.dS7,C.dS8,C.dSb,C.dRB,C.dSe,C.dRF,C.dRI,C.dRK,C.dSk,C.dRQ,C.dRO,C.dRS,C.dRT,C.dRP,C.dRU,C.dRY,C.dSt,C.dSu,C.dSm,C.dSp,C.dSq,C.dSr,C.dSw,C.dSn,C.dRL,C.d5J,C.d5I,C.d5N,C.d5X,C.d5O,C.eKg,C.dlX,C.dlU,C.dlV,C.dm4,C.dm3,C.dm2,C.dmc,C.dm1,C.dmd,C.dm0,C.dme,C.dm_,C.dmf,C.dlZ,C.dlY,C.dm8,C.dmi,C.dmr,C.dSG,C.dSK,C.dSL,C.dSC,C.dSD,C.dSE,C.dSJ,C.dSN,C.dSM,C.dSx,C.dSy,C.dSz,C.dSA,C.dSB,C.dE_,C.fG3,C.cf5,C.cYF,C.cYE,C.cYI,C.cYB,C.cYD,C.cwe,C.cwk,C.cwl,C.cwj,C.cwn,C.cwi,C.cwf,C.cwg,C.cwr,C.f7Q,C.f7R,C.eHr,C.eHi,C.eHj,C.eHk,C.eHm,C.eHn,C.eHq,C.eHd,C.eHg,C.eHs,C.eHe,C.eHv,C.eHw,C.eHx,C.eHy,C.eHu,C.eH8,C.eH9,C.eHa,C.eHc,C.eHb,C.eHR,C.eHS,C.eHA,C.eHB,C.eHI,C.eHJ,C.eHK,C.eHE,C.eHF,C.eHY,C.eHX,C.eHZ,C.eHW,C.eHz,C.eHD,C.eHU,C.eHT,C.eHO,C.eHP,C.eHN,C.eHM])
u(A.ag,[C.anG,C.Sb,C.YK,C.YO,C.YM,C.Yk,C.aoM,C.aoG,C.Zn,C.aoK,C.ZI,C.ZJ,C.a5F,C.Ym,C.Yl,C.XU,C.a0t,C.Fe,C.awl,C.arE,C.ary,C.arD,C.NH])
u(A.ah,[C.aBU,C.bdp,C.ayY,C.bdK,C.ayZ,C.baZ,C.aCu,C.aCr,C.aAT,C.aCt,C.aCs,C.biD,C.aKp,C.axJ,C.axI,C.aws,C.buK,C.aMA,C.aMB,C.aDZ,C.bk_,C.aDY,C.bwv])
u(A.ki,[C.dEC,C.dEE,C.dEz,C.dEY,C.fs9,C.bML,C.d5j,C.d5i,C.d5_,C.d5e,C.d5f,C.d5G,C.dS9,C.dRV,C.dSv,C.d5W,C.d5V,C.d5T,C.d5Y,C.d60,C.d61,C.d5M,C.d5Q,C.d5S,C.d64,C.c7p,C.c7x,C.c7C,C.dE0,C.fG5,C.fG4,C.f7N,C.f7O,C.eHo,C.eHV,C.cvG,C.ffp,C.fb8,C.fsf,C.foW,C.fsc,C.fbV,C.fbU,C.fg5])
t(C.bij,C.aKp)
u(A.m6,[C.aaW,C.aIL,C.Hg,C.ak2,C.cvH,C.cvI])
t(C.buI,C.aMA)
t(C.buJ,C.aMB)
t(C.aE_,C.bwv)
t(C.b7F,A.b7t)
t(C.buL,A.a5k)
t(C.b7E,C.buL)
w(C.aKp,A.eQ)
w(C.aMA,A.c9)
w(C.aMB,A.c9)
v(C.bwv,A.ez)
v(C.buL,A.j0)})()
A.jW(b.typeUniverse,JSON.parse('{"aXJ":{"au":[],"r":[]},"b9O":{"aB":[]},"anG":{"ag":[],"r":[]},"aBU":{"ah":["anG"]},"Sb":{"ag":[],"r":[]},"ak1":{"au":[],"r":[]},"aTw":{"au":[],"r":[]},"bdp":{"ah":["Sb"]},"YK":{"ag":[],"r":[]},"YO":{"ag":[],"r":[]},"YM":{"ag":[],"r":[]},"Yk":{"ag":[],"r":[]},"ayY":{"ah":["YK"]},"bdK":{"ah":["YO"]},"ayZ":{"ah":["YM"]},"Y2":{"au":[],"r":[]},"bb0":{"aB":[]},"baS":{"aB":[]},"baZ":{"ah":["Yk"]},"aFY":{"aB":[]},"bgd":{"aB":[]},"b9c":{"au":[],"r":[]},"aoM":{"ag":[],"r":[]},"aoG":{"ag":[],"r":[]},"Zn":{"ag":[],"r":[]},"acD":{"au":[],"r":[]},"aCu":{"ah":["aoM"]},"aCr":{"ah":["aoG"]},"bds":{"au":[],"r":[]},"bdv":{"aB":[]},"bha":{"au":[],"r":[]},"bcz":{"aB":[]},"buS":{"au":[],"r":[]},"bkw":{"au":[],"r":[]},"aAT":{"ah":["Zn"]},"acC":{"au":[],"r":[]},"bh9":{"au":[],"r":[]},"acB":{"au":[],"r":[]},"bh8":{"au":[],"r":[]},"aAU":{"au":[],"r":[]},"aH5":{"au":[],"r":[]},"Jv":{"au":[],"r":[]},"aoK":{"ag":[],"r":[]},"ZI":{"ag":[],"r":[]},"ZJ":{"ag":[],"r":[]},"aCt":{"ah":["aoK"]},"bdt":{"au":[],"r":[]},"abT":{"au":[],"r":[]},"bdr":{"au":[],"r":[]},"bdw":{"au":[],"r":[]},"aCs":{"ah":["ZI"]},"biD":{"ah":["ZJ"]},"aXH":{"au":[],"r":[]},"a5F":{"ag":[],"r":[]},"bij":{"ah":["a5F"]},"bii":{"aB":[]},"arF":{"au":[],"r":[]},"Ym":{"ag":[],"r":[]},"Yl":{"ag":[],"r":[]},"XU":{"ag":[],"r":[]},"a0t":{"ag":[],"r":[]},"axJ":{"ah":["Ym"]},"axI":{"ah":["Yl"]},"aws":{"ah":["XU"]},"buK":{"ah":["a0t"]},"Fe":{"ag":[],"r":[]},"awl":{"ag":[],"r":[]},"buI":{"ah":["Fe"]},"buJ":{"ah":["awl"]},"buH":{"aB":[]},"arE":{"ag":[],"r":[]},"aDZ":{"ah":["arE"]},"acY":{"au":[],"r":[]},"ary":{"ag":[],"r":[]},"arD":{"ag":[],"r":[]},"bk_":{"ah":["ary"]},"aDY":{"ah":["arD"]},"NH":{"ag":[],"r":[]},"aE_":{"ah":["NH"],"ez":[]},"b7E":{"j0":[],"fe":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aQi"),Q:w("qS"),n:w("bk<n,n>"),c5:w("aSg"),dY:w("aSh"),d:w("eT<n?>"),e:w("Hf"),B:w("n8"),P:w("hV"),k:w("kA"),x:w("az<~>"),f5:w("O<a2s>"),V:w("O<ac>"),t:w("O<qS>"),O:w("O<w>"),ac:w("O<eT<n?>>"),I:w("O<n8>"),u:w("O<hV>"),_:w("O<kA>"),cl:w("O<az<ai<a3<n,@>>>>"),R:w("O<na>"),cq:w("O<ai<+(N,N)>>"),ez:w("O<a3<n,aC>>"),gE:w("O<a3<n,n>>"),c7:w("O<a3<n,@>>"),fD:w("O<mo>"),bp:w("O<ob>"),g:w("O<u>"),v:w("O<hn>"),L:w("O<+(n,n)>"),G:w("O<+(N,N)>"),bF:w("O<+count,id,name(H,n,n)>"),A:w("O<cQ>"),s:w("O<n>"),aS:w("O<iP>"),p:w("O<r>"),C:w("O<fe>"),D:w("O<lh>"),fp:w("O<Jz>"),M:w("O<JH>"),gZ:w("O<aG2>"),Y:w("O<aec>"),E:w("O<aI3>"),F:w("O<N>"),dC:w("O<H>"),dS:w("O<aB?>"),d4:w("O<n?>"),J:w("cs<ah<ag>>"),b:w("ai<n8>"),do:w("ai<hV>"),r:w("ai<kA>"),U:w("ai<a3<n,@>>"),gk:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),h:w("ai<n>"),c:w("ai<lh>"),j:w("ai<@>"),fK:w("bv<n,n>"),d2:w("bv<n,ai<a3<n,@>>>"),a:w("a3<n,@>"),f:w("a3<@,@>"),gv:w("K<n,Hh>"),w:w("iz"),g2:w("rc"),bV:w("anz"),fL:w("cq"),K:w("aC"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(N,ai<hV>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),e7:w("bo<N>"),gc:w("dD"),b4:w("cx<H>"),W:w("kf<n>"),l:w("r"),cM:w("fe"),i:w("lh"),cc:w("Fq"),bw:w("acB<n?>"),cy:w("JJ"),q:w("mX"),y:w("R"),gR:w("N"),z:w("@"),S:w("H"),eK:w("ai<kA>?"),m:w("aoJ?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),X:w("+qrPayload,token,usesRemaining(n,n,H)?"),gF:w("+members,trees,viewOnly(H,H,R)?"),Z:w("pP?"),T:w("n?"),aD:w("dD?"),o:w("lh?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aWQ=new A.bp(B.hd,B.bE,B.hd,B.bE)
D.a9B=new A.bp(B.hd,B.jH,B.hd,B.jH)
D.aX1=new A.bp(B.ii,B.bE,B.bE,B.bE)
D.aX5=new A.ay(B.d_,1.4,B.q,-1)
D.aXf=new A.ay(B.ad,1,B.q,-1)
D.aYF=new A.aY(0,1/0,64,1/0)
D.aYJ=new A.aY(0,84,0,1/0)
D.ax7=w([B.lF,B.qM,B.c],x.O)
D.bTL=new A.a8(B.ax,B.aC,B.x,D.ax7,null,null)
D.aZt=new A.o(null,null,null,null,null,D.bTL,B.n)
D.cYo=w([B.aV,B.bW],x.O)
D.bVS=new A.a8(B.b0,B.b5,B.x,D.cYo,null,null)
D.aZN=new A.o(null,null,null,null,null,D.bVS,B.n)
D.b4Y=new A.fj(null,null,null,null,null,E.jO,null,null,null,null)
D.aaU=new A.cr(B.A,null,null,D.b4Y,null)
D.kd=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eYC=new A.G(!0,D.kd,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgB=new A.x("No books on the shelf yet.",null,D.eYC,null,null,null,null,null,null,null,null,null)
D.e59=new A.C(B.nV,D.fgB,null)
D.b3s=new A.cr(B.A,null,null,D.e59,null)
D.b4l=new A.cr(B.A,null,null,Z.Vp,null)
D.b6n=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b6Q=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.ac7=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b9u=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b9M=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.adq=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bdy=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bdY=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.Er=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.bfy=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bhV=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.af5=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.fbb=new A.x("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bno=new A.eT(null,D.fbb,B.f1,null,x.d)
D.fjO=new A.x("None",null,null,null,null,null,null,null,null,null,null,null)
D.bnq=new A.eT(null,D.fjO,B.f1,null,x.d)
D.bnY=new A.b9(38e5)
D.boI=new A.ib(0,10,0,10)
D.boS=new A.Q(0,1,0,0)
D.bp1=new A.ib(0,4,0,4)
D.bpj=new A.Q(10,10,14,10)
D.bpv=new A.ib(10,4,10,4)
D.bpD=new A.ib(10,8,10,8)
D.bpE=new A.Q(10,8,8,8)
D.bq3=new A.Q(12,6,12,2)
D.bqk=new A.Q(14,10,6,6)
D.bql=new A.Q(14,12,14,0)
D.bqp=new A.Q(14,12,14,8)
D.bqs=new A.Q(14,12,8,14)
D.bqv=new A.ib(14,14,14,14)
D.br9=new A.Q(16,2,16,10)
D.brj=new A.Q(16,6,16,30)
D.brl=new A.Q(16,6,16,8)
D.ahu=new A.Q(18,16,18,8)
D.brW=new A.Q(18,20,18,22)
D.ahy=new A.Q(18,24,18,24)
D.bs1=new A.Q(18,30,18,30)
D.bsj=new A.Q(20,10,12,20)
D.bsx=new A.Q(20,18,16,18)
D.bsz=new A.Q(20,18,20,6)
D.btn=new A.Q(24,32,24,28)
D.bto=new A.Q(24,36,24,32)
D.bts=new A.Q(26,26,24,14)
D.btG=new A.Q(2,4,2,8)
D.btK=new A.Q(30,0,30,0)
D.btV=new A.Q(38,22,22,22)
D.ahQ=new A.Q(40,24,24,24)
D.btX=new A.ib(40,40,40,40)
D.btZ=new A.Q(46,30,30,30)
D.ahT=new A.Q(4,0,0,8)
D.buq=new A.Q(56,40,40,40)
D.buu=new A.Q(1.25,1.25,1.25,1.25)
D.buv=new A.Q(60,0,60,0)
D.buy=new A.Q(6,14,6,16)
D.buL=new A.ib(7,3,7,3)
D.bvg=new A.Q(5,1.5,5,1.5)
D.bvr=new A.Q(6,2.5,6,2.5)
D.fvB=new A.x("Signature",null,B.nt,null,null,null,null,null,null,null,null,null)
D.bvM=new A.bD(1,B.bh,D.fvB,null)
D.fsO=new A.x("Tell the AI what to fix",null,B.dq,null,null,null,null,null,null,null,null,null)
D.bwx=new A.bD(1,B.bh,D.fsO,null)
D.f4S=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuJ=new A.x("Worksheets",null,D.f4S,null,null,null,null,null,null,null,null,null)
D.f5_=new A.G(!0,E.abE,null,null,null,null,13,B.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftE=new A.x("Track your project spending",null,D.f5_,null,null,null,null,null,null,null,null,null)
D.cQA=w([D.fuJ,B.at,D.ftE],x.p)
D.bkM=new A.fq(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cQA,null)
D.bwC=new A.bD(1,B.bh,D.bkM,null)
D.f0a=new A.G(!0,E.jO,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fao=new A.x("FAMILY LIBRARY",null,D.f0a,null,null,null,null,null,null,null,null,null)
D.bwT=new A.bD(1,B.bh,D.fao,null)
D.Ml=new C.Hf("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.Zf=new C.Hg(0,"male")
D.aiL=new C.Hg(1,"female")
D.xK=new C.Hg(2,"unknown")
D.tE=new C.ak2(0,"owner")
D.Mm=new C.ak2(1,"editor")
D.kk=new C.ak2(2,"viewer")
D.ajx=new A.a0(61199,"MaterialIcons",!1)
D.bAS=new A.a0(61504,"MaterialIcons",!1)
D.bAT=new A.a0(61505,"MaterialIcons",!1)
D.bAV=new A.a0(61587,"MaterialIcons",!1)
D.bB1=new A.a0(61890,"MaterialIcons",!1)
D.bBV=new A.a0(63034,"MaterialIcons",!0)
D.bCK=new A.a0(63429,"MaterialIcons",!1)
D.alO=new A.a0(984520,"MaterialIcons",!1)
D.bBr=new A.a0(62776,"MaterialIcons",!1)
D.bF4=new A.ae(D.bBr,26,B.aZ,null,null,null)
D.bzQ=new A.a0(57648,"MaterialIcons",!1)
D.bFm=new A.ae(D.bzQ,14,B.c,null,null,null)
D.bFD=new A.ae(B.Fz,17,null,null,null,null)
D.bG8=new A.ae(E.a_8,null,null,null,null,null)
D.bGb=new A.ae(B.jg,18,E.jO,null,null,null)
D.ZV=new A.a0(62044,"MaterialIcons",!1)
D.bGh=new A.ae(D.ZV,null,B.aV,null,null,null)
D.bH6=new A.ae(B.dW,16,null,null,null,null)
D.bHd=new A.ae(D.ZV,32,B.aV,null,null,null)
D.bHw=new A.ae(E.ajy,18,B.d_,null,null,null)
D.bIz=new A.ae(B.FJ,22,B.ay,null,null,null)
D.bIL=new A.ae(B.dW,22,B.aZ,null,null,null)
D.bIW=new A.ae(Q.a__,22,B.c,null,null,null)
D.bJ0=new A.ae(B.tO,52,B.c,null,null,null)
D.bJa=new A.ae(B.FJ,30,B.ay,null,null,null)
D.amq=new A.ae(B.tX,22,B.c,null,null,null)
D.bJC=new A.ae(B.dW,17,null,null,null,null)
D.bJV=new A.ae(B.vC,26,B.d_,null,null,null)
D.bKE=new A.ae(B.a_k,16,null,null,null,null)
D.bLn=new A.ae(B.tO,24,B.c,null,null,null)
D.bLs=new A.ae(B.MO,20,B.rh,null,null,null)
D.bLx=new A.ae(B.Fx,null,B.bW,null,null,null)
D.bLE=new A.ae(B.jg,18,B.c,null,null,null)
D.bMf=new A.ae(B.cB,22,B.ad,null,null,null)
D.bN4=new A.ae(B.e5,16,B.ad,null,null,null)
D.bNg=new A.ae(D.ZV,20,B.aV,null,null,null)
D.amR=new A.ae(B.hz,20,null,null,null,null)
D.bNL=new A.ae(B.cB,18,D.kd,null,null,null)
D.bO2=new A.ae(B.y4,28,B.c,null,null,null)
D.bOa=new A.ae(B.ME,null,B.fZ,null,null,null)
D.bOu=new A.ae(B.y4,24,B.c,null,null,null)
D.bOW=new A.ae(B.tO,null,B.aV,null,null,null)
D.bOX=new A.ae(B.jA,20,B.d_,null,null,null)
D.bPg=new A.ae(B.Fz,16,null,null,null,null)
D.bQN=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ey,!0,null,null,null,null)
D.d4w=w([B.bt,B.aV,B.f8,B.aZ],x.O)
D.bSd=new A.a8(B.ax,B.aC,B.x,D.d4w,null,null)
D.bet=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bjQ=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cNw=w([D.bet,D.bjQ],x.O)
D.bSo=new A.a8(B.b0,B.b5,B.x,D.cNw,null,null)
D.d_8=w([B.eX,B.fv,B.f8],x.O)
D.bSs=new A.a8(B.ax,B.aC,B.x,D.d_8,null,null)
D.ae2=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b6R=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cPs=w([D.ae2,D.b6R],x.O)
D.bT0=new A.a8(B.b0,B.b5,B.x,D.cPs,null,null)
D.b9Y=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.aww=w([D.b9Y,D.ae2],x.O)
D.bTk=new A.a8(B.ax,B.aC,B.x,D.aww,null,null)
D.acZ=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.bc2=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cZj=w([D.acZ,D.bc2],x.O)
D.bTW=new A.a8(B.a3,B.a7,B.x,D.cZj,null,null)
D.daA=w([B.bI,B.mX],x.O)
D.bTY=new A.a8(B.b0,B.b5,B.x,D.daA,null,null)
D.bep=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.dbr=w([D.bep,D.kd,D.kd,Aj.WJ],x.O)
D.ddC=w([0,0.07,0.9,1],x.F)
D.bUt=new A.a8(B.a3,B.a7,B.x,D.dbr,D.ddC,null)
D.bUE=new A.a8(B.ax,B.aC,B.x,B.Ql,null,null)
D.dab=w([B.aZ,B.aV,B.bW],x.O)
D.bVD=new A.a8(B.ax,B.aC,B.x,D.dab,null,null)
D.cg5=w([B.bt,B.aZ,B.eX],x.O)
D.cgc=w([B.bv,B.aE,B.jq],x.O)
D.cge=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bd4=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cmi=w([D.bd4,E.adJ],x.O)
D.e0Y=new A.u(1,2)
D.eKa=new A.cQ(B.aX,D.e0Y,3)
D.atD=w([D.eKa],x.A)
D.ctx=w([B.h1,B.cb,B.f7],x.O)
D.cwa=w([B.bJ,B.bu,B.bm],x.O)
D.bxl=new C.u3("classic","Classic leather","Gold-edged brown leather",D.aww,E.jO,E.jO,"\u2766",B.L,!0,!1,!1,!1)
D.b6b=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.biL=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cSb=w([D.b6b,D.biL],x.O)
D.adN=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bxg=new C.u3("ornate","Ornate gold","Double gold border and flourishes",D.cSb,D.adN,D.adN,"\u2726",B.L,!0,!0,!0,!1)
D.b9D=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bfa=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cKy=w([D.b9D,D.bfa],x.O)
D.bxf=new C.u3("parchment","Parchment","Old paper with dark ink",D.cKy,D.Er,G.ir,"\u2767",B.L,!0,!1,!1,!0)
D.abl=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bhd=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.d8B=w([D.abl,D.bhd],x.O)
D.bcF=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bgA=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bxi=new C.u3("minimal","Clean paper","Plain and elegant, like a printed book",D.d8B,D.bcF,D.bgA,"",B.L,!0,!0,!1,!0)
D.bxk=new C.u3("midnight","Midnight","Deep blue with silver stars",L.awP,B.cq,B.bM,"\u2727",B.L,!0,!0,!1,!1)
D.bxe=new C.u3("emerald","Emerald library","Green cloth, title on the left",A_.au1,E.jO,B.h2,"\u25c6",B.bg,!0,!1,!1,!1)
D.bhC=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.d71=w([B.er,D.bhC],x.O)
D.bdH=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.beN=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bxj=new C.u3("rose","Rose vintage","Burgundy with rose-gold lettering",D.d71,D.bdH,D.beN,"\u2740",B.L,!0,!1,!0,!1)
D.db4=w([B.cE,P.mY],x.O)
D.bxh=new C.u3("modern","Modern","Dark, bold, left-aligned",D.db4,B.aS,B.c,"",B.bg,!1,!0,!1,!1)
D.a1d=w([D.bxl,D.bxg,D.bxf,D.bxi,D.bxk,D.bxe,D.bxj,D.bxh],A.ax("O<u3>"))
D.cK4=w([B.bW,B.bk],x.O)
D.bef=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cKK=w([D.abl,D.bef],x.O)
D.b9z=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cMh=w([D.b9z,B.db],x.O)
D.cNL=w([B.b8,B.iM,B.oq],x.O)
D.cO7=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b6N=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.bbn=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.ddy=w([D.acZ,D.b6N,D.bbn],x.O)
D.bxm=new C.u4("leather","Leather",D.ddy,"vintage")
D.cV7=w([B.dr,B.KG,A3.VV],x.O)
D.bxt=new C.u4("midnight","Midnight",D.cV7,"starry")
D.cNM=w([B.f6,B.e3,B.l8],x.O)
D.bxs=new C.u4("forest","Forest",D.cNM,"story")
D.dfp=w([B.eN,B.er,B.ke],x.O)
D.bxp=new C.u4("burgundy","Burgundy",D.dfp,"royal")
D.cvL=w([B.aE,B.pp,B.nC],x.O)
D.bxq=new C.u4("royal","Royal",D.cvL,"royal")
D.cQ4=w([B.bu,B.cE,P.mY],x.O)
D.bxn=new C.u4("charcoal","Charcoal",D.cQ4,"geo")
D.ddG=w([B.ci,B.dP,B.x1],x.O)
D.bxr=new C.u4("sunset","Sunset",D.ddG,"sunset")
D.dek=w([B.iM,B.Es,B.VZ],x.O)
D.bxo=new C.u4("ocean","Ocean",D.dek,"band")
D.yA=w([D.bxm,D.bxt,D.bxs,D.bxp,D.bxq,D.bxn,D.bxr,D.bxo],A.ax("O<u4>"))
D.cQs=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cR0=w([B.ak,B.aK,B.M],x.O)
D.cSg=w([B.er,B.e3,B.dr,B.fw,B.x5,B.d_,B.jR,B.eu,B.d8],x.O)
D.cSh=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eKb=new A.cQ(B.dn,B.dE,8)
D.cSq=w([D.eKb],x.A)
D.cTt=w([B.bV,B.dP,B.kG],x.O)
D.cTV=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cV3=w([B.bV,B.hf],x.O)
D.cX3=w([B.aM,B.x2,B.wU],x.O)
D.cXV=w([B.bK,B.cc,B.dv,B.aM],x.O)
D.cYp=w([B.j6,B.ci,B.t8],x.O)
D.cYT=w([B.eX,B.d_],x.O)
D.cZo=w([B.cs,B.fx,B.hu],x.O)
D.cZz=w([B.aS,B.bk,B.dr],x.O)
D.d_5=w([B.es,B.cZ,B.e3],x.O)
D.d_m=w([B.dS,B.dr,B.KG],x.O)
D.d0C=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a26=w(["leather","linen","plain","stars","rays"],x.s)
D.bEL=new A.a0(985219,"MaterialIcons",!1)
D.bEj=new A.a0(983781,"MaterialIcons",!1)
D.awe=w([B.ajX,B.i_,B.lM,B.i0,D.bEL,B.FT,B.pN,D.bEj,L.alB,B.y6,B.pQ,B.mq],A.ax("O<a0>"))
D.a2b=w(["double","single","corners","none"],x.s)
D.d3g=w([B.dA,B.bn,B.eu],x.O)
D.d3t=w([],x.t)
D.C_=w([],x.u)
D.d5F=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.d7W=w([B.aH,B.fx,B.fw],x.O)
D.d9b=w([B.ch,B.nI,B.WU],x.O)
D.d9p=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.ds2=new C.lx("construction","Construction","Jobsite & builds",B.xX)
D.ds9=new C.lx("house","Home Build","Houses & rooms",B.vx)
D.ds_=new C.lx("grocery","Grocery","Store & pantry",B.a_Q)
D.drZ=new C.lx("calculator","Calculations","Math & estimates",B.MZ)
D.ds7=new C.lx("lumber","Materials","Lumber & supplies",B.Nf)
D.drW=new C.lx("kitchen","Kitchen","Remodel & meals",A9.akL)
D.bEg=new A.a0(983756,"MaterialIcons",!1)
D.ds0=new C.lx("landscape","Landscaping","Yard & garden",D.bEg)
D.drV=new C.lx("plumbing","Plumbing","Pipes & water",B.pY)
D.dsa=new C.lx("electrical","Electrical","Wiring & power",B.h7)
D.drT=new C.lx("store","Retail Shop","Daily business",B.kO)
D.drU=new C.lx("paint_remodel","Paint & Remodel","Colors & walls",Aa.a_q)
D.bDG=new A.a0(983311,"MaterialIcons",!1)
D.ds6=new C.lx("roofing","Roofing","Roofs & exteriors",D.bDG)
D.bEt=new A.a0(983986,"MaterialIcons",!1)
D.drS=new C.lx("warehouse","Warehouse","Storage & stock",D.bEt)
D.ds4=new C.lx("vehicles","Vehicles","Fleet & transport",B.FU)
D.bBt=new A.a0(62785,"MaterialIcons",!1)
D.drY=new C.lx("farm","Farm","Crops & livestock",D.bBt)
D.drX=new C.lx("restaurant","Restaurant","Food & catering",B.tV)
D.ds3=new C.lx("tools","Tools","Workshop gear",B.FQ)
D.ds8=new C.lx("wallet","Cash & Wallet","Quick spending",B.jA)
D.bCF=new A.a0(63395,"MaterialIcons",!1)
D.ds5=new C.lx("concrete","Concrete","Foundation work",D.bCF)
D.ds1=new C.lx("blueprint","Blueprint","Plans & design",Af.ak2)
D.a2C=w([D.ds2,D.ds9,D.ds_,D.drZ,D.ds7,D.drW,D.ds0,D.drV,D.dsa,D.drT,D.drU,D.ds6,D.drS,D.ds4,D.drY,D.drX,D.ds3,D.ds8,D.ds5,D.ds1],A.ax("O<lx>"))
D.d9T=w([B.bq,B.bn],x.O)
D.daB=w([B.i7,B.nG,B.dH],x.O)
D.a2K=w(["top","middle","bottom"],x.s)
D.dcX=w([B.cr,B.bk,B.dr],x.O)
D.ddt=w([B.b2,B.cZ,B.e3],x.O)
D.dfk=w([B.bJ,B.ak],x.O)
D.dfl=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dZC={top:0,middle:1,bottom:2}
D.diw=new A.bk(D.dZC,["Top","Middle","Bottom"],x.n)
D.dZf={double:0,single:1,corners:2,none:3}
D.diB=new A.bk(D.dZf,["Double line","One line","Corners","None"],x.n)
D.e_o={leather:0,linen:1,plain:2,stars:3,rays:4}
D.djZ=new A.bk(D.e_o,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dka=new A.bk(B.i3,[],A.ax("bk<H,+(n,n)>"))
D.dZu={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Ca=new A.bk(D.dZu,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bk<n,H>"))
D.dmC=new F.MA(32,null)
D.dmD=new F.MA(40,null)
D.dmE=new F.MA(46,null)
D.aFs=new C.arD(null)
D.e1W=new A.u(8,14)
D.fhd=new A.x("Write a new book",null,B.i5,null,B.L,null,null,null,null,null,null,null)
D.e4C=new A.C(B.ld,D.fhd,null)
D.am1=new A.ae(B.hy,18,B.c,null,null,null)
D.faK=new A.x("Add",null,B.m1,null,null,null,null,null,null,null,null,null)
D.cY9=w([D.am1,B.qd,D.faK],x.p)
D.eI5=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cY9,null)
D.e4X=new A.C(B.nU,D.eI5,null)
D.e4Y=new A.C(E.agh,Z.Vp,null)
D.f4N=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdJ=new A.x("New Project",null,D.f4N,null,null,null,null,null,null,null,null,null)
D.d0Y=w([D.am1,B.ab,D.fdJ],x.p)
D.eI8=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d0Y,null)
D.e58=new A.C(B.ix,D.eI8,null)
D.fg0=new A.x("Choose your header",null,U.rD,null,null,null,null,null,null,null,null,null)
D.e5t=new A.C(B.hw,D.fg0,null)
D.b5c=new A.fj(2.2,null,null,null,null,B.d_,null,null,null,null)
D.eMO=new A.a7(22,22,D.b5c,null)
D.b3o=new A.cr(B.A,null,null,D.eMO,null)
D.e5y=new A.C(B.XP,D.b3o,null)
D.bqE=new A.Q(14,2,14,6)
D.ftn=new A.x("The top of your book. Tap a design to see it.",null,T.IJ,null,null,null,null,null,null,null,null,null)
D.e5z=new A.C(D.bqE,D.ftn,null)
D.e76=new A.iN(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.e79=new A.iN(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aGH=new A.iN(1,0.9607843137254902,0.48627450980392156,0)
D.HV=new A.iN(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.z6=new A.iN(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.e7f=new A.iN(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fPC=new C.bgd(null)
D.blQ=new A.mf(D.fPC,null,B.au,null,null)
D.aKl=new A.cL(0,0,0,0,null,null,D.blQ,null)
D.euu=new A.y(-42,42)
D.eCR=new A.cI([0,0,1,1])
D.aLD=new A.a9(0,0,520,160)
D.aLQ=new A.b7(B.rS,B.Y)
D.fsW=new A.x("Let the AI write it from your tree",null,B.kw,null,B.L,null,null,null,null,null,null,null)
D.by_=new A.dq(1,B.cn,D.fsW,null)
D.cV2=w([E.a0i,B.ab,D.by_],x.p)
D.eHO=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cV2,null)
D.fap=new A.x("Save member",null,B.cj,null,null,null,null,null,null,null,null,null)
D.d8c=w([D.amR,B.ab,D.fap],x.p)
D.eHW=new A.cn(B.aO,B.bb,B.j,B.m,null,B.p,null,0,D.d8c,null)
D.bIQ=new A.ae(B.hL,14,B.aZ,null,null,null)
D.eZQ=new A.G(!0,B.aZ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe8=new A.x("Cashier",null,D.eZQ,null,null,null,null,null,null,null,null,null)
D.d1t=w([D.bIQ,B.bp,D.fe8],x.p)
D.eHY=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d1t,null)
D.faq=new A.x("Transfer & settings",null,B.dq,null,null,null,null,null,null,null,null,null)
D.bwo=new A.bD(1,B.bh,D.faq,null)
D.cNf=w([D.amq,B.av,D.bwo],x.p)
D.eHZ=new A.cn(B.aO,B.e,B.j,B.m,null,B.p,null,0,D.cNf,null)
D.eLy=new A.at(16,40)
D.eLD=new A.at(22,64)
D.eLK=new A.at(280,88)
D.eMu=new A.a7(30,null,null,null)
D.eNM=new A.hK(2,12,12,1.05,null)
D.fdP=new A.x("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eOu=new A.b1(D.fdP,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fe3=new A.x("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aNF=new A.b1(D.fe3,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fm4=new A.x("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eOY=new A.b1(D.fm4,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fwa=new A.x("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eP2=new A.b1(D.fwa,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ffZ=new A.x("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eP9=new A.b1(D.ffZ,null,null,null,null,null,null,null,null,null,null,null,null,B.fH,!1,null,null,null,B.r,null)
D.ftA=new A.x("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aNJ=new A.b1(D.ftA,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fb0=new A.x("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.ePz=new A.b1(D.fb0,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fwQ=new A.x("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eQi=new A.b1(D.fwQ,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.frU=new A.x("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eQH=new A.b1(D.frU,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fwe=new A.x("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eQK=new A.b1(D.fwe,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fnB=new A.x("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eQM=new A.b1(D.fnB,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fhO=new A.x("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eQN=new A.b1(D.fhO,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fhP=new A.x("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eRN=new A.b1(D.fhP,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fdR=new A.x("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eS4=new A.b1(D.fdR,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ffG=new A.x("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eSn=new A.b1(D.ffG,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fn6=new A.x("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eSD=new A.b1(D.fn6,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fiC=new A.x("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eSE=new A.b1(D.fiC,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.eVP=new A.G(!0,D.kd,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWe=new A.G(!0,D.kd,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWS=new A.rv(!0,B.rq,null,null,null,null,B.ds,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eX8=new A.G(!0,D.kd,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXG=new A.G(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a6W=new A.rv(!0,B.RH,null,null,null,null,B.ds,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYF=new A.G(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ3=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_C=new A.G(!0,null,null,null,null,null,8,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_G=new A.G(!0,G.ir,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0V=new A.G(!0,B.M,null,null,null,null,13,B.a5,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1D=new A.G(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2l=new A.G(!0,B.bW,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2p=new A.G(!0,B.bI,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2M=new A.G(!0,D.Er,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2V=new A.G(!0,B.aZ,null,null,null,null,13,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3T=new A.G(!0,B.d_,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4m=new A.G(!0,B.bW,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4L=new A.G(!0,B.aZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6b=new A.G(!0,B.ak,null,null,null,null,11.5,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6j=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPT=new A.G(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7r=new A.G(!0,B.ak,null,null,null,null,12,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7Z=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8l=new A.G(!0,G.ir,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8t=new A.G(!0,G.ir,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9e=new A.x("Themes",null,B.p1,null,null,null,null,null,null,null,null,null)
D.f9R=new A.x("Add Item",null,B.cj,null,null,null,null,null,null,null,null,null)
D.f_l=new A.G(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faf=new A.x("Debt receipt",null,D.f_l,null,B.L,null,null,null,null,null,null,null)
D.aPO=new A.G(!0,B.ak,null,null,null,null,11,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fax=new A.x("Person who owes",null,D.aPO,null,null,null,null,null,null,null,null,null)
D.fbt=new A.x("Notes",null,B.a74,null,null,null,null,null,null,null,null,null)
D.fbT=new A.x("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.eZl=new A.G(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbX=new A.x("Share",null,D.eZl,null,null,null,null,null,null,null,null,null)
D.fcR=new A.x("Move your family trees",null,D.aPT,null,null,null,null,null,null,null,null,null)
D.fdr=new A.x("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fe2=new A.x("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.ffg=new A.x("Remove this book?",null,B.ho,null,null,null,null,null,null,null,null,null)
D.aQj=new A.x("Download",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fgn=new A.x("What should the AI do?",null,B.dq,null,null,null,null,null,null,null,null,null)
D.fhK=new A.x("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fiR=new A.x("Ribbon bookmark",null,B.iG,null,null,null,null,null,null,null,null,null)
D.f65=new A.G(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjl=new A.x("NGMY.ORG",null,D.f65,null,B.L,null,null,null,null,null,null,null)
D.fkB=new A.x("Scan family tree QR",null,B.cy,null,null,null,null,null,null,null,null,null)
D.f2E=new A.G(!0,B.c,null,null,null,null,13,B.a5,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flk=new A.x("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.f2E,null,B.L,null,null,null,null,null,null,null)
D.fmw=new A.x("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fmD=new A.x("Thumbnail",null,B.p1,null,null,null,null,null,null,null,null,null)
D.fnc=new A.x("Save the cover",null,B.cy,null,null,null,null,null,null,null,null,null)
D.fnC=new A.x("Your photos",null,B.p1,null,null,null,null,null,null,null,null,null)
D.fnR=new A.x("Create Project",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fol=new A.x("Design your cover",null,U.rD,null,null,null,null,null,null,null,null,null)
D.fot=new A.x("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fow=new A.x("PICTURE",null,H.mH,null,null,null,null,null,null,null,null,null)
D.foS=new A.x("Paid",null,B.cj,null,null,null,null,null,null,null,null,null)
D.foU=new A.x("You can undo it right after.",null,T.Td,null,null,null,null,null,null,null,null,null)
D.fpp=new A.x("Print",null,B.uy,null,null,null,null,null,null,null,null,null)
D.fpL=new A.x("Amount owed",null,D.aPO,null,null,null,null,null,null,null,null,null)
D.fpZ=new A.x("Got it",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fqy=new A.x("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fqB=new A.x("Add to budget",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fr2=new A.x("Debtor signature",null,B.a74,null,null,null,null,null,null,null,null,null)
D.frb=new A.x("Change icon",null,E.aP5,null,null,null,null,null,null,null,null,null)
D.fsm=new A.x("Family tree QR",null,B.cy,null,null,null,null,null,null,null,null,null)
D.fsM=new A.x("Download",null,B.uy,null,null,null,null,null,null,null,null,null)
D.fsQ=new A.x("Change",null,B.p1,null,null,null,null,null,null,null,null,null)
D.ftG=new A.x("Clear all",null,B.cj,null,null,null,null,null,null,null,null,null)
D.ftJ=new A.x("WHAT SHOULD IT CHANGE?",null,H.mH,null,null,null,null,null,null,null,null,null)
D.fui=new A.x("COLOUR",null,H.mH,null,null,null,null,null,null,null,null,null)
D.fuu=new A.x("Do it",null,B.cy,null,null,null,null,null,null,null,null,null)
D.fux=new A.x("Create Tree",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fvv=new A.x("Create Family Tree",null,B.eV,null,null,null,null,null,null,null,null,null)
D.eUN=new A.G(!0,E.jO,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvL=new A.x("Write the first page myself",null,D.eUN,null,null,null,null,null,null,null,null,null)
D.fwh=new A.x("Use this header",null,B.cy,null,null,null,null,null,null,null,null,null)
D.fwn=new A.x("Create Project",null,E.aPx,null,null,null,null,null,null,null,null,null)
D.fMe=new C.aaW(1,"header")
D.a8g=new C.aaW(2,"projects")
D.fMf=new C.aaW(3,"cashier")
D.a8h=new C.aaW(4,"familyTree")
D.fXE=new C.cvH(0,"start")
D.fXF=new C.cvI(0,"start")
D.fMw=new C.XU(null)
D.fNv=new C.Yl(null)
D.dk7=new A.bk(B.i3,[],A.ax("bk<n,Fq>"))
D.d3R=w([],x.E)
D.d3S=w([],x.M)
D.fO1=new C.bdu(D.dk7,D.d3R,D.d3S,0,0,null,null)
D.fQg=new C.ZJ(null)
D.a8Z=new C.aIL(0,"projects")
D.aUt=new C.aIL(1,"cashier")
D.fVv=new C.aIL(2,"familyTree")})()};
(a=>{a["EnUAbKHeNc4x07pnzIZPkgENxoM="]=a.current})($__dart_deferred_initializers__);