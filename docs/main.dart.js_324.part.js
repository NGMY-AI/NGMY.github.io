((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,P,A_,S,A9,I,H,E,T,Q,O,Aa,Ab,A0,Ac,Ad,R,L,A1,A2,Ae,A3,A4,A5,Af,Ag,A6,Ah,Ai,A7,Aj,A8,Ak,Al,U,N,Am,An,Ao,V,Ap,W,X,G,Aq,K,F,Y,C={
bEm(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bEm=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vx(null,""),$async$bEm)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nd(b1)
s=A.c1(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.ds(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cT(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.M)(h),++d){a0=h[d]
f.push(A.G(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.X.ap(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.r3(t,a1,B.hO,"book",E.FY),$async$bEm)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.R_(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.Lt(l)?y.k:y.y)
for(j=J.a5(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cA
g=a8.h(0,"title")
a9=B.a.i(A.w(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.w(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.z(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=H.a2S(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEm,v)},
ahm(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ahm=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vx(null,""),$async$ahm)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nd(b6)
s=x.S
r=A.d0(c1,0,A.dB(4,"count",s),A.T(c1).c)
q=H.a2F(new A.N(r,new C.fH2(),r.$ti.k("N<ak.E,n>")).aH(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fH1(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.X.ap(b7,null)+"\nAllowed values: style one of "+B.d.aH(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ahm)
case 6:l=c5
k=H.R_(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.aoQ(s,D.dyH,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.t
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.W("There is no page to change.")
h=A.U(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.ds(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.M)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.G(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.X.ap(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ahm)
case 10:l=c5
k=l==null?null:H.R_(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.dc(a8,d),a5=J.aW(a2.a),a2=a2.$ti,a7=new A.l8(a5,a2.k("l8<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gT(a5))
b0=J.a5(a9)
b1=A.aK(b0.h(a9,"index"))
i=b1==null?null:B.k.N(b1)
if(i==null||!B.d.t(a4,i))continue
b1=b0.h(a9,"title")
b2=B.a.i(A.w(b1==null?"":b1))
a9=b0.h(a9,"body")
b3=B.a.i(A.w(a9==null?"":a9))
a9=b2.length===0
if(a9&&b3.length===0)continue
a9=a9?c1[i].a:b2
h.n(0,i,new A.z(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("bc<2>")
p=A.cG(new A.bc(h,s),new C.fH3(),s.k("L.E"),p)
p=H.a2F(A.pr(p,3,A.a7(p).k("L.E")).aH(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cv<1>")
b4=A.C(new A.cv(h,s),s.k("L.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.M)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a2S(s,b9),$async$ahm)
case 13:b5=c5
for(s=J.a5(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aoQ(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahm,v)},
hwQ(d,e,f){return A.cj(null,B.w.j(0.65),!1,null,new C.fQx(e,f),d,null,!0,!0,x.g2)},
aoQ:function aoQ(d,e,f){this.a=d
this.b=e
this.c=f},
fH2:function fH2(){},
fH1:function fH1(d){this.a=d},
fH3:function fH3(){},
fQx:function fQx(d,e){this.a=d
this.b=e},
bCb(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bCb=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b2(b1,new C.fv8())){u=null
w=1
break}t=B.d.d_(b1,new C.fv9())
s=$.S()
r=new A.p0()
q=A.z9(r,D.aPn)
p=A.I()
p.r=B.c.gp(0)
q.aP(D.aPn,p)
o=A.I()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.aa
o.d=B.bE
o.e=B.dT
n=new C.fve(t)
if(!t){for(s=b1.length,m=1/0,l=1/0,k=0,j=0,i=0;i<s;++i){h=b1[i]
if(h==null)continue
g=h.a
if(g<m)m=g
f=h.b
if(f<l)l=f
if(g>k)k=g
if(f>j)j=f}e=B.k.E(k-m,1,1e4)
d=B.k.E(j-l,1,1e4)
a0=B.k.E(478.40000000000003/e,0,147.20000000000002/d)
a1=(520-e*a0)/2
a2=(160-d*a0)/2
s=$.S()
p=A.a([],x.v)
a3=new A.aF(s.r,B.ah,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.M)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.aY(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aG(a3,o)}else{p=A.a([],x.v)
a3=new A.aF(s.r,B.ah,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.M)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.aY(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aG(a3,o)}w=4
return A.b(r.nf().x9(520,160),$async$bCb)
case 4:w=3
return A.b(b3.ht(B.h9),$async$bCb)
case 3:b0=b3
u=b0==null?null:J.eR(B.dJ.gaR(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCb,v)},
fEJ(d){return C.iaN(d)},
iaN(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fEJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bhr()
n=d.x!=null&&d.zd(null).length===0
if(d.x!=null)t=n?D.zT:D.J8
else t=d.gU7()?D.J8:D.aKj
w=3
return A.b(C.bCb(d.ax),$async$fEJ)
case 3:s=f
p.a=null
if(s!=null)p.a=A.any(s)
r=A.a4N(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aKj}else{p.c=C.x1(q,!0)
p.b=n?D.zT:D.J8}r.a3y(A.h_Y(new C.fEL(p,d,new C.fEM(),t,n,o),null,D.bCw,B.wJ))
u=r.jy(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fEJ,v)},
fLn(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fLn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fEJ(d),$async$fLn)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aN(s,r,"_")
if(q.length>40)q=B.a.aq(q,0,40)
u=Ad.H2(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fLn,v)},
fv8:function fv8(){},
fv9:function fv9(){},
fve:function fve(d){this.a=d},
fEM:function fEM(){},
fEL:function fEL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fEK:function fEK(){},
fR_(d,e){var w=0,v=A.j(x.H)
var $async$fR_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cj(null,B.w.j(0.55),!0,null,new C.fR3(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$fR_)
case 2:return A.h(null,v)}})
return A.i($async$fR_,v)},
bEP(d,e,f,g){return C.iin(d,e,f,g)},
iin(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bEP=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gak(e.split(",")):e
r=B.cD.aL(t)}catch(q){r=null}if(r==null||r.length===0){d.K(x.q).f.U(D.fcj)
w=1
break}w=3
return A.b(A.cj(null,null,!0,null,new C.fQW(g,r,f),d,null,!0,!0,x.H),$async$bEP)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bEP,v)},
fR4(d,e){var w=0,v=A.j(x.H)
var $async$fR4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cj(null,null,!0,null,new C.fR7(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$fR4)
case 2:return A.h(null,v)}})
return A.i($async$fR4,v)},
aZI:function aZI(d,e){this.c=d
this.a=e},
c6e:function c6e(){},
bbZ:function bbZ(d,e){this.b=d
this.a=e},
fR3:function fR3(d,e){this.a=d
this.b=e},
fR0:function fR0(d){this.a=d},
fR1:function fR1(d,e,f){this.a=d
this.b=e
this.c=f},
fR2:function fR2(d,e){this.a=d
this.b=e},
fQW:function fQW(d,e,f){this.a=d
this.b=e
this.c=f},
fQU:function fQU(d){this.a=d},
fQV:function fQV(d,e,f){this.a=d
this.b=e
this.c=f},
fR7:function fR7(d,e){this.a=d
this.b=e},
fR5:function fR5(d){this.a=d},
fR6:function fR6(d,e,f){this.a=d
this.b=e
this.c=f},
fzq(d,e){var w=0,v=A.j(x.y),u,t
var $async$fzq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2q(d),$async$fzq)
case 3:t=g
J.nA(t,new C.fzr(e))
u=A.ai0(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fzq,v)},
fzr:function fzr(d){this.a=d},
ap1:function ap1(d,e,f){this.c=d
this.d=e
this.a=f},
aDK:function aDK(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dMc:function dMc(d,e){this.a=d
this.b=e},
dLY:function dLY(d,e){this.a=d
this.b=e},
dM0:function dM0(d,e,f){this.a=d
this.b=e
this.c=f},
dM_:function dM_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLZ:function dLZ(d,e){this.a=d
this.b=e},
dM1:function dM1(d,e){this.a=d
this.b=e},
dLW:function dLW(){},
dLX:function dLX(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dLV:function dLV(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dLG:function dLG(d){this.a=d},
dLH:function dLH(d,e,f){this.a=d
this.b=e
this.c=f},
dLI:function dLI(d,e){this.a=d
this.b=e},
dLF:function dLF(d){this.a=d},
dLN:function dLN(d,e){this.a=d
this.b=e},
dLE:function dLE(d){this.a=d},
dLO:function dLO(d,e,f){this.a=d
this.b=e
this.c=f},
dLP:function dLP(d,e,f){this.a=d
this.b=e
this.c=f},
dLD:function dLD(d,e){this.a=d
this.b=e},
dLQ:function dLQ(d,e,f){this.a=d
this.b=e
this.c=f},
dLC:function dLC(d,e){this.a=d
this.b=e},
dLR:function dLR(d,e){this.a=d
this.b=e},
dLB:function dLB(d){this.a=d},
dLS:function dLS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLz:function dLz(){},
dLt:function dLt(d){this.a=d},
dLu:function dLu(d){this.a=d},
dLA:function dLA(d,e){this.a=d
this.b=e},
dLT:function dLT(d,e){this.a=d
this.b=e},
dLy:function dLy(d){this.a=d},
dLU:function dLU(d){this.a=d},
dLx:function dLx(){},
dLJ:function dLJ(d,e){this.a=d
this.b=e},
dLw:function dLw(d){this.a=d},
dLK:function dLK(d,e,f){this.a=d
this.b=e
this.c=f},
dLv:function dLv(d,e){this.a=d
this.b=e},
dLs:function dLs(d,e){this.a=d
this.b=e},
dLL:function dLL(d){this.a=d},
dLM:function dLM(d,e,f){this.a=d
this.b=e
this.c=f},
dMf:function dMf(){},
dMg:function dMg(d,e){this.a=d
this.b=e},
dMd:function dMd(d){this.a=d},
dMe:function dMe(d){this.a=d},
dM9:function dM9(d,e){this.a=d
this.b=e},
dMa:function dMa(d){this.a=d},
dM2:function dM2(d,e,f){this.a=d
this.b=e
this.c=f},
dM3:function dM3(d,e,f){this.a=d
this.b=e
this.c=f},
dM4:function dM4(d,e,f){this.a=d
this.b=e
this.c=f},
dM5:function dM5(d,e,f){this.a=d
this.b=e
this.c=f},
dM6:function dM6(d,e,f){this.a=d
this.b=e
this.c=f},
dM7:function dM7(d,e,f){this.a=d
this.b=e
this.c=f},
dM8:function dM8(d,e,f){this.a=d
this.b=e
this.c=f},
dMh:function dMh(){},
dMi:function dMi(){},
dMj:function dMj(){},
dMk:function dMk(d){this.a=d},
dMb:function dMb(d,e){this.a=d
this.b=e},
hsU(d){return B.d.dK(D.a3E,new C.fA4(d),new C.fA5())},
uw:function uw(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fA4:function fA4(d){this.a=d},
fA5:function fA5(){},
al5:function al5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aVs:function aVs(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Tg:function Tg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfB:function bfB(){this.d=$
this.c=this.a=null},
dcl:function dcl(d,e){this.a=d
this.b=e},
dcj:function dcj(d,e){this.a=d
this.b=e},
dck:function dck(){},
dcm:function dcm(d,e){this.a=d
this.b=e},
hdt(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bj(J.k(u==null?"":u))
return new C.nl(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
Lf(d,e){return C.i9p(d,e)},
i9p(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Lf=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Lf)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aT(J.r(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.X.aN(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.dc(p,x.f)
o=A.cG(o,new C.fCl(),o.$ti.k("L.E"),x.B)
n=A.a7(o).k("Y<L.E>")
o=A.C(new A.Y(o,new C.fCm(),n),n.k("L.E"))
B.d.aW(o,new C.fCn())
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
return A.i($async$Lf,v)},
Bc(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Bc=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$Bc)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fPD(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.au("String","ngmy_family_book_v1_"+s+"_"+e,B.X.ap(r,null)),$async$Bc)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Bc,v)},
aRx(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aRx=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Lf(d,e),$async$aRx)
case 2:u=h
t=J.cE(u)
s=t.bg(u,new C.fXZ(f))
if(s===-1)t.c3(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Bc(d,e,u),$async$aRx)
case 3:return A.h(null,v)}})
return A.i($async$aRx,v)},
bCF(d,e,f){var w=0,v=A.j(x.H),u
var $async$bCF=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Lf(d,e),$async$bCF)
case 2:u=h
J.nA(u,new C.fzi(f))
w=3
return A.b(C.Bc(d,e,u),$async$bCF)
case 3:return A.h(null,v)}})
return A.i($async$bCF,v)},
bCT(d,e){return C.i9o(d,e)},
i9o(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bCT=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bCT)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aT(J.r(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.NO
w=1
break}p=B.X.aN(0,q,null)
if(x.f.b(p)){o=A.a2(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aK(o.h(0,"emblem"))
k=k==null?null:B.k.N(k)
if(k==null)k=0
if(D.Db.aj(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aK(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.E(i==null?25:i,18,36)
h=B.d.t(D.a5h,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.t(D.a4D,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.t(D.a4y,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.t(D.d1d,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.I0(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.NO
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.NO
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bCT,v)},
S4(d,e,f){return C.ihU(d,e,f)},
ihU(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$S4=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$S4)
case 7:r=h
w=8
return A.b(r.au("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.X.ap(f.ag(),null)),$async$S4)
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
return A.i($async$S4,v)},
Rx(d,e){return C.i9q(d,e)},
i9q(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Rx=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Rx)
case 7:r=g
q=r.tx("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Lf(d,e),$async$Rx)
case 8:if(!j.cL(g)){n=B.a.i(d.toLowerCase())
m=J.lA(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Rx)
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
return A.i($async$Rx,v)},
agG(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$agG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rx(d,e),$async$agG)
case 3:s=g
r=J.a5(s)
if(r.gL(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gL(s):"main"
r.M(s,t)
w=5
return A.b(A.az(),$async$agG)
case 5:w=4
return A.b(g.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$agG)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agG,v)},
a33(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a33=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Rx(d,e),$async$a33)
case 2:s=h
J.hz(s,f)
w=3
return A.b(A.az(),$async$a33)
case 3:u=h
w=4
return A.b(u.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a33)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a33)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a33)
case 6:return A.h(null,v)}})
return A.i($async$a33,v)},
nl:function nl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCl:function fCl(){},
fCm:function fCm(){},
fCn:function fCn(){},
fPD:function fPD(){},
fXZ:function fXZ(d){this.a=d},
fzi:function fzi(d){this.a=d},
I0:function I0(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bPI:function bPI(d){this.a=d},
iic(d,e,f,g,h,i,j){return A.a4(d,!1).cd(A.dX(new C.fQb(j,i,f,e,h,g),!0,null,x.H))},
Ru(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Ru=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rx(h,g),$async$Ru)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.K(x.q).f.U(D.aRt)
u=!1
w=1
break}w=4
return A.b(C.hwQ(d,f,e),$async$Ru)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.agG(h,g),$async$Ru)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nl(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.Bc(h,r,p),$async$Ru)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.S4(h,r,new C.I0("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Ru)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ru,v)},
fQb:function fQb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ZO:function ZO(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAK:function aAK(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dd0:function dd0(d){this.a=d},
dd_:function dd_(d,e){this.a=d
this.b=e},
dcP:function dcP(d,e){this.a=d
this.b=e},
dcM:function dcM(d,e){this.a=d
this.b=e},
dcn:function dcn(d){this.a=d},
dco:function dco(d,e){this.a=d
this.b=e},
dcQ:function dcQ(d){this.a=d},
dcw:function dcw(d){this.a=d},
dcu:function dcu(d){this.a=d},
dcv:function dcv(d){this.a=d},
dcx:function dcx(d){this.a=d},
dcN:function dcN(d){this.a=d},
dcO:function dcO(){},
dcs:function dcs(d){this.a=d},
dct:function dct(d,e){this.a=d
this.b=e},
dcy:function dcy(d){this.a=d},
dcz:function dcz(d,e){this.a=d
this.b=e},
dcZ:function dcZ(d){this.a=d},
dcY:function dcY(d,e){this.a=d
this.b=e},
dcX:function dcX(d){this.a=d},
dcJ:function dcJ(d){this.a=d},
dcI:function dcI(d){this.a=d},
dcK:function dcK(d){this.a=d},
dcp:function dcp(d,e){this.a=d
this.b=e},
dcL:function dcL(d,e){this.a=d
this.b=e},
dcC:function dcC(d){this.a=d},
dcD:function dcD(d){this.a=d},
dcB:function dcB(){},
dcE:function dcE(d){this.a=d},
dcF:function dcF(d){this.a=d},
dcG:function dcG(d,e){this.a=d
this.b=e},
dcH:function dcH(d,e,f){this.a=d
this.b=e
this.c=f},
dcA:function dcA(d,e){this.a=d
this.b=e},
dcS:function dcS(d){this.a=d},
dcR:function dcR(){},
dcT:function dcT(d){this.a=d},
dcU:function dcU(d){this.a=d},
dcV:function dcV(d){this.a=d},
dcW:function dcW(d,e){this.a=d
this.b=e},
dcq:function dcq(d){this.a=d},
dcr:function dcr(d){this.a=d},
ZS:function ZS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfZ:function bfZ(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
deL:function deL(d){this.a=d},
deM:function deM(d){this.a=d},
deK:function deK(d){this.a=d},
deN:function deN(d){this.a=d},
deJ:function deJ(d){this.a=d},
deO:function deO(d){this.a=d},
deI:function deI(d){this.a=d},
deP:function deP(d,e){this.a=d
this.b=e},
deH:function deH(d,e){this.a=d
this.b=e},
deQ:function deQ(d,e){this.a=d
this.b=e},
ZQ:function ZQ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
af2:function af2(d,e,f){this.a=d
this.b=e
this.c=f},
aAN:function aAN(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
ddf:function ddf(d,e){this.a=d
this.b=e},
dde:function dde(d,e){this.a=d
this.b=e},
ddj:function ddj(d){this.a=d},
ddi:function ddi(d,e){this.a=d
this.b=e},
ddg:function ddg(d){this.a=d},
ddh:function ddh(d){this.a=d},
ddk:function ddk(d){this.a=d},
ddl:function ddl(d){this.a=d},
ddd:function ddd(d,e){this.a=d
this.b=e},
ddc:function ddc(d,e){this.a=d
this.b=e},
Kl:function Kl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Z5:function Z5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cLv:function cLv(d){this.a=d},
cLw:function cLw(){},
cLx:function cLx(d){this.a=d},
bdc:function bdc(d,e,f){this.b=d
this.c=e
this.a=f},
bd3:function bd3(d,e){this.b=d
this.a=e},
ux:function ux(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Zo:function Zo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bda:function bda(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d4k:function d4k(d,e,f){this.a=d
this.b=e
this.c=f},
d4j:function d4j(d,e){this.a=d
this.b=e},
d4J:function d4J(d){this.a=d},
d4w:function d4w(){},
d4K:function d4K(d){this.a=d},
d4v:function d4v(){},
d4L:function d4L(d,e){this.a=d
this.b=e},
d4u:function d4u(d,e){this.a=d
this.b=e},
d4M:function d4M(d,e){this.a=d
this.b=e},
d4t:function d4t(d,e){this.a=d
this.b=e},
d4N:function d4N(d){this.a=d},
d4s:function d4s(){},
d4O:function d4O(d,e){this.a=d
this.b=e},
d4r:function d4r(d,e){this.a=d
this.b=e},
d4P:function d4P(d){this.a=d},
d4E:function d4E(d,e){this.a=d
this.b=e},
d4Q:function d4Q(d){this.a=d},
d4R:function d4R(d){this.a=d},
d4T:function d4T(d){this.a=d},
d4U:function d4U(d){this.a=d},
d4D:function d4D(d,e){this.a=d
this.b=e},
d4V:function d4V(d,e){this.a=d
this.b=e},
aHP:function aHP(d){this.a=d},
biu:function biu(d){this.a=d},
bbl:function bbl(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
al6:function al6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a15:function a15(d,e){this.a=d
this.b=e},
al7:function al7(d,e,f,g,h,i){var _=this
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
_.bz$=h
_.aa$=i
_.c=_.a=null},
bPS:function bPS(d){this.a=d},
bPM:function bPM(d){this.a=d},
bPL:function bPL(d,e){this.a=d
this.b=e},
bPV:function bPV(d){this.a=d},
bPN:function bPN(d){this.a=d},
bPO:function bPO(d){this.a=d},
bPR:function bPR(d){this.a=d},
bPQ:function bPQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPT:function bPT(d,e){this.a=d
this.b=e},
bPU:function bPU(){},
bPP:function bPP(d){this.a=d},
bPJ:function bPJ(d,e){this.a=d
this.b=e},
bPK:function bPK(d){this.a=d},
bnZ:function bnZ(d,e){this.b=d
this.a=e},
aAL:function aAL(){},
it(d,e){var w
$.S()
w=A.I()
w.b=B.aa
w.c=e
w.r=d.gp(0)
w.d=B.bE
w.e=B.dT
return w},
bCd(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.a
J.bm(j.save())
j.translate(e.a,e.b)
d.p5(0,a0?-f:f,f)
w=A.bJ(B.i7,8,36)
v=B.w.j(0.3)
u=$.S()
t=A.I()
t.r=v.gp(0)
d.dO(w,t)
w=a1===D.Wg
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.bo(D.ejA,new A.t(-4+v,-2),C.it(q,5))
d.bo(D.eha,new A.t(4-v,-2),C.it(q,5))}else{t=A.bJ(B.IZ,14,40)
p=A.I()
p.r=v.gp(0)
d.dO(t,p)}v=u.r
u=x.v
o=new A.aF(v,B.ah,k,k,A.a([],u))
t=-64-r
o.D(new A.aY(-11,t))
o.D(new A.c5(-15,-40,-14,a3?-12:-18))
o.D(new A.aq(14,a3?-12:-18))
o.D(new A.c5(15,-40,11,t))
o.D(new A.bs())
t=A.I()
t.r=w.gp(0)
d.aG(o,t)
u=new A.aF(v,B.ah,k,k,A.a([],u))
u.D(new A.aY(-12,-50-r))
v=-46-r
u.D(new A.aq(12,v))
u.D(new A.aq(12.5,-42-r))
u.D(new A.aq(-12.5,v))
u.D(new A.bs())
v=A.I()
v.r=h.c.gp(0)
d.aG(u,v)
A:{if(D.abB===a1){w=Math.sin(g*3.4)
break A}if(D.abC===a1){w=Math.sin(g*7.5)
break A}w=s
break A}if(a1===D.abB){n=-52+w*14
d.bo(new A.t(10,n-22),new A.t(10,n+44),C.it(G.Fc,3.4))
d.bo(D.ejR,new A.t(9,n),C.it(q,4))
d.bo(D.ehA,new A.t(10,n),C.it(q,4))}else if(a1===D.abC){d.bo(D.eiG,new A.t(-8,-26-Math.max(0,w)*6),C.it(q,4))
d.bo(D.efE,new A.t(8,-26-Math.max(0,-w)*6),C.it(q,4))}else{w=s*3
v=-38-r
d.bo(D.eiK,new A.t(-12-w,v),C.it(q,4))
d.bo(D.aJm,new A.t(12+w,v),C.it(q,4))}w=A.I()
w.r=q.gp(0)
d.aP(D.f_R,w)
m=new A.t(0,-77-r)
w=A.bJ(m,22,19)
v=A.I()
v.r=q.gp(0)
d.dO(w,v)
w=h.y
if(w!=null){v=A.bJ(m.a9(0,F.uY),15,24)
u=A.I()
u.r=w.gp(0)
d.dO(v,u)
u=m.a9(0,D.efz)
v=A.I()
v.r=w.gp(0)
d.ad(u,4,v)}else{w=A.bJ(m.a9(0,B.rT),23,20)
v=h.d
u=A.I()
u.r=v.gp(0)
d.e3(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.bo(m.a9(0,D.ejP),m.a9(0,D.eiE),C.it(v,2.2))
d.bo(m.a9(0,D.ehz),m.a9(0,D.efw),C.it(v,2.2))}if(w===4){w=m.a9(0,D.ejT)
u=A.I()
u.r=v.gp(0)
d.ad(w,6,u)
u=m.a9(0,D.ehB)
w=A.I()
w.r=v.gp(0)
d.ad(u,6,w)}}w=m.a9(0,D.eir)
v=A.I()
v.r=B.hX.gp(0)
d.ad(w,0.9,v)
v=m.a9(0,D.eif)
w=A.I()
w.r=B.hX.gp(0)
d.ad(v,0.9,w)
if(i){l=m.a9(0,F.a7a)
w=A.bJ(l,21,22)
v=A.I()
v.r=D.lt.gp(0)
d.dO(w,v)
v=A.bJ(l.a9(0,F.aJj),5,12)
w=A.I()
w.r=D.bcC.gp(0)
d.dO(v,w)
d.bo(l.a9(0,D.ejL),l.a9(0,F.aJG),C.it(B.cJ,1.4))
d.bo(D.aJm,new A.t(15,-88-r),C.it(q,3.6))}j.restore()},
hrC(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.a
J.bm(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bW(0,f)
v=A.bJ(B.dB,18,96)
u=B.w.j(0.28)
$.S()
t=A.I()
t.r=u.gp(0)
d.dO(v,t)
t=A.bJ(B.dB,11,70)
v=B.w.j(0.2)
u=A.I()
u.r=v.gp(0)
d.dO(t,u)
d.lo(D.aPr,A.I())
C.hYW(d,g,h,i,j)
s=(k==null?D.a7f:k).a-w>=0?1:-1
w=A.I()
w.a=B.L9
w.sam(A.jo(new A.t(s*70,-60),new A.t(-s*70,-60),A.a([D.agH.j(0.5),D.agH.j(0.12),D.bjO.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aP(D.aPr,w)
r.restore()
r.restore()},
hYW(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a3.a,a1=A.ar(a0,B.w,0.28)
a1.toString
w=A.ar(a0,B.c,0.16)
w.toString
v=a3.b
u=A.ar(v,B.w,0.32)
u.toString
t=Math.sin(a5*1.9+a6)*0.8
s=a3.w
r=s?1.06:1
q=s?0.86:1
s=A.bt(D.f_S,B.rX)
p=$.S()
o=A.I()
o.r=u.gp(0)
a2.az(s,o)
o=A.bt(D.f_N,B.i8)
s=A.ar(v,B.w,0.18)
s.toString
n=A.I()
n.r=s.gp(0)
a2.az(o,n)
n=A.bt(D.f00,B.i8)
o=A.ar(v,B.w,0.1)
o.toString
s=A.I()
s.r=o.gp(0)
a2.az(n,s)
s=A.I()
s.r=a0.gp(0)
a2.dO(D.f_U,s)
s=A.I()
s.r=a0.gp(0)
a2.dO(D.eZD,s)
s=a2.a
J.bm(s.save())
s.translate(a4.w,0)
J.bm(s.save())
a2.p5(0,q,q*(1+t*0.012))
o=a3.f
m=o&&!a3.r?25:28
n=x.v
l=new A.aF(p.r,B.ah,d,d,A.a([],n))
p=-m
k=p+2
l.D(new A.aY(k,-58))
l.D(new A.c5(p-3,-62,p,-52))
l.D(new A.aq(p+4,-14))
l.D(new A.aq(m-4,-14))
l.D(new A.aq(m,-52))
l.D(new A.c5(m+3,-62,m-2,-58))
l.D(new A.c5(0,-70,k,-58))
l.D(new A.bs())
k=A.I()
k.r=v.gp(0)
a2.aG(l,k)
J.bm(s.save())
a2.mF(0,l)
switch(a3.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.d7O[j]
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.b=B.aa
i.c=5
i.r=k.gp(0)
i.d=B.bE
i.e=B.dT
h=i.G()
s.drawLine.apply(s,[-34+u,-64,14+u,-14,h])
h.delete()}break
case 2:for(k=a3.c,g=-56;g<-14;g+=11)for(f=-26+B.o.F(B.o.ao(g,11),2)*6;f<28;f+=12){i=k.j(0.85)
$.S()
e=new A.ap(B.R,B.N,B.U,B.V,B.S)
e.r=i.gp(0)
h=e.G()
s.drawCircle(f,g,3.6,h)
h.delete()
e=new A.ap(B.R,B.N,B.U,B.V,B.S)
e.r=u.gp(0)
h=e.G()
s.drawCircle(f,g,1.6,h)
h.delete()}break
case 3:for(u=a3.c,f=-28;f<30;f+=8){k=u.j(0.7)
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.b=B.aa
i.c=1.6
i.r=k.gp(0)
i.d=B.bE
i.e=B.dT
h=i.G()
s.drawLine.apply(s,[f,-64,f,-14,h])
h.delete()}for(g=-60;g<-14;g+=8){k=u.j(0.7)
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.b=B.aa
i.c=1.6
i.r=k.gp(0)
i.d=B.bE
i.e=B.dT
h=i.G()
s.drawLine.apply(s,[-30,g,30,g,h])
h.delete()}break
default:a2.bo(D.ejf,D.egh,C.it(a3.c.j(0.9),3))}a2.bo(D.ejM,D.eiM,C.it(B.w.j(0.18),1.6))
a2.bo(D.efD,F.aJo,C.it(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.S()
i=A.I()
i.r=u.gp(0)
a2.aP(D.eZz,i)
s.restore()
i=A.I()
i.r=a1.gp(0)
a2.aP(D.eZN,i)
n=new A.aF(k.r,B.ah,d,d,A.a([],n))
n.D(new A.aY(-9,-66))
n.D(new A.c5(0,-57,9,-66))
n.D(new A.c5(0,-60,-9,-66))
k=A.I()
k.r=a0.gp(0)
a2.aG(n,k)
if(a3.e!==1)u=a3.r&&!o
else u=!0
if(u)a2.e3(D.eZW,0.1,2.941592653589793,!1,C.it(a3.c,2.2))
s.restore()
u=-56*q
o=a4.Q
if(o==null)o=D.a7j
n=25*q
k=23*q
i=9*q
C.hnS(a2,new A.t(p*q+2,u),o,n,k,-1,v,a0,i)
o=a4.as
p=o==null?D.DE:o
C.hnS(a2,new A.t(m*q-2,u),p,n,k,1,v,a0,i)
if(a4.at){a2.bo(D.eh2,D.egZ,C.it(D.ahy,4))
a2.bo(D.eh0,D.egX,C.it(D.FB.j(0.7),1.4))
u=A.I()
u.r=B.cJ.gp(0)
a2.ad(D.eh_,5,u)}s.restore()
u=a4.w
p=a4.e
o=a4.r
J.bm(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a2.ig(0,a4.f)
a2.bW(0,r)
C.hYT(a2,a3,a4,a5,a6,a0,a1,w)
s.restore()},
hnS(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aF(0,e),r=s.gcI(),q=r===0?B.i7:s.eU(0,r),p=B.k.E(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.t(o,w)
if(o*i<0)v=new A.t(-o,-w)
u=e.a9(0,q.aI(0,n)).a9(0,v.aI(0,m))
t=e.a9(0,q.aI(0,p))
d.bo(e,u,C.it(j,l))
o=A.ar(j,B.w,0.2)
o.toString
d.bo(e,u,C.it(o,l*0.35))
d.bo(u,t,C.it(k,l*0.78))
o=A.ar(k,B.w,0.22)
o.toString
d.bo(u,t,C.it(o,l*0.22))
$.S()
o=A.I()
o.r=j.gp(0)
d.ad(u,l*0.55,o)
o=A.bJ(t,l*1.15,l)
w=A.I()
w.r=k.gp(0)
d.dO(o,w)
w=-l
w=t.a9(0,new A.t(i*w*0.45,w*0.1))
o=A.I()
o.r=k.gp(0)
d.ad(w,l*0.28,o)},
hYT(c3,c4,c5,c6,c7,c8,c9,d0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null,c1=c4.d,c2=c4.e
if(c2===3||c2===4){w=A.bJ(B.uX,40,38)
$.S()
v=A.I()
v.r=c1.gp(0)
c3.dO(w,v)}if(c2===4){$.S()
w=A.I()
w.r=c1.gp(0)
c3.ad(D.eiW,9.5,w)
w=A.I()
w.r=c1.gp(0)
c3.ad(D.efS,9.5,w)}w=A.bJ(D.ek8,10,6)
v=$.S()
u=A.I()
u.r=c9.gp(0)
c3.dO(w,u)
u=A.bJ(D.eio,10,6)
w=A.I()
w.r=c9.gp(0)
c3.dO(u,w)
v=v.r
w=x.v
t=new A.aF(v,B.ah,c0,c0,A.a([],w))
t.D(new A.aY(0,-20))
t.D(new A.kY(13,-20,17,-9,16,2))
t.D(new A.kY(15,13,8,20,0,20))
t.D(new A.kY(-8,20,-15,13,-16,2))
t.D(new A.kY(-17,-9,-13,-20,0,-20))
t.D(new A.bs())
u=A.I()
u.sam(A.tp(D.ejC,28,A.a([d0,c8,c9],x.O),A.a([0,0.55,1],x.n),B.x,c0,c0,0))
c3.aG(t,u)
u=c4.r
if(u){s=C.it(c9.j(0.5),0.8)
c3.e3(D.f02,3.455751918948773,2.5132741228718345,!1,s)
c3.e3(D.eZG,3.455751918948773,2.5132741228718345,!1,s)
c3.bo(D.eiT,D.eiH,s)
c3.bo(D.efO,D.efG,s)
c3.e3(D.eZV,2.2,1.4,!1,s)
c3.e3(D.eZE,-0.4,1.4,!1,s)}switch(c2){case 0:for(r=c3.a,q=0;q<16;++q){p=3.141592653589793*(1.02+0.96*q/15)
o=Math.cos(p)
n=Math.sin(p)
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=c1.gp(0)
l=m.G()
r.drawCircle(o*14.5,-3+n*17.5,4.3,l)
l.delete()}r=A.I()
r.r=c1.gp(0)
c3.e3(D.f_8,3.141592653589793,3.141592653589793,!0,r)
break
case 1:r=new A.aF(v,B.ah,c0,c0,A.a([],w))
r.D(new A.aY(-15,-11))
r.D(new A.c5(0,-30,15,-11))
r.D(new A.aq(13,-6))
r.D(new A.c5(0,-12,-13,-6))
r.D(new A.bs())
o=A.I()
o.r=c4.c.gp(0)
c3.aG(r,o)
c3.bo(D.eiI,D.efH,C.it(F.n7,1.4))
o=A.I()
o.r=c1.gp(0)
c3.ad(D.eiZ,3,o)
o=A.I()
o.r=c1.gp(0)
c3.ad(D.efT,3,o)
o=new A.aF(v,B.ah,c0,c0,A.a([],w))
o.D(new A.aY(-13,6))
o.D(new A.c5(-12,22,0,26))
o.D(new A.c5(12,22,13,6))
o.D(new A.c5(8,13,0,12))
o.D(new A.c5(-8,13,-13,6))
o.D(new A.bs())
r=A.I()
r.r=B.iu.gp(0)
c3.aG(o,r)
r=new A.aF(v,B.ah,c0,c0,A.a([],w))
r.D(new A.aY(-7,8))
r.D(new A.c5(0,6,7,8))
r.D(new A.c5(0,10.5,-7,8))
o=A.I()
o.r=B.bO.gp(0)
c3.aG(r,o)
break
case 2:k=c4.y
if(k==null)k=c4.b
r=new A.aF(v,B.ah,c0,c0,A.a([],w))
r.D(new A.aY(-17,-4))
r.D(new A.c5(-20,-27,0,-29))
r.D(new A.c5(20,-27,17,-4))
r.D(new A.c5(0,-14,-17,-4))
r.D(new A.bs())
o=A.I()
o.r=k.gp(0)
c3.aG(r,o)
o=A.ar(k,B.w,0.3)
o.toString
c3.e3(D.f_f,3.4,2.5,!1,C.it(o,1.4))
o=A.ar(k,B.c,0.3)
o.toString
c3.e3(D.f_2,3.6,2.2,!1,C.it(o,1.2))
o=new A.aF(v,B.ah,c0,c0,A.a([],w))
o.D(new A.aY(11,-22))
o.D(new A.c5(27,-34,25,-19))
o.D(new A.c5(18,-18,11,-22))
r=A.ar(k,B.c,0.1)
r.toString
n=A.I()
n.r=r.gp(0)
c3.aG(o,n)
n=new A.aF(v,B.ah,c0,c0,A.a([],w))
n.D(new A.aY(11,-22))
n.D(new A.c5(24,-12,27,-26))
n.D(new A.c5(18,-22,11,-22))
o=A.ar(k,B.w,0.2)
o.toString
r=A.I()
r.r=o.gp(0)
c3.aG(n,r)
r=A.I()
r.r=c4.c.gp(0)
c3.ad(D.efI,3,r)
break
case 3:r=A.I()
r.r=c1.gp(0)
c3.e3(D.f_c,3.204424506661589,3.015928947446201,!0,r)
for(r=c3.a,q=-3;q<=3;++q){o=A.ar(c1,B.c,0.18)
o.toString
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.b=B.aa
n.c=0.9
n.r=o.gp(0)
n.d=B.bE
n.e=B.dT
l=n.G()
r.drawLine.apply(r,[q*3.6,-19+Math.abs(q)*0.8,q*4.6,-4,l])
l.delete()}for(o=c4.c,j=0;j<2;++j){i=D.dlC[j]
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.b=B.aa
n.c=4.5
n.r=c1.gp(0)
n.d=B.bE
n.e=B.dT
l=n.G()
r.drawLine.apply(r,[i,0,i*1.12,22,l])
l.delete()
for(h=0;h<3;++h){n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.r=o.gp(0)
l=n.G()
r.drawCircle(i*(1+h*0.04),7+h*6.5,1.8,l)
l.delete()}}break
case 4:r=A.I()
r.r=c1.gp(0)
c3.e3(D.f_b,3.204424506661589,3.015928947446201,!0,r)
r=A.ar(c1,B.c,0.25)
r.toString
c3.bo(F.a7a,F.a79,C.it(r,1))
break
default:r=A.I()
r.r=c1.gp(0)
c3.e3(D.eZH,3.267256359733385,2.8902652413026098,!0,r)}g=B.k.E(c5.b,0,1)*0.4+0.1
r=A.bJ(D.ejV,5,8)
o=D.aeb.j(g)
n=A.I()
n.r=o.gp(0)
c3.dO(r,n)
n=A.bJ(D.eiA,5,8)
r=D.aeb.j(g)
o=A.I()
o.r=r.gp(0)
c3.dO(n,o)
f=c5.e*2.4
o=new A.aF(v,B.ah,c0,c0,A.a([],w))
o.D(new A.aY(f-0.6,-2))
o.D(new A.c5(f-3.4,6,f-2.6,7.4))
o.D(new A.c5(f,8.8,f+2.6,7.4))
c3.aG(o,C.it(c9.j(0.75),1.1))
o=A.I()
o.r=c9.gp(0)
c3.ad(new A.t(f-1.5,7.2),0.7,o)
o=A.I()
o.r=c9.gp(0)
c3.ad(new A.t(f+1.5,7.2),0.7,o)
e=B.k.F(c6*0.33+c7*0.37,1)>0.965?1:0
r=c5.d
o=c5.c>0.8?1.25:1
d=(1-e)*(1-r*0.6)*o
for(r=c3.a,o=d<0.15,n=c4.f,m=d>0.12,a0=2.5*d,a1=a0*2,a2=a0*2.2,j=0;j<2;++j){a3=G.hy[j]
a4=c5.e
a5=a3>0?0.7:1
a6=a3*6.4+a4*2*a5
if(m){a4=Math.max(0.6,a1)
a5=A.bJ(new A.t(a6,-3),a4,7)
a7=new A.ap(B.R,B.N,B.U,B.V,B.S)
a7.r=B.c.j(0.96).gp(0)
l=a7.G()
r.drawOval(A.bG(a5),l)
l.delete()
a8=a6+c5.y*1.5
a9=-3+c5.z*0.7
J.bm(r.save())
a5=A.a([],w)
a7=new A.aF(v,B.ah,c0,c0,a5)
a5.push(new A.jE(A.bJ(new A.t(a6,-3),a4,7)))
a4=a7.gbw().a.snapshot()
a4=a7.e=new A.cm(a4)
r.clipPath(a4.a,$.nz(),!0)
a4=new A.ap(B.R,B.N,B.U,B.V,B.S)
a4.r=D.bgi.gp(0)
l=a4.G()
r.drawCircle(a8,a9,2.1,l)
l.delete()
a4=new A.ap(B.R,B.N,B.U,B.V,B.S)
a4.r=B.w.gp(0)
l=a4.G()
r.drawCircle(a8,a9,1.05,l)
l.delete()
a4=new A.ap(B.R,B.N,B.U,B.V,B.S)
a4.r=B.c.gp(0)
l=a4.G()
r.drawCircle(a8-0.7,a9-0.7,0.55,l)
l.delete()
r.restore()}a4=n?D.Yc:c9.j(0.9)
a5=n?1.5:1.1
b0=new A.ap(B.R,B.N,B.U,B.V,B.S)
b0.b=B.aa
b0.c=a5
b0.r=a4.gp(0)
b0.d=B.bE
b0.e=B.dT
a4=o?0.8:0
a4=A.bJ(new A.t(a6,-3+a4),Math.max(1.2,a2),7.3500000000000005)
l=b0.G()
r.drawArc.apply(r,[A.bG(a4),189,162,!1,l])
l.delete()
a4=c5.c
b1=-9.2-a4*2.2
a5=a3*3.6
a7=a4<0?-a4*1.6:0
a4=a4>0?a4*0.6:0
if(u)b2=B.e4
else{b2=A.ar(c1,B.w,0.2)
b2.toString}b3=new A.ap(B.R,B.N,B.U,B.V,B.S)
b3.b=B.aa
b3.c=1.7
b3.r=b2.gp(0)
b3.d=B.bE
b3.e=B.dT
l=b3.G()
r.drawLine.apply(r,[a6-a5,b1-a7+0.4,a6+a5,b1-0.6-a4,l])
l.delete()}b4=B.k.E(c5.a,0,1)
if(n)b5=D.bq0
else{u=A.ar(c9,D.bjQ,0.6)
u.toString
b5=u}b6=c5.b
if(b4>0.06){b7=5+B.k.E(b6,0,1)*2.2
b8=1.2+b4*6.5
b9=new A.aF(v,B.ah,c0,c0,A.a([],w))
w=-b7
b9.D(new A.aY(w,11.5))
b9.D(new A.c5(0,11.5+b8*0.2-c5.b*1.5,b7,11.5))
b9.D(new A.c5(0,11.5+b8*1.5+c5.b*1.5,w,11.5))
b9.D(new A.bs())
v=A.I()
v.r=D.bja.gp(0)
c3.aG(b9,v)
J.bm(r.save())
c3.mF(0,b9)
v=B.c.j(0.95)
u=A.I()
u.r=v.gp(0)
c3.aP(new A.a3(w,11,w+b7*2,13.2),u)
u=A.bJ(new A.t(0,11.5+b8*1.1),b8*0.9,b7*1.4)
w=A.I()
w.r=D.bq5.gp(0)
c3.dO(u,w)
r.restore()
c3.aG(b9,C.it(b5,1.1))}else{u=new A.aF(v,B.ah,c0,c0,A.a([],w))
r=11.5-b6*0.8
u.D(new A.aY(-5.2,r))
u.D(new A.c5(0,13.1+b6*2.8,5.2,r))
c3.aG(u,C.it(b5,1.5))
if(b6>0.6){w=new A.aF(v,B.ah,c0,c0,A.a([],w))
w.D(new A.aY(-4.6,11.8))
w.D(new A.c5(0,15.1+b6*1.4,4.6,11.8))
w.D(new A.c5(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.I()
u.r=v.gp(0)
c3.aG(w,u)}}if(c5.b>0.2){c3.e3(D.eZU,-1.2,2.2,!1,C.it(c9.j(0.5),0.8))
c3.e3(D.eZJ,2.141592653589793,2.2,!1,C.it(c9.j(0.5),0.8))}if(n&&c2!==2){c2=c4.c
w=A.I()
w.r=c2.gp(0)
c3.ad(D.eih,1.7,w)
w=A.I()
w.r=c2.gp(0)
c3.ad(D.eid,1.7,w)}},
i3j(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.S(),e=new A.p0(),d=A.z9(e,g),a0=a4.a,a1=a4.b,a2=Math.min(a0/450,a1/900),a3=A.I()
a3.sam(A.jo(B.I,new A.t(0,a1*0.46),D.d4C,D.cXo,B.x,g))
d.aP(new A.a3(0,0,0+a0,0+a1),a3)
a3=d.a
J.bm(a3.save())
a3.translate((a0-450*a2)/2,(a1-900*a2)/2)
d.bW(0,a2)
w=new A.e9()
w.d4(8)
for(v=0;v<120;++v){a0=w.ah()
a1=w.ah()
u=w.ah()
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=B.c.j(0.2+w.ah()*0.5).gp(0)
s=t.G()
a3.drawCircle(a0*450*1.4-90,a1*330-40,0.5+u*0.9,s)
s.delete()}J.bm(a3.save())
a3.translate(200,120)
d.ig(0,-0.5)
a0=A.I()
a1=x.O
a0.sam(A.tp(B.I,230,A.a([D.bf5,B.L],a1),g,B.x,g,g,0))
d.dO(D.f_p,a0)
a3.restore()
a0=A.I()
a0.sam(A.tp(D.a7i,58,A.a([D.big,B.L],a1),g,B.x,g,g,0))
d.ad(D.a7i,58,a0)
a0=A.I()
a0.r=D.bdO.gp(0)
d.ad(D.a7i,24,a0)
a0=A.I()
a0.r=D.YA.gp(0)
d.ad(D.egC,5,a0)
a0=A.I()
a0.r=D.YA.gp(0)
d.ad(D.egG,3.4,a0)
a0=A.I()
a0.r=D.YA.gp(0)
d.ad(D.egF,2.4,a0)
for(a0=x.v,r=0;r<3;++r,f=u){u=A.a([],a0)
q=new A.aF(f.r,B.ah,g,g,u)
u.push(new A.aY(-60,420))
for(f=372+r*12,t=60+r*20,p=r*2,o=14-r*3,n=-60;n<=510;n+=8){m=new A.aq(n,f+Math.sin(n/t+p)*o+Math.sin(n/23+r)*3)
u.push(m)
l=q.f
if(l!=null)m.by(l)
m=q.e
if(m!=null)m.a.delete()
q.e=null}f=new A.aq(510,470)
u.push(f)
t=q.f
if(t!=null)f.by(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.aq(-60,470)
u.push(f)
t=q.f
if(t!=null)f.by(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.bs()
u.push(f)
u=q.f
if(u!=null)f.by(u)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=[D.bcr,D.ben,D.bk8][r]
u=$.S()
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=f.gp(0)
s=t.G()
f=q.e
a3.drawPath((f==null?q.e=new A.cm(q.gbw().a.snapshot()):f).a,s)
s.delete()}for(k=0;k<4;++k){n=D.crv[k]
j=384+B.o.F(n,11)
f=n-2
a0=j-24
u=new A.ap(B.R,B.N,B.U,B.V,B.S)
u.b=B.aa
u.c=2.4
u.r=D.YR.gp(0)
u.d=B.bE
u.e=B.dT
s=u.G()
a3.drawLine.apply(a3,[n,j,f,a0,s])
s.delete()
f=A.bJ(new A.t(f,j-27),11,46)
u=new A.ap(B.R,B.N,B.U,B.V,B.S)
u.r=D.YR.gp(0)
s=u.G()
a3.drawOval(A.bG(f),s)
s.delete()
a0=A.bJ(new A.t(n-12,a0),8,24)
f=new A.ap(B.R,B.N,B.U,B.V,B.S)
f.r=D.YR.gp(0)
s=f.G()
a3.drawOval(A.bG(a0),s)
s.delete()}for(v=0;v<9;++v){f=B.o.F(v,3)
a0=B.o.F(v,4)
u=new A.ap(B.R,B.N,B.U,B.V,B.S)
u.r=D.bdR.j(0.8).gp(0)
s=u.G()
a3.drawCircle(20+v*52+f*7,400+a0*5,1.2,s)
s.delete()}f=A.I()
f.sam(A.jo(D.eff,D.efh,D.cZh,B.I_,B.x,g))
d.aP(new A.a3(-200,412,650,1300),f)
i=new A.e9()
i.d4(21)
for(v=0;v<260;++v){f=i.ah()
j=420+i.ah()*480
a0=i.ah()
u=j/900+0.4
u=A.bJ(new A.t(f*450,j),1+i.ah()*2*u,1.5+a0*4*u)
f=i.hi()?B.c:B.w
a0=new A.ap(B.R,B.N,B.U,B.V,B.S)
a0.r=f.j(0.06+i.ah()*0.06).gp(0)
s=a0.G()
a3.drawOval(A.bG(u),s)
s.delete()}J.bm(a3.save())
a3.translate(225,590)
d.p5(0,1,0.34)
f=A.I()
f.sam(A.tp(B.I,250,A.a([D.bl0,D.beJ,D.bmR],a1),A.a([0,0.8,1],x.n),B.x,g,g,0))
d.ad(B.I,250,f)
a3.restore()
for(v=0;v<40;++v){n=i.ah()*450
j=640+i.ah()*260
f=i.ah()
a0=A.ar(D.ago,D.bdl,i.ah())
a0.toString
for(f=j-(6+f*10),h=-1;h<=1;++h){$.S()
a1=new A.ap(B.R,B.N,B.U,B.V,B.S)
a1.b=B.aa
a1.c=1.3
a1.r=a0.gp(0)
a1.d=B.bE
a1.e=B.dT
s=a1.G()
a3.drawLine.apply(a3,[n+h*2,j,n+h*5,f+Math.abs(h)*3,s])
s.delete()}}C.hXd(d)
for(k=0;k<3;++k)C.i_n(d,D.ay4[k])
C.i_c(d,D.egw)
for(n=118;n<190;n+=11){f=B.o.F(n,3)
a0=B.o.F(n,4)
$.S()
a1=new A.ap(B.R,B.N,B.U,B.V,B.S)
a1.b=B.aa
a1.c=2.4
a1.r=D.YN.gp(0)
a1.d=B.bE
a1.e=B.dT
s=a1.G()
a3.drawLine.apply(a3,[n,452+f,n+1,436+a0,s])
s.delete()}d.bo(D.efF,D.efX,C.it(D.be4,1.6))
a3.restore()
return e.nf()},
hXd(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.S().r,e=x.v,d=new A.aF(f,B.ah,g,g,A.a([],e))
d.D(new A.aY(358,462))
d.D(new A.kY(354,422,370,382,374,332))
d.D(new A.aq(410,332))
d.D(new A.kY(416,382,432,422,428,462))
d.D(new A.bs())
w=A.I()
w.sam(A.jo(new A.t(354,0),new A.t(430,0),D.drE,Q.zj,B.x,g))
a0.aG(d,w)
v=new A.e9()
v.d4(4)
for(w=a0.a,u=0;u<30;++u){t=364+v.ah()*56
s=462-v.ah()*126
r=v.ah()
q=v.ah()
p=B.w.j(0.18)
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.b=B.aa
o.c=1.1
o.r=p.gp(0)
o.d=B.bE
o.e=B.dT
n=o.G()
w.drawLine.apply(w,[t,s,t+r*3-1.5,s+8+q*12,n])
n.delete()}for(m=0;m<6;++m){l=D.d98[m]
r=l.a
q=392+r*12
p=-l.b
o=q+r*52
k=336+(p*46-8)
r=o+r*42
p=k+(p*34+4)
j=A.a([],e)
i=new A.aF(f,B.ah,g,g,j)
j.push(new A.aY(q,336))
j.push(new A.c5(o,k,r,p))
q=new A.ap(B.R,B.N,B.U,B.V,B.S)
q.b=B.aa
q.c=8
q.r=D.aeS.gp(0)
q.d=B.bE
q.e=B.dT
n=q.G()
q=i.gbw().a.snapshot()
w.drawPath((i.e=new A.cm(q)).a,n)
n.delete()
for(h=0;h<6;++h){q=v.ah()
o=v.ah()
k=v.ah()
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.r=A.ar(D.bdX,D.bk7,v.ah()).j(0.92).gp(0)
n=j.G()
w.drawCircle(r+(q*36-18),p+(o*18-14),8+k*7,n)
n.delete()}r+=0
q=new A.ap(B.R,B.N,B.U,B.V,B.S)
q.b=B.aa
q.c=1.2
q.r=D.YN.gp(0)
q.d=B.bE
q.e=B.dT
n=q.G()
w.drawLine.apply(w,[r,p+8,r,p+22,n])
n.delete()
p=A.bJ(new A.t(r,p+28),13,7)
r=new A.ap(B.R,B.N,B.U,B.V,B.S)
r.r=D.bli.gp(0)
n=r.G()
w.drawOval(A.bG(p),n)
n.delete()}},
i_n(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b4.a,a5=b4.b,a6=b4.c,a7=b4.d,a8=a6*0.5,a9=A.bJ(new A.t(a4,a5+2),a8,a6*2.8),b0=B.w.j(0.3),b1=$.S(),b2=A.I()
b2.r=b0.gp(0)
b3.dO(a9,b2)
b1=b1.r
b2=x.v
w=new A.aF(b1,B.ah,a3,a3,A.a([],b2))
a9=a4-a6
b0=a5-a7
w.D(new A.aY(a9,b0))
w.D(new A.aq(a9,a5))
v=a4+a6
w.D(new A.c5(a4,a5+a6*0.22,v,a5))
w.D(new A.aq(v,b0))
w.D(new A.bs())
u=A.I()
u.sam(A.jo(new A.t(a9,0),new A.t(v,0),D.d9e,Q.zj,B.x,a3))
b3.aG(w,u)
t=new A.e9()
t.d4(B.o.V(a4*7))
v=b3.a
J.bm(v.save())
b3.mF(0,w)
for(s=0;s<40;++s){r=a9+t.ah()*a6*2
q=b0+t.ah()*a7
u=t.ah()
p=t.ah()
o=B.w.j(0.14)
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.b=B.aa
n.c=1
n.r=o.gp(0)
n.d=B.bE
n.e=B.dT
m=n.G()
v.drawLine.apply(v,[r,q,r+4+u*5,q+p*2-1,m])
m.delete()}u=b0+5
p=a6*2
o=D.agk.j(0.75)
n=A.I()
n.r=o.gp(0)
b3.aP(new A.a3(a9,u,a9+p,u+7),n)
for(u=a6/5,o=b0+12,n=b0+20,l=a9+2,k=0;k<B.k.bh(u);++k){j=l+k*10
i=A.a([],b2)
h=new A.aF(b1,B.ah,a3,a3,i)
i.push(new A.aY(j,o))
i.push(new A.aq(j+5,n))
i.push(new A.aq(j+10,o))
i.push(new A.bs())
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.r=D.lt.j(0.85).gp(0)
m=i.G()
i=h.gbw().a.snapshot()
v.drawPath((h.e=new A.cm(i)).a,m)
m.delete()}u=A.a([],b2)
g=new A.aF(b1,B.ah,a3,a3,u)
b1=a5-8
g.D(new A.aY(a9,b1))
for(p/=6,k=0;k<=B.k.bh(p);++k){o=(k&1)===0?0:-5
o=new A.aq(a9+k*6,b1+o)
u.push(o)
n=g.f
if(n!=null)o.by(n)
o=g.e
if(o!=null)o.a.delete()
g.e=null}b3.aG(g,C.it(D.agk.j(0.7),1.6))
v.restore()
a9=$.S().r
b1=new A.aF(a9,B.ah,a3,a3,A.a([],b2))
u=a6*0.1
p=a4+u
o=a6*0.28
n=p-o
l=a5+1
b1.D(new A.aY(n,l))
i=a5-a7*0.55
b1.D(new A.aq(n,i))
o=p+o
b1.D(new A.c5(p,a5-a7*0.82,o,i))
b1.D(new A.aq(o,l))
b1.D(new A.bs())
l=A.I()
l.r=D.agv.gp(0)
b3.aG(b1,l)
l=A.I()
l.r=D.agv.gp(0)
b3.ad(new A.t(a4-a6*0.62,a5-a7*0.5),u,l)
l=b4.e
u=b0-l
b1=a6*1.38
o=a4-b1
i=b0+4
p=a4+b1
f=new A.aF(a9,B.ah,a3,a3,A.a([],b2))
f.D(new A.aY(o,i))
n=b0-l*0.55
f.D(new A.c5(a4-a8,n,a4,u))
f.D(new A.c5(a4+a8,n,p,i))
f.D(new A.c5(a4,b0+a6*0.34,o,i))
f.D(new A.bs())
b0=A.I()
n=a6*1.4
b0.sam(A.jo(new A.t(a4-n,0),new A.t(a4+n,0),D.dcF,Q.zj,B.x,a3))
b3.aG(f,b0)
J.bm(v.save())
b3.mF(0,f)
for(a8=p-o,s=0;s<70;++s){e=s/69
b0=Math.sin(e*3.141592653589793)
p=t.ah()
n=(t.hi()?B.w:D.bdu).j(0.16)
h=new A.ap(B.R,B.N,B.U,B.V,B.S)
h.b=B.aa
h.c=0.9
h.r=n.gp(0)
h.d=B.bE
h.e=B.dT
m=h.G()
v.drawLine.apply(v,[a4+(p-0.5)*3,u,o+a8*e,i+b0*a6*0.3,m])
m.delete()}for(k=1;k<5;++k){d=u+l*k/4.6
a0=b1*k/4.6
b0=A.a([],b2)
p=new A.aF(a9,B.ah,a3,a3,b0)
n=d+2
b0.push(new A.aY(a4-a0,n))
b0.push(new A.c5(a4,d+7+k*1.5,a4+a0,n))
b0=B.w.j(0.22)
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.b=B.aa
n.c=1.2
n.r=b0.gp(0)
n.d=B.bE
n.e=B.dT
m=n.G()
b0=p.gbw().a.snapshot()
v.drawPath((p.e=new A.cm(b0)).a,m)
m.delete()}v.restore()
for(s=0;s<46;++s){e=s/45
a1=o+a8*e
a2=i+Math.sin(e*3.141592653589793)*a6*0.3
b0=t.ah()
b1=t.ah()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.b=B.aa
p.c=1.1
p.r=D.bku.gp(0)
p.d=B.bE
p.e=B.dT
m=p.G()
v.drawLine.apply(v,[a1,a2,a1+(b0-0.5)*2,a2+3+b1*4,m])
m.delete()}a8=new A.aF(a9,B.ah,a3,a3,A.a([],b2))
a9=u+4
a8.D(new A.aY(a4-2.5,a9))
a8.D(new A.aq(a4,u-7))
a8.D(new A.aq(a4+2.5,a9))
a8.D(new A.bs())
a9=A.I()
a9.r=D.bgO.gp(0)
b3.aG(a8,a9)},
i_c(d,e){var w,v,u,t,s,r,q,p,o
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=d.a,r=0;r<2;++r){q=w+D.dlz[r]
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.b=B.aa
p.c=3
p.r=D.YN.gp(0)
p.d=B.bE
p.e=B.dT
o=p.G()
s.drawLine.apply(s,[q,u,q,t,o])
o.delete()}u=A.bJ(e.a9(0,F.aJi),24,36)
t=$.S()
s=A.I()
s.r=D.bpg.gp(0)
d.dO(u,s)
t=new A.aF(t.r,B.ah,null,null,A.a([],x.v))
s=w-24
u=v-30
t.D(new A.aY(s,u))
t.D(new A.aq(w,v-54))
t.D(new A.aq(w+24,u))
t.D(new A.c5(w,v-24,s,u))
t.D(new A.bs())
u=A.I()
u.r=D.aft.gp(0)
d.aG(t,u)},
hZx(d){switch(B.o.F(d,8)){case 0:return D.aYn
case 1:return D.aYl
case 2:return D.aYk
case 3:return D.aYj
case 4:return D.aYm
case 5:return D.aYo
case 6:return D.hll
default:return D.hlk}},
S1(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bo_()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a7j:j
w.as=k==null?D.DE:k
C.hrC(d,e,p,C.hZx(m),w,s,m,l)},
hsZ(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bRw:function bRw(){var _=this
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
rZ:function rZ(d,e,f,g,h,i,j,k,l,m){var _=this
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
bo_:function bo_(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
alp:function alp(){this.b=this.a=null},
aVx:function aVx(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bRo:function bRo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRp:function bRp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRq:function bRq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRr:function bRr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRs:function bRs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRt:function bRt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRu:function bRu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRv:function bRv(){},
bRn:function bRn(d){this.a=d},
afb:function afb(d,e){this.a=d
this.b=e},
ada:function ada(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
My(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bQ7(s)
s.bz9(d)
return s},
GC(d,e,f,g,h,i,j){var w,v=A.T(g).k("Y<1>")
v=A.dg(new A.Y(g,new C.fo7(f),v),v.k("L.E"))
w=A.C(v,A.a7(v).k("cs.E"))
B.d.dZ(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.d0(w,0,A.dB(3,"count",x.S),A.T(w).c))
B.d.dZ(v,d)
return new C.li(e,v,B.d.cv(v,f),h,i,"tree",j)},
ijL(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.U(c0,x.cg),c2=new C.fXQ(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.k3(c4,c0)
t=A.C(c4,A.a7(c4).k("cs.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.k3(c4,c0)
r=A.C(c4,A.a7(c4).k("cs.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.k3(c4,c0)
q=A.C(c4,A.a7(c4).k("cs.E"))
for(c4=w.length,v=A.T(t).k("Y<1>"),s=v.k("L.E"),p=A.T(w).k("Y<1>"),o=p.k("L.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.M)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.w2)g="father"
else g=h===D.og?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Y(t,new C.fXS(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.GC(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Y(w,new C.fXT(i,m),p),o)
B.d.dZ(d,c6)
c2.$2(b4,new C.li("True or false: "+h+" is the "+g+" of "+l+".",D.az5,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.li("True or false: "+B.a.i(B.d.gI(d).b)+" is the "+g+" of "+l+".",D.az5,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.FO(m)
h=a0.length
if(h!==0){a1=a0[c6.ar(h)]
h=B.a.i(a1.b)
f=A.C(new A.Y(t,new C.fXU(l,a0,c5),v),s)
e=a1.c
if(e===D.w2)e="son"
else e=e===D.og?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.GC(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.eD([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.ml(a5,a5.r,f.k("ml<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.GC(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gI(a0).b)
f=A.a([],c3)
for(e=A.T(a0),a2=e.k("jx<1>"),a3=new A.jx(a0,1,b3,a2),a3.pf(a0,1,b3,e.c),a3=new A.bS(a3,a3.gL(0),a2.k("bS<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.GC(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gI(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gI(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.aqe(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Y(t,new C.fXV(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.GC(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Y(t,new C.fXW(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.w2
if(e)a2=b7
else a2=f===D.og?b8:b9
if(e)f=b7
else f=f===D.og?b8:b9
c2.$2("grand",C.GC(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aLr(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.ar(k)].b)
j=A.C(new A.Y(t,new C.fXX(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.GC(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cK5)
h=l+" was born in "+k
c2.$2("place",C.GC(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.d_i)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.GC(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.M)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.GC(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cB(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jW(b1,b3,b3)
c2.$2("year",C.GC(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bCP(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.My(d),l=new A.e9()
l.d4(f)
w=C.ijL(m,l,g)
for(v=new A.dq(w,w.r,w.e);v.C();)J.hbD(v.d,l)
v=A.a7(w).k("cv<1>")
u=A.C(new A.cv(w,v),v.k("L.E"))
B.d.dZ(u,l)
t=A.a([],x.J)
s=A.aX(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.b2(u,new C.fAC(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.M)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ad(p)>n.a){p=w.h(0,q)
p.toString
p=s.M(0,J.r(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.r(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.C(D.ax6,x.df)
B.d.dZ(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.M)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hrJ(o,l))}}else if(!g&&v>3){o=C.hrJ(D.ax6[l.ar(14)],l)
t[t.length-1-l.ar(3)]=o}return t},
hrJ(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.dZ(w,e)
return new C.li(d.a,w,B.d.cv(w,v),d.d,d.e,d.f,d.r)},
hwp(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.My(a2),a1=new A.e9()
a1.d4(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.M)(t),++r){q=t[r]
if(a0.FO(q).length>=2)u.push(q)}B.d.dZ(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.M)(u),++r){n=u[r]
m=a0.FO(n)
l=A.T(m)
k=new A.jx(m,0,5,l.k("jx<1>"))
k.pf(m,0,5,l.c)
j=k.dm(0)
if(new A.N(j,new C.fOE(),A.T(j).k("N<1,H>")).fH(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.M)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.M)(j),++i)g.push(C.aRi(a0,j[i]))
w.push(new C.ate("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.U(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.M)(t),++r){q=t[r]
J.cd(e.c4(0,a0.alH(q),new C.fOF()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cv<1>")
d=A.C(new A.cv(e,t),t.k("L.E"))
B.d.fd(d)
v=A.a([],v)
for(u=A.d0(d,0,A.dB(5,"count",u),A.T(d).c),t=u.$ti,u=new A.bS(u,u.gL(0),t.k("bS<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cE(s)
m.dZ(s,a1)
v.push(m.gI(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.M)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.M)(v),++r)s.push(C.aRi(a0,v[r]))
w.push(new C.ate("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aPM(d){return B.d.an4(D.azA,new C.fx3(d))},
i9W(d){return A.pT(new A.Y(D.azA,new C.fDe(d),x.av))},
bQW(d){return C.hFI(d)},
hFI(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bQW=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bQW)
case 7:r=f
q=B.a.i(d)
q=A.eB(J.r(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bQW,v)},
Bx(d,e){return C.hFF(d,e)},
hFF(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$Bx=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$Bx)
case 7:r=g
p=B.a.i(d)
o=A.eB(J.r(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.au("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$Bx)
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
return A.i($async$Bx,v)},
bQV(d,e,f){return C.hFG(d,e,f)},
hFG(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bQV=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bQV)
case 7:r=h
q=B.a.i(d)
q=A.eB(J.r(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bQV,v)},
By(d,e,f,g){return C.hFH(d,e,f,g)},
hFH(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$By=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$By)
case 7:r=i
p=B.a.i(d)
o=A.eB(J.r(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.au("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$By)
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
return A.i($async$By,v)},
bF5(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
fZR(d,e,f,g){return new C.ak4(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hDO(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aW(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cq)
while(u.C())w.push(J.k(u.gT(u)))
u=x.N
w=A.d0(w,0,A.dB(4,"count",x.S),u).dm(0)
B.d.v(w,A.c1(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aK(d.h(0,"c"))
v=v==null?null:B.k.N(v)
v=B.o.E(v==null?0:v,0,3)
u=A.aK(d.h(0,"s"))
u=u==null?null:B.k.N(u)
return C.fZR(w,v,B.o.E(u==null?20:u,5,60),t)},
hcG(d){var w,v,u,t,s,r,q=J.a5(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aW(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cq)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gT(q)
if(u.b(r))v.push(C.hDO(A.a2(r,t,s)))}return new C.Mj(p,w,v)},
h76(d){var w,v=A.a([],x.c)
for(w=J.aW(d.z);w.C();)v.push(C.hcG(w.gT(w)))
return v},
aRi(d,e){var w=e.c===D.og
if(d.alH(e)===0&&d.FO(e).length!==0)return w?0:1
if(d.FO(e).length!==0||d.aqe(e)!=null)return w?2:3
return w?4:5},
hxu(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.My(a4),a3=new A.e9()
a3.d4(a5)
w=A.a([],x.dT)
v=a2.b
u=A.C(v,x.P)
B.d.dZ(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.M)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("L.E"),q=0;q<u.length;u.length===v||(0,A.M)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.c()
j=i.h(0,k)}h=a2.FO(m)
g=a2.aqe(m)
f=a2.aLr(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cB(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.w2)k="father"
else k=k===D.og?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gI(h).b)+".")}if(j!=null){k=j.c
if(k===D.w2)k="father"
else k=k===D.og?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.dZ(l,a3)
B.d.aW(l,new C.fYf())
d=B.a.i(m.b)
a0=A.C(new A.Y(s,new C.fYg(d),o),n)
B.d.dZ(a0,a3)
k=A.a([d],t)
i=A.T(a0)
a1=new A.jx(a0,0,3,i.k("jx<1>"))
a1.pf(a0,0,3,i.c)
B.d.v(k,a1)
B.d.dZ(k,a3)
a1=C.aRi(a2,m)
i=new A.jx(l,0,4,p)
i.pf(l,0,4,r)
w.push(new C.b9B(d,a1,i.dm(0),k))
if(w.length>=5)break}return w},
hpj(d){return B.a.t(d,"married to")||B.a.t(d," of ")||B.a.a0(d,"My ")?1:0},
hwA(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.My(a4),a3=new A.e9()
a3.d4(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.M)(t),++r){q=t[r]
if(a2.FO(q).length>=2)u.push(q)}B.d.dZ(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.M)(u),++r){l=u[r]
k=a2.FO(l)
j=A.T(k)
i=new A.jx(k,0,4,j.k("jx<1>"))
i.pf(k,0,4,j.c)
h=i.dm(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.M)(t),++g){q=t[g]
if(q.a!==j&&!B.d.b2(h,new C.fPa(q))&&q.d!==j)i.push(q)}B.d.dZ(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.jx(i,0,k,m)
j.pf(i,0,k,n)
f=j.dm(0)
j=B.a.i(l.b)
k=C.aRi(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.M)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.M)(h),++g)e.push(C.aRi(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.M)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.M)(f),++g)a0.push(C.aRi(a2,f[g]))
w.push(new C.a9l(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
li:function li(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bQ7:function bQ7(d){this.b=d
this.c=$},
bQ8:function bQ8(){},
bQ9:function bQ9(d){this.a=d},
fo7:function fo7(d){this.a=d},
fXQ:function fXQ(d){this.a=d},
fXR:function fXR(){},
fXS:function fXS(d){this.a=d},
fXT:function fXT(d,e){this.a=d
this.b=e},
fXU:function fXU(d,e,f){this.a=d
this.b=e
this.c=f},
fXP:function fXP(d,e){this.a=d
this.b=e},
fXV:function fXV(d){this.a=d},
fXW:function fXW(d){this.a=d},
fXX:function fXX(d,e,f){this.a=d
this.b=e
this.c=f},
fXO:function fXO(d,e){this.a=d
this.b=e},
fAC:function fAC(d,e){this.a=d
this.b=e},
ate:function ate(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fOE:function fOE(){},
fOF:function fOF(){},
zh:function zh(d,e,f){this.a=d
this.b=e
this.c=f},
fx3:function fx3(d){this.a=d},
fDe:function fDe(d){this.a=d},
ak4:function ak4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bL7:function bL7(){},
Mj:function Mj(d,e,f){this.a=d
this.b=e
this.c=f},
b9B:function b9B(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
fYf:function fYf(){},
fYg:function fYg(d){this.a=d},
a9l:function a9l(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fPa:function fPa(d){this.a=d},
bgP:function bgP(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
af9:function af9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
ajj:function ajj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ajk:function ajk(d,e,f,g,h){var _=this
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
_.bz$=g
_.aa$=h
_.c=_.a=null},
bJl:function bJl(d){this.a=d},
bJg:function bJg(){},
bJm:function bJm(){},
bJe:function bJe(){},
bJf:function bJf(){},
bJk:function bJk(d){this.a=d},
bJh:function bJh(d,e){this.a=d
this.b=e},
bJj:function bJj(d,e){this.a=d
this.b=e},
bJi:function bJi(d,e){this.a=d
this.b=e},
bJd:function bJd(d){this.a=d},
bc_:function bc_(d,e){this.b=d
this.a=e},
Qd:function Qd(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAJ:function aAJ(d,e,f){this.b=d
this.c=e
this.a=f},
az9:function az9(d,e,f){this.a=d
this.b=e
this.c=f},
atY:function atY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
atZ:function atZ(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.cO$=e
_.b5$=f
_.c=_.a=null},
cn6:function cn6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cn7:function cn7(d){this.a=d},
cn5:function cn5(d){this.a=d},
cn8:function cn8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cn9:function cn9(){},
cna:function cna(d,e){this.a=d
this.b=e},
cnb:function cnb(){},
cnc:function cnc(d){this.a=d},
cn2:function cn2(d){this.a=d},
cn3:function cn3(d,e){this.a=d
this.b=e},
cn4:function cn4(d,e,f){this.a=d
this.b=e
this.c=f},
cmY:function cmY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cn_:function cn_(d,e){this.a=d
this.b=e},
cn0:function cn0(d,e){this.a=d
this.b=e},
cmZ:function cmZ(d,e){this.a=d
this.b=e},
cmX:function cmX(){},
cn1:function cn1(){},
bbu:function bbu(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cMz:function cMz(){},
axT:function axT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
axU:function axU(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cC6:function cC6(d){this.a=d},
cC5:function cC5(d){this.a=d},
cCe:function cCe(d,e){this.a=d
this.b=e},
cCf:function cCf(d,e){this.a=d
this.b=e},
cCg:function cCg(d){this.a=d},
cCd:function cCd(d){this.a=d},
cCh:function cCh(d){this.a=d},
cCi:function cCi(d,e){this.a=d
this.b=e},
cCj:function cCj(){},
cCk:function cCk(d){this.a=d},
cC8:function cC8(d){this.a=d},
cC9:function cC9(d,e){this.a=d
this.b=e},
cC7:function cC7(d,e){this.a=d
this.b=e},
cCa:function cCa(){},
cCb:function cCb(){},
cCc:function cCc(d,e){this.a=d
this.b=e},
ayU:function ayU(){},
aGc:function aGc(){},
h5_(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bqh((w-450*u)/2,(v-900*u)/2,u)},
aeY:function aeY(){},
f1_:function f1_(d){this.a=d},
aK_:function aK_(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fb3:function fb3(d){this.a=d},
alf:function alf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alg:function alg(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.pV$=f
_.LD$=g
_.amd$=h
_.bz$=i
_.aa$=j
_.c=_.a=null},
bQU:function bQU(d){this.a=d},
bQT:function bQT(){},
bQR:function bQR(d){this.a=d},
bQP:function bQP(){},
bQQ:function bQQ(d){this.a=d},
bQM:function bQM(d,e){this.a=d
this.b=e},
bQN:function bQN(){},
bQO:function bQO(d){this.a=d},
bQS:function bQS(d,e){this.a=d
this.b=e},
bQL:function bQL(d){this.a=d},
brX:function brX(d,e){this.b=d
this.a=e},
f10:function f10(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f11:function f11(d,e,f){this.a=d
this.b=e
this.c=f},
f12:function f12(d,e,f){this.a=d
this.b=e
this.c=f},
f13:function f13(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f14:function f14(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f15:function f15(){},
ald:function ald(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ale:function ale(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.pV$=f
_.LD$=g
_.amd$=h
_.bz$=i
_.aa$=j
_.c=_.a=null},
bQx:function bQx(){},
bQI:function bQI(d,e){this.a=d
this.b=e},
bQJ:function bQJ(d){this.a=d},
bQK:function bQK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQE:function bQE(){},
bQD:function bQD(d,e){this.a=d
this.b=e},
bQF:function bQF(d,e){this.a=d
this.b=e},
bQG:function bQG(){},
bQH:function bQH(d){this.a=d},
bQz:function bQz(d){this.a=d},
bQA:function bQA(d){this.a=d},
bQB:function bQB(d){this.a=d},
bQy:function bQy(d,e){this.a=d
this.b=e},
bQC:function bQC(d){this.a=d},
biC:function biC(d,e){this.b=d
this.a=e},
dnT:function dnT(){},
a1o:function a1o(d,e){this.a=d
this.b=e},
al9:function al9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ala:function ala(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.pV$=e
_.LD$=f
_.amd$=g
_.bz$=h
_.aa$=i
_.c=_.a=null},
bQj:function bQj(d){this.a=d},
bQi:function bQi(){},
bQh:function bQh(){},
bQb:function bQb(){},
bQc:function bQc(){},
bQg:function bQg(d,e,f){this.a=d
this.b=e
this.c=f},
bQf:function bQf(d){this.a=d},
bQd:function bQd(d,e){this.a=d
this.b=e},
bQe:function bQe(d){this.a=d},
bi2:function bi2(d,e){this.b=d
this.a=e},
aAM:function aAM(){},
bfD:function bfD(){},
aAO:function aAO(){},
bfE:function bfE(){},
aAP:function aAP(){},
bfF:function bfF(){},
ue(d,e,f,g,h){var w,v,u=null,t=A.m(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.j0,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.v(v,A.a([A.X(g,h,u,u,u,20),B.ac],w))
v.push(A.d(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aB(u,A.p(u,A.B(v,B.m,u,B.e,B.P,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.n),u,u,u,u,B.Nx,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hdu(d,e,f,g,h,i,j){return new C.alb(i,h,d,j,e,f,g,null)},
a5Q:function a5Q(d,e){this.c=d
this.a=e},
bia:function bia(d){this.a=d},
tn:function tn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bQa:function bQa(d){this.a=d},
I2:function I2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
VD:function VD(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bkP:function bkP(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
dY2:function dY2(d,e){this.a=d
this.b=e},
dY3:function dY3(d){this.a=d},
dY4:function dY4(d,e){this.a=d
this.b=e},
dY0:function dY0(d){this.a=d},
dY1:function dY1(d){this.a=d},
dY_:function dY_(d){this.a=d},
dXY:function dXY(d){this.a=d},
dXZ:function dXZ(d){this.a=d},
dXX:function dXX(d,e){this.a=d
this.b=e},
dY5:function dY5(d){this.a=d},
dY6:function dY6(d,e){this.a=d
this.b=e},
dY7:function dY7(d,e){this.a=d
this.b=e},
dY8:function dY8(d,e){this.a=d
this.b=e},
dYb:function dYb(d,e){this.a=d
this.b=e},
dYc:function dYc(d,e){this.a=d
this.b=e},
dYd:function dYd(d,e){this.a=d
this.b=e},
dYe:function dYe(d,e){this.a=d
this.b=e},
dYf:function dYf(d,e){this.a=d
this.b=e},
dYg:function dYg(d,e,f){this.a=d
this.b=e
this.c=f},
dYh:function dYh(d,e){this.a=d
this.b=e},
dYi:function dYi(d,e){this.a=d
this.b=e},
dY9:function dY9(d){this.a=d},
dYa:function dYa(d){this.a=d},
a_f:function a_f(d,e){this.a=d
this.b=e},
alb:function alb(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
alc:function alc(d){var _=this
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
bQv:function bQv(d){this.a=d},
bQw:function bQw(d){this.a=d},
bQu:function bQu(d){this.a=d},
bQl:function bQl(d){this.a=d},
bQm:function bQm(d){this.a=d},
bQk:function bQk(d){this.a=d},
bQr:function bQr(d,e,f){this.a=d
this.b=e
this.c=f},
bQs:function bQs(d){this.a=d},
bQo:function bQo(d,e){this.a=d
this.b=e},
bQp:function bQp(d,e,f){this.a=d
this.b=e
this.c=f},
bQt:function bQt(){},
bQq:function bQq(d,e){this.a=d
this.b=e},
bQn:function bQn(d){this.a=d},
Th:function Th(d,e){this.c=d
this.a=e},
al8:function al8(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bPW:function bPW(d){this.a=d},
bPX:function bPX(d){this.a=d},
bQ6:function bQ6(){},
bQ5:function bQ5(d,e,f){this.a=d
this.b=e
this.c=f},
bQ0:function bQ0(d,e){this.a=d
this.b=e},
bQ_:function bQ_(d,e){this.a=d
this.b=e},
bQ1:function bQ1(d){this.a=d},
bQ2:function bQ2(d,e){this.a=d
this.b=e},
bQ3:function bQ3(d,e){this.a=d
this.b=e},
bPZ:function bPZ(d,e){this.a=d
this.b=e},
bQ4:function bQ4(d,e,f){this.a=d
this.b=e
this.c=f},
bPY:function bPY(d,e){this.a=d
this.b=e},
i8n(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aid(a6),a5=a4.length
if(a5===0)return""
w=A.U(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.M)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bC(new A.V(Date.now(),0,!1))
s=new C.fA8(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("Y<1>"),q=q.k("cQ<1,n>"),o=q.k("L.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.M)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.yv)m.push(l===D.w2?"male":"female")
l=u.w
k=A.af(a3,!0,!1,!1,!1).cB(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.af(a3,!0,!1,!1,!1).cB(k)
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
if(e!=null&&w.aj(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.C(new A.cQ(new A.Y(a4,new C.fA6(u,f),p),new C.fA7(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aH(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aH(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aq(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
i8o(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aid(a0),d=e.length
if(d===0)return""
w=x.N
v=A.U(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.M)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fAd(v,e)
q=new C.fAb(v)
p=A.U(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.M)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.M)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.M)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.aj(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.aj(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("bc<2>")
d=A.dg(new A.bc(p,d),d.k("L.E"))
n=A.C(d,A.a7(d).k("cs.E"))
B.d.fd(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.M)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gaf(e),k=new A.f5(l,new C.fAc(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.aj(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aH(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hUG(d,e,f,g){var w,v,u=C.i8p(d,e)
if(u<=0||f.length<=u)return new A.aeC(!1,D.D_,f)
if(g.t(0,e.a))return new A.aeC(!1,D.D_,f)
w=A.T(f).c
v=A.d0(f,0,A.dB(u,"count",x.S),w).dm(0)
return new A.aeC(!0,A.d0(f,u,null,w).dm(0),v)},
hUH(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aid(d3),d2=d1.length
if(d2===0)return D.hiG
w=x.N
v=A.U(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.M)(d1),++u){t=d1[u]
v.c4(0,t.a,new C.dds(t))}s=new C.ddJ(v)
d2=x.dy
r=A.U(w,d2)
q=new C.ddB(r)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.ddA(r)
l=A.U(w,x.do)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cd(l.c4(0,k,new C.ddt()),o)}h=new C.ddz(s)
g=new C.ddy(l,r)
p=v.$ti.k("bc<2>")
o=p.k("Y<L.E>")
f=A.C(new A.Y(new A.bc(v,p),new C.ddu(h),o),o.k("L.E"))
e=f.length===0?new A.bc(v,p).gI(0):B.d.gI(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.M)(f),++u){t=f[u]
a0=g.$2(t.a,A.aX(w))
if(a0>d){d=a0
e=t}}a1=A.aX(w)
p=x.S
a2=A.U(w,p)
a3=A.U(w,w)
a4=A.U(w,d2)
d2=x.i
a5=A.U(w,d2)
a6=A.U(w,x.d9)
a7=A.U(w,d2)
a8=A.a([],x.s)
a9=new C.ddH(new C.ddD(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.U(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dq(v,v.r,v.e),j=a2.gal9(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.eD([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.M(0,i))break}if(h.$1(b0)&&a2.aj(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.pT(J.dH(i==null?B.Y:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.U(w,x.dO)
b5=A.a([],x.M)
b6=A.U(w,d2)
b7=new C.ddr(a2,new C.ddI(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.M)(a8),++u){b8=a8[u]
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
d2=b4.$ti.k("cv<1>")
d2=A.C(new A.cv(b4,d2),d2.k("L.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.M)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.Gb(o,new A.t(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Kt(c5.a,new A.t(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cv<1>")
d2=A.C(new A.cv(b6,d2),d2.k("L.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.M)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bQ(0,new C.ddv(c6,b4))
for(d2=new A.cH(a4,a4.$ti.k("cH<1,2>")).gaf(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aW(c7.b);j.C();){i=j.gT(j)
if(b6.aj(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.t(d0,b4.h(0,i).b.b))}}for(j=B.d.gaf(b5),i=new A.f5(j,new C.ddw(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.aW(o,new C.ddx())
c6.push(new C.aJW(new A.t(c9,b4.h(0,c8).b.b+112),B.I,!1,o))}return new C.bfJ(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hsn(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cB(d)
return w==null?null:w.b[1]},
hmA(d,e,f,g,h,i,j,k,l,m,n){return new C.a_s(k,f,j,e,l,n,m,d,g,h,i,null)},
aCL(d,e,f,g,h,i,j){return new C.bjp(i,d,e,f,j,h,g,null)},
aq9:function aq9(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEi:function aEi(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dZI:function dZI(d){this.a=d},
dZH:function dZH(d){this.a=d},
dZK:function dZK(d,e){this.a=d
this.b=e},
dZL:function dZL(d,e){this.a=d
this.b=e},
dZM:function dZM(d){this.a=d},
dZG:function dZG(d,e){this.a=d
this.b=e},
dZJ:function dZJ(d){this.a=d},
dZO:function dZO(d){this.a=d},
dZN:function dZN(d,e){this.a=d
this.b=e},
aq3:function aq3(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEf:function aEf(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dZ8:function dZ8(d){this.a=d},
dZ6:function dZ6(d){this.a=d},
dZ7:function dZ7(d){this.a=d},
dZ9:function dZ9(d,e){this.a=d
this.b=e},
dZ3:function dZ3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dYv:function dYv(d){this.a=d},
dYw:function dYw(d,e){this.a=d
this.b=e},
dYN:function dYN(d){this.a=d},
dYL:function dYL(d){this.a=d},
dYM:function dYM(d,e){this.a=d
this.b=e},
dYO:function dYO(d){this.a=d},
dYP:function dYP(d,e){this.a=d
this.b=e},
dZ2:function dZ2(d,e){this.a=d
this.b=e},
dYK:function dYK(d){this.a=d},
dYJ:function dYJ(d){this.a=d},
dYI:function dYI(d,e){this.a=d
this.b=e},
dZ_:function dZ_(){},
dZ0:function dZ0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dYZ:function dYZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dYT:function dYT(d){this.a=d},
dYU:function dYU(d,e,f){this.a=d
this.b=e
this.c=f},
dYS:function dYS(d,e){this.a=d
this.b=e},
dYV:function dYV(d,e){this.a=d
this.b=e},
dYQ:function dYQ(d,e){this.a=d
this.b=e},
dYR:function dYR(){},
dYW:function dYW(d,e){this.a=d
this.b=e},
dYX:function dYX(d){this.a=d},
dYY:function dYY(d,e){this.a=d
this.b=e},
dZ1:function dZ1(d,e){this.a=d
this.b=e},
dYj:function dYj(d,e){this.a=d
this.b=e},
dYk:function dYk(d,e){this.a=d
this.b=e},
dZb:function dZb(d,e,f){this.a=d
this.b=e
this.c=f},
dZ5:function dZ5(d,e,f){this.a=d
this.b=e
this.c=f},
dZ4:function dZ4(d){this.a=d},
dYl:function dYl(d){this.a=d},
dYm:function dYm(d){this.a=d},
dYn:function dYn(){},
dYo:function dYo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dYs:function dYs(d,e){this.a=d
this.b=e},
dYr:function dYr(d,e){this.a=d
this.b=e},
dYq:function dYq(d){this.a=d},
dYt:function dYt(d,e){this.a=d
this.b=e},
dYp:function dYp(d){this.a=d},
dZa:function dZa(d){this.a=d},
dYF:function dYF(){},
dYG:function dYG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dYE:function dYE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dYA:function dYA(d,e,f){this.a=d
this.b=e
this.c=f},
dYz:function dYz(d,e,f){this.a=d
this.b=e
this.c=f},
dYx:function dYx(d,e){this.a=d
this.b=e},
dYB:function dYB(d){this.a=d},
dYC:function dYC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dYy:function dYy(d,e){this.a=d
this.b=e},
dYD:function dYD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dYH:function dYH(d,e){this.a=d
this.b=e},
dZi:function dZi(){},
dZj:function dZj(d,e){this.a=d
this.b=e},
dZk:function dZk(d){this.a=d},
dZl:function dZl(d,e){this.a=d
this.b=e},
dZe:function dZe(d){this.a=d},
dZc:function dZc(d,e){this.a=d
this.b=e},
dZf:function dZf(d,e){this.a=d
this.b=e},
dZg:function dZg(d,e){this.a=d
this.b=e},
dZh:function dZh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dZm:function dZm(d){this.a=d},
dZd:function dZd(d){this.a=d},
dYu:function dYu(d){this.a=d},
bfH:function bfH(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ddp:function ddp(d){this.a=d},
ddo:function ddo(d,e){this.a=d
this.b=e},
ddq:function ddq(d){this.a=d},
ddn:function ddn(d,e){this.a=d
this.b=e},
fA8:function fA8(d,e){this.a=d
this.b=e},
fA9:function fA9(d){this.a=d},
fAa:function fAa(){},
fA6:function fA6(d,e){this.a=d
this.b=e},
fA7:function fA7(){},
fAd:function fAd(d,e){this.a=d
this.b=e},
fAe:function fAe(d){this.a=d},
fAf:function fAf(){},
fAb:function fAb(d){this.a=d},
fAc:function fAc(d,e){this.a=d
this.b=e},
Kt:function Kt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Gb:function Gb(d,e){this.a=d
this.b=e},
bfJ:function bfJ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dds:function dds(d){this.a=d},
ddJ:function ddJ(d){this.a=d},
ddB:function ddB(d){this.a=d},
ddC:function ddC(){},
ddA:function ddA(d){this.a=d},
ddt:function ddt(){},
ddz:function ddz(d){this.a=d},
ddy:function ddy(d,e){this.a=d
this.b=e},
ddu:function ddu(d){this.a=d},
ddD:function ddD(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ddE:function ddE(d){this.a=d},
ddF:function ddF(d){this.a=d},
ddG:function ddG(){},
ddH:function ddH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ddI:function ddI(){},
ddr:function ddr(d,e,f,g,h,i,j,k,l,m){var _=this
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
ddv:function ddv(d,e){this.a=d
this.b=e},
ddw:function ddw(d){this.a=d},
ddx:function ddx(){},
aJW:function aJW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bfK:function bfK(d,e){this.b=d
this.a=e},
ddK:function ddK(){},
ddL:function ddL(d){this.a=d},
ddM:function ddM(d){this.a=d},
ddN:function ddN(){},
bjq:function bjq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beM:function beM(d,e){this.b=d
this.a=e},
bxg:function bxg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fgN:function fgN(d){this.a=d},
bmD:function bmD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eR5:function eR5(d){this.a=d},
eR4:function eR4(d,e){this.a=d
this.b=e},
a_s:function a_s(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aCJ:function aCJ(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dty:function dty(d,e){this.a=d
this.b=e},
dtx:function dtx(d){this.a=d},
dtv:function dtv(d){this.a=d},
dtw:function dtw(d){this.a=d},
dtH:function dtH(d){this.a=d},
dtI:function dtI(d){this.a=d},
dtG:function dtG(d,e){this.a=d
this.b=e},
dtJ:function dtJ(){},
dtM:function dtM(d){this.a=d},
dtF:function dtF(d,e){this.a=d
this.b=e},
dtL:function dtL(){},
dtN:function dtN(d){this.a=d},
dtE:function dtE(d,e){this.a=d
this.b=e},
dtO:function dtO(d){this.a=d},
dtD:function dtD(d){this.a=d},
dtP:function dtP(d){this.a=d},
dtC:function dtC(d){this.a=d},
dtQ:function dtQ(d){this.a=d},
dtB:function dtB(d){this.a=d},
dtR:function dtR(d){this.a=d},
dtA:function dtA(d){this.a=d},
dtS:function dtS(d){this.a=d},
dtz:function dtz(d,e){this.a=d
this.b=e},
dtK:function dtK(d){this.a=d},
adw:function adw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjp:function bjp(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
adv:function adv(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bjo:function bjo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dtT:function dtT(d){this.a=d},
dtU:function dtU(d,e){this.a=d
this.b=e},
aCK:function aCK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIY:function aIY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
adx:function adx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
du2:function du2(d){this.a=d},
G7:function G7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hhs(d){var w=d.S,v=x.N
return w.jh(w,new C.ccM(),v,v)},
hMc(d){var w=d.bB
if(w>=0)return w
return 5},
hhu(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hhs(d).h(0,v)
if(w==null||w.length===0)return null
return A.bj(w)},
hht(d,e){var w=C.hhu(d,e)
if(w!=null&&w.cg(new A.V(Date.now(),0,!1)))return!0
return!1},
hMd(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hhs(d),w,w)
u=C.hhu(d,e)
t=u!=null&&u.cg(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bS(A.dF(30,0,0,0,0,0).a).a8().ae())
d.S=v},
b09(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b09=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lq(t,B.IT),$async$b09)
case 3:if(l){u=!0
w=1
break}u=A.l3(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.IT,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b09,v)},
ccM:function ccM(){},
hMa(){var w,v=$.oT(),u=J.e2(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ar(32)]
return"FT"+B.d.hq(u)},
IW(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$IW=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$IW)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_family_tree_backup_codes_v1",null,!1,B.bK),$async$IW)
case 8:r=e
if(r==null){u=A.U(x.N,x.z)
w=1
break}q=J.r(r,"codes")
if(x.f.b(q)){o=A.a2(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ab(m)
$.am.$1("[family tree sync codes] load: "+A.w(p))
w=7
break
case 4:w=2
break
case 7:u=A.U(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$IW,v)},
a7z(d){return C.hMb(d)},
hMb(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a7z=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$a7z)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_family_tree_backup_codes_v1",A.G(["codes",d,"savedAt",new A.V(Date.now(),0,!1).a8().ae()],x.N,x.z),!1,!1,B.cG,null),$async$a7z)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ab(p)
$.am.$1("[family tree sync codes] save: "+A.w(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a7z,v)},
ccL(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$ccL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.IW(),$async$ccL)
case 3:t=m.jZ(f),t=t.gaf(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gT(t)
q=r.b
if(s.b(q)){p=J.a5(q)
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
return A.i($async$ccL,v)},
NS(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$NS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.ccL(d),$async$NS)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.IW(),$async$NS)
case 6:s=f
r=J.a5(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dR(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).a8().ae())
r.n(s,t,o)
w=9
return A.b(C.a7z(s),$async$NS)
case 9:case 8:u=t
w=1
break
case 5:n=C.hMa()
w=10
return A.b(C.IW(),$async$NS)
case 10:s=f
J.aI(s,n,A.G(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).a8().ae(),"updatedAt",new A.V(Date.now(),0,!1).a8().ae()],x.N,x.K))
w=11
return A.b(C.a7z(s),$async$NS)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$NS,v)},
b08(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b08=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.IW(),$async$b08)
case 3:t=f
for(s=J.dn(t),r=s.gdS(t),r=r.dm(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.M)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.r(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a7z(t),$async$b08)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b08,v)},
a7A(d,e,f){var w=0,v=A.j(x.H),u
var $async$a7A=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aq8(d,e),$async$a7A)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.NS(d),$async$a7A)
case 7:w=4
break
case 5:w=8
return A.b(C.b08(d),$async$a7A)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a7A,v)},
aq2(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aq2=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aq8(f,e),$async$aq2)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c8(),$async$aq2)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.IW(),$async$aq2)
case 7:q=o.r(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a5(q)
if(!J.A(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aq2,v)},
b07(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b07=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c8(),$async$b07)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.IW(),$async$b07)
case 4:t=q.r(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a5(t)
if(!J.A(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b07,v)},
hMe(){var w,v=$.oT(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ar(32)]
return"FT"+B.d.hq(u)},
aq5(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aq5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$aq5)
case 3:if(!g){u=null
w=1
break}t=C.hMe()
w=4
return A.b(A.VE(),$async$aq5)
case 4:s=g
r=B.dN.aL(B.X.ap(d.eZ(),null))
r=B.cI.gcp().aL(r)
q=e?999:2
J.aI(s,t,A.G(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).a8().ae()],x.N,x.K))
w=5
return A.b(A.a7B(s),$async$aq5)
case 5:p=e?999:2
u=new A.a0E("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aq5,v)},
aq4(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aq4=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.VE(),$async$aq4)
case 3:p=a0
o=J.a5(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a5(n)
l=A.aK(m.h(n,"usesRemaining"))
k=l==null?null:B.k.N(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b07(J.k(l==null?"":l),j),$async$aq4)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cd.cA(0,B.cD.aL(t))
s=C.hhv(r)}catch(f){q=A.ab(f)
$.am.$1("[family tree qr stash] decode: "+A.w(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dR(A.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a8().ae())
o.n(p,g,l)}w=5
return A.b(A.a7B(p),$async$aq4)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aq4,v)},
hhv(d){var w,v,u,t,s=null
try{w=B.X.aN(0,d,s)
if(!x.f.b(w))return s
u=J.r(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hMg(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
h11(d){var w=0,v=A.j(x.m),u,t,s
var $async$h11=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aq4(t[1])
w=1
break}u=null
w=1
break}u=C.hhv(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h11,v)},
hMg(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.dc(v,x.f)
u=A.cG(u,new C.ccO(),u.$ti.k("L.E"),x.k)
t=A.a7(u).k("Y<L.E>")
s=A.C(new A.Y(u,new C.ccP(),t),t.k("L.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bj(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.U(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jZ(p),t=t.gaf(t),o=x.B;t.C();){n=t.gT(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.dc(l,u)
n=A.cG(n,new C.ccQ(),n.$ti.k("L.E"),o)
k=A.a7(n).k("Y<L.E>")
j=A.C(new A.Y(n,new C.ccR(),k),k.k("L.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aq6(h,w,s,r,q)},
aq8(d,e){var w=0,v=A.j(x.y),u,t
var $async$aq8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.NJ(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.B1(d),$async$aq8)
case 3:u=t.cL(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aq8,v)},
ccX(d){var w=0,v=A.j(x.bC),u,t,s
var $async$ccX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.B1(d),$async$ccX)
case 3:t=s.b6(f,new C.ccY(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aW(t,new C.ccZ())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ccX,v)},
VF(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$VF=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aq8(e,d),$async$VF)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.NS(e),$async$VF)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.B1(e),$async$VF)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.ccV(g))
r=A.C(t,t.$ti.k("L.E"))}t=J.a5(r)
if(t.gan(r)){u=null
w=1
break}t=t.dF(r,new C.ccW(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.U(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Lf(e,o),$async$VF)
case 14:n=i
if(J.cL(n))q.n(0,o,n)
case 12:r.length===t||(0,A.M)(r),++p
w=11
break
case 13:u=new C.aq6(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$VF,v)},
b0c(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b0c=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.VF(d,e,f,g),$async$b0c)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aN(t,s,"_")
r=q.a
u=A.GS(A.Kp(q.eZ(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0c,v)},
b0b(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b0b=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.VF(d,e,f,g),$async$b0b)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aq5(r,f),$async$b0b)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aGY(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0b,v)},
VG(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$VG=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h11(a0),$async$VG)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aq2(g.a,d,e,f,s,r),$async$VG)
case 6:if(!a2){if(r)throw A.W(A.bd("This backup expired or the sender's tree is no longer available."))
throw A.W(A.bd("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bCv(e,j),$async$VG)
case 12:case 11:w=13
return A.b(C.ahZ(e,j,s),$async$VG)
case 13:h=n.h(0,i)
w=h!=null&&J.cL(h)?14:15
break
case 14:w=16
return A.b(C.Bc(e,i,h),$async$VG)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.M)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bqn(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$VG,v)},
aq6:function aq6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ccT:function ccT(){},
ccU:function ccU(){},
ccS:function ccS(){},
ccO:function ccO(){},
ccP:function ccP(){},
ccQ:function ccQ(){},
ccR:function ccR(){},
ccY:function ccY(){},
ccZ:function ccZ(){},
ccV:function ccV(d){this.a=d},
ccW:function ccW(d){this.a=d},
h9C(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f8(null,x.H)
return A.hF(d,new C.aq7(w,e,g,i,f,h,null),!0,null,x.H)},
ddm(d,e,f,g,h,i,j,k){return new C.bfG(i,e,k,j,g,f,h,d,null)},
aq7:function aq7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEh:function aEh(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dZv:function dZv(d){this.a=d},
dZw:function dZw(d,e,f){this.a=d
this.b=e
this.c=f},
dZA:function dZA(d,e){this.a=d
this.b=e},
dZB:function dZB(d){this.a=d},
dZs:function dZs(d){this.a=d},
dZt:function dZt(d,e){this.a=d
this.b=e},
dZu:function dZu(d,e){this.a=d
this.b=e},
dZz:function dZz(d){this.a=d},
dZy:function dZy(d,e){this.a=d
this.b=e},
dZx:function dZx(){},
dZD:function dZD(d){this.a=d},
dZE:function dZE(d,e){this.a=d
this.b=e},
dZC:function dZC(d,e){this.a=d
this.b=e},
ddO:function ddO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bfI:function bfI(d,e,f){this.d=d
this.e=e
this.a=f},
acN:function acN(d,e,f){this.c=d
this.d=e
this.a=f},
bfG:function bfG(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bfL:function bfL(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_N:function a_N(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEg:function aEg(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dZn:function dZn(d,e){this.a=d
this.b=e},
dZo:function dZo(d){this.a=d},
dZp:function dZp(d){this.a=d},
dZq:function dZq(d){this.a=d},
dZr:function dZr(d){this.a=d},
a_O:function a_O(d){this.a=d},
bkQ:function bkQ(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dZF:function dZF(d,e){this.a=d
this.b=e},
aZH(d,e){return new C.aZG(d,e,null)},
aZG:function aZG(d,e,f){this.c=d
this.d=e
this.a=f},
iaS(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b7(d,11)},
iim(d){return A.bV(B.L,null,new C.fQE(new C.u1(A.P(d).ax.a===B.J)),d,!0,!0,!0,null,!1,!1,x.N)},
hjp(d,e){return new C.at2(e,d,null)},
aRc(d,e,f,g,h,i,j){var w=C.iaS(i)
if(w!=null)return A.bx(e,new A.a6(j,f,new C.a6F(w,!0,null),null),B.ap)
return M.aQy(e,B.bU,f,g,h,i,j)},
lL:function lL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6F:function a6F(d,e,f){this.c=d
this.d=e
this.a=f},
bkx:function bkx(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b5$=e
_.c=_.a=null},
dLk:function dLk(d){this.a=d},
dLl:function dLl(){},
dLm:function dLm(d,e){this.a=d
this.b=e},
bkw:function bkw(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fQE:function fQE(d){this.a=d},
fQD:function fQD(d,e){this.a=d
this.b=e},
fQC:function fQC(d,e){this.a=d
this.b=e},
fQB:function fQB(d,e){this.a=d
this.b=e},
at2:function at2(d,e,f){this.c=d
this.d=e
this.a=f},
clj:function clj(d,e){this.a=d
this.b=e},
aMl:function aMl(){},
ii7(d){var w=null
return A.cj(w,w,!0,w,new C.fQ0(),d,w,!0,!0,x.e2)},
iji(d,e,f,g,h){var w=null
return A.cj(w,w,!0,w,new C.fXw(h,g,f,e),d,w,!0,!0,x.N)},
ii9(d,e){var w=null
return A.cj(w,w,!0,w,new C.fQ5(e),d,w,!0,!0,x.dY)},
ii8(d){var w=null
return A.cj(w,w,!0,w,new C.fQ4(),d,w,!0,!0,x.c5)},
aUc:function aUc(d,e){this.a=d
this.b=e},
aUb:function aUb(d){this.a=d},
aSa:function aSa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fQ0:function fQ0(){},
fXw:function fXw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fQ5:function fQ5(d){this.a=d},
fQ4:function fQ4(){},
Zq:function Zq(d,e){this.c=d
this.a=e},
azu:function azu(){var _=this
_.d=$
_.c=_.a=_.e=null},
d56:function d56(d){this.a=d},
d57:function d57(d){this.a=d},
d55:function d55(d,e){this.a=d
this.b=e},
d58:function d58(d){this.a=d},
d59:function d59(d){this.a=d},
Zp:function Zp(d){this.a=d},
azt:function azt(){this.d=$
this.c=this.a=null},
d52:function d52(d){this.a=d},
d53:function d53(d){this.a=d},
d54:function d54(d){this.a=d},
YX:function YX(d){this.a=d},
ay7:function ay7(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cDh:function cDh(){},
cDn:function cDn(d){this.a=d},
cDo:function cDo(d){this.a=d},
cDp:function cDp(d){this.a=d},
cDm:function cDm(){},
cDq:function cDq(d){this.a=d},
cDr:function cDr(d){this.a=d},
cDl:function cDl(){},
cDs:function cDs(d,e){this.a=d
this.b=e},
cDk:function cDk(d,e){this.a=d
this.b=e},
cDi:function cDi(d,e){this.a=d
this.b=e},
cDt:function cDt(d){this.a=d},
cDj:function cDj(){},
cDu:function cDu(d){this.a=d},
a1A:function a1A(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bx6:function bx6(){this.d=$
this.c=this.a=null},
fg6:function fg6(d,e){this.a=d
this.b=e},
fg7:function fg7(d){this.a=d},
fg8:function fg8(d,e){this.a=d
this.b=e},
abS:function abS(d,e){this.a=d
this.b=e},
FX:function FX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bx4:function bx4(d,e){var _=this
_.d=$
_.bz$=d
_.aa$=e
_.c=_.a=null},
fg4:function fg4(d,e){this.a=d
this.b=e},
ay0:function ay0(d,e){this.c=d
this.a=e},
bx5:function bx5(d,e){var _=this
_.d=$
_.bz$=d
_.aa$=e
_.c=_.a=null},
fg5:function fg5(d){this.a=d},
bx3:function bx3(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aOm:function aOm(){},
aOn:function aOn(){},
bEs(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bh(u),s=B.o.E(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oR(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fOr(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.Q,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aS(B.o.u(s),2,"0")
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Yl(A.cS(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aQO(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aQO=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hV().l0(85,1280,B.eL),$async$aQO)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fk(),$async$aQO)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hjo()
w=9
return A.b(C.cli(q,r),$async$aQO)
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
o=A.ab(l)
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
return A.i($async$aQO,v)},
aRa(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aRa=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.clf(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gak(g.split(",")):g
p=B.cD.aL(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.S().LV(p,!0,null,i).d7(0,B.fY),$async$aRa)
case 9:n=a1
w=10
return A.b(n.lL(),$async$aRa)
case 10:m=a1
w=11
return A.b(J.a3g(m).ht(B.h9),$async$aRa)
case 11:l=a1
J.a3g(m).q()
if(l==null){w=8
break}i=J.eR(B.dJ.gaR(l))
k="data:image/png;base64,"+B.cI.gcp().aL(i)
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
j=A.ab(f)
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
return A.i($async$aRa,v)},
fOr:function fOr(){},
u1:function u1(d){this.a=d},
at1:function at1(d,e,f){this.c=d
this.d=e
this.a=f},
aFJ:function aFJ(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eOd:function eOd(d,e){this.a=d
this.b=e},
eO4:function eO4(d){this.a=d},
eO5:function eO5(d){this.a=d},
eOb:function eOb(d,e){this.a=d
this.b=e},
eOa:function eOa(d,e){this.a=d
this.b=e},
eO7:function eO7(d,e){this.a=d
this.b=e},
eO6:function eO6(d,e){this.a=d
this.b=e},
eO8:function eO8(d){this.a=d},
eO9:function eO9(d,e){this.a=d
this.b=e},
eOc:function eOc(d,e){this.a=d
this.b=e},
eO_:function eO_(d,e){this.a=d
this.b=e},
eO3:function eO3(d){this.a=d},
eO2:function eO2(d,e){this.a=d
this.b=e},
eO1:function eO1(d){this.a=d},
eOe:function eOe(d,e){this.a=d
this.b=e},
eOf:function eOf(d,e){this.a=d
this.b=e},
eO0:function eO0(d,e){this.a=d
this.b=e},
hwd(d,e,f){var w="thumbnailPath",v=e.ag()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.G(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).a8().ae(),"project",v],x.N,x.z)},
fOs(d,e,f){var w=0,v=A.j(x.N),u
var $async$fOs=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.X.ap(C.hwd(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fOs,v)},
bEu(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bEu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fOs(!0,d,e),$async$bEu)
case 4:w=3
return A.b(r.at_(g,d,e.a),$async$bEu)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dN.aL(B.X.ap(C.hwd(d,e,null),null))
u="NGMY_WS:"+B.kv.gcp().aL(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEu,v)},
hnY(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
h9h(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d3(s,"NGMYWSSYNC2|"))return!0
if(J.d3(s,"NGMY_WS:"))return!0
if(J.f0(s,t))return!0
if(J.d3(s,"{"))try{w=B.X.aN(0,s,null)
if(x.f.b(w)){v=J.r(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
ig_(d){var w,v,u,t=C.hnY(d)
if(t==null)return null
if(C.h9h(t))return t
w=B.a.cv(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b7(t,w))
if(C.h9h(v))return v}u=B.a.cv(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b7(t,u))
if(C.h9h(v))return v}return null},
h9g(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d3(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d3(q,"NGMY_WS:")){v=B.cd.cA(0,B.cD.aL(J.ng(q,8)))
w=t.a(B.X.aN(0,v,r))}else w=t.a(B.X.aN(0,q,r))
t=J.r(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.r(w,"project")
if(!x.f.b(u))return r
t=C.h3H(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bEt(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bEt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.asZ(t[1]),$async$bEt)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.h9g(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.h9g(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEt,v)},
h9f(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lt(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bE_(){var w=0,v=A.j(x.o),u,t
var $async$bE_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.H3(),$async$bE_)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.h9g(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bE_,v)},
hxd(d,e,f,g){return A.bV(B.L,null,new C.fXm(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fXm:function fXm(d,e,f){this.a=d
this.b=e
this.c=f},
adS:function adS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eOh:function eOh(d,e){this.a=d
this.b=e},
eOi:function eOi(d,e){this.a=d
this.b=e},
eOj:function eOj(d,e){this.a=d
this.b=e},
eOk:function eOk(d,e){this.a=d
this.b=e},
eOg:function eOg(d){this.a=d},
asW:function asW(d,e,f){this.c=d
this.d=e
this.a=f},
bm8:function bm8(){var _=this
_.c=_.a=_.e=_.d=null},
eNV:function eNV(d,e){this.a=d
this.b=e},
eNW:function eNW(d){this.a=d},
eNX:function eNX(d){this.a=d},
at0:function at0(d){this.a=d},
aFI:function aFI(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eNZ:function eNZ(d){this.a=d},
eNY:function eNY(d){this.a=d},
hPt(d,e,f,g,h){return new C.Ow(h,g,d,e,f,null)},
aKI:function aKI(d,e){this.a=d
this.b=e},
Ow:function Ow(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFK:function aFK(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eOH:function eOH(){},
eOD:function eOD(d,e){this.a=d
this.b=e},
eOE:function eOE(d){this.a=d},
eOo:function eOo(d){this.a=d},
eOm:function eOm(d){this.a=d},
eOn:function eOn(d){this.a=d},
eOx:function eOx(d,e){this.a=d
this.b=e},
eOu:function eOu(d,e){this.a=d
this.b=e},
eOv:function eOv(d,e){this.a=d
this.b=e},
eOw:function eOw(d,e,f){this.a=d
this.b=e
this.c=f},
eOs:function eOs(d,e,f){this.a=d
this.b=e
this.c=f},
eOq:function eOq(d){this.a=d},
eOr:function eOr(d){this.a=d},
eOt:function eOt(d){this.a=d},
eOK:function eOK(d){this.a=d},
eOJ:function eOJ(d){this.a=d},
eOL:function eOL(d){this.a=d},
eOI:function eOI(d){this.a=d},
eOl:function eOl(d){this.a=d},
eOp:function eOp(d,e){this.a=d
this.b=e},
eOG:function eOG(d,e){this.a=d
this.b=e},
eOF:function eOF(d,e){this.a=d
this.b=e},
eOA:function eOA(d){this.a=d},
eOB:function eOB(d){this.a=d},
eOC:function eOC(d,e){this.a=d
this.b=e},
eOz:function eOz(d,e){this.a=d
this.b=e},
eOy:function eOy(d,e,f){this.a=d
this.b=e
this.c=f},
byN:function byN(){},
AR(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aN(v,w,"_")},
ago(d,e,f){return C.i4j(d,e,f)},
i4j(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ago=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.au("String",e,f),$async$ago)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.ab(o)
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
return A.i($async$ago,v)},
agn(d,e){return C.i4i(d,e)},
i4i(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$agn=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$agn)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.ab(q)
$.am.$1("[worksheets] remove failed for "+e+": "+A.w(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$agn,v)},
i33(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.T6(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bBu(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bBu=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b3p(q),$async$bBu)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aRa(q,!1),$async$bBu)
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
return A.i($async$bBu,v)},
hD8(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aK(d.h(0,"price")),o=p==null?null:p
if(o==null)o=0
w=A.aK(d.h(0,"quantity"))
if(w==null)w=null
v=A.aK(d.h(0,"unitPrice"))
if(v==null)v=null
if(w!=null&&v!=null){p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
u=J.k(u==null?"":u)
t=w<=0?1:w
s=d.h(0,r)
if(B.a.i(J.k(s==null?q:s)).length===0)s=q
else{s=d.h(0,r)
s=J.k(s==null?q:s)}return new C.rb(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rb(p,J.k(u==null?"":u),1,o,q)},
h3H(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.dc(s,x.f)
w=A.cG(w,new C.cCE(),w.$ti.k("L.E"),x.Q)
v=A.a7(w).k("Y<L.E>")
r=A.C(new A.Y(w,new C.cCF(),v),v.k("L.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bj(J.k(t==null?"":t))
return new C.lt(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
i8j(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.w2
case"female":case"f":return D.og
default:return D.yv}},
hsV(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hdv(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.i8j(v==null?j:J.k(v))
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
m=A.aK(d.h(0,"birthOrder"))
m=m==null?j:B.k.N(m)
if(m==null)m=1
l=J.A(d.h(0,"hidden"),!0)
k=A.aK(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.N(k)
return new C.hU(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
i8l(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.NP
case"viewer":return D.kH
default:return D.u9}},
i8m(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
GT(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aPV(d,e){return B.a.i(e.toLowerCase())===C.GT(d,e)&&d.y!==D.kH},
uf(d,e){var w,v=d.y
if(v===D.kH)return!1
w=B.a.i(e.toLowerCase())
if(w===C.GT(d,e))return!0
if(v===D.NP)return!0
v=d.e
return new A.N(v,A.h9m(),A.T(v).k("N<1,n>")).t(0,w)},
i7M(d){return J.dH(d,new C.fz8()).gL(0)},
fY5(d){var w=0,v=A.j(x.y),u,t
var $async$fY5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.B1(d),$async$fY5)
case 3:u=t.r6(f,new C.fY6(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fY5,v)},
bCv(d,e){var w=0,v=A.j(x.H),u,t
var $async$bCv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.B1(d),$async$bCv)
case 3:t=g
if(J.r6(t,new C.fx2(e))){w=1
break}if(C.i7M(t)>=2)throw A.W(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bCv,v)},
ali(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.dc(h,x.f)
w=A.cG(w,new C.bQX(),w.$ti.k("L.E"),x.P)
v=A.a7(w).k("Y<L.E>")
g=A.C(new A.Y(w,new C.bQY(),v),v.k("L.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b6(u,new C.bQZ(),x.N)
t=A.C(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.A(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bj(J.k(q==null?"":q))
if(q==null)q=new A.V(Date.now(),0,!1)
p=A.aK(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.k.N(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.i8l(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aW(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cq)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gT(f)
if(l.b(i))m.push(A.a2(i,k,j))}return new C.kN(w,v,s,!r,t,g,q,p,o,n,m)},
ht4(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aN(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aq(v,0,8)},
De(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$De=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.S0(d),$async$De)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$De)
case 4:t=f
w=5
return A.b(t.a6E(0),$async$De)
case 5:w=6
return A.b(C.fnJ(t,l),$async$De)
case 6:s=f
if(J.cL(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a5(q)
o=A.aT(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hoy(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oQ(l,n),$async$De)
case 11:u=n
w=1
break
case 10:case 8:m=A.aT(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hoy(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oQ(l,n),$async$De)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$De,v)},
fnJ(d,e){return C.i0v(d,e)},
i0v(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fnJ=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a5(a3)
a5=A.aT(a4.h(a3,"ngmy_worksheets_index_v3_"+C.AR(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.X.aN(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aW(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gT(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aT(a4.h(a3,"ngmy_worksheet_item_v3_"+C.AR(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.X.aN(0,m,null)
if(!a0.b(l)){w=7
break}k=C.h3H(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aT(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.AR(a9)+"_"+n))
i=C.i33(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b3p(h),$async$fnJ)
case 17:g=b1
if(g!=null){i=i.T6(g)
p=!0}case 16:J.cd(q,i)
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
case 8:J.Sc(q,new C.fnK())
if(p&&J.ad(q)!==0)C.oQ(a9,q)
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
return A.i($async$fnJ,v)},
bCW(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bCW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.S0(d),$async$bCW)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.De(r),$async$bCW)
case 4:t=p.aW(g)
case 5:if(!t.C()){w=6
break}s=t.gT(t)
if(s.a===q){u=s
w=1
break}w=5
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCW,v)},
hoy(d){var w,v,u,t
try{w=B.X.aN(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.dc(w,x.f)
v=A.cG(v,new C.fjA(),v.$ti.k("L.E"),x.fA)
u=A.a7(v).k("Y<L.E>")
v=A.C(new A.Y(v,new C.fjB(),u),u.k("L.E"))
B.d.aW(v,new C.fjC())
return v}catch(t){v=A.a([],x.D)
return v}},
oQ(d,e){return C.ihY(d,e)},
ihY(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oQ=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.S0(b2),$async$oQ)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$oQ)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.AR(a8)
p=A.aT(J.r(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.X.aN(0,p,null)),new C.fPS(),a2).fH(0)
a2=J.b6(b3,new C.fPT(),a2).c0(0,new C.fPU())
n=A.dg(a2,a2.$ti.k("L.E"))
a2=o,a2=A.eo(a2,a2.r,A.a7(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f0(n,m)?17:18
break
case 17:a5=C.AR(a8)
l=A.aT(J.r(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a8T(l),$async$oQ)
case 19:t=21
a5=C.AR(a8)
k=A.aT(J.r(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.X.aN(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.r(j,"thumbnailPath")
w=28
return A.b(C.a8T(a5==null?null:J.k(a5)),$async$oQ)
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
return A.b(C.agn(r,"ngmy_worksheet_item_v3_"+C.AR(a8)+"_"+m),$async$oQ)
case 29:w=30
return A.b(C.agn(r,"ngmy_worksheet_thumb_v3_"+C.AR(a8)+"_"+m),$async$oQ)
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
break}i=a3.gT(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bBu(h),$async$oQ)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ago(r,"ngmy_worksheet_thumb_v3_"+C.AR(a8)+"_"+a4,f),$async$oQ)
case 40:g=i.T6(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.agn(r,"ngmy_worksheet_thumb_v3_"+C.AR(a8)+"_"+a4),$async$oQ)
case 41:g=i.T6(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.agn(r,"ngmy_worksheet_thumb_v3_"+C.AR(a8)+"_"+a4),$async$oQ)
case 42:case 34:a4=i.a
w=43
return A.b(C.ago(r,"ngmy_worksheet_item_v3_"+C.AR(a8)+"_"+a4,B.X.ap(g.ag(),null)),$async$oQ)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.cd(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ago(r,"ngmy_worksheets_index_v3_"+C.AR(a8),B.X.ap(q,null)),$async$oQ)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eG(b3,new C.fPV(q))
a4=a3.$ti.k("cQ<1,a8<n,@>>")
a7=A.C(new A.cQ(a3,new C.fPW(),a4),a4.k("L.E"))
a0=a7
w=45
return A.b(C.ago(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.X.ap(a0,null)),$async$oQ)
case 45:w=46
return A.b(J.hCe(r),$async$oQ)
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
a1=A.ab(b1)
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
return A.i($async$oQ,v)},
LF(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$LF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.De(d),$async$LF)
case 3:t=g
s=J.cE(t)
r=s.bg(t,new C.fY4(e))
if(r===-1)s.c3(t,0,e)
else s.n(t,r,e)
u=C.oQ(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$LF,v)},
bCJ(d,e){var w=0,v=A.j(x.H),u
var $async$bCJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.De(d),$async$bCJ)
case 2:u=g
J.nA(u,new C.fzC(e))
w=3
return A.b(C.oQ(d,u),$async$bCJ)
case 3:return A.h(null,v)}})
return A.i($async$bCJ,v)},
GV(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$GV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$GV)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aT(J.r(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.X.aN(0,i,null)
if(x.j.b(t)){j=J.dc(t,x.f)
j=A.cG(j,new C.fCr(),j.$ti.k("L.E"),x.k)
s=A.a7(j).k("Y<L.E>")
r=A.C(new A.Y(j,new C.fCs(),s),s.k("L.E"))
B.d.aW(r,new C.fCt())
k=r}}catch(h){}w=4
return A.b(C.fkk(d),$async$GV)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.i0S(k,p,d)
j=A.T(o)
s=j.k("N<1,a8<n,@>>")
s=A.C(new A.N(o,new C.fCu(),s),s.k("ak.E"))
n=B.X.ap(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Rd(d,o),$async$GV)
case 7:case 6:j=j.k("Y<1>")
m=A.C(new A.Y(o,new C.fCv(d),j),j.k("L.E"))
if(m.length!==0)C.aPF(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$GV,v)},
fPE(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fPE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rd(d,e),$async$fPE)
case 3:t=J.dH(e,new C.fPF(d))
s=A.C(t,t.$ti.k("L.E"))
if(s.length===0){u=!0
w=1
break}u=C.aPF(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fPE,v)},
a39(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a39=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a39)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aT(J.r(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.X.aN(0,l,null)
if(x.j.b(u)){m=J.dc(u,x.f)
m=A.cG(m,new C.fY_(),m.$ti.k("L.E"),x.k)
t=A.a7(m).k("Y<L.E>")
s=A.C(new A.Y(m,new C.fY0(),t),t.k("L.E"))
o=s}}catch(k){}q=J.qt(o,new C.fY1(e))
if(B.a.i(e.x).length===0&&C.uf(e,d)){m=B.a.i(d.toLowerCase())
p=e.aEI(e.y===D.kH?D.kH:D.u9,m)}else p=e
if(q===-1)J.pK(o,0,p)
else J.aI(o,q,p)
w=3
return A.b(C.Rd(d,o),$async$a39)
case 3:w=C.uf(p,d)?4:5
break
case 4:w=6
return A.b(C.aPE(C.GT(p,d),p),$async$a39)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a39,v)},
aPR(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aPR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.GV(d),$async$aPR)
case 2:u=g
t=J.cE(u)
s=A.pT(t.eG(u,new C.fzj(e)))
t.bs(u,new C.fzk(e))
w=3
return A.b(C.Rd(d,u),$async$aPR)
case 3:w=s!=null&&C.aPV(s,d)?4:5
break
case 4:w=6
return A.b(C.fjE(e),$async$aPR)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aPR,v)},
aid(d){var w=d.f,v=A.T(w).k("Y<1>")
w=A.C(new A.Y(w,new C.fYa(),v),v.k("L.E"))
return w},
h6V(d,e){var w,v=d.f,u=A.pT(new A.Y(v,new C.fyO(e),A.T(v).k("Y<1>")))
v=C.aid(d)
w=A.T(v).k("Y<1>")
v=A.C(new A.Y(v,new C.fyP(e,u),w),w.k("L.E"))
B.d.aW(v,new C.fyQ())
return v},
i8p(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hxh(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bg(C.h6V(d,u),new C.fXx(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
i9X(d,e){var w
if(e==null||e.length===0)return 1
w=C.h6V(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fDf(),A.T(w).k("N<1,H>")).fb(0,B.AR)+1},
ihR(d){var w,v=C.aid(d)
if(v.length===0)return null
w=new A.Y(v,new C.fPy(),A.T(v).k("Y<1>"))
if(!w.gan(0))return w.gI(0)
return B.d.gI(v)},
i8k(d){return A.G(["id",d.a,"name",d.b,"gender",C.hsV(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
i9S(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.U(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aX(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.M)(a0),++u){q=a0[u]
p=q.a
r.M(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.yv?n:q.c
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
d=q.aED(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.M)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cM4(a1,w,a3.d,a2.y,s,a0,v)},
B1(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$B1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$B1)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aT(J.r(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.X.aN(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.dc(t,x.f)
p=A.cG(p,new C.fCo(),p.$ti.k("L.E"),x.k)
s=A.a7(p).k("Y<L.E>")
p=A.C(new A.Y(p,new C.fCp(),s),s.k("L.E"))
B.d.aW(p,new C.fCq())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$B1,v)},
ahZ(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ahZ=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.u9:D.kH
a7=C.GT(b2,b3)
w=2
return A.b(C.B1(b1),$async$ahZ)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.bg(a8,new C.fPt(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bCv(b1,b2),$async$ahZ)
case 5:case 4:if(b0===-1){u=b2.aEI(a6,a7)
a9.c3(a8,0,u)}else{t=a9.h(a8,b0)
s=A.U(x.N,x.P)
for(r=t.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.M)(r),++p){o=r[p]
s.n(0,o.a,o)}for(r=b2.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.M)(r),++p){n=r[p]
m=n.a
l=s.h(0,m)
if(l==null)s.n(0,m,n)
else{k=n.f
j=k==null?null:B.a.i(k)
k=n.b
k=k.length!==0?k:l.b
i=n.c
i=i!==D.yv?i:l.c
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
s.n(0,m,l.aED(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.C(new A.bc(s,k),k.k("L.E"))
k=a5?D.u9:D.kH
u=t.cM6(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Rd(b1,a8),$async$ahZ)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aPE(B.a.i(b3.toLowerCase()),u),$async$ahZ)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ahZ,v)},
hoX(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).a8().ae(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("N<1,a8<n,@>>"),k=A.C(new A.N(m,C.hwm(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.G(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.G(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a8().ae(),"updatedAt",o],r,x.K),"createdAt",s.a8().ae(),"updatedAt",o],r,x.z)},
hoY(d,e){var w=new A.V(Date.now(),0,!1).a8().ae(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("N<1,a8<n,@>>")
u=A.C(new A.N(u,C.hwm(),t),t.k("ak.E"))
return A.G(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a8().ae(),"updatedAt",w],x.N,x.z)},
hZn(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a5(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ali(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.h9m(),A.T(j).k("N<1,n>")).c0(0,new C.fk7())
t=A.C(j,j.$ti.k("L.E"))
if(u===v)s=D.u9
else s=B.d.t(t,u)?D.NP:D.kH
return w.aEI(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ali(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.dc(q,h)
h=A.cG(h,new C.fk8(),h.$ti.k("L.E"),x.P)
p=A.a7(h).k("Y<L.E>")
o=A.C(new A.Y(h,new C.fk9(),p),p.k("L.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.fka(),x.N).c0(0,new C.fkb())
t=A.C(h,h.$ti.k("L.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.u9
else s=B.d.t(t,u)?D.NP:D.kH
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.A(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bj(J.k(l==null?"":l))
if(l==null)l=new A.V(Date.now(),0,!1)
j=A.aK(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.N(j)
if(j==null)j=0
return new C.kN(h,r,p,!m,t,o,l,j,v,s,B.ca)},
fkk(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fkk=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fko()
h=x.N
g=x.z
w=7
return A.b(A.iQ(A.a([A.lz("family_trees","*",null,A.G(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bK),r.$2(A.lz("family_trees","*",A.G(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bK),"collaborator"),r.$2(A.lz("family_trees","*",null,A.G(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bK),"public")],x.cl),x.fO),$async$fkk)
case 7:q=a4
p=J.r(q,0)
o=J.r(q,1)
n=J.r(q,2)
g=x.a
m=A.U(h,g)
h=A.C(p,g)
l=h
J.h6(l,o)
J.h6(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.M)(l),++f){k=l[f]
g=J.r(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aI(m,j,k)}l=m
h=A.a7(l).k("bc<2>")
h=A.cG(new A.bc(l,h),new C.fkl(a0),h.k("L.E"),x.k)
l=A.a7(h).k("Y<L.E>")
l=A.C(new A.Y(h,new C.fkm(),l),l.k("L.E"))
B.d.aW(l,new C.fkn())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.ab(a1)
d=J.k(i)
l=B.a.t(d,"Could not find the table 'public.family_trees'")||B.a.t(d,'relation "public.family_trees" does not exist')
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
return A.i($async$fkk,v)},
i0S(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a5(e)
if(j.gan(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dF(e,new C.foq(),v).c0(0,new C.fos())
t=A.dg(u,u.$ti.k("L.E"))
s=A.U(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.M)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.GT(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kH){m=q.e
m=!new A.N(m,A.h9m(),A.T(m).k("N<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gaf(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.i9S(l,v)
o=C.GT(k,w)
p=v.d
s.n(0,u,o===w?k.bd6(p,D.u9):k.bd6(p,v.y))}j=s.$ti.k("bc<2>")
j=A.C(new A.bc(s,j),j.k("L.E"))
B.d.aW(j,new C.fot())
return j},
Rd(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Rd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$Rd)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fra(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.au("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.X.ap(s,null)),$async$Rd)
case 3:return A.h(null,v)}})
return A.i($async$Rd,v)},
aPE(d,e){return C.i66(d,e)},
i66(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aPE=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.m3("family_trees",A.a([C.hoX(e,d)],p),null,B.cG),$async$aPE)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.m3("family_trees",A.a([C.hoY(e,d)],p),null,B.cG),$async$aPE)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.ab(n)
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
return A.i($async$aPE,v)},
aPF(d,e){return C.i67(d,e)},
i67(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aPF=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("N<1,a8<n,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fwm(d),n),m)
r=l
w=7
return A.b(A.m3("family_trees",r,null,B.cG),$async$aPF)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fwn(d),n),m)
p=k
w=8
return A.b(A.m3("family_trees",p,null,B.cG),$async$aPF)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.ab(i)
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
return A.i($async$aPF,v)},
fjE(d){return C.hYG(d)},
hYG(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fjE=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.RB("family_trees",A.G(["id",d],x.N,x.z),null,B.cG),$async$fjE)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.ab(p)
$.am.$1("[family_trees] delete error: "+A.w(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fjE,v)},
rb:function rb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lt:function lt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cCH:function cCH(){},
cCG:function cCG(){},
cCE:function cCE(){},
cCF:function cCF(){},
I1:function I1(d,e){this.a=d
this.b=e},
hU:function hU(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
alh:function alh(d,e){this.a=d
this.b=e},
fz8:function fz8(){},
fY6:function fY6(d){this.a=d},
fx2:function fx2(d){this.a=d},
kN:function kN(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bR0:function bR0(){},
bR_:function bR_(){},
bQX:function bQX(){},
bQY:function bQY(){},
bQZ:function bQZ(){},
fnK:function fnK(){},
fjA:function fjA(){},
fjB:function fjB(){},
fjC:function fjC(){},
fPS:function fPS(){},
fPT:function fPT(){},
fPU:function fPU(){},
fPV:function fPV(d){this.a=d},
fPW:function fPW(){},
fY4:function fY4(d){this.a=d},
fzC:function fzC(d){this.a=d},
fCr:function fCr(){},
fCs:function fCs(){},
fCt:function fCt(){},
fCu:function fCu(){},
fCv:function fCv(d){this.a=d},
fPF:function fPF(d){this.a=d},
fY_:function fY_(){},
fY0:function fY0(){},
fY1:function fY1(d){this.a=d},
fzj:function fzj(d){this.a=d},
fzk:function fzk(d){this.a=d},
fYa:function fYa(){},
fyO:function fyO(d){this.a=d},
fyP:function fyP(d,e){this.a=d
this.b=e},
fyQ:function fyQ(){},
fXx:function fXx(d){this.a=d},
fDf:function fDf(){},
fPy:function fPy(){},
fCo:function fCo(){},
fCp:function fCp(){},
fCq:function fCq(){},
fPt:function fPt(d){this.a=d},
fk7:function fk7(){},
fk8:function fk8(){},
fk9:function fk9(){},
fka:function fka(){},
fkb:function fkb(){},
fko:function fko(){},
fkp:function fkp(d){this.a=d},
fkl:function fkl(d){this.a=d},
fkm:function fkm(){},
fkn:function fkn(){},
foq:function foq(){},
fos:function fos(){},
fot:function fot(){},
fra:function fra(){},
fwm:function fwm(d){this.a=d},
fwn:function fwn(d){this.a=d},
cCI:function cCI(d,e){this.a=d
this.b=e},
cCJ:function cCJ(d,e){this.a=d
this.b=e},
aHU:function aHU(d,e,f){this.a=d
this.b=e
this.c=f},
b9O:function b9O(){this.b=this.a=0},
b9N:function b9N(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bx7:function bx7(){},
x1(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcb()+"/"+w.gcu()+"/"+w.gcf()
if(!e)return v
return v+" "+B.a.aS(B.o.u(w.gnl()),2,"0")+":"+B.a.aS(B.o.u(w.gGt()),2,"0")},
hPq(){var w,v=$.oT(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ar(32)]
return"WS"+B.d.hq(u)},
asX(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$asX=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$asX)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bK),$async$asX)
case 8:r=e
if(r==null){u=A.U(x.N,x.z)
w=1
break}q=J.r(r,"stashes")
if(x.f.b(q)){o=A.a2(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ab(m)
$.am.$1("[worksheet qr stash] load: "+A.w(p))
w=7
break
case 4:w=2
break
case 7:u=A.U(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$asX,v)},
asY(d){return C.hPr(d)},
hPr(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$asY=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$asY)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_worksheet_project_qr_stashes_v1",A.G(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).a8().ae()],x.N,x.z),!1,!1,B.cG,null),$async$asY)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ab(p)
$.am.$1("[worksheet qr stash] save: "+A.w(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$asY,v)},
at_(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$at_=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$at_)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hPq()
w=4
return A.b(C.asX(),$async$at_)
case 4:r=h
q=B.a.i(e)
p=B.dN.aL(t)
J.aI(r,s,A.G(["ownerEmail",q,"projectId",f,"payload",B.cI.gcp().aL(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).a8().ae()],x.N,x.K))
w=5
return A.b(C.asY(r),$async$at_)
case 5:u=new A.a0E("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$at_,v)},
asZ(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$asZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c8(),$async$asZ)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.asX(),$async$asZ)
case 4:q=f
p=J.a5(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a5(o)
m=A.aK(n.h(o,"usesRemaining"))
l=m==null?null:B.k.N(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.cd.cA(0,B.cD.aL(t))}catch(h){r=A.ab(h)
$.am.$1("[worksheet qr stash] decode: "+A.w(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dR(A.a2(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a8().ae())
p.n(q,i,m)}w=5
return A.b(C.asY(q),$async$asZ)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asZ,v)},
hjo(){var w=new A.V(Date.now(),0,!1).a8()
return"wst_"+(1000*w.a+w.b)+"_"+B.cR.ar(999999)},
hPs(d){var w,v,u,t,s,r,q
try{w=A.agO(d)
if(w==null)return d
v=w
if(J.LK(v)>960||J.LJ(v)>960){s=v
r=J.LK(v)>=J.LJ(v)?960:null
v=A.agN(s,J.LJ(v)>J.LK(v)?960:null,B.P6,r)}s=v
u=A.amG(82).Tu(s,B.z9)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cl(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
cli(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cli=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hPs(e)
$.cle.n(0,s,t)
u=C.bEw(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cli,v)},
b3p(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b3p=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d3(l,"data:image")){u=null
w=1
break}t=4
r=J.f0(l,",")?B.d.gak(J.lC(l,",")):l
q=B.cD.aL(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hjo()
w=7
return A.b(C.cli(p,q),$async$b3p)
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
n=A.ab(k)
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
return A.i($async$b3p,v)},
clf(d){var w=0,v=A.j(x.T),u,t,s
var $async$clf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(M.clh(s),$async$clf)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cI.gcp().aL(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$clf,v)},
a8T(d){var w=0,v=A.j(x.H),u,t
var $async$a8T=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=M.hwe(d)
if(t==null){w=1
break}$.cle.W(0,t)
w=3
return A.b(C.bEv(t),$async$a8T)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8T,v)},
bEw(d,e){return C.ig2(d,e)},
ig2(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bEw=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aOz
w=7
return A.b(n==null?$.aOz=M.h5S():n,$async$bEw)
case 7:r=g
q=new Uint8Array(A.cl(e))
p=J.mP(r,"thumbs","readwrite")
B.j_.mn(J.mO(p,"thumbs"),q,l)
w=8
return A.b(J.pJ(p),$async$bEw)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.ab(k)
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
return A.i($async$bEw,v)},
bEv(d){return C.ig0(d)},
ig0(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bEv=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aOz
w=7
return A.b(o==null?$.aOz=M.h5S():o,$async$bEv)
case 7:r=f
q=J.mP(r,"thumbs","readwrite")
B.j_.G0(J.mO(q,"thumbs"),m)
w=8
return A.b(J.pJ(q),$async$bEv)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.ab(l)
$.am.$1("[worksheet-thumb idb delete] "+A.w(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bEv,v)}},D,Ar,As,Z,At,Au,M
J=c[1]
A=c[0]
B=c[2]
P=c[240]
A_=c[155]
S=c[57]
A9=c[223]
I=c[204]
H=c[33]
E=c[214]
T=c[115]
Q=c[150]
O=c[103]
Aa=c[112]
Ab=c[191]
A0=c[113]
Ac=c[222]
Ad=c[40]
R=c[221]
L=c[88]
A1=c[84]
A2=c[161]
Ae=c[123]
A3=c[164]
A4=c[235]
A5=c[192]
Af=c[183]
Ag=c[195]
A6=c[190]
Ah=c[238]
Ai=c[70]
A7=c[239]
Aj=c[76]
A8=c[208]
Ak=c[242]
Al=c[32]
U=c[114]
N=c[185]
Am=c[196]
An=c[119]
Ao=c[146]
V=c[241]
Ap=c[127]
W=c[231]
X=c[39]
G=c[94]
Aq=c[31]
K=c[102]
F=c[129]
Y=c[74]
C=a.updateHolder(c[7],C)
D=c[234]
Ar=c[75]
As=c[202]
Z=c[237]
At=c[236]
Au=c[61]
M=c[58]
C.aoQ.prototype={}
C.aZI.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bhr(),f=h.x!=null&&h.zd(i).length===0
if(h.x!=null)w=f?B.b_:B.bx
else w=h.gU7()?B.bx:B.dY
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.J(D.blj,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.f1i,B.f,i,i,new A.o(B.b_.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h4,i,i,i),B.W,D.fwt,B.au,A.d(C.x1(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fs8,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,D.b3O,i,i,i,i,B.a_p,i,i,i)
q=A.m(16)
p=A.J(B.aL,B.r,1)
o=A.J(B.b_.j(0.28),B.r,1)
n=A.h7V(h.d)
o=A.p(B.A,C.aZH(A.fFA(h.e,n),30),B.f,i,i,new A.o(B.m0,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fnf,B.K,i,i)
m=A.m(14)
l=A.J(B.aL,B.r,1)
q=A.p(i,A.x(A.a([o,B.O,n,B.bD,D.fwL,B.ad,A.p(i,A.x(A.a([D.fMT,B.bD,A.d(A.B3(h.c),i,i,i,i,i,i,D.fhZ,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fe,i,i,1/0)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,N.ak5,i,i,i)
p=A.m(16)
m=A.J(B.aL,B.r,1)
l=j.aRu("Original due",C.x1(h.r,!1))
n=j.aRu("Current due",C.x1(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.W,A.p(i,A.x(A.a([l,B.O,n,B.W,A.p(i,A.d(h.gaLC(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.BJ,i,i,1/0),B.W,j.chh(),B.O,j.c4u(g,f)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bf,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.J(B.aL,B.r,1)
B.d.v(p,A.a([B.W,A.p(i,A.x(A.a([D.fxL,B.au,A.d(q,i,i,i,i,i,i,D.fmt,i,i,i)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bf,i,i,1/0)],s))}if(h.gaGk()){q=A.m(14)
o=A.J(B.cs,B.r,1.6)
B.d.v(p,A.a([B.W,A.p(i,A.x(A.a([D.fOe,B.O,A.bx(A.m(12),A.ec(new A.a6(1/0,88,A.b4(i,i,i,new A.Wq(h.ax,B.M,D.f5w,!0,3.5,i),B.ax),i),B.c,!0),B.ap)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.G4,i,i,i)],s))}p.push(B.aA)
p.push(D.fG7)
return A.p(i,A.x(A.a([r,new A.D(B.a_d,A.x(p,B.ak,i,B.e,B.i,0,B.p),i)],s),B.ak,i,B.e,B.P,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aRu(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.aa2,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fj2,w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
chh(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a9R(B.dY,u,"Not paid yet")
w=t.zd(null).length
v=w===0?B.b_:B.bx
return this.a9R(v,u,C.x1(t.x,!0))},
c4u(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a9R(B.b_,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a9R(B.b_,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.aa2,u,u,u)
v=A.T(d).k("N<1,h0>")
v=A.C(new A.N(d,new C.c6e(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bX(B.bC,v,B.bq,u,6,6)],x.p),B.E,u,B.e,B.i,0,B.p)},
a9R(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.aa2,w,w,w),1),new A.ds(1,B.cn,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dW,w,w),w)],x.p),B.E,w,B.e,B.i,0,w,w)}}
C.bbZ.prototype={
a3(d,e){new A.Wq(this.b,B.M,e,!0,3.5,null).a3(d,e)},
aw(d){return d.b!==this.b}}
C.ap1.prototype={
R(){return new C.aDK(A.a([],x.bp))},
ge1(){return this.c}}
C.aDK.prototype={
Z(){this.a2()
this.IY()},
IY(){var w=0,v=A.j(x.H),u,t=this,s
var $async$IY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2q(t.a.c),$async$IY)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dMc(t,s))
case 1:return A.h(u,v)}})
return A.i($async$IY,v)},
aTr(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aP,s=A.l(v,v,u?B.bs:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bs:B.bn).j(0.22)
w=A.m(10)
return A.br(v,new A.b5(4,r,new A.ay(u,1,B.r,-1)),v,B.bf,v,v,v,v,!0,new A.b5(4,w,new A.ay((this.a.d.a?B.bs:B.bn).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b5(4,A.m(10),D.b1r),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aTq(d){return this.aTr(d,null)},
PL(d){return this.ckU(d)},
ckU(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PL=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Hp:B.eL
w=7
return A.b(new A.hV().Ch(72,900,900,n),$async$PL)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fk(),$async$PL)
case 8:p=f
n=B.cI.gcp().aL(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.ab(l)
n=r.c
if(n!=null)n.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$PL,v)},
b1h(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aP,o=A.m(10),n=A.J((q?B.bs:B.bn).j(0.18),B.r,1)
if(d)q=B.cO
else q=s.a.d.a?B.bs:B.bn
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.av,r,r,r,r,r,r,r,r,12.5,r,r,B.Q,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cO
else u=s.a.d.a?B.bs:B.bn
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.i,0,B.p),1)
v=A.fu(r,r,r,r,r,r,r,r,r,r,r,B.cO,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cb)
q=A.a([q,B.ac,u,A.bM(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aG(r,r,r,r,A.X(B.cz,s.a.d.a?B.bs:B.bn,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cb))
return A.p(r,A.B(q,B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jg,D.by1,r,r,r)},
Dh(d){return this.bBe(d)},
bBd(){return this.Dh(null)},
bBe(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dh=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.au()
r=new A.as(new A.bb(a4,B.b3,B.aO),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.j3(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.ac(p,2)}o=new A.as(new A.bb(a4,B.b3,B.aO),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.as(new A.bb(a4,B.b3,B.aO),s)
if(a3){a4=new A.V(Date.now(),0,!1).bS(6048e8)
m=A.c3(a4.gcf(),a4.gcb(),a4.gcu(),0,0,0,0,0)}else{a4=a5.f
m=A.c3(a4.gcf(),a4.gcb(),a4.gcu(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bq(a4,!0,x.cT)
i=a3?null:A.h7V(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wE?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i0(B.w.j(0.55),!0,"Dismiss",a4,new C.dLW(),new C.dLX(a2,t,a5,r,new C.dLY(a2,t),o,n,j),B.eO,!0,x.y),$async$Dh)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cY(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.S$=s
r.P$=0
o.S$=s
o.P$=0
n.S$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.K(x.q).f.U(D.fc_)
w=1
break}a0=a2.d
if(a0==null){t.c.K(x.q).f.U(D.faF)
w=1
break}a1=A.fFA(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wE?"male":"female"
w=7
return A.b(A.aic(a3,A.hg5(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$Dh)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wE?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a7(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c3(a3.gcf(),a3.gcb(),a3.gcu(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c3(a4.gcf(),a4.gcb(),a4.gcu(),0,0,0,0,0)))a5.cOj(a2.a)
w=8
return A.b(A.aic(t.a.c,a5),$async$Dh)
case 8:case 5:w=9
return A.b(t.IY(),$async$Dh)
case 9:case 1:return A.h(u,v)}})
return A.i($async$Dh,v)},
aU4(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cO.j(0.14)
else w=this.a.d.a?B.M:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cO
else s=(this.a.d.a?B.bs:B.bn).j(0.2)
s=A.J(s,B.r,g?1.5:1)
r=C.aZH(d,18)
if(g)q=B.cO
else q=this.a.d.a?B.aP:B.av
return A.aH(!1,B.a2,!0,v,A.aO(!1,u,!0,A.p(p,A.B(A.a([r,B.bm,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b8,B.i,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.aj)},
Ss(d){return this.cCD(d)},
cCD(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ss=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i0(B.w.j(0.55),!0,"Dismiss",s,new C.dMf(),new C.dMg(t,d),B.hr,!0,x.y),$async$Ss)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aic(t.a.c,d),$async$Ss)
case 7:w=8
return A.b(t.IY(),$async$Ss)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Ss,v)},
PK(d,e){return this.bM3(0,e)},
bM3(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ld(s,"Cancel","Delete",e.b+" \xb7 "+A.B3(e.c)+" will be removed from this device.","Delete this debt?"),$async$PK)
case 3:if(!g){w=1
break}w=4
return A.b(C.fzq(t.a.c,e.a),$async$PK)
case 4:w=5
return A.b(t.IY(),$async$PK)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PK,v)},
afv(d){return this.ceI(d)},
ceI(d){var w=0,v=A.j(x.H),u=this,t
var $async$afv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bV(B.L,null,new C.dM9(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$afv)
case 2:return A.h(null,v)}})
return A.i($async$afv,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.elN
w=J.dH(m.d,new C.dMh())
v=A.C(w,w.$ti.k("L.E"))
w=J.dH(m.d,new C.dMi())
u=A.C(w,w.$ti.k("L.E"))
t=B.d.cH(v,0,new C.dMj())
w=A.m(18)
s=m.a.d.a
r=s?D.cx2:D.aAA
q=A.J(s?B.cO.j(0.35):B.cO.j(0.18),B.r,1)
s=A.p(l,D.bYZ,B.f,l,l,new A.o(B.cO.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.at,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.av,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aH(!1,B.a2,!0,A.m(12),A.aO(!1,A.m(12),!0,D.el6,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dMk(m),l,l,l,l,l,l,l),B.f,B.cO,0,l,l,l,l,l,B.aj)],p),B.m,l,B.e,B.i,0,l,l)
o=A.E(m.cyO("Open",""+v.length),1)
n=v.length===0?"$0.00":A.B3(t)
r=A.a([A.p(l,A.x(A.a([s,B.ad,A.B(A.a([o,B.ac,A.E(m.b7n(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a9(B.ay,B.aE,B.x,r,l,l),B.n),l,l,l,l,B.ak2,l,l,l),B.aA],p)
if(J.ct(m.d)){w=m.a.d.a
s=w?B.e3:B.c
q=A.m(18)
o=A.J((w?B.bs:B.bn).j(0.12),B.r,1)
n=A.p(l,D.bTK,B.f,l,l,new A.o(B.cO.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.av,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.p(l,A.x(A.a([n,B.ad,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bn,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.m,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bAz,l,l,1/0))}else{w=m.gcka()
s=A.C(new A.N(v,w,A.T(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bCf,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bn,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.N(u,w,A.T(u).k("N<1,v>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.ak,l,B.e,B.i,0,B.p)},
b7n(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.J((v.a.d.a?B.bs:B.bn).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bs:B.bn,u,u,u,u,u,u,u,u,11,u,u,B.Q,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cO
else w=v.a.d.a?B.aP:B.av
return A.p(u,A.x(A.a([q,B.bD,A.d(f,u,1,B.a1,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.i,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eB,u,u,u)},
cyO(d,e){return this.b7n(!1,d,e)},
ckb(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zd(j).length,h=d.bgF()
if(d.x!=null){w=d.zd(j).length
v=w===0?B.cO:B.bx}else if(d.gU7())v=B.bx
else{if(h)w=B.cO
else w=k.a.d.a?B.bs:B.bn
v=w}if(d.x!=null){w=d.zd(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.x1(u,!1)}else{u.toString
t="Paid "+C.x1(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.x1(w,!1)+" \xb7 "+i+" missed":"Due "+C.x1(w,!1)}w=k.a.d.a?B.e3:B.c
u=A.m(18)
if(d.gU7()&&d.x==null)s=B.bx.j(0.35)
else s=(k.a.d.a?B.bs:B.bn).j(0.12)
s=A.J(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cH,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bo:B.m0
o=A.J(d.gU7()&&d.x==null?B.bx.j(0.45):B.cO.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.h7V(d.d)
o=A.p(B.A,A.d9(C.aZH(A.fFA(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.av
m=x.p
n=A.a([new A.ds(1,B.cn,A.d(p,j,1,B.a1,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaGk())B.d.v(n,A.a([B.en,A.X(B.Og,B.cO.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.B(n,B.m,j,B.e,B.i,0,j,j),B.cL,A.d(t,j,1,B.a1,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.Q,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.i,0,B.p),1)
n=A.B3(d.c)
l=k.a.d.a?B.aP:B.av
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aH(!1,B.a2,!0,j,A.aO(!1,q,!0,new A.D(A4.ajP,A.B(A.a([o,B.bd,p,B.ac,A.x(A.a([n,B.bD,A.X(B.eE,(k.a.d.a?B.bs:B.bn).j(0.5),j,j,j,18)],m),B.dH,j,B.e,B.i,0,B.p)],m),B.m,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dMb(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.aj),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d2,j,j,j,j)}}
C.uw.prototype={}
C.al5.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bi
u=v?B.E:B.m
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.J(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cx,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.J(r.j(0.6),B.r,1)
n.push(A.aB(a0,A.p(a0,A.X(B.cz,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a5:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iA,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.awM,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.Gl,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eN(m,A.B(l,B.m,a0,B.e,B.P,0,a0,a0),B.f,B.e2)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bxe,A.d(v,a0,1,B.a1,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cE:B.bp,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fC,A.x(a2,u,a0,B.e,B.P,0,B.p),a0),1))
n.push(D.f6j)
a2=A.a([A.B(n,B.m,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.vT,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a9(B.a5,B.a8,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lD,A.x(a2,B.m,a0,B.e,B.P,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.J(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hh,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a9(B.ay,B.aE,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bys,a0,a0,a0,a0)}}
C.aVs.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bi?B.bi:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a1,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bp:B.cE,q,B.Q,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.i,0,q,q),B.cL,n],m)
if(p.z)o.push(new A.D(B.u_,n,q))
return new A.D(B.d2,A.x(o,B.m,q,B.e,B.P,0,B.p),q)}}
C.Tg.prototype={
R(){return new C.bfB()}}
C.bfB.prototype={
gc_q(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aJ(d,n,x.w).w,l=x.p,k=A.a([D.elI,D.elO],l)
for(w=0;w<8;++w){v=D.a3E[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.H8:B.Cp
q=t===s
r=A.X(r,q?B.eH:B.bY,n,n,n,17)
q=q?B.c:B.ae
r=A.a([r,B.bm,new A.y(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ac,new A.bz(1,B.bb,new A.y(v.c,n,B.Ae,n,n,n,n,B.a1,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ay(B.eH,2,B.r,-1)
s=new A.o(n,n,new A.bK(p,p,p,p),new A.bi(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aB(n,new A.D(B.eJ,A.x(A.a([new A.D(B.mJ,new A.ce(B.aM,B.e,B.i,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.Ei(!0,new C.al5(v,q.d,q.e,new C.dck(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dcl(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.byO,A.bE(D.fTN,n,new C.dcm(o,d),A.bo(B.b5,n,n,n,n,B.oC,n,n,new A.b7(A.m(16),B.a0),n,n,n)),n))
return A.bl(!0,new A.cU(new A.aZ(0,1/0,0,m.a.b*0.9),A.cf(k,n,D.bD6,n,n,B.ag,!0),n),!0,!1,B.af,!0,!0)}}
C.nl.prototype={
ag(){var w=this
return A.G(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a8().ae()],x.N,x.z)},
bdi(d,e,f){return new C.nl(this.a,e,d,f)}}
C.I0.prototype={
wv(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.I0(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aEw(d){var w=null
return this.wv(w,w,w,w,w,d,w,w,w,w,w,w)},
cK1(d){var w=null
return this.wv(w,w,w,w,d,w,w,w,w,w,w,w)},
bdg(d,e,f){var w=null
return this.wv(d,w,w,w,w,w,w,w,e,w,f,w)},
cKG(d){var w=null
return this.wv(w,w,w,w,w,w,d,w,w,w,w,w)},
cKP(d){var w=null
return this.wv(w,w,w,w,w,w,w,w,w,d,w,w)},
cK_(d){var w=null
return this.wv(w,w,w,d,w,w,w,w,w,w,w,w)},
cKR(d){var w=null
return this.wv(w,w,w,w,w,w,w,w,w,w,w,d)},
cJX(d){var w=null
return this.wv(w,w,d,w,w,w,w,w,w,w,w,w)},
cJS(d){var w=null
return this.wv(w,d,w,w,w,w,w,w,w,w,w,w)},
FT(d){var w=null
return this.wv(w,w,w,w,w,w,w,d,w,w,w,w)},
cKZ(d,e,f,g,h,i,j,k,l,m,n){return this.wv(d,e,f,g,null,h,i,j,k,l,m,n)},
ag(){var w=this
return A.G(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cHz(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bPI(d),k=A.aK(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aK(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Db.gev(D.Db))
s=i==null?o:B.k.E(i,18,36)
r=l.$2("position",D.a5h)
q=l.$2("frame",D.a4D)
l=l.$2("texture",D.a4y)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cKZ(p,u,t,q,r,A.r0(d.h(0,"ribbon"))?A.Gv(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.ZO.prototype={
R(){return new C.aAK(A.a([],x.I),D.NO)},
ge1(){return this.c}}
C.aAK.prototype={
Z(){var w,v=this
v.a2()
v.f=A.zV(0,1)
w=$.au()
v.z=new A.as(B.ar,w)
v.Q=new A.as(B.ar,w)
v.l8()
w=v.a
C.bCT(w.c,w.d).bN(new C.dd0(v),x.fL)},
q(){var w,v=this,u=v.f
u===$&&A.c()
u.q()
u=v.z
u===$&&A.c()
w=$.au()
u.S$=w
u.P$=0
u=v.Q
u===$&&A.c()
u.S$=w
u.P$=0
v.a1()},
l8(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$l8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Lf(s.c,s.d),$async$l8)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dcP(t,r))
t.awl()
case 1:return A.h(u,v)}})
return A.i($async$l8,v)},
gasW(){var w,v=this
if(!J.ct(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.r(v.d,v.r)},
awl(){var w,v,u=this.gasW(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saX(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saX(0,w==null?"":w)},
cd8(d){this.m(new C.dcM(this,d))
this.awl()},
NH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$NH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nl(B.o.u(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aRx(r.c,r.d,s),$async$NH)
case 3:w=4
return A.b(t.l8(),$async$NH)
case 4:if(t.c==null||J.ct(t.d)){w=1
break}q=J.qt(t.d,new C.dcn(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dco(t,p))
t.awl()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.Bf(p+1,B.cv,B.kD),$async$NH)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$NH,v)},
AW(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gasW()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aRx(o.c,o.d,new C.nl(s,r,q,new A.V(p,0,!1))),$async$AW)
case 3:w=4
return A.b(t.l8(),$async$AW)
case 4:if(t.c==null){w=1
break}t.m(new C.dcQ(t))
case 1:return A.h(u,v)}})
return A.i($async$AW,v)},
Ol(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ol=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gasW()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cj(null,null,!0,null,new C.dcw(r),s,null,!0,!0,x.y),$async$Ol)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bCF(s.c,s.d,r.a),$async$Ol)
case 4:t.m(new C.dcx(t))
w=5
return A.b(t.l8(),$async$Ol)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Ua(B.o.E(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Ol,v)},
yA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AW(),$async$yA)
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
return A.b(C.Ru(s,r.r,o,p,q),$async$yA)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a4(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hwQ(s,r.x,r.r),$async$yA)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Lf(s.c,s.d),$async$yA)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.M(l,new C.nl(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Bc(r.c,r.d,l),$async$yA)
case 11:w=12
return A.b(t.l8(),$async$yA)
case 12:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yA,v)},
a0W(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0W=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AW(),$async$a0W)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyy(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dK(D.zi,new C.dcN(t),new C.dcO())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mC("Our Family",o,"",""))
for(o=J.aW(t.d);o.C();){n=o.gT(o)
p.push(new H.mC(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.h9y(o,new H.rv(s,r,"",p,new H.uN(q.d,null,null,null,null,"","","")),null),$async$a0W)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a0W,v)},
O4(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$O4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AW(),$async$O4)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bV(D.af5,null,new C.dcs(t),s,!0,!0,!0,K.a8j,!1,!1,x.N),$async$O4)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cK1(r)
t.m(new C.dct(t,q))
s=t.a
w=7
return A.b(C.S4(s.c,s.d,q),$async$O4)
case 7:case 1:return A.h(u,v)}})
return A.i($async$O4,v)},
Xq(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(D.af5,null,new C.dcy(t),r,!0,!0,!0,K.a8j,!1,!1,x.e),$async$Xq)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dcz(t,s))
r=t.a
w=4
return A.b(C.S4(r.c,r.d,s),$async$Xq)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.Bf(0,B.dV,B.nn)
case 1:return A.h(u,v)}})
return A.i($async$Xq,v)},
bRz(d){var w=d.bU(),v=B.a.aS(B.o.u(w.gcb()),2,"0"),u=B.a.aS(B.o.u(w.gcu()),2,"0")
return""+w.gcf()+"-"+v+"-"+u},
gyy(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bZE()
if(r.e)w=D.adR
else if(J.ct(r.d)){w=r.y
v=r.gyy(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fhk,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a6(q,330,new A.D(W.al5,new C.Z5(w,v,0,q),q),q),B.bu,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kz.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bu],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aB(q,A.p(q,D.f15,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dG.j(0.45),B.I,18)],x.V),E.wu,B.n),q,q,q,q,B.Nx,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcGC(),q,q,q,q,q,q,!1,B.a4))
w.push(B.W)
w.push(A.hr(D.bPV,D.fTd,r.gaNl(),q))
B.d.v(u,w)}w=A.at(A.cg(A.x(u,B.m,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.em,q,q,B.ag),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kz.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.Q,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dR:B.AP
u=A.x(A.a([new A.D(D.bzQ,w,q),A.E(A.Jm(v,new C.dcZ(r),J.ad(r.d)+1,q,r.gcd7(),u,B.aM),1),r.bE7()],x.p),B.m,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c7(q,D.Yc,new A.an(B.a_,q,B.b1,B.t,A.a([D.aNX,A.bl(!0,A.x(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bZE(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cL(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Kl(B.e5,"AI",h.gbC0(),!0))
if(h.a.f)f.push(new C.Kl(B.nu,"Cover",h.gbMD(),!1))
if(h.a.f)f.push(new C.Kl(B.yZ,"Header",h.gbHE(),!1))
if(J.cL(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Kl(B.ur,"Print",h.gcmc(),!1))
if(h.a.f&&J.cL(h.d)&&h.r>=0){v=h.w
u=v?B.hw:B.iW
t=v?"Save":"Edit"
f.push(new C.Kl(u,t,v?h.gcsu():new C.dcJ(h),!1))}if(h.a.f)f.push(new C.Kl(B.hM,"Add page",h.gaNl(),!1))
v=C.hsU(h.y.Q)
u=h.gyy(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.M)(f),++m){l=f[m]
if(l.d)k=D.dBd
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.kb.j(0.5),1,B.r,-1)
j=A.p(g,A.X(l.a,D.kz,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bK(i,i,i,i),new A.bi(k,k,k,k),g,new A.a9(B.a5,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kz.j(0.85)
p.push(new A.bz(1,B.bb,A.aB(B.c9,A.x(A.a([k,B.bD,new A.y(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.P,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.al5(v,u,t+" \xb7 "+s+" "+r,new C.dcK(h),A.B(p,B.m,g,B.e,B.i,0,g,g),g)},
zZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AW(),$async$zZ)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aW(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=H.a2F(B.d.aH(s," "))
s=t.c
s.toString
w=6
return A.b(A.cj(null,null,!0,null,new C.dcp(t,p),s,null,!0,!0,x.N),$async$zZ)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.yA(),$async$zZ)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.DU(),$async$zZ)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Fu("Swahili (Kiswahili)",!0),$async$zZ)
case 18:w=16
break
case 17:w=19
return A.b(t.cDe(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zZ)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zZ,v)},
Zk(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.J(E.kb.j(0.3),B.r,1),r=x.p
return new A.D(B.cu,A.aO(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.wu,B.a6),w,42,w,w,w,w,w,42),B.bd,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A1.K0,w,w,w),A.d(g,w,w,w,w,w,w,B.Af,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1)],r),B.m,w,B.e,B.i,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bf,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dcL(d,h),w,w,w,w,w,w,w),w)},
DU(){return this.bR3()},
bR3(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$DU=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cj(null,null,!0,null,new C.dcC(r),a7,null,!0,!0,x.ei),$async$DU)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eA("Working on it\u2026",$.au())
a6.a=!0
a7=r.c
a7.toString
A.cj(null,null,!1,null,new C.dcD(o),a7,null,!0,!0,x.H).fo(new C.dcE(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.M)(d),++a1){k=d[a1]
J.cd(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ag()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.zi[a1]
J.cd(j,i.a)}w=8
return A.b(C.ahm(a0,a7,new C.dcF(o),d,l,e,j),$async$DU)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.ab(a8)
n=A.w(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a4(l,!0).eN()
l=o
l.si4($.au())
J.aRZ(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.K(x.q).f
j=n
l.U(A.b3(null,null,null,null,null,B.t,null,A.d(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcm(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.aj(0,a4)){j=J.r(p,a4)
a7=m.b.h(0,a4).a
a7=j.bdi(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.r(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Bc(j.c,j.d,l),$async$DU)
case 11:w=12
return A.b(r.l8(),$async$DU)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.zi[a1].a)
a5=l.cHz(j,12,a7)
l=r.a
w=15
return A.b(C.S4(l.c,l.d,a5),$async$DU)
case 15:if(r.c!=null)r.m(new C.dcG(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.Bf(0,B.dV,B.nn)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.K(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b3(a3?A.cwP("Undo",new C.dcH(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ep,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DU,v)},
Fu(d,e){return this.cDf(d,e)},
cDe(d){return this.Fu(d,!1)},
cDf(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fu=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eA("Starting\u2026",$.au())
f.a=!0
k=r.c
k.toString
A.cj(null,null,!1,null,new C.dcS(a0),k,null,!0,!0,x.H).fo(new C.dcT(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.M)(k),++i){n=k[i]
J.cd(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a2S(m,new C.dcU(a0)),$async$Fu)
case 10:w=8
break
case 9:w=11
return A.b(C.bEm(new C.dcV(a0),m,a2),$async$Fu)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.ab(a1)
q=A.w(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a4(o,!0).eN()
o=a0
o.si4($.au())
J.aRZ(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.K(x.q).f
k=q
o.U(A.b3(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.r(d,g)
j=J.r(p,g)
o.push(k.bdi(J.r(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Bc(k.c,k.d,o),$async$Fu)
case 12:w=13
return A.b(r.l8(),$async$Fu)
case 13:o=r.c
if(o==null){w=1
break}o=o.K(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(A.cwP("Undo",new C.dcW(r,d),null),null,null,null,null,B.t,null,k,null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fu,v)},
bE7(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dcq(v):u
r=A.aG(u,u,u,u,A.X(D.bLA,s?D.kz:B.aZ,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cL(v.d)&&!v.w&&v.r>=0)s=A.hr(A.X(B.w8,B.FJ,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.FJ,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbMd(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kz.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dcr(v):u
return A.bl(!0,new A.D(D.bzE,A.B(A.a([r,s,A.aG(u,u,u,u,A.X(B.eE,t<J.ad(v.d)?D.kz:B.aZ,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.i,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.ZS.prototype={
R(){return new C.bfZ(new A.as(B.ar,$.au()))}}
C.bfZ.prototype={
ga24(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.S$=$.au()
w.P$=0
this.a1()},
gbPI(){var w,v=this.ga24()
A:{if("cover"===v){w=D.d39
break A}if("book"===v){w=D.cZA
break A}w=D.dtI
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.kb.j(0.5),n=x.p,m=A.B(A.a([D.dBe,B.at,D.bFe,A.aG(q,q,q,q,B.lf,q,q,q,new C.deL(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.i,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.iO(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.deM(r),r.ga24()==="page",q,q,q,q))
if(r.a.d)l.push(A.iO(q,q,q,D.fNK,q,new C.deN(r),r.ga24()==="book",q,q,q,q))
l.push(A.iO(q,q,q,D.fAv,q,new C.deO(r),r.ga24()==="cover",q,q,q,q))
l=A.bX(B.bC,l,B.bq,q,6,8)
k=B.c.j(0.07)
k=A.aL(q,B.Y,!1,q,!0,B.t,q,A.aM(),r.d,q,q,q,q,q,2,A.br(q,new A.b5(4,A.m(16),B.a0),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.jE,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.d9,!0,B.a3,q,B.an,q,q,q,q)
w=A.a([],n)
for(v=r.gbPI(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mQ(q,B.c.j(0.08),new A.y(s,q,B.E6,q,q,q,q,q,q,q,q,q),B.hm,new C.deP(r,s),q,q,q,q))}return A.eS(q,E.Bm,A.cg(A.x(A.a([m,B.W,D.fR3,B.am,l,B.ad,k,B.O,A.bX(B.bC,w,B.bq,q,6,6),B.aA,A.dl(D.bPS,D.fRR,new C.deQ(r,d),A.bo(B.b5,q,q,q,q,B.oC,q,q,new A.b7(A.m(16),B.a0),q,q,q)),B.au,D.fLX],n),B.E,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.fk,q,q,B.ag),q,q,q,D.akN,B.d8,q,new A.b7(p,new A.ay(o,1.4,B.r,-1)),q)}}
C.ZQ.prototype={
R(){return new C.aAN(A.a([],x.gA))},
ge1(){return this.c}}
C.af2.prototype={}
C.aAN.prototype={
Z(){this.a2()
this.l8()},
l8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$l8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Rx(p.c,p.d),$async$l8)
case 3:o=e
n=A.a([],x.gA)
p=J.aW(o)
case 4:if(!p.C()){w=5
break}s=p.gT(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bCT(r.c,q),$async$l8)
case 6:j=e
i=J
w=7
return A.b(C.Lf(t.a.c,q),$async$l8)
case 7:m.push(new l.af2(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.ddf(t,n))
case 1:return A.h(u,v)}})
return A.i($async$l8,v)},
b8F(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Qs(d,e){return this.ceG(0,e)},
ceG(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Qs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a4(s,!1).cd(A.dX(new C.dde(u,e),!0,null,x.y)),$async$Qs)
case 2:t=g
w=3
return A.b(u.l8(),$async$Qs)
case 3:if(t===!0&&u.c!=null)u.c.K(x.q).f.U(D.aRx)
return A.h(null,v)}})
return A.i($async$Qs,v)},
Fx(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Fx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.K(x.q).f.U(D.aRt)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.agG(s.c,s.d),$async$Fx)
case 5:q=e
w=6
return A.b(t.l8(),$async$Fx)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Qs(0,B.d.fO(t.d,new C.ddj(q))),$async$Fx)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Ru(p,s.f,r,n,o),$async$Fx)
case 10:m=e
w=11
return A.b(t.l8(),$async$Fx)
case 11:if(m&&t.c!=null)t.c.K(x.q).f.U(D.aRx)
case 1:return A.h(u,v)}})
return A.i($async$Fx,v)},
PW(d,e){return this.cqb(0,e)},
cqb(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cj(null,null,!0,null,new C.ddi(t,e),s,null,!0,!0,x.y),$async$PW)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a33(s.c,s.d,e.a),$async$PW)
case 4:w=5
return A.b(t.l8(),$async$PW)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PW,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)k.push(o.bEa(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.J(E.kb.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aB(n,new A.fD(0.7142857142857143,A.p(n,A.x(A.a([D.dBf,B.ad,D.ekJ,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kz.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b8,B.i,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcGy(),n,n,n,n,n,n,!1,B.a4))}w=A.m(22)
v=A.J(E.kb.j(0.85),B.r,1.6)
s=A.aB(n,A.p(n,D.bXL,B.f,n,n,new A.o(B.w.j(0.3),n,A.J(E.kb.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ddk(d),n,n,n,n,n,n,!1,B.a4)
r=A.m(14)
q=B.w.j(0.3)
p=A.J(E.kb.j(0.5),B.r,1)
w=A.p(n,A.B(A.a([s,B.bd,D.bFC,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fgk,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h4,n,n,n)],l),B.m,n,B.e,B.i,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.c2G,B.n),n,n,n,At.Nh,D.bxH,n,n,n)
if(o.e)k=D.adR
else k=k.length===0?D.b8Y:A.cz(new C.ddl(k))
return A.c7(n,D.Yc,new A.an(B.a_,n,B.b1,B.t,A.a([D.aNX,A.bl(!0,A.x(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bEa(d){var w,v,u=this,t=null,s=u.b8F(d),r=d.c,q=x.p,p=A.a([A.bU(0,A.eN(B.A,new A.a6(300,420,new C.Z5(d.b,s,r,t),t),B.f,B.dw),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aB(t,A.p(t,D.bX4,B.f,t,t,new A.o(B.w.j(0.55),t,A.J(B.aZ,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ddc(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a1,t,t,t,D.ffV,t,t,t)
v=r===1?"page":"pages"
return A.aB(t,A.x(A.a([new A.fD(0.7142857142857143,new A.an(B.a_,t,B.ab,B.t,p,t),t),B.O,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kz.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ddd(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.Kl.prototype={}
C.Z5.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dK(D.zi,new C.cLv(m),new C.cLw()),j=m.c,i=D.Db.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mQ:B.b8
v=new C.cLx(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.ehq,28)],x.V)
u=x.p
t=A.a([A.bU(0,A.b4(l,l,l,new C.bdc(j.x,h,l),B.ax),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.a5,B.a8,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cN(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bi(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.al6,8,0.85,2.2),v.$4(D.bCy,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.al6,8,0.85,2.4))
else if(r==="corners")t.push(A.bU(0,new A.D(D.bCu,A.b4(l,l,l,new C.bd3(h,l),B.ax),l),0,0,0))
r=A.X(D.azy[B.o.E(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a1,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.awM,l,l),B.K,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.ad,p,B.ad,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cE,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aN,A.d(r,l,2,B.a1,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bU(0,new A.D(D.bCZ,A.x(o,B.m,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aHP(l),D.f5p),l,l,l,46,0,l))
return A.p(l,A.bx(D.act,new A.an(B.a_,l,B.ab,B.t,t,l),B.ap),B.f,l,l,new A.o(l,l,l,D.act,i,new A.a9(B.ay,B.aE,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bdc.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.e9()
f.d4(11)
switch(this.b){case"plain":return
case"linen":$.S()
w=A.I()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.G()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.S()
q=A.I()
q.r=B.c.j(0.05).gp(0)
q.c=1
for(p=0;p<u;p+=4){r=q.G()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.ah()
l=f.ah()
k=f.ah()
$.S()
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.r=t.j(0.25+f.ah()*0.5).gp(0)
r=j.G()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.S()
j=A.a([],l)
h=new A.aF(k.r,B.ah,null,null,j)
j.push(new A.aY(v,t))
k=i-0.04
j.push(new A.aq(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.aq(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bs())
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.G()
k=h.gbw().a.snapshot()
o.drawPath((h.e=new A.cm(k)).a,r)
r.delete()}break
default:$.S()
w=A.I()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.ah()
m=f.ah()
l=f.ah()
r=w.G()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.S()
g=A.I()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.ah()
m=f.ah()
l=f.ah()
r=g.G()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
aw(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bd3.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.S(),k=A.I(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.aa
k.c=2.4
k.d=B.bE
for(w=e.a,v=e.b,v=[D.eWF,new A.cw([w,0,-1,1]),new A.cw([0,v,1,-1]),new A.cw([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aF(l,B.ah,null,null,s)
s.push(new A.aY(r+p*34,q))
s.push(new A.aq(r,q))
s.push(new A.aq(r,q+o*34))
m=k.G()
s=n.gbw().a.snapshot()
w.drawPath((n.e=new A.cm(s)).a,m)
m.delete()
s=new A.ap(B.R,B.N,B.U,B.V,B.S)
s.r=j.j(0.9).gp(0)
m=s.G()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
aw(d){return!d.b.A(0,this.b)}}
C.ux.prototype={}
C.Zo.prototype={
R(){return new C.bda()}}
C.bda.prototype={
goc(){var w=this.d
return w===$?this.d=this.a.c:w},
gyy(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.as(new A.bb(w.b,B.b3,B.aO),$.au())}return v},
gaBF(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.as(new A.bb(w.c,B.b3,B.aO),$.au())}return v},
garu(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.as(new A.bb(w.y,B.b3,B.aO),$.au())}return v},
q(){var w=this,v=w.gyy(0),u=v.S$=$.au()
v.P$=0
v=w.gaBF()
v.S$=u
v.P$=0
v=w.garu()
v.S$=u
v.P$=0
w.a1()},
as7(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.iO(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.d4k(this,f,u),e===u,s,s,s,s))}return A.bX(B.bC,r,B.bq,s,6,8)},
axM(d){var w=null,v=B.c.j(0.07)
return A.br(w,new A.b5(4,A.m(14),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lO,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goc(),a0=f.gyy(0),a1=a0.a.a,a2=f.gaBF(),a3=a2.a.a,a4=f.garu(),a5=d.bdg(a4.a.a,a3,a1)
a1=x.w
a3=A.aJ(a6,e,a1).w
a1=A.aJ(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a6(190,260,A.eN(B.A,new A.a6(270,370,new C.Z5(a5,d,f.a.e,e),e),B.f,B.dw),e),e,e,e)
a0=A.aL(e,B.Y,!1,e,!0,B.t,e,A.aM(),a0,e,e,e,e,e,2,f.axM("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d4J(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.d9,!0,B.a3,e,B.an,e,e,e,e)
a2=A.aL(e,B.Y,!1,e,!0,B.t,e,A.aM(),a2,e,e,e,e,e,2,f.axM("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d4K(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.d9,!0,B.a3,e,B.an,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.zi[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aZ
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bK(o,o,o,o),e,e,new A.a9(B.ay,B.aE,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aB
v.push(A.aB(e,A.x(A.a([p,B.cL,new A.y(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.Q,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d4L(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bX(B.bC,v,B.bq,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b5.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eH:B.L,2,B.r,-1)
q.push(A.aB(e,A.p(e,A.X(D.azy[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bK(o,o,o,o),new A.bi(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d4M(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bX(B.bC,q,B.bq,e,8,8)
a4=A.aL(e,B.Y,!1,e,!0,B.t,e,A.aM(),a4,e,e,e,e,e,2,f.axM("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d4N(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.d9,!0,B.a3,e,B.an,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,L.vi,e,e,e)
m=A.a([],w)
for(l=D.Db.gdS(D.Db),l=l.gaf(l);l.C();){k=l.gT(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eH:B.aZ
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bK(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aB
m.push(A.aB(e,A.x(A.a([j,B.bD,new A.y(i,e,new A.F(!0,h,e,e,e,e,10,B.Q,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d4O(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bX(B.bC,m,B.bq,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,L.vi,e,e,e)
k=f.goc()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bl(!0,new A.cU(new A.aZ(0,1/0,0,a1.a.b*0.92),A.cf(A.a([D.fLp,B.ad,d,B.aN,a0,B.W,a2,B.aA,D.fRD,B.O,v,B.aA,D.fLy,B.O,q,B.aA,a4,B.aA,p,B.O,m,B.aA,l,A.kP(e,9,""+B.k.V(f.goc().f),36,18,new C.d4P(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,L.vi,e,e,e),B.am,f.as7(D.a5h,f.goc().r,new C.d4Q(f),D.dwW),B.ad,A.d("BORDER",e,e,e,e,e,e,L.vi,e,e,e),B.am,f.as7(D.a4D,f.goc().w,new C.d4R(f),D.dx1),B.ad,A.d("COVER MATERIAL",e,e,e,e,e,e,L.vi,e,e,e),B.am,f.as7(D.a4y,f.goc().x,new C.d4T(f),D.dyu),B.am,A.iI(e,B.b5,e,B.af,e,new C.d4U(f),e,e,e,D.fFD,f.goc().z),B.bu,A.bE(D.fK7,e,new C.d4V(f,a6),A.bo(B.b5,e,e,e,e,B.oC,e,e,new A.b7(A.m(16),B.a0),e,e,e))],w),e,Z.akD,e,e,B.ag,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aHP.prototype={
a3(d,e){var w,v,u,t=new A.aF($.S().r,B.ah,null,null,A.a([],x.v))
t.D(new A.aY(0,0))
w=e.a
t.D(new A.aq(w,0))
v=e.b
t.D(new A.aq(w,v))
t.D(new A.aq(w/2,v-12))
t.D(new A.aq(0,v))
t.D(new A.bs())
u=A.I()
u.sam(D.c3m.aB(0,new A.a3(0,0,0+w,0+v)))
d.aG(t,u)},
aw(d){return!1}}
C.biu.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.S()
w=A.I()
w.sam(D.c2m.aB(0,new A.a3(0,0,a3,a4)))
a5.aP(new A.a3(0,0,a3,a4),w)
v=B.k.dg(a2/112)
u=new A.e9()
u.d4(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.ah()*20
l=56+u.ah()*40
k=D.d38[u.ar(9)]
j=u.ar(14)
J.bm(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a3(n,j,n+m,j+l)
h=A.bt(i,B.hl)
g=new A.ap(B.R,B.N,B.U,B.V,B.S)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sam(new A.a9(B.a5,B.a8,B.x,A.a([f,k,e],t),a0,a0).aB(0,i))
d=g.G()
w.drawRRect(A.el(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.ap(B.R,B.N,B.U,B.V,B.S)
e.r=E.kb.j(0.55).gp(0)
d=e.G()
w.drawRect(A.bG(new A.a3(h,j,g,j+2)),d)
d.delete()
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.r=E.kb.j(0.4).gp(0)
d=j.G()
w.drawRect(A.bG(new A.a3(h,q,g,p)),d)
d.delete()
w.restore()
j=u.ar(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.sam(D.c1J.aB(0,new A.a3(0,r,a3,q)))
d=p.G()
w.drawRect(A.bG(new A.a3(0,r,a3,q)),d)
d.delete()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=B.w.j(0.5).gp(0)
p.z=B.lK
d=p.G()
w.drawRect(A.bG(new A.a3(0,q,a3,q+14)),d)
d.delete()}w=A.I()
w.r=D.bcL.j(0.72).gp(0)
a5.aP(new A.a3(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.I()
a4.sam(new A.c2(B.A,0.5,B.x,a0,0,A.a([D.bkQ.j(0.22),B.L],t),a0,a0).aB(0,A.bY(new A.t(w,a2),a1)))
a5.ad(new A.t(w,a2),a1,a4)},
aw(d){return!1}}
C.bbl.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aN(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cN(14,w*2,v*2.2,v*2,o,o,new A.kZ(new A.o(A.ar(D.kz,D.bpK,w/4),o,new A.bK(B.a0,new A.ay(B.w.j(0.12),1,B.r,-1),B.a0,B.a0),B.Lb,o,o,B.n),B.bg,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aJy,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.kb.j(0.6),o,o,new A.bi(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.m,o,B.qx,B.i,0,B.p),B.f,o,o,new A.o(o,o,o,D.b1a,u,D.c3k,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dr,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aHP(o),D.f5k),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aVs(p.y,r,I.iP,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aL(o,B.Y,!1,o,!0,B.t,o,A.aM(),p.r,o,o,o,o,o,2,A.br(o,B.eG,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,I.iP.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.fux,!0,B.a3,o,B.an,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,I.iP.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.W,A.E(A.aL(o,B.Y,!1,o,!0,B.t,o,A.aM(),p.w,o,o,o,o,o,2,A.br(o,B.eG,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,I.iP.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.fld,!0,B.a3,B.A8,B.an,o,o,o,o),1)],m),B.ak,o,B.e,B.i,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fup,o,o,o),B.au,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,I.iP.j(0.5),o,o,o,o,o,o,o,o,11,B.cE,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.O,A.B(A.a([A.E(A.p(o,o,B.f,D.Fw.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fC,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.Fw.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.Fw.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.i,0,o,o),B.aA],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,I.iP.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Yl(A.cS(A.a([A.cS(o,o,o,o,o,o,o,o,o,D.foo,B.a.aq(k,0,1)),A.cS(o,o,o,o,o,o,o,o,o,o,B.a.b7(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,I.iP.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cg(A.x(n,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,B.ag)}s.push(A.E(n,1))
s.push(new A.D(B.hZ,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,I.iP.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bx(B.Lb,new A.an(B.a_,o,B.ab,B.t,A.a([t,new A.D(D.bC0,A.x(s,B.ak,o,B.e,B.i,0,B.p),o),A.ao(0,A.c4(o,new A.o(o,o,o,o,o,new A.a9(B.a5,B.a8,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bg),o,o,0,o,0,22)],m),o),B.ap),B.f,o,o,new A.o(o,o,o,B.Lb,v,D.c3S,B.n),o,o,o,o,o,o,o,o),1)],m),B.ak,o,B.e,B.i,0,o,o))
return new A.an(B.a_,o,B.ab,B.t,l,o)}}
C.al6.prototype={
R(){return new C.al7(new A.eA(0,$.au()),new C.bRw(),new C.alp(),D.hpg,null,null)},
gcZ(){return this.d}}
C.a15.prototype={
a5(){return"_Step."+this.b}}
C.al7.prototype={
gC4(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bCP(w.c,6,w.e,!1)
u.d!==$&&A.bH()
u.d=v
t=v}return t},
gh4(d){var w,v=this,u=v.e
if(u===$){w=C.My(v.a.c)
v.e!==$&&A.bH()
v.e=w
u=w}return u},
gTt(){var w=this.gh4(0)
return w.gyS()==null?"Babu":B.a.i(w.gyS().b)},
Z(){var w,v=this
v.a2()
w=v.gh4(0).gyS()
w=w==null?null:w.c
v.r.b=w===D.og
w=v.qQ(new C.bPS(v))
w.h2(0)
v.x!==$&&A.aQ()
v.x=w
v.a21("Come closer, my children. I am "+v.gTt()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
q(){var w=this,v=w.x
v===$&&A.c()
v.q()
v=w.y
if(v!=null)v.a4(0)
v=w.z
if(v!=null)v.a4(0)
w.w.q()
v=w.f
v.S$=$.au()
v.P$=0
w.btN()},
a21(d){var w=this,v=w.y
if(v!=null)v.a4(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.df(D.ajd,new C.bPM(w))},
bqe(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a4(0)
v.m(new C.bPV(v))},
adg(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bq7(){return this.b8b()},
b8b(){var w=this,v=w.gC4()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bPN(w))
w.a21(u)
v=w.z
if(v!=null)v.a4(0)
w.z=A.cK(B.m2,new C.bPO(w))},
cHG(){var w=this
w.m(new C.bPR(w))
w.a21(w.gC4()[w.as].a)},
KG(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.abD)return
w=p.gC4()
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
t.r=s.a+1.5}q=new A.e9()
q.d4(v*7+d)
p.m(new C.bPQ(p,d,u,q))
p.a21(u?D.dip[q.ar(4)]+" "+w[p.as].d:D.df7[q.ar(3)]+" "+w[p.as].d)},
lj(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$lj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gC4()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bF5(t.at,t.ay,p)
t.m(new C.bPT(t,s))
t.a21(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.Bx(t.a.d,s),$async$lj)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.By(r.d,r.c.a,"fire",t.at*10),$async$lj)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bPU())
w=1
break
case 4:++t.as
t.b8b()
case 1:return A.h(u,v)}})
return A.i($async$lj,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c7(v,D.Xk,new A.an(B.a_,v,B.ab,B.t,A.a([A.bU(0,new A.ey(A.b4(v,v,v,new C.aVx(u,w.r,w.w,u),B.ax),v),0,0,0),A.bl(!0,A.x(A.a([w.c94(0),B.b0,w.bOW()],t),B.m,v,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],t),v),v,!1,!1,v,v)},
c94(d){var w,v,u,t=this,s=null,r=A.aG(s,s,s,s,B.P3,s,s,s,new C.bPP(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gC4().length;++w){v=t.as
if(w<v||t.Q===D.aYP)v=B.cJ
else v=w===v?B.c:B.aZ
u=new A.aP(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bi(u,u,u,u),s,s,B.n),s,7,s,D.bxr,s,s,s,22))}p=A.E(A.x(A.a([D.fCo,A.B(p,B.m,s,B.e,B.i,0,s,s)],q),B.E,s,B.e,B.i,0,B.p),1)
v=A.m(14)
u=A.J(B.fs,B.r,1)
return new A.D(D.bDa,A.B(A.a([r,p,A.p(s,A.d("\ud83d\udd25 "+B.k.V(t.cy*100)+"%",s,s,s,s,s,s,B.iK,s,s,s),B.f,s,s,new A.o(B.aS,s,u,v,s,s,B.n),s,s,s,s,B.h4,s,s,s)],q),B.m,s,B.e,B.i,0,s,s),s)},
bOW(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.gh4(0).gyS()
if(h==null)w=1
else w=h.c===D.og?0:1
v=j.dx
u=j.db
t=D.q_.j(0.96)
s=A.m(22)
r=A.J(B.cJ,B.r,3)
q=A.b4(i,i,i,new C.bnZ(w,i),B.ax)
p=A.d(j.Q===D.abD?j.gTt()+" asks":"Elder "+j.gTt(),i,i,i,i,i,i,D.aSH,i,i,i)
o=j.db
o=B.a.aq(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aB(B.c9,A.B(A.a([new A.a6(62,62,q,i),B.at,A.E(A.x(A.a([p,B.bD,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aSY,i,i,i)],n),B.E,i,B.e,B.i,0,B.p),1)],n),B.E,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbqd(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.a9q("Sit down by the fire",j.gbq6()),i,i,i)
break
case 1:v=A.at(j.a9q("Ask me, Elder",j.gcHF()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gC4()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ay(D.lt,2.5,B.r,-1)
v.push(A.aB(i,A.p(i,new A.y(u[m],i,D.aSU,i,B.K,i,i,i,i,i,i,i),B.f,i,D.ad4,new A.o(D.aid,i,new A.bK(l,l,l,l),new A.bi(q,q,q,q),i,i,B.n),i,i,i,i,U.vW,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bPJ(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bX(B.bC,v,B.bq,i,8,8)
break
case 3:v=j.fr
u=v?B.l9:Ah.anV
u=A.X(u,v?B.ed:D.lt,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.l(i,i,v?B.ed:D.lt,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gC4().length?"Finish":"Next story"
v=A.B(A.a([u,B.ac,q,j.a9q(v,j.gq5(j))],n),B.m,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gC4().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aTc,i,i,i)],n)
u=j.cx
if(u>0){u=C.aPM(u)
q=C.aPM(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.aa4,i,i,i))}v.push(B.O)
v.push(j.a9q("Back to the games",new C.bPK(j)))
v=A.x(v,B.m,i,B.e,B.i,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.W,v],n),B.E,i,B.e,B.P,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aAZ,i,B.n),i,i,i,B.ya,B.bf,i,i,i)},
a9q(d,e){var w=null,v=A.m(16),u=A.J(B.cJ,B.r,2)
return A.aB(w,A.p(w,A.d(d,w,w,w,w,w,w,A1.K0,w,w,w),B.f,w,w,new A.o(D.lt,w,u,v,w,w,B.n),w,w,w,w,D.bAU,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bnZ.prototype={
a3(d,e){X.fOM(d,e.ei(B.I),e.gdC()*0.45,this.b,0,0.4)},
aw(d){return d.b!==this.b}}
C.aAL.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.bRw.prototype={}
C.rZ.prototype={}
C.bo_.prototype={}
C.alp.prototype={
Md(d){var w,v=this
if(v.a==null||!J.A(v.b,d)){w=v.a
if(w!=null)w.q()
v.a=C.i3j(d)
v.b=d}w=v.a
w.toString
return w},
q(){var w=this.a
return w==null?null:w.q()}}
C.aVx.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.b.a,k=n.c,j=d.a,i=n.d.Md(e).b
i===$&&A.c()
i=i.a
i===$&&A.c()
i=i.a
i.toString
j.drawPicture(i)
i=e.a
w=e.b
v=Math.min(i/450,w/900)
J.bm(j.save())
j.translate((i-450*v)/2,(w-900*v)/2)
d.bW(0,v)
n.cxt(d,l)
n.bNx(d,l)
n.cFw(d,l,k)
u=0.8+0.2*Math.sin(l*8)*Math.sin(l*3.7)+k.w*0.4
J.bm(j.save())
j.translate(225,580)
d.p5(0,1,0.42)
t=240*(0.6+0.5*k.w)
$.S()
s=A.I()
r=x.O
q=x.n
s.sam(A.tp(B.I,t,A.a([D.boB.j(0.55*u),G.MA.j(0.2*u),B.L],r),A.a([0,0.5,1],q),B.x,m,m,0))
d.ad(B.I,t,s)
j.restore()
p=A.a([new A.z(528,new C.bRo(n,d,l,k)),new A.z(540,new C.bRp(n,d,l,k)),new A.z(546,new C.bRq(n,d,l,k)),new A.z(574,new C.bRr(n,d,l,k)),new A.z(612,new C.bRs(n,d,l,k)),new A.z(650,new C.bRt(n,d,l,k)),new A.z(656,new C.bRu(n,d,l,k))],x.E)
B.d.aW(p,new C.bRv())
for(o=0;o<7;++o)p[o].b.$0()
n.bEt(d,l,k)
n.bR1(d,l)
j.restore()
$.S()
j=A.I()
j.sam(A.tp(new A.t(i/2,w*0.6),e.gand()*0.75,A.a([B.L,D.bcF],r),A.a([0.55,1],q),B.x,m,m,0))
d.aP(new A.a3(0,0,0+i,0+w),j)},
aw(d){return d.c!==this.c||d.d!==this.d},
cxt(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e9()
g.d4(3)
for(w=d.a,v=0;v<36;++v){u=g.ah()
t=g.ah()
s=Math.sin(e*(1.5+g.ah()*2)+v)
r=g.ah()
s=B.c.j(0.25+0.7*(0.5+0.5*s))
$.S()
q=new A.ap(B.R,B.N,B.U,B.V,B.S)
q.r=s.gp(0)
p=q.G()
w.drawCircle(u*450,20+t*300,0.8+r*1.1,p)
p.delete()}o=B.k.F(e,17)/1.2
if(o<1){n=new A.t(60+o*220,70+o*90)
d.bo(n,n.aF(0,D.egY),C.it(B.c.j((1-o)*0.9),1.6))}for(u=e*0.035,t=e*9,s=x.v,m=0;m<3;++m){l=B.k.F(u+m*0.05,1)
r=-20+l*500
q=120+Math.sin(l*9+m)*14+m*12
k=Math.sin(t+m*2)
j=$.S()
i=A.a([],s)
j=new A.aF(j.r,B.ah,null,null,i)
k=q+k*4
i.push(new A.aY(r-6,k))
h=q-3
i.push(new A.c5(r-2,h,r,q))
i.push(new A.c5(r+2,h,r+6,k))
r=new A.ap(B.R,B.N,B.U,B.V,B.S)
r.b=B.aa
r.c=1.6
r.r=D.bfl.gp(0)
r.d=B.bE
r.e=B.dT
p=r.G()
r=j.gbw().a.snapshot()
w.drawPath((j.e=new A.cm(r)).a,p)
p.delete()}},
bNx(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=0.75+0.25*Math.sin(a0*9)*Math.sin(a0*5.3)
for(w=a0*0.12,v=d.a,u=0.78*e,t=0.7*e,s=0;s<3;++s){r=D.ay4[s]
q=r.a
p=r.c
o=q+p*0.1
n=r.b
m=r.d
l=n-m*0.38
k=A.bJ(new A.t(o,l),m*0.74,p*0.5)
j=O.Mt.j(u)
$.S()
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.r=j.gp(0)
h=i.G()
v.drawOval(A.bG(k),h)
h.delete()
p=A.bJ(new A.t(o+0,l+m*0.1),m*0.4,p*0.28)
l=new A.ap(B.R,B.N,B.U,B.V,B.S)
l.r=O.xD.j(t).gp(0)
h=l.G()
v.drawOval(A.bG(p),h)
h.delete()
for(p=q*0.01,m=n-m-r.e*0.9,g=0;g<5;++g){f=B.k.F(w+g/5+p,1)
o=Math.sin(f*6+g)
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.r=D.afL.j(0.16*(1-f)).gp(0)
h=n.G()
v.drawCircle(q+o*6+f*18,m-f*70,4+f*12,h)
h.delete()}}},
cFw(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
C.bCd(d,D.egU,0.9,a0,D.hln,!1,!1,D.abB,1,!1)
w=$.S().r
v=x.v
u=new A.aF(w,B.ah,e,e,A.a([],v))
u.D(new A.aY(52,470))
u.D(new A.aq(50,486))
u.D(new A.aq(66,486))
u.D(new A.aq(64,470))
u.D(new A.bs())
t=A.I()
t.r=D.ahy.gp(0)
d.aG(u,t)
C.bCd(d,D.egW,0.95,a0,D.hli,!1,!1,D.abC,1,!0)
t=new A.aF(w,B.ah,e,e,A.a([],v))
t.D(new A.aY(417,510))
t.D(new A.c5(431,532,445,510))
t.D(new A.aq(441,548))
t.D(new A.c5(431,553,421,548))
t.D(new A.bs())
u=A.I()
u.r=G.Fc.gp(0)
d.aG(t,u)
u=A.bJ(D.egV,8,28)
t=A.I()
t.r=D.bqQ.gp(0)
d.dO(u,t)
C.bCd(d,new A.t(-30+B.k.F(a0/26,1)*510,492),0.82,a0,D.hlo,!0,!1,D.Wg,1,!1)
t=B.k.F(a0/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.dO(A.bJ(new A.t(s+q*16,r-6),16,11),C.it(D.ahq,1.8))
u=q<0
C.bCd(d,new A.t(s-q*6,r),0.62,a0,D.hlq,!1,u,D.Wg,2.2,!1)
C.bCd(d,new A.t(s-q*32,r+4),0.58,a0+1,D.hlm,!1,u,D.Wg,2.2,!1)
this.bTH(d,D.egz,a0)
for(u=d.a,t=a0*0.5,p=a0*4,o=0;o<3;++o){n=88+o*17+Math.sin(t+o)*6
m=520+B.o.F(o,2)*6
l=Math.max(0,Math.sin(p+o*2))*4
k=A.bJ(new A.t(n,m),8,11)
j=o===1
i=j?D.ahm:D.ahW
h=new A.ap(B.R,B.N,B.U,B.V,B.S)
h.r=i.gp(0)
g=h.G()
u.drawOval(A.bG(k),g)
g.delete()
k=j?D.ahm:D.ahW
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.r=k.gp(0)
g=j.G()
u.drawCircle(n+5,m+(-3+l),2.6,g)
g.delete()
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.b=B.aa
j.c=1
j.r=B.aC.gp(0)
j.d=B.bE
j.e=B.dT
g=j.G()
u.drawLine.apply(u,[n+7.5,m+(-2+l),n+10,m+(-1.5+l),g])
g.delete()
n+=-1
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.b=B.aa
j.c=1
j.r=B.aC.gp(0)
j.d=B.bE
j.e=B.dT
g=j.G()
u.drawLine.apply(u,[n,m+4,n,m+8,g])
g.delete()}f=a0<a1.f
u=A.bJ(D.a7d,15+Math.sin(a0*2)*0.8,40)
t=A.I()
t.r=D.ag7.gp(0)
d.dO(u,t)
u=A.bJ(D.a7d.a9(0,new A.t(-14,f?-9:-2)),12,15)
t=A.I()
t.r=D.bhp.gp(0)
d.dO(u,t)
t=new A.aF(w,B.ah,e,e,A.a([],v))
t.D(new A.aY(130,592-(f?16:6)))
t.D(new A.aq(134,592-(f?22:9)))
t.D(new A.aq(138,592-(f?16:6)))
t.D(new A.bs())
u=A.I()
u.r=D.bhz.gp(0)
d.aG(t,u)
u=D.a7d.a9(0,new A.t(-17,f?-9:-2))
t=A.I()
t.r=B.hX.gp(0)
d.ad(u,1.1,t)
v=new A.aF(w,B.ah,e,e,A.a([],v))
v.D(new A.aY(168,590))
w=Math.sin(a0*8)
v.D(new A.c5(180,588+w*(f?6:0),178,595))
d.aG(v,C.it(D.ag7,3.5))},
bTH(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=Math.max(0,Math.sin(f*0.6))*9,j=e.a9(0,new A.t(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=j.a,u=j.b,t=u+3,s=f*2,r=u+16,q=d.a,p=0;p<4;++p){o=w[p]
n=Math.sin(s+o)
$.S()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.b=B.aa
m.c=2
m.r=D.Xv.gp(0)
m.d=B.bE
m.e=B.dT
l=m.G()
q.drawLine.apply(q,[v+o,t,v+(o+n*1.5),r,l])
l.delete()}w=A.bJ(j,17,32)
s=$.S()
r=A.I()
r.r=D.Fa.gp(0)
d.dO(w,r)
r=A.bJ(j.a9(0,D.eg_),7,26)
w=A.ar(D.Fa,B.w,0.12)
w.toString
q=A.I()
q.r=w.gp(0)
d.dO(r,q)
s=new A.aF(s.r,B.ah,null,null,A.a([],x.v))
s.D(new A.aY(v+13,u-3))
s.D(new A.aq(v+22,u-8+k))
s.D(new A.aq(v+20,u+k-0.5))
s.D(new A.aq(v+12,t))
s.D(new A.bs())
t=A.I()
t.r=D.Fa.gp(0)
d.aG(s,t)
t=A.bJ(j.a9(0,new A.t(24,-7+k)),9,12)
s=A.I()
s.r=D.Fa.gp(0)
d.dO(t,s)
s=-11+k
d.bo(j.a9(0,new A.t(22,s)),j.a9(0,new A.t(21,-17+k)),C.it(D.Xv,1.6))
d.bo(j.a9(0,new A.t(26,s)),j.a9(0,new A.t(28,-16+k)),C.it(D.Xv,1.6))
s=j.a9(0,new A.t(26,-8+k))
t=A.I()
t.r=B.w.gp(0)
d.ad(s,0.9,t)
d.bo(j.a9(0,new A.t(26,-3+k)),j.a9(0,new A.t(26,1+k)),C.it(D.bkb,1.4))
d.bo(j.a9(0,D.eiX),j.a9(0,new A.t(-19,-7+Math.sin(f*7)*2)),C.it(D.Fa,2.4))},
bR_(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
for(w=a5.a,v=0;v<14;++v){u=v*3.141592653589793*2/14
t=Math.cos(u)
s=Math.sin(u)
if(Math.sin(u)<0){t=A.bJ(new A.t(225+t*36,574+(s*13+6)),8,11)
$.S()
s=new A.ap(B.R,B.N,B.U,B.V,B.S)
s.r=D.bpw.gp(0)
r=s.G()
w.drawOval(A.bG(t),r)
r.delete()}}t=A.bJ(D.a7f.a9(0,B.cx),17,52)
$.S()
s=A.I()
s.r=D.bcg.gp(0)
a5.dO(t,s)
s=A.bJ(D.a7f.a9(0,B.cx),12,44)
t=D.bfJ.j(0.6+0.3*Math.sin(a6*6))
q=A.I()
q.r=t.gp(0)
a5.dO(s,q)
for(p=0;p<3;++p){u=D.deC[p]
t=225+Math.cos(u)*3
s=Math.cos(u)
q=Math.sin(u)
o=Math.cos(u)
n=Math.sin(u)
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.b=B.aa
m.c=7
m.r=D.Fp.gp(0)
m.d=B.bE
m.e=B.dT
r=m.G()
w.drawLine.apply(w,[t+s*24,579+q*4,t-o*24,579-n*4,r])
r.delete()
n=Math.cos(u)
o=Math.sin(u)
q=Math.cos(u)
s=Math.sin(u)
m=D.B4.j(0.6)
l=new A.ap(B.R,B.N,B.U,B.V,B.S)
l.b=B.aa
l.c=2
l.r=m.gp(0)
l.d=B.bE
l.e=B.dT
r=l.G()
w.drawLine.apply(w,[t+n*24,579+(o*4-2),t-q*24,579-(s*4+2),r])
r.delete()}k=46+80*a7.w
j=[D.eTz,D.eU0,D.eUT,D.eV9,D.eUR]
for(t=a6*8,s=a6*15,q=a6*3.3,o=x.v,i=0;i<3;++i){h=[1,0.72,0.42][i]
g=[D.bn0,D.bjy,D.bp_][i]
for(n=i===0,m=1-i*0.15,p=0;p<5;++p){f=j[p]
l=f.b
e=f.c
d=k*l*h*(0.9+0.12*Math.sin(t+e)+0.06*Math.sin(s+e*2))
a0=Math.sin(q+e)*5*(d/k)
a1=225+f.a*m
a2=(12+8*a7.w)*l*h
l=$.S()
e=A.a([],o)
a3=new A.aF(l.r,B.ah,null,null,e)
e.push(new A.aY(a1-a2,578))
l=a1+a0*0.6
e.push(new A.kY(a1-a2*1.1,578-d*0.45,l-a2*0.2,578-d*0.7,a1+a0,578-d))
e.push(new A.kY(l+a2*0.3,578-d*0.65,a1+a2*1.15,578-d*0.4,a1+a2,578))
e.push(new A.bs())
l=new A.ap(B.R,B.N,B.U,B.V,B.S)
l.r=g.j(n?0.9:0.95).gp(0)
r=l.G()
l=a3.gbw().a.snapshot()
w.drawPath((a3.e=new A.cm(l)).a,r)
r.delete()}}for(t=a6*1.5,v=0;v<22;++v){a4=B.k.F(a6*(0.35+B.o.F(v,5)*0.06)+v/22,1)
s=Math.sin(v*1.9+t)
q=a7.w
o=B.o.F(v,3)
n=F.ahT.j((1-a4)*0.9)
$.S()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=n.gp(0)
r=m.G()
w.drawCircle(225+s*(10+a4*26),564-a4*(110+80*q),1.2+o*0.6,r)
r.delete()}for(t=a6*0.1,s=574-k,v=0;v<6;++v){a4=B.k.F(t+v/6,1)
q=Math.sin(a4*5+v)
o=D.afL.j(0.1*(1-a4))
$.S()
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.r=o.gp(0)
r=n.G()
w.drawCircle(225+q*16+a4*12,s-a4*120,7+a4*20,r)
r.delete()}},
bR1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=d.a,r=0;r<16;++r){q=B.k.F(r*83+Math.sin(w+r)*40+v,450)
p=420+B.o.F(r*37,300)+Math.sin(u+r*2)*26
o=Math.max(0,Math.sin(t+r*1.7))
n=D.bqY.j(0.18*o)
$.S()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=n.gp(0)
l=m.G()
s.drawCircle(q,p,5,l)
l.delete()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=D.bkV.j(0.9*o).gp(0)
l=m.G()
s.drawCircle(q,p,1.4,l)
l.delete()}},
c2D(d,e){switch(d){case 0:return e.b?D.hlj:D.aYn
case 1:return e.b?D.hlp:D.aYl
case 2:return D.aYk
case 3:return D.aYj
case 4:return D.aYm
default:return D.aYo}},
aBT(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
QL(d,e,f,g){var w,v=this,u=D.a4L[e],t=v.c2D(e,g),s=new C.bo_(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a4L[e],l=e===0
m=B.k.E(((l?D.aJr:D.aJw).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a7j
s.as=D.DE
if(l){s.a=o?v.aBT(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.t(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.t(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.DE
if(g.a===3&&!g.d)s.e=m+Math.sin(r*6)*0.35*Math.max(0,1-r/1.8)
if(q){s.a=0.5
s.b=1
p=f*9
s.Q=new A.t(-4-Math.max(0,Math.sin(p))*7,-58)
p=s.as=new A.t(4+Math.max(0,Math.sin(p))*7,-58)}if(!q)p=!(o&&p.b<-50)
else p=!1
s.at=p}else if(e===1){s.b=0.35
if(o)s.r=Math.sin(f*2.4+1)*1.6
if(q){s.b=1
s.a=0.35+0.35*Math.max(0,Math.sin(f*13))
s.d=0.7
p=f*8
s.Q=new A.t(-4-Math.max(0,Math.sin(p))*7,-56)
s.as=new A.t(4+Math.max(0,Math.sin(p))*7,-56)
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.eg7
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.ehu
if(e===4)s.as=new A.t(36,-128+Math.sin(f*5)*4)}if(q){s.b=1
s.a=0.45+0.4*Math.max(0,Math.sin(f*12+e))
s.d=0.5
p=Math.max(0,Math.sin(f*9+e*1.3))*9
s.x=p
m=Math.max(0,Math.sin(f*10+e))*8
p=-56-p*0.3
s.Q=new A.t(-3-m,p)
s.as=new A.t(3+m,p)}else if(f<p){s.a=0.55
s.b=-0.1
s.c=1
s.Q=D.ejS
s.as=D.aJJ}if(e===2&&g.x!=null&&f<g.y){s.a=v.aBT(f,5)
s.b=0.4
s.as=new A.t(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aBT(f,e*3)
s.b=0.5
s.c=0.4}}C.hrC(d,u.a,u.b*1.2,t,s,f,e,null)},
bEt(d,e,f){var w=new C.bRn(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gdc(d){return this.c}}
C.afb.prototype={
a5(){return"_Stand."+this.b}}
C.ada.prototype={}
C.li.prototype={}
C.bQ7.prototype={
bz9(d){var w,v,u,t,s=A.U(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
FO(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.M)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aW(r,new C.bQ8())
return r},
aqe(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aLr(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.M)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
alH(d){var w,v,u=A.aX(x.N),t=d,s=0
for(;;){w=t.d
if(w!=null){v=this.c
v===$&&A.c()
v=v.h(0,w)!=null&&u.M(0,t.a)}else v=!1
if(!v)break
v=this.c
v===$&&A.c()
w=v.h(0,w)
w.toString;++s
t=w}return s},
gyS(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aW(w,new C.bQ9(this))
return B.d.gI(w)}}
C.ate.prototype={}
C.zh.prototype={}
C.ak4.prototype={
gaEb(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bL7(),A.T(w).k("Y<1>")).gL(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ag(){var w=this
return A.G(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.Mj.prototype={
gaon(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
if(t.gaEb(0))s.push(t)}return s},
ag(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.M)(w),++s){r=w[s]
p.push(A.G(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.G(["id",this.a,"title",q,"qs",p],u,t)},
cYA(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaon(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.M)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.M)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.li(B.a.i(s.a),p,B.d.cv(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.b9B.prototype={}
C.a9l.prototype={}
C.bgP.prototype={}
C.af9.prototype={}
C.ajj.prototype={
R(){return new C.ajk(B.bF,A.a([],x.cC),A.a([],x.e4),null,null)},
gcZ(){return this.d}}
C.ajk.prototype={
gMv(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bCP(w.c,8,w.e,!1)
u.d!==$&&A.bH()
u.d=v
t=v}return t},
gb8x(){var w,v=this,u=v.e
if(u===$){w=v.qQ(v.gc96())
v.e!==$&&A.bH()
v.e=w
u=w}return u},
Z(){this.a2()
this.gb8x().h2(0)},
q(){this.gb8x().q()
this.btI()},
h2(d){this.m(new C.bJl(this))},
c97(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.ft(0,v)
if(w.c!=null)w.m(new C.bJg())},
b6V(){var w,v,u,t=this,s=t.r
B.d.a7(s)
w=t.gMv()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bgP(u,(u+0.5)/v,w[t.x].b[u]))},
ft(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bs(w,new C.bJm())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c5t()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.M)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMv()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.k.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.arG(v,0.8,B.cJ)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.arG(m.cy,0.8,F.n7)
m.aXJ("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.arG(q,0.88,D.lt)
p=m.gMv()[m.x]
n=p.c
if(u===n){m.aXJ("The right gourd fell! It was "+p.b[n]+".")
return}}}},
arG(d,e,f){var w,v,u,t=new A.e9()
t.d4(B.k.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ah()*3.141592653589793*2
w.push(new C.af9(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aXJ(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.PX()}},
c5t(){var w=this
if(w.x+1>=w.gMv().length){w.PX()
return}++w.x
w.b6V()},
PX(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$PX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMv().length
r=C.bF5(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bJe())
w=2
return A.b(C.Bx(u.a.d,r),$async$PX)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.By(t.d,t.c.a,"catch",u.z),$async$PX)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bJf())
return A.h(null,v)}})
return A.i($async$PX,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.c95()
else w=v.ch?v.c98():A.at(new A.D(B.em,A.x(A.a([D.aU8,B.O,D.fE1,B.W,D.fKc,B.dS,C.ue("Play",v.geX(v),B.cJ,B.i2,D.fr)],x.p),B.m,u,B.e,B.P,0,B.p),u),u,u,u)
return new C.tn("Calabash Catch",w,B.fv,u)},
c98(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.i0:B.GS
p.push(A.X(u,v?B.aw:B.bY,r,r,r,22))}p.push(B.b0)
v=s.x
u=s.gMv()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aSF,r,r,r))
p.push(B.bd)
v=A.m(14)
p.push(A.p(r,A.d(""+s.z,r,r,r,r,r,r,B.iK,r,r,r),B.f,r,r,new A.o(B.bA,r,r,v,r,r,B.n),r,r,r,r,B.G5,r,r,r))
p=A.B(p,B.m,r,B.e,B.i,0,r,r)
v=A.m(18)
t=A.J(B.cJ,B.r,3)
return A.x(A.a([new A.D(D.byI,p,r),A.p(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fog,B.K,r,r),B.f,r,r,new A.o(D.q_,r,t,v,r,r,B.n),r,r,r,B.eZ,B.bf,r,r,1/0),B.am,A.E(A.cz(new C.bJk(s)),1)],q),B.m,r,B.e,B.i,0,B.p)},
c95(){var w=this,v=null,u=A.at(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.pB,v,v,v),v,v,v),t=A.at(A.d(""+w.Q+" of "+w.gMv().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.UG,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cf(A.a([D.b9I,u,t,B.aN,new C.I2(s,r,w.cx,v),B.aN,A.at(C.ue("Back to the games",new C.bJd(w),B.cJ,B.l8,D.fr),v,v,v)],x.p),v,B.a9,v,v,B.ag,!1)}}
C.bc_.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a6.a,a1=a6.b,a2=0+a0,a3=$.S(),a4=A.I()
a4.sam(A.jo(B.I,new A.t(0,a1),D.cYf,F.aym,B.x,d))
a5.aP(new A.a3(0,0,a2,0+a1),a4)
a4=A.I()
a4.r=F.MD.gp(0)
a5.ad(new A.t(a0*0.82,a1*0.16),22,a4)
a4=x.v
w=A.a([],a4)
v=new A.aF(a3.r,B.ah,d,d,w)
a3=a1*0.7
v.D(new A.aY(0,a3))
for(u=0;u<=a0;u+=6){t=new A.aq(u,a3+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.by(s)
t=v.e
if(t!=null)t.a.delete()
v.e=null}v.D(new A.aq(a0,a1))
v.D(new A.aq(0,a1))
a3=$.S()
w=A.I()
w.r=D.bgD.gp(0)
a5.aG(v,w)
r=a0*0.12
a3=new A.aF(a3.r,B.ah,d,d,A.a([],a4))
w=a1*0.86
a3.D(new A.aY(r-26,w))
t=a1*0.5
s=a1*0.34
a3.D(new A.c5(r-14,t,r-10,s))
a3.D(new A.aq(r+10,s))
a3.D(new A.c5(r+14,t,r+26,w))
a3.D(new A.bs())
w=A.I()
w.r=D.aeV.gp(0)
a5.aG(a3,w)
for(a3=a1*0.36,w=a1*0.24,t=a5.a,s=a1*0.22,q=0;q<4;++q){p=D.cja[q]
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=D.aeV.gp(0)
o.c=7
o.d=B.bE
n=o.G()
t.drawLine.apply(t,[r,a3,r+p*46,w,n])
n.delete()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=D.aeh.gp(0)
n=o.G()
t.drawCircle(r+p*50,s,18,n)
n.delete()}a3=a1*0.88
w=A.I()
w.r=D.bhx.gp(0)
a5.aP(new A.a3(0,a3,a2,a3+a1*0.12),w)
for(a2=a1*0.9,a3=a2-8,m=0;m<18;++m){w=a0*m/17
s=new A.ap(B.R,B.N,B.U,B.V,B.S)
s.r=D.ago.gp(0)
s.c=2
n=s.G()
t.drawLine.apply(t,[w,a2,w+3,a3,n])
n.delete()}for(a2=this.b,a3=a2.r,w=a3.length,s=a1*0.89,q=0;q<a3.length;a3.length===w||(0,A.M)(a3),++q){l=a3[q]
if(l.e)continue
o=l.a
u=(l.b+Math.sin(a2.dx*1.7+o)*0.012)*a0
k=l.d
if(l.f){o=A.bJ(new A.t(u,s),12,54)
$.S()
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=D.lt.j(0.6).gp(0)
n=k.G()
t.drawOval(A.bG(o),n)
n.delete()
continue}o=Math.sin(a2.dx*2+o)
J.bm(t.save())
t.translate(u,k*a1)
t.rotate(o*0.1*180/3.141592653589793,0,0)
$.S()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=D.afw.gp(0)
n=o.G()
t.drawCircle(0,-34,14,n)
n.delete()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=D.bm4.gp(0)
o.c=4
o.d=B.bE
n=o.G()
t.drawLine.apply(t,[0,-46,2,-56,n])
n.delete()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.sam(A.tp(D.eiF,46,D.d5v,B.CY,B.x,d,d,0))
n=o.G()
t.drawCircle(0,0,34,n)
n.delete()
o=A.bJ(D.eiL,8,12)
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=B.c.j(0.35).gp(0)
n=k.G()
t.drawOval(A.bG(o),n)
n.delete()
j=new A.jR(new A.eu(l.c,d,d,B.cQ,d,d,d,d,d,d,D.fm8),B.K,B.bZ,new A.jA(1),d,d,3,d,B.bW,d)
j.nZ(62)
o=j.b
k=Math.max(40,o.c+10)
o=o.a.c
i=A.bt(A.bJ(B.cH,o.gbb(o)+8,k),B.fE)
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=D.q_.gp(0)
n=k.G()
t.drawRRect(A.el(i),n)
n.delete()
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=D.lt.gp(0)
k.b=B.aa
k.c=1.5
n=k.G()
t.drawRRect(A.el(i),n)
n.delete()
k=j.b
o=k.c
k=k.a.c
j.a3(a5,new A.t(-o/2,4-k.gbb(k)/2))
t.restore()}h=a2.cy*a0
a3=a2.dx
w=Math.sin(a3*4)
X.AZ(a5,new A.t(h,a1*0.93),a1*0.3,a3,!0,Math.abs(a2.db-a2.cy)*40*Math.abs(Math.sin(a2.dx*18)),2,B.dG,G.mC,!1,(w+1)/2)
g=A.bJ(new A.t(h,a1*0.8),a1*0.07,a0*0.24)
a4=new A.aF($.S().r,B.ah,d,d,A.a([],a4))
w=g.a
a3=g.b
a4.D(new A.aY(w,a3))
s=g.c
a4.D(new A.aq(s,a3))
o=g.d
a4.D(new A.aq(s-8,o))
a4.D(new A.c5(g.gbL().a,o+8,w+8,o))
a4.D(new A.bs())
k=A.I()
k.r=D.Yh.gp(0)
a5.aG(a4,k)
for(a4=s-w,m=1;m<6;++m){s=w+a4*m/6
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=D.B4.gp(0)
k.c=1.4
n=k.G()
t.drawLine.apply(t,[s,a3,s+(m-3)*2,o,n])
n.delete()}s=a3+(o-a3)*0.35
o=A.I()
o.r=F.n7.gp(0)
a5.aP(new A.a3(w,s,w+a4,s+5),o)
w-=2
a3-=4
o=A.I()
o.r=D.bgI.gp(0)
a5.dO(new A.a3(w,a3,w+(a4+4),a3+8),o)
for(a3=a2.w,a4=a3.length,q=0;q<a3.length;a3.length===a4||(0,A.M)(a3),++q){f=a3[q]
w=f.a
s=f.b
o=f.f
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=f.e.j(B.k.E(o,0,1)).gp(0)
n=k.G()
t.drawCircle(w*a0,s*a1,3*o+1,n)
n.delete()}e=a2.dx-a2.go
if(e>=0&&e<1.2){a3=a2.fy
j=A.fv(d,d,d,d,A.cS(d,d,d,d,d,d,d,d,d,A.l(d,d,B.cJ.j(1-e/1.2),d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,K.CS,d,d),"+"+a3),B.a3,B.bZ,d,B.dA,B.bW)
j.el()
j.a3(a5,new A.t(a2.id*a0-j.b.c/2,a1*0.72-e*60))}},
aw(d){return!0}}
C.Qd.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aAJ(w.c,w.f,v),B.ax),s=A.m(10),r=A.J(B.bB,B.r,1.4)
return new A.a6(u+22,v,A.x(A.a([new A.a6(u,u,t,v),B.cL,A.p(v,A.d(w.d,v,1,B.a1,v,v,v,D.feQ,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.n),v,v,v,v,B.mK,v,v,v)],x.p),B.m,v,B.e,B.P,0,B.p),v)},
gY(d){return this.e}}
C.aAJ.prototype={
a3(d,e){var w=e.ei(B.I),v=e.gdC(),u=this.c?0.8:0
return X.fOM(d,w,v*0.44,this.b,0,u)},
aw(d){return d.b!==this.b||d.c!==this.c}}
C.az9.prototype={}
C.atY.prototype={
R(){return new C.atZ(A.U(x.S,x.cq),null,null)},
gcZ(){return this.d}}
C.atZ.prototype={
gkJ(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hwA(w.c,w.e)
u.d!==$&&A.bH()
u.d=v
t=v}return t},
gaDZ(){var w=this.z
return w===$?this.z=this.WU(0):w},
giT(){var w,v=this.Q
if(v===$){w=this.gkJ()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c1(w,-1,!1,x.S)}return v},
WU(d){var w,v,u,t,s=this.gkJ()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.az9(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.az9(v[t],u[t],-1))
v=new A.e9()
v.d4(this.a.e*31+d)
B.d.dZ(s,v)
return s},
q(){var w,v,u
for(w=this.as,w=new A.dq(w,w.r,w.e);w.C();){v=w.d
v.r.q()
v.r=null
u=v.eK$
u.b=!1
B.d.a7(u.a)
u=u.goi()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dT$.a.a7(0)
v.qm()}this.bua()},
cNH(d,e){var w,v,u,t,s,r=this
if(d>=r.giT().length||r.giT()[d]!==-1||B.d.t(r.giT(),e))return
w=r.gaDZ()[e]
v=r.gkJ()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cn6(r,e,w,v))
A.cK(B.lA,new C.cn7(r))
return}++r.r
u=A.bn(null,B.hs,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.q()
t.n(0,d,u)
r.m(new C.cn8(r,d,e,w,v))
u.cq(0)},
lj(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$lj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkJ()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cH(n,0,new C.cn9())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cna(t,r))
w=5
return A.b(C.Bx(t.a.d,r),$async$lj)
case 5:t.x=f
o=t.a
w=6
return A.b(C.By(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$lj)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cnb())
w=1
break
case 4:for(o=t.as,n=new A.dq(o,o.r,o.e);n.C();){q=n.d
q.r.q()
q.r=null
p=q.eK$
p.b=!1
B.d.a7(p.a)
p=p.goi()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dT$.a.a7(0)
q.qm()}o.a7(0)
t.m(new C.cnc(t))
case 1:return A.h(u,v)}})
return A.i($async$lj,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.pB,p,p,p),p,p,p)
v=r.f
v=A.at(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.UG,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tn(q,A.cf(A.a([D.adP,w,v,B.aN,new C.I2(u,t,r.ch,p),B.aN,A.at(C.ue("Back to the games",new C.cn2(d),B.cJ,B.l8,D.fr),p,p,p)],x.p),p,B.a9,p,p,B.ag,!1),B.fv,p)}w=r.gkJ()
v=r.e
s=w[v]
return new C.tn(q,new A.D(B.u4,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aSA,B.K,p,p),A.E(A.cz(new C.cn3(r,s)),1)],x.p),B.m,p,B.e,B.i,0,B.p),p),B.fv,p)}}
C.bbu.prototype={
a3(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2=y.B,b3=b0.d,b4=new A.Y(b3,new C.cMz(),A.T(b3).k("Y<1>")).gL(0),b5=b0.b,b6=b5.a9(0,B.IY)
$.S()
w=A.I()
w.r=D.lu.j(0.18+0.1*b4).gp(0)
b7.ad(b6,70+b4*10,w)
w=b8.a
b6=b8.b
v=b5.a9(0,D.efe)
u=A.I()
u.r=B.o9.j(0.5).gp(0)
u.c=10
u.d=B.bE
b7.bo(new A.t(w/2,b6*0.98),v,u)
for(v=b0.c,u=b5.a,b5=b5.b,t=b5+90,s=x.v,b5+=46,r=x.dc,q=x.U,p=b7.a,o=0;o<v.length;++o){n=v[o]
m=n.a+0
l=B.dV.av(0,B.k.E(b3[o],0,1))
k=$.S().r
j=A.a([],s)
i=new A.aF(k,B.ah,b1,b1,j)
j.push(new A.aY(u,b5))
j.push(new A.c5((u+m)/2,t,m,n.b+-46))
if(l<1)for(n=new A.aF(k,B.ah,b1,b1,A.bq(j,!0,r)),m=A.a([],q),h=new A.tm(n,!1,m);h.C();){g=h.c
if(g===0||h.f)A.b8(A.ju(b2));--g
f=new A.Bv(h,g)
e=0
for(;;){h.il()
d=m[g].b
d===$&&A.c()
if(!(e<d.a.length()))break
h.il()
d=m[g].b
d===$&&A.c()
d=Math.min(d.a.length(),e+7)
d=new A.aF(k,n.b,b1,new A.cw([f,e,d,!0]),A.a([],s))
$.S()
a0=new A.ap(B.R,B.N,B.U,B.V,B.S)
a0.r=B.aZ.gp(0)
a0.b=B.aa
a0.c=3
a1=a0.G()
a0=d.gbw().a.snapshot()
p.drawPath((d.e=new A.cm(a0)).a,a1)
a1.delete()
e+=14}}if(l>0)for(n=new A.aF(k,i.b,i.c,b1,A.bq(j,!0,r)),m=A.a([],q),j=new A.tm(n,!1,m),h=l>0.4,g=9-3*l,d=11*l,a0=6*l;j.C();){a2=j.c
if(a2===0||j.f)A.b8(A.ju(b2));--a2
j.il()
a3=m[a2].b
a3===$&&A.c()
a3=a3.a.length()
a3=new A.aF(k,n.b,b1,new A.cw([new A.Bv(j,a2),0,a3*l,!0]),A.a([],s))
$.S()
a4=new A.ap(B.R,B.N,B.U,B.V,B.S)
a4.r=D.FB.gp(0)
a4.b=B.aa
a4.c=g
a4.d=B.bE
a1=a4.G()
a4=a3.gbw().a.snapshot()
p.drawPath((a3.e=new A.cm(a4)).a,a1)
a1.delete()
j.il()
a3=m[a2].b
a3===$&&A.c()
a3=a3.a.length()
j.il()
a5=m[a2].Ha(a3*l)
if(h)for(a2=a5.a,a3=a2.a,a2=a2.b,a6=0;a6<4;++a6){a7=a6*1.6+o
a4=A.bJ(new A.t(a3+Math.cos(a7)*14,a2+Math.sin(a7)*10),a0,d)
a8=new A.ap(B.R,B.N,B.U,B.V,B.S)
a8.r=B.bj.gp(0)
a1=a8.G()
p.drawOval(A.bG(a4),a1)
a1.delete()}}}if(b0.e)for(b3=b6*0.3,o=0;o<6;++o){a9=new A.jR(D.fek,B.a3,B.bZ,new A.jA(1),b1,b1,b1,b1,B.bW,b1)
a9.el()
a9.a3(b7,new A.t(w*(0.15+o*0.14),b3-B.o.F(o,3)*14))}},
aw(d){return!0}}
C.axT.prototype={
R(){return new C.axU(A.aX(x.S))},
gcZ(){return this.d}}
C.axU.prototype={
gkJ(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hxu(w.c,w.e)
u.d!==$&&A.bH()
u.d=v
t=v}return t},
Z(){this.a2()
this.b73()},
q(){var w=this.ch
if(w!=null)w.a4(0)
this.a1()},
b73(){var w=this.ch
if(w!=null)w.a4(0)
this.ch=A.df(B.rl,new C.cC6(this))},
bnU(d){var w,v=this
if(v.as||v.z.t(0,d))return
w=v.gkJ()[v.e]
if(w.e[d]===w.b)v.m(new C.cCe(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cCf(v,d))
A.cK(B.iU,new C.cCg(v))}},
cT8(){var w=this
if(!w.as&&w.f<w.gkJ()[w.e].d.length)w.m(new C.cCh(w))},
lj(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$lj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkJ()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a4(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.m(new C.cCi(t,s))
w=5
return A.b(C.Bx(t.a.d,s),$async$lj)
case 5:t.y=f
q=t.a
w=6
return A.b(C.By(q.d,q.c.a,"who",t.r),$async$lj)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cCj())
w=1
break
case 4:t.m(new C.cCk(t))
t.b73()
case 1:return A.h(u,v)}})
return A.i($async$lj,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.d(""+a0.w+" of "+a0.gkJ().length+" guessed",a2,a2,a2,a2,a2,a2,B.pB,a2,a2,a2),a2,a2,a2)
v=A.at(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.UG,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tn(a1,A.cf(A.a([D.b9W,w,v,B.aN,new C.I2(u,t,a0.ax,a2),B.aN,A.at(C.ue("Back to the games",new C.cC8(a3),B.cJ,B.l8,D.fr),a2,a2,a2)],x.p),a2,B.a9,a2,a2,B.ag,!1),B.fv,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkJ()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.K8,B.K,a2,a2),B.W,A.at(A.ls(new C.cC9(a0,r),a2,B.b6,B.hs,a2,a2,new A.bp(a2,s,u),x.i),a2,a2,a2),B.aA],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ay(B.cJ,2,B.r,-1)
k=o+1
w.push(new A.qT(new A.bp(0,1,u),new C.cCa(),A.p(a2,new A.ce(B.aM,B.e,B.i,B.m,a2,B.p,a2,0,A.a([new A.p_(new A.y(""+k,a2,B.nL,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.lt,a2,12,a2),B.at,new A.bz(1,B.bb,new A.y(v[n].d[o],a2,D.fqS,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.q_,a2,new A.bK(l,l,l,l),new A.bi(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cu,B.bf,a2,a2,a2),B.b6,B.iU,a2,new A.bN("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bM(!1,D.fS2,a2,a2,!0,a2,a2,a2,a0.gcT7(),a2,a2),a2,a2,a2))
w.push(B.O)
if(a0.as){u=D.lu.j(0.2)
q=A.m(16)
p=A.J(D.lu,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fw,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.x(A.a([m,B.W,C.ue(v,a0.gq5(a0),B.cJ,B.jT,D.fr)],t),B.m,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bz,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.t(0,o)?B.dq:B.cJ.j(0.2)
g=new A.aP(16,16)
l=new A.ay(n.t(0,o)?B.f9:B.cJ,2,B.r,-1)
f=v[a0.e].e[o]
e=n.t(0,o)?B.bY:B.c
d=n.t(0,o)?B.wS:a2
t.push(new A.qT(new A.bp(0,i,u),new C.cCb(),A.aB(a2,A.p(a2,new A.y(f,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),a2,B.K,a2,a2,a2,a2,a2,a2,a2),B.f,a2,D.acY,new A.o(h,a2,new A.bK(l,l,l,l),new A.bi(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jh,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cCc(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b6,B.mE,a2,new A.bN("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bX(B.fH,t,B.bq,a2,10,10))}return new C.tn(a1,A.cf(w,a2,B.ake,a2,a2,B.ag,!1),B.fv,a2)}}
C.ayU.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.aGc.prototype={
aY(){this.b6()
this.b4()
this.dH()},
q(){var w=this,v=w.b5$
if(v!=null)v.a6(0,w.gdD())
w.b5$=null
w.a1()}}
C.aeY.prototype={
apR(d){},
aqi(){var w=this,v=w.qQ(new C.f1_(w))
v.h2(0)
w.LD$!==$&&A.aQ()
w.LD$=v}}
C.aK_.prototype={
gbkm(d){var w=this.c
return B.a.aq(w,0,Math.min(this.d,w.length))},
Vt(d){var w=this,v=w.b
if(v!=null)v.a4(0)
w.c=d
w.d=0
w.b=A.df(D.ajd,new C.fb3(w))},
bqc(d){var w=this,v=w.b
if(v!=null)v.a4(0)
w.d=w.c.length
w.a.$0()},
q(){var w=this.b
return w==null?null:w.a4(0)}}
C.alf.prototype={
R(){return new C.alg(new C.alp(),A.a([],x.t),new A.eA(0,$.au()),$,0,null,null)},
gcZ(){return this.d}}
C.alg.prototype={
gMt(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bCP(w.c,10,w.e,!0)
u.d!==$&&A.bH()
u.d=v
t=v}return t},
gh4(d){var w,v=this,u=v.e
if(u===$){w=C.My(v.a.c)
v.e!==$&&A.bH()
v.e=w
u=w}return u},
gqd(){var w=this.r
return w===$?this.r=new C.aK_(new C.bQU(this)):w},
gaoF(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMt()[v].c)u.push(1)
return u.length},
gbjD(){var w=this.gh4(0)
return w.gyS()==null?"Elder":B.a.i(w.gyS().b)},
Z(){this.a2()
this.aqi()},
q(){var w,v=this
v.gqd().q()
v.f.q()
w=v.LD$
w===$&&A.c()
w.q()
w=v.pV$
w.S$=$.au()
w.P$=0
v.btQ()},
cHQ(){var w=this
w.m(new C.bQR(w))
w.gqd().Vt(w.gMt()[w.x].a)},
KG(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqd()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.pV$.a
v.ax=u
v.ay=u+1
v.m(new C.bQP())
A.cK(B.hs,new C.bQQ(v))},
bnR(){var w=this.gaoF(0)/this.gMt().length*100
if(w>=90)return D.eQD
if(w>=75)return D.eOJ
if(w>=60)return D.eFz
if(w>=45)return D.eIW
return D.eA0},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cqF()
w=A.bU(0,new A.ey(A.b4(m,m,m,new C.brX(n,n.pV$),B.ax),m),0,0,0)
if(!n.Q){v=D.q_.j(0.96)
u=A.m(20)
t=A.J(B.cJ,B.r,3)
u=A.p(m,A.x(A.a([A.d("Elder "+n.gbjD()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aTw,B.K,m,m),B.W,C.ue("Start the test",n.gBp(),B.cJ,B.iW,D.fr)],x.p),B.m,m,B.e,B.P,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.n),m,m,m,m,B.bz,m,m,m)
v=u}else{v=n.x
u=n.gMt()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aTy,m,m,m)
if(n.Q){t=n.gqd()
t=t.d<t.c.length}else t=!1
if(t)u=D.f6J
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ay(D.B4,4,B.r,-1)
s.push(A.aB(m,A.p(m,new A.y(q[r],m,D.fi1,m,B.K,m,m,m,m,m,m,m),B.f,m,D.acY,new A.o(D.bcK,m,new A.bK(o,o,o,o),new A.bi(p,p,p,p),m,m,B.n),m,m,m,m,B.No,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bQS(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bX(B.fH,s,B.bq,new A.bN("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.oX(u,B.mD,A.qo(),B.b6,B.b6,A.Lb())],x.p),B.m,m,B.e,B.P,0,B.p)
v=u}return new C.tn("Village School",new A.an(B.a_,m,B.ab,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.fv,m)},
cqF(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bnR(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMt()[v].c)g.push(v)
u=A.m(22)
t=A.J(B.cJ,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fmr,B.K,i,i)
r=A.d("Signed by Elder "+j.gbjD(),i,i,i,i,i,i,D.fl6,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fqc,i,i,i),D.es0],q)
o=A.d(h.b,i,i,i,i,i,i,D.fs2,i,i,i)
n=j.gaoF(0)
m=j.gMt()
u=A.p(i,A.x(A.a([D.fDk,B.au,s,r,B.W,new A.an(B.A,i,B.ab,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.aa4,i,i,i),B.O,D.aqI],q),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(D.q_,i,t,u,i,i,B.n),i,i,i,i,B.fk,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aA,new C.I2(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aN,D.fT7,B.O],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.M)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ay(B.bA,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.x(A.a([new A.y(p.a,i,B.fT,i,i,i,i,i,i,i,i,i),B.au,new A.y("You said: "+p.b[w[v]],i,D.fnB,i,i,i,i,i,i,i,i,i),new A.y(p.d,i,D.fpP,i,i,i,i,i,i,i,i,i)],q),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.dq,i,new A.bK(k,k,k,k),new A.bi(r,r,r,r),i,i,B.n),i,i,i,B.cu,B.bf,i,i,i))}B.d.v(s,u)}s.push(B.aA)
s.push(A.at(C.ue("Back to the games",new C.bQL(j),B.cJ,B.l8,D.fr),i,i,i))
return new C.tn("Village School",A.cf(s,i,B.bQ,i,i,B.ag,!1),B.fv,i)}}
C.brX.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.b,e=f.pV$.a,d=a1.a,a0=f.f.Md(a2).b
a0===$&&A.c()
a0=a0.a
a0===$&&A.c()
a0=a0.a
a0.toString
d.drawPicture(a0)
w=C.h5_(a2)
J.bm(d.save())
d.translate(w.a,w.b)
a1.bW(0,w.c)
if(f.Q){a0=f.gqd()
v=a0.d<a0.c.length}else v=!1
for(u=0;u<2;++u){a0=D.cSz[u]-6
$.S()
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=D.Fp.gp(0)
s=t.G()
d.drawRect(A.bG(new A.a3(a0,340,a0+12,450)),s)
s.delete()}a0=A.bt(D.a8c.cr(10),B.hQ)
$.S()
t=A.I()
t.r=D.B4.gp(0)
a1.az(a0,t)
t=A.bt(D.a8c,B.hB)
a0=A.I()
a0.sam(A.jo(new A.t(30,96),new A.t(420,346),D.daK,g,B.x,g))
a1.az(t,a0)
r=new A.e9()
r.d4(2)
for(q=0;q<18;++q){a0=r.ah()
t=r.ah()
p=r.ah()
p=A.bJ(new A.t(30+a0*390,96+t*250),8+r.ah()*14,30+p*60)
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=B.c.j(0.025).gp(0)
s=t.G()
d.drawOval(A.bG(p),s)
s.delete()}a0=A.I()
a0.r=K.ah8.gp(0)
a1.aP(new A.a3(30,354,420,362),a0)
a0=A.I()
a0.r=B.aP.gp(0)
a1.aP(D.eZI,a0)
a0=A.I()
a0.r=B.bL.gp(0)
a1.aP(D.eZM,a0)
a0=A.bt(D.eZC,B.hA)
t=A.I()
t.r=D.Yh.gp(0)
a1.az(a0,t)
o=B.k.E((e-f.ax)/0.7,0,1)
if(f.Q){a0=f.gqd().gbkm(0)
n=A.fv(g,g,7,g,A.cS(g,g,g,g,g,g,g,g,g,D.fuh,a0+(v?"|":"")),B.a3,B.bZ,g,B.dA,B.bW)
n.nZ(346)
J.bm(d.save())
a0=A.bG(D.a8c)
t=$.ms()
d.clipRect(a0,t[1],!0)
a0=o<1
if(a0&&f.w.length>f.x)d.clipRect(A.bG(new A.a3(30+390*o,96,420,346)),t[1],!0)
n.a3(a1,new A.t(52,118))
d.restore()
if(o>0&&a0){a0=30+390*o-20
t=126+40*Math.sin(o*9)
t=A.bt(new A.a3(a0,t,a0+40,t+90),B.fE)
a0=A.I()
a0.r=D.brM.gp(0)
a1.az(t,a0)}}else{n=A.fv(g,g,g,g,D.feA,B.K,B.bZ,g,B.dA,B.bW)
n.nZ(340)
n.a3(a1,new A.t(55,176))}if(v)for(a0=e*1.2,t=e*3,q=0;q<8;++q){m=B.k.F(a0+q/8,1)
p=B.o.F(f.gqd().d*9,310)
l=Math.sin(q+t)
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=B.c.j(0.7*(1-m)).gp(0)
s=k.G()
d.drawCircle(70+p+l*6,166+m*70,1.6,s)
s.delete()}a0=f.gh4(0).gyS()
j=(a0==null?g:a0.c)===D.og?1:0
i=e<f.ay
h=A.a([new A.z(470,new C.f10(e,a1,j,v,i,D.egj)),new A.z(520,new C.f11(a1,e,v)),new A.z(575,new C.f12(a1,e,v)),new A.z(585,new C.f13(this,a1,e,v)),new A.z(615,new C.f14(this,v,a1,e,i))],x.E)
B.d.aW(h,new C.f15())
for(u=0;u<5;++u)h[u].b.$0()
d.restore()},
c99(d,e){var w,v,u,t,s,r,q,p=$.S(),o=A.a([],x.v),n=new A.aF(p.r,B.ah,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.aY(r,q)
o.push(r)
q=n.f
if(q!=null)r.by(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new A.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.by(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.D(new A.bs())
return n},
aw(d){return!1}}
C.ald.prototype={
R(){return new C.ale(new C.alp(),A.U(x.S,x.i),new A.eA(0,$.au()),$,0,null,null)},
gcZ(){return this.d}}
C.ale.prototype={
gkJ(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hwp(w.c,w.e)
u.d!==$&&A.bH()
u.d=v
t=v}return t},
giT(){var w=this.z
return w===$?this.z=this.Fk(0):w},
gaK1(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.Fk(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cv(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.Fk(0):r).length);++v}s.Q=w
r=w}return r},
Fk(d){var w,v,u,t,s=this.gkJ()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e2(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e9()
u.d4(this.a.e+d*7)
B.d.dZ(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.fb(u,new C.bQx())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a2()
this.aqi()},
q(){var w,v=this
v.e.q()
w=v.LD$
w===$&&A.c()
w.q()
w=v.pV$
w.S$=$.au()
w.P$=0
v.btP()},
apR(d){var w,v,u,t,s,r=this,q=r.giT().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cv(u===$?r.z=r.Fk(0):u,v)
s=r.gaK1()
s[v]=s[v]+(450*(t+0.5)/q-r.gaK1()[v])*Math.min(1,w)}},
cYg(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.giT().length)return
w=v.y
if(w===-1){v.m(new C.bQI(v,d))
return}if(w===d){v.m(new C.bQJ(v))
return}v.m(new C.bQK(v,B.d.cv(v.giT(),v.y),d,B.d.cv(v.giT(),d)))},
cIv(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.Fk(0):u).length))break
t=s.gkJ()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.Fk(0):u)[v]]===v);++v}s.m(new C.bQD(s,B.d.d_(w,new C.bQE())))},
lj(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$lj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkJ().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bQF(t,s))
w=5
return A.b(C.Bx(t.a.d,s),$async$lj)
case 5:t.x=f
q=t.a
w=6
return A.b(C.By(q.d,q.c.a,"lineup",t.r*10),$async$lj)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bQG())
w=1
break
case 4:t.m(new C.bQH(t))
case 1:return A.h(u,v)}})
return A.i($async$lj,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.d(""+l.r+" of "+l.gkJ().length+" lines right",k,k,k,k,k,k,B.pB,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tn("Line Up",A.cf(A.a([D.adP,w,B.aN,new C.I2(v,u,l.ch,k),B.aN,A.at(C.ue("Back to the games",new C.bQz(d),B.cJ,B.l8,D.fr),k,k,k)],x.p),k,B.a9,k,k,B.ag,!1),B.fv,k)}w=A.a([],x.t)
for(t=0;v=l.gkJ(),t<v[l.f].d.length;++t)w.push(t)
B.d.aW(w,new C.bQA(l))
u=A.bU(0,A.cz(new C.bQB(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aTy,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fmS,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fp3,B.K,k,k)],q),B.m,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.m(16)
n=l.ax
m=A.J(n?D.lu:F.n7,B.r,2)
r.push(A.p(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bQC(l),x.cM).aH(0,", then ")+".",k,k,k,k,k,k,D.frd,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.n),k,k,k,B.d2,B.bf,k,k,1/0))}if(!l.at)r.push(C.ue("That is my line!",l.gcIu(l),B.cJ,B.hw,D.fr))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.ue(w,l.gq5(l),B.cJ,B.jT,D.fr))}return new C.tn("Line Up",new A.an(B.a_,k,B.ab,B.t,A.a([u,s,A.ao(12,A.x(r,B.m,k,B.e,B.P,0,B.p),k,k,12,12,k,k)],q),k),B.fv,k)}}
C.biC.prototype={
a3(c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.pV$.a,c6=c8.a,c7=c4.e.Md(c9).b
c7===$&&A.c()
c7=c7.a
c7===$&&A.c()
c7=c7.a
c7.toString
c6.drawPicture(c7)
w=C.h5_(c9)
J.bm(c6.save())
c6.translate(w.a,w.b)
c8.bW(0,w.c)
v=c4.giT().length
c7=$.S().r
u=x.v
t=new A.aF(c7,B.ah,c3,c3,A.a([],u))
t.D(new A.aY(10,470))
t.D(new A.c5(225,500,440,470))
s=A.I()
s.r=D.Yh.gp(0)
s.b=B.aa
s.c=4
c8.aG(t,s)
for(s=c5*3,r=0;r<12;++r){q=30+r*36
p=470+30*Math.sin(3.141592653589793*(q-10)/430)*0.95
o=Math.sin(s+r)
n=A.a([],u)
m=new A.aF(c7,B.ah,c3,c3,n)
n.push(new A.aY(q,p))
n.push(new A.aq(q+16,p+6+o*3))
n.push(new A.aq(q,p+20))
n.push(new A.bs())
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=[B.cJ,F.n7,D.lu,B.aQ][B.o.F(r,4)].gp(0)
l=o.G()
o=m.gbw().a.snapshot()
c6.drawPath((m.e=new A.cm(o)).a,l)
l.delete()}this.b_e(c8,"OLDEST",D.ehj,B.cJ)
this.b_e(c8,"YOUNGEST",D.egL,B.bj)
c7=A.bt(D.eZw,B.fE)
u=A.I()
u.r=D.Fp.gp(0)
c8.az(c7,u)
u=A.bt(D.eZv,B.hB)
c7=A.I()
c7.r=D.B4.gp(0)
c8.az(u,c7)
k=c5<c4.CW
j=c5<c4.cx
i=v>=5?0.92:1.12
c7=A.a([],x.t)
for(h=0;h<v;++h)c7.push(h)
B.d.aW(c7,new C.dnT())
for(u=c7.length,s=440/v-8,o=c5*10,n=!k,m=c4.as,g=c5*9,f=c5*8,e=c5*12,d=0;d<c7.length;c7.length===u||(0,A.M)(c7),++d){h=c7[d]
a0=c4.z
a1=B.d.cv(a0===$?c4.z=c4.Fk(0):a0,h)
q=c4.gaK1()[h]
a2=c4.y===h
a3=a2?Math.abs(Math.sin(g))*10:0
a4=m.h(0,h)
if(a4!=null&&c5<a4)a3+=Math.sin((1-(a4-c5)/0.5)*3.141592653589793)*14
a5=c4.at&&c4.gkJ()[c4.f].e[h]===a1
a6=c4.at&&!c4.ax&&!a5
a7=c4.gkJ()
a8=a7[c4.f].c
a9=a8.length>h?a8[h]:h
if(n)b0=c4.at&&a5
else b0=!0
b1=Math.max(0,Math.sin(o+h))
if(a2){$.S()
a8=new A.ap(B.R,B.N,B.U,B.V,B.S)
a8.r=B.cJ.j(0.22+0.1*Math.sin(f)).gp(0)
l=a8.G()
c6.drawCircle(q,520,54,l)
l.delete()}a8=D.deq[B.o.F(a9,6)]
if(b0)b2=1
else b2=a6?-0.4:0.35
if(b0)b3=0.4+0.4*b1
else b3=j&&a6?0.5:0
if(j&&a6)b4=1
else b4=a2?0.6:0
b5=b0?0.5:0
b6=a6?Math.sin(e)*0.5:0
b7=b0?a3+b1*8:a3
if(b0)b8=new A.t(-3-b1*8,-56)
else b8=a2?D.ejp:c3
if(b0)b9=new A.t(3+b1*8,-56)
else if(j&&a6)b9=D.aJJ
else b9=a2?new A.t(30,-104+Math.sin(f)*5):c3
C.S1(c8,new A.t(q,612),b7,b4,(225-q)/225*0.5,-0.3,b8,b9,D.J_,a8,b3,0,i,b2,b5,c5,b6)
a7=a7[c4.f].d[h]
c0=new A.jR(new A.eu(a7,c3,c3,B.cQ,c3,c3,c3,c3,c3,c3,D.fkD),B.a3,B.bZ,new A.jA(1),"\u2026",c3,1,c3,B.bW,c3)
c0.nZ(s)
c1=A.bt(A.bJ(new A.t(q,650),24,c0.b.c+16),B.fE)
$.S()
a7=new A.ap(B.R,B.N,B.U,B.V,B.S)
if(a5)a8=B.iw
else a8=a6?B.rg:D.q_
a7.r=a8.gp(0)
l=a7.G()
c6.drawRRect(A.el(c1),l)
l.delete()
a7=new A.ap(B.R,B.N,B.U,B.V,B.S)
if(a5)a8=D.lu
else a8=a6?F.n7:D.lt
a7.r=a8.gp(0)
a7.b=B.aa
a7.c=2
l=a7.G()
c6.drawRRect(A.el(c1),l)
l.delete()
a7=c0.b
a8=a7.c
a7=a7.a.c
c0.a3(c8,new A.t(q-a8/2,650-a7.gbb(a7)/2))
c2=new A.jR(new A.eu(""+(a1+1),c3,c3,B.cQ,c3,c3,c3,c3,c3,c3,D.fkW),B.a3,B.bZ,new A.jA(1),c3,c3,c3,c3,B.bW,c3)
c2.el()
c2.a3(c8,new A.t(q-c2.b.c/2,668))}if(k)for(c4=c5*2,c7=c5*120,u=c5*4,r=0;r<26;++r){q=B.k.F(r*53+Math.sin(c4+r)*20,450)
s=B.k.F(c7+r*37,420)
J.bm(c6.save())
c6.translate(q,140+s)
c6.rotate((u+r)*180/3.141592653589793,0,0)
s=A.bJ(B.I,4,8)
$.S()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=[B.cJ,F.n7,D.lu,B.aQ,B.c][B.o.F(r,5)].gp(0)
l=o.G()
c6.drawRect(A.bG(s),l)
l.delete()
c6.restore()}c6.restore()},
b_e(d,e,f,g){var w,v,u=null,t=A.fv(u,u,u,u,A.cS(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,K.CS,u,u),e),B.a3,B.bZ,u,B.dA,B.bW)
t.el()
w=t.b
v=w.c
w=w.a.c
t.a3(d,f.aF(0,new A.t(v/2,w.gbb(w)/2)))},
aw(d){return!1}}
C.a1o.prototype={
a5(){return"_Trip."+this.b}}
C.al9.prototype={
R(){return new C.ala(D.Wl,new A.eA(0,$.au()),$,0,null,null)},
gcZ(){return this.d}}
C.ala.prototype={
gD3(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bCP(w.c,8,w.e,!1)
u.d!==$&&A.bH()
u.d=v
t=v}return t},
gh4(d){var w,v=this,u=v.e
if(u===$){w=C.My(v.a.c)
v.e!==$&&A.bH()
v.e=w
u=w}return u},
gqd(){var w=this.f
return w===$?this.f=new C.aK_(new C.bQj(this)):w},
gTt(){var w=this.gh4(0)
return w.gyS()==null?"Grandma":B.a.i(w.gyS().b)},
Z(){this.a2()
this.aqi()},
q(){var w,v=this
v.gqd().q()
w=v.LD$
w===$&&A.c()
w.q()
w=v.pV$
w.S$=$.au()
w.P$=0
v.btO()},
apR(d){var w,v,u,t=this
if(t.r!==D.abN)return
w=B.dx.av(0,B.k.E((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gD3()
if(v+1>=u.length){t.r=D.abO
t.Wp()}else{++t.w
t.ay=!1
t.r=D.Wm
t.gqd().Vt(u[t.w].a)}if(t.c!=null)t.m(new C.bQh())}},
Wp(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Wp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqd().Vt("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gD3().length
r=C.bF5(t,u.z,s)
u.as=r
w=2
return A.b(C.Bx(u.a.d,r),$async$Wp)
case 2:u.at=e
s=u.a
w=3
return A.b(C.By(s.d,s.c.a,"journey",u.x*10),$async$Wp)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bQb())
return A.h(null,v)}})
return A.i($async$Wp,v)},
bp6(){this.aSB()},
aSB(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.abN
if(w.c!=null)w.m(new C.bQc())},
KG(d){var w,v,u,t,s=this
if(s.r!==D.Wm)return
w=s.gD3()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bQg(s,d,v))
u=s.gqd()
t=s.w
u.Vt(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cNG(){if(this.r!==D.AB)return
this.aSB()},
B(d){var w,v,u,t=this,s=null,r=A.bU(0,new A.ey(A.b4(s,s,s,new C.bi2(t,t.pV$),B.ax),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gD3().length;++w){v=t.w
if(w<v||t.r===D.abO)v=B.cJ
else v=w===v?B.c:B.aZ
u=new A.aP(4,4)
p.push(new A.bz(1,B.bb,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bi(u,u,u,u),s,s,B.n),s,7,s,B.ym,s,s,s,s),s))}p.push(B.bm)
p.push(D.fEW)
return new C.tn("Safari Journey",new A.an(B.a_,s,B.ab,B.t,A.a([r,A.ao(s,A.B(p,B.m,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ao(10,t.cim(),s,s,10,10,s,s)],q),s),B.fv,s)},
cim(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bQf(o),l=D.q_.j(0.96),k=A.m(22),j=A.J(B.cJ,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTt()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aTw,B.K,n,n),B.W,C.ue("Start the journey",o.gbp5(),B.cJ,D.bLS,D.fr)],x.p),B.m,n,B.e,B.P,0,B.p)
break
case 3:w=D.b9s
break
case 1:w=o.w
v=o.gD3()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ay(D.lt,2.5,B.r,-1)
t.push(A.aB(n,A.p(n,new A.y(r[s],n,D.aSU,n,B.K,n,n,n,n,n,n,n),B.f,n,D.ad4,new A.o(D.aid,n,new A.bK(p,p,p,p),new A.bi(q,q,q,q),n,n,B.n),n,n,n,n,U.vW,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bQd(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.O,A.bX(B.bC,t,B.bq,n,8,8)],u),B.E,n,B.e,B.P,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gD3().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.O,new A.bO(B.a8,n,n,C.ue(v,o.gcNF(),B.cJ,B.jT,D.fr),n)],x.p),B.E,n,B.e,B.P,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTt()),B.O,A.d(""+o.x+" of "+o.gD3().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aTc,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aPM(v)
u=C.aPM(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.aa4,n,n,n))}w.push(B.O)
w.push(A.at(C.ue("Back to the games",new C.bQe(o),B.cJ,B.l8,D.fr),n,n,n))
w=A.x(w,B.E,n,B.e,B.P,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aAZ,n,B.n),n,n,n,n,B.bf,n,n,n)}}
C.bi2.prototype={
a3(d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=this.b,c7=c6.pV$.a,c8=d6.a,c9=d6.b,d0=c6.CW,d1=c6.gD3(),d2=B.k.E(d0/(520*(d1.length+1)),0,1),d3=c6.r===D.abN,d4=c9*0.5
d0=A.ar(D.bea,D.boi,d2)
d0.toString
w=A.ar(D.Xx,F.ag0,d2)
w.toString
v=A.ar(B.tB,D.bmN,d2)
v.toString
$.S()
u=A.I()
t=x.O
u.sam(A.jo(B.I,new A.t(0,d4),A.a([d0,w,v],t),F.a3h,B.x,c5))
d5.aP(new A.a3(0,0,0+c8,0+c9),u)
s=new A.t(c8*(0.15+0.7*d2),d4*(0.28+0.45*d2*d2))
u=A.I()
u.sam(A.tp(s,60,A.a([D.bn9,B.L],t),c5,B.x,c5,c5,0))
d5.ad(s,60,u)
u=A.I()
u.r=B.XJ.gp(0)
d5.ad(s,22,u)
for(d0=d5.a,w=c7*4,v=c8+240,u=c9*0.06,r=0;r<5;++r){q=B.k.F(r*190-c6.CW*0.06-w,v)-120
p=u+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dtj[o]
$.S()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=B.c.j(0.75).gp(0)
l=m.G()
d0.drawCircle(q+n.a,p+n.b,18,l)
l.delete()}}for(v=d2*0.7,u=d4+4,m=d4-16,k=x.v,j=0;j<2;++j){i=$.S()
h=A.a([],k)
g=new A.aF(i.r,B.ah,c5,c5,h)
h.push(new A.aY(0,u))
for(i=m-j*12,f=0.12+j*0.1,e=70+j*30,d=14-j*3,q=0;q<=c8;q+=6){a0=new A.aq(q,i+Math.sin((q+c6.CW*f)/e)*d)
h.push(a0)
a1=g.f
if(a1!=null)a0.by(a1)
a0=g.e
if(a0!=null)a0.a.delete()
g.e=null}i=new A.aq(c8,u)
h.push(i)
h=g.f
if(h!=null)i.by(h)
i=g.e
if(i!=null)i.a.delete()
g.e=null
$.S()
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.r=A.ar(j===0?D.bcM:D.brb,D.bhE,v).gp(0)
l=i.G()
i=g.e
d0.drawPath((i==null?g.e=new A.cm(g.gbw().a.snapshot()):i).a,l)
l.delete()}for(v=d4+2,r=0;r<8;++r)this.c9a(d5,new A.t(B.k.F(B.k.F(r*300-c6.CW*0.5,2400)+2400,2400)-150,v),(r&1)===0,d2)
$.S()
v=A.I()
u=A.ar(D.ahq,D.FB,d2)
u.toString
v.sam(A.jo(new A.t(0,d4),new A.t(0,c9),A.a([u,D.bnb],t),c5,B.x,c5))
d5.aP(new A.a3(0,d4,c8,c9),v)
a2=c9*0.56
a3=c9*0.66
v=A.I()
v.r=D.bgW.gp(0)
d5.aP(new A.a3(0,a2,c8,a3),v)
v=A.I()
v.r=D.bqS.gp(0)
d5.aP(new A.a3(0,a2-3,c8,a2),v)
for(q=-B.k.F(c6.CW,70),v=(a2+a3)/2-2,u=v+4;q<c8;q+=70){t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=K.LZ.gp(0)
l=t.G()
d0.drawRect(A.bG(new A.a3(q,v,q+36,u)),l)
l.delete()}for(v=a2-6,u=v-36,t=u+36,m=v-34,i=c8*0.62,h=c8+160,f=c7*3,e=c7*6,d=v+40,a0=v-20,a1=a0+20,a4=v-56,a5=a4+56,a6=v-66,a7=a6+20,a8=v-72,r=0;a9=d1.length,r<=a9;r=b0){b0=r+1
q=i+b0*520-c6.CW
if(q<-160||q>h)continue
a9=r===a9
b1=q+40
b2=b1-26
b3=$.S()
b4=new A.ap(B.R,B.N,B.U,B.V,B.S)
b4.r=D.bct.gp(0)
l=b4.G()
d0.drawRect(A.bG(new A.a3(b2,u,b2+52,t)),l)
l.delete()
b2=A.a([],k)
b3=new A.aF(b3.r,B.ah,c5,c5,b2)
b2.push(new A.aY(b1-36,m))
b2.push(new A.aq(b1,a8))
b2.push(new A.aq(b1+36,m))
b2.push(new A.bs())
b2=new A.ap(B.R,B.N,B.U,B.V,B.S)
b2.r=D.bp8.gp(0)
l=b2.G()
b2=b3.gbw().a.snapshot()
d0.drawPath((b3.e=new A.cm(b2)).a,l)
l.delete()
b2=b1-6
b3=new A.ap(B.R,B.N,B.U,B.V,B.S)
b3.r=D.fr.gp(0)
l=b3.G()
d0.drawRect(A.bG(new A.a3(b2,a0,b2+12,a1)),l)
l.delete()
b5=q-36
b2=b5-2
b3=new A.ap(B.R,B.N,B.U,B.V,B.S)
b3.r=D.Fp.gp(0)
l=b3.G()
d0.drawRect(A.bG(new A.a3(b2,a4,b2+4,a5)),l)
l.delete()
b2=b5-30
b6=A.bt(new A.a3(b2,a6,b2+60,a7),B.i9)
b2=new A.ap(B.R,B.N,B.U,B.V,B.S)
b2.r=D.bsf.gp(0)
l=b2.G()
d0.drawRRect(A.el(b6),l)
l.delete()
b2=new A.ap(B.R,B.N,B.U,B.V,B.S)
b2.r=D.B4.gp(0)
b2.b=B.aa
b2.c=2
l=b2.G()
d0.drawRRect(A.el(b6),l)
l.delete()
b7=a9?"HOME":"STOP "+b0
b8=new A.jR(new A.eu(b7,c5,c5,B.cQ,c5,c5,c5,c5,c5,c5,D.fj6),B.a3,B.bZ,new A.jA(1),c5,c5,c5,c5,B.bW,c5)
b8.el()
b2=b8.b
b3=b2.c
b2=b2.a.c
b8.a3(d5,new A.t(b5-b3/2,a4-b2.gbb(b2)/2))
if(a9)b9=c6.r===D.abO
else if(r===c6.w){b2=c6.r
b2=b2===D.Wm||b2===D.AB
b9=b2}else b9=!1
if(a9){b2=c6.gh4(0).gyS()
c0=(b2==null?c5:b2.c)===D.og?1:0}else c0=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b2=c6.gqd()
c1=b2.d<b2.c.length&&b9
c2=b9&&c6.r===D.AB
b2=c1?C.hsZ(c7,r):0
if(c2)b3=c6.ax?1:-0.3
else b3=a9&&b9?1:0.4
b4=b9&&c6.r===D.Wm?0.4:0
c3=c2&&c6.ax?0.5:0
if(a9&&b9)a9=new A.t(40,-110+Math.sin(e)*10)
else a9=c1?new A.t(44+Math.sin(f)*8,-66+Math.sin(w)*10):c5
C.S1(d5,new A.t(q+4,d),0,b4,-0.8,-0.2,c5,a9,new A.t(q-200,v),c0,b2,0,0.85,b3,c3,c7+r,-0.3)}d1=c8*0.28
this.bFR(d5,new A.t(d1,a3-6),c7,d3,d6)
if(d3)for(v=c7*1.6,u=d1-90,t=a3-10,r=0;r<7;++r){c4=B.k.F(v+r/7,1)
$.S()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=D.bqn.j(0.5*(1-c4)).gp(0)
l=m.G()
d0.drawCircle(u-c4*70,t-c4*18,6+c4*16,l)
l.delete()}if(c6.ay&&c6.r!==D.Wl)for(v=c7*1.2,u=d1+62,t=a3-40,r=0;r<5;++r){c4=B.k.F(v+r/5,1)
m=Math.sin(r+w)
$.S()
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=B.c.j(0.5*(1-c4)).gp(0)
l=k.G()
d0.drawCircle(u+m*5,t-c4*50,4+c4*10,l)
l.delete()}if(c6.r===D.AB&&c6.ax){b8=A.fv(c5,c5,c5,c5,A.cS(c5,c5,c5,c5,c5,c5,c5,c5,c5,A.l(c5,c5,B.cJ,c5,c5,c5,c5,c5,c5,c5,c5,24,c5,c5,B.u,c5,c5,!0,c5,c5,c5,c5,c5,A7.HW,c5,c5),"BEEP BEEP!"),B.a3,B.bZ,c5,B.dA,B.bW)
b8.el()
b8.a3(d5,new A.t(d1-b8.b.c/2+40,a2-96-Math.abs(Math.sin(c7*9))*6))}},
c9a(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=A.ar(D.bmH,D.bge,g)
m.toString
if(f){w=new A.aF($.S().r,B.ah,null,null,A.a([],x.v))
v=e.a
u=e.b
w.D(new A.aY(v-16,u))
t=u-36
s=u-56
w.D(new A.c5(v-9,t,v-7,s))
w.D(new A.aq(v+7,s))
w.D(new A.c5(v+9,t,v+16,u))
w.D(new A.bs())
t=A.I()
t.r=D.YK.gp(0)
d.aG(w,t)
for(w=v+0,t=u+-54,s=u+-72,r=d.a,u+=-76,q=0;q<4;++q){p=D.cWy[q]
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=D.YK.gp(0)
o.c=4
o.d=B.bE
n=o.G()
r.drawLine.apply(r,[w,t,v+p*24,s,n])
n.delete()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=m.gp(0)
n=o.G()
r.drawCircle(v+p*26,u,10,n)
n.delete()}}else{w=e.a9(0,D.ejm)
$.S()
v=A.I()
v.r=D.bcv.gp(0)
v.c=4
d.bo(e,w,v)
v=A.bJ(e.a9(0,D.ejn),16,60)
w=A.I()
w.r=m.gp(0)
d.dO(v,w)}},
bFR(a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6?Math.sin(a5*22)*1.6:Math.sin(a5*2)*0.4,a0=this.b,a1=a0.ay&&a0.r!==D.Wl?0.045:0,a2=a3.a
J.bm(a2.save())
a2.translate(a4.a,a4.b+d)
a3.ig(0,a1)
for(w=0;w<2;++w){v=D.dlT[w]
u=a0.ay&&a0.r!==D.Wl&&v>0
J.bm(a2.save())
a2.translate(v,-4+(u?4:0))
t=u?15:18
$.S()
s=new A.ap(B.R,B.N,B.U,B.V,B.S)
s.r=D.br3.gp(0)
r=s.G()
a2.drawCircle(0,0,t,r)
r.delete()
a2.rotate(a0.CW/18*180/3.141592653589793,0,0)
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=D.bjE.gp(0)
r=t.G()
a2.drawCircle(0,0,9,r)
r.delete()
for(q=0;q<4;++q){t=q*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=B.bn.gp(0)
p.c=2
r=p.G()
a2.drawLine.apply(a2,[0,0,s*9,t*9,r])
r.delete()}a2.restore()}o=A.wm(D.eZT,B.fE,B.fE,B.ip,B.i8)
$.S()
t=A.I()
t.sam(A.jo(D.efs,B.a78,D.dc4,F.a3h,B.x,e))
a3.az(o,t)
for(n=0;n<20;++n){t=-100+n*10
s=new A.ap(B.R,B.N,B.U,B.V,B.S)
s.r=D.d6f[B.o.F(n,4)].gp(0)
r=s.G()
a2.drawRect(A.bG(new A.a3(t,-26,t+10,-19)),r)
r.delete()}m=a0.r===D.AB&&a0.ax
l=[2,3,4,5]
for(t=a5*10,n=0;n<4;++n){s=-88+n*38
p=s+32
k=new A.a3(s,-66,p,-36)
J.bm(a2.save())
a2.clipRRect(A.el(A.bt(k,B.mV)),$.nz(),!0)
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.r=D.Xx.gp(0)
r=j.G()
a2.drawRect(A.bG(k),r)
r.delete()
j=l[n]
i=m?1:0.35
h=m?0.5:0
g=a0.ay&&a0.r===D.AB?1:0
f=m?Math.max(0,Math.sin(t+n))*6:0
C.S1(a3,new A.t(s+(p-s)/2,-10),f,g,0.5,-0.2,e,e,D.aJA,j,h,0,0.4,i,0,a5,0)
a2.restore()
i=A.bt(k,B.mV)
h=new A.ap(B.R,B.N,B.U,B.V,B.S)
h.r=D.aif.gp(0)
h.b=B.aa
h.c=2
r=h.G()
a2.drawRRect(A.el(i),r)
r.delete()}a0=A.bt(D.TB,B.mV)
t=A.I()
t.r=D.Xx.gp(0)
a3.az(a0,t)
J.bm(a2.save())
a2.clipRRect(A.el(A.bt(D.TB,B.mV)),$.nz(),!0)
C.S1(a3,new A.t(D.TB.gbL().a,-10),0,0,0.7,-0.1,e,e,D.aJA,6,0,0,0.4,0.5,0,a5,0)
a2.restore()
t=A.bt(D.TB,B.mV)
a0=A.I()
a0.r=D.aif.gp(0)
a0.b=B.aa
a0.c=2
a3.az(t,a0)
a0=A.I()
a0.r=Ap.FC.gp(0)
a3.ad(D.ehx,4,a0)
a0=A.I()
a0.r=D.Fp.gp(0)
a3.aP(D.f01,a0)
for(w=0;w<3;++w){v=D.dlV[w]
a0=A.bt(new A.a3(v,-96,v+28,-79),B.i9)
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=D.FB.gp(0)
r=t.G()
a2.drawRRect(A.el(a0),r)
r.delete()}a2.restore()},
aw(d){return!1}}
C.aAM.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.bfD.prototype={}
C.aAO.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.bfE.prototype={}
C.aAP.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.bfF.prototype={}
C.a5Q.prototype={
B(d){var w=null
return new A.a6(1/0,this.c,A.b4(w,w,w,new C.bia(w),B.ax),w)}}
C.bia.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=d.a,s=e*0.15,r=f/2,q=e/2,p=f*0.8,o=e*0.85,n=x.v,f*=0.2,m=0,l=0;l<w;l+=e){k=D.djT[B.o.F(m,6)]
j=$.S()
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.r=k.gp(0)
h=i.G()
t.drawRect(A.bG(new A.a3(l,0,l+v,u)),h)
h.delete()
if(B.o.F(m,3)===0){i=A.a([],n)
g=new A.aF(j.r,B.ah,null,null,i)
j=l+q
i.push(new A.aY(j,f))
i.push(new A.aq(l+o,r))
i.push(new A.aq(j,p))
i.push(new A.aq(l+s,r))
i.push(new A.bs())
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.r=B.c.j(0.85).gp(0)
h=j.G()
j=g.gbw().a.snapshot()
t.drawPath((g.e=new A.cm(j)).a,h)
h.delete()}++m}},
aw(d){return!1}}
C.tn.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aG(w,w,w,w,B.P3,w,w,w,new C.bQa(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a1,w,w,w,D.fgo,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c7(w,D.Xk,A.p(w,A.bl(!0,A.x(A.a([D.c0n,new A.D(D.bDe,A.B(u,B.m,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.m,w,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),B.f,w,w,D.b4T,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.I2.prototype={
B(d){var w=null,v=this.d,u=C.aPM(v),t=C.i9W(v),s=B.c.j(0.08),r=A.m(18),q=A.J(B.cJ.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fiS,w,w,w)],x.p)
if(this.e)p.push(D.elP)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.fT,w,w,w))
if(t!=null)p.push(new A.D(B.u0,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.Af,w,w,w),w))
return A.p(w,A.x(p,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bz,w,w,w)}}
C.VD.prototype={
R(){return new C.bkP(A.U(x.N,x.S),B.o.F(Date.now(),1e5))},
cUv(d){return this.f.$1(d)},
ge1(){return this.d}}
C.bkP.prototype={
gSt(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a2()
this.Pc()},
Pc(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Pc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bQW(u.a.d),$async$Pc)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.da9[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bQV(p,(o===$?u.d=q.c:o).a,r),$async$Pc)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.dY2(u,n))
return A.h(null,v)}})
return A.i($async$Pc,v)},
u7(d){return this.cln(d)},
cln(d){var w=0,v=A.j(x.H),u=this,t
var $async$u7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a4(t,!1).cd(A.dX(new C.dY3(d),!1,null,x.H)),$async$u7)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Pc()
return A.h(null,v)}})
return A.i($async$u7,v)},
gb4u(){var w,v,u,t=C.My(this.gSt()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)s.push(B.a.i(w[u].b))
return s},
a1V(d){return this.csz(d)},
csz(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a1V=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.M)(d),++s)r.push(d[s].ag())
w=2
return A.b(u.a.cUv(r),$async$a1V)
case 2:if(u.c!=null)u.m(new C.dY4(u,r))
return A.h(null,v)}})
return A.i($async$a1V,v)},
Ov(d){return this.bOs(d)},
bOs(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Ov=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.h76(t.gSt())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.Mj("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a4(s,!1).cd(A.dX(new C.dY0(q),!1,null,r)),$async$Ov)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.M)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bg(j,new C.dY1(p))
o=s.length
B.d.c3(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a1V(A.d0(s,0,A.dB(2,"count",x.S),r).dm(0)),$async$Ov)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ov,v)},
Xl(d,e){return this.bM4(0,e)},
bM4(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Xl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cj(null,null,!0,null,new C.dY_(e),o,null,!0,!0,x.y),$async$Xl)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.h76(u.gSt()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.M)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a1V(o),$async$Xl)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Xl,v)},
a9y(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.dXX(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.m(20)
u=A.J(B.aZ,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cx,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.UA,p,p,p),B.b0],s)
q=A.m(10)
r.push(A.p(p,A.d(i,p,p,p,p,p,p,D.fhh,p,p,p),B.f,p,p,new A.o(B.hK,p,p,q,p,p,B.n),p,p,p,p,B.BW,p,p,p))
return A.aB(p,A.d9(A.p(p,A.x(A.a([A.B(r,B.m,p,B.e,B.i,0,p,p),B.b0,A.d(e,p,2,p,p,p,p,D.foY,p,p,p),B.cL,A.d(f,p,3,B.a1,p,p,p,D.fi_,p,p,p)],s),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a9(B.ay,B.aE,B.x,w,p,p),B.n),p,p,p,p,B.ye,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
WP(d,e,f,g,h,i){return this.a9y(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.My(s.gSt()),p=s.gSt(),o=C.aPM(s.e),n=C.h76(p),m=s.a.e&&J.ad(p.z)<2,l=new C.dY5(s),k=C.hwp(p,1).length,j=C.hwA(p,1).length,i=C.hxu(p,1).length,h=B.c.j(0.07),g=A.m(20),f=A.J(B.cJ.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,F.a9V,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fmu,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.B(A.a([e,B.bd,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,F.a9S,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.pB,r,r,r),D.fLb],a1),B.m,r,B.e,B.i,0,B.p)],a1),B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.n),r,r,r,r,B.bz,r,r,r)
f=s.WP("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aD,new C.dY6(s,p),l.$1("kahoot"))
h=s.WP("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lt,new C.dY7(s,p),l.$1("fire"))
a0=s.WP("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.Br,new C.dY8(s,p),l.$1("catch"))
j=j!==0?new C.dYb(s,p):r
j=s.a9y("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hd,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.dYc(s,p):r
i=s.a9y("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.l0,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.WP("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.eR,new C.dYd(s,p),l.$1("journey"))
k=k!==0?new C.dYe(s,p):r
k=A.a([g,B.aN,D.fPb,B.O,A.ki(0.98,A.a([f,h,a0,j,i,e,s.a9y("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.ed,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.WP("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d1,new C.dYf(s,p),l.$1("school"))],a1),2,12,12,r,B.dR,!0),B.d4,A.B(A.a([D.bEY,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fhl,r,r,r)],a1),B.m,r,B.e,B.i,0,r,r),B.O],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.M)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ay(B.aZ,1,B.r,-1)
g=B.a.i(v.b)
if(g.length===0)g="Untitled game"
g=A.a([D.fvS,B.bd,new A.bz(1,B.bb,A.x(A.a([new A.y(g,r,B.hE,r,r,r,r,B.a1,r,1,r,r),new A.y(""+v.gaon(0).length+" questions \xb7 Kahoot style",r,B.Af,r,r,r,r,r,r,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),r)],a1)
if(v.gaon(0).length>=2){f=D.lu.j(0.2)
t=new A.ay(D.lu,1,B.r,-1)
g.push(A.aB(r,A.p(r,A.X(B.i2,D.lu,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bK(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dYg(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cJ.j(0.2)
t=new A.ay(B.cJ,1,B.r,-1)
f=A.aB(r,A.p(r,A.X(B.iW,B.cJ,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bK(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dYh(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.f9.j(0.2)
t=new A.ay(B.f9,1,B.r,-1)
B.d.v(g,A.a([B.bm,f,B.bm,A.aB(r,A.p(r,A.X(B.ea,B.f9,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bK(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dYi(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.p(r,new A.ce(B.aM,B.e,B.i,B.m,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bK(u,u,u,u),new A.bi(h,h,h,h),r,r,B.n),r,r,r,B.d2,B.bf,r,r,r))}if(s.a.e){j=m?new C.dY9(s):new C.dYa(a2)
i=A.m(18)
h=A.J(m?B.cJ:B.aZ,B.r,2)
g=m?B.cJ.j(0.12):B.dq
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aB(r,A.p(r,A.at(A.d(f,r,r,r,r,r,r,A.l(r,r,m?B.cJ:B.aB,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.Nc,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.fQ7)
k.push(B.aA)
k.push(D.aqI)
return new C.tn("Family Games \xb7 "+p.b,A.cf(k,r,D.bzh,r,r,B.ag,!1),B.fv,r)}}
C.a_f.prototype={
a5(){return"_KPhase."+this.b}}
C.alb.prototype={
R(){return new C.alc(D.aYe)},
gcZ(){return this.e}}
C.alc.prototype={
q(){var w=this.at
if(w!=null)w.a4(0)
w=this.ax
if(w!=null)w.a4(0)
this.a1()},
h2(d){var w,v=this
v.m(new C.bQv(v))
w=v.at
if(w!=null)w.a4(0)
v.at=A.df(B.fA,new C.bQw(v))},
aOf(){var w=this,v=w.ax
if(v!=null)v.a4(0)
w.m(new C.bQl(w))
v=w.at
if(v!=null)v.a4(0)
w.at=A.df(B.fj,new C.bQm(w))},
KG(d){var w
if(this.d!==D.abh)return
w=this.at
if(w!=null)w.a4(0)
this.b4q(d)},
b4q(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.k.V(500+500*B.k.E(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bQr(u,v,d))
u=v.ax
if(u!=null)u.a4(0)
v.ax=A.cK(B.rl,v.gkx(v))},
cHb(d){var w=this
if(w.d!==D.VU)return
if(w.e+1>=w.a.w.length)w.Y5()
else{w.m(new C.bQs(w))
w.aOf()}},
Y5(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Y5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a4(0)
p=u.x
t=u.a.w.length
s=C.bF5(p,u.w,t)
u.m(new C.bQo(u,s))
w=2
return A.b(C.Bx(u.a.e,s),$async$Y5)
case 2:r=e
t=u.a
w=3
return A.b(C.By(t.e,t.f,t.r,u.f),$async$Y5)
case 3:q=e
if(u.c!=null)u.m(new C.bQp(u,r,q))
return A.h(null,v)}})
return A.i($async$Y5,v)},
cHY(){var w,v,u,t,s=this,r=s.a,q=new A.e9()
q.d4(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.bk("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.dZ(r,q)
for(r=A.d0(r,0,A.dB(4,"count",x.S),A.T(r).c),u=r.$ti,r=new A.bS(r,r.gL(0),u.k("bS<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.bk(t,B.k.V(w*(0.35+q.ah()*0.5)),!1))}B.d.aW(v,new C.bQt())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.aYe===r){w=A.a([D.fLA,B.W,A.d(s,t,t,t,t,t,t,B.Kc,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fhu,t,t,t))
w.push(B.aA)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.wZ,B.K,t,t))
w.push(B.dS)
w.push(C.ue("Play",u.geX(u),B.cJ,B.i2,D.fr))
w=A.at(new A.D(B.em,A.x(w,B.m,t,B.e,B.P,0,B.p),t),t,t,t)
break A}if(D.aYf===r){w=A.at(A.d(""+u.z,t,t,t,t,t,t,D.fpt,t,t,t),t,t,t)
break A}if(D.abh===r||D.VU===r){w=u.cnZ()
break A}if(D.aYg===r){w=u.c9b()
break A}w=t}return new C.tn(s,w,B.fv,t)},
cnZ(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.VU,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aSF,j,j,j),B.b0],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.K8,j,j,j))
g.push(B.at)
f=A.m(14)
g.push(A.p(j,A.d(""+k.f,j,j,j,j,j,j,B.iK,j,j,j),B.f,j,j,new A.o(B.bA,j,j,f,j,j,B.n),j,j,j,j,B.G5,j,j,j))
g=A.B(g,B.m,j,B.e,B.i,0,j,j)
f=A.m(6)
w=i?0:B.k.E(k.as/k.a.w[k.e].r,0,1)
f=A.bx(f,A.kO(B.bA,j,k.as<5?B.f9:B.cJ,9,j,w,j),B.ap)
w=A.m(22)
v=A.J(B.cJ,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.l(j,j,e?D.lu:F.n7,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.O,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fgx,B.K,j,j)],h),B.m,j,B.e,B.P,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.frA,B.K,j,j)
w=A.E(A.p(j,A.at(u,j,j,j),B.f,j,j,new A.o(D.q_,j,v,w,j,j,B.n),j,j,j,j,B.fk,j,j,1/0),3)
v=A.a([],h)
for(u=k.gkx(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bQq(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aAH[o]
m=new A.aP(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([new A.y(D.aAW[o],j,D.fiu,j,j,j,j,j,j,j,j,j),B.at,new A.bz(1,B.bb,new A.y(r[t],j,D.fhq,j,j,j,j,B.a1,j,3,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.ape)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bTf)
v.push(A.aB(j,new A.Sj(A.p(j,new A.ce(B.aM,B.e,B.i,B.m,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bK(l,l,l,l),new A.bi(m,m,m,m),V.az8,j,B.n),j,j,j,j,B.eZ,j,j,j),p,B.b6,B.a2,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.ad,w,B.ad,A.E(A.ki(1.45,v,2,10,10,j,B.dR,!1),4)],h)
if(i)h.push(D.el3)
return new A.D(B.a_d,A.x(h,B.m,j,B.e,B.i,0,B.p),j)},
c9b(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cHY(),m=x.p,l=A.a([D.b8J,A.at(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.pB,o,o,o),o,o,o),A.at(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.UG,o,o,o),o,o,o),B.aN],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cJ.j(0.25):B.dq
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cJ:B.bA,1,B.r,-1)
q=w<3?D.dcl[w]:""+(w+1)
s=s?B.u:B.Q
l.push(A.p(o,new A.ce(B.aM,B.e,B.i,B.m,o,B.p,o,0,A.a([new A.a6(34,o,new A.y(q,o,B.n_,o,o,o,o,o,o,o,o,o),o),new A.bz(1,B.bb,new A.y(t.a,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new A.y(""+t.b,o,B.iK,o,o,o,o,o,o,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bK(r,r,r,r),new A.bi(u,u,u,u),o,o,B.n),o,o,o,B.cu,B.eT,o,o,o))}l.push(B.W)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.I2(m,v,p.CW,o))
l.push(B.aN)
l.push(A.at(C.ue("Back to the games",new C.bQn(p),B.cJ,B.l8,D.fr),o,o,o))
return A.cf(l,o,B.fk,o,o,B.ag,!1)}}
C.Th.prototype={
R(){return new C.al8(A.U(x.de,x.er))}}
C.al8.prototype={
gCH(){var w,v=this,u=v.d
if(u===$){w=C.hcG(v.a.c.ag())
v.d!==$&&A.bH()
v.d=w
u=w}return u},
gl1(d){var w,v,u=this,t=u.e
if(t===$){w=u.gCH().b
v=$.au()
u.e!==$&&A.bH()
t=u.e=new A.as(new A.bb(w,B.b3,B.aO),v)}return t},
cbQ(d){return this.f.c4(0,d,new C.bPW(d))},
Z(){this.a2()
var w=this.gCH().c
if(w.length===0)w.push(C.fZR(null,0,20,""))},
q(){var w,v,u=this.gl1(0)
u.S$=$.au()
u.P$=0
for(u=this.f,u=new A.dq(u,u.r,u.e);u.C();)for(w=J.aW(u.d);w.C();){v=w.gT(w)
v.S$=$.au()
v.P$=0}this.a1()},
cH1(){if(this.gCH().c.length>=12)return
this.m(new C.bPX(this))},
jy(d){var w,v,u=this,t=u.gCH()
t.b=B.a.i(u.gl1(0).a.a)
w=t.gaon(0)
if(t.b.length===0||w.length<2){u.c.K(x.q).f.U(D.f9q)
return}v=t.c
B.d.a7(v)
B.d.v(v,w)
v=u.c
v.toString
A.a4(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bQ6(),r=x.p,q=A.a([A.bM(!1,D.fAT,t,t,!0,t,t,t,u.gbo_(u),t,t)],r),p=A.a([D.fPJ,B.ad,A.aL(t,B.Y,!1,t,!0,B.t,t,A.aM(),u.gl1(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ai,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.a9,t,t,t,t,t,t,t,t,t,t,t,B.fT,!0,B.a3,t,B.an,t,t,t,t),B.aA],r)
for(w=0;v=u.gCH().c.length,w<v;++w)B.d.v(p,A.a([new A.fe(new C.bQ5(u,w,s),t)],r))
if(v<12)p.push(A.at(C.ue("\uff0b Add a question",u.gcH0(),B.aZ,t,B.c),t,t,t))
return new C.tn("Make your game",A.cf(p,t,D.bze,t,t,B.ag,!1),q,t)}}
C.aq9.prototype={
R(){return new C.aEi(A.a([],x._))},
bu(){return this.r.$0()},
q6(){return this.w.$0()},
ge1(){return this.c}}
C.aEi.prototype={
Z(){var w,v
this.a2()
this.w3()
w=this.a
v=w.c
if(v.length!==0)C.a7A(v,w.e,w.d.w)},
vU(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h9C(r,t.e,!1,s.w,new C.dZI(u),null,s),$async$vU)
case 2:w=3
return A.b(u.w3(),$async$vU)
case 3:return A.h(null,v)}})
return A.i($async$vU,v)},
a05(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a05=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h9C(r,t.e,!0,s.w,new C.dZH(u),null,s),$async$a05)
case 2:w=3
return A.b(u.w3(),$async$a05)
case 3:return A.h(null,v)}})
return A.i($async$a05,v)},
w3(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$w3=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.B1(q.a.c),$async$w3)
case 7:p=e
if(q.c!=null)n=q.e||J.cL(p)
else n=!1
if(n)q.m(new C.dZK(q,p))
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
return A.b(C.GV(q.a.c).d7(0,B.p3),$async$w3)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dZL(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dZM(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$w3,v)},
OR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$OR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.K(s).f.U(D.f90)
w=3
return A.b(C.GV(t.a.c),$async$OR)
case 3:r=e
w=4
return A.b(C.fPE(t.a.c,r),$async$OR)
case 4:q=e
w=5
return A.b(C.GV(t.a.c),$async$OR)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dZG(t,p))
o=t.c.K(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(null,null,null,q?B.dE:B.cW,null,B.t,null,s,null,B.mG,null,null,null,null,null,null,null,null,null,null))
t.a.q6()
case 1:return A.h(u,v)}})
return A.i($async$OR,v)},
Ia(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ia=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ii8(l),$async$Ia)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hMc(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b09(q,p.e,l,"Each family tree costs $"+B.k.ac(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Ia)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.ht4(r)
o=Date.now()
n=t.a.c
m=new C.kN(l,r.toUpperCase(),p,!0,B.Y,D.D_,new A.V(o,0,!1),0,n,D.u9,B.ca)
w=5
return A.b(C.a39(n,m),$async$Ia)
case 5:w=6
return A.b(t.w3(),$async$Ia)
case 6:t.a.bu()
t.a.q6()
if(t.c==null){w=1
break}t.EG(m)
case 1:return A.h(u,v)}})
return A.i($async$Ia,v)},
EG(d){return this.cgJ(d)},
cgJ(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$EG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.B1(u.a.c),$async$EG)
case 2:n=l.pT(k.dH(f,new C.dZJ(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hF(m,new C.aq3(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$EG)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a39(u.a.c,o),$async$EG)
case 6:case 5:w=7
return A.b(u.w3(),$async$EG)
case 7:u.a.q6()
return A.h(null,v)}})
return A.i($async$EG,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.J,o=new C.u1(p)
if(r.e)return A.at(A.mS(q,p?B.bs:B.bn,q,q,q,q,q,q,q,q),q,q,q)
if(J.ct(r.d)){w=p?B.e3:B.c
v=A.m(15)
u=A.aH(!1,B.a2,!0,q,A.aO(!1,q,!0,A.p(q,D.bQW,B.f,q,q,new A.o(B.aW.j(0.12),q,A.J(B.aW,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cM,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcfN(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.FX(A.p(q,A.x(A.a([u,B.aN,t,B.O,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bn,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.dS,A.bE(D.fSY,q,r.gaRq(),A.bo(B.bP,q,q,q,q,q,As.a_C,q,new A.b7(A.m(12),B.a0),q,q,q))],x.p),B.m,q,B.e,B.i,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bBX,q,q,1/0),15,B.af,1.05,D.ab3,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b0],v)
if(J.cL(r.d))w.push(A.aG(q,q,q,q,A.X(B.z2,B.aW,q,q,q,q),q,q,q,new C.dZO(r),q,q,q,q,"Sync family trees with database",q))
if(J.cL(r.d))w.push(A.aG(q,q,q,q,A.X(B.yX,B.aW,q,q,q,q),q,q,q,r.gaga(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dl(E.aq9,D.fyb,r.gaRq(),A.bo(B.bP,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ad)
u.push(new C.FX(r.cDk(J.r(r.d,s),o),14,B.af,1,D.ab3,q))
B.d.v(w,u)}return A.x(A.a([p,B.aA,A.x(w,B.m,q,B.e,B.i,0,B.p)],v),B.E,q,B.e,B.i,0,B.p)},
cDk(d,e){var w=null,v=e.a,u=v?B.e3:B.c,t=A.m(14),s=A.J((v?B.e9:B.bO).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.eq,10)],x.V),q=A.m(14),p=A.p(w,D.bQ_,B.f,w,w,new A.o(B.aW.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaph(),m=d.d?"":" \xb7 Public",l=d.y===D.kH?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bD,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.i,0,B.p),1)
return A.p(w,A.aH(!1,B.a2,!0,w,A.aO(!1,q,!0,new A.D(B.bz,A.B(A.a([p,B.bd,l,A.X(B.O0,v?B.bs:B.bn,w,w,w,w)],k),B.m,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dZN(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aq3.prototype={
R(){return new C.aEf(A.a([],x._),A.aX(x.N),A.b8V())},
bu(){return this.r.$0()},
ge1(){return this.c}}
C.aEf.prototype={
Z(){var w,v,u=this
u.a2()
u.d=u.a.w
u.acX()
w=u.a
v=w.c
if(v.length!==0)C.a7A(v,w.e,w.d.w)},
q(){var w=this.w
w.S$=$.au()
w.P$=0
this.a1()},
a34(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a34=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.y_("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cj(null,null,!0,null,new C.dZ8(r),s,null,!0,!0,x.y),$async$a34)
case 3:if(e!==!0||t.c==null){w=1
break}t.JH()
t.m(new C.dZ9(t,r))
w=4
return A.b(t.u3(),$async$a34)
case 4:t.a.bu()
t.y_(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a34,v)},
ct9(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aV.x1$.push(new C.dZ3(w,f,d,e))},
aTG(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dr()
u.ef(w,v,0,1)
u.jV(q,q,1,1)
this.w.sp(0,u)},
baY(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eK(new Float64Array(16))
q.e6(r)
w=q.CM()
v=B.k.E(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dr()
t.ef(r,u,0,1)
t.jV(v,v,1,1)
t.ef(-r,-u,0,1)
t.iP(0,q)
s.sp(0,t)},
acX(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$acX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.B1(u.a.c),$async$acX)
case 2:t=s.pT(r.dH(e,new C.dYv(u)))
if(t!=null&&u.c!=null)u.m(new C.dYw(u,t))
return A.h(null,v)}})
return A.i($async$acX,v)},
y_(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
vU(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.h9C(o,t,!1,r,new C.dYN(u),q.a,s),$async$vU)
case 2:n=A
m=J
w=3
return A.b(C.GV(u.a.c),$async$vU)
case 3:p=n.pT(m.dH(e,new C.dYO(u)))
if(p!=null&&u.c!=null)u.m(new C.dYP(u,p))
return A.h(null,v)}})
return A.i($async$vU,v)},
JH(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cD(w,0)},
u3(){var w=0,v=A.j(x.H),u=this,t,s
var $async$u3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a39(t,s),$async$u3)
case 2:return A.h(null,v)}})
return A.i($async$u3,v)},
a1A(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a1A=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uf(q,t.a.c)){t.y_("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iji(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a1A)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.JH()
t.m(new C.dZ2(t,r))
w=4
return A.b(t.u3(),$async$a1A)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1A,v)},
b17(){var w=this.c
w.toString
A.a4(w,!1).cd(A.dX(new C.dYK(this),!1,null,x.H))},
a0j(){return this.cgL()},
cgL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0j=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.uf(m,t.a.c)){t.y_("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.P(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.dZ_(),A.T(s).k("Y<1>")).gL(0)
s=A.eD([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("cs.E"))
B.d.fd(p)
s=t.c
s.toString
w=3
return A.b(A.bV(B.L,null,new C.dZ0(n,t,new C.u1(m.ax.a===B.J),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a0j)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.JH()
t.m(new C.dZ1(t,o))
w=6
return A.b(t.u3(),$async$a0j)
case 6:case 5:if(o.a&&t.c!=null)t.b17()
case 1:return A.h(u,v)}})
return A.i($async$a0j,v)},
Wc(d){return this.bBb(d)},
bBb(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uf(r,t.a.c)){t.y_("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cj(null,null,!0,null,new C.dYj(t,d),r,null,!0,!0,x.P),$async$Wc)
case 3:s=f
if(s==null){w=1
break}t.JH()
t.m(new C.dYk(t,s))
w=4
return A.b(t.u3(),$async$Wc)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wc,v)},
a3q(d){return this.cFu(d)},
cFu(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a3q=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.cj(null,null,!0,null,new C.dZb(u,d,new C.u1(s.ax.a===B.J)),t,null,!0,!0,x.H),$async$a3q)
case 2:return A.h(null,v)}})
return A.i($async$a3q,v)},
cd2(d){var w=this,v=w.d
v===$&&A.c()
if(C.uf(v,w.a.c))w.Ow(d)
else w.a3q(d)},
aiD(d,e){return this.cx7(d,e)},
cx7(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aiD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cj(null,null,!0,null,new C.dZ5(new C.u1(r.ax.a===B.J),d,e),s,null,!0,!0,x.H),$async$aiD)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aiD,v)},
If(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$If=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kH?3:5
break
case 3:w=6
return A.b(C.fY5(t.a.c),$async$If)
case 6:s=e
o=t.a
r=C.hht(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.aiD(!s,!r),$async$If)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aPV(o,t.a.c)){t.y_("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.ld(o,"Cancel","Remove",q.y===D.kH?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$If)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aPR(t.a.c,t.d.a),$async$If)
case 11:t.a.bu()
o=t.c
if(o==null){w=1
break}A.iS(o,null)
case 1:return A.h(u,v)}})
return A.i($async$If,v)},
aat(d){return this.bMl(d)},
bMl(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$aat=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uf(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b2(s,new C.dYl(p))){o=A.T(s)
p.a=A.pT(new A.cQ(new A.Y(s,new C.dYm(d),o.k("Y<1>")),new C.dYn(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.JH()
t.m(new C.dYo(t,s,d,q))
w=3
return A.b(t.u3(),$async$aat)
case 3:t.y_(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$aat,v)},
Ow(d){return this.bOw(d)},
bOw(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ow=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uf(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a3q(d),$async$Ow)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cj(null,null,!0,null,new C.dYs(t,d),r,null,!0,!0,x.P),$async$Ow)
case 6:s=f
if(s==null){w=1
break}t.JH()
t.m(new C.dYt(t,s))
w=7
return A.b(t.u3(),$async$Ow)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ow,v)},
cDJ(){var w=this,v=w.d
v===$&&A.c()
if(!C.uf(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dZa(w))
w.u3()},
Z6(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Z6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aPV(n,t.a.c)){t.y_("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.au()
r=new A.as(B.ar,s)
q=t.d.e
p=A.bq(new A.N(q,t.gcbw(),A.T(q).k("N<1,n>")).c0(0,new C.dYF()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cj(null,null,!0,null,new C.dYG(t,new C.u1(n.ax.a===B.J),p,r),q,null,!0,!0,x.y),$async$Z6)
case 3:o=e
r.S$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.JH()
t.m(new C.dYH(t,p))
w=4
return A.b(t.u3(),$async$Z6)
case 4:t.y_("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Z6,v)},
cbx(d){return B.a.i(d.toLowerCase())},
cfx(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uf(v,w)
t=r.d
s=C.i8o(t)
C.iic(q,t.b,u,C.i8n(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.J,m=new C.u1(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.dZi(),A.T(l).k("Y<1>")).gL(0)
l=n?B.c0:B.iu
v=A.X(B.a0N,n?B.bs:B.bn,o,o,o,18)
u=x.p
v=A.a([new A.D(B.BM,A.aO(!1,o,!0,new A.D(B.ht,A.B(A.a([v,B.bm,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.P,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dZj(p,d),o,o,o,o,o,o,o),o),new A.D(B.nr,p.bZF(m),o)],u)
if(p.d.y===D.kH){t=B.rL.j(0.15)
s=A.m(12)
r=A.J(B.rL.j(0.45),B.r,1)
q=C.GT(p.d,p.a.c)
v.push(new A.D(B.yh,A.p(o,A.B(A.a([D.bVn,B.at,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iB,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b0],u)
if(C.uf(p.d,p.a.c)&&p.e.length!==0)u.push(new C.G7("Undo",B.rA,p.gcDI(),m,o,o))
u.push(new C.G7("Family Book",D.bKI,p.gcfw(),m,B.tC,o))
u.push(new C.G7("Family games",B.on,p.gcfI(),m,B.aD,o))
if(C.uf(p.d,p.a.c))u.push(new C.G7("Display settings",B.Cw,p.gcgK(),m,B.b_,o))
u.push(new C.G7("Sync",B.yX,p.gaga(),m,o,o))
t=p.d
if(t.y===D.kH||C.aPV(t,p.a.c)){t=p.d.y===D.kH?"Remove shared tree":"Delete tree"
u.push(new C.G7(t,B.ea,p.gbMv(),m,B.f9,o))}if(C.uf(p.d,p.a.c))u.push(new C.G7("Add member",B.uq,new C.dZk(p),m,B.bP,o))
v.push(new A.D(Z.akf,A.B(u,B.m,o,B.e,B.i,0,o,o),o))
if(p.d.gaph()===0){u=A.at(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cz(new C.dZl(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?N.a0R:A6.O1,o,o,o,o,o)
v.push(A.at(A.hr(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dZm(p),o),o,o,o))}return A.c7(o,l,A.bl(!0,A.x(v,B.E,o,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bZF(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fL.j(0.35),B.dr,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.X(B.yS,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aH(!1,B.a2,!0,m,A.aO(!1,m,!0,A.p(m,D.bYw,B.f,m,m,new A.o(B.c.j(0.16),m,A.J(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cM,!0,m,m,m,m,m,m,m,m,m,m,m,n.gaga(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)
r=n.d
q=A.d(r.b,m,1,B.a1,m,m,m,D.fjv,m,m,m)
r=r.gaph()
p=n.d.gaph()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.E(A.x(A.a([q,B.bD,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a7,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.i,0,B.p),1)],o)
if(C.uf(n.d,n.a.c))p.push(A.aG(m,m,m,m,D.bVA,m,m,m,n.gcqu(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.jU:B.nw
r=r?"Private":"Public"
r=A.E(n.avJ(q,"Privacy",r,n.a.d.w?n.gcCH():m),1)
q=A.E(n.avJ(B.yY,"Tree code",n.d.c,new C.dYu(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ad,A.B(A.a([r,B.ac,q,B.ac,A.E(n.avJ(D.bMq,"Collaborators",p,n.gc3i()),1)],o),B.m,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.kH){s=B.c.j(0.15)
B.d.v(p,A.a([B.O,A.aH(!1,B.a2,!0,A.m(999),A.aO(!1,A.m(999),!0,new A.D(B.h5,A.B(A.a([A.X(B.pd,B.c,m,m,m,14),B.en,A.d("View only",m,m,m,m,m,m,B.aSM,m,m,m)],o),B.m,m,B.e,B.P,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.aj)],o))}return A.p(m,A.bx(u,new A.an(B.a_,m,B.ab,B.t,A.a([t,new A.D(B.G8,A.x(p,B.E,m,B.e,B.i,0,B.p),m)],o),m),B.ap),B.f,m,m,new A.o(m,m,m,w,v,D.c1O,B.n),m,m,m,m,m,m,m,1/0)},
avJ(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aH(!1,B.a2,!0,A.m(14),A.aO(!1,A.m(14),!0,new A.D(F.alp,A.x(A.a([A.X(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.a1,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.Q,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.vb,A.d(f,w,1,B.a1,w,w,w,G.Ac,w,w,w)],x.p),B.m,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)}}
C.bfH.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gan(r)&&s.c.length===0)return B.bJ
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bfK(s,t),new A.av(w,v))],x.p)
r=r.gdS(r)
B.d.v(u,r.dF(r,new C.ddp(this),x.l))
r=s.c
B.d.v(u,new A.N(r,new C.ddq(this),A.T(r).k("N<1,v>")))
return new A.D(B.u6,new A.a6(w,v,new A.an(B.a_,t,B.ab,B.f,u,t),t),t)}}
C.Kt.prototype={}
C.Gb.prototype={}
C.bfJ.prototype={
gbjq(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aJW.prototype={}
C.bfK.prototype={
bO9(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.S()
v=A.I()
v.r=B.bB.j(0.75).gp(0)
v.c=2
v.d=B.bE
d.bo(new A.t(n,w),new A.t(m,w),v)
u=(n+m)/2
t=new A.aF(q.r,B.ah,null,null,A.a([],x.v))
q=w+5.5
t.D(new A.aY(u,q))
s=w-1.1
r=w-8.8
t.D(new A.kY(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.D(new A.kY(u+4.95,r,u+9.9,s,u,q))
t.D(new A.bs())
q=A.I()
q.r=B.c.gp(0)
d.ad(new A.t(u,w),9,q)
q=A.I()
q.r=B.bB.gp(0)
d.aG(t,q)},
bO7(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aW(a0,new C.ddK())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.b2(a0,new C.ddL(f))
t=new A.N(a0,new C.ddM(f),A.T(a0).k("N<1,K>")).c0(0,new C.ddN()).cH(0,1/0,B.vz)
w=f.a
d.bo(f,new A.t(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.M)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.G()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.mN(m)
i=Math.min(10,l/2)
l=$.S()
h=A.a([],q)
g=new A.aF(l.r,B.ah,null,null,h)
h.push(new A.aY(w,v-i))
l=j*i
h.push(new A.c5(w,v,w+l,v))
h.push(new A.aq(n-l,v))
h.push(new A.c5(n,v,n,v+i))
h.push(new A.aq(n,o.b))
k=e.G()
n=g.gbw().a.snapshot()
r.drawPath((g.e=new A.cm(n)).a,k)
k.delete()}},
a3(d,e){var w,v,u,t,s,r,q,p,o
$.S()
w=A.I()
w.r=B.bP.j(0.75).gp(0)
w.c=2.2
w.b=B.aa
w.d=B.bE
w.e=B.dT
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.M)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bO7(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.G()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.M)(v),++s){q=v[s]
if(q.c)this.bO9(d,w,q.a,q.b)}},
aw(d){return d.b!==this.b}}
C.bjq.prototype={
gc9d(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aBc
switch(w.c.a){case 0:return D.cVf
case 1:return D.d69
case 2:return D.dnF}},
gc9g(){var w=this.c,v=C.hsn(w.w),u=C.hsn(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.J,q=t.gc9d(),p=t.c,o=M.bDF(p.f),n=t.gc9g(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gak(q).j(0.35),B.cH,10)],m),k=r?B.av:B.c,j=A.J(r?B.av:B.c,B.r,2)
if(o!=null)w=A.tr(B.A,s,B.cc,B.bU,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gak(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gak(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a9(B.a5,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hT(w,B.ap),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a9(B.ay,B.aE,B.x,q,s,s),B.a6),s,56,s,s,B.Go,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.J(r?B.av:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fu_,s,s,s),B.f,s,s,new A.o(B.cg,s,w,j,s,s,B.n),s,s,s,s,D.bDT,s,s,s),s,s,s,-6,-4,s))}k=r?B.cp:B.c
j=A.m(8)
w=A.J(B.d.gI(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dB,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cp,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bn,s,s,s,s,s,s,s,s,7.5,s,s,B.a7,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aB(s,new A.a6(84,112,A.x(A.a([new A.an(B.a_,s,B.ab,B.f,l,s),B.au,A.p(s,A.x(p,B.m,s,B.e,B.P,0,B.p),B.f,s,D.b33,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bE3,s,s,s)],v),B.m,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.beM.prototype={
a3(d,e){var w,v,u,t,s,r,q
$.S()
w=A.I()
v=this.b
u=v?B.c:D.bfS
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.G()
t.drawCircle(r,s,1,q)
q.delete()}},
aw(d){return d.b!==this.b}}
C.bxg.prototype={
B(d){var w=this,v=null,u=new C.fgN(w),t=w.c,s=t?B.cp:B.c,r=A.m(12),q=u.$3(B.hM,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bA:B.f6,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.yV,"Zoom out",w.e)
return A.aH(!1,B.a2,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bA:B.f6,v,v,v,1,v,v,v,v,v,22),u.$3(B.anJ,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.P,0,B.p),B.f,s,4,v,B.dm,v,v,v,B.aj)}}
C.bmD.prototype={
B(d){var w=this,v=null,u=B.bP.j(0.15),t=A.J(B.bP,B.r,2),s=w.e,r=x.p
t=A.aB(v,A.p(v,A.x(A.a([A.X(s?N.a0R:A6.O1,B.bP,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fq8,v,v,v)],r),B.m,v,B.b8,B.i,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fnY,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.N(s,new C.eR5(w),A.T(s).k("N<1,v>")))
B.d.v(u,t)}return new A.a6(84,v,A.x(u,B.m,v,B.e,B.i,0,B.p),v)}}
C.a_s.prototype={
R(){return new C.aCJ()},
bu(){return this.Q.$0()},
ge1(){return this.w}}
C.aCJ.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a2()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.au()
r.d!==$&&A.aQ()
r.d=new A.as(new A.bb(t,B.b3,B.aO),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.as(new A.bb(t,B.b3,B.aO),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.as(new A.bb(t,B.b3,B.aO),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.as(new A.bb(t,B.b3,B.aO),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.as(new A.bb(t,B.b3,B.aO),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.as(new A.bb(t,B.b3,B.aO),s)
t=u?q:v.c
r.y=t==null?D.yv:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.i9X(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.S$=$.au()
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
v.a1()},
PY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$PY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hht(p.y,p.w)
w=3
return A.b(A.lq(t.a.w,B.IT),$async$PY)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b09(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$PY)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hMd(p.y,p.w)
t.a.bu()
case 5:w=7
return A.b(Au.H4(78,800),$async$PY)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dty(t,q))
case 1:return A.h(u,v)}})
return A.i($async$PY,v)},
c9f(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hU(B.o.u(1000*Date.now()),w,D.yv,null,null,null,"","","","","",1,!1,0)
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
s=v.aED(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a4(k,!1).O(s)},
aa4(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aa4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cj(null,null,!0,null,new C.dtx(r),s,null,!0,!0,x.y),$async$aa4)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a4(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aa4,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.J,i=new C.u1(j),h=l.a.e,g=A.T(h).k("Y<1>"),f=A.C(new A.Y(h,new C.dtH(l),g),g.k("L.E"))
h=j?B.e3:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bCj,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hc(A.aO(!1,k,!0,new A.D(B.m6,A.X(B.ea,B.p0,k,k,k,17),k),B.cM,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbJ8(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jK:B.jb
t=M.bDF(l.as)
if(l.as==null)s=A.X(B.p6,j?B.bs:B.bn,k,k,k,40)
else s=k
s=A.at(A.aB(k,new A.an(B.a_,k,B.ab,B.t,A.a([A.h7(u,t,s,k,42),A.ao(0,A.h7(B.bP,k,D.bP2,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc9c(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aCL(t,"Full name",B.mL,1,1,i,B.ml)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.W,new C.bjo(i,u,new C.dtI(l),k)],v),B.m,k,B.e,B.i,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bvM],q)
o=l.a.e
B.d.v(p,new A.N(o,new C.dtJ(),A.T(o).k("N<1,ev<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bvO],q)
B.d.v(q,new A.N(f,new C.dtL(),A.T(f).k("N<1,ev<n?>>")))
o=A.x(A.a([t,B.am,new C.adv(i,r,"Who is their parent?",p,new C.dtM(l),k,o),B.aA,n,B.am,new C.adv(i,m,"Who is their spouse / partner?",q,new C.dtN(l),k,o)],v),B.ak,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.c()
q=C.aCL(q,"Birth date",D.amP,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aCL(m,"Birth place",B.a15,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aCL(n,"Date of death (if deceased)",D.aoX,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aCL(p,"Occupation",B.a2g,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ab,B.t,w,k),B.aA,s,B.bu,new C.adw(i,"Identity",u,k),B.ad,new C.adw(i,"Family links",o,k),B.ad,new C.adw(i,"Life details",A.x(A.a([q,B.W,m,B.W,n,B.W,p,B.W,C.aCL(r,"Notes",B.lb,5,3,i,k)],v),B.m,k,B.e,B.i,0,B.p),k),B.ad,new C.aCK(i,"Child order",l.cgZ(l.at),new C.dtO(l),new C.dtP(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.h6V(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dtQ(l):k
B.d.v(r,A.a([B.W,new C.aCK(i,"Visible in tree",u,w,new C.dtR(l),k)],v))}r.push(B.W)
w=j?B.jK:B.jb
u=A.m(14)
t=A.J(j?B.e9:B.bO,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.Q,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iI(k,B.bP,k,B.af,k,new C.dtS(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,N.ajT,k,k,k))
r.push(B.bu)
w=j?B.aP:B.av
j=j?B.e9:B.bO
r.push(A.B(A.a([A.E(A.dI(B.nM,new C.dtK(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.ck,k,new A.b7(A.m(14),B.a0),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bd,A.E(A.bE(D.f1f,k,l.gc9e(),A.bo(B.aW,k,k,0,B.c,k,B.ck,k,new A.b7(A.m(14),B.a0),k,k,k)),2)],v),B.m,k,B.e,B.i,0,k,k))
r.push(B.au)
return A.en(B.fv,k,B.af,h,new A.a6(420,k,A.cg(A.x(r,B.ak,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ag),k),D.akJ,k,B.ak6,new A.b7(g,B.a0),k,k)},
cgZ(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.adw.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jK:B.jb,s=A.m(16)
return A.x(A.a([new A.D(D.al9,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.J(v?B.e9:B.bO,B.r,1),s,w,w,B.n),w,w,w,w,B.bf,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)}}
C.bjp.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e3:B.c,r=A.m(12),q=A.J((t?B.e9:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.an
w=A.l(u,u,t?B.aP:B.av,u,u,u,u,u,u,u,u,14,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aL(u,B.Y,!1,u,!0,B.t,u,A.aM(),v.d,u,u,u,u,u,2,A.br(u,B.eG,u,B.vU,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bs:B.bn,u,u,u,u,u,u,u,u,u,u,u,B.cy,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bP,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ai,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a3,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.adv.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e3:B.c,s=A.m(12),r=A.J((u?B.e9:B.bO).j(0.85),B.r,1),q=A.X(B.rv,u?B.bs:B.bn,v,v,v,v),p=A.l(v,v,u?B.aP:B.av,v,v,v,v,v,v,v,v,14,v,v,B.a7,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e3:B.c
return A.p(v,new A.DZ(A.T7(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bn,v,v,v,v,v,v,v,v,v,v,v,B.cy,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kG,v,v,v)}}
C.bjo.prototype={
B(d){var w=new C.dtT(this)
return A.B(A.a([w.$3(D.w2,"Male",B.OG),B.ac,w.$3(D.og,"Female",B.Ov),B.ac,w.$3(D.yv,"Other",B.nv)],x.p),B.m,null,B.e,B.i,0,null,null)}}
C.aCK.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jK:B.jb,r=A.m(14),q=A.J(t?B.e9:B.bO,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.av,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bn,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.i,0,B.p),1),new C.aIY(u,B.yV,w.f,v),B.bm,new C.aIY(u,B.hM,w.r,v)],o),B.m,v,B.e,B.i,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eB,v,v,v)}}
C.aIY.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bP.j(0.12)
else w=s.c.a?B.e3:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bP
else t=(s.c.a?B.bs:B.bn).j(0.4)
return A.aH(!1,B.a2,!0,v,A.aO(!1,u,!0,new A.a6(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.aj)}}
C.adx.prototype={
bSa(d){switch(d.a){case 0:return B.bP
case 1:return B.bB
case 2:return B.cY}},
bSb(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aY7(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
Ak(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e3:B.c
u=A.m(12)
t=A.J((w?B.e9:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bP,p,p,p,18),B.at],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bn,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.av,p,p,p,p,p,p,p,p,14,p,p,B.Q,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.i,0,B.p),1))
return A.p(p,A.B(r,B.E,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cu,B.yd,p,p,1/0)},
aeC(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jK:B.jb,s=A.m(16),r=A.J(v?B.e9:B.bO,B.r,1)
return A.x(A.a([new A.D(D.al9,u,w),A.p(w,A.x(e,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bS,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hxh(r,q),o=q.c,n=t.bSa(o),m=M.bDF(q.f),l=t.e.a,k=l?B.e3:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kH?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bs:B.bn,s,s,s,s,s,s,s,s,12,s,s,B.a7,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.J(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.I,12)],x.V)
u=n.j(0.12)
l=A.at(A.p(s,A.h7(u,m,m==null?A.X(B.p6,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.ev,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.J(n.j(0.45),B.r,1)
v=A.at(A.p(s,A.d(t.bSb(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mH,s,s,s),s,s,s)
u=x.p
i=A.a([t.Ak("Full name",i,B.mL)],u)
if(p>0)i.push(t.Ak("Child order","#"+p,B.OB))
r=A.a([h,B.au,r,B.aN,l,B.W,v,B.bu,t.aeC("Identity",i),B.ad,t.aeC("Life details",A.a([t.Ak("Birth date",q.w,D.amP),t.Ak("Birth place",q.x,B.a15),t.Ak("Date of death",q.y,D.aoX),t.Ak("Occupation",q.z,B.a2g)],u)),B.ad,t.aeC("Family links",A.a([t.Ak("1. Parent",t.aY7(q.d),B.GC),t.Ak("2. Spouse",t.aY7(q.e),B.GS)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ad,t.aeC("Notes",A.a([t.Ak("Notes",q,B.lb)],u))],u))
r.push(B.bu)
r.push(A.bE(B.Kh,s,new C.du2(d),A.bo(B.aW,s,s,s,s,s,B.ck,s,new A.b7(A.m(14),B.a0),s,s,s)))
return A.eS(s,k,new A.cU(B.lW,A.cg(A.x(r,B.ak,s,B.e,B.P,0,B.p),B.t,s,B.y,s,B.vY,s,s,B.ag),s),s,s,s,B.Gb,B.d8,s,new A.b7(j,B.a0),s)}}
C.G7.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bs:B.bn
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.w0,A.hc(A.aH(!1,B.a2,!0,A.m(8),A.aO(!1,A.m(8),!0,new A.a6(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.aj),u,v.c,u,u),u)}}
C.aq6.prototype={
eZ(){var w,v,u=this,t=x.N,s=A.U(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a8().ae())
w=u.c
v=A.T(w).k("N<1,a8<n,@>>")
w=A.C(new A.N(w,new C.ccT(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jh(w,new C.ccU(),t,x.fO))
return s}}
C.aq7.prototype={
R(){return new C.aEh(A.a([],x.bF))},
gcZ(){return this.c}}
C.aEh.prototype={
Z(){this.a2()
this.JO()},
JO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$JO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ccX(t.a.c),$async$JO)
case 3:r=e
w=4
return A.b(C.B1(t.a.c),$async$JO)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.r6(q,new C.dZv(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dZw(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$JO,v)},
yz(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
Ky(d,e){return this.cG8(d,e)},
cG8(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Ky=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dZA(q,e))
t=3
w=6
return A.b(d.$0(),$async$Ky)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dZB(q))
$.eW.mt()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ky,v)},
XU(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pj(r,s.c,s.e),$async$XU)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Ky(new C.dZs(t),"Preparing download\u2026"),$async$XU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XU,v)},
XY(d){return this.bQ6(d)},
bQ6(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pj(r,s.c,s.e),$async$XY)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Ky(new C.dZt(t,d),"Preparing file\u2026"),$async$XY)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XY,v)},
agx(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$agx=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xu.ca().Mo(B.Rz,B.ua,!0),$async$agx)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aG.gan(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jw(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.ab(m)
$.am.$1("[family tree sync pick] file_picker: "+A.w(p))
w=6
break
case 3:w=2
break
case 6:u=A.H3()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agx,v)},
YA(d){return this.c_A(d)},
c_A(d){var w=0,v=A.j(x.H),u=this
var $async$YA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Ky(new C.dZu(u,d),"Restoring family trees\u2026"),$async$YA)
case 2:return A.h(null,v)}})
return A.i($async$YA,v)},
Yz(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Yz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.agx(),$async$Yz)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.YA(s),$async$Yz)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yz,v)},
a2s(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2s=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pj(r,s.c,s.e),$async$a2s)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Ky(new C.dZz(t),"Creating QR code\u2026"),$async$a2s)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2s,v)},
a23(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a23=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Df()){t.yz("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a4(s,!1).cd(A.dX(new C.dZx(),!0,null,x.N)),$async$a23)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.YA(r),$async$a23)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a23,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.J,n=o?B.Bb:B.iu,m=o?D.aik:B.aP,l=o?B.aJ:B.bO,k=o?B.aP:B.av,j=new C.ddO(n,m,l,k,o?B.bM:B.bn)
l=A.aG(p,p,p,p,A.X(B.eK,k,p,p,p,20),p,p,p,new C.dZD(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eI(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.ddm(!0,B.jD,B.aQ,B.aQ,q.r?p:q.gcwW(),j,s,"Show restore QR"),1),B.at],u))}s=q.e
r=q.r?p:q.gct4()
t.push(A.E(C.ddm(!s,B.jj,B.b5,B.bw,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.ddm(!1,B.hN,B.aW,B.bP,q.r?p:q.gbQ_(),j,"Photos & books included","Download all trees"),1),B.at],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.ddm(!1,R.z_,B.aC,B.aU,q.r?p:q.gc_x(),j,s,"Upload backup file"),1))
l=A.a([new C.bfI(v,l,p),B.kT,new C.acN(j,"QR restore",p),B.W,t,B.d4,new C.acN(j,"Backup files",p),B.W,A.B(r,B.m,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kT,new C.acN(j,"One tree",p),B.W],u)
B.d.v(v,J.b6(q.d,new C.dZE(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cf(l,p,B.a_z,p,p,B.ag,!1)],u)
if(q.r){v=A.m(18)
t=A.J(B.aW.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dr,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bl(!0,A.p(p,A.B(A.a([N.aRd,B.bd,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.Q,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.BS,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c7(w,n,new A.an(B.a_,p,B.ab,B.t,l,p),p,!1,!1,p,p)}}
C.ddO.prototype={}
C.bfI.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aW.j(0.32),B.kp,28)],x.V)
t=A.ao(p,A.X(B.uu,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.a_,p,B.ab,B.t,A.a([t,new A.D(B.a9,A.B(A.a([A.p(p,D.bY0,B.f,p,p,new A.o(s,p,A.J(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oD,A.E(A.x(A.a([D.fze,B.O,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.i,0,B.p),1)],q),B.E,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.c51,B.n),p,p,p,p,p,p,p,p)}}
C.acN.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aW,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ac,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)}}
C.bfG.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aQ.j(0.4):m.c
k=A.J(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aQ.j(0.1),B.cH,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.J(t.j(0.35),B.r,1)
return A.aH(!1,B.a2,!0,q,A.aO(!1,o,!0,A.eJ(A.d9(new A.D(E.a_b,A.x(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.rs,q,q,q),B.ad,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bD,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cy,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.i,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)}}
C.bfL.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.J(s.c,B.r,1),q=B.aW.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aH(!1,B.a2,!0,v,A.aO(!1,u,!0,A.eJ(new A.D(B.eT,A.B(A.a([A.p(v,D.bXg,B.f,v,v,new A.o(q,v,A.J(B.aW.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.rs,v,v,v),B.bd,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.i,0,B.p),1),A.X(B.hN,o,v,v,v,20)],n),B.m,v,B.e,B.i,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.aj)}}
C.a_N.prototype={
R(){return new C.aEg()},
gcZ(){return this.c}}
C.aEg.prototype={
Z(){this.a2()
this.a9C()},
a9C(){var w=0,v=A.j(x.H),u=this,t
var $async$a9C=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b2O(u.a.c,B.DB),$async$a9C)
case 2:t=e
if(u.c!=null)u.m(new C.dZn(u,t))
return A.h(null,v)}})
return A.i($async$a9C,v)},
ahU(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ahU=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dZo(q))
t=4
p=A.hj9(q.a.d,B.DB)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.asj(n.e,m,l,B.DB,p,n.f),$async$ahU)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dZp(q))
q.c.K(x.q).f.U(D.fad)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(B.a.ea(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dZq(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahU,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.J,o=p?B.jw:B.q0,n=p?B.it:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eI(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fPD,q,q,q,1,q,!0)
w=A.m(24)
v=A.J(B.aW.j(0.35),B.r,1)
u=A.q_(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aW,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.O,u,B.bu,t,B.O,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.al,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.m,q,B.b8,B.i,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ae:B.br,q,q,q,q,q,q,q,q,q,q,q,B.Q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcsN()
if(u)u=B.JM
else u=A.X(r.e===!0?B.hw:B.amO,q,q,q,q,q)
w=A.a([w,B.ad,v,B.ad,new A.a6(1/0,q,A.et(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cf,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aW,q,B.h0,q,q,q,new A.ay(B.aW.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hZ,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aB:B.al,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.W)
w.push(new A.a6(1/0,q,A.bE(B.Am,q,new C.dZr(d),A.bo(B.aW,q,q,q,q,B.h0,q,q,q,q,q,q)),q))
return A.c7(m,o,new A.D(B.a9,A.x(w,B.m,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a_O.prototype={
R(){return new C.bkQ(A.zz(B.y2,B.nS,B.uD))}}
C.bkQ.prototype={
q(){this.d.q()
this.a1()},
B(d){var w=null
return A.c7(A.eI(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fHs,w,w,w,1,w,!0),B.w,A.zy(this.d,B.bU,new C.dZF(this,d)),w,!1,!1,w,w)}}
C.aZG.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.R3,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lL.prototype={}
C.a6F.prototype={
R(){return new C.bkx(null,null)}}
C.bkx.prototype={
Z(){var w=this,v=null
w.a2()
w.d=A.bn(v,B.rl,v,1,v,w)
w.e=A.bn(v,B.q7,v,1,v,w)
w.a.toString
w.d.cM(0)
w.e.cM(0)},
bx(d){var w,v,u=this
u.bH(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cM(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cM(0)},
q(){var w=this.d
w===$&&A.c()
w.q()
w=this.e
w===$&&A.c()
w.q()
this.bwD()},
B(d){var w,v,u=this,t=B.d.dK(D.a57,new C.dLk(u),new C.dLl())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.czI(A.cc(new A.h5(A.a([w,v],x.dS)),new C.dLm(u,t),null),!0)}}
C.bkw.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b1y(d,e)
break
case"house":p.m7(d,e,D.db5)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdC()
$.S()
t=A.I()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ad(new A.t(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mc(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.B2(d,e,12)
p.yb(d,e,B.l2,5,14)
break
case"grocery":p.chI(d,e)
break
case"calculator":p.chp(d,e)
break
case"lumber":p.chQ(d,e)
break
case"kitchen":p.chL(d,e)
break
case"landscape":p.m7(d,e,D.dbG)
s=new A.aF($.S().r,B.ah,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.D(new A.aY(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.D(new A.c5(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.D(new A.c5(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.D(new A.aq(t,w))
s.D(new A.aq(0,w))
s.D(new A.bs())
w=A.I()
w.r=B.ed.j(0.85).gp(0)
d.aG(s,w)
p.B2(d,e,8)
p.yb(d,e,B.iw,4,18)
break
case"plumbing":p.chZ(d,e)
break
case"electrical":p.m7(d,e,D.dmV)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.S()
u=A.I()
u.r=B.c.j(q*0.12).gp(0)
d.aP(new A.a3(0,0,0+e.a,0+e.b),u)
p.mc(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mc(d,e,B.lZ.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.B2(d,e,10)
break
case"store":p.ci8(d,e)
break
case"paint_remodel":p.chU(d,e)
break
case"roofing":p.ci0(d,e)
break
case"warehouse":p.cif(d,e)
break
case"vehicles":p.cid(d,e)
break
case"farm":p.chC(d,e)
break
case"restaurant":p.ci_(d,e)
break
case"tools":p.cib(d,e)
break
case"wallet":p.cie(d,e)
break
case"concrete":p.chv(d,e)
break
case"blueprint":p.chn(d,e)
break
default:p.b1y(d,e)}},
m7(d,e,f){var w,v=new A.a3(0,0,0+e.a,0+e.b)
$.S()
w=A.I()
w.sam(new A.a9(B.ay,B.aE,B.x,f,null,null).aB(0,v))
d.aP(v,w)},
mc(d,e,f,g,h){var w,v,u,t,s,r,q=new A.t(e.a/2,e.b/2),p=e.gdC()/2-h
$.S()
w=A.I()
w.b=B.aa
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bY(q,p)
r=w.G()
v.drawArc.apply(v,[A.bG(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
yb(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdC()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.S()
q=new A.ap(B.R,B.N,B.U,B.V,B.S)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.G()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
B2(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.S()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.G()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b1y(d,e){var w,v=this
v.m7(d,e,D.dlh)
w=v.c
v.mc(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mc(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bO3(d,e,B.hU,w)
v.yb(d,e,B.c.j(0.7),6,8)},
bO3(d,e,f,g){var w,v,u,t,s,r,q,p
$.S()
w=A.I()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.G()
s.drawRect(A.bG(new A.a3(16,q,t,q+3)),p)
p.delete()}},
chI(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m7(d,e,D.cqF)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.ao(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.S()
l=new A.ap(B.R,B.N,B.U,B.V,B.S)
l.r=D.d9i[B.o.F(s,4)].j(0.85).gp(0)
k=l.G()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.mc(d,e,B.c.j(0.35),w,16)
j.yb(d,e,B.iw,5,12)},
chp(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m7(d,e,D.cqN)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdC()
$.S()
q=A.I()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ad(new A.t(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fv(g,g,g,g,g,B.a3,B.bZ,g,B.dA,B.bW)
for(o=0;o<6;++o){n=v+o*0.9
r=D.ddo[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saX(0,new A.eu(r,g,g,B.cQ,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.el()
p.a3(d,new A.t(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ao(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cqP[o]
l=B.kx.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saX(0,new A.eu(m,g,g,B.cQ,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.el()
p.a3(d,new A.t(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ao(o,3)*0.38)+Math.sin(n)*6))}h.mc(d,e,B.c.j(0.35),w*1.5,14)
h.mc(d,e,B.eH.j(0.55),-v*3.141592653589793*2,8)
h.mc(d,e,B.xN.j(0.4),r*2.8,22)
h.yb(d,e,B.pQ,8,10)
h.B2(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.S()
r=new A.ap(B.R,B.N,B.U,B.V,B.S)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.G()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
chQ(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m7(d,e,V.ayq)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bt(new A.a3(20,q,u,q+10),B.hA)
$.S()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=A.ar(B.fN,B.oV,(r+1)/2).gp(0)
n=o.G()
t.drawRRect(A.el(p),n)
n.delete()}m.mc(d,e,B.fN.j(0.35),w,15)
m.B2(d,e,8)},
chL(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m7(d,e,D.d9N)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.F(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.F(r*0.13,0.7)
$.S()
l=new A.ap(B.R,B.N,B.U,B.V,B.S)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.G()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.mc(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
j.yb(d,e,B.pN,4,14)},
chZ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m7(d,e,D.cZc)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.S()
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.b=B.aa
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.G()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.yb(d,e,B.p_,6,12)
l.mc(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
ci8(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m7(d,e,D.cEp)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bt(new A.a3(q,14,q+u,22),B.i9)
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=A.ar(B.fc,B.bL,(r+1)/2).gp(0)
o=p.G()
t.drawRRect(A.el(q),o)
o.delete()}n.mc(d,e,B.c.j(0.3),w,16)
n.B2(d,e,8)
n.yb(d,e,B.vE,5,13)},
chU(d,e){var w,v,u,t,s,r,q,p,o
this.m7(d,e,D.d4n)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bt(new A.a3(q,p,q+8,p+(18+r*22)),B.hB)
$.S()
q=new A.ap(B.R,B.N,B.U,B.V,B.S)
q.r=[B.ie,B.dt,B.bL,B.et][s].j(0.85).gp(0)
o=q.G()
t.drawRRect(A.el(p),o)
o.delete()}this.mc(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
ci0(d,e){var w,v,u,t,s,r,q,p,o
this.m7(d,e,D.d1N)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.G()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.yb(d,e,B.cs,7,11)},
cif(d,e){var w,v,u,t,s,r,q,p,o,n
this.m7(d,e,D.cH8)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bt(new A.a3(p,o,p+(t-r*8),o+16),B.hA)
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=A.ar(B.cs,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.G()
s.drawRRect(A.el(o),n)
n.delete()}this.mc(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cid(d,e){var w,v,u,t,s,r,q,p,o
this.m7(d,e,D.dr0)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.bt(new A.a3(r,q,r+28,q+8),B.hA)
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.G()
t.drawRRect(A.el(q),o)
o.delete()}this.B2(d,e,6)},
chC(d,e){var w,v,u,t,s,r,q,p,o,n
this.m7(d,e,D.d8n)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.S()
s=A.I()
s.r=B.lZ.j(0.75).gp(0)
d.ad(new A.t(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=B.hd.j(0.85).gp(0)
o.c=3
n=o.G()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.mc(d,e,B.lZ.j(0.35),w,14)},
ci_(d,e){var w,v,u,t,s,r,q,p,o=this
o.m7(d,e,D.daV)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.bJ(new A.t(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.S()
q=new A.ap(B.R,B.N,B.U,B.V,B.S)
q.r=B.c.j(0.22).gp(0)
p=q.G()
t.drawOval(A.bG(r),p)
p.delete()}o.yb(d,e,B.pN,5,16)
o.B2(d,e,7)},
cib(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m7(d,e,D.doq)
w=m.c
v=w*3.141592653589793
m.mc(d,e,B.oV.j(0.55),v*3,10)
m.mc(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.S()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=B.oV.j(0.8).gp(0)
n=o.G()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cie(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m7(d,e,D.drF)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bt(new A.a3(p,o,p+36,o+22),B.i9)
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=A.ar(B.iw,B.lZ,q).gp(0)
n=p.G()
s.drawRRect(A.el(o),n)
n.delete()}m.B2(d,e,9)
m.mc(d,e,B.c.j(0.4),w*2.2,12)},
chv(d,e){var w,v,u,t,s,r,q,p,o,n
this.m7(d,e,D.dgd)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bY(new A.t(v,u),34)
$.S()
s=A.I()
s.b=B.aa
s.c=5
s.r=B.c.j(0.45).gp(0)
d.e3(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=B.bO.j(0.85).gp(0)
n=o.G()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
chn(d,e){var w,v,u,t,s,r,q,p
this.m7(d,e,D.dc0)
$.S()
w=A.I()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.G()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.G()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.F(t*0.85,1)
$.S()
u=A.I()
u.r=B.dt.j(0.45).gp(0)
d.aP(new A.a3(0,p,0+v,p+6),u)
this.mc(d,e,B.l2.j(0.45),-t*3.141592653589793*2,11)},
aw(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.at2.prototype={
a_I(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_I=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aQO(),$async$a_I)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a8T(s),$async$a_I)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a_I,v)},
agy(d){return this.ckw(d)},
ckw(d){var w=0,v=A.j(x.H),u=this,t
var $async$agy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iim(d),$async$agy)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$agy,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.J?B.jK:B.jb
w=x.p
v=A.a([C.aRc(!0,B.qY,1/0,B.qi,t,r,1/0)],w)
if(!q){u=A.a([B.L,B.w.j(0.35)],x.O)
v.push(A.c4(new A.bO(B.b4,t,t,new A.D(B.vS,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.Q,t,t,!0,t,t,t,t,t,B.azo,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a9(B.b4,B.b7,B.x,u,t,t),B.n),B.bg))}v.push(A.ao(8,A.B(A.a([A.E(A.dl(D.bQP,D.fvn,new C.clj(this,d),A.bo(B.aW,t,t,t,B.c,t,B.jQ,t,t,t,t,B.cb)),1),B.ac,A.E(A.et(D.bZi,D.fKA,this.gcbu(),A.di(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jQ,t,t,D.b1B,t,t,t,B.cb)),1)],w),B.m,t,B.e,B.i,0,t,t),t,t,8,8,t,t))
return new A.fD(1.7777777777777777,A.aH(!1,B.a2,!0,B.qY,new A.an(B.a_,t,B.b1,B.t,v,t),B.ap,s,0,t,t,t,t,t,B.aj),t)}}
C.aMl.prototype={
aY(){this.b6()
this.b4()
this.dH()},
q(){var w=this,v=w.b5$
if(v!=null)v.a6(0,w.gdD())
w.b5$=null
w.a1()}}
C.aUc.prototype={}
C.aUb.prototype={}
C.aSa.prototype={}
C.Zq.prototype={
R(){return new C.azu()}}
C.azu.prototype={
Z(){var w,v,u=this
u.a2()
u.a.toString
w=new A.bb("",B.b3,B.aO)
v=$.au()
u.d!==$&&A.aQ()
u.d=new A.as(w,v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.au()
w.P$=0
this.a1()},
Ko(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.K(x.q).f.U(D.faI)
return}t=u.c
t.toString
v=u.e
A.a4(t,!1).O(new C.aUc(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.J,l=m?B.e3:B.c,k=A.m(20),j=A.p(n,D.bYY,B.f,n,n,new A.o(B.aW.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.av,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bD,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bn,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.i,0,B.p),1)
j=A.B(A.a([j,B.bd,i,A.aG(n,n,n,n,A.X(B.cz,m?B.bs:B.bn,n,n,n,n),n,n,n,new C.d56(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.i,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bn,n,n,n,n,n,n,n,n,12,n,n,B.Q,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bn,n,n,n,n,n,n,n,n,11,n,n,B.cy,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hjp(new C.d57(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.av,n,n,n,n,n,n,n,n,n,n,n,B.a7,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jK:B.jb
r=A.m(12)
q=A.m(12)
p=m?B.e9:B.bO
t=A.aL(n,B.Y,!0,n,!0,B.t,n,A.aM(),u,n,n,n,n,n,2,A.br(n,new A.b5(4,r,B.dk),n,n,n,n,n,n,!0,new A.b5(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d58(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a3,n,A_.JT,n,n,n,n)
u=m?B.aP:B.av
m=m?B.e9:B.bO
return A.eS(n,l,new A.cU(B.lW,A.cg(A.x(A.a([j,B.aN,i,B.au,w,B.O,v,B.aN,t,B.bu,A.B(A.a([A.E(A.dI(B.di,new C.d59(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.ck,n,new A.b7(A.m(12),B.a0),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.at,A.E(A.bE(D.fKP,n,o.ga2O(),A.bo(B.aW,n,n,n,B.c,n,B.ck,n,new A.b7(A.m(12),B.a0),n,n,n)),1)],h),B.m,n,B.e,B.i,0,n,n)],h),B.E,n,B.e,B.P,0,B.p),B.t,n,B.y,n,B.BT,n,n,B.ag),n),n,n,n,A5.BU,B.d8,n,new A.b7(k,B.a0),n)}}
C.Zp.prototype={
R(){return new C.azt()}}
C.azt.prototype={
Z(){this.a2()
var w=$.au()
this.d!==$&&A.aQ()
this.d=new A.as(B.ar,w)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.au()
w.P$=0
this.a1()},
Ko(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.K(x.q).f.U(D.f8l)
return}v=this.c
v.toString
A.a4(v,!1).O(new C.aUb(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.J,o=p?B.e3:B.c,n=A.m(20),m=A.p(q,D.bVs,B.f,q,q,new A.o(B.bP.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bD,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bn,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.i,0,B.p),1)
m=A.B(A.a([m,B.bd,l,A.aG(q,q,q,q,A.X(B.cz,p?B.bs:B.bn,q,q,q,q),q,q,q,new C.d52(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.i,0,q,q)
l=B.aW.j(p?0.12:0.08)
w=A.m(12)
v=A.J(B.aW.j(0.25),B.r,1)
u=A.X(B.amA,B.aW.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.at,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.i,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bz,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,q,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jK:B.jb
t=A.m(12)
s=A.m(12)
r=p?B.e9:B.bO
v=A.aL(q,B.Y,!0,q,!0,B.t,q,A.aM(),w,q,q,q,q,q,2,A.br(q,new A.b5(4,t,B.dk),q,q,q,q,q,q,!0,new A.b5(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d53(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a3,q,B.kU,q,q,q,q)
w=p?B.aP:B.av
p=p?B.e9:B.bO
return A.eS(q,o,new A.cU(B.lW,A.cg(A.x(A.a([m,B.aN,l,B.aA,v,B.bu,A.B(A.a([A.E(A.dI(B.di,new C.d54(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.ck,q,new A.b7(A.m(12),B.a0),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.at,A.E(A.bE(D.fRU,q,this.ga2O(),A.bo(B.bP,q,q,q,B.c,q,B.ck,q,new A.b7(A.m(12),B.a0),q,q,q)),1)],k),B.m,q,B.e,B.i,0,q,q)],k),B.E,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.BT,q,q,B.ag),q),q,q,q,A5.BU,B.d8,q,new A.b7(n,B.a0),q)}}
C.YX.prototype={
R(){return new C.ay7()}}
C.ay7.prototype={
Z(){var w,v=this
v.a2()
w=$.au()
v.d!==$&&A.aQ()
v.d=new A.as(B.ar,w)
v.e!==$&&A.aQ()
v.e=new A.as(new A.bb("1",B.b3,B.aO),w)
v.f!==$&&A.aQ()
v.f=new A.as(B.ar,w)
v.r!==$&&A.aQ()
v.r=new A.as(B.ar,w)},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.S$=$.au()
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
v.a1()},
gJJ(){var w,v=this.e
v===$&&A.c()
w=A.cY(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gajH(){var w=this.f
w===$&&A.c()
w=A.cY(B.a.i(w.a.a))
return w==null?0:w},
gb4l(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aP6(d){var w,v=B.k.E(this.gJJ()+d,0.25,999999),u=B.k.j3(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.ac(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aN(u,w,"")}t.saX(0,u)
this.m(new C.cDh())},
ayn(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aW,w,w,w,20):w,u=d.a,t=u?B.jK:B.jb,s=A.m(14),r=A.m(14)
u=u?B.e9:B.bO
return A.br(w,new A.b5(4,s,B.dk),w,B.bz,w,w,w,w,!0,new A.b5(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b5(4,A.m(14),B.acz),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cbv(d,e,f){return this.ayn(d,e,f,null)},
Ko(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gajH()<=0){s.c.K(x.q).f.U(D.fcA)
return}r=s.c
r.toString
v=s.gJJ()
u=s.gajH()
t=s.gb4l()
A.a4(r,!1).O(new C.aSa(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.J,m=new C.u1(n),l=n?B.e3:B.c,k=A.m(24),j=x.O,i=A.a([B.aW.j(0.22),B.bP.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bOI,B.f,o,o,new A.o(o,o,A.J(B.aW.j(0.35),B.r,1),h,o,new A.a9(B.a5,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bD,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.cy,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1)
i=A.B(A.a([i,B.bd,h,A.aG(o,o,o,o,A.X(B.cz,n?B.bs:B.bn,o,o,o,o),o,o,o,new C.cDn(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aL(o,B.Y,!0,o,!0,B.t,o,A.aM(),h,o,o,o,o,o,2,p.ayn(m,"Item name (optional)","Lumber, paint, labor\u2026",B.OF),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a3,o,A_.JT,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jK:B.jb
t=A.m(14)
s=A.J(n?B.e9:B.bO,B.r,1)
r=A.aG(o,o,o,o,A.X(B.yV,n?B.aP:B.av,o,o,o,20),o,o,o,new C.cDo(p),o,o,o,o,o,B.cb)
q=p.e
q===$&&A.c()
q=A.aL(o,B.Y,!1,o,!0,B.t,o,A.aM(),q,o,o,o,o,o,2,D.c_R,B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.e1,o,o,o,1,o,o,!1,"\u2022",o,new C.cDp(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.an,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a6(52,o,q,o),A.aG(o,o,o,o,A.X(B.hM,n?B.aP:B.av,o,o,o,20),o,o,o,new C.cDq(p),o,o,o,o,o,B.cb)],w),B.m,o,B.e,B.P,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,16,o,o,B.Q,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.at,A.E(A.aL(o,B.Y,!1,o,!0,B.t,o,A.aM(),t,o,o,o,o,o,2,p.ayn(m,"Amount","0.00",B.i_),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.e1,o,o,o,1,o,o,!1,"\u2022",o,new C.cDr(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a3,o,B.an,o,o,o,o),1)],w),B.E,o,B.e,B.i,0,o,o)
t=x.gv
u=A.C(new A.N(D.d4S,new C.cDs(p,m),t),t.k("ak.E"))
i=A.a([i,B.bu,v,B.aA,h,B.O,s,B.ad,A.bX(B.bC,u,B.bq,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.W,A.aL(o,B.Y,!1,o,!0,B.t,o,A.aM(),h,o,o,o,o,o,2,p.cbv(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cDt(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a3,o,B.kU,o,o,o,o)],w))}i.push(B.aN)
h=B.aW.j(n?0.18:0.1)
j=A.a([h,B.bP.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.J(B.aW.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,11,o,o,B.Q,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJJ()===B.k.j3(p.gJJ())?B.k.N(p.gJJ()):p.gJJ()
s=p.gb4l()
r=A.B3(p.gajH())
i.push(A.p(o,A.B(A.a([A.E(A.x(A.a([u,B.au,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1),C.bEs(p.gJJ()*p.gajH(),B.b_,!1,B.u)],w),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a9(B.a5,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jh,o,o,o))
i.push(B.bu)
j=A.m(14)
h=n?B.e9:B.bO
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.ck,o,new A.b7(j,B.a0),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dI(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,B.Q,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cDu(d),h),1),B.at,A.E(A.dl(D.aq0,D.fNN,p.ga2O(),A.bo(B.aW,o,o,0,B.c,o,B.ck,o,new A.b7(A.m(14),B.a0),o,o,o)),2)],w),B.m,o,B.e,B.i,0,o,o))
return A.eS(o,l,new A.cU(A4.acZ,A.cg(A.x(i,B.ak,o,B.e,B.P,0,B.p),B.t,o,B.y,o,Ag.rr,o,o,B.ag),o),o,o,o,B.Nr,B.d8,o,new A.b7(k,B.a0),o)}}
C.a1A.prototype={
R(){return new C.bx6()}}
C.bx6.prototype={
Z(){var w,v,u=this
u.a2()
w=u.a.e
v=$.au()
u.d!==$&&A.aQ()
u.d=new A.as(new A.bb(w,B.b3,B.aO),v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.au()
w.P$=0
this.a1()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.J,q=r?B.e3:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.av,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jK:B.jb
v=A.aL(s,B.Y,!0,s,!0,B.t,s,A.aM(),w,s,s,s,s,s,2,A.br(s,new A.b5(4,A.m(12),B.dk),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fg6(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a3,s,B.an,s,s,s,s)
u=A.E(A.dI(B.di,new C.fg7(d),s),1)
r=A.bo(B.bP,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eS(s,q,new A.D(B.BT,A.x(A.a([o,B.aA,v,B.aN,A.B(A.a([u,B.at,A.E(A.bE(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fg8(t,d),r),1)],w),B.m,s,B.e,B.i,0,s,s)],w),B.m,s,B.e,B.P,0,B.p),s),s,s,s,s,B.d8,s,new A.b7(p,B.a0),s)}}
C.abS.prototype={
a5(){return"WorksheetFrameStyle."+this.b}}
C.FX.prototype={
R(){return new C.bx4(null,null)}}
C.bx4.prototype={
Z(){var w,v=this
v.a2()
w=A.bn(null,D.bwl,null,1,null,v)
w.cM(0)
v.d!==$&&A.aQ()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.byR()},
gbAm(){switch(this.a.r.a){case 1:return A.a([B.aW,B.bP,B.b_],x.O)
case 2:return A.a([B.bt,B.aW,B.b_],x.O)
case 3:return A.a([B.aQ,B.cg,B.kc],x.O)
case 4:return A.a([B.iQ,B.bP,B.fg],x.O)
case 0:return A.a([B.aW,B.bP,B.b_],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.ey(A.cc(v,new C.fg4(this,new C.u1(w.ax.a===B.J)),null),null)}}
C.ay0.prototype={
R(){return new C.bx5(null,null)}}
C.bx5.prototype={
Z(){var w,v=this
v.a2()
w=A.bn(null,B.nl,null,1,null,v)
w.cM(0)
v.d!==$&&A.aQ()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.byS()},
B(d){var w=this.d
w===$&&A.c()
return A.cc(w,new C.fg5(this),null)}}
C.bx3.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bt(new A.a3(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aF($.S().r,B.ah,null,null,A.a([],x.v))
u.D(new A.iN(v))
w=A.I()
w.b=B.aa
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.az(v,w)
w=A.I()
w.b=B.aa
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aG(u,w)
w=A.xs(u)
t=A.a([],x.U)
w=new A.tm(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.ju(y.B));--r
q=new A.Bv(w,r)
w.il()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aSy(d,q,r,o,0,0.2,4.2,0.92)
p.aSy(d,q,r,s,0.52,0.11,3.2,0.58)}},
aSy(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hFl(e.a.a,e,t,t+f*i,!0),r=A.bCO(s.gbw().a.getBounds())
$.S()
w=A.I()
w.b=B.aa
w.c=j
w.d=B.bE
w.f=!0
v=this.f
u=k*this.e
w.sam(new A.a9(B.a5,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.HS,null).aB(0,r))
d.aG(s,w)},
aw(d){return d.b!==this.b||d.d!==this.d}}
C.aOm.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.aOn.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.u1.prototype={}
C.at1.prototype={
R(){return new C.aFJ()},
ge1(){return this.c}}
C.aFJ.prototype={
Z(){var w=this
w.a2()
w.d=w.a.d
w.ahn()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.LF(w,v)
this.a1()},
ahn(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ahn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bCW(t.c,t.d.a),$async$ahn)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eOd(u,s))
return A.h(null,v)}})
return A.i($async$ahn,v)},
Qn(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Qn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eO4(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.LF(t,s),$async$Qn)
case 2:if(u.c!=null)u.m(new C.eO5(u))
return A.h(null,v)}})
return A.i($async$Qn,v)},
QU(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.cj(null,null,!0,null,new C.eOb(t,new C.u1(p.ax.a===B.J)),s,null,!0,!0,x.T),$async$QU)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a8T(q),$async$QU)
case 6:case 5:t.m(new C.eOc(t,r))
w=7
return A.b(t.Qn(),$async$QU)
case 7:case 1:return A.h(u,v)}})
return A.i($async$QU,v)},
W6(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$W6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.ii7(r),$async$W6)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eO_(t,new C.rb(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Qn(),$async$W6)
case 4:case 1:return A.h(u,v)}})
return A.i($async$W6,v)},
cgz(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hxd(t,new C.eO3(u),w,v)},
abo(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bK(new A.ay(v,2.5,B.r,-1),B.a0,B.a0,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b1n,w,w,B.n),w,22,w,w,w,w,w,22)},
aas(d){return this.bMi(d)},
bMi(d){var w=0,v=A.j(x.H),u=this
var $async$aas=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eO2(u,d))
w=2
return A.b(u.Qn(),$async$aas)
case 2:return A.h(null,v)}})
return A.i($async$aas,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.J,e=f?B.c0:B.iu,d=A.m(8),a0=A.X(Y.a0O,f?B.bs:B.bn,g,g,g,16),a1=x.p
a0=A.aO(!1,d,!0,new A.D(B.Gi,A.B(A.a([a0,B.bm,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bn,g,g,g,g,g,g,g,g,g,g,g,B.a7,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.P,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eOe(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.a_,g,B.b1,B.t,A.a([A.bx(A.m(22),C.aRc(!0,A.m(22),1/0,B.qi,g,d,1/0),B.ap),A.ao(10,A.dl(D.bTo,D.fQb,h.gb2i(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b7(A.m(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aW.j(f?0.5:0.38),B.f2,22),new A.ac(-4,B.G,B.bP.j(0.2),B.I,32)],w)
u=A.m(17)
t=A.J(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.I,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bx(s,new A.an(B.a_,g,B.b1,B.t,A.a([C.aRc(!0,A.m(16),1/0,B.Oc,g,r.c,1/0),A.c4(g,new A.o(g,g,g,g,g,new A.a9(B.b4,B.b7,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bg),A.ao(g,h.abo(!0),g,g,8,g,8,g),A.ao(g,A.cAs(h.abo(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cAs(h.abo(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cAs(h.abo(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dl(D.bPj,D.fJw,h.gb2i(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b7(A.m(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.c1y,B.n),g,g,g,g,B.m6,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.bcb,B.o0,B.h3],u):A.a([B.b_,B.aW,B.bP],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aW.j(f?0.45:0.35),B.f2,24)],t)
r=A.m(22)
p=A.ao(g,A.X(B.jS,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.J(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h4,g,g,g)],a1),B.m,g,B.e,B.i,0,g,g),B.aA,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bEs(h.d.gxb(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.O,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cy,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.i,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.J(B.hf.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aQ.j(0.28),B.cH,14)],t)
j=B.aQ.j(0.22)
i=A.m(10)
u=A.p(g,A.bx(r,new A.an(B.a_,g,B.ab,B.t,A.a([p,new A.D(D.bB4,A.B(A.a([o,B.at,A.aH(!1,B.a2,!0,g,A.aO(!1,n,!0,A.eJ(new A.D(U.vW,A.x(A.a([A.p(g,D.apB,B.f,g,g,new A.o(j,g,A.J(B.aQ.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cl,g,g,g),B.fR,D.fye],a1),B.m,g,B.e,B.P,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcgy(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.aj)],a1),B.m,g,B.e,B.i,0,g,g),g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,g,v,s,new A.a9(B.ay,B.aE,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fD(1.7777777777777777,d,g),B.aN,w,B.O,u,B.bu,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b0,A.dl(Ar.a2C,D.fw2,h.gbAP(),A.bo(B.aW,g,g,g,B.c,g,B.iB,g,new A.b7(A.m(12),B.a0),g,g,g))],a1),B.m,g,B.e,B.i,0,g,g),B.ad],a1)
w=h.d.d
if(w.length===0){w=f?B.e3:B.c
v=A.m(14)
u=A.J(f?B.e9:B.bO,B.r,1)
t=A.X(B.a18,f?B.bs:B.bn,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,g,g,g,B.Q,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.W,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bn,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.m,g,B.e,B.i,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.qe,g,g,1/0))}else B.d.v(d,new A.N(w,new C.eOf(h,new C.u1(f)),A.T(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.BI,A.at(A.mS(g,f?B.bs:B.bn,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c7(g,e,A.bl(!0,A.x(A.a([new A.D(B.BM,a0,g),A.E(A.cg(A.x(d,B.E,g,B.e,B.i,0,B.p),B.t,g,B.y,g,E.yk,g,g,B.ag),1)],a1),B.E,g,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bEu(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e3:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cH,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.b48,u,u,u,u,u,u,u,5),l=B.aW.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.X(s?B.i1:B.hj,B.b_,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bJ
else{k=x.p
t=A.a([A.d(t,u,2,B.a1,u,u,u,A.l(u,u,r?B.aP:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcWA()
v=A.B3(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bs:B.bn,u,u,u,u,u,u,u,u,12,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.b8,B.P,0,B.p)}t=A.E(t,1)
k=A.a([B.aW.j(0.14),B.bP.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bEs(d.c*d.d,B.b_,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a9(B.a5,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.h6,u,u,u)
w=x.p
return A.p(u,A.bx(n,new A.Eo(A.B(A.a([m,A.E(new A.D(B.ajM,A.B(A.a([l,B.bd,t,B.ac,k,A.aG(u,u,u,u,A.X(B.cz,(r?B.bs:B.bn).j(0.75),u,u,u,20),u,u,u,new C.eO0(this,d),u,u,u,u,u,B.cb)],w),B.m,u,B.e,B.i,0,u,u),u),1)],w),B.ak,u,B.e,B.i,0,u,u),u),B.ap),B.f,u,D.b3_,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d2,u,u,u,u)}}
C.adS.prototype={
EB(d){return this.bNG(d)},
bNG(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$EB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pj(d,o,!1),$async$EB)
case 3:if(!f||d.e==null){w=1
break}A.a4(d,!1).O(null)
w=4
return A.b(A.bQ(Af.BG,null,x.H),$async$EB)
case 4:s=t.d
w=5
return A.b(C.fOs(!0,o,s),$async$EB)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.GS(r,"ngmy_project_"+A.aN(s.b,q,"_"),!1),$async$EB)
case 6:p=f
w=7
return A.b(A.pi(o,!1),$async$EB)
case 7:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$EB,v)},
a_K(d){return this.cwX(d)},
cwX(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_K=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pj(d,s,!1),$async$a_K)
case 3:if(!f||d.e==null){w=1
break}A.a4(d,!1).O(null)
A.hF(d,new C.asW(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pi(s,!1),$async$a_K)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_K,v)},
Qo(d){return this.ct_(d)},
ct_(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Qo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a4(d,!1).O(null)
w=3
return A.b(A.hF(d,D.aJ_,!0,"NgmyWorksheetProjectScan",x.N),$async$Qo)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bEt(s),$async$Qo)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.K(x.q).f.U(D.fbI)
w=1
break}q=C.h9f(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dU(p,x.H),$async$Qo)
case 5:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Qo,v)},
a_L(d){return this.cF0(d)},
cF0(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_L=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a4(d,!1).O(null)
w=3
return A.b(C.bE_(),$async$a_L)
case 3:s=f
if(s==null){w=1
break}r=C.h9f(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dU(q,x.H),$async$a_L)
case 4:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_L,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.J,t=new C.u1(u),s=w.d.d.length,r=u?B.e3:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kp,36)],x.V),o=x.p
return A.bl(!0,new A.D(B.vV,A.p(v,A.x(A.a([w.cvw(d,t,s),new A.D(D.bAt,A.x(A.a([w.b5h(t,"QR restore"),B.W,A.B(A.a([w.b0g(t,!0,B.jD,B.aQ,B.aQ,new C.eOh(w,d),"Show to scan","QR code"),B.at,w.ayo(t,B.jj,B.b5,B.bw,new C.eOi(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.i,0,v,v),B.d4,w.b5h(t,"Backup files"),B.W,A.B(A.a([w.ayo(t,B.hN,B.aW,B.bP,new C.eOj(w,d),"Full copy","Backup file"),B.at,w.ayo(t,R.z_,B.aC,B.aU,new C.eOk(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.i,0,v,v)],o),B.E,v,B.e,B.i,0,B.p),v)],o),B.m,v,B.e,B.P,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
cvw(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f7,B.cO,B.fL],k):A.a([B.b_,B.aW,B.bP],k)
w=A.ao(l,A.X(B.uu,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kE,l,l,l,36),l,l,l)
u=A.m(14)
t=A.J(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cH,12)],x.V)
r=this.d
s=A.p(l,C.aRc(!0,A.m(13),64,D.bKB,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a1,l,l,l,D.aTP,l,l,l)
r=C.bEs(r.gxb(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.J(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.a_,l,B.ab,B.t,A.a([w,new A.D(D.bAR,A.x(A.a([v,A.B(A.a([s,B.es,A.E(A.x(A.a([u,B.au,t,B.O,A.B(A.a([r,B.ac,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fP,l,l,l)],m),B.m,l,B.e,B.i,0,l,l)],m),B.E,l,B.e,B.i,0,B.p),1),A.aG(l,l,l,l,A.X(B.cz,B.c.j(0.85),l,l,l,l),l,l,l,new C.eOg(d),l,l,l,A.nI(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aR2,l,l,l,l),l,l)],m),B.E,l,B.e,B.i,0,l,l)],m),B.m,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.ay,B.aE,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b5h(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aW,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ac,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bs:B.bn,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
b0g(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.aik:B.aP
if(e)w=B.aQ.j(o?0.45:0.35)
else{w=o?B.e9:B.bO
w=w.j(o?0.8:1)}w=A.J(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aQ.j(0.12),B.cH,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.J(h.j(0.35),B.r,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.rs,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.av,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aH(!1,B.a2,!0,r,A.aO(!1,q,!0,A.eJ(new A.D(E.a_b,A.x(A.a([t,B.ad,u,B.bD,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bs:B.bn,r,r,r,r,r,r,r,r,11,r,r,B.cy,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
ayo(d,e,f,g,h,i,j){return this.b0g(d,!1,e,f,g,h,i,j)}}
C.asW.prototype={
R(){return new C.bm8()}}
C.bm8.prototype={
Z(){this.a2()
this.afi()},
afi(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$afi=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bEu(p.c,p.d),$async$afi)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eNV(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eNW(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afi,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.J,f=g?B.Bb:B.iu,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aG(h,h,h,h,A.X(B.eK,g?B.ae:B.al,h,h,h,18),h,h,h,new C.eNX(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.A6],u),B.m,h,B.e,B.i,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.f7,B.cO,B.fL],s):A.a([B.b_,B.aW,B.bP],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aW.j(g?0.4:0.3),B.f2,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.de,B.K,h,h)
p=C.bEs(p.gxb(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.am,A.B(A.a([p,B.ac,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fP,h,h,h)],u),B.m,h,B.b8,B.i,0,h,h)],u),B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a9(B.ay,B.aE,B.x,s,h,h),B.n),h,h,h,h,E.a_y,h,h,1/0)
t=g?D.bn4:B.c
q=A.m(24)
p=A.J(w?B.aQ.j(0.4):B.aW.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dr,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.Uy,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.el7)
else{m=A.m(20)
l=A.J(B.aL,B.r,1)
o.push(A.p(h,A.q_(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aN)
n=w?B.aQ:B.aW
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.J((w?B.aQ:B.aW).j(0.35),B.r,1)
k=w?B.Oq:B.OU
k=A.X(k,w?B.aQ:B.aW,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.at,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ae:B.al,h,h,h,h,h,h,h,h,12,h,h,B.a7,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.i,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iB,h,h,h))
return A.c7(h,f,A.bl(!0,A.x(A.a([new A.D(Ac.ND,e,h),A.E(A.cg(A.x(A.a([s,B.aN,A.p(h,A.x(o,B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.u8,h,h,1/0)],u),B.m,h,B.e,B.i,0,B.p),B.t,h,B.y,h,E.akV,h,h,B.ag),1)],u),B.m,h,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.at0.prototype={
R(){return new C.aFI(A.zz(B.MU,B.nS,B.uD))}}
C.aFI.prototype={
q(){this.d.q()
this.a1()},
aN6(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iS(w,d)},
ccn(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
s=C.ig_(t)
if(s!=null){this.aN6(s)
return}r=C.hnY(t)
if(r!=null)q=A.cT(r,p,0)
else q=!1
if(q){this.aN6(B.a.i(B.a.b7(r,B.a.cv(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eI(A.a([A.aG(t,t,t,t,A.X(u.f?B.uj:A9.Ox,t,t,t,t,t),t,t,t,new C.eNZ(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Bb,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fJq,t,t,t,1,t,!0),q=A.zy(u.d,B.bU,u.gccm()),p=A.m(28)
p=A.at(A.p(t,t,B.f,t,t,new A.o(t,t,A.J(B.aW,B.r,3),p,A.a([new A.ac(2,B.G,B.aW.j(0.35),B.I,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c7(r,B.w,new A.an(B.a_,t,B.b1,B.t,A.a([q,p,A.ao(32,A.p(t,D.fIc,B.f,t,t,new A.o(w,t,A.J(B.aW.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jh,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aKI.prototype={
a5(){return"_WorksheetTab."+this.b}}
C.Ow.prototype={
R(){return new C.aFK(D.abR,A.a([],x.D))},
bu(){return this.r.$0()},
ge1(){return this.c}}
C.aFK.prototype={
gcCT(){return J.bFD(this.e,0,new C.eOH())},
Z(){this.a2()
$.aV.bZ$.push(this)
this.vT()},
q(){$.aV.hP(this)
this.a1()},
jd(d){if(d===B.fJ)this.vT()},
vT(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vT=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.De(q.a.c).d7(0,B.kh),$async$vT)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eOD(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eOE(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vT,v)},
I9(d){return this.bKq(d)},
bKp(){return this.I9(null)},
bKq(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$I9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ii9(l,d),$async$I9)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lt(l,r,q,D.dgr,new A.V(Date.now(),0,!1))
w=4
return A.b(C.LF(t.a.c,p),$async$I9)
case 4:o=f
w=5
return A.b(t.vT(),$async$I9)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.K(x.q).f.U(D.f8P)
w=1
break}n=J.aW(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.K(q).f.U(D.faC)
else n.K(q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.EF(m)
case 1:return A.h(u,v)}})
return A.i($async$I9,v)},
EF(d){return this.cgk(d)},
cgk(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$EF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hF(s,new C.at1(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$EF)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.LF(u.a.c,t),$async$EF)
case 5:case 4:w=6
return A.b(u.vT(),$async$EF)
case 6:return A.h(null,v)}})
return A.i($async$EF,v)},
vF(d){return this.c_C(d)},
c_C(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bE_(),$async$vF)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hF(r,D.aJ_,!0,"NgmyWorksheetProjectScan",x.N),$async$vF)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bEt(q),$async$vF)
case 14:w=12
break
case 13:f=null
case 12:s=f
w=8
break
case 9:s=null
case 8:case 4:if(s==null){r=t.c
if(r==null){w=1
break}r=r.K(x.q).f
r.U(A.b3(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.h9f(s)
w=15
return A.b(C.LF(t.a.c,p),$async$vF)
case 15:o=f
w=16
return A.b(t.vT(),$async$vF)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.K(x.q).f.U(D.faH)
w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.EF(p)
case 1:return A.h(u,v)}})
return A.i($async$vF,v)},
O8(d){return this.bJ5(d)},
bJ5(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$O8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cj(null,null,!0,null,new C.eOo(d),s,null,!0,!0,x.y),$async$O8)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oQ(t.a.c,A.a([],x.D)),$async$O8)
case 6:w=7
return A.b(t.vT(),$async$O8)
case 7:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.f8U)
case 4:case 1:return A.h(u,v)}})
return A.i($async$O8,v)},
cgx(d){var w=this.c
w.toString
A.bV(B.L,null,new C.eOx(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b5T(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jK
else w=B.c
v=A.m(16)
u=A.J(p?B.e9:B.bO,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bS,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.av,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aH(!1,B.a2,!0,r,A.aO(!1,q,!0,A.p(r,A.x(A.a([s,B.ad,t,B.bD,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bs:B.bn,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vU,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
a0e(d,e){return this.cgl(d,e)},
cgl(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0e=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(B.L,null,new C.eOs(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a0e)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hxd(r,new C.eOt(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Oa(d,e),$async$a0e)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0e,v)},
b2U(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bS,u,u,u)
if(d)t=B.aw
else t=h.a?B.aP:B.av
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bs:B.bn,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.i,0,B.p),1)
return A.aH(!1,B.a2,!0,u,A.aO(!1,u,!0,new A.D(B.BS,A.B(A.a([s,B.bd,t,A.X(B.eE,w?B.bs:B.bn,u,u,u,u)],v),B.m,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj)},
cnf(d,e,f,g,h,i){return this.b2U(!1,d,e,f,g,h,i)},
Oa(d,e){return this.bJf(d,e)},
bJf(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Oa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.ld(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Oa)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bCJ(t.a.c,d.a),$async$Oa)
case 6:w=7
return A.b(t.vT(),$async$Oa)
case 7:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Oa,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.J,n=new C.u1(o),m=o?B.c0:B.iu
if(q.f)o=D.b9Z
else{w=q.bDC(n)
v=q.bZG(n)
u=q.gbAJ()
if(o)t=B.jK
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ad,v,B.aN,new C.FX(A.p(p,A.B(A.a([q.aBR(P.Ob,"Projects",n,D.abR),q.aBR(B.wa,"Cashier",n,D.aZc),q.aBR(B.GC,"Family Tree",n,D.hrj)],r),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ev,0.95,u,p),B.bu],r)
w=q.d
if(w===D.abR){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.av,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b0,new C.ay0(q.gaRk(),p)],r),B.m,p,B.e,B.i,0,p,p),B.aA,q.cnh(n)],r))}else{o=q.a
if(w===D.aZc)u.push(new C.ap1(o.c,n,p))
else{w=q.r
u.push(new C.aq9(o.c,o.d,o.e,o.f,new C.eOK(q),new C.eOL(q),new A.bN(w,x.b4)))}}o=A.cg(A.x(u,B.E,p,B.e,B.i,0,B.p),B.t,p,B.y,p,Ai.Nw,p,p,B.ag)}return A.c7(p,m,A.bl(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bDC(d){var w=null,v=A.m(8),u=d.a,t=A.X(Y.a0O,u?B.bs:B.bn,w,w,w,16)
return A.aO(!1,v,!0,new A.D(B.kF,A.B(A.a([t,B.bm,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bs:B.bn,w,w,w,w,w,w,w,w,14,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eOl(this),w,w,w,w,w,w,w)},
gbAJ(){switch(this.d.a){case 0:return D.ab2
case 1:return D.hgM
case 2:return D.ab3}},
bZG(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aW.j(0.35),B.cx,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bVi,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bd,D.bFk,A.aH(!1,B.a2,!0,w,A.aO(!1,A.m(12),!0,A.p(w,D.bSH,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eOp(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)],t),B.E,w,B.e,B.i,0,w,w),r=B.b_.j(0.55),q=A.m(12)
return new C.FX(A.p(w,A.x(A.a([new A.D(E.a_h,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.B3(this.gcCT()),w,w,w,w,w,w,D.fsh,w,w,w)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.u4,B.jh,w,w,1/0)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(B.aW,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.hgL,w)},
aBR(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aW:B.L,q=A.m(12),p=t?A.J(B.c.j(0.55),B.r,2):A.J(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aW.j(0.42),B.cH,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bs:B.bn
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bs:B.bn
return A.E(A.aH(!1,B.a2,!0,u,A.aO(!1,s,!0,A.dd(u,A.B(A.a([w,B.en,new A.ds(1,B.cn,A.d(e,u,1,B.a1,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.Q,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b8,B.i,0,u,u),u,u,B.cv,new A.o(r,u,p,q,o,u,B.n),B.iy,u,u,u,B.Gj,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eOG(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),1)},
cnh(d){var w,v,u,t,s,r,q=this,p=null
if(J.ct(q.e)){w=d.a
v=w?B.e3:B.c
u=A.m(15)
t=A.p(p,D.bSN,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aW.j(0.5),B.f2,28)],x.V),D.c41,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.av,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.FX(A.p(p,A.x(A.a([t,B.d4,s,B.O,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bn,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.dS,A.B(A.a([A.E(q.aSU(B.jj,"Scan QR",new C.eOA(q),d),1),B.at,A.E(q.aSU(R.z_,"Upload file",new C.eOB(q),d),1)],r),B.m,p,B.e,B.i,0,p,p),B.aA,A.bE(D.fTU,p,q.gaRk(),A.bo(B.aW,p,p,p,B.c,B.h0,p,p,new A.b7(A.m(12),B.a0),p,p,p))],r),B.m,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bBW,1.05,D.ab2,p)}w=J.b6(q.e,new C.eOC(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.FX(A.x(w,B.m,p,B.e,B.i,0,B.p),16,B.bS,1,D.ab2,p)},
aSU(d,e,f,g){var w=null,v=B.aW.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.J(B.aW.j(0.45),B.r,1)
return A.aH(!1,B.a2,!0,u,A.aO(!1,t,!0,A.p(w,A.x(A.a([A.X(d,B.b_,w,w,w,26),B.O,A.d(e,w,w,w,w,w,w,D.fqB,B.K,w,w)],x.p),B.m,w,B.e,B.P,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ajE,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)},
cng(d,e){var w,v,u=null,t=e.a,s=t?B.e3:B.c,r=A.m(14),q=A.J(t?B.e9:B.bO,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.eq,10)],x.V),o=A.m(14),n=t?B.bs:B.bn
n=A.bx(B.WD,new A.fD(1.7777777777777777,C.aRc(!0,B.fK,1/0,P.Ob,n,d.c,1/0),u),B.ap)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.B3(d.gxb()),u,u,u,u,u,u,D.foy,u,u,u)],w),B.E,u,B.e,B.i,0,B.p),1)
return A.p(u,A.aH(!1,B.a2,!0,u,A.aO(!1,o,!0,A.x(A.a([n,new A.D(B.bz,A.B(A.a([v,A.aG(u,u,u,u,A.X(Aj.a1S,t?B.bs:B.bn,u,u,u,u),u,u,u,new C.eOy(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.i,0,u,u),u)],w),B.E,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eOz(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.ee,u,u,u,1/0)}}
C.byN.prototype={}
C.rb.prototype={
ag(){var w=this,v=w.c,u=w.d
return A.G(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcWA(){var w,v,u,t,s=this.c
if(s===B.k.j3(s))w=B.o.u(B.k.N(s))
else{v=B.k.ac(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aN(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lt.prototype={
gxb(){return B.d.cH(this.d,0,new C.cCH())},
ag(){var w=this,v=w.d,u=A.T(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.cCG(),u),u.k("ak.E"))
return A.G(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ae()],x.N,x.z)},
bd7(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lt(w.a,w.b,v,u,w.e)},
bcQ(d){return this.bd7(d,null)},
T6(d){return this.bd7(null,d)}}
C.I1.prototype={
a5(){return"FamilyGender."+this.b}}
C.hU.prototype={
ag(){var w=this
return A.G(["id",w.a,"name",w.b,"gender",C.hsV(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aED(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hU(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.alh.prototype={
a5(){return"FamilyTreeAccessRole."+this.b}}
C.kN.prototype={
gaph(){var w=this.f
return new A.Y(w,new C.bR0(),A.T(w).k("Y<1>")).gL(0)},
ag(){var w=this,v=w.f,u=A.T(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.bR_(),u),u.k("ak.E"))
return A.G(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ae(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.i8m(w.y),"games",w.z],x.N,x.z)},
wx(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kN(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bd6(d,e){var w=null
return this.wx(w,w,w,d,e,w,w,w,w)},
cM4(d,e,f,g,h,i,j){return this.wx(d,e,null,f,g,h,i,j,null)},
aEI(d,e){var w=null
return this.wx(w,w,w,w,d,w,w,e,w)},
cM6(d,e,f,g,h,i,j,k){return this.wx(d,e,null,f,g,h,i,j,k)},
cKy(d){var w=null
return this.wx(w,w,w,w,w,w,w,d,w)},
cKW(d){var w=null
return this.wx(w,w,w,w,w,w,w,w,d)},
bcK(d){var w=null
return this.wx(w,w,d,w,w,w,w,w,w)},
aEt(d){var w=null
return this.wx(w,w,w,w,w,d,w,w,w)},
cLB(d,e,f){var w=null
return this.wx(w,d,w,w,e,w,w,f,w)},
cKl(d){var w=null
return this.wx(w,w,w,d,w,w,w,w,w)},
cL8(d,e){var w=null
return this.wx(d,w,w,w,w,w,e,w,w)}}
C.cCI.prototype={
a5(){return"WrapAlignment."+this.b}}
C.cCJ.prototype={
a5(){return"WrapCrossAlignment."+this.b}}
C.aHU.prototype={}
C.b9O.prototype={
by(d){this.a=d.a
this.b=d.b},
cW(d){var w=new C.b9O()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b0(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b9N.prototype={
gwp(){return!0},
gGe(){return this.z.b<this.b.length},
aUx(d){switch(0){case 0:return d.a.c}},
aUe(d){switch(0){case 0:return d.a.d}},
bT4(d,e){switch(0){case 0:return new A.hP(d,e)}},
bSs(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h7(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iH(0,0,B.o.E(0,b5.a,b5.b),B.o.E(0,b5.c,b5.d))
return}w=A.HN(b4)
switch(0){case 0:v=b5.b
u=new A.kK(0,v,0,1/0)
t=w===B.Uo
break}s=A.a([],x.gZ)
r=A.U(x.gF,x.S)
for(b3=b1.z,q=B.d.fJ(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.M)(q),++h){g=q[h]
g.h7(b4,u,!0)
f=b1.aUx(g)
f.toString
e=b1.aUe(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aHU(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aHU(k,j,i))}d=s.length
switch(0){case 0:q=b5.cz(new A.hP(m,l))
a0=q.a
a1=q.b
b1.a=new A.iH(0,0,a0,a1)
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
for(q=B.d.fJ(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.M)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aUx(g)
e=b1.aUe(g)
e.toString
a9=b1.bSs(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bT4(a6,a3+a9)
b0=g.a
g.a=new A.iH(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h1(d){var w,v,u,t,s,r=this
r.lr(d)
w=d.b
w.ih()
v=A.dr()
u=r.a
v.ef(u.a,u.b,0,1)
w.p8(0,v)
for(u=r.z,u=B.d.ds(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.M)(u),++s)u[s].h1(d)
w.nq(0)},
GI(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
ih(){return this.z}}
C.bx7.prototype={}
var z=a.updateTypes(["aA<~>()","R(hU)","~()","R(kN)","R(nl)","a8<n,@>(kN)","H(kN,kN)","H(hU,hU)","n(hU)","kN(a8<@,@>)","R(lt)","nl(a8<@,@>)","a8<n,@>(nl)","R(ux)","ux()","H(hU)","ai<hU>()","R(zh)","a_s(Z)","n?(hU)","ev<n?>(hU)","aA<~>(lt)","R(rb)","a8<n,@>(hU)","hU(a8<@,@>)","H(lt,lt)","R(af9)","~(b9)","v(oq)","H(H,a9l)","R(qw<H>)","~(qw<H>)","Th(Z)","R(Mj)","R(uw)","~(hU)","n(n)","VD(Z)","Tg(Z)","adx(Z)","Zo(Z)","hU(hU)","cN(bA<n,Gb>)","cN(Kt)","ZS(Z)","H?(hU)","hU()","R(Kt)","D(hU)","~(I1)","ZO(Z)","v(I1,n,a0)","R(af2)","bA<n,ai<a8<n,@>>>(n,ai<nl>)","ZQ(Z)","+count,id,name(H,n,n)(kN)","n(kN)","a_N(Z)","a_O(Z)","R(lL)","lL()","YX(Z)","a1A(Z)","Zq(Z)","Zp(Z)","~(H)","~(n,li?)","v(rb)","adS(Z)","~(m9)","aA<~>([n?])","K(K,lt)","v(lt)","K(K,rb)","a8<n,@>(rb)","rb(a8<@,@>)","ai<li>()","uw()","n(V)","lt(a8<@,@>)","cu(I0)","n(lt)","a8<n,@>(lt)","H(nl,nl)","kN(a8<n,@>)","kN(kN)"])
C.fH2.prototype={
$1(d){return d.a+" "+d.b},
$S:129}
C.fH1.prototype={
bmo(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.r3(s,d,B.hO,"book",E.FY),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.Lt(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bmo(d)},
$S:306}
C.fH3.prototype={
$1(d){return d.b},
$S:129}
C.fQx.prototype={
$1(d){var w=null
return A.eS(w,B.L,new H.PX(this.a,this.b,w),w,w,0,B.a_c,B.d8,w,w,w)},
$S:47}
C.fv8.prototype={
$1(d){return d!=null},
$S:209}
C.fv9.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:209}
C.fve.prototype={
$1(d){if(this.a)return new A.t(d.a*520,d.b*160)
return d},
$S:170}
C.fEM.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fc(d,w,w,w,A.hb(w,B.rV,w,w,w,w,w,w,w,B.dy,w,w,10.5,w,B.ew,w,!0,w,w,w,w),w),u=f?B.ew:B.w3
return new A.nU(D.bxo,A.aa8(A.a([new A.fU(130,w,v),new A.zg(1,B.Gv,A.fc(e,w,w,w,A.hb(w,g==null?D.eny:g,w,w,w,w,w,w,w,B.dy,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.xZ,B.lJ))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1940}
C.fEL.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vH(999)
f=A.xj(A.lG(h,A.fc("Cashier",h,h,h,A.hb(h,D.zT,h,h,h,h,h,h,h,B.dy,h,h,10,h,B.ew,h,!0,h,h,h,h),h),h,new A.kL(D.enp,h,f,B.hR,h),h,h,D.bxT,h))
w=A.xj(A.fc("Debt receipt",h,h,h,A.hb(h,h,h,h,h,h,h,h,h,B.dy,h,h,22,h,B.ew,h,!0,h,h,h,h),h))
v=A.xj(A.fc(C.x1(new A.V(Date.now(),0,!1),!0),h,h,h,D.a9A,h))
u=A.vH(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fc(s,h,h,h,A.hb(h,h,h,h,h,h,h,h,h,B.dy,h,h,14,h,B.ew,h,!0,h,h,h,h),h)
r=A.fc("Person who owes",h,h,h,D.a9A,h)
q=A.vH(10)
p=x.Z
u=A.lG(h,A.za(A.a([s,new A.fU(h,2,h),r,new A.fU(h,10,h),A.lG(h,A.za(A.a([A.fc("Amount owed",h,h,h,D.a9A,h),new A.fU(h,2,h),A.fc(A.B3(t.c),h,h,h,A.hb(h,D.zT,h,h,h,h,h,h,h,B.dy,h,h,20,h,B.ew,h,!0,h,h,h,h),h)],p),B.ri,B.lJ),h,new A.kL(B.pp,h,q,B.hR,h),h,h,D.bx5,1/0)],p),B.ri,B.lJ),h,new A.kL(E.aKk,h,u,B.hR,h),h,h,D.byZ,1/0)
q=new A.nC(D.ens,0.9,B.kY)
r=A.vH(12)
s=i.c
o=s.$2("Original due",C.x1(t.r,!1))
n=s.$2("Current due",C.x1(t.f,!1))
m=i.d
l=new A.nC(m,1.1,B.kY)
k=A.vH(8)
j=i.a
k=A.a([o,n,new A.fU(h,6,h),A.lG(h,A.xj(A.fc(t.gaLC(),h,h,h,A.hb(h,m,h,h,h,h,h,h,h,B.dy,h,h,11,h,B.ew,h,!0,0.5,h,h,h),h)),h,new A.kL(h,new A.pL(l,l,l,l),k,B.hR,h),h,h,D.by0,1/0),new A.fU(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.zT))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.zT))
else{n=A.fc("Missed days ("+n+")",h,h,h,A.hb(h,B.rV,h,h,h,h,h,h,h,B.dy,h,h,10.5,h,B.ew,h,!0,h,h,h,h),h)
m=A.T(o).k("N<1,SP>")
o=A.C(new A.N(o,new C.fEK(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fU(h,4,h),n,new A.fU(h,6,h),new C.b9N(5,5,new C.b9O(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fU(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fU(h,8,h),w,new A.fU(h,3,h),v,new A.fU(h,16,h),u,new A.fU(h,10,h),A.lG(h,A.za(k,B.xZ,B.lJ),h,new A.kL(h,new A.pL(q,q,q,q),r,B.hR,h),h,h,B.ajQ,1/0)],p)
w=j.a
if(w!=null){v=new A.nC(B.J7,1,B.kY)
B.d.v(f,A.a([new A.fU(h,16,h),A.fc("Debtor signature",h,h,h,A.hb(h,B.rV,h,h,h,h,h,h,h,B.dy,h,h,10,h,B.ew,h,!0,h,h,h,h),h),new A.fU(h,6,h),A.lG(h,new A.Ij(w,B.WN,h,h),h,new A.kL(h,new A.pL(v,v,v,v),A.vH(6),B.hR,h),82,h,B.NB,1/0)],p))}f.push(new A.fU(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fc(w,h,h,h,D.fh1,h))
f.push(new A.fU(h,18,h))
f.push(A.xj(A.fc("NGMY.ORG",h,h,h,A.hb(h,D.zT,h,h,h,h,h,h,h,B.dy,h,h,14,h,B.ew,h,!0,1.8,h,h,h),h)))
return f},
$S:399}
C.fEK.prototype={
$1(d){var w=null,v=new A.nC(D.J8,0.7,B.kY),u=A.vH(999)
return A.lG(w,A.fc(C.x1(d,!1),w,w,w,A.hb(w,D.J8,w,w,w,w,w,w,w,B.dy,w,w,9.5,w,B.ew,w,!0,w,w,w,w),w),w,new A.kL(w,new A.pL(v,v,v,v),u,B.hR,w),w,w,D.bDl,w)},
$S:1941}
C.c6e.prototype={
$1(d){var w=null,v=B.bx.j(0.08),u=A.m(999),t=A.J(B.bx.j(0.28),B.r,1)
return A.p(w,A.d(C.x1(d,!1),w,w,w,w,w,w,D.fo1,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eJ,w,w,w)},
$S:1942}
C.fR3.prototype={
$1(d){var w=null,v=A.aJ(d,B.bX,x.w).w,u=A.m(26),t=A.aG(w,w,w,w,D.bWe,w,w,w,new C.fR0(d),w,w,w,w,w,B.cb),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eS(w,B.L,new A.cU(new A.aZ(0,380,0,v.a.b*0.9),A.aH(!1,B.a2,!0,u,new A.D(B.a_1,A.x(A.a([new A.bO(B.a8,w,w,t,w),new A.ds(1,B.cn,A.cg(A.x(A.a([new A.ey(new C.aZI(r,w),s),B.W,A.B(A.a([A.E(A.et(B.z6,D.fQ6,new C.fR1(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fe,w,new A.b7(A.m(14),B.a0),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ac,A.E(A.dl(B.a2t,D.fMu,new C.fR2(r,d),A.bo(B.b_,w,w,w,B.c,w,B.fe,w,new A.b7(A.m(14),B.a0),w,w,w)),1)],p),B.m,w,B.e,B.i,0,w,w)],p),B.m,w,B.e,B.P,0,B.p),B.t,w,B.y,w,w,w,w,B.ag),w)],p),B.m,w,B.e,B.P,0,B.p),w),B.f,B.av,0,w,w,w,w,w,B.aj),w),w,w,0,Am.a_q,B.d8,w,w,w)},
$S:47}
C.fR0.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fR1.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aV.al$.x.h(0,t.a)
m=m==null?null:m.gbd()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m5(2.5),$async$$0)
case 4:w=3
return A.b(e.ht(B.h9),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eR(B.dJ.gaR(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aN(q,p,"_")
if(o.length>32)o=B.a.aq(o,0,32)
w=5
return A.b(A.t6(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fR2.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fLn(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.K(x.q).f
s.U(A.b3(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fQW.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eS(w,B.av,A.x(A.a([new A.D(D.byN,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.n0,w,w,w),1),A.aG(w,w,w,w,B.lf,w,w,w,new C.fQU(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),w),new A.ds(1,B.cn,new A.D(B.eZ,A.bx(A.m(14),A.fF(t,B.A,w,w,B.cc,B.dw,!1,w,!1,w,w),B.ap),w),w),new A.D(B.Nf,new A.a6(1/0,w,A.dl(B.nx,D.aUh,new C.fQV(t,this.c,d),A.bo(B.b_,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.a0),w,w,w)),w),w)],u),B.m,w,B.e,B.P,0,B.p),w,w,w,B.Ns,B.d8,w,new A.b7(v,B.a0),w)},
$S:47}
C.fQU.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fQV.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.t6(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fR7.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eS(w,B.av,new A.D(D.byV,A.x(A.a([A.B(A.a([D.bEp,A.aG(w,w,w,w,B.lf,w,w,w,new C.fR5(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),B.O,new A.ey(A.bx(A.m(14),A.p(w,A.b4(w,w,w,new C.bbZ(s.ax,w),B.ax),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.ad,new A.a6(1/0,w,A.dl(B.nx,D.aUh,new C.fR6(t,s,d),A.bo(B.b_,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.a0),w,w,w)),w)],u),B.m,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d8,w,new A.b7(v,B.a0),w)},
$S:47}
C.fR5.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fR6.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aV.al$.x.h(0,t.a)
n=n==null?null:n.gbd()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m5(2.5),$async$$0)
case 4:w=3
return A.b(e.ht(B.h9),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aN(r,q,"_")
if(p.length>32)p=B.a.aq(p,0,32)
r=J.eR(B.dJ.gaR(s))
w=5
return A.b(A.t6(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fzr.prototype={
$1(d){return d.a===this.a},
$S:246}
C.dMc.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dLY.prototype={
blC(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e3:B.c
s=u.a
w=2
return A.b(A.bV(t,null,new C.dM0(s,q,e),p,!0,!0,!1,B.Jo,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dM1(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.blC(d,e)},
$S:1943}
C.dM0.prototype={
$1(d){var w,v=null,u=this.c===B.wE,t=u?D.dna:D.diQ
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.av,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bl(!0,new A.D(N.akn,A.x(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bs:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ad,A.iy(!0,v,v,B.y,D.f7v,new C.dM_(this.a,w,t,d),t.length,v,B.dR,B.ag,!0)],x.p),B.ak,v,B.e,B.P,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:26}
C.dM_.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cO.j(0.14)
else w=t.b.a.d.a?B.M:B.aP
v=A.m(14)
if(q)u=B.cO
else u=(t.b.a.d.a?B.bs:B.bn).j(0.16)
u=A.J(u,B.r,q?1.6:1)
return A.aO(!1,p,!0,A.p(B.A,C.aZH(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dLZ(t.d,r),s,s,s,s,s,s,s)},
$S:193}
C.dLZ.prototype={
$0(){A.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.dM1.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dLW.prototype={
$3(d,e,f){return B.bJ},
$C:"$3",
$R:3,
$S:97}
C.dLX.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cJ(B.cv,e,v)
return new A.d2(e,!1,A.ir(B.A,A.at(A.aH(!1,B.a2,!0,v,new A.dZ(new C.dLV(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.aj),v,v,v),v,new A.bf(t,new A.bp(0.96,1,u),u.k("bf<bP.T>"))),v)},
$S:33}
C.dLV.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aJ(d,B.bX,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e3:B.c,f=A.m(14),e=A.J((h?B.bs:B.bn).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.B(A.a([w,A.aO(!1,v,!0,new A.D(B.ev,A.X(B.cz,i.a.d.a?B.bs:B.bn,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dLG(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.i,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aTq("Name")
r=l.a
q=r.d==null?k:new C.dLH(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bo:B.m0
n=A.J(B.cO.j(0.35),B.r,1)
m=r.d
t=A.aL(k,B.Y,h,k,!0,B.t,k,A.aM(),w,k,k,k,k,k,2,s.bd_(new A.D(B.fB,A.aO(!1,p,!0,A.p(B.A,C.aZH(m==null?"\ud83d\udc64":A.fFA(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cl,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a3,k,B.kU,k,B.a9p,k,k)
v=A.a([v,B.ad,t,B.O,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11.5,k,k,B.Q,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aU4("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dLI(r,a0),r.d===B.wE),1),B.ac,A.E(i.aU4("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dLN(r,a0),r.d===B.a6e),1)],u),B.m,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.O,new A.bO(B.a5,k,k,A.hr(D.bUw,D.fOn,new C.dLO(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cO,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cb)),k)],u))
v.push(B.W)
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uA(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aL(k,B.Y,!1,k,!0,B.t,k,A.aM(),l.f,k,k,k,k,k,2,i.aTr("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ai,k,k,s,k,k,B.e1,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a3,k,B.an,k,k,k,k))
v.push(B.W)
t=i.a.d.a
s=t?B.M:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.J((t?B.bs:B.bn).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.x1(r.a,!1)
v.push(A.aH(!1,B.a2,!0,q,A.aO(!1,p,!0,A.p(k,A.B(A.a([A.E(A.x(A.a([t,B.bD,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.Q,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.i,0,B.p),1),D.bRe],u),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bf,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dLP(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.aj))
if(!h)B.d.v(v,A.a([B.O,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.W)
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aL(k,B.Y,!1,k,!0,B.t,k,A.aM(),l.r,k,k,k,k,k,2,i.aTq("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a3,k,B.an,k,k,k,k))
v.push(B.ad)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b1h(r.b.length!==0,B.mL,new C.dLQ(r,i,a0),new C.dLR(r,a0),"Upload from gallery","ID photo"))
v.push(i.b1h(r.c.length!==0,D.bKz,new C.dLS(r,i,d,a0),new C.dLT(r,a0),"Camera or gallery","Selfie"))
v.push(B.O)
t=l.w
v.push(new Al.a7Y("Signature (optional)",t,new C.dLU(a0),new C.dLJ(a0,t),new C.dLK(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.bs:B.bn
s=(i?B.bs:B.bn).j(0.28)
s=A.E(A.dI(E.aUa,new C.dLL(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.tZ,k,new A.b7(A.m(10),B.a0),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bo(B.cO,k,k,k,B.c,k,B.tZ,k,new A.b7(A.m(10),B.a0),k,k,k)
v.push(A.B(A.a([s,B.ac,A.E(A.bE(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vf,k,k,k),k,new C.dLM(r,w,d),t),1)],u),B.m,k,B.e,B.i,0,k,k))
return A.p(k,A.cg(A.x(v,B.ak,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ag),B.f,k,new A.aZ(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.rq,B.jh,k,k,360)},
$S:163}
C.dLG.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dLH.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dLI.prototype={
$0(){return this.b.$1(new C.dLF(this.a))},
$S:0}
C.dLF.prototype={
$0(){var w=this.a
w.d=B.wE
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dLN.prototype={
$0(){return this.b.$1(new C.dLE(this.a))},
$S:0}
C.dLE.prototype={
$0(){var w=this.a
w.d=B.a6e
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dLO.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dLP.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.vz(null,u.b,A.c3(2020,1,1,0,0,0,0,0),null,s,A.c3(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dLD(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLD.prototype={
$0(){var w=this.b
return this.a.a=A.c3(w.gcf(),w.gcb(),w.gcu(),0,0,0,0,0)},
$S:0}
C.dLQ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.PL(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dLC(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLC.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dLR.prototype={
$0(){return this.b.$1(new C.dLB(this.a))},
$S:0}
C.dLB.prototype={
$0(){return this.a.b=""},
$S:0}
C.dLS.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e3:B.c
w=3
return A.b(A.bV(q,null,new C.dLz(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.PL(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dLA(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLz.prototype={
$1(d){var w=null
return A.bl(!0,A.x(A.a([A.dy(!1,w,w,w,!0,w,w,w,!0,w,w,B.aps,w,w,w,w,new C.dLt(d),!1,w,w,w,w,w,w,w,D.fEv,w,w,w),A.dy(!1,w,w,w,!0,w,w,w,!0,w,w,B.apq,w,w,w,w,new C.dLu(d),!1,w,w,w,w,w,w,w,D.fLv,w,w,w)],x.p),B.m,w,B.e,B.P,0,B.p),!0,!1,B.af,!0,!0)},
$S:26}
C.dLt.prototype={
$0(){A.a4(this.a,!1).O("camera")
return null},
$S:0}
C.dLu.prototype={
$0(){A.a4(this.a,!1).O("gallery")
return null},
$S:0}
C.dLA.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dLT.prototype={
$0(){return this.b.$1(new C.dLy(this.a))},
$S:0}
C.dLy.prototype={
$0(){return this.a.c=""},
$S:0}
C.dLU.prototype={
$0(){return this.a.$1(new C.dLx())},
$S:0}
C.dLx.prototype={
$0(){},
$S:0}
C.dLJ.prototype={
$0(){return this.a.$1(new C.dLw(this.b))},
$S:0}
C.dLw.prototype={
$0(){return B.d.a7(this.a)},
$S:0}
C.dLK.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ai5(u.a,null,null,new C.dLv(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLv.prototype={
$4(d,e,f,g){this.a.$1(new C.dLs(this.b,d))},
$S:478}
C.dLs.prototype={
$0(){var w=this.a
B.d.a7(w)
B.d.v(w,this.b)},
$S:0}
C.dLL.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dLM.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.K(x.q).f.U(D.fcz)
return}if(w.a.d==null){w.c.K(x.q).f.U(D.f9s)
return}A.a4(w.c,!1).O(!0)},
$S:0}
C.dMf.prototype={
$3(d,e,f){return B.bJ},
$C:"$3",
$R:3,
$S:97}
C.dMg.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e3:B.c,n=A.m(14),m=A.J((p?B.bs:B.bn).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.av,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.B3(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bs:B.bn,r,r,r,r,r,r,r,r,13,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zd(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.zd(r).length>0?B.bx:B.cO,r,r,r,r,r,r,r,r,12,r,r,B.Q,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bs:B.bn
t=(q?B.bs:B.bn).j(0.28)
s=x.p
return new A.d2(e,!1,A.at(A.aH(!1,B.a2,!0,r,A.p(r,A.x(A.a([p,B.O,v,u,B.aA,A.B(A.a([A.E(A.dI(B.nM,new C.dMd(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.jQ,r,new A.b7(A.m(10),B.a0),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ac,A.E(A.bE(D.fLV,r,new C.dMe(d),A.bo(B.cO,r,r,r,B.c,r,B.jQ,r,new A.b7(A.m(10),B.a0),r,r,r)),1)],s),B.m,r,B.e,B.i,0,r,r)],s),B.ak,r,B.e,B.P,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.BV,E.a_h,r,r,300),B.f,B.L,0,r,r,r,r,r,B.aj),r,r,r),r)},
$S:33}
C.dMd.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dMe.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dM9.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dMa(r),p=r.a.d.a,o=p?B.e3:B.c,n=A.m(14),m=A.J((p?B.bs:B.bn).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a1,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.av,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.B3(l.c),s,s,s,s,s,s,D.fpC,s,s,s)],p),B.m,s,B.e,B.i,0,s,s)
w=A.iD((r.a.d.a?B.bs:B.bn).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a18,"View receipt",new C.dM2(r,d,l))
u=l.x!=null
t=u?B.rA:B.qk
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.byS,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dM3(r,d,l)),q.$3$icon$label$onTap(B.C6,"Edit",new C.dM4(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mL,"View / download ID",new C.dM5(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bKy,"View / download selfie",new C.dM6(r,d,l)))
if(l.gaGk())p.push(q.$3$icon$label$onTap(Ab.a2j,"View / download signature",new C.dM7(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bx,B.ea,"Delete",new C.dM8(r,d,l)))
p.push(B.au)
return A.bl(!0,new A.D(B.u4,A.p(s,A.x(p,B.m,s,B.e,B.P,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:26}
C.dMa.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.av
else w=d
return A.aO(!1,v,!0,new A.D(B.eT,A.B(A.a([A.X(e,w,v,v,v,20),B.bd,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.Q,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1944}
C.dM2.prototype={
$0(){A.a4(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fR_(w,this.c)},
$S:0}
C.dM3.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.Ss(this.c)},
$S:0}
C.dM4.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.Dh(this.c)},
$S:0}
C.dM5.prototype={
$0(){var w,v,u
A.a4(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bEP(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dM6.prototype={
$0(){var w,v,u
A.a4(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bEP(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dM7.prototype={
$0(){A.a4(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fR4(w,this.c)},
$S:0}
C.dM8.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.PK(0,this.c)},
$S:0}
C.dMh.prototype={
$1(d){return d.x==null},
$S:246}
C.dMi.prototype={
$1(d){return d.x!=null},
$S:246}
C.dMj.prototype={
$2(d,e){return d+e.c},
$S:1945}
C.dMk.prototype={
$0(){return this.a.bBd()},
$S:0}
C.dMb.prototype={
$0(){return this.a.afv(this.b)},
$S:0}
C.fA4.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fA5.prototype={
$0(){return B.d.gI(D.a3E)},
$S:z+77}
C.dcl.prototype={
$0(){var w=this.a
return w.m(new C.dcj(w,this.b))},
$S:0}
C.dcj.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dck.prototype={
$0(){},
$S:0}
C.dcm.prototype={
$0(){var w=this.a.gc_q()
A.a4(this.b,!1).O(w)
return null},
$S:0}
C.fCl.prototype={
$1(d){return C.hdt(A.a2(d,x.N,x.z))},
$S:z+11}
C.fCm.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fCn.prototype={
$2(d,e){var w=A.cb(d.a,null),v=A.cb(e.a,null)
if(w!=null&&v!=null)return B.o.aK(w,v)
return d.d.aK(0,e.d)},
$S:z+83}
C.fPD.prototype={
$1(d){return d.ag()},
$S:z+12}
C.fXZ.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fzi.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bPI.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f0(e,v)?v:null},
$S:1946}
C.fQb.prototype={
$1(d){var w=this
return new C.ZQ(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dd0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dd_(w,d))},
$S:z+80}
C.dd_.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcP.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cL(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dcM.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dcn.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dco.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dcQ.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dcw.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.J,u=v?B.e3:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.en(A.a([A.bM(!1,B.di,w,w,!0,w,w,w,new C.dcu(d),w,w),A.bE(B.x0,w,new C.dcv(d),A.bo(B.n9,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dcu.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dcv.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dcx.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.E(w.r-1,-1,999)},
$S:0}
C.dcN.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dcO.prototype={
$0(){return B.d.gI(D.zi)},
$S:z+14}
C.dcs.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyy(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Tg(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dct.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcy.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Zo(v,u,J.ad(w.d),null)},
$S:z+40}
C.dcz.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcZ.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aB(s,new C.Z5(r.y,r.gyy(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dcX(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.r(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bbl(v,e,w,u,t,r.gbRy(),C.hsU(r.y.Q),r.gyy(0),s)
w=t}return A.cc(q,new C.dcY(r,e),new A.D(B.a_i,w,s))},
$S:1947}
C.dcY.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd2(t).ay){t=this.b
u=x.cy.a(B.d.gd2(u.f.f)).gv0(0)
w=t-(u==null?t:u)}else w=0
v=B.k.E(w,-1,0)
u=A.dr()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fG(v*3.141592653589793*0.5)
return A.fw(B.a5,A.d9(e,B.k.E(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.dcX.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aHq(B.q5,B.iT)},
$S:0}
C.dcJ.prototype={
$0(){var w=this.a
return w.m(new C.dcI(w))},
$S:0}
C.dcI.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dcK.prototype={
$0(){var w=this.a.c
w.toString
A.a4(w,!1).O(null)
return null},
$S:0}
C.dcp.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.kb.j(0.5),r=x.p,q=A.a([D.fD4,B.ad],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ct(p.d)?"Write this book":"Write a new book"
q.push(p.Zk(d,B.e5,w,J.ct(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Zk(d,F.ano,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cL(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cu,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kz.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cu,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kz.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Zk(d,W.aor,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Zk(d,B.qq,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Zk(d,B.qq,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eS(u,E.Bm,A.bl(!0,new A.D(Aa.yi,A.x(q,B.E,u,B.e,B.P,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.akN,B.d8,u,new A.b7(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:47}
C.dcL.prototype={
$0(){A.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.dcC.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cL(w.d)
return new C.ZS(v,J.cL(w.d),w.r+1,null)},
$S:z+44}
C.dcD.prototype={
$1(d){var w=null
return A.ox(!1,A.en(w,w,w,E.Bm,new A.jS(this.a,new C.dcB(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:324}
C.dcB.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a94,B.oD,A.E(A.d(e,w,w,w,w,w,w,B.j2,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:553}
C.dcE.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dcF.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:185}
C.dcG.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcH.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Bc(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.S4(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dcA(s,t))
w=4
return A.b(s.l8(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dcA.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcS.prototype={
$1(d){var w=null
return A.ox(!1,A.en(w,w,w,E.Bm,new A.jS(this.a,new C.dcR(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:324}
C.dcR.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a94,B.oD,A.E(A.d(e,w,w,w,w,w,w,B.j2,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:553}
C.dcT.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dcU.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:185}
C.dcV.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:185}
C.dcW.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Bc(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.l8(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dcq.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bix(B.q5,A3.N2)},
$S:0}
C.dcr.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aHq(B.q5,A3.N2)},
$S:0}
C.deL.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.deM.prototype={
$1(d){var w=this.a
return w.m(new C.deK(w))},
$S:8}
C.deK.prototype={
$0(){return this.a.e="page"},
$S:0}
C.deN.prototype={
$1(d){var w=this.a
return w.m(new C.deJ(w))},
$S:8}
C.deJ.prototype={
$0(){return this.a.e="book"},
$S:0}
C.deO.prototype={
$1(d){var w=this.a
return w.m(new C.deI(w))},
$S:8}
C.deI.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.deP.prototype={
$0(){var w=this.a
return w.m(new C.deH(w,this.b))},
$S:0}
C.deH.prototype={
$0(){var w=this.b
this.a.d.saX(0,w)
return w},
$S:0}
C.deQ.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga24()
A.a4(this.b,!1).O(new A.bq3(w,v))},
$S:0}
C.ddf.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dde.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.ZO(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.ddj.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.ddi.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b8F(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hm,v,v,v)
return A.en(A.a([A.bM(!1,B.di,v,v,!0,v,v,v,new C.ddg(d),v,v),A.bE(B.x0,v,new C.ddh(d),A.bo(B.n9,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Bm,w,v,v,v,v,D.fBQ,v)},
$S:18}
C.ddg.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.ddh.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.ddk.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.ddl.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)r.push(new A.a6(s,t,w[u],t))
return A.cg(A.bX(B.bC,r,B.bq,t,18,14),B.t,t,B.y,t,D.bzO,t,t,B.ag)},
$S:279}
C.ddd.prototype={
$0(){return this.a.Qs(0,this.b)},
$S:0}
C.ddc.prototype={
$0(){return this.a.PW(0,this.b)},
$S:0}
C.cLv.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cLw.prototype={
$0(){return B.d.gI(D.zi)},
$S:z+14}
C.cLx.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bU(0,new A.D(d,A.c4(w,new A.o(w,w,A.J(this.a.j(f),B.r,g),v,w,w,B.n),B.bg),w),0,0,0)},
$S:1949}
C.d4k.prototype={
$1(d){return this.a.m(new C.d4j(this.b,this.c))},
$S:8}
C.d4j.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d4J.prototype={
$1(d){return this.a.m(new C.d4w())},
$S:2}
C.d4w.prototype={
$0(){},
$S:0}
C.d4K.prototype={
$1(d){return this.a.m(new C.d4v())},
$S:2}
C.d4v.prototype={
$0(){},
$S:0}
C.d4L.prototype={
$0(){var w=this.a
return w.m(new C.d4u(w,this.b))},
$S:0}
C.d4u.prototype={
$0(){var w=this.a
return w.d=w.goc().FT(this.b.a)},
$S:0}
C.d4M.prototype={
$0(){var w=this.a
return w.m(new C.d4t(w,this.b))},
$S:0}
C.d4t.prototype={
$0(){var w=this.a
return w.d=w.goc().cJS(this.b)},
$S:0}
C.d4N.prototype={
$1(d){return this.a.m(new C.d4s())},
$S:2}
C.d4s.prototype={
$0(){},
$S:0}
C.d4O.prototype={
$0(){var w=this.a
return w.m(new C.d4r(w,this.b))},
$S:0}
C.d4r.prototype={
$0(){var w=this.a
return w.d=w.goc().cJX(this.b.a)},
$S:0}
C.d4P.prototype={
$1(d){var w=this.a
return w.m(new C.d4E(w,d))},
$S:6}
C.d4E.prototype={
$0(){var w=this.a
return w.d=w.goc().cKR(this.b)},
$S:0}
C.d4Q.prototype={
$1(d){var w=this.a
return w.d=w.goc().aEw(d)},
$S:2}
C.d4R.prototype={
$1(d){var w=this.a
return w.d=w.goc().cK_(d)},
$S:2}
C.d4T.prototype={
$1(d){var w=this.a
return w.d=w.goc().cKP(d)},
$S:2}
C.d4U.prototype={
$1(d){var w=this.a
return w.m(new C.d4D(w,d))},
$S:8}
C.d4D.prototype={
$0(){var w=this.a
return w.d=w.goc().cKG(this.b)},
$S:0}
C.d4V.prototype={
$0(){var w=this.a,v=w.goc(),u=B.a.i(w.gyy(0).a.a),t=B.a.i(w.gaBF().a.a)
u=v.bdg(B.a.i(w.garu().a.a),t,u)
A.a4(this.b,!1).O(u)
return null},
$S:0}
C.bPS.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:9}
C.bPM.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bPL(w,d))},
$S:11}
C.bPL.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a4(0)}},
$S:0}
C.bPV.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bPN.prototype={
$0(){var w=this.a
w.Q=D.aYO
w.adg(1)
w.r.x=null},
$S:0}
C.bPO.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.aYO)return
w=new A.e9()
w.d4(u.as*13+u.a.e)
v=u.r
v.Q=3+w.ar(3)
v.z=D.cZK[w.ar(6)]
v.as=u.f.a+2.6},
$S:0}
C.bPR.prototype={
$0(){var w=this.a
w.Q=D.abD
w.adg(2)
w.r.z=null},
$S:0}
C.bPQ.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hph
t.adg(3)
w=t.r
w.d=s
w.x="I say: "+t.gC4()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.ar(3)
w.z=s?D.d53[v.ar(4)]:D.dpB[v.ar(3)]
w.as=t.a+2.8},
$S:0}
C.bPT.prototype={
$0(){var w=this.a
w.Q=D.aYP
w.CW=this.b
w.cy=1
w.adg(4)
w.r.f=w.f.a+5},
$S:0}
C.bPU.prototype={
$0(){},
$S:0}
C.bPP.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ie()},
$S:0}
C.bPJ.prototype={
$0(){return this.a.KG(this.b)},
$S:0}
C.bPK.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ie()},
$S:0}
C.bRo.prototype={
$0(){var w=this
return w.a.QL(w.b,0,w.c,w.d)},
$S:0}
C.bRp.prototype={
$0(){var w=this
return w.a.QL(w.b,3,w.c,w.d)},
$S:0}
C.bRq.prototype={
$0(){var w=this
return w.a.QL(w.b,1,w.c,w.d)},
$S:0}
C.bRr.prototype={
$0(){var w=this
return w.a.bR_(w.b,w.c,w.d)},
$S:0}
C.bRs.prototype={
$0(){var w=this
return w.a.QL(w.b,4,w.c,w.d)},
$S:0}
C.bRt.prototype={
$0(){var w=this
return w.a.QL(w.b,2,w.c,w.d)},
$S:0}
C.bRu.prototype={
$0(){var w=this
return w.a.QL(w.b,5,w.c,w.d)},
$S:0}
C.bRv.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:547}
C.bRn.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a4L[d],p=q.a.a9(0,new A.t(0,-q.b*1.2*124)),o=A.fv(r,r,3,r,A.cS(r,r,r,r,r,r,r,r,r,D.fgI,e),B.a3,B.bZ,r,B.dA,B.bW)
o.nZ(130)
w=o.b.a.c
w=p.aF(0,new A.t(0,w.gbb(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bt(A.bJ(w,v.gbb(v)+12,u+18),B.hQ)
u=this.a
v=t.eW(B.dB)
w=$.S()
s=A.I()
s.r=B.dm.gp(0)
u.az(v,s)
s=A.I()
s.r=D.q_.gp(0)
u.az(t,s)
w=new A.aF(w.r,B.ah,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.D(new A.aY(s-5,v))
w.D(new A.aq(s+1,p.b+1))
w.D(new A.aq(s+6,v))
w.D(new A.bs())
v=A.I()
v.r=D.q_.gp(0)
u.aG(w,v)
o.a3(u,new A.t(t.a+9,t.b+6))},
$S:525}
C.bQ8.prototype={
$2(d,e){return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.bQ9.prototype={
$2(d,e){var w=this.a,v=B.o.aK(w.alH(d),w.alH(e))
if(v!==0)return v
return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.fo7.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.fXQ.prototype={
$2(d,e){if(e!=null)J.cd(this.a.c4(0,d,new C.fXR()),e)},
$S:z+66}
C.fXR.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.fXS.prototype={
$1(d){return d!==this.a},
$S:3}
C.fXT.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.fXU.prototype={
$1(d){return d!==this.a&&!B.d.b2(this.b,new C.fXP(this.c,d))},
$S:3}
C.fXP.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fXV.prototype={
$1(d){return d!==this.a},
$S:3}
C.fXW.prototype={
$1(d){return d!==this.a},
$S:3}
C.fXX.prototype={
$1(d){return d!==this.a&&!B.d.b2(this.b,new C.fXO(this.c,d))},
$S:3}
C.fXO.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fAC.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fOE.prototype={
$1(d){return d.Q},
$S:z+15}
C.fOF.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fx3.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fDe.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bL7.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.fYf.prototype={
$2(d,e){return B.o.aK(C.hpj(d),C.hpj(e))},
$S:218}
C.fYg.prototype={
$1(d){return d!==this.a},
$S:3}
C.fPa.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bJl.prototype={
$0(){var w=this.a
w.ch=!0
w.b6V()},
$S:0}
C.bJg.prototype={
$0(){},
$S:0}
C.bJm.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bJe.prototype={
$0(){},
$S:0}
C.bJf.prototype={
$0(){},
$S:0}
C.bJk.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bU(0,A.b4(u,u,u,new C.bc_(t,u),B.ax),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.m(14)
s.push(A.ao(u,A.p(u,A.d(t.dy,u,u,u,u,u,u,D.fod,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.n),u,u,u,u,B.bS,u,u,u),u,u,14,14,6,u))}return A.aB(B.c9,new A.an(B.a_,u,B.ab,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bJh(t,e),u,u,u,u,u,u,u,new C.bJi(t,e),u,u,u,u,u,u,u,u,u,new C.bJj(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bJh.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:21}
C.bJj.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:23}
C.bJi.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:21}
C.bJd.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ie()},
$S:0}
C.cn6.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cn7.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cn5(w))},
$S:0}
C.cn5.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cn8.prototype={
$0(){var w=this,v=w.a
v.giT()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cn9.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cna.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cnb.prototype={
$0(){},
$S:0}
C.cnc.prototype={
$0(){var w=this.a
w.z=w.WU(++w.e)
w.Q=A.c1(w.gkJ()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cn2.prototype={
$0(){return A.a4(this.a,!1).ie()},
$S:0}
C.cn3.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.giT().length,e=i/2,d=new C.cn4(i,f,h),a0=g.as,a1=A.a7(a0).k("bc<2>")
a0=A.C(new A.bc(a0,a1),a1.k("L.E"))
a0=A.bU(0,A.cc(new A.h5(a0),new C.cmY(g,new A.t(e,56),f,d),j),0,0,0)
a1=this.b
w=g.giT().length!==0&&!B.d.t(g.giT(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.Qd(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cN(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.Mq(new C.cmZ(g,u),new C.cn_(g,u),new C.cn0(g,u),j,j,new A.bN("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.d(a1,j,j,j,j,j,j,A.l(j,j,B.a.t(a1,"not a child")?B.f9:B.bj,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.giT().length!==0&&!B.d.t(g.giT(),-1)){a0=g.e+1>=g.gkJ().length?"See my result":"Next family"
g=A.at(C.ue(a0,g.gq5(g),B.cJ,B.jT,D.fr),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.WU(0):s).length))break
if(!B.d.t(g.giT(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.WU(0)
o=s}else o=s
n=s[u]
n=A.ed(B.A,new C.Qd(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.WU(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.qT(new A.bp(0,p,t),new C.cn1(),new S.DY(u,j,new C.Qd(l.b,k,62,!1,j),new A.kA(0.25,new C.Qd(m.b,k,62,!1,j),j),new A.jM(n,B.aj,!1,0,B.L,j,j,j,j,!0,B.f,B.a2,j,j),B.I,S.hsP(),!0,!0,j,j,j,j,j,j,!1,B.jB,j,new A.bN("chip-"+r,a0),w),B.b6,B.iU,j,new A.bN("t"+r+"-"+q,a0),v))}++u}g=A.bX(B.fH,a1,B.bq,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.an(B.a_,j,B.ab,B.t,e,j)},
$S:69}
C.cn4.prototype={
$1(d){return new A.t(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:515}
C.cmY.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.giT().length!==0&&!B.d.t(t.giT(),-1)
return A.b4(p,p,p,new C.bbu(q.b,o,v,w,p),B.ax)},
$S:63}
C.cn_.prototype={
$1(d){return this.a.giT()[this.b]===-1},
$S:z+30}
C.cn0.prototype={
$1(d){return this.a.cNH(this.b,d.a)},
$S:z+31}
C.cmZ.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.giT()[t]!==-1,r=A.m(18),q=e.length!==0?B.cJ.j(0.3):B.L
if(s)w=v
else w=A.J(e.length!==0?B.cJ:B.jN,B.r,2)
u=s?A.ls(new C.cmX(),A.at(new C.Qd(u.gaDZ()[u.giT()[t]].b,u.gaDZ()[u.giT()[t]].a,62,!1,v),v,v,v),B.lr,B.iU,v,v,new A.bp(0.3,1,x.X),x.i):D.b8y
return A.dd(v,u,v,v,B.b6,new A.o(q,v,w,r,v,v,B.n),B.a2,v,100,v,v,v,v,88)},
$S:1952}
C.cmX.prototype={
$3(d,e,f){return A.ed(B.A,f,e,null,null)},
$S:109}
C.cn1.prototype={
$3(d,e,f){return A.dP(f,new A.t(Math.sin(e*24)*8*(1-e),0))},
$S:109}
C.cMz.prototype={
$1(d){return d>=1},
$S:114}
C.cC6.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkJ()[w.e].d.length)w.m(new C.cC5(w))},
$S:11}
C.cC5.prototype={
$0(){return this.a.f++},
$S:0}
C.cCe.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cCf.prototype={
$0(){var w=this.a,v=this.b
w.z.M(0,v)
w.Q=v},
$S:0}
C.cCg.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cCd(w))},
$S:0}
C.cCd.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cCh.prototype={
$0(){return this.a.f++},
$S:0}
C.cCi.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cCj.prototype={
$0(){},
$S:0}
C.cCk.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a7(0)
w.as=!1
w.ay=0},
$S:0}
C.cC8.prototype={
$0(){return A.a4(this.a,!1).ie()},
$S:0}
C.cC9.prototype={
$3(d,e,f){var w=null
return A.ls(new C.cC7(this.a,e),w,B.b6,B.hs,w,w,new A.bp(w,this.b,x.X),x.i)},
$S:1953}
C.cC7.prototype={
$3(d,e,f){var w,v,u=null,t=this.a,s=B.cJ.j(t.as?0.6:0.15)
s=A.a([new A.ac(0,B.G,s,B.I,t.as?40:18)],x.V)
w=B.w.j(e)
v=this.b
v=A.TP(v,v,B.Vj)
return A.p(u,A.hT(new A.Bn(new A.xr(w,B.L9,u,B.Xg),H.bVC(A.b4(u,u,u,new C.aAJ(t.gkJ()[t.e].c,t.as,u),B.ax),v),u),B.ap),B.f,u,u,new A.o(u,u,u,u,s,u,B.a6),u,190,u,u,u,u,u,190)},
$S:1954}
C.cCa.prototype={
$3(d,e,f){return A.d9(A.dP(f,new A.t(0,14*(1-e))),e)},
$S:100}
C.cCb.prototype={
$3(d,e,f){return A.dP(f,new A.t(Math.sin(e*22)*8*(1-e),0))},
$S:109}
C.cCc.prototype={
$0(){return this.a.bnU(this.b)},
$S:0}
C.f1_.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.amd$)
v.amd$=w
v.pV$.sp(0,w)
v.apR(u)},
$S:9}
C.fb3.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a4(0)
w.a.$0()},
$S:11}
C.bQU.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bQT())},
$S:0}
C.bQT.prototype={
$0(){},
$S:0}
C.bQR.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bQP.prototype={
$0(){},
$S:0}
C.bQQ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMt()
w=s+1>=r.length?3:5
break
case 3:q=C.bF5(p.gaoF(0),0,r.length)
p.m(new C.bQM(p,q))
o=p
w=6
return A.b(C.Bx(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.By(s.d,s.c.a,"school",p.gaoF(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bQN())
w=4
break
case 5:p.m(new C.bQO(p))
p.gqd().Vt(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bQM.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bQN.prototype={
$0(){},
$S:0}
C.bQO.prototype={
$0(){return this.a.x++},
$S:0}
C.bQS.prototype={
$0(){return this.a.KG(this.b)},
$S:0}
C.bQL.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ie()},
$S:0}
C.f10.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.t(t,s),q=v.b,p=v.d,o=p?C.hsZ(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.DE
C.S1(q,D.egK,0,0.2,-0.6,-0.2,null,w,D.efv,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a9(0,new A.t(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.S()
p=A.I()
p.r=D.FB.gp(0)
p.c=3
p.d=B.bE
q.bo(new A.t(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f11.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.S1(this.a,D.efP,0,u,0.7,-0.5,null,null,D.J_,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f12.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.S1(this.a,D.ehw,0,0,0.8,-0.5,null,null,D.J_,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f13.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.S1(w.b,D.egE,0,v,-0.8,-0.5,null,null,D.J_,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f14.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.t(34,-122+Math.sin(w*5)*5)
else v=v?D.egI:D.DE
C.S1(p,D.eg8,0,t,0,-0.6,null,v,D.J_,3,0,s,1.3,u,0,w,0)
q=q.c99(new A.t(222,455),9)
$.S()
w=A.I()
w.r=B.cJ.gp(0)
p.aG(q,w)},
$S:0}
C.f15.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:547}
C.bQx.prototype={
$2(d,e){return d+e},
$S:67}
C.bQI.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bQJ.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bQK.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.giT()[u.b]=s
t.giT()[u.d]=t.y
w=t.as
v=t.pV$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bQE.prototype={
$1(d){return d},
$S:112}
C.bQD.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.pV$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bQF.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bQG.prototype={
$0(){},
$S:0}
C.bQH.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.Fk(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.cv(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a7(0)},
$S:0}
C.bQz.prototype={
$0(){return A.a4(this.a,!1).ie()},
$S:0}
C.bQA.prototype={
$2(d,e){var w=this.a
w=w.gkJ()[w.f].e
return B.o.aK(w[d],w[e])},
$S:67}
C.bQB.prototype={
$2(d,e){var w=null,v=C.h5_(new A.av(A.aR(1/0,e.a,e.b),A.aR(1/0,e.c,e.d))),u=this.a
return A.aB(B.c9,new A.ey(A.b4(w,w,w,new C.biC(u,u.pV$),B.ax),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bQy(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bQy.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.giT().length
u=B.o.E(B.k.bh((t.a-s.a)/r/450*v),0,v-1)
w.cYg(w.giT()[u])}},
$S:23}
C.bQC.prototype={
$1(d){var w=this.a
return w.gkJ()[w.f].d[d]},
$S:77}
C.dnT.prototype={
$2(d,e){return 0},
$S:67}
C.bQj.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bQi())},
$S:0}
C.bQi.prototype={
$0(){},
$S:0}
C.bQh.prototype={
$0(){},
$S:0}
C.bQb.prototype={
$0(){},
$S:0}
C.bQc.prototype={
$0(){},
$S:0}
C.bQg.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.AB},
$S:0}
C.bQf.prototype={
$1(d){var w=null,v=this.a.gqd(),u=A.d(d,w,w,w,w,w,w,D.aSH,w,w,w),t=v.gbkm(0)
return A.aB(B.c9,A.x(A.a([u,B.bD,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aSY,w,w,w)],x.p),B.E,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbqb(v),w,w,w,w,w,w,!1,B.a4)},
$S:139}
C.bQd.prototype={
$0(){return this.a.KG(this.b)},
$S:0}
C.bQe.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ie()},
$S:0}
C.bQa.prototype={
$0(){return A.a4(this.a,!1).ie()},
$S:0}
C.dY2.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dY3.prototype={
$1(d){return this.a},
$S:40}
C.dY4.prototype={
$0(){var w=this.a
return w.d=w.gSt().bcK(this.b)},
$S:0}
C.dY0.prototype={
$1(d){return new C.Th(this.a,null)},
$S:z+32}
C.dY1.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.dY_.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hm,w,w,w)
return A.en(A.a([A.bM(!1,E.aUk,w,w,!0,w,w,w,new C.dXY(d),w,w),A.bM(!1,D.fJp,w,w,!0,w,w,w,new C.dXZ(d),w,w)],x.p),w,w,D.fr,v,w,w,w,w,D.fvW,w)},
$S:18}
C.dXY.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dXZ.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dXX.prototype={
$0(){var w=null,v=this.a.c.K(x.q).f,u=this.b
return v.U(A.b3(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dY5.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:14}
C.dY6.prototype={
$0(){var w=this.a,v=this.b,u=C.bCP(v,10,w.r,!1)
return w.u7(C.hdu(w.a.d,"kahoot",u,w.gb4u(),v.b,"Family Kahoot",v.a))},
$S:0}
C.dY7.prototype={
$0(){var w=this.a
return w.u7(new C.al6(this.b,w.a.d,w.r,null))},
$S:0}
C.dY8.prototype={
$0(){var w=this.a
return w.u7(new C.ajj(this.b,w.a.d,w.r,null))},
$S:0}
C.dYb.prototype={
$0(){var w=this.a
return w.u7(new C.atY(this.b,w.a.d,w.r,null))},
$S:0}
C.dYc.prototype={
$0(){var w=this.a
return w.u7(new C.axT(this.b,w.a.d,w.r,null))},
$S:0}
C.dYd.prototype={
$0(){var w=this.a
return w.u7(new C.al9(this.b,w.a.d,w.r,null))},
$S:0}
C.dYe.prototype={
$0(){var w=this.a
return w.u7(new C.ald(this.b,w.a.d,w.r,null))},
$S:0}
C.dYf.prototype={
$0(){var w=this.a
return w.u7(new C.alf(this.b,w.a.d,w.r,null))},
$S:0}
C.dYg.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.cYA()
return v.u7(C.hdu(v.a.d,"creator_"+u.a,w,v.gb4u(),"A game by the family",t,this.c.a))},
$S:0}
C.dYh.prototype={
$0(){return this.a.Ov(this.b)},
$S:0}
C.dYi.prototype={
$0(){return this.a.Xl(0,this.b)},
$S:0}
C.dY9.prototype={
$0(){return this.a.Ov(null)},
$S:0}
C.dYa.prototype={
$0(){return this.a.K(x.q).f.U(D.f9y)},
$S:0}
C.bQv.prototype={
$0(){var w=this.a
w.d=D.aYf
w.z=3},
$S:0}
C.bQw.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a4(0)
w.aOf()}else w.m(new C.bQu(w))},
$S:11}
C.bQu.prototype={
$0(){return this.a.z--},
$S:0}
C.bQl.prototype={
$0(){var w=this.a
w.d=D.abh
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bQm.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bQk(w))
if(w.as<=0){d.a4(0)
w.b4q(-1)}},
$S:11}
C.bQk.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bQr.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.VU},
$S:0}
C.bQs.prototype={
$0(){return this.a.e++},
$S:0}
C.bQo.prototype={
$0(){var w=this.a
w.d=D.aYg
w.ay=this.b},
$S:0}
C.bQp.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bQt.prototype={
$2(d,e){return B.o.aK(e.b,d.b)},
$S:1955}
C.bQq.prototype={
$0(){return this.a.KG(this.b)},
$S:0}
C.bQn.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ie()},
$S:0}
C.bPW.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.au()
s=A.a([new A.as(new A.bb(s,B.b3,B.aO),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.M)(t),++v){u=t[v]
s.push(new A.as(new A.bb(u,B.b3,B.aO),r))}return s},
$S:1956}
C.bPX.prototype={
$0(){return this.a.gCH().c.push(C.fZR(null,0,20,""))},
$S:0}
C.bQ6.prototype={
$1(d){var w=null
return A.br(w,new A.b5(4,A.m(12),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dq,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.UP,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:237}
C.bQ5.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gCH().c,m=this.b,l=n[m],k=o.cbQ(l),j=B.c.j(0.06),i=A.m(18),h=A.J(B.aZ,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.K8,p,p,p),B.b0],g)
if(n.length>1)f.push(A.aG(p,p,p,p,B.apd,p,p,p,new C.bQ0(o,m),p,p,p,p,p,p))
n=J.a5(k)
m=this.c
f=A.a([A.B(f,B.m,p,B.e,B.i,0,p,p),A.aL(p,B.Y,!1,p,!0,B.t,p,A.aM(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ai,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bQ1(l),p,p,p,!1,p,p,!1,p,!0,p,B.a9,p,p,p,p,p,p,p,p,p,p,p,B.d9,!0,B.a3,p,B.an,p,p,p,p),B.O],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aAW[v]
t=D.aAH[v]
s=v+1
f.push(new A.D(B.eI,new A.ce(B.aM,B.e,B.i,B.m,p,B.p,p,0,A.a([new A.y(u,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p),B.ac,new A.bz(1,B.bb,A.aL(p,B.Y,!1,p,!0,B.t,p,A.aM(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ai,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bQ2(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.a9,p,p,p,p,p,p,p,p,p,p,p,B.d9,!0,B.a3,p,B.an,p,p,p,p),p),new Aq.OT(v,l.c,new C.bQ3(o,l),p,!1,D.lu,p,p,p,p,p,!1,!1,p,K.aYE,p,p,p,p,p,w)],g),p),p))}f.push(D.fBv)
f.push(B.am)
n=A.a([D.fv0,B.ac],g)
for(r=0;r<3;++r){q=D.c9f[r]
n.push(new A.D(B.fB,A.iO(p,p,p,new A.y(""+q+"s",p,p,p,p,p,p,p,p,p,p,p),p,new C.bQ4(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.B(n,B.m,p,B.e,B.i,0,p,p))
return A.p(p,A.x(f,B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.kE,B.bf,p,p,p)},
$S:172}
C.bQ0.prototype={
$0(){var w=this.a
return w.m(new C.bQ_(w,this.b))},
$S:0}
C.bQ_.prototype={
$0(){return B.d.cD(this.a.gCH().c,this.b)},
$S:0}
C.bQ1.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bQ2.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bQ3.prototype={
$1(d){return this.a.m(new C.bPZ(this.b,d))},
$S:166}
C.bPZ.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bQ4.prototype={
$1(d){return this.a.m(new C.bPY(this.b,this.c))},
$S:8}
C.bPY.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dZI.prototype={
$0(){var w=this.a
w.w3()
w.a.bu()
w.a.q6()},
$S:0}
C.dZH.prototype={
$0(){var w=this.a
w.w3()
w.a.bu()
w.a.q6()},
$S:0}
C.dZK.prototype={
$0(){var w=this,v=w.b
if(J.cL(v)||J.ct(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dZL.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dZM.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dZG.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dZJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.dZO.prototype={
$0(){this.a.OR()
return null},
$S:0}
C.dZN.prototype={
$0(){return this.a.EG(this.b)},
$S:0}
C.dZ8.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bM(!1,B.di,w,w,!0,w,w,w,new C.dZ6(d),w,w),r=A.bo(B.bP,w,w,w,w,w,w,w,w,w,w,w)
return A.en(A.a([s,A.bE(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.dZ7(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.dZ6.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dZ7.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dZ9.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cKl(this.b)},
$S:0}
C.dZ3.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aTG(w.b,w.c,w.d)},
$S:9}
C.dYv.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.dYw.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dYN.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.GV(t.a.c),$async$$0)
case 2:s=r.pT(q.dH(e,new C.dYL(t)))
if(s!=null&&t.c!=null)t.m(new C.dYM(t,s))
t.a.bu()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dYL.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.dYM.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dYO.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.dYP.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dZ2.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cL8(C.ht4(w),w)},
$S:0}
C.dYK.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.VD(u,w,C.aPV(u,w),new C.dYJ(v),null)},
$S:z+37}
C.dYJ.prototype={
$1(d){return this.blJ(d)},
blJ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.dYI(s,d))
w=3
return A.b(s.u3(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:736}
C.dYI.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bcK(this.b)},
$S:0}
C.dZ_.prototype={
$1(d){return d.as},
$S:z+1}
C.dZ0.prototype={
$1(d){var w=this
return new A.dZ(new C.dYZ(w.a,w.b,w.c,w.d,w.e),null)},
$S:19}
C.dYZ.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.e3:B.c,h=A.m(26),g=A.J(B.bP.j(0.5),B.r,1.5),f=A.p(k,D.bPp,B.f,k,k,new A.o(B.bP.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a1,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,12.5,k,k,B.Q,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.i,0,B.p),1)
f=A.B(A.a([f,B.bd,a0,A.aG(k,k,k,k,A.X(B.cz,j?B.bs:B.bn,k,k,k,k),k,k,k,new C.dYT(a1),k,k,k,k,k,k)],w),B.m,k,B.e,B.i,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.M)(v),++s){r=v[s]
q=t.a===r?B.bP:B.bP.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ay(B.bP,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bP
a0.push(A.aB(k,A.dd(k,new A.y(m,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k),k,k,B.b6,new A.o(q,k,new A.bK(n,n,n,n),new A.bi(p,p,p,p),k,k,B.n),B.hr,k,k,k,B.BO,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.dYU(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bX(B.bC,a0,B.bq,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c0m,new A.D(D.bAc,f,k),new A.D(D.bA3,e,k),new A.D(B.rq,a0,k),new A.D(W.akO,A.d(v,k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(A2.ana,j?B.bs:B.bn,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bA5,A.B(A.a([a0,B.at,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.Yh(k,B.bP,k,k,!1,B.y,k,k,k,k,k,k,new C.dYV(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.m,k,B.e,B.i,0,k,k),k))}f.push(B.aA)
j=A.m(20)
e=A.a([new A.ac(0,B.G,B.aD.j(0.35),B.j0,12)],x.V)
f.push(A.aB(k,A.p(k,A.B(A.a([D.fvm,B.bd,D.bEl,D.bQ6],w),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.c44,B.n),k,k,k,B.hL,B.bz,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.dYW(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.vY,A.B(A.a([A.E(A.dI(B.di,new C.dYX(a1),k),1),B.at,A.E(A.bE(L.aUJ,k,new C.dYY(t,a1),A.bo(B.bP,k,k,k,k,k,B.ck,k,k,k,k,k)),1)],w),B.m,k,B.e,B.i,0,k,k),k))
return A.bl(!0,A.p(k,A.cg(A.x(f,B.E,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ag),B.ap,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.ya,k,k,k,k),!0,!1,B.af,!0,!0)},
$S:87}
C.dYT.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dYU.prototype={
$0(){return this.b.$1(new C.dYS(this.a,this.c))},
$S:0}
C.dYS.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.dYV.prototype={
$1(d){var w=this.a
w.m(new C.dYQ(w,d))
this.b.$1(new C.dYR())},
$S:8}
C.dYQ.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dYR.prototype={
$0(){},
$S:0}
C.dYW.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).O(new A.aGO(!0,w))
return null},
$S:0}
C.dYX.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dYY.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).O(new A.aGO(!1,w))
return null},
$S:0}
C.dZ1.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cKW(this.b.b)
w.r.a7(0)},
$S:0}
C.dYj.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aid(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hmA(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.dYk.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aEt(w)},
$S:0}
C.dZb.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.adx(this.b,w,this.c,null)},
$S:z+39}
C.dZ5.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e3:B.c,t=A.m(20),s=A.X(B.lF,B.aW,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ad,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.m,w,B.e,B.P,0,B.p)
return A.en(A.a([A.bE(D.fN8,w,new C.dZ4(d),A.bo(B.aW,w,w,w,w,w,w,w,w,w,w,w))],o),B.b8,w,u,v,w,s,w,new A.b7(t,B.a0),r,w)},
$S:18}
C.dZ4.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dYl.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dYm.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dYn.prototype={
$1(d){return d.a},
$S:z+8}
C.dYo.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.M)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hU(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aEt(w)},
$S:0}
C.dYs.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aid(q)
w=A.T(q).k("Y<1>")
q=A.C(new A.Y(q,new C.dYq(r),w),w.k("L.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hmA(v.e,null,r,v.f,v.r,new C.dYr(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.dYr.prototype={
$0(){return this.a.aat(this.b)},
$S:0}
C.dYq.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dYt.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("N<1,hU>")
w=A.C(new A.N(w,new C.dYp(this.b),v),v.k("ak.E"))
u.d=t.aEt(w)},
$S:0}
C.dYp.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.dZa.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dYF.prototype={
$1(d){return d.length!==0},
$S:3}
C.dYG.prototype={
$1(d){var w=this
return new A.dZ(new C.dYE(w.a,w.b,w.c,w.d),null)},
$S:19}
C.dYE.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e3:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.av,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ad],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.N(o,new C.dYA(u,e,o),A.T(o).k("N<1,v>")))
p.push(B.O)
u=w.d
p.push(A.aL(v,B.Y,!1,v,!0,B.t,v,A.aM(),u,v,v,v,v,v,2,A.br(v,new A.b5(4,A.m(12),B.dk),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ai,v,v,v,v,v,B.mm,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a3,v,B.an,v,v,v,v))
p=A.x(p,B.ak,v,B.e,B.P,0,B.p)
t=w.a
return A.en(A.a([A.bM(!1,B.di,v,v,!0,v,v,v,new C.dYB(d),v,v),A.bE(B.Kj,v,new C.dYC(t,u,o,e),A.bo(B.bP,v,v,v,v,v,v,v,v,v,v,v)),A.bE(D.fzT,v,new C.dYD(t,u,o,d),A.bo(B.aW,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a6(360,v,p,v),v,v,v,v,r,v)},
$S:196}
C.dYA.prototype={
$1(d){var w=null
return A.dy(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.Q,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aG(w,w,w,w,D.bYb,w,w,w,new C.dYz(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1957}
C.dYz.prototype={
$0(){return this.a.$1(new C.dYx(this.b,this.c))},
$S:0}
C.dYx.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dYB.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dYC.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dYy(w.c,u))
v.bK(0,B.c5)}},
$S:0}
C.dYy.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dYD.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a4(w.d,!1).O(!0)},
$S:0}
C.dYH.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cLB(this.b,D.u9,C.GT(v,w.a.c))},
$S:0}
C.dZi.prototype={
$1(d){return d.as},
$S:z+1}
C.dZj.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iS(this.b,w)},
$S:0}
C.dZk.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.ihR(v)
return w.Wc(v==null?null:v.a)},
$S:0}
C.dZl.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hUH(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aR(1/0,e.a,e.b)
s=A.aR(1/0,e.c,e.d)
l.ct9(new A.av(u,t),v.gbjq(),new A.av(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cXH:D.cVU
q=A.J(s?B.dq:D.bgc,B.r,1)
p=A.m(22)
o=A.bU(0,A.b4(m,m,m,new C.beM(s,m),B.ax),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bx(p,new A.an(B.a_,m,B.ab,B.t,A.a([o,A.bU(0,A.tu(new A.Q(n,n,n,n),new A.a6(u,t,new C.bfH(l.d,v,l.f,w,new C.dZe(l),l.gcd1(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bxg(s,new C.dZf(l,e),new C.dZg(l,e),new C.dZh(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.f,m,m,new A.o(m,m,q,k,m,new A.a9(B.b4,B.b7,B.x,r,m,m),B.n),m,m,m,Z.ajU,m,m,m,m)},
$S:213}
C.dZe.prototype={
$1(d){var w=this.a
w.m(new C.dZc(w,d))},
$S:2}
C.dZc.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.M(0,v)},
$S:0}
C.dZf.prototype={
$0(){var w=this.b
return this.a.baY(1.25,new A.av(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.dZg.prototype={
$0(){var w=this.b
return this.a.baY(0.8,new A.av(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.dZh.prototype={
$0(){var w=this,v=w.b
return w.a.aTG(new A.av(A.aR(1/0,v.a,v.b),A.aR(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbjq())},
$S:0}
C.dZm.prototype={
$0(){var w=this.a
return w.m(new C.dZd(w))},
$S:0}
C.dZd.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dYu.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fI(new A.fB(s.c)),$async$$0)
case 2:t.y_("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ddp.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bjq(u,C.hxh(v.c,u),new C.ddo(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.ddo.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.ddq.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bmD(d.d,d.c,u.f.t(0,d.a),new C.ddn(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.ddn.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fA8.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.pT(new A.cQ(new A.Y(v,new C.fA9(d),w.k("Y<1>")),new C.fAa(),w.k("cQ<1,n>")))},
$S:z+19}
C.fA9.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fAa.prototype={
$1(d){return d.a},
$S:z+8}
C.fA6.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fA7.prototype={
$1(d){return d.b},
$S:z+8}
C.fAd.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.pT(new A.cQ(new A.Y(v,new C.fAe(d),w.k("Y<1>")),new C.fAf(),w.k("cQ<1,n>")))},
$S:z+19}
C.fAe.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fAf.prototype={
$1(d){return d.a},
$S:z+8}
C.fAb.prototype={
$1(d){var w,v=A.eD([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.aj(0,w)&&v.M(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fAc.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dds.prototype={
$0(){return this.a},
$S:z+46}
C.ddJ.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.aj(0,d)},
$S:250}
C.ddB.prototype={
$2(d,e){var w=this.a.c4(0,d,new C.ddC()),v=J.a5(w)
if(!v.t(w,e))v.M(w,e)},
$S:115}
C.ddC.prototype={
$0(){return A.a([],x.s)},
$S:669}
C.ddA.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f0(w,e)
return w===!0},
$S:290}
C.ddt.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.ddz.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.ddy.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.M(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aW(v==null?D.D_:v)
u=1
while(v.C())u+=s.$2(v.gT(v).a,e)
v=s.b.h(0,d)
v=J.aW(v==null?B.Y:v)
while(v.C()){t=v.gT(v)
if(e.t(0,t))continue
e.M(0,t)
t=w.h(0,t)
t=J.aW(t==null?D.D_:t)
while(t.C())u+=s.$2(t.gT(t).a,e)}return u},
$S:1959}
C.ddu.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.ddD.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.M(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aW(u==null?B.Y:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gT(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.M(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aW(t==null?D.D_:t)
while(t.C()){r=t.gT(t)
if(r.a!==a9&&!B.d.b2(w,new C.ddE(r)))w.push(r)}}B.d.bs(w,new C.ddF(a8))
B.d.aW(w,new C.ddG())
q=C.hUG(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.M)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eNo],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.M)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.z(-p,p)],x.G)
a8=x.n
k=A.a([],a8)
j=A.a([],a8)
for(a8=n.length,m=0;m<n.length;n.length===a8||(0,A.M)(n),++m){i=n[m]
if(k.length!==0){h=Math.min(j.length,i.length)
for(g=-1/0,f=0;f<h;++f){e=f===0?22:44
g=Math.max(g,j[f]+e-i[f].a)}}else g=0
k.push(g)
for(f=0;f<i.length;++f){d=g+i[f].b
if(f<j.length)j[f]=Math.max(j[f],d)
else j.push(d)}}a0=(B.d.gI(k)+B.d.gak(k))/2
a1=A.a([new A.z(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bpO(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1960}
C.ddE.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.ddF.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.ddG.prototype={
$2(d,e){return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.ddH.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a5(n),v=o.c,u=-1/0,t=0;t<w.gL(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a7(v).k("bc<2>")).cH(0,0,B.pI)+88-w.gI(n).a}else u=0
for(w=J.a5(n),v=o.c,t=0;t<w.gL(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:601}
C.ddI.prototype={
$1(d){return 16+d*156},
$S:254}
C.ddr.prototype={
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
t.n(0,d,new C.Gb(r,new A.t(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.Gb(s,new A.t(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.Gb(s,new A.t(e,v)))}t=o.r.h(0,d)
t=J.aW(t==null?B.Y:t)
s=o.w
while(t.C()){r=t.gT(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Kt(d,new A.t(e+t,w),s,s.length))}},
$S:185}
C.ddv.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aJW(new A.t(v.a,v.b+28),new A.t(w.a,w.b+28),!0,null))},
$S:115}
C.ddw.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.ddx.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:658}
C.ddK.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:658}
C.ddL.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:453}
C.ddM.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:179}
C.ddN.prototype={
$1(d){return d>=0.5},
$S:114}
C.fgN.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hc(A.aO(!1,v,!0,new A.a6(38,38,A.X(d,this.a.c?B.c:B.cp,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1962}
C.eR5.prototype={
$1(d){var w=null,v=A.m(8),u=B.bP.j(0.12),t=A.m(8)
return new A.D(B.no,A.aO(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fl8,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.NA,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eR4(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eR4.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dty.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dtx.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nJ,B.K,w,w)
return A.en(A.a([A.bM(!1,B.di,w,w,!0,w,w,w,new C.dtv(d),w,w),A.bM(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.my,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dtw(d),w,w)],x.p),B.b8,B.BL,w,u,D.bB6,w,D.bD3,new A.b7(v,B.a0),w,w)},
$S:18}
C.dtv.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dtw.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dtH.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dtI.prototype={
$1(d){var w=this.a
return w.m(new C.dtG(w,d))},
$S:z+49}
C.dtG.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dtJ.prototype={
$1(d){var w=null
return A.qx(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dtM.prototype={
$1(d){var w=this.a
return w.m(new C.dtF(w,d))},
$S:35}
C.dtF.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dtL.prototype={
$1(d){var w=null
return A.qx(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dtN.prototype={
$1(d){var w=this.a
return w.m(new C.dtE(w,d))},
$S:35}
C.dtE.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dtO.prototype={
$0(){var w=this.a
return w.m(new C.dtD(w))},
$S:0}
C.dtD.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dtP.prototype={
$0(){var w=this.a
return w.m(new C.dtC(w))},
$S:0}
C.dtC.prototype={
$0(){return++this.a.at},
$S:0}
C.dtQ.prototype={
$0(){var w=this.a
return w.m(new C.dtB(w))},
$S:0}
C.dtB.prototype={
$0(){return--this.a.ax},
$S:0}
C.dtR.prototype={
$0(){var w=this.a
return w.m(new C.dtA(w))},
$S:0}
C.dtA.prototype={
$0(){return++this.a.ax},
$S:0}
C.dtS.prototype={
$1(d){var w=this.a
return w.m(new C.dtz(w,d))},
$S:8}
C.dtz.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dtK.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dtT.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bP.j(0.18)
else w=q.c.a?B.e3:B.c
v=A.m(12)
if(p)u=B.bP
else u=(q.c.a?B.e9:B.bO).j(0.85)
u=A.J(u,B.r,p?1.5:1)
if(p)t=B.bP
else t=q.c.a?B.bs:B.bn
t=A.X(f,t,r,r,r,18)
if(p)s=B.bP
else s=q.c.a?B.bs:B.bn
return A.E(A.aH(!1,B.a2,!0,r,A.aO(!1,o,!0,A.dd(r,A.x(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.i,0,B.p),r,r,B.b6,new A.o(w,r,u,v,r,r,B.n),B.eO,r,r,r,B.jQ,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dtU(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
$S:z+51}
C.dtU.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.du2.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.ccM.prototype={
$2(d,e){return new A.bA(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:94}
C.ccT.prototype={
$1(d){return d.ag()},
$S:z+5}
C.ccU.prototype={
$2(d,e){var w=J.b6(e,new C.ccS(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bA(d,w,x.d2)},
$S:z+53}
C.ccS.prototype={
$1(d){return d.ag()},
$S:z+12}
C.ccO.prototype={
$1(d){return C.ali(A.a2(d,x.N,x.z))},
$S:z+9}
C.ccP.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.ccQ.prototype={
$1(d){return C.hdt(A.a2(d,x.N,x.z))},
$S:z+11}
C.ccR.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.ccY.prototype={
$1(d){return new A.aH_(d.f.length,d.a,d.b)},
$S:z+55}
C.ccZ.prototype={
$2(d,e){return B.a.aK(d.c,e.c)},
$S:535}
C.ccV.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.ccW.prototype={
$1(d){return d.cKy(C.GT(d,this.a))},
$S:z+85}
C.dZv.prototype={
$1(d){return C.uf(d,this.a.a.c)},
$S:z+3}
C.dZw.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dZA.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dZB.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dZs.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0c(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yz("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pi(r.c,r.e),$async$$0)
case 4:s.yz(p)
w=5
return A.b(s.JO(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dZt.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0c(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yz("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pi(r.c,r.e),$async$$0)
case 4:s.yz(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dZu.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.VG(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.yz("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.yz("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.yz("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.JO(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.yz(B.a.ea(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dZz.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0b(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yz("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a4(r,!1).cd(A.dX(new C.dZy(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pi(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dZy.prototype={
$1(d){var w=this.b
return new C.a_N(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.dZx.prototype={
$1(d){return D.hm3},
$S:z+58}
C.dZD.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dZE.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dZC(w,d)
return new A.D(B.d2,new C.bfL(this.b,d.c,d.a,w,null),null)},
$S:1963}
C.dZC.prototype={
$0(){return this.a.XY(this.b.b)},
$S:0}
C.dZn.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dZo.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dZp.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dZq.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dZr.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dZF.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cT(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a4(this.b,!1).O(s)
return}},
$S:180}
C.dLk.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dLl.prototype={
$0(){return B.d.gI(D.a57)},
$S:z+60}
C.dLm.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.at(A.X(this.b.d,B.c.j(0.95),w,w,D.d3j,44),w,w,w),w,w,new C.bkw(u,t,v,w),B.ax)},
$S:63}
C.fQE.prototype={
$1(d){return A.p3(new C.fQD(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:136}
C.fQD.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e3:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rU,24)],x.V),o=r?B.e9:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aW.j(0.25),B.bP.j(0.18)],x.O)
w=A.p(t,D.bSv,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a9(B.a5,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.av,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.W,o,new A.D(E.akT,A.B(A.a([w,B.bd,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bs:B.bn,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.i,0,B.p),1)],u),B.m,t,B.e,B.i,0,t,t),t),A.E(A.iy(!0,t,e,B.y,D.f7D,new C.fQC(this.b,s),20,B.akr,t,B.ag,!1),1)],u),B.m,t,B.e,B.i,0,B.p),B.f,t,t,new A.o(q,t,t,B.kX,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:118}
C.fQC.prototype={
$2(d,e){var w=null,v=D.a57[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.J(s?B.e9:B.bO,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.eq,8)],x.V),p=A.m(15),o=A.E(new C.a6F(v.a,!0,w),1),n=s?B.jK:B.jb,m=A.d(v.b,w,1,B.a1,w,w,w,A.l(w,w,s?B.aP:B.av,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aH(!1,B.a2,!0,w,A.aO(!1,u,!0,A.eJ(A.bx(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a1,w,w,w,A.l(w,w,s?B.bs:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.l7,w,w,w)],l),B.ak,w,B.e,B.i,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fQB(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)},
$S:81}
C.fQB.prototype={
$0(){A.a4(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.clj.prototype={
$0(){return this.a.agy(this.b)},
$S:0}
C.fQ0.prototype={
$1(d){return D.hh9},
$S:z+61}
C.fXw.prototype={
$1(d){var w=this
return new C.a1A(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fQ5.prototype={
$1(d){return new C.Zq(this.a,null)},
$S:z+63}
C.fQ4.prototype={
$1(d){return D.hi9},
$S:z+64}
C.d56.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d57.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d55(w,d))},
$S:35}
C.d55.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d58.prototype={
$1(d){return this.a.Ko()},
$S:2}
C.d59.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d52.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d53.prototype={
$1(d){return this.a.Ko()},
$S:2}
C.d54.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cDh.prototype={
$0(){},
$S:0}
C.cDn.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cDo.prototype={
$0(){return this.a.aP6(-1)},
$S:0}
C.cDp.prototype={
$1(d){return this.a.m(new C.cDm())},
$S:2}
C.cDm.prototype={
$0(){},
$S:0}
C.cDq.prototype={
$0(){return this.a.aP6(1)},
$S:0}
C.cDr.prototype={
$1(d){return this.a.m(new C.cDl())},
$S:2}
C.cDl.prototype={
$0(){},
$S:0}
C.cDs.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.Q,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aW.j(0.2)
if(s)v=B.aW
else v=this.b.a?B.e9:B.bO
return A.uz(u,u,B.b_,r,u,new C.cDk(t,d),B.ym,s,w,u,new A.ay(v,1,B.r,-1),B.cb)},
$S:1964}
C.cDk.prototype={
$1(d){var w=this.a
return w.m(new C.cDi(w,this.b))},
$S:8}
C.cDi.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cDt.prototype={
$1(d){return this.a.m(new C.cDj())},
$S:2}
C.cDj.prototype={
$0(){},
$S:0}
C.cDu.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fg6.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a4(this.b,!1).O(w)},
$S:2}
C.fg7.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fg8.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a4(this.b,!1).O(w)},
$S:0}
C.fg4.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbAm()
w=w.e
s=A.m(B.o.E(v-1,0,v))
return A.b4(new A.D(D.bD2,new A.ey(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bx3(p,v,this.b.a,u,t,r),r,r,B.ax)},
$S:63}
C.fg5.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dx.av(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.ar(B.aW,B.bP,w)
s.toString
s=A.a([B.b_,s,B.aW],x.O)
return A.aH(!1,B.a2,!0,p,A.aO(!1,v,!0,A.eJ(D.elk,r,new A.o(r,r,A.J(B.c.j(0.4),B.r,1.5),u,r,new A.a9(new A.dh(-1.2+t,-0.5),new A.dh(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
$S:141}
C.fOr.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:71}
C.eOd.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eO4.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eO5.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eOb.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.dZ(new C.eOa(w,this.b),null)},
$S:19}
C.eOa.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e3:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eS(w,u,new A.D(B.akL,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ad,C.hjp(new C.eO7(r,e),r.a),B.aA,A.B(A.a([A.E(A.dI(B.di,new C.eO8(d),w),1),B.at,A.E(A.bE(B.Vc,w,new C.eO9(r,d),A.bo(B.aW,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.i,0,w,w)],q),B.ak,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d8,w,new A.b7(t,B.a0),w)},
$S:101}
C.eO7.prototype={
$1(d){return this.b.$1(new C.eO6(this.a,d))},
$S:35}
C.eO6.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eO8.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eO9.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).O(w)
return null},
$S:0}
C.eOc.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.T6(this.b)},
$S:0}
C.eO_.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bcQ(w)},
$S:0}
C.eO3.prototype={
$1(d){return this.bm5(d)},
bm5(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LF(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iS(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eO2.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("Y<1>")
w=A.C(new A.Y(w,new C.eO1(this.b),v),v.k("L.E"))
u.d=t.bcQ(w)},
$S:0}
C.eO1.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eOe.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iS(this.b,w)},
$S:0}
C.eOf.prototype={
$1(d){return this.a.bEu(d,this.b)},
$S:z+67}
C.eO0.prototype={
$0(){return this.a.aas(this.b)},
$S:0}
C.fXm.prototype={
$1(d){return new C.adS(this.a,this.b,this.c,null)},
$S:z+68}
C.eOh.prototype={
$0(){return this.a.a_K(this.b)},
$S:0}
C.eOi.prototype={
$0(){return this.a.Qo(this.b)},
$S:0}
C.eOj.prototype={
$0(){return this.a.EB(this.b)},
$S:0}
C.eOk.prototype={
$0(){return this.a.a_L(this.b)},
$S:0}
C.eOg.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eNV.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eNW.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eNX.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eNZ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qc(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eNY(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eNY.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eOH.prototype={
$2(d,e){return d+e.gxb()},
$S:z+71}
C.eOD.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eOE.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eOo.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e3:B.c,s=A.m(24),r=A.p(v,D.bSX,B.f,v,v,new A.o(B.aw.j(u?0.18:0.08),v,A.J(B.aw.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.av,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aP:B.av
u=u?B.e9:B.bO
w=x.p
return A.eS(v,t,new A.D(B.yl,A.x(A.a([r,B.aN,q,B.O,p,B.d4,A.B(A.a([A.E(A.dI(B.nM,new C.eOm(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.fe,v,new A.b7(A.m(14),B.a0),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.at,A.E(A.bE(D.fR0,v,new C.eOn(d),A.bo(B.aw,v,v,v,v,v,B.fe,v,new A.b7(A.m(14),B.a0),v,v,v)),1)],w),B.m,v,B.e,B.i,0,v,v)],w),B.m,v,B.e,B.P,0,B.p),v),v,v,v,v,B.d8,v,new A.b7(s,B.a0),v)},
$S:47}
C.eOm.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.eOn.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.eOx.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e3:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.h_,28)],x.V),g=k?D.dak:B.a4r,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aA,D.f1j,B.au,new A.bO(B.a5,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cy,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.i,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a9(B.ay,B.aE,B.x,g,m,m),B.n),m,m,m,m,E.akQ,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b5T(B.b5,B.jj,new C.eOu(v,d),l,"Camera import","Scan QR"),1),B.at,A.E(v.b5T(B.cw,R.z_,new C.eOv(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.i,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aw.j(k?0.14:0.06)
q=A.m(16)
p=A.J(B.aw.j(0.28),B.r,1)
o=A.p(m,D.bSi,B.f,m,m,new A.o(B.aw.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bS,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.av,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bn,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.i,0,B.p),1)
return A.bl(!0,new A.D(B.vV,A.p(m,A.x(A.a([g,new A.D(B.akM,A.x(A.a([w,B.W,u,B.bu,t,B.W,A.aH(!1,B.a2,!0,m,A.aO(!1,s,!0,A.p(m,A.B(A.a([o,B.bd,n,A.X(B.eE,k?B.bs:B.bn,m,m,m,m)],f),B.m,m,B.e,B.i,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bz,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eOw(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)],f),B.E,m,B.e,B.i,0,B.p),m)],f),B.m,m,B.e,B.P,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:26}
C.eOu.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.vF("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eOv.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.vF("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eOw.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.O8(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eOs.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e3:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.f2,24)],x.V),k=o?B.e9:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bs:B.bn
u=A.bx(w,new A.a6(48,48,C.aRc(!0,A.m(12),48,P.Ob,u,v.c,48),q),B.ap)
w=A.d(v.b,q,1,B.a1,q,q,q,A.l(q,q,o?B.aP:B.av,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.B3(v.gxb())
s=x.p
r=this.a
return A.bl(!0,new A.D(B.vV,A.p(q,A.x(A.a([B.W,k,new A.D(D.akJ,A.B(A.a([u,B.bd,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bs:B.bn,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.i,0,B.p),1)],s),B.m,q,B.e,B.i,0,q,q),q),B.BB,r.cnf(B.uu,B.aW,new C.eOq(d),p,"QR code or backup file","Transfer project"),r.b2U(!0,B.ea,B.aw,new C.eOr(d),p,"Remove from this device","Delete project"),B.W],s),B.m,q,B.e,B.P,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:26}
C.eOq.prototype={
$0(){A.a4(this.a,!1).O("transfer")
return null},
$S:0}
C.eOr.prototype={
$0(){A.a4(this.a,!1).O("delete")
return null},
$S:0}
C.eOt.prototype={
$1(d){return this.bm6(d)},
bm6(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.LF(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vT(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eOK.prototype={
$0(){var w=this.a
w.a.bu()
w.m(new C.eOJ(w))},
$S:0}
C.eOJ.prototype={
$0(){return this.a.r++},
$S:0}
C.eOL.prototype={
$0(){var w=this.a
return w.m(new C.eOI(w))},
$S:0}
C.eOI.prototype={
$0(){return this.a.r++},
$S:0}
C.eOl.prototype={
$0(){var w=this.a.c
w.toString
return A.iS(w,null)},
$S:0}
C.eOp.prototype={
$0(){return this.a.cgx(this.b)},
$S:0}
C.eOG.prototype={
$0(){var w=this.a
return w.m(new C.eOF(w,this.b))},
$S:0}
C.eOF.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eOA.prototype={
$0(){return this.a.vF("scan")},
$S:0}
C.eOB.prototype={
$0(){return this.a.vF("file")},
$S:0}
C.eOC.prototype={
$1(d){return this.a.cng(d,this.b)},
$S:z+72}
C.eOz.prototype={
$0(){return this.a.EF(this.b)},
$S:0}
C.eOy.prototype={
$0(){return this.a.a0e(this.b,this.c)},
$S:0}
C.cCH.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cCG.prototype={
$1(d){return d.ag()},
$S:z+74}
C.cCE.prototype={
$1(d){return C.hD8(A.a2(d,x.N,x.z))},
$S:z+75}
C.cCF.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fz8.prototype={
$1(d){return d.y===D.kH},
$S:z+3}
C.fY6.prototype={
$1(d){return C.aPV(d,this.a)},
$S:z+3}
C.fx2.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bR0.prototype={
$1(d){return!d.as},
$S:z+1}
C.bR_.prototype={
$1(d){return d.ag()},
$S:z+23}
C.bQX.prototype={
$1(d){return C.hdv(A.a2(d,x.N,x.z))},
$S:z+24}
C.bQY.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bQZ.prototype={
$1(d){return J.k(d)},
$S:17}
C.fnK.prototype={
$2(d,e){return e.e.aK(0,d.e)},
$S:z+25}
C.fjA.prototype={
$1(d){return C.h3H(A.a2(d,x.N,x.z))},
$S:z+79}
C.fjB.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fjC.prototype={
$2(d,e){return e.e.aK(0,d.e)},
$S:z+25}
C.fPS.prototype={
$1(d){return J.k(d)},
$S:17}
C.fPT.prototype={
$1(d){return d.a},
$S:z+81}
C.fPU.prototype={
$1(d){return d.length!==0},
$S:3}
C.fPV.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+10}
C.fPW.prototype={
$1(d){return d.T6(null).ag()},
$S:z+82}
C.fY4.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fzC.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fCr.prototype={
$1(d){return C.ali(A.a2(d,x.N,x.z))},
$S:z+9}
C.fCs.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fCt.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.fCu.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fCv.prototype={
$1(d){return C.uf(d,this.a)},
$S:z+3}
C.fPF.prototype={
$1(d){return C.uf(d,this.a)},
$S:z+3}
C.fY_.prototype={
$1(d){return C.ali(A.a2(d,x.N,x.z))},
$S:z+9}
C.fY0.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fY1.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fzj.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fzk.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fYa.prototype={
$1(d){return!d.as},
$S:z+1}
C.fyO.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fyP.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fyQ.prototype={
$2(d,e){return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.fXx.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fDf.prototype={
$1(d){return d.Q},
$S:z+15}
C.fPy.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fCo.prototype={
$1(d){return C.ali(A.a2(d,x.N,x.z))},
$S:z+9}
C.fCp.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fCq.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.fPt.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fk7.prototype={
$1(d){return d.length!==0},
$S:3}
C.fk8.prototype={
$1(d){return C.hdv(A.a2(d,x.N,x.z))},
$S:z+24}
C.fk9.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fka.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fkb.prototype={
$1(d){return d.length!==0},
$S:3}
C.fko.prototype={
$2(d,e){return d.eQ(new C.fkp(e))},
$S:1965}
C.fkp.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.ca},
$S:1966}
C.fkl.prototype={
$1(d){return C.hZn(d,this.a)},
$S:z+84}
C.fkm.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fkn.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.foq.prototype={
$1(d){return d.a},
$S:z+56}
C.fos.prototype={
$1(d){return d.length!==0},
$S:3}
C.fot.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.fra.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fwm.prototype={
$1(d){return C.hoX(d,C.GT(d,this.a))},
$S:z+5}
C.fwn.prototype={
$1(d){return C.hoY(d,C.GT(d,this.a))},
$S:z+5};(function aliases(){var w=C.aAL.prototype
w.btN=w.q
w=C.ayU.prototype
w.btI=w.q
w=C.aGc.prototype
w.bua=w.q
w=C.aAM.prototype
w.btO=w.q
w=C.aAO.prototype
w.btP=w.q
w=C.aAP.prototype
w.btQ=w.q
w=C.aMl.prototype
w.bwD=w.q
w=C.aOm.prototype
w.byR=w.q
w=C.aOn.prototype
w.byS=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aDK.prototype,"gcka","ckb",28)
var r
w(r=C.aAK.prototype,"gcd7","cd8",65)
v(r,"gaNl","NH",0)
v(r,"gcsu","AW",0)
v(r,"gbMd","Ol",0)
v(r,"gcGC","yA",0)
v(r,"gcmc","a0W",0)
v(r,"gbHE","O4",0)
v(r,"gbMD","Xq",0)
w(r,"gbRy","bRz",78)
v(r,"gbC0","zZ",0)
v(C.aAN.prototype,"gcGy","Fx",0)
v(r=C.al7.prototype,"gbqd","bqe",2)
v(r,"gbq6","bq7",2)
v(r,"gcHF","cHG",2)
u(r,"gq5","lj",0)
u(r=C.ajk.prototype,"geX","h2",2)
w(r,"gc96","c97",27)
u(C.atZ.prototype,"gq5","lj",0)
v(r=C.axU.prototype,"gcT7","cT8",2)
u(r,"gq5","lj",0)
u(C.aK_.prototype,"gbqb","bqc",2)
v(C.alg.prototype,"gBp","cHQ",2)
u(r=C.ale.prototype,"gcIu","cIv",2)
u(r,"gq5","lj",0)
v(r=C.ala.prototype,"gbp5","bp6",2)
v(r,"gcNF","cNG",2)
u(r=C.alc.prototype,"geX","h2",2)
u(r,"gkx","cHb",2)
v(r=C.al8.prototype,"gcH0","cH1",2)
u(r,"gbo_","jy",2)
v(r=C.aEi.prototype,"gaga","vU",0)
v(r,"gcfN","a05",0)
v(r,"gaRq","Ia",0)
v(r=C.aEf.prototype,"gcCH","a34",0)
v(r,"gaga","vU",0)
v(r,"gcqu","a1A",0)
v(r,"gcfI","b17",2)
v(r,"gcgK","a0j",0)
w(r,"gcd1","cd2",35)
v(r,"gbMv","If",0)
v(r,"gcDI","cDJ",2)
v(r,"gc3i","Z6",0)
w(r,"gcbw","cbx",36)
v(r,"gcfw","cfx",2)
v(r=C.aCJ.prototype,"gc9c","PY",0)
v(r,"gc9e","c9f",2)
v(r,"gbJ8","aa4",0)
v(r=C.aEh.prototype,"gbQ_","XU",0)
v(r,"gc_x","Yz",0)
v(r,"gcwW","a2s",0)
v(r,"gct4","a23",0)
v(C.aEg.prototype,"gcsN","ahU",0)
v(C.at2.prototype,"gcbu","a_I",0)
v(C.azu.prototype,"ga2O","Ko",2)
v(C.azt.prototype,"ga2O","Ko",2)
v(C.ay7.prototype,"ga2O","Ko",2)
v(r=C.aFJ.prototype,"gb2i","QU",0)
v(r,"gbAP","W6",0)
v(r,"gcgy","cgz",2)
w(C.aFI.prototype,"gccm","ccn",69)
t(C.aFK.prototype,"gaRk",0,0,null,["$1","$0"],["I9","bKp"],70,0,0)
s(C,"hwm","i8k",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aD,[C.aoQ,C.uw,C.nl,C.I0,C.af2,C.Kl,C.ux,C.bRw,C.rZ,C.bo_,C.alp,C.ada,C.li,C.bQ7,C.ate,C.zh,C.ak4,C.Mj,C.b9B,C.a9l,C.bgP,C.af9,C.az9,C.aeY,C.aK_,C.Kt,C.Gb,C.bfJ,C.aJW,C.aq6,C.ddO,C.lL,C.aUc,C.aUb,C.aSa,C.u1,C.rb,C.lt,C.hU,C.kN,C.aHU])
u(A.hM,[C.fH2,C.fH1,C.fH3,C.fQx,C.fv8,C.fv9,C.fve,C.fEM,C.fEL,C.fEK,C.c6e,C.fR3,C.fQW,C.fR7,C.fzr,C.dM0,C.dLW,C.dLX,C.dLz,C.dLv,C.dMf,C.dMg,C.dM9,C.dMa,C.dMh,C.dMi,C.fA4,C.fCl,C.fCm,C.fPD,C.fXZ,C.fzi,C.fQb,C.dd0,C.dcn,C.dcw,C.dcN,C.dcs,C.dcy,C.dcp,C.dcC,C.dcD,C.dcB,C.dcS,C.dcR,C.deM,C.deN,C.deO,C.dde,C.ddj,C.ddi,C.cLv,C.cLx,C.d4k,C.d4J,C.d4K,C.d4N,C.d4P,C.d4Q,C.d4R,C.d4T,C.d4U,C.bPS,C.bPM,C.fo7,C.fXS,C.fXT,C.fXU,C.fXP,C.fXV,C.fXW,C.fXX,C.fXO,C.fAC,C.fOE,C.fx3,C.fDe,C.bL7,C.fYg,C.fPa,C.bJm,C.bJh,C.bJj,C.bJi,C.cn4,C.cn_,C.cn0,C.cmZ,C.cmX,C.cn1,C.cMz,C.cC6,C.cC9,C.cC7,C.cCa,C.cCb,C.f1_,C.fb3,C.bQE,C.bQy,C.bQC,C.bQf,C.dY3,C.dY0,C.dY1,C.dY_,C.dY5,C.bQw,C.bQm,C.bQ6,C.bQ5,C.bQ1,C.bQ2,C.bQ3,C.bQ4,C.dZJ,C.dZ8,C.dZ3,C.dYv,C.dYL,C.dYO,C.dYK,C.dYJ,C.dZ_,C.dZ0,C.dYV,C.dYj,C.dZb,C.dZ5,C.dYl,C.dYm,C.dYn,C.dYs,C.dYq,C.dYp,C.dYF,C.dYG,C.dYA,C.dZi,C.dZe,C.ddp,C.ddq,C.fA8,C.fA9,C.fAa,C.fA6,C.fA7,C.fAd,C.fAe,C.fAf,C.fAb,C.fAc,C.ddJ,C.ddz,C.ddu,C.ddE,C.ddF,C.ddI,C.ddw,C.ddL,C.ddM,C.ddN,C.fgN,C.eR5,C.dtx,C.dtH,C.dtI,C.dtJ,C.dtM,C.dtL,C.dtN,C.dtS,C.dtT,C.ccT,C.ccS,C.ccO,C.ccP,C.ccQ,C.ccR,C.ccY,C.ccV,C.ccW,C.dZv,C.dZy,C.dZx,C.dZE,C.dZF,C.dLk,C.fQE,C.fQ0,C.fXw,C.fQ5,C.fQ4,C.d57,C.d58,C.d53,C.cDp,C.cDr,C.cDs,C.cDk,C.cDt,C.fg6,C.fOr,C.eOb,C.eO7,C.eO3,C.eO1,C.eOf,C.fXm,C.eOo,C.eOx,C.eOs,C.eOt,C.eOC,C.cCG,C.cCE,C.cCF,C.fz8,C.fY6,C.fx2,C.bR0,C.bR_,C.bQX,C.bQY,C.bQZ,C.fjA,C.fjB,C.fPS,C.fPT,C.fPU,C.fPV,C.fPW,C.fY4,C.fzC,C.fCr,C.fCs,C.fCu,C.fCv,C.fPF,C.fY_,C.fY0,C.fY1,C.fzj,C.fzk,C.fYa,C.fyO,C.fyP,C.fXx,C.fDf,C.fPy,C.fCo,C.fCp,C.fPt,C.fk7,C.fk8,C.fk9,C.fka,C.fkb,C.fkp,C.fkl,C.fkm,C.foq,C.fos,C.fra,C.fwm,C.fwn])
u(A.ax,[C.aZI,C.al5,C.aVs,C.Z5,C.bbl,C.Qd,C.a5Q,C.tn,C.I2,C.bfH,C.bjq,C.bxg,C.bmD,C.adw,C.bjp,C.adv,C.bjo,C.aCK,C.aIY,C.adx,C.G7,C.bfI,C.acN,C.bfG,C.bfL,C.aZG,C.at2,C.adS])
u(A.mW,[C.bbZ,C.bdc,C.bd3,C.aHP,C.biu,C.bnZ,C.aVx,C.bc_,C.aAJ,C.bbu,C.brX,C.biC,C.bi2,C.bia,C.bfK,C.beM,C.bkw,C.bx3])
u(A.jc,[C.fR0,C.fR1,C.fR2,C.fQU,C.fQV,C.fR5,C.fR6,C.dMc,C.dLZ,C.dM1,C.dLG,C.dLH,C.dLI,C.dLF,C.dLN,C.dLE,C.dLO,C.dLP,C.dLD,C.dLQ,C.dLC,C.dLR,C.dLB,C.dLS,C.dLt,C.dLu,C.dLA,C.dLT,C.dLy,C.dLU,C.dLx,C.dLJ,C.dLw,C.dLK,C.dLs,C.dLL,C.dLM,C.dMd,C.dMe,C.dM2,C.dM3,C.dM4,C.dM5,C.dM6,C.dM7,C.dM8,C.dMk,C.dMb,C.fA5,C.dcl,C.dcj,C.dck,C.dcm,C.dd_,C.dcP,C.dcM,C.dco,C.dcQ,C.dcu,C.dcv,C.dcx,C.dcO,C.dct,C.dcz,C.dcX,C.dcJ,C.dcI,C.dcK,C.dcL,C.dcE,C.dcG,C.dcH,C.dcA,C.dcT,C.dcW,C.dcq,C.dcr,C.deL,C.deK,C.deJ,C.deI,C.deP,C.deH,C.deQ,C.ddf,C.ddg,C.ddh,C.ddk,C.ddd,C.ddc,C.cLw,C.d4j,C.d4w,C.d4v,C.d4L,C.d4u,C.d4M,C.d4t,C.d4s,C.d4O,C.d4r,C.d4E,C.d4D,C.d4V,C.bPL,C.bPV,C.bPN,C.bPO,C.bPR,C.bPQ,C.bPT,C.bPU,C.bPP,C.bPJ,C.bPK,C.bRo,C.bRp,C.bRq,C.bRr,C.bRs,C.bRt,C.bRu,C.fXR,C.fOF,C.bJl,C.bJg,C.bJe,C.bJf,C.bJd,C.cn6,C.cn7,C.cn5,C.cn8,C.cna,C.cnb,C.cnc,C.cn2,C.cC5,C.cCe,C.cCf,C.cCg,C.cCd,C.cCh,C.cCi,C.cCj,C.cCk,C.cC8,C.cCc,C.bQU,C.bQT,C.bQR,C.bQP,C.bQQ,C.bQM,C.bQN,C.bQO,C.bQS,C.bQL,C.f10,C.f11,C.f12,C.f13,C.f14,C.bQI,C.bQJ,C.bQK,C.bQD,C.bQF,C.bQG,C.bQH,C.bQz,C.bQj,C.bQi,C.bQh,C.bQb,C.bQc,C.bQg,C.bQd,C.bQe,C.bQa,C.dY2,C.dY4,C.dXY,C.dXZ,C.dXX,C.dY6,C.dY7,C.dY8,C.dYb,C.dYc,C.dYd,C.dYe,C.dYf,C.dYg,C.dYh,C.dYi,C.dY9,C.dYa,C.bQv,C.bQu,C.bQl,C.bQk,C.bQr,C.bQs,C.bQo,C.bQp,C.bQq,C.bQn,C.bPW,C.bPX,C.bQ0,C.bQ_,C.bPZ,C.bPY,C.dZI,C.dZH,C.dZK,C.dZL,C.dZM,C.dZG,C.dZO,C.dZN,C.dZ6,C.dZ7,C.dZ9,C.dYw,C.dYN,C.dYM,C.dYP,C.dZ2,C.dYI,C.dYT,C.dYU,C.dYS,C.dYQ,C.dYR,C.dYW,C.dYX,C.dYY,C.dZ1,C.dYk,C.dZ4,C.dYo,C.dYr,C.dYt,C.dZa,C.dYz,C.dYx,C.dYB,C.dYC,C.dYy,C.dYD,C.dYH,C.dZj,C.dZk,C.dZc,C.dZf,C.dZg,C.dZh,C.dZm,C.dZd,C.dYu,C.ddo,C.ddn,C.dds,C.ddC,C.ddt,C.eR4,C.dty,C.dtv,C.dtw,C.dtG,C.dtF,C.dtE,C.dtO,C.dtD,C.dtP,C.dtC,C.dtQ,C.dtB,C.dtR,C.dtA,C.dtz,C.dtK,C.dtU,C.du2,C.dZw,C.dZA,C.dZB,C.dZs,C.dZt,C.dZu,C.dZz,C.dZD,C.dZC,C.dZn,C.dZo,C.dZp,C.dZq,C.dZr,C.dLl,C.fQB,C.clj,C.d56,C.d55,C.d59,C.d52,C.d54,C.cDh,C.cDn,C.cDo,C.cDm,C.cDq,C.cDl,C.cDi,C.cDj,C.cDu,C.fg7,C.fg8,C.eOd,C.eO4,C.eO5,C.eO6,C.eO8,C.eO9,C.eOc,C.eO_,C.eO2,C.eOe,C.eO0,C.eOh,C.eOi,C.eOj,C.eOk,C.eOg,C.eNV,C.eNW,C.eNX,C.eNZ,C.eNY,C.eOD,C.eOE,C.eOm,C.eOn,C.eOu,C.eOv,C.eOw,C.eOq,C.eOr,C.eOK,C.eOJ,C.eOL,C.eOI,C.eOl,C.eOp,C.eOG,C.eOF,C.eOA,C.eOB,C.eOz,C.eOy])
u(A.ag,[C.ap1,C.Tg,C.ZO,C.ZS,C.ZQ,C.Zo,C.al6,C.ajj,C.atY,C.axT,C.alf,C.ald,C.al9,C.VD,C.alb,C.Th,C.aq9,C.aq3,C.a_s,C.aq7,C.a_N,C.a_O,C.a6F,C.Zq,C.Zp,C.YX,C.a1A,C.FX,C.ay0,C.at1,C.asW,C.at0,C.Ow])
u(A.ah,[C.aDK,C.bfB,C.aAK,C.bfZ,C.aAN,C.bda,C.aAL,C.ayU,C.aGc,C.axU,C.aAP,C.aAO,C.aAM,C.bkP,C.alc,C.al8,C.aEi,C.aEf,C.aCJ,C.aEh,C.aEg,C.bkQ,C.aMl,C.azu,C.azt,C.ay7,C.bx6,C.aOm,C.aOn,C.aFJ,C.bm8,C.aFI,C.byN])
u(A.ke,[C.dLY,C.dM_,C.dLV,C.dMj,C.fCn,C.bPI,C.dcZ,C.dcY,C.dcF,C.dcU,C.dcV,C.ddl,C.bRv,C.bRn,C.bQ8,C.bQ9,C.fXQ,C.fYf,C.bJk,C.cn9,C.cn3,C.cmY,C.f15,C.bQx,C.bQA,C.bQB,C.dnT,C.bQt,C.dYZ,C.dYE,C.dZl,C.ddB,C.ddA,C.ddy,C.ddD,C.ddG,C.ddH,C.ddr,C.ddv,C.ddx,C.ddK,C.ccM,C.ccU,C.ccZ,C.dLm,C.fQD,C.fQC,C.fg4,C.fg5,C.eOa,C.eOH,C.cCH,C.fnK,C.fjC,C.fCt,C.fyQ,C.fCq,C.fko,C.fkn,C.fot])
u(A.lZ,[C.a15,C.afb,C.a1o,C.a_f,C.abS,C.aKI,C.I1,C.alh,C.cCI,C.cCJ])
t(C.al7,C.aAL)
t(C.ajk,C.ayU)
t(C.atZ,C.aGc)
t(C.bfF,C.aAP)
t(C.alg,C.bfF)
t(C.bfE,C.aAO)
t(C.ale,C.bfE)
t(C.bfD,C.aAM)
t(C.ala,C.bfD)
t(C.bkx,C.aMl)
t(C.bx4,C.aOm)
t(C.bx5,C.aOn)
t(C.aFK,C.byN)
t(C.b9O,A.b9C)
t(C.bx7,A.a6k)
t(C.b9N,C.bx7)
w(C.aAL,A.cq)
w(C.ayU,A.cq)
w(C.aGc,A.eP)
w(C.aAM,A.cq)
v(C.bfD,C.aeY)
w(C.aAO,A.cq)
v(C.bfE,C.aeY)
w(C.aAP,A.cq)
v(C.bfF,C.aeY)
w(C.aMl,A.eP)
w(C.aOm,A.cq)
w(C.aOn,A.cq)
v(C.byN,A.eE)
v(C.bx7,A.j6)})()
A.jk(b.typeUniverse,JSON.parse('{"aZI":{"ax":[],"v":[]},"bbZ":{"aC":[]},"ap1":{"ag":[],"v":[]},"aDK":{"ah":["ap1"]},"Tg":{"ag":[],"v":[]},"al5":{"ax":[],"v":[]},"aVs":{"ax":[],"v":[]},"bfB":{"ah":["Tg"]},"ZO":{"ag":[],"v":[]},"ZS":{"ag":[],"v":[]},"ZQ":{"ag":[],"v":[]},"Zo":{"ag":[],"v":[]},"aAK":{"ah":["ZO"]},"bfZ":{"ah":["ZS"]},"aAN":{"ah":["ZQ"]},"Z5":{"ax":[],"v":[]},"bdc":{"aC":[]},"bd3":{"aC":[]},"bda":{"ah":["Zo"]},"aHP":{"aC":[]},"biu":{"aC":[]},"bbl":{"ax":[],"v":[]},"al6":{"ag":[],"v":[]},"al7":{"ah":["al6"]},"bnZ":{"aC":[]},"aVx":{"aC":[]},"ajj":{"ag":[],"v":[]},"atY":{"ag":[],"v":[]},"axT":{"ag":[],"v":[]},"ajk":{"ah":["ajj"]},"bc_":{"aC":[]},"Qd":{"ax":[],"v":[]},"aAJ":{"aC":[]},"atZ":{"ah":["atY"]},"bbu":{"aC":[]},"axU":{"ah":["axT"]},"alf":{"ag":[],"v":[]},"ald":{"ag":[],"v":[]},"al9":{"ag":[],"v":[]},"alg":{"ah":["alf"]},"brX":{"aC":[]},"ale":{"ah":["ald"]},"biC":{"aC":[]},"ala":{"ah":["al9"]},"bi2":{"aC":[]},"VD":{"ag":[],"v":[]},"alb":{"ag":[],"v":[]},"Th":{"ag":[],"v":[]},"a5Q":{"ax":[],"v":[]},"bia":{"aC":[]},"tn":{"ax":[],"v":[]},"I2":{"ax":[],"v":[]},"bkP":{"ah":["VD"]},"alc":{"ah":["alb"]},"al8":{"ah":["Th"]},"aq9":{"ag":[],"v":[]},"aq3":{"ag":[],"v":[]},"a_s":{"ag":[],"v":[]},"adx":{"ax":[],"v":[]},"aEi":{"ah":["aq9"]},"aEf":{"ah":["aq3"]},"bfH":{"ax":[],"v":[]},"bfK":{"aC":[]},"bjq":{"ax":[],"v":[]},"beM":{"aC":[]},"bxg":{"ax":[],"v":[]},"bmD":{"ax":[],"v":[]},"aCJ":{"ah":["a_s"]},"adw":{"ax":[],"v":[]},"bjp":{"ax":[],"v":[]},"adv":{"ax":[],"v":[]},"bjo":{"ax":[],"v":[]},"aCK":{"ax":[],"v":[]},"aIY":{"ax":[],"v":[]},"G7":{"ax":[],"v":[]},"aq7":{"ag":[],"v":[]},"a_N":{"ag":[],"v":[]},"a_O":{"ag":[],"v":[]},"aEh":{"ah":["aq7"]},"bfI":{"ax":[],"v":[]},"acN":{"ax":[],"v":[]},"bfG":{"ax":[],"v":[]},"bfL":{"ax":[],"v":[]},"aEg":{"ah":["a_N"]},"bkQ":{"ah":["a_O"]},"aZG":{"ax":[],"v":[]},"a6F":{"ag":[],"v":[]},"bkx":{"ah":["a6F"]},"bkw":{"aC":[]},"at2":{"ax":[],"v":[]},"Zq":{"ag":[],"v":[]},"Zp":{"ag":[],"v":[]},"YX":{"ag":[],"v":[]},"a1A":{"ag":[],"v":[]},"azu":{"ah":["Zq"]},"azt":{"ah":["Zp"]},"ay7":{"ah":["YX"]},"bx6":{"ah":["a1A"]},"FX":{"ag":[],"v":[]},"ay0":{"ag":[],"v":[]},"bx4":{"ah":["FX"]},"bx5":{"ah":["ay0"]},"bx3":{"aC":[]},"at1":{"ag":[],"v":[]},"aFJ":{"ah":["at1"]},"adS":{"ax":[],"v":[]},"asW":{"ag":[],"v":[]},"at0":{"ag":[],"v":[]},"bm8":{"ah":["asW"]},"aFI":{"ah":["at0"]},"Ow":{"ag":[],"v":[]},"aFK":{"ah":["Ow"],"eE":[]},"b9N":{"j6":[],"fh":[]}}'))
A.CX(b.typeUniverse,JSON.parse('{"aeY":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.aw
return{e2:w("aSa"),cq:w("m7"),Q:w("rb"),r:w("bw<n,n>"),c5:w("aUb"),dY:w("aUc"),fH:w("Mj"),de:w("ak4"),dN:w("Mq<H>"),gc:w("DY<H>"),A:w("ev<n?>"),e:w("I0"),B:w("nl"),P:w("hU"),df:w("li"),k:w("kN"),x:w("aA<~>"),U:w("O<a3w>"),V:w("O<ac>"),C:w("O<rb>"),O:w("O<u>"),c:w("O<Mj>"),b:w("O<ak4>"),ac:w("O<ev<n?>>"),I:w("O<nl>"),u:w("O<hU>"),J:w("O<li>"),_:w("O<kN>"),cl:w("O<aA<ai<a8<n,@>>>>"),R:w("O<nn>"),eU:w("O<ai<+(K,K)>>"),ez:w("O<a8<n,aD>>"),gE:w("O<a8<n,n>>"),Y:w("O<a8<n,@>>"),fD:w("O<mC>"),bp:w("O<oq>"),g:w("O<t>"),ar:w("O<ate>"),v:w("O<h9>"),gy:w("O<a9l>"),L:w("O<+(n,n)>"),G:w("O<+(K,K)>"),E:w("O<+(K,~())>"),bd:w("O<+(n,H,R)>"),bF:w("O<+count,id,name(H,n,n)>"),F:w("O<cX>"),s:w("O<n>"),cF:w("O<as>"),aS:w("O<iV>"),dT:w("O<b9B>"),p:w("O<v>"),Z:w("O<fh>"),D:w("O<lt>"),h:w("O<az9>"),cC:w("O<bgP>"),fp:w("O<Kl>"),M:w("O<Kt>"),gZ:w("O<aHU>"),gA:w("O<af2>"),e4:w("O<af9>"),dE:w("O<aJW>"),f7:w("O<R>"),n:w("O<K>"),t:w("O<H>"),dS:w("O<aC?>"),d4:w("O<n?>"),eF:w("cB<ah<ag>>"),d:w("ai<nl>"),do:w("ai<hU>"),cg:w("ai<li>"),ax:w("ai<kN>"),fO:w("ai<a8<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),dy:w("ai<n>"),er:w("ai<as>"),gk:w("ai<lt>"),j:w("ai<@>"),fK:w("bA<n,n>"),d2:w("bA<n,ai<a8<n,@>>>"),a:w("a8<n,@>"),f:w("a8<@,@>"),gv:w("N<n,I3>"),cM:w("N<H,n>"),w:w("iF"),g2:w("rv"),bV:w("aoQ"),fL:w("cu"),K:w("aD"),dc:w("h9"),fo:w("OT<H>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(R,H)"),d9:w("+dx,hidden(K,ai<hU>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),fT:w("jx<hU>"),ec:w("jx<n>"),gW:w("qT<K>"),X:w("bp<K>"),bW:w("dK"),W:w("bN<n>"),b4:w("bN<H>"),cI:w("jS<n>"),av:w("Y<zh>"),cc:w("Y<n>"),l:w("v"),gF:w("fh"),fA:w("lt"),dO:w("Gb"),bw:w("adv<n?>"),cy:w("Kv"),q:w("n8"),y:w("R"),i:w("K"),z:w("@"),S:w("H"),eK:w("ai<kN>?"),m:w("aq6?"),cT:w("t?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),he:w("+qrPayload,token,usesRemaining(n,n,H)?"),gG:w("+members,trees,viewOnly(H,H,R)?"),az:w("q8?"),T:w("n?"),aD:w("dK?"),o:w("lt?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b1a=new A.bi(B.fE,B.bI,B.fE,B.bI)
D.act=new A.bi(B.fE,B.ip,B.fE,B.ip)
D.b1n=new A.bi(B.i9,B.bI,B.bI,B.bI)
D.b1r=new A.ay(B.cO,1.4,B.r,-1)
D.b1B=new A.ay(B.ae,1,B.r,-1)
D.acY=new A.aZ(140,1/0,0,1/0)
D.b3_=new A.aZ(0,1/0,64,1/0)
D.b33=new A.aZ(0,84,0,1/0)
D.ad4=new A.aZ(130,1/0,0,1/0)
D.aAA=w([B.m0,B.rf,B.c],x.O)
D.c39=new A.a9(B.ay,B.aE,B.x,D.aAA,null,null)
D.b3O=new A.o(null,null,null,null,null,D.c39,B.n)
D.d9M=w([B.aW,B.bP],x.O)
D.c5g=new A.a9(B.b4,B.b7,B.x,D.d9M,null,null)
D.b48=new A.o(null,null,null,null,null,D.c5g,B.n)
D.Xk=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fr=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.ddD=w([B.du,D.Xk,D.fr],x.O)
D.c2l=new A.a9(B.b4,B.b7,B.x,D.ddD,null,null)
D.b4T=new A.o(null,null,null,null,null,D.c2l,B.n)
D.fir=new A.F(!0,B.bY,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTy=new A.y("?",null,D.fir,null,null,null,null,null,null,null,null,null)
D.b8y=new A.ca(B.A,null,null,D.fTy,null)
D.V2=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBC=new A.y("\ud83c\udf33",null,D.V2,null,null,null,null,null,null,null,null,null)
D.adP=new A.ca(B.A,null,null,D.fBC,null)
D.fEf=new A.y("\ud83c\udfc6",null,Ao.JZ,null,null,null,null,null,null,null,null,null)
D.b8J=new A.ca(B.A,null,null,D.fEf,null)
D.baE=new A.fj(null,null,null,null,null,E.kb,null,null,null,null)
D.adR=new A.ca(B.A,null,null,D.baE,null)
D.kz=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fiZ=new A.F(!0,D.kz,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDj=new A.y("No books on the shelf yet.",null,D.fiZ,null,null,null,null,null,null,null,null,null)
D.ell=new A.D(B.mI,D.fDj,null)
D.b8Y=new A.ca(B.A,null,null,D.ell,null)
D.fpV=new A.F(!0,D.fr,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUu=new A.y("\ud83d\ude8c  On the road\u2026",null,D.fpV,null,null,null,null,null,null,null,null,null)
D.elY=new A.D(B.cl,D.fUu,null)
D.b9s=new A.ca(B.A,null,null,D.elY,null)
D.aU8=new A.y("\ud83e\uddfa",null,D.V2,null,null,null,null,null,null,null,null,null)
D.b9I=new A.ca(B.A,null,null,D.aU8,null)
D.fGL=new A.y("\ud83c\udfad",null,D.V2,null,null,null,null,null,null,null,null,null)
D.b9W=new A.ca(B.A,null,null,D.fGL,null)
D.b9Z=new A.ca(B.A,null,null,A8.Xa,null)
D.aeb=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.aeh=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bcb=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bcg=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bcr=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bct=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bcv=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bcC=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lt=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bcF=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bcK=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bcL=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bcM=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lu=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bdl=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.B4=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bdu=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bdO=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bdR=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bdX=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.be4=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.aeS=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bea=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Xv=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.aeV=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.ben=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Xx=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.beJ=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.af5=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bf5=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bfl=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bfJ=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bfS=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.Fa=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bgc=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bge=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bgi=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.aft=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bgD=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bgI=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bgO=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.afw=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bgW=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bhp=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bhx=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bhz=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bhE=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.afL=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.big=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ag7=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bja=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.agk=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bjy=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.Fp=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bjE=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bjO=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bjQ=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ago=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bk7=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bk8=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bkb=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.agv=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.Yc=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bku=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bkQ=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bkV=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.agH=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bl0=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.Yh=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bli=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.blj=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.Fw=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bm4=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bmH=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bmN=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bmR=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.q_=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bn0=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bn4=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bn9=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bnb=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.ahm=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.ahq=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.FB=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.YA=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.ahy=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.boi=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.boB=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bp_=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bp8=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.ahW=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.YK=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bpg=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bpw=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.YN=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bpK=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bq0=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.YR=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bq5=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.aid=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.aif=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bqn=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.aik=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bqQ=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bqS=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bqY=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.br3=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.brb=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.brM=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bsf=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fxt=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bvM=new A.ev(null,D.fxt,B.eY,null,x.A)
D.fGC=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.bvO=new A.ev(null,D.fGC,B.eY,null,x.A)
D.ajd=new A.b9(3e4)
D.bwl=new A.b9(38e5)
D.bx5=new A.ii(0,10,0,10)
D.bxe=new A.Q(0,1,0,0)
D.bxo=new A.ii(0,4,0,4)
D.bxr=new A.Q(0,4,5,0)
D.bxH=new A.Q(10,10,14,10)
D.bxT=new A.ii(10,4,10,4)
D.by0=new A.ii(10,8,10,8)
D.by1=new A.Q(10,8,8,8)
D.bys=new A.Q(12,6,12,2)
D.byI=new A.Q(14,0,14,6)
D.byN=new A.Q(14,10,6,6)
D.byO=new A.Q(14,12,14,0)
D.byS=new A.Q(14,12,14,8)
D.byV=new A.Q(14,12,8,14)
D.byZ=new A.ii(14,14,14,14)
D.bze=new A.Q(14,6,14,40)
D.bzh=new A.Q(14,8,14,30)
D.bzE=new A.Q(16,2,16,10)
D.bzO=new A.Q(16,6,16,30)
D.bzQ=new A.Q(16,6,16,8)
D.bA3=new A.Q(18,10,18,4)
D.bA5=new A.Q(18,12,18,0)
D.bAc=new A.Q(18,14,12,4)
D.akJ=new A.Q(18,16,18,8)
D.bAt=new A.Q(18,20,18,22)
D.akN=new A.Q(18,24,18,24)
D.bAz=new A.Q(18,30,18,30)
D.bAR=new A.Q(20,10,12,20)
D.bAU=new A.Q(20,11,20,11)
D.bB4=new A.Q(20,18,16,18)
D.bB6=new A.Q(20,18,20,6)
D.bBW=new A.Q(24,32,24,28)
D.bBX=new A.Q(24,36,24,32)
D.bC0=new A.Q(26,26,24,14)
D.bCf=new A.Q(2,4,2,8)
D.bCj=new A.Q(30,0,30,0)
D.bCu=new A.Q(38,22,22,22)
D.al6=new A.Q(40,24,24,24)
D.bCw=new A.ii(40,40,40,40)
D.bCy=new A.Q(46,30,30,30)
D.al9=new A.Q(4,0,0,8)
D.bCZ=new A.Q(56,40,40,40)
D.bD2=new A.Q(1.25,1.25,1.25,1.25)
D.bD3=new A.Q(60,0,60,0)
D.bD6=new A.Q(6,14,6,16)
D.bDa=new A.Q(6,4,12,0)
D.bDe=new A.Q(6,6,10,2)
D.bDl=new A.ii(7,3,7,3)
D.bDT=new A.Q(5,1.5,5,1.5)
D.bE3=new A.Q(6,2.5,6,2.5)
D.fOG=new A.y("Family Games",null,B.k5,null,null,null,null,null,null,null,null,null)
D.fw3=new A.y("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,F.a9S,null,null,null,null,null,null,null,null,null)
D.cE8=w([D.fOG,D.fw3],x.p)
D.btj=new A.fi(B.ag,B.e,B.i,B.E,null,B.p,null,0,D.cE8,null)
D.bEl=new A.bz(1,B.bb,D.btj,null)
D.fT3=new A.y("Signature",null,B.n0,null,null,null,null,null,null,null,null,null)
D.bEp=new A.bz(1,B.bb,D.fT3,null)
D.fLg=new A.y("MADE BY THE ONE WHO PLANTED THE TREE",null,T.t8,null,null,null,null,null,null,null,null,null)
D.bEY=new A.bz(1,B.bb,D.fLg,null)
D.fQ9=new A.y("Tell the AI what to fix",null,B.de,null,null,null,null,null,null,null,null,null)
D.bFe=new A.bz(1,B.bb,D.fQ9,null)
D.fqI=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fS7=new A.y("Worksheets",null,D.fqI,null,null,null,null,null,null,null,null,null)
D.fqT=new A.F(!0,E.aeD,null,null,null,null,13,B.cy,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQZ=new A.y("Track your project spending",null,D.fqT,null,null,null,null,null,null,null,null,null)
D.d1m=w([D.fS7,B.au,D.fQZ],x.p)
D.bsW=new A.fi(B.ag,B.e,B.i,B.E,null,B.p,null,0,D.d1m,null)
D.bFk=new A.bz(1,B.bb,D.bsW,null)
D.flI=new A.F(!0,E.kb,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwC=new A.y("FAMILY LIBRARY",null,D.flI,null,null,null,null,null,null,null,null,null)
D.bFC=new A.bz(1,B.bb,D.fwC,null)
D.NO=new C.I0("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.w2=new C.I1(0,"male")
D.og=new C.I1(1,"female")
D.yv=new C.I1(2,"unknown")
D.u9=new C.alh(0,"owner")
D.NP=new C.alh(1,"editor")
D.kH=new C.alh(2,"viewer")
D.amP=new A.a0(61199,"MaterialIcons",!1)
D.bKy=new A.a0(61504,"MaterialIcons",!1)
D.bKz=new A.a0(61505,"MaterialIcons",!1)
D.bKB=new A.a0(61587,"MaterialIcons",!1)
D.bKI=new A.a0(61890,"MaterialIcons",!1)
D.bLA=new A.a0(63034,"MaterialIcons",!0)
D.bLS=new A.a0(63153,"MaterialIcons",!1)
D.bMq=new A.a0(63429,"MaterialIcons",!1)
D.aoX=new A.a0(984520,"MaterialIcons",!1)
D.bL6=new A.a0(62776,"MaterialIcons",!1)
D.bOI=new A.ae(D.bL6,26,B.b_,null,null,null)
D.bJw=new A.a0(57648,"MaterialIcons",!1)
D.bP2=new A.ae(D.bJw,14,B.c,null,null,null)
D.bPj=new A.ae(B.GE,17,null,null,null,null)
D.bPp=new A.ae(B.a1f,null,B.bP,null,null,null)
D.bPS=new A.ae(E.a1k,null,null,null,null,null)
D.bPV=new A.ae(B.iW,18,E.kb,null,null,null)
D.a14=new A.a0(62044,"MaterialIcons",!1)
D.bQ_=new A.ae(D.a14,null,B.aW,null,null,null)
D.bQ6=new A.ae(B.yI,18,B.c,null,null,null)
D.bQP=new A.ae(B.e5,16,null,null,null,null)
D.bQW=new A.ae(D.a14,32,B.aW,null,null,null)
D.bRe=new A.ae(E.amQ,18,B.cO,null,null,null)
D.bSi=new A.ae(B.GQ,22,B.aw,null,null,null)
D.bSv=new A.ae(B.e5,22,B.b_,null,null,null)
D.bSH=new A.ae(Y.a19,22,B.c,null,null,null)
D.bSN=new A.ae(B.uk,52,B.c,null,null,null)
D.bSX=new A.ae(B.GQ,30,B.aw,null,null,null)
D.bTf=new A.ae(B.a1q,null,B.c,null,null,null)
D.apB=new A.ae(B.uu,22,B.c,null,null,null)
D.bTo=new A.ae(B.e5,17,null,null,null,null)
D.bTK=new A.ae(B.uq,26,B.cO,null,null,null)
D.bUw=new A.ae(B.a1x,16,null,null,null,null)
D.bVi=new A.ae(B.uk,24,B.c,null,null,null)
D.bVn=new A.ae(B.Oh,20,B.rL,null,null,null)
D.bVs=new A.ae(B.GC,null,B.bP,null,null,null)
D.bVA=new A.ae(B.iW,18,B.c,null,null,null)
D.bWe=new A.ae(B.cz,22,B.ae,null,null,null)
D.bX4=new A.ae(B.ea,16,B.ae,null,null,null)
D.bXg=new A.ae(D.a14,20,B.aW,null,null,null)
D.aq0=new A.ae(B.hw,20,null,null,null,null)
D.bXL=new A.ae(B.cz,18,D.kz,null,null,null)
D.bY0=new A.ae(B.yS,28,B.c,null,null,null)
D.bYb=new A.ae(B.O7,null,B.f9,null,null,null)
D.bYw=new A.ae(B.yS,24,B.c,null,null,null)
D.bYY=new A.ae(B.uk,null,B.aW,null,null,null)
D.bYZ=new A.ae(B.jS,20,B.cO,null,null,null)
D.bZi=new A.ae(B.GE,16,null,null,null,null)
D.c_R=new A.e5(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jQ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eG,!0,null,null,null,null)
D.aqI=new C.a5Q(10,null)
D.c0m=new C.a5Q(12,null)
D.c0n=new C.a5Q(14,null)
D.dhy=w([B.bt,B.aW,B.fg,B.b_],x.O)
D.c1y=new A.a9(B.ay,B.aE,B.x,D.dhy,null,null)
D.blR=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.brS=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.cYX=w([D.blR,D.brS],x.O)
D.c1J=new A.a9(B.b4,B.b7,B.x,D.cYX,null,null)
D.dbJ=w([B.f7,B.fL,B.fg],x.O)
D.c1O=new A.a9(B.ay,B.aE,B.x,D.dbJ,null,null)
D.ahb=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bcN=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d05=w([D.ahb,D.bcN],x.O)
D.c2m=new A.a9(B.b4,B.b7,B.x,D.d05,null,null)
D.bgs=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.azT=w([D.bgs,D.ahb],x.O)
D.c2G=new A.a9(B.ay,B.aE,B.x,D.azT,null,null)
D.ag2=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bj1=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.daP=w([D.ag2,D.bj1],x.O)
D.c3k=new A.a9(B.a5,B.a8,B.x,D.daP,null,null)
D.dop=w([B.bx,B.ne],x.O)
D.c3m=new A.a9(B.b4,B.b7,B.x,D.dop,null,null)
D.blM=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dpl=w([D.blM,D.kz,D.kz,K.Yz],x.O)
D.drP=w([0,0.07,0.9,1],x.n)
D.c3S=new A.a9(B.a5,B.a8,B.x,D.dpl,D.drP,null)
D.c41=new A.a9(B.ay,B.aE,B.x,B.RL,null,null)
D.cWP=w([B.aD,D.lt],x.O)
D.c44=new A.a9(B.a5,B.a8,B.x,D.cWP,null,null)
D.dnZ=w([B.b_,B.aW,B.bP],x.O)
D.c51=new A.a9(B.ay,B.aE,B.x,D.dnZ,null,null)
D.c9f=w([10,20,30],x.t)
D.cja=w([-1,-0.4,0.3,1],x.n)
D.cqF=w([B.bt,B.b_,B.f7],x.O)
D.cqN=w([B.bw,B.aD,B.jt],x.O)
D.cqP=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.crv=w([30,140,262,360],x.n)
D.bkh=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cx2=w([D.bkh,E.agR],x.O)
D.efY=new A.t(1,2)
D.f3M=new A.cX(B.aS,D.efY,3)
D.awM=w([D.f3M],x.F)
D.cEp=w([B.hc,B.cg,B.fc],x.O)
D.cH8=w([B.bM,B.br,B.bo],x.O)
D.bGa=new C.uw("classic","Classic leather","Gold-edged brown leather",D.azT,E.kb,E.kb,"\u2766",B.K,!0,!1,!1,!1)
D.bbW=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bqG=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d33=w([D.bbW,D.bqG],x.O)
D.agV=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bG5=new C.uw("ornate","Ornate gold","Double gold border and flourishes",D.d33,D.agV,D.agV,"\u2726",B.K,!0,!0,!0,!1)
D.bg0=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bmC=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.cVI=w([D.bg0,D.bmC],x.O)
D.bG4=new C.uw("parchment","Parchment","Old paper with dark ink",D.cVI,D.Fw,I.iP,"\u2767",B.K,!0,!1,!1,!0)
D.aej=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.boW=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dme=w([D.aej,D.boW],x.O)
D.bjL=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bod=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bG7=new C.uw("minimal","Clean paper","Plain and elegant, like a printed book",D.dme,D.bjL,D.bod,"",B.K,!0,!0,!1,!0)
D.bG9=new C.uw("midnight","Midnight","Deep blue with silver stars",F.aAa,B.cs,B.bN,"\u2727",B.K,!0,!0,!1,!1)
D.bG3=new C.uw("emerald","Emerald library","Green cloth, title on the left",V.axa,E.kb,B.fN,"\u25c6",B.bi,!0,!1,!1,!1)
D.bpo=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dkk=w([B.ek,D.bpo],x.O)
D.bl_=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bmb=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bG8=new C.uw("rose","Rose vintage","Burgundy with rose-gold lettering",D.dkk,D.bl_,D.bmb,"\u2740",B.K,!0,!1,!0,!1)
D.doX=w([B.cp,G.nf],x.O)
D.bG6=new C.uw("modern","Modern","Dark, bold, left-aligned",D.doX,B.aQ,B.c,"",B.bi,!1,!0,!1,!1)
D.a3E=w([D.bGa,D.bG5,D.bG4,D.bG7,D.bG9,D.bG3,D.bG8,D.bG6],A.aw("O<uw>"))
D.cK5=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.doK=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bGl=new C.li('What does "Ubuntu" mean?',D.doK,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.cXt=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bGo=new C.li("In Swahili, what do we call a grandmother?",D.cXt,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.cXj=w(["Babu","Mama","Baba","Dada"],x.s)
D.bGj=new C.li("In Swahili, what do we call a grandfather?",D.cXj,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.cYy=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bGn=new C.li("What is a sister called in Swahili?",D.cYy,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d2u=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bGk=new C.li("What is a brother called in Swahili?",D.d2u,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.cXi=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bGv=new C.li("Which word means father in Swahili?",D.cXi,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dpR=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bGu=new C.li('"Umoja ni nguvu" means...',D.dpR,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dmX=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bGw=new C.li('"Haba na haba hujaza kibaba" teaches us...',D.dmX,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d0d=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bGt=new C.li('The African saying "It takes a village to raise a child" means...',D.d0d,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dqa=w(["The elders","The market","The river","The drum"],x.s)
D.bGp=new C.li("Who is the traditional keeper of the family stories?",D.dqa,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cOf=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bGm=new C.li("Why do families sit round the fire at night?",D.cOf,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.doZ=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bGr=new C.li('What does "Harambee" mean?',D.doZ,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.d5d=w(["An elder","A baby","A market","A cow"],x.s)
D.bGq=new C.li('"Mzee" is a respectful word for...',D.d5d,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dkb=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bGs=new C.li('What does "Shikamoo" show?',D.dkb,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.ax6=w([D.bGl,D.bGo,D.bGj,D.bGn,D.bGk,D.bGv,D.bGu,D.bGw,D.bGt,D.bGp,D.bGm,D.bGr,D.bGq,D.bGs],x.J)
D.cSz=w([90,360],x.n)
D.cVf=w([B.bP,B.bk],x.O)
D.blB=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.cVU=w([D.aej,D.blB],x.O)
D.cWy=w([-1,-0.3,0.4,1],x.n)
D.cXo=w([0,0.45,0.72,0.92,1],x.n)
D.bfX=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.cXH=w([D.bfX,B.df],x.O)
D.bdJ=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.aiu=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.cYf=w([B.du,D.bdJ,D.aiu],x.O)
D.cZc=w([B.b9,B.j8,B.oW],x.O)
D.bgu=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bo4=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bdp=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.cZh=w([D.bgu,D.bo4,D.bdp],x.O)
D.cZA=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.cZK=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hjr=new C.ada(78,424,48,44,56)
D.hjp=new C.ada(214,396,34,34,42)
D.hjq=new C.ada(442,452,56,50,64)
D.ay4=w([D.hjr,D.hjp,D.hjq],A.aw("O<ada>"))
D.d_i=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bcH=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bif=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.drL=w([D.ag2,D.bcH,D.bif],x.O)
D.bGb=new C.ux("leather","Leather",D.drL,"vintage")
D.d6e=w([B.d7,B.M3,Q.XL],x.O)
D.bGi=new C.ux("midnight","Midnight",D.d6e,"starry")
D.cZd=w([B.ed,B.e_,B.l4],x.O)
D.bGh=new C.ux("forest","Forest",D.cZd,"story")
D.dtM=w([B.e7,B.ek,B.jM],x.O)
D.bGe=new C.ux("burgundy","Burgundy",D.dtM,"royal")
D.cGH=w([B.aD,B.nb,B.nT],x.O)
D.bGf=new C.ux("royal","Royal",D.cGH,"royal")
D.d0J=w([B.br,B.cp,G.nf],x.O)
D.bGc=new C.ux("charcoal","Charcoal",D.d0J,"geo")
D.drU=w([B.ce,B.dG,B.xP],x.O)
D.bGg=new C.ux("sunset","Sunset",D.drU,"sunset")
D.dsA=w([B.j8,B.Fx,B.XO],x.O)
D.bGd=new C.ux("ocean","Ocean",D.dsA,"band")
D.zi=w([D.bGb,D.bGi,D.bGh,D.bGe,D.bGf,D.bGc,D.bGg,D.bGd],A.aw("O<ux>"))
D.d1d=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d1N=w([B.al,B.aJ,B.M],x.O)
D.d38=w([B.ek,B.e_,B.d7,B.fV,B.xS,B.cO,B.ke,B.e8,B.d1],x.O)
D.d39=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.f3N=new A.cX(B.dm,B.dB,8)
D.d3j=w([D.f3N],x.F)
D.d4n=w([B.c2,B.dG,B.ka],x.O)
D.beC=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bix=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bmx=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.d4C=w([D.beC,F.ahj,D.bix,D.bmx,D.aiu],x.O)
D.d4S=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d53=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bc6=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bhU=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.d5v=w([D.bc6,D.afw,D.bhU],x.O)
D.d69=w([B.c2,B.hp],x.O)
D.d6f=w([F.n7,B.hX,F.aeu,B.cJ],x.O)
D.d7O=w([B.cJ,F.n7,B.hX,D.lu,B.cJ],x.O)
D.d8n=w([B.aU,B.vH,B.xE],x.O)
D.az5=w(["True","False"],x.s)
D.eD6=new A.z(-0.65,0.6)
D.ePw=new A.z(-0.2,0.95)
D.eQB=new A.z(0.25,0.95)
D.eGy=new A.z(0.7,0.6)
D.eR9=new A.z(1,0.1)
D.d98=w([An.TA,D.eD6,D.ePw,D.eQB,D.eGy,D.eR9],x.G)
D.bkv=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bqy=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bfA=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.d9e=w([D.bkv,D.bqy,D.bfA],x.O)
D.d9i=w([B.bL,B.ct,B.dt,B.aU],x.O)
D.d9N=w([B.ih,B.ce,B.tD],x.O)
D.da9=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dak=w([B.f7,B.cO],x.O)
D.blV=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.daK=w([D.blV,D.aeh],x.O)
D.daV=w([B.cS,B.fs,B.hJ],x.O)
D.db5=w([B.aQ,B.bk,B.d7],x.O)
D.dbG=w([B.et,B.cV,B.e_],x.O)
D.dc0=w([B.dF,B.d7,B.M3],x.O)
D.dc4=w([B.bG,B.mv,B.d1],x.O)
D.dcl=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bla=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bju=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dcF=w([D.bla,D.aft,D.bju],x.O)
D.ddo=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.deq=w([1,0,7,6,3,2],x.t)
D.a4y=w(["leather","linen","plain","stars","rays"],x.s)
D.deC=w([0.5,2,3.6],x.n)
D.df7=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bOo=new A.a0(985219,"MaterialIcons",!1)
D.bNW=new A.a0(983781,"MaterialIcons",!1)
D.azy=w([B.a1f,B.i0,B.m8,B.il,D.bOo,B.H0,B.qj,D.bNW,F.aoK,B.Co,B.ql,B.mM],A.aw("O<a0>"))
D.a4D=w(["double","single","corners","none"],x.s)
D.bG0=new C.zh("Little Seed","\ud83c\udf31",0)
D.bG2=new C.zh("Young Listener","\ud83d\udc42",40)
D.bG1=new C.zh("Storyteller","\ud83e\ude98",120)
D.bG_=new C.zh("Village Pride","\ud83c\udfe1",300)
D.bFY=new C.zh("Keeper of Roots","\ud83c\udf33",700)
D.bFZ=new C.zh("Elder of the Fire","\ud83d\udd25",1500)
D.azA=w([D.bG0,D.bG2,D.bG1,D.bG_,D.bFY,D.bFZ],A.aw("O<zh>"))
D.dgd=w([B.dv,B.bn,B.e8],x.O)
D.dgr=w([],x.C)
D.D_=w([],x.u)
D.aJw=new A.t(225,528)
D.eEM=new A.z(D.aJw,1)
D.egJ=new A.t(350,548)
D.eKW=new A.z(D.egJ,0.95)
D.aJr=new A.t(158,656)
D.eKQ=new A.z(D.aJr,1.12)
D.ehv=new A.t(92,544)
D.eAl=new A.z(D.ehv,0.93)
D.egM=new A.t(398,614)
D.eGV=new A.z(D.egM,1.04)
D.egA=new A.t(318,662)
D.evP=new A.z(D.egA,1.1)
D.a4L=w([D.eEM,D.eKW,D.eKQ,D.eAl,D.eGV,D.evP],A.aw("O<+(t,K)>"))
D.dip=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.diQ=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.djT=w([B.cJ,F.n7,B.hX,D.lu,B.cJ,B.hX],x.O)
D.dlh=w([B.aC,B.fs,B.fV],x.O)
D.dlz=w([-12,12],x.n)
D.dlC=w([-17,17],x.n)
D.dlT=w([-70,58],x.n)
D.dlV=w([-70,-30,20],x.n)
D.dmV=w([B.bG,B.mv,B.YL],x.O)
D.dna=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dGE=new C.lL("construction","Construction","Jobsite & builds",B.yL)
D.dGL=new C.lL("house","Home Build","Houses & rooms",B.we)
D.dGB=new C.lL("grocery","Grocery","Store & pantry",B.a27)
D.dGA=new C.lL("calculator","Calculations","Math & estimates",B.GK)
D.dGJ=new C.lL("lumber","Materials","Lumber & supplies",B.OE)
D.dGx=new C.lL("kitchen","Kitchen","Remodel & meals",A2.anZ)
D.bNU=new A.a0(983756,"MaterialIcons",!1)
D.dGC=new C.lL("landscape","Landscaping","Yard & garden",D.bNU)
D.dGw=new C.lL("plumbing","Plumbing","Pipes & water",B.qt)
D.dGM=new C.lL("electrical","Electrical","Wiring & power",B.hv)
D.dGu=new C.lL("store","Retail Shop","Daily business",B.ld)
D.dGv=new C.lL("paint_remodel","Paint & Remodel","Colors & walls",Ae.a1D)
D.bNm=new A.a0(983311,"MaterialIcons",!1)
D.dGI=new C.lL("roofing","Roofing","Roofs & exteriors",D.bNm)
D.bO5=new A.a0(983986,"MaterialIcons",!1)
D.dGt=new C.lL("warehouse","Warehouse","Storage & stock",D.bO5)
D.dGG=new C.lL("vehicles","Vehicles","Fleet & transport",B.H1)
D.bL8=new A.a0(62785,"MaterialIcons",!1)
D.dGz=new C.lL("farm","Farm","Crops & livestock",D.bL8)
D.dGy=new C.lL("restaurant","Restaurant","Food & catering",B.wm)
D.dGF=new C.lL("tools","Tools","Workshop gear",B.GX)
D.dGK=new C.lL("wallet","Cash & Wallet","Quick spending",B.jS)
D.bMk=new A.a0(63395,"MaterialIcons",!1)
D.dGH=new C.lL("concrete","Concrete","Foundation work",D.bMk)
D.dGD=new C.lL("blueprint","Blueprint","Plans & design",Ak.ani)
D.a57=w([D.dGE,D.dGL,D.dGB,D.dGA,D.dGJ,D.dGx,D.dGC,D.dGw,D.dGM,D.dGu,D.dGv,D.dGI,D.dGt,D.dGG,D.dGz,D.dGy,D.dGF,D.dGK,D.dGH,D.dGD],A.aw("O<lL>"))
D.dnF=w([B.bs,B.bn],x.O)
D.doq=w([B.is,B.o_,B.dO],x.O)
D.age=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.ah7=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bjP=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bbE=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aAH=w([D.age,D.ah7,D.bjP,D.bbE],x.O)
D.dpB=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a5h=w(["top","middle","bottom"],x.s)
D.dr0=w([B.co,B.bk,B.d7],x.O)
D.aAW=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b5l=new A.ac(0,B.G,B.aS,B.I,14)
D.aAZ=w([D.b5l],x.V)
D.biL=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.drE=w([D.aeS,D.YK,D.biL],x.O)
D.drF=w([B.bj,B.cV,B.e_],x.O)
D.egi=new A.t(24,-8)
D.eh1=new A.t(48,0)
D.ege=new A.t(24,6)
D.dtj=w([B.I,D.egi,D.eh1,D.ege],x.g)
D.dtI=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.ed5={top:0,middle:1,bottom:2}
D.dwW=new A.bw(D.ed5,["Top","Middle","Bottom"],x.r)
D.ecK={double:0,single:1,corners:2,none:3}
D.dx1=new A.bw(D.ecK,["Double line","One line","Corners","None"],x.r)
D.edO={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dyu=new A.bw(D.edO,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dyH=new A.bw(B.hP,[],A.aw("bw<H,+(n,n)>"))
D.ecZ={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Db=new A.bw(D.ecZ,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.aw("bw<n,H>"))
D.dBd=new H.Nn(32,null)
D.dBe=new H.Nn(40,null)
D.dBf=new H.Nn(46,null)
D.aJ_=new C.at0(null)
D.efe=new A.t(0,40)
D.eff=new A.t(0,412)
D.efh=new A.t(0,900)
D.efs=new A.t(0,-74)
D.efv=new A.t(100,300)
D.efw=new A.t(10,14)
D.efz=new A.t(10,-10)
D.efD=new A.t(10,-46)
D.efE=new A.t(10,-58)
D.efF=new A.t(116,442)
D.efG=new A.t(11,-1)
D.efH=new A.t(11,-10)
D.efI=new A.t(11,-21)
D.aJm=new A.t(11,-60)
D.efO=new A.t(14,-2)
D.efP=new A.t(150,520)
D.a7d=new A.t(150,592)
D.efS=new A.t(15,-15)
D.efT=new A.t(16,-1)
D.efX=new A.t(190,444)
D.eg_=new A.t(1,5)
D.eg7=new A.t(21,-78)
D.eg8=new A.t(222,615)
D.J_=new A.t(225,300)
D.a7f=new A.t(225,574)
D.egh=new A.t(24,-52)
D.egj=new A.t(250,210)
D.aJA=new A.t(300,0)
D.egw=new A.t(300,440)
D.egz=new A.t(318,476)
D.egC=new A.t(324,144)
D.a7i=new A.t(332,150)
D.egE=new A.t(335,585)
D.egF=new A.t(338,140)
D.egG=new A.t(340,158)
D.egI=new A.t(34,-60)
D.DE=new A.t(36,-24)
D.egK=new A.t(372,470)
D.egL=new A.t(390,455)
D.egU=new A.t(42,468)
D.egV=new A.t(431,510)
D.egW=new A.t(431,520)
D.egX=new A.t(45,-92)
D.egY=new A.t(46,20)
D.egZ=new A.t(46,-92)
D.eh_=new A.t(46,-94)
D.eh0=new A.t(47,-4)
D.eh2=new A.t(48,-4)
D.eha=new A.t(4,-26)
D.ehj=new A.t(60,455)
D.ehq=new A.t(8,14)
D.ehu=new A.t(8,-76)
D.ehw=new A.t(95,575)
D.ehx=new A.t(98,-24)
D.ehz=new A.t(9,-2)
D.ehA=new A.t(9,-58)
D.aJJ=new A.t(9,-79)
D.ehB=new A.t(9,-9)
D.eid=new A.t(16.5,8)
D.eif=new A.t(3.2,0)
D.eih=new A.t(-16.5,8)
D.eio=new A.t(16.5,2)
D.eir=new A.t(-3.2,0)
D.eiA=new A.t(9.5,6)
D.eiE=new A.t(-10,14)
D.eiF=new A.t(-10,-12)
D.eiG=new A.t(-10,-58)
D.eiH=new A.t(-11,-1)
D.eiI=new A.t(-11,-10)
D.eiK=new A.t(-11,-60)
D.eiL=new A.t(-12,-14)
D.eiM=new A.t(-12,-16)
D.eiT=new A.t(-14,-2)
D.eiW=new A.t(-15,-15)
D.eiX=new A.t(-15,-3)
D.eiZ=new A.t(-16,-1)
D.ejf=new A.t(-24,-52)
D.ejm=new A.t(-2,-34)
D.ejn=new A.t(-2,-38)
D.ejp=new A.t(-30,-100)
D.a7j=new A.t(-36,-24)
D.ejA=new A.t(-4,-26)
D.ejC=new A.t(-4,-6)
D.ejL=new A.t(-8,-3)
D.ejM=new A.t(-8,-48)
D.ejP=new A.t(-9,-2)
D.ejR=new A.t(-9,-58)
D.ejS=new A.t(-9,-79)
D.ejT=new A.t(-9,-9)
D.ejV=new A.t(-9.5,6)
D.ek8=new A.t(-16.5,2)
D.fDW=new A.y("Write a new book",null,B.hE,null,B.K,null,null,null,null,null,null,null)
D.ekJ=new A.D(B.kG,D.fDW,null)
D.fSB=new A.y("Tap to go on",null,B.vd,null,null,null,null,null,null,null,null,null)
D.el3=new A.D(B.l5,D.fSB,null)
D.ap9=new A.ae(B.hM,18,B.c,null,null,null)
D.fwZ=new A.y("Add",null,B.lP,null,null,null,null,null,null,null,null,null)
D.d9w=w([D.ap9,B.qJ,D.fwZ],x.p)
D.f1q=new A.ce(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.d9w,null)
D.el6=new A.D(B.nq,D.f1q,null)
D.el7=new A.D(E.ajA,A8.Xa,null)
D.fqD=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAb=new A.y("New Project",null,D.fqD,null,null,null,null,null,null,null,null,null)
D.ddL=w([D.ap9,B.ac,D.fAb],x.p)
D.f1t=new A.ce(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.ddL,null)
D.elk=new A.D(B.iB,D.f1t,null)
D.fCJ=new A.y("Choose your header",null,A0.t6,null,null,null,null,null,null,null,null,null)
D.elI=new A.D(B.hL,D.fCJ,null)
D.baT=new A.fj(2.2,null,null,null,null,B.cO,null,null,null,null)
D.f6D=new A.a6(22,22,D.baT,null)
D.b8U=new A.ca(B.A,null,null,D.f6D,null)
D.elN=new A.D(B.ZY,D.b8U,null)
D.bz8=new A.Q(14,2,14,6)
D.fQI=new A.y("The top of your book. Tap a design to see it.",null,O.ve,null,null,null,null,null,null,null,null,null)
D.elO=new A.D(D.bz8,D.fQI,null)
D.fBS=new A.y("\ud83c\udfc6 A new record!",null,B.fT,null,null,null,null,null,null,null,null,null)
D.elP=new A.D(B.l5,D.fBS,null)
D.enp=new A.iT(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.ens=new A.iT(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aKj=new A.iT(1,0.9607843137254902,0.48627450980392156,0)
D.J8=new A.iT(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.zT=new A.iT(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eny=new A.iT(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hlg=new C.biu(null)
D.bu5=new A.mu(D.hlg,null,B.ax,null,null)
D.aNX=new A.cN(0,0,0,0,null,null,D.bu5,null)
D.fx0=new A.y("\ud83c\udfc5",null,B.a9u,null,null,null,null,null,null,null,null,null)
D.es0=new A.cN(null,0,-34,null,null,null,D.fx0,null)
D.eA0=new A.z("E","Sit by the fire again")
D.eFz=new A.z("C","Good Learner")
D.eIW=new A.z("D","Still Growing")
D.eNo=new A.z(-42,42)
D.eOJ=new A.z("B","Faithful Listener")
D.eQD=new A.z("A","Keeper of the Family")
D.eTz=new A.bk(-17,0.7,0)
D.eU0=new A.bk(-8,0.95,1.3)
D.eUR=new A.bk(18,0.65,5.2)
D.eUT=new A.bk(0,1.15,2.6)
D.eV9=new A.bk(9,0.9,3.9)
D.eWF=new A.cw([0,0,1,1])
D.aPn=new A.a3(0,0,520,160)
D.eZv=new A.a3(10,612,440,618)
D.eZw=new A.a3(10,612,440,628)
D.eZz=new A.a3(14,-64,34,-12)
D.eZC=new A.a3(300,336,350,348)
D.a8c=new A.a3(30,96,420,346)
D.eZD=new A.a3(30,-9,46,1)
D.eZE=new A.a3(4,2,11,14)
D.eZG=new A.a3(-8,-12.5,8,-7)
D.eZH=new A.a3(-16.5,-21,16.5,1)
D.eZI=new A.a3(60,342,88,348)
D.TB=new A.a3(66,-66,94,-36)
D.eZJ=new A.a3(6,8,10,14)
D.eZM=new A.a3(95,343,115,348)
D.eZN=new A.a3(-6.5,-74,6.5,-58)
D.eZT=new A.a3(-100,-74,100,-12)
D.eZU=new A.a3(-10,8,-6,14)
D.eZV=new A.a3(-11,2,-4,14)
D.eZW=new A.a3(-11,-70,11,-56)
D.f_2=new A.a3(-13,-24,13,-4)
D.f_8=new A.a3(-15,-21,15,0)
D.f_b=new A.a3(-16,-21,16,1)
D.f_c=new A.a3(-16,-21,16,2)
D.f_f=new A.a3(-16,-26,16,-6)
D.f_p=new A.a3(-230,-26,230,26)
D.f_N=new A.a3(-38,-26,12,-6)
D.f_R=new A.a3(-3,-70,3,-63)
D.f_S=new A.a3(-44,-22,44,0)
D.f_U=new A.a3(-46,-9,-30,1)
D.aPr=new A.a3(-80,-190,80,20)
D.f00=new A.a3(-8,-26,40,-6)
D.f01=new A.a3(-98,-80,92,-75)
D.f02=new A.a3(-9,-15,9,-9)
D.fQg=new A.y("Let the AI write it from your tree",null,B.iK,null,B.K,null,null,null,null,null,null,null)
D.bH2=new A.ds(1,B.cn,D.fQg,null)
D.d68=w([E.a2B,B.ac,D.bH2],x.p)
D.f15=new A.ce(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.d68,null)
D.fwD=new A.y("Save member",null,B.cf,null,null,null,null,null,null,null,null,null)
D.dlE=w([D.aq0,B.ac,D.fwD],x.p)
D.f1f=new A.ce(B.aM,B.b8,B.i,B.m,null,B.p,null,0,D.dlE,null)
D.bSA=new A.ae(B.i1,14,B.b_,null,null,null)
D.fki=new A.F(!0,B.b_,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAB=new A.y("Cashier",null,D.fki,null,null,null,null,null,null,null,null,null)
D.deh=w([D.bSA,B.bm,D.fAB],x.p)
D.f1i=new A.ce(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.deh,null)
D.fwE=new A.y("Transfer & settings",null,B.de,null,null,null,null,null,null,null,null,null)
D.bF4=new A.bz(1,B.bb,D.fwE,null)
D.cYH=w([D.apB,B.at,D.bF4],x.p)
D.f1j=new A.ce(B.aM,B.e,B.i,B.m,null,B.p,null,0,D.cYH,null)
D.f5k=new A.av(16,40)
D.f5p=new A.av(22,64)
D.f5w=new A.av(280,88)
D.f6j=new A.a6(30,null,null,null)
D.fvK=new A.y("The teacher is writing\u2026",null,B.Ab,null,null,null,null,null,null,null,null,null)
D.ba5=new A.ca(B.A,null,null,D.fvK,null)
D.hfy=new A.bN("w",x.W)
D.f6J=new A.a6(null,56,D.ba5,D.hfy)
D.f7v=new A.hR(5,8,8,1,null)
D.f7D=new A.hR(2,12,12,1.05,null)
D.fAh=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.f8l=new A.b2(D.fAh,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fAw=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aRt=new A.b2(D.fAw,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fIX=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f8P=new A.b2(D.fIX,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fTG=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.f8U=new A.b2(D.fTG,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fCH=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.f90=new A.b2(D.fCH,null,null,null,null,null,null,null,null,null,null,null,null,B.fY,!1,null,null,null,B.t,null)
D.fQV=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aRx=new A.b2(D.fQV,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fCF=new A.y("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.f9q=new A.b2(D.fCF,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fxh=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.f9s=new A.b2(D.fxh,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fGq=new A.y("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.f9y=new A.b2(D.fGq,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fUr=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fad=new A.b2(D.fUr,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fP9=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.faC=new A.b2(D.fP9,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fTK=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.faF=new A.b2(D.fTK,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fKz=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.faH=new A.b2(D.fKz,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fEz=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.faI=new A.b2(D.fEz,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fEA=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fbI=new A.b2(D.fEA,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fAj=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fc_=new A.b2(D.fAj,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fCj=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fcj=new A.b2(D.fCj,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fK1=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fcz=new A.b2(D.fK1,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fFo=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fcA=new A.b2(D.fFo,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fpi=new A.F(!0,B.bB,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fek=new A.eu("\u2665",null,null,B.cQ,null,null,null,null,null,null,D.fpi)
D.fmx=new A.F(!0,B.aP,null,null,null,null,28,B.Q,B.cE,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feA=new A.eu("Today: how well do you know the family?",null,null,B.cQ,null,null,null,null,null,null,D.fmx)
D.feQ=new A.F(!0,B.pM,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffV=new A.F(!0,D.kz,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgk=new A.F(!0,D.kz,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgo=new A.F(!0,B.cJ,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgx=new A.F(!0,D.fr,null,null,null,null,15,B.Q,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgI=new A.F(!0,D.fr,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh1=new A.rQ(!0,B.rV,null,null,null,null,B.dy,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhh=new A.F(!0,B.cJ,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhk=new A.F(!0,D.kz,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhl=new A.F(!0,B.cJ,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhq=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhu=new A.F(!0,B.cJ,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhZ=new A.F(!0,B.b_,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi_=new A.F(!0,B.ae,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi1=new A.F(!0,B.aP,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiu=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSF=new A.F(!0,B.aR,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSH=new A.F(!0,D.lt,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiS=new A.F(!0,B.cJ,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a9A=new A.rQ(!0,B.T6,null,null,null,null,B.dy,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.UG=new A.F(!0,B.cJ,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj2=new A.F(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj6=new A.F(!0,D.fr,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjv=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkD=new A.F(!0,D.fr,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSU=new A.F(!0,D.fr,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkW=new A.F(!0,B.ae,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl6=new A.F(!0,D.fr,null,null,null,null,null,B.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl8=new A.F(!0,null,null,null,null,null,8,B.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fld=new A.F(!0,I.iP,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSY=new A.F(!0,D.fr,null,null,null,null,14.5,B.Q,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm8=new A.F(!0,D.fr,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmr=new A.F(!0,D.fr,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmt=new A.F(!0,B.M,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmu=new A.F(!0,B.cJ,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmS=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A7.HW,null,null,null)
D.aTc=new A.F(!0,D.fr,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnf=new A.F(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnB=new A.F(!0,B.f9,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnY=new A.F(!0,B.bP,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo1=new A.F(!0,B.bx,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fod=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fog=new A.F(!0,D.fr,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foo=new A.F(!0,D.Fw,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foy=new A.F(!0,B.b_,null,null,null,null,13,B.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foY=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp3=new A.F(!0,B.ae,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.CS,null,null,null)
D.fpt=new A.F(!0,B.cJ,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpC=new A.F(!0,B.cO,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpP=new A.F(!0,D.lu,null,null,null,null,13,B.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTw=new A.F(!0,D.fr,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.K8=new A.F(!0,B.cJ,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTy=new A.F(!0,B.cJ,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.CS,null,null,null)
D.fq8=new A.F(!0,B.bP,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqc=new A.F(!0,F.n7,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqB=new A.F(!0,B.b_,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqS=new A.F(!0,D.fr,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frd=new A.F(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frA=new A.F(!0,D.fr,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs2=new A.F(!0,D.fr,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs8=new A.F(!0,B.al,null,null,null,null,11.5,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsh=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTP=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aa2=new A.F(!0,B.al,null,null,null,null,12,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aa4=new A.F(!0,D.lt,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu_=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuh=new A.F(!0,B.aP,null,null,null,null,27,B.Q,B.cE,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fup=new A.F(!0,I.iP,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fux=new A.F(!0,I.iP,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv0=new A.y("Time:",null,B.hm,null,null,null,null,null,null,null,null,null)
D.fvm=new A.y("\ud83c\udfae",null,F.a9V,null,null,null,null,null,null,null,null,null)
D.fvn=new A.y("Themes",null,B.pw,null,null,null,null,null,null,null,null,null)
D.fvS=new A.y("\ud83c\udfb2",null,B.wX,null,null,null,null,null,null,null,null,null)
D.fvW=new A.y("Delete this game?",null,B.iK,null,null,null,null,null,null,null,null,null)
D.fw2=new A.y("Add Item",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fkR=new A.F(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwt=new A.y("Debt receipt",null,D.fkR,null,B.K,null,null,null,null,null,null,null)
D.aTL=new A.F(!0,B.al,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwL=new A.y("Person who owes",null,D.aTL,null,null,null,null,null,null,null,null,null)
D.fxL=new A.y("Notes",null,B.a9J,null,null,null,null,null,null,null,null,null)
D.fyb=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fjM=new A.F(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fye=new A.y("Share",null,D.fjM,null,null,null,null,null,null,null,null,null)
D.fze=new A.y("Move your family trees",null,D.aTP,null,null,null,null,null,null,null,null,null)
D.fzT=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fAv=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fAT=new A.y("SAVE",null,D.K8,null,null,null,null,null,null,null,null,null)
D.fBv=new A.y("The round button is the right answer.",null,O.E8,null,null,null,null,null,null,null,null,null)
D.fBQ=new A.y("Remove this book?",null,B.fT,null,null,null,null,null,null,null,null,null)
D.fqy=new A.F(!0,B.cJ,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.CS,null,null,null)
D.fCo=new A.y("Fireside Stories",null,D.fqy,null,null,null,null,null,null,null,null,null)
D.aUh=new A.y("Download",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fD4=new A.y("What should the AI do?",null,B.de,null,null,null,null,null,null,null,null,null)
D.fjq=new A.F(!0,D.lt,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDk=new A.y("REPORT CARD",null,D.fjq,null,null,null,null,null,null,null,null,null)
D.fE1=new A.y("Calabash Catch",null,B.Kc,null,null,null,null,null,null,null,null,null)
D.fEv=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fEW=new A.y("\ud83c\udfe1",null,B.E7,null,null,null,null,null,null,null,null,null)
D.fFD=new A.y("Ribbon bookmark",null,B.j2,null,null,null,null,null,null,null,null,null)
D.fs1=new A.F(!0,B.b_,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fG7=new A.y("NGMY.ORG",null,D.fs1,null,B.K,null,null,null,null,null,null,null)
D.fHs=new A.y("Scan family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.foh=new A.F(!0,B.c,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIc=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.foh,null,B.K,null,null,null,null,null,null,null)
D.fJp=new A.y("Delete",null,B.Uy,null,null,null,null,null,null,null,null,null)
D.fJq=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fJw=new A.y("Thumbnail",null,B.pw,null,null,null,null,null,null,null,null,null)
D.fK7=new A.y("Save the cover",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fKc=new A.y("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.wZ,null,B.K,null,null,null,null,null,null,null)
D.fKA=new A.y("Your photos",null,B.pw,null,null,null,null,null,null,null,null,null)
D.fKP=new A.y("Create Project",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fLb=new A.y("\u2b50 stars",null,B.UN,null,null,null,null,null,null,null,null,null)
D.fLp=new A.y("Design your cover",null,A0.t6,null,null,null,null,null,null,null,null,null)
D.fLv=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fLy=new A.y("PICTURE",null,L.vi,null,null,null,null,null,null,null,null,null)
D.fLA=new A.y("\ud83c\udfaf",null,D.V2,null,null,null,null,null,null,null,null,null)
D.fLV=new A.y("Paid",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fLX=new A.y("You can undo it right after.",null,O.E8,null,null,null,null,null,null,null,null,null)
D.fMu=new A.y("Print",null,B.vf,null,null,null,null,null,null,null,null,null)
D.fMT=new A.y("Amount owed",null,D.aTL,null,null,null,null,null,null,null,null,null)
D.fN8=new A.y("Got it",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fNK=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fNN=new A.y("Add to budget",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fOe=new A.y("Debtor signature",null,B.a9J,null,null,null,null,null,null,null,null,null)
D.fOn=new A.y("Change icon",null,B.a9I,null,null,null,null,null,null,null,null,null)
D.fPb=new A.y("MADE BY THE SYSTEM, FROM YOUR TREE",null,T.t8,null,null,null,null,null,null,null,null,null)
D.fPD=new A.y("Family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fPJ=new A.y("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.V1,null,null,null,null,null,null,null,null,null)
D.fQ6=new A.y("Download",null,B.vf,null,null,null,null,null,null,null,null,null)
D.fQ7=new A.y("The person who planted this tree has not made a game yet.",null,B.vj,null,null,null,null,null,null,null,null,null)
D.fQb=new A.y("Change",null,B.pw,null,null,null,null,null,null,null,null,null)
D.fR0=new A.y("Clear all",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fR3=new A.y("WHAT SHOULD IT CHANGE?",null,L.vi,null,null,null,null,null,null,null,null,null)
D.fRD=new A.y("COLOUR",null,L.vi,null,null,null,null,null,null,null,null,null)
D.fRR=new A.y("Do it",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fRU=new A.y("Create Tree",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fS2=new A.y("Give me another clue",null,D.K8,null,null,null,null,null,null,null,null,null)
D.fSY=new A.y("Create Family Tree",null,B.eF,null,null,null,null,null,null,null,null,null)
D.fT7=new A.y("THE TEACHER EXPLAINS THESE",null,T.t8,null,null,null,null,null,null,null,null,null)
D.feP=new A.F(!0,E.kb,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTd=new A.y("Write the first page myself",null,D.feP,null,null,null,null,null,null,null,null,null)
D.fTN=new A.y("Use this header",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fTU=new A.y("Create Project",null,E.aTt,null,null,null,null,null,null,null,null,null)
D.hgL=new C.abS(1,"header")
D.ab2=new C.abS(2,"projects")
D.hgM=new C.abS(3,"cashier")
D.ab3=new C.abS(4,"familyTree")
D.htF=new C.cCI(0,"start")
D.htG=new C.cCJ(0,"start")
D.hh9=new C.YX(null)
D.hi9=new C.Zp(null)
D.dyE=new A.bw(B.hP,[],A.aw("bw<n,Gb>"))
D.dgP=w([],x.dE)
D.dgQ=w([],x.M)
D.hiG=new C.bfJ(D.dyE,D.dgP,D.dgQ,0,0,null,null)
D.aYe=new C.a_f(0,"intro")
D.aYf=new C.a_f(1,"countdown")
D.abh=new C.a_f(2,"ask")
D.VU=new C.a_f(3,"reveal")
D.aYg=new C.a_f(4,"end")
D.hli=new C.rZ(G.FE,D.lu,B.cJ,G.lv,5,!1,!1,!1,0,null)
D.hlj=new C.rZ(G.FE,B.e7,B.cJ,B.bO,2,!0,!0,!1,2,B.cJ)
D.hlk=new C.rZ(B.o9,B.cO,B.cJ,G.lv,2,!0,!1,!1,2,B.aC)
D.hll=new C.rZ(G.FE,B.dF,B.cJ,G.lv,5,!1,!1,!1,1,null)
D.hlm=new C.rZ(G.YX,D.ah7,B.cJ,G.lv,4,!0,!1,!0,0,null)
D.aYj=new C.rZ(G.YX,B.dG,B.cJ,G.lv,3,!0,!1,!0,2,null)
D.aYk=new C.rZ(G.mC,D.lu,B.c,G.lv,0,!1,!1,!0,0,null)
D.aYl=new C.rZ(B.o9,B.aD,B.cJ,B.bO,2,!0,!0,!1,2,B.dG)
D.aYm=new C.rZ(B.o9,F.n7,B.hX,G.lv,5,!1,!1,!0,3,null)
D.hln=new C.rZ(B.o9,B.dG,B.cJ,G.lv,0,!0,!1,!1,0,B.aD)
D.aYn=new C.rZ(G.FE,B.e7,B.cJ,B.bO,1,!1,!0,!1,1,null)
D.aYo=new C.rZ(G.Fc,B.aC,B.aD,G.lv,4,!0,!1,!0,2,null)
D.hlo=new C.rZ(G.mC,B.aC,B.e7,G.lv,3,!0,!1,!1,0,null)
D.hlp=new C.rZ(B.o9,B.dF,B.cJ,B.bO,1,!1,!0,!1,1,null)
D.hlq=new C.rZ(G.Fc,D.age,B.c,G.lv,5,!1,!1,!0,0,null)
D.hm3=new C.a_O(null)
D.htO=new C.afb(0,"still")
D.Wg=new C.afb(1,"walk")
D.abB=new C.afb(2,"pound")
D.abC=new C.afb(3,"drum")
D.hpg=new C.a15(0,"greet")
D.aYO=new C.a15(1,"teach")
D.abD=new C.a15(2,"ask")
D.hph=new C.a15(3,"feedback")
D.aYP=new C.a15(4,"end")
D.Wl=new C.a1o(0,"intro")
D.Wm=new C.a1o(1,"asking")
D.AB=new C.a1o(2,"reacting")
D.abN=new C.a1o(3,"driving")
D.abO=new C.a1o(4,"arrived")
D.abR=new C.aKI(0,"projects")
D.aZc=new C.aKI(1,"cashier")
D.hrj=new C.aKI(2,"familyTree")})()};
(a=>{a["HmDQqCU5KAG7THw2/sGyKHxM9+w="]=a.current})($__dart_deferred_initializers__);