((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,T,H,M,I,U,E,K,C={
bHg(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bHg=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.w1(null,""),$async$bHg)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.X(y.z)
t=A.nq(b1)
s=A.c1(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.ds(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cV(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.I)(h),++d){a0=h[d]
f.push(A.J(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.X.av(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.ro(t,a1,B.ib,"book",B.Hn),$async$bHg)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=A.RQ(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.X(l!=null&&A.Mc(l)?y.k:y.y)
for(j=J.a6(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a1(r.a(j.h(a2,a7)),q,p):B.cG
g=a8.h(0,"title")
a9=B.a.i(A.v(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.v(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.y(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=A.a4e(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHg,v)},
aiH(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aiH=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.w1(null,""),$async$aiH)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.X(y.z)
t=A.nq(b6)
s=x.S
r=A.cU(c1,0,A.dy(4,"count",s),A.T(c1).c)
q=A.a4_(new A.N(r,new C.fTA(),r.$ti.k("N<ak.E,q>")).aM(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fTz(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.X.av(b7,null)+"\nAllowed values: style one of "+B.d.aM(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aiH)
case 6:l=c5
k=A.RQ(l==null?"":l)
if(k==null)throw A.X("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.v(s==null?"I updated the cover.":s)
r=x.f
u=new C.aqs(s,D.dKP,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.t
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.X("There is no page to change.")
h=A.S(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.ds(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.I)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.J(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.X.av(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aiH)
case 10:l=c5
k=l==null?null:A.RQ(l)
if(k==null)throw A.X(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.v(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.v(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d4(a8,d),a5=J.aT(a2.a),a2=a2.$ti,a7=new A.kR(a5,a2.k("kR<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gP(a5))
b0=J.a6(a9)
b1=A.aI(b0.h(a9,"index"))
i=b1==null?null:B.i.M(b1)
if(i==null||!B.d.q(a4,i))continue
b1=b0.h(a9,"title")
b2=B.a.i(A.v(b1==null?"":b1))
a9=b0.h(a9,"body")
b3=B.a.i(A.v(a9==null?"":a9))
a9=b2.length===0
if(a9&&b3.length===0)continue
a9=a9?c1[i].a:b2
h.n(0,i,new A.y(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("b8<2>")
p=A.cF(new A.b8(h,s),new C.fTB(),s.k("M.E"),p)
p=A.a4_(A.pP(p,3,A.a4(p).k("M.E")).aM(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cs<1>")
b4=A.B(new A.cs(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(A.a4e(s,b9),$async$aiH)
case 13:b5=c5
for(s=J.a6(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aqs(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aiH,v)},
hMi(d,e,f){return A.cg(null,B.v.j(0.65),!1,null,new C.h2N(e,f),d,null,!0,!0,x.g2)},
aqs:function aqs(d,e,f){this.a=d
this.b=e
this.c=f},
fTA:function fTA(){},
fTz:function fTz(d){this.a=d},
fTB:function fTB(){},
h2N:function h2N(d,e){this.a=d
this.b=e},
bEX(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bEX=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aS(b1,new C.fGB())){u=null
w=1
break}t=B.d.cw(b1,new C.fGC())
s=$.R()
r=new A.po(new A.oU())
q=A.wb(r,D.aTR)
p=A.L()
p.r=B.c.gp(0)
q.aE(D.aTR,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.ab
o.d=B.bG
o.e=B.dM
n=new C.fGH(t)
if(!t){for(s=b1.length,m=1/0,l=1/0,k=0,j=0,i=0;i<s;++i){h=b1[i]
if(h==null)continue
g=h.a
if(g<m)m=g
f=h.b
if(f<l)l=f
if(g>k)k=g
if(f>j)j=f}e=B.i.D(k-m,1,1e4)
d=B.i.D(j-l,1,1e4)
a0=B.i.D(478.40000000000003/e,0,147.20000000000002/d)
a1=(520-e*a0)/2
a2=(160-d*a0)/2
s=$.R()
p=A.a([],x.v)
a3=new A.aG(s.r,B.aj,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.aZ(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()}}q.af(a3,o)}else{p=A.a([],x.v)
a3=new A.aG(s.r,B.aj,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.aZ(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()}}q.af(a3,o)}w=4
return A.b(r.nw().vJ(520,160),$async$bEX)
case 4:w=3
return A.b(b3.hk(B.hm),$async$bEX)
case 3:b0=b3
u=b0==null?null:J.eQ(B.dI.gaU(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEX,v)},
fRf(d){return C.ir2(d)},
ir2(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fRf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bkU()
n=d.x!=null&&d.zV(null).length===0
if(d.x!=null)t=n?D.B0:D.Kq
else t=d.gV3()?D.Kq:D.aOH
w=3
return A.b(C.bEX(d.ax),$async$fRf)
case 3:s=f
p.a=null
if(s!=null)p.a=A.ap4(s)
r=A.a5Y(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aOH}else{p.c=C.xu(q,!0)
p.b=n?D.B0:D.Kq}r.a4M(A.hdx(new C.fRh(p,d,new C.fRi(),t,n,o),null,D.bJQ,B.xK))
u=r.jG(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fRf,v)},
fYb(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fYb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fRf(d),$async$fYb)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.az(q,0,40)
u=A.HH(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fYb,v)},
fGB:function fGB(){},
fGC:function fGC(){},
fGH:function fGH(d){this.a=d},
fRi:function fRi(){},
fRh:function fRh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fRg:function fRg(){},
h3f(d,e){var w=0,v=A.j(x.H)
var $async$h3f=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,B.v.j(0.55),!0,null,new C.h3j(new A.cC(null,x.eF),e),d,null,!0,!0,x.H),$async$h3f)
case 2:return A.h(null,v)}})
return A.i($async$h3f,v)},
bHJ(d,e,f,g){return C.iyO(d,e,f,g)},
iyO(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bHJ=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cE.aK(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.U(D.fxi)
w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.h3b(g,r,f),d,null,!0,!0,x.H),$async$bHJ)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bHJ,v)},
h3k(d,e){var w=0,v=A.j(x.H)
var $async$h3k=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,null,!0,null,new C.h3n(new A.cC(null,x.eF),e),d,null,!0,!0,x.H),$async$h3k)
case 2:return A.h(null,v)}})
return A.i($async$h3k,v)},
b0R:function b0R(d,e){this.c=d
this.a=e},
c9I:function c9I(){},
be9:function be9(d,e){this.b=d
this.a=e},
h3j:function h3j(d,e){this.a=d
this.b=e},
h3g:function h3g(d){this.a=d},
h3h:function h3h(d,e,f){this.a=d
this.b=e
this.c=f},
h3i:function h3i(d,e){this.a=d
this.b=e},
h3b:function h3b(d,e,f){this.a=d
this.b=e
this.c=f},
h39:function h39(d){this.a=d},
h3a:function h3a(d,e,f){this.a=d
this.b=e
this.c=f},
h3n:function h3n(d,e){this.a=d
this.b=e},
h3l:function h3l(d){this.a=d},
h3m:function h3m(d,e,f){this.a=d
this.b=e
this.c=f},
fLv(d,e){var w=0,v=A.j(x.y),u,t
var $async$fLv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3K(d),$async$fLv)
case 3:t=g
J.n1(t,new C.fLw(e))
u=A.ajl(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fLv,v)},
fLw:function fLw(d){this.a=d},
aqF:function aqF(d,e,f){this.c=d
this.d=e
this.a=f},
aFu:function aFu(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dSV:function dSV(d,e){this.a=d
this.b=e},
dSG:function dSG(d,e){this.a=d
this.b=e},
dSJ:function dSJ(d,e,f){this.a=d
this.b=e
this.c=f},
dSI:function dSI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSH:function dSH(d,e){this.a=d
this.b=e},
dSK:function dSK(d,e){this.a=d
this.b=e},
dSE:function dSE(){},
dSF:function dSF(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dSD:function dSD(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dSo:function dSo(d){this.a=d},
dSp:function dSp(d,e,f){this.a=d
this.b=e
this.c=f},
dSq:function dSq(d,e){this.a=d
this.b=e},
dSn:function dSn(d){this.a=d},
dSv:function dSv(d,e){this.a=d
this.b=e},
dSm:function dSm(d){this.a=d},
dSw:function dSw(d,e,f){this.a=d
this.b=e
this.c=f},
dSx:function dSx(d,e,f){this.a=d
this.b=e
this.c=f},
dSl:function dSl(d,e){this.a=d
this.b=e},
dSy:function dSy(d,e,f){this.a=d
this.b=e
this.c=f},
dSk:function dSk(d,e){this.a=d
this.b=e},
dSz:function dSz(d,e){this.a=d
this.b=e},
dSj:function dSj(d){this.a=d},
dSA:function dSA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSh:function dSh(){},
dSb:function dSb(d){this.a=d},
dSc:function dSc(d){this.a=d},
dSi:function dSi(d,e){this.a=d
this.b=e},
dSB:function dSB(d,e){this.a=d
this.b=e},
dSg:function dSg(d){this.a=d},
dSC:function dSC(d){this.a=d},
dSf:function dSf(){},
dSr:function dSr(d,e){this.a=d
this.b=e},
dSe:function dSe(d){this.a=d},
dSs:function dSs(d,e,f){this.a=d
this.b=e
this.c=f},
dSd:function dSd(d,e){this.a=d
this.b=e},
dSa:function dSa(d,e){this.a=d
this.b=e},
dSt:function dSt(d){this.a=d},
dSu:function dSu(d,e,f){this.a=d
this.b=e
this.c=f},
dSY:function dSY(){},
dSZ:function dSZ(d,e){this.a=d
this.b=e},
dSW:function dSW(d){this.a=d},
dSX:function dSX(d){this.a=d},
dSS:function dSS(d,e){this.a=d
this.b=e},
dST:function dST(d){this.a=d},
dSL:function dSL(d,e,f){this.a=d
this.b=e
this.c=f},
dSM:function dSM(d,e,f){this.a=d
this.b=e
this.c=f},
dSN:function dSN(d,e,f){this.a=d
this.b=e
this.c=f},
dSO:function dSO(d,e,f){this.a=d
this.b=e
this.c=f},
dSP:function dSP(d,e,f){this.a=d
this.b=e
this.c=f},
dSQ:function dSQ(d,e,f){this.a=d
this.b=e
this.c=f},
dSR:function dSR(d,e,f){this.a=d
this.b=e
this.c=f},
dT_:function dT_(){},
dT0:function dT0(){},
dT1:function dT1(){},
dT2:function dT2(d){this.a=d},
dSU:function dSU(d,e){this.a=d
this.b=e},
hHO(d){return B.d.dA(D.a6a,new C.fMh(d),new C.fMi())},
uX:function uX(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fMh:function fMh(d){this.a=d},
fMi:function fMi(){},
amG:function amG(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aXz:function aXz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Un:function Un(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhM:function bhM(){this.d=$
this.c=this.a=null},
div:function div(d,e){this.a=d
this.b=e},
dit:function dit(d,e){this.a=d
this.b=e},
diu:function diu(){},
diw:function diw(d,e){this.a=d
this.b=e},
hrM(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bh(J.k(u==null?"":u))
return new C.nx(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LY(d,e){return C.ipJ(d,e)},
ipJ(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LY=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$LY)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aW(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.X.aP(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.d4(p,x.f)
o=A.cF(o,new C.fOP(),o.$ti.k("M.E"),x.B)
n=A.a4(o).k("Y<M.E>")
o=A.B(new A.Y(o,new C.fOQ(),n),n.k("M.E"))
B.d.b_(o,new C.fOR())
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
return A.i($async$LY,v)},
BF(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$BF=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$BF)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.ba(f,new C.h1R(),x.a)
r=A.B(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aF("String","ngmy_family_book_v1_"+s+"_"+e,B.X.av(r,null)),$async$BF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$BF,v)},
aTH(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aTH=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LY(d,e),$async$aTH)
case 2:u=h
t=J.cG(u)
s=t.bk(u,new C.haw(f))
if(s===-1)t.ca(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.BF(d,e,u),$async$aTH)
case 3:return A.h(null,v)}})
return A.i($async$aTH,v)},
bFs(d,e,f){var w=0,v=A.j(x.H),u
var $async$bFs=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LY(d,e),$async$bFs)
case 2:u=h
J.n1(u,new C.fLn(f))
w=3
return A.b(C.BF(d,e,u),$async$bFs)
case 3:return A.h(null,v)}})
return A.i($async$bFs,v)},
bFI(d,e){return C.ipI(d,e)},
ipI(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bFI=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bFI)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aW(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Px
w=1
break}p=B.X.aP(0,q,null)
if(x.f.b(p)){o=A.a1(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aI(o.h(0,"emblem"))
k=k==null?null:B.i.M(k)
if(k==null)k=0
if(D.Ev.an(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aI(o.h(0,"titleSize"))
if(i==null)i=null
i=B.i.D(i==null?25:i,18,36)
h=B.d.q(D.a7T,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.q(D.a7c,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.q(D.a78,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.dbb,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.IE(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Px
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Px
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bFI,v)},
T_(d,e,f){return C.iyj(d,e,f)},
iyj(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$T_=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$T_)
case 7:r=h
w=8
return A.b(r.aF("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.X.av(f.ak(),null)),$async$T_)
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
return A.i($async$T_,v)},
Sq(d,e){return C.ipK(d,e)},
ipK(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Sq=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Sq)
case 7:r=g
q=r.qI("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.LY(d,e),$async$Sq)
case 8:if(!j.cK(g)){n=B.a.i(d.toLowerCase())
m=J.lr(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aF("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Sq)
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
return A.i($async$Sq,v)},
ai0(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ai0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sq(d,e),$async$ai0)
case 3:s=g
r=J.a6(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.I(s,t)
w=5
return A.b(A.az(),$async$ai0)
case 5:w=4
return A.b(g.aF("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ai0)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ai0,v)},
a4q(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a4q=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Sq(d,e),$async$a4q)
case 2:s=h
J.fO(s,f)
w=3
return A.b(A.az(),$async$a4q)
case 3:u=h
w=4
return A.b(u.aF("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a4q)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4q)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4q)
case 6:return A.h(null,v)}})
return A.i($async$a4q,v)},
nx:function nx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fOP:function fOP(){},
fOQ:function fOQ(){},
fOR:function fOR(){},
h1R:function h1R(){},
haw:function haw(d){this.a=d},
fLn:function fLn(d){this.a=d},
IE:function IE(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bT5:function bT5(d){this.a=d},
iyD(d,e,f,g,h,i,j){return A.a8(d,!1).cb(A.e9(new C.h2r(j,i,f,e,h,g),!0,null,x.H))},
Sm(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Sm=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sq(h,g),$async$Sm)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.U(D.aWe)
u=!1
w=1
break}w=4
return A.b(C.hMi(d,f,e),$async$Sm)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ai0(h,g),$async$Sm)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nx(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.BF(h,r,p),$async$Sm)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.T_(h,r,new C.IE("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Sm)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Sm,v)},
h2r:function h2r(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a02:function a02(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aCs:function aCs(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dja:function dja(d){this.a=d},
dj9:function dj9(d,e){this.a=d
this.b=e},
diZ:function diZ(d,e){this.a=d
this.b=e},
diW:function diW(d,e){this.a=d
this.b=e},
dix:function dix(d){this.a=d},
diy:function diy(d,e){this.a=d
this.b=e},
dj_:function dj_(d){this.a=d},
diG:function diG(d){this.a=d},
diE:function diE(d){this.a=d},
diF:function diF(d){this.a=d},
diH:function diH(d){this.a=d},
diX:function diX(d){this.a=d},
diY:function diY(){},
diC:function diC(d){this.a=d},
diD:function diD(d,e){this.a=d
this.b=e},
diI:function diI(d){this.a=d},
diJ:function diJ(d,e){this.a=d
this.b=e},
dj8:function dj8(d){this.a=d},
dj7:function dj7(d,e){this.a=d
this.b=e},
dj6:function dj6(d){this.a=d},
diT:function diT(d){this.a=d},
diS:function diS(d){this.a=d},
diU:function diU(d){this.a=d},
diz:function diz(d,e){this.a=d
this.b=e},
diV:function diV(d,e){this.a=d
this.b=e},
diM:function diM(d){this.a=d},
diN:function diN(d){this.a=d},
diL:function diL(){},
diO:function diO(d){this.a=d},
diP:function diP(d){this.a=d},
diQ:function diQ(d,e){this.a=d
this.b=e},
diR:function diR(d,e,f){this.a=d
this.b=e
this.c=f},
diK:function diK(d,e){this.a=d
this.b=e},
dj1:function dj1(d){this.a=d},
dj0:function dj0(){},
dj2:function dj2(d){this.a=d},
dj3:function dj3(d){this.a=d},
dj4:function dj4(d){this.a=d},
dj5:function dj5(d,e){this.a=d
this.b=e},
diA:function diA(d){this.a=d},
diB:function diB(d){this.a=d},
a06:function a06(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bia:function bia(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dkX:function dkX(d){this.a=d},
dkY:function dkY(d){this.a=d},
dkW:function dkW(d){this.a=d},
dkZ:function dkZ(d){this.a=d},
dkV:function dkV(d){this.a=d},
dl_:function dl_(d){this.a=d},
dkU:function dkU(d){this.a=d},
dl0:function dl0(d,e){this.a=d
this.b=e},
dkT:function dkT(d,e){this.a=d
this.b=e},
dl1:function dl1(d,e){this.a=d
this.b=e},
a04:function a04(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ags:function ags(d,e,f){this.a=d
this.b=e
this.c=f},
aCv:function aCv(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
djp:function djp(d,e){this.a=d
this.b=e},
djo:function djo(d,e){this.a=d
this.b=e},
djt:function djt(d){this.a=d},
djs:function djs(d,e){this.a=d
this.b=e},
djq:function djq(d){this.a=d},
djr:function djr(d){this.a=d},
dju:function dju(d){this.a=d},
djv:function djv(d){this.a=d},
djn:function djn(d,e){this.a=d
this.b=e},
djm:function djm(d,e){this.a=d
this.b=e},
L0:function L0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_i:function a_i(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cRi:function cRi(d){this.a=d},
cRj:function cRj(){},
cRk:function cRk(d){this.a=d},
bfm:function bfm(d,e,f){this.b=d
this.c=e
this.a=f},
bfd:function bfd(d,e){this.b=d
this.a=e},
uY:function uY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_D:function a_D(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfk:function bfk(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
dah:function dah(d,e,f){this.a=d
this.b=e
this.c=f},
dag:function dag(d,e){this.a=d
this.b=e},
daG:function daG(d){this.a=d},
dat:function dat(){},
daH:function daH(d){this.a=d},
das:function das(){},
daI:function daI(d,e){this.a=d
this.b=e},
dar:function dar(d,e){this.a=d
this.b=e},
daJ:function daJ(d,e){this.a=d
this.b=e},
daq:function daq(d,e){this.a=d
this.b=e},
daK:function daK(d){this.a=d},
dap:function dap(){},
daL:function daL(d,e){this.a=d
this.b=e},
dao:function dao(d,e){this.a=d
this.b=e},
daM:function daM(d){this.a=d},
daB:function daB(d,e){this.a=d
this.b=e},
daN:function daN(d){this.a=d},
daO:function daO(d){this.a=d},
daQ:function daQ(d){this.a=d},
daR:function daR(d){this.a=d},
daA:function daA(d,e){this.a=d
this.b=e},
daS:function daS(d,e){this.a=d
this.b=e},
aJD:function aJD(d){this.a=d},
bkJ:function bkJ(d){this.a=d},
bdu:function bdu(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
amH:function amH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a2k:function a2k(d,e){this.a=d
this.b=e},
amI:function amI(d,e,f,g,h,i){var _=this
_.e=_.d=$
_.f=d
_.r=e
_.w=f
_.x=$
_.z=_.y=null
_.Q=g
_.cx=_.CW=_.ay=_.ax=_.at=_.as=0
_.cy=0.35
_.db=""
_.dx=0
_.fr=_.dy=!1
_.bu$=h
_.a9$=i
_.c=_.a=null},
bTf:function bTf(d){this.a=d},
bT9:function bT9(d){this.a=d},
bT8:function bT8(d,e){this.a=d
this.b=e},
bTi:function bTi(d){this.a=d},
bTa:function bTa(d){this.a=d},
bTb:function bTb(d){this.a=d},
bTe:function bTe(d){this.a=d},
bTd:function bTd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTg:function bTg(d,e){this.a=d
this.b=e},
bTh:function bTh(){},
bTc:function bTc(d){this.a=d},
bT6:function bT6(d,e){this.a=d
this.b=e},
bT7:function bT7(d){this.a=d},
bqk:function bqk(d,e){this.b=d
this.a=e},
aCt:function aCt(){},
iH(d,e){var w
$.R()
w=A.L()
w.b=B.ab
w.c=e
w.r=d.gp(0)
w.d=B.bG
w.e=B.dM
return w},
bEZ(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.br(j.save())
j.translate(e.a,e.b)
d.nM(0,a0?-f:f,f)
w=A.bY(B.hA,8,36)
v=B.v.j(0.3)
u=$.R()
t=A.L()
t.r=v.gp(0)
d.c1(w,t)
w=a1===D.Ye
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.v,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eyM,new A.r(-4+v,-2),C.iH(q,5))
d.ah(D.ewp,new A.r(4-v,-2),C.iH(q,5))}else{t=A.bY(B.Kh,14,40)
p=A.L()
p.r=v.gp(0)
d.c1(t,p)}v=u.r
u=x.v
o=new A.aG(v,B.aj,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.ch(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.ch(15,-40,11,t))
o.E(new A.by())
t=A.L()
t.r=w.gp(0)
d.af(o,t)
u=new A.aG(v,B.aj,k,k,A.a([],u))
u.E(new A.aZ(-12,-50-r))
v=-46-r
u.E(new A.aq(12,v))
u.E(new A.aq(12.5,-42-r))
u.E(new A.aq(-12.5,v))
u.E(new A.by())
v=A.L()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b3a){n=-52+w*14
d.ah(new A.r(10,n-22),new A.r(10,n+44),C.iH(B.Gz,3.4))
d.ah(D.ez2,new A.r(9,n),C.iH(q,4))
d.ah(D.ewQ,new A.r(10,n),C.iH(q,4))}else if(a1===D.b3b){d.ah(D.exT,new A.r(-8,-26-Math.max(0,w)*6),C.iH(q,4))
d.ah(D.euS,new A.r(8,-26-Math.max(0,-w)*6),C.iH(q,4))}else{w=s*3
v=-38-r
d.ah(D.exX,new A.r(-12-w,v),C.iH(q,4))
d.ah(D.aNH,new A.r(12+w,v),C.iH(q,4))}w=A.L()
w.r=q.gp(0)
d.aE(D.fk6,w)
m=new A.r(0,-77-r)
w=A.bY(m,22,19)
v=A.L()
v.r=q.gp(0)
d.c1(w,v)
w=h.y
if(w!=null){v=A.bY(m.a5(0,B.vT),15,24)
u=A.L()
u.r=w.gp(0)
d.c1(v,u)
u=m.a5(0,D.euM)
v=A.L()
v.r=w.gp(0)
d.O(u,4,v)}else{w=A.bY(m.a5(0,B.tY),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cQ(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a5(0,D.ez0),m.a5(0,D.exR),C.iH(v,2.2))
d.ah(m.a5(0,D.ewP),m.a5(0,D.euJ),C.iH(v,2.2))}if(w===4){w=m.a5(0,D.ez4)
u=A.L()
u.r=v.gp(0)
d.O(w,6,u)
u=m.a5(0,D.ewR)
w=A.L()
w.r=v.gp(0)
d.O(u,6,w)}}w=m.a5(0,D.exG)
v=A.L()
v.r=B.ip.gp(0)
d.O(w,0.9,v)
v=m.a5(0,D.exv)
w=A.L()
w.r=B.ip.gp(0)
d.O(v,0.9,w)
if(i){l=m.a5(0,B.aa0)
w=A.bY(l,21,22)
v=A.L()
v.r=D.lM.gp(0)
d.c1(w,v)
v=A.bY(l.a5(0,B.aNE),5,12)
w=A.L()
w.r=D.biz.gp(0)
d.c1(v,w)
d.ah(l.a5(0,D.eyX),l.a5(0,B.aO1),C.iH(B.cV,1.4))
d.ah(D.aNH,new A.r(15,-88-r),C.iH(q,3.6))}j.restore()},
hGs(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.br(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bV(0,f)
v=A.bY(B.dQ,18,96)
u=B.v.j(0.28)
$.R()
t=A.L()
t.r=u.gp(0)
d.c1(v,t)
t=A.bY(B.dQ,11,70)
v=B.v.j(0.2)
u=A.L()
u.r=v.gp(0)
d.c1(t,u)
d.lB(D.aTV,A.L())
C.ief(d,g,h,i,j)
s=(k==null?D.aa5:k).a-w>=0?1:-1
w=A.L()
w.a=B.MD
w.sam(A.jD(new A.r(s*70,-60),new A.r(-s*70,-60),A.a([D.ak4.j(0.5),D.ak4.j(0.12),D.bqe.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aE(D.aTV,w)
r.restore()
r.restore()},
ief(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.v,0.28)
a0.toString
w=A.ap(d,B.c,0.16)
w.toString
v=a2.b
u=A.ap(v,B.v,0.32)
u.toString
t=Math.sin(a4*1.9+a5)*0.8
s=a2.w
r=s?1.06:1
q=s?0.86:1
s=A.bu(D.fk7,B.u2)
p=$.R()
o=A.L()
o.r=u.gp(0)
a1.aq(s,o)
o=A.bu(D.fk2,B.hQ)
s=A.ap(v,B.v,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.aq(o,n)
n=A.bu(D.fkg,B.hQ)
o=A.ap(v,B.v,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.aq(n,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.fk9,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.fiT,s)
s=a1.c
J.br(s.save())
s.translate(a3.w,0)
J.br(s.save())
a1.nM(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aG(p.r,B.aj,e,e,A.a([],n))
p=-m
k=p+2
l.E(new A.aZ(k,-58))
l.E(new A.ch(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.ch(m+3,-62,m-2,-58))
l.E(new A.ch(0,-70,k,-58))
l.E(new A.by())
k=A.L()
k.r=v.gp(0)
a1.af(l,k)
J.br(s.save())
a1.mz(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.die[j]
i=new A.ar(B.T,B.Q,B.V,B.W,B.U)
i.b=B.ab
i.c=5
i.r=k.gp(0)
i.d=B.bG
i.e=B.dM
a1.ah(new A.r(-34+u,-64),new A.r(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.ar(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.R()
f=new A.ar(B.T,B.Q,B.V,B.W,B.U)
f.r=i.gp(0)
a1.O(new A.r(g,h),3.6,f)
f=new A.ar(B.T,B.Q,B.V,B.W,B.U)
f.r=u.gp(0)
a1.O(new A.r(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ar(B.T,B.Q,B.V,B.W,B.U)
i.b=B.ab
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dM
a1.ah(new A.r(g,-64),new A.r(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ar(B.T,B.Q,B.V,B.W,B.U)
i.b=B.ab
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dM
a1.ah(new A.r(-30,h),new A.r(30,h),i)}break
default:a1.ah(D.eyp,D.evx,C.iH(a2.c.j(0.9),3))}a1.ah(D.eyY,D.exZ,C.iH(B.v.j(0.18),1.6))
a1.ah(D.euR,B.aNJ,C.iH(B.v.j(0.18),1.6))
u=B.v.j(0.12)
k=$.R()
i=A.L()
i.r=u.gp(0)
a1.aE(D.fiP,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.aE(D.fj2,i)
n=new A.aG(k.r,B.aj,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.ch(0,-57,9,-66))
n.E(new A.ch(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cQ(D.fjb,0.1,2.941592653589793,!1,C.iH(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.aaa
n=25*q
k=23*q
i=9*q
C.hCn(a1,new A.r(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.EX:o
C.hCn(a1,new A.r(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.ewh,D.ewd,C.iH(D.al3,4))
a1.ah(D.ewf,D.ewb,C.iH(D.H_.j(0.7),1.4))
u=A.L()
u.r=B.cV.gp(0)
a1.O(D.ewe,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.br(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jq(0,a3.f)
a1.bV(0,r)
C.iea(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hCn(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aJ(0,e),r=s.gcJ(),q=r===0?B.hA:s.eW(0,r),p=B.i.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.r(o,w)
if(o*i<0)v=new A.r(-o,-w)
u=e.a5(0,q.aN(0,n)).a5(0,v.aN(0,m))
t=e.a5(0,q.aN(0,p))
d.ah(e,u,C.iH(j,l))
o=A.ap(j,B.v,0.2)
o.toString
d.ah(e,u,C.iH(o,l*0.35))
d.ah(u,t,C.iH(k,l*0.78))
o=A.ap(k,B.v,0.22)
o.toString
d.ah(u,t,C.iH(o,l*0.22))
$.R()
o=A.L()
o.r=j.gp(0)
d.O(u,l*0.55,o)
o=A.bY(t,l*1.15,l)
w=A.L()
w.r=k.gp(0)
d.c1(o,w)
w=-l
w=t.a5(0,new A.r(i*w*0.45,w*0.1))
o=A.L()
o.r=k.gp(0)
d.O(w,l*0.28,o)},
iea(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bY(B.vS,40,38)
$.R()
v=A.L()
v.r=c0.gp(0)
c2.c1(w,v)}if(c1===4){$.R()
w=A.L()
w.r=c0.gp(0)
c2.O(D.ey6,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.O(D.ev7,9.5,w)}w=A.bY(D.ezj,10,6)
v=$.R()
u=A.L()
u.r=c8.gp(0)
c2.c1(w,u)
u=A.bY(D.exD,10,6)
w=A.L()
w.r=c8.gp(0)
c2.c1(u,w)
v=v.r
w=x.v
t=new A.aG(v,B.aj,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.hY(13,-20,17,-9,16,2))
t.E(new A.hY(15,13,8,20,0,20))
t.E(new A.hY(-8,20,-15,13,-16,2))
t.E(new A.hY(-17,-9,-13,-20,0,-20))
t.E(new A.by())
u=A.L()
u.sam(A.wm(D.eyO,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iH(c8.j(0.5),0.8)
c2.cQ(D.fki,3.455751918948773,2.5132741228718345,!1,s)
c2.cQ(D.fiW,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.ey3,B.aOa,s)
c2.ah(D.ev3,D.euV,s)
c2.cQ(D.fja,2.2,1.4,!1,s)
c2.cQ(D.fiU,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.T,B.Q,B.V,B.W,B.U)
n.r=c0.gp(0)
c2.O(new A.r(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fjp,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aG(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.ch(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.ch(0,-12,-13,-6))
p.E(new A.by())
o=A.L()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.exV,D.euW,C.iH(B.nC,1.4))
o=A.L()
o.r=c0.gp(0)
c2.O(D.ey9,3,o)
o=A.L()
o.r=c0.gp(0)
c2.O(D.ev8,3,o)
o=new A.aG(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.ch(-12,22,0,26))
o.E(new A.ch(12,22,13,6))
o.E(new A.ch(8,13,0,12))
o.E(new A.ch(-8,13,-13,6))
o.E(new A.by())
p=A.L()
p.r=B.hV.gp(0)
c2.af(o,p)
p=new A.aG(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.ch(0,6,7,8))
p.E(new A.ch(0,10.5,-7,8))
o=A.L()
o.r=B.bO.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aG(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-17,-4))
p.E(new A.ch(-20,-27,0,-29))
p.E(new A.ch(20,-27,17,-4))
p.E(new A.ch(0,-14,-17,-4))
p.E(new A.by())
o=A.L()
o.r=m.gp(0)
c2.af(p,o)
o=A.ap(m,B.v,0.3)
o.toString
c2.cQ(D.fjw,3.4,2.5,!1,C.iH(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cQ(D.fji,3.6,2.2,!1,C.iH(o,1.2))
o=new A.aG(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.ch(27,-34,25,-19))
o.E(new A.ch(18,-18,11,-22))
p=A.ap(m,B.c,0.1)
p.toString
n=A.L()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aG(v,B.aj,b9,b9,A.a([],w))
n.E(new A.aZ(11,-22))
n.E(new A.ch(24,-12,27,-26))
n.E(new A.ch(18,-22,11,-22))
o=A.ap(m,B.v,0.2)
o.toString
p=A.L()
p.r=o.gp(0)
c2.af(n,p)
p=A.L()
p.r=c3.c.gp(0)
c2.O(D.euX,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fjt,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.ar(B.T,B.Q,B.V,B.W,B.U)
o.b=B.ab
o.c=0.9
o.r=p.gp(0)
o.d=B.bG
o.e=B.dM
c2.ah(new A.r(r*3.6,-19+Math.abs(r)*0.8),new A.r(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=E.aEo[l]
o=new A.ar(B.T,B.Q,B.V,B.W,B.U)
o.b=B.ab
o.c=4.5
o.r=c0.gp(0)
o.d=B.bG
o.e=B.dM
c2.ah(new A.r(k,0),new A.r(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ar(B.T,B.Q,B.V,B.W,B.U)
o.r=p.gp(0)
c2.O(new A.r(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fjs,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(B.aa0,B.aa_,C.iH(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fiX,3.267256359733385,2.8902652413026098,!0,p)}i=B.i.D(c4.b,0,1)*0.4+0.1
p=A.bY(D.ez6,5,8)
o=D.ahi.j(i)
n=A.L()
n.r=o.gp(0)
c2.c1(p,n)
n=A.bY(D.exO,5,8)
p=D.ahi.j(i)
o=A.L()
o.r=p.gp(0)
c2.c1(n,o)
h=c4.e*2.4
o=new A.aG(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.ch(h-3.4,6,h-2.6,7.4))
o.E(new A.ch(h,8.8,h+2.6,7.4))
c2.af(o,C.iH(c8.j(0.75),1.1))
o=A.L()
o.r=c8.gp(0)
c2.O(new A.r(h-1.5,7.2),0.7,o)
o=A.L()
o.r=c8.gp(0)
c2.O(new A.r(h+1.5,7.2),0.7,o)
g=B.i.F(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=B.hn[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bY(new A.r(a5,-3),a3,7)
a6=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a6.r=B.c.j(0.96).gp(0)
c2.c1(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.br(d.save())
a6=A.a([],w)
a4=new A.aG(v,B.aj,b9,b9,a6)
a6.push(new A.jx(A.bY(new A.r(a5,-3),a3,7)))
a4.ac()
a3=a4.e
if(a3==null)a3=a4.e=new A.En(a4.gle().a.snapshot())
d.clipPath(a3.a,$.mD(),!0)
a3=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a3.r=D.bmu.gp(0)
c2.O(new A.r(a7,a8),2.1,a3)
a3=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a3.r=B.v.gp(0)
c2.O(new A.r(a7,a8),1.05,a3)
a3=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a3.r=B.c.gp(0)
c2.O(new A.r(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.a_r:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a9.b=B.ab
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bG
a9.e=B.dM
a3=p?0.8:0
c2.cQ(A.bY(new A.r(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.dR
else{b1=A.ap(c0,B.v,0.2)
b1.toString}b2=new A.ar(B.T,B.Q,B.V,B.W,B.U)
b2.b=B.ab
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bG
b2.e=B.dM
c2.ah(new A.r(a5-a4,b0-a6+0.4),new A.r(a5+a4,b0-0.6-a3),b2)}b3=B.i.D(c4.a,0,1)
if(o)b4=D.bx_
else{u=A.ap(c8,D.bqg,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.i.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aG(v,B.aj,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.ch(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.ch(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.by())
v=A.L()
v.r=D.bpy.gp(0)
c2.af(b8,v)
J.br(d.save())
c2.mz(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.aE(new A.a2(w,11,w+b6*2,13.2),u)
u=A.bY(new A.r(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.bx4.gp(0)
c2.c1(u,w)
d.restore()
c2.af(b8,C.iH(b4,1.1))}else{u=new A.aG(v,B.aj,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.ch(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iH(b4,1.5))
if(b5>0.6){w=new A.aG(v,B.aj,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.ch(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.ch(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.L()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cQ(D.fj9,-1.2,2.2,!1,C.iH(c8.j(0.5),0.8))
c2.cQ(D.fiZ,2.141592653589793,2.2,!1,C.iH(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.O(D.exw,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.O(D.ext,1.7,w)}},
ijG(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.R(),f=new A.po(new A.oU()),e=A.wb(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.sam(A.jD(B.J,new A.r(0,a0*0.46),D.deW,D.d62,B.x,h))
e.aE(new A.a2(0,0,0+d,0+a0),a2)
a2=e.c
J.br(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bV(0,a1)
w=new A.e_()
w.cU(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ar(B.T,B.Q,B.V,B.W,B.U)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.O(new A.r(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.br(a2.save())
a2.translate(200,120)
e.jq(0,-0.5)
d=A.L()
a0=x.O
d.sam(A.wm(B.J,230,A.a([D.bl8,B.L],a0),h,B.x,h,h,0))
e.c1(D.fjE,d)
a2.restore()
d=A.L()
d.sam(A.wm(D.aa8,58,A.a([D.boz,B.L],a0),h,B.x,h,h,0))
e.O(D.aa8,58,d)
d=A.L()
d.r=D.bjR.gp(0)
e.O(D.aa8,24,d)
d=A.L()
d.r=D.a_T.gp(0)
e.O(D.evR,5,d)
d=A.L()
d.r=D.a_T.gp(0)
e.O(D.evV,3.4,d)
d=A.L()
d.r=D.a_T.gp(0)
e.O(D.evU,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aG(g.r,B.aj,h,h,u)
u.push(new A.aZ(-60,420))
r.ac()
for(g=372+s*12,t=60+s*20,q=s*2,p=14-s*3,o=-60;o<=510;o+=8){n=new A.aq(o,g+Math.sin(o/t+q)*p+Math.sin(o/23+s)*3)
u.push(n)
m=r.f
if(m!=null)n.aj(m)
r.ac()}g=new A.aq(510,470)
u.push(g)
t=r.f
if(t!=null)g.aj(t)
r.ac()
g=new A.aq(-60,470)
u.push(g)
t=r.f
if(t!=null)g.aj(t)
r.ac()
g=new A.by()
u.push(g)
u=r.f
if(u!=null)g.aj(u)
r.ac()
g=[D.bin,D.bkp,D.bqA][s]
u=$.R()
t=new A.ar(B.T,B.Q,B.V,B.W,B.U)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cAp[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.T,B.Q,B.V,B.W,B.U)
u.b=B.ab
u.c=2.4
u.r=D.a0g.gp(0)
u.d=B.bG
u.e=B.dM
e.ah(new A.r(o,k),new A.r(g,d),u)
g=A.bY(new A.r(g,k-27),11,46)
u=new A.ar(B.T,B.Q,B.V,B.W,B.U)
u.r=D.a0g.gp(0)
e.c1(g,u)
d=A.bY(new A.r(o-12,d),8,24)
u=new A.ar(B.T,B.Q,B.V,B.W,B.U)
u.r=D.a0g.gp(0)
e.c1(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ar(B.T,B.Q,B.V,B.W,B.U)
u.r=D.bjU.j(0.8).gp(0)
e.O(new A.r(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.sam(A.jD(D.euq,D.eut,D.d84,B.xy,B.x,h))
e.aE(new A.a2(-200,412,650,1300),g)
j=new A.e_()
j.cU(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bY(new A.r(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h5()?B.c:B.v
d=new A.ar(B.T,B.Q,B.V,B.W,B.U)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.c1(u,d)}J.br(a2.save())
a2.translate(225,590)
e.nM(0,1,0.34)
g=A.L()
g.sam(A.wm(B.J,250,A.a([D.brA,D.bkK,D.btx],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.O(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.ajL,D.bjo,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.R()
a0=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a0.b=B.ab
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bG
a0.e=B.dM
e.ah(new A.r(o+i*2,k),new A.r(o+i*5,g+Math.abs(i)*3),a0)}}C.icq(e)
for(l=0;l<3;++l)C.ifE(e,D.aCa[l])
C.ift(e,D.evL)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.R()
a0=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a0.b=B.ab
a0.c=2.4
a0.r=D.a0b.gp(0)
a0.d=B.bG
a0.e=B.dM
e.ah(new A.r(o,452+g),new A.r(o+1,436+d),a0)}e.ah(D.euT,D.evb,C.iH(D.bk7,1.6))
a2.restore()
return f.nw()},
icq(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.R().r,g=x.v,f=new A.aG(h,B.aj,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.hY(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.hY(416,382,432,422,428,462))
f.E(new A.by())
w=A.L()
w.sam(A.jD(new A.r(354,0),new A.r(430,0),D.dDp,B.mw,B.x,i))
d.af(f,w)
v=new A.e_()
v.cU(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.v.j(0.18)
p=new A.ar(B.T,B.Q,B.V,B.W,B.U)
p.b=B.ab
p.c=1.1
p.r=q.gp(0)
p.d=B.bG
p.e=B.dM
d.ah(new A.r(t,s),new A.r(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.djF[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aG(h,B.aj,i,i,l)
l.push(new A.aZ(r,336))
k.ac()
r=new A.ch(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.aj(p)
k.ac()
r=new A.ar(B.T,B.Q,B.V,B.W,B.U)
r.b=B.ab
r.c=8
r.r=D.ai4.gp(0)
r.d=B.bG
r.e=B.dM
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ar(B.T,B.Q,B.V,B.W,B.U)
l.r=A.ap(D.bk_,D.bqy,v.ai()).j(0.92).gp(0)
d.O(new A.r(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.T,B.Q,B.V,B.W,B.U)
r.b=B.ab
r.c=1.2
r.r=D.a0b.gp(0)
r.d=B.bG
r.e=B.dM
d.ah(new A.r(w,q+8),new A.r(w,q+22),r)
q=A.bY(new A.r(w,q+28),13,7)
w=new A.ar(B.T,B.Q,B.V,B.W,B.U)
w.r=D.brX.gp(0)
d.c1(q,w)}},
ifE(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bY(new A.r(a5,a6+2),a9,a7*2.8),b1=B.v.j(0.3),b2=$.R(),b3=A.L()
b3.r=b1.gp(0)
b4.c1(b0,b3)
b2=b2.r
b3=x.v
w=new A.aG(b2,B.aj,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.aZ(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.ch(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.by())
u=A.L()
u.sam(A.jD(new A.r(b0,0),new A.r(v,0),D.djL,B.mw,B.x,a4))
b4.af(w,u)
t=new A.e_()
t.cU(B.o.T(a5*7))
v=b4.c
J.br(v.save())
b4.mz(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.v.j(0.14)
n=new A.ar(B.T,B.Q,B.V,B.W,B.U)
n.b=B.ab
n.c=1
n.r=o.gp(0)
n.d=B.bG
n.e=B.dM
b4.ah(new A.r(r,q),new A.r(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ajH.j(0.75)
n=A.L()
n.r=o.gp(0)
b4.aE(new A.a2(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.i.be(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aG(b2,B.aj,a4,a4,j)
j.push(new A.aZ(k,o))
i.ac()
h=new A.aq(k+5,n)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
h=new A.aq(k+10,o)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
h=new A.by()
j.push(h)
j=i.f
if(j!=null)h.aj(j)
i.ac()
j=new A.ar(B.T,B.Q,B.V,B.W,B.U)
j.r=D.lM.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aG(b2,B.aj,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.i.be(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.aj(n)
f.ac()}b4.af(f,C.iH(D.ajH.j(0.7),1.6))
v.restore()
b0=$.R().r
b2=new A.aG(b0,B.aj,a4,a4,A.a([],b3))
u=a7*0.1
p=a5+u
o=a7*0.28
n=p-o
m=a6+1
b2.E(new A.aZ(n,m))
j=a6-a8*0.55
b2.E(new A.aq(n,j))
o=p+o
b2.E(new A.ch(p,a6-a8*0.82,o,j))
b2.E(new A.aq(o,m))
b2.E(new A.by())
m=A.L()
m.r=D.ajT.gp(0)
b4.af(b2,m)
m=A.L()
m.r=D.ajT.gp(0)
b4.O(new A.r(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aG(b0,B.aj,a4,a4,A.a([],b3))
e.E(new A.aZ(o,j))
n=b1-m*0.55
e.E(new A.ch(a5-a9,n,a5,u))
e.E(new A.ch(a5+a9,n,p,j))
e.E(new A.ch(a5,b1+a7*0.34,o,j))
e.E(new A.by())
b1=A.L()
n=a7*1.4
b1.sam(A.jD(new A.r(a5-n,0),new A.r(a5+n,0),D.dnj,B.mw,B.x,a4))
b4.af(e,b1)
J.br(v.save())
b4.mz(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h5()?B.v:D.bjx).j(0.16)
i=new A.ar(B.T,B.Q,B.V,B.W,B.U)
i.b=B.ab
i.c=0.9
i.r=n.gp(0)
i.d=B.bG
i.e=B.dM
b4.ah(new A.r(a5+(p-0.5)*3,u),new A.r(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aG(b0,B.aj,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.ac()
n=new A.ch(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.aj(b1)
p.ac()
b1=B.v.j(0.22)
n=new A.ar(B.T,B.Q,B.V,B.W,B.U)
n.b=B.ab
n.c=1.2
n.r=b1.gp(0)
n.d=B.bG
n.e=B.dM
b4.af(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.ai()
b2=t.ai()
v=new A.ar(B.T,B.Q,B.V,B.W,B.U)
v.b=B.ab
v.c=1.1
v.r=D.br1.gp(0)
v.d=B.bG
v.e=B.dM
b4.ah(new A.r(a2,a3),new A.r(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aG(b0,B.aj,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.by())
b0=A.L()
b0.r=D.bmZ.gp(0)
b4.af(a9,b0)},
ift(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+E.aEl[s]
$.R()
q=new A.ar(B.T,B.Q,B.V,B.W,B.U)
q.b=B.ab
q.c=3
q.r=D.a0b.gp(0)
q.d=B.bG
q.e=B.dM
d.ah(new A.r(r,u),new A.r(r,t),q)}u=A.bY(e.a5(0,B.aND),24,36)
t=$.R()
r=A.L()
r.r=D.bwb.gp(0)
d.c1(u,r)
t=new A.aG(t.r,B.aj,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.ch(w,v-24,r,u))
t.E(new A.by())
u=A.L()
u.r=D.aiM.gp(0)
d.af(t,u)},
ieQ(d){switch(B.o.F(d,8)){case 0:return D.b2J
case 1:return D.b2H
case 2:return D.b2G
case 3:return D.b2F
case 4:return D.b2I
case 5:return D.b2K
case 6:return D.hKZ
default:return D.hKY}},
SY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bql()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.aaa:j
w.as=k==null?D.EX:k
C.hGs(d,e,p,C.ieQ(m),w,s,m,l)},
hHU(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bUU:function bUU(){var _=this
_.a=0
_.d=_.c=_.b=!1
_.e=0
_.r=_.f=-1
_.w=0.35
_.x=null
_.y=-1
_.z=null
_.Q=3
_.as=-1},
ti:function ti(d,e,f,g,h,i,j,k,l,m){var _=this
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
bql:function bql(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
an_:function an_(){this.b=this.a=null},
aXE:function aXE(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bUM:function bUM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUN:function bUN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUO:function bUO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUP:function bUP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUQ:function bUQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUR:function bUR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUS:function bUS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUT:function bUT(){},
bUL:function bUL(d){this.a=d},
agB:function agB(d,e){this.a=d
this.b=e},
aey:function aey(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Nj(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bTv(s)
s.bCZ(d)
return s},
Hh(d,e,f,g,h,i,j){var w,v=A.T(g).k("Y<1>")
v=A.cY(new A.Y(g,new C.fzi(f),v),v.k("M.E"))
w=A.B(v,A.a4(v).k("ci.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cU(w,0,A.dy(3,"count",x.S),A.T(w).c))
B.d.e0(v,d)
return new C.lw(e,v,B.d.cd(v,f),h,i,"tree",j)},
iAg(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.S(c0,x.cg),c2=new C.ham(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.js(c4,c0)
t=A.B(c4,A.a4(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.js(c4,c0)
r=A.B(c4,A.a4(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.js(c4,c0)
q=A.B(c4,A.a4(c4).k("ci.E"))
for(c4=w.length,v=A.T(t).k("Y<1>"),s=v.k("M.E"),p=A.T(w).k("Y<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.I)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.d()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.x2)g="father"
else g=h===D.oO?"mother":"parent"
h=B.a.i(i.b)
f=A.B(new A.Y(t,new C.hao(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.Hh(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.B(new A.Y(w,new C.hap(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.lw("True or false: "+h+" is the "+g+" of "+l+".",M.a6Z,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lw("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",M.a6Z,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Go(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.B(new A.Y(t,new C.haq(l,a0,c5),v),s)
e=a1.c
if(e===D.x2)e="son"
else e=e===D.oO?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.Hh(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.ew([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mw(a5,a5.r,f.k("mw<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.v(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.Hh(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.T(a0),a2=e.k("iF<1>"),a3=new A.iF(a0,1,b3,a2),a3.nb(a0,1,b3,e.c),a3=new A.bR(a3,a3.gJ(0),a2.k("bR<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.Hh(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.ase(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.B(new A.Y(t,new C.har(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.Hh(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.d()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.d()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.B(new A.Y(t,new C.has(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.x2
if(e)a2=b7
else a2=f===D.oO?b8:b9
if(e)f=b7
else f=f===D.oO?b8:b9
c2.$2("grand",C.Hh(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aNZ(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.B(new A.Y(t,new C.hat(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.Hh(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.B(r,c0)
B.d.u(j,D.cTj)
h=l+" was born in "+k
c2.$2("place",C.Hh(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.B(q,c0)
B.d.u(j,D.d98)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.Hh(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.Hh(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.j1(b1,b3,b3)
c2.$2("year",C.Hh(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bFE(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Nj(d),l=new A.e_()
l.cU(f)
w=C.iAg(m,l,g)
for(v=new A.dq(w,w.r,w.e);v.C();)J.hpQ(v.d,l)
v=A.a4(w).k("cs<1>")
u=A.B(new A.cs(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aQ(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aS(u,new C.fMV(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.I)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ad(p)>n.a){p=w.h(0,q)
p.toString
p=s.I(0,J.t(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.t(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.B(D.aBb,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hGz(o,l))}}else if(!g&&v>3){o=C.hGz(D.aBb[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hGz(d,e){var w=d.b,v=w[d.c]
w=A.B(w,x.N)
B.d.e0(w,e)
return new C.lw(d.a,w,B.d.cd(w,v),d.d,d.e,d.f,d.r)},
hLS(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Nj(a2),a1=new A.e_()
a1.cU(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.Go(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.Go(n)
l=A.T(m)
k=new A.iF(m,0,5,l.k("iF<1>"))
k.nb(m,0,5,l.c)
j=k.dq(0)
if(new A.N(j,new C.h0L(),A.T(j).k("N<1,H>")).fG(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aTr(a0,j[i]))
w.push(new C.av6("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.S(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.c6(e.c_(0,a0.anm(q),new C.h0M()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cs<1>")
d=A.B(new A.cs(e,t),t.k("M.E"))
B.d.ff(d)
v=A.a([],v)
for(u=A.cU(d,0,A.dy(5,"count",u),A.T(d).c),t=u.$ti,u=new A.bR(u,u.gJ(0),t.k("bR<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cG(s)
m.e0(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aTr(a0,v[r]))
w.push(new C.av6("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aRW(d){return B.d.aoQ(D.aDI,new C.fIJ(d))},
iqa(d){return A.nA(new A.Y(D.aDI,new C.fPL(d),x.av))},
bUj(d){return C.hVz(d)},
hVz(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bUj=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bUj)
case 7:r=f
q=B.a.i(d)
q=A.eq(J.t(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
if(q==null)q=0
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=0
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bUj,v)},
C0(d,e){return C.hVw(d,e)},
hVw(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$C0=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$C0)
case 7:r=g
p=B.a.i(d)
o=A.eq(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aF("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$C0)
case 8:u=q
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
u=e
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$C0,v)},
bUi(d,e,f){return C.hVx(d,e,f)},
hVx(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bUi=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bUi)
case 7:r=h
q=B.a.i(d)
q=A.eq(J.t(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
if(q==null)q=0
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=0
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bUi,v)},
C1(d,e,f,g){return C.hVy(d,e,f,g)},
hVy(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$C1=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$C1)
case 7:r=i
p=B.a.i(d)
o=A.eq(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aF("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$C1)
case 10:u=q>0
w=1
break
case 9:t=2
w=6
break
case 4:t=3
m=s.pop()
w=6
break
case 3:w=2
break
case 6:u=!1
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$C1,v)},
bHX(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
hcq(d,e,f,g){return new C.aly(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hTD(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aT(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.ck)
while(u.C())w.push(J.k(u.gP(u)))
u=x.N
w=A.cU(w,0,A.dy(4,"count",x.S),u).dq(0)
B.d.u(w,A.c1(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aI(d.h(0,"c"))
v=v==null?null:B.i.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aI(d.h(0,"s"))
u=u==null?null:B.i.M(u)
return C.hcq(w,v,B.o.D(u==null?20:u,5,60),t)},
hqZ(d){var w,v,u,t,s,r,q=J.a6(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aT(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.ck)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gP(q)
if(u.b(r))v.push(C.hTD(A.a1(r,t,s)))}return new C.N3(p,w,v)},
hkZ(d){var w,v=A.a([],x.c)
for(w=J.aT(d.z);w.C();)v.push(C.hqZ(w.gP(w)))
return v},
aTr(d,e){var w=e.c===D.oO
if(d.anm(e)===0&&d.Go(e).length!==0)return w?0:1
if(d.Go(e).length!==0||d.ase(e)!=null)return w?2:3
return w?4:5},
hMX(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nj(a4),a3=new A.e_()
a3.cU(a5)
w=A.a([],x.dT)
v=a2.b
u=A.B(v,x.P)
B.d.e0(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.I)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("M.E"),q=0;q<u.length;u.length===v||(0,A.I)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.d()
j=i.h(0,k)}h=a2.Go(m)
g=a2.ase(m)
f=a2.aNZ(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.x2)k="father"
else k=k===D.oO?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.x2)k="father"
else k=k===D.oO?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.b_(l,new C.haN())
d=B.a.i(m.b)
a0=A.B(new A.Y(s,new C.haO(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.T(a0)
a1=new A.iF(a0,0,3,i.k("iF<1>"))
a1.nb(a0,0,3,i.c)
B.d.u(k,a1)
B.d.e0(k,a3)
a1=C.aTr(a2,m)
i=new A.iF(l,0,4,p)
i.nb(l,0,4,r)
w.push(new C.bbH(d,a1,i.dq(0),k))
if(w.length>=5)break}return w},
hDW(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.X(d,"My ")?1:0},
hM2(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nj(a4),a3=new A.e_()
a3.cU(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.Go(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.Go(l)
j=A.T(k)
i=new A.iF(k,0,4,j.k("iF<1>"))
i.nb(k,0,4,j.c)
h=i.dq(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aS(h,new C.h1n(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iF(i,0,k,m)
j.nb(i,0,k,n)
f=j.dq(0)
j=B.a.i(l.b)
k=C.aTr(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aTr(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aTr(a2,f[g]))
w.push(new C.aaA(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lw:function lw(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bTv:function bTv(d){this.b=d
this.c=$},
bTw:function bTw(){},
bTx:function bTx(d){this.a=d},
fzi:function fzi(d){this.a=d},
ham:function ham(d){this.a=d},
han:function han(){},
hao:function hao(d){this.a=d},
hap:function hap(d,e){this.a=d
this.b=e},
haq:function haq(d,e,f){this.a=d
this.b=e
this.c=f},
hal:function hal(d,e){this.a=d
this.b=e},
har:function har(d){this.a=d},
has:function has(d){this.a=d},
hat:function hat(d,e,f){this.a=d
this.b=e
this.c=f},
hak:function hak(d,e){this.a=d
this.b=e},
fMV:function fMV(d,e){this.a=d
this.b=e},
av6:function av6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h0L:function h0L(){},
h0M:function h0M(){},
zK:function zK(d,e,f){this.a=d
this.b=e
this.c=f},
fIJ:function fIJ(d){this.a=d},
fPL:function fPL(d){this.a=d},
aly:function aly(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bOh:function bOh(){},
N3:function N3(d,e,f){this.a=d
this.b=e
this.c=f},
bbH:function bbH(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
haN:function haN(){},
haO:function haO(d){this.a=d},
aaA:function aaA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h1n:function h1n(d){this.a=d},
bj0:function bj0(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
agz:function agz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
akR:function akR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
akS:function akS(d,e,f,g,h){var _=this
_.e=_.d=$
_.f=d
_.r=e
_.w=f
_.x=0
_.y=3
_.ay=_.ax=_.at=_.as=_.Q=_.z=0
_.cx=_.CW=_.ch=!1
_.db=_.cy=0.5
_.dx=0
_.dy=""
_.fy=_.fx=_.fr=0
_.go=-9
_.id=0.5
_.bu$=g
_.a9$=h
_.c=_.a=null},
bMq:function bMq(d){this.a=d},
bMl:function bMl(){},
bMr:function bMr(){},
bMj:function bMj(){},
bMk:function bMk(){},
bMp:function bMp(d){this.a=d},
bMm:function bMm(d,e){this.a=d
this.b=e},
bMo:function bMo(d,e){this.a=d
this.b=e},
bMn:function bMn(d,e){this.a=d
this.b=e},
bMi:function bMi(d){this.a=d},
beb:function beb(d,e){this.b=d
this.a=e},
R3:function R3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCr:function aCr(d,e,f){this.b=d
this.c=e
this.a=f},
aAU:function aAU(d,e,f){this.a=d
this.b=e
this.c=f},
avK:function avK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
avL:function avL(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.cO$=e
_.ba$=f
_.c=_.a=null},
csg:function csg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
csh:function csh(d){this.a=d},
csf:function csf(d){this.a=d},
csi:function csi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
csj:function csj(){},
csk:function csk(d,e){this.a=d
this.b=e},
csl:function csl(){},
csm:function csm(d){this.a=d},
csc:function csc(d){this.a=d},
csd:function csd(d,e){this.a=d
this.b=e},
cse:function cse(d,e,f){this.a=d
this.b=e
this.c=f},
cs7:function cs7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cs9:function cs9(d,e){this.a=d
this.b=e},
csa:function csa(d,e){this.a=d
this.b=e},
cs8:function cs8(d,e){this.a=d
this.b=e},
cs6:function cs6(){},
csb:function csb(){},
bdD:function bdD(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cSm:function cSm(){},
azG:function azG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azH:function azH(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cHd:function cHd(d){this.a=d},
cHc:function cHc(d){this.a=d},
cHl:function cHl(d,e){this.a=d
this.b=e},
cHm:function cHm(d,e){this.a=d
this.b=e},
cHn:function cHn(d){this.a=d},
cHk:function cHk(d){this.a=d},
cHo:function cHo(d){this.a=d},
cHp:function cHp(d,e){this.a=d
this.b=e},
cHq:function cHq(){},
cHr:function cHr(d){this.a=d},
cHf:function cHf(d){this.a=d},
cHg:function cHg(d,e){this.a=d
this.b=e},
cHe:function cHe(d,e){this.a=d
this.b=e},
cHh:function cHh(){},
cHi:function cHi(){},
cHj:function cHj(d,e){this.a=d
this.b=e},
aAE:function aAE(){},
aI_:function aI_(){},
hiC(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bsH((w-450*u)/2,(v-900*u)/2,u)},
agn:function agn(){},
fbB:function fbB(d){this.a=d},
aLQ:function aLQ(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
flR:function flR(d){this.a=d},
amQ:function amQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amR:function amR(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qh$=f
_.Mk$=g
_.anT$=h
_.bu$=i
_.a9$=j
_.c=_.a=null},
bUh:function bUh(d){this.a=d},
bUg:function bUg(){},
bUe:function bUe(d){this.a=d},
bUc:function bUc(){},
bUd:function bUd(d){this.a=d},
bU9:function bU9(d,e){this.a=d
this.b=e},
bUa:function bUa(){},
bUb:function bUb(d){this.a=d},
bUf:function bUf(d,e){this.a=d
this.b=e},
bU8:function bU8(d){this.a=d},
buq:function buq(d,e){this.b=d
this.a=e},
fbC:function fbC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fbD:function fbD(d,e,f){this.a=d
this.b=e
this.c=f},
fbE:function fbE(d,e,f){this.a=d
this.b=e
this.c=f},
fbF:function fbF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fbG:function fbG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fbH:function fbH(){},
amO:function amO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amP:function amP(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qh$=f
_.Mk$=g
_.anT$=h
_.bu$=i
_.a9$=j
_.c=_.a=null},
bTV:function bTV(){},
bU5:function bU5(d,e){this.a=d
this.b=e},
bU6:function bU6(d){this.a=d},
bU7:function bU7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bU1:function bU1(){},
bU0:function bU0(d,e){this.a=d
this.b=e},
bU2:function bU2(d,e){this.a=d
this.b=e},
bU3:function bU3(){},
bU4:function bU4(d){this.a=d},
bTX:function bTX(d){this.a=d},
bTY:function bTY(d){this.a=d},
bTZ:function bTZ(d){this.a=d},
bTW:function bTW(d,e){this.a=d
this.b=e},
bU_:function bU_(d){this.a=d},
bkR:function bkR(d,e){this.b=d
this.a=e},
duc:function duc(){},
a2D:function a2D(d,e){this.a=d
this.b=e},
amK:function amK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amL:function amL(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qh$=e
_.Mk$=f
_.anT$=g
_.bu$=h
_.a9$=i
_.c=_.a=null},
bTH:function bTH(d){this.a=d},
bTG:function bTG(){},
bTF:function bTF(){},
bTz:function bTz(){},
bTA:function bTA(){},
bTE:function bTE(d,e,f){this.a=d
this.b=e
this.c=f},
bTD:function bTD(d){this.a=d},
bTB:function bTB(d,e){this.a=d
this.b=e},
bTC:function bTC(d){this.a=d},
bkg:function bkg(d,e){this.b=d
this.a=e},
aCu:function aCu(){},
bhO:function bhO(){},
aCw:function aCw(){},
bhP:function bhP(){},
aCx:function aCx(){},
bhQ:function bhQ(){},
uB(d,e,f,g,h){var w,v,u=null,t=A.m(18),s=A.a([],x.V)
s.push(new A.ab(0,B.H,f.j(0.4),B.hP,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.W(g,h,u,u,u,20),B.aa],w))
v.push(A.c(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.ay(u,A.o(u,A.A(v,B.l,u,B.e,B.M,0,u,u),B.f,u,u,new A.n(f,u,u,t,s,u,B.m),u,u,u,u,B.Pa,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hrN(d,e,f,g,h,i,j){return new C.amM(i,h,d,j,e,f,g,null)},
a76:function a76(d,e){this.c=d
this.a=e},
bkn:function bkn(d){this.a=d},
tI:function tI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bTy:function bTy(d){this.a=d},
IG:function IG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
WK:function WK(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bnb:function bnb(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e4w:function e4w(d,e){this.a=d
this.b=e},
e4x:function e4x(d){this.a=d},
e4y:function e4y(d,e){this.a=d
this.b=e},
e4u:function e4u(d){this.a=d},
e4v:function e4v(d){this.a=d},
e4t:function e4t(d){this.a=d},
e4r:function e4r(d){this.a=d},
e4s:function e4s(d){this.a=d},
e4q:function e4q(d,e){this.a=d
this.b=e},
e4z:function e4z(d){this.a=d},
e4A:function e4A(d,e){this.a=d
this.b=e},
e4B:function e4B(d,e){this.a=d
this.b=e},
e4C:function e4C(d,e){this.a=d
this.b=e},
e4F:function e4F(d,e){this.a=d
this.b=e},
e4G:function e4G(d,e){this.a=d
this.b=e},
e4H:function e4H(d,e){this.a=d
this.b=e},
e4I:function e4I(d,e){this.a=d
this.b=e},
e4J:function e4J(d,e){this.a=d
this.b=e},
e4K:function e4K(d,e,f){this.a=d
this.b=e
this.c=f},
e4L:function e4L(d,e){this.a=d
this.b=e},
e4M:function e4M(d,e){this.a=d
this.b=e},
e4D:function e4D(d){this.a=d},
e4E:function e4E(d){this.a=d},
a0u:function a0u(d,e){this.a=d
this.b=e},
amM:function amM(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
amN:function amN(d){var _=this
_.d=d
_.x=_.w=_.r=_.f=_.e=0
_.y=-1
_.z=3
_.Q=0
_.as=20
_.ax=_.at=null
_.ch=_.ay=0
_.CW=!1
_.c=_.a=null},
bTT:function bTT(d){this.a=d},
bTU:function bTU(d){this.a=d},
bTS:function bTS(d){this.a=d},
bTJ:function bTJ(d){this.a=d},
bTK:function bTK(d){this.a=d},
bTI:function bTI(d){this.a=d},
bTP:function bTP(d,e,f){this.a=d
this.b=e
this.c=f},
bTQ:function bTQ(d){this.a=d},
bTM:function bTM(d,e){this.a=d
this.b=e},
bTN:function bTN(d,e,f){this.a=d
this.b=e
this.c=f},
bTR:function bTR(){},
bTO:function bTO(d,e){this.a=d
this.b=e},
bTL:function bTL(d){this.a=d},
Uo:function Uo(d,e){this.c=d
this.a=e},
amJ:function amJ(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bTj:function bTj(d){this.a=d},
bTk:function bTk(d){this.a=d},
bTu:function bTu(){},
bTt:function bTt(d,e,f){this.a=d
this.b=e
this.c=f},
bTo:function bTo(d,e){this.a=d
this.b=e},
bTn:function bTn(d,e){this.a=d
this.b=e},
bTp:function bTp(d){this.a=d},
bTq:function bTq(d,e){this.a=d
this.b=e},
bTr:function bTr(d,e){this.a=d
this.b=e},
bTm:function bTm(d,e){this.a=d
this.b=e},
bTs:function bTs(d,e,f){this.a=d
this.b=e
this.c=f},
bTl:function bTl(d,e){this.a=d
this.b=e},
ioG(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ajB(a6),a5=a4.length
if(a5===0)return""
w=A.S(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.V(Date.now(),0,!1))
s=new C.fMl(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("Y<1>"),q=q.k("cL<1,q>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.zB)m.push(l===D.x2?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.j1(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.j1(h,a2,a2)-A.j1(j,a2,a2))+" years")
l=B.a.i(u.z)
if(l.length!==0)m.push("work: "+l)
f=s.$1(u)
if(f!=null)m.push("married to "+w.h(0,f).b)
e=u.d
if(e!=null&&w.an(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.B(new A.cL(new A.Y(a4,new C.fMj(u,f),p),new C.fMk(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aM(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aM(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.az(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
ioH(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ajB(a0),d=e.length
if(d===0)return""
w=x.N
v=A.S(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fMq(v,e)
q=new C.fMo(v)
p=A.S(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.I)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.I)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.I)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.an(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.an(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("b8<2>")
d=A.cY(new A.b8(p,d),d.k("M.E"))
n=A.B(d,A.a4(d).k("ci.E"))
B.d.ff(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eL(l,new C.fMp(p,m));k.C();t=f){j=l.gP(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.an(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aM(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i9P(d,e,f,g){var w,v,u=C.ioI(d,e)
if(u<=0||f.length<=u)return new A.ag1(!1,D.Ef,f)
if(g.q(0,e.a))return new A.ag1(!1,D.Ef,f)
w=A.T(f).c
v=A.cU(f,0,A.dy(u,"count",x.S),w).dq(0)
return new A.ag1(!0,A.cU(f,u,null,w).dq(0),v)},
i9Q(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ajB(d3),d2=d1.length
if(d2===0)return D.hHZ
w=x.N
v=A.S(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c_(0,t.a,new C.djC(t))}s=new C.djT(v)
d2=x.dy
r=A.S(w,d2)
q=new C.djL(r)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.djK(r)
l=A.S(w,x.do)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c6(l.c_(0,k,new C.djD()),o)}h=new C.djJ(s)
g=new C.djI(l,r)
p=v.$ti.k("b8<2>")
o=p.k("Y<M.E>")
f=A.B(new A.Y(new A.b8(v,p),new C.djE(h),o),o.k("M.E"))
e=f.length===0?new A.b8(v,p).gH(0):B.d.gH(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.I)(f),++u){t=f[u]
a0=g.$2(t.a,A.aQ(w))
if(a0>d){d=a0
e=t}}a1=A.aQ(w)
p=x.S
a2=A.S(w,p)
a3=A.S(w,w)
a4=A.S(w,d2)
d2=x.i
a5=A.S(w,d2)
a6=A.S(w,x.d9)
a7=A.S(w,d2)
a8=A.a([],x.s)
a9=new C.djR(new C.djN(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.S(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dq(v,v.r,v.e),j=a2.gamS(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.ew([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.I(0,i))break}if(h.$1(b0)&&a2.an(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nA(J.dI(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.S(w,x.dO)
b5=A.a([],x.M)
b6=A.S(w,d2)
b7=new C.djB(a2,new C.djS(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.I)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.dq(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cs<1>")
d2=A.B(new A.cs(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.GR(o,new A.r(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.L7(c5.a,new A.r(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cs<1>")
d2=A.B(new A.cs(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bP(0,new C.djF(c6,b4))
for(d2=new A.cd(a4,a4.$ti.k("cd<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aT(c7.b);j.C();){i=j.gP(j)
if(b6.an(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.r(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eL(j,new C.djG(c8));i.C();)o.push(j.gP(0).b)
if(o.length===0)continue
B.d.b_(o,new C.djH())
c6.push(new C.aLL(new A.r(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bhU(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hHg(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(d)
return w==null?null:w.b[1]},
hB4(d,e,f,g,h,i,j,k,l,m,n){return new C.a0I(k,f,j,e,l,n,m,d,g,h,i,null)},
aEv(d,e,f,g,h,i,j){return new C.blH(i,d,e,f,j,h,g,null)},
arU:function arU(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aG3:function aG3(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e6b:function e6b(d){this.a=d},
e6a:function e6a(d){this.a=d},
e6d:function e6d(d,e){this.a=d
this.b=e},
e6e:function e6e(d,e){this.a=d
this.b=e},
e6f:function e6f(d){this.a=d},
e69:function e69(d,e){this.a=d
this.b=e},
e6c:function e6c(d){this.a=d},
e6h:function e6h(d){this.a=d},
e6g:function e6g(d,e){this.a=d
this.b=e},
arO:function arO(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aG0:function aG0(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e5C:function e5C(d){this.a=d},
e5A:function e5A(d){this.a=d},
e5B:function e5B(d){this.a=d},
e5D:function e5D(d,e){this.a=d
this.b=e},
e5x:function e5x(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4Z:function e4Z(d){this.a=d},
e5_:function e5_(d,e){this.a=d
this.b=e},
e5g:function e5g(d){this.a=d},
e5e:function e5e(d){this.a=d},
e5f:function e5f(d,e){this.a=d
this.b=e},
e5h:function e5h(d){this.a=d},
e5i:function e5i(d,e){this.a=d
this.b=e},
e5w:function e5w(d,e){this.a=d
this.b=e},
e5d:function e5d(d){this.a=d},
e5c:function e5c(d){this.a=d},
e5b:function e5b(d,e){this.a=d
this.b=e},
e5t:function e5t(){},
e5u:function e5u(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e5s:function e5s(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e5m:function e5m(d){this.a=d},
e5n:function e5n(d,e,f){this.a=d
this.b=e
this.c=f},
e5l:function e5l(d,e){this.a=d
this.b=e},
e5o:function e5o(d,e){this.a=d
this.b=e},
e5j:function e5j(d,e){this.a=d
this.b=e},
e5k:function e5k(){},
e5p:function e5p(d,e){this.a=d
this.b=e},
e5q:function e5q(d){this.a=d},
e5r:function e5r(d,e){this.a=d
this.b=e},
e5v:function e5v(d,e){this.a=d
this.b=e},
e4N:function e4N(d,e){this.a=d
this.b=e},
e4O:function e4O(d,e){this.a=d
this.b=e},
e5F:function e5F(d,e,f){this.a=d
this.b=e
this.c=f},
e5z:function e5z(d,e,f){this.a=d
this.b=e
this.c=f},
e5y:function e5y(d){this.a=d},
e4P:function e4P(d){this.a=d},
e4Q:function e4Q(d){this.a=d},
e4R:function e4R(){},
e4S:function e4S(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4W:function e4W(d,e){this.a=d
this.b=e},
e4V:function e4V(d,e){this.a=d
this.b=e},
e4U:function e4U(d){this.a=d},
e4X:function e4X(d,e){this.a=d
this.b=e},
e4T:function e4T(d){this.a=d},
e5E:function e5E(d){this.a=d},
e58:function e58(){},
e59:function e59(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e57:function e57(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e53:function e53(d,e,f){this.a=d
this.b=e
this.c=f},
e52:function e52(d,e,f){this.a=d
this.b=e
this.c=f},
e50:function e50(d,e){this.a=d
this.b=e},
e54:function e54(d){this.a=d},
e55:function e55(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e51:function e51(d,e){this.a=d
this.b=e},
e56:function e56(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5a:function e5a(d,e){this.a=d
this.b=e},
e5M:function e5M(){},
e5N:function e5N(d,e){this.a=d
this.b=e},
e5O:function e5O(d){this.a=d},
e5P:function e5P(d,e){this.a=d
this.b=e},
e5I:function e5I(d){this.a=d},
e5G:function e5G(d,e){this.a=d
this.b=e},
e5J:function e5J(d,e){this.a=d
this.b=e},
e5K:function e5K(d,e){this.a=d
this.b=e},
e5L:function e5L(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e5Q:function e5Q(d){this.a=d},
e5H:function e5H(d){this.a=d},
e4Y:function e4Y(d){this.a=d},
bhS:function bhS(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
djz:function djz(d){this.a=d},
djy:function djy(d,e){this.a=d
this.b=e},
djA:function djA(d){this.a=d},
djx:function djx(d,e){this.a=d
this.b=e},
fMl:function fMl(d,e){this.a=d
this.b=e},
fMm:function fMm(d){this.a=d},
fMn:function fMn(){},
fMj:function fMj(d,e){this.a=d
this.b=e},
fMk:function fMk(){},
fMq:function fMq(d,e){this.a=d
this.b=e},
fMr:function fMr(d){this.a=d},
fMs:function fMs(){},
fMo:function fMo(d){this.a=d},
fMp:function fMp(d,e){this.a=d
this.b=e},
L7:function L7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GR:function GR(d,e){this.a=d
this.b=e},
bhU:function bhU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
djC:function djC(d){this.a=d},
djT:function djT(d){this.a=d},
djL:function djL(d){this.a=d},
djM:function djM(){},
djK:function djK(d){this.a=d},
djD:function djD(){},
djJ:function djJ(d){this.a=d},
djI:function djI(d,e){this.a=d
this.b=e},
djE:function djE(d){this.a=d},
djN:function djN(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
djO:function djO(d){this.a=d},
djP:function djP(d){this.a=d},
djQ:function djQ(){},
djR:function djR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
djS:function djS(){},
djB:function djB(d,e,f,g,h,i,j,k,l,m){var _=this
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
djF:function djF(d,e){this.a=d
this.b=e},
djG:function djG(d){this.a=d},
djH:function djH(){},
aLL:function aLL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bhV:function bhV(d,e){this.b=d
this.a=e},
djU:function djU(){},
djV:function djV(d){this.a=d},
djW:function djW(d){this.a=d},
djX:function djX(){},
blI:function blI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgW:function bgW(d,e){this.b=d
this.a=e},
bzP:function bzP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
frs:function frs(d){this.a=d},
bp3:function bp3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
f1m:function f1m(d){this.a=d},
f1l:function f1l(d,e){this.a=d
this.b=e},
a0I:function a0I(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aEt:function aEt(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dzW:function dzW(d,e){this.a=d
this.b=e},
dzV:function dzV(d){this.a=d},
dzT:function dzT(d){this.a=d},
dzU:function dzU(d){this.a=d},
dA4:function dA4(d){this.a=d},
dA5:function dA5(d){this.a=d},
dA3:function dA3(d,e){this.a=d
this.b=e},
dA6:function dA6(){},
dA9:function dA9(d){this.a=d},
dA2:function dA2(d,e){this.a=d
this.b=e},
dA8:function dA8(){},
dAa:function dAa(d){this.a=d},
dA1:function dA1(d,e){this.a=d
this.b=e},
dAb:function dAb(d){this.a=d},
dA0:function dA0(d){this.a=d},
dAc:function dAc(d){this.a=d},
dA_:function dA_(d){this.a=d},
dAd:function dAd(d){this.a=d},
dzZ:function dzZ(d){this.a=d},
dAe:function dAe(d){this.a=d},
dzY:function dzY(d){this.a=d},
dAf:function dAf(d){this.a=d},
dzX:function dzX(d,e){this.a=d
this.b=e},
dA7:function dA7(d){this.a=d},
aeV:function aeV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
blH:function blH(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aeU:function aeU(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
blG:function blG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dAg:function dAg(d){this.a=d},
dAh:function dAh(d,e){this.a=d
this.b=e},
aEu:function aEu(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aKN:function aKN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeW:function aeW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dAq:function dAq(d){this.a=d},
GN:function GN(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hvR(d){var w=d.V,v=x.N
return w.jp(w,new C.cgM(),v,v)},
i1a(d){var w=d.bH
if(w>=0)return w
return 5},
hvT(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hvR(d).h(0,v)
if(w==null||w.length===0)return null
return A.bh(w)},
hvS(d,e){var w=C.hvT(d,e)
if(w!=null&&w.cc(new A.V(Date.now(),0,!1)))return!0
return!1},
i1b(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.hvR(d),w,w)
u=C.hvT(d,e)
t=u!=null&&u.cc(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bQ(A.du(30,0,0,0,0,0).a).aa().ag())
d.V=v},
b2j(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b2j=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lC(t,B.Kb),$async$b2j)
case 3:if(l){u=!0
w=1
break}u=A.li(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Kb,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2j,v)},
cgM:function cgM(){},
i18(){var w,v=$.oz(),u=J.e4(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hh(u)},
JB(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$JB=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ca(),$async$JB)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$JB)
case 8:r=e
if(r==null){u=A.S(x.N,x.z)
w=1
break}q=J.t(r,"codes")
if(x.f.b(q)){o=A.a1(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ac(m)
$.am.$1("[family tree sync codes] load: "+A.v(p))
w=7
break
case 4:w=2
break
case 7:u=A.S(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JB,v)},
a8P(d){return C.i19(d)},
i19(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8P=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ca(),$async$a8P)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hT("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cS,null),$async$a8P)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ac(p)
$.am.$1("[family tree sync codes] save: "+A.v(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a8P,v)},
cgL(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cgL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.JB(),$async$cgL)
case 3:t=m.ic(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gP(t)
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
return A.i($async$cgL,v)},
OB(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$OB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cgL(d),$async$OB)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.JB(),$async$OB)
case 6:s=f
r=J.a6(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dH(A.a1(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a8P(s),$async$OB)
case 9:case 8:u=t
w=1
break
case 5:n=C.i18()
w=10
return A.b(C.JB(),$async$OB)
case 10:s=f
J.aJ(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a8P(s),$async$OB)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$OB,v)},
b2i(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b2i=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.JB(),$async$b2i)
case 3:t=f
for(s=J.ds(t),r=s.gdM(t),r=r.dq(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8P(t),$async$b2i)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b2i,v)},
a8Q(d,e,f){var w=0,v=A.j(x.H),u
var $async$a8Q=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.arT(d,e),$async$a8Q)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.OB(d),$async$a8Q)
case 7:w=4
break
case 5:w=8
return A.b(C.b2i(d),$async$a8Q)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a8Q,v)},
arN(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$arN=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.arT(f,e),$async$arN)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.ca(),$async$arN)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.JB(),$async$arN)
case 7:q=o.t(k,t)
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
return A.i($async$arN,v)},
b2h(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b2h=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.ca(),$async$b2h)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.JB(),$async$b2h)
case 4:t=q.t(g,r)
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
return A.i($async$b2h,v)},
i1c(){var w,v=$.oz(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hh(u)},
arQ(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$arQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ca(),$async$arQ)
case 3:if(!g){u=null
w=1
break}t=C.i1c()
w=4
return A.b(A.WL(),$async$arQ)
case 4:s=g
r=B.dX.aK(B.X.av(d.f1(),null))
r=B.cM.gco().aK(r)
q=e?999:2
J.aJ(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a8R(s),$async$arQ)
case 5:p=e?999:2
u=new A.a1T("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arQ,v)},
arP(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$arP=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.WL(),$async$arP)
case 3:p=a0
o=J.a6(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a6(n)
l=A.aI(m.h(n,"usesRemaining"))
k=l==null?null:B.i.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b2h(J.k(l==null?"":l),j),$async$arP)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cc.cE(0,B.cE.aK(t))
s=C.hvU(r)}catch(f){q=A.ac(f)
$.am.$1("[family tree qr stash] decode: "+A.v(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dH(A.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a8R(p),$async$arP)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arP,v)},
hvU(d){var w,v,u,t,s=null
try{w=B.X.aP(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.i1e(A.a1(w,x.N,x.z))
return u}catch(t){v=A.ac(t)
$.am.$1("[family tree sync] parse: "+A.v(v))
return s}},
hez(d){var w=0,v=A.j(x.m),u,t,s
var $async$hez=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.X(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.arP(t[1])
w=1
break}u=null
w=1
break}u=C.hvU(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hez,v)},
i1e(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d4(v,x.f)
u=A.cF(u,new C.cgO(),u.$ti.k("M.E"),x.k)
t=A.a4(u).k("Y<M.E>")
s=A.B(new A.Y(u,new C.cgP(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bh(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.S(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.ic(p),t=t.gae(t),o=x.B;t.C();){n=t.gP(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d4(l,u)
n=A.cF(n,new C.cgQ(),n.$ti.k("M.E"),o)
k=A.a4(n).k("Y<M.E>")
j=A.B(new A.Y(n,new C.cgR(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.arR(h,w,s,r,q)},
arT(d,e){var w=0,v=A.j(x.y),u,t
var $async$arT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Ot(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bu(d),$async$arT)
case 3:u=t.cK(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arT,v)},
cgX(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cgX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bu(d),$async$cgX)
case 3:t=s.ba(f,new C.cgY(),x.cs)
t=A.B(t,t.$ti.k("ak.E"))
B.d.b_(t,new C.cgZ())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cgX,v)},
WM(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$WM=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.arT(e,d),$async$WM)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.OB(e),$async$WM)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Bu(e),$async$WM)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dI(r,new C.cgV(g))
r=A.B(t,t.$ti.k("M.E"))}t=J.a6(r)
if(t.gau(r)){u=null
w=1
break}t=t.dP(r,new C.cgW(e),x.k)
r=A.B(t,t.$ti.k("ak.E"))
q=A.S(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.LY(e,o),$async$WM)
case 14:n=i
if(J.cK(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.arR(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WM,v)},
b2m(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b2m=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WM(d,e,f,g),$async$b2m)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Hw(A.L3(q.f1(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2m,v)},
b2l(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b2l=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WM(d,e,f,g),$async$b2l)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.arQ(r,f),$async$b2l)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aIN(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2l,v)},
WN(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$WN=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.hez(a0),$async$WN)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.X(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.arN(g.a,d,e,f,s,r),$async$WN)
case 6:if(!a2){if(r)throw A.X(A.bb("This backup expired or the sender's tree is no longer available."))
throw A.X(A.bb("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bFi(e,j),$async$WN)
case 12:case 11:w=13
return A.b(C.ajj(e,j,s),$async$WN)
case 13:h=n.h(0,i)
w=h!=null&&J.cK(h)?14:15
break
case 14:w=16
return A.b(C.BF(e,i,h),$async$WN)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bsN(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WN,v)},
arR:function arR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cgT:function cgT(){},
cgU:function cgU(){},
cgS:function cgS(){},
cgO:function cgO(){},
cgP:function cgP(){},
cgQ:function cgQ(){},
cgR:function cgR(){},
cgY:function cgY(){},
cgZ:function cgZ(){},
cgV:function cgV(d){this.a=d},
cgW:function cgW(d){this.a=d},
hnO(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f3(null,x.H)
return A.hG(d,new C.arS(w,e,g,i,f,h,null),!0,null,x.H)},
djw(d,e,f,g,h,i,j,k){return new C.bhR(i,e,k,j,g,f,h,d,null)},
arS:function arS(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aG2:function aG2(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e5Z:function e5Z(d){this.a=d},
e6_:function e6_(d,e,f){this.a=d
this.b=e
this.c=f},
e63:function e63(d,e){this.a=d
this.b=e},
e64:function e64(d){this.a=d},
e5W:function e5W(d){this.a=d},
e5X:function e5X(d,e){this.a=d
this.b=e},
e5Y:function e5Y(d,e){this.a=d
this.b=e},
e62:function e62(d){this.a=d},
e61:function e61(d,e){this.a=d
this.b=e},
e60:function e60(){},
e66:function e66(d){this.a=d},
e67:function e67(d,e){this.a=d
this.b=e},
e65:function e65(d,e){this.a=d
this.b=e},
djY:function djY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bhT:function bhT(d,e,f){this.d=d
this.e=e
this.a=f},
aea:function aea(d,e,f){this.c=d
this.d=e
this.a=f},
bhR:function bhR(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bhW:function bhW(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a11:function a11(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aG1:function aG1(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e5R:function e5R(d,e){this.a=d
this.b=e},
e5S:function e5S(d){this.a=d},
e5T:function e5T(d){this.a=d},
e5U:function e5U(d){this.a=d},
e5V:function e5V(d){this.a=d},
a12:function a12(d){this.a=d},
bnc:function bnc(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e68:function e68(d,e){this.a=d
this.b=e},
b0Q(d,e){return new C.b0P(d,e,null)},
b0P:function b0P(d,e,f){this.c=d
this.d=e
this.a=f},
ir7(d){if(!(d!=null&&B.a.X(d,"ngmy:thumb:")))return null
return B.a.aY(d,11)},
iyN(d){return A.bU(B.L,null,new C.h2U(new C.um(A.O(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hxU(d,e){return new C.auV(e,d,null)},
aTl(d,e,f,g,h,i,j){var w=C.ir7(i)
if(w!=null)return A.bv(e,new A.a5(j,f,new C.a7S(w,!0,null),null),B.aq)
return A.aSG(e,B.bZ,f,g,h,i,j)},
lY:function lY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7S:function a7S(d,e,f){this.c=d
this.d=e
this.a=f},
bmR:function bmR(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.ba$=e
_.c=_.a=null},
dS2:function dS2(d){this.a=d},
dS3:function dS3(){},
dS4:function dS4(d,e){this.a=d
this.b=e},
bmQ:function bmQ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
h2U:function h2U(d){this.a=d},
h2T:function h2T(d,e){this.a=d
this.b=e},
h2S:function h2S(d,e){this.a=d
this.b=e},
h2R:function h2R(d,e){this.a=d
this.b=e},
auV:function auV(d,e,f){this.c=d
this.d=e
this.a=f},
cqy:function cqy(d,e){this.a=d
this.b=e},
aOc:function aOc(){},
iyy(d){var w=null
return A.cg(w,w,!0,w,new C.h2h(),d,w,!0,!0,x.e2)},
izM(d,e,f,g,h){var w=null
return A.cg(w,w,!0,w,new C.ha4(h,g,f,e),d,w,!0,!0,x.N)},
iyA(d,e){var w=null
return A.cg(w,w,!0,w,new C.h2l(e),d,w,!0,!0,x.dY)},
iyz(d){var w=null
return A.cg(w,w,!0,w,new C.h2k(),d,w,!0,!0,x.c5)},
aWi:function aWi(d,e){this.a=d
this.b=e},
aWh:function aWh(d){this.a=d},
aUj:function aUj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h2h:function h2h(){},
ha4:function ha4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h2l:function h2l(d){this.a=d},
h2k:function h2k(){},
a_F:function a_F(d,e){this.c=d
this.a=e},
aBc:function aBc(){var _=this
_.d=$
_.c=_.a=_.e=null},
db3:function db3(d){this.a=d},
db4:function db4(d){this.a=d},
db2:function db2(d,e){this.a=d
this.b=e},
db5:function db5(d){this.a=d},
db6:function db6(d){this.a=d},
a_E:function a_E(d){this.a=d},
aBb:function aBb(){this.d=$
this.c=this.a=null},
db_:function db_(d){this.a=d},
db0:function db0(d){this.a=d},
db1:function db1(d){this.a=d},
a_9:function a_9(d){this.a=d},
azT:function azT(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cIV:function cIV(){},
cJ0:function cJ0(d){this.a=d},
cJ1:function cJ1(d){this.a=d},
cJ2:function cJ2(d){this.a=d},
cJ_:function cJ_(){},
cJ3:function cJ3(d){this.a=d},
cJ4:function cJ4(d){this.a=d},
cIZ:function cIZ(){},
cJ5:function cJ5(d,e){this.a=d
this.b=e},
cIY:function cIY(d,e){this.a=d
this.b=e},
cIW:function cIW(d,e){this.a=d
this.b=e},
cJ6:function cJ6(d){this.a=d},
cIX:function cIX(){},
cJ7:function cJ7(d){this.a=d},
a2Q:function a2Q(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bzH:function bzH(){this.d=$
this.c=this.a=null},
fqY:function fqY(d,e){this.a=d
this.b=e},
fqZ:function fqZ(d){this.a=d},
fr_:function fr_(d,e){this.a=d
this.b=e},
ada:function ada(d,e){this.a=d
this.b=e},
GB:function GB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bzF:function bzF(d,e){var _=this
_.d=$
_.bu$=d
_.a9$=e
_.c=_.a=null},
fqW:function fqW(d,e){this.a=d
this.b=e},
azM:function azM(d,e){this.c=d
this.a=e},
bzG:function bzG(d,e){var _=this
_.d=$
_.bu$=d
_.a9$=e
_.c=_.a=null},
fqX:function fqX(d){this.a=d},
bzE:function bzE(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aQl:function aQl(){},
aQm:function aQm(){},
bHn(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.i.be(u),s=B.o.D(B.i.T((u-t)*100),0,99),r=d<0?"-":"",q=A.nT(B.o.v(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.h0y(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cR(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cR(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cR(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b1(B.o.v(s),2,"0")
n.push(A.cR(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Zx(A.cR(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aSY(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aSY=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.i8().l8(85,1280,B.eY),$async$aSY)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fs(),$async$aSY)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hxT()
w=9
return A.b(C.cqx(q,r),$async$aSY)
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
o=A.ac(l)
$.am.$1("[worksheets] pick photo failed: "+A.v(o))
u=null
w=1
break
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aSY,v)},
aTj(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aTj=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.X(g,"ngmy:ws-thumb:")
if(i){u=C.cqu(g)
w=1
break}if(!B.a.X(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cE.aK(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.Hx(p,!0,null,o).dc(0,B.fV),$async$aTj)
case 9:n=a1
w=10
return A.b(n.lc(),$async$aTj)
case 10:m=a1
w=11
return A.b(m.b.hk(B.hm),$async$aTj)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eQ(B.dI.gaU(l))
k="data:image/png;base64,"+B.cM.gco().aK(i)
if(J.ad(k)<=r){u=k
w=1
break}o=B.i.T(o*0.72)
w=7
break
case 8:t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.ac(f)
$.am.$1("[worksheets] thumbnail shrink failed: "+A.v(j))
w=6
break
case 3:w=2
break
case 6:u=g
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aTj,v)},
h0y:function h0y(){},
um:function um(d){this.a=d},
auU:function auU(d,e,f){this.c=d
this.d=e
this.a=f},
aHB:function aHB(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eZw:function eZw(d,e){this.a=d
this.b=e},
eZn:function eZn(d){this.a=d},
eZo:function eZo(d){this.a=d},
eZu:function eZu(d,e){this.a=d
this.b=e},
eZt:function eZt(d,e){this.a=d
this.b=e},
eZq:function eZq(d,e){this.a=d
this.b=e},
eZp:function eZp(d,e){this.a=d
this.b=e},
eZr:function eZr(d){this.a=d},
eZs:function eZs(d,e){this.a=d
this.b=e},
eZv:function eZv(d,e){this.a=d
this.b=e},
eZi:function eZi(d,e){this.a=d
this.b=e},
eZm:function eZm(d){this.a=d},
eZl:function eZl(d,e){this.a=d
this.b=e},
eZk:function eZk(d){this.a=d},
eZx:function eZx(d,e){this.a=d
this.b=e},
eZy:function eZy(d,e){this.a=d
this.b=e},
eZj:function eZj(d,e){this.a=d
this.b=e},
hLv(d,e,f){var w="thumbnailPath",v=e.ak()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
h0z(d,e,f){var w=0,v=A.j(x.N),u
var $async$h0z=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.X.av(C.hLv(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h0z,v)},
bHp(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bHp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.h0z(!0,d,e),$async$bHp)
case 4:w=3
return A.b(r.auS(g,d,e.a),$async$bHp)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dX.aK(B.X.av(C.hLv(d,e,null),null))
u="NGMY_WS:"+B.kS.gco().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHp,v)},
hCt(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hnn(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d3(s,"NGMYWSSYNC2|"))return!0
if(J.d3(s,"NGMY_WS:"))return!0
if(J.eC(s,t))return!0
if(J.d3(s,"{"))try{w=B.X.aP(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
iwy(d){var w,v,u,t=C.hCt(d)
if(t==null)return null
if(C.hnn(t))return t
w=B.a.cd(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aY(t,w))
if(C.hnn(v))return v}u=B.a.cd(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aY(t,u))
if(C.hnn(v))return v}return null},
hnm(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d3(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d3(q,"NGMY_WS:")){v=B.cc.cE(0,B.cE.aK(J.n2(q,8)))
w=t.a(B.X.aP(0,v,r))}else w=t.a(B.X.aP(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hhd(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bHo(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bHo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.X(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.auR(t[1]),$async$bHo)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hnm(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hnm(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHo,v)},
hnl(d){var w=B.o.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lI(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bGS(){var w=0,v=A.j(x.o),u,t
var $async$bGS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.HI(),$async$bGS)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hnm(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGS,v)},
hMG(d,e,f,g){return A.bU(B.L,null,new C.h9S(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h9S:function h9S(d,e,f){this.a=d
this.b=e
this.c=f},
afg:function afg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eZA:function eZA(d,e){this.a=d
this.b=e},
eZB:function eZB(d,e){this.a=d
this.b=e},
eZC:function eZC(d,e){this.a=d
this.b=e},
eZD:function eZD(d,e){this.a=d
this.b=e},
eZz:function eZz(d){this.a=d},
auO:function auO(d,e,f){this.c=d
this.d=e
this.a=f},
boz:function boz(){var _=this
_.c=_.a=_.e=_.d=null},
eZd:function eZd(d,e){this.a=d
this.b=e},
eZe:function eZe(d){this.a=d},
eZf:function eZf(d){this.a=d},
auT:function auT(d){this.a=d},
aHA:function aHA(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eZh:function eZh(d){this.a=d},
eZg:function eZg(d){this.a=d},
i4w(d,e,f,g,h){return new C.Pg(h,g,d,e,f,null)},
aMx:function aMx(d,e){this.a=d
this.b=e},
Pg:function Pg(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHC:function aHC(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
f__:function f__(){},
eZW:function eZW(d,e){this.a=d
this.b=e},
eZX:function eZX(d){this.a=d},
eZH:function eZH(d){this.a=d},
eZF:function eZF(d){this.a=d},
eZG:function eZG(d){this.a=d},
eZQ:function eZQ(d,e){this.a=d
this.b=e},
eZN:function eZN(d,e){this.a=d
this.b=e},
eZO:function eZO(d,e){this.a=d
this.b=e},
eZP:function eZP(d,e,f){this.a=d
this.b=e
this.c=f},
eZL:function eZL(d,e,f){this.a=d
this.b=e
this.c=f},
eZJ:function eZJ(d){this.a=d},
eZK:function eZK(d){this.a=d},
eZM:function eZM(d){this.a=d},
f_2:function f_2(d){this.a=d},
f_1:function f_1(d){this.a=d},
f_3:function f_3(d){this.a=d},
f_0:function f_0(d){this.a=d},
eZE:function eZE(d){this.a=d},
eZI:function eZI(d,e){this.a=d
this.b=e},
eZZ:function eZZ(d,e){this.a=d
this.b=e},
eZY:function eZY(d,e){this.a=d
this.b=e},
eZT:function eZT(d){this.a=d},
eZU:function eZU(d){this.a=d},
eZV:function eZV(d,e){this.a=d
this.b=e},
eZS:function eZS(d,e){this.a=d
this.b=e},
eZR:function eZR(d,e,f){this.a=d
this.b=e
this.c=f},
bBs:function bBs(){},
Bh(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ahP(d,e,f){return C.ikC(d,e,f)},
ikC(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ahP=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aF("String",e,f),$async$ahP)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.ac(o)
$.am.$1("[worksheets] setString failed for "+e+": "+A.v(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahP,v)},
ahO(d,e){return C.ikB(d,e)},
ikB(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ahO=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ahO)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.ac(q)
$.am.$1("[worksheets] remove failed for "+e+": "+A.v(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$ahO,v)},
ijr(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.U2(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bEc(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bEc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
if(q.length===0){u=null
w=1
break}t=B.a.X(q,"ngmy:thumb:")
if(!t)t=B.a.X(q,"ngmy:ws-thumb:")
else t=!0
if(t){u=q
w=1
break}w=B.a.X(q,"data:image")?3:4
break
case 3:w=5
return A.b(C.b5B(q),$async$bEc)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aTj(q,!1),$async$bEc)
case 6:r=f
if(r!=null&&B.a.X(r,"data:image")&&r.length<=12e4){u=r
w=1
break}u=null
w=1
break
case 4:u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEc,v)},
hST(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aI(d.h(0,"price")),o=p==null?null:p
if(o==null)o=0
w=A.aI(d.h(0,"quantity"))
if(w==null)w=null
v=A.aI(d.h(0,"unitPrice"))
if(v==null)v=null
if(w!=null&&v!=null){p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
u=J.k(u==null?"":u)
t=w<=0?1:w
s=d.h(0,r)
if(B.a.i(J.k(s==null?q:s)).length===0)s=q
else{s=d.h(0,r)
s=J.k(s==null?q:s)}return new C.rx(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rx(p,J.k(u==null?"":u),1,o,q)},
hhd(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.d4(s,x.f)
w=A.cF(w,new C.cIb(),w.$ti.k("M.E"),x.Q)
v=A.a4(w).k("Y<M.E>")
r=A.B(new A.Y(w,new C.cIc(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bh(J.k(t==null?"":t))
return new C.lI(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
ioC(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.x2
case"female":case"f":return D.oO
default:return D.zB}},
hHP(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hrO(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ioC(v==null?j:J.k(v))
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
m=A.aI(d.h(0,"birthOrder"))
m=m==null?j:B.i.M(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aI(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.i.M(k)
return new C.i7(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ioE(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Py
case"viewer":return D.l3
default:return D.v6}},
ioF(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Hy(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aS0(d,e){return B.a.i(e.toLowerCase())===C.Hy(d,e)&&d.y!==D.l3},
uC(d,e){var w,v=d.y
if(v===D.l3)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Hy(d,e))return!0
if(v===D.Py)return!0
v=d.e
return new A.N(v,A.hnt(),A.T(v).k("N<1,q>")).q(0,w)},
inZ(d){return J.dI(d,new C.fLd()).gJ(0)},
haD(d){var w=0,v=A.j(x.y),u,t
var $async$haD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bu(d),$async$haD)
case 3:u=t.rs(f,new C.haE(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$haD,v)},
bFi(d,e){var w=0,v=A.j(x.H),u,t
var $async$bFi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bu(d),$async$bFi)
case 3:t=g
if(J.rs(t,new C.fII(e))){w=1
break}if(C.inZ(t)>=2)throw A.X(A.bb("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bFi,v)},
amT(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.d4(h,x.f)
w=A.cF(w,new C.bUk(),w.$ti.k("M.E"),x.P)
v=A.a4(w).k("Y<M.E>")
g=A.B(new A.Y(w,new C.bUl(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.ba(u,new C.bUm(),x.N)
t=A.B(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.z(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bh(J.k(q==null?"":q))
if(q==null)q=new A.V(Date.now(),0,!1)
p=A.aI(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.i.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.ioE(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aT(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.ck)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gP(f)
if(l.b(i))m.push(A.a1(i,k,j))}return new C.l1(w,v,s,!r,t,g,q,p,o,n,m)},
hI3(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.az(v,0,8)},
DP(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SX(d),$async$DP)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$DP)
case 4:t=f
w=5
return A.b(t.a7T(0),$async$DP)
case 5:w=6
return A.b(C.fyR(t,l),$async$DP)
case 6:s=f
if(J.cK(s)){u=s
w=1
break}r=B.a.gY(B.a.i(l.toLowerCase()))
q=t.a
p=J.a6(q)
o=A.aW(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hD5(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.pf(l,n),$async$DP)
case 11:u=n
w=1
break
case 10:case 8:m=A.aW(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gY(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hD5(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.pf(l,n),$async$DP)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DP,v)},
fyR(d,e){return C.igN(d,e)},
igN(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fyR=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a6(a3)
a5=A.aW(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Bh(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.X.aP(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aT(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gP(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aW(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Bh(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.X.aP(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hhd(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aW(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Bh(a9)+"_"+n))
i=C.ijr(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.X(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b5B(h),$async$fyR)
case 17:g=b1
if(g!=null){i=i.U2(g)
p=!0}case 16:J.c6(q,i)
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
case 8:J.T5(q,new C.fyS())
if(p&&J.ad(q)!==0)C.pf(a9,q)
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
return A.i($async$fyR,v)},
bFM(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bFM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SX(d),$async$bFM)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DP(r),$async$bFM)
case 4:t=p.aT(g)
case 5:if(!t.C()){w=6
break}s=t.gP(t)
if(s.a===q){u=s
w=1
break}w=5
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFM,v)},
hD5(d){var w,v,u,t
try{w=B.X.aP(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d4(w,x.f)
v=A.cF(v,new C.fup(),v.$ti.k("M.E"),x.fA)
u=A.a4(v).k("Y<M.E>")
v=A.B(new A.Y(v,new C.fuq(),u),u.k("M.E"))
B.d.b_(v,new C.fur())
return v}catch(t){v=A.a([],x.D)
return v}},
pf(d,e){return C.iyn(d,e)},
iyn(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$pf=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.SX(b2),$async$pf)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$pf)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Bh(a8)
p=A.aW(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.ba(x.j.a(B.X.aP(0,p,null)),new C.h25(),a2).fG(0)
a2=J.ba(b3,new C.h26(),a2).c0(0,new C.h27())
n=A.cY(a2,a2.$ti.k("M.E"))
a2=o,a2=A.dZ(a2,a2.r,A.a4(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eC(n,m)?17:18
break
case 17:a5=C.Bh(a8)
l=A.aW(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.aaa(l),$async$pf)
case 19:t=21
a5=C.Bh(a8)
k=A.aW(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.X.aP(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.aaa(a5==null?null:J.k(a5)),$async$pf)
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
return A.b(C.ahO(r,"ngmy_worksheet_item_v3_"+C.Bh(a8)+"_"+m),$async$pf)
case 29:w=30
return A.b(C.ahO(r,"ngmy_worksheet_thumb_v3_"+C.Bh(a8)+"_"+m),$async$pf)
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
case 14:case 10:a2=J.cG(b3),a3=a2.gae(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gP(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bEc(h),$async$pf)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ahP(r,"ngmy_worksheet_thumb_v3_"+C.Bh(a8)+"_"+a4,f),$async$pf)
case 40:g=i.U2(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ahO(r,"ngmy_worksheet_thumb_v3_"+C.Bh(a8)+"_"+a4),$async$pf)
case 41:g=i.U2(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ahO(r,"ngmy_worksheet_thumb_v3_"+C.Bh(a8)+"_"+a4),$async$pf)
case 42:case 34:a4=i.a
w=43
return A.b(C.ahP(r,"ngmy_worksheet_item_v3_"+C.Bh(a8)+"_"+a4,B.X.av(g.ak(),null)),$async$pf)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.v(a8))
w=31
break}J.c6(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ahP(r,"ngmy_worksheets_index_v3_"+C.Bh(a8),B.X.av(q,null)),$async$pf)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.v(a8))
u=!1
w=1
break}a3=a2.eO(b3,new C.h28(q))
a4=a3.$ti.k("cL<1,aa<q,@>>")
a7=A.B(new A.cL(a3,new C.h29(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ahP(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gY(B.a.i(a8.toLowerCase()))),B.X.av(a0,null)),$async$pf)
case 45:w=46
return A.b(J.hRY(r),$async$pf)
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
a1=A.ac(b1)
$.am.$1("[worksheets] saveWorksheetProjects error: "+A.v(a1))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$pf,v)},
Mq(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Mq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DP(d),$async$Mq)
case 3:t=g
s=J.cG(t)
r=s.bk(t,new C.haC(e))
if(r===-1)s.ca(t,0,e)
else s.n(t,r,e)
u=C.pf(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Mq,v)},
bFy(d,e){var w=0,v=A.j(x.H),u
var $async$bFy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DP(d),$async$bFy)
case 2:u=g
J.n1(u,new C.fLH(e))
w=3
return A.b(C.pf(d,u),$async$bFy)
case 3:return A.h(null,v)}})
return A.i($async$bFy,v)},
HA(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$HA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$HA)
case 3:l=f
k=A.a([],x._)
j=B.a.gY(B.a.i(d.toLowerCase()))
i=A.aW(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.X.aP(0,i,null)
if(x.j.b(t)){j=J.d4(t,x.f)
j=A.cF(j,new C.fOV(),j.$ti.k("M.E"),x.k)
s=A.a4(j).k("Y<M.E>")
r=A.B(new A.Y(j,new C.fOW(),s),s.k("M.E"))
B.d.b_(r,new C.fOX())
k=r}}catch(h){}w=4
return A.b(C.fva(d),$async$HA)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.ih9(k,p,d)
j=A.T(o)
s=j.k("N<1,aa<q,@>>")
s=A.B(new A.N(o,new C.fOY(),s),s.k("ak.E"))
n=B.X.av(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.S3(d,o),$async$HA)
case 7:case 6:j=j.k("Y<1>")
m=A.B(new A.Y(o,new C.fOZ(d),j),j.k("M.E"))
if(m.length!==0)C.aRN(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$HA,v)},
h1S(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$h1S=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.S3(d,e),$async$h1S)
case 3:t=J.dI(e,new C.h1T(d))
s=A.B(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aRN(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h1S,v)},
a4v(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a4v=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a4v)
case 2:n=g
m=B.a.gY(B.a.i(d.toLowerCase()))
l=A.aW(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.X.aP(0,l,null)
if(x.j.b(u)){m=J.d4(u,x.f)
m=A.cF(m,new C.hax(),m.$ti.k("M.E"),x.k)
t=A.a4(m).k("Y<M.E>")
s=A.B(new A.Y(m,new C.hay(),t),t.k("M.E"))
o=s}}catch(k){}q=J.oD(o,new C.haz(e))
if(B.a.i(e.x).length===0&&C.uC(e,d)){m=B.a.i(d.toLowerCase())
p=e.aH3(e.y===D.l3?D.l3:D.v6,m)}else p=e
if(q===-1)J.n0(o,0,p)
else J.aJ(o,q,p)
w=3
return A.b(C.S3(d,o),$async$a4v)
case 3:w=C.uC(p,d)?4:5
break
case 4:w=6
return A.b(C.aRM(C.Hy(p,d),p),$async$a4v)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a4v,v)},
aRZ(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aRZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.HA(d),$async$aRZ)
case 2:u=g
t=J.cG(u)
s=A.nA(t.eO(u,new C.fLo(e)))
t.bq(u,new C.fLp(e))
w=3
return A.b(C.S3(d,u),$async$aRZ)
case 3:w=s!=null&&C.aS0(s,d)?4:5
break
case 4:w=6
return A.b(C.fut(e),$async$aRZ)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aRZ,v)},
ajB(d){var w=d.f,v=A.T(w).k("Y<1>")
w=A.B(new A.Y(w,new C.haI(),v),v.k("M.E"))
return w},
hkN(d,e){var w,v=d.f,u=A.nA(new A.Y(v,new C.fKT(e),A.T(v).k("Y<1>")))
v=C.ajB(d)
w=A.T(v).k("Y<1>")
v=A.B(new A.Y(v,new C.fKU(e,u),w),w.k("M.E"))
B.d.b_(v,new C.fKV())
return v},
ioI(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hMK(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bk(C.hkN(d,u),new C.ha5(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
iqb(d,e){var w
if(e==null||e.length===0)return 1
w=C.hkN(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fPM(),A.T(w).k("N<1,H>")).eD(0,B.yv)+1},
iyg(d){var w,v=C.ajB(d)
if(v.length===0)return null
w=new A.Y(v,new C.h1M(),A.T(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
ioD(d){return A.J(["id",d.a,"name",d.b,"gender",C.hHP(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
iq6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.S(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aQ(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.I)(a0),++u){q=a0[u]
p=q.a
r.I(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.zB?n:q.c
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
d=q.aGZ(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cSb(a1,w,a3.d,a2.y,s,a0,v)},
Bu(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Bu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Bu)
case 3:q=f
p=B.a.gY(B.a.i(d.toLowerCase()))
o=A.aW(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.X.aP(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d4(t,x.f)
p=A.cF(p,new C.fOS(),p.$ti.k("M.E"),x.k)
s=A.a4(p).k("Y<M.E>")
p=A.B(new A.Y(p,new C.fOT(),s),s.k("M.E"))
B.d.b_(p,new C.fOU())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bu,v)},
ajj(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ajj=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.v6:D.l3
a7=C.Hy(b2,b3)
w=2
return A.b(C.Bu(b1),$async$ajj)
case 2:a8=b5
a9=J.cG(a8)
b0=a9.bk(a8,new C.h1H(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bFi(b1,b2),$async$ajj)
case 5:case 4:if(b0===-1){u=b2.aH3(a6,a7)
a9.ca(a8,0,u)}else{t=a9.h(a8,b0)
s=A.S(x.N,x.P)
for(r=t.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.I)(r),++p){o=r[p]
s.n(0,o.a,o)}for(r=b2.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.I)(r),++p){n=r[p]
m=n.a
l=s.h(0,m)
if(l==null)s.n(0,m,n)
else{k=n.f
j=k==null?null:B.a.i(k)
k=n.b
k=k.length!==0?k:l.b
i=n.c
i=i!==D.zB?i:l.c
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
s.n(0,m,l.aGZ(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b8<2>")
s=A.B(new A.b8(s,k),k.k("M.E"))
k=a5?D.v6:D.l3
u=t.cSd(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.S3(b1,a8),$async$ajj)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aRM(B.a.i(b3.toLowerCase()),u),$async$ajj)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ajj,v)},
hDv(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("N<1,aa<q,@>>"),k=A.B(new A.N(m,C.hLP(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hDw(d,e){var w=new A.V(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("N<1,aa<q,@>>")
u=A.B(new A.N(u,C.hLP(),t),t.k("ak.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
ieH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a6(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.amT(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hnt(),A.T(j).k("N<1,q>")).c0(0,new C.fuY())
t=A.B(j,j.$ti.k("M.E"))
if(u===v)s=D.v6
else s=B.d.q(t,u)?D.Py:D.l3
return w.aH3(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.amT(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d4(q,h)
h=A.cF(h,new C.fuZ(),h.$ti.k("M.E"),x.P)
p=A.a4(h).k("Y<M.E>")
o=A.B(new A.Y(h,new C.fv_(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.ba(n,new C.fv0(),x.N).c0(0,new C.fv1())
t=A.B(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.v6
else s=B.d.q(t,u)?D.Py:D.l3
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.z(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bh(J.k(l==null?"":l))
if(l==null)l=new A.V(Date.now(),0,!1)
j=A.aI(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.i.M(j)
if(j==null)j=0
return new C.l1(h,r,p,!m,t,o,l,j,v,s,B.cj)},
fva(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fva=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fve()
h=x.N
g=x.z
w=7
return A.b(A.ie(A.a([A.lM("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.lM("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.lM("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fva)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.S(h,g)
h=A.B(p,g)
l=h
J.h2(l,o)
J.h2(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aJ(m,j,k)}l=m
h=A.a4(l).k("b8<2>")
h=A.cF(new A.b8(l,h),new C.fvb(a0),h.k("M.E"),x.k)
l=A.a4(h).k("Y<M.E>")
l=A.B(new A.Y(h,new C.fvc(),l),l.k("M.E"))
B.d.b_(l,new C.fvd())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.ac(a1)
d=J.k(i)
l=B.a.q(d,"Could not find the table 'public.family_trees'")||B.a.q(d,'relation "public.family_trees" does not exist')
h=$.am
if(l)h.$1("[family_trees] table missing \u2014 run supabase/family_trees_table.sql")
else h.$1("[family_trees] fetch error: "+A.v(i))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fva,v)},
ih9(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a6(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dP(e,new C.fzB(),v).c0(0,new C.fzC())
t=A.cY(u,u.$ti.k("M.E"))
s=A.S(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Hy(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.l3){m=q.e
m=!new A.N(m,A.hnt(),A.T(m).k("N<1,q>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gP(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.iq6(l,v)
o=C.Hy(k,w)
p=v.d
s.n(0,u,o===w?k.bgz(p,D.v6):k.bgz(p,v.y))}j=s.$ti.k("b8<2>")
j=A.B(new A.b8(s,j),j.k("M.E"))
B.d.b_(j,new C.fzD())
return j},
S3(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$S3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$S3)
case 2:u=g
t=B.a.gY(B.a.i(d.toLowerCase()))
s=J.ba(e,new C.fCC(),x.a)
s=A.B(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aF("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.X.av(s,null)),$async$S3)
case 3:return A.h(null,v)}})
return A.i($async$S3,v)},
aRM(d,e){return C.imq(d,e)},
imq(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aRM=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.me("family_trees",A.a([C.hDv(e,d)],p),null,B.cS),$async$aRM)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.me("family_trees",A.a([C.hDw(e,d)],p),null,B.cS),$async$aRM)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.ac(n)
$.am.$1("[family_trees] upsert error: "+A.v(q))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aRM,v)},
aRN(d,e){return C.imr(d,e)},
imr(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aRN=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("N<1,aa<q,@>>")
m=n.k("ak.E")
l=A.B(new A.N(e,new C.fHX(d),n),m)
r=l
w=7
return A.b(A.me("family_trees",r,null,B.cS),$async$aRN)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.N(e,new C.fHY(d),n),m)
p=k
w=8
return A.b(A.me("family_trees",p,null,B.cS),$async$aRN)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.ac(i)
$.am.$1("[family_trees] bulk upsert error: "+A.v(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aRN,v)},
fut(d){return C.idV(d)},
idV(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fut=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Su("family_trees",A.J(["id",d],x.N,x.z),null,B.cS),$async$fut)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.ac(p)
$.am.$1("[family_trees] delete error: "+A.v(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fut,v)},
rx:function rx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lI:function lI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cIe:function cIe(){},
cId:function cId(){},
cIb:function cIb(){},
cIc:function cIc(){},
IF:function IF(d,e){this.a=d
this.b=e},
i7:function i7(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
amS:function amS(d,e){this.a=d
this.b=e},
fLd:function fLd(){},
haE:function haE(d){this.a=d},
fII:function fII(d){this.a=d},
l1:function l1(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bUo:function bUo(){},
bUn:function bUn(){},
bUk:function bUk(){},
bUl:function bUl(){},
bUm:function bUm(){},
fyS:function fyS(){},
fup:function fup(){},
fuq:function fuq(){},
fur:function fur(){},
h25:function h25(){},
h26:function h26(){},
h27:function h27(){},
h28:function h28(d){this.a=d},
h29:function h29(){},
haC:function haC(d){this.a=d},
fLH:function fLH(d){this.a=d},
fOV:function fOV(){},
fOW:function fOW(){},
fOX:function fOX(){},
fOY:function fOY(){},
fOZ:function fOZ(d){this.a=d},
h1T:function h1T(d){this.a=d},
hax:function hax(){},
hay:function hay(){},
haz:function haz(d){this.a=d},
fLo:function fLo(d){this.a=d},
fLp:function fLp(d){this.a=d},
haI:function haI(){},
fKT:function fKT(d){this.a=d},
fKU:function fKU(d,e){this.a=d
this.b=e},
fKV:function fKV(){},
ha5:function ha5(d){this.a=d},
fPM:function fPM(){},
h1M:function h1M(){},
fOS:function fOS(){},
fOT:function fOT(){},
fOU:function fOU(){},
h1H:function h1H(d){this.a=d},
fuY:function fuY(){},
fuZ:function fuZ(){},
fv_:function fv_(){},
fv0:function fv0(){},
fv1:function fv1(){},
fve:function fve(){},
fvf:function fvf(d){this.a=d},
fvb:function fvb(d){this.a=d},
fvc:function fvc(){},
fvd:function fvd(){},
fzB:function fzB(){},
fzC:function fzC(){},
fzD:function fzD(){},
fCC:function fCC(){},
fHX:function fHX(d){this.a=d},
fHY:function fHY(d){this.a=d},
cIf:function cIf(d,e){this.a=d
this.b=e},
cIg:function cIg(d,e){this.a=d
this.b=e},
aJJ:function aJJ(d,e,f){this.a=d
this.b=e
this.c=f},
bbV:function bbV(){this.b=this.a=0},
bbU:function bbU(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bzI:function bzI(){},
xu(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcg()+"/"+w.gcv()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.b1(B.o.v(w.gnB()),2,"0")+":"+B.a.b1(B.o.v(w.gH1()),2,"0")},
inv(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
J.br(a4.save())
a4.translate(a6.a,a6.b-b0)
w=A.bY(new A.r(0,b0+a7*0.005),a7*0.06,a7*0.45)
v=B.v.j(0.22)
$.R()
u=A.L()
u.r=v.gp(0)
a5.c1(w,u)
for(w=a7*0.05,v=-a7,u=v*0.24,t=a7*0.1,s=u+a7*0.2,r=a7*0.04,q=a7*0.065,p=v*0.05,o=a7*0.14,n=p+w,m=a7*0.025,l=0;l<2;++l){k=B.hn[l]*a7*0.075
j=k-w
j=A.bu(new A.a2(j,u,j+t,s),new A.aP(r,r))
i=new A.ar(B.T,B.Q,B.V,B.W,B.U)
i.r=B.di.gp(0)
a5.aq(j,i)
k-=q
k=A.bu(new A.a2(k,p,k+o,n),new A.aP(m,m))
i=new A.ar(B.T,B.Q,B.V,B.W,B.U)
i.r=B.c.gp(0)
a5.aq(k,i)}w=v*0.16
u=v*0.52
t=a7*0.32
s=w+t
q=a7*0.09
h=A.bu(new A.a2(w,u,s,u+t),new A.aP(q,q))
q=A.L()
q.r=b2.gp(0)
a5.aq(h,q)
q=v*0.27
t=a7*0.02
t=A.bu(new A.a2(w,q,s,q+a7*0.045),new A.aP(t,t))
q=B.c.j(0.35)
s=A.L()
s.r=q.gp(0)
a5.aq(t,s)
s=v*0.47
g=new A.r(v*0.15,s)
f=new A.r(a7*0.15,s)
s=v*0.06
t=a7*0.07
a5.ah(g,g.a5(0,new A.r(s,a7*0.17)),A.ahN(B.ta,t))
s=g.a5(0,new A.r(s,a7*0.18))
q=A.L()
q.r=B.ta.gp(0)
a5.O(s,r,q)
e=-2.5+b3*0.5
d=f.a5(0,new A.r(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,A.ahN(B.ta,t))
w=A.L()
w.r=B.ta.gp(0)
a5.O(d,r,w)
v*=0.7
a0=new A.r(0,v)
a1=a7*0.22
if(b1===1){w=a0.a5(0,new A.r(0,-a1*0.12))
u=A.L()
u.r=B.mg.gp(0)
a5.O(w,a1*1.18,u)}w=A.L()
w.r=B.ta.gp(0)
a5.O(a0,a1,w)
if(b1===0){w=A.bX(a0,a1)
u=A.L()
u.r=B.mg.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.bX(a0,a1)
u=A.L()
u.r=B.mg.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a1*0.3,u=a1*0.2,l=0;l<2;++l){a2=B.hn[l]
t=new A.ar(B.T,B.Q,B.V,B.W,B.U)
t.r=B.mg.gp(0)
a5.O(new A.r(0+a2*a1*1.05,w),u,t)}}a3=B.i.F(a8*0.8,3)>2.85
for(w=v+a1*0.42,u=a1*0.12,t=a1*0.25,s=a8*0.7,r=a1*0.13,v+=a1*0.05,q=-a1*0.15,p=v+0,o=a1*0.15,l=0;l<2;++l){n=B.hn[l]*a1
m=0+n*0.4
if(a3){k=new A.ar(B.T,B.Q,B.V,B.W,B.U)
k.b=B.ab
k.c=1.6
k.r=B.bq.gp(0)
k.d=B.bG
a5.ah(new A.r(m+q,p),new A.r(m+o,p),k)}else{k=new A.ar(B.T,B.Q,B.V,B.W,B.U)
k.r=B.c.gp(0)
a5.O(new A.r(m,v),t,k)
k=Math.sin(s)
j=new A.ar(B.T,B.Q,B.V,B.W,B.U)
j.r=B.v.gp(0)
a5.O(new A.r(m+k*a1*0.06,p),r,j)}m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=B.hX.j(0.5).gp(0)
a5.O(new A.r(0+n*0.62,w),u,m)}a5.cQ(A.bY(a0.a5(0,new A.r(0,a1*0.5)).aJ(0,new A.r(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,A.ahN(B.bq,1.8))
a4.restore()},
i4t(){var w,v=$.oz(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.hh(u)},
auP(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$auP=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ca(),$async$auP)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$auP)
case 8:r=e
if(r==null){u=A.S(x.N,x.z)
w=1
break}q=J.t(r,"stashes")
if(x.f.b(q)){o=A.a1(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ac(m)
$.am.$1("[worksheet qr stash] load: "+A.v(p))
w=7
break
case 4:w=2
break
case 7:u=A.S(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$auP,v)},
auQ(d){return C.i4u(d)},
i4u(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$auQ=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ca(),$async$auQ)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hT("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cS,null),$async$auQ)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ac(p)
$.am.$1("[worksheet qr stash] save: "+A.v(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$auQ,v)},
auS(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$auS=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ca(),$async$auS)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.i4t()
w=4
return A.b(C.auP(),$async$auS)
case 4:r=h
q=B.a.i(e)
p=B.dX.aK(t)
J.aJ(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cM.gco().aK(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.auQ(r),$async$auS)
case 5:u=new A.a1T("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auS,v)},
auR(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$auR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.ca(),$async$auR)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.auP(),$async$auR)
case 4:q=f
p=J.a6(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a6(o)
m=A.aI(n.h(o,"usesRemaining"))
l=m==null?null:B.i.M(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.cc.cE(0,B.cE.aK(t))}catch(h){r=A.ac(h)
$.am.$1("[worksheet qr stash] decode: "+A.v(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dH(A.a1(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.auQ(q),$async$auR)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auR,v)},
hxT(){var w=new A.V(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cU.aw(999999)},
i4v(d){var w,v,u,t,s,r,q
try{w=A.Bs(d)
if(w==null)return d
v=w
if(J.Mw(v)>960||J.Mv(v)>960){s=v
r=J.Mw(v)>=J.Mv(v)?960:null
v=A.So(s,J.Mv(v)>J.Mw(v)?960:null,B.IJ,r)}s=v
u=A.J0(82).zA(s,B.rd)
if(J.ad(u)===0)return d
s=new Uint8Array(A.c9(u))
return s}catch(q){t=A.ac(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.v(t))
return d}},
cqx(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cqx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.i4v(e)
$.cqt.n(0,s,t)
u=C.bHr(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cqx,v)},
b5B(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b5B=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d3(l,"data:image")){u=null
w=1
break}t=4
r=J.eC(l,",")?B.d.gal(J.lP(l,",")):l
q=B.cE.aK(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hxT()
w=7
return A.b(C.cqx(p,q),$async$b5B)
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
n=A.ac(k)
$.am.$1("[worksheet-thumb] persistDataUrl failed: "+A.v(n))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b5B,v)},
cqu(d){var w=0,v=A.j(x.T),u,t,s
var $async$cqu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.X(s,"data:image")){u=s
w=1
break}w=3
return A.b(A.cqw(s),$async$cqu)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cM.gco().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cqu,v)},
aaa(d){var w=0,v=A.j(x.H),u,t
var $async$aaa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=A.hLw(d)
if(t==null){w=1
break}$.cqt.W(0,t)
w=3
return A.b(C.bHq(t),$async$aaa)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aaa,v)},
bHr(d,e){return C.iwB(d,e)},
iwB(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bHr=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aQB
w=7
return A.b(n==null?$.aQB=A.hjD():n,$async$bHr)
case 7:r=g
q=new Uint8Array(A.c9(e))
p=J.mj(r,"thumbs","readwrite")
B.iN.mj(J.mi(p,"thumbs"),q,l)
w=8
return A.b(J.oC(p),$async$bHr)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.ac(k)
$.am.$1("[worksheet-thumb idb put] "+A.v(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bHr,v)},
bHq(d){return C.iwz(d)},
iwz(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bHq=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aQB
w=7
return A.b(o==null?$.aQB=A.hjD():o,$async$bHq)
case 7:r=f
q=J.mj(r,"thumbs","readwrite")
B.iN.GB(J.mi(q,"thumbs"),m)
w=8
return A.b(J.oC(q),$async$bHq)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.ac(l)
$.am.$1("[worksheet-thumb idb delete] "+A.v(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bHq,v)}},D,N,V,W,X,F,Y,O,P,Q,Z,R,A_,S,A0,L,G,A1
J=c[1]
A=c[0]
B=c[2]
T=c[60]
H=c[112]
M=c[98]
I=c[104]
U=c[24]
E=c[52]
K=c[39]
C=a.updateHolder(c[4],C)
D=c[108]
N=c[85]
V=c[109]
W=c[79]
X=c[88]
F=c[47]
Y=c[69]
O=c[61]
P=c[70]
Q=c[84]
Z=c[110]
R=c[111]
A_=c[40]
S=c[94]
A0=c[25]
L=c[58]
G=c[81]
A1=c[89]
C.aqs.prototype={}
C.b0R.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bkU(),f=h.x!=null&&h.zV(i).length===0
if(h.x!=null)w=f?B.b5:B.bE
else w=h.gV3()?B.bE:B.ea
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.K(D.brY,B.r,1)
s=x.p
r=A.o(i,A.x(A.a([A.o(i,D.flB,B.f,i,i,new A.n(B.b5.j(0.12),i,i,A.m(999),i,i,B.m),i,i,i,i,B.hj,i,i,i),B.S,D.fRP,B.au,A.c(C.xu(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fNo,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,D.b9y,i,i,i,i,B.P6,i,i,i)
q=A.m(16)
p=A.K(B.bn,B.r,1)
o=A.K(B.b5.j(0.28),B.r,1)
n=A.hlU(h.d)
o=A.o(B.z,C.b0Q(A.fS7(h.e,n),30),B.f,i,i,new A.n(B.mj,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.c(v,i,i,i,i,i,i,D.fIk,B.K,i,i)
m=A.m(14)
l=A.K(B.bn,B.r,1)
q=A.o(i,A.x(A.a([o,B.P,n,B.bC,D.fS7,B.af,A.o(i,A.x(A.a([D.h7t,B.bC,A.c(A.Bw(h.c),i,i,i,i,i,i,D.fCT,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.c,i,l,m,i,i,B.m),i,i,i,i,B.fa,i,i,1/0)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.aS,i,p,q,i,i,B.m),i,i,i,i,G.anE,i,i,i)
p=A.m(16)
m=A.K(B.bn,B.r,1)
l=j.aUc("Original due",C.xu(h.r,!1))
n=j.aUc("Current due",C.xu(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.o(i,A.x(A.a([l,B.P,n,B.S,A.o(i,A.c(h.gaO9(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.n(o,i,i,k,i,i,B.m),i,i,i,i,B.wS,i,i,1/0),B.S,j.cmG(),B.P,j.c94(g,f)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.c,i,m,p,i,i,B.m),i,i,i,i,B.bl,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.K(B.bn,B.r,1)
B.d.u(p,A.a([B.S,A.o(i,A.x(A.a([D.fT7,B.au,A.c(q,i,i,i,i,i,i,D.fHv,i,i,i)],s),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.aS,i,n,o,i,i,B.m),i,i,i,i,B.bl,i,i,1/0)],s))}if(h.gaIK()){q=A.m(14)
o=A.K(B.cA,B.r,1.6)
B.d.u(p,A.a([B.S,A.o(i,A.x(A.a([D.h8N,B.P,A.bv(A.m(12),A.ec(new A.a5(1/0,88,A.b4(i,i,i,new A.XB(h.ax,B.a_,D.fqp,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.c,i,o,q,i,i,B.m),i,i,i,i,B.CV,i,i,i)],s))}p.push(B.aA)
p.push(D.h0z)
return A.o(i,A.x(A.a([r,new A.D(B.a1L,A.x(p,B.am,i,B.e,B.h,0,B.p),i)],s),B.am,i,B.e,B.M,0,B.p),B.aq,i,i,new A.n(B.c,i,t,u,i,i,B.m),i,i,i,i,i,i,i,1/0)},
aUc(d,e){var w=null
return A.A(A.a([A.E(A.c(d,w,w,w,w,w,w,D.ad3,w,w,w),1),A.c(e,w,w,w,w,w,w,D.fDW,w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
cmG(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.abb(B.ea,u,"Not paid yet")
w=t.zV(null).length
v=w===0?B.b5:B.bE
return this.abb(v,u,C.xu(t.x,!0))},
c94(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.abb(B.b5,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.abb(B.b5,t,"None yet")
w=A.c("Missed days ("+w+")",u,u,u,u,u,u,D.ad3,u,u,u)
v=A.T(d).k("N<1,h8>")
v=A.B(new A.N(d,new C.c9I(),v),v.k("ak.E"))
return A.x(A.a([w,B.al,A.bZ(B.bI,v,B.br,u,6,6)],x.p),B.B,u,B.e,B.h,0,B.p)},
abb(d,e,f){var w=null
return A.A(A.a([A.E(A.c(e,w,w,w,w,w,w,D.ad3,w,w,w),1),new A.d6(1,B.cg,A.c(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e3,w,w),w)],x.p),B.B,w,B.e,B.h,0,w,w)}}
C.be9.prototype={
a2(d,e){new A.XB(this.b,B.a_,e,!0,3.5,null).a2(d,e)},
aD(d){return d.b!==this.b}}
C.aqF.prototype={
S(){return new C.aFu(A.a([],x.bp))},
ge3(){return this.c}}
C.aFu.prototype={
Z(){this.a4()
this.JA()},
JA(){var w=0,v=A.j(x.H),u,t=this,s
var $async$JA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3K(t.a.c),$async$JA)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.dSV(t,s))
case 1:return A.h(u,v)}})
return A.i($async$JA,v)},
aWa(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.l(v,v,u?B.bu:B.bi,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bu:B.bi).j(0.22)
w=A.m(10)
return A.bA(v,new A.b6(4,r,new A.av(u,1,B.r,-1)),v,B.bl,v,v,v,v,!0,new A.b6(4,w,new A.av((this.a.d.a?B.bu:B.bi).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.m(10),D.b7c),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aW9(d){return this.aWa(d,null)},
Qx(d){return this.cqn(d)},
cqn(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qx=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.II:B.eY
w=7
return A.b(new A.i8().D1(72,900,900,n),$async$Qx)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fs(),$async$Qx)
case 8:p=f
n=B.cM.gco().aK(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.ac(l)
n=r.c
if(n!=null)n.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.c("Could not pick photo: "+A.v(o),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Qx,v)},
b4u(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.m(10),n=A.K((q?B.bu:B.bi).j(0.18),B.r,1)
if(d)q=B.cX
else q=s.a.d.a?B.bu:B.bi
q=A.W(e,q,r,r,r,18)
w=A.c(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aS:B.aw,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cX
else u=s.a.d.a?B.bu:B.bi
t=x.p
u=A.E(A.x(A.a([w,A.c(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.B,r,B.e,B.h,0,B.p),1)
v=A.fr(r,r,r,r,r,r,r,r,r,r,r,B.cX,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cl)
q=A.a([q,B.aa,u,A.bO(!1,A.c(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.W(B.cB,s.a.d.a?B.bu:B.bi,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cl))
return A.o(r,A.A(q,B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.n(p,r,n,o,r,r,B.m),r,r,r,B.jg,D.bFa,r,r,r)},
DV(d){return this.bF8(d)},
bF7(){return this.DV(null)},
bF8(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DV=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ax()
r=new A.at(new A.bd(a4,B.b8,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.i.fM(a4)
p=a5.c
a4=a4===q?B.o.v(B.i.M(p)):B.i.ab(p,2)}o=new A.at(new A.bd(a4,B.b8,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.at(new A.bd(a4,B.b8,B.aP),s)
if(a3){a4=new A.V(Date.now(),0,!1).bQ(6048e8)
m=A.c0(a4.gck(),a4.gcg(),a4.gcv(),0,0,0,0,0)}else{a4=a5.f
m=A.c0(a4.gck(),a4.gcg(),a4.gcv(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bs(a4,!0,x.cT)
i=a3?null:A.hlU(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xF?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hU(B.v.j(0.55),!0,"Dismiss",a4,new C.dSE(),new C.dSF(a2,t,a5,r,new C.dSG(a2,t),o,n,j),B.eI,!0,x.y),$async$DV)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cA(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.V$=s
r.R$=0
o.V$=s
o.R$=0
n.V$=s
n.R$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.L(x.q).f.U(D.fwZ)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.U(D.fvD)
w=1
break}a1=A.fS7(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xF?"male":"female"
w=7
return A.b(A.ajA(a3,A.huu(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DV)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xF?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c0(a3.gck(),a3.gcg(),a3.gcv(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c0(a4.gck(),a4.gcg(),a4.gcv(),0,0,0,0,0)))a5.cUy(a2.a)
w=8
return A.b(A.ajA(t.a.c,a5),$async$DV)
case 8:case 5:w=9
return A.b(t.JA(),$async$DV)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DV,v)},
aWQ(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cX.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cX
else s=(this.a.d.a?B.bu:B.bi).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b0Q(d,18)
if(g)q=B.cX
else q=this.a.d.a?B.aS:B.aw
return A.aF(!1,B.a3,!0,v,A.aM(!1,u,!0,A.o(p,A.A(A.a([r,B.bk,A.c(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.F,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.b9,B.h,0,p,p),B.f,p,p,new A.n(p,p,s,t,p,p,B.m),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
Tm(d){return this.cIv(d)},
cIv(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Tm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hU(B.v.j(0.55),!0,"Dismiss",s,new C.dSY(),new C.dSZ(t,d),B.hi,!0,x.y),$async$Tm)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.ajA(t.a.c,d),$async$Tm)
case 7:w=8
return A.b(t.JA(),$async$Tm)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Tm,v)},
Qw(d,e){return this.bQb(0,e)},
bQb(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lp(s,"Cancel","Delete",e.b+" \xb7 "+A.Bw(e.c)+" will be removed from this device.","Delete this debt?"),$async$Qw)
case 3:if(!g){w=1
break}w=4
return A.b(C.fLv(t.a.c,e.a),$async$Qw)
case 4:w=5
return A.b(t.JA(),$async$Qw)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qw,v)},
ah3(d){return this.ck3(d)},
ck3(d){var w=0,v=A.j(x.H),u=this,t
var $async$ah3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.L,null,new C.dSS(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ah3)
case 2:return A.h(null,v)}})
return A.i($async$ah3,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.eAX
w=J.dI(m.d,new C.dT_())
v=A.B(w,w.$ti.k("M.E"))
w=J.dI(m.d,new C.dT0())
u=A.B(w,w.$ti.k("M.E"))
t=B.d.cC(v,0,new C.dT1())
w=A.m(18)
s=m.a.d.a
r=s?D.cG0:D.aEJ
q=A.K(s?B.cX.j(0.35):B.cX.j(0.18),B.r,1)
s=A.o(l,D.c6o,B.f,l,l,new A.n(B.cX.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.m),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.ar,A.E(A.c("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.aw,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a3,!0,A.m(12),A.aM(!1,A.m(12),!0,D.eAh,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dT2(m),l,l,l,l,l,l,l),B.f,B.cX,0,l,l,l,l,l,B.ai)],p),B.l,l,B.e,B.h,0,l,l)
o=A.E(m.cEw("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bw(t)
r=A.a([A.o(l,A.x(A.a([s,B.af,A.A(A.a([o,B.aa,A.E(m.baI(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.h,0,l,l)],p),B.B,l,B.e,B.h,0,B.p),B.f,l,l,new A.n(l,l,q,w,l,new A.a7(B.ay,B.aC,B.x,r,l,l),B.m),l,l,l,l,B.anB,l,l,l),B.aA],p)
if(J.cu(m.d)){w=m.a.d.a
s=w?B.ej:B.c
q=A.m(18)
o=A.K((w?B.bu:B.bi).j(0.12),B.r,1)
n=A.o(l,D.c0X,B.f,l,l,new A.n(B.cX.j(0.12),l,l,A.m(16),l,l,B.m),l,52,l,l,l,l,l,52)
w=A.c("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.aw,l,l,l,l,l,l,l,l,15,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.o(l,A.x(A.a([n,B.af,w,B.au,A.c("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bi,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.h,0,B.p),B.f,l,l,new A.n(s,l,o,q,l,l,B.m),l,l,l,l,D.bHT,l,l,1/0))}else{w=m.gcpC()
s=A.B(new A.N(v,w,A.T(v).k("N<1,w>")),x.l)
if(u.length!==0){q=A.a([B.al,new A.D(D.bJz,A.c("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bi,l,l,l,l,l,l,l,l,12,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.N(u,w,A.T(u).k("N<1,w>")))
B.d.u(s,q)}B.d.u(r,s)}return A.x(r,B.am,l,B.e,B.h,0,B.p)},
baI(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.v.j(0.22):B.c.j(0.85),s=A.m(14),r=A.K((v.a.d.a?B.bu:B.bi).j(0.12),B.r,1),q=A.c(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bu:B.bi,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cX
else w=v.a.d.a?B.aS:B.aw
return A.o(u,A.x(A.a([q,B.bC,A.c(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.B,u,B.e,B.h,0,B.p),B.f,u,u,new A.n(t,u,r,s,u,u,B.m),u,u,u,u,B.ex,u,u,u)},
cEw(d,e){return this.baI(!1,d,e)},
cpD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zV(j).length,h=d.bk9()
if(d.x!=null){w=d.zV(j).length
v=w===0?B.cX:B.bE}else if(d.gV3())v=B.bE
else{if(h)w=B.cX
else w=k.a.d.a?B.bu:B.bi
v=w}if(d.x!=null){w=d.zV(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xu(u,!1)}else{u.toString
t="Paid "+C.xu(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xu(w,!1)+" \xb7 "+i+" missed":"Due "+C.xu(w,!1)}w=k.a.d.a?B.ej:B.c
u=A.m(18)
if(d.gV3()&&d.x==null)s=B.bE.j(0.35)
else s=(k.a.d.a?B.bu:B.bi).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ab(0,B.H,B.v.j(0.04),B.cO,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bs:B.mj
o=A.K(d.gV3()&&d.x==null?B.bE.j(0.45):B.cX.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hlU(d.d)
o=A.o(B.z,A.d0(C.b0Q(A.fS7(d.e,m),24),n),B.f,j,j,new A.n(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.aw
m=x.p
n=A.a([new A.d6(1,B.cg,A.c(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.F,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaIK())B.d.u(n,A.a([B.e5,A.W(B.PZ,B.cX.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.h,0,j,j),B.cT,A.c(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.B,j,B.e,B.h,0,B.p),1)
n=A.Bw(d.c)
l=k.a.d.a?B.aS:B.aw
n=A.c(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.o(j,A.aF(!1,B.a3,!0,j,A.aM(!1,q,!0,new A.D(V.anp,A.A(A.a([o,B.bb,p,B.aa,A.x(A.a([n,B.bC,A.W(B.eL,(k.a.d.a?B.bu:B.bi).j(0.5),j,j,j,18)],m),B.dG,j,B.e,B.h,0,B.p)],m),B.l,j,B.e,B.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dSU(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.n(w,j,s,u,r,j,B.m),j,j,j,B.d4,j,j,j,j)}}
C.uX.prototype={}
C.amG.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.b7
u=v?B.B:B.l
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.K(q,B.r,t?1.2:1.6)
p=A.a([new A.ab(0,B.H,B.v.j(0.45),B.cz,16)],x.V)
o=x.p
n=A.a([],o)
m=B.v.j(t?0.07:0.3)
l=A.K(r.j(0.6),B.r,1)
n.push(A.ay(a0,A.o(a0,A.W(B.cB,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.n(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a5:B.z
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iZ,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.c(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aAR,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.HM,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.dk(B.dv,m,B.f,A.A(l,B.l,a0,B.e,B.M,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bEm,A.c(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cL:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fB,A.x(a2,u,a0,B.e,B.M,0,B.p),a0),1))
n.push(D.frd)
a2=A.a([A.A(n,B.l,a0,B.e,B.h,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.D(B.wR,A.o(a0,a0,B.f,a0,a0,new A.n(a0,a0,a0,a0,a0,new A.a7(B.a5,B.a9,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.m),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lZ,A.x(a2,B.l,a0,B.e,B.M,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.o(a0,e,B.f,a0,a0,new A.n(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.m),a0,a0,a0,B.hJ,a0,a0,a0,a0)}return A.o(a0,e,B.f,a0,a0,new A.n(a0,a0,q,s,p,new A.a7(B.ay,B.aC,B.x,a1.d,a0,a0),B.m),a0,a0,a0,D.bFE,a0,a0,a0,a0)}}
C.aXz.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.o(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.b7?B.b7:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.c(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bo:B.cL,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.h,0,q,q),B.cT,n],m)
if(p.z)o.push(new A.D(B.uY,n,q))
return new A.D(B.d4,A.x(o,B.l,q,B.e,B.M,0,B.p),q)}}
C.Un.prototype={
S(){return new C.bhM()}}
C.bhM.prototype={
gc3G(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aE(d,n,x.w).w,l=x.p,k=A.a([D.eAS,D.eAY],l)
for(w=0;w<8;++w){v=D.a6a[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Iw:B.A1
q=t===s
r=A.W(r,q?B.eE:B.bV,n,n,n,17)
q=q?B.c:B.ac
r=A.a([r,B.bk,A.c(v.b,n,n,n,n,n,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.aa,new A.bx(1,B.ba,A.c(v.c,n,1,B.a2,n,n,n,B.Bo,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.av(B.eE,2,B.r,-1)
s=new A.n(n,n,new A.bE(p,p,p,p),new A.bc(s,s,s,s),n,n,B.m)}else s=n
q=o.a
k.push(A.ay(n,new A.D(B.eX,A.x(A.a([new A.D(B.nb,new A.c3(B.aL,B.e,B.h,B.l,n,B.p,n,0,r,n),n),A.o(n,new A.dp(!0,new C.amG(v,q.d,q.e,new C.diu(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.B,n,B.e,B.h,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.div(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bG1,A.bJ(D.hen,n,new C.diw(o,d),A.bn(B.b2,n,n,n,n,B.pf,n,n,new A.b9(A.m(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cO(new A.aY(0,1/0,0,m.a.b*0.9),A.cn(k,n,n,D.bKv,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nx.prototype={
ak(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bgL(d,e,f){return new C.nx(this.a,e,d,f)}}
C.IE.prototype={
x8(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.IE(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aGS(d){var w=null
return this.x8(w,w,w,w,w,d,w,w,w,w,w,w)},
cQa(d){var w=null
return this.x8(w,w,w,w,d,w,w,w,w,w,w,w)},
bgJ(d,e,f){var w=null
return this.x8(d,w,w,w,w,w,w,w,e,w,f,w)},
cQP(d){var w=null
return this.x8(w,w,w,w,w,w,d,w,w,w,w,w)},
cQY(d){var w=null
return this.x8(w,w,w,w,w,w,w,w,w,d,w,w)},
cQ8(d){var w=null
return this.x8(w,w,w,d,w,w,w,w,w,w,w,w)},
cR_(d){var w=null
return this.x8(w,w,w,w,w,w,w,w,w,w,w,d)},
cQ5(d){var w=null
return this.x8(w,w,d,w,w,w,w,w,w,w,w,w)},
cQ0(d){var w=null
return this.x8(w,d,w,w,w,w,w,w,w,w,w,w)},
Gt(d){var w=null
return this.x8(w,w,w,w,w,w,w,d,w,w,w,w)},
cR7(d,e,f,g,h,i,j,k,l,m,n){return this.x8(d,e,f,g,null,h,i,j,k,l,m,n)},
ak(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cNF(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bT5(d),k=A.aI(d.h(0,"emblem")),j=k==null?o:B.i.M(k),i=A.aI(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Ev.gew(D.Ev))
s=i==null?o:B.i.D(i,18,36)
r=l.$2("position",D.a7T)
q=l.$2("frame",D.a7c)
l=l.$2("texture",D.a78)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cR7(p,u,t,q,r,A.rm(d.h(0,"ribbon"))?A.Ha(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a02.prototype={
S(){return new C.aCs(A.a([],x.I),D.Px)},
ge3(){return this.c}}
C.aCs.prototype={
Z(){var w,v=this
v.a4()
v.f=A.Ao(0,1)
w=$.ax()
v.z=new A.at(B.ax,w)
v.Q=new A.at(B.ax,w)
v.lh()
w=v.a
C.bFI(w.c,w.d).bF(new C.dja(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.d()
u.t()
u=v.z
u===$&&A.d()
w=$.ax()
u.V$=w
u.R$=0
u=v.Q
u===$&&A.d()
u.V$=w
u.R$=0
v.a3()},
lh(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LY(s.c,s.d),$async$lh)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.diZ(t,r))
t.ayv()
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
gav2(){var w,v=this
if(!J.cu(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
ayv(){var w,v,u=this.gav2(),t=this.z
t===$&&A.d()
w=u==null
v=w?null:u.b
t.sb2(0,v==null?"":v)
t=this.Q
t===$&&A.d()
w=w?null:u.c
t.sb2(0,w==null?"":w)},
cis(d){this.l(new C.diW(this,d))
this.ayv()},
Oo(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Oo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nx(B.o.v(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aTH(r.c,r.d,s),$async$Oo)
case 3:w=4
return A.b(t.lh(),$async$Oo)
case 4:if(t.c==null||J.cu(t.d)){w=1
break}q=J.oD(t.d,new C.dix(s))
p=q>=0?q:J.ad(t.d)-1
t.l(new C.diy(t,p))
t.ayv()
r=t.f
r===$&&A.d()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.C_(p+1,B.cn,B.l0),$async$Oo)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Oo,v)},
BE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$BE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.d()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.d()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gav2()
s=s==null?null:s.a
if(s==null)s=B.o.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aTH(o.c,o.d,new C.nx(s,r,q,new A.V(p,0,!1))),$async$BE)
case 3:w=4
return A.b(t.lh(),$async$BE)
case 4:if(t.c==null){w=1
break}t.l(new C.dj_(t))
case 1:return A.h(u,v)}})
return A.i($async$BE,v)},
P6(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$P6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gav2()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.diG(r),s,null,!0,!0,x.y),$async$P6)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bFs(s.c,s.d,r.a),$async$P6)
case 4:t.l(new C.diH(t))
w=5
return A.b(t.lh(),$async$P6)
case 5:if(t.c!=null){s=t.f
s===$&&A.d()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.d()
s.V6(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$P6,v)},
zg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$zg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BE(),$async$zg)
case 5:case 4:if(t.c==null){w=1
break}w=J.cK(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.Sm(s,r.r,o,p,q),$async$zg)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a8(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hMi(s,r.x,r.r),$async$zg)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LY(s.c,s.d),$async$zg)
case 10:l=e
for(s=n.d,r=J.cG(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.nx(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.BF(r.c,r.d,l),$async$zg)
case 11:w=12
return A.b(t.lh(),$async$zg)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.c("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$zg,v)},
a2b(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a2b=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BE(),$async$a2b)
case 5:case 4:if(t.c==null){w=1
break}s=t.gze(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dA(D.Aq,new C.diX(t),new C.diY())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new A.o8("Our Family",o,"",""))
for(o=J.aT(t.d);o.C();){n=o.gP(o)
p.push(new A.o8(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(A.hnK(o,new A.tT(s,r,"",p,new A.vd(q.d,null,null,null,null,"","","")),null),$async$a2b)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a2b,v)},
OO(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$OO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BE(),$async$OO)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.aij,null,new C.diC(t),s,!0,!0,!0,E.abb,!1,!1,x.N),$async$OO)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cQa(r)
t.l(new C.diD(t,q))
s=t.a
w=7
return A.b(C.T_(s.c,s.d,q),$async$OO)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OO,v)},
Yn(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.aij,null,new C.diI(t),r,!0,!0,!0,E.abb,!1,!1,x.e),$async$Yn)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.diJ(t,s))
r=t.a
w=4
return A.b(C.T_(r.c,r.d,s),$async$Yn)
case 4:r=t.f
r===$&&A.d()
if(r.f.length!==0)r.C_(0,B.e6,B.n8)
case 1:return A.h(u,v)}})
return A.i($async$Yn,v)},
bVR(d){var w=d.bU(),v=B.a.b1(B.o.v(w.gcg()),2,"0"),u=B.a.b1(B.o.v(w.gcv()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gze(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c2U()
if(r.e)w=D.agZ
else if(J.cu(r.d)){w=r.y
v=r.gze(0)
u=r.a.f
t=A.c(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fCe,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(I.aoL,new C.a_i(w,v,0,q),q),q),B.bx,t,B.al,A.c(u,q,q,q,q,q,q,A.l(q,q,D.kW.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.ay(q,A.o(q,D.flm,B.f,q,q,new A.n(q,q,q,A.m(18),A.a([new A.ab(0,B.H,B.dU.j(0.45),B.J,18)],x.V),B.xv,B.m),q,q,q,q,B.Pa,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcMH(),q,q,q,q,q,q,!1,B.a4))
w.push(B.S)
w.push(A.hq(D.bXX,D.hdP,r.gaPR(),q))
B.d.u(u,w)}w=A.as(A.cc(A.x(u,B.l,q,B.e,B.M,0,B.p),B.t,q,B.y,q,q,B.eF,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.c(w,q,q,q,q,q,q,A.l(q,q,D.kW.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.d()
u=r.w?B.e2:B.C_
u=A.x(A.a([new A.D(D.bH7,w,q),A.E(A.K0(v,new C.dj8(r),J.ad(r.d)+1,q,r.gcir(),u,B.aL),1),r.bI5()],x.p),B.l,q,B.e,B.h,0,B.p)
w=u}v=x.p
return A.c5(q,D.a_r,new A.an(B.a0,q,B.b4,B.t,A.a([D.aSk,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c2U(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cK(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.L0(B.ee,"AI",h.gbFV(),!0))
if(h.a.f)f.push(new C.L0(B.m1,"Cover",h.gbQL(),!1))
if(h.a.f)f.push(new C.L0(B.xn,"Header",h.gbLH(),!1))
if(J.cK(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.L0(B.vn,"Print",h.gcrI(),!1))
if(h.a.f&&J.cK(h.d)&&h.r>=0){v=h.w
u=v?B.hl:B.jj
t=v?"Save":"Edit"
f.push(new C.L0(u,t,v?h.gcy5():new C.diT(h),!1))}if(h.a.f)f.push(new C.L0(B.i9,"Add page",h.gaPR(),!1))
v=C.hHO(h.y.Q)
u=h.gze(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dP7
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.av(B.kC.j(0.5),1,B.r,-1)
j=A.o(g,A.W(l.a,D.kW,g,g,g,17),B.f,g,g,new A.n(g,g,new A.bE(i,i,i,i),new A.bc(k,k,k,k),g,new A.a7(B.a5,B.a9,B.x,j,g,g),B.m),g,32,g,g,g,g,g,32)
k=j}j=D.kW.j(0.85)
p.push(new A.bx(1,B.ba,A.ay(B.c1,A.x(A.a([k,B.bC,A.c(l.b,g,1,g,g,g,g,new A.F(!0,j,g,g,g,g,9.5,B.F,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.M,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.amG(v,u,t+" \xb7 "+s+" "+r,new C.diU(h),A.A(p,B.l,g,B.e,B.h,0,g,g),g)},
AA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BE(),$async$AA)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aT(t.d);r.C();){q=r.gP(r)
s.push(q.b+" "+q.c)}p=A.a4_(B.d.aM(s," "))
s=t.c
s.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.diz(t,p),s,null,!0,!0,x.N),$async$AA)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.zg(),$async$AA)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Eu(),$async$AA)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.G5("Swahili (Kiswahili)",!0),$async$AA)
case 18:w=16
break
case 17:w=19
return A.b(t.cJ8(o==="sw"?"Swahili (Kiswahili)":"English"),$async$AA)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$AA,v)},
a_n(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.K(B.kC.j(0.3),B.r,1),r=x.p
return new A.D(B.cy,A.aM(!1,v,!0,A.o(w,A.A(A.a([A.o(w,A.W(e,B.c,w,w,w,21),B.f,w,w,new A.n(w,w,w,w,w,B.xv,B.a6),w,42,w,w,w,w,w,42),B.bb,A.E(A.x(A.a([A.c(f,w,w,w,w,w,w,B.Lv,w,w,w),A.c(g,w,w,w,w,w,w,B.Fq,w,w,w)],r),B.B,w,B.e,B.h,0,B.p),1)],r),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.n(u,w,s,t,w,w,B.m),w,w,w,w,B.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.diV(d,h),w,w,w,w,w,w,w),w)},
Eu(){return this.bVk()},
bVk(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Eu=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.diM(r),a7,null,!0,!0,x.ei),$async$Eu)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eF("Working on it\u2026",$.ax())
a6.a=!0
a7=r.c
a7.toString
A.cg(null,null,!1,null,new C.diN(o),a7,null,!0,!0,x.H).fw(new C.diO(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.I)(d),++a1){k=d[a1]
J.c6(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.ak()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.Aq[a1]
J.c6(j,i.a)}w=8
return A.b(C.aiH(a0,a7,new C.diP(o),d,l,e,j),$async$Eu)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.ac(a8)
n=A.v(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a8(l,!0).e7()
l=o
l.sii($.ax())
J.aU9(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.L(x.q).f
j=n
l.U(A.b3(null,null,null,null,null,B.t,null,A.c(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcn(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.an(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bgL(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.BF(j.c,j.d,l),$async$Eu)
case 11:w=12
return A.b(r.lh(),$async$Eu)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.Aq[a1].a)
a5=l.cNF(j,12,a7)
l=r.a
w=15
return A.b(C.T_(l.c,l.d,a5),$async$Eu)
case 15:if(r.c!=null)r.l(new C.diQ(r,a5))
l=r.f
l===$&&A.d()
if(l.f.length!==0&&q.a==="cover")l.C_(0,B.e6,B.n8)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.c(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b3(a3?A.cC2("Undo",new C.diR(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.em,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Eu,v)},
G5(d,e){return this.cJ9(d,e)},
cJ8(d){return this.G5(d,!1)},
cJ9(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$G5=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eF("Starting\u2026",$.ax())
f.a=!0
k=r.c
k.toString
A.cg(null,null,!1,null,new C.dj1(a0),k,null,!0,!0,x.H).fw(new C.dj2(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.c6(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(A.a4e(m,new C.dj3(a0)),$async$G5)
case 10:w=8
break
case 9:w=11
return A.b(C.bHg(new C.dj4(a0),m,a2),$async$G5)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.ac(a1)
q=A.v(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a8(o,!0).e7()
o=a0
o.sii($.ax())
J.aU9(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.U(A.b3(null,null,null,null,null,B.t,null,A.c(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bgL(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.BF(k.c,k.d,o),$async$G5)
case 12:w=13
return A.b(r.lh(),$async$G5)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.X(a2,"Swahili")?"Swahili":"English")+"."
k=A.c(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(A.cC2("Undo",new C.dj5(r,d),null),null,null,null,null,B.t,null,k,null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$G5,v)},
bI5(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.diA(v):u
r=A.aH(u,u,u,u,A.W(D.bTv,s?D.kW:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cK(v.d)&&!v.w&&v.r>=0)s=A.hq(A.W(B.x7,B.H9,u,u,u,16),A.c("Delete page",u,u,u,u,u,u,A.l(u,u,B.H9,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbQl(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.c(s,u,u,u,u,u,u,A.l(u,u,D.kW.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.as(s,u,u,u),1)
w=t<J.ad(v.d)?new C.diB(v):u
return A.bm(!0,new A.D(D.bGW,A.A(A.a([r,s,A.aH(u,u,u,u,A.W(B.eL,t<J.ad(v.d)?D.kW:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.h,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a06.prototype={
S(){return new C.bia(new A.at(B.ax,$.ax()))}}
C.bia.prototype={
ga3j(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.V$=$.ax()
w.R$=0
this.a3()},
gbTW(){switch(this.ga3j()){case"cover":var w=D.ddh
break
case"book":w=D.d8p
break
default:w=D.dFC
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.m(26),n=B.kC.j(0.5),m=x.p,l=A.A(A.a([D.dP8,B.ar,D.bMJ,A.aH(p,p,p,p,B.ly,p,p,p,new C.dkX(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.h,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jA(p,p,p,A.c("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dkY(q),q.ga3j()==="page",p,p,p,p))
if(q.a.d)k.push(A.jA(p,p,p,D.h8k,p,new C.dkZ(q),q.ga3j()==="book",p,p,p,p))
k.push(A.jA(p,p,p,D.fVU,p,new C.dl_(q),q.ga3j()==="cover",p,p,p,p))
k=A.bZ(B.bI,k,B.br,p,6,8)
j=B.c.j(0.07)
j=A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bA(p,new A.b6(4,A.m(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kw,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.dl,!0,B.a7,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbTW(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.c(s,p,p,p,p,p,p,B.Ls,p,p,p)
w.push(A.mE(p,B.c.j(0.08),r,B.hC,new C.dl0(q,s),p,p,p,p))}return A.eI(p,B.Cx,A.cc(A.x(A.a([l,B.S,D.hbE,B.al,k,B.af,j,B.P,A.bZ(B.bI,w,B.br,p,6,6),B.aA,A.d8(D.bXU,p,D.hcr,new C.dl1(q,d),A.bn(B.b2,p,p,p,p,B.pf,p,p,new A.b9(A.m(16),B.a1),p,p,p)),B.au,D.h6v],m),B.B,p,B.e,B.M,0,B.p),B.t,p,B.y,p,p,B.fb,p,p,B.ah),p,p,p,B.P7,p,B.d8,p,new A.b9(o,new A.av(n,1.4,B.r,-1)),p)}}
C.a04.prototype={
S(){return new C.aCv(A.a([],x.gA))},
ge3(){return this.c}}
C.ags.prototype={}
C.aCv.prototype={
Z(){this.a4()
this.lh()},
lh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Sq(p.c,p.d),$async$lh)
case 3:o=e
n=A.a([],x.gA)
p=J.aT(o)
case 4:if(!p.C()){w=5
break}s=p.gP(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bFI(r.c,q),$async$lh)
case 6:j=e
i=J
w=7
return A.b(C.LY(t.a.c,q),$async$lh)
case 7:m.push(new l.ags(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.l(new C.djp(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
bc0(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Rl(d,e){return this.ck0(0,e)},
ck0(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Rl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a8(s,!1).cb(A.e9(new C.djo(u,e),!0,null,x.y)),$async$Rl)
case 2:t=g
w=3
return A.b(u.lh(),$async$Rl)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.U(D.aWj)
return A.h(null,v)}})
return A.i($async$Rl,v)},
G7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$G7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.U(D.aWe)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ai0(s.c,s.d),$async$G7)
case 5:q=e
w=6
return A.b(t.lh(),$async$G7)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Rl(0,B.d.fb(t.d,new C.djt(q))),$async$G7)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Sm(p,s.f,r,n,o),$async$G7)
case 10:m=e
w=11
return A.b(t.lh(),$async$G7)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.U(D.aWj)
case 1:return A.h(u,v)}})
return A.i($async$G7,v)},
QL(d,e){return this.cvM(0,e)},
cvM(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$QL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.djs(t,e),s,null,!0,!0,x.y),$async$QL)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a4q(s.c,s.d,e.a),$async$QL)
case 4:w=5
return A.b(t.lh(),$async$QL)
case 5:case 1:return A.h(u,v)}})
return A.i($async$QL,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bI8(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.K(B.kC.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.ay(n,new A.fH(0.7142857142857143,A.o(n,A.x(A.a([D.dP9,B.af,D.ezT,B.au,A.c(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kW.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.b9,B.h,0,B.p),B.f,n,n,new A.n(v,n,s,w,n,n,B.m),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcMD(),n,n,n,n,n,n,!1,B.a4))}w=A.m(22)
v=A.K(B.kC.j(0.85),B.r,1.6)
s=A.ay(n,A.o(n,D.c57,B.f,n,n,new A.n(B.v.j(0.3),n,A.K(B.kC.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dju(d),n,n,n,n,n,n,!1,B.a4)
r=A.m(14)
q=B.v.j(0.3)
p=A.K(B.kC.j(0.5),B.r,1)
w=A.o(n,A.A(A.a([s,B.bb,D.bN7,A.o(n,A.c(""+o.d.length+" of 6",n,n,n,n,n,n,D.fBd,n,n,n),B.f,n,n,new A.n(q,n,p,r,n,n,B.m),n,n,n,n,B.hj,n,n,n)],l),B.l,n,B.e,B.h,0,n,n),B.f,n,n,new A.n(n,n,v,w,n,D.cbc,B.m),n,n,n,B.OV,D.bEQ,n,n,n)
if(o.e)k=D.agZ
else k=k.length===0?D.beV:A.ce(new C.djv(k))
return A.c5(n,D.a_r,new A.an(B.a0,n,B.b4,B.t,A.a([D.aSk,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bI8(d){var w,v,u=this,t=null,s=u.bc0(d),r=d.c,q=x.p,p=A.a([A.bS(0,new A.dk(B.dC,B.z,B.f,new A.a5(300,420,new C.a_i(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.ay(t,A.o(t,D.c4o,B.f,t,t,new A.n(B.v.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.djm(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.c(s,t,1,B.a2,t,t,t,D.fAR,t,t,t)
v=r===1?"page":"pages"
return A.ay(t,A.x(A.a([new A.fH(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.P,w,A.c(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kW.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.h,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.djn(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.L0.prototype={}
C.a_i.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dA(D.Aq,new C.cRi(m),new C.cRj()),j=m.c,i=D.Ev.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mA:B.b9
v=new C.cRk(h)
i=A.a([new A.ab(0,B.H,B.v.j(0.6),D.ewG,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b4(l,l,l,new C.bfm(j.x,h,l),B.az),0,0,0),A.ao(0,A.o(l,l,B.f,l,l,new A.n(l,l,l,l,l,new A.a7(B.a5,B.a9,B.x,A.a([B.v.j(0.45),B.L],x.O),l,l),B.m),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cM(8,40+s*46,l,l,l,l,A.o(l,l,B.f,l,l,new A.n(h.j(0.7),l,l,new A.bc(r,r,r,r),l,l,B.m),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.aoM,8,0.85,2.2),v.$4(D.bJS,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aoM,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.D(D.bJO,A.b4(l,l,l,new C.bfd(h,l),B.az),l),0,0,0))
r=A.W(D.aDG[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.c(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aAR,l,l),B.K,l,l)
p=A.o(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.af,p,B.af,A.c(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cL,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aO,A.c(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.F,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.D(D.bKl,A.x(o,B.l,l,w,B.h,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aJD(l),D.fqi),l,l,l,46,0,l))
return A.o(l,A.bv(D.afz,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.n(l,l,l,D.afz,i,new A.a7(B.ay,B.aC,B.x,k.c,l,l),B.m),l,l,l,l,l,l,l,l)}}
C.bfm.prototype={
a2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e_()
g.cU(11)
switch(this.b){case"plain":return
case"linen":$.R()
w=A.L()
w.r=B.v.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.r(0,t),new A.r(u,t),w)
$.R()
s=A.L()
s.r=B.c.j(0.05).gp(0)
s.c=1
for(r=0;r<u;r+=4)d.ah(new A.r(r,0),new A.r(r,v),s)
break
case"stars":for(v=e.a,u=e.b,q=this.c,p=0;p<70;++p){o=g.ai()
n=g.ai()
m=g.ai()
$.R()
l=new A.ar(B.T,B.Q,B.V,B.W,B.U)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.O(new A.r(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.R()
l=A.a([],n)
j=new A.aG(m.r,B.aj,null,null,l)
l.push(new A.aZ(v,q))
j.ac()
m=k-0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.aj(i)
j.ac()
m=k+0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.aj(i)
j.ac()
m=new A.by()
l.push(m)
l=j.f
if(l!=null)m.aj(l)
j.ac()
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=o.j((p&1)===0?0.09:0.03).gp(0)
d.af(j,m)}break
default:$.R()
w=A.L()
w.r=B.v.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.R()
h=A.L()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aD(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bfd.prototype={
a2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.R(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.ab
j.c=2.4
j.d=B.bG
for(w=e.a,v=e.b,v=[D.fde,new A.b7([w,0,-1,1]),new A.b7([0,v,1,-1]),new A.b7([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aG(k,B.aj,null,null,s)
s.push(new A.aZ(r+p*34,q))
n.ac()
m=new A.aq(r,q)
s.push(m)
l=n.f
if(l!=null)m.aj(l)
n.ac()
m=new A.aq(r,q+o*34)
s.push(m)
s=n.f
if(s!=null)m.aj(s)
n.ac()
d.af(n,j)
s=new A.ar(B.T,B.Q,B.V,B.W,B.U)
s.r=i.j(0.9).gp(0)
d.O(new A.r(r+p*9,q+o*9),3,s)}},
aD(d){return!d.b.A(0,this.b)}}
C.uY.prototype={}
C.a_D.prototype={
S(){return new C.bfk()}}
C.bfk.prototype={
goC(){var w=this.d
return w===$?this.d=this.a.c:w},
gze(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.at(new A.bd(w.b,B.b8,B.aP),$.ax())}return v},
gaE2(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.at(new A.bd(w.c,B.b8,B.aP),$.ax())}return v},
gatz(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.at(new A.bd(w.y,B.b8,B.aP),$.ax())}return v},
t(){var w=this,v=w.gze(0),u=v.V$=$.ax()
v.R$=0
v=w.gaE2()
v.V$=u
v.R$=0
v=w.gatz()
v.V$=u
v.R$=0
w.a3()},
auc(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jA(s,s,s,A.c(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.dah(this,f,u),e===u,s,s,s,s))}return A.bZ(B.bI,r,B.br,s,6,8)},
aA_(d){var w=null,v=B.c.j(0.07)
return A.bA(w,new A.b6(4,A.m(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.m7,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goC(),a0=f.gze(0),a1=a0.a.a,a2=f.gaE2(),a3=a2.a.a,a4=f.gatz(),a5=d.bgJ(a4.a.a,a3,a1)
a1=x.w
a3=A.aE(a6,e,a1).w
a1=A.aE(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a5(190,260,new A.dk(B.dC,B.z,B.f,new A.a5(270,370,new C.a_i(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.aA_("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.daG(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a7,e,B.ao,e,e,e,e)
a2=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.aA_("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.daH(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a7,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.Aq[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.av(p,q?3:1,B.r,-1)
p=A.o(e,e,B.f,e,e,new A.n(e,e,new A.bE(o,o,o,o),e,e,new A.a7(B.ay,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aF
v.push(A.ay(e,A.x(A.a([p,B.cT,A.c(t.b,e,e,e,e,e,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.M,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.daI(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bZ(B.bI,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b2.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.av((s===$?f.d=f.a.c:s).d===n?B.eE:B.L,2,B.r,-1)
q.push(A.ay(e,A.o(e,A.W(D.aDG[n],B.c,e,e,e,24),B.f,e,e,new A.n(p,e,new A.bE(o,o,o,o),new A.bc(m,m,m,m),e,e,B.m),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.daJ(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bZ(B.bI,q,B.br,e,8,8)
a4=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.aA_("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.daK(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a7,e,B.ao,e,e,e,e)
p=A.c("LETTERING COLOUR",e,e,e,e,e,e,F.w4,e,e,e)
m=A.a([],w)
for(l=D.Ev.gdM(D.Ev),l=l.gae(l);l.C();){k=l.gP(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eE:B.aT
g=r.e===i
o=new A.av(h,g?3:1,B.r,-1)
j=A.o(e,e,B.f,e,e,new A.n(j,e,new A.bE(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aF
m.push(A.ay(e,A.x(A.a([j,B.bC,A.c(i,e,e,e,e,e,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.M,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.daL(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bZ(B.bI,m,B.br,e,8,10)
l=A.c("TITLE SIZE",e,e,e,e,e,e,F.w4,e,e,e)
k=f.goC()
return new A.D(new A.P(0,0,0,a3.f.d),A.bm(!0,new A.cO(new A.aY(0,1/0,0,a1.a.b*0.92),A.cn(A.a([D.h5W,B.af,d,B.aO,a0,B.S,a2,B.aA,D.hcc,B.P,v,B.aA,D.h64,B.P,q,B.aA,a4,B.aA,p,B.P,m,B.aA,l,A.l3(e,9,""+B.i.T(f.goC().f),36,18,new C.daM(f),k.f),A.c("WHERE THE WORDS SIT",e,e,e,e,e,e,F.w4,e,e,e),B.al,f.auc(D.a7T,f.goC().r,new C.daN(f),D.dIT),B.af,A.c("BORDER",e,e,e,e,e,e,F.w4,e,e,e),B.al,f.auc(D.a7c,f.goC().w,new C.daO(f),D.dIZ),B.af,A.c("COVER MATERIAL",e,e,e,e,e,e,F.w4,e,e,e),B.al,f.auc(D.a78,f.goC().x,new C.daQ(f),D.dKD),B.al,A.iX(e,B.b2,e,B.ag,e,new C.daR(f),e,e,e,D.h04,f.goC().z),B.bx,A.bJ(D.h4D,e,new C.daS(f,a6),A.bn(B.b2,e,e,e,e,B.pf,e,e,new A.b9(A.m(16),B.a1),e,e,e))],w),e,e,B.aog,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aJD.prototype={
a2(d,e){var w,v,u,t=new A.aG($.R().r,B.aj,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.by())
u=A.L()
u.sam(D.cbV.aA(0,new A.a2(0,0,0+w,0+v)))
d.af(t,u)},
aD(d){return!1}}
C.bkJ.prototype={
a2(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.R()
w=A.L()
w.sam(D.caT.aA(0,new A.a2(0,0,a2,a3)))
a4.aE(new A.a2(0,0,a2,a3),w)
v=B.i.cD(a1/112)
u=new A.e_()
u.cU(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.ddg[u.aw(9)]
j=u.aw(14)
J.br(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a2(n,j,n+m,j+l)
h=A.bu(i,B.hB)
g=new A.ar(B.T,B.Q,B.V,B.W,B.U)
f=A.ap(k,B.c,0.12)
f.toString
e=A.ap(k,B.v,0.45)
e.toString
g.sam(new A.a7(B.a5,B.a9,B.x,A.a([f,k,e],w),d,d).aA(0,i))
a4.aq(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ar(B.T,B.Q,B.V,B.W,B.U)
e.r=B.kC.j(0.55).gp(0)
a4.aE(new A.a2(g,j,h,j+2),e)
e=new A.ar(B.T,B.Q,B.V,B.W,B.U)
e.r=B.kC.j(0.4).gp(0)
a4.aE(new A.a2(g,q,h,p),e)
t.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ar(B.T,B.Q,B.V,B.W,B.U)
p.sam(D.cab.aA(0,new A.a2(0,r,a2,q)))
a4.aE(new A.a2(0,r,a2,q),p)
p=new A.ar(B.T,B.Q,B.V,B.W,B.U)
p.r=B.v.j(0.5).gp(0)
p.y=B.l2
a4.aE(new A.a2(0,q,a2,q+14),p)}t=A.L()
t.r=D.biK.j(0.72).gp(0)
a4.aE(new A.a2(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.sam(new A.bT(B.z,0.5,B.x,d,0,A.a([D.bro.j(0.22),B.L],w),d,d).aA(0,A.bX(new A.r(t,a1),a0)))
a4.O(new A.r(t,a1),a0,a3)},
aD(d){return!1}}
C.bdu.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cM(14,w*2,v*2.2,v*2,o,o,new A.bP(new A.n(A.ap(D.kW,D.bwJ,w/4),o,new A.bE(B.a1,new A.av(B.v.j(0.12),1,B.r,-1),B.a1,B.a1),B.MF,o,o,B.m),B.bm,o,o),o))}v=x.V
u=A.a([new A.ab(0,B.H,B.v.j(0.35),B.aNU,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.o(o,o,B.f,o,o,new A.n(B.kC.j(0.6),o,o,new A.bc(s,s,s,s),o,o,B.m),o,14,o,o,o,o,o,3))}u=A.o(o,A.x(t,B.l,o,B.rh,B.h,0,B.p),B.f,o,o,new A.n(o,o,o,D.b6U,u,D.cbT,B.m),o,o,o,o,o,o,o,14)
v=A.a([new A.ab(0,B.H,B.v.j(0.4),B.dm,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aJD(o),D.fqd),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aXz(p.y,r,B.je,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bA(o,B.eT,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,B.je.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,D.fPS,!0,B.a7,o,B.ao,o,o,o,o),A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,B.je.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bA(o,B.eT,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,B.je.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,D.fGd,!0,B.a7,B.Bj,B.ao,o,o,o,o),1)],m),B.am,o,B.e,B.h,0,B.p)
else{n=A.a([A.c(n.b,o,o,o,o,o,o,D.fPK,o,o,o),B.au,A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,B.je.j(0.5),o,o,o,o,o,o,o,o,11,B.cL,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.E(A.o(o,o,B.f,D.GU.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fB,A.c("\u2766",o,o,o,o,o,o,A.l(o,o,D.GU.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.o(o,o,B.f,D.GU.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.h,0,o,o),B.aA],m)
if(k.length===0)n.push(A.c("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,B.je.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Zx(A.cR(A.a([A.cR(o,o,o,o,o,o,o,o,o,D.fJv,B.a.az(k,0,1)),A.cR(o,o,o,o,o,o,o,o,o,o,B.a.aY(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,B.je.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cc(A.x(n,B.B,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hv,A.c("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,B.je.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.o(o,A.bv(B.MF,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bJk,A.x(s,B.am,o,B.e,B.h,0,B.p),o),A.ao(0,new A.bP(new A.n(o,o,o,o,o,new A.a7(B.a5,B.a9,B.x,A.a([B.v.j(0.16),B.L],x.O),o,o),B.m),B.bm,o,o),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.n(o,o,o,B.MF,v,D.ccq,B.m),o,o,o,o,o,o,o,o),1)],m),B.am,o,B.e,B.h,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.amH.prototype={
S(){return new C.amI(new A.eF(0,$.ax()),new C.bUU(),new C.an_(),D.hPN,null,null)},
gd2(){return this.d}}
C.a2k.prototype={
a7(){return"_Step."+this.b}}
C.amI.prototype={
gCN(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFE(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghe(d){var w,v=this,u=v.e
if(u===$){w=C.Nj(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gUn(){var w=this.ghe(0)
return w.gzy()==null?"Babu":B.a.i(w.gzy().b)},
Z(){var w,v=this
v.a4()
w=v.ghe(0).gzy()
w=w==null?null:w.c
v.r.b=w===D.oO
w=v.qa(new C.bTf(v))
w.fY(0)
v.x!==$&&A.aR()
v.x=w
v.a3f("Come closer, my children. I am "+v.gUn()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.d()
v.t()
v=w.y
if(v!=null)v.a1(0)
v=w.z
if(v!=null)v.a1(0)
w.w.t()
v=w.f
v.V$=$.ax()
v.R$=0
w.bxq()},
a3f(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.de(B.a1c,new C.bT9(w))},
btN(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.l(new C.bTi(v))},
aeE(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
btF(){return this.bbx()},
bbx(){var w=this,v=w.gCN()[w.as],u=v.e
u=u.length!==0?u:v.d
w.l(new C.bTa(w))
w.a3f(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cy(B.mm,new C.bTb(w))},
cNM(){var w=this
w.l(new C.bTe(w))
w.a3f(w.gCN()[w.as].a)},
Lt(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.aeF)return
w=p.gCN()
v=p.as
u=d===w[v].c
t=p.r
s=p.f
if(u){++p.at
r=++p.ax
p.ay=Math.max(p.ay,r)
p.cy=Math.min(1,p.cy+0.13)
t.f=s.a+2.6}else{p.ax=0
p.cy=Math.max(0.18,p.cy-0.08)
t.r=s.a+1.5}q=new A.e_()
q.cU(v*7+d)
p.l(new C.bTd(p,d,u,q))
p.a3f(u?D.dtr[q.aw(4)]+" "+w[p.as].d:D.dpX[q.aw(3)]+" "+w[p.as].d)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCN()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bHX(t.at,t.ay,p)
t.l(new C.bTg(t,s))
t.a3f(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.C0(t.a.d,s),$async$kN)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.C1(r.d,r.c.a,"fire",t.at*10),$async$kN)
case 6:t.dy=f
if(t.c!=null)t.l(new C.bTh())
w=1
break
case 4:++t.as
t.bbx()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c5(v,D.Zr,new A.an(B.a0,v,B.ad,B.t,A.a([A.bS(0,new A.e6(A.b4(v,v,v,new C.aXE(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.cdX(0),B.aY,w.bT6()],t),B.l,v,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cdX(d){var w,v,u,t=this,s=null,r=A.aH(s,s,s,s,B.QX,s,s,s,new C.bTc(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCN().length;++w){v=t.as
if(w<v||t.Q===D.b3d)v=B.cV
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(A.o(s,s,B.f,s,s,new A.n(v,s,s,new A.bc(u,u,u,u),s,s,B.m),s,7,s,D.bEA,s,s,s,22))}p=A.E(A.x(A.a([D.fXN,A.A(p,B.l,s,B.e,B.h,0,s,s)],q),B.B,s,B.e,B.h,0,B.p),1)
v=A.m(14)
u=A.K(B.fT,B.r,1)
return new A.D(D.bKz,A.A(A.a([r,p,A.o(s,A.c("\ud83d\udd25 "+B.i.T(t.cy*100)+"%",s,s,s,s,s,s,B.iP,s,s,s),B.f,s,s,new A.n(B.b6,s,u,v,s,s,B.m),s,s,s,s,B.hj,s,s,s)],q),B.l,s,B.e,B.h,0,s,s),s)},
bT6(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghe(0).gzy()
if(h==null)w=1
else w=h.c===D.oO?0:1
v=j.dx
u=j.db
t=D.qC.j(0.96)
s=A.m(22)
r=A.K(B.cV,B.r,3)
q=A.b4(i,i,i,new C.bqk(w,i),B.az)
p=A.c(j.Q===D.aeF?j.gUn()+" asks":"Elder "+j.gUn(),i,i,i,i,i,i,D.aXy,i,i,i)
o=j.db
o=B.a.az(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.ay(B.c1,A.A(A.a([new A.a5(62,62,q,i),B.ar,A.E(A.x(A.a([p,B.bC,A.c(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aXL,i,i,i)],n),B.B,i,B.e,B.h,0,B.p),1)],n),B.B,i,B.e,B.h,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbtM(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.as(j.aaK("Sit down by the fire",j.gbtE()),i,i,i)
break
case 1:v=A.as(j.aaK("Ask me, Elder",j.gcNL()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCN()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.av(D.lM,2.5,B.r,-1)
v.push(A.ay(i,A.o(i,A.c(u[m],i,i,i,i,i,i,D.aXH,B.K,i,i),B.f,i,D.agc,new A.n(D.alL,i,new A.bE(l,l,l,l),new A.bc(q,q,q,q),i,i,B.m),i,i,i,i,L.wV,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bT6(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bZ(B.bI,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.kj:Z.arK
u=A.W(u,v?B.et:D.lM,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.c(q,i,i,i,i,i,i,A.l(i,i,v?B.et:D.lM,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCN().length?"Finish":"Next story"
v=A.A(A.a([u,B.aa,q,j.aaK(v,j.gqt(j))],n),B.l,i,B.e,B.h,0,i,i)
break
case 4:v=A.a([A.c(""+j.at+" of "+j.gCN().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aXZ,i,i,i)],n)
u=j.cx
if(u>0){u=C.aRW(u)
q=C.aRW(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.c(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.ad6,i,i,i))}v.push(B.P)
v.push(j.aaK("Back to the games",new C.bT7(j)))
v=A.x(v,B.l,i,B.e,B.h,0,B.p)
break
default:v=i}return A.o(i,A.x(A.a([o,B.S,v],n),B.B,i,B.e,B.M,0,B.p),B.f,i,i,new A.n(t,i,r,s,D.aFe,i,B.m),i,i,i,B.zg,B.bl,i,i,i)},
aaK(d,e){var w=null,v=A.m(16),u=A.K(B.cV,B.r,2)
return A.ay(w,A.o(w,A.c(d,w,w,w,w,w,w,B.Lv,w,w,w),B.f,w,w,new A.n(D.lM,w,u,v,w,w,B.m),w,w,w,w,D.bId,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bqk.prototype={
a2(d,e){A.hnu(d,e.ek(B.J),e.gdj()*0.45,this.b,0,0.4)},
aD(d){return d.b!==this.b}}
C.aCt.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aX(){this.b7()
this.b5()
this.bC()}}
C.bUU.prototype={}
C.ti.prototype={}
C.bql.prototype={}
C.an_.prototype={
MW(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.ijG(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aXE.prototype={
a2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.GI(l.d.MW(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.br(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bV(0,u)
l.cD8(d,j)
l.bRF(d,j)
l.cLx(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.br(t.save())
t.translate(225,580)
d.nM(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.R()
q=A.L()
p=x.O
o=x.n
q.sam(A.wm(B.J,r,A.a([D.bvp.j(0.55*s),B.Ob.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.O(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bUM(l,d,j,i)),new A.y(540,new C.bUN(l,d,j,i)),new A.y(546,new C.bUO(l,d,j,i)),new A.y(574,new C.bUP(l,d,j,i)),new A.y(612,new C.bUQ(l,d,j,i)),new A.y(650,new C.bUR(l,d,j,i)),new A.y(656,new C.bUS(l,d,j,i))],x.E)
B.d.b_(n,new C.bUT())
for(m=0;m<7;++m)n[m].b.$0()
l.bIr(d,j,i)
l.bVi(d,j)
t.restore()
$.R()
t=A.L()
t.sam(A.wm(new A.r(w/2,v*0.6),e.gaoZ()*0.75,A.a([B.L,D.biD],p),A.a([0.55,1],o),B.x,k,k,0))
d.aE(new A.a2(0,0,0+w,0+v),t)},
aD(d){return d.c!==this.c||d.d!==this.d},
cD8(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e_()
h.cU(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.R()
r=new A.ar(B.T,B.Q,B.V,B.W,B.U)
r.r=t.gp(0)
d.O(new A.r(v*450,20+u*300),0.8+s*1.1,r)}q=B.i.F(e,17)/1.2
if(q<1){p=new A.r(60+q*220,70+q*90)
d.ah(p,p.aJ(0,D.ewc),C.iH(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.i.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.R()
k=A.a([],t)
l=new A.aG(l.r,B.aj,null,null,k)
m=r+m*4
k.push(new A.aZ(s-6,m))
l.ac()
j=r-3
r=new A.ch(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.aj(i)
l.ac()
s=new A.ch(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.aj(r)
l.ac()
s=new A.ar(B.T,B.Q,B.V,B.W,B.U)
s.b=B.ab
s.c=1.6
s.r=D.blo.gp(0)
s.d=B.bG
s.e=B.dM
d.af(l,s)}},
bRF(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aCa[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bY(new A.r(p,m),n*0.74,q*0.5)
k=B.z1.j(v)
$.R()
j=new A.ar(B.T,B.Q,B.V,B.W,B.U)
j.r=k.gp(0)
d.c1(l,j)
q=A.bY(new A.r(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=B.wu.j(u).gp(0)
d.c1(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.i.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ar(B.T,B.Q,B.V,B.W,B.U)
o.r=D.aj6.j(0.16*(1-h)).gp(0)
d.O(new A.r(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cLx(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bEZ(d,D.ew8,0.9,e,D.hL5,!1,!1,D.b3a,1,!1)
w=$.R().r
v=x.v
u=new A.aG(w,B.aj,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.by())
t=A.L()
t.r=D.al3.gp(0)
d.af(u,t)
C.bEZ(d,D.ewa,0.95,e,D.hKU,!1,!1,D.b3b,1,!0)
t=new A.aG(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.ch(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.ch(431,553,421,548))
t.E(new A.by())
u=A.L()
u.r=B.Gz.gp(0)
d.af(t,u)
u=A.bY(D.ew9,8,28)
t=A.L()
t.r=D.bxQ.gp(0)
d.c1(u,t)
C.bEZ(d,new A.r(-30+B.i.F(e/26,1)*510,492),0.82,e,D.hL7,!0,!1,D.Ye,1,!1)
t=B.i.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c1(A.bY(new A.r(s+q*16,r-6),16,11),C.iH(D.akV,1.8))
u=q<0
C.bEZ(d,new A.r(s-q*6,r),0.62,e,D.hLa,!1,u,D.Ye,2.2,!1)
C.bEZ(d,new A.r(s-q*32,r+4),0.58,e+1,D.hL1,!1,u,D.Ye,2.2,!1)
this.bY1(d,D.evO,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bY(new A.r(o,n),8,11)
k=p===1
j=k?D.akR:D.alt
i=new A.ar(B.T,B.Q,B.V,B.W,B.U)
i.r=j.gp(0)
d.c1(l,i)
l=k?D.akR:D.alt
k=new A.ar(B.T,B.Q,B.V,B.W,B.U)
k.r=l.gp(0)
d.O(new A.r(o+5,n+(-3+m)),2.6,k)
k=new A.ar(B.T,B.Q,B.V,B.W,B.U)
k.b=B.ab
k.c=1
k.r=B.at.gp(0)
k.d=B.bG
k.e=B.dM
d.ah(new A.r(o+7.5,n+(-2+m)),new A.r(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ar(B.T,B.Q,B.V,B.W,B.U)
k.b=B.ab
k.c=1
k.r=B.at.gp(0)
k.d=B.bG
k.e=B.dM
d.ah(new A.r(o,n+4),new A.r(o,n+8),k)}h=e<f.f
u=A.bY(D.aa3,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.ajv.gp(0)
d.c1(u,t)
u=A.bY(D.aa3.a5(0,new A.r(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.bnC.gp(0)
d.c1(u,t)
t=new A.aG(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.by())
u=A.L()
u.r=D.bnP.gp(0)
d.af(t,u)
u=D.aa3.a5(0,new A.r(-17,h?-9:-2))
t=A.L()
t.r=B.ip.gp(0)
d.O(u,1.1,t)
v=new A.aG(w,B.aj,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.ch(180,588+w*(h?6:0),178,595))
d.af(v,C.iH(D.ajv,3.5))},
bY1(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a5(0,new A.r(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.R()
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.b=B.ab
m.c=2
m.r=D.ZF.gp(0)
m.d=B.bG
m.e=B.dM
d.ah(new A.r(u+o,s),new A.r(u+(o+n*1.5),q),m)}w=A.bY(k,17,32)
v=$.R()
r=A.L()
r.r=D.Gx.gp(0)
d.c1(w,r)
r=A.bY(k.a5(0,D.eve),7,26)
w=A.ap(D.Gx,B.v,0.12)
w.toString
q=A.L()
q.r=w.gp(0)
d.c1(r,q)
v=new A.aG(v.r,B.aj,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.by())
s=A.L()
s.r=D.Gx.gp(0)
d.af(v,s)
s=A.bY(k.a5(0,new A.r(24,-7+l)),9,12)
v=A.L()
v.r=D.Gx.gp(0)
d.c1(s,v)
v=-11+l
d.ah(k.a5(0,new A.r(22,v)),k.a5(0,new A.r(21,-17+l)),C.iH(D.ZF,1.6))
d.ah(k.a5(0,new A.r(26,v)),k.a5(0,new A.r(28,-16+l)),C.iH(D.ZF,1.6))
v=k.a5(0,new A.r(26,-8+l))
s=A.L()
s.r=B.v.gp(0)
d.O(v,0.9,s)
d.ah(k.a5(0,new A.r(26,-3+l)),k.a5(0,new A.r(26,1+l)),C.iH(D.bqD,1.4))
d.ah(k.a5(0,D.ey7),k.a5(0,new A.r(-19,-7+Math.sin(f*7)*2)),C.iH(D.Gx,2.4))},
bVg(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bY(new A.r(225+u*36,574+(t*13+6)),8,11)
$.R()
t=new A.ar(B.T,B.Q,B.V,B.W,B.U)
t.r=D.bws.gp(0)
a6.c1(u,t)}}u=A.bY(D.aa5.a5(0,B.cz),17,52)
$.R()
t=A.L()
t.r=D.bib.gp(0)
a6.c1(u,t)
t=A.bY(D.aa5.a5(0,B.cz),12,44)
u=D.blO.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.c1(t,s)
for(r=0;r<3;++r){v=D.dpo[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ar(B.T,B.Q,B.V,B.W,B.U)
o.b=B.ab
o.c=7
o.r=D.GL.gp(0)
o.d=B.bG
o.e=B.dM
a6.ah(new A.r(u+t*24,579+s*4),new A.r(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.Cc.j(0.6)
n=new A.ar(B.T,B.Q,B.V,B.W,B.U)
n.b=B.ab
n.c=2
n.r=t.gp(0)
n.d=B.bG
n.e=B.dM
a6.ah(new A.r(u+o*24,579+(p*4-2)),new A.r(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.f9d,D.f9N,D.faW,D.fbg,D.faU]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.btI,D.bpY,D.bvS][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.R()
f=A.a([],q)
a2=new A.aG(g.r,B.aj,null,null,f)
f.push(new A.aZ(a0-a1,578))
a2.ac()
g=a0+d*0.6
a3=new A.hY(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.aj(a4)
a2.ac()
g=new A.hY(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.aj(a3)
a2.ac()
g=new A.by()
f.push(g)
f=a2.f
if(f!=null)g.aj(f)
a2.ac()
g=new A.ar(B.T,B.Q,B.V,B.W,B.U)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.i.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=B.alr.j((1-a5)*0.9)
$.R()
o=new A.ar(B.T,B.Q,B.V,B.W,B.U)
o.r=p.gp(0)
a6.O(new A.r(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.i.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.aj6.j(0.1*(1-a5))
$.R()
p=new A.ar(B.T,B.Q,B.V,B.W,B.U)
p.r=q.gp(0)
a6.O(new A.r(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bVi(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.i.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.by0.j(0.18*p)
$.R()
n=new A.ar(B.T,B.Q,B.V,B.W,B.U)
n.r=o.gp(0)
d.O(new A.r(r,q),5,n)
n=new A.ar(B.T,B.Q,B.V,B.W,B.U)
n.r=D.brt.j(0.9*p).gp(0)
d.O(new A.r(r,q),1.4,n)}},
c7b(d,e){switch(d){case 0:return e.b?D.hKW:D.b2J
case 1:return e.b?D.hL9:D.b2H
case 2:return D.b2G
case 3:return D.b2F
case 4:return D.b2I
default:return D.b2K}},
aEg(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
RE(d,e,f,g){var w,v=this,u=D.a7k[e],t=v.c7b(e,g),s=new C.bql(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a7k[e],l=e===0
m=B.i.D(((l?D.aNM:D.aNS).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.aaa
s.as=D.EX
if(l){s.a=o?v.aEg(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.r(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.r(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.EX
if(g.a===3&&!g.d)s.e=m+Math.sin(r*6)*0.35*Math.max(0,1-r/1.8)
if(q){s.a=0.5
s.b=1
p=f*9
s.Q=new A.r(-4-Math.max(0,Math.sin(p))*7,-58)
p=s.as=new A.r(4+Math.max(0,Math.sin(p))*7,-58)}if(!q)p=!(o&&p.b<-50)
else p=!1
s.at=p}else if(e===1){s.b=0.35
if(o)s.r=Math.sin(f*2.4+1)*1.6
if(q){s.b=1
s.a=0.35+0.35*Math.max(0,Math.sin(f*13))
s.d=0.7
p=f*8
s.Q=new A.r(-4-Math.max(0,Math.sin(p))*7,-56)
s.as=new A.r(4+Math.max(0,Math.sin(p))*7,-56)
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.evm
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.ewK
if(e===4)s.as=new A.r(36,-128+Math.sin(f*5)*4)}if(q){s.b=1
s.a=0.45+0.4*Math.max(0,Math.sin(f*12+e))
s.d=0.5
p=Math.max(0,Math.sin(f*9+e*1.3))*9
s.x=p
m=Math.max(0,Math.sin(f*10+e))*8
p=-56-p*0.3
s.Q=new A.r(-3-m,p)
s.as=new A.r(3+m,p)}else if(f<p){s.a=0.55
s.b=-0.1
s.c=1
s.Q=D.ez3
s.as=D.aO4}if(e===2&&g.x!=null&&f<g.y){s.a=v.aEg(f,5)
s.b=0.4
s.as=new A.r(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aEg(f,e*3)
s.b=0.5
s.c=0.4}}C.hGs(d,u.a,u.b*1.2,t,s,f,e,null)},
bIr(d,e,f){var w=new C.bUL(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd4(d){return this.c}}
C.agB.prototype={
a7(){return"_Stand."+this.b}}
C.aey.prototype={}
C.lw.prototype={}
C.bTv.prototype={
bCZ(d){var w,v,u,t,s=A.S(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aR()
this.c=s},
Go(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b_(r,new C.bTw())
return r},
ase(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.d()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aNZ(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
anm(d){var w,v,u=A.aQ(x.N),t=d,s=0
for(;;){w=t.d
if(w!=null){v=this.c
v===$&&A.d()
v=v.h(0,w)!=null&&u.I(0,t.a)}else v=!1
if(!v)break
v=this.c
v===$&&A.d()
w=v.h(0,w)
w.toString;++s
t=w}return s},
gzy(){var w=this.b
if(w.length===0)return null
w=A.B(w,x.P)
B.d.b_(w,new C.bTx(this))
return B.d.gH(w)}}
C.av6.prototype={}
C.zK.prototype={}
C.aly.prototype={
gCj(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bOh(),A.T(w).k("Y<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ak(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.N3.prototype={
gaqh(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gCj(0))s.push(t)}return s},
ak(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d44(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaqh(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lw(B.a.i(s.a),p,B.d.cd(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bbH.prototype={}
C.aaA.prototype={}
C.bj0.prototype={}
C.agz.prototype={}
C.akR.prototype={
S(){return new C.akS(B.bF,A.a([],x.cC),A.a([],x.e4),null,null)},
gd2(){return this.d}}
C.akS.prototype={
gNc(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFE(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gbbT(){var w,v=this,u=v.e
if(u===$){w=v.qa(v.gcdZ())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
Z(){this.a4()
this.gbbT().fY(0)},
t(){this.gbbT().t()
this.bxl()},
fY(d){this.l(new C.bMq(this))},
ce_(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fI(0,v)
if(w.c!=null)w.l(new C.bMl())},
bad(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gNc()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bj0(u,(u+0.5)/v,w[t.x].b[u]))},
fI(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bq(w,new C.bMr())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.ca4()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gNc()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.i.T((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.atL(v,0.8,B.cV)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.atL(m.cy,0.8,B.nC)
m.b_y("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.atL(q,0.88,D.lM)
p=m.gNc()[m.x]
n=p.c
if(u===n){m.b_y("The right gourd fell! It was "+p.b[n]+".")
return}}}},
atL(d,e,f){var w,v,u,t=new A.e_()
t.cU(B.i.T(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.agz(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b_y(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.QM()}},
ca4(){var w=this
if(w.x+1>=w.gNc().length){w.QM()
return}++w.x
w.bad()},
QM(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$QM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gNc().length
r=C.bHX(t,u.at,s)
u.ax=r
if(u.c!=null)u.l(new C.bMj())
w=2
return A.b(C.C0(u.a.d,r),$async$QM)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.C1(t.d,t.c.a,"catch",u.z),$async$QM)
case 3:u.cx=e
if(u.c!=null)u.l(new C.bMk())
return A.h(null,v)}})
return A.i($async$QM,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cdY()
else w=v.ch?v.ce0():A.as(new A.D(B.eF,A.x(A.a([D.aYW,B.P,D.fZu,B.S,D.h4I,B.e8,C.uB("Play",v.geY(v),B.cV,B.hc,D.fI)],x.p),B.l,u,B.e,B.M,0,B.p),u),u,u,u)
return new C.tI("Calabash Catch",w,B.fd,u)},
ce0(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hN:B.Ig
p.push(A.W(u,v?B.aB:B.bV,r,r,r,22))}p.push(B.aY)
v=s.x
u=s.gNc()
p.push(A.c(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aXx,r,r,r))
p.push(B.bb)
v=A.m(14)
p.push(A.o(r,A.c(""+s.z,r,r,r,r,r,r,B.iP,r,r,r),B.f,r,r,new A.n(B.bw,r,r,v,r,r,B.m),r,r,r,r,B.CW,r,r,r))
p=A.A(p,B.l,r,B.e,B.h,0,r,r)
v=A.m(18)
t=A.K(B.cV,B.r,3)
return A.x(A.a([new A.D(D.bFX,p,r),A.o(r,A.c(u[s.x].a,r,r,r,r,r,r,D.fJn,B.K,r,r),B.f,r,r,new A.n(D.qC,r,t,v,r,r,B.m),r,r,r,B.f6,B.bl,r,r,1/0),B.al,A.E(A.ce(new C.bMp(s)),1)],q),B.l,r,B.e,B.h,0,B.p)},
cdY(){var w=this,v=null,u=A.as(A.c(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.qe,v,v,v),v,v,v),t=A.as(A.c(""+w.Q+" of "+w.gNc().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Wx,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cn(A.a([D.bfC,u,t,B.aO,new C.IG(s,r,w.cx,v),B.aO,A.as(C.uB("Back to the games",new C.bMi(w),B.cV,B.ki,D.fI),v,v,v)],x.p),v,v,B.ae,v,v,B.ah,!1)}}
C.beb.prototype={
a2(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.R(),a3=A.L()
a3.sam(A.jD(B.J,new A.r(0,a0),D.d6W,B.aCr,B.x,e))
a4.aE(new A.a2(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=B.Of.gp(0)
a4.O(new A.r(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aG(a2.r,B.aj,e,e,w)
a2=a0*0.7
v.E(new A.aZ(0,a2))
for(u=0;u<=d;u+=6){t=new A.aq(u,a2+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.aj(s)
v.ac()}v.E(new A.aq(d,a0))
v.E(new A.aq(0,a0))
a2=$.R()
w=A.L()
w.r=D.bmM.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aG(a2.r,B.aj,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.ch(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.ch(r+14,t,r+26,w))
a2.E(new A.by())
w=A.L()
w.r=D.ai7.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cs1[q]
s=new A.ar(B.T,B.Q,B.V,B.W,B.U)
s.r=D.ai7.gp(0)
s.c=7
s.d=B.bG
a4.ah(new A.r(r,a2),new A.r(r+p*46,w),s)
s=new A.ar(B.T,B.Q,B.V,B.W,B.U)
s.r=D.ahp.gp(0)
a4.O(new A.r(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.bnM.gp(0)
a4.aE(new A.a2(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ar(B.T,B.Q,B.V,B.W,B.U)
t.r=D.ajL.gp(0)
t.c=2
a4.ah(new A.r(w,a1),new A.r(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bY(new A.r(u,s),12,54)
$.R()
l=new A.ar(B.T,B.Q,B.V,B.W,B.U)
l.r=D.lM.j(0.6).gp(0)
a4.c1(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.br(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.R()
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=D.aiQ.gp(0)
a4.O(D.euC,14,m)
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=D.bsL.gp(0)
m.c=4
m.d=B.bG
a4.ah(D.euD,D.evK,m)
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.sam(new A.amr(D.exS,46,D.dfR,B.vx,B.x,e,e,0))
a4.O(B.J,34,m)
m=A.bY(D.exY,8,12)
l=new A.ar(B.T,B.Q,B.V,B.W,B.U)
l.r=B.c.j(0.35).gp(0)
a4.c1(m,l)
k=new A.jQ(new A.es(n.c,e,e,B.cN,e,e,e,e,e,e,D.fHa),B.K,B.bW,new A.jk(1),e,e,3,e,B.bX,e,B.cw)
k.nD(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bu(A.bY(B.cO,m.gb9(m)+8,l),B.h_)
l=new A.ar(B.T,B.Q,B.V,B.W,B.U)
l.r=D.qC.gp(0)
a4.aq(j,l)
l=new A.ar(B.T,B.Q,B.V,B.W,B.U)
l.r=D.lM.gp(0)
l.b=B.ab
l.c=1.5
a4.aq(j,l)
l=k.b
m=l.c
l=l.a.c
k.a2(a4,new A.r(-m/2,4-l.gb9(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
C.inv(a4,new A.r(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dU,(w+1)/2)
h=A.bY(new A.r(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aG($.R().r,B.aj,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.ch(h.gbD().a,s+8,w+8,s))
a3.E(new A.by())
m=A.L()
m.r=D.a_y.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=D.Cc.gp(0)
m.c=1.4
a4.ah(new A.r(t,a2),new A.r(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=B.nC.gp(0)
a4.aE(new A.a2(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.bmS.gp(0)
a4.c1(new A.a2(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=g.e.j(B.i.D(s,0,1)).gp(0)
a4.O(new A.r(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.fs(e,B.cw,e,e,e,A.cR(e,e,e,e,e,e,e,e,e,A.l(e,e,B.cV.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,E.E7,e,e),"+"+a2),B.a7,B.bW,e,B.dD,B.bX)
k.e5()
k.a2(a4,new A.r(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aD(d){return!0}}
C.R3.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aCr(w.c,w.f,v),B.az),s=A.m(10),r=A.K(B.bA,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cT,A.o(v,A.c(w.d,v,1,B.a2,v,v,v,D.fzF,v,v,v),B.f,v,v,new A.n(B.c,v,r,s,v,v,B.m),v,v,v,v,B.nc,v,v,v)],x.p),B.l,v,B.e,B.M,0,B.p),v)},
ga_(d){return this.e}}
C.aCr.prototype={
a2(d,e){var w=e.ek(B.J),v=e.gdj(),u=this.c?0.8:0
return A.hnu(d,w,v*0.44,this.b,0,u)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aAU.prototype={}
C.avK.prototype={
S(){return new C.avL(A.S(x.S,x.cq),null,null)},
gd2(){return this.d}}
C.avL.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hM2(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaGk(){var w=this.z
return w===$?this.z=this.XR(0):w},
gj1(){var w,v=this.Q
if(v===$){w=this.gkS()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c1(w,-1,!1,x.S)}return v},
XR(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aAU(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aAU(v[t],u[t],-1))
v=new A.e_()
v.cU(this.a.e*31+d)
B.d.e0(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.dq(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eN$
u.b=!1
B.d.a8(u.a)
u=u.goJ()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dV$.a.a8(0)
v.qL()}this.bxO()},
cTR(d,e){var w,v,u,t,s,r=this
if(d>=r.gj1().length||r.gj1()[d]!==-1||B.d.q(r.gj1(),e))return
w=r.gaGk()[e]
v=r.gkS()[r.e].a
if(w.c<0){++r.f;++r.y
r.l(new C.csg(r,e,w,v))
A.cy(B.lU,new C.csh(r))
return}++r.r
u=A.bp(null,B.hH,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.l(new C.csi(r,d,e,w,v))
u.cs(0)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkS()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cC(n,0,new C.csj())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.l(new C.csk(t,r))
w=5
return A.b(C.C0(t.a.d,r),$async$kN)
case 5:t.x=f
o=t.a
w=6
return A.b(C.C1(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.l(new C.csl())
w=1
break
case 4:for(o=t.as,n=new A.dq(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eN$
p.b=!1
B.d.a8(p.a)
p=p.goJ()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dV$.a.a8(0)
q.qL()}o.a8(0)
t.l(new C.csm(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.as(A.c(""+r.r+" branches grown",p,p,p,p,p,p,B.qe,p,p,p),p,p,p)
v=r.f
v=A.as(A.c(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Wx,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tI(q,A.cn(A.a([D.agY,w,v,B.aO,new C.IG(u,t,r.ch,p),B.aO,A.as(C.uB("Back to the games",new C.csc(d),B.cV,B.ki,D.fI),p,p,p)],x.p),p,p,B.ae,p,p,B.ah,!1),B.fd,p)}w=r.gkS()
v=r.e
s=w[v]
return new C.tI(q,new A.D(B.tk,A.x(A.a([A.c("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,B.aXs,B.K,p,p),A.E(A.ce(new C.csd(r,s)),1)],x.p),B.l,p,B.e,B.h,0,B.p),p),B.fd,p)}}
C.bdD.prototype={
a2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cSm(),A.T(b2).k("Y<1>")).gJ(0),b4=a9.b,b5=b4.a5(0,B.Kg)
$.R()
w=A.L()
w.r=D.lN.j(0.18+0.1*b3).gp(0)
b6.O(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a5(0,D.eup)
u=A.L()
u.r=B.qE.j(0.5).gp(0)
u.c=10
u.d=B.bG
b6.ah(new A.r(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.e6.aB(0,B.i.D(b2[p],0,1))
l=$.R().r
k=A.a([],s)
j=new A.aG(l,B.aj,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ac()
o=new A.ch((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.aj(n)
j.ac()
if(m<1)for(o=new A.aG(l,j.b,j.c,b0,A.bs(k,!0,r)),n=A.a([],q),i=new A.uW(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bj(A.jL(b1));--h
g=new A.BY(i,h)
f=0
for(;;){i.jO()
e=n[h].b
e===$&&A.d()
if(!(f<e.a.length()))break
i.jO()
e=n[h].b
e===$&&A.d()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.R()
a1=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a1.r=B.aT.gp(0)
a1.b=B.ab
a1.c=3
b6.af(new A.aG(l,d,b0,new A.b7([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aG(l,j.b,j.c,b0,A.bs(k,!0,r)),n=A.a([],q),k=new A.uW(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bj(A.jL(b1));--a0
k.jO()
a1=n[a0].b
a1===$&&A.d()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.R()
a4=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a4.r=D.H_.gp(0)
a4.b=B.ab
a4.c=h
a4.d=B.bG
b6.af(new A.aG(l,a2,b0,new A.b7([new A.BY(k,a0),0,a1*m,!0]),a3),a4)
k.jO()
a4=n[a0].b
a4===$&&A.d()
a4=a4.a.length()
k.jO()
a5=n[a0].Wh(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bY(new A.r(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a3.r=B.be.gp(0)
b6.c1(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.jQ(D.fz8,B.a7,B.bW,new A.jk(1),b0,b0,b0,b0,B.bX,b0,B.cw)
a8.e5()
a8.a2(b6,new A.r(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aD(d){return!0}}
C.azG.prototype={
S(){return new C.azH(A.aQ(x.S))},
gd2(){return this.d}}
C.azH.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hMX(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
Z(){this.a4()
this.bam()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a3()},
bam(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.de(B.tg,new C.cHd(this))},
brn(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkS()[v.e]
if(w.e[d]===w.b)v.l(new C.cHl(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.l(new C.cHm(v,d))
A.cy(B.iY,new C.cHn(v))}},
cZm(){var w=this
if(!w.as&&w.f<w.gkS()[w.e].d.length)w.l(new C.cHo(w))},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkS()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a1(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.l(new C.cHp(t,s))
w=5
return A.b(C.C0(t.a.d,s),$async$kN)
case 5:t.y=f
q=t.a
w=6
return A.b(C.C1(q.d,q.c.a,"who",t.r),$async$kN)
case 6:t.ax=f
if(t.c!=null)t.l(new C.cHq())
w=1
break
case 4:t.l(new C.cHr(t))
t.bam()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.as(A.c(""+a0.w+" of "+a0.gkS().length+" guessed",a2,a2,a2,a2,a2,a2,B.qe,a2,a2,a2),a2,a2,a2)
v=A.as(A.c(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Wx,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tI(a1,A.cn(A.a([D.bfN,w,v,B.aO,new C.IG(u,t,a0.ax,a2),B.aO,A.as(C.uB("Back to the games",new C.cHf(a3),B.cV,B.ki,D.fI),a2,a2,a2)],x.p),a2,a2,B.ae,a2,a2,B.ah,!1),B.fd,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkS()
u=x.X
t=x.p
w=A.a([A.c("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.LB,B.K,a2,a2),B.S,A.as(A.lH(new C.cHg(a0,r),a2,B.b_,B.hH,a2,a2,new A.bt(a2,s,u),x.i),a2,a2,a2),B.aA],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.av(B.cV,2,B.r,-1)
k=o+1
w.push(new A.re(new A.bt(0,1,u),new C.cHh(),A.o(a2,new A.c3(B.aL,B.e,B.h,B.l,a2,B.p,a2,0,A.a([new A.qN(A.c(""+k,a2,a2,a2,a2,a2,a2,B.ok,a2,a2,a2),D.lM,a2,12,a2),B.ar,new A.bx(1,B.ba,A.c(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fM1,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.n(D.qC,a2,new A.bE(l,l,l,l),new A.bc(m,m,m,m),a2,a2,B.m),a2,a2,a2,B.cy,B.bl,a2,a2,a2),B.b_,B.iY,a2,new A.bl("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.as(A.bO(!1,D.hcF,a2,a2,!0,a2,a2,a2,a0.gcZl(),a2,a2),a2,a2,a2))
w.push(B.P)
if(a0.as){u=D.lN.j(0.2)
q=A.m(16)
p=A.K(D.lN,B.r,1)
n=a0.e
m=A.c("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fL,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.o(a2,A.x(A.a([m,B.S,C.uB(v,a0.gqt(a0),B.cV,B.jA,D.fI)],t),B.l,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.n(u,a2,p,q,a2,a2,B.m),a2,a2,a2,a2,B.bH,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dq:B.cV.j(0.2)
g=new A.aP(16,16)
l=new A.av(n.q(0,o)?B.fn:B.cV,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bV:B.c
d=n.q(0,o)?B.xV:a2
t.push(new A.re(new A.bt(0,i,u),new C.cHi(),A.ay(a2,A.o(a2,A.c(f,a2,a2,a2,a2,a2,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.ag5,new A.n(h,a2,new A.bE(l,l,l,l),new A.bc(g,g,g,g),a2,a2,B.m),a2,a2,a2,a2,B.jy,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cHj(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b_,B.mn,a2,new A.bl("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bZ(B.fQ,t,B.br,a2,10,10))}return new C.tI(a1,A.cn(w,a2,a2,B.anO,a2,a2,B.ah,!1),B.fd,a2)}}
C.aAE.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aX(){this.b7()
this.b5()
this.bC()}}
C.aI_.prototype={
aX(){this.b7()
this.b5()
this.dK()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdD())
w.ba$=null
w.a3()}}
C.agn.prototype={
arN(d){},
asi(){var w=this,v=w.qa(new C.fbB(w))
v.fY(0)
w.Mk$!==$&&A.aR()
w.Mk$=v}}
C.aLQ.prototype={
gbnO(d){var w=this.c
return B.a.az(w,0,Math.min(this.d,w.length))},
Wp(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.de(B.a1c,new C.flR(w))},
btL(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.amQ.prototype={
S(){return new C.amR(new C.an_(),A.a([],x.t),new A.eF(0,$.ax()),$,0,null,null)},
gd2(){return this.d}}
C.amR.prototype={
gNa(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFE(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghe(d){var w,v=this,u=v.e
if(u===$){w=C.Nj(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqB(){var w=this.r
return w===$?this.r=new C.aLQ(new C.bUh(this)):w},
gaqD(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gNa()[v].c)u.push(1)
return u.length},
gbn7(){var w=this.ghe(0)
return w.gzy()==null?"Elder":B.a.i(w.gzy().b)},
Z(){this.a4()
this.asi()},
t(){var w,v=this
v.gqB().t()
v.f.t()
w=v.Mk$
w===$&&A.d()
w.t()
w=v.qh$
w.V$=$.ax()
w.R$=0
v.bxt()},
cNY(){var w=this
w.l(new C.bUe(w))
w.gqB().Wp(w.gNa()[w.x].a)},
Lt(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqB()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qh$.a
v.ax=u
v.ay=u+1
v.l(new C.bUc())
A.cy(B.hH,new C.bUd(v))},
brj(){var w=this.gaqD(0)/this.gNa().length*100
if(w>=90)return D.f61
if(w>=75)return D.f4_
if(w>=60)return D.eVg
if(w>=45)return D.eYO
return D.ePy},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cwf()
w=A.bS(0,new A.e6(A.b4(m,m,m,new C.buq(n,n.qh$),B.az),m),0,0,0)
if(!n.Q){v=D.qC.j(0.96)
u=A.m(20)
t=A.K(B.cV,B.r,3)
u=A.o(m,A.x(A.a([A.c("Elder "+n.gbn7()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aYl,B.K,m,m),B.S,C.uB("Start the test",n.gC9(),B.cV,B.jj,D.fI)],x.p),B.l,m,B.e,B.M,0,B.p),B.f,m,m,new A.n(v,m,t,u,m,m,B.m),m,m,m,m,B.bH,m,m,m)
v=u}else{v=n.x
u=n.gNa()
v=A.c("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aYn,m,m,m)
if(n.Q){t=n.gqB()
t=t.d<t.c.length}else t=!1
if(t)u=D.frC
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.av(D.Cc,4,B.r,-1)
s.push(A.ay(m,A.o(m,A.c(q[r],m,m,m,m,m,m,D.fCW,B.K,m,m),B.f,m,D.ag5,new A.n(D.biI,m,new A.bE(o,o,o,o),new A.bc(p,p,p,p),m,m,B.m),m,m,m,m,B.P0,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bUf(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bZ(B.fQ,s,B.br,new A.bl("o"+t,x.W),8,8)}u=A.x(A.a([v,B.al,A.oF(u,B.n7,A.pZ(),B.b_,B.b_,A.LV())],x.p),B.l,m,B.e,B.M,0,B.p)
v=u}return new C.tI("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.fd,m)},
cwf(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.brj(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gNa()[v].c)g.push(v)
u=A.m(22)
t=A.K(B.cV,B.r,4)
s=A.c(j.a.c.b,i,i,i,i,i,i,D.fHt,B.K,i,i)
r=A.c("Signed by Elder "+j.gbn7(),i,i,i,i,i,i,D.fG5,i,i,i)
q=x.p
p=A.a([A.c(h.a,i,i,i,i,i,i,D.fLm,i,i,i),D.eH6],q)
o=A.c(h.b,i,i,i,i,i,i,D.fNj,i,i,i)
n=j.gaqD(0)
m=j.gNa()
u=A.o(i,A.x(A.a([D.fYI,B.au,s,r,B.S,new A.an(B.z,i,B.ad,B.t,p,i),o,B.al,A.c(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.ad6,i,i,i),B.P,D.auH],q),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(D.qC,i,t,u,i,i,B.m),i,i,i,i,B.fb,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aA,new C.IG(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aO,D.hdJ,B.P],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.av(B.bw,1,B.r,-1)
p=m[v]
u.push(A.o(i,A.x(A.a([A.c(p.a,i,i,i,i,i,i,B.he,i,i,i),B.au,A.c("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fIG,i,i,i),A.c(p.d,i,i,i,i,i,i,D.fKY,i,i,i)],q),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.dq,i,new A.bE(k,k,k,k),new A.bc(r,r,r,r),i,i,B.m),i,i,i,B.cy,B.bl,i,i,i))}B.d.u(s,u)}s.push(B.aA)
s.push(A.as(C.uB("Back to the games",new C.bU8(j),B.cV,B.ki,D.fI),i,i,i))
return new C.tI("Village School",A.cn(s,i,i,B.bR,i,i,B.ah,!1),B.fd,i)}}
C.buq.prototype={
a2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qh$.a
a0.GI(e.f.MW(a1))
w=C.hiC(a1)
v=a0.c
J.br(v.save())
v.translate(w.a,w.b)
a0.bV(0,w.c)
if(e.Q){u=e.gqB()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.d10[s]-6
$.R()
r=new A.ar(B.T,B.Q,B.V,B.W,B.U)
r.r=D.GL.gp(0)
a0.aE(new A.a2(u,340,u+12,450),r)}u=A.bu(D.ab4.cr(10),B.ie)
$.R()
r=A.L()
r.r=D.Cc.gp(0)
a0.aq(u,r)
r=A.bu(D.ab4,B.iy)
u=A.L()
u.sam(A.jD(new A.r(30,96),new A.r(420,346),D.dll,f,B.x,f))
a0.aq(r,u)
q=new A.e_()
q.cU(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bY(new A.r(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ar(B.T,B.Q,B.V,B.W,B.U)
r.r=B.c.j(0.025).gp(0)
a0.c1(o,r)}u=A.L()
u.r=E.akB.gp(0)
a0.aE(new A.a2(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.aE(D.fiY,u)
u=A.L()
u.r=B.bM.gp(0)
a0.aE(D.fj1,u)
u=A.bu(D.fiS,B.ho)
r=A.L()
r.r=D.a_y.gp(0)
a0.aq(u,r)
n=B.i.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqB().gbnO(0)
m=A.fs(f,B.cw,f,7,f,A.cR(f,f,f,f,f,f,f,f,f,D.fPD,u+(t?"|":"")),B.a7,B.bW,f,B.dD,B.bX)
m.nD(346)
J.br(v.save())
u=A.i5(D.ab4)
r=$.mh()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.i5(new A.a2(30+390*n,96,420,346)),r[1],!0)
m.a2(a0,new A.r(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bu(new A.a2(u,r,u+40,r+90),B.h_)
u=A.L()
u.r=D.byU.gp(0)
a0.aq(r,u)}}else{m=A.fs(f,B.cw,f,f,f,D.fzo,B.K,B.bW,f,B.dD,B.bX)
m.nD(340)
m.a2(a0,new A.r(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.i.F(u+p/8,1)
o=B.o.F(e.gqB().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.T,B.Q,B.V,B.W,B.U)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.O(new A.r(70+o+k*6,166+l*70),1.6,j)}u=e.ghe(0).gzy()
i=(u==null?f:u.c)===D.oO?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.fbC(d,a0,i,t,h,D.evz)),new A.y(520,new C.fbD(a0,d,t)),new A.y(575,new C.fbE(a0,d,t)),new A.y(585,new C.fbF(this,a0,d,t)),new A.y(615,new C.fbG(this,t,a0,d,h))],x.E)
B.d.b_(g,new C.fbH())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
ce1(d,e){var w,v,u,t,s,r,q,p=$.R(),o=A.a([],x.v),n=new A.aG(p.r,B.aj,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.aZ(r,q)
o.push(r)
q=n.f
if(q!=null)r.aj(q)
n.ac()}else{r=new A.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.aj(q)
n.ac()}}n.E(new A.by())
return n},
aD(d){return!1}}
C.amO.prototype={
S(){return new C.amP(new C.an_(),A.S(x.S,x.i),new A.eF(0,$.ax()),$,0,null,null)},
gd2(){return this.d}}
C.amP.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hLS(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gj1(){var w=this.z
return w===$?this.z=this.FW(0):w},
gaMA(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FW(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cd(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FW(0):r).length);++v}s.Q=w
r=w}return r},
FW(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e4(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e_()
u.cU(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.eD(u,new C.bTV())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a4()
this.asi()},
t(){var w,v=this
v.e.t()
w=v.Mk$
w===$&&A.d()
w.t()
w=v.qh$
w.V$=$.ax()
w.R$=0
v.bxs()},
arN(d){var w,v,u,t,s,r=this,q=r.gj1().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cd(u===$?r.z=r.FW(0):u,v)
s=r.gaMA()
s[v]=s[v]+(450*(t+0.5)/q-r.gaMA()[v])*Math.min(1,w)}},
d3K(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj1().length)return
w=v.y
if(w===-1){v.l(new C.bU5(v,d))
return}if(w===d){v.l(new C.bU6(v))
return}v.l(new C.bU7(v,B.d.cd(v.gj1(),v.y),d,B.d.cd(v.gj1(),d)))},
cOG(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FW(0):u).length))break
t=s.gkS()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FW(0):u)[v]]===v);++v}s.l(new C.bU0(s,B.d.cw(w,new C.bU1())))},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkS().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.l(new C.bU2(t,s))
w=5
return A.b(C.C0(t.a.d,s),$async$kN)
case 5:t.x=f
q=t.a
w=6
return A.b(C.C1(q.d,q.c.a,"lineup",t.r*10),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.l(new C.bU3())
w=1
break
case 4:t.l(new C.bU4(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.as(A.c(""+l.r+" of "+l.gkS().length+" lines right",k,k,k,k,k,k,B.qe,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tI("Line Up",A.cn(A.a([D.agY,w,B.aO,new C.IG(v,u,l.ch,k),B.aO,A.as(C.uB("Back to the games",new C.bTX(d),B.cV,B.ki,D.fI),k,k,k)],x.p),k,k,B.ae,k,k,B.ah,!1),B.fd,k)}w=A.a([],x.t)
for(t=0;v=l.gkS(),t<v[l.f].d.length;++t)w.push(t)
B.d.b_(w,new C.bTY(l))
u=A.bS(0,A.ce(new C.bTZ(l)),0,0,0)
s=l.f
r=A.c("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aYn,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.x(A.a([r,A.c(s.a,k,k,k,k,k,k,D.fHV,B.K,k,k),A.c(s.b,k,k,k,k,k,k,D.fKc,B.K,k,k)],q),B.l,k,B.e,B.h,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.v.j(0.7)
o=A.m(16)
n=l.ax
m=A.K(n?D.lN:B.nC,B.r,2)
r.push(A.o(k,A.c(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bU_(l),x.cM).aM(0,", then ")+".",k,k,k,k,k,k,D.fMp,k,k,k),B.f,k,k,new A.n(p,k,m,o,k,k,B.m),k,k,k,B.d4,B.bl,k,k,1/0))}if(!l.at)r.push(C.uB("That is my line!",l.gcOF(l),B.cV,B.hl,D.fI))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uB(w,l.gqt(l),B.cV,B.jA,D.fI))}return new C.tI("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ao(12,A.x(r,B.l,k,B.e,B.M,0,B.p),k,k,12,12,k,k)],q),k),B.fd,k)}}
C.bkR.prototype={
a2(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qh$.a
c7.GI(c5.e.MW(c8))
w=C.hiC(c8)
v=c7.c
J.br(v.save())
v.translate(w.a,w.b)
c7.bV(0,w.c)
u=c5.gj1().length
t=$.R().r
s=x.v
r=new A.aG(t,B.aj,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.ch(225,500,440,470))
q=A.L()
q.r=D.a_y.gp(0)
q.b=B.ab
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aG(t,B.aj,c4,c4,l)
l.push(new A.aZ(o,n))
k.ac()
m=new A.aq(o+16,n+6+m*3)
l.push(m)
j=k.f
if(j!=null)m.aj(j)
k.ac()
m=new A.aq(o,n+20)
l.push(m)
j=k.f
if(j!=null)m.aj(j)
k.ac()
m=new A.by()
l.push(m)
l=k.f
if(l!=null)m.aj(l)
k.ac()
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=[B.cV,B.nC,D.lN,B.aH][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b2j(c7,"OLDEST",D.ewx,B.cV)
this.b2j(c7,"YOUNGEST",D.ew_,B.be)
t=A.bu(D.fiM,B.h_)
s=A.L()
s.r=D.GL.gp(0)
c7.aq(t,s)
s=A.bu(D.fiL,B.iy)
t=A.L()
t.r=D.Cc.gp(0)
c7.aq(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b_(t,new C.duc())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.cd(a1===$?c5.z=c5.FW(0):a1,f)
o=c5.gaMA()[f]
a3=c5.y===f
a4=a3?Math.abs(Math.sin(j))*10:0
a5=k.h(0,f)
if(a5!=null&&c6<a5)a4+=Math.sin((1-(a5-c6)/0.5)*3.141592653589793)*14
a6=c5.at&&c5.gkS()[c5.f].e[f]===a2
a7=c5.at&&!c5.ax&&!a6
a8=c5.gkS()
a9=a8[c5.f].c
b0=a9.length>f?a9[f]:f
if(l)b1=c5.at&&a6
else b1=!0
b2=Math.max(0,Math.sin(m+f))
if(a3){$.R()
a9=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a9.r=B.cV.j(0.22+0.1*Math.sin(e)).gp(0)
c7.O(new A.r(o,520),54,a9)}a9=D.dpd[B.o.F(b0,6)]
if(b1)b3=1
else b3=a7?-0.4:0.35
if(b1)b4=0.4+0.4*b2
else b4=h&&a7?0.5:0
if(h&&a7)b5=1
else b5=a3?0.6:0
b6=b1?0.5:0
b7=a7?Math.sin(d)*0.5:0
b8=b1?a4+b2*8:a4
if(b1)b9=new A.r(-3-b2*8,-56)
else b9=a3?D.eyB:c4
if(b1)c0=new A.r(3+b2*8,-56)
else if(h&&a7)c0=D.aO4
else c0=a3?new A.r(30,-104+Math.sin(e)*5):c4
C.SY(c7,new A.r(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.Ki,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.jQ(new A.es(a8,c4,c4,B.cN,c4,c4,c4,c4,c4,c4,D.fFA),B.a7,B.bW,new A.jk(1),"\u2026",c4,1,c4,B.bX,c4,B.cw)
c1.nD(q)
c2=A.bu(A.bY(new A.r(o,650),24,c1.b.c+16),B.h_)
$.R()
a8=new A.ar(B.T,B.Q,B.V,B.W,B.U)
if(a6)a9=B.iH
else a9=a7?B.t9:D.qC
a8.r=a9.gp(0)
c7.aq(c2,a8)
a8=new A.ar(B.T,B.Q,B.V,B.W,B.U)
if(a6)a9=D.lN
else a9=a7?B.nC:D.lM
a8.r=a9.gp(0)
a8.b=B.ab
a8.c=2
c7.aq(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a2(c7,new A.r(o-a9/2,650-a8.gb9(a8)/2))
c3=new A.jQ(new A.es(""+(a2+1),c4,c4,B.cN,c4,c4,c4,c4,c4,c4,D.fFU),B.a7,B.bW,new A.jk(1),c4,c4,c4,c4,B.bX,c4,B.cw)
c3.e5()
c3.a2(c7,new A.r(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.i.F(p*53+Math.sin(c5+p)*20,450)
q=B.i.F(t+p*37,420)
J.br(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bY(B.J,4,8)
$.R()
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=[B.cV,B.nC,D.lN,B.aH,B.c][B.o.F(p,5)].gp(0)
c7.aE(q,m)
v.restore()}v.restore()},
b2j(d,e,f,g){var w,v,u=null,t=A.fs(u,B.cw,u,u,u,A.cR(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,E.E7,u,u),e),B.a7,B.bW,u,B.dD,B.bX)
t.e5()
w=t.b
v=w.c
w=w.a.c
t.a2(d,f.aJ(0,new A.r(v/2,w.gb9(w)/2)))},
aD(d){return!1}}
C.a2D.prototype={
a7(){return"_Trip."+this.b}}
C.amK.prototype={
S(){return new C.amL(D.Yl,new A.eF(0,$.ax()),$,0,null,null)},
gd2(){return this.d}}
C.amL.prototype={
gDI(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFE(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghe(d){var w,v=this,u=v.e
if(u===$){w=C.Nj(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqB(){var w=this.f
return w===$?this.f=new C.aLQ(new C.bTH(this)):w},
gUn(){var w=this.ghe(0)
return w.gzy()==null?"Grandma":B.a.i(w.gzy().b)},
Z(){this.a4()
this.asi()},
t(){var w,v=this
v.gqB().t()
w=v.Mk$
w===$&&A.d()
w.t()
w=v.qh$
w.V$=$.ax()
w.R$=0
v.bxr()},
arN(d){var w,v,u,t=this
if(t.r!==D.aeQ)return
w=B.dL.aB(0,B.i.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDI()
if(v+1>=u.length){t.r=D.aeR
t.Xm()}else{++t.w
t.ay=!1
t.r=D.Ym
t.gqB().Wp(u[t.w].a)}if(t.c!=null)t.l(new C.bTF())}},
Xm(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Xm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqB().Wp("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDI().length
r=C.bHX(t,u.z,s)
u.as=r
w=2
return A.b(C.C0(u.a.d,r),$async$Xm)
case 2:u.at=e
s=u.a
w=3
return A.b(C.C1(s.d,s.c.a,"journey",u.x*10),$async$Xm)
case 3:u.ch=e
if(u.c!=null)u.l(new C.bTz())
return A.h(null,v)}})
return A.i($async$Xm,v)},
bsD(){this.aVk()},
aVk(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.aeQ
if(w.c!=null)w.l(new C.bTA())},
Lt(d){var w,v,u,t,s=this
if(s.r!==D.Ym)return
w=s.gDI()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.l(new C.bTE(s,d,v))
u=s.gqB()
t=s.w
u.Wp(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cTQ(){if(this.r!==D.BK)return
this.aVk()},
B(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.e6(A.b4(s,s,s,new C.bkg(t,t.qh$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDI().length;++w){v=t.w
if(w<v||t.r===D.aeR)v=B.cV
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(new A.bx(1,B.ba,A.o(s,s,B.f,s,s,new A.n(v,s,s,new A.bc(u,u,u,u),s,s,B.m),s,7,s,B.x0,s,s,s,s),s))}p.push(B.bk)
p.push(D.h_n)
return new C.tI("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.h,0,s,s),s,s,12,12,2,s),A.ao(10,t.cnO(),s,s,10,10,s,s)],q),s),B.fd,s)},
cnO(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bTD(o),l=D.qC.j(0.96),k=A.m(22),j=A.K(B.cV,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.c("A long drive to the village of Elder "+o.gUn()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aYl,B.K,n,n),B.S,C.uB("Start the journey",o.gbsC(),B.cV,D.bTN,D.fI)],x.p),B.l,n,B.e,B.M,0,B.p)
break
case 3:w=D.bfn
break
case 1:w=o.w
v=o.gDI()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.av(D.lM,2.5,B.r,-1)
t.push(A.ay(n,A.o(n,A.c(r[s],n,n,n,n,n,n,D.aXH,B.K,n,n),B.f,n,D.agc,new A.n(D.alL,n,new A.bE(p,p,p,p),new A.bc(q,q,q,q),n,n,B.m),n,n,n,n,L.wV,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bTB(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.P,A.bZ(B.bI,t,B.br,n,8,8)],u),B.B,n,B.e,B.M,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDI().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.P,new A.bK(B.a9,n,n,C.uB(v,o.gcTP(),B.cV,B.jA,D.fI),n)],x.p),B.B,n,B.e,B.M,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gUn()),B.P,A.c(""+o.x+" of "+o.gDI().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aXZ,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aRW(v)
u=C.aRW(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.c(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.ad6,n,n,n))}w.push(B.P)
w.push(A.as(C.uB("Back to the games",new C.bTC(o),B.cV,B.ki,D.fI),n,n,n))
w=A.x(w,B.B,n,B.e,B.M,0,B.p)
break
default:w=n}return A.o(n,w,B.f,n,n,new A.n(l,n,j,k,D.aFe,n,B.m),n,n,n,n,B.bl,n,n,n)}}
C.bkg.prototype={
a2(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qh$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDI(),d0=B.i.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.aeQ,d2=c7*0.5
c8=A.ap(D.bke,D.bv7,d0)
c8.toString
w=A.ap(D.ZH,B.ajm,d0)
w.toString
v=A.ap(B.uE,D.btt,d0)
v.toString
$.R()
u=A.L()
t=x.O
u.sam(A.jD(B.J,new A.r(0,d2),A.a([c8,w,v],t),B.a5O,B.x,c3))
d3.aE(new A.a2(0,0,0+c6,0+c7),u)
s=new A.r(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.sam(A.wm(s,60,A.a([D.btS,B.L],t),c3,B.x,c3,c3,0))
d3.O(s,60,u)
u=A.L()
u.r=B.ZU.gp(0)
d3.O(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.i.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dFb[o]
$.R()
u=new A.ar(B.T,B.Q,B.V,B.W,B.U)
u.r=B.c.j(0.75).gp(0)
d3.O(new A.r(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.R()
j=A.a([],m)
i=new A.aG(k.r,B.aj,c3,c3,j)
j.push(new A.aZ(0,v))
i.ac()
for(k=u-l*12,h=0.12+l*0.1,g=70+l*30,f=14-l*3,q=0;q<=c6;q+=6){e=new A.aq(q,k+Math.sin((q+c4.CW*h)/g)*f)
j.push(e)
d=i.f
if(d!=null)e.aj(d)
i.ac()}k=new A.aq(c6,v)
j.push(k)
j=i.f
if(j!=null)k.aj(j)
i.ac()
$.R()
k=new A.ar(B.T,B.Q,B.V,B.W,B.U)
k.r=A.ap(l===0?D.biL:D.byi,D.bnV,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.ce2(d3,new A.r(B.i.F(B.i.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.R()
w=A.L()
v=A.ap(D.akV,D.H_,d0)
v.toString
w.sam(A.jD(new A.r(0,d2),new A.r(0,c7),A.a([v,D.btU],t),c3,B.x,c3))
d3.aE(new A.a2(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.bn7.gp(0)
d3.aE(new A.a2(0,a0,c6,a1),w)
w=A.L()
w.r=D.bxU.gp(0)
d3.aE(new A.a2(0,a0-3,c6,a0),w)
for(q=-B.i.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.T,B.Q,B.V,B.W,B.U)
u.r=E.Nw.gp(0)
d3.aE(new A.a2(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.R()
b2=new A.ar(B.T,B.Q,B.V,B.W,B.U)
b2.r=D.bip.gp(0)
d3.aE(new A.a2(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aG(b1.r,B.aj,c3,c3,b2)
b2.push(new A.aZ(a9-36,t))
b1.ac()
b0=new A.aq(a9,a6)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.aj(b3)
b1.ac()
b0=new A.aq(a9+36,t)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.aj(b3)
b1.ac()
b0=new A.by()
b2.push(b0)
b2=b1.f
if(b2!=null)b0.aj(b2)
b1.ac()
b0=new A.ar(B.T,B.Q,B.V,B.W,B.U)
b0.r=D.bw0.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ar(B.T,B.Q,B.V,B.W,B.U)
b1.r=D.fI.gp(0)
d3.aE(new A.a2(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ar(B.T,B.Q,B.V,B.W,B.U)
b0.r=D.GL.gp(0)
d3.aE(new A.a2(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bu(new A.a2(b0,a4,b0+60,a5),B.jE)
b0=new A.ar(B.T,B.Q,B.V,B.W,B.U)
b0.r=D.bzp.gp(0)
d3.aq(b5,b0)
b0=new A.ar(B.T,B.Q,B.V,B.W,B.U)
b0.r=D.Cc.gp(0)
b0.b=B.ab
b0.c=2
d3.aq(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.jQ(new A.es(b6,c3,c3,B.cN,c3,c3,c3,c3,c3,c3,D.fE0),B.a7,B.bW,new A.jk(1),c3,c3,c3,c3,B.bX,c3,B.cw)
b7.e5()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a2(d3,new A.r(b4-b1/2,a2-b0.gb9(b0)/2))
if(a7)b8=c4.r===D.aeR
else if(r===c4.w){b0=c4.r
b0=b0===D.Ym||b0===D.BK
b8=b0}else b8=!1
if(a7){b0=c4.ghe(0).gzy()
b9=(b0==null?c3:b0.c)===D.oO?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqB()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.BK
b0=c0?C.hHU(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.Ym?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.r(40,-110+Math.sin(g)*10)
else a7=c0?new A.r(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.SY(d3,new A.r(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.r(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bJP(d3,new A.r(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.i.F(w+r/7,1)
$.R()
t=new A.ar(B.T,B.Q,B.V,B.W,B.U)
t.r=D.bxn.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.Yl)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.i.F(w+r/5,1)
t=Math.sin(r+c8)
$.R()
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.BK&&c4.ax){b7=A.fs(c3,B.cw,c3,c3,c3,A.cR(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.cV,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,R.Ji,c3,c3),"BEEP BEEP!"),B.a7,B.bW,c3,B.dD,B.bX)
b7.e5()
b7.a2(d3,new A.r(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
ce2(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.btn,D.bmq,g)
o.toString
if(f){w=new A.aG($.R().r,B.aj,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.aZ(v-16,u))
t=u-36
s=u-56
w.E(new A.ch(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.ch(v+9,t,v+16,u))
w.E(new A.by())
t=A.L()
t.r=D.a04.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d57[r]
p=new A.ar(B.T,B.Q,B.V,B.W,B.U)
p.r=D.a04.gp(0)
p.c=4
p.d=B.bG
d.ah(new A.r(w,t),new A.r(v+q*24,s),p)
p=new A.ar(B.T,B.Q,B.V,B.W,B.U)
p.r=o.gp(0)
d.O(new A.r(v+q*26,u),10,p)}}else{w=e.a5(0,D.eyy)
$.R()
v=A.L()
v.r=D.bir.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bY(e.a5(0,D.eyz),16,60)
w=A.L()
w.r=o.gp(0)
d.c1(v,w)}},
bJP(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.Yl?0.045:0,a1=a2.c
J.br(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jq(0,a0)
for(w=0;w<2;++w){v=D.dxb[w]
u=d.ay&&d.r!==D.Yl&&v>0
J.br(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.R()
s=new A.ar(B.T,B.Q,B.V,B.W,B.U)
s.r=D.by9.gp(0)
a2.O(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.T,B.Q,B.V,B.W,B.U)
s.r=D.bq4.gp(0)
a2.O(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.T,B.Q,B.V,B.W,B.U)
q.r=B.bi.gp(0)
q.c=2
a2.ah(B.J,new A.r(s*9,t*9),q)}a1.restore()}p=A.r3(D.fj8,B.h_,B.h_,B.i4,B.hQ)
$.R()
t=A.L()
t.sam(A.jD(D.euF,B.a9Z,D.dmI,B.a5O,B.x,f))
a2.aq(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.T,B.Q,B.V,B.W,B.U)
s.r=D.dgC[B.o.F(o,4)].gp(0)
a2.aE(new A.a2(t,-26,t+10,-19),s)}n=d.r===D.BK&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a2(s,-66,q,-36)
J.br(a1.save())
a1.clipRRect(A.n_(A.bu(l,B.q3)),$.mD(),!0)
k=new A.ar(B.T,B.Q,B.V,B.W,B.U)
k.r=D.ZH.gp(0)
a2.aE(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.BK?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.SY(a2,new A.r(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aNW,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bu(l,B.q3)
i=new A.ar(B.T,B.Q,B.V,B.W,B.U)
i.r=D.alN.gp(0)
i.b=B.ab
i.c=2
a2.aq(j,i)}d=A.bu(D.VE,B.q3)
t=A.L()
t.r=D.ZH.gp(0)
a2.aq(d,t)
J.br(a1.save())
a1.clipRRect(A.n_(A.bu(D.VE,B.q3)),$.mD(),!0)
C.SY(a2,new A.r(D.VE.gbD().a,-10),0,0,0.7,-0.1,f,f,D.aNW,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bu(D.VE,B.q3)
d=A.L()
d.r=D.alN.gp(0)
d.b=B.ab
d.c=2
a2.aq(t,d)
d=A.L()
d.r=B.CB.gp(0)
a2.O(D.ewN,4,d)
d=A.L()
d.r=D.GL.gp(0)
a2.aE(D.fkh,d)
for(w=0;w<3;++w){v=D.dxd[w]
d=A.bu(new A.a2(v,-96,v+28,-79),B.jE)
t=new A.ar(B.T,B.Q,B.V,B.W,B.U)
t.r=D.H_.gp(0)
a2.aq(d,t)}a1.restore()},
aD(d){return!1}}
C.aCu.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aX(){this.b7()
this.b5()
this.bC()}}
C.bhO.prototype={}
C.aCw.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aX(){this.b7()
this.b5()
this.bC()}}
C.bhP.prototype={}
C.aCx.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aX(){this.b7()
this.b5()
this.bC()}}
C.bhQ.prototype={}
C.a76.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b4(w,w,w,new C.bkn(w),B.az),w)}}
C.bkn.prototype={
a2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dv2[B.o.F(n,6)]
k=$.R()
j=new A.ar(B.T,B.Q,B.V,B.W,B.U)
j.r=l.gp(0)
d.aE(new A.a2(m,0,m+v,u),j)
if(B.o.F(n,3)===0){j=A.a([],o)
i=new A.aG(k.r,B.aj,null,null,j)
k=m+r
j.push(new A.aZ(k,f))
i.ac()
h=new A.aq(m+p,s)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
k=new A.aq(k,q)
j.push(k)
h=i.f
if(h!=null)k.aj(h)
i.ac()
k=new A.aq(m+t,s)
j.push(k)
h=i.f
if(h!=null)k.aj(h)
i.ac()
k=new A.by()
j.push(k)
j=i.f
if(j!=null)k.aj(j)
i.ac()
k=new A.ar(B.T,B.Q,B.V,B.W,B.U)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aD(d){return!1}}
C.tI.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aH(w,w,w,w,B.QX,w,w,w,new C.bTy(d),w,w,w,w,w,w),A.E(A.c(this.c,w,1,B.a2,w,w,w,D.fBh,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c5(w,D.Zr,A.o(w,A.bm(!0,A.x(A.a([D.c8O,new A.D(D.bKD,A.A(u,B.l,w,B.e,B.h,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.baD,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.IG.prototype={
B(d){var w=null,v=this.d,u=C.aRW(v),t=C.iqa(v),s=B.c.j(0.08),r=A.m(18),q=A.K(B.cV.j(0.6),B.r,1.5),p=A.a([A.c("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fDM,w,w,w)],x.p)
if(this.e)p.push(D.eB_)
p.push(B.al)
p.push(A.c(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.he,w,w,w))
if(t!=null)p.push(new A.D(B.uZ,A.c(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.Fq,w,w,w),w))
return A.o(w,A.x(p,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.n(s,w,q,r,w,w,B.m),w,w,w,w,B.bH,w,w,w)}}
C.WK.prototype={
S(){return new C.bnb(A.S(x.N,x.S),B.o.F(Date.now(),1e5))},
d_M(d){return this.f.$1(d)},
ge3(){return this.d}}
C.bnb.prototype={
gTo(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a4()
this.PX()},
PX(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$PX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bUj(u.a.d),$async$PX)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dkK[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bUi(p,(o===$?u.d=q.c:o).a,r),$async$PX)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.l(new C.e4w(u,n))
return A.h(null,v)}})
return A.i($async$PX,v)},
uH(d){return this.cqS(d)},
cqS(d){var w=0,v=A.j(x.H),u=this,t
var $async$uH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a8(t,!1).cb(A.e9(new C.e4x(d),!1,null,x.H)),$async$uH)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.PX()
return A.h(null,v)}})
return A.i($async$uH,v)},
gb7J(){var w,v,u,t=C.Nj(this.gTo()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a38(d){return this.cya(d)},
cya(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a38=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].ak())
w=2
return A.b(u.a.d_M(r),$async$a38)
case 2:if(u.c!=null)u.l(new C.e4y(u,r))
return A.h(null,v)}})
return A.i($async$a38,v)},
Pg(d){return this.bSD(d)},
bSD(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Pg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hkZ(t.gTo())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.N3("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a8(s,!1).cb(A.e9(new C.e4u(q),!1,null,r)),$async$Pg)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bk(j,new C.e4v(p))
o=s.length
B.d.ca(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a38(A.cU(s,0,A.dy(2,"count",x.S),r).dq(0)),$async$Pg)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Pg,v)},
Yi(d,e){return this.bQc(0,e)},
bQc(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Yi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cg(null,null,!0,null,new C.e4t(e),o,null,!0,!0,x.y),$async$Yi)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hkZ(u.gTo()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a38(o),$async$Yi)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Yi,v)},
aaS(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e4q(this,j):h
o=o?0.55:1
w=A.ap(g,B.v,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.m(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.ab(0,B.H,g.j(0.35),B.cz,12)],x.V)
s=x.p
r=A.a([A.c(d,p,p,p,p,p,p,B.Ws,p,p,p),B.aY],s)
q=A.m(10)
r.push(A.o(p,A.c(i,p,p,p,p,p,p,D.fCa,p,p,p),B.f,p,p,new A.n(B.hZ,p,p,q,p,p,B.m),p,p,p,p,B.zu,p,p,p))
return A.ay(p,A.d0(A.o(p,A.x(A.a([A.A(r,B.l,p,B.e,B.h,0,p,p),B.aY,A.c(e,p,2,p,p,p,p,D.fK5,p,p,p),B.cT,A.c(f,p,3,B.a2,p,p,p,D.fCU,p,p,p)],s),B.B,p,B.e,B.h,0,B.p),B.f,p,p,new A.n(p,p,u,v,t,new A.a7(B.ay,B.aC,B.x,w,p,p),B.m),p,p,p,p,B.wT,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
XM(d,e,f,g,h,i){return this.aaS(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Nj(s.gTo()),p=s.gTo(),o=C.aRW(s.e),n=C.hkZ(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e4z(s),k=C.hLS(p,1).length,j=C.hM2(p,1).length,i=C.hMX(p,1).length,h=B.c.j(0.07),g=A.m(20),f=A.K(B.cV.j(0.5),B.r,1),e=A.c(o.b,r,r,r,r,r,r,B.acU,r,r,r),d=A.c(o.a,r,r,r,r,r,r,D.fHx,r,r,r),a0=q.b.length,a1=x.p
g=A.o(r,A.A(A.a([e,B.bb,A.E(A.x(A.a([d,A.c(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.WM,r,r,r)],a1),B.B,r,B.e,B.h,0,B.p),1),A.x(A.a([A.c(""+s.e,r,r,r,r,r,r,B.qe,r,r,r),D.h5I],a1),B.l,r,B.e,B.h,0,B.p)],a1),B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.n(h,r,f,g,r,r,B.m),r,r,r,r,B.bH,r,r,r)
f=s.XM("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aD,new C.e4A(s,p),l.$1("kahoot"))
h=s.XM("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lM,new C.e4B(s,p),l.$1("fire"))
a0=s.XM("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.wH,new C.e4C(s,p),l.$1("catch"))
j=j!==0?new C.e4F(s,p):r
j=s.aaS("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hW,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e4G(s,p):r
i=s.aaS("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lL,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.XM("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.ft,new C.e4H(s,p),l.$1("journey"))
k=k!==0?new C.e4I(s,p):r
k=A.a([g,B.aO,D.h9L,B.P,A.l2(0.98,A.a([f,h,a0,j,i,e,s.aaS("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.et,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.XM("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d7,new C.e4J(s,p),l.$1("school"))],a1),2,12,12,r,B.e2,!0),B.dc,A.A(A.a([D.bMs,A.c(""+n.length+" of 2",r,r,r,r,r,r,D.fCf,r,r,r)],a1),B.l,r,B.e,B.h,0,r,r),B.P],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.av(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fRd,B.bb,new A.bx(1,B.ba,A.x(A.a([A.c(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hq,r,r,r),A.c(""+v.gaqh(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.Fq,r,r,r)],a1),B.B,r,B.e,B.h,0,B.p),r)],a1)
if(v.gaqh(0).length>=2){f=D.lN.j(0.2)
t=new A.av(D.lN,1,B.r,-1)
g.push(A.ay(r,A.o(r,A.W(B.hc,D.lN,r,r,r,20),B.f,r,r,new A.n(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e4K(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cV.j(0.2)
t=new A.av(B.cV,1,B.r,-1)
f=A.ay(r,A.o(r,A.W(B.jj,B.cV,r,r,r,20),B.f,r,r,new A.n(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e4L(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fn.j(0.2)
t=new A.av(B.fn,1,B.r,-1)
B.d.u(g,A.a([B.bk,f,B.bk,A.ay(r,A.o(r,A.W(B.en,B.fn,r,r,r,20),B.f,r,r,new A.n(e,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e4M(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.o(r,new A.c3(B.aL,B.e,B.h,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.n(i,r,new A.bE(u,u,u,u),new A.bc(h,h,h,h),r,r,B.m),r,r,r,B.d4,B.bl,r,r,r))}if(s.a.e){j=m?new C.e4D(s):new C.e4E(a2)
i=A.m(18)
h=A.K(m?B.cV:B.aT,B.r,2)
g=m?B.cV.j(0.12):B.dq
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.ay(r,A.o(r,A.as(A.c(f,r,r,r,r,r,r,A.l(r,r,m?B.cV:B.aF,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.n(g,r,h,i,r,r,B.m),r,r,r,r,B.OR,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.haH)
k.push(B.aA)
k.push(D.auH)
return new C.tI("Family Games \xb7 "+p.b,A.cn(k,r,r,D.bGy,r,r,B.ah,!1),B.fd,r)}}
C.a0u.prototype={
a7(){return"_KPhase."+this.b}}
C.amM.prototype={
S(){return new C.amN(D.b2A)},
gd2(){return this.e}}
C.amN.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a3()},
fY(d){var w,v=this
v.l(new C.bTT(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.de(B.fU,new C.bTU(v))},
aQN(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.l(new C.bTJ(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.de(B.fm,new C.bTK(w))},
Lt(d){var w
if(this.d!==D.ael)return
w=this.at
if(w!=null)w.a1(0)
this.b7F(d)},
b7F(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.i.T(500+500*B.i.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.l(new C.bTP(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cy(B.tg,v.giC(v))},
cNh(d){var w=this
if(w.d!==D.XS)return
if(w.e+1>=w.a.w.length)w.Z4()
else{w.l(new C.bTQ(w))
w.aQN()}},
Z4(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Z4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bHX(p,u.w,t)
u.l(new C.bTM(u,s))
w=2
return A.b(C.C0(u.a.e,s),$async$Z4)
case 2:r=e
t=u.a
w=3
return A.b(C.C1(t.e,t.f,t.r,u.f),$async$Z4)
case 3:q=e
if(u.c!=null)u.l(new C.bTN(u,r,q))
return A.h(null,v)}})
return A.i($async$Z4,v)},
cO6(){var w,v,u,t,s=this,r=s.a,q=new A.e_()
q.cU(r.w.length*31+B.a.gY(r.f))
w=s.a.w.length*900
v=A.a([new A.b2("You",s.f,!0)],x.bd)
r=A.B(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cU(r,0,A.dy(4,"count",x.S),A.T(r).c),u=r.$ti,r=new A.bR(r,r.gJ(0),u.k("bR<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b2(t,B.i.T(w*(0.35+q.ai()*0.5)),!1))}B.d.b_(v,new C.bTR())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b2A===r){w=A.a([D.h66,B.S,A.c(s,t,t,t,t,t,t,B.WW,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.c(v,t,t,t,t,t,t,D.fCn,t,t,t))
w.push(B.aA)
w.push(A.c(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.Bu,B.K,t,t))
w.push(B.e8)
w.push(C.uB("Play",u.geY(u),B.cV,B.hc,D.fI))
w=A.as(new A.D(B.eF,A.x(w,B.l,t,B.e,B.M,0,B.p),t),t,t,t)
break A}if(D.b2B===r){w=A.as(A.c(""+u.z,t,t,t,t,t,t,D.fKD,t,t,t),t,t,t)
break A}if(D.ael===r||D.XS===r){w=u.ctw()
break A}if(D.b2C===r){w=u.ce3()
break A}w=t}return new C.tI(s,w,B.fd,t)},
ctw(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.XS,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.c(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aXx,j,j,j),B.aY],h)
f=k.r
if(f>=2)g.push(A.c("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.LB,j,j,j))
g.push(B.ar)
f=A.m(14)
g.push(A.o(j,A.c(""+k.f,j,j,j,j,j,j,B.iP,j,j,j),B.f,j,j,new A.n(B.bw,j,j,f,j,j,B.m),j,j,j,j,B.CW,j,j,j))
g=A.A(g,B.l,j,B.e,B.h,0,j,j)
f=A.m(6)
w=i?0:B.i.D(k.as/k.a.w[k.e].r,0,1)
f=A.bv(f,A.jE(B.bw,j,k.as<5?B.fn:B.cV,9,j,w,j),B.aq)
w=A.m(22)
v=A.K(B.cV,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.c(u,j,j,j,j,j,j,A.l(j,j,e?D.lN:B.nC,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.P,A.c(k.a.w[k.e].d,j,j,j,j,j,j,D.fBq,B.K,j,j)],h),B.l,j,B.e,B.M,0,B.p)}else u=A.c(k.a.w[k.e].a,j,j,j,j,j,j,D.fMO,B.K,j,j)
w=A.E(A.o(j,A.as(u,j,j,j),B.f,j,j,new A.n(D.qC,j,v,w,j,j,B.m),j,j,j,j,B.fb,j,j,1/0),3)
v=A.a([],h)
for(u=k.giC(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bTO(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aER[o]
m=new A.aP(16,16)
l=new A.av(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.c(D.aFa[o],j,j,j,j,j,j,D.fDm,j,j,j),B.ar,new A.bx(1,B.ba,A.c(r[t],j,3,B.a2,j,j,j,D.fCk,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(B.ata)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.c0q)
v.push(A.ay(j,new A.Td(A.o(j,new A.c3(B.aL,B.e,B.h,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.n(n,j,new A.bE(l,l,l,l),new A.bc(m,m,m,m),H.aDe,j,B.m),j,j,j,j,B.f6,j,j,j),p,B.b_,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.al,f,B.af,w,B.af,A.E(A.l2(1.45,v,2,10,10,j,B.e2,!1),4)],h)
if(i)h.push(D.eAe)
return new A.D(B.a1L,A.x(h,B.l,j,B.e,B.h,0,B.p),j)},
ce3(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cO6(),m=x.p,l=A.a([D.beE,A.as(A.c(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.qe,o,o,o),o,o,o),A.as(A.c(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Wx,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cV.j(0.25):B.dq
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.av(s?B.cV:B.bw,1,B.r,-1)
q=A.c(w<3?D.dmZ[w]:""+(w+1),o,o,o,o,o,o,B.m6,o,o,o)
s=s?B.u:B.O
l.push(A.o(o,new A.c3(B.aL,B.e,B.h,B.l,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.bx(1,B.ba,A.c(t.a,o,o,o,o,o,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.c(""+t.b,o,o,o,o,o,o,B.iP,o,o,o)],m),o),B.f,o,o,new A.n(v,o,new A.bE(r,r,r,r),new A.bc(u,u,u,u),o,o,B.m),o,o,o,B.cy,B.eW,o,o,o))}l.push(B.S)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.IG(m,v,p.CW,o))
l.push(B.aO)
l.push(A.as(C.uB("Back to the games",new C.bTL(p),B.cV,B.ki,D.fI),o,o,o))
return A.cn(l,o,o,B.fb,o,o,B.ah,!1)}}
C.Uo.prototype={
S(){return new C.amJ(A.S(x.de,x.er))}}
C.amJ.prototype={
gDn(){var w,v=this,u=v.d
if(u===$){w=C.hqZ(v.a.c.ak())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
glX(d){var w,v,u=this,t=u.e
if(t===$){w=u.gDn().b
v=$.ax()
u.e!==$&&A.bF()
t=u.e=new A.at(new A.bd(w,B.b8,B.aP),v)}return t},
ch9(d){return this.f.c_(0,d,new C.bTj(d))},
Z(){this.a4()
var w=this.gDn().c
if(w.length===0)w.push(C.hcq(null,0,20,""))},
t(){var w,v,u=this.glX(0)
u.V$=$.ax()
u.R$=0
for(u=this.f,u=new A.dq(u,u.r,u.e);u.C();)for(w=J.aT(u.d);w.C();){v=w.gP(w)
v.V$=$.ax()
v.R$=0}this.a3()},
cN7(){if(this.gDn().c.length>=12)return
this.l(new C.bTk(this))},
jG(d){var w,v,u=this,t=u.gDn()
t.b=B.a.i(u.glX(0).a.a)
w=t.gaqh(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.U(D.fum)
return}v=t.c
B.d.a8(v)
B.d.u(v,w)
v=u.c
v.toString
A.a8(v,!1).N(t)},
B(d){var w,v,u=this,t=null,s=new C.bTu(),r=x.p,q=A.a([A.bO(!1,D.fWh,t,t,!0,t,t,t,u.gbru(u),t,t)],r),p=A.a([D.hai,B.af,A.aN(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glX(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ae,t,t,t,t,t,t,t,t,t,t,t,B.he,!0,B.a7,t,B.ao,t,t,t,t),B.aA],r)
for(w=0;v=u.gDn().c.length,w<v;++w)B.d.u(p,A.a([new A.fh(new C.bTt(u,w,s),t)],r))
if(v<12)p.push(A.as(C.uB("\uff0b Add a question",u.gcN6(),B.aT,t,B.c),t,t,t))
return new C.tI("Make your game",A.cn(p,t,t,D.bGv,t,t,B.ah,!1),q,t)}}
C.arU.prototype={
S(){return new C.aG3(A.a([],x._))},
bv(){return this.r.$0()},
qu(){return this.w.$0()},
ge3(){return this.c}}
C.aG3.prototype={
Z(){var w,v
this.a4()
this.wE()
w=this.a
v=w.c
if(v.length!==0)C.a8Q(v,w.e,w.d.w)},
wu(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hnO(r,t.e,!1,s.w,new C.e6b(u),null,s),$async$wu)
case 2:w=3
return A.b(u.wE(),$async$wu)
case 3:return A.h(null,v)}})
return A.i($async$wu,v)},
a1l(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a1l=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hnO(r,t.e,!0,s.w,new C.e6a(u),null,s),$async$a1l)
case 2:w=3
return A.b(u.wE(),$async$a1l)
case 3:return A.h(null,v)}})
return A.i($async$a1l,v)},
wE(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wE=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bu(q.a.c),$async$wE)
case 7:p=e
if(q.c!=null)n=q.e||J.cK(p)
else n=!1
if(n)q.l(new C.e6d(q,p))
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
return A.b(C.HA(q.a.c).dc(0,B.qP),$async$wE)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.l(new C.e6e(q,o))
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
if(q.c!=null&&q.e)q.l(new C.e6f(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wE,v)},
PC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$PC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.U(D.ftX)
w=3
return A.b(C.HA(t.a.c),$async$PC)
case 3:r=e
w=4
return A.b(C.h1S(t.a.c,r),$async$PC)
case 4:q=e
w=5
return A.b(C.HA(t.a.c),$async$PC)
case 5:p=e
if(t.c==null){w=1
break}t.l(new C.e69(t,p))
o=t.c.L(s).f
s=A.c(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(null,null,null,q?B.dP:B.d3,null,B.t,null,s,null,B.lT,null,null,null,null,null,null,null,null,null,null))
t.a.qu()
case 1:return A.h(u,v)}})
return A.i($async$PC,v)},
IJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iyz(l),$async$IJ)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.i1a(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b2j(q,p.e,l,"Each family tree costs $"+B.i.ab(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$IJ)
case 4:if(!e||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
p=C.hI3(r)
o=Date.now()
n=t.a.c
m=new C.l1(l,r.toUpperCase(),p,!0,B.Z,D.Ef,new A.V(o,0,!1),0,n,D.v6,B.cj)
w=5
return A.b(C.a4v(n,m),$async$IJ)
case 5:w=6
return A.b(t.wE(),$async$IJ)
case 6:t.a.bv()
t.a.qu()
if(t.c==null){w=1
break}t.Ff(m)
case 1:return A.h(u,v)}})
return A.i($async$IJ,v)},
Ff(d){return this.cm6(d)},
cm6(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Ff=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bu(u.a.c),$async$Ff)
case 2:n=l.nA(k.dI(f,new C.e6c(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hG(m,new C.arO(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Ff)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a4v(u.a.c,o),$async$Ff)
case 6:case 5:w=7
return A.b(u.wE(),$async$Ff)
case 7:u.a.qu()
return A.h(null,v)}})
return A.i($async$Ff,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.O(d).ax.a===B.I,o=new C.um(p)
if(r.e)return A.as(A.n4(q,p?B.bu:B.bi,q,q,q,q,q,q,q,q),q,q,q)
if(J.cu(r.d)){w=p?B.ej:B.c
v=A.m(15)
u=A.aF(!1,B.a3,!0,q,A.aM(!1,q,!0,A.o(q,D.bYY,B.f,q,q,new A.n(B.aU.j(0.12),q,A.K(B.aU,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cK,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcl8(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.c("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.GB(A.o(q,A.x(A.a([u,B.aO,t,B.P,A.c("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bi,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.e8,A.bJ(D.hdz,q,r.gaU6(),A.bn(B.bQ,q,q,q,q,q,B.a28,q,new A.b9(A.m(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.h,0,B.p),B.f,q,q,new A.n(w,q,q,v,q,q,B.m),q,q,q,q,D.bJh,q,q,1/0),15,B.ag,1.05,D.ae8,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.c("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aY],v)
if(J.cK(r.d))w.push(A.aH(q,q,q,q,A.W(B.A9,B.aU,q,q,q,q),q,q,q,new C.e6h(r),q,q,q,q,"Sync family trees with database",q))
if(J.cK(r.d))w.push(A.aH(q,q,q,q,A.W(B.A5,B.aU,q,q,q,q),q,q,q,r.gahJ(),q,q,q,q,"Transfer / backup file",q))
w.push(A.d8(B.au5,q,D.fTz,r.gaU6(),A.bn(B.bQ,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.h,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.GB(r.cJf(J.t(r.d,s),o),14,B.ag,1,D.ae8,q))
B.d.u(w,u)}return A.x(A.a([p,B.aA,A.x(w,B.l,q,B.e,B.h,0,B.p)],v),B.B,q,B.e,B.h,0,B.p)},
cJf(d,e){var w=null,v=e.a,u=v?B.ej:B.c,t=A.m(14),s=A.K((v?B.el:B.bO).j(0.55),B.r,1),r=A.a([new A.ab(0,B.H,B.v.j(v?0.35:0.08),B.ez,10)],x.V),q=A.m(14),p=A.o(w,D.bY2,B.f,w,w,new A.n(B.aU.j(0.15),w,w,A.m(12),w,w,B.m),w,48,w,w,w,w,w,48),o=A.c(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.garh(),m=d.d?"":" \xb7 Public",l=d.y===D.l3?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bC,A.c(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bi,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.B,w,B.e,B.h,0,B.p),1)
return A.o(w,A.aF(!1,B.a3,!0,w,A.aM(!1,q,!0,new A.D(B.bH,A.A(A.a([p,B.bb,l,A.W(B.PK,v?B.bu:B.bi,w,w,w,w)],k),B.l,w,B.e,B.h,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e6g(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.n(u,w,s,t,r,w,B.m),w,w,w,w,w,w,w,1/0)}}
C.arO.prototype={
S(){return new C.aG0(A.a([],x._),A.aQ(x.N),A.bb5())},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aG0.prototype={
Z(){var w,v,u=this
u.a4()
u.d=u.a.w
u.ael()
w=u.a
v=w.c
if(v.length!==0)C.a8Q(v,w.e,w.d.w)},
t(){var w=this.w
w.V$=$.ax()
w.R$=0
this.a3()},
a4j(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a4j=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yF("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.d()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e5C(r),s,null,!0,!0,x.y),$async$a4j)
case 3:if(e!==!0||t.c==null){w=1
break}t.Ko()
t.l(new C.e5D(t,r))
w=4
return A.b(t.uD(),$async$a4j)
case 4:t.a.bv()
t.yF(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a4j,v)},
cyM(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.d()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.x1$.push(new C.e5x(w,f,d,e))},
aWq(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dt()
u.ed(w,v,0,1)
u.k7(q,q,1,1)
this.w.sp(0,u)},
bek(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eM(new Float64Array(16))
q.e8(r)
w=q.Ds()
v=B.i.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dt()
t.ed(r,u,0,1)
t.k7(v,v,1,1)
t.ed(-r,-u,0,1)
t.iZ(0,q)
s.sp(0,t)},
ael(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ael=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bu(u.a.c),$async$ael)
case 2:t=s.nA(r.dI(e,new C.e4Z(u)))
if(t!=null&&u.c!=null)u.l(new C.e5_(u,t))
return A.h(null,v)}})
return A.i($async$ael,v)},
yF(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
wu(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.d()
w=2
return A.b(C.hnO(o,t,!1,r,new C.e5g(u),q.a,s),$async$wu)
case 2:n=A
m=J
w=3
return A.b(C.HA(u.a.c),$async$wu)
case 3:p=n.nA(m.dI(e,new C.e5h(u)))
if(p!=null&&u.c!=null)u.l(new C.e5i(u,p))
return A.h(null,v)}})
return A.i($async$wu,v)},
Ko(){var w=this.e,v=this.d
v===$&&A.d()
w.push(v)
if(w.length>25)B.d.cH(w,0)},
uD(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.a4v(t,s),$async$uD)
case 2:return A.h(null,v)}})
return A.i($async$uD,v)},
a2Q(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a2Q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.d()
if(!C.uC(q,t.a.c)){t.yF("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.izM(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a2Q)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Ko()
t.l(new C.e5w(t,r))
w=4
return A.b(t.uD(),$async$a2Q)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2Q,v)},
b4k(){var w=this.c
w.toString
A.a8(w,!1).cb(A.e9(new C.e5d(this),!1,null,x.H))},
a1y(){return this.cm8()},
cm8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a1y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.d()
if(!C.uC(m,t.a.c)){t.yF("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.O(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e5t(),A.T(s).k("Y<1>")).gJ(0)
s=A.ew([0,2,3,4,5,6,8,r],x.S)
p=A.B(s,s.$ti.k("ci.E"))
B.d.ff(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.L,null,new C.e5u(n,t,new C.um(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a1y)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Ko()
t.l(new C.e5v(t,o))
w=6
return A.b(t.uD(),$async$a1y)
case 6:case 5:if(o.a&&t.c!=null)t.b4k()
case 1:return A.h(u,v)}})
return A.i($async$a1y,v)},
X5(d){return this.bF5(d)},
bF5(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
if(!C.uC(r,t.a.c)){t.yF("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e4N(t,d),r,null,!0,!0,x.P),$async$X5)
case 3:s=f
if(s==null){w=1
break}t.Ko()
t.l(new C.e4O(t,s))
w=4
return A.b(t.uD(),$async$X5)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X5,v)},
a4E(d){return this.cLv(d)},
cLv(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a4E=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.O(s)
t=u.c
t.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.e5F(u,d,new C.um(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a4E)
case 2:return A.h(null,v)}})
return A.i($async$a4E,v)},
cim(d){var w=this,v=w.d
v===$&&A.d()
if(C.uC(v,w.a.c))w.Ph(d)
else w.a4E(d)},
ake(d,e){return this.cCM(d,e)},
cCM(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ake=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.O(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.e5z(new C.um(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ake)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ake,v)},
IO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.d()
w=o.y===D.l3?3:5
break
case 3:w=6
return A.b(C.haD(t.a.c),$async$IO)
case 6:s=e
o=t.a
r=C.hvS(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ake(!s,!r),$async$IO)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aS0(o,t.a.c)){t.yF("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lp(o,"Cancel","Remove",q.y===D.l3?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$IO)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aRZ(t.a.c,t.d.a),$async$IO)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.j5(o,null)
case 1:return A.h(u,v)}})
return A.i($async$IO,v)},
abO(d){return this.bQt(d)},
bQt(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$abO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.d()
if(!C.uC(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aS(s,new C.e4P(p))){o=A.T(s)
p.a=A.nA(new A.cL(new A.Y(s,new C.e4Q(d),o.k("Y<1>")),new C.e4R(),o.k("cL<1,q>")))}q=p.a
if(q==null)q=d.d
t.Ko()
t.l(new C.e4S(t,s,d,q))
w=3
return A.b(t.uD(),$async$abO)
case 3:t.yF(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$abO,v)},
Ph(d){return this.bSH(d)},
bSH(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ph=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
w=!C.uC(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a4E(d),$async$Ph)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.e4W(t,d),r,null,!0,!0,x.P),$async$Ph)
case 6:s=f
if(s==null){w=1
break}t.Ko()
t.l(new C.e4X(t,s))
w=7
return A.b(t.uD(),$async$Ph)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ph,v)},
cJG(){var w=this,v=w.d
v===$&&A.d()
if(!C.uC(v,w.a.c))return
if(w.e.length===0)return
w.l(new C.e5E(w))
w.uD()},
a_9(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.d()
if(!C.aS0(n,t.a.c)){t.yF("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.O(n)
s=$.ax()
r=new A.at(B.ax,s)
q=t.d.e
p=A.bs(new A.N(q,t.gcgQ(),A.T(q).k("N<1,q>")).c0(0,new C.e58()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e59(t,new C.um(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$a_9)
case 3:o=e
r.V$=s
r.R$=0
if(o!==!0||t.c==null){w=1
break}t.Ko()
t.l(new C.e5a(t,p))
w=4
return A.b(t.uD(),$async$a_9)
case 4:t.yF("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$a_9,v)},
cgR(d){return B.a.i(d.toLowerCase())},
ckT(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.d()
u=C.uC(v,w)
t=r.d
s=C.ioH(t)
C.iyD(q,t.b,u,C.ioG(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.um(n),l=p.d
l===$&&A.d()
l=l.f
w=new A.Y(l,new C.e5M(),A.T(l).k("Y<1>")).gJ(0)
l=n?B.c6:B.hV
v=A.W(B.a3i,n?B.bu:B.bi,o,o,o,18)
u=x.p
v=A.a([new A.D(B.CX,A.aM(!1,o,!0,new A.D(B.hI,A.A(A.a([v,B.bk,A.c("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bi,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.M,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e5N(p,d),o,o,o,o,o,o,o),o),new A.D(B.nV,p.c2V(m),o)],u)
if(p.d.y===D.l3){t=B.tP.j(0.15)
s=A.m(12)
r=A.K(B.tP.j(0.45),B.r,1)
q=C.Hy(p.d,p.a.c)
v.push(new A.D(B.zn,A.o(o,A.A(A.a([D.c2A,B.ar,A.E(A.c("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.n(t,o,r,s,o,o,B.m),o,o,o,o,B.hw,o,o,1/0),o))}u=A.a([A.c("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,15,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aY],u)
if(C.uC(p.d,p.a.c)&&p.e.length!==0)u.push(new C.GN("Undo",B.pN,p.gcJF(),m,o,o))
u.push(new C.GN("Family Book",D.bSC,p.gckS(),m,B.uF,o))
u.push(new C.GN("Family games",B.o3,p.gcl3(),m,B.aD,o))
if(C.uC(p.d,p.a.c))u.push(new C.GN("Display settings",B.DN,p.gcm7(),m,B.b5,o))
u.push(new C.GN("Sync",B.A5,p.gahJ(),m,o,o))
t=p.d
if(t.y===D.l3||C.aS0(t,p.a.c)){t=p.d.y===D.l3?"Remove shared tree":"Delete tree"
u.push(new C.GN(t,B.en,p.gbQD(),m,B.fn,o))}if(C.uC(p.d,p.a.c))u.push(new C.GN("Add member",B.xg,new C.e5O(p),m,B.bQ,o))
v.push(new A.D(B.anP,A.A(u,B.l,o,B.e,B.h,0,o,o),o))
if(p.d.garh()===0){u=A.as(A.c("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bi,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.ce(new C.e5P(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.W(n?G.a3m:Q.PL,o,o,o,o,o)
v.push(A.as(A.hq(u,A.c(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e5Q(p),o),o,o,o))}return A.c5(o,l,A.bm(!0,A.x(v,B.B,o,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c2V(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.d()
w=A.m(22)
v=A.a([new A.ab(0,B.H,B.h4.j(0.35),B.dm,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.W(B.zY,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a3,!0,m,A.aM(!1,m,!0,A.o(m,D.c5W,B.f,m,m,new A.n(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cK,!0,m,m,m,m,m,m,m,m,m,m,m,n.gahJ(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.c(r.b,m,1,B.a2,m,m,m,D.fEp,m,m,m)
r=r.garh()
p=n.d.garh()===1?"member":"members"
o=x.p
p=A.a([s,B.bb,A.E(A.x(A.a([q,B.bC,A.c(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.B,m,B.e,B.h,0,B.p),1)],o)
if(C.uC(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.c2P,m,m,m,n.gcw4(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.h,0,m,m)
r=n.d.d
q=r?B.jR:B.ne
r=r?"Private":"Public"
r=A.E(n.axQ(q,"Privacy",r,n.a.d.w?n.gcIz():m),1)
q=A.E(n.axQ(B.xm,"Tree code",n.d.c,new C.e4Y(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.aa,q,B.aa,A.E(n.axQ(D.bUk,"Collaborators",p,n.gc7T()),1)],o),B.l,m,B.e,B.h,0,m,m)],o)
if(n.d.y===D.l3){s=B.c.j(0.15)
B.d.u(p,A.a([B.P,A.aF(!1,B.a3,!0,A.m(999),A.aM(!1,A.m(999),!0,new A.D(B.fW,A.A(A.a([A.W(B.o4,B.c,m,m,m,14),B.e5,A.c("View only",m,m,m,m,m,m,B.acC,m,m,m)],o),B.l,m,B.e,B.M,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.o(m,A.bv(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.HB,A.x(p,B.B,m,B.e,B.h,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.n(m,m,m,w,v,D.cah,B.m),m,m,m,m,m,m,m,1/0)},
axQ(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a3,!0,A.m(14),A.aM(!1,A.m(14),!0,new A.D(B.ap5,A.x(A.a([A.W(d,B.c,w,w,w,18),B.au,A.c(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.rw,A.c(f,w,1,B.a2,w,w,w,B.xX,w,w,w)],x.p),B.l,w,B.e,B.h,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bhS.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bL
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bhV(s,t),new A.au(w,v))],x.p)
r=r.gdM(r)
B.d.u(u,r.dP(r,new C.djz(this),x.l))
r=s.c
B.d.u(u,new A.N(r,new C.djA(this),A.T(r).k("N<1,w>")))
return new A.D(B.v2,new A.a5(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.L7.prototype={}
C.GR.prototype={}
C.bhU.prototype={
gbmU(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aLL.prototype={}
C.bhV.prototype={
bSi(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.R()
v=A.L()
v.r=B.bA.j(0.75).gp(0)
v.c=2
v.d=B.bG
d.ah(new A.r(n,w),new A.r(m,w),v)
u=(n+m)/2
t=new A.aG(q.r,B.aj,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.hY(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.hY(u+4.95,r,u+9.9,s,u,q))
t.E(new A.by())
q=A.L()
q.r=B.c.gp(0)
d.O(new A.r(u,w),9,q)
q=A.L()
q.r=B.bA.gp(0)
d.af(t,q)},
bSf(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.djU())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aS(a0,new C.djV(f))
t=new A.N(a0,new C.djW(f),A.T(a0).k("N<1,G>")).c0(0,new C.djX()).cC(0,1/0,B.pp)
w=f.a
d.ah(f,new A.r(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.r(o,v),p,e)
continue}l=J.lN(n)
k=Math.min(10,m/2)
m=$.R()
j=A.a([],r)
i=new A.aG(m.r,B.aj,null,null,j)
j.push(new A.aZ(w,v-k))
i.ac()
m=l*k
h=new A.ch(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.aj(h)
i.ac()
m=new A.ch(o,v,o,v+k)
j.push(m)
h=i.f
if(h!=null)m.aj(h)
i.ac()
o=new A.aq(o,p.b)
j.push(o)
m=i.f
if(m!=null)o.aj(m)
i.ac()
d.af(i,e)}},
a2(d,e){var w,v,u,t,s,r
$.R()
w=A.L()
w.r=B.bQ.j(0.75).gp(0)
w.c=2.2
w.b=B.ab
w.d=B.bG
w.e=B.dM
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bSf(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bSi(d,w,r.a,r.b)}},
aD(d){return d.b!==this.b}}
C.blI.prototype={
gce5(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aFr
switch(w.c.a){case 0:return D.d3H
case 1:return D.dgw
case 2:return D.dz7}},
gce8(){var w=this.c,v=C.hHg(w.w),u=C.hHg(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.O(d).ax.a===B.I,q=t.gce5(),p=t.c,o=A.bGx(p.f),n=t.gce8(),m=x.V,l=A.a([new A.ab(0,B.H,B.d.gal(q).j(0.35),B.cO,10)],m),k=r?B.aw:B.c,j=A.K(r?B.aw:B.c,B.r,2)
if(o!=null)w=A.tL(B.z,s,B.cp,B.bZ,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.o(B.z,A.c(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.n(s,s,s,s,s,new A.a7(B.a5,B.a9,B.x,w,s,s),B.m),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.o(s,A.o(s,A.i6(w,B.aq),B.f,s,s,new A.n(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.n(s,s,s,s,l,new A.a7(B.ay,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.Da,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.K(r?B.aw:B.c,B.r,1.5)
l.push(A.ao(s,A.o(s,A.c(""+k,s,s,s,s,s,s,D.fPi,s,s,s),B.f,s,s,new A.n(B.cd,s,w,j,s,s,B.m),s,s,s,s,D.bLg,s,s,s),s,s,s,-6,-4,s))}k=r?B.cu:B.c
j=A.m(8)
w=A.K(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ab(0,B.H,B.v.j(r?0.3:0.06),B.dQ,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.c(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cu,s,s,s,s,s,s,s,s,u,s,s,B.F,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.c(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bi,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.ay(s,new A.a5(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.au,A.o(s,A.x(p,B.l,s,B.e,B.M,0,B.p),B.f,s,D.b8N,new A.n(k,s,w,j,m,s,B.m),s,s,s,s,D.bLr,s,s,s)],v),B.l,s,B.e,B.h,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bgW.prototype={
a2(d,e){var w,v,u,t,s
$.R()
w=A.L()
v=this.b
u=v?B.c:D.blZ
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.O(new A.r(s,t),1,w)},
aD(d){return d.b!==this.b}}
C.bzP.prototype={
B(d){var w=this,v=null,u=new C.frs(w),t=w.c,s=t?B.cu:B.c,r=A.m(12),q=u.$3(B.i9,"Zoom in",w.d),p=A.o(v,v,B.f,t?B.bw:B.fy,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xi,"Zoom out",w.e)
return A.aF(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.o(v,v,B.f,t?B.bw:B.fy,v,v,v,1,v,v,v,v,v,22),u.$3(B.arx,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.M,0,B.p),B.f,s,4,v,B.dE,v,v,v,B.ai)}}
C.bp3.prototype={
B(d){var w=this,v=null,u=B.bQ.j(0.15),t=A.K(B.bQ,B.r,2),s=w.e,r=x.p
t=A.ay(v,A.o(v,A.x(A.a([A.W(s?G.a3m:Q.PL,B.bQ,v,v,v,22),A.c("+"+w.c,v,v,v,v,v,v,D.fLi,v,v,v)],r),B.l,v,B.b9,B.h,0,B.p),B.f,v,v,new A.n(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.al,A.c(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fJ3,B.K,v,v)],r)
if(s){t=A.a([B.al],r)
s=w.d
B.d.u(t,new A.N(s,new C.f1m(w),A.T(s).k("N<1,w>")))
B.d.u(u,t)}return new A.a5(84,v,A.x(u,B.l,v,B.e,B.h,0,B.p),v)}}
C.a0I.prototype={
S(){return new C.aEt()},
bv(){return this.Q.$0()},
ge3(){return this.w}}
C.aEt.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a4()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ax()
r.d!==$&&A.aR()
r.d=new A.at(new A.bd(t,B.b8,B.aP),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aR()
r.e=new A.at(new A.bd(t,B.b8,B.aP),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aR()
r.f=new A.at(new A.bd(t,B.b8,B.aP),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aR()
r.r=new A.at(new A.bd(t,B.b8,B.aP),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aR()
r.w=new A.at(new A.bd(t,B.b8,B.aP),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aR()
r.x=new A.at(new A.bd(t,B.b8,B.aP),s)
t=u?q:v.c
r.y=t==null?D.zB:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.iqb(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
u===$&&A.d()
w=u.V$=$.ax()
u.R$=0
u=v.e
u===$&&A.d()
u.V$=w
u.R$=0
u=v.f
u===$&&A.d()
u.V$=w
u.R$=0
u=v.r
u===$&&A.d()
u.V$=w
u.R$=0
u=v.w
u===$&&A.d()
u.V$=w
u.R$=0
u=v.x
u===$&&A.d()
u.V$=w
u.R$=0
v.a3()},
QN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$QN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hvS(p.y,p.w)
w=3
return A.b(A.lC(t.a.w,B.Kb),$async$QN)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b2j(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$QN)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.i1b(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(A.DT(78,800),$async$QN)
case 7:q=e
if(q!=null&&t.c!=null)t.l(new C.dzW(t,q))
case 1:return A.h(u,v)}})
return A.i($async$QN,v)},
ce7(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.d()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.i7(B.o.v(1000*Date.now()),w,D.zB,null,null,null,"","","","","",1,!1,0)
u=l.y
u===$&&A.d()
t=l.z
s=l.Q
r=l.as
q=l.e
q===$&&A.d()
q=B.a.i(q.a.a)
p=l.f
p===$&&A.d()
p=B.a.i(p.a.a)
o=l.r
o===$&&A.d()
o=B.a.i(o.a.a)
n=l.w
n===$&&A.d()
n=B.a.i(n.a.a)
m=l.x
m===$&&A.d()
m=B.a.i(m.a.a)
s=v.aGZ(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a8(k,!1).N(s)},
abp(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$abp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dzV(r),s,null,!0,!0,x.y),$async$abp)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a8(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$abp,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.O(d).ax.a===B.I,i=new C.um(j),h=l.a.e,g=A.T(h).k("Y<1>"),f=A.B(new A.Y(h,new C.dA4(l),g),g.k("M.E"))
h=j?B.ej:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bJD,A.c(w,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hd(A.aM(!1,k,!0,new A.D(B.lY,A.W(B.en,B.pC,k,k,k,17),k),B.cK,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbNb(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.k5:B.iG
t=A.bGx(l.as)
if(l.as==null)s=A.W(B.pJ,j?B.bu:B.bi,k,k,k,40)
else s=k
s=A.as(A.ay(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.hh(u,t,s,k,42),A.ao(0,A.hh(B.bQ,k,D.bX5,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gce4(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.d()
t=C.aEv(t,"Full name",B.mq,1,1,i,B.mH)
u=l.y
u===$&&A.d()
u=A.x(A.a([t,B.S,new C.blG(i,u,new C.dA5(l),k)],v),B.l,k,B.e,B.h,0,B.p)
t=A.c("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bi,k,k,k,k,k,k,k,k,11,k,k,B.F,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bCV],q)
o=l.a.e
B.d.u(p,new A.N(o,new C.dA6(),A.T(o).k("N<1,eS<q?>>")))
o=x.bw
n=A.c("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bi,k,k,k,k,k,k,k,k,11,k,k,B.F,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bCX],q)
B.d.u(q,new A.N(f,new C.dA8(),A.T(f).k("N<1,eS<q?>>")))
o=A.x(A.a([t,B.al,new C.aeU(i,r,"Who is their parent?",p,new C.dA9(l),k,o),B.aA,n,B.al,new C.aeU(i,m,"Who is their spouse / partner?",q,new C.dAa(l),k,o)],v),B.am,k,B.e,B.h,0,B.p)
q=l.f
q===$&&A.d()
q=C.aEv(q,"Birth date",D.aqJ,1,1,i,k)
m=l.r
m===$&&A.d()
m=C.aEv(m,"Birth place",B.a3C,1,1,i,k)
n=l.w
n===$&&A.d()
n=C.aEv(n,"Date of death (if deceased)",D.asO,1,1,i,k)
p=l.x
p===$&&A.d()
p=C.aEv(p,"Occupation",B.QM,1,1,i,k)
r=l.e
r===$&&A.d()
r=A.a([new A.an(B.z,k,B.ad,B.t,w,k),B.aA,s,B.bx,new C.aeV(i,"Identity",u,k),B.af,new C.aeV(i,"Family links",o,k),B.af,new C.aeV(i,"Life details",A.x(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aEv(r,"Notes",B.l6,5,3,i,k)],v),B.l,k,B.e,B.h,0,B.p),k),B.af,new C.aEu(i,"Child order",l.cmm(l.at),new C.dAb(l),new C.dAc(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hkN(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dAd(l):k
B.d.u(r,A.a([B.S,new C.aEu(i,"Visible in tree",u,w,new C.dAe(l),k)],v))}r.push(B.S)
w=j?B.k5:B.iG
u=A.m(14)
t=A.K(j?B.el:B.bO,B.r,1)
s=A.c("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.o(k,A.iX(k,B.bQ,k,B.ag,k,new C.dAf(l),k,A.c("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bi,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.n(w,k,t,u,k,k,B.m),k,k,k,k,G.ant,k,k,k))
r.push(B.bx)
w=j?B.aS:B.aw
j=j?B.el:B.bO
r.push(A.A(A.a([A.E(A.dU(B.ol,new C.dA7(d),A.dg(k,k,k,k,k,k,k,k,k,w,k,k,B.cm,k,new A.b9(A.m(14),B.a1),new A.av(j,1,B.r,-1),k,k,k,k)),1),B.bb,A.E(A.bJ(D.flx,k,l.gce6(),A.bn(B.aU,k,k,0,B.c,k,B.cm,k,new A.b9(A.m(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.h,0,k,k))
r.push(B.au)
return A.ek(B.fd,k,B.ag,h,new A.a5(420,k,A.cc(A.x(r,B.am,k,B.e,B.M,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.aoo,k,B.anF,new A.b9(g,B.a1),k,k)},
cmm(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aeV.prototype={
B(d){var w=null,v=this.c.a,u=A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bi,w,w,w,w,w,w,w,w,10,w,w,B.F,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.k5:B.iG,s=A.m(16)
return A.x(A.a([new A.D(B.a2c,u,w),A.o(w,this.e,B.f,w,w,new A.n(t,w,A.K(v?B.el:B.bO,B.r,1),s,w,w,B.m),w,w,w,w,B.bl,w,w,1/0)],x.p),B.B,w,B.e,B.h,0,B.p)}}
C.blH.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.ej:B.c,r=A.m(12),q=A.K((t?B.el:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aS:B.aw,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.o(u,A.aN(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bA(u,B.eT,u,B.tl,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bu:B.bi,u,u,u,u,u,u,u,u,u,u,u,B.cF,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.W(v.f,B.bQ,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ae,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a7,u,p,u,u,u,u),B.f,u,u,new A.n(s,u,q,r,u,u,B.m),u,u,u,u,u,u,u,u)}}
C.aeU.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.ej:B.c,s=A.m(12),r=A.K((u?B.el:B.bO).j(0.85),B.r,1),q=A.W(B.tw,u?B.bu:B.bi,v,v,v,v),p=A.l(v,v,u?B.aS:B.aw,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.ej:B.c
return A.o(v,new A.EE(A.a60(v,o,A.c(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bi,v,v,v,v,v,v,v,v,v,v,v,B.cF,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.n(t,v,r,s,v,v,B.m),v,v,v,v,B.l1,v,v,v)}}
C.blG.prototype={
B(d){var w=new C.dAg(this)
return A.A(A.a([w.$3(D.x2,"Male",B.Qw),B.aa,w.$3(D.oO,"Female",B.Qi),B.aa,w.$3(D.zB,"Other",B.o0)],x.p),B.l,null,B.e,B.h,0,null,null)}}
C.aEu.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.k5:B.iG,r=A.m(14),q=A.K(t?B.el:B.bO,B.r,1),p=A.c(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aS:B.aw,v,v,v,v,v,v,v,v,13,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.o(v,A.A(A.a([A.E(A.x(A.a([p,A.c(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bi,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.B,v,B.e,B.h,0,B.p),1),new C.aKN(u,B.xi,w.f,v),B.bk,new C.aKN(u,B.i9,w.r,v)],o),B.l,v,B.e,B.h,0,v,v),B.f,v,v,new A.n(s,v,q,r,v,v,B.m),v,v,v,v,B.ex,v,v,v)}}
C.aKN.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bQ.j(0.12)
else w=s.c.a?B.ej:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bQ
else t=(s.c.a?B.bu:B.bi).j(0.4)
return A.aF(!1,B.a3,!0,v,A.aM(!1,u,!0,new A.a5(36,36,A.W(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.aeW.prototype={
bWt(d){switch(d.a){case 0:return B.bQ
case 1:return B.bA
case 2:return B.cC}},
bWu(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b_W(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AX(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.ej:B.c
u=A.m(12)
t=A.K((w?B.el:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.W(f,B.bQ,p,p,p,18),B.ar],s))
q=A.c(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bi,p,p,p,p,p,p,p,p,9,p,p,B.F,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.au,A.c(o,p,p,p,p,p,p,A.l(p,p,w?B.aS:B.aw,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.B,p,B.e,B.h,0,B.p),1))
return A.o(p,A.A(r,B.B,p,B.e,B.h,0,p,p),B.f,p,p,new A.n(v,p,t,u,p,p,B.m),p,p,p,B.cy,B.zk,p,p,1/0)},
ag4(d,e){var w=null,v=this.e.a,u=A.c(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bi,w,w,w,w,w,w,w,w,10,w,w,B.F,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.k5:B.iG,s=A.m(16),r=A.K(v?B.el:B.bO,B.r,1)
return A.x(A.a([new A.D(B.a2c,u,w),A.o(w,A.x(e,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.n(t,w,r,s,w,w,B.m),w,w,w,w,B.bT,w,w,1/0)],x.p),B.B,w,B.e,B.h,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hMK(r,q),o=q.c,n=t.bWt(o),m=A.bGx(q.f),l=t.e.a,k=l?B.ej:B.c,j=A.m(22),i=q.b,h=A.c(i,s,s,s,s,s,s,A.l(s,s,l?B.aS:B.aw,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.l3?"Shared family tree \xb7 view only":"Member profile"
r=A.c(r,s,s,s,s,s,s,A.l(s,s,l?B.bu:B.bi,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.ab(0,B.H,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.as(A.o(s,A.hh(u,m,m==null?A.W(B.pJ,n,s,s,s,48):s,s,52),B.f,s,s,new A.n(s,s,w,s,v,s,B.a6),s,s,s,s,B.ey,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.K(n.j(0.45),B.r,1)
v=A.as(A.o(s,A.c(t.bWu(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.n(w,s,u,v,s,s,B.m),s,s,s,s,B.lW,s,s,s),s,s,s)
u=x.p
i=A.a([t.AX("Full name",i,B.mq)],u)
if(p>0)i.push(t.AX("Child order","#"+p,B.Qo))
r=A.a([h,B.au,r,B.aO,l,B.S,v,B.bx,t.ag4("Identity",i),B.af,t.ag4("Life details",A.a([t.AX("Birth date",q.w,D.aqJ),t.AX("Birth place",q.x,B.a3C),t.AX("Date of death",q.y,D.asO),t.AX("Occupation",q.z,B.QM)],u)),B.af,t.ag4("Family links",A.a([t.AX("1. Parent",t.b_W(q.d),B.I0),t.AX("2. Spouse",t.b_W(q.e),B.Ig)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.ag4("Notes",A.a([t.AX("Notes",q,B.l6)],u))],u))
r.push(B.bx)
r.push(A.bJ(B.LI,s,new C.dAq(d),A.bn(B.aU,s,s,s,s,s,B.cm,s,new A.b9(A.m(14),B.a1),s,s,s)))
return A.eI(s,k,new A.cO(B.me,A.cc(A.x(r,B.am,s,B.e,B.M,0,B.p),B.t,s,B.y,s,s,B.wX,s,s,B.ah),s),s,s,s,B.HE,s,B.d8,s,new A.b9(j,B.a1),s)}}
C.GN.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bi
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.v4,A.hd(A.aF(!1,B.a3,!0,A.m(8),A.aM(!1,A.m(8),!0,new A.a5(30,30,A.W(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u),u)}}
C.arR.prototype={
f1(){var w,v,u=this,t=x.N,s=A.S(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.T(w).k("N<1,aa<q,@>>")
w=A.B(new A.N(w,new C.cgT(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jp(w,new C.cgU(),t,x.fO))
return s}}
C.arS.prototype={
S(){return new C.aG2(A.a([],x.bF))},
gd2(){return this.c}}
C.aG2.prototype={
Z(){this.a4()
this.Kv()},
Kv(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Kv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cgX(t.a.c),$async$Kv)
case 3:r=e
w=4
return A.b(C.Bu(t.a.c),$async$Kv)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rs(q,new C.e5Z(t))
else s=!1
if(t.c==null){w=1
break}t.l(new C.e6_(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Kv,v)},
zf(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
Lk(d,e){return this.cMc(d,e)},
cMc(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Lk=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.l(new C.e63(q,e))
t=3
w=6
return A.b(d.$0(),$async$Lk)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.l(new C.e64(q))
$.eX.mK()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Lk,v)},
YT(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pH(r,s.c,s.e),$async$YT)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lk(new C.e5W(t),"Preparing download\u2026"),$async$YT)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YT,v)},
YX(d){return this.bUl(d)},
bUl(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pH(r,s.c,s.e),$async$YX)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Lk(new C.e5X(t,d),"Preparing file\u2026"),$async$YX)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YX,v)},
ai5(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ai5=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xX.cq().N5(B.TA,B.v7,!0),$async$ai5)
case 7:r=e
o=r
q=o==null?null:J.fl(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jN(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.ac(m)
$.am.$1("[family tree sync pick] file_picker: "+A.v(p))
w=6
break
case 3:w=2
break
case 6:u=A.HI()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ai5,v)},
Zz(d){return this.c3Q(d)},
c3Q(d){var w=0,v=A.j(x.H),u=this
var $async$Zz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Lk(new C.e5Y(u,d),"Restoring family trees\u2026"),$async$Zz)
case 2:return A.h(null,v)}})
return A.i($async$Zz,v)},
Zy(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Zy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ai5(),$async$Zy)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Zz(s),$async$Zy)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zy,v)},
a3H(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3H=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pH(r,s.c,s.e),$async$a3H)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lk(new C.e62(t),"Creating QR code\u2026"),$async$a3H)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3H,v)},
a3i(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3i=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DQ()){t.zf("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a8(s,!1).cb(A.e9(new C.e60(),!0,null,x.N)),$async$a3i)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Zz(r),$async$a3i)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a3i,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.O(d).ax.a===B.I,n=o?B.Cn:B.hV,m=o?D.alU:B.aS,l=o?B.aM:B.bO,k=o?B.aS:B.aw,j=new C.djY(n,m,l,k,o?B.bP:B.bi)
l=A.aH(p,p,p,p,A.W(B.eG,k,p,p,p,20),p,p,p,new C.e66(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eR(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.c(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.djw(!0,B.jB,B.aH,B.aH,q.r?p:q.gcCA(),j,s,"Show restore QR"),1),B.ar],u))}s=q.e
r=q.r?p:q.gcyG()
t.push(A.E(C.djw(!s,B.jC,B.b2,B.bj,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.h,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.djw(!1,B.hM,B.aU,B.bQ,q.r?p:q.gbUe(),j,"Photos & books included","Download all trees"),1),B.ar],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.djw(!1,B.A6,B.at,B.aQ,q.r?p:q.gc3N(),j,s,"Upload backup file"),1))
l=A.a([new C.bhT(v,l,p),B.lh,new C.aea(j,"QR restore",p),B.S,t,B.dc,new C.aea(j,"Backup files",p),B.S,A.A(r,B.l,p,B.e,B.h,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.lh,new C.aea(j,"One tree",p),B.S],u)
B.d.u(v,J.ba(q.d,new C.e67(q,j),x.l))
B.d.u(l,v)}l=A.a([A.cn(l,p,p,B.a24,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.K(B.aU.j(0.35),B.r,1)
s=A.a([new A.ab(0,B.H,B.v.j(o?0.3:0.1),B.dm,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.o(p,A.A(A.a([G.aVX,B.bb,A.E(A.c(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.h,0,p,p),B.f,p,p,new A.n(m,p,t,v,s,p,B.m),p,p,p,p,B.D2,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c5(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.djY.prototype={}
C.bhT.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ab(0,B.H,B.aU.j(0.32),B.kL,28)],x.V)
t=A.ao(p,A.W(B.vr,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.o(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ae,A.A(A.a([A.o(p,D.c5p,B.f,p,p,new A.n(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.m),p,56,p,p,p,p,p,56),B.pg,A.E(A.x(A.a([D.fUC,B.P,A.c(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.B,p,B.e,B.h,0,B.p),1)],q),B.B,p,B.e,B.h,0,p,p),p)],q),p),B.f,p,p,new A.n(p,p,p,v,u,D.cdF,B.m),p,p,p,p,p,p,p,p)}}
C.aea.prototype={
B(d){var w=null
return A.A(A.a([A.o(w,w,B.f,w,w,new A.n(B.aU,w,w,A.m(2),w,w,B.m),w,14,w,w,w,w,w,3),B.aa,A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.F,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)}}
C.bhR.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.ab(0,B.H,B.aH.j(0.1),B.cO,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aF(!1,B.a3,!0,q,A.aM(!1,o,!0,A.eE(A.d0(new A.D(B.a1J,A.x(A.a([A.o(q,A.W(r.d,t,q,q,q,22),B.f,q,q,new A.n(v,q,s,u,q,q,B.m),q,q,q,q,B.tp,q,q,q),B.af,A.c(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bC,A.c(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cF,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.B,q,B.e,B.h,0,B.p),q),w),q,new A.n(m.b,q,k,n,l,q,B.m),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bhW.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aU.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aF(!1,B.a3,!0,v,A.aM(!1,u,!0,A.eE(new A.D(B.eW,A.A(A.a([A.o(v,D.c4A,B.f,v,v,new A.n(q,v,A.K(B.aU.j(0.35),B.r,1),p,v,v,B.m),v,v,v,v,B.tp,v,v,v),B.bb,A.E(A.x(A.a([A.c(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.B,v,B.e,B.h,0,B.p),1),A.W(B.hM,o,v,v,v,20)],n),B.l,v,B.e,B.h,0,v,v),v),v,new A.n(s.b,v,r,t,v,v,B.m),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a11.prototype={
S(){return new C.aG1()},
gd2(){return this.c}}
C.aG1.prototype={
Z(){this.a4()
this.aaX()},
aaX(){var w=0,v=A.j(x.H),u=this,t
var $async$aaX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b4Z(u.a.c,B.EU),$async$aaX)
case 2:t=e
if(u.c!=null)u.l(new C.e5R(u,t))
return A.h(null,v)}})
return A.i($async$aaX,v)},
ajx(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ajx=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.l(new C.e5S(q))
t=4
p=A.hxE(q.a.d,B.EU)
if(p==null){n=A.bb("Could not read this QR code.")
throw A.X(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.au9(n.e,m,l,B.EU,p,n.f),$async$ajx)
case 7:if(q.c==null){r=[1]
w=5
break}q.l(new C.e5T(q))
q.c.L(x.q).f.U(D.fva)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ac(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.c(B.a.el(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.l(new C.e5U(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ajx,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.O(d).ax.a===B.I,o=p?B.nL:B.qD,n=p?B.iR:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eR(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.hac,q,q,q,1,q,!0)
w=A.m(24)
v=A.K(B.aU.j(0.35),B.r,1)
u=A.qk(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.c(l,q,q,q,q,q,q,A.l(q,q,B.aU,q,q,q,q,q,q,q,q,q,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.o(q,A.x(A.a([B.P,u,B.bx,t,B.P,A.c("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.b9,B.h,0,B.p),B.f,q,q,new A.n(n,q,v,w,q,q,B.m),q,q,q,q,B.ae,q,q,1/0),1)
v=r.a.e
v=A.c("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ac:B.bz,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcyo()
if(u)u=B.L9
else u=A.W(r.e===!0?B.hl:B.aqI,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a5(1/0,q,A.em(u,q,A.c(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cb,q,q,q),t,A.dg(q,q,q,q,q,q,q,q,q,B.aU,q,B.hp,q,q,q,new A.av(B.aU.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hv,A.c("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aF:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.S)
w.push(new A.a5(1/0,q,A.bJ(B.Bv,q,new C.e5V(d),A.bn(B.aU,q,q,q,q,B.hp,q,q,q,q,q,q)),q))
return A.c5(m,o,new A.D(B.ae,A.x(w,B.l,q,B.e,B.h,0,B.p),q),q,!1,!1,q,q)}}
C.a12.prototype={
S(){return new C.bnc(A.A2(B.z8,B.os,B.vy))}}
C.bnc.prototype={
t(){this.d.t()
this.a3()},
B(d){var w=null
return A.c5(A.eR(w,w,w,!0,!0,B.v,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h1U,w,w,w,1,w,!0),B.v,A.A1(this.d,B.bZ,new C.e68(this,d)),w,!1,!1,w,w)}}
C.b0P.prototype={
B(d){var w=null
return A.c(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.T3,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lY.prototype={}
C.a7S.prototype={
S(){return new C.bmR(null,null)}}
C.bmR.prototype={
Z(){var w=this,v=null
w.a4()
w.d=A.bp(v,B.tg,v,1,v,w)
w.e=A.bp(v,B.nP,v,1,v,w)
w.a.toString
w.d.cK(0)
w.e.cK(0)},
by(d){var w,v,u=this
u.bJ(d)
u.a.toString
w=u.d
w===$&&A.d()
v=w.r
if(!(v!=null&&v.a!=null))w.cK(0)
w=u.e
w===$&&A.d()
v=w.r
if(!(v!=null&&v.a!=null))w.cK(0)},
t(){var w=this.d
w===$&&A.d()
w.t()
w=this.e
w===$&&A.d()
w.t()
this.bAh()},
B(d){var w,v,u=this,t=B.d.dA(D.a7J,new C.dS2(u),new C.dS3())
u.a.toString
w=u.d
w===$&&A.d()
v=u.e
v===$&&A.d()
return A.cEO(A.c7(new A.he(A.a([w,v],x.dS)),new C.dS4(u,t),null),!0)}}
C.bmQ.prototype={
a2(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b4L(d,e)
break
case"house":p.mp(d,e,D.dlJ)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdj()
$.R()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.O(new A.r(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mv(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.BL(d,e,12)
p.yQ(d,e,B.lq,5,14)
break
case"grocery":p.cn7(d,e)
break
case"calculator":p.cmP(d,e)
break
case"lumber":p.cnf(d,e)
break
case"kitchen":p.cna(d,e)
break
case"landscape":p.mp(d,e,D.dmi)
s=new A.aG($.R().r,B.aj,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.ch(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.ch(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.by())
w=A.L()
w.r=B.et.j(0.85).gp(0)
d.af(s,w)
p.BL(d,e,8)
p.yQ(d,e,B.iH,4,18)
break
case"plumbing":p.cnp(d,e)
break
case"electrical":p.mp(d,e,D.dyh)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.R()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aE(new A.a2(0,0,0+e.a,0+e.b),u)
p.mv(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mv(d,e,B.oF.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.BL(d,e,10)
break
case"store":p.cnz(d,e)
break
case"paint_remodel":p.cnk(d,e)
break
case"roofing":p.cnr(d,e)
break
case"warehouse":p.cnG(d,e)
break
case"vehicles":p.cnE(d,e)
break
case"farm":p.cn1(d,e)
break
case"restaurant":p.cnq(d,e)
break
case"tools":p.cnC(d,e)
break
case"wallet":p.cnF(d,e)
break
case"concrete":p.cmV(d,e)
break
case"blueprint":p.cmN(d,e)
break
default:p.b4L(d,e)}},
mp(d,e,f){var w,v=new A.a2(0,0,0+e.a,0+e.b)
$.R()
w=A.L()
w.sam(new A.a7(B.ay,B.aC,B.x,f,null,null).aA(0,v))
d.aE(v,w)},
mv(d,e,f,g,h){var w,v,u,t=new A.r(e.a/2,e.b/2),s=e.gdj()/2-h
$.R()
w=A.L()
w.b=B.ab
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cQ(A.bX(t,s),u,u+0.1439896632895322-u,!1,w)}},
yQ(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdj()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.R()
r=new A.ar(B.T,B.Q,B.V,B.W,B.U)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.O(new A.r(q+t*o,p+s*o),3.5,r)}},
BL(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.i.F(t*0.17,0.9)
q=B.i.F(t*0.23,0.85)
$.R()
p=new A.ar(B.T,B.Q,B.V,B.W,B.U)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.O(new A.r(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b4L(d,e){var w,v=this
v.mp(d,e,D.dwu)
w=v.c
v.mv(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mv(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bSb(d,e,B.hY,w)
v.yQ(d,e,B.c.j(0.7),6,8)},
bSb(d,e,f,g){var w,v,u,t,s,r
$.R()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aE(new A.a2(16,r,t,r+3),w)}},
cn7(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mp(d,e,D.czx)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.ar(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.R()
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=D.djQ[B.o.F(t,4)].j(0.85).gp(0)
d.O(new A.r(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mv(d,e,B.c.j(0.35),w,16)
l.yQ(d,e,B.iH,5,12)},
cmP(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mp(d,e,D.czF)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdj()
$.R()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.O(new A.r(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fs(h,B.cw,h,h,h,h,B.a7,B.bW,h,B.dD,B.bX)
for(o=0;o<6;++o){n=v+o*0.9
r=D.do9[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb2(0,new A.es(r,h,h,B.cN,h,h,h,h,h,h,new A.F(!0,q,h,h,h,h,14+m*4,B.F,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a2(d,new A.r(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ar(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.czH[o]
l=B.kU.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb2(0,new A.es(m,h,h,B.cN,h,h,h,h,h,h,new A.F(!0,l,h,h,h,h,12+k*3,B.F,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a2(d,new A.r(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ar(o,3)*0.38)+Math.sin(n)*6))}i.mv(d,e,B.c.j(0.35),w*1.5,14)
i.mv(d,e,B.eE.j(0.55),-v*3.141592653589793*2,8)
i.mv(d,e,B.oB.j(0.4),r*2.8,22)
i.yQ(d,e,B.px,8,10)
i.BL(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.i.F(w+o*0.22,0.9)
$.R()
v=new A.ar(B.T,B.Q,B.V,B.W,B.U)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.r(12,j),new A.r(t,j),v)}},
cnf(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,H.aCx)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bu(new A.a2(20,r,u,r+10),B.ho)
$.R()
p=new A.ar(B.T,B.Q,B.V,B.W,B.U)
p.r=A.ap(B.h6,B.ov,(s+1)/2).gp(0)
d.aq(q,p)}o.mv(d,e,B.h6.j(0.35),w,15)
o.BL(d,e,8)},
cna(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mp(d,e,D.dkm)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.i.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.i.F(s*0.13,0.7)
$.R()
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.O(new A.r(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mv(d,e,B.bM.j(0.4),-w*3.141592653589793*2.2,11)
l.yQ(d,e,B.qr,4,14)},
cnp(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mp(d,e,D.d8_)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.i.F(s,0.12)
$.R()
o=new A.ar(B.T,B.Q,B.V,B.W,B.U)
o.b=B.ab
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.O(new A.r(w,u),q*(0.12+r*0.14+p),o)}n.yQ(d,e,B.pB,6,12)
n.mv(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cnz(d,e){var w,v,u,t,s,r,q,p=this
p.mp(d,e,D.cNv)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bu(new A.a2(r,14,r+u,22),B.jE)
$.R()
q=new A.ar(B.T,B.Q,B.V,B.W,B.U)
q.r=A.ap(B.fw,B.bM,(s+1)/2).gp(0)
d.aq(r,q)}p.mv(d,e,B.c.j(0.3),w,16)
p.BL(d,e,8)
p.yQ(d,e,B.wB,5,13)},
cnk(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.deE)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.i.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bu(new A.a2(r,q,r+8,q+(18+s*22)),B.iy)
$.R()
r=new A.ar(B.T,B.Q,B.V,B.W,B.U)
r.r=[B.iE,B.dA,B.bM,B.eC][t].j(0.85).gp(0)
d.aq(q,r)}this.mv(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cnr(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.dbT)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.i.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.R()
q=new A.ar(B.T,B.Q,B.V,B.W,B.U)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.r(u*(0.1+r),s),new A.r(u*(0.18+r),s+10),q)}this.yQ(d,e,B.cA,7,11)},
cnG(d,e){var w,v,u,t,s,r,q,p
this.mp(d,e,D.cQh)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bu(new A.a2(q,p,q+(t-s*8),p+16),B.ho)
$.R()
q=new A.ar(B.T,B.Q,B.V,B.W,B.U)
q.r=A.ap(B.cA,B.aS,(Math.sin(r)+1)/2).gp(0)
d.aq(p,q)}this.mv(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cnE(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.dCH)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.i.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bu(new A.a2(s,r,s+28,r+8),B.ho)
$.R()
q=new A.ar(B.T,B.Q,B.V,B.W,B.U)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.aq(r,q)}this.BL(d,e,6)},
cn1(d,e){var w,v,u,t,s,r,q,p
this.mp(d,e,D.diT)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.R()
s=A.L()
s.r=B.oF.j(0.75).gp(0)
d.O(new A.r(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ar(B.T,B.Q,B.V,B.W,B.U)
p.r=B.hW.j(0.85).gp(0)
p.c=3
d.ah(new A.r(q,v),new A.r(q+s*6,t),p)}this.mv(d,e,B.oF.j(0.35),w,14)},
cnq(d,e){var w,v,u,t,s,r,q=this
q.mp(d,e,D.dlx)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bY(new A.r(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.R()
r=new A.ar(B.T,B.Q,B.V,B.W,B.U)
r.r=B.c.j(0.22).gp(0)
d.c1(s,r)}q.yQ(d,e,B.qr,5,16)
q.BL(d,e,7)},
cnC(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,D.dzX)
w=o.c
v=w*3.141592653589793
o.mv(d,e,B.ov.j(0.55),v*3,10)
o.mv(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.R()
p=new A.ar(B.T,B.Q,B.V,B.W,B.U)
p.r=B.ov.j(0.8).gp(0)
d.O(new A.r(v+r*34,u+q*22),4,p)}},
cnF(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,D.dDq)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bu(new A.a2(q,p,q+36,p+22),B.jE)
$.R()
q=new A.ar(B.T,B.Q,B.V,B.W,B.U)
q.r=A.ap(B.iH,B.oF,r).gp(0)
d.aq(p,q)}o.BL(d,e,9)
o.mv(d,e,B.c.j(0.4),w*2.2,12)},
cmV(d,e){var w,v,u,t,s,r,q,p
this.mp(d,e,D.dr8)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bX(new A.r(v,u),34)
$.R()
s=A.L()
s.b=B.ab
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cQ(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ar(B.T,B.Q,B.V,B.W,B.U)
p.r=B.bO.j(0.85).gp(0)
d.O(new A.r(v+t*34,u+s*34),3,p)}},
cmN(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.dmE)
$.R()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.r(t,0),new A.r(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.r(0,s),new A.r(v,s),w)
r=this.c
q=u*B.i.F(r*0.85,1)
$.R()
u=A.L()
u.r=B.dA.j(0.45).gp(0)
d.aE(new A.a2(0,q,0+v,q+6),u)
this.mv(d,e,B.lq.j(0.45),-r*3.141592653589793*2,11)},
aD(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.auV.prototype={
a0X(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0X=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aSY(),$async$a0X)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.aaa(s),$async$a0X)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0X,v)},
ai6(d){return this.cpZ(d)},
cpZ(d){var w=0,v=A.j(x.H),u=this,t
var $async$ai6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iyN(d),$async$ai6)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ai6,v)},
B(d){var w,v,u=null,t=A.O(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.k5:B.iG
w=x.p
v=A.a([C.aTl(!0,B.rJ,1/0,B.r_,u,s,1/0)],w)
if(!r)v.push(new A.bP(new A.n(u,u,u,u,u,new A.a7(B.aX,B.b1,B.x,A.a([B.L,B.v.j(0.35)],x.O),u,u),B.m),B.bm,new A.bK(B.aX,u,u,new A.D(B.ti,A.c("Pick a theme or your own photo",u,u,u,u,u,u,A.l(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,B.aDw,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.d8(D.bYR,u,D.fQI,new C.cqy(this,d),A.bn(B.aU,u,u,u,B.c,u,B.jQ,u,u,u,u,B.cl)),1),B.aa,A.E(A.em(D.c6I,u,D.h55,this.gcgO(),A.dg(u,u,B.v.j(0.35),u,u,u,u,u,u,B.c,u,u,B.jQ,u,u,D.b7m,u,u,u,B.cl)),1)],w),B.l,u,B.e,B.h,0,u,u),u,u,8,8,u,u))
return new A.fH(1.7777777777777777,A.aF(!1,B.a3,!0,B.rJ,new A.an(B.a0,u,B.b4,B.t,v,u),B.aq,t,0,u,u,u,u,u,B.ai),u)}}
C.aOc.prototype={
aX(){this.b7()
this.b5()
this.dK()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdD())
w.ba$=null
w.a3()}}
C.aWi.prototype={}
C.aWh.prototype={}
C.aUj.prototype={}
C.a_F.prototype={
S(){return new C.aBc()}}
C.aBc.prototype={
Z(){var w,v,u=this
u.a4()
u.a.toString
w=new A.bd("",B.b8,B.aP)
v=$.ax()
u.d!==$&&A.aR()
u.d=new A.at(w,v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ax()
w.R$=0
this.a3()},
L8(){var w,v,u=this,t=u.d
t===$&&A.d()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.U(D.fvG)
return}t=u.c
t.toString
v=u.e
A.a8(t,!1).N(new C.aWi(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.O(d).ax.a===B.I,l=m?B.ej:B.c,k=A.m(20),j=A.o(n,D.c6n,B.f,n,n,new A.n(B.aU.j(0.15),n,n,A.m(12),n,n,B.m),n,44,n,n,n,n,n,44),i=A.c("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aS:B.aw,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bC,A.c("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bi,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.B,n,B.e,B.h,0,B.p),1)
j=A.A(A.a([j,B.bb,i,A.aH(n,n,n,n,A.W(B.cB,m?B.bu:B.bi,n,n,n,n),n,n,n,new C.db3(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.h,0,n,n)
i=A.c("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bi,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.c("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bi,n,n,n,n,n,n,n,n,11,n,n,B.cF,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hxU(new C.db4(o),o.e)
u=o.d
u===$&&A.d()
t=A.l(n,n,m?B.aS:B.aw,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.k5:B.iG
r=A.m(12)
q=A.m(12)
p=m?B.el:B.bO
t=A.aN(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bA(n,new A.b6(4,r,B.du),n,n,n,n,n,n,!0,new A.b6(4,q,new A.av(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.db5(o),n,!1,n,n,!1,n,!0,n,B.ae,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a7,n,B.Li,n,n,n,n)
u=m?B.aS:B.aw
m=m?B.el:B.bO
return A.eI(n,l,new A.cO(B.me,A.cc(A.x(A.a([j,B.aO,i,B.au,w,B.P,v,B.aO,t,B.bx,A.A(A.a([A.E(A.dU(B.dp,new C.db6(d),A.dg(n,n,n,n,n,n,n,n,n,u,n,n,B.cm,n,new A.b9(A.m(12),B.a1),new A.av(m,1,B.r,-1),n,n,n,n)),1),B.ar,A.E(A.bJ(D.h5l,n,o.ga42(),A.bn(B.aU,n,n,n,B.c,n,B.cm,n,new A.b9(A.m(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.h,0,n,n)],h),B.B,n,B.e,B.M,0,B.p),B.t,n,B.y,n,n,B.D4,n,n,B.ah),n),n,n,n,N.D5,n,B.d8,n,new A.b9(k,B.a1),n)}}
C.a_E.prototype={
S(){return new C.aBb()}}
C.aBb.prototype={
Z(){this.a4()
var w=$.ax()
this.d!==$&&A.aR()
this.d=new A.at(B.ax,w)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ax()
w.R$=0
this.a3()},
L8(){var w,v=this.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.U(D.fth)
return}v=this.c
v.toString
A.a8(v,!1).N(new C.aWh(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.O(d).ax.a===B.I,o=p?B.ej:B.c,n=A.m(20),m=A.o(q,D.c2G,B.f,q,q,new A.n(B.bQ.j(0.15),q,q,A.m(12),q,q,B.m),q,44,q,q,q,q,q,44),l=A.c("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bC,A.c("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bi,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.B,q,B.e,B.h,0,B.p),1)
m=A.A(A.a([m,B.bb,l,A.aH(q,q,q,q,A.W(B.cB,p?B.bu:B.bi,q,q,q,q),q,q,q,new C.db_(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.h,0,q,q)
l=B.aU.j(p?0.12:0.08)
w=A.m(12)
v=A.K(B.aU.j(0.25),B.r,1)
u=A.W(B.aqu,B.aU.j(0.9),q,q,q,18)
l=A.o(q,A.A(A.a([u,B.ar,A.E(A.c("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.h,0,q,q),B.f,q,q,new A.n(l,q,v,w,q,q,B.m),q,q,q,q,B.bH,q,q,1/0)
w=this.d
w===$&&A.d()
v=A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.k5:B.iG
t=A.m(12)
s=A.m(12)
r=p?B.el:B.bO
v=A.aN(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bA(q,new A.b6(4,t,B.du),q,q,q,q,q,q,!0,new A.b6(4,s,new A.av(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.db0(this),q,!1,q,q,!1,q,!0,q,B.ae,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a7,q,B.li,q,q,q,q)
w=p?B.aS:B.aw
p=p?B.el:B.bO
return A.eI(q,o,new A.cO(B.me,A.cc(A.x(A.a([m,B.aO,l,B.aA,v,B.bx,A.A(A.a([A.E(A.dU(B.dp,new C.db1(d),A.dg(q,q,q,q,q,q,q,q,q,w,q,q,B.cm,q,new A.b9(A.m(12),B.a1),new A.av(p,1,B.r,-1),q,q,q,q)),1),B.ar,A.E(A.bJ(D.hcv,q,this.ga42(),A.bn(B.bQ,q,q,q,B.c,q,B.cm,q,new A.b9(A.m(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.h,0,q,q)],k),B.B,q,B.e,B.M,0,B.p),B.t,q,B.y,q,q,B.D4,q,q,B.ah),q),q,q,q,N.D5,q,B.d8,q,new A.b9(n,B.a1),q)}}
C.a_9.prototype={
S(){return new C.azT()}}
C.azT.prototype={
Z(){var w,v=this
v.a4()
w=$.ax()
v.d!==$&&A.aR()
v.d=new A.at(B.ax,w)
v.e!==$&&A.aR()
v.e=new A.at(new A.bd("1",B.b8,B.aP),w)
v.f!==$&&A.aR()
v.f=new A.at(B.ax,w)
v.r!==$&&A.aR()
v.r=new A.at(B.ax,w)},
t(){var w,v=this,u=v.d
u===$&&A.d()
w=u.V$=$.ax()
u.R$=0
u=v.e
u===$&&A.d()
u.V$=w
u.R$=0
u=v.f
u===$&&A.d()
u.V$=w
u.R$=0
u=v.r
u===$&&A.d()
u.V$=w
u.R$=0
v.a3()},
gKq(){var w,v=this.e
v===$&&A.d()
w=A.cA(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
galh(){var w=this.f
w===$&&A.d()
w=A.cA(B.a.i(w.a.a))
return w==null?0:w},
gb7A(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.d()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aRF(d){var w,v=B.i.D(this.gKq()+d,0.25,999999),u=B.i.fM(v),t=this.e
t===$&&A.d()
if(v===u)u=B.o.v(B.i.M(v))
else{u=B.i.ab(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb2(0,u)
this.l(new C.cIV())},
aAF(d,e,f,g){var w=null,v=g!=null?A.W(g,B.aU,w,w,w,20):w,u=d.a,t=u?B.k5:B.iG,s=A.m(14),r=A.m(14)
u=u?B.el:B.bO
return A.bA(w,new A.b6(4,s,B.du),w,B.bH,w,w,w,w,!0,new A.b6(4,r,new A.av(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.m(14),B.afF),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cgP(d,e,f){return this.aAF(d,e,f,null)},
L8(){var w,v,u,t,s=this,r=s.d
r===$&&A.d()
w=B.a.i(r.a.a)
if(s.galh()<=0){s.c.L(x.q).f.U(D.fxA)
return}r=s.c
r.toString
v=s.gKq()
u=s.galh()
t=s.gb7A()
A.a8(r,!1).N(new C.aUj(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.um(n),l=n?B.ej:B.c,k=A.m(24),j=x.O,i=A.a([B.aU.j(0.22),B.bQ.j(0.14)],j),h=A.m(14)
i=A.o(o,D.bWL,B.f,o,o,new A.n(o,o,A.K(B.aU.j(0.35),B.r,1),h,o,new A.a7(B.a5,B.a9,B.x,i,o,o),B.m),o,48,o,o,o,o,o,48)
h=A.c("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bC,A.c("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bi,o,o,o,o,o,o,o,o,12,o,o,B.cF,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.h,0,B.p),1)
i=A.A(A.a([i,B.bb,h,A.aH(o,o,o,o,A.W(B.cB,n?B.bu:B.bi,o,o,o,o),o,o,o,new C.cJ0(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.h,0,o,o)
h=p.d
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.aAF(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Qu),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.Li,o,o,o,o)
h=A.c("Units",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bi,o,o,o,o,o,o,o,o,12,o,o,B.F,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.k5:B.iG
t=A.m(14)
s=A.K(n?B.el:B.bO,B.r,1)
r=A.aH(o,o,o,o,A.W(B.xi,n?B.aS:B.aw,o,o,o,20),o,o,o,new C.cJ1(p),o,o,o,o,o,B.cl)
q=p.e
q===$&&A.d()
q=A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c8g,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ef,o,o,o,1,o,o,!1,"\u2022",o,new C.cJ2(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.o(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aH(o,o,o,o,A.W(B.i9,n?B.aS:B.aw,o,o,o,20),o,o,o,new C.cJ3(p),o,o,o,o,o,B.cl)],w),B.l,o,B.e,B.M,0,o,o),B.f,o,o,new A.n(u,o,s,t,o,o,B.m),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.d()
s=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.ar,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.aAF(m,"Amount","0.00",B.hL),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ef,o,o,o,1,o,o,!1,"\u2022",o,new C.cJ4(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a7,o,B.ao,o,o,o,o),1)],w),B.B,o,B.e,B.h,0,o,o)
t=x.gv
u=A.B(new A.N(D.dfc,new C.cJ5(p,m),t),t.k("ak.E"))
i=A.a([i,B.bx,v,B.aA,h,B.P,s,B.af,A.bZ(B.bI,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.S,A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.cgP(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cJ6(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.li,o,o,o,o)],w))}i.push(B.aO)
h=B.aU.j(n?0.18:0.1)
j=A.a([h,B.bQ.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.K(B.aU.j(0.35),B.r,1)
u=A.c("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bi,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gKq()===B.i.fM(p.gKq())?B.i.M(p.gKq()):p.gKq()
s=p.gb7A()
r=A.Bw(p.galh())
i.push(A.o(o,A.A(A.a([A.E(A.x(A.a([u,B.au,A.c(A.v(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bi,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.h,0,B.p),1),C.bHn(p.gKq()*p.galh(),B.b5,!1,B.u)],w),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.n(o,o,v,h,o,new A.a7(B.a5,B.a9,B.x,j,o,o),B.m),o,o,o,o,B.jy,o,o,o))
i.push(B.bx)
j=A.m(14)
h=n?B.el:B.bO
h=A.dg(o,o,o,o,o,o,o,o,o,o,o,o,B.cm,o,new A.b9(j,B.a1),new A.av(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dU(A.c("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cJ7(d),h),1),B.ar,A.E(A.d8(D.atY,o,D.h8n,p.ga42(),A.bn(B.aU,o,o,0,B.c,o,B.cm,o,new A.b9(A.m(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.h,0,o,o))
return A.eI(o,l,new A.cO(B.MI,A.cc(A.x(i,B.am,o,B.e,B.M,0,B.p),B.t,o,B.y,o,o,X.tn,o,o,B.ah),o),o,o,o,B.P3,o,B.d8,o,new A.b9(k,B.a1),o)}}
C.a2Q.prototype={
S(){return new C.bzH()}}
C.bzH.prototype={
Z(){var w,v,u=this
u.a4()
w=u.a.e
v=$.ax()
u.d!==$&&A.aR()
u.d=new A.at(new A.bd(w,B.b8,B.aP),v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ax()
w.R$=0
this.a3()},
B(d){var w,v,u,t=this,s=null,r=A.O(d).ax.a===B.I,q=r?B.ej:B.c,p=A.m(20),o=t.a.c
o=A.c(o,s,s,s,s,s,s,A.l(s,s,r?B.aS:B.aw,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.d()
v=A.l(s,s,r?B.aS:B.aw,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.k5:B.iG
v=A.aN(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bA(s,new A.b6(4,A.m(12),B.du),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fqY(t,d),s,!1,s,s,!1,s,!0,s,B.ae,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a7,s,B.ao,s,s,s,s)
u=A.E(A.dU(B.dp,new C.fqZ(d),s),1)
r=A.bn(B.bQ,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eI(s,q,new A.D(B.D4,A.x(A.a([o,B.aA,v,B.aO,A.A(A.a([u,B.ar,A.E(A.bJ(A.c(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fr_(t,d),r),1)],w),B.l,s,B.e,B.h,0,s,s)],w),B.l,s,B.e,B.M,0,B.p),s),s,s,s,s,s,B.d8,s,new A.b9(p,B.a1),s)}}
C.ada.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.GB.prototype={
S(){return new C.bzF(null,null)}}
C.bzF.prototype={
Z(){var w,v=this
v.a4()
w=A.bp(null,D.bDt,null,1,null,v)
w.cK(0)
v.d!==$&&A.aR()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bCD()},
gbEe(){switch(this.a.r.a){case 1:return A.a([B.aU,B.bQ,B.b5],x.O)
case 2:return A.a([B.bv,B.aU,B.b5],x.O)
case 3:return A.a([B.aH,B.cd,B.jM],x.O)
case 4:return A.a([B.fS,B.bQ,B.fx],x.O)
case 0:return A.a([B.aU,B.bQ,B.b5],x.O)}},
B(d){var w=A.O(d),v=this.d
v===$&&A.d()
return new A.e6(A.c7(v,new C.fqW(this,new C.um(w.ax.a===B.I)),null),null)}}
C.azM.prototype={
S(){return new C.bzG(null,null)}}
C.bzG.prototype={
Z(){var w,v=this
v.a4()
w=A.bp(null,B.nQ,null,1,null,v)
w.cK(0)
v.d!==$&&A.aR()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bCE()},
B(d){var w=this.d
w===$&&A.d()
return A.c7(w,new C.fqX(this),null)}}
C.bzE.prototype={
a2(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bu(new A.a2(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aG($.R().r,B.aj,null,null,A.a([],x.v))
u.E(new A.jb(v))
w=A.L()
w.b=B.ab
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aq(v,w)
w=A.L()
w.b=B.ab
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.zI(u)
t=A.a([],x.U)
w=new A.uW(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bj(A.jL(y.B));--r
q=new A.BY(w,r)
w.jO()
r=t[r].b
r===$&&A.d()
r=r.a.length()
p.aVh(d,q,r,o,0,0.2,4.2,0.92)
p.aVh(d,q,r,s,0.52,0.11,3.2,0.58)}},
aVh(d,e,f,g,h,i,j,k){var w,v,u,t=B.i.F(g+h,1)*f,s=A.hVc(e.a.a,e,t,t+f*i,!0),r=A.aig(s.gle().a.getBounds())
$.R()
w=A.L()
w.b=B.ab
w.c=j
w.d=B.bG
w.f=!0
v=this.f
u=k*this.e
w.sam(new A.a7(B.a5,B.a9,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Jb,null).aA(0,r))
d.af(s,w)},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.aQl.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aX(){this.b7()
this.b5()
this.bC()}}
C.aQm.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aX(){this.b7()
this.b5()
this.bC()}}
C.um.prototype={}
C.auU.prototype={
S(){return new C.aHB()},
ge3(){return this.c}}
C.aHB.prototype={
Z(){var w=this
w.a4()
w.d=w.a.d
w.aiY()},
t(){var w=this.a.c,v=this.d
v===$&&A.d()
C.Mq(w,v)
this.a3()},
aiY(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aiY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bFM(t.c,t.d.a),$async$aiY)
case 2:s=e
if(s!=null&&u.c!=null)u.l(new C.eZw(u,s))
return A.h(null,v)}})
return A.i($async$aiY,v)},
Rg(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Rg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.l(new C.eZn(u))
t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.Mq(t,s),$async$Rg)
case 2:if(u.c!=null)u.l(new C.eZo(u))
return A.h(null,v)}})
return A.i($async$Rg,v)},
RO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$RO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.O(p)
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.eZu(t,new C.um(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$RO)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.d()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.aaa(q),$async$RO)
case 6:case 5:t.l(new C.eZv(t,r))
w=7
return A.b(t.Rg(),$async$RO)
case 7:case 1:return A.h(u,v)}})
return A.i($async$RO,v)},
X_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iyy(r),$async$X_)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.eZi(t,new C.rx(B.o.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Rg(),$async$X_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X_,v)},
clX(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.d()
C.hMG(t,new C.eZm(u),w,v)},
acL(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.o(w,w,B.f,w,w,new A.n(w,w,new A.bE(new A.av(v,2.5,B.r,-1),B.a1,B.a1,new A.av(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b78,w,w,B.m),w,22,w,w,w,w,w,22)},
abN(d){return this.bQq(d)},
bQq(d){var w=0,v=A.j(x.H),u=this
var $async$abN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.l(new C.eZl(u,d))
w=2
return A.b(u.Rg(),$async$abN)
case 2:return A.h(null,v)}})
return A.i($async$abN,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.O(a2).ax.a===B.I,e=f?B.c6:B.hV,d=A.m(8),a0=A.W(K.a3j,f?B.bu:B.bi,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.D(B.HK,A.A(A.a([a0,B.bk,A.c("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bi,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.M,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eZx(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.d()
d=d.c
if(d!=null&&B.a.X(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b4,B.t,A.a([A.bv(A.m(22),C.aTl(!0,A.m(22),1/0,B.r_,g,d,1/0),B.aq),A.ao(10,A.d8(D.c0z,g,D.haL,h.gb5v(),A.bn(B.v.j(0.45),g,g,g,B.c,g,B.hk,g,new A.b9(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ab(0,B.H,B.aU.j(f?0.5:0.38),B.eS,22),new A.ab(-4,B.H,B.bQ.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ab(-2,B.H,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.o(g,A.o(g,A.bv(s,new A.an(B.a0,g,B.b4,B.t,A.a([C.aTl(!0,A.m(16),1/0,B.PW,g,r.c,1/0),new A.bP(new A.n(g,g,g,g,g,new A.a7(B.aX,B.b1,B.x,A.a([B.c.j(0.06),B.L,B.v.j(0.22)],x.O),g,g),B.m),B.bm,g,g),A.ao(g,h.acL(!0),g,g,8,g,8,g),A.ao(g,A.cFy(h.acL(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cFy(h.acL(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cFy(h.acL(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.d8(D.bXn,g,D.h43,h.gb5v(),A.bn(B.v.j(0.45),g,g,g,B.c,g,B.hk,g,new A.b9(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.n(g,g,t,u,w,g,B.m),g,g,g,g,g,g,g,g),B.f,g,g,new A.n(g,g,g,d,v,D.c9Y,B.m),g,g,g,g,B.lY,g,g,g)
d=v}w=h.d
w=A.c(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.bi6,B.oz,B.hu],u):A.a([B.b5,B.aU,B.bQ],u)
t=x.V
s=A.a([new A.ab(0,B.H,B.aU.j(f?0.45:0.35),B.eS,24)],t)
r=A.m(22)
p=A.ao(g,A.W(B.jz,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.o(g,A.c(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.F,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.n(o,g,m,n,g,g,B.m),g,g,g,g,B.hj,g,g,g)],a1),B.l,g,B.e,B.h,0,g,g),B.aA,A.c("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.F,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.al,C.bHn(h.d.gxO(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.P,A.c("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cF,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.B,g,B.e,B.h,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.K(B.hh.j(0.75),B.r,1.6)
t=A.a([new A.ab(0,B.H,B.aH.j(0.28),B.cO,14)],t)
j=B.aH.j(0.22)
i=A.m(10)
u=A.o(g,A.bv(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bIp,A.A(A.a([o,B.ar,A.aF(!1,B.a3,!0,g,A.aM(!1,n,!0,A.eE(new A.D(L.wV,A.x(A.a([A.o(g,D.atx,B.f,g,g,new A.n(j,g,A.K(B.aH.j(0.5),B.r,1),i,g,g,B.m),g,g,g,g,B.cr,g,g,g),B.fK,D.fTB],a1),B.l,g,B.e,B.M,0,B.p),g),g,new A.n(l,g,k,m,t,g,B.m),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gclW(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.l,g,B.e,B.h,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.n(g,g,g,v,s,new A.a7(B.ay,B.aC,B.x,u,g,g),B.m),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fH(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bx,A.A(A.a([A.c("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,16,g,g,B.F,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.aY,A.d8(B.a5c,g,D.fRo,h.gbEJ(),A.bn(B.aU,g,g,g,B.c,g,B.hw,g,new A.b9(A.m(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.h,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.ej:B.c
v=A.m(14)
u=A.K(f?B.el:B.bO,B.r,1)
t=A.W(B.a3F,f?B.bu:B.bi,g,g,g,48)
s=A.c("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.o(g,A.x(A.a([t,B.S,s,B.al,A.c("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bi,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.h,0,B.p),B.f,g,g,new A.n(w,g,u,v,g,g,B.m),g,g,g,g,B.qW,g,g,1/0))}else B.d.u(d,new A.N(w,new C.eZy(h,new C.um(f)),A.T(w).k("N<1,w>")))
if(h.e)d.push(new A.D(B.ze,A.as(A.n4(g,f?B.bu:B.bi,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c5(g,e,A.bm(!0,A.x(A.a([new A.D(B.CX,a0,g),A.E(A.cc(A.x(d,B.B,g,B.e,B.h,0,B.p),B.t,g,B.y,g,g,B.zr,g,g,B.ah),1)],a1),B.B,g,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bIs(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.ej:B.c,p=A.m(16),o=A.a([new A.ab(0,B.H,B.v.j(r?0.35:0.08),B.cO,12)],x.V),n=A.m(16),m=A.o(u,u,B.f,u,u,D.b9T,u,u,u,u,u,u,u,5),l=B.aU.j(r?0.22:0.12),k=A.m(12)
l=A.o(u,A.W(s?B.is:B.fY,B.b5,u,u,u,20),B.f,u,u,new A.n(l,u,u,k,u,u,B.m),u,40,u,u,u,u,u,40)
if(s)t=B.bL
else{k=x.p
t=A.a([A.c(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aS:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.F,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd1T()
v=A.Bw(d.d)
B.d.u(t,A.a([B.au,A.c(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bu:B.bi,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.B,u,B.b9,B.M,0,B.p)}t=A.E(t,1)
k=A.a([B.aU.j(0.14),B.bQ.j(0.1)],x.O)
w=A.m(12)
k=A.o(u,C.bHn(d.c*d.d,B.b5,!1,B.u),B.f,u,u,new A.n(u,u,u,w,u,new A.a7(B.a5,B.a9,B.x,k,u,u),B.m),u,u,u,u,B.hk,u,u,u)
w=x.p
return A.o(u,A.bv(n,new A.F2(A.A(A.a([m,A.E(new A.D(B.anm,A.A(A.a([l,B.bb,t,B.aa,k,A.aH(u,u,u,u,A.W(B.cB,(r?B.bu:B.bi).j(0.75),u,u,u,20),u,u,u,new C.eZj(this,d),u,u,u,u,u,B.cl)],w),B.l,u,B.e,B.h,0,u,u),u),1)],w),B.am,u,B.e,B.h,0,u,u),u),B.aq),B.f,u,D.b8J,new A.n(q,u,u,p,o,u,B.m),u,u,u,B.d4,u,u,u,u)}}
C.afg.prototype={
Fa(d){return this.bRO(d)},
bRO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Fa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pH(d,o,!1),$async$Fa)
case 3:if(!f||d.e==null){w=1
break}A.a8(d,!1).N(null)
w=4
return A.b(A.bN(W.CS,null,x.H),$async$Fa)
case 4:s=t.d
w=5
return A.b(C.h0z(!0,o,s),$async$Fa)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Hw(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$Fa)
case 6:p=f
w=7
return A.b(A.pG(o,!1),$async$Fa)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.c(p,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Fa,v)},
a0Z(d){return this.cCB(d)},
cCB(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0Z=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pH(d,s,!1),$async$a0Z)
case 3:if(!f||d.e==null){w=1
break}A.a8(d,!1).N(null)
A.hG(d,new C.auO(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pG(s,!1),$async$a0Z)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0Z,v)},
Rh(d){return this.cyA(d)},
cyA(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Rh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a8(d,!1).N(null)
w=3
return A.b(A.hG(d,D.aNk,!0,"NgmyWorksheetProjectScan",x.N),$async$Rh)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bHo(s),$async$Rh)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.U(D.fwH)
w=1
break}q=C.hnl(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dL(p,x.H),$async$Rh)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.c('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Rh,v)},
a1_(d){return this.cL1(d)},
cL1(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a1_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a8(d,!1).N(null)
w=3
return A.b(C.bGS(),$async$a1_)
case 3:s=f
if(s==null){w=1
break}r=C.hnl(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dL(q,x.H),$async$a1_)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.c('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a1_,v)},
B(d){var w=this,v=null,u=A.O(d).ax.a===B.I,t=new C.um(u),s=w.d.d.length,r=u?B.ej:B.c,q=A.m(28),p=A.a([new A.ab(0,B.H,B.v.j(u?0.35:0.08),B.kL,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wU,A.o(v,A.x(A.a([w.cBa(d,t,s),new A.D(D.bHN,A.x(A.a([w.b8w(t,"QR restore"),B.S,A.A(A.a([w.b3u(t,!0,B.jB,B.aH,B.aH,new C.eZA(w,d),"Show to scan","QR code"),B.ar,w.aAG(t,B.jC,B.b2,B.bj,new C.eZB(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.h,0,v,v),B.dc,w.b8w(t,"Backup files"),B.S,A.A(A.a([w.aAG(t,B.hM,B.aU,B.bQ,new C.eZC(w,d),"Full copy","Backup file"),B.ar,w.aAG(t,B.A6,B.at,B.aQ,new C.eZD(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.h,0,v,v)],o),B.B,v,B.e,B.h,0,B.p),v)],o),B.l,v,B.e,B.M,0,B.p),B.aq,v,v,new A.n(r,v,v,q,p,v,B.m),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cBa(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.fk,B.cX,B.h4],k):A.a([B.b5,B.aU,B.bQ],k)
w=A.ao(l,A.W(B.vr,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.o(l,l,B.f,l,l,new A.n(B.c.j(0.35),l,l,A.m(4),l,l,B.m),l,4,l,B.kG,l,l,l,36),l,l,l)
u=A.m(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ab(0,B.H,B.v.j(0.2),B.cO,12)],x.V)
r=this.d
s=A.o(l,C.aTl(!0,A.m(13),64,D.bSv,l,r.c,64),B.aq,l,l,new A.n(l,l,t,u,s,l,B.m),l,64,l,l,l,l,l,64)
u=A.c("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.F,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.c(r.b,l,2,B.a2,l,l,l,E.ad0,l,l,l)
r=C.bHn(r.gxO(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.o(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bIa,A.x(A.a([v,A.A(A.a([s,B.er,A.E(A.x(A.a([u,B.au,t,B.P,A.A(A.a([r,B.aa,A.o(l,A.c(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.n(q,l,o,p,l,l,B.m),l,l,l,l,B.fC,l,l,l)],m),B.l,l,B.e,B.h,0,l,l)],m),B.B,l,B.e,B.h,0,B.p),1),A.aH(l,l,l,l,A.W(B.cB,B.c.j(0.85),l,l,l,l),l,l,l,new C.eZz(d),l,l,l,A.n9(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,B.aVL,l,l,l,l),l,l)],m),B.B,l,B.e,B.h,0,l,l)],m),B.l,l,B.e,B.h,0,B.p),l)],m),l),B.f,l,l,new A.n(l,l,l,l,l,new A.a7(B.ay,B.aC,B.x,k,l,l),B.m),l,l,l,l,l,l,l,1/0)},
b8w(d,e){var w=null,v=A.o(w,w,B.f,w,w,new A.n(B.aU,w,w,A.m(2),w,w,B.m),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.aa,A.c(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bu:B.bi,w,w,w,w,w,w,w,w,11,w,w,B.F,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
b3u(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.alU:B.aS
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.el:B.bO
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.ab(0,B.H,B.aH.j(0.12),B.cO,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.K(h.j(0.35),B.r,1)
t=A.o(r,A.W(f,h,r,r,r,22),B.f,r,r,new A.n(u,r,s,t,r,r,B.m),r,r,r,r,B.tp,r,r,r)
u=A.c(k,r,r,r,r,r,r,A.l(r,r,o?B.aS:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aF(!1,B.a3,!0,r,A.aM(!1,q,!0,A.eE(new A.D(B.a1J,A.x(A.a([t,B.af,u,B.bC,A.c(j,r,r,r,r,r,r,A.l(r,r,o?B.bu:B.bi,r,r,r,r,r,r,r,r,11,r,r,B.cF,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.h,0,B.p),r),r,new A.n(n,r,w,p,v,r,B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
aAG(d,e,f,g,h,i,j){return this.b3u(d,!1,e,f,g,h,i,j)}}
C.auO.prototype={
S(){return new C.boz()}}
C.boz.prototype={
Z(){this.a4()
this.agR()},
agR(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$agR=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bHp(p.c,p.d),$async$agR)
case 7:q=e
if(r.c==null){w=1
break}r.l(new C.eZd(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.l(new C.eZe(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agR,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.O(d).ax.a===B.I,f=g?B.Cn:B.hV,e=i.d
e=e==null?h:B.a.X(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.W(B.eG,g?B.ac:B.an,h,h,h,18),h,h,h,new C.eZf(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.c("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.u9],u),B.l,h,B.e,B.h,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.fk,B.cX,B.h4],s):A.a([B.b5,B.aU,B.bQ],s)
r=x.V
q=A.a([new A.ab(0,B.H,B.aU.j(g?0.4:0.3),B.eS,24)],r)
p=i.a.d
o=A.c(p.b,h,h,h,h,h,h,B.dn,B.K,h,h)
p=C.bHn(p.gxO(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.o(h,A.x(A.a([o,B.al,A.A(A.a([p,B.aa,A.o(h,A.c(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.F,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.n(n,h,h,m,h,h,B.m),h,h,h,h,B.fC,h,h,h)],u),B.l,h,B.b9,B.h,0,h,h)],u),B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.n(h,h,h,t,q,new A.a7(B.ay,B.aC,B.x,s,h,h),B.m),h,h,h,h,B.a23,h,h,1/0)
t=g?D.btM:B.c
q=A.m(24)
p=A.K(w?B.aH.j(0.4):B.aU.j(0.3),B.r,1)
r=A.a([new A.ab(0,B.H,B.v.j(g?0.25:0.06),B.dm,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.c(n,h,h,h,h,h,h,B.Wr,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eAj)
else{m=A.m(20)
l=A.K(B.bn,B.r,1)
o.push(A.o(h,A.qk(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.n(B.c,h,l,m,h,h,B.m),h,h,h,h,B.bR,h,h,h))}}o.push(B.aO)
n=w?B.aH:B.aU
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.K((w?B.aH:B.aU).j(0.35),B.r,1)
k=w?B.Qc:B.QL
k=A.W(k,w?B.aH:B.aU,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.o(h,A.A(A.a([k,B.ar,A.E(A.c(j,h,h,h,h,h,h,A.l(h,h,g?B.ac:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.n(n,h,l,m,h,h,B.m),h,h,h,h,B.hw,h,h,h))
return A.c5(h,f,A.bm(!0,A.x(A.a([new A.D(B.Ph,e,h),A.E(A.cc(A.x(A.a([s,B.aO,A.o(h,A.x(o,B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.n(t,h,p,q,r,h,B.m),h,h,h,h,B.v3,h,h,1/0)],u),B.l,h,B.e,B.h,0,B.p),B.t,h,B.y,h,h,B.aoz,h,h,B.ah),1)],u),B.l,h,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.auT.prototype={
S(){return new C.aHA(A.A2(B.Oy,B.os,B.vy))}}
C.aHA.prototype={
t(){this.d.t()
this.a3()},
aPD(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j5(w,d)},
chH(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.iwy(t)
if(s!=null){this.aPD(s)
return}r=C.hCt(t)
if(r!=null)q=A.cV(r,p,0)
else q=!1
if(q){this.aPD(B.a.i(B.a.aY(r,B.a.cd(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eR(A.a([A.aH(t,t,t,t,A.W(u.f?B.vf:B.Qk,t,t,t,t,t),t,t,t,new C.eZh(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Cn,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.h3W,t,t,t,1,t,!0),q=A.A1(u.d,B.bZ,u.gchG()),p=A.m(28)
p=A.as(A.o(t,t,B.f,t,t,new A.n(t,t,A.K(B.aU,B.r,3),p,A.a([new A.ab(2,B.H,B.aU.j(0.35),B.J,24)],x.V),t,B.m),t,260,t,t,t,t,t,260),t,t,t)
w=B.v.j(0.72)
v=A.m(16)
return A.c5(r,B.v,new A.an(B.a0,t,B.b4,B.t,A.a([q,p,A.ao(32,A.o(t,D.h2H,B.f,t,t,new A.n(w,t,A.K(B.aU.j(0.45),B.r,1),v,t,t,B.m),t,t,t,t,B.jy,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aMx.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.Pg.prototype={
S(){return new C.aHC(D.aeZ,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aHC.prototype={
gcIN(){return J.bIy(this.e,0,new C.f__())},
Z(){this.a4()
$.aU.bZ$.push(this)
this.wt()},
t(){$.aU.hZ(this)
this.a3()},
jn(d){if(d===B.h3)this.wt()},
wt(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wt=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DP(q.a.c).dc(0,B.kc),$async$wt)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.l(new C.eZW(q,p))
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
if(q.c!=null&&q.f)q.l(new C.eZX(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wt,v)},
II(d){return this.bOw(d)},
bOv(){return this.II(null)},
bOw(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$II=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iyA(l,d),$async$II)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
r=s.a
q=s.b
p=new C.lI(l,r,q,D.dro,new A.V(Date.now(),0,!1))
w=4
return A.b(C.Mq(t.a.c,p),$async$II)
case 4:o=f
w=5
return A.b(t.wt(),$async$II)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.U(D.ftL)
w=1
break}n=J.aT(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gP(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.U(D.fvA)
else n.L(q).f.U(A.b3(null,null,null,null,null,B.t,null,A.c('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.Fe(m)
case 1:return A.h(u,v)}})
return A.i($async$II,v)},
Fe(d){return this.clI(d)},
clI(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Fe=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hG(s,new C.auU(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$Fe)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Mq(u.a.c,t),$async$Fe)
case 5:case 4:w=6
return A.b(u.wt(),$async$Fe)
case 6:return A.h(null,v)}})
return A.i($async$Fe,v)},
we(d){return this.c3S(d)},
c3S(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$we=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bGS(),$async$we)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hG(r,D.aNk,!0,"NgmyWorksheetProjectScan",x.N),$async$we)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bHo(q),$async$we)
case 14:w=12
break
case 13:f=null
case 12:s=f
w=8
break
case 9:s=null
case 8:case 4:if(s==null){r=t.c
if(r==null){w=1
break}r=r.L(x.q).f
r.U(A.b3(null,null,null,null,null,B.t,null,A.c(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hnl(s)
w=15
return A.b(C.Mq(t.a.c,p),$async$we)
case 15:o=f
w=16
return A.b(t.wt(),$async$we)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.U(D.fvF)
w=1
break}r.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.c('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.Fe(p)
case 1:return A.h(u,v)}})
return A.i($async$we,v)},
OS(d){return this.bN8(d)},
bN8(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$OS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cg(null,null,!0,null,new C.eZH(d),s,null,!0,!0,x.y),$async$OS)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.pf(t.a.c,A.a([],x.D)),$async$OS)
case 6:w=7
return A.b(t.wt(),$async$OS)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.ftQ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OS,v)},
clV(d){var w=this.c
w.toString
A.bU(B.L,null,new C.eZQ(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b99(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.k5
else w=B.c
v=A.m(16)
u=A.K(p?B.el:B.bO,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.o(r,A.W(e,d,r,r,r,22),B.f,r,r,new A.n(t,r,r,s,r,r,B.m),r,r,r,r,B.bT,r,r,r)
t=A.c(i,r,r,r,r,r,r,A.l(r,r,p?B.aS:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a3,!0,r,A.aM(!1,q,!0,A.o(r,A.x(A.a([s,B.af,t,B.bC,A.c(h,r,r,r,r,r,r,A.l(r,r,p?B.bu:B.bi,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.h,0,B.p),B.f,r,r,new A.n(w,r,u,v,r,r,B.m),r,r,r,r,B.tl,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a1t(d,e){return this.clJ(d,e)},
clJ(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1t=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.L,null,new C.eZL(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a1t)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hMG(r,new C.eZM(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.OU(d,e),$async$a1t)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1t,v)},
b67(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.o(u,A.W(e,f,u,u,u,22),B.f,u,u,new A.n(t,u,u,s,u,u,B.m),u,u,u,u,B.bT,u,u,u)
if(d)t=B.aB
else t=h.a?B.aS:B.aw
t=A.c(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.c(i,u,u,u,u,u,u,A.l(u,u,w?B.bu:B.bi,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.B,u,B.e,B.h,0,B.p),1)
return A.aF(!1,B.a3,!0,u,A.aM(!1,u,!0,new A.D(B.D2,A.A(A.a([s,B.bb,t,A.W(B.eL,w?B.bu:B.bi,u,u,u,u)],v),B.l,u,B.e,B.h,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
csL(d,e,f,g,h,i){return this.b67(!1,d,e,f,g,h,i)},
OU(d,e){return this.bNi(d,e)},
bNi(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lp(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$OU)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bFy(t.a.c,d.a),$async$OU)
case 6:w=7
return A.b(t.wt(),$async$OU)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.c("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$OU,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.um(n),l=n?B.c6:B.hV
if(p.f)n=D.bfQ
else{w=A.aE(d,B.dF,x.w).w
v=p.bHy(m)
u=p.c2W(m)
t=p.gbEB()
if(n)s=B.k5
else s=B.c
r=A.m(13)
q=x.p
t=A.a([v,B.af,u,B.aO,new C.GB(A.o(o,A.A(A.a([p.aEe(B.PV,"Projects",m,D.aeZ),p.aEe(B.v9,"Cashier",m,D.b3D),p.aEe(B.I0,"Family Tree",m,D.hRT)],q),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.n(s,o,o,r,o,o,B.m),o,o,o,o,o,o,o,o),14,B.ey,0.95,t,o),B.bx],q)
v=p.d
if(v===D.aeZ){v=J.ad(p.e)
B.d.u(t,A.a([A.A(A.a([A.c("Projects ("+v+")",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aY,new C.azM(p.gaU1(),o)],q),B.l,o,B.e,B.h,0,o,o),B.aA,p.csN(m)],q))}else{n=p.a
if(v===D.b3D)t.push(new C.aqF(n.c,m,o))
else{v=p.r
t.push(new C.arU(n.c,n.d,n.e,n.f,new C.f_2(p),new C.f_3(p),new A.bl(v,x.b4)))}}n=A.cc(A.x(t,B.B,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,new A.P(20,w.r.b+8,20,32),o,o,B.ah)}return A.c5(o,l,A.bm(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bHy(d){var w=null,v=A.m(8),u=d.a,t=A.W(K.a3j,u?B.bu:B.bi,w,w,w,16)
return A.aM(!1,v,!0,new A.D(B.kd,A.A(A.a([t,B.bk,A.c("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bu:B.bi,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.M,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eZE(this),w,w,w,w,w,w,w)},
gbEB(){switch(this.d.a){case 0:return D.ae7
case 1:return D.hG6
case 2:return D.ae8}},
c2W(d){var w=null,v=A.m(15),u=A.a([new A.ab(0,B.H,B.aU.j(0.35),B.cz,16)],x.V),t=x.p,s=A.A(A.a([A.o(w,D.c2v,B.f,w,w,new A.n(B.c.j(0.22),w,w,A.m(12),w,w,B.m),w,44,w,w,w,w,w,44),B.bb,D.bMP,A.aF(!1,B.a3,!0,w,A.aM(!1,A.m(12),!0,A.o(w,D.c_O,B.f,w,w,new A.n(B.c.j(0.22),w,w,A.m(12),w,w,B.m),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eZI(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.B,w,B.e,B.h,0,w,w),r=B.b5.j(0.55),q=A.m(12)
return new C.GB(A.o(w,A.x(A.a([new A.D(B.HD,s,w),A.o(w,A.x(A.a([A.c("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.c(A.Bw(this.gcIN()),w,w,w,w,w,w,D.fNy,w,w,w)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.n(r,w,w,q,w,w,B.m),w,w,w,B.tk,B.jy,w,w,1/0)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.n(B.aU,w,w,v,u,w,B.m),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hG5,w)},
aEe(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aU:B.L,q=A.m(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.ab(0.5,B.H,B.aU.j(0.42),B.cO,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bi
w=A.W(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bi
return A.E(A.aF(!1,B.a3,!0,u,A.aM(!1,s,!0,A.cT(u,A.A(A.a([w,B.e5,new A.d6(1,B.cg,A.c(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.b9,B.h,0,u,u),u,u,B.cn,new A.n(r,u,p,q,o,u,B.m),B.iX,u,u,u,u,B.HL,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eZZ(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
csN(d){var w,v,u,t,s,r,q=this,p=null
if(J.cu(q.e)){w=d.a
v=w?B.ej:B.c
u=A.m(15)
t=A.o(p,D.c_V,B.f,p,p,new A.n(p,p,p,p,A.a([new A.ab(2,B.H,B.aU.j(0.5),B.eS,28)],x.V),D.ccz,B.a6),p,108,p,p,p,p,p,108)
s=A.c("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aS:B.aw,p,p,p,p,p,p,p,p,18,p,p,B.F,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.GB(A.o(p,A.x(A.a([t,B.dc,s,B.P,A.c("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bi,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.e8,A.A(A.a([A.E(q.aVD(B.jC,"Scan QR",new C.eZT(q),d),1),B.ar,A.E(q.aVD(B.A6,"Upload file",new C.eZU(q),d),1)],r),B.l,p,B.e,B.h,0,p,p),B.aA,A.bJ(D.heu,p,q.gaU1(),A.bn(B.aU,p,p,p,B.c,B.hp,p,p,new A.b9(A.m(12),B.a1),p,p,p))],r),B.l,p,B.e,B.h,0,B.p),B.f,p,p,new A.n(v,p,p,u,p,p,B.m),p,p,p,p,p,p,p,1/0),16,D.bJg,1.05,D.ae7,p)}w=J.ba(q.e,new C.eZV(q,d),x.l)
w=A.B(w,w.$ti.k("ak.E"))
return new C.GB(A.x(w,B.l,p,B.e,B.h,0,B.p),16,B.bT,1,D.ae7,p)},
aVD(d,e,f,g){var w=null,v=B.aU.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.K(B.aU.j(0.45),B.r,1)
return A.aF(!1,B.a3,!0,u,A.aM(!1,t,!0,A.o(w,A.x(A.a([A.W(d,B.b5,w,w,w,26),B.P,A.c(e,w,w,w,w,w,w,D.fLK,B.K,w,w)],x.p),B.l,w,B.e,B.M,0,B.p),B.f,w,w,new A.n(w,w,r,s,w,w,B.m),w,w,w,w,B.a1w,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
csM(d,e){var w,v,u=null,t=e.a,s=t?B.ej:B.c,r=A.m(14),q=A.K(t?B.el:B.bO,B.r,1),p=A.a([new A.ab(0,B.H,B.v.j(t?0.35:0.08),B.ez,10)],x.V),o=A.m(14),n=t?B.bu:B.bi
n=A.bv(B.YE,new A.fH(1.7777777777777777,C.aTl(!0,B.fo,1/0,B.PV,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.c(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aS:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.c(""+d.d.length+" budget items \xb7 "+A.Bw(d.gxO()),u,u,u,u,u,u,D.fJH,u,u,u)],w),B.B,u,B.e,B.h,0,B.p),1)
return A.o(u,A.aF(!1,B.a3,!0,u,A.aM(!1,o,!0,A.x(A.a([n,new A.D(B.bH,A.A(A.a([v,A.aH(u,u,u,u,A.W(A_.a4q,t?B.bu:B.bi,u,u,u,u),u,u,u,new C.eZR(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.h,0,u,u),u)],w),B.B,u,B.e,B.h,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eZS(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.n(s,u,q,r,p,u,B.m),u,u,u,B.eb,u,u,u,1/0)}}
C.bBs.prototype={}
C.rx.prototype={
ak(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd1T(){var w,v,u,t,s=this.c
if(s===B.i.fM(s))w=B.o.v(B.i.M(s))
else{v=B.i.ab(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lI.prototype={
gxO(){return B.d.cC(this.d,0,new C.cIe())},
ak(){var w=this,v=w.d,u=A.T(v).k("N<1,aa<q,@>>")
v=A.B(new A.N(v,new C.cId(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bgA(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lI(w.a,w.b,v,u,w.e)},
bgi(d){return this.bgA(d,null)},
U2(d){return this.bgA(null,d)}}
C.IF.prototype={
a7(){return"FamilyGender."+this.b}}
C.i7.prototype={
ak(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hHP(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aGZ(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.i7(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.amS.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.l1.prototype={
garh(){var w=this.f
return new A.Y(w,new C.bUo(),A.T(w).k("Y<1>")).gJ(0)},
ak(){var w=this,v=w.f,u=A.T(v).k("N<1,aa<q,@>>")
v=A.B(new A.N(v,new C.bUn(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ioF(w.y),"games",w.z],x.N,x.z)},
xa(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.l1(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bgz(d,e){var w=null
return this.xa(w,w,w,d,e,w,w,w,w)},
cSb(d,e,f,g,h,i,j){return this.xa(d,e,null,f,g,h,i,j,null)},
aH3(d,e){var w=null
return this.xa(w,w,w,w,d,w,w,e,w)},
cSd(d,e,f,g,h,i,j,k){return this.xa(d,e,null,f,g,h,i,j,k)},
cQH(d){var w=null
return this.xa(w,w,w,w,w,w,w,d,w)},
cR4(d){var w=null
return this.xa(w,w,w,w,w,w,w,w,d)},
bgc(d){var w=null
return this.xa(w,w,d,w,w,w,w,w,w)},
aGP(d){var w=null
return this.xa(w,w,w,w,w,d,w,w,w)},
cRJ(d,e,f){var w=null
return this.xa(w,d,w,w,e,w,w,f,w)},
cQu(d){var w=null
return this.xa(w,w,w,d,w,w,w,w,w)},
cRg(d,e){var w=null
return this.xa(d,w,w,w,w,w,e,w,w)}}
C.cIf.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cIg.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aJJ.prototype={}
C.bbV.prototype={
aj(d){this.a=d.a
this.b=d.b},
d_(d){var w=new C.bbV()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b5(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bbU.prototype={
gx0(){return!0},
gGO(){return this.z.b<this.b.length},
aXj(d){switch(0){case 0:return d.a.c}},
aX_(d){switch(0){case 0:return d.a.d}},
bXn(d,e){switch(0){case 0:return new A.i1(d,e)}},
bWL(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hi(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iV(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Io(b4)
switch(0){case 0:v=b5.b
u=new A.kZ(0,v,0,1/0)
t=w===B.Wj
break}s=A.a([],x.gZ)
r=A.S(x.gF,x.S)
for(b3=b1.z,q=B.d.fC(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hi(b4,u,!0)
f=b1.aXj(g)
f.toString
e=b1.aX_(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJJ(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJJ(k,j,i))}d=s.length
switch(0){case 0:q=b5.cB(new A.i1(m,l))
a0=q.a
a1=q.b
b1.a=new A.iV(0,0,a0,a1)
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
for(q=B.d.fC(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.I)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aXj(g)
e=b1.aX_(g)
e.toString
a9=b1.bWL(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bXn(a6,a3+a9)
b0=g.a
g.a=new A.iV(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fW(d){var w,v,u,t,s,r=this
r.lE(d)
w=d.b
w.iy()
v=A.dt()
u=r.a
v.ed(u.a,u.b,0,1)
w.px(0,v)
for(u=r.z,u=B.d.ds(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].fW(d)
w.nH(0)},
Hk(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
iy(){return this.z}}
C.bzI.prototype={}
var z=a.updateTypes(["aA<~>()","Q(i7)","~()","Q(l1)","Q(nx)","aa<q,@>(l1)","H(l1,l1)","H(i7,i7)","q(i7)","l1(aa<@,@>)","Q(lI)","nx(aa<@,@>)","aa<q,@>(nx)","Q(uY)","uY()","H(i7)","ai<i7>()","Q(zK)","a0I(Z)","q?(i7)","eS<q?>(i7)","aA<~>(lI)","Q(rx)","aa<q,@>(i7)","i7(aa<@,@>)","H(lI,lI)","~(bf)","w(oQ)","Q(agz)","H(H,aaA)","Uo(Z)","Q(N3)","Q(uX)","~(i7)","q(q)","WK(Z)","Un(Z)","aeW(Z)","a_D(Z)","i7(i7)","cM(bB<q,GR>)","cM(L7)","a06(Z)","H?(i7)","i7()","Q(L7)","D(i7)","~(IF)","a02(Z)","w(IF,q,a_)","Q(ags)","bB<q,ai<aa<q,@>>>(q,ai<nx>)","a04(Z)","+count,id,name(H,q,q)(l1)","l1(l1)","q(l1)","a12(Z)","Q(lY)","lY()","a_9(Z)","a2Q(Z)","a_F(Z)","a_E(Z)","~(H)","~(q,lw?)","w(rx)","afg(Z)","~(nW)","aA<~>([q?])","G(G,lI)","w(lI)","G(G,rx)","aa<q,@>(rx)","rx(aa<@,@>)","ai<lw>()","uX()","q(V)","lI(aa<@,@>)","cw(IE)","q(lI)","aa<q,@>(lI)","H(nx,nx)","l1(aa<q,@>)","a11(Z)"])
C.fTA.prototype={
$1(d){return d.a+" "+d.b},
$S:135}
C.fTz.prototype={
bpT(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.ro(s,d,B.ib,"book",B.Hn),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.X(r!=null&&A.Mc(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bpT(d)},
$S:289}
C.fTB.prototype={
$1(d){return d.b},
$S:135}
C.h2N.prototype={
$1(d){var w=null
return A.eI(w,B.L,new A.QL(this.a,this.b,w),w,w,0,B.a1K,w,B.d8,w,w,w)},
$S:49}
C.fGB.prototype={
$1(d){return d!=null},
$S:224}
C.fGC.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:224}
C.fGH.prototype={
$1(d){if(this.a)return new A.r(d.a*520,d.b*160)
return d},
$S:184}
C.fRi.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fe(d,w,w,w,A.hj(w,B.u0,w,w,w,w,w,w,w,B.dH,w,w,10.5,w,B.eK,w,!0,w,w,w,w),w),u=f?B.eK:B.x3
return new A.oh(D.bEx,A.abp(A.a([new A.h0(130,w,v),new A.zJ(1,B.HV,A.fe(e,w,w,w,A.hj(w,g==null?D.eCH:g,w,w,w,w,w,w,w,B.dH,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.z5,B.m4))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:2278}
C.fRh.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.w9(999)
f=A.xO(A.lT(h,A.fe("Cashier",h,h,h,A.hj(h,D.B0,h,h,h,h,h,h,h,B.dH,h,h,10,h,B.eK,h,!0,h,h,h,h),h),h,new A.l_(D.eCy,h,f,B.ih,h),h,h,D.bF0,h))
w=A.xO(A.fe("Debt receipt",h,h,h,A.hj(h,h,h,h,h,h,h,h,h,B.dH,h,h,22,h,B.eK,h,!0,h,h,h,h),h))
v=A.xO(A.fe(C.xu(new A.V(Date.now(),0,!1),!0),h,h,h,D.acz,h))
u=A.w9(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fe(s,h,h,h,A.hj(h,h,h,h,h,h,h,h,h,B.dH,h,h,14,h,B.eK,h,!0,h,h,h,h),h)
r=A.fe("Person who owes",h,h,h,D.acz,h)
q=A.w9(10)
p=x.Z
u=A.lT(h,A.zA(A.a([s,new A.h0(h,2,h),r,new A.h0(h,10,h),A.lT(h,A.zA(A.a([A.fe("Amount owed",h,h,h,D.acz,h),new A.h0(h,2,h),A.fe(A.Bw(t.c),h,h,h,A.hj(h,D.B0,h,h,h,h,h,h,h,B.dH,h,h,20,h,B.eK,h,!0,h,h,h,h),h)],p),B.tc,B.m4),h,new A.l_(B.q0,h,q,B.ih,h),h,h,D.bEd,1/0)],p),B.tc,B.m4),h,new A.l_(B.aOI,h,u,B.ih,h),h,h,D.bGc,1/0)
q=new A.nY(D.eCB,0.9,B.lm)
r=A.w9(12)
s=i.c
o=s.$2("Original due",C.xu(t.r,!1))
n=s.$2("Current due",C.xu(t.f,!1))
m=i.d
l=new A.nY(m,1.1,B.lm)
k=A.w9(8)
j=i.a
k=A.a([o,n,new A.h0(h,6,h),A.lT(h,A.xO(A.fe(t.gaO9(),h,h,h,A.hj(h,m,h,h,h,h,h,h,h,B.dH,h,h,11,h,B.eK,h,!0,0.5,h,h,h),h)),h,new A.l_(h,new A.q6(l,l,l,l),k,B.ih,h),h,h,D.bF9,1/0),new A.h0(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.B0))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.B0))
else{n=A.fe("Missed days ("+n+")",h,h,h,A.hj(h,B.u0,h,h,h,h,h,h,h,B.dH,h,h,10.5,h,B.eK,h,!0,h,h,h,h),h)
m=A.T(o).k("N<1,TX>")
o=A.B(new A.N(o,new C.fRg(),m),m.k("ak.E"))
B.d.u(k,A.a([new A.h0(h,4,h),n,new A.h0(h,6,h),new C.bbU(5,5,new C.bbV(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.h0(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.h0(h,8,h),w,new A.h0(h,3,h),v,new A.h0(h,16,h),u,new A.h0(h,10,h),A.lT(h,A.zA(k,B.z5,B.m4),h,new A.l_(h,new A.q6(q,q,q,q),r,B.ih,h),h,h,B.anq,1/0)],p)
w=j.a
if(w!=null){v=new A.nY(B.Kp,1,B.lm)
B.d.u(f,A.a([new A.h0(h,16,h),A.fe("Debtor signature",h,h,h,A.hj(h,B.u0,h,h,h,h,h,h,h,B.dH,h,h,10,h,B.eK,h,!0,h,h,h,h),h),new A.h0(h,6,h),A.lT(h,new A.IW(w,B.YR,h,h),h,new A.l_(h,new A.q6(v,v,v,v),A.w9(6),B.ih,h),82,h,B.Pe,1/0)],p))}f.push(new A.h0(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fe(w,h,h,h,D.fBV,h))
f.push(new A.h0(h,18,h))
f.push(A.xO(A.fe("NGMY.ORG",h,h,h,A.hj(h,D.B0,h,h,h,h,h,h,h,B.dH,h,h,14,h,B.eK,h,!0,1.8,h,h,h),h)))
return f},
$S:397}
C.fRg.prototype={
$1(d){var w=null,v=new A.nY(D.Kq,0.7,B.lm),u=A.w9(999)
return A.lT(w,A.fe(C.xu(d,!1),w,w,w,A.hj(w,D.Kq,w,w,w,w,w,w,w,B.dH,w,w,9.5,w,B.eK,w,!0,w,w,w,w),w),w,new A.l_(w,new A.q6(v,v,v,v),u,B.ih,w),w,w,D.bKK,w)},
$S:2279}
C.c9I.prototype={
$1(d){var w=null,v=B.bE.j(0.08),u=A.m(999),t=A.K(B.bE.j(0.28),B.r,1)
return A.o(w,A.c(C.xu(d,!1),w,w,w,w,w,w,D.fJ8,w,w,w),B.f,w,w,new A.n(v,w,t,u,w,w,B.m),w,w,w,w,B.eX,w,w,w)},
$S:2280}
C.h3j.prototype={
$1(d){var w=null,v=A.aE(d,B.bY,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.c3v,w,w,w,new C.h3g(d),w,w,w,w,w,B.cl),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eI(w,B.L,new A.cO(new A.aY(0,380,0,v.a.b*0.9),A.aF(!1,B.a3,!0,u,new A.D(B.a1x,A.x(A.a([new A.bK(B.a9,w,w,t,w),new A.d6(1,B.cg,A.cc(A.x(A.a([new A.e6(new C.b0R(r,w),s),B.S,A.A(A.a([A.E(A.em(B.Ae,w,D.haG,new C.h3h(s,r,d),A.dg(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fa,w,new A.b9(A.m(14),B.a1),new A.av(q,1,B.r,-1),w,w,w,w)),1),B.aa,A.E(A.d8(B.a52,w,D.h73,new C.h3i(r,d),A.bn(B.b5,w,w,w,B.c,w,B.fa,w,new A.b9(A.m(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.h,0,w,w)],p),B.l,w,B.e,B.M,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.M,0,B.p),w),B.f,B.aw,0,w,w,w,w,w,B.ai),w),w,w,0,A1.a1W,w,B.d8,w,w,w)},
$S:49}
C.h3g.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.h3h.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.ap$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lx(2.5),$async$$0)
case 4:w=3
return A.b(e.hk(B.hm),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eQ(B.dI.gaU(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.az(o,0,32)
w=5
return A.b(A.rr(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.c(n,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.h3i.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fYb(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.U(A.b3(null,null,null,null,null,B.t,null,A.c(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h3b.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eI(w,B.aw,A.x(A.a([new A.D(D.bG0,A.A(A.a([A.E(A.c(this.a,w,w,w,w,w,w,B.ns,w,w,w),1),A.aH(w,w,w,w,B.ly,w,w,w,new C.h39(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),w),new A.d6(1,B.cg,new A.D(B.f6,A.bv(A.m(14),A.fY(t,B.z,w,w,B.cp,B.dC,!1,w,!1,w,w),B.aq),w),w),new A.D(B.OT,new A.a5(1/0,w,A.d8(B.o6,w,D.aZ4,new C.h3a(t,this.c,d),A.bn(B.b5,w,w,w,B.c,w,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.M,0,B.p),w,w,w,B.P4,w,B.d8,w,new A.b9(v,B.a1),w)},
$S:49}
C.h39.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.h3a.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rr(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h3n.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eI(w,B.aw,new A.D(D.bG8,A.x(A.a([A.A(A.a([D.bLV,A.aH(w,w,w,w,B.ly,w,w,w,new C.h3l(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),B.P,new A.e6(A.bv(A.m(14),A.o(w,A.b4(w,w,w,new C.be9(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a5(1/0,w,A.d8(B.o6,w,D.aZ4,new C.h3m(t,s,d),A.bn(B.b5,w,w,w,B.c,w,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.M,0,B.p),w),w,w,w,w,w,B.d8,w,new A.b9(v,B.a1),w)},
$S:49}
C.h3l.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.h3m.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.ap$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lx(2.5),$async$$0)
case 4:w=3
return A.b(e.hk(B.hm),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.az(p,0,32)
r=J.eQ(B.dI.gaU(s))
w=5
return A.b(A.rr(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.c(o,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fLw.prototype={
$1(d){return d.a===this.a},
$S:261}
C.dSV.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dSG.prototype={
bp5(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.ej:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dSJ(s,q,e),p,!0,!0,!1,B.KJ,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dSK(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bp5(d,e)},
$S:2281}
C.dSJ.prototype={
$1(d){var w,v=null,u=this.c===B.xF,t=u?D.dyz:D.dtX
u=u?"Male":"Female"
w=this.b
u=A.c("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aS:B.aw,v,v,v,v,v,v,v,v,15,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(G.anY,A.x(A.a([u,B.au,A.c("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bu:B.bi,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.iC(!0,v,v,B.y,D.fsp,new C.dSI(this.a,w,t,d),t.length,v,B.e2,B.ah,!0)],x.p),B.am,v,B.e,B.M,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:27}
C.dSI.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cX.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.m(14)
if(q)u=B.cX
else u=(t.b.a.d.a?B.bu:B.bi).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.o(B.z,C.b0Q(r,26),B.f,s,s,new A.n(w,s,u,v,s,s,B.m),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dSH(t.d,r),s,s,s,s,s,s,s)},
$S:205}
C.dSH.prototype={
$0(){A.a8(this.a,!1).N(this.b)
return null},
$S:0}
C.dSK.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dSE.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:92}
C.dSF.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cH(B.cn,e,v)
return new A.d5(e,!1,A.iu(B.z,A.as(A.aF(!1,B.a3,!0,v,new A.e0(new C.dSD(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bi(t,new A.bt(0.96,1,u),u.k("bi<bQ.T>"))),v)},
$S:34}
C.dSD.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aE(d,B.bY,x.w).w,i=l.b,h=i.a.d.a,g=h?B.ej:B.c,f=A.m(14),e=A.K((h?B.bu:B.bi).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.c(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,16,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aM(!1,v,!0,new A.D(B.ey,A.W(B.cB,i.a.d.a?B.bu:B.bi,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dSo(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.h,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aW9("Name")
r=l.a
q=r.d==null?k:new C.dSp(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bs:B.mj
n=A.K(B.cX.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bgs(new A.D(B.f5,A.aM(!1,p,!0,A.o(B.z,C.b0Q(m==null?"\ud83d\udc64":A.fS7(r.e,m),18),B.f,k,k,new A.n(o,k,n,k,k,k,B.a6),k,34,k,B.cr,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.li,k,B.aco,k,k)
v=A.a([v,B.af,t,B.P,A.c("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bi,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.al,A.A(A.a([A.E(i.aWQ("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dSq(r,a0),r.d===B.xF),1),B.aa,A.E(i.aWQ("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dSv(r,a0),r.d===B.a8U),1)],u),B.l,k,B.e,B.h,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.P,new A.bK(B.a5,k,k,A.hq(D.c1J,D.h8X,new C.dSw(r,l.e,a0),A.fr(k,k,k,k,k,k,k,k,k,k,k,B.cX,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cl)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.v0(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aWa("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.ef,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.K((t?B.bu:B.bi).j(0.22),B.r,1)
t=A.c("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bi,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xu(r.a,!1)
v.push(A.aF(!1,B.a3,!0,q,A.aM(!1,p,!0,A.o(k,A.A(A.a([A.E(A.x(A.a([t,B.bC,A.c(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.B,k,B.e,B.h,0,B.p),1),D.bZh],u),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.n(k,k,n,o,k,k,B.m),k,k,k,k,B.bl,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dSx(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.u(v,A.a([B.P,A.c("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bi,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aW9("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.c("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,12.5,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.c("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bi,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b4u(r.b.length!==0,B.mq,new C.dSy(r,i,a0),new C.dSz(r,a0),"Upload from gallery","ID photo"))
v.push(i.b4u(r.c.length!==0,D.bSt,new C.dSA(r,i,d,a0),new C.dSB(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new A0.a9f("Signature (optional)",t,new C.dSC(a0),new C.dSr(a0,t),new C.dSs(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.bu:B.bi
s=(i?B.bu:B.bi).j(0.28)
s=A.E(A.dU(B.aYY,new C.dSt(d),A.dg(k,k,k,k,k,k,k,k,k,t,k,k,B.qU,k,new A.b9(A.m(10),B.a1),new A.av(s,1,B.r,-1),k,k,k,k)),1)
t=A.bn(B.cX,k,k,k,B.c,k,B.qU,k,new A.b9(A.m(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.aa,A.E(A.bJ(A.c(h?"Save":"Update",k,k,k,k,k,k,B.w2,k,k,k),k,new C.dSu(r,w,d),t),1)],u),B.l,k,B.e,B.h,0,k,k))
return A.o(k,A.cc(A.x(v,B.am,k,B.e,B.M,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.n(g,k,e,f,k,k,B.m),k,k,k,B.tm,B.jy,k,k,360)},
$S:175}
C.dSo.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dSp.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dSq.prototype={
$0(){return this.b.$1(new C.dSn(this.a))},
$S:0}
C.dSn.prototype={
$0(){var w=this.a
w.d=B.xF
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dSv.prototype={
$0(){return this.b.$1(new C.dSm(this.a))},
$S:0}
C.dSm.prototype={
$0(){var w=this.a
w.d=B.a8U
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dSw.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dSx.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.w3(null,u.b,A.c0(2020,1,1,0,0,0,0,0),null,s,A.c0(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dSl(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSl.prototype={
$0(){var w=this.b
return this.a.a=A.c0(w.gck(),w.gcg(),w.gcv(),0,0,0,0,0)},
$S:0}
C.dSy.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Qx(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dSk(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSk.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dSz.prototype={
$0(){return this.b.$1(new C.dSj(this.a))},
$S:0}
C.dSj.prototype={
$0(){return this.a.b=""},
$S:0}
C.dSA.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.ej:B.c
w=3
return A.b(A.bU(q,null,new C.dSh(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Qx(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dSi(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSh.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,B.ato,w,w,w,w,new C.dSb(d),!1,w,w,w,w,w,w,w,D.fZW,w,w,w),A.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,B.atm,w,w,w,w,new C.dSc(d),!1,w,w,w,w,w,w,w,D.h61,w,w,w)],x.p),B.l,w,B.e,B.M,0,B.p),!0,!1,B.ag,!0,!0)},
$S:27}
C.dSb.prototype={
$0(){A.a8(this.a,!1).N("camera")
return null},
$S:0}
C.dSc.prototype={
$0(){A.a8(this.a,!1).N("gallery")
return null},
$S:0}
C.dSi.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dSB.prototype={
$0(){return this.b.$1(new C.dSg(this.a))},
$S:0}
C.dSg.prototype={
$0(){return this.a.c=""},
$S:0}
C.dSC.prototype={
$0(){return this.a.$1(new C.dSf())},
$S:0}
C.dSf.prototype={
$0(){},
$S:0}
C.dSr.prototype={
$0(){return this.a.$1(new C.dSe(this.b))},
$S:0}
C.dSe.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dSs.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ajq(u.a,null,null,new C.dSd(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSd.prototype={
$4(d,e,f,g){this.a.$1(new C.dSa(this.b,d))},
$S:452}
C.dSa.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.u(w,this.b)},
$S:0}
C.dSt.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dSu.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.U(D.fxz)
return}if(w.a.d==null){w.c.L(x.q).f.U(D.fuo)
return}A.a8(w.c,!1).N(!0)},
$S:0}
C.dSY.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:92}
C.dSZ.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.ej:B.c,n=A.m(14),m=A.K((p?B.bu:B.bi).j(0.16),B.r,1)
p=A.c("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aS:B.aw,r,r,r,r,r,r,r,r,16,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bw(w.c)
v=A.c(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bu:B.bi,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zV(r).length
u=A.c("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.zV(r).length>0?B.bE:B.cX,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bi
t=(q?B.bu:B.bi).j(0.28)
s=x.p
return new A.d5(e,!1,A.as(A.aF(!1,B.a3,!0,r,A.o(r,A.x(A.a([p,B.P,v,u,B.aA,A.A(A.a([A.E(A.dU(B.ol,new C.dSW(d),A.dg(r,r,r,r,r,r,r,r,r,w,r,r,B.jQ,r,new A.b9(A.m(10),B.a1),new A.av(t,1,B.r,-1),r,r,r,r)),1),B.aa,A.E(A.bJ(D.h6t,r,new C.dSX(d),A.bn(B.cX,r,r,r,B.c,r,B.jQ,r,new A.b9(A.m(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.h,0,r,r)],s),B.am,r,B.e,B.M,0,B.p),B.f,r,r,new A.n(o,r,m,n,r,r,B.m),r,r,r,B.D6,B.HD,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:34}
C.dSW.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dSX.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dSS.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dST(r),p=r.a.d.a,o=p?B.ej:B.c,n=A.m(14),m=A.K((p?B.bu:B.bi).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.c(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aS:B.aw,s,s,s,s,s,s,s,s,14,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.c(A.Bw(l.c),s,s,s,s,s,s,D.fKL,s,s,s)],p),B.l,s,B.e,B.h,0,s,s)
w=A.iT((r.a.d.a?B.bu:B.bi).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a3F,"View receipt",new C.dSL(r,d,l))
u=l.x!=null
t=u?B.pN:B.r3
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bG5,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dSM(r,d,l)),q.$3$icon$label$onTap(B.Dl,"Edit",new C.dSN(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mq,"View / download ID",new C.dSO(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bSs,"View / download selfie",new C.dSP(r,d,l)))
if(l.gaIK())p.push(q.$3$icon$label$onTap(B.a4T,"View / download signature",new C.dSQ(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bE,B.en,"Delete",new C.dSR(r,d,l)))
p.push(B.au)
return A.bm(!0,new A.D(B.tk,A.o(s,A.x(p,B.l,s,B.e,B.M,0,B.p),B.f,s,s,new A.n(o,s,m,n,s,s,B.m),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:27}
C.dST.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.aw
else w=d
return A.aM(!1,v,!0,new A.D(B.eW,A.A(A.a([A.W(e,w,v,v,v,20),B.bb,A.c(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.h,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:2282}
C.dSL.prototype={
$0(){A.a8(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h3f(w,this.c)},
$S:0}
C.dSM.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.Tm(this.c)},
$S:0}
C.dSN.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.DV(this.c)},
$S:0}
C.dSO.prototype={
$0(){var w,v,u
A.a8(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bHJ(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dSP.prototype={
$0(){var w,v,u
A.a8(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bHJ(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dSQ.prototype={
$0(){A.a8(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h3k(w,this.c)},
$S:0}
C.dSR.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.Qw(0,this.c)},
$S:0}
C.dT_.prototype={
$1(d){return d.x==null},
$S:261}
C.dT0.prototype={
$1(d){return d.x!=null},
$S:261}
C.dT1.prototype={
$2(d,e){return d+e.c},
$S:2283}
C.dT2.prototype={
$0(){return this.a.bF7()},
$S:0}
C.dSU.prototype={
$0(){return this.a.ah3(this.b)},
$S:0}
C.fMh.prototype={
$1(d){return d.a===this.a},
$S:z+32}
C.fMi.prototype={
$0(){return B.d.gH(D.a6a)},
$S:z+75}
C.div.prototype={
$0(){var w=this.a
return w.l(new C.dit(w,this.b))},
$S:0}
C.dit.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.diu.prototype={
$0(){},
$S:0}
C.diw.prototype={
$0(){var w=this.a.gc3G()
A.a8(this.b,!1).N(w)
return null},
$S:0}
C.fOP.prototype={
$1(d){return C.hrM(A.a1(d,x.N,x.z))},
$S:z+11}
C.fOQ.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fOR.prototype={
$2(d,e){var w=A.cb(d.a,null),v=A.cb(e.a,null)
if(w!=null&&v!=null)return B.o.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+81}
C.h1R.prototype={
$1(d){return d.ak()},
$S:z+12}
C.haw.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fLn.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bT5.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eC(e,v)?v:null},
$S:2284}
C.h2r.prototype={
$1(d){var w=this
return new C.a04(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+52}
C.dja.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.dj9(w,d))},
$S:z+78}
C.dj9.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.diZ.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cK(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.diW.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dix.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.diy.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dj_.prototype={
$0(){return this.a.w=!1},
$S:0}
C.diG.prototype={
$1(d){var w=null,v=A.O(d).ax.a===B.I,u=v?B.ej:B.c,t=A.c("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.c("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bi,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ek(A.a([A.bO(!1,B.dp,w,w,!0,w,w,w,new C.diE(d),w,w),A.bJ(B.y4,w,new C.diF(d),A.bn(B.nD,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.diE.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.diF.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.diH.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.diX.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.diY.prototype={
$0(){return B.d.gH(D.Aq)},
$S:z+14}
C.diC.prototype={
$1(d){var w=this.a,v=w.y,u=w.gze(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Un(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+36}
C.diD.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.diI.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_D(v,u,J.ad(w.d),null)},
$S:z+38}
C.diJ.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dj8.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.d()
if(e===0)w=A.ay(s,new C.a_i(r.y,r.gze(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dj6(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.d()
t=r.Q
t===$&&A.d()
t=new C.bdu(v,e,w,u,t,r.gbVQ(),C.hHO(r.y.Q),r.gze(0),s)
w=t}return A.c7(q,new C.dj7(r,e),new A.D(B.a1P,w,s))},
$S:2285}
C.dj7.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.d()
t=t.f
if(t.length!==0&&B.d.gd3(t).ay){t=this.b
u=x.cy.a(B.d.gd3(u.f.f)).gvw(0)
w=t-(u==null?t:u)}else w=0
v=B.i.D(w,-1,0)
u=A.dt()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fF(v*3.141592653589793*0.5)
return A.fA(B.a5,A.d0(e,B.i.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.dj6.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aJW(B.qM,B.iJ)},
$S:0}
C.diT.prototype={
$0(){var w=this.a
return w.l(new C.diS(w))},
$S:0}
C.diS.prototype={
$0(){return this.a.w=!0},
$S:0}
C.diU.prototype={
$0(){var w=this.a.c
w.toString
A.a8(w,!1).N(null)
return null},
$S:0}
C.diz.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=B.kC.j(0.5),r=x.p,q=A.a([D.fYt,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cu(p.d)?"Write this book":"Write a new book"
q.push(p.a_n(d,B.ee,w,J.cu(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a_n(d,B.ari,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cK(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cy,A.c("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kW.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cy,A.c("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kW.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a_n(d,I.asg,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a_n(d,B.oY,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a_n(d,B.oY,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eI(u,B.Cx,A.bm(!0,new A.D(B.zp,A.x(q,B.B,u,B.e,B.M,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.P7,u,B.d8,u,new A.b9(t,new A.av(s,1.4,B.r,-1)),u)},
$S:49}
C.diV.prototype={
$0(){A.a8(this.a,!1).N(this.b)
return null},
$S:0}
C.diM.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cK(w.d)
return new C.a06(v,J.cK(w.d),w.r+1,null)},
$S:z+42}
C.diN.prototype={
$1(d){var w=null
return A.oV(!1,A.ek(w,w,w,B.Cx,new A.km(this.a,new C.diL(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:328}
C.diL.prototype={
$3(d,e,f){var w=null
return A.A(A.a([B.ac1,B.pg,A.E(A.c(e,w,w,w,w,w,w,B.jI,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:821}
C.diO.prototype={
$0(){return this.a.a=!1},
$S:53}
C.diP.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:197}
C.diQ.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.diR.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.BF(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.T_(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.l(new C.diK(s,t))
w=4
return A.b(s.lh(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.diK.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dj1.prototype={
$1(d){var w=null
return A.oV(!1,A.ek(w,w,w,B.Cx,new A.km(this.a,new C.dj0(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:328}
C.dj0.prototype={
$3(d,e,f){var w=null
return A.A(A.a([B.ac1,B.pg,A.E(A.c(e,w,w,w,w,w,w,B.jI,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:821}
C.dj2.prototype={
$0(){return this.a.a=!1},
$S:53}
C.dj3.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:197}
C.dj4.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:197}
C.dj5.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.BF(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lh(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.diA.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.bm2(B.qM,P.OI)},
$S:0}
C.diB.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aJW(B.qM,P.OI)},
$S:0}
C.dkX.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dkY.prototype={
$1(d){var w=this.a
return w.l(new C.dkW(w))},
$S:9}
C.dkW.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dkZ.prototype={
$1(d){var w=this.a
return w.l(new C.dkV(w))},
$S:9}
C.dkV.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dl_.prototype={
$1(d){var w=this.a
return w.l(new C.dkU(w))},
$S:9}
C.dkU.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dl0.prototype={
$0(){var w=this.a
return w.l(new C.dkT(w,this.b))},
$S:0}
C.dkT.prototype={
$0(){var w=this.b
this.a.d.sb2(0,w)
return w},
$S:0}
C.dl1.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga3j()
A.a8(this.b,!1).N(new A.bsr(w,v))},
$S:0}
C.djp.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.djo.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a02(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+48}
C.djt.prototype={
$1(d){return d.a===this.a},
$S:z+50}
C.djs.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bc0(u)
u=u.c
w=u===1?"page":"pages"
w=A.c("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hC,v,v,v)
return A.ek(A.a([A.bO(!1,B.dp,v,v,!0,v,v,v,new C.djq(d),v,v),A.bJ(B.y4,v,new C.djr(d),A.bn(B.nD,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,B.Cx,w,v,v,v,v,D.fXf,v)},
$S:18}
C.djq.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.djr.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dju.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.djv.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.cc(A.bZ(B.bI,r,B.br,t,18,14),B.t,t,B.y,t,t,D.bH5,t,t,B.ah)},
$S:309}
C.djn.prototype={
$0(){return this.a.Rl(0,this.b)},
$S:0}
C.djm.prototype={
$0(){return this.a.QL(0,this.b)},
$S:0}
C.cRi.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cRj.prototype={
$0(){return B.d.gH(D.Aq)},
$S:z+14}
C.cRk.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bS(0,new A.D(d,new A.bP(new A.n(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.m),B.bm,w,w),w),0,0,0)},
$S:2287}
C.dah.prototype={
$1(d){return this.a.l(new C.dag(this.b,this.c))},
$S:9}
C.dag.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.daG.prototype={
$1(d){return this.a.l(new C.dat())},
$S:2}
C.dat.prototype={
$0(){},
$S:0}
C.daH.prototype={
$1(d){return this.a.l(new C.das())},
$S:2}
C.das.prototype={
$0(){},
$S:0}
C.daI.prototype={
$0(){var w=this.a
return w.l(new C.dar(w,this.b))},
$S:0}
C.dar.prototype={
$0(){var w=this.a
return w.d=w.goC().Gt(this.b.a)},
$S:0}
C.daJ.prototype={
$0(){var w=this.a
return w.l(new C.daq(w,this.b))},
$S:0}
C.daq.prototype={
$0(){var w=this.a
return w.d=w.goC().cQ0(this.b)},
$S:0}
C.daK.prototype={
$1(d){return this.a.l(new C.dap())},
$S:2}
C.dap.prototype={
$0(){},
$S:0}
C.daL.prototype={
$0(){var w=this.a
return w.l(new C.dao(w,this.b))},
$S:0}
C.dao.prototype={
$0(){var w=this.a
return w.d=w.goC().cQ5(this.b.a)},
$S:0}
C.daM.prototype={
$1(d){var w=this.a
return w.l(new C.daB(w,d))},
$S:6}
C.daB.prototype={
$0(){var w=this.a
return w.d=w.goC().cR_(this.b)},
$S:0}
C.daN.prototype={
$1(d){var w=this.a
return w.d=w.goC().aGS(d)},
$S:2}
C.daO.prototype={
$1(d){var w=this.a
return w.d=w.goC().cQ8(d)},
$S:2}
C.daQ.prototype={
$1(d){var w=this.a
return w.d=w.goC().cQY(d)},
$S:2}
C.daR.prototype={
$1(d){var w=this.a
return w.l(new C.daA(w,d))},
$S:9}
C.daA.prototype={
$0(){var w=this.a
return w.d=w.goC().cQP(this.b)},
$S:0}
C.daS.prototype={
$0(){var w=this.a,v=w.goC(),u=B.a.i(w.gze(0).a.a),t=B.a.i(w.gaE2().a.a)
u=v.bgJ(B.a.i(w.gatz().a.a),t,u)
A.a8(this.b,!1).N(u)
return null},
$S:0}
C.bTf.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bT9.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bT8(w,d))},
$S:12}
C.bT8.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bTi.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bTa.prototype={
$0(){var w=this.a
w.Q=D.b3c
w.aeE(1)
w.r.x=null},
$S:0}
C.bTb.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b3c)return
w=new A.e_()
w.cU(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.d8z[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bTe.prototype={
$0(){var w=this.a
w.Q=D.aeF
w.aeE(2)
w.r.z=null},
$S:0}
C.bTd.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hPO
t.aeE(3)
w=t.r
w.d=s
w.x="I say: "+t.gCN()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.dfn[v.aw(4)]:D.dBa[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bTg.prototype={
$0(){var w=this.a
w.Q=D.b3d
w.CW=this.b
w.cy=1
w.aeE(4)
w.r.f=w.f.a+5},
$S:0}
C.bTh.prototype={
$0(){},
$S:0}
C.bTc.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.bT6.prototype={
$0(){return this.a.Lt(this.b)},
$S:0}
C.bT7.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.bUM.prototype={
$0(){var w=this
return w.a.RE(w.b,0,w.c,w.d)},
$S:0}
C.bUN.prototype={
$0(){var w=this
return w.a.RE(w.b,3,w.c,w.d)},
$S:0}
C.bUO.prototype={
$0(){var w=this
return w.a.RE(w.b,1,w.c,w.d)},
$S:0}
C.bUP.prototype={
$0(){var w=this
return w.a.bVg(w.b,w.c,w.d)},
$S:0}
C.bUQ.prototype={
$0(){var w=this
return w.a.RE(w.b,4,w.c,w.d)},
$S:0}
C.bUR.prototype={
$0(){var w=this
return w.a.RE(w.b,2,w.c,w.d)},
$S:0}
C.bUS.prototype={
$0(){var w=this
return w.a.RE(w.b,5,w.c,w.d)},
$S:0}
C.bUT.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:780}
C.bUL.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a7k[d],p=q.a.a5(0,new A.r(0,-q.b*1.2*124)),o=A.fs(r,B.cw,r,3,r,A.cR(r,r,r,r,r,r,r,r,r,D.fBB,e),B.a7,B.bW,r,B.dD,B.bX)
o.nD(130)
w=o.b.a.c
w=p.aJ(0,new A.r(0,w.gb9(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bu(A.bY(w,v.gb9(v)+12,u+18),B.ie)
u=this.a
v=t.eE(B.dQ)
w=$.R()
s=A.L()
s.r=B.dE.gp(0)
u.aq(v,s)
s=A.L()
s.r=D.qC.gp(0)
u.aq(t,s)
w=new A.aG(w.r,B.aj,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.by())
v=A.L()
v.r=D.qC.gp(0)
u.af(w,v)
o.a2(u,new A.r(t.a+9,t.b+6))},
$S:805}
C.bTw.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.bTx.prototype={
$2(d,e){var w=this.a,v=B.o.aQ(w.anm(d),w.anm(e))
if(v!==0)return v
return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.fzi.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.ham.prototype={
$2(d,e){if(e!=null)J.c6(this.a.c_(0,d,new C.han()),e)},
$S:z+64}
C.han.prototype={
$0(){return A.a([],x.J)},
$S:z+74}
C.hao.prototype={
$1(d){return d!==this.a},
$S:3}
C.hap.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.haq.prototype={
$1(d){return d!==this.a&&!B.d.aS(this.b,new C.hal(this.c,d))},
$S:3}
C.hal.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.har.prototype={
$1(d){return d!==this.a},
$S:3}
C.has.prototype={
$1(d){return d!==this.a},
$S:3}
C.hat.prototype={
$1(d){return d!==this.a&&!B.d.aS(this.b,new C.hak(this.c,d))},
$S:3}
C.hak.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fMV.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.h0L.prototype={
$1(d){return d.Q},
$S:z+15}
C.h0M.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fIJ.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fPL.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bOh.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.haN.prototype={
$2(d,e){return B.o.aQ(C.hDW(d),C.hDW(e))},
$S:255}
C.haO.prototype={
$1(d){return d!==this.a},
$S:3}
C.h1n.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bMq.prototype={
$0(){var w=this.a
w.ch=!0
w.bad()},
$S:0}
C.bMl.prototype={
$0(){},
$S:0}
C.bMr.prototype={
$1(d){return d.f<=0},
$S:z+28}
C.bMj.prototype={
$0(){},
$S:0}
C.bMk.prototype={
$0(){},
$S:0}
C.bMp.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b4(u,u,u,new C.beb(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.v.j(0.7)
v=A.m(14)
s.push(A.ao(u,A.o(u,A.c(t.dy,u,u,u,u,u,u,D.fJk,B.K,u,u),B.f,u,u,new A.n(w,u,u,v,u,u,B.m),u,u,u,u,B.bT,u,u,u),u,u,14,14,6,u))}return A.ay(B.c1,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bMm(t,e),u,u,u,u,u,u,u,new C.bMn(t,e),u,u,u,u,u,u,u,u,u,new C.bMo(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bMm.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bMo.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:23}
C.bMn.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bMi.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.csg.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.csh.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.csf(w))},
$S:0}
C.csf.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.csi.prototype={
$0(){var w=this,v=w.a
v.gj1()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.csj.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.csk.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.csl.prototype={
$0(){},
$S:0}
C.csm.prototype={
$0(){var w=this.a
w.z=w.XR(++w.e)
w.Q=A.c1(w.gkS()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.csc.prototype={
$0(){return A.a8(this.a,!1).hY()},
$S:0}
C.csd.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj1().length,e=i/2,d=new C.cse(i,f,h),a0=g.as,a1=A.a4(a0).k("b8<2>")
a0=A.B(new A.b8(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.c7(new A.he(a0),new C.cs7(g,new A.r(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj1().length!==0&&!B.d.q(g.gj1(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.R3(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cM(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new A.Nb(new C.cs8(g,u),new C.cs9(g,u),new C.csa(g,u),j,j,new A.bl("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.c(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.fn:B.be,j,j,j,j,j,j,j,j,13,j,j,B.F,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj1().length!==0&&!B.d.q(g.gj1(),-1)){a0=g.e+1>=g.gkS().length?"See my result":"Next family"
g=A.as(C.uB(a0,g.gqt(g),B.cV,B.jA,D.fI),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.XR(0):s).length))break
if(!B.d.q(g.gj1(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.XR(0)
o=s}else o=s
n=s[u]
n=A.e1(B.z,new C.R3(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.XR(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.re(new A.bt(0,p,t),new C.csb(),new A.ED(u,j,new C.R3(l.b,k,62,!1,j),new A.kO(0.25,new C.R3(m.b,k,62,!1,j),j),new A.kg(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,A.hHG(),!0,!0,j,j,j,j,j,j,!1,B.j_,j,new A.bl("chip-"+r,a0),w),B.b_,B.iY,j,new A.bl("t"+r+"-"+q,a0),v))}++u}g=A.bZ(B.fQ,a1,B.br,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:68}
C.cse.prototype={
$1(d){return new A.r(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:546}
C.cs7.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.d()}v.push(r==null?0:r)}w=t.gj1().length!==0&&!B.d.q(t.gj1(),-1)
return A.b4(p,p,p,new C.bdD(q.b,o,v,w,p),B.az)},
$S:59}
C.cs9.prototype={
$1(d){return this.a.gj1()[this.b]===-1},
$S:2289}
C.csa.prototype={
$1(d){return this.a.cTR(this.b,d.a)},
$S:2290}
C.cs8.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj1()[t]!==-1,r=A.m(18),q=e.length!==0?B.cV.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.cV:B.k7,B.r,2)
u=s?A.lH(new C.cs6(),A.as(new C.R3(u.gaGk()[u.gj1()[t]].b,u.gaGk()[u.gj1()[t]].a,62,!1,v),v,v,v),B.nx,B.iY,v,v,new A.bt(0.3,1,x.X),x.i):D.bet
return A.cT(v,u,v,v,B.b_,new A.n(q,v,w,r,v,v,B.m),B.a3,v,100,v,v,v,v,v,88)},
$S:2291}
C.cs6.prototype={
$3(d,e,f){return A.e1(B.z,f,e,null,null)},
$S:115}
C.csb.prototype={
$3(d,e,f){return A.dO(f,new A.r(Math.sin(e*24)*8*(1-e),0))},
$S:115}
C.cSm.prototype={
$1(d){return d>=1},
$S:121}
C.cHd.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkS()[w.e].d.length)w.l(new C.cHc(w))},
$S:12}
C.cHc.prototype={
$0(){return this.a.f++},
$S:0}
C.cHl.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cHm.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cHn.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cHk(w))},
$S:0}
C.cHk.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cHo.prototype={
$0(){return this.a.f++},
$S:0}
C.cHp.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cHq.prototype={
$0(){},
$S:0}
C.cHr.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cHf.prototype={
$0(){return A.a8(this.a,!1).hY()},
$S:0}
C.cHg.prototype={
$3(d,e,f){var w=null
return A.lH(new C.cHe(this.a,e),w,B.b_,B.hH,w,w,new A.bt(w,this.b,x.X),x.i)},
$S:2292}
C.cHe.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cV.j(u.as?0.6:0.15)
t=A.a([new A.ab(0,B.H,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.o(v,A.i6(new A.BP(new A.uV(B.v.j(e),B.MD,v,B.Zj),A.bZ0(A.b4(v,v,v,new C.aCr(u.gkS()[u.e].c,u.as,v),B.az),new A.EI(w,w,B.Xb)),v),B.aq),B.f,v,v,new A.n(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:2293}
C.cHh.prototype={
$3(d,e,f){return A.d0(A.dO(f,new A.r(0,14*(1-e))),e)},
$S:108}
C.cHi.prototype={
$3(d,e,f){return A.dO(f,new A.r(Math.sin(e*22)*8*(1-e),0))},
$S:115}
C.cHj.prototype={
$0(){return this.a.brn(this.b)},
$S:0}
C.fbB.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.anT$)
v.anT$=w
v.qh$.sp(0,w)
v.arN(u)},
$S:7}
C.flR.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:12}
C.bUh.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bUg())},
$S:0}
C.bUg.prototype={
$0(){},
$S:0}
C.bUe.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bUc.prototype={
$0(){},
$S:0}
C.bUd.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gNa()
w=s+1>=r.length?3:5
break
case 3:q=C.bHX(p.gaqD(0),0,r.length)
p.l(new C.bU9(p,q))
o=p
w=6
return A.b(C.C0(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.C1(s.d,s.c.a,"school",p.gaqD(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.l(new C.bUa())
w=4
break
case 5:p.l(new C.bUb(p))
p.gqB().Wp(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bU9.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bUa.prototype={
$0(){},
$S:0}
C.bUb.prototype={
$0(){return this.a.x++},
$S:0}
C.bUf.prototype={
$0(){return this.a.Lt(this.b)},
$S:0}
C.bU8.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.fbC.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.r(t,s),q=v.b,p=v.d,o=p?C.hHU(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.EX
C.SY(q,D.evZ,0,0.2,-0.6,-0.2,null,w,D.euI,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a5(0,new A.r(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.R()
p=A.L()
p.r=D.H_.gp(0)
p.c=3
p.d=B.bG
q.ah(new A.r(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.fbD.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.SY(this.a,D.ev4,0,u,0.7,-0.5,null,null,D.Ki,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.fbE.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.SY(this.a,D.ewM,0,0,0.8,-0.5,null,null,D.Ki,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.fbF.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.SY(w.b,D.evT,0,v,-0.8,-0.5,null,null,D.Ki,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.fbG.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.r(34,-122+Math.sin(w*5)*5)
else v=v?D.evX:D.EX
C.SY(p,D.evn,0,t,0,-0.6,null,v,D.Ki,3,0,s,1.3,u,0,w,0)
q=q.ce1(new A.r(222,455),9)
$.R()
w=A.L()
w.r=B.cV.gp(0)
p.af(q,w)},
$S:0}
C.fbH.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:780}
C.bTV.prototype={
$2(d,e){return d+e},
$S:70}
C.bU5.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bU6.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bU7.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj1()[u.b]=s
t.gj1()[u.d]=t.y
w=t.as
v=t.qh$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bU1.prototype={
$1(d){return d},
$S:105}
C.bU0.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qh$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bU2.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bU3.prototype={
$0(){},
$S:0}
C.bU4.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FW(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.cd(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a8(0)},
$S:0}
C.bTX.prototype={
$0(){return A.a8(this.a,!1).hY()},
$S:0}
C.bTY.prototype={
$2(d,e){var w=this.a
w=w.gkS()[w.f].e
return B.o.aQ(w[d],w[e])},
$S:70}
C.bTZ.prototype={
$2(d,e){var w=null,v=C.hiC(new A.au(A.aS(1/0,e.a,e.b),A.aS(1/0,e.c,e.d))),u=this.a
return A.ay(B.c1,new A.e6(A.b4(w,w,w,new C.bkR(u,u.qh$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bTW(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bTW.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj1().length
u=B.o.D(B.i.be((t.a-s.a)/r/450*v),0,v-1)
w.d3K(w.gj1()[u])}},
$S:23}
C.bU_.prototype={
$1(d){var w=this.a
return w.gkS()[w.f].d[d]},
$S:80}
C.duc.prototype={
$2(d,e){return 0},
$S:70}
C.bTH.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bTG())},
$S:0}
C.bTG.prototype={
$0(){},
$S:0}
C.bTF.prototype={
$0(){},
$S:0}
C.bTz.prototype={
$0(){},
$S:0}
C.bTA.prototype={
$0(){},
$S:0}
C.bTE.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.BK},
$S:0}
C.bTD.prototype={
$1(d){var w=null,v=this.a.gqB(),u=A.c(d,w,w,w,w,w,w,D.aXy,w,w,w),t=v.gbnO(0)
return A.ay(B.c1,A.x(A.a([u,B.bC,A.c(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aXL,w,w,w)],x.p),B.B,w,B.e,B.h,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbtK(v),w,w,w,w,w,w,!1,B.a4)},
$S:146}
C.bTB.prototype={
$0(){return this.a.Lt(this.b)},
$S:0}
C.bTC.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.bTy.prototype={
$0(){return A.a8(this.a,!1).hY()},
$S:0}
C.e4w.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e4x.prototype={
$1(d){return this.a},
$S:39}
C.e4y.prototype={
$0(){var w=this.a
return w.d=w.gTo().bgc(this.b)},
$S:0}
C.e4u.prototype={
$1(d){return new C.Uo(this.a,null)},
$S:z+30}
C.e4v.prototype={
$1(d){return d.a===this.a.a},
$S:z+31}
C.e4t.prototype={
$1(d){var w=null,v=this.a.b
v=A.c('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hC,w,w,w)
return A.ek(A.a([A.bO(!1,B.aZ7,w,w,!0,w,w,w,new C.e4r(d),w,w),A.bO(!1,D.h3V,w,w,!0,w,w,w,new C.e4s(d),w,w)],x.p),w,w,D.fI,v,w,w,w,w,D.fRh,w)},
$S:18}
C.e4r.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e4s.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.e4q.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.U(A.b3(w,w,w,w,w,B.t,w,A.c(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e4z.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.v(w.h(0,d)):"NEW"},
$S:13}
C.e4A.prototype={
$0(){var w=this.a,v=this.b,u=C.bFE(v,10,w.r,!1)
return w.uH(C.hrN(w.a.d,"kahoot",u,w.gb7J(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e4B.prototype={
$0(){var w=this.a
return w.uH(new C.amH(this.b,w.a.d,w.r,null))},
$S:0}
C.e4C.prototype={
$0(){var w=this.a
return w.uH(new C.akR(this.b,w.a.d,w.r,null))},
$S:0}
C.e4F.prototype={
$0(){var w=this.a
return w.uH(new C.avK(this.b,w.a.d,w.r,null))},
$S:0}
C.e4G.prototype={
$0(){var w=this.a
return w.uH(new C.azG(this.b,w.a.d,w.r,null))},
$S:0}
C.e4H.prototype={
$0(){var w=this.a
return w.uH(new C.amK(this.b,w.a.d,w.r,null))},
$S:0}
C.e4I.prototype={
$0(){var w=this.a
return w.uH(new C.amO(this.b,w.a.d,w.r,null))},
$S:0}
C.e4J.prototype={
$0(){var w=this.a
return w.uH(new C.amQ(this.b,w.a.d,w.r,null))},
$S:0}
C.e4K.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d44()
return v.uH(C.hrN(v.a.d,"creator_"+u.a,w,v.gb7J(),"A game by the family",t,this.c.a))},
$S:0}
C.e4L.prototype={
$0(){return this.a.Pg(this.b)},
$S:0}
C.e4M.prototype={
$0(){return this.a.Yi(0,this.b)},
$S:0}
C.e4D.prototype={
$0(){return this.a.Pg(null)},
$S:0}
C.e4E.prototype={
$0(){return this.a.L(x.q).f.U(D.fuu)},
$S:0}
C.bTT.prototype={
$0(){var w=this.a
w.d=D.b2B
w.z=3},
$S:0}
C.bTU.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aQN()}else w.l(new C.bTS(w))},
$S:12}
C.bTS.prototype={
$0(){return this.a.z--},
$S:0}
C.bTJ.prototype={
$0(){var w=this.a
w.d=D.ael
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bTK.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bTI(w))
if(w.as<=0){d.a1(0)
w.b7F(-1)}},
$S:12}
C.bTI.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bTP.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.XS},
$S:0}
C.bTQ.prototype={
$0(){return this.a.e++},
$S:0}
C.bTM.prototype={
$0(){var w=this.a
w.d=D.b2C
w.ay=this.b},
$S:0}
C.bTN.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bTR.prototype={
$2(d,e){return B.o.aQ(e.b,d.b)},
$S:2294}
C.bTO.prototype={
$0(){return this.a.Lt(this.b)},
$S:0}
C.bTL.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.bTj.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ax()
s=A.a([new A.at(new A.bd(s,B.b8,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.at(new A.bd(u,B.b8,B.aP),r))}return s},
$S:2295}
C.bTk.prototype={
$0(){return this.a.gDn().c.push(C.hcq(null,0,20,""))},
$S:0}
C.bTu.prototype={
$1(d){var w=null
return A.bA(w,new A.b6(4,A.m(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dq,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.Ft,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:267}
C.bTt.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gDn().c,m=this.b,l=n[m],k=o.ch9(l),j=B.c.j(0.06),i=A.m(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.c("Question "+(m+1),p,p,p,p,p,p,D.LB,p,p,p),B.aY],g)
if(n.length>1)f.push(A.aH(p,p,p,p,B.at9,p,p,p,new C.bTo(o,m),p,p,p,p,p,p))
n=J.a6(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.h,0,p,p),A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bTp(l),p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.dl,!0,B.a7,p,B.ao,p,p,p,p),B.P],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aFa[v]
t=D.aER[v]
s=v+1
f.push(new A.D(B.eJ,new A.c3(B.aL,B.e,B.h,B.l,p,B.p,p,0,A.a([A.c(u,p,p,p,p,p,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.aa,new A.bx(1,B.ba,A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bTq(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.dl,!0,B.a7,p,B.ao,p,p,p,p),p),new U.PE(v,l.c,new C.bTr(o,l),p,!1,D.lN,p,p,p,p,p,!1,!1,p,E.b30,p,p,p,p,p,w)],g),p),p))}f.push(D.fWV)
f.push(B.al)
n=A.a([D.fQl,B.aa],g)
for(r=0;r<3;++r){q=D.ci2[r]
n.push(new A.D(B.f5,A.jA(p,p,p,A.c(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bTs(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.h,0,p,p))
return A.o(p,A.x(f,B.B,p,B.e,B.h,0,B.p),B.f,p,p,new A.n(j,p,h,i,p,p,B.m),p,p,p,B.kG,B.bl,p,p,p)},
$S:164}
C.bTo.prototype={
$0(){var w=this.a
return w.l(new C.bTn(w,this.b))},
$S:0}
C.bTn.prototype={
$0(){return B.d.cH(this.a.gDn().c,this.b)},
$S:0}
C.bTp.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bTq.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bTr.prototype={
$1(d){return this.a.l(new C.bTm(this.b,d))},
$S:162}
C.bTm.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bTs.prototype={
$1(d){return this.a.l(new C.bTl(this.b,this.c))},
$S:9}
C.bTl.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e6b.prototype={
$0(){var w=this.a
w.wE()
w.a.bv()
w.a.qu()},
$S:0}
C.e6a.prototype={
$0(){var w=this.a
w.wE()
w.a.bv()
w.a.qu()},
$S:0}
C.e6d.prototype={
$0(){var w=this,v=w.b
if(J.cK(v)||J.cu(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e6e.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e6f.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e69.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e6c.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e6h.prototype={
$0(){this.a.PC()
return null},
$S:0}
C.e6g.prototype={
$0(){return this.a.Ff(this.b)},
$S:0}
C.e5C.prototype={
$1(d){var w=null,v=this.a,u=A.c(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.c(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bO(!1,B.dp,w,w,!0,w,w,w,new C.e5A(d),w,w),r=A.bn(B.bQ,w,w,w,w,w,w,w,w,w,w,w)
return A.ek(A.a([s,A.bJ(A.c(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e5B(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e5A.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e5B.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.e5D.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.cQu(this.b)},
$S:0}
C.e5x.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aWq(w.b,w.c,w.d)},
$S:7}
C.e4Z.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e5_.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e5g.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.HA(t.a.c),$async$$0)
case 2:s=r.nA(q.dI(e,new C.e5e(t)))
if(s!=null&&t.c!=null)t.l(new C.e5f(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e5e.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e5f.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e5h.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e5i.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e5w.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=this.b
v.d=u.cRg(C.hI3(w),w)},
$S:0}
C.e5d.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.d()
w=v.a.c
return new C.WK(u,w,C.aS0(u,w),new C.e5c(v),null)},
$S:z+35}
C.e5c.prototype={
$1(d){return this.bpc(d)},
bpc(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.l(new C.e5b(s,d))
w=3
return A.b(s.uD(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:669}
C.e5b.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.bgc(this.b)},
$S:0}
C.e5t.prototype={
$1(d){return d.as},
$S:z+1}
C.e5u.prototype={
$1(d){var w=this
return new A.e0(new C.e5s(w.a,w.b,w.c,w.d,w.e),null)},
$S:21}
C.e5s.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.ej:B.c,h=A.m(26),g=A.K(B.bQ.j(0.5),B.r,1.5),f=A.o(k,D.bXu,B.f,k,k,new A.n(B.bQ.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.c("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.d()
w=x.p
a0=A.E(A.x(A.a([e,A.c(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bu:B.bi,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.B,k,B.e,B.h,0,B.p),1)
f=A.A(A.a([f,B.bb,a0,A.aH(k,k,k,k,A.W(B.cB,j?B.bu:B.bi,k,k,k,k),k,k,k,new C.e5m(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.h,0,k,k)
e=A.c("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bi,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bQ:B.bQ.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.av(B.bQ,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bQ
a0.push(A.ay(k,A.cT(k,A.c(m,k,k,k,k,k,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b_,new A.n(q,k,new A.bE(n,n,n,n),new A.bc(p,p,p,p),k,k,B.m),B.hi,k,k,k,k,B.CZ,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e5n(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bZ(B.bI,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c8N,new A.D(D.bHw,f,k),new A.D(D.bHn,e,k),new A.D(B.tm,a0,k),new A.D(I.aos,A.c(v,k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bi,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.W(Y.ar4,j?B.bu:B.bi,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bHp,A.A(A.a([a0,B.ar,A.E(A.c(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,k,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.ayp(k,B.bQ,k,k,!1,B.y,k,k,k,k,k,k,new C.e5o(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.h,0,k,k),k))}f.push(B.aA)
j=A.m(20)
e=A.a([new A.ab(0,B.H,B.aD.j(0.35),B.hP,12)],x.V)
f.push(A.ay(k,A.o(k,A.A(A.a([D.fQH,B.bb,D.bLS,D.bY9],w),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.n(k,k,k,j,e,D.ccC,B.m),k,k,k,B.i8,B.bH,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e5p(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.wX,A.A(A.a([A.E(A.dU(B.dp,new C.e5q(a1),k),1),B.ar,A.E(A.bJ(F.aZy,k,new C.e5r(t,a1),A.bn(B.bQ,k,k,k,k,k,B.cm,k,k,k,k,k)),1)],w),B.l,k,B.e,B.h,0,k,k),k))
return A.bm(!0,A.o(k,A.cc(A.x(f,B.B,k,B.e,B.M,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.aq,k,k,new A.n(i,k,g,h,k,k,B.m),k,k,k,B.zg,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:93}
C.e5m.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e5n.prototype={
$0(){return this.b.$1(new C.e5l(this.a,this.c))},
$S:0}
C.e5l.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e5o.prototype={
$1(d){var w=this.a
w.l(new C.e5j(w,d))
this.b.$1(new C.e5k())},
$S:9}
C.e5j.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e5k.prototype={
$0(){},
$S:0}
C.e5p.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(new A.aID(!0,w))
return null},
$S:0}
C.e5q.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e5r.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(new A.aID(!1,w))
return null},
$S:0}
C.e5v.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cR4(this.b.b)
w.r.a8(0)},
$S:0}
C.e4N.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.d()
s=C.ajB(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hB4(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e4O.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aGP(w)},
$S:0}
C.e5F.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return new C.aeW(this.b,w,this.c,null)},
$S:z+37}
C.e5z.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.ej:B.c,t=A.m(20),s=A.W(B.l4,B.aU,w,w,w,36),r=A.c("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.c(p,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bi,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.c("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bi,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.M,0,B.p)
return A.ek(A.a([A.bJ(D.h7J,w,new C.e5y(d),A.bn(B.aU,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e5y.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e4P.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e4Q.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e4R.prototype={
$1(d){return d.a},
$S:z+8}
C.e4S.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.d()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.i7(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aGP(w)},
$S:0}
C.e4W.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.d()
q=C.ajB(q)
w=A.T(q).k("Y<1>")
q=A.B(new A.Y(q,new C.e4U(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hB4(v.e,null,r,v.f,v.r,new C.e4V(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e4V.prototype={
$0(){return this.a.abO(this.b)},
$S:0}
C.e4U.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e4X.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.f
v=A.T(w).k("N<1,i7>")
w=A.B(new A.N(w,new C.e4T(this.b),v),v.k("ak.E"))
u.d=t.aGP(w)},
$S:0}
C.e4T.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+39}
C.e5E.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e58.prototype={
$1(d){return d.length!==0},
$S:3}
C.e59.prototype={
$1(d){var w=this
return new A.e0(new C.e57(w.a,w.b,w.c,w.d),null)},
$S:21}
C.e57.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.ej:B.c,r=A.c("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aS:B.aw,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.c("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bi,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.c("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bi,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.N(o,new C.e53(u,e,o),A.T(o).k("N<1,w>")))
p.push(B.P)
u=w.d
p.push(A.aN(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.m(12),B.du),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mI,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a7,v,B.ao,v,v,v,v))
p=A.x(p,B.am,v,B.e,B.M,0,B.p)
t=w.a
return A.ek(A.a([A.bO(!1,B.dp,v,v,!0,v,v,v,new C.e54(d),v,v),A.bJ(B.LK,v,new C.e55(t,u,o,e),A.bn(B.bQ,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.fVg,v,new C.e56(t,u,o,d),A.bn(B.aU,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:229}
C.e53.prototype={
$1(d){var w=null
return A.dJ(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.c5B,w,w,w,new C.e52(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:2296}
C.e52.prototype={
$0(){return this.a.$1(new C.e50(this.b,this.c))},
$S:0}
C.e50.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e54.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e55.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e51(w.c,u))
v.bN(0,B.ch)}},
$S:0}
C.e51.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e56.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a8(w.d,!1).N(!0)},
$S:0}
C.e5a.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cRJ(this.b,D.v6,C.Hy(v,w.a.c))},
$S:0}
C.e5M.prototype={
$1(d){return d.as},
$S:z+1}
C.e5N.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j5(this.b,w)},
$S:0}
C.e5O.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
v=C.iyg(v)
return w.X5(v==null?null:v.a)},
$S:0}
C.e5P.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.d()
w=l.r
v=C.i9Q(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcn(k)){k=A.aS(1/0,e.a,e.b)
s=A.aS(1/0,e.c,e.d)
l.cyM(new A.au(u,t),v.gbmU(),new A.au(k,s))}k=A.m(22)
s=this.b.a
r=s?D.d6k:D.d4o
q=A.K(s?B.dq:D.bmn,B.r,1)
p=A.m(22)
o=A.bS(0,A.b4(m,m,m,new C.bgW(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.o(m,A.bv(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bS(0,A.v7(new A.P(n,n,n,n),new A.a5(u,t,new C.bhS(l.d,v,l.f,w,new C.e5I(l),l.gcil(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bzP(s,new C.e5J(l,e),new C.e5K(l,e),new C.e5L(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.n(m,m,q,k,m,new A.a7(B.aX,B.b1,B.x,r,m,m),B.m),m,m,m,B.anu,m,m,m,m)},
$S:173}
C.e5I.prototype={
$1(d){var w=this.a
w.l(new C.e5G(w,d))},
$S:2}
C.e5G.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.I(0,v)},
$S:0}
C.e5J.prototype={
$0(){var w=this.b
return this.a.bek(1.25,new A.au(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e5K.prototype={
$0(){var w=this.b
return this.a.bek(0.8,new A.au(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e5L.prototype={
$0(){var w=this,v=w.b
return w.a.aWq(new A.au(A.aS(1/0,v.a,v.b),A.aS(1/0,v.c,v.d)),new A.au(w.c,w.d),w.e.gbmU())},
$S:0}
C.e5Q.prototype={
$0(){var w=this.a
return w.l(new C.e5H(w))},
$S:0}
C.e5H.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e4Y.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.d()
w=2
return A.b(A.fI(new A.fy(s.c)),$async$$0)
case 2:t.yF("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.djz.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.blI(u,C.hMK(v.c,u),new C.djy(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+40}
C.djy.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.djA.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bp3(d.d,d.c,u.f.q(0,d.a),new C.djx(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+41}
C.djx.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fMl.prototype={
$1(d){var w,v=d.e
if(this.a.an(0,v))return v
v=this.b
w=A.T(v)
return A.nA(new A.cL(new A.Y(v,new C.fMm(d),w.k("Y<1>")),new C.fMn(),w.k("cL<1,q>")))},
$S:z+19}
C.fMm.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fMn.prototype={
$1(d){return d.a},
$S:z+8}
C.fMj.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fMk.prototype={
$1(d){return d.b},
$S:z+8}
C.fMq.prototype={
$1(d){var w,v=d.e
if(this.a.an(0,v))return v
v=this.b
w=A.T(v)
return A.nA(new A.cL(new A.Y(v,new C.fMr(d),w.k("Y<1>")),new C.fMs(),w.k("cL<1,q>")))},
$S:z+19}
C.fMr.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fMs.prototype={
$1(d){return d.a},
$S:z+8}
C.fMo.prototype={
$1(d){var w,v=A.ew([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.an(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+43}
C.fMp.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.djC.prototype={
$0(){return this.a},
$S:z+44}
C.djT.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.an(0,d)},
$S:242}
C.djL.prototype={
$2(d,e){var w=this.a.c_(0,d,new C.djM()),v=J.a6(w)
if(!v.q(w,e))v.I(w,e)},
$S:128}
C.djM.prototype={
$0(){return A.a([],x.s)},
$S:665}
C.djK.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eC(w,e)
return w===!0},
$S:259}
C.djD.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.djJ.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.djI.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.I(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aT(v==null?D.Ef:v)
u=1
while(v.C())u+=s.$2(v.gP(v).a,e)
v=s.b.h(0,d)
v=J.aT(v==null?B.Z:v)
while(v.C()){t=v.gP(v)
if(e.q(0,t))continue
e.I(0,t)
t=w.h(0,t)
t=J.aT(t==null?D.Ef:t)
while(t.C())u+=s.$2(t.gP(t).a,e)}return u},
$S:2298}
C.djE.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.djN.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.I(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aT(u==null?B.Z:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gP(u)
if(a8.q(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.I(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.u(w,r)
if(u){t=t.h(0,s)
t=J.aT(t==null?D.Ef:t)
while(t.C()){r=t.gP(t)
if(r.a!==a9&&!B.d.aS(w,new C.djO(r)))w.push(r)}}B.d.bq(w,new C.djP(a8))
B.d.b_(w,new C.djQ())
q=C.i9P(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.f2A],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.I)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.y(-p,p)],x.G)
a8=x.n
k=A.a([],a8)
j=A.a([],a8)
for(a8=n.length,m=0;m<n.length;n.length===a8||(0,A.I)(n),++m){i=n[m]
if(k.length!==0){h=Math.min(j.length,i.length)
for(g=-1/0,f=0;f<h;++f){e=f===0?22:44
g=Math.max(g,j[f]+e-i[f].a)}}else g=0
k.push(g)
for(f=0;f<i.length;++f){d=g+i[f].b
if(f<j.length)j[f]=Math.max(j[f],d)
else j.push(d)}}a0=(B.d.gH(k)+B.d.gal(k))/2
a1=A.a([new A.y(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bsa(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:2299}
C.djO.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.djP.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.djQ.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.djR.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a6(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b8(v,A.a4(v).k("b8<2>")).cC(0,0,B.oq)+88-w.gH(n).a}else u=0
for(w=J.a6(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:735}
C.djS.prototype={
$1(d){return 16+d*156},
$S:157}
C.djB.prototype={
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
t.n(0,d,new C.GR(r,new A.r(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.GR(s,new A.r(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.GR(s,new A.r(e,v)))}t=o.r.h(0,d)
t=J.aT(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gP(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.L7(d,new A.r(e+t,w),s,s.length))}},
$S:197}
C.djF.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aLL(new A.r(v.a,v.b+28),new A.r(w.a,w.b+28),!0,null))},
$S:128}
C.djG.prototype={
$1(d){return d.a===this.a},
$S:z+45}
C.djH.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:612}
C.djU.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:612}
C.djV.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:398}
C.djW.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:203}
C.djX.prototype={
$1(d){return d>=0.5},
$S:121}
C.frs.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hd(A.aM(!1,v,!0,new A.a5(38,38,A.W(d,this.a.c?B.c:B.cu,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:2301}
C.f1m.prototype={
$1(d){var w=null,v=A.m(8),u=B.bQ.j(0.12),t=A.m(8)
return new A.D(B.na,A.aM(!1,v,!0,A.o(w,A.c("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fG7,B.K,w,w),B.f,w,w,new A.n(u,w,w,t,w,w,B.m),w,w,w,w,B.Pd,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f1l(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+46}
C.f1l.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dzW.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dzV.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.c("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nq,B.K,w,w)
return A.ek(A.a([A.bO(!1,B.dp,w,w,!0,w,w,w,new C.dzT(d),w,w),A.bO(!1,A.c("Delete",w,w,w,w,w,w,A.l(w,w,B.n0,w,w,w,w,w,w,w,w,w,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dzU(d),w,w)],x.p),B.b9,B.CU,w,u,D.bIr,w,D.bKq,new A.b9(v,B.a1),w,w)},
$S:18}
C.dzT.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dzU.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dA4.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dA5.prototype={
$1(d){var w=this.a
return w.l(new C.dA3(w,d))},
$S:z+47}
C.dA3.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dA6.prototype={
$1(d){var w=null
return A.qQ(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dA9.prototype={
$1(d){var w=this.a
return w.l(new C.dA2(w,d))},
$S:37}
C.dA2.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dA8.prototype={
$1(d){var w=null
return A.qQ(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dAa.prototype={
$1(d){var w=this.a
return w.l(new C.dA1(w,d))},
$S:37}
C.dA1.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dAb.prototype={
$0(){var w=this.a
return w.l(new C.dA0(w))},
$S:0}
C.dA0.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dAc.prototype={
$0(){var w=this.a
return w.l(new C.dA_(w))},
$S:0}
C.dA_.prototype={
$0(){return++this.a.at},
$S:0}
C.dAd.prototype={
$0(){var w=this.a
return w.l(new C.dzZ(w))},
$S:0}
C.dzZ.prototype={
$0(){return--this.a.ax},
$S:0}
C.dAe.prototype={
$0(){var w=this.a
return w.l(new C.dzY(w))},
$S:0}
C.dzY.prototype={
$0(){return++this.a.ax},
$S:0}
C.dAf.prototype={
$1(d){var w=this.a
return w.l(new C.dzX(w,d))},
$S:9}
C.dzX.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dA7.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dAg.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bQ.j(0.18)
else w=q.c.a?B.ej:B.c
v=A.m(12)
if(p)u=B.bQ
else u=(q.c.a?B.el:B.bO).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bQ
else t=q.c.a?B.bu:B.bi
t=A.W(f,t,r,r,r,18)
if(p)s=B.bQ
else s=q.c.a?B.bu:B.bi
return A.E(A.aF(!1,B.a3,!0,r,A.aM(!1,o,!0,A.cT(r,A.x(A.a([t,B.au,A.c(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.h,0,B.p),r,r,B.b_,new A.n(w,r,u,v,r,r,B.m),B.eI,r,r,r,r,B.jQ,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dAh(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+49}
C.dAh.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dAq.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.cgM.prototype={
$2(d,e){return new A.bB(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:106}
C.cgT.prototype={
$1(d){return d.ak()},
$S:z+5}
C.cgU.prototype={
$2(d,e){var w=J.ba(e,new C.cgS(),x.a)
w=A.B(w,w.$ti.k("ak.E"))
return new A.bB(d,w,x.d2)},
$S:z+51}
C.cgS.prototype={
$1(d){return d.ak()},
$S:z+12}
C.cgO.prototype={
$1(d){return C.amT(A.a1(d,x.N,x.z))},
$S:z+9}
C.cgP.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cgQ.prototype={
$1(d){return C.hrM(A.a1(d,x.N,x.z))},
$S:z+11}
C.cgR.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cgY.prototype={
$1(d){return new A.aIP(d.f.length,d.a,d.b)},
$S:z+53}
C.cgZ.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:524}
C.cgV.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cgW.prototype={
$1(d){return d.cQH(C.Hy(d,this.a))},
$S:z+54}
C.e5Z.prototype={
$1(d){return C.uC(d,this.a.a.c)},
$S:z+3}
C.e6_.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e63.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e64.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e5W.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2m(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zf("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pG(r.c,r.e),$async$$0)
case 4:s.zf(p)
w=5
return A.b(s.Kv(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e5X.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2m(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zf("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pG(r.c,r.e),$async$$0)
case 4:s.zf(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e5Y.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.WN(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.zf("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.zf("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.zf("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Kv(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ac(j)
o=r.a
if(o.c==null){w=1
break}o.zf(B.a.el(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e62.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2l(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.zf("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a8(r,!1).cb(A.e9(new C.e61(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pG(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e61.prototype={
$1(d){var w=this.b
return new C.a11(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+83}
C.e60.prototype={
$1(d){return D.hLP},
$S:z+56}
C.e66.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e67.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e65(w,d)
return new A.D(B.d4,new C.bhW(this.b,d.c,d.a,w,null),null)},
$S:2302}
C.e65.prototype={
$0(){return this.a.YX(this.b.b)},
$S:0}
C.e5R.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e5S.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e5T.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e5U.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e5V.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e68.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.X(s,"NGMYFTSYNC2"))t=!A.cV(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a8(this.b,!1).N(s)
return}},
$S:161}
C.dS2.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+57}
C.dS3.prototype={
$0(){return B.d.gH(D.a7J)},
$S:z+58}
C.dS4.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.d()
t=t.x
t===$&&A.d()
v=v.e
v===$&&A.d()
v=v.x
v===$&&A.d()
return A.b4(A.as(A.W(this.b.d,B.c.j(0.95),w,w,D.dds,44),w,w,w),w,w,new C.bmQ(u,t,v,w),B.az)},
$S:59}
C.h2U.prototype={
$1(d){return A.oH(new C.h2T(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:130}
C.h2T.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.ej:B.c,p=A.a([new A.ab(0,B.H,B.v.j(r?0.35:0.08),B.tZ,24)],x.V),o=r?B.el:B.bO
o=A.o(t,t,B.f,t,t,new A.n(o,t,t,A.m(99),t,t,B.m),t,4,t,t,t,t,t,40)
w=A.a([B.aU.j(0.25),B.bQ.j(0.18)],x.O)
w=A.o(t,D.c_B,B.f,t,t,new A.n(t,t,t,A.m(12),t,new A.a7(B.a5,B.a9,B.x,w,t,t),B.m),t,40,t,t,t,t,t,40)
v=A.c("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aS:B.aw,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.o(t,A.x(A.a([B.S,o,new A.D(B.aow,A.A(A.a([w,B.bb,A.E(A.x(A.a([v,A.c("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bu:B.bi,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.B,t,B.e,B.h,0,B.p),1)],u),B.l,t,B.e,B.h,0,t,t),t),A.E(A.iC(!0,t,e,B.y,D.fsx,new C.h2S(this.b,s),20,B.ao1,t,B.ah,!1),1)],u),B.l,t,B.e,B.h,0,B.p),B.f,t,t,new A.n(q,t,t,B.ll,p,t,B.m),t,t,t,t,t,t,t,t)},
$S:123}
C.h2S.prototype={
$2(d,e){var w=null,v=D.a7J[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.K(s?B.el:B.bO,B.r,1),q=A.a([new A.ab(0,B.H,B.v.j(s?0.35:0.08),B.ez,8)],x.V),p=A.m(15),o=A.E(new C.a7S(v.a,!0,w),1),n=s?B.k5:B.iG,m=A.c(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aS:B.aw,w,w,w,w,w,w,w,w,13,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a3,!0,w,A.aM(!1,u,!0,A.eE(A.bv(p,A.x(A.a([o,A.o(w,A.x(A.a([m,A.c(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bu:B.bi,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.B,w,B.e,B.h,0,B.p),B.f,n,w,w,w,w,w,w,B.ke,w,w,w)],l),B.am,w,B.e,B.h,0,B.p),B.aq),w,new A.n(w,w,r,t,q,w,B.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.h2R(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:84}
C.h2R.prototype={
$0(){A.a8(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cqy.prototype={
$0(){return this.a.ai6(this.b)},
$S:0}
C.h2h.prototype={
$1(d){return D.hGj},
$S:z+59}
C.ha4.prototype={
$1(d){var w=this
return new C.a2Q(w.a,w.b,w.c,w.d,null)},
$S:z+60}
C.h2l.prototype={
$1(d){return new C.a_F(this.a,null)},
$S:z+61}
C.h2k.prototype={
$1(d){return D.hHk},
$S:z+62}
C.db3.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.db4.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.db2(w,d))},
$S:37}
C.db2.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.db5.prototype={
$1(d){return this.a.L8()},
$S:2}
C.db6.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.db_.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.db0.prototype={
$1(d){return this.a.L8()},
$S:2}
C.db1.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.cIV.prototype={
$0(){},
$S:0}
C.cJ0.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.cJ1.prototype={
$0(){return this.a.aRF(-1)},
$S:0}
C.cJ2.prototype={
$1(d){return this.a.l(new C.cJ_())},
$S:2}
C.cJ_.prototype={
$0(){},
$S:0}
C.cJ3.prototype={
$0(){return this.a.aRF(1)},
$S:0}
C.cJ4.prototype={
$1(d){return this.a.l(new C.cIZ())},
$S:2}
C.cIZ.prototype={
$0(){},
$S:0}
C.cJ5.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.c(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aU.j(0.2)
if(s)v=B.aU
else v=this.b.a?B.el:B.bO
return A.v_(u,u,B.b5,r,u,new C.cIY(t,d),B.x0,s,w,u,new A.av(v,1,B.r,-1),B.cl)},
$S:2303}
C.cIY.prototype={
$1(d){var w=this.a
return w.l(new C.cIW(w,this.b))},
$S:9}
C.cIW.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cJ6.prototype={
$1(d){return this.a.l(new C.cIX())},
$S:2}
C.cIX.prototype={
$0(){},
$S:0}
C.cJ7.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.fqY.prototype={
$1(d){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length!==0)A.a8(this.b,!1).N(w)},
$S:2}
C.fqZ.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.fr_.prototype={
$0(){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a8(this.b,!1).N(w)},
$S:0}
C.fqW.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=q.a
v=w.d
u=w.f
t=q.gbEe()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b4(new A.D(D.bKp,new A.e6(A.o(r,q.a.c,B.f,r,r,new A.n(r,r,r,s,r,r,B.m),r,r,r,r,w,r,r,r),r),r),new C.bzE(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:59}
C.fqX.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=B.dL.aB(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.ap(B.aU,B.bQ,w)
s.toString
s=A.a([B.b5,s,B.aU],x.O)
return A.aF(!1,B.a3,!0,p,A.aM(!1,v,!0,A.eE(D.eAx,r,new A.n(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a7(new A.df(-1.2+t,-0.5),new A.df(1.2-t,0.8),B.x,s,r,r),B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:148}
C.h0y.prototype={
$1(d){return A.v(d.h(0,1))+","},
$S:63}
C.eZw.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eZn.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eZo.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eZu.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.d()
w.a=v.c
return new A.e0(new C.eZt(w,this.b),null)},
$S:21}
C.eZt.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.ej:B.c,t=A.m(20),s=A.c("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eI(w,u,new A.D(B.aoq,A.x(A.a([s,B.al,A.c("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bi,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hxU(new C.eZq(r,e),r.a),B.aA,A.A(A.a([A.E(A.dU(B.dp,new C.eZr(d),w),1),B.ar,A.E(A.bJ(B.X5,w,new C.eZs(r,d),A.bn(B.aU,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.h,0,w,w)],q),B.am,w,B.e,B.M,0,B.p),w),w,w,w,w,w,B.d8,w,new A.b9(t,B.a1),w)},
$S:110}
C.eZq.prototype={
$1(d){return this.b.$1(new C.eZp(this.a,d))},
$S:37}
C.eZp.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eZr.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.eZs.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(w)
return null},
$S:0}
C.eZv.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.U2(this.b)},
$S:0}
C.eZi.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.bgi(w)},
$S:0}
C.eZm.prototype={
$1(d){return this.bpz(d)},
bpz(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Mq(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j5(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eZl.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.d
v=A.T(w).k("Y<1>")
w=A.B(new A.Y(w,new C.eZk(this.b),v),v.k("M.E"))
u.d=t.bgi(w)},
$S:0}
C.eZk.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eZx.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j5(this.b,w)},
$S:0}
C.eZy.prototype={
$1(d){return this.a.bIs(d,this.b)},
$S:z+65}
C.eZj.prototype={
$0(){return this.a.abN(this.b)},
$S:0}
C.h9S.prototype={
$1(d){return new C.afg(this.a,this.b,this.c,null)},
$S:z+66}
C.eZA.prototype={
$0(){return this.a.a0Z(this.b)},
$S:0}
C.eZB.prototype={
$0(){return this.a.Rh(this.b)},
$S:0}
C.eZC.prototype={
$0(){return this.a.Fa(this.b)},
$S:0}
C.eZD.prototype={
$0(){return this.a.a1_(this.b)},
$S:0}
C.eZz.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.eZd.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eZe.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eZf.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.eZh.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qA(),$async$$0)
case 2:if(t.c!=null)t.l(new C.eZg(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eZg.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.f__.prototype={
$2(d,e){return d+e.gxO()},
$S:z+69}
C.eZW.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eZX.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eZH.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.ej:B.c,s=A.m(24),r=A.o(v,D.c05,B.f,v,v,new A.n(B.aB.j(u?0.18:0.08),v,A.K(B.aB.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.c("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aS:B.aw,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.c("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bi,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.aw
u=u?B.el:B.bO
w=x.p
return A.eI(v,t,new A.D(B.x_,A.x(A.a([r,B.aO,q,B.P,p,B.dc,A.A(A.a([A.E(A.dU(B.ol,new C.eZF(d),A.dg(v,v,v,v,v,v,v,v,v,o,v,v,B.fa,v,new A.b9(A.m(14),B.a1),new A.av(u,1,B.r,-1),v,v,v,v)),1),B.ar,A.E(A.bJ(D.hbB,v,new C.eZG(d),A.bn(B.aB,v,v,v,v,v,B.fa,v,new A.b9(A.m(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.h,0,v,v)],w),B.l,v,B.e,B.M,0,B.p),v),v,v,v,v,v,B.d8,v,new A.b9(s,B.a1),v)},
$S:49}
C.eZF.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.eZG.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.eZQ.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.ej:B.c,i=A.m(28),h=A.a([new A.ab(0,B.H,B.v.j(k?0.35:0.08),B.fZ,28)],x.V),g=k?D.dkV:B.a71,f=x.p
g=A.o(m,A.x(A.a([A.o(m,m,B.f,m,m,new A.n(B.c.j(0.45),m,m,A.m(99),m,m,B.m),m,4,m,m,m,m,m,40),B.aA,D.flC,B.au,new A.bK(B.a5,m,m,A.c("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cF,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.h,0,B.p),B.f,m,m,new A.n(m,m,m,m,m,new A.a7(B.ay,B.aC,B.x,g,m,m),B.m),m,m,m,m,B.aou,m,m,1/0)
w=A.c("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bi,m,m,m,m,m,m,m,m,11,m,m,B.F,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b99(B.b2,B.jC,new C.eZN(v,d),l,"Camera import","Scan QR"),1),B.ar,A.E(v.b99(B.cD,B.A6,new C.eZO(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.h,0,m,m)
t=A.c("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bi,m,m,m,m,m,m,m,m,11,m,m,B.F,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aB.j(k?0.14:0.06)
q=A.m(16)
p=A.K(B.aB.j(0.28),B.r,1)
o=A.o(m,D.c_o,B.f,m,m,new A.n(B.aB.j(0.12),m,m,A.m(12),m,m,B.m),m,m,m,m,B.bT,m,m,m)
n=A.c("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aS:B.aw,m,m,m,m,m,m,m,m,m,m,m,B.F,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.c("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bi,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.B,m,B.e,B.h,0,B.p),1)
return A.bm(!0,new A.D(B.wU,A.o(m,A.x(A.a([g,new A.D(B.aor,A.x(A.a([w,B.S,u,B.bx,t,B.S,A.aF(!1,B.a3,!0,m,A.aM(!1,s,!0,A.o(m,A.A(A.a([o,B.bb,n,A.W(B.eL,k?B.bu:B.bi,m,m,m,m)],f),B.l,m,B.e,B.h,0,m,m),B.f,m,m,new A.n(r,m,p,q,m,m,B.m),m,m,m,m,B.bH,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eZP(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.B,m,B.e,B.h,0,B.p),m)],f),B.l,m,B.e,B.M,0,B.p),B.aq,m,m,new A.n(j,m,m,i,h,m,B.m),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:27}
C.eZN.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.we("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eZO.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.we("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eZP.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.OS(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eZL.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.ej:B.c,m=A.m(24),l=A.a([new A.ab(0,B.H,B.v.j(o?0.35:0.08),B.eS,24)],x.V),k=o?B.el:B.bO
k=A.o(q,q,B.f,q,q,new A.n(k,q,q,A.m(99),q,q,B.m),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bu:B.bi
u=A.bv(w,new A.a5(48,48,C.aTl(!0,A.m(12),48,B.PV,u,v.c,48),q),B.aq)
w=A.c(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aS:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bw(v.gxO())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wU,A.o(q,A.x(A.a([B.S,k,new A.D(D.aoo,A.A(A.a([u,B.bb,A.E(A.x(A.a([w,A.c(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bu:B.bi,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.B,q,B.e,B.h,0,B.p),1)],s),B.l,q,B.e,B.h,0,q,q),q),B.CN,r.csL(B.vr,B.aU,new C.eZJ(d),p,"QR code or backup file","Transfer project"),r.b67(!0,B.en,B.aB,new C.eZK(d),p,"Remove from this device","Delete project"),B.S],s),B.l,q,B.e,B.M,0,B.p),B.f,q,q,new A.n(n,q,q,m,l,q,B.m),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:27}
C.eZJ.prototype={
$0(){A.a8(this.a,!1).N("transfer")
return null},
$S:0}
C.eZK.prototype={
$0(){A.a8(this.a,!1).N("delete")
return null},
$S:0}
C.eZM.prototype={
$1(d){return this.bpA(d)},
bpA(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Mq(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wt(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f_2.prototype={
$0(){var w=this.a
w.a.bv()
w.l(new C.f_1(w))},
$S:0}
C.f_1.prototype={
$0(){return this.a.r++},
$S:0}
C.f_3.prototype={
$0(){var w=this.a
return w.l(new C.f_0(w))},
$S:0}
C.f_0.prototype={
$0(){return this.a.r++},
$S:0}
C.eZE.prototype={
$0(){var w=this.a.c
w.toString
return A.j5(w,null)},
$S:0}
C.eZI.prototype={
$0(){return this.a.clV(this.b)},
$S:0}
C.eZZ.prototype={
$0(){var w=this.a
return w.l(new C.eZY(w,this.b))},
$S:0}
C.eZY.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eZT.prototype={
$0(){return this.a.we("scan")},
$S:0}
C.eZU.prototype={
$0(){return this.a.we("file")},
$S:0}
C.eZV.prototype={
$1(d){return this.a.csM(d,this.b)},
$S:z+70}
C.eZS.prototype={
$0(){return this.a.Fe(this.b)},
$S:0}
C.eZR.prototype={
$0(){return this.a.a1t(this.b,this.c)},
$S:0}
C.cIe.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+71}
C.cId.prototype={
$1(d){return d.ak()},
$S:z+72}
C.cIb.prototype={
$1(d){return C.hST(A.a1(d,x.N,x.z))},
$S:z+73}
C.cIc.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fLd.prototype={
$1(d){return d.y===D.l3},
$S:z+3}
C.haE.prototype={
$1(d){return C.aS0(d,this.a)},
$S:z+3}
C.fII.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bUo.prototype={
$1(d){return!d.as},
$S:z+1}
C.bUn.prototype={
$1(d){return d.ak()},
$S:z+23}
C.bUk.prototype={
$1(d){return C.hrO(A.a1(d,x.N,x.z))},
$S:z+24}
C.bUl.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bUm.prototype={
$1(d){return J.k(d)},
$S:16}
C.fyS.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fup.prototype={
$1(d){return C.hhd(A.a1(d,x.N,x.z))},
$S:z+77}
C.fuq.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fur.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.h25.prototype={
$1(d){return J.k(d)},
$S:16}
C.h26.prototype={
$1(d){return d.a},
$S:z+79}
C.h27.prototype={
$1(d){return d.length!==0},
$S:3}
C.h28.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.h29.prototype={
$1(d){return d.U2(null).ak()},
$S:z+80}
C.haC.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fLH.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fOV.prototype={
$1(d){return C.amT(A.a1(d,x.N,x.z))},
$S:z+9}
C.fOW.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fOX.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fOY.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fOZ.prototype={
$1(d){return C.uC(d,this.a)},
$S:z+3}
C.h1T.prototype={
$1(d){return C.uC(d,this.a)},
$S:z+3}
C.hax.prototype={
$1(d){return C.amT(A.a1(d,x.N,x.z))},
$S:z+9}
C.hay.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.haz.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fLo.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fLp.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.haI.prototype={
$1(d){return!d.as},
$S:z+1}
C.fKT.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fKU.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fKV.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.ha5.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fPM.prototype={
$1(d){return d.Q},
$S:z+15}
C.h1M.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fOS.prototype={
$1(d){return C.amT(A.a1(d,x.N,x.z))},
$S:z+9}
C.fOT.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fOU.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.h1H.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fuY.prototype={
$1(d){return d.length!==0},
$S:3}
C.fuZ.prototype={
$1(d){return C.hrO(A.a1(d,x.N,x.z))},
$S:z+24}
C.fv_.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fv0.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:16}
C.fv1.prototype={
$1(d){return d.length!==0},
$S:3}
C.fve.prototype={
$2(d,e){return d.eG(new C.fvf(e))},
$S:2304}
C.fvf.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.v(d))
return B.cj},
$S:2305}
C.fvb.prototype={
$1(d){return C.ieH(d,this.a)},
$S:z+82}
C.fvc.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fvd.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fzB.prototype={
$1(d){return d.a},
$S:z+55}
C.fzC.prototype={
$1(d){return d.length!==0},
$S:3}
C.fzD.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fCC.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fHX.prototype={
$1(d){return C.hDv(d,C.Hy(d,this.a))},
$S:z+5}
C.fHY.prototype={
$1(d){return C.hDw(d,C.Hy(d,this.a))},
$S:z+5};(function aliases(){var w=C.aCt.prototype
w.bxq=w.t
w=C.aAE.prototype
w.bxl=w.t
w=C.aI_.prototype
w.bxO=w.t
w=C.aCu.prototype
w.bxr=w.t
w=C.aCw.prototype
w.bxs=w.t
w=C.aCx.prototype
w.bxt=w.t
w=C.aOc.prototype
w.bAh=w.t
w=C.aQl.prototype
w.bCD=w.t
w=C.aQm.prototype
w.bCE=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aFu.prototype,"gcpC","cpD",27)
var r
w(r=C.aCs.prototype,"gcir","cis",63)
v(r,"gaPR","Oo",0)
v(r,"gcy5","BE",0)
v(r,"gbQl","P6",0)
v(r,"gcMH","zg",0)
v(r,"gcrI","a2b",0)
v(r,"gbLH","OO",0)
v(r,"gbQL","Yn",0)
w(r,"gbVQ","bVR",76)
v(r,"gbFV","AA",0)
v(C.aCv.prototype,"gcMD","G7",0)
v(r=C.amI.prototype,"gbtM","btN",2)
v(r,"gbtE","btF",2)
v(r,"gcNL","cNM",2)
u(r,"gqt","kN",0)
u(r=C.akS.prototype,"geY","fY",2)
w(r,"gcdZ","ce_",26)
u(C.avL.prototype,"gqt","kN",0)
v(r=C.azH.prototype,"gcZl","cZm",2)
u(r,"gqt","kN",0)
u(C.aLQ.prototype,"gbtK","btL",2)
v(C.amR.prototype,"gC9","cNY",2)
u(r=C.amP.prototype,"gcOF","cOG",2)
u(r,"gqt","kN",0)
v(r=C.amL.prototype,"gbsC","bsD",2)
v(r,"gcTP","cTQ",2)
u(r=C.amN.prototype,"geY","fY",2)
u(r,"giC","cNh",2)
v(r=C.amJ.prototype,"gcN6","cN7",2)
u(r,"gbru","jG",2)
v(r=C.aG3.prototype,"gahJ","wu",0)
v(r,"gcl8","a1l",0)
v(r,"gaU6","IJ",0)
v(r=C.aG0.prototype,"gcIz","a4j",0)
v(r,"gahJ","wu",0)
v(r,"gcw4","a2Q",0)
v(r,"gcl3","b4k",2)
v(r,"gcm7","a1y",0)
w(r,"gcil","cim",33)
v(r,"gbQD","IO",0)
v(r,"gcJF","cJG",2)
v(r,"gc7T","a_9",0)
w(r,"gcgQ","cgR",34)
v(r,"gckS","ckT",2)
v(r=C.aEt.prototype,"gce4","QN",0)
v(r,"gce6","ce7",2)
v(r,"gbNb","abp",0)
v(r=C.aG2.prototype,"gbUe","YT",0)
v(r,"gc3N","Zy",0)
v(r,"gcCA","a3H",0)
v(r,"gcyG","a3i",0)
v(C.aG1.prototype,"gcyo","ajx",0)
v(C.auV.prototype,"gcgO","a0X",0)
v(C.aBc.prototype,"ga42","L8",2)
v(C.aBb.prototype,"ga42","L8",2)
v(C.azT.prototype,"ga42","L8",2)
v(r=C.aHB.prototype,"gb5v","RO",0)
v(r,"gbEJ","X_",0)
v(r,"gclW","clX",2)
w(C.aHA.prototype,"gchG","chH",67)
t(C.aHC.prototype,"gaU1",0,0,null,["$1","$0"],["II","bOv"],68,0,0)
s(C,"hLP","ioD",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aK,[C.aqs,C.uX,C.nx,C.IE,C.ags,C.L0,C.uY,C.bUU,C.ti,C.bql,C.an_,C.aey,C.lw,C.bTv,C.av6,C.zK,C.aly,C.N3,C.bbH,C.aaA,C.bj0,C.agz,C.aAU,C.agn,C.aLQ,C.L7,C.GR,C.bhU,C.aLL,C.arR,C.djY,C.lY,C.aWi,C.aWh,C.aUj,C.um,C.rx,C.lI,C.i7,C.l1,C.aJJ])
u(A.ks,[C.fTA,C.fTz,C.fTB,C.h2N,C.fGB,C.fGC,C.fGH,C.fRi,C.fRh,C.fRg,C.c9I,C.h3j,C.h3b,C.h3n,C.fLw,C.dSJ,C.dSE,C.dSF,C.dSh,C.dSd,C.dSY,C.dSZ,C.dSS,C.dST,C.dT_,C.dT0,C.fMh,C.fOP,C.fOQ,C.h1R,C.haw,C.fLn,C.h2r,C.dja,C.dix,C.diG,C.diX,C.diC,C.diI,C.diz,C.diM,C.diN,C.diL,C.dj1,C.dj0,C.dkY,C.dkZ,C.dl_,C.djo,C.djt,C.djs,C.cRi,C.cRk,C.dah,C.daG,C.daH,C.daK,C.daM,C.daN,C.daO,C.daQ,C.daR,C.bTf,C.bT9,C.fzi,C.hao,C.hap,C.haq,C.hal,C.har,C.has,C.hat,C.hak,C.fMV,C.h0L,C.fIJ,C.fPL,C.bOh,C.haO,C.h1n,C.bMr,C.bMm,C.bMo,C.bMn,C.cse,C.cs9,C.csa,C.cs8,C.cs6,C.csb,C.cSm,C.cHd,C.cHg,C.cHe,C.cHh,C.cHi,C.fbB,C.flR,C.bU1,C.bTW,C.bU_,C.bTD,C.e4x,C.e4u,C.e4v,C.e4t,C.e4z,C.bTU,C.bTK,C.bTu,C.bTt,C.bTp,C.bTq,C.bTr,C.bTs,C.e6c,C.e5C,C.e5x,C.e4Z,C.e5e,C.e5h,C.e5d,C.e5c,C.e5t,C.e5u,C.e5o,C.e4N,C.e5F,C.e5z,C.e4P,C.e4Q,C.e4R,C.e4W,C.e4U,C.e4T,C.e58,C.e59,C.e53,C.e5M,C.e5I,C.djz,C.djA,C.fMl,C.fMm,C.fMn,C.fMj,C.fMk,C.fMq,C.fMr,C.fMs,C.fMo,C.fMp,C.djT,C.djJ,C.djE,C.djO,C.djP,C.djS,C.djG,C.djV,C.djW,C.djX,C.frs,C.f1m,C.dzV,C.dA4,C.dA5,C.dA6,C.dA9,C.dA8,C.dAa,C.dAf,C.dAg,C.cgT,C.cgS,C.cgO,C.cgP,C.cgQ,C.cgR,C.cgY,C.cgV,C.cgW,C.e5Z,C.e61,C.e60,C.e67,C.e68,C.dS2,C.h2U,C.h2h,C.ha4,C.h2l,C.h2k,C.db4,C.db5,C.db0,C.cJ2,C.cJ4,C.cJ5,C.cIY,C.cJ6,C.fqY,C.h0y,C.eZu,C.eZq,C.eZm,C.eZk,C.eZy,C.h9S,C.eZH,C.eZQ,C.eZL,C.eZM,C.eZV,C.cId,C.cIb,C.cIc,C.fLd,C.haE,C.fII,C.bUo,C.bUn,C.bUk,C.bUl,C.bUm,C.fup,C.fuq,C.h25,C.h26,C.h27,C.h28,C.h29,C.haC,C.fLH,C.fOV,C.fOW,C.fOY,C.fOZ,C.h1T,C.hax,C.hay,C.haz,C.fLo,C.fLp,C.haI,C.fKT,C.fKU,C.ha5,C.fPM,C.h1M,C.fOS,C.fOT,C.h1H,C.fuY,C.fuZ,C.fv_,C.fv0,C.fv1,C.fvf,C.fvb,C.fvc,C.fzB,C.fzC,C.fCC,C.fHX,C.fHY])
u(A.aw,[C.b0R,C.amG,C.aXz,C.a_i,C.bdu,C.R3,C.a76,C.tI,C.IG,C.bhS,C.blI,C.bzP,C.bp3,C.aeV,C.blH,C.aeU,C.blG,C.aEu,C.aKN,C.aeW,C.GN,C.bhT,C.aea,C.bhR,C.bhW,C.b0P,C.auV,C.afg])
u(A.qc,[C.be9,C.bfm,C.bfd,C.aJD,C.bkJ,C.bqk,C.aXE,C.beb,C.aCr,C.bdD,C.buq,C.bkR,C.bkg,C.bkn,C.bhV,C.bgW,C.bmQ,C.bzE])
u(A.mG,[C.h3g,C.h3h,C.h3i,C.h39,C.h3a,C.h3l,C.h3m,C.dSV,C.dSH,C.dSK,C.dSo,C.dSp,C.dSq,C.dSn,C.dSv,C.dSm,C.dSw,C.dSx,C.dSl,C.dSy,C.dSk,C.dSz,C.dSj,C.dSA,C.dSb,C.dSc,C.dSi,C.dSB,C.dSg,C.dSC,C.dSf,C.dSr,C.dSe,C.dSs,C.dSa,C.dSt,C.dSu,C.dSW,C.dSX,C.dSL,C.dSM,C.dSN,C.dSO,C.dSP,C.dSQ,C.dSR,C.dT2,C.dSU,C.fMi,C.div,C.dit,C.diu,C.diw,C.dj9,C.diZ,C.diW,C.diy,C.dj_,C.diE,C.diF,C.diH,C.diY,C.diD,C.diJ,C.dj6,C.diT,C.diS,C.diU,C.diV,C.diO,C.diQ,C.diR,C.diK,C.dj2,C.dj5,C.diA,C.diB,C.dkX,C.dkW,C.dkV,C.dkU,C.dl0,C.dkT,C.dl1,C.djp,C.djq,C.djr,C.dju,C.djn,C.djm,C.cRj,C.dag,C.dat,C.das,C.daI,C.dar,C.daJ,C.daq,C.dap,C.daL,C.dao,C.daB,C.daA,C.daS,C.bT8,C.bTi,C.bTa,C.bTb,C.bTe,C.bTd,C.bTg,C.bTh,C.bTc,C.bT6,C.bT7,C.bUM,C.bUN,C.bUO,C.bUP,C.bUQ,C.bUR,C.bUS,C.han,C.h0M,C.bMq,C.bMl,C.bMj,C.bMk,C.bMi,C.csg,C.csh,C.csf,C.csi,C.csk,C.csl,C.csm,C.csc,C.cHc,C.cHl,C.cHm,C.cHn,C.cHk,C.cHo,C.cHp,C.cHq,C.cHr,C.cHf,C.cHj,C.bUh,C.bUg,C.bUe,C.bUc,C.bUd,C.bU9,C.bUa,C.bUb,C.bUf,C.bU8,C.fbC,C.fbD,C.fbE,C.fbF,C.fbG,C.bU5,C.bU6,C.bU7,C.bU0,C.bU2,C.bU3,C.bU4,C.bTX,C.bTH,C.bTG,C.bTF,C.bTz,C.bTA,C.bTE,C.bTB,C.bTC,C.bTy,C.e4w,C.e4y,C.e4r,C.e4s,C.e4q,C.e4A,C.e4B,C.e4C,C.e4F,C.e4G,C.e4H,C.e4I,C.e4J,C.e4K,C.e4L,C.e4M,C.e4D,C.e4E,C.bTT,C.bTS,C.bTJ,C.bTI,C.bTP,C.bTQ,C.bTM,C.bTN,C.bTO,C.bTL,C.bTj,C.bTk,C.bTo,C.bTn,C.bTm,C.bTl,C.e6b,C.e6a,C.e6d,C.e6e,C.e6f,C.e69,C.e6h,C.e6g,C.e5A,C.e5B,C.e5D,C.e5_,C.e5g,C.e5f,C.e5i,C.e5w,C.e5b,C.e5m,C.e5n,C.e5l,C.e5j,C.e5k,C.e5p,C.e5q,C.e5r,C.e5v,C.e4O,C.e5y,C.e4S,C.e4V,C.e4X,C.e5E,C.e52,C.e50,C.e54,C.e55,C.e51,C.e56,C.e5a,C.e5N,C.e5O,C.e5G,C.e5J,C.e5K,C.e5L,C.e5Q,C.e5H,C.e4Y,C.djy,C.djx,C.djC,C.djM,C.djD,C.f1l,C.dzW,C.dzT,C.dzU,C.dA3,C.dA2,C.dA1,C.dAb,C.dA0,C.dAc,C.dA_,C.dAd,C.dzZ,C.dAe,C.dzY,C.dzX,C.dA7,C.dAh,C.dAq,C.e6_,C.e63,C.e64,C.e5W,C.e5X,C.e5Y,C.e62,C.e66,C.e65,C.e5R,C.e5S,C.e5T,C.e5U,C.e5V,C.dS3,C.h2R,C.cqy,C.db3,C.db2,C.db6,C.db_,C.db1,C.cIV,C.cJ0,C.cJ1,C.cJ_,C.cJ3,C.cIZ,C.cIW,C.cIX,C.cJ7,C.fqZ,C.fr_,C.eZw,C.eZn,C.eZo,C.eZp,C.eZr,C.eZs,C.eZv,C.eZi,C.eZl,C.eZx,C.eZj,C.eZA,C.eZB,C.eZC,C.eZD,C.eZz,C.eZd,C.eZe,C.eZf,C.eZh,C.eZg,C.eZW,C.eZX,C.eZF,C.eZG,C.eZN,C.eZO,C.eZP,C.eZJ,C.eZK,C.f_2,C.f_1,C.f_3,C.f_0,C.eZE,C.eZI,C.eZZ,C.eZY,C.eZT,C.eZU,C.eZS,C.eZR])
u(A.ag,[C.aqF,C.Un,C.a02,C.a06,C.a04,C.a_D,C.amH,C.akR,C.avK,C.azG,C.amQ,C.amO,C.amK,C.WK,C.amM,C.Uo,C.arU,C.arO,C.a0I,C.arS,C.a11,C.a12,C.a7S,C.a_F,C.a_E,C.a_9,C.a2Q,C.GB,C.azM,C.auU,C.auO,C.auT,C.Pg])
u(A.ah,[C.aFu,C.bhM,C.aCs,C.bia,C.aCv,C.bfk,C.aCt,C.aAE,C.aI_,C.azH,C.aCx,C.aCw,C.aCu,C.bnb,C.amN,C.amJ,C.aG3,C.aG0,C.aEt,C.aG2,C.aG1,C.bnc,C.aOc,C.aBc,C.aBb,C.azT,C.bzH,C.aQl,C.aQm,C.aHB,C.boz,C.aHA,C.bBs])
u(A.ml,[C.dSG,C.dSI,C.dSD,C.dT1,C.fOR,C.bT5,C.dj8,C.dj7,C.diP,C.dj3,C.dj4,C.djv,C.bUT,C.bUL,C.bTw,C.bTx,C.ham,C.haN,C.bMp,C.csj,C.csd,C.cs7,C.fbH,C.bTV,C.bTY,C.bTZ,C.duc,C.bTR,C.e5s,C.e57,C.e5P,C.djL,C.djK,C.djI,C.djN,C.djQ,C.djR,C.djB,C.djF,C.djH,C.djU,C.cgM,C.cgU,C.cgZ,C.dS4,C.h2T,C.h2S,C.fqW,C.fqX,C.eZt,C.f__,C.cIe,C.fyS,C.fur,C.fOX,C.fKV,C.fOU,C.fve,C.fvd,C.fzD])
u(A.qB,[C.a2k,C.agB,C.a2D,C.a0u,C.ada,C.aMx,C.IF,C.amS,C.cIf,C.cIg])
t(C.amI,C.aCt)
t(C.akS,C.aAE)
t(C.avL,C.aI_)
t(C.bhQ,C.aCx)
t(C.amR,C.bhQ)
t(C.bhP,C.aCw)
t(C.amP,C.bhP)
t(C.bhO,C.aCu)
t(C.amL,C.bhO)
t(C.bmR,C.aOc)
t(C.bzF,C.aQl)
t(C.bzG,C.aQm)
t(C.aHC,C.bBs)
t(C.bbV,A.bbI)
t(C.bzI,A.apk)
t(C.bbU,C.bzI)
w(C.aCt,A.cf)
w(C.aAE,A.cf)
w(C.aI_,A.eO)
w(C.aCu,A.cf)
v(C.bhO,C.agn)
w(C.aCw,A.cf)
v(C.bhP,C.agn)
w(C.aCx,A.cf)
v(C.bhQ,C.agn)
w(C.aOc,A.eO)
w(C.aQl,A.cf)
w(C.aQm,A.cf)
v(C.bBs,A.eG)
v(C.bzI,A.jj)})()
A.nN(b.typeUniverse,JSON.parse('{"b0R":{"aw":[],"w":[]},"be9":{"aB":[]},"aqF":{"ag":[],"w":[]},"aFu":{"ah":["aqF"]},"Un":{"ag":[],"w":[]},"amG":{"aw":[],"w":[]},"aXz":{"aw":[],"w":[]},"bhM":{"ah":["Un"]},"a02":{"ag":[],"w":[]},"a06":{"ag":[],"w":[]},"a04":{"ag":[],"w":[]},"a_D":{"ag":[],"w":[]},"aCs":{"ah":["a02"]},"bia":{"ah":["a06"]},"aCv":{"ah":["a04"]},"a_i":{"aw":[],"w":[]},"bfm":{"aB":[]},"bfd":{"aB":[]},"bfk":{"ah":["a_D"]},"aJD":{"aB":[]},"bkJ":{"aB":[]},"bdu":{"aw":[],"w":[]},"amH":{"ag":[],"w":[]},"amI":{"ah":["amH"]},"bqk":{"aB":[]},"aXE":{"aB":[]},"akR":{"ag":[],"w":[]},"avK":{"ag":[],"w":[]},"azG":{"ag":[],"w":[]},"akS":{"ah":["akR"]},"beb":{"aB":[]},"R3":{"aw":[],"w":[]},"aCr":{"aB":[]},"avL":{"ah":["avK"]},"bdD":{"aB":[]},"azH":{"ah":["azG"]},"amQ":{"ag":[],"w":[]},"amO":{"ag":[],"w":[]},"amK":{"ag":[],"w":[]},"amR":{"ah":["amQ"]},"buq":{"aB":[]},"amP":{"ah":["amO"]},"bkR":{"aB":[]},"amL":{"ah":["amK"]},"bkg":{"aB":[]},"WK":{"ag":[],"w":[]},"amM":{"ag":[],"w":[]},"Uo":{"ag":[],"w":[]},"a76":{"aw":[],"w":[]},"bkn":{"aB":[]},"tI":{"aw":[],"w":[]},"IG":{"aw":[],"w":[]},"bnb":{"ah":["WK"]},"amN":{"ah":["amM"]},"amJ":{"ah":["Uo"]},"arU":{"ag":[],"w":[]},"arO":{"ag":[],"w":[]},"a0I":{"ag":[],"w":[]},"aeW":{"aw":[],"w":[]},"aG3":{"ah":["arU"]},"aG0":{"ah":["arO"]},"bhS":{"aw":[],"w":[]},"bhV":{"aB":[]},"blI":{"aw":[],"w":[]},"bgW":{"aB":[]},"bzP":{"aw":[],"w":[]},"bp3":{"aw":[],"w":[]},"aEt":{"ah":["a0I"]},"aeV":{"aw":[],"w":[]},"blH":{"aw":[],"w":[]},"aeU":{"aw":[],"w":[]},"blG":{"aw":[],"w":[]},"aEu":{"aw":[],"w":[]},"aKN":{"aw":[],"w":[]},"GN":{"aw":[],"w":[]},"arS":{"ag":[],"w":[]},"a11":{"ag":[],"w":[]},"a12":{"ag":[],"w":[]},"aG2":{"ah":["arS"]},"bhT":{"aw":[],"w":[]},"aea":{"aw":[],"w":[]},"bhR":{"aw":[],"w":[]},"bhW":{"aw":[],"w":[]},"aG1":{"ah":["a11"]},"bnc":{"ah":["a12"]},"b0P":{"aw":[],"w":[]},"a7S":{"ag":[],"w":[]},"bmR":{"ah":["a7S"]},"bmQ":{"aB":[]},"auV":{"aw":[],"w":[]},"a_F":{"ag":[],"w":[]},"a_E":{"ag":[],"w":[]},"a_9":{"ag":[],"w":[]},"a2Q":{"ag":[],"w":[]},"aBc":{"ah":["a_F"]},"aBb":{"ah":["a_E"]},"azT":{"ah":["a_9"]},"bzH":{"ah":["a2Q"]},"GB":{"ag":[],"w":[]},"azM":{"ag":[],"w":[]},"bzF":{"ah":["GB"]},"bzG":{"ah":["azM"]},"bzE":{"aB":[]},"auU":{"ag":[],"w":[]},"aHB":{"ah":["auU"]},"afg":{"aw":[],"w":[]},"auO":{"ag":[],"w":[]},"auT":{"ag":[],"w":[]},"boz":{"ah":["auO"]},"aHA":{"ah":["auT"]},"Pg":{"ag":[],"w":[]},"aHC":{"ah":["Pg"],"eG":[]},"bbU":{"jj":[],"fp":[]}}'))
A.a2E(b.typeUniverse,JSON.parse('{"agn":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.aD
return{e2:w("aUj"),cq:w("mk"),Q:w("rx"),r:w("bq<q,q>"),c5:w("aWh"),dY:w("aWi"),fH:w("N3"),de:w("aly"),dN:w("Nb<H>"),gc:w("ED<H>"),A:w("eS<q?>"),e:w("IE"),B:w("nx"),P:w("i7"),df:w("lw"),k:w("l1"),x:w("aA<~>"),U:w("U<aV3>"),V:w("U<ab>"),C:w("U<rx>"),O:w("U<u>"),c:w("U<N3>"),b:w("U<aly>"),ac:w("U<eS<q?>>"),I:w("U<nx>"),u:w("U<i7>"),J:w("U<lw>"),_:w("U<l1>"),cl:w("U<aA<ai<aa<q,@>>>>"),R:w("U<o6>"),eU:w("U<ai<+(G,G)>>"),ez:w("U<aa<q,aK>>"),gE:w("U<aa<q,q>>"),Y:w("U<aa<q,@>>"),fD:w("U<o8>"),bp:w("U<oQ>"),g:w("U<r>"),ar:w("U<av6>"),v:w("U<hP>"),gy:w("U<aaA>"),L:w("U<+(q,q)>"),G:w("U<+(G,G)>"),E:w("U<+(G,~())>"),bd:w("U<+(q,H,Q)>"),bF:w("U<+count,id,name(H,q,q)>"),F:w("U<da>"),s:w("U<q>"),cF:w("U<at>"),aS:w("U<jP>"),dT:w("U<bbH>"),p:w("U<w>"),Z:w("U<fp>"),D:w("U<lI>"),h:w("U<aAU>"),cC:w("U<bj0>"),fp:w("U<L0>"),M:w("U<L7>"),gZ:w("U<aJJ>"),gA:w("U<ags>"),e4:w("U<agz>"),dE:w("U<aLL>"),f7:w("U<Q>"),n:w("U<G>"),t:w("U<H>"),dS:w("U<aB?>"),d4:w("U<q?>"),eF:w("cC<ah<ag>>"),d:w("ai<nx>"),do:w("ai<i7>"),cg:w("ai<lw>"),ax:w("ai<l1>"),fO:w("ai<aa<q,@>>"),cz:w("ai<+(q,q)>"),bC:w("ai<+count,id,name(H,q,q)>"),dy:w("ai<q>"),er:w("ai<at>"),gk:w("ai<lI>"),j:w("ai<@>"),fK:w("bB<q,q>"),d2:w("bB<q,ai<aa<q,@>>>"),a:w("aa<q,@>"),f:w("aa<@,@>"),gv:w("N<q,IH>"),cM:w("N<H,q>"),w:w("kK"),g2:w("tT"),bV:w("aqs"),fL:w("cw"),K:w("aK"),dc:w("hP"),fo:w("PE<H>"),fz:w("+(q,q)"),ei:w("+scope,text(q,q)"),bn:w("+games,limit(Q,H)"),d9:w("+dx,hidden(G,ai<i7>)"),cs:w("+count,id,name(H,q,q)"),N:w("q"),fT:w("iF<i7>"),ec:w("iF<q>"),gW:w("re<G>"),X:w("bt<G>"),bW:w("e2"),W:w("bl<q>"),b4:w("bl<H>"),cI:w("km<q>"),av:w("Y<zK>"),cc:w("Y<q>"),l:w("w"),gF:w("fp"),fA:w("lI"),dO:w("GR"),bw:w("aeU<q?>"),cy:w("L9"),q:w("p9"),y:w("Q"),i:w("G"),z:w("@"),S:w("H"),eK:w("ai<l1>?"),m:w("arR?"),cT:w("r?"),h5:w("+(q,q)?"),eo:w("+code,qrPayload,usesRemaining(q,q,H)?"),he:w("+qrPayload,token,usesRemaining(q,q,H)?"),gG:w("+members,trees,viewOnly(H,H,Q)?"),az:w("qr?"),T:w("q?"),aD:w("e2?"),o:w("lI?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b6U=new A.bc(B.h_,B.bJ,B.h_,B.bJ)
D.afz=new A.bc(B.h_,B.i4,B.h_,B.i4)
D.b78=new A.bc(B.jE,B.bJ,B.bJ,B.bJ)
D.b7c=new A.av(B.cX,1.4,B.r,-1)
D.b7m=new A.av(B.ac,1,B.r,-1)
D.ag5=new A.aY(140,1/0,0,1/0)
D.b8J=new A.aY(0,1/0,64,1/0)
D.b8N=new A.aY(0,84,0,1/0)
D.agc=new A.aY(130,1/0,0,1/0)
D.aEJ=w([B.mj,B.t8,B.c],x.O)
D.cbH=new A.a7(B.ay,B.aC,B.x,D.aEJ,null,null)
D.b9y=new A.n(null,null,null,null,null,D.cbH,B.m)
D.dkl=w([B.aU,B.bQ],x.O)
D.cdT=new A.a7(B.aX,B.b1,B.x,D.dkl,null,null)
D.b9T=new A.n(null,null,null,null,null,D.cdT,B.m)
D.Zr=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fI=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dop=w([B.dx,D.Zr,D.fI],x.O)
D.caS=new A.a7(B.aX,B.b1,B.x,D.dop,null,null)
D.baD=new A.n(null,null,null,null,null,D.caS,B.m)
D.fDk=new A.F(!0,B.bV,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.he7=new A.C("?",null,D.fDk,null,null,null,null,null,null,null,null,null)
D.bet=new A.cl(B.z,null,null,D.he7,null)
D.WV=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fX1=new A.C("\ud83c\udf33",null,D.WV,null,null,null,null,null,null,null,null,null)
D.agY=new A.cl(B.z,null,null,D.fX1,null)
D.fZH=new A.C("\ud83c\udfc6",null,B.Lt,null,null,null,null,null,null,null,null,null)
D.beE=new A.cl(B.z,null,null,D.fZH,null)
D.bgu=new A.fm(null,null,null,null,null,B.kC,null,null,null,null)
D.agZ=new A.cl(B.z,null,null,D.bgu,null)
D.kW=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fDT=new A.F(!0,D.kW,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYH=new A.C("No books on the shelf yet.",null,D.fDT,null,null,null,null,null,null,null,null,null)
D.eAy=new A.D(B.nX,D.fYH,null)
D.beV=new A.cl(B.z,null,null,D.eAy,null)
D.fL4=new A.F(!0,D.fI,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hf4=new A.C("\ud83d\ude8c  On the road\u2026",null,D.fL4,null,null,null,null,null,null,null,null,null)
D.eB7=new A.D(B.cr,D.hf4,null)
D.bfn=new A.cl(B.z,null,null,D.eB7,null)
D.aYW=new A.C("\ud83e\uddfa",null,D.WV,null,null,null,null,null,null,null,null,null)
D.bfC=new A.cl(B.z,null,null,D.aYW,null)
D.h1b=new A.C("\ud83c\udfad",null,D.WV,null,null,null,null,null,null,null,null,null)
D.bfN=new A.cl(B.z,null,null,D.h1b,null)
D.bfQ=new A.cl(B.z,null,null,S.Zd,null)
D.ahi=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.ahp=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bi6=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bib=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bin=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bip=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bir=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.biz=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lM=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.biD=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.biI=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.biK=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.biL=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lN=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bjo=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Cc=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bjx=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bjR=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bjU=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bk_=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bk7=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.ai4=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bke=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.ZF=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.ai7=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bkp=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.ZH=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bkK=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.aij=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bl8=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.blo=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.blO=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.blZ=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.Gx=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bmn=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bmq=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bmu=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.aiM=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bmM=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bmS=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bmZ=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.aiQ=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bn7=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bnC=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bnM=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bnP=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bnV=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.aj6=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.boz=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ajv=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bpy=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ajH=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bpY=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.GL=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bq4=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bqe=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bqg=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ajL=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bqy=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bqA=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bqD=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ajT=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.a_r=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.br1=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bro=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.brt=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.ak4=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.brA=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.a_y=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.brX=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.brY=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.GU=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bsL=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.btn=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.btt=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.btx=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qC=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.btI=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.btM=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.btS=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.btU=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.akR=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.akV=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.H_=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a_T=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.al3=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bv7=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bvp=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bvS=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bw0=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.alt=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a04=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bwb=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bws=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a0b=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bwJ=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bx_=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a0g=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bx4=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.alL=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.alN=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bxn=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.alU=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bxQ=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bxU=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.by0=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.by9=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.byi=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.byU=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bzp=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fSP=new A.C("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bCV=new A.eS(null,D.fSP,B.fi,null,x.A)
D.h12=new A.C("None",null,null,null,null,null,null,null,null,null,null,null)
D.bCX=new A.eS(null,D.h12,B.fi,null,x.A)
D.bDt=new A.bf(38e5)
D.bEd=new A.iA(0,10,0,10)
D.bEm=new A.P(0,1,0,0)
D.bEx=new A.iA(0,4,0,4)
D.bEA=new A.P(0,4,5,0)
D.bEQ=new A.P(10,10,14,10)
D.bF0=new A.iA(10,4,10,4)
D.bF9=new A.iA(10,8,10,8)
D.bFa=new A.P(10,8,8,8)
D.bFE=new A.P(12,6,12,2)
D.bFX=new A.P(14,0,14,6)
D.bG0=new A.P(14,10,6,6)
D.bG1=new A.P(14,12,14,0)
D.bG5=new A.P(14,12,14,8)
D.bG8=new A.P(14,12,8,14)
D.bGc=new A.iA(14,14,14,14)
D.bGv=new A.P(14,6,14,40)
D.bGy=new A.P(14,8,14,30)
D.bGW=new A.P(16,2,16,10)
D.bH5=new A.P(16,6,16,30)
D.bH7=new A.P(16,6,16,8)
D.bHn=new A.P(18,10,18,4)
D.bHp=new A.P(18,12,18,0)
D.bHw=new A.P(18,14,12,4)
D.aoo=new A.P(18,16,18,8)
D.bHN=new A.P(18,20,18,22)
D.bHT=new A.P(18,30,18,30)
D.bIa=new A.P(20,10,12,20)
D.bId=new A.P(20,11,20,11)
D.bIp=new A.P(20,18,16,18)
D.bIr=new A.P(20,18,20,6)
D.bJg=new A.P(24,32,24,28)
D.bJh=new A.P(24,36,24,32)
D.bJk=new A.P(26,26,24,14)
D.bJz=new A.P(2,4,2,8)
D.bJD=new A.P(30,0,30,0)
D.bJO=new A.P(38,22,22,22)
D.aoM=new A.P(40,24,24,24)
D.bJQ=new A.iA(40,40,40,40)
D.bJS=new A.P(46,30,30,30)
D.bKl=new A.P(56,40,40,40)
D.bKp=new A.P(1.25,1.25,1.25,1.25)
D.bKq=new A.P(60,0,60,0)
D.bKv=new A.P(6,14,6,16)
D.bKz=new A.P(6,4,12,0)
D.bKD=new A.P(6,6,10,2)
D.bKK=new A.iA(7,3,7,3)
D.bLg=new A.P(5,1.5,5,1.5)
D.bLr=new A.P(6,2.5,6,2.5)
D.h9g=new A.C("Family Games",null,B.jY,null,null,null,null,null,null,null,null,null)
D.fRp=new A.C("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.WM,null,null,null,null,null,null,null,null,null)
D.cNe=w([D.h9g,D.fRp],x.p)
D.bAo=new A.fo(B.ah,B.e,B.h,B.B,null,B.p,null,0,D.cNe,null)
D.bLS=new A.bx(1,B.ba,D.bAo,null)
D.hdF=new A.C("Signature",null,B.ns,null,null,null,null,null,null,null,null,null)
D.bLV=new A.bx(1,B.ba,D.hdF,null)
D.h5N=new A.C("MADE BY THE ONE WHO PLANTED THE TREE",null,B.ug,null,null,null,null,null,null,null,null,null)
D.bMs=new A.bx(1,B.ba,D.h5N,null)
D.haJ=new A.C("Tell the AI what to fix",null,B.dn,null,null,null,null,null,null,null,null,null)
D.bMJ=new A.bx(1,B.ba,D.haJ,null)
D.fLR=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hcK=new A.C("Worksheets",null,D.fLR,null,null,null,null,null,null,null,null,null)
D.fM2=new A.F(!0,B.ahO,null,null,null,null,13,B.cF,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hbz=new A.C("Track your project spending",null,D.fM2,null,null,null,null,null,null,null,null,null)
D.dbo=w([D.hcK,B.au,D.hbz],x.p)
D.bA1=new A.fo(B.ah,B.e,B.h,B.B,null,B.p,null,0,D.dbo,null)
D.bMP=new A.bx(1,B.ba,D.bA1,null)
D.fGK=new A.F(!0,B.kC,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRZ=new A.C("FAMILY LIBRARY",null,D.fGK,null,null,null,null,null,null,null,null,null)
D.bN7=new A.bx(1,B.ba,D.fRZ,null)
D.Px=new C.IE("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.x2=new C.IF(0,"male")
D.oO=new C.IF(1,"female")
D.zB=new C.IF(2,"unknown")
D.v6=new C.amS(0,"owner")
D.Py=new C.amS(1,"editor")
D.l3=new C.amS(2,"viewer")
D.aqJ=new A.a_(61199,"MaterialIcons",!1)
D.bSs=new A.a_(61504,"MaterialIcons",!1)
D.bSt=new A.a_(61505,"MaterialIcons",!1)
D.bSv=new A.a_(61587,"MaterialIcons",!1)
D.bSC=new A.a_(61890,"MaterialIcons",!1)
D.bTv=new A.a_(63034,"MaterialIcons",!0)
D.bTN=new A.a_(63153,"MaterialIcons",!1)
D.bUk=new A.a_(63429,"MaterialIcons",!1)
D.asO=new A.a_(984520,"MaterialIcons",!1)
D.bT0=new A.a_(62776,"MaterialIcons",!1)
D.bWL=new A.ae(D.bT0,26,B.b5,null,null,null)
D.bRq=new A.a_(57648,"MaterialIcons",!1)
D.bX5=new A.ae(D.bRq,14,B.c,null,null,null)
D.bXn=new A.ae(B.I2,17,null,null,null,null)
D.bXu=new A.ae(B.Q2,null,B.bQ,null,null,null)
D.bXU=new A.ae(B.a3S,null,null,null,null,null)
D.bXX=new A.ae(B.jj,18,B.kC,null,null,null)
D.a3B=new A.a_(62044,"MaterialIcons",!1)
D.bY2=new A.ae(D.a3B,null,B.aU,null,null,null)
D.bY9=new A.ae(B.zO,18,B.c,null,null,null)
D.bYR=new A.ae(B.ee,16,null,null,null,null)
D.bYY=new A.ae(D.a3B,32,B.aU,null,null,null)
D.bZh=new A.ae(B.aqK,18,B.cX,null,null,null)
D.c_o=new A.ae(B.Id,22,B.aB,null,null,null)
D.c_B=new A.ae(B.ee,22,B.b5,null,null,null)
D.c_O=new A.ae(K.a3G,22,B.c,null,null,null)
D.c_V=new A.ae(B.vg,52,B.c,null,null,null)
D.c05=new A.ae(B.Id,30,B.aB,null,null,null)
D.c0q=new A.ae(B.Q9,null,B.c,null,null,null)
D.atx=new A.ae(B.vr,22,B.c,null,null,null)
D.c0z=new A.ae(B.ee,17,null,null,null,null)
D.c0X=new A.ae(B.xg,26,B.cX,null,null,null)
D.c1J=new A.ae(B.a47,16,null,null,null,null)
D.c2v=new A.ae(B.vg,24,B.c,null,null,null)
D.c2A=new A.ae(B.Q0,20,B.tP,null,null,null)
D.c2G=new A.ae(B.I0,null,B.bQ,null,null,null)
D.c2P=new A.ae(B.jj,18,B.c,null,null,null)
D.c3v=new A.ae(B.cB,22,B.ac,null,null,null)
D.c4o=new A.ae(B.en,16,B.ac,null,null,null)
D.c4A=new A.ae(D.a3B,20,B.aU,null,null,null)
D.atY=new A.ae(B.hl,20,null,null,null,null)
D.c57=new A.ae(B.cB,18,D.kW,null,null,null)
D.c5p=new A.ae(B.zY,28,B.c,null,null,null)
D.c5B=new A.ae(B.PR,null,B.fn,null,null,null)
D.c5W=new A.ae(B.zY,24,B.c,null,null,null)
D.c6n=new A.ae(B.vg,null,B.aU,null,null,null)
D.c6o=new A.ae(B.jz,20,B.cX,null,null,null)
D.c6I=new A.ae(B.I2,16,null,null,null,null)
D.c8g=new A.e8(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jQ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eT,!0,null,null,null,null)
D.auH=new C.a76(10,null)
D.c8N=new C.a76(12,null)
D.c8O=new C.a76(14,null)
D.dsz=w([B.bv,B.aU,B.fx,B.b5],x.O)
D.c9Y=new A.a7(B.ay,B.aC,B.x,D.dsz,null,null)
D.bsx=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bz0=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d7H=w([D.bsx,D.bz0],x.O)
D.cab=new A.a7(B.aX,B.b1,B.x,D.d7H,null,null)
D.dml=w([B.fk,B.h4,B.fx],x.O)
D.cah=new A.a7(B.ay,B.aC,B.x,D.dml,null,null)
D.akF=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.biM=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d9Z=w([D.akF,D.biM],x.O)
D.caT=new A.a7(B.aX,B.b1,B.x,D.d9Z,null,null)
D.bmD=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aE_=w([D.bmD,D.akF],x.O)
D.cbc=new A.a7(B.ay,B.aC,B.x,D.aE_,null,null)
D.ajn=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bpp=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dlq=w([D.ajn,D.bpp],x.O)
D.cbT=new A.a7(B.a5,B.a9,B.x,D.dlq,null,null)
D.dzW=w([B.bE,B.nJ],x.O)
D.cbV=new A.a7(B.aX,B.b1,B.x,D.dzW,null,null)
D.bss=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dAU=w([D.bss,D.kW,D.kW,E.O0],x.O)
D.dDA=w([0,0.07,0.9,1],x.n)
D.ccq=new A.a7(B.a5,B.a9,B.x,D.dAU,D.dDA,null)
D.ccz=new A.a7(B.ay,B.aC,B.x,B.TP,null,null)
D.d5o=w([B.aD,D.lM],x.O)
D.ccC=new A.a7(B.a5,B.a9,B.x,D.d5o,null,null)
D.dzt=w([B.b5,B.aU,B.bQ],x.O)
D.cdF=new A.a7(B.ay,B.aC,B.x,D.dzt,null,null)
D.ci2=w([10,20,30],x.t)
D.cs1=w([-1,-0.4,0.3,1],x.n)
D.czx=w([B.bv,B.b5,B.fk],x.O)
D.czF=w([B.bj,B.aD,B.kB],x.O)
D.czH=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cAp=w([30,140,262,360],x.n)
D.bqJ=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cG0=w([D.bqJ,B.ake],x.O)
D.evc=new A.r(1,2)
D.foF=new A.da(B.b6,D.evc,3)
D.aAR=w([D.foF],x.F)
D.cNv=w([B.hg,B.cd,B.fw],x.O)
D.cQh=w([B.bP,B.bz,B.bs],x.O)
D.bNY=new C.uX("classic","Classic leather","Gold-edged brown leather",D.aE_,B.kC,B.kC,"\u2766",B.K,!0,!1,!1,!1)
D.bhR=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bxG=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.ddb=w([D.bhR,D.bxG],x.O)
D.akh=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bNT=new C.uX("ornate","Ornate gold","Double gold border and flourishes",D.ddb,D.akh,D.akh,"\u2726",B.K,!0,!0,!0,!1)
D.bm9=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bth=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d4a=w([D.bm9,D.bth],x.O)
D.bNS=new C.uX("parchment","Parchment","Old paper with dark ink",D.d4a,D.GU,B.je,"\u2767",B.K,!0,!1,!1,!0)
D.ahr=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bvP=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dxC=w([D.ahr,D.bvP],x.O)
D.bqb=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bv1=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bNV=new C.uX("minimal","Clean paper","Plain and elegant, like a printed book",D.dxC,D.bqb,D.bv1,"",B.K,!0,!0,!1,!0)
D.bNX=new C.uX("midnight","Midnight","Deep blue with silver stars",B.aEj,B.cA,B.ci,"\u2727",B.K,!0,!0,!1,!1)
D.bNR=new C.uX("emerald","Emerald library","Green cloth, title on the left",H.aBg,B.kC,B.h6,"\u25c6",B.b7,!0,!1,!1,!1)
D.bwk=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dvx=w([B.eu,D.bwk],x.O)
D.brz=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bsQ=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bNW=new C.uX("rose","Rose vintage","Burgundy with rose-gold lettering",D.dvx,D.brz,D.bsQ,"\u2740",B.K,!0,!1,!0,!1)
D.dAv=w([B.cu,B.n3],x.O)
D.bNU=new C.uX("modern","Modern","Dark, bold, left-aligned",D.dAv,B.aH,B.c,"",B.b7,!1,!0,!1,!1)
D.a6a=w([D.bNY,D.bNT,D.bNS,D.bNV,D.bNX,D.bNR,D.bNW,D.bNU],A.aD("U<uX>"))
D.cTj=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dAi=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bO8=new C.lw('What does "Ubuntu" mean?',D.dAi,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d65=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bOb=new C.lw("In Swahili, what do we call a grandmother?",D.d65,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d5X=w(["Babu","Mama","Baba","Dada"],x.s)
D.bO6=new C.lw("In Swahili, what do we call a grandfather?",D.d5X,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d7i=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bOa=new C.lw("What is a sister called in Swahili?",D.d7i,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.dcD=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bO7=new C.lw("What is a brother called in Swahili?",D.dcD,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d5W=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bOi=new C.lw("Which word means father in Swahili?",D.d5W,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dBv=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bOh=new C.lw('"Umoja ni nguvu" means...',D.dBv,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dyk=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bOj=new C.lw('"Haba na haba hujaza kibaba" teaches us...',D.dyk,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.da7=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bOg=new C.lw('The African saying "It takes a village to raise a child" means...',D.da7,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dBO=w(["The elders","The market","The river","The drum"],x.s)
D.bOc=new C.lw("Who is the traditional keeper of the family stories?",D.dBO,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cXB=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bO9=new C.lw("Why do families sit round the fire at night?",D.cXB,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dAx=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bOe=new C.lw('What does "Harambee" mean?',D.dAx,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.dfy=w(["An elder","A baby","A market","A cow"],x.s)
D.bOd=new C.lw('"Mzee" is a respectful word for...',D.dfy,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dvn=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bOf=new C.lw('What does "Shikamoo" show?',D.dvn,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aBb=w([D.bO8,D.bOb,D.bO6,D.bOa,D.bO7,D.bOi,D.bOh,D.bOj,D.bOg,D.bOc,D.bO9,D.bOe,D.bOd,D.bOf],x.J)
D.d10=w([90,360],x.n)
D.d3H=w([B.bQ,B.bp],x.O)
D.bsf=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d4o=w([D.ahr,D.bsf],x.O)
D.d57=w([-1,-0.3,0.4,1],x.n)
D.d62=w([0,0.45,0.72,0.92,1],x.n)
D.bm5=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d6k=w([D.bm5,B.bB],x.O)
D.bjM=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.am3=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d6W=w([B.dx,D.bjM,D.am3],x.O)
D.d8_=w([B.bc,B.js,B.pv],x.O)
D.bmF=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.buT=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bjs=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d84=w([D.bmF,D.buT,D.bjs],x.O)
D.d8p=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d8z=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hIG=new C.aey(78,424,48,44,56)
D.hIE=new C.aey(214,396,34,34,42)
D.hIF=new C.aey(442,452,56,50,64)
D.aCa=w([D.hIG,D.hIE,D.hIF],A.aD("U<aey>"))
D.d98=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.biF=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.boy=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dDw=w([D.ajn,D.biF,D.boy],x.O)
D.bNZ=new C.uY("leather","Leather",D.dDw,"vintage")
D.dgB=w([B.di,B.GJ,B.ZW],x.O)
D.bO5=new C.uY("midnight","Midnight",D.dgB,"starry")
D.d80=w([B.et,B.eg,B.lr],x.O)
D.bO4=new C.uY("forest","Forest",D.d80,"story")
D.dFH=w([B.ev,B.eu,B.kE],x.O)
D.bO1=new C.uY("burgundy","Burgundy",D.dFH,"royal")
D.cPQ=w([B.aD,B.mZ,B.nA],x.O)
D.bO2=new C.uY("royal","Royal",D.cPQ,"royal")
D.daE=w([B.bz,B.cu,B.n3],x.O)
D.bO_=new C.uY("charcoal","Charcoal",D.daE,"geo")
D.dDF=w([B.c9,B.dU,B.yR],x.O)
D.bO3=new C.uY("sunset","Sunset",D.dDF,"sunset")
D.dEr=w([B.js,B.yU,B.a__],x.O)
D.bO0=new C.uY("ocean","Ocean",D.dEr,"band")
D.Aq=w([D.bNZ,D.bO5,D.bO4,D.bO1,D.bO2,D.bO_,D.bO3,D.bO0],A.aD("U<uY>"))
D.dbb=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.dbT=w([B.an,B.aM,B.a_],x.O)
D.ddg=w([B.eu,B.eg,B.di,B.iT,B.yW,B.cX,B.k8,B.cQ,B.d7],x.O)
D.ddh=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.foG=new A.da(B.dE,B.dQ,8)
D.dds=w([D.foG],x.F)
D.deE=w([B.c4,B.dU,B.k3],x.O)
D.bkD=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.boR=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.btc=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.deW=w([D.bkD,B.akO,D.boR,D.btc,D.am3],x.O)
D.dfc=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.dfn=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bi2=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bob=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dfR=w([D.bi2,D.aiQ,D.bob],x.O)
D.dgw=w([B.c4,B.hU],x.O)
D.dgC=w([B.nC,B.ip,B.ahD,B.cV],x.O)
D.die=w([B.cV,B.nC,B.ip,D.lN,B.cV],x.O)
D.diT=w([B.aQ,B.yS,B.yH],x.O)
D.eSJ=new A.y(-0.65,0.6)
D.f4R=new A.y(-0.2,0.95)
D.f6_=new A.y(0.25,0.95)
D.eWh=new A.y(0.7,0.6)
D.f6A=new A.y(1,0.1)
D.djF=w([T.VD,D.eSJ,D.f4R,D.f6_,D.eWh,D.f6A],x.G)
D.br2=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bxy=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.blD=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.djL=w([D.br2,D.bxy,D.blD],x.O)
D.djQ=w([B.bM,B.c_,B.dA,B.aQ],x.O)
D.dkm=w([B.hX,B.c9,B.uG],x.O)
D.dkK=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dkV=w([B.fk,B.cX],x.O)
D.bsB=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dll=w([D.bsB,D.ahp],x.O)
D.dlx=w([B.cR,B.fT,B.h7],x.O)
D.dlJ=w([B.aH,B.bp,B.di],x.O)
D.dmi=w([B.eC,B.dr,B.eg],x.O)
D.dmE=w([B.dZ,B.di,B.GJ],x.O)
D.dmI=w([B.bt,B.mW,B.d7],x.O)
D.dmZ=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.brO=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bpU=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dnj=w([D.brO,D.aiM,D.bpU],x.O)
D.do9=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dpd=w([1,0,7,6,3,2],x.t)
D.a78=w(["leather","linen","plain","stars","rays"],x.s)
D.dpo=w([0.5,2,3.6],x.n)
D.dpX=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bW2=new A.a_(983781,"MaterialIcons",!1)
D.aDG=w([B.Q2,B.hN,B.kI,B.ia,B.asW,B.Io,B.r2,D.bW2,B.asz,B.DG,B.r5,B.m_],A.aD("U<a_>"))
D.a7c=w(["double","single","corners","none"],x.s)
D.bNO=new C.zK("Little Seed","\ud83c\udf31",0)
D.bNQ=new C.zK("Young Listener","\ud83d\udc42",40)
D.bNP=new C.zK("Storyteller","\ud83e\ude98",120)
D.bNN=new C.zK("Village Pride","\ud83c\udfe1",300)
D.bNL=new C.zK("Keeper of Roots","\ud83c\udf33",700)
D.bNM=new C.zK("Elder of the Fire","\ud83d\udd25",1500)
D.aDI=w([D.bNO,D.bNQ,D.bNP,D.bNN,D.bNL,D.bNM],A.aD("U<zK>"))
D.dr8=w([B.cW,B.bi,B.cQ],x.O)
D.dro=w([],x.C)
D.Ef=w([],x.u)
D.aNS=new A.r(225,528)
D.eUp=new A.y(D.aNS,1)
D.evY=new A.r(350,548)
D.f_U=new A.y(D.evY,0.95)
D.aNM=new A.r(158,656)
D.f_N=new A.y(D.aNM,1.12)
D.ewL=new A.r(92,544)
D.ePU=new A.y(D.ewL,0.93)
D.ew0=new A.r(398,614)
D.eWF=new A.y(D.ew0,1.04)
D.evP=new A.r(318,662)
D.eL8=new A.y(D.evP,1.1)
D.a7k=w([D.eUp,D.f_U,D.f_N,D.ePU,D.eWF,D.eL8],A.aD("U<+(r,G)>"))
D.dtr=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dtX=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dv2=w([B.cV,B.nC,B.ip,D.lN,B.cV,B.ip],x.O)
D.dwu=w([B.at,B.fT,B.iT],x.O)
D.dxb=w([-70,58],x.n)
D.dxd=w([-70,-30,20],x.n)
D.dyh=w([B.bt,B.mW,B.a05],x.O)
D.dyz=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dUJ=new C.lY("construction","Construction","Jobsite & builds",B.r4)
D.dUQ=new C.lY("house","Home Build","Houses & rooms",B.vi)
D.dUG=new C.lY("grocery","Grocery","Store & pantry",B.a4G)
D.dUF=new C.lY("calculator","Calculations","Math & estimates",B.Q8)
D.dUO=new C.lY("lumber","Materials","Lumber & supplies",B.Il)
D.dUC=new C.lY("kitchen","Kitchen","Remodel & meals",O.Qt)
D.bW_=new A.a_(983756,"MaterialIcons",!1)
D.dUH=new C.lY("landscape","Landscaping","Yard & garden",D.bW_)
D.dUB=new C.lY("plumbing","Plumbing","Pipes & water",B.pQ)
D.dUR=new C.lY("electrical","Electrical","Wiring & power",B.hx)
D.dUz=new C.lY("store","Retail Shop","Daily business",B.kl)
D.dUA=new C.lY("paint_remodel","Paint & Remodel","Colors & walls",O.Qp)
D.bVl=new A.a_(983311,"MaterialIcons",!1)
D.dUN=new C.lY("roofing","Roofing","Roofs & exteriors",D.bVl)
D.bWc=new A.a_(983986,"MaterialIcons",!1)
D.dUy=new C.lY("warehouse","Warehouse","Storage & stock",D.bWc)
D.dUL=new C.lY("vehicles","Vehicles","Fleet & transport",B.DC)
D.bT2=new A.a_(62785,"MaterialIcons",!1)
D.dUE=new C.lY("farm","Farm","Crops & livestock",D.bT2)
D.dUD=new C.lY("restaurant","Restaurant","Food & catering",B.vp)
D.dUK=new C.lY("tools","Tools","Workshop gear",B.Dy)
D.dUP=new C.lY("wallet","Cash & Wallet","Quick spending",B.jz)
D.dUM=new C.lY("concrete","Concrete","Foundation work",B.arF)
D.dUI=new C.lY("blueprint","Blueprint","Plans & design",B.ard)
D.a7J=w([D.dUJ,D.dUQ,D.dUG,D.dUF,D.dUO,D.dUC,D.dUH,D.dUB,D.dUR,D.dUz,D.dUA,D.dUN,D.dUy,D.dUL,D.dUE,D.dUD,D.dUK,D.dUP,D.dUM,D.dUI],A.aD("U<lY>"))
D.dz7=w([B.bu,B.bi],x.O)
D.dzX=w([B.iD,B.ox,B.dY],x.O)
D.ajB=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.akA=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bqf=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bhw=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aER=w([D.ajB,D.akA,D.bqf,D.bhw],x.O)
D.dBa=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a7T=w(["top","middle","bottom"],x.s)
D.dCH=w([B.ct,B.bp,B.di],x.O)
D.aFa=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.bb6=new A.ab(0,B.H,B.b6,B.J,14)
D.aFe=w([D.bb6],x.V)
D.bp5=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dDp=w([D.ai4,D.a04,D.bp5],x.O)
D.dDq=w([B.be,B.dr,B.eg],x.O)
D.evy=new A.r(24,-8)
D.ewg=new A.r(48,0)
D.evu=new A.r(24,6)
D.dFb=w([B.J,D.evy,D.ewg,D.evu],x.g)
D.dFC=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.es_={top:0,middle:1,bottom:2}
D.dIT=new A.bq(D.es_,["Top","Middle","Bottom"],x.r)
D.erz={double:0,single:1,corners:2,none:3}
D.dIZ=new A.bq(D.erz,["Double line","One line","Corners","None"],x.r)
D.esO={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dKD=new A.bq(D.esO,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dKP=new A.bq(B.id,[],A.aD("bq<H,+(q,q)>"))
D.erR={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Ev=new A.bq(D.erR,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.aD("bq<q,H>"))
D.dP7=new A.O7(32,null)
D.dP8=new A.O7(40,null)
D.dP9=new A.O7(46,null)
D.aNk=new C.auT(null)
D.eup=new A.r(0,40)
D.euq=new A.r(0,412)
D.eut=new A.r(0,900)
D.euC=new A.r(0,-34)
D.euD=new A.r(0,-46)
D.euF=new A.r(0,-74)
D.euI=new A.r(100,300)
D.euJ=new A.r(10,14)
D.euM=new A.r(10,-10)
D.euR=new A.r(10,-46)
D.euS=new A.r(10,-58)
D.euT=new A.r(116,442)
D.euV=new A.r(11,-1)
D.euW=new A.r(11,-10)
D.euX=new A.r(11,-21)
D.aNH=new A.r(11,-60)
D.ev3=new A.r(14,-2)
D.ev4=new A.r(150,520)
D.aa3=new A.r(150,592)
D.ev7=new A.r(15,-15)
D.ev8=new A.r(16,-1)
D.evb=new A.r(190,444)
D.eve=new A.r(1,5)
D.evm=new A.r(21,-78)
D.evn=new A.r(222,615)
D.Ki=new A.r(225,300)
D.aa5=new A.r(225,574)
D.evx=new A.r(24,-52)
D.evz=new A.r(250,210)
D.evK=new A.r(2,-56)
D.aNW=new A.r(300,0)
D.evL=new A.r(300,440)
D.evO=new A.r(318,476)
D.evR=new A.r(324,144)
D.aa8=new A.r(332,150)
D.evT=new A.r(335,585)
D.evU=new A.r(338,140)
D.evV=new A.r(340,158)
D.evX=new A.r(34,-60)
D.EX=new A.r(36,-24)
D.evZ=new A.r(372,470)
D.ew_=new A.r(390,455)
D.ew8=new A.r(42,468)
D.ew9=new A.r(431,510)
D.ewa=new A.r(431,520)
D.ewb=new A.r(45,-92)
D.ewc=new A.r(46,20)
D.ewd=new A.r(46,-92)
D.ewe=new A.r(46,-94)
D.ewf=new A.r(47,-4)
D.ewh=new A.r(48,-4)
D.ewp=new A.r(4,-26)
D.ewx=new A.r(60,455)
D.ewG=new A.r(8,14)
D.ewK=new A.r(8,-76)
D.ewM=new A.r(95,575)
D.ewN=new A.r(98,-24)
D.ewP=new A.r(9,-2)
D.ewQ=new A.r(9,-58)
D.aO4=new A.r(9,-79)
D.ewR=new A.r(9,-9)
D.ext=new A.r(16.5,8)
D.exv=new A.r(3.2,0)
D.exw=new A.r(-16.5,8)
D.exD=new A.r(16.5,2)
D.exG=new A.r(-3.2,0)
D.exO=new A.r(9.5,6)
D.exR=new A.r(-10,14)
D.exS=new A.r(-10,-12)
D.exT=new A.r(-10,-58)
D.exV=new A.r(-11,-10)
D.exX=new A.r(-11,-60)
D.exY=new A.r(-12,-14)
D.exZ=new A.r(-12,-16)
D.ey3=new A.r(-14,-2)
D.ey6=new A.r(-15,-15)
D.ey7=new A.r(-15,-3)
D.ey9=new A.r(-16,-1)
D.eyp=new A.r(-24,-52)
D.eyy=new A.r(-2,-34)
D.eyz=new A.r(-2,-38)
D.eyB=new A.r(-30,-100)
D.aaa=new A.r(-36,-24)
D.eyM=new A.r(-4,-26)
D.eyO=new A.r(-4,-6)
D.eyX=new A.r(-8,-3)
D.eyY=new A.r(-8,-48)
D.ez0=new A.r(-9,-2)
D.ez2=new A.r(-9,-58)
D.ez3=new A.r(-9,-79)
D.ez4=new A.r(-9,-9)
D.ez6=new A.r(-9.5,6)
D.ezj=new A.r(-16.5,2)
D.fZn=new A.C("Write a new book",null,B.hq,null,B.K,null,null,null,null,null,null,null)
D.ezT=new A.D(B.l1,D.fZn,null)
D.hdd=new A.C("Tap to go on",null,B.w1,null,null,null,null,null,null,null,null,null)
D.eAe=new A.D(B.lt,D.hdd,null)
D.at5=new A.ae(B.i9,18,B.c,null,null,null)
D.fSl=new A.C("Add",null,B.kO,null,null,null,null,null,null,null,null,null)
D.dk3=w([D.at5,B.rt,D.fSl],x.p)
D.flJ=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,D.dk3,null)
D.eAh=new A.D(B.nU,D.flJ,null)
D.eAj=new A.D(B.anb,S.Zd,null)
D.fLM=new A.F(!0,B.c,null,null,null,null,13.5,B.F,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVz=new A.C("New Project",null,D.fLM,null,null,null,null,null,null,null,null,null)
D.dox=w([D.at5,B.aa,D.fVz],x.p)
D.flM=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,D.dox,null)
D.eAx=new A.D(B.hw,D.flM,null)
D.fY6=new A.C("Choose your header",null,B.ud,null,null,null,null,null,null,null,null,null)
D.eAS=new A.D(B.i8,D.fY6,null)
D.bgK=new A.fm(2.2,null,null,null,null,B.cX,null,null,null,null)
D.fry=new A.a5(22,22,D.bgK,null)
D.beQ=new A.cl(B.z,null,null,D.fry,null)
D.eAX=new A.D(B.a1s,D.beQ,null)
D.bGn=new A.P(14,2,14,6)
D.hbi=new A.C("The top of your book. Tap a design to see it.",null,B.ue,null,null,null,null,null,null,null,null,null)
D.eAY=new A.D(D.bGn,D.hbi,null)
D.fXg=new A.C("\ud83c\udfc6 A new record!",null,B.he,null,null,null,null,null,null,null,null,null)
D.eB_=new A.D(B.lt,D.fXg,null)
D.eCy=new A.jh(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eCB=new A.jh(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aOH=new A.jh(1,0.9607843137254902,0.48627450980392156,0)
D.Kq=new A.jh(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.B0=new A.jh(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eCH=new A.jh(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hKS=new C.bkJ(null)
D.bBa=new A.mH(D.hKS,null,B.az,null,null)
D.aSk=new A.cM(0,0,0,0,null,null,D.bBa,null)
D.fSn=new A.C("\ud83c\udfc5",null,B.acu,null,null,null,null,null,null,null,null,null)
D.eH6=new A.cM(null,0,-34,null,null,null,D.fSn,null)
D.ePy=new A.y("E","Sit by the fire again")
D.eVg=new A.y("C","Good Learner")
D.eYO=new A.y("D","Still Growing")
D.f2A=new A.y(-42,42)
D.f4_=new A.y("B","Faithful Listener")
D.f61=new A.y("A","Keeper of the Family")
D.f9d=new A.b2(-17,0.7,0)
D.f9N=new A.b2(-8,0.95,1.3)
D.faU=new A.b2(18,0.65,5.2)
D.faW=new A.b2(0,1.15,2.6)
D.fbg=new A.b2(9,0.9,3.9)
D.fde=new A.b7([0,0,1,1])
D.aTR=new A.a2(0,0,520,160)
D.fiL=new A.a2(10,612,440,618)
D.fiM=new A.a2(10,612,440,628)
D.fiP=new A.a2(14,-64,34,-12)
D.fiS=new A.a2(300,336,350,348)
D.ab4=new A.a2(30,96,420,346)
D.fiT=new A.a2(30,-9,46,1)
D.fiU=new A.a2(4,2,11,14)
D.fiW=new A.a2(-8,-12.5,8,-7)
D.fiX=new A.a2(-16.5,-21,16.5,1)
D.fiY=new A.a2(60,342,88,348)
D.VE=new A.a2(66,-66,94,-36)
D.fiZ=new A.a2(6,8,10,14)
D.fj1=new A.a2(95,343,115,348)
D.fj2=new A.a2(-6.5,-74,6.5,-58)
D.fj8=new A.a2(-100,-74,100,-12)
D.fj9=new A.a2(-10,8,-6,14)
D.fja=new A.a2(-11,2,-4,14)
D.fjb=new A.a2(-11,-70,11,-56)
D.fji=new A.a2(-13,-24,13,-4)
D.fjp=new A.a2(-15,-21,15,0)
D.fjs=new A.a2(-16,-21,16,1)
D.fjt=new A.a2(-16,-21,16,2)
D.fjw=new A.a2(-16,-26,16,-6)
D.fjE=new A.a2(-230,-26,230,26)
D.fk2=new A.a2(-38,-26,12,-6)
D.fk6=new A.a2(-3,-70,3,-63)
D.fk7=new A.a2(-44,-22,44,0)
D.fk9=new A.a2(-46,-9,-30,1)
D.aTV=new A.a2(-80,-190,80,20)
D.fkg=new A.a2(-8,-26,40,-6)
D.fkh=new A.a2(-98,-80,92,-75)
D.fki=new A.a2(-9,-15,9,-9)
D.haQ=new A.C("Let the AI write it from your tree",null,B.iP,null,B.K,null,null,null,null,null,null,null)
D.bOT=new A.d6(1,B.cg,D.haQ,null)
D.dgv=w([B.a5a,B.aa,D.bOT],x.p)
D.flm=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,D.dgv,null)
D.fS_=new A.C("Save member",null,B.cb,null,null,null,null,null,null,null,null,null)
D.dwV=w([D.atY,B.aa,D.fS_],x.p)
D.flx=new A.c3(B.aL,B.b9,B.h,B.l,null,B.p,null,0,D.dwV,null)
D.c_H=new A.ae(B.is,14,B.b5,null,null,null)
D.fFf=new A.F(!0,B.b5,null,null,null,null,12,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fW_=new A.C("Cashier",null,D.fFf,null,null,null,null,null,null,null,null,null)
D.dp4=w([D.c_H,B.bk,D.fW_],x.p)
D.flB=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,D.dp4,null)
D.fS0=new A.C("Transfer & settings",null,B.dn,null,null,null,null,null,null,null,null,null)
D.bMz=new A.bx(1,B.ba,D.fS0,null)
D.d7r=w([D.atx,B.ar,D.bMz],x.p)
D.flC=new A.c3(B.aL,B.e,B.h,B.l,null,B.p,null,0,D.d7r,null)
D.fqd=new A.au(16,40)
D.fqi=new A.au(22,64)
D.fqp=new A.au(280,88)
D.frd=new A.a5(30,null,null,null)
D.fR5=new A.C("The teacher is writing\u2026",null,B.Bm,null,null,null,null,null,null,null,null,null)
D.bfW=new A.cl(B.z,null,null,D.fR5,null)
D.hEC=new A.bl("w",x.W)
D.frC=new A.a5(null,56,D.bfW,D.hEC)
D.fsp=new A.hQ(5,8,8,1,null)
D.fsx=new A.hQ(2,12,12,1.05,null)
D.fVF=new A.C("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fth=new A.b0(D.fVF,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fVV=new A.C("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aWe=new A.b0(D.fVV,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h3r=new A.C("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ftL=new A.b0(D.h3r,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.heg=new A.C("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.ftQ=new A.b0(D.heg,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fY4=new A.C("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.ftX=new A.b0(D.fY4,null,null,null,null,null,null,null,null,null,null,null,null,B.fV,!1,null,null,null,B.t,null)
D.hbv=new A.C("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aWj=new A.b0(D.hbv,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fY2=new A.C("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fum=new A.b0(D.fY2,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fSE=new A.C("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fuo=new A.b0(D.fSE,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h0R=new A.C("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fuu=new A.b0(D.h0R,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hf1=new A.C("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fva=new A.b0(D.hf1,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h9K=new A.C("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fvA=new A.b0(D.h9K,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hek=new A.C("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fvD=new A.b0(D.hek,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h54=new A.C("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fvF=new A.b0(D.h54,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h__=new A.C("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fvG=new A.b0(D.h__,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h_0=new A.C("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fwH=new A.b0(D.h_0,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fVH=new A.C("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fwZ=new A.b0(D.fVH,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fXI=new A.C("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fxi=new A.b0(D.fXI,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h4y=new A.C("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fxz=new A.b0(D.h4y,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h_Q=new A.C("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fxA=new A.b0(D.h_Q,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fKs=new A.F(!0,B.bA,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz8=new A.es("\u2665",null,null,B.cN,null,null,null,null,null,null,D.fKs)
D.fHA=new A.F(!0,B.aS,null,null,null,null,28,B.O,B.cL,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzo=new A.es("Today: how well do you know the family?",null,null,B.cN,null,null,null,null,null,null,D.fHA)
D.fzF=new A.F(!0,B.qq,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAR=new A.F(!0,D.kW,null,null,null,null,13,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBd=new A.F(!0,D.kW,null,null,null,null,12,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBh=new A.F(!0,B.cV,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBq=new A.F(!0,D.fI,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBB=new A.F(!0,D.fI,null,null,null,null,13,B.F,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBV=new A.ta(!0,B.u0,null,null,null,null,B.dH,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCa=new A.F(!0,B.cV,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCe=new A.F(!0,D.kW,null,null,null,null,18,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCf=new A.F(!0,B.cV,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCk=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCn=new A.F(!0,B.cV,null,null,null,null,15,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCT=new A.F(!0,B.b5,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCU=new A.F(!0,B.ac,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCW=new A.F(!0,B.aS,null,null,null,null,15.5,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDm=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXx=new A.F(!0,B.aR,null,null,null,null,null,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXy=new A.F(!0,D.lM,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDM=new A.F(!0,B.cV,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acz=new A.ta(!0,B.Va,null,null,null,null,B.dH,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Wx=new A.F(!0,B.cV,null,null,null,null,null,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDW=new A.F(!0,B.a_,null,null,null,null,12.5,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fE0=new A.F(!0,D.fI,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEp=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFA=new A.F(!0,D.fI,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXH=new A.F(!0,D.fI,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFU=new A.F(!0,B.ac,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fG5=new A.F(!0,D.fI,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fG7=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGd=new A.F(!0,B.je,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXL=new A.F(!0,D.fI,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHa=new A.F(!0,D.fI,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHt=new A.F(!0,D.fI,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHv=new A.F(!0,B.a_,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHx=new A.F(!0,B.cV,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHV=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,R.Ji,null,null,null)
D.aXZ=new A.F(!0,D.fI,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIk=new A.F(!0,B.a_,null,null,null,null,17,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIG=new A.F(!0,B.fn,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ3=new A.F(!0,B.bQ,null,null,null,null,8,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ8=new A.F(!0,B.bE,null,null,null,null,11,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJk=new A.F(!0,B.c,null,null,null,null,13.5,B.F,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJn=new A.F(!0,D.fI,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJv=new A.F(!0,D.GU,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJH=new A.F(!0,B.b5,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK5=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKc=new A.F(!0,B.ac,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.E7,null,null,null)
D.fKD=new A.F(!0,B.cV,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKL=new A.F(!0,B.cX,null,null,null,null,13,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKY=new A.F(!0,D.lN,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYl=new A.F(!0,D.fI,null,null,null,null,null,B.F,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.LB=new A.F(!0,B.cV,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYn=new A.F(!0,B.cV,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.E7,null,null,null)
D.fLi=new A.F(!0,B.bQ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLm=new A.F(!0,B.nC,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLK=new A.F(!0,B.b5,null,null,null,null,13,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM1=new A.F(!0,D.fI,null,null,null,null,15,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMp=new A.F(!0,B.c,null,null,null,null,null,B.F,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMO=new A.F(!0,D.fI,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNj=new A.F(!0,D.fI,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNo=new A.F(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNy=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ad3=new A.F(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ad6=new A.F(!0,D.lM,null,null,null,null,null,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPi=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPD=new A.F(!0,B.aS,null,null,null,null,27,B.O,B.cL,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPK=new A.F(!0,B.je,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPS=new A.F(!0,B.je,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQl=new A.C("Time:",null,B.hC,null,null,null,null,null,null,null,null,null)
D.fQH=new A.C("\ud83c\udfae",null,B.acU,null,null,null,null,null,null,null,null,null)
D.fQI=new A.C("Themes",null,B.q8,null,null,null,null,null,null,null,null,null)
D.fRd=new A.C("\ud83c\udfb2",null,B.y2,null,null,null,null,null,null,null,null,null)
D.fRh=new A.C("Delete this game?",null,B.iP,null,null,null,null,null,null,null,null,null)
D.fRo=new A.C("Add Item",null,B.cb,null,null,null,null,null,null,null,null,null)
D.fFO=new A.F(!0,B.a_,null,null,null,null,22,B.F,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRP=new A.C("Debt receipt",null,D.fFO,null,B.K,null,null,null,null,null,null,null)
D.aYB=new A.F(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fS7=new A.C("Person who owes",null,D.aYB,null,null,null,null,null,null,null,null,null)
D.fT7=new A.C("Notes",null,B.acK,null,null,null,null,null,null,null,null,null)
D.fTz=new A.C("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fEH=new A.F(!0,B.c,null,null,null,null,11,B.F,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTB=new A.C("Share",null,D.fEH,null,null,null,null,null,null,null,null,null)
D.fUC=new A.C("Move your family trees",null,E.ad0,null,null,null,null,null,null,null,null,null)
D.fVg=new A.C("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fVU=new A.C("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fWh=new A.C("SAVE",null,D.LB,null,null,null,null,null,null,null,null,null)
D.fWV=new A.C("The round button is the right answer.",null,B.Bq,null,null,null,null,null,null,null,null,null)
D.fXf=new A.C("Remove this book?",null,B.he,null,null,null,null,null,null,null,null,null)
D.fLH=new A.F(!0,B.cV,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.E7,null,null,null)
D.fXN=new A.C("Fireside Stories",null,D.fLH,null,null,null,null,null,null,null,null,null)
D.aZ4=new A.C("Download",null,B.cb,null,null,null,null,null,null,null,null,null)
D.fYt=new A.C("What should the AI do?",null,B.dn,null,null,null,null,null,null,null,null,null)
D.fEk=new A.F(!0,D.lM,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYI=new A.C("REPORT CARD",null,D.fEk,null,null,null,null,null,null,null,null,null)
D.fZu=new A.C("Calabash Catch",null,B.WW,null,null,null,null,null,null,null,null,null)
D.fZW=new A.C("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.h_n=new A.C("\ud83c\udfe1",null,B.Fs,null,null,null,null,null,null,null,null,null)
D.h04=new A.C("Ribbon bookmark",null,B.jI,null,null,null,null,null,null,null,null,null)
D.fNi=new A.F(!0,B.b5,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0z=new A.C("NGMY.ORG",null,D.fNi,null,B.K,null,null,null,null,null,null,null)
D.h1U=new A.C("Scan family tree QR",null,B.cH,null,null,null,null,null,null,null,null,null)
D.fJo=new A.F(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2H=new A.C("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fJo,null,B.K,null,null,null,null,null,null,null)
D.h3V=new A.C("Delete",null,B.Wr,null,null,null,null,null,null,null,null,null)
D.h3W=new A.C("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.h43=new A.C("Thumbnail",null,B.q8,null,null,null,null,null,null,null,null,null)
D.h4D=new A.C("Save the cover",null,B.cH,null,null,null,null,null,null,null,null,null)
D.h4I=new A.C("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.Bu,null,B.K,null,null,null,null,null,null,null)
D.h55=new A.C("Your photos",null,B.q8,null,null,null,null,null,null,null,null,null)
D.h5l=new A.C("Create Project",null,B.cb,null,null,null,null,null,null,null,null,null)
D.h5I=new A.C("\u2b50 stars",null,B.WH,null,null,null,null,null,null,null,null,null)
D.h5W=new A.C("Design your cover",null,B.ud,null,null,null,null,null,null,null,null,null)
D.h61=new A.C("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.h64=new A.C("PICTURE",null,F.w4,null,null,null,null,null,null,null,null,null)
D.h66=new A.C("\ud83c\udfaf",null,D.WV,null,null,null,null,null,null,null,null,null)
D.h6t=new A.C("Paid",null,B.cb,null,null,null,null,null,null,null,null,null)
D.h6v=new A.C("You can undo it right after.",null,B.Bq,null,null,null,null,null,null,null,null,null)
D.h73=new A.C("Print",null,B.w2,null,null,null,null,null,null,null,null,null)
D.h7t=new A.C("Amount owed",null,D.aYB,null,null,null,null,null,null,null,null,null)
D.h7J=new A.C("Got it",null,B.cb,null,null,null,null,null,null,null,null,null)
D.h8k=new A.C("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.h8n=new A.C("Add to budget",null,B.cb,null,null,null,null,null,null,null,null,null)
D.h8N=new A.C("Debtor signature",null,B.acK,null,null,null,null,null,null,null,null,null)
D.h8X=new A.C("Change icon",null,B.acJ,null,null,null,null,null,null,null,null,null)
D.h9L=new A.C("MADE BY THE SYSTEM, FROM YOUR TREE",null,B.ug,null,null,null,null,null,null,null,null,null)
D.hac=new A.C("Family tree QR",null,B.cH,null,null,null,null,null,null,null,null,null)
D.hai=new A.C("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.WU,null,null,null,null,null,null,null,null,null)
D.haG=new A.C("Download",null,B.w2,null,null,null,null,null,null,null,null,null)
D.haH=new A.C("The person who planted this tree has not made a game yet.",null,B.Bs,null,null,null,null,null,null,null,null,null)
D.haL=new A.C("Change",null,B.q8,null,null,null,null,null,null,null,null,null)
D.hbB=new A.C("Clear all",null,B.cb,null,null,null,null,null,null,null,null,null)
D.hbE=new A.C("WHAT SHOULD IT CHANGE?",null,F.w4,null,null,null,null,null,null,null,null,null)
D.hcc=new A.C("COLOUR",null,F.w4,null,null,null,null,null,null,null,null,null)
D.hcr=new A.C("Do it",null,B.cH,null,null,null,null,null,null,null,null,null)
D.hcv=new A.C("Create Tree",null,B.cb,null,null,null,null,null,null,null,null,null)
D.hcF=new A.C("Give me another clue",null,D.LB,null,null,null,null,null,null,null,null,null)
D.hdz=new A.C("Create Family Tree",null,B.fg,null,null,null,null,null,null,null,null,null)
D.hdJ=new A.C("THE TEACHER EXPLAINS THESE",null,B.ug,null,null,null,null,null,null,null,null,null)
D.fzE=new A.F(!0,B.kC,null,null,null,null,null,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hdP=new A.C("Write the first page myself",null,D.fzE,null,null,null,null,null,null,null,null,null)
D.hen=new A.C("Use this header",null,B.cH,null,null,null,null,null,null,null,null,null)
D.heu=new A.C("Create Project",null,B.aYh,null,null,null,null,null,null,null,null,null)
D.hG5=new C.ada(1,"header")
D.ae7=new C.ada(2,"projects")
D.hG6=new C.ada(3,"cashier")
D.ae8=new C.ada(4,"familyTree")
D.hU9=new C.cIf(0,"start")
D.hUa=new C.cIg(0,"start")
D.hGj=new C.a_9(null)
D.hHk=new C.a_E(null)
D.dKM=new A.bq(B.id,[],A.aD("bq<q,GR>"))
D.drN=w([],x.dE)
D.drO=w([],x.M)
D.hHZ=new C.bhU(D.dKM,D.drN,D.drO,0,0,null,null)
D.b2A=new C.a0u(0,"intro")
D.b2B=new C.a0u(1,"countdown")
D.ael=new C.a0u(2,"ask")
D.XS=new C.a0u(3,"reveal")
D.b2C=new C.a0u(4,"end")
D.hKU=new C.ti(B.H2,D.lN,B.cV,B.mg,5,!1,!1,!1,0,null)
D.hKW=new C.ti(B.H2,B.ev,B.cV,B.bO,2,!0,!0,!1,2,B.cV)
D.hKY=new C.ti(B.qE,B.cX,B.cV,B.mg,2,!0,!1,!1,2,B.at)
D.hKZ=new C.ti(B.H2,B.dZ,B.cV,B.mg,5,!1,!1,!1,1,null)
D.hL1=new C.ti(B.a0n,D.akA,B.cV,B.mg,4,!0,!1,!0,0,null)
D.b2F=new C.ti(B.a0n,B.dU,B.cV,B.mg,3,!0,!1,!0,2,null)
D.b2G=new C.ti(B.ta,D.lN,B.c,B.mg,0,!1,!1,!0,0,null)
D.b2H=new C.ti(B.qE,B.aD,B.cV,B.bO,2,!0,!0,!1,2,B.dU)
D.b2I=new C.ti(B.qE,B.nC,B.ip,B.mg,5,!1,!1,!0,3,null)
D.hL5=new C.ti(B.qE,B.dU,B.cV,B.mg,0,!0,!1,!1,0,B.aD)
D.b2J=new C.ti(B.H2,B.ev,B.cV,B.bO,1,!1,!0,!1,1,null)
D.b2K=new C.ti(B.Gz,B.at,B.aD,B.mg,4,!0,!1,!0,2,null)
D.hL7=new C.ti(B.ta,B.at,B.ev,B.mg,3,!0,!1,!1,0,null)
D.hL9=new C.ti(B.qE,B.dZ,B.cV,B.bO,1,!1,!0,!1,1,null)
D.hLa=new C.ti(B.Gz,D.ajB,B.c,B.mg,5,!1,!1,!0,0,null)
D.hLP=new C.a12(null)
D.hUi=new C.agB(0,"still")
D.Ye=new C.agB(1,"walk")
D.b3a=new C.agB(2,"pound")
D.b3b=new C.agB(3,"drum")
D.hPN=new C.a2k(0,"greet")
D.b3c=new C.a2k(1,"teach")
D.aeF=new C.a2k(2,"ask")
D.hPO=new C.a2k(3,"feedback")
D.b3d=new C.a2k(4,"end")
D.Yl=new C.a2D(0,"intro")
D.Ym=new C.a2D(1,"asking")
D.BK=new C.a2D(2,"reacting")
D.aeQ=new C.a2D(3,"driving")
D.aeR=new C.a2D(4,"arrived")
D.aeZ=new C.aMx(0,"projects")
D.b3D=new C.aMx(1,"cashier")
D.hRT=new C.aMx(2,"familyTree")})()};
(a=>{a["703x/Ol1FXsvONJiihd7rwbFgp0="]=a.current})($__dart_deferred_initializers__);