((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,N,R,A2,G,F,E,A3,A4,A5,A6,S,T,A7,A8,M,A9,H,Aa,Ab,U,V,W,Ac,Ad,X,Ae,Af,Ag,Y,Ah,Ai,K,Aj,Z,A_,O,P,L,Q,C={
bCg(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bCg=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vd(null,""),$async$bCg)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.V(y.j)
t=A.n2(b1)
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
return A.b(A.qM(t,a1,B.hp,E.EY),$async$bCg)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Q5(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.V(l!=null&&A.KJ(l)?y.l:y.i)
for(j=J.a6(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cz
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a1U(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCg,v)},
agu(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$agu=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vd(null,""),$async$agu)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.V(y.j)
t=A.n2(b6)
s=x.S
r=A.dd(c1,0,A.dJ(4,"count",s),A.U(c1).c)
q=F.a1H(new A.K(r,new C.fxP(),r.$ti.k("K<ak.E,n>")).aI(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fxO(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.R.ao(b7,null)+"\nAllowed values: style one of "+B.d.aI(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$agu)
case 6:l=c5
k=F.Q5(l==null?"":l)
if(k==null)throw A.V("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.anF(s,D.dla,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
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
k=l==null?null:F.Q5(l)
if(k==null)throw A.V(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d9(a8,d),a5=J.aV(a2.a),a2=a2.$ti,a7=new A.kY(a5,a2.k("kY<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gT(a5))
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
p=A.cF(new A.bc(h,s),new C.fxQ(),s.k("J.E"),p)
p=F.a1H(A.pa(p,3,A.a3(p).k("J.E")).aI(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.C(new A.cu(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a1U(s,b9),$async$agu)
case 13:b5=c5
for(s=J.a6(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.anF(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agu,v)},
hmk(d,e,f){return A.ca(null,B.w.j(0.65),!1,null,new C.fH_(e,f),d,null,!0,!0,x.g2)},
anF:function anF(d,e,f){this.a=d
this.b=e
this.c=f},
fxP:function fxP(){},
fxO:function fxO(d){this.a=d},
fxQ:function fxQ(){},
fH_:function fH_(d,e){this.a=d
this.b=e},
bA5(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bA5=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b4(b1,new C.fmR())){u=null
w=1
break}t=B.d.d7(b1,new C.fmS())
s=$.W()
r=new A.qV()
q=A.D6(r,D.aLR)
p=A.N()
p.r=B.c.gp(0)
q.aY(D.aLR,p)
o=A.N()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bO
o.e=B.fB
n=new C.fmX(t)
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
if(a8!=null)a7.bz(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bz(a8)
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
if(a8!=null)a7.bz(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bz(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aO(a3,o)}w=4
return A.b(r.pB().zd(520,160),$async$bA5)
case 4:w=3
return A.b(b3.hr(B.fY),$async$bA5)
case 3:b0=b3
u=b0==null?null:J.eT(B.dD.gaM(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bA5,v)},
fvv(d){return C.i_L(d)},
i_L(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fvv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bf1()
n=d.x!=null&&d.yU(null).length===0
if(d.x!=null)t=n?D.zc:D.HZ
else t=d.gTg()?D.HZ:D.aGV
w=3
return A.b(C.bA5(d.ax),$async$fvv)
case 3:s=f
p.a=null
if(s!=null)p.a=A.amo(s)
r=A.a3T(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aGV}else{p.c=C.wE(q,!0)
p.b=n?D.zc:D.HZ}r.a2u(A.fR8(new C.fvx(p,d,new C.fvy(),t,n,o),null,D.bur,B.w6))
u=r.k5(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fvv,v)},
fC8(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fC8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fvv(d),$async$fC8)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aK(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A8.Gk(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fC8,v)},
fmR:function fmR(){},
fmS:function fmS(){},
fmX:function fmX(d){this.a=d},
fvy:function fvy(){},
fvx:function fvx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fvw:function fvw(){},
fHr(d,e){var w=0,v=A.j(x.H)
var $async$fHr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,B.w.j(0.55),!0,null,new C.fHv(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fHr)
case 2:return A.h(null,v)}})
return A.i($async$fHr,v)},
bCJ(d,e,f,g){return C.i7d(d,e,f,g)},
i7d(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bCJ=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gal(e.split(",")):e
r=B.cG.aJ(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.S(D.eU5)
w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.fHn(g,r,f),d,null,!0,!0,x.H),$async$bCJ)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bCJ,v)},
fHw(d,e){var w=0,v=A.j(x.H)
var $async$fHw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,null,!0,null,new C.fHz(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fHw)
case 2:return A.h(null,v)}})
return A.i($async$fHw,v)},
aXQ:function aXQ(d,e){this.c=d
this.a=e},
c15:function c15(){},
b9X:function b9X(d,e){this.b=d
this.a=e},
fHv:function fHv(d,e){this.a=d
this.b=e},
fHs:function fHs(d){this.a=d},
fHt:function fHt(d,e,f){this.a=d
this.b=e
this.c=f},
fHu:function fHu(d,e){this.a=d
this.b=e},
fHn:function fHn(d,e,f){this.a=d
this.b=e
this.c=f},
fHl:function fHl(d){this.a=d},
fHm:function fHm(d,e,f){this.a=d
this.b=e
this.c=f},
fHz:function fHz(d,e){this.a=d
this.b=e},
fHx:function fHx(d){this.a=d},
fHy:function fHy(d,e,f){this.a=d
this.b=e
this.c=f},
fqs(d,e){var w=0,v=A.j(x.y),u,t
var $async$fqs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1s(d),$async$fqs)
case 3:t=g
J.no(t,new C.fqt(e))
u=A.ah8(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fqs,v)},
fqt:function fqt(d){this.a=d},
anM:function anM(d,e,f){this.c=d
this.d=e
this.a=f},
aC2:function aC2(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dFh:function dFh(d,e){this.a=d
this.b=e},
dF2:function dF2(d,e){this.a=d
this.b=e},
dF5:function dF5(d,e,f){this.a=d
this.b=e
this.c=f},
dF4:function dF4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dF3:function dF3(d,e){this.a=d
this.b=e},
dF6:function dF6(d,e){this.a=d
this.b=e},
dF0:function dF0(){},
dF1:function dF1(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dF_:function dF_(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dEL:function dEL(d){this.a=d},
dEM:function dEM(d,e,f){this.a=d
this.b=e
this.c=f},
dEN:function dEN(d,e){this.a=d
this.b=e},
dEK:function dEK(d){this.a=d},
dES:function dES(d,e){this.a=d
this.b=e},
dEJ:function dEJ(d){this.a=d},
dET:function dET(d,e,f){this.a=d
this.b=e
this.c=f},
dEU:function dEU(d,e,f){this.a=d
this.b=e
this.c=f},
dEI:function dEI(d,e){this.a=d
this.b=e},
dEV:function dEV(d,e,f){this.a=d
this.b=e
this.c=f},
dEH:function dEH(d,e){this.a=d
this.b=e},
dEW:function dEW(d,e){this.a=d
this.b=e},
dEG:function dEG(d){this.a=d},
dEX:function dEX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dEE:function dEE(){},
dEy:function dEy(d){this.a=d},
dEz:function dEz(d){this.a=d},
dEF:function dEF(d,e){this.a=d
this.b=e},
dEY:function dEY(d,e){this.a=d
this.b=e},
dED:function dED(d){this.a=d},
dEZ:function dEZ(d){this.a=d},
dEC:function dEC(){},
dEO:function dEO(d,e){this.a=d
this.b=e},
dEB:function dEB(d){this.a=d},
dEP:function dEP(d,e,f){this.a=d
this.b=e
this.c=f},
dEA:function dEA(d,e){this.a=d
this.b=e},
dEx:function dEx(d,e){this.a=d
this.b=e},
dEQ:function dEQ(d){this.a=d},
dER:function dER(d,e,f){this.a=d
this.b=e
this.c=f},
dFk:function dFk(){},
dFl:function dFl(d,e){this.a=d
this.b=e},
dFi:function dFi(d){this.a=d},
dFj:function dFj(d){this.a=d},
dFe:function dFe(d,e){this.a=d
this.b=e},
dFf:function dFf(d){this.a=d},
dF7:function dF7(d,e,f){this.a=d
this.b=e
this.c=f},
dF8:function dF8(d,e,f){this.a=d
this.b=e
this.c=f},
dF9:function dF9(d,e,f){this.a=d
this.b=e
this.c=f},
dFa:function dFa(d,e,f){this.a=d
this.b=e
this.c=f},
dFb:function dFb(d,e,f){this.a=d
this.b=e
this.c=f},
dFc:function dFc(d,e,f){this.a=d
this.b=e
this.c=f},
dFd:function dFd(d,e,f){this.a=d
this.b=e
this.c=f},
dFm:function dFm(){},
dFn:function dFn(){},
dFo:function dFo(){},
dFp:function dFp(d){this.a=d},
dFg:function dFg(d,e){this.a=d
this.b=e},
hix(d){return B.d.dL(D.a1o,new C.fr2(d),new C.fr3())},
u7:function u7(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fr2:function fr2(d){this.a=d},
fr3:function fr3(){},
ak7:function ak7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aTD:function aTD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Sj:function Sj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdz:function bdz(){this.d=$
this.c=this.a=null},
d56:function d56(d,e){this.a=d
this.b=e},
d54:function d54(d,e){this.a=d
this.b=e},
d55:function d55(){},
d57:function d57(d,e){this.a=d
this.b=e},
h3k(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.n9(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
Ku(d,e){return C.hZo(d,e)},
hZo(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Ku=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$Ku)
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
o=A.cF(o,new C.ft6(),o.$ti.k("J.E"),x.B)
n=A.a3(o).k("a1<J.E>")
o=A.C(new A.a1(o,new C.ft7(),n),n.k("J.E"))
B.d.b0(o,new C.ft8())
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
return A.i($async$Ku,v)},
AH(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$AH=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aA(),$async$AH)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fG5(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.au("String","ngmy_family_book_v1_"+s+"_"+e,B.R.ao(r,null)),$async$AH)
case 4:case 1:return A.h(u,v)}})
return A.i($async$AH,v)},
aPN(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aPN=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Ku(d,e),$async$aPN)
case 2:u=h
t=J.cG(u)
s=t.bd(u,new C.fOf(f))
if(s===-1)t.ck(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.AH(d,e,u),$async$aPN)
case 3:return A.h(null,v)}})
return A.i($async$aPN,v)},
bAy(d,e,f){var w=0,v=A.j(x.H),u
var $async$bAy=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Ku(d,e),$async$bAy)
case 2:u=h
J.no(u,new C.fqk(f))
w=3
return A.b(C.AH(d,e,u),$async$bAy)
case 3:return A.h(null,v)}})
return A.i($async$bAy,v)},
bAN(d,e){return C.hZn(d,e)},
hZn(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bAN=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bAN)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Mp
w=1
break}p=B.R.aG(0,q,null)
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
if(D.Ch.ai(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a2X,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.t(D.a2m,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.t(D.a2h,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.t(D.cRj,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.Hi(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Mp
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Mp
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bAN,v)},
R8(d,e,f){return C.i6K(d,e,f)},
i6K(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$R8=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aA(),$async$R8)
case 7:r=h
w=8
return A.b(r.au("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.R.ao(f.ag(),null)),$async$R8)
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
return A.i($async$R8,v)},
QD(d,e){return C.hZp(d,e)},
hZp(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$QD=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$QD)
case 7:r=g
q=r.t5("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Ku(d,e),$async$QD)
case 8:if(!j.cy(g)){n=B.a.i(d.toLowerCase())
m=J.lo(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$QD)
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
return A.i($async$QD,v)},
afO(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$afO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QD(d,e),$async$afO)
case 3:s=g
r=J.a6(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.L(s,t)
w=5
return A.b(A.aA(),$async$afO)
case 5:w=4
return A.b(g.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$afO)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afO,v)},
a26(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a26=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.QD(d,e),$async$a26)
case 2:s=h
J.hE(s,f)
w=3
return A.b(A.aA(),$async$a26)
case 3:u=h
w=4
return A.b(u.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a26)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a26)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a26)
case 6:return A.h(null,v)}})
return A.i($async$a26,v)},
n9:function n9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ft6:function ft6(){},
ft7:function ft7(){},
ft8:function ft8(){},
fG5:function fG5(){},
fOf:function fOf(d){this.a=d},
fqk:function fqk(d){this.a=d},
Hi:function Hi(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bMX:function bMX(d){this.a=d},
i72(d,e,f,g,h,i,j){return A.a5(d,!1).c8(A.ea(new C.fGE(j,i,f,e,h,g),!0,null,x.H))},
QA(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$QA=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QD(h,g),$async$QA)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.I(x.q).f.S(D.aNU)
u=!1
w=1
break}w=4
return A.b(C.hmk(d,f,e),$async$QA)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.afO(h,g),$async$QA)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.n9(""+(q+n),l,B.a.i(m.b),new A.S(Date.now(),0,!1)))}w=6
return A.b(C.AH(h,r,p),$async$QA)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.R8(h,r,new C.Hi("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$QA)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$QA,v)},
fGE:function fGE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
YR:function YR(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
az6:function az6(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d5M:function d5M(d){this.a=d},
d5L:function d5L(d,e){this.a=d
this.b=e},
d5A:function d5A(d,e){this.a=d
this.b=e},
d5x:function d5x(d,e){this.a=d
this.b=e},
d58:function d58(d){this.a=d},
d59:function d59(d,e){this.a=d
this.b=e},
d5B:function d5B(d){this.a=d},
d5h:function d5h(d){this.a=d},
d5f:function d5f(d){this.a=d},
d5g:function d5g(d){this.a=d},
d5i:function d5i(d){this.a=d},
d5y:function d5y(d){this.a=d},
d5z:function d5z(){},
d5d:function d5d(d){this.a=d},
d5e:function d5e(d,e){this.a=d
this.b=e},
d5j:function d5j(d){this.a=d},
d5k:function d5k(d,e){this.a=d
this.b=e},
d5K:function d5K(d){this.a=d},
d5J:function d5J(d,e){this.a=d
this.b=e},
d5I:function d5I(d){this.a=d},
d5u:function d5u(d){this.a=d},
d5t:function d5t(d){this.a=d},
d5v:function d5v(d){this.a=d},
d5a:function d5a(d,e){this.a=d
this.b=e},
d5w:function d5w(d,e){this.a=d
this.b=e},
d5n:function d5n(d){this.a=d},
d5o:function d5o(d){this.a=d},
d5m:function d5m(){},
d5p:function d5p(d){this.a=d},
d5q:function d5q(d){this.a=d},
d5r:function d5r(d,e){this.a=d
this.b=e},
d5s:function d5s(d,e,f){this.a=d
this.b=e
this.c=f},
d5l:function d5l(d,e){this.a=d
this.b=e},
d5D:function d5D(d){this.a=d},
d5C:function d5C(){},
d5E:function d5E(d){this.a=d},
d5F:function d5F(d){this.a=d},
d5G:function d5G(d){this.a=d},
d5H:function d5H(d,e){this.a=d
this.b=e},
d5b:function d5b(d){this.a=d},
d5c:function d5c(d){this.a=d},
YV:function YV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdU:function bdU(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d7w:function d7w(d){this.a=d},
d7x:function d7x(d){this.a=d},
d7v:function d7v(d){this.a=d},
d7y:function d7y(d){this.a=d},
d7u:function d7u(d){this.a=d},
d7z:function d7z(d){this.a=d},
d7t:function d7t(d){this.a=d},
d7A:function d7A(d,e){this.a=d
this.b=e},
d7s:function d7s(d,e){this.a=d
this.b=e},
d7B:function d7B(d,e){this.a=d
this.b=e},
YT:function YT(d,e,f,g,h,i,j){var _=this
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
az7:function az7(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d60:function d60(d,e){this.a=d
this.b=e},
d6_:function d6_(d,e){this.a=d
this.b=e},
d64:function d64(d){this.a=d},
d63:function d63(d,e){this.a=d
this.b=e},
d61:function d61(d){this.a=d},
d62:function d62(d){this.a=d},
d65:function d65(d){this.a=d},
d66:function d66(d){this.a=d},
d5Z:function d5Z(d,e){this.a=d
this.b=e},
d5Y:function d5Y(d,e){this.a=d
this.b=e},
JB:function JB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Y9:function Y9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cEB:function cEB(d){this.a=d},
cEC:function cEC(){},
cED:function cED(d){this.a=d},
bb9:function bb9(d,e,f){this.b=d
this.c=e
this.a=f},
bb0:function bb0(d,e){this.b=d
this.a=e},
u8:function u8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Yr:function Yr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bb7:function bb7(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cY2:function cY2(d,e,f){this.a=d
this.b=e
this.c=f},
cY1:function cY1(d,e){this.a=d
this.b=e},
cYr:function cYr(d){this.a=d},
cYe:function cYe(){},
cYs:function cYs(d){this.a=d},
cYd:function cYd(){},
cYt:function cYt(d,e){this.a=d
this.b=e},
cYc:function cYc(d,e){this.a=d
this.b=e},
cYu:function cYu(d,e){this.a=d
this.b=e},
cYb:function cYb(d,e){this.a=d
this.b=e},
cYv:function cYv(d){this.a=d},
cYa:function cYa(){},
cYw:function cYw(d,e){this.a=d
this.b=e},
cY9:function cY9(d,e){this.a=d
this.b=e},
cYx:function cYx(d){this.a=d},
cYm:function cYm(d,e){this.a=d
this.b=e},
cYy:function cYy(d){this.a=d},
cYz:function cYz(d){this.a=d},
cYB:function cYB(d){this.a=d},
cYC:function cYC(d){this.a=d},
cYl:function cYl(d,e){this.a=d
this.b=e},
cYD:function cYD(d,e){this.a=d
this.b=e},
aG6:function aG6(d){this.a=d},
bgn:function bgn(d){this.a=d},
b9l:function b9l(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hYm(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ahl(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bA(new A.S(Date.now(),0,!1))
s=new C.fr6(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("a1<1>"),q=q.k("cQ<1,n>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.xP)m.push(l===D.Zn?"male":"female")
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
m.push("child of "+l+k)}a0=A.C(new A.cQ(new A.a1(a4,new C.fr4(u,f),p),new C.fr5(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aI(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aI(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hYn(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ahl(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.frb(v,e)
q=new C.fr9(v)
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
B.d.fl(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.L)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gaf(e),k=new A.fb(l,new C.fra(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ai(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aI(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hK_(d,e,f,g){var w,v,u=C.hYo(d,e)
if(u<=0||f.length<=u)return new A.adR(!1,D.C6,f)
if(g.t(0,e.a))return new A.adR(!1,D.C6,f)
w=A.U(f).c
v=A.dd(f,0,A.dJ(u,"count",x.S),w).dH(0)
return new A.adR(!0,A.dd(f,u,null,w).dH(0),v)},
hK0(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ahl(d3),d2=d1.length
if(d2===0)return D.fQG
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.cg(0,t.a,new C.d6d(t))}s=new C.d6u(v)
d2=x.h
r=A.T(w,d2)
q=new C.d6m(r)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d6l(r)
l=A.T(w,x.do)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ch(l.cg(0,k,new C.d6e()),o)}h=new C.d6k(s)
g=new C.d6j(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a1<J.E>")
f=A.C(new A.a1(new A.bc(v,p),new C.d6f(h),o),o.k("J.E"))
e=f.length===0?new A.bc(v,p).gJ(0):B.d.gJ(f)
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
a9=new C.d6s(new C.d6o(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dt(v,v.r,v.e),j=a2.gajV(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.et([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.L(0,i))break}if(h.$1(b0)&&a2.ai(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.ra(J.dH(i==null?B.T:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.cc)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.d6c(a2,new C.d6t(),b6,a3,b4,v,a4,a5,a6,b5)
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
b4.n(0,b8,new C.Fs(o,new A.u(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.JJ(c5.a,new A.u(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.C(new A.cu(b6,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bI(0,new C.d6g(c6,b4))
for(d2=new A.cK(a4,a4.$ti.k("cK<1,2>")).gaf(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gT(j)
if(b6.ai(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gaf(b5),i=new A.fb(j,new C.d6h(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.b0(o,new C.d6i())
c6.push(new C.aIc(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bdE(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hi2(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(d)
return w==null?null:w.b[1]},
hcn(d,e,f,g,h,i,j,k,l,m,n){return new C.Zu(k,f,j,e,l,n,m,d,g,h,i,null)},
aB3(d,e,f,g,h,i,j){return new C.bhj(i,d,e,f,j,h,g,null)},
aoU:function aoU(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCD:function aCD(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dTf:function dTf(d){this.a=d},
dTe:function dTe(d){this.a=d},
dTh:function dTh(d,e){this.a=d
this.b=e},
dTi:function dTi(d,e){this.a=d
this.b=e},
dTj:function dTj(d){this.a=d},
dTd:function dTd(d,e){this.a=d
this.b=e},
dTg:function dTg(d){this.a=d},
dTl:function dTl(d){this.a=d},
dTk:function dTk(d,e){this.a=d
this.b=e},
aoO:function aoO(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCA:function aCA(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dSG:function dSG(d){this.a=d},
dSE:function dSE(d){this.a=d},
dSF:function dSF(d){this.a=d},
dSH:function dSH(d,e){this.a=d
this.b=e},
dSB:function dSB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dS9:function dS9(d){this.a=d},
dSa:function dSa(d,e){this.a=d
this.b=e},
dSo:function dSo(d){this.a=d},
dSm:function dSm(d){this.a=d},
dSn:function dSn(d,e){this.a=d
this.b=e},
dSp:function dSp(d){this.a=d},
dSq:function dSq(d,e){this.a=d
this.b=e},
dSA:function dSA(d,e){this.a=d
this.b=e},
dSy:function dSy(d,e){this.a=d
this.b=e},
dSx:function dSx(d,e){this.a=d
this.b=e},
dSt:function dSt(d,e){this.a=d
this.b=e},
dSs:function dSs(d){this.a=d},
dSu:function dSu(d,e){this.a=d
this.b=e},
dSr:function dSr(d){this.a=d},
dSv:function dSv(d){this.a=d},
dSw:function dSw(d){this.a=d},
dSz:function dSz(d,e){this.a=d
this.b=e},
dRY:function dRY(d,e){this.a=d
this.b=e},
dRZ:function dRZ(d,e){this.a=d
this.b=e},
dSJ:function dSJ(d,e,f){this.a=d
this.b=e
this.c=f},
dSD:function dSD(d,e,f){this.a=d
this.b=e
this.c=f},
dSC:function dSC(d){this.a=d},
dS_:function dS_(d){this.a=d},
dS0:function dS0(d){this.a=d},
dS1:function dS1(){},
dS2:function dS2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dS6:function dS6(d,e){this.a=d
this.b=e},
dS5:function dS5(d,e){this.a=d
this.b=e},
dS4:function dS4(d){this.a=d},
dS7:function dS7(d,e){this.a=d
this.b=e},
dS3:function dS3(d){this.a=d},
dSI:function dSI(d){this.a=d},
dSj:function dSj(){},
dSk:function dSk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSi:function dSi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSe:function dSe(d,e,f){this.a=d
this.b=e
this.c=f},
dSd:function dSd(d,e,f){this.a=d
this.b=e
this.c=f},
dSb:function dSb(d,e){this.a=d
this.b=e},
dSf:function dSf(d){this.a=d},
dSg:function dSg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSc:function dSc(d,e){this.a=d
this.b=e},
dSh:function dSh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSl:function dSl(d,e){this.a=d
this.b=e},
dSQ:function dSQ(){},
dSR:function dSR(d,e){this.a=d
this.b=e},
dSS:function dSS(d){this.a=d},
dST:function dST(d,e){this.a=d
this.b=e},
dSM:function dSM(d){this.a=d},
dSK:function dSK(d,e){this.a=d
this.b=e},
dSN:function dSN(d,e){this.a=d
this.b=e},
dSO:function dSO(d,e){this.a=d
this.b=e},
dSP:function dSP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dSU:function dSU(d){this.a=d},
dSL:function dSL(d){this.a=d},
dS8:function dS8(d){this.a=d},
bdC:function bdC(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d6a:function d6a(d){this.a=d},
d69:function d69(d,e){this.a=d
this.b=e},
d6b:function d6b(d){this.a=d},
d68:function d68(d,e){this.a=d
this.b=e},
fr6:function fr6(d,e){this.a=d
this.b=e},
fr7:function fr7(d){this.a=d},
fr8:function fr8(){},
fr4:function fr4(d,e){this.a=d
this.b=e},
fr5:function fr5(){},
frb:function frb(d,e){this.a=d
this.b=e},
frc:function frc(d){this.a=d},
frd:function frd(){},
fr9:function fr9(d){this.a=d},
fra:function fra(d,e){this.a=d
this.b=e},
JJ:function JJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Fs:function Fs(d,e){this.a=d
this.b=e},
bdE:function bdE(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d6d:function d6d(d){this.a=d},
d6u:function d6u(d){this.a=d},
d6m:function d6m(d){this.a=d},
d6n:function d6n(){},
d6l:function d6l(d){this.a=d},
d6e:function d6e(){},
d6k:function d6k(d){this.a=d},
d6j:function d6j(d,e){this.a=d
this.b=e},
d6f:function d6f(d){this.a=d},
d6o:function d6o(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d6p:function d6p(d){this.a=d},
d6q:function d6q(d){this.a=d},
d6r:function d6r(){},
d6s:function d6s(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d6t:function d6t(){},
d6c:function d6c(d,e,f,g,h,i,j,k,l,m){var _=this
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
d6g:function d6g(d,e){this.a=d
this.b=e},
d6h:function d6h(d){this.a=d},
d6i:function d6i(){},
aIc:function aIc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bdF:function bdF(d,e){this.b=d
this.a=e},
d6v:function d6v(){},
d6w:function d6w(d){this.a=d},
d6x:function d6x(d){this.a=d},
d6y:function d6y(){},
bhk:function bhk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcJ:function bcJ(d,e){this.b=d
this.a=e},
bv1:function bv1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
f9a:function f9a(d){this.a=d},
bkG:function bkG(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eL5:function eL5(d){this.a=d},
eL4:function eL4(d,e){this.a=d
this.b=e},
Zu:function Zu(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aB1:function aB1(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dmn:function dmn(d,e){this.a=d
this.b=e},
dmm:function dmm(d){this.a=d},
dmk:function dmk(d){this.a=d},
dml:function dml(d){this.a=d},
dmw:function dmw(d){this.a=d},
dmx:function dmx(d){this.a=d},
dmv:function dmv(d,e){this.a=d
this.b=e},
dmy:function dmy(){},
dmB:function dmB(d){this.a=d},
dmu:function dmu(d,e){this.a=d
this.b=e},
dmA:function dmA(){},
dmC:function dmC(d){this.a=d},
dmt:function dmt(d,e){this.a=d
this.b=e},
dmD:function dmD(d){this.a=d},
dms:function dms(d){this.a=d},
dmE:function dmE(d){this.a=d},
dmr:function dmr(d){this.a=d},
dmF:function dmF(d){this.a=d},
dmq:function dmq(d){this.a=d},
dmG:function dmG(d){this.a=d},
dmp:function dmp(d){this.a=d},
dmH:function dmH(d){this.a=d},
dmo:function dmo(d,e){this.a=d
this.b=e},
dmz:function dmz(d){this.a=d},
acG:function acG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhj:function bhj(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
acF:function acF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bhi:function bhi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dmI:function dmI(d){this.a=d},
dmJ:function dmJ(d,e){this.a=d
this.b=e},
aB2:function aB2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHe:function aHe(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
acH:function acH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dmS:function dmS(d){this.a=d},
Jx:function Jx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
h7f(d){var w=d.U,v=x.N
return w.j0(w,new C.c7D(),v,v)},
hBv(d){var w=d.bF
if(w>=0)return w
return 5},
h7h(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.h7f(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
h7g(d,e){var w=C.h7h(d,e)
if(w!=null&&w.cc(new A.S(Date.now(),0,!1)))return!0
return!1},
hBw(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.h7f(d),w,w)
u=C.h7h(d,e)
t=u!=null&&u.cc(new A.S(Date.now(),0,!1))?u:new A.S(Date.now(),0,!1)
v.n(0,s,t.bQ(A.dC(30,0,0,0,0,0).a).a6().ac())
d.U=v},
aZf(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aZf=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.ld(t,B.HM),$async$aZf)
case 3:if(l){u=!0
w=1
break}u=A.kS(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.HM,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZf,v)},
c7D:function c7D(){},
hBt(){var w,v=$.pp(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aC(32)]
return"FT"+B.d.fY(u)},
Ic(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Ic=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$Ic)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f3("ngmy_family_tree_backup_codes_v1",null,!1,B.bH),$async$Ic)
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
return A.i($async$Ic,v)},
a6I(d){return C.hBu(d)},
hBu(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a6I=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$a6I)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hD("ngmy_family_tree_backup_codes_v1",A.F(["codes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cH,null),$async$a6I)
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
return A.i($async$a6I,v)},
c7C(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c7C=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Ic(),$async$c7C)
case 3:t=m.jx(f),t=t.gaf(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gT(t)
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
return A.i($async$c7C,v)},
N7(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$N7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c7C(d),$async$N7)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Ic(),$async$N7)
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
return A.b(C.a6I(s),$async$N7)
case 9:case 8:u=t
w=1
break
case 5:n=C.hBt()
w=10
return A.b(C.Ic(),$async$N7)
case 10:s=f
J.aF(s,n,A.F(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=11
return A.b(C.a6I(s),$async$N7)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$N7,v)},
aZe(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aZe=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Ic(),$async$aZe)
case 3:t=f
for(s=J.dm(t),r=s.gdK(t),r=r.dH(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a6I(t),$async$aZe)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aZe,v)},
a6J(d,e,f){var w=0,v=A.j(x.H),u
var $async$a6J=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aoT(d,e),$async$a6J)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.N7(d),$async$a6J)
case 7:w=4
break
case 5:w=8
return A.b(C.aZe(d),$async$a6J)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a6J,v)},
aoN(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aoN=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aoT(f,e),$async$aoN)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c3(),$async$aoN)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Ic(),$async$aoN)
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
return A.i($async$aoN,v)},
aZd(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aZd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c3(),$async$aZd)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Ic(),$async$aZd)
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
return A.i($async$aZd,v)},
hBx(){var w,v=$.pp(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aC(32)]
return"FT"+B.d.fY(u)},
aoQ(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$aoQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$aoQ)
case 3:if(!g){u=null
w=1
break}t=C.hBx()
w=4
return A.b(A.UD(),$async$aoQ)
case 4:s=g
r=B.dJ.aJ(B.R.ao(d.eM(),null))
r=B.cS.gcw().aJ(r)
q=e?999:2
J.aF(s,t,A.F(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(A.a6K(s),$async$aoQ)
case 5:p=e?999:2
u=new A.a_G("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoQ,v)},
aoP(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aoP=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.UD(),$async$aoP)
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
return A.b(C.aZd(J.k(l==null?"":l),j),$async$aoP)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.c6.ca(0,B.cG.aJ(t))
s=C.h7i(r)}catch(f){q=A.aa(f)
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
return A.b(A.a6K(p),$async$aoP)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoP,v)},
h7i(d){var w,v,u,t,s=null
try{w=B.R.aG(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hBz(A.a2(w,x.N,x.z))
return u}catch(t){v=A.aa(t)
$.am.$1("[family tree sync] parse: "+A.t(v))
return s}},
fSb(d){var w=0,v=A.j(x.m),u,t,s
var $async$fSb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aoP(t[1])
w=1
break}u=null
w=1
break}u=C.h7i(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fSb,v)},
hBz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d9(v,x.f)
u=A.cF(u,new C.c7F(),u.$ti.k("J.E"),x.k)
t=A.a3(u).k("a1<J.E>")
s=A.C(new A.a1(u,new C.c7G(),t),t.k("J.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.T(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jx(p),t=t.gaf(t),o=x.B;t.C();){n=t.gT(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d9(l,u)
n=A.cF(n,new C.c7H(),n.$ti.k("J.E"),o)
k=A.a3(n).k("a1<J.E>")
j=A.C(new A.a1(n,new C.c7I(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aoR(h,w,s,r,q)},
aoT(d,e){var w=0,v=A.j(x.y),u,t
var $async$aoT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.MZ(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Aw(d),$async$aoT)
case 3:u=t.cy(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoT,v)},
c7O(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c7O=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Aw(d),$async$c7O)
case 3:t=s.b6(f,new C.c7P(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.b0(t,new C.c7Q())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c7O,v)},
UE(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$UE=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aoT(e,d),$async$UE)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.N7(e),$async$UE)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Aw(e),$async$UE)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.c7M(g))
r=A.C(t,t.$ti.k("J.E"))}t=J.a6(r)
if(t.gam(r)){u=null
w=1
break}t=t.dt(r,new C.c7N(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Ku(e,o),$async$UE)
case 14:n=i
if(J.cy(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.aoR(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$UE,v)},
aZi(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aZi=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.UE(d,e,f,g),$async$aZi)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gJ(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aK(t,s,"_")
r=q.a
u=A.Ga(A.JF(q.eM(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZi,v)},
aZh(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aZh=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.UE(d,e,f,g),$async$aZh)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aoQ(r,f),$async$aZh)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aFf(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZh,v)},
UF(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$UF=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fSb(a0),$async$UF)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aoN(g.a,d,e,f,s,r),$async$UF)
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
return A.b(C.bAo(e,j),$async$UF)
case 12:case 11:w=13
return A.b(C.ah6(e,j,s),$async$UF)
case 13:h=n.h(0,i)
w=h!=null&&J.cy(h)?14:15
break
case 14:w=16
return A.b(C.AH(e,i,h),$async$UF)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bog(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$UF,v)},
aoR:function aoR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c7K:function c7K(){},
c7L:function c7L(){},
c7J:function c7J(){},
c7F:function c7F(){},
c7G:function c7G(){},
c7H:function c7H(){},
c7I:function c7I(){},
c7P:function c7P(){},
c7Q:function c7Q(){},
c7M:function c7M(d){this.a=d},
c7N:function c7N(d){this.a=d},
h_A(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f7(null,x.H)
return A.hx(d,new C.aoS(w,e,g,i,f,h,null),!0,null,x.H)},
d67(d,e,f,g,h,i,j,k){return new C.bdB(i,e,k,j,g,f,h,d,null)},
aoS:function aoS(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCC:function aCC(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dT2:function dT2(d){this.a=d},
dT3:function dT3(d,e,f){this.a=d
this.b=e
this.c=f},
dT7:function dT7(d,e){this.a=d
this.b=e},
dT8:function dT8(d){this.a=d},
dT_:function dT_(d){this.a=d},
dT0:function dT0(d,e){this.a=d
this.b=e},
dT1:function dT1(d,e){this.a=d
this.b=e},
dT6:function dT6(d){this.a=d},
dT5:function dT5(d,e){this.a=d
this.b=e},
dT4:function dT4(){},
dTa:function dTa(d){this.a=d},
dTb:function dTb(d,e){this.a=d
this.b=e},
dT9:function dT9(d,e){this.a=d
this.b=e},
d6z:function d6z(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bdD:function bdD(d,e,f){this.d=d
this.e=e
this.a=f},
abX:function abX(d,e,f){this.c=d
this.d=e
this.a=f},
bdB:function bdB(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bdG:function bdG(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ZP:function ZP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCB:function aCB(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dSV:function dSV(d,e){this.a=d
this.b=e},
dSW:function dSW(d){this.a=d},
dSX:function dSX(d){this.a=d},
dSY:function dSY(d){this.a=d},
dSZ:function dSZ(d){this.a=d},
ZQ:function ZQ(d){this.a=d},
biN:function biN(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dTc:function dTc(d,e){this.a=d
this.b=e},
aXP(d,e){return new C.aXO(d,e,null)},
aXO:function aXO(d,e,f){this.c=d
this.d=e
this.a=f},
i_Q(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b1(d,11)},
i7c(d){return A.bR(B.K,null,new C.fH6(new C.tG(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
h9a(d,e){return new C.arO(e,d,null)},
aPu(d,e,f,g,h,i,j){var w=C.i_Q(i)
if(w!=null)return A.bw(e,new A.a7(j,f,new C.a5L(w,!0,null),null),B.aq)
return I.aOP(e,B.bS,f,g,h,i,j)},
lx:function lx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5L:function a5L(d,e,f){this.c=d
this.d=e
this.a=f},
bit:function bit(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b_$=e
_.c=_.a=null},
dEp:function dEp(d){this.a=d},
dEq:function dEq(){},
dEr:function dEr(d,e){this.a=d
this.b=e},
bis:function bis(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fH6:function fH6(d){this.a=d},
fH5:function fH5(d,e){this.a=d
this.b=e},
fH4:function fH4(d,e){this.a=d
this.b=e},
fH3:function fH3(d,e){this.a=d
this.b=e},
arO:function arO(d,e,f){this.c=d
this.d=e
this.a=f},
cfi:function cfi(d,e){this.a=d
this.b=e},
aKy:function aKy(){},
i6Y(d){var w=null
return A.ca(w,w,!0,w,new C.fGt(),d,w,!0,!0,x.e2)},
i87(d,e,f,g,h){var w=null
return A.ca(w,w,!0,w,new C.fNX(h,g,f,e),d,w,!0,!0,x.N)},
i7_(d,e){var w=null
return A.ca(w,w,!0,w,new C.fGy(e),d,w,!0,!0,x.dY)},
i6Z(d){var w=null
return A.ca(w,w,!0,w,new C.fGx(),d,w,!0,!0,x.c5)},
aSo:function aSo(d,e){this.a=d
this.b=e},
aSn:function aSn(d){this.a=d},
aQp:function aQp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fGt:function fGt(){},
fNX:function fNX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fGy:function fGy(d){this.a=d},
fGx:function fGx(){},
Yt:function Yt(d,e){this.c=d
this.a=e},
axS:function axS(){var _=this
_.d=$
_.c=_.a=_.e=null},
cYP:function cYP(d){this.a=d},
cYQ:function cYQ(d){this.a=d},
cYO:function cYO(d,e){this.a=d
this.b=e},
cYR:function cYR(d){this.a=d},
cYS:function cYS(d){this.a=d},
Ys:function Ys(d){this.a=d},
axR:function axR(){this.d=$
this.c=this.a=null},
cYL:function cYL(d){this.a=d},
cYM:function cYM(d){this.a=d},
cYN:function cYN(d){this.a=d},
Y0:function Y0(d){this.a=d},
awB:function awB(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cwo:function cwo(){},
cwu:function cwu(d){this.a=d},
cwv:function cwv(d){this.a=d},
cww:function cww(d){this.a=d},
cwt:function cwt(){},
cwx:function cwx(d){this.a=d},
cwy:function cwy(d){this.a=d},
cws:function cws(){},
cwz:function cwz(d,e){this.a=d
this.b=e},
cwr:function cwr(d,e){this.a=d
this.b=e},
cwp:function cwp(d,e){this.a=d
this.b=e},
cwA:function cwA(d){this.a=d},
cwq:function cwq(){},
cwB:function cwB(d){this.a=d},
a0A:function a0A(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
buU:function buU(){this.d=$
this.c=this.a=null},
f8D:function f8D(d,e){this.a=d
this.b=e},
f8E:function f8E(d){this.a=d},
f8F:function f8F(d,e){this.a=d
this.b=e},
ab_:function ab_(d,e){this.a=d
this.b=e},
Ff:function Ff(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
buS:function buS(d,e){var _=this
_.d=$
_.br$=d
_.a8$=e
_.c=_.a=null},
f8B:function f8B(d,e){this.a=d
this.b=e},
awu:function awu(d,e){this.c=d
this.a=e},
buT:function buT(d,e){var _=this
_.d=$
_.br$=d
_.a8$=e
_.c=_.a=null},
f8C:function f8C(d){this.a=d},
buR:function buR(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aMJ:function aMJ(){},
aMK:function aMK(){},
bCl(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bu(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oC(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fF9(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.de(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.de(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.de(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.de(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Xp(A.de(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aP5(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aP5=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hY().l4(85,1280,B.eG),$async$aP5)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fi(),$async$aP5)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.h99()
w=9
return A.b(C.cfh(q,r),$async$aP5)
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
return A.i($async$aP5,v)},
aPs(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aPs=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cfe(g)
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
return A.b($.W().Lg(p,!0,null,i).cM(0,B.fH),$async$aPs)
case 9:n=a1
w=10
return A.b(n.lZ(),$async$aPs)
case 10:m=a1
w=11
return A.b(J.ahw(m).hr(B.fY),$async$aPs)
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
return A.i($async$aPs,v)},
fF9:function fF9(){},
tG:function tG(d){this.a=d},
arN:function arN(d,e,f){this.c=d
this.d=e
this.a=f},
aE7:function aE7(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eIf:function eIf(d,e){this.a=d
this.b=e},
eI6:function eI6(d){this.a=d},
eI7:function eI7(d){this.a=d},
eId:function eId(d,e){this.a=d
this.b=e},
eIc:function eIc(d,e){this.a=d
this.b=e},
eI9:function eI9(d,e){this.a=d
this.b=e},
eI8:function eI8(d,e){this.a=d
this.b=e},
eIa:function eIa(d){this.a=d},
eIb:function eIb(d,e){this.a=d
this.b=e},
eIe:function eIe(d,e){this.a=d
this.b=e},
eI1:function eI1(d,e){this.a=d
this.b=e},
eI5:function eI5(d){this.a=d},
eI4:function eI4(d,e){this.a=d
this.b=e},
eI3:function eI3(d){this.a=d},
eIg:function eIg(d,e){this.a=d
this.b=e},
eIh:function eIh(d,e){this.a=d
this.b=e},
eI2:function eI2(d,e){this.a=d
this.b=e},
hlQ(d,e,f){var w="thumbnailPath",v=e.ag()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.F(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a6().ac(),"project",v],x.N,x.z)},
fFa(d,e,f){var w=0,v=A.j(x.N),u
var $async$fFa=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.R.ao(C.hlQ(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fFa,v)},
bCn(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bCn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fFa(!0,d,e),$async$bCn)
case 4:w=3
return A.b(r.arL(g,d,e.a),$async$bCn)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dJ.aJ(B.R.ao(C.hlQ(d,e,null),null))
u="NGMY_WS:"+B.kb.gcw().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCn,v)},
hdJ(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
h_f(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d_(s,"NGMYWSSYNC2|"))return!0
if(J.d_(s,"NGMY_WS:"))return!0
if(J.f0(s,t))return!0
if(J.d_(s,"{"))try{w=B.R.aG(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
i4T(d){var w,v,u,t=C.hdJ(d)
if(t==null)return null
if(C.h_f(t))return t
w=B.a.cJ(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b1(t,w))
if(C.h_f(v))return v}u=B.a.cJ(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b1(t,u))
if(C.h_f(v))return v}return null},
h_e(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d_(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d_(q,"NGMY_WS:")){v=B.c6.ca(0,B.cG.aJ(J.mE(q,8)))
w=t.a(B.R.aG(0,v,r))}else w=t.a(B.R.aG(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fUM(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bCm(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bCm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.arK(t[1]),$async$bCm)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.h_e(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.h_e(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCm,v)},
h_d(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lg(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bBU(){var w=0,v=A.j(x.o),u,t
var $async$bBU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Gl(),$async$bBU)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.h_e(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBU,v)},
hmI(d,e,f,g){return A.bR(B.K,null,new C.fNN(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fNN:function fNN(d,e,f){this.a=d
this.b=e
this.c=f},
ad1:function ad1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eIj:function eIj(d,e){this.a=d
this.b=e},
eIk:function eIk(d,e){this.a=d
this.b=e},
eIl:function eIl(d,e){this.a=d
this.b=e},
eIm:function eIm(d,e){this.a=d
this.b=e},
eIi:function eIi(d){this.a=d},
arH:function arH(d,e,f){this.c=d
this.d=e
this.a=f},
bk9:function bk9(){var _=this
_.c=_.a=_.e=_.d=null},
eHX:function eHX(d,e){this.a=d
this.b=e},
eHY:function eHY(d){this.a=d},
eHZ:function eHZ(d){this.a=d},
arM:function arM(d){this.a=d},
aE6:function aE6(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eI0:function eI0(d){this.a=d},
eI_:function eI_(d){this.a=d},
hEN(d,e,f,g,h){return new C.NL(h,g,d,e,f,null)},
aIU:function aIU(d,e){this.a=d
this.b=e},
NL:function NL(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aE8:function aE8(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eIJ:function eIJ(){},
eIF:function eIF(d,e){this.a=d
this.b=e},
eIG:function eIG(d){this.a=d},
eIq:function eIq(d){this.a=d},
eIo:function eIo(d){this.a=d},
eIp:function eIp(d){this.a=d},
eIz:function eIz(d,e){this.a=d
this.b=e},
eIw:function eIw(d,e){this.a=d
this.b=e},
eIx:function eIx(d,e){this.a=d
this.b=e},
eIy:function eIy(d,e,f){this.a=d
this.b=e
this.c=f},
eIu:function eIu(d,e,f){this.a=d
this.b=e
this.c=f},
eIs:function eIs(d){this.a=d},
eIt:function eIt(d){this.a=d},
eIv:function eIv(d){this.a=d},
eIM:function eIM(d){this.a=d},
eIL:function eIL(d){this.a=d},
eIN:function eIN(d){this.a=d},
eIK:function eIK(d){this.a=d},
eIn:function eIn(d){this.a=d},
eIr:function eIr(d,e){this.a=d
this.b=e},
eII:function eII(d,e){this.a=d
this.b=e},
eIH:function eIH(d,e){this.a=d
this.b=e},
eIC:function eIC(d){this.a=d},
eID:function eID(d){this.a=d},
eIE:function eIE(d,e){this.a=d
this.b=e},
eIB:function eIB(d,e){this.a=d
this.b=e},
eIA:function eIA(d,e,f){this.a=d
this.b=e
this.c=f},
bwF:function bwF(){},
Ao(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aK(v,w,"_")},
afx(d,e,f){return C.hUr(d,e,f)},
hUr(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$afx=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.au("String",e,f),$async$afx)
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
afw(d,e){return C.hUq(d,e)},
hUq(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
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
hTc(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Sg(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bzo(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bzo=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b1u(q),$async$bzo)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aPs(q,!1),$async$bzo)
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
return A.i($async$bzo,v)},
hsB(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
fUM(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d9(s,x.f)
w=A.cF(w,new C.cvN(),w.$ti.k("J.E"),x.Q)
v=A.a3(w).k("a1<J.E>")
r=A.C(new A.a1(w,new C.cvO(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lg(w,v,u,r,t==null?new A.S(Date.now(),0,!1):t)},
hYi(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.Zn
case"female":case"f":return D.aiZ
default:return D.xP}},
hiy(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h3l(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hYi(v==null?j:J.k(v))
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
return new C.hX(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
hYk(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Mq
case"viewer":return D.ko
default:return D.tG}},
hYl(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Gb(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bAF(d,e){return B.a.i(e.toLowerCase())===C.Gb(d,e)&&d.y!==D.ko},
tR(d,e){var w,v=d.y
if(v===D.ko)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Gb(d,e))return!0
if(v===D.Mq)return!0
v=d.e
return new A.K(v,A.h_j(),A.U(v).k("K<1,n>")).t(0,w)},
hXL(d){return J.dH(d,new C.fqc()).gM(0)},
fOm(d){var w=0,v=A.j(x.y),u,t
var $async$fOm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Aw(d),$async$fOm)
case 3:u=t.qQ(f,new C.fOn(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fOm,v)},
bAo(d,e){var w=0,v=A.j(x.H),u,t
var $async$bAo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Aw(d),$async$bAo)
case 3:t=g
if(J.qQ(t,new C.foD(e))){w=1
break}if(C.hXL(t)>=2)throw A.V(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bAo,v)},
ak9(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d9(n,x.f)
w=A.cF(w,new C.bMY(),w.$ti.k("J.E"),x.P)
v=A.a3(w).k("a1<J.E>")
m=A.C(new A.a1(w,new C.bMZ(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bN_(),x.N)
t=A.C(l,l.$ti.k("ak.E"))}else t=A.a([],x.s)
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
return new C.kB(l,w,v,!s,t,m,r,q,p,C.hYk(o==null?null:J.k(o)))},
hiH(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
CC(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$CC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.R6(d),$async$CC)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aA(),$async$CC)
case 4:t=f
w=5
return A.b(t.a5w(0),$async$CC)
case 5:w=6
return A.b(C.fgd(t,l),$async$CC)
case 6:s=f
if(J.cy(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a6(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hej(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oB(l,n),$async$CC)
case 11:u=n
w=1
break
case 10:case 8:m=A.aU(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hej(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oB(l,n),$async$CC)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$CC,v)},
fgd(d,e){return C.hQG(d,e)},
hQG(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fgd=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a6(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Ao(a9)))
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
break}o=f.gT(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Ao(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.R.aG(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fUM(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Ao(a9)+"_"+n))
i=C.hTc(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b1u(h),$async$fgd)
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
case 8:J.Rg(q,new C.fge())
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
return A.i($async$fgd,v)},
bAQ(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bAQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.R6(d),$async$bAQ)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.CC(r),$async$bAQ)
case 4:t=p.aV(g)
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
return A.i($async$bAQ,v)},
hej(d){var w,v,u,t
try{w=B.R.aG(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d9(w,x.f)
v=A.cF(v,new C.fbW(),v.$ti.k("J.E"),x.i)
u=A.a3(v).k("a1<J.E>")
v=A.C(new A.a1(v,new C.fbX(),u),u.k("J.E"))
B.d.b0(v,new C.fbY())
return v}catch(t){v=A.a([],x.D)
return v}},
oB(d,e){return C.i6O(d,e)},
i6O(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oB=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.R6(b2),$async$oB)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aA(),$async$oB)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Ao(a8)
p=A.aU(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.R.aG(0,p,null)),new C.fGk(),a2).fL(0)
a2=J.b6(b3,new C.fGl(),a2).c_(0,new C.fGm())
n=A.db(a2,a2.$ti.k("J.E"))
a2=o,a2=A.e9(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f0(n,m)?17:18
break
case 17:a5=C.Ao(a8)
l=A.aU(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a8_(l),$async$oB)
case 19:t=21
a5=C.Ao(a8)
k=A.aU(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.R.aG(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a8_(a5==null?null:J.k(a5)),$async$oB)
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
return A.b(C.afw(r,"ngmy_worksheet_item_v3_"+C.Ao(a8)+"_"+m),$async$oB)
case 29:w=30
return A.b(C.afw(r,"ngmy_worksheet_thumb_v3_"+C.Ao(a8)+"_"+m),$async$oB)
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
break}i=a3.gT(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bzo(h),$async$oB)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.afx(r,"ngmy_worksheet_thumb_v3_"+C.Ao(a8)+"_"+a4,f),$async$oB)
case 40:g=i.Sg(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.afw(r,"ngmy_worksheet_thumb_v3_"+C.Ao(a8)+"_"+a4),$async$oB)
case 41:g=i.Sg(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.afw(r,"ngmy_worksheet_thumb_v3_"+C.Ao(a8)+"_"+a4),$async$oB)
case 42:case 34:a4=i.a
w=43
return A.b(C.afx(r,"ngmy_worksheet_item_v3_"+C.Ao(a8)+"_"+a4,B.R.ao(g.ag(),null)),$async$oB)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.ch(q,i.a)
w=31
break
case 32:w=44
return A.b(C.afx(r,"ngmy_worksheets_index_v3_"+C.Ao(a8),B.R.ao(q,null)),$async$oB)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eL(b3,new C.fGn(q))
a4=a3.$ti.k("cQ<1,a4<n,@>>")
a7=A.C(new A.cQ(a3,new C.fGo(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.afx(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.R.ao(a0,null)),$async$oB)
case 45:w=46
return A.b(J.hrI(r),$async$oB)
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
KV(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$KV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.CC(d),$async$KV)
case 3:t=g
s=J.cG(t)
r=s.bd(t,new C.fOl(e))
if(r===-1)s.ck(t,0,e)
else s.n(t,r,e)
u=C.oB(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$KV,v)},
bAC(d,e){var w=0,v=A.j(x.H),u
var $async$bAC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.CC(d),$async$bAC)
case 2:u=g
J.no(u,new C.fqE(e))
w=3
return A.b(C.oB(d,u),$async$bAC)
case 3:return A.h(null,v)}})
return A.i($async$bAC,v)},
Gd(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Gd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Gd)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.R.aG(0,i,null)
if(x.j.b(t)){j=J.d9(t,x.f)
j=A.cF(j,new C.ftc(),j.$ti.k("J.E"),x.k)
s=A.a3(j).k("a1<J.E>")
r=A.C(new A.a1(j,new C.ftd(),s),s.k("J.E"))
B.d.b0(r,new C.fte())
k=r}}catch(h){}w=4
return A.b(C.fcG(d),$async$Gd)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hR2(k,p,d)
j=A.U(o)
s=j.k("K<1,a4<n,@>>")
s=A.C(new A.K(o,new C.ftf(),s),s.k("ak.E"))
n=B.R.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Qj(d,o),$async$Gd)
case 7:case 6:j=j.k("a1<1>")
m=A.C(new A.a1(o,new C.ftg(d),j),j.k("J.E"))
if(m.length!==0)C.aO0(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Gd,v)},
fG6(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fG6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qj(d,e),$async$fG6)
case 3:t=J.dH(e,new C.fG7(d))
s=A.C(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aO0(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fG6,v)},
a2d(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a2d=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aA(),$async$a2d)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.R.aG(0,l,null)
if(x.j.b(u)){m=J.d9(u,x.f)
m=A.cF(m,new C.fOg(),m.$ti.k("J.E"),x.k)
t=A.a3(m).k("a1<J.E>")
s=A.C(new A.a1(m,new C.fOh(),t),t.k("J.E"))
o=s}}catch(k){}q=J.qb(o,new C.fOi(e))
if(B.a.i(e.x).length===0&&C.tR(e,d)){m=B.a.i(d.toLowerCase())
p=e.aCZ(e.y===D.ko?D.ko:D.tG,m)}else p=e
if(q===-1)J.pt(o,0,p)
else J.aF(o,q,p)
w=3
return A.b(C.Qj(d,o),$async$a2d)
case 3:w=C.tR(p,d)?4:5
break
case 4:w=6
return A.b(C.aO_(C.Gb(p,d),p),$async$a2d)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a2d,v)},
aOa(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aOa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Gd(d),$async$aOa)
case 2:u=g
t=J.cG(u)
s=A.ra(t.eL(u,new C.fql(e)))
t.bn(u,new C.fqm(e))
w=3
return A.b(C.Qj(d,u),$async$aOa)
case 3:w=s!=null&&C.bAF(s,d)?4:5
break
case 4:w=6
return A.b(C.fc_(e),$async$aOa)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aOa,v)},
ahl(d){var w=d.f,v=A.U(w).k("a1<1>")
w=A.C(new A.a1(w,new C.fOr(),v),v.k("J.E"))
return w},
fXW(d,e){var w,v=d.f,u=A.ra(new A.a1(v,new C.fpS(e),A.U(v).k("a1<1>")))
v=C.ahl(d)
w=A.U(v).k("a1<1>")
v=A.C(new A.a1(v,new C.fpT(e,u),w),w.k("J.E"))
B.d.b0(v,new C.fpU())
return v},
hYo(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hmM(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bd(C.fXW(d,u),new C.fNY(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hZV(d,e){var w
if(e==null||e.length===0)return 1
w=C.fXW(d,e)
if(w.length===0)return 1
return new A.K(w,new C.ftZ(),A.U(w).k("K<1,H>")).fa(0,B.A6)+1},
i6H(d){var w,v=C.ahl(d)
if(v.length===0)return null
w=new A.a1(v,new C.fG0(),A.U(v).k("a1<1>"))
if(!w.gam(0))return w.gJ(0)
return B.d.gJ(v)},
hYj(d){return A.F(["id",d.a,"name",d.b,"gender",C.hiy(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hZQ(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
n=n!==D.xP?n:q.c
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
d=q.aCU(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.L)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cHy(a1,w,a3.d,a2.y,s,a0,v)},
Aw(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$Aw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Aw)
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
p=A.cF(p,new C.ft9(),p.$ti.k("J.E"),x.k)
s=A.a3(p).k("a1<J.E>")
p=A.C(new A.a1(p,new C.fta(),s),s.k("J.E"))
B.d.b0(p,new C.ftb())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Aw,v)},
ah6(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ah6=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tG:D.ko
a7=C.Gb(b2,b3)
w=2
return A.b(C.Aw(b1),$async$ah6)
case 2:a8=b5
a9=J.cG(a8)
b0=a9.bd(a8,new C.fFW(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bAo(b1,b2),$async$ah6)
case 5:case 4:if(b0===-1){u=b2.aCZ(a6,a7)
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
i=i!==D.xP?i:l.c
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
s.n(0,m,l.aCU(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.C(new A.bc(s,k),k.k("J.E"))
k=a5?D.tG:D.ko
u=t.yt(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Qj(b1,a8),$async$ah6)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aO_(B.a.i(b3.toLowerCase()),u),$async$ah6)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ah6,v)},
heH(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a6().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("K<1,a4<n,@>>"),k=A.C(new A.K(m,C.hlY(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.F(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.F(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a6().ac(),"updatedAt",o],r,x.K),"createdAt",s.a6().ac(),"updatedAt",o],r,x.z)},
heI(d,e){var w=new A.S(Date.now(),0,!1).a6().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("K<1,a4<n,@>>")
u=A.C(new A.K(u,C.hlY(),t),t.k("ak.E"))
return A.F(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a6().ac(),"updatedAt",w],x.N,x.z)},
hOG(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a6(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ak9(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.K(j,A.h_j(),A.U(j).k("K<1,n>")).c_(0,new C.fct())
t=A.C(j,j.$ti.k("J.E"))
if(u===v)s=D.tG
else s=B.d.t(t,u)?D.Mq:D.ko
return w.aCZ(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ak9(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d9(q,h)
h=A.cF(h,new C.fcu(),h.$ti.k("J.E"),x.P)
p=A.a3(h).k("a1<J.E>")
o=A.C(new A.a1(h,new C.fcv(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.fcw(),x.N).c_(0,new C.fcx())
t=A.C(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tG
else s=B.d.t(t,u)?D.Mq:D.ko
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
return new C.kB(h,r,p,!m,t,o,l,j,v,s)},
fcG(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fcG=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fcK()
h=x.N
g=x.z
w=7
return A.b(A.iL(A.a([A.ln("family_trees","*",null,A.F(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bH),r.$2(A.ln("family_trees","*",A.F(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bH),"collaborator"),r.$2(A.ln("family_trees","*",null,A.F(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bH),"public")],x.cl),x.U),$async$fcG)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.T(h,g)
h=A.C(p,g)
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
h=A.cF(new A.bc(l,h),new C.fcH(a0),h.k("J.E"),x.k)
l=A.a3(h).k("a1<J.E>")
l=A.C(new A.a1(h,new C.fcI(),l),l.k("J.E"))
B.d.b0(l,new C.fcJ())
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
return A.i($async$fcG,v)},
hR2(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a6(e)
if(j.gam(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dt(e,new C.fgT(),v).c_(0,new C.fgU())
t=A.db(u,u.$ti.k("J.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Gb(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.ko){m=q.e
m=!new A.K(m,A.h_j(),A.U(m).k("K<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gaf(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.hZQ(l,v)
o=C.Gb(k,w)
p=v.d
s.n(0,u,o===w?k.baJ(p,D.tG):k.baJ(p,v.y))}j=s.$ti.k("bc<2>")
j=A.C(new A.bc(s,j),j.k("J.E"))
B.d.b0(j,new C.fgV())
return j},
Qj(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Qj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$Qj)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fj8(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.au("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.R.ao(s,null)),$async$Qj)
case 3:return A.h(null,v)}})
return A.i($async$Qj,v)},
aO_(d,e){return C.hW9(d,e)},
hW9(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aO_=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lN("family_trees",A.a([C.heH(e,d)],p),null,B.cH),$async$aO_)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lN("family_trees",A.a([C.heI(e,d)],p),null,B.cH),$async$aO_)
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
return A.i($async$aO_,v)},
aO0(d,e){return C.hWa(d,e)},
hWa(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aO0=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("K<1,a4<n,@>>")
m=n.k("ak.E")
l=A.C(new A.K(e,new C.fnW(d),n),m)
r=l
w=7
return A.b(A.lN("family_trees",r,null,B.cH),$async$aO0)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.K(e,new C.fnX(d),n),m)
p=k
w=8
return A.b(A.lN("family_trees",p,null,B.cH),$async$aO0)
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
return A.i($async$aO0,v)},
fc_(d){return C.hO0(d)},
hO0(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fc_=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.QH("family_trees",A.F(["id",d],x.N,x.z),null,B.cH),$async$fc_)
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
return A.i($async$fc_,v)},
qU:function qU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lg:function lg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cvQ:function cvQ(){},
cvP:function cvP(){},
cvN:function cvN(){},
cvO:function cvO(){},
Hj:function Hj(d,e){this.a=d
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
ak8:function ak8(d,e){this.a=d
this.b=e},
fqc:function fqc(){},
fOn:function fOn(d){this.a=d},
foD:function foD(d){this.a=d},
kB:function kB(d,e,f,g,h,i,j,k,l,m){var _=this
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
bN1:function bN1(){},
bN0:function bN0(){},
bMY:function bMY(){},
bMZ:function bMZ(){},
bN_:function bN_(){},
fge:function fge(){},
fbW:function fbW(){},
fbX:function fbX(){},
fbY:function fbY(){},
fGk:function fGk(){},
fGl:function fGl(){},
fGm:function fGm(){},
fGn:function fGn(d){this.a=d},
fGo:function fGo(){},
fOl:function fOl(d){this.a=d},
fqE:function fqE(d){this.a=d},
ftc:function ftc(){},
ftd:function ftd(){},
fte:function fte(){},
ftf:function ftf(){},
ftg:function ftg(d){this.a=d},
fG7:function fG7(d){this.a=d},
fOg:function fOg(){},
fOh:function fOh(){},
fOi:function fOi(d){this.a=d},
fql:function fql(d){this.a=d},
fqm:function fqm(d){this.a=d},
fOr:function fOr(){},
fpS:function fpS(d){this.a=d},
fpT:function fpT(d,e){this.a=d
this.b=e},
fpU:function fpU(){},
fNY:function fNY(d){this.a=d},
ftZ:function ftZ(){},
fG0:function fG0(){},
ft9:function ft9(){},
fta:function fta(){},
ftb:function ftb(){},
fFW:function fFW(d){this.a=d},
fct:function fct(){},
fcu:function fcu(){},
fcv:function fcv(){},
fcw:function fcw(){},
fcx:function fcx(){},
fcK:function fcK(){},
fcL:function fcL(d){this.a=d},
fcH:function fcH(d){this.a=d},
fcI:function fcI(){},
fcJ:function fcJ(){},
fgT:function fgT(){},
fgU:function fgU(){},
fgV:function fgV(){},
fj8:function fj8(){},
fnW:function fnW(d){this.a=d},
fnX:function fnX(d){this.a=d},
cvR:function cvR(d,e){this.a=d
this.b=e},
cvS:function cvS(d,e){this.a=d
this.b=e},
aGb:function aGb(d,e,f){this.a=d
this.b=e
this.c=f},
b7O:function b7O(){this.b=this.a=0},
b7N:function b7N(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
buV:function buV(){},
wE(d,e){var w,v
if(d==null)return""
w=d.bS()
v=""+w.gce()+"/"+w.gcu()+"/"+w.gcj()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gn9()),2,"0")+":"+B.a.aT(B.o.u(w.gG1()),2,"0")},
hEK(){var w,v=$.pp(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aC(32)]
return"WS"+B.d.fY(u)},
arI(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$arI=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arI)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f3("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bH),$async$arI)
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
return A.i($async$arI,v)},
arJ(d){return C.hEL(d)},
hEL(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$arJ=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arJ)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hD("ngmy_worksheet_project_qr_stashes_v1",A.F(["stashes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cH,null),$async$arJ)
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
return A.i($async$arJ,v)},
arL(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$arL=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arL)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hEK()
w=4
return A.b(C.arI(),$async$arL)
case 4:r=h
q=B.a.i(e)
p=B.dJ.aJ(t)
J.aF(r,s,A.F(["ownerEmail",q,"projectId",f,"payload",B.cS.gcw().aJ(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(C.arJ(r),$async$arL)
case 5:u=new A.a_G("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arL,v)},
arK(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$arK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c3(),$async$arK)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.arI(),$async$arK)
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
return A.b(C.arJ(q),$async$arK)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arK,v)},
h99(){var w=new A.S(Date.now(),0,!1).a6()
return"wst_"+(1000*w.a+w.b)+"_"+B.cI.aC(999999)},
hEM(d){var w,v,u,t,s,r,q
try{w=A.afW(d)
if(w==null)return d
v=w
if(J.L0(v)>960||J.L_(v)>960){s=v
r=J.L0(v)>=J.L_(v)?960:null
v=A.afV(s,J.L_(v)>J.L0(v)?960:null,B.NM,r)}s=v
u=A.alw(82).SE(s,B.yy)
if(J.ad(u)===0)return d
s=new Uint8Array(A.ce(u))
return s}catch(q){t=A.aa(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cfh(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cfh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hEM(e)
$.cfd.n(0,s,t)
u=C.bCp(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfh,v)},
b1u(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1u=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d_(l,"data:image")){u=null
w=1
break}t=4
r=J.f0(l,",")?B.d.gal(J.lp(l,",")):l
q=B.cG.aJ(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.h99()
w=7
return A.b(C.cfh(p,q),$async$b1u)
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
return A.i($async$b1u,v)},
cfe(d){var w=0,v=A.j(x.T),u,t,s
var $async$cfe=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cfg(s),$async$cfe)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcw().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfe,v)},
a8_(d){var w=0,v=A.j(x.H),u,t
var $async$a8_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hlR(d)
if(t==null){w=1
break}$.cfd.W(0,t)
w=3
return A.b(C.bCo(t),$async$a8_)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8_,v)},
bCp(d,e){return C.i4W(d,e)},
i4W(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bCp=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aMW
w=7
return A.b(n==null?$.aMW=I.fWU():n,$async$bCp)
case 7:r=g
q=new Uint8Array(A.ce(e))
p=J.mF(r,"thumbs","readwrite")
B.iE.mh(J.mD(p,"thumbs"),q,l)
w=8
return A.b(J.ps(p),$async$bCp)
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
return A.i($async$bCp,v)},
bCo(d){return C.i4U(d)},
i4U(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bCo=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aMW
w=7
return A.b(o==null?$.aMW=I.fWU():o,$async$bCo)
case 7:r=f
q=J.mF(r,"thumbs","readwrite")
B.iE.Fx(J.mD(q,"thumbs"),m)
w=8
return A.b(J.ps(q),$async$bCo)
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
return A.i($async$bCo,v)}},D,Ak,Al,A0,Am,An,Ao,I
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
A3=c[109]
A4=c[221]
A5=c[104]
A6=c[188]
S=c[117]
T=c[105]
A7=c[218]
A8=c[37]
M=c[217]
A9=c[80]
H=c[87]
Aa=c[157]
Ab=c[114]
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
Ai=c[106]
K=c[182]
Aj=c[193]
Z=c[234]
A_=c[227]
O=c[107]
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
C.anF.prototype={}
C.aXQ.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bf1(),f=h.x!=null&&h.yU(i).length===0
if(h.x!=null)w=f?B.aZ:B.bG
else w=h.gTg()?B.bG:B.dT
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.bem,B.q,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.eJH,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h6,i,i,i),B.S,D.fc_,B.at,A.d(C.wE(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.f7V,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.aZM,i,i,i,i,B.Yn,i,i,i)
q=A.m(16)
p=A.I(B.aL,B.q,1)
o=A.I(B.aZ.j(0.28),B.q,1)
n=A.fYU(h.d)
o=A.p(B.A,C.aXP(A.fwm(h.e,n),30),B.f,i,i,new A.o(B.lG,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.f3m,B.L,i,i)
m=A.m(14)
l=A.I(B.aL,B.q,1)
q=A.p(i,A.v(A.a([o,B.N,n,B.bB,D.fch,B.ac,A.p(i,A.v(A.a([D.fry,B.bB,A.d(A.Ay(h.c),i,i,i,i,i,i,D.eZn,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.f7,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,K.ah5,i,i,i)
p=A.m(16)
m=A.I(B.aL,B.q,1)
l=j.aPz("Original due",C.wE(h.r,!1))
n=j.aPz("Current due",C.wE(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.p(i,A.v(A.a([l,B.N,n,B.S,A.p(i,A.d(h.gaJL(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.AV,i,i,1/0),B.S,j.cdk(),B.N,j.c0Z(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bk,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aL,B.q,1)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fdd,B.at,A.d(q,i,i,i,i,i,i,D.f2E,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bk,i,i,1/0)],s))}if(h.gaEB()){q=A.m(14)
o=A.I(B.cq,B.q,1.6)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fsP,B.N,A.bw(A.m(12),A.el(new A.a7(1/0,88,A.b3(i,i,i,new A.Vv(h.ax,B.M,D.eNs,!0,3.5,i),B.au),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.F3,i,i,i)],s))}p.push(B.aB)
p.push(D.fl7)
return A.p(i,A.v(A.a([r,new A.D(B.ah8,A.v(p,B.aj,i,B.e,B.j,0,B.p),i)],s),B.aj,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aPz(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.a7G,w,w,w),1),A.d(e,w,w,w,w,w,w,D.f_m,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
cdk(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a8G(B.dT,u,"Not paid yet")
w=t.yU(null).length
v=w===0?B.aZ:B.bG
return this.a8G(v,u,C.wE(t.x,!0))},
c0Z(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a8G(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a8G(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a7G,u,u,u)
v=A.U(d).k("K<1,hj>")
v=A.C(new A.K(d,new C.c15(),v),v.k("ak.E"))
return A.v(A.a([w,B.am,A.bW(B.bz,v,B.bq,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a8G(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.a7G,w,w,w),1),new A.dq(1,B.cn,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dM,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b9X.prototype={
a4(d,e){new A.Vv(this.b,B.M,e,!0,3.5,null).a4(d,e)},
ar(d){return d.b!==this.b}}
C.anM.prototype={
R(){return new C.aC2(A.a([],x.bp))},
ge_(){return this.c}}
C.aC2.prototype={
a_(){this.a1()
this.Io()},
Io(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Io=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1s(t.a.c),$async$Io)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dFh(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Io,v)},
aRw(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aP,s=A.l(v,v,u?B.br:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.br:B.bn).j(0.22)
w=A.m(10)
return A.bs(v,new A.b4(4,r,new A.ay(u,1,B.q,-1)),v,B.bk,v,v,v,v,!0,new A.b4(4,w,new A.ay((this.a.d.a?B.br:B.bn).j(0.22),1,B.q,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.m(10),D.aXn),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aRv(d){return this.aRw(d,null)},
OY(d){return this.cgU(d)},
cgU(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OY=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Gj:B.eG
w=7
return A.b(new A.hY().BT(72,900,900,n),$async$OY)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fi(),$async$OY)
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
b_0(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aP,o=A.m(10),n=A.I((q?B.br:B.bn).j(0.18),B.q,1)
if(d)q=B.cY
else q=s.a.d.a?B.br:B.bn
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.aA,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cY
else u=s.a.d.a?B.br:B.bn
t=x.p
u=A.E(A.v(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a5,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fv(r,r,r,r,r,r,r,r,r,r,r,B.cY,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cb)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cD,s.a.d.a?B.br:B.bn,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cb))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.kn,D.bq7,r,r,r)},
CS(d){return this.byf(d)},
bye(){return this.CS(null)},
byf(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CS=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.as(new A.bb(a4,B.b4,B.aN),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jZ(a4)
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
i=a3?null:A.fYU(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.w_?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hT(B.w.j(0.55),!0,"Dismiss",a4,new C.dF0(),new C.dF1(a2,t,a5,r,new C.dF2(a2,t),o,n,j),B.eF,!0,x.y),$async$CS)
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
break}if(f.length===0||e<=0){t.c.I(x.q).f.S(D.eTN)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.S(D.eSs)
w=1
break}a1=A.fwm(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.w_?"male":"female"
w=7
return A.b(A.ahk(a3,A.h5T(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$CS)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.w_?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a9(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c1(a3.gcj(),a3.gce(),a3.gcu(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcj(),a4.gce(),a4.gcu(),0,0,0,0,0)))a5.cJH(a2.a)
w=8
return A.b(A.ahk(t.a.c,a5),$async$CS)
case 8:case 5:w=9
return A.b(t.Io(),$async$CS)
case 9:case 1:return A.h(u,v)}})
return A.i($async$CS,v)},
aS8(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cY.j(0.14)
else w=this.a.d.a?B.M:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cY
else s=(this.a.d.a?B.br:B.bn).j(0.2)
s=A.I(s,B.q,g?1.5:1)
r=C.aXP(d,18)
if(g)q=B.cY
else q=this.a.d.a?B.aP:B.aA
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,A.p(p,A.B(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.bb,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ag)},
RC(d){return this.cyl(d)},
cyl(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$RC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hT(B.w.j(0.55),!0,"Dismiss",s,new C.dFk(),new C.dFl(t,d),B.hY,!0,x.y),$async$RC)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.S(s,0,!1)
case 4:w=7
return A.b(A.ahk(t.a.c,d),$async$RC)
case 7:w=8
return A.b(t.Io(),$async$RC)
case 8:case 1:return A.h(u,v)}})
return A.i($async$RC,v)},
NC(d,e){return this.bJ1(0,e)},
bJ1(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.l1(s,"Cancel","Delete",e.b+" \xb7 "+A.Ay(e.c)+" will be removed from this device.","Delete this debt?"),$async$NC)
case 3:if(!g){w=1
break}w=4
return A.b(C.fqs(t.a.c,e.a),$async$NC)
case 4:w=5
return A.b(t.Io(),$async$NC)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NC,v)},
ae9(d){return this.caN(d)},
caN(d){var w=0,v=A.j(x.H),u=this,t
var $async$ae9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bR(B.K,null,new C.dFe(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ae9)
case 2:return A.h(null,v)}})
return A.i($async$ae9,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.e6B
w=J.dH(m.d,new C.dFm())
v=A.C(w,w.$ti.k("J.E"))
w=J.dH(m.d,new C.dFn())
u=A.C(w,w.$ti.k("J.E"))
t=B.d.cI(v,0,new C.dFo())
w=A.m(18)
s=m.a.d.a
r=s?D.cn0:D.axk
q=A.I(s?B.cY.j(0.35):B.cY.j(0.18),B.q,1)
s=A.p(l,D.bPB,B.f,l,l,new A.o(B.cY.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.av,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aA,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a1,!0,A.m(12),A.aL(!1,A.m(12),!0,D.e6_,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dFp(m),l,l,l,l,l,l,l),B.f,B.cY,0,l,l,l,l,l,B.ag)],p),B.m,l,B.e,B.j,0,l,l)
o=A.E(m.cuA("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Ay(t)
r=A.a([A.p(l,A.v(A.a([s,B.ac,A.B(A.a([o,B.ab,A.E(m.b58(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.ax,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.ah1,l,l,l),B.aB],p)
if(J.cm(m.d)){w=m.a.d.a
s=w?B.dX:B.c
q=A.m(18)
o=A.I((w?B.br:B.bn).j(0.12),B.q,1)
n=A.p(l,D.bKw,B.f,l,l,new A.o(B.cY.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aA,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.ac,w,B.at,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.br:B.bn,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bsw,l,l,1/0))}else{w=m.gcgc()
s=A.C(new A.K(v,w,A.U(v).k("K<1,r>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bua,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.br:B.bn,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.K(u,w,A.U(u).k("K<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.aj,l,B.e,B.j,0,B.p)},
b58(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.br:B.bn).j(0.12),B.q,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.br:B.bn,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cY
else w=v.a.d.a?B.aP:B.aA
return A.p(u,A.v(A.a([q,B.bB,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ei,u,u,u)},
cuA(d,e){return this.b58(!1,d,e)},
cgd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.yU(j).length,h=d.bee()
if(d.x!=null){w=d.yU(j).length
v=w===0?B.cY:B.bG}else if(d.gTg())v=B.bG
else{if(h)w=B.cY
else w=k.a.d.a?B.br:B.bn
v=w}if(d.x!=null){w=d.yU(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wE(u,!1)}else{u.toString
t="Paid "+C.wE(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wE(w,!1)+" \xb7 "+i+" missed":"Due "+C.wE(w,!1)}w=k.a.d.a?B.dX:B.c
u=A.m(18)
if(d.gTg()&&d.x==null)s=B.bG.j(0.35)
else s=(k.a.d.a?B.br:B.bn).j(0.12)
s=A.I(s,B.q,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bm:B.lG
o=A.I(d.gTg()&&d.x==null?B.bG.j(0.45):B.cY.j(0.28),B.q,1.4)
n=d.x!=null?0.55:1
m=A.fYU(d.d)
o=A.p(B.A,A.dc(C.aXP(A.fwm(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.aA
m=x.p
n=A.a([new A.dq(1,B.cn,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaEB())B.d.v(n,A.a([B.ec,A.X(B.MR,B.cY.j(0.8),j,j,j,14)],m))
p=A.E(A.v(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.cV,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.Ay(d.c)
l=k.a.d.a?B.aP:B.aA
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aG(!1,B.a1,!0,j,A.aL(!1,q,!0,new A.D(V.agM,A.B(A.a([o,B.bf,p,B.ab,A.v(A.a([n,B.bB,A.X(B.ex,(k.a.d.a?B.br:B.bn).j(0.5),j,j,j,18)],m),B.dz,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dFg(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ag),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.db,j,j,j,j)}}
C.u7.prototype={}
C.ak7.prototype={
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
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cA,16)],x.V)
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
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.atN,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.Fk,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f4(m,A.B(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.eh)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bpl,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cF:B.bl,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fr,A.v(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.eOc)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.vi,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a3,B.a7,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lg,A.v(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.q,1),a2,a0,a0,B.n),a0,a0,a0,B.hm,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.ax,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bqx,a0,a0,a0,a0)}}
C.aTD.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bg?B.bg:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bl:B.cF,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.j,0,q,q),B.cV,n],m)
if(p.z)o.push(new A.D(B.vf,n,q))
return new A.D(B.db,A.v(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.Sj.prototype={
R(){return new C.bdz()}}
C.bdz.prototype={
gbX0(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.e6w,D.e6C],l)
for(w=0;w<8;++w){v=D.a1o[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.G3:B.BD
q=t===s
r=A.X(r,q?B.eA:B.c1,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.x(v.b,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bD(1,B.bh,new A.x(v.c,n,A1.D9,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aT(24,24)
p=new A.ay(B.eA,2,B.q,-1)
s=new A.o(n,n,new A.bO(p,p,p,p),new A.bp(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aE(n,new A.D(B.eB,A.v(A.a([new A.D(B.mp,new A.cn(B.aO,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.DF(!0,new C.ak7(v,q.d,q.e,new C.d55(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d56(o,v),n,n,n,n,n,n,!1,B.a8))}k.push(new A.D(D.bqQ,A.bG(D.fy6,new C.d57(o,d),A.bl(B.b7,n,n,n,n,B.oe,n,n,new A.b7(A.m(16),B.Y),n,n,n)),n))
return A.bm(!0,new A.cS(new A.aY(0,1/0,0,m.a.b*0.9),A.cz(k,n,D.bv2,n,n,B.ah,!0),n),!0,!1,B.af,!0,!0)}}
C.n9.prototype={
ag(){var w=this
return A.F(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a6().ac()],x.N,x.z)},
baV(d,e,f){return new C.n9(this.a,e,d,f)}}
C.Hi.prototype={
wd(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Hi(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aCO(d){var w=null
return this.wd(w,w,w,w,w,d,w,w,w,w,w,w)},
cFv(d){var w=null
return this.wd(w,w,w,w,d,w,w,w,w,w,w,w)},
baT(d,e,f){var w=null
return this.wd(d,w,w,w,w,w,w,w,e,w,f,w)},
cG9(d){var w=null
return this.wd(w,w,w,w,w,w,d,w,w,w,w,w)},
cGi(d){var w=null
return this.wd(w,w,w,w,w,w,w,w,w,d,w,w)},
cFt(d){var w=null
return this.wd(w,w,w,d,w,w,w,w,w,w,w,w)},
cGk(d){var w=null
return this.wd(w,w,w,w,w,w,w,w,w,w,w,d)},
cFq(d){var w=null
return this.wd(w,w,d,w,w,w,w,w,w,w,w,w)},
cFl(d){var w=null
return this.wd(w,d,w,w,w,w,w,w,w,w,w,w)},
Fq(d){var w=null
return this.wd(w,w,w,w,w,w,w,d,w,w,w,w)},
cGs(d,e,f,g,h,i,j,k,l,m,n){return this.wd(d,e,f,g,null,h,i,j,k,l,m,n)},
ag(){var w=this
return A.F(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cD7(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bMX(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Ch.ged(D.Ch))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a2X)
q=l.$2("frame",D.a2m)
l=l.$2("texture",D.a2h)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cGs(p,u,t,q,r,A.qK(d.h(0,"ribbon"))?A.FN(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.YR.prototype={
R(){return new C.az6(A.a([],x.I),D.Mp)},
ge_(){return this.c}}
C.az6.prototype={
a_(){var w,v=this
v.a1()
v.f=A.zo(0,1)
w=$.aw()
v.z=new A.as(B.as,w)
v.Q=new A.as(B.as,w)
v.kT()
w=v.a
C.bAN(w.c,w.d).bB(new C.d5M(v),x.fL)},
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
return A.b(C.Ku(s.c,s.d),$async$kT)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d5A(t,r))
t.auG()
case 1:return A.h(u,v)}})
return A.i($async$kT,v)},
gark(){var w,v=this
if(!J.cm(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
auG(){var w,v,u=this.gark(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saV(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saV(0,w==null?"":w)},
c9d(d){this.m(new C.d5x(this,d))
this.auG()},
MY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$MY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.n9(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aPN(r.c,r.d,s),$async$MY)
case 3:w=4
return A.b(t.kT(),$async$MY)
case 4:if(t.c==null||J.cm(t.d)){w=1
break}q=J.qb(t.d,new C.d58(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d59(t,p))
t.auG()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.AW(p+1,B.ct,B.kL),$async$MY)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$MY,v)},
AC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gark()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aPN(o.c,o.d,new C.n9(s,r,q,new A.S(p,0,!1))),$async$AC)
case 3:w=4
return A.b(t.kT(),$async$AC)
case 4:if(t.c==null){w=1
break}t.m(new C.d5B(t))
case 1:return A.h(u,v)}})
return A.i($async$AC,v)},
ND(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ND=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gark()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d5h(r),s,null,!0,!0,x.y),$async$ND)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bAy(s.c,s.d,r.a),$async$ND)
case 4:t.m(new C.d5i(t))
w=5
return A.b(t.kT(),$async$ND)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Tj(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$ND,v)},
yd(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AC(),$async$yd)
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
return A.b(C.QA(s,r.r,o,p,q),$async$yd)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a5(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hmk(s,r.x,r.r),$async$yd)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Ku(s.c,s.d),$async$yd)
case 10:l=e
for(s=n.d,r=J.cG(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.L(l,new C.n9(""+(m+k),q,B.a.i(j.b),new A.S(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.AH(r.c,r.d,l),$async$yd)
case 11:w=12
return A.b(t.kT(),$async$yd)
case 12:r=t.c
if(r==null){w=1
break}r.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yd,v)},
a_V(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_V=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AC(),$async$a_V)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyb(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dL(D.yF,new C.d5y(t),new C.d5z())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mp("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gT(o)
p.push(new F.mp(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.h_x(o,new F.re(s,r,"",p,new F.uq(q.d,null,null,null,null,"","","")),null),$async$a_V)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a_V,v)},
Nl(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Nl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AC(),$async$Nl)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bR(D.aco,null,new C.d5d(t),s,!0,!0,!0,P.a5T,!1,!1,x.N),$async$Nl)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cFv(r)
t.m(new C.d5e(t,q))
s=t.a
w=7
return A.b(C.R8(s.c,s.d,q),$async$Nl)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Nl,v)},
Wv(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bR(D.aco,null,new C.d5j(t),r,!0,!0,!0,P.a5T,!1,!1,x.e),$async$Wv)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d5k(t,s))
r=t.a
w=4
return A.b(C.R8(r.c,r.d,s),$async$Wv)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.AW(0,B.dU,B.oE)
case 1:return A.h(u,v)}})
return A.i($async$Wv,v)},
bOe(d){var w=d.bS(),v=B.a.aT(B.o.u(w.gce()),2,"0"),u=B.a.aT(B.o.u(w.gcu()),2,"0")
return""+w.gcj()+"-"+v+"-"+u},
gyb(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bWg()
if(r.e)w=D.abb
else if(J.cm(r.d)){w=r.y
v=r.gyb(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eYQ,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.D(A_.ai2,new C.Y9(w,v,0,q),q),q),B.by,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kf.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aE(q,A.p(q,D.eJx,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dQ.j(0.45),B.J,18)],x.V),E.vQ,B.n),q,q,q,q,B.Yx,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcCf(),q,q,q,q,q,q,!1,B.a8))
w.push(B.S)
w.push(A.hf(D.bGM,D.fxA,r.gaLu(),q))
B.d.v(u,w)}w=A.av(A.cd(A.v(u,B.m,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.ew,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kf.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dR:B.A4
u=A.v(A.a([new A.D(D.brQ,w,q),A.E(A.IC(v,new C.d5K(r),J.ad(r.d)+1,q,r.gc9c(),u,B.aO),1),r.bB8()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c8(q,D.adI,new A.an(B.W,q,B.b0,B.r,A.a([D.aKz,A.bm(!0,A.v(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bWg(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cy(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.JB(B.dW,"AI",h.gbz1(),!0))
if(h.a.f)f.push(new C.JB(B.nf,"Cover",h.gbJB(),!1))
if(h.a.f)f.push(new C.JB(B.yi,"Header",h.gbEz(),!1))
if(J.cy(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.JB(B.tV,"Print",h.gcid(),!1))
if(h.a.f&&J.cy(h.d)&&h.r>=0){v=h.w
u=v?B.hA:B.jh
t=v?"Save":"Edit"
f.push(new C.JB(u,t,v?h.gcor():new C.d5u(h),!1))}if(h.a.f)f.push(new C.JB(B.hz,"Add page",h.gaLu(),!1))
v=C.hix(h.y.Q)
u=h.gyb(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.dnC
else{k=new A.aT(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.jP.j(0.5),1,B.q,-1)
j=A.p(g,A.X(l.a,D.kf,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bO(i,i,i,i),new A.bp(k,k,k,k),g,new A.a8(B.a3,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kf.j(0.85)
p.push(new A.bD(1,B.bh,A.aE(B.c4,A.v(A.a([k,B.bB,new A.x(l.b,g,new A.G(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a8),g))}return new C.ak7(v,u,t+" \xb7 "+s+" "+r,new C.d5v(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
zF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AC(),$async$zF)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=F.a1H(B.d.aI(s," "))
s=t.c
s.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.d5a(t,p),s,null,!0,!0,x.N),$async$zF)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.yd(),$async$zF)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Ds(),$async$zF)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.F2("Swahili (Kiswahili)",!0),$async$zF)
case 18:w=16
break
case 17:w=19
return A.b(t.cyZ(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zF)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zF,v)},
Yn(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(E.jP.j(0.3),B.q,1),r=x.p
return new A.D(B.cC,A.aL(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.vQ,B.a6),w,42,w,w,w,w,w,42),B.bf,A.E(A.v(A.a([A.d(f,w,w,w,w,w,w,A9.Td,w,w,w),A.d(g,w,w,w,w,w,w,A3.T7,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d5w(d,h),w,w,w,w,w,w,w),w)},
Ds(){return this.bNJ()},
bNJ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Ds=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d5n(r),a7,null,!0,!0,x.ei),$async$Ds)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eS("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.ca(null,null,!1,null,new C.d5o(o),a7,null,!0,!0,x.H).fe(new C.d5p(a6))
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
for(a1=0;a1<8;++a1){i=D.yF[a1]
J.ch(j,i.a)}w=8
return A.b(C.agu(a0,a7,new C.d5q(o),d,l,e,j),$async$Ds)
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
l.shU($.aw())
J.aQd(l,0)
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
a7=j.baV(m.b.h(0,a4).b,a7,new A.S(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.AH(j.c,j.d,l),$async$Ds)
case 11:w=12
return A.b(r.kT(),$async$Ds)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.yF[a1].a)
a5=l.cD7(j,12,a7)
l=r.a
w=15
return A.b(C.R8(l.c,l.d,a5),$async$Ds)
case 15:if(r.c!=null)r.m(new C.d5r(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.AW(0,B.dU,B.oE)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.I(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.S(A.b2(a3?A.cql("Undo",new C.d5s(r,p,f),null):null,null,null,null,null,B.r,null,j,null,B.ee,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ds,v)},
F2(d,e){return this.cz_(d,e)},
cyZ(d){return this.F2(d,!1)},
cz_(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$F2=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eS("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.ca(null,null,!1,null,new C.d5D(a0),k,null,!0,!0,x.H).fe(new C.d5E(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.ch(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a1U(m,new C.d5F(a0)),$async$F2)
case 10:w=8
break
case 9:w=11
return A.b(C.bCg(new C.d5G(a0),m,a2),$async$F2)
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
o.shU($.aw())
J.aQd(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.I(x.q).f
k=q
o.S(A.b2(null,null,null,null,null,B.r,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.baV(J.q(p,g).b,j.a,new A.S(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.AH(k.c,k.d,o),$async$F2)
case 12:w=13
return A.b(r.kT(),$async$F2)
case 13:o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.S(A.b2(A.cql("Undo",new C.d5H(r,d),null),null,null,null,null,B.r,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$F2,v)},
bB8(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d5b(v):u
r=A.aH(u,u,u,u,A.X(D.bCs,s?D.kf:B.b3,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cy(v.d)&&!v.w&&v.r>=0)s=A.hf(A.X(B.vu,B.EI,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.EI,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbJa(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kf.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.av(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d5c(v):u
return A.bm(!0,new A.D(D.brE,A.B(A.a([r,s,A.aH(u,u,u,u,A.X(B.ex,t<J.ad(v.d)?D.kf:B.b3,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.YV.prototype={
R(){return new C.bdU(new A.as(B.as,$.aw()))}}
C.bdU.prototype={
ga12(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a2()},
gbMt(){var w,v=this.ga12()
A:{if("cover"===v){w=D.cT7
break A}if("book"===v){w=D.cOW
break A}w=D.dgk
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jP.j(0.5),n=x.p,m=A.B(A.a([D.dnD,B.av,D.bx1,A.aH(q,q,q,q,B.ln,q,q,q,new C.d7w(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.j6(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d7x(r),r.ga12()==="page",q,q,q,q))
if(r.a.d)l.push(A.j6(q,q,q,D.fsl,q,new C.d7y(r),r.ga12()==="book",q,q,q,q))
l.push(A.j6(q,q,q,D.ffQ,q,new C.d7z(r),r.ga12()==="cover",q,q,q,q))
l=A.bW(B.bz,l,B.bq,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.T,!1,q,!0,B.r,q,A.aN(),r.d,q,q,q,q,q,2,A.bs(q,new A.b4(4,A.m(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kC,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dn,!0,B.a4,q,B.an,q,q,q,q)
w=A.a([],n)
for(v=r.gbMt(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mG(q,B.c.j(0.08),new A.x(s,q,B.IN,q,q,q,q,q,q,q,q,q),B.hE,new C.d7A(r,s),q,q,q,q))}return A.eI(q,E.AA,A.cd(A.v(A.a([m,B.S,D.fvx,B.am,l,B.ac,k,B.N,A.bW(B.bz,w,B.bq,6,6),B.aB,A.dk(D.bGJ,D.fwi,new C.d7B(r,d),A.bl(B.b7,q,q,q,q,B.oe,q,q,new A.b7(A.m(16),B.Y),q,q,q)),B.at,D.fqH],n),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.fA,q,q,B.ah),q,q,q,D.ahM,B.d0,q,new A.b7(p,new A.ay(o,1.4,B.q,-1)),q)}}
C.YT.prototype={
R(){return new C.az7(A.a([],x.Y))},
ge_(){return this.c}}
C.aeg.prototype={}
C.az7.prototype={
a_(){this.a1()
this.kT()},
kT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.QD(p.c,p.d),$async$kT)
case 3:o=e
n=A.a([],x.Y)
p=J.aV(o)
case 4:if(!p.C()){w=5
break}s=p.gT(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bAN(r.c,q),$async$kT)
case 6:j=e
i=J
w=7
return A.b(C.Ku(t.a.c,q),$async$kT)
case 7:m.push(new l.aeg(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d60(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kT,v)},
b6j(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
PE(d,e){return this.caL(0,e)},
caL(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$PE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a5(s,!1).c8(A.ea(new C.d6_(u,e),!0,null,x.y)),$async$PE)
case 2:t=g
w=3
return A.b(u.kT(),$async$PE)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.S(D.aNY)
return A.h(null,v)}})
return A.i($async$PE,v)},
F5(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$F5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.S(D.aNU)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.afO(s.c,s.d),$async$F5)
case 5:q=e
w=6
return A.b(t.kT(),$async$F5)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.PE(0,B.d.i1(t.d,new C.d64(q))),$async$F5)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.QA(p,s.f,r,n,o),$async$F5)
case 10:m=e
w=11
return A.b(t.kT(),$async$F5)
case 11:if(m&&t.c!=null)t.c.I(x.q).f.S(D.aNY)
case 1:return A.h(u,v)}})
return A.i($async$F5,v)},
P8(d,e){return this.cm9(0,e)},
cm9(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$P8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d63(t,e),s,null,!0,!0,x.y),$async$P8)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a26(s.c,s.d,e.a),$async$P8)
case 4:w=5
return A.b(t.kT(),$async$P8)
case 5:case 1:return A.h(u,v)}})
return A.i($async$P8,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bBb(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(E.jP.j(0.6),B.q,1.6)
r=t===1?"space":"spaces"
k.push(A.aE(n,new A.fG(0.7142857142857143,A.p(n,A.v(A.a([D.dnE,B.ac,D.e5F,B.at,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kf.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.bb,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcCb(),n,n,n,n,n,n,!1,B.a8))}w=A.m(22)
v=A.I(E.jP.j(0.85),B.q,1.6)
s=A.aE(n,A.p(n,D.bOo,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jP.j(0.6),B.q,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d65(d),n,n,n,n,n,n,!1,B.a8)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.jP.j(0.5),B.q,1)
w=A.p(n,A.B(A.a([s,B.bf,D.bxn,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eXW,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h6,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bU_,B.n),n,n,n,Am.LT,D.bpN,n,n,n)
if(o.e)k=D.abb
else k=k.length===0?D.b3K:A.cp(new C.d66(k))
return A.c8(n,D.adI,new A.an(B.W,n,B.b0,B.r,A.a([D.aKz,A.bm(!0,A.v(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bBb(d){var w,v,u=this,t=null,s=u.b6j(d),r=d.c,q=x.p,p=A.a([A.bZ(0,A.f4(B.A,new A.a7(300,420,new C.Y9(d.b,s,r,t),t),B.f,B.du),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aE(t,A.p(t,D.bNH,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b3,B.q,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d5Y(u,d),t,t,t,t,t,t,!1,B.a8),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.eXw,t,t,t)
v=r===1?"page":"pages"
return A.aE(t,A.v(A.a([new A.fG(0.7142857142857143,new A.an(B.W,t,B.aa,B.r,p,t),t),B.N,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kf.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d5Z(u,d),t,t,t,t,t,t,!1,B.a8)}}
C.JB.prototype={}
C.Y9.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dL(D.yF,new C.cEB(m),new C.cEC()),j=m.c,i=D.Ch.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.lV:B.bb
v=new C.cED(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.e2Z,28)],x.V)
u=x.p
t=A.a([A.bZ(0,A.b3(l,l,l,new C.bb9(j.x,h,l),B.au),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a3,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aT(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bp(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.ai3,8,0.85,2.2),v.$4(D.but,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.ai3,8,0.85,2.4))
else if(r==="corners")t.push(A.bZ(0,new A.D(D.bup,A.b3(l,l,l,new C.bb0(h,l),B.au),l),0,0,0))
r=A.X(D.awp[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.atN,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cF,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aQ,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bZ(0,new A.D(D.buV,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aG6(l),D.eNl),l,l,l,46,0,l))
return A.p(l,A.bw(D.a9T,new A.an(B.W,l,B.aa,B.r,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.a9T,i,new A.a8(B.ax,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bb9.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eL()
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
ar(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bb0.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.W(),k=A.N(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bO
for(w=e.a,v=e.b,v=[D.eEy,new A.cD([w,0,-1,1]),new A.cD([0,v,1,-1]),new A.cD([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
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
ar(d){return!d.b.A(0,this.b)}}
C.u8.prototype={}
C.Yr.prototype={
R(){return new C.bb7()}}
C.bb7.prototype={
go1(){var w=this.d
return w===$?this.d=this.a.c:w},
gyb(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.as(new A.bb(w.b,B.b4,B.aN),$.aw())}return v},
gaA2(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.as(new A.bb(w.c,B.b4,B.aN),$.aw())}return v},
gapT(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.as(new A.bb(w.y,B.b4,B.aN),$.aw())}return v},
q(){var w=this,v=w.gyb(0),u=v.U$=$.aw()
v.P$=0
v=w.gaA2()
v.U$=u
v.P$=0
v=w.gapT()
v.U$=u
v.P$=0
w.a2()},
aqv(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.j6(s,s,s,new A.x(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cY2(this,f,u),e===u,s,s,s,s))}return A.bW(B.bz,r,B.bq,6,8)},
aw7(d){var w=null,v=B.c.j(0.07)
return A.bs(w,new A.b4(4,A.m(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.kB,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.go1(),a0=f.gyb(0),a1=a0.a.a,a2=f.gaA2(),a3=a2.a.a,a4=f.gapT(),a5=d.baT(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a7(190,260,A.f4(B.A,new A.a7(270,370,new C.Y9(a5,d,f.a.e,e),e),B.f,B.du),e),e,e,e)
a0=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a0,e,e,e,e,e,2,f.aw7("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYr(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dn,!0,B.a4,e,B.an,e,e,e,e)
a2=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a2,e,e,e,e,e,2,f.aw7("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYs(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dn,!0,B.a4,e,B.an,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.yF[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b3
q=r.a===q
o=new A.ay(p,q?3:1,B.q,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bO(o,o,o,o),e,e,new A.a8(B.ax,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.az
v.push(A.aE(e,A.v(A.a([p,B.cV,new A.x(t.b,e,new A.G(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYt(f,t),e,e,e,e,e,e,!1,B.a8))}v=A.bW(B.bz,v,B.bq,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b7.j(0.35):B.c.j(0.07)
m=new A.aT(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eA:B.K,2,B.q,-1)
q.push(A.aE(e,A.p(e,A.X(D.awp[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bO(o,o,o,o),new A.bp(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYu(f,n),e,e,e,e,e,e,!1,B.a8))}q=A.bW(B.bz,q,B.bq,8,8)
a4=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a4,e,e,e,e,e,2,f.aw7("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYv(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dn,!0,B.a4,e,B.an,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mK,e,e,e)
m=A.a([],w)
for(l=D.Ch.gdK(D.Ch),l=l.gaf(l);l.C();){k=l.gT(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eA:B.b3
g=r.e===i
o=new A.ay(h,g?3:1,B.q,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bO(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.az
m.push(A.aE(e,A.v(A.a([j,B.bB,new A.x(i,e,new A.G(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYw(f,k),e,e,e,e,e,e,!1,B.a8))}m=A.bW(B.bz,m,B.bq,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mK,e,e,e)
k=f.go1()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bm(!0,new A.cS(new A.aY(0,1/0,0,a1.a.b*0.92),A.cz(A.a([D.fq9,B.ac,d,B.aQ,a0,B.S,a2,B.aB,D.fw6,B.N,v,B.aB,D.fqj,B.N,q,B.aB,a4,B.aB,p,B.N,m,B.aB,l,A.kX(e,9,""+B.k.V(f.go1().f),36,18,new C.cYx(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mK,e,e,e),B.am,f.aqv(D.a2X,f.go1().r,new C.cYy(f),D.dju),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mK,e,e,e),B.am,f.aqv(D.a2m,f.go1().w,new C.cYz(f),D.djz),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mK,e,e,e),B.am,f.aqv(D.a2h,f.go1().x,new C.cYB(f),D.dkZ),B.am,A.iF(e,B.b7,e,B.af,e,new C.cYC(f),e,e,e,D.fkE,f.go1().z),B.by,A.bG(D.fp0,new C.cYD(f,a6),A.bl(B.b7,e,e,e,e,B.oe,e,e,new A.b7(A.m(16),B.Y),e,e,e))],w),e,An.Yl,e,e,B.ah,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aG6.prototype={
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
u.saq(D.bUE.av(0,new A.a9(0,0,0+w,0+v)))
d.aO(t,u)},
ar(d){return!1}}
C.bgn.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=A.N()
w.saq(D.bTG.av(0,new A.a9(0,0,a3,a4)))
a5.aY(new A.a9(0,0,a3,a4),w)
v=B.k.dw(a2/112)
u=new A.eL()
u.dB(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cT6[u.aC(9)]
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
e.r=E.jP.j(0.55).gp(0)
d=e.H()
w.drawRect(A.c_(new A.a9(h,j,g,j+2)),d)
d.delete()
j=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
j.r=E.jP.j(0.4).gp(0)
d=j.H()
w.drawRect(A.c_(new A.a9(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aC(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.saq(D.bT3.av(0,new A.a9(0,r,a3,q)))
d=p.H()
w.drawRect(A.c_(new A.a9(0,r,a3,q)),d)
d.delete()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.jl
d=p.H()
w.drawRect(A.c_(new A.a9(0,q,a3,q+14)),d)
d.delete()}w=A.N()
w.r=D.b7d.j(0.72).gp(0)
a5.aY(new A.a9(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.N()
a4.saq(new A.bT(B.A,0.5,B.x,a0,0,A.a([D.bdX.j(0.22),B.K],t),a0,a0).av(0,A.bU(new A.u(w,a2),a1)))
a5.ae(new A.u(w,a2),a1,a4)},
ar(d){return!1}}
C.b9l.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aK(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.kN(new A.o(A.aq(D.kf,D.bil,w/4),o,new A.bO(B.Y,new A.ay(B.w.j(0.12),1,B.q,-1),B.Y,B.Y),B.JX,o,o,B.n),B.bd,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aGc,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aT(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jP.j(0.6),o,o,new A.bp(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.q3,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aX7,u,D.bUC,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dl,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aG6(o),D.eNg),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aTD(p.y,r,G.iv,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.r,o,o,o,o,o,2,A.bs(o,B.ez,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iv.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.fac,!0,B.a4,o,B.an,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iv.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.w,o,o,o,o,o,2,A.bs(o,B.ez,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iv.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f1o,!0,B.a4,B.zs,B.an,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fa4,o,o,o),B.at,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iv.j(0.5),o,o,o,o,o,o,o,o,11,B.cF,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.N,A.B(A.a([A.E(A.p(o,o,B.f,D.Ew.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fr,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.Ew.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.Ew.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.iv.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Xp(A.de(A.a([A.de(o,o,o,o,o,o,o,o,o,D.f4u,B.a.ap(k,0,1)),A.de(o,o,o,o,o,o,o,o,o,o,B.a.b1(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.iv.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.v(n,B.F,o,B.e,B.j,0,B.p),B.r,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hZ,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.iv.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bw(B.JX,new A.an(B.W,o,B.aa,B.r,A.a([t,new A.D(D.btX,A.v(s,B.aj,o,B.e,B.j,0,B.p),o),A.ao(0,A.c0(o,new A.o(o,o,o,o,o,new A.a8(B.a3,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bd),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.JX,v,D.bV9,B.n),o,o,o,o,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.r,l,o)}}
C.aoU.prototype={
R(){return new C.aCD(A.a([],x._))},
bp(){return this.r.$0()},
pO(){return this.w.$0()},
ge_(){return this.c}}
C.aCD.prototype={
a_(){var w,v
this.a1()
this.vK()
w=this.a
v=w.c
if(v.length!==0)C.a6J(v,w.e,w.d.w)},
vz(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h_A(r,t.e,!1,s.w,new C.dTf(u),null,s),$async$vz)
case 2:w=3
return A.b(u.vK(),$async$vz)
case 3:return A.h(null,v)}})
return A.i($async$vz,v)},
a_4(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a_4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h_A(r,t.e,!0,s.w,new C.dTe(u),null,s),$async$a_4)
case 2:w=3
return A.b(u.vK(),$async$a_4)
case 3:return A.h(null,v)}})
return A.i($async$a_4,v)},
vK(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vK=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Aw(q.a.c),$async$vK)
case 7:p=e
if(q.c!=null)n=q.e||J.cy(p)
else n=!1
if(n)q.m(new C.dTh(q,p))
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
return A.b(C.Gd(q.a.c).cM(0,B.pI),$async$vK)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dTi(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dTj(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vK,v)},
O7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$O7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.S(D.eQS)
w=3
return A.b(C.Gd(t.a.c),$async$O7)
case 3:r=e
w=4
return A.b(C.fG6(t.a.c,r),$async$O7)
case 4:q=e
w=5
return A.b(C.Gd(t.a.c),$async$O7)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dTd(t,p))
o=t.c.I(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.S(A.b2(null,null,null,q?B.dy:B.cR,null,B.r,null,s,null,B.ml,null,null,null,null,null,null,null,null,null,null))
t.a.pO()
case 1:return A.h(u,v)}})
return A.i($async$O7,v)},
HE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i6Z(l),$async$HE)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hBv(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aZf(q,p.e,l,"Each family tree costs $"+B.k.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$HE)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hiH(r)
o=Date.now()
n=t.a.c
m=new C.kB(l,r.toUpperCase(),p,!0,B.T,D.C6,new A.S(o,0,!1),0,n,D.tG)
w=5
return A.b(C.a2d(n,m),$async$HE)
case 5:w=6
return A.b(t.vK(),$async$HE)
case 6:t.a.bp()
t.a.pO()
if(t.c==null){w=1
break}t.Ef(m)
case 1:return A.h(u,v)}})
return A.i($async$HE,v)},
Ef(d){return this.ccN(d)},
ccN(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Ef=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Aw(u.a.c),$async$Ef)
case 2:n=l.ra(k.dH(f,new C.dTg(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hx(m,new C.aoO(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Ef)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a2d(u.a.c,o),$async$Ef)
case 6:case 5:w=7
return A.b(u.vK(),$async$Ef)
case 7:u.a.pO()
return A.h(null,v)}})
return A.i($async$Ef,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tG(p)
if(r.e)return A.av(A.mH(q,p?B.br:B.bn,q,q,q,q,q,q,q,q),q,q,q)
if(J.cm(r.d)){w=p?B.dX:B.c
v=A.m(15)
u=A.aG(!1,B.a1,!0,q,A.aL(!1,q,!0,A.p(q,D.bHO,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.q,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcbR(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Ff(A.p(q,A.v(A.a([u,B.aQ,t,B.N,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.br:B.bn,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.e3,A.bG(D.fxk,r.gaPv(),A.bl(B.bV,q,q,q,q,q,Al.YA,q,new A.b7(A.m(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.btT,q,q,1/0),15,B.af,1.05,D.a8z,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b6],v)
if(J.cy(r.d))w.push(A.aH(q,q,q,q,A.X(B.yp,B.aV,q,q,q,q),q,q,q,new C.dTl(r),q,q,q,q,"Sync family trees with database",q))
if(J.cy(r.d))w.push(A.aH(q,q,q,q,A.X(B.yg,B.aV,q,q,q,q),q,q,q,r.gaeP(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dk(E.an7,D.fdD,r.gaPv(),A.bl(B.bV,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.Ff(r.cz4(J.q(r.d,s),o),14,B.af,1,D.a8z,q))
B.d.v(w,u)}return A.v(A.a([p,B.aB,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cz4(d,e){var w=null,v=e.a,u=v?B.dX:B.c,t=A.m(14),s=A.I((v?B.e0:B.bP).j(0.55),B.q,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.ek,10)],x.V),q=A.m(14),p=A.p(w,D.bGS,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.ganN(),m=d.d?"":" \xb7 Public",l=d.y===D.ko?" \xb7 View only":"",k=x.p
l=A.E(A.v(A.a([o,B.bB,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aG(!1,B.a1,!0,w,A.aL(!1,q,!0,new A.D(B.bC,A.B(A.a([p,B.bf,l,A.X(B.MB,v?B.br:B.bn,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dTk(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aoO.prototype={
R(){return new C.aCA(A.a([],x._),A.aX(x.N),A.b6Z())},
bp(){return this.r.$0()},
ge_(){return this.c}}
C.aCA.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.abJ()
w=u.a
v=w.c
if(v.length!==0)C.a6J(v,w.e,w.d.w)},
q(){var w=this.w
w.U$=$.aw()
w.P$=0
this.a2()},
a2_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xF("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dSG(r),s,null,!0,!0,x.y),$async$a2_)
case 3:if(e!==!0||t.c==null){w=1
break}t.J8()
t.m(new C.dSH(t,r))
w=4
return A.b(t.vB(),$async$a2_)
case 4:t.a.bp()
t.xF(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a2_,v)},
cp5(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.dSB(w,f,d,e))},
aRL(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dp()
u.e7(w,v,0,1)
u.jI(q,q,1,1)
this.w.sp(0,u)},
b8y(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eF(new Float64Array(16))
q.e0(r)
w=q.Cn()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dp()
t.e7(r,u,0,1)
t.jI(v,v,1,1)
t.e7(-r,-u,0,1)
t.iA(0,q)
s.sp(0,t)},
abJ(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$abJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Aw(u.a.c),$async$abJ)
case 2:t=s.ra(r.dH(e,new C.dS9(u)))
if(t!=null&&u.c!=null)u.m(new C.dSa(u,t))
return A.h(null,v)}})
return A.i($async$abJ,v)},
xF(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.S(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
vz(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.h_A(o,t,!1,r,new C.dSo(u),q.a,s),$async$vz)
case 2:n=A
m=J
w=3
return A.b(C.Gd(u.a.c),$async$vz)
case 3:p=n.ra(m.dH(e,new C.dSp(u)))
if(p!=null&&u.c!=null)u.m(new C.dSq(u,p))
return A.h(null,v)}})
return A.i($async$vz,v)},
J8(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cC(w,0)},
vB(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a2d(t,s),$async$vB)
case 2:return A.h(null,v)}})
return A.i($async$vB,v)},
a0A(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0A=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tR(q,t.a.c)){t.xF("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.i87(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a0A)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.J8()
t.m(new C.dSA(t,r))
w=4
return A.b(t.vB(),$async$a0A)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0A,v)},
a_i(){return this.ccP()},
ccP(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_i=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tR(q,t.a.c)){t.xF("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.P(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dSy(r,new C.tG(q.ax.a===B.I)),s,null,!0,!0,x.y),$async$a_i)
case 3:if(e!==!0||t.c==null){w=1
break}t.J8()
t.m(new C.dSz(r,t))
w=4
return A.b(t.vB(),$async$a_i)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_i,v)},
Vl(d){return this.byc(d)},
byc(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tR(r,t.a.c)){t.xF("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dRY(t,d),r,null,!0,!0,x.P),$async$Vl)
case 3:s=f
if(s==null){w=1
break}t.J8()
t.m(new C.dRZ(t,s))
w=4
return A.b(t.vB(),$async$Vl)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vl,v)},
a2l(d){return this.cBc(d)},
cBc(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a2l=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.ca(null,null,!0,null,new C.dSJ(u,d,new C.tG(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a2l)
case 2:return A.h(null,v)}})
return A.i($async$a2l,v)},
c97(d){var w=this,v=w.d
v===$&&A.c()
if(C.tR(v,w.a.c))w.NN(d)
else w.a2l(d)},
ahi(d,e){return this.csZ(d,e)},
csZ(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ahi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.dSD(new C.tG(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ahi)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ahi,v)},
HJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.ko?3:5
break
case 3:w=6
return A.b(C.fOm(t.a.c),$async$HJ)
case 6:s=e
o=t.a
r=C.h7g(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ahi(!s,!r),$async$HJ)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bAF(o,t.a.c)){t.xF("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.l1(o,"Cancel","Remove",q.y===D.ko?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$HJ)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aOa(t.a.c,t.d.a),$async$HJ)
case 11:t.a.bp()
o=t.c
if(o==null){w=1
break}A.iN(o,null)
case 1:return A.h(u,v)}})
return A.i($async$HJ,v)},
a9i(d){return this.bJi(d)},
bJi(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a9i=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tR(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b4(s,new C.dS_(p))){o=A.U(s)
p.a=A.ra(new A.cQ(new A.a1(s,new C.dS0(d),o.k("a1<1>")),new C.dS1(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.J8()
t.m(new C.dS2(t,s,d,q))
w=3
return A.b(t.vB(),$async$a9i)
case 3:t.xF(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a9i,v)},
NN(d){return this.bLo(d)},
bLo(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tR(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a2l(d),$async$NN)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.dS6(t,d),r,null,!0,!0,x.P),$async$NN)
case 6:s=f
if(s==null){w=1
break}t.J8()
t.m(new C.dS7(t,s))
w=7
return A.b(t.vB(),$async$NN)
case 7:case 1:return A.h(u,v)}})
return A.i($async$NN,v)},
czq(){var w=this,v=w.d
v===$&&A.c()
if(!C.tR(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dSI(w))
w.vB()},
Y9(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Y9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bAF(n,t.a.c)){t.xF("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.aw()
r=new A.as(B.as,s)
q=t.d.e
p=A.bn(new A.K(q,t.gc7D(),A.U(q).k("K<1,n>")).c_(0,new C.dSj()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dSk(t,new C.tG(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$Y9)
case 3:o=e
r.U$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.J8()
t.m(new C.dSl(t,p))
w=4
return A.b(t.vB(),$async$Y9)
case 4:t.xF("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Y9,v)},
c7E(d){return B.a.i(d.toLowerCase())},
cbC(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tR(v,w)
t=r.d
s=C.hYn(t)
C.i72(q,t.b,u,C.hYm(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tG(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a1(l,new C.dSQ(),A.U(l).k("a1<1>")).gM(0)
l=n?B.bX:B.iN
v=A.X(B.ZL,n?B.br:B.bn,o,o,o,18)
u=x.p
v=A.a([new A.D(B.AZ,A.aL(!1,o,!0,new A.D(B.hL,A.B(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,o,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dSR(p,d),o,o,o,o,o,o,o),o),new A.D(B.na,p.bWh(m),o)],u)
if(p.d.y===D.ko){t=B.rl.j(0.15)
s=A.m(12)
r=A.I(B.rl.j(0.45),B.q,1)
q=C.Gb(p.d,p.a.c)
v.push(new A.D(B.xB,A.p(o,A.B(A.a([D.bM4,B.av,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,12,o,o,B.a5,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.ie,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b6],u)
if(C.tR(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Jx("Undo",B.r9,p.gczp(),m,o,o))
u.push(new C.Jx("Family Book",D.bBy,p.gcbB(),m,B.ta,o))
if(C.tR(p.d,p.a.c))u.push(new C.Jx("Display settings",B.BI,p.gccO(),m,B.aZ,o))
u.push(new C.Jx("Sync",B.yg,p.gaeP(),m,o,o))
t=p.d
if(t.y===D.ko||C.bAF(t,p.a.c)){t=p.d.y===D.ko?"Remove shared tree":"Delete tree"
u.push(new C.Jx(t,B.e6,p.gbJs(),m,B.h_,o))}if(C.tR(p.d,p.a.c))u.push(new C.Jx("Add member",B.vG,new C.dSS(p),m,B.bV,o))
v.push(new A.D(A0.ahf,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.ganN()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cp(new C.dST(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?K.ZP:X.MC,o,o,o,o,o)
v.push(A.av(A.hf(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dSU(p),o),o,o,o))}return A.c8(o,l,A.bm(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bWh(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fx.j(0.35),B.dl,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.X(B.y9,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a1,!0,m,A.aL(!1,m,!0,A.p(m,D.bP8,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.q,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gaeP(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.f_L,m,m,m)
r=r.ganN()
p=n.d.ganN()===1?"member":"members"
o=x.p
p=A.a([s,B.bf,A.E(A.v(A.a([q,B.bB,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a5,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tR(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bMg,m,m,m,n.gcmv(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.ji:B.mu
r=r?"Private":"Public"
r=A.E(n.au5(q,"Privacy",r,n.a.d.w?n.gcyp():m),1)
q=A.E(n.au5(B.yh,"Tree code",n.d.c,new C.dS8(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.B(A.a([r,B.ab,q,B.ab,A.E(n.au5(D.bDh,"Collaborators",p,n.gc_O()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.ko){s=B.c.j(0.15)
B.d.v(p,A.a([B.N,A.aG(!1,B.a1,!0,A.m(999),A.aL(!1,A.m(999),!0,new A.D(B.fI,A.B(A.a([A.X(B.oO,B.c,m,m,m,14),B.ec,A.d("View only",m,m,m,m,m,m,B.aP9,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ag)],o))}return A.p(m,A.bw(u,new A.an(B.W,m,B.aa,B.r,A.a([t,new A.D(B.F7,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bT7,B.n),m,m,m,m,m,m,m,1/0)},
au5(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a1,!0,A.m(14),A.aL(!1,A.m(14),!0,new A.D(L.aim,A.v(A.a([A.X(d,B.c,w,w,w,18),B.at,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.uz,A.d(f,w,1,B.a2,w,w,w,O.zw,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)}}
C.bdC.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gam(r)&&s.c.length===0)return B.bI
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bdF(s,t),new A.ar(w,v))],x.p)
r=r.gdK(r)
B.d.v(u,r.dt(r,new C.d6a(this),x.l))
r=s.c
B.d.v(u,new A.K(r,new C.d6b(this),A.U(r).k("K<1,r>")))
return new A.D(B.tC,new A.a7(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.JJ.prototype={}
C.Fs.prototype={}
C.bdE.prototype={
gbgW(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aIc.prototype={}
C.bdF.prototype={
bL5(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.W()
v=A.N()
v.r=B.bA.j(0.75).gp(0)
v.c=2
v.d=B.bO
d.bC(new A.u(n,w),new A.u(m,w),v)
u=(n+m)/2
t=new A.aO(q.r,B.ap,null,null,A.a([],x.v))
q=w+5.5
t.F(new A.b5(u,q))
s=w-1.1
r=w-8.8
t.F(new A.py(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.F(new A.py(u+4.95,r,u+9.9,s,u,q))
t.F(new A.bF())
q=A.N()
q.r=B.c.gp(0)
d.ae(new A.u(u,w),9,q)
q=A.N()
q.r=B.bA.gp(0)
d.aO(t,q)},
bL3(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b0(a0,new C.d6v())
w=f.b
v=w+(B.d.gJ(a0).b-w)/2
u=B.d.b4(a0,new C.d6w(f))
t=new A.K(a0,new C.d6x(f),A.U(a0).k("K<1,M>")).c_(0,new C.d6y()).cI(0,1/0,B.uV)
w=f.a
d.bC(f,new A.u(w,u?v:v-Math.min(10,t/2)),e)
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
n=g.gbK().a.snapshot()
r.drawPath((g.e=new A.cE(n)).a,k)
k.delete()}},
a4(d,e){var w,v,u,t,s,r,q,p,o
$.W()
w=A.N()
w.r=B.bV.j(0.75).gp(0)
w.c=2.2
w.b=B.ae
w.d=B.bO
w.e=B.fB
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.L)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bL3(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bL5(d,w,q.a,q.b)}},
ar(d){return d.b!==this.b}}
C.bhk.prototype={
gc5s(){var w=this.c
if(B.a.i(w.y).length!==0)return D.dgj
switch(w.c.a){case 0:return D.cKP
case 1:return D.cVU
case 2:return D.daP}},
gc5v(){var w=this.c,v=C.hi2(w.w),u=C.hi2(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc5s(),p=t.c,o=I.bBz(p.f),n=t.gc5v(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.aA:B.c,j=A.I(r?B.aA:B.c,B.q,2)
if(o!=null)w=A.t6(B.A,s,B.cj,B.bS,!1,s,o,!1,s,s)
else{w=A.a([B.d.gJ(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a3,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hU(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.ax,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.Fn,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.aA:B.c,B.q,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.f9I,s,s,s),B.f,s,s,new A.o(B.ce,s,w,j,s,s,B.n),s,s,s,s,D.bvL,s,s,s),s,s,s,-6,-4,s))}k=r?B.cB:B.c
j=A.m(8)
w=A.I(B.d.gJ(q).j(0.35),B.q,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dE,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cB,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bn,s,s,s,s,s,s,s,s,7.5,s,s,B.a5,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aE(s,new A.a7(84,112,A.v(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.at,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.aZ1,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bvW,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a8)}}
C.bcJ.prototype={
a4(d,e){var w,v,u,t,s,r,q
$.W()
w=A.N()
v=this.b
u=v?B.c:D.b9T
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
ar(d){return d.b!==this.b}}
C.bv1.prototype={
B(d){var w=this,v=null,u=new C.f9a(w),t=w.c,s=t?B.cB:B.c,r=A.m(12),q=u.$3(B.hz,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bF:B.fb,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.ye,"Zoom out",w.e)
return A.aG(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.f,t?B.bF:B.fb,v,v,v,1,v,v,v,v,v,22),u.$3(B.akH,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dq,v,v,v,B.ag)}}
C.bkG.prototype={
B(d){var w=this,v=null,u=B.bV.j(0.15),t=A.I(B.bV,B.q,2),s=w.e,r=x.p
t=A.aE(v,A.p(v,A.v(A.a([A.X(s?K.ZP:X.MC,B.bV,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.f64,v,v,v)],r),B.m,v,B.bb,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a8)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.f44,B.L,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.K(s,new C.eL5(w),A.U(s).k("K<1,r>")))
B.d.v(u,t)}return new A.a7(84,v,A.v(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.Zu.prototype={
R(){return new C.aB1()},
bp(){return this.Q.$0()},
ge_(){return this.w}}
C.aB1.prototype={
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
r.y=t==null?D.xP:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hZV(w.r,w.f)
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
P9(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$P9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.h7g(p.y,p.w)
w=3
return A.b(A.ld(t.a.w,B.HM),$async$P9)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aZf(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$P9)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hBw(p.y,p.w)
t.a.bp()
case 5:w=7
return A.b(Ao.Gm(78,800),$async$P9)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dmn(t,q))
case 1:return A.h(u,v)}})
return A.i($async$P9,v)},
c5u(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hX(B.o.u(1000*Date.now()),w,D.xP,null,null,null,"","","","","",1,!1,0)
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
s=v.aCU(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a5(k,!1).O(s)},
a8U(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a8U=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dmm(r),s,null,!0,!0,x.y),$async$a8U)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a5(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a8U,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tG(j),h=l.a.e,g=A.U(h).k("a1<1>"),f=A.C(new A.a1(h,new C.dmw(l),g),g.k("J.E"))
h=j?B.dX:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bue,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aA,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hr(A.aL(!1,k,!0,new A.D(B.lN,A.X(B.e6,B.oB,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbG6(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jt:B.iQ
t=I.bBz(l.as)
if(l.as==null)s=A.X(B.oG,j?B.br:B.bn,k,k,k,40)
else s=k
s=A.av(A.aE(k,new A.an(B.W,k,B.aa,B.r,A.a([A.hd(u,t,s,k,42),A.ao(0,A.hd(B.bV,k,D.bFX,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc5r(),k,k,k,k,k,k,!1,B.a8),k,k,k)
t=l.d
t===$&&A.c()
t=C.aB3(t,"Full name",B.mq,1,1,i,B.m1)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.S,new C.bhi(i,u,new C.dmx(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bnS],q)
o=l.a.e
B.d.v(p,new A.K(o,new C.dmy(),A.U(o).k("K<1,eD<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bnU],q)
B.d.v(q,new A.K(f,new C.dmA(),A.U(f).k("K<1,eD<n?>>")))
o=A.v(A.a([t,B.am,new C.acF(i,r,"Who is their parent?",p,new C.dmB(l),k,o),B.aB,n,B.am,new C.acF(i,m,"Who is their spouse / partner?",q,new C.dmC(l),k,o)],v),B.aj,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aB3(q,"Birth date",D.ajL,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aB3(m,"Birth place",B.a_3,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aB3(n,"Date of death (if deceased)",D.alY,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aB3(p,"Occupation",B.a09,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.r,w,k),B.aB,s,B.by,new C.acG(i,"Identity",u,k),B.ac,new C.acG(i,"Family links",o,k),B.ac,new C.acG(i,"Life details",A.v(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aB3(r,"Notes",B.kR,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aB2(i,"Child order",l.cd1(l.at),new C.dmD(l),new C.dmE(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fXW(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dmF(l):k
B.d.v(r,A.a([B.S,new C.aB2(i,"Visible in tree",u,w,new C.dmG(l),k)],v))}r.push(B.S)
w=j?B.jt:B.iQ
u=A.m(14)
t=A.I(j?B.e0:B.bP,B.q,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iF(k,B.bV,k,B.af,k,new C.dmH(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.agQ,k,k,k))
r.push(B.by)
w=j?B.aP:B.aA
j=j?B.e0:B.bP
r.push(A.B(A.a([A.E(A.dT(B.nv,new C.dmz(d),A.dh(k,k,k,k,k,k,k,k,k,w,k,k,B.cl,k,new A.b7(A.m(14),B.Y),new A.ay(j,1,B.q,-1),k,k,k,k)),1),B.bf,A.E(A.bG(D.eJF,l.gc5t(),A.bl(B.aV,k,k,0,B.c,k,B.cl,k,new A.b7(A.m(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.at)
return A.ek(B.ha,k,B.af,h,new A.a7(420,k,A.cd(A.v(r,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),k),D.ahI,k,B.ah6,new A.b7(g,B.Y),k,k)},
cd1(d){var w=B.o.E(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.E(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.acG.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jt:B.iQ,s=A.m(16)
return A.v(A.a([new A.D(D.ai6,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.e0:B.bP,B.q,1),s,w,w,B.n),w,w,w,w,B.bk,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bhj.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dX:B.c,r=A.m(12),q=A.I((t?B.e0:B.bP).j(0.85),B.q,1),p=v.r
if(p==null)p=B.an
w=A.l(u,u,t?B.aP:B.aA,u,u,u,u,u,u,u,u,14,u,u,B.a5,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.T,!1,u,!0,B.r,u,A.aN(),v.d,u,u,u,u,u,2,A.bs(u,B.ez,u,B.vk,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.br:B.bn,u,u,u,u,u,u,u,u,u,u,u,B.cv,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bV,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ai,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.acF.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dX:B.c,s=A.m(12),r=A.I((u?B.e0:B.bP).j(0.85),B.q,1),q=A.X(B.r3,u?B.br:B.bn,v,v,v,v),p=A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,14,v,v,B.a5,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dX:B.c
return A.p(v,new A.Dl(A.Sa(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.br:B.bn,v,v,v,v,v,v,v,v,v,v,v,B.cv,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kO,v,v,v)}}
C.bhi.prototype={
B(d){var w=new C.dmI(this)
return A.B(A.a([w.$3(D.Zn,"Male",B.Nn),B.ab,w.$3(D.aiZ,"Female",B.N8),B.ab,w.$3(D.xP,"Other",B.ng)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aB2.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jt:B.iQ,r=A.m(14),q=A.I(t?B.e0:B.bP,B.q,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aA,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.v(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.br:B.bn,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aHe(u,B.ye,w.f,v),B.bp,new C.aHe(u,B.hz,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ei,v,v,v)}}
C.aHe.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bV.j(0.12)
else w=s.c.a?B.dX:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bV
else t=(s.c.a?B.br:B.bn).j(0.4)
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,new A.a7(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ag)}}
C.acH.prototype={
bOQ(d){switch(d.a){case 0:return B.bV
case 1:return B.bA
case 2:return B.cU}},
bOR(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aW0(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
A0(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dX:B.c
u=A.m(12)
t=A.I((w?B.e0:B.bP).j(0.85),B.q,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bV,p,p,p,18),B.av],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.br:B.bn,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.v(A.a([q,B.at,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.aA,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cC,B.xy,p,p,1/0)},
adk(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jt:B.iQ,s=A.m(16),r=A.I(v?B.e0:B.bP,B.q,1)
return A.v(A.a([new A.D(D.ai6,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hmM(r,q),o=q.c,n=t.bOQ(o),m=I.bBz(q.f),l=t.e.a,k=l?B.dX:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.aA,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.ko?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.br:B.bn,s,s,s,s,s,s,s,s,12,s,s,B.a5,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.q,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.hd(u,m,m==null?A.X(B.oG,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.eq,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.q,1)
v=A.av(A.p(s,A.d(t.bOR(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mo,s,s,s),s,s,s)
u=x.p
i=A.a([t.A0("Full name",i,B.mq)],u)
if(p>0)i.push(t.A0("Child order","#"+p,B.Nf))
r=A.a([h,B.at,r,B.aQ,l,B.S,v,B.by,t.adk("Identity",i),B.ac,t.adk("Life details",A.a([t.A0("Birth date",q.w,D.ajL),t.A0("Birth place",q.x,B.a_3),t.A0("Date of death",q.y,D.alY),t.A0("Occupation",q.z,B.a09)],u)),B.ac,t.adk("Family links",A.a([t.A0("1. Parent",t.aW0(q.d),B.FB),t.A0("2. Spouse",t.aW0(q.e),B.N7)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.adk("Notes",A.a([t.A0("Notes",q,B.kR)],u))],u))
r.push(B.by)
r.push(A.bG(B.J4,new C.dmS(d),A.bl(B.aV,s,s,s,s,s,B.cl,s,new A.b7(A.m(14),B.Y),s,s,s)))
return A.eI(s,k,new A.cS(B.lz,A.cd(A.v(r,B.aj,s,B.e,B.Q,0,B.p),B.r,s,B.y,s,B.xE,s,s,B.ah),s),s,s,s,B.Fa,B.d0,s,new A.b7(j,B.Y),s)}}
C.Jx.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.br:B.bn
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.xH,A.hr(A.aG(!1,B.a1,!0,A.m(8),A.aL(!1,A.m(8),!0,new A.a7(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ag),u,v.c,u,u),u)}}
C.aoR.prototype={
eM(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a6().ac())
w=u.c
v=A.U(w).k("K<1,a4<n,@>>")
w=A.C(new A.K(w,new C.c7K(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.j0(w,new C.c7L(),t,x.U))
return s}}
C.aoS.prototype={
R(){return new C.aCC(A.a([],x.bF))},
gdd(){return this.c}}
C.aCC.prototype={
a_(){this.a1()
this.Jf()},
Jf(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Jf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c7O(t.a.c),$async$Jf)
case 3:r=e
w=4
return A.b(C.Aw(t.a.c),$async$Jf)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qQ(q,new C.dT2(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dT3(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Jf,v)},
yc(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.S(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
JY(d,e){return this.cBM(d,e)},
cBM(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$JY=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dT7(q,e))
t=3
w=6
return A.b(d.$0(),$async$JY)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dT8(q))
$.eV.mo()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JY,v)},
X_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p2(r,s.c,s.e),$async$X_)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JY(new C.dT_(t),"Preparing download\u2026"),$async$X_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X_,v)},
X3(d){return this.bMQ(d)},
bMQ(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p2(r,s.c,s.e),$async$X3)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.JY(new C.dT0(t,d),"Preparing file\u2026"),$async$X3)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X3,v)},
afb(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$afb=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.x1.c5().LI(B.Qe,B.tH,!0),$async$afb)
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
o=A.jq(o,0,null)
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
case 6:u=A.Gl()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afb,v)},
XE(d){return this.bXa(d)},
bXa(d){var w=0,v=A.j(x.H),u=this
var $async$XE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.JY(new C.dT1(u,d),"Restoring family trees\u2026"),$async$XE)
case 2:return A.h(null,v)}})
return A.i($async$XE,v)},
XD(){var w=0,v=A.j(x.H),u,t=this,s
var $async$XD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.afb(),$async$XD)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.XE(s),$async$XD)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XD,v)},
a1q(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p2(r,s.c,s.e),$async$a1q)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JY(new C.dT6(t),"Creating QR code\u2026"),$async$a1q)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1q,v)},
a11(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a11=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.CD()){t.yc("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).c8(A.ea(new C.dT4(),!0,null,x.N)),$async$a11)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.XE(r),$async$a11)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a11,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.Ap:B.iN,m=o?D.afl:B.aP,l=o?B.aK:B.bP,k=o?B.aP:B.aA,j=new C.d6z(n,m,l,k,o?B.bJ:B.bn)
l=A.aH(p,p,p,p,A.X(B.eC,k,p,p,p,20),p,p,p,new C.dTa(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eC(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.d67(!0,B.jk,B.aS,B.aS,q.r?p:q.gcsN(),j,s,"Show restore QR"),1),B.av],u))}s=q.e
r=q.r?p:q.gcp0()
t.push(A.E(C.d67(!s,B.iX,B.b7,B.bt,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.d67(!1,B.hB,B.aV,B.bV,q.r?p:q.gbMJ(),j,"Photos & books included","Download all trees"),1),B.av],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.d67(!1,M.yk,B.aH,B.aM,q.r?p:q.gbX7(),j,s,"Upload backup file"),1))
l=A.a([new C.bdD(v,l,p),B.ky,new C.abX(j,"QR restore",p),B.S,t,B.d6,new C.abX(j,"Backup files",p),B.S,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.ky,new C.abX(j,"One tree",p),B.S],u)
B.d.v(v,J.b6(q.d,new C.dTb(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cz(l,p,B.Yw,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aV.j(0.35),B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dl,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.p(p,A.B(A.a([K.aNC,B.bf,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.B4,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c8(w,n,new A.an(B.W,p,B.aa,B.r,l,p),p,!1,!1,p,p)}}
C.d6z.prototype={}
C.bdD.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.k3,28)],x.V)
t=A.ao(p,A.X(B.tZ,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.r,A.a([t,new A.D(B.a9,A.B(A.a([A.p(p,D.bOG,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.q,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.of,A.E(A.v(A.a([D.feE,B.N,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bWk,B.n),p,p,p,p,p,p,p,p)}}
C.abX.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bdB.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aS.j(0.4):m.c
k=A.I(k,B.q,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aS.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.I(t.j(0.35),B.q,1)
return A.aG(!1,B.a1,!0,q,A.aL(!1,o,!0,A.eE(A.dc(new A.D(E.Y9,A.v(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.r_,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bB,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cv,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)}}
C.bdG.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.q,1),q=B.aV.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,A.eE(new A.D(B.eP,A.B(A.a([A.p(v,D.bNT,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.q,1),p,v,v,B.n),v,v,v,v,B.r_,v,v,v),B.bf,A.E(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.X(B.hB,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)}}
C.ZP.prototype={
R(){return new C.aCB()},
gdd(){return this.c}}
C.aCB.prototype={
a_(){this.a1()
this.a8q()},
a8q(){var w=0,v=A.j(x.H),u=this,t
var $async$a8q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b0T(u.a.c,B.CH),$async$a8q)
case 2:t=e
if(u.c!=null)u.m(new C.dSV(u,t))
return A.h(null,v)}})
return A.i($async$a8q,v)},
agz(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$agz=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dSW(q))
t=4
p=A.h8V(q.a.d,B.CH)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.V(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.ar6(n.e,m,l,B.CH,p,n.f),$async$agz)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dSX(q))
q.c.I(x.q).f.S(D.eS0)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.aa(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(B.a.ee(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dSY(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agz,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.ja:B.pC,n=p?B.i9:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eC(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fua,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.pJ(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.v(A.a([B.N,u,B.by,t,B.N,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.bb,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bv,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcoJ()
if(u)u=B.IA
else u=A.X(r.e===!0?B.hA:B.ajK,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a7(1/0,q,A.ey(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ck,q,q,q),t,A.dh(q,q,q,q,q,q,q,q,q,B.aV,q,B.fN,q,q,q,new A.ay(B.aV.j(0.55),1,B.q,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hZ,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.az:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.S)
w.push(new A.a7(1/0,q,A.bG(B.zD,new C.dSZ(d),A.bl(B.aV,q,q,q,q,B.fN,q,q,q,q,q,q)),q))
return A.c8(m,o,new A.D(B.a9,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.ZQ.prototype={
R(){return new C.biN(A.z2(B.xm,B.nC,B.u3))}}
C.biN.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c8(A.eC(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fmo,w,w,w,1,w,!0),B.w,A.z1(this.d,B.bS,new C.dTc(this,d)),w,!1,!1,w,w)}}
C.aXO.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.PJ,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lx.prototype={}
C.a5L.prototype={
R(){return new C.bit(null,null)}}
C.bit.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.tw,v,1,v,w)
w.e=A.bj(v,B.pH,v,1,v,w)
w.a.toString
w.d.cH(0)
w.e.cH(0)},
bs(d){var w,v,u=this
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
this.btz()},
B(d){var w,v,u=this,t=B.d.dL(D.a2P,new C.dEp(u),new C.dEq())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.ct9(A.c6(new A.h3(A.a([w,v],x.dS)),new C.dEr(u,t),null),!0)}}
C.bis.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b_h(d,e)
break
case"house":p.m0(d,e,D.d_t)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdO()
$.W()
t=A.N()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ae(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.m5(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.AJ(d,e,12)
p.xO(d,e,B.l8,5,14)
break
case"grocery":p.cdL(d,e)
break
case"calculator":p.cds(d,e)
break
case"lumber":p.cdT(d,e)
break
case"kitchen":p.cdO(d,e)
break
case"landscape":p.m0(d,e,D.d0_)
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
w.r=B.f2.j(0.85).gp(0)
d.aO(s,w)
p.AJ(d,e,8)
p.xO(d,e,B.iT,4,18)
break
case"plumbing":p.ce1(d,e)
break
case"electrical":p.m0(d,e,D.da6)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.W()
u=A.N()
u.r=B.c.j(q*0.12).gp(0)
d.aY(new A.a9(0,0,0+e.a,0+e.b),u)
p.m5(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.m5(d,e,B.lE.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.AJ(d,e,10)
break
case"store":p.ceb(d,e)
break
case"paint_remodel":p.cdX(d,e)
break
case"roofing":p.ce3(d,e)
break
case"warehouse":p.cei(d,e)
break
case"vehicles":p.ceg(d,e)
break
case"farm":p.cdF(d,e)
break
case"restaurant":p.ce2(d,e)
break
case"tools":p.cee(d,e)
break
case"wallet":p.ceh(d,e)
break
case"concrete":p.cdy(d,e)
break
case"blueprint":p.cdq(d,e)
break
default:p.b_h(d,e)}},
m0(d,e,f){var w,v=new A.a9(0,0,0+e.a,0+e.b)
$.W()
w=A.N()
w.saq(new A.a8(B.ax,B.aC,B.x,f,null,null).av(0,v))
d.aY(v,w)},
m5(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.gdO()/2-h
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
xO(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdO()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
AJ(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.E(s*0.17,0.9)
p=B.k.E(s*0.23,0.85)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b_h(d,e){var w,v=this
v.m0(d,e,D.d8P)
w=v.c
v.m5(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.m5(d,e,B.bK.j(0.45),-w*3.141592653589793*1.4,22)
v.bL_(d,e,B.hV,w)
v.xO(d,e,B.c.j(0.7),6,8)},
bL_(d,e,f,g){var w,v,u,t,s,r,q,p
$.W()
w=A.N()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c_(new A.a9(16,q,t,q+3)),p)
p.delete()}},
cdL(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m0(d,e,D.cgO)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.E(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.E(s,2)
$.W()
l=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.cYO[B.o.E(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.m5(d,e,B.c.j(0.35),w,16)
j.xO(d,e,B.iT,5,12)},
cds(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m0(d,e,D.cgV)
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
p=A.hq(g,g,g,g,g,B.a4,B.c9,g,B.dZ,B.c7)
for(o=0;o<6;++o){n=v+o*0.9
r=D.d1w[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.E(o,2)
p.saV(0,new A.eq(r,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.ey()
p.a4(d,new A.u(t*(0.08+B.o.E(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cgX[o]
l=B.kd.j(0.28+0.3*Math.sin(n))
k=B.o.E(o,2)
p.saV(0,new A.eq(m,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.ey()
p.a4(d,new A.u(t*(0.55+B.o.E(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.m5(d,e,B.c.j(0.35),w*1.5,14)
h.m5(d,e,B.eA.j(0.55),-v*3.141592653589793*2,8)
h.m5(d,e,B.Aq.j(0.4),r*2.8,22)
h.xO(d,e,B.pr,8,10)
h.AJ(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.E(w+o*0.22,0.9)
$.W()
r=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cdT(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m0(d,e,Z.avk)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bx(new A.a9(20,q,u,q+10),B.hD)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.h3,B.ot,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.er(p),n)
n.delete()}m.m5(d,e,B.h3.j(0.35),w,15)
m.AJ(d,e,8)},
cdO(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m0(d,e,D.cZi)
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
k.delete()}j.m5(d,e,B.bK.j(0.4),-w*3.141592653589793*2.2,11)
j.xO(d,e,B.qD,4,14)},
ce1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m0(d,e,D.cOz)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.E(s,0.12)
$.W()
n=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xO(d,e,B.oy,6,12)
l.m5(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
ceb(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m0(d,e,D.cug)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bx(new A.a9(q,14,q+u,22),B.im)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.f9,B.bK,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.er(q),o)
o.delete()}n.m5(d,e,B.c.j(0.3),w,16)
n.AJ(d,e,8)
n.xO(d,e,B.v0,5,13)},
cdX(d,e){var w,v,u,t,s,r,q,p,o
this.m0(d,e,D.cUj)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.E(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bx(new A.a9(q,p,q+8,p+(18+r*22)),B.hd)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.is,B.dv,B.bK,B.et][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.er(p),o)
o.delete()}this.m5(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
ce3(d,e){var w,v,u,t,s,r,q,p,o
this.m0(d,e,D.cRS)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.E(v+s*0.12,0.75))
q=B.o.E(s,4)*0.22
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xO(d,e,B.cq,7,11)},
cei(d,e){var w,v,u,t,s,r,q,p,o,n
this.m0(d,e,D.cwV)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bx(new A.a9(p,o,p+(t-r*8),o+16),B.hD)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.cq,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.er(o),n)
n.delete()}this.m5(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
ceg(d,e){var w,v,u,t,s,r,q,p,o
this.m0(d,e,D.ddV)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.E(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.E(s,2)*0.08)
q=A.bx(new A.a9(r,q,r+28,q+8),B.hD)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.er(q),o)
o.delete()}this.AJ(d,e,6)},
cdF(d,e){var w,v,u,t,s,r,q,p,o,n
this.m0(d,e,D.cXW)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.W()
s=A.N()
s.r=B.lE.j(0.75).gp(0)
d.ae(new A.u(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.hk.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.m5(d,e,B.lE.j(0.35),w,14)},
ce2(d,e){var w,v,u,t,s,r,q,p,o=this
o.m0(d,e,D.d_i)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cl(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c_(r),p)
p.delete()}o.xO(d,e,B.qD,5,16)
o.AJ(d,e,7)},
cee(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m0(d,e,D.dby)
w=m.c
v=w*3.141592653589793
m.m5(d,e,B.ot.j(0.55),v*3,10)
m.m5(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.ot.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
ceh(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m0(d,e,D.der)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bx(new A.a9(p,o,p+36,o+22),B.im)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.iT,B.lE,q).gp(0)
n=p.H()
s.drawRRect(A.er(o),n)
n.delete()}m.AJ(d,e,9)
m.m5(d,e,B.c.j(0.4),w*2.2,12)},
cdy(d,e){var w,v,u,t,s,r,q,p,o,n
this.m0(d,e,D.d49)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bU(new A.u(v,u),34)
$.W()
s=A.N()
s.b=B.ae
s.c=5
s.r=B.c.j(0.45).gp(0)
d.f5(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.bP.j(0.85).gp(0)
n=o.H()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
cdq(d,e){var w,v,u,t,s,r,q,p
this.m0(d,e,D.d0g)
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
this.m5(d,e,B.l8.j(0.45),-t*3.141592653589793*2,11)},
ar(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.arO.prototype={
ZH(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aP5(),$async$ZH)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a8_(s),$async$ZH)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$ZH,v)},
afc(d){return this.cgx(d)},
cgx(d){var w=0,v=A.j(x.H),u=this,t
var $async$afc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.i7c(d),$async$afc)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$afc,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.jt:B.iQ
w=x.p
v=A.a([C.aPu(!0,B.qv,1/0,B.pP,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c0(new A.bI(B.b_,t,t,new A.D(B.vd,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.awe,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b_,B.b5,B.x,u,t,t),B.n),B.bd))}v.push(A.ao(8,A.B(A.a([A.E(A.dk(D.bHH,D.fb_,new C.cfi(this,d),A.bl(B.aV,t,t,t,B.c,t,B.jy,t,t,t,t,B.cb)),1),B.ab,A.E(A.ey(D.bPV,D.fpq,this.gc7B(),A.dh(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jy,t,t,D.aXx,t,t,t,B.cb)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fG(1.7777777777777777,A.aG(!1,B.a1,!0,B.qv,new A.an(B.W,t,B.b0,B.r,v,t),B.aq,s,0,t,t,t,t,t,B.ag),t)}}
C.aKy.prototype={
aR(){this.aZ()
this.aX()
this.dI()},
q(){var w=this,v=w.b_$
if(v!=null)v.a3(0,w.gdC())
w.b_$=null
w.a2()}}
C.aSo.prototype={}
C.aSn.prototype={}
C.aQp.prototype={}
C.Yt.prototype={
R(){return new C.axS()}}
C.axS.prototype={
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
JP(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.I(x.q).f.S(D.eSv)
return}t=u.c
t.toString
v=u.e
A.a5(t,!1).O(new C.aSo(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.dX:B.c,k=A.m(20),j=A.p(n,D.bPA,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.aA,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.v(A.a([i,B.bB,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bn,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.bf,i,A.aH(n,n,n,n,A.X(B.cD,m?B.br:B.bn,n,n,n,n),n,n,n,new C.cYP(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bn,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bn,n,n,n,n,n,n,n,n,11,n,n,B.cv,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.h9a(new C.cYQ(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.aA,n,n,n,n,n,n,n,n,n,n,n,B.a5,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jt:B.iQ
r=A.m(12)
q=A.m(12)
p=m?B.e0:B.bP
t=A.aM(n,B.T,!0,n,!0,B.r,n,A.aN(),u,n,n,n,n,n,2,A.bs(n,new A.b4(4,r,B.dg),n,n,n,n,n,n,!0,new A.b4(4,q,new A.ay(p,1,B.q,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cYR(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,R.IH,n,n,n,n)
u=m?B.aP:B.aA
m=m?B.e0:B.bP
return A.eI(n,l,new A.cS(B.lz,A.cd(A.v(A.a([j,B.aQ,i,B.at,w,B.N,v,B.aQ,t,B.by,A.B(A.a([A.E(A.dT(B.de,new C.cYS(d),A.dh(n,n,n,n,n,n,n,n,n,u,n,n,B.cl,n,new A.b7(A.m(12),B.Y),new A.ay(m,1,B.q,-1),n,n,n,n)),1),B.av,A.E(A.bG(D.fpF,o.ga1K(),A.bl(B.aV,n,n,n,B.c,n,B.cl,n,new A.b7(A.m(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.r,n,B.y,n,B.B5,n,n,B.ah),n),n,n,n,W.B6,B.d0,n,new A.b7(k,B.Y),n)}}
C.Ys.prototype={
R(){return new C.axR()}}
C.axR.prototype={
a_(){this.a1()
var w=$.aw()
this.d!==$&&A.aP()
this.d=new A.as(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.U$=$.aw()
w.P$=0
this.a2()},
JP(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.I(x.q).f.S(D.eQc)
return}v=this.c
v.toString
A.a5(v,!1).O(new C.aSn(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.dX:B.c,n=A.m(20),m=A.p(q,D.bM9,B.f,q,q,new A.o(B.bV.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.v(A.a([l,B.bB,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.br:B.bn,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.bf,l,A.aH(q,q,q,q,A.X(B.cD,p?B.br:B.bn,q,q,q,q),q,q,q,new C.cYL(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aV.j(0.25),B.q,1)
u=A.X(B.ajw,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.av,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,12,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bC,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,q,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jt:B.iQ
t=A.m(12)
s=A.m(12)
r=p?B.e0:B.bP
v=A.aM(q,B.T,!0,q,!0,B.r,q,A.aN(),w,q,q,q,q,q,2,A.bs(q,new A.b4(4,t,B.dg),q,q,q,q,q,q,!0,new A.b4(4,s,new A.ay(r,1,B.q,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cYM(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.kz,q,q,q,q)
w=p?B.aP:B.aA
p=p?B.e0:B.bP
return A.eI(q,o,new A.cS(B.lz,A.cd(A.v(A.a([m,B.aQ,l,B.aB,v,B.by,A.B(A.a([A.E(A.dT(B.de,new C.cYN(d),A.dh(q,q,q,q,q,q,q,q,q,w,q,q,B.cl,q,new A.b7(A.m(12),B.Y),new A.ay(p,1,B.q,-1),q,q,q,q)),1),B.av,A.E(A.bG(D.fwl,this.ga1K(),A.bl(B.bV,q,q,q,B.c,q,B.cl,q,new A.b7(A.m(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.B5,q,q,B.ah),q),q,q,q,W.B6,B.d0,q,new A.b7(n,B.Y),q)}}
C.Y0.prototype={
R(){return new C.awB()}}
C.awB.prototype={
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
gJa(){var w,v=this.e
v===$&&A.c()
w=A.d5(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gaiq(){var w=this.f
w===$&&A.c()
w=A.d5(B.a.i(w.a.a))
return w==null?0:w},
gb2b(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aNe(d){var w,v=B.k.D(this.gJa()+d,0.25,999999),u=B.k.jZ(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.aa(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aK(u,w,"")}t.saV(0,u)
this.m(new C.cwo())},
awI(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jt:B.iQ,s=A.m(14),r=A.m(14)
u=u?B.e0:B.bP
return A.bs(w,new A.b4(4,s,B.dg),w,B.bC,w,w,w,w,!0,new A.b4(4,r,new A.ay(u,1,B.q,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.m(14),B.a9Z),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c7C(d,e,f){return this.awI(d,e,f,null)},
JP(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gaiq()<=0){s.c.I(x.q).f.S(D.eUm)
return}r=s.c
r.toString
v=s.gJa()
u=s.gaiq()
t=s.gb2b()
A.a5(r,!1).O(new C.aQp(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tG(n),l=n?B.dX:B.c,k=A.m(24),j=x.O,i=A.a([B.aV.j(0.22),B.bV.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bFF,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.q,1),h,o,new A.a8(B.a3,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.v(A.a([h,B.bB,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.cv,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.bf,h,A.aH(o,o,o,o,A.X(B.cD,n?B.br:B.bn,o,o,o,o),o,o,o,new C.cwu(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,o,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.T,!0,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.awI(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Nl),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,R.IH,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jt:B.iQ
t=A.m(14)
s=A.I(n?B.e0:B.bP,B.q,1)
r=A.aH(o,o,o,o,A.X(B.ye,n?B.aP:B.aA,o,o,o,20),o,o,o,new C.cwv(p),o,o,o,o,o,B.cb)
q=p.e
q===$&&A.c()
q=A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),q,o,o,o,o,o,2,D.bRr,B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dV,o,o,o,1,o,o,!1,"\u2022",o,new C.cww(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.an,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a7(52,o,q,o),A.aH(o,o,o,o,A.X(B.hz,n?B.aP:B.aA,o,o,o,20),o,o,o,new C.cwx(p),o,o,o,o,o,B.cb)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.av,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),t,o,o,o,o,o,2,p.awI(m,"Amount","0.00",B.i_),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dV,o,o,o,1,o,o,!1,"\u2022",o,new C.cwy(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.an,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.C(new A.K(D.cUM,new C.cwz(p,m),t),t.k("ak.E"))
i=A.a([i,B.by,v,B.aB,h,B.N,s,B.ac,A.bW(B.bz,u,B.bq,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.S,A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.c7C(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cwA(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.kz,o,o,o,o)],w))}i.push(B.aQ)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bV.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJa()===B.k.jZ(p.gJa())?B.k.N(p.gJa()):p.gJa()
s=p.gb2b()
r=A.Ay(p.gaiq())
i.push(A.p(o,A.B(A.a([A.E(A.v(A.a([u,B.at,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.br:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bCl(p.gJa()*p.gaiq(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a3,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.jf,o,o,o))
i.push(B.by)
j=A.m(14)
h=n?B.e0:B.bP
h=A.dh(o,o,o,o,o,o,o,o,o,o,o,o,B.cl,o,new A.b7(j,B.Y),new A.ay(h,1,B.q,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dT(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cwB(d),h),1),B.av,A.E(A.dk(D.an0,D.fso,p.ga1K(),A.bl(B.aV,o,o,0,B.c,o,B.cl,o,new A.b7(A.m(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eI(o,l,new A.cS(V.aal,A.cd(A.v(i,B.aj,o,B.e,B.Q,0,B.p),B.r,o,B.y,o,Ad.qZ,o,o,B.ah),o),o,o,o,B.M1,B.d0,o,new A.b7(k,B.Y),o)}}
C.a0A.prototype={
R(){return new C.buU()}}
C.buU.prototype={
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
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.dX:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.aA,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.aA,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jt:B.iQ
v=A.aM(s,B.T,!0,s,!0,B.r,s,A.aN(),w,s,s,s,s,s,2,A.bs(s,new A.b4(4,A.m(12),B.dg),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.f8D(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.an,s,s,s,s)
u=A.E(A.dT(B.de,new C.f8E(d),s),1)
r=A.bl(B.bV,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eI(s,q,new A.D(B.B5,A.v(A.a([o,B.aB,v,B.aQ,A.B(A.a([u,B.av,A.E(A.bG(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.f8F(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d0,s,new A.b7(p,B.Y),s)}}
C.ab_.prototype={
a5(){return"WorksheetFrameStyle."+this.b}}
C.Ff.prototype={
R(){return new C.buS(null,null)}}
C.buS.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.bor,null,1,null,v)
w.cH(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bvX()},
gbxn(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bV,B.aZ],x.O)
case 2:return A.a([B.bu,B.aV,B.aZ],x.O)
case 3:return A.a([B.aS,B.ce,B.jQ],x.O)
case 4:return A.a([B.hw,B.bV,B.fa],x.O)
case 0:return A.a([B.aV,B.bV,B.aZ],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.ev(A.c6(v,new C.f8B(this,new C.tG(w.ax.a===B.I)),null),null)}}
C.awu.prototype={
R(){return new C.buT(null,null)}}
C.buT.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.n5,null,1,null,v)
w.cH(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bvY()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.f8C(this),null)}}
C.buR.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a9(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aT(w,w))
u=new A.aO($.W().r,B.ap,null,null,A.a([],x.v))
u.F(new A.iV(v))
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
d.aO(u,w)
w=A.x_(u)
t=A.a([],x.f5)
w=new A.vt(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.ba(A.jU('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.H9(w,r)
w.jp()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aQD(d,q,r,o,0,0.2,4.2,0.92)
p.aQD(d,q,r,s,0.52,0.11,3.2,0.58)}},
aQD(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.E(g+h,1)*f,s=A.huJ(e.a.a,e,t,t+f*i,!0),r=A.bAI(s.gbK().a.getBounds())
$.W()
w=A.N()
w.b=B.ae
w.c=j
w.d=B.bO
w.f=!0
v=this.f
u=k*this.e
w.saq(new A.a8(B.a3,B.a7,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.GO,null).av(0,r))
d.aO(s,w)},
ar(d){return d.b!==this.b||d.d!==this.d}}
C.aMJ.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
C.aMK.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
C.tG.prototype={}
C.arN.prototype={
R(){return new C.aE7()},
ge_(){return this.c}}
C.aE7.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.ag3()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.KV(w,v)
this.a2()},
ag3(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ag3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bAQ(t.c,t.d.a),$async$ag3)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eIf(u,s))
return A.h(null,v)}})
return A.i($async$ag3,v)},
Pz(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Pz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eI6(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.KV(t,s),$async$Pz)
case 2:if(u.c!=null)u.m(new C.eI7(u))
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
return A.b(A.ca(null,null,!0,null,new C.eId(t,new C.tG(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Q4)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a8_(q),$async$Q4)
case 6:case 5:t.m(new C.eIe(t,r))
w=7
return A.b(t.Pz(),$async$Q4)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Q4,v)},
Vf(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i6Y(r),$async$Vf)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eI1(t,new C.qU(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Pz(),$async$Vf)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vf,v)},
ccD(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hmI(t,new C.eI5(u),w,v)},
aab(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bO(new A.ay(v,2.5,B.q,-1),B.Y,B.Y,new A.ay(B.c.j(d?0.85:0.55),2.5,B.q,-1)),D.aXj,w,w,B.n),w,22,w,w,w,w,w,22)},
a9h(d){return this.bJf(d)},
bJf(d){var w=0,v=A.j(x.H),u=this
var $async$a9h=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eI4(u,d))
w=2
return A.b(u.Pz(),$async$a9h)
case 2:return A.h(null,v)}})
return A.i($async$a9h,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.bX:B.iN,d=A.m(8),a0=A.X(Q.ZM,f?B.br:B.bn,g,g,g,16),a1=x.p
a0=A.aL(!1,d,!0,new A.D(B.Fh,A.B(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.br:B.bn,g,g,g,g,g,g,g,g,g,g,g,B.a5,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eIg(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b0,B.r,A.a([A.bw(A.m(22),C.aPu(!0,A.m(22),1/0,B.pP,g,d,1/0),B.aq),A.ao(10,A.dk(D.bKd,D.fuE,h.gb03(),A.bl(B.w.j(0.45),g,g,g,B.c,g,B.h7,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eT,22),new A.ac(-4,B.G,B.bV.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.q,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bw(s,new A.an(B.W,g,B.b0,B.r,A.a([C.aPu(!0,A.m(16),1/0,B.MN,g,r.c,1/0),A.c0(g,new A.o(g,g,g,g,g,new A.a8(B.b_,B.b5,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bd),A.ao(g,h.aab(!0),g,g,8,g,8,g),A.ao(g,A.ctU(h.aab(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.ctU(h.aab(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.ctU(h.aab(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dk(D.bGd,D.foq,h.gb03(),A.bl(B.w.j(0.45),g,g,g,B.c,g,B.h7,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bST,B.n),g,g,g,g,B.lN,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aA,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b6L,B.nJ,B.h5],u):A.a([B.aZ,B.aV,B.bV],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eT,24)],t)
r=A.m(22)
p=A.ao(g,A.X(B.jB,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.q,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h6,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bCl(h.d.gwO(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.N,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cv,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.fT.j(0.75),B.q,1.6)
t=A.a([new A.ac(0,B.G,B.aS.j(0.28),B.cJ,14)],t)
j=B.aS.j(0.22)
i=A.m(10)
u=A.p(g,A.bw(r,new A.an(B.W,g,B.aa,B.r,A.a([p,new A.D(D.bt1,A.B(A.a([o,B.av,A.aG(!1,B.a1,!0,g,A.aL(!1,n,!0,A.eE(new A.D(Ai.B0,A.v(A.a([A.p(g,D.amA,B.f,g,g,new A.o(j,g,A.I(B.aS.j(0.5),B.q,1),i,g,g,B.n),g,g,g,g,B.co,g,g,g),B.h0,D.fdH],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gccC(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ag)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.ax,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fG(1.7777777777777777,d,g),B.aQ,w,B.N,u,B.by,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aA,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b6,A.dk(Ak.a0v,D.fbB,h.gbxQ(),A.bl(B.aV,g,g,g,B.c,g,B.ie,g,new A.b7(A.m(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.dX:B.c
v=A.m(14)
u=A.I(f?B.e0:B.bP,B.q,1)
t=A.X(B.a_6,f?B.br:B.bn,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aA,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.S,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.br:B.bn,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.tF,g,g,1/0))}else B.d.v(d,new A.K(w,new C.eIh(h,new C.tG(f)),A.U(w).k("K<1,r>")))
if(h.e)d.push(new A.D(B.AU,A.av(A.mH(g,f?B.br:B.bn,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c8(g,e,A.bm(!0,A.v(A.a([new A.D(B.AZ,a0,g),A.E(A.cd(A.v(d,B.F,g,B.e,B.j,0,B.p),B.r,g,B.y,g,E.xF,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bBs(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dX:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.b_5,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.X(s?B.hM:B.h9,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bI
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aP:B.aA,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcRT()
v=A.Ay(d.d)
B.d.v(t,A.a([B.at,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.br:B.bn,u,u,u,u,u,u,u,u,12,u,u,B.a5,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.bb,B.Q,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bV.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bCl(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a3,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.h7,u,u,u)
w=x.p
return A.p(u,A.bw(n,new A.DK(A.B(A.a([m,A.E(new A.D(B.agJ,A.B(A.a([l,B.bf,t,B.ab,k,A.aH(u,u,u,u,A.X(B.cD,(r?B.br:B.bn).j(0.75),u,u,u,20),u,u,u,new C.eI2(this,d),u,u,u,u,u,B.cb)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.aj,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.aYY,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.db,u,u,u,u)}}
C.ad1.prototype={
Ea(d){return this.bKC(d)},
bKC(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ea=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.p2(d,o,!1),$async$Ea)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).O(null)
w=4
return A.b(A.bN(Ac.AS,null,x.H),$async$Ea)
case 4:s=t.d
w=5
return A.b(C.fFa(!0,o,s),$async$Ea)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Ga(r,"ngmy_project_"+A.aK(s.b,q,"_"),!1),$async$Ea)
case 6:p=f
w=7
return A.b(A.p1(o,!1),$async$Ea)
case 7:if(d.e==null){w=1
break}d.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Ea,v)},
ZI(d){return this.csO(d)},
csO(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.p2(d,s,!1),$async$ZI)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).O(null)
A.hx(d,new C.arH(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.p1(s,!1),$async$ZI)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZI,v)},
PA(d){return this.coW(d)},
coW(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).O(null)
w=3
return A.b(A.hx(d,D.aFG,!0,"NgmyWorksheetProjectScan",x.N),$async$PA)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bCm(s),$async$PA)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.S(D.eTv)
w=1
break}q=C.h_d(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dP(p,x.H),$async$PA)
case 5:if(d.e==null){w=1
break}d.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$PA,v)},
ZJ(d){return this.cAI(d)},
cAI(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ZJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).O(null)
w=3
return A.b(C.bBU(),$async$ZJ)
case 3:s=f
if(s==null){w=1
break}r=C.h_d(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dP(q,x.H),$async$ZJ)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$ZJ,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tG(u),s=w.d.d.length,r=u?B.dX:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.k3,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.vl,A.p(v,A.v(A.a([w.crm(d,t,s),new A.D(D.bsq,A.v(A.a([w.b35(t,"QR restore"),B.S,A.B(A.a([w.aZ1(t,!0,B.jk,B.aS,B.aS,new C.eIj(w,d),"Show to scan","QR code"),B.av,w.awJ(t,B.iX,B.b7,B.bt,new C.eIk(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d6,w.b35(t,"Backup files"),B.S,A.B(A.a([w.awJ(t,B.hB,B.aV,B.bV,new C.eIl(w,d),"Full copy","Backup file"),B.av,w.awJ(t,M.yk,B.aH,B.aM,new C.eIm(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
crm(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eY,B.cY,B.fx],k):A.a([B.aZ,B.aV,B.bV],k)
w=A.ao(l,A.X(B.tZ,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kM,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.q,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aPu(!0,A.m(13),64,D.bBr,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aQ7,l,l,l)
r=C.bCl(r.gwO(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.q,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.r,A.a([w,new A.D(D.bsO,A.v(A.a([v,A.B(A.a([s,B.ey,A.E(A.v(A.a([u,B.at,t,B.N,A.B(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fK,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.X(B.cD,B.c.j(0.85),l,l,l,l),l,l,l,new C.eIi(d),l,l,l,A.nw(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aNr,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.ax,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b35(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.br:B.bn,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aZ1(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.afl:B.aP
if(e)w=B.aS.j(o?0.45:0.35)
else{w=o?B.e0:B.bP
w=w.j(o?0.8:1)}w=A.I(w,B.q,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aS.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.q,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.r_,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.aA,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aG(!1,B.a1,!0,r,A.aL(!1,q,!0,A.eE(new A.D(E.Y9,A.v(A.a([t,B.ac,u,B.bB,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.br:B.bn,r,r,r,r,r,r,r,r,11,r,r,B.cv,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
awJ(d,e,f,g,h,i,j){return this.aZ1(d,!1,e,f,g,h,i,j)}}
C.arH.prototype={
R(){return new C.bk9()}}
C.bk9.prototype={
a_(){this.a1()
this.adX()},
adX(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$adX=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bCn(p.c,p.d),$async$adX)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eHX(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eHY(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adX,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.Ap:B.iN,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eC,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eHZ(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zq],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eY,B.cY,B.fx],s):A.a([B.aZ,B.aV,B.bV],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eT,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dm,B.L,h,h)
p=C.bCl(p.gwO(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.am,A.B(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fK,h,h,h)],u),B.m,h,B.bb,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.ax,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.Yv,h,h,1/0)
t=g?D.bfZ:B.c
q=A.m(24)
p=A.I(w?B.aS.j(0.4):B.aV.j(0.3),B.q,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dl,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a75,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.e60)
else{m=A.m(20)
l=A.I(B.aL,B.q,1)
o.push(A.p(h,A.pJ(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bR,h,h,h))}}o.push(B.aQ)
n=w?B.aS:B.aV
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aS:B.aV).j(0.35),B.q,1)
k=w?B.N4:B.NB
k=A.X(k,w?B.aS:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.av,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a5,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.ie,h,h,h))
return A.c8(h,f,A.bm(!0,A.v(A.a([new A.D(A7.Me,e,h),A.E(A.cd(A.v(A.a([s,B.aQ,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tE,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.r,h,B.y,h,E.ahS,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.arM.prototype={
R(){return new C.aE6(A.z2(B.Lv,B.nC,B.u3))}}
C.aE6.prototype={
q(){this.d.q()
this.a2()},
aLf(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iN(w,d)},
c8s(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.i4T(t)
if(s!=null){this.aLf(s)
return}r=C.hdJ(t)
if(r!=null)q=A.cX(r,p,0)
else q=!1
if(q){this.aLf(B.a.i(B.a.b1(r,B.a.cJ(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eC(A.a([A.aH(t,t,t,t,A.X(u.f?B.r4:A2.Na,t,t,t,t,t),t,t,t,new C.eI0(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Ap,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.foj,t,t,t,1,t,!0),q=A.z1(u.d,B.bS,u.gc8r()),p=A.m(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.q,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c8(r,B.w,new A.an(B.W,t,B.b0,B.r,A.a([q,p,A.ao(32,A.p(t,D.fn7,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.q,1),v,t,t,B.n),t,t,t,t,B.jf,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aIU.prototype={
a5(){return"_WorksheetTab."+this.b}}
C.NL.prototype={
R(){return new C.aE8(D.a9g,A.a([],x.D))},
bp(){return this.r.$0()},
ge_(){return this.c}}
C.aE8.prototype={
gcyF(){return J.bDv(this.e,0,new C.eIJ())},
a_(){this.a1()
$.aW.c2$.push(this)
this.vy()},
q(){$.aW.hF(this)
this.a2()},
iY(d){if(d===B.fv)this.vy()},
vy(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vy=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.CC(q.a.c).cM(0,B.jV),$async$vy)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eIF(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eIG(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vy,v)},
HD(d){return this.bHo(d)},
bHn(){return this.HD(null)},
bHo(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i7_(l,d),$async$HD)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lg(l,r,q,D.d4m,new A.S(Date.now(),0,!1))
w=4
return A.b(C.KV(t.a.c,p),$async$HD)
case 4:o=f
w=5
return A.b(t.vy(),$async$HD)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.S(D.eQG)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.S(D.eSp)
else n.I(q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.Ee(m)
case 1:return A.h(u,v)}})
return A.i($async$HD,v)},
Ee(d){return this.cco(d)},
cco(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Ee=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hx(s,new C.arN(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Ee)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.KV(u.a.c,t),$async$Ee)
case 5:case 4:w=6
return A.b(u.vy(),$async$Ee)
case 6:return A.h(null,v)}})
return A.i($async$Ee,v)},
vj(d){return this.bXc(d)},
bXc(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bBU(),$async$vj)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hx(r,D.aFG,!0,"NgmyWorksheetProjectScan",x.N),$async$vj)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bCm(q),$async$vj)
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
break}p=C.h_d(s)
w=15
return A.b(C.KV(t.a.c,p),$async$vj)
case 15:o=f
w=16
return A.b(t.vy(),$async$vj)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.S(D.eSu)
w=1
break}r.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.Ee(p)
case 1:return A.h(u,v)}})
return A.i($async$vj,v)},
Np(d){return this.bG3(d)},
bG3(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Np=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ca(null,null,!0,null,new C.eIq(d),s,null,!0,!0,x.y),$async$Np)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oB(t.a.c,A.a([],x.D)),$async$Np)
case 6:w=7
return A.b(t.vy(),$async$Np)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.eQL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Np,v)},
ccB(d){var w=this.c
w.toString
A.bR(B.K,null,new C.eIz(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b3H(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jt
else w=B.c
v=A.m(16)
u=A.I(p?B.e0:B.bP,B.q,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.aA,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(r,A.v(A.a([s,B.ac,t,B.bB,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.br:B.bn,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vk,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
a_d(d,e){return this.ccp(d,e)},
ccp(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_d=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bR(B.K,null,new C.eIu(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a_d)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hmI(r,new C.eIv(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Nr(d,e),$async$a_d)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_d,v)},
b0F(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.ay
else t=h.a?B.aP:B.aA
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.v(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.br:B.bn,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aG(!1,B.a1,!0,u,A.aL(!1,u,!0,new A.D(B.B4,A.B(A.a([s,B.bf,t,A.X(B.ex,w?B.br:B.bn,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag)},
cjf(d,e,f,g,h,i){return this.b0F(!1,d,e,f,g,h,i)},
Nr(d,e){return this.bGd(d,e)},
bGd(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Nr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.l1(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Nr)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bAC(t.a.c,d.a),$async$Nr)
case 6:w=7
return A.b(t.vy(),$async$Nr)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Nr,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tG(o),m=o?B.bX:B.iN
if(q.f)o=D.b4D
else{w=q.bAD(n)
v=q.bWi(n)
u=q.gbxK()
if(o)t=B.jt
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aQ,new C.Ff(A.p(p,A.B(A.a([q.aAe(N.MM,"Projects",n,D.a9g),q.aAe(B.vw,"Cashier",n,D.aUL),q.aAe(B.FB,"Family Tree",n,D.fY8)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.eq,0.95,u,p),B.by],r)
w=q.d
if(w===D.a9g){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.aA,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b6,new C.awu(q.gaPp(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aB,q.cjh(n)],r))}else{o=q.a
if(w===D.aUL)u.push(new C.anM(o.c,n,p))
else{w=q.r
u.push(new C.aoU(o.c,o.d,o.e,o.f,new C.eIM(q),new C.eIN(q),new A.cx(w,x.b4)))}}o=A.cd(A.v(u,B.F,p,B.e,B.j,0,B.p),B.r,p,B.y,p,Ae.M7,p,p,B.ah)}return A.c8(p,m,A.bm(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bAD(d){var w=null,v=A.m(8),u=d.a,t=A.X(Q.ZM,u?B.br:B.bn,w,w,w,16)
return A.aL(!1,v,!0,new A.D(B.kN,A.B(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.br:B.bn,w,w,w,w,w,w,w,w,14,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eIn(this),w,w,w,w,w,w,w)},
gbxK(){switch(this.d.a){case 0:return D.a8y
case 1:return D.fON
case 2:return D.a8z}},
bWi(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cA,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bM_,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bf,D.bx6,A.aG(!1,B.a1,!0,w,A.aL(!1,A.m(12),!0,A.p(w,D.bJx,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eIr(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.m(12)
return new C.Ff(A.p(w,A.v(A.a([new A.D(E.Yf,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.d(A.Ay(this.gcyF()),w,w,w,w,w,w,D.f82,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.vj,B.jf,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.fOM,w)},
aAe(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aV:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.q,2):A.I(B.K,B.q,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.br:B.bn
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.br:B.bn
return A.E(A.aG(!1,B.a1,!0,u,A.aL(!1,s,!0,A.dj(u,A.B(A.a([w,B.ec,new A.dq(1,B.cn,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.bb,B.j,0,u,u),u,u,B.ct,new A.o(r,u,p,q,o,u,B.n),B.iy,u,u,u,B.Ma,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eII(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),1)},
cjh(d){var w,v,u,t,s,r,q=this,p=null
if(J.cm(q.e)){w=d.a
v=w?B.dX:B.c
u=A.m(15)
t=A.p(p,D.bJC,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eT,28)],x.V),D.bVk,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.aA,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Ff(A.p(p,A.v(A.a([t,B.d6,s,B.N,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.br:B.bn,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.e3,A.B(A.a([A.E(q.aQZ(B.iX,"Scan QR",new C.eIC(q),d),1),B.av,A.E(q.aQZ(M.yk,"Upload file",new C.eID(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aB,A.bG(D.fyc,q.gaPp(),A.bl(B.aV,p,p,p,B.c,B.fN,p,p,new A.b7(A.m(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.btS,1.05,D.a8y,p)}w=J.b6(q.e,new C.eIE(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Ff(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bT,1,D.a8y,p)},
aQZ(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aV.j(0.45),B.q,1)
return A.aG(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(w,A.v(A.a([A.X(d,B.aZ,w,w,w,26),B.N,A.d(e,w,w,w,w,w,w,D.f6u,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.agB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)},
cjg(d,e){var w,v,u=null,t=e.a,s=t?B.dX:B.c,r=A.m(14),q=A.I(t?B.e0:B.bP,B.q,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.ek,10)],x.V),o=A.m(14),n=t?B.br:B.bn
n=A.bw(B.UX,new A.fG(1.7777777777777777,C.aPu(!0,B.fw,1/0,N.MM,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.aA,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.d(""+d.d.length+" budget items \xb7 "+A.Ay(d.gwO()),u,u,u,u,u,u,D.f4D,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aG(!1,B.a1,!0,u,A.aL(!1,o,!0,A.v(A.a([n,new A.D(B.bC,A.B(A.a([v,A.aH(u,u,u,u,A.X(Af.Np,t?B.br:B.bn,u,u,u,u),u,u,u,new C.eIA(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eIB(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e5,u,u,u,1/0)}}
C.bwF.prototype={}
C.qU.prototype={
ag(){var w=this,v=w.c,u=w.d
return A.F(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcRT(){var w,v,u,t,s=this.c
if(s===B.k.jZ(s))w=B.o.u(B.k.N(s))
else{v=B.k.aa(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aK(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lg.prototype={
gwO(){return B.d.cI(this.d,0,new C.cvQ())},
ag(){var w=this,v=w.d,u=A.U(v).k("K<1,a4<n,@>>")
v=A.C(new A.K(v,new C.cvP(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
baK(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lg(w.a,w.b,v,u,w.e)},
bar(d){return this.baK(d,null)},
Sg(d){return this.baK(null,d)}}
C.Hj.prototype={
a5(){return"FamilyGender."+this.b}}
C.hX.prototype={
ag(){var w=this
return A.F(["id",w.a,"name",w.b,"gender",C.hiy(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aCU(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hX(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ak8.prototype={
a5(){return"FamilyTreeAccessRole."+this.b}}
C.kB.prototype={
ganN(){var w=this.f
return new A.a1(w,new C.bN1(),A.U(w).k("a1<1>")).gM(0)},
ag(){var w=this,v=w.f,u=A.U(v).k("K<1,a4<n,@>>")
v=A.C(new A.K(v,new C.bN0(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hYl(w.y)],x.N,x.z)},
yt(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kB(w.a,v,u,t,s,r,w.r,q,p,o)},
baJ(d,e){var w=null
return this.yt(w,w,d,e,w,w,w,w)},
cHy(d,e,f,g,h,i,j){return this.yt(d,e,f,g,h,i,j,null)},
aCZ(d,e){var w=null
return this.yt(w,w,w,d,w,w,e,w)},
cG1(d){var w=null
return this.yt(w,w,w,w,w,w,d,w)},
cGp(d){var w=null
return this.yt(w,w,w,w,w,w,w,d)},
aCL(d){var w=null
return this.yt(w,w,w,w,d,w,w,w)},
cH3(d,e,f){var w=null
return this.yt(w,d,w,e,w,w,f,w)},
cFP(d){var w=null
return this.yt(w,w,d,w,w,w,w,w)},
cGC(d,e){var w=null
return this.yt(d,w,w,w,w,e,w,w)}}
C.cvR.prototype={
a5(){return"WrapAlignment."+this.b}}
C.cvS.prototype={
a5(){return"WrapCrossAlignment."+this.b}}
C.aGb.prototype={}
C.b7O.prototype={
bz(d){this.a=d.a
this.b=d.b},
cT(d){var w=new C.b7O()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b7N.prototype={
gw7(){return!0},
gFL(){return this.z.b<this.b.length},
aSB(d){switch(0){case 0:return d.a.c}},
aSi(d){switch(0){case 0:return d.a.d}},
bPK(d,e){switch(0){case 0:return new A.hJ(d,e)}},
bP7(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h2(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iD(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.H2(b4)
switch(0){case 0:v=b5.b
u=new A.ky(0,v,0,1/0)
t=w===B.SW
break}s=A.a([],x.gZ)
r=A.T(x.cM,x.S)
for(b3=b1.z,q=B.d.fM(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.L)(q),++h){g=q[h]
g.h2(b4,u,!0)
f=b1.aSB(g)
f.toString
e=b1.aSi(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGb(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGb(k,j,i))}d=s.length
switch(0){case 0:q=b5.cv(new A.hJ(m,l))
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
a8=b1.aSB(g)
e=b1.aSi(g)
e.toString
a9=b1.bP7(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bPK(a6,a3+a9)
b0=g.a
g.a=new A.iD(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fZ(d){var w,v,u,t,s,r=this
r.le(d)
w=d.b
w.i4()
v=A.dp()
u=r.a
v.e7(u.a,u.b,0,1)
w.oR(0,v)
for(u=r.z,u=B.d.dq(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].fZ(d)
w.ne(0)},
Gg(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
i4(){return this.z}}
C.buV.prototype={}
var z=a.updateTypes(["az<~>()","R(hX)","R(kB)","~()","R(n9)","a4<n,@>(kB)","H(kB,kB)","n(hX)","kB(a4<@,@>)","R(lg)","R(u8)","n9(a4<@,@>)","u8()","H(lg,lg)","hX(a4<@,@>)","a4<n,@>(hX)","R(qU)","az<~>(lg)","eD<n?>(hX)","H(hX,hX)","n?(hX)","a4<n,@>(n9)","Zu(Y)","n(n)","acH(Y)","r(ob)","H(n9,n9)","hX(hX)","cL(bv<n,Fs>)","cL(JJ)","~(hX)","H?(hX)","hX()","ai<hX>()","R(u7)","R(JJ)","D(hX)","~(Hj)","R(aeg)","r(Hj,n,a_)","YT(Y)","bv<n,ai<a4<n,@>>>(n,ai<n9>)","~(H)","+count,id,name(H,n,n)(kB)","kB(kB)","ZP(Y)","ZQ(Y)","R(lx)","lx()","n(kB)","a0A(Y)","Yt(Y)","Ys(Y)","YR(Y)","YV(Y)","r(qU)","ad1(Y)","~(lV)","az<~>([n?])","M(M,lg)","r(lg)","M(M,qU)","a4<n,@>(qU)","qU(a4<@,@>)","Yr(Y)","Sj(Y)","cq(Hi)","lg(a4<@,@>)","u7()","n(lg)","a4<n,@>(lg)","n(S)","H(hX)","kB(a4<n,@>)","Y0(Y)"])
C.fxP.prototype={
$1(d){return d.a+" "+d.b},
$S:123}
C.fxO.prototype={
bjO(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qM(s,d,B.hp,E.EY),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.V(r!=null&&A.KJ(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bjO(d)},
$S:299}
C.fxQ.prototype={
$1(d){return d.b},
$S:123}
C.fH_.prototype={
$1(d){var w=null
return A.eI(w,B.K,new F.P7(this.a,this.b,w),w,w,0,B.Ya,B.d0,w,w,w)},
$S:47}
C.fmR.prototype={
$1(d){return d!=null},
$S:223}
C.fmS.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:223}
C.fmX.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:171}
C.fvy.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fa(d,w,w,w,A.h2(w,B.ru,w,w,w,w,w,w,w,B.ds,w,w,10.5,w,B.ej,w,!0,w,w,w,w),w),u=f?B.ej:B.vr
return new A.nH(D.bpv,A.a9f(A.a([new A.fO(130,w,v),new A.yK(1,B.Fu,A.fa(e,w,w,w,A.h2(w,g==null?D.e8i:g,w,w,w,w,w,w,w,B.ds,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.xi,B.lp))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1909}
C.fvx.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vl(999)
f=A.wT(A.ls(h,A.fa("Cashier",h,h,h,A.h2(h,D.zc,h,h,h,h,h,h,h,B.ds,h,h,10,h,B.ej,h,!0,h,h,h,h),h),h,new A.kz(D.e89,h,f,B.hF,h),h,h,D.bpZ,h))
w=A.wT(A.fa("Debt receipt",h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.ds,h,h,22,h,B.ej,h,!0,h,h,h,h),h))
v=A.wT(A.fa(C.wE(new A.S(Date.now(),0,!1),!0),h,h,h,D.a7b,h))
u=A.vl(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fa(s,h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.ds,h,h,14,h,B.ej,h,!0,h,h,h,h),h)
r=A.fa("Person who owes",h,h,h,D.a7b,h)
q=A.vl(10)
p=x.C
u=A.ls(h,A.yF(A.a([s,new A.fO(h,2,h),r,new A.fO(h,10,h),A.ls(h,A.yF(A.a([A.fa("Amount owed",h,h,h,D.a7b,h),new A.fO(h,2,h),A.fa(A.Ay(t.c),h,h,h,A.h2(h,D.zc,h,h,h,h,h,h,h,B.ds,h,h,20,h,B.ej,h,!0,h,h,h,h),h)],p),B.qS,B.lp),h,new A.kz(B.p1,h,q,B.hF,h),h,h,D.bpb,1/0)],p),B.qS,B.lp),h,new A.kz(E.aGW,h,u,B.hF,h),h,h,D.br_,1/0)
q=new A.nq(D.e8c,0.9,B.kG)
r=A.vl(12)
s=i.c
o=s.$2("Original due",C.wE(t.r,!1))
n=s.$2("Current due",C.wE(t.f,!1))
m=i.d
l=new A.nq(m,1.1,B.kG)
k=A.vl(8)
j=i.a
k=A.a([o,n,new A.fO(h,6,h),A.ls(h,A.wT(A.fa(t.gaJL(),h,h,h,A.h2(h,m,h,h,h,h,h,h,h,B.ds,h,h,11,h,B.ej,h,!0,0.5,h,h,h),h)),h,new A.kz(h,new A.pu(l,l,l,l),k,B.hF,h),h,h,D.bq6,1/0),new A.fO(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.zc))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.zc))
else{n=A.fa("Missed days ("+n+")",h,h,h,A.h2(h,B.ru,h,h,h,h,h,h,h,B.ds,h,h,10.5,h,B.ej,h,!0,h,h,h,h),h)
m=A.U(o).k("K<1,RS>")
o=A.C(new A.K(o,new C.fvw(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fO(h,4,h),n,new A.fO(h,6,h),new C.b7N(5,5,new C.b7O(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fO(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fO(h,8,h),w,new A.fO(h,3,h),v,new A.fO(h,16,h),u,new A.fO(h,10,h),A.ls(h,A.yF(k,B.xi,B.lp),h,new A.kz(h,new A.pu(q,q,q,q),r,B.hF,h),h,h,B.agN,1/0)],p)
w=j.a
if(w!=null){v=new A.nq(B.HY,1,B.kG)
B.d.v(f,A.a([new A.fO(h,16,h),A.fa("Debtor signature",h,h,h,A.h2(h,B.ru,h,h,h,h,h,h,h,B.ds,h,h,10,h,B.ej,h,!0,h,h,h,h),h),new A.fO(h,6,h),A.ls(h,new A.Hz(w,B.V7,h,h),h,new A.kz(h,new A.pu(v,v,v,v),A.vl(6),B.hF,h),82,h,B.Mc,1/0)],p))}f.push(new A.fO(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fa(w,h,h,h,D.eYz,h))
f.push(new A.fO(h,18,h))
f.push(A.wT(A.fa("NGMY.ORG",h,h,h,A.h2(h,D.zc,h,h,h,h,h,h,h,B.ds,h,h,14,h,B.ej,h,!0,1.8,h,h,h),h)))
return f},
$S:357}
C.fvw.prototype={
$1(d){var w=null,v=new A.nq(D.HZ,0.7,B.kG),u=A.vl(999)
return A.ls(w,A.fa(C.wE(d,!1),w,w,w,A.h2(w,D.HZ,w,w,w,w,w,w,w,B.ds,w,w,9.5,w,B.ej,w,!0,w,w,w,w),w),w,new A.kz(w,new A.pu(v,v,v,v),u,B.hF,w),w,w,D.bvf,w)},
$S:1910}
C.c15.prototype={
$1(d){var w=null,v=B.bG.j(0.08),u=A.m(999),t=A.I(B.bG.j(0.28),B.q,1)
return A.p(w,A.d(C.wE(d,!1),w,w,w,w,w,w,D.f48,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eB,w,w,w)},
$S:1911}
C.fHv.prototype={
$1(d){var w=null,v=A.aI(d,B.bU,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bMS,w,w,w,new C.fHs(d),w,w,w,w,w,B.cb),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eI(w,B.K,new A.cS(new A.aY(0,380,0,v.a.b*0.9),A.aG(!1,B.a1,!0,u,new A.D(B.Y0,A.v(A.a([new A.bI(B.a7,w,w,t,w),new A.dq(1,B.cn,A.cd(A.v(A.a([new A.ev(new C.aXQ(r,w),s),B.S,A.B(A.a([A.E(A.ey(B.yv,D.fuA,new C.fHt(s,r,d),A.dh(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f7,w,new A.b7(A.m(14),B.Y),new A.ay(q,1,B.q,-1),w,w,w,w)),1),B.ab,A.E(A.dk(B.a0l,D.frc,new C.fHu(r,d),A.bl(B.aZ,w,w,w,B.c,w,B.f7,w,new A.b7(A.m(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.r,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.aA,0,w,w,w,w,w,B.ag),w),w,w,0,Aj.Yo,B.d0,w,w,w)},
$S:47}
C.fHs.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fHt.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.ak$.x.h(0,t.a)
m=m==null?null:m.gb8()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lX(2.5),$async$$0)
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
return A.b(A.rQ(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fHu.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fC8(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.S(A.b2(null,null,null,null,null,B.r,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fHn.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eI(w,B.aA,A.v(A.a([new A.D(D.bqP,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nu,w,w,w),1),A.aH(w,w,w,w,B.ln,w,w,w,new C.fHl(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dq(1,B.cn,new A.D(B.fV,A.bw(A.m(14),A.fL(t,B.A,w,w,B.cj,B.du,!1,w,!1,w,w),B.aq),w),w),new A.D(B.LR,new A.a7(1/0,w,A.dk(B.oR,D.aQy,new C.fHm(t,this.c,d),A.bl(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.M2,B.d0,w,new A.b7(v,B.Y),w)},
$S:47}
C.fHl.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fHm.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rQ(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fHz.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eI(w,B.aA,new A.D(D.bqX,A.v(A.a([A.B(A.a([D.bwg,A.aH(w,w,w,w,B.ln,w,w,w,new C.fHx(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.N,new A.ev(A.bw(A.m(14),A.p(w,A.b3(w,w,w,new C.b9X(s.ax,w),B.au),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a7(1/0,w,A.dk(B.oR,D.aQy,new C.fHy(t,s,d),A.bl(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(v,B.Y),w)},
$S:47}
C.fHx.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fHy.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.ak$.x.h(0,t.a)
n=n==null?null:n.gb8()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lX(2.5),$async$$0)
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
return A.b(A.rQ(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fqt.prototype={
$1(d){return d.a===this.a},
$S:240}
C.dFh.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dF2.prototype={
bj1(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dX:B.c
s=u.a
w=2
return A.b(A.bR(t,null,new C.dF5(s,q,e),p,!0,!0,!1,B.Id,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dF6(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bj1(d,e)},
$S:1912}
C.dF5.prototype={
$1(d){var w,v=null,u=this.c===B.w_,t=u?D.dal:D.d6y
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.aA,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(K.ahn,A.v(A.a([u,B.at,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.br:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.ig(!0,v,v,B.y,L.aNJ,new C.dF4(this.a,w,t,d),t.length,v,B.dR,B.ah,!0)],x.p),B.aj,v,B.e,B.Q,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:26}
C.dF4.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cY.j(0.14)
else w=t.b.a.d.a?B.M:B.aP
v=A.m(14)
if(q)u=B.cY
else u=(t.b.a.d.a?B.br:B.bn).j(0.16)
u=A.I(u,B.q,q?1.6:1)
return A.aL(!1,p,!0,A.p(B.A,C.aXP(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dF3(t.d,r),s,s,s,s,s,s,s)},
$S:195}
C.dF3.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.dF6.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dF0.prototype={
$3(d,e,f){return B.bI},
$C:"$3",
$R:3,
$S:95}
C.dF1.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cI(B.ct,e,v)
return new A.cZ(e,!1,A.il(B.A,A.av(A.aG(!1,B.a1,!0,v,new A.e0(new C.dF_(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ag),v,v,v),v,new A.bf(t,new A.bo(0.96,1,u),u.k("bf<bJ.T>"))),v)},
$S:31}
C.dF_.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bU,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dX:B.c,f=A.m(14),e=A.I((h?B.br:B.bn).j(0.16),B.q,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.B(A.a([w,A.aL(!1,v,!0,new A.D(B.eq,A.X(B.cD,i.a.d.a?B.br:B.bn,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dEL(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aRv("Name")
r=l.a
q=r.d==null?k:new C.dEM(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bm:B.lG
n=A.I(B.cY.j(0.35),B.q,1)
m=r.d
t=A.aM(k,B.T,h,k,!0,B.r,k,A.aN(),w,k,k,k,k,k,2,s.baC(new A.D(B.fz,A.aL(!1,p,!0,A.p(B.A,C.aXP(m==null?"\ud83d\udc64":A.fwm(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.co,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.kz,k,B.a6X,k,k)
v=A.a([v,B.ac,t,B.N,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bn,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aS8("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dEN(r,a0),r.d===B.w_),1),B.ab,A.E(i.aS8("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dES(r,a0),r.d===B.a3V),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.N,new A.bI(B.a3,k,k,A.hf(D.bLf,D.fsY,new C.dET(r,l.e,a0),A.fv(k,k,k,k,k,k,k,k,k,k,k,B.cY,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cb)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.ub(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.f,k,k,k,k,k,2,i.aRw("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ai,k,k,s,k,k,B.dV,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.M:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.br:B.bn).j(0.22),B.q,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wE(r.a,!1)
v.push(A.aG(!1,B.a1,!0,q,A.aL(!1,p,!0,A.p(k,A.B(A.a([A.E(A.v(A.a([t,B.bB,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bI6],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bk,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dEU(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ag))
if(!h)B.d.v(v,A.a([B.N,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.r,k,k,k,k,k,2,i.aRv("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b_0(r.b.length!==0,B.mq,new C.dEV(r,i,a0),new C.dEW(r,a0),"Upload from gallery","ID photo"))
v.push(i.b_0(r.c.length!==0,D.bBp,new C.dEX(r,i,d,a0),new C.dEY(r,a0),"Camera or gallery","Selfie"))
v.push(B.N)
t=l.w
v.push(new Ah.a76("Signature (optional)",t,new C.dEZ(a0),new C.dEO(a0,t),new C.dEP(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.br:B.bn
s=(i?B.br:B.bn).j(0.28)
s=A.E(A.dT(E.aQr,new C.dEQ(d),A.dh(k,k,k,k,k,k,k,k,k,t,k,k,B.ve,k,new A.b7(A.m(10),B.Y),new A.ay(s,1,B.q,-1),k,k,k,k)),1)
t=A.bl(B.cY,k,k,k,B.c,k,B.ve,k,new A.b7(A.m(10),B.Y),k,k,k)
v.push(A.B(A.a([s,B.ab,A.E(A.bG(A.d(h?"Save":"Update",k,k,k,k,k,k,B.uC,k,k,k),new C.dER(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cd(A.v(v,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.vn,B.jf,k,k,360)},
$S:175}
C.dEL.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dEM.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dEN.prototype={
$0(){return this.b.$1(new C.dEK(this.a))},
$S:0}
C.dEK.prototype={
$0(){var w=this.a
w.d=B.w_
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dES.prototype={
$0(){return this.b.$1(new C.dEJ(this.a))},
$S:0}
C.dEJ.prototype={
$0(){var w=this.a
w.d=B.a3V
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dET.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dEU.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wI(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dEI(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEI.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcj(),w.gce(),w.gcu(),0,0,0,0,0)},
$S:0}
C.dEV.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.OY(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dEH(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEH.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dEW.prototype={
$0(){return this.b.$1(new C.dEG(this.a))},
$S:0}
C.dEG.prototype={
$0(){return this.a.b=""},
$S:0}
C.dEX.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dX:B.c
w=3
return A.b(A.bR(q,null,new C.dEE(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.OY(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dEF(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEE.prototype={
$1(d){var w=null
return A.bm(!0,A.v(A.a([A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.amr,w,w,w,w,new C.dEy(d),!1,w,w,w,w,w,w,w,D.fjx,w,w,w),A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.amp,w,w,w,w,new C.dEz(d),!1,w,w,w,w,w,w,w,D.fqg,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.af,!0,!0)},
$S:26}
C.dEy.prototype={
$0(){A.a5(this.a,!1).O("camera")
return null},
$S:0}
C.dEz.prototype={
$0(){A.a5(this.a,!1).O("gallery")
return null},
$S:0}
C.dEF.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dEY.prototype={
$0(){return this.b.$1(new C.dED(this.a))},
$S:0}
C.dED.prototype={
$0(){return this.a.c=""},
$S:0}
C.dEZ.prototype={
$0(){return this.a.$1(new C.dEC())},
$S:0}
C.dEC.prototype={
$0(){},
$S:0}
C.dEO.prototype={
$0(){return this.a.$1(new C.dEB(this.b))},
$S:0}
C.dEB.prototype={
$0(){return B.d.a9(this.a)},
$S:0}
C.dEP.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ahd(u.a,null,null,new C.dEA(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEA.prototype={
$4(d,e,f,g){this.a.$1(new C.dEx(this.b,d))},
$S:438}
C.dEx.prototype={
$0(){var w=this.a
B.d.a9(w)
B.d.v(w,this.b)},
$S:0}
C.dEQ.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dER.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.S(D.eUl)
return}if(w.a.d==null){w.c.I(x.q).f.S(D.eRh)
return}A.a5(w.c,!1).O(!0)},
$S:0}
C.dFk.prototype={
$3(d,e,f){return B.bI},
$C:"$3",
$R:3,
$S:95}
C.dFl.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dX:B.c,n=A.m(14),m=A.I((p?B.br:B.bn).j(0.16),B.q,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.aA,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Ay(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.br:B.bn,r,r,r,r,r,r,r,r,13,r,r,B.a5,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.yU(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.yU(r).length>0?B.bG:B.cY,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.br:B.bn
t=(q?B.br:B.bn).j(0.28)
s=x.p
return new A.cZ(e,!1,A.av(A.aG(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.N,v,u,B.aB,A.B(A.a([A.E(A.dT(B.nv,new C.dFi(d),A.dh(r,r,r,r,r,r,r,r,r,w,r,r,B.jy,r,new A.b7(A.m(10),B.Y),new A.ay(t,1,B.q,-1),r,r,r,r)),1),B.ab,A.E(A.bG(D.fqF,new C.dFj(d),A.bl(B.cY,r,r,r,B.c,r,B.jy,r,new A.b7(A.m(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.B7,E.Yf,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ag),r,r,r),r)},
$S:31}
C.dFi.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dFj.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dFe.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dFf(r),p=r.a.d.a,o=p?B.dX:B.c,n=A.m(14),m=A.I((p?B.br:B.bn).j(0.14),B.q,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.aA,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Ay(l.c),s,s,s,s,s,s,D.f5B,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iy((r.a.d.a?B.br:B.bn).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a_6,"View receipt",new C.dF7(r,d,l))
u=l.x!=null
t=u?B.r9:B.pS
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bqU,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dF8(r,d,l)),q.$3$icon$label$onTap(B.Bo,"Edit",new C.dF9(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mq,"View / download ID",new C.dFa(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bBo,"View / download selfie",new C.dFb(r,d,l)))
if(l.gaEB())p.push(q.$3$icon$label$onTap(A6.a0c,"View / download signature",new C.dFc(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bG,B.e6,"Delete",new C.dFd(r,d,l)))
p.push(B.at)
return A.bm(!0,new A.D(B.vj,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:26}
C.dFf.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.aA
else w=d
return A.aL(!1,v,!0,new A.D(B.eP,A.B(A.a([A.X(e,w,v,v,v,20),B.bf,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1913}
C.dF7.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fHr(w,this.c)},
$S:0}
C.dF8.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.RC(this.c)},
$S:0}
C.dF9.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.CS(this.c)},
$S:0}
C.dFa.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCJ(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dFb.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCJ(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dFc.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fHw(w,this.c)},
$S:0}
C.dFd.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.NC(0,this.c)},
$S:0}
C.dFm.prototype={
$1(d){return d.x==null},
$S:240}
C.dFn.prototype={
$1(d){return d.x!=null},
$S:240}
C.dFo.prototype={
$2(d,e){return d+e.c},
$S:1914}
C.dFp.prototype={
$0(){return this.a.bye()},
$S:0}
C.dFg.prototype={
$0(){return this.a.ae9(this.b)},
$S:0}
C.fr2.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fr3.prototype={
$0(){return B.d.gJ(D.a1o)},
$S:z+68}
C.d56.prototype={
$0(){var w=this.a
return w.m(new C.d54(w,this.b))},
$S:0}
C.d54.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d55.prototype={
$0(){},
$S:0}
C.d57.prototype={
$0(){var w=this.a.gbX0()
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.ft6.prototype={
$1(d){return C.h3k(A.a2(d,x.N,x.z))},
$S:z+11}
C.ft7.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.ft8.prototype={
$2(d,e){var w=A.c7(d.a,null),v=A.c7(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+26}
C.fG5.prototype={
$1(d){return d.ag()},
$S:z+21}
C.fOf.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fqk.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bMX.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f0(e,v)?v:null},
$S:1915}
C.fGE.prototype={
$1(d){var w=this
return new C.YT(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d5M.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d5L(w,d))},
$S:z+66}
C.d5L.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5A.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cy(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d5x.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d58.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d59.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d5B.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d5h.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.dX:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ek(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.d5f(d),w,w),A.bG(B.wj,new C.d5g(d),A.bl(B.mT,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.d5f.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d5g.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d5i.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d5y.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d5z.prototype={
$0(){return B.d.gJ(D.yF)},
$S:z+12}
C.d5d.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyb(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Sj(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d5e.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5j.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Yr(v,u,J.ad(w.d),null)},
$S:z+64}
C.d5k.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5K.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aE(s,new C.Y9(r.y,r.gyb(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d5I(r),s,s,s,s,s,s,!1,B.a8)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b9l(v,e,w,u,t,r.gbOd(),C.hix(r.y.Q),r.gyb(0),s)
w=t}return A.c6(q,new C.d5J(r,e),new A.D(B.Yg,w,s))},
$S:1916}
C.d5J.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd_(t).ay){t=this.b
u=x.cy.a(B.d.gd_(u.f.f)).guB(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dp()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fB(v*3.141592653589793*0.5)
return A.fs(B.a3,A.dc(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.d5I.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFH(B.pG,B.iz)},
$S:0}
C.d5u.prototype={
$0(){var w=this.a
return w.m(new C.d5t(w))},
$S:0}
C.d5t.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d5v.prototype={
$0(){var w=this.a.c
w.toString
A.a5(w,!1).O(null)
return null},
$S:0}
C.d5a.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jP.j(0.5),r=x.p,q=A.a([D.fi9,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cm(p.d)?"Write this book":"Write a new book"
q.push(p.Yn(d,B.dW,w,J.cm(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Yn(d,L.akk,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cy(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cC,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kf.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cC,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kf.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Yn(d,A_.als,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Yn(d,B.pY,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Yn(d,B.pY,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eI(u,E.AA,A.bm(!0,new A.D(A5.xC,A.v(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.ahM,B.d0,u,new A.b7(t,new A.ay(s,1.4,B.q,-1)),u)},
$S:47}
C.d5w.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.d5n.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cy(w.d)
return new C.YV(v,J.cy(w.d),w.r+1,null)},
$S:z+54}
C.d5o.prototype={
$1(d){var w=null
return A.oh(!1,A.ek(w,w,w,E.AA,new A.kg(this.a,new C.d5m(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:333}
C.d5m.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a6D,B.of,A.E(A.d(e,w,w,w,w,w,w,B.iH,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:750}
C.d5p.prototype={
$0(){return this.a.a=!1},
$S:51}
C.d5q.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:183}
C.d5r.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5s.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.AH(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.R8(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d5l(s,t))
w=4
return A.b(s.kT(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d5l.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5D.prototype={
$1(d){var w=null
return A.oh(!1,A.ek(w,w,w,E.AA,new A.kg(this.a,new C.d5C(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:333}
C.d5C.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a6D,B.of,A.E(A.d(e,w,w,w,w,w,w,B.iH,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:750}
C.d5E.prototype={
$0(){return this.a.a=!1},
$S:51}
C.d5F.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:183}
C.d5G.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:183}
C.d5H.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.AH(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kT(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d5b.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bg5(B.pG,U.LF)},
$S:0}
C.d5c.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFH(B.pG,U.LF)},
$S:0}
C.d7w.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d7x.prototype={
$1(d){var w=this.a
return w.m(new C.d7v(w))},
$S:9}
C.d7v.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d7y.prototype={
$1(d){var w=this.a
return w.m(new C.d7u(w))},
$S:9}
C.d7u.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d7z.prototype={
$1(d){var w=this.a
return w.m(new C.d7t(w))},
$S:9}
C.d7t.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d7A.prototype={
$0(){var w=this.a
return w.m(new C.d7s(w,this.b))},
$S:0}
C.d7s.prototype={
$0(){var w=this.b
this.a.d.saV(0,w)
return w},
$S:0}
C.d7B.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga12()
A.a5(this.b,!1).O(new A.bnY(w,v))},
$S:0}
C.d60.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d6_.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.YR(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d64.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d63.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b6j(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hE,v,v,v)
return A.ek(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.d61(d),v,v),A.bG(B.wj,new C.d62(d),A.bl(B.mT,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.AA,w,v,v,v,v,D.fh3,v)},
$S:19}
C.d61.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d62.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d65.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d66.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.cd(A.bW(B.bz,r,B.bq,18,14),B.r,t,B.y,t,D.brO,t,t,B.ah)},
$S:302}
C.d5Z.prototype={
$0(){return this.a.PE(0,this.b)},
$S:0}
C.d5Y.prototype={
$0(){return this.a.P8(0,this.b)},
$S:0}
C.cEB.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cEC.prototype={
$0(){return B.d.gJ(D.yF)},
$S:z+12}
C.cED.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bZ(0,new A.D(d,A.c0(w,new A.o(w,w,A.I(this.a.j(f),B.q,g),v,w,w,B.n),B.bd),w),0,0,0)},
$S:1918}
C.cY2.prototype={
$1(d){return this.a.m(new C.cY1(this.b,this.c))},
$S:9}
C.cY1.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cYr.prototype={
$1(d){return this.a.m(new C.cYe())},
$S:2}
C.cYe.prototype={
$0(){},
$S:0}
C.cYs.prototype={
$1(d){return this.a.m(new C.cYd())},
$S:2}
C.cYd.prototype={
$0(){},
$S:0}
C.cYt.prototype={
$0(){var w=this.a
return w.m(new C.cYc(w,this.b))},
$S:0}
C.cYc.prototype={
$0(){var w=this.a
return w.d=w.go1().Fq(this.b.a)},
$S:0}
C.cYu.prototype={
$0(){var w=this.a
return w.m(new C.cYb(w,this.b))},
$S:0}
C.cYb.prototype={
$0(){var w=this.a
return w.d=w.go1().cFl(this.b)},
$S:0}
C.cYv.prototype={
$1(d){return this.a.m(new C.cYa())},
$S:2}
C.cYa.prototype={
$0(){},
$S:0}
C.cYw.prototype={
$0(){var w=this.a
return w.m(new C.cY9(w,this.b))},
$S:0}
C.cY9.prototype={
$0(){var w=this.a
return w.d=w.go1().cFq(this.b.a)},
$S:0}
C.cYx.prototype={
$1(d){var w=this.a
return w.m(new C.cYm(w,d))},
$S:6}
C.cYm.prototype={
$0(){var w=this.a
return w.d=w.go1().cGk(this.b)},
$S:0}
C.cYy.prototype={
$1(d){var w=this.a
return w.d=w.go1().aCO(d)},
$S:2}
C.cYz.prototype={
$1(d){var w=this.a
return w.d=w.go1().cFt(d)},
$S:2}
C.cYB.prototype={
$1(d){var w=this.a
return w.d=w.go1().cGi(d)},
$S:2}
C.cYC.prototype={
$1(d){var w=this.a
return w.m(new C.cYl(w,d))},
$S:9}
C.cYl.prototype={
$0(){var w=this.a
return w.d=w.go1().cG9(this.b)},
$S:0}
C.cYD.prototype={
$0(){var w=this.a,v=w.go1(),u=B.a.i(w.gyb(0).a.a),t=B.a.i(w.gaA2().a.a)
u=v.baT(B.a.i(w.gapT().a.a),t,u)
A.a5(this.b,!1).O(u)
return null},
$S:0}
C.dTf.prototype={
$0(){var w=this.a
w.vK()
w.a.bp()
w.a.pO()},
$S:0}
C.dTe.prototype={
$0(){var w=this.a
w.vK()
w.a.bp()
w.a.pO()},
$S:0}
C.dTh.prototype={
$0(){var w=this,v=w.b
if(J.cy(v)||J.cm(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dTi.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dTj.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dTd.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dTg.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dTl.prototype={
$0(){this.a.O7()
return null},
$S:0}
C.dTk.prototype={
$0(){return this.a.Ef(this.b)},
$S:0}
C.dSG.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.de,w,w,!0,w,w,new C.dSE(d),w,w),r=A.bl(B.bV,w,w,w,w,w,w,w,w,w,w,w)
return A.ek(A.a([s,A.bG(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dSF(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.dSE.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dSF.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dSH.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cFP(this.b)},
$S:0}
C.dSB.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aRL(w.b,w.c,w.d)},
$S:8}
C.dS9.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dSa.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSo.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Gd(t.a.c),$async$$0)
case 2:s=r.ra(q.dH(e,new C.dSm(t)))
if(s!=null&&t.c!=null)t.m(new C.dSn(t,s))
t.a.bp()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSm.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dSn.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSp.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dSq.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSA.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cGC(C.hiH(w),w)},
$S:0}
C.dSy.prototype={
$1(d){return new A.e0(new C.dSx(this.a,this.b),null)},
$S:21}
C.dSx.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dX:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.br:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.am4,v,v,v,p>0?new C.dSt(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aQ,A.B(A.a([o,A.E(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.amE,v,v,v,new C.dSu(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.ek(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dSv(d),v,v),A.bG(B.pe,new C.dSw(d),A.bl(B.bV,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:158}
C.dSt.prototype={
$0(){return this.b.$1(new C.dSs(this.a))},
$S:0}
C.dSs.prototype={
$0(){return--this.a.a},
$S:0}
C.dSu.prototype={
$0(){return this.b.$1(new C.dSr(this.a))},
$S:0}
C.dSr.prototype={
$0(){return++this.a.a},
$S:0}
C.dSv.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dSw.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dSz.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cGp(this.a.a)
w.r.a9(0)},
$S:0}
C.dRY.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ahl(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hcn(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dRZ.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aCL(w)},
$S:0}
C.dSJ.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.acH(this.b,w,this.c,null)},
$S:z+24}
C.dSD.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dX:B.c,t=A.m(20),s=A.X(B.lj,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.Q,0,B.p)
return A.ek(A.a([A.bG(D.frM,new C.dSC(d),A.bl(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.bb,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:19}
C.dSC.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dS_.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dS0.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dS1.prototype={
$1(d){return d.a},
$S:z+7}
C.dS2.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.L)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hX(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aCL(w)},
$S:0}
C.dS6.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ahl(q)
w=A.U(q).k("a1<1>")
q=A.C(new A.a1(q,new C.dS4(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hcn(v.e,null,r,v.f,v.r,new C.dS5(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dS5.prototype={
$0(){return this.a.a9i(this.b)},
$S:0}
C.dS4.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dS7.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("K<1,hX>")
w=A.C(new A.K(w,new C.dS3(this.b),v),v.k("ak.E"))
u.d=t.aCL(w)},
$S:0}
C.dS3.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dSI.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dSj.prototype={
$1(d){return d.length!==0},
$S:3}
C.dSk.prototype={
$1(d){var w=this
return new A.e0(new C.dSi(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dSi.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dX:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.br:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.br:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.K(o,new C.dSe(u,e,o),A.U(o).k("K<1,r>")))
p.push(B.N)
u=w.d
p.push(A.aM(v,B.T,!1,v,!0,B.r,v,A.aN(),u,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.m(12),B.dg),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ai,v,v,v,v,v,B.m2,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.an,v,v,v,v))
p=A.v(p,B.aj,v,B.e,B.Q,0,B.p)
t=w.a
return A.ek(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dSf(d),v,v),A.bG(B.J6,new C.dSg(t,u,o,e),A.bl(B.bV,v,v,v,v,v,v,v,v,v,v,v)),A.bG(D.ffe,new C.dSh(t,u,o,d),A.bl(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:158}
C.dSe.prototype={
$1(d){var w=null
return A.dL(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bOP,w,w,w,new C.dSd(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1919}
C.dSd.prototype={
$0(){return this.a.$1(new C.dSb(this.b,this.c))},
$S:0}
C.dSb.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dSf.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dSg.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dSc(w.c,u))
v.bO(0,B.c5)}},
$S:0}
C.dSc.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dSh.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a5(w.d,!1).O(!0)},
$S:0}
C.dSl.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cH3(this.b,D.tG,C.Gb(v,w.a.c))},
$S:0}
C.dSQ.prototype={
$1(d){return d.as},
$S:z+1}
C.dSR.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iN(this.b,w)},
$S:0}
C.dSS.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.i6H(v)
return w.Vl(v==null?null:v.a)},
$S:0}
C.dST.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hK0(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gco(k)){k=A.aQ(1/0,e.a,e.b)
s=A.aQ(1/0,e.c,e.d)
l.cp5(new A.ar(u,t),v.gbgW(),new A.ar(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cN3:D.cLu
q=A.I(s?B.dr:D.baa,B.q,1)
p=A.m(22)
o=A.bZ(0,A.b3(m,m,m,new C.bcJ(s,m),B.au),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bw(p,new A.an(B.W,m,B.aa,B.r,A.a([o,A.bZ(0,A.uk(new A.Q(n,n,n,n),new A.a7(u,t,new C.bdC(l.d,v,l.f,w,new C.dSM(l),l.gc96(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bv1(s,new C.dSN(l,e),new C.dSO(l,e),new C.dSP(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.b_,B.b5,B.x,r,m,m),B.n),m,m,m,A0.agR,m,m,m,m)},
$S:209}
C.dSM.prototype={
$1(d){var w=this.a
w.m(new C.dSK(w,d))},
$S:2}
C.dSK.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.L(0,v)},
$S:0}
C.dSN.prototype={
$0(){var w=this.b
return this.a.b8y(1.25,new A.ar(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dSO.prototype={
$0(){var w=this.b
return this.a.b8y(0.8,new A.ar(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dSP.prototype={
$0(){var w=this,v=w.b
return w.a.aRL(new A.ar(A.aQ(1/0,v.a,v.b),A.aQ(1/0,v.c,v.d)),new A.ar(w.c,w.d),w.e.gbgW())},
$S:0}
C.dSU.prototype={
$0(){var w=this.a
return w.m(new C.dSL(w))},
$S:0}
C.dSL.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dS8.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fJ(new A.fC(s.c)),$async$$0)
case 2:t.xF("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d6a.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bhk(u,C.hmM(v.c,u),new C.d69(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d69.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d6b.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bkG(d.d,d.c,u.f.t(0,d.a),new C.d68(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d68.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fr6.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.ra(new A.cQ(new A.a1(v,new C.fr7(d),w.k("a1<1>")),new C.fr8(),w.k("cQ<1,n>")))},
$S:z+20}
C.fr7.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fr8.prototype={
$1(d){return d.a},
$S:z+7}
C.fr4.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fr5.prototype={
$1(d){return d.b},
$S:z+7}
C.frb.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.ra(new A.cQ(new A.a1(v,new C.frc(d),w.k("a1<1>")),new C.frd(),w.k("cQ<1,n>")))},
$S:z+20}
C.frc.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.frd.prototype={
$1(d){return d.a},
$S:z+7}
C.fr9.prototype={
$1(d){var w,v=A.et([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ai(0,w)&&v.L(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fra.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d6d.prototype={
$0(){return this.a},
$S:z+32}
C.d6u.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ai(0,d)},
$S:245}
C.d6m.prototype={
$2(d,e){var w=this.a.cg(0,d,new C.d6n()),v=J.a6(w)
if(!v.t(w,e))v.L(w,e)},
$S:111}
C.d6n.prototype={
$0(){return A.a([],x.s)},
$S:751}
C.d6l.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f0(w,e)
return w===!0},
$S:286}
C.d6e.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d6k.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d6j.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.L(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.C6:v)
u=1
while(v.C())u+=s.$2(v.gT(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.T:v)
while(v.C()){t=v.gT(v)
if(e.t(0,t))continue
e.L(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.C6:t)
while(t.C())u+=s.$2(t.gT(t).a,e)}return u},
$S:1921}
C.d6f.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d6o.prototype={
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
break}A:{s=u.gT(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.L(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aV(t==null?D.C6:t)
while(t.C()){r=t.gT(t)
if(r.a!==a9&&!B.d.b4(w,new C.d6p(r)))w.push(r)}}B.d.bn(w,new C.d6q(a8))
B.d.b0(w,new C.d6r())
q=C.hK_(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.ew1],x.G))}a8=A.a([],x.s)
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
else j.push(d)}}a0=(B.d.gJ(k)+B.d.gal(k))/2
a1=A.a([new A.y(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bnI(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1922}
C.d6p.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d6q.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d6r.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.d6s.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a6(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a3(v).k("bc<2>")).cI(0,0,B.pl)+88-w.gJ(n).a}else u=0
for(w=J.a6(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:695}
C.d6t.prototype={
$1(d){return 16+d*156},
$S:270}
C.d6c.prototype={
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
t.n(0,d,new C.Fs(r,new A.u(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.Fs(s,new A.u(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.Fs(s,new A.u(e,v)))}t=o.r.h(0,d)
t=J.aV(t==null?B.T:t)
s=o.w
while(t.C()){r=t.gT(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.JJ(d,new A.u(e+t,w),s,s.length))}},
$S:183}
C.d6g.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aIc(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:111}
C.d6h.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d6i.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:752}
C.d6v.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:752}
C.d6w.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:461}
C.d6x.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:191}
C.d6y.prototype={
$1(d){return d>=0.5},
$S:122}
C.f9a.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hr(A.aL(!1,v,!0,new A.a7(38,38,A.X(d,this.a.c?B.c:B.cB,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1924}
C.eL5.prototype={
$1(d){var w=null,v=A.m(8),u=B.bV.j(0.12),t=A.m(8)
return new A.D(B.n8,A.aL(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.f1k,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.Mb,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eL4(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eL4.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dmn.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dmm.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.ns,B.L,w,w)
return A.ek(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.dmk(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mf,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dml(d),w,w)],x.p),B.bb,B.AX,w,u,D.bt3,w,D.bv_,new A.b7(v,B.Y),w,w)},
$S:19}
C.dmk.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dml.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dmw.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dmx.prototype={
$1(d){var w=this.a
return w.m(new C.dmv(w,d))},
$S:z+37}
C.dmv.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmy.prototype={
$1(d){var w=null
return A.qf(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dmB.prototype={
$1(d){var w=this.a
return w.m(new C.dmu(w,d))},
$S:32}
C.dmu.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dmA.prototype={
$1(d){var w=null
return A.qf(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dmC.prototype={
$1(d){var w=this.a
return w.m(new C.dmt(w,d))},
$S:32}
C.dmt.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dmD.prototype={
$0(){var w=this.a
return w.m(new C.dms(w))},
$S:0}
C.dms.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dmE.prototype={
$0(){var w=this.a
return w.m(new C.dmr(w))},
$S:0}
C.dmr.prototype={
$0(){return++this.a.at},
$S:0}
C.dmF.prototype={
$0(){var w=this.a
return w.m(new C.dmq(w))},
$S:0}
C.dmq.prototype={
$0(){return--this.a.ax},
$S:0}
C.dmG.prototype={
$0(){var w=this.a
return w.m(new C.dmp(w))},
$S:0}
C.dmp.prototype={
$0(){return++this.a.ax},
$S:0}
C.dmH.prototype={
$1(d){var w=this.a
return w.m(new C.dmo(w,d))},
$S:9}
C.dmo.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dmz.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dmI.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bV.j(0.18)
else w=q.c.a?B.dX:B.c
v=A.m(12)
if(p)u=B.bV
else u=(q.c.a?B.e0:B.bP).j(0.85)
u=A.I(u,B.q,p?1.5:1)
if(p)t=B.bV
else t=q.c.a?B.br:B.bn
t=A.X(f,t,r,r,r,18)
if(p)s=B.bV
else s=q.c.a?B.br:B.bn
return A.E(A.aG(!1,B.a1,!0,r,A.aL(!1,o,!0,A.dj(r,A.v(A.a([t,B.at,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bc,new A.o(w,r,u,v,r,r,B.n),B.eF,r,r,r,B.jy,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dmJ(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
$S:z+39}
C.dmJ.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dmS.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.c7D.prototype={
$2(d,e){return new A.bv(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:90}
C.c7K.prototype={
$1(d){return d.ag()},
$S:z+5}
C.c7L.prototype={
$2(d,e){var w=J.b6(e,new C.c7J(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bv(d,w,x.d2)},
$S:z+41}
C.c7J.prototype={
$1(d){return d.ag()},
$S:z+21}
C.c7F.prototype={
$1(d){return C.ak9(A.a2(d,x.N,x.z))},
$S:z+8}
C.c7G.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c7H.prototype={
$1(d){return C.h3k(A.a2(d,x.N,x.z))},
$S:z+11}
C.c7I.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c7P.prototype={
$1(d){return new A.aFh(d.f.length,d.a,d.b)},
$S:z+43}
C.c7Q.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:645}
C.c7M.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c7N.prototype={
$1(d){return d.cG1(C.Gb(d,this.a))},
$S:z+44}
C.dT2.prototype={
$1(d){return C.tR(d,this.a.a.c)},
$S:z+2}
C.dT3.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dT7.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dT8.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dT_.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZi(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yc("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.p1(r.c,r.e),$async$$0)
case 4:s.yc(p)
w=5
return A.b(s.Jf(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dT0.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZi(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yc("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.p1(r.c,r.e),$async$$0)
case 4:s.yc(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dT1.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.UF(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.yc("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.yc("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.yc("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Jf(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.aa(j)
o=r.a
if(o.c==null){w=1
break}o.yc(B.a.ee(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dT6.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZh(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yc("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a5(r,!1).c8(A.ea(new C.dT5(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.p1(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dT5.prototype={
$1(d){var w=this.b
return new C.ZP(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dT4.prototype={
$1(d){return D.fSU},
$S:z+46}
C.dTa.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dTb.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dT9(w,d)
return new A.D(B.db,new C.bdG(this.b,d.c,d.a,w,null),null)},
$S:1925}
C.dT9.prototype={
$0(){return this.a.X3(this.b.b)},
$S:0}
C.dSV.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dSW.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dSX.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dSY.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dSZ.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dTc.prototype={
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
$S:190}
C.dEp.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dEq.prototype={
$0(){return B.d.gJ(D.a2P)},
$S:z+48}
C.dEr.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.X(this.b.d,B.c.j(0.95),w,w,D.cTg,44),w,w,w),w,w,new C.bis(u,t,v,w),B.au)},
$S:67}
C.fH6.prototype={
$1(d){return A.oM(new C.fH5(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:136}
C.fH5.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dX:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rt,24)],x.V),o=r?B.e0:B.bP
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bV.j(0.18)],x.O)
w=A.p(t,D.bJm,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a8(B.a3,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.aA,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.S,o,new A.D(E.ahQ,A.B(A.a([w,B.bf,A.E(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.br:B.bn,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.E(A.ig(!0,t,e,B.y,D.ePu,new C.fH4(this.b,s),20,B.ahr,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kF,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:116}
C.fH4.prototype={
$2(d,e){var w=null,v=D.a2P[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.e0:B.bP,B.q,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.ek,8)],x.V),p=A.m(15),o=A.E(new C.a5L(v.a,!0,w),1),n=s?B.jt:B.iQ,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aP:B.aA,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a1,!0,w,A.aL(!1,u,!0,A.eE(A.bw(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.br:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.lf,w,w,w)],l),B.aj,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fH3(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)},
$S:74}
C.fH3.prototype={
$0(){A.a5(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cfi.prototype={
$0(){return this.a.afc(this.b)},
$S:0}
C.fGt.prototype={
$1(d){return D.fPa},
$S:z+74}
C.fNX.prototype={
$1(d){var w=this
return new C.a0A(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fGy.prototype={
$1(d){return new C.Yt(this.a,null)},
$S:z+51}
C.fGx.prototype={
$1(d){return D.fQ9},
$S:z+52}
C.cYP.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cYQ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cYO(w,d))},
$S:32}
C.cYO.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cYR.prototype={
$1(d){return this.a.JP()},
$S:2}
C.cYS.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cYL.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cYM.prototype={
$1(d){return this.a.JP()},
$S:2}
C.cYN.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cwo.prototype={
$0(){},
$S:0}
C.cwu.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cwv.prototype={
$0(){return this.a.aNe(-1)},
$S:0}
C.cww.prototype={
$1(d){return this.a.m(new C.cwt())},
$S:2}
C.cwt.prototype={
$0(){},
$S:0}
C.cwx.prototype={
$0(){return this.a.aNe(1)},
$S:0}
C.cwy.prototype={
$1(d){return this.a.m(new C.cws())},
$S:2}
C.cws.prototype={
$0(){},
$S:0}
C.cwz.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.e0:B.bP
return A.ua(u,u,B.aZ,r,u,new C.cwr(t,d),B.B8,s,w,u,new A.ay(v,1,B.q,-1),B.cb)},
$S:1926}
C.cwr.prototype={
$1(d){var w=this.a
return w.m(new C.cwp(w,this.b))},
$S:9}
C.cwp.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cwA.prototype={
$1(d){return this.a.m(new C.cwq())},
$S:2}
C.cwq.prototype={
$0(){},
$S:0}
C.cwB.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.f8D.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a5(this.b,!1).O(w)},
$S:2}
C.f8E.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.f8F.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a5(this.b,!1).O(w)},
$S:0}
C.f8B.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbxn()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b3(new A.D(D.buZ,new A.ev(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.buR(p,v,this.b.a,u,t,r),r,r,B.au)},
$S:67}
C.f8C.prototype={
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
s=A.aq(B.aV,B.bV,w)
s.toString
s=A.a([B.aZ,s,B.aV],x.O)
return A.aG(!1,B.a1,!0,p,A.aL(!1,v,!0,A.eE(D.e6b,r,new A.o(r,r,A.I(B.c.j(0.4),B.q,1.5),u,r,new A.a8(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
$S:126}
C.fF9.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.eIf.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eI6.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eI7.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eId.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e0(new C.eIc(w,this.b),null)},
$S:21}
C.eIc.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dX:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eI(w,u,new A.D(B.ahK,A.v(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bn,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.h9a(new C.eI9(r,e),r.a),B.aB,A.B(A.a([A.E(A.dT(B.de,new C.eIa(d),w),1),B.av,A.E(A.bG(B.TD,new C.eIb(r,d),A.bl(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.aj,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(t,B.Y),w)},
$S:98}
C.eI9.prototype={
$1(d){return this.b.$1(new C.eI8(this.a,d))},
$S:32}
C.eI8.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eIa.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eIb.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.eIe.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Sg(this.b)},
$S:0}
C.eI1.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bar(w)},
$S:0}
C.eI5.prototype={
$1(d){return this.bju(d)},
bju(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.KV(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iN(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eI4.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("a1<1>")
w=A.C(new A.a1(w,new C.eI3(this.b),v),v.k("J.E"))
u.d=t.bar(w)},
$S:0}
C.eI3.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eIg.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iN(this.b,w)},
$S:0}
C.eIh.prototype={
$1(d){return this.a.bBs(d,this.b)},
$S:z+55}
C.eI2.prototype={
$0(){return this.a.a9h(this.b)},
$S:0}
C.fNN.prototype={
$1(d){return new C.ad1(this.a,this.b,this.c,null)},
$S:z+56}
C.eIj.prototype={
$0(){return this.a.ZI(this.b)},
$S:0}
C.eIk.prototype={
$0(){return this.a.PA(this.b)},
$S:0}
C.eIl.prototype={
$0(){return this.a.Ea(this.b)},
$S:0}
C.eIm.prototype={
$0(){return this.a.ZJ(this.b)},
$S:0}
C.eIi.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eHX.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eHY.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eHZ.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eI0.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pU(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eI_(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eI_.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eIJ.prototype={
$2(d,e){return d+e.gwO()},
$S:z+59}
C.eIF.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eIG.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eIq.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dX:B.c,s=A.m(24),r=A.p(v,D.bJM,B.f,v,v,new A.o(B.ay.j(u?0.18:0.08),v,A.I(B.ay.j(0.28),B.q,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.br:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aP:B.aA
u=u?B.e0:B.bP
w=x.p
return A.eI(v,t,new A.D(B.xG,A.v(A.a([r,B.aQ,q,B.N,p,B.d6,A.B(A.a([A.E(A.dT(B.nv,new C.eIo(d),A.dh(v,v,v,v,v,v,v,v,v,o,v,v,B.f7,v,new A.b7(A.m(14),B.Y),new A.ay(u,1,B.q,-1),v,v,v,v)),1),B.av,A.E(A.bG(D.fvu,new C.eIp(d),A.bl(B.ay,v,v,v,v,v,B.f7,v,new A.b7(A.m(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d0,v,new A.b7(s,B.Y),v)},
$S:47}
C.eIo.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.eIp.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eIz.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dX:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fM,28)],x.V),g=k?D.cZN:B.a2b,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.eJI,B.at,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cv,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.ax,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.ahN,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b3H(B.b7,B.iX,new C.eIw(v,d),l,"Camera import","Scan QR"),1),B.av,A.E(v.b3H(B.cy,M.yk,new C.eIx(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.ay.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.ay.j(0.28),B.q,1)
o=A.p(m,D.bJa,B.f,m,m,new A.o(B.ay.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.aA,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bn,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bm(!0,new A.D(B.vl,A.p(m,A.v(A.a([g,new A.D(B.ahL,A.v(A.a([w,B.S,u,B.by,t,B.S,A.aG(!1,B.a1,!0,m,A.aL(!1,s,!0,A.p(m,A.B(A.a([o,B.bf,n,A.X(B.ex,k?B.br:B.bn,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bC,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eIy(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:26}
C.eIw.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.vj("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eIx.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.vj("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eIy.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.Np(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eIu.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dX:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eT,24)],x.V),k=o?B.e0:B.bP
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.br:B.bn
u=A.bw(w,new A.a7(48,48,C.aPu(!0,A.m(12),48,N.MM,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aP:B.aA,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Ay(v.gwO())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.vl,A.p(q,A.v(A.a([B.S,k,new A.D(D.ahI,A.B(A.a([u,B.bf,A.E(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.br:B.bn,q,q,q,q,q,q,q,q,12,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.AO,r.cjf(B.tZ,B.aV,new C.eIs(d),p,"QR code or backup file","Transfer project"),r.b0F(!0,B.e6,B.ay,new C.eIt(d),p,"Remove from this device","Delete project"),B.S],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:26}
C.eIs.prototype={
$0(){A.a5(this.a,!1).O("transfer")
return null},
$S:0}
C.eIt.prototype={
$0(){A.a5(this.a,!1).O("delete")
return null},
$S:0}
C.eIv.prototype={
$1(d){return this.bjv(d)},
bjv(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.KV(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vy(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eIM.prototype={
$0(){var w=this.a
w.a.bp()
w.m(new C.eIL(w))},
$S:0}
C.eIL.prototype={
$0(){return this.a.r++},
$S:0}
C.eIN.prototype={
$0(){var w=this.a
return w.m(new C.eIK(w))},
$S:0}
C.eIK.prototype={
$0(){return this.a.r++},
$S:0}
C.eIn.prototype={
$0(){var w=this.a.c
w.toString
return A.iN(w,null)},
$S:0}
C.eIr.prototype={
$0(){return this.a.ccB(this.b)},
$S:0}
C.eII.prototype={
$0(){var w=this.a
return w.m(new C.eIH(w,this.b))},
$S:0}
C.eIH.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eIC.prototype={
$0(){return this.a.vj("scan")},
$S:0}
C.eID.prototype={
$0(){return this.a.vj("file")},
$S:0}
C.eIE.prototype={
$1(d){return this.a.cjg(d,this.b)},
$S:z+60}
C.eIB.prototype={
$0(){return this.a.Ee(this.b)},
$S:0}
C.eIA.prototype={
$0(){return this.a.a_d(this.b,this.c)},
$S:0}
C.cvQ.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cvP.prototype={
$1(d){return d.ag()},
$S:z+62}
C.cvN.prototype={
$1(d){return C.hsB(A.a2(d,x.N,x.z))},
$S:z+63}
C.cvO.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fqc.prototype={
$1(d){return d.y===D.ko},
$S:z+2}
C.fOn.prototype={
$1(d){return C.bAF(d,this.a)},
$S:z+2}
C.foD.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bN1.prototype={
$1(d){return!d.as},
$S:z+1}
C.bN0.prototype={
$1(d){return d.ag()},
$S:z+15}
C.bMY.prototype={
$1(d){return C.h3l(A.a2(d,x.N,x.z))},
$S:z+14}
C.bMZ.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bN_.prototype={
$1(d){return J.k(d)},
$S:17}
C.fge.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fbW.prototype={
$1(d){return C.fUM(A.a2(d,x.N,x.z))},
$S:z+67}
C.fbX.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.fbY.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fGk.prototype={
$1(d){return J.k(d)},
$S:17}
C.fGl.prototype={
$1(d){return d.a},
$S:z+69}
C.fGm.prototype={
$1(d){return d.length!==0},
$S:3}
C.fGn.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fGo.prototype={
$1(d){return d.Sg(null).ag()},
$S:z+70}
C.fOl.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fqE.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.ftc.prototype={
$1(d){return C.ak9(A.a2(d,x.N,x.z))},
$S:z+8}
C.ftd.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fte.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.ftf.prototype={
$1(d){return d.ag()},
$S:z+5}
C.ftg.prototype={
$1(d){return C.tR(d,this.a)},
$S:z+2}
C.fG7.prototype={
$1(d){return C.tR(d,this.a)},
$S:z+2}
C.fOg.prototype={
$1(d){return C.ak9(A.a2(d,x.N,x.z))},
$S:z+8}
C.fOh.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fOi.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fql.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fqm.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fOr.prototype={
$1(d){return!d.as},
$S:z+1}
C.fpS.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fpT.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fpU.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.fNY.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.ftZ.prototype={
$1(d){return d.Q},
$S:z+72}
C.fG0.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.ft9.prototype={
$1(d){return C.ak9(A.a2(d,x.N,x.z))},
$S:z+8}
C.fta.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.ftb.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fFW.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fct.prototype={
$1(d){return d.length!==0},
$S:3}
C.fcu.prototype={
$1(d){return C.h3l(A.a2(d,x.N,x.z))},
$S:z+14}
C.fcv.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fcw.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fcx.prototype={
$1(d){return d.length!==0},
$S:3}
C.fcK.prototype={
$2(d,e){return d.eU(new C.fcL(e))},
$S:1927}
C.fcL.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c8},
$S:1928}
C.fcH.prototype={
$1(d){return C.hOG(d,this.a)},
$S:z+73}
C.fcI.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fcJ.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fgT.prototype={
$1(d){return d.a},
$S:z+49}
C.fgU.prototype={
$1(d){return d.length!==0},
$S:3}
C.fgV.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fj8.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fnW.prototype={
$1(d){return C.heH(d,C.Gb(d,this.a))},
$S:z+5}
C.fnX.prototype={
$1(d){return C.heI(d,C.Gb(d,this.a))},
$S:z+5};(function aliases(){var w=C.aKy.prototype
w.btz=w.q
w=C.aMJ.prototype
w.bvX=w.q
w=C.aMK.prototype
w.bvY=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aC2.prototype,"gcgc","cgd",25)
var s
w(s=C.az6.prototype,"gc9c","c9d",42)
v(s,"gaLu","MY",0)
v(s,"gcor","AC",0)
v(s,"gbJa","ND",0)
v(s,"gcCf","yd",0)
v(s,"gcid","a_V",0)
v(s,"gbEz","Nl",0)
v(s,"gbJB","Wv",0)
w(s,"gbOd","bOe",71)
v(s,"gbz1","zF",0)
v(C.az7.prototype,"gcCb","F5",0)
v(s=C.aCD.prototype,"gaeP","vz",0)
v(s,"gcbR","a_4",0)
v(s,"gaPv","HE",0)
v(s=C.aCA.prototype,"gcyp","a2_",0)
v(s,"gaeP","vz",0)
v(s,"gcmv","a0A",0)
v(s,"gccO","a_i",0)
w(s,"gc96","c97",30)
v(s,"gbJs","HJ",0)
v(s,"gczp","czq",3)
v(s,"gc_O","Y9",0)
w(s,"gc7D","c7E",23)
v(s,"gcbB","cbC",3)
v(s=C.aB1.prototype,"gc5r","P9",0)
v(s,"gc5t","c5u",3)
v(s,"gbG6","a8U",0)
v(s=C.aCC.prototype,"gbMJ","X_",0)
v(s,"gbX7","XD",0)
v(s,"gcsN","a1q",0)
v(s,"gcp0","a11",0)
v(C.aCB.prototype,"gcoJ","agz",0)
v(C.arO.prototype,"gc7B","ZH",0)
v(C.axS.prototype,"ga1K","JP",3)
v(C.axR.prototype,"ga1K","JP",3)
v(C.awB.prototype,"ga1K","JP",3)
v(s=C.aE7.prototype,"gb03","Q4",0)
v(s,"gbxQ","Vf",0)
v(s,"gccC","ccD",3)
w(C.aE6.prototype,"gc8r","c8s",57)
u(C.aE8.prototype,"gaPp",0,0,null,["$1","$0"],["HD","bHn"],58,0,0)
t(C,"hlY","hYj",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.anF,C.u7,C.n9,C.Hi,C.aeg,C.JB,C.u8,C.JJ,C.Fs,C.bdE,C.aIc,C.aoR,C.d6z,C.lx,C.aSo,C.aSn,C.aQp,C.tG,C.qU,C.lg,C.hX,C.kB,C.aGb])
u(A.hV,[C.fxP,C.fxO,C.fxQ,C.fH_,C.fmR,C.fmS,C.fmX,C.fvy,C.fvx,C.fvw,C.c15,C.fHv,C.fHn,C.fHz,C.fqt,C.dF5,C.dF0,C.dF1,C.dEE,C.dEA,C.dFk,C.dFl,C.dFe,C.dFf,C.dFm,C.dFn,C.fr2,C.ft6,C.ft7,C.fG5,C.fOf,C.fqk,C.fGE,C.d5M,C.d58,C.d5h,C.d5y,C.d5d,C.d5j,C.d5a,C.d5n,C.d5o,C.d5m,C.d5D,C.d5C,C.d7x,C.d7y,C.d7z,C.d6_,C.d64,C.d63,C.cEB,C.cED,C.cY2,C.cYr,C.cYs,C.cYv,C.cYx,C.cYy,C.cYz,C.cYB,C.cYC,C.dTg,C.dSG,C.dSB,C.dS9,C.dSm,C.dSp,C.dSy,C.dRY,C.dSJ,C.dSD,C.dS_,C.dS0,C.dS1,C.dS6,C.dS4,C.dS3,C.dSj,C.dSk,C.dSe,C.dSQ,C.dSM,C.d6a,C.d6b,C.fr6,C.fr7,C.fr8,C.fr4,C.fr5,C.frb,C.frc,C.frd,C.fr9,C.fra,C.d6u,C.d6k,C.d6f,C.d6p,C.d6q,C.d6t,C.d6h,C.d6w,C.d6x,C.d6y,C.f9a,C.eL5,C.dmm,C.dmw,C.dmx,C.dmy,C.dmB,C.dmA,C.dmC,C.dmH,C.dmI,C.c7K,C.c7J,C.c7F,C.c7G,C.c7H,C.c7I,C.c7P,C.c7M,C.c7N,C.dT2,C.dT5,C.dT4,C.dTb,C.dTc,C.dEp,C.fH6,C.fGt,C.fNX,C.fGy,C.fGx,C.cYQ,C.cYR,C.cYM,C.cww,C.cwy,C.cwz,C.cwr,C.cwA,C.f8D,C.fF9,C.eId,C.eI9,C.eI5,C.eI3,C.eIh,C.fNN,C.eIq,C.eIz,C.eIu,C.eIv,C.eIE,C.cvP,C.cvN,C.cvO,C.fqc,C.fOn,C.foD,C.bN1,C.bN0,C.bMY,C.bMZ,C.bN_,C.fbW,C.fbX,C.fGk,C.fGl,C.fGm,C.fGn,C.fGo,C.fOl,C.fqE,C.ftc,C.ftd,C.ftf,C.ftg,C.fG7,C.fOg,C.fOh,C.fOi,C.fql,C.fqm,C.fOr,C.fpS,C.fpT,C.fNY,C.ftZ,C.fG0,C.ft9,C.fta,C.fFW,C.fct,C.fcu,C.fcv,C.fcw,C.fcx,C.fcL,C.fcH,C.fcI,C.fgT,C.fgU,C.fj8,C.fnW,C.fnX])
u(A.au,[C.aXQ,C.ak7,C.aTD,C.Y9,C.b9l,C.bdC,C.bhk,C.bv1,C.bkG,C.acG,C.bhj,C.acF,C.bhi,C.aB2,C.aHe,C.acH,C.Jx,C.bdD,C.abX,C.bdB,C.bdG,C.aXO,C.arO,C.ad1])
u(A.mK,[C.b9X,C.bb9,C.bb0,C.aG6,C.bgn,C.bdF,C.bcJ,C.bis,C.buR])
u(A.j7,[C.fHs,C.fHt,C.fHu,C.fHl,C.fHm,C.fHx,C.fHy,C.dFh,C.dF3,C.dF6,C.dEL,C.dEM,C.dEN,C.dEK,C.dES,C.dEJ,C.dET,C.dEU,C.dEI,C.dEV,C.dEH,C.dEW,C.dEG,C.dEX,C.dEy,C.dEz,C.dEF,C.dEY,C.dED,C.dEZ,C.dEC,C.dEO,C.dEB,C.dEP,C.dEx,C.dEQ,C.dER,C.dFi,C.dFj,C.dF7,C.dF8,C.dF9,C.dFa,C.dFb,C.dFc,C.dFd,C.dFp,C.dFg,C.fr3,C.d56,C.d54,C.d55,C.d57,C.d5L,C.d5A,C.d5x,C.d59,C.d5B,C.d5f,C.d5g,C.d5i,C.d5z,C.d5e,C.d5k,C.d5I,C.d5u,C.d5t,C.d5v,C.d5w,C.d5p,C.d5r,C.d5s,C.d5l,C.d5E,C.d5H,C.d5b,C.d5c,C.d7w,C.d7v,C.d7u,C.d7t,C.d7A,C.d7s,C.d7B,C.d60,C.d61,C.d62,C.d65,C.d5Z,C.d5Y,C.cEC,C.cY1,C.cYe,C.cYd,C.cYt,C.cYc,C.cYu,C.cYb,C.cYa,C.cYw,C.cY9,C.cYm,C.cYl,C.cYD,C.dTf,C.dTe,C.dTh,C.dTi,C.dTj,C.dTd,C.dTl,C.dTk,C.dSE,C.dSF,C.dSH,C.dSa,C.dSo,C.dSn,C.dSq,C.dSA,C.dSt,C.dSs,C.dSu,C.dSr,C.dSv,C.dSw,C.dSz,C.dRZ,C.dSC,C.dS2,C.dS5,C.dS7,C.dSI,C.dSd,C.dSb,C.dSf,C.dSg,C.dSc,C.dSh,C.dSl,C.dSR,C.dSS,C.dSK,C.dSN,C.dSO,C.dSP,C.dSU,C.dSL,C.dS8,C.d69,C.d68,C.d6d,C.d6n,C.d6e,C.eL4,C.dmn,C.dmk,C.dml,C.dmv,C.dmu,C.dmt,C.dmD,C.dms,C.dmE,C.dmr,C.dmF,C.dmq,C.dmG,C.dmp,C.dmo,C.dmz,C.dmJ,C.dmS,C.dT3,C.dT7,C.dT8,C.dT_,C.dT0,C.dT1,C.dT6,C.dTa,C.dT9,C.dSV,C.dSW,C.dSX,C.dSY,C.dSZ,C.dEq,C.fH3,C.cfi,C.cYP,C.cYO,C.cYS,C.cYL,C.cYN,C.cwo,C.cwu,C.cwv,C.cwt,C.cwx,C.cws,C.cwp,C.cwq,C.cwB,C.f8E,C.f8F,C.eIf,C.eI6,C.eI7,C.eI8,C.eIa,C.eIb,C.eIe,C.eI1,C.eI4,C.eIg,C.eI2,C.eIj,C.eIk,C.eIl,C.eIm,C.eIi,C.eHX,C.eHY,C.eHZ,C.eI0,C.eI_,C.eIF,C.eIG,C.eIo,C.eIp,C.eIw,C.eIx,C.eIy,C.eIs,C.eIt,C.eIM,C.eIL,C.eIN,C.eIK,C.eIn,C.eIr,C.eII,C.eIH,C.eIC,C.eID,C.eIB,C.eIA])
u(A.ag,[C.anM,C.Sj,C.YR,C.YV,C.YT,C.Yr,C.aoU,C.aoO,C.Zu,C.aoS,C.ZP,C.ZQ,C.a5L,C.Yt,C.Ys,C.Y0,C.a0A,C.Ff,C.awu,C.arN,C.arH,C.arM,C.NL])
u(A.ah,[C.aC2,C.bdz,C.az6,C.bdU,C.az7,C.bb7,C.aCD,C.aCA,C.aB1,C.aCC,C.aCB,C.biN,C.aKy,C.axS,C.axR,C.awB,C.buU,C.aMJ,C.aMK,C.aE7,C.bk9,C.aE6,C.bwF])
u(A.kj,[C.dF2,C.dF4,C.dF_,C.dFo,C.ft8,C.bMX,C.d5K,C.d5J,C.d5q,C.d5F,C.d5G,C.d66,C.dSx,C.dSi,C.dST,C.d6m,C.d6l,C.d6j,C.d6o,C.d6r,C.d6s,C.d6c,C.d6g,C.d6i,C.d6v,C.c7D,C.c7L,C.c7Q,C.dEr,C.fH5,C.fH4,C.f8B,C.f8C,C.eIc,C.eIJ,C.cvQ,C.fge,C.fbY,C.fte,C.fpU,C.ftb,C.fcK,C.fcJ,C.fgV])
t(C.bit,C.aKy)
u(A.m7,[C.ab_,C.aIU,C.Hj,C.ak8,C.cvR,C.cvS])
t(C.buS,C.aMJ)
t(C.buT,C.aMK)
t(C.aE8,C.bwF)
t(C.b7O,A.b7C)
t(C.buV,A.a5q)
t(C.b7N,C.buV)
w(C.aKy,A.eR)
w(C.aMJ,A.c9)
w(C.aMK,A.c9)
v(C.bwF,A.ez)
v(C.buV,A.j1)})()
A.jW(b.typeUniverse,JSON.parse('{"aXQ":{"au":[],"r":[]},"b9X":{"aB":[]},"anM":{"ag":[],"r":[]},"aC2":{"ah":["anM"]},"Sj":{"ag":[],"r":[]},"ak7":{"au":[],"r":[]},"aTD":{"au":[],"r":[]},"bdz":{"ah":["Sj"]},"YR":{"ag":[],"r":[]},"YV":{"ag":[],"r":[]},"YT":{"ag":[],"r":[]},"Yr":{"ag":[],"r":[]},"az6":{"ah":["YR"]},"bdU":{"ah":["YV"]},"az7":{"ah":["YT"]},"Y9":{"au":[],"r":[]},"bb9":{"aB":[]},"bb0":{"aB":[]},"bb7":{"ah":["Yr"]},"aG6":{"aB":[]},"bgn":{"aB":[]},"b9l":{"au":[],"r":[]},"aoU":{"ag":[],"r":[]},"aoO":{"ag":[],"r":[]},"Zu":{"ag":[],"r":[]},"acH":{"au":[],"r":[]},"aCD":{"ah":["aoU"]},"aCA":{"ah":["aoO"]},"bdC":{"au":[],"r":[]},"bdF":{"aB":[]},"bhk":{"au":[],"r":[]},"bcJ":{"aB":[]},"bv1":{"au":[],"r":[]},"bkG":{"au":[],"r":[]},"aB1":{"ah":["Zu"]},"acG":{"au":[],"r":[]},"bhj":{"au":[],"r":[]},"acF":{"au":[],"r":[]},"bhi":{"au":[],"r":[]},"aB2":{"au":[],"r":[]},"aHe":{"au":[],"r":[]},"Jx":{"au":[],"r":[]},"aoS":{"ag":[],"r":[]},"ZP":{"ag":[],"r":[]},"ZQ":{"ag":[],"r":[]},"aCC":{"ah":["aoS"]},"bdD":{"au":[],"r":[]},"abX":{"au":[],"r":[]},"bdB":{"au":[],"r":[]},"bdG":{"au":[],"r":[]},"aCB":{"ah":["ZP"]},"biN":{"ah":["ZQ"]},"aXO":{"au":[],"r":[]},"a5L":{"ag":[],"r":[]},"bit":{"ah":["a5L"]},"bis":{"aB":[]},"arO":{"au":[],"r":[]},"Yt":{"ag":[],"r":[]},"Ys":{"ag":[],"r":[]},"Y0":{"ag":[],"r":[]},"a0A":{"ag":[],"r":[]},"axS":{"ah":["Yt"]},"axR":{"ah":["Ys"]},"awB":{"ah":["Y0"]},"buU":{"ah":["a0A"]},"Ff":{"ag":[],"r":[]},"awu":{"ag":[],"r":[]},"buS":{"ah":["Ff"]},"buT":{"ah":["awu"]},"buR":{"aB":[]},"arN":{"ag":[],"r":[]},"aE7":{"ah":["arN"]},"ad1":{"au":[],"r":[]},"arH":{"ag":[],"r":[]},"arM":{"ag":[],"r":[]},"bk9":{"ah":["arH"]},"aE6":{"ah":["arM"]},"NL":{"ag":[],"r":[]},"aE8":{"ah":["NL"],"ez":[]},"b7N":{"j1":[],"ff":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aQp"),Q:w("qU"),n:w("bk<n,n>"),c5:w("aSn"),dY:w("aSo"),d:w("eD<n?>"),e:w("Hi"),B:w("n9"),P:w("hX"),k:w("kB"),x:w("az<~>"),f5:w("O<a2A>"),V:w("O<ac>"),t:w("O<qU>"),O:w("O<w>"),ac:w("O<eD<n?>>"),I:w("O<n9>"),u:w("O<hX>"),_:w("O<kB>"),cl:w("O<az<ai<a4<n,@>>>>"),R:w("O<nb>"),cq:w("O<ai<+(M,M)>>"),ez:w("O<a4<n,aC>>"),gE:w("O<a4<n,n>>"),c7:w("O<a4<n,@>>"),fD:w("O<mp>"),bp:w("O<ob>"),g:w("O<u>"),v:w("O<ho>"),L:w("O<+(n,n)>"),G:w("O<+(M,M)>"),bF:w("O<+count,id,name(H,n,n)>"),A:w("O<cR>"),s:w("O<n>"),aS:w("O<iQ>"),p:w("O<r>"),C:w("O<ff>"),D:w("O<lg>"),fp:w("O<JB>"),M:w("O<JJ>"),gZ:w("O<aGb>"),Y:w("O<aeg>"),E:w("O<aIc>"),F:w("O<M>"),dC:w("O<H>"),dS:w("O<aB?>"),d4:w("O<n?>"),J:w("cs<ah<ag>>"),b:w("ai<n9>"),do:w("ai<hX>"),r:w("ai<kB>"),U:w("ai<a4<n,@>>"),gk:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),h:w("ai<n>"),c:w("ai<lg>"),j:w("ai<@>"),fK:w("bv<n,n>"),d2:w("bv<n,ai<a4<n,@>>>"),a:w("a4<n,@>"),f:w("a4<@,@>"),gv:w("K<n,Hk>"),w:w("iA"),g2:w("re"),bV:w("anF"),fL:w("cq"),K:w("aC"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(M,ai<hX>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),e7:w("bo<M>"),gc:w("dD"),b4:w("cx<H>"),W:w("kg<n>"),l:w("r"),cM:w("ff"),i:w("lg"),cc:w("Fs"),bw:w("acF<n?>"),cy:w("JL"),q:w("mY"),y:w("R"),gR:w("M"),z:w("@"),S:w("H"),eK:w("ai<kB>?"),m:w("aoR?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),X:w("+qrPayload,token,usesRemaining(n,n,H)?"),gF:w("+members,trees,viewOnly(H,H,R)?"),Z:w("pS?"),T:w("n?"),aD:w("dD?"),o:w("lg?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aX7=new A.bp(B.he,B.bE,B.he,B.bE)
D.a9T=new A.bp(B.he,B.jI,B.he,B.jI)
D.aXj=new A.bp(B.im,B.bE,B.bE,B.bE)
D.aXn=new A.ay(B.cY,1.4,B.q,-1)
D.aXx=new A.ay(B.ad,1,B.q,-1)
D.aYY=new A.aY(0,1/0,64,1/0)
D.aZ1=new A.aY(0,84,0,1/0)
D.axk=w([B.lG,B.qQ,B.c],x.O)
D.bUr=new A.a8(B.ax,B.aC,B.x,D.axk,null,null)
D.aZM=new A.o(null,null,null,null,null,D.bUr,B.n)
D.cZh=w([B.aV,B.bV],x.O)
D.bWA=new A.a8(B.b_,B.b5,B.x,D.cZh,null,null)
D.b_5=new A.o(null,null,null,null,null,D.bWA,B.n)
D.b5f=new A.fj(null,null,null,null,null,E.jP,null,null,null,null)
D.abb=new A.cr(B.A,null,null,D.b5f,null)
D.kf=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.f_j=new A.G(!0,D.kf,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fio=new A.x("No books on the shelf yet.",null,D.f_j,null,null,null,null,null,null,null,null,null)
D.e6c=new A.D(B.nX,D.fio,null)
D.b3K=new A.cr(B.A,null,null,D.e6c,null)
D.b4D=new A.cr(B.A,null,null,Y.Vu,null)
D.b6L=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b7d=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.aco=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b9T=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.baa=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.adI=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bdX=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bem=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.Ew=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.bfZ=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bil=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.afl=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.fcW=new A.x("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bnS=new A.eD(null,D.fcW,B.eX,null,x.d)
D.flB=new A.x("None",null,null,null,null,null,null,null,null,null,null,null)
D.bnU=new A.eD(null,D.flB,B.eX,null,x.d)
D.bor=new A.b9(38e5)
D.bpb=new A.ic(0,10,0,10)
D.bpl=new A.Q(0,1,0,0)
D.bpv=new A.ic(0,4,0,4)
D.bpN=new A.Q(10,10,14,10)
D.bpZ=new A.ic(10,4,10,4)
D.bq6=new A.ic(10,8,10,8)
D.bq7=new A.Q(10,8,8,8)
D.bqx=new A.Q(12,6,12,2)
D.bqP=new A.Q(14,10,6,6)
D.bqQ=new A.Q(14,12,14,0)
D.bqU=new A.Q(14,12,14,8)
D.bqX=new A.Q(14,12,8,14)
D.br_=new A.ic(14,14,14,14)
D.brE=new A.Q(16,2,16,10)
D.brO=new A.Q(16,6,16,30)
D.brQ=new A.Q(16,6,16,8)
D.ahI=new A.Q(18,16,18,8)
D.bsq=new A.Q(18,20,18,22)
D.ahM=new A.Q(18,24,18,24)
D.bsw=new A.Q(18,30,18,30)
D.bsO=new A.Q(20,10,12,20)
D.bt1=new A.Q(20,18,16,18)
D.bt3=new A.Q(20,18,20,6)
D.btS=new A.Q(24,32,24,28)
D.btT=new A.Q(24,36,24,32)
D.btX=new A.Q(26,26,24,14)
D.bua=new A.Q(2,4,2,8)
D.bue=new A.Q(30,0,30,0)
D.bup=new A.Q(38,22,22,22)
D.ai3=new A.Q(40,24,24,24)
D.bur=new A.ic(40,40,40,40)
D.but=new A.Q(46,30,30,30)
D.ai6=new A.Q(4,0,0,8)
D.buV=new A.Q(56,40,40,40)
D.buZ=new A.Q(1.25,1.25,1.25,1.25)
D.bv_=new A.Q(60,0,60,0)
D.bv2=new A.Q(6,14,6,16)
D.bvf=new A.ic(7,3,7,3)
D.bvL=new A.Q(5,1.5,5,1.5)
D.bvW=new A.Q(6,2.5,6,2.5)
D.fxq=new A.x("Signature",null,B.nu,null,null,null,null,null,null,null,null,null)
D.bwg=new A.bD(1,B.bh,D.fxq,null)
D.fuC=new A.x("Tell the AI what to fix",null,B.dm,null,null,null,null,null,null,null,null,null)
D.bx1=new A.bD(1,B.bh,D.fuC,null)
D.f6B=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwx=new A.x("Worksheets",null,D.f6B,null,null,null,null,null,null,null,null,null)
D.f6J=new A.G(!0,E.abW,null,null,null,null,13,B.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvs=new A.x("Track your project spending",null,D.f6J,null,null,null,null,null,null,null,null,null)
D.cRr=w([D.fwx,B.at,D.fvs],x.p)
D.blb=new A.fq(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cRr,null)
D.bx6=new A.bD(1,B.bh,D.blb,null)
D.f1T=new A.G(!0,E.jP,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc8=new A.x("FAMILY LIBRARY",null,D.f1T,null,null,null,null,null,null,null,null,null)
D.bxn=new A.bD(1,B.bh,D.fc8,null)
D.Mp=new C.Hi("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.Zn=new C.Hj(0,"male")
D.aiZ=new C.Hj(1,"female")
D.xP=new C.Hj(2,"unknown")
D.tG=new C.ak8(0,"owner")
D.Mq=new C.ak8(1,"editor")
D.ko=new C.ak8(2,"viewer")
D.ajL=new A.a_(61199,"MaterialIcons",!1)
D.bBo=new A.a_(61504,"MaterialIcons",!1)
D.bBp=new A.a_(61505,"MaterialIcons",!1)
D.bBr=new A.a_(61587,"MaterialIcons",!1)
D.bBy=new A.a_(61890,"MaterialIcons",!1)
D.bCs=new A.a_(63034,"MaterialIcons",!0)
D.bDh=new A.a_(63429,"MaterialIcons",!1)
D.alY=new A.a_(984520,"MaterialIcons",!1)
D.bBY=new A.a_(62776,"MaterialIcons",!1)
D.bFF=new A.ae(D.bBY,26,B.aZ,null,null,null)
D.bAm=new A.a_(57648,"MaterialIcons",!1)
D.bFX=new A.ae(D.bAm,14,B.c,null,null,null)
D.bGd=new A.ae(B.FD,17,null,null,null,null)
D.bGJ=new A.ae(E.a_g,null,null,null,null,null)
D.bGM=new A.ae(B.jh,18,E.jP,null,null,null)
D.a_2=new A.a_(62044,"MaterialIcons",!1)
D.bGS=new A.ae(D.a_2,null,B.aV,null,null,null)
D.bHH=new A.ae(B.dW,16,null,null,null,null)
D.bHO=new A.ae(D.a_2,32,B.aV,null,null,null)
D.bI6=new A.ae(E.ajM,18,B.cY,null,null,null)
D.bJa=new A.ae(B.FN,22,B.ay,null,null,null)
D.bJm=new A.ae(B.dW,22,B.aZ,null,null,null)
D.bJx=new A.ae(Q.a_7,22,B.c,null,null,null)
D.bJC=new A.ae(B.tQ,52,B.c,null,null,null)
D.bJM=new A.ae(B.FN,30,B.ay,null,null,null)
D.amA=new A.ae(B.tZ,22,B.c,null,null,null)
D.bKd=new A.ae(B.dW,17,null,null,null,null)
D.bKw=new A.ae(B.vG,26,B.cY,null,null,null)
D.bLf=new A.ae(B.a_s,16,null,null,null,null)
D.bM_=new A.ae(B.tQ,24,B.c,null,null,null)
D.bM4=new A.ae(B.MS,20,B.rl,null,null,null)
D.bM9=new A.ae(B.FB,null,B.bV,null,null,null)
D.bMg=new A.ae(B.jh,18,B.c,null,null,null)
D.bMS=new A.ae(B.cD,22,B.ad,null,null,null)
D.bNH=new A.ae(B.e6,16,B.ad,null,null,null)
D.bNT=new A.ae(D.a_2,20,B.aV,null,null,null)
D.an0=new A.ae(B.hA,20,null,null,null,null)
D.bOo=new A.ae(B.cD,18,D.kf,null,null,null)
D.bOG=new A.ae(B.y9,28,B.c,null,null,null)
D.bOP=new A.ae(B.MI,null,B.h_,null,null,null)
D.bP8=new A.ae(B.y9,24,B.c,null,null,null)
D.bPA=new A.ae(B.tQ,null,B.aV,null,null,null)
D.bPB=new A.ae(B.jB,20,B.cY,null,null,null)
D.bPV=new A.ae(B.FD,16,null,null,null,null)
D.bRr=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jy,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ez,!0,null,null,null,null)
D.d5p=w([B.bu,B.aV,B.fa,B.aZ],x.O)
D.bST=new A.a8(B.ax,B.aC,B.x,D.d5p,null,null)
D.beT=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bke=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cOj=w([D.beT,D.bke],x.O)
D.bT3=new A.a8(B.b_,B.b5,B.x,D.cOj,null,null)
D.d02=w([B.eY,B.fx,B.fa],x.O)
D.bT7=new A.a8(B.ax,B.aC,B.x,D.d02,null,null)
D.aej=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b7e=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cQh=w([D.aej,D.b7e],x.O)
D.bTG=new A.a8(B.b_,B.b5,B.x,D.cQh,null,null)
D.bam=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.awH=w([D.bam,D.aej],x.O)
D.bU_=new A.a8(B.ax,B.aC,B.x,D.awH,null,null)
D.adg=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.bcr=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.d_d=w([D.adg,D.bcr],x.O)
D.bUC=new A.a8(B.a3,B.a7,B.x,D.d_d,null,null)
D.dbx=w([B.bG,B.mZ],x.O)
D.bUE=new A.a8(B.b_,B.b5,B.x,D.dbx,null,null)
D.beO=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.dco=w([D.beO,D.kf,D.kf,P.WO],x.O)
D.deA=w([0,0.07,0.9,1],x.F)
D.bV9=new A.a8(B.a3,B.a7,B.x,D.dco,D.deA,null)
D.bVk=new A.a8(B.ax,B.aC,B.x,B.Qo,null,null)
D.db7=w([B.aZ,B.aV,B.bV],x.O)
D.bWk=new A.a8(B.ax,B.aC,B.x,D.db7,null,null)
D.cgO=w([B.bu,B.aZ,B.eY],x.O)
D.cgV=w([B.bt,B.aE,B.j7],x.O)
D.cgX=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bdt=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cn0=w([D.bdt,E.ae0],x.O)
D.e20=new A.u(1,2)
D.eLS=new A.cR(B.aX,D.e20,3)
D.atN=w([D.eLS],x.A)
D.cug=w([B.h2,B.ce,B.f9],x.O)
D.cwV=w([B.bJ,B.bv,B.bm],x.O)
D.bxQ=new C.u7("classic","Classic leather","Gold-edged brown leather",D.awH,E.jP,E.jP,"\u2766",B.L,!0,!1,!1,!1)
D.b6z=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bjb=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cT1=w([D.b6z,D.bjb],x.O)
D.ae4=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bxL=new C.u7("ornate","Ornate gold","Double gold border and flourishes",D.cT1,D.ae4,D.ae4,"\u2726",B.L,!0,!0,!0,!1)
D.ba1=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bfB=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cLi=w([D.ba1,D.bfB],x.O)
D.bxK=new C.u7("parchment","Parchment","Old paper with dark ink",D.cLi,D.Ew,G.iv,"\u2767",B.L,!0,!1,!1,!0)
D.abD=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bhE=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.d9w=w([D.abD,D.bhE],x.O)
D.bd3=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bh0=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bxN=new C.u7("minimal","Clean paper","Plain and elegant, like a printed book",D.d9w,D.bd3,D.bh0,"",B.L,!0,!0,!1,!0)
D.bxP=new C.u7("midnight","Midnight","Deep blue with silver stars",L.awZ,B.cq,B.bL,"\u2727",B.L,!0,!0,!1,!1)
D.bxJ=new C.u7("emerald","Emerald library","Green cloth, title on the left",Z.aub,E.jP,B.h3,"\u25c6",B.bg,!0,!1,!1,!1)
D.bi2=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.d7W=w([B.eo,D.bi2],x.O)
D.be5=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.bfc=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bxO=new C.u7("rose","Rose vintage","Burgundy with rose-gold lettering",D.d7W,D.be5,D.bfc,"\u2740",B.L,!0,!1,!0,!1)
D.dc1=w([B.cB,O.n_],x.O)
D.bxM=new C.u7("modern","Modern","Dark, bold, left-aligned",D.dc1,B.aS,B.c,"",B.bg,!1,!0,!1,!1)
D.a1o=w([D.bxQ,D.bxL,D.bxK,D.bxN,D.bxP,D.bxJ,D.bxO,D.bxM],A.ax("O<u7>"))
D.cKP=w([B.bV,B.bj],x.O)
D.beE=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cLu=w([D.abD,D.beE],x.O)
D.b9Y=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cN3=w([D.b9Y,B.da],x.O)
D.cOz=w([B.b8,B.iM,B.ou],x.O)
D.cOW=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b7a=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.bbN=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.dew=w([D.adg,D.b7a,D.bbN],x.O)
D.bxR=new C.u8("leather","Leather",D.dew,"vintage")
D.cVY=w([B.di,B.KI,A4.W0],x.O)
D.bxY=new C.u8("midnight","Midnight",D.cVY,"starry")
D.cOA=w([B.f2,B.e_,B.lb],x.O)
D.bxX=new C.u8("forest","Forest",D.cOA,"story")
D.dgo=w([B.eO,B.eo,B.ki],x.O)
D.bxU=new C.u8("burgundy","Burgundy",D.dgo,"royal")
D.cwv=w([B.aE,B.pv,B.nD],x.O)
D.bxV=new C.u8("royal","Royal",D.cwv,"royal")
D.cQU=w([B.bv,B.cB,O.n_],x.O)
D.bxS=new C.u8("charcoal","Charcoal",D.cQU,"geo")
D.deE=w([B.ci,B.dQ,B.x4],x.O)
D.bxW=new C.u8("sunset","Sunset",D.deE,"sunset")
D.dfi=w([B.iM,B.Ex,B.W4],x.O)
D.bxT=new C.u8("ocean","Ocean",D.dfi,"band")
D.yF=w([D.bxR,D.bxY,D.bxX,D.bxU,D.bxV,D.bxS,D.bxW,D.bxT],A.ax("O<u8>"))
D.cRj=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cRS=w([B.ak,B.aK,B.M],x.O)
D.cT6=w([B.eo,B.e_,B.di,B.fy,B.x8,B.cY,B.jS,B.ep,B.d8],x.O)
D.cT7=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eLT=new A.cR(B.dq,B.dE,8)
D.cTg=w([D.eLT],x.A)
D.cUj=w([B.bZ,B.dQ,B.kg],x.O)
D.cUM=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cVU=w([B.bZ,B.hi],x.O)
D.cXW=w([B.aM,B.x5,B.wX],x.O)
D.cYO=w([B.bK,B.cf,B.dv,B.aM],x.O)
D.cZi=w([B.j8,B.ci,B.tb],x.O)
D.cZN=w([B.eY,B.cY],x.O)
D.d_i=w([B.cs,B.fj,B.hl],x.O)
D.d_t=w([B.aS,B.bj,B.di],x.O)
D.d0_=w([B.et,B.cZ,B.e_],x.O)
D.d0g=w([B.dO,B.di,B.KI],x.O)
D.d1w=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a2h=w(["leather","linen","plain","stars","rays"],x.s)
D.bFk=new A.a_(985219,"MaterialIcons",!1)
D.bET=new A.a_(983781,"MaterialIcons",!1)
D.awp=w([B.aka,B.i0,B.lO,B.i1,D.bFk,B.FX,B.pR,D.bET,L.alL,B.yb,B.pT,B.ms],A.ax("O<a_>"))
D.a2m=w(["double","single","corners","none"],x.s)
D.d49=w([B.dA,B.bn,B.ep],x.O)
D.d4m=w([],x.t)
D.C6=w([],x.u)
D.d6y=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.d8P=w([B.aH,B.fj,B.fy],x.O)
D.da6=w([B.cd,B.mU,B.WY],x.O)
D.dal=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dt2=new C.lx("construction","Construction","Jobsite & builds",B.y1)
D.dt9=new C.lx("house","Home Build","Houses & rooms",B.vB)
D.dt_=new C.lx("grocery","Grocery","Store & pantry",B.a0_)
D.dsZ=new C.lx("calculator","Calculations","Math & estimates",B.N2)
D.dt7=new C.lx("lumber","Materials","Lumber & supplies",B.Nj)
D.dsW=new C.lx("kitchen","Kitchen","Remodel & meals",Aa.akY)
D.bEQ=new A.a_(983756,"MaterialIcons",!1)
D.dt0=new C.lx("landscape","Landscaping","Yard & garden",D.bEQ)
D.dsV=new C.lx("plumbing","Plumbing","Pipes & water",B.q0)
D.dta=new C.lx("electrical","Electrical","Wiring & power",B.h8)
D.dsT=new C.lx("store","Retail Shop","Daily business",B.kS)
D.dsU=new C.lx("paint_remodel","Paint & Remodel","Colors & walls",Ab.a_y)
D.bEe=new A.a_(983311,"MaterialIcons",!1)
D.dt6=new C.lx("roofing","Roofing","Roofs & exteriors",D.bEe)
D.bF2=new A.a_(983986,"MaterialIcons",!1)
D.dsS=new C.lx("warehouse","Warehouse","Storage & stock",D.bF2)
D.dt4=new C.lx("vehicles","Vehicles","Fleet & transport",B.FY)
D.bC_=new A.a_(62785,"MaterialIcons",!1)
D.dsY=new C.lx("farm","Farm","Crops & livestock",D.bC_)
D.dsX=new C.lx("restaurant","Restaurant","Food & catering",B.tX)
D.dt3=new C.lx("tools","Tools","Workshop gear",B.FU)
D.dt8=new C.lx("wallet","Cash & Wallet","Quick spending",B.jB)
D.bDc=new A.a_(63395,"MaterialIcons",!1)
D.dt5=new C.lx("concrete","Concrete","Foundation work",D.bDc)
D.dt1=new C.lx("blueprint","Blueprint","Plans & design",Ag.akg)
D.a2P=w([D.dt2,D.dt9,D.dt_,D.dsZ,D.dt7,D.dsW,D.dt0,D.dsV,D.dta,D.dsT,D.dsU,D.dt6,D.dsS,D.dt4,D.dsY,D.dsX,D.dt3,D.dt8,D.dt5,D.dt1],A.ax("O<lx>"))
D.daP=w([B.br,B.bn],x.O)
D.dby=w([B.i8,B.nI,B.dH],x.O)
D.a2X=w(["top","middle","bottom"],x.s)
D.ddV=w([B.cr,B.bj,B.di],x.O)
D.der=w([B.b2,B.cZ,B.e_],x.O)
D.dgj=w([B.bJ,B.ak],x.O)
D.dgk=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.e_C={top:0,middle:1,bottom:2}
D.dju=new A.bk(D.e_C,["Top","Middle","Bottom"],x.n)
D.e_g={double:0,single:1,corners:2,none:3}
D.djz=new A.bk(D.e_g,["Double line","One line","Corners","None"],x.n)
D.e0q={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dkZ=new A.bk(D.e0q,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dla=new A.bk(B.i4,[],A.ax("bk<H,+(n,n)>"))
D.e_u={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Ch=new A.bk(D.e_u,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bk<n,H>"))
D.dnC=new F.MD(32,null)
D.dnD=new F.MD(40,null)
D.dnE=new F.MD(46,null)
D.aFG=new C.arM(null)
D.e2Z=new A.u(8,14)
D.fj0=new A.x("Write a new book",null,B.i6,null,B.L,null,null,null,null,null,null,null)
D.e5F=new A.D(B.kO,D.fj0,null)
D.amb=new A.ae(B.hz,18,B.c,null,null,null)
D.fcu=new A.x("Add",null,B.m3,null,null,null,null,null,null,null,null,null)
D.cZ2=w([D.amb,B.qg,D.fcu],x.p)
D.eJP=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cZ2,null)
D.e6_=new A.D(B.nW,D.eJP,null)
D.e60=new A.D(E.agx,Y.Vu,null)
D.f6w=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffw=new A.x("New Project",null,D.f6w,null,null,null,null,null,null,null,null,null)
D.d1S=w([D.amb,B.ab,D.ffw],x.p)
D.eJS=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d1S,null)
D.e6b=new A.D(B.ie,D.eJS,null)
D.fhO=new A.x("Choose your header",null,T.rH,null,null,null,null,null,null,null,null,null)
D.e6w=new A.D(B.hx,D.fhO,null)
D.b5u=new A.fj(2.2,null,null,null,null,B.cY,null,null,null,null)
D.eOw=new A.a7(22,22,D.b5u,null)
D.b3G=new A.cr(B.A,null,null,D.eOw,null)
D.e6B=new A.D(B.XV,D.b3G,null)
D.br8=new A.Q(14,2,14,6)
D.fvb=new A.x("The top of your book. Tap a design to see it.",null,S.IM,null,null,null,null,null,null,null,null,null)
D.e6C=new A.D(D.br8,D.fvb,null)
D.e89=new A.iO(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.e8c=new A.iO(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aGV=new A.iO(1,0.9607843137254902,0.48627450980392156,0)
D.HZ=new A.iO(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.zc=new A.iO(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.e8i=new A.iO(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fSf=new C.bgn(null)
D.bmh=new A.mg(D.fSf,null,B.au,null,null)
D.aKz=new A.cL(0,0,0,0,null,null,D.bmh,null)
D.ew1=new A.y(-42,42)
D.eEy=new A.cD([0,0,1,1])
D.aLR=new A.a9(0,0,520,160)
D.fuK=new A.x("Let the AI write it from your tree",null,B.k7,null,B.L,null,null,null,null,null,null,null)
D.byu=new A.dq(1,B.cn,D.fuK,null)
D.cVT=w([E.a0t,B.ab,D.byu],x.p)
D.eJx=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cVT,null)
D.fc9=new A.x("Save member",null,B.ck,null,null,null,null,null,null,null,null,null)
D.d95=w([D.an0,B.ab,D.fc9],x.p)
D.eJF=new A.cn(B.aO,B.bb,B.j,B.m,null,B.p,null,0,D.d95,null)
D.bJr=new A.ae(B.hM,14,B.aZ,null,null,null)
D.f0x=new A.G(!0,B.aZ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffW=new A.x("Cashier",null,D.f0x,null,null,null,null,null,null,null,null,null)
D.d2o=w([D.bJr,B.bp,D.ffW],x.p)
D.eJH=new A.cn(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d2o,null)
D.fca=new A.x("Transfer & settings",null,B.dm,null,null,null,null,null,null,null,null,null)
D.bwT=new A.bD(1,B.bh,D.fca,null)
D.cO1=w([D.amA,B.av,D.bwT],x.p)
D.eJI=new A.cn(B.aO,B.e,B.j,B.m,null,B.p,null,0,D.cO1,null)
D.eNg=new A.ar(16,40)
D.eNl=new A.ar(22,64)
D.eNs=new A.ar(280,88)
D.eOc=new A.a7(30,null,null,null)
D.ePu=new A.hL(2,12,12,1.05,null)
D.ffC=new A.x("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eQc=new A.b1(D.ffC,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ffR=new A.x("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aNU=new A.b1(D.ffR,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fnS=new A.x("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eQG=new A.b1(D.fnS,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fy_=new A.x("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eQL=new A.b1(D.fy_,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fhM=new A.x("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eQS=new A.b1(D.fhM,null,null,null,null,null,null,null,null,null,null,null,null,B.fH,!1,null,null,null,B.r,null)
D.fvo=new A.x("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aNY=new A.b1(D.fvo,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fcL=new A.x("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eRh=new A.b1(D.fcL,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fyF=new A.x("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eS0=new A.b1(D.fyF,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ftI=new A.x("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eSp=new A.b1(D.ftI,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fy3=new A.x("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eSs=new A.b1(D.fy3,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fpp=new A.x("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eSu=new A.b1(D.fpp,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fjB=new A.x("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eSv=new A.b1(D.fjB,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fjC=new A.x("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eTv=new A.b1(D.fjC,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ffE=new A.x("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eTN=new A.b1(D.ffE,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fht=new A.x("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eU5=new A.b1(D.fht,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.foV=new A.x("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eUl=new A.b1(D.foV,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fkp=new A.x("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eUm=new A.b1(D.fkp,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.eXw=new A.G(!0,D.kf,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXW=new A.G(!0,D.kf,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYz=new A.ry(!0,B.ru,null,null,null,null,B.ds,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYQ=new A.G(!0,D.kf,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZn=new A.G(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7b=new A.ry(!0,B.RK,null,null,null,null,B.ds,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_m=new A.G(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_L=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1k=new A.G(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1o=new A.G(!0,G.iv,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2E=new A.G(!0,B.M,null,null,null,null,13,B.a5,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3m=new A.G(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f44=new A.G(!0,B.bV,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f48=new A.G(!0,B.bG,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4u=new A.G(!0,D.Ew,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4D=new A.G(!0,B.aZ,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5B=new A.G(!0,B.cY,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f64=new A.G(!0,B.bV,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6u=new A.G(!0,B.aZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7V=new A.G(!0,B.ak,null,null,null,null,11.5,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f82=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQ7=new A.G(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7G=new A.G(!0,B.ak,null,null,null,null,12,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9I=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa4=new A.G(!0,G.iv,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fac=new A.G(!0,G.iv,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb_=new A.x("Themes",null,B.p6,null,null,null,null,null,null,null,null,null)
D.fbB=new A.x("Add Item",null,B.ck,null,null,null,null,null,null,null,null,null)
D.f13=new A.G(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc_=new A.x("Debt receipt",null,D.f13,null,B.L,null,null,null,null,null,null,null)
D.aQ2=new A.G(!0,B.ak,null,null,null,null,11,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fch=new A.x("Person who owes",null,D.aQ2,null,null,null,null,null,null,null,null,null)
D.fdd=new A.x("Notes",null,B.a7k,null,null,null,null,null,null,null,null,null)
D.fdD=new A.x("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.f02=new A.G(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdH=new A.x("Share",null,D.f02,null,null,null,null,null,null,null,null,null)
D.feE=new A.x("Move your family trees",null,D.aQ7,null,null,null,null,null,null,null,null,null)
D.ffe=new A.x("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.ffQ=new A.x("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fh3=new A.x("Remove this book?",null,B.hs,null,null,null,null,null,null,null,null,null)
D.aQy=new A.x("Download",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fi9=new A.x("What should the AI do?",null,B.dm,null,null,null,null,null,null,null,null,null)
D.fjx=new A.x("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fkE=new A.x("Ribbon bookmark",null,B.iH,null,null,null,null,null,null,null,null,null)
D.f7P=new A.G(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl7=new A.x("NGMY.ORG",null,D.f7P,null,B.L,null,null,null,null,null,null,null)
D.fmo=new A.x("Scan family tree QR",null,B.cx,null,null,null,null,null,null,null,null,null)
D.f4m=new A.G(!0,B.c,null,null,null,null,13,B.a5,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn7=new A.x("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.f4m,null,B.L,null,null,null,null,null,null,null)
D.foj=new A.x("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.foq=new A.x("Thumbnail",null,B.p6,null,null,null,null,null,null,null,null,null)
D.fp0=new A.x("Save the cover",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fpq=new A.x("Your photos",null,B.p6,null,null,null,null,null,null,null,null,null)
D.fpF=new A.x("Create Project",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fq9=new A.x("Design your cover",null,T.rH,null,null,null,null,null,null,null,null,null)
D.fqg=new A.x("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fqj=new A.x("PICTURE",null,H.mK,null,null,null,null,null,null,null,null,null)
D.fqF=new A.x("Paid",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fqH=new A.x("You can undo it right after.",null,S.IS,null,null,null,null,null,null,null,null,null)
D.frc=new A.x("Print",null,B.uC,null,null,null,null,null,null,null,null,null)
D.fry=new A.x("Amount owed",null,D.aQ2,null,null,null,null,null,null,null,null,null)
D.frM=new A.x("Got it",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fsl=new A.x("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fso=new A.x("Add to budget",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fsP=new A.x("Debtor signature",null,B.a7k,null,null,null,null,null,null,null,null,null)
D.fsY=new A.x("Change icon",null,E.aPk,null,null,null,null,null,null,null,null,null)
D.fua=new A.x("Family tree QR",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fuA=new A.x("Download",null,B.uC,null,null,null,null,null,null,null,null,null)
D.fuE=new A.x("Change",null,B.p6,null,null,null,null,null,null,null,null,null)
D.fvu=new A.x("Clear all",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fvx=new A.x("WHAT SHOULD IT CHANGE?",null,H.mK,null,null,null,null,null,null,null,null,null)
D.fw6=new A.x("COLOUR",null,H.mK,null,null,null,null,null,null,null,null,null)
D.fwi=new A.x("Do it",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fwl=new A.x("Create Tree",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fxk=new A.x("Create Family Tree",null,B.eV,null,null,null,null,null,null,null,null,null)
D.eWv=new A.G(!0,E.jP,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxA=new A.x("Write the first page myself",null,D.eWv,null,null,null,null,null,null,null,null,null)
D.fy6=new A.x("Use this header",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fyc=new A.x("Create Project",null,E.aPM,null,null,null,null,null,null,null,null,null)
D.fOM=new C.ab_(1,"header")
D.a8y=new C.ab_(2,"projects")
D.fON=new C.ab_(3,"cashier")
D.a8z=new C.ab_(4,"familyTree")
D.h_h=new C.cvR(0,"start")
D.h_i=new C.cvS(0,"start")
D.fPa=new C.Y0(null)
D.fQ9=new C.Ys(null)
D.dl7=new A.bk(B.i4,[],A.ax("bk<n,Fs>"))
D.d4K=w([],x.E)
D.d4L=w([],x.M)
D.fQG=new C.bdE(D.dl7,D.d4K,D.d4L,0,0,null,null)
D.fSU=new C.ZQ(null)
D.a9g=new C.aIU(0,"projects")
D.aUL=new C.aIU(1,"cashier")
D.fY8=new C.aIU(2,"familyTree")})()};
(a=>{a["nqJbfaV9PhGbiL4zxJ/d7v2FL3k="]=a.current})($__dart_deferred_initializers__);