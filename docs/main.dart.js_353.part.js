((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,P,A_,R,A8,L,H,E,S,A9,T,Aa,Ab,Ac,A0,Ad,Ae,Q,A1,Af,Ag,Ah,M,A2,Ai,A3,A4,A5,Aj,A6,Ak,G,Al,Am,An,A7,Ao,U,O,Ap,V,Aq,Ar,W,X,F,As,I,K,Y,C={
bG8(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bG8=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vX(null,""),$async$bG8)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nm(b1)
s=A.c1(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dt(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cS(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.I)(h),++d){a0=h[d]
f.push(A.J(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.X.aw(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.ri(t,a1,B.i6,"book",E.GM),$async$bG8)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.RD(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.M3(l)?y.k:y.y)
for(j=J.a7(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cF
g=a8.h(0,"title")
a9=B.a.i(A.w(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.w(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.y(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a3O(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bG8,v)},
aii(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aii=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vX(null,""),$async$aii)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nm(b6)
s=x.S
r=A.cX(c1,0,A.dB(4,"count",s),A.U(c1).c)
q=H.a3A(new A.N(r,new C.fPu(),r.$ti.k("N<ak.E,n>")).aN(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fPt(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.X.aw(b7,null)+"\nAllowed values: style one of "+B.d.aN(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aii)
case 6:l=c5
k=H.RD(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.apT(s,D.dGJ,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.t
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.W("There is no page to change.")
h=A.T(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.dt(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.I)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.J(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.X.aw(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aii)
case 10:l=c5
k=l==null?null:H.RD(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.de(a8,d),a5=J.aT(a2.a),a2=a2.$ti,a7=new A.kN(a5,a2.k("kN<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
b0=J.a7(a9)
b1=A.aJ(b0.h(a9,"index"))
i=b1==null?null:B.j.M(b1)
if(i==null||!B.d.q(a4,i))continue
b1=b0.h(a9,"title")
b2=B.a.i(A.w(b1==null?"":b1))
a9=b0.h(a9,"body")
b3=B.a.i(A.w(a9==null?"":a9))
a9=b2.length===0
if(a9&&b3.length===0)continue
a9=a9?c1[i].a:b2
h.n(0,i,new A.y(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("b8<2>")
p=A.cF(new A.b8(h,s),new C.fPv(),s.k("M.E"),p)
p=H.a3A(A.pL(p,3,A.a4(p).k("M.E")).aN(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cx<1>")
b4=A.C(new A.cx(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a3O(s,b9),$async$aii)
case 13:b5=c5
for(s=J.a7(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.apT(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aii,v)},
hH5(d,e,f){return A.cg(null,B.w.j(0.65),!1,null,new C.fZ7(e,f),d,null,!0,!0,x.g2)},
apT:function apT(d,e,f){this.a=d
this.b=e
this.c=f},
fPu:function fPu(){},
fPt:function fPt(d){this.a=d},
fPv:function fPv(){},
fZ7:function fZ7(d,e){this.a=d
this.b=e},
bDW(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bDW=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aV(b1,new C.fCy())){u=null
w=1
break}t=B.d.cD(b1,new C.fCz())
s=$.S()
r=new A.q3(new A.pE())
q=A.zy(r,D.aSu)
p=A.L()
p.r=B.c.gp(0)
q.ar(D.aSu,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.a9
o.d=B.bv
o.e=B.dT
n=new C.fCE(t)
if(!t){for(s=b1.length,m=1/0,l=1/0,k=0,j=0,i=0;i<s;++i){h=b1[i]
if(h==null)continue
g=h.a
if(g<m)m=g
f=h.b
if(f<l)l=f
if(g>k)k=g
if(f>j)j=f}e=B.j.D(k-m,1,1e4)
d=B.j.D(j-l,1,1e4)
a0=B.j.D(478.40000000000003/e,0,147.20000000000002/d)
a1=(520-e*a0)/2
a2=(160-d*a0)/2
s=$.S()
p=A.a([],x.v)
a3=new A.aG(s.r,B.ai,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.aZ(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.ak(a8)
a3.ab()
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.ak(a8)
a3.ab()}}q.af(a3,o)}else{p=A.a([],x.v)
a3=new A.aG(s.r,B.ai,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.aZ(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.ak(a8)
a3.ab()
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.ak(a8)
a3.ab()}}q.af(a3,o)}w=4
return A.b(r.o3().xH(520,160),$async$bDW)
case 4:w=3
return A.b(b3.hi(B.ha),$async$bDW)
case 3:b0=b3
u=b0==null?null:J.eQ(B.dM.gaU(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDW,v)},
fNa(d){return C.imh(d)},
imh(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fNa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bjK()
n=d.x!=null&&d.zL(null).length===0
if(d.x!=null)t=n?D.Aw:D.JS
else t=d.gUF()?D.JS:D.aNm
w=3
return A.b(C.bDW(d.ax),$async$fNa)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aoy(s)
r=A.a5z(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aNm}else{p.c=C.xo(q,!0)
p.b=n?D.Aw:D.JS}r.a4d(A.h8R(new C.fNc(p,d,new C.fNd(),t,n,o),null,D.bHL,B.xh))
u=r.jI(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fNa,v)},
fTV(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fTV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fNa(d),$async$fTV)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aB(q,0,40)
u=Ae.Hw(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fTV,v)},
fCy:function fCy(){},
fCz:function fCz(){},
fCE:function fCE(d){this.a=d},
fNd:function fNd(){},
fNc:function fNc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fNb:function fNb(){},
fZA(d,e){var w=0,v=A.j(x.H)
var $async$fZA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,B.w.j(0.55),!0,null,new C.fZE(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fZA)
case 2:return A.h(null,v)}})
return A.i($async$fZA,v)},
bGB(d,e,f,g){return C.iuk(d,e,f,g)},
iuk(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bGB=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cM.aO(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.T(D.fom)
w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.fZw(g,r,f),d,null,!0,!0,x.H),$async$bGB)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bGB,v)},
fZF(d,e){var w=0,v=A.j(x.H)
var $async$fZF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,null,!0,null,new C.fZI(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fZF)
case 2:return A.h(null,v)}})
return A.i($async$fZF,v)},
b05:function b05(d,e){this.c=d
this.a=e},
c8p:function c8p(){},
bdh:function bdh(d,e){this.b=d
this.a=e},
fZE:function fZE(d,e){this.a=d
this.b=e},
fZB:function fZB(d){this.a=d},
fZC:function fZC(d,e,f){this.a=d
this.b=e
this.c=f},
fZD:function fZD(d,e){this.a=d
this.b=e},
fZw:function fZw(d,e,f){this.a=d
this.b=e
this.c=f},
fZu:function fZu(d){this.a=d},
fZv:function fZv(d,e,f){this.a=d
this.b=e
this.c=f},
fZI:function fZI(d,e){this.a=d
this.b=e},
fZG:function fZG(d){this.a=d},
fZH:function fZH(d,e,f){this.a=d
this.b=e
this.c=f},
fHs(d,e){var w=0,v=A.j(x.y),u,t
var $async$fHs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3l(d),$async$fHs)
case 3:t=g
J.nU(t,new C.fHt(e))
u=A.aiW(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHs,v)},
fHt:function fHt(d){this.a=d},
aq5:function aq5(d,e,f){this.c=d
this.d=e
this.a=f},
aES:function aES(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dQO:function dQO(d,e){this.a=d
this.b=e},
dQz:function dQz(d,e){this.a=d
this.b=e},
dQC:function dQC(d,e,f){this.a=d
this.b=e
this.c=f},
dQB:function dQB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQA:function dQA(d,e){this.a=d
this.b=e},
dQD:function dQD(d,e){this.a=d
this.b=e},
dQx:function dQx(){},
dQy:function dQy(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dQw:function dQw(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dQh:function dQh(d){this.a=d},
dQi:function dQi(d,e,f){this.a=d
this.b=e
this.c=f},
dQj:function dQj(d,e){this.a=d
this.b=e},
dQg:function dQg(d){this.a=d},
dQo:function dQo(d,e){this.a=d
this.b=e},
dQf:function dQf(d){this.a=d},
dQp:function dQp(d,e,f){this.a=d
this.b=e
this.c=f},
dQq:function dQq(d,e,f){this.a=d
this.b=e
this.c=f},
dQe:function dQe(d,e){this.a=d
this.b=e},
dQr:function dQr(d,e,f){this.a=d
this.b=e
this.c=f},
dQd:function dQd(d,e){this.a=d
this.b=e},
dQs:function dQs(d,e){this.a=d
this.b=e},
dQc:function dQc(d){this.a=d},
dQt:function dQt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQa:function dQa(){},
dQ4:function dQ4(d){this.a=d},
dQ5:function dQ5(d){this.a=d},
dQb:function dQb(d,e){this.a=d
this.b=e},
dQu:function dQu(d,e){this.a=d
this.b=e},
dQ9:function dQ9(d){this.a=d},
dQv:function dQv(d){this.a=d},
dQ8:function dQ8(){},
dQk:function dQk(d,e){this.a=d
this.b=e},
dQ7:function dQ7(d){this.a=d},
dQl:function dQl(d,e,f){this.a=d
this.b=e
this.c=f},
dQ6:function dQ6(d,e){this.a=d
this.b=e},
dQ3:function dQ3(d,e){this.a=d
this.b=e},
dQm:function dQm(d){this.a=d},
dQn:function dQn(d,e,f){this.a=d
this.b=e
this.c=f},
dQR:function dQR(){},
dQS:function dQS(d,e){this.a=d
this.b=e},
dQP:function dQP(d){this.a=d},
dQQ:function dQQ(d){this.a=d},
dQL:function dQL(d,e){this.a=d
this.b=e},
dQM:function dQM(d){this.a=d},
dQE:function dQE(d,e,f){this.a=d
this.b=e
this.c=f},
dQF:function dQF(d,e,f){this.a=d
this.b=e
this.c=f},
dQG:function dQG(d,e,f){this.a=d
this.b=e
this.c=f},
dQH:function dQH(d,e,f){this.a=d
this.b=e
this.c=f},
dQI:function dQI(d,e,f){this.a=d
this.b=e
this.c=f},
dQJ:function dQJ(d,e,f){this.a=d
this.b=e
this.c=f},
dQK:function dQK(d,e,f){this.a=d
this.b=e
this.c=f},
dQT:function dQT(){},
dQU:function dQU(){},
dQV:function dQV(){},
dQW:function dQW(d){this.a=d},
dQN:function dQN(d,e){this.a=d
this.b=e},
hCD(d){return B.d.dL(D.a5j,new C.fIe(d),new C.fIf())},
uV:function uV(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fIe:function fIe(d){this.a=d},
fIf:function fIf(){},
am9:function am9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aWO:function aWO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
U7:function U7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgV:function bgV(){this.d=$
this.c=this.a=null},
dgs:function dgs(d,e){this.a=d
this.b=e},
dgq:function dgq(d,e){this.a=d
this.b=e},
dgr:function dgr(){},
dgt:function dgt(d,e){this.a=d
this.b=e},
hmW(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bh(J.k(u==null?"":u))
return new C.nw(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LQ(d,e){return C.ikX(d,e)},
ikX(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LQ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$LQ)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.X.aP(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.de(p,x.f)
o=A.cF(o,new C.fKK(),o.$ti.k("M.E"),x.B)
n=A.a4(o).k("Y<M.E>")
o=A.C(new A.Y(o,new C.fKL(),n),n.k("M.E"))
B.d.aZ(o,new C.fKM())
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
return A.i($async$LQ,v)},
BD(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$BD=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aA(),$async$BD)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b7(f,new C.fYb(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aD("String","ngmy_family_book_v1_"+s+"_"+e,B.X.aw(r,null)),$async$BD)
case 4:case 1:return A.h(u,v)}})
return A.i($async$BD,v)},
aST(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aST=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LQ(d,e),$async$aST)
case 2:u=h
t=J.cD(u)
s=t.bj(u,new C.h5P(f))
if(s===-1)t.c9(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.BD(d,e,u),$async$aST)
case 3:return A.h(null,v)}})
return A.i($async$aST,v)},
bEo(d,e,f){var w=0,v=A.j(x.H),u
var $async$bEo=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LQ(d,e),$async$bEo)
case 2:u=h
J.nU(u,new C.fHk(f))
w=3
return A.b(C.BD(d,e,u),$async$bEo)
case 3:return A.h(null,v)}})
return A.i($async$bEo,v)},
bED(d,e){return C.ikW(d,e)},
ikW(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bED=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bED)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.OQ
w=1
break}p=B.X.aP(0,q,null)
if(x.f.b(p)){o=A.a2(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aJ(o.h(0,"emblem"))
k=k==null?null:B.j.M(k)
if(k==null)k=0
if(D.DX.am(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.j.D(i==null?25:i,18,36)
h=B.d.q(D.a72,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.q(D.a6m,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.q(D.a6i,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.d86,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.Ix(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.OQ
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.OQ
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bED,v)},
SK(d,e,f){return C.itQ(d,e,f)},
itQ(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$SK=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aA(),$async$SK)
case 7:r=h
w=8
return A.b(r.aD("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.X.aw(f.aj(),null)),$async$SK)
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
return A.i($async$SK,v)},
Sc(d,e){return C.ikY(d,e)},
ikY(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Sc=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$Sc)
case 7:r=g
q=r.tV("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.LQ(d,e),$async$Sc)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.lM(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aD("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Sc)
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
return A.i($async$Sc,v)},
ahC(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ahC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sc(d,e),$async$ahC)
case 3:s=g
r=J.a7(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.I(s,t)
w=5
return A.b(A.aA(),$async$ahC)
case 5:w=4
return A.b(g.aD("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ahC)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahC,v)},
a40(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a40=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Sc(d,e),$async$a40)
case 2:s=h
J.hc(s,f)
w=3
return A.b(A.aA(),$async$a40)
case 3:u=h
w=4
return A.b(u.aD("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a40)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a40)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a40)
case 6:return A.h(null,v)}})
return A.i($async$a40,v)},
nw:function nw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fKK:function fKK(){},
fKL:function fKL(){},
fKM:function fKM(){},
fYb:function fYb(){},
h5P:function h5P(d){this.a=d},
fHk:function fHk(d){this.a=d},
Ix:function Ix(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bRQ:function bRQ(d){this.a=d},
iu9(d,e,f,g,h,i,j){return A.a6(d,!1).ce(A.ed(new C.fYM(j,i,f,e,h,g),!0,null,x.H))},
S7(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$S7=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sc(h,g),$async$S7)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.T(D.aUQ)
u=!1
w=1
break}w=4
return A.b(C.hH5(d,f,e),$async$S7)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ahC(h,g),$async$S7)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nw(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.BD(h,r,p),$async$S7)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.SK(h,r,new C.Ix("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$S7)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$S7,v)},
fYM:function fYM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_I:function a_I(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBQ:function aBQ(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dh7:function dh7(d){this.a=d},
dh6:function dh6(d,e){this.a=d
this.b=e},
dgW:function dgW(d,e){this.a=d
this.b=e},
dgT:function dgT(d,e){this.a=d
this.b=e},
dgu:function dgu(d){this.a=d},
dgv:function dgv(d,e){this.a=d
this.b=e},
dgX:function dgX(d){this.a=d},
dgD:function dgD(d){this.a=d},
dgB:function dgB(d){this.a=d},
dgC:function dgC(d){this.a=d},
dgE:function dgE(d){this.a=d},
dgU:function dgU(d){this.a=d},
dgV:function dgV(){},
dgz:function dgz(d){this.a=d},
dgA:function dgA(d,e){this.a=d
this.b=e},
dgF:function dgF(d){this.a=d},
dgG:function dgG(d,e){this.a=d
this.b=e},
dh5:function dh5(d){this.a=d},
dh4:function dh4(d,e){this.a=d
this.b=e},
dh3:function dh3(d){this.a=d},
dgQ:function dgQ(d){this.a=d},
dgP:function dgP(d){this.a=d},
dgR:function dgR(d){this.a=d},
dgw:function dgw(d,e){this.a=d
this.b=e},
dgS:function dgS(d,e){this.a=d
this.b=e},
dgJ:function dgJ(d){this.a=d},
dgK:function dgK(d){this.a=d},
dgI:function dgI(){},
dgL:function dgL(d){this.a=d},
dgM:function dgM(d){this.a=d},
dgN:function dgN(d,e){this.a=d
this.b=e},
dgO:function dgO(d,e,f){this.a=d
this.b=e
this.c=f},
dgH:function dgH(d,e){this.a=d
this.b=e},
dgZ:function dgZ(d){this.a=d},
dgY:function dgY(){},
dh_:function dh_(d){this.a=d},
dh0:function dh0(d){this.a=d},
dh1:function dh1(d){this.a=d},
dh2:function dh2(d,e){this.a=d
this.b=e},
dgx:function dgx(d){this.a=d},
dgy:function dgy(d){this.a=d},
a_M:function a_M(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhj:function bhj(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
diU:function diU(d){this.a=d},
diV:function diV(d){this.a=d},
diT:function diT(d){this.a=d},
diW:function diW(d){this.a=d},
diS:function diS(d){this.a=d},
diX:function diX(d){this.a=d},
diR:function diR(d){this.a=d},
diY:function diY(d,e){this.a=d
this.b=e},
diQ:function diQ(d,e){this.a=d
this.b=e},
diZ:function diZ(d,e){this.a=d
this.b=e},
a_K:function a_K(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ag4:function ag4(d,e,f){this.a=d
this.b=e
this.c=f},
aBT:function aBT(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dhm:function dhm(d,e){this.a=d
this.b=e},
dhl:function dhl(d,e){this.a=d
this.b=e},
dhq:function dhq(d){this.a=d},
dhp:function dhp(d,e){this.a=d
this.b=e},
dhn:function dhn(d){this.a=d},
dho:function dho(d){this.a=d},
dhr:function dhr(d){this.a=d},
dhs:function dhs(d){this.a=d},
dhk:function dhk(d,e){this.a=d
this.b=e},
dhj:function dhj(d,e){this.a=d
this.b=e},
KV:function KV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a__:function a__(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cPM:function cPM(d){this.a=d},
cPN:function cPN(){},
cPO:function cPO(d){this.a=d},
bew:function bew(d,e,f){this.b=d
this.c=e
this.a=f},
ben:function ben(d,e){this.b=d
this.a=e},
uW:function uW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_i:function a_i(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beu:function beu(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d8j:function d8j(d,e,f){this.a=d
this.b=e
this.c=f},
d8i:function d8i(d,e){this.a=d
this.b=e},
d8I:function d8I(d){this.a=d},
d8v:function d8v(){},
d8J:function d8J(d){this.a=d},
d8u:function d8u(){},
d8K:function d8K(d,e){this.a=d
this.b=e},
d8t:function d8t(d,e){this.a=d
this.b=e},
d8L:function d8L(d,e){this.a=d
this.b=e},
d8s:function d8s(d,e){this.a=d
this.b=e},
d8M:function d8M(d){this.a=d},
d8r:function d8r(){},
d8N:function d8N(d,e){this.a=d
this.b=e},
d8q:function d8q(d,e){this.a=d
this.b=e},
d8O:function d8O(d){this.a=d},
d8D:function d8D(d,e){this.a=d
this.b=e},
d8P:function d8P(d){this.a=d},
d8Q:function d8Q(d){this.a=d},
d8S:function d8S(d){this.a=d},
d8T:function d8T(d){this.a=d},
d8C:function d8C(d,e){this.a=d
this.b=e},
d8U:function d8U(d,e){this.a=d
this.b=e},
aIV:function aIV(d){this.a=d},
bjQ:function bjQ(d){this.a=d},
bcE:function bcE(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
ama:function ama(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a1Y:function a1Y(d,e){this.a=d
this.b=e},
amb:function amb(d,e,f,g,h,i){var _=this
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
_.bw$=h
_.a9$=i
_.c=_.a=null},
bS_:function bS_(d){this.a=d},
bRU:function bRU(d){this.a=d},
bRT:function bRT(d,e){this.a=d
this.b=e},
bS2:function bS2(d){this.a=d},
bRV:function bRV(d){this.a=d},
bRW:function bRW(d){this.a=d},
bRZ:function bRZ(d){this.a=d},
bRY:function bRY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bS0:function bS0(d,e){this.a=d
this.b=e},
bS1:function bS1(){},
bRX:function bRX(d){this.a=d},
bRR:function bRR(d,e){this.a=d
this.b=e},
bRS:function bRS(d){this.a=d},
bps:function bps(d,e){this.b=d
this.a=e},
aBR:function aBR(){},
iz(d,e){var w
$.S()
w=A.L()
w.b=B.a9
w.c=e
w.r=d.gp(0)
w.d=B.bv
w.e=B.dT
return w},
bDY(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bq(j.save())
j.translate(e.a,e.b)
d.pl(0,a0?-f:f,f)
w=A.bt(B.hr,8,36)
v=B.w.j(0.3)
u=$.S()
t=A.L()
t.r=v.gp(0)
d.bZ(w,t)
w=a1===D.Xp
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eto,new A.p(-4+v,-2),C.iz(q,5))
d.ah(D.eqY,new A.p(4-v,-2),C.iz(q,5))}else{t=A.bt(B.JI,14,40)
p=A.L()
p.r=v.gp(0)
d.bZ(t,p)}v=u.r
u=x.v
o=new A.aG(v,B.ai,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.c7(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.c7(15,-40,11,t))
o.E(new A.bu())
t=A.L()
t.r=w.gp(0)
d.af(o,t)
u=new A.aG(v,B.ai,k,k,A.a([],u))
u.E(new A.aZ(-12,-50-r))
v=-46-r
u.E(new A.aq(12,v))
u.E(new A.aq(12.5,-42-r))
u.E(new A.aq(-12.5,v))
u.E(new A.bu())
v=A.L()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b1O){n=-52+w*14
d.ah(new A.p(10,n-22),new A.p(10,n+44),C.iz(F.FX,3.4))
d.ah(D.etG,new A.p(9,n),C.iz(q,4))
d.ah(D.ern,new A.p(10,n),C.iz(q,4))}else if(a1===D.b1P){d.ah(D.est,new A.p(-8,-26-Math.max(0,w)*6),C.iz(q,4))
d.ah(D.epq,new A.p(8,-26-Math.max(0,-w)*6),C.iz(q,4))}else{w=s*3
v=-38-r
d.ah(D.esy,new A.p(-12-w,v),C.iz(q,4))
d.ah(D.aMo,new A.p(12+w,v),C.iz(q,4))}w=A.L()
w.r=q.gp(0)
d.ar(D.fbe,w)
m=new A.p(0,-77-r)
w=A.bt(m,22,19)
v=A.L()
v.r=q.gp(0)
d.bZ(w,v)
w=h.y
if(w!=null){v=A.bt(m.a2(0,K.vA),15,24)
u=A.L()
u.r=w.gp(0)
d.bZ(v,u)
u=m.a2(0,D.epk)
v=A.L()
v.r=w.gp(0)
d.N(u,4,v)}else{w=A.bt(m.a2(0,B.tC),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cB(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a2(0,D.etE),m.a2(0,D.esr),C.iz(v,2.2))
d.ah(m.a2(0,D.erm),m.a2(0,D.eph),C.iz(v,2.2))}if(w===4){w=m.a2(0,D.etI)
u=A.L()
u.r=v.gp(0)
d.N(w,6,u)
u=m.a2(0,D.ero)
w=A.L()
w.r=v.gp(0)
d.N(u,6,w)}}w=m.a2(0,D.esf)
v=A.L()
v.r=B.ii.gp(0)
d.N(w,0.9,v)
v=m.a2(0,D.es3)
w=A.L()
w.r=B.ii.gp(0)
d.N(v,0.9,w)
if(i){l=m.a2(0,K.a9_)
w=A.bt(l,21,22)
v=A.L()
v.r=D.lC.gp(0)
d.bZ(w,v)
v=A.bt(l.a2(0,K.aMl),5,12)
w=A.L()
w.r=D.bha.gp(0)
d.bZ(v,w)
d.ah(l.a2(0,D.etA),l.a2(0,K.aMJ),C.iz(B.cU,1.4))
d.ah(D.aMo,new A.p(15,-88-r),C.iz(q,3.6))}j.restore()},
hBe(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bq(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bU(0,f)
v=A.bt(B.dN,18,96)
u=B.w.j(0.28)
$.S()
t=A.L()
t.r=u.gp(0)
d.bZ(v,t)
t=A.bt(B.dN,11,70)
v=B.w.j(0.2)
u=A.L()
u.r=v.gp(0)
d.bZ(t,u)
d.lz(D.aSy,A.L())
C.i9c(d,g,h,i,j)
s=(k==null?D.a94:k).a-w>=0?1:-1
w=A.L()
w.a=B.M_
w.sav(A.jB(new A.p(s*70,-60),new A.p(-s*70,-60),A.a([D.aiW.j(0.5),D.aiW.j(0.12),D.bov.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.ar(D.aSy,w)
r.restore()
r.restore()},
i9c(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ar(d,B.w,0.28)
a0.toString
w=A.ar(d,B.c,0.16)
w.toString
v=a2.b
u=A.ar(v,B.w,0.32)
u.toString
t=Math.sin(a4*1.9+a5)*0.8
s=a2.w
r=s?1.06:1
q=s?0.86:1
s=A.bn(D.fbf,B.tH)
p=$.S()
o=A.L()
o.r=u.gp(0)
a1.an(s,o)
o=A.bn(D.fba,B.hV)
s=A.ar(v,B.w,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.an(o,n)
n=A.bn(D.fbo,B.hV)
o=A.ar(v,B.w,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.an(n,s)
s=A.L()
s.r=d.gp(0)
a1.bZ(D.fbh,s)
s=A.L()
s.r=d.gp(0)
a1.bZ(D.fa0,s)
s=a1.c
J.bq(s.save())
s.translate(a3.w,0)
J.bq(s.save())
a1.pl(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aG(p.r,B.ai,e,e,A.a([],n))
p=-m
k=p+2
l.E(new A.aZ(k,-58))
l.E(new A.c7(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.c7(m+3,-62,m-2,-58))
l.E(new A.c7(0,-70,k,-58))
l.E(new A.bu())
k=A.L()
k.r=v.gp(0)
a1.af(l,k)
J.bq(s.save())
a1.mU(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.deU[j]
i=new A.ao(B.P,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=5
i.r=k.gp(0)
i.d=B.bv
i.e=B.dT
a1.ah(new A.p(-34+u,-64),new A.p(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.aq(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.S()
f=new A.ao(B.P,B.M,B.R,B.S,B.Q)
f.r=i.gp(0)
a1.N(new A.p(g,h),3.6,f)
f=new A.ao(B.P,B.M,B.R,B.S,B.Q)
f.r=u.gp(0)
a1.N(new A.p(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ao(B.P,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bv
i.e=B.dT
a1.ah(new A.p(g,-64),new A.p(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ao(B.P,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bv
i.e=B.dT
a1.ah(new A.p(-30,h),new A.p(30,h),i)}break
default:a1.ah(D.et3,D.eq5,C.iz(a2.c.j(0.9),3))}a1.ah(D.etB,D.esA,C.iz(B.w.j(0.18),1.6))
a1.ah(D.epp,K.aMq,C.iz(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.S()
i=A.L()
i.r=u.gp(0)
a1.ar(D.f9X,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.ar(D.faa,i)
n=new A.aG(k.r,B.ai,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.c7(0,-57,9,-66))
n.E(new A.c7(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cB(D.faj,0.1,2.941592653589793,!1,C.iz(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a99
n=25*q
k=23*q
i=9*q
C.hxt(a1,new A.p(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.En:o
C.hxt(a1,new A.p(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.eqQ,D.eqM,C.iz(D.ajU,4))
a1.ah(D.eqO,D.eqK,C.iz(D.Gl.j(0.7),1.4))
u=A.L()
u.r=B.cU.gp(0)
a1.N(D.eqN,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bq(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.hW(0,a3.f)
a1.bU(0,r)
C.i99(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hxt(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aJ(0,e),r=s.gcK(),q=r===0?B.hr:s.eW(0,r),p=B.j.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.p(o,w)
if(o*i<0)v=new A.p(-o,-w)
u=e.a2(0,q.aM(0,n)).a2(0,v.aM(0,m))
t=e.a2(0,q.aM(0,p))
d.ah(e,u,C.iz(j,l))
o=A.ar(j,B.w,0.2)
o.toString
d.ah(e,u,C.iz(o,l*0.35))
d.ah(u,t,C.iz(k,l*0.78))
o=A.ar(k,B.w,0.22)
o.toString
d.ah(u,t,C.iz(o,l*0.22))
$.S()
o=A.L()
o.r=j.gp(0)
d.N(u,l*0.55,o)
o=A.bt(t,l*1.15,l)
w=A.L()
w.r=k.gp(0)
d.bZ(o,w)
w=-l
w=t.a2(0,new A.p(i*w*0.45,w*0.1))
o=A.L()
o.r=k.gp(0)
d.N(w,l*0.28,o)},
i99(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bt(B.vz,40,38)
$.S()
v=A.L()
v.r=c0.gp(0)
c2.bZ(w,v)}if(c1===4){$.S()
w=A.L()
w.r=c0.gp(0)
c2.N(D.esK,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.N(D.epG,9.5,w)}w=A.bt(D.etX,10,6)
v=$.S()
u=A.L()
u.r=c8.gp(0)
c2.bZ(w,u)
u=A.bt(D.esc,10,6)
w=A.L()
w.r=c8.gp(0)
c2.bZ(u,w)
v=v.r
w=x.v
t=new A.aG(v,B.ai,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.ko(13,-20,17,-9,16,2))
t.E(new A.ko(15,13,8,20,0,20))
t.E(new A.ko(-8,20,-15,13,-16,2))
t.E(new A.ko(-17,-9,-13,-20,0,-20))
t.E(new A.bu())
u=A.L()
u.sav(A.wg(D.etq,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iz(c8.j(0.5),0.8)
c2.cB(D.fbq,3.455751918948773,2.5132741228718345,!1,s)
c2.cB(D.fa3,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.esH,D.esv,s)
c2.ah(D.epC,D.ept,s)
c2.cB(D.fai,2.2,1.4,!1,s)
c2.cB(D.fa1,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ao(B.P,B.M,B.R,B.S,B.Q)
n.r=c0.gp(0)
c2.N(new A.p(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cB(D.faw,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aG(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.c7(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.c7(0,-12,-13,-6))
p.E(new A.bu())
o=A.L()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.esw,D.epu,C.iz(G.ns,1.4))
o=A.L()
o.r=c0.gp(0)
c2.N(D.esN,3,o)
o=A.L()
o.r=c0.gp(0)
c2.N(D.epH,3,o)
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.c7(-12,22,0,26))
o.E(new A.c7(12,22,13,6))
o.E(new A.c7(8,13,0,12))
o.E(new A.c7(-8,13,-13,6))
o.E(new A.bu())
p=A.L()
p.r=B.i0.gp(0)
c2.af(o,p)
p=new A.aG(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.c7(0,6,7,8))
p.E(new A.c7(0,10.5,-7,8))
o=A.L()
o.r=B.bP.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aG(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-17,-4))
p.E(new A.c7(-20,-27,0,-29))
p.E(new A.c7(20,-27,17,-4))
p.E(new A.c7(0,-14,-17,-4))
p.E(new A.bu())
o=A.L()
o.r=m.gp(0)
c2.af(p,o)
o=A.ar(m,B.w,0.3)
o.toString
c2.cB(D.faD,3.4,2.5,!1,C.iz(o,1.4))
o=A.ar(m,B.c,0.3)
o.toString
c2.cB(D.faq,3.6,2.2,!1,C.iz(o,1.2))
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.c7(27,-34,25,-19))
o.E(new A.c7(18,-18,11,-22))
p=A.ar(m,B.c,0.1)
p.toString
n=A.L()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aG(v,B.ai,b9,b9,A.a([],w))
n.E(new A.aZ(11,-22))
n.E(new A.c7(24,-12,27,-26))
n.E(new A.c7(18,-22,11,-22))
o=A.ar(m,B.w,0.2)
o.toString
p=A.L()
p.r=o.gp(0)
c2.af(n,p)
p=A.L()
p.r=c3.c.gp(0)
c2.N(D.epv,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cB(D.faA,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ar(c0,B.c,0.18)
p.toString
o=new A.ao(B.P,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=0.9
o.r=p.gp(0)
o.d=B.bv
o.e=B.dT
c2.ah(new A.p(r*3.6,-19+Math.abs(r)*0.8),new A.p(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aD4[l]
o=new A.ao(B.P,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=4.5
o.r=c0.gp(0)
o.d=B.bv
o.e=B.dT
c2.ah(new A.p(k,0),new A.p(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ao(B.P,B.M,B.R,B.S,B.Q)
o.r=p.gp(0)
c2.N(new A.p(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.L()
p.r=c0.gp(0)
c2.cB(D.faz,3.204424506661589,3.015928947446201,!0,p)
p=A.ar(c0,B.c,0.25)
p.toString
c2.ah(K.a9_,K.a8Z,C.iz(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cB(D.fa4,3.267256359733385,2.8902652413026098,!0,p)}i=B.j.D(c4.b,0,1)*0.4+0.1
p=A.bt(D.etK,5,8)
o=D.aga.j(i)
n=A.L()
n.r=o.gp(0)
c2.bZ(p,n)
n=A.bt(D.esn,5,8)
p=D.aga.j(i)
o=A.L()
o.r=p.gp(0)
c2.bZ(n,o)
h=c4.e*2.4
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.c7(h-3.4,6,h-2.6,7.4))
o.E(new A.c7(h,8.8,h+2.6,7.4))
c2.af(o,C.iz(c8.j(0.75),1.1))
o=A.L()
o.r=c8.gp(0)
c2.N(new A.p(h-1.5,7.2),0.7,o)
o=A.L()
o.r=c8.gp(0)
c2.N(new A.p(h+1.5,7.2),0.7,o)
g=B.j.F(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.fF[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bt(new A.p(a5,-3),a3,7)
a6=new A.ao(B.P,B.M,B.R,B.S,B.Q)
a6.r=B.c.j(0.96).gp(0)
c2.bZ(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.bq(d.save())
a6=A.a([],w)
a4=new A.aG(v,B.ai,b9,b9,a6)
a6.push(new A.jU(A.bt(new A.p(a5,-3),a3,7)))
a4.ab()
a3=a4.e
if(a3==null)a3=a4.e=new A.Eb(a4.glY().a.snapshot())
d.clipPath(a3.a,$.np(),!0)
a3=new A.ao(B.P,B.M,B.R,B.S,B.Q)
a3.r=D.bkZ.gp(0)
c2.N(new A.p(a7,a8),2.1,a3)
a3=new A.ao(B.P,B.M,B.R,B.S,B.Q)
a3.r=B.w.gp(0)
c2.N(new A.p(a7,a8),1.05,a3)
a3=new A.ao(B.P,B.M,B.R,B.S,B.Q)
a3.r=B.c.gp(0)
c2.N(new A.p(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.ZB:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ao(B.P,B.M,B.R,B.S,B.Q)
a9.b=B.a9
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bv
a9.e=B.dT
a3=p?0.8:0
c2.cB(A.bt(new A.p(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.e2
else{b1=A.ar(c0,B.w,0.2)
b1.toString}b2=new A.ao(B.P,B.M,B.R,B.S,B.Q)
b2.b=B.a9
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bv
b2.e=B.dT
c2.ah(new A.p(a5-a4,b0-a6+0.4),new A.p(a5+a4,b0-0.6-a3),b2)}b3=B.j.D(c4.a,0,1)
if(o)b4=D.bv2
else{u=A.ar(c8,D.box,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.j.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aG(v,B.ai,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.c7(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.c7(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bu())
v=A.L()
v.r=D.bnR.gp(0)
c2.af(b8,v)
J.bq(d.save())
c2.mU(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.ar(new A.a1(w,11,w+b6*2,13.2),u)
u=A.bt(new A.p(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.bv7.gp(0)
c2.bZ(u,w)
d.restore()
c2.af(b8,C.iz(b4,1.1))}else{u=new A.aG(v,B.ai,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.c7(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iz(b4,1.5))
if(b5>0.6){w=new A.aG(v,B.ai,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.c7(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.c7(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.L()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cB(D.fah,-1.2,2.2,!1,C.iz(c8.j(0.5),0.8))
c2.cB(D.fa6,2.141592653589793,2.2,!1,C.iz(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.N(D.es5,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.N(D.es1,1.7,w)}},
ieM(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.S(),f=new A.q3(new A.pE()),e=A.zy(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.sav(A.jB(B.J,new A.p(0,a0*0.46),D.dbE,D.d34,B.x,h))
e.ar(new A.a1(0,0,0+d,0+a0),a2)
a2=e.c
J.bq(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bU(0,a1)
w=new A.e3()
w.cY(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ao(B.P,B.M,B.R,B.S,B.Q)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.N(new A.p(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bq(a2.save())
a2.translate(200,120)
e.hW(0,-0.5)
d=A.L()
a0=x.O
d.sav(A.wg(B.J,230,A.a([D.bjH,B.L],a0),h,B.x,h,h,0))
e.bZ(D.faN,d)
a2.restore()
d=A.L()
d.sav(A.wg(D.a97,58,A.a([D.bmT,B.L],a0),h,B.x,h,h,0))
e.N(D.a97,58,d)
d=A.L()
d.r=D.bip.gp(0)
e.N(D.a97,24,d)
d=A.L()
d.r=D.a_2.gp(0)
e.N(D.eqp,5,d)
d=A.L()
d.r=D.a_2.gp(0)
e.N(D.eqt,3.4,d)
d=A.L()
d.r=D.a_2.gp(0)
e.N(D.eqs,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aG(g.r,B.ai,h,h,u)
u.push(new A.aZ(-60,420))
r.ab()
for(g=372+s*12,t=60+s*20,q=s*2,p=14-s*3,o=-60;o<=510;o+=8){n=new A.aq(o,g+Math.sin(o/t+q)*p+Math.sin(o/23+s)*3)
u.push(n)
m=r.f
if(m!=null)n.ak(m)
r.ab()}g=new A.aq(510,470)
u.push(g)
t=r.f
if(t!=null)g.ak(t)
r.ab()
g=new A.aq(-60,470)
u.push(g)
t=r.f
if(t!=null)g.ak(t)
r.ab()
g=new A.bu()
u.push(g)
u=r.f
if(u!=null)g.ak(u)
r.ab()
g=[D.bgY,D.biY,D.boS][s]
u=$.S()
t=new A.ao(B.P,B.M,B.R,B.S,B.Q)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cxL[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ao(B.P,B.M,B.R,B.S,B.Q)
u.b=B.a9
u.c=2.4
u.r=D.a_n.gp(0)
u.d=B.bv
u.e=B.dT
e.ah(new A.p(o,k),new A.p(g,d),u)
g=A.bt(new A.p(g,k-27),11,46)
u=new A.ao(B.P,B.M,B.R,B.S,B.Q)
u.r=D.a_n.gp(0)
e.bZ(g,u)
d=A.bt(new A.p(o-12,d),8,24)
u=new A.ao(B.P,B.M,B.R,B.S,B.Q)
u.r=D.a_n.gp(0)
e.bZ(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ao(B.P,B.M,B.R,B.S,B.Q)
u.r=D.bis.j(0.8).gp(0)
e.N(new A.p(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.sav(A.jB(D.eoZ,D.ep0,D.d53,B.DH,B.x,h))
e.ar(new A.a1(-200,412,650,1300),g)
j=new A.e3()
j.cY(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bt(new A.p(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h3()?B.c:B.w
d=new A.ao(B.P,B.M,B.R,B.S,B.Q)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.bZ(u,d)}J.bq(a2.save())
a2.translate(225,590)
e.pl(0,1,0.34)
g=A.L()
g.sav(A.wg(B.J,250,A.a([D.bpO,D.bji,D.brK],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.N(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ar(D.aiC,D.bhX,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.S()
a0=new A.ao(B.P,B.M,B.R,B.S,B.Q)
a0.b=B.a9
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bv
a0.e=B.dT
e.ah(new A.p(o+i*2,k),new A.p(o+i*5,g+Math.abs(i)*3),a0)}}C.i7h(e)
for(l=0;l<3;++l)C.iaK(e,D.aAR[l])
C.iaz(e,D.eqj)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.S()
a0=new A.ao(B.P,B.M,B.R,B.S,B.Q)
a0.b=B.a9
a0.c=2.4
a0.r=D.a_i.gp(0)
a0.d=B.bv
a0.e=B.dT
e.ah(new A.p(o,452+g),new A.p(o+1,436+d),a0)}e.ah(D.epr,D.epL,C.iz(D.biG,1.6))
a2.restore()
return f.o3()},
i7h(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S().r,g=x.v,f=new A.aG(h,B.ai,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.ko(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.ko(416,382,432,422,428,462))
f.E(new A.bu())
w=A.L()
w.sav(A.jB(new A.p(354,0),new A.p(430,0),D.dzD,B.na,B.x,i))
d.af(f,w)
v=new A.e3()
v.cY(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.w.j(0.18)
p=new A.ao(B.P,B.M,B.R,B.S,B.Q)
p.b=B.a9
p.c=1.1
p.r=q.gp(0)
p.d=B.bv
p.e=B.dT
d.ah(new A.p(t,s),new A.p(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dgi[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aG(h,B.ai,i,i,l)
l.push(new A.aZ(r,336))
k.ab()
r=new A.c7(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.ak(p)
k.ab()
r=new A.ao(B.P,B.M,B.R,B.S,B.Q)
r.b=B.a9
r.c=8
r.r=D.agU.gp(0)
r.d=B.bv
r.e=B.dT
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ao(B.P,B.M,B.R,B.S,B.Q)
l.r=A.ar(D.biy,D.boQ,v.ai()).j(0.92).gp(0)
d.N(new A.p(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ao(B.P,B.M,B.R,B.S,B.Q)
r.b=B.a9
r.c=1.2
r.r=D.a_i.gp(0)
r.d=B.bv
r.e=B.dT
d.ah(new A.p(w,q+8),new A.p(w,q+22),r)
q=A.bt(new A.p(w,q+28),13,7)
w=new A.ao(B.P,B.M,B.R,B.S,B.Q)
w.r=D.bq8.gp(0)
d.bZ(q,w)}},
iaK(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bt(new A.p(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.S(),b3=A.L()
b3.r=b1.gp(0)
b4.bZ(b0,b3)
b2=b2.r
b3=x.v
w=new A.aG(b2,B.ai,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.aZ(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.c7(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bu())
u=A.L()
u.sav(A.jB(new A.p(b0,0),new A.p(v,0),D.dgo,B.na,B.x,a4))
b4.af(w,u)
t=new A.e3()
t.cY(B.o.V(a5*7))
v=b4.c
J.bq(v.save())
b4.mU(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.w.j(0.14)
n=new A.ao(B.P,B.M,B.R,B.S,B.Q)
n.b=B.a9
n.c=1
n.r=o.gp(0)
n.d=B.bv
n.e=B.dT
b4.ah(new A.p(r,q),new A.p(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.aix.j(0.75)
n=A.L()
n.r=o.gp(0)
b4.ar(new A.a1(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.j.bh(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aG(b2,B.ai,a4,a4,j)
j.push(new A.aZ(k,o))
i.ab()
h=new A.aq(k+5,n)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
h=new A.aq(k+10,o)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
h=new A.bu()
j.push(h)
j=i.f
if(j!=null)h.ak(j)
i.ab()
j=new A.ao(B.P,B.M,B.R,B.S,B.Q)
j.r=D.lC.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aG(b2,B.ai,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.j.bh(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.ak(n)
f.ab()}b4.af(f,C.iz(D.aix.j(0.7),1.6))
v.restore()
b0=$.S().r
b2=new A.aG(b0,B.ai,a4,a4,A.a([],b3))
u=a7*0.1
p=a5+u
o=a7*0.28
n=p-o
m=a6+1
b2.E(new A.aZ(n,m))
j=a6-a8*0.55
b2.E(new A.aq(n,j))
o=p+o
b2.E(new A.c7(p,a6-a8*0.82,o,j))
b2.E(new A.aq(o,m))
b2.E(new A.bu())
m=A.L()
m.r=D.aiK.gp(0)
b4.af(b2,m)
m=A.L()
m.r=D.aiK.gp(0)
b4.N(new A.p(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aG(b0,B.ai,a4,a4,A.a([],b3))
e.E(new A.aZ(o,j))
n=b1-m*0.55
e.E(new A.c7(a5-a9,n,a5,u))
e.E(new A.c7(a5+a9,n,p,j))
e.E(new A.c7(a5,b1+a7*0.34,o,j))
e.E(new A.bu())
b1=A.L()
n=a7*1.4
b1.sav(A.jB(new A.p(a5-n,0),new A.p(a5+n,0),D.djY,B.na,B.x,a4))
b4.af(e,b1)
J.bq(v.save())
b4.mU(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h3()?B.w:D.bi5).j(0.16)
i=new A.ao(B.P,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=0.9
i.r=n.gp(0)
i.d=B.bv
i.e=B.dT
b4.ah(new A.p(a5+(p-0.5)*3,u),new A.p(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aG(b0,B.ai,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.ab()
n=new A.c7(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.ak(b1)
p.ab()
b1=B.w.j(0.22)
n=new A.ao(B.P,B.M,B.R,B.S,B.Q)
n.b=B.a9
n.c=1.2
n.r=b1.gp(0)
n.d=B.bv
n.e=B.dT
b4.af(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.ai()
b2=t.ai()
v=new A.ao(B.P,B.M,B.R,B.S,B.Q)
v.b=B.a9
v.c=1.1
v.r=D.bph.gp(0)
v.d=B.bv
v.e=B.dT
b4.ah(new A.p(a2,a3),new A.p(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aG(b0,B.ai,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bu())
b0=A.L()
b0.r=D.blt.gp(0)
b4.af(a9,b0)},
iaz(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aD1[s]
$.S()
q=new A.ao(B.P,B.M,B.R,B.S,B.Q)
q.b=B.a9
q.c=3
q.r=D.a_i.gp(0)
q.d=B.bv
q.e=B.dT
d.ah(new A.p(r,u),new A.p(r,t),q)}u=A.bt(e.a2(0,K.aMk),24,36)
t=$.S()
r=A.L()
r.r=D.buf.gp(0)
d.bZ(u,r)
t=new A.aG(t.r,B.ai,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.c7(w,v-24,r,u))
t.E(new A.bu())
u=A.L()
u.r=D.ahC.gp(0)
d.af(t,u)},
i9R(d){switch(B.o.F(d,8)){case 0:return D.b1m
case 1:return D.b1k
case 2:return D.b1j
case 3:return D.b1i
case 4:return D.b1l
case 5:return D.b1n
case 6:return D.hBn
default:return D.hBm}},
SI(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bpt()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a99:j
w.as=k==null?D.En:k
C.hBe(d,e,p,C.i9R(m),w,s,m,l)},
hCJ(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bTE:function bTE(){var _=this
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
bpt:function bpt(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
amt:function amt(){this.b=this.a=null},
aWT:function aWT(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bTw:function bTw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTx:function bTx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTy:function bTy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTz:function bTz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTA:function bTA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTB:function bTB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTC:function bTC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTD:function bTD(){},
bTv:function bTv(d){this.a=d},
agd:function agd(d,e){this.a=d
this.b=e},
aeb:function aeb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Na(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bSf(s)
s.bBO(d)
return s},
H5(d,e,f,g,h,i,j){var w,v=A.U(g).k("Y<1>")
v=A.d0(new A.Y(g,new C.fvo(f),v),v.k("M.E"))
w=A.C(v,A.a4(v).k("ci.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cX(w,0,A.dB(3,"count",x.S),A.U(w).c))
B.d.e0(v,d)
return new C.lu(e,v,B.d.co(v,f),h,i,"tree",j)},
ivM(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.T(c0,x.cg),c2=new C.h5G(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jC(c4,c0)
t=A.C(c4,A.a4(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jC(c4,c0)
r=A.C(c4,A.a4(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jC(c4,c0)
q=A.C(c4,A.a4(c4).k("ci.E"))
for(c4=w.length,v=A.U(t).k("Y<1>"),s=v.k("M.E"),p=A.U(w).k("Y<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.I)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.wG)g="father"
else g=h===D.oA?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Y(t,new C.h5I(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.H5(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Y(w,new C.h5J(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.lu("True or false: "+h+" is the "+g+" of "+l+".",D.aBT,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lu("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aBT,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Gb(m)
h=a0.length
if(h!==0){a1=a0[c6.az(h)]
h=B.a.i(a1.b)
f=A.C(new A.Y(t,new C.h5K(l,a0,c5),v),s)
e=a1.c
if(e===D.wG)e="son"
else e=e===D.oA?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.H5(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.et([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mA(a5,a5.r,f.k("mA<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.H5(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.U(a0),a2=e.k("ix<1>"),a3=new A.ix(a0,1,b3,a2),a3.n8(a0,1,b3,e.c),a3=new A.bR(a3,a3.gJ(0),a2.k("bR<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.H5(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.arx(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Y(t,new C.h5L(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.H5(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Y(t,new C.h5M(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wG
if(e)a2=b7
else a2=f===D.oA?b8:b9
if(e)f=b7
else f=f===D.oA?b8:b9
c2.$2("grand",C.H5(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aNc(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.az(k)].b)
j=A.C(new A.Y(t,new C.h5N(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.H5(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.u(j,D.cQz)
h=l+" was born in "+k
c2.$2("place",C.H5(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.u(j,D.d67)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.H5(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.H5(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.j_(b1,b3,b3)
c2.$2("year",C.H5(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bEz(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Na(d),l=new A.e3()
l.cY(f)
w=C.ivM(m,l,g)
for(v=new A.dq(w,w.r,w.e);v.C();)J.hl0(v.d,l)
v=A.a4(w).k("cx<1>")
u=A.C(new A.cx(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aV(u,new C.fIQ(n,w))))break
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
if(v<e){v=A.C(D.azT,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hBl(o,l))}}else if(!g&&v>3){o=C.hBl(D.azT[l.az(14)],l)
t[t.length-1-l.az(3)]=o}return t},
hBl(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.e0(w,e)
return new C.lu(d.a,w,B.d.co(w,v),d.d,d.e,d.f,d.r)},
hGE(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Na(a2),a1=new A.e3()
a1.cY(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.Gb(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.Gb(n)
l=A.U(m)
k=new A.ix(m,0,5,l.k("ix<1>"))
k.n8(m,0,5,l.c)
j=k.dn(0)
if(new A.N(j,new C.fXc(),A.U(j).k("N<1,H>")).fM(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aSF(a0,j[i]))
w.push(new C.auv("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.T(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.c5(e.c3(0,a0.amG(q),new C.fXd()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cx<1>")
d=A.C(new A.cx(e,t),t.k("M.E"))
B.d.fg(d)
v=A.a([],v)
for(u=A.cX(d,0,A.dB(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bR(u,u.gJ(0),t.k("bR<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cD(s)
m.e0(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aSF(a0,v[r]))
w.push(new C.auv("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aRa(d){return B.d.ao8(D.aCp,new C.fEG(d))},
ilp(d){return A.nA(new A.Y(D.aCp,new C.fLG(d),x.av))},
bT3(d){return C.hQl(d)},
hQl(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bT3=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bT3)
case 7:r=f
q=B.a.i(d)
q=A.en(J.t(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bT3,v)},
BW(d,e){return C.hQi(d,e)},
hQi(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$BW=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$BW)
case 7:r=g
p=B.a.i(d)
o=A.en(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aD("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$BW)
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
return A.i($async$BW,v)},
bT2(d,e,f){return C.hQj(d,e,f)},
hQj(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bT2=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bT2)
case 7:r=h
q=B.a.i(d)
q=A.en(J.t(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bT2,v)},
BX(d,e,f,g){return C.hQk(d,e,f,g)},
hQk(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$BX=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$BX)
case 7:r=i
p=B.a.i(d)
o=A.en(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aD("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$BX)
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
return A.i($async$BX,v)},
bGQ(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h7K(d,e,f,g){return new C.al4(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hOp(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aT(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cs)
while(u.C())w.push(J.k(u.gR(u)))
u=x.N
w=A.cX(w,0,A.dB(4,"count",x.S),u).dn(0)
B.d.u(w,A.c1(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aJ(d.h(0,"c"))
v=v==null?null:B.j.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aJ(d.h(0,"s"))
u=u==null?null:B.j.M(u)
return C.h7K(w,v,B.o.D(u==null?20:u,5,60),t)},
hm9(d){var w,v,u,t,s,r,q=J.a7(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aT(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cs)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gR(q)
if(u.b(r))v.push(C.hOp(A.a2(r,t,s)))}return new C.MV(p,w,v)},
hgf(d){var w,v=A.a([],x.c)
for(w=J.aT(d.z);w.C();)v.push(C.hm9(w.gR(w)))
return v},
aSF(d,e){var w=e.c===D.oA
if(d.amG(e)===0&&d.Gb(e).length!==0)return w?0:1
if(d.Gb(e).length!==0||d.arx(e)!=null)return w?2:3
return w?4:5},
hHK(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Na(a4),a3=new A.e3()
a3.cY(a5)
w=A.a([],x.dT)
v=a2.b
u=A.C(v,x.P)
B.d.e0(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.I)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("M.E"),q=0;q<u.length;u.length===v||(0,A.I)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.c()
j=i.h(0,k)}h=a2.Gb(m)
g=a2.arx(m)
f=a2.aNc(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.wG)k="father"
else k=k===D.oA?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.wG)k="father"
else k=k===D.oA?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.aZ(l,new C.h65())
d=B.a.i(m.b)
a0=A.C(new A.Y(s,new C.h66(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.ix(a0,0,3,i.k("ix<1>"))
a1.n8(a0,0,3,i.c)
B.d.u(k,a1)
B.d.e0(k,a3)
a1=C.aSF(a2,m)
i=new A.ix(l,0,4,p)
i.n8(l,0,4,r)
w.push(new C.baS(d,a1,i.dn(0),k))
if(w.length>=5)break}return w},
hyX(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.a_(d,"My ")?1:0},
hGQ(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Na(a4),a3=new A.e3()
a3.cY(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.Gb(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.Gb(l)
j=A.U(k)
i=new A.ix(k,0,4,j.k("ix<1>"))
i.n8(k,0,4,j.c)
h=i.dn(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aV(h,new C.fXI(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.ix(i,0,k,m)
j.n8(i,0,k,n)
f=j.dn(0)
j=B.a.i(l.b)
k=C.aSF(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aSF(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aSF(a2,f[g]))
w.push(new C.aaf(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lu:function lu(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bSf:function bSf(d){this.b=d
this.c=$},
bSg:function bSg(){},
bSh:function bSh(d){this.a=d},
fvo:function fvo(d){this.a=d},
h5G:function h5G(d){this.a=d},
h5H:function h5H(){},
h5I:function h5I(d){this.a=d},
h5J:function h5J(d,e){this.a=d
this.b=e},
h5K:function h5K(d,e,f){this.a=d
this.b=e
this.c=f},
h5F:function h5F(d,e){this.a=d
this.b=e},
h5L:function h5L(d){this.a=d},
h5M:function h5M(d){this.a=d},
h5N:function h5N(d,e,f){this.a=d
this.b=e
this.c=f},
h5E:function h5E(d,e){this.a=d
this.b=e},
fIQ:function fIQ(d,e){this.a=d
this.b=e},
auv:function auv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fXc:function fXc(){},
fXd:function fXd(){},
zH:function zH(d,e,f){this.a=d
this.b=e
this.c=f},
fEG:function fEG(d){this.a=d},
fLG:function fLG(d){this.a=d},
al4:function al4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bN3:function bN3(){},
MV:function MV(d,e,f){this.a=d
this.b=e
this.c=f},
baS:function baS(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h65:function h65(){},
h66:function h66(d){this.a=d},
aaf:function aaf(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fXI:function fXI(d){this.a=d},
bi9:function bi9(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
agb:function agb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
akn:function akn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ako:function ako(d,e,f,g,h){var _=this
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
_.bw$=g
_.a9$=h
_.c=_.a=null},
bLd:function bLd(d){this.a=d},
bL8:function bL8(){},
bLe:function bLe(){},
bL6:function bL6(){},
bL7:function bL7(){},
bLc:function bLc(d){this.a=d},
bL9:function bL9(d,e){this.a=d
this.b=e},
bLb:function bLb(d,e){this.a=d
this.b=e},
bLa:function bLa(d,e){this.a=d
this.b=e},
bL5:function bL5(d){this.a=d},
bdj:function bdj(d,e){this.b=d
this.a=e},
QQ:function QQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBP:function aBP(d,e,f){this.b=d
this.c=e
this.a=f},
aAj:function aAj(d,e,f){this.a=d
this.b=e
this.c=f},
av6:function av6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
av7:function av7(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.cQ$=e
_.b7$=f
_.c=_.a=null},
cqO:function cqO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqP:function cqP(d){this.a=d},
cqN:function cqN(d){this.a=d},
cqQ:function cqQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cqR:function cqR(){},
cqS:function cqS(d,e){this.a=d
this.b=e},
cqT:function cqT(){},
cqU:function cqU(d){this.a=d},
cqK:function cqK(d){this.a=d},
cqL:function cqL(d,e){this.a=d
this.b=e},
cqM:function cqM(d,e,f){this.a=d
this.b=e
this.c=f},
cqF:function cqF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqH:function cqH(d,e){this.a=d
this.b=e},
cqI:function cqI(d,e){this.a=d
this.b=e},
cqG:function cqG(d,e){this.a=d
this.b=e},
cqE:function cqE(){},
cqJ:function cqJ(){},
bcN:function bcN(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cQQ:function cQQ(){},
az4:function az4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
az5:function az5(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cFM:function cFM(d){this.a=d},
cFL:function cFL(d){this.a=d},
cFU:function cFU(d,e){this.a=d
this.b=e},
cFV:function cFV(d,e){this.a=d
this.b=e},
cFW:function cFW(d){this.a=d},
cFT:function cFT(d){this.a=d},
cFX:function cFX(d){this.a=d},
cFY:function cFY(d,e){this.a=d
this.b=e},
cFZ:function cFZ(){},
cG_:function cG_(d){this.a=d},
cFO:function cFO(d){this.a=d},
cFP:function cFP(d,e){this.a=d
this.b=e},
cFN:function cFN(d,e){this.a=d
this.b=e},
cFQ:function cFQ(){},
cFR:function cFR(){},
cFS:function cFS(d,e){this.a=d
this.b=e},
aA4:function aA4(){},
aHj:function aHj(){},
hdY(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.brO((w-450*u)/2,(v-900*u)/2,u)},
ag_:function ag_(){},
f7Q:function f7Q(d){this.a=d},
aL7:function aL7(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fi_:function fi_(d){this.a=d},
amj:function amj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amk:function amk(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qa$=f
_.M0$=g
_.anc$=h
_.bw$=i
_.a9$=j
_.c=_.a=null},
bT1:function bT1(d){this.a=d},
bT0:function bT0(){},
bSZ:function bSZ(d){this.a=d},
bSX:function bSX(){},
bSY:function bSY(d){this.a=d},
bSU:function bSU(d,e){this.a=d
this.b=e},
bSV:function bSV(){},
bSW:function bSW(d){this.a=d},
bT_:function bT_(d,e){this.a=d
this.b=e},
bST:function bST(d){this.a=d},
btu:function btu(d,e){this.b=d
this.a=e},
f7R:function f7R(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f7S:function f7S(d,e,f){this.a=d
this.b=e
this.c=f},
f7T:function f7T(d,e,f){this.a=d
this.b=e
this.c=f},
f7U:function f7U(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7V:function f7V(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f7W:function f7W(){},
amh:function amh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ami:function ami(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qa$=f
_.M0$=g
_.anc$=h
_.bw$=i
_.a9$=j
_.c=_.a=null},
bSF:function bSF(){},
bSQ:function bSQ(d,e){this.a=d
this.b=e},
bSR:function bSR(d){this.a=d},
bSS:function bSS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSM:function bSM(){},
bSL:function bSL(d,e){this.a=d
this.b=e},
bSN:function bSN(d,e){this.a=d
this.b=e},
bSO:function bSO(){},
bSP:function bSP(d){this.a=d},
bSH:function bSH(d){this.a=d},
bSI:function bSI(d){this.a=d},
bSJ:function bSJ(d){this.a=d},
bSG:function bSG(d,e){this.a=d
this.b=e},
bSK:function bSK(d){this.a=d},
bjY:function bjY(d,e){this.b=d
this.a=e},
ds3:function ds3(){},
a2g:function a2g(d,e){this.a=d
this.b=e},
amd:function amd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ame:function ame(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qa$=e
_.M0$=f
_.anc$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
bSr:function bSr(d){this.a=d},
bSq:function bSq(){},
bSp:function bSp(){},
bSj:function bSj(){},
bSk:function bSk(){},
bSo:function bSo(d,e,f){this.a=d
this.b=e
this.c=f},
bSn:function bSn(d){this.a=d},
bSl:function bSl(d,e){this.a=d
this.b=e},
bSm:function bSm(d){this.a=d},
bjo:function bjo(d,e){this.b=d
this.a=e},
aBS:function aBS(){},
bgX:function bgX(){},
aBU:function aBU(){},
bgY:function bgY(){},
aBV:function aBV(){},
bgZ:function bgZ(){},
uz(d,e,f,g,h){var w,v,u=null,t=A.l(18),s=A.a([],x.V)
s.push(new A.ab(0,B.G,f.j(0.4),B.i8,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.X(g,h,u,u,u,20),B.af],w))
v.push(A.d(d,u,u,u,u,u,u,A.m(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.az(u,A.r(u,A.A(v,B.l,u,B.e,B.O,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.n),u,u,u,u,B.Ot,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hmX(d,e,f,g,h,i,j){return new C.amf(i,h,d,j,e,f,g,null)},
a6I:function a6I(d,e){this.c=d
this.a=e},
bjv:function bjv(d){this.a=d},
tI:function tI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bSi:function bSi(d){this.a=d},
Iz:function Iz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Wt:function Wt(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmj:function bmj(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e2f:function e2f(d,e){this.a=d
this.b=e},
e2g:function e2g(d){this.a=d},
e2h:function e2h(d,e){this.a=d
this.b=e},
e2d:function e2d(d){this.a=d},
e2e:function e2e(d){this.a=d},
e2c:function e2c(d){this.a=d},
e2a:function e2a(d){this.a=d},
e2b:function e2b(d){this.a=d},
e29:function e29(d,e){this.a=d
this.b=e},
e2i:function e2i(d){this.a=d},
e2j:function e2j(d,e){this.a=d
this.b=e},
e2k:function e2k(d,e){this.a=d
this.b=e},
e2l:function e2l(d,e){this.a=d
this.b=e},
e2o:function e2o(d,e){this.a=d
this.b=e},
e2p:function e2p(d,e){this.a=d
this.b=e},
e2q:function e2q(d,e){this.a=d
this.b=e},
e2r:function e2r(d,e){this.a=d
this.b=e},
e2s:function e2s(d,e){this.a=d
this.b=e},
e2t:function e2t(d,e,f){this.a=d
this.b=e
this.c=f},
e2u:function e2u(d,e){this.a=d
this.b=e},
e2v:function e2v(d,e){this.a=d
this.b=e},
e2m:function e2m(d){this.a=d},
e2n:function e2n(d){this.a=d},
a09:function a09(d,e){this.a=d
this.b=e},
amf:function amf(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
amg:function amg(d){var _=this
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
bSD:function bSD(d){this.a=d},
bSE:function bSE(d){this.a=d},
bSC:function bSC(d){this.a=d},
bSt:function bSt(d){this.a=d},
bSu:function bSu(d){this.a=d},
bSs:function bSs(d){this.a=d},
bSz:function bSz(d,e,f){this.a=d
this.b=e
this.c=f},
bSA:function bSA(d){this.a=d},
bSw:function bSw(d,e){this.a=d
this.b=e},
bSx:function bSx(d,e,f){this.a=d
this.b=e
this.c=f},
bSB:function bSB(){},
bSy:function bSy(d,e){this.a=d
this.b=e},
bSv:function bSv(d){this.a=d},
U8:function U8(d,e){this.c=d
this.a=e},
amc:function amc(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bS3:function bS3(d){this.a=d},
bS4:function bS4(d){this.a=d},
bSe:function bSe(){},
bSd:function bSd(d,e,f){this.a=d
this.b=e
this.c=f},
bS8:function bS8(d,e){this.a=d
this.b=e},
bS7:function bS7(d,e){this.a=d
this.b=e},
bS9:function bS9(d){this.a=d},
bSa:function bSa(d,e){this.a=d
this.b=e},
bSb:function bSb(d,e){this.a=d
this.b=e},
bS6:function bS6(d,e){this.a=d
this.b=e},
bSc:function bSc(d,e,f){this.a=d
this.b=e
this.c=f},
bS5:function bS5(d,e){this.a=d
this.b=e},
ijV(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aja(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.V(Date.now(),0,!1))
s=new C.fIi(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("Y<1>"),q=q.k("cM<1,n>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.z3)m.push(l===D.wG?"male":"female")
l=u.w
k=A.ag(a3,!0,!1,!1,!1).cE(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ag(a3,!0,!1,!1,!1).cE(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.j_(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.j_(h,a2,a2)-A.j_(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.C(new A.cM(new A.Y(a4,new C.fIg(u,f),p),new C.fIh(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aN(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aN(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aB(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
ijW(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aja(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fIn(v,e)
q=new C.fIl(v)
p=A.T(w,x.S)
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
p.n(0,s.a,d)}}d=p.$ti.k("b8<2>")
d=A.d0(new A.b8(p,d),d.k("M.E"))
n=A.C(d,A.a4(d).k("ci.E"))
B.d.fg(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eJ(l,new C.fIm(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aN(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i4A(d,e,f,g){var w,v,u=C.ijX(d,e)
if(u<=0||f.length<=u)return new A.afE(!1,D.DJ,f)
if(g.q(0,e.a))return new A.afE(!1,D.DJ,f)
w=A.U(f).c
v=A.cX(f,0,A.dB(u,"count",x.S),w).dn(0)
return new A.afE(!0,A.cX(f,u,null,w).dn(0),v)},
i4B(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aja(d3),d2=d1.length
if(d2===0)return D.hyz
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c3(0,t.a,new C.dhz(t))}s=new C.dhQ(v)
d2=x.dy
r=A.T(w,d2)
q=new C.dhI(r)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dhH(r)
l=A.T(w,x.do)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c5(l.c3(0,k,new C.dhA()),o)}h=new C.dhG(s)
g=new C.dhF(l,r)
p=v.$ti.k("b8<2>")
o=p.k("Y<M.E>")
f=A.C(new A.Y(new A.b8(v,p),new C.dhB(h),o),o.k("M.E"))
e=f.length===0?new A.b8(v,p).gH(0):B.d.gH(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.I)(f),++u){t=f[u]
a0=g.$2(t.a,A.aR(w))
if(a0>d){d=a0
e=t}}a1=A.aR(w)
p=x.S
a2=A.T(w,p)
a3=A.T(w,w)
a4=A.T(w,d2)
d2=x.i
a5=A.T(w,d2)
a6=A.T(w,x.d9)
a7=A.T(w,d2)
a8=A.a([],x.s)
a9=new C.dhO(new C.dhK(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dq(v,v.r,v.e),j=a2.gamb(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.et([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.I(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nA(J.dH(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.dO)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.dhy(a2,new C.dhP(),b6,a3,b4,v,a4,a5,a6,b5)
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
d2=b4.$ti.k("cx<1>")
d2=A.C(new A.cx(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.GG(o,new A.p(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.L1(c5.a,new A.p(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cx<1>")
d2=A.C(new A.cx(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bO(0,new C.dhC(c6,b4))
for(d2=new A.cc(a4,a4.$ti.k("cc<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aT(c7.b);j.C();){i=j.gR(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.p(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eJ(j,new C.dhD(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.dhE())
c6.push(new C.aL2(new A.p(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bh2(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hC3(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(d)
return w==null?null:w.b[1]},
hwa(d,e,f,g,h,i,j,k,l,m,n){return new C.a0m(k,f,j,e,l,n,m,d,g,h,i,null)},
aDT(d,e,f,g,h,i,j){return new C.bkO(i,d,e,f,j,h,g,null)},
arj:function arj(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFq:function aFq(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e3V:function e3V(d){this.a=d},
e3U:function e3U(d){this.a=d},
e3X:function e3X(d,e){this.a=d
this.b=e},
e3Y:function e3Y(d,e){this.a=d
this.b=e},
e3Z:function e3Z(d){this.a=d},
e3T:function e3T(d,e){this.a=d
this.b=e},
e3W:function e3W(d){this.a=d},
e40:function e40(d){this.a=d},
e4_:function e4_(d,e){this.a=d
this.b=e},
ard:function ard(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFn:function aFn(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e3l:function e3l(d){this.a=d},
e3j:function e3j(d){this.a=d},
e3k:function e3k(d){this.a=d},
e3m:function e3m(d,e){this.a=d
this.b=e},
e3g:function e3g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2I:function e2I(d){this.a=d},
e2J:function e2J(d,e){this.a=d
this.b=e},
e3_:function e3_(d){this.a=d},
e2Y:function e2Y(d){this.a=d},
e2Z:function e2Z(d,e){this.a=d
this.b=e},
e30:function e30(d){this.a=d},
e31:function e31(d,e){this.a=d
this.b=e},
e3f:function e3f(d,e){this.a=d
this.b=e},
e2X:function e2X(d){this.a=d},
e2W:function e2W(d){this.a=d},
e2V:function e2V(d,e){this.a=d
this.b=e},
e3c:function e3c(){},
e3d:function e3d(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e3b:function e3b(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e35:function e35(d){this.a=d},
e36:function e36(d,e,f){this.a=d
this.b=e
this.c=f},
e34:function e34(d,e){this.a=d
this.b=e},
e37:function e37(d,e){this.a=d
this.b=e},
e32:function e32(d,e){this.a=d
this.b=e},
e33:function e33(){},
e38:function e38(d,e){this.a=d
this.b=e},
e39:function e39(d){this.a=d},
e3a:function e3a(d,e){this.a=d
this.b=e},
e3e:function e3e(d,e){this.a=d
this.b=e},
e2w:function e2w(d,e){this.a=d
this.b=e},
e2x:function e2x(d,e){this.a=d
this.b=e},
e3o:function e3o(d,e,f){this.a=d
this.b=e
this.c=f},
e3i:function e3i(d,e,f){this.a=d
this.b=e
this.c=f},
e3h:function e3h(d){this.a=d},
e2y:function e2y(d){this.a=d},
e2z:function e2z(d){this.a=d},
e2A:function e2A(){},
e2B:function e2B(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2F:function e2F(d,e){this.a=d
this.b=e},
e2E:function e2E(d,e){this.a=d
this.b=e},
e2D:function e2D(d){this.a=d},
e2G:function e2G(d,e){this.a=d
this.b=e},
e2C:function e2C(d){this.a=d},
e3n:function e3n(d){this.a=d},
e2S:function e2S(){},
e2T:function e2T(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2R:function e2R(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2N:function e2N(d,e,f){this.a=d
this.b=e
this.c=f},
e2M:function e2M(d,e,f){this.a=d
this.b=e
this.c=f},
e2K:function e2K(d,e){this.a=d
this.b=e},
e2O:function e2O(d){this.a=d},
e2P:function e2P(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2L:function e2L(d,e){this.a=d
this.b=e},
e2Q:function e2Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2U:function e2U(d,e){this.a=d
this.b=e},
e3v:function e3v(){},
e3w:function e3w(d,e){this.a=d
this.b=e},
e3x:function e3x(d){this.a=d},
e3y:function e3y(d,e){this.a=d
this.b=e},
e3r:function e3r(d){this.a=d},
e3p:function e3p(d,e){this.a=d
this.b=e},
e3s:function e3s(d,e){this.a=d
this.b=e},
e3t:function e3t(d,e){this.a=d
this.b=e},
e3u:function e3u(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e3z:function e3z(d){this.a=d},
e3q:function e3q(d){this.a=d},
e2H:function e2H(d){this.a=d},
bh0:function bh0(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dhw:function dhw(d){this.a=d},
dhv:function dhv(d,e){this.a=d
this.b=e},
dhx:function dhx(d){this.a=d},
dhu:function dhu(d,e){this.a=d
this.b=e},
fIi:function fIi(d,e){this.a=d
this.b=e},
fIj:function fIj(d){this.a=d},
fIk:function fIk(){},
fIg:function fIg(d,e){this.a=d
this.b=e},
fIh:function fIh(){},
fIn:function fIn(d,e){this.a=d
this.b=e},
fIo:function fIo(d){this.a=d},
fIp:function fIp(){},
fIl:function fIl(d){this.a=d},
fIm:function fIm(d,e){this.a=d
this.b=e},
L1:function L1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GG:function GG(d,e){this.a=d
this.b=e},
bh2:function bh2(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dhz:function dhz(d){this.a=d},
dhQ:function dhQ(d){this.a=d},
dhI:function dhI(d){this.a=d},
dhJ:function dhJ(){},
dhH:function dhH(d){this.a=d},
dhA:function dhA(){},
dhG:function dhG(d){this.a=d},
dhF:function dhF(d,e){this.a=d
this.b=e},
dhB:function dhB(d){this.a=d},
dhK:function dhK(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dhL:function dhL(d){this.a=d},
dhM:function dhM(d){this.a=d},
dhN:function dhN(){},
dhO:function dhO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dhP:function dhP(){},
dhy:function dhy(d,e,f,g,h,i,j,k,l,m){var _=this
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
dhC:function dhC(d,e){this.a=d
this.b=e},
dhD:function dhD(d){this.a=d},
dhE:function dhE(){},
aL2:function aL2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bh3:function bh3(d,e){this.b=d
this.a=e},
dhR:function dhR(){},
dhS:function dhS(d){this.a=d},
dhT:function dhT(d){this.a=d},
dhU:function dhU(){},
bkP:function bkP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bg5:function bg5(d,e){this.b=d
this.a=e},
byR:function byR(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fnA:function fnA(d){this.a=d},
bob:function bob(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eYC:function eYC(d){this.a=d},
eYB:function eYB(d,e){this.a=d
this.b=e},
a0m:function a0m(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aDR:function aDR(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dxP:function dxP(d,e){this.a=d
this.b=e},
dxO:function dxO(d){this.a=d},
dxM:function dxM(d){this.a=d},
dxN:function dxN(d){this.a=d},
dxY:function dxY(d){this.a=d},
dxZ:function dxZ(d){this.a=d},
dxX:function dxX(d,e){this.a=d
this.b=e},
dy_:function dy_(){},
dy2:function dy2(d){this.a=d},
dxW:function dxW(d,e){this.a=d
this.b=e},
dy1:function dy1(){},
dy3:function dy3(d){this.a=d},
dxV:function dxV(d,e){this.a=d
this.b=e},
dy4:function dy4(d){this.a=d},
dxU:function dxU(d){this.a=d},
dy5:function dy5(d){this.a=d},
dxT:function dxT(d){this.a=d},
dy6:function dy6(d){this.a=d},
dxS:function dxS(d){this.a=d},
dy7:function dy7(d){this.a=d},
dxR:function dxR(d){this.a=d},
dy8:function dy8(d){this.a=d},
dxQ:function dxQ(d,e){this.a=d
this.b=e},
dy0:function dy0(d){this.a=d},
aex:function aex(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bkO:function bkO(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aew:function aew(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bkN:function bkN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dy9:function dy9(d){this.a=d},
dya:function dya(d,e){this.a=d
this.b=e},
aDS:function aDS(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aK4:function aK4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aey:function aey(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dyj:function dyj(d){this.a=d},
GC:function GC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hr_(d){var w=d.U,v=x.N
return w.jr(w,new C.cft(),v,v)},
hWY(d){var w=d.bF
if(w>=0)return w
return 5},
hr1(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hr_(d).h(0,v)
if(w==null||w.length===0)return null
return A.bh(w)},
hr0(d,e){var w=C.hr1(d,e)
if(w!=null&&w.ca(new A.V(Date.now(),0,!1)))return!0
return!1},
hWZ(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hr_(d),w,w)
u=C.hr1(d,e)
t=u!=null&&u.ca(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bS(A.dw(30,0,0,0,0,0).a).aa().ag())
d.U=v},
b1y(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b1y=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lB(t,B.JC),$async$b1y)
case 3:if(l){u=!0
w=1
break}u=A.lh(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.JC,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1y,v)},
cft:function cft(){},
hWW(){var w,v=$.ov(),u=J.e5(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"FT"+B.d.hf(u)},
Jv(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Jv=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$Jv)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f5("ngmy_family_tree_backup_codes_v1",null,!1,B.bO),$async$Jv)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.t(r,"codes")
if(x.f.b(q)){o=A.a2(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ac(m)
$.am.$1("[family tree sync codes] load: "+A.w(p))
w=7
break
case 4:w=2
break
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Jv,v)},
a8r(d){return C.hWX(d)},
hWX(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8r=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$a8r)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hM("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cP,null),$async$a8r)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ac(p)
$.am.$1("[family tree sync codes] save: "+A.w(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a8r,v)},
cfs(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cfs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Jv(),$async$cfs)
case 3:t=m.i4(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gR(t)
q=r.b
if(s.b(q)){p=J.a7(q)
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
return A.i($async$cfs,v)},
Os(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Os=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cfs(d),$async$Os)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Jv(),$async$Os)
case 6:s=f
r=J.a7(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dL(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a8r(s),$async$Os)
case 9:case 8:u=t
w=1
break
case 5:n=C.hWW()
w=10
return A.b(C.Jv(),$async$Os)
case 10:s=f
J.aK(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a8r(s),$async$Os)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Os,v)},
b1x(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b1x=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Jv(),$async$b1x)
case 3:t=f
for(s=J.dp(t),r=s.gdP(t),r=r.dn(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8r(t),$async$b1x)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b1x,v)},
a8s(d,e,f){var w=0,v=A.j(x.H),u
var $async$a8s=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.ari(d,e),$async$a8s)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Os(d),$async$a8s)
case 7:w=4
break
case 5:w=8
return A.b(C.b1x(d),$async$a8s)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a8s,v)},
arc(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$arc=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.ari(f,e),$async$arc)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c9(),$async$arc)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Jv(),$async$arc)
case 7:q=o.t(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a7(q)
if(!J.z(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arc,v)},
b1w(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b1w=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c9(),$async$b1w)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Jv(),$async$b1w)
case 4:t=q.t(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a7(t)
if(!J.z(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1w,v)},
hX_(){var w,v=$.ov(),u=J.e5(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"FT"+B.d.hf(u)},
arf(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$arf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$arf)
case 3:if(!g){u=null
w=1
break}t=C.hX_()
w=4
return A.b(A.Wu(),$async$arf)
case 4:s=g
r=B.dW.aO(B.X.aw(d.f3(),null))
r=B.cV.gcu().aO(r)
q=e?999:2
J.aK(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a8t(s),$async$arf)
case 5:p=e?999:2
u=new A.a1w("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arf,v)},
are(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$are=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Wu(),$async$are)
case 3:p=a0
o=J.a7(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a7(n)
l=A.aJ(m.h(n,"usesRemaining"))
k=l==null?null:B.j.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b1w(J.k(l==null?"":l),j),$async$are)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.ca.cJ(0,B.cM.aO(t))
s=C.hr2(r)}catch(f){q=A.ac(f)
$.am.$1("[family tree qr stash] decode: "+A.w(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dL(A.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a8t(p),$async$are)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$are,v)},
hr2(d){var w,v,u,t,s=null
try{w=B.X.aP(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hX1(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ac(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
h9U(d){var w=0,v=A.j(x.m),u,t,s
var $async$h9U=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.are(t[1])
w=1
break}u=null
w=1
break}u=C.hr2(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h9U,v)},
hX1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.de(v,x.f)
u=A.cF(u,new C.cfv(),u.$ti.k("M.E"),x.k)
t=A.a4(u).k("Y<M.E>")
s=A.C(new A.Y(u,new C.cfw(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bh(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.T(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.i4(p),t=t.gae(t),o=x.B;t.C();){n=t.gR(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.de(l,u)
n=A.cF(n,new C.cfx(),n.$ti.k("M.E"),o)
k=A.a4(n).k("Y<M.E>")
j=A.C(new A.Y(n,new C.cfy(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.arg(h,w,s,r,q)},
ari(d,e){var w=0,v=A.j(x.y),u,t
var $async$ari=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Oj(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bs(d),$async$ari)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ari,v)},
cfE(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cfE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bs(d),$async$cfE)
case 3:t=s.b7(f,new C.cfF(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.cfG())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfE,v)},
Wv(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Wv=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.ari(e,d),$async$Wv)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Os(e),$async$Wv)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Bs(e),$async$Wv)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.cfC(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a7(r)
if(t.gau(r)){u=null
w=1
break}t=t.dN(r,new C.cfD(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.LQ(e,o),$async$Wv)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.arg(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Wv,v)},
b1B(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b1B=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Wv(d,e,f,g),$async$b1B)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Hk(A.KY(q.f3(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1B,v)},
b1A(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b1A=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Wv(d,e,f,g),$async$b1A)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.arf(r,f),$async$b1A)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aI4(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1A,v)},
Ww(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ww=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h9U(a0),$async$Ww)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.arc(g.a,d,e,f,s,r),$async$Ww)
case 6:if(!a2){if(r)throw A.W(A.bc("This backup expired or the sender's tree is no longer available."))
throw A.W(A.bc("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bEf(e,j),$async$Ww)
case 12:case 11:w=13
return A.b(C.aiU(e,j,s),$async$Ww)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.BD(e,i,h),$async$Ww)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.brU(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ww,v)},
arg:function arg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cfA:function cfA(){},
cfB:function cfB(){},
cfz:function cfz(){},
cfv:function cfv(){},
cfw:function cfw(){},
cfx:function cfx(){},
cfy:function cfy(){},
cfF:function cfF(){},
cfG:function cfG(){},
cfC:function cfC(d){this.a=d},
cfD:function cfD(d){this.a=d},
hiY(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f4(null,x.H)
return A.hC(d,new C.arh(w,e,g,i,f,h,null),!0,null,x.H)},
dht(d,e,f,g,h,i,j,k){return new C.bh_(i,e,k,j,g,f,h,d,null)},
arh:function arh(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFp:function aFp(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e3I:function e3I(d){this.a=d},
e3J:function e3J(d,e,f){this.a=d
this.b=e
this.c=f},
e3N:function e3N(d,e){this.a=d
this.b=e},
e3O:function e3O(d){this.a=d},
e3F:function e3F(d){this.a=d},
e3G:function e3G(d,e){this.a=d
this.b=e},
e3H:function e3H(d,e){this.a=d
this.b=e},
e3M:function e3M(d){this.a=d},
e3L:function e3L(d,e){this.a=d
this.b=e},
e3K:function e3K(){},
e3Q:function e3Q(d){this.a=d},
e3R:function e3R(d,e){this.a=d
this.b=e},
e3P:function e3P(d,e){this.a=d
this.b=e},
dhV:function dhV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bh1:function bh1(d,e,f){this.d=d
this.e=e
this.a=f},
adN:function adN(d,e,f){this.c=d
this.d=e
this.a=f},
bh_:function bh_(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bh4:function bh4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0G:function a0G(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFo:function aFo(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e3A:function e3A(d,e){this.a=d
this.b=e},
e3B:function e3B(d){this.a=d},
e3C:function e3C(d){this.a=d},
e3D:function e3D(d){this.a=d},
e3E:function e3E(d){this.a=d},
a0H:function a0H(d){this.a=d},
bmk:function bmk(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e3S:function e3S(d,e){this.a=d
this.b=e},
b04(d,e){return new C.b03(d,e,null)},
b03:function b03(d,e,f){this.c=d
this.d=e
this.a=f},
imm(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.b2(d,11)},
iuj(d){return A.bU(B.L,null,new C.fZe(new C.ul(A.P(d).ax.a===B.H)),d,!0,!0,!0,null,!1,!1,x.N)},
ht0(d,e){return new C.auj(e,d,null)},
aSy(d,e,f,g,h,i,j){var w=C.imm(i)
if(w!=null)return A.bx(e,new A.a5(j,f,new C.a7u(w,!0,null),null),B.aq)
return N.aRV(e,B.c0,f,g,h,i,j)},
lZ:function lZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7u:function a7u(d,e,f){this.c=d
this.d=e
this.a=f},
blY:function blY(d,e){var _=this
_.e=_.d=$
_.cQ$=d
_.b7$=e
_.c=_.a=null},
dPW:function dPW(d){this.a=d},
dPX:function dPX(){},
dPY:function dPY(d,e){this.a=d
this.b=e},
blX:function blX(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fZe:function fZe(d){this.a=d},
fZd:function fZd(d,e){this.a=d
this.b=e},
fZc:function fZc(d,e){this.a=d
this.b=e},
fZb:function fZb(d,e){this.a=d
this.b=e},
auj:function auj(d,e,f){this.c=d
this.d=e
this.a=f},
cp5:function cp5(d,e){this.a=d
this.b=e},
aNu:function aNu(){},
iu4(d){var w=null
return A.cg(w,w,!0,w,new C.fYC(),d,w,!0,!0,x.e2)},
ivi(d,e,f,g,h){var w=null
return A.cg(w,w,!0,w,new C.h5n(h,g,f,e),d,w,!0,!0,x.N)},
iu6(d,e){var w=null
return A.cg(w,w,!0,w,new C.fYG(e),d,w,!0,!0,x.dY)},
iu5(d){var w=null
return A.cg(w,w,!0,w,new C.fYF(),d,w,!0,!0,x.c5)},
aVu:function aVu(d,e){this.a=d
this.b=e},
aVt:function aVt(d){this.a=d},
aTw:function aTw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fYC:function fYC(){},
h5n:function h5n(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fYG:function fYG(d){this.a=d},
fYF:function fYF(){},
a_k:function a_k(d,e){this.c=d
this.a=e},
aAA:function aAA(){var _=this
_.d=$
_.c=_.a=_.e=null},
d95:function d95(d){this.a=d},
d96:function d96(d){this.a=d},
d94:function d94(d,e){this.a=d
this.b=e},
d97:function d97(d){this.a=d},
d98:function d98(d){this.a=d},
a_j:function a_j(d){this.a=d},
aAz:function aAz(){this.d=$
this.c=this.a=null},
d91:function d91(d){this.a=d},
d92:function d92(d){this.a=d},
d93:function d93(d){this.a=d},
ZR:function ZR(d){this.a=d},
azi:function azi(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cHs:function cHs(){},
cHy:function cHy(d){this.a=d},
cHz:function cHz(d){this.a=d},
cHA:function cHA(d){this.a=d},
cHx:function cHx(){},
cHB:function cHB(d){this.a=d},
cHC:function cHC(d){this.a=d},
cHw:function cHw(){},
cHD:function cHD(d,e){this.a=d
this.b=e},
cHv:function cHv(d,e){this.a=d
this.b=e},
cHt:function cHt(d,e){this.a=d
this.b=e},
cHE:function cHE(d){this.a=d},
cHu:function cHu(){},
cHF:function cHF(d){this.a=d},
a2s:function a2s(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
byJ:function byJ(){this.d=$
this.c=this.a=null},
fn5:function fn5(d,e){this.a=d
this.b=e},
fn6:function fn6(d){this.a=d},
fn7:function fn7(d,e){this.a=d
this.b=e},
acP:function acP(d,e){this.a=d
this.b=e},
Gq:function Gq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
byH:function byH(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
fn3:function fn3(d,e){this.a=d
this.b=e},
azb:function azb(d,e){this.c=d
this.a=e},
byI:function byI(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
fn4:function fn4(d){this.a=d},
byG:function byG(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aPC:function aPC(){},
aPD:function aPD(){},
bGf(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.j.bh(u),s=B.o.D(B.j.V((u-t)*100),0,99),r=d<0?"-":"",q=A.p9(B.o.v(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fX_(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.U,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b_(B.o.v(s),2,"0")
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Ze(A.cQ(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aSa(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aSa=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.i_().l9(85,1280,B.eQ),$async$aSa)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fq(),$async$aSa)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.ht_()
w=9
return A.b(C.cp4(q,r),$async$aSa)
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
$.am.$1("[worksheets] pick photo failed: "+A.w(o))
u=null
w=1
break
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aSa,v)},
aSw(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aSw=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.cp1(g)
w=1
break}if(!B.a.a_(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cM.aO(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.Hl(p,!0,null,o).dg(0,B.h8),$async$aSw)
case 9:n=a1
w=10
return A.b(n.ld(),$async$aSw)
case 10:m=a1
w=11
return A.b(m.b.hi(B.ha),$async$aSw)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eQ(B.dM.gaU(l))
k="data:image/png;base64,"+B.cV.gcu().aO(i)
if(J.ad(k)<=r){u=k
w=1
break}o=B.j.V(o*0.72)
w=7
break
case 8:t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.ac(f)
$.am.$1("[worksheets] thumbnail shrink failed: "+A.w(j))
w=6
break
case 3:w=2
break
case 6:u=g
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aSw,v)},
fX_:function fX_(){},
ul:function ul(d){this.a=d},
aui:function aui(d,e,f){this.c=d
this.d=e
this.a=f},
aGV:function aGV(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eVM:function eVM(d,e){this.a=d
this.b=e},
eVD:function eVD(d){this.a=d},
eVE:function eVE(d){this.a=d},
eVK:function eVK(d,e){this.a=d
this.b=e},
eVJ:function eVJ(d,e){this.a=d
this.b=e},
eVG:function eVG(d,e){this.a=d
this.b=e},
eVF:function eVF(d,e){this.a=d
this.b=e},
eVH:function eVH(d){this.a=d},
eVI:function eVI(d,e){this.a=d
this.b=e},
eVL:function eVL(d,e){this.a=d
this.b=e},
eVy:function eVy(d,e){this.a=d
this.b=e},
eVC:function eVC(d){this.a=d},
eVB:function eVB(d,e){this.a=d
this.b=e},
eVA:function eVA(d){this.a=d},
eVN:function eVN(d,e){this.a=d
this.b=e},
eVO:function eVO(d,e){this.a=d
this.b=e},
eVz:function eVz(d,e){this.a=d
this.b=e},
hGg(d,e,f){var w="thumbnailPath",v=e.aj()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
fX0(d,e,f){var w=0,v=A.j(x.N),u
var $async$fX0=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.X.aw(C.hGg(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fX0,v)},
bGh(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bGh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fX0(!0,d,e),$async$bGh)
case 4:w=3
return A.b(r.aug(g,d,e.a),$async$bGh)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dW.aO(B.X.aw(C.hGg(d,e,null),null))
u="NGMY_WS:"+B.kJ.gcu().aO(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGh,v)},
hxz(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hiy(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d5(s,"NGMYWSSYNC2|"))return!0
if(J.d5(s,"NGMY_WS:"))return!0
if(J.eK(s,t))return!0
if(J.d5(s,"{"))try{w=B.X.aP(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
irB(d){var w,v,u,t=C.hxz(d)
if(t==null)return null
if(C.hiy(t))return t
w=B.a.co(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b2(t,w))
if(C.hiy(v))return v}u=B.a.co(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b2(t,u))
if(C.hiy(v))return v}return null},
hix(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d5(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d5(q,"NGMY_WS:")){v=B.ca.cJ(0,B.cM.aO(J.nq(q,8)))
w=t.a(B.X.aP(0,v,r))}else w=t.a(B.X.aP(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hcy(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bGg(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bGg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.auf(t[1]),$async$bGg)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hix(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hix(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGg,v)},
hiw(d){var w=B.o.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lF(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bFL(){var w=0,v=A.j(x.o),u,t
var $async$bFL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Hx(),$async$bFL)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hix(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFL,v)},
hHt(d,e,f,g){return A.bU(B.L,null,new C.h5a(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h5a:function h5a(d,e,f){this.a=d
this.b=e
this.c=f},
aeT:function aeT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eVQ:function eVQ(d,e){this.a=d
this.b=e},
eVR:function eVR(d,e){this.a=d
this.b=e},
eVS:function eVS(d,e){this.a=d
this.b=e},
eVT:function eVT(d,e){this.a=d
this.b=e},
eVP:function eVP(d){this.a=d},
auc:function auc(d,e,f){this.c=d
this.d=e
this.a=f},
bnH:function bnH(){var _=this
_.c=_.a=_.e=_.d=null},
eVt:function eVt(d,e){this.a=d
this.b=e},
eVu:function eVu(d){this.a=d},
eVv:function eVv(d){this.a=d},
auh:function auh(d){this.a=d},
aGU:function aGU(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eVx:function eVx(d){this.a=d},
eVw:function eVw(d){this.a=d},
i_g(d,e,f,g,h){return new C.P8(h,g,d,e,f,null)},
aLP:function aLP(d,e){this.a=d
this.b=e},
P8:function P8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGW:function aGW(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eWf:function eWf(){},
eWb:function eWb(d,e){this.a=d
this.b=e},
eWc:function eWc(d){this.a=d},
eVX:function eVX(d){this.a=d},
eVV:function eVV(d){this.a=d},
eVW:function eVW(d){this.a=d},
eW5:function eW5(d,e){this.a=d
this.b=e},
eW2:function eW2(d,e){this.a=d
this.b=e},
eW3:function eW3(d,e){this.a=d
this.b=e},
eW4:function eW4(d,e,f){this.a=d
this.b=e
this.c=f},
eW0:function eW0(d,e,f){this.a=d
this.b=e
this.c=f},
eVZ:function eVZ(d){this.a=d},
eW_:function eW_(d){this.a=d},
eW1:function eW1(d){this.a=d},
eWi:function eWi(d){this.a=d},
eWh:function eWh(d){this.a=d},
eWj:function eWj(d){this.a=d},
eWg:function eWg(d){this.a=d},
eVU:function eVU(d){this.a=d},
eVY:function eVY(d,e){this.a=d
this.b=e},
eWe:function eWe(d,e){this.a=d
this.b=e},
eWd:function eWd(d,e){this.a=d
this.b=e},
eW8:function eW8(d){this.a=d},
eW9:function eW9(d){this.a=d},
eWa:function eWa(d,e){this.a=d
this.b=e},
eW7:function eW7(d,e){this.a=d
this.b=e},
eW6:function eW6(d,e,f){this.a=d
this.b=e
this.c=f},
bAu:function bAu(){},
Bf(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
aho(d,e,f){return C.ifI(d,e,f)},
ifI(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aho=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aD("String",e,f),$async$aho)
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
$.am.$1("[worksheets] setString failed for "+e+": "+A.w(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aho,v)},
ahn(d,e){return C.ifH(d,e)},
ifH(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ahn=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ahn)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.ac(q)
$.am.$1("[worksheets] remove failed for "+e+": "+A.w(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$ahn,v)},
iex(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.TD(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bDe(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bDe=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
if(q.length===0){u=null
w=1
break}t=B.a.a_(q,"ngmy:thumb:")
if(!t)t=B.a.a_(q,"ngmy:ws-thumb:")
else t=!0
if(t){u=q
w=1
break}w=B.a.a_(q,"data:image")?3:4
break
case 3:w=5
return A.b(C.b4O(q),$async$bDe)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aSw(q,!1),$async$bDe)
case 6:r=f
if(r!=null&&B.a.a_(r,"data:image")&&r.length<=12e4){u=r
w=1
break}u=null
w=1
break
case 4:u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDe,v)},
hNF(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rs(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rs(p,J.k(u==null?"":u),1,o,q)},
hcy(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.de(s,x.f)
w=A.cF(w,new C.cGK(),w.$ti.k("M.E"),x.Q)
v=A.a4(w).k("Y<M.E>")
r=A.C(new A.Y(w,new C.cGL(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bh(J.k(t==null?"":t))
return new C.lF(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
ijR(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wG
case"female":case"f":return D.oA
default:return D.z3}},
hCE(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hmY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ijR(v==null?j:J.k(v))
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
m=m==null?j:B.j.M(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aJ(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.j.M(k)
return new C.hZ(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ijT(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.OR
case"viewer":return D.kW
default:return D.uN}},
ijU(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Hm(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aRh(d,e){return B.a.i(e.toLowerCase())===C.Hm(d,e)&&d.y!==D.kW},
uA(d,e){var w,v=d.y
if(v===D.kW)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Hm(d,e))return!0
if(v===D.OR)return!0
v=d.e
return new A.N(v,A.hiE(),A.U(v).k("N<1,n>")).q(0,w)},
ijd(d){return J.dH(d,new C.fHa()).gJ(0)},
h5W(d){var w=0,v=A.j(x.y),u,t
var $async$h5W=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bs(d),$async$h5W)
case 3:u=t.rn(f,new C.h5X(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h5W,v)},
bEf(d,e){var w=0,v=A.j(x.H),u,t
var $async$bEf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bs(d),$async$bEf)
case 3:t=g
if(J.rn(t,new C.fEF(e))){w=1
break}if(C.ijd(t)>=2)throw A.W(A.bc("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bEf,v)},
amm(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.de(h,x.f)
w=A.cF(w,new C.bT4(),w.$ti.k("M.E"),x.P)
v=A.a4(w).k("Y<M.E>")
g=A.C(new A.Y(w,new C.bT5(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b7(u,new C.bT6(),x.N)
t=A.C(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
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
p=A.aJ(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.j.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.ijT(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aT(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cs)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gR(f)
if(l.b(i))m.push(A.a2(i,k,j))}return new C.kZ(w,v,s,!r,t,g,q,p,o,n,m)},
hCT(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aB(v,0,8)},
DE(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SH(d),$async$DE)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aA(),$async$DE)
case 4:t=f
w=5
return A.b(t.a7l(0),$async$DE)
case 5:w=6
return A.b(C.fuZ(t,l),$async$DE)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a7(q)
o=A.aV(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hy9(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.p8(l,n),$async$DE)
case 11:u=n
w=1
break
case 10:case 8:m=A.aV(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hy9(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.p8(l,n),$async$DE)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DE,v)},
fuZ(d,e){return C.ibU(d,e)},
ibU(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fuZ=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a7(a3)
a5=A.aV(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Bf(a9)))
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
break}o=f.gR(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aV(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Bf(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.X.aP(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hcy(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aV(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Bf(a9)+"_"+n))
i=C.iex(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b4O(h),$async$fuZ)
case 17:g=b1
if(g!=null){i=i.TD(g)
p=!0}case 16:J.c5(q,i)
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
case 8:J.SQ(q,new C.fv_())
if(p&&J.ad(q)!==0)C.p8(a9,q)
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
return A.i($async$fuZ,v)},
bEH(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bEH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SH(d),$async$bEH)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DE(r),$async$bEH)
case 4:t=p.aT(g)
case 5:if(!t.C()){w=6
break}s=t.gR(t)
if(s.a===q){u=s
w=1
break}w=5
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEH,v)},
hy9(d){var w,v,u,t
try{w=B.X.aP(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.de(w,x.f)
v=A.cF(v,new C.fqK(),v.$ti.k("M.E"),x.fA)
u=A.a4(v).k("Y<M.E>")
v=A.C(new A.Y(v,new C.fqL(),u),u.k("M.E"))
B.d.aZ(v,new C.fqM())
return v}catch(t){v=A.a([],x.D)
return v}},
p8(d,e){return C.itU(d,e)},
itU(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$p8=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.SH(b2),$async$p8)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aA(),$async$p8)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Bf(a8)
p=A.aV(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b7(x.j.a(B.X.aP(0,p,null)),new C.fYq(),a2).fM(0)
a2=J.b7(b3,new C.fYr(),a2).bY(0,new C.fYs())
n=A.d0(a2,a2.$ti.k("M.E"))
a2=o,a2=A.dZ(a2,a2.r,A.a4(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eK(n,m)?17:18
break
case 17:a5=C.Bf(a8)
l=A.aV(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a9N(l),$async$p8)
case 19:t=21
a5=C.Bf(a8)
k=A.aV(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.X.aP(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.a9N(a5==null?null:J.k(a5)),$async$p8)
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
return A.b(C.ahn(r,"ngmy_worksheet_item_v3_"+C.Bf(a8)+"_"+m),$async$p8)
case 29:w=30
return A.b(C.ahn(r,"ngmy_worksheet_thumb_v3_"+C.Bf(a8)+"_"+m),$async$p8)
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
case 14:case 10:a2=J.cD(b3),a3=a2.gae(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gR(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bDe(h),$async$p8)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.aho(r,"ngmy_worksheet_thumb_v3_"+C.Bf(a8)+"_"+a4,f),$async$p8)
case 40:g=i.TD(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ahn(r,"ngmy_worksheet_thumb_v3_"+C.Bf(a8)+"_"+a4),$async$p8)
case 41:g=i.TD(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ahn(r,"ngmy_worksheet_thumb_v3_"+C.Bf(a8)+"_"+a4),$async$p8)
case 42:case 34:a4=i.a
w=43
return A.b(C.aho(r,"ngmy_worksheet_item_v3_"+C.Bf(a8)+"_"+a4,B.X.aw(g.aj(),null)),$async$p8)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.c5(q,i.a)
w=31
break
case 32:w=44
return A.b(C.aho(r,"ngmy_worksheets_index_v3_"+C.Bf(a8),B.X.aw(q,null)),$async$p8)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eP(b3,new C.fYt(q))
a4=a3.$ti.k("cM<1,a9<n,@>>")
a7=A.C(new A.cM(a3,new C.fYu(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.aho(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.X.aw(a0,null)),$async$p8)
case 45:w=46
return A.b(J.hML(r),$async$p8)
case 46:if(a2.gcm(b3)&&J.ad(q)===0){u=!1
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
$.am.$1("[worksheets] saveWorksheetProjects error: "+A.w(a1))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$p8,v)},
Mg(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Mg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DE(d),$async$Mg)
case 3:t=g
s=J.cD(t)
r=s.bj(t,new C.h5V(e))
if(r===-1)s.c9(t,0,e)
else s.n(t,r,e)
u=C.p8(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Mg,v)},
bEs(d,e){var w=0,v=A.j(x.H),u
var $async$bEs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DE(d),$async$bEs)
case 2:u=g
J.nU(u,new C.fHE(e))
w=3
return A.b(C.p8(d,u),$async$bEs)
case 3:return A.h(null,v)}})
return A.i($async$bEs,v)},
Ho(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ho=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Ho)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aV(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.X.aP(0,i,null)
if(x.j.b(t)){j=J.de(t,x.f)
j=A.cF(j,new C.fKQ(),j.$ti.k("M.E"),x.k)
s=A.a4(j).k("Y<M.E>")
r=A.C(new A.Y(j,new C.fKR(),s),s.k("M.E"))
B.d.aZ(r,new C.fKS())
k=r}}catch(h){}w=4
return A.b(C.frx(d),$async$Ho)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.ich(k,p,d)
j=A.U(o)
s=j.k("N<1,a9<n,@>>")
s=A.C(new A.N(o,new C.fKT(),s),s.k("ak.E"))
n=B.X.aw(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.RR(d,o),$async$Ho)
case 7:case 6:j=j.k("Y<1>")
m=A.C(new A.Y(o,new C.fKU(d),j),j.k("M.E"))
if(m.length!==0)C.aR1(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ho,v)},
fYc(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fYc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RR(d,e),$async$fYc)
case 3:t=J.dH(e,new C.fYd(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aR1(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fYc,v)},
a46(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a46=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aA(),$async$a46)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aV(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.X.aP(0,l,null)
if(x.j.b(u)){m=J.de(u,x.f)
m=A.cF(m,new C.h5Q(),m.$ti.k("M.E"),x.k)
t=A.a4(m).k("Y<M.E>")
s=A.C(new A.Y(m,new C.h5R(),t),t.k("M.E"))
o=s}}catch(k){}q=J.oz(o,new C.h5S(e))
if(B.a.i(e.x).length===0&&C.uA(e,d)){m=B.a.i(d.toLowerCase())
p=e.aGg(e.y===D.kW?D.kW:D.uN,m)}else p=e
if(q===-1)J.n2(o,0,p)
else J.aK(o,q,p)
w=3
return A.b(C.RR(d,o),$async$a46)
case 3:w=C.uA(p,d)?4:5
break
case 4:w=6
return A.b(C.aR0(C.Hm(p,d),p),$async$a46)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a46,v)},
aRd(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aRd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Ho(d),$async$aRd)
case 2:u=g
t=J.cD(u)
s=A.nA(t.eP(u,new C.fHl(e)))
t.bq(u,new C.fHm(e))
w=3
return A.b(C.RR(d,u),$async$aRd)
case 3:w=s!=null&&C.aRh(s,d)?4:5
break
case 4:w=6
return A.b(C.fqO(e),$async$aRd)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aRd,v)},
aja(d){var w=d.f,v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.h60(),v),v.k("M.E"))
return w},
hg3(d,e){var w,v=d.f,u=A.nA(new A.Y(v,new C.fGQ(e),A.U(v).k("Y<1>")))
v=C.aja(d)
w=A.U(v).k("Y<1>")
v=A.C(new A.Y(v,new C.fGR(e,u),w),w.k("M.E"))
B.d.aZ(v,new C.fGS())
return v},
ijX(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hHx(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bj(C.hg3(d,u),new C.h5o(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
ilq(d,e){var w
if(e==null||e.length===0)return 1
w=C.hg3(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fLH(),A.U(w).k("N<1,H>")).f1(0,B.y0)+1},
itN(d){var w,v=C.aja(d)
if(v.length===0)return null
w=new A.Y(v,new C.fY6(),A.U(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
ijS(d){return A.J(["id",d.a,"name",d.b,"gender",C.hCE(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
ill(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
n=n!==D.z3?n:q.c
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
d=q.aGb(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cPX(a1,w,a3.d,a2.y,s,a0,v)},
Bs(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Bs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Bs)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aV(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.X.aP(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.de(t,x.f)
p=A.cF(p,new C.fKN(),p.$ti.k("M.E"),x.k)
s=A.a4(p).k("Y<M.E>")
p=A.C(new A.Y(p,new C.fKO(),s),s.k("M.E"))
B.d.aZ(p,new C.fKP())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bs,v)},
aiU(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aiU=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.uN:D.kW
a7=C.Hm(b2,b3)
w=2
return A.b(C.Bs(b1),$async$aiU)
case 2:a8=b5
a9=J.cD(a8)
b0=a9.bj(a8,new C.fY1(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bEf(b1,b2),$async$aiU)
case 5:case 4:if(b0===-1){u=b2.aGg(a6,a7)
a9.c9(a8,0,u)}else{t=a9.h(a8,b0)
s=A.T(x.N,x.P)
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
i=i!==D.z3?i:l.c
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
s.n(0,m,l.aGb(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b8<2>")
s=A.C(new A.b8(s,k),k.k("M.E"))
k=a5?D.uN:D.kW
u=t.cPZ(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.RR(b1,a8),$async$aiU)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aR0(B.a.i(b3.toLowerCase()),u),$async$aiU)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aiU,v)},
hyy(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("N<1,a9<n,@>>"),k=A.C(new A.N(m,C.hGB(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hyz(d,e){var w=new A.V(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("N<1,a9<n,@>>")
u=A.C(new A.N(u,C.hGB(),t),t.k("ak.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
i9I(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a7(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.amm(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hiE(),A.U(j).k("N<1,n>")).bY(0,new C.frk())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.uN
else s=B.d.q(t,u)?D.OR:D.kW
return w.aGg(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.amm(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.de(q,h)
h=A.cF(h,new C.frl(),h.$ti.k("M.E"),x.P)
p=A.a4(h).k("Y<M.E>")
o=A.C(new A.Y(h,new C.frm(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b7(n,new C.frn(),x.N).bY(0,new C.fro())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.uN
else s=B.d.q(t,u)?D.OR:D.kW
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
j=A.aJ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.j.M(j)
if(j==null)j=0
return new C.kZ(h,r,p,!m,t,o,l,j,v,s,B.cf)},
frx(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$frx=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.frB()
h=x.N
g=x.z
w=7
return A.b(A.iE(A.a([A.lK("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bO),r.$2(A.lK("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bO),"collaborator"),r.$2(A.lK("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bO),"public")],x.cl),x.fO),$async$frx)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.T(h,g)
h=A.C(p,g)
l=h
J.fZ(l,o)
J.fZ(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aK(m,j,k)}l=m
h=A.a4(l).k("b8<2>")
h=A.cF(new A.b8(l,h),new C.fry(a0),h.k("M.E"),x.k)
l=A.a4(h).k("Y<M.E>")
l=A.C(new A.Y(h,new C.frz(),l),l.k("M.E"))
B.d.aZ(l,new C.frA())
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
else h.$1("[family_trees] fetch error: "+A.w(i))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$frx,v)},
ich(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a7(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dN(e,new C.fvH(),v).bY(0,new C.fvI())
t=A.d0(u,u.$ti.k("M.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Hm(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kW){m=q.e
m=!new A.N(m,A.hiE(),A.U(m).k("N<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.ill(l,v)
o=C.Hm(k,w)
p=v.d
s.n(0,u,o===w?k.bfq(p,D.uN):k.bfq(p,v.y))}j=s.$ti.k("b8<2>")
j=A.C(new A.b8(s,j),j.k("M.E"))
B.d.aZ(j,new C.fvJ())
return j},
RR(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$RR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$RR)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b7(e,new C.fyD(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aD("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.X.aw(s,null)),$async$RR)
case 3:return A.h(null,v)}})
return A.i($async$RR,v)},
aR0(d,e){return C.ihC(d,e)},
ihC(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aR0=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mf("family_trees",A.a([C.hyy(e,d)],p),null,B.cP),$async$aR0)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mf("family_trees",A.a([C.hyz(e,d)],p),null,B.cP),$async$aR0)
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
$.am.$1("[family_trees] upsert error: "+A.w(q))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aR0,v)},
aR1(d,e){return C.ihD(d,e)},
ihD(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aR1=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("N<1,a9<n,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fDV(d),n),m)
r=l
w=7
return A.b(A.mf("family_trees",r,null,B.cP),$async$aR1)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fDW(d),n),m)
p=k
w=8
return A.b(A.mf("family_trees",p,null,B.cP),$async$aR1)
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
$.am.$1("[family_trees] bulk upsert error: "+A.w(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aR1,v)},
fqO(d){return C.i8W(d)},
i8W(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fqO=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Sg("family_trees",A.J(["id",d],x.N,x.z),null,B.cP),$async$fqO)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.ac(p)
$.am.$1("[family_trees] delete error: "+A.w(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fqO,v)},
rs:function rs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lF:function lF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cGN:function cGN(){},
cGM:function cGM(){},
cGK:function cGK(){},
cGL:function cGL(){},
Iy:function Iy(d,e){this.a=d
this.b=e},
hZ:function hZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
aml:function aml(d,e){this.a=d
this.b=e},
fHa:function fHa(){},
h5X:function h5X(d){this.a=d},
fEF:function fEF(d){this.a=d},
kZ:function kZ(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bT8:function bT8(){},
bT7:function bT7(){},
bT4:function bT4(){},
bT5:function bT5(){},
bT6:function bT6(){},
fv_:function fv_(){},
fqK:function fqK(){},
fqL:function fqL(){},
fqM:function fqM(){},
fYq:function fYq(){},
fYr:function fYr(){},
fYs:function fYs(){},
fYt:function fYt(d){this.a=d},
fYu:function fYu(){},
h5V:function h5V(d){this.a=d},
fHE:function fHE(d){this.a=d},
fKQ:function fKQ(){},
fKR:function fKR(){},
fKS:function fKS(){},
fKT:function fKT(){},
fKU:function fKU(d){this.a=d},
fYd:function fYd(d){this.a=d},
h5Q:function h5Q(){},
h5R:function h5R(){},
h5S:function h5S(d){this.a=d},
fHl:function fHl(d){this.a=d},
fHm:function fHm(d){this.a=d},
h60:function h60(){},
fGQ:function fGQ(d){this.a=d},
fGR:function fGR(d,e){this.a=d
this.b=e},
fGS:function fGS(){},
h5o:function h5o(d){this.a=d},
fLH:function fLH(){},
fY6:function fY6(){},
fKN:function fKN(){},
fKO:function fKO(){},
fKP:function fKP(){},
fY1:function fY1(d){this.a=d},
frk:function frk(){},
frl:function frl(){},
frm:function frm(){},
frn:function frn(){},
fro:function fro(){},
frB:function frB(){},
frC:function frC(d){this.a=d},
fry:function fry(d){this.a=d},
frz:function frz(){},
frA:function frA(){},
fvH:function fvH(){},
fvI:function fvI(){},
fvJ:function fvJ(){},
fyD:function fyD(){},
fDV:function fDV(d){this.a=d},
fDW:function fDW(d){this.a=d},
cGO:function cGO(d,e){this.a=d
this.b=e},
cGP:function cGP(d,e){this.a=d
this.b=e},
aJ0:function aJ0(d,e,f){this.a=d
this.b=e
this.c=f},
bb4:function bb4(){this.b=this.a=0},
bb3:function bb3(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
byK:function byK(){},
xo(d,e){var w,v
if(d==null)return""
w=d.bT()
v=""+w.gcg()+"/"+w.gcz()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.b_(B.o.v(w.gnv()),2,"0")+":"+B.a.b_(B.o.v(w.gGO()),2,"0")},
i_d(){var w,v=$.ov(),u=J.e5(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"WS"+B.d.hf(u)},
aud(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$aud=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$aud)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f5("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bO),$async$aud)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.t(r,"stashes")
if(x.f.b(q)){o=A.a2(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ac(m)
$.am.$1("[worksheet qr stash] load: "+A.w(p))
w=7
break
case 4:w=2
break
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aud,v)},
aue(d){return C.i_e(d)},
i_e(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$aue=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$aue)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hM("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cP,null),$async$aue)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ac(p)
$.am.$1("[worksheet qr stash] save: "+A.w(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aue,v)},
aug(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aug=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$aug)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.i_d()
w=4
return A.b(C.aud(),$async$aug)
case 4:r=h
q=B.a.i(e)
p=B.dW.aO(t)
J.aK(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cV.gcu().aO(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.aue(r),$async$aug)
case 5:u=new A.a1w("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aug,v)},
auf(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$auf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c9(),$async$auf)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.aud(),$async$auf)
case 4:q=f
p=J.a7(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a7(o)
m=A.aJ(n.h(o,"usesRemaining"))
l=m==null?null:B.j.M(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.ca.cJ(0,B.cM.aO(t))}catch(h){r=A.ac(h)
$.am.$1("[worksheet qr stash] decode: "+A.w(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dL(A.a2(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.aue(q),$async$auf)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auf,v)},
ht_(){var w=new A.V(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cS.az(999999)},
i_f(d){var w,v,u,t,s,r,q
try{w=A.ahO(d)
if(w==null)return d
v=w
if(J.Mm(v)>960||J.Ml(v)>960){s=v
r=J.Mm(v)>=J.Ml(v)?960:null
v=A.ahL(s,J.Ml(v)>J.Mm(v)?960:null,B.Qf,r)}s=v
u=A.anH(82).U_(s,B.zL)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cf(u))
return s}catch(q){t=A.ac(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
cp4(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cp4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.i_f(e)
$.cp0.n(0,s,t)
u=C.bGj(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cp4,v)},
b4O(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b4O=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d5(l,"data:image")){u=null
w=1
break}t=4
r=J.eK(l,",")?B.d.gal(J.lP(l,",")):l
q=B.cM.aO(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.ht_()
w=7
return A.b(C.cp4(p,q),$async$b4O)
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
$.am.$1("[worksheet-thumb] persistDataUrl failed: "+A.w(n))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b4O,v)},
cp1(d){var w=0,v=A.j(x.T),u,t,s
var $async$cp1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.cp3(s),$async$cp1)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cV.gcu().aO(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cp1,v)},
a9N(d){var w=0,v=A.j(x.H),u,t
var $async$a9N=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hGh(d)
if(t==null){w=1
break}$.cp0.W(0,t)
w=3
return A.b(C.bGi(t),$async$a9N)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9N,v)},
bGj(d,e){return C.irE(d,e)},
irE(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bGj=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aPQ
w=7
return A.b(n==null?$.aPQ=N.heT():n,$async$bGj)
case 7:r=g
q=new Uint8Array(A.cf(e))
p=J.mk(r,"thumbs","readwrite")
B.iE.me(J.mj(p,"thumbs"),q,l)
w=8
return A.b(J.oy(p),$async$bGj)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.ac(k)
$.am.$1("[worksheet-thumb idb put] "+A.w(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bGj,v)},
bGi(d){return C.irC(d)},
irC(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bGi=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aPQ
w=7
return A.b(o==null?$.aPQ=N.heT():o,$async$bGi)
case 7:r=f
q=J.mk(r,"thumbs","readwrite")
B.iE.Go(J.mj(q,"thumbs"),m)
w=8
return A.b(J.oy(q),$async$bGi)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.ac(l)
$.am.$1("[worksheet-thumb idb delete] "+A.w(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bGi,v)}},D,At,Au,Z,Av,Aw,N
J=c[1]
A=c[0]
B=c[2]
P=c[260]
A_=c[167]
R=c[60]
A8=c[235]
L=c[216]
H=c[35]
E=c[226]
S=c[124]
A9=c[238]
T=c[107]
Aa=c[138]
Ab=c[119]
Ac=c[202]
A0=c[121]
Ad=c[234]
Ae=c[44]
Q=c[233]
A1=c[203]
Af=c[254]
Ag=c[193]
Ah=c[206]
M=c[92]
A2=c[88]
Ai=c[173]
A3=c[133]
A4=c[176]
A5=c[201]
Aj=c[257]
A6=c[259]
Ak=c[80]
G=c[258]
Al=c[137]
Am=c[262]
An=c[123]
A7=c[220]
Ao=c[34]
U=c[122]
O=c[196]
Ap=c[207]
V=c[261]
Aq=c[158]
Ar=c[129]
W=c[247]
X=c[43]
F=c[98]
As=c[33]
I=c[106]
K=c[142]
Y=c[78]
C=a.updateHolder(c[7],C)
D=c[253]
At=c[79]
Au=c[214]
Z=c[256]
Av=c[255]
Aw=c[64]
N=c[61]
C.apT.prototype={}
C.b05.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bjK(),f=h.x!=null&&h.zL(i).length===0
if(h.x!=null)w=f?B.b3:B.bD
else w=h.gUF()?B.bD:B.e_
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.l(22)
t=A.K(D.bq9,B.r,1)
s=x.p
r=A.r(i,A.x(A.a([A.r(i,D.fcI,B.f,i,i,new A.o(B.b3.j(0.12),i,i,A.l(999),i,i,B.n),i,i,i,i,B.hi,i,i,i),B.W,D.fIP,B.aw,A.d(C.xo(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fEt,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,D.b8c,i,i,i,i,B.a12,i,i,i)
q=A.l(16)
p=A.K(B.bj,B.r,1)
o=A.K(B.b3.j(0.28),B.r,1)
n=A.hhb(h.d)
o=A.r(B.A,C.b04(A.fO1(h.e,n),30),B.f,i,i,new A.o(B.m9,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fzo,B.K,i,i)
m=A.l(14)
l=A.K(B.bj,B.r,1)
q=A.r(i,A.x(A.a([o,B.T,n,B.bG,D.fJ7,B.ae,A.r(i,A.x(A.a([D.fZk,B.bG,A.d(A.Bu(h.c),i,i,i,i,i,i,D.fu0,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fh,i,i,1/0)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aS,i,p,q,i,i,B.n),i,i,i,i,O.amr,i,i,i)
p=A.l(16)
m=A.K(B.bj,B.r,1)
l=j.aTl("Original due",C.xo(h.r,!1))
n=j.aTl("Current due",C.xo(h.f,!1))
o=w.j(0.1)
k=A.l(12)
p=A.a([q,B.W,A.r(i,A.x(A.a([l,B.T,n,B.W,A.r(i,A.d(h.gaNn(),i,i,i,i,i,i,A.m(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.Co,i,i,1/0),B.W,j.ckO(),B.T,j.c7y(g,f)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bk,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.l(14)
n=A.K(B.bj,B.r,1)
B.d.u(p,A.a([B.W,A.r(i,A.x(A.a([D.fK4,B.aw,A.d(q,i,i,i,i,i,i,D.fyB,i,i,i)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aS,i,n,o,i,i,B.n),i,i,i,i,B.bk,i,i,1/0)],s))}if(h.gaHX()){q=A.l(14)
o=A.K(B.cx,B.r,1.6)
B.d.u(p,A.a([B.W,A.r(i,A.x(A.a([D.h_E,B.T,A.bx(A.l(12),A.ea(new A.a5(1/0,88,A.b3(i,i,i,new A.Xh(h.ax,B.a_,D.fht,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Cq,i,i,i)],s))}p.push(B.aC)
p.push(D.fSt)
return A.r(i,A.x(A.a([r,new A.D(B.a0S,A.x(p,B.al,i,B.e,B.i,0,B.p),i)],s),B.al,i,B.e,B.O,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aTl(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.abY,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fv3,w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
ckO(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aaA(B.e_,u,"Not paid yet")
w=t.zL(null).length
v=w===0?B.b3:B.bD
return this.aaA(v,u,C.xo(t.x,!0))},
c7y(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aaA(B.b3,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aaA(B.b3,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.abY,u,u,u)
v=A.U(d).k("N<1,h5>")
v=A.C(new A.N(d,new C.c8p(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bX(B.bH,v,B.bt,u,6,6)],x.p),B.E,u,B.e,B.i,0,B.p)},
aaA(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.abY,w,w,w),1),new A.di(1,B.cl,A.d(f,w,w,w,w,w,w,A.m(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e5,w,w),w)],x.p),B.E,w,B.e,B.i,0,w,w)}}
C.bdh.prototype={
a5(d,e){new A.Xh(this.b,B.a_,e,!0,3.5,null).a5(d,e)},
aE(d){return d.b!==this.b}}
C.aq5.prototype={
S(){return new C.aES(A.a([],x.bp))},
ge3(){return this.c}}
C.aES.prototype={
Y(){this.a4()
this.Jm()},
Jm(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Jm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3l(t.a.c),$async$Jm)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dQO(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Jm,v)},
aVj(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.m(v,v,u?B.bu:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.l(10)
u=(this.a.d.a?B.bu:B.bh).j(0.22)
w=A.l(10)
return A.bA(v,new A.b6(4,r,new A.ay(u,1,B.r,-1)),v,B.bk,v,v,v,v,!0,new A.b6(4,w,new A.ay((this.a.d.a?B.bu:B.bh).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.l(10),D.b5Q),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aVi(d){return this.aVj(d,null)},
Q9(d){return this.cor(d)},
cor(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Q9=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.I5:B.eQ
w=7
return A.b(new A.i_().CM(72,900,900,n),$async$Q9)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fq(),$async$Q9)
case 8:p=f
n=B.cV.gcu().aO(p)
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
if(n!=null)n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Q9,v)},
b3s(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.l(10),n=A.K((q?B.bu:B.bh).j(0.18),B.r,1)
if(d)q=B.cJ
else q=s.a.d.a?B.bu:B.bh
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.m(r,r,s.a.d.a?B.aS:B.as,r,r,r,r,r,r,r,r,12.5,r,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cJ
else u=s.a.d.a?B.bu:B.bh
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.m(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.i,0,B.p),1)
v=A.fs(r,r,r,r,r,r,r,r,r,r,r,B.cJ,r,r,r,r,r,r,r,r,r,r,r,r,r,B.ch)
q=A.a([q,B.af,u,A.bP(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aI(r,r,r,r,A.X(B.cC,s.a.d.a?B.bu:B.bh,r,r,r,18),r,r,r,g,r,r,r,r,r,B.ch))
return A.r(r,A.A(q,B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jJ,D.bD9,r,r,r)},
DH(d){return this.bDX(d)},
bDW(){return this.DH(null)},
bDX(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DH=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ax()
r=new A.au(new A.ba(a4,B.b5,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.j.iI(a4)
p=a5.c
a4=a4===q?B.o.v(B.j.M(p)):B.j.ad(p,2)}o=new A.au(new A.ba(a4,B.b5,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.ba(a4,B.b5,B.aP),s)
if(a3){a4=new A.V(Date.now(),0,!1).bS(6048e8)
m=A.c_(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)}else{a4=a5.f
m=A.c_(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.br(a4,!0,x.cT)
i=a3?null:A.hhb(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xc?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hN(B.w.j(0.55),!0,"Dismiss",a4,new C.dQx(),new C.dQy(a2,t,a5,r,new C.dQz(a2,t),o,n,j),B.eI,!0,x.y),$async$DH)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cW(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.U$=s
r.P$=0
o.U$=s
o.P$=0
n.U$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.L(x.q).f.T(D.fo2)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.T(D.fmH)
w=1
break}a1=A.fO1(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xc?"male":"female"
w=7
return A.b(A.aj9(a3,A.hpD(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DH)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xc?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c_(a3.gcl(),a3.gcg(),a3.gcz(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c_(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)))a5.cSj(a2.a)
w=8
return A.b(A.aj9(t.a.c,a5),$async$DH)
case 8:case 5:w=9
return A.b(t.Jm(),$async$DH)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DH,v)},
aVZ(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cJ.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.l(12)
u=A.l(12)
t=A.l(12)
if(g)s=B.cJ
else s=(this.a.d.a?B.bu:B.bh).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b04(d,18)
if(g)q=B.cJ
else q=this.a.d.a?B.aS:B.as
return A.aH(!1,B.a3,!0,v,A.aN(!1,u,!0,A.r(p,A.A(A.a([r,B.bo,A.d(e,p,p,p,p,p,p,A.m(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.ba,B.i,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bV,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.aj)},
SX(d){return this.cGh(d)},
cGh(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$SX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hN(B.w.j(0.55),!0,"Dismiss",s,new C.dQR(),new C.dQS(t,d),B.h7,!0,x.y),$async$SX)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aj9(t.a.c,d),$async$SX)
case 7:w=8
return A.b(t.Jm(),$async$SX)
case 8:case 1:return A.h(u,v)}})
return A.i($async$SX,v)},
Q8(d,e){return this.bOS(0,e)},
bOS(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Q8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lq(s,"Cancel","Delete",e.b+" \xb7 "+A.Bu(e.c)+" will be removed from this device.","Delete this debt?"),$async$Q8)
case 3:if(!g){w=1
break}w=4
return A.b(C.fHs(t.a.c,e.a),$async$Q8)
case 4:w=5
return A.b(t.Jm(),$async$Q8)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Q8,v)},
agn(d){return this.cid(d)},
cid(d){var w=0,v=A.j(x.H),u=this,t
var $async$agn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.L,null,new C.dQL(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$agn)
case 2:return A.h(null,v)}})
return A.i($async$agn,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.evy
w=J.dH(m.d,new C.dQT())
v=A.C(w,w.$ti.k("M.E"))
w=J.dH(m.d,new C.dQU())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cF(v,0,new C.dQV())
w=A.l(18)
s=m.a.d.a
r=s?D.cDj:D.aDq
q=A.K(s?B.cJ.j(0.35):B.cJ.j(0.18),B.r,1)
s=A.r(l,D.c41,B.f,l,l,new A.o(B.cJ.j(m.a.d.a?0.28:0.14),l,l,A.l(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.au,A.E(A.d("Cashier",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.as,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aH(!1,B.a3,!0,A.l(12),A.aN(!1,A.l(12),!0,D.euU,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dQW(m),l,l,l,l,l,l,l),B.f,B.cJ,0,l,l,l,l,l,B.aj)],p),B.l,l,B.e,B.i,0,l,l)
o=A.E(m.cCn("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bu(t)
r=A.a([A.r(l,A.x(A.a([s,B.ae,A.A(A.a([o,B.af,A.E(m.b9C(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.aA,B.aD,B.x,r,l,l),B.n),l,l,l,l,B.amo,l,l,l),B.aC],p)
if(J.ct(m.d)){w=m.a.d.a
s=w?B.eg:B.c
q=A.l(18)
o=A.K((w?B.bu:B.bh).j(0.12),B.r,1)
n=A.r(l,D.bZC,B.f,l,l,new A.o(B.cJ.j(0.12),l,l,A.l(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.as,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.r(l,A.x(A.a([n,B.ae,w,B.aw,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bu:B.bh,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bFP,l,l,1/0))}else{w=m.gcnI()
s=A.C(new A.N(v,w,A.U(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bHu,A.d("Paid",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bu:B.bh,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.N(u,w,A.U(u).k("N<1,v>")))
B.d.u(s,q)}B.d.u(r,s)}return A.x(r,B.al,l,B.e,B.i,0,B.p)},
b9C(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.l(14),r=A.K((v.a.d.a?B.bu:B.bh).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.m(u,u,v.a.d.a?B.bu:B.bh,u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cJ
else w=v.a.d.a?B.aS:B.as
return A.r(u,A.x(A.a([q,B.bG,A.d(f,u,1,B.a2,u,u,u,A.m(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.i,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ez,u,u,u)},
cCn(d,e){return this.b9C(!1,d,e)},
cnJ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zL(j).length,h=d.bj_()
if(d.x!=null){w=d.zL(j).length
v=w===0?B.cJ:B.bD}else if(d.gUF())v=B.bD
else{if(h)w=B.cJ
else w=k.a.d.a?B.bu:B.bh
v=w}if(d.x!=null){w=d.zL(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xo(u,!1)}else{u.toString
t="Paid "+C.xo(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xo(w,!1)+" \xb7 "+i+" missed":"Due "+C.xo(w,!1)}w=k.a.d.a?B.eg:B.c
u=A.l(18)
if(d.gUF()&&d.x==null)s=B.bD.j(0.35)
else s=(k.a.d.a?B.bu:B.bh).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ab(0,B.G,B.w.j(0.04),B.cL,12)],x.V)
q=A.l(18)
p=k.a.d.a?B.br:B.m9
o=A.K(d.gUF()&&d.x==null?B.bD.j(0.45):B.cJ.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hhb(d.d)
o=A.r(B.A,A.d3(C.b04(A.fO1(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.as
m=x.p
n=A.a([new A.di(1,B.cl,A.d(p,j,1,B.a2,j,j,j,A.m(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaHX())B.d.u(n,A.a([B.e8,A.X(B.Pi,B.cJ.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.i,0,j,j),B.cR,A.d(t,j,1,B.a2,j,j,j,A.m(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.U,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.i,0,B.p),1)
n=A.Bu(d.c)
l=k.a.d.a?B.aS:B.as
n=A.d(n,j,j,j,j,j,j,A.m(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.r(j,A.aH(!1,B.a3,!0,j,A.aN(!1,q,!0,new A.D(Af.amc,A.A(A.a([o,B.bd,p,B.af,A.x(A.a([n,B.bG,A.X(B.eJ,(k.a.d.a?B.bu:B.bh).j(0.5),j,j,j,18)],m),B.dR,j,B.e,B.i,0,B.p)],m),B.l,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dQN(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.aj),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.da,j,j,j,j)}}
C.uV.prototype={}
C.am9.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bp
u=v?B.E:B.l
t=a1.as
s=A.l(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.K(q,B.r,t?1.2:1.6)
p=A.a([new A.ab(0,B.G,B.w.j(0.45),B.cz,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.K(r.j(0.6),B.r,1)
n.push(A.az(a0,A.r(a0,A.X(B.cC,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a7:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iR,A.d(k,a0,a0,a0,a0,a0,a0,A.m(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.m(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.azy,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.H7,A.d(k,a0,a0,a0,a0,a0,a0,A.m(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.dE(B.dY,m,B.f,A.A(l,B.l,a0,B.e,B.O,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bCk,A.d(v,a0,1,B.a2,a0,a0,a0,A.m(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cK:B.bs,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fE,A.x(a2,u,a0,B.e,B.O,0,B.p),a0),1))
n.push(D.fih)
a2=A.a([A.A(n,B.l,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.D(B.ww,A.r(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a7,B.aa,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lO,A.x(a2,B.l,a0,B.e,B.O,0,B.p),a0)
if(a1.z){a2=A.l(t?9:19)
e=A.r(a0,e,B.f,a0,a0,new A.o(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hB,a0,a0,a0,a0)}return A.r(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.aA,B.aD,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bDE,a0,a0,a0,a0)}}
C.aWO.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.r(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.m(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bp?B.bp:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.m(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bs:B.cK,q,B.U,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.m(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.i,0,q,q),B.cR,n],m)
if(p.z)o.push(new A.D(B.uD,n,q))
return new A.D(B.da,A.x(o,B.l,q,B.e,B.O,0,B.p),q)}}
C.U7.prototype={
S(){return new C.bgV()}}
C.bgV.prototype={
gc2n(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aF(d,n,x.w).w,l=x.p,k=A.a([D.evt,D.evz],l)
for(w=0;w<8;++w){v=D.a5j[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.HT:B.zv
q=t===s
r=A.X(r,q?B.ey:B.bW,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.bo,A.d(v.b,n,n,n,n,n,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.af,new A.bz(1,B.bb,A.d(v.c,n,1,B.a2,n,n,n,B.AW,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aO(24,24)
p=new A.ay(B.ey,2,B.r,-1)
s=new A.o(n,n,new A.bG(p,p,p,p),new A.be(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.az(n,new A.D(B.eL,A.x(A.a([new A.D(B.n3,new A.c8(B.aL,B.e,B.i,B.l,n,B.p,n,0,r,n),n),A.r(n,new A.du(!0,new C.am9(v,q.d,q.e,new C.dgr(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dgs(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bE0,A.bJ(D.h59,n,new C.dgt(o,d),A.bp(B.b8,n,n,n,n,B.p2,n,n,new A.b9(A.l(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cO(new A.aY(0,1/0,0,m.a.b*0.9),A.cm(k,n,n,D.bIn,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nw.prototype={
aj(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bfC(d,e,f){return new C.nw(this.a,e,d,f)}}
C.Ix.prototype={
x0(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Ix(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aG4(d){var w=null
return this.x0(w,w,w,w,w,d,w,w,w,w,w,w)},
cNW(d){var w=null
return this.x0(w,w,w,w,d,w,w,w,w,w,w,w)},
bfA(d,e,f){var w=null
return this.x0(d,w,w,w,w,w,w,w,e,w,f,w)},
cOA(d){var w=null
return this.x0(w,w,w,w,w,w,d,w,w,w,w,w)},
cOJ(d){var w=null
return this.x0(w,w,w,w,w,w,w,w,w,d,w,w)},
cNU(d){var w=null
return this.x0(w,w,w,d,w,w,w,w,w,w,w,w)},
cOL(d){var w=null
return this.x0(w,w,w,w,w,w,w,w,w,w,w,d)},
cNR(d){var w=null
return this.x0(w,w,d,w,w,w,w,w,w,w,w,w)},
cNM(d){var w=null
return this.x0(w,d,w,w,w,w,w,w,w,w,w,w)},
Gg(d){var w=null
return this.x0(w,w,w,w,w,w,w,d,w,w,w,w)},
cOT(d,e,f,g,h,i,j,k,l,m,n){return this.x0(d,e,f,g,null,h,i,j,k,l,m,n)},
aj(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cLq(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bRQ(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.j.M(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.DX.gev(D.DX))
s=i==null?o:B.j.D(i,18,36)
r=l.$2("position",D.a72)
q=l.$2("frame",D.a6m)
l=l.$2("texture",D.a6i)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cOT(p,u,t,q,r,A.rf(d.h(0,"ribbon"))?A.H_(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_I.prototype={
S(){return new C.aBQ(A.a([],x.I),D.OQ)},
ge3(){return this.c}}
C.aBQ.prototype={
Y(){var w,v=this
v.a4()
v.f=A.Ak(0,1)
w=$.ax()
v.z=new A.au(B.ax,w)
v.Q=new A.au(B.ax,w)
v.lh()
w=v.a
C.bED(w.c,w.d).bG(new C.dh7(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.c()
u.t()
u=v.z
u===$&&A.c()
w=$.ax()
u.U$=w
u.P$=0
u=v.Q
u===$&&A.c()
u.U$=w
u.P$=0
v.a3()},
lh(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LQ(s.c,s.d),$async$lh)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dgW(t,r))
t.axM()
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
gaul(){var w,v=this
if(!J.ct(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
axM(){var w,v,u=this.gaul(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
cgC(d){this.m(new C.dgT(this,d))
this.axM()},
O2(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$O2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nw(B.o.v(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aST(r.c,r.d,s),$async$O2)
case 3:w=4
return A.b(t.lh(),$async$O2)
case 4:if(t.c==null||J.ct(t.d)){w=1
break}q=J.oz(t.d,new C.dgu(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dgv(t,p))
t.axM()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.BL(p+1,B.cw,B.kT),$async$O2)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$O2,v)},
Br(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Br=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaul()
s=s==null?null:s.a
if(s==null)s=B.o.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aST(o.c,o.d,new C.nw(s,r,q,new A.V(p,0,!1))),$async$Br)
case 3:w=4
return A.b(t.lh(),$async$Br)
case 4:if(t.c==null){w=1
break}t.m(new C.dgX(t))
case 1:return A.h(u,v)}})
return A.i($async$Br,v)},
OK(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaul()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dgD(r),s,null,!0,!0,x.y),$async$OK)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bEo(s.c,s.d,r.a),$async$OK)
case 4:t.m(new C.dgE(t))
w=5
return A.b(t.lh(),$async$OK)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.UI(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$OK,v)},
z7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$z7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Br(),$async$z7)
case 5:case 4:if(t.c==null){w=1
break}w=J.cJ(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.S7(s,r.r,o,p,q),$async$z7)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hH5(s,r.x,r.r),$async$z7)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LQ(s.c,s.d),$async$z7)
case 10:l=e
for(s=n.d,r=J.cD(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.nw(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.BD(r.c,r.d,l),$async$z7)
case 11:w=12
return A.b(t.lh(),$async$z7)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$z7,v)},
a1C(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1C=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Br(),$async$a1C)
case 5:case 4:if(t.c==null){w=1
break}s=t.gz5(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dL(D.zW,new C.dgU(t),new C.dgV())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mS("Our Family",o,"",""))
for(o=J.aT(t.d);o.C();){n=o.gR(o)
p.push(new H.mS(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hiU(o,new H.rR(s,r,"",p,new H.va(q.d,null,null,null,null,"","","")),null),$async$a1C)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a1C,v)},
Os(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Os=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Br(),$async$Os)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.ah8,null,new C.dgz(t),s,!0,!0,!0,I.aaa,!1,!1,x.N),$async$Os)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cNW(r)
t.m(new C.dgA(t,q))
s=t.a
w=7
return A.b(C.SK(s.c,s.d,q),$async$Os)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Os,v)},
XW(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.ah8,null,new C.dgF(t),r,!0,!0,!0,I.aaa,!1,!1,x.e),$async$XW)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dgG(t,s))
r=t.a
w=4
return A.b(C.SK(r.c,r.d,s),$async$XW)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.BL(0,B.dK,B.n0)
case 1:return A.h(u,v)}})
return A.i($async$XW,v)},
bUy(d){var w=d.bT(),v=B.a.b_(B.o.v(w.gcg()),2,"0"),u=B.a.b_(B.o.v(w.gcz()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gz5(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c1B()
if(r.e)w=D.afQ
else if(J.ct(r.d)){w=r.y
v=r.gz5(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.ftm,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(W.anu,new C.a__(w,v,0,q),q),q),B.bz,t,B.am,A.d(u,q,q,q,q,q,q,A.m(q,q,D.kO.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bz],s)
if(B.a.i(r.a.x).length!==0)w.push(A.az(q,A.r(q,D.fcu,B.f,q,q,new A.o(q,q,q,A.l(18),A.a([new A.ab(0,B.G,B.dQ.j(0.45),B.J,18)],x.V),E.x4,B.n),q,q,q,q,B.Ot,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcKr(),q,q,q,q,q,q,!1,B.a4))
w.push(B.W)
w.push(A.hs(D.bVI,D.h4C,r.gaP2(),q))
B.d.u(u,w)}w=A.as(A.cb(A.x(u,B.l,q,B.e,B.O,0,B.p),B.t,q,B.y,q,B.eA,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.m(q,q,D.kO.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.U,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.e1:B.Bx
u=A.x(A.a([new A.D(D.bF5,w,q),A.E(A.JW(v,new C.dh5(r),J.ad(r.d)+1,q,r.gcgB(),u,B.aL),1),r.bGR()],x.p),B.l,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c4(q,D.ZB,new A.an(B.a0,q,B.b2,B.t,A.a([D.aR_,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c1B(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KV(B.ed,"AI",h.gbEJ(),!0))
if(h.a.f)f.push(new C.KV(B.mk,"Cover",h.gbPr(),!1))
if(h.a.f)f.push(new C.KV(B.wX,"Header",h.gbKp(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KV(B.v4,"Print",h.gcpL(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.hO:B.j9
t=v?"Save":"Edit"
f.push(new C.KV(u,t,v?h.gcw2():new C.dgQ(h),!1))}if(h.a.f)f.push(new C.KV(B.i4,"Add page",h.gaP2(),!1))
v=C.hCD(h.y.Q)
u=h.gz5(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dK7
else{k=new A.aO(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.kr.j(0.5),1,B.r,-1)
j=A.r(g,A.X(l.a,D.kO,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bG(i,i,i,i),new A.be(k,k,k,k),g,new A.a8(B.a7,B.aa,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kO.j(0.85)
p.push(new A.bz(1,B.bb,A.az(B.c3,A.x(A.a([k,B.bG,A.d(l.b,g,1,g,g,g,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.O,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.am9(v,u,t+" \xb7 "+s+" "+r,new C.dgR(h),A.A(p,B.l,g,B.e,B.i,0,g,g),g)},
Aq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Aq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Br(),$async$Aq)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aT(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=H.a3A(B.d.aN(s," "))
s=t.c
s.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.dgw(t,p),s,null,!0,!0,x.N),$async$Aq)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.z7(),$async$Aq)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Eh(),$async$Aq)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.FU("Swahili (Kiswahili)",!0),$async$Aq)
case 18:w=16
break
case 17:w=19
return A.b(t.cGV(o==="sw"?"Swahili (Kiswahili)":"English"),$async$Aq)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$Aq,v)},
ZV(d,e,f,g,h){var w=null,v=A.l(16),u=B.c.j(0.07),t=A.l(16),s=A.K(E.kr.j(0.3),B.r,1),r=x.p
return new A.D(B.cy,A.aN(!1,v,!0,A.r(w,A.A(A.a([A.r(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.x4,B.a6),w,42,w,w,w,w,w,42),B.bd,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A2.KS,w,w,w),A.d(g,w,w,w,w,w,w,B.AX,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1)],r),B.l,w,B.e,B.i,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dgS(d,h),w,w,w,w,w,w,w),w)},
Eh(){return this.bU1()},
bU1(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Eh=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dgJ(r),a7,null,!0,!0,x.ei),$async$Eh)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eC("Working on it\u2026",$.ax())
a6.a=!0
a7=r.c
a7.toString
A.cg(null,null,!1,null,new C.dgK(o),a7,null,!0,!0,x.H).fv(new C.dgL(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.I)(d),++a1){k=d[a1]
J.c5(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.aj()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.zW[a1]
J.c5(j,i.a)}w=8
return A.b(C.aii(a0,a7,new C.dgM(o),d,l,e,j),$async$Eh)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.ac(a8)
n=A.w(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a6(l,!0).eA()
l=o
l.sic($.ax())
J.aTl(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.L(x.q).f
j=n
l.T(A.b2(null,null,null,null,null,B.t,null,A.d(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcm(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.am(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bfC(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.BD(j.c,j.d,l),$async$Eh)
case 11:w=12
return A.b(r.lh(),$async$Eh)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.zW[a1].a)
a5=l.cLq(j,12,a7)
l=r.a
w=15
return A.b(C.SK(l.c,l.d,a5),$async$Eh)
case 15:if(r.c!=null)r.m(new C.dgN(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.BL(0,B.dK,B.n0)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b2(a3?A.cAz("Undo",new C.dgO(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ej,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Eh,v)},
FU(d,e){return this.cGW(d,e)},
cGV(d){return this.FU(d,!1)},
cGW(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$FU=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eC("Starting\u2026",$.ax())
f.a=!0
k=r.c
k.toString
A.cg(null,null,!1,null,new C.dgZ(a0),k,null,!0,!0,x.H).fv(new C.dh_(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.c5(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a3O(m,new C.dh0(a0)),$async$FU)
case 10:w=8
break
case 9:w=11
return A.b(C.bG8(new C.dh1(a0),m,a2),$async$FU)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.ac(a1)
q=A.w(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a6(o,!0).eA()
o=a0
o.sic($.ax())
J.aTl(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.T(A.b2(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bfC(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.BD(k.c,k.d,o),$async$FU)
case 12:w=13
return A.b(r.lh(),$async$FU)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a_(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(A.cAz("Undo",new C.dh2(r,d),null),null,null,null,null,B.t,null,k,null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$FU,v)},
bGR(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dgx(v):u
r=A.aI(u,u,u,u,A.X(D.bRn,s?D.kO:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.hs(A.X(B.wL,B.Gx,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.m(u,u,B.Gx,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbP1(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.m(u,u,D.kO.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.as(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dgy(v):u
return A.bm(!0,new A.D(D.bEV,A.A(A.a([r,s,A.aI(u,u,u,u,A.X(B.eJ,t<J.ad(v.d)?D.kO:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.i,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a_M.prototype={
S(){return new C.bhj(new A.au(B.ax,$.ax()))}}
C.bhj.prototype={
ga2K(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.U$=$.ax()
w.P$=0
this.a3()},
gbSD(){switch(this.ga2K()){case"cover":var w=D.da6
break
case"book":w=D.d5o
break
default:w=D.dBK
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.l(26),n=E.kr.j(0.5),m=x.p,l=A.A(A.a([D.dK8,B.au,D.bKD,A.aI(p,p,p,p,B.lp,p,p,p,new C.diU(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.i,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jy(p,p,p,A.d("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.diV(q),q.ga2K()==="page",p,p,p,p))
if(q.a.d)k.push(A.jy(p,p,p,D.h_a,p,new C.diW(q),q.ga2K()==="book",p,p,p,p))
k.push(A.jy(p,p,p,D.fMQ,p,new C.diX(q),q.ga2K()==="cover",p,p,p,p))
k=A.bX(B.bH,k,B.bt,p,6,8)
j=B.c.j(0.07)
j=A.aM(p,B.Z,!1,p,!0,B.t,p,A.aP(),q.d,p,p,p,p,p,2,A.bA(p,new A.b6(4,A.l(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kk,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a5,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbSD(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.d(s,p,p,p,p,p,p,B.KP,p,p,p)
w.push(A.n3(p,B.c.j(0.08),r,B.hs,new C.diY(q,s),p,p,p,p))}return A.eG(p,E.C3,A.cb(A.x(A.a([l,B.W,D.h2u,B.am,k,B.ae,j,B.T,A.bX(B.bH,w,B.bt,p,6,6),B.aC,A.dh(D.bVF,p,D.h3f,new C.diZ(q,d),A.bp(B.b8,p,p,p,p,B.p2,p,p,new A.b9(A.l(16),B.a1),p,p,p)),B.aw,D.fYo],m),B.E,p,B.e,B.O,0,B.p),B.t,p,B.y,p,B.fv,p,p,B.ah),p,p,p,B.Oq,p,B.d8,p,new A.b9(o,new A.ay(n,1.4,B.r,-1)),p)}}
C.a_K.prototype={
S(){return new C.aBT(A.a([],x.gA))},
ge3(){return this.c}}
C.ag4.prototype={}
C.aBT.prototype={
Y(){this.a4()
this.lh()},
lh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Sc(p.c,p.d),$async$lh)
case 3:o=e
n=A.a([],x.gA)
p=J.aT(o)
case 4:if(!p.C()){w=5
break}s=p.gR(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bED(r.c,q),$async$lh)
case 6:j=e
i=J
w=7
return A.b(C.LQ(t.a.c,q),$async$lh)
case 7:m.push(new l.ag4(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dhm(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
baT(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
QW(d,e){return this.cia(0,e)},
cia(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$QW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).ce(A.ed(new C.dhl(u,e),!0,null,x.y)),$async$QW)
case 2:t=g
w=3
return A.b(u.lh(),$async$QW)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.T(D.aUU)
return A.h(null,v)}})
return A.i($async$QW,v)},
FW(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$FW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.T(D.aUQ)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ahC(s.c,s.d),$async$FW)
case 5:q=e
w=6
return A.b(t.lh(),$async$FW)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.QW(0,B.d.fc(t.d,new C.dhq(q))),$async$FW)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.S7(p,s.f,r,n,o),$async$FW)
case 10:m=e
w=11
return A.b(t.lh(),$async$FW)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.T(D.aUU)
case 1:return A.h(u,v)}})
return A.i($async$FW,v)},
Qn(d,e){return this.ctM(0,e)},
ctM(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dhp(t,e),s,null,!0,!0,x.y),$async$Qn)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a40(s.c,s.d,e.a),$async$Qn)
case 4:w=5
return A.b(t.lh(),$async$Qn)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qn,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bGU(w[u]))
if(m){t=6-o.d.length
w=A.l(18)
v=B.c.j(0.05)
s=A.K(E.kr.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.az(n,new A.fH(0.7142857142857143,A.r(n,A.x(A.a([D.dK9,B.ae,D.euw,B.aw,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.m(n,n,D.kO.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.ba,B.i,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcKn(),n,n,n,n,n,n,!1,B.a4))}w=A.l(22)
v=A.K(E.kr.j(0.85),B.r,1.6)
s=A.az(n,A.r(n,D.c2L,B.f,n,n,new A.o(B.w.j(0.3),n,A.K(E.kr.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dhr(d),n,n,n,n,n,n,!1,B.a4)
r=A.l(14)
q=B.w.j(0.3)
p=A.K(E.kr.j(0.5),B.r,1)
w=A.r(n,A.A(A.a([s,B.bd,D.bL1,A.r(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fsm,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.hi,n,n,n)],l),B.l,n,B.e,B.i,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.c8N,B.n),n,n,n,Av.Oe,D.bCP,n,n,n)
if(o.e)k=D.afQ
else k=k.length===0?D.bdy:A.co(new C.dhs(k))
return A.c4(n,D.ZB,new A.an(B.a0,n,B.b2,B.t,A.a([D.aR_,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bGU(d){var w,v,u=this,t=null,s=u.baT(d),r=d.c,q=x.p,p=A.a([A.bS(0,new A.dE(B.dD,B.A,B.f,new A.a5(300,420,new C.a__(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ap(t,A.az(t,A.r(t,D.c22,B.f,t,t,new A.o(B.w.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dhj(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.frZ,t,t,t)
v=r===1?"page":"pages"
return A.az(t,A.x(A.a([new A.fH(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.T,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.m(t,t,D.kO.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dhk(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KV.prototype={}
C.a__.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dL(D.zW,new C.cPM(m),new C.cPN()),j=m.c,i=D.DX.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mr:B.ba
v=new C.cPO(h)
i=A.a([new A.ab(0,B.G,B.w.j(0.6),D.erd,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b3(l,l,l,new C.bew(j.x,h,l),B.az),0,0,0),A.ap(0,A.r(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a7,B.aa,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aO(3,3)
t.push(new A.cK(8,40+s*46,l,l,l,l,A.r(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.be(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.anv,8,0.85,2.2),v.$4(D.bHN,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.anv,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.D(D.bHJ,A.b3(l,l,l,new C.ben(h,l),B.az),l),0,0,0))
r=A.X(D.aCn[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.m(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.azy,l,l),B.K,l,l)
p=A.r(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aC,q,B.ae,p,B.ae,A.d(o,l,l,l,l,l,l,A.m(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cK,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.m(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.D(D.bIe,A.x(o,B.l,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ap(l,A.b3(l,l,l,new C.aIV(l),D.fhm),l,l,l,46,0,l))
return A.r(l,A.bx(D.aet,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.aet,i,new A.a8(B.aA,B.aD,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bew.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e3()
g.cY(11)
switch(this.b){case"plain":return
case"linen":$.S()
w=A.L()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.p(0,t),new A.p(u,t),w)
$.S()
s=A.L()
s.r=B.c.j(0.05).gp(0)
s.c=1
for(r=0;r<u;r+=4)d.ah(new A.p(r,0),new A.p(r,v),s)
break
case"stars":for(v=e.a,u=e.b,q=this.c,p=0;p<70;++p){o=g.ai()
n=g.ai()
m=g.ai()
$.S()
l=new A.ao(B.P,B.M,B.R,B.S,B.Q)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.N(new A.p(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.S()
l=A.a([],n)
j=new A.aG(m.r,B.ai,null,null,l)
l.push(new A.aZ(v,q))
j.ab()
m=k-0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.ak(i)
j.ab()
m=k+0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.ak(i)
j.ab()
m=new A.bu()
l.push(m)
l=j.f
if(l!=null)m.ak(l)
j.ab()
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.r=o.j((p&1)===0?0.09:0.03).gp(0)
d.af(j,m)}break
default:$.S()
w=A.L()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.N(new A.p(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.S()
h=A.L()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.N(new A.p(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aE(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.ben.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.S(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.a9
j.c=2.4
j.d=B.bv
for(w=e.a,v=e.b,v=[D.f6N,new A.ce([w,0,-1,1]),new A.ce([0,v,1,-1]),new A.ce([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aG(k,B.ai,null,null,s)
s.push(new A.aZ(r+p*34,q))
n.ab()
m=new A.aq(r,q)
s.push(m)
l=n.f
if(l!=null)m.ak(l)
n.ab()
m=new A.aq(r,q+o*34)
s.push(m)
s=n.f
if(s!=null)m.ak(s)
n.ab()
d.af(n,j)
s=new A.ao(B.P,B.M,B.R,B.S,B.Q)
s.r=i.j(0.9).gp(0)
d.N(new A.p(r+p*9,q+o*9),3,s)}},
aE(d){return!d.b.A(0,this.b)}}
C.uW.prototype={}
C.a_i.prototype={
S(){return new C.beu()}}
C.beu.prototype={
gor(){var w=this.d
return w===$?this.d=this.a.c:w},
gz5(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.ba(w.b,B.b5,B.aP),$.ax())}return v},
gaDg(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.ba(w.c,B.b5,B.aP),$.ax())}return v},
gasT(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.ba(w.y,B.b5,B.aP),$.ax())}return v},
t(){var w=this,v=w.gz5(0),u=v.U$=$.ax()
v.P$=0
v=w.gaDg()
v.U$=u
v.P$=0
v=w.gasT()
v.U$=u
v.P$=0
w.a3()},
atw(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jy(s,s,s,A.d(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.d8j(this,f,u),e===u,s,s,s,s))}return A.bX(B.bH,r,B.bt,s,6,8)},
azg(d){var w=null,v=B.c.j(0.07)
return A.bA(w,new A.b6(4,A.l(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lX,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gor(),a0=f.gz5(0),a1=a0.a.a,a2=f.gaDg(),a3=a2.a.a,a4=f.gasT(),a5=d.bfA(a4.a.a,a3,a1)
a1=x.w
a3=A.aF(a6,e,a1).w
a1=A.aF(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a5(190,260,new A.dE(B.dD,B.A,B.f,new A.a5(270,370,new C.a__(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aP(),a0,e,e,e,e,e,2,f.azg("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8I(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a5,e,B.ao,e,e,e,e)
a2=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aP(),a2,e,e,e,e,e,2,f.azg("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8J(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a5,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.zW[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.r(e,e,B.f,e,e,new A.o(e,e,new A.bG(o,o,o,o),e,e,new A.a8(B.aA,B.aD,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aF
v.push(A.az(e,A.x(A.a([p,B.cR,A.d(t.b,e,e,e,e,e,e,new A.F(!0,q,e,e,e,e,10.5,B.U,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.O,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8K(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bX(B.bH,v,B.bt,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b8.j(0.35):B.c.j(0.07)
m=new A.aO(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.ey:B.L,2,B.r,-1)
q.push(A.az(e,A.r(e,A.X(D.aCn[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bG(o,o,o,o),new A.be(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8L(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bX(B.bH,q,B.bt,e,8,8)
a4=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aP(),a4,e,e,e,e,e,2,f.azg("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8M(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a5,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vN,e,e,e)
m=A.a([],w)
for(l=D.DX.gdP(D.DX),l=l.gae(l);l.C();){k=l.gR(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ey:B.aT
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.r(e,e,B.f,e,e,new A.o(j,e,new A.bG(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aF
m.push(A.az(e,A.x(A.a([j,B.bG,A.d(i,e,e,e,e,e,e,new A.F(!0,h,e,e,e,e,10,B.U,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.O,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8N(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bX(B.bH,m,B.bt,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vN,e,e,e)
k=f.gor()
return new A.D(new A.R(0,0,0,a3.f.d),A.bm(!0,new A.cO(new A.aY(0,1/0,0,a1.a.b*0.92),A.cm(A.a([D.fXP,B.ae,d,B.aO,a0,B.W,a2,B.aC,D.h31,B.T,v,B.aC,D.fXY,B.T,q,B.aC,a4,B.aC,p,B.T,m,B.aC,l,A.l0(e,9,""+B.j.V(f.gor().f),36,18,new C.d8O(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vN,e,e,e),B.am,f.atw(D.a72,f.gor().r,new C.d8P(f),D.dEY),B.ae,A.d("BORDER",e,e,e,e,e,e,M.vN,e,e,e),B.am,f.atw(D.a6m,f.gor().w,new C.d8Q(f),D.dF3),B.ae,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vN,e,e,e),B.am,f.atw(D.a6i,f.gor().x,new C.d8S(f),D.dGx),B.am,A.iU(e,B.b8,e,B.ag,e,new C.d8T(f),e,e,e,D.fRZ,f.gor().z),B.bz,A.bJ(D.fWv,e,new C.d8U(f,a6),A.bp(B.b8,e,e,e,e,B.p2,e,e,new A.b9(A.l(16),B.a1),e,e,e))],w),e,e,Z.an0,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aIV.prototype={
a5(d,e){var w,v,u,t=new A.aG($.S().r,B.ai,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bu())
u=A.L()
u.sav(D.c9t.aK(0,new A.a1(0,0,0+w,0+v)))
d.af(t,u)},
aE(d){return!1}}
C.bjQ.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.S()
w=A.L()
w.sav(D.c8u.aK(0,new A.a1(0,0,a2,a3)))
a4.ar(new A.a1(0,0,a2,a3),w)
v=B.j.cC(a1/112)
u=new A.e3()
u.cY(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.da5[u.az(9)]
j=u.az(14)
J.bq(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a1(n,j,n+m,j+l)
h=A.bn(i,B.hE)
g=new A.ao(B.P,B.M,B.R,B.S,B.Q)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sav(new A.a8(B.a7,B.aa,B.x,A.a([f,k,e],w),d,d).aK(0,i))
a4.an(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ao(B.P,B.M,B.R,B.S,B.Q)
e.r=E.kr.j(0.55).gp(0)
a4.ar(new A.a1(g,j,h,j+2),e)
e=new A.ao(B.P,B.M,B.R,B.S,B.Q)
e.r=E.kr.j(0.4).gp(0)
a4.ar(new A.a1(g,q,h,p),e)
t.restore()
j=u.az(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ao(B.P,B.M,B.R,B.S,B.Q)
p.sav(D.c7N.aK(0,new A.a1(0,r,a2,q)))
a4.ar(new A.a1(0,r,a2,q),p)
p=new A.ao(B.P,B.M,B.R,B.S,B.Q)
p.r=B.w.j(0.5).gp(0)
p.y=B.kV
a4.ar(new A.a1(0,q,a2,q+14),p)}t=A.L()
t.r=D.bhk.j(0.72).gp(0)
a4.ar(new A.a1(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.sav(new A.bY(B.A,0.5,B.x,d,0,A.a([D.bpC.j(0.22),B.L],w),d,d).aK(0,A.bZ(new A.p(t,a1),a0)))
a4.N(new A.p(t,a1),a0,a3)},
aE(d){return!1}}
C.bcE.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cK(14,w*2,v*2.2,v*2,o,o,new A.bN(new A.o(A.ar(D.kO,D.buN,w/4),o,new A.bG(B.a1,new A.ay(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.M1,o,o,B.n),B.bi,o,o),o))}v=x.V
u=A.a([new A.ab(0,B.G,B.w.j(0.35),B.aMB,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aO(2,2)
t.push(A.r(o,o,B.f,o,o,new A.o(E.kr.j(0.6),o,o,new A.be(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.r(o,A.x(t,B.l,o,B.qZ,B.i,0,B.p),B.f,o,o,new A.o(o,o,o,D.b5y,u,D.c9r,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ab(0,B.G,B.w.j(0.4),B.dp,18)],v)
t=A.ap(o,A.b3(o,o,o,new C.aIV(o),D.fhh),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aWO(p.y,r,L.j5,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.Z,!1,o,!0,B.t,o,A.aP(),p.r,o,o,o,o,o,2,A.bA(o,B.eO,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,L.j5.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fGT,!0,B.a5,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,L.j5.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.W,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aP(),p.w,o,o,o,o,o,2,A.bA(o,B.eO,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,L.j5.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fxk,!0,B.a5,B.AQ,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fGL,o,o,o),B.aw,A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,L.j5.j(0.5),o,o,o,o,o,o,o,o,11,B.cK,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.T,A.A(A.a([A.E(A.r(o,o,B.f,D.Gf.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fE,A.d("\u2766",o,o,o,o,o,o,A.m(o,o,D.Gf.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.r(o,o,B.f,D.Gf.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.i,0,o,o),B.aC],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.m(o,o,L.j5.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Ze(A.cQ(A.a([A.cQ(o,o,o,o,o,o,o,o,o,D.fAz,B.a.aB(k,0,1)),A.cQ(o,o,o,o,o,o,o,o,o,o,B.a.b2(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.m(o,o,L.j5.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cb(A.x(n,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.i2,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.m(o,o,L.j5.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.r(o,A.bx(B.M1,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bHf,A.x(s,B.al,o,B.e,B.i,0,B.p),o),A.ap(0,new A.bN(new A.o(o,o,o,o,o,new A.a8(B.a7,B.aa,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bi,o,o),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.M1,v,D.c9Z,B.n),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.ama.prototype={
S(){return new C.amb(new A.eC(0,$.ax()),new C.bTE(),new C.amt(),D.hG5,null,null)},
gd1(){return this.d}}
C.a1Y.prototype={
a7(){return"_Step."+this.b}}
C.amb.prototype={
gCy(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEz(w.c,6,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghc(d){var w,v=this,u=v.e
if(u===$){w=C.Na(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gTZ(){var w=this.ghc(0)
return w.gzq()==null?"Babu":B.a.i(w.gzq().b)},
Y(){var w,v=this
v.a4()
w=v.ghc(0).gzq()
w=w==null?null:w.c
v.r.b=w===D.oA
w=v.q1(new C.bS_(v))
w.fX(0)
v.x!==$&&A.aQ()
v.x=w
v.a2H("Come closer, my children. I am "+v.gTZ()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.c()
v.t()
v=w.y
if(v!=null)v.a1(0)
v=w.z
if(v!=null)v.a1(0)
w.w.t()
v=w.f
v.U$=$.ax()
v.P$=0
w.bwg()},
a2H(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dg(D.alB,new C.bRU(w))},
bsD(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.m(new C.bS2(v))},
ae0(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bsv(){return this.baq()},
baq(){var w=this,v=w.gCy()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bRV(w))
w.a2H(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cy(B.mc,new C.bRW(w))},
cLx(){var w=this
w.m(new C.bRZ(w))
w.a2H(w.gCy()[w.as].a)},
L9(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.ady)return
w=p.gCy()
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
t.r=s.a+1.5}q=new A.e3()
q.cY(v*7+d)
p.m(new C.bRY(p,d,u,q))
p.a2H(u?D.dq1[q.az(4)]+" "+w[p.as].d:D.dmB[q.az(3)]+" "+w[p.as].d)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCy()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bGQ(t.at,t.ay,p)
t.m(new C.bS0(t,s))
t.a2H(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BW(t.a.d,s),$async$kN)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BX(r.d,r.c.a,"fire",t.at*10),$async$kN)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bS1())
w=1
break
case 4:++t.as
t.baq()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c4(v,D.YD,new A.an(B.a0,v,B.ad,B.t,A.a([A.bS(0,new A.em(A.b3(v,v,v,new C.aWT(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.ccb(0),B.b1,w.bRN()],t),B.l,v,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
ccb(d){var w,v,u,t=this,s=null,r=A.aI(s,s,s,s,B.Qb,s,s,s,new C.bRX(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCy().length;++w){v=t.as
if(w<v||t.Q===D.b1R)v=B.cU
else v=w===v?B.c:B.aT
u=new A.aO(4,4)
p.push(A.r(s,s,B.f,s,s,new A.o(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,D.bCy,s,s,s,22))}p=A.E(A.x(A.a([D.fOI,A.A(p,B.l,s,B.e,B.i,0,s,s)],q),B.E,s,B.e,B.i,0,B.p),1)
v=A.l(14)
u=A.K(B.fs,B.r,1)
return new A.D(D.bIr,A.A(A.a([r,p,A.r(s,A.d("\ud83d\udd25 "+B.j.V(t.cy*100)+"%",s,s,s,s,s,s,B.iG,s,s,s),B.f,s,s,new A.o(B.b6,s,u,v,s,s,B.n),s,s,s,s,B.hi,s,s,s)],q),B.l,s,B.e,B.i,0,s,s),s)},
bRN(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghc(0).gzq()
if(h==null)w=1
else w=h.c===D.oA?0:1
v=j.dx
u=j.db
t=D.qo.j(0.96)
s=A.l(22)
r=A.K(B.cU,B.r,3)
q=A.b3(i,i,i,new C.bps(w,i),B.az)
p=A.d(j.Q===D.ady?j.gTZ()+" asks":"Elder "+j.gTZ(),i,i,i,i,i,i,D.aW7,i,i,i)
o=j.db
o=B.a.aB(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.az(B.c3,A.A(A.a([new A.a5(62,62,q,i),B.au,A.E(A.x(A.a([p,B.bG,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aWl,i,i,i)],n),B.E,i,B.e,B.i,0,B.p),1)],n),B.E,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbsC(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.as(j.aa8("Sit down by the fire",j.gbsu()),i,i,i)
break
case 1:v=A.as(j.aa8("Ask me, Elder",j.gcLw()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCy()[j.as].b,m<u.length;++m){q=new A.aO(14,14)
l=new A.ay(D.lC,2.5,B.r,-1)
v.push(A.az(i,A.r(i,A.d(u[m],i,i,i,i,i,i,D.aWh,B.K,i,i),B.f,i,D.af4,new A.o(D.akB,i,new A.bG(l,l,l,l),new A.be(q,q,q,q),i,i,B.n),i,i,i,i,U.wy,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bRR(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bX(B.bH,v,B.bt,i,8,8)
break
case 3:v=j.fr
u=v?B.k8:Aj.aqv
u=A.X(u,v?B.es:D.lC,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.m(i,i,v?B.es:D.lC,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCy().length?"Finish":"Next story"
v=A.A(A.a([u,B.af,q,j.aa8(v,j.gqo(j))],n),B.l,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCy().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aWA,i,i,i)],n)
u=j.cx
if(u>0){u=C.aRa(u)
q=C.aRa(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.ac_,i,i,i))}v.push(B.T)
v.push(j.aa8("Back to the games",new C.bRS(j)))
v=A.x(v,B.l,i,B.e,B.i,0,B.p)
break
default:v=i}return A.r(i,A.x(A.a([o,B.W,v],n),B.E,i,B.e,B.O,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aDX,i,B.n),i,i,i,B.yJ,B.bk,i,i,i)},
aa8(d,e){var w=null,v=A.l(16),u=A.K(B.cU,B.r,2)
return A.az(w,A.r(w,A.d(d,w,w,w,w,w,w,A2.KS,w,w,w),B.f,w,w,new A.o(D.lC,w,u,v,w,w,B.n),w,w,w,w,D.bG8,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bps.prototype={
a5(d,e){X.fXk(d,e.ej(B.J),e.gdA()*0.45,this.b,0,0.4)},
aE(d){return d.b!==this.b}}
C.aBR.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bTE.prototype={}
C.ti.prototype={}
C.bpt.prototype={}
C.amt.prototype={
MB(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.ieM(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aWT.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.zp(l.d.MB(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bq(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bU(0,u)
l.cB0(d,j)
l.bQl(d,j)
l.cJi(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bq(t.save())
t.translate(225,580)
d.pl(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.S()
q=A.L()
p=x.O
o=x.n
q.sav(A.wg(B.J,r,A.a([D.btx.j(0.55*s),F.Nv.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.N(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bTw(l,d,j,i)),new A.y(540,new C.bTx(l,d,j,i)),new A.y(546,new C.bTy(l,d,j,i)),new A.y(574,new C.bTz(l,d,j,i)),new A.y(612,new C.bTA(l,d,j,i)),new A.y(650,new C.bTB(l,d,j,i)),new A.y(656,new C.bTC(l,d,j,i))],x.E)
B.d.aZ(n,new C.bTD())
for(m=0;m<7;++m)n[m].b.$0()
l.bHc(d,j,i)
l.bU_(d,j)
t.restore()
$.S()
t=A.L()
t.sav(A.wg(new A.p(w/2,v*0.6),e.gaoh()*0.75,A.a([B.L,D.bhe],p),A.a([0.55,1],o),B.x,k,k,0))
d.ar(new A.a1(0,0,0+w,0+v),t)},
aE(d){return d.c!==this.c||d.d!==this.d},
cB0(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e3()
h.cY(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.S()
r=new A.ao(B.P,B.M,B.R,B.S,B.Q)
r.r=t.gp(0)
d.N(new A.p(v*450,20+u*300),0.8+s*1.1,r)}q=B.j.F(e,17)/1.2
if(q<1){p=new A.p(60+q*220,70+q*90)
d.ah(p,p.aJ(0,D.eqL),C.iz(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.j.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.S()
k=A.a([],t)
l=new A.aG(l.r,B.ai,null,null,k)
m=r+m*4
k.push(new A.aZ(s-6,m))
l.ab()
j=r-3
r=new A.c7(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.ak(i)
l.ab()
s=new A.c7(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.ak(r)
l.ab()
s=new A.ao(B.P,B.M,B.R,B.S,B.Q)
s.b=B.a9
s.c=1.6
s.r=D.bjX.gp(0)
s.d=B.bv
s.e=B.dT
d.af(l,s)}},
bQl(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aAR[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bt(new A.p(p,m),n*0.74,q*0.5)
k=Aa.yv.j(v)
$.S()
j=new A.ao(B.P,B.M,B.R,B.S,B.Q)
j.r=k.gp(0)
d.bZ(l,j)
q=A.bt(new A.p(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.r=B.wc.j(u).gp(0)
d.bZ(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.j.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ao(B.P,B.M,B.R,B.S,B.Q)
o.r=D.ahW.j(0.16*(1-h)).gp(0)
d.N(new A.p(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cJi(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bDY(d,D.eqH,0.9,e,D.hBp,!1,!1,D.b1O,1,!1)
w=$.S().r
v=x.v
u=new A.aG(w,B.ai,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bu())
t=A.L()
t.r=D.ajU.gp(0)
d.af(u,t)
C.bDY(d,D.eqJ,0.95,e,D.hBk,!1,!1,D.b1P,1,!0)
t=new A.aG(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.c7(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.c7(431,553,421,548))
t.E(new A.bu())
u=A.L()
u.r=F.FX.gp(0)
d.af(t,u)
u=A.bt(D.eqI,8,28)
t=A.L()
t.r=D.bvS.gp(0)
d.bZ(u,t)
C.bDY(d,new A.p(-30+B.j.F(e/26,1)*510,492),0.82,e,D.hBq,!0,!1,D.Xp,1,!1)
t=B.j.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.bZ(A.bt(new A.p(s+q*16,r-6),16,11),C.iz(D.ajL,1.8))
u=q<0
C.bDY(d,new A.p(s-q*6,r),0.62,e,D.hBs,!1,u,D.Xp,2.2,!1)
C.bDY(d,new A.p(s-q*32,r+4),0.58,e+1,D.hBo,!1,u,D.Xp,2.2,!1)
this.bWJ(d,D.eqm,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bt(new A.p(o,n),8,11)
k=p===1
j=k?D.ajH:D.akj
i=new A.ao(B.P,B.M,B.R,B.S,B.Q)
i.r=j.gp(0)
d.bZ(l,i)
l=k?D.ajH:D.akj
k=new A.ao(B.P,B.M,B.R,B.S,B.Q)
k.r=l.gp(0)
d.N(new A.p(o+5,n+(-3+m)),2.6,k)
k=new A.ao(B.P,B.M,B.R,B.S,B.Q)
k.b=B.a9
k.c=1
k.r=B.at.gp(0)
k.d=B.bv
k.e=B.dT
d.ah(new A.p(o+7.5,n+(-2+m)),new A.p(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ao(B.P,B.M,B.R,B.S,B.Q)
k.b=B.a9
k.c=1
k.r=B.at.gp(0)
k.d=B.bv
k.e=B.dT
d.ah(new A.p(o,n+4),new A.p(o,n+8),k)}h=e<f.f
u=A.bt(D.a92,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.aik.gp(0)
d.bZ(u,t)
u=A.bt(D.a92.a2(0,new A.p(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.bm2.gp(0)
d.bZ(u,t)
t=new A.aG(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bu())
u=A.L()
u.r=D.bmc.gp(0)
d.af(t,u)
u=D.a92.a2(0,new A.p(-17,h?-9:-2))
t=A.L()
t.r=B.ii.gp(0)
d.N(u,1.1,t)
v=new A.aG(w,B.ai,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.c7(180,588+w*(h?6:0),178,595))
d.af(v,C.iz(D.aik,3.5))},
bWJ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a2(0,new A.p(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.S()
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.b=B.a9
m.c=2
m.r=D.YQ.gp(0)
m.d=B.bv
m.e=B.dT
d.ah(new A.p(u+o,s),new A.p(u+(o+n*1.5),q),m)}w=A.bt(k,17,32)
v=$.S()
r=A.L()
r.r=D.FV.gp(0)
d.bZ(w,r)
r=A.bt(k.a2(0,D.epO),7,26)
w=A.ar(D.FV,B.w,0.12)
w.toString
q=A.L()
q.r=w.gp(0)
d.bZ(r,q)
v=new A.aG(v.r,B.ai,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bu())
s=A.L()
s.r=D.FV.gp(0)
d.af(v,s)
s=A.bt(k.a2(0,new A.p(24,-7+l)),9,12)
v=A.L()
v.r=D.FV.gp(0)
d.bZ(s,v)
v=-11+l
d.ah(k.a2(0,new A.p(22,v)),k.a2(0,new A.p(21,-17+l)),C.iz(D.YQ,1.6))
d.ah(k.a2(0,new A.p(26,v)),k.a2(0,new A.p(28,-16+l)),C.iz(D.YQ,1.6))
v=k.a2(0,new A.p(26,-8+l))
s=A.L()
s.r=B.w.gp(0)
d.N(v,0.9,s)
d.ah(k.a2(0,new A.p(26,-3+l)),k.a2(0,new A.p(26,1+l)),C.iz(D.boV,1.4))
d.ah(k.a2(0,D.esL),k.a2(0,new A.p(-19,-7+Math.sin(f*7)*2)),C.iz(D.FV,2.4))},
bTY(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bt(new A.p(225+u*36,574+(t*13+6)),8,11)
$.S()
t=new A.ao(B.P,B.M,B.R,B.S,B.Q)
t.r=D.buw.gp(0)
a6.bZ(u,t)}}u=A.bt(D.a94.a2(0,B.cz),17,52)
$.S()
t=A.L()
t.r=D.bgM.gp(0)
a6.bZ(u,t)
t=A.bt(D.a94.a2(0,B.cz),12,44)
u=D.bkk.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.bZ(t,s)
for(r=0;r<3;++r){v=D.dm1[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ao(B.P,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=7
o.r=D.G7.gp(0)
o.d=B.bv
o.e=B.dT
a6.ah(new A.p(u+t*24,579+s*4),new A.p(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.BL.j(0.6)
n=new A.ao(B.P,B.M,B.R,B.S,B.Q)
n.b=B.a9
n.c=2
n.r=t.gp(0)
n.d=B.bv
n.e=B.dT
a6.ah(new A.p(u+o*24,579+(p*4-2)),new A.p(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.f2S,D.f3r,D.f4x,D.f4S,D.f4v]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.brV,D.bof,D.btX][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.S()
f=A.a([],q)
a2=new A.aG(g.r,B.ai,null,null,f)
f.push(new A.aZ(a0-a1,578))
a2.ab()
g=a0+d*0.6
a3=new A.ko(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.ak(a4)
a2.ab()
g=new A.ko(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.ak(a3)
a2.ab()
g=new A.bu()
f.push(g)
f=a2.f
if(f!=null)g.ak(f)
a2.ab()
g=new A.ao(B.P,B.M,B.R,B.S,B.Q)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.j.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=G.akh.j((1-a5)*0.9)
$.S()
o=new A.ao(B.P,B.M,B.R,B.S,B.Q)
o.r=p.gp(0)
a6.N(new A.p(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.j.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.ahW.j(0.1*(1-a5))
$.S()
p=new A.ao(B.P,B.M,B.R,B.S,B.Q)
p.r=q.gp(0)
a6.N(new A.p(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bU_(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.j.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bw1.j(0.18*p)
$.S()
n=new A.ao(B.P,B.M,B.R,B.S,B.Q)
n.r=o.gp(0)
d.N(new A.p(r,q),5,n)
n=new A.ao(B.P,B.M,B.R,B.S,B.Q)
n.r=D.bpH.j(0.9*p).gp(0)
d.N(new A.p(r,q),1.4,n)}},
c5J(d,e){switch(d){case 0:return e.b?D.hBl:D.b1m
case 1:return e.b?D.hBr:D.b1k
case 2:return D.b1j
case 3:return D.b1i
case 4:return D.b1l
default:return D.b1n}},
aDu(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
Rf(d,e,f,g){var w,v=this,u=D.a6u[e],t=v.c5J(e,g),s=new C.bpt(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a6u[e],l=e===0
m=B.j.D(((l?D.aMt:D.aMz).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a99
s.as=D.En
if(l){s.a=o?v.aDu(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.p(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.p(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.En
if(g.a===3&&!g.d)s.e=m+Math.sin(r*6)*0.35*Math.max(0,1-r/1.8)
if(q){s.a=0.5
s.b=1
p=f*9
s.Q=new A.p(-4-Math.max(0,Math.sin(p))*7,-58)
p=s.as=new A.p(4+Math.max(0,Math.sin(p))*7,-58)}if(!q)p=!(o&&p.b<-50)
else p=!1
s.at=p}else if(e===1){s.b=0.35
if(o)s.r=Math.sin(f*2.4+1)*1.6
if(q){s.b=1
s.a=0.35+0.35*Math.max(0,Math.sin(f*13))
s.d=0.7
p=f*8
s.Q=new A.p(-4-Math.max(0,Math.sin(p))*7,-56)
s.as=new A.p(4+Math.max(0,Math.sin(p))*7,-56)
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.epW
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.erh
if(e===4)s.as=new A.p(36,-128+Math.sin(f*5)*4)}if(q){s.b=1
s.a=0.45+0.4*Math.max(0,Math.sin(f*12+e))
s.d=0.5
p=Math.max(0,Math.sin(f*9+e*1.3))*9
s.x=p
m=Math.max(0,Math.sin(f*10+e))*8
p=-56-p*0.3
s.Q=new A.p(-3-m,p)
s.as=new A.p(3+m,p)}else if(f<p){s.a=0.55
s.b=-0.1
s.c=1
s.Q=D.etH
s.as=D.aMM}if(e===2&&g.x!=null&&f<g.y){s.a=v.aDu(f,5)
s.b=0.4
s.as=new A.p(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aDu(f,e*3)
s.b=0.5
s.c=0.4}}C.hBe(d,u.a,u.b*1.2,t,s,f,e,null)},
bHc(d,e,f){var w=new C.bTv(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd6(d){return this.c}}
C.agd.prototype={
a7(){return"_Stand."+this.b}}
C.aeb.prototype={}
C.lu.prototype={}
C.bSf.prototype={
bBO(d){var w,v,u,t,s=A.T(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
Gb(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aZ(r,new C.bSg())
return r},
arx(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aNc(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
amG(d){var w,v,u=A.aR(x.N),t=d,s=0
for(;;){w=t.d
if(w!=null){v=this.c
v===$&&A.c()
v=v.h(0,w)!=null&&u.I(0,t.a)}else v=!1
if(!v)break
v=this.c
v===$&&A.c()
w=v.h(0,w)
w.toString;++s
t=w}return s},
gzq(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aZ(w,new C.bSh(this))
return B.d.gH(w)}}
C.auv.prototype={}
C.zH.prototype={}
C.al4.prototype={
gC4(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bN3(),A.U(w).k("Y<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
aj(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.MV.prototype={
gapz(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gC4(0))s.push(t)}return s},
aj(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d1M(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gapz(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lu(B.a.i(s.a),p,B.d.co(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.baS.prototype={}
C.aaf.prototype={}
C.bi9.prototype={}
C.agb.prototype={}
C.akn.prototype={
S(){return new C.ako(B.bF,A.a([],x.cC),A.a([],x.e4),null,null)},
gd1(){return this.d}}
C.ako.prototype={
gMS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEz(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gbaM(){var w,v=this,u=v.e
if(u===$){w=v.q1(v.gccd())
v.e!==$&&A.bE()
v.e=w
u=w}return u},
Y(){this.a4()
this.gbaM().fX(0)},
t(){this.gbaM().t()
this.bwb()},
fX(d){this.m(new C.bLd(this))},
cce(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fH(0,v)
if(w.c!=null)w.m(new C.bL8())},
b97(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gMS()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bi9(u,(u+0.5)/v,w[t.x].b[u]))},
fH(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bq(w,new C.bLe())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c8y()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMS()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.j.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.at4(v,0.8,B.cU)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.at4(m.cy,0.8,G.ns)
m.aZJ("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.at4(q,0.88,D.lC)
p=m.gMS()[m.x]
n=p.c
if(u===n){m.aZJ("The right gourd fell! It was "+p.b[n]+".")
return}}}},
at4(d,e,f){var w,v,u,t=new A.e3()
t.cY(B.j.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.agb(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aZJ(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Qo()}},
c8y(){var w=this
if(w.x+1>=w.gMS().length){w.Qo()
return}++w.x
w.b97()},
Qo(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Qo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMS().length
r=C.bGQ(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bL6())
w=2
return A.b(C.BW(u.a.d,r),$async$Qo)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BX(t.d,t.c.a,"catch",u.z),$async$Qo)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bL7())
return A.h(null,v)}})
return A.i($async$Qo,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.ccc()
else w=v.ch?v.ccf():A.as(new A.D(B.eA,A.x(A.a([D.aXy,B.T,D.fQp,B.W,D.fWA,B.e4,C.uz("Play",v.geY(v),B.cU,B.hn,D.fC)],x.p),B.l,u,B.e,B.O,0,B.p),u),u,u,u)
return new C.tI("Calabash Catch",w,B.f7,u)},
ccf(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hQ:B.HD
p.push(A.X(u,v?B.ay:B.bW,r,r,r,22))}p.push(B.b1)
v=s.x
u=s.gMS()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aW6,r,r,r))
p.push(B.bd)
v=A.l(14)
p.push(A.r(r,A.d(""+s.z,r,r,r,r,r,r,B.iG,r,r,r),B.f,r,r,new A.o(B.by,r,r,v,r,r,B.n),r,r,r,r,B.Cr,r,r,r))
p=A.A(p,B.l,r,B.e,B.i,0,r,r)
v=A.l(18)
t=A.K(B.cU,B.r,3)
return A.x(A.a([new A.D(D.bDW,p,r),A.r(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fAr,B.K,r,r),B.f,r,r,new A.o(D.qo,r,t,v,r,r,B.n),r,r,r,B.f5,B.bk,r,r,1/0),B.am,A.E(A.co(new C.bLc(s)),1)],q),B.l,r,B.e,B.i,0,B.p)},
ccc(){var w=this,v=null,u=A.as(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.q0,v,v,v),v,v,v),t=A.as(A.d(""+w.Q+" of "+w.gMS().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.VJ,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cm(A.a([D.bef,u,t,B.aO,new C.Iz(s,r,w.cx,v),B.aO,A.as(C.uz("Back to the games",new C.bL5(w),B.cU,B.k7,D.fC),v,v,v)],x.p),v,v,B.ac,v,v,B.ah,!1)}}
C.bdj.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.S(),a3=A.L()
a3.sav(A.jB(B.J,new A.p(0,a0),D.d3X,G.aB8,B.x,e))
a4.ar(new A.a1(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=G.Nz.gp(0)
a4.N(new A.p(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aG(a2.r,B.ai,e,e,w)
a2=a0*0.7
v.E(new A.aZ(0,a2))
for(u=0;u<=d;u+=6){t=new A.aq(u,a2+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.ak(s)
v.ab()}v.E(new A.aq(d,a0))
v.E(new A.aq(0,a0))
a2=$.S()
w=A.L()
w.r=D.blh.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aG(a2.r,B.ai,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.c7(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.c7(r+14,t,r+26,w))
a2.E(new A.bu())
w=A.L()
w.r=D.agX.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cpq[q]
s=new A.ao(B.P,B.M,B.R,B.S,B.Q)
s.r=D.agX.gp(0)
s.c=7
s.d=B.bv
a4.ah(new A.p(r,a2),new A.p(r+p*46,w),s)
s=new A.ao(B.P,B.M,B.R,B.S,B.Q)
s.r=D.agh.gp(0)
a4.N(new A.p(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.bma.gp(0)
a4.ar(new A.a1(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ao(B.P,B.M,B.R,B.S,B.Q)
t.r=D.aiC.gp(0)
t.c=2
a4.ah(new A.p(w,a1),new A.p(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bt(new A.p(u,s),12,54)
$.S()
l=new A.ao(B.P,B.M,B.R,B.S,B.Q)
l.r=D.lC.j(0.6).gp(0)
a4.bZ(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bq(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.S()
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.r=D.ahG.gp(0)
a4.N(D.epa,14,m)
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.r=D.bqX.gp(0)
m.c=4
m.d=B.bv
a4.ah(D.epb,D.eqi,m)
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.sav(new A.alW(D.ess,46,D.dcz,B.A0,B.x,e,e,0))
a4.N(B.J,34,m)
m=A.bt(D.esz,8,12)
l=new A.ao(B.P,B.M,B.R,B.S,B.Q)
l.r=B.c.j(0.35).gp(0)
a4.bZ(m,l)
k=new A.iL(new A.eq(n.c,e,e,B.cN,e,e,e,e,e,e,D.fyf),B.K,B.bX,new A.jj(1),e,e,3,e,B.bY,e,B.ct)
k.o8(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bn(A.bt(B.cL,m.gba(m)+8,l),B.fS)
l=new A.ao(B.P,B.M,B.R,B.S,B.Q)
l.r=D.qo.gp(0)
a4.an(j,l)
l=new A.ao(B.P,B.M,B.R,B.S,B.Q)
l.r=D.lC.gp(0)
l.b=B.a9
l.c=1.5
a4.an(j,l)
l=k.b
m=l.c
l=l.a.c
k.a5(a4,new A.p(-m/2,4-l.gba(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
X.Bp(a4,new A.p(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dQ,F.mY,!1,(w+1)/2)
h=A.bt(new A.p(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aG($.S().r,B.ai,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.c7(h.gbx().a,s+8,w+8,s))
a3.E(new A.bu())
m=A.L()
m.r=D.ZI.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.r=D.BL.gp(0)
m.c=1.4
a4.ah(new A.p(t,a2),new A.p(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=G.ns.gp(0)
a4.ar(new A.a1(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.bln.gp(0)
a4.bZ(new A.a1(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.r=g.e.j(B.j.D(s,0,1)).gp(0)
a4.N(new A.p(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.ft(e,B.ct,e,e,e,A.cQ(e,e,e,e,e,e,e,e,e,A.m(e,e,B.cU.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.DA,e,e),"+"+a2),B.a5,B.bX,e,B.dE,B.bY)
k.e5()
k.a5(a4,new A.p(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aE(d){return!0}}
C.QQ.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b3(v,v,v,new C.aBP(w.c,w.f,v),B.az),s=A.l(10),r=A.K(B.bE,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cR,A.r(v,A.d(w.d,v,1,B.a2,v,v,v,D.fqN,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.n),v,v,v,v,B.n4,v,v,v)],x.p),B.l,v,B.e,B.O,0,B.p),v)},
gZ(d){return this.e}}
C.aBP.prototype={
a5(d,e){var w=e.ej(B.J),v=e.gdA(),u=this.c?0.8:0
return X.fXk(d,w,v*0.44,this.b,0,u)},
aE(d){return d.b!==this.b||d.c!==this.c}}
C.aAj.prototype={}
C.av6.prototype={
S(){return new C.av7(A.T(x.S,x.cq),null,null)},
gd1(){return this.d}}
C.av7.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hGQ(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gaFx(){var w=this.z
return w===$?this.z=this.Xp(0):w},
gj1(){var w,v=this.Q
if(v===$){w=this.gkS()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c1(w,-1,!1,x.S)}return v},
Xp(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aAj(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aAj(v[t],u[t],-1))
v=new A.e3()
v.cY(this.a.e*31+d)
B.d.e0(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.dq(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eO$
u.b=!1
B.d.a8(u.a)
u=u.goy()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dV$.a.a8(0)
v.qF()}this.bwE()},
cRD(d,e){var w,v,u,t,s,r=this
if(d>=r.gj1().length||r.gj1()[d]!==-1||B.d.q(r.gj1(),e))return
w=r.gaFx()[e]
v=r.gkS()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cqO(r,e,w,v))
A.cy(B.lJ,new C.cqP(r))
return}++r.r
u=A.bl(null,B.hK,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.cqQ(r,d,e,w,v))
u.cr(0)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkS()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cF(n,0,new C.cqR())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cqS(t,r))
w=5
return A.b(C.BW(t.a.d,r),$async$kN)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BX(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cqT())
w=1
break
case 4:for(o=t.as,n=new A.dq(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eO$
p.b=!1
B.d.a8(p.a)
p=p.goy()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dV$.a.a8(0)
q.qF()}o.a8(0)
t.m(new C.cqU(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.as(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.q0,p,p,p),p,p,p)
v=r.f
v=A.as(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.VJ,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tI(q,A.cm(A.a([D.afO,w,v,B.aO,new C.Iz(u,t,r.ch,p),B.aO,A.as(C.uz("Back to the games",new C.cqK(d),B.cU,B.k7,D.fC),p,p,p)],x.p),p,p,B.ac,p,p,B.ah,!1),B.f7,p)}w=r.gkS()
v=r.e
s=w[v]
return new C.tI(q,new A.D(B.uH,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aW1,B.K,p,p),A.E(A.co(new C.cqL(r,s)),1)],x.p),B.l,p,B.e,B.i,0,B.p),p),B.f7,p)}}
C.bcN.prototype={
a5(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cQQ(),A.U(b2).k("Y<1>")).gJ(0),b4=a9.b,b5=b4.a2(0,B.JH)
$.S()
w=A.L()
w.r=D.lD.j(0.18+0.1*b3).gp(0)
b6.N(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a2(0,D.eoY)
u=A.L()
u.r=B.oq.j(0.5).gp(0)
u.c=10
u.d=B.bv
b6.ah(new A.p(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.dK.aA(0,B.j.D(b2[p],0,1))
l=$.S().r
k=A.a([],s)
j=new A.aG(l,B.ai,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ab()
o=new A.c7((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.ak(n)
j.ab()
if(m<1)for(o=new A.aG(l,j.b,j.c,b0,A.br(k,!0,r)),n=A.a([],q),i=new A.rA(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bj(A.jK(b1));--h
g=new A.BU(i,h)
f=0
for(;;){i.iz()
e=n[h].b
e===$&&A.c()
if(!(f<e.a.length()))break
i.iz()
e=n[h].b
e===$&&A.c()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.S()
a1=new A.ao(B.P,B.M,B.R,B.S,B.Q)
a1.r=B.aT.gp(0)
a1.b=B.a9
a1.c=3
b6.af(new A.aG(l,d,b0,new A.ce([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aG(l,j.b,j.c,b0,A.br(k,!0,r)),n=A.a([],q),k=new A.rA(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bj(A.jK(b1));--a0
k.iz()
a1=n[a0].b
a1===$&&A.c()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.S()
a4=new A.ao(B.P,B.M,B.R,B.S,B.Q)
a4.r=D.Gl.gp(0)
a4.b=B.a9
a4.c=h
a4.d=B.bv
b6.af(new A.aG(l,a2,b0,new A.ce([new A.BU(k,a0),0,a1*m,!0]),a3),a4)
k.iz()
a4=n[a0].b
a4===$&&A.c()
a4=a4.a.length()
k.iz()
a5=n[a0].Di(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bt(new A.p(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ao(B.P,B.M,B.R,B.S,B.Q)
a3.r=B.b4.gp(0)
b6.bZ(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iL(D.fqg,B.a5,B.bX,new A.jj(1),b0,b0,b0,b0,B.bY,b0,B.ct)
a8.e5()
a8.a5(b6,new A.p(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aE(d){return!0}}
C.az4.prototype={
S(){return new C.az5(A.aR(x.S))},
gd1(){return this.d}}
C.az5.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hHK(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
Y(){this.a4()
this.b9g()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a3()},
b9g(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.dg(B.rX,new C.cFM(this))},
bqd(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkS()[v.e]
if(w.e[d]===w.b)v.m(new C.cFU(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cFV(v,d))
A.cy(B.iQ,new C.cFW(v))}},
cX5(){var w=this
if(!w.as&&w.f<w.gkS()[w.e].d.length)w.m(new C.cFX(w))},
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
t.m(new C.cFY(t,s))
w=5
return A.b(C.BW(t.a.d,s),$async$kN)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BX(q.d,q.c.a,"who",t.r),$async$kN)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cFZ())
w=1
break
case 4:t.m(new C.cG_(t))
t.b9g()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.as(A.d(""+a0.w+" of "+a0.gkS().length+" guessed",a2,a2,a2,a2,a2,a2,B.q0,a2,a2,a2),a2,a2,a2)
v=A.as(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.VJ,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tI(a1,A.cm(A.a([D.beq,w,v,B.aO,new C.Iz(u,t,a0.ax,a2),B.aO,A.as(C.uz("Back to the games",new C.cFO(a3),B.cU,B.k7,D.fC),a2,a2,a2)],x.p),a2,a2,B.ac,a2,a2,B.ah,!1),B.f7,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkS()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.KY,B.K,a2,a2),B.W,A.as(A.lE(new C.cFP(a0,r),a2,B.b_,B.hK,a2,a2,new A.bs(a2,s,u),x.i),a2,a2,a2),B.aC],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aO(16,16)
l=new A.ay(B.cU,2,B.r,-1)
k=o+1
w.push(new A.r7(new A.bs(0,1,u),new C.cFQ(),A.r(a2,new A.c8(B.aL,B.e,B.i,B.l,a2,B.p,a2,0,A.a([new A.qI(A.d(""+k,a2,a2,a2,a2,a2,a2,B.o4,a2,a2,a2),D.lC,a2,12,a2),B.au,new A.bz(1,B.bb,A.d(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fD5,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.qo,a2,new A.bG(l,l,l,l),new A.be(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cy,B.bk,a2,a2,a2),B.b_,B.iQ,a2,new A.bo("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.as(A.bP(!1,D.h3s,a2,a2,!0,a2,a2,a2,a0.gcX4(),a2,a2),a2,a2,a2))
w.push(B.T)
if(a0.as){u=D.lD.j(0.2)
q=A.l(16)
p=A.K(D.lD,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fU,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.r(a2,A.x(A.a([m,B.W,C.uz(v,a0.gqo(a0),B.cU,B.jt,D.fC)],t),B.l,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bI,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dr:B.cU.j(0.2)
g=new A.aO(16,16)
l=new A.ay(n.q(0,o)?B.fi:B.cU,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bW:B.c
d=n.q(0,o)?B.xr:a2
t.push(new A.r7(new A.bs(0,i,u),new C.cFR(),A.az(a2,A.r(a2,A.d(f,a2,a2,a2,a2,a2,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.aeY,new A.o(h,a2,new A.bG(l,l,l,l),new A.be(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jr,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cFS(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b_,B.md,a2,new A.bo("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bX(B.fW,t,B.bt,a2,10,10))}return new C.tI(a1,A.cm(w,a2,a2,B.amA,a2,a2,B.ah,!1),B.f7,a2)}}
C.aA4.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aHj.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.ag_.prototype={
ar4(d){},
arB(){var w=this,v=w.q1(new C.f7Q(w))
v.fX(0)
w.M0$!==$&&A.aQ()
w.M0$=v}}
C.aL7.prototype={
gbmE(d){var w=this.c
return B.a.aB(w,0,Math.min(this.d,w.length))},
VZ(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.dg(D.alB,new C.fi_(w))},
bsB(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.amj.prototype={
S(){return new C.amk(new C.amt(),A.a([],x.t),new A.eC(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.amk.prototype={
gMQ(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEz(w.c,10,w.e,!0)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghc(d){var w,v=this,u=v.e
if(u===$){w=C.Na(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqw(){var w=this.r
return w===$?this.r=new C.aL7(new C.bT1(this)):w},
gapV(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMQ()[v].c)u.push(1)
return u.length},
gblY(){var w=this.ghc(0)
return w.gzq()==null?"Elder":B.a.i(w.gzq().b)},
Y(){this.a4()
this.arB()},
t(){var w,v=this
v.gqw().t()
v.f.t()
w=v.M0$
w===$&&A.c()
w.t()
w=v.qa$
w.U$=$.ax()
w.P$=0
v.bwj()},
cLJ(){var w=this
w.m(new C.bSZ(w))
w.gqw().VZ(w.gMQ()[w.x].a)},
L9(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqw()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qa$.a
v.ax=u
v.ay=u+1
v.m(new C.bSX())
A.cy(B.hK,new C.bSY(v))},
bq9(){var w=this.gapV(0)/this.gMQ().length*100
if(w>=90)return D.f_H
if(w>=75)return D.eYJ
if(w>=60)return D.ePo
if(w>=45)return D.eSP
return D.eJO},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cuf()
w=A.bS(0,new A.em(A.b3(m,m,m,new C.btu(n,n.qa$),B.az),m),0,0,0)
if(!n.Q){v=D.qo.j(0.96)
u=A.l(20)
t=A.K(B.cU,B.r,3)
u=A.r(m,A.x(A.a([A.d("Elder "+n.gblY()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aWW,B.K,m,m),B.W,C.uz("Start the test",n.gBV(),B.cU,B.j9,D.fC)],x.p),B.l,m,B.e,B.O,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.n),m,m,m,m,B.bI,m,m,m)
v=u}else{v=n.x
u=n.gMQ()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aWY,m,m,m)
if(n.Q){t=n.gqw()
t=t.d<t.c.length}else t=!1
if(t)u=D.fiG
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aO(10,10)
o=new A.ay(D.BL,4,B.r,-1)
s.push(A.az(m,A.r(m,A.d(q[r],m,m,m,m,m,m,D.fu3,B.K,m,m),B.f,m,D.aeY,new A.o(D.bhj,m,new A.bG(o,o,o,o),new A.be(p,p,p,p),m,m,B.n),m,m,m,m,B.Ok,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bT_(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bX(B.fW,s,B.bt,new A.bo("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.oB(u,B.n_,A.pW(),B.b_,B.b_,A.LN())],x.p),B.l,m,B.e,B.O,0,B.p)
v=u}return new C.tI("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ap(10,v,m,m,10,10,m,m)],x.p),m),B.f7,m)},
cuf(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bq9(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMQ()[v].c)g.push(v)
u=A.l(22)
t=A.K(B.cU,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fyz,B.K,i,i)
r=A.d("Signed by Elder "+j.gblY(),i,i,i,i,i,i,D.fxc,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fCq,i,i,i),D.eBJ],q)
o=A.d(h.b,i,i,i,i,i,i,D.fEo,i,i,i)
n=j.gapV(0)
m=j.gMQ()
u=A.r(i,A.x(A.a([D.fPD,B.aw,s,r,B.W,new A.an(B.A,i,B.ad,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.ac_,i,i,i),B.T,D.atq],q),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(D.qo,i,t,u,i,i,B.n),i,i,i,i,B.fv,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aC,new C.Iz(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aO,D.h4w,B.T],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aO(14,14)
k=new A.ay(B.by,1,B.r,-1)
p=m[v]
u.push(A.r(i,A.x(A.a([A.d(p.a,i,i,i,i,i,i,B.h4,i,i,i),B.aw,A.d("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fzK,i,i,i),A.d(p.d,i,i,i,i,i,i,D.fC1,i,i,i)],q),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.dr,i,new A.bG(k,k,k,k),new A.be(r,r,r,r),i,i,B.n),i,i,i,B.cy,B.bk,i,i,i))}B.d.u(s,u)}s.push(B.aC)
s.push(A.as(C.uz("Back to the games",new C.bST(j),B.cU,B.k7,D.fC),i,i,i))
return new C.tI("Village School",A.cm(s,i,i,B.bS,i,i,B.ah,!1),B.f7,i)}}
C.btu.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qa$.a
a0.zp(e.f.MB(a1))
w=C.hdY(a1)
v=a0.c
J.bq(v.save())
v.translate(w.a,w.b)
a0.bU(0,w.c)
if(e.Q){u=e.gqw()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.cZa[s]-6
$.S()
r=new A.ao(B.P,B.M,B.R,B.S,B.Q)
r.r=D.G7.gp(0)
a0.ar(new A.a1(u,340,u+12,450),r)}u=A.bn(D.aa3.cn(10),B.i9)
$.S()
r=A.L()
r.r=D.BL.gp(0)
a0.an(u,r)
r=A.bn(D.aa3,B.hX)
u=A.L()
u.sav(A.jB(new A.p(30,96),new A.p(420,346),D.dhY,f,B.x,f))
a0.an(r,u)
q=new A.e3()
q.cY(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bt(new A.p(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ao(B.P,B.M,B.R,B.S,B.Q)
r.r=B.c.j(0.025).gp(0)
a0.bZ(o,r)}u=A.L()
u.r=I.ajr.gp(0)
a0.ar(new A.a1(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.ar(D.fa5,u)
u=A.L()
u.r=B.bL.gp(0)
a0.ar(D.fa9,u)
u=A.bn(D.fa_,B.hW)
r=A.L()
r.r=D.ZI.gp(0)
a0.an(u,r)
n=B.j.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqw().gbmE(0)
m=A.ft(f,B.ct,f,7,f,A.cQ(f,f,f,f,f,f,f,f,f,D.fGE,u+(t?"|":"")),B.a5,B.bX,f,B.dE,B.bY)
m.o8(346)
J.bq(v.save())
u=A.hX(D.aa3)
r=$.mi()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hX(new A.a1(30+390*n,96,420,346)),r[1],!0)
m.a5(a0,new A.p(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bn(new A.a1(u,r,u+40,r+90),B.fS)
u=A.L()
u.r=D.bwR.gp(0)
a0.an(r,u)}}else{m=A.ft(f,B.ct,f,f,f,D.fqw,B.K,B.bX,f,B.dE,B.bY)
m.o8(340)
m.a5(a0,new A.p(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.j.F(u+p/8,1)
o=B.o.F(e.gqw().d*9,310)
k=Math.sin(p+r)
j=new A.ao(B.P,B.M,B.R,B.S,B.Q)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.N(new A.p(70+o+k*6,166+l*70),1.6,j)}u=e.ghc(0).gzq()
i=(u==null?f:u.c)===D.oA?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.f7R(d,a0,i,t,h,D.eq7)),new A.y(520,new C.f7S(a0,d,t)),new A.y(575,new C.f7T(a0,d,t)),new A.y(585,new C.f7U(this,a0,d,t)),new A.y(615,new C.f7V(this,t,a0,d,h))],x.E)
B.d.aZ(g,new C.f7W())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
ccg(d,e){var w,v,u,t,s,r,q,p=$.S(),o=A.a([],x.v),n=new A.aG(p.r,B.ai,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.aZ(r,q)
o.push(r)
q=n.f
if(q!=null)r.ak(q)
n.ab()}else{r=new A.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.ak(q)
n.ab()}}n.E(new A.bu())
return n},
aE(d){return!1}}
C.amh.prototype={
S(){return new C.ami(new C.amt(),A.T(x.S,x.i),new A.eC(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.ami.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hGE(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gj1(){var w=this.z
return w===$?this.z=this.FK(0):w},
gaLN(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FK(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.co(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FK(0):r).length);++v}s.Q=w
r=w}return r},
FK(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e5(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e3()
u.cY(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f1(u,new C.bSF())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Y(){this.a4()
this.arB()},
t(){var w,v=this
v.e.t()
w=v.M0$
w===$&&A.c()
w.t()
w=v.qa$
w.U$=$.ax()
w.P$=0
v.bwi()},
ar4(d){var w,v,u,t,s,r=this,q=r.gj1().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.co(u===$?r.z=r.FK(0):u,v)
s=r.gaLN()
s[v]=s[v]+(450*(t+0.5)/q-r.gaLN()[v])*Math.min(1,w)}},
d1r(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj1().length)return
w=v.y
if(w===-1){v.m(new C.bSQ(v,d))
return}if(w===d){v.m(new C.bSR(v))
return}v.m(new C.bSS(v,B.d.co(v.gj1(),v.y),d,B.d.co(v.gj1(),d)))},
cMq(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FK(0):u).length))break
t=s.gkS()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FK(0):u)[v]]===v);++v}s.m(new C.bSL(s,B.d.cD(w,new C.bSM())))},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkS().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bSN(t,s))
w=5
return A.b(C.BW(t.a.d,s),$async$kN)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BX(q.d,q.c.a,"lineup",t.r*10),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bSO())
w=1
break
case 4:t.m(new C.bSP(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.as(A.d(""+l.r+" of "+l.gkS().length+" lines right",k,k,k,k,k,k,B.q0,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tI("Line Up",A.cm(A.a([D.afO,w,B.aO,new C.Iz(v,u,l.ch,k),B.aO,A.as(C.uz("Back to the games",new C.bSH(d),B.cU,B.k7,D.fC),k,k,k)],x.p),k,k,B.ac,k,k,B.ah,!1),B.f7,k)}w=A.a([],x.t)
for(t=0;v=l.gkS(),t<v[l.f].d.length;++t)w.push(t)
B.d.aZ(w,new C.bSI(l))
u=A.bS(0,A.co(new C.bSJ(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aWY,k,k,k)
s=v[s]
q=x.p
s=A.ap(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fz0,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fBf,B.K,k,k)],q),B.l,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.l(16)
n=l.ax
m=A.K(n?D.lD:G.ns,B.r,2)
r.push(A.r(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bSK(l),x.cM).aN(0,", then ")+".",k,k,k,k,k,k,D.fDt,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.n),k,k,k,B.da,B.bk,k,k,1/0))}if(!l.at)r.push(C.uz("That is my line!",l.gcMp(l),B.cU,B.hO,D.fC))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uz(w,l.gqo(l),B.cU,B.jt,D.fC))}return new C.tI("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ap(12,A.x(r,B.l,k,B.e,B.O,0,B.p),k,k,12,12,k,k)],q),k),B.f7,k)}}
C.bjY.prototype={
a5(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qa$.a
c7.zp(c5.e.MB(c8))
w=C.hdY(c8)
v=c7.c
J.bq(v.save())
v.translate(w.a,w.b)
c7.bU(0,w.c)
u=c5.gj1().length
t=$.S().r
s=x.v
r=new A.aG(t,B.ai,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.c7(225,500,440,470))
q=A.L()
q.r=D.ZI.gp(0)
q.b=B.a9
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aG(t,B.ai,c4,c4,l)
l.push(new A.aZ(o,n))
k.ab()
m=new A.aq(o+16,n+6+m*3)
l.push(m)
j=k.f
if(j!=null)m.ak(j)
k.ab()
m=new A.aq(o,n+20)
l.push(m)
j=k.f
if(j!=null)m.ak(j)
k.ab()
m=new A.bu()
l.push(m)
l=k.f
if(l!=null)m.ak(l)
k.ab()
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.r=[B.cU,G.ns,D.lD,B.aG][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b1l(c7,"OLDEST",D.er5,B.cU)
this.b1l(c7,"YOUNGEST",D.eqy,B.b4)
t=A.bn(D.f9U,B.fS)
s=A.L()
s.r=D.G7.gp(0)
c7.an(t,s)
s=A.bn(D.f9T,B.hX)
t=A.L()
t.r=D.BL.gp(0)
c7.an(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.aZ(t,new C.ds3())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.co(a1===$?c5.z=c5.FK(0):a1,f)
o=c5.gaLN()[f]
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
if(a3){$.S()
a9=new A.ao(B.P,B.M,B.R,B.S,B.Q)
a9.r=B.cU.j(0.22+0.1*Math.sin(e)).gp(0)
c7.N(new A.p(o,520),54,a9)}a9=D.dlQ[B.o.F(b0,6)]
if(b1)b3=1
else b3=a7?-0.4:0.35
if(b1)b4=0.4+0.4*b2
else b4=h&&a7?0.5:0
if(h&&a7)b5=1
else b5=a3?0.6:0
b6=b1?0.5:0
b7=a7?Math.sin(d)*0.5:0
b8=b1?a4+b2*8:a4
if(b1)b9=new A.p(-3-b2*8,-56)
else b9=a3?D.etd:c4
if(b1)c0=new A.p(3+b2*8,-56)
else if(h&&a7)c0=D.aMM
else c0=a3?new A.p(30,-104+Math.sin(e)*5):c4
C.SI(c7,new A.p(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.JJ,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iL(new A.eq(a8,c4,c4,B.cN,c4,c4,c4,c4,c4,c4,D.fwI),B.a5,B.bX,new A.jj(1),"\u2026",c4,1,c4,B.bY,c4,B.ct)
c1.o8(q)
c2=A.bn(A.bt(new A.p(o,650),24,c1.b.c+16),B.fS)
$.S()
a8=new A.ao(B.P,B.M,B.R,B.S,B.Q)
if(a6)a9=B.ig
else a9=a7?B.rR:D.qo
a8.r=a9.gp(0)
c7.an(c2,a8)
a8=new A.ao(B.P,B.M,B.R,B.S,B.Q)
if(a6)a9=D.lD
else a9=a7?G.ns:D.lC
a8.r=a9.gp(0)
a8.b=B.a9
a8.c=2
c7.an(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a5(c7,new A.p(o-a9/2,650-a8.gba(a8)/2))
c3=new A.iL(new A.eq(""+(a2+1),c4,c4,B.cN,c4,c4,c4,c4,c4,c4,D.fx1),B.a5,B.bX,new A.jj(1),c4,c4,c4,c4,B.bY,c4,B.ct)
c3.e5()
c3.a5(c7,new A.p(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.j.F(p*53+Math.sin(c5+p)*20,450)
q=B.j.F(t+p*37,420)
J.bq(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bt(B.J,4,8)
$.S()
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.r=[B.cU,G.ns,D.lD,B.aG,B.c][B.o.F(p,5)].gp(0)
c7.ar(q,m)
v.restore()}v.restore()},
b1l(d,e,f,g){var w,v,u=null,t=A.ft(u,B.ct,u,u,u,A.cQ(u,u,u,u,u,u,u,u,u,A.m(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.DA,u,u),e),B.a5,B.bX,u,B.dE,B.bY)
t.e5()
w=t.b
v=w.c
w=w.a.c
t.a5(d,f.aJ(0,new A.p(v/2,w.gba(w)/2)))},
aE(d){return!1}}
C.a2g.prototype={
a7(){return"_Trip."+this.b}}
C.amd.prototype={
S(){return new C.ame(D.Xv,new A.eC(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.ame.prototype={
gDu(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEz(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghc(d){var w,v=this,u=v.e
if(u===$){w=C.Na(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqw(){var w=this.f
return w===$?this.f=new C.aL7(new C.bSr(this)):w},
gTZ(){var w=this.ghc(0)
return w.gzq()==null?"Grandma":B.a.i(w.gzq().b)},
Y(){this.a4()
this.arB()},
t(){var w,v=this
v.gqw().t()
w=v.M0$
w===$&&A.c()
w.t()
w=v.qa$
w.U$=$.ax()
w.P$=0
v.bwh()},
ar4(d){var w,v,u,t=this
if(t.r!==D.adK)return
w=B.dG.aA(0,B.j.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDu()
if(v+1>=u.length){t.r=D.adL
t.WV()}else{++t.w
t.ay=!1
t.r=D.Xw
t.gqw().VZ(u[t.w].a)}if(t.c!=null)t.m(new C.bSp())}},
WV(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$WV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqw().VZ("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDu().length
r=C.bGQ(t,u.z,s)
u.as=r
w=2
return A.b(C.BW(u.a.d,r),$async$WV)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BX(s.d,s.c.a,"journey",u.x*10),$async$WV)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bSj())
return A.h(null,v)}})
return A.i($async$WV,v)},
brt(){this.aUt()},
aUt(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.adK
if(w.c!=null)w.m(new C.bSk())},
L9(d){var w,v,u,t,s=this
if(s.r!==D.Xw)return
w=s.gDu()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bSo(s,d,v))
u=s.gqw()
t=s.w
u.VZ(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cRC(){if(this.r!==D.Bi)return
this.aUt()},
B(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.em(A.b3(s,s,s,new C.bjo(t,t.qa$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDu().length;++w){v=t.w
if(w<v||t.r===D.adL)v=B.cU
else v=w===v?B.c:B.aT
u=new A.aO(4,4)
p.push(new A.bz(1,B.bb,A.r(s,s,B.f,s,s,new A.o(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,B.wD,s,s,s,s),s))}p.push(B.bo)
p.push(D.fRh)
return new C.tI("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ap(s,A.A(p,B.l,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ap(10,t.clT(),s,s,10,10,s,s)],q),s),B.f7,s)},
clT(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bSn(o),l=D.qo.j(0.96),k=A.l(22),j=A.K(B.cU,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTZ()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aWW,B.K,n,n),B.W,C.uz("Start the journey",o.gbrs(),B.cU,D.bRF,D.fC)],x.p),B.l,n,B.e,B.O,0,B.p)
break
case 3:w=D.be0
break
case 1:w=o.w
v=o.gDu()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aO(14,14)
p=new A.ay(D.lC,2.5,B.r,-1)
t.push(A.az(n,A.r(n,A.d(r[s],n,n,n,n,n,n,D.aWh,B.K,n,n),B.f,n,D.af4,new A.o(D.akB,n,new A.bG(p,p,p,p),new A.be(q,q,q,q),n,n,B.n),n,n,n,n,U.wy,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bSl(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.T,A.bX(B.bH,t,B.bt,n,8,8)],u),B.E,n,B.e,B.O,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDu().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.T,new A.bL(B.aa,n,n,C.uz(v,o.gcRB(),B.cU,B.jt,D.fC),n)],x.p),B.E,n,B.e,B.O,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTZ()),B.T,A.d(""+o.x+" of "+o.gDu().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aWA,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aRa(v)
u=C.aRa(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.ac_,n,n,n))}w.push(B.T)
w.push(A.as(C.uz("Back to the games",new C.bSm(o),B.cU,B.k7,D.fC),n,n,n))
w=A.x(w,B.E,n,B.e,B.O,0,B.p)
break
default:w=n}return A.r(n,w,B.f,n,n,new A.o(l,n,j,k,D.aDX,n,B.n),n,n,n,n,B.bk,n,n,n)}}
C.bjo.prototype={
a5(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qa$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDu(),d0=B.j.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.adK,d2=c7*0.5
c8=A.ar(D.biN,D.bte,d0)
c8.toString
w=A.ar(D.YS,G.aic,d0)
w.toString
v=A.ar(B.uj,D.brG,d0)
v.toString
$.S()
u=A.L()
t=x.O
u.sav(A.jB(B.J,new A.p(0,d2),A.a([c8,w,v],t),G.a4X,B.x,c3))
d3.ar(new A.a1(0,0,0+c6,0+c7),u)
s=new A.p(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.sav(A.wg(s,60,A.a([D.bs4,B.L],t),c3,B.x,c3,c3,0))
d3.N(s,60,u)
u=A.L()
u.r=B.Z3.gp(0)
d3.N(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.j.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dBl[o]
$.S()
u=new A.ao(B.P,B.M,B.R,B.S,B.Q)
u.r=B.c.j(0.75).gp(0)
d3.N(new A.p(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.S()
j=A.a([],m)
i=new A.aG(k.r,B.ai,c3,c3,j)
j.push(new A.aZ(0,v))
i.ab()
for(k=u-l*12,h=0.12+l*0.1,g=70+l*30,f=14-l*3,q=0;q<=c6;q+=6){e=new A.aq(q,k+Math.sin((q+c4.CW*h)/g)*f)
j.push(e)
d=i.f
if(d!=null)e.ak(d)
i.ab()}k=new A.aq(c6,v)
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
$.S()
k=new A.ao(B.P,B.M,B.R,B.S,B.Q)
k.r=A.ar(l===0?D.bhl:D.bwi,D.bmh,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cch(d3,new A.p(B.j.F(B.j.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.S()
w=A.L()
v=A.ar(D.ajL,D.Gl,d0)
v.toString
w.sav(A.jB(new A.p(0,d2),new A.p(0,c7),A.a([v,D.bs6],t),c3,B.x,c3))
d3.ar(new A.a1(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.blB.gp(0)
d3.ar(new A.a1(0,a0,c6,a1),w)
w=A.L()
w.r=D.bvW.gp(0)
d3.ar(new A.a1(0,a0-3,c6,a0),w)
for(q=-B.j.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ao(B.P,B.M,B.R,B.S,B.Q)
u.r=I.MS.gp(0)
d3.ar(new A.a1(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.S()
b2=new A.ao(B.P,B.M,B.R,B.S,B.Q)
b2.r=D.bh0.gp(0)
d3.ar(new A.a1(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aG(b1.r,B.ai,c3,c3,b2)
b2.push(new A.aZ(a9-36,t))
b1.ab()
b0=new A.aq(a9,a6)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.ak(b3)
b1.ab()
b0=new A.aq(a9+36,t)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.ak(b3)
b1.ab()
b0=new A.bu()
b2.push(b0)
b2=b1.f
if(b2!=null)b0.ak(b2)
b1.ab()
b0=new A.ao(B.P,B.M,B.R,B.S,B.Q)
b0.r=D.bu5.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ao(B.P,B.M,B.R,B.S,B.Q)
b1.r=D.fC.gp(0)
d3.ar(new A.a1(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ao(B.P,B.M,B.R,B.S,B.Q)
b0.r=D.G7.gp(0)
d3.ar(new A.a1(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bn(new A.a1(b0,a4,b0+60,a5),B.iF)
b0=new A.ao(B.P,B.M,B.R,B.S,B.Q)
b0.r=D.bxm.gp(0)
d3.an(b5,b0)
b0=new A.ao(B.P,B.M,B.R,B.S,B.Q)
b0.r=D.BL.gp(0)
b0.b=B.a9
b0.c=2
d3.an(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iL(new A.eq(b6,c3,c3,B.cN,c3,c3,c3,c3,c3,c3,D.fv8),B.a5,B.bX,new A.jj(1),c3,c3,c3,c3,B.bY,c3,B.ct)
b7.e5()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a5(d3,new A.p(b4-b1/2,a2-b0.gba(b0)/2))
if(a7)b8=c4.r===D.adL
else if(r===c4.w){b0=c4.r
b0=b0===D.Xw||b0===D.Bi
b8=b0}else b8=!1
if(a7){b0=c4.ghc(0).gzq()
b9=(b0==null?c3:b0.c)===D.oA?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqw()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.Bi
b0=c0?C.hCJ(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.Xw?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.p(40,-110+Math.sin(g)*10)
else a7=c0?new A.p(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.SI(d3,new A.p(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.p(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bIA(d3,new A.p(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.j.F(w+r/7,1)
$.S()
t=new A.ao(B.P,B.M,B.R,B.S,B.Q)
t.r=D.bvq.j(0.5*(1-c2)).gp(0)
d3.N(new A.p(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.Xv)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.j.F(w+r/5,1)
t=Math.sin(r+c8)
$.S()
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.N(new A.p(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.Bi&&c4.ax){b7=A.ft(c3,B.ct,c3,c3,c3,A.cQ(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.m(c3,c3,B.cU,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A6.IH,c3,c3),"BEEP BEEP!"),B.a5,B.bX,c3,B.dE,B.bY)
b7.e5()
b7.a5(d3,new A.p(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cch(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ar(D.brA,D.bkV,g)
o.toString
if(f){w=new A.aG($.S().r,B.ai,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.aZ(v-16,u))
t=u-36
s=u-56
w.E(new A.c7(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.c7(v+9,t,v+16,u))
w.E(new A.bu())
t=A.L()
t.r=D.a_d.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d2b[r]
p=new A.ao(B.P,B.M,B.R,B.S,B.Q)
p.r=D.a_d.gp(0)
p.c=4
p.d=B.bv
d.ah(new A.p(w,t),new A.p(v+q*24,s),p)
p=new A.ao(B.P,B.M,B.R,B.S,B.Q)
p.r=o.gp(0)
d.N(new A.p(v+q*26,u),10,p)}}else{w=e.a2(0,D.eta)
$.S()
v=A.L()
v.r=D.bh2.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bt(e.a2(0,D.etb),16,60)
w=A.L()
w.r=o.gp(0)
d.bZ(v,w)}},
bIA(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.Xv?0.045:0,a1=a2.c
J.bq(a1.save())
a1.translate(a3.a,a3.b+e)
a2.hW(0,a0)
for(w=0;w<2;++w){v=D.dtz[w]
u=d.ay&&d.r!==D.Xv&&v>0
J.bq(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.S()
s=new A.ao(B.P,B.M,B.R,B.S,B.Q)
s.r=D.bw9.gp(0)
a2.N(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ao(B.P,B.M,B.R,B.S,B.Q)
s.r=D.bol.gp(0)
a2.N(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ao(B.P,B.M,B.R,B.S,B.Q)
q.r=B.bh.gp(0)
q.c=2
a2.ah(B.J,new A.p(s*9,t*9),q)}a1.restore()}p=A.u6(D.fag,B.fS,B.fS,B.is,B.hV)
$.S()
t=A.L()
t.sav(A.jB(D.epd,B.a8Y,D.djl,G.a4X,B.x,f))
a2.an(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ao(B.P,B.M,B.R,B.S,B.Q)
s.r=D.ddi[B.o.F(o,4)].gp(0)
a2.ar(new A.a1(t,-26,t+10,-19),s)}n=d.r===D.Bi&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a1(s,-66,q,-36)
J.bq(a1.save())
a1.clipRRect(A.nS(A.bn(l,B.mw)),$.np(),!0)
k=new A.ao(B.P,B.M,B.R,B.S,B.Q)
k.r=D.YS.gp(0)
a2.ar(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.Bi?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.SI(a2,new A.p(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aMD,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bn(l,B.mw)
i=new A.ao(B.P,B.M,B.R,B.S,B.Q)
i.r=D.akD.gp(0)
i.b=B.a9
i.c=2
a2.an(j,i)}d=A.bn(D.UP,B.mw)
t=A.L()
t.r=D.YS.gp(0)
a2.an(d,t)
J.bq(a1.save())
a1.clipRRect(A.nS(A.bn(D.UP,B.mw)),$.np(),!0)
C.SI(a2,new A.p(D.UP.gbx().a,-10),0,0,0.7,-0.1,f,f,D.aMD,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bn(D.UP,B.mw)
d=A.L()
d.r=D.akD.gp(0)
d.b=B.a9
d.c=2
a2.an(t,d)
d=A.L()
d.r=Al.Gm.gp(0)
a2.N(D.erk,4,d)
d=A.L()
d.r=D.G7.gp(0)
a2.ar(D.fbp,d)
for(w=0;w<3;++w){v=D.dtB[w]
d=A.bn(new A.a1(v,-96,v+28,-79),B.iF)
t=new A.ao(B.P,B.M,B.R,B.S,B.Q)
t.r=D.Gl.gp(0)
a2.an(d,t)}a1.restore()},
aE(d){return!1}}
C.aBS.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bgX.prototype={}
C.aBU.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bgY.prototype={}
C.aBV.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bgZ.prototype={}
C.a6I.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b3(w,w,w,new C.bjv(w),B.az),w)}}
C.bjv.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dry[B.o.F(n,6)]
k=$.S()
j=new A.ao(B.P,B.M,B.R,B.S,B.Q)
j.r=l.gp(0)
d.ar(new A.a1(m,0,m+v,u),j)
if(B.o.F(n,3)===0){j=A.a([],o)
i=new A.aG(k.r,B.ai,null,null,j)
k=m+r
j.push(new A.aZ(k,f))
i.ab()
h=new A.aq(m+p,s)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
k=new A.aq(k,q)
j.push(k)
h=i.f
if(h!=null)k.ak(h)
i.ab()
k=new A.aq(m+t,s)
j.push(k)
h=i.f
if(h!=null)k.ak(h)
i.ab()
k=new A.bu()
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
k=new A.ao(B.P,B.M,B.R,B.S,B.Q)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aE(d){return!1}}
C.tI.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aI(w,w,w,w,B.Qb,w,w,w,new C.bSi(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.fsq,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c4(w,D.YD,A.r(w,A.bm(!0,A.x(A.a([D.c6q,new A.D(D.bIv,A.A(u,B.l,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.b9h,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.Iz.prototype={
B(d){var w=null,v=this.d,u=C.aRa(v),t=C.ilp(v),s=B.c.j(0.08),r=A.l(18),q=A.K(B.cU.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fuU,w,w,w)],x.p)
if(this.e)p.push(D.evB)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.h4,w,w,w))
if(t!=null)p.push(new A.D(B.uE,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.AX,w,w,w),w))
return A.r(w,A.x(p,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bI,w,w,w)}}
C.Wt.prototype={
S(){return new C.bmj(A.T(x.N,x.S),B.o.F(Date.now(),1e5))},
cYu(d){return this.f.$1(d)},
ge3(){return this.d}}
C.bmj.prototype={
gSY(){var w=this.d
return w===$?this.d=this.a.c:w},
Y(){this.a4()
this.PB()},
PB(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$PB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bT3(u.a.d),$async$PB)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dhm[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bT2(p,(o===$?u.d=q.c:o).a,r),$async$PB)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e2f(u,n))
return A.h(null,v)}})
return A.i($async$PB,v)},
uC(d){return this.coW(d)},
coW(d){var w=0,v=A.j(x.H),u=this,t
var $async$uC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a6(t,!1).ce(A.ed(new C.e2g(d),!1,null,x.H)),$async$uC)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.PB()
return A.h(null,v)}})
return A.i($async$uC,v)},
gb6F(){var w,v,u,t=C.Na(this.gSY()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2A(d){return this.cw7(d)},
cw7(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2A=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].aj())
w=2
return A.b(u.a.cYu(r),$async$a2A)
case 2:if(u.c!=null)u.m(new C.e2h(u,r))
return A.h(null,v)}})
return A.i($async$a2A,v)},
OU(d){return this.bRj(d)},
bRj(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$OU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hgf(t.gSY())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.MV("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a6(s,!1).ce(A.ed(new C.e2d(q),!1,null,r)),$async$OU)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bj(j,new C.e2e(p))
o=s.length
B.d.c9(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2A(A.cX(s,0,A.dB(2,"count",x.S),r).dn(0)),$async$OU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OU,v)},
XR(d,e){return this.bOT(0,e)},
bOT(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$XR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cg(null,null,!0,null,new C.e2c(e),o,null,!0,!0,x.y),$async$XR)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hgf(u.gSY()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2A(o),$async$XR)
case 5:case 3:return A.h(null,v)}})
return A.i($async$XR,v)},
aag(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e29(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.l(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.ab(0,B.G,g.j(0.35),B.cz,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.VE,p,p,p),B.b1],s)
q=A.l(10)
r.push(A.r(p,A.d(i,p,p,p,p,p,p,D.ftj,p,p,p),B.f,p,p,new A.o(B.hJ,p,p,q,p,p,B.n),p,p,p,p,B.CE,p,p,p))
return A.az(p,A.d3(A.r(p,A.x(A.a([A.A(r,B.l,p,B.e,B.i,0,p,p),B.b1,A.d(e,p,2,p,p,p,p,D.fB8,p,p,p),B.cR,A.d(f,p,3,B.a2,p,p,p,D.fu1,p,p,p)],s),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a8(B.aA,B.aD,B.x,w,p,p),B.n),p,p,p,p,B.yO,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
Xk(d,e,f,g,h,i){return this.aag(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Na(s.gSY()),p=s.gSY(),o=C.aRa(s.e),n=C.hgf(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e2i(s),k=C.hGE(p,1).length,j=C.hGQ(p,1).length,i=C.hHK(p,1).length,h=B.c.j(0.07),g=A.l(20),f=A.K(B.cU.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,K.abP,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fyD,r,r,r),a0=q.b.length,a1=x.p
g=A.r(r,A.A(A.a([e,B.bd,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.VY,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.q0,r,r,r),D.fXB],a1),B.l,r,B.e,B.i,0,B.p)],a1),B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.n),r,r,r,r,B.bI,r,r,r)
f=s.Xk("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aB,new C.e2j(s,p),l.$1("kahoot"))
h=s.Xk("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lC,new C.e2k(s,p),l.$1("fire"))
a0=s.Xk("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.wm,new C.e2l(s,p),l.$1("catch"))
j=j!==0?new C.e2o(s,p):r
j=s.aag("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hx,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e2p(s,p):r
i=s.aag("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.kL,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.Xk("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.f0,new C.e2q(s,p),l.$1("journey"))
k=k!==0?new C.e2r(s,p):r
k=A.a([g,B.aO,D.h0B,B.T,A.l_(0.98,A.a([f,h,a0,j,i,e,s.aag("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.es,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.Xk("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d3,new C.e2s(s,p),l.$1("school"))],a1),2,12,12,r,B.e1,!0),B.dc,A.A(A.a([D.bKl,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.ftn,r,r,r)],a1),B.l,r,B.e,B.i,0,r,r),B.T],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aO(18,18)
u=new A.ay(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fId,B.bd,new A.bz(1,B.bb,A.x(A.a([A.d(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hu,r,r,r),A.d(""+v.gapz(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.AX,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),r)],a1)
if(v.gapz(0).length>=2){f=D.lD.j(0.2)
t=new A.ay(D.lD,1,B.r,-1)
g.push(A.az(r,A.r(r,A.X(B.hn,D.lD,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e2t(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cU.j(0.2)
t=new A.ay(B.cU,1,B.r,-1)
f=A.az(r,A.r(r,A.X(B.j9,B.cU,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e2u(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fi.j(0.2)
t=new A.ay(B.fi,1,B.r,-1)
B.d.u(g,A.a([B.bo,f,B.bo,A.az(r,A.r(r,A.X(B.ek,B.fi,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e2v(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.r(r,new A.c8(B.aL,B.e,B.i,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bG(u,u,u,u),new A.be(h,h,h,h),r,r,B.n),r,r,r,B.da,B.bk,r,r,r))}if(s.a.e){j=m?new C.e2m(s):new C.e2n(a2)
i=A.l(18)
h=A.K(m?B.cU:B.aT,B.r,2)
g=m?B.cU.j(0.12):B.dr
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.az(r,A.r(r,A.as(A.d(f,r,r,r,r,r,r,A.m(r,r,m?B.cU:B.aF,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.O9,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.h1x)
k.push(B.aC)
k.push(D.atq)
return new C.tI("Family Games \xb7 "+p.b,A.cm(k,r,r,D.bEx,r,r,B.ah,!1),B.f7,r)}}
C.a09.prototype={
a7(){return"_KPhase."+this.b}}
C.amf.prototype={
S(){return new C.amg(D.b1d)},
gd1(){return this.e}}
C.amg.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a3()},
fX(d){var w,v=this
v.m(new C.bSD(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.dg(B.fN,new C.bSE(v))},
aPZ(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new C.bSt(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.dg(B.fg,new C.bSu(w))},
L9(d){var w
if(this.d!==D.ade)return
w=this.at
if(w!=null)w.a1(0)
this.b6B(d)},
b6B(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.j.V(500+500*B.j.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bSz(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cy(B.rX,v.giy(v))},
cL2(d){var w=this
if(w.d!==D.X2)return
if(w.e+1>=w.a.w.length)w.YD()
else{w.m(new C.bSA(w))
w.aPZ()}},
YD(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$YD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bGQ(p,u.w,t)
u.m(new C.bSw(u,s))
w=2
return A.b(C.BW(u.a.e,s),$async$YD)
case 2:r=e
t=u.a
w=3
return A.b(C.BX(t.e,t.f,t.r,u.f),$async$YD)
case 3:q=e
if(u.c!=null)u.m(new C.bSx(u,r,q))
return A.h(null,v)}})
return A.i($async$YD,v)},
cLS(){var w,v,u,t,s=this,r=s.a,q=new A.e3()
q.cY(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b5("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cX(r,0,A.dB(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bR(r,r.gJ(0),u.k("bR<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b5(t,B.j.V(w*(0.35+q.ai()*0.5)),!1))}B.d.aZ(v,new C.bSB())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b1d===r){w=A.a([D.fY_,B.W,A.d(s,t,t,t,t,t,t,B.W7,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.ftv,t,t,t))
w.push(B.aC)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.B2,B.K,t,t))
w.push(B.e4)
w.push(C.uz("Play",u.geY(u),B.cU,B.hn,D.fC))
w=A.as(new A.D(B.eA,A.x(w,B.l,t,B.e,B.O,0,B.p),t),t,t,t)
break A}if(D.b1e===r){w=A.as(A.d(""+u.z,t,t,t,t,t,t,D.fBG,t,t,t),t,t,t)
break A}if(D.ade===r||D.X2===r){w=u.crx()
break A}if(D.b1f===r){w=u.cci()
break A}w=t}return new C.tI(s,w,B.f7,t)},
crx(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.X2,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aW6,j,j,j),B.b1],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.KY,j,j,j))
g.push(B.au)
f=A.l(14)
g.push(A.r(j,A.d(""+k.f,j,j,j,j,j,j,B.iG,j,j,j),B.f,j,j,new A.o(B.by,j,j,f,j,j,B.n),j,j,j,j,B.Cr,j,j,j))
g=A.A(g,B.l,j,B.e,B.i,0,j,j)
f=A.l(6)
w=i?0:B.j.D(k.as/k.a.w[k.e].r,0,1)
f=A.bx(f,A.ks(B.by,j,k.as<5?B.fi:B.cU,9,j,w,j),B.aq)
w=A.l(22)
v=A.K(B.cU,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.m(j,j,e?D.lD:G.ns,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.T,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fsz,B.K,j,j)],h),B.l,j,B.e,B.O,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fDS,B.K,j,j)
w=A.E(A.r(j,A.as(u,j,j,j),B.f,j,j,new A.o(D.qo,j,v,w,j,j,B.n),j,j,j,j,B.fv,j,j,1/0),3)
v=A.a([],h)
for(u=k.giy(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bSy(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aDy[o]
m=new A.aO(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.d(D.aDT[o],j,j,j,j,j,j,D.fuu,j,j,j),B.au,new A.bz(1,B.bb,A.d(r[t],j,3,B.a2,j,j,j,D.fts,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.arU)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bZ5)
v.push(A.az(j,new A.SY(A.r(j,new A.c8(B.aL,B.e,B.i,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bG(l,l,l,l),new A.be(m,m,m,m),V.aBV,j,B.n),j,j,j,j,B.f5,j,j,j),p,B.b_,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.ae,w,B.ae,A.E(A.l_(1.45,v,2,10,10,j,B.e1,!1),4)],h)
if(i)h.push(D.euR)
return new A.D(B.a0S,A.x(h,B.l,j,B.e,B.i,0,B.p),j)},
cci(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cLS(),m=x.p,l=A.a([D.bdi,A.as(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.q0,o,o,o),o,o,o),A.as(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.VJ,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cU.j(0.25):B.dr
u=new A.aO(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cU:B.by,1,B.r,-1)
q=A.d(w<3?D.djD[w]:""+(w+1),o,o,o,o,o,o,B.mB,o,o,o)
s=s?B.u:B.U
l.push(A.r(o,new A.c8(B.aL,B.e,B.i,B.l,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.bz(1,B.bb,A.d(t.a,o,o,o,o,o,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.d(""+t.b,o,o,o,o,o,o,B.iG,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bG(r,r,r,r),new A.be(u,u,u,u),o,o,B.n),o,o,o,B.cy,B.eW,o,o,o))}l.push(B.W)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.Iz(m,v,p.CW,o))
l.push(B.aO)
l.push(A.as(C.uz("Back to the games",new C.bSv(p),B.cU,B.k7,D.fC),o,o,o))
return A.cm(l,o,o,B.fv,o,o,B.ah,!1)}}
C.U8.prototype={
S(){return new C.amc(A.T(x.de,x.er))}}
C.amc.prototype={
gD7(){var w,v=this,u=v.d
if(u===$){w=C.hm9(v.a.c.aj())
v.d!==$&&A.bE()
v.d=w
u=w}return u},
glT(d){var w,v,u=this,t=u.e
if(t===$){w=u.gD7().b
v=$.ax()
u.e!==$&&A.bE()
t=u.e=new A.au(new A.ba(w,B.b5,B.aP),v)}return t},
cfj(d){return this.f.c3(0,d,new C.bS3(d))},
Y(){this.a4()
var w=this.gD7().c
if(w.length===0)w.push(C.h7K(null,0,20,""))},
t(){var w,v,u=this.glT(0)
u.U$=$.ax()
u.P$=0
for(u=this.f,u=new A.dq(u,u.r,u.e);u.C();)for(w=J.aT(u.d);w.C();){v=w.gR(w)
v.U$=$.ax()
v.P$=0}this.a3()},
cKT(){if(this.gD7().c.length>=12)return
this.m(new C.bS4(this))},
jI(d){var w,v,u=this,t=u.gD7()
t.b=B.a.i(u.glT(0).a.a)
w=t.gapz(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.T(D.flq)
return}v=t.c
B.d.a8(v)
B.d.u(v,w)
v=u.c
v.toString
A.a6(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bSe(),r=x.p,q=A.a([A.bP(!1,D.fNd,t,t,!0,t,t,t,u.gbqk(u),t,t)],r),p=A.a([D.h18,B.ae,A.aM(t,B.Z,!1,t,!0,B.t,t,A.aP(),u.glT(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ac,t,t,t,t,t,t,t,t,t,t,t,B.h4,!0,B.a5,t,B.ao,t,t,t,t),B.aC],r)
for(w=0;v=u.gD7().c.length,w<v;++w)B.d.u(p,A.a([new A.fh(new C.bSd(u,w,s),t)],r))
if(v<12)p.push(A.as(C.uz("\uff0b Add a question",u.gcKS(),B.aT,t,B.c),t,t,t))
return new C.tI("Make your game",A.cm(p,t,t,D.bEu,t,t,B.ah,!1),q,t)}}
C.arj.prototype={
S(){return new C.aFq(A.a([],x._))},
bv(){return this.r.$0()},
qp(){return this.w.$0()},
ge3(){return this.c}}
C.aFq.prototype={
Y(){var w,v
this.a4()
this.wy()
w=this.a
v=w.c
if(v.length!==0)C.a8s(v,w.e,w.d.w)},
wo(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hiY(r,t.e,!1,s.w,new C.e3V(u),null,s),$async$wo)
case 2:w=3
return A.b(u.wy(),$async$wo)
case 3:return A.h(null,v)}})
return A.i($async$wo,v)},
a0M(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0M=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hiY(r,t.e,!0,s.w,new C.e3U(u),null,s),$async$a0M)
case 2:w=3
return A.b(u.wy(),$async$a0M)
case 3:return A.h(null,v)}})
return A.i($async$a0M,v)},
wy(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wy=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bs(q.a.c),$async$wy)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.e3X(q,p))
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
return A.b(C.Ho(q.a.c).dg(0,B.qA),$async$wy)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e3Y(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e3Z(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wy,v)},
Pf(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Pf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.T(D.fl0)
w=3
return A.b(C.Ho(t.a.c),$async$Pf)
case 3:r=e
w=4
return A.b(C.fYc(t.a.c,r),$async$Pf)
case 4:q=e
w=5
return A.b(C.Ho(t.a.c),$async$Pf)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e3T(t,p))
o=t.c.L(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(null,null,null,q?B.dL:B.d0,null,B.t,null,s,null,B.lI,null,null,null,null,null,null,null,null,null,null))
t.a.qp()
case 1:return A.h(u,v)}})
return A.i($async$Pf,v)},
Iw(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Iw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iu5(l),$async$Iw)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hWY(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b1y(q,p.e,l,"Each family tree costs $"+B.j.ad(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Iw)
case 4:if(!e||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
p=C.hCT(r)
o=Date.now()
n=t.a.c
m=new C.kZ(l,r.toUpperCase(),p,!0,B.Z,D.DJ,new A.V(o,0,!1),0,n,D.uN,B.cf)
w=5
return A.b(C.a46(n,m),$async$Iw)
case 5:w=6
return A.b(t.wy(),$async$Iw)
case 6:t.a.bv()
t.a.qp()
if(t.c==null){w=1
break}t.F3(m)
case 1:return A.h(u,v)}})
return A.i($async$Iw,v)},
F3(d){return this.ckf(d)},
ckf(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$F3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bs(u.a.c),$async$F3)
case 2:n=l.nA(k.dH(f,new C.e3W(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hC(m,new C.ard(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$F3)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a46(u.a.c,o),$async$F3)
case 6:case 5:w=7
return A.b(u.wy(),$async$F3)
case 7:u.a.qp()
return A.h(null,v)}})
return A.i($async$F3,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.H,o=new C.ul(p)
if(r.e)return A.as(A.n5(q,p?B.bu:B.bh,q,q,q,q,q,q,q,q),q,q,q)
if(J.ct(r.d)){w=p?B.eg:B.c
v=A.l(15)
u=A.aH(!1,B.a3,!0,q,A.aN(!1,q,!0,A.r(q,D.bWJ,B.f,q,q,new A.o(B.aV.j(0.12),q,A.K(B.aV,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cT,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcjj(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.as,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Gq(A.r(q,A.x(A.a([u,B.aO,t,B.T,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.m(q,q,p?B.bu:B.bh,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.e4,A.bJ(D.h4m,q,r.gaTg(),A.bp(B.bQ,q,q,q,q,q,Au.a1g,q,new A.b9(A.l(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.i,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bHb,q,q,1/0),15,B.ag,1.05,D.ad1,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.as,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b1],v)
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.X(B.zE,B.aV,q,q,q,q),q,q,q,new C.e40(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.X(B.zA,B.aV,q,q,q,q),q,q,q,r.gah2(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dh(E.asP,q,D.fKv,r.gaTg(),A.bp(B.bQ,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ae)
u.push(new C.Gq(r.cH1(J.t(r.d,s),o),14,B.ag,1,D.ad1,q))
B.d.u(w,u)}return A.x(A.a([p,B.aC,A.x(w,B.l,q,B.e,B.i,0,B.p)],v),B.E,q,B.e,B.i,0,B.p)},
cH1(d,e){var w=null,v=e.a,u=v?B.eg:B.c,t=A.l(14),s=A.K((v?B.ei:B.bP).j(0.55),B.r,1),r=A.a([new A.ab(0,B.G,B.w.j(v?0.35:0.08),B.ev,10)],x.V),q=A.l(14),p=A.r(w,D.bVO,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.l(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.m(w,w,v?B.aS:B.as,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaqz(),m=d.d?"":" \xb7 Public",l=d.y===D.kW?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bG,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.i,0,B.p),1)
return A.r(w,A.aH(!1,B.a3,!0,w,A.aN(!1,q,!0,new A.D(B.bI,A.A(A.a([p,B.bd,l,A.X(B.P2,v?B.bu:B.bh,w,w,w,w)],k),B.l,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e4_(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.ard.prototype={
S(){return new C.aFn(A.a([],x._),A.aR(x.N),A.baf())},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aFn.prototype={
Y(){var w,v,u=this
u.a4()
u.d=u.a.w
u.adI()
w=u.a
v=w.c
if(v.length!==0)C.a8s(v,w.e,w.d.w)},
t(){var w=this.w
w.U$=$.ax()
w.P$=0
this.a3()},
a3K(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3K=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yy("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e3l(r),s,null,!0,!0,x.y),$async$a3K)
case 3:if(e!==!0||t.c==null){w=1
break}t.K6()
t.m(new C.e3m(t,r))
w=4
return A.b(t.uy(),$async$a3K)
case 4:t.a.bv()
t.yy(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3K,v)},
cwH(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.x1$.push(new C.e3g(w,f,d,e))},
aVz(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dr()
u.ek(w,v,0,1)
u.k5(q,q,1,1)
this.w.sp(0,u)},
bdd(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eM(new Float64Array(16))
q.e7(r)
w=q.Dc()
v=B.j.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dr()
t.ek(r,u,0,1)
t.k5(v,v,1,1)
t.ek(-r,-u,0,1)
t.iY(0,q)
s.sp(0,t)},
adI(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bs(u.a.c),$async$adI)
case 2:t=s.nA(r.dH(e,new C.e2I(u)))
if(t!=null&&u.c!=null)u.m(new C.e2J(u,t))
return A.h(null,v)}})
return A.i($async$adI,v)},
yy(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
wo(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hiY(o,t,!1,r,new C.e3_(u),q.a,s),$async$wo)
case 2:n=A
m=J
w=3
return A.b(C.Ho(u.a.c),$async$wo)
case 3:p=n.nA(m.dH(e,new C.e30(u)))
if(p!=null&&u.c!=null)u.m(new C.e31(u,p))
return A.h(null,v)}})
return A.i($async$wo,v)},
K6(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cH(w,0)},
uy(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a46(t,s),$async$uy)
case 2:return A.h(null,v)}})
return A.i($async$uy,v)},
a2g(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a2g=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uA(q,t.a.c)){t.yy("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.ivi(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a2g)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.K6()
t.m(new C.e3f(t,r))
w=4
return A.b(t.uy(),$async$a2g)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2g,v)},
b3i(){var w=this.c
w.toString
A.a6(w,!1).ce(A.ed(new C.e2X(this),!1,null,x.H))},
a1_(){return this.ckh()},
ckh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a1_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.uA(m,t.a.c)){t.yy("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.P(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e3c(),A.U(s).k("Y<1>")).gJ(0)
s=A.et([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("ci.E"))
B.d.fg(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.L,null,new C.e3d(n,t,new C.ul(m.ax.a===B.H),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a1_)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.K6()
t.m(new C.e3e(t,o))
w=6
return A.b(t.uy(),$async$a1_)
case 6:case 5:if(o.a&&t.c!=null)t.b3i()
case 1:return A.h(u,v)}})
return A.i($async$a1_,v)},
WF(d){return this.bDU(d)},
bDU(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uA(r,t.a.c)){t.yy("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e2w(t,d),r,null,!0,!0,x.P),$async$WF)
case 3:s=f
if(s==null){w=1
break}t.K6()
t.m(new C.e2x(t,s))
w=4
return A.b(t.uy(),$async$WF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WF,v)},
a45(d){return this.cJg(d)},
cJg(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a45=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.e3o(u,d,new C.ul(s.ax.a===B.H)),t,null,!0,!0,x.H),$async$a45)
case 2:return A.h(null,v)}})
return A.i($async$a45,v)},
cgw(d){var w=this,v=w.d
v===$&&A.c()
if(C.uA(v,w.a.c))w.OV(d)
else w.a45(d)},
ajy(d,e){return this.cAF(d,e)},
cAF(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ajy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.e3i(new C.ul(r.ax.a===B.H),d,e),s,null,!0,!0,x.H),$async$ajy)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ajy,v)},
IB(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kW?3:5
break
case 3:w=6
return A.b(C.h5W(t.a.c),$async$IB)
case 6:s=e
o=t.a
r=C.hr0(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ajy(!s,!r),$async$IB)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aRh(o,t.a.c)){t.yy("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lq(o,"Cancel","Remove",q.y===D.kW?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$IB)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aRd(t.a.c,t.d.a),$async$IB)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.j3(o,null)
case 1:return A.h(u,v)}})
return A.i($async$IB,v)},
abc(d){return this.bP9(d)},
bP9(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$abc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uA(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aV(s,new C.e2y(p))){o=A.U(s)
p.a=A.nA(new A.cM(new A.Y(s,new C.e2z(d),o.k("Y<1>")),new C.e2A(),o.k("cM<1,n>")))}q=p.a
if(q==null)q=d.d
t.K6()
t.m(new C.e2B(t,s,d,q))
w=3
return A.b(t.uy(),$async$abc)
case 3:t.yy(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$abc,v)},
OV(d){return this.bRn(d)},
bRn(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uA(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a45(d),$async$OV)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.e2F(t,d),r,null,!0,!0,x.P),$async$OV)
case 6:s=f
if(s==null){w=1
break}t.K6()
t.m(new C.e2G(t,s))
w=7
return A.b(t.uy(),$async$OV)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OV,v)},
cHr(){var w=this,v=w.d
v===$&&A.c()
if(!C.uA(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e3n(w))
w.uy()},
ZH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aRh(n,t.a.c)){t.yy("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.ax()
r=new A.au(B.ax,s)
q=t.d.e
p=A.br(new A.N(q,t.gcf_(),A.U(q).k("N<1,n>")).bY(0,new C.e2S()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e2T(t,new C.ul(n.ax.a===B.H),p,r),q,null,!0,!0,x.y),$async$ZH)
case 3:o=e
r.U$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.K6()
t.m(new C.e2U(t,p))
w=4
return A.b(t.uy(),$async$ZH)
case 4:t.yy("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$ZH,v)},
cf0(d){return B.a.i(d.toLowerCase())},
cj3(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uA(v,w)
t=r.d
s=C.ijW(t)
C.iu9(q,t.b,u,C.ijV(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.H,m=new C.ul(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.e3v(),A.U(l).k("Y<1>")).gJ(0)
l=n?B.c4:B.i0
v=A.X(B.a2q,n?B.bu:B.bh,o,o,o,18)
u=x.p
v=A.a([new A.D(B.Cs,A.aN(!1,o,!0,new A.D(B.hL,A.A(A.a([v,B.bo,A.d("Back to Family Trees",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.O,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e3w(p,d),o,o,o,o,o,o,o),o),new A.D(B.nL,p.c1C(m),o)],u)
if(p.d.y===D.kW){t=B.tu.j(0.15)
s=A.l(12)
r=A.K(B.tu.j(0.45),B.r,1)
q=C.Hm(p.d,p.a.c)
v.push(new A.D(B.yR,A.r(o,A.A(A.a([D.c0f,B.au,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.hM,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b1],u)
if(C.uA(p.d,p.a.c)&&p.e.length!==0)u.push(new C.GC("Undo",B.pD,p.gcHq(),m,o,o))
u.push(new C.GC("Family Book",D.bQw,p.gcj2(),m,B.uk,o))
u.push(new C.GC("Family games",B.oJ,p.gcje(),m,B.aB,o))
if(C.uA(p.d,p.a.c))u.push(new C.GC("Display settings",B.Dh,p.gckg(),m,B.b3,o))
u.push(new C.GC("Sync",B.zA,p.gah2(),m,o,o))
t=p.d
if(t.y===D.kW||C.aRh(t,p.a.c)){t=p.d.y===D.kW?"Remove shared tree":"Delete tree"
u.push(new C.GC(t,B.ek,p.gbPj(),m,B.fi,o))}if(C.uA(p.d,p.a.c))u.push(new C.GC("Add member",B.wR,new C.e3x(p),m,B.bQ,o))
v.push(new A.D(Z.amB,A.A(u,B.l,o,B.e,B.i,0,o,o),o))
if(p.d.gaqz()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.co(new C.e3y(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?O.a2u:A5.P3,o,o,o,o,o)
v.push(A.as(A.hs(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e3z(p),o),o,o,o))}return A.c4(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c1C(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.l(22)
v=A.a([new A.ab(0,B.G,B.fZ.j(0.35),B.dp,18)],x.V)
u=A.l(22)
t=A.ap(-26,A.X(B.zr,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aH(!1,B.a3,!0,m,A.aN(!1,m,!0,A.r(m,D.c3z,B.f,m,m,new A.o(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cT,!0,m,m,m,m,m,m,m,m,m,m,m,n.gah2(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.fvx,m,m,m)
r=r.gaqz()
p=n.d.gaqz()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.E(A.x(A.a([q,B.bG,A.d(""+r+" "+p,m,m,m,m,m,m,A.m(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.i,0,B.p),1)],o)
if(C.uA(n.d,n.a.c))p.push(A.aI(m,m,m,m,D.c0t,m,m,m,n.gcu4(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.jL:B.n7
r=r?"Private":"Public"
r=A.E(n.ax7(q,"Privacy",r,n.a.d.w?n.gcGl():m),1)
q=A.E(n.ax7(B.wW,"Tree code",n.d.c,new C.e2H(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ae,A.A(A.a([r,B.af,q,B.af,A.E(n.ax7(D.bSc,"Collaborators",p,n.gc6o()),1)],o),B.l,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.kW){s=B.c.j(0.15)
B.d.u(p,A.a([B.T,A.aH(!1,B.a3,!0,A.l(999),A.aN(!1,A.l(999),!0,new A.D(B.hj,A.A(A.a([A.X(B.nQ,B.c,m,m,m,14),B.e8,A.d("View only",m,m,m,m,m,m,B.aWb,m,m,m)],o),B.l,m,B.e,B.O,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.aj)],o))}return A.r(m,A.bx(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.GX,A.x(p,B.E,m,B.e,B.i,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.c7T,B.n),m,m,m,m,m,m,m,1/0)},
ax7(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aH(!1,B.a3,!0,A.l(14),A.aN(!1,A.l(14),!0,new A.D(K.anO,A.x(A.a([A.X(d,B.c,w,w,w,18),B.aw,A.d(e,w,1,B.a2,w,w,w,A.m(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.vI,A.d(f,w,1,B.a2,w,w,w,An.AU,w,w,w)],x.p),B.l,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)}}
C.bh0.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bM
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bh3(s,t),new A.av(w,v))],x.p)
r=r.gdP(r)
B.d.u(u,r.dN(r,new C.dhw(this),x.l))
r=s.c
B.d.u(u,new A.N(r,new C.dhx(this),A.U(r).k("N<1,v>")))
return new A.D(B.uJ,new A.a5(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.L1.prototype={}
C.GG.prototype={}
C.bh2.prototype={
gblK(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aL2.prototype={}
C.bh3.prototype={
bQZ(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.S()
v=A.L()
v.r=B.bE.j(0.75).gp(0)
v.c=2
v.d=B.bv
d.ah(new A.p(n,w),new A.p(m,w),v)
u=(n+m)/2
t=new A.aG(q.r,B.ai,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.ko(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.ko(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bu())
q=A.L()
q.r=B.c.gp(0)
d.N(new A.p(u,w),9,q)
q=A.L()
q.r=B.bE.gp(0)
d.af(t,q)},
bQW(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.dhR())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aV(a0,new C.dhS(f))
t=new A.N(a0,new C.dhT(f),A.U(a0).k("N<1,G>")).bY(0,new C.dhU()).cF(0,1/0,B.rt)
w=f.a
d.ah(f,new A.p(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.p(o,v),p,e)
continue}l=J.lN(n)
k=Math.min(10,m/2)
m=$.S()
j=A.a([],r)
i=new A.aG(m.r,B.ai,null,null,j)
j.push(new A.aZ(w,v-k))
i.ab()
m=l*k
h=new A.c7(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.ak(h)
i.ab()
m=new A.c7(o,v,o,v+k)
j.push(m)
h=i.f
if(h!=null)m.ak(h)
i.ab()
o=new A.aq(o,p.b)
j.push(o)
m=i.f
if(m!=null)o.ak(m)
i.ab()
d.af(i,e)}},
a5(d,e){var w,v,u,t,s,r
$.S()
w=A.L()
w.r=B.bQ.j(0.75).gp(0)
w.c=2.2
w.b=B.a9
w.d=B.bv
w.e=B.dT
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bQW(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bQZ(d,w,r.a,r.b)}},
aE(d){return d.b!==this.b}}
C.bkP.prototype={
gcck(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aE9
switch(w.c.a){case 0:return D.d0S
case 1:return D.ddc
case 2:return D.dvt}},
gccn(){var w=this.c,v=C.hC3(w.w),u=C.hC3(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.H,q=t.gcck(),p=t.c,o=N.bFq(p.f),n=t.gccn(),m=x.V,l=A.a([new A.ab(0,B.G,B.d.gal(q).j(0.35),B.cL,10)],m),k=r?B.as:B.c,j=A.K(r?B.as:B.c,B.r,2)
if(o!=null)w=A.tM(B.A,s,B.ck,B.c0,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.r(B.A,A.d(v,s,s,s,s,s,s,A.m(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a7,B.aa,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.r(s,A.r(s,A.hY(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.aA,B.aD,B.x,q,s,s),B.a6),s,56,s,s,B.CI,s,s,56)],v)
k=t.d
if(k>0){j=A.l(10)
w=A.K(r?B.as:B.c,B.r,1.5)
l.push(A.ap(s,A.r(s,A.d(""+k,s,s,s,s,s,s,D.fGl,s,s,s),B.f,s,s,new A.o(B.ci,s,w,j,s,s,B.n),s,s,s,s,D.bJ9,s,s,s),s,s,s,-6,-4,s))}k=r?B.cm:B.c
j=A.l(8)
w=A.K(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ab(0,B.G,B.w.j(r?0.3:0.06),B.dN,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.m(s,s,r?B.c:B.cm,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.m(s,s,r?B.aR:B.bh,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.az(s,new A.a5(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.aw,A.r(s,A.x(p,B.l,s,B.e,B.O,0,B.p),B.f,s,D.b7s,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bJk,s,s,s)],v),B.l,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bg5.prototype={
a5(d,e){var w,v,u,t,s
$.S()
w=A.L()
v=this.b
u=v?B.c:D.bkv
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.N(new A.p(s,t),1,w)},
aE(d){return d.b!==this.b}}
C.byR.prototype={
B(d){var w=this,v=null,u=new C.fnA(w),t=w.c,s=t?B.cm:B.c,r=A.l(12),q=u.$3(B.i4,"Zoom in",w.d),p=A.r(v,v,B.f,t?B.by:B.ft,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.wT,"Zoom out",w.e)
return A.aH(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.r(v,v,B.f,t?B.by:B.ft,v,v,v,1,v,v,v,v,v,22),u.$3(B.aqj,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.O,0,B.p),B.f,s,4,v,B.dx,v,v,v,B.aj)}}
C.bob.prototype={
B(d){var w=this,v=null,u=B.bQ.j(0.15),t=A.K(B.bQ,B.r,2),s=w.e,r=x.p
t=A.az(v,A.r(v,A.x(A.a([A.X(s?O.a2u:A5.P3,B.bQ,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fCm,v,v,v)],r),B.l,v,B.ba,B.i,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fA7,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.u(t,new A.N(s,new C.eYC(w),A.U(s).k("N<1,v>")))
B.d.u(u,t)}return new A.a5(84,v,A.x(u,B.l,v,B.e,B.i,0,B.p),v)}}
C.a0m.prototype={
S(){return new C.aDR()},
bv(){return this.Q.$0()},
ge3(){return this.w}}
C.aDR.prototype={
Y(){var w,v,u,t,s,r=this,q=null
r.a4()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ax()
r.d!==$&&A.aQ()
r.d=new A.au(new A.ba(t,B.b5,B.aP),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.au(new A.ba(t,B.b5,B.aP),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.au(new A.ba(t,B.b5,B.aP),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.au(new A.ba(t,B.b5,B.aP),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.au(new A.ba(t,B.b5,B.aP),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.au(new A.ba(t,B.b5,B.aP),s)
t=u?q:v.c
r.y=t==null?D.z3:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.ilq(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.U$=$.ax()
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
v.a3()},
Qp(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Qp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hr0(p.y,p.w)
w=3
return A.b(A.lB(t.a.w,B.JC),$async$Qp)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b1y(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Qp)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hWZ(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(Aw.Hy(78,800),$async$Qp)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dxP(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Qp,v)},
ccm(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hZ(B.o.v(1000*Date.now()),w,D.z3,null,null,null,"","","","","",1,!1,0)
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
s=v.aGb(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).O(s)},
aaO(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aaO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dxO(r),s,null,!0,!0,x.y),$async$aaO)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aaO,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.H,i=new C.ul(j),h=l.a.e,g=A.U(h).k("Y<1>"),f=A.C(new A.Y(h,new C.dxY(l),g),g.k("M.E"))
h=j?B.eg:B.c
g=A.l(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bHy,A.d(w,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.as,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ap(k,A.h9(A.aN(!1,k,!0,new A.D(B.lN,A.X(B.ek,B.po,k,k,k,17),k),B.cT,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbLU(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jY:B.iN
t=N.bFq(l.as)
if(l.as==null)s=A.X(B.pv,j?B.bu:B.bh,k,k,k,40)
else s=k
s=A.as(A.az(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.hd(u,t,s,k,42),A.ap(0,A.hd(B.bQ,k,D.bUS,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gccj(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aDT(t,"Full name",B.mi,1,1,i,B.mz)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.W,new C.bkN(i,u,new C.dxZ(l),k)],v),B.l,k,B.e,B.i,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bAT],q)
o=l.a.e
B.d.u(p,new A.N(o,new C.dy_(),A.U(o).k("N<1,eL<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bAV],q)
B.d.u(q,new A.N(f,new C.dy1(),A.U(f).k("N<1,eL<n?>>")))
o=A.x(A.a([t,B.am,new C.aew(i,r,"Who is their parent?",p,new C.dy2(l),k,o),B.aC,n,B.am,new C.aew(i,m,"Who is their spouse / partner?",q,new C.dy3(l),k,o)],v),B.al,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.c()
q=C.aDT(q,"Birth date",D.aps,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aDT(m,"Birth place",B.a2K,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aDT(n,"Date of death (if deceased)",D.arz,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aDT(p,"Occupation",B.a3W,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ad,B.t,w,k),B.aC,s,B.bz,new C.aex(i,"Identity",u,k),B.ae,new C.aex(i,"Family links",o,k),B.ae,new C.aex(i,"Life details",A.x(A.a([q,B.W,m,B.W,n,B.W,p,B.W,C.aDT(r,"Notes",B.kX,5,3,i,k)],v),B.l,k,B.e,B.i,0,B.p),k),B.ae,new C.aDS(i,"Child order",l.ckv(l.at),new C.dy4(l),new C.dy5(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hg3(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dy6(l):k
B.d.u(r,A.a([B.W,new C.aDS(i,"Visible in tree",u,w,new C.dy7(l),k)],v))}r.push(B.W)
w=j?B.jY:B.iN
u=A.l(14)
t=A.K(j?B.ei:B.bP,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.as,k,k,k,k,k,k,k,k,14,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.r(k,A.iU(k,B.bQ,k,B.ag,k,new C.dy8(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,O.amg,k,k,k))
r.push(B.bz)
w=j?B.aS:B.as
j=j?B.ei:B.bP
r.push(A.A(A.a([A.E(A.dV(B.o5,new C.dy0(d),A.dj(k,k,k,k,k,k,k,k,k,w,k,k,B.cp,k,new A.b9(A.l(14),B.a1),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bd,A.E(A.bJ(D.fcE,k,l.gccl(),A.bp(B.aV,k,k,0,B.c,k,B.cp,k,new A.b9(A.l(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.i,0,k,k))
r.push(B.aw)
return A.ej(B.f7,k,B.ag,h,new A.a5(420,k,A.cb(A.x(r,B.al,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),k),D.an7,k,B.ams,new A.b9(g,B.a1),k,k)},
ckv(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aex.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jY:B.iN,s=A.l(16)
return A.x(A.a([new A.D(B.a1k,u,w),A.r(w,this.e,B.f,w,w,new A.o(t,w,A.K(v?B.ei:B.bP,B.r,1),s,w,w,B.n),w,w,w,w,B.bk,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)}}
C.bkO.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.eg:B.c,r=A.l(12),q=A.K((t?B.ei:B.bP).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.m(u,u,t?B.aS:B.as,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.r(u,A.aM(u,B.Z,!1,u,!0,B.t,u,A.aP(),v.d,u,u,u,u,u,2,A.bA(u,B.eO,u,B.t1,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.m(u,u,t?B.bu:B.bh,u,u,u,u,u,u,u,u,u,u,u,B.cE,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bQ,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ac,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aew.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.eg:B.c,s=A.l(12),r=A.K((u?B.ei:B.bP).j(0.85),B.r,1),q=A.X(B.tc,u?B.bu:B.bh,v,v,v,v),p=A.m(v,v,u?B.aS:B.as,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.eg:B.c
return A.r(v,new A.Er(A.a5C(v,o,A.d(w.f,v,v,v,v,v,v,A.m(v,v,u?B.bu:B.bh,v,v,v,v,v,v,v,v,v,v,v,B.cE,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kx,v,v,v)}}
C.bkN.prototype={
B(d){var w=new C.dy9(this)
return A.A(A.a([w.$3(D.wG,"Male",B.PO),B.af,w.$3(D.oA,"Female",B.Py),B.af,w.$3(D.z3,"Other",B.nP)],x.p),B.l,null,B.e,B.i,0,null,null)}}
C.aDS.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jY:B.iN,r=A.l(14),q=A.K(t?B.ei:B.bP,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.m(v,v,t?B.aS:B.as,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.r(v,A.A(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bh,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.i,0,B.p),1),new C.aK4(u,B.wT,w.f,v),B.bo,new C.aK4(u,B.i4,w.r,v)],o),B.l,v,B.e,B.i,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ez,v,v,v)}}
C.aK4.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bQ.j(0.12)
else w=s.c.a?B.eg:B.c
v=A.l(10)
u=A.l(10)
if(p)t=B.bQ
else t=(s.c.a?B.bu:B.bh).j(0.4)
return A.aH(!1,B.a3,!0,v,A.aN(!1,u,!0,new A.a5(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.aj)}}
C.aey.prototype={
bVa(d){switch(d.a){case 0:return B.bQ
case 1:return B.bE
case 2:return B.cB}},
bVb(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b_6(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AN(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.eg:B.c
u=A.l(12)
t=A.K((w?B.ei:B.bP).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.X(f,B.bQ,p,p,p,18),B.au],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.m(p,p,w?B.bu:B.bh,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.aw,A.d(o,p,p,p,p,p,p,A.m(p,p,w?B.aS:B.as,p,p,p,p,p,p,p,p,14,p,p,B.U,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.i,0,B.p),1))
return A.r(p,A.A(r,B.E,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cy,B.yN,p,p,1/0)},
afp(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jY:B.iN,s=A.l(16),r=A.K(v?B.ei:B.bP,B.r,1)
return A.x(A.a([new A.D(B.a1k,u,w),A.r(w,A.x(e,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bV,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hHx(r,q),o=q.c,n=t.bVa(o),m=N.bFq(q.f),l=t.e.a,k=l?B.eg:B.c,j=A.l(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.m(s,s,l?B.aS:B.as,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kW?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.m(s,s,l?B.bu:B.bh,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.ab(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.as(A.r(s,A.hd(u,m,m==null?A.X(B.pv,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.eC,s,s,s),s,s,s)
w=n.j(0.14)
v=A.l(20)
u=A.K(n.j(0.45),B.r,1)
v=A.as(A.r(s,A.d(t.bVb(o),s,s,s,s,s,s,A.m(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.me,s,s,s),s,s,s)
u=x.p
i=A.a([t.AN("Full name",i,B.mi)],u)
if(p>0)i.push(t.AN("Child order","#"+p,B.PE))
r=A.a([h,B.aw,r,B.aO,l,B.W,v,B.bz,t.afp("Identity",i),B.ae,t.afp("Life details",A.a([t.AN("Birth date",q.w,D.aps),t.AN("Birth place",q.x,B.a2K),t.AN("Date of death",q.y,D.arz),t.AN("Occupation",q.z,B.a3W)],u)),B.ae,t.afp("Family links",A.a([t.AN("1. Parent",t.b_6(q.d),B.Hn),t.AN("2. Spouse",t.b_6(q.e),B.HD)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.ae,t.afp("Notes",A.a([t.AN("Notes",q,B.kX)],u))],u))
r.push(B.bz)
r.push(A.bJ(B.L7,s,new C.dyj(d),A.bp(B.aV,s,s,s,s,s,B.cp,s,new A.b9(A.l(14),B.a1),s,s,s)))
return A.eG(s,k,new A.cO(B.m2,A.cb(A.x(r,B.al,s,B.e,B.O,0,B.p),B.t,s,B.y,s,B.yU,s,s,B.ah),s),s,s,s,B.H_,s,B.d8,s,new A.b9(j,B.a1),s)}}
C.GC.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bh
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uL,A.h9(A.aH(!1,B.a3,!0,A.l(8),A.aN(!1,A.l(8),!0,new A.a5(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.aj),u,v.c,u,u),u)}}
C.arg.prototype={
f3(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.U(w).k("N<1,a9<n,@>>")
w=A.C(new A.N(w,new C.cfA(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jr(w,new C.cfB(),t,x.fO))
return s}}
C.arh.prototype={
S(){return new C.aFp(A.a([],x.bF))},
gd1(){return this.c}}
C.aFp.prototype={
Y(){this.a4()
this.Kd()},
Kd(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Kd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cfE(t.a.c),$async$Kd)
case 3:r=e
w=4
return A.b(C.Bs(t.a.c),$async$Kd)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rn(q,new C.e3I(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e3J(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Kd,v)},
z6(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
L1(d,e){return this.cJX(d,e)},
cJX(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$L1=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e3N(q,e))
t=3
w=6
return A.b(d.$0(),$async$L1)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e3O(q))
$.eY.mF()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$L1,v)},
Yr(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pA(r,s.c,s.e),$async$Yr)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.L1(new C.e3F(t),"Preparing download\u2026"),$async$Yr)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yr,v)},
Yv(d){return this.bT2(d)},
bT2(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pA(r,s.c,s.e),$async$Yv)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.L1(new C.e3G(t,d),"Preparing file\u2026"),$async$Yv)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yv,v)},
ahp(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ahp=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xR.cq().ML(B.SM,B.uO,!0),$async$ahp)
case 7:r=e
o=r
q=o==null?null:J.fp(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jM(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.ac(m)
$.am.$1("[family tree sync pick] file_picker: "+A.w(p))
w=6
break
case 3:w=2
break
case 6:u=A.Hx()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahp,v)},
Z9(d){return this.c2x(d)},
c2x(d){var w=0,v=A.j(x.H),u=this
var $async$Z9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.L1(new C.e3H(u,d),"Restoring family trees\u2026"),$async$Z9)
case 2:return A.h(null,v)}})
return A.i($async$Z9,v)},
Z8(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Z8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ahp(),$async$Z8)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Z9(s),$async$Z8)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Z8,v)},
a37(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a37=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pA(r,s.c,s.e),$async$a37)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.L1(new C.e3M(t),"Creating QR code\u2026"),$async$a37)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a37,v)},
a2J(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2J=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DF()){t.z6("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).ce(A.ed(new C.e3K(),!0,null,x.N)),$async$a2J)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Z9(r),$async$a2J)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2J,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.H,n=o?B.BV:B.i0,m=o?D.akJ:B.aS,l=o?B.aM:B.bP,k=o?B.aS:B.as,j=new C.dhV(n,m,l,k,o?B.bN:B.bh)
l=A.aI(p,p,p,p,A.X(B.eM,k,p,p,p,20),p,p,p,new C.e3Q(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eR(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.dht(!0,B.jN,B.aG,B.aG,q.r?p:q.gcAt(),j,s,"Show restore QR"),1),B.au],u))}s=q.e
r=q.r?p:q.gcwC()
t.push(A.E(C.dht(!s,B.ju,B.b8,B.bc,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.dht(!1,B.hP,B.aV,B.bQ,q.r?p:q.gbSW(),j,"Photos & books included","Download all trees"),1),B.au],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dht(!1,Q.zB,B.at,B.aQ,q.r?p:q.gc2u(),j,s,"Upload backup file"),1))
l=A.a([new C.bh1(v,l,p),B.l5,new C.adN(j,"QR restore",p),B.W,t,B.dc,new C.adN(j,"Backup files",p),B.W,A.A(r,B.l,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.l5,new C.adN(j,"One tree",p),B.W],u)
B.d.u(v,J.b7(q.d,new C.e3R(q,j),x.l))
B.d.u(l,v)}l=A.a([A.cm(l,p,p,B.a1c,p,p,B.ah,!1)],u)
if(q.r){v=A.l(18)
t=A.K(B.aV.j(0.35),B.r,1)
s=A.a([new A.ab(0,B.G,B.w.j(o?0.3:0.1),B.dp,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ap(24,A.bm(!0,A.r(p,A.A(A.a([O.aUz,B.bd,A.E(A.d(r,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.U,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.Cz,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c4(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.dhV.prototype={}
C.bh1.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.l(24)
u=A.a([new A.ab(0,B.G,B.aV.j(0.32),B.kD,28)],x.V)
t=A.ap(p,A.X(B.v8,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.l(18)
q=x.p
return A.r(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ac,A.A(A.a([A.r(p,D.c32,B.f,p,p,new A.o(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.p3,A.E(A.x(A.a([D.fLy,B.T,A.d(w,p,p,p,p,p,p,A.m(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.i,0,B.p),1)],q),B.E,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.cba,B.n),p,p,p,p,p,p,p,p)}}
C.adN.prototype={
B(d){var w=null
return A.A(A.a([A.r(w,w,B.f,w,w,new A.o(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3),B.af,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)}}
C.bh_.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.l(18),n=A.l(18),m=r.c,l=r.y,k=l?B.aG.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.ab(0,B.G,B.aG.j(0.1),B.cL,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.l(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aH(!1,B.a3,!0,q,A.aN(!1,o,!0,A.eB(A.d3(new A.D(E.a0Q,A.x(A.a([A.r(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.t5,q,q,q),B.ae,A.d(r.e,q,q,q,q,q,q,A.m(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bG,A.d(r.f,q,q,q,q,q,q,A.m(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cE,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.i,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)}}
C.bh4.prototype={
B(d){var w=this,v=null,u=A.l(18),t=A.l(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aV.j(0.14),p=A.l(12),o=s.e,n=x.p
return A.aH(!1,B.a3,!0,v,A.aN(!1,u,!0,A.eB(new A.D(B.eW,A.A(A.a([A.r(v,D.c2e,B.f,v,v,new A.o(q,v,A.K(B.aV.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.t5,v,v,v),B.bd,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.m(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.m(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.i,0,B.p),1),A.X(B.hP,o,v,v,v,20)],n),B.l,v,B.e,B.i,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.aj)}}
C.a0G.prototype={
S(){return new C.aFo()},
gd1(){return this.c}}
C.aFo.prototype={
Y(){this.a4()
this.aal()},
aal(){var w=0,v=A.j(x.H),u=this,t
var $async$aal=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b4c(u.a.c,B.Ek),$async$aal)
case 2:t=e
if(u.c!=null)u.m(new C.e3A(u,t))
return A.h(null,v)}})
return A.i($async$aal,v)},
aiR(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aiR=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e3B(q))
t=4
p=A.hsL(q.a.d,B.Ek)
if(p==null){n=A.bc("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.aty(n.e,m,l,B.Ek,p,n.f),$async$aiR)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e3C(q))
q.c.L(x.q).f.T(D.fme)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ac(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(B.a.eo(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e3D(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aiR,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.H,o=p?B.nD:B.qp,n=p?B.iJ:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eR(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.h12,q,q,q,1,q,!0)
w=A.l(24)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.qf(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.m(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.r(q,A.x(A.a([B.T,u,B.bz,t,B.T,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.m(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.ba,B.i,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.ac,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.m(q,q,p?B.ab:B.bx,q,q,q,q,q,q,q,q,q,q,q,B.U,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcwl()
if(u)u=B.Ky
else u=A.X(r.e===!0?B.hO:B.apr,q,q,q,q,q)
w=A.a([w,B.ae,v,B.ae,new A.a5(1/0,q,A.ep(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ce,q,q,q),t,A.dj(q,q,q,q,q,q,q,q,q,B.aV,q,B.hb,q,q,q,new A.ay(B.aV.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i2,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.m(q,q,p?B.aF:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.W)
w.push(new A.a5(1/0,q,A.bJ(B.B3,q,new C.e3E(d),A.bp(B.aV,q,q,q,q,B.hb,q,q,q,q,q,q)),q))
return A.c4(m,o,new A.D(B.ac,A.x(w,B.l,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a0H.prototype={
S(){return new C.bmk(A.zZ(B.yC,B.oc,B.vf))}}
C.bmk.prototype={
t(){this.d.t()
this.a3()},
B(d){var w=null
return A.c4(A.eR(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fTM,w,w,w,1,w,!0),B.w,A.zY(this.d,B.c0,new C.e3S(this,d)),w,!1,!1,w,w)}}
C.b03.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.m(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Sg,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lZ.prototype={}
C.a7u.prototype={
S(){return new C.blY(null,null)}}
C.blY.prototype={
Y(){var w=this,v=null
w.a4()
w.d=A.bl(v,B.rX,v,1,v,w)
w.e=A.bl(v,B.ou,v,1,v,w)
w.a.toString
w.d.cL(0)
w.e.cL(0)},
bz(d){var w,v,u=this
u.bJ(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cL(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cL(0)},
t(){var w=this.d
w===$&&A.c()
w.t()
w=this.e
w===$&&A.c()
w.t()
this.bz7()},
B(d){var w,v,u=this,t=B.d.dL(D.a6T,new C.dPW(u),new C.dPX())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cDl(A.c6(new A.ha(A.a([w,v],x.dS)),new C.dPY(u,t),null),!0)}}
C.blX.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b3J(d,e)
break
case"house":p.mj(d,e,D.dik)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdA()
$.S()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.N(new A.p(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mp(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.By(d,e,12)
p.yI(d,e,B.lg,5,14)
break
case"grocery":p.cle(d,e)
break
case"calculator":p.ckW(d,e)
break
case"lumber":p.clm(d,e)
break
case"kitchen":p.clh(d,e)
break
case"landscape":p.mj(d,e,D.diY)
s=new A.aG($.S().r,B.ai,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.c7(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.c7(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.bu())
w=A.L()
w.r=B.es.j(0.85).gp(0)
d.af(s,w)
p.By(d,e,8)
p.yI(d,e,B.ig,4,18)
break
case"plumbing":p.clv(d,e)
break
case"electrical":p.mj(d,e,D.duE)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.S()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.ar(new A.a1(0,0,0+e.a,0+e.b),u)
p.mp(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mp(d,e,B.m7.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.By(d,e,10)
break
case"store":p.clF(d,e)
break
case"paint_remodel":p.clq(d,e)
break
case"roofing":p.clx(d,e)
break
case"warehouse":p.clM(d,e)
break
case"vehicles":p.clK(d,e)
break
case"farm":p.cl8(d,e)
break
case"restaurant":p.clw(d,e)
break
case"tools":p.clI(d,e)
break
case"wallet":p.clL(d,e)
break
case"concrete":p.cl1(d,e)
break
case"blueprint":p.ckU(d,e)
break
default:p.b3J(d,e)}},
mj(d,e,f){var w,v=new A.a1(0,0,0+e.a,0+e.b)
$.S()
w=A.L()
w.sav(new A.a8(B.aA,B.aD,B.x,f,null,null).aK(0,v))
d.ar(v,w)},
mp(d,e,f,g,h){var w,v,u,t=new A.p(e.a/2,e.b/2),s=e.gdA()/2-h
$.S()
w=A.L()
w.b=B.a9
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cB(A.bZ(t,s),u,u+0.1439896632895322-u,!1,w)}},
yI(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdA()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.S()
r=new A.ao(B.P,B.M,B.R,B.S,B.Q)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.N(new A.p(q+t*o,p+s*o),3.5,r)}},
By(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.j.F(t*0.17,0.9)
q=B.j.F(t*0.23,0.85)
$.S()
p=new A.ao(B.P,B.M,B.R,B.S,B.Q)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.N(new A.p(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b3J(d,e){var w,v=this
v.mj(d,e,D.dsX)
w=v.c
v.mp(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mp(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bQS(d,e,B.hz,w)
v.yI(d,e,B.c.j(0.7),6,8)},
bQS(d,e,f,g){var w,v,u,t,s,r
$.S()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.ar(new A.a1(16,r,t,r+3),w)}},
cle(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mj(d,e,D.cwS)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.aq(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.S()
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.r=D.dgt[B.o.F(t,4)].j(0.85).gp(0)
d.N(new A.p(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mp(d,e,B.c.j(0.35),w,16)
l.yI(d,e,B.ig,5,12)},
ckW(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mj(d,e,D.cx0)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdA()
$.S()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.N(new A.p(t/2,s/2),r*(0.18+u*0.08),q)
p=A.ft(h,B.ct,h,h,h,h,B.a5,B.bX,h,B.dE,B.bY)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dkN[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb1(0,new A.eq(r,h,h,B.cN,h,h,h,h,h,h,new A.F(!0,q,h,h,h,h,14+m*4,B.I,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a5(d,new A.p(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.aq(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cx2[o]
l=B.kM.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb1(0,new A.eq(m,h,h,B.cN,h,h,h,h,h,h,new A.F(!0,l,h,h,h,h,12+k*3,B.I,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a5(d,new A.p(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.aq(o,3)*0.38)+Math.sin(n)*6))}i.mp(d,e,B.c.j(0.35),w*1.5,14)
i.mp(d,e,B.ey.j(0.55),-v*3.141592653589793*2,8)
i.mp(d,e,B.om.j(0.4),r*2.8,22)
i.yI(d,e,B.pj,8,10)
i.By(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.j.F(w+o*0.22,0.9)
$.S()
v=new A.ao(B.P,B.M,B.R,B.S,B.Q)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.p(12,j),new A.p(t,j),v)}},
clm(d,e){var w,v,u,t,s,r,q,p,o=this
o.mj(d,e,V.aBd)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bn(new A.a1(20,r,u,r+10),B.hW)
$.S()
p=new A.ao(B.P,B.M,B.R,B.S,B.Q)
p.r=A.ar(B.fA,B.og,(s+1)/2).gp(0)
d.an(q,p)}o.mp(d,e,B.fA.j(0.35),w,15)
o.By(d,e,8)},
clh(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mj(d,e,D.dgY)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.j.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.j.F(s*0.13,0.7)
$.S()
m=new A.ao(B.P,B.M,B.R,B.S,B.Q)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.N(new A.p(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mp(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
l.yI(d,e,B.qe,4,14)},
clv(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mj(d,e,D.d4Z)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.j.F(s,0.12)
$.S()
o=new A.ao(B.P,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.N(new A.p(w,u),q*(0.12+r*0.14+p),o)}n.yI(d,e,B.pn,6,12)
n.mp(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
clF(d,e){var w,v,u,t,s,r,q,p=this
p.mj(d,e,D.cKN)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bn(new A.a1(r,14,r+u,22),B.iF)
$.S()
q=new A.ao(B.P,B.M,B.R,B.S,B.Q)
q.r=A.ar(B.fq,B.bL,(s+1)/2).gp(0)
d.an(r,q)}p.mp(d,e,B.c.j(0.3),w,16)
p.By(d,e,8)
p.yI(d,e,B.wf,5,13)},
clq(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.dbo)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.j.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bn(new A.a1(r,q,r+8,q+(18+s*22)),B.hX)
$.S()
r=new A.ao(B.P,B.M,B.R,B.S,B.Q)
r.r=[B.ix,B.dn,B.bL,B.et][t].j(0.85).gp(0)
d.an(q,r)}this.mp(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
clx(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.d8L)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.j.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.S()
q=new A.ao(B.P,B.M,B.R,B.S,B.Q)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.p(u*(0.1+r),s),new A.p(u*(0.18+r),s+10),q)}this.yI(d,e,B.cx,7,11)},
clM(d,e){var w,v,u,t,s,r,q,p
this.mj(d,e,D.cNz)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bn(new A.a1(q,p,q+(t-s*8),p+16),B.hW)
$.S()
q=new A.ao(B.P,B.M,B.R,B.S,B.Q)
q.r=A.ar(B.cx,B.aS,(Math.sin(r)+1)/2).gp(0)
d.an(p,q)}this.mp(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
clK(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.dyX)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.j.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bn(new A.a1(s,r,s+28,r+8),B.hW)
$.S()
q=new A.ao(B.P,B.M,B.R,B.S,B.Q)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.an(r,q)}this.By(d,e,6)},
cl8(d,e){var w,v,u,t,s,r,q,p
this.mj(d,e,D.dfx)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.S()
s=A.L()
s.r=B.m7.j(0.75).gp(0)
d.N(new A.p(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ao(B.P,B.M,B.R,B.S,B.Q)
p.r=B.hx.j(0.85).gp(0)
p.c=3
d.ah(new A.p(q,v),new A.p(q+s*6,t),p)}this.mp(d,e,B.m7.j(0.35),w,14)},
clw(d,e){var w,v,u,t,s,r,q=this
q.mj(d,e,D.di8)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bt(new A.p(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.S()
r=new A.ao(B.P,B.M,B.R,B.S,B.Q)
r.r=B.c.j(0.22).gp(0)
d.bZ(s,r)}q.yI(d,e,B.qe,5,16)
q.By(d,e,7)},
clI(d,e){var w,v,u,t,s,r,q,p,o=this
o.mj(d,e,D.dwh)
w=o.c
v=w*3.141592653589793
o.mp(d,e,B.og.j(0.55),v*3,10)
o.mp(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new A.ao(B.P,B.M,B.R,B.S,B.Q)
p.r=B.og.j(0.8).gp(0)
d.N(new A.p(v+r*34,u+q*22),4,p)}},
clL(d,e){var w,v,u,t,s,r,q,p,o=this
o.mj(d,e,D.dzE)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bn(new A.a1(q,p,q+36,p+22),B.iF)
$.S()
q=new A.ao(B.P,B.M,B.R,B.S,B.Q)
q.r=A.ar(B.ig,B.m7,r).gp(0)
d.an(p,q)}o.By(d,e,9)
o.mp(d,e,B.c.j(0.4),w*2.2,12)},
cl1(d,e){var w,v,u,t,s,r,q,p
this.mj(d,e,D.dnL)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bZ(new A.p(v,u),34)
$.S()
s=A.L()
s.b=B.a9
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cB(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ao(B.P,B.M,B.R,B.S,B.Q)
p.r=B.bP.j(0.85).gp(0)
d.N(new A.p(v+t*34,u+s*34),3,p)}},
ckU(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.djh)
$.S()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.p(t,0),new A.p(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.p(0,s),new A.p(v,s),w)
r=this.c
q=u*B.j.F(r*0.85,1)
$.S()
u=A.L()
u.r=B.dn.j(0.45).gp(0)
d.ar(new A.a1(0,q,0+v,q+6),u)
this.mp(d,e,B.lg.j(0.45),-r*3.141592653589793*2,11)},
aE(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.auj.prototype={
a0n(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0n=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aSa(),$async$a0n)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a9N(s),$async$a0n)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0n,v)},
ahq(d){return this.co3(d)},
co3(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iuj(d),$async$ahq)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ahq,v)},
B(d){var w,v,u=null,t=A.P(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.H?B.jY:B.iN
w=x.p
v=A.a([C.aSy(!0,B.rq,1/0,B.qL,u,s,1/0)],w)
if(!r)v.push(new A.bN(new A.o(u,u,u,u,u,new A.a8(B.b0,B.b7,B.x,A.a([B.L,B.w.j(0.35)],x.O),u,u),B.n),B.bi,new A.bL(B.b0,u,u,new A.D(B.t_,A.d("Pick a theme or your own photo",u,u,u,u,u,u,A.m(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,B.aCd,u,u),u,u,u),u),u),u))
v.push(A.ap(8,A.A(A.a([A.E(A.dh(D.bWC,u,D.fHI,new C.cp5(this,d),A.bp(B.aV,u,u,u,B.c,u,B.k2,u,u,u,u,B.ch)),1),B.af,A.E(A.ep(D.c4l,D.fWZ,this.gceY(),A.dj(u,u,B.w.j(0.35),u,u,u,u,u,u,B.c,u,u,B.k2,u,u,D.b6_,u,u,u,B.ch)),1)],w),B.l,u,B.e,B.i,0,u,u),u,u,8,8,u,u))
return new A.fH(1.7777777777777777,A.aH(!1,B.a3,!0,B.rq,new A.an(B.a0,u,B.b2,B.t,v,u),B.aq,t,0,u,u,u,u,u,B.aj),u)}}
C.aNu.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.aVu.prototype={}
C.aVt.prototype={}
C.aTw.prototype={}
C.a_k.prototype={
S(){return new C.aAA()}}
C.aAA.prototype={
Y(){var w,v,u=this
u.a4()
u.a.toString
w=new A.ba("",B.b5,B.aP)
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.ax()
w.P$=0
this.a3()},
KR(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.T(D.fmK)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).O(new C.aVu(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.H,l=m?B.eg:B.c,k=A.l(20),j=A.r(n,D.c40,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.l(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.m(n,n,m?B.aS:B.as,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bG,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bh,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.i,0,B.p),1)
j=A.A(A.a([j,B.bd,i,A.aI(n,n,n,n,A.X(B.cC,m?B.bu:B.bh,n,n,n,n),n,n,n,new C.d95(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.i,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bh,n,n,n,n,n,n,n,n,12,n,n,B.U,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bh,n,n,n,n,n,n,n,n,11,n,n,B.cE,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.ht0(new C.d96(o),o.e)
u=o.d
u===$&&A.c()
t=A.m(n,n,m?B.aS:B.as,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jY:B.iN
r=A.l(12)
q=A.l(12)
p=m?B.ei:B.bP
t=A.aM(n,B.Z,!0,n,!0,B.t,n,A.aP(),u,n,n,n,n,n,2,A.bA(n,new A.b6(4,r,B.dv),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d97(o),n,!1,n,n,!1,n,!0,n,B.ac,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,A_.KG,n,n,n,n)
u=m?B.aS:B.as
m=m?B.ei:B.bP
return A.eG(n,l,new A.cO(B.m2,A.cb(A.x(A.a([j,B.aO,i,B.aw,w,B.T,v,B.aO,t,B.bz,A.A(A.a([A.E(A.dV(B.dt,new C.d98(d),A.dj(n,n,n,n,n,n,n,n,n,u,n,n,B.cp,n,new A.b9(A.l(12),B.a1),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.au,A.E(A.bJ(D.fXe,n,o.ga3t(),A.bp(B.aV,n,n,n,B.c,n,B.cp,n,new A.b9(A.l(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.i,0,n,n)],h),B.E,n,B.e,B.O,0,B.p),B.t,n,B.y,n,B.CB,n,n,B.ah),n),n,n,n,A1.CC,n,B.d8,n,new A.b9(k,B.a1),n)}}
C.a_j.prototype={
S(){return new C.aAz()}}
C.aAz.prototype={
Y(){this.a4()
var w=$.ax()
this.d!==$&&A.aQ()
this.d=new A.au(B.ax,w)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.ax()
w.P$=0
this.a3()},
KR(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.T(D.fkl)
return}v=this.c
v.toString
A.a6(v,!1).O(new C.aVt(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.H,o=p?B.eg:B.c,n=A.l(20),m=A.r(q,D.c0k,B.f,q,q,new A.o(B.bQ.j(0.15),q,q,A.l(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.as,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bG,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.m(q,q,p?B.bu:B.bh,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.i,0,B.p),1)
m=A.A(A.a([m,B.bd,l,A.aI(q,q,q,q,A.X(B.cC,p?B.bu:B.bh,q,q,q,q),q,q,q,new C.d91(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.i,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.l(12)
v=A.K(B.aV.j(0.25),B.r,1)
u=A.X(B.apd,B.aV.j(0.9),q,q,q,18)
l=A.r(q,A.A(A.a([u,B.au,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.as,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.i,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bI,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.m(q,q,p?B.aS:B.as,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jY:B.iN
t=A.l(12)
s=A.l(12)
r=p?B.ei:B.bP
v=A.aM(q,B.Z,!0,q,!0,B.t,q,A.aP(),w,q,q,q,q,q,2,A.bA(q,new A.b6(4,t,B.dv),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d92(this),q,!1,q,q,!1,q,!0,q,B.ac,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.l6,q,q,q,q)
w=p?B.aS:B.as
p=p?B.ei:B.bP
return A.eG(q,o,new A.cO(B.m2,A.cb(A.x(A.a([m,B.aO,l,B.aC,v,B.bz,A.A(A.a([A.E(A.dV(B.dt,new C.d93(d),A.dj(q,q,q,q,q,q,q,q,q,w,q,q,B.cp,q,new A.b9(A.l(12),B.a1),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.au,A.E(A.bJ(D.h3i,q,this.ga3t(),A.bp(B.bQ,q,q,q,B.c,q,B.cp,q,new A.b9(A.l(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.i,0,q,q)],k),B.E,q,B.e,B.O,0,B.p),B.t,q,B.y,q,B.CB,q,q,B.ah),q),q,q,q,A1.CC,q,B.d8,q,new A.b9(n,B.a1),q)}}
C.ZR.prototype={
S(){return new C.azi()}}
C.azi.prototype={
Y(){var w,v=this
v.a4()
w=$.ax()
v.d!==$&&A.aQ()
v.d=new A.au(B.ax,w)
v.e!==$&&A.aQ()
v.e=new A.au(new A.ba("1",B.b5,B.aP),w)
v.f!==$&&A.aQ()
v.f=new A.au(B.ax,w)
v.r!==$&&A.aQ()
v.r=new A.au(B.ax,w)},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.U$=$.ax()
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
v.a3()},
gK8(){var w,v=this.e
v===$&&A.c()
w=A.cW(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gakB(){var w=this.f
w===$&&A.c()
w=A.cW(B.a.i(w.a.a))
return w==null?0:w},
gb6w(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aQR(d){var w,v=B.j.D(this.gK8()+d,0.25,999999),u=B.j.iI(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.v(B.j.M(v))
else{u=B.j.ad(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb1(0,u)
this.m(new C.cHs())},
azT(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jY:B.iN,s=A.l(14),r=A.l(14)
u=u?B.ei:B.bP
return A.bA(w,new A.b6(4,s,B.dv),w,B.bI,w,w,w,w,!0,new A.b6(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.l(14),B.aez),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
ceZ(d,e,f){return this.azT(d,e,f,null)},
KR(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gakB()<=0){s.c.L(x.q).f.T(D.foF)
return}r=s.c
r.toString
v=s.gK8()
u=s.gakB()
t=s.gb6w()
A.a6(r,!1).O(new C.aTw(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.H,m=new C.ul(n),l=n?B.eg:B.c,k=A.l(24),j=x.O,i=A.a([B.aV.j(0.22),B.bQ.j(0.14)],j),h=A.l(14)
i=A.r(o,D.bUy,B.f,o,o,new A.o(o,o,A.K(B.aV.j(0.35),B.r,1),h,o,new A.a8(B.a7,B.aa,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bG,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.cE,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1)
i=A.A(A.a([i,B.bd,h,A.aI(o,o,o,o,A.X(B.cC,n?B.bu:B.bh,o,o,o,o),o,o,o,new C.cHy(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.Z,!0,o,!0,B.t,o,A.aP(),h,o,o,o,o,o,2,p.azT(m,"Item name (optional)","Lumber, paint, labor\u2026",B.PM),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,A_.KG,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jY:B.iN
t=A.l(14)
s=A.K(n?B.ei:B.bP,B.r,1)
r=A.aI(o,o,o,o,A.X(B.wT,n?B.aS:B.as,o,o,o,20),o,o,o,new C.cHz(p),o,o,o,o,o,B.ch)
q=p.e
q===$&&A.c()
q=A.aM(o,B.Z,!1,o,!0,B.t,o,A.aP(),q,o,o,o,o,o,2,D.c5U,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ec,o,o,o,1,o,o,!1,"\u2022",o,new C.cHA(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.r(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aI(o,o,o,o,A.X(B.i4,n?B.aS:B.as,o,o,o,20),o,o,o,new C.cHB(p),o,o,o,o,o,B.ch)],w),B.l,o,B.e,B.O,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,16,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.au,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aP(),t,o,o,o,o,o,2,p.azT(m,"Amount","0.00",B.hC),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ec,o,o,o,1,o,o,!1,"\u2022",o,new C.cHC(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.i,0,o,o)
t=x.gv
u=A.C(new A.N(D.dbV,new C.cHD(p,m),t),t.k("ak.E"))
i=A.a([i,B.bz,v,B.aC,h,B.T,s,B.ae,A.bX(B.bH,u,B.bt,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.W,A.aM(o,B.Z,!1,o,!0,B.t,o,A.aP(),h,o,o,o,o,o,2,p.ceZ(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cHE(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.l6,o,o,o,o)],w))}i.push(B.aO)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bQ.j(n?0.12:0.06)],j)
h=A.l(16)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,11,o,o,B.U,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gK8()===B.j.iI(p.gK8())?B.j.M(p.gK8()):p.gK8()
s=p.gb6w()
r=A.Bu(p.gakB())
i.push(A.r(o,A.A(A.a([A.E(A.x(A.a([u,B.aw,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1),C.bGf(p.gK8()*p.gakB(),B.b3,!1,B.u)],w),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a7,B.aa,B.x,j,o,o),B.n),o,o,o,o,B.jr,o,o,o))
i.push(B.bz)
j=A.l(14)
h=n?B.ei:B.bP
h=A.dj(o,o,o,o,o,o,o,o,o,o,o,o,B.cp,o,new A.b9(j,B.a1),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dV(A.d("Cancel",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,o,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cHF(d),h),1),B.au,A.E(A.dh(D.asH,o,D.h_d,p.ga3t(),A.bp(B.aV,o,o,0,B.c,o,B.cp,o,new A.b9(A.l(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.i,0,o,o))
return A.eG(o,l,new A.cO(B.M4,A.cb(A.x(i,B.al,o,B.e,B.O,0,B.p),B.t,o,B.y,o,Ah.t3,o,o,B.ah),o),o,o,o,B.On,o,B.d8,o,new A.b9(k,B.a1),o)}}
C.a2s.prototype={
S(){return new C.byJ()}}
C.byJ.prototype={
Y(){var w,v,u=this
u.a4()
w=u.a.e
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,B.b5,B.aP),v)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.ax()
w.P$=0
this.a3()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.H,q=r?B.eg:B.c,p=A.l(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.m(s,s,r?B.aS:B.as,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.m(s,s,r?B.aS:B.as,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jY:B.iN
v=A.aM(s,B.Z,!0,s,!0,B.t,s,A.aP(),w,s,s,s,s,s,2,A.bA(s,new A.b6(4,A.l(12),B.dv),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fn5(t,d),s,!1,s,s,!1,s,!0,s,B.ac,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.ao,s,s,s,s)
u=A.E(A.dV(B.dt,new C.fn6(d),s),1)
r=A.bp(B.bQ,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eG(s,q,new A.D(B.CB,A.x(A.a([o,B.aC,v,B.aO,A.A(A.a([u,B.au,A.E(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fn7(t,d),r),1)],w),B.l,s,B.e,B.i,0,s,s)],w),B.l,s,B.e,B.O,0,B.p),s),s,s,s,s,s,B.d8,s,new A.b9(p,B.a1),s)}}
C.acP.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.Gq.prototype={
S(){return new C.byH(null,null)}}
C.byH.prototype={
Y(){var w,v=this
v.a4()
w=A.bl(null,D.bBs,null,1,null,v)
w.cL(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBs()},
gbD3(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bQ,B.b3],x.O)
case 2:return A.a([B.bw,B.aV,B.b3],x.O)
case 3:return A.a([B.aG,B.ci,B.jl],x.O)
case 4:return A.a([B.h0,B.bQ,B.fr],x.O)
case 0:return A.a([B.aV,B.bQ,B.b3],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.em(A.c6(v,new C.fn3(this,new C.ul(w.ax.a===B.H)),null),null)}}
C.azb.prototype={
S(){return new C.byI(null,null)}}
C.byI.prototype={
Y(){var w,v=this
v.a4()
w=A.bl(null,B.nH,null,1,null,v)
w.cL(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBt()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.fn4(this),null)}}
C.byG.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bn(new A.a1(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aO(w,w))
u=new A.aG($.S().r,B.ai,null,null,A.a([],x.v))
u.E(new A.ja(v))
w=A.L()
w.b=B.a9
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.an(v,w)
w=A.L()
w.b=B.a9
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.xO(u)
t=A.a([],x.U)
w=new A.rA(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bj(A.jK(y.B));--r
q=new A.BU(w,r)
w.iz()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aUq(d,q,r,o,0,0.2,4.2,0.92)
p.aUq(d,q,r,s,0.52,0.11,3.2,0.58)}},
aUq(d,e,f,g,h,i,j,k){var w,v,u,t=B.j.F(g+h,1)*f,s=A.hPZ(e.a.a,e,t,t+f*i,!0),r=A.bEy(s.glY().a.getBounds())
$.S()
w=A.L()
w.b=B.a9
w.c=j
w.d=B.bv
w.f=!0
v=this.f
u=k*this.e
w.sav(new A.a8(B.a7,B.aa,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.IA,null).aK(0,r))
d.af(s,w)},
aE(d){return d.b!==this.b||d.d!==this.d}}
C.aPC.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aPD.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.ul.prototype={}
C.aui.prototype={
S(){return new C.aGV()},
ge3(){return this.c}}
C.aGV.prototype={
Y(){var w=this
w.a4()
w.d=w.a.d
w.aig()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Mg(w,v)
this.a3()},
aig(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aig=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bEH(t.c,t.d.a),$async$aig)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eVM(u,s))
return A.h(null,v)}})
return A.i($async$aig,v)},
QR(){var w=0,v=A.j(x.H),u=this,t,s
var $async$QR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eVD(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Mg(t,s),$async$QR)
case 2:if(u.c!=null)u.m(new C.eVE(u))
return A.h(null,v)}})
return A.i($async$QR,v)},
Ro(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ro=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.eVK(t,new C.ul(p.ax.a===B.H)),s,null,!0,!0,x.T),$async$Ro)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a9N(q),$async$Ro)
case 6:case 5:t.m(new C.eVL(t,r))
w=7
return A.b(t.QR(),$async$Ro)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ro,v)},
Wz(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iu4(r),$async$Wz)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eVy(t,new C.rs(B.o.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.QR(),$async$Wz)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wz,v)},
ck5(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hHt(t,new C.eVC(u),w,v)},
ac8(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.r(w,w,B.f,w,w,new A.o(w,w,new A.bG(new A.ay(v,2.5,B.r,-1),B.a1,B.a1,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b5M,w,w,B.n),w,22,w,w,w,w,w,22)},
abb(d){return this.bP6(d)},
bP6(d){var w=0,v=A.j(x.H),u=this
var $async$abb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eVB(u,d))
w=2
return A.b(u.QR(),$async$abb)
case 2:return A.h(null,v)}})
return A.i($async$abb,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.H,e=f?B.c4:B.i0,d=A.l(8),a0=A.X(Y.a2r,f?B.bu:B.bh,g,g,g,16),a1=x.p
a0=A.aN(!1,d,!0,new A.D(B.H5,A.A(A.a([a0,B.bo,A.d("Back to Projects",g,g,g,g,g,g,A.m(g,g,f?B.bu:B.bh,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.O,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eVN(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b2,B.t,A.a([A.bx(A.l(22),C.aSy(!0,A.l(22),1/0,B.qL,g,d,1/0),B.aq),A.ap(10,A.dh(D.bZe,g,D.h1B,h.gb4s(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.hk,g,new A.b9(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.l(22)
w=x.V
v=A.a([new A.ab(0,B.G,B.aV.j(f?0.5:0.38),B.eR,22),new A.ab(-4,B.G,B.bQ.j(0.2),B.J,32)],w)
u=A.l(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ab(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.l(16)
r=h.d
v=A.r(g,A.r(g,A.bx(s,new A.an(B.a0,g,B.b2,B.t,A.a([C.aSy(!0,A.l(16),1/0,B.Pe,g,r.c,1/0),new A.bN(new A.o(g,g,g,g,g,new A.a8(B.b0,B.b7,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bi,g,g),A.ap(g,h.ac8(!0),g,g,8,g,8,g),A.ap(g,A.cE5(h.ac8(!0),!0,!1),g,g,g,8,8,g),A.ap(8,A.cE5(h.ac8(!1),!1,!0),g,g,8,g,g,g),A.ap(8,A.cE5(h.ac8(!1),!0,!0),g,g,g,8,g,g),A.ap(10,A.dh(D.bV9,g,D.fVW,h.gb4s(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.hk,g,new A.b9(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.c7B,B.n),g,g,g,g,B.lN,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.m(g,g,f?B.aS:B.as,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.l(22)
u=x.O
u=f?A.a([D.bgH,B.ok,B.hh],u):A.a([B.b3,B.aV,B.bQ],u)
t=x.V
s=A.a([new A.ab(0,B.G,B.aV.j(f?0.45:0.35),B.eR,24)],t)
r=A.l(22)
p=A.ap(g,A.X(B.jK,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.l(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.r(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.m(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.hi,g,g,g)],a1),B.l,g,B.e,B.i,0,g,g),B.aC,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.m(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bGf(h.d.gxJ(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.T,A.d("Sum of all budget line items",g,g,g,g,g,g,A.m(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cE,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.i,0,B.p),1)
n=A.l(14)
m=A.l(14)
l=B.c.j(0.12)
k=A.K(B.hA.j(0.75),B.r,1.6)
t=A.a([new A.ab(0,B.G,B.aG.j(0.28),B.cL,14)],t)
j=B.aG.j(0.22)
i=A.l(10)
u=A.r(g,A.bx(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bGk,A.A(A.a([o,B.au,A.aH(!1,B.a3,!0,g,A.aN(!1,n,!0,A.eB(new A.D(U.wy,A.x(A.a([A.r(g,D.asg,B.f,g,g,new A.o(j,g,A.K(B.aG.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cq,g,g,g),B.fG,D.fKx],a1),B.l,g,B.e,B.O,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gck4(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.aj)],a1),B.l,g,B.e,B.i,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.aA,B.aD,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fH(1.7777777777777777,d,g),B.aO,w,B.T,u,B.bz,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.as,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b1,A.dh(At.a4j,g,D.fIo,h.gbDx(),A.bp(B.aV,g,g,g,B.c,g,B.hM,g,new A.b9(A.l(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.i,0,g,g),B.ae],a1)
w=h.d.d
if(w.length===0){w=f?B.eg:B.c
v=A.l(14)
u=A.K(f?B.ei:B.bP,B.r,1)
t=A.X(B.a2N,f?B.bu:B.bh,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.as,g,g,g,g,g,g,g,g,g,g,g,B.U,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.r(g,A.x(A.a([t,B.W,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.m(g,g,f?B.bu:B.bh,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.i,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.qH,g,g,1/0))}else B.d.u(d,new A.N(w,new C.eVO(h,new C.ul(f)),A.U(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.Cn,A.as(A.n5(g,f?B.bu:B.bh,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c4(g,e,A.bm(!0,A.x(A.a([new A.D(B.Cs,a0,g),A.E(A.cb(A.x(d,B.E,g,B.e,B.i,0,B.p),B.t,g,B.y,g,E.yV,g,g,B.ah),1)],a1),B.E,g,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bHd(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.eg:B.c,p=A.l(16),o=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.cL,12)],x.V),n=A.l(16),m=A.r(u,u,B.f,u,u,D.b8x,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.l(12)
l=A.r(u,A.X(s?B.il:B.ho,B.b3,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bM
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.m(u,u,r?B.aS:B.as,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd_B()
v=A.Bu(d.d)
B.d.u(t,A.a([B.aw,A.d(w+" "+v,u,u,u,u,u,u,A.m(u,u,r?B.bu:B.bh,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.ba,B.O,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bQ.j(0.1)],x.O)
w=A.l(12)
k=A.r(u,C.bGf(d.c*d.d,B.b3,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a7,B.aa,B.x,k,u,u),B.n),u,u,u,u,B.hk,u,u,u)
w=x.p
return A.r(u,A.bx(n,new A.EQ(A.A(A.a([m,A.E(new A.D(B.am9,A.A(A.a([l,B.bd,t,B.af,k,A.aI(u,u,u,u,A.X(B.cC,(r?B.bu:B.bh).j(0.75),u,u,u,20),u,u,u,new C.eVz(this,d),u,u,u,u,u,B.ch)],w),B.l,u,B.e,B.i,0,u,u),u),1)],w),B.al,u,B.e,B.i,0,u,u),u),B.aq),B.f,u,D.b7o,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.da,u,u,u,u)}}
C.aeT.prototype={
EZ(d){return this.bQu(d)},
bQu(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$EZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pA(d,o,!1),$async$EZ)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
w=4
return A.b(A.bO(Ag.Cl,null,x.H),$async$EZ)
case 4:s=t.d
w=5
return A.b(C.fX0(!0,o,s),$async$EZ)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Hk(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$EZ)
case 6:p=f
w=7
return A.b(A.pz(o,!1),$async$EZ)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$EZ,v)},
a0p(d){return this.cAu(d)},
cAu(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0p=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pA(d,s,!1),$async$a0p)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
A.hC(d,new C.auc(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pz(s,!1),$async$a0p)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0p,v)},
QS(d){return this.cwx(d)},
cwx(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(A.hC(d,D.aM0,!0,"NgmyWorksheetProjectScan",x.N),$async$QS)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bGg(s),$async$QS)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.T(D.fnL)
w=1
break}q=C.hiw(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dN(p,x.H),$async$QS)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$QS,v)},
a0q(d){return this.cIN(d)},
cIN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0q=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(C.bFL(),$async$a0q)
case 3:s=f
if(s==null){w=1
break}r=C.hiw(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dN(q,x.H),$async$a0q)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0q,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.H,t=new C.ul(u),s=w.d.d.length,r=u?B.eg:B.c,q=A.l(28),p=A.a([new A.ab(0,B.G,B.w.j(u?0.35:0.08),B.kD,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wx,A.r(v,A.x(A.a([w.cz3(d,t,s),new A.D(D.bFJ,A.x(A.a([w.b7r(t,"QR restore"),B.W,A.A(A.a([w.b2r(t,!0,B.jN,B.aG,B.aG,new C.eVQ(w,d),"Show to scan","QR code"),B.au,w.azU(t,B.ju,B.b8,B.bc,new C.eVR(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.i,0,v,v),B.dc,w.b7r(t,"Backup files"),B.W,A.A(A.a([w.azU(t,B.hP,B.aV,B.bQ,new C.eVS(w,d),"Full copy","Backup file"),B.au,w.azU(t,Q.zB,B.at,B.aQ,new C.eVT(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.i,0,v,v)],o),B.E,v,B.e,B.i,0,B.p),v)],o),B.l,v,B.e,B.O,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cz3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eZ,B.cJ,B.fZ],k):A.a([B.b3,B.aV,B.bQ],k)
w=A.ap(l,A.X(B.v8,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.r(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.l(4),l,l,B.n),l,4,l,B.kw,l,l,l,36),l,l,l)
u=A.l(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ab(0,B.G,B.w.j(0.2),B.cL,12)],x.V)
r=this.d
s=A.r(l,C.aSy(!0,A.l(13),64,D.bQp,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.m(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,I.abV,l,l,l)
r=C.bGf(r.gxJ(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.l(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.r(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bG5,A.x(A.a([v,A.A(A.a([s,B.ew,A.E(A.x(A.a([u,B.aw,t,B.T,A.A(A.a([r,B.af,A.r(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.m(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fO,l,l,l)],m),B.l,l,B.e,B.i,0,l,l)],m),B.E,l,B.e,B.i,0,B.p),1),A.aI(l,l,l,l,A.X(B.cC,B.c.j(0.85),l,l,l,l),l,l,l,new C.eVP(d),l,l,l,A.o3(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aUm,l,l,l,l),l,l)],m),B.E,l,B.e,B.i,0,l,l)],m),B.l,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.aA,B.aD,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b7r(d,e){var w=null,v=A.r(w,w,B.f,w,w,new A.o(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.af,A.d(e.toUpperCase(),w,w,w,w,w,w,A.m(w,w,d.a?B.bu:B.bh,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
b2r(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.l(18),p=A.l(18),o=d.a,n=o?D.akJ:B.aS
if(e)w=B.aG.j(o?0.45:0.35)
else{w=o?B.ei:B.bP
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.ab(0,B.G,B.aG.j(0.12),B.cL,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.l(12)
s=A.K(h.j(0.35),B.r,1)
t=A.r(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.t5,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.m(r,r,o?B.aS:B.as,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aH(!1,B.a3,!0,r,A.aN(!1,q,!0,A.eB(new A.D(E.a0Q,A.x(A.a([t,B.ae,u,B.bG,A.d(j,r,r,r,r,r,r,A.m(r,r,o?B.bu:B.bh,r,r,r,r,r,r,r,r,11,r,r,B.cE,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
azU(d,e,f,g,h,i,j){return this.b2r(d,!1,e,f,g,h,i,j)}}
C.auc.prototype={
S(){return new C.bnH()}}
C.bnH.prototype={
Y(){this.a4()
this.aga()},
aga(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$aga=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bGh(p.c,p.d),$async$aga)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eVt(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eVu(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aga,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.H,f=g?B.BV:B.i0,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aI(h,h,h,h,A.X(B.eM,g?B.ab:B.an,h,h,h,18),h,h,h,new C.eVv(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.m(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.tO],u),B.l,h,B.e,B.i,0,h,h)
t=A.l(24)
s=x.O
s=g?A.a([B.eZ,B.cJ,B.fZ],s):A.a([B.b3,B.aV,B.bQ],s)
r=x.V
q=A.a([new A.ab(0,B.G,B.aV.j(g?0.4:0.3),B.eR,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dq,B.K,h,h)
p=C.bGf(p.gxJ(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.l(20)
l=v===1?"item":"items"
s=A.r(h,A.x(A.a([o,B.am,A.A(A.a([p,B.af,A.r(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.m(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fO,h,h,h)],u),B.l,h,B.ba,B.i,0,h,h)],u),B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.aA,B.aD,B.x,s,h,h),B.n),h,h,h,h,E.a1b,h,h,1/0)
t=g?D.brZ:B.c
q=A.l(24)
p=A.K(w?B.aG.j(0.4):B.aV.j(0.3),B.r,1)
r=A.a([new A.ab(0,B.G,B.w.j(g?0.25:0.06),B.dp,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.VD,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.euV)
else{m=A.l(20)
l=A.K(B.bj,B.r,1)
o.push(A.r(h,A.qf(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bS,h,h,h))}}o.push(B.aO)
n=w?B.aG:B.aV
n=n.j(g?0.15:0.1)
m=A.l(12)
l=A.K((w?B.aG:B.aV).j(0.35),B.r,1)
k=w?B.Pt:B.Q1
k=A.X(k,w?B.aG:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.r(h,A.A(A.a([k,B.au,A.E(A.d(j,h,h,h,h,h,h,A.m(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.i,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.hM,h,h,h))
return A.c4(h,f,A.bm(!0,A.x(A.a([new A.D(Ad.OA,e,h),A.E(A.cb(A.x(A.a([s,B.aO,A.r(h,A.x(o,B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.uK,h,h,1/0)],u),B.l,h,B.e,B.i,0,B.p),B.t,h,B.y,h,E.ani,h,h,B.ah),1)],u),B.l,h,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.auh.prototype={
S(){return new C.aGU(A.zZ(B.NS,B.oc,B.vf))}}
C.aGU.prototype={
t(){this.d.t()
this.a3()},
aOP(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j3(w,d)},
cfR(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.irB(t)
if(s!=null){this.aOP(s)
return}r=C.hxz(t)
if(r!=null)q=A.cS(r,p,0)
else q=!1
if(q){this.aOP(B.a.i(B.a.b2(r,B.a.co(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eR(A.a([A.aI(t,t,t,t,A.X(u.f?B.uV:A8.PA,t,t,t,t,t),t,t,t,new C.eVx(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.BV,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fVO,t,t,t,1,t,!0),q=A.zY(u.d,B.c0,u.gcfQ()),p=A.l(28)
p=A.as(A.r(t,t,B.f,t,t,new A.o(t,t,A.K(B.aV,B.r,3),p,A.a([new A.ab(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.l(16)
return A.c4(r,B.w,new A.an(B.a0,t,B.b2,B.t,A.a([q,p,A.ap(32,A.r(t,D.fUz,B.f,t,t,new A.o(w,t,A.K(B.aV.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jr,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aLP.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.P8.prototype={
S(){return new C.aGW(D.adT,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aGW.prototype={
gcGz(){return J.bHo(this.e,0,new C.eWf())},
Y(){this.a4()
$.aU.c1$.push(this)
this.wn()},
t(){$.aU.hV(this)
this.a3()},
jm(d){if(d===B.fY)this.wn()},
wn(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wn=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DE(q.a.c).dg(0,B.jI),$async$wn)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eWb(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eWc(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wn,v)},
Iv(d){return this.bNe(d)},
bNd(){return this.Iv(null)},
bNe(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Iv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iu6(l,d),$async$Iv)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
r=s.a
q=s.b
p=new C.lF(l,r,q,D.do0,new A.V(Date.now(),0,!1))
w=4
return A.b(C.Mg(t.a.c,p),$async$Iv)
case 4:o=f
w=5
return A.b(t.wn(),$async$Iv)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.T(D.fkP)
w=1
break}n=J.aT(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.T(D.fmE)
else n.L(q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.F2(m)
case 1:return A.h(u,v)}})
return A.i($async$Iv,v)},
F2(d){return this.cjR(d)},
cjR(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$F2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hC(s,new C.aui(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$F2)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Mg(u.a.c,t),$async$F2)
case 5:case 4:w=6
return A.b(u.wn(),$async$F2)
case 6:return A.h(null,v)}})
return A.i($async$F2,v)},
w8(d){return this.c2z(d)},
c2z(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$w8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bFL(),$async$w8)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hC(r,D.aM0,!0,"NgmyWorksheetProjectScan",x.N),$async$w8)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bGg(q),$async$w8)
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
r.T(A.b2(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hiw(s)
w=15
return A.b(C.Mg(t.a.c,p),$async$w8)
case 15:o=f
w=16
return A.b(t.wn(),$async$w8)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.T(D.fmJ)
w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.F2(p)
case 1:return A.h(u,v)}})
return A.i($async$w8,v)},
Ow(d){return this.bLR(d)},
bLR(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ow=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cg(null,null,!0,null,new C.eVX(d),s,null,!0,!0,x.y),$async$Ow)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.p8(t.a.c,A.a([],x.D)),$async$Ow)
case 6:w=7
return A.b(t.wn(),$async$Ow)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fkU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ow,v)},
ck3(d){var w=this.c
w.toString
A.bU(B.L,null,new C.eW5(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b83(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.l(16),p=g.a
if(p)w=B.jY
else w=B.c
v=A.l(16)
u=A.K(p?B.ei:B.bP,B.r,1)
t=d.j(0.14)
s=A.l(12)
s=A.r(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bV,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.m(r,r,p?B.aS:B.as,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aH(!1,B.a3,!0,r,A.aN(!1,q,!0,A.r(r,A.x(A.a([s,B.ae,t,B.bG,A.d(h,r,r,r,r,r,r,A.m(r,r,p?B.bu:B.bh,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.t1,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
a0V(d,e){return this.cjS(d,e)},
cjS(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0V=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.L,null,new C.eW0(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a0V)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hHt(r,new C.eW1(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Oy(d,e),$async$a0V)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0V,v)},
b54(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.l(12)
s=A.r(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bV,u,u,u)
if(d)t=B.ay
else t=h.a?B.aS:B.as
t=A.d(j,u,u,u,u,u,u,A.m(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.m(u,u,w?B.bu:B.bh,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.i,0,B.p),1)
return A.aH(!1,B.a3,!0,u,A.aN(!1,u,!0,new A.D(B.Cz,A.A(A.a([s,B.bd,t,A.X(B.eJ,w?B.bu:B.bh,u,u,u,u)],v),B.l,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj)},
cqN(d,e,f,g,h,i){return this.b54(!1,d,e,f,g,h,i)},
Oy(d,e){return this.bM0(d,e)},
bM0(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Oy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lq(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Oy)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bEs(t.a.c,d.a),$async$Oy)
case 6:w=7
return A.b(t.wn(),$async$Oy)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Oy,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.H,m=new C.ul(n),l=n?B.c4:B.i0
if(p.f)n=D.bet
else{w=A.aF(d,B.dO,x.w).w
v=p.bGk(m)
u=p.c1D(m)
t=p.gbDq()
if(n)s=B.jY
else s=B.c
r=A.l(13)
q=x.p
t=A.a([v,B.ae,u,B.aO,new C.Gq(A.r(o,A.A(A.a([p.aDs(P.Pd,"Projects",m,D.adT),p.aDs(B.uQ,"Cashier",m,D.b2g),p.aDs(B.Hn,"Family Tree",m,D.hIb)],q),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(s,o,o,r,o,o,B.n),o,o,o,o,o,o,o,o),14,B.eC,0.95,t,o),B.bz],q)
v=p.d
if(v===D.adT){v=J.ad(p.e)
B.d.u(t,A.a([A.A(A.a([A.d("Projects ("+v+")",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.as,o,o,o,o,o,o,o,o,16,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b1,new C.azb(p.gaTb(),o)],q),B.l,o,B.e,B.i,0,o,o),B.aC,p.cqP(m)],q))}else{n=p.a
if(v===D.b2g)t.push(new C.aq5(n.c,m,o))
else{v=p.r
t.push(new C.arj(n.c,n.d,n.e,n.f,new C.eWi(p),new C.eWj(p),new A.bo(v,x.b4)))}}n=A.cb(A.x(t,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,new A.R(20,w.r.b+8,20,32),o,o,B.ah)}return A.c4(o,l,A.bm(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bGk(d){var w=null,v=A.l(8),u=d.a,t=A.X(Y.a2r,u?B.bu:B.bh,w,w,w,16)
return A.aN(!1,v,!0,new A.D(B.kU,A.A(A.a([t,B.bo,A.d("Back to Profile",w,w,w,w,w,w,A.m(w,w,u?B.bu:B.bh,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.O,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eVU(this),w,w,w,w,w,w,w)},
gbDq(){switch(this.d.a){case 0:return D.ad0
case 1:return D.hwC
case 2:return D.ad1}},
c1D(d){var w=null,v=A.l(15),u=A.a([new A.ab(0,B.G,B.aV.j(0.35),B.cz,16)],x.V),t=x.p,s=A.A(A.a([A.r(w,D.c0a,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bd,D.bKJ,A.aH(!1,B.a3,!0,w,A.aN(!1,A.l(12),!0,A.r(w,D.bYw,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eVY(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)],t),B.E,w,B.e,B.i,0,w,w),r=B.b3.j(0.55),q=A.l(12)
return new C.Gq(A.r(w,A.x(A.a([new A.D(B.GZ,s,w),A.r(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.m(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aw,A.d(A.Bu(this.gcGz()),w,w,w,w,w,w,D.fEC,w,w,w)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.uH,B.jr,w,w,1/0)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hwB,w)},
aDs(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.l(12),r=t?B.aV:B.L,q=A.l(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.ab(0.5,B.G,B.aV.j(0.42),B.cL,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bh
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bh
return A.E(A.aH(!1,B.a3,!0,u,A.aN(!1,s,!0,A.cT(u,A.A(A.a([w,B.e8,new A.di(1,B.cl,A.d(e,u,1,B.a2,u,u,u,A.m(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.ba,B.i,0,u,u),u,u,B.cw,new A.o(r,u,p,q,o,u,B.n),B.iP,u,u,u,u,B.H6,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eWe(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),1)},
cqP(d){var w,v,u,t,s,r,q=this,p=null
if(J.ct(q.e)){w=d.a
v=w?B.eg:B.c
u=A.l(15)
t=A.r(p,D.bYD,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ab(2,B.G,B.aV.j(0.5),B.eR,28)],x.V),D.ca7,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.m(p,p,w?B.aS:B.as,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Gq(A.r(p,A.x(A.a([t,B.dc,s,B.T,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.m(p,p,w?B.bu:B.bh,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.e4,A.A(A.a([A.E(q.aUM(B.ju,"Scan QR",new C.eW8(q),d),1),B.au,A.E(q.aUM(Q.zB,"Upload file",new C.eW9(q),d),1)],r),B.l,p,B.e,B.i,0,p,p),B.aC,A.bJ(D.h5g,p,q.gaTb(),A.bp(B.aV,p,p,p,B.c,B.hb,p,p,new A.b9(A.l(12),B.a1),p,p,p))],r),B.l,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bHa,1.05,D.ad0,p)}w=J.b7(q.e,new C.eWa(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Gq(A.x(w,B.l,p,B.e,B.i,0,B.p),16,B.bV,1,D.ad0,p)},
aUM(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.l(12),t=A.l(12),s=A.l(12),r=A.K(B.aV.j(0.45),B.r,1)
return A.aH(!1,B.a3,!0,u,A.aN(!1,t,!0,A.r(w,A.x(A.a([A.X(d,B.b3,w,w,w,26),B.T,A.d(e,w,w,w,w,w,w,D.fCO,B.K,w,w)],x.p),B.l,w,B.e,B.O,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.am2,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)},
cqO(d,e){var w,v,u=null,t=e.a,s=t?B.eg:B.c,r=A.l(14),q=A.K(t?B.ei:B.bP,B.r,1),p=A.a([new A.ab(0,B.G,B.w.j(t?0.35:0.08),B.ev,10)],x.V),o=A.l(14),n=t?B.bu:B.bh
n=A.bx(B.XP,new A.fH(1.7777777777777777,C.aSy(!0,B.fk,1/0,P.Pd,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.m(u,u,t?B.aS:B.as,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.aw,A.d(""+d.d.length+" budget items \xb7 "+A.Bu(d.gxJ()),u,u,u,u,u,u,D.fAL,u,u,u)],w),B.E,u,B.e,B.i,0,B.p),1)
return A.r(u,A.aH(!1,B.a3,!0,u,A.aN(!1,o,!0,A.x(A.a([n,new A.D(B.bI,A.A(A.a([v,A.aI(u,u,u,u,A.X(Ak.a3w,t?B.bu:B.bh,u,u,u,u),u,u,u,new C.eW6(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.i,0,u,u),u)],w),B.E,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eW7(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.eo,u,u,u,1/0)}}
C.bAu.prototype={}
C.rs.prototype={
aj(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd_B(){var w,v,u,t,s=this.c
if(s===B.j.iI(s))w=B.o.v(B.j.M(s))
else{v=B.j.ad(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lF.prototype={
gxJ(){return B.d.cF(this.d,0,new C.cGN())},
aj(){var w=this,v=w.d,u=A.U(v).k("N<1,a9<n,@>>")
v=A.C(new A.N(v,new C.cGM(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bfr(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lF(w.a,w.b,v,u,w.e)},
bf9(d){return this.bfr(d,null)},
TD(d){return this.bfr(null,d)}}
C.Iy.prototype={
a7(){return"FamilyGender."+this.b}}
C.hZ.prototype={
aj(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hCE(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aGb(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hZ(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.aml.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.kZ.prototype={
gaqz(){var w=this.f
return new A.Y(w,new C.bT8(),A.U(w).k("Y<1>")).gJ(0)},
aj(){var w=this,v=w.f,u=A.U(v).k("N<1,a9<n,@>>")
v=A.C(new A.N(v,new C.bT7(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ijU(w.y),"games",w.z],x.N,x.z)},
x4(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kZ(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bfq(d,e){var w=null
return this.x4(w,w,w,d,e,w,w,w,w)},
cPX(d,e,f,g,h,i,j){return this.x4(d,e,null,f,g,h,i,j,null)},
aGg(d,e){var w=null
return this.x4(w,w,w,w,d,w,w,e,w)},
cPZ(d,e,f,g,h,i,j,k){return this.x4(d,e,null,f,g,h,i,j,k)},
cOs(d){var w=null
return this.x4(w,w,w,w,w,w,w,d,w)},
cOQ(d){var w=null
return this.x4(w,w,w,w,w,w,w,w,d)},
bf3(d){var w=null
return this.x4(w,w,d,w,w,w,w,w,w)},
aG1(d){var w=null
return this.x4(w,w,w,w,w,d,w,w,w)},
cPu(d,e,f){var w=null
return this.x4(w,d,w,w,e,w,w,f,w)},
cOf(d){var w=null
return this.x4(w,w,w,d,w,w,w,w,w)},
cP1(d,e){var w=null
return this.x4(d,w,w,w,w,w,e,w,w)}}
C.cGO.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cGP.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aJ0.prototype={}
C.bb4.prototype={
ak(d){this.a=d.a
this.b=d.b},
cZ(d){var w=new C.bb4()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b4(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bb3.prototype={
gwV(){return!0},
gGA(){return this.z.b<this.b.length},
aWs(d){switch(0){case 0:return d.a.c}},
aW8(d){switch(0){case 0:return d.a.d}},
bW4(d,e){switch(0){case 0:return new A.hU(d,e)}},
bVs(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hg(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iS(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Ih(b4)
switch(0){case 0:v=b5.b
u=new A.kW(0,v,0,1/0)
t=w===B.Vv
break}s=A.a([],x.gZ)
r=A.T(x.gF,x.S)
for(b3=b1.z,q=B.d.fO(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hg(b4,u,!0)
f=b1.aWs(g)
f.toString
e=b1.aW8(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJ0(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJ0(k,j,i))}d=s.length
switch(0){case 0:q=b5.cA(new A.hU(m,l))
a0=q.a
a1=q.b
b1.a=new A.iS(0,0,a0,a1)
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
for(q=B.d.fO(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.I)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aWs(g)
e=b1.aW8(g)
e.toString
a9=b1.bVs(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bW4(a6,a3+a9)
b0=g.a
g.a=new A.iS(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fV(d){var w,v,u,t,s,r=this
r.lC(d)
w=d.b
w.is()
v=A.dr()
u=r.a
v.ek(u.a,u.b,0,1)
w.po(0,v)
for(u=r.z,u=B.d.dt(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].fV(d)
w.nA(0)},
H5(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
is(){return this.z}}
C.byK.prototype={}
var z=a.updateTypes(["aB<~>()","Q(hZ)","~()","Q(kZ)","Q(nw)","a9<n,@>(kZ)","H(kZ,kZ)","H(hZ,hZ)","n(hZ)","kZ(a9<@,@>)","Q(lF)","nw(a9<@,@>)","a9<n,@>(nw)","Q(uW)","uW()","H(hZ)","ai<hZ>()","Q(zH)","a0m(Z)","n?(hZ)","eL<n?>(hZ)","aB<~>(lF)","Q(rs)","a9<n,@>(hZ)","hZ(a9<@,@>)","H(lF,lF)","Q(agb)","~(bd)","v(oL)","H(H,aaf)","Q(qK<H>)","~(qK<H>)","U8(Z)","Q(MV)","Q(uV)","~(hZ)","n(n)","Wt(Z)","U7(Z)","aey(Z)","a_i(Z)","hZ(hZ)","cK(bB<n,GG>)","cK(L1)","a_M(Z)","H?(hZ)","hZ()","Q(L1)","D(hZ)","~(Iy)","a_I(Z)","v(Iy,n,a_)","Q(ag4)","bB<n,ai<a9<n,@>>>(n,ai<nw>)","a_K(Z)","+count,id,name(H,n,n)(kZ)","n(kZ)","a0G(Z)","a0H(Z)","Q(lZ)","lZ()","ZR(Z)","a2s(Z)","a_k(Z)","a_j(Z)","~(H)","~(n,lu?)","v(rs)","aeT(Z)","~(mm)","aB<~>([n?])","G(G,lF)","v(lF)","G(G,rs)","a9<n,@>(rs)","rs(a9<@,@>)","ai<lu>()","uV()","n(V)","lF(a9<@,@>)","cu(Ix)","n(lF)","a9<n,@>(lF)","H(nw,nw)","kZ(a9<n,@>)","kZ(kZ)"])
C.fPu.prototype={
$1(d){return d.a+" "+d.b},
$S:131}
C.fPt.prototype={
boJ(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.ri(s,d,B.i6,"book",E.GM),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.M3(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.boJ(d)},
$S:269}
C.fPv.prototype={
$1(d){return d.b},
$S:131}
C.fZ7.prototype={
$1(d){var w=null
return A.eG(w,B.L,new H.Qy(this.a,this.b,w),w,w,0,B.a0R,w,B.d8,w,w,w)},
$S:47}
C.fCy.prototype={
$1(d){return d!=null},
$S:223}
C.fCz.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:223}
C.fCE.prototype={
$1(d){if(this.a)return new A.p(d.a*520,d.b*160)
return d},
$S:165}
C.fNd.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fe(d,w,w,w,A.hf(w,B.tF,w,w,w,w,w,w,w,B.dH,w,w,10.5,w,B.eD,w,!0,w,w,w,w),w),u=f?B.eD:B.wH
return new A.od(D.bCv,A.ab4(A.a([new A.fY(130,w,v),new A.zG(1,B.Hg,A.fe(e,w,w,w,A.hf(w,g==null?D.exj:g,w,w,w,w,w,w,w,B.dH,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.yz,B.lU))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1963}
C.fNc.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.w4(999)
f=A.xG(A.lU(h,A.fe("Cashier",h,h,h,A.hf(h,D.Aw,h,h,h,h,h,h,h,B.dH,h,h,10,h,B.eD,h,!0,h,h,h,h),h),h,new A.kX(D.exa,h,f,B.ib,h),h,h,D.bD0,h))
w=A.xG(A.fe("Debt receipt",h,h,h,A.hf(h,h,h,h,h,h,h,h,h,B.dH,h,h,22,h,B.eD,h,!0,h,h,h,h),h))
v=A.xG(A.fe(C.xo(new A.V(Date.now(),0,!1),!0),h,h,h,D.abv,h))
u=A.w4(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fe(s,h,h,h,A.hf(h,h,h,h,h,h,h,h,h,B.dH,h,h,14,h,B.eD,h,!0,h,h,h,h),h)
r=A.fe("Person who owes",h,h,h,D.abv,h)
q=A.w4(10)
p=x.Z
u=A.lU(h,A.zz(A.a([s,new A.fY(h,2,h),r,new A.fY(h,10,h),A.lU(h,A.zz(A.a([A.fe("Amount owed",h,h,h,D.abv,h),new A.fY(h,2,h),A.fe(A.Bu(t.c),h,h,h,A.hf(h,D.Aw,h,h,h,h,h,h,h,B.dH,h,h,20,h,B.eD,h,!0,h,h,h,h),h)],p),B.rT,B.lU),h,new A.kX(B.pQ,h,q,B.ib,h),h,h,D.bCb,1/0)],p),B.rT,B.lU),h,new A.kX(E.aNn,h,u,B.ib,h),h,h,D.bEb,1/0)
q=new A.nW(D.exd,0.9,B.lb)
r=A.w4(12)
s=i.c
o=s.$2("Original due",C.xo(t.r,!1))
n=s.$2("Current due",C.xo(t.f,!1))
m=i.d
l=new A.nW(m,1.1,B.lb)
k=A.w4(8)
j=i.a
k=A.a([o,n,new A.fY(h,6,h),A.lU(h,A.xG(A.fe(t.gaNn(),h,h,h,A.hf(h,m,h,h,h,h,h,h,h,B.dH,h,h,11,h,B.eD,h,!0,0.5,h,h,h),h)),h,new A.kX(h,new A.q2(l,l,l,l),k,B.ib,h),h,h,D.bD8,1/0),new A.fY(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.Aw))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.Aw))
else{n=A.fe("Missed days ("+n+")",h,h,h,A.hf(h,B.tF,h,h,h,h,h,h,h,B.dH,h,h,10.5,h,B.eD,h,!0,h,h,h,h),h)
m=A.U(o).k("N<1,TH>")
o=A.C(new A.N(o,new C.fNb(),m),m.k("ak.E"))
B.d.u(k,A.a([new A.fY(h,4,h),n,new A.fY(h,6,h),new C.bb3(5,5,new C.bb4(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.fY(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fY(h,8,h),w,new A.fY(h,3,h),v,new A.fY(h,16,h),u,new A.fY(h,10,h),A.lU(h,A.zz(k,B.yz,B.lU),h,new A.kX(h,new A.q2(q,q,q,q),r,B.ib,h),h,h,B.amd,1/0)],p)
w=j.a
if(w!=null){v=new A.nW(B.JR,1,B.lb)
B.d.u(f,A.a([new A.fY(h,16,h),A.fe("Debtor signature",h,h,h,A.hf(h,B.tF,h,h,h,h,h,h,h,B.dH,h,h,10,h,B.eD,h,!0,h,h,h,h),h),new A.fY(h,6,h),A.lU(h,new A.IS(w,B.Y1,h,h),h,new A.kX(h,new A.q2(v,v,v,v),A.w4(6),B.ib,h),82,h,B.Ox,1/0)],p))}f.push(new A.fY(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fe(w,h,h,h,D.ft3,h))
f.push(new A.fY(h,18,h))
f.push(A.xG(A.fe("NGMY.ORG",h,h,h,A.hf(h,D.Aw,h,h,h,h,h,h,h,B.dH,h,h,14,h,B.eD,h,!0,1.8,h,h,h),h)))
return f},
$S:369}
C.fNb.prototype={
$1(d){var w=null,v=new A.nW(D.JS,0.7,B.lb),u=A.w4(999)
return A.lU(w,A.fe(C.xo(d,!1),w,w,w,A.hf(w,D.JS,w,w,w,w,w,w,w,B.dH,w,w,9.5,w,B.eD,w,!0,w,w,w,w),w),w,new A.kX(w,new A.q2(v,v,v,v),u,B.ib,w),w,w,D.bIC,w)},
$S:1964}
C.c8p.prototype={
$1(d){var w=null,v=B.bD.j(0.08),u=A.l(999),t=A.K(B.bD.j(0.28),B.r,1)
return A.r(w,A.d(C.xo(d,!1),w,w,w,w,w,w,D.fAc,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eL,w,w,w)},
$S:1965}
C.fZE.prototype={
$1(d){var w=null,v=A.aF(d,B.c1,x.w).w,u=A.l(26),t=A.aI(w,w,w,w,D.c19,w,w,w,new C.fZB(d),w,w,w,w,w,B.ch),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eG(w,B.L,new A.cO(new A.aY(0,380,0,v.a.b*0.9),A.aH(!1,B.a3,!0,u,new A.D(B.a0E,A.x(A.a([new A.bL(B.aa,w,w,t,w),new A.di(1,B.cl,A.cb(A.x(A.a([new A.em(new C.b05(r,w),s),B.W,A.A(A.a([A.E(A.ep(B.zJ,D.h1w,new C.fZC(s,r,d),A.dj(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fh,w,new A.b9(A.l(14),B.a1),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.af,A.E(A.dh(B.a49,w,D.fYW,new C.fZD(r,d),A.bp(B.b3,w,w,w,B.c,w,B.fh,w,new A.b9(A.l(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.i,0,w,w)],p),B.l,w,B.e,B.O,0,B.p),B.t,w,B.y,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.O,0,B.p),w),B.f,B.as,0,w,w,w,w,w,B.aj),w),w,w,0,Ap.a13,w,B.d8,w,w,w)},
$S:47}
C.fZB.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fZC.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.ap$.x.h(0,t.a)
m=m==null?null:m.gbf()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lU(2.5),$async$$0)
case 4:w=3
return A.b(e.hi(B.ha),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eQ(B.dM.gaU(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aB(o,0,32)
w=5
return A.b(A.rl(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fZD.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fTV(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.T(A.b2(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fZw.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.b
return A.eG(w,B.as,A.x(A.a([new A.D(D.bE_,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nj,w,w,w),1),A.aI(w,w,w,w,B.lp,w,w,w,new C.fZu(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),w),new A.di(1,B.cl,new A.D(B.f5,A.bx(A.l(14),A.fU(t,B.A,w,w,B.ck,B.dD,!1,w,!1,w,w),B.aq),w),w),new A.D(B.Oc,new A.a5(1/0,w,A.dh(B.oN,w,D.aXH,new C.fZv(t,this.c,d),A.bp(B.b3,w,w,w,B.c,w,w,w,new A.b9(A.l(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.O,0,B.p),w,w,w,B.Oo,w,B.d8,w,new A.b9(v,B.a1),w)},
$S:47}
C.fZu.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fZv.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rl(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fZI.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.a,s=this.b
return A.eG(w,B.as,new A.D(D.bE7,A.x(A.a([A.A(A.a([D.bJO,A.aI(w,w,w,w,B.lp,w,w,w,new C.fZG(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),B.T,new A.em(A.bx(A.l(14),A.r(w,A.b3(w,w,w,new C.bdh(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ae,new A.a5(1/0,w,A.dh(B.oN,w,D.aXH,new C.fZH(t,s,d),A.bp(B.b3,w,w,w,B.c,w,w,w,new A.b9(A.l(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.O,0,B.p),w),w,w,w,w,w,B.d8,w,new A.b9(v,B.a1),w)},
$S:47}
C.fZG.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fZH.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.ap$.x.h(0,t.a)
n=n==null?null:n.gbf()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lU(2.5),$async$$0)
case 4:w=3
return A.b(e.hi(B.ha),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aB(p,0,32)
r=J.eQ(B.dM.gaU(s))
w=5
return A.b(A.rl(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fHt.prototype={
$1(d){return d.a===this.a},
$S:255}
C.dQO.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dQz.prototype={
bnX(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.eg:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dQC(s,q,e),p,!0,!0,!1,B.K8,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dQD(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bnX(d,e)},
$S:1966}
C.dQC.prototype={
$1(d){var w,v=null,u=this.c===B.xc,t=u?D.duW:D.dqt
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.aS:B.as,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(O.amK,A.x(A.a([u,B.aw,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.bu:B.bh,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae,A.is(!0,v,v,B.y,D.fju,new C.dQB(this.a,w,t,d),t.length,v,B.e1,B.ah,!0)],x.p),B.al,v,B.e,B.O,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:27}
C.dQB.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.l(14)
if(q)w=B.cJ.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.l(14)
if(q)u=B.cJ
else u=(t.b.a.d.a?B.bu:B.bh).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aN(!1,p,!0,A.r(B.A,C.b04(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dQA(t.d,r),s,s,s,s,s,s,s)},
$S:186}
C.dQA.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dQD.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dQx.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:87}
C.dQy.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cG(B.cw,e,v)
return new A.d2(e,!1,A.ij(B.A,A.as(A.aH(!1,B.a3,!0,v,new A.e1(new C.dQw(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.aj),v,v,v),v,new A.bg(t,new A.bs(0.96,1,u),u.k("bg<bQ.T>"))),v)},
$S:34}
C.dQw.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aF(d,B.c1,x.w).w,i=l.b,h=i.a.d.a,g=h?B.eg:B.c,f=A.l(14),e=A.K((h?B.bu:B.bh).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.l(8)
u=x.p
v=A.A(A.a([w,A.aN(!1,v,!0,new A.D(B.eC,A.X(B.cC,i.a.d.a?B.bu:B.bh,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dQh(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.i,0,k,k)
w=l.d
t=A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aVi("Name")
r=l.a
q=r.d==null?k:new C.dQi(r,l.e,a0)
p=A.l(20)
o=i.a.d.a?B.br:B.m9
n=A.K(B.cJ.j(0.35),B.r,1)
m=r.d
t=A.aM(k,B.Z,h,k,!0,B.t,k,A.aP(),w,k,k,k,k,k,2,s.bfj(new A.D(B.fn,A.aN(!1,p,!0,A.r(B.A,C.b04(m==null?"\ud83d\udc64":A.fO1(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cq,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.l6,k,B.abk,k,k)
v=A.a([v,B.ae,t,B.T,A.d("Gender (required)",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11.5,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.A(A.a([A.E(i.aVZ("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dQj(r,a0),r.d===B.xc),1),B.af,A.E(i.aVZ("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dQo(r,a0),r.d===B.a82),1)],u),B.l,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.T,new A.bL(B.a7,k,k,A.hs(D.c_o,D.h_O,new C.dQp(r,l.e,a0),A.fs(k,k,k,k,k,k,k,k,k,k,k,B.cJ,k,k,k,k,k,k,k,k,k,k,k,k,k,B.ch)),k)],u))
v.push(B.W)
t=A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uZ(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.Z,!1,k,!0,B.t,k,A.aP(),l.f,k,k,k,k,k,2,i.aVj("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.ec,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.W)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.l(10)
p=A.l(10)
o=A.l(10)
n=A.K((t?B.bu:B.bh).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xo(r.a,!1)
v.push(A.aH(!1,B.a3,!0,q,A.aN(!1,p,!0,A.r(k,A.A(A.a([A.E(A.x(A.a([t,B.bG,A.d(m,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,14,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.i,0,B.p),1),D.bX1],u),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bk,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dQq(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.aj))
if(!h)B.d.u(v,A.a([B.T,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.W)
t=A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.Z,!1,k,!0,B.t,k,A.aP(),l.r,k,k,k,k,k,2,i.aVi("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.ae)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.as,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b3s(r.b.length!==0,B.mi,new C.dQr(r,i,a0),new C.dQs(r,a0),"Upload from gallery","ID photo"))
v.push(i.b3s(r.c.length!==0,D.bQn,new C.dQt(r,i,d,a0),new C.dQu(r,a0),"Camera or gallery","Selfie"))
v.push(B.T)
t=l.w
v.push(new Ao.a8T("Signature (optional)",t,new C.dQv(a0),new C.dQk(a0,t),new C.dQl(d,t,a0),k))
v.push(B.aC)
i=i.a.d.a
t=i?B.bu:B.bh
s=(i?B.bu:B.bh).j(0.28)
s=A.E(A.dV(E.aXA,new C.dQm(d),A.dj(k,k,k,k,k,k,k,k,k,t,k,k,B.qF,k,new A.b9(A.l(10),B.a1),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cJ,k,k,k,B.c,k,B.qF,k,new A.b9(A.l(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.af,A.E(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vL,k,k,k),k,new C.dQn(r,w,d),t),1)],u),B.l,k,B.e,B.i,0,k,k))
return A.r(k,A.cb(A.x(v,B.al,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.t2,B.jr,k,k,360)},
$S:176}
C.dQh.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dQi.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dQj.prototype={
$0(){return this.b.$1(new C.dQg(this.a))},
$S:0}
C.dQg.prototype={
$0(){var w=this.a
w.d=B.xc
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dQo.prototype={
$0(){return this.b.$1(new C.dQf(this.a))},
$S:0}
C.dQf.prototype={
$0(){var w=this.a
w.d=B.a82
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dQp.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dQq.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xt(null,u.b,A.c_(2020,1,1,0,0,0,0,0),null,s,A.c_(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dQe(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQe.prototype={
$0(){var w=this.b
return this.a.a=A.c_(w.gcl(),w.gcg(),w.gcz(),0,0,0,0,0)},
$S:0}
C.dQr.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Q9(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dQd(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQd.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dQs.prototype={
$0(){return this.b.$1(new C.dQc(this.a))},
$S:0}
C.dQc.prototype={
$0(){return this.a.b=""},
$S:0}
C.dQt.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.eg:B.c
w=3
return A.b(A.bU(q,null,new C.dQa(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Q9(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dQb(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQa.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dI(!1,w,w,w,!0,w,w,w,!0,w,w,B.as7,w,w,w,w,new C.dQ4(d),!1,w,w,w,w,w,w,w,D.fQR,w,w,w),A.dI(!1,w,w,w,!0,w,w,w,!0,w,w,B.as5,w,w,w,w,new C.dQ5(d),!1,w,w,w,w,w,w,w,D.fXV,w,w,w)],x.p),B.l,w,B.e,B.O,0,B.p),!0,!1,B.ag,!0,!0)},
$S:27}
C.dQ4.prototype={
$0(){A.a6(this.a,!1).O("camera")
return null},
$S:0}
C.dQ5.prototype={
$0(){A.a6(this.a,!1).O("gallery")
return null},
$S:0}
C.dQb.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dQu.prototype={
$0(){return this.b.$1(new C.dQ9(this.a))},
$S:0}
C.dQ9.prototype={
$0(){return this.a.c=""},
$S:0}
C.dQv.prototype={
$0(){return this.a.$1(new C.dQ8())},
$S:0}
C.dQ8.prototype={
$0(){},
$S:0}
C.dQk.prototype={
$0(){return this.a.$1(new C.dQ7(this.b))},
$S:0}
C.dQ7.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dQl.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aj0(u.a,null,null,new C.dQ6(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQ6.prototype={
$4(d,e,f,g){this.a.$1(new C.dQ3(this.b,d))},
$S:375}
C.dQ3.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.u(w,this.b)},
$S:0}
C.dQm.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dQn.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.T(D.foE)
return}if(w.a.d==null){w.c.L(x.q).f.T(D.fls)
return}A.a6(w.c,!1).O(!0)},
$S:0}
C.dQR.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:87}
C.dQS.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.eg:B.c,n=A.l(14),m=A.K((p?B.bu:B.bh).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.aS:B.as,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bu(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.bu:B.bh,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zL(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.m(r,r,w.zL(r).length>0?B.bD:B.cJ,r,r,r,r,r,r,r,r,12,r,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bh
t=(q?B.bu:B.bh).j(0.28)
s=x.p
return new A.d2(e,!1,A.as(A.aH(!1,B.a3,!0,r,A.r(r,A.x(A.a([p,B.T,v,u,B.aC,A.A(A.a([A.E(A.dV(B.o5,new C.dQP(d),A.dj(r,r,r,r,r,r,r,r,r,w,r,r,B.k2,r,new A.b9(A.l(10),B.a1),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.af,A.E(A.bJ(D.fYm,r,new C.dQQ(d),A.bp(B.cJ,r,r,r,B.c,r,B.k2,r,new A.b9(A.l(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.i,0,r,r)],s),B.al,r,B.e,B.O,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.CD,B.GZ,r,r,300),B.f,B.L,0,r,r,r,r,r,B.aj),r,r,r),r)},
$S:34}
C.dQP.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dQQ.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dQL.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dQM(r),p=r.a.d.a,o=p?B.eg:B.c,n=A.l(14),m=A.K((p?B.bu:B.bh).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.m(s,s,r.a.d.a?B.aS:B.as,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Bu(l.c),s,s,s,s,s,s,D.fBP,s,s,s)],p),B.l,s,B.e,B.i,0,s,s)
w=A.iP((r.a.d.a?B.bu:B.bh).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a2N,"View receipt",new C.dQE(r,d,l))
u=l.x!=null
t=u?B.pD:B.qO
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bE4,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dQF(r,d,l)),q.$3$icon$label$onTap(B.CS,"Edit",new C.dQG(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mi,"View / download ID",new C.dQH(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bQm,"View / download selfie",new C.dQI(r,d,l)))
if(l.gaHX())p.push(q.$3$icon$label$onTap(Ac.a4_,"View / download signature",new C.dQJ(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bD,B.ek,"Delete",new C.dQK(r,d,l)))
p.push(B.aw)
return A.bm(!0,new A.D(B.uH,A.r(s,A.x(p,B.l,s,B.e,B.O,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:27}
C.dQM.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.as
else w=d
return A.aN(!1,v,!0,new A.D(B.eW,A.A(A.a([A.X(e,w,v,v,v,20),B.bd,A.d(f,v,v,v,v,v,v,A.m(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1967}
C.dQE.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fZA(w,this.c)},
$S:0}
C.dQF.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.SX(this.c)},
$S:0}
C.dQG.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.DH(this.c)},
$S:0}
C.dQH.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bGB(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dQI.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bGB(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dQJ.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fZF(w,this.c)},
$S:0}
C.dQK.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.Q8(0,this.c)},
$S:0}
C.dQT.prototype={
$1(d){return d.x==null},
$S:255}
C.dQU.prototype={
$1(d){return d.x!=null},
$S:255}
C.dQV.prototype={
$2(d,e){return d+e.c},
$S:1968}
C.dQW.prototype={
$0(){return this.a.bDW()},
$S:0}
C.dQN.prototype={
$0(){return this.a.agn(this.b)},
$S:0}
C.fIe.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fIf.prototype={
$0(){return B.d.gH(D.a5j)},
$S:z+77}
C.dgs.prototype={
$0(){var w=this.a
return w.m(new C.dgq(w,this.b))},
$S:0}
C.dgq.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dgr.prototype={
$0(){},
$S:0}
C.dgt.prototype={
$0(){var w=this.a.gc2n()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.fKK.prototype={
$1(d){return C.hmW(A.a2(d,x.N,x.z))},
$S:z+11}
C.fKL.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fKM.prototype={
$2(d,e){var w=A.ca(d.a,null),v=A.ca(e.a,null)
if(w!=null&&v!=null)return B.o.aS(w,v)
return d.d.aS(0,e.d)},
$S:z+83}
C.fYb.prototype={
$1(d){return d.aj()},
$S:z+12}
C.h5P.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fHk.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bRQ.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eK(e,v)?v:null},
$S:1969}
C.fYM.prototype={
$1(d){var w=this
return new C.a_K(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dh7.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dh6(w,d))},
$S:z+80}
C.dh6.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgW.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dgT.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dgu.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dgv.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dgX.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dgD.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.H,u=v?B.eg:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.as,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ej(A.a([A.bP(!1,B.dt,w,w,!0,w,w,w,new C.dgB(d),w,w),A.bJ(B.xA,w,new C.dgC(d),A.bp(B.nt,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dgB.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dgC.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dgE.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.dgU.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dgV.prototype={
$0(){return B.d.gH(D.zW)},
$S:z+14}
C.dgz.prototype={
$1(d){var w=this.a,v=w.y,u=w.gz5(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.U7(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dgA.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgF.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_i(v,u,J.ad(w.d),null)},
$S:z+40}
C.dgG.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dh5.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.az(s,new C.a__(r.y,r.gz5(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dh3(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bcE(v,e,w,u,t,r.gbUx(),C.hCD(r.y.Q),r.gz5(0),s)
w=t}return A.c6(q,new C.dh4(r,e),new A.D(B.a0W,w,s))},
$S:1970}
C.dh4.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd5(t).ay){t=this.b
u=x.cy.a(B.d.gd5(u.f.f)).gvr(0)
w=t-(u==null?t:u)}else w=0
v=B.j.D(w,-1,0)
u=A.dr()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fL(v*3.141592653589793*0.5)
return A.fB(B.a7,A.d3(e,B.j.D(1+v*0.5,0,1)),null,u,!0)},
$S:44}
C.dh3.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJ8(B.qx,B.iB)},
$S:0}
C.dgQ.prototype={
$0(){var w=this.a
return w.m(new C.dgP(w))},
$S:0}
C.dgP.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dgR.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).O(null)
return null},
$S:0}
C.dgw.prototype={
$1(d){var w,v,u=null,t=A.l(26),s=E.kr.j(0.5),r=x.p,q=A.a([D.fPo,B.ae],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ct(p.d)?"Write this book":"Write a new book"
q.push(p.ZV(d,B.ed,w,J.ct(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.ZV(d,K.aq2,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cy,A.d("Your book is in English.",u,u,u,u,u,u,A.m(u,u,D.kO.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cy,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.m(u,u,D.kO.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.ZV(d,W.ar3,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.ZV(d,B.qT,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.ZV(d,B.qT,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eG(u,E.C3,A.bm(!0,new A.D(Ab.yS,A.x(q,B.E,u,B.e,B.O,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.Oq,u,B.d8,u,new A.b9(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:47}
C.dgS.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dgJ.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.a_M(v,J.cJ(w.d),w.r+1,null)},
$S:z+44}
C.dgK.prototype={
$1(d){var w=null
return A.oQ(!1,A.ej(w,w,w,E.C3,new A.k6(this.a,new C.dgI(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:314}
C.dgI.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.ab_,B.p3,A.E(A.d(e,w,w,w,w,w,w,B.jA,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:753}
C.dgL.prototype={
$0(){return this.a.a=!1},
$S:52}
C.dgM.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.dgN.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgO.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.BD(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.SK(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dgH(s,t))
w=4
return A.b(s.lh(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dgH.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgZ.prototype={
$1(d){var w=null
return A.oQ(!1,A.ej(w,w,w,E.C3,new A.k6(this.a,new C.dgY(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:314}
C.dgY.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.ab_,B.p3,A.E(A.d(e,w,w,w,w,w,w,B.jA,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:753}
C.dh_.prototype={
$0(){return this.a.a=!1},
$S:52}
C.dh0.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.dh1.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.dh2.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.BD(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lh(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dgx.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bkT(B.qx,A4.O0)},
$S:0}
C.dgy.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJ8(B.qx,A4.O0)},
$S:0}
C.diU.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.diV.prototype={
$1(d){var w=this.a
return w.m(new C.diT(w))},
$S:9}
C.diT.prototype={
$0(){return this.a.e="page"},
$S:0}
C.diW.prototype={
$1(d){var w=this.a
return w.m(new C.diS(w))},
$S:9}
C.diS.prototype={
$0(){return this.a.e="book"},
$S:0}
C.diX.prototype={
$1(d){var w=this.a
return w.m(new C.diR(w))},
$S:9}
C.diR.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.diY.prototype={
$0(){var w=this.a
return w.m(new C.diQ(w,this.b))},
$S:0}
C.diQ.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.diZ.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2K()
A.a6(this.b,!1).O(new A.bry(w,v))},
$S:0}
C.dhm.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dhl.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_I(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dhq.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dhp.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.baT(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hs,v,v,v)
return A.ej(A.a([A.bP(!1,B.dt,v,v,!0,v,v,v,new C.dhn(d),v,v),A.bJ(B.xA,v,new C.dho(d),A.bp(B.nt,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.C3,w,v,v,v,v,D.fOa,v)},
$S:18}
C.dhn.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dho.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dhr.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dhs.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.cb(A.bX(B.bH,r,B.bt,t,18,14),B.t,t,B.y,t,D.bF3,t,t,B.ah)},
$S:297}
C.dhk.prototype={
$0(){return this.a.QW(0,this.b)},
$S:0}
C.dhj.prototype={
$0(){return this.a.Qn(0,this.b)},
$S:0}
C.cPM.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cPN.prototype={
$0(){return B.d.gH(D.zW)},
$S:z+14}
C.cPO.prototype={
$4(d,e,f,g){var w=null,v=A.l(e)
return A.bS(0,new A.D(d,new A.bN(new A.o(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.n),B.bi,w,w),w),0,0,0)},
$S:1972}
C.d8j.prototype={
$1(d){return this.a.m(new C.d8i(this.b,this.c))},
$S:9}
C.d8i.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d8I.prototype={
$1(d){return this.a.m(new C.d8v())},
$S:2}
C.d8v.prototype={
$0(){},
$S:0}
C.d8J.prototype={
$1(d){return this.a.m(new C.d8u())},
$S:2}
C.d8u.prototype={
$0(){},
$S:0}
C.d8K.prototype={
$0(){var w=this.a
return w.m(new C.d8t(w,this.b))},
$S:0}
C.d8t.prototype={
$0(){var w=this.a
return w.d=w.gor().Gg(this.b.a)},
$S:0}
C.d8L.prototype={
$0(){var w=this.a
return w.m(new C.d8s(w,this.b))},
$S:0}
C.d8s.prototype={
$0(){var w=this.a
return w.d=w.gor().cNM(this.b)},
$S:0}
C.d8M.prototype={
$1(d){return this.a.m(new C.d8r())},
$S:2}
C.d8r.prototype={
$0(){},
$S:0}
C.d8N.prototype={
$0(){var w=this.a
return w.m(new C.d8q(w,this.b))},
$S:0}
C.d8q.prototype={
$0(){var w=this.a
return w.d=w.gor().cNR(this.b.a)},
$S:0}
C.d8O.prototype={
$1(d){var w=this.a
return w.m(new C.d8D(w,d))},
$S:6}
C.d8D.prototype={
$0(){var w=this.a
return w.d=w.gor().cOL(this.b)},
$S:0}
C.d8P.prototype={
$1(d){var w=this.a
return w.d=w.gor().aG4(d)},
$S:2}
C.d8Q.prototype={
$1(d){var w=this.a
return w.d=w.gor().cNU(d)},
$S:2}
C.d8S.prototype={
$1(d){var w=this.a
return w.d=w.gor().cOJ(d)},
$S:2}
C.d8T.prototype={
$1(d){var w=this.a
return w.m(new C.d8C(w,d))},
$S:9}
C.d8C.prototype={
$0(){var w=this.a
return w.d=w.gor().cOA(this.b)},
$S:0}
C.d8U.prototype={
$0(){var w=this.a,v=w.gor(),u=B.a.i(w.gz5(0).a.a),t=B.a.i(w.gaDg().a.a)
u=v.bfA(B.a.i(w.gasT().a.a),t,u)
A.a6(this.b,!1).O(u)
return null},
$S:0}
C.bS_.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bRU.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bRT(w,d))},
$S:12}
C.bRT.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bS2.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bRV.prototype={
$0(){var w=this.a
w.Q=D.b1Q
w.ae0(1)
w.r.x=null},
$S:0}
C.bRW.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b1Q)return
w=new A.e3()
w.cY(u.as*13+u.a.e)
v=u.r
v.Q=3+w.az(3)
v.z=D.d5y[w.az(6)]
v.as=u.f.a+2.6},
$S:0}
C.bRZ.prototype={
$0(){var w=this.a
w.Q=D.ady
w.ae0(2)
w.r.z=null},
$S:0}
C.bRY.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hG6
t.ae0(3)
w=t.r
w.d=s
w.x="I say: "+t.gCy()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.az(3)
w.z=s?D.dc6[v.az(4)]:D.dxt[v.az(3)]
w.as=t.a+2.8},
$S:0}
C.bS0.prototype={
$0(){var w=this.a
w.Q=D.b1R
w.CW=this.b
w.cy=1
w.ae0(4)
w.r.f=w.f.a+5},
$S:0}
C.bS1.prototype={
$0(){},
$S:0}
C.bRX.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bRR.prototype={
$0(){return this.a.L9(this.b)},
$S:0}
C.bRS.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bTw.prototype={
$0(){var w=this
return w.a.Rf(w.b,0,w.c,w.d)},
$S:0}
C.bTx.prototype={
$0(){var w=this
return w.a.Rf(w.b,3,w.c,w.d)},
$S:0}
C.bTy.prototype={
$0(){var w=this
return w.a.Rf(w.b,1,w.c,w.d)},
$S:0}
C.bTz.prototype={
$0(){var w=this
return w.a.bTY(w.b,w.c,w.d)},
$S:0}
C.bTA.prototype={
$0(){var w=this
return w.a.Rf(w.b,4,w.c,w.d)},
$S:0}
C.bTB.prototype={
$0(){var w=this
return w.a.Rf(w.b,2,w.c,w.d)},
$S:0}
C.bTC.prototype={
$0(){var w=this
return w.a.Rf(w.b,5,w.c,w.d)},
$S:0}
C.bTD.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:754}
C.bTv.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a6u[d],p=q.a.a2(0,new A.p(0,-q.b*1.2*124)),o=A.ft(r,B.ct,r,3,r,A.cQ(r,r,r,r,r,r,r,r,r,D.fsK,e),B.a5,B.bX,r,B.dE,B.bY)
o.o8(130)
w=o.b.a.c
w=p.aJ(0,new A.p(0,w.gba(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bn(A.bt(w,v.gba(v)+12,u+18),B.i9)
u=this.a
v=t.eQ(B.dN)
w=$.S()
s=A.L()
s.r=B.dx.gp(0)
u.an(v,s)
s=A.L()
s.r=D.qo.gp(0)
u.an(t,s)
w=new A.aG(w.r,B.ai,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bu())
v=A.L()
v.r=D.qo.gp(0)
u.af(w,v)
o.a5(u,new A.p(t.a+9,t.b+6))},
$S:755}
C.bSg.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.bSh.prototype={
$2(d,e){var w=this.a,v=B.o.aS(w.amG(d),w.amG(e))
if(v!==0)return v
return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.fvo.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h5G.prototype={
$2(d,e){if(e!=null)J.c5(this.a.c3(0,d,new C.h5H()),e)},
$S:z+66}
C.h5H.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.h5I.prototype={
$1(d){return d!==this.a},
$S:3}
C.h5J.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h5K.prototype={
$1(d){return d!==this.a&&!B.d.aV(this.b,new C.h5F(this.c,d))},
$S:3}
C.h5F.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h5L.prototype={
$1(d){return d!==this.a},
$S:3}
C.h5M.prototype={
$1(d){return d!==this.a},
$S:3}
C.h5N.prototype={
$1(d){return d!==this.a&&!B.d.aV(this.b,new C.h5E(this.c,d))},
$S:3}
C.h5E.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fIQ.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fXc.prototype={
$1(d){return d.Q},
$S:z+15}
C.fXd.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fEG.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fLG.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bN3.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h65.prototype={
$2(d,e){return B.o.aS(C.hyX(d),C.hyX(e))},
$S:215}
C.h66.prototype={
$1(d){return d!==this.a},
$S:3}
C.fXI.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bLd.prototype={
$0(){var w=this.a
w.ch=!0
w.b97()},
$S:0}
C.bL8.prototype={
$0(){},
$S:0}
C.bLe.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bL6.prototype={
$0(){},
$S:0}
C.bL7.prototype={
$0(){},
$S:0}
C.bLc.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b3(u,u,u,new C.bdj(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.l(14)
s.push(A.ap(u,A.r(u,A.d(t.dy,u,u,u,u,u,u,D.fAo,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.n),u,u,u,u,B.bV,u,u,u),u,u,14,14,6,u))}return A.az(B.c3,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bL9(t,e),u,u,u,u,u,u,u,new C.bLa(t,e),u,u,u,u,u,u,u,u,u,new C.bLb(t,e),u,u,u,u,!1,B.a4)},
$S:37}
C.bL9.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bLb.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:23}
C.bLa.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bL5.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.cqO.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cqP.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cqN(w))},
$S:0}
C.cqN.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cqQ.prototype={
$0(){var w=this,v=w.a
v.gj1()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cqR.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cqS.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cqT.prototype={
$0(){},
$S:0}
C.cqU.prototype={
$0(){var w=this.a
w.z=w.Xp(++w.e)
w.Q=A.c1(w.gkS()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cqK.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.cqL.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj1().length,e=i/2,d=new C.cqM(i,f,h),a0=g.as,a1=A.a4(a0).k("b8<2>")
a0=A.C(new A.b8(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.c6(new A.ha(a0),new C.cqF(g,new A.p(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj1().length!==0&&!B.d.q(g.gj1(),-1)
v=x.p
e=A.a([a0,A.ap(j,new C.QQ(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cK(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new R.N2(new C.cqG(g,u),new C.cqH(g,u),new C.cqI(g,u),j,j,new A.bo("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ap(j,A.d(a1,j,j,j,j,j,j,A.m(j,j,B.a.q(a1,"not a child")?B.fi:B.b4,j,j,j,j,j,j,j,j,13,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj1().length!==0&&!B.d.q(g.gj1(),-1)){a0=g.e+1>=g.gkS().length?"See my result":"Next family"
g=A.as(C.uz(a0,g.gqo(g),B.cU,B.jt,D.fC),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.Xp(0):s).length))break
if(!B.d.q(g.gj1(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.Xp(0)
o=s}else o=s
n=s[u]
n=A.e2(B.A,new C.QQ(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.Xp(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.r7(new A.bs(0,p,t),new C.cqJ(),new R.Eq(u,j,new C.QQ(l.b,k,62,!1,j),new A.kK(0.25,new C.QQ(m.b,k,62,!1,j),j),new A.kd(n,B.aj,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,R.hCv(),!0,!0,j,j,j,j,j,j,!1,B.iS,j,new A.bo("chip-"+r,a0),w),B.b_,B.iQ,j,new A.bo("t"+r+"-"+q,a0),v))}++u}g=A.bX(B.fW,a1,B.bt,j,6,8)}e.push(A.ap(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:67}
C.cqM.prototype={
$1(d){return new A.p(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:742}
C.cqF.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gj1().length!==0&&!B.d.q(t.gj1(),-1)
return A.b3(p,p,p,new C.bcN(q.b,o,v,w,p),B.az)},
$S:57}
C.cqH.prototype={
$1(d){return this.a.gj1()[this.b]===-1},
$S:z+30}
C.cqI.prototype={
$1(d){return this.a.cRD(this.b,d.a)},
$S:z+31}
C.cqG.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj1()[t]!==-1,r=A.l(18),q=e.length!==0?B.cU.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.cU:B.k_,B.r,2)
u=s?A.lE(new C.cqE(),A.as(new C.QQ(u.gaFx()[u.gj1()[t]].b,u.gaFx()[u.gj1()[t]].a,62,!1,v),v,v,v),B.lc,B.iQ,v,v,new A.bs(0.3,1,x.X),x.i):D.bd7
return A.cT(v,u,v,v,B.b_,new A.o(q,v,w,r,v,v,B.n),B.a3,v,100,v,v,v,v,v,88)},
$S:1975}
C.cqE.prototype={
$3(d,e,f){return A.e2(B.A,f,e,null,null)},
$S:111}
C.cqJ.prototype={
$3(d,e,f){return A.dP(f,new A.p(Math.sin(e*24)*8*(1-e),0))},
$S:111}
C.cQQ.prototype={
$1(d){return d>=1},
$S:118}
C.cFM.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkS()[w.e].d.length)w.m(new C.cFL(w))},
$S:12}
C.cFL.prototype={
$0(){return this.a.f++},
$S:0}
C.cFU.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cFV.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cFW.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cFT(w))},
$S:0}
C.cFT.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cFX.prototype={
$0(){return this.a.f++},
$S:0}
C.cFY.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cFZ.prototype={
$0(){},
$S:0}
C.cG_.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cFO.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.cFP.prototype={
$3(d,e,f){var w=null
return A.lE(new C.cFN(this.a,e),w,B.b_,B.hK,w,w,new A.bs(w,this.b,x.X),x.i)},
$S:1976}
C.cFN.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cU.j(u.as?0.6:0.15)
t=A.a([new A.ab(0,B.G,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.r(v,A.hY(new A.BL(new A.uU(B.w.j(e),B.M_,v,B.Yw),H.bXI(A.b3(v,v,v,new C.aBP(u.gkS()[u.e].c,u.as,v),B.az),new A.Ev(w,w,B.Wm)),v),B.aq),B.f,v,v,new A.o(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:1977}
C.cFQ.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.p(0,14*(1-e))),e)},
$S:104}
C.cFR.prototype={
$3(d,e,f){return A.dP(f,new A.p(Math.sin(e*22)*8*(1-e),0))},
$S:111}
C.cFS.prototype={
$0(){return this.a.bqd(this.b)},
$S:0}
C.f7Q.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.anc$)
v.anc$=w
v.qa$.sp(0,w)
v.ar4(u)},
$S:7}
C.fi_.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:12}
C.bT1.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bT0())},
$S:0}
C.bT0.prototype={
$0(){},
$S:0}
C.bSZ.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bSX.prototype={
$0(){},
$S:0}
C.bSY.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMQ()
w=s+1>=r.length?3:5
break
case 3:q=C.bGQ(p.gapV(0),0,r.length)
p.m(new C.bSU(p,q))
o=p
w=6
return A.b(C.BW(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BX(s.d,s.c.a,"school",p.gapV(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bSV())
w=4
break
case 5:p.m(new C.bSW(p))
p.gqw().VZ(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bSU.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bSV.prototype={
$0(){},
$S:0}
C.bSW.prototype={
$0(){return this.a.x++},
$S:0}
C.bT_.prototype={
$0(){return this.a.L9(this.b)},
$S:0}
C.bST.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.f7R.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.p(t,s),q=v.b,p=v.d,o=p?C.hCJ(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.En
C.SI(q,D.eqx,0,0.2,-0.6,-0.2,null,w,D.epg,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a2(0,new A.p(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.S()
p=A.L()
p.r=D.Gl.gp(0)
p.c=3
p.d=B.bv
q.ah(new A.p(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f7S.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.SI(this.a,D.epD,0,u,0.7,-0.5,null,null,D.JJ,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f7T.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.SI(this.a,D.erj,0,0,0.8,-0.5,null,null,D.JJ,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f7U.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.SI(w.b,D.eqr,0,v,-0.8,-0.5,null,null,D.JJ,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f7V.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.p(34,-122+Math.sin(w*5)*5)
else v=v?D.eqv:D.En
C.SI(p,D.epX,0,t,0,-0.6,null,v,D.JJ,3,0,s,1.3,u,0,w,0)
q=q.ccg(new A.p(222,455),9)
$.S()
w=A.L()
w.r=B.cU.gp(0)
p.af(q,w)},
$S:0}
C.f7W.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:754}
C.bSF.prototype={
$2(d,e){return d+e},
$S:62}
C.bSQ.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bSR.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bSS.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj1()[u.b]=s
t.gj1()[u.d]=t.y
w=t.as
v=t.qa$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bSM.prototype={
$1(d){return d},
$S:96}
C.bSL.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qa$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bSN.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bSO.prototype={
$0(){},
$S:0}
C.bSP.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FK(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.co(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a8(0)},
$S:0}
C.bSH.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.bSI.prototype={
$2(d,e){var w=this.a
w=w.gkS()[w.f].e
return B.o.aS(w[d],w[e])},
$S:62}
C.bSJ.prototype={
$2(d,e){var w=null,v=C.hdY(new A.av(A.aS(1/0,e.a,e.b),A.aS(1/0,e.c,e.d))),u=this.a
return A.az(B.c3,new A.em(A.b3(w,w,w,new C.bjY(u,u.qa$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bSG(u,v),w,w,w,w,!1,B.a4)},
$S:37}
C.bSG.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj1().length
u=B.o.D(B.j.bh((t.a-s.a)/r/450*v),0,v-1)
w.d1r(w.gj1()[u])}},
$S:23}
C.bSK.prototype={
$1(d){var w=this.a
return w.gkS()[w.f].d[d]},
$S:78}
C.ds3.prototype={
$2(d,e){return 0},
$S:62}
C.bSr.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bSq())},
$S:0}
C.bSq.prototype={
$0(){},
$S:0}
C.bSp.prototype={
$0(){},
$S:0}
C.bSj.prototype={
$0(){},
$S:0}
C.bSk.prototype={
$0(){},
$S:0}
C.bSo.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.Bi},
$S:0}
C.bSn.prototype={
$1(d){var w=null,v=this.a.gqw(),u=A.d(d,w,w,w,w,w,w,D.aW7,w,w,w),t=v.gbmE(0)
return A.az(B.c3,A.x(A.a([u,B.bG,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aWl,w,w,w)],x.p),B.E,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbsA(v),w,w,w,w,w,w,!1,B.a4)},
$S:136}
C.bSl.prototype={
$0(){return this.a.L9(this.b)},
$S:0}
C.bSm.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bSi.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.e2f.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e2g.prototype={
$1(d){return this.a},
$S:39}
C.e2h.prototype={
$0(){var w=this.a
return w.d=w.gSY().bf3(this.b)},
$S:0}
C.e2d.prototype={
$1(d){return new C.U8(this.a,null)},
$S:z+32}
C.e2e.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e2c.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hs,w,w,w)
return A.ej(A.a([A.bP(!1,E.aXK,w,w,!0,w,w,w,new C.e2a(d),w,w),A.bP(!1,D.fVN,w,w,!0,w,w,w,new C.e2b(d),w,w)],x.p),w,w,D.fC,v,w,w,w,w,D.fIh,w)},
$S:18}
C.e2a.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e2b.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e29.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.T(A.b2(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e2i.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:13}
C.e2j.prototype={
$0(){var w=this.a,v=this.b,u=C.bEz(v,10,w.r,!1)
return w.uC(C.hmX(w.a.d,"kahoot",u,w.gb6F(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e2k.prototype={
$0(){var w=this.a
return w.uC(new C.ama(this.b,w.a.d,w.r,null))},
$S:0}
C.e2l.prototype={
$0(){var w=this.a
return w.uC(new C.akn(this.b,w.a.d,w.r,null))},
$S:0}
C.e2o.prototype={
$0(){var w=this.a
return w.uC(new C.av6(this.b,w.a.d,w.r,null))},
$S:0}
C.e2p.prototype={
$0(){var w=this.a
return w.uC(new C.az4(this.b,w.a.d,w.r,null))},
$S:0}
C.e2q.prototype={
$0(){var w=this.a
return w.uC(new C.amd(this.b,w.a.d,w.r,null))},
$S:0}
C.e2r.prototype={
$0(){var w=this.a
return w.uC(new C.amh(this.b,w.a.d,w.r,null))},
$S:0}
C.e2s.prototype={
$0(){var w=this.a
return w.uC(new C.amj(this.b,w.a.d,w.r,null))},
$S:0}
C.e2t.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d1M()
return v.uC(C.hmX(v.a.d,"creator_"+u.a,w,v.gb6F(),"A game by the family",t,this.c.a))},
$S:0}
C.e2u.prototype={
$0(){return this.a.OU(this.b)},
$S:0}
C.e2v.prototype={
$0(){return this.a.XR(0,this.b)},
$S:0}
C.e2m.prototype={
$0(){return this.a.OU(null)},
$S:0}
C.e2n.prototype={
$0(){return this.a.L(x.q).f.T(D.fly)},
$S:0}
C.bSD.prototype={
$0(){var w=this.a
w.d=D.b1e
w.z=3},
$S:0}
C.bSE.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aPZ()}else w.m(new C.bSC(w))},
$S:12}
C.bSC.prototype={
$0(){return this.a.z--},
$S:0}
C.bSt.prototype={
$0(){var w=this.a
w.d=D.ade
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bSu.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bSs(w))
if(w.as<=0){d.a1(0)
w.b6B(-1)}},
$S:12}
C.bSs.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bSz.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.X2},
$S:0}
C.bSA.prototype={
$0(){return this.a.e++},
$S:0}
C.bSw.prototype={
$0(){var w=this.a
w.d=D.b1f
w.ay=this.b},
$S:0}
C.bSx.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bSB.prototype={
$2(d,e){return B.o.aS(e.b,d.b)},
$S:1978}
C.bSy.prototype={
$0(){return this.a.L9(this.b)},
$S:0}
C.bSv.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bS3.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ax()
s=A.a([new A.au(new A.ba(s,B.b5,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.au(new A.ba(u,B.b5,B.aP),r))}return s},
$S:1979}
C.bS4.prototype={
$0(){return this.a.gD7().c.push(C.h7K(null,0,20,""))},
$S:0}
C.bSe.prototype={
$1(d){var w=null
return A.bA(w,new A.b6(4,A.l(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dr,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.VU,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:258}
C.bSd.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gD7().c,m=this.b,l=n[m],k=o.cfj(l),j=B.c.j(0.06),i=A.l(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.KY,p,p,p),B.b1],g)
if(n.length>1)f.push(A.aI(p,p,p,p,B.arT,p,p,p,new C.bS8(o,m),p,p,p,p,p,p))
n=J.a7(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.i,0,p,p),A.aM(p,B.Z,!1,p,!0,B.t,p,A.aP(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bS9(l),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a5,p,B.ao,p,p,p,p),B.T],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aDT[v]
t=D.aDy[v]
s=v+1
f.push(new A.D(B.eP,new A.c8(B.aL,B.e,B.i,B.l,p,B.p,p,0,A.a([A.d(u,p,p,p,p,p,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.af,new A.bz(1,B.bb,A.aM(p,B.Z,!1,p,!0,B.t,p,A.aP(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bSa(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a5,p,B.ao,p,p,p,p),p),new As.Pu(v,l.c,new C.bSb(o,l),p,!1,D.lD,p,p,p,p,p,!1,!1,p,I.b1E,p,p,p,p,p,w)],g),p),p))}f.push(D.fNQ)
f.push(B.am)
n=A.a([D.fHm,B.af],g)
for(r=0;r<3;++r){q=D.cfu[r]
n.push(new A.D(B.fn,A.jy(p,p,p,A.d(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bSc(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.i,0,p,p))
return A.r(p,A.x(f,B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.kw,B.bk,p,p,p)},
$S:150}
C.bS8.prototype={
$0(){var w=this.a
return w.m(new C.bS7(w,this.b))},
$S:0}
C.bS7.prototype={
$0(){return B.d.cH(this.a.gD7().c,this.b)},
$S:0}
C.bS9.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bSa.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bSb.prototype={
$1(d){return this.a.m(new C.bS6(this.b,d))},
$S:152}
C.bS6.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bSc.prototype={
$1(d){return this.a.m(new C.bS5(this.b,this.c))},
$S:9}
C.bS5.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3V.prototype={
$0(){var w=this.a
w.wy()
w.a.bv()
w.a.qp()},
$S:0}
C.e3U.prototype={
$0(){var w=this.a
w.wy()
w.a.bv()
w.a.qp()},
$S:0}
C.e3X.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.ct(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e3Y.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3Z.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e3T.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e3W.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e40.prototype={
$0(){this.a.Pf()
return null},
$S:0}
C.e4_.prototype={
$0(){return this.a.F3(this.b)},
$S:0}
C.e3l.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bP(!1,B.dt,w,w,!0,w,w,w,new C.e3j(d),w,w),r=A.bp(B.bQ,w,w,w,w,w,w,w,w,w,w,w)
return A.ej(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e3k(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e3j.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e3k.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e3m.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cOf(this.b)},
$S:0}
C.e3g.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aVz(w.b,w.c,w.d)},
$S:7}
C.e2I.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e2J.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3_.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Ho(t.a.c),$async$$0)
case 2:s=r.nA(q.dH(e,new C.e2Y(t)))
if(s!=null&&t.c!=null)t.m(new C.e2Z(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e2Y.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e2Z.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e30.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e31.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3f.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cP1(C.hCT(w),w)},
$S:0}
C.e2X.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.Wt(u,w,C.aRh(u,w),new C.e2W(v),null)},
$S:z+37}
C.e2W.prototype={
$1(d){return this.bo3(d)},
bo3(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e2V(s,d))
w=3
return A.b(s.uy(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:548}
C.e2V.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bf3(this.b)},
$S:0}
C.e3c.prototype={
$1(d){return d.as},
$S:z+1}
C.e3d.prototype={
$1(d){var w=this
return new A.e1(new C.e3b(w.a,w.b,w.c,w.d,w.e),null)},
$S:21}
C.e3b.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.eg:B.c,h=A.l(26),g=A.K(B.bQ.j(0.5),B.r,1.5),f=A.r(k,D.bVf,B.f,k,k,new A.o(B.bQ.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.as,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,12.5,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.i,0,B.p),1)
f=A.A(A.a([f,B.bd,a0,A.aI(k,k,k,k,A.X(B.cC,j?B.bu:B.bh,k,k,k,k),k,k,k,new C.e35(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.i,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bQ:B.bQ.j(0.1)
p=new A.aO(20,20)
o=t.a===r
n=new A.ay(B.bQ,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bQ
a0.push(A.az(k,A.cT(k,A.d(m,k,k,k,k,k,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b_,new A.o(q,k,new A.bG(n,n,n,n),new A.be(p,p,p,p),k,k,B.n),B.h7,k,k,k,k,B.Cu,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e36(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bX(B.bH,a0,B.bt,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c6p,new A.D(D.bFt,f,k),new A.D(D.bFk,e,k),new A.D(B.t2,a0,k),new A.D(W.anb,A.d(v,k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(Ai.apN,j?B.bu:B.bh,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bFm,A.A(A.a([a0,B.au,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.as,k,k,k,k,k,k,k,k,k,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.b9q(k,B.bQ,k,k,!1,B.y,k,k,k,k,k,k,new C.e37(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.i,0,k,k),k))}f.push(B.aC)
j=A.l(20)
e=A.a([new A.ab(0,B.G,B.aB.j(0.35),B.i8,12)],x.V)
f.push(A.az(k,A.r(k,A.A(A.a([D.fHH,B.bd,D.bJL,D.bVV],w),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.caa,B.n),k,k,k,B.i3,B.bI,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e38(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.yU,A.A(A.a([A.E(A.dV(B.dt,new C.e39(a1),k),1),B.au,A.E(A.bJ(M.aYb,k,new C.e3a(t,a1),A.bp(B.bQ,k,k,k,k,k,B.cp,k,k,k,k,k)),1)],w),B.l,k,B.e,B.i,0,k,k),k))
return A.bm(!0,A.r(k,A.cb(A.x(f,B.E,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.aq,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.yJ,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:85}
C.e35.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e36.prototype={
$0(){return this.b.$1(new C.e34(this.a,this.c))},
$S:0}
C.e34.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e37.prototype={
$1(d){var w=this.a
w.m(new C.e32(w,d))
this.b.$1(new C.e33())},
$S:9}
C.e32.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e33.prototype={
$0(){},
$S:0}
C.e38.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(new A.aHV(!0,w))
return null},
$S:0}
C.e39.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e3a.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(new A.aHV(!1,w))
return null},
$S:0}
C.e3e.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cOQ(this.b.b)
w.r.a8(0)},
$S:0}
C.e2w.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aja(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hwa(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e2x.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aG1(w)},
$S:0}
C.e3o.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aey(this.b,w,this.c,null)},
$S:z+39}
C.e3i.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.eg:B.c,t=A.l(20),s=A.X(B.lR,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.as,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.ae,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.O,0,B.p)
return A.ej(A.a([A.bJ(D.fZz,w,new C.e3h(d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.ba,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e3h.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e2y.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e2z.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e2A.prototype={
$1(d){return d.a},
$S:z+8}
C.e2B.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hZ(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aG1(w)},
$S:0}
C.e2F.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aja(q)
w=A.U(q).k("Y<1>")
q=A.C(new A.Y(q,new C.e2D(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hwa(v.e,null,r,v.f,v.r,new C.e2E(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e2E.prototype={
$0(){return this.a.abc(this.b)},
$S:0}
C.e2D.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e2G.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("N<1,hZ>")
w=A.C(new A.N(w,new C.e2C(this.b),v),v.k("ak.E"))
u.d=t.aG1(w)},
$S:0}
C.e2C.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e3n.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e2S.prototype={
$1(d){return d.length!==0},
$S:3}
C.e2T.prototype={
$1(d){var w=this
return new A.e1(new C.e2R(w.a,w.b,w.c,w.d),null)},
$S:21}
C.e2R.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.eg:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.m(v,v,t?B.aS:B.as,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bh,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.N(o,new C.e2N(u,e,o),A.U(o).k("N<1,v>")))
p.push(B.T)
u=w.d
p.push(A.aM(v,B.Z,!1,v,!0,B.t,v,A.aP(),u,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(12),B.dv),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mA,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.O,0,B.p)
t=w.a
return A.ej(A.a([A.bP(!1,B.dt,v,v,!0,v,v,v,new C.e2O(d),v,v),A.bJ(B.L9,v,new C.e2P(t,u,o,e),A.bp(B.bQ,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.fMc,v,new C.e2Q(t,u,o,d),A.bp(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:205}
C.e2N.prototype={
$1(d){var w=null
return A.dI(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.m(w,w,this.a.a?B.aS:B.as,w,w,w,w,w,w,w,w,w,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aI(w,w,w,w,D.c3e,w,w,w,new C.e2M(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1980}
C.e2M.prototype={
$0(){return this.a.$1(new C.e2K(this.b,this.c))},
$S:0}
C.e2K.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e2O.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e2P.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e2L(w.c,u))
v.bP(0,B.cg)}},
$S:0}
C.e2L.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e2Q.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).O(!0)},
$S:0}
C.e2U.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cPu(this.b,D.uN,C.Hm(v,w.a.c))},
$S:0}
C.e3v.prototype={
$1(d){return d.as},
$S:z+1}
C.e3w.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j3(this.b,w)},
$S:0}
C.e3x.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.itN(v)
return w.WF(v==null?null:v.a)},
$S:0}
C.e3y.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.i4B(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aS(1/0,e.a,e.b)
s=A.aS(1/0,e.c,e.d)
l.cwH(new A.av(u,t),v.gblK(),new A.av(k,s))}k=A.l(22)
s=this.b.a
r=s?D.d3n:D.d1w
q=A.K(s?B.dr:D.bkS,B.r,1)
p=A.l(22)
o=A.bS(0,A.b3(m,m,m,new C.bg5(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.r(m,A.bx(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bS(0,A.v4(new A.R(n,n,n,n),new A.a5(u,t,new C.bh0(l.d,v,l.f,w,new C.e3r(l),l.gcgv(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ap(10,new C.byR(s,new C.e3s(l,e),new C.e3t(l,e),new C.e3u(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.b0,B.b7,B.x,r,m,m),B.n),m,m,m,Z.amh,m,m,m,m)},
$S:166}
C.e3r.prototype={
$1(d){var w=this.a
w.m(new C.e3p(w,d))},
$S:2}
C.e3p.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.I(0,v)},
$S:0}
C.e3s.prototype={
$0(){var w=this.b
return this.a.bdd(1.25,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e3t.prototype={
$0(){var w=this.b
return this.a.bdd(0.8,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e3u.prototype={
$0(){var w=this,v=w.b
return w.a.aVz(new A.av(A.aS(1/0,v.a,v.b),A.aS(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gblK())},
$S:0}
C.e3z.prototype={
$0(){var w=this.a
return w.m(new C.e3q(w))},
$S:0}
C.e3q.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e2H.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fI(new A.fy(s.c)),$async$$0)
case 2:t.yy("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dhw.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ap(w,new C.bkP(u,C.hHx(v.c,u),new C.dhv(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dhv.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dhx.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ap(w,new C.bob(d.d,d.c,u.f.q(0,d.a),new C.dhu(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dhu.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fIi.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nA(new A.cM(new A.Y(v,new C.fIj(d),w.k("Y<1>")),new C.fIk(),w.k("cM<1,n>")))},
$S:z+19}
C.fIj.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fIk.prototype={
$1(d){return d.a},
$S:z+8}
C.fIg.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fIh.prototype={
$1(d){return d.b},
$S:z+8}
C.fIn.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nA(new A.cM(new A.Y(v,new C.fIo(d),w.k("Y<1>")),new C.fIp(),w.k("cM<1,n>")))},
$S:z+19}
C.fIo.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fIp.prototype={
$1(d){return d.a},
$S:z+8}
C.fIl.prototype={
$1(d){var w,v=A.et([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fIm.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dhz.prototype={
$0(){return this.a},
$S:z+46}
C.dhQ.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:259}
C.dhI.prototype={
$2(d,e){var w=this.a.c3(0,d,new C.dhJ()),v=J.a7(w)
if(!v.q(w,e))v.I(w,e)},
$S:121}
C.dhJ.prototype={
$0(){return A.a([],x.s)},
$S:756}
C.dhH.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eK(w,e)
return w===!0},
$S:313}
C.dhA.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dhG.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dhF.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.I(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aT(v==null?D.DJ:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aT(v==null?B.Z:v)
while(v.C()){t=v.gR(v)
if(e.q(0,t))continue
e.I(0,t)
t=w.h(0,t)
t=J.aT(t==null?D.DJ:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1982}
C.dhB.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dhK.prototype={
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
break}A:{s=u.gR(u)
if(a8.q(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.I(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.u(w,r)
if(u){t=t.h(0,s)
t=J.aT(t==null?D.DJ:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.aV(w,new C.dhL(r)))w.push(r)}}B.d.bq(w,new C.dhM(a8))
B.d.aZ(w,new C.dhN())
q=C.i4A(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eXo],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bri(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1983}
C.dhL.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dhM.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dhN.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.dhO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a7(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b8(v,A.a4(v).k("b8<2>")).cF(0,0,B.q9)+88-w.gH(n).a}else u=0
for(w=J.a7(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:668}
C.dhP.prototype={
$1(d){return 16+d*156},
$S:162}
C.dhy.prototype={
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
t.n(0,d,new C.GG(r,new A.p(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.GG(s,new A.p(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.GG(s,new A.p(e,v)))}t=o.r.h(0,d)
t=J.aT(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gR(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.L1(d,new A.p(e+t,w),s,s.length))}},
$S:193}
C.dhC.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aL2(new A.p(v.a,v.b+28),new A.p(w.a,w.b+28),!0,null))},
$S:121}
C.dhD.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dhE.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:757}
C.dhR.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:757}
C.dhS.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:450}
C.dhT.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:194}
C.dhU.prototype={
$1(d){return d>=0.5},
$S:118}
C.fnA.prototype={
$3(d,e,f){var w=null,v=A.l(10)
return A.h9(A.aN(!1,v,!0,new A.a5(38,38,A.X(d,this.a.c?B.c:B.cm,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1985}
C.eYC.prototype={
$1(d){var w=null,v=A.l(8),u=B.bQ.j(0.12),t=A.l(8)
return new A.D(B.n2,A.aN(!1,v,!0,A.r(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fxe,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.Ow,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eYB(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eYB.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dxP.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dxO.prototype={
$1(d){var w=null,v=A.l(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.o3,B.K,w,w)
return A.ej(A.a([A.bP(!1,B.dt,w,w,!0,w,w,w,new C.dxM(d),w,w),A.bP(!1,A.d("Delete",w,w,w,w,w,w,A.m(w,w,B.mS,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dxN(d),w,w)],x.p),B.ba,B.Cp,w,u,D.bGm,w,D.bIj,new A.b9(v,B.a1),w,w)},
$S:18}
C.dxM.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dxN.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dxY.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dxZ.prototype={
$1(d){var w=this.a
return w.m(new C.dxX(w,d))},
$S:z+49}
C.dxX.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dy_.prototype={
$1(d){var w=null
return A.qL(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dy2.prototype={
$1(d){var w=this.a
return w.m(new C.dxW(w,d))},
$S:35}
C.dxW.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dy1.prototype={
$1(d){var w=null
return A.qL(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dy3.prototype={
$1(d){var w=this.a
return w.m(new C.dxV(w,d))},
$S:35}
C.dxV.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dy4.prototype={
$0(){var w=this.a
return w.m(new C.dxU(w))},
$S:0}
C.dxU.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dy5.prototype={
$0(){var w=this.a
return w.m(new C.dxT(w))},
$S:0}
C.dxT.prototype={
$0(){return++this.a.at},
$S:0}
C.dy6.prototype={
$0(){var w=this.a
return w.m(new C.dxS(w))},
$S:0}
C.dxS.prototype={
$0(){return--this.a.ax},
$S:0}
C.dy7.prototype={
$0(){var w=this.a
return w.m(new C.dxR(w))},
$S:0}
C.dxR.prototype={
$0(){return++this.a.ax},
$S:0}
C.dy8.prototype={
$1(d){var w=this.a
return w.m(new C.dxQ(w,d))},
$S:9}
C.dxQ.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dy0.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dy9.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.l(12)
if(p)w=B.bQ.j(0.18)
else w=q.c.a?B.eg:B.c
v=A.l(12)
if(p)u=B.bQ
else u=(q.c.a?B.ei:B.bP).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bQ
else t=q.c.a?B.bu:B.bh
t=A.X(f,t,r,r,r,18)
if(p)s=B.bQ
else s=q.c.a?B.bu:B.bh
return A.E(A.aH(!1,B.a3,!0,r,A.aN(!1,o,!0,A.cT(r,A.x(A.a([t,B.aw,A.d(e,r,r,r,r,r,r,A.m(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.i,0,B.p),r,r,B.b_,new A.o(w,r,u,v,r,r,B.n),B.eI,r,r,r,r,B.k2,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dya(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
$S:z+51}
C.dya.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dyj.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cft.prototype={
$2(d,e){return new A.bB(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:97}
C.cfA.prototype={
$1(d){return d.aj()},
$S:z+5}
C.cfB.prototype={
$2(d,e){var w=J.b7(e,new C.cfz(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bB(d,w,x.d2)},
$S:z+53}
C.cfz.prototype={
$1(d){return d.aj()},
$S:z+12}
C.cfv.prototype={
$1(d){return C.amm(A.a2(d,x.N,x.z))},
$S:z+9}
C.cfw.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cfx.prototype={
$1(d){return C.hmW(A.a2(d,x.N,x.z))},
$S:z+11}
C.cfy.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cfF.prototype={
$1(d){return new A.aI6(d.f.length,d.a,d.b)},
$S:z+55}
C.cfG.prototype={
$2(d,e){return B.a.aS(d.c,e.c)},
$S:572}
C.cfC.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cfD.prototype={
$1(d){return d.cOs(C.Hm(d,this.a))},
$S:z+85}
C.e3I.prototype={
$1(d){return C.uA(d,this.a.a.c)},
$S:z+3}
C.e3J.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e3N.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e3O.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e3F.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1B(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z6("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pz(r.c,r.e),$async$$0)
case 4:s.z6(p)
w=5
return A.b(s.Kd(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3G.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1B(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z6("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pz(r.c,r.e),$async$$0)
case 4:s.z6(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3H.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Ww(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.z6("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.z6("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.z6("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Kd(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ac(j)
o=r.a
if(o.c==null){w=1
break}o.z6(B.a.eo(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e3M.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1A(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.z6("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).ce(A.ed(new C.e3L(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pz(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3L.prototype={
$1(d){var w=this.b
return new C.a0G(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e3K.prototype={
$1(d){return D.hC5},
$S:z+58}
C.e3Q.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e3R.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e3P(w,d)
return new A.D(B.da,new C.bh4(this.b,d.c,d.a,w,null),null)},
$S:1986}
C.e3P.prototype={
$0(){return this.a.Yv(this.b.b)},
$S:0}
C.e3A.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e3B.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e3C.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e3D.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e3E.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e3S.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a_(s,"NGMYFTSYNC2"))t=!A.cS(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a6(this.b,!1).O(s)
return}},
$S:192}
C.dPW.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dPX.prototype={
$0(){return B.d.gH(D.a6T)},
$S:z+60}
C.dPY.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.as(A.X(this.b.d,B.c.j(0.95),w,w,D.dag,44),w,w,w),w,w,new C.blX(u,t,v,w),B.az)},
$S:57}
C.fZe.prototype={
$1(d){return A.pj(new C.fZd(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:133}
C.fZd.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.eg:B.c,p=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.tD,24)],x.V),o=r?B.ei:B.bP
o=A.r(t,t,B.f,t,t,new A.o(o,t,t,A.l(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bQ.j(0.18)],x.O)
w=A.r(t,D.bYj,B.f,t,t,new A.o(t,t,t,A.l(12),t,new A.a8(B.a7,B.aa,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.m(t,t,r?B.aS:B.as,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.r(t,A.x(A.a([B.W,o,new A.D(E.anf,A.A(A.a([w,B.bd,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.m(t,t,r?B.bu:B.bh,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.i,0,B.p),1)],u),B.l,t,B.e,B.i,0,t,t),t),A.E(A.is(!0,t,e,B.y,D.fjC,new C.fZc(this.b,s),20,B.amO,t,B.ah,!1),1)],u),B.l,t,B.e,B.i,0,B.p),B.f,t,t,new A.o(q,t,t,B.la,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:117}
C.fZc.prototype={
$2(d,e){var w=null,v=D.a6T[e],u=A.l(16),t=A.l(16),s=this.b.a,r=A.K(s?B.ei:B.bP,B.r,1),q=A.a([new A.ab(0,B.G,B.w.j(s?0.35:0.08),B.ev,8)],x.V),p=A.l(15),o=A.E(new C.a7u(v.a,!0,w),1),n=s?B.jY:B.iN,m=A.d(v.b,w,1,B.a2,w,w,w,A.m(w,w,s?B.aS:B.as,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aH(!1,B.a3,!0,w,A.aN(!1,u,!0,A.eB(A.bx(p,A.x(A.a([o,A.r(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.m(w,w,s?B.bu:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.k3,w,w,w)],l),B.al,w,B.e,B.i,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fZb(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)},
$S:81}
C.fZb.prototype={
$0(){A.a6(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cp5.prototype={
$0(){return this.a.ahq(this.b)},
$S:0}
C.fYC.prototype={
$1(d){return D.hx_},
$S:z+61}
C.h5n.prototype={
$1(d){var w=this
return new C.a2s(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fYG.prototype={
$1(d){return new C.a_k(this.a,null)},
$S:z+63}
C.fYF.prototype={
$1(d){return D.hy0},
$S:z+64}
C.d95.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d96.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d94(w,d))},
$S:35}
C.d94.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d97.prototype={
$1(d){return this.a.KR()},
$S:2}
C.d98.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d91.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d92.prototype={
$1(d){return this.a.KR()},
$S:2}
C.d93.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cHs.prototype={
$0(){},
$S:0}
C.cHy.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cHz.prototype={
$0(){return this.a.aQR(-1)},
$S:0}
C.cHA.prototype={
$1(d){return this.a.m(new C.cHx())},
$S:2}
C.cHx.prototype={
$0(){},
$S:0}
C.cHB.prototype={
$0(){return this.a.aQR(1)},
$S:0}
C.cHC.prototype={
$1(d){return this.a.m(new C.cHw())},
$S:2}
C.cHw.prototype={
$0(){},
$S:0}
C.cHD.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.m(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.ei:B.bP
return A.uY(u,u,B.b3,r,u,new C.cHv(t,d),B.wD,s,w,u,new A.ay(v,1,B.r,-1),B.ch)},
$S:1987}
C.cHv.prototype={
$1(d){var w=this.a
return w.m(new C.cHt(w,this.b))},
$S:9}
C.cHt.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cHE.prototype={
$1(d){return this.a.m(new C.cHu())},
$S:2}
C.cHu.prototype={
$0(){},
$S:0}
C.cHF.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fn5.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).O(w)},
$S:2}
C.fn6.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fn7.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).O(w)},
$S:0}
C.fn3.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbD3()
w=w.e
s=A.l(B.o.D(v-1,0,v))
return A.b3(new A.D(D.bIi,new A.em(A.r(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.byG(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:57}
C.fn4.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dG.aA(0,p)
p=A.l(12)
q=q.a.c
v=A.l(12)
u=A.l(12)
t=w*2.4
s=A.ar(B.aV,B.bQ,w)
s.toString
s=A.a([B.b3,s,B.aV],x.O)
return A.aH(!1,B.a3,!0,p,A.aN(!1,v,!0,A.eB(D.ev8,r,new A.o(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a8(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
$S:138}
C.fX_.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:60}
C.eVM.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eVD.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eVE.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eVK.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e1(new C.eVJ(w,this.b),null)},
$S:21}
C.eVJ.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.eg:B.c,t=A.l(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.as,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eG(w,u,new A.D(B.an9,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ae,C.ht0(new C.eVG(r,e),r.a),B.aC,A.A(A.a([A.E(A.dV(B.dt,new C.eVH(d),w),1),B.au,A.E(A.bJ(B.Wf,w,new C.eVI(r,d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.i,0,w,w)],q),B.al,w,B.e,B.O,0,B.p),w),w,w,w,w,w,B.d8,w,new A.b9(t,B.a1),w)},
$S:101}
C.eVG.prototype={
$1(d){return this.b.$1(new C.eVF(this.a,d))},
$S:35}
C.eVF.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eVH.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eVI.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.eVL.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.TD(this.b)},
$S:0}
C.eVy.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bf9(w)},
$S:0}
C.eVC.prototype={
$1(d){return this.boq(d)},
boq(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Mg(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j3(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eVB.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.eVA(this.b),v),v.k("M.E"))
u.d=t.bf9(w)},
$S:0}
C.eVA.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eVN.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j3(this.b,w)},
$S:0}
C.eVO.prototype={
$1(d){return this.a.bHd(d,this.b)},
$S:z+67}
C.eVz.prototype={
$0(){return this.a.abb(this.b)},
$S:0}
C.h5a.prototype={
$1(d){return new C.aeT(this.a,this.b,this.c,null)},
$S:z+68}
C.eVQ.prototype={
$0(){return this.a.a0p(this.b)},
$S:0}
C.eVR.prototype={
$0(){return this.a.QS(this.b)},
$S:0}
C.eVS.prototype={
$0(){return this.a.EZ(this.b)},
$S:0}
C.eVT.prototype={
$0(){return this.a.a0q(this.b)},
$S:0}
C.eVP.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eVt.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eVu.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eVv.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eVx.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qv(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eVw(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVw.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eWf.prototype={
$2(d,e){return d+e.gxJ()},
$S:z+71}
C.eWb.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eWc.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eVX.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.eg:B.c,s=A.l(24),r=A.r(v,D.bYN,B.f,v,v,new A.o(B.ay.j(u?0.18:0.08),v,A.K(B.ay.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.m(v,v,u?B.aS:B.as,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.m(v,v,u?B.bu:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.as
u=u?B.ei:B.bP
w=x.p
return A.eG(v,t,new A.D(B.wC,A.x(A.a([r,B.aO,q,B.T,p,B.dc,A.A(A.a([A.E(A.dV(B.o5,new C.eVV(d),A.dj(v,v,v,v,v,v,v,v,v,o,v,v,B.fh,v,new A.b9(A.l(14),B.a1),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.au,A.E(A.bJ(D.h2r,v,new C.eVW(d),A.bp(B.ay,v,v,v,v,v,B.fh,v,new A.b9(A.l(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.i,0,v,v)],w),B.l,v,B.e,B.O,0,B.p),v),v,v,v,v,v,B.d8,v,new A.b9(s,B.a1),v)},
$S:47}
C.eVV.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eVW.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eW5.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.eg:B.c,i=A.l(28),h=A.a([new A.ab(0,B.G,B.w.j(k?0.35:0.08),B.fR,28)],x.V),g=k?D.dhy:B.a6b,f=x.p
g=A.r(m,A.x(A.a([A.r(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.l(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aC,D.fcJ,B.aw,new A.bL(B.a7,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.m(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cE,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.i,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.aA,B.aD,B.x,g,m,m),B.n),m,m,m,m,E.and,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bh,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b83(B.b8,B.ju,new C.eW2(v,d),l,"Camera import","Scan QR"),1),B.au,A.E(v.b83(B.cD,Q.zB,new C.eW3(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.i,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bh,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.l(16)
r=B.ay.j(k?0.14:0.06)
q=A.l(16)
p=A.K(B.ay.j(0.28),B.r,1)
o=A.r(m,D.bY7,B.f,m,m,new A.o(B.ay.j(0.12),m,m,A.l(12),m,m,B.n),m,m,m,m,B.bV,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.m(m,m,k?B.aS:B.as,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bh,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.i,0,B.p),1)
return A.bm(!0,new A.D(B.wx,A.r(m,A.x(A.a([g,new A.D(B.ana,A.x(A.a([w,B.W,u,B.bz,t,B.W,A.aH(!1,B.a3,!0,m,A.aN(!1,s,!0,A.r(m,A.A(A.a([o,B.bd,n,A.X(B.eJ,k?B.bu:B.bh,m,m,m,m)],f),B.l,m,B.e,B.i,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bI,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eW4(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)],f),B.E,m,B.e,B.i,0,B.p),m)],f),B.l,m,B.e,B.O,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:27}
C.eW2.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.w8("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eW3.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.w8("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eW4.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.Ow(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eW0.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.eg:B.c,m=A.l(24),l=A.a([new A.ab(0,B.G,B.w.j(o?0.35:0.08),B.eR,24)],x.V),k=o?B.ei:B.bP
k=A.r(q,q,B.f,q,q,new A.o(k,q,q,A.l(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.l(12)
v=this.c
u=o?B.bu:B.bh
u=A.bx(w,new A.a5(48,48,C.aSy(!0,A.l(12),48,P.Pd,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.m(q,q,o?B.aS:B.as,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bu(v.gxJ())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wx,A.r(q,A.x(A.a([B.W,k,new A.D(D.an7,A.A(A.a([u,B.bd,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.m(q,q,o?B.bu:B.bh,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.i,0,B.p),1)],s),B.l,q,B.e,B.i,0,q,q),q),B.Cg,r.cqN(B.v8,B.aV,new C.eVZ(d),p,"QR code or backup file","Transfer project"),r.b54(!0,B.ek,B.ay,new C.eW_(d),p,"Remove from this device","Delete project"),B.W],s),B.l,q,B.e,B.O,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:27}
C.eVZ.prototype={
$0(){A.a6(this.a,!1).O("transfer")
return null},
$S:0}
C.eW_.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
C.eW1.prototype={
$1(d){return this.bor(d)},
bor(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Mg(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wn(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eWi.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eWh(w))},
$S:0}
C.eWh.prototype={
$0(){return this.a.r++},
$S:0}
C.eWj.prototype={
$0(){var w=this.a
return w.m(new C.eWg(w))},
$S:0}
C.eWg.prototype={
$0(){return this.a.r++},
$S:0}
C.eVU.prototype={
$0(){var w=this.a.c
w.toString
return A.j3(w,null)},
$S:0}
C.eVY.prototype={
$0(){return this.a.ck3(this.b)},
$S:0}
C.eWe.prototype={
$0(){var w=this.a
return w.m(new C.eWd(w,this.b))},
$S:0}
C.eWd.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eW8.prototype={
$0(){return this.a.w8("scan")},
$S:0}
C.eW9.prototype={
$0(){return this.a.w8("file")},
$S:0}
C.eWa.prototype={
$1(d){return this.a.cqO(d,this.b)},
$S:z+72}
C.eW7.prototype={
$0(){return this.a.F2(this.b)},
$S:0}
C.eW6.prototype={
$0(){return this.a.a0V(this.b,this.c)},
$S:0}
C.cGN.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cGM.prototype={
$1(d){return d.aj()},
$S:z+74}
C.cGK.prototype={
$1(d){return C.hNF(A.a2(d,x.N,x.z))},
$S:z+75}
C.cGL.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fHa.prototype={
$1(d){return d.y===D.kW},
$S:z+3}
C.h5X.prototype={
$1(d){return C.aRh(d,this.a)},
$S:z+3}
C.fEF.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bT8.prototype={
$1(d){return!d.as},
$S:z+1}
C.bT7.prototype={
$1(d){return d.aj()},
$S:z+23}
C.bT4.prototype={
$1(d){return C.hmY(A.a2(d,x.N,x.z))},
$S:z+24}
C.bT5.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bT6.prototype={
$1(d){return J.k(d)},
$S:17}
C.fv_.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fqK.prototype={
$1(d){return C.hcy(A.a2(d,x.N,x.z))},
$S:z+79}
C.fqL.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fqM.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fYq.prototype={
$1(d){return J.k(d)},
$S:17}
C.fYr.prototype={
$1(d){return d.a},
$S:z+81}
C.fYs.prototype={
$1(d){return d.length!==0},
$S:3}
C.fYt.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.fYu.prototype={
$1(d){return d.TD(null).aj()},
$S:z+82}
C.h5V.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fHE.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fKQ.prototype={
$1(d){return C.amm(A.a2(d,x.N,x.z))},
$S:z+9}
C.fKR.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fKS.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fKT.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fKU.prototype={
$1(d){return C.uA(d,this.a)},
$S:z+3}
C.fYd.prototype={
$1(d){return C.uA(d,this.a)},
$S:z+3}
C.h5Q.prototype={
$1(d){return C.amm(A.a2(d,x.N,x.z))},
$S:z+9}
C.h5R.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h5S.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fHl.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fHm.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h60.prototype={
$1(d){return!d.as},
$S:z+1}
C.fGQ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fGR.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fGS.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.h5o.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fLH.prototype={
$1(d){return d.Q},
$S:z+15}
C.fY6.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fKN.prototype={
$1(d){return C.amm(A.a2(d,x.N,x.z))},
$S:z+9}
C.fKO.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fKP.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fY1.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.frk.prototype={
$1(d){return d.length!==0},
$S:3}
C.frl.prototype={
$1(d){return C.hmY(A.a2(d,x.N,x.z))},
$S:z+24}
C.frm.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.frn.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fro.prototype={
$1(d){return d.length!==0},
$S:3}
C.frB.prototype={
$2(d,e){return d.eG(new C.frC(e))},
$S:1988}
C.frC.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.cf},
$S:1989}
C.fry.prototype={
$1(d){return C.i9I(d,this.a)},
$S:z+84}
C.frz.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.frA.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fvH.prototype={
$1(d){return d.a},
$S:z+56}
C.fvI.prototype={
$1(d){return d.length!==0},
$S:3}
C.fvJ.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fyD.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fDV.prototype={
$1(d){return C.hyy(d,C.Hm(d,this.a))},
$S:z+5}
C.fDW.prototype={
$1(d){return C.hyz(d,C.Hm(d,this.a))},
$S:z+5};(function aliases(){var w=C.aBR.prototype
w.bwg=w.t
w=C.aA4.prototype
w.bwb=w.t
w=C.aHj.prototype
w.bwE=w.t
w=C.aBS.prototype
w.bwh=w.t
w=C.aBU.prototype
w.bwi=w.t
w=C.aBV.prototype
w.bwj=w.t
w=C.aNu.prototype
w.bz7=w.t
w=C.aPC.prototype
w.bBs=w.t
w=C.aPD.prototype
w.bBt=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aES.prototype,"gcnI","cnJ",28)
var r
w(r=C.aBQ.prototype,"gcgB","cgC",65)
v(r,"gaP2","O2",0)
v(r,"gcw2","Br",0)
v(r,"gbP1","OK",0)
v(r,"gcKr","z7",0)
v(r,"gcpL","a1C",0)
v(r,"gbKp","Os",0)
v(r,"gbPr","XW",0)
w(r,"gbUx","bUy",78)
v(r,"gbEJ","Aq",0)
v(C.aBT.prototype,"gcKn","FW",0)
v(r=C.amb.prototype,"gbsC","bsD",2)
v(r,"gbsu","bsv",2)
v(r,"gcLw","cLx",2)
u(r,"gqo","kN",0)
u(r=C.ako.prototype,"geY","fX",2)
w(r,"gccd","cce",27)
u(C.av7.prototype,"gqo","kN",0)
v(r=C.az5.prototype,"gcX4","cX5",2)
u(r,"gqo","kN",0)
u(C.aL7.prototype,"gbsA","bsB",2)
v(C.amk.prototype,"gBV","cLJ",2)
u(r=C.ami.prototype,"gcMp","cMq",2)
u(r,"gqo","kN",0)
v(r=C.ame.prototype,"gbrs","brt",2)
v(r,"gcRB","cRC",2)
u(r=C.amg.prototype,"geY","fX",2)
u(r,"giy","cL2",2)
v(r=C.amc.prototype,"gcKS","cKT",2)
u(r,"gbqk","jI",2)
v(r=C.aFq.prototype,"gah2","wo",0)
v(r,"gcjj","a0M",0)
v(r,"gaTg","Iw",0)
v(r=C.aFn.prototype,"gcGl","a3K",0)
v(r,"gah2","wo",0)
v(r,"gcu4","a2g",0)
v(r,"gcje","b3i",2)
v(r,"gckg","a1_",0)
w(r,"gcgv","cgw",35)
v(r,"gbPj","IB",0)
v(r,"gcHq","cHr",2)
v(r,"gc6o","ZH",0)
w(r,"gcf_","cf0",36)
v(r,"gcj2","cj3",2)
v(r=C.aDR.prototype,"gccj","Qp",0)
v(r,"gccl","ccm",2)
v(r,"gbLU","aaO",0)
v(r=C.aFp.prototype,"gbSW","Yr",0)
v(r,"gc2u","Z8",0)
v(r,"gcAt","a37",0)
v(r,"gcwC","a2J",0)
v(C.aFo.prototype,"gcwl","aiR",0)
v(C.auj.prototype,"gceY","a0n",0)
v(C.aAA.prototype,"ga3t","KR",2)
v(C.aAz.prototype,"ga3t","KR",2)
v(C.azi.prototype,"ga3t","KR",2)
v(r=C.aGV.prototype,"gb4s","Ro",0)
v(r,"gbDx","Wz",0)
v(r,"gck4","ck5",2)
w(C.aGU.prototype,"gcfQ","cfR",69)
t(C.aGW.prototype,"gaTb",0,0,null,["$1","$0"],["Iv","bNd"],70,0,0)
s(C,"hGB","ijS",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aE,[C.apT,C.uV,C.nw,C.Ix,C.ag4,C.KV,C.uW,C.bTE,C.ti,C.bpt,C.amt,C.aeb,C.lu,C.bSf,C.auv,C.zH,C.al4,C.MV,C.baS,C.aaf,C.bi9,C.agb,C.aAj,C.ag_,C.aL7,C.L1,C.GG,C.bh2,C.aL2,C.arg,C.dhV,C.lZ,C.aVu,C.aVt,C.aTw,C.ul,C.rs,C.lF,C.hZ,C.kZ,C.aJ0])
u(A.hx,[C.fPu,C.fPt,C.fPv,C.fZ7,C.fCy,C.fCz,C.fCE,C.fNd,C.fNc,C.fNb,C.c8p,C.fZE,C.fZw,C.fZI,C.fHt,C.dQC,C.dQx,C.dQy,C.dQa,C.dQ6,C.dQR,C.dQS,C.dQL,C.dQM,C.dQT,C.dQU,C.fIe,C.fKK,C.fKL,C.fYb,C.h5P,C.fHk,C.fYM,C.dh7,C.dgu,C.dgD,C.dgU,C.dgz,C.dgF,C.dgw,C.dgJ,C.dgK,C.dgI,C.dgZ,C.dgY,C.diV,C.diW,C.diX,C.dhl,C.dhq,C.dhp,C.cPM,C.cPO,C.d8j,C.d8I,C.d8J,C.d8M,C.d8O,C.d8P,C.d8Q,C.d8S,C.d8T,C.bS_,C.bRU,C.fvo,C.h5I,C.h5J,C.h5K,C.h5F,C.h5L,C.h5M,C.h5N,C.h5E,C.fIQ,C.fXc,C.fEG,C.fLG,C.bN3,C.h66,C.fXI,C.bLe,C.bL9,C.bLb,C.bLa,C.cqM,C.cqH,C.cqI,C.cqG,C.cqE,C.cqJ,C.cQQ,C.cFM,C.cFP,C.cFN,C.cFQ,C.cFR,C.f7Q,C.fi_,C.bSM,C.bSG,C.bSK,C.bSn,C.e2g,C.e2d,C.e2e,C.e2c,C.e2i,C.bSE,C.bSu,C.bSe,C.bSd,C.bS9,C.bSa,C.bSb,C.bSc,C.e3W,C.e3l,C.e3g,C.e2I,C.e2Y,C.e30,C.e2X,C.e2W,C.e3c,C.e3d,C.e37,C.e2w,C.e3o,C.e3i,C.e2y,C.e2z,C.e2A,C.e2F,C.e2D,C.e2C,C.e2S,C.e2T,C.e2N,C.e3v,C.e3r,C.dhw,C.dhx,C.fIi,C.fIj,C.fIk,C.fIg,C.fIh,C.fIn,C.fIo,C.fIp,C.fIl,C.fIm,C.dhQ,C.dhG,C.dhB,C.dhL,C.dhM,C.dhP,C.dhD,C.dhS,C.dhT,C.dhU,C.fnA,C.eYC,C.dxO,C.dxY,C.dxZ,C.dy_,C.dy2,C.dy1,C.dy3,C.dy8,C.dy9,C.cfA,C.cfz,C.cfv,C.cfw,C.cfx,C.cfy,C.cfF,C.cfC,C.cfD,C.e3I,C.e3L,C.e3K,C.e3R,C.e3S,C.dPW,C.fZe,C.fYC,C.h5n,C.fYG,C.fYF,C.d96,C.d97,C.d92,C.cHA,C.cHC,C.cHD,C.cHv,C.cHE,C.fn5,C.fX_,C.eVK,C.eVG,C.eVC,C.eVA,C.eVO,C.h5a,C.eVX,C.eW5,C.eW0,C.eW1,C.eWa,C.cGM,C.cGK,C.cGL,C.fHa,C.h5X,C.fEF,C.bT8,C.bT7,C.bT4,C.bT5,C.bT6,C.fqK,C.fqL,C.fYq,C.fYr,C.fYs,C.fYt,C.fYu,C.h5V,C.fHE,C.fKQ,C.fKR,C.fKT,C.fKU,C.fYd,C.h5Q,C.h5R,C.h5S,C.fHl,C.fHm,C.h60,C.fGQ,C.fGR,C.h5o,C.fLH,C.fY6,C.fKN,C.fKO,C.fY1,C.frk,C.frl,C.frm,C.frn,C.fro,C.frC,C.fry,C.frz,C.fvH,C.fvI,C.fyD,C.fDV,C.fDW])
u(A.aw,[C.b05,C.am9,C.aWO,C.a__,C.bcE,C.QQ,C.a6I,C.tI,C.Iz,C.bh0,C.bkP,C.byR,C.bob,C.aex,C.bkO,C.aew,C.bkN,C.aDS,C.aK4,C.aey,C.GC,C.bh1,C.adN,C.bh_,C.bh4,C.b03,C.auj,C.aeT])
u(A.mo,[C.bdh,C.bew,C.ben,C.aIV,C.bjQ,C.bps,C.aWT,C.bdj,C.aBP,C.bcN,C.btu,C.bjY,C.bjo,C.bjv,C.bh3,C.bg5,C.blX,C.byG])
u(A.iO,[C.fZB,C.fZC,C.fZD,C.fZu,C.fZv,C.fZG,C.fZH,C.dQO,C.dQA,C.dQD,C.dQh,C.dQi,C.dQj,C.dQg,C.dQo,C.dQf,C.dQp,C.dQq,C.dQe,C.dQr,C.dQd,C.dQs,C.dQc,C.dQt,C.dQ4,C.dQ5,C.dQb,C.dQu,C.dQ9,C.dQv,C.dQ8,C.dQk,C.dQ7,C.dQl,C.dQ3,C.dQm,C.dQn,C.dQP,C.dQQ,C.dQE,C.dQF,C.dQG,C.dQH,C.dQI,C.dQJ,C.dQK,C.dQW,C.dQN,C.fIf,C.dgs,C.dgq,C.dgr,C.dgt,C.dh6,C.dgW,C.dgT,C.dgv,C.dgX,C.dgB,C.dgC,C.dgE,C.dgV,C.dgA,C.dgG,C.dh3,C.dgQ,C.dgP,C.dgR,C.dgS,C.dgL,C.dgN,C.dgO,C.dgH,C.dh_,C.dh2,C.dgx,C.dgy,C.diU,C.diT,C.diS,C.diR,C.diY,C.diQ,C.diZ,C.dhm,C.dhn,C.dho,C.dhr,C.dhk,C.dhj,C.cPN,C.d8i,C.d8v,C.d8u,C.d8K,C.d8t,C.d8L,C.d8s,C.d8r,C.d8N,C.d8q,C.d8D,C.d8C,C.d8U,C.bRT,C.bS2,C.bRV,C.bRW,C.bRZ,C.bRY,C.bS0,C.bS1,C.bRX,C.bRR,C.bRS,C.bTw,C.bTx,C.bTy,C.bTz,C.bTA,C.bTB,C.bTC,C.h5H,C.fXd,C.bLd,C.bL8,C.bL6,C.bL7,C.bL5,C.cqO,C.cqP,C.cqN,C.cqQ,C.cqS,C.cqT,C.cqU,C.cqK,C.cFL,C.cFU,C.cFV,C.cFW,C.cFT,C.cFX,C.cFY,C.cFZ,C.cG_,C.cFO,C.cFS,C.bT1,C.bT0,C.bSZ,C.bSX,C.bSY,C.bSU,C.bSV,C.bSW,C.bT_,C.bST,C.f7R,C.f7S,C.f7T,C.f7U,C.f7V,C.bSQ,C.bSR,C.bSS,C.bSL,C.bSN,C.bSO,C.bSP,C.bSH,C.bSr,C.bSq,C.bSp,C.bSj,C.bSk,C.bSo,C.bSl,C.bSm,C.bSi,C.e2f,C.e2h,C.e2a,C.e2b,C.e29,C.e2j,C.e2k,C.e2l,C.e2o,C.e2p,C.e2q,C.e2r,C.e2s,C.e2t,C.e2u,C.e2v,C.e2m,C.e2n,C.bSD,C.bSC,C.bSt,C.bSs,C.bSz,C.bSA,C.bSw,C.bSx,C.bSy,C.bSv,C.bS3,C.bS4,C.bS8,C.bS7,C.bS6,C.bS5,C.e3V,C.e3U,C.e3X,C.e3Y,C.e3Z,C.e3T,C.e40,C.e4_,C.e3j,C.e3k,C.e3m,C.e2J,C.e3_,C.e2Z,C.e31,C.e3f,C.e2V,C.e35,C.e36,C.e34,C.e32,C.e33,C.e38,C.e39,C.e3a,C.e3e,C.e2x,C.e3h,C.e2B,C.e2E,C.e2G,C.e3n,C.e2M,C.e2K,C.e2O,C.e2P,C.e2L,C.e2Q,C.e2U,C.e3w,C.e3x,C.e3p,C.e3s,C.e3t,C.e3u,C.e3z,C.e3q,C.e2H,C.dhv,C.dhu,C.dhz,C.dhJ,C.dhA,C.eYB,C.dxP,C.dxM,C.dxN,C.dxX,C.dxW,C.dxV,C.dy4,C.dxU,C.dy5,C.dxT,C.dy6,C.dxS,C.dy7,C.dxR,C.dxQ,C.dy0,C.dya,C.dyj,C.e3J,C.e3N,C.e3O,C.e3F,C.e3G,C.e3H,C.e3M,C.e3Q,C.e3P,C.e3A,C.e3B,C.e3C,C.e3D,C.e3E,C.dPX,C.fZb,C.cp5,C.d95,C.d94,C.d98,C.d91,C.d93,C.cHs,C.cHy,C.cHz,C.cHx,C.cHB,C.cHw,C.cHt,C.cHu,C.cHF,C.fn6,C.fn7,C.eVM,C.eVD,C.eVE,C.eVF,C.eVH,C.eVI,C.eVL,C.eVy,C.eVB,C.eVN,C.eVz,C.eVQ,C.eVR,C.eVS,C.eVT,C.eVP,C.eVt,C.eVu,C.eVv,C.eVx,C.eVw,C.eWb,C.eWc,C.eVV,C.eVW,C.eW2,C.eW3,C.eW4,C.eVZ,C.eW_,C.eWi,C.eWh,C.eWj,C.eWg,C.eVU,C.eVY,C.eWe,C.eWd,C.eW8,C.eW9,C.eW7,C.eW6])
u(A.af,[C.aq5,C.U7,C.a_I,C.a_M,C.a_K,C.a_i,C.ama,C.akn,C.av6,C.az4,C.amj,C.amh,C.amd,C.Wt,C.amf,C.U8,C.arj,C.ard,C.a0m,C.arh,C.a0G,C.a0H,C.a7u,C.a_k,C.a_j,C.ZR,C.a2s,C.Gq,C.azb,C.aui,C.auc,C.auh,C.P8])
u(A.ah,[C.aES,C.bgV,C.aBQ,C.bhj,C.aBT,C.beu,C.aBR,C.aA4,C.aHj,C.az5,C.aBV,C.aBU,C.aBS,C.bmj,C.amg,C.amc,C.aFq,C.aFn,C.aDR,C.aFp,C.aFo,C.bmk,C.aNu,C.aAA,C.aAz,C.azi,C.byJ,C.aPC,C.aPD,C.aGV,C.bnH,C.aGU,C.bAu])
u(A.jz,[C.dQz,C.dQB,C.dQw,C.dQV,C.fKM,C.bRQ,C.dh5,C.dh4,C.dgM,C.dh0,C.dh1,C.dhs,C.bTD,C.bTv,C.bSg,C.bSh,C.h5G,C.h65,C.bLc,C.cqR,C.cqL,C.cqF,C.f7W,C.bSF,C.bSI,C.bSJ,C.ds3,C.bSB,C.e3b,C.e2R,C.e3y,C.dhI,C.dhH,C.dhF,C.dhK,C.dhN,C.dhO,C.dhy,C.dhC,C.dhE,C.dhR,C.cft,C.cfB,C.cfG,C.dPY,C.fZd,C.fZc,C.fn3,C.fn4,C.eVJ,C.eWf,C.cGN,C.fv_,C.fqM,C.fKS,C.fGS,C.fKP,C.frB,C.frA,C.fvJ])
u(A.lG,[C.a1Y,C.agd,C.a2g,C.a09,C.acP,C.aLP,C.Iy,C.aml,C.cGO,C.cGP])
t(C.amb,C.aBR)
t(C.ako,C.aA4)
t(C.av7,C.aHj)
t(C.bgZ,C.aBV)
t(C.amk,C.bgZ)
t(C.bgY,C.aBU)
t(C.ami,C.bgY)
t(C.bgX,C.aBS)
t(C.ame,C.bgX)
t(C.blY,C.aNu)
t(C.byH,C.aPC)
t(C.byI,C.aPD)
t(C.aGW,C.bAu)
t(C.bb4,A.baT)
t(C.byK,A.a79)
t(C.bb3,C.byK)
w(C.aBR,A.cd)
w(C.aA4,A.cd)
w(C.aHj,A.eO)
w(C.aBS,A.cd)
v(C.bgX,C.ag_)
w(C.aBU,A.cd)
v(C.bgY,C.ag_)
w(C.aBV,A.cd)
v(C.bgZ,C.ag_)
w(C.aNu,A.eO)
w(C.aPC,A.cd)
w(C.aPD,A.cd)
v(C.bAu,A.eD)
v(C.byK,A.ji)})()
A.iW(b.typeUniverse,JSON.parse('{"b05":{"aw":[],"v":[]},"bdh":{"aC":[]},"aq5":{"af":[],"v":[]},"aES":{"ah":["aq5"]},"U7":{"af":[],"v":[]},"am9":{"aw":[],"v":[]},"aWO":{"aw":[],"v":[]},"bgV":{"ah":["U7"]},"a_I":{"af":[],"v":[]},"a_M":{"af":[],"v":[]},"a_K":{"af":[],"v":[]},"a_i":{"af":[],"v":[]},"aBQ":{"ah":["a_I"]},"bhj":{"ah":["a_M"]},"aBT":{"ah":["a_K"]},"a__":{"aw":[],"v":[]},"bew":{"aC":[]},"ben":{"aC":[]},"beu":{"ah":["a_i"]},"aIV":{"aC":[]},"bjQ":{"aC":[]},"bcE":{"aw":[],"v":[]},"ama":{"af":[],"v":[]},"amb":{"ah":["ama"]},"bps":{"aC":[]},"aWT":{"aC":[]},"akn":{"af":[],"v":[]},"av6":{"af":[],"v":[]},"az4":{"af":[],"v":[]},"ako":{"ah":["akn"]},"bdj":{"aC":[]},"QQ":{"aw":[],"v":[]},"aBP":{"aC":[]},"av7":{"ah":["av6"]},"bcN":{"aC":[]},"az5":{"ah":["az4"]},"amj":{"af":[],"v":[]},"amh":{"af":[],"v":[]},"amd":{"af":[],"v":[]},"amk":{"ah":["amj"]},"btu":{"aC":[]},"ami":{"ah":["amh"]},"bjY":{"aC":[]},"ame":{"ah":["amd"]},"bjo":{"aC":[]},"Wt":{"af":[],"v":[]},"amf":{"af":[],"v":[]},"U8":{"af":[],"v":[]},"a6I":{"aw":[],"v":[]},"bjv":{"aC":[]},"tI":{"aw":[],"v":[]},"Iz":{"aw":[],"v":[]},"bmj":{"ah":["Wt"]},"amg":{"ah":["amf"]},"amc":{"ah":["U8"]},"arj":{"af":[],"v":[]},"ard":{"af":[],"v":[]},"a0m":{"af":[],"v":[]},"aey":{"aw":[],"v":[]},"aFq":{"ah":["arj"]},"aFn":{"ah":["ard"]},"bh0":{"aw":[],"v":[]},"bh3":{"aC":[]},"bkP":{"aw":[],"v":[]},"bg5":{"aC":[]},"byR":{"aw":[],"v":[]},"bob":{"aw":[],"v":[]},"aDR":{"ah":["a0m"]},"aex":{"aw":[],"v":[]},"bkO":{"aw":[],"v":[]},"aew":{"aw":[],"v":[]},"bkN":{"aw":[],"v":[]},"aDS":{"aw":[],"v":[]},"aK4":{"aw":[],"v":[]},"GC":{"aw":[],"v":[]},"arh":{"af":[],"v":[]},"a0G":{"af":[],"v":[]},"a0H":{"af":[],"v":[]},"aFp":{"ah":["arh"]},"bh1":{"aw":[],"v":[]},"adN":{"aw":[],"v":[]},"bh_":{"aw":[],"v":[]},"bh4":{"aw":[],"v":[]},"aFo":{"ah":["a0G"]},"bmk":{"ah":["a0H"]},"b03":{"aw":[],"v":[]},"a7u":{"af":[],"v":[]},"blY":{"ah":["a7u"]},"blX":{"aC":[]},"auj":{"aw":[],"v":[]},"a_k":{"af":[],"v":[]},"a_j":{"af":[],"v":[]},"ZR":{"af":[],"v":[]},"a2s":{"af":[],"v":[]},"aAA":{"ah":["a_k"]},"aAz":{"ah":["a_j"]},"azi":{"ah":["ZR"]},"byJ":{"ah":["a2s"]},"Gq":{"af":[],"v":[]},"azb":{"af":[],"v":[]},"byH":{"ah":["Gq"]},"byI":{"ah":["azb"]},"byG":{"aC":[]},"aui":{"af":[],"v":[]},"aGV":{"ah":["aui"]},"aeT":{"aw":[],"v":[]},"auc":{"af":[],"v":[]},"auh":{"af":[],"v":[]},"bnH":{"ah":["auc"]},"aGU":{"ah":["auh"]},"P8":{"af":[],"v":[]},"aGW":{"ah":["P8"],"eD":[]},"bb3":{"ji":[],"fk":[]}}'))
A.Dm(b.typeUniverse,JSON.parse('{"ag_":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.at
return{e2:w("aTw"),cq:w("ml"),Q:w("rs"),r:w("bv<n,n>"),c5:w("aVt"),dY:w("aVu"),fH:w("MV"),de:w("al4"),dN:w("N2<H>"),gc:w("Eq<H>"),A:w("eL<n?>"),e:w("Ix"),B:w("nw"),P:w("hZ"),df:w("lu"),k:w("kZ"),x:w("aB<~>"),U:w("O<T4>"),V:w("O<ab>"),C:w("O<rs>"),O:w("O<u>"),c:w("O<MV>"),b:w("O<al4>"),ac:w("O<eL<n?>>"),I:w("O<nw>"),u:w("O<hZ>"),J:w("O<lu>"),_:w("O<kZ>"),cl:w("O<aB<ai<a9<n,@>>>>"),R:w("O<nz>"),eU:w("O<ai<+(G,G)>>"),ez:w("O<a9<n,aE>>"),gE:w("O<a9<n,n>>"),Y:w("O<a9<n,@>>"),fD:w("O<mS>"),bp:w("O<oL>"),g:w("O<p>"),ar:w("O<auv>"),v:w("O<fW>"),gy:w("O<aaf>"),L:w("O<+(n,n)>"),G:w("O<+(G,G)>"),E:w("O<+(G,~())>"),bd:w("O<+(n,H,Q)>"),bF:w("O<+count,id,name(H,n,n)>"),F:w("O<cU>"),s:w("O<n>"),cF:w("O<au>"),aS:w("O<j6>"),dT:w("O<baS>"),p:w("O<v>"),Z:w("O<fk>"),D:w("O<lF>"),h:w("O<aAj>"),cC:w("O<bi9>"),fp:w("O<KV>"),M:w("O<L1>"),gZ:w("O<aJ0>"),gA:w("O<ag4>"),e4:w("O<agb>"),dE:w("O<aL2>"),f7:w("O<Q>"),n:w("O<G>"),t:w("O<H>"),dS:w("O<aC?>"),d4:w("O<n?>"),eF:w("cw<ah<af>>"),d:w("ai<nw>"),do:w("ai<hZ>"),cg:w("ai<lu>"),ax:w("ai<kZ>"),fO:w("ai<a9<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),dy:w("ai<n>"),er:w("ai<au>"),gk:w("ai<lF>"),j:w("ai<@>"),fK:w("bB<n,n>"),d2:w("bB<n,ai<a9<n,@>>>"),a:w("a9<n,@>"),f:w("a9<@,@>"),gv:w("N<n,IA>"),cM:w("N<H,n>"),w:w("iF"),g2:w("rR"),bV:w("apT"),fL:w("cu"),K:w("aE"),dc:w("fW"),fo:w("Pu<H>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(Q,H)"),d9:w("+dx,hidden(G,ai<hZ>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),fT:w("ix<hZ>"),ec:w("ix<n>"),gW:w("r7<G>"),X:w("bs<G>"),bW:w("dJ"),W:w("bo<n>"),b4:w("bo<H>"),cI:w("k6<n>"),av:w("Y<zH>"),cc:w("Y<n>"),l:w("v"),gF:w("fk"),fA:w("lF"),dO:w("GG"),bw:w("aew<n?>"),cy:w("L3"),q:w("mC"),y:w("Q"),i:w("G"),z:w("@"),S:w("H"),eK:w("ai<kZ>?"),m:w("arg?"),cT:w("p?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),he:w("+qrPayload,token,usesRemaining(n,n,H)?"),gG:w("+members,trees,viewOnly(H,H,Q)?"),az:w("qn?"),T:w("n?"),aD:w("dJ?"),o:w("lF?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b5y=new A.be(B.fS,B.bJ,B.fS,B.bJ)
D.aet=new A.be(B.fS,B.is,B.fS,B.is)
D.b5M=new A.be(B.iF,B.bJ,B.bJ,B.bJ)
D.b5Q=new A.ay(B.cJ,1.4,B.r,-1)
D.b6_=new A.ay(B.ab,1,B.r,-1)
D.aeY=new A.aY(140,1/0,0,1/0)
D.b7o=new A.aY(0,1/0,64,1/0)
D.b7s=new A.aY(0,84,0,1/0)
D.af4=new A.aY(130,1/0,0,1/0)
D.aDq=w([B.m9,B.rQ,B.c],x.O)
D.c9f=new A.a8(B.aA,B.aD,B.x,D.aDq,null,null)
D.b8c=new A.o(null,null,null,null,null,D.c9f,B.n)
D.dgX=w([B.aV,B.bQ],x.O)
D.cbn=new A.a8(B.b0,B.b7,B.x,D.dgX,null,null)
D.b8x=new A.o(null,null,null,null,null,D.cbn,B.n)
D.YD=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fC=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dl2=w([B.dA,D.YD,D.fC],x.O)
D.c8t=new A.a8(B.b0,B.b7,B.x,D.dl2,null,null)
D.b9h=new A.o(null,null,null,null,null,D.c8t,B.n)
D.fus=new A.F(!0,B.bW,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h4V=new A.B("?",null,D.fus,null,null,null,null,null,null,null,null,null)
D.bd7=new A.cj(B.A,null,null,D.h4V,null)
D.W6=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNX=new A.B("\ud83c\udf33",null,D.W6,null,null,null,null,null,null,null,null,null)
D.afO=new A.cj(B.A,null,null,D.fNX,null)
D.fQC=new A.B("\ud83c\udfc6",null,Aq.KQ,null,null,null,null,null,null,null,null,null)
D.bdi=new A.cj(B.A,null,null,D.fQC,null)
D.bf7=new A.fl(null,null,null,null,null,E.kr,null,null,null,null)
D.afQ=new A.cj(B.A,null,null,D.bf7,null)
D.kO=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fv0=new A.F(!0,D.kO,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPC=new A.B("No books on the shelf yet.",null,D.fv0,null,null,null,null,null,null,null,null,null)
D.ev9=new A.D(B.nN,D.fPC,null)
D.bdy=new A.cj(B.A,null,null,D.ev9,null)
D.fC8=new A.F(!0,D.fC,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5Q=new A.B("\ud83d\ude8c  On the road\u2026",null,D.fC8,null,null,null,null,null,null,null,null,null)
D.evK=new A.D(B.cq,D.h5Q,null)
D.be0=new A.cj(B.A,null,null,D.evK,null)
D.aXy=new A.B("\ud83e\uddfa",null,D.W6,null,null,null,null,null,null,null,null,null)
D.bef=new A.cj(B.A,null,null,D.aXy,null)
D.fT4=new A.B("\ud83c\udfad",null,D.W6,null,null,null,null,null,null,null,null,null)
D.beq=new A.cj(B.A,null,null,D.fT4,null)
D.bet=new A.cj(B.A,null,null,A7.Yq,null)
D.aga=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.agh=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bgH=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bgM=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bgY=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bh0=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bh2=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bha=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lC=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bhe=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bhj=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bhk=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bhl=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lD=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bhX=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.BL=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bi5=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bip=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bis=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.biy=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.biG=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.agU=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.biN=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.YQ=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.agX=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.biY=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.YS=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bji=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.ah8=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bjH=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bjX=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bkk=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bkv=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.FV=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bkS=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bkV=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bkZ=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.ahC=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.blh=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bln=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.blt=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.ahG=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.blB=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bm2=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bma=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bmc=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bmh=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ahW=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bmT=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.aik=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bnR=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.aix=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bof=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.G7=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bol=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bov=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.box=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.aiC=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.boQ=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.boS=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.boV=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.aiK=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.ZB=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bph=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bpC=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bpH=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.aiW=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bpO=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.ZI=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bq8=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bq9=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.Gf=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bqX=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.brA=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.brG=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.brK=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qo=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.brV=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.brZ=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bs4=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bs6=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.ajH=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.ajL=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.Gl=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a_2=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.ajU=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bte=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.btx=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.btX=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bu5=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.akj=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a_d=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.buf=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.buw=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a_i=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.buN=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bv2=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a_n=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bv7=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.akB=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.akD=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bvq=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.akJ=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bvS=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bvW=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bw1=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bw9=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bwi=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bwR=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bxm=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fJN=new A.B("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bAT=new A.eL(null,D.fJN,B.fd,null,x.A)
D.fSW=new A.B("None",null,null,null,null,null,null,null,null,null,null,null)
D.bAV=new A.eL(null,D.fSW,B.fd,null,x.A)
D.alB=new A.bd(3e4)
D.bBs=new A.bd(38e5)
D.bCb=new A.iq(0,10,0,10)
D.bCk=new A.R(0,1,0,0)
D.bCv=new A.iq(0,4,0,4)
D.bCy=new A.R(0,4,5,0)
D.bCP=new A.R(10,10,14,10)
D.bD0=new A.iq(10,4,10,4)
D.bD8=new A.iq(10,8,10,8)
D.bD9=new A.R(10,8,8,8)
D.bDE=new A.R(12,6,12,2)
D.bDW=new A.R(14,0,14,6)
D.bE_=new A.R(14,10,6,6)
D.bE0=new A.R(14,12,14,0)
D.bE4=new A.R(14,12,14,8)
D.bE7=new A.R(14,12,8,14)
D.bEb=new A.iq(14,14,14,14)
D.bEu=new A.R(14,6,14,40)
D.bEx=new A.R(14,8,14,30)
D.bEV=new A.R(16,2,16,10)
D.bF3=new A.R(16,6,16,30)
D.bF5=new A.R(16,6,16,8)
D.bFk=new A.R(18,10,18,4)
D.bFm=new A.R(18,12,18,0)
D.bFt=new A.R(18,14,12,4)
D.an7=new A.R(18,16,18,8)
D.bFJ=new A.R(18,20,18,22)
D.bFP=new A.R(18,30,18,30)
D.bG5=new A.R(20,10,12,20)
D.bG8=new A.R(20,11,20,11)
D.bGk=new A.R(20,18,16,18)
D.bGm=new A.R(20,18,20,6)
D.bHa=new A.R(24,32,24,28)
D.bHb=new A.R(24,36,24,32)
D.bHf=new A.R(26,26,24,14)
D.bHu=new A.R(2,4,2,8)
D.bHy=new A.R(30,0,30,0)
D.bHJ=new A.R(38,22,22,22)
D.anv=new A.R(40,24,24,24)
D.bHL=new A.iq(40,40,40,40)
D.bHN=new A.R(46,30,30,30)
D.bIe=new A.R(56,40,40,40)
D.bIi=new A.R(1.25,1.25,1.25,1.25)
D.bIj=new A.R(60,0,60,0)
D.bIn=new A.R(6,14,6,16)
D.bIr=new A.R(6,4,12,0)
D.bIv=new A.R(6,6,10,2)
D.bIC=new A.iq(7,3,7,3)
D.bJ9=new A.R(5,1.5,5,1.5)
D.bJk=new A.R(6,2.5,6,2.5)
D.h06=new A.B("Family Games",null,B.jR,null,null,null,null,null,null,null,null,null)
D.fIp=new A.B("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.VY,null,null,null,null,null,null,null,null,null)
D.cKw=w([D.h06,D.fIp],x.p)
D.bym=new A.fn(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.cKw,null)
D.bJL=new A.bz(1,B.bb,D.bym,null)
D.h4s=new A.B("Signature",null,B.nj,null,null,null,null,null,null,null,null,null)
D.bJO=new A.bz(1,B.bb,D.h4s,null)
D.fXG=new A.B("MADE BY THE ONE WHO PLANTED THE TREE",null,S.tV,null,null,null,null,null,null,null,null,null)
D.bKl=new A.bz(1,B.bb,D.fXG,null)
D.h1z=new A.B("Tell the AI what to fix",null,B.dq,null,null,null,null,null,null,null,null,null)
D.bKD=new A.bz(1,B.bb,D.h1z,null)
D.fCV=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3x=new A.B("Worksheets",null,D.fCV,null,null,null,null,null,null,null,null,null)
D.fD6=new A.F(!0,E.agD,null,null,null,null,13,B.cE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2p=new A.B("Track your project spending",null,D.fD6,null,null,null,null,null,null,null,null,null)
D.d8h=w([D.h3x,B.aw,D.h2p],x.p)
D.by_=new A.fn(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.d8h,null)
D.bKJ=new A.bz(1,B.bb,D.by_,null)
D.fxQ=new A.F(!0,E.kr,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIZ=new A.B("FAMILY LIBRARY",null,D.fxQ,null,null,null,null,null,null,null,null,null)
D.bL1=new A.bz(1,B.bb,D.fIZ,null)
D.OQ=new C.Ix("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wG=new C.Iy(0,"male")
D.oA=new C.Iy(1,"female")
D.z3=new C.Iy(2,"unknown")
D.uN=new C.aml(0,"owner")
D.OR=new C.aml(1,"editor")
D.kW=new C.aml(2,"viewer")
D.aps=new A.a_(61199,"MaterialIcons",!1)
D.bQm=new A.a_(61504,"MaterialIcons",!1)
D.bQn=new A.a_(61505,"MaterialIcons",!1)
D.bQp=new A.a_(61587,"MaterialIcons",!1)
D.bQw=new A.a_(61890,"MaterialIcons",!1)
D.bRn=new A.a_(63034,"MaterialIcons",!0)
D.bRF=new A.a_(63153,"MaterialIcons",!1)
D.bSc=new A.a_(63429,"MaterialIcons",!1)
D.arz=new A.a_(984520,"MaterialIcons",!1)
D.bQU=new A.a_(62776,"MaterialIcons",!1)
D.bUy=new A.ae(D.bQU,26,B.b3,null,null,null)
D.bPk=new A.a_(57648,"MaterialIcons",!1)
D.bUS=new A.ae(D.bPk,14,B.c,null,null,null)
D.bV9=new A.ae(B.Hp,17,null,null,null,null)
D.bVf=new A.ae(B.a2T,null,B.bQ,null,null,null)
D.bVF=new A.ae(E.a30,null,null,null,null,null)
D.bVI=new A.ae(B.j9,18,E.kr,null,null,null)
D.a2J=new A.a_(62044,"MaterialIcons",!1)
D.bVO=new A.ae(D.a2J,null,B.aV,null,null,null)
D.bVV=new A.ae(B.zh,18,B.c,null,null,null)
D.bWC=new A.ae(B.ed,16,null,null,null,null)
D.bWJ=new A.ae(D.a2J,32,B.aV,null,null,null)
D.bX1=new A.ae(E.apt,18,B.cJ,null,null,null)
D.bY7=new A.ae(B.HA,22,B.ay,null,null,null)
D.bYj=new A.ae(B.ed,22,B.b3,null,null,null)
D.bYw=new A.ae(Y.a2O,22,B.c,null,null,null)
D.bYD=new A.ae(B.uW,52,B.c,null,null,null)
D.bYN=new A.ae(B.HA,30,B.ay,null,null,null)
D.bZ5=new A.ae(B.a34,null,B.c,null,null,null)
D.asg=new A.ae(B.v8,22,B.c,null,null,null)
D.bZe=new A.ae(B.ed,17,null,null,null,null)
D.bZC=new A.ae(B.wR,26,B.cJ,null,null,null)
D.c_o=new A.ae(B.a3e,16,null,null,null,null)
D.c0a=new A.ae(B.uW,24,B.c,null,null,null)
D.c0f=new A.ae(B.Pk,20,B.tu,null,null,null)
D.c0k=new A.ae(B.Hn,null,B.bQ,null,null,null)
D.c0t=new A.ae(B.j9,18,B.c,null,null,null)
D.c19=new A.ae(B.cC,22,B.ab,null,null,null)
D.c22=new A.ae(B.ek,16,B.ab,null,null,null)
D.c2e=new A.ae(D.a2J,20,B.aV,null,null,null)
D.asH=new A.ae(B.hO,20,null,null,null,null)
D.c2L=new A.ae(B.cC,18,D.kO,null,null,null)
D.c32=new A.ae(B.zr,28,B.c,null,null,null)
D.c3e=new A.ae(B.P9,null,B.fi,null,null,null)
D.c3z=new A.ae(B.zr,24,B.c,null,null,null)
D.c40=new A.ae(B.uW,null,B.aV,null,null,null)
D.c41=new A.ae(B.jK,20,B.cJ,null,null,null)
D.c4l=new A.ae(B.Hp,16,null,null,null,null)
D.c5U=new A.e7(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.k2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eO,!0,null,null,null,null)
D.atq=new C.a6I(10,null)
D.c6p=new C.a6I(12,null)
D.c6q=new C.a6I(14,null)
D.dpb=w([B.bw,B.aV,B.fr,B.b3],x.O)
D.c7B=new A.a8(B.aA,B.aD,B.x,D.dpb,null,null)
D.bqJ=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bwY=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d4I=w([D.bqJ,D.bwY],x.O)
D.c7N=new A.a8(B.b0,B.b7,B.x,D.d4I,null,null)
D.dj0=w([B.eZ,B.fZ,B.fr],x.O)
D.c7T=new A.a8(B.aA,B.aD,B.x,D.dj0,null,null)
D.ajv=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bhm=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d6X=w([D.ajv,D.bhm],x.O)
D.c8u=new A.a8(B.b0,B.b7,B.x,D.d6X,null,null)
D.bl8=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aCH=w([D.bl8,D.ajv],x.O)
D.c8N=new A.a8(B.aA,B.aD,B.x,D.aCH,null,null)
D.aid=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bnI=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.di2=w([D.aid,D.bnI],x.O)
D.c9r=new A.a8(B.a7,B.aa,B.x,D.di2,null,null)
D.dwg=w([B.bD,B.mT],x.O)
D.c9t=new A.a8(B.b0,B.b7,B.x,D.dwg,null,null)
D.bqE=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dxc=w([D.bqE,D.kO,D.kO,I.Nl],x.O)
D.dzO=w([0,0.07,0.9,1],x.n)
D.c9Z=new A.a8(B.a7,B.aa,B.x,D.dxc,D.dzO,null)
D.ca7=new A.a8(B.aA,B.aD,B.x,B.T_,null,null)
D.d2s=w([B.aB,D.lC],x.O)
D.caa=new A.a8(B.a7,B.aa,B.x,D.d2s,null,null)
D.dvO=w([B.b3,B.aV,B.bQ],x.O)
D.cba=new A.a8(B.aA,B.aD,B.x,D.dvO,null,null)
D.cfu=w([10,20,30],x.t)
D.cpq=w([-1,-0.4,0.3,1],x.n)
D.cwS=w([B.bw,B.b3,B.eZ],x.O)
D.cx0=w([B.bc,B.aB,B.kq],x.O)
D.cx2=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cxL=w([30,140,262,360],x.n)
D.bp0=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cDj=w([D.bp0,E.aj4],x.O)
D.epM=new A.p(1,2)
D.ffJ=new A.cU(B.b6,D.epM,3)
D.azy=w([D.ffJ],x.F)
D.cKN=w([B.h6,B.ci,B.fq],x.O)
D.cNz=w([B.bN,B.bx,B.br],x.O)
D.bLS=new C.uV("classic","Classic leather","Gold-edged brown leather",D.aCH,E.kr,E.kr,"\u2766",B.K,!0,!1,!1,!1)
D.bgr=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bvI=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.da0=w([D.bgr,D.bvI],x.O)
D.aj8=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bLN=new C.uV("ornate","Ornate gold","Double gold border and flourishes",D.da0,D.aj8,D.aj8,"\u2726",B.K,!0,!0,!0,!1)
D.bkF=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bru=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d1k=w([D.bkF,D.bru],x.O)
D.bLM=new C.uV("parchment","Parchment","Old paper with dark ink",D.d1k,D.Gf,L.j5,"\u2767",B.K,!0,!1,!1,!0)
D.agj=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.btU=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dtY=w([D.agj,D.btU],x.O)
D.bos=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bt9=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bLP=new C.uV("minimal","Clean paper","Plain and elegant, like a printed book",D.dtY,D.bos,D.bt9,"",B.K,!0,!0,!1,!0)
D.bLR=new C.uV("midnight","Midnight","Deep blue with silver stars",K.aD_,B.cx,B.cd,"\u2727",B.K,!0,!0,!1,!1)
D.bLL=new C.uV("emerald","Emerald library","Green cloth, title on the left",V.azY,E.kr,B.fA,"\u25c6",B.bp,!0,!1,!1,!1)
D.buo=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.ds_=w([B.em,D.buo],x.O)
D.bpN=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.br2=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bLQ=new C.uV("rose","Rose vintage","Burgundy with rose-gold lettering",D.ds_,D.bpN,D.br2,"\u2740",B.K,!0,!1,!0,!1)
D.dwN=w([B.cm,F.nB],x.O)
D.bLO=new C.uV("modern","Modern","Dark, bold, left-aligned",D.dwN,B.aG,B.c,"",B.bp,!1,!0,!1,!1)
D.a5j=w([D.bLS,D.bLN,D.bLM,D.bLP,D.bLR,D.bLL,D.bLQ,D.bLO],A.at("O<uV>"))
D.cQz=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dwB=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bM2=new C.lu('What does "Ubuntu" mean?',D.dwB,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d38=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bM5=new C.lu("In Swahili, what do we call a grandmother?",D.d38,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d3_=w(["Babu","Mama","Baba","Dada"],x.s)
D.bM0=new C.lu("In Swahili, what do we call a grandfather?",D.d3_,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d4i=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bM4=new C.lu("What is a sister called in Swahili?",D.d4i,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d9s=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bM1=new C.lu("What is a brother called in Swahili?",D.d9s,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d2Z=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bMc=new C.lu("Which word means father in Swahili?",D.d2Z,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dxN=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bMb=new C.lu('"Umoja ni nguvu" means...',D.dxN,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.duH=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bMd=new C.lu('"Haba na haba hujaza kibaba" teaches us...',D.duH,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d74=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bMa=new C.lu('The African saying "It takes a village to raise a child" means...',D.d74,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dy6=w(["The elders","The market","The river","The drum"],x.s)
D.bM6=new C.lu("Who is the traditional keeper of the family stories?",D.dy6,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cUM=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bM3=new C.lu("Why do families sit round the fire at night?",D.cUM,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dwP=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bM8=new C.lu('What does "Harambee" mean?',D.dwP,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.dch=w(["An elder","A baby","A market","A cow"],x.s)
D.bM7=new C.lu('"Mzee" is a respectful word for...',D.dch,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.drQ=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bM9=new C.lu('What does "Shikamoo" show?',D.drQ,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.azT=w([D.bM2,D.bM5,D.bM0,D.bM4,D.bM1,D.bMc,D.bMb,D.bMd,D.bMa,D.bM6,D.bM3,D.bM8,D.bM7,D.bM9],x.J)
D.cZa=w([90,360],x.n)
D.d0S=w([B.bQ,B.bn],x.O)
D.bqr=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d1w=w([D.agj,D.bqr],x.O)
D.d2b=w([-1,-0.3,0.4,1],x.n)
D.d34=w([0,0.45,0.72,0.92,1],x.n)
D.bkB=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d3n=w([D.bkB,B.bB],x.O)
D.bik=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.akS=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d3X=w([B.dA,D.bik,D.akS],x.O)
D.d4Z=w([B.b9,B.jk,B.ph],x.O)
D.bl9=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bt0=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bi0=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d53=w([D.bl9,D.bt0,D.bi0],x.O)
D.d5o=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d5y=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hzg=new C.aeb(78,424,48,44,56)
D.hze=new C.aeb(214,396,34,34,42)
D.hzf=new C.aeb(442,452,56,50,64)
D.aAR=w([D.hzg,D.hze,D.hzf],A.at("O<aeb>"))
D.d67=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bhg=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bmS=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dzK=w([D.aid,D.bhg,D.bmS],x.O)
D.bLT=new C.uW("leather","Leather",D.dzK,"vintage")
D.ddh=w([B.db,B.G5,A9.Z5],x.O)
D.bM_=new C.uW("midnight","Midnight",D.ddh,"starry")
D.d5_=w([B.es,B.ea,B.lh],x.O)
D.bLZ=new C.uW("forest","Forest",D.d5_,"story")
D.dBO=w([B.en,B.em,B.kt],x.O)
D.bLW=new C.uW("burgundy","Burgundy",D.dBO,"royal")
D.cN6=w([B.aB,B.nx,B.np],x.O)
D.bLX=new C.uW("royal","Royal",D.cN6,"royal")
D.d7B=w([B.bx,B.cm,F.nB],x.O)
D.bLU=new C.uW("charcoal","Charcoal",D.d7B,"geo")
D.dzT=w([B.c6,B.dQ,B.ym],x.O)
D.bLY=new C.uW("sunset","Sunset",D.dzT,"sunset")
D.dAC=w([B.jk,B.Gg,B.Z9],x.O)
D.bLV=new C.uW("ocean","Ocean",D.dAC,"band")
D.zW=w([D.bLT,D.bM_,D.bLZ,D.bLW,D.bLX,D.bLU,D.bLY,D.bLV],A.at("O<uW>"))
D.d86=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d8L=w([B.an,B.aM,B.a_],x.O)
D.da5=w([B.em,B.ea,B.db,B.hf,B.yp,B.cJ,B.ku,B.cQ,B.d3],x.O)
D.da6=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.ffK=new A.cU(B.dx,B.dN,8)
D.dag=w([D.ffK],x.F)
D.dbo=w([B.bT,B.dQ,B.kp],x.O)
D.bjb=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bna=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.brp=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.dbE=w([D.bjb,G.ajE,D.bna,D.brp,D.akS],x.O)
D.dbV=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.dc6=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bgC=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bmx=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dcz=w([D.bgC,D.ahG,D.bmx],x.O)
D.ddc=w([B.bT,B.hI],x.O)
D.ddi=w([G.ns,B.ii,G.agu,B.cU],x.O)
D.deU=w([B.cU,G.ns,B.ii,D.lD,B.cU],x.O)
D.dfx=w([B.aQ,B.wg,B.yb],x.O)
D.aBT=w(["True","False"],x.s)
D.eMV=new A.y(-0.65,0.6)
D.eZA=new A.y(-0.2,0.95)
D.f_F=new A.y(0.25,0.95)
D.eQo=new A.y(0.7,0.6)
D.f0e=new A.y(1,0.1)
D.dgi=w([Ar.UO,D.eMV,D.eZA,D.f_F,D.eQo,D.f0e],x.G)
D.bpi=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bvA=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bka=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dgo=w([D.bpi,D.bvA,D.bka],x.O)
D.dgt=w([B.bL,B.bZ,B.dn,B.aQ],x.O)
D.dgY=w([B.he,B.c6,B.rG],x.O)
D.dhm=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dhy=w([B.eZ,B.cJ],x.O)
D.bqN=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dhY=w([D.bqN,D.agh],x.O)
D.di8=w([B.cI,B.fs,B.fB],x.O)
D.dik=w([B.aG,B.bn,B.db],x.O)
D.diY=w([B.et,B.d2,B.ea],x.O)
D.djh=w([B.dP,B.db,B.G5],x.O)
D.djl=w([B.bl,B.mN,B.d3],x.O)
D.djD=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bq_=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bob=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.djY=w([D.bq_,D.ahC,D.bob],x.O)
D.dkN=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dlQ=w([1,0,7,6,3,2],x.t)
D.a6i=w(["leather","linen","plain","stars","rays"],x.s)
D.dm1=w([0.5,2,3.6],x.n)
D.dmB=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bUf=new A.a_(985219,"MaterialIcons",!1)
D.bTP=new A.a_(983781,"MaterialIcons",!1)
D.aCn=w([B.a2T,B.hQ,B.lQ,B.i5,D.bUf,B.HL,B.qN,D.bTP,K.arl,B.Da,B.qP,B.n5],A.at("O<a_>"))
D.a6m=w(["double","single","corners","none"],x.s)
D.bLI=new C.zH("Little Seed","\ud83c\udf31",0)
D.bLK=new C.zH("Young Listener","\ud83d\udc42",40)
D.bLJ=new C.zH("Storyteller","\ud83e\ude98",120)
D.bLH=new C.zH("Village Pride","\ud83c\udfe1",300)
D.bLF=new C.zH("Keeper of Roots","\ud83c\udf33",700)
D.bLG=new C.zH("Elder of the Fire","\ud83d\udd25",1500)
D.aCp=w([D.bLI,D.bLK,D.bLJ,D.bLH,D.bLF,D.bLG],A.at("O<zH>"))
D.dnL=w([B.cW,B.bh,B.cQ],x.O)
D.do0=w([],x.C)
D.DJ=w([],x.u)
D.aMz=new A.p(225,528)
D.eOA=new A.y(D.aMz,1)
D.eqw=new A.p(350,548)
D.eUS=new A.y(D.eqw,0.95)
D.aMt=new A.p(158,656)
D.eUL=new A.y(D.aMt,1.12)
D.eri=new A.p(92,544)
D.eK8=new A.y(D.eri,0.93)
D.eqz=new A.p(398,614)
D.eQL=new A.y(D.eqz,1.04)
D.eqn=new A.p(318,662)
D.eFB=new A.y(D.eqn,1.1)
D.a6u=w([D.eOA,D.eUS,D.eUL,D.eK8,D.eQL,D.eFB],A.at("O<+(p,G)>"))
D.dq1=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dqt=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dry=w([B.cU,G.ns,B.ii,D.lD,B.cU,B.ii],x.O)
D.dsX=w([B.at,B.fs,B.hf],x.O)
D.dtz=w([-70,58],x.n)
D.dtB=w([-70,-30,20],x.n)
D.duE=w([B.bl,B.mN,B.Gs],x.O)
D.duW=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dPJ=new C.lZ("construction","Construction","Jobsite & builds",B.ta)
D.dPQ=new C.lZ("house","Home Build","Houses & rooms",B.uY)
D.dPG=new C.lZ("grocery","Grocery","Store & pantry",B.a3N)
D.dPF=new C.lZ("calculator","Calculations","Math & estimates",B.Pr)
D.dPO=new C.lZ("lumber","Materials","Lumber & supplies",B.PK)
D.dPC=new C.lZ("kitchen","Kitchen","Remodel & meals",A3.PL)
D.bTN=new A.a_(983756,"MaterialIcons",!1)
D.dPH=new C.lZ("landscape","Landscaping","Yard & garden",D.bTN)
D.dPB=new C.lZ("plumbing","Plumbing","Pipes & water",B.pG)
D.dPR=new C.lZ("electrical","Electrical","Wiring & power",B.hm)
D.dPz=new C.lZ("store","Retail Shop","Daily business",B.ky)
D.dPA=new C.lZ("paint_remodel","Paint & Remodel","Colors & walls",A3.PF)
D.bT9=new A.a_(983311,"MaterialIcons",!1)
D.dPN=new C.lZ("roofing","Roofing","Roofs & exteriors",D.bT9)
D.bTY=new A.a_(983986,"MaterialIcons",!1)
D.dPy=new C.lZ("warehouse","Warehouse","Storage & stock",D.bTY)
D.dPL=new C.lZ("vehicles","Vehicles","Fleet & transport",B.HM)
D.bQW=new A.a_(62785,"MaterialIcons",!1)
D.dPE=new C.lZ("farm","Farm","Crops & livestock",D.bQW)
D.dPD=new C.lZ("restaurant","Restaurant","Food & catering",B.v6)
D.dPK=new C.lZ("tools","Tools","Workshop gear",B.HI)
D.dPP=new C.lZ("wallet","Cash & Wallet","Quick spending",B.jK)
D.bS7=new A.a_(63395,"MaterialIcons",!1)
D.dPM=new C.lZ("concrete","Concrete","Foundation work",D.bS7)
D.dPI=new C.lZ("blueprint","Blueprint","Plans & design",Am.apW)
D.a6T=w([D.dPJ,D.dPQ,D.dPG,D.dPF,D.dPO,D.dPC,D.dPH,D.dPB,D.dPR,D.dPz,D.dPA,D.dPN,D.dPy,D.dPL,D.dPE,D.dPD,D.dPK,D.dPP,D.dPM,D.dPI],A.at("O<lZ>"))
D.dvt=w([B.bu,B.bh],x.O)
D.dwh=w([B.iI,B.oi,B.dX],x.O)
D.air=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.ajq=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bow=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bg8=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aDy=w([D.air,D.ajq,D.bow,D.bg8],x.O)
D.dxt=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a72=w(["top","middle","bottom"],x.s)
D.dyX=w([B.cn,B.bn,B.db],x.O)
D.aDT=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b9M=new A.ab(0,B.G,B.b6,B.J,14)
D.aDX=w([D.b9M],x.V)
D.bnq=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dzD=w([D.agU,D.a_d,D.bnq],x.O)
D.dzE=w([B.b4,B.d2,B.ea],x.O)
D.eq6=new A.p(24,-8)
D.eqP=new A.p(48,0)
D.eq2=new A.p(24,6)
D.dBl=w([B.J,D.eq6,D.eqP,D.eq2],x.g)
D.dBK=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.emD={top:0,middle:1,bottom:2}
D.dEY=new A.bv(D.emD,["Top","Middle","Bottom"],x.r)
D.emc={double:0,single:1,corners:2,none:3}
D.dF3=new A.bv(D.emc,["Double line","One line","Corners","None"],x.r)
D.enr={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dGx=new A.bv(D.enr,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dGJ=new A.bv(B.i7,[],A.at("bv<H,+(n,n)>"))
D.emu={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.DX=new A.bv(D.emu,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.at("bv<n,H>"))
D.dK7=new H.NY(32,null)
D.dK8=new H.NY(40,null)
D.dK9=new H.NY(46,null)
D.aM0=new C.auh(null)
D.eoY=new A.p(0,40)
D.eoZ=new A.p(0,412)
D.ep0=new A.p(0,900)
D.epa=new A.p(0,-34)
D.epb=new A.p(0,-46)
D.epd=new A.p(0,-74)
D.epg=new A.p(100,300)
D.eph=new A.p(10,14)
D.epk=new A.p(10,-10)
D.epp=new A.p(10,-46)
D.epq=new A.p(10,-58)
D.epr=new A.p(116,442)
D.ept=new A.p(11,-1)
D.epu=new A.p(11,-10)
D.epv=new A.p(11,-21)
D.aMo=new A.p(11,-60)
D.epC=new A.p(14,-2)
D.epD=new A.p(150,520)
D.a92=new A.p(150,592)
D.epG=new A.p(15,-15)
D.epH=new A.p(16,-1)
D.epL=new A.p(190,444)
D.epO=new A.p(1,5)
D.epW=new A.p(21,-78)
D.epX=new A.p(222,615)
D.JJ=new A.p(225,300)
D.a94=new A.p(225,574)
D.eq5=new A.p(24,-52)
D.eq7=new A.p(250,210)
D.eqi=new A.p(2,-56)
D.aMD=new A.p(300,0)
D.eqj=new A.p(300,440)
D.eqm=new A.p(318,476)
D.eqp=new A.p(324,144)
D.a97=new A.p(332,150)
D.eqr=new A.p(335,585)
D.eqs=new A.p(338,140)
D.eqt=new A.p(340,158)
D.eqv=new A.p(34,-60)
D.En=new A.p(36,-24)
D.eqx=new A.p(372,470)
D.eqy=new A.p(390,455)
D.eqH=new A.p(42,468)
D.eqI=new A.p(431,510)
D.eqJ=new A.p(431,520)
D.eqK=new A.p(45,-92)
D.eqL=new A.p(46,20)
D.eqM=new A.p(46,-92)
D.eqN=new A.p(46,-94)
D.eqO=new A.p(47,-4)
D.eqQ=new A.p(48,-4)
D.eqY=new A.p(4,-26)
D.er5=new A.p(60,455)
D.erd=new A.p(8,14)
D.erh=new A.p(8,-76)
D.erj=new A.p(95,575)
D.erk=new A.p(98,-24)
D.erm=new A.p(9,-2)
D.ern=new A.p(9,-58)
D.aMM=new A.p(9,-79)
D.ero=new A.p(9,-9)
D.es1=new A.p(16.5,8)
D.es3=new A.p(3.2,0)
D.es5=new A.p(-16.5,8)
D.esc=new A.p(16.5,2)
D.esf=new A.p(-3.2,0)
D.esn=new A.p(9.5,6)
D.esr=new A.p(-10,14)
D.ess=new A.p(-10,-12)
D.est=new A.p(-10,-58)
D.esv=new A.p(-11,-1)
D.esw=new A.p(-11,-10)
D.esy=new A.p(-11,-60)
D.esz=new A.p(-12,-14)
D.esA=new A.p(-12,-16)
D.esH=new A.p(-14,-2)
D.esK=new A.p(-15,-15)
D.esL=new A.p(-15,-3)
D.esN=new A.p(-16,-1)
D.et3=new A.p(-24,-52)
D.eta=new A.p(-2,-34)
D.etb=new A.p(-2,-38)
D.etd=new A.p(-30,-100)
D.a99=new A.p(-36,-24)
D.eto=new A.p(-4,-26)
D.etq=new A.p(-4,-6)
D.etA=new A.p(-8,-3)
D.etB=new A.p(-8,-48)
D.etE=new A.p(-9,-2)
D.etG=new A.p(-9,-58)
D.etH=new A.p(-9,-79)
D.etI=new A.p(-9,-9)
D.etK=new A.p(-9.5,6)
D.etX=new A.p(-16.5,2)
D.fQi=new A.B("Write a new book",null,B.hu,null,B.K,null,null,null,null,null,null,null)
D.euw=new A.D(B.kx,D.fQi,null)
D.h40=new A.B("Tap to go on",null,B.vK,null,null,null,null,null,null,null,null,null)
D.euR=new A.D(B.lj,D.h40,null)
D.arP=new A.ae(B.i4,18,B.c,null,null,null)
D.fJj=new A.B("Add",null,B.l7,null,null,null,null,null,null,null,null,null)
D.dgH=w([D.arP,B.rb,D.fJj],x.p)
D.fcQ=new A.c8(B.aL,B.e,B.O,B.l,null,B.p,null,0,D.dgH,null)
D.euU=new A.D(B.nK,D.fcQ,null)
D.euV=new A.D(E.alZ,A7.Yq,null)
D.fCQ=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMv=new A.B("New Project",null,D.fCQ,null,null,null,null,null,null,null,null,null)
D.dla=w([D.arP,B.af,D.fMv],x.p)
D.fcT=new A.c8(B.aL,B.e,B.O,B.l,null,B.p,null,0,D.dla,null)
D.ev8=new A.D(B.hM,D.fcT,null)
D.fP1=new A.B("Choose your header",null,A0.vJ,null,null,null,null,null,null,null,null,null)
D.evt=new A.D(B.i3,D.fP1,null)
D.bfm=new A.fl(2.2,null,null,null,null,B.cJ,null,null,null,null)
D.fiB=new A.a5(22,22,D.bfm,null)
D.bdt=new A.cj(B.A,null,null,D.fiB,null)
D.evy=new A.D(B.a0A,D.bdt,null)
D.bEm=new A.R(14,2,14,6)
D.h28=new A.B("The top of your book. Tap a design to see it.",null,T.tT,null,null,null,null,null,null,null,null,null)
D.evz=new A.D(D.bEm,D.h28,null)
D.fOb=new A.B("\ud83c\udfc6 A new record!",null,B.h4,null,null,null,null,null,null,null,null,null)
D.evB=new A.D(B.lj,D.fOb,null)
D.exa=new A.j4(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.exd=new A.j4(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aNm=new A.j4(1,0.9607843137254902,0.48627450980392156,0)
D.JS=new A.j4(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.Aw=new A.j4(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.exj=new A.j4(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hBi=new C.bjQ(null)
D.bz8=new A.mJ(D.hBi,null,B.az,null,null)
D.aR_=new A.cK(0,0,0,0,null,null,D.bz8,null)
D.fJl=new A.B("\ud83c\udfc5",null,B.abq,null,null,null,null,null,null,null,null,null)
D.eBJ=new A.cK(null,0,-34,null,null,null,D.fJl,null)
D.eJO=new A.y("E","Sit by the fire again")
D.ePo=new A.y("C","Good Learner")
D.eSP=new A.y("D","Still Growing")
D.eXo=new A.y(-42,42)
D.eYJ=new A.y("B","Faithful Listener")
D.f_H=new A.y("A","Keeper of the Family")
D.f2S=new A.b5(-17,0.7,0)
D.f3r=new A.b5(-8,0.95,1.3)
D.f4v=new A.b5(18,0.65,5.2)
D.f4x=new A.b5(0,1.15,2.6)
D.f4S=new A.b5(9,0.9,3.9)
D.f6N=new A.ce([0,0,1,1])
D.aSu=new A.a1(0,0,520,160)
D.f9T=new A.a1(10,612,440,618)
D.f9U=new A.a1(10,612,440,628)
D.f9X=new A.a1(14,-64,34,-12)
D.fa_=new A.a1(300,336,350,348)
D.aa3=new A.a1(30,96,420,346)
D.fa0=new A.a1(30,-9,46,1)
D.fa1=new A.a1(4,2,11,14)
D.fa3=new A.a1(-8,-12.5,8,-7)
D.fa4=new A.a1(-16.5,-21,16.5,1)
D.fa5=new A.a1(60,342,88,348)
D.UP=new A.a1(66,-66,94,-36)
D.fa6=new A.a1(6,8,10,14)
D.fa9=new A.a1(95,343,115,348)
D.faa=new A.a1(-6.5,-74,6.5,-58)
D.fag=new A.a1(-100,-74,100,-12)
D.fah=new A.a1(-10,8,-6,14)
D.fai=new A.a1(-11,2,-4,14)
D.faj=new A.a1(-11,-70,11,-56)
D.faq=new A.a1(-13,-24,13,-4)
D.faw=new A.a1(-15,-21,15,0)
D.faz=new A.a1(-16,-21,16,1)
D.faA=new A.a1(-16,-21,16,2)
D.faD=new A.a1(-16,-26,16,-6)
D.faN=new A.a1(-230,-26,230,26)
D.fba=new A.a1(-38,-26,12,-6)
D.fbe=new A.a1(-3,-70,3,-63)
D.fbf=new A.a1(-44,-22,44,0)
D.fbh=new A.a1(-46,-9,-30,1)
D.aSy=new A.a1(-80,-190,80,20)
D.fbo=new A.a1(-8,-26,40,-6)
D.fbp=new A.a1(-98,-80,92,-75)
D.fbq=new A.a1(-9,-15,9,-9)
D.h1G=new A.B("Let the AI write it from your tree",null,B.iG,null,B.K,null,null,null,null,null,null,null)
D.bMN=new A.di(1,B.cl,D.h1G,null)
D.ddb=w([E.a4h,B.af,D.bMN],x.p)
D.fcu=new A.c8(B.aL,B.e,B.O,B.l,null,B.p,null,0,D.ddb,null)
D.fJ_=new A.B("Save member",null,B.ce,null,null,null,null,null,null,null,null,null)
D.dtj=w([D.asH,B.af,D.fJ_],x.p)
D.fcE=new A.c8(B.aL,B.ba,B.i,B.l,null,B.p,null,0,D.dtj,null)
D.bYp=new A.ae(B.il,14,B.b3,null,null,null)
D.fwn=new A.F(!0,B.b3,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMW=new A.B("Cashier",null,D.fwn,null,null,null,null,null,null,null,null,null)
D.dlH=w([D.bYp,B.bo,D.fMW],x.p)
D.fcI=new A.c8(B.aL,B.e,B.O,B.l,null,B.p,null,0,D.dlH,null)
D.fJ0=new A.B("Transfer & settings",null,B.dq,null,null,null,null,null,null,null,null,null)
D.bKs=new A.bz(1,B.bb,D.fJ0,null)
D.d4r=w([D.asg,B.au,D.bKs],x.p)
D.fcJ=new A.c8(B.aL,B.e,B.i,B.l,null,B.p,null,0,D.d4r,null)
D.fhh=new A.av(16,40)
D.fhm=new A.av(22,64)
D.fht=new A.av(280,88)
D.fih=new A.a5(30,null,null,null)
D.fI5=new A.B("The teacher is writing\u2026",null,B.AT,null,null,null,null,null,null,null,null,null)
D.beA=new A.cj(B.A,null,null,D.fI5,null)
D.hv7=new A.bo("w",x.W)
D.fiG=new A.a5(null,56,D.beA,D.hv7)
D.fju=new A.hJ(5,8,8,1,null)
D.fjC=new A.hJ(2,12,12,1.05,null)
D.fMB=new A.B("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fkl=new A.b1(D.fMB,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fMR=new A.B("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aUQ=new A.b1(D.fMR,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fVj=new A.B("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fkP=new A.b1(D.fVj,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h52=new A.B("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fkU=new A.b1(D.h52,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fP_=new A.B("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fl0=new A.b1(D.fP_,null,null,null,null,null,null,null,null,null,null,null,null,B.h8,!1,null,null,null,B.t,null)
D.h2l=new A.B("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aUU=new A.b1(D.h2l,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fOY=new A.B("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.flq=new A.b1(D.fOY,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fJC=new A.B("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fls=new A.b1(D.fJC,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fSK=new A.B("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fly=new A.b1(D.fSK,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h5N=new A.B("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fme=new A.b1(D.h5N,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h0A=new A.B("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fmE=new A.b1(D.h0A,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h56=new A.B("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fmH=new A.b1(D.h56,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fWY=new A.B("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fmJ=new A.b1(D.fWY,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fQV=new A.B("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fmK=new A.b1(D.fQV,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fQW=new A.B("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fnL=new A.b1(D.fQW,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fMD=new A.B("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fo2=new A.b1(D.fMD,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fOD=new A.B("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fom=new A.b1(D.fOD,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fWq=new A.B("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.foE=new A.b1(D.fWq,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fRK=new A.B("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.foF=new A.b1(D.fRK,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fBv=new A.F(!0,B.bE,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqg=new A.eq("\u2665",null,null,B.cN,null,null,null,null,null,null,D.fBv)
D.fyG=new A.F(!0,B.aS,null,null,null,null,28,B.U,B.cK,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqw=new A.eq("Today: how well do you know the family?",null,null,B.cN,null,null,null,null,null,null,D.fyG)
D.fqN=new A.F(!0,B.qd,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frZ=new A.F(!0,D.kO,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsm=new A.F(!0,D.kO,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsq=new A.F(!0,B.cU,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsz=new A.F(!0,D.fC,null,null,null,null,15,B.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsK=new A.F(!0,D.fC,null,null,null,null,13,B.I,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft3=new A.ta(!0,B.tF,null,null,null,null,B.dH,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftj=new A.F(!0,B.cU,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftm=new A.F(!0,D.kO,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftn=new A.F(!0,B.cU,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fts=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftv=new A.F(!0,B.cU,null,null,null,null,15,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu0=new A.F(!0,B.b3,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu1=new A.F(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu3=new A.F(!0,B.aS,null,null,null,null,15.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuu=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW6=new A.F(!0,B.aR,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW7=new A.F(!0,D.lC,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuU=new A.F(!0,B.cU,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abv=new A.ta(!0,B.Uk,null,null,null,null,B.dH,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.VJ=new A.F(!0,B.cU,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv3=new A.F(!0,B.a_,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv8=new A.F(!0,D.fC,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvx=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwI=new A.F(!0,D.fC,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWh=new A.F(!0,D.fC,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx1=new A.F(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxc=new A.F(!0,D.fC,null,null,null,null,null,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxe=new A.F(!0,null,null,null,null,null,8,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxk=new A.F(!0,L.j5,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWl=new A.F(!0,D.fC,null,null,null,null,14.5,B.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyf=new A.F(!0,D.fC,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyz=new A.F(!0,D.fC,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyB=new A.F(!0,B.a_,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyD=new A.F(!0,B.cU,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz0=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A6.IH,null,null,null)
D.aWA=new A.F(!0,D.fC,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzo=new A.F(!0,B.a_,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzK=new A.F(!0,B.fi,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA7=new A.F(!0,B.bQ,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAc=new A.F(!0,B.bD,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAo=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAr=new A.F(!0,D.fC,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAz=new A.F(!0,D.Gf,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAL=new A.F(!0,B.b3,null,null,null,null,13,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB8=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBf=new A.F(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.DA,null,null,null)
D.fBG=new A.F(!0,B.cU,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBP=new A.F(!0,B.cJ,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC1=new A.F(!0,D.lD,null,null,null,null,13,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWW=new A.F(!0,D.fC,null,null,null,null,null,B.I,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KY=new A.F(!0,B.cU,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWY=new A.F(!0,B.cU,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.DA,null,null,null)
D.fCm=new A.F(!0,B.bQ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCq=new A.F(!0,G.ns,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCO=new A.F(!0,B.b3,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD5=new A.F(!0,D.fC,null,null,null,null,15,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDt=new A.F(!0,B.c,null,null,null,null,null,B.I,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDS=new A.F(!0,D.fC,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEo=new A.F(!0,D.fC,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEt=new A.F(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEC=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abY=new A.F(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ac_=new A.F(!0,D.lC,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGl=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGE=new A.F(!0,B.aS,null,null,null,null,27,B.U,B.cK,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGL=new A.F(!0,L.j5,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGT=new A.F(!0,L.j5,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHm=new A.B("Time:",null,B.hs,null,null,null,null,null,null,null,null,null)
D.fHH=new A.B("\ud83c\udfae",null,K.abP,null,null,null,null,null,null,null,null,null)
D.fHI=new A.B("Themes",null,B.pV,null,null,null,null,null,null,null,null,null)
D.fId=new A.B("\ud83c\udfb2",null,B.xy,null,null,null,null,null,null,null,null,null)
D.fIh=new A.B("Delete this game?",null,B.iG,null,null,null,null,null,null,null,null,null)
D.fIo=new A.B("Add Item",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fwW=new A.F(!0,B.a_,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIP=new A.B("Debt receipt",null,D.fwW,null,B.K,null,null,null,null,null,null,null)
D.aXc=new A.F(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ7=new A.B("Person who owes",null,D.aXc,null,null,null,null,null,null,null,null,null)
D.fK4=new A.B("Notes",null,B.abE,null,null,null,null,null,null,null,null,null)
D.fKv=new A.B("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fvP=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKx=new A.B("Share",null,D.fvP,null,null,null,null,null,null,null,null,null)
D.fLy=new A.B("Move your family trees",null,I.abV,null,null,null,null,null,null,null,null,null)
D.fMc=new A.B("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fMQ=new A.B("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fNd=new A.B("SAVE",null,D.KY,null,null,null,null,null,null,null,null,null)
D.fNQ=new A.B("The round button is the right answer.",null,T.xu,null,null,null,null,null,null,null,null,null)
D.fOa=new A.B("Remove this book?",null,B.h4,null,null,null,null,null,null,null,null,null)
D.fCL=new A.F(!0,B.cU,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.DA,null,null,null)
D.fOI=new A.B("Fireside Stories",null,D.fCL,null,null,null,null,null,null,null,null,null)
D.aXH=new A.B("Download",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fPo=new A.B("What should the AI do?",null,B.dq,null,null,null,null,null,null,null,null,null)
D.fvs=new A.F(!0,D.lC,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPD=new A.B("REPORT CARD",null,D.fvs,null,null,null,null,null,null,null,null,null)
D.fQp=new A.B("Calabash Catch",null,B.W7,null,null,null,null,null,null,null,null,null)
D.fQR=new A.B("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fRh=new A.B("\ud83c\udfe1",null,B.ET,null,null,null,null,null,null,null,null,null)
D.fRZ=new A.B("Ribbon bookmark",null,B.jA,null,null,null,null,null,null,null,null,null)
D.fEn=new A.F(!0,B.b3,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSt=new A.B("NGMY.ORG",null,D.fEn,null,B.K,null,null,null,null,null,null,null)
D.fTM=new A.B("Scan family tree QR",null,B.cG,null,null,null,null,null,null,null,null,null)
D.fAs=new A.F(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUz=new A.B("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fAs,null,B.K,null,null,null,null,null,null,null)
D.fVN=new A.B("Delete",null,B.VD,null,null,null,null,null,null,null,null,null)
D.fVO=new A.B("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fVW=new A.B("Thumbnail",null,B.pV,null,null,null,null,null,null,null,null,null)
D.fWv=new A.B("Save the cover",null,B.cG,null,null,null,null,null,null,null,null,null)
D.fWA=new A.B("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.B2,null,B.K,null,null,null,null,null,null,null)
D.fWZ=new A.B("Your photos",null,B.pV,null,null,null,null,null,null,null,null,null)
D.fXe=new A.B("Create Project",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fXB=new A.B("\u2b50 stars",null,B.VS,null,null,null,null,null,null,null,null,null)
D.fXP=new A.B("Design your cover",null,A0.vJ,null,null,null,null,null,null,null,null,null)
D.fXV=new A.B("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fXY=new A.B("PICTURE",null,M.vN,null,null,null,null,null,null,null,null,null)
D.fY_=new A.B("\ud83c\udfaf",null,D.W6,null,null,null,null,null,null,null,null,null)
D.fYm=new A.B("Paid",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fYo=new A.B("You can undo it right after.",null,T.xu,null,null,null,null,null,null,null,null,null)
D.fYW=new A.B("Print",null,B.vL,null,null,null,null,null,null,null,null,null)
D.fZk=new A.B("Amount owed",null,D.aXc,null,null,null,null,null,null,null,null,null)
D.fZz=new A.B("Got it",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h_a=new A.B("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.h_d=new A.B("Add to budget",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h_E=new A.B("Debtor signature",null,B.abE,null,null,null,null,null,null,null,null,null)
D.h_O=new A.B("Change icon",null,B.abD,null,null,null,null,null,null,null,null,null)
D.h0B=new A.B("MADE BY THE SYSTEM, FROM YOUR TREE",null,S.tV,null,null,null,null,null,null,null,null,null)
D.h12=new A.B("Family tree QR",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h18=new A.B("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.W5,null,null,null,null,null,null,null,null,null)
D.h1w=new A.B("Download",null,B.vL,null,null,null,null,null,null,null,null,null)
D.h1x=new A.B("The person who planted this tree has not made a game yet.",null,B.B0,null,null,null,null,null,null,null,null,null)
D.h1B=new A.B("Change",null,B.pV,null,null,null,null,null,null,null,null,null)
D.h2r=new A.B("Clear all",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h2u=new A.B("WHAT SHOULD IT CHANGE?",null,M.vN,null,null,null,null,null,null,null,null,null)
D.h31=new A.B("COLOUR",null,M.vN,null,null,null,null,null,null,null,null,null)
D.h3f=new A.B("Do it",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h3i=new A.B("Create Tree",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h3s=new A.B("Give me another clue",null,D.KY,null,null,null,null,null,null,null,null,null)
D.h4m=new A.B("Create Family Tree",null,B.fb,null,null,null,null,null,null,null,null,null)
D.h4w=new A.B("THE TEACHER EXPLAINS THESE",null,S.tV,null,null,null,null,null,null,null,null,null)
D.fqM=new A.F(!0,E.kr,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h4C=new A.B("Write the first page myself",null,D.fqM,null,null,null,null,null,null,null,null,null)
D.h59=new A.B("Use this header",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h5g=new A.B("Create Project",null,E.aWT,null,null,null,null,null,null,null,null,null)
D.hwB=new C.acP(1,"header")
D.ad0=new C.acP(2,"projects")
D.hwC=new C.acP(3,"cashier")
D.ad1=new C.acP(4,"familyTree")
D.hKi=new C.cGO(0,"start")
D.hKj=new C.cGP(0,"start")
D.hx_=new C.ZR(null)
D.hy0=new C.a_j(null)
D.dGG=new A.bv(B.i7,[],A.at("bv<n,GG>"))
D.dop=w([],x.dE)
D.doq=w([],x.M)
D.hyz=new C.bh2(D.dGG,D.dop,D.doq,0,0,null,null)
D.b1d=new C.a09(0,"intro")
D.b1e=new C.a09(1,"countdown")
D.ade=new C.a09(2,"ask")
D.X2=new C.a09(3,"reveal")
D.b1f=new C.a09(4,"end")
D.hBk=new C.ti(F.Gp,D.lD,B.cU,F.lE,5,!1,!1,!1,0,null)
D.hBl=new C.ti(F.Gp,B.en,B.cU,B.bP,2,!0,!0,!1,2,B.cU)
D.hBm=new C.ti(B.oq,B.cJ,B.cU,F.lE,2,!0,!1,!1,2,B.at)
D.hBn=new C.ti(F.Gp,B.dP,B.cU,F.lE,5,!1,!1,!1,1,null)
D.hBo=new C.ti(F.a_u,D.ajq,B.cU,F.lE,4,!0,!1,!0,0,null)
D.b1i=new C.ti(F.a_u,B.dQ,B.cU,F.lE,3,!0,!1,!0,2,null)
D.b1j=new C.ti(F.mY,D.lD,B.c,F.lE,0,!1,!1,!0,0,null)
D.b1k=new C.ti(B.oq,B.aB,B.cU,B.bP,2,!0,!0,!1,2,B.dQ)
D.b1l=new C.ti(B.oq,G.ns,B.ii,F.lE,5,!1,!1,!0,3,null)
D.hBp=new C.ti(B.oq,B.dQ,B.cU,F.lE,0,!0,!1,!1,0,B.aB)
D.b1m=new C.ti(F.Gp,B.en,B.cU,B.bP,1,!1,!0,!1,1,null)
D.b1n=new C.ti(F.FX,B.at,B.aB,F.lE,4,!0,!1,!0,2,null)
D.hBq=new C.ti(F.mY,B.at,B.en,F.lE,3,!0,!1,!1,0,null)
D.hBr=new C.ti(B.oq,B.dP,B.cU,B.bP,1,!1,!0,!1,1,null)
D.hBs=new C.ti(F.FX,D.air,B.c,F.lE,5,!1,!1,!0,0,null)
D.hC5=new C.a0H(null)
D.hKr=new C.agd(0,"still")
D.Xp=new C.agd(1,"walk")
D.b1O=new C.agd(2,"pound")
D.b1P=new C.agd(3,"drum")
D.hG5=new C.a1Y(0,"greet")
D.b1Q=new C.a1Y(1,"teach")
D.ady=new C.a1Y(2,"ask")
D.hG6=new C.a1Y(3,"feedback")
D.b1R=new C.a1Y(4,"end")
D.Xv=new C.a2g(0,"intro")
D.Xw=new C.a2g(1,"asking")
D.Bi=new C.a2g(2,"reacting")
D.adK=new C.a2g(3,"driving")
D.adL=new C.a2g(4,"arrived")
D.adT=new C.aLP(0,"projects")
D.b2g=new C.aLP(1,"cashier")
D.hIb=new C.aLP(2,"familyTree")})()};
(a=>{a["8zbuACMFz32pNCRa6A4EnQxAUA4="]=a.current})($__dart_deferred_initializers__);