((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,T,U,V,H,M,I,W,E,K,C={
bHm(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bHm=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.w1(null,""),$async$bHm)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.Y(y.z)
t=A.nq(b1)
s=A.c1(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.ds(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cW(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.I)(h),++d){a0=h[d]
f.push(A.J(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.V.av(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.ro(t,a1,B.id,"book",B.Hu),$async$bHm)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=A.RR(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.Y(l!=null&&A.Md(l)?y.k:y.y)
for(j=J.a2(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a1(r.a(j.h(a2,a7)),q,p):B.cG
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=A.a4g(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHm,v)},
aiJ(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aiJ=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.w1(null,""),$async$aiJ)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.Y(y.z)
t=A.nq(b6)
s=x.S
r=A.cS(c1,0,A.dy(4,"count",s),A.T(c1).c)
q=A.a41(new A.N(r,new C.fUG(),r.$ti.k("N<aj.E,p>")).aM(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fUF(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.V.av(b7,null)+"\nAllowed values: style one of "+B.d.aM(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aiJ)
case 6:l=c5
k=A.RR(l==null?"":l)
if(k==null)throw A.Y("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.v(s==null?"I updated the cover.":s)
r=x.f
u=new C.aqu(s,D.dNp,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.t
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.Y("There is no page to change.")
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
return A.b(m.$1(f+B.V.av(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aiJ)
case 10:l=c5
k=l==null?null:A.RR(l)
if(k==null)throw A.Y(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.v(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.v(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.cZ(a8,d),a5=J.aT(a2.a),a2=a2.$ti,a7=new A.kS(a5,a2.k("kS<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gP(a5))
b0=J.a2(a9)
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
case 9:if(h.a!==0){s=h.$ti.k("b9<2>")
p=A.cE(new A.b9(h,s),new C.fUH(),s.k("M.E"),p)
p=A.a41(A.pP(p,3,A.a5(p).k("M.E")).aM(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cs<1>")
b4=A.B(new A.cs(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(A.a4g(s,b9),$async$aiJ)
case 13:b5=c5
for(s=J.a2(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aqu(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aiJ,v)},
hNx(d,e,f){return A.ce(null,B.v.j(0.65),!1,null,new C.h3T(e,f),d,null,!0,!0,x.g2)},
aqu:function aqu(d,e,f){this.a=d
this.b=e
this.c=f},
fUG:function fUG(){},
fUF:function fUF(d){this.a=d},
fUH:function fUH(){},
h3T:function h3T(d,e){this.a=d
this.b=e},
bF2(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bF2=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aS(b1,new C.fHH())){u=null
w=1
break}t=B.d.cv(b1,new C.fHI())
s=$.R()
r=new A.po(new A.oV())
q=A.wb(r,D.aTX)
p=A.L()
p.r=B.c.gp(0)
q.aE(D.aTX,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.ac
o.d=B.bH
o.e=B.dP
n=new C.fHN(t)
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
return A.b(r.nw().vJ(520,160),$async$bF2)
case 4:w=3
return A.b(b3.hk(B.ho),$async$bF2)
case 3:b0=b3
u=b0==null?null:J.eR(B.dL.gaU(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bF2,v)},
fSl(d){return C.isl(d)},
isl(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fSl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bl1()
n=d.x!=null&&d.zV(null).length===0
if(d.x!=null)t=n?D.B2:D.Ky
else t=d.gV4()?D.Ky:D.aON
w=3
return A.b(C.bF2(d.ax),$async$fSl)
case 3:s=f
p.a=null
if(s!=null)p.a=A.ap6(s)
r=A.a5Z(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aON}else{p.c=C.xu(q,!0)
p.b=n?D.B2:D.Ky}r.a4O(A.heE(new C.fSn(p,d,new C.fSo(),t,n,o),null,D.bKh,B.xM))
u=r.jH(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fSl,v)},
fZh(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fZh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fSl(d),$async$fZh)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.az(q,0,40)
u=A.HH(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fZh,v)},
fHH:function fHH(){},
fHI:function fHI(){},
fHN:function fHN(d){this.a=d},
fSo:function fSo(){},
fSn:function fSn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fSm:function fSm(){},
h4l(d,e){var w=0,v=A.j(x.H)
var $async$h4l=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ce(null,B.v.j(0.55),!0,null,new C.h4p(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$h4l)
case 2:return A.h(null,v)}})
return A.i($async$h4l,v)},
bHP(d,e,f,g){return C.iA6(d,e,f,g)},
iA6(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bHP=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cE.aK(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.U(D.fA7)
w=1
break}w=3
return A.b(A.ce(null,null,!0,null,new C.h4h(g,r,f),d,null,!0,!0,x.H),$async$bHP)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bHP,v)},
h4q(d,e){var w=0,v=A.j(x.H)
var $async$h4q=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ce(null,null,!0,null,new C.h4t(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$h4q)
case 2:return A.h(null,v)}})
return A.i($async$h4q,v)},
b0X:function b0X(d,e){this.c=d
this.a=e},
c9O:function c9O(){},
bef:function bef(d,e){this.b=d
this.a=e},
h4p:function h4p(d,e){this.a=d
this.b=e},
h4m:function h4m(d){this.a=d},
h4n:function h4n(d,e,f){this.a=d
this.b=e
this.c=f},
h4o:function h4o(d,e){this.a=d
this.b=e},
h4h:function h4h(d,e,f){this.a=d
this.b=e
this.c=f},
h4f:function h4f(d){this.a=d},
h4g:function h4g(d,e,f){this.a=d
this.b=e
this.c=f},
h4t:function h4t(d,e){this.a=d
this.b=e},
h4r:function h4r(d){this.a=d},
h4s:function h4s(d,e,f){this.a=d
this.b=e
this.c=f},
fMB(d,e){var w=0,v=A.j(x.y),u,t
var $async$fMB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3M(d),$async$fMB)
case 3:t=g
J.n2(t,new C.fMC(e))
u=A.ajn(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fMB,v)},
fMC:function fMC(d){this.a=d},
aqH:function aqH(d,e,f){this.c=d
this.d=e
this.a=f},
aFy:function aFy(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dTi:function dTi(d,e){this.a=d
this.b=e},
dT3:function dT3(d,e){this.a=d
this.b=e},
dT6:function dT6(d,e,f){this.a=d
this.b=e
this.c=f},
dT5:function dT5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dT4:function dT4(d,e){this.a=d
this.b=e},
dT7:function dT7(d,e){this.a=d
this.b=e},
dT1:function dT1(){},
dT2:function dT2(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dT0:function dT0(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dSM:function dSM(d){this.a=d},
dSN:function dSN(d,e,f){this.a=d
this.b=e
this.c=f},
dSO:function dSO(d,e){this.a=d
this.b=e},
dSL:function dSL(d){this.a=d},
dST:function dST(d,e){this.a=d
this.b=e},
dSK:function dSK(d){this.a=d},
dSU:function dSU(d,e,f){this.a=d
this.b=e
this.c=f},
dSV:function dSV(d,e,f){this.a=d
this.b=e
this.c=f},
dSJ:function dSJ(d,e){this.a=d
this.b=e},
dSW:function dSW(d,e,f){this.a=d
this.b=e
this.c=f},
dSI:function dSI(d,e){this.a=d
this.b=e},
dSX:function dSX(d,e){this.a=d
this.b=e},
dSH:function dSH(d){this.a=d},
dSY:function dSY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSF:function dSF(){},
dSz:function dSz(d){this.a=d},
dSA:function dSA(d){this.a=d},
dSG:function dSG(d,e){this.a=d
this.b=e},
dSZ:function dSZ(d,e){this.a=d
this.b=e},
dSE:function dSE(d){this.a=d},
dT_:function dT_(d){this.a=d},
dSD:function dSD(){},
dSP:function dSP(d,e){this.a=d
this.b=e},
dSC:function dSC(d){this.a=d},
dSQ:function dSQ(d,e,f){this.a=d
this.b=e
this.c=f},
dSB:function dSB(d,e){this.a=d
this.b=e},
dSy:function dSy(d,e){this.a=d
this.b=e},
dSR:function dSR(d){this.a=d},
dSS:function dSS(d,e,f){this.a=d
this.b=e
this.c=f},
dTl:function dTl(){},
dTm:function dTm(d,e){this.a=d
this.b=e},
dTj:function dTj(d){this.a=d},
dTk:function dTk(d){this.a=d},
dTf:function dTf(d,e){this.a=d
this.b=e},
dTg:function dTg(d){this.a=d},
dT8:function dT8(d,e,f){this.a=d
this.b=e
this.c=f},
dT9:function dT9(d,e,f){this.a=d
this.b=e
this.c=f},
dTa:function dTa(d,e,f){this.a=d
this.b=e
this.c=f},
dTb:function dTb(d,e,f){this.a=d
this.b=e
this.c=f},
dTc:function dTc(d,e,f){this.a=d
this.b=e
this.c=f},
dTd:function dTd(d,e,f){this.a=d
this.b=e
this.c=f},
dTe:function dTe(d,e,f){this.a=d
this.b=e
this.c=f},
dTn:function dTn(){},
dTo:function dTo(){},
dTp:function dTp(){},
dTq:function dTq(d){this.a=d},
dTh:function dTh(d,e){this.a=d
this.b=e},
hJ2(d){return B.d.dz(D.a6c,new C.fNn(d),new C.fNo())},
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
fNn:function fNn(d){this.a=d},
fNo:function fNo(){},
amI:function amI(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aXF:function aXF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Up:function Up(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhT:function bhT(){this.d=$
this.c=this.a=null},
diJ:function diJ(d,e){this.a=d
this.b=e},
diH:function diH(d,e){this.a=d
this.b=e},
diI:function diI(){},
diK:function diK(d,e){this.a=d
this.b=e},
hsV(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bh(J.k(u==null?"":u))
return new C.nx(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LZ(d,e){return C.ir1(d,e)},
ir1(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LZ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$LZ)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aW(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.V.aP(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.cZ(p,x.f)
o=A.cE(o,new C.fPV(),o.$ti.k("M.E"),x.B)
n=A.a5(o).k("X<M.E>")
o=A.B(new A.X(o,new C.fPW(),n),n.k("M.E"))
B.d.b_(o,new C.fPX())
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
return A.i($async$LZ,v)},
BF(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$BF=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$BF)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b8(f,new C.h2X(),x.a)
r=A.B(r,r.$ti.k("aj.E"))
w=4
return A.b(t.aF("String","ngmy_family_book_v1_"+s+"_"+e,B.V.av(r,null)),$async$BF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$BF,v)},
aTN(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aTN=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LZ(d,e),$async$aTN)
case 2:u=h
t=J.cH(u)
s=t.bk(u,new C.hbC(f))
if(s===-1)t.ca(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.BF(d,e,u),$async$aTN)
case 3:return A.h(null,v)}})
return A.i($async$aTN,v)},
bFy(d,e,f){var w=0,v=A.j(x.H),u
var $async$bFy=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LZ(d,e),$async$bFy)
case 2:u=h
J.n2(u,new C.fMt(f))
w=3
return A.b(C.BF(d,e,u),$async$bFy)
case 3:return A.h(null,v)}})
return A.i($async$bFy,v)},
bFO(d,e){return C.ir0(d,e)},
ir0(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bFO=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bFO)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aW(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.PC
w=1
break}p=B.V.aP(0,q,null)
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
if(D.Ey.am(0,o.h(0,"foil")))j=A.cQ(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aI(o.h(0,"titleSize"))
if(i==null)i=null
i=B.i.D(i==null?25:i,18,36)
h=B.d.q(D.a7U,o.h(0,"position"))?A.cQ(o.h(0,"position")):"middle"
g=B.d.q(D.a7d,o.h(0,"frame"))?A.cQ(o.h(0,"frame")):"double"
f=B.d.q(D.a79,o.h(0,"texture"))?A.cQ(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.dcp,o.h(0,"header"))?A.cQ(o.h(0,"header")):"classic"
o=new C.IF(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.PC
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.PC
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bFO,v)},
T1(d,e,f){return C.izC(d,e,f)},
izC(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$T1=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$T1)
case 7:r=h
w=8
return A.b(r.aF("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.V.av(f.ak(),null)),$async$T1)
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
return A.i($async$T1,v)},
Sr(d,e){return C.ir2(d,e)},
ir2(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Sr=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Sr)
case 7:r=g
q=r.qI("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.LZ(d,e),$async$Sr)
case 8:if(!j.cL(g)){n=B.a.i(d.toLowerCase())
m=J.lt(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aF("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Sr)
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
return A.i($async$Sr,v)},
ai2(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ai2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sr(d,e),$async$ai2)
case 3:s=g
r=J.a2(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.I(s,t)
w=5
return A.b(A.az(),$async$ai2)
case 5:w=4
return A.b(g.aF("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ai2)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ai2,v)},
a4r(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a4r=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Sr(d,e),$async$a4r)
case 2:s=h
J.fQ(s,f)
w=3
return A.b(A.az(),$async$a4r)
case 3:u=h
w=4
return A.b(u.aF("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a4r)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4r)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4r)
case 6:return A.h(null,v)}})
return A.i($async$a4r,v)},
nx:function nx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fPV:function fPV(){},
fPW:function fPW(){},
fPX:function fPX(){},
h2X:function h2X(){},
hbC:function hbC(d){this.a=d},
fMt:function fMt(d){this.a=d},
IF:function IF(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bTb:function bTb(d){this.a=d},
izW(d,e,f,g,h,i,j){return A.a8(d,!1).cb(A.ea(new C.h3x(j,i,f,e,h,g),!0,null,x.H))},
Sn(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Sn=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sr(h,g),$async$Sn)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.U(D.aWk)
u=!1
w=1
break}w=4
return A.b(C.hNx(d,f,e),$async$Sn)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ai2(h,g),$async$Sn)
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
return A.b(C.BF(h,r,p),$async$Sn)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.T1(h,r,new C.IF("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Sn)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Sn,v)},
h3x:function h3x(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a04:function a04(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aCw:function aCw(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
djo:function djo(d){this.a=d},
djn:function djn(d,e){this.a=d
this.b=e},
djc:function djc(d,e){this.a=d
this.b=e},
dj9:function dj9(d,e){this.a=d
this.b=e},
diL:function diL(d){this.a=d},
diM:function diM(d,e){this.a=d
this.b=e},
djd:function djd(d){this.a=d},
diU:function diU(d){this.a=d},
diS:function diS(d){this.a=d},
diT:function diT(d){this.a=d},
diV:function diV(d){this.a=d},
dja:function dja(d){this.a=d},
djb:function djb(){},
diQ:function diQ(d){this.a=d},
diR:function diR(d,e){this.a=d
this.b=e},
diW:function diW(d){this.a=d},
diX:function diX(d,e){this.a=d
this.b=e},
djm:function djm(d){this.a=d},
djl:function djl(d,e){this.a=d
this.b=e},
djk:function djk(d){this.a=d},
dj6:function dj6(d){this.a=d},
dj5:function dj5(d){this.a=d},
dj7:function dj7(d){this.a=d},
diN:function diN(d,e){this.a=d
this.b=e},
dj8:function dj8(d,e){this.a=d
this.b=e},
dj_:function dj_(d){this.a=d},
dj0:function dj0(d){this.a=d},
diZ:function diZ(){},
dj1:function dj1(d){this.a=d},
dj2:function dj2(d){this.a=d},
dj3:function dj3(d,e){this.a=d
this.b=e},
dj4:function dj4(d,e,f){this.a=d
this.b=e
this.c=f},
diY:function diY(d,e){this.a=d
this.b=e},
djf:function djf(d){this.a=d},
dje:function dje(){},
djg:function djg(d){this.a=d},
djh:function djh(d){this.a=d},
dji:function dji(d){this.a=d},
djj:function djj(d,e){this.a=d
this.b=e},
diO:function diO(d){this.a=d},
diP:function diP(d){this.a=d},
a08:function a08(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bih:function bih(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dla:function dla(d){this.a=d},
dlb:function dlb(d){this.a=d},
dl9:function dl9(d){this.a=d},
dlc:function dlc(d){this.a=d},
dl8:function dl8(d){this.a=d},
dld:function dld(d){this.a=d},
dl7:function dl7(d){this.a=d},
dle:function dle(d,e){this.a=d
this.b=e},
dl6:function dl6(d,e){this.a=d
this.b=e},
dlf:function dlf(d,e){this.a=d
this.b=e},
a06:function a06(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
agt:function agt(d,e,f){this.a=d
this.b=e
this.c=f},
aCz:function aCz(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
djD:function djD(d,e){this.a=d
this.b=e},
djC:function djC(d,e){this.a=d
this.b=e},
djH:function djH(d){this.a=d},
djG:function djG(d,e){this.a=d
this.b=e},
djE:function djE(d){this.a=d},
djF:function djF(d){this.a=d},
djI:function djI(d){this.a=d},
djJ:function djJ(d){this.a=d},
djB:function djB(d,e){this.a=d
this.b=e},
djA:function djA(d,e){this.a=d
this.b=e},
L1:function L1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_k:function a_k(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cRu:function cRu(d){this.a=d},
cRv:function cRv(){},
cRw:function cRw(d){this.a=d},
bfs:function bfs(d,e,f){this.b=d
this.c=e
this.a=f},
bfj:function bfj(d,e){this.b=d
this.a=e},
uY:function uY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_F:function a_F(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfq:function bfq(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
dat:function dat(d,e,f){this.a=d
this.b=e
this.c=f},
das:function das(d,e){this.a=d
this.b=e},
daS:function daS(d){this.a=d},
daF:function daF(){},
daT:function daT(d){this.a=d},
daE:function daE(){},
daU:function daU(d,e){this.a=d
this.b=e},
daD:function daD(d,e){this.a=d
this.b=e},
daV:function daV(d,e){this.a=d
this.b=e},
daC:function daC(d,e){this.a=d
this.b=e},
daW:function daW(d){this.a=d},
daB:function daB(){},
daX:function daX(d,e){this.a=d
this.b=e},
daA:function daA(d,e){this.a=d
this.b=e},
daY:function daY(d){this.a=d},
daN:function daN(d,e){this.a=d
this.b=e},
daZ:function daZ(d){this.a=d},
db_:function db_(d){this.a=d},
db1:function db1(d){this.a=d},
db2:function db2(d){this.a=d},
daM:function daM(d,e){this.a=d
this.b=e},
db3:function db3(d,e){this.a=d
this.b=e},
aJH:function aJH(d){this.a=d},
bkQ:function bkQ(d){this.a=d},
bdA:function bdA(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
amJ:function amJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a2m:function a2m(d,e){this.a=d
this.b=e},
amK:function amK(d,e,f,g,h,i){var _=this
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
bTl:function bTl(d){this.a=d},
bTf:function bTf(d){this.a=d},
bTe:function bTe(d,e){this.a=d
this.b=e},
bTo:function bTo(d){this.a=d},
bTg:function bTg(d){this.a=d},
bTh:function bTh(d){this.a=d},
bTk:function bTk(d){this.a=d},
bTj:function bTj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTm:function bTm(d,e){this.a=d
this.b=e},
bTn:function bTn(){},
bTi:function bTi(d){this.a=d},
bTc:function bTc(d,e){this.a=d
this.b=e},
bTd:function bTd(d){this.a=d},
bqr:function bqr(d,e){this.b=d
this.a=e},
aCx:function aCx(){},
iJ(d,e){var w
$.R()
w=A.L()
w.b=B.ac
w.c=e
w.r=d.gp(0)
w.d=B.bH
w.e=B.dP
return w},
bF4(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.br(j.save())
j.translate(e.a,e.b)
d.nM(0,a0?-f:f,f)
w=A.bY(B.hB,8,36)
v=B.v.j(0.3)
u=$.R()
t=A.L()
t.r=v.gp(0)
d.c1(w,t)
w=a1===D.Yi
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.v,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eBo,new A.r(-4+v,-2),C.iJ(q,5))
d.ah(D.ez1,new A.r(4-v,-2),C.iJ(q,5))}else{t=A.bY(B.Kp,14,40)
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
break}if(a1===D.b3A){n=-52+w*14
d.ah(new A.r(10,n-22),new A.r(10,n+44),C.iJ(B.GC,3.4))
d.ah(D.eBF,new A.r(9,n),C.iJ(q,4))
d.ah(D.ezs,new A.r(10,n),C.iJ(q,4))}else if(a1===D.b3B){d.ah(D.eAv,new A.r(-8,-26-Math.max(0,w)*6),C.iJ(q,4))
d.ah(D.exu,new A.r(8,-26-Math.max(0,-w)*6),C.iJ(q,4))}else{w=s*3
v=-38-r
d.ah(D.eAz,new A.r(-12-w,v),C.iJ(q,4))
d.ah(D.aNN,new A.r(12+w,v),C.iJ(q,4))}w=A.L()
w.r=q.gp(0)
d.aE(D.fmW,w)
m=new A.r(0,-77-r)
w=A.bY(m,22,19)
v=A.L()
v.r=q.gp(0)
d.c1(w,v)
w=h.y
if(w!=null){v=A.bY(m.a5(0,B.vX),15,24)
u=A.L()
u.r=w.gp(0)
d.c1(v,u)
u=m.a5(0,D.exo)
v=A.L()
v.r=w.gp(0)
d.O(u,4,v)}else{w=A.bY(m.a5(0,B.u_),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cQ(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a5(0,D.eBD),m.a5(0,D.eAt),C.iJ(v,2.2))
d.ah(m.a5(0,D.ezr),m.a5(0,D.exl),C.iJ(v,2.2))}if(w===4){w=m.a5(0,D.eBH)
u=A.L()
u.r=v.gp(0)
d.O(w,6,u)
u=m.a5(0,D.ezt)
w=A.L()
w.r=v.gp(0)
d.O(u,6,w)}}w=m.a5(0,D.eAi)
v=A.L()
v.r=B.iq.gp(0)
d.O(w,0.9,v)
v=m.a5(0,D.eA7)
w=A.L()
w.r=B.iq.gp(0)
d.O(v,0.9,w)
if(i){l=m.a5(0,B.aa2)
w=A.bY(l,21,22)
v=A.L()
v.r=D.lR.gp(0)
d.c1(w,v)
v=A.bY(l.a5(0,B.aNK),5,12)
w=A.L()
w.r=D.bj_.gp(0)
d.c1(v,w)
d.ah(l.a5(0,D.eBz),l.a5(0,B.aO7),C.iJ(B.cW,1.4))
d.ah(D.aNN,new A.r(15,-88-r),C.iJ(q,3.6))}j.restore()},
hHH(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.br(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bV(0,f)
v=A.bY(B.dR,18,96)
u=B.v.j(0.28)
$.R()
t=A.L()
t.r=u.gp(0)
d.c1(v,t)
t=A.bY(B.dR,11,70)
v=B.v.j(0.2)
u=A.L()
u.r=v.gp(0)
d.c1(t,u)
d.lB(D.aU0,A.L())
C.ifx(d,g,h,i,j)
s=(k==null?D.aa7:k).a-w>=0?1:-1
w=A.L()
w.a=B.MM
w.san(A.jF(new A.r(s*70,-60),new A.r(-s*70,-60),A.a([D.ak8.j(0.5),D.ak8.j(0.12),D.bqF.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aE(D.aU0,w)
r.restore()
r.restore()},
ifx(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.v,0.28)
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
s=A.bv(D.fmX,B.u4)
p=$.R()
o=A.L()
o.r=u.gp(0)
a1.ar(s,o)
o=A.bv(D.fmS,B.hS)
s=A.ap(v,B.v,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.ar(o,n)
n=A.bv(D.fn5,B.hS)
o=A.ap(v,B.v,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.ar(n,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.fmZ,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.flI,s)
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
k=D.djP[j]
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
i.b=B.ac
i.c=5
i.r=k.gp(0)
i.d=B.bH
i.e=B.dP
a1.ah(new A.r(-34+u,-64),new A.r(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.ap(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.R()
f=new A.ar(B.T,B.Q,B.W,B.X,B.U)
f.r=i.gp(0)
a1.O(new A.r(g,h),3.6,f)
f=new A.ar(B.T,B.Q,B.W,B.X,B.U)
f.r=u.gp(0)
a1.O(new A.r(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
i.b=B.ac
i.c=1.6
i.r=k.gp(0)
i.d=B.bH
i.e=B.dP
a1.ah(new A.r(g,-64),new A.r(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
i.b=B.ac
i.c=1.6
i.r=k.gp(0)
i.d=B.bH
i.e=B.dP
a1.ah(new A.r(-30,h),new A.r(30,h),i)}break
default:a1.ah(D.eB1,D.ey9,C.iJ(a2.c.j(0.9),3))}a1.ah(D.eBA,D.eAB,C.iJ(B.v.j(0.18),1.6))
a1.ah(D.ext,B.aNP,C.iJ(B.v.j(0.18),1.6))
u=B.v.j(0.12)
k=$.R()
i=A.L()
i.r=u.gp(0)
a1.aE(D.flE,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.aE(D.flS,i)
n=new A.aG(k.r,B.aj,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.ch(0,-57,9,-66))
n.E(new A.ch(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cQ(D.fm0,0.1,2.941592653589793,!1,C.iJ(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.aac
n=25*q
k=23*q
i=9*q
C.hDA(a1,new A.r(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.F_:o
C.hDA(a1,new A.r(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.eyU,D.eyQ,C.iJ(D.al7,4))
a1.ah(D.eyS,D.eyO,C.iJ(D.H4.j(0.7),1.4))
u=A.L()
u.r=B.cW.gp(0)
a1.O(D.eyR,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.br(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jq(0,a3.f)
a1.bV(0,r)
C.ifs(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hDA(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aJ(0,e),r=s.gcJ(),q=r===0?B.hB:s.eW(0,r),p=B.i.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.r(o,w)
if(o*i<0)v=new A.r(-o,-w)
u=e.a5(0,q.aN(0,n)).a5(0,v.aN(0,m))
t=e.a5(0,q.aN(0,p))
d.ah(e,u,C.iJ(j,l))
o=A.ap(j,B.v,0.2)
o.toString
d.ah(e,u,C.iJ(o,l*0.35))
d.ah(u,t,C.iJ(k,l*0.78))
o=A.ap(k,B.v,0.22)
o.toString
d.ah(u,t,C.iJ(o,l*0.22))
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
ifs(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bY(B.vW,40,38)
$.R()
v=A.L()
v.r=c0.gp(0)
c2.c1(w,v)}if(c1===4){$.R()
w=A.L()
w.r=c0.gp(0)
c2.O(D.eAJ,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.O(D.exK,9.5,w)}w=A.bY(D.eBW,10,6)
v=$.R()
u=A.L()
u.r=c8.gp(0)
c2.c1(w,u)
u=A.bY(D.eAf,10,6)
w=A.L()
w.r=c8.gp(0)
c2.c1(u,w)
v=v.r
w=x.v
t=new A.aG(v,B.aj,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.i_(13,-20,17,-9,16,2))
t.E(new A.i_(15,13,8,20,0,20))
t.E(new A.i_(-8,20,-15,13,-16,2))
t.E(new A.i_(-17,-9,-13,-20,0,-20))
t.E(new A.by())
u=A.L()
u.san(A.wm(D.eBq,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iJ(c8.j(0.5),0.8)
c2.cQ(D.fn7,3.455751918948773,2.5132741228718345,!1,s)
c2.cQ(D.flL,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.eAG,B.aOg,s)
c2.ah(D.exG,D.exx,s)
c2.cQ(D.fm_,2.2,1.4,!1,s)
c2.cQ(D.flJ,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.T,B.Q,B.W,B.X,B.U)
n.r=c0.gp(0)
c2.O(new A.r(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fme,3.141592653589793,3.141592653589793,!0,p)
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
c2.ah(D.eAx,D.exy,C.iJ(B.nE,1.4))
o=A.L()
o.r=c0.gp(0)
c2.O(D.eAM,3,o)
o=A.L()
o.r=c0.gp(0)
c2.O(D.exL,3,o)
o=new A.aG(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.ch(-12,22,0,26))
o.E(new A.ch(12,22,13,6))
o.E(new A.ch(8,13,0,12))
o.E(new A.ch(-8,13,-13,6))
o.E(new A.by())
p=A.L()
p.r=B.hW.gp(0)
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
c2.cQ(D.fml,3.4,2.5,!1,C.iJ(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cQ(D.fm7,3.6,2.2,!1,C.iJ(o,1.2))
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
c2.O(D.exz,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fmi,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.ar(B.T,B.Q,B.W,B.X,B.U)
o.b=B.ac
o.c=0.9
o.r=p.gp(0)
o.d=B.bH
o.e=B.dP
c2.ah(new A.r(r*3.6,-19+Math.abs(r)*0.8),new A.r(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=E.aEu[l]
o=new A.ar(B.T,B.Q,B.W,B.X,B.U)
o.b=B.ac
o.c=4.5
o.r=c0.gp(0)
o.d=B.bH
o.e=B.dP
c2.ah(new A.r(k,0),new A.r(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ar(B.T,B.Q,B.W,B.X,B.U)
o.r=p.gp(0)
c2.O(new A.r(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fmh,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(B.aa2,B.aa1,C.iJ(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.flM,3.267256359733385,2.8902652413026098,!0,p)}i=B.i.D(c4.b,0,1)*0.4+0.1
p=A.bY(D.eBJ,5,8)
o=D.ahm.j(i)
n=A.L()
n.r=o.gp(0)
c2.c1(p,n)
n=A.bY(D.eAq,5,8)
p=D.ahm.j(i)
o=A.L()
o.r=p.gp(0)
c2.c1(n,o)
h=c4.e*2.4
o=new A.aG(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.ch(h-3.4,6,h-2.6,7.4))
o.E(new A.ch(h,8.8,h+2.6,7.4))
c2.af(o,C.iJ(c8.j(0.75),1.1))
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
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=B.hp[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bY(new A.r(a5,-3),a3,7)
a6=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a6.r=B.c.j(0.96).gp(0)
c2.c1(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.br(d.save())
a6=A.a([],w)
a4=new A.aG(v,B.aj,b9,b9,a6)
a6.push(new A.jz(A.bY(new A.r(a5,-3),a3,7)))
a4.ac()
a3=a4.e
if(a3==null)a3=a4.e=new A.En(a4.gle().a.snapshot())
d.clipPath(a3.a,$.mE(),!0)
a3=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a3.r=D.bmV.gp(0)
c2.O(new A.r(a7,a8),2.1,a3)
a3=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a3.r=B.v.gp(0)
c2.O(new A.r(a7,a8),1.05,a3)
a3=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a3.r=B.c.gp(0)
c2.O(new A.r(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.a_v:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a9.b=B.ac
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bH
a9.e=B.dP
a3=p?0.8:0
c2.cQ(A.bY(new A.r(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.dT
else{b1=A.ap(c0,B.v,0.2)
b1.toString}b2=new A.ar(B.T,B.Q,B.W,B.X,B.U)
b2.b=B.ac
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bH
b2.e=B.dP
c2.ah(new A.r(a5-a4,b0-a6+0.4),new A.r(a5+a4,b0-0.6-a3),b2)}b3=B.i.D(c4.a,0,1)
if(o)b4=D.bxq
else{u=A.ap(c8,D.bqH,0.6)
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
v.r=D.bpZ.gp(0)
c2.af(b8,v)
J.br(d.save())
c2.mz(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.aE(new A.a3(w,11,w+b6*2,13.2),u)
u=A.bY(new A.r(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.bxv.gp(0)
c2.c1(u,w)
d.restore()
c2.af(b8,C.iJ(b4,1.1))}else{u=new A.aG(v,B.aj,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.ch(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iJ(b4,1.5))
if(b5>0.6){w=new A.aG(v,B.aj,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.ch(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.ch(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.L()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cQ(D.flZ,-1.2,2.2,!1,C.iJ(c8.j(0.5),0.8))
c2.cQ(D.flO,2.141592653589793,2.2,!1,C.iJ(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.O(D.eA8,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.O(D.eA5,1.7,w)}},
ikZ(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.R(),f=new A.po(new A.oV()),e=A.wb(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.san(A.jF(B.J,new A.r(0,a0*0.46),D.dgm,D.d72,B.x,h))
e.aE(new A.a3(0,0,0+d,0+a0),a2)
a2=e.c
J.br(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bV(0,a1)
w=new A.e_()
w.cS(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ar(B.T,B.Q,B.W,B.X,B.U)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.O(new A.r(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.br(a2.save())
a2.translate(200,120)
e.jq(0,-0.5)
d=A.L()
a0=x.O
d.san(A.wm(B.J,230,A.a([D.blz,B.L],a0),h,B.x,h,h,0))
e.c1(D.fmt,d)
a2.restore()
d=A.L()
d.san(A.wm(D.aaa,58,A.a([D.bp_,B.L],a0),h,B.x,h,h,0))
e.O(D.aaa,58,d)
d=A.L()
d.r=D.bkh.gp(0)
e.O(D.aaa,24,d)
d=A.L()
d.r=D.a_X.gp(0)
e.O(D.eyt,5,d)
d=A.L()
d.r=D.a_X.gp(0)
e.O(D.eyx,3.4,d)
d=A.L()
d.r=D.a_X.gp(0)
e.O(D.eyw,2.4,d)
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
g=[D.biO,D.bkQ,D.br0][s]
u=$.R()
t=new A.ar(B.T,B.Q,B.W,B.X,B.U)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cB1[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.T,B.Q,B.W,B.X,B.U)
u.b=B.ac
u.c=2.4
u.r=D.a0i.gp(0)
u.d=B.bH
u.e=B.dP
e.ah(new A.r(o,k),new A.r(g,d),u)
g=A.bY(new A.r(g,k-27),11,46)
u=new A.ar(B.T,B.Q,B.W,B.X,B.U)
u.r=D.a0i.gp(0)
e.c1(g,u)
d=A.bY(new A.r(o-12,d),8,24)
u=new A.ar(B.T,B.Q,B.W,B.X,B.U)
u.r=D.a0i.gp(0)
e.c1(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ar(B.T,B.Q,B.W,B.X,B.U)
u.r=D.bkk.j(0.8).gp(0)
e.O(new A.r(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.san(A.jF(D.ex2,D.ex5,D.d99,B.xA,B.x,h))
e.aE(new A.a3(-200,412,650,1300),g)
j=new A.e_()
j.cS(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bY(new A.r(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h5()?B.c:B.v
d=new A.ar(B.T,B.Q,B.W,B.X,B.U)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.c1(u,d)}J.br(a2.save())
a2.translate(225,590)
e.nM(0,1,0.34)
g=A.L()
g.san(A.wm(B.J,250,A.a([D.bs0,D.bla,D.btY],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.O(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.ajP,D.bjP,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.R()
a0=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a0.b=B.ac
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bH
a0.e=B.dP
e.ah(new A.r(o+i*2,k),new A.r(o+i*5,g+Math.abs(i)*3),a0)}}C.idI(e)
for(l=0;l<3;++l)C.igX(e,D.aCh[l])
C.igM(e,D.eyn)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.R()
a0=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a0.b=B.ac
a0.c=2.4
a0.r=D.a0e.gp(0)
a0.d=B.bH
a0.e=B.dP
e.ah(new A.r(o,452+g),new A.r(o+1,436+d),a0)}e.ah(D.exv,D.exO,C.iJ(D.bky,1.6))
a2.restore()
return f.nw()},
idI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.R().r,g=x.v,f=new A.aG(h,B.aj,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.i_(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.i_(416,382,432,422,428,462))
f.E(new A.by())
w=A.L()
w.san(A.jF(new A.r(354,0),new A.r(430,0),D.dFQ,B.mz,B.x,i))
d.af(f,w)
v=new A.e_()
v.cS(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.v.j(0.18)
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.b=B.ac
p.c=1.1
p.r=q.gp(0)
p.d=B.bH
p.e=B.dP
d.ah(new A.r(t,s),new A.r(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dlk[o]
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
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.b=B.ac
r.c=8
r.r=D.ai8.gp(0)
r.d=B.bH
r.e=B.dP
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ar(B.T,B.Q,B.W,B.X,B.U)
l.r=A.ap(D.bkq,D.bqZ,v.ai()).j(0.92).gp(0)
d.O(new A.r(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.b=B.ac
r.c=1.2
r.r=D.a0e.gp(0)
r.d=B.bH
r.e=B.dP
d.ah(new A.r(w,q+8),new A.r(w,q+22),r)
q=A.bY(new A.r(w,q+28),13,7)
w=new A.ar(B.T,B.Q,B.W,B.X,B.U)
w.r=D.bsn.gp(0)
d.c1(q,w)}},
igX(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bY(new A.r(a5,a6+2),a9,a7*2.8),b1=B.v.j(0.3),b2=$.R(),b3=A.L()
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
u.san(A.jF(new A.r(b0,0),new A.r(v,0),D.dlr,B.mz,B.x,a4))
b4.af(w,u)
t=new A.e_()
t.cS(B.o.T(a5*7))
v=b4.c
J.br(v.save())
b4.mz(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.v.j(0.14)
n=new A.ar(B.T,B.Q,B.W,B.X,B.U)
n.b=B.ac
n.c=1
n.r=o.gp(0)
n.d=B.bH
n.e=B.dP
b4.ah(new A.r(r,q),new A.r(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ajL.j(0.75)
n=A.L()
n.r=o.gp(0)
b4.aE(new A.a3(b0,u,b0+p,u+7),n)
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
j=new A.ar(B.T,B.Q,B.W,B.X,B.U)
j.r=D.lR.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aG(b2,B.aj,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.i.be(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.aj(n)
f.ac()}b4.af(f,C.iJ(D.ajL.j(0.7),1.6))
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
m.r=D.ajX.gp(0)
b4.af(b2,m)
m=A.L()
m.r=D.ajX.gp(0)
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
b1.san(A.jF(new A.r(a5-n,0),new A.r(a5+n,0),D.dp9,B.mz,B.x,a4))
b4.af(e,b1)
J.br(v.save())
b4.mz(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h5()?B.v:D.bjY).j(0.16)
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
i.b=B.ac
i.c=0.9
i.r=n.gp(0)
i.d=B.bH
i.e=B.dP
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
n=new A.ar(B.T,B.Q,B.W,B.X,B.U)
n.b=B.ac
n.c=1.2
n.r=b1.gp(0)
n.d=B.bH
n.e=B.dP
b4.af(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.ai()
b2=t.ai()
v=new A.ar(B.T,B.Q,B.W,B.X,B.U)
v.b=B.ac
v.c=1.1
v.r=D.brs.gp(0)
v.d=B.bH
v.e=B.dP
b4.ah(new A.r(a2,a3),new A.r(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aG(b0,B.aj,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.by())
b0=A.L()
b0.r=D.bnp.gp(0)
b4.af(a9,b0)},
igM(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+E.aEr[s]
$.R()
q=new A.ar(B.T,B.Q,B.W,B.X,B.U)
q.b=B.ac
q.c=3
q.r=D.a0e.gp(0)
q.d=B.bH
q.e=B.dP
d.ah(new A.r(r,u),new A.r(r,t),q)}u=A.bY(e.a5(0,B.aNJ),24,36)
t=$.R()
r=A.L()
r.r=D.bwC.gp(0)
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
u.r=D.aiQ.gp(0)
d.af(t,u)},
ig8(d){switch(B.o.F(d,8)){case 0:return D.b2Q
case 1:return D.b2O
case 2:return D.b2N
case 3:return D.b2M
case 4:return D.b2P
case 5:return D.b2R
case 6:return D.hNX
default:return D.hNW}},
T_(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bqs()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.aac:j
w.as=k==null?D.F_:k
C.hHH(d,e,p,C.ig8(m),w,s,m,l)},
hJ8(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bV_:function bV_(){var _=this
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
bqs:function bqs(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
an1:function an1(){this.b=this.a=null},
aXK:function aXK(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bUS:function bUS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUT:function bUT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUU:function bUU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUV:function bUV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUW:function bUW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUX:function bUX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUY:function bUY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUZ:function bUZ(){},
bUR:function bUR(d){this.a=d},
agC:function agC(d,e){this.a=d
this.b=e},
aez:function aez(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Nk(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bTB(s)
s.bD6(d)
return s},
Hh(d,e,f,g,h,i,j){var w,v=A.T(g).k("X<1>")
v=A.d_(new A.X(g,new C.fAo(f),v),v.k("M.E"))
w=A.B(v,A.a5(v).k("ci.E"))
B.d.dU(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cS(w,0,A.dy(3,"count",x.S),A.T(w).c))
B.d.dU(v,d)
return new C.lx(e,v,B.d.cd(v,f),h,i,"tree",j)},
iBz(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.S(c0,x.cg),c2=new C.hbs(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.ju(c4,c0)
t=A.B(c4,A.a5(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.ju(c4,c0)
r=A.B(c4,A.a5(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.ju(c4,c0)
q=A.B(c4,A.a5(c4).k("ci.E"))
for(c4=w.length,v=A.T(t).k("X<1>"),s=v.k("M.E"),p=A.T(w).k("X<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.I)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.d()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.x4)g="father"
else g=h===D.oP?"mother":"parent"
h=B.a.i(i.b)
f=A.B(new A.X(t,new C.hbu(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.Hh(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.B(new A.X(w,new C.hbv(i,m),p),o)
B.d.dU(d,c6)
c2.$2(b4,new C.lx("True or false: "+h+" is the "+g+" of "+l+".",M.T9,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lx("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",M.T9,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Go(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.B(new A.X(t,new C.hbw(l,a0,c5),v),s)
e=a1.c
if(e===D.x4)e="son"
else e=e===D.oP?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.Hh(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.ex([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mx(a5,a5.r,f.k("mx<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.v(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.Hh(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.T(a0),a2=e.k("iH<1>"),a3=new A.iH(a0,1,b3,a2),a3.nb(a0,1,b3,e.c),a3=new A.bQ(a3,a3.gJ(0),a2.k("bQ<aj.E>")),a2=a2.k("aj.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.Hh(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.asi(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.B(new A.X(t,new C.hbx(l),v),s)
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
j=A.B(new A.X(t,new C.hby(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.x4
if(e)a2=b7
else a2=f===D.oP?b8:b9
if(e)f=b7
else f=f===D.oP?b8:b9
c2.$2("grand",C.Hh(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aO4(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.B(new A.X(t,new C.hbz(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.Hh(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.B(r,c0)
B.d.u(j,D.cU1)
h=l+" was born in "+k
c2.$2("place",C.Hh(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.B(q,c0)
B.d.u(j,D.daf)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.Hh(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.Hh(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cG(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.j3(b1,b3,b3)
c2.$2("year",C.Hh(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bFK(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Nk(d),l=new A.e_()
l.cS(f)
w=C.iBz(m,l,g)
for(v=new A.dr(w,w.r,w.e);v.C();)J.hqZ(v.d,l)
v=A.a5(w).k("cs<1>")
u=A.B(new A.cs(w,v),v.k("M.E"))
B.d.dU(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aS(u,new C.fO0(n,w))))break
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
if(v<e){v=A.B(D.aBh,x.df)
B.d.dU(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hHO(o,l))}}else if(!g&&v>3){o=C.hHO(D.aBh[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hHO(d,e){var w=d.b,v=w[d.c]
w=A.B(w,x.N)
B.d.dU(w,e)
return new C.lx(d.a,w,B.d.cd(w,v),d.d,d.e,d.f,d.r)},
hN6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Nk(a2),a1=new A.e_()
a1.cS(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.Go(q).length>=2)u.push(q)}B.d.dU(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.Go(n)
l=A.T(m)
k=new A.iH(m,0,5,l.k("iH<1>"))
k.nb(m,0,5,l.c)
j=k.dm(0)
if(new A.N(j,new C.h1R(),A.T(j).k("N<1,G>")).fB(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aTx(a0,j[i]))
w.push(new C.av9("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.S(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.c6(e.c_(0,a0.anq(q),new C.h1S()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cs<1>")
d=A.B(new A.cs(e,t),t.k("M.E"))
B.d.ff(d)
v=A.a([],v)
for(u=A.cS(d,0,A.dy(5,"count",u),A.T(d).c),t=u.$ti,u=new A.bQ(u,u.gJ(0),t.k("bQ<aj.E>")),t=t.k("aj.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cH(s)
m.dU(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aTx(a0,v[r]))
w.push(new C.av9("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aS2(d){return B.d.aoU(D.aDO,new C.fJP(d))},
irt(d){return A.nA(new A.X(D.aDO,new C.fQR(d),x.av))},
bUp(d){return C.hWQ(d)},
hWQ(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bUp=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bUp)
case 7:r=f
q=B.a.i(d)
q=A.er(J.t(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bUp,v)},
C0(d,e){return C.hWN(d,e)},
hWN(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$C0=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$C0)
case 7:r=g
p=B.a.i(d)
o=A.er(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
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
bUo(d,e,f){return C.hWO(d,e,f)},
hWO(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bUo=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bUo)
case 7:r=h
q=B.a.i(d)
q=A.er(J.t(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bUo,v)},
C1(d,e,f,g){return C.hWP(d,e,f,g)},
hWP(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$C1=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$C1)
case 7:r=i
p=B.a.i(d)
o=A.er(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
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
bI2(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
hdw(d,e,f,g){return new C.alA(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hUT(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aT(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cb)
while(u.C())w.push(J.k(u.gP(u)))
u=x.N
w=A.cS(w,0,A.dy(4,"count",x.S),u).dm(0)
B.d.u(w,A.c1(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aI(d.h(0,"c"))
v=v==null?null:B.i.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aI(d.h(0,"s"))
u=u==null?null:B.i.M(u)
return C.hdw(w,v,B.o.D(u==null?20:u,5,60),t)},
hs7(d){var w,v,u,t,s,r,q=J.a2(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aT(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cb)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gP(q)
if(u.b(r))v.push(C.hUT(A.a1(r,t,s)))}return new C.N4(p,w,v)},
hm7(d){var w,v=A.a([],x.c)
for(w=J.aT(d.z);w.C();)v.push(C.hs7(w.gP(w)))
return v},
aTx(d,e){var w=e.c===D.oP
if(d.anq(e)===0&&d.Go(e).length!==0)return w?0:1
if(d.Go(e).length!==0||d.asi(e)!=null)return w?2:3
return w?4:5},
hOb(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nk(a4),a3=new A.e_()
a3.cS(a5)
w=A.a([],x.dT)
v=a2.b
u=A.B(v,x.P)
B.d.dU(u,a3)
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
g=a2.asi(m)
f=a2.aO4(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cG(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.x4)k="father"
else k=k===D.oP?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.x4)k="father"
else k=k===D.oP?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.dU(l,a3)
B.d.b_(l,new C.hbT())
d=B.a.i(m.b)
a0=A.B(new A.X(s,new C.hbU(d),o),n)
B.d.dU(a0,a3)
k=A.a([d],t)
i=A.T(a0)
a1=new A.iH(a0,0,3,i.k("iH<1>"))
a1.nb(a0,0,3,i.c)
B.d.u(k,a1)
B.d.dU(k,a3)
a1=C.aTx(a2,m)
i=new A.iH(l,0,4,p)
i.nb(l,0,4,r)
w.push(new C.bbN(d,a1,i.dm(0),k))
if(w.length>=5)break}return w},
hF9(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.X(d,"My ")?1:0},
hNh(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nk(a4),a3=new A.e_()
a3.cS(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.Go(q).length>=2)u.push(q)}B.d.dU(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.Go(l)
j=A.T(k)
i=new A.iH(k,0,4,j.k("iH<1>"))
i.nb(k,0,4,j.c)
h=i.dm(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aS(h,new C.h2t(q))&&q.d!==j)i.push(q)}B.d.dU(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iH(i,0,k,m)
j.nb(i,0,k,n)
f=j.dm(0)
j=B.a.i(l.b)
k=C.aTx(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aTx(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aTx(a2,f[g]))
w.push(new C.aaB(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lx:function lx(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bTB:function bTB(d){this.b=d
this.c=$},
bTC:function bTC(){},
bTD:function bTD(d){this.a=d},
fAo:function fAo(d){this.a=d},
hbs:function hbs(d){this.a=d},
hbt:function hbt(){},
hbu:function hbu(d){this.a=d},
hbv:function hbv(d,e){this.a=d
this.b=e},
hbw:function hbw(d,e,f){this.a=d
this.b=e
this.c=f},
hbr:function hbr(d,e){this.a=d
this.b=e},
hbx:function hbx(d){this.a=d},
hby:function hby(d){this.a=d},
hbz:function hbz(d,e,f){this.a=d
this.b=e
this.c=f},
hbq:function hbq(d,e){this.a=d
this.b=e},
fO0:function fO0(d,e){this.a=d
this.b=e},
av9:function av9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h1R:function h1R(){},
h1S:function h1S(){},
zK:function zK(d,e,f){this.a=d
this.b=e
this.c=f},
fJP:function fJP(d){this.a=d},
fQR:function fQR(d){this.a=d},
alA:function alA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bOn:function bOn(){},
N4:function N4(d,e,f){this.a=d
this.b=e
this.c=f},
bbN:function bbN(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
hbT:function hbT(){},
hbU:function hbU(d){this.a=d},
aaB:function aaB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h2t:function h2t(d){this.a=d},
bj7:function bj7(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
agA:function agA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
akT:function akT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
akU:function akU(d,e,f,g,h){var _=this
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
bMw:function bMw(d){this.a=d},
bMr:function bMr(){},
bMx:function bMx(){},
bMp:function bMp(){},
bMq:function bMq(){},
bMv:function bMv(d){this.a=d},
bMs:function bMs(d,e){this.a=d
this.b=e},
bMu:function bMu(d,e){this.a=d
this.b=e},
bMt:function bMt(d,e){this.a=d
this.b=e},
bMo:function bMo(d){this.a=d},
beh:function beh(d,e){this.b=d
this.a=e},
R4:function R4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCv:function aCv(d,e,f){this.b=d
this.c=e
this.a=f},
aAX:function aAX(d,e,f){this.a=d
this.b=e
this.c=f},
avN:function avN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
avO:function avO(d,e,f){var _=this
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
css:function css(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cst:function cst(d){this.a=d},
csr:function csr(d){this.a=d},
csu:function csu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
csv:function csv(){},
csw:function csw(d,e){this.a=d
this.b=e},
csx:function csx(){},
csy:function csy(d){this.a=d},
cso:function cso(d){this.a=d},
csp:function csp(d,e){this.a=d
this.b=e},
csq:function csq(d,e,f){this.a=d
this.b=e
this.c=f},
csj:function csj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
csl:function csl(d,e){this.a=d
this.b=e},
csm:function csm(d,e){this.a=d
this.b=e},
csk:function csk(d,e){this.a=d
this.b=e},
csi:function csi(){},
csn:function csn(){},
bdJ:function bdJ(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cSy:function cSy(){},
azJ:function azJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azK:function azK(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cHp:function cHp(d){this.a=d},
cHo:function cHo(d){this.a=d},
cHx:function cHx(d,e){this.a=d
this.b=e},
cHy:function cHy(d,e){this.a=d
this.b=e},
cHz:function cHz(d){this.a=d},
cHw:function cHw(d){this.a=d},
cHA:function cHA(d){this.a=d},
cHB:function cHB(d,e){this.a=d
this.b=e},
cHC:function cHC(){},
cHD:function cHD(d){this.a=d},
cHr:function cHr(d){this.a=d},
cHs:function cHs(d,e){this.a=d
this.b=e},
cHq:function cHq(d,e){this.a=d
this.b=e},
cHt:function cHt(){},
cHu:function cHu(){},
cHv:function cHv(d,e){this.a=d
this.b=e},
aAH:function aAH(){},
aI3:function aI3(){},
hjL(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bsP((w-450*u)/2,(v-900*u)/2,u)},
ago:function ago(){},
fcC:function fcC(d){this.a=d},
aLW:function aLW(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fmT:function fmT(d){this.a=d},
amS:function amS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amT:function amT(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qh$=f
_.Mm$=g
_.anX$=h
_.bu$=i
_.a9$=j
_.c=_.a=null},
bUn:function bUn(d){this.a=d},
bUm:function bUm(){},
bUk:function bUk(d){this.a=d},
bUi:function bUi(){},
bUj:function bUj(d){this.a=d},
bUf:function bUf(d,e){this.a=d
this.b=e},
bUg:function bUg(){},
bUh:function bUh(d){this.a=d},
bUl:function bUl(d,e){this.a=d
this.b=e},
bUe:function bUe(d){this.a=d},
buy:function buy(d,e){this.b=d
this.a=e},
fcD:function fcD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fcE:function fcE(d,e,f){this.a=d
this.b=e
this.c=f},
fcF:function fcF(d,e,f){this.a=d
this.b=e
this.c=f},
fcG:function fcG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fcH:function fcH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fcI:function fcI(){},
amQ:function amQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amR:function amR(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qh$=f
_.Mm$=g
_.anX$=h
_.bu$=i
_.a9$=j
_.c=_.a=null},
bU0:function bU0(){},
bUb:function bUb(d,e){this.a=d
this.b=e},
bUc:function bUc(d){this.a=d},
bUd:function bUd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bU7:function bU7(){},
bU6:function bU6(d,e){this.a=d
this.b=e},
bU8:function bU8(d,e){this.a=d
this.b=e},
bU9:function bU9(){},
bUa:function bUa(d){this.a=d},
bU2:function bU2(d){this.a=d},
bU3:function bU3(d){this.a=d},
bU4:function bU4(d){this.a=d},
bU1:function bU1(d,e){this.a=d
this.b=e},
bU5:function bU5(d){this.a=d},
bkY:function bkY(d,e){this.b=d
this.a=e},
duA:function duA(){},
a2F:function a2F(d,e){this.a=d
this.b=e},
amM:function amM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amN:function amN(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qh$=e
_.Mm$=f
_.anX$=g
_.bu$=h
_.a9$=i
_.c=_.a=null},
bTN:function bTN(d){this.a=d},
bTM:function bTM(){},
bTL:function bTL(){},
bTF:function bTF(){},
bTG:function bTG(){},
bTK:function bTK(d,e,f){this.a=d
this.b=e
this.c=f},
bTJ:function bTJ(d){this.a=d},
bTH:function bTH(d,e){this.a=d
this.b=e},
bTI:function bTI(d){this.a=d},
bkn:function bkn(d,e){this.b=d
this.a=e},
aCy:function aCy(){},
bhV:function bhV(){},
aCA:function aCA(){},
bhW:function bhW(){},
aCB:function aCB(){},
bhX:function bhX(){},
uB(d,e,f,g,h){var w,v,u=null,t=A.m(18),s=A.a([],x.V)
s.push(new A.ab(0,B.H,f.j(0.4),B.hR,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.W(g,h,u,u,u,20),B.aa],w))
v.push(A.c(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.ay(u,A.o(u,A.A(v,B.l,u,B.e,B.M,0,u,u),B.f,u,u,new A.n(f,u,u,t,s,u,B.m),u,u,u,u,B.Pf,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hsW(d,e,f,g,h,i,j){return new C.amO(i,h,d,j,e,f,g,null)},
a77:function a77(d,e){this.c=d
this.a=e},
bku:function bku(d){this.a=d},
tI:function tI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bTE:function bTE(d){this.a=d},
IH:function IH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
WM:function WM(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bni:function bni(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e4U:function e4U(d,e){this.a=d
this.b=e},
e4V:function e4V(d){this.a=d},
e4W:function e4W(d,e){this.a=d
this.b=e},
e4S:function e4S(d){this.a=d},
e4T:function e4T(d){this.a=d},
e4R:function e4R(d){this.a=d},
e4P:function e4P(d){this.a=d},
e4Q:function e4Q(d){this.a=d},
e4O:function e4O(d,e){this.a=d
this.b=e},
e4X:function e4X(d){this.a=d},
e4Y:function e4Y(d,e){this.a=d
this.b=e},
e4Z:function e4Z(d,e){this.a=d
this.b=e},
e5_:function e5_(d,e){this.a=d
this.b=e},
e52:function e52(d,e){this.a=d
this.b=e},
e53:function e53(d,e){this.a=d
this.b=e},
e54:function e54(d,e){this.a=d
this.b=e},
e55:function e55(d,e){this.a=d
this.b=e},
e56:function e56(d,e){this.a=d
this.b=e},
e57:function e57(d,e,f){this.a=d
this.b=e
this.c=f},
e58:function e58(d,e){this.a=d
this.b=e},
e59:function e59(d,e){this.a=d
this.b=e},
e50:function e50(d){this.a=d},
e51:function e51(d){this.a=d},
a0w:function a0w(d,e){this.a=d
this.b=e},
amO:function amO(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
amP:function amP(d){var _=this
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
bTZ:function bTZ(d){this.a=d},
bU_:function bU_(d){this.a=d},
bTY:function bTY(d){this.a=d},
bTP:function bTP(d){this.a=d},
bTQ:function bTQ(d){this.a=d},
bTO:function bTO(d){this.a=d},
bTV:function bTV(d,e,f){this.a=d
this.b=e
this.c=f},
bTW:function bTW(d){this.a=d},
bTS:function bTS(d,e){this.a=d
this.b=e},
bTT:function bTT(d,e,f){this.a=d
this.b=e
this.c=f},
bTX:function bTX(){},
bTU:function bTU(d,e){this.a=d
this.b=e},
bTR:function bTR(d){this.a=d},
Uq:function Uq(d,e){this.c=d
this.a=e},
amL:function amL(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bTp:function bTp(d){this.a=d},
bTq:function bTq(d){this.a=d},
bTA:function bTA(){},
bTz:function bTz(d,e,f){this.a=d
this.b=e
this.c=f},
bTu:function bTu(d,e){this.a=d
this.b=e},
bTt:function bTt(d,e){this.a=d
this.b=e},
bTv:function bTv(d){this.a=d},
bTw:function bTw(d,e){this.a=d
this.b=e},
bTx:function bTx(d,e){this.a=d
this.b=e},
bTs:function bTs(d,e){this.a=d
this.b=e},
bTy:function bTy(d,e,f){this.a=d
this.b=e
this.c=f},
bTr:function bTr(d,e){this.a=d
this.b=e},
ipZ(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ajD(a6),a5=a4.length
if(a5===0)return""
w=A.S(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.V(Date.now(),0,!1))
s=new C.fNr(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("X<1>"),q=q.k("cM<1,p>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.zD)m.push(l===D.x4?"male":"female")
l=u.w
k=A.af(a3,!0,!1,!1,!1).cG(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.af(a3,!0,!1,!1,!1).cG(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.j3(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.j3(h,a2,a2)-A.j3(j,a2,a2))+" years")
l=B.a.i(u.z)
if(l.length!==0)m.push("work: "+l)
f=s.$1(u)
if(f!=null)m.push("married to "+w.h(0,f).b)
e=u.d
if(e!=null&&w.am(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.B(new A.cM(new A.X(a4,new C.fNp(u,f),p),new C.fNq(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aM(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aM(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.az(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
iq_(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ajD(a0),d=e.length
if(d===0)return""
w=x.N
v=A.S(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fNw(v,e)
q=new C.fNu(v)
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
if(d!=null&&v.am(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.am(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("b9<2>")
d=A.d_(new A.b9(p,d),d.k("M.E"))
n=A.B(d,A.a5(d).k("ci.E"))
B.d.ff(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eI(l,new C.fNv(p,m));k.C();t=f){j=l.gP(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aM(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
ib6(d,e,f,g){var w,v,u=C.iq0(d,e)
if(u<=0||f.length<=u)return new A.ag2(!1,D.Ei,f)
if(g.q(0,e.a))return new A.ag2(!1,D.Ei,f)
w=A.T(f).c
v=A.cS(f,0,A.dy(u,"count",x.S),w).dm(0)
return new A.ag2(!0,A.cS(f,u,null,w).dm(0),v)},
ib7(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ajD(d3),d2=d1.length
if(d2===0)return D.hKX
w=x.N
v=A.S(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c_(0,t.a,new C.djQ(t))}s=new C.dk6(v)
d2=x.dy
r=A.S(w,d2)
q=new C.djZ(r)
for(p=new A.dr(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.djY(r)
l=A.S(w,x.do)
for(p=new A.dr(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c6(l.c_(0,k,new C.djR()),o)}h=new C.djX(s)
g=new C.djW(l,r)
p=v.$ti.k("b9<2>")
o=p.k("X<M.E>")
f=A.B(new A.X(new A.b9(v,p),new C.djS(h),o),o.k("M.E"))
e=f.length===0?new A.b9(v,p).gH(0):B.d.gH(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.I)(f),++u){t=f[u]
a0=g.$2(t.a,A.aR(w))
if(a0>d){d=a0
e=t}}a1=A.aR(w)
p=x.S
a2=A.S(w,p)
a3=A.S(w,w)
a4=A.S(w,d2)
d2=x.i
a5=A.S(w,d2)
a6=A.S(w,x.d9)
a7=A.S(w,d2)
a8=A.a([],x.s)
a9=new C.dk4(new C.dk0(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.S(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dr(v,v.r,v.e),j=a2.gamW(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.ex([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.I(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nA(J.dJ(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.S(w,x.dO)
b5=A.a([],x.M)
b6=A.S(w,d2)
b7=new C.djP(a2,new C.dk5(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.I)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.dr(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
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
b5[c4]=new C.L8(c5.a,new A.r(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cs<1>")
d2=A.B(new A.cs(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bQ(0,new C.djT(c6,b4))
for(d2=new A.cd(a4,a4.$ti.k("cd<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aT(c7.b);j.C();){i=j.gP(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.r(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eI(j,new C.djU(c8));i.C();)o.push(j.gP(0).b)
if(o.length===0)continue
B.d.b_(o,new C.djV())
c6.push(new C.aLQ(new A.r(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bi0(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hIv(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cG(d)
return w==null?null:w.b[1]},
hCf(d,e,f,g,h,i,j,k,l,m,n){return new C.a0K(k,f,j,e,l,n,m,d,g,h,i,null)},
aEz(d,e,f,g,h,i,j){return new C.blO(i,d,e,f,j,h,g,null)},
arW:function arW(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aG7:function aG7(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e6z:function e6z(d){this.a=d},
e6y:function e6y(d){this.a=d},
e6B:function e6B(d,e){this.a=d
this.b=e},
e6C:function e6C(d,e){this.a=d
this.b=e},
e6D:function e6D(d){this.a=d},
e6x:function e6x(d,e){this.a=d
this.b=e},
e6A:function e6A(d){this.a=d},
e6F:function e6F(d){this.a=d},
e6E:function e6E(d,e){this.a=d
this.b=e},
arQ:function arQ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aG4:function aG4(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e6_:function e6_(d){this.a=d},
e5Y:function e5Y(d){this.a=d},
e5Z:function e5Z(d){this.a=d},
e60:function e60(d,e){this.a=d
this.b=e},
e5V:function e5V(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5m:function e5m(d){this.a=d},
e5n:function e5n(d,e){this.a=d
this.b=e},
e5E:function e5E(d){this.a=d},
e5C:function e5C(d){this.a=d},
e5D:function e5D(d,e){this.a=d
this.b=e},
e5F:function e5F(d){this.a=d},
e5G:function e5G(d,e){this.a=d
this.b=e},
e5U:function e5U(d,e){this.a=d
this.b=e},
e5B:function e5B(d){this.a=d},
e5A:function e5A(d){this.a=d},
e5z:function e5z(d,e){this.a=d
this.b=e},
e5R:function e5R(){},
e5S:function e5S(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e5Q:function e5Q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e5K:function e5K(d){this.a=d},
e5L:function e5L(d,e,f){this.a=d
this.b=e
this.c=f},
e5J:function e5J(d,e){this.a=d
this.b=e},
e5M:function e5M(d,e){this.a=d
this.b=e},
e5H:function e5H(d,e){this.a=d
this.b=e},
e5I:function e5I(){},
e5N:function e5N(d,e){this.a=d
this.b=e},
e5O:function e5O(d){this.a=d},
e5P:function e5P(d,e){this.a=d
this.b=e},
e5T:function e5T(d,e){this.a=d
this.b=e},
e5a:function e5a(d,e){this.a=d
this.b=e},
e5b:function e5b(d,e){this.a=d
this.b=e},
e62:function e62(d,e,f){this.a=d
this.b=e
this.c=f},
e5X:function e5X(d,e,f){this.a=d
this.b=e
this.c=f},
e5W:function e5W(d){this.a=d},
e5c:function e5c(d){this.a=d},
e5d:function e5d(d){this.a=d},
e5e:function e5e(){},
e5f:function e5f(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5j:function e5j(d,e){this.a=d
this.b=e},
e5i:function e5i(d,e){this.a=d
this.b=e},
e5h:function e5h(d){this.a=d},
e5k:function e5k(d,e){this.a=d
this.b=e},
e5g:function e5g(d){this.a=d},
e61:function e61(d){this.a=d},
e5w:function e5w(){},
e5x:function e5x(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5v:function e5v(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5r:function e5r(d,e,f){this.a=d
this.b=e
this.c=f},
e5q:function e5q(d,e,f){this.a=d
this.b=e
this.c=f},
e5o:function e5o(d,e){this.a=d
this.b=e},
e5s:function e5s(d){this.a=d},
e5t:function e5t(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5p:function e5p(d,e){this.a=d
this.b=e},
e5u:function e5u(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5y:function e5y(d,e){this.a=d
this.b=e},
e69:function e69(){},
e6a:function e6a(d,e){this.a=d
this.b=e},
e6b:function e6b(d){this.a=d},
e6c:function e6c(d,e){this.a=d
this.b=e},
e65:function e65(d){this.a=d},
e63:function e63(d,e){this.a=d
this.b=e},
e66:function e66(d,e){this.a=d
this.b=e},
e67:function e67(d,e){this.a=d
this.b=e},
e68:function e68(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e6d:function e6d(d){this.a=d},
e64:function e64(d){this.a=d},
e5l:function e5l(d){this.a=d},
bhZ:function bhZ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
djN:function djN(d){this.a=d},
djM:function djM(d,e){this.a=d
this.b=e},
djO:function djO(d){this.a=d},
djL:function djL(d,e){this.a=d
this.b=e},
fNr:function fNr(d,e){this.a=d
this.b=e},
fNs:function fNs(d){this.a=d},
fNt:function fNt(){},
fNp:function fNp(d,e){this.a=d
this.b=e},
fNq:function fNq(){},
fNw:function fNw(d,e){this.a=d
this.b=e},
fNx:function fNx(d){this.a=d},
fNy:function fNy(){},
fNu:function fNu(d){this.a=d},
fNv:function fNv(d,e){this.a=d
this.b=e},
L8:function L8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GR:function GR(d,e){this.a=d
this.b=e},
bi0:function bi0(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
djQ:function djQ(d){this.a=d},
dk6:function dk6(d){this.a=d},
djZ:function djZ(d){this.a=d},
dk_:function dk_(){},
djY:function djY(d){this.a=d},
djR:function djR(){},
djX:function djX(d){this.a=d},
djW:function djW(d,e){this.a=d
this.b=e},
djS:function djS(d){this.a=d},
dk0:function dk0(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dk1:function dk1(d){this.a=d},
dk2:function dk2(d){this.a=d},
dk3:function dk3(){},
dk4:function dk4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dk5:function dk5(){},
djP:function djP(d,e,f,g,h,i,j,k,l,m){var _=this
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
djT:function djT(d,e){this.a=d
this.b=e},
djU:function djU(d){this.a=d},
djV:function djV(){},
aLQ:function aLQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bi1:function bi1(d,e){this.b=d
this.a=e},
dk7:function dk7(){},
dk8:function dk8(d){this.a=d},
dk9:function dk9(d){this.a=d},
dka:function dka(){},
blP:function blP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bh1:function bh1(d,e){this.b=d
this.a=e},
bzW:function bzW(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fsu:function fsu(d){this.a=d},
bpa:function bpa(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
f2n:function f2n(d){this.a=d},
f2m:function f2m(d,e){this.a=d
this.b=e},
a0K:function a0K(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aEx:function aEx(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dAj:function dAj(d,e){this.a=d
this.b=e},
dAi:function dAi(d){this.a=d},
dAg:function dAg(d){this.a=d},
dAh:function dAh(d){this.a=d},
dAs:function dAs(d){this.a=d},
dAt:function dAt(d){this.a=d},
dAr:function dAr(d,e){this.a=d
this.b=e},
dAu:function dAu(){},
dAx:function dAx(d){this.a=d},
dAq:function dAq(d,e){this.a=d
this.b=e},
dAw:function dAw(){},
dAy:function dAy(d){this.a=d},
dAp:function dAp(d,e){this.a=d
this.b=e},
dAz:function dAz(d){this.a=d},
dAo:function dAo(d){this.a=d},
dAA:function dAA(d){this.a=d},
dAn:function dAn(d){this.a=d},
dAB:function dAB(d){this.a=d},
dAm:function dAm(d){this.a=d},
dAC:function dAC(d){this.a=d},
dAl:function dAl(d){this.a=d},
dAD:function dAD(d){this.a=d},
dAk:function dAk(d,e){this.a=d
this.b=e},
dAv:function dAv(d){this.a=d},
aeW:function aeW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
blO:function blO(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aeV:function aeV(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
blN:function blN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dAE:function dAE(d){this.a=d},
dAF:function dAF(d,e){this.a=d
this.b=e},
aEy:function aEy(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aKS:function aKS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeX:function aeX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dAO:function dAO(d){this.a=d},
GN:function GN(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hwZ(d){var w=d.V,v=x.N
return w.iZ(w,new C.cgS(),v,v)},
i2r(d){var w=d.bH
if(w>=0)return w
return 5},
hx0(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hwZ(d).h(0,v)
if(w==null||w.length===0)return null
return A.bh(w)},
hx_(d,e){var w=C.hx0(d,e)
if(w!=null&&w.cc(new A.V(Date.now(),0,!1)))return!0
return!1},
i2s(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.hwZ(d),w,w)
u=C.hx0(d,e)
t=u!=null&&u.cc(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bN(A.du(30,0,0,0,0,0).a).ab().ag())
d.V=v},
b2p(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b2p=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lD(t,B.Kj),$async$b2p)
case 3:if(l){u=!0
w=1
break}u=A.lk(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Kj,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2p,v)},
cgS:function cgS(){},
i2p(){var w,v=$.oz(),u=J.e0(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hh(u)},
JC(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$JC=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cc(),$async$JC)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$JC)
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
return A.i($async$JC,v)},
a8Q(d){return C.i2q(d)},
i2q(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8Q=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cc(),$async$a8Q)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hV("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.z),!1,!1,B.cU,null),$async$a8Q)
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
return A.i($async$a8Q,v)},
cgR(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cgR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.JC(),$async$cgR)
case 3:t=m.ie(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gP(t)
q=r.b
if(s.b(q)){p=J.a2(q)
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
return A.i($async$cgR,v)},
OC(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$OC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cgR(d),$async$OC)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.JC(),$async$OC)
case 6:s=f
r=J.a2(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dG(A.a1(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).ab().ag())
r.n(s,t,o)
w=9
return A.b(C.a8Q(s),$async$OC)
case 9:case 8:u=t
w=1
break
case 5:n=C.i2p()
w=10
return A.b(C.JC(),$async$OC)
case 10:s=f
J.aJ(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).ab().ag(),"updatedAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.K))
w=11
return A.b(C.a8Q(s),$async$OC)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$OC,v)},
b2o(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b2o=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.JC(),$async$b2o)
case 3:t=f
for(s=J.dt(t),r=s.gdQ(t),r=r.dm(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8Q(t),$async$b2o)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b2o,v)},
a8R(d,e,f){var w=0,v=A.j(x.H),u
var $async$a8R=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.arV(d,e),$async$a8R)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.OC(d),$async$a8R)
case 7:w=4
break
case 5:w=8
return A.b(C.b2o(d),$async$a8R)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a8R,v)},
arP(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$arP=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.arV(f,e),$async$arP)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.cc(),$async$arP)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.JC(),$async$arP)
case 7:q=o.t(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a2(q)
if(!J.z(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arP,v)},
b2n(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b2n=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.cc(),$async$b2n)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.JC(),$async$b2n)
case 4:t=q.t(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a2(t)
if(!J.z(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2n,v)},
i2t(){var w,v=$.oz(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hh(u)},
arS(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$arS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.cc(),$async$arS)
case 3:if(!g){u=null
w=1
break}t=C.i2t()
w=4
return A.b(A.WN(),$async$arS)
case 4:s=g
r=B.e_.aK(B.V.av(d.f1(),null))
r=B.cN.gco().aK(r)
q=e?999:2
J.aJ(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.K))
w=5
return A.b(A.a8S(s),$async$arS)
case 5:p=e?999:2
u=new A.a1V("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arS,v)},
arR(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$arR=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.WN(),$async$arR)
case 3:p=a0
o=J.a2(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a2(n)
l=A.aI(m.h(n,"usesRemaining"))
k=l==null?null:B.i.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b2n(J.k(l==null?"":l),j),$async$arR)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cd.cF(0,B.cE.aK(t))
s=C.hx1(r)}catch(f){q=A.ac(f)
$.am.$1("[family tree qr stash] decode: "+A.v(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dG(A.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).ab().ag())
o.n(p,g,l)}w=5
return A.b(A.a8S(p),$async$arR)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arR,v)},
hx1(d){var w,v,u,t,s=null
try{w=B.V.aP(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.i2v(A.a1(w,x.N,x.z))
return u}catch(t){v=A.ac(t)
$.am.$1("[family tree sync] parse: "+A.v(v))
return s}},
hfG(d){var w=0,v=A.j(x.m),u,t,s
var $async$hfG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.X(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.arR(t[1])
w=1
break}u=null
w=1
break}u=C.hx1(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hfG,v)},
i2v(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.cZ(v,x.f)
u=A.cE(u,new C.cgU(),u.$ti.k("M.E"),x.k)
t=A.a5(u).k("X<M.E>")
s=A.B(new A.X(u,new C.cgV(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bh(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.S(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.ie(p),t=t.gae(t),o=x.B;t.C();){n=t.gP(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.cZ(l,u)
n=A.cE(n,new C.cgW(),n.$ti.k("M.E"),o)
k=A.a5(n).k("X<M.E>")
j=A.B(new A.X(n,new C.cgX(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.arT(h,w,s,r,q)},
arV(d,e){var w=0,v=A.j(x.y),u,t
var $async$arV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Ou(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bu(d),$async$arV)
case 3:u=t.cL(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arV,v)},
ch2(d){var w=0,v=A.j(x.bC),u,t,s
var $async$ch2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bu(d),$async$ch2)
case 3:t=s.b8(f,new C.ch3(),x.cs)
t=A.B(t,t.$ti.k("aj.E"))
B.d.b_(t,new C.ch4())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ch2,v)},
WO(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$WO=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.arV(e,d),$async$WO)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.OC(e),$async$WO)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Bu(e),$async$WO)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dJ(r,new C.ch0(g))
r=A.B(t,t.$ti.k("M.E"))}t=J.a2(r)
if(t.gau(r)){u=null
w=1
break}t=t.dO(r,new C.ch1(e),x.k)
r=A.B(t,t.$ti.k("aj.E"))
q=A.S(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.LZ(e,o),$async$WO)
case 14:n=i
if(J.cL(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.arT(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WO,v)},
b2s(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b2s=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WO(d,e,f,g),$async$b2s)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Hw(A.L4(q.f1(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2s,v)},
b2r(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b2r=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WO(d,e,f,g),$async$b2r)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.arS(r,f),$async$b2r)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aIR(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2r,v)},
WP(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$WP=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.hfG(a0),$async$WP)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.X(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.arP(g.a,d,e,f,s,r),$async$WP)
case 6:if(!a2){if(r)throw A.Y(A.bc("This backup expired or the sender's tree is no longer available."))
throw A.Y(A.bc("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bFo(e,j),$async$WP)
case 12:case 11:w=13
return A.b(C.ajl(e,j,s),$async$WP)
case 13:h=n.h(0,i)
w=h!=null&&J.cL(h)?14:15
break
case 14:w=16
return A.b(C.BF(e,i,h),$async$WP)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bsV(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WP,v)},
arT:function arT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cgZ:function cgZ(){},
ch_:function ch_(){},
cgY:function cgY(){},
cgU:function cgU(){},
cgV:function cgV(){},
cgW:function cgW(){},
cgX:function cgX(){},
ch3:function ch3(){},
ch4:function ch4(){},
ch0:function ch0(d){this.a=d},
ch1:function ch1(d){this.a=d},
hoX(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f5(null,x.H)
return A.hI(d,new C.arU(w,e,g,i,f,h,null),!0,null,x.H)},
djK(d,e,f,g,h,i,j,k){return new C.bhY(i,e,k,j,g,f,h,d,null)},
arU:function arU(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aG6:function aG6(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e6m:function e6m(d){this.a=d},
e6n:function e6n(d,e,f){this.a=d
this.b=e
this.c=f},
e6r:function e6r(d,e){this.a=d
this.b=e},
e6s:function e6s(d){this.a=d},
e6j:function e6j(d){this.a=d},
e6k:function e6k(d,e){this.a=d
this.b=e},
e6l:function e6l(d,e){this.a=d
this.b=e},
e6q:function e6q(d){this.a=d},
e6p:function e6p(d,e){this.a=d
this.b=e},
e6o:function e6o(){},
e6u:function e6u(d){this.a=d},
e6v:function e6v(d,e){this.a=d
this.b=e},
e6t:function e6t(d,e){this.a=d
this.b=e},
dkb:function dkb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bi_:function bi_(d,e,f){this.d=d
this.e=e
this.a=f},
aeb:function aeb(d,e,f){this.c=d
this.d=e
this.a=f},
bhY:function bhY(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bi2:function bi2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a13:function a13(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aG5:function aG5(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e6e:function e6e(d,e){this.a=d
this.b=e},
e6f:function e6f(d){this.a=d},
e6g:function e6g(d){this.a=d},
e6h:function e6h(d){this.a=d},
e6i:function e6i(d){this.a=d},
a14:function a14(d){this.a=d},
bnj:function bnj(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e6w:function e6w(d,e){this.a=d
this.b=e},
b0W(d,e){return new C.b0V(d,e,null)},
b0V:function b0V(d,e,f){this.c=d
this.d=e
this.a=f},
isq(d){if(!(d!=null&&B.a.X(d,"ngmy:thumb:")))return null
return B.a.aY(d,11)},
iA5(d){return A.bU(B.L,null,new C.h4_(new C.um(A.O(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hz4(d,e){return new C.auY(e,d,null)},
aTr(d,e,f,g,h,i,j){var w=C.isq(i)
if(w!=null)return A.bu(e,new A.a6(j,f,new C.a7T(w,!0,null),null),B.aq)
return A.aSN(e,B.bZ,f,g,h,i,j)},
m_:function m_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7T:function a7T(d,e,f){this.c=d
this.d=e
this.a=f},
bmY:function bmY(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.ba$=e
_.c=_.a=null},
dSq:function dSq(d){this.a=d},
dSr:function dSr(){},
dSs:function dSs(d,e){this.a=d
this.b=e},
bmX:function bmX(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
h4_:function h4_(d){this.a=d},
h3Z:function h3Z(d,e){this.a=d
this.b=e},
h3Y:function h3Y(d,e){this.a=d
this.b=e},
h3X:function h3X(d,e){this.a=d
this.b=e},
auY:function auY(d,e,f){this.c=d
this.d=e
this.a=f},
cqK:function cqK(d,e){this.a=d
this.b=e},
aOi:function aOi(){},
izR(d){var w=null
return A.ce(w,w,!0,w,new C.h3n(),d,w,!0,!0,x.e2)},
iB4(d,e,f,g,h){var w=null
return A.ce(w,w,!0,w,new C.hba(h,g,f,e),d,w,!0,!0,x.N)},
izT(d,e){var w=null
return A.ce(w,w,!0,w,new C.h3r(e),d,w,!0,!0,x.dY)},
izS(d){var w=null
return A.ce(w,w,!0,w,new C.h3q(),d,w,!0,!0,x.c5)},
aWo:function aWo(d,e){this.a=d
this.b=e},
aWn:function aWn(d){this.a=d},
aUp:function aUp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h3n:function h3n(){},
hba:function hba(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h3r:function h3r(d){this.a=d},
h3q:function h3q(){},
a_H:function a_H(d,e){this.c=d
this.a=e},
aBf:function aBf(){var _=this
_.d=$
_.c=_.a=_.e=null},
dbf:function dbf(d){this.a=d},
dbg:function dbg(d){this.a=d},
dbe:function dbe(d,e){this.a=d
this.b=e},
dbh:function dbh(d){this.a=d},
dbi:function dbi(d){this.a=d},
a_G:function a_G(d){this.a=d},
aBe:function aBe(){this.d=$
this.c=this.a=null},
dbb:function dbb(d){this.a=d},
dbc:function dbc(d){this.a=d},
dbd:function dbd(d){this.a=d},
a_b:function a_b(d){this.a=d},
azW:function azW(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cJ6:function cJ6(){},
cJc:function cJc(d){this.a=d},
cJd:function cJd(d){this.a=d},
cJe:function cJe(d){this.a=d},
cJb:function cJb(){},
cJf:function cJf(d){this.a=d},
cJg:function cJg(d){this.a=d},
cJa:function cJa(){},
cJh:function cJh(d,e){this.a=d
this.b=e},
cJ9:function cJ9(d,e){this.a=d
this.b=e},
cJ7:function cJ7(d,e){this.a=d
this.b=e},
cJi:function cJi(d){this.a=d},
cJ8:function cJ8(){},
cJj:function cJj(d){this.a=d},
a2S:function a2S(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bzO:function bzO(){this.d=$
this.c=this.a=null},
fs_:function fs_(d,e){this.a=d
this.b=e},
fs0:function fs0(d){this.a=d},
fs1:function fs1(d,e){this.a=d
this.b=e},
adb:function adb(d,e){this.a=d
this.b=e},
GB:function GB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bzM:function bzM(d,e){var _=this
_.d=$
_.bu$=d
_.a9$=e
_.c=_.a=null},
frY:function frY(d,e){this.a=d
this.b=e},
azP:function azP(d,e){this.c=d
this.a=e},
bzN:function bzN(d,e){var _=this
_.d=$
_.bu$=d
_.a9$=e
_.c=_.a=null},
frZ:function frZ(d){this.a=d},
bzL:function bzL(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aQr:function aQr(){},
aQs:function aQs(){},
bHt(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.i.be(u),s=B.o.D(B.i.T((u-t)*100),0,99),r=d<0?"-":"",q=A.nT(B.o.v(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.h1E(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cT(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cT(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cT(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b1(B.o.v(s),2,"0")
n.push(A.cT(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Zz(A.cT(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aT4(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aT4=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.i9().l8(85,1280,B.eZ),$async$aT4)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fs(),$async$aT4)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hz3()
w=9
return A.b(C.cqJ(q,r),$async$aT4)
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
return A.i($async$aT4,v)},
aTp(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aTp=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.X(g,"ngmy:ws-thumb:")
if(i){u=C.cqG(g)
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
return A.b(A.Hx(p,!0,null,o).dc(0,B.fX),$async$aTp)
case 9:n=a1
w=10
return A.b(n.lc(),$async$aTp)
case 10:m=a1
w=11
return A.b(m.b.hk(B.ho),$async$aTp)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eR(B.dL.gaU(l))
k="data:image/png;base64,"+B.cN.gco().aK(i)
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
return A.i($async$aTp,v)},
h1E:function h1E(){},
um:function um(d){this.a=d},
auX:function auX(d,e,f){this.c=d
this.d=e
this.a=f},
aHF:function aHF(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
f_x:function f_x(d,e){this.a=d
this.b=e},
f_o:function f_o(d){this.a=d},
f_p:function f_p(d){this.a=d},
f_v:function f_v(d,e){this.a=d
this.b=e},
f_u:function f_u(d,e){this.a=d
this.b=e},
f_r:function f_r(d,e){this.a=d
this.b=e},
f_q:function f_q(d,e){this.a=d
this.b=e},
f_s:function f_s(d){this.a=d},
f_t:function f_t(d,e){this.a=d
this.b=e},
f_w:function f_w(d,e){this.a=d
this.b=e},
f_j:function f_j(d,e){this.a=d
this.b=e},
f_n:function f_n(d){this.a=d},
f_m:function f_m(d,e){this.a=d
this.b=e},
f_l:function f_l(d){this.a=d},
f_y:function f_y(d,e){this.a=d
this.b=e},
f_z:function f_z(d,e){this.a=d
this.b=e},
f_k:function f_k(d,e){this.a=d
this.b=e},
hMK(d,e,f){var w="thumbnailPath",v=e.ak()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).ab().ag(),"project",v],x.N,x.z)},
h1F(d,e,f){var w=0,v=A.j(x.N),u
var $async$h1F=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.V.av(C.hMK(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h1F,v)},
bHv(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bHv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.h1F(!0,d,e),$async$bHv)
case 4:w=3
return A.b(r.auV(g,d,e.a),$async$bHv)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.e_.aK(B.V.av(C.hMK(d,e,null),null))
u="NGMY_WS:"+B.kU.gco().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHv,v)},
hDG(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
how(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d7(s,"NGMYWSSYNC2|"))return!0
if(J.d7(s,"NGMY_WS:"))return!0
if(J.eD(s,t))return!0
if(J.d7(s,"{"))try{w=B.V.aP(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
ixR(d){var w,v,u,t=C.hDG(d)
if(t==null)return null
if(C.how(t))return t
w=B.a.cd(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aY(t,w))
if(C.how(v))return v}u=B.a.cd(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aY(t,u))
if(C.how(v))return v}return null},
hov(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d7(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d7(q,"NGMY_WS:")){v=B.cd.cF(0,B.cE.aK(J.n3(q,8)))
w=t.a(B.V.aP(0,v,r))}else w=t.a(B.V.aP(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hil(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bHu(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bHu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.X(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.auU(t[1]),$async$bHu)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hov(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hov(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHu,v)},
hou(d){var w=B.o.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lJ(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bGY(){var w=0,v=A.j(x.o),u,t
var $async$bGY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.HI(),$async$bGY)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hov(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGY,v)},
hNV(d,e,f,g){return A.bU(B.L,null,new C.haY(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
haY:function haY(d,e,f){this.a=d
this.b=e
this.c=f},
afh:function afh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f_B:function f_B(d,e){this.a=d
this.b=e},
f_C:function f_C(d,e){this.a=d
this.b=e},
f_D:function f_D(d,e){this.a=d
this.b=e},
f_E:function f_E(d,e){this.a=d
this.b=e},
f_A:function f_A(d){this.a=d},
auR:function auR(d,e,f){this.c=d
this.d=e
this.a=f},
boG:function boG(){var _=this
_.c=_.a=_.e=_.d=null},
f_e:function f_e(d,e){this.a=d
this.b=e},
f_f:function f_f(d){this.a=d},
f_g:function f_g(d){this.a=d},
auW:function auW(d){this.a=d},
aHE:function aHE(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
f_i:function f_i(d){this.a=d},
f_h:function f_h(d){this.a=d},
i5O(d,e,f,g,h){return new C.Ph(h,g,d,e,f,null)},
aMD:function aMD(d,e){this.a=d
this.b=e},
Ph:function Ph(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHG:function aHG(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
f00:function f00(){},
f_X:function f_X(d,e){this.a=d
this.b=e},
f_Y:function f_Y(d){this.a=d},
f_I:function f_I(d){this.a=d},
f_G:function f_G(d){this.a=d},
f_H:function f_H(d){this.a=d},
f_R:function f_R(d,e){this.a=d
this.b=e},
f_O:function f_O(d,e){this.a=d
this.b=e},
f_P:function f_P(d,e){this.a=d
this.b=e},
f_Q:function f_Q(d,e,f){this.a=d
this.b=e
this.c=f},
f_M:function f_M(d,e,f){this.a=d
this.b=e
this.c=f},
f_K:function f_K(d){this.a=d},
f_L:function f_L(d){this.a=d},
f_N:function f_N(d){this.a=d},
f03:function f03(d){this.a=d},
f02:function f02(d){this.a=d},
f04:function f04(d){this.a=d},
f01:function f01(d){this.a=d},
f_F:function f_F(d){this.a=d},
f_J:function f_J(d,e){this.a=d
this.b=e},
f0_:function f0_(d,e){this.a=d
this.b=e},
f_Z:function f_Z(d,e){this.a=d
this.b=e},
f_U:function f_U(d){this.a=d},
f_V:function f_V(d){this.a=d},
f_W:function f_W(d,e){this.a=d
this.b=e},
f_T:function f_T(d,e){this.a=d
this.b=e},
f_S:function f_S(d,e,f){this.a=d
this.b=e
this.c=f},
bBz:function bBz(){},
Bh(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ahR(d,e,f){return C.ilV(d,e,f)},
ilV(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ahR=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aF("String",e,f),$async$ahR)
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
return A.i($async$ahR,v)},
ahQ(d,e){return C.ilU(d,e)},
ilU(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ahQ=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ahQ)
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
return A.i($async$ahQ,v)},
ikK(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.U3(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bEj(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bEj=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b5H(q),$async$bEj)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aTp(q,!1),$async$bEj)
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
return A.i($async$bEj,v)},
hU8(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aI(d.h(0,"price")),o=p==null?null:p
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
hil(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.cZ(s,x.f)
w=A.cE(w,new C.cIn(),w.$ti.k("M.E"),x.Q)
v=A.a5(w).k("X<M.E>")
r=A.B(new A.X(w,new C.cIo(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bh(J.k(t==null?"":t))
return new C.lJ(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
ipV(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.x4
case"female":case"f":return D.oP
default:return D.zD}},
hJ3(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hsX(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ipV(v==null?j:J.k(v))
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
return new C.i8(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ipX(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.PD
case"viewer":return D.l7
default:return D.v9}},
ipY(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Hy(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aS7(d,e){return B.a.i(e.toLowerCase())===C.Hy(d,e)&&d.y!==D.l7},
uC(d,e){var w,v=d.y
if(v===D.l7)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Hy(d,e))return!0
if(v===D.PD)return!0
v=d.e
return new A.N(v,A.hoC(),A.T(v).k("N<1,p>")).q(0,w)},
iph(d){return J.dJ(d,new C.fMj()).gJ(0)},
hbJ(d){var w=0,v=A.j(x.y),u,t
var $async$hbJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bu(d),$async$hbJ)
case 3:u=t.rs(f,new C.hbK(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hbJ,v)},
bFo(d,e){var w=0,v=A.j(x.H),u,t
var $async$bFo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bu(d),$async$bFo)
case 3:t=g
if(J.rs(t,new C.fJO(e))){w=1
break}if(C.iph(t)>=2)throw A.Y(A.bc("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bFo,v)},
amV(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.cZ(h,x.f)
w=A.cE(w,new C.bUq(),w.$ti.k("M.E"),x.P)
v=A.a5(w).k("X<M.E>")
g=A.B(new A.X(w,new C.bUr(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b8(u,new C.bUs(),x.N)
t=A.B(w,w.$ti.k("aj.E"))}else t=A.a([],x.s)
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
n=C.ipX(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aT(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cb)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gP(f)
if(l.b(i))m.push(A.a1(i,k,j))}return new C.l2(w,v,s,!r,t,g,q,p,o,n,m)},
hJi(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.az(v,0,8)},
DP(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SZ(d),$async$DP)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$DP)
case 4:t=f
w=5
return A.b(t.a7V(0),$async$DP)
case 5:w=6
return A.b(C.fzW(t,l),$async$DP)
case 6:s=f
if(J.cL(s)){u=s
w=1
break}r=B.a.gY(B.a.i(l.toLowerCase()))
q=t.a
p=J.a2(q)
o=A.aW(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hEi(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.pg(l,n),$async$DP)
case 11:u=n
w=1
break
case 10:case 8:m=A.aW(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gY(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hEi(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.pg(l,n),$async$DP)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DP,v)},
fzW(d,e){return C.ii5(d,e)},
ii5(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fzW=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a2(a3)
a5=A.aW(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Bh(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.V.aP(0,a5,null)
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
l=B.V.aP(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hil(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aW(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Bh(a9)+"_"+n))
i=C.ikK(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.X(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b5H(h),$async$fzW)
case 17:g=b1
if(g!=null){i=i.U3(g)
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
case 8:J.T7(q,new C.fzX())
if(p&&J.ad(q)!==0)C.pg(a9,q)
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
return A.i($async$fzW,v)},
bFS(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bFS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SZ(d),$async$bFS)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DP(r),$async$bFS)
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
return A.i($async$bFS,v)},
hEi(d){var w,v,u,t
try{w=B.V.aP(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.cZ(w,x.f)
v=A.cE(v,new C.fvt(),v.$ti.k("M.E"),x.fA)
u=A.a5(v).k("X<M.E>")
v=A.B(new A.X(v,new C.fvu(),u),u.k("M.E"))
B.d.b_(v,new C.fvv())
return v}catch(t){v=A.a([],x.D)
return v}},
pg(d,e){return C.izG(d,e)},
izG(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$pg=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.SZ(b2),$async$pg)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$pg)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Bh(a8)
p=A.aW(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b8(x.j.a(B.V.aP(0,p,null)),new C.h3b(),a2).fB(0)
a2=J.b8(b3,new C.h3c(),a2).c0(0,new C.h3d())
n=A.d_(a2,a2.$ti.k("M.E"))
a2=o,a2=A.e1(a2,a2.r,A.a5(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eD(n,m)?17:18
break
case 17:a5=C.Bh(a8)
l=A.aW(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.aab(l),$async$pg)
case 19:t=21
a5=C.Bh(a8)
k=A.aW(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.V.aP(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.aab(a5==null?null:J.k(a5)),$async$pg)
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
return A.b(C.ahQ(r,"ngmy_worksheet_item_v3_"+C.Bh(a8)+"_"+m),$async$pg)
case 29:w=30
return A.b(C.ahQ(r,"ngmy_worksheet_thumb_v3_"+C.Bh(a8)+"_"+m),$async$pg)
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
case 14:case 10:a2=J.cH(b3),a3=a2.gae(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gP(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bEj(h),$async$pg)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ahR(r,"ngmy_worksheet_thumb_v3_"+C.Bh(a8)+"_"+a4,f),$async$pg)
case 40:g=i.U3(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ahQ(r,"ngmy_worksheet_thumb_v3_"+C.Bh(a8)+"_"+a4),$async$pg)
case 41:g=i.U3(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ahQ(r,"ngmy_worksheet_thumb_v3_"+C.Bh(a8)+"_"+a4),$async$pg)
case 42:case 34:a4=i.a
w=43
return A.b(C.ahR(r,"ngmy_worksheet_item_v3_"+C.Bh(a8)+"_"+a4,B.V.av(g.ak(),null)),$async$pg)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.v(a8))
w=31
break}J.c6(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ahR(r,"ngmy_worksheets_index_v3_"+C.Bh(a8),B.V.av(q,null)),$async$pg)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.v(a8))
u=!1
w=1
break}a3=a2.eO(b3,new C.h3e(q))
a4=a3.$ti.k("cM<1,aa<p,@>>")
a7=A.B(new A.cM(a3,new C.h3f(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ahR(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gY(B.a.i(a8.toLowerCase()))),B.V.av(a0,null)),$async$pg)
case 45:w=46
return A.b(J.hTd(r),$async$pg)
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
return A.i($async$pg,v)},
Ms(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Ms=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DP(d),$async$Ms)
case 3:t=g
s=J.cH(t)
r=s.bk(t,new C.hbI(e))
if(r===-1)s.ca(t,0,e)
else s.n(t,r,e)
u=C.pg(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ms,v)},
bFE(d,e){var w=0,v=A.j(x.H),u
var $async$bFE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DP(d),$async$bFE)
case 2:u=g
J.n2(u,new C.fMN(e))
w=3
return A.b(C.pg(d,u),$async$bFE)
case 3:return A.h(null,v)}})
return A.i($async$bFE,v)},
HA(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$HA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$HA)
case 3:l=f
k=A.a([],x._)
j=B.a.gY(B.a.i(d.toLowerCase()))
i=A.aW(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.V.aP(0,i,null)
if(x.j.b(t)){j=J.cZ(t,x.f)
j=A.cE(j,new C.fQ0(),j.$ti.k("M.E"),x.k)
s=A.a5(j).k("X<M.E>")
r=A.B(new A.X(j,new C.fQ1(),s),s.k("M.E"))
B.d.b_(r,new C.fQ2())
k=r}}catch(h){}w=4
return A.b(C.fwf(d),$async$HA)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.iis(k,p,d)
j=A.T(o)
s=j.k("N<1,aa<p,@>>")
s=A.B(new A.N(o,new C.fQ3(),s),s.k("aj.E"))
n=B.V.av(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.S4(d,o),$async$HA)
case 7:case 6:j=j.k("X<1>")
m=A.B(new A.X(o,new C.fQ4(d),j),j.k("M.E"))
if(m.length!==0)C.aRU(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$HA,v)},
h2Y(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$h2Y=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.S4(d,e),$async$h2Y)
case 3:t=J.dJ(e,new C.h2Z(d))
s=A.B(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aRU(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h2Y,v)},
a4w(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a4w=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a4w)
case 2:n=g
m=B.a.gY(B.a.i(d.toLowerCase()))
l=A.aW(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.V.aP(0,l,null)
if(x.j.b(u)){m=J.cZ(u,x.f)
m=A.cE(m,new C.hbD(),m.$ti.k("M.E"),x.k)
t=A.a5(m).k("X<M.E>")
s=A.B(new A.X(m,new C.hbE(),t),t.k("M.E"))
o=s}}catch(k){}q=J.oD(o,new C.hbF(e))
if(B.a.i(e.x).length===0&&C.uC(e,d)){m=B.a.i(d.toLowerCase())
p=e.aH9(e.y===D.l7?D.l7:D.v9,m)}else p=e
if(q===-1)J.n1(o,0,p)
else J.aJ(o,q,p)
w=3
return A.b(C.S4(d,o),$async$a4w)
case 3:w=C.uC(p,d)?4:5
break
case 4:w=6
return A.b(C.aRT(C.Hy(p,d),p),$async$a4w)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a4w,v)},
aS5(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aS5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.HA(d),$async$aS5)
case 2:u=g
t=J.cH(u)
s=A.nA(t.eO(u,new C.fMu(e)))
t.bq(u,new C.fMv(e))
w=3
return A.b(C.S4(d,u),$async$aS5)
case 3:w=s!=null&&C.aS7(s,d)?4:5
break
case 4:w=6
return A.b(C.fvx(e),$async$aS5)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aS5,v)},
ajD(d){var w=d.f,v=A.T(w).k("X<1>")
w=A.B(new A.X(w,new C.hbO(),v),v.k("M.E"))
return w},
hlW(d,e){var w,v=d.f,u=A.nA(new A.X(v,new C.fLZ(e),A.T(v).k("X<1>")))
v=C.ajD(d)
w=A.T(v).k("X<1>")
v=A.B(new A.X(v,new C.fM_(e,u),w),w.k("M.E"))
B.d.b_(v,new C.fM0())
return v},
iq0(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hNZ(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bk(C.hlW(d,u),new C.hbb(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
iru(d,e){var w
if(e==null||e.length===0)return 1
w=C.hlW(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fQS(),A.T(w).k("N<1,G>")).eD(0,B.yx)+1},
izz(d){var w,v=C.ajD(d)
if(v.length===0)return null
w=new A.X(v,new C.h2S(),A.T(v).k("X<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
ipW(d){return A.J(["id",d.a,"name",d.b,"gender",C.hJ3(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
irp(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.S(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aR(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.I)(a0),++u){q=a0[u]
p=q.a
r.I(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.zD?n:q.c
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
d=q.aH4(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cSt(a1,w,a3.d,a2.y,s,a0,v)},
Bu(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Bu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Bu)
case 3:q=f
p=B.a.gY(B.a.i(d.toLowerCase()))
o=A.aW(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.V.aP(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.cZ(t,x.f)
p=A.cE(p,new C.fPY(),p.$ti.k("M.E"),x.k)
s=A.a5(p).k("X<M.E>")
p=A.B(new A.X(p,new C.fPZ(),s),s.k("M.E"))
B.d.b_(p,new C.fQ_())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bu,v)},
ajl(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ajl=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.v9:D.l7
a7=C.Hy(b2,b3)
w=2
return A.b(C.Bu(b1),$async$ajl)
case 2:a8=b5
a9=J.cH(a8)
b0=a9.bk(a8,new C.h2N(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bFo(b1,b2),$async$ajl)
case 5:case 4:if(b0===-1){u=b2.aH9(a6,a7)
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
i=i!==D.zD?i:l.c
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
s.n(0,m,l.aH4(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b9<2>")
s=A.B(new A.b9(s,k),k.k("M.E"))
k=a5?D.v9:D.l7
u=t.cSv(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.S4(b1,a8),$async$ajl)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aRT(B.a.i(b3.toLowerCase()),u),$async$ajl)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ajl,v)},
hEJ(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).ab().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("N<1,aa<p,@>>"),k=A.B(new A.N(m,C.hN3(),l),l.k("aj.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.ab().ag(),"updatedAt",o],r,x.K),"createdAt",s.ab().ag(),"updatedAt",o],r,x.z)},
hEK(d,e){var w=new A.V(Date.now(),0,!1).ab().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("N<1,aa<p,@>>")
u=A.B(new A.N(u,C.hN3(),t),t.k("aj.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.ab().ag(),"updatedAt",w],x.N,x.z)},
ig_(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a2(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.amV(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hoC(),A.T(j).k("N<1,p>")).c0(0,new C.fw2())
t=A.B(j,j.$ti.k("M.E"))
if(u===v)s=D.v9
else s=B.d.q(t,u)?D.PD:D.l7
return w.aH9(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.amV(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.cZ(q,h)
h=A.cE(h,new C.fw3(),h.$ti.k("M.E"),x.P)
p=A.a5(h).k("X<M.E>")
o=A.B(new A.X(h,new C.fw4(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b8(n,new C.fw5(),x.N).c0(0,new C.fw6())
t=A.B(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.v9
else s=B.d.q(t,u)?D.PD:D.l7
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
return new C.l2(h,r,p,!m,t,o,l,j,v,s,B.ck)},
fwf(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fwf=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fwj()
h=x.N
g=x.z
w=7
return A.b(A.ih(A.a([A.lO("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.lO("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.lO("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fwf)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.S(h,g)
h=A.B(p,g)
l=h
J.h7(l,o)
J.h7(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aJ(m,j,k)}l=m
h=A.a5(l).k("b9<2>")
h=A.cE(new A.b9(l,h),new C.fwg(a0),h.k("M.E"),x.k)
l=A.a5(h).k("X<M.E>")
l=A.B(new A.X(h,new C.fwh(),l),l.k("M.E"))
B.d.b_(l,new C.fwi())
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
return A.i($async$fwf,v)},
iis(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a2(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dO(e,new C.fAH(),v).c0(0,new C.fAI())
t=A.d_(u,u.$ti.k("M.E"))
s=A.S(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Hy(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.l7){m=q.e
m=!new A.N(m,A.hoC(),A.T(m).k("N<1,p>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gP(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.irp(l,v)
o=C.Hy(k,w)
p=v.d
s.n(0,u,o===w?k.bgH(p,D.v9):k.bgH(p,v.y))}j=s.$ti.k("b9<2>")
j=A.B(new A.b9(s,j),j.k("M.E"))
B.d.b_(j,new C.fAJ())
return j},
S4(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$S4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$S4)
case 2:u=g
t=B.a.gY(B.a.i(d.toLowerCase()))
s=J.b8(e,new C.fDI(),x.a)
s=A.B(s,s.$ti.k("aj.E"))
w=3
return A.b(u.aF("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.V.av(s,null)),$async$S4)
case 3:return A.h(null,v)}})
return A.i($async$S4,v)},
aRT(d,e){return C.inJ(d,e)},
inJ(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aRT=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mg("family_trees",A.a([C.hEJ(e,d)],p),null,B.cU),$async$aRT)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mg("family_trees",A.a([C.hEK(e,d)],p),null,B.cU),$async$aRT)
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
return A.i($async$aRT,v)},
aRU(d,e){return C.inK(d,e)},
inK(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aRU=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("N<1,aa<p,@>>")
m=n.k("aj.E")
l=A.B(new A.N(e,new C.fJ2(d),n),m)
r=l
w=7
return A.b(A.mg("family_trees",r,null,B.cU),$async$aRU)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.N(e,new C.fJ3(d),n),m)
p=k
w=8
return A.b(A.mg("family_trees",p,null,B.cU),$async$aRU)
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
return A.i($async$aRU,v)},
fvx(d){return C.ifc(d)},
ifc(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fvx=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Sv("family_trees",A.J(["id",d],x.N,x.z),null,B.cU),$async$fvx)
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
return A.i($async$fvx,v)},
rx:function rx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lJ:function lJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cIq:function cIq(){},
cIp:function cIp(){},
cIn:function cIn(){},
cIo:function cIo(){},
IG:function IG(d,e){this.a=d
this.b=e},
i8:function i8(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
amU:function amU(d,e){this.a=d
this.b=e},
fMj:function fMj(){},
hbK:function hbK(d){this.a=d},
fJO:function fJO(d){this.a=d},
l2:function l2(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bUu:function bUu(){},
bUt:function bUt(){},
bUq:function bUq(){},
bUr:function bUr(){},
bUs:function bUs(){},
fzX:function fzX(){},
fvt:function fvt(){},
fvu:function fvu(){},
fvv:function fvv(){},
h3b:function h3b(){},
h3c:function h3c(){},
h3d:function h3d(){},
h3e:function h3e(d){this.a=d},
h3f:function h3f(){},
hbI:function hbI(d){this.a=d},
fMN:function fMN(d){this.a=d},
fQ0:function fQ0(){},
fQ1:function fQ1(){},
fQ2:function fQ2(){},
fQ3:function fQ3(){},
fQ4:function fQ4(d){this.a=d},
h2Z:function h2Z(d){this.a=d},
hbD:function hbD(){},
hbE:function hbE(){},
hbF:function hbF(d){this.a=d},
fMu:function fMu(d){this.a=d},
fMv:function fMv(d){this.a=d},
hbO:function hbO(){},
fLZ:function fLZ(d){this.a=d},
fM_:function fM_(d,e){this.a=d
this.b=e},
fM0:function fM0(){},
hbb:function hbb(d){this.a=d},
fQS:function fQS(){},
h2S:function h2S(){},
fPY:function fPY(){},
fPZ:function fPZ(){},
fQ_:function fQ_(){},
h2N:function h2N(d){this.a=d},
fw2:function fw2(){},
fw3:function fw3(){},
fw4:function fw4(){},
fw5:function fw5(){},
fw6:function fw6(){},
fwj:function fwj(){},
fwk:function fwk(d){this.a=d},
fwg:function fwg(d){this.a=d},
fwh:function fwh(){},
fwi:function fwi(){},
fAH:function fAH(){},
fAI:function fAI(){},
fAJ:function fAJ(){},
fDI:function fDI(){},
fJ2:function fJ2(d){this.a=d},
fJ3:function fJ3(d){this.a=d},
cIr:function cIr(d,e){this.a=d
this.b=e},
cIs:function cIs(d,e){this.a=d
this.b=e},
aJN:function aJN(d,e,f){this.a=d
this.b=e
this.c=f},
bc0:function bc0(){this.b=this.a=0},
bc_:function bc_(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bzP:function bzP(){},
xu(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcg()+"/"+w.gcw()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.b1(B.o.v(w.gnB()),2,"0")+":"+B.a.b1(B.o.v(w.gH1()),2,"0")},
ioO(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
J.br(a4.save())
a4.translate(a6.a,a6.b-b0)
w=A.bY(new A.r(0,b0+a7*0.005),a7*0.06,a7*0.45)
v=B.v.j(0.22)
$.R()
u=A.L()
u.r=v.gp(0)
a5.c1(w,u)
for(w=a7*0.05,v=-a7,u=v*0.24,t=a7*0.1,s=u+a7*0.2,r=a7*0.04,q=a7*0.065,p=v*0.05,o=a7*0.14,n=p+w,m=a7*0.025,l=0;l<2;++l){k=B.hp[l]*a7*0.075
j=k-w
j=A.bv(new A.a3(j,u,j+t,s),new A.aP(r,r))
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
i.r=B.dg.gp(0)
a5.ar(j,i)
k-=q
k=A.bv(new A.a3(k,p,k+o,n),new A.aP(m,m))
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
i.r=B.c.gp(0)
a5.ar(k,i)}w=v*0.16
u=v*0.52
t=a7*0.32
s=w+t
q=a7*0.09
h=A.bv(new A.a3(w,u,s,u+t),new A.aP(q,q))
q=A.L()
q.r=b2.gp(0)
a5.ar(h,q)
q=v*0.27
t=a7*0.02
t=A.bv(new A.a3(w,q,s,q+a7*0.045),new A.aP(t,t))
q=B.c.j(0.35)
s=A.L()
s.r=q.gp(0)
a5.ar(t,s)
s=v*0.47
g=new A.r(v*0.15,s)
f=new A.r(a7*0.15,s)
s=v*0.06
t=a7*0.07
a5.ah(g,g.a5(0,new A.r(s,a7*0.17)),A.ahP(B.te,t))
s=g.a5(0,new A.r(s,a7*0.18))
q=A.L()
q.r=B.te.gp(0)
a5.O(s,r,q)
e=-2.5+b3*0.5
d=f.a5(0,new A.r(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,A.ahP(B.te,t))
w=A.L()
w.r=B.te.gp(0)
a5.O(d,r,w)
v*=0.7
a0=new A.r(0,v)
a1=a7*0.22
if(b1===1){w=a0.a5(0,new A.r(0,-a1*0.12))
u=A.L()
u.r=B.mj.gp(0)
a5.O(w,a1*1.18,u)}w=A.L()
w.r=B.te.gp(0)
a5.O(a0,a1,w)
if(b1===0){w=A.bX(a0,a1)
u=A.L()
u.r=B.mj.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.bX(a0,a1)
u=A.L()
u.r=B.mj.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a1*0.3,u=a1*0.2,l=0;l<2;++l){a2=B.hp[l]
t=new A.ar(B.T,B.Q,B.W,B.X,B.U)
t.r=B.mj.gp(0)
a5.O(new A.r(0+a2*a1*1.05,w),u,t)}}a3=B.i.F(a8*0.8,3)>2.85
for(w=v+a1*0.42,u=a1*0.12,t=a1*0.25,s=a8*0.7,r=a1*0.13,v+=a1*0.05,q=-a1*0.15,p=v+0,o=a1*0.15,l=0;l<2;++l){n=B.hp[l]*a1
m=0+n*0.4
if(a3){k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.b=B.ac
k.c=1.6
k.r=B.bq.gp(0)
k.d=B.bH
a5.ah(new A.r(m+q,p),new A.r(m+o,p),k)}else{k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.r=B.c.gp(0)
a5.O(new A.r(m,v),t,k)
k=Math.sin(s)
j=new A.ar(B.T,B.Q,B.W,B.X,B.U)
j.r=B.v.gp(0)
a5.O(new A.r(m+k*a1*0.06,p),r,j)}m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=B.hY.j(0.5).gp(0)
a5.O(new A.r(0+n*0.62,w),u,m)}a5.cQ(A.bY(a0.a5(0,new A.r(0,a1*0.5)).aJ(0,new A.r(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,A.ahP(B.bq,1.8))
a4.restore()},
i5L(){var w,v=$.oz(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.hh(u)},
auS(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$auS=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cc(),$async$auS)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$auS)
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
return A.i($async$auS,v)},
auT(d){return C.i5M(d)},
i5M(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$auT=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cc(),$async$auT)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hV("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.z),!1,!1,B.cU,null),$async$auT)
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
return A.i($async$auT,v)},
auV(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$auV=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.cc(),$async$auV)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.i5L()
w=4
return A.b(C.auS(),$async$auV)
case 4:r=h
q=B.a.i(e)
p=B.e_.aK(t)
J.aJ(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cN.gco().aK(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.K))
w=5
return A.b(C.auT(r),$async$auV)
case 5:u=new A.a1V("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auV,v)},
auU(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$auU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.cc(),$async$auU)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.auS(),$async$auU)
case 4:q=f
p=J.a2(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a2(o)
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
try{s=B.cd.cF(0,B.cE.aK(t))}catch(h){r=A.ac(h)
$.am.$1("[worksheet qr stash] decode: "+A.v(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dG(A.a1(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).ab().ag())
p.n(q,i,m)}w=5
return A.b(C.auT(q),$async$auU)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auU,v)},
hz3(){var w=new A.V(Date.now(),0,!1).ab()
return"wst_"+(1000*w.a+w.b)+"_"+B.cS.aw(999999)},
i5N(d){var w,v,u,t,s,r,q
try{w=A.Bs(d)
if(w==null)return d
v=w
if(J.My(v)>960||J.Mx(v)>960){s=v
r=J.My(v)>=J.Mx(v)?960:null
v=A.Sp(s,J.Mx(v)>J.My(v)?960:null,B.IQ,r)}s=v
u=A.J1(82).zA(s,B.rh)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cb(u))
return s}catch(q){t=A.ac(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.v(t))
return d}},
cqJ(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cqJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.i5N(e)
$.cqF.n(0,s,t)
u=C.bHx(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cqJ,v)},
b5H(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b5H=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d7(l,"data:image")){u=null
w=1
break}t=4
r=J.eD(l,",")?B.d.gal(J.lR(l,",")):l
q=B.cE.aK(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hz3()
w=7
return A.b(C.cqJ(p,q),$async$b5H)
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
return A.i($async$b5H,v)},
cqG(d){var w=0,v=A.j(x.T),u,t,s
var $async$cqG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.X(s,"data:image")){u=s
w=1
break}w=3
return A.b(A.cqI(s),$async$cqG)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cN.gco().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cqG,v)},
aab(d){var w=0,v=A.j(x.H),u,t
var $async$aab=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=A.hML(d)
if(t==null){w=1
break}$.cqF.W(0,t)
w=3
return A.b(C.bHw(t),$async$aab)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aab,v)},
bHx(d,e){return C.ixU(d,e)},
ixU(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bHx=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aQH
w=7
return A.b(n==null?$.aQH=A.hkM():n,$async$bHx)
case 7:r=g
q=new Uint8Array(A.cb(e))
p=J.ml(r,"thumbs","readwrite")
B.iN.mj(J.mk(p,"thumbs"),q,l)
w=8
return A.b(J.oC(p),$async$bHx)
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
return A.i($async$bHx,v)},
bHw(d){return C.ixS(d)},
ixS(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bHw=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aQH
w=7
return A.b(o==null?$.aQH=A.hkM():o,$async$bHw)
case 7:r=f
q=J.ml(r,"thumbs","readwrite")
B.iN.GB(J.mk(q,"thumbs"),m)
w=8
return A.b(J.oC(q),$async$bHw)
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
return A.i($async$bHw,v)}},D,N,X,Y,Z,F,A_,O,P,Q,A0,R,A1,S,A2,L
J=c[1]
A=c[0]
B=c[2]
G=c[82]
T=c[90]
U=c[91]
V=c[61]
H=c[114]
M=c[100]
I=c[106]
W=c[24]
E=c[52]
K=c[39]
C=a.updateHolder(c[4],C)
D=c[110]
N=c[86]
X=c[111]
Y=c[80]
Z=c[89]
F=c[47]
A_=c[70]
O=c[62]
P=c[71]
Q=c[85]
A0=c[112]
R=c[113]
A1=c[40]
S=c[96]
A2=c[25]
L=c[59]
C.aqu.prototype={}
C.b0X.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bl1(),f=h.x!=null&&h.zV(i).length===0
if(h.x!=null)w=f?B.b5:B.bE
else w=h.gV4()?B.bE:B.ed
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.K(D.bso,B.r,1)
s=x.p
r=A.o(i,A.x(A.a([A.o(i,D.foq,B.f,i,i,new A.n(B.b5.j(0.12),i,i,A.m(999),i,i,B.m),i,i,i,i,B.hl,i,i,i),B.S,D.fUI,B.at,A.c(C.xu(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fQh,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,D.b9Z,i,i,i,i,B.Pc,i,i,i)
q=A.m(16)
p=A.K(B.bn,B.r,1)
o=A.K(B.b5.j(0.28),B.r,1)
n=A.hn2(h.d)
o=A.o(B.z,C.b0W(A.fTd(h.e,n),30),B.f,i,i,new A.n(B.mm,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.c(v,i,i,i,i,i,i,D.fLb,B.K,i,i)
m=A.m(14)
l=A.K(B.bn,B.r,1)
q=A.o(i,A.x(A.a([o,B.P,n,B.bC,D.fV0,B.af,A.o(i,A.x(A.a([D.hap,B.bC,A.c(A.Bw(h.c),i,i,i,i,i,i,D.fFI,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.c,i,l,m,i,i,B.m),i,i,i,i,B.f8,i,i,1/0)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.aS,i,p,q,i,i,B.m),i,i,i,i,U.a1M,i,i,i)
p=A.m(16)
m=A.K(B.bn,B.r,1)
l=j.aUi("Original due",C.xu(h.r,!1))
n=j.aUi("Current due",C.xu(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.o(i,A.x(A.a([l,B.P,n,B.S,A.o(i,A.c(h.gaOf(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.n(o,i,i,k,i,i,B.m),i,i,i,i,B.wU,i,i,1/0),B.S,j.cmU(),B.P,j.c9e(g,f)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.c,i,m,p,i,i,B.m),i,i,i,i,B.bl,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.K(B.bn,B.r,1)
B.d.u(p,A.a([B.S,A.o(i,A.x(A.a([D.fW1,B.at,A.c(q,i,i,i,i,i,i,D.fKm,i,i,i)],s),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.aS,i,n,o,i,i,B.m),i,i,i,i,B.bl,i,i,1/0)],s))}if(h.gaIQ()){q=A.m(14)
o=A.K(B.cB,B.r,1.6)
B.d.u(p,A.a([B.S,A.o(i,A.x(A.a([D.hbK,B.P,A.bu(A.m(12),A.ed(new A.a6(1/0,88,A.b4(i,i,i,new A.XD(h.ax,B.a_,D.fte,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.c,i,o,q,i,i,B.m),i,i,i,i,B.CZ,i,i,i)],s))}p.push(B.aA)
p.push(D.h3u)
return A.o(i,A.x(A.a([r,new A.D(B.a1O,A.x(p,B.am,i,B.e,B.h,0,B.p),i)],s),B.am,i,B.e,B.M,0,B.p),B.aq,i,i,new A.n(B.c,i,t,u,i,i,B.m),i,i,i,i,i,i,i,1/0)},
aUi(d,e){var w=null
return A.A(A.a([A.E(A.c(d,w,w,w,w,w,w,D.ad7,w,w,w),1),A.c(e,w,w,w,w,w,w,D.fGL,w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
cmU(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.abe(B.ed,u,"Not paid yet")
w=t.zV(null).length
v=w===0?B.b5:B.bE
return this.abe(v,u,C.xu(t.x,!0))},
c9e(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.abe(B.b5,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.abe(B.b5,t,"None yet")
w=A.c("Missed days ("+w+")",u,u,u,u,u,u,D.ad7,u,u,u)
v=A.T(d).k("N<1,hc>")
v=A.B(new A.N(d,new C.c9O(),v),v.k("aj.E"))
return A.x(A.a([w,B.ak,A.bZ(B.bI,v,B.br,u,6,6)],x.p),B.B,u,B.e,B.h,0,B.p)},
abe(d,e,f){var w=null
return A.A(A.a([A.E(A.c(e,w,w,w,w,w,w,D.ad7,w,w,w),1),new A.d2(1,B.cg,A.c(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e6,w,w),w)],x.p),B.B,w,B.e,B.h,0,w,w)}}
C.bef.prototype={
a3(d,e){new A.XD(this.b,B.a_,e,!0,3.5,null).a3(d,e)},
aD(d){return d.b!==this.b}}
C.aqH.prototype={
S(){return new C.aFy(A.a([],x.bp))},
ge4(){return this.c}}
C.aFy.prototype={
Z(){this.a4()
this.JA()},
JA(){var w=0,v=A.j(x.H),u,t=this,s
var $async$JA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3M(t.a.c),$async$JA)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.dTi(t,s))
case 1:return A.h(u,v)}})
return A.i($async$JA,v)},
aWg(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.l(v,v,u?B.bu:B.bj,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bu:B.bj).j(0.22)
w=A.m(10)
return A.bB(v,new A.b6(4,r,new A.av(u,1,B.r,-1)),v,B.bl,v,v,v,v,!0,new A.b6(4,w,new A.av((this.a.d.a?B.bu:B.bj).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.m(10),D.b7D),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aWf(d){return this.aWg(d,null)},
Qz(d){return this.cqC(d)},
cqC(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qz=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.IP:B.eZ
w=7
return A.b(new A.i9().D2(72,900,900,n),$async$Qz)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fs(),$async$Qz)
case 8:p=f
n=B.cN.gco().aK(p)
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
if(n!=null)n.L(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c("Could not pick photo: "+A.v(o),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Qz,v)},
b4C(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.m(10),n=A.K((q?B.bu:B.bj).j(0.18),B.r,1)
if(d)q=B.cV
else q=s.a.d.a?B.bu:B.bj
q=A.W(e,q,r,r,r,18)
w=A.c(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aS:B.aw,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cV
else u=s.a.d.a?B.bu:B.bj
t=x.p
u=A.E(A.x(A.a([w,A.c(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.B,r,B.e,B.h,0,B.p),1)
v=A.fr(r,r,r,r,r,r,r,r,r,r,r,B.cV,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cl)
q=A.a([q,B.aa,u,A.bO(!1,A.c(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.W(B.cA,s.a.d.a?B.bu:B.bj,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cl))
return A.o(r,A.A(q,B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.n(p,r,n,o,r,r,B.m),r,r,r,B.jg,D.bFB,r,r,r)},
DW(d){return this.bFg(d)},
bFf(){return this.DW(null)},
bFg(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DW=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ax()
r=new A.at(new A.bd(a4,B.b6,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.i.fM(a4)
p=a5.c
a4=a4===q?B.o.v(B.i.M(p)):B.i.aa(p,2)}o=new A.at(new A.bd(a4,B.b6,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.at(new A.bd(a4,B.b6,B.aP),s)
if(a3){a4=new A.V(Date.now(),0,!1).bN(6048e8)
m=A.c0(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)}else{a4=a5.f
m=A.c0(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bs(a4,!0,x.cT)
i=a3?null:A.hn2(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xH?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hW(B.v.j(0.55),!0,"Dismiss",a4,new C.dT1(),new C.dT2(a2,t,a5,r,new C.dT3(a2,t),o,n,j),B.eJ,!0,x.y),$async$DW)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cG(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.V$=s
r.R$=0
o.V$=s
o.R$=0
n.V$=s
n.R$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.L(x.q).f.U(D.fzO)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.U(D.fys)
w=1
break}a1=A.fTd(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xH?"male":"female"
w=7
return A.b(A.ajC(a3,A.hvC(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DW)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xH?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c0(a3.gck(),a3.gcg(),a3.gcw(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c0(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)))a5.cUQ(a2.a)
w=8
return A.b(A.ajC(t.a.c,a5),$async$DW)
case 8:case 5:w=9
return A.b(t.JA(),$async$DW)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DW,v)},
aWW(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cV.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cV
else s=(this.a.d.a?B.bu:B.bj).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b0W(d,18)
if(g)q=B.cV
else q=this.a.d.a?B.aS:B.aw
return A.aF(!1,B.a3,!0,v,A.aM(!1,u,!0,A.o(p,A.A(A.a([r,B.bf,A.c(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.F,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.b9,B.h,0,p,p),B.f,p,p,new A.n(p,p,s,t,p,p,B.m),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
Tn(d){return this.cIN(d)},
cIN(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Tn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hW(B.v.j(0.55),!0,"Dismiss",s,new C.dTl(),new C.dTm(t,d),B.hk,!0,x.y),$async$Tn)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.ajC(t.a.c,d),$async$Tn)
case 7:w=8
return A.b(t.JA(),$async$Tn)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Tn,v)},
Qy(d,e){return this.bQk(0,e)},
bQk(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lr(s,"Cancel","Delete",e.b+" \xb7 "+A.Bw(e.c)+" will be removed from this device.","Delete this debt?"),$async$Qy)
case 3:if(!g){w=1
break}w=4
return A.b(C.fMB(t.a.c,e.a),$async$Qy)
case 4:w=5
return A.b(t.JA(),$async$Qy)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qy,v)},
ah7(d){return this.ckg(d)},
ckg(d){var w=0,v=A.j(x.H),u=this,t
var $async$ah7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.L,null,new C.dTf(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ah7)
case 2:return A.h(null,v)}})
return A.i($async$ah7,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.eDz
w=J.dJ(m.d,new C.dTn())
v=A.B(w,w.$ti.k("M.E"))
w=J.dJ(m.d,new C.dTo())
u=A.B(w,w.$ti.k("M.E"))
t=B.d.cC(v,0,new C.dTp())
w=A.m(18)
s=m.a.d.a
r=s?D.cGD:D.aEP
q=A.K(s?B.cV.j(0.35):B.cV.j(0.18),B.r,1)
s=A.o(l,D.c6S,B.f,l,l,new A.n(B.cV.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.m),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.ar,A.E(A.c("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.aw,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a3,!0,A.m(12),A.aM(!1,A.m(12),!0,D.eCU,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dTq(m),l,l,l,l,l,l,l),B.f,B.cV,0,l,l,l,l,l,B.ai)],p),B.l,l,B.e,B.h,0,l,l)
o=A.E(m.cEN("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bw(t)
r=A.a([A.o(l,A.x(A.a([s,B.af,A.A(A.a([o,B.aa,A.E(m.baP(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.h,0,l,l)],p),B.B,l,B.e,B.h,0,B.p),B.f,l,l,new A.n(l,l,q,w,l,new A.a7(B.ay,B.aC,B.x,r,l,l),B.m),l,l,l,l,B.anF,l,l,l),B.aA],p)
if(J.cu(m.d)){w=m.a.d.a
s=w?B.ek:B.c
q=A.m(18)
o=A.K((w?B.bu:B.bj).j(0.12),B.r,1)
n=A.o(l,D.c1n,B.f,l,l,new A.n(B.cV.j(0.12),l,l,A.m(16),l,l,B.m),l,52,l,l,l,l,l,52)
w=A.c("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.aw,l,l,l,l,l,l,l,l,15,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.o(l,A.x(A.a([n,B.af,w,B.at,A.c("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bj,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.h,0,B.p),B.f,l,l,new A.n(s,l,o,q,l,l,B.m),l,l,l,l,D.bIk,l,l,1/0))}else{w=m.gcpQ()
s=A.B(new A.N(v,w,A.T(v).k("N<1,w>")),x.l)
if(u.length!==0){q=A.a([B.ak,new A.D(D.bK0,A.c("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bj,l,l,l,l,l,l,l,l,12,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.N(u,w,A.T(u).k("N<1,w>")))
B.d.u(s,q)}B.d.u(r,s)}return A.x(r,B.am,l,B.e,B.h,0,B.p)},
baP(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.v.j(0.22):B.c.j(0.85),s=A.m(14),r=A.K((v.a.d.a?B.bu:B.bj).j(0.12),B.r,1),q=A.c(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bu:B.bj,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cV
else w=v.a.d.a?B.aS:B.aw
return A.o(u,A.x(A.a([q,B.bC,A.c(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.B,u,B.e,B.h,0,B.p),B.f,u,u,new A.n(t,u,r,s,u,u,B.m),u,u,u,u,B.ez,u,u,u)},
cEN(d,e){return this.baP(!1,d,e)},
cpR(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zV(j).length,h=d.bkh()
if(d.x!=null){w=d.zV(j).length
v=w===0?B.cV:B.bE}else if(d.gV4())v=B.bE
else{if(h)w=B.cV
else w=k.a.d.a?B.bu:B.bj
v=w}if(d.x!=null){w=d.zV(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xu(u,!1)}else{u.toString
t="Paid "+C.xu(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xu(w,!1)+" \xb7 "+i+" missed":"Due "+C.xu(w,!1)}w=k.a.d.a?B.ek:B.c
u=A.m(18)
if(d.gV4()&&d.x==null)s=B.bE.j(0.35)
else s=(k.a.d.a?B.bu:B.bj).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ab(0,B.H,B.v.j(0.04),B.cP,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bs:B.mm
o=A.K(d.gV4()&&d.x==null?B.bE.j(0.45):B.cV.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hn2(d.d)
o=A.o(B.z,A.d3(C.b0W(A.fTd(d.e,m),24),n),B.f,j,j,new A.n(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.aw
m=x.p
n=A.a([new A.d2(1,B.cg,A.c(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.F,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaIQ())B.d.u(n,A.a([B.e5,A.W(B.Q3,B.cV.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.h,0,j,j),B.cM,A.c(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.B,j,B.e,B.h,0,B.p),1)
n=A.Bw(d.c)
l=k.a.d.a?B.aS:B.aw
n=A.c(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.o(j,A.aF(!1,B.a3,!0,j,A.aM(!1,q,!0,new A.D(X.ant,A.A(A.a([o,B.bb,p,B.aa,A.x(A.a([n,B.bC,A.W(B.eM,(k.a.d.a?B.bu:B.bj).j(0.5),j,j,j,18)],m),B.dJ,j,B.e,B.h,0,B.p)],m),B.l,j,B.e,B.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dTh(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.n(w,j,s,u,r,j,B.m),j,j,j,B.d4,j,j,j,j)}}
C.uX.prototype={}
C.amI.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.b8
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
n.push(A.ay(a0,A.o(a0,A.W(B.cA,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.n(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
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
l.push(A.c(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aAX,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.HT,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.dl(B.dx,m,B.f,A.A(l,B.l,a0,B.e,B.M,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bEN,A.c(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cL:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fC,A.x(a2,u,a0,B.e,B.M,0,B.p),a0),1))
n.push(D.fu2)
a2=A.a([A.A(n,B.l,a0,B.e,B.h,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.D(B.wT,A.o(a0,a0,B.f,a0,a0,new A.n(a0,a0,a0,a0,a0,new A.a7(B.a5,B.a9,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.m),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.m1,A.x(a2,B.l,a0,B.e,B.M,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.o(a0,e,B.f,a0,a0,new A.n(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.m),a0,a0,a0,B.hL,a0,a0,a0,a0)}return A.o(a0,e,B.f,a0,a0,new A.n(a0,a0,q,s,p,new A.a7(B.ay,B.aC,B.x,a1.d,a0,a0),B.m),a0,a0,a0,D.bG4,a0,a0,a0,a0)}}
C.aXF.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.o(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.b8?B.b8:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.c(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bo:B.cL,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.h,0,q,q),B.cM,n],m)
if(p.z)o.push(new A.D(B.v0,n,q))
return new A.D(B.d4,A.x(o,B.l,q,B.e,B.M,0,B.p),q)}}
C.Up.prototype={
S(){return new C.bhT()}}
C.bhT.prototype={
gc3P(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aE(d,n,x.w).w,l=x.p,k=A.a([D.eDu,D.eDA],l)
for(w=0;w<8;++w){v=D.a6c[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.ID:B.A3
q=t===s
r=A.W(r,q?B.eE:B.bV,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.bf,A.c(v.b,n,n,n,n,n,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.aa,new A.bx(1,B.ba,A.c(v.c,n,1,B.a2,n,n,n,B.Bq,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.av(B.eE,2,B.r,-1)
s=new A.n(n,n,new A.bE(p,p,p,p),new A.bb(s,s,s,s),n,n,B.m)}else s=n
q=o.a
k.push(A.ay(n,new A.D(B.eY,A.x(A.a([new A.D(B.nb,new A.c3(B.aL,B.e,B.h,B.l,n,B.p,n,0,r,n),n),A.o(n,new A.dq(!0,new C.amI(v,q.d,q.e,new C.diI(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.B,n,B.e,B.h,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.diJ(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bGt,A.bI(D.hhl,n,new C.diK(o,d),A.bn(B.b2,n,n,n,n,B.pf,n,n,new A.ba(A.m(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cP(new A.aY(0,1/0,0,m.a.b*0.9),A.cn(k,n,n,D.bKX,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nx.prototype={
ak(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.ab().ag()],x.N,x.z)},
bgT(d,e,f){return new C.nx(this.a,e,d,f)}}
C.IF.prototype={
x8(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.IF(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aGY(d){var w=null
return this.x8(w,w,w,w,w,d,w,w,w,w,w,w)},
cQs(d){var w=null
return this.x8(w,w,w,w,d,w,w,w,w,w,w,w)},
bgR(d,e,f){var w=null
return this.x8(d,w,w,w,w,w,w,w,e,w,f,w)},
cR6(d){var w=null
return this.x8(w,w,w,w,w,w,d,w,w,w,w,w)},
cRf(d){var w=null
return this.x8(w,w,w,w,w,w,w,w,w,d,w,w)},
cQq(d){var w=null
return this.x8(w,w,w,d,w,w,w,w,w,w,w,w)},
cRh(d){var w=null
return this.x8(w,w,w,w,w,w,w,w,w,w,w,d)},
cQn(d){var w=null
return this.x8(w,w,d,w,w,w,w,w,w,w,w,w)},
cQi(d){var w=null
return this.x8(w,d,w,w,w,w,w,w,w,w,w,w)},
Gt(d){var w=null
return this.x8(w,w,w,w,w,w,w,d,w,w,w,w)},
cRp(d,e,f,g,h,i,j,k,l,m,n){return this.x8(d,e,f,g,null,h,i,j,k,l,m,n)},
ak(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cNX(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bTb(d),k=A.aI(d.h(0,"emblem")),j=k==null?o:B.i.M(k),i=A.aI(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cQ(d.h(0,n))).length!==0?B.a.i(A.cQ(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cQ(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Ey.gew(D.Ey))
s=i==null?o:B.i.D(i,18,36)
r=l.$2("position",D.a7U)
q=l.$2("frame",D.a7d)
l=l.$2("texture",D.a79)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cQ(d.h(0,"author"))):o
return this.cRp(p,u,t,q,r,A.rm(d.h(0,"ribbon"))?A.Ha(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a04.prototype={
S(){return new C.aCw(A.a([],x.I),D.PC)},
ge4(){return this.c}}
C.aCw.prototype={
Z(){var w,v=this
v.a4()
v.f=A.Ao(0,1)
w=$.ax()
v.z=new A.at(B.ax,w)
v.Q=new A.at(B.ax,w)
v.lh()
w=v.a
C.bFO(w.c,w.d).bE(new C.djo(v),x.fL)},
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
v.a2()},
lh(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LZ(s.c,s.d),$async$lh)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.djc(t,r))
t.ayz()
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
gav6(){var w,v=this
if(!J.cu(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
ayz(){var w,v,u=this.gav6(),t=this.z
t===$&&A.d()
w=u==null
v=w?null:u.b
t.sb2(0,v==null?"":v)
t=this.Q
t===$&&A.d()
w=w?null:u.c
t.sb2(0,w==null?"":w)},
ciF(d){this.l(new C.dj9(this,d))
this.ayz()},
Oq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Oq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nx(B.o.v(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aTN(r.c,r.d,s),$async$Oq)
case 3:w=4
return A.b(t.lh(),$async$Oq)
case 4:if(t.c==null||J.cu(t.d)){w=1
break}q=J.oD(t.d,new C.diL(s))
p=q>=0?q:J.ad(t.d)-1
t.l(new C.diM(t,p))
t.ayz()
r=t.f
r===$&&A.d()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.C0(p+1,B.cn,B.l4),$async$Oq)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Oq,v)},
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
break}s=t.gav6()
s=s==null?null:s.a
if(s==null)s=B.o.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aTN(o.c,o.d,new C.nx(s,r,q,new A.V(p,0,!1))),$async$BE)
case 3:w=4
return A.b(t.lh(),$async$BE)
case 4:if(t.c==null){w=1
break}t.l(new C.djd(t))
case 1:return A.h(u,v)}})
return A.i($async$BE,v)},
P8(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$P8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gav6()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.diU(r),s,null,!0,!0,x.y),$async$P8)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bFy(s.c,s.d,r.a),$async$P8)
case 4:t.l(new C.diV(t))
w=5
return A.b(t.lh(),$async$P8)
case 5:if(t.c!=null){s=t.f
s===$&&A.d()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.d()
s.V7(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$P8,v)},
zg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$zg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BE(),$async$zg)
case 5:case 4:if(t.c==null){w=1
break}w=J.cL(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.Sn(s,r.r,o,p,q),$async$zg)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a8(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hNx(s,r.x,r.r),$async$zg)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LZ(s.c,s.d),$async$zg)
case 10:l=e
for(s=n.d,r=J.cH(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.nx(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.BF(r.c,r.d,l),$async$zg)
case 11:w=12
return A.b(t.lh(),$async$zg)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$zg,v)},
a2d(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a2d=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BE(),$async$a2d)
case 5:case 4:if(t.c==null){w=1
break}s=t.gze(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dz(D.As,new C.dja(t),new C.djb())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new A.o8("Our Family",o,"",""))
for(o=J.aT(t.d);o.C();){n=o.gP(o)
p.push(new A.o8(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(A.hoT(o,new A.tT(s,r,"",p,new A.vd(q.d,null,null,null,null,"","","")),null),$async$a2d)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a2d,v)},
OQ(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$OQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BE(),$async$OQ)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.ain,null,new C.diQ(t),s,!0,!0,!0,E.abd,!1,!1,x.N),$async$OQ)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cQs(r)
t.l(new C.diR(t,q))
s=t.a
w=7
return A.b(C.T1(s.c,s.d,q),$async$OQ)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OQ,v)},
Yo(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.ain,null,new C.diW(t),r,!0,!0,!0,E.abd,!1,!1,x.e),$async$Yo)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.diX(t,s))
r=t.a
w=4
return A.b(C.T1(r.c,r.d,s),$async$Yo)
case 4:r=t.f
r===$&&A.d()
if(r.f.length!==0)r.C0(0,B.e8,B.n8)
case 1:return A.h(u,v)}})
return A.i($async$Yo,v)},
bW_(d){var w=d.bU(),v=B.a.b1(B.o.v(w.gcg()),2,"0"),u=B.a.b1(B.o.v(w.gcw()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gze(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c32()
if(r.e)w=D.ah2
else if(J.cu(r.d)){w=r.y
v=r.gze(0)
u=r.a.f
t=A.c(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fF3,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a6(q,330,new A.D(I.aoO,new C.a_k(w,v,0,q),q),q),B.bx,t,B.ak,A.c(u,q,q,q,q,q,q,A.l(q,q,D.kZ.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.ay(q,A.o(q,D.fob,B.f,q,q,new A.n(q,q,q,A.m(18),A.a([new A.ab(0,B.H,B.dX.j(0.45),B.J,18)],x.V),B.xx,B.m),q,q,q,q,B.Pf,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcMZ(),q,q,q,q,q,q,!1,B.a4))
w.push(B.S)
w.push(A.hs(D.bYl,D.hgN,r.gaPX(),q))
B.d.u(u,w)}w=A.as(A.ca(A.x(u,B.l,q,B.e,B.M,0,B.p),B.t,q,B.y,q,q,B.eG,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.c(w,q,q,q,q,q,q,A.l(q,q,D.kZ.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.d()
u=r.w?B.e4:B.C1
u=A.x(A.a([new A.D(D.bHz,w,q),A.E(A.K1(v,new C.djm(r),J.ad(r.d)+1,q,r.gciE(),u,B.aL),1),r.bIe()],x.p),B.l,q,B.e,B.h,0,B.p)
w=u}v=x.p
return A.c5(q,D.a_v,new A.an(B.a0,q,B.b4,B.t,A.a([D.aSq,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c32(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cL(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.L1(B.ef,"AI",h.gbG2(),!0))
if(h.a.f)f.push(new C.L1(B.m4,"Cover",h.gbQU(),!1))
if(h.a.f)f.push(new C.L1(B.xp,"Header",h.gbLQ(),!1))
if(J.cL(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.L1(B.vr,"Print",h.gcrY(),!1))
if(h.a.f&&J.cL(h.d)&&h.r>=0){v=h.w
u=v?B.hn:B.jj
t=v?"Save":"Edit"
f.push(new C.L1(u,t,v?h.gcyl():new C.dj6(h),!1))}if(h.a.f)f.push(new C.L1(B.ib,"Add page",h.gaPX(),!1))
v=C.hJ2(h.y.Q)
u=h.gze(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dRI
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.av(B.kD.j(0.5),1,B.r,-1)
j=A.o(g,A.W(l.a,D.kZ,g,g,g,17),B.f,g,g,new A.n(g,g,new A.bE(i,i,i,i),new A.bb(k,k,k,k),g,new A.a7(B.a5,B.a9,B.x,j,g,g),B.m),g,32,g,g,g,g,g,32)
k=j}j=D.kZ.j(0.85)
p.push(new A.bx(1,B.ba,A.ay(B.c1,A.x(A.a([k,B.bC,A.c(l.b,g,1,g,g,g,g,new A.F(!0,j,g,g,g,g,9.5,B.F,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.M,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.amI(v,u,t+" \xb7 "+s+" "+r,new C.dj7(h),A.A(p,B.l,g,B.e,B.h,0,g,g),g)},
AA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BE(),$async$AA)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aT(t.d);r.C();){q=r.gP(r)
s.push(q.b+" "+q.c)}p=A.a41(B.d.aM(s," "))
s=t.c
s.toString
w=6
return A.b(A.ce(null,null,!0,null,new C.diN(t,p),s,null,!0,!0,x.N),$async$AA)
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
return A.b(t.Ev(),$async$AA)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.G6("Swahili (Kiswahili)",!0),$async$AA)
case 18:w=16
break
case 17:w=19
return A.b(t.cJq(o==="sw"?"Swahili (Kiswahili)":"English"),$async$AA)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$AA,v)},
a_n(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.K(B.kD.j(0.3),B.r,1),r=x.p
return new A.D(B.cy,A.aM(!1,v,!0,A.o(w,A.A(A.a([A.o(w,A.W(e,B.c,w,w,w,21),B.f,w,w,new A.n(w,w,w,w,w,B.xx,B.a6),w,42,w,w,w,w,w,42),B.bb,A.E(A.x(A.a([A.c(f,w,w,w,w,w,w,B.LD,w,w,w),A.c(g,w,w,w,w,w,w,B.Ft,w,w,w)],r),B.B,w,B.e,B.h,0,B.p),1)],r),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.n(u,w,s,t,w,w,B.m),w,w,w,w,B.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dj8(d,h),w,w,w,w,w,w,w),w)},
Ev(){return this.bVt()},
bVt(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Ev=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dj_(r),a7,null,!0,!0,x.ei),$async$Ev)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eH("Working on it\u2026",$.ax())
a6.a=!0
a7=r.c
a7.toString
A.ce(null,null,!1,null,new C.dj0(o),a7,null,!0,!0,x.H).fw(new C.dj1(a6))
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
for(a1=0;a1<8;++a1){i=D.As[a1]
J.c6(j,i.a)}w=8
return A.b(C.aiJ(a0,a7,new C.dj2(o),d,l,e,j),$async$Ev)
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
if(l!=null&&a6.a)A.a8(l,!0).e2()
l=o
l.sij($.ax())
J.aUf(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.L(x.q).f
j=n
l.U(A.b2(null,null,null,null,null,B.t,null,A.c(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcn(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.am(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bgT(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.BF(j.c,j.d,l),$async$Ev)
case 11:w=12
return A.b(r.lh(),$async$Ev)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.As[a1].a)
a5=l.cNX(j,12,a7)
l=r.a
w=15
return A.b(C.T1(l.c,l.d,a5),$async$Ev)
case 15:if(r.c!=null)r.l(new C.dj3(r,a5))
l=r.f
l===$&&A.d()
if(l.f.length!==0&&q.a==="cover")l.C0(0,B.e8,B.n8)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.c(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b2(a3?A.cCe("Undo",new C.dj4(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.en,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ev,v)},
G6(d,e){return this.cJr(d,e)},
cJq(d){return this.G6(d,!1)},
cJr(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$G6=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eH("Starting\u2026",$.ax())
f.a=!0
k=r.c
k.toString
A.ce(null,null,!1,null,new C.djf(a0),k,null,!0,!0,x.H).fw(new C.djg(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.c6(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(A.a4g(m,new C.djh(a0)),$async$G6)
case 10:w=8
break
case 9:w=11
return A.b(C.bHm(new C.dji(a0),m,a2),$async$G6)
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
if(o!=null&&f.a)A.a8(o,!0).e2()
o=a0
o.sij($.ax())
J.aUf(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.U(A.b2(null,null,null,null,null,B.t,null,A.c(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bgT(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.BF(k.c,k.d,o),$async$G6)
case 12:w=13
return A.b(r.lh(),$async$G6)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.X(a2,"Swahili")?"Swahili":"English")+"."
k=A.c(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(A.cCe("Undo",new C.djj(r,d),null),null,null,null,null,B.t,null,k,null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$G6,v)},
bIe(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.diO(v):u
r=A.aH(u,u,u,u,A.W(D.bTW,s?D.kZ:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cL(v.d)&&!v.w&&v.r>=0)s=A.hs(A.W(B.x9,B.Hg,u,u,u,16),A.c("Delete page",u,u,u,u,u,u,A.l(u,u,B.Hg,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbQu(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.c(s,u,u,u,u,u,u,A.l(u,u,D.kZ.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.as(s,u,u,u),1)
w=t<J.ad(v.d)?new C.diP(v):u
return A.bm(!0,new A.D(D.bHn,A.A(A.a([r,s,A.aH(u,u,u,u,A.W(B.eM,t<J.ad(v.d)?D.kZ:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.h,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a08.prototype={
S(){return new C.bih(new A.at(B.ax,$.ax()))}}
C.bih.prototype={
ga3l(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.V$=$.ax()
w.R$=0
this.a2()},
gbU4(){switch(this.ga3l()){case"cover":var w=D.deE
break
case"book":w=D.d9w
break
default:w=D.dI8
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.m(26),n=B.kD.j(0.5),m=x.p,l=A.A(A.a([D.dRJ,B.ar,D.bNa,A.aH(p,p,p,p,B.lC,p,p,p,new C.dla(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.h,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jC(p,p,p,A.c("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dlb(q),q.ga3l()==="page",p,p,p,p))
if(q.a.d)k.push(A.jC(p,p,p,D.hbh,p,new C.dlc(q),q.ga3l()==="book",p,p,p,p))
k.push(A.jC(p,p,p,D.fYQ,p,new C.dld(q),q.ga3l()==="cover",p,p,p,p))
k=A.bZ(B.bI,k,B.br,p,6,8)
j=B.c.j(0.07)
j=A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bB(p,new A.b6(4,A.m(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kx,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.al,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.dn,!0,B.a7,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbU4(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.c(s,p,p,p,p,p,p,B.LA,p,p,p)
w.push(A.mF(p,B.c.j(0.08),r,B.hD,new C.dle(q,s),p,p,p,p))}return A.eE(p,B.Cz,A.ca(A.x(A.a([l,B.S,D.heC,B.ak,k,B.af,j,B.P,A.bZ(B.bI,w,B.br,p,6,6),B.aA,A.da(D.bYi,p,D.hfp,new C.dlf(q,d),A.bn(B.b2,p,p,p,p,B.pf,p,p,new A.ba(A.m(16),B.a1),p,p,p)),B.at,D.h9r],m),B.B,p,B.e,B.M,0,B.p),B.t,p,B.y,p,p,B.fc,p,p,B.ah),p,p,p,B.Pd,p,B.d7,p,new A.ba(o,new A.av(n,1.4,B.r,-1)),p)}}
C.a06.prototype={
S(){return new C.aCz(A.a([],x.gA))},
ge4(){return this.c}}
C.agt.prototype={}
C.aCz.prototype={
Z(){this.a4()
this.lh()},
lh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Sr(p.c,p.d),$async$lh)
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
return A.b(C.bFO(r.c,q),$async$lh)
case 6:j=e
i=J
w=7
return A.b(C.LZ(t.a.c,q),$async$lh)
case 7:m.push(new l.agt(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.l(new C.djD(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
bc8(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Rn(d,e){return this.ckd(0,e)},
ckd(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Rn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a8(s,!1).cb(A.ea(new C.djC(u,e),!0,null,x.y)),$async$Rn)
case 2:t=g
w=3
return A.b(u.lh(),$async$Rn)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.U(D.aWp)
return A.h(null,v)}})
return A.i($async$Rn,v)},
G8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$G8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.U(D.aWk)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ai2(s.c,s.d),$async$G8)
case 5:q=e
w=6
return A.b(t.lh(),$async$G8)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Rn(0,B.d.fb(t.d,new C.djH(q))),$async$G8)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Sn(p,s.f,r,n,o),$async$G8)
case 10:m=e
w=11
return A.b(t.lh(),$async$G8)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.U(D.aWp)
case 1:return A.h(u,v)}})
return A.i($async$G8,v)},
QN(d,e){return this.cw1(0,e)},
cw1(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$QN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.djG(t,e),s,null,!0,!0,x.y),$async$QN)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a4r(s.c,s.d,e.a),$async$QN)
case 4:w=5
return A.b(t.lh(),$async$QN)
case 5:case 1:return A.h(u,v)}})
return A.i($async$QN,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bIh(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.K(B.kD.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.ay(n,new A.fJ(0.7142857142857143,A.o(n,A.x(A.a([D.dRK,B.af,D.eCv,B.at,A.c(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kZ.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.b9,B.h,0,B.p),B.f,n,n,new A.n(v,n,s,w,n,n,B.m),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcMV(),n,n,n,n,n,n,!1,B.a4))}w=A.m(22)
v=A.K(B.kD.j(0.85),B.r,1.6)
s=A.ay(n,A.o(n,D.c5A,B.f,n,n,new A.n(B.v.j(0.3),n,A.K(B.kD.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.djI(d),n,n,n,n,n,n,!1,B.a4)
r=A.m(14)
q=B.v.j(0.3)
p=A.K(B.kD.j(0.5),B.r,1)
w=A.o(n,A.A(A.a([s,B.bb,D.bNz,A.o(n,A.c(""+o.d.length+" of 6",n,n,n,n,n,n,D.fE2,n,n,n),B.f,n,n,new A.n(q,n,p,r,n,n,B.m),n,n,n,n,B.hl,n,n,n)],l),B.l,n,B.e,B.h,0,n,n),B.f,n,n,new A.n(n,n,v,w,n,D.cbG,B.m),n,n,n,B.P0,D.bFg,n,n,n)
if(o.e)k=D.ah2
else k=k.length===0?D.bfl:A.cf(new C.djJ(k))
return A.c5(n,D.a_v,new A.an(B.a0,n,B.b4,B.t,A.a([D.aSq,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bIh(d){var w,v,u=this,t=null,s=u.bc8(d),r=d.c,q=x.p,p=A.a([A.bS(0,new A.dl(B.dF,B.z,B.f,new A.a6(300,420,new C.a_k(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.ay(t,A.o(t,D.c4Q,B.f,t,t,new A.n(B.v.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.djA(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.c(s,t,1,B.a2,t,t,t,D.fDG,t,t,t)
v=r===1?"page":"pages"
return A.ay(t,A.x(A.a([new A.fJ(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.P,w,A.c(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kZ.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.h,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.djB(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.L1.prototype={}
C.a_k.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dz(D.As,new C.cRu(m),new C.cRv()),j=m.c,i=D.Ey.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mD:B.b9
v=new C.cRw(h)
i=A.a([new A.ab(0,B.H,B.v.j(0.6),D.ezi,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b4(l,l,l,new C.bfs(j.x,h,l),B.az),0,0,0),A.ao(0,A.o(l,l,B.f,l,l,new A.n(l,l,l,l,l,new A.a7(B.a5,B.a9,B.x,A.a([B.v.j(0.45),B.L],x.O),l,l),B.m),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cN(8,40+s*46,l,l,l,l,A.o(l,l,B.f,l,l,new A.n(h.j(0.7),l,l,new A.bb(r,r,r,r),l,l,B.m),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.aoP,8,0.85,2.2),v.$4(D.bKj,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aoP,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.D(D.bKf,A.b4(l,l,l,new C.bfj(h,l),B.az),l),0,0,0))
r=A.W(D.aDM[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.c(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aAX,l,l),B.K,l,l)
p=A.o(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.af,p,B.af,A.c(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cL,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aO,A.c(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.F,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.D(D.bKN,A.x(o,B.l,l,w,B.h,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aJH(l),D.ft7),l,l,l,46,0,l))
return A.o(l,A.bu(D.afD,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.n(l,l,l,D.afD,i,new A.a7(B.ay,B.aC,B.x,k.c,l,l),B.m),l,l,l,l,l,l,l,l)}}
C.bfs.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e_()
g.cS(11)
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
l=new A.ar(B.T,B.Q,B.W,B.X,B.U)
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
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
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
C.bfj.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.R(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.ac
j.c=2.4
j.d=B.bH
for(w=e.a,v=e.b,v=[D.fg1,new A.b7([w,0,-1,1]),new A.b7([0,v,1,-1]),new A.b7([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
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
s=new A.ar(B.T,B.Q,B.W,B.X,B.U)
s.r=i.j(0.9).gp(0)
d.O(new A.r(r+p*9,q+o*9),3,s)}},
aD(d){return!d.b.A(0,this.b)}}
C.uY.prototype={}
C.a_F.prototype={
S(){return new C.bfq()}}
C.bfq.prototype={
goC(){var w=this.d
return w===$?this.d=this.a.c:w},
gze(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.at(new A.bd(w.b,B.b6,B.aP),$.ax())}return v},
gaE8(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.at(new A.bd(w.c,B.b6,B.aP),$.ax())}return v},
gatD(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.at(new A.bd(w.y,B.b6,B.aP),$.ax())}return v},
t(){var w=this,v=w.gze(0),u=v.V$=$.ax()
v.R$=0
v=w.gaE8()
v.V$=u
v.R$=0
v=w.gatD()
v.V$=u
v.R$=0
w.a2()},
aug(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jC(s,s,s,A.c(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.dat(this,f,u),e===u,s,s,s,s))}return A.bZ(B.bI,r,B.br,s,6,8)},
aA3(d){var w=null,v=B.c.j(0.07)
return A.bB(w,new A.b6(4,A.m(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.ma,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goC(),a0=f.gze(0),a1=a0.a.a,a2=f.gaE8(),a3=a2.a.a,a4=f.gatD(),a5=d.bgR(a4.a.a,a3,a1)
a1=x.w
a3=A.aE(a6,e,a1).w
a1=A.aE(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a6(190,260,new A.dl(B.dF,B.z,B.f,new A.a6(270,370,new C.a_k(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.aA3("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.al,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.daS(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.dn,!0,B.a7,e,B.ao,e,e,e,e)
a2=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.aA3("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.al,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.daT(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.dn,!0,B.a7,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.As[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.av(p,q?3:1,B.r,-1)
p=A.o(e,e,B.f,e,e,new A.n(e,e,new A.bE(o,o,o,o),e,e,new A.a7(B.ay,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aF
v.push(A.ay(e,A.x(A.a([p,B.cM,A.c(t.b,e,e,e,e,e,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.M,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.daU(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bZ(B.bI,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b2.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.av((s===$?f.d=f.a.c:s).d===n?B.eE:B.L,2,B.r,-1)
q.push(A.ay(e,A.o(e,A.W(D.aDM[n],B.c,e,e,e,24),B.f,e,e,new A.n(p,e,new A.bE(o,o,o,o),new A.bb(m,m,m,m),e,e,B.m),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.daV(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bZ(B.bI,q,B.br,e,8,8)
a4=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.aA3("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.al,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.daW(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.dn,!0,B.a7,e,B.ao,e,e,e,e)
p=A.c("LETTERING COLOUR",e,e,e,e,e,e,F.w8,e,e,e)
m=A.a([],w)
for(l=D.Ey.gdQ(D.Ey),l=l.gae(l);l.C();){k=l.gP(l)
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
m.push(A.ay(e,A.x(A.a([j,B.bC,A.c(i,e,e,e,e,e,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.M,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.daX(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bZ(B.bI,m,B.br,e,8,10)
l=A.c("TITLE SIZE",e,e,e,e,e,e,F.w8,e,e,e)
k=f.goC()
return new A.D(new A.P(0,0,0,a3.f.d),A.bm(!0,new A.cP(new A.aY(0,1/0,0,a1.a.b*0.92),A.cn(A.a([D.h8S,B.af,d,B.aO,a0,B.S,a2,B.aA,D.hfa,B.P,v,B.aA,D.h90,B.P,q,B.aA,a4,B.aA,p,B.P,m,B.aA,l,A.l4(e,9,""+B.i.T(f.goC().f),36,18,new C.daY(f),k.f),A.c("WHERE THE WORDS SIT",e,e,e,e,e,e,F.w8,e,e,e),B.ak,f.aug(D.a7U,f.goC().r,new C.daZ(f),D.dLs),B.af,A.c("BORDER",e,e,e,e,e,e,F.w8,e,e,e),B.ak,f.aug(D.a7d,f.goC().w,new C.db_(f),D.dLy),B.af,A.c("COVER MATERIAL",e,e,e,e,e,e,F.w8,e,e,e),B.ak,f.aug(D.a79,f.goC().x,new C.db1(f),D.dNc),B.ak,A.iZ(e,B.b2,e,B.ag,e,new C.db2(f),e,e,e,D.h3_,f.goC().z),B.bx,A.bI(D.h7y,e,new C.db3(f,a6),A.bn(B.b2,e,e,e,e,B.pf,e,e,new A.ba(A.m(16),B.a1),e,e,e))],w),e,e,B.aoj,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aJH.prototype={
a3(d,e){var w,v,u,t=new A.aG($.R().r,B.aj,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.by())
u=A.L()
u.san(D.cco.aA(0,new A.a3(0,0,0+w,0+v)))
d.af(t,u)},
aD(d){return!1}}
C.bkQ.prototype={
a3(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.R()
w=A.L()
w.san(D.cbm.aA(0,new A.a3(0,0,a2,a3)))
a4.aE(new A.a3(0,0,a2,a3),w)
v=B.i.cE(a1/112)
u=new A.e_()
u.cS(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.deD[u.aw(9)]
j=u.aw(14)
J.br(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a3(n,j,n+m,j+l)
h=A.bv(i,B.hC)
g=new A.ar(B.T,B.Q,B.W,B.X,B.U)
f=A.ap(k,B.c,0.12)
f.toString
e=A.ap(k,B.v,0.45)
e.toString
g.san(new A.a7(B.a5,B.a9,B.x,A.a([f,k,e],w),d,d).aA(0,i))
a4.ar(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ar(B.T,B.Q,B.W,B.X,B.U)
e.r=B.kD.j(0.55).gp(0)
a4.aE(new A.a3(g,j,h,j+2),e)
e=new A.ar(B.T,B.Q,B.W,B.X,B.U)
e.r=B.kD.j(0.4).gp(0)
a4.aE(new A.a3(g,q,h,p),e)
t.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.san(D.caF.aA(0,new A.a3(0,r,a2,q)))
a4.aE(new A.a3(0,r,a2,q),p)
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=B.v.j(0.5).gp(0)
p.y=B.l6
a4.aE(new A.a3(0,q,a2,q+14),p)}t=A.L()
t.r=D.bja.j(0.72).gp(0)
a4.aE(new A.a3(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.san(new A.bT(B.z,0.5,B.x,d,0,A.a([D.brP.j(0.22),B.L],w),d,d).aA(0,A.bX(new A.r(t,a1),a0)))
a4.O(new A.r(t,a1),a0,a3)},
aD(d){return!1}}
C.bdA.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cN(14,w*2,v*2.2,v*2,o,o,new A.bP(new A.n(A.ap(D.kZ,D.bx9,w/4),o,new A.bE(B.a1,new A.av(B.v.j(0.12),1,B.r,-1),B.a1,B.a1),B.MO,o,o,B.m),B.bm,o,o),o))}v=x.V
u=A.a([new A.ab(0,B.H,B.v.j(0.35),B.aO_,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.o(o,o,B.f,o,o,new A.n(B.kD.j(0.6),o,o,new A.bb(s,s,s,s),o,o,B.m),o,14,o,o,o,o,o,3))}u=A.o(o,A.x(t,B.l,o,B.rl,B.h,0,B.p),B.f,o,o,new A.n(o,o,o,D.b7k,u,D.ccm,B.m),o,o,o,o,o,o,o,14)
v=A.a([new A.ab(0,B.H,B.v.j(0.4),B.dp,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aJH(o),D.ft2),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aXF(p.y,r,B.je,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bB(o,B.eU,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,B.je.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,D.fSL,!0,B.a7,o,B.ao,o,o,o,o),A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,B.je.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bB(o,B.eU,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,B.je.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.al,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,D.fJ3,!0,B.a7,B.Bl,B.ao,o,o,o,o),1)],m),B.am,o,B.e,B.h,0,B.p)
else{n=A.a([A.c(n.b,o,o,o,o,o,o,D.fSD,o,o,o),B.at,A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,B.je.j(0.5),o,o,o,o,o,o,o,o,11,B.cL,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.E(A.o(o,o,B.f,D.GY.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fC,A.c("\u2766",o,o,o,o,o,o,A.l(o,o,D.GY.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.o(o,o,B.f,D.GY.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.h,0,o,o),B.aA],m)
if(k.length===0)n.push(A.c("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,B.je.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Zz(A.cT(A.a([A.cT(o,o,o,o,o,o,o,o,o,D.fMm,B.a.az(k,0,1)),A.cT(o,o,o,o,o,o,o,o,o,o,B.a.aY(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,B.je.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ca(A.x(n,B.B,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hx,A.c("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,B.je.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.o(o,A.bu(B.MO,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bJM,A.x(s,B.am,o,B.e,B.h,0,B.p),o),A.ao(0,new A.bP(new A.n(o,o,o,o,o,new A.a7(B.a5,B.a9,B.x,A.a([B.v.j(0.16),B.L],x.O),o,o),B.m),B.bm,o,o),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.n(o,o,o,B.MO,v,D.ccU,B.m),o,o,o,o,o,o,o,o),1)],m),B.am,o,B.e,B.h,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.amJ.prototype={
S(){return new C.amK(new A.eH(0,$.ax()),new C.bV_(),new C.an1(),D.hUn,null,null)},
gd4(){return this.d}}
C.a2m.prototype={
a7(){return"_Step."+this.b}}
C.amK.prototype={
gCO(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFK(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghe(d){var w,v=this,u=v.e
if(u===$){w=C.Nk(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gUo(){var w=this.ghe(0)
return w.gzy()==null?"Babu":B.a.i(w.gzy().b)},
Z(){var w,v=this
v.a4()
w=v.ghe(0).gzy()
w=w==null?null:w.c
v.r.b=w===D.oP
w=v.qa(new C.bTl(v))
w.fY(0)
v.x!==$&&A.aQ()
v.x=w
v.a3h("Come closer, my children. I am "+v.gUo()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
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
w.bxy()},
a3h(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.d5(B.a1e,new C.bTf(w))},
btV(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.l(new C.bTo(v))},
aeI(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
btN(){return this.bbF()},
bbF(){var w=this,v=w.gCO()[w.as],u=v.e
u=u.length!==0?u:v.d
w.l(new C.bTg(w))
w.a3h(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cx(B.mp,new C.bTh(w))},
cO3(){var w=this
w.l(new C.bTk(w))
w.a3h(w.gCO()[w.as].a)},
Lv(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.aeJ)return
w=p.gCO()
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
q.cS(v*7+d)
p.l(new C.bTj(p,d,u,q))
p.a3h(u?D.dvz[q.aw(4)]+" "+w[p.as].d:D.drW[q.aw(3)]+" "+w[p.as].d)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCO()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bI2(t.at,t.ay,p)
t.l(new C.bTm(t,s))
t.a3h(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.C0(t.a.d,s),$async$kN)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.C1(r.d,r.c.a,"fire",t.at*10),$async$kN)
case 6:t.dy=f
if(t.c!=null)t.l(new C.bTn())
w=1
break
case 4:++t.as
t.bbF()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c5(v,D.Zv,new A.an(B.a0,v,B.ad,B.t,A.a([A.bS(0,new A.e7(A.b4(v,v,v,new C.aXK(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.ce6(0),B.aY,w.bTf()],t),B.l,v,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
ce6(d){var w,v,u,t=this,s=null,r=A.aH(s,s,s,s,B.R2,s,s,s,new C.bTi(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCO().length;++w){v=t.as
if(w<v||t.Q===D.b3D)v=B.cW
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(A.o(s,s,B.f,s,s,new A.n(v,s,s,new A.bb(u,u,u,u),s,s,B.m),s,7,s,D.bF0,s,s,s,22))}p=A.E(A.x(A.a([D.h_J,A.A(p,B.l,s,B.e,B.h,0,s,s)],q),B.B,s,B.e,B.h,0,B.p),1)
v=A.m(14)
u=A.K(B.fK,B.r,1)
return new A.D(D.bL0,A.A(A.a([r,p,A.o(s,A.c("\ud83d\udd25 "+B.i.T(t.cy*100)+"%",s,s,s,s,s,s,B.iP,s,s,s),B.f,s,s,new A.n(B.b7,s,u,v,s,s,B.m),s,s,s,s,B.hl,s,s,s)],q),B.l,s,B.e,B.h,0,s,s),s)},
bTf(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghe(0).gzy()
if(h==null)w=1
else w=h.c===D.oP?0:1
v=j.dx
u=j.db
t=D.qH.j(0.96)
s=A.m(22)
r=A.K(B.cW,B.r,3)
q=A.b4(i,i,i,new C.bqr(w,i),B.az)
p=A.c(j.Q===D.aeJ?j.gUo()+" asks":"Elder "+j.gUo(),i,i,i,i,i,i,D.aXF,i,i,i)
o=j.db
o=B.a.az(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.ay(B.c1,A.A(A.a([new A.a6(62,62,q,i),B.ar,A.E(A.x(A.a([p,B.bC,A.c(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aXS,i,i,i)],n),B.B,i,B.e,B.h,0,B.p),1)],n),B.B,i,B.e,B.h,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbtU(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.as(j.aaN("Sit down by the fire",j.gbtM()),i,i,i)
break
case 1:v=A.as(j.aaN("Ask me, Elder",j.gcO2()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCO()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.av(D.lR,2.5,B.r,-1)
v.push(A.ay(i,A.o(i,A.c(u[m],i,i,i,i,i,i,D.aXO,B.K,i,i),B.f,i,D.agg,new A.n(D.alP,i,new A.bE(l,l,l,l),new A.bb(q,q,q,q),i,i,B.m),i,i,i,i,L.wX,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bTc(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bZ(B.bI,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.kk:A0.arO
u=A.W(u,v?B.eq:D.lR,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.c(q,i,i,i,i,i,i,A.l(i,i,v?B.eq:D.lR,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCO().length?"Finish":"Next story"
v=A.A(A.a([u,B.aa,q,j.aaN(v,j.gqt(j))],n),B.l,i,B.e,B.h,0,i,i)
break
case 4:v=A.a([A.c(""+j.at+" of "+j.gCO().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aY5,i,i,i)],n)
u=j.cx
if(u>0){u=C.aS2(u)
q=C.aS2(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.c(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.ada,i,i,i))}v.push(B.P)
v.push(j.aaN("Back to the games",new C.bTd(j)))
v=A.x(v,B.l,i,B.e,B.h,0,B.p)
break
default:v=i}return A.o(i,A.x(A.a([o,B.S,v],n),B.B,i,B.e,B.M,0,B.p),B.f,i,i,new A.n(t,i,r,s,D.aFk,i,B.m),i,i,i,B.zh,B.bl,i,i,i)},
aaN(d,e){var w=null,v=A.m(16),u=A.K(B.cW,B.r,2)
return A.ay(w,A.o(w,A.c(d,w,w,w,w,w,w,B.LD,w,w,w),B.f,w,w,new A.n(D.lR,w,u,v,w,w,B.m),w,w,w,w,D.bIF,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bqr.prototype={
a3(d,e){A.hoD(d,e.ek(B.J),e.gdj()*0.45,this.b,0,0.4)},
aD(d){return d.b!==this.b}}
C.aCx.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bC()}}
C.bV_.prototype={}
C.ti.prototype={}
C.bqs.prototype={}
C.an1.prototype={
MY(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.ikZ(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aXK.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.GI(l.d.MY(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.br(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bV(0,u)
l.cDp(d,j)
l.bRO(d,j)
l.cLP(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.br(t.save())
t.translate(225,580)
d.nM(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.R()
q=A.L()
p=x.O
o=x.n
q.san(A.wm(B.J,r,A.a([D.bvQ.j(0.55*s),B.Oi.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.O(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bUS(l,d,j,i)),new A.y(540,new C.bUT(l,d,j,i)),new A.y(546,new C.bUU(l,d,j,i)),new A.y(574,new C.bUV(l,d,j,i)),new A.y(612,new C.bUW(l,d,j,i)),new A.y(650,new C.bUX(l,d,j,i)),new A.y(656,new C.bUY(l,d,j,i))],x.E)
B.d.b_(n,new C.bUZ())
for(m=0;m<7;++m)n[m].b.$0()
l.bIA(d,j,i)
l.bVr(d,j)
t.restore()
$.R()
t=A.L()
t.san(A.wm(new A.r(w/2,v*0.6),e.gap2()*0.75,A.a([B.L,D.bj3],p),A.a([0.55,1],o),B.x,k,k,0))
d.aE(new A.a3(0,0,0+w,0+v),t)},
aD(d){return d.c!==this.c||d.d!==this.d},
cDp(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e_()
h.cS(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.R()
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.r=t.gp(0)
d.O(new A.r(v*450,20+u*300),0.8+s*1.1,r)}q=B.i.F(e,17)/1.2
if(q<1){p=new A.r(60+q*220,70+q*90)
d.ah(p,p.aJ(0,D.eyP),C.iJ(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.i.F(v+o*0.05,1)
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
s=new A.ar(B.T,B.Q,B.W,B.X,B.U)
s.b=B.ac
s.c=1.6
s.r=D.blP.gp(0)
s.d=B.bH
s.e=B.dP
d.af(l,s)}},
bRO(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aCh[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bY(new A.r(p,m),n*0.74,q*0.5)
k=B.z2.j(v)
$.R()
j=new A.ar(B.T,B.Q,B.W,B.X,B.U)
j.r=k.gp(0)
d.c1(l,j)
q=A.bY(new A.r(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=B.wy.j(u).gp(0)
d.c1(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.i.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ar(B.T,B.Q,B.W,B.X,B.U)
o.r=D.aja.j(0.16*(1-h)).gp(0)
d.O(new A.r(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cLP(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bF4(d,D.eyL,0.9,e,D.hO3,!1,!1,D.b3A,1,!1)
w=$.R().r
v=x.v
u=new A.aG(w,B.aj,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.by())
t=A.L()
t.r=D.al7.gp(0)
d.af(u,t)
C.bF4(d,D.eyN,0.95,e,D.hNS,!1,!1,D.b3B,1,!0)
t=new A.aG(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.ch(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.ch(431,553,421,548))
t.E(new A.by())
u=A.L()
u.r=B.GC.gp(0)
d.af(t,u)
u=A.bY(D.eyM,8,28)
t=A.L()
t.r=D.byg.gp(0)
d.c1(u,t)
C.bF4(d,new A.r(-30+B.i.F(e/26,1)*510,492),0.82,e,D.hO5,!0,!1,D.Yi,1,!1)
t=B.i.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c1(A.bY(new A.r(s+q*16,r-6),16,11),C.iJ(D.akZ,1.8))
u=q<0
C.bF4(d,new A.r(s-q*6,r),0.62,e,D.hO8,!1,u,D.Yi,2.2,!1)
C.bF4(d,new A.r(s-q*32,r+4),0.58,e+1,D.hO_,!1,u,D.Yi,2.2,!1)
this.bYa(d,D.eyq,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bY(new A.r(o,n),8,11)
k=p===1
j=k?D.akV:D.alx
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
i.r=j.gp(0)
d.c1(l,i)
l=k?D.akV:D.alx
k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.r=l.gp(0)
d.O(new A.r(o+5,n+(-3+m)),2.6,k)
k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.b=B.ac
k.c=1
k.r=B.au.gp(0)
k.d=B.bH
k.e=B.dP
d.ah(new A.r(o+7.5,n+(-2+m)),new A.r(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.b=B.ac
k.c=1
k.r=B.au.gp(0)
k.d=B.bH
k.e=B.dP
d.ah(new A.r(o,n+4),new A.r(o,n+8),k)}h=e<f.f
u=A.bY(D.aa5,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.ajz.gp(0)
d.c1(u,t)
u=A.bY(D.aa5.a5(0,new A.r(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.bo2.gp(0)
d.c1(u,t)
t=new A.aG(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.by())
u=A.L()
u.r=D.bof.gp(0)
d.af(t,u)
u=D.aa5.a5(0,new A.r(-17,h?-9:-2))
t=A.L()
t.r=B.iq.gp(0)
d.O(u,1.1,t)
v=new A.aG(w,B.aj,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.ch(180,588+w*(h?6:0),178,595))
d.af(v,C.iJ(D.ajz,3.5))},
bYa(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a5(0,new A.r(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.R()
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.b=B.ac
m.c=2
m.r=D.ZJ.gp(0)
m.d=B.bH
m.e=B.dP
d.ah(new A.r(u+o,s),new A.r(u+(o+n*1.5),q),m)}w=A.bY(k,17,32)
v=$.R()
r=A.L()
r.r=D.GA.gp(0)
d.c1(w,r)
r=A.bY(k.a5(0,D.exR),7,26)
w=A.ap(D.GA,B.v,0.12)
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
s.r=D.GA.gp(0)
d.af(v,s)
s=A.bY(k.a5(0,new A.r(24,-7+l)),9,12)
v=A.L()
v.r=D.GA.gp(0)
d.c1(s,v)
v=-11+l
d.ah(k.a5(0,new A.r(22,v)),k.a5(0,new A.r(21,-17+l)),C.iJ(D.ZJ,1.6))
d.ah(k.a5(0,new A.r(26,v)),k.a5(0,new A.r(28,-16+l)),C.iJ(D.ZJ,1.6))
v=k.a5(0,new A.r(26,-8+l))
s=A.L()
s.r=B.v.gp(0)
d.O(v,0.9,s)
d.ah(k.a5(0,new A.r(26,-3+l)),k.a5(0,new A.r(26,1+l)),C.iJ(D.br3,1.4))
d.ah(k.a5(0,D.eAK),k.a5(0,new A.r(-19,-7+Math.sin(f*7)*2)),C.iJ(D.GA,2.4))},
bVp(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bY(new A.r(225+u*36,574+(t*13+6)),8,11)
$.R()
t=new A.ar(B.T,B.Q,B.W,B.X,B.U)
t.r=D.bwT.gp(0)
a6.c1(u,t)}}u=A.bY(D.aa7.a5(0,B.cz),17,52)
$.R()
t=A.L()
t.r=D.biC.gp(0)
a6.c1(u,t)
t=A.bY(D.aa7.a5(0,B.cz),12,44)
u=D.bme.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.c1(t,s)
for(r=0;r<3;++r){v=D.drn[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ar(B.T,B.Q,B.W,B.X,B.U)
o.b=B.ac
o.c=7
o.r=D.GO.gp(0)
o.d=B.bH
o.e=B.dP
a6.ah(new A.r(u+t*24,579+s*4),new A.r(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.Ce.j(0.6)
n=new A.ar(B.T,B.Q,B.W,B.X,B.U)
n.b=B.ac
n.c=2
n.r=t.gp(0)
n.d=B.bH
n.e=B.dP
a6.ah(new A.r(u+o*24,579+(p*4-2)),new A.r(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.fc0,D.fcA,D.fdJ,D.fe3,D.fdH]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bu8,D.bqo,D.bwi][k]
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
a3=new A.i_(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.aj(a4)
a2.ac()
g=new A.i_(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.aj(a3)
a2.ac()
g=new A.by()
f.push(g)
f=a2.f
if(f!=null)g.aj(f)
a2.ac()
g=new A.ar(B.T,B.Q,B.W,B.X,B.U)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.i.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=B.alv.j((1-a5)*0.9)
$.R()
o=new A.ar(B.T,B.Q,B.W,B.X,B.U)
o.r=p.gp(0)
a6.O(new A.r(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.i.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.aja.j(0.1*(1-a5))
$.R()
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=q.gp(0)
a6.O(new A.r(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bVr(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.i.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.byr.j(0.18*p)
$.R()
n=new A.ar(B.T,B.Q,B.W,B.X,B.U)
n.r=o.gp(0)
d.O(new A.r(r,q),5,n)
n=new A.ar(B.T,B.Q,B.W,B.X,B.U)
n.r=D.brU.j(0.9*p).gp(0)
d.O(new A.r(r,q),1.4,n)}},
c7m(d,e){switch(d){case 0:return e.b?D.hNU:D.b2Q
case 1:return e.b?D.hO7:D.b2O
case 2:return D.b2N
case 3:return D.b2M
case 4:return D.b2P
default:return D.b2R}},
aEm(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
RH(d,e,f,g){var w,v=this,u=D.a7l[e],t=v.c7m(e,g),s=new C.bqs(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a7l[e],l=e===0
m=B.i.D(((l?D.aNS:D.aNY).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.aac
s.as=D.F_
if(l){s.a=o?v.aEm(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.r(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.r(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.F_
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.exZ
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.ezm
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
s.Q=D.eBG
s.as=D.aOa}if(e===2&&g.x!=null&&f<g.y){s.a=v.aEm(f,5)
s.b=0.4
s.as=new A.r(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aEm(f,e*3)
s.b=0.5
s.c=0.4}}C.hHH(d,u.a,u.b*1.2,t,s,f,e,null)},
bIA(d,e,f){var w=new C.bUR(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd2(d){return this.c}}
C.agC.prototype={
a7(){return"_Stand."+this.b}}
C.aez.prototype={}
C.lx.prototype={}
C.bTB.prototype={
bD6(d){var w,v,u,t,s=A.S(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
Go(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b_(r,new C.bTC())
return r},
asi(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.d()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aO4(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
anq(d){var w,v,u=A.aR(x.N),t=d,s=0
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
B.d.b_(w,new C.bTD(this))
return B.d.gH(w)}}
C.av9.prototype={}
C.zK.prototype={}
C.alA.prototype={
gCk(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.X(w,new C.bOn(),A.T(w).k("X<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ak(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.N4.prototype={
gaql(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gCk(0))s.push(t)}return s},
ak(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d4n(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaql(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lx(B.a.i(s.a),p,B.d.cd(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bbN.prototype={}
C.aaB.prototype={}
C.bj7.prototype={}
C.agA.prototype={}
C.akT.prototype={
S(){return new C.akU(B.bF,A.a([],x.cC),A.a([],x.e4),null,null)},
gd4(){return this.d}}
C.akU.prototype={
gNe(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFK(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gbc0(){var w,v=this,u=v.e
if(u===$){w=v.qa(v.gce8())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
Z(){this.a4()
this.gbc0().fY(0)},
t(){this.gbc0().t()
this.bxt()},
fY(d){this.l(new C.bMw(this))},
ce9(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fI(0,v)
if(w.c!=null)w.l(new C.bMr())},
bak(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gNe()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bj7(u,(u+0.5)/v,w[t.x].b[u]))},
fI(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bq(w,new C.bMx())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.cae()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gNe()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.i.T((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.atP(v,0.8,B.cW)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.atP(m.cy,0.8,B.nE)
m.b_E("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.atP(q,0.88,D.lR)
p=m.gNe()[m.x]
n=p.c
if(u===n){m.b_E("The right gourd fell! It was "+p.b[n]+".")
return}}}},
atP(d,e,f){var w,v,u,t=new A.e_()
t.cS(B.i.T(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.agA(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b_E(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.QO()}},
cae(){var w=this
if(w.x+1>=w.gNe().length){w.QO()
return}++w.x
w.bak()},
QO(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$QO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gNe().length
r=C.bI2(t,u.at,s)
u.ax=r
if(u.c!=null)u.l(new C.bMp())
w=2
return A.b(C.C0(u.a.d,r),$async$QO)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.C1(t.d,t.c.a,"catch",u.z),$async$QO)
case 3:u.cx=e
if(u.c!=null)u.l(new C.bMq())
return A.h(null,v)}})
return A.i($async$QO,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.ce7()
else w=v.ch?v.cea():A.as(new A.D(B.eG,A.x(A.a([D.aZ2,B.P,D.h1q,B.S,D.h7D,B.eb,C.uB("Play",v.geY(v),B.cW,B.fZ,D.fJ)],x.p),B.l,u,B.e,B.M,0,B.p),u),u,u,u)
return new C.tI("Calabash Catch",w,B.fe,u)},
cea(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hP:B.In
p.push(A.W(u,v?B.aB:B.bV,r,r,r,22))}p.push(B.aY)
v=s.x
u=s.gNe()
p.push(A.c(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aXE,r,r,r))
p.push(B.bb)
v=A.m(14)
p.push(A.o(r,A.c(""+s.z,r,r,r,r,r,r,B.iP,r,r,r),B.f,r,r,new A.n(B.bw,r,r,v,r,r,B.m),r,r,r,r,B.D_,r,r,r))
p=A.A(p,B.l,r,B.e,B.h,0,r,r)
v=A.m(18)
t=A.K(B.cW,B.r,3)
return A.x(A.a([new A.D(D.bGo,p,r),A.o(r,A.c(u[s.x].a,r,r,r,r,r,r,D.fMe,B.K,r,r),B.f,r,r,new A.n(D.qH,r,t,v,r,r,B.m),r,r,r,B.f2,B.bl,r,r,1/0),B.ak,A.E(A.cf(new C.bMv(s)),1)],q),B.l,r,B.e,B.h,0,B.p)},
ce7(){var w=this,v=null,u=A.as(A.c(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.qh,v,v,v),v,v,v),t=A.as(A.c(""+w.Q+" of "+w.gNe().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.WD,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cn(A.a([D.bg2,u,t,B.aO,new C.IH(s,r,w.cx,v),B.aO,A.as(C.uB("Back to the games",new C.bMo(w),B.cW,B.kj,D.fJ),v,v,v)],x.p),v,v,B.ae,v,v,B.ah,!1)}}
C.beh.prototype={
a3(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.R(),a3=A.L()
a3.san(A.jF(B.J,new A.r(0,a0),D.d7X,B.aCy,B.x,e))
a4.aE(new A.a3(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=B.Om.gp(0)
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
w.r=D.bnc.gp(0)
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
w.r=D.aib.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.csC[q]
s=new A.ar(B.T,B.Q,B.W,B.X,B.U)
s.r=D.aib.gp(0)
s.c=7
s.d=B.bH
a4.ah(new A.r(r,a2),new A.r(r+p*46,w),s)
s=new A.ar(B.T,B.Q,B.W,B.X,B.U)
s.r=D.aht.gp(0)
a4.O(new A.r(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.boc.gp(0)
a4.aE(new A.a3(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ar(B.T,B.Q,B.W,B.X,B.U)
t.r=D.ajP.gp(0)
t.c=2
a4.ah(new A.r(w,a1),new A.r(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bY(new A.r(u,s),12,54)
$.R()
l=new A.ar(B.T,B.Q,B.W,B.X,B.U)
l.r=D.lR.j(0.6).gp(0)
a4.c1(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.br(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.R()
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=D.aiU.gp(0)
a4.O(D.exe,14,m)
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=D.btb.gp(0)
m.c=4
m.d=B.bH
a4.ah(D.exf,D.eym,m)
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.san(new A.amt(D.eAu,46,D.dhn,B.vB,B.x,e,e,0))
a4.O(B.J,34,m)
m=A.bY(D.eAA,8,12)
l=new A.ar(B.T,B.Q,B.W,B.X,B.U)
l.r=B.c.j(0.35).gp(0)
a4.c1(m,l)
k=new A.jR(new A.et(n.c,e,e,B.cO,e,e,e,e,e,e,D.fK1),B.K,B.bW,new A.jm(1),e,e,3,e,B.bX,e,B.cw)
k.nD(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bv(A.bY(B.cP,m.gb9(m)+8,l),B.h1)
l=new A.ar(B.T,B.Q,B.W,B.X,B.U)
l.r=D.qH.gp(0)
a4.ar(j,l)
l=new A.ar(B.T,B.Q,B.W,B.X,B.U)
l.r=D.lR.gp(0)
l.b=B.ac
l.c=1.5
a4.ar(j,l)
l=k.b
m=l.c
l=l.a.c
k.a3(a4,new A.r(-m/2,4-l.gb9(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
C.ioO(a4,new A.r(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dX,(w+1)/2)
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
m.r=D.a_C.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=D.Ce.gp(0)
m.c=1.4
a4.ah(new A.r(t,a2),new A.r(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=B.nE.gp(0)
a4.aE(new A.a3(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.bni.gp(0)
a4.c1(new A.a3(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=g.e.j(B.i.D(s,0,1)).gp(0)
a4.O(new A.r(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.fu(e,B.cw,e,e,e,A.cT(e,e,e,e,e,e,e,e,e,A.l(e,e,B.cW.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,E.Ea,e,e),"+"+a2),B.a7,B.bW,e,B.dG,B.bX)
k.e6()
k.a3(a4,new A.r(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aD(d){return!0}}
C.R4.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aCv(w.c,w.f,v),B.az),s=A.m(10),r=A.K(B.bA,B.r,1.4)
return new A.a6(u+22,v,A.x(A.a([new A.a6(u,u,t,v),B.cM,A.o(v,A.c(w.d,v,1,B.a2,v,v,v,D.fCu,v,v,v),B.f,v,v,new A.n(B.c,v,r,s,v,v,B.m),v,v,v,v,B.nc,v,v,v)],x.p),B.l,v,B.e,B.M,0,B.p),v)},
ga_(d){return this.e}}
C.aCv.prototype={
a3(d,e){var w=e.ek(B.J),v=e.gdj(),u=this.c?0.8:0
return A.hoD(d,w,v*0.44,this.b,0,u)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aAX.prototype={}
C.avN.prototype={
S(){return new C.avO(A.S(x.S,x.cq),null,null)},
gd4(){return this.d}}
C.avO.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hNh(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaGq(){var w=this.z
return w===$?this.z=this.XS(0):w},
gj2(){var w,v=this.Q
if(v===$){w=this.gkS()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c1(w,-1,!1,x.S)}return v},
XS(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aAX(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aAX(v[t],u[t],-1))
v=new A.e_()
v.cS(this.a.e*31+d)
B.d.dU(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.dr(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eN$
u.b=!1
B.d.a8(u.a)
u=u.goJ()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dW$.a.a8(0)
v.qL()}this.bxW()},
cU8(d,e){var w,v,u,t,s,r=this
if(d>=r.gj2().length||r.gj2()[d]!==-1||B.d.q(r.gj2(),e))return
w=r.gaGq()[e]
v=r.gkS()[r.e].a
if(w.c<0){++r.f;++r.y
r.l(new C.css(r,e,w,v))
A.cx(B.lX,new C.cst(r))
return}++r.r
u=A.bp(null,B.hJ,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.l(new C.csu(r,d,e,w,v))
u.cs(0)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkS()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cC(n,0,new C.csv())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.l(new C.csw(t,r))
w=5
return A.b(C.C0(t.a.d,r),$async$kN)
case 5:t.x=f
o=t.a
w=6
return A.b(C.C1(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.l(new C.csx())
w=1
break
case 4:for(o=t.as,n=new A.dr(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eN$
p.b=!1
B.d.a8(p.a)
p=p.goJ()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dW$.a.a8(0)
q.qL()}o.a8(0)
t.l(new C.csy(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.as(A.c(""+r.r+" branches grown",p,p,p,p,p,p,B.qh,p,p,p),p,p,p)
v=r.f
v=A.as(A.c(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.WD,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tI(q,A.cn(A.a([D.ah1,w,v,B.aO,new C.IH(u,t,r.ch,p),B.aO,A.as(C.uB("Back to the games",new C.cso(d),B.cW,B.kj,D.fJ),p,p,p)],x.p),p,p,B.ae,p,p,B.ah,!1),B.fe,p)}w=r.gkS()
v=r.e
s=w[v]
return new C.tI(q,new A.D(B.to,A.x(A.a([A.c("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,B.aXz,B.K,p,p),A.E(A.cf(new C.csp(r,s)),1)],x.p),B.l,p,B.e,B.h,0,B.p),p),B.fe,p)}}
C.bdJ.prototype={
a3(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.X(b2,new C.cSy(),A.T(b2).k("X<1>")).gJ(0),b4=a9.b,b5=b4.a5(0,B.Ko)
$.R()
w=A.L()
w.r=D.lS.j(0.18+0.1*b3).gp(0)
b6.O(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a5(0,D.ex1)
u=A.L()
u.r=B.qJ.j(0.5).gp(0)
u.c=10
u.d=B.bH
b6.ah(new A.r(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.e8.aB(0,B.i.D(b2[p],0,1))
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
if(h===0||i.f)A.bj(A.jM(b1));--h
g=new A.BY(i,h)
f=0
for(;;){i.jP()
e=n[h].b
e===$&&A.d()
if(!(f<e.a.length()))break
i.jP()
e=n[h].b
e===$&&A.d()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.R()
a1=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a1.r=B.aT.gp(0)
a1.b=B.ac
a1.c=3
b6.af(new A.aG(l,d,b0,new A.b7([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aG(l,j.b,j.c,b0,A.bs(k,!0,r)),n=A.a([],q),k=new A.uW(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bj(A.jM(b1));--a0
k.jP()
a1=n[a0].b
a1===$&&A.d()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.R()
a4=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a4.r=D.H4.gp(0)
a4.b=B.ac
a4.c=h
a4.d=B.bH
b6.af(new A.aG(l,a2,b0,new A.b7([new A.BY(k,a0),0,a1*m,!0]),a3),a4)
k.jP()
a4=n[a0].b
a4===$&&A.d()
a4=a4.a.length()
k.jP()
a5=n[a0].Wi(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bY(new A.r(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a3.r=B.be.gp(0)
b6.c1(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.jR(D.fBY,B.a7,B.bW,new A.jm(1),b0,b0,b0,b0,B.bX,b0,B.cw)
a8.e6()
a8.a3(b6,new A.r(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aD(d){return!0}}
C.azJ.prototype={
S(){return new C.azK(A.aR(x.S))},
gd4(){return this.d}}
C.azK.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hOb(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
Z(){this.a4()
this.bat()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a2()},
bat(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.d5(B.tk,new C.cHp(this))},
brv(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkS()[v.e]
if(w.e[d]===w.b)v.l(new C.cHx(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.l(new C.cHy(v,d))
A.cx(B.iY,new C.cHz(v))}},
cZE(){var w=this
if(!w.as&&w.f<w.gkS()[w.e].d.length)w.l(new C.cHA(w))},
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
t.l(new C.cHB(t,s))
w=5
return A.b(C.C0(t.a.d,s),$async$kN)
case 5:t.y=f
q=t.a
w=6
return A.b(C.C1(q.d,q.c.a,"who",t.r),$async$kN)
case 6:t.ax=f
if(t.c!=null)t.l(new C.cHC())
w=1
break
case 4:t.l(new C.cHD(t))
t.bat()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.as(A.c(""+a0.w+" of "+a0.gkS().length+" guessed",a2,a2,a2,a2,a2,a2,B.qh,a2,a2,a2),a2,a2,a2)
v=A.as(A.c(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.WD,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tI(a1,A.cn(A.a([D.bgd,w,v,B.aO,new C.IH(u,t,a0.ax,a2),B.aO,A.as(C.uB("Back to the games",new C.cHr(a3),B.cW,B.kj,D.fJ),a2,a2,a2)],x.p),a2,a2,B.ae,a2,a2,B.ah,!1),B.fe,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkS()
u=x.X
t=x.p
w=A.a([A.c("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.LK,B.K,a2,a2),B.S,A.as(A.lI(new C.cHs(a0,r),a2,B.b_,B.hJ,a2,a2,new A.bt(a2,s,u),x.i),a2,a2,a2),B.aA],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.av(B.cW,2,B.r,-1)
k=o+1
w.push(new A.re(new A.bt(0,1,u),new C.cHt(),A.o(a2,new A.c3(B.aL,B.e,B.h,B.l,a2,B.p,a2,0,A.a([new A.qN(A.c(""+k,a2,a2,a2,a2,a2,a2,B.ol,a2,a2,a2),D.lR,a2,12,a2),B.ar,new A.bx(1,B.ba,A.c(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fOT,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.n(D.qH,a2,new A.bE(l,l,l,l),new A.bb(m,m,m,m),a2,a2,B.m),a2,a2,a2,B.cy,B.bl,a2,a2,a2),B.b_,B.iY,a2,new A.bl("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.as(A.bO(!1,D.hfD,a2,a2,!0,a2,a2,a2,a0.gcZD(),a2,a2),a2,a2,a2))
w.push(B.P)
if(a0.as){u=D.lS.j(0.2)
q=A.m(16)
p=A.K(D.lS,B.r,1)
n=a0.e
m=A.c("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fO,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.o(a2,A.x(A.a([m,B.S,C.uB(v,a0.gqt(a0),B.cW,B.jB,D.fJ)],t),B.l,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.n(u,a2,p,q,a2,a2,B.m),a2,a2,a2,a2,B.bG,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.ds:B.cW.j(0.2)
g=new A.aP(16,16)
l=new A.av(n.q(0,o)?B.fo:B.cW,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bV:B.c
d=n.q(0,o)?B.xX:a2
t.push(new A.re(new A.bt(0,i,u),new C.cHu(),A.ay(a2,A.o(a2,A.c(f,a2,a2,a2,a2,a2,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.ag9,new A.n(h,a2,new A.bE(l,l,l,l),new A.bb(g,g,g,g),a2,a2,B.m),a2,a2,a2,a2,B.jz,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cHv(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b_,B.mq,a2,new A.bl("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bZ(B.fT,t,B.br,a2,10,10))}return new C.tI(a1,A.cn(w,a2,a2,B.anR,a2,a2,B.ah,!1),B.fe,a2)}}
C.aAH.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bC()}}
C.aI3.prototype={
aX(){this.b7()
this.b5()
this.dK()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdD())
w.ba$=null
w.a2()}}
C.ago.prototype={
arR(d){},
asm(){var w=this,v=w.qa(new C.fcC(w))
v.fY(0)
w.Mm$!==$&&A.aQ()
w.Mm$=v}}
C.aLW.prototype={
gbnW(d){var w=this.c
return B.a.az(w,0,Math.min(this.d,w.length))},
Wq(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.d5(B.a1e,new C.fmT(w))},
btT(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.amS.prototype={
S(){return new C.amT(new C.an1(),A.a([],x.t),new A.eH(0,$.ax()),$,0,null,null)},
gd4(){return this.d}}
C.amT.prototype={
gNc(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFK(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghe(d){var w,v=this,u=v.e
if(u===$){w=C.Nk(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqB(){var w=this.r
return w===$?this.r=new C.aLW(new C.bUn(this)):w},
gaqH(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gNc()[v].c)u.push(1)
return u.length},
gbnf(){var w=this.ghe(0)
return w.gzy()==null?"Elder":B.a.i(w.gzy().b)},
Z(){this.a4()
this.asm()},
t(){var w,v=this
v.gqB().t()
v.f.t()
w=v.Mm$
w===$&&A.d()
w.t()
w=v.qh$
w.V$=$.ax()
w.R$=0
v.bxB()},
cOf(){var w=this
w.l(new C.bUk(w))
w.gqB().Wq(w.gNc()[w.x].a)},
Lv(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqB()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qh$.a
v.ax=u
v.ay=u+1
v.l(new C.bUi())
A.cx(B.hJ,new C.bUj(v))},
brr(){var w=this.gaqH(0)/this.gNc().length*100
if(w>=90)return D.f8N
if(w>=75)return D.f6J
if(w>=60)return D.eXX
if(w>=45)return D.f0w
return D.eSc},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cwv()
w=A.bS(0,new A.e7(A.b4(m,m,m,new C.buy(n,n.qh$),B.az),m),0,0,0)
if(!n.Q){v=D.qH.j(0.96)
u=A.m(20)
t=A.K(B.cW,B.r,3)
u=A.o(m,A.x(A.a([A.c("Elder "+n.gbnf()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aYs,B.K,m,m),B.S,C.uB("Start the test",n.gCa(),B.cW,B.jj,D.fJ)],x.p),B.l,m,B.e,B.M,0,B.p),B.f,m,m,new A.n(v,m,t,u,m,m,B.m),m,m,m,m,B.bG,m,m,m)
v=u}else{v=n.x
u=n.gNc()
v=A.c("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aYu,m,m,m)
if(n.Q){t=n.gqB()
t=t.d<t.c.length}else t=!1
if(t)u=D.fur
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.av(D.Ce,4,B.r,-1)
s.push(A.ay(m,A.o(m,A.c(q[r],m,m,m,m,m,m,D.fFL,B.K,m,m),B.f,m,D.ag9,new A.n(D.bj8,m,new A.bE(o,o,o,o),new A.bb(p,p,p,p),m,m,B.m),m,m,m,m,B.P6,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bUl(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bZ(B.fT,s,B.br,new A.bl("o"+t,x.W),8,8)}u=A.x(A.a([v,B.ak,A.oG(u,B.n7,A.pZ(),B.b_,B.b_,A.LW())],x.p),B.l,m,B.e,B.M,0,B.p)
v=u}return new C.tI("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.fe,m)},
cwv(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.brr(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gNc()[v].c)g.push(v)
u=A.m(22)
t=A.K(B.cW,B.r,4)
s=A.c(j.a.c.b,i,i,i,i,i,i,D.fKk,B.K,i,i)
r=A.c("Signed by Elder "+j.gbnf(),i,i,i,i,i,i,D.fIW,i,i,i)
q=x.p
p=A.a([A.c(h.a,i,i,i,i,i,i,D.fOd,i,i,i),D.eJJ],q)
o=A.c(h.b,i,i,i,i,i,i,D.fQc,i,i,i)
n=j.gaqH(0)
m=j.gNc()
u=A.o(i,A.x(A.a([D.h0E,B.at,s,r,B.S,new A.an(B.z,i,B.ad,B.t,p,i),o,B.ak,A.c(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.ada,i,i,i),B.P,D.auN],q),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(D.qH,i,t,u,i,i,B.m),i,i,i,i,B.fc,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aA,new C.IH(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aO,D.hgH,B.P],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.av(B.bw,1,B.r,-1)
p=m[v]
u.push(A.o(i,A.x(A.a([A.c(p.a,i,i,i,i,i,i,B.hg,i,i,i),B.at,A.c("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fLx,i,i,i),A.c(p.d,i,i,i,i,i,i,D.fNP,i,i,i)],q),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.ds,i,new A.bE(k,k,k,k),new A.bb(r,r,r,r),i,i,B.m),i,i,i,B.cy,B.bl,i,i,i))}B.d.u(s,u)}s.push(B.aA)
s.push(A.as(C.uB("Back to the games",new C.bUe(j),B.cW,B.kj,D.fJ),i,i,i))
return new C.tI("Village School",A.cn(s,i,i,B.bQ,i,i,B.ah,!1),B.fe,i)}}
C.buy.prototype={
a3(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qh$.a
a0.GI(e.f.MY(a1))
w=C.hjL(a1)
v=a0.c
J.br(v.save())
v.translate(w.a,w.b)
a0.bV(0,w.c)
if(e.Q){u=e.gqB()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.d1Q[s]-6
$.R()
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.r=D.GO.gp(0)
a0.aE(new A.a3(u,340,u+12,450),r)}u=A.bv(D.ab6.cr(10),B.ih)
$.R()
r=A.L()
r.r=D.Ce.gp(0)
a0.ar(u,r)
r=A.bv(D.ab6,B.iy)
u=A.L()
u.san(A.jF(new A.r(30,96),new A.r(420,346),D.dn7,f,B.x,f))
a0.ar(r,u)
q=new A.e_()
q.cS(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bY(new A.r(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.r=B.c.j(0.025).gp(0)
a0.c1(o,r)}u=A.L()
u.r=E.akF.gp(0)
a0.aE(new A.a3(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.aE(D.flN,u)
u=A.L()
u.r=B.bM.gp(0)
a0.aE(D.flR,u)
u=A.bv(D.flH,B.hq)
r=A.L()
r.r=D.a_C.gp(0)
a0.ar(u,r)
n=B.i.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqB().gbnW(0)
m=A.fu(f,B.cw,f,7,f,A.cT(f,f,f,f,f,f,f,f,f,D.fSw,u+(t?"|":"")),B.a7,B.bW,f,B.dG,B.bX)
m.nD(346)
J.br(v.save())
u=A.i6(D.ab6)
r=$.mj()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.i6(new A.a3(30+390*n,96,420,346)),r[1],!0)
m.a3(a0,new A.r(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bv(new A.a3(u,r,u+40,r+90),B.h1)
u=A.L()
u.r=D.bzk.gp(0)
a0.ar(r,u)}}else{m=A.fu(f,B.cw,f,f,f,D.fCd,B.K,B.bW,f,B.dG,B.bX)
m.nD(340)
m.a3(a0,new A.r(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.i.F(u+p/8,1)
o=B.o.F(e.gqB().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.T,B.Q,B.W,B.X,B.U)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.O(new A.r(70+o+k*6,166+l*70),1.6,j)}u=e.ghe(0).gzy()
i=(u==null?f:u.c)===D.oP?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.fcD(d,a0,i,t,h,D.eyb)),new A.y(520,new C.fcE(a0,d,t)),new A.y(575,new C.fcF(a0,d,t)),new A.y(585,new C.fcG(this,a0,d,t)),new A.y(615,new C.fcH(this,t,a0,d,h))],x.E)
B.d.b_(g,new C.fcI())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
ceb(d,e){var w,v,u,t,s,r,q,p=$.R(),o=A.a([],x.v),n=new A.aG(p.r,B.aj,null,null,o)
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
C.amQ.prototype={
S(){return new C.amR(new C.an1(),A.S(x.S,x.i),new A.eH(0,$.ax()),$,0,null,null)},
gd4(){return this.d}}
C.amR.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hN6(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gj2(){var w=this.z
return w===$?this.z=this.FX(0):w},
gaMG(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FX(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cd(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FX(0):r).length);++v}s.Q=w
r=w}return r},
FX(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e0(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e_()
u.cS(this.a.e+d*7)
B.d.dU(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.eD(u,new C.bU0())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a4()
this.asm()},
t(){var w,v=this
v.e.t()
w=v.Mm$
w===$&&A.d()
w.t()
w=v.qh$
w.V$=$.ax()
w.R$=0
v.bxA()},
arR(d){var w,v,u,t,s,r=this,q=r.gj2().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cd(u===$?r.z=r.FX(0):u,v)
s=r.gaMG()
s[v]=s[v]+(450*(t+0.5)/q-r.gaMG()[v])*Math.min(1,w)}},
d42(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj2().length)return
w=v.y
if(w===-1){v.l(new C.bUb(v,d))
return}if(w===d){v.l(new C.bUc(v))
return}v.l(new C.bUd(v,B.d.cd(v.gj2(),v.y),d,B.d.cd(v.gj2(),d)))},
cOY(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FX(0):u).length))break
t=s.gkS()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FX(0):u)[v]]===v);++v}s.l(new C.bU6(s,B.d.cv(w,new C.bU7())))},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkS().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.l(new C.bU8(t,s))
w=5
return A.b(C.C0(t.a.d,s),$async$kN)
case 5:t.x=f
q=t.a
w=6
return A.b(C.C1(q.d,q.c.a,"lineup",t.r*10),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.l(new C.bU9())
w=1
break
case 4:t.l(new C.bUa(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.as(A.c(""+l.r+" of "+l.gkS().length+" lines right",k,k,k,k,k,k,B.qh,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tI("Line Up",A.cn(A.a([D.ah1,w,B.aO,new C.IH(v,u,l.ch,k),B.aO,A.as(C.uB("Back to the games",new C.bU2(d),B.cW,B.kj,D.fJ),k,k,k)],x.p),k,k,B.ae,k,k,B.ah,!1),B.fe,k)}w=A.a([],x.t)
for(t=0;v=l.gkS(),t<v[l.f].d.length;++t)w.push(t)
B.d.b_(w,new C.bU3(l))
u=A.bS(0,A.cf(new C.bU4(l)),0,0,0)
s=l.f
r=A.c("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aYu,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.x(A.a([r,A.c(s.a,k,k,k,k,k,k,D.fKM,B.K,k,k),A.c(s.b,k,k,k,k,k,k,D.fN3,B.K,k,k)],q),B.l,k,B.e,B.h,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.v.j(0.7)
o=A.m(16)
n=l.ax
m=A.K(n?D.lS:B.nE,B.r,2)
r.push(A.o(k,A.c(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bU5(l),x.cM).aM(0,", then ")+".",k,k,k,k,k,k,D.fPh,k,k,k),B.f,k,k,new A.n(p,k,m,o,k,k,B.m),k,k,k,B.d4,B.bl,k,k,1/0))}if(!l.at)r.push(C.uB("That is my line!",l.gcOX(l),B.cW,B.hn,D.fJ))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uB(w,l.gqt(l),B.cW,B.jB,D.fJ))}return new C.tI("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ao(12,A.x(r,B.l,k,B.e,B.M,0,B.p),k,k,12,12,k,k)],q),k),B.fe,k)}}
C.bkY.prototype={
a3(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qh$.a
c7.GI(c5.e.MY(c8))
w=C.hjL(c8)
v=c7.c
J.br(v.save())
v.translate(w.a,w.b)
c7.bV(0,w.c)
u=c5.gj2().length
t=$.R().r
s=x.v
r=new A.aG(t,B.aj,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.ch(225,500,440,470))
q=A.L()
q.r=D.a_C.gp(0)
q.b=B.ac
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
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=[B.cW,B.nE,D.lS,B.aH][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b2p(c7,"OLDEST",D.ez9,B.cW)
this.b2p(c7,"YOUNGEST",D.eyC,B.be)
t=A.bv(D.flB,B.h1)
s=A.L()
s.r=D.GO.gp(0)
c7.ar(t,s)
s=A.bv(D.flA,B.iy)
t=A.L()
t.r=D.Ce.gp(0)
c7.ar(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b_(t,new C.duA())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.cd(a1===$?c5.z=c5.FX(0):a1,f)
o=c5.gaMG()[f]
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
a9=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a9.r=B.cW.j(0.22+0.1*Math.sin(e)).gp(0)
c7.O(new A.r(o,520),54,a9)}a9=D.drc[B.o.F(b0,6)]
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
else b9=a3?D.eBd:c4
if(b1)c0=new A.r(3+b2*8,-56)
else if(h&&a7)c0=D.aOa
else c0=a3?new A.r(30,-104+Math.sin(e)*5):c4
C.T_(c7,new A.r(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.Kq,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.jR(new A.et(a8,c4,c4,B.cO,c4,c4,c4,c4,c4,c4,D.fIq),B.a7,B.bW,new A.jm(1),"\u2026",c4,1,c4,B.bX,c4,B.cw)
c1.nD(q)
c2=A.bv(A.bY(new A.r(o,650),24,c1.b.c+16),B.h1)
$.R()
a8=new A.ar(B.T,B.Q,B.W,B.X,B.U)
if(a6)a9=B.iH
else a9=a7?B.td:D.qH
a8.r=a9.gp(0)
c7.ar(c2,a8)
a8=new A.ar(B.T,B.Q,B.W,B.X,B.U)
if(a6)a9=D.lS
else a9=a7?B.nE:D.lR
a8.r=a9.gp(0)
a8.b=B.ac
a8.c=2
c7.ar(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a3(c7,new A.r(o-a9/2,650-a8.gb9(a8)/2))
c3=new A.jR(new A.et(""+(a2+1),c4,c4,B.cO,c4,c4,c4,c4,c4,c4,D.fIK),B.a7,B.bW,new A.jm(1),c4,c4,c4,c4,B.bX,c4,B.cw)
c3.e6()
c3.a3(c7,new A.r(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.i.F(p*53+Math.sin(c5+p)*20,450)
q=B.i.F(t+p*37,420)
J.br(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bY(B.J,4,8)
$.R()
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=[B.cW,B.nE,D.lS,B.aH,B.c][B.o.F(p,5)].gp(0)
c7.aE(q,m)
v.restore()}v.restore()},
b2p(d,e,f,g){var w,v,u=null,t=A.fu(u,B.cw,u,u,u,A.cT(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,E.Ea,u,u),e),B.a7,B.bW,u,B.dG,B.bX)
t.e6()
w=t.b
v=w.c
w=w.a.c
t.a3(d,f.aJ(0,new A.r(v/2,w.gb9(w)/2)))},
aD(d){return!1}}
C.a2F.prototype={
a7(){return"_Trip."+this.b}}
C.amM.prototype={
S(){return new C.amN(D.Yp,new A.eH(0,$.ax()),$,0,null,null)},
gd4(){return this.d}}
C.amN.prototype={
gDJ(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFK(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghe(d){var w,v=this,u=v.e
if(u===$){w=C.Nk(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqB(){var w=this.f
return w===$?this.f=new C.aLW(new C.bTN(this)):w},
gUo(){var w=this.ghe(0)
return w.gzy()==null?"Grandma":B.a.i(w.gzy().b)},
Z(){this.a4()
this.asm()},
t(){var w,v=this
v.gqB().t()
w=v.Mm$
w===$&&A.d()
w.t()
w=v.qh$
w.V$=$.ax()
w.R$=0
v.bxz()},
arR(d){var w,v,u,t=this
if(t.r!==D.aeU)return
w=B.dO.aB(0,B.i.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDJ()
if(v+1>=u.length){t.r=D.aeV
t.Xn()}else{++t.w
t.ay=!1
t.r=D.Yq
t.gqB().Wq(u[t.w].a)}if(t.c!=null)t.l(new C.bTL())}},
Xn(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Xn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqB().Wq("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDJ().length
r=C.bI2(t,u.z,s)
u.as=r
w=2
return A.b(C.C0(u.a.d,r),$async$Xn)
case 2:u.at=e
s=u.a
w=3
return A.b(C.C1(s.d,s.c.a,"journey",u.x*10),$async$Xn)
case 3:u.ch=e
if(u.c!=null)u.l(new C.bTF())
return A.h(null,v)}})
return A.i($async$Xn,v)},
bsL(){this.aVq()},
aVq(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.aeU
if(w.c!=null)w.l(new C.bTG())},
Lv(d){var w,v,u,t,s=this
if(s.r!==D.Yq)return
w=s.gDJ()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.l(new C.bTK(s,d,v))
u=s.gqB()
t=s.w
u.Wq(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cU7(){if(this.r!==D.BM)return
this.aVq()},
B(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.e7(A.b4(s,s,s,new C.bkn(t,t.qh$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDJ().length;++w){v=t.w
if(w<v||t.r===D.aeV)v=B.cW
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(new A.bx(1,B.ba,A.o(s,s,B.f,s,s,new A.n(v,s,s,new A.bb(u,u,u,u),s,s,B.m),s,7,s,B.x2,s,s,s,s),s))}p.push(B.bf)
p.push(D.h2i)
return new C.tI("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.h,0,s,s),s,s,12,12,2,s),A.ao(10,t.co1(),s,s,10,10,s,s)],q),s),B.fe,s)},
co1(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bTJ(o),l=D.qH.j(0.96),k=A.m(22),j=A.K(B.cW,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.c("A long drive to the village of Elder "+o.gUo()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aYs,B.K,n,n),B.S,C.uB("Start the journey",o.gbsK(),B.cW,D.bUd,D.fJ)],x.p),B.l,n,B.e,B.M,0,B.p)
break
case 3:w=D.bfO
break
case 1:w=o.w
v=o.gDJ()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.av(D.lR,2.5,B.r,-1)
t.push(A.ay(n,A.o(n,A.c(r[s],n,n,n,n,n,n,D.aXO,B.K,n,n),B.f,n,D.agg,new A.n(D.alP,n,new A.bE(p,p,p,p),new A.bb(q,q,q,q),n,n,B.m),n,n,n,n,L.wX,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bTH(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.P,A.bZ(B.bI,t,B.br,n,8,8)],u),B.B,n,B.e,B.M,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDJ().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.P,new A.bK(B.a9,n,n,C.uB(v,o.gcU6(),B.cW,B.jB,D.fJ),n)],x.p),B.B,n,B.e,B.M,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gUo()),B.P,A.c(""+o.x+" of "+o.gDJ().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aY5,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aS2(v)
u=C.aS2(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.c(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.ada,n,n,n))}w.push(B.P)
w.push(A.as(C.uB("Back to the games",new C.bTI(o),B.cW,B.kj,D.fJ),n,n,n))
w=A.x(w,B.B,n,B.e,B.M,0,B.p)
break
default:w=n}return A.o(n,w,B.f,n,n,new A.n(l,n,j,k,D.aFk,n,B.m),n,n,n,n,B.bl,n,n,n)}}
C.bkn.prototype={
a3(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qh$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDJ(),d0=B.i.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.aeU,d2=c7*0.5
c8=A.ap(D.bkF,D.bvy,d0)
c8.toString
w=A.ap(D.ZL,B.ajq,d0)
w.toString
v=A.ap(B.uH,D.btU,d0)
v.toString
$.R()
u=A.L()
t=x.O
u.san(A.jF(B.J,new A.r(0,d2),A.a([c8,w,v],t),B.a5Q,B.x,c3))
d3.aE(new A.a3(0,0,0+c6,0+c7),u)
s=new A.r(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.san(A.wm(s,60,A.a([D.bui,B.L],t),c3,B.x,c3,c3,0))
d3.O(s,60,u)
u=A.L()
u.r=B.ZY.gp(0)
d3.O(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.i.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dHH[o]
$.R()
u=new A.ar(B.T,B.Q,B.W,B.X,B.U)
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
k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.r=A.ap(l===0?D.bjb:D.byJ,D.bol,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cec(d3,new A.r(B.i.F(B.i.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.R()
w=A.L()
v=A.ap(D.akZ,D.H4,d0)
v.toString
w.san(A.jF(new A.r(0,d2),new A.r(0,c7),A.a([v,D.buk],t),c3,B.x,c3))
d3.aE(new A.a3(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.bny.gp(0)
d3.aE(new A.a3(0,a0,c6,a1),w)
w=A.L()
w.r=D.byk.gp(0)
d3.aE(new A.a3(0,a0-3,c6,a0),w)
for(q=-B.i.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.T,B.Q,B.W,B.X,B.U)
u.r=E.NF.gp(0)
d3.aE(new A.a3(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.R()
b2=new A.ar(B.T,B.Q,B.W,B.X,B.U)
b2.r=D.biQ.gp(0)
d3.aE(new A.a3(b0,v,b0+52,u),b2)
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
b0=new A.ar(B.T,B.Q,B.W,B.X,B.U)
b0.r=D.bwr.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ar(B.T,B.Q,B.W,B.X,B.U)
b1.r=D.fJ.gp(0)
d3.aE(new A.a3(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ar(B.T,B.Q,B.W,B.X,B.U)
b0.r=D.GO.gp(0)
d3.aE(new A.a3(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bv(new A.a3(b0,a4,b0+60,a5),B.jG)
b0=new A.ar(B.T,B.Q,B.W,B.X,B.U)
b0.r=D.bzQ.gp(0)
d3.ar(b5,b0)
b0=new A.ar(B.T,B.Q,B.W,B.X,B.U)
b0.r=D.Ce.gp(0)
b0.b=B.ac
b0.c=2
d3.ar(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.jR(new A.et(b6,c3,c3,B.cO,c3,c3,c3,c3,c3,c3,D.fGQ),B.a7,B.bW,new A.jm(1),c3,c3,c3,c3,B.bX,c3,B.cw)
b7.e6()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a3(d3,new A.r(b4-b1/2,a2-b0.gb9(b0)/2))
if(a7)b8=c4.r===D.aeV
else if(r===c4.w){b0=c4.r
b0=b0===D.Yq||b0===D.BM
b8=b0}else b8=!1
if(a7){b0=c4.ghe(0).gzy()
b9=(b0==null?c3:b0.c)===D.oP?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqB()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.BM
b0=c0?C.hJ8(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.Yq?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.r(40,-110+Math.sin(g)*10)
else a7=c0?new A.r(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.T_(d3,new A.r(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.r(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bJY(d3,new A.r(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.i.F(w+r/7,1)
$.R()
t=new A.ar(B.T,B.Q,B.W,B.X,B.U)
t.r=D.bxO.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.Yp)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.i.F(w+r/5,1)
t=Math.sin(r+c8)
$.R()
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.BM&&c4.ax){b7=A.fu(c3,B.cw,c3,c3,c3,A.cT(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.cW,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,R.Jq,c3,c3),"BEEP BEEP!"),B.a7,B.bW,c3,B.dG,B.bX)
b7.e6()
b7.a3(d3,new A.r(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cec(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.btO,D.bmR,g)
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
t.r=D.a08.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d62[r]
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=D.a08.gp(0)
p.c=4
p.d=B.bH
d.ah(new A.r(w,t),new A.r(v+q*24,s),p)
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=o.gp(0)
d.O(new A.r(v+q*26,u),10,p)}}else{w=e.a5(0,D.eBa)
$.R()
v=A.L()
v.r=D.biS.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bY(e.a5(0,D.eBb),16,60)
w=A.L()
w.r=o.gp(0)
d.c1(v,w)}},
bJY(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.Yp?0.045:0,a1=a2.c
J.br(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jq(0,a0)
for(w=0;w<2;++w){v=D.dzp[w]
u=d.ay&&d.r!==D.Yp&&v>0
J.br(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.R()
s=new A.ar(B.T,B.Q,B.W,B.X,B.U)
s.r=D.byA.gp(0)
a2.O(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.T,B.Q,B.W,B.X,B.U)
s.r=D.bqv.gp(0)
a2.O(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.T,B.Q,B.W,B.X,B.U)
q.r=B.bj.gp(0)
q.c=2
a2.ah(B.J,new A.r(s*9,t*9),q)}a1.restore()}p=A.r3(D.flY,B.h1,B.h1,B.i5,B.hS)
$.R()
t=A.L()
t.san(A.jF(D.exh,B.aa0,D.dox,B.a5Q,B.x,f))
a2.ar(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.T,B.Q,B.W,B.X,B.U)
s.r=D.di9[B.o.F(o,4)].gp(0)
a2.aE(new A.a3(t,-26,t+10,-19),s)}n=d.r===D.BM&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a3(s,-66,q,-36)
J.br(a1.save())
a1.clipRRect(A.n0(A.bv(l,B.q7)),$.mE(),!0)
k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.r=D.ZL.gp(0)
a2.aE(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.BM?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.T_(a2,new A.r(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aO1,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bv(l,B.q7)
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
i.r=D.alR.gp(0)
i.b=B.ac
i.c=2
a2.ar(j,i)}d=A.bv(D.VK,B.q7)
t=A.L()
t.r=D.ZL.gp(0)
a2.ar(d,t)
J.br(a1.save())
a1.clipRRect(A.n0(A.bv(D.VK,B.q7)),$.mE(),!0)
C.T_(a2,new A.r(D.VK.gbD().a,-10),0,0,0.7,-0.1,f,f,D.aO1,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bv(D.VK,B.q7)
d=A.L()
d.r=D.alR.gp(0)
d.b=B.ac
d.c=2
a2.ar(t,d)
d=A.L()
d.r=B.CD.gp(0)
a2.O(D.ezp,4,d)
d=A.L()
d.r=D.GO.gp(0)
a2.aE(D.fn6,d)
for(w=0;w<3;++w){v=D.dzr[w]
d=A.bv(new A.a3(v,-96,v+28,-79),B.jG)
t=new A.ar(B.T,B.Q,B.W,B.X,B.U)
t.r=D.H4.gp(0)
a2.ar(d,t)}a1.restore()},
aD(d){return!1}}
C.aCy.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bC()}}
C.bhV.prototype={}
C.aCA.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bC()}}
C.bhW.prototype={}
C.aCB.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bC()}}
C.bhX.prototype={}
C.a77.prototype={
B(d){var w=null
return new A.a6(1/0,this.c,A.b4(w,w,w,new C.bku(w),B.az),w)}}
C.bku.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dxe[B.o.F(n,6)]
k=$.R()
j=new A.ar(B.T,B.Q,B.W,B.X,B.U)
j.r=l.gp(0)
d.aE(new A.a3(m,0,m+v,u),j)
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
k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aD(d){return!1}}
C.tI.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aH(w,w,w,w,B.R2,w,w,w,new C.bTE(d),w,w,w,w,w,w),A.E(A.c(this.c,w,1,B.a2,w,w,w,D.fE6,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c5(w,D.Zv,A.o(w,A.bm(!0,A.x(A.a([D.c9h,new A.D(D.bL4,A.A(u,B.l,w,B.e,B.h,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.bb3,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.IH.prototype={
B(d){var w=null,v=this.d,u=C.aS2(v),t=C.irt(v),s=B.c.j(0.08),r=A.m(18),q=A.K(B.cW.j(0.6),B.r,1.5),p=A.a([A.c("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fGB,w,w,w)],x.p)
if(this.e)p.push(D.eDC)
p.push(B.ak)
p.push(A.c(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.hg,w,w,w))
if(t!=null)p.push(new A.D(B.v1,A.c(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.Ft,w,w,w),w))
return A.o(w,A.x(p,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.n(s,w,q,r,w,w,B.m),w,w,w,w,B.bG,w,w,w)}}
C.WM.prototype={
S(){return new C.bni(A.S(x.N,x.S),B.o.F(Date.now(),1e5))},
d03(d){return this.f.$1(d)},
ge4(){return this.d}}
C.bni.prototype={
gTp(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a4()
this.PZ()},
PZ(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$PZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bUp(u.a.d),$async$PZ)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dmt[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bUo(p,(o===$?u.d=q.c:o).a,r),$async$PZ)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.l(new C.e4U(u,n))
return A.h(null,v)}})
return A.i($async$PZ,v)},
uH(d){return this.cr7(d)},
cr7(d){var w=0,v=A.j(x.H),u=this,t
var $async$uH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a8(t,!1).cb(A.ea(new C.e4V(d),!1,null,x.H)),$async$uH)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.PZ()
return A.h(null,v)}})
return A.i($async$uH,v)},
gb7R(){var w,v,u,t=C.Nk(this.gTp()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a3a(d){return this.cyq(d)},
cyq(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a3a=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].ak())
w=2
return A.b(u.a.d03(r),$async$a3a)
case 2:if(u.c!=null)u.l(new C.e4W(u,r))
return A.h(null,v)}})
return A.i($async$a3a,v)},
Pi(d){return this.bSM(d)},
bSM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Pi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hm7(t.gTp())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.N4("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a8(s,!1).cb(A.ea(new C.e4S(q),!1,null,r)),$async$Pi)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bk(j,new C.e4T(p))
o=s.length
B.d.ca(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a3a(A.cS(s,0,A.dy(2,"count",x.S),r).dm(0)),$async$Pi)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Pi,v)},
Yj(d,e){return this.bQl(0,e)},
bQl(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Yj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.ce(null,null,!0,null,new C.e4R(e),o,null,!0,!0,x.y),$async$Yj)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hm7(u.gTp()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a3a(o),$async$Yj)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Yj,v)},
aaV(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e4O(this,j):h
o=o?0.55:1
w=A.ap(g,B.v,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.m(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.ab(0,B.H,g.j(0.35),B.cz,12)],x.V)
s=x.p
r=A.a([A.c(d,p,p,p,p,p,p,B.Wy,p,p,p),B.aY],s)
q=A.m(10)
r.push(A.o(p,A.c(i,p,p,p,p,p,p,D.fF_,p,p,p),B.f,p,p,new A.n(B.i_,p,p,q,p,p,B.m),p,p,p,p,B.zw,p,p,p))
return A.ay(p,A.d3(A.o(p,A.x(A.a([A.A(r,B.l,p,B.e,B.h,0,p,p),B.aY,A.c(e,p,2,p,p,p,p,D.fMX,p,p,p),B.cM,A.c(f,p,3,B.a2,p,p,p,D.fFJ,p,p,p)],s),B.B,p,B.e,B.h,0,B.p),B.f,p,p,new A.n(p,p,u,v,t,new A.a7(B.ay,B.aC,B.x,w,p,p),B.m),p,p,p,p,B.wV,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
XN(d,e,f,g,h,i){return this.aaV(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Nk(s.gTp()),p=s.gTp(),o=C.aS2(s.e),n=C.hm7(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e4X(s),k=C.hN6(p,1).length,j=C.hNh(p,1).length,i=C.hOb(p,1).length,h=B.c.j(0.07),g=A.m(20),f=A.K(B.cW.j(0.5),B.r,1),e=A.c(o.b,r,r,r,r,r,r,B.acY,r,r,r),d=A.c(o.a,r,r,r,r,r,r,D.fKo,r,r,r),a0=q.b.length,a1=x.p
g=A.o(r,A.A(A.a([e,B.bb,A.E(A.x(A.a([d,A.c(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.WQ,r,r,r)],a1),B.B,r,B.e,B.h,0,B.p),1),A.x(A.a([A.c(""+s.e,r,r,r,r,r,r,B.qh,r,r,r),D.h8E],a1),B.l,r,B.e,B.h,0,B.p)],a1),B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.n(h,r,f,g,r,r,B.m),r,r,r,r,B.bG,r,r,r)
f=s.XN("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aD,new C.e4Y(s,p),l.$1("kahoot"))
h=s.XN("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lR,new C.e4Z(s,p),l.$1("fire"))
a0=s.XN("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.wJ,new C.e5_(s,p),l.$1("catch"))
j=j!==0?new C.e52(s,p):r
j=s.aaV("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hX,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e53(s,p):r
i=s.aaV("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lQ,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.XN("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.ft,new C.e54(s,p),l.$1("journey"))
k=k!==0?new C.e55(s,p):r
k=A.a([g,B.aO,D.hcI,B.P,A.l3(0.98,A.a([f,h,a0,j,i,e,s.aaV("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.eq,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.XN("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d9,new C.e56(s,p),l.$1("school"))],a1),2,12,12,r,B.e4,!0),B.dc,A.A(A.a([D.bMU,A.c(""+n.length+" of 2",r,r,r,r,r,r,D.fF4,r,r,r)],a1),B.l,r,B.e,B.h,0,r,r),B.P],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.av(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fU6,B.bb,new A.bx(1,B.ba,A.x(A.a([A.c(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hs,r,r,r),A.c(""+v.gaql(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.Ft,r,r,r)],a1),B.B,r,B.e,B.h,0,B.p),r)],a1)
if(v.gaql(0).length>=2){f=D.lS.j(0.2)
t=new A.av(D.lS,1,B.r,-1)
g.push(A.ay(r,A.o(r,A.W(B.fZ,D.lS,r,r,r,20),B.f,r,r,new A.n(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e57(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cW.j(0.2)
t=new A.av(B.cW,1,B.r,-1)
f=A.ay(r,A.o(r,A.W(B.jj,B.cW,r,r,r,20),B.f,r,r,new A.n(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e58(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fo.j(0.2)
t=new A.av(B.fo,1,B.r,-1)
B.d.u(g,A.a([B.bf,f,B.bf,A.ay(r,A.o(r,A.W(B.eo,B.fo,r,r,r,20),B.f,r,r,new A.n(e,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e59(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.o(r,new A.c3(B.aL,B.e,B.h,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.n(i,r,new A.bE(u,u,u,u),new A.bb(h,h,h,h),r,r,B.m),r,r,r,B.d4,B.bl,r,r,r))}if(s.a.e){j=m?new C.e50(s):new C.e51(a2)
i=A.m(18)
h=A.K(m?B.cW:B.aT,B.r,2)
g=m?B.cW.j(0.12):B.ds
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.ay(r,A.o(r,A.as(A.c(f,r,r,r,r,r,r,A.l(r,r,m?B.cW:B.aF,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.n(g,r,h,i,r,r,B.m),r,r,r,r,B.OX,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.hdE)
k.push(B.aA)
k.push(D.auN)
return new C.tI("Family Games \xb7 "+p.b,A.cn(k,r,r,D.bH_,r,r,B.ah,!1),B.fe,r)}}
C.a0w.prototype={
a7(){return"_KPhase."+this.b}}
C.amO.prototype={
S(){return new C.amP(D.b2H)},
gd4(){return this.e}}
C.amP.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a2()},
fY(d){var w,v=this
v.l(new C.bTZ(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.d5(B.fB,new C.bU_(v))},
aQT(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.l(new C.bTP(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.d5(B.fn,new C.bTQ(w))},
Lv(d){var w
if(this.d!==D.aep)return
w=this.at
if(w!=null)w.a1(0)
this.b7N(d)},
b7N(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.i.T(500+500*B.i.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.l(new C.bTV(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cx(B.tk,v.giC(v))},
cNz(d){var w=this
if(w.d!==D.XW)return
if(w.e+1>=w.a.w.length)w.Z5()
else{w.l(new C.bTW(w))
w.aQT()}},
Z5(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Z5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bI2(p,u.w,t)
u.l(new C.bTS(u,s))
w=2
return A.b(C.C0(u.a.e,s),$async$Z5)
case 2:r=e
t=u.a
w=3
return A.b(C.C1(t.e,t.f,t.r,u.f),$async$Z5)
case 3:q=e
if(u.c!=null)u.l(new C.bTT(u,r,q))
return A.h(null,v)}})
return A.i($async$Z5,v)},
cOo(){var w,v,u,t,s=this,r=s.a,q=new A.e_()
q.cS(r.w.length*31+B.a.gY(r.f))
w=s.a.w.length*900
v=A.a([new A.b3("You",s.f,!0)],x.bd)
r=A.B(s.a.x,x.N)
B.d.dU(r,q)
for(r=A.cS(r,0,A.dy(4,"count",x.S),A.T(r).c),u=r.$ti,r=new A.bQ(r,r.gJ(0),u.k("bQ<aj.E>")),u=u.k("aj.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b3(t,B.i.T(w*(0.35+q.ai()*0.5)),!1))}B.d.b_(v,new C.bTX())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b2H===r){w=A.a([D.h92,B.S,A.c(s,t,t,t,t,t,t,B.X_,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.c(v,t,t,t,t,t,t,D.fFc,t,t,t))
w.push(B.aA)
w.push(A.c(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.Bw,B.K,t,t))
w.push(B.eb)
w.push(C.uB("Play",u.geY(u),B.cW,B.fZ,D.fJ))
w=A.as(new A.D(B.eG,A.x(w,B.l,t,B.e,B.M,0,B.p),t),t,t,t)
break A}if(D.b2I===r){w=A.as(A.c(""+u.z,t,t,t,t,t,t,D.fNu,t,t,t),t,t,t)
break A}if(D.aep===r||D.XW===r){w=u.ctM()
break A}if(D.b2J===r){w=u.ced()
break A}w=t}return new C.tI(s,w,B.fe,t)},
ctM(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.XW,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.c(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aXE,j,j,j),B.aY],h)
f=k.r
if(f>=2)g.push(A.c("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.LK,j,j,j))
g.push(B.ar)
f=A.m(14)
g.push(A.o(j,A.c(""+k.f,j,j,j,j,j,j,B.iP,j,j,j),B.f,j,j,new A.n(B.bw,j,j,f,j,j,B.m),j,j,j,j,B.D_,j,j,j))
g=A.A(g,B.l,j,B.e,B.h,0,j,j)
f=A.m(6)
w=i?0:B.i.D(k.as/k.a.w[k.e].r,0,1)
f=A.bu(f,A.jt(B.bw,j,k.as<5?B.fo:B.cW,9,j,w,j),B.aq)
w=A.m(22)
v=A.K(B.cW,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.c(u,j,j,j,j,j,j,A.l(j,j,e?D.lS:B.nE,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.P,A.c(k.a.w[k.e].d,j,j,j,j,j,j,D.fEf,B.K,j,j)],h),B.l,j,B.e,B.M,0,B.p)}else u=A.c(k.a.w[k.e].a,j,j,j,j,j,j,D.fPG,B.K,j,j)
w=A.E(A.o(j,A.as(u,j,j,j),B.f,j,j,new A.n(D.qH,j,v,w,j,j,B.m),j,j,j,j,B.fc,j,j,1/0),3)
v=A.a([],h)
for(u=k.giC(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bTU(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aEX[o]
m=new A.aP(16,16)
l=new A.av(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.c(D.aFg[o],j,j,j,j,j,j,D.fGb,j,j,j),B.ar,new A.bx(1,B.ba,A.c(r[t],j,3,B.a2,j,j,j,D.fF9,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(B.atg)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.c0R)
v.push(A.ay(j,new A.Tf(A.o(j,new A.c3(B.aL,B.e,B.h,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.n(n,j,new A.bE(l,l,l,l),new A.bb(m,m,m,m),H.aDl,j,B.m),j,j,j,j,B.f2,j,j,j),p,B.b_,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.ak,f,B.af,w,B.af,A.E(A.l3(1.45,v,2,10,10,j,B.e4,!1),4)],h)
if(i)h.push(D.eCR)
return new A.D(B.a1O,A.x(h,B.l,j,B.e,B.h,0,B.p),j)},
ced(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cOo(),m=x.p,l=A.a([D.bf4,A.as(A.c(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.qh,o,o,o),o,o,o),A.as(A.c(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.WD,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cW.j(0.25):B.ds
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.av(s?B.cW:B.bw,1,B.r,-1)
q=A.c(w<3?D.doO[w]:""+(w+1),o,o,o,o,o,o,B.m9,o,o,o)
s=s?B.u:B.O
l.push(A.o(o,new A.c3(B.aL,B.e,B.h,B.l,o,B.p,o,0,A.a([new A.a6(34,o,q,o),new A.bx(1,B.ba,A.c(t.a,o,o,o,o,o,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.c(""+t.b,o,o,o,o,o,o,B.iP,o,o,o)],m),o),B.f,o,o,new A.n(v,o,new A.bE(r,r,r,r),new A.bb(u,u,u,u),o,o,B.m),o,o,o,B.cy,B.eX,o,o,o))}l.push(B.S)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.IH(m,v,p.CW,o))
l.push(B.aO)
l.push(A.as(C.uB("Back to the games",new C.bTR(p),B.cW,B.kj,D.fJ),o,o,o))
return A.cn(l,o,o,B.fc,o,o,B.ah,!1)}}
C.Uq.prototype={
S(){return new C.amL(A.S(x.de,x.er))}}
C.amL.prototype={
gDo(){var w,v=this,u=v.d
if(u===$){w=C.hs7(v.a.c.ak())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
glX(d){var w,v,u=this,t=u.e
if(t===$){w=u.gDo().b
v=$.ax()
u.e!==$&&A.bF()
t=u.e=new A.at(new A.bd(w,B.b6,B.aP),v)}return t},
chm(d){return this.f.c_(0,d,new C.bTp(d))},
Z(){this.a4()
var w=this.gDo().c
if(w.length===0)w.push(C.hdw(null,0,20,""))},
t(){var w,v,u=this.glX(0)
u.V$=$.ax()
u.R$=0
for(u=this.f,u=new A.dr(u,u.r,u.e);u.C();)for(w=J.aT(u.d);w.C();){v=w.gP(w)
v.V$=$.ax()
v.R$=0}this.a2()},
cNp(){if(this.gDo().c.length>=12)return
this.l(new C.bTq(this))},
jH(d){var w,v,u=this,t=u.gDo()
t.b=B.a.i(u.glX(0).a.a)
w=t.gaql(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.U(D.fxb)
return}v=t.c
B.d.a8(v)
B.d.u(v,w)
v=u.c
v.toString
A.a8(v,!1).N(t)},
B(d){var w,v,u=this,t=null,s=new C.bTA(),r=x.p,q=A.a([A.bO(!1,D.fZd,t,t,!0,t,t,t,u.gbrC(u),t,t)],r),p=A.a([D.hdf,B.af,A.aN(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glX(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.al,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ae,t,t,t,t,t,t,t,t,t,t,t,B.hg,!0,B.a7,t,B.ao,t,t,t,t),B.aA],r)
for(w=0;v=u.gDo().c.length,w<v;++w)B.d.u(p,A.a([new A.fj(new C.bTz(u,w,s),t)],r))
if(v<12)p.push(A.as(C.uB("\uff0b Add a question",u.gcNo(),B.aT,t,B.c),t,t,t))
return new C.tI("Make your game",A.cn(p,t,t,D.bGX,t,t,B.ah,!1),q,t)}}
C.arW.prototype={
S(){return new C.aG7(A.a([],x._))},
bv(){return this.r.$0()},
qu(){return this.w.$0()},
ge4(){return this.c}}
C.aG7.prototype={
Z(){var w,v
this.a4()
this.wE()
w=this.a
v=w.c
if(v.length!==0)C.a8R(v,w.e,w.d.w)},
wu(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hoX(r,t.e,!1,s.w,new C.e6z(u),null,s),$async$wu)
case 2:w=3
return A.b(u.wE(),$async$wu)
case 3:return A.h(null,v)}})
return A.i($async$wu,v)},
a1m(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a1m=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hoX(r,t.e,!0,s.w,new C.e6y(u),null,s),$async$a1m)
case 2:w=3
return A.b(u.wE(),$async$a1m)
case 3:return A.h(null,v)}})
return A.i($async$a1m,v)},
wE(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wE=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bu(q.a.c),$async$wE)
case 7:p=e
if(q.c!=null)n=q.e||J.cL(p)
else n=!1
if(n)q.l(new C.e6B(q,p))
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
return A.b(C.HA(q.a.c).dc(0,B.qU),$async$wE)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.l(new C.e6C(q,o))
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
if(q.c!=null&&q.e)q.l(new C.e6D(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wE,v)},
PE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$PE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.U(D.fwM)
w=3
return A.b(C.HA(t.a.c),$async$PE)
case 3:r=e
w=4
return A.b(C.h2Y(t.a.c,r),$async$PE)
case 4:q=e
w=5
return A.b(C.HA(t.a.c),$async$PE)
case 5:p=e
if(t.c==null){w=1
break}t.l(new C.e6x(t,p))
o=t.c.L(s).f
s=A.c(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(null,null,null,q?B.dQ:B.d3,null,B.t,null,s,null,B.lw,null,null,null,null,null,null,null,null,null,null))
t.a.qu()
case 1:return A.h(u,v)}})
return A.i($async$PE,v)},
IJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.izS(l),$async$IJ)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.i2r(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b2p(q,p.e,l,"Each family tree costs $"+B.i.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$IJ)
case 4:if(!e||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
p=C.hJi(r)
o=Date.now()
n=t.a.c
m=new C.l2(l,r.toUpperCase(),p,!0,B.Z,D.Ei,new A.V(o,0,!1),0,n,D.v9,B.ck)
w=5
return A.b(C.a4w(n,m),$async$IJ)
case 5:w=6
return A.b(t.wE(),$async$IJ)
case 6:t.a.bv()
t.a.qu()
if(t.c==null){w=1
break}t.Fg(m)
case 1:return A.h(u,v)}})
return A.i($async$IJ,v)},
Fg(d){return this.cmj(d)},
cmj(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Fg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bu(u.a.c),$async$Fg)
case 2:n=l.nA(k.dJ(f,new C.e6A(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hI(m,new C.arQ(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Fg)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a4w(u.a.c,o),$async$Fg)
case 6:case 5:w=7
return A.b(u.wE(),$async$Fg)
case 7:u.a.qu()
return A.h(null,v)}})
return A.i($async$Fg,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.O(d).ax.a===B.I,o=new C.um(p)
if(r.e)return A.as(A.n5(q,p?B.bu:B.bj,q,q,q,q,q,q,q,q),q,q,q)
if(J.cu(r.d)){w=p?B.ek:B.c
v=A.m(15)
u=A.aF(!1,B.a3,!0,q,A.aM(!1,q,!0,A.o(q,D.bZm,B.f,q,q,new A.n(B.aV.j(0.12),q,A.K(B.aV,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cK,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcll(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.c("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.GB(A.o(q,A.x(A.a([u,B.aO,t,B.P,A.c("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bj,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.eb,A.bI(D.hgx,q,r.gaUc(),A.bn(B.bR,q,q,q,q,q,B.a2b,q,new A.ba(A.m(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.h,0,B.p),B.f,q,q,new A.n(w,q,q,v,q,q,B.m),q,q,q,q,D.bJJ,q,q,1/0),15,B.ag,1.05,D.aec,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.c("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aY],v)
if(J.cL(r.d))w.push(A.aH(q,q,q,q,A.W(B.Ab,B.aV,q,q,q,q),q,q,q,new C.e6F(r),q,q,q,q,"Sync family trees with database",q))
if(J.cL(r.d))w.push(A.aH(q,q,q,q,A.W(B.A7,B.aV,q,q,q,q),q,q,q,r.gahN(),q,q,q,q,"Transfer / backup file",q))
w.push(A.da(B.aub,q,D.fWu,r.gaUc(),A.bn(B.bR,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.h,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.GB(r.cJx(J.t(r.d,s),o),14,B.ag,1,D.aec,q))
B.d.u(w,u)}return A.x(A.a([p,B.aA,A.x(w,B.l,q,B.e,B.h,0,B.p)],v),B.B,q,B.e,B.h,0,B.p)},
cJx(d,e){var w=null,v=e.a,u=v?B.ek:B.c,t=A.m(14),s=A.K((v?B.em:B.bO).j(0.55),B.r,1),r=A.a([new A.ab(0,B.H,B.v.j(v?0.35:0.08),B.eA,10)],x.V),q=A.m(14),p=A.o(w,D.bYr,B.f,w,w,new A.n(B.aV.j(0.15),w,w,A.m(12),w,w,B.m),w,48,w,w,w,w,w,48),o=A.c(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.garl(),m=d.d?"":" \xb7 Public",l=d.y===D.l7?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bC,A.c(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.B,w,B.e,B.h,0,B.p),1)
return A.o(w,A.aF(!1,B.a3,!0,w,A.aM(!1,q,!0,new A.D(B.bG,A.A(A.a([p,B.bb,l,A.W(B.PP,v?B.bu:B.bj,w,w,w,w)],k),B.l,w,B.e,B.h,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e6E(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.n(u,w,s,t,r,w,B.m),w,w,w,w,w,w,w,1/0)}}
C.arQ.prototype={
S(){return new C.aG4(A.a([],x._),A.aR(x.N),A.bbb())},
bv(){return this.r.$0()},
ge4(){return this.c}}
C.aG4.prototype={
Z(){var w,v,u=this
u.a4()
u.d=u.a.w
u.aeo()
w=u.a
v=w.c
if(v.length!==0)C.a8R(v,w.e,w.d.w)},
t(){var w=this.w
w.V$=$.ax()
w.R$=0
this.a2()},
a4l(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a4l=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yG("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.d()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e6_(r),s,null,!0,!0,x.y),$async$a4l)
case 3:if(e!==!0||t.c==null){w=1
break}t.Kp()
t.l(new C.e60(t,r))
w=4
return A.b(t.uD(),$async$a4l)
case 4:t.a.bv()
t.yG(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a4l,v)},
cz1(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.d()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.x1$.push(new C.e5V(w,f,d,e))},
aWw(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dv()
u.ed(w,v,0,1)
u.k7(q,q,1,1)
this.w.sp(0,u)},
bes(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eN(new Float64Array(16))
q.e8(r)
w=q.Dt()
v=B.i.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dv()
t.ed(r,u,0,1)
t.k7(v,v,1,1)
t.ed(-r,-u,0,1)
t.j_(0,q)
s.sp(0,t)},
aeo(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aeo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bu(u.a.c),$async$aeo)
case 2:t=s.nA(r.dJ(e,new C.e5m(u)))
if(t!=null&&u.c!=null)u.l(new C.e5n(u,t))
return A.h(null,v)}})
return A.i($async$aeo,v)},
yG(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b2(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
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
return A.b(C.hoX(o,t,!1,r,new C.e5E(u),q.a,s),$async$wu)
case 2:n=A
m=J
w=3
return A.b(C.HA(u.a.c),$async$wu)
case 3:p=n.nA(m.dJ(e,new C.e5F(u)))
if(p!=null&&u.c!=null)u.l(new C.e5G(u,p))
return A.h(null,v)}})
return A.i($async$wu,v)},
Kp(){var w=this.e,v=this.d
v===$&&A.d()
w.push(v)
if(w.length>25)B.d.cH(w,0)},
uD(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.a4w(t,s),$async$uD)
case 2:return A.h(null,v)}})
return A.i($async$uD,v)},
a2S(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a2S=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.d()
if(!C.uC(q,t.a.c)){t.yG("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iB4(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a2S)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Kp()
t.l(new C.e5U(t,r))
w=4
return A.b(t.uD(),$async$a2S)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2S,v)},
b4s(){var w=this.c
w.toString
A.a8(w,!1).cb(A.ea(new C.e5B(this),!1,null,x.H))},
a1z(){return this.cml()},
cml(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a1z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.d()
if(!C.uC(m,t.a.c)){t.yG("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.O(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.X(s,new C.e5R(),A.T(s).k("X<1>")).gJ(0)
s=A.ex([0,2,3,4,5,6,8,r],x.S)
p=A.B(s,s.$ti.k("ci.E"))
B.d.ff(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.L,null,new C.e5S(n,t,new C.um(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a1z)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Kp()
t.l(new C.e5T(t,o))
w=6
return A.b(t.uD(),$async$a1z)
case 6:case 5:if(o.a&&t.c!=null)t.b4s()
case 1:return A.h(u,v)}})
return A.i($async$a1z,v)},
X6(d){return this.bFd(d)},
bFd(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
if(!C.uC(r,t.a.c)){t.yG("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e5a(t,d),r,null,!0,!0,x.P),$async$X6)
case 3:s=f
if(s==null){w=1
break}t.Kp()
t.l(new C.e5b(t,s))
w=4
return A.b(t.uD(),$async$X6)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X6,v)},
a4G(d){return this.cLN(d)},
cLN(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a4G=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.O(s)
t=u.c
t.toString
w=2
return A.b(A.ce(null,null,!0,null,new C.e62(u,d,new C.um(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a4G)
case 2:return A.h(null,v)}})
return A.i($async$a4G,v)},
ciz(d){var w=this,v=w.d
v===$&&A.d()
if(C.uC(v,w.a.c))w.Pj(d)
else w.a4G(d)},
aki(d,e){return this.cD1(d,e)},
cD1(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aki=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.O(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ce(null,null,!0,null,new C.e5X(new C.um(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$aki)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aki,v)},
IO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.d()
w=o.y===D.l7?3:5
break
case 3:w=6
return A.b(C.hbJ(t.a.c),$async$IO)
case 6:s=e
o=t.a
r=C.hx_(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.aki(!s,!r),$async$IO)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aS7(o,t.a.c)){t.yG("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lr(o,"Cancel","Remove",q.y===D.l7?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$IO)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aS5(t.a.c,t.d.a),$async$IO)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.j7(o,null)
case 1:return A.h(u,v)}})
return A.i($async$IO,v)},
abR(d){return this.bQC(d)},
bQC(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$abR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.d()
if(!C.uC(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aS(s,new C.e5c(p))){o=A.T(s)
p.a=A.nA(new A.cM(new A.X(s,new C.e5d(d),o.k("X<1>")),new C.e5e(),o.k("cM<1,p>")))}q=p.a
if(q==null)q=d.d
t.Kp()
t.l(new C.e5f(t,s,d,q))
w=3
return A.b(t.uD(),$async$abR)
case 3:t.yG(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$abR,v)},
Pj(d){return this.bSQ(d)},
bSQ(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Pj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
w=!C.uC(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a4G(d),$async$Pj)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ce(null,null,!0,null,new C.e5j(t,d),r,null,!0,!0,x.P),$async$Pj)
case 6:s=f
if(s==null){w=1
break}t.Kp()
t.l(new C.e5k(t,s))
w=7
return A.b(t.uD(),$async$Pj)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Pj,v)},
cJY(){var w=this,v=w.d
v===$&&A.d()
if(!C.uC(v,w.a.c))return
if(w.e.length===0)return
w.l(new C.e61(w))
w.uD()},
a_a(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_a=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.d()
if(!C.aS7(n,t.a.c)){t.yG("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.O(n)
s=$.ax()
r=new A.at(B.ax,s)
q=t.d.e
p=A.bs(new A.N(q,t.gch1(),A.T(q).k("N<1,p>")).c0(0,new C.e5w()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e5x(t,new C.um(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$a_a)
case 3:o=e
r.V$=s
r.R$=0
if(o!==!0||t.c==null){w=1
break}t.Kp()
t.l(new C.e5y(t,p))
w=4
return A.b(t.uD(),$async$a_a)
case 4:t.yG("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$a_a,v)},
ch2(d){return B.a.i(d.toLowerCase())},
cl5(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.d()
u=C.uC(v,w)
t=r.d
s=C.iq_(t)
C.izW(q,t.b,u,C.ipZ(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.um(n),l=p.d
l===$&&A.d()
l=l.f
w=new A.X(l,new C.e69(),A.T(l).k("X<1>")).gJ(0)
l=n?B.c6:B.hW
v=A.W(B.a3l,n?B.bu:B.bj,o,o,o,18)
u=x.p
v=A.a([new A.D(B.D0,A.aM(!1,o,!0,new A.D(B.hK,A.A(A.a([v,B.bf,A.c("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.M,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e6a(p,d),o,o,o,o,o,o,o),o),new A.D(B.nX,p.c33(m),o)],u)
if(p.d.y===D.l7){t=B.tR.j(0.15)
s=A.m(12)
r=A.K(B.tR.j(0.45),B.r,1)
q=C.Hy(p.d,p.a.c)
v.push(new A.D(B.zo,A.o(o,A.A(A.a([D.c31,B.ar,A.E(A.c("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.n(t,o,r,s,o,o,B.m),o,o,o,o,B.hy,o,o,1/0),o))}u=A.a([A.c("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,15,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aY],u)
if(C.uC(p.d,p.a.c)&&p.e.length!==0)u.push(new C.GN("Undo",B.pR,p.gcJX(),m,o,o))
u.push(new C.GN("Family Book",D.bT3,p.gcl4(),m,B.uI,o))
u.push(new C.GN("Family games",B.o5,p.gclg(),m,B.aD,o))
if(C.uC(p.d,p.a.c))u.push(new C.GN("Display settings",B.DP,p.gcmk(),m,B.b5,o))
u.push(new C.GN("Sync",B.A7,p.gahN(),m,o,o))
t=p.d
if(t.y===D.l7||C.aS7(t,p.a.c)){t=p.d.y===D.l7?"Remove shared tree":"Delete tree"
u.push(new C.GN(t,B.eo,p.gbQM(),m,B.fo,o))}if(C.uC(p.d,p.a.c))u.push(new C.GN("Add member",B.xi,new C.e6b(p),m,B.bR,o))
v.push(new A.D(B.anS,A.A(u,B.l,o,B.e,B.h,0,o,o),o))
if(p.d.garl()===0){u=A.as(A.c("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cf(new C.e6c(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.W(n?G.a3p:Q.PQ,o,o,o,o,o)
v.push(A.as(A.hs(u,A.c(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e6d(p),o),o,o,o))}return A.c5(o,l,A.bm(!0,A.x(v,B.B,o,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c33(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.d()
w=A.m(22)
v=A.a([new A.ab(0,B.H,B.h6.j(0.35),B.dp,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.W(B.A_,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a3,!0,m,A.aM(!1,m,!0,A.o(m,D.c6o,B.f,m,m,new A.n(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cK,!0,m,m,m,m,m,m,m,m,m,m,m,n.gahN(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.c(r.b,m,1,B.a2,m,m,m,D.fHf,m,m,m)
r=r.garl()
p=n.d.garl()===1?"member":"members"
o=x.p
p=A.a([s,B.bb,A.E(A.x(A.a([q,B.bC,A.c(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.B,m,B.e,B.h,0,B.p),1)],o)
if(C.uC(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.c3g,m,m,m,n.gcwk(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.h,0,m,m)
r=n.d.d
q=r?B.jC:B.ne
r=r?"Private":"Public"
r=A.E(n.axU(q,"Privacy",r,n.a.d.w?n.gcIR():m),1)
q=A.E(n.axU(B.xo,"Tree code",n.d.c,new C.e5l(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.aa,q,B.aa,A.E(n.axU(D.bUL,"Collaborators",p,n.gc83()),1)],o),B.l,m,B.e,B.h,0,m,m)],o)
if(n.d.y===D.l7){s=B.c.j(0.15)
B.d.u(p,A.a([B.P,A.aF(!1,B.a3,!0,A.m(999),A.aM(!1,A.m(999),!0,new A.D(B.fM,A.A(A.a([A.W(B.o6,B.c,m,m,m,14),B.e5,A.c("View only",m,m,m,m,m,m,B.acE,m,m,m)],o),B.l,m,B.e,B.M,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.o(m,A.bu(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.HH,A.x(p,B.B,m,B.e,B.h,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.n(m,m,m,w,v,D.caL,B.m),m,m,m,m,m,m,m,1/0)},
axU(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a3,!0,A.m(14),A.aM(!1,A.m(14),!0,new A.D(B.ap8,A.x(A.a([A.W(d,B.c,w,w,w,18),B.at,A.c(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.rA,A.c(f,w,1,B.a2,w,w,w,B.xZ,w,w,w)],x.p),B.l,w,B.e,B.h,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bhZ.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bL
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bi1(s,t),new A.au(w,v))],x.p)
r=r.gdQ(r)
B.d.u(u,r.dO(r,new C.djN(this),x.l))
r=s.c
B.d.u(u,new A.N(r,new C.djO(this),A.T(r).k("N<1,w>")))
return new A.D(B.v5,new A.a6(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.L8.prototype={}
C.GR.prototype={}
C.bi0.prototype={
gbn1(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aLQ.prototype={}
C.bi1.prototype={
bSr(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.R()
v=A.L()
v.r=B.bA.j(0.75).gp(0)
v.c=2
v.d=B.bH
d.ah(new A.r(n,w),new A.r(m,w),v)
u=(n+m)/2
t=new A.aG(q.r,B.aj,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.i_(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.i_(u+4.95,r,u+9.9,s,u,q))
t.E(new A.by())
q=A.L()
q.r=B.c.gp(0)
d.O(new A.r(u,w),9,q)
q=A.L()
q.r=B.bA.gp(0)
d.af(t,q)},
bSo(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.dk7())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aS(a0,new C.dk8(f))
t=new A.N(a0,new C.dk9(f),A.T(a0).k("N<1,H>")).c0(0,new C.dka()).cC(0,1/0,B.pq)
w=f.a
d.ah(f,new A.r(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.r(o,v),p,e)
continue}l=J.lP(n)
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
a3(d,e){var w,v,u,t,s,r
$.R()
w=A.L()
w.r=B.bR.j(0.75).gp(0)
w.c=2.2
w.b=B.ac
w.d=B.bH
w.e=B.dP
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bSo(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bSr(d,w,r.a,r.b)}},
aD(d){return d.b!==this.b}}
C.blP.prototype={
gcef(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aFx
switch(w.c.a){case 0:return D.d4w
case 1:return D.di3
case 2:return D.dBt}},
gcei(){var w=this.c,v=C.hIv(w.w),u=C.hIv(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.O(d).ax.a===B.I,q=t.gcef(),p=t.c,o=A.bGD(p.f),n=t.gcei(),m=x.V,l=A.a([new A.ab(0,B.H,B.d.gal(q).j(0.35),B.cP,10)],m),k=r?B.aw:B.c,j=A.K(r?B.aw:B.c,B.r,2)
if(o!=null)w=A.tL(B.z,s,B.cp,B.bZ,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.o(B.z,A.c(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.n(s,s,s,s,s,new A.a7(B.a5,B.a9,B.x,w,s,s),B.m),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.o(s,A.o(s,A.i7(w,B.aq),B.f,s,s,new A.n(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.n(s,s,s,s,l,new A.a7(B.ay,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.Dd,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.K(r?B.aw:B.c,B.r,1.5)
l.push(A.ao(s,A.o(s,A.c(""+k,s,s,s,s,s,s,D.fSb,s,s,s),B.f,s,s,new A.n(B.ce,s,w,j,s,s,B.m),s,s,s,s,D.bLI,s,s,s),s,s,s,-6,-4,s))}k=r?B.cu:B.c
j=A.m(8)
w=A.K(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ab(0,B.H,B.v.j(r?0.3:0.06),B.dR,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.c(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cu,s,s,s,s,s,s,s,s,u,s,s,B.F,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.c(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bj,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.ay(s,new A.a6(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.at,A.o(s,A.x(p,B.l,s,B.e,B.M,0,B.p),B.f,s,D.b9d,new A.n(k,s,w,j,m,s,B.m),s,s,s,s,D.bLT,s,s,s)],v),B.l,s,B.e,B.h,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bh1.prototype={
a3(d,e){var w,v,u,t,s
$.R()
w=A.L()
v=this.b
u=v?B.c:D.bmp
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.O(new A.r(s,t),1,w)},
aD(d){return d.b!==this.b}}
C.bzW.prototype={
B(d){var w=this,v=null,u=new C.fsu(w),t=w.c,s=t?B.cu:B.c,r=A.m(12),q=u.$3(B.ib,"Zoom in",w.d),p=A.o(v,v,B.f,t?B.bw:B.fy,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xk,"Zoom out",w.e)
return A.aF(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.o(v,v,B.f,t?B.bw:B.fy,v,v,v,1,v,v,v,v,v,22),u.$3(B.arB,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.M,0,B.p),B.f,s,4,v,B.dH,v,v,v,B.ai)}}
C.bpa.prototype={
B(d){var w=this,v=null,u=B.bR.j(0.15),t=A.K(B.bR,B.r,2),s=w.e,r=x.p
t=A.ay(v,A.o(v,A.x(A.a([A.W(s?G.a3p:Q.PQ,B.bR,v,v,v,22),A.c("+"+w.c,v,v,v,v,v,v,D.fO9,v,v,v)],r),B.l,v,B.b9,B.h,0,B.p),B.f,v,v,new A.n(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.ak,A.c(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fLV,B.K,v,v)],r)
if(s){t=A.a([B.ak],r)
s=w.d
B.d.u(t,new A.N(s,new C.f2n(w),A.T(s).k("N<1,w>")))
B.d.u(u,t)}return new A.a6(84,v,A.x(u,B.l,v,B.e,B.h,0,B.p),v)}}
C.a0K.prototype={
S(){return new C.aEx()},
bv(){return this.Q.$0()},
ge4(){return this.w}}
C.aEx.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a4()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ax()
r.d!==$&&A.aQ()
r.d=new A.at(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.at(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.at(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.at(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.at(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.at(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.c
r.y=t==null?D.zD:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.iru(w.r,w.f)
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
v.a2()},
QP(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$QP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hx_(p.y,p.w)
w=3
return A.b(A.lD(t.a.w,B.Kj),$async$QP)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b2p(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$QP)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.i2s(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(A.DT(78,800),$async$QP)
case 7:q=e
if(q!=null&&t.c!=null)t.l(new C.dAj(t,q))
case 1:return A.h(u,v)}})
return A.i($async$QP,v)},
ceh(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.d()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.i8(B.o.v(1000*Date.now()),w,D.zD,null,null,null,"","","","","",1,!1,0)
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
s=v.aH4(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a8(k,!1).N(s)},
abs(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$abs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dAi(r),s,null,!0,!0,x.y),$async$abs)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a8(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$abs,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.O(d).ax.a===B.I,i=new C.um(j),h=l.a.e,g=A.T(h).k("X<1>"),f=A.B(new A.X(h,new C.dAs(l),g),g.k("M.E"))
h=j?B.ek:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bK4,A.c(w,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hh(A.aM(!1,k,!0,new A.D(B.m0,A.W(B.eo,B.pD,k,k,k,17),k),B.cK,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbNk(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.k8:B.iG
t=A.bGD(l.as)
if(l.as==null)s=A.W(B.pK,j?B.bu:B.bj,k,k,k,40)
else s=k
s=A.as(A.ay(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.hk(u,t,s,k,42),A.ao(0,A.hk(B.bR,k,D.bXu,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcee(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.d()
t=C.aEz(t,"Full name",B.mt,1,1,i,B.mJ)
u=l.y
u===$&&A.d()
u=A.x(A.a([t,B.S,new C.blN(i,u,new C.dAt(l),k)],v),B.l,k,B.e,B.h,0,B.p)
t=A.c("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.F,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bDl],q)
o=l.a.e
B.d.u(p,new A.N(o,new C.dAu(),A.T(o).k("N<1,eT<p?>>")))
o=x.bw
n=A.c("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.F,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bDn],q)
B.d.u(q,new A.N(f,new C.dAw(),A.T(f).k("N<1,eT<p?>>")))
o=A.x(A.a([t,B.ak,new C.aeV(i,r,"Who is their parent?",p,new C.dAx(l),k,o),B.aA,n,B.ak,new C.aeV(i,m,"Who is their spouse / partner?",q,new C.dAy(l),k,o)],v),B.am,k,B.e,B.h,0,B.p)
q=l.f
q===$&&A.d()
q=C.aEz(q,"Birth date",D.aqM,1,1,i,k)
m=l.r
m===$&&A.d()
m=C.aEz(m,"Birth place",B.a3F,1,1,i,k)
n=l.w
n===$&&A.d()
n=C.aEz(n,"Date of death (if deceased)",D.asU,1,1,i,k)
p=l.x
p===$&&A.d()
p=C.aEz(p,"Occupation",B.QS,1,1,i,k)
r=l.e
r===$&&A.d()
r=A.a([new A.an(B.z,k,B.ad,B.t,w,k),B.aA,s,B.bx,new C.aeW(i,"Identity",u,k),B.af,new C.aeW(i,"Family links",o,k),B.af,new C.aeW(i,"Life details",A.x(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aEz(r,"Notes",B.l9,5,3,i,k)],v),B.l,k,B.e,B.h,0,B.p),k),B.af,new C.aEy(i,"Child order",l.cmB(l.at),new C.dAz(l),new C.dAA(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hlW(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dAB(l):k
B.d.u(r,A.a([B.S,new C.aEy(i,"Visible in tree",u,w,new C.dAC(l),k)],v))}r.push(B.S)
w=j?B.k8:B.iG
u=A.m(14)
t=A.K(j?B.em:B.bO,B.r,1)
s=A.c("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.o(k,A.iZ(k,B.bR,k,B.ag,k,new C.dAD(l),k,A.c("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.n(w,k,t,u,k,k,B.m),k,k,k,k,G.anx,k,k,k))
r.push(B.bx)
w=j?B.aS:B.aw
j=j?B.em:B.bO
r.push(A.A(A.a([A.E(A.dV(B.om,new C.dAv(d),A.dh(k,k,k,k,k,k,k,k,k,w,k,k,B.cm,k,new A.ba(A.m(14),B.a1),new A.av(j,1,B.r,-1),k,k,k,k)),1),B.bb,A.E(A.bI(D.fom,k,l.gceg(),A.bn(B.aV,k,k,0,B.c,k,B.cm,k,new A.ba(A.m(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.h,0,k,k))
r.push(B.at)
return A.eh(B.fe,k,B.ag,h,new A.a6(420,k,A.ca(A.x(r,B.am,k,B.e,B.M,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.aor,k,B.anI,new A.ba(g,B.a1),k,k)},
cmB(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aeW.prototype={
B(d){var w=null,v=this.c.a,u=A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,10,w,w,B.F,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.k8:B.iG,s=A.m(16)
return A.x(A.a([new A.D(B.a2f,u,w),A.o(w,this.e,B.f,w,w,new A.n(t,w,A.K(v?B.em:B.bO,B.r,1),s,w,w,B.m),w,w,w,w,B.bl,w,w,1/0)],x.p),B.B,w,B.e,B.h,0,B.p)}}
C.blO.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.ek:B.c,r=A.m(12),q=A.K((t?B.em:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aS:B.aw,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.o(u,A.aN(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bB(u,B.eU,u,B.tp,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bu:B.bj,u,u,u,u,u,u,u,u,u,u,u,B.cF,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.W(v.f,B.bR,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.al,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ae,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a7,u,p,u,u,u,u),B.f,u,u,new A.n(s,u,q,r,u,u,B.m),u,u,u,u,u,u,u,u)}}
C.aeV.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.ek:B.c,s=A.m(12),r=A.K((u?B.em:B.bO).j(0.85),B.r,1),q=A.W(B.ty,u?B.bu:B.bj,v,v,v,v),p=A.l(v,v,u?B.aS:B.aw,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.ek:B.c
return A.o(v,new A.EE(A.a61(v,o,A.c(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bj,v,v,v,v,v,v,v,v,v,v,v,B.cF,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.n(t,v,r,s,v,v,B.m),v,v,v,v,B.l5,v,v,v)}}
C.blN.prototype={
B(d){var w=new C.dAE(this)
return A.A(A.a([w.$3(D.x4,"Male",B.QC),B.aa,w.$3(D.oP,"Female",B.Qo),B.aa,w.$3(D.zD,"Other",B.o2)],x.p),B.l,null,B.e,B.h,0,null,null)}}
C.aEy.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.k8:B.iG,r=A.m(14),q=A.K(t?B.em:B.bO,B.r,1),p=A.c(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aS:B.aw,v,v,v,v,v,v,v,v,13,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.o(v,A.A(A.a([A.E(A.x(A.a([p,A.c(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bj,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.B,v,B.e,B.h,0,B.p),1),new C.aKS(u,B.xk,w.f,v),B.bf,new C.aKS(u,B.ib,w.r,v)],o),B.l,v,B.e,B.h,0,v,v),B.f,v,v,new A.n(s,v,q,r,v,v,B.m),v,v,v,v,B.ez,v,v,v)}}
C.aKS.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bR.j(0.12)
else w=s.c.a?B.ek:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bR
else t=(s.c.a?B.bu:B.bj).j(0.4)
return A.aF(!1,B.a3,!0,v,A.aM(!1,u,!0,new A.a6(36,36,A.W(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.aeX.prototype={
bWC(d){switch(d.a){case 0:return B.bR
case 1:return B.bA
case 2:return B.cC}},
bWD(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b01(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AX(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.ek:B.c
u=A.m(12)
t=A.K((w?B.em:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.W(f,B.bR,p,p,p,18),B.ar],s))
q=A.c(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bj,p,p,p,p,p,p,p,p,9,p,p,B.F,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.at,A.c(o,p,p,p,p,p,p,A.l(p,p,w?B.aS:B.aw,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.B,p,B.e,B.h,0,B.p),1))
return A.o(p,A.A(r,B.B,p,B.e,B.h,0,p,p),B.f,p,p,new A.n(v,p,t,u,p,p,B.m),p,p,p,B.cy,B.zl,p,p,1/0)},
ag8(d,e){var w=null,v=this.e.a,u=A.c(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,10,w,w,B.F,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.k8:B.iG,s=A.m(16),r=A.K(v?B.em:B.bO,B.r,1)
return A.x(A.a([new A.D(B.a2f,u,w),A.o(w,A.x(e,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.n(t,w,r,s,w,w,B.m),w,w,w,w,B.bT,w,w,1/0)],x.p),B.B,w,B.e,B.h,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hNZ(r,q),o=q.c,n=t.bWC(o),m=A.bGD(q.f),l=t.e.a,k=l?B.ek:B.c,j=A.m(22),i=q.b,h=A.c(i,s,s,s,s,s,s,A.l(s,s,l?B.aS:B.aw,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.l7?"Shared family tree \xb7 view only":"Member profile"
r=A.c(r,s,s,s,s,s,s,A.l(s,s,l?B.bu:B.bj,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.ab(0,B.H,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.as(A.o(s,A.hk(u,m,m==null?A.W(B.pK,n,s,s,s,48):s,s,52),B.f,s,s,new A.n(s,s,w,s,v,s,B.a6),s,s,s,s,B.es,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.K(n.j(0.45),B.r,1)
v=A.as(A.o(s,A.c(t.bWD(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.n(w,s,u,v,s,s,B.m),s,s,s,s,B.lZ,s,s,s),s,s,s)
u=x.p
i=A.a([t.AX("Full name",i,B.mt)],u)
if(p>0)i.push(t.AX("Child order","#"+p,B.Qu))
r=A.a([h,B.at,r,B.aO,l,B.S,v,B.bx,t.ag8("Identity",i),B.af,t.ag8("Life details",A.a([t.AX("Birth date",q.w,D.aqM),t.AX("Birth place",q.x,B.a3F),t.AX("Date of death",q.y,D.asU),t.AX("Occupation",q.z,B.QS)],u)),B.af,t.ag8("Family links",A.a([t.AX("1. Parent",t.b01(q.d),B.I7),t.AX("2. Spouse",t.b01(q.e),B.In)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.ag8("Notes",A.a([t.AX("Notes",q,B.l9)],u))],u))
r.push(B.bx)
r.push(A.bI(B.LR,s,new C.dAO(d),A.bn(B.aV,s,s,s,s,s,B.cm,s,new A.ba(A.m(14),B.a1),s,s,s)))
return A.eE(s,k,new A.cP(B.mh,A.ca(A.x(r,B.am,s,B.e,B.M,0,B.p),B.t,s,B.y,s,s,B.wZ,s,s,B.ah),s),s,s,s,B.HK,s,B.d7,s,new A.ba(j,B.a1),s)}}
C.GN.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bj
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.v7,A.hh(A.aF(!1,B.a3,!0,A.m(8),A.aM(!1,A.m(8),!0,new A.a6(30,30,A.W(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u),u)}}
C.arT.prototype={
f1(){var w,v,u=this,t=x.N,s=A.S(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.ab().ag())
w=u.c
v=A.T(w).k("N<1,aa<p,@>>")
w=A.B(new A.N(w,new C.cgZ(),v),v.k("aj.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iZ(w,new C.ch_(),t,x.fO))
return s}}
C.arU.prototype={
S(){return new C.aG6(A.a([],x.bF))},
gd4(){return this.c}}
C.aG6.prototype={
Z(){this.a4()
this.Kw()},
Kw(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Kw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ch2(t.a.c),$async$Kw)
case 3:r=e
w=4
return A.b(C.Bu(t.a.c),$async$Kw)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rs(q,new C.e6m(t))
else s=!1
if(t.c==null){w=1
break}t.l(new C.e6n(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Kw,v)},
zf(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b2(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
Lm(d,e){return this.cMu(d,e)},
cMu(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Lm=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.l(new C.e6r(q,e))
t=3
w=6
return A.b(d.$0(),$async$Lm)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.l(new C.e6s(q))
$.eY.mK()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Lm,v)},
YU(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pH(r,s.c,s.e),$async$YU)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lm(new C.e6j(t),"Preparing download\u2026"),$async$YU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YU,v)},
YY(d){return this.bUu(d)},
bUu(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pH(r,s.c,s.e),$async$YY)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Lm(new C.e6k(t,d),"Preparing file\u2026"),$async$YY)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YY,v)},
ai9(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ai9=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xX.cq().N7(B.TG,B.va,!0),$async$ai9)
case 7:r=e
o=r
q=o==null?null:J.fn(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jO(o,0,null)
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
return A.i($async$ai9,v)},
ZA(d){return this.c3Z(d)},
c3Z(d){var w=0,v=A.j(x.H),u=this
var $async$ZA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Lm(new C.e6l(u,d),"Restoring family trees\u2026"),$async$ZA)
case 2:return A.h(null,v)}})
return A.i($async$ZA,v)},
Zz(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Zz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ai9(),$async$Zz)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.ZA(s),$async$Zz)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zz,v)},
a3J(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3J=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pH(r,s.c,s.e),$async$a3J)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lm(new C.e6q(t),"Creating QR code\u2026"),$async$a3J)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3J,v)},
a3k(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3k=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DQ()){t.zf("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a8(s,!1).cb(A.ea(new C.e6o(),!0,null,x.N)),$async$a3k)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.ZA(r),$async$a3k)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a3k,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.O(d).ax.a===B.I,n=o?B.Cp:B.hW,m=o?D.alY:B.aS,l=o?B.aM:B.bO,k=o?B.aS:B.aw,j=new C.dkb(n,m,l,k,o?B.bP:B.bj)
l=A.aH(p,p,p,p,A.W(B.eH,k,p,p,p,20),p,p,p,new C.e6u(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eS(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.c(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.djK(!0,B.jD,B.aH,B.aH,q.r?p:q.gcCQ(),j,s,"Show restore QR"),1),B.ar],u))}s=q.e
r=q.r?p:q.gcyW()
t.push(A.E(C.djK(!s,B.jE,B.b2,B.bk,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.h,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.djK(!1,B.hO,B.aV,B.bR,q.r?p:q.gbUn(),j,"Photos & books included","Download all trees"),1),B.ar],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.djK(!1,B.A8,B.au,B.aQ,q.r?p:q.gc3W(),j,s,"Upload backup file"),1))
l=A.a([new C.bi_(v,l,p),B.lk,new C.aeb(j,"QR restore",p),B.S,t,B.dc,new C.aeb(j,"Backup files",p),B.S,A.A(r,B.l,p,B.e,B.h,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.lk,new C.aeb(j,"One tree",p),B.S],u)
B.d.u(v,J.b8(q.d,new C.e6v(q,j),x.l))
B.d.u(l,v)}l=A.a([A.cn(l,p,p,B.a27,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.K(B.aV.j(0.35),B.r,1)
s=A.a([new A.ab(0,B.H,B.v.j(o?0.3:0.1),B.dp,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.o(p,A.A(A.a([G.aW2,B.bb,A.E(A.c(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.h,0,p,p),B.f,p,p,new A.n(m,p,t,v,s,p,B.m),p,p,p,p,B.D6,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c5(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.dkb.prototype={}
C.bi_.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ab(0,B.H,B.aV.j(0.32),B.kN,28)],x.V)
t=A.ao(p,A.W(B.vv,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.o(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ae,A.A(A.a([A.o(p,D.c5S,B.f,p,p,new A.n(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.m),p,56,p,p,p,p,p,56),B.pg,A.E(A.x(A.a([D.fXx,B.P,A.c(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.B,p,B.e,B.h,0,B.p),1)],q),B.B,p,B.e,B.h,0,p,p),p)],q),p),B.f,p,p,new A.n(p,p,p,v,u,D.ce8,B.m),p,p,p,p,p,p,p,p)}}
C.aeb.prototype={
B(d){var w=null
return A.A(A.a([A.o(w,w,B.f,w,w,new A.n(B.aV,w,w,A.m(2),w,w,B.m),w,14,w,w,w,w,w,3),B.aa,A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.F,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)}}
C.bhY.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.ab(0,B.H,B.aH.j(0.1),B.cP,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aF(!1,B.a3,!0,q,A.aM(!1,o,!0,A.eG(A.d3(new A.D(B.a1L,A.x(A.a([A.o(q,A.W(r.d,t,q,q,q,22),B.f,q,q,new A.n(v,q,s,u,q,q,B.m),q,q,q,q,B.ts,q,q,q),B.af,A.c(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bC,A.c(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cF,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.B,q,B.e,B.h,0,B.p),q),w),q,new A.n(m.b,q,k,n,l,q,B.m),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bi2.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aV.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aF(!1,B.a3,!0,v,A.aM(!1,u,!0,A.eG(new A.D(B.eX,A.A(A.a([A.o(v,D.c51,B.f,v,v,new A.n(q,v,A.K(B.aV.j(0.35),B.r,1),p,v,v,B.m),v,v,v,v,B.ts,v,v,v),B.bb,A.E(A.x(A.a([A.c(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.B,v,B.e,B.h,0,B.p),1),A.W(B.hO,o,v,v,v,20)],n),B.l,v,B.e,B.h,0,v,v),v),v,new A.n(s.b,v,r,t,v,v,B.m),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a13.prototype={
S(){return new C.aG5()},
gd4(){return this.c}}
C.aG5.prototype={
Z(){this.a4()
this.ab_()},
ab_(){var w=0,v=A.j(x.H),u=this,t
var $async$ab_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b54(u.a.c,B.EX),$async$ab_)
case 2:t=e
if(u.c!=null)u.l(new C.e6e(u,t))
return A.h(null,v)}})
return A.i($async$ab_,v)},
ajB(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ajB=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.l(new C.e6f(q))
t=4
p=A.hyP(q.a.d,B.EX)
if(p==null){n=A.bc("Could not read this QR code.")
throw A.Y(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.auc(n.e,m,l,B.EX,p,n.f),$async$ajB)
case 7:if(q.c==null){r=[1]
w=5
break}q.l(new C.e6g(q))
q.c.L(x.q).f.U(D.fy_)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ac(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.L(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c(B.a.el(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.l(new C.e6h(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ajB,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.O(d).ax.a===B.I,o=p?B.nN:B.qI,n=p?B.iR:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eS(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.hd9,q,q,q,1,q,!0)
w=A.m(24)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.qk(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.c(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.o(q,A.x(A.a([B.P,u,B.bx,t,B.P,A.c("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.b9,B.h,0,B.p),B.f,q,q,new A.n(n,q,v,w,q,q,B.m),q,q,q,q,B.ae,q,q,1/0),1)
v=r.a.e
v=A.c("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ab:B.bz,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcyE()
if(u)u=B.Lh
else u=A.W(r.e===!0?B.hn:B.aqL,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a6(1/0,q,A.en(u,q,A.c(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cc,q,q,q),t,A.dh(q,q,q,q,q,q,q,q,q,B.aV,q,B.hr,q,q,q,new A.av(B.aV.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hx,A.c("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aF:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.S)
w.push(new A.a6(1/0,q,A.bI(B.Bx,q,new C.e6i(d),A.bn(B.aV,q,q,q,q,B.hr,q,q,q,q,q,q)),q))
return A.c5(m,o,new A.D(B.ae,A.x(w,B.l,q,B.e,B.h,0,B.p),q),q,!1,!1,q,q)}}
C.a14.prototype={
S(){return new C.bnj(A.A2(B.z9,B.ot,B.vC))}}
C.bnj.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return A.c5(A.eS(w,w,w,!0,!0,B.v,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h4P,w,w,w,1,w,!0),B.v,A.A1(this.d,B.bZ,new C.e6w(this,d)),w,!1,!1,w,w)}}
C.b0V.prototype={
B(d){var w=null
return A.c(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.T8,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.m_.prototype={}
C.a7T.prototype={
S(){return new C.bmY(null,null)}}
C.bmY.prototype={
Z(){var w=this,v=null
w.a4()
w.d=A.bp(v,B.tk,v,1,v,w)
w.e=A.bp(v,B.nR,v,1,v,w)
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
this.bAp()},
B(d){var w,v,u=this,t=B.d.dz(D.a7K,new C.dSq(u),new C.dSr())
u.a.toString
w=u.d
w===$&&A.d()
v=u.e
v===$&&A.d()
return A.cF_(A.c7(new A.hi(A.a([w,v],x.dS)),new C.dSs(u,t),null),!0)}}
C.bmX.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b4T(d,e)
break
case"house":p.mp(d,e,D.dnw)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdj()
$.R()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.O(new A.r(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mv(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.BL(d,e,12)
p.yR(d,e,B.lt,5,14)
break
case"grocery":p.cnl(d,e)
break
case"calculator":p.cn2(d,e)
break
case"lumber":p.cnt(d,e)
break
case"kitchen":p.cno(d,e)
break
case"landscape":p.mp(d,e,D.do6)
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
w.r=B.eq.j(0.85).gp(0)
d.af(s,w)
p.BL(d,e,8)
p.yR(d,e,B.iH,4,18)
break
case"plumbing":p.cnD(d,e)
break
case"electrical":p.mp(d,e,D.dAx)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.R()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aE(new A.a3(0,0,0+e.a,0+e.b),u)
p.mv(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mv(d,e,B.oG.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.BL(d,e,10)
break
case"store":p.cnN(d,e)
break
case"paint_remodel":p.cny(d,e)
break
case"roofing":p.cnF(d,e)
break
case"warehouse":p.cnU(d,e)
break
case"vehicles":p.cnS(d,e)
break
case"farm":p.cnf(d,e)
break
case"restaurant":p.cnE(d,e)
break
case"tools":p.cnQ(d,e)
break
case"wallet":p.cnT(d,e)
break
case"concrete":p.cn8(d,e)
break
case"blueprint":p.cn0(d,e)
break
default:p.b4T(d,e)}},
mp(d,e,f){var w,v=new A.a3(0,0,0+e.a,0+e.b)
$.R()
w=A.L()
w.san(new A.a7(B.ay,B.aC,B.x,f,null,null).aA(0,v))
d.aE(v,w)},
mv(d,e,f,g,h){var w,v,u,t=new A.r(e.a/2,e.b/2),s=e.gdj()/2-h
$.R()
w=A.L()
w.b=B.ac
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cQ(A.bX(t,s),u,u+0.1439896632895322-u,!1,w)}},
yR(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdj()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.R()
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.O(new A.r(q+t*o,p+s*o),3.5,r)}},
BL(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.i.F(t*0.17,0.9)
q=B.i.F(t*0.23,0.85)
$.R()
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.O(new A.r(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b4T(d,e){var w,v=this
v.mp(d,e,D.dyI)
w=v.c
v.mv(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mv(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bSk(d,e,B.hZ,w)
v.yR(d,e,B.c.j(0.7),6,8)},
bSk(d,e,f,g){var w,v,u,t,s,r
$.R()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aE(new A.a3(16,r,t,r+3),w)}},
cnl(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mp(d,e,D.cA9)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.ap(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.R()
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=D.dlw[B.o.F(t,4)].j(0.85).gp(0)
d.O(new A.r(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mv(d,e,B.c.j(0.35),w,16)
l.yR(d,e,B.iH,5,12)},
cn2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mp(d,e,D.cAh)
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
p=A.fu(h,B.cw,h,h,h,h,B.a7,B.bW,h,B.dG,B.bX)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dq1[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb2(0,new A.et(r,h,h,B.cO,h,h,h,h,h,h,new A.F(!0,q,h,h,h,h,14+m*4,B.F,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e6()
p.a3(d,new A.r(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ap(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cAj[o]
l=B.kW.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb2(0,new A.et(m,h,h,B.cO,h,h,h,h,h,h,new A.F(!0,l,h,h,h,h,12+k*3,B.F,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e6()
p.a3(d,new A.r(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ap(o,3)*0.38)+Math.sin(n)*6))}i.mv(d,e,B.c.j(0.35),w*1.5,14)
i.mv(d,e,B.eE.j(0.55),-v*3.141592653589793*2,8)
i.mv(d,e,B.oC.j(0.4),r*2.8,22)
i.yR(d,e,B.py,8,10)
i.BL(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.i.F(w+o*0.22,0.9)
$.R()
v=new A.ar(B.T,B.Q,B.W,B.X,B.U)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.r(12,j),new A.r(t,j),v)}},
cnt(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,H.aCE)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bv(new A.a3(20,r,u,r+10),B.hq)
$.R()
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=A.ap(B.h8,B.ow,(s+1)/2).gp(0)
d.ar(q,p)}o.mv(d,e,B.h8.j(0.35),w,15)
o.BL(d,e,8)},
cno(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mp(d,e,D.dm5)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.i.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.i.F(s*0.13,0.7)
$.R()
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.O(new A.r(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mv(d,e,B.bM.j(0.4),-w*3.141592653589793*2.2,11)
l.yR(d,e,B.qu,4,14)},
cnD(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mp(d,e,D.d94)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.i.F(s,0.12)
$.R()
o=new A.ar(B.T,B.Q,B.W,B.X,B.U)
o.b=B.ac
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.O(new A.r(w,u),q*(0.12+r*0.14+p),o)}n.yR(d,e,B.pC,6,12)
n.mv(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cnN(d,e){var w,v,u,t,s,r,q,p=this
p.mp(d,e,D.cO9)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bv(new A.a3(r,14,r+u,22),B.jG)
$.R()
q=new A.ar(B.T,B.Q,B.W,B.X,B.U)
q.r=A.ap(B.fw,B.bM,(s+1)/2).gp(0)
d.ar(r,q)}p.mv(d,e,B.c.j(0.3),w,16)
p.BL(d,e,8)
p.yR(d,e,B.wD,5,13)},
cny(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.dg4)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.i.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bv(new A.a3(r,q,r+8,q+(18+s*22)),B.iy)
$.R()
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.r=[B.iE,B.dC,B.bM,B.eC][t].j(0.85).gp(0)
d.ar(q,r)}this.mv(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cnF(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.dd6)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.i.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.R()
q=new A.ar(B.T,B.Q,B.W,B.X,B.U)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.r(u*(0.1+r),s),new A.r(u*(0.18+r),s+10),q)}this.yR(d,e,B.cB,7,11)},
cnU(d,e){var w,v,u,t,s,r,q,p
this.mp(d,e,D.cR_)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bv(new A.a3(q,p,q+(t-s*8),p+16),B.hq)
$.R()
q=new A.ar(B.T,B.Q,B.W,B.X,B.U)
q.r=A.ap(B.cB,B.aS,(Math.sin(r)+1)/2).gp(0)
d.ar(p,q)}this.mv(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cnS(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.dF5)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.i.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bv(new A.a3(s,r,s+28,r+8),B.hq)
$.R()
q=new A.ar(B.T,B.Q,B.W,B.X,B.U)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.ar(r,q)}this.BL(d,e,6)},
cnf(d,e){var w,v,u,t,s,r,q,p
this.mp(d,e,D.dku)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.R()
s=A.L()
s.r=B.oG.j(0.75).gp(0)
d.O(new A.r(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=B.hX.j(0.85).gp(0)
p.c=3
d.ah(new A.r(q,v),new A.r(q+s*6,t),p)}this.mv(d,e,B.oG.j(0.35),w,14)},
cnE(d,e){var w,v,u,t,s,r,q=this
q.mp(d,e,D.dnj)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bY(new A.r(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.R()
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.r=B.c.j(0.22).gp(0)
d.c1(s,r)}q.yR(d,e,B.qu,5,16)
q.BL(d,e,7)},
cnQ(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,D.dCi)
w=o.c
v=w*3.141592653589793
o.mv(d,e,B.ow.j(0.55),v*3,10)
o.mv(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.R()
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=B.ow.j(0.8).gp(0)
d.O(new A.r(v+r*34,u+q*22),4,p)}},
cnT(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,D.dFR)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bv(new A.a3(q,p,q+36,p+22),B.jG)
$.R()
q=new A.ar(B.T,B.Q,B.W,B.X,B.U)
q.r=A.ap(B.iH,B.oG,r).gp(0)
d.ar(p,q)}o.BL(d,e,9)
o.mv(d,e,B.c.j(0.4),w*2.2,12)},
cn8(d,e){var w,v,u,t,s,r,q,p
this.mp(d,e,D.dtb)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bX(new A.r(v,u),34)
$.R()
s=A.L()
s.b=B.ac
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cQ(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=B.bO.j(0.85).gp(0)
d.O(new A.r(v+t*34,u+s*34),3,p)}},
cn0(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.dot)
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
u.r=B.dC.j(0.45).gp(0)
d.aE(new A.a3(0,q,0+v,q+6),u)
this.mv(d,e,B.lt.j(0.45),-r*3.141592653589793*2,11)},
aD(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.auY.prototype={
a0Y(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0Y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aT4(),$async$a0Y)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.aab(s),$async$a0Y)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0Y,v)},
aia(d){return this.cqc(d)},
cqc(d){var w=0,v=A.j(x.H),u=this,t
var $async$aia=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iA5(d),$async$aia)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$aia,v)},
B(d){var w,v,u=null,t=A.O(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.k8:B.iG
w=x.p
v=A.a([C.aTr(!0,B.rN,1/0,B.r6,u,s,1/0)],w)
if(!r)v.push(new A.bP(new A.n(u,u,u,u,u,new A.a7(B.aX,B.b1,B.x,A.a([B.L,B.v.j(0.35)],x.O),u,u),B.m),B.bm,new A.bK(B.aX,u,u,new A.D(B.tm,A.c("Pick a theme or your own photo",u,u,u,u,u,u,A.l(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,B.aDC,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.da(D.bZf,u,D.fTB,new C.cqK(this,d),A.bn(B.aV,u,u,u,B.c,u,B.jU,u,u,u,u,B.cl)),1),B.aa,A.E(A.en(D.c7b,u,D.h80,this.gch_(),A.dh(u,u,B.v.j(0.35),u,u,u,u,u,u,B.c,u,u,B.jU,u,u,D.b7N,u,u,u,B.cl)),1)],w),B.l,u,B.e,B.h,0,u,u),u,u,8,8,u,u))
return new A.fJ(1.7777777777777777,A.aF(!1,B.a3,!0,B.rN,new A.an(B.a0,u,B.b4,B.t,v,u),B.aq,t,0,u,u,u,u,u,B.ai),u)}}
C.aOi.prototype={
aX(){this.b7()
this.b5()
this.dK()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdD())
w.ba$=null
w.a2()}}
C.aWo.prototype={}
C.aWn.prototype={}
C.aUp.prototype={}
C.a_H.prototype={
S(){return new C.aBf()}}
C.aBf.prototype={
Z(){var w,v,u=this
u.a4()
u.a.toString
w=new A.bd("",B.b6,B.aP)
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.at(w,v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ax()
w.R$=0
this.a2()},
L9(){var w,v,u=this,t=u.d
t===$&&A.d()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.U(D.fyv)
return}t=u.c
t.toString
v=u.e
A.a8(t,!1).N(new C.aWo(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.O(d).ax.a===B.I,l=m?B.ek:B.c,k=A.m(20),j=A.o(n,D.c6R,B.f,n,n,new A.n(B.aV.j(0.15),n,n,A.m(12),n,n,B.m),n,44,n,n,n,n,n,44),i=A.c("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aS:B.aw,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bC,A.c("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bj,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.B,n,B.e,B.h,0,B.p),1)
j=A.A(A.a([j,B.bb,i,A.aH(n,n,n,n,A.W(B.cA,m?B.bu:B.bj,n,n,n,n),n,n,n,new C.dbf(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.h,0,n,n)
i=A.c("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bj,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.c("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bj,n,n,n,n,n,n,n,n,11,n,n,B.cF,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hz4(new C.dbg(o),o.e)
u=o.d
u===$&&A.d()
t=A.l(n,n,m?B.aS:B.aw,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.k8:B.iG
r=A.m(12)
q=A.m(12)
p=m?B.em:B.bO
t=A.aN(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bB(n,new A.b6(4,r,B.dw),n,n,n,n,n,n,!0,new A.b6(4,q,new A.av(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.al,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.dbh(o),n,!1,n,n,!1,n,!0,n,B.ae,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a7,n,B.Lq,n,n,n,n)
u=m?B.aS:B.aw
m=m?B.em:B.bO
return A.eE(n,l,new A.cP(B.mh,A.ca(A.x(A.a([j,B.aO,i,B.at,w,B.P,v,B.aO,t,B.bx,A.A(A.a([A.E(A.dV(B.dr,new C.dbi(d),A.dh(n,n,n,n,n,n,n,n,n,u,n,n,B.cm,n,new A.ba(A.m(12),B.a1),new A.av(m,1,B.r,-1),n,n,n,n)),1),B.ar,A.E(A.bI(D.h8h,n,o.ga44(),A.bn(B.aV,n,n,n,B.c,n,B.cm,n,new A.ba(A.m(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.h,0,n,n)],h),B.B,n,B.e,B.M,0,B.p),B.t,n,B.y,n,n,B.D8,n,n,B.ah),n),n,n,n,N.D9,n,B.d7,n,new A.ba(k,B.a1),n)}}
C.a_G.prototype={
S(){return new C.aBe()}}
C.aBe.prototype={
Z(){this.a4()
var w=$.ax()
this.d!==$&&A.aQ()
this.d=new A.at(B.ax,w)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ax()
w.R$=0
this.a2()},
L9(){var w,v=this.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.U(D.fw6)
return}v=this.c
v.toString
A.a8(v,!1).N(new C.aWn(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.O(d).ax.a===B.I,o=p?B.ek:B.c,n=A.m(20),m=A.o(q,D.c37,B.f,q,q,new A.n(B.bR.j(0.15),q,q,A.m(12),q,q,B.m),q,44,q,q,q,q,q,44),l=A.c("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bC,A.c("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bj,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.B,q,B.e,B.h,0,B.p),1)
m=A.A(A.a([m,B.bb,l,A.aH(q,q,q,q,A.W(B.cA,p?B.bu:B.bj,q,q,q,q),q,q,q,new C.dbb(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.h,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.m(12)
v=A.K(B.aV.j(0.25),B.r,1)
u=A.W(B.aqx,B.aV.j(0.9),q,q,q,18)
l=A.o(q,A.A(A.a([u,B.ar,A.E(A.c("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.h,0,q,q),B.f,q,q,new A.n(l,q,v,w,q,q,B.m),q,q,q,q,B.bG,q,q,1/0)
w=this.d
w===$&&A.d()
v=A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.k8:B.iG
t=A.m(12)
s=A.m(12)
r=p?B.em:B.bO
v=A.aN(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bB(q,new A.b6(4,t,B.dw),q,q,q,q,q,q,!0,new A.b6(4,s,new A.av(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.al,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.dbc(this),q,!1,q,q,!1,q,!0,q,B.ae,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a7,q,B.ll,q,q,q,q)
w=p?B.aS:B.aw
p=p?B.em:B.bO
return A.eE(q,o,new A.cP(B.mh,A.ca(A.x(A.a([m,B.aO,l,B.aA,v,B.bx,A.A(A.a([A.E(A.dV(B.dr,new C.dbd(d),A.dh(q,q,q,q,q,q,q,q,q,w,q,q,B.cm,q,new A.ba(A.m(12),B.a1),new A.av(p,1,B.r,-1),q,q,q,q)),1),B.ar,A.E(A.bI(D.hft,q,this.ga44(),A.bn(B.bR,q,q,q,B.c,q,B.cm,q,new A.ba(A.m(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.h,0,q,q)],k),B.B,q,B.e,B.M,0,B.p),B.t,q,B.y,q,q,B.D8,q,q,B.ah),q),q,q,q,N.D9,q,B.d7,q,new A.ba(n,B.a1),q)}}
C.a_b.prototype={
S(){return new C.azW()}}
C.azW.prototype={
Z(){var w,v=this
v.a4()
w=$.ax()
v.d!==$&&A.aQ()
v.d=new A.at(B.ax,w)
v.e!==$&&A.aQ()
v.e=new A.at(new A.bd("1",B.b6,B.aP),w)
v.f!==$&&A.aQ()
v.f=new A.at(B.ax,w)
v.r!==$&&A.aQ()
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
v.a2()},
gKr(){var w,v=this.e
v===$&&A.d()
w=A.cG(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
galm(){var w=this.f
w===$&&A.d()
w=A.cG(B.a.i(w.a.a))
return w==null?0:w},
gb7I(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.d()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aRL(d){var w,v=B.i.D(this.gKr()+d,0.25,999999),u=B.i.fM(v),t=this.e
t===$&&A.d()
if(v===u)u=B.o.v(B.i.M(v))
else{u=B.i.aa(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb2(0,u)
this.l(new C.cJ6())},
aAJ(d,e,f,g){var w=null,v=g!=null?A.W(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.k8:B.iG,s=A.m(14),r=A.m(14)
u=u?B.em:B.bO
return A.bB(w,new A.b6(4,s,B.dw),w,B.bG,w,w,w,w,!0,new A.b6(4,r,new A.av(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.m(14),B.afJ),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
ch0(d,e,f){return this.aAJ(d,e,f,null)},
L9(){var w,v,u,t,s=this,r=s.d
r===$&&A.d()
w=B.a.i(r.a.a)
if(s.galm()<=0){s.c.L(x.q).f.U(D.fAp)
return}r=s.c
r.toString
v=s.gKr()
u=s.galm()
t=s.gb7I()
A.a8(r,!1).N(new C.aUp(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.um(n),l=n?B.ek:B.c,k=A.m(24),j=x.O,i=A.a([B.aV.j(0.22),B.bR.j(0.14)],j),h=A.m(14)
i=A.o(o,D.bX9,B.f,o,o,new A.n(o,o,A.K(B.aV.j(0.35),B.r,1),h,o,new A.a7(B.a5,B.a9,B.x,i,o,o),B.m),o,48,o,o,o,o,o,48)
h=A.c("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bC,A.c("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,12,o,o,B.cF,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.h,0,B.p),1)
i=A.A(A.a([i,B.bb,h,A.aH(o,o,o,o,A.W(B.cA,n?B.bu:B.bj,o,o,o,o),o,o,o,new C.cJc(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.h,0,o,o)
h=p.d
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.aAJ(m,"Item name (optional)","Lumber, paint, labor\u2026",B.QA),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.Lq,o,o,o,o)
h=A.c("Units",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,12,o,o,B.F,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.k8:B.iG
t=A.m(14)
s=A.K(n?B.em:B.bO,B.r,1)
r=A.aH(o,o,o,o,A.W(B.xk,n?B.aS:B.aw,o,o,o,20),o,o,o,new C.cJd(p),o,o,o,o,o,B.cl)
q=p.e
q===$&&A.d()
q=A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c8K,B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,B.eg,o,o,o,1,o,o,!1,"\u2022",o,new C.cJe(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.o(o,A.A(A.a([r,new A.a6(52,o,q,o),A.aH(o,o,o,o,A.W(B.ib,n?B.aS:B.aw,o,o,o,20),o,o,o,new C.cJf(p),o,o,o,o,o,B.cl)],w),B.l,o,B.e,B.M,0,o,o),B.f,o,o,new A.n(u,o,s,t,o,o,B.m),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.d()
s=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.ar,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.aAJ(m,"Amount","0.00",B.hN),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,B.eg,o,o,o,1,o,o,!1,"\u2022",o,new C.cJg(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a7,o,B.ao,o,o,o,o),1)],w),B.B,o,B.e,B.h,0,o,o)
t=x.gv
u=A.B(new A.N(D.dgD,new C.cJh(p,m),t),t.k("aj.E"))
i=A.a([i,B.bx,v,B.aA,h,B.P,s,B.af,A.bZ(B.bI,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.S,A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.ch0(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cJi(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.ll,o,o,o,o)],w))}i.push(B.aO)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bR.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.c("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gKr()===B.i.fM(p.gKr())?B.i.M(p.gKr()):p.gKr()
s=p.gb7I()
r=A.Bw(p.galm())
i.push(A.o(o,A.A(A.a([A.E(A.x(A.a([u,B.at,A.c(A.v(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.h,0,B.p),1),C.bHt(p.gKr()*p.galm(),B.b5,!1,B.u)],w),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.n(o,o,v,h,o,new A.a7(B.a5,B.a9,B.x,j,o,o),B.m),o,o,o,o,B.jz,o,o,o))
i.push(B.bx)
j=A.m(14)
h=n?B.em:B.bO
h=A.dh(o,o,o,o,o,o,o,o,o,o,o,o,B.cm,o,new A.ba(j,B.a1),new A.av(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dV(A.c("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cJj(d),h),1),B.ar,A.E(A.da(D.au3,o,D.hbk,p.ga44(),A.bn(B.aV,o,o,0,B.c,o,B.cm,o,new A.ba(A.m(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.h,0,o,o))
return A.eE(o,l,new A.cP(B.MR,A.ca(A.x(i,B.am,o,B.e,B.M,0,B.p),B.t,o,B.y,o,o,Z.tq,o,o,B.ah),o),o,o,o,B.P9,o,B.d7,o,new A.ba(k,B.a1),o)}}
C.a2S.prototype={
S(){return new C.bzO()}}
C.bzO.prototype={
Z(){var w,v,u=this
u.a4()
w=u.a.e
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.at(new A.bd(w,B.b6,B.aP),v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ax()
w.R$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.O(d).ax.a===B.I,q=r?B.ek:B.c,p=A.m(20),o=t.a.c
o=A.c(o,s,s,s,s,s,s,A.l(s,s,r?B.aS:B.aw,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.d()
v=A.l(s,s,r?B.aS:B.aw,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.k8:B.iG
v=A.aN(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bB(s,new A.b6(4,A.m(12),B.dw),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fs_(t,d),s,!1,s,s,!1,s,!0,s,B.ae,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a7,s,B.ao,s,s,s,s)
u=A.E(A.dV(B.dr,new C.fs0(d),s),1)
r=A.bn(B.bR,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eE(s,q,new A.D(B.D8,A.x(A.a([o,B.aA,v,B.aO,A.A(A.a([u,B.ar,A.E(A.bI(A.c(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fs1(t,d),r),1)],w),B.l,s,B.e,B.h,0,s,s)],w),B.l,s,B.e,B.M,0,B.p),s),s,s,s,s,s,B.d7,s,new A.ba(p,B.a1),s)}}
C.adb.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.GB.prototype={
S(){return new C.bzM(null,null)}}
C.bzM.prototype={
Z(){var w,v=this
v.a4()
w=A.bp(null,D.bDU,null,1,null,v)
w.cK(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bCL()},
gbEm(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bR,B.b5],x.O)
case 2:return A.a([B.bv,B.aV,B.b5],x.O)
case 3:return A.a([B.aH,B.ce,B.jO],x.O)
case 4:return A.a([B.fW,B.bR,B.fx],x.O)
case 0:return A.a([B.aV,B.bR,B.b5],x.O)}},
B(d){var w=A.O(d),v=this.d
v===$&&A.d()
return new A.e7(A.c7(v,new C.frY(this,new C.um(w.ax.a===B.I)),null),null)}}
C.azP.prototype={
S(){return new C.bzN(null,null)}}
C.bzN.prototype={
Z(){var w,v=this
v.a4()
w=A.bp(null,B.nS,null,1,null,v)
w.cK(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bCM()},
B(d){var w=this.d
w===$&&A.d()
return A.c7(w,new C.frZ(this),null)}}
C.bzL.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bv(new A.a3(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aG($.R().r,B.aj,null,null,A.a([],x.v))
u.E(new A.jd(v))
w=A.L()
w.b=B.ac
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.ar(v,w)
w=A.L()
w.b=B.ac
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.zI(u)
t=A.a([],x.U)
w=new A.uW(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bj(A.jM(y.B));--r
q=new A.BY(w,r)
w.jP()
r=t[r].b
r===$&&A.d()
r=r.a.length()
p.aVn(d,q,r,o,0,0.2,4.2,0.92)
p.aVn(d,q,r,s,0.52,0.11,3.2,0.58)}},
aVn(d,e,f,g,h,i,j,k){var w,v,u,t=B.i.F(g+h,1)*f,s=A.hWt(e.a.a,e,t,t+f*i,!0),r=A.aii(s.gle().a.getBounds())
$.R()
w=A.L()
w.b=B.ac
w.c=j
w.d=B.bH
w.f=!0
v=this.f
u=k*this.e
w.san(new A.a7(B.a5,B.a9,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Jj,null).aA(0,r))
d.af(s,w)},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.aQr.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bC()}}
C.aQs.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bC()}}
C.um.prototype={}
C.auX.prototype={
S(){return new C.aHF()},
ge4(){return this.c}}
C.aHF.prototype={
Z(){var w=this
w.a4()
w.d=w.a.d
w.aj1()},
t(){var w=this.a.c,v=this.d
v===$&&A.d()
C.Ms(w,v)
this.a2()},
aj1(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aj1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bFS(t.c,t.d.a),$async$aj1)
case 2:s=e
if(s!=null&&u.c!=null)u.l(new C.f_x(u,s))
return A.h(null,v)}})
return A.i($async$aj1,v)},
Ri(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Ri=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.l(new C.f_o(u))
t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.Ms(t,s),$async$Ri)
case 2:if(u.c!=null)u.l(new C.f_p(u))
return A.h(null,v)}})
return A.i($async$Ri,v)},
RQ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$RQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.O(p)
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.f_v(t,new C.um(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$RQ)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.d()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.aab(q),$async$RQ)
case 6:case 5:t.l(new C.f_w(t,r))
w=7
return A.b(t.Ri(),$async$RQ)
case 7:case 1:return A.h(u,v)}})
return A.i($async$RQ,v)},
X0(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.izR(r),$async$X0)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.f_j(t,new C.rx(B.o.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Ri(),$async$X0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X0,v)},
cm9(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.d()
C.hNV(t,new C.f_n(u),w,v)},
acO(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.o(w,w,B.f,w,w,new A.n(w,w,new A.bE(new A.av(v,2.5,B.r,-1),B.a1,B.a1,new A.av(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b7z,w,w,B.m),w,22,w,w,w,w,w,22)},
abQ(d){return this.bQz(d)},
bQz(d){var w=0,v=A.j(x.H),u=this
var $async$abQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.l(new C.f_m(u,d))
w=2
return A.b(u.Ri(),$async$abQ)
case 2:return A.h(null,v)}})
return A.i($async$abQ,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.O(a2).ax.a===B.I,e=f?B.c6:B.hW,d=A.m(8),a0=A.W(K.a3m,f?B.bu:B.bj,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.D(B.HR,A.A(A.a([a0,B.bf,A.c("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bj,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.M,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.f_y(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.d()
d=d.c
if(d!=null&&B.a.X(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b4,B.t,A.a([A.bu(A.m(22),C.aTr(!0,A.m(22),1/0,B.r6,g,d,1/0),B.aq),A.ao(10,A.da(D.c1_,g,D.hdI,h.gb5D(),A.bn(B.v.j(0.45),g,g,g,B.c,g,B.hm,g,new A.ba(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ab(0,B.H,B.aV.j(f?0.5:0.38),B.eT,22),new A.ab(-4,B.H,B.bR.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ab(-2,B.H,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.o(g,A.o(g,A.bu(s,new A.an(B.a0,g,B.b4,B.t,A.a([C.aTr(!0,A.m(16),1/0,B.Q0,g,r.c,1/0),new A.bP(new A.n(g,g,g,g,g,new A.a7(B.aX,B.b1,B.x,A.a([B.c.j(0.06),B.L,B.v.j(0.22)],x.O),g,g),B.m),B.bm,g,g),A.ao(g,h.acO(!0),g,g,8,g,8,g),A.ao(g,A.cFK(h.acO(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cFK(h.acO(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cFK(h.acO(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.da(D.bXM,g,D.h6Z,h.gb5D(),A.bn(B.v.j(0.45),g,g,g,B.c,g,B.hm,g,new A.ba(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.n(g,g,t,u,w,g,B.m),g,g,g,g,g,g,g,g),B.f,g,g,new A.n(g,g,g,d,v,D.car,B.m),g,g,g,g,B.m0,g,g,g)
d=v}w=h.d
w=A.c(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.bix,B.oA,B.hw],u):A.a([B.b5,B.aV,B.bR],u)
t=x.V
s=A.a([new A.ab(0,B.H,B.aV.j(f?0.45:0.35),B.eT,24)],t)
r=A.m(22)
p=A.ao(g,A.W(B.jA,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.o(g,A.c(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.F,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.n(o,g,m,n,g,g,B.m),g,g,g,g,B.hl,g,g,g)],a1),B.l,g,B.e,B.h,0,g,g),B.aA,A.c("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.F,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.ak,C.bHt(h.d.gxO(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.P,A.c("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cF,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.B,g,B.e,B.h,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.K(B.hj.j(0.75),B.r,1.6)
t=A.a([new A.ab(0,B.H,B.aH.j(0.28),B.cP,14)],t)
j=B.aH.j(0.22)
i=A.m(10)
u=A.o(g,A.bu(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bIR,A.A(A.a([o,B.ar,A.aF(!1,B.a3,!0,g,A.aM(!1,n,!0,A.eG(new A.D(L.wX,A.x(A.a([A.o(g,D.atD,B.f,g,g,new A.n(j,g,A.K(B.aH.j(0.5),B.r,1),i,g,g,B.m),g,g,g,g,B.cr,g,g,g),B.fN,D.fWw],a1),B.l,g,B.e,B.M,0,B.p),g),g,new A.n(l,g,k,m,t,g,B.m),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcm8(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.l,g,B.e,B.h,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.n(g,g,g,v,s,new A.a7(B.ay,B.aC,B.x,u,g,g),B.m),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fJ(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bx,A.A(A.a([A.c("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,16,g,g,B.F,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.aY,A.da(B.a5e,g,D.fUh,h.gbER(),A.bn(B.aV,g,g,g,B.c,g,B.hy,g,new A.ba(A.m(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.h,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.ek:B.c
v=A.m(14)
u=A.K(f?B.em:B.bO,B.r,1)
t=A.W(B.a3I,f?B.bu:B.bj,g,g,g,48)
s=A.c("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.o(g,A.x(A.a([t,B.S,s,B.ak,A.c("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bj,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.h,0,B.p),B.f,g,g,new A.n(w,g,u,v,g,g,B.m),g,g,g,g,B.r1,g,g,1/0))}else B.d.u(d,new A.N(w,new C.f_z(h,new C.um(f)),A.T(w).k("N<1,w>")))
if(h.e)d.push(new A.D(B.zf,A.as(A.n5(g,f?B.bu:B.bj,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c5(g,e,A.bm(!0,A.x(A.a([new A.D(B.D0,a0,g),A.E(A.ca(A.x(d,B.B,g,B.e,B.h,0,B.p),B.t,g,B.y,g,g,B.zs,g,g,B.ah),1)],a1),B.B,g,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bIB(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.ek:B.c,p=A.m(16),o=A.a([new A.ab(0,B.H,B.v.j(r?0.35:0.08),B.cP,12)],x.V),n=A.m(16),m=A.o(u,u,B.f,u,u,D.baj,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.m(12)
l=A.o(u,A.W(s?B.is:B.h_,B.b5,u,u,u,20),B.f,u,u,new A.n(l,u,u,k,u,u,B.m),u,40,u,u,u,u,u,40)
if(s)t=B.bL
else{k=x.p
t=A.a([A.c(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aS:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.F,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd2b()
v=A.Bw(d.d)
B.d.u(t,A.a([B.at,A.c(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bu:B.bj,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.B,u,B.b9,B.M,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bR.j(0.1)],x.O)
w=A.m(12)
k=A.o(u,C.bHt(d.c*d.d,B.b5,!1,B.u),B.f,u,u,new A.n(u,u,u,w,u,new A.a7(B.a5,B.a9,B.x,k,u,u),B.m),u,u,u,u,B.hm,u,u,u)
w=x.p
return A.o(u,A.bu(n,new A.F2(A.A(A.a([m,A.E(new A.D(B.anq,A.A(A.a([l,B.bb,t,B.aa,k,A.aH(u,u,u,u,A.W(B.cA,(r?B.bu:B.bj).j(0.75),u,u,u,20),u,u,u,new C.f_k(this,d),u,u,u,u,u,B.cl)],w),B.l,u,B.e,B.h,0,u,u),u),1)],w),B.am,u,B.e,B.h,0,u,u),u),B.aq),B.f,u,D.b99,new A.n(q,u,u,p,o,u,B.m),u,u,u,B.d4,u,u,u,u)}}
C.afh.prototype={
Fb(d){return this.bRX(d)},
bRX(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Fb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pH(d,o,!1),$async$Fb)
case 3:if(!f||d.e==null){w=1
break}A.a8(d,!1).N(null)
w=4
return A.b(A.bM(Y.CV,null,x.H),$async$Fb)
case 4:s=t.d
w=5
return A.b(C.h1F(!0,o,s),$async$Fb)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Hw(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$Fb)
case 6:p=f
w=7
return A.b(A.pG(o,!1),$async$Fb)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c(p,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Fb,v)},
a1_(d){return this.cCR(d)},
cCR(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a1_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pH(d,s,!1),$async$a1_)
case 3:if(!f||d.e==null){w=1
break}A.a8(d,!1).N(null)
A.hI(d,new C.auR(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pG(s,!1),$async$a1_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1_,v)},
Rj(d){return this.cyQ(d)},
cyQ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Rj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a8(d,!1).N(null)
w=3
return A.b(A.hI(d,D.aNq,!0,"NgmyWorksheetProjectScan",x.N),$async$Rj)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bHu(s),$async$Rj)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.U(D.fzw)
w=1
break}q=C.hou(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dM(p,x.H),$async$Rj)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Rj,v)},
a10(d){return this.cLj(d)},
cLj(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a10=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a8(d,!1).N(null)
w=3
return A.b(C.bGY(),$async$a10)
case 3:s=f
if(s==null){w=1
break}r=C.hou(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dM(q,x.H),$async$a10)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a10,v)},
B(d){var w=this,v=null,u=A.O(d).ax.a===B.I,t=new C.um(u),s=w.d.d.length,r=u?B.ek:B.c,q=A.m(28),p=A.a([new A.ab(0,B.H,B.v.j(u?0.35:0.08),B.kN,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wW,A.o(v,A.x(A.a([w.cBq(d,t,s),new A.D(D.bIe,A.x(A.a([w.b8D(t,"QR restore"),B.S,A.A(A.a([w.b3C(t,!0,B.jD,B.aH,B.aH,new C.f_B(w,d),"Show to scan","QR code"),B.ar,w.aAK(t,B.jE,B.b2,B.bk,new C.f_C(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.h,0,v,v),B.dc,w.b8D(t,"Backup files"),B.S,A.A(A.a([w.aAK(t,B.hO,B.aV,B.bR,new C.f_D(w,d),"Full copy","Backup file"),B.ar,w.aAK(t,B.A8,B.au,B.aQ,new C.f_E(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.h,0,v,v)],o),B.B,v,B.e,B.h,0,B.p),v)],o),B.l,v,B.e,B.M,0,B.p),B.aq,v,v,new A.n(r,v,v,q,p,v,B.m),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cBq(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.fl,B.cV,B.h6],k):A.a([B.b5,B.aV,B.bR],k)
w=A.ao(l,A.W(B.vv,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.o(l,l,B.f,l,l,new A.n(B.c.j(0.35),l,l,A.m(4),l,l,B.m),l,4,l,B.kH,l,l,l,36),l,l,l)
u=A.m(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ab(0,B.H,B.v.j(0.2),B.cP,12)],x.V)
r=this.d
s=A.o(l,C.aTr(!0,A.m(13),64,D.bSX,l,r.c,64),B.aq,l,l,new A.n(l,l,t,u,s,l,B.m),l,64,l,l,l,l,l,64)
u=A.c("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.F,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.c(r.b,l,2,B.a2,l,l,l,E.ad4,l,l,l)
r=C.bHt(r.gxO(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.o(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bIC,A.x(A.a([v,A.A(A.a([s,B.ev,A.E(A.x(A.a([u,B.at,t,B.P,A.A(A.a([r,B.aa,A.o(l,A.c(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.n(q,l,o,p,l,l,B.m),l,l,l,l,B.fD,l,l,l)],m),B.l,l,B.e,B.h,0,l,l)],m),B.B,l,B.e,B.h,0,B.p),1),A.aH(l,l,l,l,A.W(B.cA,B.c.j(0.85),l,l,l,l),l,l,l,new C.f_A(d),l,l,l,A.na(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,B.aVR,l,l,l,l),l,l)],m),B.B,l,B.e,B.h,0,l,l)],m),B.l,l,B.e,B.h,0,B.p),l)],m),l),B.f,l,l,new A.n(l,l,l,l,l,new A.a7(B.ay,B.aC,B.x,k,l,l),B.m),l,l,l,l,l,l,l,1/0)},
b8D(d,e){var w=null,v=A.o(w,w,B.f,w,w,new A.n(B.aV,w,w,A.m(2),w,w,B.m),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.aa,A.c(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bu:B.bj,w,w,w,w,w,w,w,w,11,w,w,B.F,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
b3C(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.alY:B.aS
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.em:B.bO
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.ab(0,B.H,B.aH.j(0.12),B.cP,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.K(h.j(0.35),B.r,1)
t=A.o(r,A.W(f,h,r,r,r,22),B.f,r,r,new A.n(u,r,s,t,r,r,B.m),r,r,r,r,B.ts,r,r,r)
u=A.c(k,r,r,r,r,r,r,A.l(r,r,o?B.aS:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aF(!1,B.a3,!0,r,A.aM(!1,q,!0,A.eG(new A.D(B.a1L,A.x(A.a([t,B.af,u,B.bC,A.c(j,r,r,r,r,r,r,A.l(r,r,o?B.bu:B.bj,r,r,r,r,r,r,r,r,11,r,r,B.cF,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.h,0,B.p),r),r,new A.n(n,r,w,p,v,r,B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
aAK(d,e,f,g,h,i,j){return this.b3C(d,!1,e,f,g,h,i,j)}}
C.auR.prototype={
S(){return new C.boG()}}
C.boG.prototype={
Z(){this.a4()
this.agV()},
agV(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$agV=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bHv(p.c,p.d),$async$agV)
case 7:q=e
if(r.c==null){w=1
break}r.l(new C.f_e(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.l(new C.f_f(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agV,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.O(d).ax.a===B.I,f=g?B.Cp:B.hW,e=i.d
e=e==null?h:B.a.X(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.W(B.eH,g?B.ab:B.an,h,h,h,18),h,h,h,new C.f_g(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.c("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.ub],u),B.l,h,B.e,B.h,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.fl,B.cV,B.h6],s):A.a([B.b5,B.aV,B.bR],s)
r=x.V
q=A.a([new A.ab(0,B.H,B.aV.j(g?0.4:0.3),B.eT,24)],r)
p=i.a.d
o=A.c(p.b,h,h,h,h,h,h,B.dq,B.K,h,h)
p=C.bHt(p.gxO(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.o(h,A.x(A.a([o,B.ak,A.A(A.a([p,B.aa,A.o(h,A.c(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.F,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.n(n,h,h,m,h,h,B.m),h,h,h,h,B.fD,h,h,h)],u),B.l,h,B.b9,B.h,0,h,h)],u),B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.n(h,h,h,t,q,new A.a7(B.ay,B.aC,B.x,s,h,h),B.m),h,h,h,h,B.a26,h,h,1/0)
t=g?D.buc:B.c
q=A.m(24)
p=A.K(w?B.aH.j(0.4):B.aV.j(0.3),B.r,1)
r=A.a([new A.ab(0,B.H,B.v.j(g?0.25:0.06),B.dp,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.c(n,h,h,h,h,h,h,B.Wx,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eCW)
else{m=A.m(20)
l=A.K(B.bn,B.r,1)
o.push(A.o(h,A.qk(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.n(B.c,h,l,m,h,h,B.m),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aO)
n=w?B.aH:B.aV
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.K((w?B.aH:B.aV).j(0.35),B.r,1)
k=w?B.Qi:B.QR
k=A.W(k,w?B.aH:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.o(h,A.A(A.a([k,B.ar,A.E(A.c(j,h,h,h,h,h,h,A.l(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.n(n,h,l,m,h,h,B.m),h,h,h,h,B.hy,h,h,h))
return A.c5(h,f,A.bm(!0,A.x(A.a([new A.D(B.Pm,e,h),A.E(A.ca(A.x(A.a([s,B.aO,A.o(h,A.x(o,B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.n(t,h,p,q,r,h,B.m),h,h,h,h,B.v6,h,h,1/0)],u),B.l,h,B.e,B.h,0,B.p),B.t,h,B.y,h,h,B.aoC,h,h,B.ah),1)],u),B.l,h,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.auW.prototype={
S(){return new C.aHE(A.A2(B.OF,B.ot,B.vC))}}
C.aHE.prototype={
t(){this.d.t()
this.a2()},
aPJ(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j7(w,d)},
chU(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.ixR(t)
if(s!=null){this.aPJ(s)
return}r=C.hDG(t)
if(r!=null)q=A.cW(r,p,0)
else q=!1
if(q){this.aPJ(B.a.i(B.a.aY(r,B.a.cd(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eS(A.a([A.aH(t,t,t,t,A.W(u.f?B.vj:B.Qq,t,t,t,t,t),t,t,t,new C.f_i(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Cp,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.h6R,t,t,t,1,t,!0),q=A.A1(u.d,B.bZ,u.gchT()),p=A.m(28)
p=A.as(A.o(t,t,B.f,t,t,new A.n(t,t,A.K(B.aV,B.r,3),p,A.a([new A.ab(2,B.H,B.aV.j(0.35),B.J,24)],x.V),t,B.m),t,260,t,t,t,t,t,260),t,t,t)
w=B.v.j(0.72)
v=A.m(16)
return A.c5(r,B.v,new A.an(B.a0,t,B.b4,B.t,A.a([q,p,A.ao(32,A.o(t,D.h5C,B.f,t,t,new A.n(w,t,A.K(B.aV.j(0.45),B.r,1),v,t,t,B.m),t,t,t,t,B.jz,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aMD.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.Ph.prototype={
S(){return new C.aHG(D.af2,A.a([],x.D))},
bv(){return this.r.$0()},
ge4(){return this.c}}
C.aHG.prototype={
gcJ4(){return J.bIE(this.e,0,new C.f00())},
Z(){this.a4()
$.aU.bZ$.push(this)
this.wt()},
t(){$.aU.hZ(this)
this.a2()},
jo(d){if(d===B.h5)this.wt()},
wt(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wt=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DP(q.a.c).dc(0,B.ke),$async$wt)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.l(new C.f_X(q,p))
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
if(q.c!=null&&q.f)q.l(new C.f_Y(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wt,v)},
II(d){return this.bOF(d)},
bOE(){return this.II(null)},
bOF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$II=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.izT(l,d),$async$II)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
r=s.a
q=s.b
p=new C.lJ(l,r,q,D.dtr,new A.V(Date.now(),0,!1))
w=4
return A.b(C.Ms(t.a.c,p),$async$II)
case 4:o=f
w=5
return A.b(t.wt(),$async$II)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.U(D.fwA)
w=1
break}n=J.aT(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gP(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.U(D.fyp)
else n.L(q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.Ff(m)
case 1:return A.h(u,v)}})
return A.i($async$II,v)},
Ff(d){return this.clV(d)},
clV(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Ff=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hI(s,new C.auX(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$Ff)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Ms(u.a.c,t),$async$Ff)
case 5:case 4:w=6
return A.b(u.wt(),$async$Ff)
case 6:return A.h(null,v)}})
return A.i($async$Ff,v)},
we(d){return this.c40(d)},
c40(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$we=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bGY(),$async$we)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hI(r,D.aNq,!0,"NgmyWorksheetProjectScan",x.N),$async$we)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bHu(q),$async$we)
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
r.U(A.b2(null,null,null,null,null,B.t,null,A.c(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hou(s)
w=15
return A.b(C.Ms(t.a.c,p),$async$we)
case 15:o=f
w=16
return A.b(t.wt(),$async$we)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.U(D.fyu)
w=1
break}r.L(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.Ff(p)
case 1:return A.h(u,v)}})
return A.i($async$we,v)},
OU(d){return this.bNh(d)},
bNh(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$OU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ce(null,null,!0,null,new C.f_I(d),s,null,!0,!0,x.y),$async$OU)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.pg(t.a.c,A.a([],x.D)),$async$OU)
case 6:w=7
return A.b(t.wt(),$async$OU)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fwF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OU,v)},
cm7(d){var w=this.c
w.toString
A.bU(B.L,null,new C.f_R(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b9g(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.k8
else w=B.c
v=A.m(16)
u=A.K(p?B.em:B.bO,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.o(r,A.W(e,d,r,r,r,22),B.f,r,r,new A.n(t,r,r,s,r,r,B.m),r,r,r,r,B.bT,r,r,r)
t=A.c(i,r,r,r,r,r,r,A.l(r,r,p?B.aS:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a3,!0,r,A.aM(!1,q,!0,A.o(r,A.x(A.a([s,B.af,t,B.bC,A.c(h,r,r,r,r,r,r,A.l(r,r,p?B.bu:B.bj,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.h,0,B.p),B.f,r,r,new A.n(w,r,u,v,r,r,B.m),r,r,r,r,B.tp,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a1u(d,e){return this.clW(d,e)},
clW(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1u=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.L,null,new C.f_M(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a1u)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hNV(r,new C.f_N(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.OW(d,e),$async$a1u)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1u,v)},
b6f(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.o(u,A.W(e,f,u,u,u,22),B.f,u,u,new A.n(t,u,u,s,u,u,B.m),u,u,u,u,B.bT,u,u,u)
if(d)t=B.aB
else t=h.a?B.aS:B.aw
t=A.c(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.c(i,u,u,u,u,u,u,A.l(u,u,w?B.bu:B.bj,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.B,u,B.e,B.h,0,B.p),1)
return A.aF(!1,B.a3,!0,u,A.aM(!1,u,!0,new A.D(B.D6,A.A(A.a([s,B.bb,t,A.W(B.eM,w?B.bu:B.bj,u,u,u,u)],v),B.l,u,B.e,B.h,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
ct0(d,e,f,g,h,i){return this.b6f(!1,d,e,f,g,h,i)},
OW(d,e){return this.bNr(d,e)},
bNr(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lr(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$OW)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bFE(t.a.c,d.a),$async$OW)
case 6:w=7
return A.b(t.wt(),$async$OW)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$OW,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.um(n),l=n?B.c6:B.hW
if(p.f)n=D.bgg
else{w=A.aE(d,B.dI,x.w).w
v=p.bHH(m)
u=p.c34(m)
t=p.gbEJ()
if(n)s=B.k8
else s=B.c
r=A.m(13)
q=x.p
t=A.a([v,B.af,u,B.aO,new C.GB(A.o(o,A.A(A.a([p.aEk(B.Q_,"Projects",m,D.af2),p.aEk(B.vd,"Cashier",m,D.b42),p.aEk(B.I7,"Family Tree",m,D.hWt)],q),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.n(s,o,o,r,o,o,B.m),o,o,o,o,o,o,o,o),14,B.es,0.95,t,o),B.bx],q)
v=p.d
if(v===D.af2){v=J.ad(p.e)
B.d.u(t,A.a([A.A(A.a([A.c("Projects ("+v+")",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aY,new C.azP(p.gaU7(),o)],q),B.l,o,B.e,B.h,0,o,o),B.aA,p.ct2(m)],q))}else{n=p.a
if(v===D.b42)t.push(new C.aqH(n.c,m,o))
else{v=p.r
t.push(new C.arW(n.c,n.d,n.e,n.f,new C.f03(p),new C.f04(p),new A.bl(v,x.b4)))}}n=A.ca(A.x(t,B.B,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,new A.P(20,w.r.b+8,20,32),o,o,B.ah)}return A.c5(o,l,A.bm(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bHH(d){var w=null,v=A.m(8),u=d.a,t=A.W(K.a3m,u?B.bu:B.bj,w,w,w,16)
return A.aM(!1,v,!0,new A.D(B.kf,A.A(A.a([t,B.bf,A.c("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bu:B.bj,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.M,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f_F(this),w,w,w,w,w,w,w)},
gbEJ(){switch(this.d.a){case 0:return D.aeb
case 1:return D.hJ4
case 2:return D.aec}},
c34(d){var w=null,v=A.m(15),u=A.a([new A.ab(0,B.H,B.aV.j(0.35),B.cz,16)],x.V),t=x.p,s=A.A(A.a([A.o(w,D.c2X,B.f,w,w,new A.n(B.c.j(0.22),w,w,A.m(12),w,w,B.m),w,44,w,w,w,w,w,44),B.bb,D.bNg,A.aF(!1,B.a3,!0,w,A.aM(!1,A.m(12),!0,A.o(w,D.c0d,B.f,w,w,new A.n(B.c.j(0.22),w,w,A.m(12),w,w,B.m),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f_J(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.B,w,B.e,B.h,0,w,w),r=B.b5.j(0.55),q=A.m(12)
return new C.GB(A.o(w,A.x(A.a([new A.D(B.HJ,s,w),A.o(w,A.x(A.a([A.c("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.c(A.Bw(this.gcJ4()),w,w,w,w,w,w,D.fQr,w,w,w)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.n(r,w,w,q,w,w,B.m),w,w,w,B.to,B.jz,w,w,1/0)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.n(B.aV,w,w,v,u,w,B.m),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hJ3,w)},
aEk(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aV:B.L,q=A.m(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.ab(0.5,B.H,B.aV.j(0.42),B.cP,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bj
w=A.W(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bj
return A.E(A.aF(!1,B.a3,!0,u,A.aM(!1,s,!0,A.cU(u,A.A(A.a([w,B.e5,new A.d2(1,B.cg,A.c(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.b9,B.h,0,u,u),u,u,B.cn,new A.n(r,u,p,q,o,u,B.m),B.iX,u,u,u,u,B.HS,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f0_(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
ct2(d){var w,v,u,t,s,r,q=this,p=null
if(J.cu(q.e)){w=d.a
v=w?B.ek:B.c
u=A.m(15)
t=A.o(p,D.c0k,B.f,p,p,new A.n(p,p,p,p,A.a([new A.ab(2,B.H,B.aV.j(0.5),B.eT,28)],x.V),D.cd2,B.a6),p,108,p,p,p,p,p,108)
s=A.c("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aS:B.aw,p,p,p,p,p,p,p,p,18,p,p,B.F,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.GB(A.o(p,A.x(A.a([t,B.dc,s,B.P,A.c("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bj,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.eb,A.A(A.a([A.E(q.aVJ(B.jE,"Scan QR",new C.f_U(q),d),1),B.ar,A.E(q.aVJ(B.A8,"Upload file",new C.f_V(q),d),1)],r),B.l,p,B.e,B.h,0,p,p),B.aA,A.bI(D.hhs,p,q.gaU7(),A.bn(B.aV,p,p,p,B.c,B.hr,p,p,new A.ba(A.m(12),B.a1),p,p,p))],r),B.l,p,B.e,B.h,0,B.p),B.f,p,p,new A.n(v,p,p,u,p,p,B.m),p,p,p,p,p,p,p,1/0),16,D.bJI,1.05,D.aeb,p)}w=J.b8(q.e,new C.f_W(q,d),x.l)
w=A.B(w,w.$ti.k("aj.E"))
return new C.GB(A.x(w,B.l,p,B.e,B.h,0,B.p),16,B.bT,1,D.aeb,p)},
aVJ(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.K(B.aV.j(0.45),B.r,1)
return A.aF(!1,B.a3,!0,u,A.aM(!1,t,!0,A.o(w,A.x(A.a([A.W(d,B.b5,w,w,w,26),B.P,A.c(e,w,w,w,w,w,w,D.fOB,B.K,w,w)],x.p),B.l,w,B.e,B.M,0,B.p),B.f,w,w,new A.n(w,w,r,s,w,w,B.m),w,w,w,w,B.a1y,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
ct1(d,e){var w,v,u=null,t=e.a,s=t?B.ek:B.c,r=A.m(14),q=A.K(t?B.em:B.bO,B.r,1),p=A.a([new A.ab(0,B.H,B.v.j(t?0.35:0.08),B.eA,10)],x.V),o=A.m(14),n=t?B.bu:B.bj
n=A.bu(B.YI,new A.fJ(1.7777777777777777,C.aTr(!0,B.fp,1/0,B.Q_,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.c(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aS:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.c(""+d.d.length+" budget items \xb7 "+A.Bw(d.gxO()),u,u,u,u,u,u,D.fMy,u,u,u)],w),B.B,u,B.e,B.h,0,B.p),1)
return A.o(u,A.aF(!1,B.a3,!0,u,A.aM(!1,o,!0,A.x(A.a([n,new A.D(B.bG,A.A(A.a([v,A.aH(u,u,u,u,A.W(A1.a4s,t?B.bu:B.bj,u,u,u,u),u,u,u,new C.f_S(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.h,0,u,u),u)],w),B.B,u,B.e,B.h,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f_T(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.n(s,u,q,r,p,u,B.m),u,u,u,B.e9,u,u,u,1/0)}}
C.bBz.prototype={}
C.rx.prototype={
ak(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd2b(){var w,v,u,t,s=this.c
if(s===B.i.fM(s))w=B.o.v(B.i.M(s))
else{v=B.i.aa(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lJ.prototype={
gxO(){return B.d.cC(this.d,0,new C.cIq())},
ak(){var w=this,v=w.d,u=A.T(v).k("N<1,aa<p,@>>")
v=A.B(new A.N(v,new C.cIp(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bgI(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lJ(w.a,w.b,v,u,w.e)},
bgq(d){return this.bgI(d,null)},
U3(d){return this.bgI(null,d)}}
C.IG.prototype={
a7(){return"FamilyGender."+this.b}}
C.i8.prototype={
ak(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hJ3(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aH4(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.i8(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.amU.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.l2.prototype={
garl(){var w=this.f
return new A.X(w,new C.bUu(),A.T(w).k("X<1>")).gJ(0)},
ak(){var w=this,v=w.f,u=A.T(v).k("N<1,aa<p,@>>")
v=A.B(new A.N(v,new C.bUt(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ipY(w.y),"games",w.z],x.N,x.z)},
xa(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.l2(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bgH(d,e){var w=null
return this.xa(w,w,w,d,e,w,w,w,w)},
cSt(d,e,f,g,h,i,j){return this.xa(d,e,null,f,g,h,i,j,null)},
aH9(d,e){var w=null
return this.xa(w,w,w,w,d,w,w,e,w)},
cSv(d,e,f,g,h,i,j,k){return this.xa(d,e,null,f,g,h,i,j,k)},
cQZ(d){var w=null
return this.xa(w,w,w,w,w,w,w,d,w)},
cRm(d){var w=null
return this.xa(w,w,w,w,w,w,w,w,d)},
bgk(d){var w=null
return this.xa(w,w,d,w,w,w,w,w,w)},
aGV(d){var w=null
return this.xa(w,w,w,w,w,d,w,w,w)},
cS0(d,e,f){var w=null
return this.xa(w,d,w,w,e,w,w,f,w)},
cQM(d){var w=null
return this.xa(w,w,w,d,w,w,w,w,w)},
cRy(d,e){var w=null
return this.xa(d,w,w,w,w,w,e,w,w)}}
C.cIr.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cIs.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aJN.prototype={}
C.bc0.prototype={
aj(d){this.a=d.a
this.b=d.b},
d_(d){var w=new C.bc0()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b5(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bc_.prototype={
gx0(){return!0},
gGO(){return this.z.b<this.b.length},
aXp(d){switch(0){case 0:return d.a.c}},
aX5(d){switch(0){case 0:return d.a.d}},
bXw(d,e){switch(0){case 0:return new A.i2(d,e)}},
bWU(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hi(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iX(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Ip(b4)
switch(0){case 0:v=b5.b
u=new A.l_(0,v,0,1/0)
t=w===B.Wp
break}s=A.a([],x.gZ)
r=A.S(x.gF,x.S)
for(b3=b1.z,q=B.d.fD(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hi(b4,u,!0)
f=b1.aXp(g)
f.toString
e=b1.aX5(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJN(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJN(k,j,i))}d=s.length
switch(0){case 0:q=b5.cB(new A.i2(m,l))
a0=q.a
a1=q.b
b1.a=new A.iX(0,0,a0,a1)
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
for(q=B.d.fD(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.I)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aXp(g)
e=b1.aX5(g)
e.toString
a9=b1.bWU(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bXw(a6,a3+a9)
b0=g.a
g.a=new A.iX(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fW(d){var w,v,u,t,s,r=this
r.lE(d)
w=d.b
w.iy()
v=A.dv()
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
C.bzP.prototype={}
var z=a.updateTypes(["aA<~>()","Q(i8)","~()","Q(l2)","Q(nx)","aa<p,@>(l2)","G(l2,l2)","G(i8,i8)","p(i8)","l2(aa<@,@>)","Q(lJ)","nx(aa<@,@>)","aa<p,@>(nx)","Q(uY)","uY()","G(i8)","ai<i8>()","Q(zK)","a0K(Z)","p?(i8)","eT<p?>(i8)","aA<~>(lJ)","Q(rx)","aa<p,@>(i8)","i8(aa<@,@>)","G(lJ,lJ)","~(bf)","w(oR)","Q(agA)","G(G,aaB)","Uq(Z)","Q(N4)","Q(uX)","~(i8)","p(p)","WM(Z)","Up(Z)","aeX(Z)","a_F(Z)","i8(i8)","cN(bz<p,GR>)","cN(L8)","a08(Z)","G?(i8)","i8()","Q(L8)","D(i8)","~(IG)","a04(Z)","w(IG,p,a_)","Q(agt)","bz<p,ai<aa<p,@>>>(p,ai<nx>)","a06(Z)","+count,id,name(G,p,p)(l2)","l2(l2)","p(l2)","a14(Z)","Q(m_)","m_()","a_b(Z)","a2S(Z)","a_H(Z)","a_G(Z)","~(G)","~(p,lx?)","w(rx)","afh(Z)","~(nW)","aA<~>([p?])","H(H,lJ)","w(lJ)","H(H,rx)","aa<p,@>(rx)","rx(aa<@,@>)","ai<lx>()","uX()","p(V)","lJ(aa<@,@>)","cw(IF)","p(lJ)","aa<p,@>(lJ)","G(nx,nx)","l2(aa<p,@>)","a13(Z)"])
C.fUG.prototype={
$1(d){return d.a+" "+d.b},
$S:137}
C.fUF.prototype={
bq0(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.ro(s,d,B.id,"book",B.Hu),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.Y(r!=null&&A.Md(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bq0(d)},
$S:285}
C.fUH.prototype={
$1(d){return d.b},
$S:137}
C.h3T.prototype={
$1(d){var w=null
return A.eE(w,B.L,new A.QM(this.a,this.b,w),w,w,0,B.a1N,w,B.d7,w,w,w)},
$S:44}
C.fHH.prototype={
$1(d){return d!=null},
$S:253}
C.fHI.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:253}
C.fHN.prototype={
$1(d){if(this.a)return new A.r(d.a*520,d.b*160)
return d},
$S:179}
C.fSo.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fg(d,w,w,w,A.hm(w,B.u2,w,w,w,w,w,w,w,B.dK,w,w,10.5,w,B.eL,w,!0,w,w,w,w),w),u=f?B.eL:B.x5
return new A.oh(D.bEY,A.abq(A.a([new A.h4(130,w,v),new A.zJ(1,B.I1,A.fg(e,w,w,w,A.hm(w,g==null?D.eFj:g,w,w,w,w,w,w,w,B.dK,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.z6,B.m7))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:2279}
C.fSn.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.w9(999)
f=A.xO(A.lV(h,A.fg("Cashier",h,h,h,A.hm(h,D.B2,h,h,h,h,h,h,h,B.dK,h,h,10,h,B.eL,h,!0,h,h,h,h),h),h,new A.l0(D.eFa,h,f,B.ij,h),h,h,D.bFr,h))
w=A.xO(A.fg("Debt receipt",h,h,h,A.hm(h,h,h,h,h,h,h,h,h,B.dK,h,h,22,h,B.eL,h,!0,h,h,h,h),h))
v=A.xO(A.fg(C.xu(new A.V(Date.now(),0,!1),!0),h,h,h,D.acB,h))
u=A.w9(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fg(s,h,h,h,A.hm(h,h,h,h,h,h,h,h,h,B.dK,h,h,14,h,B.eL,h,!0,h,h,h,h),h)
r=A.fg("Person who owes",h,h,h,D.acB,h)
q=A.w9(10)
p=x.Z
u=A.lV(h,A.zA(A.a([s,new A.h4(h,2,h),r,new A.h4(h,10,h),A.lV(h,A.zA(A.a([A.fg("Amount owed",h,h,h,D.acB,h),new A.h4(h,2,h),A.fg(A.Bw(t.c),h,h,h,A.hm(h,D.B2,h,h,h,h,h,h,h,B.dK,h,h,20,h,B.eL,h,!0,h,h,h,h),h)],p),B.tg,B.m7),h,new A.l0(B.q4,h,q,B.ij,h),h,h,D.bEE,1/0)],p),B.tg,B.m7),h,new A.l0(B.aOO,h,u,B.ij,h),h,h,D.bGE,1/0)
q=new A.nY(D.eFd,0.9,B.lp)
r=A.w9(12)
s=i.c
o=s.$2("Original due",C.xu(t.r,!1))
n=s.$2("Current due",C.xu(t.f,!1))
m=i.d
l=new A.nY(m,1.1,B.lp)
k=A.w9(8)
j=i.a
k=A.a([o,n,new A.h4(h,6,h),A.lV(h,A.xO(A.fg(t.gaOf(),h,h,h,A.hm(h,m,h,h,h,h,h,h,h,B.dK,h,h,11,h,B.eL,h,!0,0.5,h,h,h),h)),h,new A.l0(h,new A.q6(l,l,l,l),k,B.ij,h),h,h,D.bFA,1/0),new A.h4(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.B2))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.B2))
else{n=A.fg("Missed days ("+n+")",h,h,h,A.hm(h,B.u2,h,h,h,h,h,h,h,B.dK,h,h,10.5,h,B.eL,h,!0,h,h,h,h),h)
m=A.T(o).k("N<1,TZ>")
o=A.B(new A.N(o,new C.fSm(),m),m.k("aj.E"))
B.d.u(k,A.a([new A.h4(h,4,h),n,new A.h4(h,6,h),new C.bc_(5,5,new C.bc0(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.h4(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.h4(h,8,h),w,new A.h4(h,3,h),v,new A.h4(h,16,h),u,new A.h4(h,10,h),A.lV(h,A.zA(k,B.z6,B.m7),h,new A.l0(h,new A.q6(q,q,q,q),r,B.ij,h),h,h,B.anu,1/0)],p)
w=j.a
if(w!=null){v=new A.nY(B.Kx,1,B.lp)
B.d.u(f,A.a([new A.h4(h,16,h),A.fg("Debtor signature",h,h,h,A.hm(h,B.u2,h,h,h,h,h,h,h,B.dK,h,h,10,h,B.eL,h,!0,h,h,h,h),h),new A.h4(h,6,h),A.lV(h,new A.IX(w,B.YV,h,h),h,new A.l0(h,new A.q6(v,v,v,v),A.w9(6),B.ij,h),82,h,B.Pj,1/0)],p))}f.push(new A.h4(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fg(w,h,h,h,D.fEK,h))
f.push(new A.h4(h,18,h))
f.push(A.xO(A.fg("NGMY.ORG",h,h,h,A.hm(h,D.B2,h,h,h,h,h,h,h,B.dK,h,h,14,h,B.eL,h,!0,1.8,h,h,h),h)))
return f},
$S:472}
C.fSm.prototype={
$1(d){var w=null,v=new A.nY(D.Ky,0.7,B.lp),u=A.w9(999)
return A.lV(w,A.fg(C.xu(d,!1),w,w,w,A.hm(w,D.Ky,w,w,w,w,w,w,w,B.dK,w,w,9.5,w,B.eL,w,!0,w,w,w,w),w),w,new A.l0(w,new A.q6(v,v,v,v),u,B.ij,w),w,w,D.bLb,w)},
$S:2280}
C.c9O.prototype={
$1(d){var w=null,v=B.bE.j(0.08),u=A.m(999),t=A.K(B.bE.j(0.28),B.r,1)
return A.o(w,A.c(C.xu(d,!1),w,w,w,w,w,w,D.fM_,w,w,w),B.f,w,w,new A.n(v,w,t,u,w,w,B.m),w,w,w,w,B.eY,w,w,w)},
$S:2281}
C.h4p.prototype={
$1(d){var w=null,v=A.aE(d,B.bY,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.c3X,w,w,w,new C.h4m(d),w,w,w,w,w,B.cl),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eE(w,B.L,new A.cP(new A.aY(0,380,0,v.a.b*0.9),A.aF(!1,B.a3,!0,u,new A.D(B.a1z,A.x(A.a([new A.bK(B.a9,w,w,t,w),new A.d2(1,B.cg,A.ca(A.x(A.a([new A.e7(new C.b0X(r,w),s),B.S,A.A(A.a([A.E(A.en(B.Ag,w,D.hdD,new C.h4n(s,r,d),A.dh(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f8,w,new A.ba(A.m(14),B.a1),new A.av(q,1,B.r,-1),w,w,w,w)),1),B.aa,A.E(A.da(B.a54,w,D.ha_,new C.h4o(r,d),A.bn(B.b5,w,w,w,B.c,w,B.f8,w,new A.ba(A.m(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.h,0,w,w)],p),B.l,w,B.e,B.M,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.M,0,B.p),w),B.f,B.aw,0,w,w,w,w,w,B.ai),w),w,w,0,T.a1Z,w,B.d7,w,w,w)},
$S:44}
C.h4m.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.h4n.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.aq$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lx(2.5),$async$$0)
case 4:w=3
return A.b(e.hk(B.ho),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eR(B.dL.gaU(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.az(o,0,32)
w=5
return A.b(A.rr(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.L(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c(n,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.h4o.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fZh(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.U(A.b2(null,null,null,null,null,B.t,null,A.c(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h4h.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eE(w,B.aw,A.x(A.a([new A.D(D.bGs,A.A(A.a([A.E(A.c(this.a,w,w,w,w,w,w,B.nu,w,w,w),1),A.aH(w,w,w,w,B.lC,w,w,w,new C.h4f(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),w),new A.d2(1,B.cg,new A.D(B.f2,A.bu(A.m(14),A.h1(t,B.z,w,w,B.cp,B.dF,!1,w,!1,w,w),B.aq),w),w),new A.D(B.OZ,new A.a6(1/0,w,A.da(B.o8,w,D.aZb,new C.h4g(t,this.c,d),A.bn(B.b5,w,w,w,B.c,w,w,w,new A.ba(A.m(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.M,0,B.p),w,w,w,B.Pa,w,B.d7,w,new A.ba(v,B.a1),w)},
$S:44}
C.h4f.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.h4g.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rr(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h4t.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eE(w,B.aw,new A.D(D.bGA,A.x(A.a([A.A(A.a([D.bMm,A.aH(w,w,w,w,B.lC,w,w,w,new C.h4r(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),B.P,new A.e7(A.bu(A.m(14),A.o(w,A.b4(w,w,w,new C.bef(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a6(1/0,w,A.da(B.o8,w,D.aZb,new C.h4s(t,s,d),A.bn(B.b5,w,w,w,B.c,w,w,w,new A.ba(A.m(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.M,0,B.p),w),w,w,w,w,w,B.d7,w,new A.ba(v,B.a1),w)},
$S:44}
C.h4r.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.h4s.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.aq$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lx(2.5),$async$$0)
case 4:w=3
return A.b(e.hk(B.ho),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.az(p,0,32)
r=J.eR(B.dL.gaU(s))
w=5
return A.b(A.rr(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.L(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c(o,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fMC.prototype={
$1(d){return d.a===this.a},
$S:289}
C.dTi.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dT3.prototype={
bpd(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.ek:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dT6(s,q,e),p,!0,!0,!1,B.KR,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dT7(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bpd(d,e)},
$S:2282}
C.dT6.prototype={
$1(d){var w,v=null,u=this.c===B.xH,t=u?D.dAP:D.dw5
u=u?"Male":"Female"
w=this.b
u=A.c("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aS:B.aw,v,v,v,v,v,v,v,v,15,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(G.ao0,A.x(A.a([u,B.at,A.c("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bu:B.bj,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.iE(!0,v,v,B.y,D.fve,new C.dT5(this.a,w,t,d),t.length,v,B.e4,B.ah,!0)],x.p),B.am,v,B.e,B.M,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:30}
C.dT5.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cV.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.m(14)
if(q)u=B.cV
else u=(t.b.a.d.a?B.bu:B.bj).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.o(B.z,C.b0W(r,26),B.f,s,s,new A.n(w,s,u,v,s,s,B.m),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dT4(t.d,r),s,s,s,s,s,s,s)},
$S:198}
C.dT4.prototype={
$0(){A.a8(this.a,!1).N(this.b)
return null},
$S:0}
C.dT7.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dT1.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:92}
C.dT2.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cI(B.cn,e,v)
return new A.d8(e,!1,A.iw(B.z,A.as(A.aF(!1,B.a3,!0,v,new A.e2(new C.dT0(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bi(t,new A.bt(0.96,1,u),u.k("bi<bR.T>"))),v)},
$S:34}
C.dT0.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aE(d,B.bY,x.w).w,i=l.b,h=i.a.d.a,g=h?B.ek:B.c,f=A.m(14),e=A.K((h?B.bu:B.bj).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.c(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,16,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aM(!1,v,!0,new A.D(B.es,A.W(B.cA,i.a.d.a?B.bu:B.bj,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dSM(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.h,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aWf("Name")
r=l.a
q=r.d==null?k:new C.dSN(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bs:B.mm
n=A.K(B.cV.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bgA(new A.D(B.f7,A.aM(!1,p,!0,A.o(B.z,C.b0W(m==null?"\ud83d\udc64":A.fTd(r.e,m),18),B.f,k,k,new A.n(o,k,n,k,k,k,B.a6),k,34,k,B.cr,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.al,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ll,k,B.acq,k,k)
v=A.a([v,B.af,t,B.P,A.c("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.ak,A.A(A.a([A.E(i.aWW("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dSO(r,a0),r.d===B.xH),1),B.aa,A.E(i.aWW("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dST(r,a0),r.d===B.a8W),1)],u),B.l,k,B.e,B.h,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.P,new A.bK(B.a5,k,k,A.hs(D.c2a,D.hbU,new C.dSU(r,l.e,a0),A.fr(k,k,k,k,k,k,k,k,k,k,k,B.cV,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cl)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.v0(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aWg("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.al,k,k,s,k,k,B.eg,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.K((t?B.bu:B.bj).j(0.22),B.r,1)
t=A.c("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xu(r.a,!1)
v.push(A.aF(!1,B.a3,!0,q,A.aM(!1,p,!0,A.o(k,A.A(A.a([A.E(A.x(A.a([t,B.bC,A.c(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.B,k,B.e,B.h,0,B.p),1),D.bZG],u),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.n(k,k,n,o,k,k,B.m),k,k,k,k,B.bl,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dSV(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.u(v,A.a([B.P,A.c("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aWf("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.al,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.c("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,12.5,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.c("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b4C(r.b.length!==0,B.mt,new C.dSW(r,i,a0),new C.dSX(r,a0),"Upload from gallery","ID photo"))
v.push(i.b4C(r.c.length!==0,D.bSV,new C.dSY(r,i,d,a0),new C.dSZ(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new A2.a9g("Signature (optional)",t,new C.dT_(a0),new C.dSP(a0,t),new C.dSQ(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.bu:B.bj
s=(i?B.bu:B.bj).j(0.28)
s=A.E(A.dV(B.aZ4,new C.dSR(d),A.dh(k,k,k,k,k,k,k,k,k,t,k,k,B.qZ,k,new A.ba(A.m(10),B.a1),new A.av(s,1,B.r,-1),k,k,k,k)),1)
t=A.bn(B.cV,k,k,k,B.c,k,B.qZ,k,new A.ba(A.m(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.aa,A.E(A.bI(A.c(h?"Save":"Update",k,k,k,k,k,k,B.w6,k,k,k),k,new C.dSS(r,w,d),t),1)],u),B.l,k,B.e,B.h,0,k,k))
return A.o(k,A.ca(A.x(v,B.am,k,B.e,B.M,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.n(g,k,e,f,k,k,B.m),k,k,k,B.r0,B.jz,k,k,360)},
$S:180}
C.dSM.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dSN.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dSO.prototype={
$0(){return this.b.$1(new C.dSL(this.a))},
$S:0}
C.dSL.prototype={
$0(){var w=this.a
w.d=B.xH
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dST.prototype={
$0(){return this.b.$1(new C.dSK(this.a))},
$S:0}
C.dSK.prototype={
$0(){var w=this.a
w.d=B.a8W
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dSU.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dSV.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.w3(null,u.b,A.c0(2020,1,1,0,0,0,0,0),null,s,A.c0(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dSJ(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSJ.prototype={
$0(){var w=this.b
return this.a.a=A.c0(w.gck(),w.gcg(),w.gcw(),0,0,0,0,0)},
$S:0}
C.dSW.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Qz(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dSI(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSI.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dSX.prototype={
$0(){return this.b.$1(new C.dSH(this.a))},
$S:0}
C.dSH.prototype={
$0(){return this.a.b=""},
$S:0}
C.dSY.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.ek:B.c
w=3
return A.b(A.bU(q,null,new C.dSF(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Qz(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dSG(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSF.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dK(!1,w,w,w,!0,w,w,w,!0,w,w,B.atu,w,w,w,w,new C.dSz(d),!1,w,w,w,w,w,w,w,D.h1S,w,w,w),A.dK(!1,w,w,w,!0,w,w,w,!0,w,w,B.ats,w,w,w,w,new C.dSA(d),!1,w,w,w,w,w,w,w,D.h8Y,w,w,w)],x.p),B.l,w,B.e,B.M,0,B.p),!0,!1,B.ag,!0,!0)},
$S:30}
C.dSz.prototype={
$0(){A.a8(this.a,!1).N("camera")
return null},
$S:0}
C.dSA.prototype={
$0(){A.a8(this.a,!1).N("gallery")
return null},
$S:0}
C.dSG.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dSZ.prototype={
$0(){return this.b.$1(new C.dSE(this.a))},
$S:0}
C.dSE.prototype={
$0(){return this.a.c=""},
$S:0}
C.dT_.prototype={
$0(){return this.a.$1(new C.dSD())},
$S:0}
C.dSD.prototype={
$0(){},
$S:0}
C.dSP.prototype={
$0(){return this.a.$1(new C.dSC(this.b))},
$S:0}
C.dSC.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dSQ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ajs(u.a,null,null,new C.dSB(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSB.prototype={
$4(d,e,f,g){this.a.$1(new C.dSy(this.b,d))},
$S:436}
C.dSy.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.u(w,this.b)},
$S:0}
C.dSR.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dSS.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.U(D.fAo)
return}if(w.a.d==null){w.c.L(x.q).f.U(D.fxd)
return}A.a8(w.c,!1).N(!0)},
$S:0}
C.dTl.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:92}
C.dTm.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.ek:B.c,n=A.m(14),m=A.K((p?B.bu:B.bj).j(0.16),B.r,1)
p=A.c("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aS:B.aw,r,r,r,r,r,r,r,r,16,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bw(w.c)
v=A.c(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bu:B.bj,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zV(r).length
u=A.c("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.zV(r).length>0?B.bE:B.cV,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bj
t=(q?B.bu:B.bj).j(0.28)
s=x.p
return new A.d8(e,!1,A.as(A.aF(!1,B.a3,!0,r,A.o(r,A.x(A.a([p,B.P,v,u,B.aA,A.A(A.a([A.E(A.dV(B.om,new C.dTj(d),A.dh(r,r,r,r,r,r,r,r,r,w,r,r,B.jU,r,new A.ba(A.m(10),B.a1),new A.av(t,1,B.r,-1),r,r,r,r)),1),B.aa,A.E(A.bI(D.h9p,r,new C.dTk(d),A.bn(B.cV,r,r,r,B.c,r,B.jU,r,new A.ba(A.m(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.h,0,r,r)],s),B.am,r,B.e,B.M,0,B.p),B.f,r,r,new A.n(o,r,m,n,r,r,B.m),r,r,r,B.zt,B.HJ,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:34}
C.dTj.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dTk.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dTf.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dTg(r),p=r.a.d.a,o=p?B.ek:B.c,n=A.m(14),m=A.K((p?B.bu:B.bj).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.c(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aS:B.aw,s,s,s,s,s,s,s,s,14,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.c(A.Bw(l.c),s,s,s,s,s,s,D.fNC,s,s,s)],p),B.l,s,B.e,B.h,0,s,s)
w=A.iV((r.a.d.a?B.bu:B.bj).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a3I,"View receipt",new C.dT8(r,d,l))
u=l.x!=null
t=u?B.pR:B.r8
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bGx,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dT9(r,d,l)),q.$3$icon$label$onTap(B.Do,"Edit",new C.dTa(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mt,"View / download ID",new C.dTb(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bSU,"View / download selfie",new C.dTc(r,d,l)))
if(l.gaIQ())p.push(q.$3$icon$label$onTap(B.a4V,"View / download signature",new C.dTd(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bE,B.eo,"Delete",new C.dTe(r,d,l)))
p.push(B.at)
return A.bm(!0,new A.D(B.to,A.o(s,A.x(p,B.l,s,B.e,B.M,0,B.p),B.f,s,s,new A.n(o,s,m,n,s,s,B.m),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:30}
C.dTg.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.aw
else w=d
return A.aM(!1,v,!0,new A.D(B.eX,A.A(A.a([A.W(e,w,v,v,v,20),B.bb,A.c(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.h,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:2283}
C.dT8.prototype={
$0(){A.a8(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h4l(w,this.c)},
$S:0}
C.dT9.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.Tn(this.c)},
$S:0}
C.dTa.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.DW(this.c)},
$S:0}
C.dTb.prototype={
$0(){var w,v,u
A.a8(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bHP(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dTc.prototype={
$0(){var w,v,u
A.a8(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bHP(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dTd.prototype={
$0(){A.a8(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h4q(w,this.c)},
$S:0}
C.dTe.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.Qy(0,this.c)},
$S:0}
C.dTn.prototype={
$1(d){return d.x==null},
$S:289}
C.dTo.prototype={
$1(d){return d.x!=null},
$S:289}
C.dTp.prototype={
$2(d,e){return d+e.c},
$S:2284}
C.dTq.prototype={
$0(){return this.a.bFf()},
$S:0}
C.dTh.prototype={
$0(){return this.a.ah7(this.b)},
$S:0}
C.fNn.prototype={
$1(d){return d.a===this.a},
$S:z+32}
C.fNo.prototype={
$0(){return B.d.gH(D.a6c)},
$S:z+75}
C.diJ.prototype={
$0(){var w=this.a
return w.l(new C.diH(w,this.b))},
$S:0}
C.diH.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.diI.prototype={
$0(){},
$S:0}
C.diK.prototype={
$0(){var w=this.a.gc3P()
A.a8(this.b,!1).N(w)
return null},
$S:0}
C.fPV.prototype={
$1(d){return C.hsV(A.a1(d,x.N,x.z))},
$S:z+11}
C.fPW.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fPX.prototype={
$2(d,e){var w=A.c8(d.a,null),v=A.c8(e.a,null)
if(w!=null&&v!=null)return B.o.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+81}
C.h2X.prototype={
$1(d){return d.ak()},
$S:z+12}
C.hbC.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fMt.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bTb.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eD(e,v)?v:null},
$S:2285}
C.h3x.prototype={
$1(d){var w=this
return new C.a06(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+52}
C.djo.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.djn(w,d))},
$S:z+78}
C.djn.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djc.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cL(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dj9.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.diL.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.diM.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.djd.prototype={
$0(){return this.a.w=!1},
$S:0}
C.diU.prototype={
$1(d){var w=null,v=A.O(d).ax.a===B.I,u=v?B.ek:B.c,t=A.c("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.c("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eh(A.a([A.bO(!1,B.dr,w,w,!0,w,w,w,new C.diS(d),w,w),A.bI(B.y6,w,new C.diT(d),A.bn(B.nF,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.diS.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.diT.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.diV.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.dja.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.djb.prototype={
$0(){return B.d.gH(D.As)},
$S:z+14}
C.diQ.prototype={
$1(d){var w=this.a,v=w.y,u=w.gze(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Up(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+36}
C.diR.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.diW.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_F(v,u,J.ad(w.d),null)},
$S:z+38}
C.diX.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djm.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.d()
if(e===0)w=A.ay(s,new C.a_k(r.y,r.gze(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.djk(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.d()
t=r.Q
t===$&&A.d()
t=new C.bdA(v,e,w,u,t,r.gbVZ(),C.hJ2(r.y.Q),r.gze(0),s)
w=t}return A.c7(q,new C.djl(r,e),new A.D(B.a1S,w,s))},
$S:2286}
C.djl.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.d()
t=t.f
if(t.length!==0&&B.d.gd1(t).ay){t=this.b
u=x.cy.a(B.d.gd1(u.f.f)).gvw(0)
w=t-(u==null?t:u)}else w=0
v=B.i.D(w,-1,0)
u=A.dv()
t=u.a
t.$flags&2&&A.ak(t)
t[11]=0.0013
u.fG(v*3.141592653589793*0.5)
return A.fC(B.a5,A.d3(e,B.i.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.djk.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aK1(B.qR,B.iJ)},
$S:0}
C.dj6.prototype={
$0(){var w=this.a
return w.l(new C.dj5(w))},
$S:0}
C.dj5.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dj7.prototype={
$0(){var w=this.a.c
w.toString
A.a8(w,!1).N(null)
return null},
$S:0}
C.diN.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=B.kD.j(0.5),r=x.p,q=A.a([D.h0p,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cu(p.d)?"Write this book":"Write a new book"
q.push(p.a_n(d,B.ef,w,J.cu(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a_n(d,B.arm,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cL(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cy,A.c("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kZ.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cy,A.c("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kZ.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a_n(d,I.asl,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a_n(d,B.oY,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a_n(d,B.oY,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eE(u,B.Cz,A.bm(!0,new A.D(B.zq,A.x(q,B.B,u,B.e,B.M,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.Pd,u,B.d7,u,new A.ba(t,new A.av(s,1.4,B.r,-1)),u)},
$S:44}
C.dj8.prototype={
$0(){A.a8(this.a,!1).N(this.b)
return null},
$S:0}
C.dj_.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cL(w.d)
return new C.a08(v,J.cL(w.d),w.r+1,null)},
$S:z+42}
C.dj0.prototype={
$1(d){var w=null
return A.oW(!1,A.eh(w,w,w,B.Cz,new A.kn(this.a,new C.diZ(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:321}
C.diZ.prototype={
$3(d,e,f){var w=null
return A.A(A.a([B.ac3,B.pg,A.E(A.c(e,w,w,w,w,w,w,B.jK,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:729}
C.dj1.prototype={
$0(){return this.a.a=!1},
$S:54}
C.dj2.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:213}
C.dj3.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dj4.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.BF(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.T1(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.l(new C.diY(s,t))
w=4
return A.b(s.lh(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.diY.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djf.prototype={
$1(d){var w=null
return A.oW(!1,A.eh(w,w,w,B.Cz,new A.kn(this.a,new C.dje(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:321}
C.dje.prototype={
$3(d,e,f){var w=null
return A.A(A.a([B.ac3,B.pg,A.E(A.c(e,w,w,w,w,w,w,B.jK,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:729}
C.djg.prototype={
$0(){return this.a.a=!1},
$S:54}
C.djh.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:213}
C.dji.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:213}
C.djj.prototype={
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
C.diO.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.bma(B.qR,P.OP)},
$S:0}
C.diP.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aK1(B.qR,P.OP)},
$S:0}
C.dla.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dlb.prototype={
$1(d){var w=this.a
return w.l(new C.dl9(w))},
$S:9}
C.dl9.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dlc.prototype={
$1(d){var w=this.a
return w.l(new C.dl8(w))},
$S:9}
C.dl8.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dld.prototype={
$1(d){var w=this.a
return w.l(new C.dl7(w))},
$S:9}
C.dl7.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dle.prototype={
$0(){var w=this.a
return w.l(new C.dl6(w,this.b))},
$S:0}
C.dl6.prototype={
$0(){var w=this.b
this.a.d.sb2(0,w)
return w},
$S:0}
C.dlf.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga3l()
A.a8(this.b,!1).N(new A.bsy(w,v))},
$S:0}
C.djD.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.djC.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a04(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+48}
C.djH.prototype={
$1(d){return d.a===this.a},
$S:z+50}
C.djG.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bc8(u)
u=u.c
w=u===1?"page":"pages"
w=A.c("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hD,v,v,v)
return A.eh(A.a([A.bO(!1,B.dr,v,v,!0,v,v,v,new C.djE(d),v,v),A.bI(B.y6,v,new C.djF(d),A.bn(B.nF,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,B.Cz,w,v,v,v,v,D.h_b,v)},
$S:18}
C.djE.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.djF.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.djI.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.djJ.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a6(s,t,w[u],t))
return A.ca(A.bZ(B.bI,r,B.br,t,18,14),B.t,t,B.y,t,t,D.bHx,t,t,B.ah)},
$S:346}
C.djB.prototype={
$0(){return this.a.Rn(0,this.b)},
$S:0}
C.djA.prototype={
$0(){return this.a.QN(0,this.b)},
$S:0}
C.cRu.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cRv.prototype={
$0(){return B.d.gH(D.As)},
$S:z+14}
C.cRw.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bS(0,new A.D(d,new A.bP(new A.n(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.m),B.bm,w,w),w),0,0,0)},
$S:2288}
C.dat.prototype={
$1(d){return this.a.l(new C.das(this.b,this.c))},
$S:9}
C.das.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.daS.prototype={
$1(d){return this.a.l(new C.daF())},
$S:2}
C.daF.prototype={
$0(){},
$S:0}
C.daT.prototype={
$1(d){return this.a.l(new C.daE())},
$S:2}
C.daE.prototype={
$0(){},
$S:0}
C.daU.prototype={
$0(){var w=this.a
return w.l(new C.daD(w,this.b))},
$S:0}
C.daD.prototype={
$0(){var w=this.a
return w.d=w.goC().Gt(this.b.a)},
$S:0}
C.daV.prototype={
$0(){var w=this.a
return w.l(new C.daC(w,this.b))},
$S:0}
C.daC.prototype={
$0(){var w=this.a
return w.d=w.goC().cQi(this.b)},
$S:0}
C.daW.prototype={
$1(d){return this.a.l(new C.daB())},
$S:2}
C.daB.prototype={
$0(){},
$S:0}
C.daX.prototype={
$0(){var w=this.a
return w.l(new C.daA(w,this.b))},
$S:0}
C.daA.prototype={
$0(){var w=this.a
return w.d=w.goC().cQn(this.b.a)},
$S:0}
C.daY.prototype={
$1(d){var w=this.a
return w.l(new C.daN(w,d))},
$S:6}
C.daN.prototype={
$0(){var w=this.a
return w.d=w.goC().cRh(this.b)},
$S:0}
C.daZ.prototype={
$1(d){var w=this.a
return w.d=w.goC().aGY(d)},
$S:2}
C.db_.prototype={
$1(d){var w=this.a
return w.d=w.goC().cQq(d)},
$S:2}
C.db1.prototype={
$1(d){var w=this.a
return w.d=w.goC().cRf(d)},
$S:2}
C.db2.prototype={
$1(d){var w=this.a
return w.l(new C.daM(w,d))},
$S:9}
C.daM.prototype={
$0(){var w=this.a
return w.d=w.goC().cR6(this.b)},
$S:0}
C.db3.prototype={
$0(){var w=this.a,v=w.goC(),u=B.a.i(w.gze(0).a.a),t=B.a.i(w.gaE8().a.a)
u=v.bgR(B.a.i(w.gatD().a.a),t,u)
A.a8(this.b,!1).N(u)
return null},
$S:0}
C.bTl.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bTf.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bTe(w,d))},
$S:11}
C.bTe.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bTo.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bTg.prototype={
$0(){var w=this.a
w.Q=D.b3C
w.aeI(1)
w.r.x=null},
$S:0}
C.bTh.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b3C)return
w=new A.e_()
w.cS(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.d9G[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bTk.prototype={
$0(){var w=this.a
w.Q=D.aeJ
w.aeI(2)
w.r.z=null},
$S:0}
C.bTj.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hUo
t.aeI(3)
w=t.r
w.d=s
w.x="I say: "+t.gCO()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.dgR[v.aw(4)]:D.dDx[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bTm.prototype={
$0(){var w=this.a
w.Q=D.b3D
w.CW=this.b
w.cy=1
w.aeI(4)
w.r.f=w.f.a+5},
$S:0}
C.bTn.prototype={
$0(){},
$S:0}
C.bTi.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.bTc.prototype={
$0(){return this.a.Lv(this.b)},
$S:0}
C.bTd.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.bUS.prototype={
$0(){var w=this
return w.a.RH(w.b,0,w.c,w.d)},
$S:0}
C.bUT.prototype={
$0(){var w=this
return w.a.RH(w.b,3,w.c,w.d)},
$S:0}
C.bUU.prototype={
$0(){var w=this
return w.a.RH(w.b,1,w.c,w.d)},
$S:0}
C.bUV.prototype={
$0(){var w=this
return w.a.bVp(w.b,w.c,w.d)},
$S:0}
C.bUW.prototype={
$0(){var w=this
return w.a.RH(w.b,4,w.c,w.d)},
$S:0}
C.bUX.prototype={
$0(){var w=this
return w.a.RH(w.b,2,w.c,w.d)},
$S:0}
C.bUY.prototype={
$0(){var w=this
return w.a.RH(w.b,5,w.c,w.d)},
$S:0}
C.bUZ.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:708}
C.bUR.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a7l[d],p=q.a.a5(0,new A.r(0,-q.b*1.2*124)),o=A.fu(r,B.cw,r,3,r,A.cT(r,r,r,r,r,r,r,r,r,D.fEq,e),B.a7,B.bW,r,B.dG,B.bX)
o.nD(130)
w=o.b.a.c
w=p.aJ(0,new A.r(0,w.gb9(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bv(A.bY(w,v.gb9(v)+12,u+18),B.ih)
u=this.a
v=t.eE(B.dR)
w=$.R()
s=A.L()
s.r=B.dH.gp(0)
u.ar(v,s)
s=A.L()
s.r=D.qH.gp(0)
u.ar(t,s)
w=new A.aG(w.r,B.aj,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.by())
v=A.L()
v.r=D.qH.gp(0)
u.af(w,v)
o.a3(u,new A.r(t.a+9,t.b+6))},
$S:850}
C.bTC.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.bTD.prototype={
$2(d,e){var w=this.a,v=B.o.aQ(w.anq(d),w.anq(e))
if(v!==0)return v
return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.fAo.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.hbs.prototype={
$2(d,e){if(e!=null)J.c6(this.a.c_(0,d,new C.hbt()),e)},
$S:z+64}
C.hbt.prototype={
$0(){return A.a([],x.J)},
$S:z+74}
C.hbu.prototype={
$1(d){return d!==this.a},
$S:3}
C.hbv.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.hbw.prototype={
$1(d){return d!==this.a&&!B.d.aS(this.b,new C.hbr(this.c,d))},
$S:3}
C.hbr.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.hbx.prototype={
$1(d){return d!==this.a},
$S:3}
C.hby.prototype={
$1(d){return d!==this.a},
$S:3}
C.hbz.prototype={
$1(d){return d!==this.a&&!B.d.aS(this.b,new C.hbq(this.c,d))},
$S:3}
C.hbq.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fO0.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.h1R.prototype={
$1(d){return d.Q},
$S:z+15}
C.h1S.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fJP.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fQR.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bOn.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.hbT.prototype={
$2(d,e){return B.o.aQ(C.hF9(d),C.hF9(e))},
$S:226}
C.hbU.prototype={
$1(d){return d!==this.a},
$S:3}
C.h2t.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bMw.prototype={
$0(){var w=this.a
w.ch=!0
w.bak()},
$S:0}
C.bMr.prototype={
$0(){},
$S:0}
C.bMx.prototype={
$1(d){return d.f<=0},
$S:z+28}
C.bMp.prototype={
$0(){},
$S:0}
C.bMq.prototype={
$0(){},
$S:0}
C.bMv.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b4(u,u,u,new C.beh(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.v.j(0.7)
v=A.m(14)
s.push(A.ao(u,A.o(u,A.c(t.dy,u,u,u,u,u,u,D.fMb,B.K,u,u),B.f,u,u,new A.n(w,u,u,v,u,u,B.m),u,u,u,u,B.bT,u,u,u),u,u,14,14,6,u))}return A.ay(B.c1,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bMs(t,e),u,u,u,u,u,u,u,new C.bMt(t,e),u,u,u,u,u,u,u,u,u,new C.bMu(t,e),u,u,u,u,!1,B.a4)},
$S:37}
C.bMs.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bMu.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:23}
C.bMt.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bMo.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.css.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cst.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.csr(w))},
$S:0}
C.csr.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.csu.prototype={
$0(){var w=this,v=w.a
v.gj2()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.csv.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.csw.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.csx.prototype={
$0(){},
$S:0}
C.csy.prototype={
$0(){var w=this.a
w.z=w.XS(++w.e)
w.Q=A.c1(w.gkS()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cso.prototype={
$0(){return A.a8(this.a,!1).hY()},
$S:0}
C.csp.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj2().length,e=i/2,d=new C.csq(i,f,h),a0=g.as,a1=A.a5(a0).k("b9<2>")
a0=A.B(new A.b9(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.c7(new A.hi(a0),new C.csj(g,new A.r(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj2().length!==0&&!B.d.q(g.gj2(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.R4(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cN(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new A.Nc(new C.csk(g,u),new C.csl(g,u),new C.csm(g,u),j,j,new A.bl("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.c(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.fo:B.be,j,j,j,j,j,j,j,j,13,j,j,B.F,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj2().length!==0&&!B.d.q(g.gj2(),-1)){a0=g.e+1>=g.gkS().length?"See my result":"Next family"
g=A.as(C.uB(a0,g.gqt(g),B.cW,B.jB,D.fJ),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.XS(0):s).length))break
if(!B.d.q(g.gj2(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.XS(0)
o=s}else o=s
n=s[u]
n=A.e3(B.z,new C.R4(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.XS(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.re(new A.bt(0,p,t),new C.csn(),new A.ED(u,j,new C.R4(l.b,k,62,!1,j),new A.kP(0.25,new C.R4(m.b,k,62,!1,j),j),new A.kh(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,A.hIV(),!0,!0,j,j,j,j,j,j,!1,B.j_,j,new A.bl("chip-"+r,a0),w),B.b_,B.iY,j,new A.bl("t"+r+"-"+q,a0),v))}++u}g=A.bZ(B.fT,a1,B.br,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:67}
C.csq.prototype={
$1(d){return new A.r(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:797}
C.csj.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.d()}v.push(r==null?0:r)}w=t.gj2().length!==0&&!B.d.q(t.gj2(),-1)
return A.b4(p,p,p,new C.bdJ(q.b,o,v,w,p),B.az)},
$S:63}
C.csl.prototype={
$1(d){return this.a.gj2()[this.b]===-1},
$S:2290}
C.csm.prototype={
$1(d){return this.a.cU8(this.b,d.a)},
$S:2291}
C.csk.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj2()[t]!==-1,r=A.m(18),q=e.length!==0?B.cW.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.cW:B.jS,B.r,2)
u=s?A.lI(new C.csi(),A.as(new C.R4(u.gaGq()[u.gj2()[t]].b,u.gaGq()[u.gj2()[t]].a,62,!1,v),v,v,v),B.nz,B.iY,v,v,new A.bt(0.3,1,x.X),x.i):D.beU
return A.cU(v,u,v,v,B.b_,new A.n(q,v,w,r,v,v,B.m),B.a3,v,100,v,v,v,v,v,88)},
$S:2292}
C.csi.prototype={
$3(d,e,f){return A.e3(B.z,f,e,null,null)},
$S:119}
C.csn.prototype={
$3(d,e,f){return A.dP(f,new A.r(Math.sin(e*24)*8*(1-e),0))},
$S:119}
C.cSy.prototype={
$1(d){return d>=1},
$S:130}
C.cHp.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkS()[w.e].d.length)w.l(new C.cHo(w))},
$S:11}
C.cHo.prototype={
$0(){return this.a.f++},
$S:0}
C.cHx.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cHy.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cHz.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cHw(w))},
$S:0}
C.cHw.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cHA.prototype={
$0(){return this.a.f++},
$S:0}
C.cHB.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cHC.prototype={
$0(){},
$S:0}
C.cHD.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cHr.prototype={
$0(){return A.a8(this.a,!1).hY()},
$S:0}
C.cHs.prototype={
$3(d,e,f){var w=null
return A.lI(new C.cHq(this.a,e),w,B.b_,B.hJ,w,w,new A.bt(w,this.b,x.X),x.i)},
$S:2293}
C.cHq.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cW.j(u.as?0.6:0.15)
t=A.a([new A.ab(0,B.H,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.o(v,A.i7(new A.BP(new A.uV(B.v.j(e),B.MM,v,B.Zn),A.bZ6(A.b4(v,v,v,new C.aCv(u.gkS()[u.e].c,u.as,v),B.az),new A.EI(w,w,B.Xf)),v),B.aq),B.f,v,v,new A.n(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:2294}
C.cHt.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,14*(1-e))),e)},
$S:108}
C.cHu.prototype={
$3(d,e,f){return A.dP(f,new A.r(Math.sin(e*22)*8*(1-e),0))},
$S:119}
C.cHv.prototype={
$0(){return this.a.brv(this.b)},
$S:0}
C.fcC.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.anX$)
v.anX$=w
v.qh$.sp(0,w)
v.arR(u)},
$S:7}
C.fmT.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:11}
C.bUn.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bUm())},
$S:0}
C.bUm.prototype={
$0(){},
$S:0}
C.bUk.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bUi.prototype={
$0(){},
$S:0}
C.bUj.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gNc()
w=s+1>=r.length?3:5
break
case 3:q=C.bI2(p.gaqH(0),0,r.length)
p.l(new C.bUf(p,q))
o=p
w=6
return A.b(C.C0(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.C1(s.d,s.c.a,"school",p.gaqH(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.l(new C.bUg())
w=4
break
case 5:p.l(new C.bUh(p))
p.gqB().Wq(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bUf.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bUg.prototype={
$0(){},
$S:0}
C.bUh.prototype={
$0(){return this.a.x++},
$S:0}
C.bUl.prototype={
$0(){return this.a.Lv(this.b)},
$S:0}
C.bUe.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.fcD.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.r(t,s),q=v.b,p=v.d,o=p?C.hJ8(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.F_
C.T_(q,D.eyB,0,0.2,-0.6,-0.2,null,w,D.exk,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a5(0,new A.r(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.R()
p=A.L()
p.r=D.H4.gp(0)
p.c=3
p.d=B.bH
q.ah(new A.r(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.fcE.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.T_(this.a,D.exH,0,u,0.7,-0.5,null,null,D.Kq,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.fcF.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.T_(this.a,D.ezo,0,0,0.8,-0.5,null,null,D.Kq,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.fcG.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.T_(w.b,D.eyv,0,v,-0.8,-0.5,null,null,D.Kq,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.fcH.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.r(34,-122+Math.sin(w*5)*5)
else v=v?D.eyz:D.F_
C.T_(p,D.ey_,0,t,0,-0.6,null,v,D.Kq,3,0,s,1.3,u,0,w,0)
q=q.ceb(new A.r(222,455),9)
$.R()
w=A.L()
w.r=B.cW.gp(0)
p.af(q,w)},
$S:0}
C.fcI.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:708}
C.bU0.prototype={
$2(d,e){return d+e},
$S:70}
C.bUb.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bUc.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bUd.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj2()[u.b]=s
t.gj2()[u.d]=t.y
w=t.as
v=t.qh$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bU7.prototype={
$1(d){return d},
$S:102}
C.bU6.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qh$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bU8.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bU9.prototype={
$0(){},
$S:0}
C.bUa.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FX(++s.f)
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
C.bU2.prototype={
$0(){return A.a8(this.a,!1).hY()},
$S:0}
C.bU3.prototype={
$2(d,e){var w=this.a
w=w.gkS()[w.f].e
return B.o.aQ(w[d],w[e])},
$S:70}
C.bU4.prototype={
$2(d,e){var w=null,v=C.hjL(new A.au(A.aS(1/0,e.a,e.b),A.aS(1/0,e.c,e.d))),u=this.a
return A.ay(B.c1,new A.e7(A.b4(w,w,w,new C.bkY(u,u.qh$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bU1(u,v),w,w,w,w,!1,B.a4)},
$S:37}
C.bU1.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj2().length
u=B.o.D(B.i.be((t.a-s.a)/r/450*v),0,v-1)
w.d42(w.gj2()[u])}},
$S:23}
C.bU5.prototype={
$1(d){var w=this.a
return w.gkS()[w.f].d[d]},
$S:81}
C.duA.prototype={
$2(d,e){return 0},
$S:70}
C.bTN.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bTM())},
$S:0}
C.bTM.prototype={
$0(){},
$S:0}
C.bTL.prototype={
$0(){},
$S:0}
C.bTF.prototype={
$0(){},
$S:0}
C.bTG.prototype={
$0(){},
$S:0}
C.bTK.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.BM},
$S:0}
C.bTJ.prototype={
$1(d){var w=null,v=this.a.gqB(),u=A.c(d,w,w,w,w,w,w,D.aXF,w,w,w),t=v.gbnW(0)
return A.ay(B.c1,A.x(A.a([u,B.bC,A.c(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aXS,w,w,w)],x.p),B.B,w,B.e,B.h,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbtS(v),w,w,w,w,w,w,!1,B.a4)},
$S:138}
C.bTH.prototype={
$0(){return this.a.Lv(this.b)},
$S:0}
C.bTI.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.bTE.prototype={
$0(){return A.a8(this.a,!1).hY()},
$S:0}
C.e4U.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e4V.prototype={
$1(d){return this.a},
$S:39}
C.e4W.prototype={
$0(){var w=this.a
return w.d=w.gTp().bgk(this.b)},
$S:0}
C.e4S.prototype={
$1(d){return new C.Uq(this.a,null)},
$S:z+30}
C.e4T.prototype={
$1(d){return d.a===this.a.a},
$S:z+31}
C.e4R.prototype={
$1(d){var w=null,v=this.a.b
v=A.c('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hD,w,w,w)
return A.eh(A.a([A.bO(!1,B.aZe,w,w,!0,w,w,w,new C.e4P(d),w,w),A.bO(!1,D.h6Q,w,w,!0,w,w,w,new C.e4Q(d),w,w)],x.p),w,w,D.fJ,v,w,w,w,w,D.fUa,w)},
$S:18}
C.e4P.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e4Q.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.e4O.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.U(A.b2(w,w,w,w,w,B.t,w,A.c(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e4X.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.v(w.h(0,d)):"NEW"},
$S:13}
C.e4Y.prototype={
$0(){var w=this.a,v=this.b,u=C.bFK(v,10,w.r,!1)
return w.uH(C.hsW(w.a.d,"kahoot",u,w.gb7R(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e4Z.prototype={
$0(){var w=this.a
return w.uH(new C.amJ(this.b,w.a.d,w.r,null))},
$S:0}
C.e5_.prototype={
$0(){var w=this.a
return w.uH(new C.akT(this.b,w.a.d,w.r,null))},
$S:0}
C.e52.prototype={
$0(){var w=this.a
return w.uH(new C.avN(this.b,w.a.d,w.r,null))},
$S:0}
C.e53.prototype={
$0(){var w=this.a
return w.uH(new C.azJ(this.b,w.a.d,w.r,null))},
$S:0}
C.e54.prototype={
$0(){var w=this.a
return w.uH(new C.amM(this.b,w.a.d,w.r,null))},
$S:0}
C.e55.prototype={
$0(){var w=this.a
return w.uH(new C.amQ(this.b,w.a.d,w.r,null))},
$S:0}
C.e56.prototype={
$0(){var w=this.a
return w.uH(new C.amS(this.b,w.a.d,w.r,null))},
$S:0}
C.e57.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d4n()
return v.uH(C.hsW(v.a.d,"creator_"+u.a,w,v.gb7R(),"A game by the family",t,this.c.a))},
$S:0}
C.e58.prototype={
$0(){return this.a.Pi(this.b)},
$S:0}
C.e59.prototype={
$0(){return this.a.Yj(0,this.b)},
$S:0}
C.e50.prototype={
$0(){return this.a.Pi(null)},
$S:0}
C.e51.prototype={
$0(){return this.a.L(x.q).f.U(D.fxj)},
$S:0}
C.bTZ.prototype={
$0(){var w=this.a
w.d=D.b2I
w.z=3},
$S:0}
C.bU_.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aQT()}else w.l(new C.bTY(w))},
$S:11}
C.bTY.prototype={
$0(){return this.a.z--},
$S:0}
C.bTP.prototype={
$0(){var w=this.a
w.d=D.aep
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bTQ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bTO(w))
if(w.as<=0){d.a1(0)
w.b7N(-1)}},
$S:11}
C.bTO.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bTV.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.XW},
$S:0}
C.bTW.prototype={
$0(){return this.a.e++},
$S:0}
C.bTS.prototype={
$0(){var w=this.a
w.d=D.b2J
w.ay=this.b},
$S:0}
C.bTT.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bTX.prototype={
$2(d,e){return B.o.aQ(e.b,d.b)},
$S:2295}
C.bTU.prototype={
$0(){return this.a.Lv(this.b)},
$S:0}
C.bTR.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.bTp.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ax()
s=A.a([new A.at(new A.bd(s,B.b6,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.at(new A.bd(u,B.b6,B.aP),r))}return s},
$S:2296}
C.bTq.prototype={
$0(){return this.a.gDo().c.push(C.hdw(null,0,20,""))},
$S:0}
C.bTA.prototype={
$1(d){var w=null
return A.bB(w,new A.b6(4,A.m(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.ds,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.Fw,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:277}
C.bTz.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gDo().c,m=this.b,l=n[m],k=o.chm(l),j=B.c.j(0.06),i=A.m(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.c("Question "+(m+1),p,p,p,p,p,p,D.LK,p,p,p),B.aY],g)
if(n.length>1)f.push(A.aH(p,p,p,p,B.atf,p,p,p,new C.bTu(o,m),p,p,p,p,p,p))
n=J.a2(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.h,0,p,p),A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.al,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bTv(l),p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.dn,!0,B.a7,p,B.ao,p,p,p,p),B.P],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aFg[v]
t=D.aEX[v]
s=v+1
f.push(new A.D(B.eK,new A.c3(B.aL,B.e,B.h,B.l,p,B.p,p,0,A.a([A.c(u,p,p,p,p,p,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.aa,new A.bx(1,B.ba,A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.al,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bTw(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.dn,!0,B.a7,p,B.ao,p,p,p,p),p),new W.PF(v,l.c,new C.bTx(o,l),p,!1,D.lS,p,p,p,p,p,!1,!1,p,E.b3q,p,p,p,p,p,w)],g),p),p))}f.push(D.fZR)
f.push(B.ak)
n=A.a([D.fTe,B.aa],g)
for(r=0;r<3;++r){q=D.ciA[r]
n.push(new A.D(B.f7,A.jC(p,p,p,A.c(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bTy(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.h,0,p,p))
return A.o(p,A.x(f,B.B,p,B.e,B.h,0,B.p),B.f,p,p,new A.n(j,p,h,i,p,p,B.m),p,p,p,B.kH,B.bl,p,p,p)},
$S:157}
C.bTu.prototype={
$0(){var w=this.a
return w.l(new C.bTt(w,this.b))},
$S:0}
C.bTt.prototype={
$0(){return B.d.cH(this.a.gDo().c,this.b)},
$S:0}
C.bTv.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bTw.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bTx.prototype={
$1(d){return this.a.l(new C.bTs(this.b,d))},
$S:170}
C.bTs.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bTy.prototype={
$1(d){return this.a.l(new C.bTr(this.b,this.c))},
$S:9}
C.bTr.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e6z.prototype={
$0(){var w=this.a
w.wE()
w.a.bv()
w.a.qu()},
$S:0}
C.e6y.prototype={
$0(){var w=this.a
w.wE()
w.a.bv()
w.a.qu()},
$S:0}
C.e6B.prototype={
$0(){var w=this,v=w.b
if(J.cL(v)||J.cu(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e6C.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e6D.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e6x.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e6A.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e6F.prototype={
$0(){this.a.PE()
return null},
$S:0}
C.e6E.prototype={
$0(){return this.a.Fg(this.b)},
$S:0}
C.e6_.prototype={
$1(d){var w=null,v=this.a,u=A.c(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.c(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bO(!1,B.dr,w,w,!0,w,w,w,new C.e5Y(d),w,w),r=A.bn(B.bR,w,w,w,w,w,w,w,w,w,w,w)
return A.eh(A.a([s,A.bI(A.c(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e5Z(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e5Y.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e5Z.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.e60.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.cQM(this.b)},
$S:0}
C.e5V.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aWw(w.b,w.c,w.d)},
$S:7}
C.e5m.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e5n.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e5E.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.HA(t.a.c),$async$$0)
case 2:s=r.nA(q.dJ(e,new C.e5C(t)))
if(s!=null&&t.c!=null)t.l(new C.e5D(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e5C.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e5D.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e5F.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e5G.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e5U.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=this.b
v.d=u.cRy(C.hJi(w),w)},
$S:0}
C.e5B.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.d()
w=v.a.c
return new C.WM(u,w,C.aS7(u,w),new C.e5A(v),null)},
$S:z+35}
C.e5A.prototype={
$1(d){return this.bpk(d)},
bpk(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.l(new C.e5z(s,d))
w=3
return A.b(s.uD(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:856}
C.e5z.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.bgk(this.b)},
$S:0}
C.e5R.prototype={
$1(d){return d.as},
$S:z+1}
C.e5S.prototype={
$1(d){var w=this
return new A.e2(new C.e5Q(w.a,w.b,w.c,w.d,w.e),null)},
$S:21}
C.e5Q.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.ek:B.c,h=A.m(26),g=A.K(B.bR.j(0.5),B.r,1.5),f=A.o(k,D.bXT,B.f,k,k,new A.n(B.bR.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.c("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.d()
w=x.p
a0=A.E(A.x(A.a([e,A.c(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.B,k,B.e,B.h,0,B.p),1)
f=A.A(A.a([f,B.bb,a0,A.aH(k,k,k,k,A.W(B.cA,j?B.bu:B.bj,k,k,k,k),k,k,k,new C.e5K(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.h,0,k,k)
e=A.c("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bR:B.bR.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.av(B.bR,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bR
a0.push(A.ay(k,A.cU(k,A.c(m,k,k,k,k,k,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b_,new A.n(q,k,new A.bE(n,n,n,n),new A.bb(p,p,p,p),k,k,B.m),B.hk,k,k,k,k,B.D2,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e5L(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bZ(B.bI,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c9g,new A.D(D.bHY,f,k),new A.D(D.bHP,e,k),new A.D(B.r0,a0,k),new A.D(I.aov,A.c(v,k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.W(A_.ar7,j?B.bu:B.bj,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bHR,A.A(A.a([a0,B.ar,A.E(A.c(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,k,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.ays(k,B.bR,k,k,!1,B.y,k,k,k,k,k,k,new C.e5M(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.h,0,k,k),k))}f.push(B.aA)
j=A.m(20)
e=A.a([new A.ab(0,B.H,B.aD.j(0.35),B.hR,12)],x.V)
f.push(A.ay(k,A.o(k,A.A(A.a([D.fTA,B.bb,D.bMj,D.bYy],w),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.n(k,k,k,j,e,D.cd5,B.m),k,k,k,B.ia,B.bG,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e5N(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.wZ,A.A(A.a([A.E(A.dV(B.dr,new C.e5O(a1),k),1),B.ar,A.E(A.bI(F.aZF,k,new C.e5P(t,a1),A.bn(B.bR,k,k,k,k,k,B.cm,k,k,k,k,k)),1)],w),B.l,k,B.e,B.h,0,k,k),k))
return A.bm(!0,A.o(k,A.ca(A.x(f,B.B,k,B.e,B.M,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.aq,k,k,new A.n(i,k,g,h,k,k,B.m),k,k,k,B.zh,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:93}
C.e5K.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e5L.prototype={
$0(){return this.b.$1(new C.e5J(this.a,this.c))},
$S:0}
C.e5J.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e5M.prototype={
$1(d){var w=this.a
w.l(new C.e5H(w,d))
this.b.$1(new C.e5I())},
$S:9}
C.e5H.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e5I.prototype={
$0(){},
$S:0}
C.e5N.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(new A.aIH(!0,w))
return null},
$S:0}
C.e5O.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e5P.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(new A.aIH(!1,w))
return null},
$S:0}
C.e5T.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cRm(this.b.b)
w.r.a8(0)},
$S:0}
C.e5a.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.d()
s=C.ajD(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hCf(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e5b.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aGV(w)},
$S:0}
C.e62.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return new C.aeX(this.b,w,this.c,null)},
$S:z+37}
C.e5X.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.ek:B.c,t=A.m(20),s=A.W(B.kK,B.aV,w,w,w,36),r=A.c("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.c(p,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.c("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.M,0,B.p)
return A.eh(A.a([A.bI(D.haF,w,new C.e5W(d),A.bn(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.ba(t,B.a1),r,w)},
$S:18}
C.e5W.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e5c.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e5d.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e5e.prototype={
$1(d){return d.a},
$S:z+8}
C.e5f.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.d()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.i8(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aGV(w)},
$S:0}
C.e5j.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.d()
q=C.ajD(q)
w=A.T(q).k("X<1>")
q=A.B(new A.X(q,new C.e5h(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hCf(v.e,null,r,v.f,v.r,new C.e5i(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e5i.prototype={
$0(){return this.a.abR(this.b)},
$S:0}
C.e5h.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e5k.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.f
v=A.T(w).k("N<1,i8>")
w=A.B(new A.N(w,new C.e5g(this.b),v),v.k("aj.E"))
u.d=t.aGV(w)},
$S:0}
C.e5g.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+39}
C.e61.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e5w.prototype={
$1(d){return d.length!==0},
$S:3}
C.e5x.prototype={
$1(d){var w=this
return new A.e2(new C.e5v(w.a,w.b,w.c,w.d),null)},
$S:21}
C.e5v.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.ek:B.c,r=A.c("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aS:B.aw,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.c("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bj,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.c("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bj,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.N(o,new C.e5r(u,e,o),A.T(o).k("N<1,w>")))
p.push(B.P)
u=w.d
p.push(A.aN(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bB(v,new A.b6(4,A.m(12),B.dw),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.al,v,v,v,v,v,B.mK,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a7,v,B.ao,v,v,v,v))
p=A.x(p,B.am,v,B.e,B.M,0,B.p)
t=w.a
return A.eh(A.a([A.bO(!1,B.dr,v,v,!0,v,v,v,new C.e5s(d),v,v),A.bI(B.LT,v,new C.e5t(t,u,o,e),A.bn(B.bR,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.fYc,v,new C.e5u(t,u,o,d),A.bn(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a6(360,v,p,v),v,v,v,v,r,v)},
$S:220}
C.e5r.prototype={
$1(d){var w=null
return A.dK(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.c63,w,w,w,new C.e5q(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:2297}
C.e5q.prototype={
$0(){return this.a.$1(new C.e5o(this.b,this.c))},
$S:0}
C.e5o.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e5s.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e5t.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e5p(w.c,u))
v.bO(0,B.ci)}},
$S:0}
C.e5p.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e5u.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a8(w.d,!1).N(!0)},
$S:0}
C.e5y.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cS0(this.b,D.v9,C.Hy(v,w.a.c))},
$S:0}
C.e69.prototype={
$1(d){return d.as},
$S:z+1}
C.e6a.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j7(this.b,w)},
$S:0}
C.e6b.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
v=C.izz(v)
return w.X6(v==null?null:v.a)},
$S:0}
C.e6c.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.d()
w=l.r
v=C.ib7(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcn(k)){k=A.aS(1/0,e.a,e.b)
s=A.aS(1/0,e.c,e.d)
l.cz1(new A.au(u,t),v.gbn1(),new A.au(k,s))}k=A.m(22)
s=this.b.a
r=s?D.d7l:D.d5f
q=A.K(s?B.ds:D.bmO,B.r,1)
p=A.m(22)
o=A.bS(0,A.b4(m,m,m,new C.bh1(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.o(m,A.bu(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bS(0,A.v7(new A.P(n,n,n,n),new A.a6(u,t,new C.bhZ(l.d,v,l.f,w,new C.e65(l),l.gciy(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bzW(s,new C.e66(l,e),new C.e67(l,e),new C.e68(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.n(m,m,q,k,m,new A.a7(B.aX,B.b1,B.x,r,m,m),B.m),m,m,m,B.any,m,m,m,m)},
$S:175}
C.e65.prototype={
$1(d){var w=this.a
w.l(new C.e63(w,d))},
$S:2}
C.e63.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.I(0,v)},
$S:0}
C.e66.prototype={
$0(){var w=this.b
return this.a.bes(1.25,new A.au(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e67.prototype={
$0(){var w=this.b
return this.a.bes(0.8,new A.au(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e68.prototype={
$0(){var w=this,v=w.b
return w.a.aWw(new A.au(A.aS(1/0,v.a,v.b),A.aS(1/0,v.c,v.d)),new A.au(w.c,w.d),w.e.gbn1())},
$S:0}
C.e6d.prototype={
$0(){var w=this.a
return w.l(new C.e64(w))},
$S:0}
C.e64.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e5l.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.d()
w=2
return A.b(A.fK(new A.fA(s.c)),$async$$0)
case 2:t.yG("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.djN.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.blP(u,C.hNZ(v.c,u),new C.djM(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+40}
C.djM.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.djO.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bpa(d.d,d.c,u.f.q(0,d.a),new C.djL(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+41}
C.djL.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fNr.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.nA(new A.cM(new A.X(v,new C.fNs(d),w.k("X<1>")),new C.fNt(),w.k("cM<1,p>")))},
$S:z+19}
C.fNs.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fNt.prototype={
$1(d){return d.a},
$S:z+8}
C.fNp.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fNq.prototype={
$1(d){return d.b},
$S:z+8}
C.fNw.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.nA(new A.cM(new A.X(v,new C.fNx(d),w.k("X<1>")),new C.fNy(),w.k("cM<1,p>")))},
$S:z+19}
C.fNx.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fNy.prototype={
$1(d){return d.a},
$S:z+8}
C.fNu.prototype={
$1(d){var w,v=A.ex([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+43}
C.fNv.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.djQ.prototype={
$0(){return this.a},
$S:z+44}
C.dk6.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:222}
C.djZ.prototype={
$2(d,e){var w=this.a.c_(0,d,new C.dk_()),v=J.a2(w)
if(!v.q(w,e))v.I(w,e)},
$S:122}
C.dk_.prototype={
$0(){return A.a([],x.s)},
$S:688}
C.djY.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eD(w,e)
return w===!0},
$S:262}
C.djR.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.djX.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.djW.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.I(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aT(v==null?D.Ei:v)
u=1
while(v.C())u+=s.$2(v.gP(v).a,e)
v=s.b.h(0,d)
v=J.aT(v==null?B.Z:v)
while(v.C()){t=v.gP(v)
if(e.q(0,t))continue
e.I(0,t)
t=w.h(0,t)
t=J.aT(t==null?D.Ei:t)
while(t.C())u+=s.$2(t.gP(t).a,e)}return u},
$S:2299}
C.djS.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dk0.prototype={
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
t=J.aT(t==null?D.Ei:t)
while(t.C()){r=t.gP(t)
if(r.a!==a9&&!B.d.aS(w,new C.dk1(r)))w.push(r)}}B.d.bq(w,new C.dk2(a8))
B.d.b_(w,new C.dk3())
q=C.ib6(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.f5j],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bsh(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:2300}
C.dk1.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dk2.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dk3.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.dk4.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a2(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b9(v,A.a5(v).k("b9<2>")).cC(0,0,B.or)+88-w.gH(n).a}else u=0
for(w=J.a2(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:641}
C.dk5.prototype={
$1(d){return 16+d*156},
$S:159}
C.djP.prototype={
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
o.y.push(new C.L8(d,new A.r(e+t,w),s,s.length))}},
$S:213}
C.djT.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aLQ(new A.r(v.a,v.b+28),new A.r(w.a,w.b+28),!0,null))},
$S:122}
C.djU.prototype={
$1(d){return d.a===this.a},
$S:z+45}
C.djV.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:671}
C.dk7.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:671}
C.dk8.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:493}
C.dk9.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:209}
C.dka.prototype={
$1(d){return d>=0.5},
$S:130}
C.fsu.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hh(A.aM(!1,v,!0,new A.a6(38,38,A.W(d,this.a.c?B.c:B.cu,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:2302}
C.f2n.prototype={
$1(d){var w=null,v=A.m(8),u=B.bR.j(0.12),t=A.m(8)
return new A.D(B.na,A.aM(!1,v,!0,A.o(w,A.c("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fIY,B.K,w,w),B.f,w,w,new A.n(u,w,w,t,w,w,B.m),w,w,w,w,B.Pi,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f2m(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+46}
C.f2m.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dAj.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dAi.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.c("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.ns,B.K,w,w)
return A.eh(A.a([A.bO(!1,B.dr,w,w,!0,w,w,w,new C.dAg(d),w,w),A.bO(!1,A.c("Delete",w,w,w,w,w,w,A.l(w,w,B.n1,w,w,w,w,w,w,w,w,w,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dAh(d),w,w)],x.p),B.b9,B.CY,w,u,D.bIT,w,D.bKS,new A.ba(v,B.a1),w,w)},
$S:18}
C.dAg.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dAh.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dAs.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dAt.prototype={
$1(d){var w=this.a
return w.l(new C.dAr(w,d))},
$S:z+47}
C.dAr.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dAu.prototype={
$1(d){var w=null
return A.qQ(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dAx.prototype={
$1(d){var w=this.a
return w.l(new C.dAq(w,d))},
$S:35}
C.dAq.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dAw.prototype={
$1(d){var w=null
return A.qQ(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dAy.prototype={
$1(d){var w=this.a
return w.l(new C.dAp(w,d))},
$S:35}
C.dAp.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dAz.prototype={
$0(){var w=this.a
return w.l(new C.dAo(w))},
$S:0}
C.dAo.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dAA.prototype={
$0(){var w=this.a
return w.l(new C.dAn(w))},
$S:0}
C.dAn.prototype={
$0(){return++this.a.at},
$S:0}
C.dAB.prototype={
$0(){var w=this.a
return w.l(new C.dAm(w))},
$S:0}
C.dAm.prototype={
$0(){return--this.a.ax},
$S:0}
C.dAC.prototype={
$0(){var w=this.a
return w.l(new C.dAl(w))},
$S:0}
C.dAl.prototype={
$0(){return++this.a.ax},
$S:0}
C.dAD.prototype={
$1(d){var w=this.a
return w.l(new C.dAk(w,d))},
$S:9}
C.dAk.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dAv.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dAE.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bR.j(0.18)
else w=q.c.a?B.ek:B.c
v=A.m(12)
if(p)u=B.bR
else u=(q.c.a?B.em:B.bO).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bR
else t=q.c.a?B.bu:B.bj
t=A.W(f,t,r,r,r,18)
if(p)s=B.bR
else s=q.c.a?B.bu:B.bj
return A.E(A.aF(!1,B.a3,!0,r,A.aM(!1,o,!0,A.cU(r,A.x(A.a([t,B.at,A.c(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.h,0,B.p),r,r,B.b_,new A.n(w,r,u,v,r,r,B.m),B.eJ,r,r,r,r,B.jU,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dAF(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+49}
C.dAF.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dAO.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.cgS.prototype={
$2(d,e){return new A.bz(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:106}
C.cgZ.prototype={
$1(d){return d.ak()},
$S:z+5}
C.ch_.prototype={
$2(d,e){var w=J.b8(e,new C.cgY(),x.a)
w=A.B(w,w.$ti.k("aj.E"))
return new A.bz(d,w,x.d2)},
$S:z+51}
C.cgY.prototype={
$1(d){return d.ak()},
$S:z+12}
C.cgU.prototype={
$1(d){return C.amV(A.a1(d,x.N,x.z))},
$S:z+9}
C.cgV.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cgW.prototype={
$1(d){return C.hsV(A.a1(d,x.N,x.z))},
$S:z+11}
C.cgX.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.ch3.prototype={
$1(d){return new A.aIT(d.f.length,d.a,d.b)},
$S:z+53}
C.ch4.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:655}
C.ch0.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.ch1.prototype={
$1(d){return d.cQZ(C.Hy(d,this.a))},
$S:z+54}
C.e6m.prototype={
$1(d){return C.uC(d,this.a.a.c)},
$S:z+3}
C.e6n.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e6r.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e6s.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e6j.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2s(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zf("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pG(r.c,r.e),$async$$0)
case 4:s.zf(p)
w=5
return A.b(s.Kw(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e6k.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2s(r.d,q,r.e,t.b),$async$$0)
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
C.e6l.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.WP(n.d,m,n.e,r.b),$async$$0)
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
return A.b(o.Kw(),$async$$0)
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
C.e6q.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2r(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.zf("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a8(r,!1).cb(A.ea(new C.e6p(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pG(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e6p.prototype={
$1(d){var w=this.b
return new C.a13(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+83}
C.e6o.prototype={
$1(d){return D.hON},
$S:z+56}
C.e6u.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e6v.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e6t(w,d)
return new A.D(B.d4,new C.bi2(this.b,d.c,d.a,w,null),null)},
$S:2303}
C.e6t.prototype={
$0(){return this.a.YY(this.b.b)},
$S:0}
C.e6e.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e6f.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e6g.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e6h.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e6i.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e6w.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.X(s,"NGMYFTSYNC2"))t=!A.cW(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a8(this.b,!1).N(s)
return}},
$S:161}
C.dSq.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+57}
C.dSr.prototype={
$0(){return B.d.gH(D.a7K)},
$S:z+58}
C.dSs.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.d()
t=t.x
t===$&&A.d()
v=v.e
v===$&&A.d()
v=v.x
v===$&&A.d()
return A.b4(A.as(A.W(this.b.d,B.c.j(0.95),w,w,D.deQ,44),w,w,w),w,w,new C.bmX(u,t,v,w),B.az)},
$S:63}
C.h4_.prototype={
$1(d){return A.oI(new C.h3Z(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:139}
C.h3Z.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.ek:B.c,p=A.a([new A.ab(0,B.H,B.v.j(r?0.35:0.08),B.u0,24)],x.V),o=r?B.em:B.bO
o=A.o(t,t,B.f,t,t,new A.n(o,t,t,A.m(99),t,t,B.m),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bR.j(0.18)],x.O)
w=A.o(t,D.c00,B.f,t,t,new A.n(t,t,t,A.m(12),t,new A.a7(B.a5,B.a9,B.x,w,t,t),B.m),t,40,t,t,t,t,t,40)
v=A.c("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aS:B.aw,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.o(t,A.x(A.a([B.S,o,new A.D(B.aoz,A.A(A.a([w,B.bb,A.E(A.x(A.a([v,A.c("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bu:B.bj,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.B,t,B.e,B.h,0,B.p),1)],u),B.l,t,B.e,B.h,0,t,t),t),A.E(A.iE(!0,t,e,B.y,D.fvm,new C.h3Y(this.b,s),20,B.ao4,t,B.ah,!1),1)],u),B.l,t,B.e,B.h,0,B.p),B.f,t,t,new A.n(q,t,t,B.lo,p,t,B.m),t,t,t,t,t,t,t,t)},
$S:126}
C.h3Y.prototype={
$2(d,e){var w=null,v=D.a7K[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.K(s?B.em:B.bO,B.r,1),q=A.a([new A.ab(0,B.H,B.v.j(s?0.35:0.08),B.eA,8)],x.V),p=A.m(15),o=A.E(new C.a7T(v.a,!0,w),1),n=s?B.k8:B.iG,m=A.c(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aS:B.aw,w,w,w,w,w,w,w,w,13,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a3,!0,w,A.aM(!1,u,!0,A.eG(A.bu(p,A.x(A.a([o,A.o(w,A.x(A.a([m,A.c(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bu:B.bj,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.B,w,B.e,B.h,0,B.p),B.f,n,w,w,w,w,w,w,B.jV,w,w,w)],l),B.am,w,B.e,B.h,0,B.p),B.aq),w,new A.n(w,w,r,t,q,w,B.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.h3X(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:86}
C.h3X.prototype={
$0(){A.a8(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cqK.prototype={
$0(){return this.a.aia(this.b)},
$S:0}
C.h3n.prototype={
$1(d){return D.hJh},
$S:z+59}
C.hba.prototype={
$1(d){var w=this
return new C.a2S(w.a,w.b,w.c,w.d,null)},
$S:z+60}
C.h3r.prototype={
$1(d){return new C.a_H(this.a,null)},
$S:z+61}
C.h3q.prototype={
$1(d){return D.hKi},
$S:z+62}
C.dbf.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dbg.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.dbe(w,d))},
$S:35}
C.dbe.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dbh.prototype={
$1(d){return this.a.L9()},
$S:2}
C.dbi.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dbb.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dbc.prototype={
$1(d){return this.a.L9()},
$S:2}
C.dbd.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.cJ6.prototype={
$0(){},
$S:0}
C.cJc.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.cJd.prototype={
$0(){return this.a.aRL(-1)},
$S:0}
C.cJe.prototype={
$1(d){return this.a.l(new C.cJb())},
$S:2}
C.cJb.prototype={
$0(){},
$S:0}
C.cJf.prototype={
$0(){return this.a.aRL(1)},
$S:0}
C.cJg.prototype={
$1(d){return this.a.l(new C.cJa())},
$S:2}
C.cJa.prototype={
$0(){},
$S:0}
C.cJh.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.c(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.em:B.bO
return A.v_(u,u,B.b5,r,u,new C.cJ9(t,d),B.x2,s,w,u,new A.av(v,1,B.r,-1),B.cl)},
$S:2304}
C.cJ9.prototype={
$1(d){var w=this.a
return w.l(new C.cJ7(w,this.b))},
$S:9}
C.cJ7.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cJi.prototype={
$1(d){return this.a.l(new C.cJ8())},
$S:2}
C.cJ8.prototype={
$0(){},
$S:0}
C.cJj.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.fs_.prototype={
$1(d){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length!==0)A.a8(this.b,!1).N(w)},
$S:2}
C.fs0.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.fs1.prototype={
$0(){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a8(this.b,!1).N(w)},
$S:0}
C.frY.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=q.a
v=w.d
u=w.f
t=q.gbEm()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b4(new A.D(D.bKR,new A.e7(A.o(r,q.a.c,B.f,r,r,new A.n(r,r,r,s,r,r,B.m),r,r,r,r,w,r,r,r),r),r),new C.bzL(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:63}
C.frZ.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=B.dO.aB(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.ap(B.aV,B.bR,w)
s.toString
s=A.a([B.b5,s,B.aV],x.O)
return A.aF(!1,B.a3,!0,p,A.aM(!1,v,!0,A.eG(D.eD9,r,new A.n(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a7(new A.dg(-1.2+t,-0.5),new A.dg(1.2-t,0.8),B.x,s,r,r),B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:154}
C.h1E.prototype={
$1(d){return A.v(d.h(0,1))+","},
$S:60}
C.f_x.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f_o.prototype={
$0(){return this.a.e=!0},
$S:0}
C.f_p.prototype={
$0(){return this.a.e=!1},
$S:0}
C.f_v.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.d()
w.a=v.c
return new A.e2(new C.f_u(w,this.b),null)},
$S:21}
C.f_u.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.ek:B.c,t=A.m(20),s=A.c("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eE(w,u,new A.D(B.aot,A.x(A.a([s,B.ak,A.c("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hz4(new C.f_r(r,e),r.a),B.aA,A.A(A.a([A.E(A.dV(B.dr,new C.f_s(d),w),1),B.ar,A.E(A.bI(B.X9,w,new C.f_t(r,d),A.bn(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.h,0,w,w)],q),B.am,w,B.e,B.M,0,B.p),w),w,w,w,w,w,B.d7,w,new A.ba(t,B.a1),w)},
$S:110}
C.f_r.prototype={
$1(d){return this.b.$1(new C.f_q(this.a,d))},
$S:35}
C.f_q.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.f_s.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.f_t.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(w)
return null},
$S:0}
C.f_w.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.U3(this.b)},
$S:0}
C.f_j.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.bgq(w)},
$S:0}
C.f_n.prototype={
$1(d){return this.bpH(d)},
bpH(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Ms(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j7(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f_m.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.d
v=A.T(w).k("X<1>")
w=A.B(new A.X(w,new C.f_l(this.b),v),v.k("M.E"))
u.d=t.bgq(w)},
$S:0}
C.f_l.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.f_y.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j7(this.b,w)},
$S:0}
C.f_z.prototype={
$1(d){return this.a.bIB(d,this.b)},
$S:z+65}
C.f_k.prototype={
$0(){return this.a.abQ(this.b)},
$S:0}
C.haY.prototype={
$1(d){return new C.afh(this.a,this.b,this.c,null)},
$S:z+66}
C.f_B.prototype={
$0(){return this.a.a1_(this.b)},
$S:0}
C.f_C.prototype={
$0(){return this.a.Rj(this.b)},
$S:0}
C.f_D.prototype={
$0(){return this.a.Fb(this.b)},
$S:0}
C.f_E.prototype={
$0(){return this.a.a10(this.b)},
$S:0}
C.f_A.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.f_e.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f_f.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.f_g.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.f_i.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qA(),$async$$0)
case 2:if(t.c!=null)t.l(new C.f_h(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f_h.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.f00.prototype={
$2(d,e){return d+e.gxO()},
$S:z+69}
C.f_X.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f_Y.prototype={
$0(){return this.a.f=!1},
$S:0}
C.f_I.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.ek:B.c,s=A.m(24),r=A.o(v,D.c0v,B.f,v,v,new A.n(B.aB.j(u?0.18:0.08),v,A.K(B.aB.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.c("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aS:B.aw,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.c("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bj,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.aw
u=u?B.em:B.bO
w=x.p
return A.eE(v,t,new A.D(B.x1,A.x(A.a([r,B.aO,q,B.P,p,B.dc,A.A(A.a([A.E(A.dV(B.om,new C.f_G(d),A.dh(v,v,v,v,v,v,v,v,v,o,v,v,B.f8,v,new A.ba(A.m(14),B.a1),new A.av(u,1,B.r,-1),v,v,v,v)),1),B.ar,A.E(A.bI(D.hez,v,new C.f_H(d),A.bn(B.aB,v,v,v,v,v,B.f8,v,new A.ba(A.m(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.h,0,v,v)],w),B.l,v,B.e,B.M,0,B.p),v),v,v,v,v,v,B.d7,v,new A.ba(s,B.a1),v)},
$S:44}
C.f_G.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.f_H.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.f_R.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.ek:B.c,i=A.m(28),h=A.a([new A.ab(0,B.H,B.v.j(k?0.35:0.08),B.h0,28)],x.V),g=k?D.dmF:B.a71,f=x.p
g=A.o(m,A.x(A.a([A.o(m,m,B.f,m,m,new A.n(B.c.j(0.45),m,m,A.m(99),m,m,B.m),m,4,m,m,m,m,m,40),B.aA,D.fos,B.at,new A.bK(B.a5,m,m,A.c("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cF,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.h,0,B.p),B.f,m,m,new A.n(m,m,m,m,m,new A.a7(B.ay,B.aC,B.x,g,m,m),B.m),m,m,m,m,B.aox,m,m,1/0)
w=A.c("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bj,m,m,m,m,m,m,m,m,11,m,m,B.F,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b9g(B.b2,B.jE,new C.f_O(v,d),l,"Camera import","Scan QR"),1),B.ar,A.E(v.b9g(B.cD,B.A8,new C.f_P(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.h,0,m,m)
t=A.c("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bj,m,m,m,m,m,m,m,m,11,m,m,B.F,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aB.j(k?0.14:0.06)
q=A.m(16)
p=A.K(B.aB.j(0.28),B.r,1)
o=A.o(m,D.c_N,B.f,m,m,new A.n(B.aB.j(0.12),m,m,A.m(12),m,m,B.m),m,m,m,m,B.bT,m,m,m)
n=A.c("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aS:B.aw,m,m,m,m,m,m,m,m,m,m,m,B.F,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.c("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bj,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.B,m,B.e,B.h,0,B.p),1)
return A.bm(!0,new A.D(B.wW,A.o(m,A.x(A.a([g,new A.D(B.aou,A.x(A.a([w,B.S,u,B.bx,t,B.S,A.aF(!1,B.a3,!0,m,A.aM(!1,s,!0,A.o(m,A.A(A.a([o,B.bb,n,A.W(B.eM,k?B.bu:B.bj,m,m,m,m)],f),B.l,m,B.e,B.h,0,m,m),B.f,m,m,new A.n(r,m,p,q,m,m,B.m),m,m,m,m,B.bG,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.f_Q(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.B,m,B.e,B.h,0,B.p),m)],f),B.l,m,B.e,B.M,0,B.p),B.aq,m,m,new A.n(j,m,m,i,h,m,B.m),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:30}
C.f_O.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.we("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f_P.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.we("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f_Q.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.OU(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f_M.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.ek:B.c,m=A.m(24),l=A.a([new A.ab(0,B.H,B.v.j(o?0.35:0.08),B.eT,24)],x.V),k=o?B.em:B.bO
k=A.o(q,q,B.f,q,q,new A.n(k,q,q,A.m(99),q,q,B.m),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bu:B.bj
u=A.bu(w,new A.a6(48,48,C.aTr(!0,A.m(12),48,B.Q_,u,v.c,48),q),B.aq)
w=A.c(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aS:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bw(v.gxO())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wW,A.o(q,A.x(A.a([B.S,k,new A.D(D.aor,A.A(A.a([u,B.bb,A.E(A.x(A.a([w,A.c(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bu:B.bj,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.B,q,B.e,B.h,0,B.p),1)],s),B.l,q,B.e,B.h,0,q,q),q),B.CP,r.ct0(B.vv,B.aV,new C.f_K(d),p,"QR code or backup file","Transfer project"),r.b6f(!0,B.eo,B.aB,new C.f_L(d),p,"Remove from this device","Delete project"),B.S],s),B.l,q,B.e,B.M,0,B.p),B.f,q,q,new A.n(n,q,q,m,l,q,B.m),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:30}
C.f_K.prototype={
$0(){A.a8(this.a,!1).N("transfer")
return null},
$S:0}
C.f_L.prototype={
$0(){A.a8(this.a,!1).N("delete")
return null},
$S:0}
C.f_N.prototype={
$1(d){return this.bpI(d)},
bpI(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Ms(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wt(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f03.prototype={
$0(){var w=this.a
w.a.bv()
w.l(new C.f02(w))},
$S:0}
C.f02.prototype={
$0(){return this.a.r++},
$S:0}
C.f04.prototype={
$0(){var w=this.a
return w.l(new C.f01(w))},
$S:0}
C.f01.prototype={
$0(){return this.a.r++},
$S:0}
C.f_F.prototype={
$0(){var w=this.a.c
w.toString
return A.j7(w,null)},
$S:0}
C.f_J.prototype={
$0(){return this.a.cm7(this.b)},
$S:0}
C.f0_.prototype={
$0(){var w=this.a
return w.l(new C.f_Z(w,this.b))},
$S:0}
C.f_Z.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f_U.prototype={
$0(){return this.a.we("scan")},
$S:0}
C.f_V.prototype={
$0(){return this.a.we("file")},
$S:0}
C.f_W.prototype={
$1(d){return this.a.ct1(d,this.b)},
$S:z+70}
C.f_T.prototype={
$0(){return this.a.Ff(this.b)},
$S:0}
C.f_S.prototype={
$0(){return this.a.a1u(this.b,this.c)},
$S:0}
C.cIq.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+71}
C.cIp.prototype={
$1(d){return d.ak()},
$S:z+72}
C.cIn.prototype={
$1(d){return C.hU8(A.a1(d,x.N,x.z))},
$S:z+73}
C.cIo.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fMj.prototype={
$1(d){return d.y===D.l7},
$S:z+3}
C.hbK.prototype={
$1(d){return C.aS7(d,this.a)},
$S:z+3}
C.fJO.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bUu.prototype={
$1(d){return!d.as},
$S:z+1}
C.bUt.prototype={
$1(d){return d.ak()},
$S:z+23}
C.bUq.prototype={
$1(d){return C.hsX(A.a1(d,x.N,x.z))},
$S:z+24}
C.bUr.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bUs.prototype={
$1(d){return J.k(d)},
$S:15}
C.fzX.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fvt.prototype={
$1(d){return C.hil(A.a1(d,x.N,x.z))},
$S:z+77}
C.fvu.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fvv.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.h3b.prototype={
$1(d){return J.k(d)},
$S:15}
C.h3c.prototype={
$1(d){return d.a},
$S:z+79}
C.h3d.prototype={
$1(d){return d.length!==0},
$S:3}
C.h3e.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.h3f.prototype={
$1(d){return d.U3(null).ak()},
$S:z+80}
C.hbI.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fMN.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fQ0.prototype={
$1(d){return C.amV(A.a1(d,x.N,x.z))},
$S:z+9}
C.fQ1.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fQ2.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fQ3.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fQ4.prototype={
$1(d){return C.uC(d,this.a)},
$S:z+3}
C.h2Z.prototype={
$1(d){return C.uC(d,this.a)},
$S:z+3}
C.hbD.prototype={
$1(d){return C.amV(A.a1(d,x.N,x.z))},
$S:z+9}
C.hbE.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.hbF.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fMu.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fMv.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.hbO.prototype={
$1(d){return!d.as},
$S:z+1}
C.fLZ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fM_.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fM0.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.hbb.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fQS.prototype={
$1(d){return d.Q},
$S:z+15}
C.h2S.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fPY.prototype={
$1(d){return C.amV(A.a1(d,x.N,x.z))},
$S:z+9}
C.fPZ.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fQ_.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.h2N.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fw2.prototype={
$1(d){return d.length!==0},
$S:3}
C.fw3.prototype={
$1(d){return C.hsX(A.a1(d,x.N,x.z))},
$S:z+24}
C.fw4.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fw5.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:15}
C.fw6.prototype={
$1(d){return d.length!==0},
$S:3}
C.fwj.prototype={
$2(d,e){return d.eG(new C.fwk(e))},
$S:2305}
C.fwk.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.v(d))
return B.ck},
$S:2306}
C.fwg.prototype={
$1(d){return C.ig_(d,this.a)},
$S:z+82}
C.fwh.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fwi.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fAH.prototype={
$1(d){return d.a},
$S:z+55}
C.fAI.prototype={
$1(d){return d.length!==0},
$S:3}
C.fAJ.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fDI.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fJ2.prototype={
$1(d){return C.hEJ(d,C.Hy(d,this.a))},
$S:z+5}
C.fJ3.prototype={
$1(d){return C.hEK(d,C.Hy(d,this.a))},
$S:z+5};(function aliases(){var w=C.aCx.prototype
w.bxy=w.t
w=C.aAH.prototype
w.bxt=w.t
w=C.aI3.prototype
w.bxW=w.t
w=C.aCy.prototype
w.bxz=w.t
w=C.aCA.prototype
w.bxA=w.t
w=C.aCB.prototype
w.bxB=w.t
w=C.aOi.prototype
w.bAp=w.t
w=C.aQr.prototype
w.bCL=w.t
w=C.aQs.prototype
w.bCM=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aFy.prototype,"gcpQ","cpR",27)
var r
w(r=C.aCw.prototype,"gciE","ciF",63)
v(r,"gaPX","Oq",0)
v(r,"gcyl","BE",0)
v(r,"gbQu","P8",0)
v(r,"gcMZ","zg",0)
v(r,"gcrY","a2d",0)
v(r,"gbLQ","OQ",0)
v(r,"gbQU","Yo",0)
w(r,"gbVZ","bW_",76)
v(r,"gbG2","AA",0)
v(C.aCz.prototype,"gcMV","G8",0)
v(r=C.amK.prototype,"gbtU","btV",2)
v(r,"gbtM","btN",2)
v(r,"gcO2","cO3",2)
u(r,"gqt","kN",0)
u(r=C.akU.prototype,"geY","fY",2)
w(r,"gce8","ce9",26)
u(C.avO.prototype,"gqt","kN",0)
v(r=C.azK.prototype,"gcZD","cZE",2)
u(r,"gqt","kN",0)
u(C.aLW.prototype,"gbtS","btT",2)
v(C.amT.prototype,"gCa","cOf",2)
u(r=C.amR.prototype,"gcOX","cOY",2)
u(r,"gqt","kN",0)
v(r=C.amN.prototype,"gbsK","bsL",2)
v(r,"gcU6","cU7",2)
u(r=C.amP.prototype,"geY","fY",2)
u(r,"giC","cNz",2)
v(r=C.amL.prototype,"gcNo","cNp",2)
u(r,"gbrC","jH",2)
v(r=C.aG7.prototype,"gahN","wu",0)
v(r,"gcll","a1m",0)
v(r,"gaUc","IJ",0)
v(r=C.aG4.prototype,"gcIR","a4l",0)
v(r,"gahN","wu",0)
v(r,"gcwk","a2S",0)
v(r,"gclg","b4s",2)
v(r,"gcmk","a1z",0)
w(r,"gciy","ciz",33)
v(r,"gbQM","IO",0)
v(r,"gcJX","cJY",2)
v(r,"gc83","a_a",0)
w(r,"gch1","ch2",34)
v(r,"gcl4","cl5",2)
v(r=C.aEx.prototype,"gcee","QP",0)
v(r,"gceg","ceh",2)
v(r,"gbNk","abs",0)
v(r=C.aG6.prototype,"gbUn","YU",0)
v(r,"gc3W","Zz",0)
v(r,"gcCQ","a3J",0)
v(r,"gcyW","a3k",0)
v(C.aG5.prototype,"gcyE","ajB",0)
v(C.auY.prototype,"gch_","a0Y",0)
v(C.aBf.prototype,"ga44","L9",2)
v(C.aBe.prototype,"ga44","L9",2)
v(C.azW.prototype,"ga44","L9",2)
v(r=C.aHF.prototype,"gb5D","RQ",0)
v(r,"gbER","X0",0)
v(r,"gcm8","cm9",2)
w(C.aHE.prototype,"gchT","chU",67)
t(C.aHG.prototype,"gaU7",0,0,null,["$1","$0"],["II","bOE"],68,0,0)
s(C,"hN3","ipW",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aK,[C.aqu,C.uX,C.nx,C.IF,C.agt,C.L1,C.uY,C.bV_,C.ti,C.bqs,C.an1,C.aez,C.lx,C.bTB,C.av9,C.zK,C.alA,C.N4,C.bbN,C.aaB,C.bj7,C.agA,C.aAX,C.ago,C.aLW,C.L8,C.GR,C.bi0,C.aLQ,C.arT,C.dkb,C.m_,C.aWo,C.aWn,C.aUp,C.um,C.rx,C.lJ,C.i8,C.l2,C.aJN])
u(A.kt,[C.fUG,C.fUF,C.fUH,C.h3T,C.fHH,C.fHI,C.fHN,C.fSo,C.fSn,C.fSm,C.c9O,C.h4p,C.h4h,C.h4t,C.fMC,C.dT6,C.dT1,C.dT2,C.dSF,C.dSB,C.dTl,C.dTm,C.dTf,C.dTg,C.dTn,C.dTo,C.fNn,C.fPV,C.fPW,C.h2X,C.hbC,C.fMt,C.h3x,C.djo,C.diL,C.diU,C.dja,C.diQ,C.diW,C.diN,C.dj_,C.dj0,C.diZ,C.djf,C.dje,C.dlb,C.dlc,C.dld,C.djC,C.djH,C.djG,C.cRu,C.cRw,C.dat,C.daS,C.daT,C.daW,C.daY,C.daZ,C.db_,C.db1,C.db2,C.bTl,C.bTf,C.fAo,C.hbu,C.hbv,C.hbw,C.hbr,C.hbx,C.hby,C.hbz,C.hbq,C.fO0,C.h1R,C.fJP,C.fQR,C.bOn,C.hbU,C.h2t,C.bMx,C.bMs,C.bMu,C.bMt,C.csq,C.csl,C.csm,C.csk,C.csi,C.csn,C.cSy,C.cHp,C.cHs,C.cHq,C.cHt,C.cHu,C.fcC,C.fmT,C.bU7,C.bU1,C.bU5,C.bTJ,C.e4V,C.e4S,C.e4T,C.e4R,C.e4X,C.bU_,C.bTQ,C.bTA,C.bTz,C.bTv,C.bTw,C.bTx,C.bTy,C.e6A,C.e6_,C.e5V,C.e5m,C.e5C,C.e5F,C.e5B,C.e5A,C.e5R,C.e5S,C.e5M,C.e5a,C.e62,C.e5X,C.e5c,C.e5d,C.e5e,C.e5j,C.e5h,C.e5g,C.e5w,C.e5x,C.e5r,C.e69,C.e65,C.djN,C.djO,C.fNr,C.fNs,C.fNt,C.fNp,C.fNq,C.fNw,C.fNx,C.fNy,C.fNu,C.fNv,C.dk6,C.djX,C.djS,C.dk1,C.dk2,C.dk5,C.djU,C.dk8,C.dk9,C.dka,C.fsu,C.f2n,C.dAi,C.dAs,C.dAt,C.dAu,C.dAx,C.dAw,C.dAy,C.dAD,C.dAE,C.cgZ,C.cgY,C.cgU,C.cgV,C.cgW,C.cgX,C.ch3,C.ch0,C.ch1,C.e6m,C.e6p,C.e6o,C.e6v,C.e6w,C.dSq,C.h4_,C.h3n,C.hba,C.h3r,C.h3q,C.dbg,C.dbh,C.dbc,C.cJe,C.cJg,C.cJh,C.cJ9,C.cJi,C.fs_,C.h1E,C.f_v,C.f_r,C.f_n,C.f_l,C.f_z,C.haY,C.f_I,C.f_R,C.f_M,C.f_N,C.f_W,C.cIp,C.cIn,C.cIo,C.fMj,C.hbK,C.fJO,C.bUu,C.bUt,C.bUq,C.bUr,C.bUs,C.fvt,C.fvu,C.h3b,C.h3c,C.h3d,C.h3e,C.h3f,C.hbI,C.fMN,C.fQ0,C.fQ1,C.fQ3,C.fQ4,C.h2Z,C.hbD,C.hbE,C.hbF,C.fMu,C.fMv,C.hbO,C.fLZ,C.fM_,C.hbb,C.fQS,C.h2S,C.fPY,C.fPZ,C.h2N,C.fw2,C.fw3,C.fw4,C.fw5,C.fw6,C.fwk,C.fwg,C.fwh,C.fAH,C.fAI,C.fDI,C.fJ2,C.fJ3])
u(A.aw,[C.b0X,C.amI,C.aXF,C.a_k,C.bdA,C.R4,C.a77,C.tI,C.IH,C.bhZ,C.blP,C.bzW,C.bpa,C.aeW,C.blO,C.aeV,C.blN,C.aEy,C.aKS,C.aeX,C.GN,C.bi_,C.aeb,C.bhY,C.bi2,C.b0V,C.auY,C.afh])
u(A.qc,[C.bef,C.bfs,C.bfj,C.aJH,C.bkQ,C.bqr,C.aXK,C.beh,C.aCv,C.bdJ,C.buy,C.bkY,C.bkn,C.bku,C.bi1,C.bh1,C.bmX,C.bzL])
u(A.mH,[C.h4m,C.h4n,C.h4o,C.h4f,C.h4g,C.h4r,C.h4s,C.dTi,C.dT4,C.dT7,C.dSM,C.dSN,C.dSO,C.dSL,C.dST,C.dSK,C.dSU,C.dSV,C.dSJ,C.dSW,C.dSI,C.dSX,C.dSH,C.dSY,C.dSz,C.dSA,C.dSG,C.dSZ,C.dSE,C.dT_,C.dSD,C.dSP,C.dSC,C.dSQ,C.dSy,C.dSR,C.dSS,C.dTj,C.dTk,C.dT8,C.dT9,C.dTa,C.dTb,C.dTc,C.dTd,C.dTe,C.dTq,C.dTh,C.fNo,C.diJ,C.diH,C.diI,C.diK,C.djn,C.djc,C.dj9,C.diM,C.djd,C.diS,C.diT,C.diV,C.djb,C.diR,C.diX,C.djk,C.dj6,C.dj5,C.dj7,C.dj8,C.dj1,C.dj3,C.dj4,C.diY,C.djg,C.djj,C.diO,C.diP,C.dla,C.dl9,C.dl8,C.dl7,C.dle,C.dl6,C.dlf,C.djD,C.djE,C.djF,C.djI,C.djB,C.djA,C.cRv,C.das,C.daF,C.daE,C.daU,C.daD,C.daV,C.daC,C.daB,C.daX,C.daA,C.daN,C.daM,C.db3,C.bTe,C.bTo,C.bTg,C.bTh,C.bTk,C.bTj,C.bTm,C.bTn,C.bTi,C.bTc,C.bTd,C.bUS,C.bUT,C.bUU,C.bUV,C.bUW,C.bUX,C.bUY,C.hbt,C.h1S,C.bMw,C.bMr,C.bMp,C.bMq,C.bMo,C.css,C.cst,C.csr,C.csu,C.csw,C.csx,C.csy,C.cso,C.cHo,C.cHx,C.cHy,C.cHz,C.cHw,C.cHA,C.cHB,C.cHC,C.cHD,C.cHr,C.cHv,C.bUn,C.bUm,C.bUk,C.bUi,C.bUj,C.bUf,C.bUg,C.bUh,C.bUl,C.bUe,C.fcD,C.fcE,C.fcF,C.fcG,C.fcH,C.bUb,C.bUc,C.bUd,C.bU6,C.bU8,C.bU9,C.bUa,C.bU2,C.bTN,C.bTM,C.bTL,C.bTF,C.bTG,C.bTK,C.bTH,C.bTI,C.bTE,C.e4U,C.e4W,C.e4P,C.e4Q,C.e4O,C.e4Y,C.e4Z,C.e5_,C.e52,C.e53,C.e54,C.e55,C.e56,C.e57,C.e58,C.e59,C.e50,C.e51,C.bTZ,C.bTY,C.bTP,C.bTO,C.bTV,C.bTW,C.bTS,C.bTT,C.bTU,C.bTR,C.bTp,C.bTq,C.bTu,C.bTt,C.bTs,C.bTr,C.e6z,C.e6y,C.e6B,C.e6C,C.e6D,C.e6x,C.e6F,C.e6E,C.e5Y,C.e5Z,C.e60,C.e5n,C.e5E,C.e5D,C.e5G,C.e5U,C.e5z,C.e5K,C.e5L,C.e5J,C.e5H,C.e5I,C.e5N,C.e5O,C.e5P,C.e5T,C.e5b,C.e5W,C.e5f,C.e5i,C.e5k,C.e61,C.e5q,C.e5o,C.e5s,C.e5t,C.e5p,C.e5u,C.e5y,C.e6a,C.e6b,C.e63,C.e66,C.e67,C.e68,C.e6d,C.e64,C.e5l,C.djM,C.djL,C.djQ,C.dk_,C.djR,C.f2m,C.dAj,C.dAg,C.dAh,C.dAr,C.dAq,C.dAp,C.dAz,C.dAo,C.dAA,C.dAn,C.dAB,C.dAm,C.dAC,C.dAl,C.dAk,C.dAv,C.dAF,C.dAO,C.e6n,C.e6r,C.e6s,C.e6j,C.e6k,C.e6l,C.e6q,C.e6u,C.e6t,C.e6e,C.e6f,C.e6g,C.e6h,C.e6i,C.dSr,C.h3X,C.cqK,C.dbf,C.dbe,C.dbi,C.dbb,C.dbd,C.cJ6,C.cJc,C.cJd,C.cJb,C.cJf,C.cJa,C.cJ7,C.cJ8,C.cJj,C.fs0,C.fs1,C.f_x,C.f_o,C.f_p,C.f_q,C.f_s,C.f_t,C.f_w,C.f_j,C.f_m,C.f_y,C.f_k,C.f_B,C.f_C,C.f_D,C.f_E,C.f_A,C.f_e,C.f_f,C.f_g,C.f_i,C.f_h,C.f_X,C.f_Y,C.f_G,C.f_H,C.f_O,C.f_P,C.f_Q,C.f_K,C.f_L,C.f03,C.f02,C.f04,C.f01,C.f_F,C.f_J,C.f0_,C.f_Z,C.f_U,C.f_V,C.f_T,C.f_S])
u(A.ag,[C.aqH,C.Up,C.a04,C.a08,C.a06,C.a_F,C.amJ,C.akT,C.avN,C.azJ,C.amS,C.amQ,C.amM,C.WM,C.amO,C.Uq,C.arW,C.arQ,C.a0K,C.arU,C.a13,C.a14,C.a7T,C.a_H,C.a_G,C.a_b,C.a2S,C.GB,C.azP,C.auX,C.auR,C.auW,C.Ph])
u(A.ah,[C.aFy,C.bhT,C.aCw,C.bih,C.aCz,C.bfq,C.aCx,C.aAH,C.aI3,C.azK,C.aCB,C.aCA,C.aCy,C.bni,C.amP,C.amL,C.aG7,C.aG4,C.aEx,C.aG6,C.aG5,C.bnj,C.aOi,C.aBf,C.aBe,C.azW,C.bzO,C.aQr,C.aQs,C.aHF,C.boG,C.aHE,C.bBz])
u(A.mn,[C.dT3,C.dT5,C.dT0,C.dTp,C.fPX,C.bTb,C.djm,C.djl,C.dj2,C.djh,C.dji,C.djJ,C.bUZ,C.bUR,C.bTC,C.bTD,C.hbs,C.hbT,C.bMv,C.csv,C.csp,C.csj,C.fcI,C.bU0,C.bU3,C.bU4,C.duA,C.bTX,C.e5Q,C.e5v,C.e6c,C.djZ,C.djY,C.djW,C.dk0,C.dk3,C.dk4,C.djP,C.djT,C.djV,C.dk7,C.cgS,C.ch_,C.ch4,C.dSs,C.h3Z,C.h3Y,C.frY,C.frZ,C.f_u,C.f00,C.cIq,C.fzX,C.fvv,C.fQ2,C.fM0,C.fQ_,C.fwj,C.fwi,C.fAJ])
u(A.qB,[C.a2m,C.agC,C.a2F,C.a0w,C.adb,C.aMD,C.IG,C.amU,C.cIr,C.cIs])
t(C.amK,C.aCx)
t(C.akU,C.aAH)
t(C.avO,C.aI3)
t(C.bhX,C.aCB)
t(C.amT,C.bhX)
t(C.bhW,C.aCA)
t(C.amR,C.bhW)
t(C.bhV,C.aCy)
t(C.amN,C.bhV)
t(C.bmY,C.aOi)
t(C.bzM,C.aQr)
t(C.bzN,C.aQs)
t(C.aHG,C.bBz)
t(C.bc0,A.bbO)
t(C.bzP,A.apm)
t(C.bc_,C.bzP)
w(C.aCx,A.cg)
w(C.aAH,A.cg)
w(C.aI3,A.eP)
w(C.aCy,A.cg)
v(C.bhV,C.ago)
w(C.aCA,A.cg)
v(C.bhW,C.ago)
w(C.aCB,A.cg)
v(C.bhX,C.ago)
w(C.aOi,A.eP)
w(C.aQr,A.cg)
w(C.aQs,A.cg)
v(C.bBz,A.eJ)
v(C.bzP,A.jl)})()
A.nN(b.typeUniverse,JSON.parse('{"b0X":{"aw":[],"w":[]},"bef":{"aB":[]},"aqH":{"ag":[],"w":[]},"aFy":{"ah":["aqH"]},"Up":{"ag":[],"w":[]},"amI":{"aw":[],"w":[]},"aXF":{"aw":[],"w":[]},"bhT":{"ah":["Up"]},"a04":{"ag":[],"w":[]},"a08":{"ag":[],"w":[]},"a06":{"ag":[],"w":[]},"a_F":{"ag":[],"w":[]},"aCw":{"ah":["a04"]},"bih":{"ah":["a08"]},"aCz":{"ah":["a06"]},"a_k":{"aw":[],"w":[]},"bfs":{"aB":[]},"bfj":{"aB":[]},"bfq":{"ah":["a_F"]},"aJH":{"aB":[]},"bkQ":{"aB":[]},"bdA":{"aw":[],"w":[]},"amJ":{"ag":[],"w":[]},"amK":{"ah":["amJ"]},"bqr":{"aB":[]},"aXK":{"aB":[]},"akT":{"ag":[],"w":[]},"avN":{"ag":[],"w":[]},"azJ":{"ag":[],"w":[]},"akU":{"ah":["akT"]},"beh":{"aB":[]},"R4":{"aw":[],"w":[]},"aCv":{"aB":[]},"avO":{"ah":["avN"]},"bdJ":{"aB":[]},"azK":{"ah":["azJ"]},"amS":{"ag":[],"w":[]},"amQ":{"ag":[],"w":[]},"amM":{"ag":[],"w":[]},"amT":{"ah":["amS"]},"buy":{"aB":[]},"amR":{"ah":["amQ"]},"bkY":{"aB":[]},"amN":{"ah":["amM"]},"bkn":{"aB":[]},"WM":{"ag":[],"w":[]},"amO":{"ag":[],"w":[]},"Uq":{"ag":[],"w":[]},"a77":{"aw":[],"w":[]},"bku":{"aB":[]},"tI":{"aw":[],"w":[]},"IH":{"aw":[],"w":[]},"bni":{"ah":["WM"]},"amP":{"ah":["amO"]},"amL":{"ah":["Uq"]},"arW":{"ag":[],"w":[]},"arQ":{"ag":[],"w":[]},"a0K":{"ag":[],"w":[]},"aeX":{"aw":[],"w":[]},"aG7":{"ah":["arW"]},"aG4":{"ah":["arQ"]},"bhZ":{"aw":[],"w":[]},"bi1":{"aB":[]},"blP":{"aw":[],"w":[]},"bh1":{"aB":[]},"bzW":{"aw":[],"w":[]},"bpa":{"aw":[],"w":[]},"aEx":{"ah":["a0K"]},"aeW":{"aw":[],"w":[]},"blO":{"aw":[],"w":[]},"aeV":{"aw":[],"w":[]},"blN":{"aw":[],"w":[]},"aEy":{"aw":[],"w":[]},"aKS":{"aw":[],"w":[]},"GN":{"aw":[],"w":[]},"arU":{"ag":[],"w":[]},"a13":{"ag":[],"w":[]},"a14":{"ag":[],"w":[]},"aG6":{"ah":["arU"]},"bi_":{"aw":[],"w":[]},"aeb":{"aw":[],"w":[]},"bhY":{"aw":[],"w":[]},"bi2":{"aw":[],"w":[]},"aG5":{"ah":["a13"]},"bnj":{"ah":["a14"]},"b0V":{"aw":[],"w":[]},"a7T":{"ag":[],"w":[]},"bmY":{"ah":["a7T"]},"bmX":{"aB":[]},"auY":{"aw":[],"w":[]},"a_H":{"ag":[],"w":[]},"a_G":{"ag":[],"w":[]},"a_b":{"ag":[],"w":[]},"a2S":{"ag":[],"w":[]},"aBf":{"ah":["a_H"]},"aBe":{"ah":["a_G"]},"azW":{"ah":["a_b"]},"bzO":{"ah":["a2S"]},"GB":{"ag":[],"w":[]},"azP":{"ag":[],"w":[]},"bzM":{"ah":["GB"]},"bzN":{"ah":["azP"]},"bzL":{"aB":[]},"auX":{"ag":[],"w":[]},"aHF":{"ah":["auX"]},"afh":{"aw":[],"w":[]},"auR":{"ag":[],"w":[]},"auW":{"ag":[],"w":[]},"boG":{"ah":["auR"]},"aHE":{"ah":["auW"]},"Ph":{"ag":[],"w":[]},"aHG":{"ah":["Ph"],"eJ":[]},"bc_":{"jl":[],"fs":[]}}'))
A.a2G(b.typeUniverse,JSON.parse('{"ago":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.aD
return{e2:w("aUp"),cq:w("mm"),Q:w("rx"),r:w("bq<p,p>"),c5:w("aWn"),dY:w("aWo"),fH:w("N4"),de:w("alA"),dN:w("Nc<G>"),gc:w("ED<G>"),A:w("eT<p?>"),e:w("IF"),B:w("nx"),P:w("i8"),df:w("lx"),k:w("l2"),x:w("aA<~>"),U:w("U<aV9>"),V:w("U<ab>"),C:w("U<rx>"),O:w("U<u>"),c:w("U<N4>"),b:w("U<alA>"),ac:w("U<eT<p?>>"),I:w("U<nx>"),u:w("U<i8>"),J:w("U<lx>"),_:w("U<l2>"),cl:w("U<aA<ai<aa<p,@>>>>"),R:w("U<o6>"),eU:w("U<ai<+(H,H)>>"),ez:w("U<aa<p,aK>>"),gE:w("U<aa<p,p>>"),Y:w("U<aa<p,@>>"),fD:w("U<o8>"),bp:w("U<oR>"),g:w("U<r>"),ar:w("U<av9>"),v:w("U<hR>"),gy:w("U<aaB>"),L:w("U<+(p,p)>"),G:w("U<+(H,H)>"),E:w("U<+(H,~())>"),bd:w("U<+(p,G,Q)>"),bF:w("U<+count,id,name(G,p,p)>"),F:w("U<dc>"),s:w("U<p>"),cF:w("U<at>"),aS:w("U<jQ>"),dT:w("U<bbN>"),p:w("U<w>"),Z:w("U<fs>"),D:w("U<lJ>"),h:w("U<aAX>"),cC:w("U<bj7>"),fp:w("U<L1>"),M:w("U<L8>"),gZ:w("U<aJN>"),gA:w("U<agt>"),e4:w("U<agA>"),dE:w("U<aLQ>"),f7:w("U<Q>"),n:w("U<H>"),t:w("U<G>"),dS:w("U<aB?>"),d4:w("U<p?>"),eF:w("cB<ah<ag>>"),d:w("ai<nx>"),do:w("ai<i8>"),cg:w("ai<lx>"),ax:w("ai<l2>"),fO:w("ai<aa<p,@>>"),cz:w("ai<+(p,p)>"),bC:w("ai<+count,id,name(G,p,p)>"),dy:w("ai<p>"),er:w("ai<at>"),gk:w("ai<lJ>"),j:w("ai<@>"),fK:w("bz<p,p>"),d2:w("bz<p,ai<aa<p,@>>>"),a:w("aa<p,@>"),f:w("aa<@,@>"),gv:w("N<p,II>"),cM:w("N<G,p>"),w:w("kL"),g2:w("tT"),bV:w("aqu"),fL:w("cw"),K:w("aK"),dc:w("hR"),fo:w("PF<G>"),fz:w("+(p,p)"),ei:w("+scope,text(p,p)"),bn:w("+games,limit(Q,G)"),d9:w("+dx,hidden(H,ai<i8>)"),cs:w("+count,id,name(G,p,p)"),N:w("p"),fT:w("iH<i8>"),ec:w("iH<p>"),gW:w("re<H>"),X:w("bt<H>"),bW:w("e4"),W:w("bl<p>"),b4:w("bl<G>"),cI:w("kn<p>"),av:w("X<zK>"),cc:w("X<p>"),l:w("w"),gF:w("fs"),fA:w("lJ"),dO:w("GR"),bw:w("aeV<p?>"),cy:w("La"),q:w("pa"),y:w("Q"),i:w("H"),z:w("@"),S:w("G"),eK:w("ai<l2>?"),m:w("arT?"),cT:w("r?"),h5:w("+(p,p)?"),eo:w("+code,qrPayload,usesRemaining(p,p,G)?"),he:w("+qrPayload,token,usesRemaining(p,p,G)?"),gG:w("+members,trees,viewOnly(G,G,Q)?"),az:w("qr?"),T:w("p?"),aD:w("e4?"),o:w("lJ?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b7k=new A.bb(B.h1,B.bJ,B.h1,B.bJ)
D.afD=new A.bb(B.h1,B.i5,B.h1,B.i5)
D.b7z=new A.bb(B.jG,B.bJ,B.bJ,B.bJ)
D.b7D=new A.av(B.cV,1.4,B.r,-1)
D.b7N=new A.av(B.ab,1,B.r,-1)
D.ag9=new A.aY(140,1/0,0,1/0)
D.b99=new A.aY(0,1/0,64,1/0)
D.b9d=new A.aY(0,84,0,1/0)
D.agg=new A.aY(130,1/0,0,1/0)
D.aEP=w([B.mm,B.tc,B.c],x.O)
D.cca=new A.a7(B.ay,B.aC,B.x,D.aEP,null,null)
D.b9Z=new A.n(null,null,null,null,null,D.cca,B.m)
D.dm4=w([B.aV,B.bR],x.O)
D.cem=new A.a7(B.aX,B.b1,B.x,D.dm4,null,null)
D.baj=new A.n(null,null,null,null,null,D.cem,B.m)
D.Zv=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fJ=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dqj=w([B.dz,D.Zv,D.fJ],x.O)
D.cbl=new A.a7(B.aX,B.b1,B.x,D.dqj,null,null)
D.bb3=new A.n(null,null,null,null,null,D.cbl,B.m)
D.fG9=new A.F(!0,B.bV,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hh5=new A.C("?",null,D.fG9,null,null,null,null,null,null,null,null,null)
D.beU=new A.cl(B.z,null,null,D.hh5,null)
D.WZ=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZY=new A.C("\ud83c\udf33",null,D.WZ,null,null,null,null,null,null,null,null,null)
D.ah1=new A.cl(B.z,null,null,D.fZY,null)
D.h1D=new A.C("\ud83c\udfc6",null,B.LB,null,null,null,null,null,null,null,null,null)
D.bf4=new A.cl(B.z,null,null,D.h1D,null)
D.bgV=new A.fo(null,null,null,null,null,B.kD,null,null,null,null)
D.ah2=new A.cl(B.z,null,null,D.bgV,null)
D.kZ=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fGI=new A.F(!0,D.kZ,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0D=new A.C("No books on the shelf yet.",null,D.fGI,null,null,null,null,null,null,null,null,null)
D.eDa=new A.D(B.nZ,D.h0D,null)
D.bfl=new A.cl(B.z,null,null,D.eDa,null)
D.fNW=new A.F(!0,D.fJ,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hi2=new A.C("\ud83d\ude8c  On the road\u2026",null,D.fNW,null,null,null,null,null,null,null,null,null)
D.eDK=new A.D(B.cr,D.hi2,null)
D.bfO=new A.cl(B.z,null,null,D.eDK,null)
D.aZ2=new A.C("\ud83e\uddfa",null,D.WZ,null,null,null,null,null,null,null,null,null)
D.bg2=new A.cl(B.z,null,null,D.aZ2,null)
D.h46=new A.C("\ud83c\udfad",null,D.WZ,null,null,null,null,null,null,null,null,null)
D.bgd=new A.cl(B.z,null,null,D.h46,null)
D.bgg=new A.cl(B.z,null,null,S.Zh,null)
D.ahm=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.aht=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bix=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.biC=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.biO=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.biQ=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.biS=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bj_=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lR=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bj3=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bj8=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bja=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bjb=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lS=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bjP=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Ce=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bjY=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bkh=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bkk=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bkq=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bky=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.ai8=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bkF=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.ZJ=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.aib=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bkQ=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.ZL=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bla=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.ain=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.blz=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.blP=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bme=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bmp=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.GA=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bmO=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bmR=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bmV=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.aiQ=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bnc=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bni=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bnp=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.aiU=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bny=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bo2=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.boc=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bof=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bol=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.aja=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bp_=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ajz=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bpZ=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ajL=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bqo=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.GO=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bqv=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bqF=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bqH=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ajP=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bqZ=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.br0=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.br3=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ajX=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.a_v=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.brs=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.brP=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.brU=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.ak8=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bs0=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.a_C=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bsn=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bso=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.GY=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.btb=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.btO=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.btU=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.btY=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qH=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bu8=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.buc=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bui=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.buk=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.akV=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.akZ=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.H4=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a_X=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.al7=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bvy=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bvQ=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bwi=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bwr=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.alx=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a08=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bwC=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bwT=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a0e=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bx9=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bxq=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a0i=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bxv=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.alP=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.alR=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bxO=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.alY=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.byg=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.byk=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.byr=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.byA=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.byJ=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bzk=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bzQ=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fVJ=new A.C("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bDl=new A.eT(null,D.fVJ,B.fj,null,x.A)
D.h3Y=new A.C("None",null,null,null,null,null,null,null,null,null,null,null)
D.bDn=new A.eT(null,D.h3Y,B.fj,null,x.A)
D.bDU=new A.bf(38e5)
D.bEE=new A.iC(0,10,0,10)
D.bEN=new A.P(0,1,0,0)
D.bEY=new A.iC(0,4,0,4)
D.bF0=new A.P(0,4,5,0)
D.bFg=new A.P(10,10,14,10)
D.bFr=new A.iC(10,4,10,4)
D.bFA=new A.iC(10,8,10,8)
D.bFB=new A.P(10,8,8,8)
D.bG4=new A.P(12,6,12,2)
D.bGo=new A.P(14,0,14,6)
D.bGs=new A.P(14,10,6,6)
D.bGt=new A.P(14,12,14,0)
D.bGx=new A.P(14,12,14,8)
D.bGA=new A.P(14,12,8,14)
D.bGE=new A.iC(14,14,14,14)
D.bGX=new A.P(14,6,14,40)
D.bH_=new A.P(14,8,14,30)
D.bHn=new A.P(16,2,16,10)
D.bHx=new A.P(16,6,16,30)
D.bHz=new A.P(16,6,16,8)
D.bHP=new A.P(18,10,18,4)
D.bHR=new A.P(18,12,18,0)
D.bHY=new A.P(18,14,12,4)
D.aor=new A.P(18,16,18,8)
D.bIe=new A.P(18,20,18,22)
D.bIk=new A.P(18,30,18,30)
D.bIC=new A.P(20,10,12,20)
D.bIF=new A.P(20,11,20,11)
D.bIR=new A.P(20,18,16,18)
D.bIT=new A.P(20,18,20,6)
D.bJI=new A.P(24,32,24,28)
D.bJJ=new A.P(24,36,24,32)
D.bJM=new A.P(26,26,24,14)
D.bK0=new A.P(2,4,2,8)
D.bK4=new A.P(30,0,30,0)
D.bKf=new A.P(38,22,22,22)
D.aoP=new A.P(40,24,24,24)
D.bKh=new A.iC(40,40,40,40)
D.bKj=new A.P(46,30,30,30)
D.bKN=new A.P(56,40,40,40)
D.bKR=new A.P(1.25,1.25,1.25,1.25)
D.bKS=new A.P(60,0,60,0)
D.bKX=new A.P(6,14,6,16)
D.bL0=new A.P(6,4,12,0)
D.bL4=new A.P(6,6,10,2)
D.bLb=new A.iC(7,3,7,3)
D.bLI=new A.P(5,1.5,5,1.5)
D.bLT=new A.P(6,2.5,6,2.5)
D.hcd=new A.C("Family Games",null,B.jn,null,null,null,null,null,null,null,null,null)
D.fUi=new A.C("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.WQ,null,null,null,null,null,null,null,null,null)
D.cNT=w([D.hcd,D.fUi],x.p)
D.bAP=new A.fq(B.ah,B.e,B.h,B.B,null,B.p,null,0,D.cNT,null)
D.bMj=new A.bx(1,B.ba,D.bAP,null)
D.hgD=new A.C("Signature",null,B.nu,null,null,null,null,null,null,null,null,null)
D.bMm=new A.bx(1,B.ba,D.hgD,null)
D.h8J=new A.C("MADE BY THE ONE WHO PLANTED THE TREE",null,B.ui,null,null,null,null,null,null,null,null,null)
D.bMU=new A.bx(1,B.ba,D.h8J,null)
D.hdG=new A.C("Tell the AI what to fix",null,B.dq,null,null,null,null,null,null,null,null,null)
D.bNa=new A.bx(1,B.ba,D.hdG,null)
D.fOI=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hfI=new A.C("Worksheets",null,D.fOI,null,null,null,null,null,null,null,null,null)
D.fOU=new A.F(!0,B.ahS,null,null,null,null,13,B.cF,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hex=new A.C("Track your project spending",null,D.fOU,null,null,null,null,null,null,null,null,null)
D.dcC=w([D.hfI,B.at,D.hex],x.p)
D.bAs=new A.fq(B.ah,B.e,B.h,B.B,null,B.p,null,0,D.dcC,null)
D.bNg=new A.bx(1,B.ba,D.bAs,null)
D.fJB=new A.F(!0,B.kD,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUS=new A.C("FAMILY LIBRARY",null,D.fJB,null,null,null,null,null,null,null,null,null)
D.bNz=new A.bx(1,B.ba,D.fUS,null)
D.PC=new C.IF("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.x4=new C.IG(0,"male")
D.oP=new C.IG(1,"female")
D.zD=new C.IG(2,"unknown")
D.v9=new C.amU(0,"owner")
D.PD=new C.amU(1,"editor")
D.l7=new C.amU(2,"viewer")
D.aqM=new A.a_(61199,"MaterialIcons",!1)
D.bSU=new A.a_(61504,"MaterialIcons",!1)
D.bSV=new A.a_(61505,"MaterialIcons",!1)
D.bSX=new A.a_(61587,"MaterialIcons",!1)
D.bT3=new A.a_(61890,"MaterialIcons",!1)
D.bTW=new A.a_(63034,"MaterialIcons",!0)
D.bUd=new A.a_(63153,"MaterialIcons",!1)
D.bUL=new A.a_(63429,"MaterialIcons",!1)
D.asU=new A.a_(984520,"MaterialIcons",!1)
D.bTs=new A.a_(62776,"MaterialIcons",!1)
D.bX9=new A.ae(D.bTs,26,B.b5,null,null,null)
D.bRS=new A.a_(57648,"MaterialIcons",!1)
D.bXu=new A.ae(D.bRS,14,B.c,null,null,null)
D.bXM=new A.ae(B.I9,17,null,null,null,null)
D.bXT=new A.ae(B.Q7,null,B.bR,null,null,null)
D.bYi=new A.ae(B.a3U,null,null,null,null,null)
D.bYl=new A.ae(B.jj,18,B.kD,null,null,null)
D.a3E=new A.a_(62044,"MaterialIcons",!1)
D.bYr=new A.ae(D.a3E,null,B.aV,null,null,null)
D.bYy=new A.ae(B.zQ,18,B.c,null,null,null)
D.bZf=new A.ae(B.ef,16,null,null,null,null)
D.bZm=new A.ae(D.a3E,32,B.aV,null,null,null)
D.bZG=new A.ae(B.aqN,18,B.cV,null,null,null)
D.c_N=new A.ae(B.Ik,22,B.aB,null,null,null)
D.c00=new A.ae(B.ef,22,B.b5,null,null,null)
D.c0d=new A.ae(K.a3J,22,B.c,null,null,null)
D.c0k=new A.ae(B.vk,52,B.c,null,null,null)
D.c0v=new A.ae(B.Ik,30,B.aB,null,null,null)
D.c0R=new A.ae(B.Qf,null,B.c,null,null,null)
D.atD=new A.ae(B.vv,22,B.c,null,null,null)
D.c1_=new A.ae(B.ef,17,null,null,null,null)
D.c1n=new A.ae(B.xi,26,B.cV,null,null,null)
D.c2a=new A.ae(B.a49,16,null,null,null,null)
D.c2X=new A.ae(B.vk,24,B.c,null,null,null)
D.c31=new A.ae(B.Q5,20,B.tR,null,null,null)
D.c37=new A.ae(B.I7,null,B.bR,null,null,null)
D.c3g=new A.ae(B.jj,18,B.c,null,null,null)
D.c3X=new A.ae(B.cA,22,B.ab,null,null,null)
D.c4Q=new A.ae(B.eo,16,B.ab,null,null,null)
D.c51=new A.ae(D.a3E,20,B.aV,null,null,null)
D.au3=new A.ae(B.hn,20,null,null,null,null)
D.c5A=new A.ae(B.cA,18,D.kZ,null,null,null)
D.c5S=new A.ae(B.A_,28,B.c,null,null,null)
D.c63=new A.ae(B.PW,null,B.fo,null,null,null)
D.c6o=new A.ae(B.A_,24,B.c,null,null,null)
D.c6R=new A.ae(B.vk,null,B.aV,null,null,null)
D.c6S=new A.ae(B.jA,20,B.cV,null,null,null)
D.c7b=new A.ae(B.I9,16,null,null,null,null)
D.c8K=new A.e9(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jU,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eU,!0,null,null,null,null)
D.auN=new C.a77(10,null)
D.c9g=new C.a77(12,null)
D.c9h=new C.a77(14,null)
D.duE=w([B.bv,B.aV,B.fx,B.b5],x.O)
D.car=new A.a7(B.ay,B.aC,B.x,D.duE,null,null)
D.bsY=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bzr=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d8M=w([D.bsY,D.bzr],x.O)
D.caF=new A.a7(B.aX,B.b1,B.x,D.d8M,null,null)
D.do9=w([B.fl,B.h6,B.fx],x.O)
D.caL=new A.a7(B.ay,B.aC,B.x,D.do9,null,null)
D.akJ=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bjc=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.db9=w([D.akJ,D.bjc],x.O)
D.cbm=new A.a7(B.aX,B.b1,B.x,D.db9,null,null)
D.bn3=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aE5=w([D.bn3,D.akJ],x.O)
D.cbG=new A.a7(B.ay,B.aC,B.x,D.aE5,null,null)
D.ajr=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bpQ=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dnc=w([D.ajr,D.bpQ],x.O)
D.ccm=new A.a7(B.a5,B.a9,B.x,D.dnc,null,null)
D.dCh=w([B.bE,B.nL],x.O)
D.cco=new A.a7(B.aX,B.b1,B.x,D.dCh,null,null)
D.bsT=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dDg=w([D.bsT,D.kZ,D.kZ,E.O7],x.O)
D.dG0=w([0,0.07,0.9,1],x.n)
D.ccU=new A.a7(B.a5,B.a9,B.x,D.dDg,D.dG0,null)
D.cd2=new A.a7(B.ay,B.aC,B.x,B.TV,null,null)
D.d6k=w([B.aD,D.lR],x.O)
D.cd5=new A.a7(B.a5,B.a9,B.x,D.d6k,null,null)
D.dBP=w([B.b5,B.aV,B.bR],x.O)
D.ce8=new A.a7(B.ay,B.aC,B.x,D.dBP,null,null)
D.ciA=w([10,20,30],x.t)
D.csC=w([-1,-0.4,0.3,1],x.n)
D.cA9=w([B.bv,B.b5,B.fl],x.O)
D.cAh=w([B.bk,B.aD,B.kC],x.O)
D.cAj=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cB1=w([30,140,262,360],x.n)
D.br9=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cGD=w([D.br9,B.aki],x.O)
D.exP=new A.r(1,2)
D.fru=new A.dc(B.b7,D.exP,3)
D.aAX=w([D.fru],x.F)
D.cO9=w([B.hi,B.ce,B.fw],x.O)
D.cR_=w([B.bP,B.bz,B.bs],x.O)
D.bOp=new C.uX("classic","Classic leather","Gold-edged brown leather",D.aE5,B.kD,B.kD,"\u2766",B.K,!0,!1,!1,!1)
D.bih=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.by6=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.dex=w([D.bih,D.by6],x.O)
D.akl=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bOk=new C.uX("ornate","Ornate gold","Double gold border and flourishes",D.dex,D.akl,D.akl,"\u2726",B.K,!0,!0,!0,!1)
D.bmA=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.btI=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d5_=w([D.bmA,D.btI],x.O)
D.bOj=new C.uX("parchment","Parchment","Old paper with dark ink",D.d5_,D.GY,B.je,"\u2767",B.K,!0,!1,!1,!0)
D.ahv=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bwf=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dzS=w([D.ahv,D.bwf],x.O)
D.bqC=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bvs=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bOm=new C.uX("minimal","Clean paper","Plain and elegant, like a printed book",D.dzS,D.bqC,D.bvs,"",B.K,!0,!0,!1,!0)
D.bOo=new C.uX("midnight","Midnight","Deep blue with silver stars",B.aEp,B.cB,B.cj,"\u2727",B.K,!0,!0,!1,!1)
D.bOi=new C.uX("emerald","Emerald library","Green cloth, title on the left",H.aBm,B.kD,B.h8,"\u25c6",B.b8,!0,!1,!1,!1)
D.bwL=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dxI=w([B.ex,D.bwL],x.O)
D.bs_=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.btg=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bOn=new C.uX("rose","Rose vintage","Burgundy with rose-gold lettering",D.dxI,D.bs_,D.btg,"\u2740",B.K,!0,!1,!0,!1)
D.dCS=w([B.cu,B.n4],x.O)
D.bOl=new C.uX("modern","Modern","Dark, bold, left-aligned",D.dCS,B.aH,B.c,"",B.b8,!1,!0,!1,!1)
D.a6c=w([D.bOp,D.bOk,D.bOj,D.bOm,D.bOo,D.bOi,D.bOn,D.bOl],A.aD("U<uX>"))
D.cU1=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dCE=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bOA=new C.lx('What does "Ubuntu" mean?',D.dCE,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d75=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bOD=new C.lx("In Swahili, what do we call a grandmother?",D.d75,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d6X=w(["Babu","Mama","Baba","Dada"],x.s)
D.bOy=new C.lx("In Swahili, what do we call a grandfather?",D.d6X,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d8j=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bOC=new C.lx("What is a sister called in Swahili?",D.d8j,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.ddU=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bOz=new C.lx("What is a brother called in Swahili?",D.ddU,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d6W=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bOK=new C.lx("Which word means father in Swahili?",D.d6W,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dDS=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bOJ=new C.lx('"Umoja ni nguvu" means...',D.dDS,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dAA=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bOL=new C.lx('"Haba na haba hujaza kibaba" teaches us...',D.dAA,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.dbi=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bOI=new C.lx('The African saying "It takes a village to raise a child" means...',D.dbi,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dEb=w(["The elders","The market","The river","The drum"],x.s)
D.bOE=new C.lx("Who is the traditional keeper of the family stories?",D.dEb,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cYm=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bOB=new C.lx("Why do families sit round the fire at night?",D.cYm,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dCU=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bOG=new C.lx('What does "Harambee" mean?',D.dCU,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.dh3=w(["An elder","A baby","A market","A cow"],x.s)
D.bOF=new C.lx('"Mzee" is a respectful word for...',D.dh3,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dxy=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bOH=new C.lx('What does "Shikamoo" show?',D.dxy,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aBh=w([D.bOA,D.bOD,D.bOy,D.bOC,D.bOz,D.bOK,D.bOJ,D.bOL,D.bOI,D.bOE,D.bOB,D.bOG,D.bOF,D.bOH],x.J)
D.d1Q=w([90,360],x.n)
D.d4w=w([B.bR,B.bp],x.O)
D.bsG=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d5f=w([D.ahv,D.bsG],x.O)
D.d62=w([-1,-0.3,0.4,1],x.n)
D.d72=w([0,0.45,0.72,0.92,1],x.n)
D.bmw=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d7l=w([D.bmw,B.bB],x.O)
D.bkc=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.am7=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d7X=w([B.dz,D.bkc,D.am7],x.O)
D.d94=w([B.bc,B.jt,B.pw],x.O)
D.bn5=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bvj=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bjT=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d99=w([D.bn5,D.bvj,D.bjT],x.O)
D.d9w=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d9G=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hLE=new C.aez(78,424,48,44,56)
D.hLC=new C.aez(214,396,34,34,42)
D.hLD=new C.aez(442,452,56,50,64)
D.aCh=w([D.hLE,D.hLC,D.hLD],A.aD("U<aez>"))
D.daf=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bj5=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.boZ=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dFX=w([D.ajr,D.bj5,D.boZ],x.O)
D.bOq=new C.uY("leather","Leather",D.dFX,"vintage")
D.di8=w([B.dg,B.GM,B.a__],x.O)
D.bOx=new C.uY("midnight","Midnight",D.di8,"starry")
D.d95=w([B.eq,B.eh,B.lu],x.O)
D.bOw=new C.uY("forest","Forest",D.d95,"story")
D.dId=w([B.er,B.ex,B.kF],x.O)
D.bOt=new C.uY("burgundy","Burgundy",D.dId,"royal")
D.cQx=w([B.aD,B.n_,B.nC],x.O)
D.bOu=new C.uY("royal","Royal",D.cQx,"royal")
D.dbR=w([B.bz,B.cu,B.n4],x.O)
D.bOr=new C.uY("charcoal","Charcoal",D.dbR,"geo")
D.dG5=w([B.c9,B.dX,B.wE],x.O)
D.bOv=new C.uY("sunset","Sunset",D.dG5,"sunset")
D.dGU=w([B.jt,B.yV,B.a_3],x.O)
D.bOs=new C.uY("ocean","Ocean",D.dGU,"band")
D.As=w([D.bOq,D.bOx,D.bOw,D.bOt,D.bOu,D.bOr,D.bOv,D.bOs],A.aD("U<uY>"))
D.dcp=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.dd6=w([B.an,B.aM,B.a_],x.O)
D.deD=w([B.ex,B.eh,B.dg,B.iT,B.yX,B.cV,B.ka,B.cR,B.d9],x.O)
D.deE=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.frv=new A.dc(B.dH,B.dR,8)
D.deQ=w([D.frv],x.F)
D.dg4=w([B.c4,B.dX,B.k6],x.O)
D.bl3=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bph=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.btD=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.dgm=w([D.bl3,B.akS,D.bph,D.btD,D.am7],x.O)
D.dgD=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.dgR=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bit=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.boC=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dhn=w([D.bit,D.aiU,D.boC],x.O)
D.di3=w([B.c4,B.hG],x.O)
D.di9=w([B.nE,B.iq,B.ahH,B.cW],x.O)
D.djP=w([B.cW,B.nE,B.iq,D.lS,B.cW],x.O)
D.dku=w([B.aQ,B.yT,B.yJ],x.O)
D.eVo=new A.y(-0.65,0.6)
D.f7B=new A.y(-0.2,0.95)
D.f8L=new A.y(0.25,0.95)
D.eYY=new A.y(0.7,0.6)
D.f9l=new A.y(1,0.1)
D.dlk=w([V.VJ,D.eVo,D.f7B,D.f8L,D.eYY,D.f9l],x.G)
D.brt=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bxZ=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bm3=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dlr=w([D.brt,D.bxZ,D.bm3],x.O)
D.dlw=w([B.bM,B.c_,B.dC,B.aQ],x.O)
D.dm5=w([B.hY,B.c9,B.uJ],x.O)
D.dmt=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dmF=w([B.fl,B.cV],x.O)
D.bt1=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dn7=w([D.bt1,D.aht],x.O)
D.dnj=w([B.cT,B.fK,B.fV],x.O)
D.dnw=w([B.aH,B.bp,B.dg],x.O)
D.do6=w([B.eC,B.dt,B.eh],x.O)
D.dot=w([B.dV,B.dg,B.GM],x.O)
D.dox=w([B.bt,B.mX,B.d9],x.O)
D.doO=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bse=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bqk=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dp9=w([D.bse,D.aiQ,D.bqk],x.O)
D.dq1=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.drc=w([1,0,7,6,3,2],x.t)
D.a79=w(["leather","linen","plain","stars","rays"],x.s)
D.drn=w([0.5,2,3.6],x.n)
D.drW=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bWr=new A.a_(983781,"MaterialIcons",!1)
D.aDM=w([B.Q7,B.hP,B.kJ,B.ic,B.at1,B.Iv,B.r7,D.bWr,B.asF,B.DI,B.ra,B.m2],A.aD("U<a_>"))
D.a7d=w(["double","single","corners","none"],x.s)
D.bOf=new C.zK("Little Seed","\ud83c\udf31",0)
D.bOh=new C.zK("Young Listener","\ud83d\udc42",40)
D.bOg=new C.zK("Storyteller","\ud83e\ude98",120)
D.bOe=new C.zK("Village Pride","\ud83c\udfe1",300)
D.bOc=new C.zK("Keeper of Roots","\ud83c\udf33",700)
D.bOd=new C.zK("Elder of the Fire","\ud83d\udd25",1500)
D.aDO=w([D.bOf,D.bOh,D.bOg,D.bOe,D.bOc,D.bOd],A.aD("U<zK>"))
D.dtb=w([B.cX,B.bj,B.cR],x.O)
D.dtr=w([],x.C)
D.Ei=w([],x.u)
D.aNY=new A.r(225,528)
D.eX4=new A.y(D.aNY,1)
D.eyA=new A.r(350,548)
D.f2C=new A.y(D.eyA,0.95)
D.aNS=new A.r(158,656)
D.f2v=new A.y(D.aNS,1.12)
D.ezn=new A.r(92,544)
D.eSy=new A.y(D.ezn,0.93)
D.eyD=new A.r(398,614)
D.eZl=new A.y(D.eyD,1.04)
D.eyr=new A.r(318,662)
D.eNL=new A.y(D.eyr,1.1)
D.a7l=w([D.eX4,D.f2C,D.f2v,D.eSy,D.eZl,D.eNL],A.aD("U<+(r,H)>"))
D.dvz=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dw5=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dxe=w([B.cW,B.nE,B.iq,D.lS,B.cW,B.iq],x.O)
D.dyI=w([B.au,B.fK,B.iT],x.O)
D.dzp=w([-70,58],x.n)
D.dzr=w([-70,-30,20],x.n)
D.dAx=w([B.bt,B.mX,B.a09],x.O)
D.dAP=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dXj=new C.m_("construction","Construction","Jobsite & builds",B.r9)
D.dXq=new C.m_("house","Home Build","Houses & rooms",B.vm)
D.dXg=new C.m_("grocery","Grocery","Store & pantry",B.a4I)
D.dXf=new C.m_("calculator","Calculations","Math & estimates",B.Qe)
D.dXo=new C.m_("lumber","Materials","Lumber & supplies",B.Is)
D.dXc=new C.m_("kitchen","Kitchen","Remodel & meals",O.Qz)
D.bWo=new A.a_(983756,"MaterialIcons",!1)
D.dXh=new C.m_("landscape","Landscaping","Yard & garden",D.bWo)
D.dXb=new C.m_("plumbing","Plumbing","Pipes & water",B.pU)
D.dXr=new C.m_("electrical","Electrical","Wiring & power",B.he)
D.dX9=new C.m_("store","Retail Shop","Daily business",B.km)
D.dXa=new C.m_("paint_remodel","Paint & Remodel","Colors & walls",O.Qv)
D.bVL=new A.a_(983311,"MaterialIcons",!1)
D.dXn=new C.m_("roofing","Roofing","Roofs & exteriors",D.bVL)
D.bWB=new A.a_(983986,"MaterialIcons",!1)
D.dX8=new C.m_("warehouse","Warehouse","Storage & stock",D.bWB)
D.dXl=new C.m_("vehicles","Vehicles","Fleet & transport",B.DF)
D.bTu=new A.a_(62785,"MaterialIcons",!1)
D.dXe=new C.m_("farm","Farm","Crops & livestock",D.bTu)
D.dXd=new C.m_("restaurant","Restaurant","Food & catering",B.vt)
D.dXk=new C.m_("tools","Tools","Workshop gear",B.DB)
D.dXp=new C.m_("wallet","Cash & Wallet","Quick spending",B.jA)
D.dXm=new C.m_("concrete","Concrete","Foundation work",B.arJ)
D.dXi=new C.m_("blueprint","Blueprint","Plans & design",B.arg)
D.a7K=w([D.dXj,D.dXq,D.dXg,D.dXf,D.dXo,D.dXc,D.dXh,D.dXb,D.dXr,D.dX9,D.dXa,D.dXn,D.dX8,D.dXl,D.dXe,D.dXd,D.dXk,D.dXp,D.dXm,D.dXi],A.aD("U<m_>"))
D.dBt=w([B.bu,B.bj],x.O)
D.dCi=w([B.iD,B.oy,B.e0],x.O)
D.ajF=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.akE=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bqG=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bhX=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aEX=w([D.ajF,D.akE,D.bqG,D.bhX],x.O)
D.dDx=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a7U=w(["top","middle","bottom"],x.s)
D.dF5=w([B.ct,B.bp,B.dg],x.O)
D.aFg=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.bbx=new A.ab(0,B.H,B.b7,B.J,14)
D.aFk=w([D.bbx],x.V)
D.bpw=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dFQ=w([D.ai8,D.a08,D.bpw],x.O)
D.dFR=w([B.be,B.dt,B.eh],x.O)
D.eya=new A.r(24,-8)
D.eyT=new A.r(48,0)
D.ey6=new A.r(24,6)
D.dHH=w([B.J,D.eya,D.eyT,D.ey6],x.g)
D.dI8=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.euB={top:0,middle:1,bottom:2}
D.dLs=new A.bq(D.euB,["Top","Middle","Bottom"],x.r)
D.eu9={double:0,single:1,corners:2,none:3}
D.dLy=new A.bq(D.eu9,["Double line","One line","Corners","None"],x.r)
D.evp={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dNc=new A.bq(D.evp,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dNp=new A.bq(B.ig,[],A.aD("bq<G,+(p,p)>"))
D.eus={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Ey=new A.bq(D.eus,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.aD("bq<p,G>"))
D.dRI=new A.O8(32,null)
D.dRJ=new A.O8(40,null)
D.dRK=new A.O8(46,null)
D.aNq=new C.auW(null)
D.ex1=new A.r(0,40)
D.ex2=new A.r(0,412)
D.ex5=new A.r(0,900)
D.exe=new A.r(0,-34)
D.exf=new A.r(0,-46)
D.exh=new A.r(0,-74)
D.exk=new A.r(100,300)
D.exl=new A.r(10,14)
D.exo=new A.r(10,-10)
D.ext=new A.r(10,-46)
D.exu=new A.r(10,-58)
D.exv=new A.r(116,442)
D.exx=new A.r(11,-1)
D.exy=new A.r(11,-10)
D.exz=new A.r(11,-21)
D.aNN=new A.r(11,-60)
D.exG=new A.r(14,-2)
D.exH=new A.r(150,520)
D.aa5=new A.r(150,592)
D.exK=new A.r(15,-15)
D.exL=new A.r(16,-1)
D.exO=new A.r(190,444)
D.exR=new A.r(1,5)
D.exZ=new A.r(21,-78)
D.ey_=new A.r(222,615)
D.Kq=new A.r(225,300)
D.aa7=new A.r(225,574)
D.ey9=new A.r(24,-52)
D.eyb=new A.r(250,210)
D.eym=new A.r(2,-56)
D.aO1=new A.r(300,0)
D.eyn=new A.r(300,440)
D.eyq=new A.r(318,476)
D.eyt=new A.r(324,144)
D.aaa=new A.r(332,150)
D.eyv=new A.r(335,585)
D.eyw=new A.r(338,140)
D.eyx=new A.r(340,158)
D.eyz=new A.r(34,-60)
D.F_=new A.r(36,-24)
D.eyB=new A.r(372,470)
D.eyC=new A.r(390,455)
D.eyL=new A.r(42,468)
D.eyM=new A.r(431,510)
D.eyN=new A.r(431,520)
D.eyO=new A.r(45,-92)
D.eyP=new A.r(46,20)
D.eyQ=new A.r(46,-92)
D.eyR=new A.r(46,-94)
D.eyS=new A.r(47,-4)
D.eyU=new A.r(48,-4)
D.ez1=new A.r(4,-26)
D.ez9=new A.r(60,455)
D.ezi=new A.r(8,14)
D.ezm=new A.r(8,-76)
D.ezo=new A.r(95,575)
D.ezp=new A.r(98,-24)
D.ezr=new A.r(9,-2)
D.ezs=new A.r(9,-58)
D.aOa=new A.r(9,-79)
D.ezt=new A.r(9,-9)
D.eA5=new A.r(16.5,8)
D.eA7=new A.r(3.2,0)
D.eA8=new A.r(-16.5,8)
D.eAf=new A.r(16.5,2)
D.eAi=new A.r(-3.2,0)
D.eAq=new A.r(9.5,6)
D.eAt=new A.r(-10,14)
D.eAu=new A.r(-10,-12)
D.eAv=new A.r(-10,-58)
D.eAx=new A.r(-11,-10)
D.eAz=new A.r(-11,-60)
D.eAA=new A.r(-12,-14)
D.eAB=new A.r(-12,-16)
D.eAG=new A.r(-14,-2)
D.eAJ=new A.r(-15,-15)
D.eAK=new A.r(-15,-3)
D.eAM=new A.r(-16,-1)
D.eB1=new A.r(-24,-52)
D.eBa=new A.r(-2,-34)
D.eBb=new A.r(-2,-38)
D.eBd=new A.r(-30,-100)
D.aac=new A.r(-36,-24)
D.eBo=new A.r(-4,-26)
D.eBq=new A.r(-4,-6)
D.eBz=new A.r(-8,-3)
D.eBA=new A.r(-8,-48)
D.eBD=new A.r(-9,-2)
D.eBF=new A.r(-9,-58)
D.eBG=new A.r(-9,-79)
D.eBH=new A.r(-9,-9)
D.eBJ=new A.r(-9.5,6)
D.eBW=new A.r(-16.5,2)
D.h1j=new A.C("Write a new book",null,B.hs,null,B.K,null,null,null,null,null,null,null)
D.eCv=new A.D(B.l5,D.h1j,null)
D.hgb=new A.C("Tap to go on",null,B.w5,null,null,null,null,null,null,null,null,null)
D.eCR=new A.D(B.lx,D.hgb,null)
D.atb=new A.ae(B.ib,18,B.c,null,null,null)
D.fVf=new A.C("Add",null,B.kQ,null,null,null,null,null,null,null,null,null)
D.dlM=w([D.atb,B.rx,D.fVf],x.p)
D.foz=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,D.dlM,null)
D.eCU=new A.D(B.nW,D.foz,null)
D.eCW=new A.D(B.anf,S.Zh,null)
D.fOD=new A.F(!0,B.c,null,null,null,null,13.5,B.F,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYv=new A.C("New Project",null,D.fOD,null,null,null,null,null,null,null,null,null)
D.dqs=w([D.atb,B.aa,D.fYv],x.p)
D.foC=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,D.dqs,null)
D.eD9=new A.D(B.hy,D.foC,null)
D.h02=new A.C("Choose your header",null,B.uf,null,null,null,null,null,null,null,null,null)
D.eDu=new A.D(B.ia,D.h02,null)
D.bha=new A.fo(2.2,null,null,null,null,B.cV,null,null,null,null)
D.fun=new A.a6(22,22,D.bha,null)
D.bfg=new A.cl(B.z,null,null,D.fun,null)
D.eDz=new A.D(B.a1u,D.bfg,null)
D.bGP=new A.P(14,2,14,6)
D.heg=new A.C("The top of your book. Tap a design to see it.",null,B.ug,null,null,null,null,null,null,null,null,null)
D.eDA=new A.D(D.bGP,D.heg,null)
D.h_c=new A.C("\ud83c\udfc6 A new record!",null,B.hg,null,null,null,null,null,null,null,null,null)
D.eDC=new A.D(B.lx,D.h_c,null)
D.eFa=new A.jj(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eFd=new A.jj(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aON=new A.jj(1,0.9607843137254902,0.48627450980392156,0)
D.Ky=new A.jj(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.B2=new A.jj(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eFj=new A.jj(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hNQ=new C.bkQ(null)
D.bBB=new A.mI(D.hNQ,null,B.az,null,null)
D.aSq=new A.cN(0,0,0,0,null,null,D.bBB,null)
D.fVh=new A.C("\ud83c\udfc5",null,B.acw,null,null,null,null,null,null,null,null,null)
D.eJJ=new A.cN(null,0,-34,null,null,null,D.fVh,null)
D.eSc=new A.y("E","Sit by the fire again")
D.eXX=new A.y("C","Good Learner")
D.f0w=new A.y("D","Still Growing")
D.f5j=new A.y(-42,42)
D.f6J=new A.y("B","Faithful Listener")
D.f8N=new A.y("A","Keeper of the Family")
D.fc0=new A.b3(-17,0.7,0)
D.fcA=new A.b3(-8,0.95,1.3)
D.fdH=new A.b3(18,0.65,5.2)
D.fdJ=new A.b3(0,1.15,2.6)
D.fe3=new A.b3(9,0.9,3.9)
D.fg1=new A.b7([0,0,1,1])
D.aTX=new A.a3(0,0,520,160)
D.flA=new A.a3(10,612,440,618)
D.flB=new A.a3(10,612,440,628)
D.flE=new A.a3(14,-64,34,-12)
D.flH=new A.a3(300,336,350,348)
D.ab6=new A.a3(30,96,420,346)
D.flI=new A.a3(30,-9,46,1)
D.flJ=new A.a3(4,2,11,14)
D.flL=new A.a3(-8,-12.5,8,-7)
D.flM=new A.a3(-16.5,-21,16.5,1)
D.flN=new A.a3(60,342,88,348)
D.VK=new A.a3(66,-66,94,-36)
D.flO=new A.a3(6,8,10,14)
D.flR=new A.a3(95,343,115,348)
D.flS=new A.a3(-6.5,-74,6.5,-58)
D.flY=new A.a3(-100,-74,100,-12)
D.flZ=new A.a3(-10,8,-6,14)
D.fm_=new A.a3(-11,2,-4,14)
D.fm0=new A.a3(-11,-70,11,-56)
D.fm7=new A.a3(-13,-24,13,-4)
D.fme=new A.a3(-15,-21,15,0)
D.fmh=new A.a3(-16,-21,16,1)
D.fmi=new A.a3(-16,-21,16,2)
D.fml=new A.a3(-16,-26,16,-6)
D.fmt=new A.a3(-230,-26,230,26)
D.fmS=new A.a3(-38,-26,12,-6)
D.fmW=new A.a3(-3,-70,3,-63)
D.fmX=new A.a3(-44,-22,44,0)
D.fmZ=new A.a3(-46,-9,-30,1)
D.aU0=new A.a3(-80,-190,80,20)
D.fn5=new A.a3(-8,-26,40,-6)
D.fn6=new A.a3(-98,-80,92,-75)
D.fn7=new A.a3(-9,-15,9,-9)
D.hdN=new A.C("Let the AI write it from your tree",null,B.iP,null,B.K,null,null,null,null,null,null,null)
D.bPk=new A.d2(1,B.cg,D.hdN,null)
D.di2=w([B.a5c,B.aa,D.bPk],x.p)
D.fob=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,D.di2,null)
D.fUT=new A.C("Save member",null,B.cc,null,null,null,null,null,null,null,null,null)
D.dz8=w([D.au3,B.aa,D.fUT],x.p)
D.fom=new A.c3(B.aL,B.b9,B.h,B.l,null,B.p,null,0,D.dz8,null)
D.c06=new A.ae(B.is,14,B.b5,null,null,null)
D.fI6=new A.F(!0,B.b5,null,null,null,null,12,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYW=new A.C("Cashier",null,D.fI6,null,null,null,null,null,null,null,null,null)
D.dr1=w([D.c06,B.bf,D.fYW],x.p)
D.foq=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,D.dr1,null)
D.fUU=new A.C("Transfer & settings",null,B.dq,null,null,null,null,null,null,null,null,null)
D.bN0=new A.bx(1,B.ba,D.fUU,null)
D.d8s=w([D.atD,B.ar,D.bN0],x.p)
D.fos=new A.c3(B.aL,B.e,B.h,B.l,null,B.p,null,0,D.d8s,null)
D.ft2=new A.au(16,40)
D.ft7=new A.au(22,64)
D.fte=new A.au(280,88)
D.fu2=new A.a6(30,null,null,null)
D.fTZ=new A.C("The teacher is writing\u2026",null,B.Bo,null,null,null,null,null,null,null,null,null)
D.bgm=new A.cl(B.z,null,null,D.fTZ,null)
D.hHA=new A.bl("w",x.W)
D.fur=new A.a6(null,56,D.bgm,D.hHA)
D.fve=new A.hS(5,8,8,1,null)
D.fvm=new A.hS(2,12,12,1.05,null)
D.fYB=new A.C("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fw6=new A.b0(D.fYB,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fYR=new A.C("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aWk=new A.b0(D.fYR,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h6m=new A.C("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fwA=new A.b0(D.h6m,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hhe=new A.C("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fwF=new A.b0(D.hhe,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h00=new A.C("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fwM=new A.b0(D.h00,null,null,null,null,null,null,null,null,null,null,null,null,B.fX,!1,null,null,null,B.t,null)
D.het=new A.C("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aWp=new A.b0(D.het,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h_Z=new A.C("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fxb=new A.b0(D.h_Z,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fVy=new A.C("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fxd=new A.b0(D.fVy,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h3M=new A.C("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fxj=new A.b0(D.h3M,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hi_=new A.C("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fy_=new A.b0(D.hi_,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hcH=new A.C("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fyp=new A.b0(D.hcH,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hhi=new A.C("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fys=new A.b0(D.hhi,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h8_=new A.C("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fyu=new A.b0(D.h8_,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h1W=new A.C("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fyv=new A.b0(D.h1W,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h1X=new A.C("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fzw=new A.b0(D.h1X,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fYD=new A.C("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fzO=new A.b0(D.fYD,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h_E=new A.C("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fA7=new A.b0(D.h_E,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h7t=new A.C("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fAo=new A.b0(D.h7t,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h2L=new A.C("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fAp=new A.b0(D.h2L,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fNj=new A.F(!0,B.bA,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBY=new A.et("\u2665",null,null,B.cO,null,null,null,null,null,null,D.fNj)
D.fKr=new A.F(!0,B.aS,null,null,null,null,28,B.O,B.cL,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCd=new A.et("Today: how well do you know the family?",null,null,B.cO,null,null,null,null,null,null,D.fKr)
D.fCu=new A.F(!0,B.qt,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDG=new A.F(!0,D.kZ,null,null,null,null,13,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fE2=new A.F(!0,D.kZ,null,null,null,null,12,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fE6=new A.F(!0,B.cW,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEf=new A.F(!0,D.fJ,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEq=new A.F(!0,D.fJ,null,null,null,null,13,B.F,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEK=new A.ta(!0,B.u2,null,null,null,null,B.dK,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF_=new A.F(!0,B.cW,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF3=new A.F(!0,D.kZ,null,null,null,null,18,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF4=new A.F(!0,B.cW,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF9=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFc=new A.F(!0,B.cW,null,null,null,null,15,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFI=new A.F(!0,B.b5,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFJ=new A.F(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFL=new A.F(!0,B.aS,null,null,null,null,15.5,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGb=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXE=new A.F(!0,B.aR,null,null,null,null,null,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXF=new A.F(!0,D.lR,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGB=new A.F(!0,B.cW,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acB=new A.ta(!0,B.Vg,null,null,null,null,B.dK,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.WD=new A.F(!0,B.cW,null,null,null,null,null,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGL=new A.F(!0,B.a_,null,null,null,null,12.5,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGQ=new A.F(!0,D.fJ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHf=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIq=new A.F(!0,D.fJ,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXO=new A.F(!0,D.fJ,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIK=new A.F(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIW=new A.F(!0,D.fJ,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIY=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ3=new A.F(!0,B.je,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXS=new A.F(!0,D.fJ,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK1=new A.F(!0,D.fJ,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKk=new A.F(!0,D.fJ,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKm=new A.F(!0,B.a_,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKo=new A.F(!0,B.cW,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKM=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,R.Jq,null,null,null)
D.aY5=new A.F(!0,D.fJ,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLb=new A.F(!0,B.a_,null,null,null,null,17,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLx=new A.F(!0,B.fo,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLV=new A.F(!0,B.bR,null,null,null,null,8,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM_=new A.F(!0,B.bE,null,null,null,null,11,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMb=new A.F(!0,B.c,null,null,null,null,13.5,B.F,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMe=new A.F(!0,D.fJ,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMm=new A.F(!0,D.GY,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMy=new A.F(!0,B.b5,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMX=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN3=new A.F(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.Ea,null,null,null)
D.fNu=new A.F(!0,B.cW,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNC=new A.F(!0,B.cV,null,null,null,null,13,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNP=new A.F(!0,D.lS,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYs=new A.F(!0,D.fJ,null,null,null,null,null,B.F,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.LK=new A.F(!0,B.cW,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYu=new A.F(!0,B.cW,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.Ea,null,null,null)
D.fO9=new A.F(!0,B.bR,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOd=new A.F(!0,B.nE,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOB=new A.F(!0,B.b5,null,null,null,null,13,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOT=new A.F(!0,D.fJ,null,null,null,null,15,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPh=new A.F(!0,B.c,null,null,null,null,null,B.F,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPG=new A.F(!0,D.fJ,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQc=new A.F(!0,D.fJ,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQh=new A.F(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQr=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ad7=new A.F(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ada=new A.F(!0,D.lR,null,null,null,null,null,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSb=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSw=new A.F(!0,B.aS,null,null,null,null,27,B.O,B.cL,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSD=new A.F(!0,B.je,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSL=new A.F(!0,B.je,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTe=new A.C("Time:",null,B.hD,null,null,null,null,null,null,null,null,null)
D.fTA=new A.C("\ud83c\udfae",null,B.acY,null,null,null,null,null,null,null,null,null)
D.fTB=new A.C("Themes",null,B.pi,null,null,null,null,null,null,null,null,null)
D.fU6=new A.C("\ud83c\udfb2",null,B.y4,null,null,null,null,null,null,null,null,null)
D.fUa=new A.C("Delete this game?",null,B.iP,null,null,null,null,null,null,null,null,null)
D.fUh=new A.C("Add Item",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fIE=new A.F(!0,B.a_,null,null,null,null,22,B.F,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUI=new A.C("Debt receipt",null,D.fIE,null,B.K,null,null,null,null,null,null,null)
D.aYI=new A.F(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fV0=new A.C("Person who owes",null,D.aYI,null,null,null,null,null,null,null,null,null)
D.fW1=new A.C("Notes",null,B.acN,null,null,null,null,null,null,null,null,null)
D.fWu=new A.C("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fHy=new A.F(!0,B.c,null,null,null,null,11,B.F,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWw=new A.C("Share",null,D.fHy,null,null,null,null,null,null,null,null,null)
D.fXx=new A.C("Move your family trees",null,E.ad4,null,null,null,null,null,null,null,null,null)
D.fYc=new A.C("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fYQ=new A.C("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fZd=new A.C("SAVE",null,D.LK,null,null,null,null,null,null,null,null,null)
D.fZR=new A.C("The round button is the right answer.",null,B.Bs,null,null,null,null,null,null,null,null,null)
D.h_b=new A.C("Remove this book?",null,B.hg,null,null,null,null,null,null,null,null,null)
D.fOy=new A.F(!0,B.cW,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.Ea,null,null,null)
D.h_J=new A.C("Fireside Stories",null,D.fOy,null,null,null,null,null,null,null,null,null)
D.aZb=new A.C("Download",null,B.cc,null,null,null,null,null,null,null,null,null)
D.h0p=new A.C("What should the AI do?",null,B.dq,null,null,null,null,null,null,null,null,null)
D.fH9=new A.F(!0,D.lR,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0E=new A.C("REPORT CARD",null,D.fH9,null,null,null,null,null,null,null,null,null)
D.h1q=new A.C("Calabash Catch",null,B.X_,null,null,null,null,null,null,null,null,null)
D.h1S=new A.C("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.h2i=new A.C("\ud83c\udfe1",null,B.Fv,null,null,null,null,null,null,null,null,null)
D.h3_=new A.C("Ribbon bookmark",null,B.jK,null,null,null,null,null,null,null,null,null)
D.fQb=new A.F(!0,B.b5,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3u=new A.C("NGMY.ORG",null,D.fQb,null,B.K,null,null,null,null,null,null,null)
D.h4P=new A.C("Scan family tree QR",null,B.cH,null,null,null,null,null,null,null,null,null)
D.fMf=new A.F(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5C=new A.C("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fMf,null,B.K,null,null,null,null,null,null,null)
D.h6Q=new A.C("Delete",null,B.Wx,null,null,null,null,null,null,null,null,null)
D.h6R=new A.C("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.h6Z=new A.C("Thumbnail",null,B.pi,null,null,null,null,null,null,null,null,null)
D.h7y=new A.C("Save the cover",null,B.cH,null,null,null,null,null,null,null,null,null)
D.h7D=new A.C("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.Bw,null,B.K,null,null,null,null,null,null,null)
D.h80=new A.C("Your photos",null,B.pi,null,null,null,null,null,null,null,null,null)
D.h8h=new A.C("Create Project",null,B.cc,null,null,null,null,null,null,null,null,null)
D.h8E=new A.C("\u2b50 stars",null,B.LF,null,null,null,null,null,null,null,null,null)
D.h8S=new A.C("Design your cover",null,B.uf,null,null,null,null,null,null,null,null,null)
D.h8Y=new A.C("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.h90=new A.C("PICTURE",null,F.w8,null,null,null,null,null,null,null,null,null)
D.h92=new A.C("\ud83c\udfaf",null,D.WZ,null,null,null,null,null,null,null,null,null)
D.h9p=new A.C("Paid",null,B.cc,null,null,null,null,null,null,null,null,null)
D.h9r=new A.C("You can undo it right after.",null,B.Bs,null,null,null,null,null,null,null,null,null)
D.ha_=new A.C("Print",null,B.w6,null,null,null,null,null,null,null,null,null)
D.hap=new A.C("Amount owed",null,D.aYI,null,null,null,null,null,null,null,null,null)
D.haF=new A.C("Got it",null,B.cc,null,null,null,null,null,null,null,null,null)
D.hbh=new A.C("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.hbk=new A.C("Add to budget",null,B.cc,null,null,null,null,null,null,null,null,null)
D.hbK=new A.C("Debtor signature",null,B.acN,null,null,null,null,null,null,null,null,null)
D.hbU=new A.C("Change icon",null,B.acM,null,null,null,null,null,null,null,null,null)
D.hcI=new A.C("MADE BY THE SYSTEM, FROM YOUR TREE",null,B.ui,null,null,null,null,null,null,null,null,null)
D.hd9=new A.C("Family tree QR",null,B.cH,null,null,null,null,null,null,null,null,null)
D.hdf=new A.C("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.WY,null,null,null,null,null,null,null,null,null)
D.hdD=new A.C("Download",null,B.w6,null,null,null,null,null,null,null,null,null)
D.hdE=new A.C("The person who planted this tree has not made a game yet.",null,B.Bu,null,null,null,null,null,null,null,null,null)
D.hdI=new A.C("Change",null,B.pi,null,null,null,null,null,null,null,null,null)
D.hez=new A.C("Clear all",null,B.cc,null,null,null,null,null,null,null,null,null)
D.heC=new A.C("WHAT SHOULD IT CHANGE?",null,F.w8,null,null,null,null,null,null,null,null,null)
D.hfa=new A.C("COLOUR",null,F.w8,null,null,null,null,null,null,null,null,null)
D.hfp=new A.C("Do it",null,B.cH,null,null,null,null,null,null,null,null,null)
D.hft=new A.C("Create Tree",null,B.cc,null,null,null,null,null,null,null,null,null)
D.hfD=new A.C("Give me another clue",null,D.LK,null,null,null,null,null,null,null,null,null)
D.hgx=new A.C("Create Family Tree",null,B.fh,null,null,null,null,null,null,null,null,null)
D.hgH=new A.C("THE TEACHER EXPLAINS THESE",null,B.ui,null,null,null,null,null,null,null,null,null)
D.fCt=new A.F(!0,B.kD,null,null,null,null,null,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hgN=new A.C("Write the first page myself",null,D.fCt,null,null,null,null,null,null,null,null,null)
D.hhl=new A.C("Use this header",null,B.cH,null,null,null,null,null,null,null,null,null)
D.hhs=new A.C("Create Project",null,B.aYo,null,null,null,null,null,null,null,null,null)
D.hJ3=new C.adb(1,"header")
D.aeb=new C.adb(2,"projects")
D.hJ4=new C.adb(3,"cashier")
D.aec=new C.adb(4,"familyTree")
D.hYK=new C.cIr(0,"start")
D.hYL=new C.cIs(0,"start")
D.hJh=new C.a_b(null)
D.hKi=new C.a_G(null)
D.dNm=new A.bq(B.ig,[],A.aD("bq<p,GR>"))
D.dtQ=w([],x.dE)
D.dtR=w([],x.M)
D.hKX=new C.bi0(D.dNm,D.dtQ,D.dtR,0,0,null,null)
D.b2H=new C.a0w(0,"intro")
D.b2I=new C.a0w(1,"countdown")
D.aep=new C.a0w(2,"ask")
D.XW=new C.a0w(3,"reveal")
D.b2J=new C.a0w(4,"end")
D.hNS=new C.ti(B.H7,D.lS,B.cW,B.mj,5,!1,!1,!1,0,null)
D.hNU=new C.ti(B.H7,B.er,B.cW,B.bO,2,!0,!0,!1,2,B.cW)
D.hNW=new C.ti(B.qJ,B.cV,B.cW,B.mj,2,!0,!1,!1,2,B.au)
D.hNX=new C.ti(B.H7,B.dV,B.cW,B.mj,5,!1,!1,!1,1,null)
D.hO_=new C.ti(B.a0p,D.akE,B.cW,B.mj,4,!0,!1,!0,0,null)
D.b2M=new C.ti(B.a0p,B.dX,B.cW,B.mj,3,!0,!1,!0,2,null)
D.b2N=new C.ti(B.te,D.lS,B.c,B.mj,0,!1,!1,!0,0,null)
D.b2O=new C.ti(B.qJ,B.aD,B.cW,B.bO,2,!0,!0,!1,2,B.dX)
D.b2P=new C.ti(B.qJ,B.nE,B.iq,B.mj,5,!1,!1,!0,3,null)
D.hO3=new C.ti(B.qJ,B.dX,B.cW,B.mj,0,!0,!1,!1,0,B.aD)
D.b2Q=new C.ti(B.H7,B.er,B.cW,B.bO,1,!1,!0,!1,1,null)
D.b2R=new C.ti(B.GC,B.au,B.aD,B.mj,4,!0,!1,!0,2,null)
D.hO5=new C.ti(B.te,B.au,B.er,B.mj,3,!0,!1,!1,0,null)
D.hO7=new C.ti(B.qJ,B.dV,B.cW,B.bO,1,!1,!0,!1,1,null)
D.hO8=new C.ti(B.GC,D.ajF,B.c,B.mj,5,!1,!1,!0,0,null)
D.hON=new C.a14(null)
D.hYT=new C.agC(0,"still")
D.Yi=new C.agC(1,"walk")
D.b3A=new C.agC(2,"pound")
D.b3B=new C.agC(3,"drum")
D.hUn=new C.a2m(0,"greet")
D.b3C=new C.a2m(1,"teach")
D.aeJ=new C.a2m(2,"ask")
D.hUo=new C.a2m(3,"feedback")
D.b3D=new C.a2m(4,"end")
D.Yp=new C.a2F(0,"intro")
D.Yq=new C.a2F(1,"asking")
D.BM=new C.a2F(2,"reacting")
D.aeU=new C.a2F(3,"driving")
D.aeV=new C.a2F(4,"arrived")
D.af2=new C.aMD(0,"projects")
D.b42=new C.aMD(1,"cashier")
D.hWt=new C.aMD(2,"familyTree")})()};
(a=>{a["cb7nUYxSot00EuG4QogdLhz0Kx4="]=a.current})($__dart_deferred_initializers__);